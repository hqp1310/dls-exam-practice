const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const app = fs.readFileSync(path.join(__dirname, '..', 'app.js'), 'utf8');
const css = fs.readFileSync(path.join(__dirname, '..', 'styles.css'), 'utf8');

const requiredIds = [
  'btn-exam-dls-pdf',
  'btn-exam-unseen',
  'btn-exam-schools',
  'btn-exam-graded',
  'btn-exam-random',
  'current-exam-icon',
  'current-exam-name',
  'current-exam-tag',
  'current-exam-desc',
  'sync-generated-pin',
  'sync-generated-code',
  'sync-input-code'
];

let allOk = true;
requiredIds.forEach(id => {
  if (!html.includes(`id="${id}"`)) {
    console.error('MISSING ID in HTML:', id);
    allOk = false;
  } else {
    console.log('✓ Found ID:', id);
  }
});

if (allOk) {
  console.log('🎉 All required HTML IDs verified successfully!');
}
