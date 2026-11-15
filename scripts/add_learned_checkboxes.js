const fs = require('fs');
const path = require('path');

const cheatsheetPath = path.join(__dirname, '..', 'cheatsheet_duocly2.js');
let code = fs.readFileSync(cheatsheetPath, 'utf8');

console.log('Original cheatsheet length:', code.length);

const LESSON_TOPIC_MAP = {
  1: { topic: 'Thuốc trợ tim', title: 'Thuốc Trợ Tim' },
  2: { topic: 'Thuốc điều trị THA', title: 'Điều Trị Tăng Huyết Áp' },
  3: { topic: 'Thuốc chữa CĐTN', title: 'Thuốc Chữa Cơn Đau Thắt Ngực' },
  4: { topic: 'Thuốc chống loạn nhịp', title: 'Thuốc Chống Loạn Nhịp' },
  5: { topic: 'Thuốc lợi niệu', title: 'Thuốc Lợi Niệu' },
  6: { topic: 'Thuốc điều trị DDTT', title: 'Thuốc Điều Trị Loét DDTT' },
  7: { topic: 'Thuốc chống giun sán, amibe', title: 'Thuốc Chống Giun Sán & Amip' },
  8: { topic: 'Thuốc ĐC RLHH', title: 'Thuốc Điều Trị Rối Loạn Hô Hấp' },
  9: { topic: 'Thuốc kháng H1', title: 'Thuốc Kháng Histamin H1' },
  10: { topic: 'Thuốc hạ lipid máu', title: 'Thuốc Hạ Lipid Máu' },
  11: { topic: 'Thuốc chống sốt rét', title: 'Thuốc Chống Sốt Rét' },
  12: { topic: 'KTGHP', title: 'KTGHP' },
  13: { topic: 'Hormon', title: 'Thuốc Hormon' },
  14: { topic: 'Thuốc hạ glucose máu', title: 'Thuốc Hạ Glucose Máu' },
  15: { topic: 'Thuốc/QT đông cầm máu', title: 'Thuốc Đông Cầm Máu' },
  16: { topic: 'Vitamin', title: 'Thuốc Vitamin' },
  17: { topic: 'Thuốc chữa thiếu máu', title: 'Thuốc Chữa Thiếu Máu' },
  18: { topic: 'Thuốc kháng virus', title: 'Thuốc Kháng Virus' },
  19: { topic: 'Thuốc chống ung thư', title: 'Thuốc Chống Ung Thư' },
  20: { topic: 'Thuốc/trong điều trị ngộ độc', title: 'Điều Trị Ngộ Độc Cấp' }
};

