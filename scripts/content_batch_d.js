// BATCH D: Bài 18, Bài 19, Bài 20
// Chi tiết chuẩn 100% Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)

const ch18 = `
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
                  <td><strong>Hội chứng loạn dưỡng mỡ (Lipodystrophy)</strong>: Bướu mỡ lưng trâu, béo bụng trung tâm, teo mỡ má và chi; rối loạn lipid máu, tăng đường huyết; <strong>Ritonavir là chất ức chế CYP3A4 cực mạnh</strong>, dùng làm \"Booster\" nâng nồng độ các thuốc khác.</td>
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
`;

const ch19 = `
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
              <li><strong>Cảnh báo tử vong 100% của Vincristin tiêm tủy sống:</strong> Vincristin CHỈ ĐƯỢC TIÊM TĨNH MẠCH. Nếu sơ suất tiêm nhầm vào dịch não tủy (Intrathecal) thay cho Methotrexate, thuốc sẽ phá hủy toàn bộ thoi thần kinh của tủy sống và thân não, gây liệt mềm tiến triển tăng dần và dẫn đến cái chết đau đớn không thể cứu vãn trong 100% trường hợp! Mọi ống tiêm Vincristin bắt buộc dán nhãn cảnh báo đỏ \"FATAL IF GIVEN INTRATHECALLY\"!</li>
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
`;

const ch20 = `
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
              <li><strong>Cạm bẫy Flumazenil trong cấp cứu hôn mê:</strong> Tuyệt đối không bao giờ dùng Flumazenil như một \"test chẩn đoán\" ở bệnh nhân hôn mê không rõ nguyên nhân! Nếu bệnh nhân có phụ thuộc Benzodiazepine mạn tính hoặc uống kèm thuốc chống trầm cảm 3 vòng (TCA), việc tiêm Flumazenil sẽ triệt tiêu tác dụng bảo vệ thần kinh của GABA, khởi phát ngay lập tức các cơn co giật động kinh liên tục kháng trị và rối loạn nhịp tim tử vong!</li>
              <li><strong>Cơ chế cứu sống kỳ diệu của Natri Bicarbonat trong ngộ độc TCA:</strong> Thuốc chống trầm cảm 3 vòng (Amitriptylin) chẹn kênh Natri nhanh cơ tim làm phức bộ QRS dãn rộng gây rung thất. Truyền NaHCO3 kiềm hóa máu giải độc qua 2 gọng kìm: (1) Nâng pH máu làm thuốc chuyển thành dạng không ion hóa giảm ái lực với thụ thể kênh, và (2) Cung cấp nồng độ Na+ ngoại bào cao cạnh tranh đẩy bật TCA ra khỏi kênh Natri, lập tức thu hẹp phức bộ QRS về bình thường!</li>
              <li><strong>Nguyên tắc \"Gram đổi Gram\" của Pyridoxin trong ngộ độc INH:</strong> Ngộ độc cấp thuốc chống lao Isoniazid gây ra các cơn co giật liên tục không đáp ứng với thuốc chống động kinh thông thường. Liều Vitamin B6 điều trị bắt buộc phải tính theo quy tắc gram đổi gram: Uống bao nhiêu gam INH thì tiêm bấy nhiêu gam Pyridoxin!</li>
              <li><strong>Chống chỉ định tuyệt đối Xanh Methylen ở người thiếu G6PD:</strong> Xanh methylen muốn khử Methemoglobin bắt buộc phải dựa vào enzym NADPH-MetHb reductase. Ở người thiếu men G6PD không sản xuất đủ NADPH, Xanh methylen không những vô tác dụng mà bản thân nó lại trở thành chất oxy hóa cực mạnh làm tan máu ồ ạt dẫn đến tử vong nhanh chóng!</li>
            </ul>
          </div>

          <div style="margin-top: 0.75rem;">
            <button class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.35rem 0.75rem;" onclick="jumpToDl2Topic('Thuốc/trong điều trị ngộ độc')">
              🎯 Luyện đề trắc nghiệm Bài 20: Điều Trị Ngộ Độc Cấp
            </button>
          </div>
`;

module.exports = { ch18, ch19, ch20 };
