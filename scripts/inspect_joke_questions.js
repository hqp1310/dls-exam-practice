const fs = require('fs');
const code = fs.readFileSync('questions_800.js', 'utf8');
const bank = eval(code.match(/const ALL_EXAM_BANK = (\[[\s\S]*\]);/)[1]);

const jokeWords = [
  'lấy bằng lái xe', 'vật liệu xây dựng', 'sửa chữa điện nước',
  'hệ thống định vị', 'mạng xã hội', 'tìm kiếm việc làm', 'nồng độ cồn trong máu người lái xe',
  'nhiễm giun sán', 'uống cùng lúc 5 viên', 'kim tiêm cùn', 'chườm nóng trước khi rút',
  'chữa khỏi hoàn toàn', 'chỉ tính riêng lượng thuốc bài xuất qua tuyến mồ hôi',
  'lựa chọn kích cỡ kim tiêm phù hợp', 'đào tạo kỹ thuật viên sửa chữa điện nước',
  'kiểm định chất lượng vật liệu'
];

const found = [];
bank.forEach(q => {
  let hasJoke = false;
  q.options.forEach((opt, idx) => {
    jokeWords.forEach(w => {
      if (opt.toLowerCase().includes(w)) {
        hasJoke = true;
      }
    });
  });
  if (hasJoke) {
    found.push({ id: q.id, question: q.question, options: q.options, correct: q.correct });
  }
});

console.log(`Total joke questions: ${found.length}`);
found.forEach(f => {
  console.log(`\nID ${f.id}: ${f.question}`);
  f.options.forEach((opt, idx) => {
    console.log(`  ${idx === f.correct ? '(*)' : '   '} [${idx}] ${opt}`);
  });
});
