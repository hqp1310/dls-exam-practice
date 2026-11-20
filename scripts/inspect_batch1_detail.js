const fs = require('fs');
const data = require('./batch1_targets.json');

let out = '';
data.forEach(q => {
  out += `ID: ${q.id} | ${q.chapter} | Correct: ${q.correct}\n`;
  out += `Q: ${q.question}\n`;
  q.options.forEach((opt, idx) => {
    out += `  [${idx}] ${idx === q.correct ? '(*)' : '   '} [${opt.length}] ${opt}\n`;
  });
  out += '\n';
});

fs.writeFileSync('./scripts/batch1_detail.txt', out, 'utf8');
console.log('Saved batch1_detail.txt');
