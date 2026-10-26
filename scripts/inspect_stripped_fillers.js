const fs = require('fs');

const code = fs.readFileSync('questions_800.js', 'utf8');
const bankMatch = code.match(/const ALL_EXAM_BANK = (\[[\s\S]*\]);/);
const bank = eval(bankMatch[1]);

function stripFillers(text) {
  let cleaned = text
    .replace(/\s*kéo dài liên tục kèm theo sốt cao và suy nhược cơ thể/gi, '')
    .replace(/\s*ở mức độ vừa và nặng làm tăng tỷ lệ tử vong trên người bệnh/gi, '')
    .replace(/\s*sau khi dùng thuốc kết hợp theo dõi định kỳ chức năng thận/gi, '')
    .replace(/\s*ở mức độ vừa đến mức độ nặng/gi, '')
    .replace(/\s*ở mức độ vừa và nặng/gi, '')
    .replace(/\s*sau khi dùng thuốc định kỳ/gi, '')
    .replace(/\s*theo khuyến cáo định kỳ/gi, '')
    .replace(/\s*kéo dài liên tục/gi, '')
    .trim();
  return cleaned;
}

const samples = [];
bank.forEach(q => {
  let hasFiller = false;
  const strippedOpts = q.options.map(o => {
    const s = stripFillers(o);
    if (s !== o) hasFiller = true;
    return s;
  });
  if (hasFiller) {
    samples.push({
      id: q.id,
      chapter: q.chapter,
      question: q.question,
      original: q.options,
      stripped: strippedOpts,
      correct: q.correct
    });
  }
});

console.log(`Inspected ${samples.length} questions.`);
samples.slice(0, 10).forEach(s => {
  console.log(`\n[ID ${s.id}] Q: ${s.question}`);
  s.stripped.forEach((opt, idx) => {
    console.log(`  ${idx === s.correct ? '(*)' : '   '} [${idx}] ${opt}`);
  });
});
