const fs = require('fs');
const c = fs.readFileSync('cheatsheet_duocly2.js', 'utf8');

for (let i = 1; i <= 20; i++) {
  const chId = 'dl2_ch' + i;
  const pBody = c.indexOf(`id="dl2-body-${chId}"`);
  if (pBody === -1) {
    console.log(`ch${i}: body not found`);
    continue;
  }
  let pEnd = -1;
  if (i < 20) {
    pEnd = c.indexOf(`id="dl2-item-dl2_ch${i + 1}"`, pBody);
  } else {
    pEnd = c.indexOf('function generateQuickDrugTableHtml()', pBody);
  }
  const slice = c.slice(pBody, pEnd);
  const lastDiv = slice.lastIndexOf('</div>');
  const secondLast = slice.lastIndexOf('</div>', lastDiv - 1);
  console.log(`ch${i} body ends with:`, JSON.stringify(slice.slice(secondLast - 80, secondLast)));
}
