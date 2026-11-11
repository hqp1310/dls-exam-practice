// BATCH C: Bài 13, Bài 14, Bài 15, Bài 16, Bài 17
// Chi tiết chuẩn 100% Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)

const ch13 = `
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
`;

const ch14 = `
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
`;

const ch15 = `
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
`;

const ch16 = `
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
                  <td>Hiếm gặp; hội chứng \"Bàn chân bỏng rát\" (Burning feet syndrome), mệt mỏi, dị cảm ngón chân.</td>
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
`;

const ch17 = `
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
              <li><strong>Dấu hiệu \"Nước tiểu màu rượu vang hồng\" (Vin rose) của Deferoxamine:</strong> Khi dùng Deferoxamine giải độc ngộ độc sắt cấp, phân tử thuốc kết hợp với Fe3+ tự do tạo thành phức hợp chelat Ferrioxamine bền vững đào thải qua thận, làm nước tiểu chuyển sang màu hồng đỏ đậm đặc trưng. Khi nước tiểu nhạt màu dần chứng tỏ lượng sắt tự do gây độc trong cơ thể đã được dọn sạch!</li>
              <li><strong>Nguyên tắc \"Sắt đi trước, EPO đi sau\":</strong> Erythropoietin kích thích tủy xương sản xuất ồ ạt hồng cầu mới, quá trình này đòi hỏi tiêu thụ một lượng sắt cực lớn. Nếu không xét nghiệm Ferritin và bù đủ sắt dự trữ trước, tủy xương sẽ rơi vào tình trạng \"thiếu sắt chức năng\" và bệnh nhân hoàn toàn trơ lỳ kháng với EPO!</li>
              <li><strong>Phản ứng phản vệ chết người của Sắt Dextran tiêm TM:</strong> Khác với các muối sắt đường uống hay chế phẩm sắt nano thế hệ mới, gốc cao phân tử Dextran có tính kháng nguyên cao gây tỷ lệ sốc phản vệ chết người đáng kể. BẮT BUỘC tiêm liều thử nghiệm (test dose 25mg) và chờ ít nhất 60 phút theo dõi huyết động trước khi truyền liều điều trị đầy đủ!</li>
            </ul>
          </div>

          <div style="margin-top: 0.75rem;">
            <button class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.35rem 0.75rem;" onclick="jumpToDl2Topic('Thuốc chữa thiếu máu')">
              🎯 Luyện đề trắc nghiệm Bài 17: Thuốc Chữa Thiếu Máu
            </button>
          </div>
`;

module.exports = { ch13, ch14, ch15, ch16, ch17 };
