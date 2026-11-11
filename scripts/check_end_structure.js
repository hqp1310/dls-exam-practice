const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '..', 'cheatsheet_duocly2.js');
const c = fs.readFileSync(targetPath, 'utf8');

for (let i = 1; i <= 3; i++) {
  const bodyStart = c.indexOf(`id="dl2-body-dl2_ch${i}"`);
  const nextItem = (i < 20) ? c.indexOf(`id="dl2-item-dl2_ch${i+1}"`) : c.indexOf('<!-- PHẦN 2');
  const slice = c.slice(nextItem - 100, nextItem);
  console.log(`End of Bài ${i}:`);
  console.log(slice);
}
