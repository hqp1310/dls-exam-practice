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

// Generate a brand new 80-question test from the 820-question bank
// Shuffles question selection AND shuffles option positions (A, B, C, D)
function generateRandomExam(force = false) {
  if (typeof ALL_EXAM_BANK === 'undefined' || !ALL_EXAM_BANK.length) {
    console.error('ALL_EXAM_BANK not loaded!');
    return;
  }

  if (!force && !isExamSubmitted && Object.keys(userAnswers).length > 0) {
    if (!confirm('Bạn đang làm bài thi dở dang. Bạn có chắc chắn muốn bỏ bài thi hiện tại và tạo đề thi mới không?')) {
      return;
    }
  }

  clearExamDraft();

  // 1. Get unique chapters to balance questions across syllabus
  const chapters = [...new Set(ALL_EXAM_BANK.map(q => q.chapter))];
  const quotaPerChapter = Math.max(1, Math.floor(80 / chapters.length));
  let chosenQuestions = [];
  const chosenStems = new Set();

  chapters.forEach(ch => {
    const chQuestions = ALL_EXAM_BANK.filter(q => q.chapter === ch);
    const shuffled = shuffle(chQuestions);
    for (const item of shuffled) {
      if (!chosenStems.has(item.question)) {
        chosenQuestions.push(item);
        chosenStems.add(item.question);
        if (chosenQuestions.filter(q => q.chapter === ch).length >= quotaPerChapter) {
          break;
        }
      }
    }
  });

  // Fill up to exactly 80 questions randomly from remaining questions
  if (chosenQuestions.length < 80) {
    const remaining = ALL_EXAM_BANK.filter(q => !chosenStems.has(q.question));
    const shuffledRemaining = shuffle(remaining);
    for (const item of shuffledRemaining) {
      chosenQuestions.push(item);
      chosenStems.add(item.question);
      if (chosenQuestions.length === 80) break;
    }
  } else if (chosenQuestions.length > 80) {
    chosenQuestions = chosenQuestions.slice(0, 80);
  }

  // Shuffle question order
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

// Navigation Tabs
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    switchTab(btn.dataset.tab);
    playChime('click');
  });
});

