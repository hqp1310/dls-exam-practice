const fs = require('fs');
const path = require('path');
const { DUOCLY2_EXAM_BANK } = require('../questions_duocly2.js');

const endingWithLaGi = DUOCLY2_EXAM_BANK.filter(q => /là gì\?$/i.test(q.question.trim()));
console.log(`Questions ending with 'là gì?': ${endingWithLaGi.length}`);

// Print a few to inspect
endingWithLaGi.slice(0, 15).forEach(q => {
  console.log(`\n[ID #${q.id}] [${q.chapter}] Q: ${q.question}`);
  q.options.forEach((opt, idx) => {
    console.log(`  [${idx}] ${idx === q.correct ? '(*)' : '   '} [${opt.length}] ${opt}`);
  });
});
