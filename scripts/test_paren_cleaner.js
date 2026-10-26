const fs = require('fs');
const path = require('path');

const bankPath = path.join(__dirname, '..', 'questions_800.js');
const code = fs.readFileSync(bankPath, 'utf8');
eval(code.replace('const ALL_EXAM_BANK', 'global.ALL_EXAM_BANK'));
const bank = global.ALL_EXAM_BANK;

function cleanOptionText(text) {
  let s = text.trim();

  // Specific high-frequency explanatory parens removal
  s = s.replace(/\s*\(gõ vùng tuyến mang tai gây co cơ mặt\)/gi, '');
  s = s.replace(/\s*\(co thắt bàn tay khi bơm bao đo HA\)/gi, '');
  s = s.replace(/\s*\(phản vệ muộn xuất hiện sau 4\s*[-–]\s*8 giờ\)/gi, '');
  s = s.replace(/\s*\(dưới 28 ngày tuổi\)/gi, '');
  s = s.replace(/\s*\(tương đương 0,5 mg\)/gi, '');
  s = s.replace(/\s*\(thuốc chống lao\)/gi, '');
  s = s.replace(/\s*\(thuốc chống nấm.*?\)/gi, '');
  s = s.replace(/\s*\(thuốc chống trầm cảm.*?\)/gi, '');
  s = s.replace(/\s*\(Systematic Review & Meta-analysis\)/gi, '');
  s = s.replace(/\s*\(Tall Man lettering\)/gi, '');
  s = s.replace(/\s*\(Adjusted Body Weight - ABW\)/gi, ' ABW');
  s = s.replace(/\s*\(Trissel's\)/gi, '');
  s = s.replace(/\s*\(Syphilis\)/gi, '');
  s = s.replace(/\s*\(Level of Evidence\)/gi, '');
  s = s.replace(/\s*\(Quality-Adjusted.*?\)/gi, '');

  // Remove general "(như ...)" examples inside options
  s = s.replace(/\s*\(như [^)]+\)/gi, '');
  s = s.replace(/\s*\(ví dụ [^)]+\)/gi, '');
  s = s.replace(/\s*\(gồm [^)]+\)/gi, '');

  // Remove parentheticals explaining stages: "(Bình thường hoặc tăng lọc)", "(Suy thận nặng)", etc.
  s = s.replace(/\s*\((Bình thường|Tăng lọc|Giảm nhẹ|Giảm vừa|Suy thận nặng|Suy thận giai đoạn cuối|Tổn thương thận).*?\)/gi, '');

  // Remove standalone descriptive parens like "(ADR)", "(NAC)", "(fe)", "(Rf)"
  s = s.replace(/\s*\(ADR\)/gi, '');
  s = s.replace(/\s*\(NAC\)/gi, '');
  s = s.replace(/\s*\(fe\)/gi, '');
  s = s.replace(/\s*\(Rf\)/gi, '');
  s = s.replace(/\s*\(kg\)/gi, '');
  s = s.replace(/\s*\(mg\/dL\)/gi, '');
  s = s.replace(/\s*\(QALY\)/gi, '');
  s = s.replace(/\s*\(AHA\)/gi, '');
  s = s.replace(/\s*\(EMA\)/gi, '');
  s = s.replace(/\s*\(FDA\)/gi, '');
  s = s.replace(/\s*\(WHO\)/gi, '');
  s = s.replace(/\s*\(SSRI\)/gi, '');
  s = s.replace(/\s*\(MAOI\)/gi, '');
  s = s.replace(/\s*\(NSAID\)/gi, '');

  // Specific cleanups
  s = s.replace(/Sách Cẩm nang Handbook on Injectable Drugs/gi, 'Handbook on Injectable Drugs');
  s = s.replace(/Kỹ thuật chữ in hoa nổi bật trên nhãn/gi, 'Kỹ thuật chữ in hoa Tall Man trên nhãn');

  // Clean double spaces
  s = s.replace(/\s+/g, ' ').trim();
  return s;
}

let modifiedCount = 0;
bank.forEach(q => {
  let changed = false;
  const newOpts = q.options.map(opt => {
    const cleaned = cleanOptionText(opt);
    if (cleaned !== opt) changed = true;
    return cleaned;
  });
  if (changed) {
    q.options = newOpts;
    modifiedCount++;
  }
});

console.log('Total questions modified by paren cleaner:', modifiedCount);

// Check how many parens remain
let remainingParens = 0;
bank.forEach(q => {
  if (q.options.some(o => /\(.*?\)/.test(o))) {
    remainingParens++;
    console.log('Remaining paren in ID', q.id, ':', q.options.filter(o => /\(.*?\)/.test(o)));
  }
});
console.log('Remaining questions with parens:', remainingParens);
