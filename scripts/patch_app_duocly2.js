const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, '..', 'app.js');
let code = fs.readFileSync(appPath, 'utf8');

// 1. TOP OF APP.JS - Subject state and helpers
const topTarget = `// Global State
let currentTab = 'exam'; // 'exam' | 'history' | 'topic' | 'flashcards' | 'cheatsheet'
let currentQuestionIndex = 0;
let EXAM_QUESTIONS = []; // The current active 80 questions in the test session
let userAnswers = {}; // { questionId: selectedOptionIndex }
let flaggedQuestions = new Set();
let isExamSubmitted = false;
let isExamStarted = false; // Must click "Bắt đầu" or choose an option to start countdown
let isExamPaused = false;  // Allows pausing countdown
let examTimer = null;
const EXAM_DURATION_MINUTES = 80;
let timeRemaining = EXAM_DURATION_MINUTES * 60; // 80 minutes (4800 seconds)
let activeTopicFilter = 'Tất cả';
let topicSourceFilter = 'all'; // 'all' | 'HUP' | 'UMP' | 'HMU' | 'BYT' | 'DLS_PDF'
let topicLevelFilter = 'all';  // 'all' | 'Nhận biết' | 'Vận dụng' | 'Vận dụng cao'
let studyAnswers = {};`;

const topReplacement = `// Global State
let currentTab = 'exam'; // 'exam' | 'history' | 'topic' | 'flashcards' | 'cheatsheet'
let currentQuestionIndex = 0;
let EXAM_QUESTIONS = []; // The current active questions in the test session
let userAnswers = {}; // { questionId: selectedOptionIndex }
let flaggedQuestions = new Set();
let isExamSubmitted = false;
let isExamStarted = false; // Must click "Bắt đầu" or choose an option to start countdown
let isExamPaused = false;  // Allows pausing countdown
let examTimer = null;
let currentSubject = localStorage.getItem('dls_current_subject') || 'duocly2'; // 'duocly2' | 'dls'
const EXAM_DURATION_MINUTES = currentSubject === 'duocly2' ? 60 : 80;
let timeRemaining = EXAM_DURATION_MINUTES * 60;
let activeTopicFilter = 'Tất cả';
let topicSourceFilter = 'all'; // 'all' | 'HUP' | 'UMP' | 'HMU' | 'BYT' | 'DLS_PDF'
let topicLevelFilter = 'all';  // 'all' | 'Nhận biết' | 'Vận dụng' | 'Vận dụng cao'
let studyAnswers = {};

// Subject Helper Functions
function getActiveBank() {
  if (currentSubject === 'duocly2') {
    return (typeof DUOCLY2_EXAM_BANK !== 'undefined' && DUOCLY2_EXAM_BANK.length)
      ? DUOCLY2_EXAM_BANK
      : (typeof ALL_EXAM_BANK !== 'undefined' ? ALL_EXAM_BANK : []);
  }
  return (typeof ALL_EXAM_BANK !== 'undefined' && ALL_EXAM_BANK.length)
    ? ALL_EXAM_BANK
    : [];
}

function getActiveMatrix() {
  if (currentSubject === 'duocly2') {
    return (typeof DUOCLY2_MATRIX_32H !== 'undefined') ? DUOCLY2_MATRIX_32H : [];
  }
  return EXAM_MATRIX_44H;
}

function getActiveExamDuration() {
  return currentSubject === 'duocly2' ? 60 : 80;
}

function getActiveQuestionCount() {
  return currentSubject === 'duocly2' ? 60 : 80;
}

function getActiveFlashcards() {
  if (currentSubject === 'duocly2') {
    return (typeof FLASHCARD_DATA_DUOCLY2 !== 'undefined' && FLASHCARD_DATA_DUOCLY2.length)
      ? FLASHCARD_DATA_DUOCLY2
      : (typeof FLASHCARD_DATA !== 'undefined' ? FLASHCARD_DATA : []);
  }
  return typeof FLASHCARD_DATA !== 'undefined' ? FLASHCARD_DATA : [];
}

function applySubjectUI() {
  const isDL2 = currentSubject === 'duocly2';

  // 1. Switcher pill buttons
  const btnDL2 = document.getElementById('btn-subject-duocly2');
  const btnDLS = document.getElementById('btn-subject-dls');
  if (btnDL2) {
    btnDL2.classList.toggle('active', isDL2);
    btnDL2.setAttribute('aria-selected', isDL2 ? 'true' : 'false');
  }
  if (btnDLS) {
    btnDLS.classList.toggle('active', !isDL2);
    btnDLS.setAttribute('aria-selected', !isDL2 ? 'true' : 'false');
  }

  // 2. Titles & subtitles
  document.title = isDL2
    ? 'Luyện Thi Trắc Nghiệm Dược Lý 2 - 60 Câu / 60 Phút Chuẩn Bộ Y Tế'
    : 'Luyện Thi Trắc Nghiệm Dược Lâm Sàng - 80 Câu Thực Chiến';

  const mainTitle = document.getElementById('header-main-title');
  if (mainTitle) mainTitle.textContent = isDL2 ? 'DƯỢC LÝ 2 • 60 CÂU' : 'DƯỢC LÂM SÀNG • 80 CÂU';

  const subtitle = document.getElementById('header-main-subtitle');
  if (subtitle) subtitle.textContent = isDL2
    ? 'Giáo trình Bộ Y tế (PGS.TS. Mai Tất Tố) & Khung 20 Bài Giảng'
    : 'Giáo trình Bộ Y tế & Đề thi Thực chiến';

  const mobileTag = document.getElementById('mobile-active-tab-tag');
  if (mobileTag && currentTab === 'exam') {
    mobileTag.textContent = isDL2 ? '⏱️ Thi Thử 60 Câu' : '⏱️ Thi Thử 80 Câu';
  }

  const tabExamLabel = document.getElementById('tab-exam-label');
  if (tabExamLabel) tabExamLabel.textContent = isDL2 ? 'Thi Thử 60 Câu' : 'Thi Thử 80 Câu';

  const matrixBtnText = document.getElementById('btn-matrix-text');
  if (matrixBtnText) matrixBtnText.textContent = isDL2 ? 'Ma trận 32h' : 'Ma trận 44h';

  const paletteTitle = document.getElementById('palette-title');
  if (paletteTitle) paletteTitle.textContent = isDL2 ? 'Bảng Câu Hỏi (60 Câu)' : 'Bảng Câu Hỏi (80 Câu)';

  // 3. Mode buttons labels & visibility
  const btnStandard = document.getElementById('btn-exam-dls-pdf');
  const textStandard = document.getElementById('btn-text-standard');
  if (btnStandard) {
    btnStandard.title = isDL2
      ? 'Tạo đề thi 60 câu bám sát 100% Giáo trình Dược lý 2 Bộ Y tế (60 phút)'
      : 'Tạo đề thi 80 câu bám sát 100% đề thi thực chiến Dls.pdf và Sách Giáo trình Bộ Y tế (80 phút)';
  }
  if (textStandard) {
    textStandard.textContent = isDL2 ? '📝 Đề Chuẩn Sách Bộ Y Tế (60 Câu)' : '📝 Đề Chuẩn Dls.pdf & Sách (80 Câu)';
  }

  const btnUnseen = document.getElementById('btn-exam-unseen');
  const textUnseen = document.getElementById('btn-text-unseen');
  if (btnUnseen) {
    btnUnseen.title = isDL2
      ? 'Tạo đề thi 60 câu chưa từng làm để quét sạch toàn bộ 507 câu trong ngân hàng Dược lý 2'
      : 'Tạo đề thi 80 câu chưa từng làm để quét sạch toàn bộ 1.589 câu trong ngân hàng đề';
  }
  if (textUnseen) {
    textUnseen.textContent = isDL2 ? '✨ Đề 60 Câu Chưa Làm' : '✨ Đề 80 Câu Chưa Làm';
  }

  const btnSchools = document.getElementById('btn-exam-schools');
  if (btnSchools) {
    btnSchools.style.display = isDL2 ? 'none' : '';
  }

  const textRandom = document.getElementById('btn-text-random');
  if (textRandom) {
    textRandom.textContent = isDL2 ? '🎲 Tạo Đề Random Mới (60 Câu)' : '🎲 Tạo Đề Random Mới';
  }

  // 4. Reset timer display if not started
  if (!isExamStarted && !isExamSubmitted) {
    timeRemaining = (isDL2 ? 60 : 80) * 60;
    updateTimerDisplay();
  }

  updateCoverageDisplays();
}

function switchSubject(subjectKey, force = false) {
  if (subjectKey === currentSubject && !force) return;

  if (!force && !isExamSubmitted && Object.keys(userAnswers).length > 0) {
    const nextName = subjectKey === 'duocly2' ? 'Dược Lý 2 (60 câu • 60 phút)' : 'Dược Lâm Sàng (80 câu • 80 phút)';
    if (!confirm('Bạn đang làm dở bài thi. Bạn có chắc muốn chuyển sang môn ' + nextName + '? Bài thi hiện tại sẽ bị hủy.')) {
      return;
    }
  }

  currentSubject = subjectKey;
  try {
    localStorage.setItem('dls_current_subject', currentSubject);
  } catch (e) { }

  applySubjectUI();
  clearExamDraft();

  // Reset filters
  activeTopicFilter = 'Tất cả';
  topicSourceFilter = 'all';
  topicLevelFilter = 'all';

  // Generate new standard exam for the selected subject
  generateSubjectStandardExam(true);

  if (currentTab === 'topic') {
    renderTopicStudyView();
  } else if (currentTab === 'flashcards') {
    renderFlashcardView();
  } else if (currentTab === 'history') {
    renderHistoryView();
  }

  playChime('click');
  const nameToast = currentSubject === 'duocly2' ? 'Dược Lý 2 (60 câu • 60 phút)' : 'Dược Lâm Sàng (80 câu • 80 phút)';
  showToast('✅ Đã chuyển sang môn ' + nameToast + '!');
}`;

