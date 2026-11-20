const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'questions_duocly2.js');
const { DUOCLY2_EXAM_BANK } = require(filePath);

console.log(`Total questions: ${DUOCLY2_EXAM_BANK.length}`);

let totalOptions = 0;
let over60 = 0;
let over70 = 0;
let over80 = 0;
let over100 = 0;

const questionsWithLongOpts = new Set();

DUOCLY2_EXAM_BANK.forEach(q => {
  q.options.forEach(opt => {
    totalOptions++;
    if (opt.length > 60) over60++;
    if (opt.length > 70) over70++;
    if (opt.length > 80) over80++;
    if (opt.length > 100) over100++;
    if (opt.length > 65) questionsWithLongOpts.add(q.id);
  });
});

console.log(`Total options: ${totalOptions}`);
console.log(`Options > 60 chars: ${over60} (${(over60/totalOptions*100).toFixed(1)}%)`);
console.log(`Options > 70 chars: ${over70} (${(over70/totalOptions*100).toFixed(1)}%)`);
console.log(`Options > 80 chars: ${over80} (${(over80/totalOptions*100).toFixed(1)}%)`);
console.log(`Options > 100 chars: ${over100} (${(over100/totalOptions*100).toFixed(1)}%)`);
console.log(`Questions with at least one option > 65 chars: ${questionsWithLongOpts.size} / ${DUOCLY2_EXAM_BANK.length}`);
