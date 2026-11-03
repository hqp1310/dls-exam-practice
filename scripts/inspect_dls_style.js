const bank = require('../questions_800.js');
const dls = bank.filter(q => q.source === 'DLS_PDF');
console.log('Total DLS_PDF questions:', dls.length);

dls.slice(0, 10).forEach(q => {
  console.log(`\nID ${q.id} [${q.chapter}]:`);
  console.log(`Q: ${q.question}`);
  q.options.forEach((o, i) => console.log(`  ${i === q.correct ? '(*)' : '   '} [${['A','B','C','D'][i]}] ${o}`));
  console.log(`Exp: ${q.explanation}`);
});
