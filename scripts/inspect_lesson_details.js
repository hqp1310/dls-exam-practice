const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '..', 'cheatsheet_duocly2.js');
const c = fs.readFileSync(targetPath, 'utf8');

for (let i = 1; i <= 20; i++) {
  const bodyTag = `id="dl2-body-dl2_ch${i}"`;
  const p1 = c.indexOf(bodyTag);
  const nextItemTag = (i < 20) ? `id="dl2-item-dl2_ch${i+1}"` : `id="dl2-sec-drugs"`;
  let p2 = c.indexOf(nextItemTag);
  if (p2 === -1) p2 = c.indexOf('<!-- PHẦN 2');
  
  const content = c.slice(p1, p2);
  const headings = [];
  const hRegex = /<h4[^>]*>(.*?)<\/h4>/g;
  let hm;
  while ((hm = hRegex.exec(content)) !== null) {
    headings.push(hm[1].replace(/<[^>]+>/g, '').trim());
  }
  
  const boldMatches = [];
  const bRegex = /<strong>(.*?)<\/strong>/g;
  let bm;
  while ((bm = bRegex.exec(content)) !== null && boldMatches.length < 8) {
    boldMatches.push(bm[1].replace(/<[^>]+>/g, '').trim());
  }
  
  console.log(`\n=== BÀI ${i} ===`);
  console.log('Headings:', headings);
  console.log('Key topics:', boldMatches.slice(0, 6));
}
