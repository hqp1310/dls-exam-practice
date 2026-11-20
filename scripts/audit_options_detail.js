const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'questions_duocly2.js');
const { DUOCLY2_EXAM_BANK } = require(filePath);

console.log(`Total questions in DUOCLY2_EXAM_BANK: ${DUOCLY2_EXAM_BANK.length}`);

const longOptions = [];
const lengthDiscrepancies = [];
const giveawayPhrases = [];
const parenIssues = [];

const TRIGGER_PHRASES = [
  /nhằm\s+/i,
  /giúp\s+/i,
  /qua đó\s+/i,
  /bằng cách\s+/i,
  /dẫn đến\s+/i,
  /do đó\s+/i,
  /để\s+/i,
  /vì vậy\s+/i,
  /đồng thời làm\s+/i,
  /tránh nguy cơ\s+/i,
  /hạn chế nguy cơ\s+/i,
  /ngăn ngừa nguy cơ\s+/i,
  /theo dõi chặt chẽ/i
];

DUOCLY2_EXAM_BANK.forEach((q, idx) => {
  const lengths = q.options.map(opt => opt.length);
  const correctLen = lengths[q.correct];
  const maxLen = Math.max(...lengths);
  const minLen = Math.min(...lengths);
  const avgLen = lengths.reduce((a, b) => a + b, 0) / 4;
  
  // Check if correct answer is the longest by a large margin
  const otherLens = lengths.filter((_, i) => i !== q.correct);
  const maxOther = Math.max(...otherLens);
  
  if (correctLen - maxOther >= 25 && correctLen > 50) {
    lengthDiscrepancies.push({
      id: q.id,
      chapter: q.chapter,
      question: q.question,
      correct: q.correct,
      correctText: q.options[q.correct],
      correctLen,
      maxOther,
      diff: correctLen - maxOther,
      options: q.options
    });
  }

  // Check any option > 80 chars
  q.options.forEach((opt, oIdx) => {
    if (opt.length > 75) {
      longOptions.push({
        id: q.id,
        chapter: q.chapter,
        isCorrect: oIdx === q.correct,
        oIdx,
        len: opt.length,
        opt
      });
    }

    // Check parentheses
    if (/\([^)]+\)/.test(opt)) {
      parenIssues.push({
        id: q.id,
        isCorrect: oIdx === q.correct,
        opt
      });
    }

    // Check trigger phrases
    for (const re of TRIGGER_PHRASES) {
      if (re.test(opt)) {
        giveawayPhrases.push({
          id: q.id,
          isCorrect: oIdx === q.correct,
          phrase: re.source,
          opt
        });
        break;
      }
    }
  });
});

console.log(`\n=== AUDIT RESULTS ===`);
console.log(`Questions where correct answer is > 25 chars longer than any other option: ${lengthDiscrepancies.length}`);
console.log(`Total options > 75 chars: ${longOptions.length} (in ${new Set(longOptions.map(o => o.id)).size} questions)`);
console.log(`Options with parentheses: ${parenIssues.length}`);
console.log(`Options with giveaway phrases: ${giveawayPhrases.length} (in ${new Set(giveawayPhrases.map(o => o.id)).size} questions)`);

console.log(`\n--- Top 10 worst length discrepancies (Correct answer way longer) ---`);
lengthDiscrepancies.sort((a, b) => b.diff - a.diff).slice(0, 10).forEach(d => {
  console.log(`\n[ID #${d.id}] [${d.chapter}] Diff: +${d.diff} chars (Correct: ${d.correctLen} vs Other Max: ${d.maxOther})`);
  console.log(`Q: ${d.question}`);
  d.options.forEach((opt, i) => {
    console.log(`  ${i === d.correct ? '(*)' : '   '} [${opt.length}] ${opt}`);
  });
});

console.log(`\n--- Sample giveaway phrases ---`);
giveawayPhrases.slice(0, 10).forEach(g => {
  console.log(`[ID #${g.id}] (${g.isCorrect ? 'CORRECT' : 'WRONG'}) [Matched: ${g.phrase}] ${g.opt}`);
});
