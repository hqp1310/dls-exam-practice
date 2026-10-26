const fs = require('fs');
const code = fs.readFileSync('questions_800.js', 'utf8');
const bank = eval(code.match(/const ALL_EXAM_BANK = (\[[\s\S]*\]);/)[1]);

const badPatterns = [
  /kèm theo sốt nhẹ/i,
  /theo đúng hướng dẫn của Bộ Y tế/i,
  /trong phác đồ chuẩn/i,
  /dựa trên kết quả thăm khám lâm sàng/i,
  /kết hợp theo dõi định kỳ/i,
  /hệ thống định vị/i,
  /mạng xã hội/i,
  /tìm kiếm việc làm/i,
  /nồng độ cồn/i,
  /giun sán/i,
  /rụng tóc/i,
  /vật liệu xây dựng/i,
  /sửa chữa điện nước/i,
  /lấy bằng lái xe/i,
  /kim tiêm cùn/i,
  /chườm nóng/i,
  /uống cùng lúc 5 viên/i,
  /chữa khỏi hoàn toàn/i
];

const flagged = [];
bank.forEach(q => {
  let matched = [];
  q.options.forEach((opt, idx) => {
    badPatterns.forEach(pat => {
      if (pat.test(opt)) {
        matched.push({ idx, opt, pat: pat.toString(), isCorrect: idx === q.correct });
      }
    });
  });
  if (matched.length > 0) {
    flagged.push({ id: q.id, question: q.question, matched, options: q.options, correct: q.correct });
  }
});

console.log(`Total questions with bad patterns: ${flagged.length} / ${bank.length}`);
console.log('Sample flagged IDs:', flagged.map(f => f.id).slice(0, 30));
