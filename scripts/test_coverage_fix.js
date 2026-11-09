const fs = require('fs');
const path = require('path');

// 1. Setup mock browser globals
global.window = global;
global.window.addEventListener = () => {};
global.window.removeEventListener = () => {};
global.window.speechSynthesis = { getVoices: () => [], speak: () => {}, cancel: () => {} };
global.window.location = { search: '', pathname: '/' };

const localStorageStore = {
  'dls_current_subject': 'duocly2',
  'dls_exam_history_v1': JSON.stringify([
    {
      id: 'exam_dls_1',
      totalQuestions: 80,
      subject: 'dls',
      questions: [
        { id: 1, chapter: 'Đại cương DLS & Thông tin thuốc', isCorrect: true, userAnswer: 0 },
        { id: 2, chapter: 'Đại cương DLS & Thông tin thuốc', isCorrect: false, userAnswer: 1 },
        { id: 3, chapter: 'Kháng sinh & Kháng sinh dự phòng', isCorrect: true, userAnswer: 2 }
      ]
    },
    {
      id: 'exam_dls_legacy',
      totalQuestions: 80,
      // subject missing (legacy exam from DLS)
      questions: [
        { id: 4, chapter: 'Kháng sinh & Kháng sinh dự phòng', isCorrect: true, userAnswer: 0 },
        { id: 5, chapter: 'Glucocorticoid và phác đồ điều trị', isCorrect: true, userAnswer: 1 }
      ]
    }
  ]),
  'dls_study_answers_v2': JSON.stringify({
    '1': { idx: 0, text: 'Hoa Kỳ' },
    '2': { idx: 1, text: 'Thông tin thuốc cấp 1' },
    '3': { idx: 2, text: 'Viêm phổi mắc phải cộng đồng' }
  })
};

global.localStorage = {
  getItem: (k) => localStorageStore[k] || null,
  setItem: (k, v) => { localStorageStore[k] = String(v); },
  removeItem: (k) => { delete localStorageStore[k]; }
};

function createMockEl(id = '', tag = 'div') {
  return {
    id,
    tagName: tag.toUpperCase(),
    textContent: '',
    innerHTML: '',
    style: {},
    classList: {
      classes: new Set(),
      add(c) { this.classes.add(c); },
      remove(c) { this.classes.delete(c); },
      contains(c) { return this.classes.has(c); },
      toggle(c, force) { if (force !== undefined) { force ? this.add(c) : this.remove(c); } else { this.contains(c) ? this.remove(c) : this.add(c); } }
    },
    attributes: {},
    setAttribute(k, v) { this.attributes[k] = v; },
    getAttribute(k) { return this.attributes[k]; },
    querySelectorAll() { return []; },
    querySelector() { return null; },
    appendChild() {},
    scrollIntoView() {},
    addEventListener() {},
    removeEventListener() {}
  };
}

const mockDoc = {
  documentElement: createMockEl('html', 'html'),
  body: createMockEl('body', 'body'),
  title: '',
  elements: {},
  createElement(tag) { return createMockEl('', tag); },
  getElementById(id) {
    if (!this.elements[id]) {
      this.elements[id] = createMockEl(id);
    }
    return this.elements[id];
  },
  querySelectorAll() { return []; },
  querySelector(sel) {
    const id = sel.replace('#', '').replace('.', '');
    return this.getElementById(id);
  },
  addEventListener() {}
};

global.document = mockDoc;
global.playChime = () => {};
global.showToast = () => {};
global.alert = () => {};
global.confirm = () => true;

// 2. Load question banks
const q800 = require(path.join(__dirname, '..', 'questions_800.js'));
global.ALL_EXAM_BANK = q800;

const qdl2 = require(path.join(__dirname, '..', 'questions_duocly2.js'));
global.DUOCLY2_EXAM_BANK = qdl2.DUOCLY2_EXAM_BANK;
global.DUOCLY2_MATRIX_32H = qdl2.DUOCLY2_MATRIX_32H;

const fc = require(path.join(__dirname, '..', 'flashcards.js'));
global.FLASHCARD_DATA = fc.FLASHCARD_DATA;
global.FLASHCARD_DATA_DUOCLY2 = fc.FLASHCARD_DATA_DUOCLY2;

// 3. Load app.js
const app = require(path.join(__dirname, '..', 'app.js'));

console.log('--- TEST 1: Dược Lý 2 initial coverage calculation ---');
app.switchSubject('duocly2', true);

const statsDL2 = app.getBankCoverageStats();
console.log('Duoc Ly 2 coverage stats:');
console.log('totalBank:', statsDL2.totalBank);
console.log('seenCount:', statsDL2.seenCount);
console.log('coveragePct:', statsDL2.coveragePct);

if (statsDL2.seenCount !== 0) {
  console.error(`FAIL: Expected seenCount to be 0 for Duoc Ly 2, but got ${statsDL2.seenCount}`);
  process.exit(1);
}
console.log('✓ PASS: Duoc Ly 2 seenCount is 0 / 507 (0.0%) as expected!');

console.log('\n--- TEST 2: Dược Lâm Sàng past coverage preserved ---');
app.switchSubject('dls', true);
const statsDLS = app.getBankCoverageStats();
console.log('DLS coverage stats:');
console.log('totalBank:', statsDLS.totalBank);
console.log('seenCount:', statsDLS.seenCount);
console.log('coveragePct:', statsDLS.coveragePct);

if (statsDLS.seenCount === 0) {
  console.error('FAIL: Expected DLS to count past DLS exams/answers, but got 0');
  process.exit(1);
}
console.log(`✓ PASS: DLS correctly counted past DLS exams/answers (seenCount = ${statsDLS.seenCount})!`);

console.log('\n--- TEST 3: Switch back to Dược Lý 2 ---');
app.switchSubject('duocly2', true);
const statsDL2_back = app.getBankCoverageStats();
if (statsDL2_back.seenCount !== 0) {
  console.error(`FAIL: Expected seenCount to still be 0 after switching back, got ${statsDL2_back.seenCount}`);
  process.exit(1);
}
console.log('✓ PASS: Dược Lý 2 stays at 0 / 507 (0.0%)!');

console.log('\n--- ALL COVERAGE TESTS PASSED! ---');
