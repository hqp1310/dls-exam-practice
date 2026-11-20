const fs = require('fs');
const path = require('path');
const { DUOCLY2_EXAM_BANK } = require('../questions_duocly2.js');

const candidates = [];

DUOCLY2_EXAM_BANK.forEach(q => {
  const lens = q.options.map(o => o.length);
  const diff = Math.max(...lens) - Math.min(...lens);
  
  // Check if stem is overly simple / direct giveaway
  // e.g. "Thuốc nào sau đây là thuốc...", "Cơ chế của thuốc X là gì?"
  const isDirect = /^(thuốc nào sau đây là|chỉ định của|chống chỉ định của|cơ chế của|tác dụng phụ của)/i.test(q.question);
  
  // Check if options have weak distractors or length diff > 15
  if (diff > 15 || isDirect) {
    candidates.push({
      id: q.id,
      chapter: q.chapter,
      diff,
      question: q.question,
      options: q.options,
      correct: q.correct
    });
  }
});

console.log(`Total questions that can be refined for higher clinical depth and balanced distractors: ${candidates.length}`);

// Group by chapter
const chMap = {};
candidates.forEach(c => chMap[c.chapter] = (chMap[c.chapter] || 0) + 1);
console.table(chMap);
