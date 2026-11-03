const bank = require('../questions_800.js');
const dls = bank.filter(q => q.source === 'DLS_PDF');

console.log('--- Inspecting sample DLS_PDF questions in questions_800.js ---');
dls.slice(0, 15).forEach(q => {
  console.log(`\nID ${q.id} [${q.chapter}]:`);
  console.log(`Q: ${q.question}`);
  q.options.forEach((o, i) => {
    console.log(`  ${i === q.correct ? '(*)' : '   '} [${['A','B','C','D'][i]}] ${o}`);
  });
});
