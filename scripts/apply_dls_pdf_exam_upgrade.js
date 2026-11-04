const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const appJsPath = path.join(rootDir, 'app.js');
const indexHtmlPath = path.join(rootDir, 'index.html');

let appContent = fs.readFileSync(appJsPath, 'utf8');
let htmlContent = fs.readFileSync(indexHtmlPath, 'utf8');

// 1. Define generateDlsPdfExam code
const dlsPdfExamFunc = `
// ============================================================================
// ĐỀ THI 80 CÂU CHUẨN ĐỀ THI THỰC CHIẾN DLS.PDF & GIÁO TRÌNH BỘ Y TẾ (80 PHÚT)
// ============================================================================
function generateDlsPdfExam(force = false) {
  if (typeof ALL_EXAM_BANK === 'undefined' || !ALL_EXAM_BANK.length) {
    console.error('ALL_EXAM_BANK not loaded!');
    return;
  }

  if (!force && !isExamSubmitted && Object.keys(userAnswers).length > 0) {
    if (!confirm('Bạn đang làm bài thi dở dang. Bạn có chắc chắn muốn bỏ bài thi hiện tại và tạo Đề thi 80 câu chuẩn thực chiến Dls.pdf & Sách Giáo trình Bộ Y tế không?')) {
      return;
    }
  }

  closeUniversityExamModal();
  clearExamDraft();

  let chosenQuestions = [];
  const chosenStems = new Set();
  const covStats = getBankCoverageStats();
  const seenIds = covStats.seenIds || new Set();

  // Bốc câu hỏi chuẩn theo ma trận 14 chuyên đề 44h:
  // Ưu tiên số 1: Các câu hỏi từ Đề thi thực chiến Dls.pdf (q.source === 'DLS_PDF')
  // Ưu tiên số 2: Các câu hỏi Chuẩn Giáo trình Dược Lâm Sàng Bộ Y tế (q.source === 'BYT')
  EXAM_MATRIX_44H.forEach(rule => {
    const chQuestions = ALL_EXAM_BANK.filter(q => q.chapter === rule.chapter);
    const dlsCandidates = chQuestions.filter(q => q.source === 'DLS_PDF');
    const bytCandidates = chQuestions.filter(q => !q.source || q.source === 'BYT');
    const otherCandidates = chQuestions.filter(q => q.source && q.source !== 'DLS_PDF' && q.source !== 'BYT');

    let pool = [];
    if (prioritizeUnseenQuestions) {
      const unseenDls = shuffle(dlsCandidates.filter(q => !seenIds.has(q.id)));
      const seenDls = shuffle(dlsCandidates.filter(q => seenIds.has(q.id)));
      const unseenByt = shuffle(bytCandidates.filter(q => !seenIds.has(q.id)));
      const seenByt = shuffle(bytCandidates.filter(q => seenIds.has(q.id)));
      const otherPool = shuffle(otherCandidates);
      pool = [...unseenDls, ...unseenByt, ...seenDls, ...seenByt, ...otherPool];
    } else {
      pool = [...shuffle(dlsCandidates), ...shuffle(bytCandidates), ...shuffle(otherCandidates)];
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

  // Nếu chưa đủ 80 câu, bù từ kho DLS_PDF và BYT còn lại
  if (chosenQuestions.length < 80) {
    const backupPool = shuffle(ALL_EXAM_BANK.filter(q => 
      !chosenStems.has(q.question) && (q.source === 'DLS_PDF' || q.source === 'BYT')
    ));
    for (const q of backupPool) {
      chosenQuestions.push(q);
      chosenStems.add(q.question);
      if (chosenQuestions.length >= 80) break;
    }
  }

  // Shuffle thứ tự câu hỏi và shuffle vị trí các đáp án (A, B, C, D)
  EXAM_QUESTIONS = shuffle(chosenQuestions).slice(0, 80).map((q, idx) => {
    const originalCorrectText = q.options[q.correct];
    const shuffledOptions = shuffle(q.options);
    const newCorrectIdx = shuffledOptions.indexOf(originalCorrectText);

    return {
      id: q.id,
      examNum: idx + 1,
      chapter: q.chapter,
      level: q.level || 'Vận dụng',
      source: q.source || "DLS_PDF",
      sourceName: q.sourceName || (q.source === 'DLS_PDF' ? "Đề thi Dược Lâm Sàng (Recall Dls.pdf)" : "Bộ Y tế (Giáo trình Dược Lâm Sàng)"),
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
  timeRemaining = 80 * 60; // 80 phút

  if (examTimer) {
    clearInterval(examTimer);
    examTimer = null;
  }

  showView('exam');
  renderExamQuestion(0);
  updatePalette();
  saveExamDraft();
  playChime('click');
  showToast('📝 Đã tạo Đề chuẩn Dls.pdf & Giáo trình Bộ Y tế (80 câu • 80 phút)!');
}
`;

