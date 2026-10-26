const fs = require('fs');
const path = require('path');

const bankPath = path.join(__dirname, '..', 'questions_800.js');
const code = fs.readFileSync(bankPath, 'utf8');
eval(code.replace('const ALL_EXAM_BANK', 'global.ALL_EXAM_BANK'));
const bank = global.ALL_EXAM_BANK;

console.log('Total bank questions:', bank.length);

// Find all parens in options
const parenQuestions = [];
bank.forEach(q => {
  const parens = [];
  q.options.forEach((opt, idx) => {
    const matches = opt.match(/\((.*?)\)/g);
    if (matches) {
      parens.push({ optIdx: idx, isCorrect: idx === q.correct, matches, opt });
    }
  });
  if (parens.length > 0) {
    parenQuestions.push({ id: q.id, chapter: q.chapter, question: q.question, parens, options: q.options, correct: q.correct });
  }
});

console.log('Questions with parens in options:', parenQuestions.length);

// Write report to scratch
fs.writeFileSync(path.join(__dirname, '..', 'scratch_paren_report.json'), JSON.stringify(parenQuestions, null, 2));
console.log('Saved report to scratch_paren_report.json');