if (!code.includes(topTarget)) {
  console.error('topTarget not found in app.js!');
  process.exit(1);
}
code = code.replace(topTarget, topReplacement);
console.log('1. Replaced Top of app.js successfully.');

// 2. EXAM_MODE_DEFINITIONS & setActiveExamMode
const modeTarget = `const EXAM_MODE_DEFINITIONS = {
  'dls-pdf': {
    btnId: 'btn-exam-dls-pdf',
    icon: '📝',
    name: 'Đề Chuẩn Dls.pdf & Sách (80 Câu)',
    pill: '✓ Chuẩn Thực Chiến Dls.pdf',
    desc: 'Bám sát 100% cấu trúc đề thi thực chiến Dls.pdf & Sách Giáo trình Bộ Y tế (14 bài giảng 44h).'
  },
  'unseen': {
    btnId: 'btn-exam-unseen',
    icon: '✨',
    name: 'Đề 80 Câu Chưa Từng Làm',
    pill: '✓ 100% Câu Mới Toanh',
    desc: 'Lọc và bốc chính xác 80 câu bạn chưa từng gặp lần nào để quét sạch 1.589 câu trong kho đề.'
  },
  'graded': {
    btnId: 'btn-exam-graded',
    icon: '🎯',
    name: 'Đề Phân Hóa Năng Lực (2:4:4)',
    pill: '✓ 16 NB : 32 VD : 32 VDC',
    desc: 'Cấu trúc phân loại 3 cấp độ chuẩn hóa: 16 Nhận biết (20%) • 32 Vận dụng (40%) • 32 Vận dụng cao (40%).'
  },
  'random': {
    btnId: 'btn-exam-random',
    icon: '🎲',
    name: 'Đề Tự Động Mix Ma Trận 44h',
    pill: '✓ Trộn Ngẫu Nhiên',
    desc: 'Trộn đều các câu hỏi theo 14 bài giảng chính khóa chuẩn khung chương trình 44h.'
  },
  'HUP': {
    btnId: 'btn-exam-schools',
    icon: '🏛️',
    name: 'Đề Đại Học Dược Hà Nội (HUP)',
    pill: '✓ Đề Trường HUP',
    desc: 'Ưu tiên các câu hỏi thực chiến, TDM Vancomycin, Aminoglycosid, DĐH phi tuyến tính từ ĐH Dược Hà Nội.'
  },
  'UMP': {
    btnId: 'btn-exam-schools',
    icon: '🏛️',
    name: 'Đề ĐH Y Dược TP.HCM (UMP)',
    pill: '✓ Đề Trường UMP',
    desc: 'Ưu tiên các câu hỏi ca lâm sàng dược lý, tương tác thuốc và xét nghiệm từ ĐH Y Dược TP.HCM.'
  },
  'HMU': {
    btnId: 'btn-exam-schools',
    icon: '🏛️',
    name: 'Đề Đại Học Y Hà Nội (HMU)',
    pill: '✓ Đề Trường HMU',
    desc: 'Ưu tiên các câu hỏi lâm sàng bệnh học, phác đồ điều trị và sử dụng thuốc từ ĐH Y Hà Nội.'
  },
  'BYT': {
    btnId: 'btn-exam-schools',
    icon: '📋',
    name: 'Đề Chuẩn Giáo Trình Bộ Y Tế',
    pill: '✓ Chuẩn SGK Bộ Y Tế',
    desc: 'Bốc 100% câu hỏi chuẩn theo cuốn Giáo trình Dược Lâm Sàng Bộ Y tế (PGS.TS. Hoàng Thị Kim Huyền).'
  },
  'all': {
    btnId: 'btn-exam-schools',
    icon: '🎯',
    name: 'Đề Ma Trận 44h Toàn Diện (Tổng Hợp)',
    pill: '✓ Trộn ĐH Dược HN & TP.HCM',
    desc: 'Trộn thông minh các câu hỏi hay nhất từ ĐH Dược Hà Nội, ĐH Y Dược TP.HCM và ĐH Y Hà Nội.'
  }
};

function setActiveExamMode(mode) {
  if (!mode) mode = 'dls-pdf';
  currentExamMode = mode;
  try {
    localStorage.setItem('dls_current_exam_mode', mode);
  } catch (e) { }

  const def = EXAM_MODE_DEFINITIONS[mode] || EXAM_MODE_DEFINITIONS['dls-pdf'];

  // 1. Update Buttons on Exam Controls Bar
  const allBtns = document.querySelectorAll('.btn-exam-mode');
  allBtns.forEach(btn => btn.classList.remove('active-mode'));

  const activeBtn = document.getElementById(def.btnId);
  if (activeBtn) {
    activeBtn.classList.add('active-mode');
  }

  // 2. Update Header Status Badge
  const iconEl = document.getElementById('current-exam-icon');
  const nameEl = document.getElementById('current-exam-name');
  const tagEl = document.getElementById('current-exam-tag');
  const descEl = document.getElementById('current-exam-desc');

  if (iconEl) iconEl.textContent = def.icon;
  if (nameEl) nameEl.textContent = def.name;
  if (tagEl) tagEl.textContent = def.pill;
  if (descEl) descEl.textContent = def.desc;`;

const modeReplacement = `const EXAM_MODE_DEFINITIONS = {
  'standard': {
    btnId: 'btn-exam-dls-pdf',
    icon: '📝',
    nameDuocly2: 'Đề Chuẩn Sách Bộ Y Tế (60 Câu)',
    nameDls: 'Đề Chuẩn Dls.pdf & Sách (80 Câu)',
    pillDuocly2: '✓ Chuẩn 20 Bài (32 Tiết)',
    pillDls: '✓ Chuẩn Thực Chiến Dls.pdf',
    descDuocly2: 'Bám sát 100% cấu trúc 20 bài giảng Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố).',
    descDls: 'Bám sát 100% cấu trúc đề thi thực chiến Dls.pdf & Sách Giáo trình Bộ Y tế (14 bài giảng 44h).'
  },
  'dls-pdf': {
    btnId: 'btn-exam-dls-pdf',
    icon: '📝',
    nameDuocly2: 'Đề Chuẩn Sách Bộ Y Tế (60 Câu)',
    nameDls: 'Đề Chuẩn Dls.pdf & Sách (80 Câu)',
    pillDuocly2: '✓ Chuẩn 20 Bài (32 Tiết)',
    pillDls: '✓ Chuẩn Thực Chiến Dls.pdf',
    descDuocly2: 'Bám sát 100% cấu trúc 20 bài giảng Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố).',
    descDls: 'Bám sát 100% cấu trúc đề thi thực chiến Dls.pdf & Sách Giáo trình Bộ Y tế (14 bài giảng 44h).'
  },
  'unseen': {
    btnId: 'btn-exam-unseen',
    icon: '✨',
    nameDuocly2: 'Đề 60 Câu Chưa Từng Làm',
    nameDls: 'Đề 80 Câu Chưa Từng Làm',
    pillDuocly2: '✓ 100% Câu Mới Toanh',
    pillDls: '✓ 100% Câu Mới Toanh',
    descDuocly2: 'Lọc và bốc chính xác 60 câu bạn chưa từng gặp lần nào để quét sạch 507 câu trong kho đề Dược lý 2.',
    descDls: 'Lọc và bốc chính xác 80 câu bạn chưa từng gặp lần nào để quét sạch 1.589 câu trong kho đề.'
  },
  'graded': {
    btnId: 'btn-exam-graded',
    icon: '🎯',
    nameDuocly2: 'Đề Phân Hóa Năng Lực (2:4:4)',
    nameDls: 'Đề Phân Hóa Năng Lực (2:4:4)',
    pillDuocly2: '✓ 12 NB : 24 VD : 24 VDC',
    pillDls: '✓ 16 NB : 32 VD : 32 VDC',
    descDuocly2: 'Cấu trúc phân loại 3 cấp độ: 12 Nhận biết (20%) • 24 Vận dụng (40%) • 24 Vận dụng cao (40%) theo ma trận 32h.',
    descDls: 'Cấu trúc phân loại 3 cấp độ chuẩn hóa: 16 Nhận biết (20%) • 32 Vận dụng (40%) • 32 Vận dụng cao (40%).'
  },
  'random': {
    btnId: 'btn-exam-random',
    icon: '🎲',
    nameDuocly2: 'Đề Tự Động Mix Ma Trận 32h (60 Câu)',
    nameDls: 'Đề Tự Động Mix Ma Trận 44h (80 Câu)',
    pillDuocly2: '✓ Trộn Ngẫu Nhiên',
    pillDls: '✓ Trộn Ngẫu Nhiên',
    descDuocly2: 'Trộn đều các câu hỏi theo 20 bài giảng chính khóa chuẩn khung chương trình 32h.',
    descDls: 'Trộn đều các câu hỏi theo 14 bài giảng chính khóa chuẩn khung chương trình 44h.'
  },
  'HUP': {
    btnId: 'btn-exam-schools',
    icon: '🏛️',
    name: 'Đề Đại Học Dược Hà Nội (HUP)',
    pill: '✓ Đề Trường HUP',
    desc: 'Ưu tiên các câu hỏi thực chiến, TDM Vancomycin, Aminoglycosid, DĐH phi tuyến tính từ ĐH Dược Hà Nội.'
  },
  'UMP': {
    btnId: 'btn-exam-schools',
    icon: '🏛️',
    name: 'Đề ĐH Y Dược TP.HCM (UMP)',
    pill: '✓ Đề Trường UMP',
    desc: 'Ưu tiên các câu hỏi ca lâm sàng dược lý, tương tác thuốc và xét nghiệm từ ĐH Y Dược TP.HCM.'
  },
  'HMU': {
    btnId: 'btn-exam-schools',
    icon: '🏛️',
    name: 'Đề Đại Học Y Hà Nội (HMU)',
    pill: '✓ Đề Trường HMU',
    desc: 'Ưu tiên các câu hỏi lâm sàng bệnh học, phác đồ điều trị và sử dụng thuốc từ ĐH Y Hà Nội.'
  },
  'BYT': {
    btnId: 'btn-exam-schools',
    icon: '📋',
    name: 'Đề Chuẩn Giáo Trình Bộ Y Tế',
    pill: '✓ Chuẩn SGK Bộ Y Tế',
    desc: 'Bốc 100% câu hỏi chuẩn theo cuốn Giáo trình Dược Lâm Sàng Bộ Y tế (PGS.TS. Hoàng Thị Kim Huyền).'
  },
  'all': {
    btnId: 'btn-exam-schools',
    icon: '🎯',
    name: 'Đề Ma Trận 44h Toàn Diện (Tổng Hợp)',
    pill: '✓ Trộn ĐH Dược HN & TP.HCM',
    desc: 'Trộn thông minh các câu hỏi hay nhất từ ĐH Dược Hà Nội, ĐH Y Dược TP.HCM và ĐH Y Hà Nội.'
  }
};

function setActiveExamMode(mode) {
  if (!mode) mode = (currentSubject === 'duocly2' ? 'standard' : 'dls-pdf');
  currentExamMode = mode;
  try {
    localStorage.setItem('dls_current_exam_mode', mode);
  } catch (e) { }

  const def = EXAM_MODE_DEFINITIONS[mode] || EXAM_MODE_DEFINITIONS['standard'] || EXAM_MODE_DEFINITIONS['dls-pdf'];
  const isDL2 = currentSubject === 'duocly2';
  const modeName = isDL2 ? (def.nameDuocly2 || def.name) : (def.nameDls || def.name);
  const modePill = isDL2 ? (def.pillDuocly2 || def.pill) : (def.pillDls || def.pill);
  const modeDesc = isDL2 ? (def.descDuocly2 || def.desc) : (def.descDls || def.desc);

  // 1. Update Buttons on Exam Controls Bar
  const allBtns = document.querySelectorAll('.btn-exam-mode');
  allBtns.forEach(btn => btn.classList.remove('active-mode'));

  const activeBtn = document.getElementById(def.btnId);
  if (activeBtn) {
    activeBtn.classList.add('active-mode');
  }

  // 2. Update Header Status Badge
  const iconEl = document.getElementById('current-exam-icon');
  const nameEl = document.getElementById('current-exam-name');
  const tagEl = document.getElementById('current-exam-tag');
  const descEl = document.getElementById('current-exam-desc');

  if (iconEl) iconEl.textContent = def.icon;
  if (nameEl) nameEl.textContent = modeName;
  if (tagEl) tagEl.textContent = modePill;
  if (descEl) descEl.textContent = modeDesc;`;