// Insert generateDlsPdfExam before generateUnseenExam
if (!appContent.includes('function generateDlsPdfExam')) {
  appContent = appContent.replace(
    '// ============================================================================ \n// ĐỀ THI 80 CÂU 100% LÀ CÂU CHƯA TỪNG LÀM',
    dlsPdfExamFunc + '\n// ============================================================================\n// ĐỀ THI 80 CÂU 100% LÀ CÂU CHƯA TỪNG LÀM'
  );
  if (!appContent.includes('function generateDlsPdfExam')) {
    appContent = appContent.replace(
      '// ĐỀ THI 80 CÂU 100% LÀ CÂU CHƯA TỪNG LÀM',
      dlsPdfExamFunc + '\n// ĐỀ THI 80 CÂU 100% LÀ CÂU CHƯA TỪNG LÀM'
    );
  }
}

// Update generateRandomExam in app.js to prioritize Dls.pdf and BYT questions
const oldTargetUniRegex = /\/\/\s*Mục tiêu ~45% câu từ các trường ĐH Y Dược[\s\S]*?const targetByt = rule\.count - targetUni;/;
const newTargetUniCode = `// Ưu tiên hàng đầu các câu hỏi Chuẩn Dls.pdf và Sách Giáo trình Bộ Y tế
    const dlsAndByt = chQuestions.filter(q => q.source === 'DLS_PDF' || !q.source || q.source === 'BYT');
    const targetUni = Math.min(uniCandidates.length, Math.max(0, Math.round(rule.count * 0.25)));
    const targetByt = rule.count - targetUni;`;

if (appContent.match(oldTargetUniRegex)) {
  appContent = appContent.replace(oldTargetUniRegex, newTargetUniCode);
  console.log('Updated targetUni balance in generateRandomExam');
}

// Expose generateDlsPdfExam to window
if (!appContent.includes('window.generateDlsPdfExam')) {
  appContent += '\nwindow.generateDlsPdfExam = generateDlsPdfExam;\n';
}

fs.writeFileSync(appJsPath, appContent, 'utf8');
console.log('Successfully updated app.js!');

// 2. Update index.html
// Update matrix banner text
const oldBannerRegex = /<div><strong>Ma trận 44h chuẩn hóa:<\/strong> Đề 80 câu tự động mix thông minh ~45% câu từ ĐH Dược Hà Nội, ĐH\s*Y Dược TP\.HCM, ĐH Y Hà Nội &amp; ~55% Chuẩn BYT theo đúng 14 bài giảng\.<\/div>/;
const newBannerText = `<div><strong>Ma trận 44h chuẩn hóa:</strong> Đề 80 câu bám sát 100% cấu trúc đề thi thực chiến Dls.pdf &amp; Sách Giáo trình Dược Lâm Sàng Bộ Y tế (14 bài giảng chính khóa).</div>`;

if (htmlContent.match(oldBannerRegex)) {
  htmlContent = htmlContent.replace(oldBannerRegex, newBannerText);
  console.log('Updated matrix banner text in index.html');
}

// Add the dedicated button to action bar
const unseenBtnTag = `<button class="btn btn-secondary btn-unseen-exam"`;
const newDlsBtnTag = `<button class="btn btn-secondary btn-dls-pdf-exam"
              style="padding: 0.4rem 0.85rem; font-size: 0.82rem; background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); color: #1d4ed8; border-color: #3b82f6; font-weight: 700; box-shadow: 0 1px 3px rgba(37,99,235,0.15);"
              onclick="generateDlsPdfExam()"
              title="Tạo đề thi 80 câu bám sát 100% đề thi thực chiến Dls.pdf và Sách Giáo trình Bộ Y tế (80 phút)">
              📝 Đề Chuẩn Dls.pdf & Sách (80 Câu)
            </button>
            <button class="btn btn-secondary btn-unseen-exam"`;

