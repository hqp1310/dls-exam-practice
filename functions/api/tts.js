export async function onRequest(context) {
  const { searchParams } = new URL(context.request.url);
  const text = searchParams.get('text') || searchParams.get('q');
  
  if (!text || !text.trim()) {
    return new Response('Missing text parameter', {
      status: 400,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Access-Control-Allow-Origin': '*'
      }
    });
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
      const url = 'https://translate.google.com/translate_tts?ie=UTF-8&tl=vi&client=tw-ob&q=' + encodeURIComponent(chunk);
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Referer': 'https://translate.google.com/'
        }
      });
      if (!res.ok) {
        throw new Error('Google TTS HTTP ' + res.status);
      }
      const arrayBuf = await res.arrayBuffer();
      buffers.push(arrayBuf);
    }

    const totalLength = buffers.reduce((acc, b) => acc + b.byteLength, 0);
    const combined = new Uint8Array(totalLength);
    let offset = 0;
    for (const b of buffers) {
      combined.set(new Uint8Array(b), offset);
      offset += b.byteLength;
    }

    return new Response(combined, {
      status: 200,
      headers: {
        'Content-Type': 'audio/mpeg',
        'Content-Length': combined.byteLength.toString(),
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=86400'
      }
    });
  } catch (err) {
    return new Response('TTS generation failed: ' + err.message, {
      status: 502,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}
