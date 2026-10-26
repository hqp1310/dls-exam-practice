const fs = require('fs');
const code = fs.readFileSync('questions_800.js', 'utf8');
const bank = eval(code.match(/const ALL_EXAM_BANK = (\[[\s\S]*\]);/)[1]);

const targetIds = [
  21, 22, 29, 31, 35, 46, 59, 340, 375, 549, 565, 570, 573,
  644, 658, 662, 705, 719, 723, 731, 759, 790, 854, 927,
  989, 1019, 1022, 1046, 1063, 1144
];

targetIds.forEach(id => {
  const q = bank.find(x => x.id === id);
  if (q) {
    console.log(`\nID: ${q.id}`);
    console.log(`Q: ${q.question}`);
    q.options.forEach((opt, idx) => {
      console.log(`  ${idx === q.correct ? '(*)' : '   '} [${idx}] ${opt}`);
    });
  }
});
