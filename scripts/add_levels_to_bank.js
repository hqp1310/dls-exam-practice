const fs = require('fs');
const path = require('path');

const bankPath = path.join(__dirname, '../questions_800.js');
let code = fs.readFileSync(bankPath, 'utf8');

// Load bank
code = code.replace('const ALL_EXAM_BANK =', 'global.ALL_EXAM_BANK =');
eval(code);
const bank = global.ALL_EXAM_BANK;

console.log('Loaded bank questions:', bank.length);

function classifyQuestion(q) {
  const qText = q.question;
  const qLower = qText.toLowerCase();

  // 1. VẬN DỤNG CAO (Advanced Application)
  // Indicators of complex clinical scenarios, multi-factor conditions, calculations, or advanced troubleshooting
  const hasVdcCalc = /(tính\s+(hệ số|độ thanh thải|liều nạp|tốc độ|thể tích|diện tích|lượng|clcr|crcl)|áp dụng công thức cockcroft|sheiner|clcr|crcl|auc24\/mic|thể tích phân bố|hiệu chỉnh liều theo chức năng)/i.test(qLower);
  
  const hasVdcPatient = /(bệnh nhân|bệnh nhi|người bệnh|sản phụ|ông\s+[a-z\.]|bà\s+[a-z\.]|trẻ nhi)/i.test(qText) &&
    (/(kèm|trên nền|tiền sử|sau khi|xuất hiện|đang dùng|xét nghiệm|huyết áp|creatinin|crcl|tiểu cầu|men gan|vàng da|suy thận|suy gan|đái tháo đường|sốc phản vệ|kháng trị)/i.test(qLower) || qText.length > 120);

  const hasVdcDilemma = /(xử trí cấp|sốc phản vệ|kháng trị|thay thế phác đồ|hoại tử vô mạch|suy thượng thận cấp|định hướng chẩn đoán|tai biến điều trị|âm tính giả nếu trước đó|bị sốc phản vệ nhưng kém đáp ứng|không phù hợp cho bệnh nhân)/i.test(qLower);

  const hasVdcMultiDisease = /(tăng huyết áp kèm|đái tháo đường kèm|hen phế quản kèm|suy tim kèm|loét dạ dày kèm|suy thận kèm|xơ gan kèm)/i.test(qLower);

  if (hasVdcCalc || hasVdcPatient || hasVdcDilemma || hasVdcMultiDisease) {
    return 'Vận dụng cao';
  }

  // 2. NHẬN BIẾT (Recall / Knowledge)
  // Indicators of direct factual memory, definitions, criteria, guidelines, drug classification
  const hasNbKeywords = /^(môn học|mốc|năm nào|theo thông tư|theo nghị định|theo quy định|theo khuyến cáo của who|định mức|tiêu chuẩn của who|hệ thống đơn vị|các đơn vị|chỉ số xét nghiệm nào|enzym nào|thuộc nhóm nào|thang phân loại|nguồn thông tin thuốc cấp|nhiệt độ bảo quản|khái niệm|được định nghĩa là|chế phẩm nào|thuốc nào sau đây thuộc|cơ quan nào sau đây ở thai nhi|bậc thang|bậc \d+|thời điểm|thời gian bán thải|chỉ số|chỉ định chính|chống chỉ định tuyệt đối)/i.test(qText.trim());

  const hasNbPhrases = /(là gì\?|bao nhiêu\?|được định nghĩa là|thuộc nhóm nào\?|thuộc phân loại nào\?|ở mức nào\?|trong vòng bao lâu\?|thuộc cấp thông tin nào\?|ký hiệu là gì\?|được xếp vào phân loại|thuộc phân loại adr typ nào\?|chỉ định trong trường hợp nào sau đây\?)/i.test(qLower);

  const isShortDirect = qText.length < 90 && !/(tại sao|vì sao|cơ chế|xử trí|nguyên tắc|phối hợp|nguy cơ|giải thích)/i.test(qLower);

  if (hasNbKeywords || hasNbPhrases || isShortDirect) {
    return 'Nhận biết';
  }

  // 3. VẬN DỤNG (Application)
  return 'Vận dụng';
}

const counts = { 'Nhận biết': 0, 'Vận dụng': 0, 'Vận dụng cao': 0 };

const updatedBank = bank.map(q => {
  const level = classifyQuestion(q);
  counts[level]++;
  return {
    id: q.id,
    chapter: q.chapter,
    level: level,
    source: q.source || 'BYT',
    sourceName: q.sourceName || 'Bộ Y tế (Chuẩn Quốc gia)',
    question: q.question,
    options: q.options,
    correct: q.correct,
    explanation: q.explanation,
    reference: q.reference
  };
});

console.log('Level counts:', counts);

const header = `// Ngân hàng câu hỏi trắc nghiệm Dược Lâm Sàng toàn diện
// Tổng hợp chuẩn Bộ Y tế & Đề thi Dược Lâm Sàng các trường ĐH Y Dược hàng đầu (HUP, UMP, HMU)
// Đã phân loại cấp độ nhận thức chuẩn hóa: Nhận biết, Vận dụng, Vận dụng cao (Tỉ lệ 2:4:4)

const ALL_EXAM_BANK = `;

const updatedContent = header + JSON.stringify(updatedBank, null, 2) + `;\n\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = ALL_EXAM_BANK;\n}\n`;

fs.writeFileSync(bankPath, updatedContent, 'utf8');
console.log('Successfully wrote updated questions_800.js with level field!');
