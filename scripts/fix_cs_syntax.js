const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'cheatsheet_duocly2.js');
let code = fs.readFileSync(filePath, 'utf8');

// Replace all escaped \` and \${ in renderDuocLy2CheatsheetView
code = code.replace(/container\.innerHTML = \\`/g, 'container.innerHTML = `');
code = code.replace(/<\/section>\s*\\`;/g, '</section>\n  `;');
code = code.replace(/\\(\$\{[\s\S]*?\})/g, '$1');

fs.writeFileSync(filePath, code, 'utf8');
console.log('Fixed syntax in cheatsheet_duocly2.js');