if (!code.includes(modeTarget)) {
  console.error('modeTarget not found in app.js!');
  process.exit(1);
}
code = code.replace(modeTarget, modeReplacement);
console.log('2. Replaced EXAM_MODE_DEFINITIONS successfully.');

// 3. Draft subject storage & restore
const draftSaveTarget = `    const draft = {
      questions: EXAM_QUESTIONS,
      userAnswers: userAnswers,
      flagged: Array.from(flaggedQuestions),
      currentQuestionIndex: currentQuestionIndex,
      timeRemaining: timeRemaining,
      isExamStarted: isExamStarted,
      isExamPaused: isExamPaused,
      isExamSubmitted: isExamSubmitted,
      lastSubmittedExamId: lastSubmittedExamId,
      currentExamMode: currentExamMode,
      updatedAt: Date.now()
    };`;

const draftSaveReplacement = `    const draft = {
      subject: currentSubject,
      questions: EXAM_QUESTIONS,
      userAnswers: userAnswers,
      flagged: Array.from(flaggedQuestions),
      currentQuestionIndex: currentQuestionIndex,
      timeRemaining: timeRemaining,
      isExamStarted: isExamStarted,
      isExamPaused: isExamPaused,
      isExamSubmitted: isExamSubmitted,
      lastSubmittedExamId: lastSubmittedExamId,
      currentExamMode: currentExamMode,
      updatedAt: Date.now()
    };`;

code = code.replace(draftSaveTarget, draftSaveReplacement);

const draftRestoreTarget = `    EXAM_QUESTIONS = draft.questions;
    userAnswers = draft.userAnswers || {};
    flaggedQuestions = new Set(draft.flagged || []);
    currentQuestionIndex = typeof draft.currentQuestionIndex === 'number' ? draft.currentQuestionIndex : 0;
    timeRemaining = typeof draft.timeRemaining === 'number' ? draft.timeRemaining : EXAM_DURATION_MINUTES * 60;`;

const draftRestoreReplacement = `    if (draft.subject && draft.subject !== currentSubject) {
      currentSubject = draft.subject;
      try { localStorage.setItem('dls_current_subject', currentSubject); } catch (e) {}
      applySubjectUI();
    }

    EXAM_QUESTIONS = draft.questions;
    userAnswers = draft.userAnswers || {};
    flaggedQuestions = new Set(draft.flagged || []);
    currentQuestionIndex = typeof draft.currentQuestionIndex === 'number' ? draft.currentQuestionIndex : 0;
    timeRemaining = typeof draft.timeRemaining === 'number' ? draft.timeRemaining : getActiveExamDuration() * 60;`;

code = code.replace(draftRestoreTarget, draftRestoreReplacement);
console.log('3. Replaced draft saving/restoring successfully.');

// 4. Random Exam Generator for Dược Lý 2
const randomTarget = `function generateRandomExam(force = false) {
  if (typeof ALL_EXAM_BANK === 'undefined' || !ALL_EXAM_BANK.length) {
    console.error('ALL_EXAM_BANK not loaded!');
    return;
  }

  if (!force && !isExamSubmitted && Object.keys(userAnswers).length > 0) {
    if (!confirm('Bạn đang làm bài thi dở dang. Bạn có chắc chắn muốn bỏ bài thi hiện tại và tạo đề thi mới chuẩn 44h không?')) {
      return;
    }
  }`;

const randomReplacement = `function generateRandomExam(force = false) {
  const activeBank = getActiveBank();
  if (!activeBank.length) {
    console.error('No question bank loaded for subject:', currentSubject);
    return;
  }

  if (!force && !isExamSubmitted && Object.keys(userAnswers).length > 0) {
    const msg = currentSubject === 'duocly2'
      ? 'Bạn đang làm bài thi dở dang. Bạn có chắc chắn muốn bỏ bài thi hiện tại và tạo đề thi mới chuẩn 32h Dược lý 2 không?'
      : 'Bạn đang làm bài thi dở dang. Bạn có chắc chắn muốn bỏ bài thi hiện tại và tạo đề thi mới chuẩn 44h không?';
    if (!confirm(msg)) {
      return;
    }
  }

  if (currentSubject === 'duocly2') {
    clearExamDraft();
    const covStats = getBankCoverageStats();
    const seenIds = covStats.seenIds || new Set();
    let chosenQuestions = [];
    const chosenStems = new Set();

    DUOCLY2_MATRIX_32H.forEach(rule => {
      const chQuestions = DUOCLY2_EXAM_BANK.filter(q => q.chapter === rule.chapter);
      let pool = [];
      if (prioritizeUnseenQuestions) {
        const unseen = shuffle(chQuestions.filter(q => !seenIds.has(q.id)));
        const seen = shuffle(chQuestions.filter(q => seenIds.has(q.id)));
        pool = [...unseen, ...seen];
      } else {
        pool = shuffle(chQuestions);
      }
      let picked = 0;
      for (const q of pool) {
        if (!chosenStems.has(q.question)) {
          chosenQuestions.push(q);
          chosenStems.add(q.question);
          picked++;
          if (picked >= rule.count) break;
        }
      }
    });

    if (chosenQuestions.length < 60) {
      const remaining = shuffle(DUOCLY2_EXAM_BANK.filter(q => !chosenStems.has(q.question)));
      for (const q of remaining) {
        chosenQuestions.push(q);
        chosenStems.add(q.question);
        if (chosenQuestions.length >= 60) break;
      }
    } else if (chosenQuestions.length > 60) {
      chosenQuestions = chosenQuestions.slice(0, 60);
    }

    chosenQuestions = shuffle(chosenQuestions);

    EXAM_QUESTIONS = chosenQuestions.map((q, idx) => {
      const originalCorrectText = q.options[q.correct];
      const shuffledOptions = shuffle(q.options);
      const newCorrectIdx = shuffledOptions.indexOf(originalCorrectText);
      return {
        id: q.id,
        examNum: idx + 1,
        chapter: q.chapter,
        level: q.level || 'Vận dụng',
        source: q.source || "BYT",
        sourceName: q.sourceName || "Giáo trình Dược lý 2 Bộ Y tế",
        question: q.question,
        options: shuffledOptions,
        correct: newCorrectIdx,
        explanation: q.explanation,
        reference: q.reference
      };
    });

    userAnswers = {};
    flaggedQuestions.clear();
    isExamSubmitted = false;
    isExamStarted = false;
    isExamPaused = false;
    timeRemaining = 60 * 60;
    if (examTimer) { clearInterval(examTimer); examTimer = null; }
    stopSpeaking();
    if (timerWidget) timerWidget.classList.remove('warning', 'paused');
    if (currentTab !== 'exam') switchTab('exam');
    updateTimerDisplay();
    updateTimerButton();
    renderExamQuestion(0);
    saveExamDraft();
    setActiveExamMode('random');
    playChime('click');
    showToast('🎲 Đã tạo Đề thi 60 câu mới chuẩn ma trận 32h Dược lý 2!');
    return;
  }`;

