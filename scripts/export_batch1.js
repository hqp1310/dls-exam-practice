const fs = require('fs');
const path = require('path');
const { DUOCLY2_EXAM_BANK } = require('../questions_duocly2.js');

const chapters = [
  'Thuốc trợ tim',
  'Thuốc điều trị THA',
  'Thuốc chữa CĐTN',
  'Thuốc chống loạn nhịp'
];

const targets = DUOCLY2_EXAM_BANK.filter(q => {
  if (!chapters.includes(q.chapter)) return false;
  const maxLen = Math.max(...q.options.map(o => o.length));
  const hasGiveaway = q.options.some(o => /nhằm|giúp|qua đó|bằng cách|dẫn đến|do đó|để |tránh nguy cơ|hạn chế nguy cơ|ngăn ngừa|theo dõi chặt chẽ/i.test(o));
  return maxLen > 55 || hasGiveaway;
});

console.log(`Batch 1 target count: ${targets.length}`);
fs.writeFileSync(path.join(__dirname, 'batch1_targets.json'), JSON.stringify(targets.map(q => ({
  id: q.id,
  chapter: q.chapter,
  question: q.question,
  correct: q.correct,
  options: q.options,
  explanation: q.explanation
})), null, 2), 'utf8');
console.log('Saved to scripts/batch1_targets.json');
