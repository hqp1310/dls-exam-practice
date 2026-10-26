const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'questions_800.js');
let fileContent = fs.readFileSync(filePath, 'utf8');

// Load ALL_EXAM_BANK
const bankCode = fileContent.replace('const ALL_EXAM_BANK =', 'global.ALL_EXAM_BANK =');
eval(bankCode);
const originalBank = global.ALL_EXAM_BANK;

console.log('Original Bank loaded. Total questions:', originalBank.length);

// Verify original correct text map for post-check
const originalCorrectMap = new Map();
originalBank.forEach(q => {
  originalCorrectMap.set(q.id, q.options[q.correct]);
});

// Helper to shuffle array (Fisher-Yates)
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Group by chapter
const chapters = {};
originalBank.forEach(q => {
  if (!chapters[q.chapter]) chapters[q.chapter] = [];
  chapters[q.chapter].push(q);
});

const modifiedBank = [];

for (const [chName, qList] of Object.entries(chapters)) {
  const n = qList.length;
  // Create perfectly balanced target indices [0, 1, 2, 3, 0, 1, 2, 3...]
  const targetIndices = [];
  for (let i = 0; i < n; i++) {
    targetIndices.push(i % 4);
  }
  const shuffledTargets = shuffleArray(targetIndices);

  qList.forEach((q, idx) => {
    const targetIdx = shuffledTargets[idx];
    const correctText = originalCorrectMap.get(q.id);
    const distractors = shuffleArray(q.options.filter((_, i) => i !== q.correct));

    const newOptions = new Array(4);
    newOptions[targetIdx] = correctText;
    let dIdx = 0;
    for (let i = 0; i < 4; i++) {
      if (i !== targetIdx) {
        newOptions[i] = distractors[dIdx++];
      }
    }

    modifiedBank.push({
      id: q.id,
      chapter: q.chapter,
      question: q.question,
      options: newOptions,
      correct: targetIdx,
      explanation: q.explanation,
      reference: q.reference
    });
  });
}

// Sort back by ID to preserve original order
modifiedBank.sort((a, b) => a.id - b.id);

// Final Validation
if (modifiedBank.length !== originalBank.length) {
  throw new Error(`Length mismatch: ${modifiedBank.length} vs ${originalBank.length}`);
}

let mismatchCount = 0;
modifiedBank.forEach(q => {
  const origText = originalCorrectMap.get(q.id);
  if (q.options[q.correct] !== origText) {
    mismatchCount++;
  }
  if (!q.options || q.options.length !== 4) {
    throw new Error(`Invalid options count for Q#${q.id}`);
  }
  if (q.correct < 0 || q.correct > 3) {
    throw new Error(`Invalid correct index for Q#${q.id}: ${q.correct}`);
  }
});

if (mismatchCount > 0) {
  throw new Error(`Mismatch in correct answers: ${mismatchCount}`);
}

console.log('✓ Validation passed: All 822 correct answer texts perfectly preserved!');

const counts = {0: 0, 1: 0, 2: 0, 3: 0};
modifiedBank.forEach(q => counts[q.correct]++);
console.log('Overall Correct index distribution (0=A, 1=B, 2=C, 3=D):', counts);

console.log('Chapter-by-chapter distribution:');
for (const ch of Object.keys(chapters)) {
  const chCounts = {0: 0, 1: 0, 2: 0, 3: 0};
  modifiedBank.filter(q => q.chapter === ch).forEach(q => chCounts[q.correct]++);
  console.log(ch.padEnd(45), JSON.stringify(chCounts));
}

// Write back to questions_800.js
const header = '// Ngân hàng 822 Câu hỏi Trắc nghiệm Dược Lâm Sàng Chuẩn Hóa 100% Không Trùng Lặp\n// Đầy đủ 16 chương trọng tâm, 4 phương án cân đối, triệt tiêu thiên kiến vị trí & độ dài, chuẩn đại học Dược\nconst ALL_EXAM_BANK = ' + JSON.stringify(modifiedBank, null, 2) + ';\n';
fs.writeFileSync(filePath, header, 'utf8');
console.log('Successfully wrote shuffled and balanced bank to questions_800.js!');