code = code.replace(randomTarget, randomReplacement);
console.log('4. Replaced generateRandomExam successfully.');

// 5. Graded Exam Generator for Dược Lý 2
const gradedTarget = `function generateGradedExam(force = false) {
  if (typeof ALL_EXAM_BANK === 'undefined' || !ALL_EXAM_BANK.length) {
    console.error('ALL_EXAM_BANK not loaded!');
    return;
  }

  if (!force && !isExamSubmitted && Object.keys(userAnswers).length > 0) {
    if (!confirm('Bạn đang làm bài thi dở dang. Bạn có chắc chắn muốn bỏ bài thi hiện tại và tạo đề thi phân hóa năng lực (tỉ lệ 2:4:4) không?')) {
      return;
    }
  }`;

const gradedReplacement = `function generateGradedExam(force = false) {
  const activeBank = getActiveBank();
  if (!activeBank.length) {
    console.error('No question bank loaded for subject:', currentSubject);
    return;
  }

  if (!force && !isExamSubmitted && Object.keys(userAnswers).length > 0) {
    if (!confirm('Bạn đang làm bài thi dở dang. Bạn có chắc chắn muốn bỏ bài thi hiện tại và tạo đề thi phân hóa năng lực (tỉ lệ 2:4:4) không?')) {
      return;
    }
  }

  if (currentSubject === 'duocly2') {
    closeUniversityExamModal();
    clearExamDraft();
    const covStats = getBankCoverageStats();
    const seenIds = covStats.seenIds || new Set();

    const targetLevels = { 'Nhận biết': 12, 'Vận dụng': 24, 'Vận dụng cao': 24 };
    const currentLevels = { 'Nhận biết': 0, 'Vận dụng': 0, 'Vận dụng cao': 0 };
    let chosenQuestions = [];
    const chosenStems = new Set();

    function getPrioritizedPool(pool) {
      if (prioritizeUnseenQuestions) {
        const unseen = pool.filter(q => !seenIds.has(q.id));
        const seen = pool.filter(q => seenIds.has(q.id));
        return [...shuffle(unseen), ...shuffle(seen)];
      }
      return shuffle(pool);
    }

    // Phase 1: Allocate per 32h matrix
    DUOCLY2_MATRIX_32H.forEach(rule => {
      const chQuestions = DUOCLY2_EXAM_BANK.filter(q => q.chapter === rule.chapter);
      const nbPool = getPrioritizedPool(chQuestions.filter(q => q.level === 'Nhận biết'));
      const vdPool = getPrioritizedPool(chQuestions.filter(q => q.level === 'Vận dụng'));
      const vdcPool = getPrioritizedPool(chQuestions.filter(q => q.level === 'Vận dụng cao'));

      let targetNbCh = Math.max(0, Math.round(rule.count * 0.2));
      let targetVdcCh = Math.max(0, Math.round(rule.count * 0.4));
      let targetVdCh = rule.count - targetNbCh - targetVdcCh;

      // Pick VDC
      let pickedVdc = 0;
      for (const q of vdcPool) {
        if (pickedVdc < targetVdcCh && currentLevels['Vận dụng cao'] < targetLevels['Vận dụng cao'] && !chosenStems.has(q.question)) {
          chosenQuestions.push(q);
          chosenStems.add(q.question);
          pickedVdc++;
          currentLevels['Vận dụng cao']++;
        }
      }

      // Pick NB
      let pickedNb = 0;
      for (const q of nbPool) {
        if (pickedNb < targetNbCh && currentLevels['Nhận biết'] < targetLevels['Nhận biết'] && !chosenStems.has(q.question)) {
          chosenQuestions.push(q);
          chosenStems.add(q.question);
          pickedNb++;
          currentLevels['Nhận biết']++;
        }
      }

      // Pick VD
      let pickedVd = 0;
      for (const q of vdPool) {
        if (pickedVd < targetVdCh && currentLevels['Vận dụng'] < targetLevels['Vận dụng'] && !chosenStems.has(q.question)) {
          chosenQuestions.push(q);
          chosenStems.add(q.question);
          pickedVd++;
          currentLevels['Vận dụng']++;
        }
      }

      // Fill remaining for this chapter
      const needed = rule.count - (pickedNb + pickedVd + pickedVdc);
      if (needed > 0) {
        const anyPool = getPrioritizedPool(chQuestions);
        let filled = 0;
        for (const q of anyPool) {
          if (!chosenStems.has(q.question)) {
            chosenQuestions.push(q);
            chosenStems.add(q.question);
            const lvl = q.level || 'Vận dụng';
            if (currentLevels[lvl] !== undefined) currentLevels[lvl]++;
            filled++;
            if (filled >= needed) break;
          }
        }
      }
    });

    // Phase 2: If < 60 questions, fill up to 60
    if (chosenQuestions.length < 60) {
      const remaining = shuffle(DUOCLY2_EXAM_BANK.filter(q => !chosenStems.has(q.question)));
      for (const q of remaining) {
        chosenQuestions.push(q);
        chosenStems.add(q.question);
        if (chosenQuestions.length >= 60) break;
      }
    } else if (chosenQuestions.length > 60) {
      chosenQuestions = chosenQuestions.slice(0, 60);
    }

    chosenQuestions = shuffle(chosenQuestions);

    EXAM_QUESTIONS = chosenQuestions.map((q, idx) => {
      const originalCorrectText = q.options[q.correct];
      const shuffledOptions = shuffle(q.options);
      const newCorrectIdx = shuffledOptions.indexOf(originalCorrectText);
      return {
        id: q.id,
        examNum: idx + 1,
        chapter: q.chapter,
        level: q.level || 'Vận dụng',
        source: q.source || "BYT",
        sourceName: q.sourceName || "Giáo trình Dược lý 2 Bộ Y tế",
        question: q.question,
        options: shuffledOptions,
        correct: newCorrectIdx,
        explanation: q.explanation,
        reference: q.reference
      };
    });

    userAnswers = {};
    flaggedQuestions.clear();
    isExamSubmitted = false;
    isExamStarted = false;
    isExamPaused = false;
    timeRemaining = 60 * 60;
    if (examTimer) { clearInterval(examTimer); examTimer = null; }
    stopSpeaking();
    if (timerWidget) timerWidget.classList.remove('warning', 'paused');
    if (currentTab !== 'exam') switchTab('exam');
    updateTimerDisplay();
    updateTimerButton();
    renderExamQuestion(0);
    saveExamDraft();
    setActiveExamMode('graded');
    playChime('click');
    showToast('🎯 Đã tạo Đề phân hóa 3 cấp độ (Tỉ lệ 2:4:4) 60 câu Dược lý 2!');
    return;
  }`;

code = code.replace(gradedTarget, gradedReplacement);
console.log('5. Replaced generateGradedExam successfully.');

// 6. Standard Exam Generators (generateDuocLy2StandardExam & generateSubjectStandardExam)
const standardTarget = `// ============================================================================
// ĐỀ THI 80 CÂU CHUẨN ĐỀ THI THỰC CHIẾN DLS.PDF & GIÁO TRÌNH BỘ Y TẾ (80 PHÚT)
// ============================================================================
function generateDlsPdfExam(force = false) {`;

