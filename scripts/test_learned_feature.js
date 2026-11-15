const fs = require('fs');
const vm = require('vm');

// Mock browser environment
const localStorageMap = new Map();
const windowMock = {
  localStorage: {
    getItem: (k) => localStorageMap.get(k) || null,
    setItem: (k, v) => localStorageMap.set(k, String(v)),
    removeItem: (k) => localStorageMap.delete(k)
  },
  dl2OpenAccordions: {},
  document: {
    getElementById: (id) => null,
    querySelectorAll: (sel) => []
  }
};

const cheatsheetCode = fs.readFileSync('cheatsheet_duocly2.js', 'utf8');

const ctx = vm.createContext({
  localStorage: windowMock.localStorage,
  dl2OpenAccordions: windowMock.dl2OpenAccordions,
  document: windowMock.document,
  console: console,
  showToast: (msg) => console.log('Toast:', msg),
  playChime: (type) => {}
});

vm.runInContext(cheatsheetCode, ctx);

console.log('--- Testing Learned Feature Functions ---');

// Test 1: Initial state
let count = vm.runInContext('getDl2LearnedCount()', ctx);
console.log('Initial learned count:', count);
if (count !== 0) throw new Error('Expected 0 initial learned lessons');

// Test 2: Toggle ch1
vm.runInContext('toggleDl2LessonLearned("dl2_ch1")', ctx);
count = vm.runInContext('getDl2LearnedCount()', ctx);
console.log('Count after marking ch1:', count);
if (count !== 1) throw new Error('Expected 1 learned lesson after toggle');

// Test 3: Toggle ch2, ch5, ch20
vm.runInContext('toggleDl2LessonLearned("dl2_ch2")', ctx);
vm.runInContext('toggleDl2LessonLearned("dl2_ch5")', ctx);
vm.runInContext('toggleDl2LessonLearned("dl2_ch20")', ctx);
count = vm.runInContext('getDl2LearnedCount()', ctx);
console.log('Count after marking ch2, ch5, ch20:', count);
if (count !== 4) throw new Error('Expected 4 learned lessons');

// Test 4: Mark all
vm.runInContext('markAllDl2LessonsLearned(true)', ctx);
count = vm.runInContext('getDl2LearnedCount()', ctx);
console.log('Count after markAll true:', count);
if (count !== 20) throw new Error('Expected 20 learned lessons');

// Test 5: Mark all false
vm.runInContext('markAllDl2LessonsLearned(false)', ctx);
count = vm.runInContext('getDl2LearnedCount()', ctx);
console.log('Count after markAll false:', count);
if (count !== 0) throw new Error('Expected 0 learned lessons after reset');

// Test 6: Verify HTML rendering for all 20 lessons
const allHtml = vm.runInContext('generateAll20LessonsHtml()', ctx);
for (let i = 1; i <= 20; i++) {
  const chId = 'dl2_ch' + i;
  if (!allHtml.includes(`id="dl2-chk-${chId}"`)) {
    throw new Error(`Missing header checkbox for ${chId}`);
  }
  if (!allHtml.includes(`id="dl2-bottom-chk-${chId}"`)) {
    throw new Error(`Missing bottom button for ${chId}`);
  }
  if (!allHtml.includes(`data-chid="${chId}"`)) {
    throw new Error(`Missing data-chid for ${chId}`);
  }
}
console.log('✓ All 20 lessons have both header checkboxes and bottom action buttons!');

// Test 7: Verify progress card HTML
const cardHtml = vm.runInContext('generateDl2LearningProgressCardHtml()', ctx);
if (!cardHtml.includes('dl2-learned-count') || !cardHtml.includes('dl2-learned-bar-fill')) {
  throw new Error('Progress card HTML missing expected elements');
}
console.log('✓ Progress card HTML rendered successfully!');

console.log('🎉 ALL TESTS PASSED SUCCESSFULLY!');
