const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '..', 'cheatsheet_duocly2.js');
const c = fs.readFileSync(targetPath, 'utf8');

const p1 = c.indexOf('id="dl2-body-dl2_ch1"');
const closeTag = c.indexOf('>', p1);
const nextItem = c.indexOf('<!-- BÀI 2: THUỐC ĐIỀU TRỊ THA -->');
console.log('Body tag open:', c.slice(p1 - 40, closeTag + 1));
console.log('Body end slice:', c.slice(nextItem - 60, nextItem));
