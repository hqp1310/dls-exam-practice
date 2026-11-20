const fs = require('fs');

['batch1', 'batch2', 'batch3', 'batch4'].forEach(b => {
  const data = require(`./${b}_targets.json`);
  let out = '';
  data.forEach(q => {
    out += `ID: ${q.id} | ${q.chapter} | Correct: ${q.correct}\n`;
    out += `Q: ${q.question}\n`;
    q.options.forEach((opt, idx) => {
      out += `  [${idx}] ${idx === q.correct ? '(*)' : '   '} [${opt.length}] ${opt}\n`;
    });
    out += '\n';
  });
  fs.writeFileSync(`./scripts/${b}_detail.txt`, out, 'utf8');
  console.log(`Saved ${b}_detail.txt (${data.length} questions)`);
});
