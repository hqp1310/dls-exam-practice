const fs = require('fs');

const code = fs.readFileSync('questions_800.js', 'utf8');
const bankMatch = code.match(/const ALL_EXAM_BANK = (\[[\s\S]*\]);/);
const bank = eval(bankMatch[1]);

console.log("Analyzing", bank.length, "questions for weak/obvious distractors...");

const weakPatterns = [
  /không cần/i,
  /không ảnh hưởng/i,
  /không quan trọng/i,
  /không liên quan/i,
  /tùy ý/i,
  /muốn dùng lúc nào cũng được/i,
  /tuyệt đối không bao giờ/i,
  /bất kỳ ai cũng/i,
  /không có tác dụng phụ/i,
  /an thần.*tiêu hóa/i,
  /uống bao nhiêu cũng được/i
];

const flaggedQuestions = [];

bank.forEach(q => {
  const issues = [];
  
  // Check for weak phrases
  q.options.forEach((opt, idx) => {
    if (idx !== q.correct) {
      for (const pat of weakPatterns) {
        if (pat.test(opt)) {
          issues.push(`Distractor [${idx}] contains obvious discard phrase: "${opt}"`);
        }
      }
    }
  });

  // Check for length disparity: if any distractor is < 5 chars while others are > 30 chars or vice versa
  const lens = q.options.map(o => o.length);
  const minLen = Math.min(...lens);
  const maxLen = Math.max(...lens);
  if (maxLen - minLen > 30) {
    issues.push(`Large length disparity: min=${minLen}, max=${maxLen}`);
  }

  // Check if options contain non-sensical words
  q.options.forEach((opt, idx) => {
    if (idx !== q.correct && (opt.includes('đều sai') || opt.includes('đều đúng'))) {
      issues.push(`Distractor [${idx}] uses generic "đều sai/đều đúng": "${opt}"`);
    }
  });

  if (issues.length > 0) {
    flaggedQuestions.push({ id: q.id, chapter: q.chapter, question: q.question, issues, options: q.options, correct: q.correct });
  }
});

console.log(`Found ${flaggedQuestions.length} questions with potential distractor flaws.`);

// Print first 15 flagged questions
flaggedQuestions.slice(0, 15).forEach((item, i) => {
  console.log(`\n#${i+1}. [ID ${item.id}] [${item.chapter}]`);
  console.log(`Q: ${item.question}`);
  item.options.forEach((opt, idx) => {
    console.log(`   ${idx === item.correct ? '(*)' : '   '} [${idx}] ${opt}`);
  });
  console.log(`Issues:`, item.issues.join('; '));
});