// 1. Add state management functions near the top
const stateFunctions = `
let dl2LearnedLessons = {};
let dl2LearningStatusFilter = 'all'; // 'all', 'unlearned', 'learned'

function loadDl2LearnedLessons() {
  try {
    const raw = localStorage.getItem('dl2_learned_lessons');
    dl2LearnedLessons = raw ? JSON.parse(raw) : {};
  } catch (e) {
    dl2LearnedLessons = {};
  }
}

function saveDl2LearnedLessons() {
  try {
    localStorage.setItem('dl2_learned_lessons', JSON.stringify(dl2LearnedLessons));
  } catch (e) {}
}

function isDl2LessonLearned(chId) {
  if (!dl2LearnedLessons || Object.keys(dl2LearnedLessons).length === 0) {
    loadDl2LearnedLessons();
  }
  return !!dl2LearnedLessons[chId];
}

function getDl2LearnedCount() {
  if (!dl2LearnedLessons || Object.keys(dl2LearnedLessons).length === 0) {
    loadDl2LearnedLessons();
  }
  let count = 0;
  for (let i = 1; i <= 20; i++) {
    if (dl2LearnedLessons['dl2_ch' + i]) count++;
  }
  return count;
}

function toggleDl2LessonLearned(chId, explicitState) {
  loadDl2LearnedLessons();
  const newState = (explicitState !== undefined) ? !!explicitState : !dl2LearnedLessons[chId];
  if (newState) {
    dl2LearnedLessons[chId] = true;
  } else {
    delete dl2LearnedLessons[chId];
  }
  saveDl2LearnedLessons();

  updateDl2LessonLearnedDOM(chId, newState);
  updateDl2LearningProgressBar();
  applyDl2ChapterFilters();

  const chNum = chId.replace('dl2_ch', '');
  if (newState) {
    if (typeof playChime === 'function') playChime('success');
    const totalLearned = getDl2LearnedCount();
    if (totalLearned === 20) {
      if (typeof showToast === 'function') {
        showToast('🎉 Tuyệt vời! Bạn đã hoàn thành toàn bộ 20 bài Dược Lý 2!');
      }
    } else {
      if (typeof showToast === 'function') {
        showToast(\`✅ Đã đánh dấu: Hoàn thành Bài \${chNum}! (\${totalLearned}/20 bài)\`);
      }
    }
  } else {
    if (typeof playChime === 'function') playChime('click');
    if (typeof showToast === 'function') {
      showToast(\`Đã bỏ đánh dấu Bài \${chNum}\`);
    }
  }
}

function updateDl2LessonLearnedDOM(chId, isLearned) {
  // 1. Update header button
  const headBtn = document.getElementById('dl2-chk-' + chId);
  if (headBtn) {
    headBtn.classList.toggle('checked', isLearned);
    headBtn.setAttribute('title', isLearned ? 'Nhấn để bỏ đánh dấu' : 'Nhấn để đánh dấu đã học xong bài này');
    headBtn.innerHTML = \`
      <span class="dl2-chk-icon">\${isLearned ? '✅' : '⬜'}</span>
      <span class="dl2-chk-text">\${isLearned ? 'Đã học' : 'Chưa học'}</span>
    \`;
  }

  // 2. Update item container highlight
  const item = document.getElementById('dl2-item-' + chId);
  if (item) {
    item.classList.toggle('is-learned', isLearned);
  }

  // 3. Update bottom button in body
  const bottomBtn = document.getElementById('dl2-bottom-chk-' + chId);
  if (bottomBtn) {
    bottomBtn.className = isLearned ? 'btn btn-success dl2-mark-learned-btn' : 'btn btn-outline-success dl2-mark-learned-btn';
    bottomBtn.innerHTML = isLearned ? '✓ Đã học xong bài này (Nhấn để hủy)' : '✅ Đánh dấu đã học xong bài này';
  }
}

function updateDl2LearningProgressBar() {
  const count = getDl2LearnedCount();
  const pct = Math.round((count / 20) * 100);

  const countEl = document.getElementById('dl2-learned-count');
  if (countEl) countEl.textContent = count;

  const pctEl = document.getElementById('dl2-learned-pct');
  if (pctEl) pctEl.textContent = \`(\${pct}%)\`;

  const fillEl = document.getElementById('dl2-learned-bar-fill');
  if (fillEl) fillEl.style.width = pct + '%';

  const unlearnedEl = document.getElementById('dl2-count-unlearned');
  if (unlearnedEl) unlearnedEl.textContent = 20 - count;

  const learnedEl = document.getElementById('dl2-count-learned');
  if (learnedEl) learnedEl.textContent = count;
}

function markAllDl2LessonsLearned(learned) {
  loadDl2LearnedLessons();
  for (let i = 1; i <= 20; i++) {
    const chId = 'dl2_ch' + i;
    if (learned) {
      dl2LearnedLessons[chId] = true;
    } else {
      delete dl2LearnedLessons[chId];
    }
    updateDl2LessonLearnedDOM(chId, learned);
  }
  saveDl2LearnedLessons();
  updateDl2LearningProgressBar();
  applyDl2ChapterFilters();

  if (learned) {
    if (typeof playChime === 'function') playChime('success');
    if (typeof showToast === 'function') showToast('✅ Đã đánh dấu hoàn thành tất cả 20 bài!');
  } else {
    if (typeof playChime === 'function') playChime('click');
    if (typeof showToast === 'function') showToast('🔄 Đã đặt lại trạng thái học tập của 20 bài');
  }
}

function setDl2LearningStatusFilter(filter) {
  dl2LearningStatusFilter = filter;
  document.querySelectorAll('.dl2-filter-pill').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-filter') === filter);
  });
  applyDl2ChapterFilters();
  if (typeof playChime === 'function') playChime('click');
}

function applyDl2ChapterFilters() {
  loadDl2LearnedLessons();
  const items = document.querySelectorAll('.chapter-accordion-item');
  let matchCount = 0;

  items.forEach(el => {
    const chId = el.getAttribute('data-chid') || el.id.replace('dl2-item-', '');
    const isLearned = !!dl2LearnedLessons[chId];

    // Status filter match
    let statusMatch = true;
    if (dl2LearningStatusFilter === 'learned') {
      statusMatch = isLearned;
    } else if (dl2LearningStatusFilter === 'unlearned') {
      statusMatch = !isLearned;
    }

    // Text search query match
    let textMatch = true;
    if (dl2CheatsheetSearchQuery) {
      const text = el.innerText.toLowerCase();
      textMatch = text.includes(dl2CheatsheetSearchQuery);
    }

    if (statusMatch && textMatch) {
      el.style.display = '';
      matchCount++;
      if (dl2CheatsheetSearchQuery) {
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

  const countEl = document.getElementById('dl2-search-count');
  if (countEl) {
    if (dl2CheatsheetSearchQuery || dl2LearningStatusFilter !== 'all') {
      let filterDesc = '';
      if (dl2LearningStatusFilter === 'learned') filterDesc = 'đã học';
      else if (dl2LearningStatusFilter === 'unlearned') filterDesc = 'chưa học';
      
      const queryDesc = dl2CheatsheetSearchQuery ? \` với từ khóa "\${dl2CheatsheetSearchQuery}"\` : '';
      countEl.innerText = \`Tìm thấy \${matchCount}/20 bài \${filterDesc}\${queryDesc}\`;
    } else {
      countEl.innerText = '';
    }
  }
}

function generateDl2LearningProgressCardHtml() {
  loadDl2LearnedLessons();
  const count = getDl2LearnedCount();
  const pct = Math.round((count / 20) * 100);

  return \`
    <div class="dl2-learning-progress-card">
      <div class="dl2-progress-header">
        <div class="dl2-progress-title-wrap">
          <div class="dl2-progress-main-title">
            <span>🎯</span>
            <span>Tiến Độ Ôn Tập 20 Bài:</span>
            <span class="dl2-progress-highlight"><strong id="dl2-learned-count">\${count}</strong>/20 bài</span>
            <span class="dl2-progress-pct" id="dl2-learned-pct">(\${pct}%)</span>
          </div>
          <div class="dl2-progress-sub-desc">
            Chủ động tích chọn vào các ô để ghi nhận bài đã học. Dữ liệu được lưu tự động trên thiết bị!
          </div>
        </div>
        <div class="dl2-progress-actions">
          <button type="button" class="btn btn-sm btn-outline-success" onclick="markAllDl2LessonsLearned(true)" title="Đánh dấu đã hoàn thành tất cả 20 bài">
            ✅ Đã học tất cả
          </button>
          <button type="button" class="btn btn-sm btn-secondary" onclick="markAllDl2LessonsLearned(false)" title="Đặt lại trạng thái chưa học">
            🔄 Đặt lại
          </button>
        </div>
      </div>

      <div class="dl2-progress-track">
        <div class="dl2-progress-fill" id="dl2-learned-bar-fill" style="width: \${pct}%;"></div>
      </div>

      <div class="dl2-progress-filter-bar">
        <div class="dl2-filter-label">Lọc bài học:</div>
        <div class="dl2-filter-pills">
          <button type="button" class="dl2-filter-pill \${dl2LearningStatusFilter === 'all' ? 'active' : ''}" data-filter="all" onclick="setDl2LearningStatusFilter('all')">
            📋 Tất cả (20)
          </button>
          <button type="button" class="dl2-filter-pill dl2-pill-unlearned \${dl2LearningStatusFilter === 'unlearned' ? 'active' : ''}" data-filter="unlearned" onclick="setDl2LearningStatusFilter('unlearned')">
            ⬜ Chưa học (<span id="dl2-count-unlearned">\${20 - count}</span>)
          </button>
          <button type="button" class="dl2-filter-pill dl2-pill-learned \${dl2LearningStatusFilter === 'learned' ? 'active' : ''}" data-filter="learned" onclick="setDl2LearningStatusFilter('learned')">
            ✅ Đã học (<span id="dl2-count-learned">\${count}</span>)
          </button>
        </div>
      </div>
    </div>
  \`;
}
`;

