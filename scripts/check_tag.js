const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '..', 'cheatsheet_duocly2.js');
const c = fs.readFileSync(targetPath, 'utf8');

const pos = c.indexOf('id="dl2-body-dl2_ch1"');
console.log('Context around dl2-body-dl2_ch1:');
console.log(c.slice(pos - 40, pos + 60));
