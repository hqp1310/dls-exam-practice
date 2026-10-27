const https = require('https');

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

module.exports = async (req, res) => {
  const text = (req.query && (req.query.text || req.query.q)) || '';
  if (!text || !text.trim()) {
    res.status(400).setHeader('Content-Type', 'text/plain; charset=utf-8').send('Missing text parameter');
    return;
  }

  const clean = text.trim();
  const parts = clean.split(/(?<=[.?!;\n,])\s+/g);
  const chunks = [];
  let current = '';

  for (let p of parts) {
    p = p.trim();
    if (!p) continue;
    if ((current + ' ' + p).trim().length <= 140) {
      current = (current + ' ' + p).trim();
    } else {
      if (current) chunks.push(current);
      current = p;
    }
  }
  if (current && current.trim()) chunks.push(current.trim());
  if (!chunks.length) chunks.push(clean.slice(0, 140));

  try {
    const buffers = [];
    for (const chunk of chunks) {
      const b = await fetchGoogleTtsPart(chunk);
      buffers.push(b);
    }
    const fullAudio = Buffer.concat(buffers);
    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Content-Length', fullAudio.length);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.status(200).send(fullAudio);
  } catch (err) {
    console.error('TTS error on Vercel:', err.message);
    res.status(502).setHeader('Content-Type', 'text/plain; charset=utf-8').send('Failed to fetch from Google TTS');
  }
};
