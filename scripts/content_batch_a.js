// scripts/content_batch_a.js
module.exports = {
  ch1: `
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
`,

  ch3: `
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
`,

  ch4: `
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
`,

  ch5: `
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
`,

  ch6: `
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
`
};
