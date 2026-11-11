const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '..', 'cheatsheet_duocly2.js');
const c = fs.readFileSync(targetPath, 'utf8');

for (let i = 1; i <= 20; i++) {
  const itemTag = `id="dl2-item-dl2_ch${i}"`;
  const nextItemTag = (i < 20) ? `id="dl2-item-dl2_ch${i+1}"` : `<!-- ========================================================================= -->\n    <!-- PHẦN 2: BẢNG TRA CỨU HOẠT CHẤT`;
  
  const p1 = c.indexOf(itemTag);
  const p2 = c.indexOf(nextItemTag);
  
  // Also check length of body
  const bodyTag = `id="dl2-body-dl2_ch${i}"`;
  const pBody = c.indexOf(bodyTag);
  
  console.log(`Bài ${i}: item starts at ${p1}, body starts at ${pBody}, length = ${p2 - p1}`);
}
