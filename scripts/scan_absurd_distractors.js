const fs = require('fs');
const code = fs.readFileSync('questions_800.js', 'utf8');
const bank = eval(code.match(/const ALL_EXAM_BANK = (\[[\s\S]*\]);/)[1]);

const absurdKeywords = [
  'lấy bằng lái xe', 'vật liệu xây dựng', 'sửa chữa điện nước', 'kim tiêm',
  'tuyến mồ hôi', 'bán lẻ của hộp thuốc', 'giá thành bán lẻ', 'kèm theo sốt nhẹ',
  'cơm nước', 'quần áo', 'hóa mỹ phẩm', 'đi chợ', 'nấu ăn', 'xây dựng',
  'lái xe', 'điện nước', 'du lịch', 'giải trí', 'nghe nhạc', 'xem phim'
];

const flagged = [];
bank.forEach(q => {
  let isFlagged = false;
  q.options.forEach((opt, idx) => {
    if (idx !== q.correct) {
      for (const kw of absurdKeywords) {
        if (opt.toLowerCase().includes(kw)) {
          isFlagged = true;
          break;
        }
      }
    }
  });
  if (isFlagged) {
    flagged.push({ id: q.id, question: q.question, options: q.options, correct: q.correct });
  }
});

console.log(`Total absurd questions found: ${flagged.length}`);
flagged.forEach(f => {
  console.log(`\nID ${f.id}: ${f.question}`);
  f.options.forEach((opt, idx) => {
    console.log(`  ${idx === f.correct ? '(*)' : '   '} [${idx}] ${opt}`);
  });
});
