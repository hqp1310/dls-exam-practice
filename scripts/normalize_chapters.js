const fs = require('fs');
const path = require('path');

const questionsFile = path.join(__dirname, '..', 'questions_800.js');
const bank = require(questionsFile);

const map = {
  'Nguyên tắc sử dụng Glucocorticoid': 'Glucocorticoid & Phác đồ điều trị',
  'Sử dụng Glucocorticoid hợp lý': 'Glucocorticoid & Phác đồ điều trị',
  'Dược động học lâm sàng & Hiệu chỉnh liều': 'Dược động học & Suy gan, thận',
  'Tác dụng không mong muốn (ADR) & Dị ứng': 'ADR, Dị ứng & Sốc phản vệ',
  'Thuốc cho PN mang thai & Cho con bú': 'Sử dụng thuốc ở Phụ nữ có thai & CCB',
  'Sử dụng thuốc cho Trẻ em': 'Sử dụng thuốc ở Trẻ em',
  'Sử dụng thuốc cho Người cao tuổi': 'Sử dụng thuốc ở Người cao tuổi',
  'Điều trị đau do Ung thư (WHO)': 'Thuốc giảm đau',
  'Nguyên tắc sử dụng Kháng sinh': 'Kháng sinh & Kháng sinh dự phòng',
  'Đại cương Dược Lâm Sàng & Tổ chức': 'Đại cương DLS & Thông tin thuốc'
};

let count = 0;
bank.forEach(q => {
  if (map[q.chapter]) {
    q.chapter = map[q.chapter];
    count++;
  }
});

console.log('Normalized chapters for questions:', count);

const header = 'const ALL_EXAM_BANK = ';
const footer = ';\n\nif (typeof module !== "undefined" && module.exports) {\n  module.exports = ALL_EXAM_BANK;\n}\n';
fs.writeFileSync(questionsFile, header + JSON.stringify(bank, null, 2) + footer, 'utf8');
console.log('Saved questions_800.js successfully!');

