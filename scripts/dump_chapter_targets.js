const fs = require('fs');
const path = require('path');
const { DUOCLY2_EXAM_BANK } = require('../questions_duocly2.js');

const chapter = process.argv[2];
if (!chapter) {
  console.log('Please provide a chapter name');
  process.exit(1);
}

const list = DUOCLY2_EXAM_BANK.filter(q => q.chapter === chapter);
console.log(`Chapter: ${chapter} (Total: ${list.length})`);

list.forEach(q => {
  const maxLen = Math.max(...q.options.map(o => o.length));
  const hasGiveaway = q.options.some(o => /nhằm|giúp|qua đó|bằng cách|dẫn đến|do đó|để |tránh nguy cơ|hạn chế nguy cơ|ngăn ngừa|theo dõi chặt chẽ/i.test(o));
  if (maxLen > 60 || hasGiveaway) {
    console.log(`\n--- [ID #${q.id}] Level: ${q.level} ---`);
    console.log(`Q: ${q.question}`);
    q.options.forEach((opt, idx) => {
      console.log(`  ${idx === q.correct ? '(*)' : '   '} [${opt.length}] ${opt}`);
    });
  }
});
