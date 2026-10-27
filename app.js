// Global State
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
let topicSourceFilter = 'all'; // 'all' | 'HUP' | 'UMP' | 'HMU' | 'BYT'
let studyAnswers = {};

// Vietnamese Text-To-Speech (TTS) State
let isSpeaking = false;
let currentSpeechBtn = null;
let cachedViVoice = null;

// Exam History & Draft State
const STORAGE_HISTORY_KEY = 'dls_exam_history_v1';
const STORAGE_ACTIVE_DRAFT_KEY = 'dls_active_exam_draft_v1';
let currentReviewExam = null; // null for list of exams, object for single exam review
let reviewFilter = 'all'; // 'all' | 'wrong' | 'correct' | 'skipped' | 'flagged'
let reviewSearchQuery = '';
let lastSubmittedExamId = null;
let prioritizeUnseenQuestions = localStorage.getItem('dls_prioritize_unseen') !== '0';
function togglePrioritizeUnseen(val) {
  prioritizeUnseenQuestions = !!val;
  try {
    localStorage.setItem('dls_prioritize_unseen', prioritizeUnseenQuestions ? '1' : '0');
  } catch (e) {}
}

// Draft persistence functions
function saveExamDraft() {
  try {
    if (!EXAM_QUESTIONS || !EXAM_QUESTIONS.length) return;
    const draft = {
      questions: EXAM_QUESTIONS,
      userAnswers: userAnswers,
      flagged: Array.from(flaggedQuestions),
      currentQuestionIndex: currentQuestionIndex,
      timeRemaining: timeRemaining,
      isExamStarted: isExamStarted,
      isExamPaused: isExamPaused,
      isExamSubmitted: isExamSubmitted,
      lastSubmittedExamId: lastSubmittedExamId,
      updatedAt: Date.now()
    };
    localStorage.setItem(STORAGE_ACTIVE_DRAFT_KEY, JSON.stringify(draft));
  } catch (e) {
    console.warn('Could not save exam draft:', e);
  }
}

function clearExamDraft() {
  try {
    localStorage.removeItem(STORAGE_ACTIVE_DRAFT_KEY);
  } catch (e) {}
}

function restoreExamDraft() {
  try {
    const raw = localStorage.getItem(STORAGE_ACTIVE_DRAFT_KEY);
    if (!raw) return false;
    const draft = JSON.parse(raw);
    if (!draft || !draft.questions || draft.questions.length !== 80) return false;

    EXAM_QUESTIONS = draft.questions;
    userAnswers = draft.userAnswers || {};
    flaggedQuestions = new Set(draft.flagged || []);
    currentQuestionIndex = typeof draft.currentQuestionIndex === 'number' ? draft.currentQuestionIndex : 0;
    timeRemaining = typeof draft.timeRemaining === 'number' ? draft.timeRemaining : EXAM_DURATION_MINUTES * 60;
    isExamStarted = !!draft.isExamStarted;
    isExamPaused = !!draft.isExamPaused;
    isExamSubmitted = !!draft.isExamSubmitted;
    lastSubmittedExamId = draft.lastSubmittedExamId || null;

    updateTimerDisplay();
    updateTimerButton();

    if (isExamStarted && !isExamSubmitted && !isExamPaused) {
      startTimer();
    }

    renderExamQuestion(currentQuestionIndex);
    updatePalette();
    updateProgress();
    return true;
  } catch (e) {
    console.error('Failed to restore draft:', e);
    return false;
  }
}

// Fisher-Yates Shuffle Helper
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Cân bằng tỷ lệ bốc câu hỏi từ các trường đại học (HUP, UMP, HMU)
function balanceUniversitySchools(uniList) {
  const hup = shuffle(uniList.filter(q => q.source === 'HUP'));
  const ump = shuffle(uniList.filter(q => q.source === 'UMP'));
  const hmu = shuffle(uniList.filter(q => q.source === 'HMU'));
  const result = [];
  const maxLen = Math.max(hup.length, ump.length, hmu.length);
  for (let i = 0; i < maxLen; i++) {
    const round = shuffle([hup[i], ump[i], hmu[i]].filter(Boolean));
    result.push(...round);
  }
  return result;
}

// ============================================================================
// MA TRẬN PHÂN BỔ 80 CÂU ĐỀ THI CHUẨN 100% THEO CHƯƠNG TRÌNH DƯỢC LÂM SÀNG (44H)
// ============================================================================
const EXAM_MATRIX_44H = [
  { chapter: "Kháng sinh & Kháng sinh dự phòng", lesson: "Bài 11", hours: 4, count: 8 },
  { chapter: "Đại cương DLS & Thông tin thuốc", lesson: "Bài 1 & 5", hours: 6, count: 10 },
  { chapter: "Tiêu chảy cấp ở trẻ em", lesson: "Bài 16", hours: 4, count: 7 },
  { chapter: "Glucocorticoid & Phác đồ điều trị", lesson: "Bài 12", hours: 4, count: 7 },
  { chapter: "Tương tác thuốc & Tương kỵ", lesson: "Bài 3", hours: 4, count: 7 },
  { chapter: "ADR, Dị ứng & Sốc phản vệ", lesson: "Bài 4", hours: 4, count: 7 },
  { chapter: "Xét nghiệm lâm sàng & Nhận định KQ", lesson: "Bài 6", hours: 4, count: 7 },
  { chapter: "Sử dụng thuốc ở Phụ nữ có thai & CCB", lesson: "Bài 9", hours: 3, count: 5 },
  { chapter: "Dược động học & Suy gan, thận", lesson: "Bài 2", hours: 2, count: 4 },
  { chapter: "Điều trị Tăng huyết áp & Cấp cứu THA", lesson: "Bài 15", hours: 2, count: 4 },
  { chapter: "Thuốc giảm đau", lesson: "Bài 13", hours: 2, count: 4 },
  { chapter: "Sử dụng thuốc ở Trẻ em", lesson: "Bài 7", hours: 2, count: 4 },
  { chapter: "Vitamin và chất khoáng", lesson: "Bài 14", hours: 2, count: 4 },
  { chapter: "Sử dụng thuốc ở Người cao tuổi", lesson: "Bài 8", hours: 1, count: 2 }
];

// Generate an 80-question test from the question bank following the 44h syllabus matrix
// Intelligent Mixing: Blends ~45% top medical/pharmacy university exam questions (HUP, UMP, HMU) with ~55% BYT questions
// Strictly enforces exact chapter question quotas per 44h curriculum (Total = 80 questions)
// Shuffles question selection AND shuffles option positions (A, B, C, D)
// When prioritizeUnseenQuestions is ON, picks unseen questions first across all sources
function generateRandomExam(force = false) {
  if (typeof ALL_EXAM_BANK === 'undefined' || !ALL_EXAM_BANK.length) {
    console.error('ALL_EXAM_BANK not loaded!');
    return;
  }

  if (!force && !isExamSubmitted && Object.keys(userAnswers).length > 0) {
    if (!confirm('Bạn đang làm bài thi dở dang. Bạn có chắc chắn muốn bỏ bài thi hiện tại và tạo đề thi mới chuẩn 44h không?')) {
      return;
    }
  }

  clearExamDraft();

  let chosenQuestions = [];
  const chosenStems = new Set();
  const covStats = getBankCoverageStats();
  const seenIds = covStats.seenIds || new Set();

  // 1. Bốc câu hỏi chuẩn theo ma trận số tiết của 14 bài giảng chính khóa 44h
  // Tự động mix thông minh giữa Ngân hàng Chuẩn BYT và Đề thi các trường ĐH Y Dược (HUP, UMP, HMU)
  EXAM_MATRIX_44H.forEach(rule => {
    const chQuestions = ALL_EXAM_BANK.filter(q => q.chapter === rule.chapter);
    const uniCandidates = chQuestions.filter(q => q.source && q.source !== 'BYT');
    const bytCandidates = chQuestions.filter(q => !q.source || q.source === 'BYT');

    // Mục tiêu ~45% câu từ các trường ĐH Y Dược, phần còn lại từ Chuẩn BYT
    const targetUni = Math.min(uniCandidates.length, Math.max(1, Math.round(rule.count * 0.45)));
    const targetByt = rule.count - targetUni;

    let balancedUni = [];
    let shuffledByt = [];

    if (prioritizeUnseenQuestions) {
      const unseenUni = uniCandidates.filter(q => !seenIds.has(q.id));
      const seenUni = uniCandidates.filter(q => seenIds.has(q.id));
      balancedUni = [...balanceUniversitySchools(unseenUni), ...balanceUniversitySchools(seenUni)];

      const unseenByt = shuffle(bytCandidates.filter(q => !seenIds.has(q.id)));
      const seenByt = shuffle(bytCandidates.filter(q => seenIds.has(q.id)));
      shuffledByt = [...unseenByt, ...seenByt];
    } else {
      balancedUni = balanceUniversitySchools(uniCandidates);
      shuffledByt = shuffle(bytCandidates);
    }

    let pickedUni = 0;
    for (const q of balancedUni) {
      if (!chosenStems.has(q.question)) {
        chosenQuestions.push(q);
        chosenStems.add(q.question);
        pickedUni++;
        if (pickedUni >= targetUni) break;
      }
    }

    let pickedByt = 0;
    for (const q of shuffledByt) {
      if (!chosenStems.has(q.question)) {
        chosenQuestions.push(q);
        chosenStems.add(q.question);
        pickedByt++;
        if (pickedByt >= (rule.count - pickedUni)) break;
      }
    }

    // Nếu chưa đủ số lượng rule.count (do trùng stem hoặc hết nguồn), bù từ nguồn còn lại
    if (pickedUni + pickedByt < rule.count) {
      const fallbackPool = [...balancedUni, ...shuffledByt];
      for (const q of fallbackPool) {
        if (!chosenStems.has(q.question)) {
          chosenQuestions.push(q);
          chosenStems.add(q.question);
          if (chosenQuestions.length >= 80) break;
        }
      }
    }
  });

  // Đảm bảo đủ chính xác 80 câu (chỉ bù từ các chương nằm trong chương trình 44h)
  if (chosenQuestions.length < 80) {
    const allowedChapters = new Set(EXAM_MATRIX_44H.map(r => r.chapter));
    const remaining = ALL_EXAM_BANK.filter(q => allowedChapters.has(q.chapter) && !chosenStems.has(q.question));
    let candidateRemaining = [];
    if (prioritizeUnseenQuestions) {
      const unseenRem = shuffle(remaining.filter(q => !seenIds.has(q.id)));
      const seenRem = shuffle(remaining.filter(q => seenIds.has(q.id)));
      candidateRemaining = [...unseenRem, ...seenRem];
    } else {
      candidateRemaining = shuffle(remaining);
    }
    for (const item of candidateRemaining) {
      chosenQuestions.push(item);
      chosenStems.add(item.question);
      if (chosenQuestions.length === 80) break;
    }
  } else if (chosenQuestions.length > 80) {
    chosenQuestions = chosenQuestions.slice(0, 80);
  }

  // Shuffle question order so university questions and standard questions are mixed naturally
  chosenQuestions = shuffle(chosenQuestions);

  // 2. SHUFFLE THE 4 OPTIONS FOR EVERY QUESTION TO ELIMINATE POSITION BIAS
  EXAM_QUESTIONS = chosenQuestions.map((q, idx) => {
    const originalCorrectText = q.options[q.correct];
    const shuffledOptions = shuffle(q.options);
    const newCorrectIdx = shuffledOptions.indexOf(originalCorrectText);

    return {
      id: q.id,
      examNum: idx + 1,
      chapter: q.chapter,
      source: q.source || "BYT",
      sourceName: q.sourceName || "Bộ Y tế (Chuẩn Quốc gia)",
      question: q.question,
      options: shuffledOptions,
      correct: newCorrectIdx,
      explanation: q.explanation,
      reference: q.reference
    };
  });

  // Reset exam session state
  userAnswers = {};
  flaggedQuestions.clear();
  isExamSubmitted = false;
  isExamStarted = false;
  isExamPaused = false;
  timeRemaining = EXAM_DURATION_MINUTES * 60;
  
  if (examTimer) {
    clearInterval(examTimer);
    examTimer = null;
  }
  stopSpeaking();

  if (timerWidget) timerWidget.classList.remove('warning', 'paused');
  updateTimerDisplay();
  updateTimerButton();
  renderExamQuestion(0);
  saveExamDraft();
  playChime('click');
}

// Render University Source Badge
function renderSourceBadge(source, sourceName) {
  if (!source) return '';
  let badgeClass = 'badge-source-byt';
  let icon = '📋';
  let label = sourceName || 'Bộ Y tế';

  if (source === 'HUP') {
    badgeClass = 'badge-source-hup';
    icon = '🏛️';
    label = 'ĐH Dược Hà Nội';
  } else if (source === 'UMP') {
    badgeClass = 'badge-source-ump';
    icon = '🏛️';
    label = 'ĐH Y Dược TP.HCM';
  } else if (source === 'HMU') {
    badgeClass = 'badge-source-hmu';
    icon = '🏛️';
    label = 'ĐH Y Hà Nội';
  } else {
    badgeClass = 'badge-source-byt';
    icon = '📋';
    label = 'Chuẩn BYT';
  }
  return `<span class="badge ${badgeClass}" title="Nguồn đề: ${sourceName || label}">${icon} ${label}</span>`;
}

// University Exam Modal & Generation
function openUniversityExamModal() {
  const modal = document.getElementById('modal-university-exam');
  if (modal) modal.classList.add('active');
  playChime('click');
}

function closeUniversityExamModal() {
  const modal = document.getElementById('modal-university-exam');
  if (modal) modal.classList.remove('active');
}

function generateUniversityExam(source = 'all', force = false) {
  if (typeof ALL_EXAM_BANK === 'undefined' || !ALL_EXAM_BANK.length) return;

  if (!force && !isExamSubmitted && Object.keys(userAnswers).length > 0) {
    if (!confirm('Bạn đang làm bài thi dở dang. Bạn có chắc chắn muốn chuyển sang đề thi mới không?')) {
      return;
    }
  }

  closeUniversityExamModal();
  clearExamDraft();

  if (source === 'all' || source === 'BYT') {
    return generateRandomExam(true);
  }

  let pool = [];
  let targetCount = 40;

  if (source === 'HUP') {
    pool = ALL_EXAM_BANK.filter(q => q.source === 'HUP');
    targetCount = pool.length;
  } else if (source === 'UMP') {
    pool = ALL_EXAM_BANK.filter(q => q.source === 'UMP');
    targetCount = pool.length;
  } else if (source === 'HMU') {
    pool = ALL_EXAM_BANK.filter(q => q.source === 'HMU');
    targetCount = pool.length;
  }

  let chosen = shuffle(pool).slice(0, targetCount);

  EXAM_QUESTIONS = chosen.map((q, idx) => {
    const originalCorrectText = q.options[q.correct];
    const shuffledOptions = shuffle(q.options);
    const newCorrectIdx = shuffledOptions.indexOf(originalCorrectText);

    return {
      id: q.id,
      examNum: idx + 1,
      chapter: q.chapter,
      source: q.source || "BYT",
      sourceName: q.sourceName || "Bộ Y tế (Chuẩn Quốc gia)",
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
  timeRemaining = targetCount * 60; // 1 min per question (40 mins)

  if (examTimer) {
    clearInterval(examTimer);
    examTimer = null;
  }
  stopSpeaking();

  if (timerWidget) timerWidget.classList.remove('warning', 'paused');
  updateTimerDisplay();
  updateTimerButton();
  renderExamQuestion(0);
  updatePalette();
  saveExamDraft();
  playChime('click');
}

// Synthesized Audio using Web Audio API (Offline, reliable)
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playChime(type) {
  if (!audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const now = audioCtx.currentTime;
    if (type === 'click') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.05);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === 'success') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now);
      osc.frequency.setValueAtTime(659.25, now + 0.1);
      osc.frequency.setValueAtTime(783.99, now + 0.2);
      osc.frequency.setValueAtTime(1046.50, now + 0.3);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
      osc.start(now);
      osc.stop(now + 0.5);
    } else if (type === 'flag') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(554.37, now + 0.08);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    }
  } catch (e) {
    // Audio context may require first user gesture
  }
}

// DOM Elements
const timerDisplay = document.getElementById('timer-display');
const timerWidget = document.getElementById('timer-widget');
const timerIcon = document.getElementById('timer-icon');
const btnTimerToggle = document.getElementById('btn-timer-toggle');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const questionCard = document.getElementById('question-card');
const paletteGrid = document.getElementById('palette-grid');
const answeredCountEl = document.getElementById('answered-count');
const flaggedCountEl = document.getElementById('flagged-count');
const resultsModal = document.getElementById('results-modal');
const themeToggleBtn = document.getElementById('btn-theme-toggle');

// Navigation Tabs & Mobile Menu
function toggleMobileNavMenu() {
  const navTabs = document.getElementById('main-nav-tabs');
  const backdrop = document.getElementById('mobile-menu-backdrop');
  const icon = document.getElementById('menu-icon-bars');
  if (!navTabs) return;
  const isOpen = navTabs.classList.toggle('open');
  if (backdrop) backdrop.classList.toggle('active', isOpen);
  if (icon) icon.textContent = isOpen ? '✕' : '☰';
  playChime('click');
}

function closeMobileNavMenu() {
  const navTabs = document.getElementById('main-nav-tabs');
  const backdrop = document.getElementById('mobile-menu-backdrop');
  const icon = document.getElementById('menu-icon-bars');
  if (navTabs) navTabs.classList.remove('open');
  if (backdrop) backdrop.classList.remove('active');
  if (icon) icon.textContent = '☰';
}

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.dataset.tab === 'sync') {
      closeMobileNavMenu();
      openSyncModal();
      return;
    }
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    switchTab(btn.dataset.tab);
    playChime('click');
  });
});

function switchTab(tab) {
  if (tab === 'sync') {
    closeMobileNavMenu();
    openSyncModal();
    return;
  }
  closeMobileNavMenu();
  stopSpeaking();
  currentTab = tab;
  closeMobilePalette();

  const tabLabels = {
    exam: '⏱️ Thi Thử 80 Câu',
    history: '📜 Lịch Sử',
    topic: '📚 Chuyên Đề',
    flashcards: '💡 Câu Hỏi Tủ',
    cheatsheet: '📐 Cẩm Nang & CT'
  };
  const activeTag = document.getElementById('mobile-active-tab-tag');
  if (activeTag && tabLabels[tab]) {
    activeTag.textContent = tabLabels[tab];
  }

  // Always synchronize navbar tabs!
  document.querySelectorAll('.tab-btn').forEach(b => {
    if (b.dataset.tab !== 'sync') {
      b.classList.toggle('active', b.dataset.tab === tab);
    }
  });
  try {
    localStorage.setItem('dls_active_tab', tab);
  } catch (e) {}

  document.getElementById('view-exam').style.display = tab === 'exam' ? 'block' : 'none';
  document.getElementById('view-history').style.display = tab === 'history' ? 'block' : 'none';
  document.getElementById('view-topic').style.display = tab === 'topic' ? 'block' : 'none';
  document.getElementById('view-flashcards').style.display = tab === 'flashcards' ? 'block' : 'none';
  document.getElementById('view-cheatsheet').style.display = tab === 'cheatsheet' ? 'block' : 'none';
  
  const isExamTab = (tab === 'exam');

  // ONLY display timer widget and start/pause button during "Thi Thử 80 Câu"!
  if (timerWidget) timerWidget.style.display = isExamTab ? 'flex' : 'none';
  if (btnTimerToggle) btnTimerToggle.style.display = isExamTab ? 'inline-flex' : 'none';

  const dock = document.getElementById('mobile-exam-dock');
  if (dock) {
    dock.style.display = isExamTab ? 'flex' : 'none';
  }

  // Always reset any trapped body overflow
  document.body.style.overflow = '';
  if (document.documentElement) document.documentElement.style.overflow = '';

  const appMain = document.querySelector('main.app-main');
  if (appMain) {
    if (tab === 'history') {
      appMain.classList.add('full-width-view');
    } else {
      appMain.classList.remove('full-width-view');
    }
  }

  const paletteContainer = document.getElementById('sidebar-palette');
  const desktopScratchpad = document.getElementById('desktop-scratchpad-panel');
  const returnToPaletteBtn = document.getElementById('btn-palette-return');

  if (tab === 'exam') {
    if (paletteContainer) paletteContainer.style.display = window.innerWidth > 1024 ? 'flex' : 'none';
    if (desktopScratchpad) desktopScratchpad.style.display = 'none';
    if (returnToPaletteBtn) returnToPaletteBtn.style.display = 'none';
    renderExamQuestion(currentQuestionIndex);
    updatePalette();
  } else {
    // In Lịch Sử: Palette is hidden and Scratchpad is hidden to give 100% full width and smooth scrolling!
    // In Chuyên Đề, Câu Hỏi Tủ, Công Thức: Desktop Scratchpad is visible on PC.
    if (paletteContainer) paletteContainer.style.display = 'none';
    if (returnToPaletteBtn) returnToPaletteBtn.style.display = 'none';
    if (desktopScratchpad) {
      if (window.innerWidth > 1024 && tab !== 'history') {
        desktopScratchpad.style.display = 'flex';
        setTimeout(resizeDesktopScratchCanvas, 50);
      } else {
        desktopScratchpad.style.display = 'none';
      }
    }
    if (tab === 'history') renderHistoryView();
    else if (tab === 'topic') renderTopicStudyView();
    else if (tab === 'flashcards') renderFlashcardView();
    else if (tab === 'cheatsheet') renderCheatsheetView();
  }
}

// Mobile Palette Drawer Functions
function toggleMobilePalette() {
  const palette = document.getElementById('sidebar-palette');
  if (!palette) return;
  if (palette.classList.contains('mobile-open')) {
    closeMobilePalette();
  } else {
    openMobilePalette();
  }
}

function openMobilePalette() {
  const palette = document.getElementById('sidebar-palette');
  const backdrop = document.getElementById('mobile-palette-backdrop');
  if (palette) palette.classList.add('mobile-open');
  if (backdrop) backdrop.classList.add('active');
  document.body.classList.add('palette-sheet-open');
}

function closeMobilePalette() {
  const palette = document.getElementById('sidebar-palette');
  const backdrop = document.getElementById('mobile-palette-backdrop');
  if (palette) palette.classList.remove('mobile-open');
  if (backdrop) backdrop.classList.remove('active');
  document.body.classList.remove('palette-sheet-open');
}

function updateMobileDock(index) {
  const dockCurrentQ = document.getElementById('dock-current-q');
  const dockPrev = document.getElementById('dock-btn-prev');
  const dockNext = document.getElementById('dock-btn-next');
  const dockStatusText = document.getElementById('dock-status-text');

  if (dockCurrentQ) dockCurrentQ.textContent = index + 1;
  if (dockPrev) dockPrev.disabled = index === 0;
  if (dockNext) dockNext.disabled = index === EXAM_QUESTIONS.length - 1;
  if (dockStatusText) {
    const answeredCount = Object.keys(userAnswers).length;
    dockStatusText.textContent = `${answeredCount}/80 đã làm ▲`;
  }
}

// Timer Functions & Start/Pause Logic
function updateTimerButton() {
  if (!btnTimerToggle) return;
  if (isExamSubmitted) {
    btnTimerToggle.className = 'btn-timer-action';
    btnTimerToggle.style.opacity = '0.6';
    btnTimerToggle.style.pointerEvents = 'none';
    btnTimerToggle.innerHTML = '<span>🏁</span> Đã nộp bài';
    if (timerIcon) timerIcon.textContent = '⏱️';
    return;
  }

  btnTimerToggle.style.opacity = '1';
  btnTimerToggle.style.pointerEvents = 'auto';

  if (!isExamStarted) {
    btnTimerToggle.className = 'btn-timer-action state-start';
    btnTimerToggle.innerHTML = '<span>▶️</span> Bắt đầu làm bài';
    btnTimerToggle.title = 'Bắt đầu tính giờ 80 phút làm bài';
    if (timerIcon) timerIcon.textContent = '⏳';
  } else if (isExamPaused) {
    btnTimerToggle.className = 'btn-timer-action state-paused';
    btnTimerToggle.innerHTML = '<span>▶️</span> Tiếp tục';
    btnTimerToggle.title = 'Tiếp tục làm bài và tính giờ';
    if (timerIcon) timerIcon.textContent = '⏸️';
  } else {
    btnTimerToggle.className = 'btn-timer-action state-running';
    btnTimerToggle.innerHTML = '<span>⏸️</span> Tạm dừng';
    btnTimerToggle.title = 'Tạm dừng thời gian làm bài';
    if (timerIcon) timerIcon.textContent = '⏳';
  }
}

function toggleExamTimerAction() {
  if (isExamSubmitted) return;
  if (!isExamStarted) {
    startExam();
  } else {
    togglePauseExam();
  }
}

function startExam() {
  if (isExamStarted) return;
  isExamStarted = true;
  isExamPaused = false;
  startTimer();
  updateTimerButton();
  if (timerWidget) timerWidget.classList.remove('paused');
  playChime('success');
  renderExamQuestion(currentQuestionIndex);
}

function togglePauseExam() {
  if (!isExamStarted || isExamSubmitted) return;
  isExamPaused = !isExamPaused;
  if (isExamPaused) {
    if (examTimer) {
      clearInterval(examTimer);
      examTimer = null;
    }
    if (timerWidget) timerWidget.classList.add('paused');
    stopSpeaking();
    playChime('click');
  } else {
    startTimer();
    if (timerWidget) timerWidget.classList.remove('paused');
    playChime('click');
  }
  updateTimerButton();
  renderExamQuestion(currentQuestionIndex);
}

function startTimer() {
  if (examTimer) clearInterval(examTimer);
  examTimer = setInterval(() => {
    if (timeRemaining > 0) {
      timeRemaining--;
      updateTimerDisplay();
      if (timeRemaining % 10 === 0) {
        saveExamDraft();
      }
      if (timeRemaining <= 600) { // Under 10 minutes
        timerWidget.classList.add('warning');
      }
    } else {
      clearInterval(examTimer);
      examTimer = null;
      alert('Hết 80 phút làm bài! Hệ thống đang tự động nộp bài.');
      submitExam();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const m = Math.floor(timeRemaining / 60);
  const s = timeRemaining % 60;
  if (timerDisplay) {
    timerDisplay.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }
}

// Universal Cross-Browser Vietnamese Text-To-Speech (TTS) Engine
// Compatible with 100% of modern browsers (Chrome, Edge, Safari, Firefox, Opera, Cốc Cốc, iOS Safari, Android)
let ttsSpeechQueue = [];
let ttsCurrentChunkIndex = 0;
let ttsKeepAliveTimer = null;

function isVietnameseVoice(v) {
  if (!v) return false;
  const l = (v.lang || '').toLowerCase().replace(/_/g, '-');
  const n = (v.name || '').toLowerCase();

  // Primary check: ISO language code must start with 'vi'
  if (l.startsWith('vi')) return true;

  // Secondary check: Name explicitly indicates Vietnamese / Tiếng Việt
  if (n.includes('vietnam') || n.includes('vietnamese') || n.includes('tiếng việt') || n.includes('tieng viet')) {
    return true;
  }
  if (n.includes('hoaimy') || n.includes('namminh')) {
    return true;
  }
  if (n.includes('microsoft an -') || n.includes('microsoft an (')) {
    return true;
  }

  return false;
}

function getAvailableVietnameseVoices() {
  if (!('speechSynthesis' in window)) return [];
  try {
    const voices = window.speechSynthesis.getVoices() || [];
    return voices.filter(isVietnameseVoice);
  } catch (e) {
    return [];
  }
}

function getTtsRate() {
  try {
    const saved = parseFloat(localStorage.getItem('dls_tts_rate'));
    if (!isNaN(saved) && saved >= 0.7 && saved <= 1.4) {
      return saved;
    }
  } catch (e) {}
  return 0.92; // 0.92x is optimal for clear, steady pharmacology pronunciation
}

function findVietnameseVoice() {
  if (!('speechSynthesis' in window)) return null;
  try {
    const viVoices = getAvailableVietnameseVoices();
    if (!viVoices.length) return null;

    // 0. User custom preferred voice from settings
    const savedVoiceName = localStorage.getItem('dls_preferred_voice');
    if (savedVoiceName) {
      const userChoice = viVoices.find(v => v.name === savedVoiceName);
      if (userChoice) return userChoice;
    }

    // 1st priority: Microsoft Edge Natural Online voices (HoaiMy, NamMinh) - siêu mượt & tự nhiên nhất
    let topVoice = viVoices.find(v => {
      const n = (v.name || '').toLowerCase();
      return (n.includes('natural') || n.includes('online')) && (n.includes('hoaimy') || n.includes('namminh'));
    });
    if (topVoice) return topVoice;

    // 2nd priority: Google Tiếng Việt (Chrome / Android) - must have 'vi' lang code
    topVoice = viVoices.find(v => {
      const n = (v.name || '').toLowerCase();
      const l = (v.lang || '').toLowerCase();
      return n.includes('google') && (l.startsWith('vi') || n.includes('tiếng việt') || n.includes('vietnam'));
    });
    if (topVoice) return topVoice;

    // 3rd priority: Apple Linh (iOS Safari / macOS)
    topVoice = viVoices.find(v => (v.name || '').toLowerCase().includes('linh') && (v.lang || '').toLowerCase().startsWith('vi'));
    if (topVoice) return topVoice;

    // 4th priority: Microsoft HoaiMy or NamMinh (local)
    topVoice = viVoices.find(v => {
      const n = (v.name || '').toLowerCase();
      return n.includes('hoaimy') || n.includes('namminh');
    });
    if (topVoice) return topVoice;

    // 5th priority: Microsoft An (Windows built-in offline)
    topVoice = viVoices.find(v => {
      const n = (v.name || '').toLowerCase();
      const l = (v.lang || '').toLowerCase();
      return (n.includes('microsoft an') || n.includes('an - vietnamese')) && (l.startsWith('vi') || n.includes('vietnam'));
    });
    if (topVoice) return topVoice;

    // 6th priority: Any voice whose lang starts with 'vi'
    topVoice = viVoices.find(v => (v.lang || '').toLowerCase().startsWith('vi'));
    if (topVoice) return topVoice;

    return viVoices[0];
  } catch (e) {
    return null;
  }
}

function initTTS() {
  if (!('speechSynthesis' in window)) return;
  function updateVoices() {
    cachedViVoice = findVietnameseVoice();
  }
  updateVoices();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = updateVoices;
  }
  window.speechSynthesis.addEventListener('voiceschanged', updateVoices);
}

function stopSpeaking() {
  if (ttsKeepAliveTimer) {
    clearInterval(ttsKeepAliveTimer);
    ttsKeepAliveTimer = null;
  }
  ttsSpeechQueue = [];
  ttsCurrentChunkIndex = 0;
  if ('speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch (e) {}
  }
  isSpeaking = false;
  document.querySelectorAll('.btn-speak-exp').forEach(btn => {
    btn.classList.remove('is-speaking');
    btn.innerHTML = '<span>🔊</span> Đọc giải thích';
  });
  document.querySelectorAll('.fc-icon-btn.is-speaking').forEach(btn => {
    btn.classList.remove('is-speaking');
  });
  const testBtn = document.getElementById('btn-test-tts-voice');
  if (testBtn) {
    testBtn.innerHTML = '<span>▶️</span> Nghe thử ngay';
    testBtn.classList.remove('btn-danger');
    testBtn.classList.add('btn-primary');
  }
  currentSpeechBtn = null;
}

function cleanTextForVietnameseSpeech(rawText) {
  if (!rawText) return '';
  return rawText
    .replace(/<[^>]*>/g, ' ')
    .replace(/[•*#_~|]/g, ' ')
    .replace(/✓/g, 'Đáp án đúng. ')
    .replace(/✗/g, 'Đáp án chưa đúng. ')
    // Date formats (e.g. ngày 11/02/1998, tháng 11/1990)
    .replace(/(?:ngày\s*)?(\d{1,2})\/(\d{1,2})\/(\d{4})/gi, 'ngày $1 tháng $2 năm $3')
    .replace(/(?:tháng\s*)?(\d{1,2})\/(\d{4})/gi, 'tháng $1 năm $2')
    // Common math & medical symbols
    .replace(/≥/g, ' lớn hơn hoặc bằng ')
    .replace(/≤/g, ' nhỏ hơn hoặc bằng ')
    .replace(/>/g, ' lớn hơn ')
    .replace(/</g, ' nhỏ hơn ')
    .replace(/%/g, ' phần trăm ')
    .replace(/°C/g, ' độ C ')
    .replace(/±/g, ' cộng trừ ')
    // Units of measurement
    .replace(/\bml\/phút\b/gi, 'mili lít trên phút')
    .replace(/\bmg\/kg\/ngày\b/gi, 'miligram trên kilogam mỗi ngày')
    .replace(/\bmg\/ngày\b/gi, 'miligram mỗi ngày')
    .replace(/\bg\/ngày\b/gi, 'gam mỗi ngày')
    .replace(/\bmg\/dl\b/gi, 'miligram trên đê xi lít')
    .replace(/\bmmol\/l\b/gi, 'mili mol trên lít')
    .replace(/\bmcg\/ml\b/gi, 'microgam trên mili lít')
    .replace(/\bµg\/ml\b/gi, 'microgam trên mili lít')
    .replace(/\bmmHg\b/gi, 'milimét thủy ngân')
    // Academic & institutional abbreviations
    .replace(/\bĐH\b/g, 'Đại học')
    .replace(/\bDLS\b/g, 'Dược lâm sàng')
    .replace(/\bDSLS\b/g, 'Dược sĩ lâm sàng')
    .replace(/\bDS\b/g, 'Dược sĩ')
    .replace(/\bKCB\b/g, 'khám chữa bệnh')
    .replace(/\bTKTW\b/g, 'thần kinh trung ương')
    .replace(/\bHĐ\b/g, 'hoạt động')
    .replace(/\bĐ\/S\b/g, 'đúng sai')
    // Medical abbreviations & acronyms (natural spoken phrases)
    .replace(/\bCrCl\b/gi, 'độ thanh thải Creatinine')
    .replace(/\beGFR\b/gi, 'mức lọc cầu thận')
    .replace(/\bNSAIDs?\b/gi, 'thuốc kháng viêm không steroid')
    .replace(/\bADR\b/gi, 'tác dụng không mong muốn')
    .replace(/\bTHA\b/g, 'tăng huyết áp')
    .replace(/\bĐTĐ\b/g, 'đái tháo đường')
    .replace(/\bPNCT\b/g, 'phụ nữ có thai')
    .replace(/\bCCB\b/g, 'thuốc chẹn kênh canxi')
    .replace(/\bACEI?\b/gi, 'thuốc ức chế men chuyển')
    .replace(/\bARB\b/g, 'thuốc chẹn thụ thể Angiotensin')
    .replace(/\bCYP(\d+[A-Z]\d+)\b/gi, 'men gan CYP $1')
    .replace(/\bAUC\b/gi, 'diện tích dưới đường cong AUC')
    .replace(/\bCmax\b/gi, 'nồng độ đỉnh C max')
    .replace(/\bCmin\b/gi, 'nồng độ đáy C min')
    .replace(/\bMIC\b/gi, 'nồng độ ức chế tối thiểu MIC')
    .replace(/\bT1\/2\b/gi, 'thời gian bán thải T một phần hai')
    .replace(/\bMRSA\b/gi, 'tụ cầu vàng kháng Methicillin')
    .replace(/\bCOPD\b/gi, 'bệnh phổi tắc nghẽn mạn tính')
    .replace(/\bSABA\b/gi, 'thuốc chủ vận beta 2 tác dụng ngắn')
    .replace(/\bLABA\b/gi, 'thuốc chủ vận beta 2 tác dụng kéo dài')
    .replace(/\bLAMA\b/gi, 'thuốc kháng cholinergic tác dụng kéo dài')
    .replace(/\bICS\b/gi, 'corticoid dạng hít')
    .replace(/\bHPA\b/gi, 'trục hạ đồi tuyến yên thượng thận')
    .replace(/\bIV\b/g, 'tiêm tĩnh mạch')
    .replace(/\bIM\b/g, 'tiêm bắp')
    .replace(/\bSC\b/g, 'tiêm dưới da')
    .replace(/\bPO\b/g, 'đường uống')
    .replace(/\bHbA1c\b/gi, 'HbA1c')
    .replace(/\bLDL-C\b/gi, 'LDL cholesterol')
    .replace(/\bHDL-C\b/gi, 'HDL cholesterol')
    .replace(/\bWHO\b/gi, 'Tổ chức Y tế Thế giới')
    .replace(/\bBYT\b/gi, 'Bộ Y tế')
    .replace(/\bBN\b/g, 'bệnh nhân')
    .replace(/\bKS\b/g, 'kháng sinh')
    .replace(/\bVK\b/g, 'vi khuẩn')
    .replace(/\bvs\b/gi, 'so với')
    .replace(/([0-9]+)\s*-\s*([0-9]+)/g, '$1 đến $2')
    .replace(/\s+/g, ' ')
    .trim();
}

function chunkTextForSpeech(text, maxLen = 800) {
  if (!text) return [];
  const clean = text.trim();
  // Keep as one continuous utterance whenever possible to avoid stuttering / pauses
  if (clean.length <= maxLen) {
    return [clean];
  }
  // If exceptionally long, only split on full sentence ends (period, ?, ! followed by whitespace)
  const sentences = clean.split(/(?<=[.?!])\s+/g);
  const chunks = [];
  let current = '';
  for (let s of sentences) {
    s = s.trim();
    if (!s) continue;
    if ((current + ' ' + s).trim().length <= maxLen) {
      current = (current + ' ' + s).trim();
    } else {
      if (current) chunks.push(current);
      current = s;
    }
  }
  if (current) chunks.push(current);
  return chunks.length ? chunks : [clean];
}

function playNextSpeechChunk() {
  if (!isSpeaking || !currentSpeechBtn) {
    stopSpeaking();
    return;
  }

  if (ttsCurrentChunkIndex >= ttsSpeechQueue.length) {
    stopSpeaking();
    return;
  }

  const chunk = ttsSpeechQueue[ttsCurrentChunkIndex];
  if (!chunk || !chunk.trim()) {
    ttsCurrentChunkIndex++;
    playNextSpeechChunk();
    return;
  }

  const utterance = new SpeechSynthesisUtterance(chunk);
  const viVoice = findVietnameseVoice();
  if (viVoice) {
    utterance.voice = viVoice;
    utterance.lang = viVoice.lang || 'vi-VN';
  } else {
    utterance.lang = 'vi-VN';
  }
  utterance.rate = getTtsRate();
  utterance.pitch = getTtsPitch();

  utterance.onend = () => {
    ttsCurrentChunkIndex++;
    if (ttsCurrentChunkIndex < ttsSpeechQueue.length) {
      playNextSpeechChunk();
    } else {
      stopSpeaking();
    }
  };

  utterance.onerror = (e) => {
    console.warn('Utterance chunk error:', e);
    if (e.error === 'interrupted' || e.error === 'canceled') {
      stopSpeaking();
      return;
    }
    ttsCurrentChunkIndex++;
    if (ttsCurrentChunkIndex < ttsSpeechQueue.length) {
      playNextSpeechChunk();
    } else {
      stopSpeaking();
    }
  };

  try {
    window.speechSynthesis.speak(utterance);
  } catch (err) {
    console.warn('speak exception:', err);
    stopSpeaking();
  }
}

// ==========================================
// TTS SETTINGS MODAL & VOICE CONTROLS
// ==========================================
function openTtsSettingsModal() {
  const modal = document.getElementById('modal-voice-settings');
  if (!modal) return;
  modal.classList.add('active');
  renderTtsVoiceList();
  renderTtsSpeedButtons();
  renderTtsPitchButtons();
}

function closeTtsSettingsModal() {
  const modal = document.getElementById('modal-voice-settings');
  if (modal) modal.classList.remove('active');
  stopSpeaking();
}

function renderTtsVoiceList() {
  const select = document.getElementById('tts-voice-select');
  const noteEl = document.getElementById('tts-voice-note');
  if (!select) return;

  const viVoices = getAvailableVietnameseVoices();
  const currentVoice = findVietnameseVoice();
  select.innerHTML = '';

  if (viVoices.length === 0) {
    const opt = document.createElement('option');
    opt.value = '';
    opt.textContent = 'Mặc định hệ thống (Chưa có giọng Việt chuyên biệt)';
    select.appendChild(opt);
    if (noteEl) {
      noteEl.innerHTML = '<span style="color: var(--warning);">⚠️ Thiết bị hiện dùng giọng đọc dự phòng. Nên mở trên <strong>Microsoft Edge</strong> hoặc <strong>Điện thoại</strong> để có giọng Việt cực mượt.</span>';
    }
    return;
  }

  viVoices.forEach(v => {
    const opt = document.createElement('option');
    opt.value = v.name;
    let label = v.name;
    if (v.name.includes('Natural') || v.name.includes('Online')) {
      label += ' ⭐ (AI Tự nhiên - Rất mượt)';
    } else if (v.name.includes('Google')) {
      label += ' 🌟 (Google Chuẩn)';
    } else if (v.name.includes('Microsoft An')) {
      label += ' 🖥️ (Windows Tiêu chuẩn)';
    } else if (v.name.includes('Linh')) {
      label += ' 🍎 (Apple Tiếng Việt)';
    }
    opt.textContent = label;
    if (currentVoice && v.name === currentVoice.name) {
      opt.selected = true;
    }
    select.appendChild(opt);
  });

  if (noteEl) {
    if (currentVoice && (currentVoice.name.includes('Natural') || currentVoice.name.includes('Online'))) {
      noteEl.innerHTML = '<span style="color: var(--primary); font-weight: 600;">✨ Đang dùng giọng AI Natural cao cấp nhất của Microsoft!</span>';
    } else if (currentVoice && currentVoice.name.includes('Microsoft An')) {
      noteEl.innerHTML = '<span>Đang dùng giọng đọc tiếng Việt của Windows. Nếu nghe muốn tự nhiên hơn, hãy thử mở web bằng <strong>Microsoft Edge</strong>.</span>';
    } else {
      noteEl.textContent = 'Đã nhận diện ' + viVoices.length + ' giọng đọc tiếng Việt trên thiết bị của bạn.';
    }
  }
}

function onUserChangeTtsVoice() {
  const select = document.getElementById('tts-voice-select');
  if (!select) return;
  const chosen = select.value;
  if (chosen) {
    localStorage.setItem('dls_preferred_voice', chosen);
  } else {
    localStorage.removeItem('dls_preferred_voice');
  }
  renderTtsVoiceList();
  showToast('Đã lưu giọng đọc: ' + (chosen || 'Mặc định'));
}

function renderTtsSpeedButtons() {
  const currentRate = getTtsRate();
  document.querySelectorAll('.tts-speed-btn').forEach(btn => {
    const sp = parseFloat(btn.getAttribute('data-speed'));
    if (Math.abs(sp - currentRate) < 0.04) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function setTtsSpeed(rate) {
  localStorage.setItem('dls_tts_rate', rate.toString());
  renderTtsSpeedButtons();
  showToast('Đã chỉnh tốc độ đọc: ' + rate + 'x');
  // If speaking sample, re-speak
  if (isSpeaking) {
    stopSpeaking();
  }
}

function getTtsPitch() {
  try {
    const saved = parseFloat(localStorage.getItem('dls_tts_pitch'));
    if (!isNaN(saved) && saved >= 0.7 && saved <= 1.4) {
      return saved;
    }
  } catch (e) {}
  return 1.0;
}

function renderTtsPitchButtons() {
  const currentPitch = getTtsPitch();
  document.querySelectorAll('.tts-pitch-btn').forEach(btn => {
    const p = parseFloat(btn.getAttribute('data-pitch'));
    if (Math.abs(p - currentPitch) < 0.04) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function setTtsPitch(pitch) {
  localStorage.setItem('dls_tts_pitch', pitch.toString());
  renderTtsPitchButtons();
  showToast('Đã chỉnh cao độ: ' + pitch + 'x');
  if (isSpeaking) {
    stopSpeaking();
  }
}

function copyExamLinkForEdge() {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    showToast('📋 Đã sao chép link! Mở Microsoft Edge và dán link vào để nghe giọng AI siêu mượt.');
  }).catch(() => {
    showToast('Link: ' + url);
  });
}

function testTtsSampleSpeech() {
  const btn = document.getElementById('btn-test-tts-voice');
  if (isSpeaking && currentSpeechBtn === btn) {
    stopSpeaking();
    return;
  }
  const sampleText = 'Xin chào! Đây là hệ thống ôn thi Dược Lâm Sàng 80 câu chuẩn Bộ Y tế. Thuốc ức chế men chuyển phối hợp với thuốc chẹn kênh canxi liều thấp giúp hạ huyết áp an toàn và kiểm soát tốt nguy cơ tim mạch.';
  speakExplanation(btn, sampleText);
}

function speakExplanationFromCard(btn) {
  if (!btn) return;
  const container = btn.closest('.explanation-box') || btn.closest('.review-explanation-box');
  if (!container) return;
  const textEl = container.querySelector('.explanation-content') || container.querySelector('.exp-text');
  const text = textEl ? textEl.innerText : '';
  speakExplanation(btn, text);
}

function speakExplanation(btn, rawText) {
  // If clicking on the currently speaking button, stop it
  if (isSpeaking && currentSpeechBtn === btn) {
    stopSpeaking();
    return;
  }

  // Cancel any ongoing speech
  stopSpeaking();

  if (!rawText || !rawText.trim()) return;
  const text = cleanTextForVietnameseSpeech(rawText);
  if (!text) return;

  if (!('speechSynthesis' in window)) {
    showToast('⚠️ Trình duyệt của bạn không hỗ trợ tính năng đọc âm thanh Web Speech.');
    return;
  }

  // Set active state on button
  btn.classList.add('is-speaking');
  if (btn.classList.contains('btn-speak-exp')) {
    btn.innerHTML = '<span>⏹️</span> Dừng đọc';
  } else if (btn.id === 'btn-test-tts-voice') {
    btn.innerHTML = '<span>⏹️</span> Dừng thử';
    btn.classList.remove('btn-primary');
    btn.classList.add('btn-danger');
  }
  isSpeaking = true;
  currentSpeechBtn = btn;

  // Single smooth utterance for entire explanation (no stuttery chopping)
  ttsSpeechQueue = chunkTextForSpeech(text, 800);
  ttsCurrentChunkIndex = 0;

  // Passive watchdog: only resume if browser unexpectedly paused mid-speech
  if (ttsKeepAliveTimer) clearInterval(ttsKeepAliveTimer);
  ttsKeepAliveTimer = setInterval(() => {
    if (window.speechSynthesis && window.speechSynthesis.paused && isSpeaking) {
      try {
        window.speechSynthesis.resume();
      } catch (e) {}
    }
  }, 3000);

  try {
    window.speechSynthesis.cancel();
  } catch (e) {}

  playNextSpeechChunk();
}

// Render Question in Exam Mode
function renderExamQuestion(index) {
  if (!EXAM_QUESTIONS || !EXAM_QUESTIONS.length) return;
  currentQuestionIndex = index;
  const q = EXAM_QUESTIONS[index];
  if (!q) return;

  // If exam is paused, display pause shield screen
  if (isExamPaused) {
    questionCard.innerHTML = `
      <div class="exam-pause-shield">
        <div class="pause-icon-big">⏸️</div>
        <div class="pause-title">BÀI THI ĐANG TẠM DỪNG</div>
        <p class="pause-desc">
          Đồng hồ tính giờ 80 phút đã được tạm dừng. Bạn có thể giải lao hoặc uống nước. Bấm nút bên dưới khi bạn đã sẵn sàng tiếp tục làm bài!
        </p>
        <div class="pause-time-badge">
          <span>⏳ Thời gian còn lại:</span> <span>${timerDisplay ? timerDisplay.textContent : '80:00'}</span>
        </div>
        <button class="btn btn-primary" onclick="togglePauseExam()" style="padding: 0.75rem 2rem; font-size: 1rem; margin-top: 0.5rem; background: linear-gradient(135deg, #10b981 0%, #059669 100%);">
          ▶️ Tiếp Tục Làm Bài
        </button>
      </div>
    `;
    updatePalette();
    return;
  }

  const isFlagged = flaggedQuestions.has(q.id);
  const selected = userAnswers[q.id];

  let notStartedBanner = '';
  if (!isExamStarted && !isExamSubmitted) {
    notStartedBanner = `
      <div class="exam-not-started-banner">
        <span>⏱️ <strong>Chưa tính giờ:</strong> Thời gian 80 phút sẽ bắt đầu khi bạn chọn đáp án hoặc ấn nút Bắt đầu.</span>
        <button class="btn btn-primary" onclick="startExam()" style="padding: 0.25rem 0.65rem; font-size: 0.76rem; white-space: nowrap; background: linear-gradient(135deg, #059669 0%, #047857 100%);">
          ▶️ Bắt đầu
        </button>
      </div>
    `;
  }

  let html = `
    ${notStartedBanner}
    <div class="question-meta">
      <div class="badge-group" style="flex-wrap: wrap;">
        <span class="badge badge-num">Câu ${index + 1} / ${EXAM_QUESTIONS.length}</span>
        <span class="badge badge-category">${q.chapter}</span>
        ${renderSourceBadge(q.source, q.sourceName)}
      </div>
      <button class="btn-flag ${isFlagged ? 'active' : ''}" id="flag-btn" onclick="toggleFlag(${q.id})">
        <span>★</span> ${isFlagged ? 'Đã đánh dấu' : 'Đánh dấu xem lại'}
      </button>
    </div>

    <div class="question-title">
      ${q.question}
    </div>

    <div class="options-list">
  `;

  const letters = ['A', 'B', 'C', 'D'];
  q.options.forEach((opt, idx) => {
    let stateClass = '';
    if (isExamSubmitted) {
      if (idx === q.correct) stateClass = 'correct';
      else if (selected === idx && idx !== q.correct) stateClass = 'incorrect';
    } else {
      if (selected === idx) stateClass = 'selected';
    }

    html += `
      <div class="option-item ${stateClass}" onclick="selectExamOption(${q.id}, ${idx})">
        <div class="option-letter">${letters[idx]}</div>
        <div class="option-text">${opt}</div>
      </div>
    `;
  });

  html += `</div>`;

  // If submitted, show detailed explanation box with TTS Audio button
  if (isExamSubmitted) {
    const isAnswered = selected !== undefined;
    const isCorrect = selected === q.correct;
    let badgeTitle = '';
    let badgeColor = '';

    if (!isAnswered) {
      badgeTitle = '⚪ BẠN CHƯA TRẢ LỜI CÂU NÀY';
      badgeColor = 'var(--text-muted)';
    } else if (isCorrect) {
      badgeTitle = '✓ BẠN ĐÃ CHỌN ĐÚNG';
      badgeColor = 'var(--primary)';
    } else {
      const selectedLetter = letters[selected] || '?';
      badgeTitle = `✕ BẠN ĐÃ CHỌN SAI (Bạn chọn: [${selectedLetter}])`;
      badgeColor = 'var(--danger)';
    }

    html += `
      <div class="explanation-box" style="border-left-color: ${badgeColor};">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.25rem;">
          <div class="explanation-header" style="color: ${badgeColor};">
            ${badgeTitle} • ĐÁP ÁN ĐÚNG: [${letters[q.correct]}]
          </div>
          <div style="display: flex; gap: 0.35rem; align-items: center;">
            <button class="btn-speak-exp" onclick="speakExplanationFromCard(this)" title="Nghe đọc giải thích lâm sàng bằng giọng tiếng Việt">
              <span>🔊</span> Đọc giải thích
            </button>
            <button class="btn-speak-settings" onclick="openTtsSettingsModal()" title="Cài đặt giọng đọc &amp; tốc độ" aria-label="Cài đặt giọng đọc">⚙️</button>
          </div>
        </div>
        <div class="explanation-content">${q.explanation}</div>
        <div class="explanation-ref">📖 Nguồn tài liệu: ${q.reference}</div>
      </div>
    `;
  }

  // Card Navigation Buttons
  html += `
    <div class="card-nav">
      <div class="card-nav-main">
        <button class="btn btn-secondary nav-btn-prev" onclick="prevQuestion()" ${index === 0 ? 'disabled' : ''}>
          ← Câu trước
        </button>
        <button class="btn btn-primary nav-btn-next" onclick="nextQuestion()" ${index === EXAM_QUESTIONS.length - 1 ? 'disabled' : ''}>
          Câu tiếp →
        </button>
      </div>
      <div class="card-nav-extra">
        <button class="btn btn-secondary" onclick="generateRandomExam()" title="Tạo đề ngẫu nhiên mới và đảo vị trí đáp án">
          🎲 Đề ngẫu nhiên mới
        </button>
        ${!isExamSubmitted ? `
          <button class="btn btn-submit" onclick="confirmSubmitExam()">
            🏁 Nộp bài thi
          </button>
        ` : `
          <button class="btn btn-secondary" onclick="openResultsModal()">
            📊 Xem lại kết quả
          </button>
        `}
      </div>
    </div>
    <div class="shortcuts-hint">
      Mẹo: Nhấn phím <span class="kbd">A</span>, <span class="kbd">B</span>, <span class="kbd">C</span>, <span class="kbd">D</span> để chọn | Phím <span class="kbd">←</span> <span class="kbd">→</span> chuyển câu | <span class="kbd">F</span> đánh dấu
    </div>
  `;

  questionCard.innerHTML = html;
  updatePalette();
  updateProgress();
  updateMobileDock(index);
}

function selectExamOption(qId, optionIdx) {
  if (isExamSubmitted || isExamPaused) return;
  // Automatically start timer if not already started
  if (!isExamStarted) {
    startExam();
  }
  userAnswers[qId] = optionIdx;
  saveExamDraft();
  playChime('click');
  renderExamQuestion(currentQuestionIndex);
}

function toggleFlag(qId) {
  if (flaggedQuestions.has(qId)) {
    flaggedQuestions.delete(qId);
  } else {
    flaggedQuestions.add(qId);
    playChime('flag');
  }
  saveExamDraft();
  renderExamQuestion(currentQuestionIndex);
}

function prevQuestion() {
  stopSpeaking();
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderExamQuestion(currentQuestionIndex);
  }
}

function nextQuestion() {
  stopSpeaking();
  if (currentQuestionIndex < EXAM_QUESTIONS.length - 1) {
    currentQuestionIndex++;
    renderExamQuestion(currentQuestionIndex);
  }
}

// Update Palette Grid
function updatePalette() {
  paletteGrid.innerHTML = '';
  let correctCount = 0;
  let wrongCount = 0;
  let unansweredCount = 0;

  EXAM_QUESTIONS.forEach((q, idx) => {
    const btn = document.createElement('button');
    btn.className = 'grid-btn';
    btn.textContent = idx + 1;
    btn.onclick = () => {
      renderExamQuestion(idx);
      closeMobilePalette();
    };

    if (idx === currentQuestionIndex) {
      btn.classList.add('current');
    }

    const isAnswered = userAnswers[q.id] !== undefined;
    const isFlagged = flaggedQuestions.has(q.id);

    if (isExamSubmitted) {
      if (!isAnswered) {
        btn.classList.add('result-skipped');
        btn.title = `Câu ${idx + 1}: Chưa làm (Đáp án đúng: ${['A','B','C','D'][q.correct]})`;
        unansweredCount++;
      } else if (userAnswers[q.id] === q.correct) {
        btn.classList.add('result-correct');
        btn.title = `Câu ${idx + 1}: Đúng`;
        correctCount++;
      } else {
        btn.classList.add('result-wrong');
        const userChoice = ['A','B','C','D'][userAnswers[q.id]] || '?';
        const correctChoice = ['A','B','C','D'][q.correct];
        btn.title = `Câu ${idx + 1}: Sai (Bạn chọn: [${userChoice}] • Đúng: [${correctChoice}])`;
        wrongCount++;
      }
    } else {
      if (isAnswered) btn.classList.add('answered');
      if (isFlagged) btn.classList.add('flagged');
    }

    paletteGrid.appendChild(btn);
  });

  const totalAnswered = Object.keys(userAnswers).length;
  answeredCountEl.textContent = `${totalAnswered} / ${EXAM_QUESTIONS.length}`;
  flaggedCountEl.textContent = flaggedQuestions.size;

  // Dynamically update palette legend in exam mode
  const legendEl = document.querySelector('.palette-legend');
  if (legendEl) {
    if (isExamSubmitted) {
      legendEl.innerHTML = `
        <div class="legend-item"><span class="legend-dot correct"></span> Đúng (${correctCount})</div>
        <div class="legend-item"><span class="legend-dot wrong"></span> Sai (${wrongCount})</div>
        <div class="legend-item"><span class="legend-dot unanswered" style="border: 1px dashed #94a3b8;"></span> Chưa làm (${unansweredCount})</div>
      `;
    } else {
      legendEl.innerHTML = `
        <div class="legend-item"><span class="legend-dot answered"></span> Đã làm (<span id="answered-count">${totalAnswered} / ${EXAM_QUESTIONS.length}</span>)</div>
        <div class="legend-item"><span class="legend-dot flagged"></span> Đánh dấu (<span id="flagged-count">${flaggedQuestions.size}</span>)</div>
        <div class="legend-item"><span class="legend-dot unanswered"></span> Chưa làm</div>
      `;
    }
  }
}

function updateProgress() {
  const total = EXAM_QUESTIONS.length;
  const answered = Object.keys(userAnswers).length;
  const pct = Math.round((answered / total) * 100);
  progressFill.style.width = `${pct}%`;
  progressText.textContent = `Tiến độ: ${answered}/${total} câu (${pct}%)`;
}

// Submission & Results
function confirmSubmitExam() {
  const total = EXAM_QUESTIONS.length;
  const answered = Object.keys(userAnswers).length;
  const unanswered = total - answered;

  let msg = `Bạn đã hoàn thành ${answered}/${total} câu hỏi.`;
  if (unanswered > 0) {
    msg += `\nCòn ${unanswered} câu chưa trả lời!`;
  }
  msg += `\nBạn có chắc chắn muốn nộp bài ngay bây giờ?`;

  if (confirm(msg)) {
    submitExam();
  }
}

function submitExam() {
  if (examTimer) {
    clearInterval(examTimer);
    examTimer = null;
  }
  isExamSubmitted = true;
  isExamPaused = false;
  updateTimerButton();
  stopSpeaking();
  playChime('success');

  let correctCount = 0;
  let wrongCount = 0;
  let unansweredCount = 0;

  EXAM_QUESTIONS.forEach(q => {
    if (userAnswers[q.id] === undefined) {
      unansweredCount++;
    } else if (userAnswers[q.id] === q.correct) {
      correctCount++;
    } else {
      wrongCount++;
    }
  });

  const score10 = ((correctCount / EXAM_QUESTIONS.length) * 10).toFixed(2);
  const pct = Math.round((correctCount / EXAM_QUESTIONS.length) * 100);
  const totalExamSeconds = EXAM_DURATION_MINUTES * 60;
  const timeUsed = Math.max(0, totalExamSeconds - timeRemaining);
  const minUsed = Math.floor(timeUsed / 60);
  const secUsed = timeUsed % 60;
  const timeUsedStr = `${minUsed}p ${secUsed.toString().padStart(2, '0')}s`;

  document.getElementById('modal-score-num').textContent = score10;
  document.getElementById('modal-correct-count').textContent = `${correctCount}/${EXAM_QUESTIONS.length}`;
  document.getElementById('modal-pct').textContent = `${pct}%`;
  document.getElementById('modal-time-used').textContent = timeUsedStr;

  let rankText = "ĐẠT YÊU CẦU";
  if (score10 >= 8.5) rankText = "XUẤT SẮC - ĐỖ CAO";
  else if (score10 >= 7.0) rankText = "GIỎI";
  else if (score10 >= 5.5) rankText = "KHÁ";
  else if (score10 < 4.0) rankText = "CHƯA ĐẠT (CẦN ÔN LẠI)";
  document.getElementById('modal-rank').textContent = rankText;

  // Auto-save this completed exam to history
  const examRecord = {
    id: 'exam_' + Date.now(),
    timestamp: Date.now(),
    dateStr: formatHistoryDate(new Date()),
    score10: parseFloat(score10),
    pct: pct,
    correctCount: correctCount,
    wrongCount: wrongCount,
    unansweredCount: unansweredCount,
    totalQuestions: EXAM_QUESTIONS.length,
    timeUsedSec: timeUsed,
    timeUsedStr: timeUsedStr,
    rankText: rankText,
    note: '',
    noteUpdatedAt: null,
    questions: EXAM_QUESTIONS.map((q, idx) => ({
      id: q.id,
      examNum: idx + 1,
      chapter: q.chapter,
      source: q.source || "BYT",
      sourceName: q.sourceName || "Bộ Y tế (Chuẩn Quốc gia)",
      question: q.question,
      options: q.options,
      correct: q.correct,
      userAnswer: userAnswers[q.id] !== undefined ? userAnswers[q.id] : null,
      isCorrect: userAnswers[q.id] === q.correct,
      isFlagged: flaggedQuestions.has(q.id),
      explanation: q.explanation,
      reference: q.reference
    }))
  };

  saveExamRecord(examRecord);
  lastSubmittedExamId = examRecord.id;
  saveExamDraft();
  updateCoverageDisplays();

  openResultsModal();
  renderExamQuestion(currentQuestionIndex);
}

function openResultsModal() {
  resultsModal.classList.add('active');
  const input = document.getElementById('modal-quick-note-input');
  if (input) input.value = '';
  const msg = document.getElementById('modal-quick-note-msg');
  if (msg) msg.style.display = 'none';
}

function saveQuickNoteFromResultsModal() {
  if (!lastSubmittedExamId) return;
  const input = document.getElementById('modal-quick-note-input');
  if (!input) return;
  const val = input.value.trim();
  saveExamNote(lastSubmittedExamId, val, false);
  const msg = document.getElementById('modal-quick-note-msg');
  if (msg) {
    msg.style.display = 'block';
    msg.textContent = val ? '✓ Đã lưu ghi chú cho đề thi này!' : '✓ Đã xóa ghi chú!';
  }
  showToast('📝 Đã lưu ghi chú bài thi!');
  playChime('click');
}

function closeResultsModal() {
  resultsModal.classList.remove('active');
}
// ==========================================
// TOPIC STUDY MODE (Luyện Theo Chuyên Đề - Mobile First)
// ==========================================
let topicStatusFilter = 'all'; // 'all' | 'unanswered' | 'wrong' | 'correct'
let topicSearchQuery = '';
let topicVisibleLimit = 25; // Pagination limit for mobile speed
const STORAGE_STUDY_ANSWERS_KEY = 'dls_study_answers_v2';
const STORAGE_TOPIC_ORDER_KEY = 'dls_topic_order_v1';
let topicCustomOrder = {};

function showToast(message, duration = 2500) {
  let toastEl = document.getElementById('app-toast');
  if (!toastEl) {
    toastEl = document.createElement('div');
    toastEl.id = 'app-toast';
    toastEl.className = 'app-toast';
    document.body.appendChild(toastEl);
  }
  toastEl.textContent = message;
  toastEl.classList.add('show');
  if (toastEl._timeout) clearTimeout(toastEl._timeout);
  toastEl._timeout = setTimeout(() => {
    toastEl.classList.remove('show');
  }, duration);
}

function loadStudyAnswers() {
  try {
    // Clean up legacy v1 answers from the old un-shuffled bank
    if (localStorage.getItem('dls_study_answers_v1')) {
      localStorage.removeItem('dls_study_answers_v1');
    }
    const raw = localStorage.getItem(STORAGE_STUDY_ANSWERS_KEY);
    if (raw) studyAnswers = JSON.parse(raw);
  } catch (e) {}
}

function saveStudyAnswers() {
  try {
    localStorage.setItem(STORAGE_STUDY_ANSWERS_KEY, JSON.stringify(studyAnswers));
  } catch (e) {}
}

function loadTopicCustomOrder() {
  try {
    const raw = localStorage.getItem(STORAGE_TOPIC_ORDER_KEY);
    if (raw) topicCustomOrder = JSON.parse(raw);
  } catch (e) {}
}

function saveTopicCustomOrder() {
  try {
    localStorage.setItem(STORAGE_TOPIC_ORDER_KEY, JSON.stringify(topicCustomOrder));
  } catch (e) {}
}

function getTopicChapterStats() {
  let baseList = activeTopicFilter === 'Tất cả'
    ? ALL_EXAM_BANK
    : ALL_EXAM_BANK.filter(q => q.chapter === activeTopicFilter);

  if (topicSourceFilter && topicSourceFilter !== 'all') {
    baseList = baseList.filter(q => q.source === topicSourceFilter);
  }

  const total = baseList.length;
  let correct = 0;
  let wrong = 0;
  baseList.forEach(q => {
    const ans = studyAnswers[q.id];
    if (ans !== undefined) {
      if (ans === q.correct) correct++;
      else wrong++;
    }
  });
  const answered = correct + wrong;
  const unanswered = total - answered;
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
  return { total, answered, correct, wrong, unanswered, pct };
}

function getFilteredTopicQuestions() {
  let list = activeTopicFilter === 'Tất cả'
    ? ALL_EXAM_BANK
    : ALL_EXAM_BANK.filter(q => q.chapter === activeTopicFilter);

  if (topicSourceFilter && topicSourceFilter !== 'all') {
    list = list.filter(item => item.source === topicSourceFilter);
  }

  // If a custom shuffled question order exists for this topic
  if (topicCustomOrder[activeTopicFilter] && Array.isArray(topicCustomOrder[activeTopicFilter])) {
    const orderMap = new Map();
    topicCustomOrder[activeTopicFilter].forEach((id, idx) => orderMap.set(id, idx));
    list = [...list].sort((a, b) => {
      const idxA = orderMap.has(a.id) ? orderMap.get(a.id) : 99999;
      const idxB = orderMap.has(b.id) ? orderMap.get(b.id) : 99999;
      return idxA - idxB;
    });
  }

  if (topicSearchQuery) {
    const q = topicSearchQuery.toLowerCase().trim();
    list = list.filter(item => 
      item.question.toLowerCase().includes(q) ||
      item.options.some(opt => opt.toLowerCase().includes(q)) ||
      (item.explanation && item.explanation.toLowerCase().includes(q))
    );
  }

  if (topicStatusFilter === 'unanswered') {
    list = list.filter(item => studyAnswers[item.id] === undefined);
  } else if (topicStatusFilter === 'wrong') {
    list = list.filter(item => studyAnswers[item.id] !== undefined && studyAnswers[item.id] !== item.correct);
  } else if (topicStatusFilter === 'correct') {
    list = list.filter(item => studyAnswers[item.id] === item.correct);
  }

  return list;
}

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
];

const TOPIC_CHIP_LABELS_44H = {
  "Tất cả": "Tất cả",
  "Đại cương DLS & Thông tin thuốc": "Bài 1 & 5: Đại Cương DLS & TT Thuốc (6h)",
  "Dược động học & Suy gan, thận": "Bài 2: DĐH ở BN Suy Gan, Thận (2h)",
  "Tương tác thuốc & Tương kỵ": "Bài 3: Tương Tác Thuốc (4h)",
  "ADR, Dị ứng & Sốc phản vệ": "Bài 4: ADR & Dị Ứng Thuốc (4h)",
  "Xét nghiệm lâm sàng & Nhận định KQ": "Bài 6: Xét Nghiệm Lâm Sàng (4h)",
  "Sử dụng thuốc ở Trẻ em": "Bài 7: SD Thuốc ở Trẻ Em (2h)",
  "Sử dụng thuốc ở Người cao tuổi": "Bài 8: SD Thuốc ở Người Cao Tuổi (1h)",
  "Sử dụng thuốc ở Phụ nữ có thai & CCB": "Bài 9: SD Thuốc ở PNCT & CCB (3h)",
  "Kháng sinh & Kháng sinh dự phòng": "Bài 11: N/tắc Dùng Kháng Sinh (4h)",
  "Glucocorticoid & Phác đồ điều trị": "Bài 12: N/tắc Dùng Glucocorticoid (4h)",
  "Thuốc giảm đau": "Bài 13: Thuốc Giảm Đau (2h)",
  "Vitamin và chất khoáng": "Bài 14: Vitamin & Khoáng Chất (2h)",
  "Điều trị Tăng huyết áp & Cấp cứu THA": "Bài 15: Điều Trị Tăng Huyết Áp (2h)",
  "Tiêu chảy cấp ở trẻ em": "Bài 16: Điều Trị Tiêu Chảy Cấp / TE (4h)",
  "Hen phế quản & COPD": "Bài 17: Thuốc Trong COPD (0h - Đọc Thêm)",
  "Loãng xương, Tránh thai & Chuyển hóa": "Tham khảo mở rộng: Loãng Xương (Không thi)"
};

function renderTopicStudyView() {
  const container = document.getElementById('view-topic');
  if (!container) return;

  const chapters = TOPIC_ORDER_44H;
  const stats = getTopicChapterStats();
  const filteredQuestions = getFilteredTopicQuestions();
  const visibleQuestions = filteredQuestions.slice(0, topicVisibleLimit);
  const isOrderShuffled = !!(topicCustomOrder[activeTopicFilter] && topicCustomOrder[activeTopicFilter].length);

  // 1. HORIZONTAL SWIPEABLE CHAPTER RIBBON
  let chipsHtml = `<div class="topic-ribbon-container">
    <div class="topic-selector-bar">`;
  chapters.forEach(top => {
    const count = top === 'Tất cả' ? ALL_EXAM_BANK.length : ALL_EXAM_BANK.filter(q => q.chapter === top).length;
    const label = TOPIC_CHIP_LABELS_44H[top] || top;
    chipsHtml += `
      <button class="topic-chip ${top === activeTopicFilter ? 'active' : ''}" data-topic="${top.replace(/"/g, '&quot;')}" onclick="filterTopic('${top.replace(/'/g, "\\'")}')">
        <span>${label}</span>
        <span class="chip-count">${count}</span>
      </button>
    `;
  });
  chipsHtml += `</div></div>`;

  // 1b. SCHOOL SOURCE FILTER RIBBON
  const schoolOptions = [
    { id: 'all', label: 'Tất cả nguồn' },
    { id: 'HUP', label: '🏛️ ĐH Dược Hà Nội' },
    { id: 'UMP', label: '🏛️ ĐH Y Dược TP.HCM' },
    { id: 'HMU', label: '🏛️ ĐH Y Hà Nội' },
    { id: 'BYT', label: '📋 Chuẩn Bộ Y tế' }
  ];

  const basePoolForCount = activeTopicFilter === 'Tất cả'
    ? ALL_EXAM_BANK
    : ALL_EXAM_BANK.filter(q => q.chapter === activeTopicFilter);

  let schoolPillsHtml = `
    <div class="school-filter-ribbon">
  `;
  schoolOptions.forEach(opt => {
    const count = (opt.id === 'all')
      ? basePoolForCount.length
      : basePoolForCount.filter(q => q.source === opt.id).length;
    const isActive = topicSourceFilter === opt.id;
    schoolPillsHtml += `
      <button class="school-pill ${isActive ? 'active' : ''}" onclick="setTopicSourceFilter('${opt.id}')">
        ${opt.label} (${count})
      </button>
    `;
  });
  schoolPillsHtml += `</div>`;

  // 2. MOBILE TOPIC DASHBOARD
  const displayTitle = TOPIC_CHIP_LABELS_44H[activeTopicFilter] || activeTopicFilter;
  const dashboardHtml = `
    <div class="topic-dashboard">
      <div class="topic-dash-header">
        <div class="topic-dash-title-wrap">
          <div class="topic-dash-title">${displayTitle}</div>
          <div class="topic-dash-sub" id="topic-progress-text">Tiến độ: ${stats.answered}/${stats.total} câu (${stats.pct}% đúng)</div>
        </div>
        <div class="topic-dash-actions">
          <button class="btn-topic-shuffle ${isOrderShuffled ? 'active' : ''}" onclick="shuffleTopicQuestions()" title="Xáo trộn ngẫu nhiên thứ tự các câu hỏi trong chuyên đề này">
            <span>🔀</span> Đảo câu
          </button>
          ${isOrderShuffled ? `
            <button class="btn-topic-subaction" onclick="resetTopicQuestionOrder()" title="Khôi phục lại thứ tự câu hỏi gốc (1, 2, 3...)">
              <span>🔢</span> Gốc
            </button>
          ` : ''}
          <button class="btn-topic-shuffle" onclick="shuffleTopicOptions()" title="Xáo trộn ngẫu nhiên vị trí các đáp án A/B/C/D">
            <span>🔀</span> Đảo đáp án
          </button>
          <button class="btn-topic-reset" onclick="resetTopicAnswers('${activeTopicFilter.replace(/'/g, "\\'")}')" title="Xóa kết quả đã làm của chuyên đề này để làm lại từ đầu">
            <span>🔄</span> Làm lại
          </button>
        </div>
      </div>

      <div class="topic-progress-track">
        <div class="topic-progress-fill" id="topic-progress-fill" style="width: ${stats.total > 0 ? Math.min(100, Math.round((stats.answered / stats.total) * 100)) : 0}%"></div>
      </div>

      <div class="topic-stats-row">
        <div class="topic-stat-item correct">
          <span class="stat-dot"></span>
          <span class="stat-val" id="topic-count-correct">${stats.correct}</span>
          <span class="stat-lbl">Đúng</span>
        </div>
        <div class="topic-stat-item wrong">
          <span class="stat-dot"></span>
          <span class="stat-val" id="topic-count-wrong">${stats.wrong}</span>
          <span class="stat-lbl">Chưa đúng</span>
        </div>
        <div class="topic-stat-item unanswered">
          <span class="stat-dot"></span>
          <span class="stat-val" id="topic-count-unanswered">${stats.unanswered}</span>
          <span class="stat-lbl">Chưa làm</span>
        </div>
      </div>

      <!-- FILTER PILLS & SEARCH -->
      <div class="topic-controls-bar">
        <div class="topic-filter-pills">
          <button class="topic-pill ${topicStatusFilter === 'all' ? 'active' : ''}" onclick="setTopicStatusFilter('all')">
            Tất cả (<span id="topic-pill-count-all">${stats.total}</span>)
          </button>
          <button class="topic-pill pill-unanswered ${topicStatusFilter === 'unanswered' ? 'active' : ''}" onclick="setTopicStatusFilter('unanswered')">
            ⚪ Chưa làm (<span id="topic-pill-count-unanswered">${stats.unanswered}</span>)
          </button>
          <button class="topic-pill pill-wrong ${topicStatusFilter === 'wrong' ? 'active' : ''}" onclick="setTopicStatusFilter('wrong')">
            ❌ Sai (<span id="topic-pill-count-wrong">${stats.wrong}</span>)
          </button>
          <button class="topic-pill pill-correct ${topicStatusFilter === 'correct' ? 'active' : ''}" onclick="setTopicStatusFilter('correct')">
            ✅ Đúng (<span id="topic-pill-count-correct">${stats.correct}</span>)
          </button>
        </div>

        <div class="topic-search-wrap">
          <span class="search-icon">🔍</span>
          <input type="text" class="topic-search-input" id="topic-search-input" placeholder="Tìm câu hỏi, thuốc, phác đồ trong chuyên đề..." value="${topicSearchQuery}" oninput="onTopicSearchInput(this.value)">
          ${topicSearchQuery ? `<button class="search-clear-btn" onclick="clearTopicSearch()">✕</button>` : ''}
        </div>
      </div>
    </div>
  `;

  // 3. QUESTIONS LIST CONTAINER
  let listHtml = `<div class="topic-questions-container" id="topic-questions-list">`;
  listHtml += renderTopicQuestionCardsHtml(visibleQuestions);
  listHtml += `</div>`;

  // 4. LOAD MORE BUTTON
  let loadMoreHtml = '';
  if (filteredQuestions.length > topicVisibleLimit) {
    const remaining = filteredQuestions.length - topicVisibleLimit;
    loadMoreHtml = `
      <div class="topic-load-more-wrap" id="topic-load-more-wrap">
        <button class="btn btn-secondary btn-load-more" onclick="loadMoreTopicQuestions()">
          📥 Xem thêm 25 câu tiếp theo (Đang hiện ${visibleQuestions.length}/${filteredQuestions.length} câu • Còn ${remaining} câu)
        </button>
      </div>
    `;
  }

  container.innerHTML = chipsHtml + schoolPillsHtml + dashboardHtml + listHtml + loadMoreHtml;

  // Auto-center active chapter chip in the horizontal ribbon
  setTimeout(() => {
    const activeChip = container.querySelector('.topic-chip.active');
    if (activeChip) {
      activeChip.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, 40);
}

function setTopicSourceFilter(src) {
  topicSourceFilter = src;
  topicVisibleLimit = 25;
  renderTopicStudyView();
  playChime('click');
}

function renderTopicQuestionCardsHtml(questionsList) {
  if (!questionsList || questionsList.length === 0) {
    return `
      <div class="topic-empty-card">
        <div style="font-size: 2.2rem; margin-bottom: 0.5rem;">🎯</div>
        <div style="font-weight: 700; font-size: 1.05rem; color: var(--text-main);">Không tìm thấy câu hỏi phù hợp!</div>
        <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.25rem;">
          Thử chuyển bộ lọc "Tất cả" hoặc xóa từ khóa tìm kiếm.
        </div>
      </div>
    `;
  }

  const letters = ['A', 'B', 'C', 'D'];
  return questionsList.map((q, idx) => {
    const ans = studyAnswers[q.id];
    const isAnswered = ans !== undefined;
    const isCorrect = ans === q.correct;

    let badgeStatusHtml = '';
    if (isAnswered) {
      badgeStatusHtml = isCorrect 
        ? `<span class="study-badge-tag correct">✓ Đúng</span>`
        : `<span class="study-badge-tag wrong">✗ Sai</span>`;
    } else {
      badgeStatusHtml = `<span class="study-badge-tag unanswered">Chưa làm</span>`;
    }

    let optionsHtml = '';
    q.options.forEach((opt, oIdx) => {
      let state = '';
      if (isAnswered) {
        if (oIdx === q.correct) state = 'correct';
        else if (ans === oIdx) state = 'incorrect';
      }

      optionsHtml += `
        <div class="option-item ${state}" onclick="selectStudyOption(${q.id}, ${oIdx})">
          <div class="option-letter">${letters[oIdx]}</div>
          <div class="option-text">${opt}</div>
        </div>
      `;
    });

    let expHtml = '';
    if (isAnswered) {
      expHtml = `
        <div class="explanation-box">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.25rem;">
            <div class="explanation-header" style="color: ${isCorrect ? 'var(--primary)' : 'var(--danger)'}">
              ${isCorrect ? '✓ CHÍNH XÁC' : '✗ CHƯA ĐÚNG'} • ĐÁP ÁN: ${letters[q.correct]}
            </div>
            <div style="display: flex; gap: 0.35rem; align-items: center;">
              <button class="btn-speak-exp" onclick="speakExplanationFromCard(this)" title="Nghe đọc giải thích lâm sàng bằng giọng tiếng Việt">
                <span>🔊</span> Đọc giải thích
              </button>
              <button class="btn-speak-settings" onclick="openTtsSettingsModal()" title="Cài đặt giọng đọc &amp; tốc độ" aria-label="Cài đặt giọng đọc">⚙️</button>
            </div>
          </div>
          <div class="explanation-content">${q.explanation}</div>
          <div class="explanation-ref">📖 Nguồn: ${q.reference || 'Giáo trình Dược lâm sàng - Bộ Y tế'}</div>
        </div>
      `;
    }

    return `
      <div class="question-card topic-question-card" data-qid="${q.id}">
        <div class="question-meta">
          <span class="badge badge-num">Câu ${idx + 1} (Mã #${q.id})</span>
          <span class="badge badge-category">${q.chapter}</span>
          ${renderSourceBadge(q.source, q.sourceName)}
          <div class="topic-status-badge-wrap" style="margin-left: auto;">
            ${badgeStatusHtml}
          </div>
        </div>
        <div class="question-title" style="font-size: 1.02rem;">
          ${q.question}
        </div>
        <div class="options-list">
          ${optionsHtml}
        </div>
        ${expHtml}
      </div>
    `;
  }).join('');
}

// IN-PLACE DOM OPTION SELECTION (ZERO SCROLL JUMPING ON MOBILE)
function selectStudyOption(qId, oIdx) {
  studyAnswers[qId] = oIdx;
  saveStudyAnswers();

  const q = ALL_EXAM_BANK.find(item => item.id === qId);
  if (!q) return;

  const isCorrect = oIdx === q.correct;
  playChime(isCorrect ? 'success' : 'click');

  updateStudyCardDOM(qId, oIdx, q);
  updateTopicStatsBar();
}

function updateStudyCardDOM(qId, oIdx, q) {
  const card = document.querySelector(`.topic-question-card[data-qid="${qId}"]`);
  if (!card) return;

  const letters = ['A', 'B', 'C', 'D'];
  const isCorrect = oIdx === q.correct;

  // 1. Update options
  const optionEls = card.querySelectorAll('.option-item');
  optionEls.forEach((el, idx) => {
    el.classList.remove('correct', 'incorrect');
    if (idx === q.correct) {
      el.classList.add('correct');
    } else if (idx === oIdx) {
      el.classList.add('incorrect');
    }
  });

  // 2. Update status badge
  const badgeWrap = card.querySelector('.topic-status-badge-wrap');
  if (badgeWrap) {
    badgeWrap.innerHTML = isCorrect 
      ? `<span class="study-badge-tag correct">✓ Đúng</span>`
      : `<span class="study-badge-tag wrong">✗ Sai</span>`;
  }

  // 3. Update or create explanation box
  let expBox = card.querySelector('.explanation-box');
  if (!expBox) {
    expBox = document.createElement('div');
    expBox.className = 'explanation-box';
    card.appendChild(expBox);
  }

  expBox.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.25rem;">
      <div class="explanation-header" style="color: ${isCorrect ? 'var(--primary)' : 'var(--danger)'}">
        ${isCorrect ? '✓ CHÍNH XÁC' : '✗ CHƯA ĐÚNG'} • ĐÁP ÁN: ${letters[q.correct]}
      </div>
      <div style="display: flex; gap: 0.35rem; align-items: center;">
        <button class="btn-speak-exp" onclick="speakExplanationFromCard(this)" title="Nghe đọc giải thích lâm sàng bằng giọng tiếng Việt">
          <span>🔊</span> Đọc giải thích
        </button>
        <button class="btn-speak-settings" onclick="openTtsSettingsModal()" title="Cài đặt giọng đọc &amp; tốc độ" aria-label="Cài đặt giọng đọc">⚙️</button>
      </div>
    </div>
    <div class="explanation-content">${q.explanation}</div>
    <div class="explanation-ref">📖 Nguồn: ${q.reference || 'Giáo trình Dược lâm sàng - Bộ Y tế'}</div>
  `;
}

function updateTopicStatsBar() {
  const stats = getTopicChapterStats();
  const fill = document.getElementById('topic-progress-fill');
  const text = document.getElementById('topic-progress-text');
  const countCorrect = document.getElementById('topic-count-correct');
  const countWrong = document.getElementById('topic-count-wrong');
  const countUnanswered = document.getElementById('topic-count-unanswered');
  const pillAll = document.getElementById('topic-pill-count-all');
  const pillUnanswered = document.getElementById('topic-pill-count-unanswered');
  const pillWrong = document.getElementById('topic-pill-count-wrong');
  const pillCorrect = document.getElementById('topic-pill-count-correct');

  if (fill) fill.style.width = `${stats.total > 0 ? Math.min(100, Math.round((stats.answered / stats.total) * 100)) : 0}%`;
  if (text) text.textContent = `Tiến độ: ${stats.answered}/${stats.total} câu (${stats.pct}% đúng)`;
  if (countCorrect) countCorrect.textContent = `${stats.correct}`;
  if (countWrong) countWrong.textContent = `${stats.wrong}`;
  if (countUnanswered) countUnanswered.textContent = `${stats.unanswered}`;
  if (pillAll) pillAll.textContent = `${stats.total}`;
  if (pillUnanswered) pillUnanswered.textContent = `${stats.unanswered}`;
  if (pillWrong) pillWrong.textContent = `${stats.wrong}`;
  if (pillCorrect) pillCorrect.textContent = `${stats.correct}`;
}

function updateTopicDashboardStats() {
  updateTopicStatsBar();
}

function filterTopic(topic) {
  activeTopicFilter = topic;
  topicVisibleLimit = 25;
  topicSearchQuery = '';
  try {
    localStorage.setItem('dls_active_topic', topic);
  } catch (e) {}
  playChime('click');

  const container = document.getElementById('view-topic');
  const selectorBar = container ? container.querySelector('.topic-selector-bar') : null;
  const listEl = document.getElementById('topic-questions-list');

  // If already rendered, do in-place smooth update without destroying the ribbon!
  if (selectorBar && listEl) {
    // 1. Update chip active state and center smoothly in view
    container.querySelectorAll('.topic-chip').forEach(chip => {
      const match = chip.dataset.topic === topic;
      chip.classList.toggle('active', match);
      if (match) {
        chip.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    });

    // 2. Update dashboard title and actions
    const titleEl = container.querySelector('.topic-dash-title');
    if (titleEl) titleEl.textContent = TOPIC_CHIP_LABELS_44H[topic] || topic;

    const resetBtn = container.querySelector('.btn-topic-reset');
    if (resetBtn) resetBtn.setAttribute('onclick', `resetTopicAnswers('${topic.replace(/'/g, "\\'")}')`);

    const isOrderShuffled = !!(topicCustomOrder[topic] && topicCustomOrder[topic].length);
    const shuffleBtn = container.querySelector('.btn-topic-shuffle');
    if (shuffleBtn) shuffleBtn.classList.toggle('active', isOrderShuffled);

    // 3. Update stats & progress
    updateTopicStatsBar();

    // 4. Update questions list
    const filteredQuestions = getFilteredTopicQuestions();
    const visibleQuestions = filteredQuestions.slice(0, topicVisibleLimit);
    listEl.innerHTML = renderTopicQuestionCardsHtml(visibleQuestions);

    // 5. Update load more button
    const loadMoreWrap = document.getElementById('topic-load-more-wrap');
    if (loadMoreWrap) {
      if (filteredQuestions.length > topicVisibleLimit) {
        const remaining = filteredQuestions.length - topicVisibleLimit;
        loadMoreWrap.style.display = 'block';
        loadMoreWrap.innerHTML = `
          <button class="btn btn-secondary btn-load-more" onclick="loadMoreTopicQuestions()">
            📥 Xem thêm 25 câu tiếp theo (Đang hiện ${visibleQuestions.length}/${filteredQuestions.length} câu • Còn ${remaining} câu)
          </button>
        `;
      } else {
        loadMoreWrap.style.display = 'none';
      }
    }

    // 6. Reset search input value if any
    const searchInput = document.getElementById('topic-search-input');
    if (searchInput) searchInput.value = '';

    // 7. If user is scrolled far down, smoothly scroll to top of questions
    const dashboard = container.querySelector('.topic-dashboard');
    if (dashboard && window.scrollY > dashboard.offsetTop + 100) {
      dashboard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    return;
  }

  // Otherwise full render
  renderTopicStudyView();
}

function setTopicStatusFilter(filter) {
  topicStatusFilter = filter;
  topicVisibleLimit = 25;
  playChime('click');

  const container = document.getElementById('view-topic');
  const listEl = document.getElementById('topic-questions-list');
  if (container && listEl) {
    container.querySelectorAll('.topic-pill').forEach(pill => {
      pill.classList.toggle('active', pill.getAttribute('onclick')?.includes(`'${filter}'`));
    });
    const filteredQuestions = getFilteredTopicQuestions();
    const visibleQuestions = filteredQuestions.slice(0, topicVisibleLimit);
    listEl.innerHTML = renderTopicQuestionCardsHtml(visibleQuestions);

    const loadMoreWrap = document.getElementById('topic-load-more-wrap');
    if (loadMoreWrap) {
      if (filteredQuestions.length > topicVisibleLimit) {
        const remaining = filteredQuestions.length - topicVisibleLimit;
        loadMoreWrap.style.display = 'block';
        loadMoreWrap.innerHTML = `
          <button class="btn btn-secondary btn-load-more" onclick="loadMoreTopicQuestions()">
            📥 Xem thêm 25 câu tiếp theo (Đang hiện ${visibleQuestions.length}/${filteredQuestions.length} câu • Còn ${remaining} câu)
          </button>
        `;
      } else {
        loadMoreWrap.style.display = 'none';
      }
    }
    return;
  }
  renderTopicStudyView();
}

function onTopicSearchInput(val) {
  topicSearchQuery = val;
  topicVisibleLimit = 25;
  const listEl = document.getElementById('topic-questions-list');
  const loadMoreWrap = document.getElementById('topic-load-more-wrap');
  const filtered = getFilteredTopicQuestions();
  const visible = filtered.slice(0, topicVisibleLimit);

  if (listEl) {
    listEl.innerHTML = renderTopicQuestionCardsHtml(visible);
  }
  if (loadMoreWrap) {
    if (filtered.length > topicVisibleLimit) {
      loadMoreWrap.style.display = 'block';
      loadMoreWrap.innerHTML = `
        <button class="btn btn-secondary btn-load-more" onclick="loadMoreTopicQuestions()">
          📥 Xem thêm 25 câu tiếp theo (Đang hiện ${visible.length}/${filtered.length} câu)
        </button>
      `;
    } else {
      loadMoreWrap.style.display = 'none';
    }
  }
}

function clearTopicSearch() {
  topicSearchQuery = '';
  renderTopicStudyView();
}

function loadMoreTopicQuestions() {
  topicVisibleLimit += 25;
  const listEl = document.getElementById('topic-questions-list');
  const loadMoreWrap = document.getElementById('topic-load-more-wrap');
  const filtered = getFilteredTopicQuestions();
  const visible = filtered.slice(0, topicVisibleLimit);

  if (listEl) {
    listEl.innerHTML = renderTopicQuestionCardsHtml(visible);
  }
  if (loadMoreWrap) {
    if (filtered.length > topicVisibleLimit) {
      const remaining = filtered.length - topicVisibleLimit;
      loadMoreWrap.innerHTML = `
        <button class="btn btn-secondary btn-load-more" onclick="loadMoreTopicQuestions()">
          📥 Xem thêm 25 câu tiếp theo (Đang hiện ${visible.length}/${filtered.length} câu • Còn ${remaining} câu)
        </button>
      `;
    } else {
      loadMoreWrap.style.display = 'none';
    }
  }
}

function shuffleTopicQuestions() {
  const baseQuestions = activeTopicFilter === 'Tất cả'
    ? ALL_EXAM_BANK
    : ALL_EXAM_BANK.filter(q => q.chapter === activeTopicFilter);

  if (!baseQuestions || !baseQuestions.length) return;

  const ids = baseQuestions.map(q => q.id);
  topicCustomOrder[activeTopicFilter] = shuffle(ids);
  saveTopicCustomOrder();

  playChime('click');
  renderTopicStudyView();
  showToast('🔀 Đã đảo ngẫu nhiên thứ tự các câu hỏi!');
}

function resetTopicQuestionOrder() {
  if (topicCustomOrder[activeTopicFilter]) {
    delete topicCustomOrder[activeTopicFilter];
    saveTopicCustomOrder();
  }
  playChime('click');
  renderTopicStudyView();
  showToast('🔢 Đã khôi phục lại thứ tự câu hỏi gốc (1, 2, 3...)!');
}

function shuffleTopicOptions() {
  const targetQuestions = activeTopicFilter === 'Tất cả'
    ? ALL_EXAM_BANK
    : ALL_EXAM_BANK.filter(q => q.chapter === activeTopicFilter);

  if (!targetQuestions || !targetQuestions.length) return;

  targetQuestions.forEach(q => {
    const correctText = q.options[q.correct];
    const prevAnsweredIdx = studyAnswers[q.id];
    const prevAnsweredText = prevAnsweredIdx !== undefined ? q.options[prevAnsweredIdx] : null;

    // Shuffle options using Fisher-Yates
    const shuffledOpts = shuffle(q.options);
    const newCorrectIdx = shuffledOpts.indexOf(correctText);
    q.options = shuffledOpts;
    q.correct = newCorrectIdx;

    // Remap user's answered choice so study stats and checks remain valid
    if (prevAnsweredText !== null) {
      const newAnsweredIdx = shuffledOpts.indexOf(prevAnsweredText);
      if (newAnsweredIdx !== -1) {
        studyAnswers[q.id] = newAnsweredIdx;
      }
    }
  });

  saveStudyAnswers();
  playChime('click');
  renderTopicStudyView();
  showToast('🔀 Đã đảo ngẫu nhiên vị trí các đáp án A, B, C, D!');
}

function resetTopicAnswers(chapter) {
  const targetName = chapter === 'Tất cả' ? 'toàn bộ các chuyên đề' : `chuyên đề "${chapter}"`;
  if (!confirm(`Bạn có chắc chắn muốn xóa tiến độ đã làm của ${targetName} để làm lại từ đầu không?`)) {
    return;
  }
  const targetQuestions = chapter === 'Tất cả'
    ? ALL_EXAM_BANK
    : ALL_EXAM_BANK.filter(q => q.chapter === chapter);

  if (chapter === 'Tất cả') {
    studyAnswers = {};
  } else {
    targetQuestions.forEach(q => {
      delete studyAnswers[q.id];
    });
  }

  // Also reshuffle options for a fresh practice experience
  targetQuestions.forEach(q => {
    const correctText = q.options[q.correct];
    const shuffledOpts = shuffle(q.options);
    q.options = shuffledOpts;
    q.correct = shuffledOpts.indexOf(correctText);
  });

  // If order was shuffled, also reshuffle question order for a fresh practice experience
  if (topicCustomOrder[chapter]) {
    const ids = targetQuestions.map(q => q.id);
    topicCustomOrder[chapter] = shuffle(ids);
    saveTopicCustomOrder();
  }

  saveStudyAnswers();
  playChime('click');
  renderTopicStudyView();
  showToast('🔄 Đã làm mới và đảo lại thứ tự câu hỏi & đáp án!');
}

// ==========================================
// FLASHCARD / CÂU HỎI TỦ (3D Interactive Flip & Rapid Recall)
// ==========================================
let flashcardMode = 'flip'; // 'flip' (3D Interactive Card Deck) | 'list' (Fast Quick Read)
let flashcardCurrentIndex = 0;
let activeFlashcardTopic = 'Tất cả';
let flashcardSearchQuery = '';
let flashcardStarredOnly = false;
let flashcardUnmasteredOnly = false;
let flashcardIsFlipped = false;
let flashcardShowAllAnswers = false;
let flashcardMastered = new Set();
let flashcardStarred = new Set();

const STORAGE_FC_MASTERED_KEY = 'dls_fc_mastered_v1';
const STORAGE_FC_STARRED_KEY = 'dls_fc_starred_v1';

function loadFlashcardState() {
  try {
    const m = localStorage.getItem(STORAGE_FC_MASTERED_KEY);
    if (m) flashcardMastered = new Set(JSON.parse(m));
    const s = localStorage.getItem(STORAGE_FC_STARRED_KEY);
    if (s) flashcardStarred = new Set(JSON.parse(s));
  } catch (e) {}
}

function saveFlashcardMastered() {
  try {
    localStorage.setItem(STORAGE_FC_MASTERED_KEY, JSON.stringify(Array.from(flashcardMastered)));
  } catch (e) {}
}

function saveFlashcardStarred() {
  try {
    localStorage.setItem(STORAGE_FC_STARRED_KEY, JSON.stringify(Array.from(flashcardStarred)));
  } catch (e) {}
}

function getFilteredFlashcards() {
  let list = FLASHCARD_DATA;
  if (activeFlashcardTopic !== 'Tất cả') {
    list = list.filter(item => item.topic === activeFlashcardTopic);
  }
  if (flashcardStarredOnly) {
    list = list.filter(item => flashcardStarred.has(item.id));
  }
  if (flashcardUnmasteredOnly) {
    list = list.filter(item => !flashcardMastered.has(item.id));
  }
  if (flashcardSearchQuery) {
    const q = flashcardSearchQuery.toLowerCase().trim();
    list = list.filter(item => 
      item.q.toLowerCase().includes(q) || 
      item.a.toLowerCase().includes(q) || 
      item.topic.toLowerCase().includes(q)
    );
  }
  return list;
}

function renderFlashcardView() {
  const container = document.getElementById('view-flashcards');
  if (!container) return;

  const topics = ["Tất cả", ...new Set(FLASHCARD_DATA.map(f => f.topic))];
  const list = getFilteredFlashcards();
  const masteredCount = flashcardMastered.size;
  const totalCount = FLASHCARD_DATA.length;
  const masteredPct = Math.round((masteredCount / totalCount) * 100);

  // Safety check on current index
  if (flashcardCurrentIndex >= list.length) {
    flashcardCurrentIndex = Math.max(0, list.length - 1);
  }

  // 1. TOP HEADER: MODE SWITCHER & MASTERY PROGRESS
  const headerHtml = `
    <div class="fc-header-card">
      <div class="fc-header-top">
        <div class="fc-mode-switcher">
          <button class="fc-mode-btn ${flashcardMode === 'flip' ? 'active' : ''}" onclick="switchFlashcardMode('flip')">
            <span>🎴</span> Thẻ Lật 3D
          </button>
          <button class="fc-mode-btn ${flashcardMode === 'list' ? 'active' : ''}" onclick="switchFlashcardMode('list')">
            <span>📋</span> Đọc Nhanh
          </button>
        </div>

        <div class="fc-mastery-badge">
          <span class="badge-star-icon">🏆</span>
          <span>Đã thuộc: <strong>${masteredCount}/${totalCount}</strong> (${masteredPct}%)</span>
        </div>
      </div>

      <div class="fc-mastery-track">
        <div class="fc-mastery-fill" style="width: ${masteredPct}%"></div>
      </div>
    </div>
  `;

  // 2. TOPIC FILTER RIBBON
  let ribbonHtml = `
    <div class="topic-ribbon-container">
      <div class="topic-selector-bar">
  `;
  topics.forEach(top => {
    const count = top === 'Tất cả' ? FLASHCARD_DATA.length : FLASHCARD_DATA.filter(f => f.topic === top).length;
    ribbonHtml += `
      <button class="topic-chip ${top === activeFlashcardTopic && !flashcardStarredOnly && !flashcardUnmasteredOnly ? 'active' : ''}" onclick="setFlashcardTopic('${top.replace(/'/g, "\\'")}')">
        <span>${top}</span>
        <span class="chip-count">${count}</span>
      </button>
    `;
  });
  ribbonHtml += `
      <button class="topic-chip chip-starred ${flashcardStarredOnly ? 'active' : ''}" onclick="toggleFlashcardFilter('starred')">
        <span>⭐ Đã dấu</span>
        <span class="chip-count">${flashcardStarred.size}</span>
      </button>
      <button class="topic-chip chip-unmastered ${flashcardUnmasteredOnly ? 'active' : ''}" onclick="toggleFlashcardFilter('unmastered')">
        <span>⏳ Chưa nhớ</span>
        <span class="chip-count">${totalCount - masteredCount}</span>
      </button>
    </div>
  </div>`;

  // 3. SEARCH BAR
  const searchHtml = `
    <div class="search-bar">
      <span style="font-size: 1.15rem;">🔍</span>
      <input type="text" class="search-input" id="fc-search-input" placeholder="Tìm câu hỏi tủ (ví dụ: alendronat, metformin, corticoid, sốc phản vệ...)" value="${flashcardSearchQuery}" oninput="onFlashcardSearchInput(this.value)">
      ${flashcardSearchQuery ? `<button class="search-clear-btn" onclick="clearFlashcardSearch()">✕</button>` : ''}
    </div>
  `;

  // 4. MAIN CONTENT (FLIP MODE OR LIST MODE)
  let contentHtml = '';
  if (flashcardMode === 'flip') {
    contentHtml = renderFlipCardSceneHtml(list);
  } else {
    contentHtml = renderFlashcardListHtml(list);
  }

  container.innerHTML = headerHtml + ribbonHtml + searchHtml + contentHtml;
}

// 3D FLIP CARD COMPONENT (Mobile Ergonomic)
function renderFlipCardSceneHtml(list) {
  if (!list || list.length === 0) {
    return `
      <div class="topic-empty-card" style="margin-top: 1rem;">
        <div style="font-size: 2.2rem; margin-bottom: 0.5rem;">🎴</div>
        <div style="font-weight: 700; font-size: 1.05rem; color: var(--text-main);">Không có thẻ câu hỏi nào trong mục này!</div>
        <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.25rem;">
          Thử chọn lại chuyên đề hoặc tắt bộ lọc "Đã dấu / Chưa nhớ".
        </div>
      </div>
    `;
  }

  const card = list[flashcardCurrentIndex];
  const isMastered = flashcardMastered.has(card.id);
  const isStarred = flashcardStarred.has(card.id);

  return `
    <div class="fc-scene-wrapper">
      <!-- CARD SCENE -->
      <div class="fc-3d-scene" onclick="flipCurrentCard()">
        <div class="fc-card ${flashcardIsFlipped ? 'flipped' : ''}" id="active-fc-card">
          
          <!-- FRONT FACE (QUESTION) -->
          <div class="fc-card-face fc-face-front">
            <div class="fc-face-header">
              <span class="fc-topic-tag">${card.topic} • Câu #${card.id}</span>
              <div class="fc-face-actions" onclick="event.stopPropagation()">
                <button class="fc-icon-btn ${isStarred ? 'starred' : ''}" onclick="toggleCurrentCardStarred()" title="Đánh dấu thẻ này">
                  ${isStarred ? '⭐' : '☆'}
                </button>
                <button class="fc-icon-btn" onclick="speakExplanation(this, '${card.q.replace(/'/g, "\\'")}')" title="Nghe đọc câu hỏi">
                  🔊
                </button>
              </div>
            </div>

            <div class="fc-q-content">
              <div class="fc-q-label">❓ CÂU HỎI LÂM SÀNG:</div>
              <div class="fc-q-text">${card.q}</div>
            </div>

            <div class="fc-face-footer">
              <span class="fc-hint-text">👆 Chạm vào thẻ để lật xem đáp án</span>
              <span class="fc-pos-badge">${flashcardCurrentIndex + 1} / ${list.length}</span>
            </div>
          </div>

          <!-- BACK FACE (ANSWER) -->
          <div class="fc-card-face fc-face-back">
            <div class="fc-face-header">
              <span class="fc-topic-tag back-tag">💡 ĐÁP ÁN & ĐIỂM CỐT LÕI</span>
              <div class="fc-face-actions" onclick="event.stopPropagation()">
                <button class="fc-icon-btn ${isStarred ? 'starred' : ''}" onclick="toggleCurrentCardStarred()" title="Đánh dấu thẻ này">
                  ${isStarred ? '⭐' : '☆'}
                </button>
                <button class="fc-icon-btn" onclick="speakExplanation(this, '${card.a.replace(/'/g, "\\'")}')" title="Nghe đọc đáp án">
                  🔊
                </button>
              </div>
            </div>

            <div class="fc-a-content">
              <div class="fc-a-text">${card.a}</div>
            </div>

            <div class="fc-face-footer">
              <span class="fc-hint-text">👆 Chạm để quay lại câu hỏi</span>
              <span class="fc-status-pill ${isMastered ? 'mastered' : ''}">
                ${isMastered ? '✅ Đã thuộc' : '⚪ Chưa nhớ'}
              </span>
            </div>
          </div>

        </div>
      </div>

      <!-- FLIP ACTION BUTTON & DECK CONTROLS (Ergonomic Thumb Bar) -->
      <div class="fc-dock-controls">
        <div class="fc-quick-actions">
          <button class="btn btn-secondary fc-btn-flip" onclick="flipCurrentCard()">
            <span>🔄</span> ${flashcardIsFlipped ? 'Quay lại câu hỏi' : 'Lật thẻ xem đáp án'}
          </button>
          <button class="btn btn-secondary fc-btn-shuffle" onclick="shuffleFlashcardDeck()" title="Xáo trộn ngẫu nhiên bộ thẻ">
            <span>🎲</span> Xáo trộn
          </button>
        </div>

        <div class="fc-nav-dock">
          <button class="fc-nav-btn prev" onclick="prevFlashcard()" ${flashcardCurrentIndex === 0 ? 'disabled' : ''}>
            <span>◀</span> Trước
          </button>

          <button class="fc-rate-btn unmastered" onclick="rateCurrentFlashcard(false)" title="Chưa nhớ vững - giữ thẻ để ôn lại">
            <span>❌</span> Chưa nhớ
          </button>

          <button class="fc-rate-btn mastered ${isMastered ? 'is-mastered' : ''}" onclick="rateCurrentFlashcard(true)" title="Đã thuộc câu này!">
            <span>✅</span> Đã thuộc!
          </button>

          <button class="fc-nav-btn next" onclick="nextFlashcard()" ${flashcardCurrentIndex === list.length - 1 ? 'disabled' : ''}>
            Tiếp <span>▶</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

// QUICK LIST MODE (Fast Scanning)
function renderFlashcardListHtml(list) {
  if (!list || list.length === 0) {
    return `
      <div class="topic-empty-card" style="margin-top: 1rem;">
        <div style="font-weight: 700; color: var(--text-main);">Không tìm thấy câu hỏi phù hợp!</div>
      </div>
    `;
  }

  const listItemsHtml = list.map(item => {
    const isMastered = flashcardMastered.has(item.id);
    const isStarred = flashcardStarred.has(item.id);
    return `
      <div class="recall-card ${isMastered ? 'card-mastered' : ''}" data-fcid="${item.id}">
        <div class="recall-header">
          <span class="recall-topic">${item.topic} • Câu #${item.id}</span>
          <div class="recall-actions">
            <button class="fc-icon-btn ${isStarred ? 'starred' : ''}" onclick="toggleListItemStarred(${item.id})" title="Đánh dấu thẻ này">
              ${isStarred ? '⭐' : '☆'}
            </button>
            <button class="fc-icon-btn ${isMastered ? 'starred' : ''}" onclick="toggleListItemMastered(${item.id})" title="Đánh dấu đã thuộc / chưa nhớ">
              ${isMastered ? '✅' : '⚪'}
            </button>
            <button class="fc-icon-btn" onclick="speakExplanation(this, '${(item.q + '. Đáp án: ' + item.a).replace(/'/g, "\\'")}')" title="Nghe đọc">
              🔊
            </button>
          </div>
        </div>

        <div class="recall-q">❓ ${item.q}</div>

        <div class="recall-a ${flashcardShowAllAnswers ? 'show' : ''}" id="fc-ans-${item.id}">
          💡 <strong>Đáp án &amp; Ghi nhớ:</strong> ${item.a}
        </div>

        ${!flashcardShowAllAnswers ? `
          <button class="btn-toggle-answer" onclick="toggleListItemAnswer(${item.id})">
            👁️ Hiện đáp án
          </button>
        ` : ''}
      </div>
    `;
  }).join('');

  return `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
      <div style="font-size: 0.88rem; font-weight: 600; color: var(--text-muted);" id="flashcard-count">
        Đang hiển thị ${list.length} câu hỏi tủ
      </div>
      <button class="btn btn-secondary" style="padding: 0.35rem 0.75rem; font-size: 0.8rem;" onclick="toggleAllFlashcardAnswers()">
        ${flashcardShowAllAnswers ? '🙈 Ẩn tất cả đáp án' : '👁️ Hiện tất cả đáp án'}
      </button>
    </div>

    <div class="flashcard-list" id="flashcard-items" style="margin-top: 0.75rem;">
      ${listItemsHtml}
    </div>
  `;
}

function switchFlashcardMode(mode) {
  flashcardMode = mode;
  flashcardIsFlipped = false;
  playChime('click');
  renderFlashcardView();
}

function setFlashcardTopic(topic) {
  activeFlashcardTopic = topic;
  flashcardStarredOnly = false;
  flashcardUnmasteredOnly = false;
  flashcardCurrentIndex = 0;
  flashcardIsFlipped = false;
  playChime('click');
  renderFlashcardView();
}

function toggleFlashcardFilter(type) {
  if (type === 'starred') {
    flashcardStarredOnly = !flashcardStarredOnly;
    flashcardUnmasteredOnly = false;
  } else if (type === 'unmastered') {
    flashcardUnmasteredOnly = !flashcardUnmasteredOnly;
    flashcardStarredOnly = false;
  }
  flashcardCurrentIndex = 0;
  flashcardIsFlipped = false;
  playChime('click');
  renderFlashcardView();
}

function onFlashcardSearchInput(val) {
  flashcardSearchQuery = val;
  flashcardCurrentIndex = 0;
  flashcardIsFlipped = false;
  renderFlashcardView();
}

function clearFlashcardSearch() {
  flashcardSearchQuery = '';
  renderFlashcardView();
}

function flipCurrentCard() {
  flashcardIsFlipped = !flashcardIsFlipped;
  playChime('click');
  const cardEl = document.getElementById('active-fc-card');
  if (cardEl) {
    if (flashcardIsFlipped) cardEl.classList.add('flipped');
    else cardEl.classList.remove('flipped');
  }
  const flipBtn = document.querySelector('.fc-btn-flip');
  if (flipBtn) {
    flipBtn.innerHTML = `<span>🔄</span> ${flashcardIsFlipped ? 'Quay lại câu hỏi' : 'Lật thẻ xem đáp án'}`;
  }
}

function nextFlashcard() {
  const list = getFilteredFlashcards();
  if (flashcardCurrentIndex < list.length - 1) {
    flashcardCurrentIndex++;
    flashcardIsFlipped = false;
    playChime('click');
    renderFlashcardView();
  }
}

function prevFlashcard() {
  if (flashcardCurrentIndex > 0) {
    flashcardCurrentIndex--;
    flashcardIsFlipped = false;
    playChime('click');
    renderFlashcardView();
  }
}

function rateCurrentFlashcard(isMastered) {
  const list = getFilteredFlashcards();
  const card = list[flashcardCurrentIndex];
  if (!card) return;

  if (isMastered) {
    flashcardMastered.add(card.id);
    playChime('success');
  } else {
    flashcardMastered.delete(card.id);
    playChime('click');
  }
  saveFlashcardMastered();

  // If there are more cards, auto advance smoothly
  if (flashcardCurrentIndex < list.length - 1) {
    flashcardCurrentIndex++;
    flashcardIsFlipped = false;
  } else {
    flashcardIsFlipped = false;
  }
  renderFlashcardView();
}

function toggleCurrentCardStarred() {
  const list = getFilteredFlashcards();
  const card = list[flashcardCurrentIndex];
  if (!card) return;

  if (flashcardStarred.has(card.id)) {
    flashcardStarred.delete(card.id);
  } else {
    flashcardStarred.add(card.id);
  }
  saveFlashcardStarred();
  playChime('flag');
  renderFlashcardView();
}

function shuffleFlashcardDeck() {
  const list = getFilteredFlashcards();
  if (list.length <= 1) return;
  // Pick a random card that is not the current one
  let newIdx = Math.floor(Math.random() * list.length);
  if (newIdx === flashcardCurrentIndex && list.length > 1) {
    newIdx = (newIdx + 1) % list.length;
  }
  flashcardCurrentIndex = newIdx;
  flashcardIsFlipped = false;
  playChime('click');
  renderFlashcardView();
}

function toggleAllFlashcardAnswers() {
  flashcardShowAllAnswers = !flashcardShowAllAnswers;
  playChime('click');
  renderFlashcardView();
}

function toggleListItemAnswer(id) {
  const ansEl = document.getElementById(`fc-ans-${id}`);
  if (ansEl) {
    ansEl.classList.toggle('show');
  }
}

function toggleListItemStarred(id) {
  if (flashcardStarred.has(id)) {
    flashcardStarred.delete(id);
  } else {
    flashcardStarred.add(id);
  }
  saveFlashcardStarred();
  playChime('flag');
  renderFlashcardView();
}

function toggleListItemMastered(id) {
  if (flashcardMastered.has(id)) {
    flashcardMastered.delete(id);
  } else {
    flashcardMastered.add(id);
    playChime('success');
  }
  saveFlashcardMastered();
  renderFlashcardView();
}


// ==========================================================
// COMPREHENSIVE CLINICAL PHARMACY ENCYCLOPEDIA & FORMULA HUB
// (44H MINISTRY OF HEALTH SYLLABUS, 17 CHAPTERS, WORKED EXAMPLES)
// ==========================================================
let currentCheatsheetSubtab = 'formulas';
let cheatsheetSearchQuery = '';
let openChaptersState = {}; // Keeps track of open accordions

try {
  const savedSubtab = localStorage.getItem('dls_active_cheatsheet_subtab');
  if (savedSubtab) currentCheatsheetSubtab = savedSubtab;
} catch (e) {}

function switchCheatsheetSubtab(subtab) {
  currentCheatsheetSubtab = subtab;
  try {
    localStorage.setItem('dls_active_cheatsheet_subtab', subtab);
  } catch (e) {}

  const container = document.getElementById('view-cheatsheet');
  // If not rendered in DOM yet, render it
  if (!container || !document.getElementById('cs-sec-formulas')) {
    renderCheatsheetView();
    return;
  }

  // Update active state on subnav buttons without touching scroll position
  document.querySelectorAll('.cs-subnav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-subtab') === subtab);
  });

  const showAll = (subtab === 'all');
  const secMap = {
    formulas: document.getElementById('cs-sec-formulas'),
    encyclopedia: document.getElementById('cs-sec-encyclopedia'),
    strategy: document.getElementById('cs-sec-strategy'),
    mnemonics: document.getElementById('cs-sec-mnemonics'),
    antidotes: document.getElementById('cs-sec-antidotes'),
    pharmacology: document.getElementById('cs-sec-pharmacology')
  };

  Object.keys(secMap).forEach(key => {
    const el = secMap[key];
    if (el) {
      el.style.display = (showAll || key === subtab) ? 'block' : 'none';
    }
  });

  // Re-apply search filter if active
  if (cheatsheetSearchQuery) {
    onCheatsheetSearchInput({ target: { value: cheatsheetSearchQuery } });
  }

  playChime('click');
}


function toggleDlAccordion(dlId) {
  openChaptersState[dlId] = !openChaptersState[dlId];
  const header = document.getElementById(`dl-head-${dlId}`);
  const body = document.getElementById(`dl-body-${dlId}`);
  if (header && body) {
    if (openChaptersState[dlId]) {
      header.classList.add('active');
      body.style.display = 'block';
    } else {
      header.classList.remove('active');
      body.style.display = 'none';
    }
  }
}

function toggleAllDl(expand) {
  const ids = ['dl1_adme', 'dl1_tktv', 'dl1_tktw', 'dl2_khangsinh', 'dl2_timmach', 'dl2_tieuhoa_noitiet'];
  ids.forEach(id => {
    openChaptersState[id] = expand;
    const header = document.getElementById(`dl-head-${id}`);
    const body = document.getElementById(`dl-body-${id}`);
    if (header && body) {
      if (expand) {
        header.classList.add('active');
        body.style.display = 'block';
      } else {
        header.classList.remove('active');
        body.style.display = 'none';
      }
    }
  });
  playChime('click');
}

function toggleChapterAccordion(chId) {
  openChaptersState[chId] = !openChaptersState[chId];
  const header = document.getElementById(`ch-head-${chId}`);
  const body = document.getElementById(`ch-body-${chId}`);
  if (header && body) {
    if (openChaptersState[chId]) {
      header.classList.add('active');
      body.style.display = 'block';
    } else {
      header.classList.remove('active');
      body.style.display = 'none';
    }
  }
}

function toggleAllChapters(expand) {
  for (let i = 1; i <= 17; i++) {
    openChaptersState[`ch${i}`] = expand;
    const header = document.getElementById(`ch-head-ch${i}`);
    const body = document.getElementById(`ch-body-ch${i}`);
    if (header && body) {
      if (expand) {
        header.classList.add('active');
        body.style.display = 'block';
      } else {
        header.classList.remove('active');
        body.style.display = 'none';
      }
    }
  }
  playChime('click');
}

function onCheatsheetSearchInput(e) {
  cheatsheetSearchQuery = (e.target.value || '').trim().toLowerCase();
  const items = document.querySelectorAll('.cs-searchable-item');
  let matchCount = 0;
  items.forEach(el => {
    const text = el.innerText.toLowerCase();
    if (!cheatsheetSearchQuery || text.includes(cheatsheetSearchQuery)) {
      el.style.display = '';
      matchCount++;
      // If searching and inside accordion, automatically open it
      if (cheatsheetSearchQuery && el.classList.contains('chapter-accordion-item')) {
        const header = el.querySelector('.chapter-accordion-header');
        const body = el.querySelector('.chapter-accordion-body');
        if (header && body) {
          header.classList.add('active');
          body.style.display = 'block';
        }
      }
    } else {
      el.style.display = 'none';
    }
  });

  const countEl = document.getElementById('cs-search-count');
  if (countEl) {
    countEl.innerText = cheatsheetSearchQuery ? `Tìm thấy ${matchCount} mục phù hợp với "${cheatsheetSearchQuery}"` : '';
  }
}

function renderCheatsheetView() {
  const container = document.getElementById('view-cheatsheet');
  if (!container) return;

  // If already rendered in DOM, do NOT wipe container.innerHTML or reset scroll!
  if (document.getElementById('cs-sec-formulas')) {
    switchCheatsheetSubtab(currentCheatsheetSubtab);
    return;
  }

  const showAll = currentCheatsheetSubtab === 'all';
  const isFormulas = showAll || currentCheatsheetSubtab === 'formulas';
  const isEncyclopedia = showAll || currentCheatsheetSubtab === 'encyclopedia';
  const isStrategy = showAll || currentCheatsheetSubtab === 'strategy';
  const isMnemonics = showAll || currentCheatsheetSubtab === 'mnemonics';
  const isAntidotes = showAll || currentCheatsheetSubtab === 'antidotes';
  const isPharmacology = showAll || currentCheatsheetSubtab === 'pharmacology';

  container.innerHTML = `
    <!-- BANNER CHÍNH -->
    <div class="cs-header-banner">
      <div class="cs-header-title">
        <span>📚 Sổ Tay Dược Lâm Sàng Toàn Thư &amp; Cẩm Nang Luyện Thi</span>
      </div>
      <div class="cs-header-desc">
        Hệ thống ôn luyện toàn diện chuẩn Bộ Y tế (44 tiết - 17 chuyên đề). Bao gồm: <strong>Công thức tính toán phân số xếp tầng</strong>, <strong>4 bài toán lâm sàng mẫu có lời giải chi tiết từng bước</strong>, <strong>sổ tay 17 chuyên đề lâm sàng chuyên sâu kèm bẫy thi trắc nghiệm</strong>, ma trận 80/20 và thuốc giải độc khẩn cấp.
      </div>
    </div>

    <!-- THANH TÌM KIẾM TRỰC TIẾP TRONG CẨM NANG -->
    <div class="cs-search-container">
      <span class="cs-search-icon">🔍</span>
      <input type="text" class="cs-search-input" id="cs-search-input" 
             placeholder="Tìm kiếm nhanh kiến thức (vd: Cockcroft, Adrenalin, Child-Pugh, Vancomycin, Metformin, Hen, Oresol, ho khan, bẫy thi...)"
             value="${cheatsheetSearchQuery}" oninput="onCheatsheetSearchInput(event)">
      <div id="cs-search-count" style="font-size: 0.8rem; color: var(--primary); margin-top: 0.4rem; padding-left: 0.5rem; font-weight: 600;"></div>
    </div>

    <!-- THANH CHUYỂN TAB CON (SUB-NAVIGATION) -->
    <div class="cs-subnav">
      <button class="cs-subnav-btn ${currentCheatsheetSubtab === 'formulas' ? 'active' : ''}" data-subtab="formulas" onclick="switchCheatsheetSubtab('formulas')">
        <span>📐</span> Công Thức &amp; 4 Bài Toán Mẫu
      </button>
      <button class="cs-subnav-btn ${currentCheatsheetSubtab === 'encyclopedia' ? 'active' : ''}" data-subtab="encyclopedia" onclick="switchCheatsheetSubtab('encyclopedia')">
        <span>📚</span> Sổ Tay 17 Chuyên Đề &amp; Bẫy Thi
      </button>
      <button class="cs-subnav-btn ${currentCheatsheetSubtab === 'strategy' ? 'active' : ''}" data-subtab="strategy" onclick="switchCheatsheetSubtab('strategy')">
        <span>🎯</span> Ma Trận 17 Bài &amp; Chiến Lược 44H
      </button>
      <button class="cs-subnav-btn ${currentCheatsheetSubtab === 'mnemonics' ? 'active' : ''}" data-subtab="mnemonics" onclick="switchCheatsheetSubtab('mnemonics')">
        <span>🧠</span> "Thần Chú" &amp; Cặp Đôi Kinh Điển
      </button>
      <button class="cs-subnav-btn ${currentCheatsheetSubtab === 'antidotes' ? 'active' : ''}" data-subtab="antidotes" onclick="switchCheatsheetSubtab('antidotes')">
        <span>⚡</span> Cấp Cứu: Giải Độc &amp; Thai Kỳ
      </button>
            <button class="cs-subnav-btn ${currentCheatsheetSubtab === 'pharmacology' ? 'active' : ''}" data-subtab="pharmacology" onclick="switchCheatsheetSubtab('pharmacology')">
        <span>💊</span> Dược Lý 1 &amp; 2 Trọng Tâm
      </button>
      <button class="cs-subnav-btn ${currentCheatsheetSubtab === 'all' ? 'active' : ''}" data-subtab="all" onclick="switchCheatsheetSubtab('all')">
        <span>📑</span> Xem Toàn Bộ Cẩm Nang
      </button>
    </div>

    <div style="display: flex; flex-direction: column; gap: 1.5rem;">

      <!-- ========================================== -->
      <!-- SECTION 1: CÔNG THỨC & 4 BÀI TOÁN MẪU CÓ LỜI GIẢI CHI TIẾT -->
      <!-- ========================================== -->
      <div class="question-card cs-searchable-item" id="cs-sec-formulas" style="display: ${isFormulas ? 'block' : 'none'};">
        <h2 style="font-size: 1.25rem; color: var(--primary); font-family: var(--font-heading); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
          <span>📐</span> 1. Hệ Thống Công Thức Tính Toán &amp; 4 Bài Toán Mẫu Có Lời Giải Từng Bước
        </h2>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1.25rem;">
          Tất cả công thức được thể hiện bằng <strong>phân số xếp tầng chuẩn (tử số trên mẫu số)</strong>, tuyệt đối không dùng dấu gạch chéo <code>/</code>. Kèm 4 bài toán lâm sàng điển hình gặp trong mọi đề thi.
        </p>

        <!-- CÔNG THỨC 1: COCKCROFT - GAULT -->
        <div class="math-card cs-searchable-item" style="border-left: 4px solid #2563eb;">
          <div class="math-card-title">
            <span>🔹 1.1. Công thức Cockcroft - Gault (Ước tính độ thanh thải Creatinin Cl<sub>cr</sub>)</span>
          </div>
          <div class="math-eq-container">
            <div>
              <span style="font-size: 0.88rem; font-weight: 600; color: var(--text-main); display: block; margin-bottom: 0.35rem;">
                Khi Creatinin huyết thanh tính bằng đơn vị <strong>mg/dL</strong>:
              </span>
              <div class="math-eq-row">
                <span class="math-sym">Cl</span><sub>cr (nam)</sub>
                <span class="math-op">=</span>
                <span class="math-frac">
                  <span class="math-num">(140 &minus; Tuổi) &times; Cân nặng (kg)</span>
                  <span class="math-denom">72 &times; S<sub>cr</sub> (mg/dL)</span>
                </span>
              </div>
              <div class="math-eq-row" style="margin-top: 0.4rem;">
                <span class="math-sym">Cl</span><sub>cr (nữ)</sub>
                <span class="math-op">=</span>
                <span class="math-sym">Cl</span><sub>cr (nam)</sub>
                <span class="math-op">&times;</span>
                <span>0,85</span>
              </div>
            </div>

            <div style="margin-top: 0.5rem;">
              <span style="font-size: 0.88rem; font-weight: 600; color: var(--text-main); display: block; margin-bottom: 0.35rem;">
                Khi Creatinin huyết thanh tính bằng đơn vị <strong>&mu;mol/L</strong> (chuẩn SI):
              </span>
              <div class="math-eq-row">
                <span class="math-sym">Cl</span><sub>cr (nam)</sub>
                <span class="math-op">=</span>
                <span class="math-frac">
                  <span class="math-num">(140 &minus; Tuổi) &times; Cân nặng (kg)</span>
                  <span class="math-denom">0,814 &times; S<sub>cr</sub> (&mu;mol/L)</span>
                </span>
              </div>
            </div>
          </div>
          <div class="math-note">
            💡 <strong>Quy đổi:</strong> <code>1 mg/dL = 88,4 &mu;mol/L</code>.<br>
            ⚖️ <strong>Cân nặng hiệu chỉnh khi béo phì (BMI &ge; 30 hoặc cân nặng thực tế &gt; 120% cân nặng lý tưởng):</strong>
            <div class="math-eq-row" style="font-size: 0.95rem; padding: 0.35rem 0.65rem; margin-top: 0.35rem; display: inline-flex;">
              <span class="math-sym">ABW</span>
              <span class="math-op">=</span>
              <span class="math-sym">IBW</span>
              <span class="math-op">+</span>
              <span>0,4</span>
              <span class="math-op">&times;</span>
              <span>(TBW &minus; IBW)</span>
            </div>
          </div>

          <!-- BÀI TẬP VÍ DỤ 1 -->
          <div class="math-example-box">
            <div class="math-example-title">
              <span>📝 BÀI TOÁN MẪU 1: Tính Cl<sub>cr</sub> và Đánh Giá Chức Năng Thận Bệnh Nhân Nữ</span>
            </div>
            <div class="math-example-prob">
              <strong>Đề bài:</strong> Bệnh nhân nữ 68 tuổi, cao 1m55, cân nặng 52 kg. Xét nghiệm Creatinin huyết thanh là <strong>150 &mu;mol/L</strong>. Hãy tính độ thanh thải Creatinin của bệnh nhân theo công thức Cockcroft - Gault và đánh giá mức độ suy giảm chức năng thận.
            </div>
            <div class="math-example-steps">
              <div class="math-step-item">
                <strong>Bước 1: Áp dụng công thức tính cho nam giới:</strong>
                <div class="math-eq-row" style="font-size: 1.05rem;">
                  <span class="math-sym">Cl</span><sub>cr (nam)</sub>
                  <span class="math-op">=</span>
                  <span class="math-frac">
                    <span class="math-num">(140 &minus; 68) &times; 52</span>
                    <span class="math-denom">0,814 &times; 150</span>
                  </span>
                  <span class="math-op">=</span>
                  <span class="math-frac">
                    <span class="math-num">72 &times; 52</span>
                    <span class="math-denom">122,1</span>
                  </span>
                  <span class="math-op">=</span>
                  <span class="math-frac">
                    <span class="math-num">3744</span>
                    <span class="math-denom">122,1</span>
                  </span>
                  <span class="math-op">&approx;</span>
                  <span>30,66 ml/phút</span>
                </div>
              </div>
              <div class="math-step-item">
                <strong>Bước 2: Hiệu chỉnh cho bệnh nhân nữ (nhân với hệ số 0,85):</strong>
                <div class="math-eq-row" style="font-size: 1.05rem;">
                  <span class="math-sym">Cl</span><sub>cr (nữ)</sub>
                  <span class="math-op">=</span>
                  <span>30,66</span>
                  <span class="math-op">&times;</span>
                  <span>0,85</span>
                  <span class="math-op">&approx;</span>
                  <strong style="color: #dc2626;">26,06 ml/phút</strong>
                </div>
              </div>
              <div class="math-step-item">
                <strong>Bước 3: Kết luận lâm sàng:</strong> Bệnh nhân có Cl<sub>cr</sub> &approx; 26 ml/phút (nằm trong khoảng 15 &minus; 29 ml/phút), tương ứng với <strong>suy thận độ 4 (suy thận nặng)</strong>. Rất nhiều thuốc đào thải qua thận (như Enoxaparin, Ciprofloxacin, Metformin...) bắt buộc phải giảm liều hoặc chống chỉ định!
              </div>
            </div>
          </div>
        </div>

        <!-- CÔNG THỨC 2: THÔNG SỐ PK CƠ BẢN -->
        <div class="math-card cs-searchable-item" style="border-left: 4px solid #059669;">
          <div class="math-card-title">
            <span>🔹 1.2. Thể Tích Phân Bố (V<sub>d</sub>), Độ Thanh Thải (Cl), Bán Thải (t<sub>1/2</sub>) &amp; Hằng Số Thải Trừ (k<sub>e</sub>)</span>
          </div>
          <div class="math-eq-container">
            <div class="math-eq-row">
              <span class="math-sym">V</span><sub>d</sub>
              <span class="math-op">=</span>
              <span class="math-frac">
                <span class="math-num">Liều dùng (D) &times; Sinh khả dụng (F)</span>
                <span class="math-denom">C<sub>0</sub> (Nồng độ ban đầu)</span>
              </span>
            </div>
            <div class="math-eq-row">
              <span class="math-sym">Cl</span>
              <span class="math-op">=</span>
              <span class="math-frac">
                <span class="math-num">Liều dùng (D) &times; Sinh khả dụng (F)</span>
                <span class="math-denom">AUC</span>
              </span>
              <span class="math-op">=</span>
              <span class="math-sym">k</span><sub>e</sub> &times; <span class="math-sym">V</span><sub>d</sub>
            </div>
            <div class="math-eq-row">
              <span class="math-sym">t</span><sub>1/2</sub>
              <span class="math-op">=</span>
              <span class="math-frac">
                <span class="math-num">0,693 &times; <span class="math-sym">V</span><sub>d</sub></span>
                <span class="math-denom"><span class="math-sym">Cl</span></span>
              </span>
              <span class="math-op">=</span>
              <span class="math-frac">
                <span class="math-num">ln(2)</span>
                <span class="math-denom"><span class="math-sym">k</span><sub>e</sub></span>
              </span>
            </div>
            <div class="math-eq-row">
              <span class="math-sym">k</span><sub>e</sub>
              <span class="math-op">=</span>
              <span class="math-frac">
                <span class="math-num">0,693</span>
                <span class="math-denom"><span class="math-sym">t</span><sub>1/2</sub></span>
              </span>
            </div>
          </div>

          <!-- BÀI TẬP VÍ DỤ 2: THỜI GIAN VÀNG PK -->
          <div class="math-example-box">
            <div class="math-example-title">
              <span>📝 BÀI TOÁN MẪU 2: Xác Định Thời Điểm Lấy Máu Định Lượng Nồng Độ Ổn Định (C<sub>ss</sub>)</span>
            </div>
            <div class="math-example-prob">
              <strong>Đề bài:</strong> Kháng sinh Vancomycin có thời gian bán thải ở một bệnh nhân suy giảm chức năng thận là <strong>t<sub>1/2</sub> = 16 giờ</strong>. Bệnh nhân được bắt đầu truyền tĩnh mạch định kỳ từ 8h sáng Thứ Hai. Hỏi thời điểm sớm nhất có thể lấy máu bệnh nhân để định lượng nồng độ đáy đạt trạng thái ổn định (C<sub>ss</sub>) là vào lúc nào?
            </div>
            <div class="math-example-steps">
              <div class="math-step-item">
                <strong>Quy tắc thời gian vàng:</strong> Nồng độ thuốc đạt trạng thái ổn định điều trị C<sub>ss</sub> (đạt trên 93,75% nồng độ cân bằng) sau <strong>4 đến 5 lần t<sub>1/2</sub></strong>.
              </div>
              <div class="math-step-item">
                <strong>Tính toán thời gian:</strong>
                <div class="math-eq-row" style="font-size: 1.05rem;">
                  <span>Thời gian cần thiết</span>
                  <span class="math-op">=</span>
                  <span>4 &minus; 5 &times; 16 giờ</span>
                  <span class="math-op">=</span>
                  <strong style="color: #059669;">64 đến 80 giờ</strong>
                  <span>(khoảng gần 3 đến 3,5 ngày)</span>
                </div>
              </div>
              <div class="math-step-item">
                <strong>Kết luận:</strong> Từ 8h sáng Thứ Hai, cộng thêm 64 giờ &rarr; thời điểm sớm nhất lấy máu định lượng là <strong>0h đêm Thứ Năm (hoặc trước liều sáng Thứ Năm)</strong>. Nếu lấy mẫu vào sáng Thứ Ba hoặc Thứ Tư (khi mới qua 24-48 giờ), nồng độ đo được chưa phản ánh trạng thái ổn định, chỉnh liều sẽ dẫn đến nguy cơ ngộ độc thận!
              </div>
            </div>
          </div>
        </div>

        <!-- CÔNG THỨC 3: LIỀU NẠP & LIỀU DUY TRÌ -->
        <div class="math-card cs-searchable-item" style="border-left: 4px solid #7c3aed;">
          <div class="math-card-title">
            <span>🔹 1.3. Tính Liều Nạp (LD), Liều Duy Trì (MD) &amp; Tốc Độ Truyền Tĩnh Mạch (R<sub>0</sub>)</span>
          </div>
          <div class="math-eq-container">
            <div class="math-eq-row">
              <span>Liều nạp (LD)</span>
              <span class="math-op">=</span>
              <span class="math-frac">
                <span class="math-num"><span class="math-sym">V</span><sub>d</sub> &times; C<sub>mục tiêu</sub></span>
                <span class="math-denom">F (Sinh khả dụng)</span>
              </span>
            </div>
            <div class="math-eq-row">
              <span>Liều duy trì (MD)</span>
              <span class="math-op">=</span>
              <span class="math-frac">
                <span class="math-num"><span class="math-sym">Cl</span> &times; C<sub>mục tiêu</sub> &times; &tau; (Khoảng cách liều)</span>
                <span class="math-denom">F (Sinh khả dụng)</span>
              </span>
            </div>
            <div class="math-eq-row">
              <span>Tốc độ truyền liên tục (R<sub>0</sub>)</span>
              <span class="math-op">=</span>
              <span class="math-sym">Cl</span> &times; C<sub>ss</sub>
            </div>
          </div>

          <!-- BÀI TẬP VÍ DỤ 3 -->
          <div class="math-example-box">
            <div class="math-example-title">
              <span>📝 BÀI TOÁN MẪU 3: Tính Liều Nạp Ban Đầu và Tốc Độ Truyền Duy Trì Của Thuốc Tim Mạch</span>
            </div>
            <div class="math-example-prob">
              <strong>Đề bài:</strong> Thuốc chống loạn nhịp Lidocain có thể tích phân bố <strong>V<sub>d</sub> = 0,6 L/kg</strong> và độ thanh thải <strong>Cl = 10 ml/phút/kg</strong>. Cần điều trị cấp cứu cho một bệnh nhân nam nặng <strong>70 kg</strong> để đạt ngay nồng độ điều trị mục tiêu trong máu là <strong>3 mg/L (3 &mu;g/ml)</strong> bằng đường tiêm tĩnh mạch (F = 1). Hãy tính:
              <br>1) Liều nạp tiêm tĩnh mạch ban đầu (LD)?
              <br>2) Tốc độ truyền duy trì liên tục (mg/phút) để giữ vững nồng độ mục tiêu đó?
            </div>
            <div class="math-example-steps">
              <div class="math-step-item">
                <strong>1) Tính thể tích phân bố toàn phần của bệnh nhân:</strong>
                <div class="math-eq-row" style="font-size: 1.05rem;">
                  <span class="math-sym">V</span><sub>d</sub>
                  <span class="math-op">=</span>
                  <span>0,6 L/kg &times; 70 kg</span>
                  <span class="math-op">=</span>
                  <span>42 L</span>
                </div>
                <strong>Liều nạp cần tiêm (LD):</strong>
                <div class="math-eq-row" style="font-size: 1.05rem;">
                  <span>LD</span>
                  <span class="math-op">=</span>
                  <span class="math-frac">
                    <span class="math-num">42 L &times; 3 mg/L</span>
                    <span class="math-denom">1</span>
                  </span>
                  <span class="math-op">=</span>
                  <strong style="color: #7c3aed;">126 mg</strong>
                </div>
              </div>
              <div class="math-step-item">
                <strong>2) Tính độ thanh thải toàn thân của bệnh nhân:</strong>
                <div class="math-eq-row" style="font-size: 1.05rem;">
                  <span class="math-sym">Cl</span>
                  <span class="math-op">=</span>
                  <span>10 ml/phút/kg &times; 70 kg</span>
                  <span class="math-op">=</span>
                  <span>700 ml/phút</span>
                  <span class="math-op">=</span>
                  <span>0,7 L/phút</span>
                </div>
                <strong>Tốc độ truyền duy trì liên tục (R<sub>0</sub>):</strong>
                <div class="math-eq-row" style="font-size: 1.05rem;">
                  <span>R<sub>0</sub></span>
                  <span class="math-op">=</span>
                  <span>Cl &times; C<sub>ss</sub></span>
                  <span class="math-op">=</span>
                  <span>0,7 L/phút &times; 3 mg/L</span>
                  <span class="math-op">=</span>
                  <strong style="color: #7c3aed;">2,1 mg/phút</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- CÔNG THỨC 4: GIUSTI - HAYTON HIỆU CHỈNH LIỀU SUY THẬN -->
        <div class="math-card cs-searchable-item" style="border-left: 4px solid #ea580c;">
          <div class="math-card-title">
            <span>🔹 1.4. Phương Pháp Hiệu Chỉnh Liều Suy Thận (Giusti - Hayton)</span>
          </div>
          <div class="math-eq-container">
            <div class="math-eq-row">
              <span>Tỷ số thanh thải (R<sub>f</sub>)</span>
              <span class="math-op">=</span>
              <span class="math-frac">
                <span class="math-num"><span class="math-sym">Cl</span><sub>cr (suy thận)</sub></span>
                <span class="math-denom"><span class="math-sym">Cl</span><sub>cr (bình thường = 100 - 120 ml/phút)</sub></span>
              </span>
            </div>
            <div class="math-eq-row">
              <span>Hệ số hiệu chỉnh liều (Q)</span>
              <span class="math-op">=</span>
              <span class="math-frac">
                <span class="math-num">1</span>
                <span class="math-denom">1 &minus; f<sub>e</sub> &times; (1 &minus; R<sub>f</sub>)</span>
              </span>
            </div>
            <div class="math-eq-row">
              <span>Cách 1: Giảm liều (giữ nguyên khoảng cách &tau;)</span>
              <span class="math-op">&rarr;</span>
              <span>D<sub>mới</sub></span>
              <span class="math-op">=</span>
              <span class="math-frac">
                <span class="math-num">D<sub>bình thường</sub></span>
                <span class="math-denom">Q</span>
              </span>
            </div>
            <div class="math-eq-row">
              <span>Cách 2: Giữ nguyên liều (kéo dài khoảng cách &tau;)</span>
              <span class="math-op">&rarr;</span>
              <span>&tau;<sub>mới</sub></span>
              <span class="math-op">=</span>
              <span>&tau;<sub>bình thường</sub> &times; Q</span>
            </div>
          </div>

          <!-- BÀI TẬP VÍ DỤ 4: HIỆU CHỈNH LIỀU -->
          <div class="math-example-box">
            <div class="math-example-title">
              <span>📝 BÀI TOÁN MẪU 4: Hiệu Chỉnh Liều Kháng Sinh Đào Thải Qua Thận Bằng Phương Pháp Giusti - Hayton</span>
            </div>
            <div class="math-example-prob">
              <strong>Đề bài:</strong> Một kháng sinh có liều dùng cho người bình thường là <strong>500 mg mỗi 8 giờ</strong>. Thuốc đào thải qua thận ở dạng còn hoạt tính với tỷ lệ <strong>f<sub>e</sub> = 0,8 (80%)</strong>. Một bệnh nhân suy thận có độ thanh thải Creatinin <strong>Cl<sub>cr</sub> = 30 ml/phút</strong> (chuẩn người bình thường lấy là 100 ml/phút). Hãy tính chế độ liều mới cho bệnh nhân theo cả 2 phương án:
              <br>a) Giảm liều và giữ nguyên khoảng cách đưa thuốc (&tau; = 8h)?
              <br>b) Giữ nguyên liều 500 mg và kéo dài khoảng cách đưa thuốc?
            </div>
            <div class="math-example-steps">
              <div class="math-step-item">
                <strong>Bước 1: Tính tỷ số thanh thải R<sub>f</sub>:</strong>
                <div class="math-eq-row" style="font-size: 1.05rem;">
                  <span class="math-sym">R</span><sub>f</sub>
                  <span class="math-op">=</span>
                  <span class="math-frac">
                    <span class="math-num">30</span>
                    <span class="math-denom">100</span>
                  </span>
                  <span class="math-op">=</span>
                  <span>0,3</span>
                </div>
              </div>
              <div class="math-step-item">
                <strong>Bước 2: Tính hệ số hiệu chỉnh liều Q:</strong>
                <div class="math-eq-row" style="font-size: 1.05rem;">
                  <span class="math-sym">Q</span>
                  <span class="math-op">=</span>
                  <span class="math-frac">
                    <span class="math-num">1</span>
                    <span class="math-denom">1 &minus; 0,8 &times; (1 &minus; 0,3)</span>
                  </span>
                  <span class="math-op">=</span>
                  <span class="math-frac">
                    <span class="math-num">1</span>
                    <span class="math-denom">1 &minus; 0,8 &times; 0,7</span>
                  </span>
                  <span class="math-op">=</span>
                  <span class="math-frac">
                    <span class="math-num">1</span>
                    <span class="math-denom">1 &minus; 0,56</span>
                  </span>
                  <span class="math-op">=</span>
                  <span class="math-frac">
                    <span class="math-num">1</span>
                    <span class="math-denom">0,44</span>
                  </span>
                  <span class="math-op">&approx;</span>
                  <strong style="color: #ea580c;">2,27</strong>
                </div>
              </div>
              <div class="math-step-item">
                <strong>Bước 3: Tính chế độ liều mới:</strong>
                <br>&bull; <strong>Phương án a (Giảm liều giữ &tau; = 8h):</strong>
                <div class="math-eq-row" style="font-size: 1.05rem;">
                  <span>D<sub>mới</sub></span>
                  <span class="math-op">=</span>
                  <span class="math-frac">
                    <span class="math-num">500 mg</span>
                    <span class="math-denom">2,27</span>
                  </span>
                  <span class="math-op">&approx;</span>
                  <strong style="color: #ea580c;">220 mg mỗi 8 giờ</strong>
                  <span>(trên lâm sàng thường dùng viên 250 mg mỗi 8 giờ)</span>
                </div>
                &bull; <strong>Phương án b (Giữ liều 500 mg, kéo dài khoảng cách &tau;):</strong>
                <div class="math-eq-row" style="font-size: 1.05rem;">
                  <span>&tau;<sub>mới</sub></span>
                  <span class="math-op">=</span>
                  <span>8 giờ &times; 2,27</span>
                  <span class="math-op">&approx;</span>
                  <strong style="color: #ea580c;">18,16 giờ</strong>
                  <span>(trên lâm sàng làm tròn thành 500 mg mỗi 18 - 24 giờ)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- CÔNG THỨC 5: CHỈ SỐ PK/PD KHÁNG SINH -->
        <div class="math-card cs-searchable-item" style="border-left: 4px solid #0284c7;">
          <div class="math-card-title">
            <span>🔹 1.5. Các Chỉ Số Dược Lực Học / Dược Động Học (PK/PD) Của Kháng Sinh</span>
          </div>
          <div class="math-eq-container">
            <div class="math-eq-row">
              <span style="font-size: 0.95rem; font-weight: 700; color: var(--text-main); margin-right: 0.5rem;">Kháng sinh phụ thuộc nồng độ (Aminoglycosid):</span>
              <span class="math-frac">
                <span class="math-num">C<sub>max</sub></span>
                <span class="math-denom">MIC</span>
              </span>
              <span class="math-op">&ge;</span>
              <span>8 &minus; 10</span>
            </div>
            <div class="math-eq-row">
              <span style="font-size: 0.95rem; font-weight: 700; color: var(--text-main); margin-right: 0.5rem;">Kháng sinh Fluoroquinolon (Ciprofloxacin, Levofloxacin):</span>
              <span class="math-frac">
                <span class="math-num">AUC<sub>24</sub></span>
                <span class="math-denom">MIC</span>
              </span>
              <span class="math-op">&ge;</span>
              <span>100 &minus; 125</span>
            </div>
            <div class="math-eq-row">
              <span style="font-size: 0.95rem; font-weight: 700; color: var(--text-main); margin-right: 0.5rem;">Vancomycin (theo dõi nồng độ thuốc TDM):</span>
              <span class="math-frac">
                <span class="math-num">AUC<sub>24</sub></span>
                <span class="math-denom">MIC</span>
              </span>
              <span class="math-op">&ge;</span>
              <span>400 &minus; 600</span>
            </div>
            <div class="math-eq-row">
              <span style="font-size: 0.95rem; font-weight: 700; color: var(--text-main); margin-right: 0.5rem;">Kháng sinh phụ thuộc thời gian (Beta-lactam, Carbapenem):</span>
              <span>%T &gt; MIC</span>
              <span class="math-op">&ge;</span>
              <span>40% &minus; 70%</span>
            </div>
          </div>
        </div>

      </div>


      <!-- ========================================== -->
      <!-- SECTION 2: SỔ TAY 17 CHUYÊN ĐỀ TOÀN THƯ (CHI TIẾT & BẪY THI) -->
      <!-- ========================================== -->
      <div class="question-card cs-searchable-item" id="cs-sec-encyclopedia" style="display: ${isEncyclopedia ? 'block' : 'none'};">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.5rem;">
          <h2 style="font-size: 1.25rem; color: var(--primary); font-family: var(--font-heading); display: flex; align-items: center; gap: 0.5rem;">
            <span>📚</span> 2. Sổ Tay 17 Chuyên Đề Lâm Sàng Toàn Thư (Chi Tiết Chuyên Sâu &amp; Bẫy Thi)
          </h2>
          <div style="display: flex; gap: 0.4rem;">
            <button class="btn btn-secondary" style="padding: 0.35rem 0.75rem; font-size: 0.78rem;" onclick="toggleAllChapters(true)">
              ➕ Mở Tất Cả 17 Bài
            </button>
            <button class="btn btn-secondary" style="padding: 0.35rem 0.75rem; font-size: 0.78rem;" onclick="toggleAllChapters(false)">
              ➖ Thu Gọn
            </button>
          </div>
        </div>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1.25rem;">
          Toàn bộ lý thuyết trọng tâm bám sát giáo trình chuẩn của Bộ Y tế. Mỗi bài bao gồm: <strong>cơ chế, phân loại dược lý, liều dùng, tương tác, tác dụng phụ và mục "⚠️ Bẫy thi trắc nghiệm"</strong> nơi các câu hỏi thi hay lừa thí sinh nhất.
        </p>

        <!-- CHUYÊN ĐỀ 1: KHÁNG SINH -->
        <div class="chapter-accordion-item cs-searchable-item" id="ch-item-ch1">
          <div class="chapter-accordion-header ${openChaptersState['ch1'] ? 'active' : ''}" id="ch-head-ch1" onclick="toggleChapterAccordion('ch1')">
            <div class="chapter-acc-title-group">
              <span class="cs-pill cs-pill-danger">🔥 4 Tiết • 9-11 Câu</span>
              <span class="chapter-acc-title">Bài 1: Kháng Sinh &amp; Nguyên Tắc Sử Dụng Hợp Lý Trong Lâm Sàng</span>
            </div>
            <span class="chapter-acc-arrow">▼</span>
          </div>
          <div class="chapter-accordion-body" id="ch-body-ch1" style="display: ${openChaptersState['ch1'] ? 'block' : 'none'};">
            <div class="chapter-sec-heading">🎯 1. Phân Loại 10 Nhóm Kháng Sinh Chính &amp; Cơ Chế Tác Dụng:</div>
            <ul class="chapter-point-list">
              <li><strong>Beta-lactam:</strong> Ức chế tổng hợp vách tế bào vi khuẩn (gắn PBP &minus; Penicillin Binding Protein). Diệt khuẩn. Gồm 4 phân nhóm: Penicillin, Cephalosporin (Thế hệ 1 đến 5), Carbapenem (phổ rộng nhất: Meropenem, Imipenem), Monobactam (Aztreonam).</li>
              <li><strong>Aminoglycosid:</strong> Gắn tiểu đơn vị 30S ribosom, ức chế tổng hợp protein và làm đọc sai mã. Diệt khuẩn phụ thuộc nồng độ. Thuốc: Gentamicin, Tobramycin, Amikacin. Phổ: Trực khuẩn Gram âm á khí (Pseudomonas, Klebsiella, E.coli).</li>
              <li><strong>Macrolid:</strong> Gắn tiểu đơn vị 50S ribosom. Kìm khuẩn (liều cao diệt khuẩn). Thuốc: Erythromycin, Clarithromycin, Azithromycin. Phổ: Cầu khuẩn Gram (+), vi khuẩn không điển hình (Mycoplasma, Chlamydia, Legionella).</li>
              <li><strong>Fluoroquinolon:</strong> Ức chế enzym DNA-gyrase (Topoisomerase II) và Topoisomerase IV, ngăn tháo xoắn DNA. Diệt khuẩn. Thuốc: Ciprofloxacin, Levofloxacin, Moxifloxacin. Phổ: Gram (-) mạnh, thế hệ sau mở rộng sang Gram (+) và vi khuẩn nội bào.</li>
              <li><strong>Glycopeptid:</strong> Ức chế tạo thành vách (gắn đoạn cuối D-Ala-D-Ala). Diệt khuẩn. Thuốc: Vancomycin, Teicoplanin. Phổ: Chọn lọc vi khuẩn Gram dương, đặc biệt là MRSA (Tụ cầu vàng kháng methicillin) và Enterococcus.</li>
              <li><strong>Tetracyclin:</strong> Gắn 30S ribosom. Kìm khuẩn. Thuốc: Doxycyclin, Minocyclin. Phổ rộng, vi khuẩn nội bào, lậu cầu, giang mai, rickettsia.</li>
              <li><strong>Lincosamid:</strong> Gắn 50S ribosom. Kìm khuẩn. Thuốc: Clindamycin. Phổ: Cầu khuẩn Gram (+) và vi khuẩn kỵ khí (Bacteroides fragilis).</li>
              <li><strong>Sulfamid &amp; Trimethoprim (Co-trimoxazol / Bactrim):</strong> Ức chế tổng hợp acid folic theo 2 bước liên tiếp (hiệp đồng diệt khuẩn). Phổ: Gram (-), Pneumocystis jirovecii (viêm phổi ở bệnh nhân HIV).</li>
            </ul>

            <div class="chapter-sec-heading">⚠️ CÁC BẪY THI TRẮC NGHIỆM KINH ĐIỂN VỀ KHÁNG SINH:</div>
            <div class="exam-trap-box">
              <div class="exam-trap-title">🛑 Bẫy 1: Đường dùng Aminoglycosid</div>
              Aminoglycosid phân tử phân cực mạnh, <strong>KHÔNG hấp thu qua đường tiêu hóa</strong>. Nếu đề thi hỏi "Đường dùng để điều trị nhiễm khuẩn huyết của Gentamicin", tuyệt đối không chọn đường uống! Đường uống chỉ dùng để diệt khuẩn tại ruột trước khi phẫu thuật đại trực tràng.
            </div>
            <div class="exam-trap-box">
              <div class="exam-trap-title">🛑 Bẫy 2: Hội chứng người đỏ (Red Man Syndrome) do Vancomycin</div>
              Red man syndrome là do <strong>truyền tĩnh mạch Vancomycin quá nhanh gây giải phóng ồ ạt Histamin</strong>, KHÔNG PHẢI là phản ứng dị ứng qua trung gian IgE! Xử trí: giảm tốc độ truyền (truyền ít nhất trên 60 phút) và dùng kháng histamin H1. Vancomycin tiêm bắp gây hoại tử cơ nặng nên cấm tiêm bắp.
            </div>
            <div class="exam-trap-box">
              <div class="exam-trap-title">🛑 Bẫy 3: Phổ kháng khuẩn của Cephalosporin thế hệ 1 đến 4</div>
              Cephalosporin từ C1G đến C4G <strong>HOÀN TOÀN KHÔNG CÓ TÁC DỤNG trên Enterococcus và Listeria monocytogenes</strong>! Riêng Cephalosporin thế hệ 5 (Ceftarolin) mới diệt được MRSA.
            </div>
            <div class="exam-trap-box">
              <div class="exam-trap-title">🛑 Bẫy 4: Độc tính đặc thù</div>
              &bull; <strong>Quinolon:</strong> Gây đứt gân gót Achilles, kéo dài khoảng QT gây xoắn đỉnh, thoái hóa sụn khớp ở trẻ &lt; 18 tuổi.<br>
              &bull; <strong>Clindamycin:</strong> Dẫn đầu nguy cơ gây viêm đại tràng giả mạc do Clostridium difficile (xử trí bằng Vancomycin uống hoặc Metronidazol uống).<br>
              &bull; <strong>Tetracyclin:</strong> Đọng vào xương và mầm răng gây vàng răng vĩnh viễn, chống chỉ định cho trẻ dưới 8 tuổi và phụ nữ có thai.
            </div>
          </div>
        </div>

        <!-- CHUYÊN ĐỀ 2: GLUCOCORTICOID -->
        <div class="chapter-accordion-item cs-searchable-item" id="ch-item-ch2">
          <div class="chapter-accordion-header ${openChaptersState['ch2'] ? 'active' : ''}" id="ch-head-ch2" onclick="toggleChapterAccordion('ch2')">
            <div class="chapter-acc-title-group">
              <span class="cs-pill cs-pill-danger">🔥 4 Tiết • 8-10 Câu</span>
              <span class="chapter-acc-title">Bài 2: Sử Dụng Glucocorticoid Hợp Lý &amp; An Toàn Trong Lâm Sàng</span>
            </div>
            <span class="chapter-acc-arrow">▼</span>
          </div>
          <div class="chapter-accordion-body" id="ch-body-ch2" style="display: ${openChaptersState['ch2'] ? 'block' : 'none'};">
            <div class="chapter-sec-heading">🎯 1. Bảng Tương Đương Liều Kháng Viêm Cần Thuộc Lòng:</div>
            <div class="cs-table-wrap">
              <table class="cs-table">
                <thead>
                  <tr><th>Hoạt Chất Corticoid</th><th>Liều Tương Đương (mg)</th><th>Thời Gian Bán Thải Sinh Học</th><th>Giữ Muối Nước (Na+)</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>Hydrocortison (Cortisol)</strong></td><td style="font-weight:700;">20 mg</td><td>Ngắn (8 &minus; 12 giờ)</td><td>2+ (Giữ muối nhiều)</td></tr>
                  <tr><td><strong>Prednisolon / Prednison</strong></td><td style="font-weight:700; color:#dc2626;">5 mg</td><td>Trung bình (18 &minus; 36 giờ)</td><td>1+ (Ít giữ muối)</td></tr>
                  <tr><td><strong>Methylprednisolon</strong></td><td style="font-weight:700; color:#dc2626;">4 mg</td><td>Trung bình (18 &minus; 36 giờ)</td><td>0 (Hầu như không)</td></tr>
                  <tr><td><strong>Triamcinolon</strong></td><td style="font-weight:700;">4 mg</td><td>Trung bình (18 &minus; 36 giờ)</td><td>0 (Không giữ muối)</td></tr>
                  <tr><td><strong>Dexamethason / Betamethason</strong></td><td style="font-weight:700; color:#dc2626;">0,75 mg</td><td>Dài (36 &minus; 54 giờ)</td><td>0 (Tác dụng kháng viêm cực mạnh)</td></tr>
                </tbody>
              </table>
            </div>

            <div class="chapter-sec-heading">🎯 2. Nhịp Sinh Học &amp; Thời Điểm Dùng Thuốc:</div>
            <p>Trục Hạ đồi &minus; Tuyến yên &minus; Vỏ thượng thận (HPA) tiết Cortisol theo nhịp ngày đêm: Đỉnh cao nhất vào <strong>6 &minus; 8 giờ sáng</strong>, đáy thấp nhất vào nửa đêm. Do đó, nếu dùng liều duy nhất trong ngày, <strong>bắt buộc phải uống vào 8 giờ sáng sau khi ăn no</strong> để hòa vào đỉnh sinh lý, hạn chế ức chế trục HPA gây teo vỏ thượng thận.</p>

            <div class="chapter-sec-heading">⚠️ CÁC BẪY THI TRẮC NGHIỆM VỀ GLUCOCORTICOID:</div>
            <div class="exam-trap-box">
              <div class="exam-trap-title">🛑 Bẫy 1: Quy tắc ngừng thuốc và giảm liều</div>
              &bull; Điều trị ngắn ngày <strong>dưới 2 &minus; 3 tuần (dưới 14 &minus; 21 ngày):</strong> Có thể ngừng thuốc đột ngột mà không sợ suy thượng thận cấp.<br>
              &bull; Điều trị dài ngày <strong>trên 3 tuần:</strong> Tuyệt đối phải giảm liều từ từ (tapering: giảm 10-20% liều sau mỗi 1-2 tuần). Ngừng đột ngột sẽ dẫn đến cơn suy thượng thận cấp (trụy mạch, tụt huyết áp kịch phát, tử vong).
            </div>
            <div class="exam-trap-box">
              <div class="exam-trap-title">🛑 Bẫy 2: Tác dụng không mong muốn trên chuyển hóa</div>
              Corticoid gây: <strong>Tăng đường huyết</strong> (kích thích tân tạo đường, kháng insulin), <strong>Tái phân bố mỡ</strong> (hội chứng Cushing: mặt tròn như mặt trăng, bướu trâu ở gáy, teo cơ tứ chi), <strong>Mất kali máu</strong> (hạ K+, kiềm chuyển hóa), <strong>Loãng xương</strong> (ức chế tạo xương, giảm hấp thu Ca2+ ở ruột).
            </div>
          </div>
        </div>

        <!-- CHUYÊN ĐỀ 3: TƯƠNG TÁC THUỐC -->
        <div class="chapter-accordion-item cs-searchable-item" id="ch-item-ch3">
          <div class="chapter-accordion-header ${openChaptersState['ch3'] ? 'active' : ''}" id="ch-head-ch3" onclick="toggleChapterAccordion('ch3')">
            <div class="chapter-acc-title-group">
              <span class="cs-pill cs-pill-danger">🔥 4 Tiết • 8-9 Câu</span>
              <span class="chapter-acc-title">Bài 3: Tương Tác Thuốc &amp; Tương Kỵ Trong Thực Hành Lâm Sàng</span>
            </div>
            <span class="chapter-acc-arrow">▼</span>
          </div>
          <div class="chapter-accordion-body" id="ch-body-ch3" style="display: ${openChaptersState['ch3'] ? 'block' : 'none'};">
            <div class="chapter-sec-heading">🎯 1. Tương Tác Dược Động Học Qua 4 Pha (ADME):</div>
            <ul class="chapter-point-list">
              <li><strong>Hấp thu:</strong> Tạo phức chelat không tan giữa cation kim loại đa hóa trị (Ca<sup>2+</sup>, Fe<sup>2+</sup>, Al<sup>3+</sup>, Mg<sup>2+</sup> trong sữa, antacid, viên sắt) với <em>Tetracyclin và Fluoroquinolon</em> &rarr; giảm hấp thu nghiêm trọng. Cách khắc phục: uống cách xa nhau ít nhất 2 giờ.</li>
              <li><strong>Phân bố:</strong> Đẩy nhau ra khỏi protein huyết tương. Thuốc gắn mạnh protein (NSAID, Aspirin) đẩy Warfarin hoặc Sulfonylurea &rarr; tăng tự do trong máu gây xuất huyết hoặc hạ đường huyết hôn mê.</li>
              <li><strong>Chuyển hóa (CYP450):</strong> Cảm ứng enzym gan (RPPC) làm tăng chuyển hóa thuốc khác &rarr; giảm tác dụng. Ức chế enzym gan (SICK FACES) làm giảm chuyển hóa thuốc khác &rarr; tích lũy gây độc.</li>
              <li><strong>Thải trừ:</strong> Thay đổi pH nước tiểu. Thuốc acid yếu (Aspirin, Phenobarbital) tăng thải trừ khi <em>kiềm hóa nước tiểu</em> bằng Natri bicarbonat (NaHCO<sub>3</sub>).</li>
            </ul>

            <div class="chapter-sec-heading">⚠️ CÁC BẪY THI TRẮC NGHIỆM VỀ TƯƠNG TÁC THUỐC:</div>
            <div class="exam-trap-box">
              <div class="exam-trap-title">🛑 Bẫy 1: Tốc độ khởi phát giữa Cảm ứng vs Ức chế men gan</div>
              &bull; <strong>Ức chế enzym:</strong> Xảy ra <em>NGAY LẬP TỨC</em> sau liều đầu tiên (trong vài giờ) vì thuốc cạnh tranh trực tiếp tại vị trí gắn của enzym.<br>
              &bull; <strong>Cảm ứng enzym:</strong> Diễn ra <em>TỪ TỪ CHẬM CHẠP</em> (cần 1 &minus; 2 tuần) vì tế bào gan phải mất thời gian tổng hợp thêm phân tử enzym mới; khi ngừng thuốc cảm ứng thì enzym cũng mất 1-2 tuần mới thoái hóa hết.
            </div>
            <div class="exam-trap-box">
              <div class="exam-trap-title">🛑 Bẫy 2: Tương tác P-glycoprotein (P-gp)</div>
              P-gp là bơm tống thuốc ra ngoài tế bào biểu mô ruột. Thuốc ức chế P-gp (Amiodaron, Verapamil, Clarithromycin) khi dùng cùng <strong>Digoxin</strong> sẽ làm ức chế bơm này &rarr; nồng độ Digoxin trong máu tăng vọt gấp đôi &rarr; loạn nhịp tim nhiễm độc Digoxin!
            </div>
          </div>
        </div>

        <!-- CHUYÊN ĐỀ 4: ADR & CẢNH GIÁC DƯỢC -->
        <div class="chapter-accordion-item cs-searchable-item" id="ch-item-ch4">
          <div class="chapter-accordion-header ${openChaptersState['ch4'] ? 'active' : ''}" id="ch-head-ch4" onclick="toggleChapterAccordion('ch4')">
            <div class="chapter-acc-title-group">
              <span class="cs-pill cs-pill-danger">🔥 4 Tiết • 7-8 Câu</span>
              <span class="chapter-acc-title">Bài 4: Phản Ứng Có Hại (ADR), Cảnh Giác Dược &amp; Cấp Cứu Sốc Phản Vệ</span>
            </div>
            <span class="chapter-acc-arrow">▼</span>
          </div>
          <div class="chapter-accordion-body" id="ch-body-ch4" style="display: ${openChaptersState['ch4'] ? 'block' : 'none'};">
            <div class="chapter-sec-heading">🎯 1. Phân Loại ADR Theo Rawlins &amp; Thompson:</div>
            <p><strong>Type A (Augmented):</strong> Chiếm 80%, phụ thuộc liều, tiên lượng được dựa trên tác dụng dược lý, tỷ lệ mắc cao, tỷ lệ tử vong thấp. Xử trí: giảm liều.<br>
            <strong>Type B (Bizarre):</strong> Không phụ thuộc liều, không dự đoán được, liên quan dị ứng miễn dịch hoặc bất thường gen/men (đặc ứng), tỷ lệ mắc thấp, <em>tỷ lệ tử vong rất cao</em>. Xử trí: ngừng thuốc ngay lập tức và không bao giờ dùng lại!</p>

            <div class="chapter-sec-heading">🎯 2. Phác Đồ Xử Trí Sốc Phản Vệ Theo Thông Tư 51/2017/TT-BYT:</div>
            <p>Phân loại 4 mức độ: Độ I (Nhẹ &minus; chỉ có da, niêm mạc), Độ II (Nặng &minus; mày đay + khó thở hoặc tụt HA), Độ III (Nguy kịch &minus; sốc, trụy mạch), Độ IV (Ngừng tuần hoàn).</p>
            <ul class="chapter-point-list">
              <li><strong>Từ Độ II trở lên:</strong> Lập tức tiêm <strong>Adrenalin 1 mg/1 ml (1:1000) TIÊM BẮP</strong> tại mặt trước ngoài đùi.</li>
              <li><strong>Liều người lớn:</strong> 1/2 đến 1 ống (0,5 &minus; 1 ml). Trẻ em: 0,01 ml/kg.</li>
              <li>Theo dõi huyết áp, lặp lại mỗi 3 &minus; 5 phút nếu huyết áp chưa nâng lên.</li>
              <li>Corticoid (Methylprednisolon) và Kháng histamin chỉ là thuốc hàng thứ hai dùng sau khi đã tiêm Adrenalin để dự phòng sốc pha 2 (sốc tái phát muộn sau vài giờ).</li>
            </ul>

            <div class="chapter-sec-heading">⚠️ CÁC BẪY THI TRẮC NGHIỆM VỀ ADR &amp; CẢNH GIÁC DƯỢC:</div>
            <div class="exam-trap-box">
              <div class="exam-trap-title">🛑 Bẫy 1: Thời hạn báo cáo ADR nghiêm trọng</div>
              Theo quy định của Bộ Y tế, đối với các trường hợp ADR nghiêm trọng dẫn đến <strong>TỬ VONG hoặc ĐE DỌA TÍNH MẠNG</strong>, thời hạn báo cáo về Trung tâm DI &amp; ADR Quốc gia là <strong>trong vòng 7 ngày làm việc</strong> kể từ khi phát hiện. Đối với các ADR khác, thời hạn là trong vòng 30 ngày.
            </div>
            <div class="exam-trap-box">
              <div class="exam-trap-title">🛑 Bẫy 2: Đường dùng Adrenalin trong cấp cứu phản vệ</div>
              Tiêm bắp đùi, <strong>TUYỆT ĐỐI KHÔNG tiêm dưới da</strong> vì tác dụng co mạch tại chỗ làm thuốc hấp thu rất chậm, bệnh nhân sẽ tử vong trước khi thuốc vào tuần hoàn. Chỉ truyền tĩnh mạch khi có đường truyền tĩnh mạch và đã tiêm bắp 3 lần không đáp ứng.
            </div>
          </div>
        </div>

        <!-- CHUYÊN ĐỀ 5: Ý NGHĨA XÉT NGHIỆM LÂM SÀNG -->
        <div class="chapter-accordion-item cs-searchable-item" id="ch-item-ch5">
          <div class="chapter-accordion-header ${openChaptersState['ch5'] ? 'active' : ''}" id="ch-head-ch5" onclick="toggleChapterAccordion('ch5')">
            <div class="chapter-acc-title-group">
              <span class="cs-pill cs-pill-danger">🔥 4 Tiết • 7-8 Câu</span>
              <span class="chapter-acc-title">Bài 5: Ý Nghĩa Các Xét Nghiệm Cận Lâm Sàng Trong Dược Lâm Sàng</span>
            </div>
            <span class="chapter-acc-arrow">▼</span>
          </div>
          <div class="chapter-accordion-body" id="ch-body-ch5" style="display: ${openChaptersState['ch5'] ? 'block' : 'none'};">
            <div class="chapter-sec-heading">🎯 1. Các Chỉ Số Xét Nghiệm Sống Còn Cần Nhớ:</div>
            <ul class="chapter-point-list">
              <li><strong>Chức năng gan:</strong> AST (GOT) và ALT (GPT) &minus; giá trị bình thường &lt; 40 U/L. ALT đặc hiệu cho tổn thương gan hơn AST. Khi thuốc gây tăng AST/ALT &gt; 3 &minus; 5 lần giới hạn trên bình thường (ULN) kèm tăng Bilirubin là dấu hiệu tổn thương gan do thuốc nặng (Định luật Hy's Law).</li>
              <li><strong>Chức năng thận:</strong> Creatinin huyết thanh bình thường 60 &minus; 110 &mu;mol/L (0,7 &minus; 1,2 mg/dL). Ure máu (BUN). Phân số thanh thải Creatinin Clcr phản ánh mức lọc cầu thận.</li>
              <li><strong>Huyết học:</strong> MCV (Thể tích trung bình hồng cầu): 80 &minus; 100 fl. MCV &lt; 80 fl: Thiếu máu hồng cầu nhỏ nhược sắc (thiếu Sắt, Thalassemia); MCV &gt; 100 fl: Thiếu máu hồng cầu to (thiếu Vitamin B12, Acid folic). Bạch cầu (WBC: 4 &minus; 10 G/L), Neutrophil tăng trong nhiễm trùng vi khuẩn.</li>
              <li><strong>Khí máu động mạch:</strong> pH bình thường 7,35 &minus; 7,45; PaCO<sub>2</sub> bình thường 35 &minus; 45 mmHg (chỉ số hô hấp); HCO<sub>3</sub><sup>&minus;</sup> bình thường 22 &minus; 26 mEq/L (chỉ số chuyển hóa).</li>
            </ul>

            <div class="exam-trap-box">
              <div class="exam-trap-title">🛑 Bẫy thi trắc nghiệm: Creatinin máu của người cao tuổi</div>
              Người cao tuổi bị teo cơ, khối lượng cơ giảm sút nên lượng creatinin nội sinh tạo ra mỗi ngày rất ít. Do đó, <strong>Creatinin huyết thanh của người già có thể hoàn toàn nằm trong giới hạn bình thường</strong> nhưng khi tính theo công thức Cockcroft - Gault thì Clcr đã suy giảm nặng nề! Không được nhìn nồng độ creatinin bình thường mà vội kết luận thận người già còn tốt.
            </div>
          </div>
        </div>

        <!-- CHUYÊN ĐỀ 6: TIÊU CHẢY CẤP Ở TRẺ EM -->
        <div class="chapter-accordion-item cs-searchable-item" id="ch-item-ch6">
          <div class="chapter-accordion-header ${openChaptersState['ch6'] ? 'active' : ''}" id="ch-head-ch6" onclick="toggleChapterAccordion('ch6')">
            <div class="chapter-acc-title-group">
              <span class="cs-pill cs-pill-danger">🔥 4 Tiết • 6-7 Câu</span>
              <span class="chapter-acc-title">Bài 6: Phác Đồ Điều Trị Tiêu Chảy Cấp Ở Trẻ Em (Theo Chuẩn WHO &amp; BYT)</span>
            </div>
            <span class="chapter-acc-arrow">▼</span>
          </div>
          <div class="chapter-accordion-body" id="ch-body-ch6" style="display: ${openChaptersState['ch6'] ? 'block' : 'none'};">
            <div class="chapter-sec-heading">🎯 1. Phác Đồ Bù Nước Điền Giải (A &minus; B &minus; C):</div>
            <ul class="chapter-point-list">
              <li><strong>Không mất nước:</strong> Phác đồ A (Điều trị tại nhà: cho uống Oresol sau mỗi lần đi ngoài, trẻ &lt; 2 tuổi: 50 &minus; 100 ml; trẻ 2 &minus; 10 tuổi: 100 &minus; 200 ml). Tiếp tục bú mẹ và ăn uống bình thường.</li>
              <li><strong>Có mất nước:</strong> Phác đồ B (Bù Oresol tại cơ sở y tế trong 4 giờ đầu với lượng: <code>Cân nặng (kg) &times; 75 ml</code>). Đánh giá lại sau 4 giờ.</li>
              <li><strong>Mất nước nặng (li bì, mắt trũng, nếp véo da mất rất chậm):</strong> Phác đồ C &minus; Cấp cứu truyền tĩnh mạch ngay bằng <strong>Dung dịch Ringer Lactat</strong> (hoặc Natri Clorid 0,9%) với tổng liều <strong>100 ml/kg</strong>.</li>
            </ul>

            <div class="chapter-sec-heading">🎯 2. Bổ Sung Kẽm (Zinc):</div>
            <p>Bắt buộc cho mọi trẻ tiêu chảy cấp để kích thích tái tạo niêm mạc ruột và tăng miễn dịch. Uống liên tục <strong>10 &minus; 14 ngày</strong> kể cả khi trẻ đã ngừng tiêu chảy:<br>
            &bull; Trẻ <strong>dưới 6 tháng tuổi:</strong> 10 mg/ngày.<br>
            &bull; Trẻ <strong>từ 6 tháng tuổi trở lên:</strong> 20 mg/ngày.</p>

            <div class="exam-trap-box">
              <div class="exam-trap-title">🛑 Bẫy thi trắc nghiệm: Thuốc cầm tiêu chảy và Kháng sinh</div>
              &bull; <strong>Loperamid (Imodium):</strong> Tuyệt đối CHỐNG CHỈ ĐỊNH cho trẻ em bị tiêu chảy cấp vì ức chế nhu động ruột gây ứ đọng vi khuẩn, trướng bụng, liệt ruột và hoại tử ruột.<br>
              &bull; Hầu hết tiêu chảy cấp ở trẻ do <strong>Rotavirus</strong>, do đó KHÔNG được dùng kháng sinh thường quy, chỉ dùng kháng sinh khi có bằng chứng phân lỏng lẫn máu (Lỵ trực khuẩn) hoặc dịch Tả.
            </div>
          </div>
        </div>

        <!-- CHUYÊN ĐỀ 7: SUY GAN & SUY THẬN -->
        <div class="chapter-accordion-item cs-searchable-item" id="ch-item-ch7">
          <div class="chapter-accordion-header ${openChaptersState['ch7'] ? 'active' : ''}" id="ch-head-ch7" onclick="toggleChapterAccordion('ch7')">
            <div class="chapter-acc-title-group">
              <span class="cs-pill cs-pill-warning">⚡ 3 Tiết • 5-6 Câu</span>
              <span class="chapter-acc-title">Bài 7: Sử Dụng Thuốc Cho Bệnh Nhân Suy Gan &amp; Suy Thận</span>
            </div>
            <span class="chapter-acc-arrow">▼</span>
          </div>
          <div class="chapter-accordion-body" id="ch-body-ch7" style="display: ${openChaptersState['ch7'] ? 'block' : 'none'};">
            <div class="chapter-sec-heading">🎯 1. Thang Điểm Đánh Giá Chức Năng Gan Child - Pugh:</div>
            <p>Gồm 5 chỉ số (mỗi chỉ số cho từ 1 đến 3 điểm): <strong>1) Bilirubin toàn phần, 2) Albumin huyết thanh, 3) Thời gian Prothrombin (INR), 4) Cổ trướng, 5) Bệnh não gan</strong>.<br>
            &bull; Child A (5 &minus; 6 điểm): Suy gan nhẹ &rarr; hầu như không cần giảm liều.<br>
            &bull; Child B (7 &minus; 9 điểm): Suy gan vừa &rarr; giảm 25 &minus; 50% liều thuốc chuyển hóa qua gan.<br>
            &bull; Child C (10 &minus; 15 điểm): Suy gan nặng &rarr; tránh dùng thuốc chuyển hóa qua gan.</p>

            <div class="exam-trap-box">
              <div class="exam-trap-title">🛑 Bẫy thi trắc nghiệm: Tỷ lệ chiết tách qua gan (EH)</div>
              &bull; <strong>Thuốc có EH &gt; 0,7 (chiết tách cao: Propranolol, Morphin, Lidocain, Nitroglycerin):</strong> Chuyển hóa qua gan phụ thuộc trực tiếp vào <em>Lưu lượng máu qua gan</em> (hiệu ứng vượt qua lần đầu rất lớn). Khi xơ gan lưu lượng máu giảm &rarr; nồng độ thuốc trong máu tăng vọt.<br>
              &bull; <strong>Thuốc có EH &lt; 0,3 (chiết tách thấp: Diazepam, Theophyllin, Warfarin):</strong> Chuyển hóa phụ thuộc vào <em>Hoạt tính enzym gan CYP và tỷ lệ gắn protein</em>.
            </div>
          </div>
        </div>

        <!-- CHUYÊN ĐỀ 8: PHỤ NỮ CÓ THAI & CHO CON BÚ -->
        <div class="chapter-accordion-item cs-searchable-item" id="ch-item-ch8">
          <div class="chapter-accordion-header ${openChaptersState['ch8'] ? 'active' : ''}" id="ch-head-ch8" onclick="toggleChapterAccordion('ch8')">
            <div class="chapter-acc-title-group">
              <span class="cs-pill cs-pill-warning">⚡ 3 Tiết • 5-6 Câu</span>
              <span class="chapter-acc-title">Bài 8: Sử Dụng Thuốc An Toàn Cho Phụ Nữ Mang Thai &amp; Cho Con Bú</span>
            </div>
            <span class="chapter-acc-arrow">▼</span>
          </div>
          <div class="chapter-accordion-body" id="ch-body-ch8" style="display: ${openChaptersState['ch8'] ? 'block' : 'none'};">
            <div class="chapter-sec-heading">🎯 1. Thuốc Hạ Huyết Áp An Toàn &amp; Thuốc Cấm Tuyệt Đối:</div>
            <ul class="chapter-point-list">
              <li><strong>An toàn số 1 trong thai kỳ:</strong> <strong>Methyldopa</strong> (chủ vận alpha-2 trung ương), <strong>Labetalol</strong> (chẹn alpha và beta), <strong>Nifedipin phóng thích kéo dài</strong> (chẹn kênh calci DHP).</li>
              <li><strong>CẤM TUYỆT ĐỐI (Phân loại X / D):</strong> Thuốc ức chế men chuyển (ACEi: Enalapril, Captopril) và Thuốc chẹn thụ thể AT1 (ARB: Losartan) vì gây thiểu ối, vô niệu suy thận thai nhi, biến dạng sọ mặt và chết lưu thai!</li>
            </ul>

            <div class="exam-trap-box">
              <div class="exam-trap-title">🛑 Bẫy thi trắc nghiệm: Thời điểm cho con bú khi mẹ dùng thuốc</div>
              Để giảm tối đa nồng độ thuốc vào sữa trẻ bú: Người mẹ nên <strong>cho trẻ bú NGAY TRƯỚC KHI uống thuốc</strong> (lúc này nồng độ thuốc trong sữa là thấp nhất từ liều trước), hoặc cho bú cách xa thời điểm uống thuốc ít nhất 3 &minus; 4 giờ (sau đỉnh Cmax của thuốc).
            </div>
          </div>
        </div>

        <!-- CHUYÊN ĐỀ 9: TRẺ EM & NGƯỜI CAO TUỔI -->
        <div class="chapter-accordion-item cs-searchable-item" id="ch-item-ch9">
          <div class="chapter-accordion-header ${openChaptersState['ch9'] ? 'active' : ''}" id="ch-head-ch9" onclick="toggleChapterAccordion('ch9')">
            <div class="chapter-acc-title-group">
              <span class="cs-pill cs-pill-warning">⚡ 3 Tiết • 4-5 Câu</span>
              <span class="chapter-acc-title">Bài 9: Đặc Điểm Dược Động Học Ở Trẻ Em &amp; Người Cao Tuổi</span>
            </div>
            <span class="chapter-acc-arrow">▼</span>
          </div>
          <div class="chapter-accordion-body" id="ch-body-ch9" style="display: ${openChaptersState['ch9'] ? 'block' : 'none'};">
            <div class="chapter-sec-heading">🎯 1. Hai Hội Chứng Độc Tính Nổi Tiếng Ở Trẻ Sơ Sinh:</div>
            <ul class="chapter-point-list">
              <li><strong>Hội chứng xám (Gray Baby Syndrome) do Chloramphenicol:</strong> Trẻ sơ sinh thiếu enzym liên hợp <em>Glucuronyl transferase</em> ở gan &rarr; tích lũy Chloramphenicol độc tính gây suy tuần hoàn, da xám xịt, hạ thân nhiệt và tử vong.</li>
              <li><strong>Vàng da nhân não (Kernicterus) do Sulfamid:</strong> Sulfamid đẩy Bilirubin gián tiếp khỏi vị trí gắn trên Albumin. Do hàng rào máu não của trẻ chưa hoàn thiện, Bilirubin tự do ngấm vào nhân xám não bộ gây co giật và di chứng thần kinh vĩnh viễn.</li>
            </ul>

            <div class="exam-trap-box">
              <div class="exam-trap-title">🛑 Bẫy thi trắc nghiệm: Người già và thuốc tan trong lipid</div>
              Người cao tuổi có khối lượng mỡ tăng lên (tăng 20-30%) và khối lượng nước giảm đi. Các thuốc tan nhiều trong mỡ như <strong>Diazepam (Seduxen)</strong> sẽ phân bố rộng vào mô mỡ &rarr; <strong>kéo dài thời gian bán thải t1/2 lên gấp đôi gấp ba</strong> &rarr; gây tích lũy ngủ gà, lú lẫn, hạ huyết áp tư thế và té ngã gãy cổ xương đùi!
            </div>
          </div>
        </div>

        <!-- CHUYÊN ĐỀ 10: TĂNG HUYẾT ÁP -->
        <div class="chapter-accordion-item cs-searchable-item" id="ch-item-ch10">
          <div class="chapter-accordion-header ${openChaptersState['ch10'] ? 'active' : ''}" id="ch-head-ch10" onclick="toggleChapterAccordion('ch10')">
            <div class="chapter-acc-title-group">
              <span class="cs-pill cs-pill-warning">⚡ 2 Tiết • 4-5 Câu</span>
              <span class="chapter-acc-title">Bài 10: Thuốc Điều Trị Tăng Huyết Áp &amp; Lựa Chọn Theo Bệnh Đồng Mắc</span>
            </div>
            <span class="chapter-acc-arrow">▼</span>
          </div>
          <div class="chapter-accordion-body" id="ch-body-ch10" style="display: ${openChaptersState['ch10'] ? 'block' : 'none'};">
            <div class="chapter-sec-heading">🎯 1. Lựa Chọn Thuốc Hàng Đầu Theo Bệnh Kèm:</div>
            <ul class="chapter-point-list">
              <li><strong>Có Đái tháo đường hoặc Bệnh thận mạn có Protein niệu:</strong> Lựa chọn số 1 là <strong>ƯCMC (ACEi) hoặc Chẹn thụ thể (ARB)</strong> vì bảo vệ thận, làm chậm suy thận.</li>
              <li><strong>Suy tim có phân suất tống máu giảm (HFrEF):</strong> 4 trụ cột: <em>ƯCMC/ARNI + Chẹn beta (Bisoprolol/Carvedilol/Metoprolol) + Kháng Aldosteron (Spironolacton) + Ức chế SGLT2 (Dapagliflozin/Empagliflozin)</em>.</li>
              <li><strong>Sau Nhồi máu cơ tim / Đau thắt ngực:</strong> <strong>Chẹn beta giao cảm</strong>.</li>
              <li><strong>Người cao tuổi / Tăng huyết áp tâm thu đơn độc:</strong> <strong>Chẹn kênh calci (CCB: Amlodipin) hoặc Lợi tiểu Thiazid</strong>.</li>
            </ul>

            <div class="exam-trap-box">
              <div class="exam-trap-title">🛑 Bẫy thi trắc nghiệm: Ho khan của ACEi vs ARB</div>
              Ho khan dai dẳng là do <strong>Ức chế men chuyển (ACEi) ngăn thoái giáng Bradykinin và Chất P</strong> tại đường hô hấp. Thuốc chẹn thụ thể AT1 (ARB: Losartan, Valsartan) KHÔNG ảnh hưởng đến chuyển hóa Bradykinin nên <strong>KHÔNG gây ho khan</strong>. Khi bệnh nhân ho khan do Enalapril &rarr; đổi sang dùng ARB!
            </div>
          </div>
        </div>

        <!-- CHUYÊN ĐỀ 11: GIẢM ĐAU HẠ SỐT CHỐNG VIÊM -->
        <div class="chapter-accordion-item cs-searchable-item" id="ch-item-ch11">
          <div class="chapter-accordion-header ${openChaptersState['ch11'] ? 'active' : ''}" id="ch-head-ch11" onclick="toggleChapterAccordion('ch11')">
            <div class="chapter-acc-title-group">
              <span class="cs-pill cs-pill-warning">⚡ 2 Tiết • 3-4 Câu</span>
              <span class="chapter-acc-title">Bài 11: Thuốc Giảm Đau, Hạ Sốt, Chống Viêm (Paracetamol, NSAID &amp; Opioid)</span>
            </div>
            <span class="chapter-acc-arrow">▼</span>
          </div>
          <div class="chapter-accordion-body" id="ch-body-ch11" style="display: ${openChaptersState['ch11'] ? 'block' : 'none'};">
            <div class="chapter-sec-heading">🎯 1. Liều Lượng Chuẩn &amp; Độc Tính Của Paracetamol:</div>
            <p>&bull; Liều hạ sốt giảm đau thông thường: <strong>10 &minus; 15 mg/kg mỗi 4 &minus; 6 giờ</strong>, tối đa không quá 60 mg/kg/ngày ở trẻ em.<br>
            &bull; Người lớn: Tối đa <strong>4 gam/ngày (4000 mg)</strong>. Người suy dinh dưỡng, nghiện rượu mạn tính, người già tối đa <strong>2 gam/ngày</strong>.<br>
            &bull; Cơ chế gây độc gan: Bình thường Paracetamol chuyển hóa qua CYP2E1 tạo ra chất độc <em>NAPQI</em>, sau đó được Glutathion của gan trung hòa. Khi quá liều &rarr; cạn kiệt Glutathion &rarr; NAPQI gắn vào màng tế bào gan gây hoại tử tế bào gan cấp.<br>
            &bull; Giải độc đặc hiệu: <strong>N-Acetylcystein (NAC)</strong> bổ sung nhóm &minus;SH tổng hợp glutathion.</p>

            <div class="exam-trap-box">
              <div class="exam-trap-title">🛑 Bẫy thi trắc nghiệm: Aspirin và Hội chứng Reye ở trẻ em</div>
              Aspirin tuyệt đối <strong>CHỐNG CHỈ ĐỊNH cho trẻ em dưới 16 tuổi bị sốt do nhiễm virus</strong> (cúm, thủy đậu, sốt xuất huyết) vì nguy cơ gây <em>Hội chứng Reye</em> (thoái hóa mỡ nội tạng cấp tính, phù não, hôn mê suy gan tử vong).
            </div>
          </div>
        </div>

        <!-- CHUYÊN ĐỀ 12: ĐẠI CƯƠNG DLS & CHĂM SÓC DƯỢC -->
        <div class="chapter-accordion-item cs-searchable-item" id="ch-item-ch12">
          <div class="chapter-accordion-header ${openChaptersState['ch12'] ? 'active' : ''}" id="ch-head-ch12" onclick="toggleChapterAccordion('ch12')">
            <div class="chapter-acc-title-group">
              <span class="cs-pill cs-pill-success">1 Tiết • 2 Câu</span>
              <span class="chapter-acc-title">Bài 12: Đại Cương Dược Lâm Sàng &amp; Quy Trình Chăm Sóc Dược</span>
            </div>
            <span class="chapter-acc-arrow">▼</span>
          </div>
          <div class="chapter-accordion-body" id="ch-body-ch12" style="display: ${openChaptersState['ch12'] ? 'block' : 'none'};">
            <p><strong>Khái niệm Dược lâm sàng:</strong> Là môn khoa học sức khỏe trong đó Dược sĩ cung cấp dịch vụ chăm sóc người bệnh nhằm tối ưu hóa việc sử dụng thuốc, tăng cường sức khỏe, phòng ngừa bệnh tật.<br>
            <strong>Chăm sóc Dược (Pharmaceutical Care):</strong> Định nghĩa bởi Hepler &amp; Strand (1990) &minus; cung cấp thuốc có trách nhiệm nhằm đạt được các mục tiêu cải thiện chất lượng cuộc sống người bệnh. Quy trình gồm: Thiết lập mối quan hệ &rarr; Thu thập thông tin bệnh nhân &rarr; Nhận diện các vấn đề liên quan đến thuốc (DRPs) &rarr; Xây dựng kế hoạch chăm sóc &rarr; Đánh giá theo dõi.</p>
          </div>
        </div>

        <!-- CHUYÊN ĐỀ 13: THÔNG TIN THUỐC & Y VĂN -->
        <div class="chapter-accordion-item cs-searchable-item" id="ch-item-ch13">
          <div class="chapter-accordion-header ${openChaptersState['ch13'] ? 'active' : ''}" id="ch-head-ch13" onclick="toggleChapterAccordion('ch13')">
            <div class="chapter-acc-title-group">
              <span class="cs-pill cs-pill-success">1 Tiết • 2 Câu</span>
              <span class="chapter-acc-title">Bài 13: Thông Tin Thuốc &amp; Đánh Giá Y Văn Lâm Sàng</span>
            </div>
            <span class="chapter-acc-arrow">▼</span>
          </div>
          <div class="chapter-accordion-body" id="ch-body-ch13" style="display: ${openChaptersState['ch13'] ? 'block' : 'none'};">
            <p><strong>Tháp bằng chứng y học (Hierarchy of Evidence):</strong> Mức độ bằng chứng cao nhất là <strong>Tổng quan hệ thống và phân tích gộp (Systematic Review &amp; Meta-Analysis)</strong> &rarr; Thử nghiệm lâm sàng ngẫu nhiên có đối chứng (RCT) &rarr; Nghiên cứu đoàn hệ (Cohort) &rarr; Nghiên cứu bệnh &minus; chứng (Case-Control) &rarr; Báo cáo ca bệnh (Case report) &rarr; Ý kiến chuyên gia (mức thấp nhất).<br>
            <strong>3 cấp nguồn thông tin:</strong><br>
            &bull; <em>Cấp 1 (Sơ cấp):</em> Các bài báo nghiên cứu gốc trên tạp chí y khoa (NEJM, Lancet).<br>
            &bull; <em>Cấp 2 (Thứ cấp):</em> Các cơ sở dữ liệu tóm tắt và chỉ mục tìm kiếm (PubMed, Medline, Cochrane).<br>
            &bull; <em>Cấp 3 (Tam cấp):</em> Sách giáo trình, Dược thư quốc gia, Cẩm nang Micromedex, UpToDate (thông tin đã được chọn lọc, dễ tra cứu nhất).</p>
          </div>
        </div>

        <!-- CHUYÊN ĐỀ 14: VITAMIN & KHOÁNG CHẤT -->
        <div class="chapter-accordion-item cs-searchable-item" id="ch-item-ch14">
          <div class="chapter-accordion-header ${openChaptersState['ch14'] ? 'active' : ''}" id="ch-head-ch14" onclick="toggleChapterAccordion('ch14')">
            <div class="chapter-acc-title-group">
              <span class="cs-pill cs-pill-success">1 Tiết • 2 Câu</span>
              <span class="chapter-acc-title">Bài 14: Vitamin &amp; Các Nguyên Tố Khoáng Chất Trong Trị Liệu</span>
            </div>
            <span class="chapter-acc-arrow">▼</span>
          </div>
          <div class="chapter-accordion-body" id="ch-body-ch14" style="display: ${openChaptersState['ch14'] ? 'block' : 'none'};">
            <div class="cs-table-wrap">
              <table class="cs-table">
                <thead><tr><th>Vitamin</th><th>Tên Hoạt Chất</th><th>Hội Chứng Thiếu Đặc Trưng</th></tr></thead>
                <tbody>
                  <tr><td><strong>Vitamin A</strong></td><td>Retinol</td><td>Quáng gà, khô mắt, loét giác mạc.</td></tr>
                  <tr><td><strong>Vitamin B1</strong></td><td>Thiamin</td><td><strong>Bệnh tê phù Beriberi</strong>, hội chứng não Wernicke &minus; Korsakoff ở người nghiện rượu.</td></tr>
                  <tr><td><strong>Vitamin B3</strong></td><td>Niacin / Nicotinamid</td><td><strong>Bệnh Pellagra</strong> (tam chứng 3D: Viêm da &minus; Tiêu chảy &minus; Sa sút trí tuệ / Dementia).</td></tr>
                  <tr><td><strong>Vitamin B6</strong></td><td>Pyridoxin</td><td>Viêm dây thần kinh ngoại biên (thiếu khi dùng thuốc kháng lao Isoniazid &minus; INH).</td></tr>
                  <tr><td><strong>Vitamin B9</strong></td><td>Acid folic</td><td>Dị tật ống thần kinh thai nhi, thiếu máu hồng cầu to.</td></tr>
                  <tr><td><strong>Vitamin B12</strong></td><td>Cyanocobalamin</td><td>Thiếu máu ác tính Biermer (hồng cầu to), thoái hóa tủy sống.</td></tr>
                  <tr><td><strong>Vitamin C</strong></td><td>Acid ascorbic</td><td><strong>Bệnh Scorbut</strong> (chảy máu chân răng, xuất huyết dưới da).</td></tr>
                  <tr><td><strong>Vitamin D</strong></td><td>Calcitriol / Cholecalciferol</td><td>Còi xương ở trẻ em, nhuyễn xương ở người lớn.</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- CHUYÊN ĐỀ 15: COPD & HEN -->
        <div class="chapter-accordion-item cs-searchable-item" id="ch-item-ch15">
          <div class="chapter-accordion-header ${openChaptersState['ch15'] ? 'active' : ''}" id="ch-head-ch15" onclick="toggleChapterAccordion('ch15')">
            <div class="chapter-acc-title-group">
              <span class="cs-pill cs-pill-success">1 Tiết • 2 Câu</span>
              <span class="chapter-acc-title">Bài 15: Thuốc Điều Trị COPD &amp; Hen Phế Quản</span>
            </div>
            <span class="chapter-acc-arrow">▼</span>
          </div>
          <div class="chapter-accordion-body" id="ch-body-ch15" style="display: ${openChaptersState['ch15'] ? 'block' : 'none'};">
            <ul class="chapter-point-list">
              <li><strong>Cắt cơn cấp:</strong> Thuốc đồng vận beta-2 tác dụng ngắn (SABA: Salbutamol / Albuterol, Terbutalin) dạng xịt hít. Tác dụng phụ: run tay, nhịp tim nhanh, hạ kali máu.</li>
              <li><strong>Kiểm soát dự phòng lâu dài:</strong> <strong>Corticoid dạng hít (ICS: Budesonid, Fluticason)</strong> đơn độc hoặc phối hợp LABA (Salmeterol, Formoterol).</li>
              <li><strong>Thuốc giãn phế quản kháng cholinergic:</strong> SAMA (Ipratropium) và LAMA (Tiotropium) &minus; là lựa chọn nền tảng trong bệnh COPD.</li>
            </ul>
            <div class="exam-trap-box">
              <div class="exam-trap-title">🛑 Bẫy thi trắc nghiệm: Hướng dẫn xịt Corticoid (ICS)</div>
              Bệnh nhân sau khi hít Corticoid (Budesonid, Seretide, Symbicort) <strong>BẮT BUỘC PHẢI SÚC MIỆNG VÀ NHỔ RA</strong> để tránh thuốc đọng lại ở họng gây nấm miệng (nhiễm nấm Candida hầu họng) và khàn tiếng!
            </div>
          </div>
        </div>

        <!-- CHUYÊN ĐỀ 16: ĐÁI THÁO ĐƯỜNG -->
        <div class="chapter-accordion-item cs-searchable-item" id="ch-item-ch16">
          <div class="chapter-accordion-header ${openChaptersState['ch16'] ? 'active' : ''}" id="ch-head-ch16" onclick="toggleChapterAccordion('ch16')">
            <div class="chapter-acc-title-group">
              <span class="cs-pill cs-pill-success">1 Tiết • 2-3 Câu</span>
              <span class="chapter-acc-title">Bài 16: Thuốc Điều Trị Đái Tháo Đường &amp; Kiểm Soát Glucose Máu</span>
            </div>
            <span class="chapter-acc-arrow">▼</span>
          </div>
          <div class="chapter-accordion-body" id="ch-body-ch16" style="display: ${openChaptersState['ch16'] ? 'block' : 'none'};">
            <ul class="chapter-point-list">
              <li><strong>Biguanid (Metformin):</strong> Thuốc đầu tay trong ĐTĐ týp 2. Tác dụng: giảm tân tạo glucose tại gan, tăng nhạy cảm insulin ở mô ngoại vi. Không gây hạ đường huyết khi dùng đơn độc, giảm cân nhẹ.</li>
              <li><strong>Sulfonylurea (Gliclazid, Glimepirid):</strong> Kích thích tế bào beta tụy tiết insulin. Tác dụng phụ: nguy cơ cao nhất về <em>hạ đường huyết</em> và tăng cân.</li>
              <li><strong>Ức chế SGLT2 (Dapagliflozin, Empagliflozin):</strong> Ức chế tái hấp thu đường ở ống thận, thải đường qua nước tiểu. Ưu điểm vượt trội: giảm tử vong tim mạch, giảm suy tim và bảo vệ thận. Tác dụng phụ: nhiễm nấm sinh dục &minus; tiết niệu.</li>
            </ul>
            <div class="exam-trap-box">
              <div class="exam-trap-title">🛑 Bẫy thi trắc nghiệm: Chống chỉ định của Metformin</div>
              Metformin <strong>CHỐNG CHỈ ĐỊNH TUYỆT ĐỐI khi suy thận nặng có eGFR &lt; 30 ml/phút</strong> (và không khuyến cáo khởi đầu khi eGFR 30 &minus; 44 ml/phút) vì thuốc tích lũy dẫn đến nguy cơ <em>toan acid lactic (Lactic Acidosis)</em> với tỷ lệ tử vong lên tới 50%!
            </div>
          </div>
        </div>

        <!-- CHUYÊN ĐỀ 17: RỐI LOẠN LIPID MÁU -->
        <div class="chapter-accordion-item cs-searchable-item" id="ch-item-ch17">
          <div class="chapter-accordion-header ${openChaptersState['ch17'] ? 'active' : ''}" id="ch-head-ch17" onclick="toggleChapterAccordion('ch17')">
            <div class="chapter-acc-title-group">
              <span class="cs-pill cs-pill-success">1 Tiết • 2 Câu</span>
              <span class="chapter-acc-title">Bài 17: Thuốc Điều Trị Rối Loạn Lipid Máu</span>
            </div>
            <span class="chapter-acc-arrow">▼</span>
          </div>
          <div class="chapter-accordion-body" id="ch-body-ch17" style="display: ${openChaptersState['ch17'] ? 'block' : 'none'};">
            <ul class="chapter-point-list">
              <li><strong>Nhóm Statin (Atorvastatin, Rosuvastatin, Simvastatin):</strong> Ức chế cạnh tranh enzym <em>HMG-CoA Reductase</em>, giảm tổng hợp cholesterol ở gan, tăng biểu hiện thụ thể LDL, hạ LDL-C mạnh nhất.</li>
              <li><strong>Nhóm Fibrat (Fenofibrat, Gemfibrozil):</strong> Kích hoạt thụ thể PPAR-alpha, hạ Triglycerid mạnh nhất.</li>
            </ul>
            <div class="exam-trap-box">
              <div class="exam-trap-title">🛑 Bẫy thi trắc nghiệm: Tương tác gây tiêu cơ vân cấp</div>
              &bull; <strong>Thời điểm uống Statin:</strong> Các statin có thời gian bán thải ngắn (Simvastatin, Pravastatin) bắt buộc phải <strong>uống vào buổi tối trước khi đi ngủ</strong> vì enzym tổng hợp cholesterol hoạt động mạnh nhất vào ban đêm.<br>
              &bull; <strong>Chống chỉ định phối hợp:</strong> Tuyệt đối <em>KHÔNG phối hợp Statin với Gemfibrozil</em> vì ức chế chuyển hóa statin, làm tăng nguy cơ tổn thương cơ vân cấp (Rhabdomyolysis) dẫn đến giải phóng myoglobin gây suy thận cấp tử vong!
            </div>
          </div>
        </div>

      </div>


      <!-- ========================================== -->
      <!-- SECTION 3: MA TRẬN 17 BÀI & TRỌNG SỐ 44H (80/20) -->
      <!-- ========================================== -->
      <div class="question-card cs-searchable-item" id="cs-sec-strategy" style="display: ${isStrategy ? 'block' : 'none'};">
        <h2 style="font-size: 1.25rem; color: var(--secondary); font-family: var(--font-heading); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
          <span>🎯</span> 3. Ma Trận Đề Thi &amp; Phân Bổ Trọng Số Điểm 44 Giờ (Quy Tắc 80/20)
        </h2>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1.25rem;">
          Chương trình Dược lâm sàng theo chuẩn Bộ Y tế gồm <strong>44 tiết lý thuyết chia thành 17 bài</strong>. Theo nguyên lý Pareto: Chỉ cần nắm vững nhóm 6 bài 4 tiết là bạn đã làm chủ được <strong>gần 60% tổng số câu hỏi trong đề thi 80 câu</strong>!
        </p>

        <div class="cs-table-wrap">
          <table class="cs-table">
            <thead>
              <tr>
                <th style="width: 50px; text-align: center;">STT</th>
                <th>Chuyên Đề (17 Bài)</th>
                <th style="text-align: center;">Số Tiết</th>
                <th style="text-align: center;">Dự Đoán Câu Hỏi</th>
                <th style="text-align: center;">Mức Độ Ưu Tiên</th>
                <th>Nội Dung Trọng Tâm Phải Nắm Vững</th>
              </tr>
            </thead>
            <tbody>
              <tr style="background: rgba(239, 68, 68, 0.04);">
                <td style="text-align: center; font-weight: 700;">1</td>
                <td><strong>Bài 1: Kháng sinh &amp; Sử dụng hợp lý</strong></td>
                <td style="text-align: center; font-weight: 700;">4 tiết</td>
                <td style="text-align: center; font-weight: 700; color: #dc2626;">9 &minus; 11 câu</td>
                <td style="text-align: center;"><span class="cs-pill cs-pill-danger">🔥 Tối Cấp (Top 1)</span></td>
                <td>10 phân nhóm, cơ chế, độc tính đặc thù, chỉ số PK/PD, dự phòng ngoại khoa.</td>
              </tr>
              <tr style="background: rgba(239, 68, 68, 0.04);">
                <td style="text-align: center; font-weight: 700;">2</td>
                <td><strong>Bài 2: Glucocorticoid lâm sàng</strong></td>
                <td style="text-align: center; font-weight: 700;">4 tiết</td>
                <td style="text-align: center; font-weight: 700; color: #dc2626;">8 &minus; 10 câu</td>
                <td style="text-align: center;"><span class="cs-pill cs-pill-danger">🔥 Tối Cấp (Top 2)</span></td>
                <td>Tương đương liều, nhịp cortisol, uống 8h sáng, ngừng thuốc sau 3 tuần, suy thượng thận.</td>
              </tr>
              <tr style="background: rgba(239, 68, 68, 0.04);">
                <td style="text-align: center; font-weight: 700;">3</td>
                <td><strong>Bài 3: Tương tác thuốc &amp; Tương kỵ</strong></td>
                <td style="text-align: center; font-weight: 700;">4 tiết</td>
                <td style="text-align: center; font-weight: 700; color: #dc2626;">8 &minus; 9 câu</td>
                <td style="text-align: center;"><span class="cs-pill cs-pill-danger">🔥 Tối Cấp (Top 3)</span></td>
                <td>CYP450 (Cảm ứng RPPC, ức chế SICK FACES), P-gp, chelat hóa cation Ca/Fe/Al.</td>
              </tr>
              <tr style="background: rgba(239, 68, 68, 0.04);">
                <td style="text-align: center; font-weight: 700;">4</td>
                <td><strong>Bài 4: ADR &amp; Cảnh giác dược</strong></td>
                <td style="text-align: center; font-weight: 700;">4 tiết</td>
                <td style="text-align: center; font-weight: 700; color: #dc2626;">7 &minus; 8 câu</td>
                <td style="text-align: center;"><span class="cs-pill cs-pill-danger">🔥 Tối Cấp (Top 4)</span></td>
                <td>Rawlins Type A/B, quy trình báo cáo trong 7 ngày, cấp cứu sốc phản vệ Adrenalin tiêm bắp.</td>
              </tr>
              <tr style="background: rgba(239, 68, 68, 0.04);">
                <td style="text-align: center; font-weight: 700;">5</td>
                <td><strong>Bài 5: Xét nghiệm lâm sàng</strong></td>
                <td style="text-align: center; font-weight: 700;">4 tiết</td>
                <td style="text-align: center; font-weight: 700; color: #dc2626;">7 &minus; 8 câu</td>
                <td style="text-align: center;"><span class="cs-pill cs-pill-danger">🔥 Tối Cấp (Top 5)</span></td>
                <td>Creatinin, Clcr, AST/ALT gan, Bilirubin, Công thức máu MCV, Khí máu động mạch.</td>
              </tr>
              <tr style="background: rgba(239, 68, 68, 0.04);">
                <td style="text-align: center; font-weight: 700;">6</td>
                <td><strong>Bài 6: Tiêu chảy cấp ở trẻ em</strong></td>
                <td style="text-align: center; font-weight: 700;">4 tiết</td>
                <td style="text-align: center; font-weight: 700; color: #dc2626;">6 &minus; 7 câu</td>
                <td style="text-align: center;"><span class="cs-pill cs-pill-danger">🔥 Tối Cấp (Top 6)</span></td>
                <td>Phác đồ A-B-C, Oresol 245 mOsm/L, Bổ sung kẽm 10-14 ngày, cấm Loperamid ở trẻ.</td>
              </tr>
              <tr style="background: rgba(245, 158, 11, 0.04);">
                <td style="text-align: center; font-weight: 700;">7</td>
                <td><strong>Bài 7: Suy gan &amp; Suy thận</strong></td>
                <td style="text-align: center; font-weight: 600;">3 tiết</td>
                <td style="text-align: center; font-weight: 600; color: #b45309;">5 &minus; 6 câu</td>
                <td style="text-align: center;"><span class="cs-pill cs-pill-warning">⚡ Trọng Điểm</span></td>
                <td>Thang điểm Child-Pugh, công thức Cockcroft-Gault, phương pháp Giusti-Hayton.</td>
              </tr>
              <tr style="background: rgba(245, 158, 11, 0.04);">
                <td style="text-align: center; font-weight: 700;">8</td>
                <td><strong>Bài 8: PN mang thai &amp; Cho con bú</strong></td>
                <td style="text-align: center; font-weight: 600;">3 tiết</td>
                <td style="text-align: center; font-weight: 600; color: #b45309;">5 &minus; 6 câu</td>
                <td style="text-align: center;"><span class="cs-pill cs-pill-warning">⚡ Trọng Điểm</span></td>
                <td>Thuốc hạ HA an toàn (Methyldopa, Labetalol), thuốc cấm X/D (ACEi, ARB, Warfarin).</td>
              </tr>
              <tr style="background: rgba(245, 158, 11, 0.04);">
                <td style="text-align: center; font-weight: 700;">9</td>
                <td><strong>Bài 9: Trẻ em &amp; Người cao tuổi</strong></td>
                <td style="text-align: center; font-weight: 600;">3 tiết</td>
                <td style="text-align: center; font-weight: 600; color: #b45309;">4 &minus; 5 câu</td>
                <td style="text-align: center;"><span class="cs-pill cs-pill-warning">⚡ Trọng Điểm</span></td>
                <td>Hội chứng xám (Chloramphenicol), vàng da nhân, người già teo cơ Scr thấp.</td>
              </tr>
              <tr style="background: rgba(245, 158, 11, 0.04);">
                <td style="text-align: center; font-weight: 700;">10</td>
                <td><strong>Bài 10: Tăng huyết áp</strong></td>
                <td style="text-align: center; font-weight: 600;">2 tiết</td>
                <td style="text-align: center; font-weight: 600; color: #b45309;">4 &minus; 5 câu</td>
                <td style="text-align: center;"><span class="cs-pill cs-pill-warning">⚡ Trọng Điểm</span></td>
                <td>5 nhóm thuốc, chọn thuốc theo ĐTĐ/suy tim/thận, tác dụng phụ ho khan do Bradykinin.</td>
              </tr>
              <tr style="background: rgba(245, 158, 11, 0.04);">
                <td style="text-align: center; font-weight: 700;">11</td>
                <td><strong>Bài 11: Giảm đau hạ sốt chống viêm</strong></td>
                <td style="text-align: center; font-weight: 600;">2 tiết</td>
                <td style="text-align: center; font-weight: 600; color: #b45309;">3 &minus; 4 câu</td>
                <td style="text-align: center;"><span class="cs-pill cs-pill-warning">⚡ Trọng Điểm</span></td>
                <td>Paracetamol 4g/ngày (giải độc NAC), cấm Aspirin ở trẻ sốt virus (hội chứng Reye).</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 700;">12-17</td>
                <td><strong>Bài 12 &minus; 17 (Nền tảng bổ trợ)</strong></td>
                <td style="text-align: center; color: var(--text-muted);">6 tiết</td>
                <td style="text-align: center; color: var(--text-muted);">10 &minus; 12 câu</td>
                <td style="text-align: center;"><span class="cs-pill cs-pill-success">Cơ bản</span></td>
                <td>Đại cương DLS, Thông tin thuốc, Vitamin, Hen/COPD, ĐTĐ (Metformin), Lipid (Statin).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


      <!-- ========================================== -->
      <!-- SECTION 4: THẦN CHÚ & CẶP ĐOI KINH ĐIỂN -->
      <!-- ========================================== -->
      <div class="question-card cs-searchable-item" id="cs-sec-mnemonics" style="display: ${isMnemonics ? 'block' : 'none'};">
        <h2 style="font-size: 1.25rem; color: var(--accent); font-family: var(--font-heading); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
          <span>🧠</span> 4. "Thần Chú" Lâm Sàng &amp; Phản Xạ 10 Giây Khi Làm Đề Trắc Nghiệm
        </h2>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1.25rem;">
          Những mẹo nhớ nhanh và quy tắc vàng trong lâm sàng giúp bạn trả lời chính xác câu hỏi thi trong vòng 10 giây mà không sợ nhầm lẫn.
        </p>

        <div class="mnemonic-grid">

          <div class="mnemonic-card cs-searchable-item" style="border-left: 4px solid #ef4444;">
            <div class="mnemonic-title">⚡ 1. Nhóm Cảm Ứng Men Gan CYP450</div>
            <div class="mnemonic-quote">"RPPC" &minus; Rút ngắn đời sống thuốc khác!</div>
            <div class="mnemonic-desc">
              <strong>R</strong>ifampicin, <strong>P</strong>henobarbital, <strong>P</strong>henytoin, <strong>C</strong>arbamazepin.<br>
              &rarr; Kích thích enzym CYP tăng hoạt tính, làm <em>tăng chuyển hóa &amp; giảm nồng độ</em> của thuốc dùng kèm (gây mất tác dụng của thuốc tránh thai đường uống, thuốc chống đông Warfarin).
            </div>
          </div>

          <div class="mnemonic-card cs-searchable-item" style="border-left: 4px solid #f59e0b;">
            <div class="mnemonic-title">⚠️ 2. Nhóm Ức Chế Men Gan CYP450</div>
            <div class="mnemonic-quote">"SICK FACES" &minus; Nguy cơ ngộ độc kịch phát!</div>
            <div class="mnemonic-desc">
              <strong>S</strong>ulfamid, <strong>I</strong>soniazid, <strong>C</strong>imetidin, <strong>K</strong>etoconazol (Kháng nấm Azol), <strong>F</strong>luoxetin, <strong>A</strong>miodaron, <strong>C</strong>larithro/Erythromycin, Nước bưởi chùm (Grapefruit).<br>
              &rarr; <em>Làm giảm chuyển hóa, tăng nồng độ máu</em> thuốc phối hợp &rarr; gây độc tính nghiêm trọng (chảy máu do Warfarin, xoắn đỉnh do Astemizol).
            </div>
          </div>

          <div class="mnemonic-card cs-searchable-item" style="border-left: 4px solid #10b981;">
            <div class="mnemonic-title">🚨 3. Phác Đồ Xử Trí Sốc Phản Vệ</div>
            <div class="mnemonic-quote">Adrenalin 1:1000 tiêm bắp ngay &minus; Không chần chừ!</div>
            <div class="mnemonic-desc">
              Thuốc cấp cứu đầu tay sống còn là <strong>Adrenalin (Epinephrin) 1 mg/1 ml (1:1000)</strong>.<br>
              &bull; Người lớn: Tiêm bắp <strong>0,5 &minus; 1 ống (0,5 &minus; 1 ml)</strong> ở mặt trước ngoài đùi.<br>
              &bull; Trẻ em: <strong>0,01 ml/kg</strong> (tối đa 0,3 &minus; 0,5 ml/lần).<br>
              &bull; Không tiêm dưới da vì co mạch hấp thu chậm! Lặp lại sau mỗi 3-5 phút nếu chưa hồi phục.
            </div>
          </div>

          <div class="mnemonic-card cs-searchable-item" style="border-left: 4px solid #3b82f6;">
            <div class="mnemonic-title">⏰ 4. Quy Tắc Dùng Glucocorticoid</div>
            <div class="mnemonic-quote">Uống 1 lần duy nhất lúc 8h sáng &minus; Tránh teo thượng thận!</div>
            <div class="mnemonic-desc">
              Trùng với đỉnh sinh lý bài tiết Cortisol của cơ thể. Uống sau ăn no để giảm loét dạ dày.<br>
              &bull; <strong>Dùng dưới 2 &minus; 3 tuần:</strong> Có thể ngừng thuốc đột ngột mà không sợ suy vỏ thượng thận cấp.<br>
              &bull; <strong>Dùng kéo dài &gt; 3 tuần:</strong> Tuyệt đối phải giảm liều từ từ trước khi ngừng hẳn.
            </div>
          </div>

          <div class="mnemonic-card cs-searchable-item" style="border-left: 4px solid #8b5cf6;">
            <div class="mnemonic-title">🔪 5. Kháng Sinh Dự Phòng Phẫu Thuật</div>
            <div class="mnemonic-quote">Trong vòng 60 phút trước rạch da &minus; Tối đa 24 giờ sau mổ!</div>
            <div class="mnemonic-desc">
              &bull; Tiêm lúc khởi mê (trong vòng 60 phút trước khi rạch da), riêng Vancomycin/Quinolon truyền trước 120 phút.<br>
              &bull; Thuốc chuẩn: <strong>Cefazolin</strong> (Cephalosporin thế hệ 1). Nếu phẫu thuật trực tràng/tiêu hóa: phối hợp thêm <strong>Metronidazol</strong>.<br>
              &bull; Thời gian dùng: Không quá 24 giờ sau khi kết thúc mổ.
            </div>
          </div>

          <div class="mnemonic-card cs-searchable-item" style="border-left: 4px solid #ec4899;">
            <div class="mnemonic-title">🥛 6. Hướng Dẫn Uống Thuốc Đặc Biệt</div>
            <div class="mnemonic-quote">Alendronat: Đứng thẳng 30-60 phút &minus; Levothyroxin: Bụng đói!</div>
            <div class="mnemonic-desc">
              &bull; <strong>Alendronat (Trị loãng xương):</strong> Uống buổi sáng lúc đói với 200ml nước lọc, giữ tư thế thẳng đứng trong 30-60 phút để tránh loét thực quản.<br>
              &bull; <strong>Levothyroxin:</strong> Uống trước ăn sáng 30-60 phút.<br>
              &bull; <strong>Sucralfat / PPI:</strong> Uống trước bữa ăn 30-60 phút.
            </div>
          </div>

        </div>
      </div>


      <!-- ========================================== -->
      <!-- SECTION 5: THUỐC CẤP CỨU & GIẢI ĐỘC (ANTIDOTES) -->
      <!-- ========================================== -->
      <div class="question-card cs-searchable-item" id="cs-sec-antidotes" style="display: ${isAntidotes ? 'block' : 'none'};">
        <h2 style="font-size: 1.25rem; color: #dc2626; font-family: var(--font-heading); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
          <span>⚡</span> 5. Bảng Tra Cứu Khẩn Cấp: Thuốc Giải Độc (Antidotes) &amp; Thuốc Cấm Thai Kỳ
        </h2>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1.25rem;">
          Bảng tổng hợp những chất giải độc đặc hiệu bắt buộc trong cấp cứu ngộ độc và danh mục thuốc gây quái thai tuyệt đối không được sử dụng.
        </p>

        <!-- BẢNG ANTIDOTE -->
        <h3 style="font-size: 1rem; color: var(--primary); margin-bottom: 0.6rem; font-family: var(--font-heading);">
          🛡️ 5.1. Bảng Tra Cứu Thuốc Giải Độc Đặc Hiệu (Antidotes)
        </h3>
        <div class="cs-table-wrap">
          <table class="cs-table">
            <thead>
              <tr>
                <th>Loại Thuốc / Chất Độc</th>
                <th>Chất Giải Độc Đặc Hiệu (Antidote)</th>
                <th>Cơ Chế &amp; Lưu Ý Lâm Sàng</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Paracetamol (Acetaminophen)</strong></td>
                <td><span style="color: #dc2626; font-weight: 700;">N-Acetylcystein (NAC)</span></td>
                <td>Bổ sung gốc glutathion để trung hòa chất chuyển hóa độc hại NAPQI. Hiệu quả tốt nhất trong 8-10 giờ đầu sau ngộ độc.</td>
              </tr>
              <tr>
                <td><strong>Opioid (Morphin, Heroin, Codein, Fentanyl)</strong></td>
                <td><span style="color: #dc2626; font-weight: 700;">Naloxon</span></td>
                <td>Đối kháng cạnh tranh tại thụ thể Mu-opioid, phục hồi ức chế hô hấp trong vài phút.</td>
              </tr>
              <tr>
                <td><strong>Benzodiazepin (Seduxen, Diazepam, Midazolam)</strong></td>
                <td><span style="color: #dc2626; font-weight: 700;">Flumazenil</span></td>
                <td>Đối kháng cạnh tranh tại vị trí gắn benzodiazepin trên thụ thể GABA-A. Thận trọng nguy cơ co giật.</td>
              </tr>
              <tr>
                <td><strong>Glycosid tim (Digoxin)</strong></td>
                <td><span style="color: #dc2626; font-weight: 700;">DigiFab (Digitalis-Antidot)</span></td>
                <td>Kháng thể kháng Digoxin gắn kết bất hoạt trực tiếp phân tử digoxin tự do trong máu.</td>
              </tr>
              <tr>
                <td><strong>Heparin không phân đoạn (UFH)</strong></td>
                <td><span style="color: #dc2626; font-weight: 700;">Protamin sulfat</span></td>
                <td>Chất kiềm tích điện dương liên kết trung hòa heparin tích điện âm. 1 mg Protamin trung hòa khoảng 100 UI Heparin.</td>
              </tr>
              <tr>
                <td><strong>Thuốc chống đông kháng Vitamin K (Warfarin, Sintrom)</strong></td>
                <td><span style="color: #dc2626; font-weight: 700;">Vitamin K1 (Phytomenadion) / PCC</span></td>
                <td>Phục hồi tổng hợp các yếu tố đông máu II, VII, IX, X. Xuất huyết nặng truyền phức hợp Prothrombin cô đặc (PCC).</td>
              </tr>
              <tr>
                <td><strong>Ngộ độc Methanol / Ethylen glycol</strong></td>
                <td><span style="color: #dc2626; font-weight: 700;">Ethanol hoặc Fomepizol</span></td>
                <td>Cạnh tranh ức chế enzym Alcohol dehydrogenase (ADH), ngăn tạo acid formic gây mù mắt và toan chuyển hóa.</td>
              </tr>
              <tr>
                <td><strong>Thuốc ức chế men cholinesterase (Thuốc trừ sâu phospho hữu cơ)</strong></td>
                <td><span style="color: #dc2626; font-weight: 700;">Atropin sulfat + Pralidoxim (PAM)</span></td>
                <td>Atropin đối kháng tại thụ thể Muscarinic; Pralidoxim giúp tái sinh enzym acetylcholinesterase.</td>
              </tr>
              <tr>
                <td><strong>Kim loại nặng (Chì, Thủy ngân, Asen)</strong></td>
                <td><span style="color: #dc2626; font-weight: 700;">Dimercaprol (BAL), D-Penicillamin, EDTA</span></td>
                <td>Chất tạo phức chelat gắn kết kim loại nặng thành hợp chất tan đào thải qua nước tiểu.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- BẢNG THUỐC CẤM THAI KỲ -->
        <h3 style="font-size: 1rem; color: #dc2626; margin-top: 1.25rem; margin-bottom: 0.6rem; font-family: var(--font-heading);">
          🚫 5.2. Danh Mục Thuốc Gây Quái Thai Bị Cấm Tuyệt Đối Cho Phụ Nữ Mang Thai (Phân Loại X / D Nguy Hiểm)
        </h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 0.75rem;">
          <div style="background: var(--surface-alt); padding: 0.85rem; border-radius: var(--radius-sm); border-left: 3px solid #dc2626;">
            <strong style="color: #dc2626;">Isotretinoin &amp; Vitamin A liều cao:</strong><br>
            Gây quái thai nghiêm trọng: dị tật sọ mặt, tai, tim mạch, hệ thần kinh trung ương (Phân loại X).
          </div>
          <div style="background: var(--surface-alt); padding: 0.85rem; border-radius: var(--radius-sm); border-left: 3px solid #dc2626;">
            <strong style="color: #dc2626;">Thalidomid:</strong><br>
            Hội chứng phocomelia (cụt chi, dị tật tay chân hình mái chèo ở thai nhi).
          </div>
          <div style="background: var(--surface-alt); padding: 0.85rem; border-radius: var(--radius-sm); border-left: 3px solid #dc2626;">
            <strong style="color: #dc2626;">Thuốc ức chế men chuyển (ACEi) &amp; Chẹn thụ thể (ARB):</strong><br>
            Captopril, Enalapril, Losartan &rarr; gây suy thận thai nhi, thiểu ối, giảm sản xương sọ, chết thai.
          </div>
          <div style="background: var(--surface-alt); padding: 0.85rem; border-radius: var(--radius-sm); border-left: 3px solid #dc2626;">
            <strong style="color: #dc2626;">Warfarin:</strong><br>
            Hội chứng Warfarin bào thai (giảm sản xương mũi, cốt hóa đầu xương, teo nhãn cầu, xuất huyết thai).
          </div>
          <div style="background: var(--surface-alt); padding: 0.85rem; border-radius: var(--radius-sm); border-left: 3px solid #dc2626;">
            <strong style="color: #dc2626;">Tetracyclin / Doxycyclin:</strong><br>
            Gắn kết vĩnh viễn vào mầm răng và xương &rarr; ố vàng răng vĩnh viễn, chậm phát triển xương thai nhi.
          </div>
          <div style="background: var(--surface-alt); padding: 0.85rem; border-radius: var(--radius-sm); border-left: 3px solid #dc2626;">
            <strong style="color: #dc2626;">Valproat natri / Carbamazepin:</strong><br>
            Gây khuyết tật ống thần kinh (nứt đốt sống / gai đôi cột sống - Spina Bifida).
          </div>
        </div>
      </div>


      <!-- ========================================== -->
      <!-- SECTION 6: DƯỢC LÝ 1 & 2 TRỌNG TÂM CHO DƯỢC LÂM SÀNG -->
      <!-- ========================================== -->
      <div class="question-card cs-searchable-item" id="cs-sec-pharmacology" style="display: ${isPharmacology ? 'block' : 'none'};">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 0.75rem;">
          <div>
            <h2 style="font-size: 1.25rem; color: #0284c7; font-family: var(--font-heading); margin-bottom: 0.35rem; display: flex; align-items: center; gap: 0.5rem;">
              <span>💊</span> 6. Dược Lý 1 &amp; 2 Trọng Tâm (Nền Tảng Đột Phá Điểm Dược Lâm Sàng)
            </h2>
            <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.5;">
              Tổng hợp tinh hoa từ 2 giáo trình <strong>Dược Lý Học Tập 1 &amp; Tập 2 (ĐH Dược Hà Nội - PGS.TS Mai Tất Tố, TS. Vũ Thị Trâm)</strong>. Cung cấp cơ chế phân tử, bản đồ thụ thể, bẫy chuyển hóa gan CYP450, độc tính kinh điển và nguyên lý giải quyết các tình huống ca lâm sàng.
            </p>
          </div>
          <div style="display: flex; gap: 0.5rem;">
            <button class="btn btn-outline" style="font-size: 0.78rem; padding: 0.35rem 0.75rem; min-height: 36px;" onclick="toggleAllDl(true)">
              ➕ Mở Tất Cả
            </button>
            <button class="btn btn-outline" style="font-size: 0.78rem; padding: 0.35rem 0.75rem; min-height: 36px;" onclick="toggleAllDl(false)">
              ➖ Thu Gọn
            </button>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.85rem;">

          <!-- ==================================================== -->
          <!-- MODULE 1: DƯỢC ĐỘNG HỌC CƠ BẢN (ADME) -->
          <!-- ==================================================== -->
          <div class="chapter-accordion-item cs-searchable-item" id="dl-item-adme">
            <div class="chapter-accordion-header ${openChaptersState['dl1_adme'] ? 'active' : ''}" id="dl-head-dl1_adme" onclick="toggleDlAccordion('dl1_adme')">
              <div class="chapter-acc-title-wrap">
                <span class="chapter-acc-icon">🧬</span>
                <div>
                  <div class="chapter-acc-title">Module 1 (Dược Lý 1): Dược Động Học 4 Pha (ADME) &amp; Bẫy Chuyển Hóa Gan - Thận</div>
                  <div class="chapter-acc-subtitle">Henderson-Hasselbalch, kiềm/acid hóa nước tiểu, Vd, gắn protein, cảm ứng/ức chế CYP450, quy tắc 5 t1/2</div>
                </div>
              </div>
              <span class="cs-pill cs-pill-info" style="margin-right: 0.5rem;">Dược Lý 1</span>
              <span class="chapter-acc-arrow">▼</span>
            </div>
            <div class="chapter-accordion-body" id="dl-body-dl1_adme" style="display: ${openChaptersState['dl1_adme'] ? 'block' : 'none'};">
              
              <!-- HẤP THU -->
              <h4 style="font-size: 0.95rem; color: var(--primary); margin-bottom: 0.5rem; font-family: var(--font-heading);">
                1. Pha Hấp Thu (Absorption) &amp; Đổi pH Nước Tiểu Cấp Cứu Ngộ Độc
              </h4>
              <ul style="font-size: 0.86rem; line-height: 1.6; margin-bottom: 0.85rem; padding-left: 1.2rem;">
                <li><strong>Quy tắc khuếch tán thụ động:</strong> Chỉ có dạng <em>không ion hóa</em> (không tích điện, tan trong lipid) mới khuếch tán tự do qua lớp lipid kép của màng tế bào.</li>
                <li><strong>Phương trình Henderson - Hasselbalch:</strong>
                  <div class="math-eq-row" style="margin: 0.4rem 0; font-size: 0.95rem;">
                    <span>Đối với thuốc Acid yếu:</span>
                    <span class="math-sym">pH</span> &minus; <span class="math-sym">pKa</span>
                    <span class="math-op">=</span>
                    <span class="math-sym">log</span>
                    <span class="math-frac">
                      <span class="math-num">[Dạng Ion hóa A<sup>&minus;</sup>]</span>
                      <span class="math-denom">[Dạng Không ion hóa HA]</span>
                    </span>
                  </div>
                  <div class="math-eq-row" style="margin: 0.4rem 0; font-size: 0.95rem;">
                    <span>Đối với thuốc Base yếu:</span>
                    <span class="math-sym">pH</span> &minus; <span class="math-sym">pKa</span>
                    <span class="math-op">=</span>
                    <span class="math-sym">log</span>
                    <span class="math-frac">
                      <span class="math-num">[Dạng Không ion hóa B]</span>
                      <span class="math-denom">[Dạng Ion hóa BH<sup>+</sup>]</span>
                    </span>
                  </div>
                </li>
                <li><strong>Bẫy lâm sàng cấp cứu ngộ độc:</strong>
                  <br>&bull; <em>Ngộ độc thuốc acid yếu (Aspirin, Phenobarbital, Methotrexat):</em> <strong>Kiềm hóa nước tiểu bằng NaHCO<sub>3</sub></strong> &rarr; tăng tỷ lệ ion hóa trong ống thận &rarr; không tái hấp thu được &rarr; tăng thải trừ qua nước tiểu.
                  <br>&bull; <em>Ngộ độc thuốc base yếu (Amphetamin, Quinin):</em> <strong>Acid hóa nước tiểu bằng NH<sub>4</sub>Cl hoặc Vitamin C</strong>.
                </li>
                <li><strong>Hiệu ứng vượt qua lần đầu (First-pass metabolism):</strong> Thuốc bị enzym gan phá hủy trước khi vào đại tuần hoàn. <em>Nitroglycerin</em> bị phân hủy &gt; 90% ở gan &rarr; bắt buộc đặt dưới lưỡi ngấm thẳng tĩnh mạch chủ trên. <em>Propranolol</em> có F đường uống chỉ khoảng 25%.</li>
              </ul>

              <!-- PHÂN BỐ -->
              <h4 style="font-size: 0.95rem; color: var(--primary); margin-bottom: 0.5rem; font-family: var(--font-heading);">
                2. Pha Phân Bố (Distribution) &amp; Tương Tác Đẩy Khỏi Protein
              </h4>
              <ul style="font-size: 0.86rem; line-height: 1.6; margin-bottom: 0.85rem; padding-left: 1.2rem;">
                <li><strong>Thể tích phân bố (V<sub>d</sub>):</strong>
                  <div class="math-eq-row" style="margin: 0.4rem 0; display: inline-flex;">
                    <span class="math-sym">V</span><sub>d</sub>
                    <span class="math-op">=</span>
                    <span class="math-frac">
                      <span class="math-num">Liều thuốc đưa vào (D)</span>
                      <span class="math-denom">Nồng độ ban đầu trong máu (C<sub>0</sub>)</span>
                    </span>
                  </div>
                  <br>&bull; <em>V<sub>d</sub> nhỏ (&lt; 0,2 L/kg - Aminosid, Heparin):</em> Thuốc phân bố trong lòng mạch và dịch kẽ &rarr; <strong>có thể lọc máu loại bỏ khi ngộ độc</strong>.
                  <br>&bull; <em>V<sub>d</sub> lớn (&gt; 1 &ndash; 5 L/kg - Digoxin, Amiodaron, Chloroquin):</em> Thuốc ngấm sâu vào mô mỡ, cơ tim &rarr; nồng độ máu rất thấp, <strong>KHÔNG thể lọc máu loại bỏ</strong>!
                </li>
                <li><strong>Gắn Protein huyết tương &amp; Bẫy tương tác:</strong> Chỉ dạng tự do (f<sub>u</sub>) mới có hoạt tính dược lý. Albumin gắn acid yếu, Alpha-1 acid glycoprotein (AAG) gắn base yếu.
                  <br>&bull; Thuốc có ái lực protein cực mạnh (NSAIDs, Aspirin, Sulfamid) đẩy thuốc khác ra dạng tự do &rarr; bùng phát nồng độ gây độc:
                  <br>&nbsp;&nbsp;&ndash; Đẩy <strong>Warfarin</strong> &rarr; xuất huyết đe dọa tính mạng.
                  <br>&nbsp;&nbsp;&ndash; Đẩy <strong>Sulfonylurea (Gliclazid)</strong> &rarr; tụt đường huyết đột ngột gây hôn mê.
                  <br>&nbsp;&nbsp;&ndash; Đẩy <strong>Bilirubin</strong> ở trẻ sơ sinh (do Sulfamid) &rarr; Bilirubin tự do ngấm vào não gây <strong>Vàng da nhân não (Kernicterus)</strong>.
                </li>
              </ul>

              <!-- CHUYỂN HÓA & CYP450 -->
              <h4 style="font-size: 0.95rem; color: #dc2626; margin-bottom: 0.5rem; font-family: var(--font-heading);">
                3. Bảng Vàng Cảm Ứng &amp; Ức Chế Cytochrome P450 Gan (CYP450)
              </h4>
              <div class="cs-table-wrap">
                <table class="cs-table">
                  <thead>
                    <tr>
                      <th style="width: 20%;">Phân Loại</th>
                      <th style="width: 35%;">Các Hoạt Chất Kinh Điển</th>
                      <th style="width: 45%;">Hậu Quả Dược Lâm Sàng &amp; Bẫy Thi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><span style="color: #16a34a; font-weight: 700;">CHẤT CẢM ỨNG (Inducers)</span></td>
                      <td><strong>Rifampicin, Phenobarbital, Phenytoin, Carbamazepin, Rượu mạn tính, Thuốc lá, St. John's Wort</strong></td>
                      <td>Tăng tốc chuyển hóa thuốc phối hợp &rarr; làm <strong>GIẢM NỒNG ĐỘ</strong> trong máu &rarr; <em>Thất bại điều trị</em>.
                        <br>⚠️ <strong>Bẫy thi:</strong> Bệnh nhân dùng thuốc tránh thai phối hợp uống cùng Rifampicin hoặc Carbamazepin &rarr; vỡ kế hoạch mang thai ngoài ý muốn! Dùng cùng Warfarin &rarr; nguy cơ tắc mạch huyết khối.
                      </td>
                    </tr>
                    <tr>
                      <td><span style="color: #dc2626; font-weight: 700;">CHẤT ỨC CHẾ (Inhibitors)</span></td>
                      <td><strong>Ketoconazol, Itraconazol, Clarithromycin, Erythromycin, Ciprofloxacin, Cimetidin, Ritonavir, Nước bưởi chùm</strong></td>
                      <td>Kìm hãm enzym gan &rarr; làm <strong>TĂNG VỌT NỒNG ĐỘ</strong> thuốc phối hợp &rarr; <em>Ngộ độc kịch phát</em>.
                        <br>⚠️ <strong>Bẫy thi:</strong> Dùng Statin (Simvastatin, Atorvastatin) cùng Clarithromycin/Ketoconazol &rarr; tiêu cơ vân cấp suy thận. Dùng Warfarin cùng Ciprofloxacin &rarr; INR tăng vọt xuất huyết.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- THẢI TRỪ & 5 T1/2 -->
              <h4 style="font-size: 0.95rem; color: var(--primary); margin-bottom: 0.5rem; font-family: var(--font-heading);">
                4. Pha Thải Trừ &amp; Quy Tắc 5 Lần Thời Gian Bán Thải (t<sub>1/2</sub>)
              </h4>
              <div class="math-note" style="background: var(--surface-alt); padding: 0.75rem; border-radius: var(--radius-sm); border-left: 3px solid var(--primary);">
                ⏱️ <strong>Quy tắc 5 &times; t<sub>1/2</sub>:</strong> Khi dùng thuốc lặp lại theo khoảng liều đều đặn, sau đúng <strong>5 lần t<sub>1/2</sub></strong> nồng độ thuốc trong huyết tương đạt <strong>96,875% trạng thái cân bằng ổn định (C<sub>ss</sub>)</strong>. Đây là thời điểm chính xác để lấy mẫu máu định lượng nồng độ trị liệu (TDM).<br>
                🚫 Khi ngừng thuốc, sau <strong>5 &ndash; 7 lần t<sub>1/2</sub></strong> thì &gt; 99% lượng thuốc đã được đào thải hoàn toàn khỏi cơ thể.
              </div>

            </div>
          </div>

          <!-- ==================================================== -->
          <!-- MODULE 2: THẦN KINH THỰC VẬT (GIAO CẢM & PHÓ GIAO CẢM) -->
          <!-- ==================================================== -->
          <div class="chapter-accordion-item cs-searchable-item" id="dl-item-tktv">
            <div class="chapter-accordion-header ${openChaptersState['dl1_tktv'] ? 'active' : ''}" id="dl-head-dl1_tktv" onclick="toggleDlAccordion('dl1_tktv')">
              <div class="chapter-acc-title-wrap">
                <span class="chapter-acc-icon">⚡</span>
                <div>
                  <div class="chapter-acc-title">Module 2 (Dược Lý 1): Bản Đồ Hệ Thần Kinh Thực Vật (Giao Cảm vs Phó Giao Cảm)</div>
                  <div class="chapter-acc-subtitle">Alpha 1-2, Beta 1-2, Adrenalin sốc phản vệ, Chẹn Beta bẫy hạ đường huyết, Atropin, Giải độc phospho hữu cơ</div>
                </div>
              </div>
              <span class="cs-pill cs-pill-info" style="margin-right: 0.5rem;">Dược Lý 1</span>
              <span class="chapter-acc-arrow">▼</span>
            </div>
            <div class="chapter-accordion-body" id="dl-body-dl1_tktv" style="display: ${openChaptersState['dl1_tktv'] ? 'block' : 'none'};">
              
              <!-- BẢNG RECEPTOR GIAO CẢM -->
              <h4 style="font-size: 0.95rem; color: var(--primary); margin-bottom: 0.5rem; font-family: var(--font-heading);">
                1. Bản Đồ Thụ Thể Giao Cảm (Adrenergic) &amp; Thuốc Tác Động
              </h4>
              <div class="cs-table-wrap">
                <table class="cs-table">
                  <thead>
                    <tr>
                      <th>Thụ Thể</th>
                      <th>Vị Trí Phân Bố Chính</th>
                      <th>Đáp Ứng Khi Kích Thích</th>
                      <th>Thuốc Chủ Vận / Đối Kháng Lâm Sàng</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>&alpha;<sub>1</sub> (Alpha-1)</strong></td>
                      <td>Cơ trơn mạch máu ngoại vi, cơ thắt cổ bàng quang, cơ tia mống mắt</td>
                      <td>Co mạch (tăng huyết áp), co thắt cổ bàng quang, giãn đồng tử</td>
                      <td>
                        <strong>Chủ vận:</strong> Phenylephrin, Naphazolin (chống sung huyết mũi).<br>
                        <strong>Chẹn &alpha;<sub>1</sub>:</strong> Prazosin, Doxazosin, Tamsulosin (trị phì đại lành tính TTL; lưu ý tụt áp tư thế liều đầu).
                      </td>
                    </tr>
                    <tr>
                      <td><strong>&alpha;<sub>2</sub> (Alpha-2)</strong></td>
                      <td>Màng tiền synap thần kinh trung ương</td>
                      <td>Feedback âm: Ức chế giải phóng tiếp Noradrenalin &rarr; hạ huyết áp</td>
                      <td><strong>Chủ vận &alpha;<sub>2</sub>:</strong> Methyldopa, Clonidin (Methyldopa là lựa chọn hàng đầu tăng huyết áp thai kỳ).</td>
                    </tr>
                    <tr>
                      <td><strong>&beta;<sub>1</sub> (Beta-1)</strong></td>
                      <td>Cơ tim, nút xoang, tế bào cạnh cầu thận</td>
                      <td>Tăng nhịp tim, tăng sức co bóp cơ tim, tăng tiết Renin</td>
                      <td>
                        <strong>Chủ vận:</strong> Dobutamin (tăng co bóp trong sốc tim).<br>
                        <strong>Chẹn &beta;<sub>1</sub> chọn lọc:</strong> Bisoprolol, Metoprolol, Atenolol.
                      </td>
                    </tr>
                    <tr>
                      <td><strong>&beta;<sub>2</sub> (Beta-2)</strong></td>
                      <td>Cơ trơn phế quản, mạch máu cơ vân, cơ tử cung, gan</td>
                      <td>Giãn cơ trơn phế quản, giãn tử cung, tăng ly giải glycogen gan</td>
                      <td><strong>Chủ vận &beta;<sub>2</sub>:</strong> Salbutamol, Terbutalin, Formoterol (cắt/dự phòng cơn hen, chống đẻ non dọa sảy thai).</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- ADRENALIN & NORADRENALIN -->
              <h4 style="font-size: 0.95rem; color: #dc2626; margin-bottom: 0.5rem; font-family: var(--font-heading);">
                2. Adrenalin (Sốc Phản Vệ) vs Noradrenalin (Sốc Nhiễm Khuẩn)
              </h4>
              <ul style="font-size: 0.86rem; line-height: 1.6; margin-bottom: 0.85rem; padding-left: 1.2rem;">
                <li><strong>Adrenalin (Epinephrine):</strong> Kích thích toàn diện &alpha;<sub>1</sub>, &alpha;<sub>2</sub>, &beta;<sub>1</sub>, &beta;<sub>2</sub>. 
                  <br>&bull; <em>Thuốc thiết yếu số 1 cấp cứu SỐC PHẢN VỆ:</em> Kích thích &alpha;<sub>1</sub> chống tụt huyết áp và phù nề thanh quản; kích thích &beta;<sub>2</sub> giãn phế quản chống ngạt thở; kích thích &beta;<sub>1</sub> trợ tim. 
                  <br>&bull; <em>Đường dùng:</em> <strong>Tiêm bắp (IM) sâu ở mặt trước ngoài đùi</strong> (hấp thu nhanh nhất và an toàn hơn tiêm TM). Liều người lớn: 0,5 mg (1/2 ống 1mg/1mL).
                </li>
                <li><strong>Noradrenalin (Norepinephrine):</strong> Co mạch mạnh qua &alpha;<sub>1</sub>, hầu như không có tác dụng trên &beta;<sub>2</sub> &rarr; thuốc co mạch nâng áp đầu tay trong <strong>SỐC NHIỄM KHUẨN</strong>.</li>
              </ul>

              <!-- CHẸN BETA & BẪY THI -->
              <h4 style="font-size: 0.95rem; color: var(--primary); margin-bottom: 0.5rem; font-family: var(--font-heading);">
                3. Thuốc Chẹn Beta (&beta;-blockers) &amp; Bẫy Trắc Nghiệm ĐH Dược
              </h4>
              <div class="math-note" style="background: rgba(239, 68, 68, 0.08); padding: 0.75rem; border-radius: var(--radius-sm); border-left: 3px solid #dc2626; margin-bottom: 0.85rem;">
                🚫 <strong>Chống chỉ định tuyệt đối của Chẹn Beta:</strong> Hen phế quản, COPD co thắt phế quản nặng, Block nhĩ thất độ 2&ndash;3, Nhịp chậm &lt; 50 chu kỳ/phút, Suy tim cấp mất bù.<br>
                💡 <strong>Bẫy che lấp dấu hiệu hạ đường huyết:</strong> Ở bệnh nhân ĐTĐ, chẹn beta phong bế phản xạ giao cảm làm mất sạch triệu chứng tim đập nhanh, run tay, hồi hộp &rarr; bệnh nhân chỉ còn biểu hiện duy nhất là <strong>VÃ MỒ HÔI</strong>!
              </div>

              <!-- PHÓ GIAO CẢM & ATROPIN -->
              <h4 style="font-size: 0.95rem; color: var(--primary); margin-bottom: 0.5rem; font-family: var(--font-heading);">
                4. Hệ Phó Giao Cảm (Cholinergic), Atropin &amp; Ngộ Độc Phospho Hữu Cơ
              </h4>
              <ul style="font-size: 0.86rem; line-height: 1.6; padding-left: 1.2rem;">
                <li><strong>Pilocarpin:</strong> Cường phó giao cảm trực tiếp &rarr; co đồng tử, mở rộng góc tiền đình &rarr; hạ nhãn áp cấp cứu Glaucoma góc đóng.</li>
                <li><strong>Atropin sulfat:</strong> Đối kháng cạnh tranh tại thụ thể Muscarinic (M) &rarr; làm giãn đồng tử, khô miệng, giảm tiết mồ hôi, nhịp tim nhanh, giảm co thắt cơ trơn tiêu hóa và tiết niệu. Chống chỉ định: Glaucoma góc đóng, phì đại tiền liệt tuyến.</li>
                <li><strong>Cấp cứu ngộ độc thuốc trừ sâu Phospho hữu cơ:</strong> Phospho hữu cơ ức chế enzym acetylcholinesterase không thuận nghịch &rarr; ứ đọng acetylcholin gây hội chứng Muscarinic (co nhỏ đồng tử như đầu kim, chảy dãi, khó thở sùi bọt mép, tụt huyết áp).
                  <br>&bull; <em>Phác đồ giải độc bắt buộc:</em> <strong>Atropin</strong> (phong bế thụ thể M cắt cơn co thắt) <strong>+ Pralidoxim / PAM</strong> (tái sinh phục hồi hoạt tính của enzym acetylcholinesterase).
                </li>
              </ul>

            </div>
          </div>

          <!-- ==================================================== -->
          <!-- MODULE 3: THẦN KINH TRUNG ƯƠNG (CNS) -->
          <!-- ==================================================== -->
          <div class="chapter-accordion-item cs-searchable-item" id="dl-item-tktw">
            <div class="chapter-accordion-header ${openChaptersState['dl1_tktw'] ? 'active' : ''}" id="dl-head-dl1_tktw" onclick="toggleDlAccordion('dl1_tktw')">
              <div class="chapter-acc-title-wrap">
                <span class="chapter-acc-icon">🧠</span>
                <div>
                  <div class="chapter-acc-title">Module 3 (Dược Lý 1): Thuốc Tác Dụng Trên Hệ Thần Kinh Trung Ương</div>
                  <div class="chapter-acc-subtitle">Opioid &amp; tam chứng ngộ độc Naloxon, Benzodiazepin Flumazenil, Chống động kinh gen HLA-B*15:02, TCA vs SSRI</div>
                </div>
              </div>
              <span class="cs-pill cs-pill-info" style="margin-right: 0.5rem;">Dược Lý 1</span>
              <span class="chapter-acc-arrow">▼</span>
            </div>
            <div class="chapter-accordion-body" id="dl-body-dl1_tktw" style="display: ${openChaptersState['dl1_tktw'] ? 'block' : 'none'};">
              
              <!-- OPIOID -->
              <h4 style="font-size: 0.95rem; color: #dc2626; margin-bottom: 0.5rem; font-family: var(--font-heading);">
                1. Nhóm Giảm Đau Trung Ương Opioid (Morphin)
              </h4>
              <ul style="font-size: 0.86rem; line-height: 1.6; margin-bottom: 0.85rem; padding-left: 1.2rem;">
                <li><strong>Cơ chế:</strong> Gắn vào thụ thể Mu (&mu;), Kappa (&kappa;), Delta (&delta;) ở hệ TKTW.</li>
                <li><strong>Hiện tượng dung nạp (Tolerance):</strong> Dùng kéo dài sẽ dung nạp với tác dụng giảm đau, sảng khoái, ức chế hô hấp (phải tăng liều); nhưng <strong>KHÔNG BAO GIỜ DUNG NẠP với Táo bón và Co đồng tử</strong> (dù dùng bao lâu vẫn luôn bị táo bón và co đồng tử).</li>
                <li><strong>Tam chứng ngộ độc cấp Morphin:</strong> Hôn mê + Thở chậm sâu (&lt; 8-10 lần/phút) + Đồng tử co nhỏ như đầu đinh ghim.</li>
                <li><strong>Thuốc giải độc đặc hiệu:</strong> <strong>Naloxon</strong> (tiêm TM lặp lại do t<sub>1/2</sub> Naloxon ngắn hơn morphin).</li>
                <li><strong>Chống chỉ định:</strong> Chấn thương sọ não (Morphin ức chế hô hấp làm ứ đọng CO<sub>2</sub> gây giãn mạch não &rarr; tăng áp lực nội sọ), hen cấp, suy hô hấp, đau bụng cấp ngoại khoa chưa rõ nguyên nhân.</li>
              </ul>

              <!-- AN THẦN GÂY NGỦ -->
              <h4 style="font-size: 0.95rem; color: var(--primary); margin-bottom: 0.5rem; font-family: var(--font-heading);">
                2. Thuốc An Thần Gây Ngủ: Benzodiazepin (BZD) vs Barbiturat
              </h4>
              <div class="cs-table-wrap">
                <table class="cs-table">
                  <thead>
                    <tr>
                      <th>Đặc Điểm</th>
                      <th>Benzodiazepin (Diazepam, Midazolam)</th>
                      <th>Barbiturat (Phenobarbital, Thiopental)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Cơ chế trên GABA<sub>A</sub></strong></td>
                      <td>Tăng <em>tần số</em> mở kênh Cl<sup>&minus;</sup></td>
                      <td>Kéo dài <em>thời gian</em> mở kênh Cl<sup>&minus;</sup>; liều cao mở trực tiếp kênh không cần GABA</td>
                    </tr>
                    <tr>
                      <td><strong>Chỉ số an toàn (TI)</strong></td>
                      <td>Rộng, ít gây ức chế hô hấp khi dùng đơn độc</td>
                      <td>Rất hẹp, dễ ức chế trung tâm hô hấp và vận mạch hành não</td>
                    </tr>
                    <tr>
                      <td><strong>Giải độc khi quá liều</strong></td>
                      <td><span style="color: #dc2626; font-weight: 700;">FLUMAZENIL</span> (đối kháng cạnh tranh)</td>
                      <td>Không có antidote đặc hiệu &rarr; <strong>Kiềm hóa nước tiểu bằng NaHCO<sub>3</sub></strong> tăng bài xuất</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- CHỐNG ĐỘNG KINH -->
              <h4 style="font-size: 0.95rem; color: var(--primary); margin-bottom: 0.5rem; font-family: var(--font-heading);">
                3. Thuốc Chống Động Kinh &amp; Độc Tính Chuyên Biệt
              </h4>
              <ul style="font-size: 0.86rem; line-height: 1.6; margin-bottom: 0.85rem; padding-left: 1.2rem;">
                <li><strong>Phenytoin:</strong> Chẹn kênh Na<sup>+</sup>. Dược động học phi tuyến tính bão hòa. ADR: <strong>Phì đại lợi (nướu răng)</strong>, rậm lông, thiếu máu hồng cầu to do thiếu acid folic.</li>
                <li><strong>Carbamazepin:</strong> Thuốc đầu tay động kinh cục bộ và đau dây thần kinh V (sinh ba). Tự cảm ứng enzym gan. Bắt buộc test gen <strong>HLA-B*15:02</strong> ở người Việt Nam để phòng hội chứng hoại tử thượng bì nhiễm độc (SJS/TEN).</li>
                <li><strong>Acid Valproic (Depakine):</strong> Phổ rộng. Độc gan cấp ở trẻ nhỏ và quái thai gây dị tật ống thần kinh (nứt đốt sống - Spina Bifida).</li>
                <li><strong>Ethosuximid:</strong> Lựa chọn số 1 điều trị <em>cơn vắng ý thức</em> ở trẻ em.</li>
              </ul>

              <!-- CHỐNG TRẦM CẢM -->
              <h4 style="font-size: 0.95rem; color: var(--primary); margin-bottom: 0.5rem; font-family: var(--font-heading);">
                4. Thuốc Chống Trầm Cảm (TCA vs SSRI vs IMAO)
              </h4>
              <ul style="font-size: 0.86rem; line-height: 1.6; padding-left: 1.2rem;">
                <li><strong>TCA (Amitriptylin):</strong> Ức chế tái hấp thu Serotonin/Noradrenalin, đồng thời kháng Cholinergic mạnh (khô miệng, mờ mắt, táo bón, bí tiểu), chẹn &alpha;<sub>1</sub> hạ áp tư thế, chẹn kênh Na<sup>+</sup> cơ tim gây loạn nhịp thất khi quá liều.</li>
                <li><strong>SSRI (Fluoxetin, Sertralin):</strong> Chọn lọc Serotonin, an toàn tim mạch hơn TCA. Nguy cơ <strong>Hội chứng Serotonin</strong> (sốt cao, kích động, run, giật cơ) khi phối hợp IMAO, Tramadol, Linezolid.</li>
                <li><strong>IMAO:</strong> Nguy cơ cơn tăng huyết áp kịch phát (Hypertensive crisis) khi ăn thức ăn chứa <strong>Tyramine</strong> (phô mai lên men, rượu vang).</li>
              </ul>

            </div>
          </div>

          <!-- ==================================================== -->
          <!-- MODULE 4: HỆ KHÁNG SINH TOÀN TẬP -->
          <!-- ==================================================== -->
          <div class="chapter-accordion-item cs-searchable-item" id="dl-item-khangsinh">
            <div class="chapter-accordion-header ${openChaptersState['dl2_khangsinh'] ? 'active' : ''}" id="dl-head-dl2_khangsinh" onclick="toggleDlAccordion('dl2_khangsinh')">
              <div class="chapter-acc-title-wrap">
                <span class="chapter-acc-icon">🔬</span>
                <div>
                  <div class="chapter-acc-title">Module 4 (Dược Lý 2): Hệ Thống Kháng Sinh Toàn Tập &amp; Phác Đồ Trị Lao</div>
                  <div class="chapter-acc-subtitle">Beta-lactam, Ceftriaxone kỵ Calci, Aminosid ODTD, Quinolon đứt gân gót, Macrolid, Tetracyclin, Vancomycin Red Man, Lao R-H-Z-E-S</div>
                </div>
              </div>
              <span class="cs-pill cs-pill-success" style="margin-right: 0.5rem;">Dược Lý 2</span>
              <span class="chapter-acc-arrow">▼</span>
            </div>
            <div class="chapter-accordion-body" id="dl-body-dl2_khangsinh" style="display: ${openChaptersState['dl2_khangsinh'] ? 'block' : 'none'};">
              
              <!-- 4 CƠ CHẾ -->
              <h4 style="font-size: 0.95rem; color: var(--primary); margin-bottom: 0.5rem; font-family: var(--font-heading);">
                1. 4 Cơ Chế Tác Dụng Của Kháng Sinh
              </h4>
              <ul style="font-size: 0.86rem; line-height: 1.6; margin-bottom: 0.85rem; padding-left: 1.2rem;">
                <li><strong>Ức chế tổng hợp vách tế bào (Diệt khuẩn):</strong> Beta-lactam, Glycopeptid (Vancomycin), Fosfomycin.</li>
                <li><strong>Rối loạn chức năng màng sinh chất (Diệt khuẩn):</strong> Polymyxin B, Colistin (Polymyxin E), Daptomycin.</li>
                <li><strong>Ức chế tổng hợp protein:</strong>
                  <br>&bull; Gắn tiểu đơn vị 30S: <em>Aminoglycosid</em> (diệt khuẩn), <em>Tetracyclin</em> (kìm khuẩn).
                  <br>&bull; Gắn tiểu đơn vị 50S: <em>Macrolid, Lincosamid, Cloramphenicol, Linezolid</em> (kìm khuẩn).
                </li>
                <li><strong>Ức chế tổng hợp acid nucleic:</strong> Quinolon (ức chế DNA gyrase / Topoisomerase), Rifampicin (ức chế RNA polymerase), Co-trimoxazol (ức chế tổng hợp acid folic).</li>
              </ul>

              <!-- CEPHALOSPORIN & BETA-LACTAM -->
              <h4 style="font-size: 0.95rem; color: var(--primary); margin-bottom: 0.5rem; font-family: var(--font-heading);">
                2. Phổ Kháng Khuẩn Cephalosporin &amp; Bẫy Trắc Nghiệm Cốt Tử
              </h4>
              <div class="cs-table-wrap">
                <table class="cs-table">
                  <thead>
                    <tr>
                      <th>Thế Hệ</th>
                      <th>Đại Diện</th>
                      <th>Đặc Điểm Phổ &amp; Bẫy Thi Dược Lâm Sàng</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Thế hệ 1</strong></td>
                      <td>Cefazolin, Cephalexin</td>
                      <td>Mạnh trên Gram dương (tụ cầu, liên cầu nhạy cảm). Dùng phẫu thuật dự phòng.</td>
                    </tr>
                    <tr>
                      <td><strong>Thế hệ 2</strong></td>
                      <td>Cefuroxim, Cefotetan</td>
                      <td>Mở rộng trên Gram âm hô hấp. Cefotetan/Cefamandole có gốc NMTT &rarr; gây <strong>phản ứng cai rượu (Disulfiram-like)</strong> và hạ prothrombin máu gây chảy máu.</td>
                    </tr>
                    <tr>
                      <td><strong>Thế hệ 3</strong></td>
                      <td>Ceftriaxone, Cefotaxime, Ceftazidime</td>
                      <td>
                        Gram âm rất mạnh, ngấm dịch não tủy tốt.
                        <br>⚠️ <strong>Phân biệt cốt tử:</strong> <strong>Ceftazidime</strong> diệt trực khuẩn mủ xanh (<em>P. aeruginosa</em>), còn <strong>Ceftriaxone KHÔNG diệt được Pseudomonas</strong>!
                        <br>⚠️ <strong>Chống chỉ định tuyệt đối Ceftriaxone:</strong> <em>Không bao giờ tiêm truyền cùng dung dịch chứa Calci (Ringer lactat) ở trẻ sơ sinh</em> vì tạo tủa muối canxi-ceftriaxone gây tử vong tại phổi và thận!
                      </td>
                    </tr>
                    <tr>
                      <td><strong>Thế hệ 4</strong></td>
                      <td>Cefepime</td>
                      <td>Rộng cả Gram dương, Gram âm, diệt trực khuẩn mủ xanh cực mạnh, bền vững với AmpC beta-lactamase.</td>
                    </tr>
                    <tr>
                      <td><strong>Thế hệ 5</strong></td>
                      <td>Ceftaroline</td>
                      <td>Đặc hiệu diệt được <strong>MRSA</strong> (Tụ cầu vàng kháng Methicillin).</td>
                    </tr>
                    <tr>
                      <td><strong>Carbapenem</strong></td>
                      <td>Imipenem, Meropenem, Ertapenem</td>
                      <td>Phổ rộng nhất, cứu cánh vi khuẩn sinh ESBL. Imipenem luôn phối hợp <strong>Cilastatin</strong> để tránh độc thận. Ertapenem KHÔNG diệt Pseudomonas.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- AMINOGLYCOSID & QUINOLON -->
              <h4 style="font-size: 0.95rem; color: #dc2626; margin-bottom: 0.5rem; font-family: var(--font-heading);">
                3. Aminoglycosid &amp; Fluoroquinolon: Độc Tính Kinh Điển
              </h4>
              <ul style="font-size: 0.86rem; line-height: 1.6; margin-bottom: 0.85rem; padding-left: 1.2rem;">
                <li><strong>Aminoglycosid (Gentamicin, Amikacin):</strong> Diệt khuẩn phụ thuộc nồng độ, hiệu ứng hậu kháng sinh (PAE) dài. Chế độ liều 1 lần/ngày (ODTD) tối ưu hiệu quả và giảm độc.
                  <br>&bull; <em>Độc tính:</em> <strong>Độc thận</strong> (hồi phục được) và <strong>Độc ốc tai - tiền đình (GÂY ĐIẾC VĨNH VIỄN KHÔNG HỒI PHỤC)</strong>.
                  <br>&bull; <em>Chống chỉ định:</em> Bệnh nhược cơ (chẹn thần kinh cơ giống curare), phụ nữ mang thai.
                </li>
                <li><strong>Fluoroquinolon (Ciprofloxacin, Levofloxacin):</strong> Ức chế DNA gyrase.
                  <br>&bull; <em>Tác dụng phụ đặc thù:</em> <strong>Viêm và đứt gân gót Achilles</strong> (nguy cơ tăng vọt khi dùng chung Corticoid), kéo dài khoảng QT gây xoắn đỉnh, độc thần kinh, thoái hóa sụn khớp súc vật non.
                  <br>&bull; <em>Chống chỉ định tuyệt đối:</em> Trẻ em &lt; 18 tuổi, phụ nữ có thai và cho con bú.
                </li>
              </ul>

              <!-- MACROLID, TETRA, VANCO -->
              <h4 style="font-size: 0.95rem; color: var(--primary); margin-bottom: 0.5rem; font-family: var(--font-heading);">
                4. Macrolid, Tetracyclin, Vancomycin &amp; Cloramphenicol
              </h4>
              <ul style="font-size: 0.86rem; line-height: 1.6; margin-bottom: 0.85rem; padding-left: 1.2rem;">
                <li><strong>Tetracyclin:</strong> Tạo chelat không tan với ion đa hóa trị (Ca, Mg, Fe, Al) &rarr; không uống cùng sữa/antacid. Lắng đọng men răng gây <strong>vàng ố răng vĩnh viễn và chậm lớn ở xương</strong>. Chống chỉ định trẻ &lt; 8 tuổi, thai kỳ.</li>
                <li><strong>Vancomycin:</strong> Diệt khuẩn Gram dương đa kháng (MRSA tiêm TM; uống trị <em>C. difficile</em>). Truyền TM quá nhanh gây <strong>Hội chứng người đỏ (Red Man Syndrome)</strong> do giải phóng Histamin &rarr; xử trí: truyền chậm &gt; 60 phút và kháng H1.</li>
                <li><strong>Cloramphenicol:</strong> Gây <strong>Hội chứng xám (Gray Baby Syndrome)</strong> ở trẻ sơ sinh do thiếu enzym glucuronyl transferase và suy tủy xương bất sản.</li>
              </ul>

              <!-- PHÁC ĐỒ LAO -->
              <h4 style="font-size: 0.95rem; color: #0284c7; margin-bottom: 0.5rem; font-family: var(--font-heading);">
                5. Phác Đồ Điều Trị Lao Chuẩn (R - H - Z - E - S)
              </h4>
              <div class="cs-table-wrap">
                <table class="cs-table">
                  <thead>
                    <tr>
                      <th>Thuốc</th>
                      <th>Cơ Chế Tác Dụng</th>
                      <th>Tác Dụng Phụ Bắt Buộc Nhớ (Bẫy Đề Thi)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>R - Rifampicin</strong></td>
                      <td>Ức chế RNA polymerase</td>
                      <td>Nước tiểu, phân, nước mắt có màu <strong>đỏ da cam</strong>. Là chất <strong>cảm ứng enzym gan CYP mạnh nhất</strong>.</td>
                    </tr>
                    <tr>
                      <td><strong>H - Isoniazid (INH)</strong></td>
                      <td>Ức chế tổng hợp acid mycolic</td>
                      <td>Làm cạn kiệt Vitamin B6 &rarr; gây <strong>viêm dây thần kinh ngoại biên</strong> (tê bì kiến bò). Bắt buộc dự phòng bằng <strong>Vitamin B6 (Pyridoxin 10-25mg/ngày)</strong>. Độc gan.</td>
                    </tr>
                    <tr>
                      <td><strong>Z - Pyrazinamid</strong></td>
                      <td>Ức chế tổng hợp acid béo</td>
                      <td>Ức chế bài xuất acid uric &rarr; <strong>tăng acid uric máu gây cơn Gout cấp</strong>. Độc tế bào gan mạnh nhất.</td>
                    </tr>
                    <tr>
                      <td><strong>E - Ethambutol</strong></td>
                      <td>Ức chế arabinosyl transferase</td>
                      <td><strong>Viêm dây thần kinh thị giác hậu nhãn cầu</strong>, giảm thị lực, <strong>mất khả năng phân biệt màu ĐỎ - XANH LÁ</strong>.</td>
                    </tr>
                    <tr>
                      <td><strong>S - Streptomycin</strong></td>
                      <td>Gắn 30S ribosome</td>
                      <td>Độc dây thần kinh tiền đình ốc tai số VIII (<strong>gây điếc không hồi phục</strong>), độc thận.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>

          <!-- ==================================================== -->
          <!-- MODULE 5: THUỐC TIM MẠCH & LỢI TIỂU -->
          <!-- ==================================================== -->
          <div class="chapter-accordion-item cs-searchable-item" id="dl-item-timmach">
            <div class="chapter-accordion-header ${openChaptersState['dl2_timmach'] ? 'active' : ''}" id="dl-head-dl2_timmach" onclick="toggleDlAccordion('dl2_timmach')">
              <div class="chapter-acc-title-wrap">
                <span class="chapter-acc-icon">🫀</span>
                <div>
                  <div class="chapter-acc-title">Module 5 (Dược Lý 2): Thuốc Tim Mạch &amp; Hệ Thống Thuốc Lợi Tiểu</div>
                  <div class="chapter-acc-subtitle">Digoxin Na+/K+-ATPase hạ Kali, Amiodaron chứa 37% Iod, Nitrat khoảng trống, ACEi ho khan hoại tử thai, CCB phù mắt cá, Thiazid vs Quai</div>
                </div>
              </div>
              <span class="cs-pill cs-pill-success" style="margin-right: 0.5rem;">Dược Lý 2</span>
              <span class="chapter-acc-arrow">▼</span>
            </div>
            <div class="chapter-accordion-body" id="dl-body-dl2_timmach" style="display: ${openChaptersState['dl2_timmach'] ? 'block' : 'none'};">
              
              <!-- DIGOXIN -->
              <h4 style="font-size: 0.95rem; color: #dc2626; margin-bottom: 0.5rem; font-family: var(--font-heading);">
                1. Digoxin &amp; Glycosid Tim: 4 Tác Dụng &amp; Nguy Cơ Hạ Kali Máu
              </h4>
              <ul style="font-size: 0.86rem; line-height: 1.6; margin-bottom: 0.85rem; padding-left: 1.2rem;">
                <li><strong>Cơ chế:</strong> Ức chế bơm Na<sup>+</sup>/K<sup>+</sup>-ATPase màng cơ tim &rarr; tăng Na<sup>+</sup> nội bào &rarr; giảm thải Ca<sup>2+</sup> &rarr; tăng Ca<sup>2+</sup> nội bào &rarr; tăng lực co bóp cơ tim.</li>
                <li><strong>4 tác dụng tim mạch kinh điển:</strong> Tăng sức co bóp (inotropic +), Giảm nhịp tim (chronotropic &minus;), Giảm dẫn truyền nhĩ thất (dromotropic &minus;), Tăng tính kích thích thất (bathmotropic +).</li>
                <li><strong>BẪY THI HẠ KALI MÁU:</strong> K<sup>+</sup> cạnh tranh vị trí gắn với Digoxin trên bơm Na<sup>+</sup>/K<sup>+</sup>-ATPase. <strong>Hạ Kali máu (&lt; 3,5 mmol/L) làm Digoxin gắn chặt hơn &rarr; bùng phát ngộ độc dù nồng độ máu bình thường</strong>! Do đó cấm phối hợp lợi tiểu thải Kali (Furosemid, Thiazid) mà không bù Kali.</li>
                <li><strong>Dấu hiệu ngộ độc:</strong> Buồn nôn, chán ăn (sớm nhất), <strong>nhìn mờ thấy viền vàng hoặc xanh lá cây (xanthopsia)</strong>, ngoại tâm thu thất nhịp đôi, block nhĩ thất. Thuốc giải độc: <strong>Kháng thể Fab (DigiFab)</strong>.</li>
              </ul>

              <!-- LOẠN NHỊP & AMIODARON -->
              <h4 style="font-size: 0.95rem; color: var(--primary); margin-bottom: 0.5rem; font-family: var(--font-heading);">
                2. Thuốc Chống Loạn Nhịp &amp; Độc Tính Đa Cơ Quan Của Amiodaron
              </h4>
              <ul style="font-size: 0.86rem; line-height: 1.6; margin-bottom: 0.85rem; padding-left: 1.2rem;">
                <li><strong>Phân loại Vaughan Williams:</strong> Nhóm I (chẹn Na<sup>+</sup>), Nhóm II (chẹn Beta), Nhóm III (chẹn K<sup>+</sup> - Amiodaron, Sotalol), Nhóm IV (chẹn Calci Non-DHP - Verapamil, Diltiazem).</li>
                <li><strong>Amiodaron:</strong> Chứa 37% trọng lượng là Iod, t<sub>1/2</sub> cực dài (30 &ndash; 60 ngày). 
                  <br>&bull; <em>Độc tính đa cơ quan:</em> <strong>Xơ hóa phổi kẽ</strong> (nguy hiểm nhất), <strong>Rối loạn tuyến giáp</strong> (gây cả suy giáp do thừa iod và cường giáp), <strong>Lắng đọng giác mạc</strong> (90% bệnh nhân), <strong>Xạm da màu xanh đá xám</strong>, độc gan.
                </li>
              </ul>

              <!-- ĐAU THẮT NGỰC & NITRAT -->
              <h4 style="font-size: 0.95rem; color: var(--primary); margin-bottom: 0.5rem; font-family: var(--font-heading);">
                3. Đau Thắt Ngực: Nitrat Hữu Cơ &amp; Cấm Phối Hợp Sildenafil
              </h4>
              <div class="math-note" style="background: var(--surface-alt); padding: 0.75rem; border-radius: var(--radius-sm); border-left: 3px solid var(--primary); margin-bottom: 0.85rem;">
                💥 <strong>Nitroglycerin:</strong> Giải phóng NO &rarr; tăng cGMP &rarr; giãn hệ tĩnh mạch giảm tiền gánh và giãn mạch vành. ADR: Nhức đầu dữ dội, hạ áp tư thế, nhịp nhanh phản xạ.<br>
                ⏳ <strong>Hiện tượng dung nạp (Nitrate tolerance):</strong> Phải duy trì <strong>khoảng trống Nitrat 8 &ndash; 12 giờ mỗi ngày</strong> (uống cách quãng hoặc gỡ miếng dán vào ban đêm).<br>
                🚫 <strong>CHỐNG CHỈ ĐỊNH TUYỆT ĐỐI:</strong> Phối hợp với thuốc ức chế PDE-5 (Sildenafil, Tadalafil) trong 24&ndash;48h vì tụt huyết áp trụy tim mạch tử vong!
              </div>

              <!-- HẠ ÁP & LỢI TIỂU -->
              <h4 style="font-size: 0.95rem; color: var(--primary); margin-bottom: 0.5rem; font-family: var(--font-heading);">
                4. Thuốc Hạ Huyết Áp &amp; So Sánh Các Nhóm Lợi Tiểu
              </h4>
              <div class="cs-table-wrap">
                <table class="cs-table">
                  <thead>
                    <tr>
                      <th>Nhóm Thuốc</th>
                      <th>Cơ Chế Tác Dụng</th>
                      <th>Tác Dụng Phụ Điển Hình &amp; Chống Chỉ Định</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>ACEi (-pril)</strong><br>Enalapril, Perindopril</td>
                      <td>Ức chế enzym chuyển AT I &rarr; AT II; ức chế thoái biến Bradykinin</td>
                      <td>
                        <strong>Ho khan dai dẳng (5-20% do Bradykinin)</strong>, phù mạch thần kinh (Angioedema), tăng K<sup>+</sup> máu.
                        <br>🚫 <strong>Cấm tuyệt đối:</strong> Phụ nữ mang thai (suy thận thai, thiểu ối, quái thai), hẹp ĐM thận 2 bên.
                      </td>
                    </tr>
                    <tr>
                      <td><strong>ARB (-sartan)</strong><br>Losartan, Valsartan</td>
                      <td>Chẹn chọn lọc thụ thể AT1 của Angiotensin II</td>
                      <td><strong>KHÔNG gây ho khan</strong>, ít phù mạch. Thay thế cho ACEi khi bị ho khan. Chống chỉ định thai kỳ như ACEi.</td>
                    </tr>
                    <tr>
                      <td><strong>CCB DHP (-dipin)</strong><br>Amlodipin, Nifedipin</td>
                      <td>Giãn tiểu động mạch ngoại vi</td>
                      <td><strong>Phù mắt cá chân</strong> (tăng áp lực mao mạch &rarr; phối hợp ACEi/ARB sẽ giải quyết được phù), đỏ bừng mặt, nhức đầu.</td>
                    </tr>
                    <tr>
                      <td><strong>Lợi tiểu Thiazid</strong><br>Hydrochlorothiazid</td>
                      <td>Ức chế đồng vận chuyển Na<sup>+</sup>/Cl<sup>&minus;</sup> ở đầu ống lượn xa</td>
                      <td>
                        <strong>Bộ tứ "HẠ":</strong> Hạ Na<sup>+</sup>, Hạ K<sup>+</sup>, Hạ Mg<sup>2+</sup>, Hạ Cl<sup>&minus;</sup>.<br>
                        <strong>Bộ tứ "TĂNG":</strong> Tăng Calci máu (tốt cho loãng xương), Tăng Acid uric (gout), Tăng Đường huyết, Tăng Lipid.<br>
                        Mất hiệu lực khi GFR &lt; 30 mL/phút.
                      </td>
                    </tr>
                    <tr>
                      <td><strong>Lợi tiểu Quai</strong><br>Furosemid</td>
                      <td>Ức chế Na<sup>+</sup>/K<sup>+</sup>/2Cl<sup>&minus;</sup> quai Henle</td>
                      <td>Lực lợi tiểu cực mạnh, vẫn tác dụng khi GFR &lt; 30. Hạ K<sup>+</sup>, hạ Ca<sup>2+</sup>, <strong>độc tính trên tai (điếc tai)</strong>.</td>
                    </tr>
                    <tr>
                      <td><strong>Kháng Aldosteron</strong><br>Spironolacton</td>
                      <td>Cạnh tranh thụ thể mineralocorticoid tại ống góp</td>
                      <td>Lợi tiểu giữ K<sup>+</sup>, giảm tử vong suy tim. <strong>Tăng K<sup>+</sup> máu</strong>, <strong>chứng vú to ở nam giới (Gynecomastia)</strong>.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>

          <!-- ==================================================== -->
          <!-- MODULE 6: TIÊU HÓA, HUYẾT HỌC & NỘI TIẾT -->
          <!-- ==================================================== -->
          <div class="chapter-accordion-item cs-searchable-item" id="dl-item-tieuhoa_noitiet">
            <div class="chapter-accordion-header ${openChaptersState['dl2_tieuhoa_noitiet'] ? 'active' : ''}" id="dl-head-dl2_tieuhoa_noitiet" onclick="toggleDlAccordion('dl2_tieuhoa_noitiet')">
              <div class="chapter-acc-title-wrap">
                <span class="chapter-acc-icon">🩸</span>
                <div>
                  <div class="chapter-acc-title">Module 6 (Dược Lý 2): Tiêu Hóa, Chống Đông Máu &amp; Nội Tiết Chuyển Hóa</div>
                  <div class="chapter-acc-subtitle">PPI tương tác Clopidogrel, Warfarin INR Vitamin K1, Heparin Protamin, Corticoid uống 8h sáng giảm liều từ từ, Insulin, Metformin GFR 30</div>
                </div>
              </div>
              <span class="cs-pill cs-pill-success" style="margin-right: 0.5rem;">Dược Lý 2</span>
              <span class="chapter-acc-arrow">▼</span>
            </div>
            <div class="chapter-accordion-body" id="dl-body-dl2_tieuhoa_noitiet" style="display: ${openChaptersState['dl2_tieuhoa_noitiet'] ? 'block' : 'none'};">
              
              <!-- PPI & TIÊU HÓA -->
              <h4 style="font-size: 0.95rem; color: var(--primary); margin-bottom: 0.5rem; font-family: var(--font-heading);">
                1. Thuốc Tiêu Hóa: PPI &amp; Tương Tác Kinh Điển Với Clopidogrel
              </h4>
              <ul style="font-size: 0.86rem; line-height: 1.6; margin-bottom: 0.85rem; padding-left: 1.2rem;">
                <li><strong>Cơ chế PPI:</strong> Tiền thuốc gắn cộng hóa trị không hồi phục vào bơm H<sup>+</sup>/K<sup>+</sup>-ATPase tế bào viền. Uống trước bữa ăn sáng 30 &ndash; 60 phút, nguyên viên không nhai/nghiền.</li>
                <li><strong>Tương tác kinh điển Omeprazol &amp; Clopidogrel:</strong> Omeprazol/Esomeprazol ức chế enzym CYP2C19 &rarr; ngăn cản hoạt hóa tiền thuốc Clopidogrel (Plavix) &rarr; mất tác dụng chống đông, tăng biến cố tái phát nhồi máu cơ tim. <em>Khuyến cáo:</em> Dùng phối hợp nên chọn <strong>Pantoprazol</strong> (ít ức chế CYP2C19).</li>
                <li><strong>Antacid (Aluminium &amp; Magnesium):</strong> Al(OH)<sub>3</sub> gây táo bón; Mg(OH)<sub>2</sub> gây tiêu chảy &rarr; thường phối hợp (Maalox). Tránh uống cùng Quinolon, Tetracyclin vì tạo chelat giảm hấp thu.</li>
              </ul>

              <!-- CHỐNG ĐÔNG & HUYẾT HỌC -->
              <h4 style="font-size: 0.95rem; color: #dc2626; margin-bottom: 0.5rem; font-family: var(--font-heading);">
                2. Thuốc Chống Đông Máu &amp; Chống Kết Tập Tiểu Cầu
              </h4>
              <div class="cs-table-wrap">
                <table class="cs-table">
                  <thead>
                    <tr>
                      <th>Thuốc Chống Đông</th>
                      <th>Cơ Chế Tác Dụng</th>
                      <th>Xét Nghiệm Theo Dõi</th>
                      <th>Chất Giải Độc Đặc Hiệu (Antidote)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Warfarin (Kháng Vit K)</strong></td>
                      <td>Ức chế Vit K epoxide reductase, cản trở tổng hợp yếu tố II, VII, IX, X, Protein C, S</td>
                      <td><strong>INR</strong> (mục tiêu 2,0 &ndash; 3,0; van cơ học 2,5 &ndash; 3,5)</td>
                      <td><strong>Vitamin K1 (Phytomenadion)</strong> / Phức hợp PCC. 🚫 Cấm thai kỳ (dị tật xương mặt sọ thai).</td>
                    </tr>
                    <tr>
                      <td><strong>Heparin UFH</strong></td>
                      <td>Gắn Antithrombin III, ức chế IIa và Xa tỷ lệ 1:1</td>
                      <td><strong>aPTT</strong> (mục tiêu 1,5 &ndash; 2,5 lần chứng)</td>
                      <td><strong>Protamin sulfat</strong> (1 mg trung hòa 100 UI heparin). Biến chứng nguy hiểm: HIT type II.</td>
                    </tr>
                    <tr>
                      <td><strong>LMWH (Enoxaparin)</strong></td>
                      <td>Ức chế chọn lọc yếu tố Xa (tỷ lệ 3:1 - 4:1)</td>
                      <td>Không cần theo dõi thường quy</td>
                      <td>Chỉ định tiêm dưới da bụng. Thải qua thận &rarr; chỉnh liều khi suy thận. Ít gây HIT.</td>
                    </tr>
                    <tr>
                      <td><strong>Aspirin</strong></td>
                      <td>Acetyl hóa không hồi phục COX-1 tiểu cầu suốt 7-10 ngày</td>
                      <td>Thời gian máu chảy</td>
                      <td>Liều tim mạch 75-100 mg/ngày. Dừng 5-7 ngày trước phẫu thuật. 🚫 Cấm trẻ sốt virus do <strong>Hội chứng Reye</strong>.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- CORTICOSTEROID -->
              <h4 style="font-size: 0.95rem; color: var(--primary); margin-bottom: 0.5rem; font-family: var(--font-heading);">
                3. Glucocorticoid: Thời Điểm Uống 8h Sáng &amp; Quy Tắc Giảm Liều
              </h4>
              <div class="math-note" style="background: rgba(2, 132, 199, 0.08); padding: 0.75rem; border-radius: var(--radius-sm); border-left: 3px solid #0284c7; margin-bottom: 0.85rem;">
                ⏰ <strong>Uống 1 lần duy nhất vào 8 GIỜ SÁNG:</strong> Thời điểm tuyến thượng thận tiết cortisol sinh lý cao nhất &rarr; giảm thiểu tối đa ức chế trục Dưới đồi - Tuyến yên - Thượng thận (HPA).<br>
                📉 <strong>Quy tắc ngừng thuốc:</strong> Dùng liều cao kéo dài trên 2&ndash;3 tuần làm teo vỏ thượng thận thứ phát &rarr; <strong>BẮT BUỘC PHẢI GIẢM LIỀU TỪ TỪ (Tapering)</strong> trước khi dừng hẳn. Cấm ngừng đột ngột vì gây <strong>Cơn suy thượng thận cấp</strong> (tụt huyết áp, trụy mạch tử vong)!<br>
                ⚠️ <strong>Tác dụng phụ:</strong> Hội chứng Cushing, loãng xương, tăng đường huyết, loét dạ dày tá tràng (đặc biệt khi phối hợp NSAIDs).
              </div>

              <!-- ĐÁI THÁO ĐƯỜNG -->
              <h4 style="font-size: 0.95rem; color: var(--primary); margin-bottom: 0.5rem; font-family: var(--font-heading);">
                4. Thuốc Điều Trị Đái Tháo Đường &amp; Chống Chỉ Định Suy Thận
              </h4>
              <ul style="font-size: 0.86rem; line-height: 1.6; padding-left: 1.2rem;">
                <li><strong>Insulin:</strong> 
                  <br>&bull; <em>Tác dụng nhanh (Lispro, Aspart):</em> Tiêm ngay trước ăn 0&ndash;15 phút.
                  <br>&bull; <em>Regular:</em> Tiêm trước ăn 30 phút; <strong>loại duy nhất được tiêm TM cấp cứu Hôn mê nhiễm toan ceton (DKA)</strong>.
                  <br>&bull; <em>Kéo dài (Glargine):</em> Không có đỉnh suốt 24h, tiêm giờ cố định làm insulin nền.
                </li>
                <li><strong>Metformin (Biguanide):</strong> Lựa chọn đầu tay ĐTĐ type 2. Giảm tân tạo đường ở gan, không gây hạ đường huyết đơn độc. ADR: Rối loạn tiêu hóa, nhiễm toan acid lactic (Lactic Acidosis).
                  <br>⚠️ <strong>CHỐNG CHỈ ĐỊNH TUYỆT ĐỐI:</strong> <strong>eGFR &lt; 30 mL/phút/1,73m<sup>2</sup></strong>, suy gan, nghiện rượu, suy tim mất bù. Ngừng trước chụp cản quang iod 48h.
                </li>
                <li><strong>Sulfonylurea (Gliclazid, Glimepirid):</strong> Kích thích tiết insulin &rarr; nguy cơ <strong>hạ đường huyết kéo dài và tăng cân</strong>.</li>
                <li><strong>Ức chế SGLT-2 (Empagliflozin, Dapagliflozin):</strong> Thải glucose qua nước tiểu, giảm tử vong suy tim và bảo vệ thận. ADR: Nhiễm trùng nấm tiết niệu - sinh dục, toan ceton đường huyết bình thường (Euglycemic DKA).</li>
              </ul>

            </div>
          </div>

        </div>
      </div>

    </div>
  `;
}


// ==========================================
// EXAM HISTORY & DETAILED REVIEW SYSTEM
// ==========================================
let activeNoteExamId = null;

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function saveExamNote(examId, noteText, showToast = true) {
  try {
    const history = getExamHistory();
    const item = history.find(e => e.id === examId);
    if (!item) return;
    item.note = (noteText || '').trim();
    item.noteUpdatedAt = Date.now();
    localStorage.setItem(STORAGE_HISTORY_KEY, JSON.stringify(history));
    if (currentReviewExam && currentReviewExam.id === examId) {
      currentReviewExam.note = item.note;
      currentReviewExam.noteUpdatedAt = item.noteUpdatedAt;
    }
    if (currentTab === 'history') {
      renderHistoryView();
    }
    if (showToast) {
      showToast('📝 Đã lưu ghi chú bài thi!');
      playChime('click');
    }
  } catch (e) {
    console.error('Error saving exam note:', e);
  }
}

function openExamNoteModal(examId) {
  const history = getExamHistory();
  const exam = history.find(e => e.id === examId);
  if (!exam) return;
  activeNoteExamId = examId;

  const modal = document.getElementById('modal-exam-note');
  const title = document.getElementById('note-modal-title');
  const info = document.getElementById('note-modal-exam-info');
  const textarea = document.getElementById('exam-note-textarea');
  const deleteBtn = document.getElementById('btn-delete-note');
  const charCount = document.getElementById('note-char-count');

  if (title) {
    const totalExams = history.length;
    const examIndex = history.findIndex(e => e.id === examId);
    const examNum = examIndex !== -1 ? (totalExams - examIndex) : '';
    title.innerHTML = `<span>📝</span> <span>GHI CHÚ BÀI THI ${examNum ? '#' + examNum : ''}</span>`;
  }

  if (info) {
    const scoreVal = parseFloat(exam.score10) || 0;
    info.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.35rem;">
        <span>📅 <strong>${exam.dateStr}</strong></span>
        <span>🎯 Điểm: <strong style="color: var(--primary); font-size: 0.95rem;">${scoreVal.toFixed(2)}/10</strong> (${exam.correctCount}/${exam.totalQuestions || 80} câu đúng)</span>
        <span>⏱️ Thời gian: <strong>${exam.timeUsedStr || 'N/A'}</strong></span>
      </div>
    `;
  }

  if (textarea) {
    textarea.value = exam.note || '';
    if (charCount) charCount.textContent = `${textarea.value.length} / 1000 ký tự`;
  }

  if (deleteBtn) {
    deleteBtn.style.display = (exam.note && exam.note.trim()) ? 'inline-block' : 'none';
  }

  if (modal) {
    modal.classList.add('active');
    setTimeout(() => {
      if (textarea) textarea.focus();
    }, 100);
  }
}

function closeExamNoteModal() {
  const modal = document.getElementById('modal-exam-note');
  if (modal) modal.classList.remove('active');
  activeNoteExamId = null;
}

function saveCurrentExamNote() {
  if (!activeNoteExamId) return;
  const textarea = document.getElementById('exam-note-textarea');
  const noteText = textarea ? textarea.value : '';
  saveExamNote(activeNoteExamId, noteText, true);
  closeExamNoteModal();
}

function deleteCurrentExamNote() {
  if (!activeNoteExamId) return;
  if (!confirm('Bạn có chắc chắn muốn xóa ghi chú của bài thi này?')) return;
  saveExamNote(activeNoteExamId, '', true);
  closeExamNoteModal();
}

function insertNoteTag(tagText) {
  const textarea = document.getElementById('exam-note-textarea');
  if (!textarea) return;
  const cur = textarea.value.trim();
  if (!cur) {
    textarea.value = tagText + '\n';
  } else {
    textarea.value = cur + '\n' + tagText;
  }
  const charCount = document.getElementById('note-char-count');
  if (charCount) charCount.textContent = `${textarea.value.length} / 1000 ký tự`;
  textarea.focus();
}

function formatHistoryDate(d) {
  const pad = (n) => n.toString().padStart(2, '0');
  const day = pad(d.getDate());
  const month = pad(d.getMonth() + 1);
  const year = d.getFullYear();
  const hours = pad(d.getHours());
  const mins = pad(d.getMinutes());
  return `${hours}:${mins} • ${day}/${month}/${year}`;
}

function getExamHistory() {
  try {
    const raw = localStorage.getItem(STORAGE_HISTORY_KEY);
    let list = raw ? JSON.parse(raw) : [];
    // Automatically purge dummy test records created during automated script testing
    // (records with 80 unanswered and <= 20 seconds used)
    const cleaned = list.filter(item => !(item.unansweredCount >= 80 && item.timeUsedSec <= 20));
    if (cleaned.length !== list.length) {
      localStorage.setItem(STORAGE_HISTORY_KEY, JSON.stringify(cleaned));
    }
    return cleaned;
  } catch (e) {
    console.error('Error loading history:', e);
    return [];
  }
}

function saveExamRecord(record) {
  try {
    const history = getExamHistory();
    history.unshift(record);
    if (history.length > 50) history.length = 50; // Keep up to 50 latest exams
    localStorage.setItem(STORAGE_HISTORY_KEY, JSON.stringify(history));
  } catch (e) {
    console.error('Error saving history:', e);
  }
}

function deleteHistoryItem(id) {
  if (!confirm('Bạn có chắc chắn muốn xóa bài thi này khỏi lịch sử?')) return;
  try {
    let history = getExamHistory();
    history = history.filter(item => item.id !== id);
    localStorage.setItem(STORAGE_HISTORY_KEY, JSON.stringify(history));
    if (currentReviewExam && currentReviewExam.id === id) {
      currentReviewExam = null;
    }
    renderHistoryView();
    playChime('click');
  } catch (e) {
    console.error(e);
  }
}

function clearAllHistory() {
  if (!confirm('Bạn có chắc chắn muốn xóa TOÀN BỘ lịch sử các bài thi đã làm?')) return;
  localStorage.removeItem(STORAGE_HISTORY_KEY);
  currentReviewExam = null;
  renderHistoryView();
  playChime('click');
}

function viewCurrentExamInHistory() {
  const history = getExamHistory();
  const found = history.find(item => item.id === lastSubmittedExamId) || history[0];
  if (found) {
    currentReviewExam = found;
    reviewFilter = 'all';
    reviewSearchQuery = '';
  }
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  const histTabBtn = document.getElementById('tab-history-btn');
  if (histTabBtn) histTabBtn.classList.add('active');
  switchTab('history');
}

function openReviewExam(id) {
  const history = getExamHistory();
  const found = history.find(item => item.id === id);
  if (!found) return;
  currentReviewExam = found;
  reviewFilter = 'all';
  reviewSearchQuery = '';
  document.body.style.overflow = '';
  if (document.documentElement) document.documentElement.style.overflow = '';
  const appMain = document.querySelector('main.app-main');
  if (appMain) appMain.classList.add('full-width-view');
  renderHistoryView();
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function closeReviewExam() {
  currentReviewExam = null;
  document.body.style.overflow = '';
  if (document.documentElement) document.documentElement.style.overflow = '';
  renderHistoryView();
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function setReviewFilter(filter) {
  reviewFilter = filter;
  renderDetailedReviewView();
}

function handleReviewSearch(query) {
  reviewSearchQuery = query.trim().toLowerCase();
  renderDetailedReviewQuestions();
}

function renderHistoryView() {
  const container = document.getElementById('view-history');
  if (!container) return;

  if (currentReviewExam) {
    renderDetailedReviewView();
  } else {
    renderHistoryListView();
  }
}

function renderHistoryListView() {
  const container = document.getElementById('view-history');
  const history = getExamHistory();

  if (!history.length) {
    container.innerHTML = `
      <div class="history-container">
        <div class="history-empty-state">
          <div class="history-empty-icon">📜</div>
          <h2 style="font-family: var(--font-heading); font-size: 1.35rem; color: var(--text-main);">
            Chưa có bài thi nào trong lịch sử
          </h2>
          <p style="color: var(--text-muted); max-width: 480px; font-size: 0.95rem; line-height: 1.6;">
            Khi bạn nộp bài thi 80 câu / 80 phút (hoặc nộp bài sớm), toàn bộ kết quả, phương án bạn đã chọn và lời giải chi tiết sẽ tự động được lưu lại tại đây để bạn ôn lại bất cứ lúc nào!
          </p>
          <button class="btn btn-primary" onclick="startNewExamFromHistory()" style="margin-top: 0.5rem; padding: 0.65rem 1.35rem;">
            ⏱️ Bắt đầu làm bài thi 80 câu ngay
          </button>
        </div>
      </div>
    `;
    return;
  }

  // Calculate overall statistics
  const totalExams = history.length;
  const avgScore = (history.reduce((acc, h) => acc + (parseFloat(h.score10) || 0), 0) / totalExams).toFixed(2);
  const bestScore = Math.max(...history.map(h => parseFloat(h.score10) || 0)).toFixed(2);
  const avgTimeMin = Math.round(history.reduce((acc, h) => acc + (h.timeUsedSec || 0), 0) / totalExams / 60);
  const passExams = history.filter(h => (parseFloat(h.score10) || 0) >= 4.0).length;
  const passRate = Math.round((passExams / totalExams) * 100);
  const covStats = getBankCoverageStats();

  let html = `
    <div class="history-container">
      
      <!-- STATS OVERVIEW -->
      <div class="history-stats-banner">
        <div class="stat-item" style="cursor: pointer;" onclick="openCoverageModal()" title="Bấm để xem chi tiết độ phủ ${covStats.totalBank} câu hỏi theo 14 bài">
          <span class="stat-label">Độ phủ kho ${covStats.totalBank} câu</span>
          <span class="stat-val" style="color: var(--secondary);">${covStats.seenCount} <small style="font-size: 0.85rem; font-weight: normal;">/ ${covStats.totalBank}</small></span>
          <span class="stat-sub">${covStats.coveragePct}% kho • ${covStats.unseenCount} câu chưa gặp</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Tổng bài đã thi</span>
          <span class="stat-val" style="color: var(--secondary);">${totalExams} <small style="font-size: 0.9rem; font-weight: normal;">đề</small></span>
          <span class="stat-sub">${passExams}/${totalExams} đề đạt (>=4.0)</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Điểm trung bình</span>
          <span class="stat-val" style="color: var(--primary);">${avgScore}</span>
          <span class="stat-sub">Thang điểm 10</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Điểm cao nhất</span>
          <span class="stat-val" style="color: var(--warning);">${bestScore}</span>
          <span class="stat-sub">Kỷ lục của bạn</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Thời gian làm TB</span>
          <span class="stat-val" style="color: var(--accent);">${avgTimeMin} <small style="font-size: 0.9rem; font-weight: normal;">phút</small></span>
          <span class="stat-sub">Quy định: 80 phút</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Tỷ lệ đỗ</span>
          <span class="stat-val" style="color: ${passRate >= 70 ? 'var(--primary)' : 'var(--danger)'};">${passRate}%</span>
          <span class="stat-sub">Mục tiêu: >= 70%</span>
        </div>
      </div>

      <!-- TOOLBAR -->
      <div class="history-toolbar">
        <div>
          <h2 style="font-family: var(--font-heading); font-size: 1.25rem; color: var(--text-main);">
            Danh Sách Các Bài Thi Đã Hoàn Thành
          </h2>
          <span style="font-size: 0.85rem; color: var(--text-muted);">
            Bấm vào bất kỳ bài thi nào để xem lại chi tiết 80 câu, các câu bạn làm sai và đáp án giải thích.
          </span>
        </div>
        <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
          <button class="btn btn-primary" onclick="openSyncModal()" style="font-size: 0.85rem; padding: 0.45rem 0.85rem; display: inline-flex; align-items: center; gap: 0.35rem;">
            <span>🔄</span> Đồng bộ thiết bị
          </button>
          <button class="btn btn-secondary" onclick="startNewExamFromHistory()" style="background: var(--secondary-light); color: var(--secondary); border-color: var(--secondary);">
            🎲 Thi đề 80 câu mới
          </button>
          <button class="btn btn-secondary" onclick="clearAllHistory()" style="color: var(--danger); border-color: var(--danger-light);">
            🗑️ Xóa toàn bộ lịch sử
          </button>
        </div>
      </div>

      <!-- CARDS LIST -->
      <div class="history-list">
  `;

  history.forEach((item, idx) => {
    const examNum = totalExams - idx;
    const scoreVal = parseFloat(item.score10) || 0;
    let scoreColor = 'var(--primary)';
    if (scoreVal < 4.0) scoreColor = 'var(--danger)';
    else if (scoreVal < 7.0) scoreColor = 'var(--warning)';

    const totalQ = item.totalQuestions || 80;
    const correctW = Math.round((item.correctCount / totalQ) * 100);
    const wrongW = Math.round((item.wrongCount / totalQ) * 100);
    const skippedW = 100 - correctW - wrongW;

    html += `
      <div class="history-card">
        <div class="history-card-header">
          <div class="history-card-title">
            <span style="background: var(--surface-alt); padding: 0.2rem 0.5rem; border-radius: var(--radius-sm); font-size: 0.85rem; font-weight: 700;">
              Bài thi #${examNum}
            </span>
            <span class="history-date">📅 ${item.dateStr}</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            ${item.note && item.note.trim() ? `
              <span class="history-note-badge" title="Bài thi có ghi chú cá nhân - Bấm để xem và sửa" onclick="openExamNoteModal('${item.id}')">
                📝 Có ghi chú
              </span>
            ` : ''}
            <span class="badge" style="background: ${scoreVal >= 7.0 ? 'var(--primary-light)' : (scoreVal >= 5.0 ? 'var(--warning-light)' : 'var(--danger-light)')}; color: ${scoreColor}; font-weight: 700;">
              ${item.rankText || 'HOÀN THÀNH'}
            </span>
          </div>
        </div>

        <div class="history-card-body">
          <div class="history-score-col">
            <span class="history-score-main" style="color: ${scoreColor};">${scoreVal.toFixed(2)}</span>
            <span class="history-score-sub">/ 10</span>
          </div>

          <div class="history-meta-col">
            <div class="history-breakdown-row">
              <span class="breakdown-tag correct">✓ ${item.correctCount} câu đúng</span>
              <span class="breakdown-tag wrong">✕ ${item.wrongCount} câu sai</span>
              <span class="breakdown-tag skipped">⚪ ${item.unansweredCount} chưa làm</span>
              <span class="breakdown-tag time">⏱️ ${item.timeUsedStr || 'N/A'}</span>
              <span style="font-weight: 600; color: var(--secondary);">${item.pct}%</span>
            </div>

            <div class="history-bar-track" title="Xanh: Đúng, Đỏ: Sai, Xám: Chưa làm">
              <div class="history-bar-seg correct" style="width: ${correctW}%;"></div>
              <div class="history-bar-seg wrong" style="width: ${wrongW}%;"></div>
              <div class="history-bar-seg skipped" style="width: ${skippedW}%;"></div>
            </div>
          </div>

          <div class="history-actions-col">
            <button class="btn btn-primary" onclick="openReviewExam('${item.id}')" style="padding: 0.55rem 1rem; font-size: 0.85rem;">
              🔍 Xem lại & Ôn câu sai
            </button>
            <button class="btn btn-secondary" onclick="openExamNoteModal('${item.id}')" title="${item.note && item.note.trim() ? 'Xem hoặc chỉnh sửa ghi chú' : 'Thêm ghi chú cho bài thi này'}" style="padding: 0.55rem 0.85rem; font-size: 0.82rem; display: inline-flex; align-items: center; gap: 0.35rem; color: var(--secondary); border-color: var(--secondary);">
              <span>📝</span> <span>${item.note && item.note.trim() ? 'Ghi chú' : '+ Ghi chú'}</span>
            </button>
            <button class="btn btn-secondary" onclick="deleteHistoryItem('${item.id}')" title="Xóa bài thi này" style="padding: 0.55rem 0.75rem; color: var(--danger);">
              🗑️
            </button>
          </div>
        </div>

        ${item.note && item.note.trim() ? `
          <div class="history-card-note-box" onclick="openExamNoteModal('${item.id}')" title="Bấm để xem và chỉnh sửa ghi chú này">
            <div class="note-box-header">
              <span class="note-box-icon">📝 Ghi chú bài thi:</span>
              <span class="note-box-edit-hint">✏️ Sửa</span>
            </div>
            <div class="note-box-content">${escapeHtml(item.note)}</div>
          </div>
        ` : ''}
      </div>
    `;
  });

  html += `
      </div>
    </div>
  `;

  container.innerHTML = html;
}

function startNewExamFromHistory() {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  const examTabBtn = document.getElementById('tab-exam-btn');
  if (examTabBtn) examTabBtn.classList.add('active');
  switchTab('exam');
  generateRandomExam();
}

function renderDetailedReviewView() {
  const container = document.getElementById('view-history');
  if (!currentReviewExam) return;

  const exam = currentReviewExam;
  const questions = exam.questions || [];
  const intact = isExamIntact(exam);
  const correctCount = typeof exam.correctCount === 'number' ? exam.correctCount : questions.filter(q => q.isCorrect).length;
  const wrongCount = typeof exam.wrongCount === 'number' ? exam.wrongCount : questions.filter(q => q.userAnswer !== null && !q.isCorrect).length;
  const skippedCount = typeof exam.unansweredCount === 'number' ? exam.unansweredCount : questions.filter(q => q.userAnswer === null).length;
  const flaggedCount = questions.filter(q => q.isFlagged).length;

  let syncWarningBanner = '';
  if (!intact) {
    syncWarningBanner = `
      <div style="margin: 0.5rem 0 0.85rem 0; padding: 0.75rem 1rem; background: rgba(245, 158, 11, 0.1); border: 1px solid #f59e0b; border-radius: var(--radius-sm); color: var(--text-main); font-size: 0.85rem; line-height: 1.5;">
        <div style="display: flex; align-items: center; gap: 0.4rem; font-weight: 700; color: #d97706; margin-bottom: 0.25rem;">
          <span>⚠️</span> Lưu ý đồng bộ: Điểm thi thực tế của bạn là ${exam.score10}/10 (${exam.correctCount}/${exam.totalQuestions || 80} câu đúng)
        </div>
        <div>
          Bài thi này từng đồng bộ từ điện thoại bằng phiên bản cũ khiến vị trí đáp án hiển thị trên máy tính bị lệch. 
          <strong>Cách khôi phục chuẩn 100%:</strong> Mở lại ứng dụng trên điện thoại (nơi làm bài), chọn <strong>"Đồng bộ & Sao lưu"</strong> để tạo mã mới và quét lại vào máy tính, toàn bộ ${exam.correctCount} câu đúng và đáp án chi tiết sẽ hiển thị khớp hoàn toàn!
        </div>
      </div>
    `;
  }

  let html = `
    <div class="review-view-container">
      
      <!-- COMPACT REVIEW HEADER -->
      <div class="review-sticky-header">
        <div class="review-top-nav">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; width: 100%;">
            <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
              <button class="btn btn-secondary" onclick="closeReviewExam()" style="padding: 0.35rem 0.75rem; font-size: 0.8rem; font-weight: 600;">
                ← Quay lại
              </button>
              <div style="font-size: 0.88rem; line-height: 1.3;">
                <strong style="color: var(--text-main); font-family: var(--font-heading);">
                  ${exam.dateStr}
                </strong>
                <span style="display: inline-block; margin-left: 0.35rem; font-weight: 700; color: var(--primary);">
                  • ${exam.score10}/10 (${exam.correctCount}/${exam.totalQuestions} đúng)
                </span>
              </div>
            </div>

            <div style="display: flex; gap: 0.4rem;">
              <button class="btn btn-secondary" onclick="openExamNoteModal('${exam.id}')" style="padding: 0.35rem 0.65rem; font-size: 0.78rem; display: inline-flex; align-items: center; gap: 0.3rem;">
                <span>📝</span> ${exam.note && exam.note.trim() ? 'Sửa ghi chú' : '+ Ghi chú'}
              </button>
              <button class="btn btn-secondary" onclick="startNewExamFromHistory()" style="padding: 0.35rem 0.65rem; font-size: 0.78rem; background: var(--secondary-light); color: var(--secondary); border-color: var(--secondary);">
                🎲 Thi đề mới
              </button>
            </div>
          </div>
        </div>

        <!-- COMPACT FILTER PILLS & SEARCH -->
        <div class="review-filter-row">
          <button class="review-pill ${reviewFilter === 'all' ? 'active' : ''}" onclick="setReviewFilter('all')">
            📋 Tất cả <span class="count">${questions.length}</span>
          </button>
          <button class="review-pill pill-wrong ${reviewFilter === 'wrong' ? 'active' : ''}" onclick="setReviewFilter('wrong')" title="Xem những câu bạn đã chọn sai để khắc phục">
            ❌ Sai <span class="count">${wrongCount}</span>
          </button>
          <button class="review-pill pill-correct ${reviewFilter === 'correct' ? 'active' : ''}" onclick="setReviewFilter('correct')">
            ✅ Đúng <span class="count">${correctCount}</span>
          </button>
          <button class="review-pill ${reviewFilter === 'skipped' ? 'active' : ''}" onclick="setReviewFilter('skipped')">
            ⚪ Bỏ qua <span class="count">${skippedCount}</span>
          </button>
          <button class="review-pill ${reviewFilter === 'flagged' ? 'active' : ''}" onclick="setReviewFilter('flagged')">
            ★ Đã lưu <span class="count">${flaggedCount}</span>
          </button>

          <div style="min-width: 160px; flex: 1; max-width: 260px;">
            <input type="text" id="review-search-box" placeholder="🔍 Tìm câu hỏi, thuốc..." 
              value="${reviewSearchQuery}" 
              oninput="handleReviewSearch(this.value)"
              style="width: 100%; padding: 0.32rem 0.65rem; border: 1px solid var(--border); border-radius: var(--radius-full); font-size: 0.8rem; background: var(--surface-alt); color: var(--text-main); outline: none;">
          </div>
        </div>
      </div>

      <!-- EXAM NOTE IN DETAILED REVIEW -->
      ${exam.note && exam.note.trim() ? `
        <div class="review-exam-note-card" onclick="openExamNoteModal('${exam.id}')" title="Bấm để chỉnh sửa ghi chú bài thi">
          <div class="review-note-header">
            <span class="review-note-title">
              <span>📝</span> GHI CHÚ BÀI THI CỦA BẠN:
            </span>
            <span class="review-note-edit-btn">✏️ Chỉnh sửa</span>
          </div>
          <div class="review-note-body">
            ${escapeHtml(exam.note)}
          </div>
        </div>
      ` : `
        <div class="review-exam-note-card empty" onclick="openExamNoteModal('${exam.id}')" title="Bấm để thêm ghi chú cho bài thi này">
          <span>📝 Chưa có ghi chú cho bài thi này. <strong>Bấm vào đây để thêm ghi chú &amp; nhắc nhở ôn tập!</strong></span>
        </div>
      `}

      ${syncWarningBanner}

      <!-- QUESTIONS LIST CONTAINER -->
      <div id="review-questions-list" style="display: flex; flex-direction: column; gap: 1rem;">
        <!-- Injected by renderDetailedReviewQuestions() -->
      </div>

    </div>
  `;

  container.innerHTML = html;
  renderDetailedReviewQuestions();
}

function renderDetailedReviewQuestions() {
  const container = document.getElementById('review-questions-list');
  if (!container || !currentReviewExam) return;

  const questions = currentReviewExam.questions || [];
  
  // 1. Filter by category
  let filtered = questions.filter(q => {
    if (reviewFilter === 'wrong') return q.userAnswer !== null && !q.isCorrect;
    if (reviewFilter === 'correct') return q.isCorrect;
    if (reviewFilter === 'skipped') return q.userAnswer === null;
    if (reviewFilter === 'flagged') return q.isFlagged;
    return true; // 'all'
  });

  // 2. Filter by search query
  if (reviewSearchQuery) {
    filtered = filtered.filter(q => {
      const fullText = (q.question + ' ' + q.chapter + ' ' + q.options.join(' ') + ' ' + q.explanation).toLowerCase();
      return fullText.includes(reviewSearchQuery);
    });
  }

  if (!filtered.length) {
    let emptyMsg = 'Không tìm thấy câu hỏi nào phù hợp với bộ lọc hiện tại.';
    if (reviewFilter === 'wrong') emptyMsg = '🎉 Tuyệt vời! Bạn không làm sai câu nào trong đề thi này!';
    container.innerHTML = `
      <div style="text-align: center; padding: 2.5rem; background: var(--surface); border: 1px dashed var(--border); border-radius: var(--radius-md); color: var(--text-muted);">
        <p style="font-size: 1.05rem;">${emptyMsg}</p>
        <button class="btn btn-secondary" onclick="setReviewFilter('all')" style="margin-top: 0.75rem; font-size: 0.85rem;">
          Xem lại tất cả 80 câu
        </button>
      </div>
    `;
    return;
  }

  const letters = ['A', 'B', 'C', 'D'];
  let html = '';

  filtered.forEach(q => {
    let statusClass = 'status-correct';
    let statusBadge = '<span class="review-badge-tag correct">✓ BẠN ĐÃ TRẢ LỜI ĐÚNG</span>';

    if (q.userAnswer === null || q.userAnswer === undefined) {
      statusClass = 'status-skipped';
      statusBadge = '<span class="review-badge-tag skipped">⚪ BẠN CHƯA TRẢ LỜI CÂU NÀY</span>';
    } else if (!q.isCorrect) {
      statusClass = 'status-wrong';
      const userLetter = letters[q.userAnswer] || '?';
      const correctLetter = letters[q.correct];
      statusBadge = `<span class="review-badge-tag wrong">✕ BẠN ĐÃ CHỌN SAI (Bạn chọn: [${userLetter}] • Đúng: [${correctLetter}])</span>`;
    }

    html += `
      <div class="review-question-card ${statusClass}">
        <div class="review-q-header">
          <div style="display: flex; gap: 0.4rem; align-items: center; flex-wrap: wrap;">
            <span class="badge badge-num">Câu ${q.examNum} / ${currentReviewExam && currentReviewExam.questions ? currentReviewExam.questions.length : 80}</span>
            <span class="badge badge-category">${q.chapter}</span>
            ${renderSourceBadge(q.source, q.sourceName)}
            ${q.isFlagged ? '<span style="color: var(--warning); font-size: 0.85rem; font-weight: 600;">★ Đã đánh dấu</span>' : ''}
          </div>
          ${statusBadge}
        </div>

        <div style="font-weight: 600; font-size: 1.05rem; line-height: 1.5; color: var(--text-main);">
          ${q.question}
        </div>

        <div class="review-opt-list">
    `;

    q.options.forEach((opt, optIdx) => {
      let optClass = '';
      let badgeHtml = '';

      if (optIdx === q.correct) {
        optClass = 'opt-correct';
        if (q.userAnswer === optIdx) {
          badgeHtml = '<span class="review-badge-tag correct">✓ Bạn đã chọn chính xác</span>';
        } else {
          badgeHtml = '<span class="review-badge-tag correct">✓ Đáp án đúng</span>';
        }
      } else if (q.userAnswer === optIdx && !q.isCorrect) {
        optClass = 'opt-user-wrong';
        badgeHtml = '<span class="review-badge-tag wrong">✕ Bạn đã chọn (Sai)</span>';
      }

      html += `
        <div class="review-opt-item ${optClass}">
          <div class="option-letter" style="${optIdx === q.correct ? 'background: var(--primary); color: white;' : (q.userAnswer === optIdx ? 'background: var(--danger); color: white;' : '')}">
            ${letters[optIdx]}
          </div>
          <div style="flex: 1;">${opt}</div>
          ${badgeHtml}
        </div>
      `;
    });

    html += `
        </div>

        <!-- DETAILED EXPLANATION BOX -->
        <div class="review-explanation-box">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.25rem;">
            <div class="exp-title">
              <span>💡</span> Phân Tích &amp; Giải Thích Lâm Sàng
            </div>
            <div style="display: flex; gap: 0.35rem; align-items: center;">
              <button class="btn-speak-exp" onclick="speakExplanationFromCard(this)" title="Nghe đọc giải thích lâm sàng bằng giọng tiếng Việt">
                <span>🔊</span> Đọc giải thích
              </button>
              <button class="btn-speak-settings" onclick="openTtsSettingsModal()" title="Cài đặt giọng đọc &amp; tốc độ" aria-label="Cài đặt giọng đọc">⚙️</button>
            </div>
          </div>
          <div class="exp-text">
            ${q.explanation}
          </div>
          <div class="exp-ref">
            <span>📖</span> Nguồn: ${q.reference || 'Giáo trình Dược lâm sàng - Bộ Y tế'}
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// Dark/Light Theme Toggle
themeToggleBtn.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const target = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', target);
  themeToggleBtn.textContent = target === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('dls_theme', target);
  playChime('click');
});

// Keyboard Navigation
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMatrixModal();
    closeCoverageModal();
    closeVoiceGuideModal();
    closeResultsModal();
    closeSyncModal();
    closeMobilePalette();
    closeMobileNavMenu();
    document.body.style.overflow = '';
    return;
  }
  if (e.key === 'p' || e.key === 'P') {
    if (document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) return;
    toggleScratchpad();
    return;
  }
  if (currentTab !== 'exam' || isExamSubmitted || isExamPaused) return;
  const key = e.key.toUpperCase();
  if (key === 'A') selectExamOption(EXAM_QUESTIONS[currentQuestionIndex].id, 0);
  else if (key === 'B') selectExamOption(EXAM_QUESTIONS[currentQuestionIndex].id, 1);
  else if (key === 'C') selectExamOption(EXAM_QUESTIONS[currentQuestionIndex].id, 2);
  else if (key === 'D') selectExamOption(EXAM_QUESTIONS[currentQuestionIndex].id, 3);
  else if (key === 'F') toggleFlag(EXAM_QUESTIONS[currentQuestionIndex].id);
  else if (e.key === 'ArrowLeft') prevQuestion();
  else if (e.key === 'ArrowRight') nextQuestion();
});

// ==========================================
// DESKTOP CLINICAL SCRATCHPAD (Right Panel on PC)
// ==========================================
let dScratchTool = 'pen'; // 'pen' | 'highlighter' | 'eraser'
let dScratchColor = '#ef4444';
let dScratchSize = 2;
let dIsDrawing = false;
let dLastX = 0;
let dLastY = 0;
let dScratchHistory = [];
let dScratchCanvas = null;
let dScratchCtx = null;
let dScratchOffscreen = null;
let dGridMode = true;

function initDesktopScratchpad() {
  dScratchCanvas = document.getElementById('desktop-scratch-canvas');
  if (!dScratchCanvas) return;
  dScratchCtx = dScratchCanvas.getContext('2d');
  dScratchOffscreen = document.createElement('canvas');

  // Automatic observer: resizes canvas whenever wrap container size changes or becomes visible
  const wrap = document.getElementById('scratch-canvas-wrap');
  if (wrap && window.ResizeObserver) {
    const ro = new ResizeObserver(entries => {
      for (const entry of entries) {
        if (entry.contentRect.width > 0 && entry.contentRect.height > 0) {
          resizeDesktopScratchCanvas();
        }
      }
    });
    ro.observe(wrap);
  }

  // Initial sizing
  setTimeout(resizeDesktopScratchCanvas, 60);
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
      resizeDesktopScratchCanvas();
    }
  });

  // Mouse drawing (left click only)
  dScratchCanvas.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return;
    startDesktopStroke(e);
  });
  dScratchCanvas.addEventListener('mousemove', drawDesktopStroke);
  window.addEventListener('mouseup', endDesktopStroke);
  dScratchCanvas.addEventListener('mouseleave', endDesktopStroke);

  // Touch / Stylus
  dScratchCanvas.addEventListener('touchstart', handleDesktopTouchStart, { passive: false });
  dScratchCanvas.addEventListener('touchmove', handleDesktopTouchMove, { passive: false });
  dScratchCanvas.addEventListener('touchend', endDesktopStroke, { passive: false });
  dScratchCanvas.addEventListener('touchcancel', endDesktopStroke, { passive: false });
}

function resizeDesktopScratchCanvas() {
  if (!dScratchCanvas || !dScratchCtx) return;
  const wrap = document.getElementById('scratch-canvas-wrap');
  if (!wrap) return;

  const w = wrap.clientWidth || 360;
  const h = wrap.clientHeight || 450;
  if (w <= 0 || h <= 0) return;

  const dpr = window.devicePixelRatio || 1;

  // Save previous drawing
  if (dScratchCanvas.width > 0 && dScratchCanvas.height > 0) {
    dScratchOffscreen.width = dScratchCanvas.width;
    dScratchOffscreen.height = dScratchCanvas.height;
    const offCtx = dScratchOffscreen.getContext('2d');
    offCtx.drawImage(dScratchCanvas, 0, 0);
  }

  dScratchCanvas.width = w * dpr;
  dScratchCanvas.height = h * dpr;
  dScratchCanvas.style.width = w + 'px';
  dScratchCanvas.style.height = h + 'px';

  dScratchCtx.scale(dpr, dpr);

  // Restore drawing
  if (dScratchOffscreen.width > 0) {
    dScratchCtx.drawImage(dScratchOffscreen, 0, 0, w, h);
  }
}

function setDesktopTool(tool) {
  dScratchTool = tool;
  const wrap = document.getElementById('scratch-canvas-wrap');
  if (wrap) {
    wrap.classList.remove('tool-pen', 'tool-highlighter', 'tool-eraser');
    wrap.classList.add(`tool-${tool}`);
  }
  document.querySelectorAll('.sp-tool-tab').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById(`d-tool-${tool}`);
  if (btn) btn.classList.add('active');
  playChime('click');
}

function setDesktopColor(color) {
  dScratchColor = color;
  document.querySelectorAll('.sp-c-dot').forEach(b => {
    b.classList.toggle('active', b.dataset.color === color);
  });
  if (dScratchTool === 'eraser') {
    setDesktopTool('pen');
  }
  playChime('click');
}

function setDesktopSize(size) {
  dScratchSize = size;
  document.querySelectorAll('.sp-s-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById(`d-size-${size}`);
  if (btn) btn.classList.add('active');
  playChime('click');
}

function toggleDesktopScratchGrid() {
  dGridMode = !dGridMode;
  const wrap = document.getElementById('scratch-canvas-wrap');
  const btn = document.getElementById('btn-toggle-grid');
  if (wrap) wrap.classList.toggle('grid-mode', dGridMode);
  if (btn) btn.classList.toggle('active', dGridMode);
  playChime('click');
  showToast(dGridMode ? '📋 Đã bật lưới ô ly tính toán' : '📄 Đã chuyển sang nền trắng trơn');
}

function saveDesktopSnapshot() {
  if (!dScratchCanvas || !dScratchCtx) return;
  try {
    const snap = dScratchCtx.getImageData(0, 0, dScratchCanvas.width, dScratchCanvas.height);
    dScratchHistory.push(snap);
    if (dScratchHistory.length > 20) dScratchHistory.shift();
  } catch (e) {}
}

function undoDesktopScratch() {
  if (!dScratchHistory.length || !dScratchCtx) {
    showToast('Chưa có nét vẽ nào để hoàn tác');
    return;
  }
  const prev = dScratchHistory.pop();
  dScratchCtx.putImageData(prev, 0, 0);
  playChime('click');
  showToast('↩️ Đã hoàn tác nét vẽ gần nhất');
}

function clearDesktopScratch() {
  if (!dScratchCanvas || !dScratchCtx) return;
  saveDesktopSnapshot();
  dScratchCtx.save();
  dScratchCtx.setTransform(1, 0, 0, 1, 0, 0);
  dScratchCtx.clearRect(0, 0, dScratchCanvas.width, dScratchCanvas.height);
  dScratchCtx.restore();
  playChime('click');
  showToast('🗑️ Đã xóa sạch bảng nháp');
}

function saveDesktopScratchImage() {
  if (!dScratchCanvas) return;
  try {
    const link = document.createElement('a');
    link.download = `nhap-duoc-lam-sang-${Date.now()}.png`;
    link.href = dScratchCanvas.toDataURL('image/png');
    link.click();
    showToast('💾 Đã tải hình ảnh bài nháp về máy!');
  } catch (e) {
    showToast('Không thể tải ảnh nháp.');
  }
}

function getDesktopCoords(e) {
  const rect = dScratchCanvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
}

function startDesktopStroke(e) {
  dIsDrawing = true;
  saveDesktopSnapshot();
  const coords = getDesktopCoords(e);
  dLastX = coords.x;
  dLastY = coords.y;

  drawDesktopDot(coords.x, coords.y);
}

function drawDesktopStroke(e) {
  if (!dIsDrawing) return;
  const coords = getDesktopCoords(e);

  dScratchCtx.beginPath();
  dScratchCtx.moveTo(dLastX, dLastY);
  dScratchCtx.lineTo(coords.x, coords.y);

  applyDesktopContextStyles();

  dScratchCtx.stroke();

  dLastX = coords.x;
  dLastY = coords.y;
}

function drawDesktopDot(x, y) {
  dScratchCtx.beginPath();
  applyDesktopContextStyles();
  const radius = Math.max(1, dScratchCtx.lineWidth / 2);
  dScratchCtx.arc(x, y, radius, 0, Math.PI * 2);
  dScratchCtx.fill();
}

function applyDesktopContextStyles() {
  dScratchCtx.lineCap = 'round';
  dScratchCtx.lineJoin = 'round';

  if (dScratchTool === 'pen') {
    dScratchCtx.globalCompositeOperation = 'source-over';
    dScratchCtx.strokeStyle = dScratchColor;
    dScratchCtx.fillStyle = dScratchColor;
    dScratchCtx.lineWidth = dScratchSize;
  } else if (dScratchTool === 'highlighter') {
    dScratchCtx.globalCompositeOperation = 'source-over';
    dScratchCtx.strokeStyle = hexToRgba(dScratchColor, 0.35);
    dScratchCtx.fillStyle = hexToRgba(dScratchColor, 0.35);
    dScratchCtx.lineWidth = dScratchSize * 4;
  } else if (dScratchTool === 'eraser') {
    dScratchCtx.globalCompositeOperation = 'destination-out';
    dScratchCtx.strokeStyle = 'rgba(0,0,0,1)';
    dScratchCtx.fillStyle = 'rgba(0,0,0,1)';
    dScratchCtx.lineWidth = dScratchSize * 6;
  }
}

function endDesktopStroke() {
  dIsDrawing = false;
}

function handleDesktopTouchStart(e) {
  e.preventDefault();
  if (e.touches.length === 1) {
    startDesktopStroke(e.touches[0]);
  }
}

function handleDesktopTouchMove(e) {
  e.preventDefault();
  if (e.touches.length === 1) {
    drawDesktopStroke(e.touches[0]);
  }
}

function toggleExamScratchpad() {
  const palette = document.getElementById('sidebar-palette');
  const scratchpad = document.getElementById('desktop-scratchpad-panel');
  const returnBtn = document.getElementById('btn-palette-return');
  if (!palette || !scratchpad) return;

  const isScratchShowing = scratchpad.style.display === 'flex';
  if (isScratchShowing) {
    scratchpad.style.display = 'none';
    palette.style.display = 'flex';
    if (returnBtn) returnBtn.style.display = 'none';
    updatePalette();
  } else {
    palette.style.display = 'none';
    scratchpad.style.display = 'flex';
    if (returnBtn) returnBtn.style.display = 'inline-flex';
    setTimeout(resizeDesktopScratchCanvas, 50);
    showToast('✏️ Đã mở Bảng nháp tính toán bên phải!');
  }
}

function toggleScratchpad() {
  if (currentTab === 'exam') {
    toggleExamScratchpad();
    return;
  }
  const scratchpad = document.getElementById('desktop-scratchpad-panel');
  if (!scratchpad) return;
  const isShowing = scratchpad.style.display === 'flex' || (scratchpad.style.display !== 'none' && getComputedStyle(scratchpad).display === 'flex');
  if (isShowing) {
    scratchpad.style.display = 'none';
    showToast('Đã thu gọn Bảng nháp.');
  } else {
    scratchpad.style.display = 'flex';
    setTimeout(resizeDesktopScratchCanvas, 50);
    showToast('✏️ Đã mở Bảng nháp bên phải màn hình!');
  }
}

function hexToRgba(hex, alpha = 1) {
  let c = hex.replace('#', '');
  if (c.length === 3) {
    c = c.split('').map(x => x + x).join('');
  }
  const num = parseInt(c, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// ==========================================
// CROSS-DEVICE DATA SYNC & SMART MERGE SYSTEM
// ==========================================
let currentSyncTab = 'send';
const BYTEBIN_POST_URL = 'https://bytebin.lucko.me/post';
const BYTEBIN_GET_URL = 'https://bytebin.lucko.me/';

function openSyncModal() {
  const modal = document.getElementById('sync-modal');
  if (!modal) return;
  modal.classList.add('active');
  switchSyncTab('send');
  playChime('click');
}

function closeSyncModal() {
  const modal = document.getElementById('sync-modal');
  if (modal) modal.classList.remove('active');
}

function switchSyncTab(tab) {
  currentSyncTab = tab;
  ['send', 'receive', 'file'].forEach(t => {
    const btn = document.getElementById(`sync-tab-btn-${t}`);
    const pane = document.getElementById(`sync-pane-${t}`);
    if (btn) btn.classList.toggle('active', t === tab);
    if (pane) pane.classList.toggle('active', t === tab);
  });
}

// Helper to verify if an exam object in history has fully intact questions and matching scores
function isExamIntact(exam) {
  if (!exam || !Array.isArray(exam.questions) || !exam.questions.length) return false;
  if (!exam.questions[0].options || !Array.isArray(exam.questions[0].options)) return false;
  if (typeof exam.correctCount === 'number' && exam.correctCount > 0) {
    const matching = exam.questions.filter(q => q && q.isCorrect).length;
    return matching === exam.correctCount;
  }
  return true;
}

// 1. Pack current device data (Full fidelity with complete questions & shuffled options intact)
function getDeviceSyncPayload() {
  const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
  const rawHistory = getExamHistory();

  // Send full intact exam history directly to preserve exact shuffled option positions and true answers
  return {
    version: '2.0',
    timestamp: Date.now(),
    dateStr: new Date().toLocaleString('vi-VN'),
    device: isMobile ? 'Điện thoại' : 'Máy tính',
    examHistory: rawHistory,
    flashcardStarred: Array.from(flashcardStarred),
    flashcardMastered: Array.from(flashcardMastered),
    studyAnswers: studyAnswers || {},
    theme: localStorage.getItem('dls_theme') || 'light'
  };
}

// Rehydrate exam questions from ALL_EXAM_BANK (fallback only for legacy v1 payloads)
function rehydrateExam(exam) {
  if (exam.questions && exam.questions.length && exam.questions[0].question && Array.isArray(exam.questions[0].options)) {
    return exam; // already has full question text and options preserved
  }
  const bankMap = new Map();
  if (typeof ALL_EXAM_BANK !== 'undefined') {
    ALL_EXAM_BANK.forEach(q => bankMap.set(q.id, q));
  }
  const answers = exam.answers || [];
  exam.questions = answers.map((ans, idx) => {
    const original = bankMap.get(ans.i) || {};
    return {
      id: ans.i,
      examNum: idx + 1,
      chapter: original.chapter || '',
      question: original.question || '',
      options: original.options || [],
      correct: original.correct,
      userAnswer: ans.a !== undefined ? ans.a : null,
      isCorrect: ans.a === original.correct,
      isFlagged: !!ans.f,
      explanation: original.explanation || '',
      reference: original.reference || ''
    };
  });
  return exam;
}

// 2. Upload to Cloud & Generate QR
async function createCloudSync() {
  const loading = document.getElementById('sync-send-loading');
  const result = document.getElementById('sync-send-result');
  const btn = document.getElementById('btn-create-sync');
  const qrImg = document.getElementById('sync-qr-image');
  const codeInput = document.getElementById('sync-generated-code');

  try {
    if (loading) loading.style.display = 'block';
    if (result) result.style.display = 'none';
    if (btn) btn.disabled = true;

    const payload = getDeviceSyncPayload();
    const response = await fetch(BYTEBIN_POST_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) throw new Error('Máy chủ phản hồi trạng thái: ' + response.status);
    const resData = await response.json();
    const syncId = resData.key;

    if (!syncId) throw new Error('Không nhận được mã định danh từ máy chủ');

    // Create sync URL that automatically opens and triggers merge when scanned/opened
    const syncUrl = `${window.location.origin}${window.location.pathname}?sync_id=${syncId}`;
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&margin=4&data=${encodeURIComponent(syncUrl)}`;

    if (qrImg) qrImg.src = qrUrl;
    if (codeInput) codeInput.value = syncUrl;

    if (loading) loading.style.display = 'none';
    if (result) result.style.display = 'block';
    if (btn) btn.disabled = false;
    playChime('correct');
  } catch (err) {
    console.error('Sync creation failed:', err);
    if (loading) loading.style.display = 'none';
    if (btn) btn.disabled = false;
    alert('Không thể tạo mã đồng bộ qua mạng (' + err.message + '). Bạn có thể chuyển sang tab "File .json & Zalo" để sao chép mã trực tiếp!');
  }
}

// 3. Copy link/code
function copySyncCode() {
  const codeInput = document.getElementById('sync-generated-code');
  if (!codeInput || !codeInput.value) return;
  navigator.clipboard.writeText(codeInput.value).then(() => {
    alert('✓ Đã sao chép liên kết đồng bộ! Bạn hãy gửi vào Zalo hoặc Messenger để mở trên thiết bị khác.');
  }).catch(() => {
    codeInput.select();
    document.execCommand('copy');
    alert('✓ Đã sao chép liên kết đồng bộ!');
  });
}

// 4. Fetch from Cloud & Apply Smart Merge
async function fetchAndApplySync(explicitId = null) {
  const inputEl = document.getElementById('sync-input-code');
  let rawVal = explicitId || (inputEl ? inputEl.value.trim() : '');
  if (!rawVal) {
    alert('Vui lòng nhập mã đồng bộ hoặc dán link đồng bộ!');
    return;
  }

  // Extract sync_id from full URL if pasted
  if (rawVal.includes('sync_id=')) {
    try {
      const u = new URL(rawVal);
      rawVal = u.searchParams.get('sync_id') || rawVal;
    } catch (e) {
      const match = rawVal.match(/sync_id=([a-zA-Z0-9]+)/);
      if (match) rawVal = match[1];
    }
  }

  const statusEl = document.getElementById('sync-receive-status');
  const btn = document.getElementById('btn-fetch-sync');

  try {
    if (btn) btn.disabled = true;
    if (statusEl) {
      statusEl.style.display = 'block';
      statusEl.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; color: var(--primary); font-weight: 500; font-size: 0.88rem;">
          <div class="sync-spinner" style="width: 20px; height: 20px; border-width: 2px;"></div>
          Đang tải và giải nén dữ liệu từ máy chủ...
        </div>
      `;
    }

    const response = await fetch(`${BYTEBIN_GET_URL}${rawVal}`);
    if (!response.ok) throw new Error('Mã đồng bộ không tồn tại hoặc đã hết hạn!');
    const remoteData = await response.json();

    if (!remoteData) throw new Error('Dữ liệu đồng bộ bị trống hoặc không hợp lệ');

    // Get selected merge mode
    const modeEl = document.querySelector('input[name="sync-merge-mode"]:checked');
    const mergeMode = modeEl ? modeEl.value : 'merge';

    const result = smartMergeSyncData(remoteData, mergeMode);

    if (statusEl) {
      statusEl.innerHTML = `
        <div style="padding: 0.75rem; background: var(--primary-light); color: var(--primary); border-radius: var(--radius-sm); font-size: 0.88rem; line-height: 1.5;">
          <strong>🎉 Đồng bộ thành công!</strong><br>
          Thiết bị nguồn: <em>${remoteData.device || 'Khác'}</em> (${remoteData.dateStr || ''})<br>
          • Đã gộp: <strong>${result.totalHistory} bài thi</strong> trong Lịch Sử (thêm mới ${result.addedHistory} bài)<br>
          • Câu hỏi tủ: <strong>${result.totalStarred} câu</strong> đã lưu
        </div>
      `;
    }
    if (btn) btn.disabled = false;
    playChime('correct');

    // Refresh current view if applicable
    if (currentTab === 'history') renderHistoryView();
    if (currentTab === 'flashcards') renderFlashcardView();
  } catch (err) {
    console.error('Fetch sync failed:', err);
    if (btn) btn.disabled = false;
    if (statusEl) {
      statusEl.style.display = 'block';
      statusEl.innerHTML = `
        <div style="padding: 0.75rem; background: var(--danger-light); color: var(--danger); border-radius: var(--radius-sm); font-size: 0.85rem;">
          ⚠️ <strong>Lỗi:</strong> ${err.message}
        </div>
      `;
    }
  }
}

// 5. Smart Merge Logic (Never loses user data)
function smartMergeSyncData(remoteData, mode = 'merge') {
  if (mode === 'overwrite') {
    if (Array.isArray(remoteData.examHistory)) {
      const fullHistory = remoteData.examHistory.map(e => rehydrateExam(e));
      localStorage.setItem(STORAGE_HISTORY_KEY, JSON.stringify(fullHistory));
    }
    if (Array.isArray(remoteData.flashcardStarred)) {
      flashcardStarred = new Set(remoteData.flashcardStarred);
      localStorage.setItem(STORAGE_FC_STARRED_KEY, JSON.stringify(Array.from(flashcardStarred)));
    }
    if (Array.isArray(remoteData.flashcardMastered)) {
      flashcardMastered = new Set(remoteData.flashcardMastered);
      localStorage.setItem(STORAGE_FC_MASTERED_KEY, JSON.stringify(Array.from(flashcardMastered)));
    }
    if (remoteData.studyAnswers && typeof remoteData.studyAnswers === 'object') {
      studyAnswers = remoteData.studyAnswers;
      localStorage.setItem(STORAGE_STUDY_ANSWERS_KEY, JSON.stringify(studyAnswers));
    }
    return {
      totalHistory: remoteData.examHistory ? remoteData.examHistory.length : 0,
      addedHistory: remoteData.examHistory ? remoteData.examHistory.length : 0,
      totalStarred: flashcardStarred.size
    };
  }

  // SMART MERGE (Merge without duplication, and upgrade corrupted exams with intact ones)
  const localHistory = getExamHistory();
  const historyMap = new Map();

  // Add existing local exams
  localHistory.forEach(item => {
    const key = item.id || item.dateStr;
    if (key) {
      historyMap.set(key, item);
    }
  });

  let addedHistory = 0;
  let upgradedHistory = 0;
  // Merge remote exams
  if (Array.isArray(remoteData.examHistory)) {
    remoteData.examHistory.forEach(item => {
      const key = item.id || item.dateStr;
      if (!key) return;
      const incoming = rehydrateExam(item);

      if (!historyMap.has(key)) {
        historyMap.set(key, incoming);
        addedHistory++;
      } else {
        // If local exam is corrupted (questions don't match score) but remote is intact, upgrade!
        const existing = historyMap.get(key);
        const existingIntact = isExamIntact(existing);
        const incomingIntact = isExamIntact(incoming);
        if (!existingIntact && incomingIntact) {
          historyMap.set(key, incoming);
          upgradedHistory++;
        }
        // Preserve and merge notes if incoming has note
        const currentExam = historyMap.get(key);
        if (incoming.note && (!currentExam.note || (incoming.noteUpdatedAt || 0) > (currentExam.noteUpdatedAt || 0))) {
          currentExam.note = incoming.note;
          currentExam.noteUpdatedAt = incoming.noteUpdatedAt || Date.now();
        }
      }
    });
  }

  const mergedHistory = Array.from(historyMap.values());

  // Sort by date/timestamp descending
  mergedHistory.sort((a, b) => {
    const tA = a.timestamp || (a.id ? parseInt(a.id.replace(/\D/g, '')) : 0) || 0;
    const tB = b.timestamp || (b.id ? parseInt(b.id.replace(/\D/g, '')) : 0) || 0;
    return tB - tA;
  });
  if (mergedHistory.length > 50) mergedHistory.length = 50;
  localStorage.setItem(STORAGE_HISTORY_KEY, JSON.stringify(mergedHistory));

  // Merge Starred
  let addedStarred = 0;
  if (Array.isArray(remoteData.flashcardStarred)) {
    remoteData.flashcardStarred.forEach(id => {
      if (!flashcardStarred.has(id)) {
        flashcardStarred.add(id);
        addedStarred++;
      }
    });
    localStorage.setItem(STORAGE_FC_STARRED_KEY, JSON.stringify(Array.from(flashcardStarred)));
  }

  // Merge Mastered
  if (Array.isArray(remoteData.flashcardMastered)) {
    remoteData.flashcardMastered.forEach(id => flashcardMastered.add(id));
    localStorage.setItem(STORAGE_FC_MASTERED_KEY, JSON.stringify(Array.from(flashcardMastered)));
  }

  // Merge Study answers
  if (remoteData.studyAnswers && typeof remoteData.studyAnswers === 'object') {
    studyAnswers = { ...studyAnswers, ...remoteData.studyAnswers };
    localStorage.setItem(STORAGE_STUDY_ANSWERS_KEY, JSON.stringify(studyAnswers));
  }

  return {
    totalHistory: mergedHistory.length,
    addedHistory: addedHistory,
    totalStarred: flashcardStarred.size
  };
}

// 6. Offline File Backup & Raw Code via Zalo
function exportBackupFile() {
  const payload = getDeviceSyncPayload();
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `dls_exam_backup_${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  playChime('click');
}

function copyRawBackupData() {
  const payload = getDeviceSyncPayload();
  const text = JSON.stringify(payload);
  navigator.clipboard.writeText(text).then(() => {
    alert('✓ Đã sao chép toàn bộ mã sao lưu! Bạn hãy dán mã này vào khung chat Zalo "Cloud của tôi" để lưu lại.');
  }).catch(() => {
    prompt('Sao chép đoạn mã sao lưu bên dưới:', text);
  });
}

function importBackupFile(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      const res = smartMergeSyncData(data, 'merge');
      alert(`🎉 Nhập file thành công! Đã gộp thành ${res.totalHistory} bài thi và ${res.totalStarred} câu hỏi tủ.`);
      if (currentTab === 'history') renderHistoryView();
      if (currentTab === 'flashcards') renderFlashcardView();
      closeSyncModal();
    } catch (err) {
      alert('File sao lưu không hợp lệ: ' + err.message);
    }
  };
  reader.readAsText(file);
}

function promptPasteRawData() {
  const text = prompt('Dán đoạn mã sao lưu dữ liệu từ Zalo vào đây:');
  if (!text) return;
  try {
    const data = JSON.parse(text.trim());
    const res = smartMergeSyncData(data, 'merge');
    alert(`🎉 Đã hợp nhất dữ liệu thành công! Có ${res.totalHistory} bài thi và ${res.totalStarred} câu hỏi tủ.`);
    if (currentTab === 'history') renderHistoryView();
    if (currentTab === 'flashcards') renderFlashcardView();
    closeSyncModal();
  } catch (err) {
    alert('Mã dữ liệu không hợp lệ: ' + err.message);
  }
}

function openMatrixModal() {
  const modal = document.getElementById('matrix-modal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeMatrixModal() {
  const modal = document.getElementById('matrix-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ============================================================================
// BANK COVERAGE TRACKER (Theo dõi độ phủ 1.222 câu hỏi đã từng làm)
// ============================================================================
function getBankCoverageStats() {
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
        if (studyAnswers[qId] === q.correct) correctIds.add(qId);
        else wrongIds.add(qId);
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
  }

  return {
    totalBank,
    seenCount,
    unseenCount,
    correctCount: correctIds.size,
    wrongCount: wrongIds.size,
    coveragePct,
    seenIds,
    chapterBreakdown
  };
}

function updateCoverageDisplays() {
  const stats = getBankCoverageStats();
  const badge = document.getElementById('header-coverage-badge');
  if (badge) {
    badge.textContent = `${stats.seenCount} / ${stats.totalBank} (${stats.coveragePct}%)`;
  }
}

function openCoverageModal() {
  const modal = document.getElementById('modal-coverage');
  const body = document.getElementById('coverage-modal-body');
  if (!modal || !body) return;

  const stats = getBankCoverageStats();
  const correctPct = stats.totalBank > 0 ? ((stats.correctCount / stats.totalBank) * 100).toFixed(1) : '0';
  const wrongPct = stats.totalBank > 0 ? ((stats.wrongCount / stats.totalBank) * 100).toFixed(1) : '0';

  let html = `
    <div>
      <div class="coverage-stat-cards">
        <div class="coverage-card">
          <div class="card-val" style="color: var(--secondary);">${stats.seenCount}</div>
          <div class="card-lbl">Đã gặp / ${stats.totalBank} câu</div>
        </div>
        <div class="coverage-card">
          <div class="card-val" style="color: var(--primary);">${stats.correctCount}</div>
          <div class="card-lbl">Đã làm đúng</div>
        </div>
        <div class="coverage-card">
          <div class="card-val" style="color: var(--danger);">${stats.wrongCount}</div>
          <div class="card-lbl">Từng làm sai</div>
        </div>
        <div class="coverage-card">
          <div class="card-val" style="color: var(--text-muted);">${stats.unseenCount}</div>
          <div class="card-lbl">Chưa gặp lần nào</div>
        </div>
      </div>

      <div style="margin-bottom: 0.85rem;">
        <div style="display: flex; justify-content: space-between; font-size: 0.82rem; margin-bottom: 0.35rem;">
          <span>Tiến độ phủ: <strong>${stats.coveragePct}%</strong> kho đề</span>
          <span style="color: var(--primary);">Đúng: ${correctPct}% • <span style="color: var(--danger);">Sai: ${wrongPct}%</span></span>
        </div>
        <div class="coverage-progress-bar">
          <div class="coverage-bar-fill correct" style="width: ${correctPct}%;"></div>
          <div class="coverage-bar-fill wrong" style="width: ${wrongPct}%;"></div>
        </div>
      </div>

      <div class="matrix-table-wrap" style="max-height: 48vh;">
        <table class="matrix-table">
          <thead>
            <tr>
              <th>Chuyên đề bài giảng (44h)</th>
              <th style="text-align: center;">Kho câu</th>
              <th style="text-align: center;">Đã gặp</th>
              <th style="text-align: center;">Đã đúng</th>
              <th style="text-align: center;">Chưa làm</th>
              <th style="text-align: center;">Độ phủ</th>
            </tr>
          </thead>
          <tbody>
  `;

  // Render rows for official 14 chapters
  EXAM_MATRIX_44H.forEach(rule => {
    const chStats = stats.chapterBreakdown[rule.chapter] || { total: 0, seen: 0, correct: 0, wrong: 0 };
    const un = Math.max(0, chStats.total - chStats.seen);
    const p = chStats.total > 0 ? Math.round((chStats.seen / chStats.total) * 100) : 0;
    html += `
      <tr>
        <td><strong>${rule.lesson}:</strong> ${rule.chapter}</td>
        <td style="text-align: center;">${chStats.total}</td>
        <td style="text-align: center; color: var(--secondary); font-weight: 600;">${chStats.seen}</td>
        <td style="text-align: center; color: var(--primary); font-weight: 600;">${chStats.correct}</td>
        <td style="text-align: center; color: var(--text-muted);">${un}</td>
        <td style="text-align: center;">
          <span style="display: inline-block; padding: 0.15rem 0.45rem; border-radius: var(--radius-full); font-size: 0.75rem; font-weight: 600; background: ${p >= 50 ? 'var(--primary-light)' : 'var(--surface-alt)'}; color: ${p >= 50 ? 'var(--primary)' : 'var(--text-muted)'};">
            ${p}%
          </span>
        </td>
      </tr>
    `;
  });

  html += `
          </tbody>
        </table>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.75rem;">
        <div style="font-size: 0.8rem; color: var(--text-muted);">
          💡 Bật <em>"🎯 Ưu tiên câu chưa làm"</em> để hệ thống luôn bốc các câu mới vào đề thi 80 câu!
        </div>
        <button class="btn btn-primary" onclick="closeCoverageModal(); generateRandomExam();" style="padding: 0.45rem 1rem; font-size: 0.82rem;">
          🎲 Thi Đề Ưu Tiên Câu Chưa Làm
        </button>
      </div>
    </div>
  `;

  body.innerHTML = html;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCoverageModal() {
  const modal = document.getElementById('modal-coverage');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function openVoiceGuideModal() {
  const modal = document.getElementById('modal-voice-guide');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeVoiceGuideModal() {
  const modal = document.getElementById('modal-voice-guide');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Initialize on Load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('dls_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  themeToggleBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

  try {
    const savedTab = localStorage.getItem('dls_active_tab');
    if (savedTab) currentTab = savedTab;
    const savedTopic = localStorage.getItem('dls_active_topic');
    if (savedTopic) activeTopicFilter = savedTopic;
  } catch (e) {}

  initTTS();
  initDesktopScratchpad();
  loadStudyAnswers();
  loadTopicCustomOrder();
  loadFlashcardState();
  const restored = restoreExamDraft();
  if (!restored) {
    generateRandomExam(true);
  }
  updateCoverageDisplays();
  const chkUnseen = document.getElementById('chk-prioritize-unseen');
  if (chkUnseen) chkUnseen.checked = prioritizeUnseenQuestions;

  // Synchronize sidebar layout with current tab
  switchTab(currentTab || 'exam');

  // Close mobile navigation drawer when resizing to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      closeMobileNavMenu();
    }
  });

  // Cross-device sync URL parameter detection (?sync_id=...)
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const syncId = urlParams.get('sync_id');
    if (syncId) {
      window.history.replaceState({}, document.title, window.location.pathname);
      setTimeout(() => {
        openSyncModal();
        switchSyncTab('receive');
        const input = document.getElementById('sync-input-code');
        if (input) input.value = syncId;
        fetchAndApplySync(syncId);
      }, 500);
    }
  } catch (e) {
    console.warn('URL sync param check error:', e);
  }
});
