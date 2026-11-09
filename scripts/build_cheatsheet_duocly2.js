// scripts/build_cheatsheet_duocly2.js
// Generates cheatsheet_duocly2.js containing the full interactive study center for Dược Lý 2

const fs = require('fs');
const path = require('path');

const outputPath = path.join(__dirname, '..', 'cheatsheet_duocly2.js');

console.log('Generating cheatsheet_duocly2.js...');

// We will construct the complete client-side code for Dược Lý 2 Study Hub
const fileContent = `/**
 * CHEATSHEET & STUDY HUB - DƯỢC LÝ 2 (BỘ Y TẾ - PGS.TS. MAI TẤT TỐ)
 * 20 Bài Giảng Chính Khóa (32 Tiết) • Đề Thi 60 Phút / 60 Câu Trắc Nghiệm
 */

let dl2CheatsheetSubtab = 'dl2_chapters';
let dl2CheatsheetSearchQuery = '';
let dl2OpenAccordions = { dl2_ch1: true }; // Open Lesson 1 by default

function switchDl2CheatsheetSubtab(subtab) {
  dl2CheatsheetSubtab = subtab;
  try {
    localStorage.setItem('dl2_active_cheatsheet_subtab', subtab);
  } catch (e) {}

  const container = document.getElementById('view-cheatsheet');
  if (!container || !document.getElementById('dl2-sec-chapters')) {
    renderDuocLy2CheatsheetView();
    return;
  }

  // Update active pill state
  document.querySelectorAll('.dl2-subnav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-subtab') === subtab);
  });

  const showAll = (subtab === 'dl2_all');
  const secChapters = document.getElementById('dl2-sec-chapters');
  const secDrugs = document.getElementById('dl2-sec-drugs');
  const secAntidotes = document.getElementById('dl2-sec-antidotes');
  const secTraps = document.getElementById('dl2-sec-traps');

  if (secChapters) secChapters.style.display = (showAll || subtab === 'dl2_chapters') ? 'block' : 'none';
  if (secDrugs) secDrugs.style.display = (showAll || subtab === 'dl2_drugs') ? 'block' : 'none';
  if (secAntidotes) secAntidotes.style.display = (showAll || subtab === 'dl2_antidotes') ? 'block' : 'none';
  if (secTraps) secTraps.style.display = (showAll || subtab === 'dl2_traps') ? 'block' : 'none';

  if (dl2CheatsheetSearchQuery) {
    onDl2SearchInput({ target: { value: dl2CheatsheetSearchQuery } });
  }

  if (typeof playChime === 'function') playChime('click');
}

function toggleDl2Accordion(id) {
  dl2OpenAccordions[id] = !dl2OpenAccordions[id];
  const header = document.getElementById('dl2-head-' + id);
  const body = document.getElementById('dl2-body-' + id);
  if (header && body) {
    if (dl2OpenAccordions[id]) {
      header.classList.add('active');
      body.style.display = 'block';
    } else {
      header.classList.remove('active');
      body.style.display = 'none';
    }
  }
  if (typeof playChime === 'function') playChime('click');
}

function setAllDl2Accordions(open) {
  for (let i = 1; i <= 20; i++) {
    const id = 'dl2_ch' + i;
    dl2OpenAccordions[id] = open;
    const header = document.getElementById('dl2-head-' + id);
    const body = document.getElementById('dl2-body-' + id);
    if (header && body) {
      if (open) {
        header.classList.add('active');
        body.style.display = 'block';
      } else {
        header.classList.remove('active');
        body.style.display = 'none';
      }
    }
  }
  if (typeof playChime === 'function') playChime('click');
}

function onDl2SearchInput(e) {
  dl2CheatsheetSearchQuery = (e.target.value || '').trim().toLowerCase();
  const items = document.querySelectorAll('.dl2-searchable-item');
  let matchCount = 0;

  items.forEach(el => {
    const text = el.innerText.toLowerCase();
    if (!dl2CheatsheetSearchQuery || text.includes(dl2CheatsheetSearchQuery)) {
      el.style.display = '';
      matchCount++;
      // Auto expand accordion if searching
      if (dl2CheatsheetSearchQuery && el.classList.contains('chapter-accordion-item')) {
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
    countEl.innerText = dl2CheatsheetSearchQuery
      ? \`Tìm thấy \${matchCount} nội dung phù hợp với "\${dl2CheatsheetSearchQuery}"\`
      : '';
  }
}

function jumpToDl2Topic(chapterName) {
  if (typeof filterTopic === 'function' && typeof showView === 'function') {
    filterTopic(chapterName);
    showView('topic');
    if (typeof showToast === 'function') {
      showToast('📖 Đã chuyển sang làm trắc nghiệm chuyên đề: ' + chapterName);
    }
  }
}

function renderDuocLy2CheatsheetView() {
  const container = document.getElementById('view-cheatsheet');
  if (!container) return;

  try {
    const saved = localStorage.getItem('dl2_active_cheatsheet_subtab');
    if (saved) dl2CheatsheetSubtab = saved;
  } catch (e) {}

  const isAll = (dl2CheatsheetSubtab === 'dl2_all');
  const isChapters = isAll || (dl2CheatsheetSubtab === 'dl2_chapters');
  const isDrugs = isAll || (dl2CheatsheetSubtab === 'dl2_drugs');
  const isAntidotes = isAll || (dl2CheatsheetSubtab === 'dl2_antidotes');
  const isTraps = isAll || (dl2CheatsheetSubtab === 'dl2_traps');

  container.innerHTML = \`
    <!-- BANNER CHÍNH DƯỢC LÝ 2 -->
    <div class="cs-header-banner" style="background: linear-gradient(135deg, rgba(5,150,105,0.12) 0%, rgba(79,70,229,0.08) 100%); border-left: 5px solid var(--primary);">
      <div class="cs-header-title" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
        <span style="display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-size: 1.5rem;">📖</span>
          <span>Sổ Tay Trọng Tâm Dược Lý 2 • 20 Bài Giảng (32 Tiết)</span>
        </span>
        <span class="cs-pill cs-pill-success" style="font-size: 0.8rem; padding: 0.35rem 0.75rem;">
          🎯 Chuẩn Khung Đề Thi 60 Phút / 60 Câu Bộ Y Tế
        </span>
      </div>
      <div class="cs-header-desc" style="margin-top: 0.65rem;">
        Hệ thống ôn thi toàn diện theo <strong>Giáo trình Dược lý học Tập 2 Bộ Y tế (Chủ biên: PGS.TS. Mai Tất Tố)</strong>. 
        Bao gồm đầy đủ <strong>20 bài giảng chính khóa</strong> với: <em>Cơ chế tác dụng phân tử, phân loại hoạt chất, chỉ định, tác dụng phụ kinh điển, tương tác nguy hiểm, bẫy thi trắc nghiệm</em> và <em>bảng thuốc giải độc đặc hiệu</em>.
      </div>
    </div>

    <!-- THANH TÌM KIẾM TRỰC TIẾP -->
    <div class="cs-search-container" style="margin: 1.25rem 0 1rem 0;">
      <span class="cs-search-icon">🔍</span>
      <input type="text" class="cs-search-input" id="dl2-search-input"
             placeholder="Tìm nhanh: Digoxin, ACEI, Furosemid, Metronidazol, Amiodaron, Statin, Insulin, Warfarin, Ngộ độc, Bẫy thi..."
             value="\${dl2CheatsheetSearchQuery}" oninput="onDl2SearchInput(event)">
      <div id="dl2-search-count" style="font-size: 0.82rem; color: var(--primary); margin-top: 0.4rem; padding-left: 0.5rem; font-weight: 600;"></div>
    </div>

    <!-- THANH SUBNAV CHUYỂN CHẾ ĐỘ XEM -->
    <div class="cs-subnav">
      <button class="cs-subnav-btn dl2-subnav-btn \${dl2CheatsheetSubtab === 'dl2_chapters' ? 'active' : ''}" 
              data-subtab="dl2_chapters" onclick="switchDl2CheatsheetSubtab('dl2_chapters')">
        <span>📚</span> 20 Bài Giảng Chi Tiết (32 Tiết)
      </button>
      <button class="cs-subnav-btn dl2-subnav-btn \${dl2CheatsheetSubtab === 'dl2_drugs' ? 'active' : ''}" 
              data-subtab="dl2_drugs" onclick="switchDl2CheatsheetSubtab('dl2_drugs')">
        <span>💊</span> Bảng Tra Thuốc &amp; Cơ Chế
      </button>
      <button class="cs-subnav-btn dl2-subnav-btn \${dl2CheatsheetSubtab === 'dl2_antidotes' ? 'active' : ''}" 
              data-subtab="dl2_antidotes" onclick="switchDl2CheatsheetSubtab('dl2_antidotes')">
        <span>⚡</span> Thuốc Giải Độc Cấp Cứu (Antidotes)
      </button>
      <button class="cs-subnav-btn dl2-subnav-btn \${dl2CheatsheetSubtab === 'dl2_traps' ? 'active' : ''}" 
              data-subtab="dl2_traps" onclick="switchDl2CheatsheetSubtab('dl2_traps')">
        <span>⚠️</span> Bẫy Thi &amp; Lưu Ý Đặc Biệt
      </button>
      <button class="cs-subnav-btn dl2-subnav-btn \${dl2CheatsheetSubtab === 'dl2_all' ? 'active' : ''}" 
              data-subtab="dl2_all" onclick="switchDl2CheatsheetSubtab('dl2_all')">
        <span>📑</span> Xem Toàn Bộ
      </button>
    </div>

    <!-- ========================================================================= -->
    <!-- PHẦN 1: 20 BÀI GIẢNG CHI TIẾT (ACCORDIONS)                               -->
    <!-- ========================================================================= -->
    <section id="dl2-sec-chapters" style="display: \${isChapters ? 'block' : 'none'}; margin-top: 1.25rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; flex-wrap: wrap; gap: 0.5rem;">
        <h2 style="font-size: 1.15rem; font-weight: 700; color: var(--text-main); display: flex; align-items: center; gap: 0.5rem;">
          <span>📚</span> Nội Dung Trọng Tâm 20 Bài Giảng (32 Tiết)
        </h2>
        <div style="display: flex; gap: 0.4rem;">
          <button class="btn btn-secondary" style="padding: 0.28rem 0.65rem; font-size: 0.78rem;" onclick="setAllDl2Accordions(true)">
            ➕ Mở Tất Cả (20 Bài)
          </button>
          <button class="btn btn-secondary" style="padding: 0.28rem 0.65rem; font-size: 0.78rem;" onclick="setAllDl2Accordions(false)">
            ➖ Thu Gọn
          </button>
        </div>
      </div>
      <p style="font-size: 0.86rem; color: var(--text-muted); margin-bottom: 1.25rem;">
        Nhấn vào từng bài để mở nội dung chi tiết. Có nút <strong>🎯 Luyện đề trắc nghiệm bài này</strong> để chuyển nhanh sang phần thực hành câu hỏi bám sát!
      </p>

      \${generateAll20LessonsHtml()}
    </section>

    <!-- ========================================================================= -->
    <!-- PHẦN 2: BẢNG TRA THUỐC & CƠ CHẾ                                          -->
    <!-- ========================================================================= -->
    <section id="dl2-sec-drugs" style="display: \${isDrugs ? 'block' : 'none'}; margin-top: 1.5rem;">
      <div class="math-card">
        <div class="math-card-title">
          <span>💊</span> Bảng Tra Cứu Hoạt Chất Kinh Điển &amp; Cơ Chế Tác Dụng Dược Lý 2
        </div>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1rem;">
          Tổng hợp nhanh các hoạt chất xuất hiện nhiều nhất trong đề thi 60 câu, phân nhóm và đích tác dụng sinh học.
        </p>
        \${generateQuickDrugTableHtml()}
      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- PHẦN 3: BẢNG THUỐC GIẢI ĐỘC CẤP CỨU (ANTIDOTES)                          -->
    <!-- ========================================================================= -->
    <section id="dl2-sec-antidotes" style="display: \${isAntidotes ? 'block' : 'none'}; margin-top: 1.5rem;">
      <div class="math-card" style="border-left: 4px solid #ef4444;">
        <div class="math-card-title" style="color: #ef4444;">
          <span>⚡</span> Bảng Vàng Thuốc Giải Độc Đặc Hiệu (Antidotes) - Bài 20 &amp; Cấp Cứu
        </div>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1rem;">
          Đề thi Dược lý 2 luôn có từ 3 - 5 câu hỏi về thuốc giải độc đặc hiệu và cơ chế hóa giải độc chất. Học thuộc lòng bảng sau:
        </p>
        \${generateAntidotesTableHtml()}
      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- PHẦN 4: BẪY THI & LƯU Ý ĐẶC BIỆT                                          -->
    <!-- ========================================================================= -->
    <section id="dl2-sec-traps" style="display: \${isTraps ? 'block' : 'none'}; margin-top: 1.5rem;">
      <div class="math-card" style="border-left: 4px solid #f59e0b;">
        <div class="math-card-title" style="color: #b45309;">
          <span>⚠️</span> Các Bẫy Thi Trắc Nghiệm Kinh Điển Cần Nhớ Tuyệt Đối
        </div>
        \${generateExamTrapsSummaryHtml()}
      </div>
    </section>
  \`;

  // Apply search query if active
  if (dl2CheatsheetSearchQuery) {
    onDl2SearchInput({ target: { value: dl2CheatsheetSearchQuery } });
  }
}
`;

fs.writeFileSync(path.join(__dirname, 'cheatsheet_template.js'), fileContent);
console.log('Template written.');
