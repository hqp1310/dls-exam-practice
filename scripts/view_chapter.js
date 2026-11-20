const fs = require('fs');
const path = require('path');
const ch = process.argv[2] || 'Thuốc trợ tim';
const batchFile = process.argv[3] || 'batch1_targets.json';

const data = require('./' + batchFile);
const filtered = data.filter(q => !ch || q.chapter.toLowerCase().includes(ch.toLowerCase()));

console.log(`Filtered ${filtered.length} questions for "${ch}" from ${batchFile}`);
filtered.forEach(q => {
  console.log(`\n[ID #${q.id}] [${q.chapter}] Q: ${q.question}`);
  q.options.forEach((opt, idx) => {
    console.log(`  ${idx === q.correct ? '(*)' : '   '} [${opt.length}] ${opt}`);
  });
});
