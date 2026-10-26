const fs = require('fs');
const code = fs.readFileSync('questions_800.js', 'utf8');
const bank = eval(code.match(/const ALL_EXAM_BANK = (\[[\s\S]*\]);/)[1]);

const fillerPatterns = [
  /\s*trong quá trình chăm sóc bệnh nhân/gi,
  /\s*kết hợp theo dõi chức năng cơ quan/gi,
  /\s*theo phác đồ điều trị được khuyến cáo/gi,
  /\s*khi có chỉ định theo dõi của bác sĩ/gi,
  /\s*ở người bệnh ở bệnh nhân có nguy cơ biến chứng cao/gi,
  /\s*ở bệnh nhân có nguy cơ biến chứng cao/gi,
  /\s*ở mức độ vừa và nặng làm tăng tỷ lệ tử vong trên người bệnh/gi,
  /\s*ở mức độ vừa và nặng làm tăng tỷ lệ tử vong/gi,
  /\s*kéo dài liên tục kèm theo sốt cao và suy nhược cơ thể/gi,
  /\s*sau khi dùng thuốc kết hợp theo dõi định kỳ chức năng thận/gi,
  /\s*sau khi dùng thuốc định kỳ kết hợp theo dõi định kỳ chức năng thận/gi,
  /\s*trên lâm sàng định kỳ kèm theo rối loạn chức năng cơ quan/gi,
  /\s*trên lâm sàng kèm theo rối loạn chức năng cơ quan/gi,
  /\s*theo khuyến cáo định kỳ ở mức độ vừa đến mức độ nặng/gi,
  /\s*theo khuyến cáo ở mức độ vừa đến mức độ nặng/gi,
  /\s*ở mức độ vừa đến mức độ nặng/gi,
  /\s*ở mức độ vừa và nặng định kỳ/gi,
  /\s*ở mức độ vừa và nặng/gi,
  /\s*sau khi dùng thuốc định kỳ/gi,
  /\s*theo khuyến cáo định kỳ/gi,
  /\s*trên lâm sàng định kỳ/gi,
  /\s*kéo dài liên tục trên lâm sàng/gi,
  /\s*kéo dài liên tục định kỳ/gi,
  /\s*kéo dài liên tục/gi
];

// Contextual end-of-sentence clichés: only if at the end of option!
const endPatterns = [
  /\s*sau khi dùng thuốc$/i,
  /\s*trên lâm sàng$/i,
  /\s*theo khuyến cáo$/i,
  /\s*ở người bệnh$/i
];

let totalStripped = 0;
let affectedQuestions = 0;

bank.forEach(q => {
  let changed = false;
  q.options = q.options.map(opt => {
    let s = opt;
    for (const p of fillerPatterns) {
      if (p.test(s)) {
        s = s.replace(p, '');
        totalStripped++;
        changed = true;
      }
    }
    for (const p of endPatterns) {
      if (p.test(s)) {
        s = s.replace(p, '');
        totalStripped++;
        changed = true;
      }
    }
    s = s.replace(/[\s,-]+$/, '').trim();
    return s;
  });
  if (changed) affectedQuestions++;
});

console.log(`Total filler instances stripped: ${totalStripped}`);
console.log(`Affected questions: ${affectedQuestions} / ${bank.length}`);

// Sample 5 questions before vs after
console.log('\nSample cleaned questions:');
[59, 549, 565, 570, 731].forEach(id => {
  const q = bank.find(x => x.id === id);
  console.log(`\nQ[${id}]: ${q.question}`);
  q.options.forEach((opt, idx) => {
    console.log(`  ${idx === q.correct ? '(*)' : '   '} [${idx}] ${opt}`);
  });
});
