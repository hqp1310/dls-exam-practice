const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const PORT = 8085;
const BASE_DIR = path.resolve(__dirname, '..');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml',
  '.mp3': 'audio/mpeg'
};

// In-memory cache for generated TTS audio buffers (max 300 entries)
const ttsCache = new Map();

function splitIntoTtsChunks(text, maxLen = 140) {
  if (!text) return [];
  const parts = text.split(/(?<=[.?!;\n,])\s+/g);
  const chunks = [];
  let current = '';
  for (let p of parts) {
    p = p.trim();
    if (!p) continue;
    if ((current + ' ' + p).trim().length <= maxLen) {
      current = (current + ' ' + p).trim();
    } else {
      if (current) chunks.push(current);
      if (p.length > maxLen) {
        const words = p.split(/\s+/);
        let wc = '';
        for (let w of words) {
          if ((wc + ' ' + w).trim().length <= maxLen) {
            wc = (wc + ' ' + w).trim();
          } else {
            if (wc) chunks.push(wc);
            wc = w;
          }
        }
        current = wc;
      } else {
        current = p;
      }
    }
  }
  if (current && current.trim()) chunks.push(current.trim());
  return chunks.length ? chunks : [text.slice(0, maxLen)];
}

function fetchGoogleTtsPart(text) {
  return new Promise((resolve, reject) => {
    const url = 'https://translate.google.com/translate_tts?ie=UTF-8&tl=vi&client=tw-ob&q=' + encodeURIComponent(text);
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': 'https://translate.google.com/'
      }
    }, res => {
      if (res.statusCode !== 200) {
        return reject(new Error('Google TTS HTTP status ' + res.statusCode));
      }
      const data = [];
      res.on('data', c => data.push(c));
      res.on('end', () => resolve(Buffer.concat(data)));
    }).on('error', reject);
  });
}

async function handleTtsRequest(req, res, queryText) {
  if (!queryText || !queryText.trim()) {
    res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8', 'Access-Control-Allow-Origin': '*' });
    res.end('Missing text parameter');
    return;
  }
  const clean = queryText.trim();
  if (ttsCache.has(clean)) {
    const cached = ttsCache.get(clean);
    res.writeHead(200, {
      'Content-Type': 'audio/mpeg',
      'Content-Length': cached.length,
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=86400'
    });
    res.end(cached);
    return;
  }

  const chunks = splitIntoTtsChunks(clean, 140);
  try {
    const buffers = [];
    for (const chunk of chunks) {
      const buf = await fetchGoogleTtsPart(chunk);
      buffers.push(buf);
    }
    const fullAudio = Buffer.concat(buffers);
    if (ttsCache.size > 300) {
      const firstKey = ttsCache.keys().next().value;
      ttsCache.delete(firstKey);
    }
    ttsCache.set(clean, fullAudio);

    res.writeHead(200, {
      'Content-Type': 'audio/mpeg',
      'Content-Length': fullAudio.length,
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=86400'
    });
    res.end(fullAudio);
  } catch (err) {
    console.error('Error generating Google TTS:', err.message);
    res.writeHead(502, { 'Content-Type': 'text/plain; charset=utf-8', 'Access-Control-Allow-Origin': '*' });
    res.end('Failed to fetch from Google TTS');
  }
}

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host || '127.0.0.1:8085'}`);
  
  // API: Google TTS endpoint
  if (parsedUrl.pathname === '/api/tts') {
    const text = parsedUrl.searchParams.get('text') || parsedUrl.searchParams.get('q');
    handleTtsRequest(req, res, text);
    return;
  }

  let reqPath = decodeURIComponent(parsedUrl.pathname);
  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';
  
  const filePath = path.join(BASE_DIR, reqPath);
  
  // Security check
  if (!filePath.startsWith(BASE_DIR)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0'
    });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Server listening on http://127.0.0.1:${PORT}`);
});
