const fs = require('fs');
const path = require('path');

const bankPath = path.join(__dirname, '..', 'questions_800.js');
const code = fs.readFileSync(bankPath, 'utf8');
eval(code.replace('const ALL_EXAM_BANK', 'global.ALL_EXAM_BANK'));
const bank = global.ALL_EXAM_BANK;

// Comprehensive parenthetical spoiler cleaner
function cleanOptionParentheses(optText, q) {
  if (!optText || typeof optText !== 'string') return optText;
  let text = optText;

  // 1. Calculations & formula spoilers
  text = text.replace(/\s*\(\s*(đã|chưa)\s+(nhân|tính)\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*tương\s+(đương|ứng)\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*khoảng\s+\d+%.*?\)/gi, '');
  text = text.replace(/\s*\(\s*chiếm\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*thông\s+số\s+tối\s+ưu\s+[^)]+\)/gi, '');

  // 2. Clinical alternatives inside parens (hoặc ...)
  text = text.replace(/\s*\(\s*hoặc\s+[^)]+\)/gi, '');

  // 3. Examples inside parens (như ...)
  text = text.replace(/\s*\(\s*như\s+[^)]+\)/gi, '');

  // 4. Drug class hints inside parens
  text = text.replace(/\s*\(\s*(thuộc\s+)?nhóm\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*thuốc\s+lợi\s+tiểu\s+kháng\s+aldosteron\s*\)/gi, '');

  // 5. Rationales and spoilers (trước khi..., pha muộn..., do nguy cơ..., đối kháng..., tương tác...)
  text = text.replace(/\s*\(\s*trước\s+khi\s+NAPQI\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*pha\s+muộn\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*do\s+nguy\s+cơ\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*do\s+thiếu\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*đối\s+kháng\s+cạnh\s+tranh\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*tương\s+tác\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*(men\s+ESBL|vẫn\s+bền\s+vững)\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*khi\s+đó\s+nên\s+đổi\s+sang\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*người\s+dùng\s+PPI\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*chưa\s+dung\s+nạp\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*khoảng\s+cách\s+giữa\s+liều\s+[^)]+\)/gi, '');

  // 6. Clinical definitions & symptoms inside parens
  text = text.replace(/\s*\(\s*suy\s+gan\s+cấp\s+tiến\s+triển\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*dạng\s+có\s+hoạt\s+tính\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*Dược\s+sĩ\s+đại\s+học\s*\)/gi, '');
  text = text.replace(/\s*\(\s*bướu\s+trâu\s*\)/gi, '');
  text = text.replace(/\s*\(\s*lở\s+mép\s*\)/gi, '');
  text = text.replace(/\s*\(\s*phù\s+ngoại\s+vi\s*\)/gi, '');
  text = text.replace(/\s*\(\s*biệt\s+dược\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*khoảng\s+0,5\s*\)/gi, '');

  // 7. Redundant units/bounds
  text = text.replace(/\s*\(\s*[><=]+\s*\d+\s*ngày\s*\)/gi, '');
  text = text.replace(/\s*\(\s*cách\s+nhau\s+\d+\s+giờ\s*\)/gi, '');
  text = text.replace(/\s*\(\s*Mức\s+độ\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*diễn\s+tiến\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*thường\s+tự\s+khỏi\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*kéo\s+dài\s+trong\s+vòng\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*(36|12|nửa|120)\s+tháng\s*\)/gi, '');
  text = text.replace(/\s*\(\s*trong\s+khoảng\s+\d+\s*-\s*\d+\s*mmHg\s*\)/gi, '');
  text = text.replace(/\s*\(\s*trên\s+200\s+giờ\s*\)/gi, '');

  // 8. ADR subtype spoiler trimming
  // e.g. "ADR Typ B (Bizarre - Phản ứng dị ứng hoặc đặc ứng di truyền Idiosyncrasy)" -> "ADR Typ B (Bizarre)"
  text = text.replace(/\(Bizarre\s*-\s*[^)]+\)/gi, '(Bizarre)');
  text = text.replace(/\(Augmented\s*-\s*[^)]+\)/gi, '(Augmented)');
  text = text.replace(/\(Chronic\s*-\s*[^)]+\)/gi, '(Chronic)');
  text = text.replace(/\(Delayed\s*-\s*[^)]+\)/gi, '(Delayed)');
  text = text.replace(/\(End-of-use\s*-\s*[^)]+\)/gi, '(End-of-use)');

  // 9. Dehydration phác đồ trimming
  // e.g. "Mất từ 10% trọng lượng cơ thể trở lên (Mất nước nặng - Phác đồ C)" -> "Mất từ 10% trọng lượng cơ thể trở lên"
  text = text.replace(/\s*\(\s*Mất\s+nước\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*Có\s+mất\s+nước\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*Không\s+mất\s+nước\s+[^)]+\)/gi, '');

  // 10. Clean dose in parens when redundant e.g. "Spironolacton liều thấp (25 - 50 mg/ngày)" -> "Spironolacton 25 - 50 mg/ngày"
  text = text.replace(/Spironolacton liều thấp\s*\(\s*25\s*-\s*50\s*mg\/ngày\s*\)/gi, 'Spironolacton 25 - 50 mg/ngày');

  // Clean trailing punctuation, extra spaces
  text = text.replace(/\s{2,}/g, ' ').trim();
  text = text.replace(/[\s,;±]+$/, '').trim();

  return text;
}

// Test on entire bank
let modifiedCount = 0;
const diffs = [];

bank.forEach(q => {
  const oldOpts = [...q.options];
  const newOpts = q.options.map(opt => cleanOptionParentheses(opt, q));
  const changed = newOpts.some((opt, idx) => opt !== oldOpts[idx]);

  if (changed) {
    modifiedCount++;
    diffs.push({
      id: q.id,
      question: q.question,
      correct: q.correct,
      oldOptions: oldOpts,
      newOptions: newOpts
    });
  }
});

console.log(`Total questions in bank: ${bank.length}`);
console.log(`Questions cleaned: ${modifiedCount}`);

// Verify that no option becomes empty or identical to another option
let duplicates = 0;
diffs.forEach(d => {
  const seen = new Set();
  d.newOptions.forEach(opt => {
    if (!opt) console.error(`ERROR: Empty option in Q #${d.id}`);
    if (seen.has(opt.toLowerCase())) {
      duplicates++;
      console.error(`ERROR: Duplicate option in Q #${d.id}: "${opt}"`);
    }
    seen.add(opt.toLowerCase());
  });
});

console.log(`Duplicate option issues: ${duplicates}`);

fs.writeFileSync('scripts/paren_all_diffs.json', JSON.stringify(diffs, null, 2));
console.log('Saved all diffs to scripts/paren_all_diffs.json');

