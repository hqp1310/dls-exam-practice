const fs = require('fs');
const path = require('path');
const { DUOCLY2_EXAM_BANK } = require('../questions_duocly2.js');

const candidates = [];

DUOCLY2_EXAM_BANK.forEach(q => {
  const lens = q.options.map(o => o.length);
  const diff = Math.max(...lens) - Math.min(...lens);
  const isDirect = /^(thuốc nào sau đây là|chỉ định của|chống chỉ định của|cơ chế của|tác dụng phụ của)/i.test(q.question);
  
  if (diff > 15 || isDirect) {
    candidates.push({
      id: q.id,
      chapter: q.chapter,
      diff,
      question: q.question,
      options: q.options,
      correct: q.correct,
      explanation: q.explanation
    });
  }
});

let out = '';
candidates.forEach(c => {
  out += `ID: ${c.id} | ${c.chapter} | Diff: ${c.diff}\n`;
  out += `Q: ${c.question}\n`;
  c.options.forEach((opt, idx) => {
    out += `  [${idx}] ${idx === c.correct ? '(*)' : '   '} [${opt.length}] ${opt}\n`;
  });
  out += '\n';
});

fs.writeFileSync(path.join(__dirname, '35_targets_detail.txt'), out, 'utf8');
console.log(`Saved 35 targets to scripts/35_targets_detail.txt`);
