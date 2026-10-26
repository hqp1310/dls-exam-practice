const fs = require('fs');

const code = fs.readFileSync('questions_800.js', 'utf8');
const bankMatch = code.match(/const ALL_EXAM_BANK = (\[[\s\S]*\]);/);
const bank = eval(bankMatch[1]);

const fillerPhrases = [
  /kéo dài liên tục kèm theo sốt cao và suy nhược cơ thể/gi,
  /ở mức độ vừa và nặng làm tăng tỷ lệ tử vong trên người bệnh/gi,
  /ở mức độ vừa đến mức độ nặng/gi,
  /ở mức độ vừa và nặng/gi,
  /kéo dài liên tục/gi,
  /sau khi dùng thuốc định kỳ/gi,
  /theo khuyến cáo định kỳ/gi,
  /sau khi dùng thuốc kết hợp theo dõi định kỳ chức năng thận/gi,
  /trên lâm sàng/gi,
  /trong phác đồ chuẩn/gi,
  /theo khuyến cáo/gi,
  /ở người bệnh/gi
];

let questionsWithFillers = 0;
let totalMatches = 0;

bank.forEach(q => {
  let hasFiller = false;
  q.options.forEach(opt => {
    for (const pat of fillerPhrases) {
      if (pat.test(opt)) {
        hasFiller = true;
        totalMatches++;
      }
    }
  });
  if (hasFiller) questionsWithFillers++;
});

console.log(`Total questions with artificial filler phrases: ${questionsWithFillers} / ${bank.length}`);
console.log(`Total filler matches: ${totalMatches}`);
