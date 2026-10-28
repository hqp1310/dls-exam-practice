const fs = require('fs');
const path = require('path');

const questionsFile = path.join(__dirname, '../questions_800.js');
let fileContent = fs.readFileSync(questionsFile, 'utf8');

// Load current bank
const bankCode = fileContent.replace('const ALL_EXAM_BANK =', 'global.ALL_EXAM_BANK =');
eval(bankCode);
const currentBank = global.ALL_EXAM_BANK;

console.log('Current bank questions count:', currentBank.length);
const startId = currentBank.length + 1;

// Load new questions
const newQuestions = require('./build_dls_pdf_questions.js');
console.log('New questions to add:', newQuestions.length);

// Assign IDs
const assignedQuestions = newQuestions.map((q, idx) => {
  return {
    id: startId + idx,
    chapter: q.chapter,
    source: q.source,
    sourceName: q.sourceName,
    question: q.question,
    options: q.options,
    correct: q.correct,
    explanation: q.explanation,
    reference: q.reference
  };
});

// Validate all questions
const validChapters = new Set([
  'Đại cương DLS & Thông tin thuốc',
  'Dược động học & Suy gan, thận',
  'Tương tác thuốc & Tương kỵ',
  'ADR, Dị ứng & Sốc phản vệ',
  'Xét nghiệm lâm sàng & Nhận định KQ',
  'Sử dụng thuốc ở Trẻ em',
  'Sử dụng thuốc ở Người cao tuổi',
  'Sử dụng thuốc ở Phụ nữ có thai & CCB',
  'Kháng sinh & Kháng sinh dự phòng',
  'Glucocorticoid & Phác đồ điều trị',
  'Thuốc giảm đau',
  'Vitamin và chất khoáng',
  'Điều trị Tăng huyết áp & Cấp cứu THA',
  'Tiêu chảy cấp ở trẻ em',
  'Hen phế quản & COPD',
  'Loãng xương, Tránh thai & Chuyển hóa'
]);

assignedQuestions.forEach((q, idx) => {
  if (!validChapters.has(q.chapter)) {
    throw new Error(`Invalid chapter in question ${q.id}: ${q.chapter}`);
  }
  if (!Array.isArray(q.options) || q.options.length !== 4) {
    throw new Error(`Question ${q.id} must have exactly 4 options`);
  }
  if (typeof q.correct !== 'number' || q.correct < 0 || q.correct > 3) {
    throw new Error(`Question ${q.id} has invalid correct index: ${q.correct}`);
  }
  if (!q.question || q.question.trim().length === 0) {
    throw new Error(`Question ${q.id} has empty question text`);
  }
  if (!q.explanation || q.explanation.trim().length === 0) {
    throw new Error(`Question ${q.id} has empty explanation`);
  }
});

const mergedBank = [...currentBank, ...assignedQuestions];
console.log('New total bank count:', mergedBank.length);

// Generate updated file content
const header = `// Ngân hàng câu hỏi trắc nghiệm Dược Lâm Sàng toàn diện\n// Tổng hợp chuẩn Bộ Y tế & Đề thi Dược Lâm Sàng các trường ĐH Y Dược hàng đầu (HUP, UMP, HMU)\n// Đã bổ sung bộ câu hỏi thi thực tế từ đề thi Dls.pdf\n\nconst ALL_EXAM_BANK = `;

const updatedContent = header + JSON.stringify(mergedBank, null, 2) + `;\n\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = ALL_EXAM_BANK;\n}\n`;

fs.writeFileSync(questionsFile, updatedContent, 'utf8');
console.log('Successfully updated questions_800.js!');
