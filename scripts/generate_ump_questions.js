// 40 High-Yield Clinical Pharmacy Questions - Đại học Y Dược TP.HCM (UMP)
// Chuyên đề: Ca bệnh lâm sàng chuyên sâu, Kháng sinh MDRO, Xơ gan, Tim mạch, Hô hấp, Thận học

const UMP_QUESTIONS = [
  {
    chapter: "Kháng sinh & Kháng sinh dự phòng",
    source: "UMP",
    sourceName: "Đại học Y Dược TP.HCM",
    question: "Tại sao kháng sinh Daptomycin có hoạt tính diệt khuẩn rất mạnh trên tụ cầu vàng kháng Methicillin (MRSA) nhưng lại CHỐNG CHỈ ĐỊNH TUYỆT ĐỐI trong điều trị viêm phổi do MRSA?",
    options: [
      "Daptomycin không thâm nhập được qua hàng rào mao mạch phế nang",
      "Daptomycin bị chất diện hoạt phế nang (Pulmonary Surfactant) gắn kết và làm bất hoạt hoàn toàn",
      "Daptomycin gây co thắt phế quản dữ dội và tràn khí màng phổi cấp tính",
      "Daptomycin bị chuyển hóa hoàn toàn bởi enzym cytochrome P450 tại biểu mô đường thở"
    ],
    correct: 1,
    explanation: "Daptomycin tương tác mạnh với chất diện hoạt phổi (Surfactant) khiến thuốc bị kết cụm và mất hoàn toàn hoạt tính kháng khuẩn trong nhu mô phổi. Vì vậy Daptomycin chống chỉ định trong viêm phổi, chỉ dùng cho nhiễm khuẩn da mô mềm, du khuẩn huyết và viêm nội tâm mạc."
  },
  {
    chapter: "Điều trị Tăng huyết áp & Cấp cứu THA",
    source: "UMP",
    sourceName: "Đại học Y Dược TP.HCM",
    question: "Bệnh nhân nam 58 tuổi, tiền sử ĐTĐ tuýp 2 và Tăng huyết áp 5 năm. Xét nghiệm thấy Creatinin máu 1.4 mg/dL, eGFR 52 mL/phút, Tỉ số Albumin/Creatinin niệu (UACR) là 450 mg/g (albumin niệu đại thể). Lựa chọn thuốc hạ áp đầu tay tối ưu nhất theo khuyến cáo KDIGO và ADA là:",
    options: [
      "Thuốc chẹn kênh Canxi nhóm DHP (Amlodipin) đơn trị liệu",
      "Thuốc ức chế men chuyển (ACEI) hoặc chẹn thụ thể Angiotensin II (ARB)",
      "Thuốc chẹn thụ thể beta giao cảm (Atenolol) liều cao",
      "Thuốc lợi tiểu Thiazid (Hydrochlorothiazid) đơn độc"
    ],
    correct: 1,
    explanation: "Ở bệnh nhân đái tháo đường kèm tăng huyết áp và có albumin niệu (UACR >= 30 mg/g, đặc biệt >= 300 mg/g), ACEI hoặc ARB là lựa chọn bắt buộc hàng đầu nhờ tác dụng giãn tiểu động mạch đi của cầu thận, giúp giảm áp lực trong cầu thận và làm chậm tiến triển bệnh thận mạn."
  },
  {
    chapter: "Điều trị Tăng huyết áp & Cấp cứu THA",
    source: "UMP",
    sourceName: "Đại học Y Dược TP.HCM",
    question: "Sau khi bắt đầu dùng Enalapril được 2 tuần, bệnh nhân đái tháo đường có suy thận mạn được xét nghiệm lại. Mức tăng Creatinin huyết thanh nào sau đây được coi là chấp nhận được và KHÔNG cần phải ngừng thuốc?",
    options: [
      "Tăng không quá 30% so với giá trị Creatinin nền ban đầu",
      "Tăng không quá 100% so với giá trị nền",
      "Bất kỳ mức tăng nào trên 5% đều bắt buộc phải ngừng thuốc ngay lập tức",
      "Chỉ chấp nhận khi chỉ số Creatinin giảm xuống thấp hơn mức ban đầu"
    ],
    correct: 0,
    explanation: "Khi khởi đầu ACEI/ARB, việc giãn tiểu động mạch đi làm giảm áp lực lọc cầu thận nên Creatinin huyết thanh thường tăng nhẹ. Mức tăng dưới 30% so với nồng độ nền trong vòng 1-2 tuần đầu được coi là đáp ứng huyết động bình thường và an toàn, không cần ngừng thuốc."
  },
  {
    chapter: "Dược động học & Suy gan, thận",
    source: "UMP",
    sourceName: "Đại học Y Dược TP.HCM",
    question: "Bệnh nhân xơ gan cổ trướng mức độ vừa đang được điều trị lợi tiểu nội trú. Tỷ lệ liều kết hợp giữa Spironolacton và Furosemid được Hội Nghiên cứu Bệnh gan Hoa Kỳ (AASLD) khuyến cáo để duy trì hiệu quả bài niệu và giữ thăng bằng nồng độ Kali máu là:",
    options: [
      "100 mg Spironolacton : 40 mg Furosemid (tỷ lệ 5 : 2)",
      "25 mg Spironolacton : 100 mg Furosemid (tỷ lệ 1 : 4)",
      "50 mg Spironolacton : 50 mg Furosemid (tỷ lệ 1 : 1)",
      "200 mg Spironolacton : 10 mg Furosemid (tỷ lệ 20 : 1)"
    ],
    correct: 0,
    explanation: "Tỷ lệ chuẩn Spironolactone 100 mg : Furosemide 40 mg (tối đa 400 mg : 160 mg/ngày) giúp phối hợp tác dụng lợi tiểu quai và kháng Aldosterone, đồng thời cân bằng lượng Kali bài tiết qua nước tiểu (Spironolactone giữ K+, Furosemide thải K+), duy trì Kali máu ổn định."
  },
  {
    chapter: "Kháng sinh & Kháng sinh dự phòng",
    source: "UMP",
    sourceName: "Đại học Y Dược TP.HCM",
    question: "Bệnh nhân xơ gan cổ trướng nhập viện vì sốt và đau bụng, chọc dịch màng bụng cho thấy số lượng bạch cầu đa nhân trung tính (PMN) là 380 tế bào/mm³. Chẩn đoán Viêm phúc mạc tiên phát do vi khuẩn (SBP) được xác lập. Kháng sinh kinh nghiệm đường tĩnh mạch được khuyến cáo hàng đầu là:",
    options: [
      "Cefotaxim hoặc Ceftriaxon",
      "Metronidazol phối hợp Vancomycin đường uống",
      "Amikacin đơn trị liệu liều cao",
      "Doxycyclin tiêm truyền tĩnh mạch chậm"
    ],
    correct: 0,
    explanation: "Tiêu chuẩn chẩn đoán SBP là PMN trong dịch cổ trướng >= 250 tế bào/mm³. Tác nhân gây bệnh chủ yếu là trực khuẩn gram âm đường ruột (E. coli, Klebsiella). Kháng sinh hàng đầu là Cephalosporin thế hệ 3 đường tĩnh mạch (Cefotaxime 2g mỗi 8h hoặc Ceftriaxone 2g mỗi 24h) kết hợp truyền Albumin."
  },
  {
    chapter: "Điều trị Tăng huyết áp & Cấp cứu THA",
    source: "UMP",
    sourceName: "Đại học Y Dược TP.HCM",
    question: "Phác đồ điều trị nền tảng 'Tứ trụ' (Four Pillars) giúp cải thiện tỷ lệ tử vong ở bệnh nhân Suy tim mạn tính phân suất tống máu giảm (HFrEF) theo ESC và AHA bao gồm các nhóm thuốc nào?",
    options: [
      "ARNI (hoặc ACEI/ARB) + Thuốc chẹn beta + Thuốc đối kháng thụ thể Mineralocorticoid (MRA) + Thuốc ức chế SGLT2",
      "Digoxin + Thuốc lợi tiểu Thiazid + Thuốc chẹn Calci DHP + Aspirin",
      "Amlodipin + Nitrate kéo dài + Ivabradin + Furosemid",
      "Thuốc ức chế men chuyển + Thuốc chẹn thụ thể AT1 + Kháng Aldosteron + Canxi tiêm truyền"
    ],
    correct: 0,
    explanation: "Bốn trụ cột suy tim HFrEF đã được chứng minh giảm tử vong tim mạch rõ rệt gồm: (1) ARNI (Sacubitril/Valsartan) hoặc ACEI; (2) Thuốc chẹn beta được chứng minh (Bisoprolol, Carvedilol, Metoprolol succinate); (3) MRA (Spironolactone, Eplerenone); (4) Thuốc ức chế SGLT2 (Dapagliflozin, Empagliflozin)."
  },
  {
    chapter: "Tương tác thuốc & Tương kỵ",
    source: "UMP",
    sourceName: "Đại học Y Dược TP.HCM",
    question: "Khi chuyển đổi từ thuốc ức chế men chuyển (như Enalapril) sang thuốc ức chế thụ thể Angiotensin-Neprilysin (ARNI - Sacubitril/Valsartan), bắt buộc phải có khoảng thời gian nghỉ (Washout period) là bao lâu để tránh nguy cơ phù mạch đe dọa tính mạng?",
    options: [
      "Tối thiểu 36 giờ sau liều ACEI cuối cùng",
      "Không cần khoảng nghỉ, có thể uống ARNI ngay cữ tiếp theo",
      "Ít nhất 7 ngày để thanh thải hết các thụ thể",
      "Khoảng 6 giờ nếu chức năng thận của người bệnh hoàn toàn bình thường"
    ],
    correct: 0,
    explanation: "Cả ACEI và chất ức chế Neprilysin (Sacubitril) đều làm chậm phân hủy Bradykinin. Nếu dùng cùng lúc hoặc không cách nhau đủ 36 giờ, Bradykinin tích lũy ồ ạt dẫn đến phù mạch mạch máu thanh quản cấp tính, gây tắc nghẽn đường thở và nghẹt thở tử vong."
  },
  {
    chapter: "Kháng sinh & Kháng sinh dự phòng",
    source: "UMP",
    sourceName: "Đại học Y Dược TP.HCM",
    question: "Bệnh nhân nhiễm khuẩn bệnh viện nặng do Trực khuẩn mủ xanh (Pseudomonas aeruginosa). Kháng sinh nhóm Beta-lactam nào sau đây KHÔNG CÓ hoạt tính kháng vi khuẩn này?",
    options: [
      "Ceftriaxon",
      "Ceftazidim",
      "Cefepim",
      "Piperacillin / Tazobactam"
    ],
    correct: 0,
    explanation: "Ceftriaxone và Cefotaxime là Cephalosporin thế hệ 3 nhưng KHÔNG có hoạt tính trên Pseudomonas aeruginosa. Các Cephalosporin có hoạt tính chống mủ xanh là Ceftazidime (thế hệ 3) và Cefepime (thế hệ 4), cùng với Piperacillin/Tazobactam và Carbapenem (Meropenem, Imipenem)."
  },
  {
    chapter: "Kháng sinh & Kháng sinh dự phòng",
    source: "UMP",
    sourceName: "Đại học Y Dược TP.HCM",
    question: "Kháng sinh nhóm Carbapenem nào sau đây KHÔNG CÓ hoạt tính chống Pseudomonas aeruginosa và Acinetobacter baumannii, do đó chỉ thích hợp cho nhiễm khuẩn cộng đồng hoặc trực khuẩn ruột sinh ESBL?",
    options: [
      "Meropenem",
      "Imipenem / Cilastatin",
      "Ertapenem",
      "Doripenem"
    ],
    correct: 2,
    explanation: "Ertapenem (Invanz) có đặc tính dược động học dùng 1 lần/ngày do gắn protein cao, nhưng phổ kháng khuẩn bị khuyết: KHÔNG diệt được Pseudomonas aeruginosa, Acinetobacter spp. và Enterococcus. Ba carbapenem còn lại (Mero, Imi, Dori) đều bao phủ được Pseudomonas."
  },
  {
    chapter: "Kháng sinh & Kháng sinh dự phòng",
    source: "UMP",
    sourceName: "Đại học Y Dược TP.HCM",
    question: "Trong điều trị nhiễm khuẩn huyết do Trực khuẩn đường ruột kháng Carbapenem (CRE) sinh men men carbapenemase nhóm KPC hoặc OXA-48, kháng sinh ức chế beta-lactamase thế hệ mới phối hợp được ưu tiên lựa chọn là:",
    options: [
      "Ceftazidim / Avibactam",
      "Amoxicillin / Acid clavulanic",
      "Ampicillin / Sulbactam",
      "Cefoperazon / Sulbactam"
    ],
    correct: 0,
    explanation: "Ceftazidime/Avibactam (Zavicefta) là kháng sinh thế hệ mới phối hợp Avibactam (chất ức chế beta-lactamase non-beta-lactam) có khả năng ức chế men Carbapenemase nhóm A (KPC) và nhóm D (OXA-48), là liệu pháp đầu tay giải cứu nhiễm CRE."
  },
  {
    chapter: "Kháng sinh & Kháng sinh dự phòng",
    source: "UMP",
    sourceName: "Đại học Y Dược TP.HCM",
    question: "Kháng sinh Tigecyclin có phổ kháng khuẩn rất rộng bao phủ MRSA, VRE, CRE và Acinetobacter đa kháng, nhưng có nhược điểm dược động học nghiêm trọng nào cần lưu ý?",
    options: [
      "Nồng độ trong máu rất thấp do thể tích phân bố cực lớn, không thích hợp cho nhiễm khuẩn huyết nguyên phát",
      "Thải trừ hoàn toàn qua nước tiểu dưới dạng nguyên vẹn gây độc tính thận nặng nề",
      "Gây tăng huyết áp kịch phát do co thắt động mạch thận",
      "Thời gian bán thải cực ngắn dưới 15 phút nên bắt buộc phải tiêm liên tục mỗi giờ"
    ],
    correct: 0,
    explanation: "Tigecycline có thể tích phân bố rất lớn (Vd > 7 - 10 L/kg), thuốc khuếch tán mạnh vào các mô sâu (mô mềm, ổ bụng) nhưng nồng độ trong huyết tương lại rất thấp. Do đó, FDA cảnh báo không dùng Tigecycline đơn độc điều trị nhiễm khuẩn huyết hoặc viêm phổi thở máy."
  },
  {
    chapter: "Điều trị Tăng huyết áp & Cấp cứu THA",
    source: "UMP",
    sourceName: "Đại học Y Dược TP.HCM",
    question: "Bệnh nhân nam 65 tuổi có tiền sử Rung nhĩ không do bệnh van tim (điểm CHA2DS2-VASc = 3) vừa trải qua can thiệp đặt stent mạch vành phủ thuốc (PCI) do Hội chứng vành cấp. Chiến lược chống huyết khối tối ưu hiện nay theo ESC nhằm cân bằng nguy cơ tắc stent và xuất huyết là:",
    options: [
      "Dùng liệu pháp 3 thuốc (NOAC + Aspirin + Clopidogrel) kéo dài liên tục 12 tháng",
      "Chỉ dùng đơn trị liệu Aspirin liều thấp 81 mg duy nhất",
      "Dùng liệu pháp 3 thuốc trong thời gian ngắn (từ lúc xuất viện đến 1 tuần hoặc 1 tháng), sau đó chuyển sang liệu pháp 2 thuốc (NOAC + Clopidogrel) đến 12 tháng",
      "Ngừng toàn bộ thuốc chống đông NOAC và chỉ dùng Ticagrelor đơn độc"
    ],
    correct: 2,
    explanation: "Chiến lược hiện đại ưu tiên giảm thời gian phác đồ 3 thuốc (Triple therapy: NOAC + Aspirin + Clopidogrel) xuống tối thiểu (thường <= 1 tuần đến 1 tháng tùy nguy cơ huyết khối mạch vành), sau đó duy trì phác đồ đôi (Dual therapy: NOAC + Clopidogrel) đến 12 tháng để giảm tối đa biến cố xuất huyết nặng."
  },
  {
    chapter: "Hen phế quản & COPD",
    source: "UMP",
    sourceName: "Đại học Y Dược TP.HCM",
    question: "Theo hướng dẫn GOLD, chỉ định dùng kháng sinh trong đợt cấp bệnh phổi tắc nghẽn mạn tính (AECOPD) dựa trên tiêu chuẩn Anthonisen khi bệnh nhân có biểu hiện nào?",
    options: [
      "Bệnh nhân có tăng lượng đờm mủ kèm theo tăng khó thở hoặc tăng thể tích đờm (hoặc đợt cấp nặng cần thở máy)",
      "Chỉ cần bệnh nhân có ho khan đơn thuần không có sốt",
      "Mọi bệnh nhân đợt cấp COPD đều bắt buộc phải dùng kháng sinh tối thiểu 14 ngày",
      "Chỉ dùng kháng sinh khi cấy đờm dương tính sau 7 ngày nuôi cấy vi khuẩn"
    ],
    correct: 0,
    explanation: "Tiêu chuẩn Anthonisen: (1) Tăng khó thở, (2) Tăng thể tích đờm, (3) Tăng tính chất mủ của đờm. Kháng sinh được chỉ định khi có đủ 3 triệu chứng, hoặc có 2 triệu chứng trong đó bắt buộc có đờm mủ, hoặc bệnh nhân đợt cấp nặng phải thở máy (xâm lấn hoặc không xâm lấn)."
  },
  {
    chapter: "Hen phế quản & COPD",
    source: "UMP",
    sourceName: "Đại học Y Dược TP.HCM",
    question: "Thời gian điều trị bằng Corticoid toàn thân (như Prednison 40 mg đường uống mỗi ngày) được GOLD khuyến cáo trong đợt kịch phát COPD là bao lâu?",
    options: [
      "5 ngày (hiệu quả tương đương liệu trình dài ngày nhưng ít tác dụng phụ hơn)",
      "Tối thiểu 14 đến 21 ngày và phải giảm liều từ từ trong 2 tháng",
      "Duy trì liên tục suốt đời để ngăn ngừa đợt cấp tái phát",
      "Chỉ dùng đúng 1 liều duy nhất trong vòng 1 giờ đầu nhập viện"
    ],
    correct: 0,
    explanation: "Nghiên cứu REDUCE chứng minh dùng Prednisone 40 mg/ngày trong 5 ngày mang lại hiệu quả cải thiện chức năng hô hấp và tỷ lệ hồi phục tương đương với liệu trình 14 ngày, nhưng giảm đáng kể nguy cơ tăng đường huyết, nhiễm trùng cơ hội và ức chế tuyến thượng thận."
  },
  {
    chapter: "Glucocorticoid & Phác đồ điều trị",
    source: "UMP",
    sourceName: "Đại học Y Dược TP.HCM",
    question: "Khi bệnh nhân dùng Glucocorticoid đường toàn thân kéo dài trên 3 tuần, nguy cơ suy thượng thận thứ phát xảy ra do cơ chế feedback âm tính tác động lên cấu trúc nào?",
    options: [
      "Kích thích tuyến tủy thượng thận tăng tiết Catecholamin",
      "Ức chế trục Hạ đồi - Tuyến yên - Vỏ thượng thận (trục HPA) làm teo vỏ thượng thận",
      "Phá hủy trực tiếp các receptor corticosteroid tại màng tế bào bạch cầu",
      "Tăng cường hoạt tính của enzym 11-beta-HSD1 tại mô mỡ nội tạng"
    ],
    correct: 1,
    explanation: "Dùng Glucocorticoid ngoại sinh kéo dài sẽ kích hoạt cơ chế ức chế điều hòa ngược (Negative Feedback) lên vùng dưới đồi (giảm tiết CRH) và tuyến yên (giảm tiết ACTH). Thiếu ACTH kéo dài khiến lớp bó và lớp lưới của vỏ thượng thận bị teo nhỏ, mất khả năng tự tiết Cortisol khi ngừng thuốc."
  },
  {
    chapter: "Thuốc giảm đau",
    source: "UMP",
    sourceName: "Đại học Y Dược TP.HCM",
    question: "Thuốc giảm đau Paracetamol có liều tối đa hàng ngày khuyến cáo cho người lớn có chức năng gan bình thường là bao nhiêu để phòng ngừa hoại tử tế bào gan?",
    options: [
      "4 gam / ngày (4000 mg/24 giờ)",
      "2 gam / ngày",
      "6 gam / ngày",
      "8 gam / ngày"
    ],
    correct: 0,
    explanation: "Liều tối đa của Paracetamol ở người lớn bình thường là 4g/24 giờ (mỗi lần 500 - 1000mg cách nhau tối thiểu 4-6 giờ). Với người cao tuổi suy kiệt, người nghiện rượu mạn tính hoặc có bệnh gan mạn tính, liều tối đa nên giảm xuống không quá 2 - 3g/24 giờ."
  },
  {
    chapter: "Thuốc giảm đau",
    source: "UMP",
    sourceName: "Đại học Y Dược TP.HCM",
    question: "Khi điều trị cơn Gút cấp tính, Colchicin đường uống nên được dùng với chế độ liều chuẩn hóa theo khuyến cáo hiện đại của ACR và EULAR như thế nào?",
    options: [
      "Uống 1 mg mỗi giờ cho đến khi bệnh nhân bị tiêu chảy dữ dội thì dừng lại",
      "Uống liều khởi đầu 1 mg (hoặc 1.2 mg), sau đó 1 giờ uống thêm 0.5 mg (hoặc 0.6 mg), tổng liều ngày đầu không quá 1.5 - 1.8 mg",
      "Uống liều cao 5 mg ngay từ đầu kết hợp truyền dịch kiềm hóa nước tiểu",
      "Dùng duy nhất một viên 0.25 mg mỗi 3 ngày một lần"
    ],
    correct: 1,
    explanation: "Phác đồ Colchicine liều cao cũ (uống mỗi giờ đến khi tiêu chảy) gây độc tính tiêu hóa rất nặng. Hướng dẫn hiện đại khuyến cáo phác đồ liều thấp: Khởi đầu 1mg (hoặc 1.2mg), 1 giờ sau uống thêm 0.5mg (hoặc 0.6mg). Liều thấp có hiệu quả giảm đau tương đương liều cao nhưng độ an toàn vượt trội."
  },
  {
    chapter: "Loãng xương, Tránh thai & Chuyển hóa",
    source: "UMP",
    sourceName: "Đại học Y Dược TP.HCM",
    question: "Thuốc hạ Acid Uric máu nhóm ức chế Xanthine Oxidase (Allopurinol) khi khởi đầu điều trị hạ acid uric cho bệnh nhân gút mạn tính bắt buộc phải lưu ý điều gì?",
    options: [
      "Bắt đầu ngay bằng liều tối đa 800 mg/ngày để làm tan nhanh hạt tophi",
      "Phải phối hợp đồng thời với thuốc dự phòng cơn gút cấp (Colchicin liều thấp hoặc NSAID) trong 3 đến 6 tháng đầu",
      "Ngừng toàn bộ các thuốc hạ áp và thuốc tim mạch của bệnh nhân",
      "Chỉ uống khi nồng độ acid uric máu hạ xuống dưới 200 mcmol/L"
    ],
    correct: 1,
    explanation: "Khi mới dùng Allopurinol/Febuxostat, nồng độ acid uric máu giảm nhanh làm bong tróc và hòa tan các tinh thể urat từ mô vào dịch khớp, dễ kích hoạt cơn gút cấp bùng phát. Do đó, bắt buộc phải dùng đồng thời thuốc phòng ngừa (Colchicine 0.5-1mg/ngày hoặc NSAID liều thấp) trong 3 - 6 tháng đầu."
  },
  {
    chapter: "Loãng xương, Tránh thai & Chuyển hóa",
    source: "UMP",
    sourceName: "Đại học Y Dược TP.HCM",
    question: "Biến chứng nguy hiểm nhất của thuốc Allopurinol là Hội chứng quá mẫn nghiêm trọng (AHS / SCAR bao gồm Stevens-Johnson và TEN). Yếu tố nguy cơ di truyền liên quan chặt chẽ nhất ở người châu Á (người Việt Nam, người Hoa) là mang alen:",
    options: [
      "HLA-B*58:01",
      "HLA-B*15:02",
      "HLA-B*57:01",
      "HLA-DQB1*06:02"
    ],
    correct: 0,
    explanation: "Alen HLA-B*58:01 liên quan mật thiết với hội chứng quá mẫn đe dọa tính mạng do Allopurinol (tỷ lệ mang alen này ở người Việt khoảng 10-15%). HLA-B*15:02 liên quan đến Carbamazepine; HLA-B*57:01 liên quan đến Abacavir."
  },
  {
    chapter: "Kháng sinh & Kháng sinh dự phòng",
    source: "UMP",
    sourceName: "Đại học Y Dược TP.HCM",
    question: "Bệnh nhân nam 62 tuổi mắc Viêm phổi cộng đồng (CAP) điều trị nội trú tại khoa Hô hấp (không nằm ICU), không có yếu tố nguy cơ nhiễm trực khuẩn mủ xanh hay MRSA. Phác đồ kháng sinh kinh nghiệm theo ATS/IDSA và Hội Phổi Việt Nam là:",
    options: [
      "Beta-lactam phổ rộng đường tiêm (Ceftriaxon, Cefotaxim hoặc Ampicillin/Sulbactam) phối hợp với Macrolid (Azithromycin) hoặc dùng một Fluoroquinolon hô hấp đơn trị liệu",
      "Vancomycin tiêm truyền kết hợp với Gentamicin tiêm bắp",
      "Metronidazol đường uống phối hợp Ciprofloxacin",
      "Cefazolin đơn độc truyền tĩnh mạch mỗi 8 giờ"
    ],
    correct: 0,
    explanation: "Đối với CAP nội trú ngoài ICU, phác đồ chuẩn bao phủ cả vi khuẩn điển hình (Phế cầu) và không điển hình (Mycoplasma, Chlamydia, Legionella) là: Beta-lactam tiêm (Ceftriaxone 1-2g/ngày hoặc Ampicillin/Sulbactam) + Macrolide (Azithromycin/Clarithromycin), hoặc một Quinolone hô hấp (Levofloxacin 750mg, Moxifloxacin)."
  },
  {
    chapter: "Xét nghiệm lâm sàng & Nhận định KQ",
    source: "UMP",
    sourceName: "Đại học Y Dược TP.HCM",
    question: "Thang điểm CURB-65 được sử dụng để đánh giá độ nặng và định hướng nơi điều trị cho bệnh nhân Viêm phổi cộng đồng (CAP). Năm tiêu chí của thang điểm này là:",
    options: [
      "Rối loạn ý thức (Confusion), Ure máu > 7 mmol/L, Tần số thở ≥ 30 lần/phút, Huyết áp (HATT < 90 hoặc HATTr ≤ 60 mmHg), Tuổi ≥ 65",
      "Ho nhiều, Ure máu, Rối loạn nhịp tim, Bạch cầu máu > 15 G/L, Tuổi ≥ 60",
      "Hôn mê, Đường huyết > 10 mmol/L, Suy thận cấp, Tụt huyết áp, Tuổi ≥ 65",
      "Khó thở, Creatinin máu > 150 mcmol/L, Suy tim, SpO2 < 90%, Tuổi ≥ 70"
    ],
    correct: 0,
    explanation: "CURB-65 gồm: C (Confusion - lú lẫn/rối loạn ý thức); U (Urea > 7 mmol/L); R (Respiratory rate >= 30 lần/phút); B (Blood pressure: SBP < 90 hoặc DBP <= 60 mmHg); 65 (Tuổi >= 65). 0-1 điểm: điều trị ngoại trú; 2 điểm: cân nhắc nhập viện; 3-5 điểm: nhập viện điều trị nội trú/ICU."
  },
  {
    chapter: "Kháng sinh & Kháng sinh dự phòng",
    source: "UMP",
    sourceName: "Đại học Y Dược TP.HCM",
    question: "Bệnh nhân sau ghép thận đang dùng thuốc ức chế miễn dịch Tacrolimus. Kháng sinh hoặc thuốc chống nấm nào sau đây khi dùng chung sẽ làm TĂNG VỌT nồng độ Tacrolimus trong máu dẫn đến tổn thương thận cấp do ngộ độc?",
    options: [
      "Voriconazol và Ketoconazol (chất ức chế rất mạnh enzym CYP3A4)",
      "Rifampicin và Phenobarbital (chất cảm ứng enzym CYP3A4)",
      "Amoxicillin và Cefuroxim (kháng sinh beta-lactam)",
      "Co-trimoxazol liều dự phòng nhiễm PCP"
    ],
    correct: 0,
    explanation: "Tacrolimus chuyển hóa chuyển hóa qua CYP3A4 và là cơ chất của P-gp. Các thuốc chống nấm nhóm Azole (Voriconazole, Itraconazole, Ketoconazole) ức chế rất mạnh CYP3A4, làm nồng độ Tacrolimus tăng vọt gấp 3 - 5 lần, gây co thắt tiểu động mạch vào cầu thận và suy thận cấp."
  },
  {
    chapter: "Loãng xương, Tránh thai & Chuyển hóa",
    source: "UMP",
    sourceName: "Đại học Y Dược TP.HCM",
    question: "Bệnh nhân đái tháo đường tuýp 2 mắc kèm Bệnh tim thiếu máu cục bộ do xơ vữa (ASCVD) hoặc Suy tim mạn tính. Nhóm thuốc hạ đường huyết nào được khuyến cáo ưu tiên bổ sung hàng đầu độc lập với mức HbA1c ban đầu?",
    options: [
      "Thuốc đồng vận thụ thể GLP-1 (GLP-1 RA) và thuốc ức chế kênh đồng vận chuyển Natri-Glucose 2 (SGLT2i)",
      "Thuốc nhóm Sulfonylurea thế hệ 1 (Tolbutamid)",
      "Insulin NPH tiêm dưới da liều cao buổi tối",
      "Thuốc ức chế men alpha-glucosidase (Acarbose)"
    ],
    correct: 0,
    explanation: "Khuyến cáo ADA và ESC nhấn mạnh: Bệnh nhân ĐTĐ tuýp 2 có bệnh tim mạch xơ vữa (ASCVD) ưu tiên dùng GLP-1 RA có chứng minh lợi ích tim mạch (Liraglutide, Semaglutide) hoặc SGLT2i. Với suy tim (HFrEF/HFpEF) hoặc bệnh thận mạn (CKD), SGLT2i là lựa chọn số 1 để giảm tỷ lệ tử vong và biến cố tim mạch."
  },
  {
    chapter: "Loãng xương, Tránh thai & Chuyển hóa",
    source: "UMP",
    sourceName: "Đại học Y Dược TP.HCM",
    question: "Tác dụng phụ hiếm gặp nhưng rất nguy hiểm của thuốc ức chế SGLT2 (Dapagliflozin, Empagliflozin) cần được tư vấn kỹ cho bệnh nhân là:",
    options: [
      "Nhiễm toan ceton đái tháo đường với mức đường huyết bình thường hoặc tăng nhẹ (Euglycemic DKA)",
      "Xơ gan teo đét và suy gan bùng phát",
      "Tăng huyết áp kịch phát dẫn đến phình tách động mạch chủ",
      "Gây điếc tiếp nhận không hồi phục ở cả hai tai"
    ],
    correct: 0,
    explanation: "Thuốc ức chế SGLT2 thải đường qua nước tiểu nên dù cơ thể thiếu hụt insulin gây nhiễm toan ceton, đường huyết vẫn có thể < 250 mg/dL (Euglycemic DKA). Triệu chứng gồm buồn nôn, đau bụng, thở nhanh sâu, toan chuyển hóa khoảng trống anion tăng. Cần tạm ngưng thuốc khi phẫu thuật hoặc nhịn ăn kéo dài."
  },
  {
    chapter: "Kháng sinh & Kháng sinh dự phòng",
    source: "UMP",
    sourceName: "Đại học Y Dược TP.HCM",
    question: "Kháng sinh Fosfomycin đường uống dạng hạt cốm tan (Fosfomycin trometamol 3g liều duy nhất) được khuyến cáo là lựa chọn hàng đầu cho chỉ định nhiễm khuẩn nào?",
    options: [
      "Nhiễm khuẩn tiết niệu dưới không biến chứng (viêm bàng quang cấp) ở phụ nữ",
      "Viêm bể thận - thận cấp tính có sốt cao và rét run",
      "Nhiễm khuẩn huyết do tụ cầu vàng đa kháng",
      "Viêm tuyến tiền liệt mạn tính do vi khuẩn kỵ khí"
    ],
    correct: 0,
    explanation: "Fosfomycin trometamol 3g gói uống liều duy nhất đạt nồng độ rất cao trong nước tiểu kéo dài 48 - 72 giờ, diệt tốt E. coli (kể cả chủng sinh ESBL) và E. faecalis, là phác đồ đầu tay cho viêm bàng quang cấp không biến chứng ở phụ nữ. Không dùng cho viêm đài bể thận vì không đạt nồng độ mô thận đủ cao."
  },
  {
    chapter: "Kháng sinh & Kháng sinh dự phòng",
    source: "UMP",
    sourceName: "Đại học Y Dược TP.HCM",
    question: "Trong nhiễm trùng huyết do Acinetobacter baumannii kháng Carbapenem (CRAB), phác đồ phối hợp kháng sinh thường được áp dụng bao gồm thuốc nào sau đây?",
    options: [
      "Colistin (Polymyxin E) liều nạp phối hợp Ampicillin / Sulbactam liều cao (hoặc Tigecyclin liều cao)",
      "Penicillin G tinh thể tiêm tĩnh mạch phối hợp Metronidazol",
      "Ceftriaxon phối hợp Gentamicin liều thông thường",
      "Erythromycin phối hợp Doxycyclin đường uống"
    ],
    correct: 0,
    explanation: "Acinetobacter baumannii đa kháng (CRAB) là tác nhân cực kỳ nguy hiểm. Phác đồ cứu cánh theo IDSA thường dựa trên Colistin (có liều nạp) phối hợp với Ampicillin/Sulbactam liều cao (Sulbactam có hoạt tính diệt khuẩn tự nhiên trên Acinetobacter) hoặc phối hợp Tigecycline liều tăng gấp đôi."
  },
  {
    chapter: "Xét nghiệm lâm sàng & Nhận định KQ",
    source: "UMP",
    sourceName: "Đại học Y Dược TP.HCM",
    question: "Chỉ số Biomarker Procalcitonin (PCT) trong huyết thanh có giá trị dược lâm sàng quan trọng nhất trong việc:",
    options: [
      "Phân biệt nhiễm khuẩn do vi khuẩn với sốt do virus và định hướng thời điểm an toàn để ngừng kháng sinh",
      "Định lượng chính xác số lượng vi khuẩn trong nước tiểu 24 giờ",
      "Đánh giá mức độ hủy hoại tế bào cơ tim sau nhồi máu cơ tim cấp",
      "Đo lường mức lọc cầu thận độc lập với chỉ số Creatinin"
    ],
    correct: 0,
    explanation: "Procalcitonin tăng mạnh trong nhiễm khuẩn toàn thân do vi khuẩn nhưng bị ức chế trong nhiễm virus. Việc theo dõi động học PCT (nồng độ giảm > 80% so với đỉnh hoặc < 0.25 mcg/L) là công cụ stewardship quan trọng giúp bác sĩ ngưng kháng sinh an toàn và rút ngắn thời gian điều trị."
  },
  {
    chapter: "Dược động học & Suy gan, thận",
    source: "UMP",
    sourceName: "Đại học Y Dược TP.HCM",
    question: "Bệnh nhân suy thận mạn giai đoạn cuối đang lọc máu ngắt quãng chu kỳ (Hemodialysis - HD). Thời điểm sử dụng các kháng sinh bị thải trừ nhiều qua màng lọc nhân tạo (như Vancomycin hay Ceftazidim) là:",
    options: [
      "Dùng sau khi kết thúc buổi lọc máu nhân tạo",
      "Dùng ngay trước khi bắt đầu cắm kim lọc máu 30 phút",
      "Dùng ở giữa chu kỳ lọc máu để máy lọc phân tán đều thuốc",
      "Chỉ dùng vào những ngày nghỉ không có lịch lọc máu"
    ],
    correct: 0,
    explanation: "Nếu dùng thuốc trước hoặc trong khi lọc máu, một lượng lớn thuốc sẽ bị màng lọc thẩm tách đào thải ra ngoài dịch lọc trước khi kịp phân bố vào mô, gây thất bại điều trị. Vì vậy, các thuốc bị lọc qua màng nhân tạo bắt buộc phải dùng ngay sau khi kết thúc mỗi buổi lọc máu."
  },
  {
    chapter: "Loãng xương, Tránh thai & Chuyển hóa",
    source: "UMP",
    sourceName: "Đại học Y Dược TP.HCM",
    question: "Thuốc chống loãng xương đường uống nhóm Bisphosphonat (như Alendronat 70 mg uống mỗi tuần một lần) đòi hỏi hướng dẫn sử dụng nghiêm ngặt nào để tránh loét thực quản?",
    options: [
      "Uống ngay vào buổi sáng khi bụng đói với một cốc nước lọc đầy (200 ml), giữ tư thế ngồi hoặc đứng thẳng ít nhất 30 phút sau uống và không ăn uống gì khác",
      "Nghiền nát viên thuốc hòa cùng nước cam chua để uống trước khi đi ngủ",
      "Uống cùng với một cốc sữa tươi giàu canxi ngay sau bữa ăn trưa",
      "Nằm nghỉ ngơi trên giường ngay lập tức sau khi nuốt viên thuốc"
    ],
    correct: 0,
    explanation: "Bisphosphonate đường uống có sinh khả dụng cực thấp (< 1%) và gây kích ứng, loét hoại tử niêm mạc thực quản nếu bị đọng lại. Bệnh nhân phải uống lúc bụng rỗng vào sáng sớm với nhiều nước lọc, không nằm và không ăn uống thuốc khác ít nhất 30 - 60 phút."
  },
  {
    chapter: "Điều trị Tăng huyết áp & Cấp cứu THA",
    source: "UMP",
    sourceName: "Đại học Y Dược TP.HCM",
    question: "Trong cấp cứu cơn Tăng huyết áp khẩn trương hoặc cấp cứu (Hypertensive crisis) có kèm Phình bóc tách động mạch chủ ngực cấp, mục tiêu kiểm soát huyết áp và nhịp tim ban đầu là:",
    options: [
      "Hạ nhanh huyết áp tâm thu xuống dưới 120 mmHg và nhịp tim dưới 60 lần/phút trong vòng 20 phút bằng thuốc chẹn beta tĩnh mạch (Esmolol, Labetalol)",
      "Hạ huyết áp thật chậm từ từ trong 48 giờ để tránh thiếu máu thận",
      "Tăng huyết áp lên cao hơn để duy trì áp lực tưới máu lòng mạch giả",
      "Dùng thuốc kích thích giao cảm để nâng huyết áp trung bình"
    ],
    correct: 0,
    explanation: "Phình bóc tách động mạch chủ là cấp cứu ngoại lệ duy nhất đòi hỏi hạ áp khẩn cấp: cần hạ HATT < 120 mmHg và nhịp tim < 60 bpm trong 20 phút bằng chẹn beta IV (như Esmolol/Labetalol) để giảm lực xé động mạch (dP/dt), tránh vỡ quai động mạch chủ dẫn đến tử vong tức thì."
  },
  {
    chapter: "Điều trị Tăng huyết áp & Cấp cứu THA",
    source: "UMP",
    sourceName: "Đại học Y Dược TP.HCM",
    question: "Ở bệnh nhân Nhồi máu cơ tim cấp có ST chênh lên (STEMI), thuốc chẹn beta giao cảm đường uống (như Metoprolol succinate, Bisoprolol) KHÔNG NÊN khởi đầu trong 24 giờ đầu nếu bệnh nhân có dấu hiệu nào sau đây?",
    options: [
      "Dấu hiệu suy tim cấp tiến triển hoặc nguy cơ cao rơi vào sốc tim (PR > 0.24s, nhịp tim < 60, HA < 100 mmHg)",
      "Đau ngực sau xương ức dữ dội kèm theo lo âu",
      "Mức đường huyết tăng nhẹ 8.5 mmol/L",
      "Tăng nhẹ nồng độ Troponin T huyết thanh"
    ],
    correct: 0,
    explanation: "Khởi đầu thuốc chẹn beta sớm trong nhồi máu cơ tim cấp chống chỉ định nếu bệnh nhân có dấu hiệu suy tim ứ huyết, nhịp chậm (< 60 bpm), tụt HA (HATT < 100), block nhĩ thất độ II-III hoặc nguy cơ sốc tim, vì tác dụng ức chế co bóp cơ tim có thể đẩy bệnh nhân vào trụy mạch không hồi phục."
  },
  {
    chapter: "Hen phế quản & COPD",
    source: "UMP",
    sourceName: "Đại học Y Dược TP.HCM",
    question: "Thuốc giãn phế quản kháng cholinergic tác dụng kéo dài (LAMA như Tiotropium) có cơ chế phân tử chính trong điều trị COPD là:",
    options: [
      "Phong bế thụ thể Muscarinic M3 tại cơ trơn khí phế quản ngăn cản tác dụng gây co thắt của Acetylcholin",
      "Kích thích trực tiếp adenylate cyclase làm tăng tổng hợp cAMP nội bào",
      "Ức chế enzym phosphodiesterase-4 (PDE4) làm giảm giải phóng cytokine gây viêm",
      "Đối kháng thụ thể Leukotriene CysLT1 tại niêm mạc phế quản"
    ],
    correct: 0,
    explanation: "Tiotropium là chất đối kháng cạnh tranh chọn lọc trên thụ thể Muscarinic M3 tại cơ trơn đường thở, ngăn chặn đường truyền tín hiệu phó giao cảm qua Acetylcholine, mang lại tác dụng giãn phế quản kéo dài trên 24 giờ và giảm ứ khí phổi trong COPD."
  },
  {
    chapter: "Kháng sinh & Kháng sinh dự phòng",
    source: "UMP",
    sourceName: "Đại học Y Dược TP.HCM",
    question: "Nhiễm khuẩn Clostridioides difficile (CDI) thể nặng hoặc tái phát trong bệnh viện theo hướng dẫn của IDSA/SHEA hiện nay ưu tiên lựa chọn thuốc đường uống hàng đầu là:",
    options: [
      "Fidaxomicin hoặc Vancomycin đường uống",
      "Metronidazol đường tĩnh mạch liều cao",
      "Amoxicillin đường uống kết hợp Neomycin",
      "Ceftriaxon truyền tĩnh mạch mỗi 12 giờ"
    ],
    correct: 0,
    explanation: "Hướng dẫn IDSA/SHEA hiện đại đã đưa Metronidazole xuống hàng lựa chọn thay thế (chỉ dùng cho thể nhẹ khi không có thuốc khác). Fidaxomicin 200mg uống 2 lần/ngày hoặc Vancomycin 125mg uống 4 lần/ngày là lựa chọn hàng đầu cho CDI vì tác dụng tại chỗ trong lòng ruột và tỷ lệ tái phát thấp."
  },
  {
    chapter: "Tương tác thuốc & Tương kỵ",
    source: "UMP",
    sourceName: "Đại học Y Dược TP.HCM",
    question: "Bệnh nhân đang dùng thuốc chống đông đường uống ức chế yếu tố Xa trực tiếp Rivaroxaban. Nếu bệnh nhân bị nôn ra máu dữ dội đe dọa tính mạng, chất giải độc đặc hiệu (Antidote) hoàn nguyên tác dụng chống đông là:",
    options: [
      "Andexanet alfa",
      "Idarucizumab",
      "Protamin sulfat",
      "Vitamin K1 tiêm tĩnh mạch"
    ],
    correct: 0,
    explanation: "Andexanet alfa là mồi nhử protein tái tổ hợp đặc hiệu liên kết và vô hiệu hóa các thuốc ức chế yếu tố Xa (Rivaroxaban, Apixaban). Idarucizumab (Praxbind) là kháng thể đơn dòng đặc hiệu cho Dabigatran. Protamine sulfat cho Heparin."
  },
  {
    chapter: "Tương tác thuốc & Tương kỵ",
    source: "UMP",
    sourceName: "Đại học Y Dược TP.HCM",
    question: "Thuốc chống đông trực tiếp Dabigatran etexilate có chất đối kháng đặc hiệu (Reversal agent) đã được cấp phép sử dụng trong cấp cứu xuất huyết đe dọa tính mạng là:",
    options: [
      "Idarucizumab (Praxbind)",
      "Andexanet alfa",
      "Flumazenil",
      "Phytomenadion"
    ],
    correct: 0,
    explanation: "Idarucizumab là đoạn kháng thể đơn dòng Fab nhân hóa có ái lực với Dabigatran cao gấp 350 lần so với ái lực của Dabigatran với Thrombin, giúp trung hòa hoàn toàn tác dụng chống đông chỉ sau vài phút tiêm truyền."
  },
  {
    chapter: "Kháng sinh & Kháng sinh dự phòng",
    source: "UMP",
    sourceName: "Đại học Y Dược TP.HCM",
    question: "Kháng sinh Ceftriaxon được đào thải qua những con đường sinh học nào trong cơ thể?",
    options: [
      "Đào thải kép cân bằng qua cả thận (khoảng 60%) và qua đường mật/phân (khoảng 40%)",
      "Thải trừ 100% nguyên vẹn qua lọc cầu thận",
      "Chuyển hóa 100% tại biểu mô phổi thành acid amin",
      "Chỉ bài xuất qua tuyến mồ hôi và dịch nước bọt"
    ],
    correct: 0,
    explanation: "Ceftriaxone có con đường thải trừ kép: ~60% qua thận và ~40% qua đường mật vào phân. Nhờ cơ chế bù trừ này, bệnh nhân suy thận đơn thuần hoặc suy gan đơn thuần thường không cần phải hiệu chỉnh liều Ceftriaxone (trừ khi suy cả gan và thận nặng phối hợp)."
  },
  {
    chapter: "Xét nghiệm lâm sàng & Nhận định KQ",
    source: "UMP",
    sourceName: "Đại học Y Dược TP.HCM",
    question: "Bệnh nhân điều trị bằng kháng sinh nhóm Quinolon (Levofloxacin) hoặc Macrolid (Azithromycin) cần được theo dõi điện tâm đồ (ECG) vì nguy cơ gây ra tác dụng phụ tim mạch nguy hiểm nào sau đây?",
    options: [
      "Kéo dài khoảng QT (QT prolongation) dẫn đến loạn nhịp xoắn đỉnh (Torsades de Pointes)",
      "Gây rung nhĩ kịch phát do cường giao cảm",
      "Gây tràn dịch màng ngoài tim co thắt",
      "Hẹp van động mạch chủ cấp tính"
    ],
    correct: 0,
    explanation: "Cả Quinolone và Macrolide đều ức chế kênh kali hERG tim, làm chậm quá trình tái cực thất, dẫn đến kéo dài khoảng QTc trên điện tâm đồ. Biến cố này có thể kích hoạt cơn loạn nhịp thất đa hình thái chết người gọi là xoắn đỉnh (Torsades de Pointes), đặc biệt khi kèm hạ K+ hay hạ Mg2+."
  },
  {
    chapter: "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    source: "UMP",
    sourceName: "Đại học Y Dược TP.HCM",
    question: "Kháng sinh nào sau đây được xem là an toàn và được lựa chọn phổ biến nhất trong điều trị nhiễm khuẩn đường tiết niệu hoặc viêm đường hô hấp ở phụ nữ mang thai?",
    options: [
      "Beta-lactam (Amoxicillin / Clavulanat hoặc Cephalosporin)",
      "Fluoroquinolon (Ciprofloxacin)",
      "Aminoglycosid (Gentamicin)",
      "Doxycyclin (Tetracyclin)"
    ],
    correct: 0,
    explanation: "Kháng sinh Beta-lactam (Penicillin, Cephalosporin) không gây độc tế bào thai và được xếp loại an toàn hàng đầu (FDA nhóm B) trong suốt thai kỳ. Fluoroquinolone gây độc sụn khớp; Aminoglycoside độc tai trong thận; Tetracycline gây hỏng men và vàng răng vĩnh viễn cho thai nhi."
  },
  {
    chapter: "Sử dụng thuốc ở Người cao tuổi",
    source: "UMP",
    sourceName: "Đại học Y Dược TP.HCM",
    question: "Theo Tiêu chuẩn Beers (Beers Criteria) của Hội Lão khoa Hoa Kỳ (AGS), thuốc an thần ngủ nhóm Benzodiazepin (như Diazepam, Lorazepam) nên TRÁNH sử dụng ở người cao tuổi chủ yếu do:",
    options: [
      "Làm tăng mạnh nguy cơ lú lẫn, suy giảm nhận thức, chóng mặt và té ngã gãy xương hông",
      "Gây suy tủy xương và giảm bạch cầu hạt nặng nề",
      "Gây loét thủng dạ dày tá tràng chảy máu",
      "Làm tăng huyết áp kịch phát dẫn đến xuất huyết não"
    ],
    correct: 0,
    explanation: "Người cao tuổi tăng độ nhạy cảm với Benzodiazepine và giảm tốc độ chuyển hóa thuốc tại gan. Thuốc gây an thần quá mức, rối loạn điều hòa thăng bằng vận động, mê sảng và té ngã gây gãy cổ xương đùi chấn thương sọ não, nên thuộc danh mục thuốc nguy cơ cao cần tránh theo Tiêu chuẩn Beers."
  },
  {
    chapter: "Xét nghiệm lâm sàng & Nhận định KQ",
    source: "UMP",
    sourceName: "Đại học Y Dược TP.HCM",
    question: "Ở bệnh nhân đái tháo đường, chỉ số HbA1c phản ánh mức độ kiểm soát đường huyết trung bình trong khoảng thời gian nào trước đó?",
    options: [
      "2 đến 3 tháng (tương ứng với đời sống trung bình 120 ngày của hồng cầu)",
      "24 đến 48 giờ vừa qua",
      "1 đến 2 tuần lễ gần nhất",
      "1 năm trở lại đây"
    ],
    correct: 0,
    explanation: "HbA1c là sản phẩm gắn kết không thuận nghịch của Glucose với Hemoglobin trong hồng cầu. Do đời sống trung bình của hồng cầu là 120 ngày, chỉ số HbA1c phản ánh chính xác nồng độ glucose máu trung bình trong 2 đến 3 tháng trước đó, không bị ảnh hưởng bởi bữa ăn tức thời."
  }
];

module.exports = UMP_QUESTIONS;
