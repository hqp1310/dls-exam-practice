const fs = require('fs');

// Load ALL_EXAM_BANK
const code = fs.readFileSync('questions_800.js', 'utf8');
const bankMatch = code.match(/const ALL_EXAM_BANK = (\[[\s\S]*\]);/);
if (!bankMatch) {
  console.error("Could not find ALL_EXAM_BANK");
  process.exit(1);
}

const bank = eval(bankMatch[1]);
console.log("Total questions loaded:", bank.length);

const chapterCounts = {};
bank.forEach(q => {
  chapterCounts[q.chapter] = (chapterCounts[q.chapter] || 0) + 1;
});

console.log("\n--- Questions per chapter ---");
for (const [ch, cnt] of Object.entries(chapterCounts)) {
  console.log(`- ${ch}: ${cnt} câu`);
}
