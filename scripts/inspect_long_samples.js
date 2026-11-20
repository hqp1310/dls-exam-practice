const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'questions_duocly2.js');
const { DUOCLY2_EXAM_BANK } = require(filePath);

const longQs = DUOCLY2_EXAM_BANK.filter(q => q.options.some(opt => opt.length > 70));

console.log(`Found ${longQs.length} questions with options > 70 chars.`);

// Print 20 examples from different chapters
const byChapter = {};
longQs.forEach(q => {
  if (!byChapter[q.chapter]) byChapter[q.chapter] = [];
  byChapter[q.chapter].push(q);
});

console.log('Chapters affected:');
for (const [ch, list] of Object.entries(byChapter)) {
  console.log(`- ${ch}: ${list.length} questions`);
}

console.log('\n--- SAMPLE QUESTIONS WITH VERY LONG OPTIONS ---');
longQs.slice(0, 10).forEach(q => {
  console.log(`\nID #${q.id} [${q.chapter}] Level: ${q.level}`);
  console.log(`Q: ${q.question}`);
  q.options.forEach((opt, idx) => {
    console.log(`  ${idx === q.correct ? '(*)' : '   '} [${opt.length}] ${opt}`);
  });
});