function switchTab(tab) {
  stopSpeaking();
  currentTab = tab;
  closeMobilePalette();

  // Always synchronize navbar tabs!
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.tab === tab);
  });
  try {
    localStorage.setItem('dls_active_tab', tab);
  } catch (e) {}

  document.getElementById('view-exam').style.display = tab === 'exam' ? 'block' : 'none';
  document.getElementById('view-history').style.display = tab === 'history' ? 'block' : 'none';
  document.getElementById('view-topic').style.display = tab === 'topic' ? 'block' : 'none';
  document.getElementById('view-flashcards').style.display = tab === 'flashcards' ? 'block' : 'none';
  document.getElementById('view-cheatsheet').style.display = tab === 'cheatsheet' ? 'block' : 'none';
  
  const dock = document.getElementById('mobile-exam-dock');
  if (dock) {
    dock.style.display = tab === 'exam' ? 'flex' : 'none';
  }

  const paletteContainer = document.getElementById('sidebar-palette');
  const desktopScratchpad = document.getElementById('desktop-scratchpad-panel');
  const returnToPaletteBtn = document.getElementById('btn-palette-return');

  if (tab === 'exam') {
    if (paletteContainer) paletteContainer.style.display = 'flex';
    if (desktopScratchpad) desktopScratchpad.style.display = 'none';
    if (returnToPaletteBtn) returnToPaletteBtn.style.display = 'none';
    renderExamQuestion(currentQuestionIndex);
    updatePalette();
  } else {
    // In Chuyên Đề, Câu Hỏi Tủ, Lịch Sử, Công Thức:
    // Palette is hidden, and Desktop Scratchpad is automatically visible on PC!
    if (paletteContainer) paletteContainer.style.display = 'none';
    if (returnToPaletteBtn) returnToPaletteBtn.style.display = 'none';
    if (desktopScratchpad) {
      if (window.innerWidth > 1024) {
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

// Dual-Engine Vietnamese Text-To-Speech (TTS) Engine
// GUARANTEE: Never uses an English voice to read Vietnamese
let ttsAudioQueue = [];
let currentAudio = null;

function isVietnameseVoice(v) {
  if (!v) return false;
  const l = (v.lang || '').toLowerCase();
  const n = (v.name || '').toLowerCase();
  return l.startsWith('vi') || l.includes('vn') || n.includes('vietnam') || n.includes('hoaimy') || n.includes('namminh') || n.includes('google tiếng việt');
}

function findVietnameseVoice() {
  if (!('speechSynthesis' in window)) return null;
  try {
    const voices = window.speechSynthesis.getVoices() || [];
    if (!voices.length) return null;
    // 1st priority: Microsoft Natural Vietnamese voices (HoaiMy, NamMinh on Edge)
    let vi = voices.find(v => isVietnameseVoice(v) && (v.name.toLowerCase().includes('natural') || v.name.toLowerCase().includes('online')));
    if (!vi) {
      vi = voices.find(v => isVietnameseVoice(v));
    }
    return vi || null;
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
}

function stopSpeaking() {
  // 1. Stop Web Speech Synthesis
  if ('speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch (e) {}
  }
  // 2. Stop Online Audio Stream & queue
  if (currentAudio) {
    try {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    } catch (e) {}
    currentAudio = null;
  }
  ttsAudioQueue = [];

  isSpeaking = false;
  document.querySelectorAll('.btn-speak-exp').forEach(btn => {
    btn.classList.remove('is-speaking');
    btn.innerHTML = '<span>🔊</span> Đọc giải thích';
  });
  currentSpeechBtn = null;
}

function cleanTextForVietnameseSpeech(rawText) {
  if (!rawText) return '';
  return rawText
    .replace(/<[^>]*>/g, ' ')
    .replace(/•/g, ', ')
    .replace(/✓/g, 'Đúng. ')
    .replace(/✗/g, 'Sai. ')
    .replace(/\bCrCl\b/gi, 'độ thanh thải Creatinine')
    .replace(/\beGFR\b/gi, 'mức lọc cầu thận')
    .replace(/\bNSAIDs?\b/gi, 'thuốc kháng viêm không steroid')
    .replace(/\bADR\b/gi, 'tác dụng không mong muốn')
    .replace(/\bCYP(\d+[A-Z]\d+)\b/gi, 'men gan CYP $1')
    .replace(/\bAUC\b/gi, 'diện tích dưới đường cong')
    .replace(/\bCmax\b/gi, 'nồng độ đỉnh C max')
    .replace(/\bT1\/2\b/gi, 'thời gian bán thải T 1 phần 2')
    .replace(/\bmg\/dl\b/gi, 'miligram trên đê xi lít')
    .replace(/\bml\/phút\b/gi, 'mili lít trên phút')
    .replace(/\bmg\/ngày\b/gi, 'miligram mỗi ngày')
    .replace(/\bg\/ngày\b/gi, 'gam mỗi ngày')
    .replace(/\bmmol\/l\b/gi, 'mili mol trên lít')
    .replace(/\bIV\b/g, 'tiêm tĩnh mạch')
    .replace(/\bIM\b/g, 'tiêm bắp')
    .replace(/\bSC\b/g, 'tiêm dưới da')
    .replace(/\bPO\b/g, 'đường uống')
    .replace(/\bHbA1c\b/gi, 'H b A một c')
    .replace(/\bLDL-C\b/gi, 'L D L cholesterol')
    .replace(/\bHDL-C\b/gi, 'H D L cholesterol')
    .replace(/\bvs\b/gi, 'so với')
    .replace(/([0-9]+)\s*-\s*([0-9]+)/g, '$1 đến $2')
    .replace(/\s+/g, ' ')
    .trim();
}

function splitTextIntoAudioChunks(text, maxLength = 180) {
  const sentences = text.match(/[^.!?\n,;]+[.!?\n,;]?/g) || [text];
  const chunks = [];
  let currentChunk = '';

  sentences.forEach(s => {
    s = s.trim();
    if (!s) return;
    if ((currentChunk + ' ' + s).trim().length <= maxLength) {
      currentChunk = (currentChunk + ' ' + s).trim();
    } else {
      if (currentChunk) chunks.push(currentChunk);
      if (s.length <= maxLength) {
        currentChunk = s;
      } else {
        const words = s.split(/\s+/);
        let sub = '';
        words.forEach(w => {
          if ((sub + ' ' + w).trim().length <= maxLength) {
            sub = (sub + ' ' + w).trim();
          } else {
            if (sub) chunks.push(sub);
            sub = w;
          }
        });
        currentChunk = sub;
      }
    }
  });

  if (currentChunk) chunks.push(currentChunk);
  return chunks;
}

function playVietnameseAudioStreamQueue() {
  if (!isSpeaking || !ttsAudioQueue.length) {
    stopSpeaking();
    return;
  }
  const chunk = ttsAudioQueue.shift();
  const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=vi&client=tw-ob&q=${encodeURIComponent(chunk)}`;
  
  currentAudio = new Audio(url);
  currentAudio.onended = () => {
    playVietnameseAudioStreamQueue();
  };
  currentAudio.onerror = (e) => {
    console.warn('Audio stream chunk error, trying next:', e);
    playVietnameseAudioStreamQueue();
  };
  currentAudio.play().catch(err => {
    console.warn('Audio play error:', err);
    stopSpeaking();
  });
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

  btn.classList.add('is-speaking');
  btn.innerHTML = '<span>⏹️</span> Dừng đọc';
  isSpeaking = true;
  currentSpeechBtn = btn;

  // Check if browser has a genuine verified Vietnamese voice
  const viVoice = cachedViVoice || findVietnameseVoice();

  if (viVoice && 'speechSynthesis' in window) {
    // Mode A: Native Vietnamese Voice (Edge HoaiMy/NamMinh Natural, Google Tiếng Việt)
    cachedViVoice = viVoice;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = viVoice;
    utterance.lang = 'vi-VN';
    utterance.rate = 0.95;
    utterance.pitch = 1.0;

    utterance.onend = () => {
      stopSpeaking();
    };

    utterance.onerror = (e) => {
      console.warn('SpeechSynthesis error:', e);
      stopSpeaking();
    };

    window.speechSynthesis.speak(utterance);
  } else {
    // Mode B: NO English voice allowed! Use Google Vietnamese Audio Stream (Chị Google)
    const chunks = splitTextIntoAudioChunks(text, 180);
    if (!chunks.length) {
      stopSpeaking();
      return;
    }
    ttsAudioQueue = chunks;
    playVietnameseAudioStreamQueue();
  }
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
        <div>
          <span>⏱️ <strong>Chưa tính giờ:</strong> Thời gian 80 phút sẽ bắt đầu khi bạn ấn nút <strong>"Bắt đầu làm bài"</strong> hoặc chọn đáp án đầu tiên.</span>
        </div>
        <button class="btn btn-primary" onclick="startExam()" style="padding: 0.35rem 0.85rem; font-size: 0.82rem; white-space: nowrap; background: linear-gradient(135deg, #059669 0%, #047857 100%);">
          ▶️ Bắt đầu làm bài
        </button>
      </div>
    `;
  }

  let html = `
    ${notStartedBanner}
    <div class="question-meta">
      <div class="badge-group">
        <span class="badge badge-num">Câu ${index + 1} / ${EXAM_QUESTIONS.length}</span>
        <span class="badge badge-category">${q.chapter}</span>
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
          <button class="btn-speak-exp" onclick="speakExplanationFromCard(this)" title="Nghe đọc giải thích lâm sàng bằng giọng tiếng Việt">
            <span>🔊</span> Đọc giải thích
          </button>
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
    questions: EXAM_QUESTIONS.map((q, idx) => ({
      id: q.id,
      examNum: idx + 1,
      chapter: q.chapter,
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

  openResultsModal();
  renderExamQuestion(currentQuestionIndex);
}

function openResultsModal() {
  resultsModal.classList.add('active');
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
  const baseList = activeTopicFilter === 'Tất cả'
    ? ALL_EXAM_BANK
    : ALL_EXAM_BANK.filter(q => q.chapter === activeTopicFilter);

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

function renderTopicStudyView() {
  const container = document.getElementById('view-topic');
  if (!container) return;

  const chapters = ["Tất cả", ...new Set(ALL_EXAM_BANK.map(q => q.chapter))];
  const stats = getTopicChapterStats();
  const filteredQuestions = getFilteredTopicQuestions();
  const visibleQuestions = filteredQuestions.slice(0, topicVisibleLimit);
  const isOrderShuffled = !!(topicCustomOrder[activeTopicFilter] && topicCustomOrder[activeTopicFilter].length);

  // 1. HORIZONTAL SWIPEABLE CHAPTER RIBBON
  let chipsHtml = `<div class="topic-ribbon-container">
    <div class="topic-selector-bar">`;
  chapters.forEach(top => {
    const count = top === 'Tất cả' ? ALL_EXAM_BANK.length : ALL_EXAM_BANK.filter(q => q.chapter === top).length;
    chipsHtml += `
      <button class="topic-chip ${top === activeTopicFilter ? 'active' : ''}" data-topic="${top.replace(/"/g, '&quot;')}" onclick="filterTopic('${top.replace(/'/g, "\\'")}')">
        <span>${top}</span>
        <span class="chip-count">${count}</span>
      </button>
    `;
  });
  chipsHtml += `</div></div>`;

  // 2. MOBILE TOPIC DASHBOARD
  const dashboardHtml = `
    <div class="topic-dashboard">
      <div class="topic-dash-header">
        <div class="topic-dash-title-wrap">
          <div class="topic-dash-title">${activeTopicFilter}</div>
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

  container.innerHTML = chipsHtml + dashboardHtml + listHtml + loadMoreHtml;

  // Auto-center active chapter chip in the horizontal ribbon
  setTimeout(() => {
    const activeChip = container.querySelector('.topic-chip.active');
    if (activeChip) {
      activeChip.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, 40);
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
            <button class="btn-speak-exp" onclick="speakExplanationFromCard(this)" title="Nghe đọc giải thích lâm sàng bằng giọng tiếng Việt">
              <span>🔊</span> Đọc giải thích
            </button>
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
      <button class="btn-speak-exp" onclick="speakExplanationFromCard(this)" title="Nghe đọc giải thích lâm sàng bằng giọng tiếng Việt">
        <span>🔊</span> Đọc giải thích
      </button>
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
    if (titleEl) titleEl.textContent = topic;

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
  renderCheatsheetView();
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

  const showAll = currentCheatsheetSubtab === 'all';
  const isFormulas = showAll || currentCheatsheetSubtab === 'formulas';
  const isEncyclopedia = showAll || currentCheatsheetSubtab === 'encyclopedia';
  const isStrategy = showAll || currentCheatsheetSubtab === 'strategy';
  const isMnemonics = showAll || currentCheatsheetSubtab === 'mnemonics';
  const isAntidotes = showAll || currentCheatsheetSubtab === 'antidotes';

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
      <button class="cs-subnav-btn ${currentCheatsheetSubtab === 'formulas' ? 'active' : ''}" onclick="switchCheatsheetSubtab('formulas')">
        <span>📐</span> Công Thức &amp; 4 Bài Toán Mẫu
      </button>
      <button class="cs-subnav-btn ${currentCheatsheetSubtab === 'encyclopedia' ? 'active' : ''}" onclick="switchCheatsheetSubtab('encyclopedia')">
        <span>📚</span> Sổ Tay 17 Chuyên Đề &amp; Bẫy Thi
      </button>
      <button class="cs-subnav-btn ${currentCheatsheetSubtab === 'strategy' ? 'active' : ''}" onclick="switchCheatsheetSubtab('strategy')">
        <span>🎯</span> Ma Trận 17 Bài &amp; Chiến Lược 44H
      </button>
      <button class="cs-subnav-btn ${currentCheatsheetSubtab === 'mnemonics' ? 'active' : ''}" onclick="switchCheatsheetSubtab('mnemonics')">
        <span>🧠</span> "Thần Chú" &amp; Cặp Đôi Kinh Điển
      </button>
      <button class="cs-subnav-btn ${currentCheatsheetSubtab === 'antidotes' ? 'active' : ''}" onclick="switchCheatsheetSubtab('antidotes')">
        <span>⚡</span> Cấp Cứu: Giải Độc &amp; Thai Kỳ
      </button>
      <button class="cs-subnav-btn ${currentCheatsheetSubtab === 'all' ? 'active' : ''}" onclick="switchCheatsheetSubtab('all')">
        <span>📑</span> Xem Toàn Bộ Cẩm Nang
      </button>
    </div>

    <div style="display: flex; flex-direction: column; gap: 1.5rem;">

      <!-- ========================================== -->
      <!-- SECTION 1: CÔNG THỨC & 4 BÀI TOÁN MẪU CÓ LỜI GIẢI CHI TIẾT -->
      <!-- ========================================== -->
      ${isFormulas ? `
      <div class="question-card cs-searchable-item" id="cs-sec-formulas">
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
      ` : ''}


      <!-- ========================================== -->
      <!-- SECTION 2: SỔ TAY 17 CHUYÊN ĐỀ TOÀN THƯ (CHI TIẾT & BẪY THI) -->
      <!-- ========================================== -->
      ${isEncyclopedia ? `
      <div class="question-card cs-searchable-item" id="cs-sec-encyclopedia">
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
      ` : ''}


      <!-- ========================================== -->
      <!-- SECTION 3: MA TRẬN 17 BÀI & TRỌNG SỐ 44H (80/20) -->
      <!-- ========================================== -->
      ${isStrategy ? `
      <div class="question-card cs-searchable-item" id="cs-sec-strategy">
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
      ` : ''}


      <!-- ========================================== -->
      <!-- SECTION 4: THẦN CHÚ & CẶP ĐÔI KINH ĐIỂN -->
      <!-- ========================================== -->
      ${isMnemonics ? `
      <div class="question-card cs-searchable-item" id="cs-sec-mnemonics">
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
      ` : ''}


      <!-- ========================================== -->
      <!-- SECTION 5: THUỐC CẤP CỨU & GIẢI ĐỘC (ANTIDOTES) -->
      <!-- ========================================== -->
      ${isAntidotes ? `
      <div class="question-card cs-searchable-item" id="cs-sec-antidotes">
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
      ` : ''}

    </div>
  `;
}


// ==========================================
// EXAM HISTORY & DETAILED REVIEW SYSTEM
// ==========================================
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
  renderHistoryView();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeReviewExam() {
  currentReviewExam = null;
  renderHistoryView();
  window.scrollTo({ top: 0, behavior: 'smooth' });
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

  let html = `
    <div class="history-container">
      
      <!-- STATS OVERVIEW -->
      <div class="history-stats-banner">
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
        <div style="display: flex; gap: 0.5rem; align-items: center;">
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
            <button class="btn btn-secondary" onclick="deleteHistoryItem('${item.id}')" title="Xóa bài thi này" style="padding: 0.55rem 0.75rem; color: var(--danger);">
              🗑️
            </button>
          </div>
        </div>
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
  const wrongCount = questions.filter(q => q.userAnswer !== null && !q.isCorrect).length;
  const correctCount = questions.filter(q => q.isCorrect).length;
  const skippedCount = questions.filter(q => q.userAnswer === null).length;
  const flaggedCount = questions.filter(q => q.isFlagged).length;

  let html = `
    <div class="review-view-container">
      
      <!-- STICKY HEADER -->
      <div class="review-sticky-header">
        <div class="review-top-nav">
          <div style="display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
            <button class="btn btn-secondary" onclick="closeReviewExam()" style="padding: 0.4rem 0.85rem; font-size: 0.82rem;">
              ← Quay lại danh sách lịch sử
            </button>
            <div>
              <strong style="font-size: 1.05rem; font-family: var(--font-heading); color: var(--text-main);">
                Chi Tiết Bài Thi: ${exam.dateStr}
              </strong>
              <span style="margin-left: 0.5rem; font-size: 0.85rem; color: var(--text-muted);">
                Điểm: <strong style="color: var(--primary);">${exam.score10}/10</strong> (${exam.correctCount}/${exam.totalQuestions} câu đúng • Thời gian: ${exam.timeUsedStr})
              </span>
            </div>
          </div>

          <div style="display: flex; gap: 0.5rem;">
            <button class="btn btn-secondary" onclick="startNewExamFromHistory()" style="padding: 0.4rem 0.85rem; font-size: 0.82rem; background: var(--secondary-light); color: var(--secondary); border-color: var(--secondary);">
              🎲 Thi đề 80 câu mới
            </button>
          </div>
        </div>

        <!-- FILTER PILLS & SEARCH -->
        <div class="review-filter-row">
          <button class="review-pill ${reviewFilter === 'all' ? 'active' : ''}" onclick="setReviewFilter('all')">
            📋 Tất cả <span class="count">${questions.length}</span>
          </button>
          <button class="review-pill pill-wrong ${reviewFilter === 'wrong' ? 'active' : ''}" onclick="setReviewFilter('wrong')" title="Xem những câu bạn đã chọn sai để khắc phục">
            ❌ Câu làm sai <span class="count">${wrongCount}</span>
          </button>
          <button class="review-pill pill-correct ${reviewFilter === 'correct' ? 'active' : ''}" onclick="setReviewFilter('correct')">
            ✅ Câu làm đúng <span class="count">${correctCount}</span>
          </button>
          <button class="review-pill ${reviewFilter === 'skipped' ? 'active' : ''}" onclick="setReviewFilter('skipped')">
            ⚪ Chưa làm <span class="count">${skippedCount}</span>
          </button>
          <button class="review-pill ${reviewFilter === 'flagged' ? 'active' : ''}" onclick="setReviewFilter('flagged')">
            ★ Đã đánh dấu <span class="count">${flaggedCount}</span>
          </button>

          <div style="margin-left: auto; min-width: 200px; flex: 1; max-width: 320px;">
            <input type="text" id="review-search-box" placeholder="🔍 Tìm câu hỏi, thuốc, bệnh..." 
              value="${reviewSearchQuery}" 
              oninput="handleReviewSearch(this.value)"
              style="width: 100%; padding: 0.35rem 0.75rem; border: 1px solid var(--border); border-radius: var(--radius-full); font-size: 0.82rem; background: var(--surface-alt); color: var(--text-main); outline: none;">
          </div>
        </div>
      </div>

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
            <span class="badge badge-num">Câu ${q.examNum} / 80</span>
            <span class="badge badge-category">${q.chapter}</span>
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
            <button class="btn-speak-exp" onclick="speakExplanationFromCard(this)" title="Nghe đọc giải thích lâm sàng bằng giọng tiếng Việt">
              <span>🔊</span> Đọc giải thích
            </button>
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
  // Synchronize sidebar layout with current tab
  switchTab(currentTab || 'exam');
});
