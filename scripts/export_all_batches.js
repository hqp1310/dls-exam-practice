const fs = require('fs');
const path = require('path');
const { DUOCLY2_EXAM_BANK } = require('../questions_duocly2.js');

const batches = {
  batch1: ['Thuốc trợ tim', 'Thuốc điều trị THA', 'Thuốc chữa CĐTN', 'Thuốc chống loạn nhịp'],
  batch2: ['Thuốc lợi niệu', 'Thuốc điều trị DDTT', 'Thuốc ĐC RLHH', 'Thuốc kháng H1', 'Thuốc chống giun sán, amibe'],
  batch3: ['Thuốc hạ lipid máu', 'Thuốc chống sốt rét', 'KTGHP', 'Hormon', 'Thuốc hạ glucose máu'],
  batch4: ['Thuốc/QT đông cầm máu', 'Thuốc chữa thiếu máu', 'Vitamin', 'Thuốc kháng virus', 'Thuốc chống ung thư', 'Thuốc/trong điều trị ngộ độc']
};

for (const [batchName, chList] of Object.entries(batches)) {
  const targets = DUOCLY2_EXAM_BANK.filter(q => {
    if (!chList.includes(q.chapter)) return false;
    const maxLen = Math.max(...q.options.map(o => o.length));
    const hasGiveaway = q.options.some(o => /nhằm|giúp|qua đó|bằng cách|dẫn đến|do đó|để |tránh nguy cơ|hạn chế nguy cơ|ngăn ngừa|theo dõi chặt chẽ/i.test(o));
    return maxLen > 55 || hasGiveaway;
  });

  console.log(`${batchName}: ${targets.length} questions`);
  fs.writeFileSync(path.join(__dirname, `${batchName}_targets.json`), JSON.stringify(targets.map(q => ({
    id: q.id,
    chapter: q.chapter,
    question: q.question,
    correct: q.correct,
    options: q.options,
    explanation: q.explanation
  })), null, 2), 'utf8');
}
