const fs = require('fs');

global.window = global;
global.localStorage = {
  getItem: () => 'duocly2',
  setItem: () => {}
};
global.document = {
  getElementById: (id) => {
    return {
      id,
      style: {},
      innerHTML: '',
      classList: { toggle: () => {}, add: () => {}, remove: () => {} },
      querySelectorAll: () => []
    };
  },
  querySelectorAll: () => []
};

require('../cheatsheet_duocly2.js');

if (typeof renderDuocLy2CheatsheetView !== 'function') {
  console.error('FAIL: renderDuocLy2CheatsheetView not defined');
  process.exit(1);
}

const mockContainer = {
  id: 'view-cheatsheet',
  innerHTML: ''
};

global.document.getElementById = (id) => {
  if (id === 'view-cheatsheet') return mockContainer;
  return {
    id,
    style: {},
    classList: { toggle: () => {}, add: () => {}, remove: () => {} }
  };
};

renderDuocLy2CheatsheetView();

console.log('Mock container HTML length:', mockContainer.innerHTML.length);
if (mockContainer.innerHTML.length < 5000) {
  console.error('FAIL: HTML content too short');
  process.exit(1);
}

// Check for all 20 lessons
for (let i = 1; i <= 20; i++) {
  if (!mockContainer.innerHTML.includes('dl2-item-dl2_ch' + i)) {
    console.error('FAIL: Missing lesson dl2_ch' + i);
    process.exit(1);
  }
}
console.log('PASS: All 20 lessons present in rendered HTML!');

// Check for key topics
const keyTerms = [
  'Digoxin', 'Enalapril', 'Nitroglycerin', 'Amiodaron', 'Furosemid',
  'Omeprazole', 'Albendazol', 'Salbutamol', 'Fexofenadin', 'Atorvastatin',
  'Artemisinin', 'Glucocorticoid', 'Insulin', 'Metformin', 'Warfarin',
  'Vitamin', 'Sắt', 'Acyclovir', 'Cyclophosphamid', 'N-acetylcystein'
];
for (const term of keyTerms) {
  if (!mockContainer.innerHTML.includes(term)) {
    console.error('FAIL: Missing key term ' + term);
    process.exit(1);
  }
}
console.log('PASS: All 20 key pharmacological terms verified!');
console.log('ALL TESTS PASSED!');
