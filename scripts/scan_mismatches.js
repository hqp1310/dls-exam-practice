const fs = require('fs');
const path = require('path');
const { DUOCLY2_EXAM_BANK } = require('../questions_duocly2.js');

const mismatches = [];

DUOCLY2_EXAM_BANK.forEach(q => {
  const correctOpt = q.options[q.correct].toLowerCase();
  const exp = q.explanation.toLowerCase();
  const qText = q.question.toLowerCase();
  
  // Extract key terms from correct option (words >= 4 chars)
  const optWords = correctOpt.split(/[\s,–\-\/\+]+/).filter(w => w.length >= 4 && !['thuốc', 'chống', 'trong', 'người', 'phân', 'trường', 'nhóm'].includes(w));
  
  // Check how many of these words appear in explanation or question
  const inExp = optWords.filter(w => exp.includes(w));
  const inQ = optWords.filter(w => qText.includes(w));
  
  // If almost none of the words in the correct option appear in the explanation, flag it!
  if (optWords.length >= 2 && inExp.length === 0) {
    mismatches.push({
      id: q.id,
      chapter: q.chapter,
      question: q.question,
      correctOpt: q.options[q.correct],
      explanation: q.explanation.slice(0, 150)
    });
  }
});

console.log(`Found ${mismatches.length} potential option-explanation mismatches:`);
mismatches.forEach(m => {
  console.log(`\n[ID #${m.id}] [${m.chapter}]`);
  console.log(`Q: ${m.question}`);
  console.log(`Correct: "${m.correctOpt}"`);
  console.log(`Exp: ${m.explanation}`);
});
