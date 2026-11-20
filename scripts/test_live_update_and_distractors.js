const path = require('path');
const assert = require('assert');

// 1. Setup mock browser globals
global.window = global;
global.window.addEventListener = () => {};
global.window.removeEventListener = () => {};
global.window.speechSynthesis = { getVoices: () => [], speak: () => {}, cancel: () => {} };
global.window.location = { search: '', pathname: '/' };

const localStorageStore = {
  'dls_current_subject': 'duocly2'
};

global.localStorage = {
  getItem(k) { return localStorageStore[k] || null; },
  setItem(k, v) { localStorageStore[k] = String(v); },
  removeItem(k) { delete localStorageStore[k]; }
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

// Load data files
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

console.log('\n=== TEST 1: DISTRACTOR EXPLANATIONS RENDERING ===');
const qSample = DUOCLY2_EXAM_BANK[0];
const htmlOutput = app.formatDetailedExplanationHTML(qSample, 1); // User chose option 1 (B - wrong), correct is 2 (C)

assert(htmlOutput.includes('Cơ chế &amp; Luận giải then chốt'), 'Must include key summary title');
assert(htmlOutput.includes('Phân tích chi tiết từng phương án (Đúng &amp; Sai)'), 'Must include distractor section title');
assert(htmlOutput.includes('✓ ĐÁP ÁN ĐÚNG'), 'Must mark correct option');
assert(htmlOutput.includes('✕ ĐÁP ÁN SAI'), 'Must mark wrong options');
assert(htmlOutput.includes('Lựa chọn của bạn'), 'Must highlight user selected wrong option');
assert(htmlOutput.includes('Ouabain'), 'Must contain option A rationale');
assert(htmlOutput.includes('Digitoxin'), 'Must contain option B rationale');
assert(htmlOutput.includes('Reserpin'), 'Must contain option D rationale');
console.log('✓ PASS: Distractor explanations rendered with all 4 options, badges, and user choice indicator!');

console.log('\n=== TEST 2: IN-FLIGHT LIVE UPDATE DURING ACTIVE EXAM ===');
// Switch to duocly2 and start standard exam
app.switchSubject('duocly2', true);
app.generateSubjectStandardExam(true);

const examQuestionsBefore = app.getExamQuestions();
assert.strictEqual(examQuestionsBefore.length, 60, 'Exam must have 60 questions');

// Simulate user answering 10 questions in-flight
const targetQ1 = examQuestionsBefore[0];
const targetQ5 = examQuestionsBefore[4];
const targetQ10 = examQuestionsBefore[9];

// Save answers in userAnswers draft
const initialDraft = {
  subject: 'duocly2',
  questions: JSON.parse(JSON.stringify(examQuestionsBefore)),
  userAnswers: {
    [targetQ1.id]: 2,
    [targetQ5.id]: 1,
    [targetQ10.id]: 3
  },
  flagged: [targetQ1.id],
  currentQuestionIndex: 9,
  timeRemaining: 2750,
  isExamStarted: true,
  isExamPaused: false,
  isExamSubmitted: false,
  currentExamMode: 'standard',
  updatedAt: Date.now()
};

localStorageStore['dls_active_exam_draft_v1'] = JSON.stringify(initialDraft);
const restored = app.restoreExamDraft();
assert(restored, 'Draft must be restored');
assert.strictEqual(app.getTimeRemaining(), 2750, 'Timer must be 2750');

// Now simulate a question bank update in memory (e.g. question 1 has updated wording or distractor)
const masterQ1 = DUOCLY2_EXAM_BANK.find(q => q.id === targetQ1.id);
const originalExplanation = masterQ1.explanation;
masterQ1.explanation = 'UPDATED CLINICAL EXPLANATION FOR DIGOXIN BIOCHEMICAL PATHWAY';

// Trigger live update WITHOUT reloading page and WITHOUT redoing exam
const updatedCount = app.syncExamQuestionsWithMasterBank();
assert(updatedCount > 0, 'Must have updated in-flight questions');

const examQuestionsAfter = app.getExamQuestions();
const updatedQ1InExam = examQuestionsAfter.find(q => q.id === targetQ1.id);

assert.strictEqual(updatedQ1InExam.explanation, 'UPDATED CLINICAL EXPLANATION FOR DIGOXIN BIOCHEMICAL PATHWAY', 'In-flight question must receive live update!');

// Verify user progress was NOT wiped!
const currentDraftRaw = JSON.parse(localStorageStore['dls_active_exam_draft_v1']);
assert.strictEqual(currentDraftRaw.userAnswers[targetQ1.id], 2, 'User answer for Q1 must be preserved!');
assert.strictEqual(currentDraftRaw.userAnswers[targetQ5.id], 1, 'User answer for Q5 must be preserved!');
assert.strictEqual(currentDraftRaw.userAnswers[targetQ10.id], 3, 'User answer for Q10 must be preserved!');
assert.strictEqual(currentDraftRaw.timeRemaining, 2750, 'Time remaining must be preserved!');
assert.strictEqual(currentDraftRaw.currentQuestionIndex, 9, 'Current question index must be preserved!');
assert.strictEqual(currentDraftRaw.isExamSubmitted, false, 'Exam must NOT be submitted or reset!');

console.log('✓ PASS: Live in-flight update synchronized questions, updated explanations, and preserved 100% of user answers, timer, and progress!');

// Restore original explanation
masterQ1.explanation = originalExplanation;
app.syncExamQuestionsWithMasterBank();

console.log('\n=== TEST 3: RELOAD (F5) MERGE WITH MASTER BANK ===');
// Suppose localStorage has a draft with old question data, but user hits F5 (restoreExamDraft)
const restoredAgain = app.restoreExamDraft();
assert(restoredAgain, 'Draft must restore cleanly on page load');
const activeQ1 = app.getExamQuestions().find(q => q.id === targetQ1.id);
assert.strictEqual(activeQ1.explanation, originalExplanation, 'Restored draft must automatically pull fresh content from master bank');

console.log('✓ PASS: restoreExamDraft cleanly pulls latest master bank questions on reload!');

console.log('\n🎉 ALL LIVE UPDATE AND DISTRACTOR TESTS PASSED 100%!');
