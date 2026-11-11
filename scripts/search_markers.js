const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '..', 'cheatsheet_duocly2.js');
const c = fs.readFileSync(targetPath, 'utf8');

const regex = /id=["']([^"']*ch1[^"']*)["']/g;
let m;
while ((m = regex.exec(c)) !== null) {
  console.log('Match:', m[1]);
}