// Insert state functions before switchDl2CheatsheetSubtab
const insertPos = code.indexOf('function switchDl2CheatsheetSubtab');
if (insertPos === -1) {
  console.error('switchDl2CheatsheetSubtab not found');
  process.exit(1);
}
code = code.slice(0, insertPos) + stateFunctions + '\n' + code.slice(insertPos);

// In onDl2SearchInput: change the logic to call applyDl2ChapterFilters
const oldSearchFnStart = code.indexOf('function onDl2SearchInput(e) {');
const oldSearchFnEnd = code.indexOf('function jumpToDl2Topic', oldSearchFnStart);
if (oldSearchFnStart !== -1 && oldSearchFnEnd !== -1) {
  const newSearchFn = `function onDl2SearchInput(e) {
  dl2CheatsheetSearchQuery = (e.target.value || '').trim().toLowerCase();
  applyDl2ChapterFilters();
}

`;
  code = code.slice(0, oldSearchFnStart) + newSearchFn + code.slice(oldSearchFnEnd);
}

// In renderDuocLy2CheatsheetView: insert progress card before <p style="font-size: 0.86rem; color: var(--text-muted); margin-bottom: 1.25rem;">
const pInsertCard = code.indexOf('<p style="font-size: 0.86rem; color: var(--text-muted); margin-bottom: 1.25rem;">');
if (pInsertCard !== -1) {
  code = code.slice(0, pInsertCard) + '${generateDl2LearningProgressCardHtml()}\n\n      ' + code.slice(pInsertCard);
} else {
  console.error('Could not find insert position for progress card');
  process.exit(1);
}

