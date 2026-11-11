/**
 * CHEATSHEET & STUDY HUB - DƯỢC LÝ 2 (BỘ Y TẾ - PGS.TS. MAI TẤT TỐ)
 * 20 Bài Giảng Chính Khóa (32 Tiết) • Đề Thi 60 Phút / 60 Câu Trắc Nghiệm
 */

let dl2CheatsheetSubtab = 'dl2_chapters';
let dl2CheatsheetSearchQuery = '';
let dl2OpenAccordions = { dl2_ch1: true };

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
      ? ('Tìm thấy ' + matchCount + ' nội dung phù hợp với "' + dl2CheatsheetSearchQuery + '"')
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

  container.innerHTML = `
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
             value="${dl2CheatsheetSearchQuery}" oninput="onDl2SearchInput(event)">
      <div id="dl2-search-count" style="font-size: 0.82rem; color: var(--primary); margin-top: 0.4rem; padding-left: 0.5rem; font-weight: 600;"></div>
    </div>

    <!-- THANH SUBNAV CHUYỂN CHẾ ĐỘ XEM -->
    <div class="cs-subnav">
      <button class="cs-subnav-btn dl2-subnav-btn ${dl2CheatsheetSubtab === 'dl2_chapters' ? 'active' : ''}" 
              data-subtab="dl2_chapters" onclick="switchDl2CheatsheetSubtab('dl2_chapters')">
        <span>📚</span> 20 Bài Giảng Chi Tiết (32 Tiết)
      </button>
      <button class="cs-subnav-btn dl2-subnav-btn ${dl2CheatsheetSubtab === 'dl2_drugs' ? 'active' : ''}" 
              data-subtab="dl2_drugs" onclick="switchDl2CheatsheetSubtab('dl2_drugs')">
        <span>💊</span> Bảng Tra Thuốc &amp; Cơ Chế
      </button>
      <button class="cs-subnav-btn dl2-subnav-btn ${dl2CheatsheetSubtab === 'dl2_antidotes' ? 'active' : ''}" 
              data-subtab="dl2_antidotes" onclick="switchDl2CheatsheetSubtab('dl2_antidotes')">
        <span>⚡</span> Thuốc Giải Độc Cấp Cứu (Antidotes)
      </button>
      <button class="cs-subnav-btn dl2-subnav-btn ${dl2CheatsheetSubtab === 'dl2_traps' ? 'active' : ''}" 
              data-subtab="dl2_traps" onclick="switchDl2CheatsheetSubtab('dl2_traps')">
        <span>⚠️</span> Bẫy Thi &amp; Lưu Ý Đặc Biệt
      </button>
      <button class="cs-subnav-btn dl2-subnav-btn ${dl2CheatsheetSubtab === 'dl2_all' ? 'active' : ''}" 
              data-subtab="dl2_all" onclick="switchDl2CheatsheetSubtab('dl2_all')">
        <span>📑</span> Xem Toàn Bộ
      </button>
    </div>

    <!-- ========================================================================= -->
    <!-- PHẦN 1: 20 BÀI GIẢNG CHI TIẾT (ACCORDIONS)                               -->
    <!-- ========================================================================= -->
    <section id="dl2-sec-chapters" style="display: ${isChapters ? 'block' : 'none'}; margin-top: 1.25rem;">
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

      ${generateAll20LessonsHtml()}
    </section>

    <!-- ========================================================================= -->
    <!-- PHẦN 2: BẢNG TRA THUỐC & CƠ CHẾ                                          -->
    <!-- ========================================================================= -->
    <section id="dl2-sec-drugs" style="display: ${isDrugs ? 'block' : 'none'}; margin-top: 1.5rem;">
      <div class="math-card">
        <div class="math-card-title">
          <span>💊</span> Bảng Tra Cứu Hoạt Chất Kinh Điển &amp; Cơ Chế Tác Dụng Dược Lý 2
        </div>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1rem;">
          Tổng hợp nhanh các hoạt chất xuất hiện nhiều nhất trong đề thi 60 câu, phân nhóm và đích tác dụng sinh học.
        </p>
        ${generateQuickDrugTableHtml()}
      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- PHẦN 3: BẢNG THUỐC GIẢI ĐỘC CẤP CỨU (ANTIDOTES)                          -->
    <!-- ========================================================================= -->
    <section id="dl2-sec-antidotes" style="display: ${isAntidotes ? 'block' : 'none'}; margin-top: 1.5rem;">
      <div class="math-card" style="border-left: 4px solid #ef4444;">
        <div class="math-card-title" style="color: #ef4444;">
          <span>⚡</span> Bảng Vàng Thuốc Giải Độc Đặc Hiệu (Antidotes) - Bài 20 &amp; Cấp Cứu
        </div>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1rem;">
          Đề thi Dược lý 2 luôn có từ 3 &minus; 5 câu hỏi về thuốc giải độc đặc hiệu và cơ chế hóa giải độc chất. Học thuộc lòng bảng sau:
        </p>
        ${generateAntidotesTableHtml()}
      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- PHẦN 4: BẪY THI & LƯU Ý ĐẶC BIỆT                                          -->
    <!-- ========================================================================= -->
    <section id="dl2-sec-traps" style="display: ${isTraps ? 'block' : 'none'}; margin-top: 1.5rem;">
      <div class="math-card" style="border-left: 4px solid #f59e0b;">
        <div class="math-card-title" style="color: #b45309;">
          <span>⚠️</span> Các Bẫy Thi Trắc Nghiệm Kinh Điển Cần Nhớ Tuyệt Đối
        </div>
        ${generateExamTrapsSummaryHtml()}
      </div>
    </section>
  `;

  if (dl2CheatsheetSearchQuery) {
    onDl2SearchInput({ target: { value: dl2CheatsheetSearchQuery } });
  }
}

