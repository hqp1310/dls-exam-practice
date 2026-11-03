const fs = require('fs');
const path = require('path');

const questionsFile = path.join(__dirname, '..', 'questions_800.js');
const bank = require(questionsFile);

const newQs = [
  {
    id: bank.length + 1,
    chapter: 'Nguyên tắc sử dụng Glucocorticoid',
    level: 'Vận dụng',
    source: 'DLS_PDF',
    sourceName: 'Giáo trình DLS Bộ Y tế (Trang 208)',
    question: 'Tác dụng chống viêm của Glucocorticoid được đánh giá là mạnh và toàn diện hơn nhóm NSAID chủ yếu do cơ chế nào?',
    options: [
      'Chặn ngay từ đầu trên của chuỗi phản ứng viêm qua kích thích tổng hợp lipocortin ức chế Phospholipase A2',
      'Chỉ ức chế chọn lọc enzym Cyclooxygenase-2 (COX-2) tại ổ viêm tương tự như thuốc nhóm Coxib',
      'Ức chế cạnh tranh với histamin tại thụ thể H1 ở tế bào cơ trơn mạch máu và phế quản',
      'Ức chế trực tiếp enzym Lipoxygenase (LOX) ngăn chặn tạo thành leukotrien B4'
    ],
    correct: 0,
    explanation: 'Theo SGK Dược lâm sàng Bộ Y tế (trang 208): Glucocorticoid tác dụng vào giai đoạn rất sớm (đầu trên) của quá trình viêm, kích thích tổng hợp lipocortin (annexin A1) ức chế enzym phospholipase A2, ngăn cản giải phóng acid arachidonic từ phospholipid màng tế bào. Do đó cắt đứt cả 2 con đường tạo Prostaglandin (qua COX) và Leukotrien (qua LOX). NSAID chỉ ức chế ở khâu sau (enzym COX).',
    reference: 'Giáo trình Dược Lâm Sàng Bộ Y tế - Trang 208'
  },
  {
    id: bank.length + 2,
    chapter: 'Nguyên tắc sử dụng Glucocorticoid',
    level: 'Nhận biết',
    source: 'DLS_PDF',
    sourceName: 'Giáo trình DLS Bộ Y tế (Bảng 14.3)',
    question: 'Theo phân loại Glucocorticoid dùng ngoài da theo độ mạnh (Bảng 14.3 SGK Dược Lâm Sàng), Betametason valerat nồng độ 0,10% (Betneval) thuộc nhóm có độ mạnh nào?',
    options: [
      'Độ mạnh: Yếu',
      'Độ mạnh: Vừa',
      'Độ mạnh: Mạnh',
      'Độ mạnh: Rất mạnh'
    ],
    correct: 2,
    explanation: 'Theo Bảng 14.3 SGK Dược lâm sàng Bộ Y tế (trang 218): Betametason valerat 0,10% (biệt dược Betneval) thuộc nhóm MẠNH. Trong khi Betametason valerat 0,05% (Celestoder) thuộc nhóm VỪA, và Betametason dipropionat/propylen glycol 0,05% (Diprolen) thuộc nhóm RẤT MẠNH.',
    reference: 'Giáo trình Dược Lâm Sàng Bộ Y tế - Bảng 14.3 trang 218'
  },
  {
    id: bank.length + 3,
    chapter: 'Nguyên tắc sử dụng Glucocorticoid',
    level: 'Nhận biết',
    source: 'DLS_PDF',
    sourceName: 'Giáo trình DLS Bộ Y tế (Bảng 14.3)',
    question: 'Theo Bảng 14.3 SGK Dược Lâm Sàng Bộ Y tế, chế phẩm Glucocorticoid dùng ngoài da nào sau đây được xếp vào nhóm có độ mạnh VỪA?',
    options: [
      'Betametason valerat 0,05% (Celestoder)',
      'Betametason dipropionat / propylen glycol 0,05% (Diprolen)',
      'Hydrocortison acetat 0,50% (Hydracort)',
      'Betametason dipropionat 0,05% (Diproson)'
    ],
    correct: 0,
    explanation: 'Theo Bảng 14.3 SGK Dược lâm sàng (trang 218): Nhóm VỪA gồm Betametason valerat 0,05% (Celestoder), Fluocinolon acetonid 0,01% (Synarlar), Clobetason butyrat 0,05% (Flucort).',
    reference: 'Giáo trình Dược Lâm Sàng Bộ Y tế - Bảng 14.3 trang 218'
  },
  {
    id: bank.length + 4,
    chapter: 'Nguyên tắc sử dụng Glucocorticoid',
    level: 'Nhận biết',
    source: 'DLS_PDF',
    sourceName: 'Giáo trình DLS Bộ Y tế (Bảng 14.3)',
    question: 'Theo Bảng 14.3 SGK Dược Lâm Sàng Bộ Y tế, chế phẩm corticoid dùng ngoài có độ mạnh RẤT MẠNH gồm:',
    options: [
      'Betametason dipropionat / propylen glycol 0,05% và Clobetason propionat 0,05%',
      'Hydrocortison acetat 0,50% và Dexamethason 0,10%',
      'Fluocinolon acetonid 0,01% và Betametason valerat 0,05%',
      'Hydrocortison aceponat 0,127% và Desoximetason 0,25%'
    ],
    correct: 0,
    explanation: 'Theo Bảng 14.3 SGK Dược lâm sàng (trang 218): Nhóm RẤT MẠNH gồm Betametason dipropionat kết hợp propylen glycol 0,05% (Diprolen) và Clobetason propionat 0,05% (Eumovate).',
    reference: 'Giáo trình Dược Lâm Sàng Bộ Y tế - Bảng 14.3 trang 218'
  }
];

const updatedBank = [...bank, ...newQs];
const header = 'const ALL_EXAM_BANK = ';
const footer = ';\n\nif (typeof module !== "undefined" && module.exports) {\n  module.exports = ALL_EXAM_BANK;\n}\n';

fs.writeFileSync(questionsFile, header + JSON.stringify(updatedBank, null, 2) + footer, 'utf8');
console.log('Successfully appended 4 new questions. Total questions now:', updatedBank.length);
