const bank = require('../questions_800.js');

console.log('Total bank questions:', bank.length);

// Check questions where options are excessively long (> 120 chars)
const veryLongOptions = bank.filter(q => q.options.some(o => o.length > 120));
console.log('Questions with very long options (> 120 chars):', veryLongOptions.length);

// Check questions where question stem is excessively long (> 250 chars)
const veryLongStems = bank.filter(q => q.question.length > 250);
console.log('Questions with very long stems (> 250 chars):', veryLongStems.length);

// Print some examples of very long options
console.log('\n--- Examples of very long options ---');
veryLongOptions.slice(0, 5).forEach(q => {
  console.log(`\nID ${q.id} [${q.chapter}] (${q.source}): ${q.question.slice(0, 80)}...`);
  q.options.forEach((o, i) => {
    console.log(`  [${['A','B','C','D'][i]}] (${o.length} chars) ${o}`);
  });
});
