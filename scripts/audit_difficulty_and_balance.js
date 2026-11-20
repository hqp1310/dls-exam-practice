const fs = require('fs');
const path = require('path');

const { DUOCLY2_EXAM_BANK } = require('../questions_duocly2.js');

console.log(`Total questions: ${DUOCLY2_EXAM_BANK.length}`);

// Measure length variance across options for each question
const highVarianceQs = [];
const directGiveaways = [];

DUOCLY2_EXAM_BANK.forEach(q => {
  const lens = q.options.map(o => o.length);
  const minL = Math.min(...lens);
  const maxL = Math.max(...lens);
  const diff = maxL - minL;
  
  if (diff > 25) {
    highVarianceQs.push({
      id: q.id,
      chapter: q.chapter,
      diff,
      minL,
      maxL,
      options: q.options
    });
  }

  // Check if question stem contains words from correct option directly
  const correctText = q.options[q.correct].toLowerCase();
  const qText = q.question.toLowerCase();
  // check words > 6 chars
  const words = correctText.split(/[\s,.-]+/).filter(w => w.length >= 6);
  const matchedWords = words.filter(w => qText.includes(w) && !['chống', 'thuốc', 'chuyển', 'điều', 'trường', 'tác', 'dụng', 'bệnh'].includes(w));
  if (matchedWords.length >= 2) {
    directGiveaways.push({
      id: q.id,
      chapter: q.chapter,
      question: q.question,
      correctText: q.options[q.correct],
      matchedWords
    });
  }
});

console.log(`Questions with option length variance > 25 chars: ${highVarianceQs.length}`);
console.log(`Questions with potential direct keyword leak in question stem: ${directGiveaways.length}`);

console.log('\n--- Sample questions with potential keyword leak in stem ---');
directGiveaways.slice(0, 10).forEach(d => {
  console.log(`\n[ID #${d.id}] [${d.chapter}]`);
  console.log(`Q: ${d.question}`);
  console.log(`Correct: "${d.correctText}" (Matched keywords: ${d.matchedWords.join(', ')})`);
});

console.log('\n--- Sample questions with high option length variance ---');
highVarianceQs.slice(0, 10).forEach(h => {
  console.log(`\n[ID #${h.id}] [${h.chapter}] Diff: ${h.diff} (min: ${h.minL}, max: ${h.maxL})`);
  h.options.forEach((opt, idx) => console.log(`  [${idx}] [${opt.length}] ${opt}`));
});