const standardReplacement = `// ============================================================================
// ĐỀ THI 60 CÂU CHUẨN GIÁO TRÌNH DƯỢC LÝ 2 BỘ Y TẾ (32 TIẾT • 60 PHÚT)
// ============================================================================
function generateDuocLy2StandardExam(force = false) {
  if (typeof DUOCLY2_EXAM_BANK === 'undefined' || !DUOCLY2_EXAM_BANK.length) {
    console.error('DUOCLY2_EXAM_BANK not loaded!');
    return;
  }

  if (!force && !isExamSubmitted && Object.keys(userAnswers).length > 0) {
    if (!confirm('Bạn đang làm bài thi dở dang. Bạn có chắc chắn muốn bỏ bài thi hiện tại và tạo Đề thi 60 câu chuẩn Giáo trình Dược lý 2 Bộ Y tế không?')) {
      return;
    }
  }

  closeUniversityExamModal();
  clearExamDraft();

  let chosenQuestions = [];
  const chosenStems = new Set();
  const covStats = getBankCoverageStats();
  const seenIds = covStats.seenIds || new Set();

  DUOCLY2_MATRIX_32H.forEach(rule => {
    const chQuestions = DUOCLY2_EXAM_BANK.filter(q => q.chapter === rule.chapter);
    let pool = [];
    if (prioritizeUnseenQuestions) {
      const unseen = shuffle(chQuestions.filter(q => !seenIds.has(q.id)));
      const seen = shuffle(chQuestions.filter(q => seenIds.has(q.id)));
      pool = [...unseen, ...seen];
    } else {
      pool = shuffle(chQuestions);
    }

    let picked = 0;
    for (const q of pool) {
      if (!chosenStems.has(q.question)) {
        chosenQuestions.push(q);
        chosenStems.add(q.question);
        picked++;
        if (picked >= rule.count) break;
      }
    }
  });

  if (chosenQuestions.length < 60) {
    const remaining = shuffle(DUOCLY2_EXAM_BANK.filter(q => !chosenStems.has(q.question)));
    for (const q of remaining) {
      chosenQuestions.push(q);
      chosenStems.add(q.question);
      if (chosenQuestions.length >= 60) break;
    }
  } else if (chosenQuestions.length > 60) {
    chosenQuestions = chosenQuestions.slice(0, 60);
  }

  chosenQuestions = shuffle(chosenQuestions);

  EXAM_QUESTIONS = chosenQuestions.map((q, idx) => {
    const originalCorrectText = q.options[q.correct];
    const shuffledOptions = shuffle(q.options);
    const newCorrectIdx = shuffledOptions.indexOf(originalCorrectText);
    return {
      id: q.id,
      examNum: idx + 1,
      chapter: q.chapter,
      level: q.level || 'Vận dụng',
      source: q.source || "BYT",
      sourceName: q.sourceName || "Giáo trình Dược lý 2 Bộ Y tế",
      question: q.question,
      options: shuffledOptions,
      correct: newCorrectIdx,
      explanation: q.explanation,
      reference: q.reference
    };
  });

  userAnswers = {};
  flaggedQuestions.clear();
  isExamSubmitted = false;
  isExamStarted = false;
  isExamPaused = false;
  timeRemaining = 60 * 60;

  if (examTimer) {
    clearInterval(examTimer);
    examTimer = null;
  }
  stopSpeaking();

  if (timerWidget) timerWidget.classList.remove('warning', 'paused');
  if (currentTab !== 'exam') switchTab('exam');
  updateTimerDisplay();
  updateTimerButton();
  renderExamQuestion(0);
  updatePalette();
  saveExamDraft();
  setActiveExamMode('standard');
  playChime('click');
  showToast('📝 Đã tạo Đề chuẩn Giáo trình Dược lý 2 Bộ Y tế (60 câu • 60 phút)!');
}

function generateSubjectStandardExam(force = false) {
  if (currentSubject === 'duocly2') {
    generateDuocLy2StandardExam(force);
  } else {
    generateDlsPdfExam(force);
  }
}

// ============================================================================
// ĐỀ THI 80 CÂU CHUẨN ĐỀ THI THỰC CHIẾN DLS.PDF & GIÁO TRÌNH BỘ Y TẾ (80 PHÚT)
// ============================================================================
function generateDlsPdfExam(force = false) {`;

code = code.replace(standardTarget, standardReplacement);
console.log('6. Added generateDuocLy2StandardExam and generateSubjectStandardExam successfully.');

// 7. Unseen Exam Generator for Dược Lý 2
const unseenTarget = `function generateUnseenExam(force = false) {
  if (typeof ALL_EXAM_BANK === 'undefined' || !ALL_EXAM_BANK.length) {
    console.error('ALL_EXAM_BANK not loaded!');
    return;
  }

  if (!force && !isExamSubmitted && Object.keys(userAnswers).length > 0) {
    if (!confirm('Bạn đang làm bài thi dở dang. Bạn có chắc chắn muốn bỏ bài thi hiện tại và tạo đề thi 100% câu chưa làm không?')) {
      return;
    }
  }`;

const unseenReplacement = `function generateUnseenExam(force = false) {
  const activeBank = getActiveBank();
  if (!activeBank.length) {
    console.error('No question bank loaded for subject:', currentSubject);
    return;
  }

  if (!force && !isExamSubmitted && Object.keys(userAnswers).length > 0) {
    if (!confirm('Bạn đang làm bài thi dở dang. Bạn có chắc chắn muốn bỏ bài thi hiện tại và tạo đề thi 100% câu chưa làm không?')) {
      return;
    }
  }

  if (currentSubject === 'duocly2') {
    closeUniversityExamModal();
    clearExamDraft();
    const covStats = getBankCoverageStats();
    const seenIds = covStats.seenIds || new Set();
    const unseenPool = DUOCLY2_EXAM_BANK.filter(q => !seenIds.has(q.id));

    if (unseenPool.length === 0) {
      alert('🎉 Tuyệt vời! Bạn đã hoàn thành 100% toàn bộ 507 câu hỏi trong ngân hàng đề Dược Lý 2!\\n\\nHiện tại không còn câu nào chưa làm. Bạn có thể làm lại đề ngẫu nhiên hoặc luyện tập theo chuyên đề.');
      return;
    }

    const targetTotal = Math.min(60, unseenPool.length);
    let chosenQuestions = [];
    const chosenStems = new Set();

    DUOCLY2_MATRIX_32H.forEach(rule => {
      const chUnseen = shuffle(unseenPool.filter(q => q.chapter === rule.chapter && !chosenStems.has(q.question)));
      const pickCount = Math.min(rule.count, chUnseen.length);
      for (let i = 0; i < pickCount; i++) {
        if (chosenQuestions.length < targetTotal) {
          chosenQuestions.push(chUnseen[i]);
          chosenStems.add(chUnseen[i].question);
        }
      }
    });

    if (chosenQuestions.length < targetTotal) {
      const remAny = shuffle(unseenPool.filter(q => !chosenStems.has(q.question)));
      for (const q of remAny) {
        chosenQuestions.push(q);
        chosenStems.add(q.question);
        if (chosenQuestions.length >= targetTotal) break;
      }
    }

    // If still less than 60 and force, fill from rest of bank
    if (chosenQuestions.length < 60) {
      const remaining = shuffle(DUOCLY2_EXAM_BANK.filter(q => !chosenStems.has(q.question)));
      for (const q of remaining) {
        chosenQuestions.push(q);
        chosenStems.add(q.question);
        if (chosenQuestions.length >= 60) break;
      }
    }

    chosenQuestions = shuffle(chosenQuestions);

    EXAM_QUESTIONS = chosenQuestions.map((q, idx) => {
      const originalCorrectText = q.options[q.correct];
      const shuffledOptions = shuffle(q.options);
      const newCorrectIdx = shuffledOptions.indexOf(originalCorrectText);
      return {
        id: q.id,
        examNum: idx + 1,
        chapter: q.chapter,
        level: q.level || 'Vận dụng',
        source: q.source || "BYT",
        sourceName: q.sourceName || "Giáo trình Dược lý 2 Bộ Y tế",
        question: q.question,
        options: shuffledOptions,
        correct: newCorrectIdx,
        explanation: q.explanation,
        reference: q.reference
      };
    });

    userAnswers = {};
    flaggedQuestions.clear();
    isExamSubmitted = false;
    isExamStarted = false;
    isExamPaused = false;
    timeRemaining = 60 * 60;

    if (examTimer) {
      clearInterval(examTimer);
      examTimer = null;
    }
    stopSpeaking();

    if (timerWidget) timerWidget.classList.remove('warning', 'paused');
    if (currentTab !== 'exam') switchTab('exam');
    updateTimerDisplay();
    updateTimerButton();
    renderExamQuestion(0);
    updatePalette();
    saveExamDraft();
    setActiveExamMode('unseen');
    playChime('click');
    showToast('✨ Đã tạo Đề 60 câu hoàn toàn chưa làm (Dược lý 2)!');
    return;
  }`;

code = code.replace(unseenTarget, unseenReplacement);
console.log('7. Replaced generateUnseenExam successfully.');

// 8. Palette header title update
const paletteTarget = `  const totalAnswered = Object.keys(userAnswers).length;
  answeredCountEl.textContent = \`\${totalAnswered} / \${EXAM_QUESTIONS.length}\`;
  flaggedCountEl.textContent = flaggedQuestions.size;`;

const paletteReplacement = `  const totalAnswered = Object.keys(userAnswers).length;
  answeredCountEl.textContent = \`\${totalAnswered} / \${EXAM_QUESTIONS.length}\`;
  flaggedCountEl.textContent = flaggedQuestions.size;
  const paletteTitle = document.getElementById('palette-title');
  if (paletteTitle) {
    paletteTitle.textContent = \`Bảng Câu Hỏi (\${EXAM_QUESTIONS.length || getActiveQuestionCount()} Câu)\`;
  }`;

code = code.replace(paletteTarget, paletteReplacement);

// 9. Topic study mode for Dược Lý 2 (TOPIC_ORDER_DUOCLY2 & TOPIC_CHIP_LABELS_DUOCLY2)
const topicDefsTarget = `const TOPIC_ORDER_44H = [
  "Tất cả",
  "Đại cương DLS & Thông tin thuốc",
  "Dược động học & Suy gan, thận",
  "Tương tác thuốc & Tương kỵ",
  "ADR, Dị ứng & Sốc phản vệ",
  "Xét nghiệm lâm sàng & Nhận định KQ",
  "Sử dụng thuốc ở Trẻ em",
  "Sử dụng thuốc ở Người cao tuổi",
  "Sử dụng thuốc ở Phụ nữ có thai & CCB",
  "Kháng sinh & Kháng sinh dự phòng",
  "Glucocorticoid & Phác đồ điều trị",
  "Thuốc giảm đau",
  "Vitamin và chất khoáng",
  "Điều trị Tăng huyết áp & Cấp cứu THA",
  "Tiêu chảy cấp ở trẻ em",
  "Hen phế quản & COPD",
  "Loãng xương, Tránh thai & Chuyển hóa"
];`;

