// scripts/create_pharmacology_html.js
const fs = require('fs');
const path = require('path');

const pharmacologyHTML = `
      <!-- ========================================== -->
      <!-- SECTION 6: DƯỢC LÝ 1 & 2 TRỌNG TÂM CHO DƯỢC LÂM SÀNG -->
      <!-- ========================================== -->
      <div class="question-card cs-searchable-item" id="cs-sec-pharmacology" style="display: \${isPharmacology ? 'block' : 'none'};">
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
            <div class="chapter-accordion-header \${openChaptersState['dl1_adme'] ? 'active' : ''}" id="dl-head-dl1_adme" onclick="toggleDlAccordion('dl1_adme')">
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
            <div class="chapter-accordion-body" id="dl-body-dl1_adme" style="display: \${openChaptersState['dl1_adme'] ? 'block' : 'none'};">
              
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
            <div class="chapter-accordion-header \${openChaptersState['dl1_tktv'] ? 'active' : ''}" id="dl-head-dl1_tktv" onclick="toggleDlAccordion('dl1_tktv')">
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
            <div class="chapter-accordion-body" id="dl-body-dl1_tktv" style="display: \${openChaptersState['dl1_tktv'] ? 'block' : 'none'};">
              
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
            <div class="chapter-accordion-header \${openChaptersState['dl1_tktw'] ? 'active' : ''}" id="dl-head-dl1_tktw" onclick="toggleDlAccordion('dl1_tktw')">
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
            <div class="chapter-accordion-body" id="dl-body-dl1_tktw" style="display: \${openChaptersState['dl1_tktw'] ? 'block' : 'none'};">
              
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
            <div class="chapter-accordion-header \${openChaptersState['dl2_khangsinh'] ? 'active' : ''}" id="dl-head-dl2_khangsinh" onclick="toggleDlAccordion('dl2_khangsinh')">
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
            <div class="chapter-accordion-body" id="dl-body-dl2_khangsinh" style="display: \${openChaptersState['dl2_khangsinh'] ? 'block' : 'none'};">
              
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
            <div class="chapter-accordion-header \${openChaptersState['dl2_timmach'] ? 'active' : ''}" id="dl-head-dl2_timmach" onclick="toggleDlAccordion('dl2_timmach')">
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
            <div class="chapter-accordion-body" id="dl-body-dl2_timmach" style="display: \${openChaptersState['dl2_timmach'] ? 'block' : 'none'};">
              
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
            <div class="chapter-accordion-header \${openChaptersState['dl2_tieuhoa_noitiet'] ? 'active' : ''}" id="dl-head-dl2_tieuhoa_noitiet" onclick="toggleDlAccordion('dl2_tieuhoa_noitiet')">
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
            <div class="chapter-accordion-body" id="dl-body-dl2_tieuhoa_noitiet" style="display: \${openChaptersState['dl2_tieuhoa_noitiet'] ? 'block' : 'none'};">
              
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
`;

// Now let's inject this into app.js
const appJsPath = path.join(__dirname, '..', 'app.js');
let appJs = fs.readFileSync(appJsPath, 'utf8');

// 1. Check if pharmacology subtab is added in secMap
if (!appJs.includes("pharmacology: document.getElementById('cs-sec-pharmacology')")) {
  appJs = appJs.replace(
    "antidotes: document.getElementById('cs-sec-antidotes')",
    "antidotes: document.getElementById('cs-sec-antidotes'),\n    pharmacology: document.getElementById('cs-sec-pharmacology')"
  );
  console.log("Added pharmacology to secMap");
}

// 2. Add toggleDlAccordion and toggleAllDl functions if not present
if (!appJs.includes('function toggleDlAccordion(')) {
  const dlFunctions = `
function toggleDlAccordion(dlId) {
  openChaptersState[dlId] = !openChaptersState[dlId];
  const header = document.getElementById(\`dl-head-\${dlId}\`);
  const body = document.getElementById(\`dl-body-\${dlId}\`);
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
    const header = document.getElementById(\`dl-head-\${id}\`);
    const body = document.getElementById(\`dl-body-\${id}\`);
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
`;
  appJs = appJs.replace(
    'function toggleChapterAccordion(chId) {',
    dlFunctions + '\nfunction toggleChapterAccordion(chId) {'
  );
  console.log("Added toggleDlAccordion & toggleAllDl functions");
}

// 3. Add isPharmacology flag in renderCheatsheetView
if (!appJs.includes('const isPharmacology =')) {
  appJs = appJs.replace(
    "const isAntidotes = showAll || currentCheatsheetSubtab === 'antidotes';",
    "const isAntidotes = showAll || currentCheatsheetSubtab === 'antidotes';\n  const isPharmacology = showAll || currentCheatsheetSubtab === 'pharmacology';"
  );
  console.log("Added isPharmacology boolean flag");
}

// 4. Add subnav button
if (!appJs.includes("data-subtab=\"pharmacology\"")) {
  const subnavBtn = `      <button class="cs-subnav-btn \${currentCheatsheetSubtab === 'pharmacology' ? 'active' : ''}" data-subtab="pharmacology" onclick="switchCheatsheetSubtab('pharmacology')">
        <span>💊</span> Dược Lý 1 &amp; 2 Trọng Tâm
      </button>\n`;
  appJs = appJs.replace(
    "<button class=\"cs-subnav-btn ${currentCheatsheetSubtab === 'all' ? 'active' : ''}\"",
    subnavBtn + "      <button class=\"cs-subnav-btn ${currentCheatsheetSubtab === 'all' ? 'active' : ''}\""
  );
  console.log("Added pharmacology subnav button");
}

// 5. Inject Section 6 into the HTML template right after cs-sec-antidotes
if (!appJs.includes('id="cs-sec-pharmacology"')) {
  // Find where cs-sec-antidotes ends (around </div>\n\n      </div>\n\n    </div>\n  `;)
  const targetEnd = `      </div>

    </div>
  \`;
}`;
  if (appJs.includes(targetEnd)) {
    appJs = appJs.replace(targetEnd, pharmacologyHTML + "\n    </div>\n  `;\n}");
    console.log("Injected pharmacology section HTML successfully!");
  } else {
    // Alternative match
    const altTarget = `      </div>\r\n\r\n    </div>\r\n  \`;\r\n}`;
    if (appJs.includes(altTarget)) {
      appJs = appJs.replace(altTarget, pharmacologyHTML + "\r\n    </div>\r\n  \`;\r\n}");
      console.log("Injected pharmacology section HTML (CRLF) successfully!");
    } else {
      console.error("Could not find exact injection target for section 6");
    }
  }
}

fs.writeFileSync(appJsPath, appJs, 'utf8');
console.log("app.js updated successfully!");
