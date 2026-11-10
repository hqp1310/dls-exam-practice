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
        <div class="chapter-sec-heading">🎯 1. Khái Niệm &amp; Phân Nhóm Thuốc:</div>
        <ul class="chapter-point-list">
          <li><strong>Glycosid tim (Digitalis):</strong> Digoxin, Digitoxin, Strophanthin. Nguồn gốc từ lá cây Dương địa hoàng (<em>Digitalis purpurea, Digitalis lanata</em>). Cấu trúc gồm 2 phần: <em>Phần Genin (Aglycon)</em> quyết định tác dụng trợ tim và độc tính; <em>Phần đường</em> quyết định khả năng hòa tan, hấp thu và thải trừ.</li>
          <li><strong>Thuốc ức chế PDE-3 (Phosphodiesterase-3):</strong> Milrinon, Inamrinon. Tăng nồng độ cAMP nội bào → tăng Ca²⁺ nội bào → tăng co bóp cơ tim và giãn mạch ngoại vi (Inodilator). Dùng ngắn hạn trong suy tim cấp mất bù.</li>
          <li><strong>Thuốc chủ vận beta-1 adrenergic:</strong> Dobutamin, Dopamin. Kích thích thụ thể β₁ ở tim → tăng co bóp cơ tim. Dùng cấp cứu sốc tim và suy tim cấp nặng.</li>
        </ul>

        <div class="chapter-sec-heading">🔬 2. Cơ Chế Tác Dụng Của Glycosid Tim (Digoxin):</div>
        <ul class="chapter-point-list">
          <li><strong>Cơ chế phân tử:</strong> Ức chế chọn lọc và thuận nghịch enzyme <strong>Na⁺/K⁺-ATPase</strong> ở màng tế bào cơ tim → giảm bơm Na⁺ ra ngoài → tăng nồng độ Na⁺ nội bào → ức chế cơ chế trao đổi Na⁺/Ca²⁺ → tăng tích tụ <strong>Ca²⁺ tự do nội bào</strong> → Ca²⁺ gắn vào Troponin C làm actin và myosin trượt lên nhau mạnh hơn → <strong>tăng sức co bóp cơ tim</strong>.</li>
          <li><strong>Quy tắc 4 tác dụng trên tim (Quy tắc 4 chữ "Tâm"):</strong>
            <br>&bull; <em>Tăng co bóp:</em> Tăng lực và tốc độ co bóp cơ tim (Inotropic dương tính).
            <br>&bull; <em>Giảm nhịp tim:</em> Làm tim đập chậm lại do kích thích dây thần kinh phế vị X (Chronotropic âm tính).
            <br>&bull; <em>Giảm dẫn truyền:</em> Làm chậm dẫn truyền nhĩ thất qua nút AV (Dromotropic âm tính - kéo dài khoảng PR trên ECG).
            <br>&bull; <em>Tăng tính kích thích:</em> Tăng tính trơ và tính tự động cơ thất (Bathmotropic dương tính - dễ gây ngoại tâm thu).
          </li>
        </ul>

        <div class="chapter-sec-heading">⚖️ 3. So Sánh Dược Động Học Digoxin vs Digitoxin:</div>
        <div class="cs-table-wrap">
          <table class="cs-table">
            <thead>
              <tr><th>Đặc Điểm</th><th>Digoxin (Tan trong nước)</th><th>Digitoxin (Tan trong lipid)</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Hấp thu đường uống</strong></td><td>60 &minus; 80%</td><td>90 &minus; 100%</td></tr>
              <tr><td><strong>Gắn protein huyết tương</strong></td><td>Thấp (20 &minus; 25%)</td><td>Rất cao (90 &minus; 97%)</td></tr>
              <tr><td><strong>Chuyển hóa &amp; Thải trừ</strong></td><td>Thải trừ qua thận nguyên vẹn (80%)</td><td>Chuyển hóa qua gan (90%), có chu kỳ gan - ruột</td></tr>
              <tr><td><strong>Thời gian bán thải (t<sub>1/2</sub>)</strong></td><td>36 &minus; 40 giờ (uống 1 lần/ngày)</td><td>5 &minus; 7 ngày (tích lũy kéo dài)</td></tr>
              <tr><td><strong>Hiệu chỉnh liều</strong></td><td>Bắt buộc giảm liều khi suy thận</td><td>Không cần chỉnh liều khi suy thận</td></tr>
            </tbody>
          </table>
        </div>

        <div class="chapter-sec-heading">⚡ 4. Ngộ Độc Digoxin &amp; Xử Trí Cấp Cứu:</div>
        <ul class="chapter-point-list">
          <li><strong>Phạm vi điều trị hẹp:</strong> Nồng độ điều trị trong huyết tương chỉ từ <strong>0.8 &minus; 2.0 ng/mL</strong>. Khi > 2.0 ng/mL là ngưỡng ngộ độc.</li>
          <li><strong>Triệu chứng ngộ độc:</strong> Sớm nhất là rối loạn tiêu hóa (chán ăn, buồn nôn, nôn); thần kinh thị giác (nhìn mờ, thấy quầng sáng màu vàng hoặc xanh lá cây - Xanthopsia); loạn nhịp tim (ngoại tâm thu thất đa ổ, nhịp đôi, block nhĩ thất độ 2-3).</li>
          <li><strong>Yếu tố thúc đẩy ngộ độc:</strong> <strong>Hạ K⁺ máu</strong> (yếu tố thường gặp nhất do dùng chung thuốc lợi tiểu thải kali như Furosemid, Thiazid), hạ Mg²⁺ máu, tăng Ca²⁺ máu, suy giảm chức năng thận, dùng chung Quinidin, Amiodaron, Verapamil (đẩy Digoxin khỏi mô và giảm thanh thải thận).</li>
          <li><strong>Thuốc giải độc đặc hiệu:</strong> <strong>Kháng thể kháng Digoxin (Digoxin Immune Fab / Digibind)</strong>. Bù K⁺ (nếu có hạ K⁺ và không có block AV), dùng Lidocain hoặc Phenytoin để chống loạn nhịp thất.</li>
        </ul>

                <!-- BẢNG VÀNG: CÁC ĐIỂM CHÚ Ý ĐẶC BIỆT ĐỘC NHẤT VÔ NHỊ -->
        <div class="chapter-sec-heading" style="color: #dc2626;">🔥 4. Những Điểm Chú Ý Đặc Biệt &amp; Độc Nhất Vô Nhị (Chỉ Có Ở Thuốc Trợ Tim - Trọng Tâm Đề Thi):</div>
        <div style="background: var(--surface-alt); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1.25rem; font-size: 0.88rem; line-height: 1.6;">
          <ul class="chapter-point-list" style="display: flex; flex-direction: column; gap: 0.75rem;">
            <li>
              <strong style="color: #dc2626;">1. Cạnh tranh ion K⁺ tại bơm Na⁺/K⁺-ATPase — Cửa tử của ngộ độc Digoxin:</strong>
              <br>&bull; <em>Cơ chế:</em> Digoxin và ion K⁺ cạnh tranh trực tiếp vị trí gắn trên enzym Na⁺/K⁺-ATPase ở màng cơ tim. Khi <strong>hạ K⁺ máu</strong>, vị trí gắn bị bỏ trống khiến Digoxin gắn chặt và ồ ạt hơn → gây ngộ độc nặng ngay cả khi nồng độ Digoxin trong máu ở mức bình thường (0.8 - 2.0 ng/mL)!
              <br>&bull; <em>Thủ phạm thường gặp:</em> Dùng chung thuốc lợi tiểu thải kali (Furosemid, Thiazid) mà không bù kali là nguyên nhân số 1 kích hoạt ngộ độc Digoxin trên lâm sàng.
            </li>
            <li>
              <strong style="color: #d97706;">2. Rối loạn thị giác màu vàng / xanh lá (Xanthopsia) &amp; Vầng hào quang sáng:</strong>
              <br>&bull; <em>Đặc điểm độc nhất:</em> Ức chế Na⁺/K⁺-ATPase ở tế bào nón/que của võng mạc gây triệu chứng thị giác đặc trưng: nhìn mọi vật chuyển sang màu vàng hoặc xanh lá cây, nhìn thấy quầng sáng xung quanh ngọn đèn. Đây là dấu hiệu thần kinh giác quan kinh điển của ngộ độc Digitalis.
            </li>
            <li>
              <strong style="color: #2563eb;">3. Đối lập chuyển hóa kinh điển: Digoxin (Thận, Ưa nước) vs Digitoxin (Gan, Ưa mỡ):</strong>
              <br>&bull; <em>Digoxin:</em> Hấp thu 60-80%, gắn protein thấp (20-25%), <strong>thải trừ qua thận dạng nguyên vẹn (80%)</strong>, bán thải 36-40 giờ → Bắt buộc giảm liều khi bệnh nhân có suy giảm chức năng thận.
              <br>&bull; <em>Digitoxin:</em> Hấp thu 90-100%, gắn protein cực cao (90-97%), <strong>chuyển hóa qua gan (90%) và có chu kỳ gan - ruột</strong>, bán thải cực dài 5-7 ngày → Không cần chỉnh liều khi suy thận nhưng tích lũy rất lâu, ngộ độc kéo dài khó xử trí.
            </li>
            <li>
              <strong style="color: #7c3aed;">4. Tương tác đẩy protein và giảm thanh thải của Quinidin, Amiodaron, Verapamil:</strong>
              <br>&bull; Quinidin, Amiodaron và Verapamil đẩy Digoxin ra khỏi vị trí gắn ở cơ vân và ức chế protein vận chuyển P-glycoprotein ở ống thận → <strong>làm nồng độ Digoxin trong huyết tương tăng vọt gấp đôi</strong> → Bắt buộc giảm 50% liều Digoxin khi phối hợp.
            </li>
            <li>
              <strong style="color: #059669;">5. Thuốc giải độc đặc hiệu kháng thể kháng Digoxin (Digoxin Immune Fab / Digibind):</strong>
              <br>&bull; Các đoạn kháng thể Fab liên kết chọn lọc cực mạnh với Digoxin tự do trong lòng mạch, kéo Digoxin ra khỏi mô cơ tim và đào thải qua thận.
              <br>&bull; <em>Lưu ý sinh tử:</em> Chống chỉ định sốc điện khử rung tim khi đang nghi ngờ ngộ độc Digoxin vì dễ khởi phát rung thất trơ kháng trị tử vong!
            </li>
            <li>
              <strong style="color: #b45309;">6. Nhóm ức chế Phosphodiesterase-3 (Milrinon, Inamrinon) — Vừa bóp vừa giãn (Inodilator):</strong>
              <br>&bull; Làm tăng cAMP nội bào ở cơ tim (tăng co bóp) và ở cơ trơn mạch máu (giãn mạch). Chỉ dùng cấp cứu ngắn hạn trong suy tim cấp nặng mất bù; CẤM dùng dài ngày vì làm tăng tỷ lệ tử vong do loạn nhịp tim.
            </li>
          </ul>
        </div>

        <div class="exam-trap-box">
          <div class="exam-trap-title">🛑 Bẫy thi trắc nghiệm Bài 1:</div>
          &bull; <strong>Bẫy ion K⁺:</strong> K⁺ cạnh tranh với Digoxin tại vị trí gắn enzym Na⁺/K⁺-ATPase. Do đó khi <em>hạ Kali máu</em>, Digoxin gắn vào enzym nhiều hơn → <strong>làm tăng độc tính của Digoxin</strong> dù nồng độ thuốc trong máu ở mức bình thường!
          <br>&bull; <strong>Bẫy Quinidin:</strong> Dùng chung Quinidin làm nồng độ Digoxin trong máu tăng gấp 2 lần vì Quinidin đẩy Digoxin khỏi vị trí gắn ở cơ và giảm bài tiết qua thận.
        </div>
        <div style="margin-top: 0.75rem;">
          <button class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.35rem 0.75rem;" onclick="jumpToDl2Topic('Thuốc trợ tim')">
            🎯 Luyện đề trắc nghiệm Bài 1: Thuốc Trợ Tim
          </button>
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
        <div class="chapter-sec-heading">🎯 1. Phân Loại Cơn Đau Thắt Ngực:</div>
        <ul class="chapter-point-list">
          <li><strong>Đau thắt ngực ổn định (Cơn đau khi gắng sức):</strong> Do mảng xơ vữa làm hẹp cố định lòng động mạch vành. Khi gắng sức nhu cầu oxy tăng gây thiếu máu cơ tim.</li>
          <li><strong>Đau thắt ngực không ổn định (Hội chứng vành cấp):</strong> Do mảng xơ vữa nứt vỡ hình thành huyết khối bán phần, đau cả khi nghỉ.</li>
          <li><strong>Đau thắt ngực biến thái (Prinzmetal / Vasospastic):</strong> Do co thắt động mạch vành đột ngột không liên quan gắng sức, thường xảy ra lúc nửa đêm hoặc sáng sớm.</li>
        </ul>

        <div class="chapter-sec-heading">💊 2. Nhóm Nitrat Hữu Cơ:</div>
        <ul class="chapter-point-list">
          <li><strong>Các thuốc:</strong> Nitroglycerin (Glycerol trinitrat), Isosorbid dinitrat (ISDN), Isosorbid mononitrat (ISMN).</li>
          <li><strong>Cơ chế tác dụng:</strong> Trong tế bào cơ trơn mạch máu, nitrat hữu cơ được khử để giải phóng <strong>Nitric Oxide (NO)</strong> → hoạt hóa Guanylyl cyclase → tăng tổng hợp <strong>cGMP</strong> → khử phosphoryl hóa chuỗi nhẹ myosin → <strong>giãn cơ trơn mạch máu</strong>.</li>
          <li><strong>Tác dụng huyết động:</strong> Giãn tĩnh mạch mạnh hơn động mạch → <strong>giảm lượng máu tĩnh mạch trở về tim (giảm tiền gánh)</strong> → giảm áp lực đổ đầy thất trái → giảm sức căng thành tâm thất và giảm mạnh nhu cầu oxy cơ tim. Ở liều cao giãn cả động mạch vành.</li>
          <li><strong>Đường dùng:</strong>
            <br>&bull; <em>Cắt cơn đau thắt ngực cấp:</em> Dùng dạng <strong>ngậm dưới lưỡi</strong> hoặc xịt niêm mạc miệng của Nitroglycerin (tác dụng sau 1 &minus; 3 phút, tránh được chuyển hóa qua gan lần đầu).
            <br>&bull; <em>Dự phòng cơn đau:</em> Dùng đường uống (ISMN, ISDN dạng phóng thích kéo dài) hoặc dán qua da (Nitroglycerin patch).
          </li>
          <li><strong>Tác dụng phụ:</strong> Nhức đầu dữ dội (do giãn mạch màng não), tụt huyết áp tư thế đứng, nhịp tim nhanh phản xạ, đỏ bừng mặt cổ.</li>
          <li><strong>Hiện tượng dung nạp (Quen thuốc / Tolerance):</strong> Khi dùng nitrat liên tục cả ngày lẫn đêm, các nhóm thiol (-SH) bị cạn kiệt → thuốc mất hoàn toàn tác dụng giãn mạch. Khắc phục: <strong>Tạo khoảng trống không có nitrate (Nitrate-free interval)</strong> từ 8 &minus; 12 giờ mỗi ngày (thường gỡ miếng dán vào ban đêm lúc bệnh nhân nghỉ ngơi).</li>
          <li><strong>Chống chỉ định tuyệt đối:</strong> <strong>Dùng chung với thuốc ức chế PDE-5 (Sildenafil, Tadalafil, Vardenafil)</strong> trong vòng 24 &minus; 48 giờ → gây tụt huyết áp kịch phát, sốc và tử vong; bệnh cơ tim phì đại tắc nghẽn, hẹp van động mạch chủ nặng, tăng áp lực nội sọ.</li>
        </ul>

        <div class="chapter-sec-heading">🛡️ 3. Các Thuốc Khác:</div>
        <ul class="chapter-point-list">
          <li><strong>Thuốc chẹn Beta:</strong> Thuốc nền tảng hàng đầu dự phòng đau thắt ngực ổn định. Giảm nhịp và giảm co bóp → giảm tiêu thụ oxy. <em>Chống chỉ định trong đau thắt ngực Prinzmetal</em> (vì chẹn β₂ làm lộ thụ thể α₁ gây co thắt vành nặng hơn).</li>
          <li><strong>Thuốc chẹn kênh Calci (CCB):</strong> Giãn động mạch vành, là lựa chọn ưu tiên hàng đầu trong đau thắt ngực biến thái Prinzmetal.</li>
          <li><strong>Ivabradin:</strong> Ức chế chọn lọc kênh I<sub>f</sub> ở nút xoang → giảm nhịp tim đơn thuần, không ảnh hưởng huyết áp và sức co bóp cơ tim.</li>
        </ul>

                <!-- BẢNG VÀNG: CÁC ĐIỂM CHÚ Ý ĐẶC BIỆT ĐỘC NHẤT VÔ NHỊ -->
        <div class="chapter-sec-heading" style="color: #dc2626;">🔥 3. Những Điểm Chú Ý Đặc Biệt &amp; Độc Nhất Vô Nhị (Chỉ Có Ở Thuốc Chữa Đau Thắt Ngực - Trọng Tâm Đề Thi):</div>
        <div style="background: var(--surface-alt); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1.25rem; font-size: 0.88rem; line-height: 1.6;">
          <ul class="chapter-point-list" style="display: flex; flex-direction: column; gap: 0.75rem;">
            <li>
              <strong style="color: #dc2626;">1. Hiện tượng dung nạp Nitrat (Tolerance / "Bệnh Thứ Hai" - Monday Disease):</strong>
              <br>&bull; <em>Cơ chế:</em> Dùng nitrat hữu cơ liên tục 24/24h làm cạn kiệt các nhóm sulfhydryl (-SH) tự do nội bào cần thiết để chuyển hóa tạo NO → thuốc mất hoàn toàn tác dụng giãn mạch.
              <br>&bull; <em>Biện pháp bắt buộc:</em> Phải tạo ra <strong>"khoảng trống không có Nitrat" (Nitrate-free interval) kéo dài 8 - 12 giờ mỗi ngày</strong> (thường tháo miếng dán vào ban đêm) để cơ thể tự tái tổng hợp nhóm -SH.
            </li>
            <li>
              <strong style="color: #b45309;">2. Tương tác chết người giữa Nitrat hữu cơ và Thuốc ức chế PDE-5 (Sildenafil, Tadalafil):</strong>
              <br>&bull; Nitrat làm tăng tổng hợp cGMP, còn Sildenafil ức chế thoái giáng cGMP → <strong>bùng nổ cGMP gây giãn mạch toàn thân dữ dội</strong>, tụt huyết áp kịch phát, trụy tim mạch tử vong!
              <br>&bull; <em>Khoảng cách an toàn bắt buộc:</em> Cấm dùng Nitrat trong vòng ít nhất 24 giờ sau Sildenafil và ít nhất 48 giờ sau Tadalafil.
            </li>
            <li>
              <strong style="color: #2563eb;">3. Cơ chế chính chống đau thắt ngực của Nitroglycerin là Giảm Tiền Gánh (Không phải giãn vành):</strong>
              <br>&bull; Ở liều điều trị, Nitroglycerin tác dụng ưu thế tuyệt đối trên hệ tĩnh mạch lớn ngoại vi → ứ máu ở ngoại vi, làm giảm lượng máu dồn về tim (giảm tiền gánh) → giảm thể tích thất trái và giảm sức căng thành tim → giảm mạnh nhu cầu tiêu thụ oxy cơ tim.
            </li>
            <li>
              <strong style="color: #7c3aed;">4. Hiện tượng "Cướp máu mạch vành" (Coronary Steal Syndrome):</strong>
              <br>&bull; Khi dùng các thuốc giãn tiểu động mạch vành mạnh và ngắn (Dipyridamol hoặc Dihydropyridine tác dụng nhanh), thuốc chỉ làm giãn được các nhánh mạch lành (vốn còn co giãn tốt), trong khi nhánh mạch nuôi vùng thiếu máu đã giãn tối đa do thiếu oxy. Máu sẽ bị kéo về vùng lành, làm vùng thiếu máu cơ tim càng bị thiếu máu trầm trọng hơn!
            </li>
            <li>
              <strong style="color: #059669;">5. Ivabradine — Thuốc ức chế dòng If tại nút xoang hạ nhịp tim thuần túy:</strong>
              <br>&bull; Ức chế đặc hiệu dòng kênh If phụ thuộc điện thế tại nút xoang, làm chậm nhịp tim mà <strong>hoàn toàn không làm giảm sức co bóp cơ tim và không ảnh hưởng huyết áp</strong>. Tác dụng phụ độc nhất: hiện tượng chói sáng mắt (Phosphenes) do ức chế kênh h tương tự ở võng mạc.
            </li>
            <li>
              <strong style="color: #e11d48;">6. Chống chỉ định Chẹn Beta đơn độc trong Đau thắt ngực thể co thắt (Prinzmetal):</strong>
              <br>&bull; Trong cơn đau co thắt vành Prinzmetal, dùng chẹn beta đơn độc sẽ chẹn thụ thể β₂ (gây giãn mạch), để hở thụ thể α₁ không bị đối kháng → gây co thắt động mạch vành dữ dội hơn! Lựa chọn hàng đầu là thuốc chẹn kênh calci (CCB) hoặc Nitrat.
            </li>
          </ul>
        </div>

        <div class="exam-trap-box">
          <div class="exam-trap-title">🛑 Bẫy thi trắc nghiệm Bài 3:</div>
          &bull; <strong>Bẫy cơ chế giảm đau thắt ngực của Nitroglycerin:</strong> Tác dụng chống đau ngực chủ yếu là nhờ <strong>GIẢM TIỀN GÁNH</strong> (giãn tĩnh mạch làm giảm đổ đầy tim), chứ không phải do giãn động mạch vành!
          <br>&bull; <strong>Bẫy tương tác Viagra (Sildenafil) + Nitrat:</strong> Cả hai đều làm tăng nồng độ cGMP → hiệp đồng giãn mạch cực độ gây trụy mạch chết người.
        </div>
        <div style="margin-top: 0.75rem;">
          <button class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.35rem 0.75rem;" onclick="jumpToDl2Topic('Thuốc chữa CĐTN')">
            🎯 Luyện đề trắc nghiệm Bài 3: Thuốc Chữa Cơn Đau Thắt Ngực
          </button>
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
        <div class="chapter-sec-heading">🎯 1. Phân Loại Vaughan Williams (4 Nhóm Chính):</div>
        <div class="cs-table-wrap">
          <table class="cs-table">
            <thead>
              <tr><th>Nhóm</th><th>Cơ Chế Phân Tử</th><th>Các Hoạt Chất</th><th>Đặc Điểm &amp; Chỉ Định Chính</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Nhóm Ia</strong></td>
                <td>Chẹn kênh Na⁺ mức vừa, kéo dài thời gian điện thế hoạt động (APD) và khoảng QT</td>
                <td><strong>Quinidin</strong>, Procainamid, Disopyramid</td>
                <td>Quinidin gây hội chứng Cinchonism (ù tai, chóng mặt, điếc), xoắn đỉnh (Torsades de pointes), đẩy Digoxin ra khỏi mô.</td>
              </tr>
              <tr>
                <td><strong>Nhóm Ib</strong></td>
                <td>Chẹn kênh Na⁺ nhẹ, rút ngắn thời gian APD</td>
                <td><strong>Lidocain</strong>, Mexiletin, Phenytoin</td>
                <td>Đặc trị loạn nhịp thất sau nhồi máu cơ tim cấp hoặc do ngộ độc Digoxin. Chỉ dùng đường tĩnh mạch (Lidocain). Không hiệu quả trên nhĩ.</td>
              </tr>
              <tr>
                <td><strong>Nhóm Ic</strong></td>
                <td>Chẹn kênh Na⁺ rất mạnh, làm chậm dẫn truyền mạnh, ít đổi APD</td>
                <td><strong>Flecainid</strong>, Propafenon</td>
                <td>Chống chỉ định tuyệt đối cho bệnh nhân có bệnh tim thực thể hoặc sau nhồi máu cơ tim (tăng tỷ lệ tử vong - thử nghiệm CAST).</td>
              </tr>
              <tr>
                <td><strong>Nhóm II</strong></td>
                <td>Chẹn thụ thể β-adrenergic</td>
                <td>Metoprolol, Esmolol, Propranolol</td>
                <td>Giảm tự động tính nút xoang, giảm dẫn truyền nút AV. Trị loạn nhịp nhanh trên thất, kiểm soát tần số thất trong rung nhĩ.</td>
              </tr>
              <tr>
                <td><strong>Nhóm III</strong></td>
                <td>Chẹn kênh K⁺, kéo dài thời gian tái cực, kéo dài APD và khoảng QT</td>
                <td><strong>Amiodaron</strong>, Sotalol, Dronedaron</td>
                <td>Amiodaron là thuốc chống loạn nhịp phổ rộng nhất (cả trên thất và thất).</td>
              </tr>
              <tr>
                <td><strong>Nhóm IV</strong></td>
                <td>Chẹn kênh Calci Non-DHP ở nút tim</td>
                <td><strong>Verapamil, Diltiazem</strong></td>
                <td>Ức chế nút xoang và nút AV. Trị nhịp nhanh trên thất, cuồng động nhĩ, rung nhĩ.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="chapter-sec-heading">🔬 2. Hồ Sơ Độc Tính Cực Kỳ Quan Trọng Của Amiodaron:</div>
        <ul class="chapter-point-list">
          <li><strong>Cấu trúc:</strong> Chứa tới 37% Iod theo trọng lượng và có cấu trúc tương tự hormone giáp Thyroxin (T₄).</li>
          <li><strong>Thời gian bán thải:</strong> Rất dài, từ <strong>40 &minus; 60 ngày</strong> (tích lũy sâu trong mô mỡ, gan, phổi).</li>
          <li><strong>Các tác dụng phụ điển hình hay thi:</strong>
            <br>&bull; <em>Độc tính trên phổi:</em> <strong>Xơ hóa phổi kẽ (Pulmonary Fibrosis)</strong> &minus; tác dụng phụ nguy hiểm nhất, có thể gây tử vong.
            <br>&bull; <em>Rối loạn tuyến giáp:</em> Gây cả <strong>suy giáp</strong> (phổ biến hơn do hiệu ứng Wolff-Chaikoff) hoặc <strong>cường giáp</strong> (hiệu ứng Jod-Basedow).
            <br>&bull; <em>Mắt:</em> Lắng đọng vi thể ở giác mạc (Corneal microdeposits &minus; gặp ở hầu hết bệnh nhân, vô hại).
            <br>&bull; <em>Da:</em> Nhạy cảm ánh sáng, lắng đọng làm da đổi màu xám xanh (Blue-gray skin discoloration).
            <br>&bull; <em>Gan:</em> Tăng men gan, viêm gan.
          </li>
        </ul>

        <div class="chapter-sec-heading">⚡ 3. Các Thuốc Chống Loạn Nhịp Đặc Biệt Khác:</div>
        <ul class="chapter-point-list">
          <li><strong>Adenosin:</strong> Kích thích thụ thể A₁, mở kênh K⁺, làm chậm dẫn truyền nút AV tức thì. Thời gian bán thải cực ngắn (< 10 giây). Thuốc số 1 cắt cơn <strong>nhịp nhanh kịch phát trên thất (PSVT)</strong> bằng tiêm bolus tĩnh mạch nhanh.</li>
          <li><strong>Magnesi sulfat (MgSO₄ IV):</strong> Thuốc cấp cứu lựa chọn hàng đầu đặc trị cơn <strong>xoắn đỉnh (Torsades de pointes)</strong>.</li>
          <li><strong>Atropin:</strong> Thuốc kháng phó giao cảm dùng cấp cứu nhịp tim chậm xoang có triệu chứng hoặc block AV.</li>
        </ul>

                <!-- BẢNG VÀNG: CÁC ĐIỂM CHÚ Ý ĐẶC BIỆT ĐỘC NHẤT VÔ NHỊ -->
        <div class="chapter-sec-heading" style="color: #dc2626;">🔥 3. Những Điểm Chú Ý Đặc Biệt &amp; Độc Nhất Vô Nhị (Chỉ Có Ở Thuốc Chống Loạn Nhịp - Trọng Tâm Đề Thi):</div>
        <div style="background: var(--surface-alt); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1.25rem; font-size: 0.88rem; line-height: 1.6;">
          <ul class="chapter-point-list" style="display: flex; flex-direction: column; gap: 0.75rem;">
            <li>
              <strong style="color: #2563eb;">1. Hội chứng Da Xanh Xám (Blue-Grey Skin) &amp; Lắng đọng giác mạc của Amiodaron:</strong>
              <br>&bull; Amiodaron tích lũy kéo dài ở mô mỡ và da. Khi tiếp xúc với ánh sáng mặt trời, thuốc gây lắng đọng hạt sắc tố lipofuscin khiến da bệnh nhân đổi thành màu xanh xám (Smurf syndrome). Lắng đọng giác mạc hình xoáy (Corneal microdeposits) gặp ở hầu hết bệnh nhân nhưng không ảnh hưởng thị lực.
            </li>
            <li>
              <strong style="color: #dc2626;">2. Xơ phổi mô kẽ tiến triển (Pulmonary Fibrosis) — Độc tính chết người của Amiodaron:</strong>
              <br>&bull; Gặp ở 1-10% bệnh nhân dùng kéo dài, gây ho khan, khó thở tăng dần, thâm nhiễm phổi mô kẽ có thể tử vong. Bắt buộc chụp X-quang phổi định kỳ hàng năm và kiểm tra chức năng hô hấp.
            </li>
            <li>
              <strong style="color: #d97706;">3. Rối loạn tuyến giáp 2 chiều do cấu trúc chứa 37% Iod của Amiodaron:</strong>
              <br>&bull; <em>Suy giáp:</em> Do lượng iod quá lớn ức chế tổng hợp hormon giáp (Hiệu ứng Wolff-Chaikoff).
              <br>&bull; <em>Cường giáp:</em> Do iod kích thích tuyến giáp tổng hợp hormon bùng phát (Hiệu ứng Jod-Basedow). Bắt buộc xét nghiệm TSH và FT4 định kỳ trước và trong suốt quá trình điều trị.
            </li>
            <li>
              <strong style="color: #7c3aed;">4. Bẫy Xoắn Đỉnh (Torsades de Pointes) do Kéo Dài Khoảng QT:</strong>
              <br>&bull; Nhóm IA (Quinidin, Procainamid, Disopyramid) và Nhóm III (Sotalol, Dofetilide) làm chậm tái cực thất, kéo dài đoạn QT trên ECG → nguy cơ khởi phát cơn nhịp nhanh thất xoắn đỉnh gây đột tử, nhất là khi kèm hạ K⁺ và hạ Mg²⁺ máu. Xử trí cấp cứu bằng tiêm tĩnh mạch <strong>Magnesi sulfat (MgSO₄)</strong>.
            </li>
            <li>
              <strong style="color: #be123c;">5. Hội chứng Giả Lupus Ban Đỏ (Drug-induced SLE) do Procainamid:</strong>
              <br>&bull; Gặp ở 20-30% bệnh nhân dùng dài ngày, đặc biệt ở người có kiểu gen acetyl hóa chậm. Bệnh nhân sốt, đau khớp, viêm đa màng, xuất hiện kháng thể kháng nhân (ANA) và kháng Histone dương tính; hồi phục khi dừng thuốc.
            </li>
            <li>
              <strong style="color: #059669;">6. Kỹ thuật tiêm tĩnh mạch Adenosin cấp cứu nhịp nhanh kịch phát trên thất (PSVT):</strong>
              <br>&bull; Bán thải trong máu cực ngắn (< 10 giây). Bắt buộc phải <strong>tiêm tĩnh mạch bolus cực nhanh trong 1 - 2 giây</strong> qua đường truyền gần tim (tĩnh mạch cẳng tay/cảnh), sau đó bơm xả ngay 20mL dung dịch NaCl 0.9% để đẩy thuốc vào tim kịp thời gian bán hủy.
            </li>
          </ul>
        </div>

        <div class="exam-trap-box">
          <div class="exam-trap-title">🛑 Bẫy thi trắc nghiệm Bài 4:</div>
          &bull; <strong>Amiodaron kéo dài QT nhưng hiếm gây xoắn đỉnh:</strong> Dù làm kéo dài khoảng QT mạnh nhưng Amiodaron chẹn cả dòng canxi và natri đồng đều nên nguy cơ gây xoắn đỉnh thấp hơn nhiều so với Sotalol hoặc Quinidin.
          <br>&bull; <strong>Lidocain không dùng đường uống:</strong> Do bị chuyển hóa qua gan lần đầu gần 100% (sinh khả dụng đường uống gần bằng 0) nên bắt buộc tiêm tĩnh mạch.
        </div>
        <div style="margin-top: 0.75rem;">
          <button class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.35rem 0.75rem;" onclick="jumpToDl2Topic('Thuốc chống loạn nhịp')">
            🎯 Luyện đề trắc nghiệm Bài 4: Thuốc Chống Loạn Nhịp
          </button>
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
        <div class="chapter-sec-heading">🎯 1. Phân Loại 5 Nhóm Lợi Niệu Theo Vị Trí Tác Dụng:</div>
        <div class="cs-table-wrap">
          <table class="cs-table">
            <thead>
              <tr><th>Nhóm Thuốc</th><th>Vị Trí Vận Hành</th><th>Cơ Chế Tác Dụng Phân Tử</th><th>Hiệu Lực &amp; Đại Diện</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Lợi niệu quai</strong></td>
                <td>Đoạn dày nhánh lên quai Henle</td>
                <td>Ức chế đồng vận chuyển <strong>Na⁺/K⁺/2Cl⁻</strong></td>
                <td><strong>Furosemid</strong>, Bumetanid, Acid ethacrynic. Lực lợi niệu mạnh nhất ("lợi niệu trần cao").</td>
              </tr>
              <tr>
                <td><strong>Lợi niệu Thiazid</strong></td>
                <td>Đầu ống lượn xa</td>
                <td>Ức chế đồng vận chuyển <strong>Na⁺/Cl⁻</strong></td>
                <td><strong>Hydrochlorothiazid (HCTZ)</strong>, Indapamid, Chlorthalidon. Lực trung bình.</td>
              </tr>
              <tr>
                <td><strong>Kháng Aldosteron</strong></td>
                <td>Đoạn cuối ống lượn xa &amp; ống góp</td>
                <td>Đối kháng cạnh tranh thụ thể Mineralocorticoid của Aldosteron</td>
                <td><strong>Spironolacton</strong>, Eplerenon. Giữ K⁺, thải Na⁺.</td>
              </tr>
              <tr>
                <td><strong>Chẹn kênh ENaC</strong></td>
                <td>Ống góp</td>
                <td>Chẹn trực tiếp kênh Natri biểu mô (ENaC)</td>
                <td><strong>Amilorid</strong>, Triamteren. Giữ K⁺.</td>
              </tr>
              <tr>
                <td><strong>Lợi niệu thẩm thấu</strong></td>
                <td>Ống lượn gần &amp; quai Henle</td>
                <td>Tăng áp lực thẩm thấu dịch lọc lòng ống kéo nước</td>
                <td><strong>Mannitol</strong> (truyền tĩnh mạch).</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="chapter-sec-heading">⚖️ 2. So Sánh Độc Tính &amp; Rối Loạn Điện Giải Cực Kỳ Hay Thi:</div>
        <ul class="chapter-point-list">
          <li><strong>Điểm giống nhau giữa Quai và Thiazid:</strong> Đều gây <em>hạ K⁺ máu</em>, hạ Na⁺ máu, tăng Acid uric máu (dễ khởi phát cơn Gout cấp), tăng đường huyết.</li>
          <li><strong>ĐIỂM KHÁC NHAU SỐNG CÒN TRÊN CANXI:</strong>
            <br>&bull; <strong>Lợi niệu quai (Furosemid):</strong> Gây <strong>HẠ Ca²⁺ MÁU</strong> (tăng đào thải canxi qua nước tiểu) → dùng trong điều trị tăng canxi máu cấp tính.
            <br>&bull; <strong>Lợi niệu Thiazid:</strong> Gây <strong>TĂNG Ca²⁺ MÁU</strong> (kích thích tái hấp thu canxi ở ống lượn xa) → có lợi trong phòng ngừa và điều trị loãng xương ở người cao tuổi, giảm tạo sỏi thận canxi.
          </li>
          <li><strong>Độc tính trên thính giác (Điếc tai):</strong> Furosemid và Acid ethacrynic có độc tính trên tai (đặc biệt khi tiêm tĩnh mạch liều cao hoặc dùng phối hợp với kháng sinh Aminoglycosid).</li>
          <li><strong>Spironolacton:</strong> Ngoài giữ kali gây nguy cơ tăng K⁺ máu, thuốc còn chẹn thụ thể androgen → gây tác dụng phụ <strong>chứng vú to ở nam giới (Gynecomastia)</strong>, bất lực, rối loạn kinh nguyệt. Eplerenon chọn lọc hơn nên không gây vú to.</li>
          <li><strong>Mannitol:</strong> Dùng điều trị phù não, giảm áp lực nội sọ cấp cứu và hạ nhãn áp trong cơn Glôcôm cấp. Chống chỉ định trong phù phổi cấp và suy tim ứ huyết (do kéo nước vào lòng mạch làm quá tải tuần hoàn).</li>
        </ul>

                <!-- BẢNG VÀNG: CÁC ĐIỂM CHÚ Ý ĐẶC BIỆT ĐỘC NHẤT VÔ NHỊ -->
        <div class="chapter-sec-heading" style="color: #dc2626;">🔥 3. Những Điểm Chú Ý Đặc Biệt &amp; Độc Nhất Vô Nhị (Chỉ Có Ở Thuốc Lợi Niệu - Trọng Tâm Đề Thi):</div>
        <div style="background: var(--surface-alt); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1.25rem; font-size: 0.88rem; line-height: 1.6;">
          <ul class="chapter-point-list" style="display: flex; flex-direction: column; gap: 0.75rem;">
            <li>
              <strong style="color: #059669;">1. Sự đối nghịch ion Calci: Thiazid TĂNG Ca²⁺ vs Quai HẠ Ca²⁺:</strong>
              <br>&bull; <em>Thiazid (HCTZ, Indapamid):</em> Tăng tái hấp thu Ca²⁺ ở ống lượn xa → <strong>làm tăng calci máu</strong> → Lợi tiểu ưu tiên hàng đầu cho người cao tuổi THA kèm loãng xương hoặc sỏi thận calci niệu.
              <br>&bull; <em>Lợi tiểu quai (Furosemid):</em> Ức chế đồng vận chuyển Na⁺/K⁺/2Cl⁻ ở nhánh lên quai Henle làm mất điện thế dương trong lòng ống, ức chế tái hấp thu Ca²⁺ và Mg²⁺ → <strong>thải trừ mạnh Ca²⁺</strong> → Chuyên dùng cấp cứu tăng calci máu ác tính.
            </li>
            <li>
              <strong style="color: #b45309;">2. Ranh giới hiệu lực suy thận GFR &lt; 30 mL/phút:</strong>
              <br>&bull; Nhóm Thiazid <strong>mất hoàn toàn hiệu lực</strong> khi độ lọc cầu thận GFR &lt; 30 mL/phút; lúc này bắt buộc phải dùng <strong>Lợi tiểu quai (Furosemid)</strong> liều cao vì thuốc vẫn duy trì được hiệu quả tống muối nước ngay cả khi suy thận nặng.
            </li>
            <li>
              <strong style="color: #dc2626;">3. Độc tính trên thính giác (Ototoxicity) không hồi phục của Furosemid:</strong>
              <br>&bull; Furosemid phá hủy dải mạch vân (Stria vascularis) ở ốc tai gây ù tai và điếc vĩnh viễn; Nguy cơ tăng vọt khi tiêm tĩnh mạch nhanh liều cao hoặc phối hợp với kháng sinh Aminoglycosid (Gentamicin). Bắt buộc tốc độ truyền tĩnh mạch không quá 4 mg/phút.
            </li>
            <li>
              <strong style="color: #7c3aed;">4. Tác dụng phụ kháng Androgen của Spironolacton:</strong>
              <br>&bull; Spironolacton có cấu trúc steroid tương tự nội tiết tố sinh dục, gắn cạnh tranh trên thụ thể Androgen và Progesterone → gây <strong>chứng vú to ở nam giới (Gynecomastia), bất lực và rối loạn kinh nguyệt</strong>. Dẫn chất Eplerenone chọn lọc cao trên thụ thể mineralocorticoid không gây tác dụng phụ này.
            </li>
            <li>
              <strong style="color: #2563eb;">5. Nhiễm toan chuyển hóa tăng Clo máu do Acetazolamid:</strong>
              <br>&bull; Ức chế enzym Carbonic Anhydrase (CA) ở ống lượn gần làm mất ion HCO₃⁻ vào nước tiểu → nước tiểu kiềm nhưng máu bị nhiễm toan chuyển hóa. Ứng dụng điều trị hạ nhãn áp Glaucoma góc mở và chống say độ cao cấp (Acute Mountain Sickness).
            </li>
            <li>
              <strong style="color: #be123c;">6. Nguy cơ phù phổi cấp khi dùng Lợi tiểu thẩm thấu Mannitol:</strong>
              <br>&bull; Mannitol kéo nước ồ ạt từ mô kẽ vào lòng mạch làm tăng vọt thể tích tuần hoàn cấp tính trước khi kịp bài niệu qua thận → CẤM TUYỆT ĐỐI dùng cho bệnh nhân suy tim ứ huyết nặng hoặc phù phổi cấp vì làm bệnh bùng phát dữ dội.
            </li>
          </ul>
        </div>

        <div class="exam-trap-box">
          <div class="exam-trap-title">🛑 Bẫy thi trắc nghiệm Bài 5:</div>
          &bull; <strong>Bẫy mức lọc cầu thận (GFR):</strong> Khi suy thận nặng với mức lọc cầu thận GFR < 30 mL/phút, lợi niệu Thiazid hoàn toàn <strong>mất tác dụng</strong> → bắt buộc phải chuyển sang dùng <strong>Lợi niệu quai (Furosemid)</strong>!
        </div>
        <div style="margin-top: 0.75rem;">
          <button class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.35rem 0.75rem;" onclick="jumpToDl2Topic('Thuốc lợi niệu')">
            🎯 Luyện đề trắc nghiệm Bài 5: Thuốc Lợi Niệu
          </button>
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
        <div class="chapter-sec-heading">🎯 1. Phân Nhóm Thuốc Dạ Dày:</div>
        <ul class="chapter-point-list">
          <li><strong>Thuốc ức chế bơm Proton (PPI - đuôi "-prazole"):</strong> Omeprazole, Esomeprazole, Lansoprazole, Pantoprazole, Rabeprazole.
            <br>&bull; <em>Cơ chế:</em> Tiền dược không hoạt tính → hấp thu qua ruột non vào máu đến tế bào viền dạ dày → khuếch tán vào vi quản tiết acid → môi trường acid mạnh chuyển thành dẫn chất Sulfenamid có hoạt tính → tạo liên kết disulfide bất thuận nghịch với enzym <strong>H⁺/K⁺-ATPase</strong> → ức chế bài tiết acid dịch vị ở khâu cuối cùng.
            <br>&bull; <em>Cách dùng chuẩn:</em> Uống <strong>trước bữa ăn sáng 30 &minus; 60 phút</strong> (để nồng độ thuốc đạt đỉnh đúng lúc bơm proton hoạt động tối đa khi thức ăn vào). Nuốt nguyên viên, không nhai hoặc nghiền nát vì viên bao tan trong ruột.
            <br>&bull; <em>ADR khi dùng kéo dài:</em> Giảm hấp thu Calci (loãng xương, gãy xương), giảm hấp thu Vitamin B12, giảm Magnesi máu, tăng nguy cơ nhiễm khuẩn đường ruột (<em>Clostridium difficile</em>) và viêm phổi mắc phải cộng đồng.
          </li>
          <li><strong>Thuốc kháng thụ thể H₂ (đuôi "-tidin"):</strong> Cimetidin, Ranitidin, Famotidin. Cạnh tranh với Histamin tại thụ thể H₂ trên tế bào viền. Ức chế acid yếu hơn PPI, đặc biệt hiệu quả trên tiết acid nền ban đêm. Cimetidin ức chế mạnh CYP450 và kháng androgen (gây chứng vú to ở nam).</li>
          <li><strong>Thuốc kháng acid (Antacids):</strong>
            <br>&bull; <em>Nhôm hydroxyd Al(OH)₃:</em> Tác dụng chậm, kéo dài. ADR: <strong>Gây táo bón</strong>, gắn phosphat ở ruột gây giảm phosphat máu.
            <br>&bull; <em>Magie hydroxyd Mg(OH)₂:</em> Tác dụng nhanh. ADR: <strong>Gây tiêu chảy</strong> do thẩm thấu.
            <br>&bull; <em>Phối hợp Al + Mg (Maalox):</em> Trung hòa tác dụng phụ táo bón và tiêu chảy của nhau. Uống sau bữa ăn 1 &minus; 2 giờ và trước khi đi ngủ.
          </li>
          <li><strong>Thuốc bảo vệ niêm mạc:</strong>
            <br>&bull; <em>Sucralfat:</em> Muối nhôm sulfat của sucrose. Trong môi trường acid tạo phức hợp polymer nhầy dính bao phủ ổ loét. Cần môi trường acid để hoạt hóa → không uống cùng antacid hoặc PPI.
            <br>&bull; <em>Bismuth subsalicylate:</em> Tạo lớp che phủ đáy ổ loét, ức chế vi khuẩn <em>H. pylori</em>. ADR: Làm <strong>phân có màu đen và đen lưỡi</strong> (vô hại).
            <br>&bull; <em>Misoprostol:</em> Đồng đẳng tổng hợp của Prostaglandin PGE₁. Kích thích tiết chất nhầy và bicarbonat. Ngừa loét do NSAID. <strong>Chống chỉ định cho phụ nữ mang thai</strong> (gây co bóp tử cung, sảy thai).
          </li>
          <li><strong>Phác đồ diệt vi khuẩn HP (Helicobacter pylori):</strong> Phác đồ chuẩn 4 thuốc có Bismuth dùng 14 ngày: <strong>PPI + Bismuth + Metronidazol + Tetracyclin</strong>.</li>
        </ul>

                <!-- BẢNG VÀNG: CÁC ĐIỂM CHÚ Ý ĐẶC BIỆT ĐỘC NHẤT VÔ NHỊ -->
        <div class="chapter-sec-heading" style="color: #dc2626;">🔥 3. Những Điểm Chú Ý Đặc Biệt &amp; Độc Nhất Vô Nhị (Chỉ Có Ở Thuốc Điều Trị DDTT - Trọng Tâm Đề Thi):</div>
        <div style="background: var(--surface-alt); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1.25rem; font-size: 0.88rem; line-height: 1.6;">
          <ul class="chapter-point-list" style="display: flex; flex-direction: column; gap: 0.75rem;">
            <li>
              <strong style="color: #2563eb;">1. Quy tắc thời điểm vàng uống PPI: Trước bữa ăn sáng 30 - 60 phút:</strong>
              <br>&bull; <em>Cơ chế:</em> PPI chỉ gắn và bất hoạt không hồi phục các bơm H⁺/K⁺-ATPase đang ở trạng thái hoạt động (bơm acid ra lòng dạ dày). Bữa ăn sau đó 30-60 phút là tín hiệu kích thích các bơm hoạt động mạnh nhất, đúng lúc nồng độ PPI trong máu đạt đỉnh. Uống sau ăn làm giảm hiệu quả ức chế acid tới 50%!
            </li>
            <li>
              <strong style="color: #dc2626;">2. Bản chất tiền chất (Prodrug) và Bẫy ion acid của PPI:</strong>
              <br>&bull; PPI là base yếu, bị acid dịch vị phá hủy nên viên thuốc bắt buộc phải bao tan trong ruột. Thuốc hấp thu ở ruột non, theo máu đến tế bào viền, khuếch tán vào các vi quản tiết acid (pH &lt; 2) và bị proton hóa thành dẫn chất sulfenamid mang điện tích, bị "bẫy" lại và gắn cộng hóa trị vào cầu nối disulfid (-S-S-) của bơm proton.
            </li>
            <li>
              <strong style="color: #b45309;">3. Tương tác cạnh tranh enzym CYP2C19 giữa Omeprazol và Clopidogrel:</strong>
              <br>&bull; Clopidogrel là tiền chất cần enzym CYP2C19 ở gan để hoạt hóa chống đông. Omeprazol ức chế mạnh CYP2C19 làm giảm nồng độ dạng có hoạt tính của Clopidogrel → tăng nguy cơ tái phát nhồi máu cơ tim và tắc stent mạch vành. Khi cần phối hợp kháng tiểu cầu, nên ưu tiên dùng <strong>Pantoprazol</strong> vì ít ức chế enzym này.
            </li>
            <li>
              <strong style="color: #7c3aed;">4. Hiện tượng dung nạp nhanh (Tachyphylaxis / Tolerance) của Kháng H₂:</strong>
              <br>&bull; Cimetidin, Ranitidin, Famotidin bị giảm hiệu lực ức chế acid nhanh chóng chỉ sau 3-5 ngày dùng liên tục do cơ thể tăng tiết gastrin phản ứng bù trừ làm tăng kích thích tế bào viền. Hiện tượng này hoàn toàn không xảy ra ở nhóm PPI.
            </li>
            <li>
              <strong style="color: #475569;">5. Bismuth subsalicylat làm đen phân và đen lưỡi — Bẫy nhầm xuất huyết tiêu hóa:</strong>
              <br>&bull; Bismuth phản ứng với khí hydro sulfid (H₂S) do vi khuẩn đường ruột sinh ra tạo thành kết tủa Bismuth sulfid (Bi₂S₃) màu đen nhánh, khiến phân và lưỡi có màu đen. Đây là hiện tượng hoàn toàn vô hại nhưng rất dễ bị nhầm lẫn với dấu hiệu phân đen do xuất huyết tiêu hóa trên!
            </li>
            <li>
              <strong style="color: #059669;">6. Điều kiện môi trường acid để Sucralfat tạo màng che bảo vệ ổ loét:</strong>
              <br>&bull; Sucralfat chỉ trùng hợp (polymer hóa) thành lớp gel dính kiên cố bao phủ mặt ổ loét khi ở môi trường acid (pH &lt; 4). CẤM dùng đồng thời Sucralfat với thuốc kháng toan Antacid hoặc PPI/kháng H₂ (phải uống cách xa nhau ít nhất 2 giờ).
            </li>
          </ul>
        </div>

        <div class="exam-trap-box">
          <div class="exam-trap-title">🛑 Bẫy thi trắc nghiệm Bài 6:</div>
          &bull; <strong>Bẫy Omeprazole + Clopidogrel:</strong> Omeprazole ức chế mạnh CYP2C19 → làm giảm chuyển hóa Clopidogrel từ tiền dược thành dạng có hoạt tính → tăng nguy cơ huyết khối tắc mạch vành tái phát! Nếu cần dùng chung với Clopidogrel, ưu tiên chọn <strong>Pantoprazole</strong> (ít ức chế CYP2C19 nhất).
        </div>
        <div style="margin-top: 0.75rem;">
          <button class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.35rem 0.75rem;" onclick="jumpToDl2Topic('Thuốc điều trị DDTT')">
            🎯 Luyện đề trắc nghiệm Bài 6: Thuốc Điều Trị DDTT
          </button>
        </div>
      </div>
    </div>

    <!-- BÀI 7: THUỐC CHỐNG GIUN SÁN, AMIBE -->
    <div class="chapter-accordion-item dl2-searchable-item" id="dl2-item-dl2_ch7">
      <div class="chapter-accordion-header ${dl2OpenAccordions['dl2_ch7'] ? 'active' : ''}" id="dl2-head-dl2_ch7" onclick="toggleDl2Accordion('dl2_ch7')">
        <div class="chapter-acc-title-group">
          <span class="cs-pill cs-pill-primary">🔥 2 Tiết • 4 Câu</span>
          <span class="chapter-acc-title">Bài 7: Thuốc Chống Giun Sán &amp; Amip (Albendazol, Praziquantel, Metronidazol)</span>
        </div>
        <span class="chapter-acc-arrow">▼</span>
      </div>
      <div class="chapter-accordion-body" id="dl2-body-dl2_ch7" style="display: ${dl2OpenAccordions['dl2_ch7'] ? 'block' : 'none'};">
        <div class="chapter-sec-heading">🎯 1. Thuốc Trị Giun (Nematodes):</div>
        <ul class="chapter-point-list">
          <li><strong>Nhóm Benzimidazol (Mebendazol, Albendazol):</strong>
            <br>&bull; <em>Cơ chế:</em> Gắn chọn lọc vào <strong>β-tubulin</strong> của ký sinh trùng → ức chế quá trình trùng hợp vi ống (microtubules) → ngăn cản bắt giữ và sử dụng glucose → giun cạn kiệt năng lượng glycogen, bất động và chết.
            <br>&bull; <em>Phổ tác dụng:</em> Rất rộng (giun đũa, giun kim, giun móc, giun tóc). Albendazol hấp thu tốt hơn khi dùng cùng bữa ăn giàu chất béo → thấm vào mô trị được ấu trùng sán lợn ở não (<em>Cysticercosis</em>) và nang sán chó (<em>Echinococcus</em>).
            <br>&bull; <em>Chống chỉ định:</em> Phụ nữ mang thai (nhất là 3 tháng đầu &minus; gây quái thai), trẻ em dưới 1 &minus; 2 tuổi.
          </li>
          <li><strong>Pyrantel pamoat:</strong> Phong bế thần kinh - cơ của giun bằng cách kích thích thụ thể nicotinic → gây <strong>liệt cứng cơ giun</strong> → tống giun ra ngoài theo nhu động ruột mà không kích thích giun di chuyển chui ống mật.</li>
        </ul>

        <div class="chapter-sec-heading">🐛 2. Thuốc Trị Sán (Cestodes &amp; Trematodes):</div>
        <ul class="chapter-point-list">
          <li><strong>Praziquantel:</strong> Lựa chọn hàng đầu cho hầu hết các loại sán: <strong>sán lá gan, sán lá phổi, sán máng, sán dây</strong>.
            <br>&bull; <em>Cơ chế:</em> Làm tăng tính thấm của màng tế bào sán với ion <strong>Ca²⁺</strong> → gây co cứng cơ sán và làm phồng rộp, vỡ biểu mô bảo vệ của sán → hệ thống miễn dịch của vật chủ tấn công tiêu diệt sán.
          </li>
          <li><strong>Niclosamid:</strong> Diệt sán dây tại chỗ trong lòng ruột. Ức chế quá trình phosphoryl oxy hóa ty thể của sán. Lưu ý: Không dùng trong nhiễm sán dây lợn nếu có nguy cơ vỡ trứng gây ấu trùng sán lợn di căn.</li>
        </ul>

        <div class="chapter-sec-heading">🦠 3. Thuốc Trị Amip (Entamoeba histolytica):</div>
        <ul class="chapter-point-list">
          <li><strong>Thuốc diệt amip ở mô (Metronidazol, Tinidazol):</strong>
            <br>&bull; <em>Cơ chế:</em> Nhóm nitro bị khử bởi protein vận chuyển điện tử ferredoxin của ký sinh trùng thành các gốc tự do độc → phá hủy chuỗi xoắn ADN.
            <br>&bull; <em>Tác dụng:</em> Diệt thể hoạt động (trophozoite) của amip ở thành ruột và các cơ quan (áp xe gan do amip), diệt trùng roi âm đạo <em>Trichomonas vaginalis</em> và vi khuẩn kỵ khí.
            <br>&bull; <em>Tác dụng phụ:</em> Vị kim loại khó chịu ở miệng, buồn nôn, <strong>phản ứng giống Disulfiram khi uống chung với rượu</strong> (đỏ mặt bừng bừng, nhức đầu, tụt huyết áp).
          </li>
          <li><strong>Thuốc diệt amip trong lòng ruột (Diloxanid furoat, Paromomycin):</strong> Tác dụng chọn lọc trên thể kén (cyst) amip trong lòng đại tràng. Dùng tiếp nối sau Metronidazol để quét sạch kén phòng ngừa tái phát và người lành mang trùng.</li>
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
        <div class="chapter-sec-heading">🎯 1. Thuốc Giảm Ho &amp; Thuốc Tiêu Nhầy:</div>
        <ul class="chapter-point-list">
          <li><strong>Thuốc giảm ho trung ương:</strong>
            <br>&bull; <em>Codein:</em> Dẫn xuất morphin, ức chế trung tâm ho ở hành não. Giảm ho khan, giảm đau nhẹ, gây táo bón, ức chế hô hấp. Chống chỉ định cho trẻ em dưới 12 tuổi và phụ nữ cho con bú (do chuyển hóa nhanh qua CYP2D6 thành morphin gây tử vong cho trẻ).
            <br>&bull; <em>Dextromethorphan:</em> Đồng phân dextro của levorphanol. Không tác dụng lên thụ thể opioid → không gây nghiện, không giảm đau. Lựa chọn hàng đầu cho ho khan kích ứng.
          </li>
          <li><strong>Thuốc tiêu chất nhầy (Mucolytics):</strong>
            <br>&bull; <strong>N-acetylcystein (NAC):</strong> Chứa nhóm sulfhydryl (-SH) tự do → bẻ gãy các cầu nối disulfide (-S-S-) của mucoprotein trong đờm → làm giảm độ nhớt và loãng đờm. <em>Ứng dụng quan trọng:</em> Là <strong>thuốc giải độc đặc hiệu duy nhất cho ngộ độc Paracetamol</strong> (cung cấp cysteine tái tạo Glutathione).
          </li>
        </ul>

        <div class="chapter-sec-heading">🫁 2. Thuốc Điều Trị Hen Phế Quản &amp; COPD:</div>
        <ul class="chapter-point-list">
          <li><strong>Chủ vận β₂ tác dụng ngắn (SABA):</strong> Salbutamol (Albuterol), Terbutalin. Giãn cơ trơn phế quản nhanh trong 3 &minus; 5 phút. Thuốc hàng đầu <strong>cắt cơn hen phế quản cấp</strong>. ADR: run cơ tay, hồi hộp đánh trống ngực, hạ kali máu.</li>
          <li><strong>Chủ vận β₂ tác dụng dài (LABA):</strong> Salmeterol, Formoterol. Tác dụng kéo dài 12 giờ. Dùng dự phòng hen mạn. <strong>CẤM DÙNG LABA ĐƠN ĐỘC TRONG HEN</strong> (bắt buộc phải phối hợp với Corticoid hít ICS).</li>
          <li><strong>Corticoid dạng hít (ICS):</strong> Budesonid, Fluticason, Beclomethason. Là nền tảng <strong>chống viêm kiểm soát hen suyễn hiệu quả nhất</strong>. ADR tại chỗ: <strong>Khàn tiếng và nhiễm nấm Candida hầu họng</strong>. Phòng ngừa: <em>Bệnh nhân bắt buộc phải súc miệng và nhổ bỏ nước sau khi hít thuốc</em>.</li>
          <li><strong>Kháng thụ thể Leukotriene (LTRA):</strong> Montelukast, Zafirlukast. Rất hiệu quả trong hen do gắng sức, hen do dị ứng aspirin, hen kèm viêm mũi dị ứng.</li>
          <li><strong>Theophyllin:</strong> Ức chế enzym PDE làm tăng cAMP. Phạm vi điều trị hẹp, dễ ngộ độc loạn nhịp tim và co giật.</li>
        </ul>

                <!-- BẢNG VÀNG: CÁC ĐIỂM CHÚ Ý ĐẶC BIỆT ĐỘC NHẤT VÔ NHỊ -->
        <div class="chapter-sec-heading" style="color: #dc2626;">🔥 3. Những Điểm Chú Ý Đặc Biệt &amp; Độc Nhất Vô Nhị (Chỉ Có Ở Thuốc Điều Trị RLHH - Trọng Tâm Đề Thi):</div>
        <div style="background: var(--surface-alt); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1.25rem; font-size: 0.88rem; line-height: 1.6;">
          <ul class="chapter-point-list" style="display: flex; flex-direction: column; gap: 0.75rem;">
            <li>
              <strong style="color: #dc2626;">1. Cảnh báo hộp đen (Black Box Warning): CẤM dùng LABA đơn độc trong Hen phế quản:</strong>
              <br>&bull; Dùng thuốc chủ vận β₂ tác dụng kéo dài (Salmeterol, Formoterol) đơn độc mà không có Corticosteroid hít (ICS) đi kèm sẽ làm giảm nhạy cảm thụ thể β₂ mà không kiểm soát được quá trình viêm mạn tính → tăng tỷ lệ tử vong kịch phát do hen! Bắt buộc LABA luôn phải phối hợp đồng thời với ICS.
            </li>
            <li>
              <strong style="color: #d97706;">2. Nấm miệng Candida và Khàn tiếng do Corticosteroid hít (ICS):</strong>
              <br>&bull; Thuốc dạng xịt hít (Budesonid, Fluticason) bị đọng lại ở hầu họng gây ức chế miễn dịch tại chỗ và teo cơ dây thanh → Bắt buộc bệnh nhân phải <strong>súc miệng nhổ nước ngay sau khi hít thuốc</strong> và khuyến khích dùng buồng đệm (Spacer) để giảm lắng đọng hầu họng.
            </li>
            <li>
              <strong style="color: #7c3aed;">3. Ranh giới trị liệu hẹp và Độc tính chết người của Theophylline:</strong>
              <br>&bull; Nồng độ trị liệu trong huyết tương rất hẹp (10 - 20 mcg/mL); khi nồng độ &gt; 20 mcg/mL gây nôn mửa dai dẳng, loạn nhịp tim thất nguy hiểm và co giật kháng trị tử vong. Bị tăng nồng độ vọt khi dùng chung thuốc ức chế enzym gan CYP1A2 (Ciprofloxacin, Erythromycin).
            </li>
            <li>
              <strong style="color: #2563eb;">4. Cơ chế đối kháng thụ thể Adenosine của Theophylline:</strong>
              <br>&bull; Khác với thuốc kích thích β₂, Theophylline vừa ức chế enzym PDE vừa đối kháng thụ thể Adenosine A₁ và A₂A tại cơ trơn phế quản và não → vừa gây giãn phế quản, vừa gây kích thích trung tâm hô hấp ở hành não (được ứng dụng điều trị cơn ngừng thở ở trẻ sơ sinh non tháng).
            </li>
            <li>
              <strong style="color: #059669;">5. Hội chứng Churg-Strauss khi dùng thuốc đối kháng thụ thể Leukotriene:</strong>
              <br>&bull; Bệnh nhân dùng Montelukast hoặc Zafirlukast có thể biểu hiện hội chứng viêm mạch u hạt dị ứng tăng bạch cầu ái toan (Churg-Strauss syndrome), thường xuất hiện khi đang bắt đầu giảm liều corticosteroid đường uống.
            </li>
          </ul>
        </div>

        <div class="exam-trap-box">
          <div class="exam-trap-title">🛑 Bẫy thi trắc nghiệm Bài 8:</div>
          &bull; <strong>Súc miệng sau xịt ICS:</strong> Hít Corticoid (Symbicort, Seretide, Budesonid) không gây tác dụng phụ toàn thân như Cushing, nhưng rất hay gây <strong>nấm miệng Candida</strong> → câu hỏi thi về hướng dẫn dùng thuốc luôn hỏi thao tác <em>súc họng nhổ đi</em>.
        </div>
        <div style="margin-top: 0.75rem;">
          <button class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.35rem 0.75rem;" onclick="jumpToDl2Topic('Thuốc ĐC RLHH')">
            🎯 Luyện đề trắc nghiệm Bài 8: Thuốc ĐC Rối Loạn Hô Hấp
          </button>
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
        <div class="chapter-sec-heading">🎯 1. So Sánh Hai Thế Hệ Kháng H1:</div>
        <div class="cs-table-wrap">
          <table class="cs-table">
            <thead>
              <tr><th>Đặc Điểm</th><th>Kháng H1 Thế Hệ 1 (Cổ Điển)</th><th>Kháng H1 Thế Hệ 2 (Mới)</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Các hoạt chất</strong></td>
                <td><strong>Clorpheniramin, Diphenhydramin, Promethazin, Hydroxyzin, Diminhydrinat</strong></td>
                <td><strong>Cetirizin, Loratadin, Fexofenadin, Desloratadin, Levocetirizin</strong></td>
              </tr>
              <tr>
                <td><strong>Qua hàng rào máu não</strong></td>
                <td>Rất dễ qua hàng rào máu não (tan mạnh trong lipid)</td>
                <td>Rất ít hoặc không qua hàng rào máu não (ưa nước)</td>
              </tr>
              <tr>
                <td><strong>Tác dụng an thần, buồn ngủ</strong></td>
                <td><strong>Gây buồn ngủ rất mạnh</strong>, ức chế TKTW → cấm dùng khi lái xe, vận hành máy móc</td>
                <td><strong>Không gây buồn ngủ</strong> (hoặc rất ít buồn ngủ ở liều điều trị)</td>
              </tr>
              <tr>
                <td><strong>Tác dụng kháng Cholinergic</strong></td>
                <td><strong>Kháng Muscarinic mạnh:</strong> Gây khô miệng, nhìn mờ, bí tiểu, táo bón</td>
                <td>Hầu như không có tác dụng kháng cholinergic</td>
              </tr>
              <tr>
                <td><strong>Chỉ định mở rộng</strong></td>
                <td>Chống say tàu xe (Diminhydrinat), chống nôn, hỗ trợ gây ngủ</td>
                <td>Chỉ chuyên trị viêm mũi dị ứng, mày đay, viêm kết mạc dị ứng</td>
              </tr>
            </tbody>
          </table>
        </div>

                <!-- BẢNG VÀNG: CÁC ĐIỂM CHÚ Ý ĐẶC BIỆT ĐỘC NHẤT VÔ NHỊ -->
        <div class="chapter-sec-heading" style="color: #dc2626;">🔥 3. Những Điểm Chú Ý Đặc Biệt &amp; Độc Nhất Vô Nhị (Chỉ Có Ở Thuốc Kháng Histamin H1 - Trọng Tâm Đề Thi):</div>
        <div style="background: var(--surface-alt); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1.25rem; font-size: 0.88rem; line-height: 1.6;">
          <ul class="chapter-point-list" style="display: flex; flex-direction: column; gap: 0.75rem;">
            <li>
              <strong style="color: #dc2626;">1. Kháng H₁ Thế Hệ 1: Thân dầu qua hàng rào máu não &amp; Tác dụng Anticholinergic:</strong>
              <br>&bull; Clorpheniramin, Promethazin, Diphenhydramin dễ dàng qua não gây <strong>buồn ngủ sâu, an thần, giảm phản xạ</strong>. Đồng thời kháng thụ thể Muscarinic gây khô miệng, nhìn mờ, táo bón, bí tiểu → Chống chỉ định tuyệt đối cho người phì đại tiền liệt tuyến, glaucom góc đóng, tài xế và vận hành máy móc.
            </li>
            <li>
              <strong style="color: #059669;">2. Kháng H₁ Thế Hệ 2: Chọn lọc ngoại vi, hoàn toàn không gây buồn ngủ:</strong>
              <br>&bull; Loratadin, Cetirizin, Fexofenadin có cấu trúc phân cực hoặc ion hóa ở pH sinh lý, gắn protein cao và là cơ chất của P-glycoprotein nên không qua được hàng rào máu não → không an thần, không gây buồn ngủ và không có tác dụng phụ kháng cholinergic.
            </li>
            <li>
              <strong style="color: #b45309;">3. Thảm họa Xoắn Đỉnh của Terfenadin và Astemizol — Nguồn gốc ra đời Fexofenadin:</strong>
              <br>&bull; Terfenadin là tiền chất có khả năng chẹn kênh K⁺ dẫn truyền tim mạch gây kéo dài khoảng QT và xoắn đỉnh tử vong khi nồng độ thuốc mẹ tăng cao do dùng chung thuốc ức chế CYP3A4 (Ketoconazol, Erythromycin). Thuốc đã bị thu hồi và thay thế bằng dạng chuyển hóa có hoạt tính an toàn là <strong>Fexofenadin</strong>.
            </li>
            <li>
              <strong style="color: #2563eb;">4. Tác dụng chống say tàu xe và nôn tiền đình chỉ có ở Thế Hệ 1:</strong>
              <br>&bull; Nhờ tác dụng ức chế thụ thể Muscarinic và Histamin H₁ tại nhân tiền đình và trung tâm nôn ở thân não (Dimenhydrinat, Diphenhydramin, Scopolamin). Các thuốc thế hệ 2 hoàn toàn không có tác dụng chống say tàu xe!
            </li>
          </ul>
        </div>

        <div class="exam-trap-box">
          <div class="exam-trap-title">🛑 Bẫy thi trắc nghiệm Bài 9:</div>
          &bull; <strong>Chống chỉ định của Kháng H1 thế hệ 1:</strong> Do có tác dụng kháng cholinergic (khô dịch tiết, giãn cơ trơn bàng quang, giãn đồng tử) → chống chỉ định tuyệt đối cho bệnh nhân bị <strong>Glôcôm góc đóng</strong> và <strong>Phì đại lành tính tuyến tiền liệt (u xơ tiền liệt tuyến)</strong> vì gây bí tiểu cấp và tăng nhãn áp!
        </div>
        <div style="margin-top: 0.75rem;">
          <button class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.35rem 0.75rem;" onclick="jumpToDl2Topic('Thuốc kháng H1')">
            🎯 Luyện đề trắc nghiệm Bài 9: Thuốc Kháng H1
          </button>
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
        <div class="chapter-sec-heading">🎯 1. Phân Nhóm &amp; Cơ Chế Tác Dụng:</div>
        <ul class="chapter-point-list">
          <li><strong>Nhóm Statin (Atorvastatin, Rosuvastatin, Simvastatin, Pravastatin):</strong>
            <br>&bull; <em>Cơ chế:</em> Ức chế cạnh tranh enzym <strong>HMG-CoA Reductase</strong> → giảm tổng hợp cholesterol nội sinh ở tế bào gan → gan kích thích tăng biểu hiện thụ thể LDL (LDL-R) trên màng tế bào → tăng bắt giữ và thoái hóa LDL-C từ máu vào gan → <strong>hạ mạnh LDL-C (từ 20 &minus; 60%)</strong>, giảm nguy cơ biến cố tim mạch và tử vong.
            <br>&bull; <em>Tác dụng phụ chính:</em> Tăng men gan (ALT/AST), đau cơ, viêm cơ, nguy hiểm nhất là <strong>tiêu cơ vân cấp (Rhabdomyolysis)</strong> làm giải phóng myoglobin vào máu gây tắc ống thận và suy thận cấp.
            <br>&bull; <em>Thời điểm uống:</em> Cholesterol được gan tổng hợp mạnh nhất vào ban đêm → các statin có t<sub>1/2</sub> ngắn (Simvastatin, Lovastatin, Pravastatin) <strong>bắt buộc uống vào buổi tối trước khi đi ngủ</strong>. Atorvastatin và Rosuvastatin có thời gian bán thải dài (> 14 giờ) nên có thể uống bất kỳ lúc nào trong ngày.
          </li>
          <li><strong>Nhóm Fibrat (Fenofibrat, Gemfibrozil):</strong>
            <br>&bull; <em>Cơ chế:</em> Kích hoạt thụ thể nhân <strong>PPAR-α</strong> → tăng tổng hợp enzyme Lipoprotein Lipase (LPL) → tăng thoái hóa acid béo và VLDL → <strong>hạ cực mạnh Triglycerid (từ 30 &minus; 50%)</strong>.
            <br>&bull; <em>Chỉ định chính:</em> Tăng Triglycerid máu nặng (> 500 mg/dL) để phòng ngừa viêm tụy cấp.
          </li>
          <li><strong>Ezetimibe:</strong> Ức chế chọn lọc protein vận chuyển NPC1L1 tại bờ bàn chải ruột non → giảm hấp thu cholesterol từ thức ăn và dịch mật. Thường phối hợp với Statin.</li>
          <li><strong>Resin gắn acid mật (Cholestyramin):</strong> Giữ acid mật trong ruột đào thải theo phân → gan phải lấy cholesterol để tái tạo acid mật. ADR: Táo bón, cản trở hấp thu các vitamin tan trong dầu (A, D, E, K).</li>
        </ul>

                <!-- BẢNG VÀNG: CÁC ĐIỂM CHÚ Ý ĐẶC BIỆT ĐỘC NHẤT VÔ NHỊ -->
        <div class="chapter-sec-heading" style="color: #dc2626;">🔥 3. Những Điểm Chú Ý Đặc Biệt &amp; Độc Nhất Vô Nhị (Chỉ Có Ở Thuốc Hạ Lipid Máu - Trọng Tâm Đề Thi):</div>
        <div style="background: var(--surface-alt); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1.25rem; font-size: 0.88rem; line-height: 1.6;">
          <ul class="chapter-point-list" style="display: flex; flex-direction: column; gap: 0.75rem;">
            <li>
              <strong style="color: #dc2626;">1. Tiêu cơ vân cấp (Rhabdomyolysis) và Suy thận cấp do Statin:</strong>
              <br>&bull; <em>Cơ chế:</em> Ức chế HMG-CoA Reductase làm suy giảm tổng hợp Mevalonate, kéo theo cạn kiệt Coenzym Q10 (Ubiquinone) trong ty thể tế bào cơ → ly giải cơ vân, giải phóng myoglobin làm nghẽn ống thận gây suy thận cấp.
              <br>&bull; <em>Tương tác cấm kỵ:</em> Nguy cơ tiêu cơ vân tăng vọt gấp 10-20 lần khi phối hợp Statin với dẫn chất Fibrat (đặc biệt là <strong>Gemfibrozil</strong>) hoặc thuốc ức chế enzym CYP3A4.
            </li>
            <li>
              <strong style="color: #2563eb;">2. Thời điểm uống Statin ban đêm trước khi ngủ:</strong>
              <br>&bull; Enzym HMG-CoA Reductase ở tế bào gan tổng hợp cholesterol nội sinh mạnh nhất vào ban đêm (từ 0h - 4h sáng). Các Statin có thời gian bán thải ngắn (Simvastatin, Lovastatin, Pravastatin) <strong>bắt buộc phải uống vào buổi tối trước khi đi ngủ</strong>. Các Statin bán thải dài (Atorvastatin, Rosuvastatin) có thể uống vào bất kỳ thời điểm nào trong ngày.
            </li>
            <li>
              <strong style="color: #d97706;">3. Cơn bốc hỏa đỏ bừng mặt và ngứa da do Acid Nicotinic (Niacin / Vitamin B3):</strong>
              <br>&bull; Do kích thích giải phóng Prostaglandin D₂ và E₂ tại mạng lưới mao mạch da dưới biểu bì. Dự phòng hiệu quả bằng cách <strong>uống Aspirin 325mg trước khi dùng Niacin 30 phút</strong>.
            </li>
            <li>
              <strong style="color: #7c3aed;">4. Nhựa gắn acid mật (Cholestyramin) tạo phức trơ phong tỏa hấp thu thuốc khác:</strong>
              <br>&bull; Cholestyramin và Colestipol mang điện tích dương mạnh, tạo phức chelate không hấp thu với các thuốc có tính acid yếu: Warfarin, Digoxin, Thiazid, Levothyroxin và các vitamin tan trong dầu (A, D, E, K). Bắt buộc uống các thuốc khác trước 1 giờ hoặc sau 4 - 6 giờ so với nhựa gắn acid mật.
            </li>
            <li>
              <strong style="color: #059669;">5. Ezetimibe — Ức chế chọn lọc protein vận chuyển NPC1L1 tại ruột non:</strong>
              <br>&bull; Thuốc duy nhất ức chế đặc hiệu protein vận chuyển Niemann-Pick C1-Like 1 (NPC1L1) tại diềm bàn chải ruột non, làm giảm hấp thu cholesterol từ thức ăn và dịch mật mà hoàn toàn không cản trở hấp thu triglycerid hay các vitamin tan trong dầu.
            </li>
          </ul>
        </div>

        <div class="exam-trap-box">
          <div class="exam-trap-title">🛑 Bẫy thi trắc nghiệm Bài 10:</div>
          &bull; <strong>Tương tác nguy hiểm chết người Statin + Gemfibrozil:</strong> Gemfibrozil ức chế quá trình glucuronid hóa của statin → làm nồng độ statin trong máu tăng vọt, nguy cơ <strong>tiêu cơ vân cấp (Rhabdomyolysis) tăng gấp 10 lần</strong>! Nếu bắt buộc phải phối hợp Statin với Fibrat, phải chọn <strong>Fenofibrat</strong> (an toàn hơn nhiều).
        </div>
        <div style="margin-top: 0.75rem;">
          <button class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.35rem 0.75rem;" onclick="jumpToDl2Topic('Thuốc hạ lipid máu')">
            🎯 Luyện đề trắc nghiệm Bài 10: Thuốc Hạ Lipid Máu
          </button>
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
        <div class="chapter-sec-heading">🎯 1. Phân Loại Thuốc Theo Vị Trí Tác Dụng Chu Kỳ Sinh Học:</div>
        <ul class="chapter-point-list">
          <li><strong>Diệt thể phân liệt trong hồng cầu (Cắt cơn sốt rét):</strong>
            <br>&bull; <em>Artemisinin và dẫn chất (Artesunat, Artemether, Dihydroartemisinin - DHA):</em> Chiết xuất từ Thanh hao hoa vàng. Cầu nối endoperoxide tạo gốc tự do phá hủy màng tế bào KST. Tác dụng <strong>diệt KST trong máu cực nhanh và mạnh nhất</strong>. Bắt buộc phối hợp ACT (DHA + Piperaquin), không dùng đơn độc để ngừa kháng thuốc.
            <br>&bull; <em>Quinin:</em> Alkaloid vỏ cây Cinchona. Dùng khi sốt rét nặng hoặc kháng thuốc. ADR: Hội chứng Cinchonism (ù tai, chóng mặt, giảm thị lực), <strong>hạ đường huyết nặng</strong> (kích thích tụy tiết insulin).
            <br>&bull; <em>Cloroquin:</em> Đã bị <em>P. falciparum</em> kháng rộng khắp. Chỉ còn dùng cho <em>P. vivax</em> nhạy cảm. Dùng kéo dài gây lắng đọng võng mạc mù lòa.
          </li>
          <li><strong>Diệt thể ẩn trong gan (Hypnozoite) &amp; Diệt thể giao bào:</strong>
            <br>&bull; <strong>PRIMAQUIN:</strong> Thuốc DUY NHẤT có tác dụng <strong>diệt thể ẩn trong tế bào gan của <em>P. vivax</em> và <em>P. ovale</em> → chống tái phát xa</strong>; đồng thời diệt giao bào của <em>P. falciparum</em> → cắt đứt đường lây truyền sang muỗi.
            <br>&bull; <em>CẢNH BÁO NGUY HIỂM:</em> Primaquin gây <strong>tan máu cấp tính (tán huyết)</strong> ở người thiếu men G6PD. Bắt buộc kiểm tra G6PD trước khi dùng. Chống chỉ định cho phụ nữ mang thai và trẻ dưới 6 tháng.
          </li>
        </ul>

                <!-- BẢNG VÀNG: CÁC ĐIỂM CHÚ Ý ĐẶC BIỆT ĐỘC NHẤT VÔ NHỊ -->
        <div class="chapter-sec-heading" style="color: #dc2626;">🔥 3. Những Điểm Chú Ý Đặc Biệt &amp; Độc Nhất Vô Nhị (Chỉ Có Ở Thuốc Chống Sốt Rét - Trọng Tâm Đề Thi):</div>
        <div style="background: var(--surface-alt); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1.25rem; font-size: 0.88rem; line-height: 1.6;">
          <ul class="chapter-point-list" style="display: flex; flex-direction: column; gap: 0.75rem;">
            <li>
              <strong style="color: #dc2626;">1. Cơn tan máu cấp ở người thiếu hụt enzym G6PD do dùng Primaquin:</strong>
              <br>&bull; Primaquin tạo ra các chất chuyển hóa có tính oxy hóa mạnh. Ở bệnh nhân thiếu enzym Glucose-6-Phosphat Dehydrogenase (G6PD), hồng cầu không tạo đủ NADPH để khử glutathion, màng hồng cầu bị oxy hóa vỡ ồ ạt gây tan máu cấp, tiểu huyết sắc tố, suy thận cấp. BẮT BUỘC xét nghiệm sàng lọc G6PD trước khi chỉ định!
            </li>
            <li>
              <strong style="color: #059669;">2. Primaquin là thuốc DUY NHẤT diệt thể ẩn trong gan (Hypnozoite):</strong>
              <br>&bull; Thuốc duy nhất có khả năng tiêu diệt thể ngủ trong gan của ký sinh trùng <em>Plasmodium vivax</em> và <em>Plasmodium ovale</em> để điều trị tiệt căn chống tái phát xa; đồng thời diệt thể giao bào trong máu ngăn ngừa muỗi hút máu truyền dịch bệnh cho cộng đồng.
            </li>
            <li>
              <strong style="color: #d97706;">3. Hội chứng nhiễm độc Cinchonism kinh điển của Quinin:</strong>
              <br>&bull; Xuất hiện khi dùng liều cao Quinin với tam chứng đặc trưng: <strong>ù tai, giảm thính lực, hoa mắt chóng mặt, nhìn mờ</strong> kèm buồn nôn và nhức đầu dữ dội; hồi phục hoàn toàn khi ngừng thuốc.
            </li>
            <li>
              <strong style="color: #7c3aed;">4. Bệnh võng mạc hình mắt bò (Bull's Eye Maculopathy) do Chloroquin:</strong>
              <br>&bull; Chloroquin gắn chặt vào các tế bào sắc tố melanin ở võng mạc mắt, dùng liều cao kéo dài gây lắng đọng giác mạc và thoái hóa hoàng điểm không hồi phục hình "mắt bò". Cần khám thị trường và soi đáy mắt định kỳ mỗi 6-12 tháng.
            </li>
            <li>
              <strong style="color: #be123c;">5. Cấm dùng dẫn chất Artemisinin trong 3 tháng đầu thai kỳ &amp; Nguyên tắc phối hợp ACT:</strong>
              <br>&bull; Artemisinin và dẫn chất gây độc phôi thai và tiêu thai trong giai đoạn đầu thai kỳ. Để ngăn ngừa ký sinh trùng đột biến kháng thuốc, dẫn chất Artemisinin (Artesunat, Artemether) LUÔN LUÔN phải phối hợp với một thuốc có thời gian bán thải dài (phác đồ ACT như Artemether + Lumefantrine), cấm tuyệt đối dùng đơn độc!
            </li>
          </ul>
        </div>

        <div class="exam-trap-box">
          <div class="exam-trap-title">🛑 Bẫy thi trắc nghiệm Bài 11:</div>
          &bull; <strong>Thuốc chống tái phát sốt rét:</strong> Câu hỏi thi hỏi <em>"Thuốc nào dùng để điều trị triệt căn / chống tái phát sốt rét do P. vivax?"</em> → Đáp án duy nhất là <strong>PRIMAQUIN</strong> (nhờ diệt thể ngủ hypnozoite trong gan).
        </div>
        <div style="margin-top: 0.75rem;">
          <button class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.35rem 0.75rem;" onclick="jumpToDl2Topic('Thuốc chống sốt rét')">
            🎯 Luyện đề trắc nghiệm Bài 11: Thuốc Chống Sốt Rét
          </button>
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
        <div class="chapter-sec-heading">🎯 1. Các Kiểu Tương Tác Dược Lực Học:</div>
        <ul class="chapter-point-list">
          <li><strong>Hiệp đồng cộng (Additive):</strong> Hai thuốc cùng hướng tác dụng, tổng tác dụng bằng cộng đại số (1 + 1 = 2).</li>
          <li><strong>Hiệp đồng tăng mức (Synergistic):</strong> Tác dụng phối hợp lớn hơn nhiều tổng tác dụng từng chất (1 + 1 > 2). Ví dụ: Trimethoprim + Sulfamethoxazol (Cotrimoxazol); Penicillin + Gentamicin.</li>
          <li><strong>Đối kháng:</strong>
            <br>&bull; <em>Đối kháng cạnh tranh:</em> Cùng gắn vào 1 vị trí thụ thể, có thể hóa giải bằng tăng nồng độ chất chủ vận (Naloxone - Morphin; Atropin - Acetylcholin).
            <br>&bull; <em>Đối kháng sinh lý / chức năng:</em> Tác động lên 2 thụ thể khác nhau gây tác dụng sinh lý ngược chiều (Adrenalin giãn phế quản qua β₂ đối kháng Histamin co thắt phế quản qua H₁).
            <br>&bull; <em>Đối kháng hóa học:</em> Hai chất phản ứng hóa học trực tiếp vô hiệu hóa nhau (Heparin tích điện âm phản ứng với Protamin sulfat tích điện dương).
          </li>
        </ul>

        <div class="chapter-sec-heading">⚡ 2. Bảng Tra Cứu Cảm Ứng &amp; Ức Chế Enzyme Gan CYP450:</div>
        <ul class="chapter-point-list">
          <li><strong>Chất cảm ứng enzym (Inducers):</strong> <em>Rifampicin, Phenobarbital, Phenytoin, Carbamazepin, Rượu mạn tính, Cỏ St. John's</em> → kích thích tăng tổng hợp enzym gan → <strong>tăng chuyển hóa thuốc dùng chung → giảm nồng độ thuốc và giảm/mất hiệu lực điều trị</strong> (ví dụ dùng Rifampicin làm mất tác dụng của thuốc tránh thai hoặc Warfarin).</li>
          <li><strong>Chất ức chế enzym (Inhibitors):</strong> <em>Ketoconazol, Itraconazol, Clarithromycin, Erythromycin, Cimetidin, Nước bưởi chùm (Grapefruit juice)</em> → ức chế enzym gan → <strong>giảm chuyển hóa thuốc dùng chung → tăng nồng độ thuốc trong máu gây ngộ độc</strong> (ví dụ Ketoconazol phối hợp Statin làm nồng độ statin tăng vọt gây tiêu cơ vân).</li>
        </ul>
                <!-- BẢNG VÀNG: CÁC ĐIỂM CHÚ Ý ĐẶC BIỆT ĐỘC NHẤT VÔ NHỊ -->
        <div class="chapter-sec-heading" style="color: #dc2626;">🔥 3. Những Điểm Chú Ý Đặc Biệt &amp; Độc Nhất Vô Nhị (Chỉ Có Ở KTGHP &amp; Tương Tác Thuốc - Trọng Tâm Đề Thi):</div>
        <div style="background: var(--surface-alt); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1.25rem; font-size: 0.88rem; line-height: 1.6;">
          <ul class="chapter-point-list" style="display: flex; flex-direction: column; gap: 0.75rem;">
            <li>
              <strong style="color: #dc2626;">1. Cảm ứng enzym vs Ức chế enzym CYP450 — Quy tắc tử huyệt dược lâm sàng:</strong>
              <br>&bull; <em>Chất cảm ứng enzym (Rifampicin, Phenobarbital, Carbamazepin, Phenytoin):</em> Tăng tổng hợp enzym gan → <strong>tăng tốc độ chuyển hóa thuốc dùng chung → nồng độ thuốc giảm sâu dẫn đến THẤT BẠI ĐIỀU TRỊ</strong> (ví dụ: phụ nữ uống thuốc tránh thai uống kèm Rifampicin sẽ vỡ kế hoạch có thai ngoài ý muốn).
              <br>&bull; <em>Chất ức chế enzym (Ketoconazol, Erythromycin, Clarithromycin, Cimetidin):</em> Bất hoạt enzym gan → <strong>giảm chuyển hóa thuốc dùng chung → nồng độ thuốc tăng vọt dẫn đến NGỘ ĐỘC TỬ VONG</strong> (ví dụ: Clarithromycin phối hợp Simvastatin làm tăng nồng độ statin gây tiêu cơ vân cấp và suy thận).
            </li>
            <li>
              <strong style="color: #d97706;">2. Bẫy Nước Bưởi Chùm (Grapefruit Juice) ức chế không hồi phục CYP3A4 ruột:</strong>
              <br>&bull; Nước bưởi chùm chứa furanocoumarin ức chế không hồi phục enzym CYP3A4 ở biểu mô ruột non kéo dài 24-72h. Làm tăng sinh khả dụng của các thuốc chuyển hóa bước đầu qua ruột như Amlodipin, Felodipin, Simvastatin lên gấp 3-5 lần gây tụt huyết áp trụy mạch hoặc hoại tử cơ!
            </li>
            <li>
              <strong style="color: #2563eb;">3. Tương tác đẩy protein huyết tương: Nguy cơ xuất huyết và hạ đường huyết bùng phát:</strong>
              <br>&bull; Các thuốc có ái lực cực mạnh với albumin huyết tương (NSAID như Aspirin, Ibuprofen; Sulfamid) sẽ đẩy các thuốc có ranh giới điều trị hẹp ra dạng tự do:
              <br>&bull; Đẩy <strong>Warfarin</strong> tự do → xuất huyết ồ ạt đe dọa tính mạng.
              <br>&bull; Đẩy <strong>Sulfonylurea (Glibenclamid)</strong> tự do → hạ đường huyết sâu, hôn mê kéo dài.
              <br>&bull; Đẩy <strong>Methotrexat</strong> tự do → suy tủy xương cấp tính.
            </li>
            <li>
              <strong style="color: #7c3aed;">4. Tương tác cạnh tranh bơm tống thuốc P-glycoprotein (P-gp):</strong>
              <br>&bull; P-glycoprotein là bơm tống thuốc ra ngoài ở tế bào ruột và tế bào ống thận. Thuốc ức chế P-gp (Amiodaron, Verapamil, Quinidin, Clarithromycin) làm tăng hấp thu từ ruột và giảm bài xuất qua thận của <strong>Digoxin</strong> và <strong>Dabigatran</strong> → nồng độ hai thuốc này tăng vọt gấp 2-3 lần gây ngộ độc.
            </li>
            <li>
              <strong style="color: #be123c;">5. Hội chứng Serotonin đe dọa tính mạng (Serotonin Syndrome):</strong>
              <br>&bull; Xảy ra khi phối hợp 2 hoặc nhiều thuốc làm tăng nồng độ Serotonin ở synap thần kinh (SSRI như Fluoxetin + MAOI, Tramadol, Linezolid, hoặc Triptan). Biểu hiện kích thích thần kinh, giật rung cơ (Clonus), tăng thân nhiệt ác tính, co giật và tử vong. Bắt buộc có khoảng nghỉ ít nhất 2 tuần khi chuyển đổi giữa SSRI và MAOI (riêng Fluoxetin cần 5 tuần vì bán thải dài).
            </li>
            <li>
              <strong style="color: #059669;">6. Tương tác tạo phức Chelate không tan tại lòng ruột:</strong>
              <br>&bull; Kháng sinh Fluoroquinolon (Ciprofloxacin) hoặc Tetracyclin tạo phức chelate không hấp thu với các cation kim loại đa hóa trị (Fe²⁺, Ca²⁺, Mg²⁺, Al³⁺) trong sữa, viên sắt, viên calci hoặc thuốc kháng toan Antacid → nồng độ kháng sinh giảm hơn 80% gây thất bại điều trị. Bắt buộc uống cách nhau ít nhất 2 giờ.
            </li>
          </ul>
        </div>

        <div style="margin-top: 0.75rem;">
          <button class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.35rem 0.75rem;" onclick="jumpToDl2Topic('KTGHP')">
            🎯 Luyện đề trắc nghiệm Bài 12: KTGHP &amp; Tương Tác Thuốc
          </button>
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
        <div class="chapter-sec-heading">🎯 1. Glucocorticoid (Vỏ Thượng Thận):</div>
        <ul class="chapter-point-list">
          <li><strong>Các thuốc:</strong> Hydrocortison (ngắn), Prednisolon, Methylprednisolon (trung bình), Dexamethason, Betamethason (dài, tác dụng chống viêm cực mạnh gấp 25-30 lần Hydrocortison).</li>
          <li><strong>Cơ chế phân tử:</strong> Xuyên qua màng tế bào gắn vào thụ thể GR nội bào → phức hợp chuyển vào nhân gắn vào GRE trên ADN → kích thích tổng hợp protein <strong>Lipocortin-1 (Annexin A1)</strong> → ức chế trực tiếp enzym <strong>Phospholipase A₂</strong> → ngăn cản giải phóng Acid Arachidonic → chặn đứng cả 2 con đường tổng hợp Prostaglandin (qua COX) và Leukotriene (qua LOX).</li>
          <li><strong>3 tác dụng chính:</strong> Chống viêm mạnh, chống dị ứng, ức chế miễn dịch.</li>
          <li><strong>Tác dụng phụ khi dùng kéo dài:</strong>
            <br>&bull; <em>Hội chứng Cushing do thuốc:</em> Mặt tròn như mặt trăng (Moon face), bướu trâu (Buffalo hump), teo cơ tứ chi, tích mỡ thân mình.
            <br>&bull; <em>Loãng xương, gãy xương:</em> Do ức chế tạo cốt bào và giảm hấp thu calci ở ruột.
            <br>&bull; <em>Loét dạ dày tá tràng:</em> Nguy cơ xuất huyết tiêu hóa tăng vọt khi dùng cùng NSAIDs.
            <br>&bull; <em>Tăng đường huyết:</em> Làm nặng thêm đái tháo đường.
            <br>&bull; <strong>Suy vỏ thượng thận cấp do ngừng thuốc đột ngột:</strong> Do ức chế trục Hạ đồi &minus; Tuyến yên &minus; Thượng thận (HPA) qua feedback âm. Vỏ thượng thận bị teo, khi ngừng thuốc đột ngột không tiết đủ cortisol → trụy mạch tử vong → <strong>bắt buộc phải giảm liều từ từ (tapering) trước khi ngừng thuốc</strong>.
          </li>
          <li><strong>Thời điểm uống chuẩn:</strong> Uống <strong>1 lần duy nhất lúc 8 giờ sáng</strong> (trùng với đỉnh tiết cortisol tự nhiên sinh lý của cơ thể để ít ức chế trục HPA nhất).</li>
        </ul>

        <div class="chapter-sec-heading">🦋 2. Hormon Tuyến Giáp &amp; Thuốc Kháng Giáp:</div>
        <ul class="chapter-point-list">
          <li><strong>Levothyroxine (T₄ tổng hợp):</strong> Điều trị suy giáp. Uống lúc đói vào buổi sáng trước ăn 30 &minus; 60 phút. Theo dõi bằng chỉ số TSH huyết thanh.</li>
          <li><strong>Thuốc kháng giáp thionamid (PTU, Methimazol):</strong> Ức chế enzym Thyroid Peroxidase (TPO) → ngăn gắn iod vào tyrosin và ngăn phản ứng ghép đôi tạo T₃, T₄. PTU còn ức chế chuyển T₄ thành T₃ ở ngoại vi.
            <br>&bull; <em>Lựa chọn cho phụ nữ mang thai:</em> <strong>3 tháng đầu thai kỳ ưu tiên chọn PTU</strong> (do Methimazol có nguy cơ gây dị tật teo da đầu thai nhi); từ quý 2 chuyển sang Methimazol (để tránh độc tính viêm gan hoại tử của PTU).
            <br>&bull; <em>Tác dụng phụ nguy hiểm nhất:</em> <strong>Mất bạch cầu hạt (Agranulocytosis)</strong> → bệnh nhân sốt cao, viêm họng cấp tính cần ngưng thuốc và xét nghiệm máu ngay.
          </li>
        </ul>

        <div class="chapter-sec-heading">🌸 3. Thuốc Tránh Thai Phối Hợp (COC):</div>
        <ul class="chapter-point-list">
          <li><strong>Thành phần:</strong> Phối hợp Estrogen (Ethinylestradiol) + Progestin (Levonorgestrel, Drospirenone).</li>
          <li><strong>Cơ chế tránh thai:</strong> Feedback âm lên tuyến yên ức chế tiết LH và FSH → <strong>ngăn cản hiện tượng rụng trứng</strong>; làm đặc chất nhầy cổ tử cung ngăn tinh trùng xâm nhập; làm mỏng nội mạc tử cung ngăn làm tổ.</li>
          <li><strong>Chống chỉ định tuyệt đối:</strong> Tiền sử huyết khối tắc mạch (DVT, thuyên tắc phổi), đột quỵ, ung thư vú hoặc ung thư phụ thuộc estrogen, phụ nữ trên 35 tuổi nghiện hút thuốc lá.</li>
        </ul>
                <!-- BẢNG VÀNG: CÁC ĐIỂM CHÚ Ý ĐẶC BIỆT ĐỘC NHẤT VÔ NHỊ -->
        <div class="chapter-sec-heading" style="color: #dc2626;">🔥 3. Những Điểm Chú Ý Đặc Biệt &amp; Độc Nhất Vô Nhị (Chỉ Có Ở Thuốc Hormon - Trọng Tâm Đề Thi):</div>
        <div style="background: var(--surface-alt); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1.25rem; font-size: 0.88rem; line-height: 1.6;">
          <ul class="chapter-point-list" style="display: flex; flex-direction: column; gap: 0.75rem;">
            <li>
              <strong style="color: #dc2626;">1. Quy tắc 8 giờ sáng, teo vỏ thượng thận &amp; Cơn suy thượng thận cấp khi dùng Corticosteroid:</strong>
              <br>&bull; Dùng Corticosteroid toàn thân liều cao kéo dài trên 2-3 tuần gây ức chế ngược trục Dưới đồi - Tuyến yên - Thượng thận (HPA) làm teo vỏ thượng thận. Bắt buộc <strong>uống 1 liều duy nhất vào 8 giờ sáng</strong> (trùng đỉnh tiết cortisol sinh lý) hoặc dùng phác đồ cách nhật; CẤM dừng đột ngột mà phải giảm liều từ từ (tapering) để tránh suy thượng thận cấp trụy mạch tử vong!
            </li>
            <li>
              <strong style="color: #2563eb;">2. Lựa chọn thuốc kháng giáp trong thai kỳ: PTU quý 1 vs Thiamazol quý 2-3:</strong>
              <br>&bull; <em>Quý 1 thai kỳ:</em> Ưu tiên dùng <strong>Propylthiouracil (PTU)</strong> vì gắn protein huyết tương cao, ít qua nhau thai, tránh dị tật bẩm sinh da đầu (Aplasia cutis) và hẹp thực quản do Thiamazol gây ra.
              <br>&bull; <em>Từ quý 2 trở đi:</em> Chuyển sang dùng <strong>Thiamazol</strong> vì dùng PTU kéo dài có nguy cơ gây hoại tử tế bào gan cấp đe dọa tính mạng người mẹ.
            </li>
            <li>
              <strong style="color: #b45309;">3. Mất bạch cầu hạt (Agranulocytosis) đe dọa tính mạng do thuốc kháng giáp:</strong>
              <br>&bull; Biến chứng đặc ứng nguy hiểm nhất của PTU và Thiamazol (tỷ lệ 0.1 - 0.5%). Bệnh nhân bắt buộc phải đi khám và làm xét nghiệm công thức máu khẩn cấp nếu có triệu chứng sốt cao đột ngột hoặc đau rát họng, loét miệng!
            </li>
            <li>
              <strong style="color: #7c3aed;">4. Nguy cơ thuyên tắc huyết khối tĩnh mạch sâu (DVT) do Estrogen:</strong>
              <br>&bull; Estrogen kích thích gan tăng tổng hợp các yếu tố đông máu và giảm tổng hợp Antithrombin III. Chống chỉ định tuyệt đối thuốc tránh thai kết hợp ở phụ nữ trên 35 tuổi có hút thuốc lá hoặc có tiền sử huyết khối tắc mạch.
            </li>
            <li>
              <strong style="color: #059669;">5. Cơn Tetany hạ Calci máu sau phẫu thuật cắt tuyến giáp:</strong>
              <br>&bull; Do phẫu thuật cắt nhầm hoặc tổn thương các tuyến cận giáp làm suy sụp hormon PTH dẫn đến tụt calci máu cấp tính gây co cứng cơ, dấu hiệu Chvostek và Trousseau dương tính. Xử trí cấp cứu bằng tiêm tĩnh mạch chậm dung dịch Calci gluconat.
            </li>
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
        <div class="chapter-sec-heading">💉 1. Insulin &amp; Phân Loại Theo Dược Động Học:</div>
        <div class="cs-table-wrap">
          <table class="cs-table">
            <thead>
              <tr><th>Loại Insulin</th><th>Các Hoạt Chất</th><th>Khởi Phát &amp; Đỉnh</th><th>Cách Tiêm Chuẩn</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Tác dụng cực nhanh</strong></td>
                <td>Lispro, Aspart, Glulisine</td>
                <td>Khởi phát 10 &minus; 15 phút, đỉnh 1 giờ</td>
                <td>Tiêm dưới da ngay trước bữa ăn (5 &minus; 15 phút)</td>
              </tr>
              <tr>
                <td><strong>Tác dụng ngắn (Thường)</strong></td>
                <td><strong>Regular Insulin (Actrapid)</strong></td>
                <td>Khởi phát 30 phút, đỉnh 2 &minus; 3 giờ</td>
                <td>Tiêm dưới da trước ăn 30 phút. <strong>Loại DUY NHẤT tiêm IV cấp cứu toan ceton ĐTĐ</strong></td>
              </tr>
              <tr>
                <td><strong>Tác dụng trung gian</strong></td>
                <td><strong>NPH (Isophane)</strong></td>
                <td>Khởi phát 1 &minus; 2 giờ, đỉnh 4 &minus; 8 giờ</td>
                <td>Dung dịch đục, tiêm dưới da 1 &minus; 2 lần/ngày làm insulin nền</td>
              </tr>
              <tr>
                <td><strong>Tác dụng kéo dài</strong></td>
                <td>Glargine, Detemir, Degludec</td>
                <td>Khởi phát 1 &minus; 2 giờ, <strong>không có đỉnh nhọn</strong></td>
                <td>Dung dịch trong, duy trì nồng độ nền ổn định suốt 24 giờ</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="chapter-sec-heading">💊 2. Thuốc Uống Điều Trị Đái Tháo Đường:</div>
        <ul class="chapter-point-list">
          <li><strong>Biguanid (Metformin):</strong> Thuốc đầu tay cho ĐTĐ týp 2.
            <br>&bull; <em>Cơ chế:</em> Kích hoạt enzym AMPK → <strong>giảm tân tạo glucose tại gan</strong>, tăng nhạy cảm insulin ở mô ngoại vi.
            <br>&bull; <em>Ưu điểm:</em> <strong>Không kích thích tụy tiết insulin → không gây hạ đường huyết khi dùng đơn độc</strong>, không tăng cân.
            <br>&bull; <em>Tác dụng phụ:</em> Rối loạn tiêu hóa (đầy hơi, tiêu chảy); nguy hiểm nhất là <strong>nhiễm toan acid lactic (Lactic Acidosis)</strong>.
            <br>&bull; <em>Chống chỉ định tuyệt đối:</em> <strong>Suy thận nặng với eGFR < 30 mL/phút</strong>, suy gan, suy tim mất bù. Ngừng Metformin 48h trước khi tiêm thuốc cản quang tĩnh mạch chứa iod.
          </li>
          <li><strong>Sulfonylurea (Gliclazid, Glimepirid):</strong> Đóng kênh K<sub>ATP</sub> trên tế bào β tụy → kích thích tụy tiết insulin. ADR: Nguy cơ <strong>hạ đường huyết nặng kéo dài</strong> và gây tăng cân.</li>
          <li><strong>Ức chế SGLT-2 (Dapagliflozin, Empagliflozin):</strong> Ức chế tái hấp thu glucose ở ống lượn gần → thải đường qua nước tiểu. Ưu điểm: Bảo vệ tim mạch (giảm tử vong do suy tim) và bảo vệ thận. ADR: Nhiễm nấm sinh dục, nhiễm trùng đường tiểu.</li>
        </ul>
                <!-- BẢNG VÀNG: CÁC ĐIỂM CHÚ Ý ĐẶC BIỆT ĐỘC NHẤT VÔ NHỊ -->
        <div class="chapter-sec-heading" style="color: #dc2626;">🔥 3. Những Điểm Chú Ý Đặc Biệt &amp; Độc Nhất Vô Nhị (Chỉ Có Ở Thuốc Hạ Glucose Máu - Trọng Tâm Đề Thi):</div>
        <div style="background: var(--surface-alt); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1.25rem; font-size: 0.88rem; line-height: 1.6;">
          <ul class="chapter-point-list" style="display: flex; flex-direction: column; gap: 0.75rem;">
            <li>
              <strong style="color: #dc2626;">1. Nhiễm toan Acid Lactic của Metformin &amp; Quy tắc chụp cản quang:</strong>
              <br>&bull; Metformin ức chế tân tạo đường từ acid lactic tại gan. Chống chỉ định tuyệt đối khi GFR &lt; 30 mL/phút hoặc suy tim, suy hô hấp thiếu oxy mô. Bắt buộc <strong>ngừng Metformin trước 48 giờ và chỉ dùng lại sau 48 giờ chụp cản quang tĩnh mạch có iod</strong> để ngừa suy thận cấp tích lũy thuốc gây toan lactic tử vong.
            </li>
            <li>
              <strong style="color: #b45309;">2. Cơn hạ đường huyết kéo dài chết người của Sulfonylurea cũ (Glibenclamid):</strong>
              <br>&bull; Glibenclamid có thời gian bán thải sinh học rất dài, chuyển hóa thành các chất vẫn còn hoạt tính và thải trừ qua thận → Dễ gây hạ đường huyết sâu, hôn mê kéo dài nhiều ngày ở bệnh nhân cao tuổi suy giảm chức năng thận (Gliclazid chuyển hóa thành chất bất hoạt nên an toàn hơn nhiều).
            </li>
            <li>
              <strong style="color: #059669;">3. Nhiễm toan Ceton đường huyết bình thường (Euglycemic DKA) của nhóm SGLT-2i:</strong>
              <br>&bull; Dapagliflozin, Empagliflozin ức chế tái hấp thu đường ở ống lượn gần gây hạ đường huyết và giảm bài tiết insulin, kích hoạt ly giải mỡ tạo thể ceton mà mức đường huyết trong máu vẫn chỉ ở mức bình thường hoặc tăng nhẹ (&lt; 250 mg/dL). Đi kèm nguy cơ nhiễm nấm đường sinh dục - tiết niệu.
            </li>
            <li>
              <strong style="color: #7c3aed;">4. Hiện tượng loạn dưỡng mô mỡ tại vị trí tiêm Insulin:</strong>
              <br>&bull; Tiêm insulin nhiều lần tại một vị trí cố định gây phì đại hoặc teo mô mỡ dưới da làm đảo lộn tốc độ hấp thu insulin thất thường → Bắt buộc phải luân chuyển xoay vòng đều đặn các vị trí tiêm ở bụng, đùi và cánh tay.
            </li>
            <li>
              <strong style="color: #be123c;">5. Cảnh báo viêm tụy cấp và ung thư tuyến giáp thể tủy của nhóm Đồng vận GLP-1:</strong>
              <br>&bull; Liraglutid, Semaglutid có cảnh báo nguy cơ viêm tụy cấp hoại tử; Chống chỉ định tuyệt đối ở bệnh nhân có tiền sử bản thân hoặc gia đình mắc ung thư biểu mô tuyến giáp thể tủy (MTC) hoặc hội chứng đa u nội tiết typ 2 (MEN 2).
            </li>
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
        <div class="chapter-sec-heading">🎯 1. Thuốc Chống Đông Máu (Anticoagulants):</div>
        <ul class="chapter-point-list">
          <li><strong>Heparin không phân đoạn (UFH):</strong> Gắn vào Antithrombin III (AT-III) → tăng tốc độ bất hoạt Thrombin (IIa) và Yếu tố Xa lên 1000 lần. Theo dõi bằng chỉ số <strong>aPTT</strong> (duy trì 1.5 &minus; 2.5 lần chứng). Thuốc giải độc đặc hiệu: <strong>Protamin sulfat</strong> (1 mg trung hòa khoảng 100 UI heparin). ADR: Giảm tiểu cầu do heparin (HIT).</li>
          <li><strong>Heparin trọng lượng phân tử thấp (LMWH - Enoxaparin):</strong> Ức chế chọn lọc yếu tố Xa nhiều hơn Thrombin (tỷ lệ 3:1). Không cần theo dõi xét nghiệm đông máu thường quy. Thải trừ qua thận → phải chỉnh liều khi suy thận.</li>
          <li><strong>Thuốc kháng Vitamin K (Warfarin, Sintrom):</strong>
            <br>&bull; <em>Cơ chế:</em> Ức chế enzym Vitamin K Epoxide Reductase → ngăn cản quá trình γ-carboxyl hóa các yếu tố đông máu phụ thuộc vitamin K: <strong>II, VII, IX, X</strong>.
            <br>&bull; <em>Theo dõi:</em> Chỉ số <strong>INR</strong> (mục tiêu 2.0 &minus; 3.0).
            <br>&bull; <em>Thuốc giải độc:</em> <strong>Vitamin K₁ (Phytomenadione)</strong>; trường hợp xuất huyết nặng cấp dùng Huyết tương tươi đông lạnh (FFP) hoặc phức hợp Prothrombin cô đặc (PCC).
            <br>&bull; <em>Chống chỉ định:</em> <strong>Phụ nữ mang thai</strong> (gây dị tật xương mặt, quái thai, xuất huyết).
          </li>
          <li><strong>DOAC / NOAC (Rivaroxaban, Apixaban, Dabigatran):</strong> Dabigatran chẹn IIa trực tiếp (giải độc bằng <em>Idarucizumab</em>). Rivaroxaban, Apixaban chẹn Xa trực tiếp (giải độc bằng <em>Andexanet alfa</em>). Không cần thử máu theo dõi INR.</li>
        </ul>

        <div class="chapter-sec-heading">🩸 2. Thuốc Chống Kết Tập Tiểu Cầu &amp; Tiêu Sợi Huyết:</div>
        <ul class="chapter-point-list">
          <li><strong>Aspirin liều thấp (75 &minus; 100 mg/ngày):</strong> Ức chế không hồi phục enzym COX-1 tiểu cầu → ức chế tạo Thromboxane A₂ suốt đời sống tiểu cầu (7 &minus; 10 ngày).</li>
          <li><strong>Clopidogrel (Plavix):</strong> Chẹn thụ thể P2Y₁₂ của ADP trên màng tiểu cầu. Tránh dùng cùng Omeprazole.</li>
          <li><strong>Thuốc tiêu sợi huyết (Alteplase - rt-PA):</strong> Hoạt hóa Plasminogen thành Plasmin → làm tan cục máu đông fibrin. Dùng trong nhồi máu cơ tim cấp và đột quỵ thiếu máu não cấp giờ vàng.</li>
          <li><strong>Thuốc cầm máu:</strong> <strong>Acid tranexamic</strong> ức chế plasminogen → ngăn ngừa tiêu sợi huyết.</li>
        </ul>
                <!-- BẢNG VÀNG: CÁC ĐIỂM CHÚ Ý ĐẶC BIỆT ĐỘC NHẤT VÔ NHỊ -->
        <div class="chapter-sec-heading" style="color: #dc2626;">🔥 3. Những Điểm Chú Ý Đặc Biệt &amp; Độc Nhất Vô Nhị (Chỉ Có Ở Thuốc Đông Cầm Máu - Trọng Tâm Đề Thi):</div>
        <div style="background: var(--surface-alt); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1.25rem; font-size: 0.88rem; line-height: 1.6;">
          <ul class="chapter-point-list" style="display: flex; flex-direction: column; gap: 0.75rem;">
            <li>
              <strong style="color: #dc2626;">1. Giảm tiểu cầu do Heparin qua trung gian miễn dịch (Hội chứng HIT):</strong>
              <br>&bull; Cơ thể sinh kháng thể IgG kháng phức hợp Heparin - Yếu tố 4 tiểu cầu (PF4). Kháng thể này kích hoạt kết tập tiểu cầu ồ ạt làm số lượng tiểu cầu giảm sâu (&gt; 50%), nhưng nghịch lý lại <strong>gây bùng phát huyết khối tắc mạch đe dọa tính mạng</strong>! Xử trí: ngừng Heparin lập tức, cấm truyền tiểu cầu, chuyển sang thuốc ức chế trực tiếp Thrombin (Argatroban).
            </li>
            <li>
              <strong style="color: #be123c;">2. Hoại tử da do Warfarin (Warfarin-induced Skin Necrosis) &amp; Nguyên tắc gối đầu:</strong>
              <br>&bull; <em>Cơ chế:</em> Warfarin ức chế vitamin K epoxide reductase làm giảm các yếu tố II, VII, IX, X và cả các chất chống đông tự nhiên là Protein C và Protein S. Do Protein C có bán thải rất ngắn (8h) nên bị suy giảm trước, dẫn đến trạng thái tăng đông nghịch lý trong 2-3 ngày đầu gây tắc vi mạch hoại tử da.
              <br>&bull; <em>Nguyên tắc bắt buộc:</em> Luôn phải <strong>gối đầu bằng Heparin ít nhất 5 ngày</strong> cho đến khi chỉ số INR đạt mục tiêu điều trị (2.0 - 3.0) trong 2 ngày liên tiếp mới được ngưng Heparin.
            </li>
            <li>
              <strong style="color: #059669;">3. Bảng vàng Thuốc giải độc đặc hiệu (Antidotes) của thuốc chống đông:</strong>
              <br>&bull; <strong>Heparin tiêu chuẩn:</strong> Protamin sulfat (1 mg trung hòa 100 UI heparin).
              <br>&bull; <strong>Warfarin:</strong> Vitamin K₁ (Phytomenadion) tiêm tĩnh mạch chậm + Huyết tương tươi đông lạnh (FFP) hoặc Phức hợp Prothrombin cô đặc (PCC).
              <br>&bull; <strong>Dabigatran (Kháng IIa):</strong> Kháng thể đơn dòng Idarucizumab (Praxbind).
              <br>&bull; <strong>Rivaroxaban, Apixaban (Kháng Xa):</strong> Andexanet alfa.
            </li>
            <li>
              <strong style="color: #7c3aed;">4. Kháng kết tập tiểu cầu không hồi phục của Aspirin suốt đời sống tiểu cầu:</strong>
              <br>&bull; Aspirin acetyl hóa cộng hóa trị không hồi phục enzym COX-1 của tiểu cầu. Do tiểu cầu không có nhân để tổng hợp enzym mới nên tác dụng ức chế kéo dài suốt 7 - 10 ngày đời sống của tiểu cầu → Bắt buộc phải ngừng Aspirin trước phẫu thuật lớn ít nhất 7 ngày.
            </li>
            <li>
              <strong style="color: #2563eb;">5. Cửa sổ thời gian vàng của Thuốc tiêu sợi huyết (rtPA / Alteplase):</strong>
              <br>&bull; Chỉ định trong <strong>nhồi máu não cấp trước 4.5 giờ</strong> và <strong>nhồi máu cơ tim cấp trước 12 giờ</strong> kể từ thời điểm khởi phát triệu chứng. Dùng muộn hơn nguy cơ xuất huyết não chuyển dạng tử vong cao hơn nhiều so với lợi ích tái tưới máu.
            </li>
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
        <div class="chapter-sec-heading">🎯 1. Vitamin Tan Trong Dầu (A, D, E, K):</div>
        <ul class="chapter-point-list">
          <li>Đặc điểm chung: Hấp thu cùng chất béo, tích lũy trong gan và mô mỡ → <strong>dễ gây ngộ độc khi dùng quá liều</strong>.</li>
          <li><strong>Vitamin A (Retinol):</strong> Tạo sắc tố thị giác rhodopsin. Thiếu gây quáng gà, khô mắt. Thừa liều cao gây quái thai (chống chỉ định phụ nữ mang thai).</li>
          <li><strong>Vitamin D (D₃ Cholecalciferol):</strong> Điều hòa hấp thu Calci và Phosphat ở ruột. Thiếu gây còi xương ở trẻ em, nhuyễn xương ở người lớn.</li>
          <li><strong>Vitamin K (K₁, K₂):</strong> Coenzym tổng hợp yếu tố đông máu II, VII, IX, X.</li>
        </ul>

        <div class="chapter-sec-heading">💧 2. Vitamin Tan Trong Nước (Nhóm B &amp; Vitamin C):</div>
        <ul class="chapter-point-list">
          <li><strong>Vitamin B₁ (Thiamin):</strong> Thiếu gây bệnh <strong>Beriberi</strong> (tê phù) và hội chứng <strong>Wernicke-Korsakoff</strong> ở người nghiện rượu (lú lẫn, mất điều hòa).</li>
          <li><strong>Vitamin B₃ (Niacin / PP):</strong> Thiếu gây bệnh <strong>Pellagra với tam chứng 3D</strong>: <em>Dermatitis</em> (viêm da đối xứng), <em>Diarrhea</em> (tiêu chảy), <em>Dementia</em> (sa sút trí tuệ).</li>
          <li><strong>Vitamin B₆ (Pyridoxin):</strong> Phải phối hợp bắt buộc khi dùng kháng lao Isoniazid (INH) để phòng ngừa viêm dây thần kinh ngoại biên.</li>
          <li><strong>Vitamin B₉ (Acid folic):</strong> Thiếu gây thiếu máu hồng cầu khổng lồ và <strong>dị tật ống thần kinh thai nhi</strong>. Cần bổ sung trước và trong thai kỳ.</li>
          <li><strong>Vitamin B₁₂ (Cyanocobalamin):</strong> Thiếu gây thiếu máu ác tính Biermer và thoái hóa tủy sống.</li>
          <li><strong>Vitamin C (Acid ascorbic):</strong> Tham gia tổng hợp collagen, tăng hấp thu sắt. Thiếu gây bệnh <strong>Scorbut</strong> (chảy máu chân răng, xuất huyết dưới da).</li>
        </ul>
                <!-- BẢNG VÀNG: CÁC ĐIỂM CHÚ Ý ĐẶC BIỆT ĐỘC NHẤT VÔ NHỊ -->
        <div class="chapter-sec-heading" style="color: #dc2626;">🔥 3. Những Điểm Chú Ý Đặc Biệt &amp; Độc Nhất Vô Nhị (Chỉ Có Ở Vitamin - Trọng Tâm Đề Thi):</div>
        <div style="background: var(--surface-alt); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1.25rem; font-size: 0.88rem; line-height: 1.6;">
          <ul class="chapter-point-list" style="display: flex; flex-direction: column; gap: 0.75rem;">
            <li>
              <strong style="color: #dc2626;">1. Hội chứng não Wernicke - Korsakoff &amp; Quy tắc cấp cứu truyền dịch ở người nghiện rượu:</strong>
              <br>&bull; Nghiện rượu mạn tính gây thiếu hụt nghiêm trọng Vitamin B₁ (Thiamin). CẤM TUYỆT ĐỐI truyền dịch dung dịch Glucose trước khi tiêm Thiamin! Nạp glucose vào cơ thể sẽ thúc đẩy chu trình chuyển hóa glucid tiêu thụ sạch lượng thiamin dự trữ ít ỏi cuối cùng, đẩy bệnh nhân vào tổn thương tế bào não cấp tính (hội chứng não Wernicke) hôn mê tử vong!
            </li>
            <li>
              <strong style="color: #b45309;">2. Bẫy Axit Folic (B₉) che giấu tổn thương thần kinh không hồi phục của Vitamin B₁₂:</strong>
              <br>&bull; Thiếu máu hồng cầu to có thể do thiếu B₉ hoặc B₁₂. Nếu bệnh nhân thiếu B₁₂ mà chỉ bổ sung Acid folic đơn độc, công thức máu sẽ hồi phục bình thường nhưng tổn thương thoái hóa sợi trục cột bên và cột sau tủy sống do thiếu B₁₂ vẫn âm thầm tiến triển thành liệt tàn phế vĩnh viễn. Bắt buộc phải định lượng cả hai trước khi điều trị!
            </li>
            <li>
              <strong style="color: #be123c;">3. Độc tính gây dị tật thai nhi nghiêm trọng của Vitamin A liều cao (Isotretinoin):</strong>
              <br>&bull; Vitamin A liều cao gây biến dạng sọ mặt, dị tật tim mạch và hệ thần kinh trung ương thai nhi. Phụ nữ dùng thuốc trị mụn Isotretinoin bắt buộc phải cam kết tránh thai 1 tháng trước, trong khi dùng và 1 tháng sau khi ngừng thuốc.
            </li>
            <li>
              <strong style="color: #7c3aed;">4. Nguy cơ sỏi thận Oxalat và Cơn gút cấp do Vitamin C liều cao:</strong>
              <br>&bull; Acid ascorbic chuyển hóa thành acid oxalic kết tủa với calci tạo sỏi Calci oxalat ở thận và niệu quản; đồng thời toan hóa nước tiểu cản trở bài tiết acid uric có thể kích hoạt cơn viêm khớp gút cấp tính.
            </li>
            <li>
              <strong style="color: #059669;">5. Tương tác đối nghịch triệt tiêu giữa Vitamin K và Thuốc chống đông Warfarin:</strong>
              <br>&bull; Vitamin K₁ trong thức ăn (rau có màu xanh đậm) đối kháng trực tiếp cơ chế của Warfarin làm chỉ số INR tụt sâu, mất hoàn toàn tác dụng chống đông ngừa huyết khối. Bệnh nhân dùng Warfarin cần giữ ổn định lượng rau xanh ăn hàng ngày.
            </li>
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
        <div class="chapter-sec-heading">🎯 1. Chế Phẩm Sắt (Fe):</div>
        <ul class="chapter-point-list">
          <li><strong>Cách dùng:</strong> Muối sắt II đường uống (Sắt sulfat, fumarat) dễ hấp thu nhất. Nên uống lúc bụng đói hoặc uống kèm Vitamin C/nước cam (acid giúp khử Fe³⁺ thành Fe²⁺). Tránh uống cùng sữa (canxi), trà (tanin), cà phê, thuốc kháng acid.</li>
          <li><strong>Tác dụng phụ:</strong> Táo bón, buồn nôn, <strong>phân màu đen xám</strong> (vô hại, cần dặn trước để bệnh nhân không lo sợ xuất huyết tiêu hóa).</li>
          <li><strong>Ngộ độc sắt cấp:</strong> Hay gặp ở trẻ nhỏ uống nhầm viên sắt. Thuốc giải độc đặc hiệu tạo chelat: <strong>Deferoxamin (Desferal)</strong>.</li>
        </ul>

        <div class="chapter-sec-heading">🧬 2. Erythropoietin (EPO / Epoetin alfa):</div>
        <ul class="chapter-point-list">
          <li>Hormone do tế bào quanh ống thận tiết ra kích thích tủy xương sinh hồng cầu.</li>
          <li><strong>Chỉ định chính:</strong> Thiếu máu do <strong>suy thận mạn tính</strong>, thiếu máu do hóa trị ung thư hoặc thuốc ARV (Zidovudine).</li>
          <li>Tác dụng phụ: Gây tăng huyết áp và tăng nguy cơ huyết khối tắc mạch.</li>
        </ul>
                <!-- BẢNG VÀNG: CÁC ĐIỂM CHÚ Ý ĐẶC BIỆT ĐỘC NHẤT VÔ NHỊ -->
        <div class="chapter-sec-heading" style="color: #dc2626;">🔥 3. Những Điểm Chú Ý Đặc Biệt &amp; Độc Nhất Vô Nhị (Chỉ Có Ở Thuốc Chữa Thiếu Máu - Trọng Tâm Đề Thi):</div>
        <div style="background: var(--surface-alt); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1.25rem; font-size: 0.88rem; line-height: 1.6;">
          <ul class="chapter-point-list" style="display: flex; flex-direction: column; gap: 0.75rem;">
            <li>
              <strong style="color: #dc2626;">1. Ngộ độc Sắt cấp tính ở trẻ em &amp; Thuốc gắp sắt Deferoxamin:</strong>
              <br>&bull; Trẻ uống nhầm viên sắt gây hoại tử niêm mạc đường tiêu hóa, nôn máu, đi ngoài phân đen, sốc trụy mạch và toan chuyển hóa nặng. Thuốc giải độc chelate đặc hiệu là <strong>Deferoxamin</strong> tạo phức ferrioxamine màu đỏ cam đào thải qua nước tiểu.
            </li>
            <li>
              <strong style="color: #2563eb;">2. Bệnh thiếu máu ác tính Biermer: Tiêm bắp B₁₂ suốt đời, uống hoàn toàn vô tác dụng:</strong>
              <br>&bull; Do tự kháng thể phá hủy tế bào viền dạ dày làm mất Yếu tố nội tại (Intrinsic Factor) cần thiết để hấp thu Vitamin B₁₂ tại đoạn cuối hồi tràng. Bệnh nhân bắt buộc phải tiêm bắp Hydroxocobalamin định kỳ suốt đời; dùng đường uống hoàn toàn không hấp thu được!
            </li>
            <li>
              <strong style="color: #d97706;">3. Các yếu tố cản trở và tăng cường hấp thu Sắt đường uống:</strong>
              <br>&bull; <em>Cản trở hấp thu:</em> Tanin trong trà, calci trong sữa, thuốc kháng toan Antacid và PPI làm giảm acid dạ dày ức chế chuyển Fe³⁺ thành Fe²⁺.
              <br>&bull; <em>Tăng cường hấp thu:</em> Uống cùng <strong>Vitamin C (Acid ascorbic)</strong> hoặc nước cam giúp duy trì Fe²⁺ dạng hòa tan dễ hấp thu qua niêm mạc tá tràng.
            </li>
            <li>
              <strong style="color: #7c3aed;">4. Biến chứng tăng huyết áp kịch phát và Tắc mạch của Erythropoietin (EPO):</strong>
              <br>&bull; Kích thích tủy xương tăng sản xuất hồng cầu quá nhanh làm tăng độ nhớt của máu và sức cản ngoại vi → gây tăng huyết áp dữ dội, cơn co giật tăng huyết áp và nguy cơ huyết khối mạch não, mạch vành nếu nồng độ Hemoglobin tăng quá nhanh (&gt; 1 g/dL trong 2 tuần).
            </li>
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
        <div class="chapter-sec-heading">🎯 1. Thuốc Trị Herpes &amp; Thủy Đậu (Acyclovir, Valacyclovir):</div>
        <ul class="chapter-point-list">
          <li><strong>Cơ chế:</strong> Cần enzym Thymidine kinase của virus phosphoryl hóa bước đầu → ức chế chọn lọc enzym <strong>ADN polymerase của virus</strong> và gắn vào kết thúc chuỗi ADN virus.</li>
          <li>Valacyclovir là tiền dược có sinh khả dụng đường uống cao gấp 3-5 lần Acyclovir. Độc tính: Độc thận do kết tủa tinh thể trong ống thận khi tiêm IV nhanh (cần bù đủ dịch).</li>
        </ul>

        <div class="chapter-sec-heading">🦆 2. Thuốc Trị Cúm (Oseltamivir - Tamiflu):</div>
        <ul class="chapter-point-list">
          <li>Ức chế enzym <strong>Neuraminidase</strong> → ngăn cản virus giải phóng khỏi tế bào vật chủ để lây lan sang tế bào mới. <strong>Hiệu quả tối ưu nhất khi dùng trong vòng 48 giờ đầu</strong> từ khi khởi phát triệu chứng sốt cúm.</li>
        </ul>

        <div class="chapter-sec-heading">🎗️ 3. Thuốc Kháng Retrovirus (HIV - ARV):</div>
        <ul class="chapter-point-list">
          <li><strong>NRTIs (Ức chế men sao chép ngược nucleoside):</strong> Zidovudine (AZT - gây suy tủy, thiếu máu nặng), Tenofovir (TDF - gây độc thận và giảm mật độ xương).</li>
          <li><strong>NNRTIs (Không nucleoside):</strong> Efavirenz (gây ác mộng, rối loạn tâm thần kinh, quái thai).</li>
          <li><strong>PIs (Ức chế Protease):</strong> Ritonavir (ức chế rất mạnh CYP3A4 → dùng liều nhỏ làm "booster" tăng nồng độ các thuốc PI khác).</li>
          <li><strong>INSTIs (Ức chế Integrase):</strong> Dolutegravir (phác đồ ưu tiên hàng đầu hiện nay, hiệu lực cao, ít kháng thuốc).</li>
        </ul>
                <!-- BẢNG VÀNG: CÁC ĐIỂM CHÚ Ý ĐẶC BIỆT ĐỘC NHẤT VÔ NHỊ -->
        <div class="chapter-sec-heading" style="color: #dc2626;">🔥 3. Những Điểm Chú Ý Đặc Biệt &amp; Độc Nhất Vô Nhị (Chỉ Có Ở Thuốc Kháng Virus - Trọng Tâm Đề Thi):</div>
        <div style="background: var(--surface-alt); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1.25rem; font-size: 0.88rem; line-height: 1.6;">
          <ul class="chapter-point-list" style="display: flex; flex-direction: column; gap: 0.75rem;">
            <li>
              <strong style="color: #059669;">1. Tính chọn lọc tuyệt đối của Acyclovir nhờ Enzym Thymidine Kinase của virus:</strong>
              <br>&bull; Acyclovir là tiền chất trơ. Bước phosphoryl hóa đầu tiên bắt buộc phải có enzym Thymidine Kinase đặc hiệu của virus Herpes xúc tác tạo acyclovir monophosphat; các enzym của tế bào người không chuyển hóa được → Thuốc chỉ được tích tụ và hoạt hóa trong các tế bào đã bị nhiễm virus, cực kỳ an toàn cho các tế bào lành của cơ thể.
            </li>
            <li>
              <strong style="color: #dc2626;">2. Suy thận cấp do kết tinh tinh thể Acyclovir tại ống thận:</strong>
              <br>&bull; Khi truyền tĩnh mạch Acyclovir nhanh hoặc liều cao, thuốc ít tan kết tinh thành các tinh thể hình kim trong lòng ống thận gây tắc nghẽn vô niệu cấp tính. Bắt buộc phải <strong>truyền tĩnh mạch chậm ít nhất 60 phút</strong> và bù đủ dịch đảm bảo lưu lượng nước tiểu dồi dào.
            </li>
            <li>
              <strong style="color: #2563eb;">3. Cửa sổ thời gian vàng 48 giờ của Oseltamivir (Tamiflu):</strong>
              <br>&bull; Thuốc ức chế enzym Neuraminidase ngăn virus cúm A và B đâm chồi thoát khỏi tế bào vật chủ để lây lan. Thuốc chỉ có hiệu lực lâm sàng rõ rệt nếu được bắt đầu <strong>trong vòng 48 giờ đầu tiên kể từ khi khởi phát triệu chứng sốt cúm</strong>.
            </li>
            <li>
              <strong style="color: #be123c;">4. Phản ứng quá mẫn toàn thân đe dọa tính mạng của Abacavir &amp; Gen HLA-B*5701:</strong>
              <br>&bull; Thuốc kháng HIV Abacavir gây phản ứng sốc quá mẫn toàn thân (sốt cao, phát ban, suy hô hấp tụt huyết áp tử vong) ở bệnh nhân mang alen di truyền HLA-B*5701. Bắt buộc phải xét nghiệm sàng lọc gen HLA-B*5701 trước khi kê đơn.
            </li>
            <li>
              <strong style="color: #7c3aed;">5. Hội chứng loạn dưỡng mỡ và Rối loạn chuyển hóa do Thuốc ức chế Protease (PI):</strong>
              <br>&bull; Ritonavir, Lopinavir gây hội chứng phân bố lại mỡ: teo mỡ ở mặt và chi nhưng tích mỡ nội tạng ở bụng và sau gáy ("gù trâu" - Buffalo hump), đi kèm tăng triglycerid máu, tăng đề kháng insulin gây đái tháo đường.
            </li>
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
        <div class="chapter-sec-heading">🎯 1. Bảng Độc Tính Đặc Thù &amp; Chất Giải Cứu Kinh Điển Trong Hóa Trị:</div>
        <div class="cs-table-wrap">
          <table class="cs-table">
            <thead>
              <tr><th>Thuốc Ung Thư</th><th>Cơ Chế Phân Tử</th><th>Độc Tính Đặc Thù Hay Thi</th><th>Thuốc Dự Phòng / Giải Cứu</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Cyclophosphamid</strong></td>
                <td>Tác nhân Alkyl hóa tạo liên kết chéo ADN</td>
                <td><strong>Viêm bàng quang xuất huyết</strong> do chất chuyển hóa Acrolein</td>
                <td><strong>Mesna</strong> (gắn trung hòa Acrolein) + Uống nhiều nước</td>
              </tr>
              <tr>
                <td><strong>Methotrexate (MTX)</strong></td>
                <td>Ức chế enzym Dihydrofolate Reductase (DHFR)</td>
                <td>Suy tủy xương nặng, loét niêm mạc miệng, độc thận</td>
                <td><strong>Leucovorin (Acid folinic)</strong> giải cứu tế bào lành sau liều cao</td>
              </tr>
              <tr>
                <td><strong>Doxorubicin</strong></td>
                <td>Kháng sinh nhóm Anthracycline tạo gốc tự do</td>
                <td><strong>Độc cơ tim tích lũy</strong> gây bệnh cơ tim giãn suy tim sung huyết</td>
                <td><strong>Dexrazoxane</strong> (chất tạo chelat sắt bảo vệ cơ tim)</td>
              </tr>
              <tr>
                <td><strong>Cisplatin</strong></td>
                <td>Phức hợp Platin gắn chéo ADN</td>
                <td><strong>Độc thận nặng</strong>, nôn dữ dội, độc thính giác</td>
                <td>Truyền dịch muối đẳng trương thể tích lớn trước và sau hóa trị</td>
              </tr>
              <tr>
                <td><strong>Vincristin</strong></td>
                <td>Ức chế trùng hợp vi ống tubulin ở pha M</td>
                <td><strong>Độc thần kinh ngoại biên</strong> (tê bì kiến bò đầu chi, mất phản xạ)</td>
                <td><strong>CHỈ TIÊM TĨNH MẠCH, TIÊM TỦY SỐNG GÂY TỬ VONG 100%</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
                <!-- BẢNG VÀNG: CÁC ĐIỂM CHÚ Ý ĐẶC BIỆT ĐỘC NHẤT VÔ NHỊ -->
        <div class="chapter-sec-heading" style="color: #dc2626;">🔥 3. Những Điểm Chú Ý Đặc Biệt &amp; Độc Nhất Vô Nhị (Chỉ Có Ở Thuốc Chống Ung Thư - Trọng Tâm Đề Thi):</div>
        <div style="background: var(--surface-alt); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1.25rem; font-size: 0.88rem; line-height: 1.6;">
          <ul class="chapter-point-list" style="display: flex; flex-direction: column; gap: 0.75rem;">
            <li>
              <strong style="color: #dc2626;">1. Viêm bàng quang chảy máu của Cyclophosphamid &amp; Thuốc giải độc MESNA:</strong>
              <br>&bull; Cyclophosphamid chuyển hóa tạo thành chất Acrolein độc hại tích tụ ở bàng quang gây hoại tử niêm mạc và đái máu dữ dội. Thuốc giải độc bắt buộc dùng kèm là <strong>MESNA</strong> (Natri 2-mercaptoethanesulfonat) cung cấp nhóm -SH tự do liên kết trung hòa Acrolein không độc đào thải ra ngoài.
            </li>
            <li>
              <strong style="color: #be123c;">2. Độc tính cơ tim suy tim tích lũy của Doxorubicin &amp; Thuốc bảo vệ tim Dexrazoxan:</strong>
              <br>&bull; Doxorubicin tạo phức với sắt sinh gốc tự do phá hủy màng ty thể tế bào cơ tim gây bệnh cơ tim giãn và suy tim ứ huyết không hồi phục phụ thuộc liều tích lũy (&gt; 450 - 550 mg/m²). Thuốc giải độc bảo vệ tim là <strong>Dexrazoxan</strong> (chất chelate hóa sắt nội bào).
            </li>
            <li>
              <strong style="color: #b45309;">3. Độc tính suy thận và điếc tai của Cisplatin &amp; Liệu pháp truyền dịch ồ ạt:</strong>
              <br>&bull; Cisplatin tích tụ ở ống thận gây hoại tử ống thận cấp tính và phá hủy tế bào lông ốc tai. Bắt buộc phải truyền bù dịch NaCl 0.9% thể tích lớn (2-3 lít/ngày) kèm thuốc lợi tiểu thẩm thấu trước và sau khi truyền thuốc.
            </li>
            <li>
              <strong style="color: #7c3aed;">4. Xơ hóa phổi mô kẽ của Bleomycin:</strong>
              <br>&bull; Tế bào mô phổi có nồng độ enzym bất hoạt Bleomycin hydrolase rất thấp nên thuốc tích lũy gây viêm phổi kẽ và xơ phổi tiến triển không hồi phục phụ thuộc liều tích lũy. Bắt buộc kiểm tra chức năng thông khí phổi định kỳ.
            </li>
            <li>
              <strong style="color: #059669;">5. Liệu pháp "Giải Cứu" bằng Leucovorin (Acid Folinic) sau Methotrexat liều cao:</strong>
              <br>&bull; Methotrexat ức chế enzym Dihydrofolate Reductase (DHFR) chặn đứng phân chia tế bào. Sau khi tiêu diệt tế bào ung thư, truyền <strong>Leucovorin</strong> để cung cấp folate dạng hoạt tính cho các tế bào lành của tủy xương và niêm mạc ruột hồi phục sống sót.
            </li>
            <li>
              <strong style="color: #2563eb;">6. Độc tính thần kinh ngoại biên của Vincristin &amp; Cảnh báo cấm tiêm tủy sống:</strong>
              <br>&bull; Vincristin ức chế trùng hợp vi ống gây dị cảm đầu chi dạng mang găng, mất phản xạ gân xương và táo bón liệt ruột. CẤM TUYỆT ĐỐI tiêm vào khoang dưới nhện tủy sống vì gây hoại tử tủy phù não tử vong 100%!
            </li>
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
        <div class="chapter-sec-heading">🎯 1. Nguyên Tắc Xử Trí Chung Khi Ngộ Độc Cấp:</div>
        <ul class="chapter-point-list">
          <li><strong>Hạn chế hấp thu chất độc:</strong>
            <br>&bull; <em>Rửa dạ dày:</em> Chỉ hiệu quả trong 1 &minus; 2 giờ đầu sau khi uống chất độc. <strong>Chống chỉ định tuyệt đối:</strong> Uống acid hoặc kiềm mạnh (nguy cơ thủng thực quản/dạ dày), uống xăng dầu/hydrocarbons (nguy cơ sặc viêm phổi hít), bệnh nhân hôn mê chưa đặt ống nội khí quản.
            <br>&bull; <em>Than hoạt tính (Activated charcoal):</em> Liều 1 g/kg. Hấp phụ chất độc trong lòng ruột. <strong>Không có tác dụng với:</strong> Kim loại nặng (Sắt, Chì, Thủy ngân), cồn (Ethanol, Methanol), acid/kiềm mạnh, muối Lithi.
          </li>
          <li><strong>Tăng thải trừ chất độc:</strong> Kiềm hóa nước tiểu bằng Natri hydrocarbonat (NaHCO₃) để tăng thải trừ các thuốc acid yếu (Barbiturat, Aspirin); Thẩm phân phúc mạc hoặc chạy thận nhân tạo.</li>
        </ul>

        <div class="chapter-sec-heading">⚡ 2. Thuốc Giải Độc Trọng Tâm Bài 20:</div>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 0.5rem;">
          Toàn bộ bảng thuốc giải độc đặc hiệu đã được tổng hợp chi tiết ở Tab <strong>"⚡ Thuốc Giải Độc Cấp Cứu (Antidotes)"</strong>. Hãy bấm sang tab đó để ôn tập trọn vẹn 18 cặp giải độc kinh điển!
        </p>
                <!-- BẢNG VÀNG: CÁC ĐIỂM CHÚ Ý ĐẶC BIỆT ĐỘC NHẤT VÔ NHỊ -->
        <div class="chapter-sec-heading" style="color: #dc2626;">🔥 3. Những Điểm Chú Ý Đặc Biệt &amp; Độc Nhất Vô Nhị (Chỉ Có Ở Thuốc Trị Ngộ Độc - Trọng Tâm Đề Thi):</div>
        <div style="background: var(--surface-alt); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1.25rem; font-size: 0.88rem; line-height: 1.6;">
          <ul class="chapter-point-list" style="display: flex; flex-direction: column; gap: 0.75rem;">
            <li>
              <strong style="color: #dc2626;">1. Ngộ độc Paracetamol &amp; Cửa sổ thời gian vàng 8 - 10 giờ của N-Acetylcystein (NAC):</strong>
              <br>&bull; Paracetamol liều cao cạn kiệt Glutathion của gan, chất độc NAPQI gắn vào đại phân tử gây hoại tử tế bào gan ồ ạt sau 24-72h. Thuốc giải độc đặc hiệu <strong>N-Acetylcystein (NAC)</strong> cung cấp nhóm -SH tiền chất glutathion; dùng trong 8-10 giờ đầu bảo vệ gan đạt tỷ lệ cứu sống gần như 100%.
            </li>
            <li>
              <strong style="color: #b45309;">2. Ngộ độc thuốc trừ sâu Phospho hữu cơ: Bộ đôi Atropin + Pralidoxime (PAM):</strong>
              <br>&bull; Ức chế không hồi phục enzym Acetylcholinesterase (AChE) làm ứ đọng acetylcholin gây hội chứng cường cholinergic (co đồng tử, tăng tiết đờm dãi, co thắt phế quản, suy hô hấp).
              <br>&bull; <em>Xử trí:</em> Dùng <strong>Atropin</strong> liều cao để đối kháng thụ thể Muscarinic cắt đứt các triệu chứng ngạt thở tiết dịch; đồng thời dùng <strong>Pralidoxime (PAM)</strong> để giải phóng và tái hoạt hóa enzym AChE trước khi enzym bị "lão hóa" (Aging) gắn chặt vĩnh viễn.
            </li>
            <li>
              <strong style="color: #2563eb;">3. Ngộ độc Morphin / Opiate &amp; Cảnh báo bán thải ngắn của Naloxone:</strong>
              <br>&bull; Tam chứng kinh điển: ức chế trung khu hô hấp (thở chậm &lt; 8 lần/phút), đồng tử co nhỏ như đầu kim, hôn mê sâu. Giải độc bằng <strong>Naloxone</strong> tiêm tĩnh mạch đối kháng cạnh tranh thụ thể opioid. Lưu ý bán thải của Naloxone chỉ 30 - 90 phút (ngắn hơn morphin), do đó bệnh nhân có thể rơi lại vào hôn mê ngừng thở khi Naloxone hết tác dụng → bắt buộc phải theo dõi sát và tiêm nhắc lại.
            </li>
            <li>
              <strong style="color: #7c3aed;">4. Ngộ độc Benzodiazepin (Thuốc an thần gây ngủ) &amp; Flumazenil:</strong>
              <br>&bull; <strong>Flumazenil</strong> là chất đối kháng cạnh tranh đặc hiệu trên thụ thể GABA_A. Thận trọng đặc biệt: không dùng nếu bệnh nhân có tiền sử động kinh hoặc ngộ độc kèm thuốc chống trầm cảm 3 vòng vì Flumazenil làm mất tác dụng chống co giật của benzodiazepin gây bùng phát cơn động kinh kháng trị!
            </li>
            <li>
              <strong style="color: #059669;">5. Ngộ độc Methemoglobin &amp; Thuốc giải độc Xanh Methylen (Methylene Blue):</strong>
              <br>&bull; Các chất oxy hóa (Dapsone, Nitrit, thuốc trừ sâu) oxy hóa Fe²⁺ trong hemoglobin thành Fe³⁺ tạo Methemoglobin không vận chuyển được oxy khiến máu có màu nâu sô-cô-la và bệnh nhân tím tái toàn thân. Xanh methylen hoạt hóa hệ thống enzym NADPH-MetHb reductase khử Fe³⁺ trở lại Fe²⁺ khôi phục chức năng hô hấp của máu.
            </li>
            <li>
              <strong style="color: #be123c;">6. Phác đồ giải độc Cyanua đa tầng:</strong>
              <br>&bull; Cyanua ức chế enzym Cytochrom oxidase trong chuỗi hô hấp tế bào gây ngạt mô tức khắc.
              <br>&bull; <em>Phác đồ:</em> Hít Amyl nitrit + Tiêm tĩnh mạch Natri nitrit (tạo Methemoglobin để hút cyanua ra khỏi tế bào tạo cyanmethemoglobin) → Sau đó tiêm tĩnh mạch Natri thiosulfat (cung cấp lưu huỳnh cho enzym rhodanese chuyển cyanua thành thiocyanat không độc đào thải qua thận); hoặc tiêm truyền tĩnh mạch Hydroxocobalamin (Vitamin B₁₂a) tạo Cyanocobalamin an toàn.
            </li>
          </ul>
        </div>

        <div style="margin-top: 0.75rem;">
          <button class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.35rem 0.75rem;" onclick="jumpToDl2Topic('Thuốc/trong điều trị ngộ độc')">
            🎯 Luyện đề trắc nghiệm Bài 20: Điều Trị Ngộ Độc
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