const topicDefsReplacement = `const TOPIC_ORDER_DUOCLY2 = [
  "Tất cả",
  "Thuốc trợ tim",
  "Thuốc điều trị THA",
  "Thuốc chữa CĐTN",
  "Thuốc chống loạn nhịp",
  "Thuốc lợi niệu",
  "Thuốc điều trị DDTT",
  "Thuốc chống giun sán, amibe",
  "Thuốc ĐC RLHH",
  "Thuốc kháng H1",
  "Thuốc hạ lipid máu",
  "Thuốc chống sốt rét",
  "KTGHP",
  "Hormon",
  "Thuốc hạ glucose máu",
  "Thuốc/QT đông cầm máu",
  "Vitamin",
  "Thuốc chữa thiếu máu",
  "Thuốc kháng virus",
  "Thuốc chống ung thư",
  "Thuốc/trong điều trị ngộ độc"
];

const TOPIC_CHIP_LABELS_DUOCLY2 = {
  "Tất cả": "Toàn Bộ 20 Bài (507 câu)",
  "Thuốc trợ tim": "Bài 1. Thuốc trợ tim (2h)",
  "Thuốc điều trị THA": "Bài 2. Điều trị THA (2h)",
  "Thuốc chữa CĐTN": "Bài 3. Chữa CĐTN (1h)",
  "Thuốc chống loạn nhịp": "Bài 4. Loạn nhịp (1h)",
  "Thuốc lợi niệu": "Bài 5. Lợi niệu (2h)",
  "Thuốc điều trị DDTT": "Bài 6. Viêm loét DDTT (2h)",
  "Thuốc chống giun sán, amibe": "Bài 7. Giun sán & Amibe (2h)",
  "Thuốc ĐC RLHH": "Bài 8. Rối loạn hô hấp (1h)",
  "Thuốc kháng H1": "Bài 9. Kháng H1 (1h)",
  "Thuốc hạ lipid máu": "Bài 10. Hạ lipid máu (2h)",
  "Thuốc chống sốt rét": "Bài 11. Sốt rét (2h)",
  "KTGHP": "Bài 12. KTGHP (1h)",
  "Hormon": "Bài 13. Hormon (3h)",
  "Thuốc hạ glucose máu": "Bài 14. Hạ glucose máu (2h)",
  "Thuốc/QT đông cầm máu": "Bài 15. Đông cầm máu (2h)",
  "Vitamin": "Bài 16. Vitamin (0h)",
  "Thuốc chữa thiếu máu": "Bài 17. Chữa thiếu máu (2h)",
  "Thuốc kháng virus": "Bài 18. Kháng virus (2h)",
  "Thuốc chống ung thư": "Bài 19. Chống ung thư (1h)",
  "Thuốc/trong điều trị ngộ độc": "Bài 20. ĐT ngộ độc (1h)"
};

const TOPIC_ORDER_44H = [
  "Tất cả",
  "Đại cương DLS & Thông tin thuốc",
  "Dược động học & Suy gan, thận",
  "Tương tác thuốc & Tương kỵ",
  "ADR, Dị ứng & Sốc phản vệ",
  "Xét nghiệm lâm sàng & Nhận định KQ",
  "Sử dụng thuốc ở Trẻ em",
  "Sử dụng thuốc ở Người cao tuổi",
  "Sử dụng thuốc ở Phụ nữ có thai & CCB",
  "Kháng sinh & Kháng sinh dự phòng",
  "Glucocorticoid & Phác đồ điều trị",
  "Thuốc giảm đau",
  "Vitamin và chất khoáng",
  "Điều trị Tăng huyết áp & Cấp cứu THA",
  "Tiêu chảy cấp ở trẻ em",
  "Hen phế quản & COPD",
  "Loãng xương, Tránh thai & Chuyển hóa"
];`;

code = code.replace(topicDefsTarget, topicDefsReplacement);

// 10. renderTopicStudyView adaptation
const topicRenderViewTarget = `function renderTopicStudyView() {
  const container = document.getElementById('view-topic');
  if (!container) return;

  const chapters = TOPIC_ORDER_44H;
  const stats = getTopicChapterStats();
  const filteredQuestions = getFilteredTopicQuestions();
  const visibleQuestions = filteredQuestions.slice(0, topicVisibleLimit);
  const isOrderShuffled = !!(topicCustomOrder[activeTopicFilter] && topicCustomOrder[activeTopicFilter].length);

  // 1. HORIZONTAL SWIPEABLE CHAPTER RIBBON
  let chipsHtml = \`<div class="topic-ribbon-container">
    <div class="topic-selector-bar">\`;
  chapters.forEach(top => {
    const count = top === 'Tất cả' ? ALL_EXAM_BANK.length : ALL_EXAM_BANK.filter(q => q.chapter === top).length;
    const label = TOPIC_CHIP_LABELS_44H[top] || top;`;

const topicRenderViewReplacement = `function renderTopicStudyView() {
  const container = document.getElementById('view-topic');
  if (!container) return;

  const chapters = currentSubject === 'duocly2' ? TOPIC_ORDER_DUOCLY2 : TOPIC_ORDER_44H;
  const chipLabels = currentSubject === 'duocly2' ? TOPIC_CHIP_LABELS_DUOCLY2 : TOPIC_CHIP_LABELS_44H;
  const activeBank = getActiveBank();
  const stats = getTopicChapterStats();
  const filteredQuestions = getFilteredTopicQuestions();
  const visibleQuestions = filteredQuestions.slice(0, topicVisibleLimit);
  const isOrderShuffled = !!(topicCustomOrder[activeTopicFilter] && topicCustomOrder[activeTopicFilter].length);

  // 1. HORIZONTAL SWIPEABLE CHAPTER RIBBON
  let chipsHtml = \`<div class="topic-ribbon-container">
    <div class="topic-selector-bar">\`;
  chapters.forEach(top => {
    const count = top === 'Tất cả' ? activeBank.length : activeBank.filter(q => q.chapter === top).length;
    const label = chipLabels[top] || top;`;

code = code.replace(topicRenderViewTarget, topicRenderViewReplacement);

// BasePool in renderTopicStudyView
const basePoolTarget = `  const basePoolForCount = activeTopicFilter === 'Tất cả'
    ? ALL_EXAM_BANK
    : ALL_EXAM_BANK.filter(q => q.chapter === activeTopicFilter);`;

const basePoolReplacement = `  const activeBankForStudy = getActiveBank();
  const basePoolForCount = activeTopicFilter === 'Tất cả'
    ? activeBankForStudy
    : activeBankForStudy.filter(q => q.chapter === activeTopicFilter);`;

code = code.replace(basePoolTarget, basePoolReplacement);

// Topic stats and filters helpers
const topicStatsTarget = `function getTopicChapterStats() {
  let baseList = activeTopicFilter === 'Tất cả'
    ? ALL_EXAM_BANK
    : ALL_EXAM_BANK.filter(q => q.chapter === activeTopicFilter);`;

const topicStatsReplacement = `function getTopicChapterStats() {
  const activeBank = getActiveBank();
  let baseList = activeTopicFilter === 'Tất cả'
    ? activeBank
    : activeBank.filter(q => q.chapter === activeTopicFilter);`;

code = code.replace(topicStatsTarget, topicStatsReplacement);

const topicFilteredTarget = `function getFilteredTopicQuestions() {
  let list = activeTopicFilter === 'Tất cả'
    ? ALL_EXAM_BANK
    : ALL_EXAM_BANK.filter(q => q.chapter === activeTopicFilter);`;

const topicFilteredReplacement = `function getFilteredTopicQuestions() {
  const activeBank = getActiveBank();
  let list = activeTopicFilter === 'Tất cả'
    ? activeBank
    : activeBank.filter(q => q.chapter === activeTopicFilter);`;

code = code.replace(topicFilteredTarget, topicFilteredReplacement);
console.log('8. Replaced Topic Study View & filters successfully.');

// 11. Flashcards View adaptation
const fcTarget = `function getFilteredFlashcards() {
  let list = FLASHCARD_DATA;`;

const fcReplacement = `function getFilteredFlashcards() {
  let list = getActiveFlashcards();`;

code = code.replace(fcTarget, fcReplacement);

const fcRenderViewTarget = `function renderFlashcardView() {
  const container = document.getElementById('view-flashcards');
  if (!container) return;

  const topics = ["Tất cả", ...new Set(FLASHCARD_DATA.map(f => f.topic))];
  const list = getFilteredFlashcards();
  const masteredCount = flashcardMastered.size;
  const totalCount = FLASHCARD_DATA.length;
  const masteredPct = Math.round((masteredCount / totalCount) * 100);`;

const fcRenderViewReplacement = `function renderFlashcardView() {
  const container = document.getElementById('view-flashcards');
  if (!container) return;

  const activeCards = getActiveFlashcards();
  const topics = ["Tất cả", ...new Set(activeCards.map(f => f.topic))];
  const list = getFilteredFlashcards();
  const masteredCount = flashcardMastered.size;
  const totalCount = activeCards.length;
  const masteredPct = totalCount > 0 ? Math.round((masteredCount / totalCount) * 100) : 0;`;

