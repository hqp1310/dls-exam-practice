const fs = require('fs');
const path = require('path');

// Mock browser globals
global.window = global;
global.window.addEventListener = () => {};
global.window.removeEventListener = () => {};
global.window.speechSynthesis = { getVoices: () => [], speak: () => {}, cancel: () => {} };
global.window.location = { search: '', pathname: '/' };
global.localStorage = {
  store: {},
  getItem(k) { return this.store[k] || null; },
  setItem(k, v) { this.store[k] = String(v); },
  removeItem(k) { delete this.store[k]; }
};

// Mock DOM elements
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

// Load data files and assign to global as in browser <script> tags
const q800 = require(path.join(__dirname, '..', 'questions_800.js'));
global.ALL_EXAM_BANK = q800;

const qdl2 = require(path.join(__dirname, '..', 'questions_duocly2.js'));
global.DUOCLY2_EXAM_BANK = qdl2.DUOCLY2_EXAM_BANK;
global.DUOCLY2_MATRIX_32H = qdl2.DUOCLY2_MATRIX_32H;

const fc = require(path.join(__dirname, '..', 'flashcards.js'));
global.FLASHCARD_DATA = fc.FLASHCARD_DATA;
global.FLASHCARD_DATA_DUOCLY2 = fc.FLASHCARD_DATA_DUOCLY2;

// Load app.js
const app = require(path.join(__dirname, '..', 'app.js'));

console.log('\n--- VERIFYING TOPIC STUDY & COVERAGE ---');
const viewTopicEl = document.getElementById('view-topic');
app.switchSubject('duocly2', true);

// Verify that all 20 lessons have questions in the bank
DUOCLY2_MATRIX_32H.forEach((rule, idx) => {
  const inBank = DUOCLY2_EXAM_BANK.filter(q => q.chapter === rule.chapter);
  if (inBank.length < rule.count) {
    throw new Error(`Lesson ${rule.lesson} (${rule.chapter}) has only ${inBank.length} questions, need at least ${rule.count}`);
  }
  console.log(`✓ Lesson ${idx + 1} (${rule.lesson}): ${rule.chapter.padEnd(30)} -> ${inBank.length} questions in bank (requires ${rule.count})`);
});

console.log('\n✅ ALL 20 LESSONS VERIFIED WITH AMPLE QUESTIONS!');
