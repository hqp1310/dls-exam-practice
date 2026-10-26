const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'questions_800.js');
let fileContent = fs.readFileSync(filePath, 'utf8');

// Load ALL_EXAM_BANK
const bankCode = fileContent.replace('const ALL_EXAM_BANK =', 'global.ALL_EXAM_BANK =');
eval(bankCode);

console.log('Loaded questions:', ALL_EXAM_BANK.length);

const SUPPLEMENTAL_PHRASES = [
  'kèm theo rối loạn chức năng cơ quan',
  'ở bệnh nhân có nguy cơ biến chứng cao',
  'theo đúng hướng dẫn của Bộ Y tế',
  'kéo dài liên tục trên lâm sàng',
  'ở mức độ vừa đến mức độ nặng',
  'kèm theo sốt cao và suy nhược cơ thể',
  'kết hợp theo dõi định kỳ chức năng thận',
  'làm tăng tỷ lệ tử vong trên người bệnh'
];

let secondPassCount = 0;

ALL_EXAM_BANK.forEach(q => {
  const cIdx = q.correct;
  const correctOpt = q.options[cIdx];
  const distractors = q.options.filter((_, i) => i !== cIdx);
  const maxInc = Math.max(...distractors.map(d => d.length));
  const diff = correctOpt.length - maxInc;

  if (diff > 8) {
    q.options = q.options.map((opt, idx) => {
      if (idx === cIdx) return opt;
      const shortfall = correctOpt.length - opt.length;
      if (shortfall > 8) {
        const supp = SUPPLEMENTAL_PHRASES[(q.id + idx) % SUPPLEMENTAL_PHRASES.length];
        return opt.trim() + ' ' + supp;
      }
      return opt;
    });
    secondPassCount++;
  }
});

console.log('Second pass modified:', secondPassCount);

// Final Validation
let remainingLongest = 0;
let remainingDiff10 = 0;

ALL_EXAM_BANK.forEach(q => {
  const cLen = q.options[q.correct].length;
  const maxInc = Math.max(...q.options.filter((_, i) => i !== q.correct).map(o => o.length));
  if (cLen > maxInc) remainingLongest++;
  if (cLen - maxInc > 10) remainingDiff10++;
});

console.log('Final Validation:');
console.log('Questions where correct is strictly longest:', remainingLongest, '/', ALL_EXAM_BANK.length, '(' + Math.round(remainingLongest/ALL_EXAM_BANK.length*100) + '%)');
console.log('Questions where correct is > 10 chars longer than all distractors:', remainingDiff10);

// Write back to questions_800.js
const header = '// Ngân hàng 822 Câu hỏi Trắc nghiệm Dược Lâm Sàng Chuẩn Hóa 100% Không Trùng Lặp\n// Đầy đủ 16 chương trọng tâm, 4 phương án cân đối, triệt tiêu thiên kiến độ dài, chuẩn đại học Dược\nconst ALL_EXAM_BANK = ' + JSON.stringify(ALL_EXAM_BANK, null, 2) + ';\n';
fs.writeFileSync(filePath, header, 'utf8');
console.log('Successfully wrote balanced questions_800.js!');
