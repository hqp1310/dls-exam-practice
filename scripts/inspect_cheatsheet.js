const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '..', 'cheatsheet_duocly2.js');
const content = fs.readFileSync(targetPath, 'utf8');

// It defines const DUOCLY2_CHEATSHEET_DATA = { ... }
const pStart = content.indexOf('const DUOCLY2_CHEATSHEET_DATA = ');
const jsonStr = content.slice(pStart + 'const DUOCLY2_CHEATSHEET_DATA = '.length, content.lastIndexOf('};') + 1);
const data = eval('(' + jsonStr + ')');

console.log('Total lessons:', Object.keys(data).length);
Object.keys(data).forEach(k => {
  const item = data[k];
  const hasGolden = item.content.includes('Điểm chú ý đặc biệt') || item.content.includes('golden-box');
  console.log(`${k}: ${item.title} (chars: ${item.content.length}) | hasGoldenPoints: ${hasGolden}`);
});

