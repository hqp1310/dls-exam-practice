// Apply all comprehensive upgrades to cheatsheet_duocly2.js
const fs = require('fs');
const path = require('path');

const batchA = require('./content_batch_a.js');
const batchB = require('./content_batch_b.js');
const batchC = require('./content_batch_c.js');
const batchD = require('./content_batch_d.js');

const allUpgrades = {
  1: batchA.ch1,
  3: batchA.ch3,
  4: batchA.ch4,
  5: batchA.ch5,
  6: batchA.ch6,
  8: batchB.ch8,
  9: batchB.ch9,
  10: batchB.ch10,
  11: batchB.ch11,
  12: batchB.ch12,
  13: batchC.ch13,
  14: batchC.ch14,
  15: batchC.ch15,
  16: batchC.ch16,
  17: batchC.ch17,
  18: batchD.ch18,
  19: batchD.ch19,
  20: batchD.ch20
};

const cheatsheetPath = path.join(__dirname, '..', 'cheatsheet_duocly2.js');
let content = fs.readFileSync(cheatsheetPath, 'utf8');
console.log('Original cheatsheet length:', content.length);

// We replace from ch20 down to ch1 to prevent index shifts
const chaptersToUpdate = Object.keys(allUpgrades).map(Number).sort((a, b) => b - a);

for (const chNum of chaptersToUpdate) {
  const newInnerBody = allUpgrades[chNum];
  const bodyMarker = `<div class="chapter-accordion-body" id="dl2-body-dl2_ch${chNum}" style="display: \${dl2OpenAccordions['dl2_ch${chNum}'] ? 'block' : 'none'};">`;
  const startIdx = content.indexOf(bodyMarker);
  if (startIdx === -1) {
    console.error(`ERROR: Marker not found for Bài ${chNum}!`);
    process.exit(1);
  }
  const contentStart = startIdx + bodyMarker.length;

  let contentEnd = -1;
  if (chNum < 20) {
    const nextItemMarker = `<!-- BÀI ${chNum + 1}:`;
    const nextItemIdx = content.indexOf(nextItemMarker, contentStart);
    if (nextItemIdx === -1) {
      console.error(`ERROR: Next item marker not found for Bài ${chNum}!`);
      process.exit(1);
    }
    const beforeNext = content.slice(contentStart, nextItemIdx);
    const lastClose = beforeNext.lastIndexOf('</div>');
    const secondLastClose = beforeNext.lastIndexOf('</div>', lastClose - 1);
    if (secondLastClose === -1) {
      console.error(`ERROR: Closing tags not found for Bài ${chNum}!`);
      process.exit(1);
    }
    contentEnd = contentStart + secondLastClose;
  } else {
    // chNum === 20
    const endFnMarker = 'function generateQuickDrugTableHtml()';
    const fnIdx = content.indexOf(endFnMarker, contentStart);
    if (fnIdx === -1) {
      console.error('ERROR: endFnMarker not found for Bài 20!');
      process.exit(1);
    }
    const beforeFn = content.slice(contentStart, fnIdx);
    const lastClose = beforeFn.lastIndexOf('</div>');
    const secondLastClose = beforeFn.lastIndexOf('</div>', lastClose - 1);
    if (secondLastClose === -1) {
      console.error('ERROR: Closing tags not found for Bài 20!');
      process.exit(1);
    }
    contentEnd = contentStart + secondLastClose;
  }

  console.log(`Replacing Bài ${chNum}: [${contentStart} .. ${contentEnd}] (old length = ${contentEnd - contentStart}, new length = ${newInnerBody.length})`);
  content = content.slice(0, contentStart) + '\n' + newInnerBody.trim() + '\n        ' + content.slice(contentEnd);
}

fs.writeFileSync(cheatsheetPath, content, 'utf8');
console.log('Successfully upgraded cheatsheet_duocly2.js! New length:', content.length);