function generateAll20LessonsHtml() {
  return `
    <!-- BÀI 1: THUỐC TRỢ TIM -->
    <div class="chapter-accordion-item dl2-searchable-item" id="dl2-item-dl2_ch1">
      <div class="chapter-accordion-header ${dl2OpenAccordions['dl2_ch1'] ? 'active' : ''}" id="dl2-head-dl2_ch1" onclick="toggleDl2Accordion('dl2_ch1')">
        <div class="chapter-acc-title-group">
          <span class="cs-pill cs-pill-primary">🔥 2 Tiết • 4 Câu</span>
          <span class="chapter-acc-title">Bài 1: Thuốc Trợ Tim (Glycosid Tim, Ức Chế PDE-3, Chủ Vận Beta-1)</span>
        </div>
        <span class="chapter-acc-arrow">▼</span>
      </div>
      <div class="chapter-accordion-body" id="dl2-body-dl2_ch1" style="display: ${dl2OpenAccordions['dl2_ch1'] ? 'block' : 'none'};">
<!-- BÀI 1: THUỐC TRỢ TIM -->
        <div class="cs-section-badge">💊 Dược Lý Học Trọng Tâm: Bài 1</div>
        <h3 class="cs-topic-heading">1. Phân Loại Hoạt Chất & Nguồn Gốc Dược Liệu</h3>
        <div class="cs-point-card">
          <div class="cs-point-title">🌿 Glycosid tim (Digitalis)</div>
          <div class="cs-point-desc">
            <ul>
              <li><strong>Digoxin</strong>: Chiết xuất từ lá cây Dương địa hoàng lông (<em>Digitalis lanata</em>). Cấu trúc phân tử mang 3 nhóm -OH tự do &rarr; phân cực, tan tốt trong nước, thải trừ chủ yếu qua thận nguyên vẹn (80%).</li>
              <li><strong>Digitoxin</strong>: Chiết xuất từ Dương địa hoàng tía (<em>Digitalis purpurea</em>). Cấu trúc chỉ có 2 nhóm -OH &rarr; kém phân cực, tan rất mạnh trong lipid, hấp thu ruột 100%, gắn protein huyết tương 97%, chuyển hóa qua gan (90%), có chu kỳ gan - ruột kéo dài (T1/2 = 5-7 ngày).</li>
              <li><strong>Strophantin G (Ouabain)</strong>: Chiết xuất từ hạt cây <em>Strophanthus gratus</em>. Tan rất mạnh trong nước (chứa tới 5 nhóm -OH), không hấp thu qua đường tiêu hóa, không gắn protein huyết tương. Bắt buộc tiêm tĩnh mạch cấp cứu: tác dụng xuất hiện cực nhanh sau 5-10 phút, không tích lũy trong cơ thể, thải trừ nguyên vẹn qua thận.</li>
              <li><strong>Cấu trúc hóa học quyết định tác dụng</strong>: Phân tử gồm 2 phần:
                <br>&bull; <em>Phần Aglycon (Genin)</em>: Nhân steroid (cyclopentanoperhydrophenanthren) gắn với một vòng lacton 5 cạnh (Cardenolid) hoặc 6 cạnh (Bufadienolid) ở vị trí C17. <strong>Đây là phần quyết định trực tiếp hoạt tính trợ tim và độc tính</strong>.
                <br>&bull; <em>Phần đường (Ose)</em>: Gắn ở vị trí C3, gồm các đường đặc biệt (Digitoxose, Cymarose). <strong>Quyết định tính hòa tan, hấp thu, phân bố, gắn protein và thời gian bán thải</strong>.</li>
            </ul>
          </div>
        </div>

        <div class="cs-point-card">
          <div class="cs-point-title">⚡ Thuốc Tăng Co Bóp Không Glycosid</div>
          <div class="cs-point-desc">
            <ul>
              <li><strong>Ức chế Phosphodiesterase-3 (PDE-3): Milrinon, Inamrinon</strong>. Ngăn chặn thoái giáng cAMP. Tăng cAMP trong cơ tim làm tăng dòng Ca²⁺ nội bào &rarr; tăng co bóp cơ tim (Inotropic +); đồng thời tăng cAMP ở tế bào cơ trơn mạch máu gây giãn mạch hạ áp (tác dụng "Inodilator"). Chỉ dùng tiêm TM ngắn hạn trong suy tim cấp mất bù; chống chỉ định dùng đường uống kéo dài vì làm tăng tỷ lệ tử vong do loạn nhịp thất (thử nghiệm PROMISE).</li>
              <li><strong>Chủ vận thụ thể Adrenergic</strong>:
                <br>&bull; <em>Dobutamin</em>: Chủ vận ưu thế trên thụ thể β₁ ở tim, tăng mạnh sức co bóp cơ tim với mức tăng nhịp tim và tiêu thụ oxy tương đối ít.
                <br>&bull; <em>Dopamin</em>: Phụ thuộc liều kinh điển:
                <br>&bull; <em>Liều thấp ("liều thận", 1 - 3 &mu;g/kg/phút)</em>: Kích hoạt thụ thể dopaminergic D₁ tại giường mạch thận, mạc treo &rarr; giãn mạch thận, tăng lọc cầu thận và tăng bài niệu.
                <br>&bull; <em>Liều trung bình ("liều tim", 5 - 10 &mu;g/kg/phút)</em>: Chủ vận trên thụ thể β₁ &rarr; tăng co bóp cơ tim.
                <br>&bull; <em>Liều cao ("liều mạch", > 10 - 15 &mu;g/kg/phút)</em>: Kích hoạt thụ thể &alpha;₁ &rarr; co mạch ngoại vi nâng huyết áp trong sốc tim.
              </li>
              <li><strong>Thuốc tăng nhạy cảm Calci (Levosimendan)</strong>: Gắn vào Troponin C phụ thuộc nồng độ Ca²⁺, tăng lực co bóp mà không làm tăng nồng độ Ca²⁺ tự do nội bào &rarr; không làm tăng tiêu thụ oxy cơ tim và ít gây loạn nhịp tim.</li>
            </ul>
          </div>
        </div>

        <h3 class="cs-topic-heading">2. Cơ Chế Tác Dụng Phân Tử Của Glycosid Tim</h3>
        <div class="cs-point-card">
          <div class="cs-point-title">🔬 Ức chế enzym Na⁺/K⁺-ATPase & Quy luật 4 tác dụng</div>
          <div class="cs-point-desc">
            <p><strong>Cơ chế phân tử:</strong> Glycosid tim cạnh tranh vị trí gắn của ion K⁺ tại mặt ngoài của enzym Na⁺/K⁺-ATPase trên màng tế bào cơ tim. Enzym bị phong bế làm giảm bơm Na⁺ ra ngoài &rarr; tăng Na⁺ nội bào &rarr; ức chế hoạt động của kênh trao đổi Na⁺/Ca²⁺ (NCX) &rarr; giảm tống Ca²⁺ ra ngoài màng &rarr; tăng tích lũy Ca²⁺ trong lưới nội chất (Sarcoplasmic Reticulum). Khi có xung động khử cực, lượng lớn Ca²⁺ tự do phóng thích vào bào tương gắn Troponin C kích hoạt phức hợp Actin - Myosin gây <strong>tăng co bóp cơ tim</strong>.</p>
            <p><strong>Quy luật 4 tác dụng tim mạch kinh điển:</strong></p>
            <ol>
              <li><strong>Tăng co bóp (Inotropic dương)</strong>: Tăng tốc độ và biên độ co tâm thu, rút ngắn thời gian tâm thu, tim bóp rỗng hơn, giảm ứ trệ máu cuối tâm trương.</li>
              <li><strong>Làm chậm nhịp (Chronotropic âm)</strong>: Làm chậm nhịp xoang do kích thích trực tiếp trung khu dây thần kinh phế vị (X) và làm tăng tính nhạy cảm của thụ thể xoang cảnh với huyết áp. Tâm trương kéo dài giúp cơ tim được tưới máu mạch vành tốt hơn.</li>
              <li><strong>Giảm dẫn truyền (Dromotropic âm)</strong>: Kéo dài thời gian trơ và làm chậm tốc độ dẫn truyền xung động qua nút nhĩ thất (AV) &rarr; kéo dài khoảng PR trên ECG, bảo vệ thất khỏi đáp ứng tần số quá nhanh trong rung nhĩ/cuồng nhĩ.</li>
              <li><strong>Tăng tính kích thích (Bathmotropic dương)</strong>: Ở liều cao hoặc ngộ độc, thuốc làm giảm điện thế nghỉ màng tế bào sợi Purkinje và cơ thất về gần ngưỡng kích thích &rarr; tăng tính tự động dị vị, dễ xuất hiện ngoại tâm thu thất, nhịp đôi, xoắn đỉnh và rung thất.</li>
            </ol>
          </div>
        </div>

        <h3 class="cs-topic-heading">3. So Sánh Dược Động Học Digoxin vs Digitoxin</h3>
        <div style="overflow-x: auto; margin-bottom: 1rem;">
          <table class="cs-table">
            <thead>
              <tr>
                <th>Đặc điểm dược động học</th>
                <th>Digoxin (Phân cực / Tan trong nước)</th>
                <th>Digitoxin (Kém phân cực / Tan trong lipid)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Hấp thu đường uống</strong></td>
                <td>60 - 80% (thức ăn làm chậm hấp thu)</td>
                <td>90 - 100% (hấp thu hoàn toàn)</td>
              </tr>
              <tr>
                <td><strong>Gắn protein huyết tương</strong></td>
                <td>Thấp (20 - 25%)</td>
                <td>Rất cao (90 - 97%)</td>
              </tr>
              <tr>
                <td><strong>Chuyển hóa &amp; Thải trừ</strong></td>
                <td><strong>Thải trừ qua thận nguyên vẹn (80%)</strong> theo tốc độ lọc cầu thận</td>
                <td><strong>Chuyển hóa qua gan (90%)</strong>, có chu kỳ gan - ruột kéo dài</td>
              </tr>
              <tr>
                <td><strong>Thời gian bán thải (T1/2)</strong></td>
                <td>36 - 40 giờ (uống duy trì 1 lần/ngày)</td>
                <td>5 - 7 ngày (tích lũy kéo dài, rất khó chỉnh liều)</td>
              </tr>
              <tr>
                <td><strong>Hiệu chỉnh liều khi bệnh lý</strong></td>
                <td><strong>Bắt buộc giảm liều khi suy giảm chức năng thận</strong></td>
                <td><strong>Không cần chỉnh liều khi suy thận</strong> (dùng được khi suy thận nặng)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="cs-topic-heading">4. Ngộ Độc Digoxin & Xử Trí Cấp Cứu</h3>
        <div class="cs-point-card">
          <div class="cs-point-title">⚠️ Yếu tố thuận lợi bùng phát ngộ độc & Triệu chứng</div>
          <div class="cs-point-desc">
            <ul>
              <li><strong>Khoảng điều trị cực hẹp</strong>: Nồng độ điều trị huyết tương chỉ từ 0.5 - 0.9 ng/mL (trong suy tim) hoặc 0.8 - 2.0 ng/mL (trong rung nhĩ). Ngưỡng ngộ độc > 2.0 ng/mL.</li>
              <li><strong>Yếu tố thuận lợi</strong>: Hạ K⁺ máu (quan trọng nhất), hạ Mg²⁺ máu, tăng Ca²⁺ máu, nhiễm toan, giảm chức năng thận, người cao tuổi.</li>
              <li><strong>Triệu chứng lâm sàng sớm</strong>:
                <br>&bull; <em>Tiêu hóa (sớm nhất)</em>: Chán ăn, buồn nôn, nôn mửa, đau bụng, tiêu chảy.
                <br>&bull; <em>Thị giác đặc trưng</em>: Nhìn mờ, thấy quầng sáng màu vàng hoặc xanh lá cây xung quanh bóng đèn (Xanthopsia).
                <br>&bull; <em>Thần kinh</em>: Đau đầu, chóng mặt, lú lẫn, ác mộng, ảo giác ở người cao tuổi.
                <br>&bull; <em>Tim mạch (nguy hiểm nhất)</em>: Ngoại tâm thu thất nhịp đôi (Bigeminy), nhịp ba, nhịp nhanh thất, rung thất; Block nhĩ thất độ 2-3, nhịp chậm xoang.
              </li>
              <li><strong>Dấu hiệu điện tâm đồ (ECG)</strong>: Đoạn ST chênh lõm hình đáy chén ("Salvador Dali mustache"), sóng T dẹt hoặc đảo ngược, xuất hiện sóng U nổi rõ, khoảng PR kéo dài, QT ngắn lại.</li>
            </ul>
          </div>
        </div>

        <div class="golden-box" style="background: rgba(220, 38, 38, 0.08); border-left: 5px solid var(--danger); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
          <h4 style="color: var(--danger); margin: 0 0 0.5rem 0; font-size: 1rem;">🎯 ĐIỂM CHÚ Ý ĐẶC BIỆT &amp; BẪY THI BÀI 1:</h4>
          <ul style="margin: 0; padding-left: 1.2rem; color: var(--text-main); font-size: 0.9rem;">
            <li><strong>Bẫy ion K⁺ cạnh tranh</strong>: Ion K⁺ ngoại bào cạnh tranh trực tiếp với Digoxin tại vị trí gắn enzym Na⁺/K⁺-ATPase. Do đó, khi <em>hạ Kali máu</em> (do dùng Furosemid, Thiazid không bù kali), Digoxin gắn chặt và nhiều hơn vào enzym &rarr; <strong>bùng phát ngộ độc cấp đe dọa tính mạng dù nồng độ Digoxin trong máu hoàn toàn ở mức bình thường!</strong></li>
            <li><strong>Bẫy Calci tiêm tĩnh mạch</strong>: Tuyệt đối cấm tiêm Calci tĩnh mạch cho bệnh nhân đang điều trị bằng Glycosid tim vì Ca²⁺ hiệp đồng làm tăng co cứng cơ tim cực độ, dẫn đến <strong>ngừng tim thì tâm thu lập tức</strong>.</li>
            <li><strong>Tương tác Quinidin đẩy Digoxin</strong>: Quinidin đẩy Digoxin ra khỏi vị trí gắn ở cơ vân và ức chế P-glycoprotein tại ống thận, làm nồng độ Digoxin trong máu tăng vọt gấp đôi &rarr; phải giảm 50% liều Digoxin khi bắt đầu phối hợp.</li>
            <li><strong>Thuốc giải độc đặc hiệu số 1</strong>: Kháng thể kháng Digoxin Fab (<strong>Digibind / DigiFab</strong>). Với loạn nhịp thất do digitalis, thuốc chống loạn nhịp được ưu tiên lựa chọn là <strong>Lidocain hoặc Phenytoin</strong> (không dùng Quinidin hay Calci).</li>
          </ul>
        </div>
        </div>
    </div>

    <!-- BÀI 2: THUỐC ĐIỀU TRỊ THA -->
    <div class="chapter-accordion-item dl2-searchable-item" id="dl2-item-dl2_ch2">
      <div class="chapter-accordion-header ${dl2OpenAccordions['dl2_ch2'] ? 'active' : ''}" id="dl2-head-dl2_ch2" onclick="toggleDl2Accordion('dl2_ch2')">
        <div class="chapter-acc-title-group">
          <span class="cs-pill cs-pill-primary">🔥 2 Tiết • 4 Câu</span>
          <span class="chapter-acc-title">Bài 2: Thuốc Điều Trị Tăng Huyết Áp (ACEI, ARB, CCB, Thiazid, Chẹn Beta)</span>
        </div>
        <span class="chapter-acc-arrow">▼</span>
      </div>
      <div class="chapter-accordion-body" id="dl2-body-dl2_ch2" style="display: ${dl2OpenAccordions['dl2_ch2'] ? 'block' : 'none'};">
        <!-- PHÂN TÍCH SƠ ĐỒ KINH ĐIỂN BỘ Y TẾ -->
        <div class="chapter-sec-heading" style="color: #059669;">📊 1. Phân Tích Chi Tiết Sơ Đồ Cơ Chế Bệnh Sinh &amp; 5 Nhóm Thuốc Điều Trị THA (Chuẩn Sách Bộ Y Tế):</div>
        <div style="background: var(--surface-alt); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1.25rem; font-size: 0.88rem; line-height: 1.6;">
          <div style="font-weight: 700; color: var(--primary); margin-bottom: 0.5rem; font-size: 0.95rem;">
            ⚡ Phương trình huyết áp gốc: <code>HA = Cung lượng tim (CO) × Sức cản ngoại vi (TPR)</code>
          </div>
          <p style="margin-bottom: 0.75rem; color: var(--text-muted);">
            Sơ đồ tự điều hòa huyết áp trong giáo trình chia toàn bộ cơ chế bệnh sinh và vị trí tác động của 5 nhóm thuốc kinh điển thành 2 nhánh lớn:
          </p>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 0.75rem; margin-bottom: 1rem;">
            <div style="background: var(--surface); padding: 0.85rem; border-radius: var(--radius-sm); border-left: 4px solid #2563eb;">
              <strong style="color: #2563eb; font-size: 0.9rem;">🫀 Nhánh Trái: Cung Lượng Tim (CO)</strong>
              <div style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.35rem;">
                Quyết định bởi 2 yếu tố:
                <br>&bull; <strong>Thể tích tâm thu (V tâm thu):</strong> Lượng máu bơm mỗi nhát bóp, phụ thuộc vào <em>tiền gánh</em> (thể tích máu tuần hoàn trở về tâm thất).
                <br>&bull; <strong>Tần số tim (Nhịp tim):</strong> Số lần co bóp mỗi phút do hệ thần kinh thực vật (giao cảm) điều khiển.
              </div>
            </div>
            <div style="background: var(--surface); padding: 0.85rem; border-radius: var(--radius-sm); border-left: 4px solid #dc2626;">
              <strong style="color: #dc2626; font-size: 0.9rem;">🩸 Nhánh Phải: Sức Cản Ngoại Vi (TPR)</strong>
              <div style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.35rem;">
                Quyết định bởi <strong>Đường kính lòng mạch (d lòng mạch)</strong> của các tiểu động mạch. Theo định luật Poiseuille, lòng mạch chỉ cần co thắt hoặc phì đại dày cản trở dòng chảy thì sức cản ngoại vi tăng vọt lũy thừa bậc 4, đẩy huyết áp lên rất cao.
              </div>
            </div>
          </div>

          <div style="font-weight: 700; color: var(--text-main); margin-bottom: 0.5rem; font-size: 0.9rem;">🎯 5 Vị trí đích của 5 nhóm thuốc theo số đánh dấu trong sơ đồ:</div>
          <div style="display: flex; flex-direction: column; gap: 0.65rem;">
            <div style="background: var(--surface); padding: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border);">
              <span style="background: #dbeafe; color: #1e40af; font-weight: 700; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.8rem;">(1) Thuốc Lợi Tiểu</span>
              <div style="margin-top: 0.35rem;">
                <strong>Đích tác động:</strong> Nhánh <em>Tăng nhập Na⁺</em> &amp; <em>Thận giữ Na⁺</em>.
                <br><strong>Cơ chế hạ áp:</strong> Tăng bài xuất Na⁺ và nước qua đường tiểu → làm giảm thể tích huyết tương (V máu) → <strong>giảm lượng máu đổ về tim (giảm tiền gánh)</strong> → giảm thể tích tâm thu (V tâm thu) → giảm cung lượng tim → hạ huyết áp. Về lâu dài (sau 4-8 tuần), thuốc còn rút bớt Na⁺ ở thành mạch, làm giảm phù nề thành mạch và giảm nhạy cảm với các chất co mạch → gián tiếp làm tăng <em>d lòng mạch</em>.
              </div>
            </div>

            <div style="background: var(--surface); padding: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border);">
              <span style="background: #fef3c7; color: #92400e; font-weight: 700; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.8rem;">(2) Thuốc Hủy Giao Cảm</span>
              <div style="margin-top: 0.35rem;">
                <strong>Đích tác động:</strong> Khóa tình trạng <em>Cường giao cảm</em> (Noradrenaline).
                <br><strong>Cơ chế hạ áp:</strong> Khi ức chế giao cảm, thuốc giải quyết đồng thời 3 cơ chế:
                <br>&bull; (a) Giảm <strong>Tần số tim</strong> và giảm lực co bóp cơ tim (qua thụ thể β₁ ở tim) → giảm cung lượng tim.
                <br>&bull; (b) Giảm <strong>Co thắt mạch</strong> (qua thụ thể α₁ hoặc hủy giao cảm trung ương) → làm giãn và tăng đường kính <em>d lòng mạch</em>.
                <br>&bull; (c) <strong>Giảm tiết Renin tại tế bào cận cầu thận</strong> (qua thụ thể β₁ ở thận) → chặt đứt nguồn gốc hoạt hóa hệ RAA ngay từ đầu nguồn!
              </div>
            </div>

            <div style="background: var(--surface); padding: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border);">
              <span style="background: #e0e7ff; color: #3730a3; font-weight: 700; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.8rem;">(3) Thuốc Giãn Mạch Trực Tiếp</span>
              <div style="margin-top: 0.35rem;">
                <strong>Đích tác động:</strong> Tác động trực tiếp vào trương lực cơ trơn mạch máu (Hydralazin, Minoxidil, Natri Nitroprussid).
                <br><strong>Cơ chế hạ áp:</strong> Ức chế hiện tượng <em>Co thắt</em> cơ trơn thành tiểu động mạch (thông qua mở kênh K⁺ hoặc giải phóng NO) → <strong>làm tăng trực tiếp đường kính lòng mạch (d lòng mạch)</strong> → làm giảm nhanh chóng sức cản ngoại vi.
              </div>
            </div>

            <div style="background: var(--surface); padding: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border);">
              <span style="background: #dcfce7; color: #166534; font-weight: 700; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.8rem;">(4) Thuốc Chẹn Kênh Calci (CCB - Chẹn Ca⁺⁺)</span>
              <div style="margin-top: 0.35rem;">
                <strong>Đích tác động:</strong> Kênh Calci type L ở cả màng tế bào cơ tim và cơ trơn thành mạch (mũi tên 2 chiều toàn diện):
                <br>&bull; <em>Mũi tên sang phải (Tác động trên mạch):</em> Ức chế dòng Ca²⁺ vào cơ trơn tiểu động mạch → giãn mạch, làm tăng <strong>d lòng mạch</strong> → giảm sức cản ngoại vi (ưu thế vượt trội ở phân nhóm DHP: Amlodipin, Nifedipin, Nicardipin).
                <br>&bull; <em>Mũi tên sang trái (Tác động trên tim):</em> Ức chế dòng Ca²⁺ vào nút xoang, nút AV và cơ tim → làm giảm <strong>Tần số tim</strong> và giảm <strong>V tâm thu</strong> → giảm cung lượng tim (ưu thế ở phân nhóm Non-DHP: Verapamil, Diltiazem).
              </div>
            </div>

            <div style="background: var(--surface); padding: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border);">
              <span style="background: #fce7f3; color: #9d174d; font-weight: 700; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.8rem;">(5) Thuốc Tác Động Lên Hệ RAA (ACEI &amp; ARB)</span>
              <div style="margin-top: 0.35rem;">
                <strong>Đích tác động:</strong> Khóa trục nội tiết <em>Tăng renin → Angiotensin → Aldosteron</em>:
                <br>&bull; <strong>Ức chế ACE (ACEI):</strong> Chặn enzym biến đổi Angiotensin I thành Angiotensin II.
                <br>&bull; <strong>Ức chế R_AT (ARB):</strong> Chặn chọn lọc thụ thể AT₁ nơi Angiotensin II gắn vào phát huy tác dụng sinh học.
                <br>&bull; <strong>3 Tác động bảo vệ then chốt:</strong>
                <br>1. <em>Chống co thắt:</em> Giãn tiểu động mạch → mở rộng <em>d lòng mạch</em>.
                <br>2. <em>Chống phì đại tim mạch:</em> Ngăn Angiotensin II kích thích tăng sinh mô sợi và phì đại tế bào cơ tim/thành mạch → đảo ngược quá trình tái cấu trúc mạch, giữ lòng mạch thông thoáng lâu dài.
                <br>3. <em>Chặn Aldosteron:</em> Giảm tiết aldosteron từ vỏ thượng thận → thận không giữ Na⁺ và nước → hỗ trợ làm giảm V máu.
              </div>
            </div>
          </div>
        </div>

        <div class="chapter-sec-heading">🎯 2. Chi Tiết 4 Nhóm Thuốc Lựa Chọn Đầu Tay (First-Line):</div>
        <ul class="chapter-point-list">
          <li><strong>1. Thuốc ức chế men chuyển (ACEI - đuôi "-pril"):</strong> Captopril, Enalapril, Lisinopril, Perindopril.
            <br>&bull; <em>Cơ chế:</em> Ức chế Angiotensin Converting Enzyme → ngăn chuyển Angiotensin I thành Angiotensin II (chất co mạch mạnh và kích thích tiết Aldosteron); đồng thời ngăn giáng hóa Bradykinin (chất giãn mạch).
            <br>&bull; <em>Tác dụng phụ đặc trưng:</em> <strong>Ho khan dai dẳng (5 &minus; 20%)</strong> do tích tụ Bradykinin và chất P ở đường hô hấp; <strong>phù mạch thần kinh (Angioedema)</strong> có thể gây ngạt thở tử vong; tăng K⁺ máu; tụt huyết áp liều đầu.
            <br>&bull; <em>Chống chỉ định tuyệt đối:</em> <strong>Phụ nữ mang thai (gây quái thai, suy thận và tử vong thai nhi)</strong>, tiền sử phù mạch do ACEI, hẹp động mạch thận hai bên, tăng K⁺ máu (> 5.5 mmol/L).
          </li>
          <li><strong>2. Thuốc chẹn thụ thể Angiotensin II (ARB - đuôi "-sartan"):</strong> Losartan, Valsartan, Telmisartan, Candesartan.
            <br>&bull; <em>Cơ chế:</em> Chẹn chọn lọc thụ thể AT₁ của Angiotensin II → giãn mạch, giảm aldosteron.
            <br>&bull; <em>Ưu điểm vượt trội:</em> Không làm tăng Bradykinin → <strong>không gây ho khan</strong>, rất ít gây phù mạch. Dùng thay thế hoàn hảo cho bệnh nhân không dung nạp ACEI vì ho khan.
            <br>&bull; <em>Chống chỉ định:</em> Giống ACEI (Phụ nữ mang thai, hẹp ĐM thận hai bên). <strong>Tuyệt đối không phối hợp ACEI + ARB cùng lúc</strong>.
          </li>
          <li><strong>3. Thuốc chẹn kênh Calci (CCB):</strong>
            <br>&bull; <em>Nhóm DHP (Dihydropyridin - đuôi "-dipin"):</em> Amlodipin, Nifedipin, Felodipin, Nicardipin. Tác dụng chọn lọc cao trên cơ trơn mạch máu → giãn tiểu động mạch mạnh. Ưu tiên hàng đầu cho người cao tuổi, THA tâm thu đơn độc. ADR: <strong>Phù mắt cá chân</strong> (do giãn tiểu ĐM trước mao mạch làm tăng áp lực thủy tĩnh), nhịp tim nhanh phản xạ, bừng đỏ mặt.
            <br>&bull; <em>Nhóm Non-DHP:</em> Verapamil, Diltiazem. Tác dụng chọn lọc trên tim → giảm nhịp tim, giảm sức co bóp cơ tim, giảm dẫn truyền AV. Dùng cho THA kèm đau thắt ngực, rung nhĩ. Chống chỉ định trong suy tim phân suất tống máu giảm (HFrEF), nhịp chậm, block nhĩ thất độ 2-3.
          </li>
          <li><strong>4. Lợi tiểu Thiazid:</strong> Hydrochlorothiazid (HCTZ), Indapamid, Chlorthalidon.
            <br>&bull; <em>Cơ chế:</em> Ức chế đồng vận chuyển Na⁺/Cl⁻ ở đoạn đầu ống lượn xa.
            <br>&bull; <em>ADR:</em> Hạ K⁺ máu, tăng acid uric (khởi phát cơn Gout cấp), tăng đường máu, tăng lipid máu. Riêng Ca²⁺ thì làm <strong>tăng calci máu</strong> (có lợi cho người già loãng xương).
          </li>
        </ul>

        <div class="chapter-sec-heading">💊 3. Các Nhóm Thuốc Khác &amp; Tình Huống Đặc Biệt:</div>
        <ul class="chapter-point-list">
          <li><strong>Chẹn beta adrenergic:</strong> Bisoprolol, Metoprolol, Atenolol (chọn lọc β₁); Propranolol (không chọn lọc); Carvedilol, Labetalol (chẹn cả α₁, β₁, β₂). Ưu tiên khi bệnh nhân THA có kèm: đau thắt ngực, sau nhồi máu cơ tim, suy tim mạn ổn định. CCĐ: Hen phế quản, COPD nặng, block AV độ 2-3.</li>
          <li><strong>Tăng huyết áp thai kỳ:</strong> <strong>Methyldopa</strong> (chủ vận α₂ trung ương) là thuốc lựa chọn hàng đầu được chứng minh an toàn nhất qua nhiều thập kỷ; có thể dùng thêm Labetalol, Hydralazin hoặc Nifedipin tác dụng kéo dài. CẤM TUYỆT ĐỐI dùng ACEI và ARB!</li>
          <li><strong>Cơn tăng huyết áp cấp cứu (HA ≥ 180/120 mmHg kèm tổn thương cơ quan đích):</strong> Dùng thuốc tiêm truyền tĩnh mạch: Nicardipine IV, Labetalol IV, Natri Nitroprussid IV. Không được hạ huyết áp quá nhanh (giảm không quá 25% trong giờ đầu tiên).</li>
        </ul>

        <!-- BẢNG VÀNG: CÁC ĐIỂM CHÚ Ý ĐẶC BIỆT ĐỘC NHẤT VÔ NHỊ -->
        <div class="chapter-sec-heading" style="color: #dc2626;">🔥 4. Những Điểm Chú Ý Đặc Biệt &amp; Độc Nhất Vô Nhị (Chỉ Có Ở Thuốc THA - Trọng Tâm Đề Thi):</div>
        <div style="background: var(--surface-alt); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1.25rem; font-size: 0.88rem; line-height: 1.6;">
          <ul class="chapter-point-list" style="display: flex; flex-direction: column; gap: 0.75rem;">
            <li>
              <strong style="color: #2563eb;">1. Ho khan dai dẳng &amp; Phù mạch do tích tụ Bradykinin (Chỉ có ở ACEI):</strong>
              <br>&bull; <em>Cơ chế:</em> ACE chính là enzym Kininase II thoái biến Bradykinin. Thuốc ức chế men chuyển (ACEI) ngăn cản quá trình này làm Bradykinin và chất P ứ đọng tại phế quản → gây <strong>ho khan dai dẳng (5-20%)</strong> và <strong>phù mạch thần kinh (Angioedema)</strong> có thể gây ngạt thở tử vong.
              <br>&bull; <em>Đặc điểm độc nhất:</em> Nhóm ARB (Losartan, Valsartan) dù cùng ức chế hệ RAA nhưng chẹn thẳng thụ thể AT₁, không tác động lên men ACE → <strong>hoàn toàn không làm tăng Bradykinin và không gây ho khan</strong> → được dùng thay thế cho ACEI khi bệnh nhân bị ho khan!
            </li>

            <li>
              <strong style="color: #dc2626;">2. Suy thận cấp vô niệu khi Hẹp động mạch thận hai bên (ACEI &amp; ARB):</strong>
              <br>&bull; <em>Cơ chế:</em> Khi hẹp động mạch thận, cơ thể tự cứu bằng cách tiết Angiotensin II làm <em>co tiểu động mạch đi</em> để giữ áp lực lọc cầu thận (GFR). 
              <br>&bull; <em>Hậu quả:</em> Uống ACEI hoặc ARB sẽ làm giãn tiểu động mạch đi → áp lực lọc cầu thận sập về 0 → <strong>gây suy thận cấp vô niệu lập tức</strong>. Chống chỉ định tuyệt đối!
            </li>

            <li>
              <strong style="color: #7c3aed;">3. Độc tính gây quái thai và chết thai kỳ (Cảnh báo đen ACEI &amp; ARB):</strong>
              <br>&bull; Thuốc ức chế hệ RAA gây hạ huyết áp thai nhi, vô niệu thai nhi, thiểu ối, biến dạng sọ mặt và tử vong thai nhi (đặc biệt trong quý 2 và 3). Chống chỉ định tuyệt đối cho phụ nữ mang thai!
            </li>

            <li>
              <strong style="color: #d97706;">4. Phù mắt cá chân do CCB (Amlodipin, Nifedipin) — "Phù giả" không dùng thuốc lợi tiểu:</strong>
              <br>&bull; <em>Cơ chế:</em> Đây <strong>không phải phù do giữ muối nước hay suy tim</strong>, mà do thuốc làm <em>giãn mạnh tiểu động mạch trước mao mạch</em> trong khi tiểu tĩnh mạch sau mao mạch không giãn → tăng vọt áp lực thủy tĩnh đẩy dịch thoát ra mô kẽ mắt cá chân.
              <br>&bull; <em>Xử trí độc nhất:</em> <strong>Không dùng thuốc lợi tiểu</strong> (vô tác dụng), mà phải giảm liều hoặc <strong>phối hợp thêm với ACEI hoặc ARB</strong> (vì ACEI/ARB làm giãn tiểu tĩnh mạch sau mao mạch, cân bằng lại áp lực mao mạch).
            </li>

            <li>
              <strong style="color: #059669;">5. Quy luật Calci đối nghịch độc nhất: Thiazid làm TĂNG Ca²⁺ vs Quai làm HẠ Ca²⁺:</strong>
              <br>&bull; <em>Lợi tiểu Thiazid (HCTZ, Indapamid):</em> Tăng tái hấp thu Ca²⁺ ở ống lượn xa → <strong>làm tăng calci máu</strong> → Thuốc hạ áp duy nhất <strong>được ưu tiên cho người cao tuổi bị tăng huyết áp kèm loãng xương</strong>!
              <br>&bull; <em>Lợi tiểu quai (Furosemid):</em> Ức chế đồng vận chuyển Na⁺/K⁺/2Cl⁻ → kéo Ca²⁺ ra nước tiểu → <strong>làm hạ calci máu</strong> (chuyên dùng cấp cứu tăng calci máu ác tính).
            </li>

            <li>
              <strong style="color: #b45309;">6. Ngưỡng lọc cầu thận GFR &lt; 30 mL/phút làm Thiazid mất hoàn toàn tác dụng:</strong>
              <br>&bull; Khi bệnh nhân suy thận nặng với GFR &lt; 30 mL/phút, nhóm Thiazid <strong>hoàn toàn mất hiệu lực hạ áp</strong> → bắt buộc phải chuyển sang <strong>Lợi tiểu quai (Furosemid)</strong> thì mới tống được muối nước và hạ huyết áp.
            </li>

            <li>
              <strong style="color: #e11d48;">7. Che giấu triệu chứng hạ đường huyết (Chỉ có ở thuốc chẹn Beta):</strong>
              <br>&bull; Bệnh nhân đái tháo đường dùng Insulin khi bị hạ đường huyết sẽ có phản xạ giao cảm cảnh báo: tim đập nhanh, đánh trống ngực, run tay.
              <br>&bull; Dùng thuốc chẹn Beta làm <strong>xóa sạch các dấu hiệu tim nhanh và run tay</strong> (chỉ còn triệu chứng vã mồ hôi do giao cảm chi phối tuyến mồ hôi qua acetylcholin) → bệnh nhân rơi thẳng vào <strong>hôn mê hạ đường huyết tử vong mà không hề hay biết</strong>!
            </li>

            <li>
              <strong style="color: #be123c;">8. Cơn bão giao cảm &amp; Tăng huyết áp dội ngược (Rebound Hypertension) khi dừng đột ngột Chẹn Beta:</strong>
              <br>&bull; Dùng lâu ngày làm thụ thể tăng sinh (Up-regulation). Dừng thuốc đột ngột làm lượng thụ thể trống bị gắn ồ ạt bởi Catecholamin nội sinh → huyết áp tăng vọt dữ dội, nhồi máu cơ tim cấp. <strong>Bắt buộc phải giảm liều từ từ (tapering) trong 1-2 tuần</strong>.
            </li>

            <li>
              <strong style="color: #0284c7;">9. Thuốc hạ áp thai kỳ Methyldopa &amp; Tác dụng phụ Thiếu máu tan máu tự miễn (Coombs (+)):</strong>
              <br>&bull; Methyldopa (chủ vận α₂ trung ương) là thuốc số 1 an toàn cho thai kỳ, nhưng có tác dụng phụ độc nhất là gây <strong>thiếu máu tan máu tự miễn với Test Coombs trực tiếp dương tính</strong>, gây trầm cảm và khô miệng.
            </li>

            <li>
              <strong style="color: #475569;">10. Quy tắc vàng 25% trong Cơn Tăng Huyết Áp Cấp Cứu (Hypertensive Emergency):</strong>
              <br>&bull; CẤM TUYỆT ĐỐI hạ huyết áp về mức bình thường ngay trong những giờ đầu! Chỉ được hạ tối đa <strong>20 - 25% chỉ số huyết áp trong giờ đầu tiên</strong> (dùng Nicardipine IV, Labetalol IV, Nitroprussid IV) để tránh sụt giảm tưới máu não và thận gây nhồi máu não và suy thận cấp.
            </li>
          </ul>
        </div>

        <div class="exam-trap-box">
          <div class="exam-trap-title">🛑 Bẫy thi trắc nghiệm Bài 2:</div>
          &bull; <strong>Bẫy phù chân do CCB:</strong> Phù chân do Amlodipin là do <em>giãn mạch tại chỗ</em>, không phải phù do ứ trệ dịch hay suy tim/suy thận → không dùng thuốc lợi tiểu để điều trị tác dụng phụ này mà phối hợp với ACEI/ARB (giúp giãn tiểu ĐM sau mao mạch làm cân bằng áp lực mao mạch).
          <br>&bull; <strong>Bẫy thuốc hạ áp cho người đái tháo đường / bệnh thận:</strong> ACEI hoặc ARB là lựa chọn số 1 vì làm giãn tiểu động mạch đi của cầu thận → giảm áp lực lọc cầu thận, giảm protein niệu, làm chậm suy thận.
        </div>
        <div style="margin-top: 0.75rem;">
          <button class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.35rem 0.75rem;" onclick="jumpToDl2Topic('Thuốc điều trị THA')">
            🎯 Luyện đề trắc nghiệm Bài 2: Thuốc Điều Trị THA
          </button>
        </div>
      </div>
    </div>

    <!-- BÀI 3: THUỐC CHỮA CĐTN -->
    <div class="chapter-accordion-item dl2-searchable-item" id="dl2-item-dl2_ch3">
      <div class="chapter-accordion-header ${dl2OpenAccordions['dl2_ch3'] ? 'active' : ''}" id="dl2-head-dl2_ch3" onclick="toggleDl2Accordion('dl2_ch3')">
        <div class="chapter-acc-title-group">
          <span class="cs-pill cs-pill-warning">⚡ 1 Tiết • 2 Câu</span>
          <span class="chapter-acc-title">Bài 3: Thuốc Chữa Cơn Đau Thắt Ngực (Nitrat Hữu Cơ, Chẹn Beta, CCB)</span>
        </div>
        <span class="chapter-acc-arrow">▼</span>
      </div>
      <div class="chapter-accordion-body" id="dl2-body-dl2_ch3" style="display: ${dl2OpenAccordions['dl2_ch3'] ? 'block' : 'none'};">
<!-- BÀI 3: THUỐC CHỮA CƠN ĐAU THẮT NGỰC -->
        <div class="cs-section-badge">💊 Dược Lý Học Trọng Tâm: Bài 3</div>
        <h3 class="cs-topic-heading">1. Phân Loại Cơn Đau Thắt Ngực & Nguyên Tắc Điều Trị</h3>
        <div class="cs-point-card">
          <div class="cs-point-title">🫀 3 Thể Đau Thắt Ngực Kinh Điển</div>
          <div class="cs-point-desc">
            <ul>
              <li><strong>Đau thắt ngực ổn định (Cơn đau khi gắng sức)</strong>: Do mảng xơ vữa gây hẹp cố định lòng động mạch vành. Khi nghỉ ngơi cung cấp đủ, khi gắng sức nhu cầu oxy cơ tim vượt quá khả năng cung cấp. <em>Nguyên tắc điều trị</em>: Giảm tiêu thụ oxy cơ tim (giảm nhịp tim, giảm tiền gánh, giảm hậu gánh và sức co bóp). Thuốc lựa chọn: Chẹn beta, Nitrat, Chẹn kênh calci.</li>
              <li><strong>Đau thắt ngực không ổn định (Hội chứng vành cấp)</strong>: Do nứt vỡ mảng xơ vữa kèm huyết khối bán tắc. Cơn đau xuất hiện ngay cả khi nghỉ, tăng dần về tần số và cường độ, đe dọa nhồi máu cơ tim. Bắt buộc can thiệp chống đông, chống kết tập tiểu cầu kép (Aspirin + P2Y12) và tái thông mạch vành.</li>
              <li><strong>Đau thắt ngực biến thái Prinzmetal (Co thắt mạch vành)</strong>: Cơn đau xuất hiện đột ngột lúc nghỉ (thường về đêm gần sáng), đoạn ST chênh lên thoáng qua trên ECG do co thắt cấp tính động mạch vành thượng tâm mạc. <strong>Thuốc điều trị số 1: Nitrat và Chẹn kênh Calci (CCB)</strong>. <strong>Chống chỉ định tuyệt đối: Thuốc chẹn beta không chọn lọc</strong> (do ức chế β₂ giãn mạch để hở thụ thể &alpha;₁ làm co thắt mạch vành dữ dội hơn).</li>
            </ul>
          </div>
        </div>

        <h3 class="cs-topic-heading">2. Thuốc Nitrat Hữu Cơ (Nitroglycerin, ISDN, ISMN)</h3>
        <div class="cs-point-card">
          <div class="cs-point-title">🧪 Cơ Chế Tác Dụng Phân Tử & Dược Động Học</div>
          <div class="cs-point-desc">
            <ul>
              <li><strong>Cơ chế phân tử</strong>: Nitrat hữu cơ là tiền chất giải phóng Oxyd Nitric (NO) nhờ khử enzym (như mitochondrial aldehyde dehydrogenase ALDH-2) tại tế bào nội mô mạch máu. NO hoạt hóa Guanylyl Cyclase hòa tan &rarr; tăng sinh tổng hợp cGMP nội bào &rarr; khử phosphoryl chuỗi nhẹ myosin (MLC) &rarr; giãn cơ trơn mạch máu.</li>
              <li><strong>Huyết động học chọn lọc</strong>: Ở liều điều trị thấp đến trung bình, Nitrat <strong>giãn ưu thế hệ tĩnh mạch dung tích</strong> hơn tiểu động mạch &rarr; giảm lượng máu dồn về tim &rarr; <strong>giảm tiền gánh</strong>, giảm thể tích thất cuối tâm trương, giảm sức căng thành tâm thất &rarr; giảm nhu cầu oxy cơ tim rõ rệt. Ở liều cao, thuốc mới gây giãn tiểu động mạch (giảm hậu gánh) và giãn trực tiếp động mạch vành lớn.</li>
              <li><strong>Dược động học Nitroglycerin</strong>: Thuốc bị chuyển hóa qua gan lần đầu cực kỳ mạnh bởi enzym glutathione-organic nitrate reductase (sinh khả dụng đường uống < 10%). Do đó:
                <br>&bull; <em>Cắt cơn đau ngực cấp</em>: Bắt buộc ngậm dưới lưỡi (Sublingual) hoặc xịt niêm mạc miệng để hấp thu thẳng vào tĩnh mạch chủ trên không qua gan; tác dụng xuất hiện sau 1-3 phút.
                <br>&bull; <em>Dự phòng cơn đau ngực</em>: Dùng dạng dán ngoài da phóng thích kéo dài (Transdermal patch), viên uống Isosorbid dinitrat (ISDN) hoặc Isosorbid mononitrat (ISMN - sinh khả dụng uống 100%, không bị chuyển hóa qua gan lần đầu).
              </li>
              <li><strong>Hiện tượng dung nạp thuốc (Nitrate Tolerance)</strong>: Giảm hoặc mất tác dụng giãn mạch khi dùng Nitrat liên tục suốt 24 giờ. Cơ chế: cạn kiệt nhóm sulfhydryl (-SH) cần thiết để tạo NO, tăng sinh gốc tự do oxy hóa bất hoạt ALDH-2 và hoạt hóa bù trừ hệ RAA. <strong>Biện pháp khắc phục</strong>: Thiết kế "khoảng thời gian trống không có nitrat" (Nitrate-free interval) kéo dài 8 - 12 giờ mỗi ngày (thường tháo miếng dán vào ban đêm).</li>
            </ul>
          </div>
        </div>

        <h3 class="cs-topic-heading">3. Các Thuốc Khác Điều Trị Cơn Đau Thắt Ngực</h3>
        <div class="cs-point-card">
          <div class="cs-point-title">🛡️ Chẹn Beta, CCB & Thuốc Tối Ưu Hóa Chuyển Hóa Cơ Tim</div>
          <div class="cs-point-desc">
            <ul>
              <li><strong>Thuốc chẹn beta-adrenergic (Atenolol, Metoprolol, Bisoprolol)</strong>: Lựa chọn hàng đầu trong đau thắt ngực ổn định. Giảm nhịp tim và giảm sức co bóp cơ tim &rarr; giảm tiêu thụ oxy; kéo dài thời gian tâm trương giúp tăng tưới máu mạch vành. Phối hợp kinh điển với Nitrat để triệt tiêu phản xạ nhịp nhanh bù trừ của Nitrat.</li>
              <li><strong>Thuốc chẹn kênh Calci (CCB)</strong>:
                <br>&bull; <em>DHP tác dụng kéo dài (Amlodipin, Felodipin)</em>: Giãn tiểu động mạch giảm hậu gánh và giãn mạch vành. Tránh dùng DHP tác dụng nhanh ngắn (Nifedipin viên nang cắn/nhỏ giọt) vì gây tụt HA đột ngột kích hoạt nhịp nhanh phản xạ làm nặng thêm thiếu máu cơ tim.
                <br>&bull; <em>Non-DHP (Verapamil, Diltiazem)</em>: Giảm nhịp tim, giảm co bóp và giãn mạch vành. Thay thế số 1 cho chẹn beta khi có chống chỉ định (hen suyễn, COPD). Không phối hợp Verapamil với chẹn beta vì nguy cơ ngừng tim và block AV hoàn toàn.
              </li>
              <li><strong>Trimetazidine (Vastarel)</strong>: Thuốc ức chế chọn lọc enzym 3-ketoacyl-CoA thiolase (3-KAT) ở ty thể tế bào cơ tim. Chuyển hướng chuyển hóa năng lượng từ oxy hóa acid béo (tiêu tốn nhiều oxy) sang con đường oxy hóa glucose (tiết kiệm oxy hơn) &rarr; duy trì ATP cho cơ tim thiếu máu mà không làm thay đổi huyết áp hay nhịp tim. <em>Lưu ý tác dụng phụ</em>: Có thể khởi phát hoặc làm nặng thêm triệu chứng bệnh Parkinson (run tay, cứng cơ).</li>
              <li><strong>Ivabradine</strong>: Ức chế chọn lọc dòng tạo nhịp If tại nút xoang tim &rarr; làm chậm nhịp tim đơn thuần mà không ảnh hưởng co bóp cơ tim hay dẫn truyền nhĩ thất. Dùng cho đau thắt ngực ổn định có nhịp xoang &ge; 70 ck/phút khi không dung nạp hoặc không kiểm soát được bằng chẹn beta.</li>
              <li><strong>Nicorandil</strong>: Cơ chế kép: vừa mở kênh K_ATP gây giãn tiểu động mạch, vừa có gốc nitrat giải phóng NO gây giãn hệ tĩnh mạch.</li>
            </ul>
          </div>
        </div>

        <div class="golden-box" style="background: rgba(220, 38, 38, 0.08); border-left: 5px solid var(--danger); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
          <h4 style="color: var(--danger); margin: 0 0 0.5rem 0; font-size: 1rem;">🎯 ĐIỂM CHÚ Ý ĐẶC BIỆT &amp; BẪY THI BÀI 3:</h4>
          <ul style="margin: 0; padding-left: 1.2rem; color: var(--text-main); font-size: 0.9rem;">
            <li><strong>Tương tác chết người Nitrat + Ức chế PDE-5 (Sildenafil, Tadalafil)</strong>: Cấm dùng đồng thời trong vòng 24 - 48 giờ. Nitrat làm tăng tổng hợp cGMP, PDE-5 inhibitor chặn thoái giáng cGMP &rarr; nồng độ cGMP nội bào tăng vọt mất kiểm soát dẫn tới <strong>tụt huyết áp thảm khốc, sốc và nhồi máu cơ tim tử vong</strong>.</li>
            <li><strong>Hội chứng cướp máu mạch vành (Coronary Steal Syndrome)</strong>: Xảy ra với <strong>Dipyridamol</strong> hoặc thuốc giãn mạch mạnh chọn lọc trên tiểu động mạch. Thuốc làm giãn tối đa các mạch máu ở vùng cơ tim lành, hút máu dồn về vùng lành, khiến vùng cơ tim bệnh lý đang thiếu máu trầm trọng càng bị thiếu máu nặng hơn.</li>
            <li><strong>Prinzmetal cấm Chẹn Beta không chọn lọc</strong>: Đau thắt ngực Prinzmetal bắt buộc dùng Nitrat hoặc CCB, cấm dùng Propranolol vì phong bế thụ thể giãn mạch β₂ sẽ làm co thắt mạch vành ác tính.</li>
          </ul>
        </div>
        </div>
    </div>

    <!-- BÀI 4: THUỐC CHỐNG LOẠN NHỊP -->
    <div class="chapter-accordion-item dl2-searchable-item" id="dl2-item-dl2_ch4">
      <div class="chapter-accordion-header ${dl2OpenAccordions['dl2_ch4'] ? 'active' : ''}" id="dl2-head-dl2_ch4" onclick="toggleDl2Accordion('dl2_ch4')">
        <div class="chapter-acc-title-group">
          <span class="cs-pill cs-pill-warning">⚡ 1 Tiết • 2 Câu</span>
          <span class="chapter-acc-title">Bài 4: Thuốc Chống Loạn Nhịp Tim (Hệ Thống Vaughan Williams &amp; Amiodaron)</span>
        </div>
        <span class="chapter-acc-arrow">▼</span>
      </div>
      <div class="chapter-accordion-body" id="dl2-body-dl2_ch4" style="display: ${dl2OpenAccordions['dl2_ch4'] ? 'block' : 'none'};">
<!-- BÀI 4: THUỐC CHỐNG LOẠN NHỊP TIM -->
        <div class="cs-section-badge">💊 Dược Lý Học Trọng Tâm: Bài 4</div>
        <h3 class="cs-topic-heading">1. Điện Sinh Lý Tế Bào Cơ Tim & Phân Loại Vaughan Williams</h3>
        <div class="cs-point-card">
          <div class="cs-point-title">⚡ 5 Pha Điện Thế Hoạt Động Của Cơ Thất</div>
          <div class="cs-point-desc">
            <ul>
              <li><strong>Pha 0 (Khử cực nhanh)</strong>: Dòng Na⁺ ùa vào ồ ạt qua kênh Na⁺ nhanh phụ thuộc điện thế (Đích ức chế của Thuốc Nhóm I).</li>
              <li><strong>Pha 1 (Tái cực sớm)</strong>: Kênh Na⁺ bất hoạt, dòng K⁺ thoáng qua (I_to) đi ra.</li>
              <li><strong>Pha 2 (Cao nguyên - Plateau)</strong>: Dòng Ca²⁺ đi vào qua kênh L-type cân bằng với dòng K⁺ đi ra (Đích tác động của Thuốc Nhóm IV).</li>
              <li><strong>Pha 3 (Tái cực nhanh)</strong>: Kênh Ca²⁺ đóng, dòng K⁺ (I_Kr, I_Ks) đi ra ồ ạt đưa điện thế màng về âm (Đích ức chế của Thuốc Nhóm III).</li>
              <li><strong>Pha 4 (Nghỉ và tự khử cực chậm)</strong>: Tại nút xoang và nút AV, dòng tạo nhịp I_f (Na⁺/K⁺) và Ca²⁺ typ T tự khử cực chậm (Chịu ức chế của Thuốc Nhóm II - chẹn beta và Ivabradine).</li>
            </ul>
          </div>
        </div>

        <h3 class="cs-topic-heading">2. Chi Tiết 4 Phân Nhóm Vaughan Williams</h3>
        <div style="overflow-x: auto; margin-bottom: 1rem;">
          <table class="cs-table">
            <thead>
              <tr>
                <th>Nhóm</th>
                <th>Hoạt chất chính</th>
                <th>Cơ chế điện sinh lý</th>
                <th>Ảnh hưởng ECG &amp; Lâm sàng</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>IA</strong></td>
                <td>Quinidin, Procainamid, Disopyramid</td>
                <td>Chẹn kênh Na⁺ mức độ vừa, đồng thời chẹn kênh K⁺ pha 3 &rarr; kéo dài thời gian điện thế hoạt động (APD) và thời kỳ trơ (ERP).</td>
                <td>Kéo dài QRS và kéo dài khoảng QT &rarr; <strong>nguy cơ Xoắn đỉnh (Torsades de Pointes)</strong>. Procainamid gây Lupus ban đỏ do thuốc; Disopyramid kháng cholinergic mạnh (bí tiểu, khô miệng).</td>
              </tr>
              <tr>
                <td><strong>IB</strong></td>
                <td>Lidocain, Mexiletin</td>
                <td>Chẹn kênh Na⁺ yếu, rút ngắn pha 3 &rarr; rút ngắn APD. Gắn ưu thế trên mô cơ tim bị thiếu máu cục bộ hoặc khử cực nhanh.</td>
                <td>Không đổi khoảng QT. <strong>Lựa chọn số 1 cho loạn nhịp thất sau nhồi máu cơ tim cấp</strong> hoặc do ngộ độc Digoxin. Lidocain chỉ tiêm tĩnh mạch; Mexiletin dùng đường uống.</td>
              </tr>
              <tr>
                <td><strong>IC</strong></td>
                <td>Flecainid, Propafenon</td>
                <td>Chẹn kênh Na⁺ rất mạnh, phân ly cực chậm &rarr; làm chậm dẫn truyền rất mạnh, không thay đổi APD hay QT.</td>
                <td>QRS giãn rộng. <strong>Thử nghiệm CAST: Tăng gấp 2.5 lần tỷ lệ tử vong sau nhồi máu cơ tim</strong> &rarr; Chống chỉ định trên bệnh nhân có bệnh tim thực thể/suy tim. Propafenon có thêm tính chẹn beta nhẹ.</td>
              </tr>
              <tr>
                <td><strong>II</strong></td>
                <td>Propranolol, Metoprolol, Bisoprolol, Esmolol</td>
                <td>Chẹn thụ thể β-adrenergic &rarr; giảm nồng độ cAMP, giảm tính tự động nút xoang (Pha 4) và làm chậm dẫn truyền nút AV.</td>
                <td>Kéo dài khoảng PR. <strong>Nhóm duy nhất được chứng minh làm giảm tỷ lệ đột tử và kéo dài sống còn sau nhồi máu cơ tim</strong>. Esmolol tiêm TM bán thải cực ngắn 9 phút (chuyển hóa bởi esterase hồng cầu).</td>
              </tr>
              <tr>
                <td><strong>III</strong></td>
                <td>Amiodaron, Sotalol, Ibutilide, Dofetilide, Dronedaron</td>
                <td>Chẹn chọn lọc kênh K⁺ pha 3 &rarr; kéo dài thời gian điện thế hoạt động và khoảng QT rất mạnh.</td>
                <td>Kéo dài QT. <strong>Amiodaron phổ chống loạn nhịp rộng nhất</strong>, dùng được cả rung nhĩ và loạn nhịp thất suy tim. Ibutilide/Dofetilide chuyên chuyển nhịp rung nhĩ cấp.</td>
              </tr>
              <tr>
                <td><strong>IV</strong></td>
                <td>Verapamil, Diltiazem</td>
                <td>Chẹn kênh Calci typ L tại nút xoang và nút nhĩ thất &rarr; chậm dẫn truyền AV và kéo dài thời kỳ trơ nút AV.</td>
                <td>Kéo dài PR. Cắt cơn và kiểm soát nhịp nhĩ trong nhịp nhanh trên thất (PSVT), rung nhĩ. Chống chỉ định suy tim EF giảm.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="cs-topic-heading">3. Thuốc Chống Loạn Nhịp Đặc Biệt Ngoài Phân Loại</h3>
        <div class="cs-point-card">
          <div class="cs-point-title">⚡ Adenosin & Magnesi Sulfat</div>
          <div class="cs-point-desc">
            <ul>
              <li><strong>Adenosin (Thuốc cắt cơn nhịp nhanh trên thất số 1)</strong>: Gắn vào thụ thể purinergic A₁ trên nút AV, mở kênh K⁺ nhạy cảm acetylcholin và ức chế kênh Ca²⁺ &rarr; làm ưu phân cực màng và phong bế hoàn toàn dẫn truyền nhĩ thất trong vài giây. <em>Đặc điểm dược động học</em>: Bị bắt giữ vào hồng cầu và thoái giáng bởi enzym adenosin deaminase cực nhanh (T1/2 < 10 giây) &rarr; bắt buộc tiêm tĩnh mạch bolus thật nhanh qua đường truyền tĩnh mạch lớn gần tim. Bị Theophyllin và Caffein đối kháng cạnh tranh; bị Dipyridamol làm tăng tác dụng.</li>
              <li><strong>Magnesi sulfat (MgSO₄ tiêm tĩnh mạch)</strong>: Thuốc lựa chọn cấp cứu hàng đầu để cắt cơn <strong>nhịp nhanh thất Xoắn đỉnh (Torsades de Pointes)</strong> bằng cách ức chế dòng calci nội bào làm triệt tiêu điện thế hậu khử cực sớm (EADs).</li>
            </ul>
          </div>
        </div>

        <div class="golden-box" style="background: rgba(220, 38, 38, 0.08); border-left: 5px solid var(--danger); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
          <h4 style="color: var(--danger); margin: 0 0 0.5rem 0; font-size: 1rem;">🎯 ĐIỂM CHÚ Ý ĐẶC BIỆT &amp; BẪY THI BÀI 4:</h4>
          <ul style="margin: 0; padding-left: 1.2rem; color: var(--text-main); font-size: 0.9rem;">
            <li><strong>Độc tính đa cơ quan của Amiodaron</strong>: Phân tử chứa 37% Iod theo trọng lượng và có cấu trúc tương tự hormon giáp. Tích lũy cực kỳ lâu trong mô mỡ (T1/2 = 40-60 ngày). Gây độc:
              <br>&bull; <em>Phổi</em>: Viêm phổi kẽ và xơ phổi tiến triển (biến chứng nguy hiểm nhất, tử vong).
              <br>&bull; <em>Tuyến giáp</em>: Suy giáp (hiệu ứng Wolff-Chaikoff do quá tải iod) hoặc Cường giáp (hiệu ứng Jod-Basedow).
              <br>&bull; <em>Mắt</em>: Lắng đọng vi thể ở giác mạc (Corneal microdeposits) thấy ở hầu hết người dùng trên 6 tháng.
              <br>&bull; <em>Da</em>: Nhạy cảm ánh sáng và đổi màu da xanh xám đá phiến (Blue-gray skin discoloration).
            </li>
            <li><strong>Thảm họa CAST với Flecainid/Encainid</strong>: Thuốc chống loạn nhịp có thể tự nó gây loạn nhịp tim (Proarrhythmia). Thử nghiệm CAST chứng minh Flecainid làm tăng tử vong ở bệnh nhân sau nhồi máu cơ tim có ngoại tâm thu thất.</li>
            <li><strong>Cấm thuốc chậm nút AV trong Hội chứng WPW kèm rung nhĩ</strong>: Rung nhĩ có đường dẫn truyền phụ (cầu Kent) tuyệt đối cấm dùng Digoxin, Verapamil, Diltiazem, Adenosin vì chặn nút AV sẽ đẩy toàn bộ xung động qua cầu Kent dẫn tới rung thất tử vong tức khắc!</li>
          </ul>
        </div>
        </div>
    </div>

    <!-- BÀI 5: THUỐC LỢI NIỆU -->
    <div class="chapter-accordion-item dl2-searchable-item" id="dl2-item-dl2_ch5">
      <div class="chapter-accordion-header ${dl2OpenAccordions['dl2_ch5'] ? 'active' : ''}" id="dl2-head-dl2_ch5" onclick="toggleDl2Accordion('dl2_ch5')">
        <div class="chapter-acc-title-group">
          <span class="cs-pill cs-pill-primary">🔥 2 Tiết • 4 Câu</span>
          <span class="chapter-acc-title">Bài 5: Thuốc Lợi Niệu (Quai Henle, Thiazid, Giữ Kali, Thẩm Thấu)</span>
        </div>
        <span class="chapter-acc-arrow">▼</span>
      </div>
      <div class="chapter-accordion-body" id="dl2-body-dl2_ch5" style="display: ${dl2OpenAccordions['dl2_ch5'] ? 'block' : 'none'};">
<!-- BÀI 5: THUỐC LỢI NIỆU -->
        <div class="cs-section-badge">💊 Dược Lý Học Trọng Tâm: Bài 5</div>
        <h3 class="cs-topic-heading">1. Vị Trí Tác Động & Phân Nhóm Theo Sinh Lý Nephron</h3>
        <div class="cs-point-card">
          <div class="cs-point-title">🌊 Cơ Chế Vận Chuyển Ion Tại Từng Đoạn Nephron</div>
          <div class="cs-point-desc">
            <ul>
              <li><strong>Ống lượn gần (Tái hấp thu 65% Na⁺)</strong>: Hệ trao đổi Na⁺/H⁺ và enzym Carbonic Anhydrase (CA). Đích tác động của <strong>Acetazolamid</strong>.</li>
              <li><strong>Nhánh lên quai Henle (Tái hấp thu 25% Na⁺)</strong>: Kênh đồng vận chuyển Na⁺/K⁺/2Cl⁻. Đích tác động của <strong>Lợi tiểu quai (Furosemid, Bumetanid, Torsemid, Acid ethacrynic)</strong>. Hiệu lực bài niệu mạnh nhất trong các nhóm ("lợi tiểu trần cao").</li>
              <li><strong>Đoạn đầu ống lượn xa (Tái hấp thu 5-10% Na⁺)</strong>: Kênh đồng vận chuyển Na⁺/Cl⁻. Đích tác động của <strong>Thiazid (HCTZ, Chlorthalidon) và Thiazid-like (Indapamid, Metolazon)</strong>.</li>
              <li><strong>Ống góp vỏ (Tái hấp thu 2-5% Na⁺)</strong>: Kênh biểu mô Natri (ENaC) nhạy cảm aldosteron. Tái hấp thu Na⁺ bài tiết K⁺ và H⁺. Đích tác động của <strong>Thuốc giữ Kali (Spironolacton, Eplerenon, Amilorid, Triamteren)</strong>.</li>
              <li><strong>Ống góp tủy</strong>: Thụ thể Vasopressin V₂ điều hòa kênh nước Aquaporin-2. Đích tác động của <strong>Vaptans (Tolvaptan, Conivaptan)</strong>.</li>
            </ul>
          </div>
        </div>

        <h3 class="cs-topic-heading">2. So Sánh Chi Tiết Lợi Tiểu Quai vs Lợi Tiểu Thiazid</h3>
        <div style="overflow-x: auto; margin-bottom: 1rem;">
          <table class="cs-table">
            <thead>
              <tr>
                <th>Tiêu chí so sánh</th>
                <th>Lợi tiểu quai (Furosemid)</th>
                <th>Lợi tiểu Thiazid (HCTZ, Indapamid)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Vị trí &amp; Đích sinh học</strong></td>
                <td>Nhánh lên quai Henle &bull; Kênh Na⁺/K⁺/2Cl⁻</td>
                <td>Ống lượn xa &bull; Kênh Na⁺/Cl⁻</td>
              </tr>
              <tr>
                <td><strong>Hiệu lực bài niệu</strong></td>
                <td>Rất mạnh (thải trừ tới 20-25% lượng Na⁺ lọc)</td>
                <td>Trung bình (thải trừ 5% lượng Na⁺ lọc)</td>
              </tr>
              <tr>
                <td><strong>Ảnh hưởng trên Calci máu</strong></td>
                <td><strong>HẠ CALCI MÁU</strong> (tăng bài xuất Ca²⁺ qua nước tiểu do mất điện thế dương lòng ống)</td>
                <td><strong>TĂNG CALCI MÁU</strong> (tăng tái hấp thu Ca²⁺ tại ống lượn xa &rarr; có lợi cho người loãng xương)</td>
              </tr>
              <tr>
                <td><strong>Hiệu lực khi suy thận</strong></td>
                <td><strong>Vẫn có hiệu lực khi suy thận nặng (GFR &lt; 30 mL/phút)</strong></td>
                <td><strong>Mất hiệu lực khi GFR &lt; 30 mL/phút</strong> (ngoại trừ Indapamid và Metolazon)</td>
              </tr>
              <tr>
                <td><strong>Chỉ định ưu tiên</strong></td>
                <td>Phù phổi cấp, suy tim cấp ứ huyết, suy thận cấp/mạn, tăng calci máu cấp tính</td>
                <td>Tăng huyết áp vô căn (first-line), phù do suy tim mạn nhẹ, sỏi thận calci tái phát</td>
              </tr>
              <tr>
                <td><strong>Độc tính đặc thù</strong></td>
                <td>Độc tính trên ốc tai gây điếc tai không hồi phục (Ototoxicity)</td>
                <td>Rối loạn chuyển hóa: Tăng acid uric máu (bùng phát Gút cấp), tăng glucose máu, rối loạn lipid máu</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="cs-topic-heading">3. Thuốc Lợi Tiểu Giữ Kali & Lợi Tiểu Thẩm Thấu</h3>
        <div class="cs-point-card">
          <div class="cs-point-title">🛡️ Kháng Aldosteron, Chẹn ENaC & Manitol</div>
          <div class="cs-point-desc">
            <ul>
              <li><strong>Spironolacton</strong>: Kháng cạnh tranh aldosteron tại thụ thể mineralocorticoid trong nhân tế bào chính ống góp. Tác dụng xuất hiện chậm sau 2-3 ngày do cần thời gian thay đổi phiên mã gen. Cấu trúc steroid gây tác dụng phụ kháng androgen: <strong>Vú to ở nam giới (Gynecomastia), đau núm vú, giảm ham muốn tình dục, rối loạn kinh nguyệt</strong>.</li>
              <li><strong>Eplerenon</strong>: Kháng aldosteron chọn lọc cao, hầu như không gắn thụ thể estrogen và androgen &rarr; không gây tác dụng phụ vú to ở nam.</li>
              <li><strong>Amilorid & Triamteren</strong>: Chẹn trực tiếp kênh biểu mô Natri ENaC ở màng đỉnh tế bào ống góp không phụ thuộc aldosteron &rarr; tác dụng nhanh hơn spironolacton.</li>
              <li><strong>Manitol (Lợi tiểu thẩm thấu)</strong>: Dung dịch đường phân tử không chuyển hóa, lọc tự do qua cầu thận không được tái hấp thu &rarr; tăng áp lực thẩm thấu dịch lọc hút nước từ mô vào lòng ống. <em>Chỉ định số 1</em>: Chống phù não, hạ áp lực nội sọ sau chấn thương sọ não và hạ nhãn áp trong glaucom cấp. Bắt buộc tiêm truyền TM. Chống chỉ định trong suy tim sung huyết và phù phổi cấp vì làm tăng gánh thể tích tuần hoàn ban đầu.</li>
              <li><strong>Vaptans (Tolvaptan, Conivaptan)</strong>: Đối kháng chọn lọc thụ thể Vasopressin V₂ tại ống góp. Gây thải trừ nước tự do qua nước tiểu mà không làm mất điện giải (Aquaretics). Chỉ định hàng đầu: Hội chứng tăng tiết ADH không thích hợp (SIADH) và hạ Natri máu do ứ dịch trong suy tim, xơ gan.</li>
            </ul>
          </div>
        </div>

        <div class="golden-box" style="background: rgba(220, 38, 38, 0.08); border-left: 5px solid var(--danger); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
          <h4 style="color: var(--danger); margin: 0 0 0.5rem 0; font-size: 1rem;">🎯 ĐIỂM CHÚ Ý ĐẶC BIỆT &amp; BẪY THI BÀI 5:</h4>
          <ul style="margin: 0; padding-left: 1.2rem; color: var(--text-main); font-size: 0.9rem;">
            <li><strong>Bẫy Calci máu (Quai vs Thiazid)</strong>: "Quai thải, Thiazid giữ". Furosemid làm tăng đào thải calci niệu &rarr; hạ calci máu (dùng trị tăng calci máu cấp). Ngược lại, Thiazid làm giảm đào thải calci &rarr; tăng calci máu (có lợi ngừa loãng xương và sỏi thận calci).</li>
            <li><strong>Bẫy Dị ứng chéo Sulfonamid</strong>: Furosemid, Bumetanid, Thiazid, Indapamid và Acetazolamid đều chứa nhóm chức sulfonamid (-SO₂NH₂) &rarr; có nguy cơ dị ứng chéo nặng (hội chứng Stevens-Johnson). Nếu bệnh nhân dị ứng sulfamid nặng cần lợi tiểu quai, thuốc thay thế bắt buộc duy nhất là <strong>Acid Ethacrynic</strong> (dẫn chất acid phenoxyacetic không chứa nhóm sulfonamid).</li>
            <li><strong>Tăng Kali máu ác tính do phối hợp thuốc</strong>: Phối hợp thuốc lợi tiểu giữ Kali (Spironolacton, Amilorid) với thuốc ức chế men chuyển (ACEI) hoặc chẹn thụ thể (ARB) hoặc NSAID làm tăng vọt Kali máu dẫn đến loạn nhịp thất ngừng tim.</li>
            <li><strong>Acetazolamid phòng chứng Say độ cao (AMS)</strong>: Ức chế CA làm mất kiềm qua nước tiểu, gây toan chuyển hóa nhẹ bù trừ &rarr; kích thích trung khu hô hấp ở hành não tăng thông khí, giúp thích nghi với môi trường thiếu oxy trên núi cao.</li>
          </ul>
        </div>
        </div>
    </div>

    <!-- BÀI 6: THUỐC ĐIỀU TRỊ DDTT -->
    <div class="chapter-accordion-item dl2-searchable-item" id="dl2-item-dl2_ch6">
      <div class="chapter-accordion-header ${dl2OpenAccordions['dl2_ch6'] ? 'active' : ''}" id="dl2-head-dl2_ch6" onclick="toggleDl2Accordion('dl2_ch6')">
        <div class="chapter-acc-title-group">
          <span class="cs-pill cs-pill-primary">🔥 2 Tiết • 4 Câu</span>
          <span class="chapter-acc-title">Bài 6: Thuốc Điều Trị Loét Dạ Dày - Tá Tràng (PPI, Kháng H2, Antacid, Diệt HP)</span>
        </div>
        <span class="chapter-acc-arrow">▼</span>
      </div>
      <div class="chapter-accordion-body" id="dl2-body-dl2_ch6" style="display: ${dl2OpenAccordions['dl2_ch6'] ? 'block' : 'none'};">
<!-- BÀI 6: THUỐC ĐIỀU TRỊ LOÉT DẠ DÀY TÁ TRÀNG -->
        <div class="cs-section-badge">💊 Dược Lý Học Trọng Tâm: Bài 6</div>
        <h3 class="cs-topic-heading">1. Sinh Lý Bệnh Tiết Acid & Đích Sinh Học Tế Bào Viền</h3>
        <div class="cs-point-card">
          <div class="cs-point-title">🔬 Bơm Proton H⁺/K⁺-ATPase & 3 Con Đường Kích Thích</div>
          <div class="cs-point-desc">
            <ul>
              <li><strong>Bơm Proton H⁺/K⁺-ATPase</strong>: Là enzym vận chuyển tích cực nằm tại màng vi quản tiết của tế bào viền niêm mạc dạ dày. Đây là <strong>chặng cuối cùng và duy nhất</strong> bài tiết ion H⁺ vào lòng dạ dày để tạo acid clohydric (HCl) đổi lấy ion K⁺.</li>
              <li><strong>3 thụ thể kích thích tiết acid trên tế bào viền</strong>:
                <br>&bull; <em>Thụ thể Histamin H₂</em>: Gắn Histamin do tế bào ECL tiết ra &rarr; hoạt hóa Protein Gs &rarr; kích hoạt Adenylate Cyclase làm tăng cAMP nội bào.
                <br>&bull; <em>Thụ thể Gastrin CCK₂</em>: Gắn Gastrin do tế bào G vùng hang vị tiết ra &rarr; hoạt hóa Protein Gq &rarr; tăng nồng độ Ca²⁺ tự do nội bào.
                <br>&bull; <em>Thụ thể Muscarinic M₃</em>: Kích thích bởi dây thần kinh X phóng thích Acetylcholin &rarr; hoạt hóa Protein Gq &rarr; tăng nồng độ Ca²⁺ nội bào.
              </li>
              <li><strong>Cân bằng tấn công - bảo vệ</strong>: Yếu tố tấn công (HCl, Pepsin, H. pylori, NSAIDs, rượu, stress) vượt trội yếu tố bảo vệ (chất nhầy mucin, bicacbonat, tưới máu niêm mạc, prostaglandin E₂/I₂).</li>
            </ul>
          </div>
        </div>

        <h3 class="cs-topic-heading">2. Thuốc Ức Chế Bơm Proton (PPI) & Kháng H2</h3>
        <div class="cs-point-card">
          <div class="cs-point-title">💊 Dược Động Học Tinh Vi Của PPI</div>
          <div class="cs-point-desc">
            <ul>
              <li><strong>Cơ chế tiền chất hoạt hóa tại chỗ</strong>: PPI (Omeprazol, Esomeprazol, Pantoprazol, Rabeprazol, Lansoprazol) là các base yếu tan trong lipid. Bắt buộc phải bào chế dưới dạng <strong>viên bao tan trong ruột</strong> để không bị acid dịch vị phá hủy sớm. Thuốc được hấp thu tại ruột non vào tuần hoàn, theo máu đến tế bào viền và khuếch tán vào các vi quản tiết có môi trường cực toan (pH &lt; 2). Tại đây, PPI bị proton hóa thành chất trung gian Acid Sulfenic rồi chuyển thành <strong>Sulphenamid</strong> có hoạt tính. Sulphenamid tạo liên kết cộng hóa trị disulfid (-S-S-) không hồi phục với nhóm sulfhydryl của Cystein trên bơm H⁺/K⁺-ATPase &rarr; <strong>ức chế không hồi phục bơm proton</strong>.</li>
              <li><strong>Thời điểm uống thuốc vàng</strong>: Bơm proton chỉ được huy động ra màng vi quản nhiều nhất sau khi có kích thích từ bữa ăn. Do đó, PPI phải được <strong>uống trước bữa ăn sáng từ 30 đến 60 phút</strong> khi bụng đói để thuốc đạt nồng độ đỉnh trong máu đúng lúc các bơm proton được huy động tối đa.</li>
              <li><strong>Tác dụng phụ dùng PPI kéo dài</strong>:
                <br>&bull; <em>Tăng nguy cơ gãy xương</em>: Giảm acid dạ dày kéo dài cản trở quá trình hòa tan và hấp thu calci vô cơ từ thức ăn &rarr; kích thích tuyến cận giáp tăng tiết PTH gây tiêu xương (đặc biệt gãy cổ xương đùi ở người già).
                <br>&bull; <em>Giảm hấp thu Vitamin B12 và Sắt</em>: Acid cần để tách B12 khỏi protein và khử Fe³⁺ thành Fe²⁺.
                <br>&bull; <em>Nhiễm trùng tiêu hóa và hô hấp</em>: Mất hàng rào acid bảo vệ tạo điều kiện cho vi khuẩn phát triển (viêm đại tràng giả mạc do <em>Clostridium difficile</em>, viêm phổi cộng đồng).
                <br>&bull; <em>Hiện tượng tăng tiết acid hồi ứng (Rebound hypersecretion)</em>: Ngừng thuốc đột ngột sau thời gian dài bị ợ nóng dữ dội do tăng nồng độ Gastrin máu bù trừ gây phì đại tế bào viền.
              </li>
              <li><strong>Thuốc kháng thụ thể H₂ (Cimetidin, Famotidin, Ranitidin)</strong>: Ức chế cạnh tranh chọn lọc tại thụ thể H₂ tế bào viền. Hiệu quả ức chế acid kém hơn PPI (chỉ ức chế 60-70% acid 24h, chủ yếu ức chế tiết acid ban đêm). Xảy ra hiện tượng dung nạp nhanh (Tachyphylaxis) sau 7-14 ngày dùng. <em>Cimetidin</em> ức chế mạnh CYP450 và kháng androgen gây vú to ở nam giới.</li>
            </ul>
          </div>
        </div>

        <h3 class="cs-topic-heading">3. Thuốc Bảo Vệ Niêm Mạc Dạ Dày & Antacid</h3>
        <div class="cs-point-card">
          <div class="cs-point-title">🛡️ Sucralfat, Bismuth, Misoprostol & Antacid</div>
          <div class="cs-point-desc">
            <ul>
              <li><strong>Sucralfat</strong>: Phức hợp của nhôm hydroxyd và sucrose octasulfat. Trong môi trường acid dạ dày (pH &lt; 4), phân tử bị polymer hóa tạo thành một lớp gel dính có điện tích âm, gắn chọn lọc vào các protein mang điện tích dương tại đáy ổ loét, tạo hàng rào cơ học ngăn acid và pepsin tấn công; đồng thời kích thích tiết PG và dịch nhầy. <em>Lưu ý</em>: Cần môi trường acid để hoạt hóa, nên uống cách xa Antacid hoặc PPI ít nhất 2 giờ.</li>
              <li><strong>Bismuth subsalicylat / Bismuth subcitrat</strong>: Bao phủ ổ loét, kích thích tiết prostaglandin và có tác dụng <strong>diệt khuẩn trực tiếp chống lại vi khuẩn Helicobacter pylori</strong>. Làm <strong>phân và lưỡi có màu đen nhánh</strong> vô hại (do tạo muối Bismuth sulfid).</li>
              <li><strong>Misoprostol</strong>: Chất tương tự Prostaglandin E₁ tổng hợp. Gắn thụ thể EP₃ trên tế bào viền ức chế tiết acid, đồng thời kích thích tế bào biểu mô tiết chất nhầy và bicacbonat. Chỉ định chuyên biệt: <strong>Dự phòng và điều trị loét dạ dày do thuốc chống viêm không steroid (NSAIDs)</strong>. Tác dụng phụ: Tiêu chảy nhiều, đau quặn bụng, co bóp tử cung gây sảy thai.</li>
              <li><strong>Antacid (Thuốc kháng acid)</strong>: Trung hòa acid dịch vị có sẵn, nâng pH dạ dày lên > 3.5. Nhôm hydroxyd gây táo bón và giảm phosphat máu; Magnesi hydroxyd gây tiêu chảy thẩm thấu. Phối hợp cả hai (Maalox) để triệt tiêu tác dụng phụ trên nhu động ruột. Natri bicarbonat hấp thu toàn thân gây kiềm hóa máu chuyển hóa và hội chứng kiềm - sữa.</li>
            </ul>
          </div>
        </div>

        <div class="golden-box" style="background: rgba(220, 38, 38, 0.08); border-left: 5px solid var(--danger); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
          <h4 style="color: var(--danger); margin: 0 0 0.5rem 0; font-size: 1rem;">🎯 ĐIỂM CHÚ Ý ĐẶC BIỆT &amp; BẪY THI BÀI 6:</h4>
          <ul style="margin: 0; padding-left: 1.2rem; color: var(--text-main); font-size: 0.9rem;">
            <li><strong>Tương tác Omeprazol và Clopidogrel</strong>: Clopidogrel là tiền chất cần enzym CYP2C19 ở gan hoạt hóa. Omeprazol ức chế mạnh CYP2C19 làm giảm tạo chất chuyển hóa có hoạt tính của Clopidogrel &rarr; tăng nguy cơ huyết khối tắc stent mạch vành và nhồi máu cơ tim tái phát. Khi cần dùng kèm PPI cho bệnh nhân uống Clopidogrel, lựa chọn ưu tiên là <strong>Pantoprazol</strong> (chuyển hóa qua con đường khác, ít ức chế CYP2C19 nhất).</li>
            <li><strong>Chống chỉ định tuyệt đối của Misoprostol</strong>: Cấm dùng cho phụ nữ có thai vì thuốc kích thích co bóp tử cung mạnh gây sảy thai hoặc dị tật thai nhi (hội chứng Moebius).</li>
            <li><strong>Quy tắc làm Test hơi thở Ure (UBT) chẩn đoán H. pylori</strong>: Bệnh nhân bắt buộc phải <strong>ngừng PPI tối thiểu 2 tuần</strong> và <strong>ngừng kháng sinh / Bismuth tối thiểu 4 tuần</strong> trước khi làm test hơi thở hoặc xét nghiệm kháng nguyên phân, nếu không sẽ bị <strong>âm tính giả</strong> do thuốc ức chế tạm thời enzym urease của vi khuẩn.</li>
          </ul>
        </div>
        </div>
    </div>

    <!-- BÀI 7: THUỐC CHỐNG GIUN SÁN, AMIBE -->
    <div class="chapter-accordion-item dl2-searchable-item" id="dl2-item-dl2_ch7">
      <div class="chapter-accordion-header ${dl2OpenAccordions['dl2_ch7'] ? 'active' : ''}" id="dl2-head-dl2_ch7" onclick="toggleDl2Accordion('dl2_ch7')">
        <div class="chapter-acc-title-group">
          <span class="cs-pill cs-pill-primary">🔥 2 Tiết • 4 Câu</span>
          <span class="chapter-acc-title">Bài 7: Thuốc Chống Giun Sán &amp; Amip (Toàn bộ thuốc Trị Giun, Sán &amp; Amip Chuẩn BYT)</span>
        </div>
        <span class="chapter-acc-arrow">▼</span>
      </div>
      <div class="chapter-accordion-body" id="dl2-body-dl2_ch7" style="display: ${dl2OpenAccordions['dl2_ch7'] ? 'block' : 'none'};">
        <div class="chapter-sec-heading">🎯 1. Thuốc Trị Giun (Nematodes):</div>
        <ul class="chapter-point-list">
          <li><strong>Nhóm Benzimidazol (Albendazol, Mebendazol, Thiabendazol):</strong>
            <br>&bull; <em>Cơ chế chung:</em> Gắn chọn lọc vào <strong>β-tubulin</strong> của ký sinh trùng → ức chế quá trình trùng hợp vi ống (microtubules) → ngăn cản thu nhận và sử dụng glucose → giun cạn kiệt glycogen, bất động và chết.
            <br>&bull; <em>Albendazol:</em> Phổ rộng nhất (giun đũa, giun kim, giun móc, giun tóc). Uống lúc đói để trị giun đường ruột; bắt buộc <strong>uống cùng bữa ăn giàu chất béo</strong> để tăng hấp thu gấp 4 &minus; 5 lần khi điều trị ấu trùng sán mô bào (ấu trùng sán lợn ở não <em>Cysticercosis</em>, nang sán chó <em>Echinococcus</em>).
            <br>&bull; <em>Mebendazol:</em> Ít hấp thu qua ruột (&lt; 10%), dùng liều duy nhất 500 mg tẩy giun định kỳ đường ruột cho cộng đồng.
            <br>&bull; <em>Thiabendazol:</em> Độc tính cao hơn, dùng điều trị hội chứng ấu trùng giun di chuyển dưới da/nội tạng (<em>Cutaneous larva migrans</em>) và giun lươn.
            <br>&bull; <em>Chống chỉ định chung:</em> Phụ nữ có thai (nhất là 3 tháng đầu &minus; nguy cơ gây quái thai), trẻ em dưới 1 &minus; 2 tuổi, người suy gan nặng.
          </li>
          <li><strong>Pyrantel pamoat:</strong> Khử cực khớp nối thần kinh &minus; cơ của giun qua kích thích mạnh thụ thể nicotinic và ức chế enzym cholinesterase → gây <strong>liệt cứng cơ giun</strong> → tống giun ra ngoài theo nhu động ruột mà không kích thích giun di chuyển chui ống mật. Dùng trị giun đũa, giun kim, giun móc.</li>
          <li><strong>Levamisol:</strong> Tác động như chất chủ vận hạch thần kinh gây <strong>liệt cứng cơ giun</strong>. Ngoài ra, thuốc còn có tác dụng <strong>điều hòa và kích thích miễn dịch</strong> (phục hồi chức năng lympho T). <em>Độc tính:</em> Nguy cơ mất bạch cầu hạt đặc ứng.</li>
          <li><strong>Piperazin:</strong> Gắn vào thụ thể GABA tại cơ giun → mở kênh clo, ưu phân cực màng, phong bế dẫn truyền acetylcholin tại synap thần kinh &minus; cơ → gây <strong>liệt mềm giun</strong>. Giun bị tống ra ngoài <strong>khi vẫn còn sống</strong> (không bị phân rã, không phóng thích độc tố).</li>
          <li><strong>Ivermectin:</strong> Gắn chọn lọc vào <strong>kênh Clo phụ thuộc Glutamat (GluCl)</strong> ở tế bào thần kinh và cơ của ký sinh trùng → tăng tính thấm ion Cl⁻ → ưu phân cực màng và gây <strong>liệt mềm giun</strong>. Thuốc số 1 điều trị <strong>Bệnh giun chỉ Onchocerca volvulus</strong> (gây mù sông), <strong>Bệnh ấu trùng giun lươn (Strongyloides stercoralis)</strong> đường ruột lan tỏa, và <strong>Bệnh cái ghẻ (Sarcoptes scabiei)</strong> kháng thuốc bôi.</li>
          <li><strong>Diethylcarbamazin (DEC / Hetrazan):</strong> Dẫn xuất piperazin làm biến đổi bề mặt màng ấu trùng giun chỉ để hệ miễn dịch thực bào. Thuốc lựa chọn số 1 trị <strong>Bệnh giun chỉ bạch huyết</strong> (<em>Wuchereria bancrofti</em>, <em>Brugia malayi</em> &minus; gây phù chân voi). <em>Lưu ý Phản ứng Mazzotti:</em> Do xác ấu trùng giun chỉ chết hàng loạt phóng thích kháng nguyên ồ ạt → sốt cao, tụt huyết áp, nổi mày đay, sưng đau hạch bạch huyết.</li>
        </ul>

        <div class="chapter-sec-heading">🐛 2. Thuốc Trị Sán (Cestodes &amp; Trematodes):</div>
        <ul class="chapter-point-list">
          <li><strong>Praziquantel:</strong> Thuốc lựa chọn hàng đầu cho hầu hết các loại sán lá và sán dây.
            <br>&bull; <em>Cơ chế:</em> Làm tăng đột ngột tính thấm màng tế bào sán với ion <strong>Ca²⁺</strong> → Ca²⁺ tràn vào bào tương gây <strong>co cứng cơ toàn thân sán tức thì</strong>; đồng thời làm phồng rộp và phân rã lớp vỏ biểu bì bọc ngoài sán → bộc lộ kháng nguyên cho hệ thống miễn dịch vật chủ tiêu diệt.
            <br>&bull; <em>Chỉ định:</em> Sán lá gan nhỏ (<em>Clonorchis sinensis</em>), sán lá phổi (<em>Paragonimus</em>), tất cả các loài <strong>sán máng (Schistosoma)</strong>, sán dây bò, sán dây lợn, và ấu trùng sán lợn ở não (phối hợp Dexamethason chống phù não).
          </li>
          <li><strong>Triclabendazol:</strong> Dẫn xuất benzimidazol đặc biệt, là <strong>thuốc đặc hiệu số 1 duy nhất điều trị Sán lá gan lớn (Fasciola hepatica, Fasciola gigantica)</strong> tại Việt Nam (Praziquantel kém nhạy cảm với sán lá gan lớn). Cơ chế ức chế trùng hợp vi ống của sán. Uống sau bữa ăn nhiều dầu mỡ.</li>
          <li><strong>Niclosamid:</strong> Diệt sán dây tại chỗ trong lòng ống tiêu hóa (ức chế phosphoryl oxy hóa ở ty thể của sán). Thuốc diệt đầu và đốt sán dải lợn (<em>Taenia solium</em>) nhưng <strong>không diệt được trứng sán</strong>. Đốt rã phóng thích trứng; nếu nở thành ấu trùng xuyên thành ruột lên não sẽ gây bệnh ấu trùng sán lợn ở não (<em>Cysticercosis</em>) tử vong → <strong>BẮT BUỘC uống thuốc nhuận tràng muối (Magnesi sulfat) sau 2 giờ</strong> để tống nhanh đốt và trứng sán ra ngoài!</li>
          <li><strong>Oxamniquin:</strong> Thuốc đặc hiệu thay thế điều trị sán máng <em>Schistosoma mansoni</em> bằng cách gắn vào DNA làm ngừng tổng hợp acid nucleic của sán.</li>
        </ul>

        <div class="chapter-sec-heading">🦠 3. Thuốc Trị Amip (Entamoeba histolytica):</div>
        <ul class="chapter-point-list">
          <li><strong>Thuốc diệt amip ở mô (Metronidazol, Tinidazol, Secnidazol, Ornidazol):</strong>
            <br>&bull; <em>Cơ chế:</em> Nhóm nitro (-NO₂) bị enzym ferredoxin của ký sinh trùng khử thành các gốc tự do nitro ngắn hạn phá hủy chuỗi xoắn kép DNA.
            <br>&bull; <em>Phổ tác dụng:</em> Diệt thể hoạt động ăn hồng cầu (trophozoite) ở thành ruột, gan (áp xe gan amip), phổi, não; diệt trùng roi âm đạo <em>Trichomonas vaginalis</em> và vi khuẩn kỵ khí.
            <br>&bull; <em>Đặc tính từng thuốc:</em>
            <br>&minus; <strong>Metronidazol:</strong> Tác dụng nhanh, T1/2 = 8h. ADR: vị kim loại khó chịu, làm nước tiểu sẫm màu nâu đỏ, <strong>phản ứng giống Disulfiram khi dùng chung với rượu</strong> (ức chế aldehyde dehydrogenase → đỏ bừng mặt, nhức đầu, tụt huyết áp).
            <br>&minus; <strong>Tinidazol, Secnidazol, Ornidazol:</strong> Dẫn xuất thế hệ mới, T1/2 kéo dài hơn (Secnidazol T1/2 = 12 &minus; 14h), dung nạp tốt hơn, có thể dùng liều duy nhất.
          </li>
          <li><strong>Alkaloid Ipeca (Emetin &amp; Dehydroemetin):</strong>
            <br>&bull; <em>Cơ chế:</em> Ức chế tổng hợp protein amip bằng cách phong bế sự dịch mã chuỗi peptid trên ribosome. Tác dụng diệt amip thể mô cực mạnh.
            <br>&bull; <em>Độc tính tim mạch đặc thù:</em> Rất độc trên cơ tim (gây viêm cơ tim hoại tử, tụt huyết áp, loạn nhịp tim nguy hiểm, biến đổi sóng T và đoạn ST trên ECG). Chỉ tiêm khi không dung nạp hoặc thất bại với Metronidazol; <strong>chống chỉ định tuyệt đối cho người có bệnh tim mạch, phụ nữ có thai và trẻ nhỏ</strong>.
          </li>
          <li><strong>Chloroquin phosphat:</strong> Thuốc chống sốt rét nhưng có đặc tính <strong>tích lũy tập trung nồng độ tại nhu mô gan cao gấp 200 &minus; 500 lần nồng độ trong huyết tương</strong> → Thuốc lựa chọn tuyệt hảo để phối hợp điều trị <strong>Áp xe gan do amip</strong> (phối hợp với Metronidazol hoặc Emetin), không có tác dụng trên amip ở ruột.</li>
          <li><strong>Thuốc diệt amip trong lòng ruột (Diloxanid furoat, Paromomycin, Iodoquinol):</strong>
            <br>&bull; <em>Diloxanid furoat:</em> Thuốc số 1 diệt thể bào nang (cyst) amip trong lòng đại tràng. Hầu như không hấp thu vào máu, rất ít tác dụng phụ toàn thân. Bắt buộc dùng tiếp nối sau đợt Metronidazol để tiệt trừ mầm bệnh, ngừa tái phát và quét sạch người lành mang kén.
            <br>&bull; <em>Paromomycin:</em> Kháng sinh Aminoglycosid uống không hấp thu qua ruột, diệt kén amip tại chỗ, là thuốc an toàn hàng đầu điều trị amip ruột cho <strong>phụ nữ mang thai</strong>.
            <br>&bull; <em>Iodoquinol (Diiodohydroxyquin):</em> Dẫn xuất halogen của hydroxyquinolin diệt kén amip; lưu ý không dùng kéo dài vì nguy cơ tổn thương dây thần kinh thị giác.
          </li>
        </ul>

        <!-- BẢNG VÀNG: CÁC ĐIỂM CHÚ Ý ĐẶC BIỆT ĐỘC NHẤT VÔ NHỊ -->
        <div class="chapter-sec-heading" style="color: #dc2626;">🔥 3. Những Điểm Chú Ý Đặc Biệt &amp; Độc Nhất Vô Nhị (Chỉ Có Ở Thuốc Trị Giun Sán &amp; Amip - Trọng Tâm Đề Thi):</div>
        <div style="background: var(--surface-alt); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1.25rem; font-size: 0.88rem; line-height: 1.6;">
          <ul class="chapter-point-list" style="display: flex; flex-direction: column; gap: 0.75rem;">
            <li>
              <strong style="color: #2563eb;">1. Nghịch lý hấp thu chất béo: Trị giun đường ruột đói vs Trị sán mô no:</strong>
              <br>&bull; <em>Trị giun đường ruột (giun đũa, giun móc, giun tóc):</em> Uống Albendazole lúc bụng đói để thuốc ít hấp thu qua niêm mạc ruột, tập trung nồng độ tối đa tại lòng ống tiêu hóa để diệt giun tại chỗ.
              <br>&bull; <em>Trị ấu trùng sán mô bào (Nang sán chó Echinococcus, Ấu trùng sán lợn ở não):</em> Bắt buộc <strong>uống cùng bữa ăn giàu chất béo</strong> để tăng độ tan và tăng hấp thu vào máu gấp 4 - 5 lần thì thuốc mới ngấm tới các mô bào sâu!
            </li>
            <li>
              <strong style="color: #dc2626;">2. Phản ứng kiểu Disulfiram (Antabuse Effect) của Metronidazol khi uống rượu:</strong>
              <br>&bull; Metronidazol ức chế enzym Aldehyd dehydrogenase tại gan khiến acetaldehyd ứ đọng dữ dội khi uống rượu → gây đỏ bừng mặt, nhịp tim nhanh, nôn mửa dữ dội, tụt huyết áp. Cấm uống rượu trong suốt đợt dùng và sau khi ngừng thuốc ít nhất 48 - 72 giờ!
            </li>
            <li>
              <strong style="color: #7c3aed;">3. Cơ chế mở kênh Calci gây co cứng cơ sán lập tức của Praziquantel:</strong>
              <br>&bull; Praziquantel làm tăng vọt tính thấm của màng tế bào sán đối với ion Ca²⁺ → ion Ca²⁺ tràn vào bào tương gây co cứng cơ toàn thân sán tức thì, làm tổn thương và phân rã lớp vỏ ngoài, bộc lộ kháng nguyên cho hệ miễn dịch của vật chủ tấn công tiêu diệt.
            </li>
            <li>
              <strong style="color: #059669;">4. Nguyên tắc bắt buộc: Điều trị amip thể mô phải phối hợp thuốc diệt amip lòng ruột:</strong>
              <br>&bull; Metronidazol chỉ diệt thể amip hoạt động ăn hồng cầu ở mô (thành ruột, áp xe gan), hoàn toàn không diệt được thể bào nang amip trong lòng ruột → Sau đợt Metronidazol bắt buộc phải dùng tiếp thuốc diệt amip lòng ruột (như Diloxanid furoat) để tiệt trừ hoàn toàn mầm bệnh, tránh tái phát và ngừa người lành mang trùng.
            </li>
            <li>
              <strong style="color: #d97706;">5. Bẫy thoát ấu trùng sán dải lợn của Niclosamid:</strong>
              <br>&bull; Niclosamid giết chết đốt sán dây dải lợn (<em>Taenia solium</em>) nhưng không giết được trứng sán. Đốt sán bị phân rã giải phóng hàng triệu trứng sán trong lòng ruột; nếu trứng nở thành ấu trùng xuyên qua thành ruột vào máu lên não sẽ gây bệnh ấu trùng sán lợn ở não (Cysticercosis) cực kỳ nguy hiểm → Bắt buộc phải uống thuốc nhuận tràng muối (Magnesi sulfat) sau khi uống Niclosamid 2 giờ để tống sạch xác sán và trứng ra ngoài!
            </li>
          </ul>
        </div>

        <div class="exam-trap-box">
          <div class="exam-trap-title">🛑 Bẫy thi trắc nghiệm Bài 7:</div>
          &bull; <strong>Bẫy phối hợp điều trị lỵ amip:</strong> Metronidazol chỉ diệt amip ở mô chứ <strong>không diệt được thể kén trong lòng ruột</strong>! Do đó sau khi hết triệu chứng lỵ cấp bằng Metronidazol, bắt buộc phải uống thêm thuốc diệt kén (Diloxanid hoặc Paromomycin).
        </div>
        <div style="margin-top: 0.75rem;">
          <button class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.35rem 0.75rem;" onclick="jumpToDl2Topic('Thuốc chống giun sán, amibe')">
            🎯 Luyện đề trắc nghiệm Bài 7: Thuốc Chống Giun Sán &amp; Amip
          </button>
        </div>
      </div>
    </div>

    <!-- BÀI 8: THUỐC ĐC RLHH -->
    <div class="chapter-accordion-item dl2-searchable-item" id="dl2-item-dl2_ch8">
      <div class="chapter-accordion-header ${dl2OpenAccordions['dl2_ch8'] ? 'active' : ''}" id="dl2-head-dl2_ch8" onclick="toggleDl2Accordion('dl2_ch8')">
        <div class="chapter-acc-title-group">
          <span class="cs-pill cs-pill-warning">⚡ 1 Tiết • 2 Câu</span>
          <span class="chapter-acc-title">Bài 8: Thuốc Điều Trị Rối Loạn Hô Hấp (Giảm Ho, Tiêu Nhầy, Hen &amp; COPD)</span>
        </div>
        <span class="chapter-acc-arrow">▼</span>
      </div>
      <div class="chapter-accordion-body" id="dl2-body-dl2_ch8" style="display: ${dl2OpenAccordions['dl2_ch8'] ? 'block' : 'none'};">
<!-- BÀI 8: THUỐC ĐIỀU CHỈNH RỐI LOẠN HÔ HẤP -->
        <div class="cs-section-badge">💊 Dược Lý Học Trọng Tâm: Bài 8</div>
        <h3 class="cs-topic-heading">1. Thuốc Giãn Phế Quản (Chủ Vận &beta;₂, Kháng Muscarinic & Methylxanthin)</h3>
        <div class="cs-point-card">
          <div class="cs-point-title">🌬️ Cơ Chế & Phân Nhóm Thuốc Giãn Phế Quản</div>
          <div class="cs-point-desc">
            <ul>
              <li><strong>Thuốc chủ vận thụ thể &beta;₂-adrenergic</strong>:
                <br>&bull; <em>Cơ chế</em>: Gắn chọn lọc vào thụ thể &beta;₂ trên màng tế bào cơ trơn phế quản &rarr; hoạt hóa Protein Gs &rarr; kích hoạt enzym Adenylate Cyclase làm tăng nồng độ cAMP nội bào &rarr; hoạt hóa Protein Kinase A (PKA) làm giảm Ca²⁺ tự do nội bào &rarr; giãn cơ trơn phế quản và ức chế dưỡng bào giải phóng chất trung gian hóa học.
                <br>&bull; <em>SABA (Chủ vận &beta;₂ tác dụng ngắn)</em>: <strong>Salbutamol (Albuterol), Terbutalin, Fenoterol</strong>. Khởi phát cực nhanh (3-5 phút), kéo dài 4-6 giờ. <strong>Là thuốc lựa chọn hàng đầu cắt cơn hen phế quản cấp tính</strong> qua đường khí dung hoặc bình xịt định liều (MDI).
                <br>&bull; <em>LABA (Chủ vận &beta;₂ tác dụng kéo dài)</em>: <strong>Salmeterol, Formoterol</strong>. Thân dầu cao, gắn bền vào màng tế bào, duy trì tác dụng giãn phế quản trên 12 giờ. Dùng dự phòng hen mạn tính và điều trị COPD.
                <br>&bull; <em>Ultra-LABA (Tác dụng siêu kéo dài 24 giờ)</em>: <strong>Indacaterol, Vilanterol, Olodaterol</strong>. Dùng 1 lần/ngày chuyên biệt cho bệnh phổi tắc nghẽn mạn tính (COPD).
                <br>&bull; <em>Tác dụng phụ</em>: Run cơ đầu ngón tay (Tremor - do kích thích &beta;₂ cơ vân), nhịp tim nhanh đánh trống ngực, hạ Kali máu (thúc đẩy K⁺ vào trong tế bào).
              </li>
              <li><strong>Thuốc kháng Cholinergic (Kháng Muscarinic)</strong>:
                <br>&bull; <em>Cơ chế</em>: Dẫn chất amoni bậc bốn mang điện tích dương, không ngấm vào máu hay qua hàng rào máu não. Đối kháng cạnh tranh chọn lọc tại thụ thể Muscarinic M₃ trên cơ trơn khí phế quản, ngăn chặn tác dụng co thắt và tăng tiết dịch nhầy của Acetylcholin do kích thích dây X.
                <br>&bull; <em>SAMA (Tác dụng ngắn)</em>: <strong>Ipratropium bromid</strong> (phối hợp Salbutamol cắt cơn hen/COPD nặng).
                <br>&bull; <em>LAMA (Tác dụng kéo dài)</em>: <strong>Tiotropium, Umeclidinium, Aclidinium</strong>. Phân ly cực chậm khỏi thụ thể M₃ (tác dụng trên 24 giờ), <strong>là thuốc giãn phế quản nền tảng số 1 trong điều trị duy trì COPD</strong>.
              </li>
              <li><strong>Nhóm Methylxanthin (Theophyllin, Aminophyllin)</strong>:
                <br>&bull; <em>Cơ chế kép</em>: Ức chế không chọn lọc enzym Phosphodiesterase (PDE) làm tăng cAMP nội bào; đồng thời đối kháng cạnh tranh thụ thể Adenosin A₁ và A₂ (vốn gây co thắt phế quản).
                <br>&bull; <em>Khoảng điều trị rất hẹp</em>: Nồng độ tối ưu trong máu từ <strong>10 - 20 &mu;g/mL</strong>. Khi nồng độ > 20 &mu;g/mL xuất hiện ngộ độc: buồn nôn, đau đầu, nhịp nhanh xoang, loạn nhịp thất và cơn co giật kháng trị.
                <br>&bull; <em>Tương tác thuốc</em>: Nồng độ Theophyllin tăng vọt khi dùng chung với thuốc ức chế CYP1A2 (Ciprofloxacin, Erythromycin, Cimetidin).
              </li>
            </ul>
          </div>
        </div>

        <h3 class="cs-topic-heading">2. Thuốc Chống Viêm & Điều Hòa Miễn Dịch Trong Hen</h3>
        <div class="cs-point-card">
          <div class="cs-point-title">🛡️ Corticoid Hít (ICS), Kháng Leukotriene & Kháng Thể Đơn Dòng</div>
          <div class="cs-point-desc">
            <ul>
              <li><strong>Corticosteroid đường hít (ICS)</strong>: <strong>Fluticason propionat, Budesonid, Beclomethason, Ciclesonid</strong>. Là thuốc kiểm soát viêm nền tảng số 1 bắt buộc cho mọi bệnh nhân hen phế quản dai dẳng. Thuốc ức chế phiên mã các cytokine tiền viêm (IL-4, IL-5, IL-13), giảm thâm nhiễm bạch cầu ái toan, và phục hồi độ nhạy cảm của thụ thể &beta;₂. <em>Tác dụng phụ tại chỗ</em>: Nhiễm nấm Candida hầu họng và khàn tiếng (phải súc miệng nhổ bỏ nước sau khi xịt thuốc).</li>
              <li><strong>Thuốc kháng Leukotriene (LTRA)</strong>:
                <br>&bull; <em>Đối kháng thụ thể CysLT₁</em>: <strong>Montelukast, Zafirlukast</strong>. Uống 1 lần/ngày vào buổi tối. Đặc biệt hiệu quả trong <strong>hen do gắng sức, hen nhạy cảm với Aspirin, và viêm mũi dị ứng đi kèm</strong>.
                <br>&bull; <em>Ức chế enzym 5-Lipoxygenase (5-LOX)</em>: <strong>Zileuton</strong> (chặn tổng hợp toàn bộ leukotriene, có độc tính tăng men gan cần theo dõi).
              </li>
              <li><strong>Cromolyn natri & Nedocromil</strong>: Ổn định màng dưỡng bào, ức chế kênh Clo ngăn chặn hiện tượng mất hạt giải phóng histamin và leukotriene. Dùng dự phòng hen ở trẻ em và hen do lạnh/gắng sức; không có tác dụng giãn phế quản trực tiếp.</li>
              <li><strong>Kháng thể đơn dòng trúng đích sinh học trong hen nặng</strong>:
                <br>&bull; <em>Omalizumab</em>: Kháng thể đơn dòng gắn chọn lọc vào phần Fc của kháng thể IgE tự do, ngăn IgE gắn vào thụ thể Fc&epsilon;RI trên dưỡng bào. Dùng cho hen dị ứng nặng kháng trị có IgE máu cao.
                <br>&bull; <em>Mepolizumab, Reslizumab</em>: Kháng Interleukin-5 (IL-5); <em>Benralizumab</em>: Kháng thụ thể IL-5R &rarr; giảm triệt để số lượng bạch cầu ái toan trong hen tăng bạch cầu ái toan.
              </li>
            </ul>
          </div>
        </div>

        <h3 class="cs-topic-heading">3. Thuốc Điều Trị Ho & Thuốc Tiêu Đờm</h3>
        <div class="cs-point-card">
          <div class="cs-point-title">🧪 Giảm Ho Trung Ương vs Tiêu Chất Nhầy</div>
          <div class="cs-point-desc">
            <ul>
              <li><strong>Thuốc giảm ho trung ương</strong>:
                <br>&bull; <em>Opioid giảm ho</em>: <strong>Codein, Pholcodin</strong>. Ức chế trực tiếp trung khu ho ở hành tủy não. Gây buồn ngủ, táo bón, ức chế hô hấp và nguy cơ lệ thuộc thuốc.
                <br>&bull; <em>Non-opioid</em>: <strong>Dextromethorphan</strong>. Đối kháng thụ thể NMDA và chủ vận sigma-1 ở trung khu ho. Hiệu quả giảm ho tương đương codein nhưng <strong>không gây nghiện, không giảm đau và không ức chế hô hấp ở liều điều trị</strong>.
              </li>
              <li><strong>Thuốc tiêu chất nhầy (Mucolytics)</strong>:
                <br>&bull; <strong>N-Acetylcystein (NAC)</strong>: Chứa nhóm sulfhydryl (-SH) tự do có tính khử, bẻ gãy các cầu nối disulfid (-S-S-) liên kết chéo các chuỗi mucopolysaccharid của đờm &rarr; giảm nhanh độ quánh đặc của dịch tiết phế quản để dễ khạc ra ngoài. <em>Đồng thời là thuốc giải độc đặc hiệu duy nhất cho ngộ độc Paracetamol</em> nhờ tái tạo kho dự trữ Glutathione ở gan.
                <br>&bull; <strong>Bromhexin & Ambroxol</strong>: Bromhexin là tiền chất, chuyển hóa thành Ambroxol có hoạt tính. Thuốc kích thích tế bào biểu mô phế quản tăng sản xuất chất hoạt tính bề mặt (Surfactant) và phân giải các sợi mucopolysaccharid.
              </li>
            </ul>
          </div>
        </div>

        <div class="golden-box" style="background: rgba(220, 38, 38, 0.08); border-left: 5px solid var(--danger); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
          <h4 style="color: var(--danger); margin: 0 0 0.5rem 0; font-size: 1rem;">🎯 ĐIỂM CHÚ Ý ĐẶC BIỆT &amp; BẪY THI BÀI 8:</h4>
          <ul style="margin: 0; padding-left: 1.2rem; color: var(--text-main); font-size: 0.9rem;">
            <li><strong>Cảnh báo hộp đen SMART (Black Box Warning)</strong>: Tuyệt đối <strong>CẤM DÙNG LABA ĐƠN TRỊ LIỆU trong hen phế quản</strong> vì làm giảm nhạy cảm thụ thể &beta;₂, che giấu tình trạng viêm mạn tính và làm tăng vọt nguy cơ tử vong do hen kịch phát. Trong hen, LABA <em>bắt buộc phải luôn đi kèm với ICS</em> (ví dụ phối hợp Seretide: Salmeterol/Fluticason; Symbicort: Formoterol/Budesonid).</li>
            <li><strong>Chống chỉ định thuốc giảm ho trung ương trong cơn hen cấp</strong>: Trong cơn hen cấp hoặc đợt cấp COPD có ứ đọng đờm, tuyệt đối không dùng Codein hay Dextromethorphan vì ức chế ho sẽ gây ứ đọng dịch nhầy bít tắc hoàn toàn tiểu phế quản dẫn đến suy hô hấp tử vong; đồng thời Codein còn kích thích giải phóng Histamin làm co thắt phế quản dữ dội hơn.</li>
            <li><strong>Bẫy Hội chứng Churg-Strauss khi dùng LTRA</strong>: Khi giảm liều corticoid đường toàn thân ở bệnh nhân chuyển sang dùng Montelukast/Zafirlukast, có thể bộc lộ hội chứng viêm mạch u hạt dị ứng Churg-Strauss (bạch cầu ái toan tăng cao, viêm mạch máu mô mềm và tổn thương tim).</li>
          </ul>
        </div>
        </div>
    </div>

    <!-- BÀI 9: THUỐC KHÁNG H1 -->
    <div class="chapter-accordion-item dl2-searchable-item" id="dl2-item-dl2_ch9">
      <div class="chapter-accordion-header ${dl2OpenAccordions['dl2_ch9'] ? 'active' : ''}" id="dl2-head-dl2_ch9" onclick="toggleDl2Accordion('dl2_ch9')">
        <div class="chapter-acc-title-group">
          <span class="cs-pill cs-pill-warning">⚡ 1 Tiết • 2 Câu</span>
          <span class="chapter-acc-title">Bài 9: Thuốc Kháng Histamin H1 (Thế Hệ 1 vs Thế Hệ 2)</span>
        </div>
        <span class="chapter-acc-arrow">▼</span>
      </div>
      <div class="chapter-accordion-body" id="dl2-body-dl2_ch9" style="display: ${dl2OpenAccordions['dl2_ch9'] ? 'block' : 'none'};">
<!-- BÀI 9: THUỐC KHÁNG HISTAMIN H1 -->
        <div class="cs-section-badge">💊 Dược Lý Học Trọng Tâm: Bài 9</div>
        <h3 class="cs-topic-heading">1. Hệ Thống Thụ Thể Histamin & Cơ Chế Kháng H1</h3>
        <div class="cs-point-card">
          <div class="cs-point-title">🧬 4 Phân Lớp Thụ Thể Histamin</div>
          <div class="cs-point-desc">
            <ul>
              <li><strong>Thụ thể H₁</strong>: Phân bố ở cơ trơn phế quản, mạch máu, tế bào nội mô và thần kinh trung ương. Hoạt hóa qua protein Gq &rarr; co thắt phế quản, giãn tiểu động mạch (tụt huyết áp), tăng tính thấm thành mạch (phù nề, mề đay) và kích thích ngọn dây thần kinh cảm giác gây ngứa.</li>
              <li><strong>Thụ thể H₂</strong>: Phân bố chủ yếu ở tế bào viền niêm mạc dạ dày (kích thích tiết acid HCl qua Gs/cAMP) và cơ tim (tăng nhịp tim).</li>
              <li><strong>Thụ thể H₃</strong>: Thần kinh trung ương (tự thụ thể tiền synap điều hòa ức chế giải phóng histamin và các chất dẫn truyền thần kinh khác).</li>
              <li><strong>Thụ thể H₄</strong>: Bạch cầu ái toan, tế bào mast, tủy xương (điều hòa hóa ứng động bạch cầu và viêm miễn dịch).</li>
              <li><strong>Bản chất phân tử của Thuốc Kháng H₁</strong>: Về mặt dược lý học, hầu hết các thuốc kháng H₁ không phải là chất đối kháng cạnh tranh câm, mà là <strong>Chất chủ vận nghịch (Inverse Agonist)</strong> làm dịch chuyển cân bằng thụ thể H₁ từ trạng thái hoạt động về trạng thái bất hoạt bền vững.</li>
            </ul>
          </div>
        </div>

        <h3 class="cs-topic-heading">2. Phân Loại Hóa Học & So Sánh 2 Thế Hệ</h3>
        <div class="cs-point-card">
          <div class="cs-point-title">🔬 6 Nhóm Hóa Học Của Thế Hệ 1 vs Thế Hệ 2 Mới</div>
          <div class="cs-point-desc">
            <ul>
              <li><strong>Thế hệ 1 (Qua hàng rào máu não rất tốt &bull; An thần mạnh &bull; Kháng Cholinergic)</strong>:
                <br>&bull; <em>Dẫn chất Ethanolamin</em>: <strong>Diphenhydramin, Dimenhydrinat</strong> (chống say tàu xe, an thần gây ngủ mạnh, kháng muscarinic rõ rệt).
                <br>&bull; <em>Dẫn chất Alkylamin</em>: <strong>Clorpheniramin, Dexclorpheniramin</strong> (ít an thần hơn ethanolamin, phổ biến trong viên cảm cúm).
                <br>&bull; <em>Dẫn chất Phenothiazin</em>: <strong>Promethazin</strong> (chẹn mạnh cả thụ thể &alpha;₁ giao cảm gây tụt HA tư thế; an thần và chống nôn rất mạnh).
                <br>&bull; <em>Dẫn chất Piperazin</em>: <strong>Hydroxyzin</strong> (an thần giải lo âu), <strong>Cyclizin</strong> (chống say tàu xe).
                <br>&bull; <em>Dẫn chất Piperidin</em>: <strong>Cyproheptadin</strong> (kháng thụ thể Serotonin 5-HT₂ &rarr; kích thích trung tâm thèm ăn ở vùng dưới đồi, dùng cho trẻ biếng ăn suy dinh dưỡng).
              </li>
              <li><strong>Thế hệ 2 (Ít hoặc không qua hàng rào máu não &bull; Không an thần &bull; T1/2 dài)</strong>:
                <br>&bull; <strong>Cetirizin & Levocetirizin</strong>: Dẫn xuất acid carboxyl của Hydroxyzin, phân cực mạnh, tác dụng chống ngứa và mề đay rất mạnh.
                <br>&bull; <strong>Loratadin & Desloratadin</strong>: Desloratadin là chất chuyển hóa có hoạt tính của Loratadin, không gây an thần, tác dụng kéo dài 24 giờ.
                <br>&bull; <strong>Fexofenadin</strong>: Chất chuyển hóa có hoạt tính của Terfenadin. Không bị chuyển hóa qua CYP450, không qua hàng rào máu não, không gây độc tim xoắn đỉnh.
                <br>&bull; <strong>Bilastin</strong>: Thuốc kháng H₁ thế hệ 2 mới nhất. Hầu như 95% đào thải dưới dạng nguyên vẹn qua phân và nước tiểu, hoàn toàn không tương tác với hệ enzym CYP450 ở gan, cực kỳ an toàn cho người suy gan.
                <br>&bull; <strong>Rupatadin</strong>: Tác dụng kép: vừa kháng chọn lọc thụ thể H₁, vừa đối kháng mạnh thụ thể của yếu tố hoạt hóa tiểu cầu (PAF - Platelet Activating Factor).
              </li>
            </ul>
          </div>
        </div>

        <div style="overflow-x: auto; margin-bottom: 1rem;">
          <table class="cs-table">
            <thead>
              <tr>
                <th>Tiêu chí so sánh</th>
                <th>Kháng H₁ Thế Hệ 1</th>
                <th>Kháng H₁ Thế Hệ 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Tính thân dầu &amp; Qua hàng rào máu não</strong></td>
                <td>Thân dầu rất cao, dễ dàng vượt qua hàng rào máu não</td>
                <td>Phân cực cao, là cơ chất của bơm tống P-glycoprotein &rarr; không qua não</td>
              </tr>
              <tr>
                <td><strong>Tác dụng ức chế TKTW (An thần)</strong></td>
                <td><strong>Rất mạnh</strong> (gây buồn ngủ, gà gật, giảm tập trung lái xe)</td>
                <td><strong>Hầu như không gây an thần</strong> ở liều điều trị</td>
              </tr>
              <tr>
                <td><strong>Tác dụng kháng Muscarinic (Kháng Cholinergic)</strong></td>
                <td><strong>Rất mạnh</strong>: Khô miệng, nhìn mờ, giãn đồng tử, bí tiểu, táo bón</td>
                <td>Hầu như không có tác dụng kháng cholinergic</td>
              </tr>
              <tr>
                <td><strong>Tác dụng chống say tàu xe &amp; Chống nôn</strong></td>
                <td><strong>Rất tốt</strong> (ức chế thụ thể H₁ và M tại tiền đình và trung tâm nôn)</td>
                <td><strong>Hoàn toàn không có tác dụng</strong> chống say tàu xe</td>
              </tr>
              <tr>
                <td><strong>Thời gian bán thải &amp; Liều dùng</strong></td>
                <td>Ngắn (4 - 6 giờ), phải uống 3 - 4 lần/ngày</td>
                <td>Kéo dài (12 - 24 giờ), chỉ cần uống 1 lần duy nhất mỗi ngày</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="golden-box" style="background: rgba(220, 38, 38, 0.08); border-left: 5px solid var(--danger); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
          <h4 style="color: var(--danger); margin: 0 0 0.5rem 0; font-size: 1rem;">🎯 ĐIỂM CHÚ Ý ĐẶC BIỆT &amp; BẪY THI BÀI 9:</h4>
          <ul style="margin: 0; padding-left: 1.2rem; color: var(--text-main); font-size: 0.9rem;">
            <li><strong>Quy tắc sống còn trong Sốc Phản Vệ (Anaphylaxis)</strong>: Thuốc kháng Histamin H₁ và Corticosteroid <strong>KHÔNG CÓ TÁC DỤNG CẤP CỨU CẮT CƠN SỐC PHẢN VỆ</strong>. Thuốc cấp cứu đầu tay bắt buộc tiêm bắp ngay lập tức là <strong>ADRENALIN (Epinephrine)</strong> (nhờ kích thích &alpha;₁ co mạch nâng HA, &beta;₁ tăng co bóp tim, &beta;₂ giãn phế quản cấp cứu). Kháng H₁ chỉ là thuốc hỗ trợ thứ yếu giảm triệu chứng mẩn ngứa da.</li>
            <li><strong>Thảm họa tim mạch Xoắn đỉnh của Terfenadin & Astemizol</strong>: Hai thuốc kháng H₁ thế hệ 2 này bị chuyển hóa bởi enzym CYP3A4. Khi dùng chung với chất ức chế CYP3A4 (Ketoconazol, Itraconazol, Erythromycin, Clarithromycin), nồng độ thuốc mẹ tăng vọt ức chế kênh Kali hERG (I_Kr) ở cơ tim &rarr; kéo dài khoảng QT gây <strong>cơn nhịp nhanh thất Xoắn đỉnh (Torsades de Pointes) và đột tử</strong>, do đó đã bị rút phép lưu hành toàn cầu. Thay thế bằng <strong>Fexofenadin</strong> an toàn tuyệt đối trên tim.</li>
            <li><strong>Chống chỉ định kháng H₁ thế hệ 1</strong>: Glaucom góc đóng (do làm giãn đồng tử tăng nhãn áp), u phì đại lành tính tuyến tiền liệt (do bí tiểu cấp), tài xế lái xe và người vận hành máy móc nguy hiểm (do ngủ gật).</li>
          </ul>
        </div>
        </div>
    </div>

    <!-- BÀI 10: THUỐC HẠ LIPID MÁU -->
    <div class="chapter-accordion-item dl2-searchable-item" id="dl2-item-dl2_ch10">
      <div class="chapter-accordion-header ${dl2OpenAccordions['dl2_ch10'] ? 'active' : ''}" id="dl2-head-dl2_ch10" onclick="toggleDl2Accordion('dl2_ch10')">
        <div class="chapter-acc-title-group">
          <span class="cs-pill cs-pill-primary">🔥 2 Tiết • 4 Câu</span>
          <span class="chapter-acc-title">Bài 10: Thuốc Hạ Lipid Máu (Statin, Fibrat, Ezetimibe, Resin, PCSK9)</span>
        </div>
        <span class="chapter-acc-arrow">▼</span>
      </div>
      <div class="chapter-accordion-body" id="dl2-body-dl2_ch10" style="display: ${dl2OpenAccordions['dl2_ch10'] ? 'block' : 'none'};">
<!-- BÀI 10: THUỐC HẠ LIPID MÁU -->
        <div class="cs-section-badge">💊 Dược Lý Học Trọng Tâm: Bài 10</div>
        <h3 class="cs-topic-heading">1. Nhóm Statin (Thuốc Ức Chế HMG-CoA Reductase)</h3>
        <div class="cs-point-card">
          <div class="cs-point-title">🛡️ Cơ Chế Phân Tử & Tác Dụng Đa Hiệu (Pleiotropic Effects)</div>
          <div class="cs-point-desc">
            <ul>
              <li><strong>Cơ chế phân tử</strong>: Ức chế cạnh tranh đặc hiệu với enzym 3-hydroxy-3-methylglutaryl-coenzyme A (HMG-CoA) reductase &rarr; ức chế bước giới hạn tốc độ tổng hợp cholesterol nội sinh từ mevalonate tại tế bào gan. Thiếu hụt cholesterol nội bào kích thích yếu tố phiên mã SREBP-2 &rarr; <strong>tăng biểu hiện mật độ thụ thể LDL (LDL-Receptor) trên màng tế bào gan</strong> &rarr; tăng dọn dẹp bắt giữ LDL-C và VLDL tàn dư từ tuần hoàn vào gan &rarr; <strong>Hạ mạnh LDL-C huyết tương từ 30% đến 60%</strong>.</li>
              <li><strong>Phân loại Dược động học Statin</strong>:
                <br>&bull; <em>Thân dầu (Lipophilic)</em>: <strong>Atorvastatin, Simvastatin, Lovastatin</strong>. Dễ qua màng tế bào, phân bố rộng vào các mô ngoại vi. Lovastatin và Simvastatin là tiền chất dạng lacton. Chuyển hóa chủ yếu qua enzym <strong>CYP3A4</strong> tại gan &rarr; rất dễ tương tác với nước ép bưởi chùm, kháng nấm azole, macrolid.
                <br>&bull; <em>Thân nước (Hydrophilic)</em>: <strong>Pravastatin, Rosuvastatin</strong>. Chọn lọc cao trên tế bào gan. <em>Pravastatin</em> không bị chuyển hóa qua CYP450 (thải trừ qua thận) &rarr; <strong>ít tương tác thuốc nhất</strong>. <em>Rosuvastatin</em> chuyển hóa nhẹ qua CYP2C9, là statin có hiệu lực hạ LDL-C mạnh nhất.
              </li>
              <li><strong>Thời điểm uống thuốc</strong>: Enzym HMG-CoA reductase hoạt động mạnh nhất vào ban đêm theo nhịp sinh học. Các statin có thời gian bán thải ngắn (Simvastatin, Pravastatin, Lovastatin, T1/2 = 2-4h) <strong>bắt buộc phải uống vào buổi tối trước khi đi ngủ</strong>. Các statin có bán thải dài (Atorvastatin T1/2 = 14h, Rosuvastatin T1/2 = 19h) có thể uống vào bất kỳ thời điểm nào trong ngày.</li>
              <li><strong>Tác dụng đa hiệu ngoài hạ lipid (Pleiotropic Effects)</strong>: Nhờ ức chế tạo các chất trung gian isoprenoid (farnesyl pyrophosphate, geranylgeranyl pyrophosphate):
                <br>&bull; Cải thiện chức năng nội mô mạch máu (tăng biểu hiện eNOS tạo NO).
                <br>&bull; Ổn định và làm bền vững mảng xơ vữa (chống vỡ mảng xơ vữa gây huyết khối).
                <br>&bull; Chống viêm mạch máu (giảm nồng độ hs-CRP huyết tương).
                <br>&bull; Ức chế kết tập tiểu cầu và chống tăng sinh cơ trơn thành mạch.
              </li>
              <li><strong>Độc tính trên cơ & Theo dõi lâm sàng</strong>:
                <br>&bull; Đau cơ nhẹ (Myalgia) kèm mỏi cơ không tăng men CK (chiếm 5-10%).
                <br>&bull; Viêm cơ (Myositis) có tăng men CK > 3-5 lần giới hạn trên bình thường.
                <br>&bull; <strong>Tiêu cơ vân cấp (Rhabdomyolysis)</strong>: Biến chứng nguy hiểm nhất; tế bào cơ vân hoại tử ồ ạt phóng thích myoglobin và CK tăng vọt > 10-40 lần &rarr; đái myoglobin nước tiểu màu sẫm như coca/nước vối dẫn đến <strong>suy thận cấp vô niệu tử vong</strong>. Bắt buộc ngừng statin ngay lập tức khi CK tăng > 10 lần kèm đau cơ dữ dội.
              </li>
            </ul>
          </div>
        </div>

        <h3 class="cs-topic-heading">2. Các Nhóm Thuốc Hạ Lipid Khác</h3>
        <div style="overflow-x: auto; margin-bottom: 1rem;">
          <table class="cs-table">
            <thead>
              <tr>
                <th>Nhóm thuốc</th>
                <th>Hoạt chất chính</th>
                <th>Cơ chế tác dụng phân tử</th>
                <th>Tác động trên Lipid &amp; Lưu ý</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Nhóm Fibrat</strong></td>
                <td>Fenofibrat, Gemfibrozil, Ciprofibrat</td>
                <td>Chủ vận thụ thể nhân PPAR-&alpha; ở gan &rarr; tăng tổng hợp enzym Lipoprotein Lipase (LPL), giảm tổng hợp ApoC-III.</td>
                <td><strong>Hạ mạnh Triglycerid (30 - 50%)</strong>, tăng nhẹ HDL-C. Tác dụng phụ: Tăng nguy cơ sỏi mật cholesterol (do tăng tiết cholesterol vào mật).</td>
              </tr>
              <tr>
                <td><strong>Ức chế hấp thu Cholesterol</strong></td>
                <td>Ezetimibe</td>
                <td>Ức chế chọn lọc protein vận chuyển sterol Niemann-Pick C1-Like 1 (NPC1L1) tại bờ bàn chải ruột non &rarr; chặn hấp thu cholesterol.</td>
                <td>Hạ LDL-C thêm 15 - 20% khi phối hợp statin. Rất an toàn, ít độc tính.</td>
              </tr>
              <tr>
                <td><strong>Nhựa gắn Acid Mật</strong></td>
                <td>Cholestyramin, Colestipol, Colesevelam</td>
                <td>Cation polyme không hấp thu, tạo phức chelate không tan với acid mật mang điện tích âm trong ruột tống ra phân &rarr; gan tăng dùng cholesterol tạo acid mật.</td>
                <td>Hạ LDL-C 15 - 30%. Có thể làm tăng Triglycerid phản ứng. Cản trở hấp thu các thuốc dùng chung (Warfarin, Digoxin) và vitamin tan trong dầu A, D, E, K.</td>
              </tr>
              <tr>
                <td><strong>Acid Nicotinic (Niacin)</strong></td>
                <td>Vitamin B₃ liều cao (1 - 3 g/ngày)</td>
                <td>Ức chế ly giải mỡ tại mô mỡ qua thụ thể Gi/o &rarr; giảm acid béo tự do về gan &rarr; giảm tổng hợp VLDL và LDL.</td>
                <td><strong>Thuốc làm tăng HDL-C mạnh nhất (15 - 35%)</strong>. Tác dụng phụ: Đỏ bừng mặt (flushing do giãn mạch qua PGD₂), ngứa, tăng acid uric máu gây gút, tăng đường huyết.</td>
              </tr>
              <tr>
                <td><strong>Ức chế PCSK9</strong></td>
                <td>Evolocumab, Alirocumab, Inclisiran</td>
                <td>Kháng thể đơn dòng gắn bất hoạt enzym PCSK9 (vốn phân hủy thụ thể LDL) &rarr; bảo tồn đời sống thụ thể LDL-R trên màng tế bào gan. <em>Inclisiran</em> là siRNA can thiệp ARN.</td>
                <td><strong>Hạ cực mạnh LDL-C từ 60% đến 70%</strong>. Dạng tiêm dưới da mỗi 2-4 tuần (hoặc 6 tháng/lần với Inclisiran). Dùng cho tăng cholesterol gia đình hoặc nguy cơ tim mạch rất cao.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="golden-box" style="background: rgba(220, 38, 38, 0.08); border-left: 5px solid var(--danger); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
          <h4 style="color: var(--danger); margin: 0 0 0.5rem 0; font-size: 1rem;">🎯 ĐIỂM CHÚ Ý ĐẶC BIỆT &amp; BẪY THI BÀI 10:</h4>
          <ul style="margin: 0; padding-left: 1.2rem; color: var(--text-main); font-size: 0.9rem;">
            <li><strong>Chống chỉ định phối hợp Statin với Gemfibrozil</strong>: Gemfibrozil ức chế chất vận chuyển OATP1B1 ở gan và ức chế phản ứng glucuronid hóa statin &rarr; làm tăng vọt nồng độ statin tự do trong máu lên nhiều lần, dẫn tới <strong>tăng nguy cơ Tiêu cơ vân cấp (Rhabdomyolysis) lên gấp 15 lần</strong> so với các fibrat khác. Nếu bắt buộc phải phối hợp Statin với Fibrat (khi bệnh nhân có rối loạn lipid hỗn hợp nặng), <strong>chỉ được phép chọn Fenofibrat</strong>.</li>
            <li><strong>Cách xử trí bừng đỏ mặt do Niacin (Flushing)</strong>: Hiện tượng bừng đỏ mặt bốc hỏa và ngứa dữ dội vùng mặt cổ ngực sau khi uống Niacin là do tế bào sừng giải phóng Prostaglandin D₂ và E₂ gây giãn mạch da cấp tính. Khắc phục bằng cách: <strong>Uống 1 viên Aspirin (hoặc NSAID) trước khi uống Niacin 30 phút</strong>.</li>
            <li><strong>Chống chỉ định Statin tuyệt đối</strong>: Phụ nữ có thai và cho con bú (do cholesterol cần thiết cho sự phát triển não bộ và màng tế bào phôi thai; gây quái thai); bệnh gan tiến triển có men gan tăng cao kéo dài.</li>
          </ul>
        </div>
        </div>
    </div>

    <!-- BÀI 11: THUỐC CHỐNG SỐT RÉT -->
    <div class="chapter-accordion-item dl2-searchable-item" id="dl2-item-dl2_ch11">
      <div class="chapter-accordion-header ${dl2OpenAccordions['dl2_ch11'] ? 'active' : ''}" id="dl2-head-dl2_ch11" onclick="toggleDl2Accordion('dl2_ch11')">
        <div class="chapter-acc-title-group">
          <span class="cs-pill cs-pill-primary">🔥 2 Tiết • 4 Câu</span>
          <span class="chapter-acc-title">Bài 11: Thuốc Chống Sốt Rét (Artemisinin, Primaquin, Quinin, Cloroquin)</span>
        </div>
        <span class="chapter-acc-arrow">▼</span>
      </div>
      <div class="chapter-accordion-body" id="dl2-body-dl2_ch11" style="display: ${dl2OpenAccordions['dl2_ch11'] ? 'block' : 'none'};">
<!-- BÀI 11: THUỐC CHỐNG SỐT RÉT -->
        <div class="cs-section-badge">💊 Dược Lý Học Trọng Tâm: Bài 11</div>
        <h3 class="cs-topic-heading">1. Chu Kỳ Sinh Học Ký Sinh Trùng Sốt Rét & Mục Tiêu Tác Động</h3>
        <div class="cs-point-card">
          <div class="cs-point-title">🦟 Chu Trình Phát Triển Trong Cơ Thể Người</div>
          <div class="cs-point-desc">
            <ul>
              <li><strong>Giai đoạn tiền hồng cầu (Trong gan)</strong>: Muỗi Anopheles đốt truyền thoa trùng (Sporozoite) vào máu &rarr; xâm nhập tế bào gan phát triển thành thể phân chia (Schizont mô). Sau 6-16 ngày, tế bào gan vỡ giải phóng hàng nghìn thể liệt trùng (Merozoite) vào máu.</li>
              <li><strong>Thể ngủ trong gan (Hypnozoite)</strong>: Chỉ xuất hiện ở <strong>Plasmodium vivax</strong> và <strong>Plasmodium ovale</strong>. Thể này không hoạt động, nằm im lìm trong nhu mô gan nhiều tháng hoặc nhiều năm &rarr; nguyên nhân gây ra <strong>sốt rét tái phát xa</strong>. Đích tác động của <strong>Primaquin</strong> và <strong>Tafenoquine</strong>.</li>
              <li><strong>Giai đoạn trong hồng cầu (Gây cơn sốt rét lâm sàng)</strong>: Merozoite xâm nhập hồng cầu, tiêu thụ Hemoglobin để lấy acid amin, phát triển qua các giai đoạn: thể nhẫn &rarr; thể tư dưỡng (Trophozoite) &rarr; thể phân chia (Schizont hồng cầu). Hồng cầu vỡ đồng loạt giải phóng độc tố, sắc tố sốt rét hemozoin và các merozoite mới &rarr; <strong>gây cơn sốt rét kinh điển (rét run, sốt nóng, vã mồ hôi)</strong>. Đích tác động của <strong>Artemisinin, Chloroquin, Quinin, Mefloquin</strong> (thuốc cắt cơn).</li>
              <li><strong>Thể giao bào (Gametocyte)</strong>: Một số merozoite trong hồng cầu biến đổi thành giao bào đực và cái. Khi muỗi hút máu, giao bào thụ tinh trong dạ dày muỗi &rarr; duy trì chu kỳ truyền bệnh trong cộng đồng. Đích tác động diệt giao bào: <strong>Primaquin, Artemisinin</strong>.</li>
            </ul>
          </div>
        </div>

        <h3 class="cs-topic-heading">2. Các Thuốc Diệt Thể Hồng Cầu (Cắt Cơn Sốt Rét)</h3>
        <div class="cs-point-card">
          <div class="cs-point-title">🧪 Artemisinin, Chloroquin & Quinin</div>
          <div class="cs-point-desc">
            <ul>
              <li><strong>Artemisinin và các dẫn xuất (Artesunat, Artemether, Dihydroartemisinin - DHA)</strong>:
                <br>&bull; <em>Nguồn gốc &amp; Cơ chế</em>: Chiết xuất từ cây Thanh hao hoa vàng (<em>Artemisia annua</em>). Cấu trúc phân tử chứa <strong>cầu nối nội peroxyd (Endoperoxide bridge)</strong>. Khi thuốc vào không bào tiêu hóa của ký sinh trùng, sắt tự do (Fe²⁺) từ thoái biến hemoglobin sẽ xúc tác bẻ gãy cầu nối peroxyd sinh ra các gốc tự do có độc tính cao (carbon-centered free radicals) làm alkyl hóa và phá hủy cấu trúc protein, enzym và màng lipid của ký sinh trùng.
                <br>&bull; <em>Đặc điểm dược động học</em>: <strong>Diệt ký sinh trùng trong máu nhanh nhất và mạnh nhất trong tất cả các thuốc sốt rét</strong>, làm sạch ký sinh trùng máu chỉ sau 24-48 giờ. Tuy nhiên bán thải rất ngắn (1 - 2 giờ) &rarr; nếu dùng đơn độc tỷ lệ tái phát rất cao.
                <br>&bull; <em>Phác đồ phối hợp chuẩn ACT (Artemisinin-based Combination Therapy)</em>: Luôn phối hợp một dẫn xuất artemisinin (diệt nhanh) với một thuốc sốt rét khác có thời gian bán thải dài (dọn sạch KST sót lại và chống kháng thuốc). Ví dụ: <strong>DHA + Piperaquin (Arterakine, CV-Artecan)</strong>; <strong>Artemether + Lumefantrin (Coartem)</strong>; <strong>Artesunat + Mefloquin</strong>.
                <br>&bull; <em>Artesunat tiêm tĩnh mạch</em>: Thuốc lựa chọn số 1 thế giới điều trị <strong>Sốt rét ác tính có biến chứng</strong> đe dọa tử vong (thể não, suy thận, toan chuyển hóa).
              </li>
              <li><strong>Chloroquin</strong>:
                <br>&bull; <em>Cơ chế</em>: Thuốc là base yếu, khuếch tán vào không bào tiêu hóa có tính acid cao của ký sinh trùng và bị bẫy ion tại đó (nồng độ tích lũy cao gấp 1000 lần máu). Thuốc ức chế enzym Heme Polymerase (Biocrystallization) &rarr; ngăn chuyển đổi Heme tự do độc hại thành sắc tố Hemozoin trơ &rarr; tích tụ Heme tự do gây ly giải màng tế bào và tiêu diệt ký sinh trùng.
                <br>&bull; <em>Hiện tượng kháng thuốc</em>: Đột biến gen <strong>Pfcrt</strong> (mã hóa protein vận chuyển màng không bào P. falciparum chloroquine resistance transporter) làm bơm Chloroquin ra ngoài không bào tiêu hóa &rarr; làm mất tác dụng của thuốc.
                <br>&bull; <em>Độc tính tích lũy</em>: Gắn chặt vào melanin ở võng mạc gây <strong>Bệnh lý thoái hóa võng mạc hình mắt bò (Bull's-eye retinopathy)</strong> gây mất thị lực không hồi phục khi dùng liều cao kéo dài trị bệnh tự miễn (Lupus, viêm khớp dạng thấp).
              </li>
              <li><strong>Quinin (Alkaloid từ vỏ cây Cinchona)</strong>:
                <br>&bull; Cơ chế tương tự Chloroquin. Dùng cấp cứu sốt rét ác tính khi không có sẵn Artesunat tiêm.
                <br>&bull; <em>Tác dụng phụ kinh điển</em>:
                <br>&bull; <strong>Hội chứng Cinchonism</strong>: Ù tai, điếc thoáng qua, đau đầu dữ dội, buồn nôn, chóng mặt, rối loạn điều tiết thị giác (hồi phục khi ngừng thuốc).
                <br>&bull; <strong>Hạ đường huyết nặng</strong>: Kích thích trực tiếp các tế bào &beta; tiểu đảo tụy tăng cường tiết Insulin &rarr; bắt buộc theo dõi đường huyết và truyền kèm Glucose 10% khi tiêm truyền quinin.
                <br>&bull; Độc tính tim mạch: Kéo dài khoảng QT gây loạn nhịp tim.
              </li>
              <li><strong>Mefloquin</strong>: Thuốc diệt thể hồng cầu hiệu lực cao, bán thải rất dài (2-3 tuần). Tác dụng phụ đặc thù: <strong>Độc tính thần kinh tâm thần</strong> (lo âu, trầm cảm, ác mộng kinh hoàng, ảo giác và co giật; chống chỉ định người có tiền sử bệnh tâm thần hoặc động kinh).</li>
            </ul>
          </div>
        </div>

        <h3 class="cs-topic-heading">3. Thuốc Diệt Thể Ẩn Trong Gan & Chống Tái Phát</h3>
        <div class="cs-point-card">
          <div class="cs-point-title">🛡️ Primaquin & Tafenoquine (Dẫn Chất 8-Aminoquinolin)</div>
          <div class="cs-point-desc">
            <ul>
              <li><strong>Cơ chế tác dụng</strong>: Ức chế chức năng ty thể của ký sinh trùng, tạo chất chuyển hóa oxy hóa gây độc chọn lọc trên các thể ký sinh trùng nằm trong tế bào gan.</li>
              <li><strong>Phổ tác dụng duy nhất</strong>:
                <br>&bull; Diệt thể ngủ (Hypnozoite) trong gan của <em>P. vivax</em> và <em>P. ovale</em> &rarr; <strong>thuốc tiệt căn sốt rét chống tái phát xa</strong>.
                <br>&bull; Diệt thể giao bào (Gametocyte) của tất cả 4 loài kể cả <em>P. falciparum</em> &rarr; <strong>chặn đứng chu kỳ lây truyền bệnh từ người sang muỗi</strong>.
                <br>&bull; Hoàn toàn không có hiệu lực diệt thể vô tính trong hồng cầu &rarr; không dùng để cắt cơn sốt rét lâm sàng.
              </li>
              <li><strong>Primaquin</strong>: Bán thải ngắn, bắt buộc phải uống liên tục <strong>14 ngày</strong> sau khi đã cắt cơn sốt bằng thuốc diệt thể hồng cầu.</li>
              <li><strong>Tafenoquine</strong>: Dẫn xuất 8-aminoquinolin thế hệ mới, bán thải sinh học kéo dài từ 14 đến 20 ngày. Ưu thế vượt trội: <strong>Chỉ cần uống 1 liều duy nhất 300 mg</strong> để tiệt căn thể ngủ <em>P. vivax</em>, khắc phục triệt để nhược điểm quên thuốc của phác đồ Primaquin 14 ngày.</li>
            </ul>
          </div>
        </div>

        <div class="golden-box" style="background: rgba(220, 38, 38, 0.08); border-left: 5px solid var(--danger); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
          <h4 style="color: var(--danger); margin: 0 0 0.5rem 0; font-size: 1rem;">🎯 ĐIỂM CHÚ Ý ĐẶC BIỆT &amp; BẪY THI BÀI 11:</h4>
          <ul style="margin: 0; padding-left: 1.2rem; color: var(--text-main); font-size: 0.9rem;">
            <li><strong>Bẫy Tan Máu Cấp Ở Người Thiếu Men G6PD</strong>: Nhóm 8-aminoquinolin (<strong>Primaquin và Tafenoquine</strong>) là các chất oxy hóa mạnh. Ở người thiếu hụt enzym Glucose-6-Phosphate Dehydrogenase (G6PD), tế bào hồng cầu không sản xuất đủ NADPH để duy trì Glutathione khử &rarr; màng hồng cầu bị oxy hóa vỡ hàng loạt dẫn đến <strong>Cơn tan máu cấp tính nội mạch ồ ạt, vàng da, đái huyết cầu tố và suy thận cấp đe dọa tử vong</strong>. Bắt buộc phải xét nghiệm sàng lọc men G6PD trước khi kê đơn! Chống chỉ định cho phụ nữ mang thai vì không thể biết được tình trạng G6PD của thai nhi.</li>
            <li><strong>Sốt Tiểu Đen (Blackwater Fever)</strong>: Biến chứng kinh hoàng xảy ra khi dùng Quinin ở bệnh nhân sốt rét ác tính có cơ địa mẫn cảm. Biểu hiện: tan máu nội mạch cấp dữ dội, hồng cầu vỡ giải phóng hemoglobin ồ ạt làm nước tiểu chuyển sang **màu đen sẫm như nước vối/coca**, kèm sốt cao kịch phát, vàng da sẫm và suy thận cấp vô niệu.</li>
          </ul>
        </div>
        </div>
    </div>

    <!-- BÀI 12: KTGHP - TƯƠNG TÁC THUỐC -->
    <div class="chapter-accordion-item dl2-searchable-item" id="dl2-item-dl2_ch12">
      <div class="chapter-accordion-header ${dl2OpenAccordions['dl2_ch12'] ? 'active' : ''}" id="dl2-head-dl2_ch12" onclick="toggleDl2Accordion('dl2_ch12')">
        <div class="chapter-acc-title-group">
          <span class="cs-pill cs-pill-warning">⚡ 1 Tiết • 2 Câu</span>
          <span class="chapter-acc-title">Bài 12: KTGHP • Tương Tác Dược Lực Học &amp; Dược Động Học CYP450</span>
        </div>
        <span class="chapter-acc-arrow">▼</span>
      </div>
      <div class="chapter-accordion-body" id="dl2-body-dl2_ch12" style="display: ${dl2OpenAccordions['dl2_ch12'] ? 'block' : 'none'};">
<!-- BÀI 12: KTGHP (KHÁNG SINH TRƯỜNG HỢP ĐẶC BIỆT) -->
        <div class="cs-section-badge">💊 Dược Lý Học Trọng Tâm: Bài 12</div>
        <h3 class="cs-topic-heading">1. Nguyên Tắc Phối Hợp Kháng Sinh & Cặp Đôi Kinh Điển Co-trimoxazol</h3>
        <div class="cs-point-card">
          <div class="cs-point-title">⚡ Phối Hợp Hiệp Đồng vs Đối Kháng</div>
          <div class="cs-point-desc">
            <ul>
              <li><strong>Mục đích phối hợp kháng sinh</strong>: Mở rộng phổ tác dụng trong nhiễm khuẩn nặng hỗn hợp chưa rõ căn nguyên (viêm phúc mạc, sốc nhiễm khuẩn); tạo tác dụng diệt khuẩn hiệp đồng tăng mức; và ngăn ngừa sự xuất hiện của các chủng vi khuẩn đột biến kháng thuốc (trong điều trị Lao, HP, HIV).</li>
              <li><strong>Phối hợp Hiệp đồng diệt khuẩn (Synergistic)</strong>:
                <br>&bull; <em>&beta;-lactam + Aminoglycosid</em>: &beta;-lactam ức chế tổng hợp thành vách peptidoglycan, làm thủng vách vi khuẩn &rarr; tạo đường cho phân tử Aminoglycosid phân cực dễ dàng khuếch tán vào bào tương gắn tiểu phần 30S ribosom gây diệt khuẩn cực mạnh (dùng trong viêm nội tâm mạc nhiễm khuẩn do <em>Enterococcus</em>, nhiễm trùng trực khuẩn mủ xanh <em>Pseudomonas aeruginosa</em>).
                <br>&bull; <em>&beta;-lactam + Chất ức chế &beta;-lactamase</em>: Acid clavulanic, Sulbactam, Tazobactam, Avibactam đóng vai trò là chất "ức chế tự sát", gắn không hồi phục vào enzym &beta;-lactamase của vi khuẩn để bảo vệ phân tử kháng sinh chính (Amoxicillin/Clavulanat, Ampicillin/Sulbactam, Piperacillin/Tazobactam).
              </li>
              <li><strong>Phối hợp Đối kháng (Antagonistic) cần tránh</strong>: Phối hợp một kháng sinh <strong>Diệt khuẩn chỉ có tác dụng khi tế bào vi khuẩn đang phân chia tích cực (&beta;-lactam)</strong> với một kháng sinh <strong>Kìm khuẩn ức chế nhanh quá trình tổng hợp protein của vi khuẩn (Tetracyclin, Cloramphenicol, Macrolid)</strong>. Kháng sinh kìm khuẩn làm ngừng sự nhân lên của vi khuẩn &rarr; làm &beta;-lactam mất hoàn toàn đích tác dụng.</li>
              <li><strong>Phối hợp kinh điển Co-trimoxazol (Bactrim)</strong>:
                <br>&bull; <em>Cơ chế</em>: Sulfamethoxazol (SMX) ức chế enzym Dihydropteroat synthase; Trimethoprim (TMP) ức chế enzym Dihydrofolat reductase (DHFR). Ức chế 2 khâu liên tiếp trong chuỗi tổng hợp acid tetrahydrofolic &rarr; <strong>chuyển từ kìm khuẩn đơn độc thành diệt khuẩn hiệp đồng hoàn toàn</strong>.
                <br>&bull; <em>Tỷ lệ bào chế vs Nồng độ máu</em>: Viên thuốc được bào chế theo tỷ lệ liều <strong>5 : 1</strong> (400 mg SMX + 80 mg TMP). Tuy nhiên, do TMP thân dầu phân bố vào các mô rộng hơn SMX, tỷ lệ nồng độ tự do tối ưu trong máu đạt được là <strong>20 : 1</strong> (đây là tỷ lệ nồng độ hiệp đồng diệt khuẩn cao nhất).
              </li>
            </ul>
          </div>
        </div>

        <h3 class="cs-topic-heading">2. Hiệu Chỉnh Liều Kháng Sinh Trong Suy Thận & Giám Sát Nồng Độ Thuốc (TDM)</h3>
        <div class="cs-point-card">
          <div class="cs-point-title">🧮 Công Thức Cockcroft-Gault & Kháng Sinh Cần TDM</div>
          <div class="cs-point-desc">
            <ul>
              <li><strong>Ước tính độ thanh thải Creatinin (Cl_Cr) theo Cockcroft-Gault</strong>:
                <br>$$Cl_{Cr} (	ext{mL/phút}) = rac{(140 - 	ext{Tuổi}) 	imes 	ext{Cân nặng (kg)}}{72 	imes 	ext{Creatinin huyết thanh (mg/dL)}} 	imes (0.85 	ext{nếu là Nữ})$$
              </li>
              <li><strong>Kháng sinh có độc tính cao bắt buộc giám sát nồng độ thuốc trong máu (TDM)</strong>:
                <br>&bull; <em>Vancomycin</em>: Đích nồng độ đáy (Trough level) thường duy trì 15 - 20 &mu;g/mL trong nhiễm khuẩn nặng (MRSA, viêm phổi bệnh viện) để đảm bảo hiệu quả AUC/MIC &ge; 400 và tránh độc tính trên thận (hoại tử ống thận) và ốc tai.
                <br>&bull; <em>Aminoglycosid (Gentamicin, Tobramycin, Amikacin)</em>: Độc tính phụ thuộc nồng độ đáy kéo dài. Độc thận và độc ốc tai không hồi phục. Hiện nay áp dụng phác đồ dùng <strong>1 liều duy nhất trong ngày (Once-daily dosing)</strong> để đạt nồng độ đỉnh rất cao diệt khuẩn tối đa (phụ thuộc Cmax) và để nồng độ đáy hạ xuống dưới ngưỡng gây độc trước liều tiếp theo.
              </li>
              <li><strong>Các kháng sinh THẢI TRỪ QUA GAN MẬT - Không cần hiệu chỉnh liều khi suy thận</strong>:
                <br>&bull; <strong>Ceftriaxon</strong> (thải trừ 50% qua gan mật và 50% qua thận bù trừ).
                <br>&bull; <strong>Doxycyclin</strong> (thải trừ chủ yếu qua phân dưới dạng phức hợp không hoạt tính).
                <br>&bull; <strong>Azithromycin</strong> (thải trừ qua đường mật).
                <br>&bull; <strong>Moxifloxacin</strong> (chuyển hóa qua gan, không phụ thuộc thận).
                <br>&bull; <strong>Linezolid</strong> (chuyển hóa không enzym qua gan).
              </li>
            </ul>
          </div>
        </div>

        <div class="golden-box" style="background: rgba(220, 38, 38, 0.08); border-left: 5px solid var(--danger); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
          <h4 style="color: var(--danger); margin: 0 0 0.5rem 0; font-size: 1rem;">🎯 ĐIỂM CHÚ Ý ĐẶC BIỆT &amp; BẪY THI BÀI 12:</h4>
          <ul style="margin: 0; padding-left: 1.2rem; color: var(--text-main); font-size: 0.9rem;">
            <li><strong>Kháng sinh cấm tuyệt đối cho Phụ Nữ Mang Thai &amp; Trẻ Em</strong>:
              <br>&bull; <em>Tetracyclin / Doxycyclin</em>: Tạo phức chelate bền vững với calci lắng đọng tại mầm răng và xương &rarr; làm biến đổi màu răng vĩnh viễn (răng vàng nâu/xám xịt) và kìm hãm phát triển chiều dài xương trẻ nhỏ.
              <br>&bull; <em>Fluoroquinolon (Ciprofloxacin, Levofloxacin)</em>: Gây tổn thương thoái hóa sụn khớp ở động vật non đang phát triển; tăng nguy cơ đứt gân gót Achilles.
              <br>&bull; <em>Cloramphenicol</em>: Gây **Hội chứng xám ở trẻ sơ sinh (Gray Baby Syndrome)** (trụy mạch, tím tái màu xám, hạ thân nhiệt và tử vong) do gan trẻ sơ sinh thiếu hụt enzym Glucuronyl transferase để liên hợp thuốc và thận chưa hoàn thiện để bài tiết.
              <br>&bull; <em>Sulfamid (khi dùng vào cuối thai kỳ)</em>: Đẩy Bilirubin tự do ra khỏi vị trí gắn kết với Albumin huyết tương &rarr; nồng độ Bilirubin tự do tăng vọt ngấm qua hàng rào máu não chưa hoàn thiện của thai nhi gây <strong>Vàng da nhân não (Kernicterus)</strong> dẫn đến tổn thương não vĩnh viễn hoặc tử vong.
            </li>
            <li><strong>Hội chứng Người đỏ (Red Man Syndrome) do Vancomycin</strong>: Không phải là phản ứng dị ứng qua kháng thể IgE, mà do truyền tĩnh mạch Vancomycin quá nhanh kích thích trực tiếp dưỡng bào giải phóng histamin ồ ạt &rarr; bừng đỏ da dữ dội nửa thân trên, ngứa, tụt huyết áp. Xử trí: <strong>Kéo dài thời gian truyền tĩnh mạch ít nhất trên 60 phút</strong> và dùng thuốc kháng histamin.</li>
          </ul>
        </div>
        </div>
    </div>

    <!-- BÀI 13: HORMON -->
    <div class="chapter-accordion-item dl2-searchable-item" id="dl2-item-dl2_ch13">
      <div class="chapter-accordion-header ${dl2OpenAccordions['dl2_ch13'] ? 'active' : ''}" id="dl2-head-dl2_ch13" onclick="toggleDl2Accordion('dl2_ch13')">
        <div class="chapter-acc-title-group">
          <span class="cs-pill cs-pill-danger">🔥 3 Tiết • 6 Câu</span>
          <span class="chapter-acc-title">Bài 13: Thuốc Hormon (Corticosteroid, Tuyến Giáp, Tuyến Sinh Dục &amp; Tránh Thai)</span>
        </div>
        <span class="chapter-acc-arrow">▼</span>
      </div>
      <div class="chapter-accordion-body" id="dl2-body-dl2_ch13" style="display: ${dl2OpenAccordions['dl2_ch13'] ? 'block' : 'none'};">
<!-- BÀI 13 TOÀN DIỆN: HORMON & THUỐC KHÁNG HORMON -->
          <div class="cs-section-header" style="margin-top: 0.5rem;">
            <span>🔬</span> 1. TRỤC DƯỚI ĐỒI - TUYẾN YÊN - VỎ THƯỢNG THẬN &amp; GLUCOCORTICOID
          </div>
          <div class="cs-table-wrap">
            <table class="cs-table">
              <thead>
                <tr>
                  <th>Dược chất</th>
                  <th>Hoạt lực Kháng viêm</th>
                  <th>Hoạt lực Giữ Na+/Nước</th>
                  <th>Thời gian bán thải sinh học</th>
                  <th>Liều tương đương (mg)</th>
                  <th>Đặc điểm lâm sàng then chốt</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Hydrocortison (Cortisol)</strong></td>
                  <td>1</td>
                  <td>1 (chuẩn)</td>
                  <td>Ngắn (8 - 12h)</td>
                  <td>20 mg</td>
                  <td>Hormon tự nhiên vỏ thượng thận; dùng thay thế trong suy thượng thận cấp/mạn (Addison).</td>
                </tr>
                <tr>
                  <td><strong>Prednison / Prednisolon</strong></td>
                  <td>4</td>
                  <td>0.8</td>
                  <td>Trung bình (12 - 36h)</td>
                  <td>5 mg</td>
                  <td>Prednison là tiền dược cần CYP2C19 gan chuyển thành Prednisolon hoạt tính; trị viêm toàn thân.</td>
                </tr>
                <tr>
                  <td><strong>Methylprednisolon</strong></td>
                  <td>5</td>
                  <td>0.5</td>
                  <td>Trung bình (12 - 36h)</td>
                  <td>4 mg</td>
                  <td>Dạng muối natri succinat tiêm TM nhanh trong sốc phản vệ, cơn hen phế quản ác tính, phù não.</td>
                </tr>
                <tr>
                  <td><strong>Triamcinolon</strong></td>
                  <td>5</td>
                  <td>0 (không giữ muối)</td>
                  <td>Trung bình (12 - 36h)</td>
                  <td>4 mg</td>
                  <td>Dạng acetonid tiêm nội khớp, thoa ngoài da điều trị sẹo lồi; không gây giữ muối nước.</td>
                </tr>
                <tr>
                  <td><strong>Dexamethason</strong></td>
                  <td>30</td>
                  <td>0 (không giữ muối)</td>
                  <td>Dài (36 - 72h)</td>
                  <td>0.75 mg</td>
                  <td>Kháng viêm cực mạnh; ức chế trục HPA kéo dài; chống phù não, chống nôn do hóa trị ung thư.</td>
                </tr>
                <tr>
                  <td><strong>Betamethason</strong></td>
                  <td>25 - 30</td>
                  <td>0</td>
                  <td>Dài (36 - 72h)</td>
                  <td>0.60 - 0.75 mg</td>
                  <td>Kích thích tế bào phế nang type II sản xuất surfactant làm trưởng thành phổi thai nhi dọa sinh non.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="cs-callout-warning" style="margin-top: 0.5rem;">
            <strong>⚠️ NGUYÊN TẮC VÀNG VỀ TRỤC HPA &amp; RÚT THUỐC CORTICOID:</strong> Dùng liều dược lý toàn thân kéo dài &gt; 2-3 tuần gây ức chế feedback âm tính lên CRH và ACTH, dẫn đến teo vỏ thượng thận. BẮT BUỘC giảm liều từng bước (tapering off) trước khi ngừng hẳn, tuyệt đối không ngừng đột ngột vì sẽ gây <strong>Suy thượng thận cấp tính</strong> đe dọa tính mạng (tụt huyết áp nặng, trụy mạch, hạ Na+, tăng K+ máu).
          </div>

          <div class="cs-section-header" style="margin-top: 1rem;">
            <span>🦋</span> 2. THUỐC ĐIỀU TRỊ BỆNH LÝ TUYẾN GIÁP
          </div>
          <div class="cs-table-wrap">
            <table class="cs-table">
              <thead>
                <tr>
                  <th>Nhóm / Hoạt chất</th>
                  <th>Cơ chế tác dụng phân tử</th>
                  <th>Chỉ định &amp; Ưu tiên lâm sàng</th>
                  <th>Tác dụng không mong muốn (ADR) &amp; Cảnh báo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Propylthiouracil (PTU)</strong></td>
                  <td>Ức chế enzym TPO (Thyroid Peroxidase) ngăn gắn Iod vào Tyrosin; <strong>ỨC CHẾ THÊM enzym 5'-deiodinase ngoại vi</strong> ngăn chuyển T4 thành T3.</td>
                  <td><strong>Cấp cứu Bão giáp</strong> (do chặn cả sản xuất và chuyển hóa ngoại vi); <strong>Lựa chọn số 1 trong 3 tháng đầu thai kỳ (T1)</strong>.</td>
                  <td><strong>Suy gan bạo phát</strong> (Black box warning), mất bạch cầu hạt (agranulocytosis - sốt, viêm họng phải đi khám ngay), viêm mạch ANCA.</td>
                </tr>
                <tr>
                  <td><strong>Thiamazol (Methimazol)</strong></td>
                  <td>Ức chế chọn lọc enzym TPO trong tuyến giáp; tác dụng mạnh gấp 10 lần PTU, thời gian bán thải dài (uống 1 lần/ngày).</td>
                  <td>Bệnh Basedow thông thường; <strong>Ưu tiên trong 3 tháng giữa và cuối thai kỳ (T2, T3)</strong> và thời kỳ cho con bú.</td>
                  <td>Dị tật bẩm sinh nếu dùng ở T1: <strong>Bất sản da đầu (Aplasia cutis)</strong>, teo thực quản; mất bạch cầu hạt, viêm gan ứ mật.</td>
                </tr>
                <tr>
                  <td><strong>Dung dịch Lugol (5% I2 + 10% KI)</strong></td>
                  <td>Liều cao Iod vô cơ gây <strong>Hiệu ứng Wolff-Chaikoff</strong>: ức chế tức thì sự giải phóng T3, T4 vào máu và giảm lưu lượng máu đến tuyến giáp.</td>
                  <td>Chuẩn bị trước phẫu thuật bướu giáp Basedow (dùng 10-14 ngày trước mổ làm tuyến giáp săn chắc, giảm chảy máu); phối hợp cấp cứu cơn bão giáp.</td>
                  <td>Hiện tượng thoát ức chế (Jod-Basedow) sau 2-3 tuần; viêm tuyến nước bọt, vị kim loại, kích ứng niêm mạc miệng.</td>
                </tr>
                <tr>
                  <td><strong>Iod phóng xạ (I-131)</strong></td>
                  <td>Phát tia phóng xạ beta (tầm xuyên ngắn ~2mm) phá hủy chọn lọc các tế bào nang tuyến giáp mà không ảnh hưởng cơ quan lân cận.</td>
                  <td>Basedow tái phát sau dùng thuốc kháng giáp, bướu nhân độc tuyến giáp, ung thư biểu mô tuyến giáp thể nhú/nang.</td>
                  <td><strong>Chống chỉ định tuyệt đối phụ nữ có thai và cho con bú</strong>; biến chứng suy giáp vĩnh viễn cần bù Levothyroxin suốt đời.</td>
                </tr>
                <tr>
                  <td><strong>Levothyroxin (L-T4)</strong></td>
                  <td>Đồng phân tả tuyền của T4 tổng hợp; chuyển hóa từ từ ở ngoại vi thành T3 có hoạt tính sinh học.</td>
                  <td>Suy giáp tiên phát (viêm giáp Hashimoto), sau cắt tuyến giáp, ức chế TSH trong ung thư giáp.</td>
                  <td>Uống lúc đói vào buổi sáng (trước ăn 30-60 phút); tránh dùng chung Sắt, Canxi, Antacid vì làm giảm hấp thu. Nguy cơ cơn đau thắt ngực ở người già.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="cs-section-header" style="margin-top: 1rem;">
            <span>🧬</span> 3. THUỐC TÁC DỤNG LÊN TRỤC SINH DỤC &amp; KHÁNG HORMON
          </div>
          <div class="cs-table-wrap">
            <table class="cs-table">
              <thead>
                <tr>
                  <th>Hoạt chất</th>
                  <th>Phân loại &amp; Cơ chế</th>
                  <th>Chỉ định then chốt</th>
                  <th>Điểm lưu ý dược lý lâm sàng đặc thù</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Tamoxifen</strong></td>
                  <td>SERM (Điều hòa thụ thể estrogen chọn lọc): <strong>Kháng estrogen tại mô vú</strong> nhưng <strong>Đồng vận estrogen tại tử cung và xương</strong>.</td>
                  <td>Điều trị và dự phòng ung thư vú có thụ thể estrogen dương tính (ER+).</td>
                  <td>Tác dụng đồng vận tại tử cung làm tăng nguy cơ <strong>Ung thư nội mạc tử cung</strong> và <strong>Thuyên tắc huyết khối tĩnh mạch (DVT/PE)</strong>; bốc hỏa.</td>
                </tr>
                <tr>
                  <td><strong>Raloxifene</strong></td>
                  <td>SERM: Kháng estrogen tại vú và tử cung; Đồng vận estrogen chọn lọc trên mô xương.</td>
                  <td>Dự phòng và điều trị loãng xương ở phụ nữ hậu mãn kinh.</td>
                  <td><strong>Không làm tăng nguy cơ ung thư nội mạc tử cung</strong> (ưu điểm vượt trội so với Tamoxifen); vẫn có nguy cơ huyết khối tĩnh mạch.</td>
                </tr>
                <tr>
                  <td><strong>Clomiphene</strong></td>
                  <td>Chất kháng thụ thể estrogen tại vùng dưới đồi; ngăn feedback âm tính -> tăng tiết GnRH, FSH, LH từ tuyến yên.</td>
                  <td>Kích thích rụng trứng trong điều trị vô sinh do không phóng noãn (hội chứng buồng trứng đa nang - PCOS).</td>
                  <td>Nguy cơ đa thai (sinh đôi, sinh ba) và hội chứng quá kích buồng trứng (OHSS - dịch ổ bụng, đau quặn chậu).</td>
                </tr>
                <tr>
                  <td><strong>Finasteride / Dutasteride</strong></td>
                  <td>Ức chế chọn lọc enzym <strong>5-alpha-reductase</strong>, ngăn cản chuyển Testosteron thành Dihydrotestosteron (DHT) nội bào.</td>
                  <td>Phì đại lành tính tuyến tiền liệt (BPH), rụng tóc theo kiểu hình nam giới (Androgenetic alopecia).</td>
                  <td>Làm giảm 50% nồng độ PSA huyết thanh (cần nhân đôi PSA khi tầm soát ung thư TLT); quái thai dị tật cơ quan sinh dục ngoài thai nam (cấm phụ nữ mang thai tiếp xúc viên vỡ).</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- BẢNG VÀNG ĐIỂM CHÚ Ý ĐẶC BIỆT BÀI 13 -->
          <div class="cs-gold-box" style="margin-top: 1rem;">
            <div class="cs-gold-title">⭐ BẢNG VÀNG ĐIỂM CHÚ Ý ĐẶC BIỆT - BÀI 13: HORMON &amp; KHÁNG HORMON</div>
            <ul class="cs-gold-list">
              <li><strong>Quy tắc tam cá nguyệt trong thai kỳ cường giáp:</strong> PTU ưu tiên dùng trong 3 tháng đầu (T1) vì Thiamazol gây quái thai bất sản da đầu (Aplasia cutis). Từ tháng thứ 4 trở đi (T2, T3) BẮT BUỘC đổi sang Thiamazol vì PTU có cảnh báo hộp đen gây hoại tử suy gan bạo phát!</li>
              <li><strong>Hiệu ứng Wolff-Chaikoff của Iod:</strong> Dung dịch Lugol ức chế tuyến giáp chỉ có tác dụng tối đa trong 10-14 ngày. Sau 2-3 tuần sẽ xảy ra hiện tượng "thoát ức chế" (escape phenomenon), tuyến giáp hoạt động trở lại dữ dội, do đó chỉ dùng Lugol chuẩn bị mổ hoặc cấp cứu bão giáp!</li>
              <li><strong>Đặc tính 2 mặt của Tamoxifen:</strong> Kháng thụ thể estrogen ở tế bào biểu mô tuyến vú (chữa ung thư vú) nhưng lại ĐỒNG VẬN ở nội mạc tử cung (gây quá sản và ung thư nội mạc tử cung) và ở tế bào gan (tăng yếu tố đông máu gây thuyên tắc phổi).</li>
              <li><strong>Quy tắc uống L-Thyroxin:</strong> Hấp thu tối ưu ở dạ dày trống acid; phải uống cách xa bữa ăn sáng ít nhất 30-60 phút và cách xa viên sắt/canxi tối thiểu 4 giờ vì tạo chelat tủa làm mất hoàn toàn hoạt tính.</li>
            </ul>
          </div>

          <div style="margin-top: 0.75rem;">
            <button class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.35rem 0.75rem;" onclick="jumpToDl2Topic('Hormon')">
              🎯 Luyện đề trắc nghiệm Bài 13: Thuốc Hormon
            </button>
          </div>
        </div>
    </div>

    <!-- BÀI 14: THUỐC HẠ GLUCOSE MÁU -->
    <div class="chapter-accordion-item dl2-searchable-item" id="dl2-item-dl2_ch14">
      <div class="chapter-accordion-header ${dl2OpenAccordions['dl2_ch14'] ? 'active' : ''}" id="dl2-head-dl2_ch14" onclick="toggleDl2Accordion('dl2_ch14')">
        <div class="chapter-acc-title-group">
          <span class="cs-pill cs-pill-primary">🔥 2 Tiết • 4 Câu</span>
          <span class="chapter-acc-title">Bài 14: Thuốc Hạ Glucose Máu (Insulin &amp; Các Nhóm Thuốc Uống)</span>
        </div>
        <span class="chapter-acc-arrow">▼</span>
      </div>
      <div class="chapter-accordion-body" id="dl2-body-dl2_ch14" style="display: ${dl2OpenAccordions['dl2_ch14'] ? 'block' : 'none'};">
<!-- BÀI 14 TOÀN DIỆN: THUỐC HẠ GLUCOSE MÁU -->
          <div class="cs-section-header" style="margin-top: 0.5rem;">
            <span>🩸</span> 1. PHÂN LOẠI &amp; CƠ CHẾ CÁC NHÓM THUỐC HẠ GLUCOSE ĐƯỜNG UỐNG / TIÊM KHÔNG PHẢI INSULIN
          </div>
          <div class="cs-table-wrap">
            <table class="cs-table">
              <thead>
                <tr>
                  <th>Nhóm thuốc</th>
                  <th>Hoạt chất đại diện</th>
                  <th>Cơ chế tác động phân tử</th>
                  <th>Ưu điểm &amp; Tác động cân nặng</th>
                  <th>Nguy cơ chính &amp; Chống chỉ định</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Biguanid</strong></td>
                  <td><strong>Metformin</strong> (Glucophage)</td>
                  <td>Kích hoạt enzym AMPK gan -&gt; ức chế tân tạo glucose ở gan, tăng nhạy cảm insulin ngoại vi mô cơ/mỡ, giảm hấp thu glucose ở ruột.</td>
                  <td>Lựa chọn đầu tay ĐTĐ tuýp 2; <strong>Không gây hạ đường huyết đơn độc</strong>; trung tính hoặc giảm nhẹ cân nặng; rẻ tiền.</td>
                  <td><strong>Nhiễm toan acid lactic</strong> (nguy cơ tử vong cao); chống chỉ định eGFR &lt; 30 mL/phút/1.73m2, suy gan, nghiện rượu, sốc giảm oxy mô.</td>
                </tr>
                <tr>
                  <td><strong>Sulfonylureas (SU)</strong></td>
                  <td>Gliclazid (Diamicron MR), Glimepirid, Glibenclamid</td>
                  <td>Gắn thụ thể SUR1 làm đóng kênh K_ATP tại màng tế bào beta tụy -&gt; khử cực màng, mở kênh Ca2+ nhạy cảm điện thế -&gt; kích thích bài tiết insulin.</td>
                  <td>Hiệu quả hạ HbA1c nhanh và mạnh (giảm 1.0 - 1.5%); Gliclazid MR chuyển hóa gan thành chất bất hoạt nên an toàn hơn trên thận.</td>
                  <td><strong>Nguy cơ cao hạ đường huyết kéo dài</strong> (đặc biệt Glibenclamid ở người già); <strong>tăng cân</strong>; kiệt quệ tế bào beta sau nhiều năm.</td>
                </tr>
                <tr>
                  <td><strong>Meglitinides (Glinides)</strong></td>
                  <td>Repaglinide, Nateglinide</td>
                  <td>Cơ chế tương tự SU (đóng kênh K_ATP) nhưng gắn vào vị trí khác trên SUR1; khởi đầu tác dụng cực nhanh, thời gian bán thải rất ngắn.</td>
                  <td>Kiểm soát đường huyết sau bữa ăn; uống ngay trước bữa ăn (15 phút); an toàn cho bệnh nhân suy giảm chức năng thận.</td>
                  <td>Vẫn có nguy cơ hạ đường huyết và tăng cân nhẹ; phải uống nhiều lần trong ngày theo bữa ăn.</td>
                </tr>
                <tr>
                  <td><strong>Thiazolidinediones (TZDs)</strong></td>
                  <td>Pioglitazone, Rosiglitazone</td>
                  <td>Đồng vận thụ thể hạt nhân PPAR-gamma -&gt; tăng phiên mã gen nhạy cảm insulin tại mô mỡ, cơ và gan; giảm đề kháng insulin sâu sắc.</td>
                  <td>Hạ HbA1c bền vững; cải thiện lipid máu (tăng HDL-C, giảm TG); không gây hạ đường huyết đơn độc.</td>
                  <td><strong>Giữ muối nước gây phù, suy tim sung huyết</strong> (chống chỉ định NYHA III-IV); tăng cân; tăng nguy cơ gãy xương ở phụ nữ; Pioglitazone cảnh báo K bàng quang.</td>
                </tr>
                <tr>
                  <td><strong>Ức chế Alpha-glucosidase</strong></td>
                  <td><strong>Acarbose</strong>, Miglitol</td>
                  <td>Ức chế cạnh tranh men alpha-glucosidase tại diềm bàn chải ruột non -&gt; làm chậm phân giải disaccharide, oligosaccharide thành monosaccharide.</td>
                  <td>Hạ đỉnh đường huyết sau ăn; không hấp thu vào máu (tác dụng tại lòng ruột); không gây hạ đường huyết đơn độc.</td>
                  <td>Đầy hơi, chướng bụng, sôi bụng, tiêu chảy (do vi khuẩn lên men đường chưa hấp thu). <strong>QUY TẮC CỨU CẤP: Dùng Glucose đơn phân (Dextrose), KHÔNG dùng đường mía (sucrose)!</strong></td>
                </tr>
                <tr>
                  <td><strong>Ức chế DPP-4 (Gliptin)</strong></td>
                  <td>Sitagliptin, Vildagliptin, Saxagliptin, <strong>Linagliptin</strong></td>
                  <td>Ức chế enzym Dipeptidyl Peptidase-4 -&gt; kéo dài thời gian bán hủy của incretin nội sinh (GLP-1, GIP) -&gt; tăng tiết insulin phụ thuộc glucose.</td>
                  <td>Uống tiện lợi; trung tính cân nặng; không gây hạ đường huyết đơn độc. <strong>Linagliptin thải 95% qua phân/mật, không cần chỉnh liều ở mọi mức độ suy thận!</strong></td>
                  <td>Viêm tụy cấp; Saxagliptin làm tăng nguy cơ nhập viện do suy tim; đau khớp nặng.</td>
                </tr>
                <tr>
                  <td><strong>Đồng vận thụ thể GLP-1 (GLP-1 RA)</strong></td>
                  <td>Liraglutide, Dulaglutide, Semaglutide (Ozempic)</td>
                  <td>Kích hoạt trực tiếp thụ thể GLP-1 -&gt; tăng tiết insulin và giảm tiết glucagon phụ thuộc nồng độ glucose; làm chậm vơi dạ dày; tạo cảm giác no ở TKTW.</td>
                  <td><strong>Giảm cân mạnh mẽ</strong>; giảm biến cố tim mạch xơ vữa lớn (MACE); bảo vệ thận; tiêm dưới da 1 lần/tuần (hoặc viên uống Semaglutide).</td>
                  <td>Buồn nôn, nôn; viêm tụy cấp; <strong>Chống chỉ định tiền sử bản thân/gia đình ung thư biểu mô tuyến giáp thể tủy (MTC) hoặc MEN 2</strong>.</td>
                </tr>
                <tr>
                  <td><strong>Ức chế SGLT2 (Gliflozin)</strong></td>
                  <td>Dapagliflozin (Forxiga), Empagliflozin (Jardiance)</td>
                  <td>Ức chế kênh đồng vận chuyển Natri-Glucose 2 tại ống lượn gần -&gt; ngăn tái hấp thu glucose, tăng đào thải glucose và natri qua nước tiểu (~70-80g glucose/ngày).</td>
                  <td><strong>Bảo vệ tim mạch vượt trội</strong> (giảm tử vong tim mạch, giảm nhập viện do suy tim phân suất tống máu giảm và bảo tồn); làm chậm tiến triển bệnh thận mạn; giảm HA và giảm cân.</td>
                  <td>Nhiễm nấm sinh dục - tiết niệu; viêm mô hoại tử vùng đáy chậu (Fournier gangrene); mất nước tụt HA; <strong>Nhiễm toan ceton với đường huyết bình thường hoặc tăng nhẹ (Euglycemic DKA)</strong>.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="cs-section-header" style="margin-top: 1rem;">
            <span>💉</span> 2. INSULIN &amp; CÁC PHÁC ĐỒ ĐIỀU TRỊ
          </div>
          <div class="cs-table-wrap">
            <table class="cs-table">
              <thead>
                <tr>
                  <th>Loại Insulin</th>
                  <th>Chế phẩm đại diện</th>
                  <th>Khởi đầu tác dụng</th>
                  <th>Đỉnh tác dụng</th>
                  <th>Thời gian tác dụng</th>
                  <th>Thời điểm tiêm tối ưu</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Tác dụng cực nhanh (Rapid-acting)</strong></td>
                  <td>Insulin Lispro, Aspart, Glulisine</td>
                  <td>10 - 20 phút</td>
                  <td>1 - 2 giờ</td>
                  <td>3 - 5 giờ</td>
                  <td>Tiêm ngay trước bữa ăn (0 - 15 phút) hoặc ngay sau khi ăn.</td>
                </tr>
                <tr>
                  <td><strong>Tác dụng ngắn (Short-acting / Regular)</strong></td>
                  <td>Actrapid, Humulin R (Insulin người kết tinh)</td>
                  <td>30 - 60 phút</td>
                  <td>2 - 4 giờ</td>
                  <td>6 - 8 giờ</td>
                  <td>Tiêm trước bữa ăn 30 phút. <strong>Là loại DUY NHẤT tiêm truyền tĩnh mạch cấp cứu toan ceton</strong>.</td>
                </tr>
                <tr>
                  <td><strong>Tác dụng bán chậm (Intermediate)</strong></td>
                  <td>NPH (Neutral Protamine Hagedorn / Insulatard)</td>
                  <td>1 - 2 giờ</td>
                  <td>4 - 8 giờ</td>
                  <td>12 - 18 giờ</td>
                  <td>Hỗn dịch đục do gắn Protamin; tiêm dưới da 1 - 2 lần/ngày để kiểm soát nền.</td>
                </tr>
                <tr>
                  <td><strong>Tác dụng kéo dài (Long-acting / Basal)</strong></td>
                  <td>Insulin Glargine (Lantus), Detemir (Levemir), Degludec</td>
                  <td>1 - 2 giờ</td>
                  <td><strong>Không có đỉnh nhọn</strong> (đường cong nồng độ phẳng)</td>
                  <td>24 - 42 giờ</td>
                  <td>Tiêm vào một giờ cố định mỗi ngày (thường buổi tối); kiểm soát đường huyết nền ổn định suốt 24h.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- BẢNG VÀNG ĐIỂM CHÚ Ý ĐẶC BIỆT BÀI 14 -->
          <div class="cs-gold-box" style="margin-top: 1rem;">
            <div class="cs-gold-title">⭐ BẢNG VÀNG ĐIỂM CHÚ Ý ĐẶC BIỆT - BÀI 14: THUỐC HẠ GLUCOSE MÁU</div>
            <ul class="cs-gold-list">
              <li><strong>Quy tắc giải cứu hạ đường huyết khi dùng Acarbose:</strong> Nếu bệnh nhân phối hợp Acarbose với Sulfonylurea hoặc Insulin mà bị hạ đường huyết cấp, TUYỆT ĐỐI KHÔNG cho uống nước đường mía (sucrose/đường cát) vì men alpha-glucosidase bị khóa nên ruột không phân giải được! BẮT BUỘC phải dùng GLUCOSE ĐƠN PHÂN (Dextrose) dạng viên nhai, siro glucose hoặc tiêm TM!</li>
              <li><strong>Nhiễm toan ceton đường huyết bình thường (euDKA) của SGLT2i:</strong> Bệnh nhân dùng Gliflozin có thể rơi vào tình trạng toan ceton nặng nguy kịch nhưng glucose máu chỉ tăng nhẹ (&lt; 250 mg/dL hoặc thậm chí bình thường), khiến rất dễ bị bỏ sót chẩn đoán nếu chỉ xét nghiệm mao mạch!</li>
              <li><strong>Phân biệt hiện tượng Somogyi và Hiệu ứng Bình minh (Dawn phenomenon):</strong> Đều biểu hiện tăng đường huyết lúc sáng sớm đói. Cần đo glucose lúc 3h sáng: Nếu đường huyết 3h sáng THẤP (&lt; 70 mg/dL) là do hiệu ứng Somogyi (phản ứng bù trừ hormon đối vận sau hạ đường huyết đêm) -&gt; Xử trí GIẢM liều insulin tối; nếu đường huyết 3h sáng BÌNH THƯỜNG hoặc CAO là do Hiện tượng bình minh (tăng tiết GH, cortisol sinh lý rạng sáng) -&gt; Xử trí TĂNG liều insulin tối.</li>
              <li><strong>An toàn tuyệt đối trên suy thận của Linagliptin:</strong> Duy nhất Linagliptin trong nhóm DPP-4i đào thải qua hệ gan - mật phân (95%), cho phép dùng cùng một mức liều 5mg duy nhất mà không cần xét đến eGFR của người bệnh.</li>
            </ul>
          </div>

          <div style="margin-top: 0.75rem;">
            <button class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.35rem 0.75rem;" onclick="jumpToDl2Topic('Thuốc hạ glucose máu')">
              🎯 Luyện đề trắc nghiệm Bài 14: Thuốc Hạ Glucose Máu
            </button>
          </div>
        </div>
    </div>

    <!-- BÀI 15: THUỐC ĐÔNG CẦM MÁU -->
    <div class="chapter-accordion-item dl2-searchable-item" id="dl2-item-dl2_ch15">
      <div class="chapter-accordion-header ${dl2OpenAccordions['dl2_ch15'] ? 'active' : ''}" id="dl2-head-dl2_ch15" onclick="toggleDl2Accordion('dl2_ch15')">
        <div class="chapter-acc-title-group">
          <span class="cs-pill cs-pill-primary">🔥 2 Tiết • 4 Câu</span>
          <span class="chapter-acc-title">Bài 15: Thuốc Tác Dụng Lên Quá Trình Đông Cầm Máu</span>
        </div>
        <span class="chapter-acc-arrow">▼</span>
      </div>
      <div class="chapter-accordion-body" id="dl2-body-dl2_ch15" style="display: ${dl2OpenAccordions['dl2_ch15'] ? 'block' : 'none'};">
<!-- BÀI 15 TOÀN DIỆN: THUỐC TÁC DỤNG LÊN QUÁ TRÌNH ĐÔNG CẦM MÁU -->
          <div class="cs-section-header" style="margin-top: 0.5rem;">
            <span>🩸</span> 1. THUỐC CHỐNG ĐÔNG MÁU: PHÂN LOẠI &amp; CƠ CHẾ SINH HỌC
          </div>
          <div class="cs-table-wrap">
            <table class="cs-table">
              <thead>
                <tr>
                  <th>Nhóm / Hoạt chất</th>
                  <th>Cơ chế tác động phân tử</th>
                  <th>Xét nghiệm theo dõi</th>
                  <th>Chất giải độc đặc hiệu (Antidote)</th>
                  <th>Đặc điểm dược lý lâm sàng nổi bật</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Heparin không phân đoạn (UFH)</strong></td>
                  <td>Gắn kết với Antithrombin III (AT-III) làm tăng hoạt tính ức chế Thrombin (IIa) và Yếu tố Xa lên gấp 1000 lần (tỷ lệ ức chế IIa:Xa = 1:1).</td>
                  <td><strong>aPTT</strong> (duy trì 1.5 - 2.5 lần chứng); đếm tiểu cầu theo dõi HIT.</td>
                  <td><strong>Protamin sulfat</strong> (1 mg Protamin trung hòa ~100 IU UFH).</td>
                  <td>Khởi đầu ngay lập tức khi tiêm TM; thời gian bán thải ngắn (~90 phút); an toàn cho suy thận nặng vì thanh thải qua hệ võng nội mô; biến chứng nặng: Giảm tiểu cầu do Heparin (HIT type II do kháng thể kháng phức hợp Heparin-PF4).</td>
                </tr>
                <tr>
                  <td><strong>Heparin trọng lượng phân tử thấp (LMWH)</strong><br>(Enoxaparin, Dalteparin)</td>
                  <td>Chuỗi polysaccharid ngắn hơn (&lt; 18 gốc đường), tạo phức với AT-III chủ yếu <strong>ức chế chọn lọc yếu tố Xa</strong> (tỷ lệ ức chế Xa:IIa từ 2:1 đến 4:1).</td>
                  <td>Không cần theo dõi thường quy; xét nghiệm <strong>nồng độ Anti-Xa</strong> ở bệnh nhân béo phì, suy thận, phụ nữ có thai.</td>
                  <td><strong>Protamin sulfat</strong> (chỉ trung hòa một phần khoảng 60% hoạt tính Anti-Xa).</td>
                  <td>SKD tiêm dưới da cao (&gt;90%), thời gian bán thải dài (uống 1-2 lần/ngày); đào thải qua thận (chống chỉ định hoặc phải giảm liều khi CrCl &lt; 30 mL/phút); tỷ lệ gây HIT type II thấp hơn UFH.</td>
                </tr>
                <tr>
                  <td><strong>Fondaparinux</strong></td>
                  <td>Pentasaccharide tổng hợp gắn đặc hiệu AT-III, <strong>ức chế gián tiếp 100% chọn lọc yếu tố Xa</strong> (hoàn toàn không ức chế Thrombin IIa).</td>
                  <td>Đo nồng độ Anti-Xa chuyên biệt (nếu cần).</td>
                  <td><strong>Chưa có chất giải độc đặc hiệu</strong> (Andexanet alfa có thể thử nghiệm; rFVIIa dùng khi nguy kịch).</td>
                  <td>Tuyệt đối không gây phản ứng chéo với kháng thể HIT, dùng thay thế an toàn khi BN có tiền sử HIT; chống chỉ định CrCl &lt; 30 mL/phút.</td>
                </tr>
                <tr>
                  <td><strong>Kháng Vitamin K (VKA)</strong><br>(Warfarin, Acenocoumarol - Sintrom)</td>
                  <td>Ức chế enzym <strong>VKORC1 (Vitamin K epoxide reductase)</strong> -&gt; ngăn khử Vitamin K -&gt; ức chế gamma-carboxyl hóa các yếu tố đông máu <strong>II, VII, IX, X</strong> và 2 protein chống đông tự nhiên <strong>Protein C, Protein S</strong>.</td>
                  <td><strong>PT / INR</strong> (Mục tiêu INR 2.0 - 3.0 trong rung nhĩ, DVT; 2.5 - 3.5 trong van tim cơ học).</td>
                  <td><strong>Vitamin K1 (Phytomenadion)</strong> đường uống hoặc tiêm TM chậm; phối hợp huyết tương tươi đông lạnh (FFP) hoặc phức hợp prothrombin cô đặc (PCC) khi chảy máu cấp nguy kịch.</td>
                  <td>Khởi đầu tác dụng chậm (đòi hỏi 3-5 ngày để các yếu tố đông máu cũ cạn kiệt, cần gối đầu Heparin); nguy cơ <strong>Hoại tử da do Warfarin</strong> trong vài ngày đầu (do Protein C có t1/2 ngắn tụt nhanh trước các yếu tố đông máu); qua được nhau thai gây <strong>Hội chứng Warfarin bào thai</strong> (quái thai dị tật mũi, xương).</td>
                </tr>
                <tr>
                  <td><strong>DOACs: Ức chế trực tiếp Thrombin</strong><br>(Dabigatran - Pradaxa)</td>
                  <td>Ức chế trực tiếp, thuận nghịch phân tử Thrombin tự do và Thrombin đã gắn vào cục máu đông mà không phụ thuộc AT-III.</td>
                  <td>Không cần theo dõi thường quy; đo ECT hoặc dTT nếu khẩn cấp.</td>
                  <td><strong>Idarucizumab (Praxbind)</strong> - kháng thể đơn dòng nhân hóa liên kết Dabigatran với ái lực mạnh gấp 350 lần Thrombin.</td>
                  <td>Là tiền dược dabigatran etexilate; đào thải 80% qua thận; bảo quản nguyên trong vỉ nhôm vì rất nhạy cảm với độ ẩm.</td>
                </tr>
                <tr>
                  <td><strong>DOACs: Ức chế trực tiếp yếu tố Xa</strong><br>(Rivaroxaban, Apixaban, Edoxaban)</td>
                  <td>Gắn chọn lọc vào vị trí hoạt động của yếu tố Xa tự do và phức hợp prothrombinase, ức chế trực tiếp quá trình chuyển prothrombin thành thrombin.</td>
                  <td>Không cần theo dõi thường quy; xét nghiệm Anti-Xa đã hiệu chuẩn nếu cấp cứu.</td>
                  <td><strong>Andexanet alfa (Andexxa)</strong> - protein mồi nhử mô phỏng yếu tố Xa bất hoạt gắn chặt các thuốc nhóm xaban.</td>
                  <td>Rivaroxaban phải uống cùng thức ăn (ở liều 15-20mg) để tối đa hóa sinh khả dụng; Apixaban thải trừ qua thận ít nhất (27%) nên an toàn nhất trên BN suy thận mạn.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="cs-section-header" style="margin-top: 1rem;">
            <span>🩸</span> 2. THUỐC CHỐNG KẾT TẬP TIỂU CẦU &amp; TIÊU SỢI HUYẾT
          </div>
          <div class="cs-table-wrap">
            <table class="cs-table">
              <thead>
                <tr>
                  <th>Nhóm dược lý</th>
                  <th>Hoạt chất đại diện</th>
                  <th>Cơ chế tác động sinh học</th>
                  <th>Đặc điểm lâm sàng &amp; Cảnh báo then chốt</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Ức chế COX-1 không hồi phục</strong></td>
                  <td><strong>Aspirin</strong> (Liều thấp 75 - 100 mg/ngày)</td>
                  <td>Acetyl hóa không thuận nghịch vị trí Serin 529 của enzym COX-1 tiểu cầu -&gt; ức chế vĩnh viễn tổng hợp Thromboxane A2 (TXA2) trong suốt vòng đời tiểu cầu (7-10 ngày).</td>
                  <td>Liều thấp ức chế chọn lọc TXA2 tiểu cầu mà ít ảnh hưởng PGI2 (Prostacyclin giãn mạch chống đông) ở nội mạc mạch máu; cần ngừng trước mổ phiên 5-7 ngày.</td>
                </tr>
                <tr>
                  <td><strong>Kháng thụ thể P2Y12 (Thienopyridin)</strong></td>
                  <td><strong>Clopidogrel</strong> (Plavix), Prasugrel</td>
                  <td>Tiền dược được enzym gan (chủ yếu CYP2C19 với Clopidogrel) chuyển hóa thành chất có hoạt tính gắn cộng hóa trị không thuận nghịch vào thụ thể P2Y12 của ADP trên màng tiểu cầu.</td>
                  <td>Bệnh nhân mang alen biến thể mất chức năng CYP2C19*2 hoặc CYP2C19*3 bị kháng Clopidogrel (tăng nguy cơ tái tắc stent); tránh dùng chung thuốc ức chế CYP2C19 như Omeprazol. Prasugrel mạnh hơn nhưng chống chỉ định ở người có tiền sử đột quỵ não.</td>
                </tr>
                <tr>
                  <td><strong>Kháng thụ thể P2Y12 (Non-thienopyridin)</strong></td>
                  <td><strong>Ticagrelor</strong> (Brilinta)</td>
                  <td>Gắn thuận nghịch trực tiếp vào thụ thể P2Y12 tại vị trí allosteric mà không cần chuyển hóa qua gan.</td>
                  <td>Khởi đầu tác dụng nhanh hơn Clopidogrel; tác dụng phụ đặc thù: <strong>Khó thở cơ năng (dyspnea)</strong> và ngưng xoang thất do ức chế thu hồi Adenosin nội sinh.</td>
                </tr>
                <tr>
                  <td><strong>Kháng thụ thể Glycoprotein IIb/IIIa</strong></td>
                  <td>Abciximab, Tirofiban, Eptifibatide</td>
                  <td>Ngăn cản Fibrinogen và yếu tố von Willebrand gắn vào thụ thể GPIIb/IIIa - con đường chung cuối cùng của sự kết tập tiểu cầu.</td>
                  <td>Dùng đường tiêm tĩnh mạch trong can thiệp mạch vành qua da (PCI) cấp cứu nhồi máu cơ tim; nguy cơ xuất huyết nặng và giảm tiểu cầu cấp.</td>
                </tr>
                <tr>
                  <td><strong>Thuốc tiêu sợi huyết (Fibrinolytics)</strong></td>
                  <td><strong>Streptokinase</strong>, Alteplase (t-PA tái tổ hợp), Tenecteplase</td>
                  <td>Chuyển Plasminogen thành Plasmin - enzym thủy phân phân hủy lưới Fibrin làm tan cục máu đông đang tồn tại.</td>
                  <td>Streptokinase có nguồn gốc từ liên cầu khuẩn, có tính kháng nguyên cao: <strong>CHỈ ĐƯỢC DÙNG 1 LẦN DUY NHẤT</strong> trong đời hoặc không dùng lại sau 5 ngày do kháng thể trung hòa và nguy cơ sốc phản vệ; Alteplase chọn lọc trên Fibrin cục máu đông, dùng trong cấp cứu nhồi máu não cấp (trong vòng 4.5h) và NMCT cấp.</td>
                </tr>
                <tr>
                  <td><strong>Thuốc kháng tiêu sợi huyết / Cầm máu</strong></td>
                  <td><strong>Acid Tranexamic</strong>, Acid aminocaproic</td>
                  <td>Gắn cạnh tranh vào vị trí liên kết lysine của Plasminogen, ngăn cản Plasminogen tiếp cận và phá hủy mạng lưới Fibrin.</td>
                  <td>Chỉ định xuất huyết sau nhổ răng ở BN rối loạn đông máu, rong kinh nguyên phát, chấn thương nặng chảy máu; chống chỉ định tiền sử huyết khối tắc mạch.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- BẢNG VÀNG ĐIỂM CHÚ Ý ĐẶC BIỆT BÀI 15 -->
          <div class="cs-gold-box" style="margin-top: 1rem;">
            <div class="cs-gold-title">⭐ BẢNG VÀNG ĐIỂM CHÚ Ý ĐẶC BIỆT - BÀI 15: THUỐC ĐÔNG CẦM MÁU</div>
            <ul class="cs-gold-list">
              <li><strong>Hội chứng Giảm tiểu cầu do Heparin (HIT type II):</strong> Là phản ứng miễn dịch dị ứng qua trung gian kháng thể IgG kháng phức hợp Heparin-PF4. Xảy ra sau 5-10 ngày dùng thuốc, tiểu cầu giảm &gt; 50% kèm theo NGHỊCH LÝ XUẤT HIỆN HUYẾT KHỐI TẮC MẠCH DỮ DỘI đe dọa hoại tử chi và tử vong! Xử trí khẩn cấp: Ngừng ngay toàn bộ Heparin (kể cả tráng catheter), tuyệt đối không truyền tiểu cầu, chuyển sang dùng thuốc ức chế trực tiếp Thrombin đường tiêm (Argatroban, Bivalirudin) hoặc Fondaparinux!</li>
              <li><strong>Hiện tượng Hoại tử da do Warfarin (Warfarin-induced skin necrosis):</strong> Trong 48-72h đầu dùng Warfarin, nồng độ Protein C (protein chống đông nội sinh) giảm rất nhanh do t1/2 chỉ có 6-8 giờ, trong khi Prothrombin (yếu tố II) t1/2 tới 60 giờ vẫn còn lưu hành. Giai đoạn này cơ thể rơi vào trạng thái tăng đông tạm thời gây tắc vi mạch hoại tử mô mỡ/da (vú, đùi, mông). Do đó LUÔN BẮT BUỘC gối đầu Heparin ít nhất 5 ngày cho đến khi INR đạt mục tiêu &gt; 2.0 trong 2 ngày liên tiếp!</li>
              <li><strong>Cặp đôi Thuốc giải độc DOACs thế hệ mới:</strong> Idarucizumab (Praxbind) là kháng thể đặc hiệu giải độc cho Dabigatran (IIa). Andexanet alfa là protein mồi nhử Xa giải độc cho các thuốc nhóm -xaban (Rivaroxaban, Apixaban).</li>
              <li><strong>Quy tắc dùng Streptokinase một lần duy nhất:</strong> Do Streptokinase chiết xuất từ liên cầu khuẩn Streptococcus, cơ thể sẽ sinh hiệu giá kháng thể kháng Streptokinase rất cao sau khi dùng. Nếu tiêm lại sau 5 ngày đến 12 tháng, thuốc sẽ bị kháng thể trung hòa mất sạch tác dụng và gây sốc phản vệ nguy kịch!</li>
            </ul>
          </div>

          <div style="margin-top: 0.75rem;">
            <button class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.35rem 0.75rem;" onclick="jumpToDl2Topic('Thuốc/QT đông cầm máu')">
              🎯 Luyện đề trắc nghiệm Bài 15: Thuốc Đông Cầm Máu
            </button>
          </div>
        </div>
    </div>

    <!-- BÀI 16: VITAMIN -->
    <div class="chapter-accordion-item dl2-searchable-item" id="dl2-item-dl2_ch16">
      <div class="chapter-accordion-header ${dl2OpenAccordions['dl2_ch16'] ? 'active' : ''}" id="dl2-head-dl2_ch16" onclick="toggleDl2Accordion('dl2_ch16')">
        <div class="chapter-acc-title-group">
          <span class="cs-pill cs-pill-warning">⚡ 0 Tiết • 2 Câu</span>
          <span class="chapter-acc-title">Bài 16: Thuốc Vitamin (Vitamin Tan Trong Dầu &amp; Tan Trong Nước)</span>
        </div>
        <span class="chapter-acc-arrow">▼</span>
      </div>
      <div class="chapter-accordion-body" id="dl2-body-dl2_ch16" style="display: ${dl2OpenAccordions['dl2_ch16'] ? 'block' : 'none'};">
<!-- BÀI 16 TOÀN DIỆN: VITAMIN TRONG ĐIỀU TRỊ -->
          <div class="cs-section-header" style="margin-top: 0.5rem;">
            <span>💧</span> 1. CÁC VITAMIN TAN TRONG NƯỚC (NHÓM B &amp; C)
          </div>
          <div class="cs-table-wrap">
            <table class="cs-table">
              <thead>
                <tr>
                  <th>Tên Vitamin</th>
                  <th>Dạng Coenzym hoạt tính sinh học</th>
                  <th>Bệnh lý do Thiếu hụt điển hình</th>
                  <th>Tác dụng phụ liều cao / Tương tác dược lý then chốt</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>B1 (Thiamin)</strong></td>
                  <td><strong>TPP (Thiamin pyrophosphat)</strong> xúc tác khử carboxyl oxy hóa pyruvate thành Acetyl-CoA và alpha-ketoglutarate.</td>
                  <td><strong>Bệnh Beriberi</strong>: Thể ướt (suy tim cung lượng cao, phù), Thể khô (viêm đa dây thần kinh đối xứng). Hội chứng não <strong>Wernicke-Korsakoff</strong> ở người nghiện rượu (lú lẫn, mất điều hòa, liệt vận nhãn).</td>
                  <td>Tiêm TM nhanh có thể gây sốc phản vệ; <strong>LUÔN TIÊM B1 TRƯỚC KHI TRUYỀN DỊCH GLUCOSE</strong> ở bệnh nhân nghiện rượu hôn mê để tránh kích phát cấp não Wernicke.</td>
                </tr>
                <tr>
                  <td><strong>B2 (Riboflavin)</strong></td>
                  <td><strong>FMN và FAD</strong> vận chuyển điện tử trong chuỗi hô hấp tế bào ty thể.</td>
                  <td>Viêm môi nứt kẽ mép (cheilosis), viêm lưỡi bóng đỏ (magenta tongue), viêm kết mạc mắt, viêm da tiết bã nhờn.</td>
                  <td>Rất an toàn; liều cao làm <strong>nước tiểu có màu vàng huỳnh quang sáng</strong> (vô hại nhưng cần giải thích trước cho người bệnh).</td>
                </tr>
                <tr>
                  <td><strong>B3 (Niacin / Acid Nicotinic)</strong></td>
                  <td><strong>NAD+ và NADP+</strong> tham gia hàng trăm phản ứng oxy hóa khử và tổng hợp năng lượng ATP.</td>
                  <td><strong>Bệnh Pellagra kinh điển với Tam chứng 3D</strong>: Dermatitis (viêm da nhạy cảm ánh sáng hình cánh bướm/vòng cổ Casal), Diarrhea (tiêu chảy), Dementia (sa sút trí tuệ); chữ D thứ 4 là Death nếu không trị.</td>
                  <td><strong>Cơn đỏ bừng mặt (Flushing)</strong> kèm ngứa ngáy do giải phóng Prostaglandin D2 (uống Aspirin 300mg trước 30 phút để ngăn ngừa); tăng men gan độc gan; tăng acid uric máu gây khởi phát cơn Gout.</td>
                </tr>
                <tr>
                  <td><strong>B5 (Acid Pantothenic)</strong></td>
                  <td>Thành phần cấu tạo của <strong>Coenzym A (CoA)</strong> và protein vận chuyển acyl (ACP).</td>
                  <td>Hiếm gặp; hội chứng "Bàn chân bỏng rát" (Burning feet syndrome), mệt mỏi, dị cảm ngón chân.</td>
                  <td>Rất hiếm độc tính; dùng liều cực cao có thể gây tiêu chảy nhẹ.</td>
                </tr>
                <tr>
                  <td><strong>B6 (Pyridoxin)</strong></td>
                  <td><strong>PLP (Pyridoxal phosphat)</strong> tham gia chuyển amin, khử carboxyl acid amin và tổng hợp Heme, GABA.</td>
                  <td>Viêm dây thần kinh ngoại biên, co giật (ở trẻ sơ sinh do thiếu GABA), thiếu máu nguyên bào sắt.</td>
                  <td><strong>Isoniazid (INH) tạo phức hydrazone bất hoạt B6</strong> -&gt; bắt buộc bổ sung dự phòng B6 khi điều trị lao. <strong>Tương tác làm mất tác dụng của Levodopa đơn độc</strong> trong bệnh Parkinson (do kích hoạt DOPA-decarboxylase ngoại biên).</td>
                </tr>
                <tr>
                  <td><strong>B7 / B8 (Biotin)</strong></td>
                  <td>Coenzym cho các phản ứng carboxyl hóa phụ thuộc ATP (pyruvate carboxylase, acetyl-CoA carboxylase).</td>
                  <td>Rụng tóc, viêm da tróc vảy quanh hốc tự nhiên, trầm cảm mệt mỏi; thiếu do ăn lòng trắng trứng sống (chứa Avidin gắn chặt Biotin).</td>
                  <td>Có thể làm sai lệch kết quả xét nghiệm miễn dịch cận lâm sàng (troponin tim, hormon tuyến giáp TSH, FT4).</td>
                </tr>
                <tr>
                  <td><strong>B9 (Acid Folic)</strong></td>
                  <td><strong>Tetrahydrofolate (THF)</strong> vận chuyển mảnh 1 carbon tổng hợp dTMP (DNA) và purin.</td>
                  <td><strong>Thiếu máu hồng cầu to (Megaloblastic anemia)</strong> không có triệu chứng thần kinh; <strong>Dị tật ống thần kinh ở thai nhi</strong> (nứt đốt sống spina bifida, vô sọ).</td>
                  <td>Khuyến cáo bổ sung 400 - 800 mcg/ngày cho phụ nữ trước khi thụ thai và trong thai kỳ. <strong>Bổ sung Folate đơn độc ở người thiếu B12 sẽ che giấu thiếu máu nhưng làm nặng thêm thoái hóa thần kinh tủy sống không hồi phục!</strong></td>
                </tr>
                <tr>
                  <td><strong>B12 (Cobalamin)</strong></td>
                  <td><strong>Methylcobalamin</strong> (chuyển homocysteine thành methionine) và <strong>Adenosylcobalamin</strong> (đồng phân hóa methylmalonyl-CoA thành succinyl-CoA).</td>
                  <td><strong>Thiếu máu ác tính (Pernicious anemia)</strong> do thiếu Yếu tố nội (Intrinsic Factor); <strong>Thoái hóa tủy sống kết hợp bán cấp</strong> (mất cảm giác rung âm thoa, mất thăng bằng, dị cảm chi).</td>
                  <td>Hấp thu cần Acid dạ dày/pepsin tách khỏi protein thức ăn -&gt; gắn Haptocorrin -&gt; xuống tá tràng gắn Yếu tố nội (do tế bào viền tiết) -&gt; hấp thu tại hồi tràng tận cùng. Người cắt dạ dày hoặc cắt đoạn cuối hồi tràng bắt buộc tiêm B12 định kỳ suốt đời.</td>
                </tr>
                <tr>
                  <td><strong>Vitamin C (Acid Ascorbic)</strong></td>
                  <td>Chất khử chống oxy hóa mạnh; co-factor cho phản ứng hydroxyl hóa proline và lysine trong tổng hợp sợi collagen; xúc tác khử Fe3+ thành Fe2+ tăng hấp thu sắt.</td>
                  <td><strong>Bệnh Scorbut</strong>: Chảy máu nướu răng, xuất huyết quanh nang lông, vết thương lâu lành, đau khớp, thiếu máu.</td>
                  <td>Dùng liều cao kéo dài (&gt; 1-2g/ngày) gây <strong>Sỏi thận Oxalat</strong> (do acid ascorbic chuyển hóa thành acid oxalic) và toan hóa nước tiểu; ngừng đột ngột liều cao có thể gây hội chứng Scorbut dội ngược.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="cs-section-header" style="margin-top: 1rem;">
            <span>🧈</span> 2. CÁC VITAMIN TAN TRONG DẦU (A, D, E, K)
          </div>
          <div class="cs-table-wrap">
            <table class="cs-table">
              <thead>
                <tr>
                  <th>Vitamin</th>
                  <th>Chức năng sinh học cốt lõi</th>
                  <th>Biểu hiện lâm sàng khi Thiếu</th>
                  <th>Độc tính khi Quá liều &amp; Chống chỉ định</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Vitamin A (Retinoid)</strong></td>
                  <td>Retinal gắn opsin tạo Rhodopsin ở tế bào que võng mạc (thị giác trong bóng tối); Acid Retinoic điều hòa biệt hóa biểu mô và miễn dịch qua thụ thể RAR/RXR.</td>
                  <td><strong>Quáng gà</strong> (triệu chứng sớm nhất); khô mắt (xerophthalmia), vệt Bitot bọt trắng kết mạc, nhuyễn giác mạc mù lòa; sừng hóa da và nang lông.</td>
                  <td><strong>Tăng áp lực nội sọ giả u não</strong> (đau đầu dữ dội, phù gai thị); rụng tóc, khô môi bong tróc da, độc gan; <strong>QUÁI THAI CỰC MẠNH</strong>: dị tật sọ mặt, tim mạch (chống chỉ định tuyệt đối Isotretinoin/Tretinoin cho phụ nữ mang thai hoặc dự định mang thai).</td>
                </tr>
                <tr>
                  <td><strong>Vitamin D (Calciferol)</strong></td>
                  <td>Cholecalciferol (D3) -&gt; gan hydroxyl hóa thành 25-OH-D3 (Calcidiol) -&gt; thận hydroxyl hóa thành <strong>1,25-(OH)2-D3 (Calcitriol - dạng hoạt tính)</strong> dưới tác dụng của PTH. Tăng hấp thu Ca2+ và Phosphat ở ruột non.</td>
                  <td><strong>Còi xương ở trẻ em</strong> (đầu xương to bè, chuỗi hạt sườn, chân vòng kiềng); <strong>Nhuyễn xương / Loãng xương ở người lớn</strong> (xương yếu, dễ gãy).</td>
                  <td>Ngộ độc Vitamin D: <strong>Tăng canxi máu nặng</strong>, buồn nôn, yếu cơ; vôi hóa di căn mô mềm (thận, phổi, mạch máu), sỏi thận canxi, suy thận.</td>
                </tr>
                <tr>
                  <td><strong>Vitamin E (Tocopherol)</strong></td>
                  <td>Chất chống oxy hóa tan trong lipid mạnh nhất, bắt giữ gốc tự do peroxy, bảo vệ màng tế bào khỏi quá trình peroxide hóa lipid.</td>
                  <td>Hiếm gặp; thiếu máu tan máu ở trẻ sinh non; thoái hóa sợi trục thần kinh cảm giác (dị cảm, thất điều, liệt cơ vận nhãn).</td>
                  <td>Liều cao kéo dài làm ức chế men phụ thuộc vitamin K, <strong>làm tăng nguy cơ xuất huyết chảy máu trầm trọng</strong> (đặc biệt khi dùng chung thuốc chống đông Warfarin).</td>
                </tr>
                <tr>
                  <td><strong>Vitamin K</strong></td>
                  <td>K1 (Phytomenadion - thực vật), K2 (Menaquinone - vi khuẩn ruột); co-factor cho enzym gamma-glutamyl carboxylase hoạt hóa yếu tố đông máu <strong>II, VII, IX, X</strong> và protein xương (Osteocalcin).</td>
                  <td><strong>Hội chứng xuất huyết chảy máu</strong>: Xuất huyết não - màng não ở trẻ sơ sinh (do ruột sơ sinh vô khuẩn và sữa mẹ nghèo vitamin K -&gt; bắt buộc tiêm dự phòng K1 ngay sau sinh).</td>
                  <td>Menadione (K3 tổng hợp tan trong nước) gây tan máu, tăng bilirubin máu và vàng da nhân ở trẻ sơ sinh do thiếu G6PD; tiêm TM nhanh K1 có thể gây phản ứng phản vệ co thắt phế quản tụt HA.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- BẢNG VÀNG ĐIỂM CHÚ Ý ĐẶC BIỆT BÀI 16 -->
          <div class="cs-gold-box" style="margin-top: 1rem;">
            <div class="cs-gold-title">⭐ BẢNG VÀNG ĐIỂM CHÚ Ý ĐẶC BIỆT - BÀI 16: VITAMIN TRONG ĐIỀU TRỊ</div>
            <ul class="cs-gold-list">
              <li><strong>Cạm bẫy phối hợp B9 và B12:</strong> Bổ sung Folate liều cao ở bệnh nhân thiếu máu ác tính do thiếu B12 sẽ kích hoạt bù trừ dòng tạo máu, làm công thức máu hồng cầu hồi phục bình thường (che giấu bệnh), nhưng KHÔNG ngăn chặn được quá trình hủy myelin thoái hóa tủy sống kết hợp bán cấp, khiến bệnh nhân bị tàn phế thần kinh vĩnh viễn! Do đó trước khi bổ sung Folate liều cao, luôn phải loại trừ thiếu B12!</li>
              <li><strong>Cấp cứu người nghiện rượu suy dinh dưỡng hôn mê:</strong> BẮT BUỘC tiêm Vitamin B1 (Thiamin) trước rồi mới được truyền dịch tĩnh mạch chứa Glucose! Nếu truyền đường trước, chuyển hóa đường ồ ạt sẽ vét sạch lượng TPP dự trữ ít ỏi còn lại, đẩy bệnh nhân vào cơn phù não Wernicke cấp tính tử vong ngay trên bàn cấp cứu!</li>
              <li><strong>Tương tác triệt tiêu giữa B6 và Levodopa:</strong> Vitamin B6 là coenzym của DOPA decarboxylase. Dùng B6 chung với Levodopa đơn độc sẽ làm tăng chuyển Levodopa thành Dopamin ngay tại tuần hoàn ngoại biên (không qua được hàng rào máu não), làm mất sạch tác dụng điều trị Parkinson và gây loạn nhịp tim ngoại vi!</li>
              <li><strong>Cảnh báo quái thai của Vitamin A &amp; Dẫn chất:</strong> Liều vitamin A &gt; 10.000 IU/ngày hoặc các retinoid đường uống (Isotretinoin, Acitretin) có độc tính gây quái thai dị tật sọ mặt cực nặng. Phải thực hiện chương trình cam kết ngừa thai kép (iPLEDGE) trước 1 tháng, trong khi dùng và sau khi ngừng thuốc (Acitretin phải ngừa thai tới 3 năm do tích lũy mỡ)!</li>
            </ul>
          </div>

          <div style="margin-top: 0.75rem;">
            <button class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.35rem 0.75rem;" onclick="jumpToDl2Topic('Vitamin')">
              🎯 Luyện đề trắc nghiệm Bài 16: Thuốc Vitamin
            </button>
          </div>
        </div>
    </div>

    <!-- BÀI 17: THUỐC CHỮA THIẾU MÁU -->
    <div class="chapter-accordion-item dl2-searchable-item" id="dl2-item-dl2_ch17">
      <div class="chapter-accordion-header ${dl2OpenAccordions['dl2_ch17'] ? 'active' : ''}" id="dl2-head-dl2_ch17" onclick="toggleDl2Accordion('dl2_ch17')">
        <div class="chapter-acc-title-group">
          <span class="cs-pill cs-pill-primary">🔥 2 Tiết • 4 Câu</span>
          <span class="chapter-acc-title">Bài 17: Thuốc Chữa Thiếu Máu (Sắt, B12, Acid Folic, Erythropoietin)</span>
        </div>
        <span class="chapter-acc-arrow">▼</span>
      </div>
      <div class="chapter-accordion-body" id="dl2-body-dl2_ch17" style="display: ${dl2OpenAccordions['dl2_ch17'] ? 'block' : 'none'};">
<!-- BÀI 17 TOÀN DIỆN: THUỐC ĐIỀU TRỊ THIẾU MÁU & YẾU TỐ KÍCH THÍCH TẠO MÁU -->
          <div class="cs-section-header" style="margin-top: 0.5rem;">
            <span>🔬</span> 1. DƯỢC ĐỘNG HỌC &amp; NGUYÊN TẮC BỔ SUNG SẮT (FE)
          </div>
          <div class="cs-table-wrap">
            <table class="cs-table">
              <thead>
                <tr>
                  <th>Thông số / Chế phẩm</th>
                  <th>Cơ chế sinh học &amp; Dược lý học</th>
                  <th>Điểm lưu ý thực hành dược lâm sàng</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Quá trình hấp thu tại ruột</strong></td>
                  <td>Sắt được hấp thu chủ yếu tại <strong>tá tràng và đầu hỗng tràng</strong> dưới dạng <strong>Sắt II (Fe2+)</strong> thông qua chất vận chuyển kim loại hóa trị 2 (DMT1).</td>
                  <td>Acid dịch vị dạ dày và <strong>Vitamin C (Acid ascorbic)</strong> khử Fe3+ thành Fe2+ giúp tăng hấp thu; Tanin trong trà, cà phê, phytat trong ngũ cốc, calci và thuốc antacid tạo tủa làm giảm hấp thu trầm trọng.</td>
                </tr>
                <tr>
                  <td><strong>Vận chuyển &amp; Dự trữ</strong></td>
                  <td>Vận chuyển trong máu bởi protein <strong>Transferrin</strong>; dự trữ trong tế bào niêm mạc ruột và đại thực bào dưới dạng <strong>Ferritin</strong> và <strong>Hemosiderin</strong>.</td>
                  <td>Xét nghiệm nồng độ Ferritin huyết thanh phản ánh chính xác nhất lượng sắt dự trữ trong cơ thể (giảm trong thiếu máu thiếu sắt thực sự; tăng trong viêm mạn do phản ứng giai đoạn cấp).</td>
                </tr>
                <tr>
                  <td><strong>Vai trò của Hepcidin</strong></td>
                  <td>Hormon peptide do gan sản xuất; gắn kết và kích thích phân hủy kênh <strong>Ferroportin</strong> ở màng đáy tế bào ruột và đại thực bào.</td>
                  <td>Nồng độ Hepcidin tăng cao trong các bệnh viêm nhiễm mạn tính và ung thư -&gt; khóa chặt sắt trong tế bào, không giải phóng vào máu -&gt; gây hội chứng Thiếu máu do bệnh mạn tính (ACD).</td>
                </tr>
                <tr>
                  <td><strong>Sắt đường uống</strong><br>(Sắt sulfat, Sắt fumarat, Sắt gluconat)</td>
                  <td>Chứa hàm lượng sắt nguyên tố khác nhau (Sắt fumarat ~33%, Sắt sulfat khô ~30%, Sắt sulfat ngậm nước ~20%, Sắt gluconat ~12%).</td>
                  <td>Tác dụng phụ phổ biến: Táo bón, buồn nôn, đau thượng vị, <strong>phân có màu đen sẫm</strong> (vô hại); uống lúc đói hấp thu tốt nhất nhưng nếu kích ứng tiêu hóa có thể uống trong bữa ăn.</td>
                </tr>
                <tr>
                  <td><strong>Sắt đường tiêm tĩnh mạch</strong><br>(Sắt Dextran, Sắt Sucrose, Ferric Carboxymaltose)</td>
                  <td>Chỉ định khi không dung nạp sắt uống, kém hấp thu ruột (Celiac, viêm ruột mạn IBD), suy thận mạn lọc máu hoặc mất máu cấp liên tục.</td>
                  <td><strong>Sắt Dextran có nguy cơ cao gây Sốc phản vệ</strong> do dị ứng với phức hợp dextran (bắt buộc tiêm liều test thử trước khi truyền); các chế phẩm mới (Sắt sucrose, Carboxymaltose) an toàn hơn nhiều.</td>
                </tr>
                <tr>
                  <td><strong>Ngộ độc sắt cấp tính &amp; Chất giải độc</strong></td>
                  <td>Thường gặp ở trẻ em uống nhầm viên sắt liều lớn: Nôn ra máu, hoại tử niêm mạc ruột, trụy mạch, toan chuyển hóa nặng nề.</td>
                  <td>Chất giải độc đặc hiệu: <strong>Deferoxamine (Desferal)</strong> tiêm truyền tĩnh mạch, tạo phức chelat hòa tan với Fe3+ thải trừ qua thận làm <strong>nước tiểu có màu đỏ cam đặc trưng (vin rose)</strong>.</td>
                </tr>
                <tr>
                  <td><strong>Ứ đọng sắt mạn tính (Nhiễm sắt)</strong></td>
                  <td>Do truyền máu nhiều lần ở bệnh nhân Thalassemia hoặc tan máu mạn tính.</td>
                  <td>Thuốc gắp sắt đường uống: <strong>Deferasirox</strong> hoặc <strong>Deferiprone</strong> giúp đào thải sắt qua phân và nước tiểu, bảo vệ gan và cơ tim khỏi nhiễm hemosiderin.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="cs-section-header" style="margin-top: 1rem;">
            <span>🧬</span> 2. YẾU TỐ KÍCH THÍCH TẠO MÁU (HEMATOPOIETIC GROWTH FACTORS)
          </div>
          <div class="cs-table-wrap">
            <table class="cs-table">
              <thead>
                <tr>
                  <th>Yếu tố tăng trưởng</th>
                  <th>Chế phẩm đại diện</th>
                  <th>Cơ chế tác động sinh học</th>
                  <th>Chỉ định then chốt &amp; Cảnh báo an toàn</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Erythropoietin (EPO)</strong></td>
                  <td><strong>Epoetin alfa</strong>, Darbepoetin alfa (chu kỳ bán thải dài hơn nhờ bổ sung chuỗi sialic acid)</td>
                  <td>Kích thích thụ thể EPO trên tế bào tiền thân dòng hồng cầu (CFU-E) trong tủy xương -&gt; tăng sinh, biệt hóa và giải phóng hồng cầu lưới vào máu.</td>
                  <td>Thiếu máu do suy thận mạn tính (thiếu hụt EPO nội sinh của tế bào quanh ống thận); thiếu máu do hóa trị liệu ung thư, BN HIV điều trị Zidovudine.<br><strong>CẢNH BÁO AN TOÀN HỘP ĐEN:</strong> Không được nâng mục tiêu Hemoglobin &gt; 11.5 - 12 g/dL vì làm tăng đột biến nguy cơ <strong>Tử vong tim mạch, Nhồi máu cơ tim, Đột quỵ và Huyết khối tĩnh mạch sâu</strong>! Phải đảm bảo đủ kho sắt dự trữ trước khi dùng EPO.</td>
                </tr>
                <tr>
                  <td><strong>Kích thích dòng bạch cầu hạt (G-CSF)</strong></td>
                  <td><strong>Filgrastim</strong>, Pegfilgrastim (gắn phân tử PEG kéo dài thời gian tác dụng)</td>
                  <td>Kích thích thụ thể chọn lọc trên tiền thân dòng bạch cầu hạt trong tủy xương, đẩy nhanh quá trình sinh sản và giải phóng bạch cầu trung tính (Neutrophil).</td>
                  <td>Dự phòng và điều trị hạ bạch cầu trung tính do hóa trị liệu ức chế tủy ung thư (ngăn ngừa sốt giảm bạch cầu hạt nguy hiểm); huy động tế bào gốc tạo máu ra máu ngoại vi trước ghép tủy.<br>ADR đặc thù: <strong>Đau nhức xương dữ dội</strong> (do tủy xương tăng sinh mạnh); nguy cơ vỡ lách (hiếm nhưng đe dọa tử vong).</td>
                </tr>
                <tr>
                  <td><strong>Kích thích dòng hạt - đại thực bào (GM-CSF)</strong></td>
                  <td><strong>Sargramostim</strong></td>
                  <td>Tác động phổ rộng hơn G-CSF, kích thích cả tiền thân bạch cầu trung tính, bạch cầu ái toan và đại thực bào monocyte.</td>
                  <td>Phục hồi tủy sau ghép tủy xương tự thân hoặc đồng loại.<br>ADR: Sốt, đau xương, hội chứng rò rỉ mao mạch phù nề nhiều hơn Filgrastim.</td>
                </tr>
                <tr>
                  <td><strong>Kích thích tạo tiểu cầu (TPO Receptor Agonists)</strong></td>
                  <td><strong>Romiplostim</strong> (peptibody tiêm dưới da), <strong>Eltrombopag</strong> (phân tử nhỏ đường uống)</td>
                  <td>Kích hoạt trực tiếp thụ thể thrombopoietin (c-Mpl) trên bề mặt mẫu tiểu cầu (megakaryocyte) trong tủy xương -&gt; tăng sinh tạo tiểu cầu.</td>
                  <td>Xuất huyết giảm tiểu cầu miễn dịch vô căn (ITP) mạn tính kháng corticoid/cắt lách; giảm tiểu cầu ở bệnh nhân viêm gan C mạn tính cần điều trị interferon.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- BẢNG VÀNG ĐIỂM CHÚ Ý ĐẶC BIỆT BÀI 17 -->
          <div class="cs-gold-box" style="margin-top: 1rem;">
            <div class="cs-gold-title">⭐ BẢNG VÀNG ĐIỂM CHÚ Ý ĐẶC BIỆT - BÀI 17: THUỐC CHỮA THIẾU MÁU</div>
            <ul class="cs-gold-list">
              <li><strong>Giới hạn an toàn sống còn khi dùng Erythropoietin (EPO):</strong> Không bao giờ được dùng EPO để nâng nồng độ Hemoglobin lên mức bình thường của người khỏe mạnh (&gt; 12 g/dL)! Các thử nghiệm lâm sàng lớn đã chứng minh khi Hb vượt 11.5 - 12 g/dL, độ nhớt máu tăng vọt gây biến cố nhồi máu cơ tim, thuyên tắc mạch não và tử vong sớm. Mục tiêu chuẩn chỉ duy trì Hb từ 10 - 11.5 g/dL!</li>
              <li><strong>Dấu hiệu "Nước tiểu màu rượu vang hồng" (Vin rose) của Deferoxamine:</strong> Khi dùng Deferoxamine giải độc ngộ độc sắt cấp, phân tử thuốc kết hợp với Fe3+ tự do tạo thành phức hợp chelat Ferrioxamine bền vững đào thải qua thận, làm nước tiểu chuyển sang màu hồng đỏ đậm đặc trưng. Khi nước tiểu nhạt màu dần chứng tỏ lượng sắt tự do gây độc trong cơ thể đã được dọn sạch!</li>
              <li><strong>Nguyên tắc "Sắt đi trước, EPO đi sau":</strong> Erythropoietin kích thích tủy xương sản xuất ồ ạt hồng cầu mới, quá trình này đòi hỏi tiêu thụ một lượng sắt cực lớn. Nếu không xét nghiệm Ferritin và bù đủ sắt dự trữ trước, tủy xương sẽ rơi vào tình trạng "thiếu sắt chức năng" và bệnh nhân hoàn toàn trơ lỳ kháng với EPO!</li>
              <li><strong>Phản ứng phản vệ chết người của Sắt Dextran tiêm TM:</strong> Khác với các muối sắt đường uống hay chế phẩm sắt nano thế hệ mới, gốc cao phân tử Dextran có tính kháng nguyên cao gây tỷ lệ sốc phản vệ chết người đáng kể. BẮT BUỘC tiêm liều thử nghiệm (test dose 25mg) và chờ ít nhất 60 phút theo dõi huyết động trước khi truyền liều điều trị đầy đủ!</li>
            </ul>
          </div>

          <div style="margin-top: 0.75rem;">
            <button class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.35rem 0.75rem;" onclick="jumpToDl2Topic('Thuốc chữa thiếu máu')">
              🎯 Luyện đề trắc nghiệm Bài 17: Thuốc Chữa Thiếu Máu
            </button>
          </div>
        </div>
    </div>

    <!-- BÀI 18: THUỐC KHÁNG VIRUS -->
    <div class="chapter-accordion-item dl2-searchable-item" id="dl2-item-dl2_ch18">
      <div class="chapter-accordion-header ${dl2OpenAccordions['dl2_ch18'] ? 'active' : ''}" id="dl2-head-dl2_ch18" onclick="toggleDl2Accordion('dl2_ch18')">
        <div class="chapter-acc-title-group">
          <span class="cs-pill cs-pill-primary">🔥 2 Tiết • 4 Câu</span>
          <span class="chapter-acc-title">Bài 18: Thuốc Kháng Virus (Acyclovir, Tamiflu, ARV Điều Trị HIV, Viêm Gan)</span>
        </div>
        <span class="chapter-acc-arrow">▼</span>
      </div>
      <div class="chapter-accordion-body" id="dl2-body-dl2_ch18" style="display: ${dl2OpenAccordions['dl2_ch18'] ? 'block' : 'none'};">
<!-- BÀI 18 TOÀN DIỆN: THUỐC KHÁNG VIRUS -->
          <div class="cs-section-header" style="margin-top: 0.5rem;">
            <span>🦠</span> 1. THUỐC ĐIỀU TRỊ HERPESVIRUS (HSV, VZV, CMV) &amp; VIRUS CÚM
          </div>
          <div class="cs-table-wrap">
            <table class="cs-table">
              <thead>
                <tr>
                  <th>Hoạt chất / Nhóm</th>
                  <th>Cơ chế tác động phân tử</th>
                  <th>Chỉ định ưu tiên</th>
                  <th>Đặc điểm dược động &amp; Độc tính then chốt</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Acyclovir</strong></td>
                  <td>Đồng phân Guanosine; được enzym <strong>Viral Thymidine Kinase</strong> của HSV/VZV phosphoryl hóa bước 1 (chọn lọc gấp 3000 lần tế bào lành), sau đó enzym chủ tạo dạng Triphosphate -&gt; ức chế cạnh tranh DNA polymerase và làm đứt gãy kết thúc sớm chuỗi DNA (chain termination).</td>
                  <td>Nhiễm Herpes simplex (HSV-1, HSV-2: mụn rộp sinh dục, viêm não màng não do HSV); Varicella zoster (thủy đậu, Zona thần kinh).</td>
                  <td>Sinh khả dụng đường uống thấp (15-20%); tiêm TM nhanh có thể gây <strong>kết tủa tinh thể trong ống thận dẫn đến Suy thận cấp</strong> (phòng ngừa bằng bù đủ nước và truyền chậm &gt; 1h); độc tính thần kinh (lú lẫn, co giật ở BN suy thận).</td>
                </tr>
                <tr>
                  <td><strong>Valacyclovir</strong></td>
                  <td>Tiền dược este L-valyl của Acyclovir; enzym gan thủy phân giải phóng Acyclovir trong tuần hoàn.</td>
                  <td>Zona thần kinh cấp tính, herpes sinh dục tái phát.</td>
                  <td><strong>Sinh khả dụng đường uống tăng vọt lên 55 - 70%</strong> (gấp 3-5 lần Acyclovir), giảm số lần uống từ 5 lần/ngày xuống 2-3 lần/ngày.</td>
                </tr>
                <tr>
                  <td><strong>Ganciclovir / Valganciclovir</strong></td>
                  <td>Đồng phân guanosine; được phosphoryl hóa bước 1 bởi enzym <strong>UL97 kinase</strong> của Cytomegalovirus (CMV).</td>
                  <td>Viêm võng mạc do CMV ở bệnh nhân AIDS; dự phòng và điều trị nhiễm CMV sau ghép tạng ghép tủy.</td>
                  <td>Độc tính tủy xương rất nặng: <strong>Giảm bạch cầu hạt trung tính, giảm tiểu cầu</strong>; Valganciclovir là tiền dược uống có SKD cao thay thế tiêm truyền.</td>
                </tr>
                <tr>
                  <td><strong>Foscarnet</strong></td>
                  <td>Chất tương tự Pyrophosphate vô cơ; gắn trực tiếp vào vị trí liên kết pyrophosphate của DNA polymerase của virus mà <strong>KHÔNG CẦN sự hoạt hóa bởi bất kỳ enzym kinase nào</strong>.</td>
                  <td>HSV kháng Acyclovir (do đột biến thiếu hụt men thymidine kinase); CMV kháng Ganciclovir.</td>
                  <td><strong>Độc thận rất nặng</strong> (suy thận hoại tử ống thận cấp); rối loạn điện giải nghiêm trọng (hạ Canxi máu, hạ Magie máu gây co giật, loạn nhịp tim).</td>
                </tr>
                <tr>
                  <td><strong>Oseltamivir (Tamiflu) / Zanamivir</strong></td>
                  <td>Ức chế chọn lọc enzym <strong>Neuraminidase</strong> của virus Cúm (Influenza A và B) -&gt; ngăn cản các hạt virus mới nảy chồi thoát ra khỏi màng tế bào chủ, chặn sự lây lan trong đường hô hấp.</td>
                  <td>Điều trị và dự phòng Cúm A (H1N1, H5N1, H3N2) và Cúm B.</td>
                  <td><strong>BẮT BUỘC BẮT ĐẦU TRONG VÒNG 48 GIỜ ĐẦU</strong> kể từ khi có triệu chứng đầu tiên để đạt hiệu quả tối ưu; Oseltamivir uống; Zanamivir dạng bột hít (chống chỉ định co thắt phế quản ở BN hen/COPD).</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="cs-section-header" style="margin-top: 1rem;">
            <span>🧬</span> 2. THUỐC ĐIỀU TRỊ VIÊM GAN B (HBV) &amp; VIÊM GAN C (HCV)
          </div>
          <div class="cs-table-wrap">
            <table class="cs-table">
              <thead>
                <tr>
                  <th>Nhóm / Hoạt chất</th>
                  <th>Cơ chế tác động sinh học</th>
                  <th>Chỉ định &amp; Ưu điểm lâm sàng</th>
                  <th>Cảnh báo &amp; Độc tính đặc thù</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Tenofovir Disoproxil (TDF)</strong></td>
                  <td>Nucleotide ức chế enzym HBV reverse transcriptase / DNA polymerase; ức chế sao chép DNA của HBV.</td>
                  <td>Lựa chọn hàng đầu viêm gan B mạn tính; rào cản kháng thuốc rất cao (tỷ lệ kháng ~0% sau 5-8 năm); đồng nhiễm HIV/HBV.</td>
                  <td>Độc tính trên ống thận (hội chứng Fanconi, suy thận) và làm giảm mật độ khoáng xương (loãng xương) do tích lũy nồng độ Tenofovir cao trong huyết tương.</td>
                </tr>
                <tr>
                  <td><strong>Tenofovir Alafenamide (TAF)</strong></td>
                  <td>Tiền dược thế hệ mới phân phối tập trung vào tế bào lympho và tế bào gan; chỉ cần liều 25mg (bằng 1/12 liều TDF 300mg).</td>
                  <td>Viêm gan B mạn tính ở bệnh nhân lớn tuổi, có suy thận nhẹ hoặc có nguy cơ loãng xương gãy xương.</td>
                  <td><strong>Giảm thiểu độc tính trên thận và xương</strong> so với TDF; tuy nhiên có thể làm tăng nhẹ nồng độ lipid máu (cholesterol, LDL-C).</td>
                </tr>
                <tr>
                  <td><strong>Entecavir (ETV)</strong></td>
                  <td>Đồng phân guanosine ức chế cả 3 giai đoạn của HBV polymerase (mồi chuỗi, phiên mã ngược chuỗi âm, tổng hợp chuỗi dương).</td>
                  <td>Viêm gan B mạn tính hoạt động ở người chưa từng dùng Lamivudine.</td>
                  <td>Tỷ lệ kháng thuốc cao nếu bệnh nhân đã kháng Lamivudine trước đó; cần chỉnh liều theo chức năng thận.</td>
                </tr>
                <tr>
                  <td><strong>Thuốc DAA trị Viêm gan C</strong><br>(Sofosbuvir + Velpatasvir)</td>
                  <td>Phối hợp ức chế enzym NS5B RNA polymerase (<strong>Sofosbuvir</strong>) và ức chế phức hợp nhân lên NS5A (<strong>Velpatasvir</strong>).</td>
                  <td><strong>Điều trị khỏi hoàn toàn (&gt; 95 - 98%) Viêm gan C mạn tính</strong> cho mọi genotype 1 - 6 chỉ trong 12 tuần dùng đường uống.</td>
                  <td>Nguy cơ bùng phát viêm gan B tái hoạt nếu bệnh nhân đồng nhiễm HBV (bắt buộc tầm soát HBsAg trước khi điều trị DAA); tương tác chống chỉ định với Amiodaron (gây ngừng tim chậm nhịp nguy kịch).</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="cs-section-header" style="margin-top: 1rem;">
            <span>🛡️</span> 3. THUỐC ĐIỀU TRỊ HIV (ANTIRETROVIRAL THERAPY - ART)
          </div>
          <div class="cs-table-wrap">
            <table class="cs-table">
              <thead>
                <tr>
                  <th>Nhóm thuốc</th>
                  <th>Hoạt chất then chốt</th>
                  <th>Cơ chế tác động phân tử</th>
                  <th>Độc tính đặc thù &amp; Lưu ý dược lâm sàng</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>NRTIs (Ức chế men sao chép ngược nucleoside)</strong></td>
                  <td>Tenofovir (TDF/TAF), Emtricitabine (FTC), Lamivudine (3TC), <strong>Abacavir (ABC)</strong>, Zidovudine (AZT)</td>
                  <td>Cấu trúc tương tự nucleoside/tide tự nhiên, gắn vào chuỗi DNA bổ sung của virus gây kết thúc chuỗi sao chép ngược.</td>
                  <td>Độc tính chung: Nhiễm toan acid lactic và thoái hóa mỡ gan do ức chế men DNA polymerase-gamma của ty thể; Zidovudine gây thiếu máu ức chế tủy; <strong>BẮT BUỘC TEST ALEN HLA-B*5701 TRƯỚC KHI DÙNG ABACAVIR</strong> để tránh phản ứng quá mẫn toàn thân đe dọa tính mạng!</td>
                </tr>
                <tr>
                  <td><strong>NNRTIs (Ức chế men sao chép ngược không nucleoside)</strong></td>
                  <td><strong>Efavirenz (EFV)</strong>, Nevirapine (NVP), Rilpivirine</td>
                  <td>Gắn trực tiếp vào vị trí allosteric gần tâm hoạt động của men Reverse Transcriptase làm biến đổi cấu hình bất hoạt enzym mà không cần phosphoryl hóa.</td>
                  <td>Efavirenz gây tác dụng phụ TKTW nặng nề: <strong>Ác mộng dữ dội, ảo giác, mất ngủ, trầm cảm</strong> (uống trước khi ngủ lúc đói) và nguy cơ quái thai; Nevirapine gây hoại tử thượng bì hội chứng Stevens-Johnson và độc gan bạo phát.</td>
                </tr>
                <tr>
                  <td><strong>PIs (Thuốc ức chế Protease)</strong></td>
                  <td>Lopinavir, Atazanavir, Darunavir (phối hợp <strong>Ritonavir</strong>)</td>
                  <td>Ức chế enzym HIV protease ngăn phân cắt các chuỗi polyprotein Gag-Pol thành các protein chức năng của lõi virion, làm virus sinh ra không trưởng thành và mất khả năng lây nhiễm.</td>
                  <td><strong>Hội chứng loạn dưỡng mỡ (Lipodystrophy)</strong>: Bướu mỡ lưng trâu, béo bụng trung tâm, teo mỡ má và chi; rối loạn lipid máu, tăng đường huyết; <strong>Ritonavir là chất ức chế CYP3A4 cực mạnh</strong>, dùng làm "Booster" nâng nồng độ các thuốc khác.</td>
                </tr>
                <tr>
                  <td><strong>INSTIs (Ức chế enzym Integrase)</strong></td>
                  <td><strong>Dolutegravir (DTG)</strong>, Bictegravir (BIC), Raltegravir</td>
                  <td>Ức chế gắn kết chuỗi DNA của virus vào bộ gen của tế bào lympho T CD4 người bệnh thông qua ức chế enzym Integrase.</td>
                  <td><strong>LỰA CHỌN ĐẦU TAY HÀNG ĐẦU HIỆN NAY</strong>: Giảm tải lượng virus cực nhanh, ít tác dụng phụ, rào cản kháng thuốc rất cao; có thể gây tăng cân và đau đầu nhẹ.</td>
                </tr>
                <tr>
                  <td><strong>Kháng đồng thụ thể CCR5</strong></td>
                  <td>Maraviroc</td>
                  <td>Gắn chọn lọc vào đồng thụ thể CCR5 trên bề mặt tế bào T CD4, ngăn cản glycoprotein gp120 của HIV liên kết xâm nhập.</td>
                  <td>Chỉ có tác dụng với chủng virus HIV gắn hướng thụ thể CCR5 (R5-tropic); bắt buộc làm xét nghiệm xác định kiểu hướng (tropism test) trước khi chỉ định.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- BẢNG VÀNG ĐIỂM CHÚ Ý ĐẶC BIỆT BÀI 18 -->
          <div class="cs-gold-box" style="margin-top: 1rem;">
            <div class="cs-gold-title">⭐ BẢNG VÀNG ĐIỂM CHÚ Ý ĐẶC BIỆT - BÀI 18: THUỐC KHÁNG VIRUS</div>
            <ul class="cs-gold-list">
              <li><strong>Tính chọn lọc đặc biệt của Acyclovir:</strong> Acyclovir chỉ là tiền dược trơ không hoạt tính đối với tế bào bình thường của người. Thuốc CHỈ ĐƯỢC KÍCH HOẠT khi tiếp xúc với enzym Thymidine Kinase đặc hiệu của chính virus Herpes (chọn lọc gấp 3000 lần tế bào người). Tế bào nào không nhiễm virus sẽ không kích hoạt thuốc, giải thích vì sao Acyclovir có chỉ số điều trị rất cao và an toàn tuyệt vời!</li>
              <li><strong>Quy tắc 48 giờ vàng của Thuốc trị Cúm (Oseltamivir):</strong> Sau 48 giờ kể từ khi sốt xuất hiện, virus cúm đã hoàn tất quá trình nhân lên ồ ạt và phá hủy niêm mạc đường hô hấp. Lúc này thuốc ức chế neuraminidase (Tamiflu) gần như không còn đem lại lợi ích lâm sàng rõ rệt, do đó phải chỉ định càng sớm càng tốt ngay trong 2 ngày đầu!</li>
              <li><strong>Sự cố chết người khi tiêm Acyclovir tĩnh mạch nhanh:</strong> Acyclovir có độ tan giới hạn trong nước tiểu. Tiêm TM nhanh hoặc bolus sẽ làm thuốc kết tủa thành hàng triệu vi tinh thể hình kim gây tắc nghẽn lòng ống thận cấp tính (tắc nghẽn cơ học). BẮT BUỘC bù dịch đầy đủ và truyền tĩnh mạch ngắt quãng chậm tối thiểu trên 60 phút!</li>
              <li><strong>Cảnh báo xét nghiệm bắt buộc HLA-B*5701 của Abacavir:</strong> Bệnh nhân mang gen HLA-B*5701 nếu uống Abacavir sẽ xảy ra phản ứng dị ứng quá mẫn toàn thân (sốt, phát ban, khó thở, tụt huyết áp). Nếu tái dùng thuốc lần 2 sẽ gây sốc phản vệ tử vong gần như 100%! Bắt buộc xét nghiệm sàng lọc gen trước khi bắt đầu phác đồ chứa Abacavir!</li>
            </ul>
          </div>

          <div style="margin-top: 0.75rem;">
            <button class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.35rem 0.75rem;" onclick="jumpToDl2Topic('Thuốc kháng virus')">
              🎯 Luyện đề trắc nghiệm Bài 18: Thuốc Kháng Virus
            </button>
          </div>
        </div>
    </div>

    <!-- BÀI 19: THUỐC CHỐNG UNG THƯ -->
    <div class="chapter-accordion-item dl2-searchable-item" id="dl2-item-dl2_ch19">
      <div class="chapter-accordion-header ${dl2OpenAccordions['dl2_ch19'] ? 'active' : ''}" id="dl2-head-dl2_ch19" onclick="toggleDl2Accordion('dl2_ch19')">
        <div class="chapter-acc-title-group">
          <span class="cs-pill cs-pill-warning">⚡ 1 Tiết • 2 Câu</span>
          <span class="chapter-acc-title">Bài 19: Thuốc Chống Ung Thư (Hóa Trị Liệu &amp; Độc Tính Đặc Trưng)</span>
        </div>
        <span class="chapter-acc-arrow">▼</span>
      </div>
      <div class="chapter-accordion-body" id="dl2-body-dl2_ch19" style="display: ${dl2OpenAccordions['dl2_ch19'] ? 'block' : 'none'};">
<!-- BÀI 19 TOÀN DIỆN: THUỐC CHỐNG UNG THƯ -->
          <div class="cs-section-header" style="margin-top: 0.5rem;">
            <span>🔬</span> 1. PHÂN LOẠI THEO CHU KỲ TẾ BÀO &amp; CƠ CHẾ SINH HỌC
          </div>
          <div class="cs-table-wrap">
            <table class="cs-table">
              <thead>
                <tr>
                  <th>Nhóm dược lý</th>
                  <th>Pha tác động</th>
                  <th>Hoạt chất đại diện</th>
                  <th>Cơ chế tác động phân tử</th>
                  <th>Độc tính cơ quan đặc thù &amp; Chất bảo vệ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Chất kháng chuyển hóa (Antimetabolites)</strong></td>
                  <td><strong>Pha S</strong> (Tổng hợp DNA)</td>
                  <td><strong>Methotrexate (MTX)</strong></td>
                  <td>Ức chế cạnh tranh men Dihydrofolate Reductase (DHFR) ngăn cản tổng hợp Tetrahydrofolate (THF) -&gt; phong bế tổng hợp dTMP và purin.</td>
                  <td>Ức chế tủy xương, viêm loét niêm mạc miệng, suy thận cấp.<br><strong>Chất giải cứu độc tế bào lành: LEUCOVORIN (Acid folinic)</strong> bù trực tiếp folate hoạt tính cho tế bào tủy xương mà không cần qua men DHFR.</td>
                </tr>
                <tr>
                  <td><strong>Chất kháng chuyển hóa Pyrimidine</strong></td>
                  <td><strong>Pha S</strong></td>
                  <td><strong>5-Fluorouracil (5-FU)</strong>, Capecitabine</td>
                  <td>Chuyển thành 5-FdUMP ức chế không hồi phục enzym <strong>Thymidylate Synthase (TS)</strong> ngăn tạo dTMP.<br><em>Lưu ý: Dùng chung Leucovorin làm TĂNG độc tính của 5-FU lên khối u.</em></td>
                  <td>Tiêu chảy phân tóe nước, loét đường tiêu hóa; <strong>Hội chứng bàn tay - bàn chân (Palmar-plantar erythrodysesthesia)</strong>: đỏ rát, phồng rộp, bong tróc da lòng bàn tay và chân.</td>
                </tr>
                <tr>
                  <td><strong>Chất kháng chuyển hóa Purine</strong></td>
                  <td><strong>Pha S</strong></td>
                  <td><strong>6-Mercaptopurine (6-MP)</strong>, Azathioprine</td>
                  <td>Ức chế men PRPP amidotransferase phong bế tổng hợp purin de novo. Thuốc bị bất hoạt bởi enzym <strong>Xanthine Oxidase</strong> tại gan.</td>
                  <td><strong>TƯƠNG TÁC TỬ VONG: Khi dùng chung Allopurinol (chất ức chế Xanthine Oxidase), BẮT BUỘC giảm liều 6-MP xuống còn 25 - 33% liều chuẩn</strong> để tránh ức chế tủy suy tủy toàn bộ đe dọa tử vong!</td>
                </tr>
                <tr>
                  <td><strong>Tác nhân Alkyl hóa (Alkylating agents)</strong></td>
                  <td><strong>CCNS</strong> (Không đặc hiệu chu kỳ)</td>
                  <td><strong>Cyclophosphamide</strong>, Ifosfamide</td>
                  <td>Gắn nhóm alkyl vào vị trí N7 của Guanin trên DNA, tạo liên kết chéo (cross-linking) giữa hai sợi đơn làm đứt gãy DNA khi tế bào nhân đôi.</td>
                  <td>Chuyển hóa tại gan tạo chất độc <strong>Acrolein</strong> bài tiết qua nước tiểu gây <strong>Viêm bàng quang xuất huyết dữ dội</strong>.<br><strong>Chất bảo vệ đặc hiệu: MESNA (Natri 2-mercaptoethanesulfonate)</strong> liên kết bất hoạt Acrolein trong lòng bàng quang + truyền nhiều dịch.</td>
                </tr>
                <tr>
                  <td><strong>Hợp chất phối trí Platin</strong></td>
                  <td><strong>CCNS</strong></td>
                  <td><strong>Cisplatin</strong>, Carboplatin, Oxaliplatin</td>
                  <td>Tạo liên kết chéo nội sợi và liên phân tử trên chuỗi xoắn kép DNA, ức chế sao chép và phiên mã tế bào u.</td>
                  <td><strong>Cisplatin: Độc tính hoại tử ống thận cấp cực nặng</strong> (phải truyền dịch muối đẳng trương liều cao và dùng <strong>Amifostine</strong> bảo vệ thận); độc ốc tai thần kinh thính giác.<br><strong>Oxaliplatin: Độc thần kinh cảm giác ngoại biên nhạy cảm lạnh</strong> (tiếp xúc đồ lạnh gây co thắt thanh quản dị cảm).</td>
                </tr>
                <tr>
                  <td><strong>Kháng sinh Anthracycline</strong></td>
                  <td><strong>CCNS</strong> (Mạnh nhất ở S và G2)</td>
                  <td><strong>Doxorubicin (Adriamycin)</strong>, Daunorubicin</td>
                  <td>Chèn giữa các cặp base DNA, ức chế enzym Topoisomerase II và tạo các gốc tự do oxy hóa (ROS) gây đứt gãy sợi kép DNA.</td>
                  <td><strong>ĐỘC TÍNH TIM MẠCH ĐẶC THÙ: Bệnh cơ tim giãn và Suy tim sung huyết phụ thuộc liều tích lũy (&gt; 450 - 550 mg/m2)</strong>.<br><strong>Thuốc bảo vệ cơ tim đặc hiệu: DEXRAZOXANE</strong> chelat hóa ion sắt ngăn hình thành gốc tự do ROS; thuốc làm nước tiểu có màu đỏ cam.</td>
                </tr>
                <tr>
                  <td><strong>Kháng sinh Glycopeptide</strong></td>
                  <td><strong>Pha G2</strong></td>
                  <td><strong>Bleomycin</strong></td>
                  <td>Phức hợp Fe2+-Bleomycin tạo gốc tự do oxy phản ứng gây đứt gãy đơn và kép chuỗi DNA.</td>
                  <td><strong>XƠ PHỔI TIẾN TRIỂN (Pulmonary fibrosis)</strong> ho khan, khó thở đe dọa tính mạng; ưu điểm độc đáo: <strong>GẦN NHƯ HOÀN TOÀN KHÔNG GÂY ỨC CHẾ TỦY XƯƠNG</strong>.</td>
                </tr>
                <tr>
                  <td><strong>Alkaloid cây Dừa cạn (Vinca)</strong></td>
                  <td><strong>Pha M</strong> (Nguyên phân)</td>
                  <td><strong>Vincristin</strong>, Vinblastin</td>
                  <td>Gắn vào tubulin, <strong>ỨC CHẾ QUÁ TRÌNH TRÙNG HỢP</strong> vi ống, làm tan rã thoi phân bào ngăn tế bào phân chia ở kỳ giữa.</td>
                  <td><strong>Vincristin: Độc tính thần kinh ngoại biên, liệt ruột táo bón</strong> nhưng ít ức chế tủy.<br><strong>CẢNH BÁO TỬ VONG: CHỈ ĐƯỢC TIÊM TĨNH MẠCH, TUYỆT ĐỐI CẤM TIÊM TỦY SỐNG (INTRATHECAL) VÌ GÂY HOẠI TỬ NÃO TỬ VONG 100%!</strong></td>
                </tr>
                <tr>
                  <td><strong>Nhóm Taxane</strong></td>
                  <td><strong>Pha M</strong></td>
                  <td><strong>Paclitaxel</strong>, Docetaxel</td>
                  <td>Gắn và làm ổn định vi ống, <strong>ỨC CHẾ QUÁ TRÌNH THÁO XOẮN / KHỬ TRÙNG HỢP</strong>, làm đông cứng thoi phân bào khiến tế bào chết.</td>
                  <td>Ức chế tủy xương; phản ứng quá mẫn sốc phản vệ nặng (do dung môi Cremophor EL -&gt; bắt buộc tiền mê bằng Dexamethason + Kháng Histamin H1 trước khi truyền).</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="cs-section-header" style="margin-top: 1rem;">
            <span>🎯</span> 2. LIỆU PHÁP NHẮM TRÚNG ĐÍCH &amp; HỘI CHỨNG LY GIẢI KHỐI U (TLS)
          </div>
          <div class="cs-table-wrap">
            <table class="cs-table">
              <thead>
                <tr>
                  <th>Tên thuốc</th>
                  <th>Đích phân tử</th>
                  <th>Chỉ định ung thư kinh điển</th>
                  <th>Điểm lưu ý dược lý lâm sàng đặc thù</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Imatinib (Gleevec)</strong></td>
                  <td>Ức chế Tyrosine Kinase của protein lai <strong>Bcr-Abl</strong> (nhiễm sắc thể Philadelphia t(9;22)); ức chế thụ thể c-Kit.</td>
                  <td>Bệnh bạch cầu tủy mạn tính (CML); U mô đệm đường tiêu hóa (GIST có đột biến c-Kit).</td>
                  <td>Thuốc nhắm trúng đích phân tử đầu tiên biến ung thư máu CML thành bệnh mạn tính có thể kiểm soát lâu dài; ADR: phù quanh hốc mắt, giữ nước.</td>
                </tr>
                <tr>
                  <td><strong>Trastuzumab (Herceptin)</strong></td>
                  <td>Kháng thể đơn dòng gắn vào miền ngoại bào của thụ thể <strong>HER2/neu (ErbB2)</strong>.</td>
                  <td>Ung thư vú và ung thư dạ dày di căn có thụ thể HER2 biểu hiện quá mức (HER2+).</td>
                  <td><strong>Độc tính trên tim</strong> (giảm phân suất tống máu thất trái EF, suy tim); không phụ thuộc liều tích lũy và có thể hồi phục sau khi ngừng thuốc; tránh dùng chung Anthracycline.</td>
                </tr>
                <tr>
                  <td><strong>Rituximab</strong></td>
                  <td>Kháng thể đơn dòng gắn đặc hiệu lên kháng nguyên <strong>CD20</strong> trên bề mặt tế bào lympho B.</td>
                  <td>U lympho không Hodgkin tế bào B, bệnh bạch cầu lympho mạn (CLL), viêm khớp dạng thấp kháng thuốc.</td>
                  <td>Hội chứng giải phóng cytokine nặng khi truyền lần đầu; nguy cơ bùng phát viêm gan B tái hoạt và nhiễm virus JC gây bệnh não chất trắng đa ổ tiến triển (PML).</td>
                </tr>
                <tr>
                  <td><strong>Rasburicase (Elitek)</strong></td>
                  <td>Enzym Urate Oxidase tái tổ hợp; xúc tác chuyển hóa trực tiếp <strong>Acid Uric thành Allantoin</strong> tan gấp 10 lần trong nước.</td>
                  <td><strong>Dự phòng và xử trí cấp cứu Hội chứng ly giải khối u (TLS)</strong> khi hóa trị liệu ung thư máu / u lympho kích thước lớn.</td>
                  <td>Hạ acid uric máu nhanh chóng trong vài giờ (vượt trội so với Allopurinol chỉ ngăn tạo mới); chống chỉ định bệnh nhân thiếu hụt men G6PD do nguy cơ tan máu nặng và Methemoglobin máu.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- BẢNG VÀNG ĐIỂM CHÚ Ý ĐẶC BIỆT BÀI 19 -->
          <div class="cs-gold-box" style="margin-top: 1rem;">
            <div class="cs-gold-title">⭐ BẢNG VÀNG ĐIỂM CHÚ Ý ĐẶC BIỆT - BÀI 19: THUỐC CHỐNG UNG THƯ</div>
            <ul class="cs-gold-list">
              <li><strong>Cảnh báo tử vong 100% của Vincristin tiêm tủy sống:</strong> Vincristin CHỈ ĐƯỢC TIÊM TĨNH MẠCH. Nếu sơ suất tiêm nhầm vào dịch não tủy (Intrathecal) thay cho Methotrexate, thuốc sẽ phá hủy toàn bộ thoi thần kinh của tủy sống và thân não, gây liệt mềm tiến triển tăng dần và dẫn đến cái chết đau đớn không thể cứu vãn trong 100% trường hợp! Mọi ống tiêm Vincristin bắt buộc dán nhãn cảnh báo đỏ "FATAL IF GIVEN INTRATHECALLY"!</li>
              <li><strong>Bộ ba Cặp Độc tính - Chất Giải độc hóa trị kinh điển:</strong><br>
                1. <em>Methotrexate</em> (độc tủy) -&gt; <strong>Leucovorin</strong> (Acid folinic giải cứu).<br>
                2. <em>Cyclophosphamide</em> (viêm bàng quang xuất huyết do Acrolein) -&gt; <strong>MESNA</strong> bảo vệ.<br>
                3. <em>Doxorubicin</em> (suy tim do gốc tự do sắt) -&gt; <strong>Dexrazoxane</strong> chelat sắt bảo vệ cơ tim.</li>
              <li><strong>Tương tác chí mạng giữa 6-MP và Allopurinol:</strong> Thuốc hóa trị 6-Mercaptopurine được chuyển hóa thải độc bởi men Xanthine Oxidase. Nếu bệnh nhân dùng kèm Allopurinol (để hạ acid uric) mà không giảm liều 6-MP, nồng độ thuốc tự do trong máu sẽ tăng vọt gấp 4-5 lần, triệt tiêu toàn bộ tủy xương và tử vong do nhiễm trùng huyết! Bắt buộc giảm 70-75% liều 6-MP!</li>
              <li><strong>Hội chứng Ly giải khối u (Tumor Lysis Syndrome - TLS):</strong> Khi hóa trị các khối u nhạy cảm, hàng tỷ tế bào u vỡ đồng loạt giải phóng chất nội bào vào máu tạo tứ chứng: Tăng K+, Tăng Acid Uric, Tăng Phosphat và Hạ Canxi máu. Acid Uric kết tinh làm tắc nghẽn ống thận gây suy thận cấp vô niệu. Rasburicase là cứu tinh phân giải acid uric thành allantoin ngay lập tức!</li>
            </ul>
          </div>

          <div style="margin-top: 0.75rem;">
            <button class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.35rem 0.75rem;" onclick="jumpToDl2Topic('Thuốc chống ung thư')">
              🎯 Luyện đề trắc nghiệm Bài 19: Thuốc Chống Ung Thư
            </button>
          </div>
        </div>
    </div>

    <!-- BÀI 20: THUỐC TRONG ĐIỀU TRỊ NGỘ ĐỘC -->
    <div class="chapter-accordion-item dl2-searchable-item" id="dl2-item-dl2_ch20">
      <div class="chapter-accordion-header ${dl2OpenAccordions['dl2_ch20'] ? 'active' : ''}" id="dl2-head-dl2_ch20" onclick="toggleDl2Accordion('dl2_ch20')">
        <div class="chapter-acc-title-group">
          <span class="cs-pill cs-pill-danger">⚡ 1 Tiết • 2 Câu • CỰC KỲ QUAN TRỌNG</span>
          <span class="chapter-acc-title">Bài 20: Thuốc Trong Điều Trị Ngộ Độc &amp; Thuốc Giải Độc Đặc Hiệu (Antidotes)</span>
        </div>
        <span class="chapter-acc-arrow">▼</span>
      </div>
      <div class="chapter-accordion-body" id="dl2-body-dl2_ch20" style="display: ${dl2OpenAccordions['dl2_ch20'] ? 'block' : 'none'};">
<!-- BÀI 20 TOÀN DIỆN: THUỐC TRONG ĐIỀU TRỊ NGỘ ĐỘC CẤP TÍNH -->
          <div class="cs-section-header" style="margin-top: 0.5rem;">
            <span>🚨</span> 1. NGUYÊN TẮC CẤP CỨU &amp; BIỆN PHÁP HẠN CHẾ HẤP THU CHẤT ĐỘC
          </div>
          <div class="cs-table-wrap">
            <table class="cs-table">
              <thead>
                <tr>
                  <th>Biện pháp xử trí</th>
                  <th>Cơ chế &amp; Kỹ thuật thực hiện</th>
                  <th>Chỉ định thích hợp</th>
                  <th>Chống chỉ định &amp; Biến chứng nguy hiểm</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Rửa dạ dày (Gastric Lavage)</strong></td>
                  <td>Dùng ống thông cỡ lớn (36 - 40 Fr ở người lớn), đặt tư thế nằm nghiêng trái đầu thấp, bơm rửa từng lượng nhỏ 200-300ml nước muối sinh lý ấm cho đến khi dịch trong.</td>
                  <td>Uống chất độc đe dọa tính mạng và <strong>ĐẾN SỚM TRONG VÒNG 1 GIỜ ĐẦU</strong> sau uống; hoặc thuốc làm liệt dạ dày (kháng cholinergic).</td>
                  <td><strong>Chống chỉ định tuyệt đối: Ngộ độc acid hoặc kiềm ăn mòn mạnh</strong> (nguy cơ thủng thực quản, dạ dày); <strong>hóa chất bay hơi / xăng dầu</strong> (nguy cơ viêm phổi hít hoại tử); hôn mê chưa đặt ống nội khí quản.</td>
                </tr>
                <tr>
                  <td><strong>Than hoạt đơn liều (Single-dose Activated Charcoal)</strong></td>
                  <td>Than được hoạt hóa ở nhiệt độ cao tạo mạng lưới vi mao quản với diện tích bề mặt tiếp xúc khổng lồ (1000 - 2000 m2/g), hấp phụ chất độc trong lòng ống tiêu hóa. Liều: 1 g/kg (tối đa 50 - 100g).</td>
                  <td>Uống chất độc trong vòng 1-2 giờ đầu sau nuốt; có thể phối hợp Sorbitol liều duy nhất để nhuận tràng đẩy nhanh ra ngoài.</td>
                  <td><strong>KHÔNG CÓ TÁC DỤNG HẤP PHỤ</strong> đối với: <strong>Kim loại nặng (Sắt, Chì, Lithi), Rượu / Cồn (Ethanol, Methanol, Ethylene glycol), Acid / Kiềm mạnh, Muối vô cơ (Cyanid, Fluorid)</strong>; cấm dùng khi tắc ruột thủng ruột.</td>
                </tr>
                <tr>
                  <td><strong>Than hoạt đa liều (MDAC)</strong></td>
                  <td>Uống nhắc lại 0.5 g/kg mỗi 2 - 4 giờ; tạo gradient nồng độ kéo chất độc từ máu khuếch tán ngược vào lòng ruột (thẩm tách ruột - gastrointestinal dialysis) và cắt đứt chu kỳ gan - ruột.</td>
                  <td>Ngộ độc các thuốc có chu kỳ gan - ruột hoặc đào thải qua niêm mạc ruột: <strong>Theophyllin, Carbamazepin, Phenobarbital, Dapsone, Quinin</strong>.</td>
                  <td>Tắc ruột cơ học, liệt ruột (nghe mất nhu động ruột), suy giảm ý thức chưa bảo vệ đường thở.</td>
                </tr>
                <tr>
                  <td><strong>Rửa toàn bộ ruột (Whole Bowel Irrigation - WBI)</strong></td>
                  <td>Truyền liên tục dung dịch Polyethylene Glycol đẳng trương (PEG) qua sonde dạ dày với tốc độ 1 - 2 L/h ở người lớn cho đến khi dịch tháo ra từ hậu môn trong hoàn toàn.</td>
                  <td>Uống viên sắt liều lớn; nuốt các gói ma túy bọc nilon (body packers); thuốc phóng thích kéo dài (SR, ER, CR); kim loại nặng không gắn than hoạt.</td>
                  <td>Thủng tạng rỗng, tắc ruột, xuất huyết tiêu hóa tiến triển, tụt huyết áp huyết động không ổn định.</td>
                </tr>
                <tr>
                  <td><strong>Kiềm hóa nước tiểu (Urine Alkalinization)</strong></td>
                  <td>Truyền tĩnh mạch Natri Bicarbonat (NaHCO3) 1.4% để nâng pH nước tiểu lên <strong>7.5 - 8.5</strong>. Khi nước tiểu kiềm, chất độc có tính acid yếu bị ion hóa thành dạng phân cực (A-), không tái hấp thu được qua tế bào ống thận và bị đào thải nhanh ra ngoài (bẫy ion - ion trapping).</td>
                  <td>Ngộ độc nặng các chất acid yếu: <strong>Aspirin (Salicylat), Phenobarbital, Methotrexate, Chlorpropamide</strong>.</td>
                  <td>Suy thận nặng vô niệu, suy tim sung huyết nặng, phù phổi cấp; hạ Kali máu (phải bù đủ Kali trước khi kiềm hóa nước tiểu).</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="cs-section-header" style="margin-top: 1rem;">
            <span>💉</span> 2. BẢNG TRA CỨU TOÀN DIỆN 20 CẶP CHẤT ĐỘC &amp; THUỐC GIẢI ĐỘC ĐẶC HIỆU (ANTIDOTE)
          </div>
          <div class="cs-table-wrap">
            <table class="cs-table">
              <thead>
                <tr>
                  <th>Chất gây độc</th>
                  <th>Thuốc giải độc đặc hiệu (Antidote)</th>
                  <th>Cơ chế tác động hóa sinh / giải độc phân tử</th>
                  <th>Quy tắc &amp; Điểm lưu ý dược lâm sàng</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Paracetamol (Acetaminophen)</strong></td>
                  <td><strong>N-Acetylcystein (NAC)</strong></td>
                  <td>Cung cấp nhóm -SH tổng hợp dự trữ Glutathione ở gan, hoặc kết hợp trực tiếp với chất chuyển hóa độc <strong>NAPQI</strong> thành chất không độc đào thải qua thận.</td>
                  <td>Hiệu quả bảo vệ gan gần như 100% nếu dùng <strong>trong vòng 8 giờ đầu</strong> sau uống; dùng phác đồ uống 72h hoặc truyền tĩnh mạch 21h theo biểu đồ Rumack-Matthew.</td>
                </tr>
                <tr>
                  <td><strong>Opioids (Morphin, Heroin, Fentanyl)</strong></td>
                  <td><strong>Naloxone (Narcan)</strong></td>
                  <td>Chất đối kháng thuần túy cạnh tranh trên thụ thể mu, kappa, delta-opioid; đảo ngược nhanh tình trạng ức chế hô hấp và hôn mê.</td>
                  <td>Thời gian bán thải ngắn (30-90 phút), ngắn hơn nhiều so với Opioid tác dụng kéo dài (Methadone), do đó phải theo dõi sát nguy cơ tái ngộ độc và truyền liên tục nếu cần.</td>
                </tr>
                <tr>
                  <td><strong>Benzodiazepines (Diazepam, Midazolam)</strong></td>
                  <td><strong>Flumazenil</strong></td>
                  <td>Chất đối kháng cạnh tranh chọn lọc tại vị trí gắn kết của benzodiazepine trên thụ thể GABA-A của hệ thần kinh trung ương.</td>
                  <td><strong>CẢNH BÁO: KHÔNG DÙNG THƯỜNG QUY</strong> cho bệnh nhân ngộ độc chưa rõ căn nguyên hoặc dùng chung thuốc chống trầm cảm 3 vòng (TCA), vì có thể gây <strong>Cơn co giật kháng trị và tử vong</strong>!</td>
                </tr>
                <tr>
                  <td><strong>Phospho hữu cơ &amp; Carbamat</strong></td>
                  <td><strong>Atropin</strong> + <strong>Pralidoxime (2-PAM)</strong></td>
                  <td><strong>Atropin</strong>: Kháng cạnh tranh thụ thể Muscarinic giải quyết hội chứng ngộ độc cường phó giao cảm (SLUDGE: co đồng tử, tăng tiết dịch, co thắt PQ).<br><strong>Pralidoxime</strong>: Tháo gỡ gốc phospho, <strong>TÁI HOẠT HÓA ENZYM ACETYLCHOLINESTERASE (AChE)</strong> trước khi enzym bị biến tính vĩnh viễn (hiện tượng lão hóa - aging).</td>
                  <td>Dùng Atropin liều cao nhắc lại cho đến khi xuất hiện dấu hiệu ngấm Atropin (phổi hết rale ẩm, mạch &gt; 80, đồng tử giãn nhẹ); Pralidoxime phải dùng sớm trước 24-48h (trước khi enzym AChE bị lão hóa).</td>
                </tr>
                <tr>
                  <td><strong>Hội chứng kháng Cholinergic (Atropin, Cà độc dược)</strong></td>
                  <td><strong>Physostigmine</strong></td>
                  <td>Carbamat amin bậc 3, ức chế thuận nghịch AChE, <strong>vượt qua được hàng rào máu não</strong> làm tăng nồng độ acetylcholin cả ở trung ương và ngoại vi.</td>
                  <td>Đặc trị mê sảng, kích động cuồng sảng do kháng cholinergic; chống chỉ định khi có phức bộ QRS dãn rộng (ngộ độc TCA).</td>
                </tr>
                <tr>
                  <td><strong>Methanol &amp; Ethylene Glycol</strong></td>
                  <td><strong>Fomepizole</strong> hoặc <strong>Ethanol</strong></td>
                  <td>Ức chế cạnh tranh mạnh enzym <strong>Alcohol Dehydrogenase (ADH)</strong>, ngăn cản chuyển Methanol thành Acid Formic (gây mù mắt và toan máu) và Ethylene glycol thành Acid Oxalic (gây hoại tử thận).</td>
                  <td>Fomepizole là thuốc lý tưởng vì không gây say xỉn và hạ đường huyết; nếu không có dùng Ethanol đường uống hoặc truyền TM duy trì nồng độ cồn máu 100-150 mg/dL; phối hợp lọc máu HD.</td>
                </tr>
                <tr>
                  <td><strong>Sắt (Fe)</strong></td>
                  <td><strong>Deferoxamine (Desferal)</strong></td>
                  <td>Chelat hóa ion Fe3+ tự do trong máu và mô tạo thành phức hợp bền vững Ferrioxamine không độc đào thải qua thận.</td>
                  <td>Làm nước tiểu chuyển sang <strong>màu đỏ cam đặc trưng (vin rose)</strong>; truyền tĩnh mạch liên tục cho đến khi nước tiểu mất màu hồng và sắt huyết thanh giảm an toàn.</td>
                </tr>
                <tr>
                  <td><strong>Kim loại nặng (Chì, Thủy ngân, Asen)</strong></td>
                  <td><strong>Dimercaprol (BAL)</strong>, <strong>Succimer (DMSA)</strong>, <strong>EDTA Canxi Dinatri</strong></td>
                  <td>Cung cấp các nhóm sulfhydryl (-SH) tự do tạo phức chelat vòng càng bền vững với ion kim loại nặng để đào thải qua nước tiểu hoặc phân.</td>
                  <td>Dimercaprol tiêm bắp sâu tan trong dầu; Succimer là dẫn xuất tan trong nước uống được dùng an toàn cho trẻ em nhiễm độc chì máu; EDTA bắt buộc dùng muối Canxi dinatri (CaNa2EDTA) để tránh hạ Ca2+ máu cấp.</td>
                </tr>
                <tr>
                  <td><strong>Đồng (Cu) / Bệnh Wilson</strong></td>
                  <td><strong>Penicillamine (Cuprimine)</strong></td>
                  <td>Chelat hóa ion đồng tạo phức hòa tan đào thải qua thận.</td>
                  <td>Dị ứng chéo với Penicillin; cần bổ sung kèm Pyridoxin (B6) vì thuốc gây thiếu hụt vitamin B6.</td>
                </tr>
                <tr>
                  <td><strong>Thuốc chẹn beta (Beta-blockers)</strong></td>
                  <td><strong>Glucagon</strong>, Liệu pháp Insulin liều cao (HIET)</td>
                  <td>Glucagon kích hoạt trực tiếp thụ thể glucagon cơ tim -&gt; hoạt hóa adenylate cyclase <strong>ĐỘC LẬP HOÀN TOÀN VỚI THỤ THỂ BETA</strong> -&gt; tăng cAMP nội bào, tăng nhịp tim và co bóp cơ tim.</td>
                  <td>Tiêm bolus TM 3-5mg Glucagon sau đó truyền duy trì; phối hợp Glucose + Insulin liều cao (HIET) để nuôi dưỡng chuyển hóa tế bào cơ tim.</td>
                </tr>
                <tr>
                  <td><strong>Thuốc chẹn kênh Canxi (CCB)</strong></td>
                  <td><strong>Canxi Clorid / Canxi Gluconat</strong> + <strong>HIET</strong></td>
                  <td>Bù trực tiếp nồng độ canxi ngoại bào tạo gradient vượt qua sự phong bế của CCB; HIET (High-dose Insulin Euglycemia Therapy) chuyển hóa năng lượng cho cơ tim.</td>
                  <td>Canxi clorid chứa nồng độ canxi nguyên tố gấp 3 lần canxi gluconat nhưng kích ứng tĩnh mạch mạnh, ưu tiên truyền qua catheter tĩnh mạch trung tâm.</td>
                </tr>
                <tr>
                  <td><strong>Digoxin / Glycosid tim</strong></td>
                  <td><strong>Digoxin Immune Fab (DigiFab)</strong></td>
                  <td>Kháng thể kháng thể đặc hiệu liên kết gắn chặt Digoxin tự do trong huyết tương kéo Digoxin ra khỏi thụ thể Na+/K+-ATPase cơ tim.</td>
                  <td>Chỉ định khi loạn nhịp tim nguy hiểm, K+ máu &gt; 5.0 mEq/L hoặc uống lượng lớn; phức hợp đào thải qua thận.</td>
                </tr>
                <tr>
                  <td><strong>Cyanid (Xyanua)</strong></td>
                  <td><strong>Hydroxocobalamin (Cyanokit)</strong></td>
                  <td>Gắn trực tiếp với ion CN- tạo thành <strong>Cyanocobalamin (Vitamin B12)</strong> không độc đào thải qua nước tiểu.</td>
                  <td>Thuốc giải độc an toàn hàng đầu không gây tụt HA hay thiếu oxy mô; làm da và nước tiểu chuyển màu đỏ thẫm tạm thời.</td>
                </tr>
                <tr>
                  <td><strong>Khí CO (Carbon Monoxide)</strong></td>
                  <td><strong>Oxy 100%</strong> hoặc <strong>Oxy cao áp (HBO)</strong></td>
                  <td>Áp lực oxy hòa tan cao đẩy CO ra khỏi thụ thể Hemoglobin; rút ngắn thời gian bán thải của HbCO từ 320 phút (khí trời) xuống 80 phút (O2 100%) và 20 phút (HBO 2.5-3 atm).</td>
                  <td>Chỉ định oxy cao áp khi nồng độ HbCO &gt; 25% (hoặc &gt; 15% ở phụ nữ có thai), mất ý thức, toan chuyển hóa hoặc có dấu hiệu thiếu máu cơ tim.</td>
                </tr>
                <tr>
                  <td><strong>Thuốc chống trầm cảm 3 vòng (TCA)</strong></td>
                  <td><strong>Natri Bicarbonat (NaHCO3)</strong></td>
                  <td>Kiềm hóa máu (nâng pH lên 7.45 - 7.55) làm giảm tỷ lệ thuốc gắn vào kênh; cung cấp nồng độ Na+ ngoại bào cao cạnh tranh đẩy TCA ra khỏi kênh Natri nhanh của tế bào cơ tim.</td>
                  <td>Chỉ định khẩn cấp khi <strong>Phức bộ QRS dãn rộng &gt; 100ms</strong> trên điện tâm đồ hoặc tụt HA; giúp thu hẹp QRS và ngăn ngừa rung thất tử vong.</td>
                </tr>
                <tr>
                  <td><strong>Heparin không phân đoạn (UFH)</strong></td>
                  <td><strong>Protamin sulfat</strong></td>
                  <td>Peptide base mạnh mang điện tích dương tạo liên kết ion muối bền vững trung hòa phân tử Heparin mang điện tích âm mạnh.</td>
                  <td>1 mg Protamin trung hòa ~100 IU UFH; tiêm TM chậm để tránh tụt HA và phản ứng phản vệ; với LMWH chỉ trung hòa được ~60%.</td>
                </tr>
                <tr>
                  <td><strong>Kháng Vitamin K (Warfarin, Sintrom)</strong></td>
                  <td><strong>Vitamin K1</strong> + <strong>Phức hợp Prothrombin cô đặc (PCC)</strong></td>
                  <td>Vitamin K1 kích hoạt lại quá trình carboxyl hóa yếu tố II, VII, IX, X; PCC cung cấp trực tiếp tức thì các yếu tố đông máu đang thiếu hụt.</td>
                  <td>Xuất huyết nặng đe dọa tính mạng: Dùng ngay 4-PCC tiêm TM + Vitamin K1 5-10mg tiêm TM chậm; không tiêm bắp Vitamin K1 do nguy cơ tụ máu lớn.</td>
                </tr>
                <tr>
                  <td><strong>Dabigatran (Pradaxa)</strong></td>
                  <td><strong>Idarucizumab (Praxbind)</strong></td>
                  <td>Đoạn kháng thể đơn dòng nhân hóa (Fab) gắn Dabigatran với ái lực mạnh gấp 350 lần so với Thrombin.</td>
                  <td>Đảo ngược hoàn toàn tác dụng chống đông trong vòng vài phút; liều chuẩn 5g tiêm tĩnh mạch.</td>
                </tr>
                <tr>
                  <td><strong>Rivaroxaban / Apixaban</strong></td>
                  <td><strong>Andexanet alfa (Andexxa)</strong></td>
                  <td>Protein mồi nhử mô phỏng yếu tố Xa bất hoạt gắn chặt các chất ức chế Xa trực tiếp trong tuần hoàn.</td>
                  <td>Chỉ định cầm máu cấp cứu xuất huyết đe dọa tính mạng hoặc phẫu thuật khẩn cấp khi đang dùng thuốc nhóm -xaban.</td>
                </tr>
                <tr>
                  <td><strong>Isoniazid (INH)</strong></td>
                  <td><strong>Pyridoxin (Vitamin B6)</strong></td>
                  <td>INH tạo phức hydrazone bất hoạt B6 dẫn đến cạn kiệt GABA ở não gây co giật; tiêm bù Pyridoxin tái sinh nồng độ GABA nội sinh.</td>
                  <td>Liều dùng: <strong>Tính theo gram tương đương với lượng INH đã uống</strong> (nếu uống 5g INH thì tiêm 5g Pyridoxin; nếu không rõ liều thì tiêm khởi đầu 5g TM chậm). Cắt cơn co giật kháng trị với Benzodiazepine.</td>
                </tr>
                <tr>
                  <td><strong>Methemoglobin máu (MetHb)</strong></td>
                  <td><strong>Xanh Methylen (Methylene Blue)</strong></td>
                  <td>Hoạt động như chất nhận điện tử từ NADPH thông qua enzym MetHb reductase, khử Fe3+ trong Methemoglobin trở lại dạng Fe2+ của Hemoglobin bình thường.</td>
                  <td>Liều: 1 - 2 mg/kg tiêm TM chậm trong 5 phút; <strong>Chống chỉ định tuyệt đối ở bệnh nhân thiếu men G6PD</strong> vì thuốc sẽ gây tan máu ồ ạt!</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- BẢNG VÀNG ĐIỂM CHÚ Ý ĐẶC BIỆT BÀI 20 -->
          <div class="cs-gold-box" style="margin-top: 1rem;">
            <div class="cs-gold-title">⭐ BẢNG VÀNG ĐIỂM CHÚ Ý ĐẶC BIỆT - BÀI 20: ĐIỀU TRỊ NGỘ ĐỘC CẤP</div>
            <ul class="cs-gold-list">
              <li><strong>Cạm bẫy Flumazenil trong cấp cứu hôn mê:</strong> Tuyệt đối không bao giờ dùng Flumazenil như một "test chẩn đoán" ở bệnh nhân hôn mê không rõ nguyên nhân! Nếu bệnh nhân có phụ thuộc Benzodiazepine mạn tính hoặc uống kèm thuốc chống trầm cảm 3 vòng (TCA), việc tiêm Flumazenil sẽ triệt tiêu tác dụng bảo vệ thần kinh của GABA, khởi phát ngay lập tức các cơn co giật động kinh liên tục kháng trị và rối loạn nhịp tim tử vong!</li>
              <li><strong>Cơ chế cứu sống kỳ diệu của Natri Bicarbonat trong ngộ độc TCA:</strong> Thuốc chống trầm cảm 3 vòng (Amitriptylin) chẹn kênh Natri nhanh cơ tim làm phức bộ QRS dãn rộng gây rung thất. Truyền NaHCO3 kiềm hóa máu giải độc qua 2 gọng kìm: (1) Nâng pH máu làm thuốc chuyển thành dạng không ion hóa giảm ái lực với thụ thể kênh, và (2) Cung cấp nồng độ Na+ ngoại bào cao cạnh tranh đẩy bật TCA ra khỏi kênh Natri, lập tức thu hẹp phức bộ QRS về bình thường!</li>
              <li><strong>Nguyên tắc "Gram đổi Gram" của Pyridoxin trong ngộ độc INH:</strong> Ngộ độc cấp thuốc chống lao Isoniazid gây ra các cơn co giật liên tục không đáp ứng với thuốc chống động kinh thông thường. Liều Vitamin B6 điều trị bắt buộc phải tính theo quy tắc gram đổi gram: Uống bao nhiêu gam INH thì tiêm bấy nhiêu gam Pyridoxin!</li>
              <li><strong>Chống chỉ định tuyệt đối Xanh Methylen ở người thiếu G6PD:</strong> Xanh methylen muốn khử Methemoglobin bắt buộc phải dựa vào enzym NADPH-MetHb reductase. Ở người thiếu men G6PD không sản xuất đủ NADPH, Xanh methylen không những vô tác dụng mà bản thân nó lại trở thành chất oxy hóa cực mạnh làm tan máu ồ ạt dẫn đến tử vong nhanh chóng!</li>
            </ul>
          </div>

          <div style="margin-top: 0.75rem;">
            <button class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.35rem 0.75rem;" onclick="jumpToDl2Topic('Thuốc/trong điều trị ngộ độc')">
              🎯 Luyện đề trắc nghiệm Bài 20: Điều Trị Ngộ Độc Cấp
            </button>
          </div>
        </div>
    </div>
  `;
}