code = code.replace(fcRenderViewTarget, fcRenderViewReplacement);

const fcRibbonCountTarget = `topics.forEach(top => {
    const count = top === 'Tất cả' ? FLASHCARD_DATA.length : FLASHCARD_DATA.filter(f => f.topic === top).length;`;

const fcRibbonCountReplacement = `topics.forEach(top => {
    const count = top === 'Tất cả' ? activeCards.length : activeCards.filter(f => f.topic === top).length;`;

code = code.replace(fcRibbonCountTarget, fcRibbonCountReplacement);
console.log('9. Replaced Flashcard view successfully.');

// 12. openMatrixModal adaptation
const matrixModalTarget = `function openMatrixModal() {
  const modal = document.getElementById('matrix-modal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}`;

const matrixModalReplacement = `function openMatrixModal() {
  const modal = document.getElementById('matrix-modal');
  if (!modal) return;

  const titleEl = modal.querySelector('.sync-modal-title');
  const subtitleEl = modal.querySelector('.sync-modal-subtitle');
  const tableWrap = modal.querySelector('.matrix-table-wrap');

  if (currentSubject === 'duocly2') {
    if (titleEl) titleEl.textContent = 'Ma Trận Đề Thi Chuẩn Dược Lý 2 (32 Tiết - 60 Câu)';
    if (subtitleEl) subtitleEl.textContent = 'Khung 20 bài giảng chính khóa theo Giáo trình Dược lý học Tập 2 Bộ Y tế (PGS.TS. Mai Tất Tố)';
    if (tableWrap) {
      tableWrap.innerHTML = \`
        <table class="matrix-table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên Bài Giảng Theo Khung 32h</th>
              <th>Số Tiết</th>
              <th>Số Câu Trong Đề</th>
              <th>Tỷ Lệ</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Bài 1</td><td>Thuốc trợ tim</td><td>2h</td><td><strong>4 câu</strong></td><td>6.7%</td></tr>
            <tr><td>Bài 2</td><td>Thuốc điều trị THA</td><td>2h</td><td><strong>4 câu</strong></td><td>6.7%</td></tr>
            <tr><td>Bài 3</td><td>Thuốc chữa CĐTN</td><td>1h</td><td><strong>2 câu</strong></td><td>3.3%</td></tr>
            <tr><td>Bài 4</td><td>Thuốc chống loạn nhịp</td><td>1h</td><td><strong>2 câu</strong></td><td>3.3%</td></tr>
            <tr><td>Bài 5</td><td>Thuốc lợi niệu</td><td>2h</td><td><strong>4 câu</strong></td><td>6.7%</td></tr>
            <tr><td>Bài 6</td><td>Thuốc điều trị DDTT</td><td>2h</td><td><strong>4 câu</strong></td><td>6.7%</td></tr>
            <tr><td>Bài 7</td><td>Thuốc chống giun sán, amibe</td><td>2h</td><td><strong>4 câu</strong></td><td>6.7%</td></tr>
            <tr><td>Bài 8</td><td>Thuốc ĐC RLHH</td><td>1h</td><td><strong>2 câu</strong></td><td>3.3%</td></tr>
            <tr><td>Bài 9</td><td>Thuốc kháng H1</td><td>1h</td><td><strong>2 câu</strong></td><td>3.3%</td></tr>
            <tr><td>Bài 10</td><td>Thuốc hạ lipid máu</td><td>2h</td><td><strong>4 câu</strong></td><td>6.7%</td></tr>
            <tr><td>Bài 11</td><td>Thuốc chống sốt rét</td><td>2h</td><td><strong>4 câu</strong></td><td>6.7%</td></tr>
            <tr><td>Bài 12</td><td>KTGHP</td><td>1h</td><td><strong>2 câu</strong></td><td>3.3%</td></tr>
            <tr><td>Bài 13</td><td>Hormon (4)</td><td>3h</td><td><strong>6 câu</strong></td><td>10.0%</td></tr>
            <tr><td>Bài 14</td><td>Thuốc hạ glucose máu</td><td>2h</td><td><strong>4 câu</strong></td><td>6.7%</td></tr>
            <tr><td>Bài 15</td><td>Thuốc/QT đông cầm máu</td><td>2h</td><td><strong>4 câu</strong></td><td>6.7%</td></tr>
            <tr><td>Bài 16</td><td>Vitamin</td><td>0h</td><td><strong>2 câu</strong></td><td>3.3%</td></tr>
            <tr><td>Bài 17</td><td>Thuốc chữa thiếu máu</td><td>2h</td><td><strong>3 câu</strong></td><td>5.0%</td></tr>
            <tr><td>Bài 18</td><td>Thuốc kháng virus</td><td>2h</td><td><strong>4 câu</strong></td><td>6.7%</td></tr>
            <tr><td>Bài 19</td><td>Thuốc chống ung thư</td><td>1h</td><td><strong>2 câu</strong></td><td>3.3%</td></tr>
            <tr><td>Bài 20</td><td>Thuốc/trong điều trị ngộ độc</td><td>1h</td><td><strong>3 câu</strong></td><td>5.0%</td></tr>
          </tbody>
          <tfoot>
            <tr style="background: var(--primary-light); font-weight: 700;">
              <td colspan="2" style="text-align: right; padding-right: 1rem;">TỔNG CỘNG:</td>
              <td>32 TIẾT</td>
              <td>60 CÂU (60 PHÚT)</td>
              <td>100%</td>
            </tr>
          </tfoot>
        </table>
      \`;
    }
  } else {
    if (titleEl) titleEl.textContent = 'Ma Trận Đề Thi Chuẩn Dược Lâm Sàng (44h)';
    if (subtitleEl) subtitleEl.textContent = 'Đối chiếu 100% thời lượng giảng dạy chính khóa và cấu trúc 80 câu';
    if (tableWrap) {
      tableWrap.innerHTML = \`
        <table class="matrix-table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên Bài Giảng Theo Khung 44h</th>
              <th>Số Tiết</th>
              <th>Số Câu Trong Đề</th>
              <th>Tỷ Lệ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bài 1</td>
              <td>Đại cương DLS; Nội dung và cách tiếp cận DLS</td>
              <td>4h</td>
              <td rowspan="2" class="merged-cell"><strong>10 câu</strong><br><small style="color: var(--primary);">(Gộp Bài 1 &amp; 5)</small></td>
              <td rowspan="2" class="merged-cell">12.5%</td>
            </tr>
            <tr>
              <td>Bài 5</td>
              <td>Thông tin thuốc</td>
              <td>2h</td>
            </tr>
            <tr><td>Bài 2</td><td>Biến đổi DĐH và SD thuốc ở BN suy gan, suy thận</td><td>2h</td><td><strong>4 câu</strong></td><td>5.0%</td></tr>
            <tr><td>Bài 3</td><td>Tương tác thuốc &amp; Tương kỵ lâm sàng</td><td>4h</td><td><strong>7 câu</strong></td><td>8.75%</td></tr>
            <tr><td>Bài 4</td><td>ADR và dị ứng thuốc</td><td>4h</td><td><strong>7 câu</strong></td><td>8.75%</td></tr>
            <tr><td>Bài 6</td><td>XN LS và nhận định kết quả</td><td>4h</td><td><strong>7 câu</strong></td><td>8.75%</td></tr>
            <tr><td>Bài 7</td><td>Sử dụng thuốc ở trẻ em</td><td>2h</td><td><strong>4 câu</strong></td><td>5.0%</td></tr>
            <tr><td>Bài 8</td><td>Sử dụng thuốc ở người cao tuổi</td><td>1h</td><td><strong>2 câu</strong></td><td>2.5%</td></tr>
            <tr><td>Bài 9</td><td>Sử dụng thuốc ở PNCT và CCB</td><td>3h</td><td><strong>5 câu</strong></td><td>6.25%</td></tr>
            <tr class="row-muted"><td>Bài 10</td><td>Nguyên tắc SD thuốc phòng và trị bệnh</td><td>2h</td><td><em>(Lồng ghép trong Bài 11-16)</em></td><td>--</td></tr>
            <tr><td>Bài 11</td><td>Kháng sinh &amp; Kháng sinh dự phòng</td><td>4h</td><td><strong>8 câu</strong></td><td>10.0%</td></tr>
            <tr><td>Bài 12</td><td>Glucocorticoid và phác đồ điều trị</td><td>4h</td><td><strong>7 câu</strong></td><td>8.75%</td></tr>
            <tr><td>Bài 13</td><td>Thuốc giảm đau: Paracetamol, NSAIDs, Opiat</td><td>2h</td><td><strong>4 câu</strong></td><td>5.0%</td></tr>
            <tr><td>Bài 14</td><td>Vitamin và chất khoáng</td><td>2h</td><td><strong>4 câu</strong></td><td>5.0%</td></tr>
            <tr><td>Bài 15</td><td>Điều trị Tăng huyết áp &amp; Cấp cứu THA</td><td>2h</td><td><strong>4 câu</strong></td><td>5.0%</td></tr>
            <tr><td>Bài 16</td><td>Tiêu chảy cấp ở trẻ em</td><td>4h</td><td><strong>7 câu</strong></td><td>8.75%</td></tr>
          </tbody>
          <tfoot>
            <tr style="background: var(--primary-light); font-weight: 700;">
              <td colspan="2" style="text-align: right; padding-right: 1rem;">TỔNG CỘNG:</td>
              <td>44 TIẾT</td>
              <td>80 CÂU (80 PHÚT)</td>
              <td>100%</td>
            </tr>
          </tfoot>
        </table>
      \`;
    }
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}`;

