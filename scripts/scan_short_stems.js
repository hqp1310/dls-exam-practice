const fs = require('fs');
const path = require('path');
const { DUOCLY2_EXAM_BANK } = require('../questions_duocly2.js');

const shortStems = [];
const directQuestions = [];

DUOCLY2_EXAM_BANK.forEach(q => {
  if (q.question.length < 80) {
    shortStems.push({
      id: q.id,
      chapter: q.chapter,
      question: q.question,
      options: q.options,
      correct: q.correct
    });
  }
});

console.log(`Questions with stem < 80 chars: ${shortStems.length}`);
shortStems.forEach(s => {
  console.log(`\n[ID #${s.id}] [${s.chapter}] (${s.question.length} chars)`);
  console.log(`Q: ${s.question}`);
  s.options.forEach((opt, idx) => {
    console.log(`  [${idx}] ${idx === s.correct ? '(*)' : '   '} [${opt.length}] ${opt}`);
  });
});