// Ensure loadDl2LearnedLessons() is called in renderDuocLy2CheatsheetView
const pRenderView = code.indexOf('function renderDuocLy2CheatsheetView() {');
if (pRenderView !== -1) {
  code = code.slice(0, pRenderView + 40) + '\n  loadDl2LearnedLessons();' + code.slice(pRenderView + 40);
}

// Ensure loadDl2LearnedLessons() is called at top of generateAll20LessonsHtml
const pGenLessons = code.indexOf('function generateAll20LessonsHtml() {');
if (pGenLessons !== -1) {
  code = code.slice(0, pGenLessons + 37) + '\n  loadDl2LearnedLessons();' + code.slice(pGenLessons + 37);
}

// Now replace each of the 20 accordion item headers and bottom actions
for (let i = 1; i <= 20; i++) {
  const chId = 'dl2_ch' + i;
  const info = LESSON_TOPIC_MAP[i];

  // 1. Update the accordion item opening tag
  const oldItemTag = `<div class="chapter-accordion-item dl2-searchable-item" id="dl2-item-${chId}">`;
  const newItemTag = `<div class="chapter-accordion-item dl2-searchable-item \${dl2LearnedLessons['${chId}'] ? 'is-learned' : ''}" id="dl2-item-${chId}" data-chid="${chId}">`;
  if (code.includes(oldItemTag)) {
    code = code.replace(oldItemTag, newItemTag);
  } else {
    console.error(`Missing oldItemTag for ${chId}`);
  }

  // 2. Insert checkbox button right after <div class="chapter-acc-title-group">
  // We search for <div class="chapter-acc-title-group"> inside this lesson
  const pHead = code.indexOf(`id="dl2-head-${chId}"`);
  if (pHead !== -1) {
    const pTitleGroup = code.indexOf('<div class="chapter-acc-title-group">', pHead);
    if (pTitleGroup !== -1 && pTitleGroup < pHead + 300) {
      const checkBtnHtml = `
          <button type="button" class="dl2-lesson-check-btn \${dl2LearnedLessons['${chId}'] ? 'checked' : ''}" id="dl2-chk-${chId}" onclick="event.stopPropagation(); toggleDl2LessonLearned('${chId}')" title="\${dl2LearnedLessons['${chId}'] ? 'Nhấn để bỏ đánh dấu' : 'Nhấn để đánh dấu đã học xong bài này'}">
            <span class="dl2-chk-icon">\${dl2LearnedLessons['${chId}'] ? '✅' : '⬜'}</span>
            <span class="dl2-chk-text">\${dl2LearnedLessons['${chId}'] ? 'Đã học' : 'Chưa học'}</span>
          </button>`;
      code = code.slice(0, pTitleGroup + 37) + checkBtnHtml + code.slice(pTitleGroup + 37);
    } else {
      console.error(`Missing chapter-acc-title-group for ${chId}`);
    }
  }

  // 3. Update the bottom action container
  // Find jump button in this lesson body
  const pBody = code.indexOf(`id="dl2-body-${chId}"`);
  if (pBody !== -1) {
    const pNextItem = i < 20 ? code.indexOf(`id="dl2-item-dl2_ch${i + 1}"`, pBody) : code.indexOf('function generateQuickDrugTableHtml()', pBody);
    const bodySlice = code.slice(pBody, pNextItem);
    const pJump = bodySlice.indexOf('jumpToDl2Topic(');
    if (pJump !== -1) {
      const globalJump = pBody + pJump;
      const startDiv = code.lastIndexOf('<div', globalJump);
      const endDiv = code.indexOf('</div>', globalJump) + 6;

      const newBottomHtml = `<div style="margin-top: 1rem; padding-top: 0.75rem; border-top: 1px dashed var(--border); display: flex; flex-wrap: wrap; gap: 0.6rem; align-items: center;">
          <button type="button" class="btn \${dl2LearnedLessons['${chId}'] ? 'btn-success' : 'btn-outline-success'} dl2-mark-learned-btn" id="dl2-bottom-chk-${chId}" style="font-size: 0.82rem; padding: 0.4rem 0.85rem;" onclick="toggleDl2LessonLearned('${chId}')">
            \${dl2LearnedLessons['${chId}'] ? '✓ Đã học xong bài này (Nhấn để hủy)' : '✅ Đánh dấu đã học xong bài này'}
          </button>
          <button type="button" class="btn btn-secondary" style="font-size: 0.82rem; padding: 0.4rem 0.85rem;" onclick="jumpToDl2Topic('${info.topic}')">
            🎯 Luyện đề trắc nghiệm Bài ${i}: ${info.title}
          </button>
        </div>`;

      code = code.slice(0, startDiv) + newBottomHtml + code.slice(endDiv);
    } else {
      console.error(`jumpToDl2Topic not found in body for ${chId}`);
    }
  }
}

fs.writeFileSync(cheatsheetPath, code, 'utf8');
console.log('Successfully added learned checkboxes and progress tracking to cheatsheet_duocly2.js! New length:', code.length);
