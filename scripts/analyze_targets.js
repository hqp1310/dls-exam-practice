const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'questions_duocly2.js');
const { DUOCLY2_EXAM_BANK } = require(filePath);

const PATTERNS = [
  /nhằm\s+/i,
  /giúp\s+/i,
  /qua đó\s+/i,
  /bằng cách\s+/i,
  /dẫn đến\s+/i,
  /do đó\s+/i,
  /để\s+/i,
  /vì vậy\s+/i,
  /đồng thời làm\s+/i,
  /tránh nguy cơ\s+/i,
  /hạn chế nguy cơ\s+/i,
  /ngăn ngừa nguy cơ\s+/i,
  /theo dõi chặt chẽ/i
];

const targetQuestions = DUOCLY2_EXAM_BANK.filter(q => {
  const hasLong = q.options.some(o => o.length > 60);
  const hasGiveaway = q.options.some(o => PATTERNS.some(p => p.test(o)));
  return hasLong || hasGiveaway;
});

console.log(`Target questions to sanitize and refine: ${targetQuestions.length}`);

// Group by chapter
const chMap = {};
targetQuestions.forEach(q => {
  chMap[q.chapter] = (chMap[q.chapter] || 0) + 1;
});
console.log('Breakdown by chapter:');
console.table(chMap);
