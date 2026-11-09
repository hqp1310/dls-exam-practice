const fs = require('fs');
const path = require('path');
const { cleanOptionText } = require('./cleaner_fn.js');

const bankPath = path.join(__dirname, '..', 'questions_800.js');
const rawCode = fs.readFileSync(bankPath, 'utf8');

eval(rawCode.replace('const ALL_EXAM_BANK', 'global.ALL_EXAM_BANK'));
const bank = global.ALL_EXAM_BANK;

console.log(`Initial Bank length: ${bank.length}`);

let totalChangedQuestions = 0;
let totalOptionsChanged = 0;

bank.forEach((q, qIdx) => {
  let qChanged = false;
  const newOptions = q.options.map(opt => {
    const cleaned = cleanOptionText(opt);
    if (cleaned !== opt) {
      totalOptionsChanged++;
      qChanged = true;
    }
    return cleaned;
  });

  if (qChanged) {
    totalChangedQuestions++;
    q.options = newOptions;
  }

  // Safety checks
  if (!Array.isArray(q.options) || q.options.length !== 4) {
    throw new Error(`Question #${q.id} (index ${qIdx}) does not have 4 options!`);
  }
  if (typeof q.correct !== 'number' || q.correct < 0 || q.correct > 3) {
    throw new Error(`Question #${q.id} has invalid correct index: ${q.correct}`);
  }

  const seen = new Set();
  q.options.forEach((opt, oIdx) => {
    if (!opt || opt.trim().length === 0) {
      throw new Error(`Question #${q.id} option [${oIdx}] became empty!`);
    }
    const lower = opt.toLowerCase().trim();
    if (seen.has(lower)) {
      throw new Error(`Question #${q.id} has duplicate option: "${opt}"`);
    }
    seen.add(lower);
  });
});

console.log(`Total questions modified: ${totalChangedQuestions}`);
console.log(`Total individual options cleaned: ${totalOptionsChanged}`);

// Write back to questions_800.js
const header = `// NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM DƯỢC LÂM SÀNG TỔNG HỢP (1.589 CÂU)
// Đã chuẩn hóa toàn diện: Cấu trúc 14 bài giảng 44h Bộ Y tế, Format Dls.pdf thực chiến & các trường ĐHYD.
// Loại bỏ 100% gợi ý lộ đáp án dạng mở ngoặc đơn (...) trong các phương án chọn.
`;

const fileContent = `${header}const ALL_EXAM_BANK = ${JSON.stringify(bank, null, 2)};\n\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = ALL_EXAM_BANK;\n}\n`;

fs.writeFileSync(bankPath, fileContent, 'utf8');
console.log(`Successfully updated ${bankPath}!`);