if (!htmlContent.includes('btn-dls-pdf-exam')) {
  htmlContent = htmlContent.replace(unseenBtnTag, newDlsBtnTag);
  console.log('Added btn-dls-pdf-exam to exam controls bar');
}

// Add Dls.pdf card to modal-university-exam
const targetUniModalHeader = `<div class="modal-title" style="color: var(--secondary);">🏛️ CHỌN ĐỀ THI DƯỢC LÂM SÀNG CÁC TRƯỜNG</div>`;
const newModalCardTop = `<div class="modal-title" style="color: var(--secondary);">🏛️ CHỌN ĐỀ THI DƯỢC LÂM SÀNG CÁC TRƯỜNG</div>
      </div>
      <div style="padding: 0.5rem 0; font-size: 0.92rem; line-height: 1.6; color: var(--text-main);">
        <p style="margin-bottom: 0.85rem; color: var(--text-muted);">
          Hệ thống đã tích hợp <strong>1.490 câu hỏi</strong> chuẩn hóa gồm kho đề Bộ Y tế, đề thi thực tế (Dls.pdf) và
          đề thi chính thức từ các trường Đại học Y Dược danh tiếng hàng đầu Việt Nam:
        </p>

        <div class="uni-exam-card" onclick="generateDlsPdfExam()"
          style="border-left: 4px solid #1d4ed8; margin-bottom: 0.75rem; padding: 0.85rem 1rem; background: linear-gradient(135deg, #eff6ff 0%, #f8fafc 100%); border-radius: var(--radius-md); cursor: pointer; border: 1px solid #bfdbfe; border-left-width: 4px; box-shadow: 0 2px 4px rgba(37,99,235,0.1);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
            <strong style="color: #1d4ed8; font-size: 1.05rem;">📝 Đề Chuẩn Dls.pdf &amp; Sách Giáo Trình BYT (Khuyên dùng)</strong>
            <span class="badge" style="background: #dbeafe; color: #1e40af; font-weight: 700;">80 câu • 80 phút</span>
          </div>
          <div style="font-size: 0.84rem; color: var(--text-muted); line-height: 1.5;">
            Trọn vẹn 100% câu hỏi bám sát định dạng <strong>đề thi thực chiến Dls.pdf</strong> và kiến thức cốt lõi trong <strong>Sách Giáo trình Dược Lâm Sàng Bộ Y tế</strong> (14 bài giảng chính khóa).
          </div>
        </div>`;

if (!htmlContent.includes('📝 Đề Chuẩn Dls.pdf &amp; Sách Giáo Trình BYT')) {
  htmlContent = htmlContent.replace(
    `<div class="modal-title" style="color: var(--secondary);">🏛️ CHỌN ĐỀ THI DƯỢC LÂM SÀNG CÁC TRƯỜNG</div>\n      </div>\n      <div style="padding: 0.5rem 0; font-size: 0.92rem; line-height: 1.6; color: var(--text-main);">\n        <p style="margin-bottom: 0.85rem; color: var(--text-muted);">${htmlContent.match(/<p style="margin-bottom: 0.85rem; color: var\(--text-muted\);">[\s\S]*?<\/p>/)[0].replace('<p style="margin-bottom: 0.85rem; color: var(--text-muted);">', '').replace('</p>', '')}</p>`,
    newModalCardTop
  );
  console.log('Added top card in modal-university-exam');
}

// Bump cache version from v=41 to v=42
htmlContent = htmlContent.replace(/styles\.css\?v=\d+/g, 'styles.css?v=42');
htmlContent = htmlContent.replace(/questions_800\.js\?v=\d+/g, 'questions_800.js?v=42');
htmlContent = htmlContent.replace(/flashcards\.js\?v=\d+/g, 'flashcards.js?v=42');
htmlContent = htmlContent.replace(/app\.js\?v=\d+/g, 'app.js?v=42');

fs.writeFileSync(indexHtmlPath, htmlContent, 'utf8');
console.log('Successfully updated index.html with v=42!');

