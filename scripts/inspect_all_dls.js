const bank = require('../questions_800.js');
const dls = bank.filter(q => q.source === 'DLS_PDF');

console.log('Inspecting all 84 DLS_PDF questions for distractors...');

dls.forEach(q => {
  console.log(`\n=== ID ${q.id} [${q.chapter}] ===`);
  console.log(`Q: ${q.question}`);
  q.options.forEach((o, i) => {
    console.log(`  ${i === q.correct ? '(*)' : '   '} [${['A','B','C','D'][i]}] ${o}`);
  });
});