function generateQuickDrugTableHtml() {
  return `
    <div class="cs-table-wrap">
      <table class="cs-table">
        <thead>
          <tr>
            <th>Tên Hoạt Chất</th>
            <th>Bài Học &amp; Nhóm Thuốc</th>
            <th>Cơ Chế Phân Tử Độc Nhất</th>
            <th>Chỉ Định / Lưu Ý Điển Hình</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Digoxin</strong></td>
            <td>Bài 1 • Glycosid tim</td>
            <td>Ức chế enzyme Na⁺/K⁺-ATPase màng tế bào cơ tim</td>
            <td>Suy tim, rung nhĩ; hạ K⁺ làm tăng độc tính</td>
          </tr>
          <tr>
            <td><strong>Enalapril / Captopril</strong></td>
            <td>Bài 2 • ACEI</td>
            <td>Ức chế men chuyển Angiotensin I → II, tăng Bradykinin</td>
            <td>Tăng huyết áp, suy tim; ho khan dai dẳng, CCĐ thai kỳ</td>
          </tr>
          <tr>
            <td><strong>Losartan / Valsartan</strong></td>
            <td>Bài 2 • ARB</td>
            <td>Chẹn chọn lọc thụ thể AT₁ của Angiotensin II</td>
            <td>Thay thế ACEI khi bị ho khan; CCĐ thai kỳ</td>
          </tr>
          <tr>
            <td><strong>Amlodipin</strong></td>
            <td>Bài 2 • CCB nhóm DHP</td>
            <td>Chẹn kênh Calci type L ở cơ trơn thành mạch</td>
            <td>Tăng huyết áp người cao tuổi; tác dụng phụ phù mắt cá chân</td>
          </tr>
          <tr>
            <td><strong>Nitroglycerin</strong></td>
            <td>Bài 3 • Nitrat hữu cơ</td>
            <td>Khử giải phóng NO → tăng cGMP → giãn tĩnh mạch (giảm tiền gánh)</td>
            <td>Cắt cơn đau thắt ngực ngậm dưới lưỡi; cấm dùng cùng Viagra</td>
          </tr>
          <tr>
            <td><strong>Amiodaron</strong></td>
            <td>Bài 4 • Chống loạn nhịp III</td>
            <td>Chẹn kênh Kali, kéo dài thời gian tái cực và khoảng QT</td>
            <td>Chứa 37% Iod; độc tính xơ phổi, rối loạn tuyến giáp</td>
          </tr>
          <tr>
            <td><strong>Furosemid</strong></td>
            <td>Bài 5 • Lợi niệu quai</td>
            <td>Ức chế đồng vận chuyển Na⁺/K⁺/2Cl⁻ ở nhánh dày quai Henle</td>
            <td>Lợi niệu mạnh nhất; hạ K⁺, hạ Ca²⁺, độc thính giác tai</td>
          </tr>
          <tr>
            <td><strong>Hydrochlorothiazid</strong></td>
            <td>Bài 5 • Lợi niệu Thiazid</td>
            <td>Ức chế đồng vận chuyển Na⁺/Cl⁻ ở ống lượn xa</td>
            <td>Hạ K⁺, TĂNG Ca²⁺ máu (tốt cho loãng xương); mất tác dụng khi GFR < 30</td>
          </tr>
          <tr>
            <td><strong>Spironolacton</strong></td>
            <td>Bài 5 • Lợi niệu giữ kali</td>
            <td>Đối kháng cạnh tranh thụ thể Aldosteron</td>
            <td>Tăng K⁺ máu; tác dụng phụ gây vú to ở nam giới</td>
          </tr>
          <tr>
            <td><strong>Omeprazole</strong></td>
            <td>Bài 6 • PPI dạ dày</td>
            <td>Gắn đồng hóa trị không hồi phục enzym H⁺/K⁺-ATPase</td>
            <td>Ức chế tiết acid mạnh nhất; uống trước ăn sáng 30 &minus; 60 phút</td>
          </tr>
          <tr>
            <td><strong>Albendazol</strong></td>
            <td>Bài 7 • Trị giun sán</td>
            <td>Gắn β-tubulin ức chế trùng hợp vi ống của giun</td>
            <td>Trị giun đũa, kim, móc, tóc, ấu trùng sán lợn; CCĐ có thai</td>
          </tr>
          <tr>
            <td><strong>Praziquantel</strong></td>
            <td>Bài 7 • Trị sán</td>
            <td>Tăng tính thấm màng tế bào sán với Ca²⁺ → co cứng cơ sán</td>
            <td>Lựa chọn số 1 trị sán lá gan, sán máng, sán dây</td>
          </tr>
          <tr>
            <td><strong>Salbutamol</strong></td>
            <td>Bài 8 • Chủ vận β₂ ngắn</td>
            <td>Kích thích chọn lọc β₂ adrenergic cơ trơn phế quản</td>
            <td>Cắt cơn hen phế quản cấp tính; run tay, tim nhanh</td>
          </tr>
          <tr>
            <td><strong>Montelukast</strong></td>
            <td>Bài 8 • Kháng Leukotriene</td>
            <td>Chẹn thụ thể CysLT₁ của Leukotriene</td>
            <td>Hen gắng sức, hen do aspirin, hen kèm viêm mũi dị ứng</td>
          </tr>
          <tr>
            <td><strong>Fexofenadin</strong></td>
            <td>Bài 9 • Kháng H1 thế hệ 2</td>
            <td>Đối kháng chọn lọc thụ thể H₁ ngoại vi, không qua máu não</td>
            <td>Dị ứng, mày đay; KHÔNG gây buồn ngủ, an toàn tim mạch</td>
          </tr>
          <tr>
            <td><strong>Atorvastatin</strong></td>
            <td>Bài 10 • Statin</td>
            <td>Ức chế cạnh tranh enzym HMG-CoA Reductase</td>
            <td>Hạ mạnh LDL-C; ADR viêm cơ, tiêu cơ vân cấp (Rhabdomyolysis)</td>
          </tr>
          <tr>
            <td><strong>Fenofibrat</strong></td>
            <td>Bài 10 • Fibrat</td>
            <td>Kích hoạt thụ thể nhân PPAR-α tăng tổng hợp LPL</td>
            <td>Hạ mạnh Triglycerid, phòng viêm tụy cấp</td>
          </tr>
          <tr>
            <td><strong>Primaquin</strong></td>
            <td>Bài 11 • Chống sốt rét</td>
            <td>Diệt thể ẩn trong gan (Hypnozoite) của <em>P. vivax, P. ovale</em></td>
            <td>Chống tái phát sốt rét; gây tan máu cấp ở người thiếu G6PD</td>
          </tr>
          <tr>
            <td><strong>Metformin</strong></td>
            <td>Bài 14 • Biguanid</td>
            <td>Kích hoạt AMPK giảm tân tạo đường ở gan</td>
            <td>Không gây hạ đường huyết đơn độc; CCĐ suy thận eGFR < 30</td>
          </tr>
          <tr>
            <td><strong>Warfarin</strong></td>
            <td>Bài 15 • Kháng Vitamin K</td>
            <td>Ức chế enzym VKOR ngăn tổng hợp yếu tố II, VII, IX, X</td>
            <td>Theo dõi INR (2.0 &minus; 3.0); giải độc bằng Vitamin K1; CCĐ có thai</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

function generateAntidotesTableHtml() {
  return `
    <div class="cs-table-wrap">
      <table class="cs-table">
        <thead>
          <tr>
            <th>Chất Độc / Thuốc Quá Liều</th>
            <th>Thuốc Giải Độc Đặc Hiệu (Antidote)</th>
            <th>Cơ Chế Hóa Giải Độc Tính</th>
            <th>Ghi Chú Lâm Sàng</th>
          </tr>
        </thead>
        <tbody>
          <tr style="background: rgba(239, 68, 68, 0.05);">
            <td><strong>Paracetamol (Acetaminophen)</strong></td>
            <td><strong>N-acetylcystein (NAC)</strong></td>
            <td>Cung cấp nhóm -SH và cystein để tái tổng hợp <em>Glutathione</em> trung hòa chất độc NAPQI hoại tử gan</td>
            <td>Hiệu quả tốt nhất trong vòng 8 &minus; 10 giờ đầu sau uống</td>
          </tr>
          <tr>
            <td><strong>Opioid (Morphin, Heroin, Fentanyl, Codein)</strong></td>
            <td><strong>Naloxone (Narcan)</strong></td>
            <td>Đối kháng cạnh tranh thuần túy tại các thụ thể Opioid (μ, κ, δ)</td>
            <td>Tác dụng ngắn (30 &minus; 90 phút) nên cần tiêm nhắc lại để tránh tái suy hô hấp</td>
          </tr>
          <tr>
            <td><strong>Benzodiazepin (Diazepam, Midazolam)</strong></td>
            <td><strong>Flumazenil</strong></td>
            <td>Đối kháng cạnh tranh tại vị trí gắn benzodiazepin trên phức hợp thụ thể GABA<sub>A</sub></td>
            <td>Thận trọng ở người nghiện BZD mạn vì có thể gây co giật</td>
          </tr>
          <tr style="background: rgba(239, 68, 68, 0.05);">
            <td><strong>Digoxin &amp; Glycosid tim</strong></td>
            <td><strong>Kháng thể kháng Digoxin (Digoxin-Fab / Digibind)</strong></td>
            <td>Kháng thể gắn đặc hiệu với phân tử Digoxin tự do tạo phức hợp đào thải qua thận</td>
            <td>Dùng khi loạn nhịp đe dọa tính mạng hoặc tăng K⁺ máu nặng</td>
          </tr>
          <tr>
            <td><strong>Heparin không phân đoạn (UFH)</strong></td>
            <td><strong>Protamin sulfat</strong></td>
            <td>Protein kiềm tích điện dương liên kết ion trung hòa phân tử Heparin tích điện âm</td>
            <td>1 mg Protamin trung hòa khoảng 100 UI Heparin</td>
          </tr>
          <tr>
            <td><strong>Warfarin &amp; Thuốc kháng Vitamin K</strong></td>
            <td><strong>Vitamin K₁ (Phytomenadione)</strong>; Cấp cứu: Huyết tương tươi (FFP) / PCC</td>
            <td>Bổ sung Vitamin K1 hoạt tính để gan tái tổng hợp yếu tố đông máu II, VII, IX, X</td>
            <td>FFP hoặc PCC cung cấp ngay các yếu tố đông máu có sẵn</td>
          </tr>
          <tr>
            <td><strong>Dabigatran (Pradaxa)</strong></td>
            <td><strong>Idarucizumab (Praxbind)</strong></td>
            <td>Kháng thể đơn dòng gắn trực tiếp Thrombin ức chế Dabigatran</td>
            <td>Hiệu quả tức thì trong vài phút</td>
          </tr>
          <tr>
            <td><strong>Rivaroxaban / Apixaban</strong></td>
            <td><strong>Andexanet alfa</strong></td>
            <td>Mồi nhử tương tự yếu tố Xa bất hoạt gắn với thuốc chẹn Xa</td>
            <td>Hóa giải nguy cơ chảy máu nội sọ</td>
          </tr>
          <tr style="background: rgba(239, 68, 68, 0.05);">
            <td><strong>Thuốc trừ sâu Phospho hữu cơ &amp; Khí độc thần kinh</strong></td>
            <td><strong>Atropin liều cao</strong> + <strong>Pralidoxime (PAM / 2-PAM)</strong></td>
            <td>Atropin chẹn thụ thể Muscarinic; PAM tái hoạt hóa enzym <em>Acetylcholinesterase</em></td>
            <td>Dùng PAM càng sớm càng tốt trước khi enzym bị "lão hóa" (aging)</td>
          </tr>
          <tr>
            <td><strong>Methanol (Cồn công nghiệp) &amp; Ethylene glycol</strong></td>
            <td><strong>Ethanol</strong> hoặc <strong>Fomepizole</strong></td>
            <td>Cạnh tranh ức chế enzyme <em>Alcohol Dehydrogenase (ADH)</em>, ngăn tạo Acid formic gây mù mắt</td>
            <td>Fomepizole có ái lực với ADH gấp 8000 lần so với Ethanol</td>
          </tr>
          <tr>
            <td><strong>Ngộ độc Sắt (Fe)</strong></td>
            <td><strong>Deferoxamin (Desferal)</strong></td>
            <td>Tạo phức chelat tan bền vững với ion sắt tự do đào thải qua nước tiểu màu đỏ cam</td>
            <td>Hay gặp ở trẻ nhỏ uống nhầm viên bổ máu</td>
          </tr>
          <tr>
            <td><strong>Kim loại nặng: Chì (Pb), Thủy ngân (Hg), Asen (As)</strong></td>
            <td><strong>Dimercaprol (BAL)</strong>, Succimer (DMSA), CaNa₂-EDTA</td>
            <td>Chứa nhóm sulfhydryl (-SH) cạnh tranh tạo phức hợp chelat đào thải kim loại</td>
            <td>Chỉ định cấp cứu nhiễm độc kim loại nặng</td>
          </tr>
          <tr>
            <td><strong>Khí độc Xyanua (Cyanide - CN⁻)</strong></td>
            <td><strong>Hydroxocobalamin</strong>, hoặc bộ kít Natri nitrit + Natri thiosulfat</td>
            <td>Hydroxocobalamin gắn CN⁻ tạo thành Cyanocobalamin (Vitamin B12) vô hại đào thải qua thận</td>
            <td>Tác dụng nhanh, không làm giảm oxy mô như nitrit</td>
          </tr>
          <tr>
            <td><strong>Khí CO (Carbon monoxide)</strong></td>
            <td><strong>Oxy 100%</strong> hoặc <strong>Oxy cao áp (Hyperbaric O₂)</strong></td>
            <td>Nồng độ oxy cao đẩy CO ra khỏi phân tử Hemoglobin (HbCO)</td>
            <td>Rút ngắn thời gian bán thải của HbCO từ 5 giờ xuống 20 phút</td>
          </tr>
          <tr>
            <td><strong>Isoniazid (INH - thuốc lao)</strong></td>
            <td><strong>Vitamin B₆ (Pyridoxin) liều cao</strong></td>
            <td>Bù đắp lượng pyridoxin bị INH bất hoạt, phục hồi tổng hợp GABA chống co giật</td>
            <td>Tiêm tĩnh mạch tương đương lượng INH đã uống</td>
          </tr>
          <tr>
            <td><strong>Thuốc chẹn Beta (Beta-blocker quá liều)</strong></td>
            <td><strong>Glucagon</strong></td>
            <td>Kích thích thụ thể glucagon làm tăng cAMP cơ tim không phụ thuộc thụ thể beta</td>
            <td>Làm tăng nhịp tim và sức co bóp cơ tim khi tim chậm nặng</td>
          </tr>
          <tr>
            <td><strong>Methemoglobin máu (do Dapsone, Nitrit, thuốc tê)</strong></td>
            <td><strong>Xanh Methylen (Methylene blue)</strong></td>
            <td>Chất nhận điện tử hỗ trợ enzym khử Fe³⁺ trong MetHb trở lại thành Fe²⁺ của Hb</td>
            <td>Chống chỉ định ở người thiếu G6PD</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

function generateExamTrapsSummaryHtml() {
  return `
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div class="exam-trap-box" style="margin: 0;">
        <div class="exam-trap-title">🛑 Bẫy 1: Thuốc Tuyệt Đối Chống Chỉ Định Cho Phụ Nữ Mang Thai</div>
        <p style="margin-bottom: 0.5rem;">Đề thi luôn có ít nhất 2 câu hỏi về lựa chọn an toàn hoặc thuốc cấm dùng trong thai kỳ:</p>
        <ul style="padding-left: 1.25rem; font-size: 0.88rem; line-height: 1.6;">
          <li><strong>CẤM TUYỆT ĐỐI:</strong>
            <br>&bull; <em>ACEI / ARB (Enalapril, Losartan...):</em> Gây suy thận thai nhi, ít ối, quái thai và dị tật sọ mặt.
            <br>&bull; <em>Warfarin:</em> Gây hội chứng Warfarin thai nhi (khiếm khuyết xương mũi, bất thường xương, chảy máu).
            <br>&bull; <em>Statin:</em> Chống chỉ định vì cholesterol rất cần thiết cho sự phát triển của thai nhi.
            <br>&bull; <em>Misoprostol:</em> Gây co bóp tử cung mạnh dẫn đến sảy thai hoặc sinh non.
            <br>&bull; <em>Tetracyclin:</em> Lắng đọng vào mầm răng và xương làm hỏng men răng và vàng răng vĩnh viễn.
            <br>&bull; <em>Mebendazol / Albendazol:</em> Nguy cơ gây quái thai (đặc biệt 3 tháng đầu).
          </li>
          <li><strong>AN TOÀN ĐƯỢC CHỌN KHI MANG THAI:</strong>
            <br>&bull; <em>Hạ huyết áp:</em> <strong>Methyldopa</strong> (lựa chọn số 1), Labetalol, Hydralazin.
            <br>&bull; <em>Hạ đường huyết:</em> <strong>Insulin</strong> (lựa chọn an toàn số 1, không qua nhau thai).
            <br>&bull; <em>Chống đông:</em> <strong>Heparin / LMWH (Enoxaparin)</strong> (phân tử lớn không qua hàng rào nhau thai).
            <br>&bull; <em>Giảm đau hạ sốt:</em> <strong>Paracetamol</strong>.
          </li>
        </ul>
      </div>

      <div class="exam-trap-box" style="margin: 0;">
        <div class="exam-trap-title">🛑 Bẫy 2: Các Cặp Phối Hợp Thuốc Nguy Hiểm Chết Người</div>
        <ul style="padding-left: 1.25rem; font-size: 0.88rem; line-height: 1.6;">
          <li><strong>Nitroglycerin + Sildenafil (Viagra):</strong> Cùng tăng cGMP gây giãn mạch tối đa → tụt huyết áp tử vong.</li>
          <li><strong>Statin + Gemfibrozil:</strong> Ức chế chuyển hóa statin → nguy cơ tiêu cơ vân cấp (Rhabdomyolysis) suy thận cấp.</li>
          <li><strong>Clopidogrel + Omeprazole:</strong> Omeprazole ức chế CYP2C19 làm giảm tạo chất có hoạt tính của Clopidogrel → huyết khối tái phát.</li>
          <li><strong>Amiodaron + Quinidin / Sotalol:</strong> Cùng kéo dài khoảng QT → xoắn đỉnh (Torsades de pointes) ngừng tim.</li>
          <li><strong>Digoxin + Furosemid liều cao không bù Kali:</strong> Hạ Kali máu làm tăng gắn Digoxin → ngộ độc Digoxin gây loạn nhịp thất chết người.</li>
        </ul>
      </div>

      <div class="exam-trap-box" style="margin: 0;">
        <div class="exam-trap-title">🛑 Bẫy 3: Quy Tắc Ngừng Thuốc &amp; Uống Thuốc Đặc Biệt</div>
        <ul style="padding-left: 1.25rem; font-size: 0.88rem; line-height: 1.6;">
          <li><strong>Glucocorticoid:</strong> Dùng kéo dài trên 2 &minus; 3 tuần bắt buộc phải <strong>giảm liều từ từ (tapering)</strong> trước khi ngừng để tránh suy thượng thận cấp. Uống 1 lần duy nhất lúc 8 giờ sáng.</li>
          <li><strong>Metformin:</strong> Phải ngừng trước 48 giờ khi chụp X-quang hoặc CT scan có tiêm thuốc cản quang chứa iod để tránh suy thận cấp gây toan acid lactic.</li>
          <li><strong>Viên sắt:</strong> Uống lúc bụng đói hoặc kèm Vitamin C, phân màu đen xám là bình thường.</li>
          <li><strong>Corticoid hít (ICS):</strong> Súc miệng và nhổ bỏ nước ngay sau khi hít để ngừa nấm Candida họng miệng.</li>
        </ul>
      </div>
    </div>
  `;
}

// Export to window
if (typeof window !== 'undefined') {
  window.renderDuocLy2CheatsheetView = renderDuocLy2CheatsheetView;
  window.switchDl2CheatsheetSubtab = switchDl2CheatsheetSubtab;
  window.toggleDl2Accordion = toggleDl2Accordion;
  window.setAllDl2Accordions = setAllDl2Accordions;
  window.onDl2SearchInput = onDl2SearchInput;
  window.jumpToDl2Topic = jumpToDl2Topic;
}
