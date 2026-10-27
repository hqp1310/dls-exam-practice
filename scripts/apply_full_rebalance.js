// scripts/apply_full_rebalance.js
const fs = require('fs');

console.log('Loading bank and update modules...');
const bank = require('../questions_800.js');
const m1 = require('./rebalance_mod1.js');
const m2 = require('./rebalance_mod2.js');
const m3 = require('./rebalance_mod3.js');
const m3Patch = require('./tuned_mod3_patch.js');
const m4 = require('./rebalance_mod4.js');
const m4Patch = require('./tuned_mod4_patch.js');
const nonupPatch = require('./tuned_nonup_patch.js');
const highDiffPatch = require('./tuned_high_diff_patch.js');

const allUpdates = {
  ...m1,
  ...m2,
  ...m3,
  ...m3Patch,
  ...m4,
  ...m4Patch,
  ...nonupPatch,
  ...highDiffPatch
};

console.log('Total distinct questions to update:', Object.keys(allUpdates).length);

let appliedCount = 0;
const updatedBank = bank.map(q => {
  if (allUpdates[q.id]) {
    appliedCount++;
    const u = allUpdates[q.id];
    return {
      ...q,
      options: [...u.options],
      correct: u.correct
    };
  }
  return { ...q };
});

console.log(`Successfully applied updates to ${appliedCount} questions out of ${bank.length}.`);

// Validation
for (let i = 0; i < updatedBank.length; i++) {
  const q = updatedBank[i];
  if (!q.options || q.options.length !== 4) {
    throw new Error(`Question ID ${q.id} at index ${i} does not have exactly 4 options!`);
  }
  if (typeof q.correct !== 'number' || q.correct < 0 || q.correct > 3) {
    throw new Error(`Question ID ${q.id} at index ${i} has invalid correct index: ${q.correct}`);
  }
  for (let j = 0; j < 4; j++) {
    if (!q.options[j] || typeof q.options[j] !== 'string' || q.options[j].trim() === '') {
      throw new Error(`Question ID ${q.id} option ${j} is empty or invalid!`);
    }
  }
}

// Calculate metrics
let longest = 0, shortest = 0, middle = 0, totalDiff = 0, count = 0;
let letterCounts = { 0: 0, 1: 0, 2: 0, 3: 0 };
let biasedLongest = 0;

for (const q of updatedBank) {
  const cL = q.options[q.correct].length;
  const lens = q.options.map(o => o.length);
  const maxL = Math.max(...lens);
  const minL = Math.min(...lens);
  const others = q.options.filter((_, idx) => idx !== q.correct).map(v => v.length);
  const avgO = others.reduce((a,b)=>a+b,0)/others.length;
  const diff = cL - avgO;
  totalDiff += diff;
  
  if (cL === maxL && cL !== minL) {
    longest++;
    if (diff > 10) biasedLongest++;
  } else if (cL === minL && cL !== maxL) {
    shortest++;
  } else {
    middle++;
  }
  letterCounts[q.correct] = (letterCounts[q.correct] || 0) + 1;
  count++;
}

console.log('================ FINAL REBALANCE STATS ================');
console.log('Total questions:', count);
console.log('Longest is correct: ' + longest + ' (' + (longest/count*100).toFixed(1) + '%) [Target: ~25%]');
console.log('Shortest is correct: ' + shortest + ' (' + (shortest/count*100).toFixed(1) + '%) [Target: 35-40%]');
console.log('Middle is correct: ' + middle + ' (' + (middle/count*100).toFixed(1) + '%) [Target: 35-40%]');
console.log('Average Length Diff: ' + (totalDiff/count).toFixed(2) + ' chars [Target: ~0.0]');
console.log('Biased Longest (>10 chars): ' + biasedLongest);
console.log('Letter Distribution: A=' + letterCounts[0] + ', B=' + letterCounts[1] + ', C=' + letterCounts[2] + ', D=' + letterCounts[3]);
console.log('=======================================================');

// Write to questions_800.js
const header = `// Ngân hàng câu hỏi trắc nghiệm Dược Lâm Sàng toàn diện
// Tổng hợp chuẩn Bộ Y tế & Đề thi Dược Lâm Sàng các trường ĐH Y Dược hàng đầu (HUP, UMP, HMU)
// Đã qua chuẩn hóa phân bố đáp án, loại bỏ hoàn toàn cụm từ mồi dễ đoán, chuẩn hóa chất lượng đáp án nhiễu

const ALL_EXAM_BANK = `;

const footer = `;

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ALL_EXAM_BANK;
}
`;

const fileContent = header + JSON.stringify(updatedBank, null, 2) + footer;
fs.writeFileSync('questions_800.js', fileContent, 'utf8');
console.log('questions_800.js successfully written and verified!');
