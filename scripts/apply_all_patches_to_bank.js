const fs = require('fs');
const path = require('path');

const { patchBatch1 } = require('./patch_batch1.js');
const { patchBatch2 } = require('./patch_batch2.js');
const { patchBatch3 } = require('./patch_batch3.js');
const { patchBatch4 } = require('./patch_batch4.js');

const allPatches = {
  ...patchBatch1,
  ...patchBatch2,
  ...patchBatch3,
  ...patchBatch4
};

const bankPath = path.join(__dirname, '..', 'questions_duocly2.js');
const { DUOCLY2_EXAM_BANK, DUOCLY2_MATRIX_32H } = require(bankPath);

console.log(`Loaded ${DUOCLY2_EXAM_BANK.length} questions from bank.`);
console.log(`Loaded ${Object.keys(allPatches).length} patches.`);

let updatedCount = 0;
DUOCLY2_EXAM_BANK.forEach(q => {
  if (allPatches[q.id]) {
    q.options = allPatches[q.id];
    updatedCount++;
  }
});

console.log(`Updated ${updatedCount} questions in memory.`);

const header = `// NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM DƯỢC LÝ 2 CHUẨN BỘ Y TẾ (${DUOCLY2_EXAM_BANK.length} CÂU)
// Đào tạo Dược sĩ Đại học - Bác sĩ Đa khoa (Bộ Y tế - PGS.TS. Mai Tất Tố, TS. Vũ Thị Trâm)
// Chuẩn khung 20 bài (32 tiết) - 100% không mở ngoặc đơn lộ đáp án - Đáp án xáo trộn đều A/B/C/D
const DUOCLY2_EXAM_BANK = ${JSON.stringify(DUOCLY2_EXAM_BANK, null, 2)};

const DUOCLY2_MATRIX_32H = ${JSON.stringify(DUOCLY2_MATRIX_32H, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DUOCLY2_EXAM_BANK, DUOCLY2_MATRIX_32H };
}
`;

fs.writeFileSync(bankPath, header, 'utf8');
console.log(`Successfully wrote updated bank to ${bankPath}`);
