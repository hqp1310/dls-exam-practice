const fs = require('fs');
const c = fs.readFileSync('cheatsheet_duocly2.js', 'utf8');

for (let i = 1; i <= 20; i++) {
  const pJump = c.indexOf(`onclick="jumpToDl2Topic(`, c.indexOf(`id="dl2-body-dl2_ch${i}"`));
  if (pJump !== -1) {
    const start = c.lastIndexOf('<div', pJump);
    const end = c.indexOf('</div>', pJump) + 6;
    console.log(`Bài ${i} bottom:`, c.slice(start, end).replace(/\s+/g, ' '));
  } else {
    console.log(`Bài ${i} bottom: NOT FOUND`);
  }
}
