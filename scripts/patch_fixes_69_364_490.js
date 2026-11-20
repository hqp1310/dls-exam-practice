const fs = require('fs');
const path = require('path');

const bankPath = path.join(__dirname, '..', 'questions_duocly2.js');
const { DUOCLY2_EXAM_BANK, DUOCLY2_MATRIX_32H } = require(bankPath);

const q69 = DUOCLY2_EXAM_BANK.find(q => q.id === 69);
if (q69) {
  q69.options = [
    "Al(OH)3 gây táo bón, còn Mg(OH)2 gây tiêu chảy",
    "Al(OH)3 gây tiêu chảy, còn Mg(OH)2 gây táo bón",
    "Cả hai muối đều làm tăng nhu động gây tiêu chảy",
    "Cả hai muối đều làm giảm nhu động gây táo bón"
  ];
  q69.correct = 0;
}

const q364 = DUOCLY2_EXAM_BANK.find(q => q.id === 364);
if (q364) {
  q364.question = "Một thuốc tẩy giun cổ điển tác dụng chọn lọc trên giun đũa và giun kim thông qua phong bế dẫn truyền thần kinh cơ, làm tăng tính thấm của màng cơ giun với ion clo. Tác động dược lý phân tử cốt lõi của hoạt chất này là:";
  q364.options = [
    "Kích thích thụ thể nicotinic gây co cứng cơ giun",
    "Ức chế phản ứng trùng hợp tubulin tạo vi ống giun",
    "Kích hoạt thụ thể GABA làm mở kênh clo liệt mềm cơ",
    "Ức chế chọn lọc enzym fumarat reductase của ký sinh"
  ];
  q364.correct = 2;
}

const q490 = DUOCLY2_EXAM_BANK.find(q => q.id === 490);
if (q490) {
  q490.options = [
    "Tỷ lệ năm sulfamethoxazol trên một trimethoprim",
    "Tỷ lệ hai mươi sulfamethoxazol trên một trimethoprim",
    "Tỷ lệ mười sulfamethoxazol trên một trimethoprim",
    "Tỷ lệ bốn mươi sulfamethoxazol trên một trimethoprim"
  ];
  q490.correct = 1;
}

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
console.log('Successfully patched ID 69, 364, 490');
