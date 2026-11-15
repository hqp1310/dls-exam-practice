const fs = require('fs');
const path = require('path');

const cheatsheetPath = path.join(__dirname, '..', 'cheatsheet_duocly2.js');
let code = fs.readFileSync(cheatsheetPath, 'utf8');

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

// Check for each lesson from 20 down to 1
for (let i = 20; i >= 1; i--) {
  const chId = 'dl2_ch' + i;
  const info = LESSON_TOPIC_MAP[i];

  const pItem = code.indexOf(`id="dl2-item-${chId}"`);
  const pHead = code.indexOf(`id="dl2-head-${chId}"`);
  const pBody = code.indexOf(`id="dl2-body-${chId}"`);
  let pEnd = -1;
  if (i < 20) {
    pEnd = code.indexOf(`id="dl2-item-dl2_ch${i + 1}"`, pBody);
  } else {
    pEnd = code.indexOf('function generateQuickDrugTableHtml()', pBody);
  }

  if (pItem === -1 || pHead === -1 || pBody === -1 || pEnd === -1) {
    console.error(`Marker missing for ch${i}`);
    continue;
  }

  // 1. Footer actions
  const bodySlice = code.slice(pBody, pEnd);
  const footerHtml = `
        <!-- BOTTOM ACTIONS: ĐÁNH DẤU ĐÃ HỌC & LUYỆN ĐỀ -->
        <div class="dl2-lesson-footer-actions">
          <button type="button" class="btn \${dl2LearnedLessons['${chId}'] ? 'btn-success' : 'btn-outline-success'} dl2-mark-learned-btn" id="dl2-bottom-chk-${chId}" onclick="toggleDl2LessonLearned('${chId}')">
            \${dl2LearnedLessons['${chId}'] ? '✓ Đã hoàn thành bài học này (Nhấn để hủy)' : '✅ Đánh dấu đã học xong bài này'}
          </button>
          <button type="button" class="btn btn-secondary" style="font-size: 0.82rem; padding: 0.4rem 0.85rem;" onclick="jumpToDl2Topic('${info.topic}')">
            🎯 Luyện đề trắc nghiệm Bài ${i}: ${info.title}
          </button>
        </div>\n      `;

  const existingJump = bodySlice.indexOf('jumpToDl2Topic(');
  if (existingJump !== -1) {
    const globalJump = pBody + existingJump;
    const startDiv = code.lastIndexOf('<div', globalJump);
    const endDiv = code.indexOf('</div>', globalJump) + 6;
    code = code.slice(0, startDiv) + footerHtml.trim() + code.slice(endDiv);
  } else {
    // Insert before closing of body (second last </div> in bodySlice)
    const lastDiv = bodySlice.lastIndexOf('</div>');
    const secondLast = bodySlice.lastIndexOf('</div>', lastDiv - 1);
    const insertAt = pBody + secondLast;
    code = code.slice(0, insertAt) + footerHtml + code.slice(insertAt);
  }

  // 2. Header checkbox
  const titleGroupMarker = '<div class="chapter-acc-title-group">';
  const pTitleGroup = code.indexOf(titleGroupMarker, code.indexOf(`id="dl2-head-${chId}"`));
  const checkBtnHtml = `
          <button type="button" class="dl2-lesson-check-btn \${dl2LearnedLessons['${chId}'] ? 'checked' : ''}" id="dl2-chk-${chId}" onclick="event.stopPropagation(); toggleDl2LessonLearned('${chId}')" title="\${dl2LearnedLessons['${chId}'] ? 'Nhấn để bỏ đánh dấu' : 'Nhấn để đánh dấu đã học xong bài này'}">
            <span class="dl2-chk-icon">\${dl2LearnedLessons['${chId}'] ? '✅' : '⬜'}</span>
            <span class="dl2-chk-text">\${dl2LearnedLessons['${chId}'] ? 'Đã học' : 'Chưa học'}</span>
          </button>`;
  code = code.slice(0, pTitleGroup + titleGroupMarker.length) + checkBtnHtml + code.slice(pTitleGroup + titleGroupMarker.length);

  // 3. Item container class
  const oldItemStr = `<div class="chapter-accordion-item dl2-searchable-item" id="dl2-item-${chId}">`;
  const newItemStr = `<div class="chapter-accordion-item dl2-searchable-item \${dl2LearnedLessons['${chId}'] ? 'is-learned' : ''}" id="dl2-item-${chId}" data-chid="${chId}">`;
  code = code.replace(oldItemStr, newItemStr);

  console.log(`ch${i} processed successfully.`);
}

console.log('Finished 20 lessons processing test.');
