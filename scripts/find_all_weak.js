const fs = require('fs');
const code = fs.readFileSync('questions_800.js', 'utf8');
const bank = eval(code.match(/const ALL_EXAM_BANK = (\[[\s\S]*\]);/)[1]);

const weakWords = [
  'không cần', 'thảo dược', 'càng nhiều.*càng tốt', 'sau 5 năm', 'bị ngất',
  'tùy ý', 'rút kim truyền', 'chỉ cung cấp công thức', 'quảng cáo', 'đều sai',
  'đều đúng', 'màu sắc bắt mắt', 'bất kỳ ai', 'ngừng toàn bộ', 'tự ý chỉnh'
];

let matches = [];
bank.forEach(q => {
  q.options.forEach((opt, idx) => {
    if (idx !== q.correct) {
      for (const w of weakWords) {
        if (new RegExp(w, 'i').test(opt)) {
          matches.push({ id: q.id, question: q.question, optIdx: idx, opt, correct: q.correct, pattern: w });
          break;
        }
      }
    }
  });
});

console.log('Total matches:', matches.length);
matches.forEach(m => {
  console.log(`Q[${m.id}]: "${m.question.substring(0, 60)}..." -> Opt[${m.optIdx}]: "${m.opt}" (correct=${m.correct})`);
});
