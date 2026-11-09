const fs = require('fs');

['app.js', 'index.html', 'questions_duocly2.js', 'questions_800.js', 'flashcards.js', 'cheatsheet_duocly2.js'].forEach(file => {
  if (!fs.existsSync(file)) return;
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  let matchCount = 0;
  lines.forEach((line, idx) => {
    // remove template literals ${...}
    const sanitized = line.replace(/\$\{[^}]+\}/g, '');
    if (sanitized.includes('$')) {
      matchCount++;
      if (matchCount <= 8) {
        console.log(`[${file}:${idx+1}] ${sanitized.trim()}`);
      }
    }
  });
  console.log(`=== ${file}: ${matchCount} lines with bare $ ===`);
});
