const fs = require('fs');
const path = require('path');
const data = require('./batch1_targets.json');

data.forEach((q, i) => {
  console.log(`[#${q.id}] [${q.chapter}] Q: ${q.question.slice(0, 70)}...`);
  q.options.forEach((opt, idx) => {
    console.log(`  ${idx === q.correct ? '(*)' : '   '} [${opt.length}] ${opt}`);
  });
  console.log('');
});
