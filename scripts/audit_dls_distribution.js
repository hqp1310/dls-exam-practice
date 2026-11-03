const bank = require('../questions_800.js');
const dlsQuestions = bank.filter(q => q.source === 'DLS_PDF');

console.log('Total DLS_PDF questions:', dlsQuestions.length);

const chapterCounts = {};
dlsQuestions.forEach(q => {
  chapterCounts[q.chapter] = (chapterCounts[q.chapter] || 0) + 1;
});
console.log('Chapter distribution of DLS_PDF questions:', chapterCounts);

// Check question length and option length
let avgQLen = 0;
let avgOptLen = 0;
dlsQuestions.forEach(q => {
  avgQLen += q.question.length;
  q.options.forEach(o => avgOptLen += o.length);
});
console.log('Avg Question length:', Math.round(avgQLen / dlsQuestions.length));
console.log('Avg Option length:', Math.round(avgOptLen / (dlsQuestions.length * 4)));