code = code.replace(matrixModalTarget, matrixModalReplacement);

// 13. getBankCoverageStats & openCoverageModal
const covStatsTarget = `function getBankCoverageStats() {
  const history = getExamHistory();
  const seenIds = new Set();
  const correctIds = new Set();
  const wrongIds = new Set();

  // 1. From exam history
  history.forEach(exam => {
    (exam.questions || []).forEach(q => {
      if (q && q.id) {
        seenIds.add(q.id);
        if (q.isCorrect) {
          correctIds.add(q.id);
        } else if (q.userAnswer !== null && q.userAnswer !== undefined) {
          wrongIds.add(q.id);
        }
      }
    });
  });

  // 2. From topic study mode
  if (typeof studyAnswers === 'object') {
    Object.keys(studyAnswers).forEach(idStr => {
      const qId = parseInt(idStr, 10);
      const q = (typeof ALL_EXAM_BANK !== 'undefined') ? ALL_EXAM_BANK.find(x => x.id === qId) : null;
      if (q) {
        seenIds.add(qId);
        const { isAnswered, isCorrect } = resolveStudyAnswer(q);
        if (isAnswered) {
          if (isCorrect) correctIds.add(qId);
          else wrongIds.add(qId);
        }
      }
    });
  }

  const totalBank = (typeof ALL_EXAM_BANK !== 'undefined') ? ALL_EXAM_BANK.length : 1222;
  const seenCount = seenIds.size;
  const unseenCount = Math.max(0, totalBank - seenCount);
  const coveragePct = totalBank > 0 ? ((seenCount / totalBank) * 100).toFixed(1) : '0';

  // Per chapter breakdown
  const chapterBreakdown = {};
  if (typeof ALL_EXAM_BANK !== 'undefined') {
    ALL_EXAM_BANK.forEach(q => {
      if (!chapterBreakdown[q.chapter]) {
        chapterBreakdown[q.chapter] = { total: 0, seen: 0, correct: 0, wrong: 0 };
      }
      chapterBreakdown[q.chapter].total++;
      if (seenIds.has(q.id)) {
        chapterBreakdown[q.chapter].seen++;
        if (correctIds.has(q.id)) chapterBreakdown[q.chapter].correct++;
        else if (wrongIds.has(q.id)) chapterBreakdown[q.chapter].wrong++;
      }
    });
  }`;

const covStatsReplacement = `function getBankCoverageStats() {
  const history = getExamHistory();
  const activeBank = getActiveBank();
  const activeBankIds = new Set(activeBank.map(q => q.id));

  const seenIds = new Set();
  const correctIds = new Set();
  const wrongIds = new Set();

  // 1. From exam history
  history.forEach(exam => {
    (exam.questions || []).forEach(q => {
      if (q && q.id && activeBankIds.has(q.id)) {
        seenIds.add(q.id);
        if (q.isCorrect) {
          correctIds.add(q.id);
        } else if (q.userAnswer !== null && q.userAnswer !== undefined) {
          wrongIds.add(q.id);
        }
      }
    });
  });

  // 2. From topic study mode
  if (typeof studyAnswers === 'object') {
    Object.keys(studyAnswers).forEach(idStr => {
      const qId = parseInt(idStr, 10);
      if (activeBankIds.has(qId)) {
        const q = activeBank.find(x => x.id === qId);
        if (q) {
          seenIds.add(qId);
          const { isAnswered, isCorrect } = resolveStudyAnswer(q);
          if (isAnswered) {
            if (isCorrect) correctIds.add(qId);
            else wrongIds.add(qId);
          }
        }
      }
    });
  }

  const totalBank = activeBank.length;
  const seenCount = seenIds.size;
  const unseenCount = Math.max(0, totalBank - seenCount);
  const coveragePct = totalBank > 0 ? ((seenCount / totalBank) * 100).toFixed(1) : '0';

  // Per chapter breakdown
  const chapterBreakdown = {};
  activeBank.forEach(q => {
    if (!chapterBreakdown[q.chapter]) {
      chapterBreakdown[q.chapter] = { total: 0, seen: 0, correct: 0, wrong: 0 };
    }
    chapterBreakdown[q.chapter].total++;
    if (seenIds.has(q.id)) {
      chapterBreakdown[q.chapter].seen++;
      if (correctIds.has(q.id)) chapterBreakdown[q.chapter].correct++;
      else if (wrongIds.has(q.id)) chapterBreakdown[q.chapter].wrong++;
    }
  });`;

code = code.replace(covStatsTarget, covStatsReplacement);

// Coverage modal table headers and matrix looping
const covModalMatrixTarget = `  // Render rows for official 14 chapters
  EXAM_MATRIX_44H.forEach(rule => {`;

const covModalMatrixReplacement = `  const activeMatrix = getActiveMatrix();
  activeMatrix.forEach(rule => {`;

code = code.replace(covModalMatrixTarget, covModalMatrixReplacement);

const covModalBtnTarget = `          💡 Bạn có thể chọn thi ngay đề 100% câu chưa làm để quét sạch ngân hàng đề!
        </div>
        <button class="btn btn-primary" onclick="generateUnseenExam(true); closeCoverageModal();" style="padding: 0.45rem 1rem; font-size: 0.82rem;">
          ✨ Thi đề 80 câu chưa gặp ngay
        </button>`;

const covModalBtnReplacement = `          💡 Bạn có thể chọn thi ngay đề 100% câu chưa làm để quét sạch ngân hàng đề!
        </div>
        <button class="btn btn-primary" onclick="generateUnseenExam(true); closeCoverageModal();" style="padding: 0.45rem 1rem; font-size: 0.82rem;">
          ✨ Thi đề \${getActiveQuestionCount()} câu chưa gặp ngay
        </button>`;

code = code.replace(covModalBtnTarget, covModalBtnReplacement);
console.log('10. Replaced coverage tracker & modal successfully.');

// 14. History Card Subject Indicator
const histCardTarget = `            <span style="background: var(--surface-alt); padding: 0.2rem 0.5rem; border-radius: var(--radius-sm); font-size: 0.85rem; font-weight: 700;">
              Bài thi #\${examNum}
            </span>`;

const histCardReplacement = `            <span style="background: var(--surface-alt); padding: 0.2rem 0.5rem; border-radius: var(--radius-sm); font-size: 0.85rem; font-weight: 700;">
              Bài thi #\${examNum} \${item.subject === 'duocly2' || item.totalQuestions === 60 ? '• 💊 Dược Lý 2' : '• 🩺 Dược Lâm Sàng'}
            </span>`;

code = code.replace(histCardTarget, histCardReplacement);

// 15. DOMContentLoaded & Window Exports
const domTarget = `window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('dls_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  themeToggleBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

  try {
    const savedTab = localStorage.getItem('dls_active_tab');
    if (savedTab) currentTab = savedTab;
    const savedTopic = localStorage.getItem('dls_active_topic');
    if (savedTopic) activeTopicFilter = savedTopic;
  } catch (e) { }

  initTTS();
  initDesktopScratchpad();
  loadStudyAnswers();
  loadTopicCustomOrder();
  loadFlashcardState();
  const restored = restoreExamDraft();
  if (!restored) {
    generateDlsPdfExam(true);
  }
  setActiveExamMode(currentExamMode || 'dls-pdf');`;

const domReplacement = `window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('dls_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  themeToggleBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

  const savedSubject = localStorage.getItem('dls_current_subject');
  if (savedSubject) {
    currentSubject = savedSubject;
  } else {
    currentSubject = 'duocly2'; // Default to Dược Lý 2
    try { localStorage.setItem('dls_current_subject', 'duocly2'); } catch(e){}
  }
  applySubjectUI();

  try {
    const savedTab = localStorage.getItem('dls_active_tab');
    if (savedTab) currentTab = savedTab;
    const savedTopic = localStorage.getItem('dls_active_topic');
    if (savedTopic) activeTopicFilter = savedTopic;
  } catch (e) { }

  initTTS();
  initDesktopScratchpad();
  loadStudyAnswers();
  loadTopicCustomOrder();
  loadFlashcardState();
  const restored = restoreExamDraft();
  if (!restored) {
    generateSubjectStandardExam(true);
  }
  setActiveExamMode(currentExamMode || (currentSubject === 'duocly2' ? 'standard' : 'dls-pdf'));`;

code = code.replace(domTarget, domReplacement);

const exportTarget = `window.generateDlsPdfExam = generateDlsPdfExam;
window.regenerateCurrentExam = regenerateCurrentExam;
window.showView = showView;
window.toggleExplanationBox = toggleExplanationBox;`;

const exportReplacement = `window.switchSubject = switchSubject;
window.generateSubjectStandardExam = generateSubjectStandardExam;
window.generateDuocLy2StandardExam = generateDuocLy2StandardExam;
window.generateDlsPdfExam = generateSubjectStandardExam;
window.generateUnseenExam = generateUnseenExam;
window.generateGradedExam = generateGradedExam;
window.generateRandomExam = generateRandomExam;
window.regenerateCurrentExam = regenerateCurrentExam;
window.showView = showView;
window.toggleExplanationBox = toggleExplanationBox;`;

code = code.replace(exportTarget, exportReplacement);
console.log('11. Replaced DOMContentLoaded & exports successfully.');

fs.writeFileSync(appPath, code, 'utf8');
console.log('Successfully written all changes to app.js!');
