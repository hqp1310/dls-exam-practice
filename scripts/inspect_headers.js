const fs = require('fs');
const c = fs.readFileSync('cheatsheet_duocly2.js', 'utf8');

for (let i = 1; i <= 20; i++) {
  const pItem = c.indexOf(`id="dl2-item-dl2_ch${i}"`);
  const pBody = c.indexOf(`id="dl2-body-dl2_ch${i}"`);
  if (pItem !== -1 && pBody !== -1) {
    console.log(`--- Bài ${i} ---`);
    console.log(c.slice(pItem, pBody).trim());
  } else {
    console.error(`Missing item or body for Bài ${i}`);
  }
}
