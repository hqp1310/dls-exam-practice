const path = require('path');
const questionsFile = path.join(__dirname, '..', 'questions_800.js');
const ALL_EXAM_BANK = require(questionsFile);

const EXAM_MATRIX_44H = [
  { chapter: "Kháng sinh & Kháng sinh dự phòng", lesson: "Bài 11", hours: 4, count: 8 },
  { chapter: "Đại cương DLS & Thông tin thuốc", lesson: "Bài 1 & 5", hours: 6, count: 10 },
  { chapter: "Tiêu chảy cấp ở trẻ em", lesson: "Bài 16", hours: 4, count: 7 },
  { chapter: "Glucocorticoid & Phác đồ điều trị", lesson: "Bài 12", hours: 4, count: 7 },
  { chapter: "Tương tác thuốc & Tương kỵ", lesson: "Bài 3", hours: 4, count: 7 },
  { chapter: "ADR, Dị ứng & Sốc phản vệ", lesson: "Bài 4", hours: 4, count: 7 },
  { chapter: "Xét nghiệm lâm sàng & Nhận định KQ", lesson: "Bài 6", hours: 4, count: 7 },
  { chapter: "Sử dụng thuốc ở Phụ nữ có thai & CCB", lesson: "Bài 9", hours: 3, count: 5 },
  { chapter: "Dược động học & Suy gan, thận", lesson: "Bài 2", hours: 2, count: 4 },
  { chapter: "Điều trị Tăng huyết áp & Cấp cứu THA", lesson: "Bài 15", hours: 2, count: 4 },
  { chapter: "Thuốc giảm đau", lesson: "Bài 13", hours: 2, count: 4 },
  { chapter: "Sử dụng thuốc ở Trẻ em", lesson: "Bài 7", hours: 2, count: 4 },
  { chapter: "Vitamin và chất khoáng", lesson: "Bài 14", hours: 2, count: 4 },
  { chapter: "Sử dụng thuốc ở Người cao tuổi", lesson: "Bài 8", hours: 1, count: 2 }
];

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

let chosenQuestions = [];
const chosenStems = new Set();

EXAM_MATRIX_44H.forEach(rule => {
  const chQuestions = ALL_EXAM_BANK.filter(q => q.chapter === rule.chapter);
  const dlsCandidates = chQuestions.filter(q => q.source === 'DLS_PDF');
  const bytCandidates = chQuestions.filter(q => !q.source || q.source === 'BYT');
  const otherCandidates = chQuestions.filter(q => q.source && q.source !== 'DLS_PDF' && q.source !== 'BYT');

  const pool = [...shuffle(dlsCandidates), ...shuffle(bytCandidates), ...shuffle(otherCandidates)];

  let picked = 0;
  for (const q of pool) {
    if (!chosenStems.has(q.question)) {
      chosenQuestions.push(q);
      chosenStems.add(q.question);
      picked++;
      if (picked >= rule.count) break;
    }
  }
});

console.log('Total chosen in Phase 1:', chosenQuestions.length);

if (chosenQuestions.length < 80) {
  const backupPool = shuffle(ALL_EXAM_BANK.filter(q => 
    !chosenStems.has(q.question) && (q.source === 'DLS_PDF' || q.source === 'BYT')
  ));
  for (const q of backupPool) {
    chosenQuestions.push(q);
    chosenStems.add(q.question);
    if (chosenQuestions.length >= 80) break;
  }
}

console.log('Total questions after Phase 2 (Target 80):', chosenQuestions.length);

const dlsCount = chosenQuestions.filter(q => q.source === 'DLS_PDF').length;
const bytCount = chosenQuestions.filter(q => q.source === 'BYT' || !q.source).length;
console.log('Breakdown in generated exam:');
console.log('- DLS_PDF questions:', dlsCount);
console.log('- BYT questions:', bytCount);

// Sample questions from different chapters
console.log('\n--- Sample Generated Questions ---');
chosenQuestions.slice(0, 3).forEach((q, idx) => {
  console.log(`\n[Câu ${idx + 1}] (${q.chapter} | ${q.source})`);
  console.log(q.question);
  q.options.forEach((opt, optIdx) => {
    console.log(`  ${['A', 'B', 'C', 'D'][optIdx]}. ${opt.substring(0, 80)}...`);
  });
  console.log(`  => Đ/án đúng: ${['A', 'B', 'C', 'D'][q.correct]}`);
});

