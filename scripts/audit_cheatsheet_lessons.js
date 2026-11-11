const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '..', 'cheatsheet_duocly2.js');
const c = fs.readFileSync(targetPath, 'utf8');

for (let i = 1; i <= 20; i++) {
  const marker = `id="dl2-body-dl2_ch${i}"`;
  const nextMarker = (i < 20) ? `id="dl2-body-dl2_ch${i+1}"` : `id="dl2-sec-drugs"`;
  const pos = c.indexOf(marker);
  const nextPos = c.indexOf(nextMarker);
  const length = (pos !== -1 && nextPos !== -1) ? (nextPos - pos) : -1;
  
  // Extract title
  const headMarker = `id="dl2-head-dl2_ch${i}"`;
  const headPos = c.indexOf(headMarker);
  let title = `Bài ${i}`;
  if (headPos !== -1) {
    const snippet = c.slice(headPos, headPos + 300);
    const m = snippet.match(/<span>([^<]+)<\/span>/);
    if (m) title = m[1];
  }
  
  console.log(`Bài ${i}: ${title} -> Length: ${length} chars`);
}
