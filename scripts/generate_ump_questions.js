// 60 High-Yield Clinical Pharmacy Questions - Đại học Y Dược TP.HCM (UMP)
// Chuyên đề: Tim mạch, Cấp cứu THA, Kháng sinh hô hấp, Tiêu hóa trẻ em, Trissel's, Beers, STOPP/START
// Đã chuẩn hóa độ dài phương án, loại bỏ hoàn toàn thiên kiến độ dài

const UMP_QUESTIONS = [
  {
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Tại sao kháng sinh Daptomycin có hoạt tính diệt khuẩn rất mạnh trên tụ cầu vàng kháng Methicillin (MRSA) nhưng lại CHỐNG CHỈ ĐỊNH TUYỆT ĐỐI trong điều trị viêm phổi do MRSA?",
    "options": [
      "Daptomycin không thâm nhập được qua hàng rào mao mạch phế nang",
      "Daptomycin bị chất diện hoạt phế nang gắn kết và làm bất hoạt hoàn toàn",
      "Daptomycin gây co thắt phế quản dữ dội và tràn khí màng phổi cấp tính",
      "Daptomycin bị chuyển hóa hoàn toàn bởi enzym cytochrome P450 tại biểu mô đường thở"
    ],
    "correct": 1,
    "explanation": "Daptomycin tương tác mạnh với chất diện hoạt phổi (Surfactant) khiến thuốc bị kết cụm và mất hoàn toàn hoạt tính kháng khuẩn trong nhu mô phổi. Vì vậy Daptomycin chống chỉ định trong viêm phổi, chỉ dùng cho nhiễm khuẩn da mô mềm, du khuẩn huyết và viêm nội tâm mạc."
  },
  {
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Bệnh nhân nam 58 tuổi, tiền sử ĐTĐ tuýp 2 và Tăng huyết áp 5 năm. Xét nghiệm thấy Creatinin máu 1.4 mg/dL, eGFR 52 mL/phút, Tỉ số Albumin/Creatinin niệu (UACR) là 450 mg/g (albumin niệu đại thể). Lựa chọn thuốc hạ áp đầu tay tối ưu nhất theo khuyến cáo KDIGO và ADA là:",
    "options": [
      "Thuốc chẹn kênh Canxi nhóm DHP tác dụng kéo dài đơn độc",
      "Thuốc ức chế men chuyển hoặc chẹn thụ thể Angiotensin II",
      "Thuốc chẹn thụ thể beta giao cảm chọn lọc tim liều cao",
      "Thuốc lợi tiểu Thiazid phối hợp thuốc giãn mạch trực tiếp"
    ],
    "correct": 1,
    "explanation": "Ở bệnh nhân đái tháo đường kèm tăng huyết áp và có albumin niệu (UACR >= 30 mg/g, đặc biệt >= 300 mg/g), ACEI hoặc ARB là lựa chọn bắt buộc hàng đầu nhờ tác dụng giãn tiểu động mạch đi của cầu thận, giúp giảm áp lực trong cầu thận và làm chậm tiến triển bệnh thận mạn."
  },
  {
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Sau khi bắt đầu dùng Enalapril được 2 tuần, bệnh nhân đái tháo đường có suy thận mạn được xét nghiệm lại. Mức tăng Creatinin huyết thanh nào sau đây được coi là chấp nhận được và KHÔNG cần phải ngừng thuốc?",
    "options": [
      "Tăng không quá 30% so với giá trị Creatinin nền ban đầu",
      "Tăng không quá 100% so với giá trị nền",
      "Bất kỳ mức tăng nào trên 5% đều bắt buộc phải ngừng thuốc ngay lập tức",
      "Chỉ chấp nhận khi chỉ số Creatinin giảm xuống thấp hơn mức ban đầu"
    ],
    "correct": 0,
    "explanation": "Khi khởi đầu ACEI/ARB, việc giãn tiểu động mạch đi làm giảm áp lực lọc cầu thận nên Creatinin huyết thanh thường tăng nhẹ. Mức tăng dưới 30% so với nồng độ nền trong vòng 1-2 tuần đầu được coi là đáp ứng huyết động bình thường và an toàn, không cần ngừng thuốc."
  },
  {
    "chapter": "Dược động học & Suy gan, thận",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Bệnh nhân xơ gan cổ trướng mức độ vừa đang được điều trị lợi tiểu nội trú. Tỷ lệ liều kết hợp giữa Spironolacton và Furosemid được Hội Nghiên cứu Bệnh gan Hoa Kỳ (AASLD) khuyến cáo để duy trì hiệu quả bài niệu và giữ thăng bằng nồng độ Kali máu là:",
    "options": [
      "100 mg Spironolacton : 40 mg Furosemid",
      "25 mg Spironolacton : 100 mg Furosemid",
      "50 mg Spironolacton : 50 mg Furosemid",
      "200 mg Spironolacton : 10 mg Furosemid"
    ],
    "correct": 0,
    "explanation": "Tỷ lệ chuẩn Spironolactone 100 mg : Furosemide 40 mg (tối đa 400 mg : 160 mg/ngày) giúp phối hợp tác dụng lợi tiểu quai và kháng Aldosterone, đồng thời cân bằng lượng Kali bài tiết qua nước tiểu (Spironolactone giữ K+, Furosemide thải K+), duy trì Kali máu ổn định."
  },
  {
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Bệnh nhân xơ gan cổ trướng nhập viện vì sốt và đau bụng, chọc dịch màng bụng cho thấy số lượng bạch cầu đa nhân trung tính (PMN) là 380 tế bào/mm³. Chẩn đoán Viêm phúc mạc tiên phát do vi khuẩn (SBP) được xác lập. Kháng sinh kinh nghiệm đường tĩnh mạch được khuyến cáo hàng đầu là:",
    "options": [
      "Cefotaxim hoặc Ceftriaxon",
      "Metronidazol phối hợp Vancomycin đường uống",
      "Amikacin đơn trị liệu liều cao",
      "Doxycyclin tiêm truyền tĩnh mạch chậm"
    ],
    "correct": 0,
    "explanation": "Tiêu chuẩn chẩn đoán SBP là PMN trong dịch cổ trướng >= 250 tế bào/mm³. Tác nhân gây bệnh chủ yếu là trực khuẩn gram âm đường ruột (E. coli, Klebsiella). Kháng sinh hàng đầu là Cephalosporin thế hệ 3 đường tĩnh mạch (Cefotaxime 2g mỗi 8h hoặc Ceftriaxone 2g mỗi 24h) kết hợp truyền Albumin."
  },
  {
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Phác đồ điều trị nền tảng 'Tứ trụ' (Four Pillars) giúp cải thiện tỷ lệ tử vong ở bệnh nhân Suy tim mạn tính phân suất tống máu giảm (HFrEF) theo ESC và AHA bao gồm các nhóm thuốc nào?",
    "options": [
      "ARNI + Chẹn beta + Kháng thụ thể Mineralocorticoid + Ức chế SGLT2",
      "Digoxin + Lợi tiểu Thiazid + Chẹn kênh Calci DHP + Aspirin liều thấp",
      "Amlodipin + Nitrate kéo dài + Ivabradin + Furosemid tiêm tĩnh mạch",
      "Ức chế men chuyển + Chẹn thụ thể AT1 + Kháng Aldosteron + Canxi uống"
    ],
    "correct": 0,
    "explanation": "Bốn trụ cột suy tim HFrEF đã được chứng minh giảm tử vong tim mạch rõ rệt gồm: (1) ARNI (Sacubitril/Valsartan) hoặc ACEI; (2) Thuốc chẹn beta được chứng minh (Bisoprolol, Carvedilol, Metoprolol succinate); (3) MRA (Spironolactone, Eplerenone); (4) Thuốc ức chế SGLT2 (Dapagliflozin, Empagliflozin)."
  },
  {
    "chapter": "Tương tác thuốc & Tương kỵ",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Khi chuyển đổi từ thuốc ức chế men chuyển (như Enalapril) sang thuốc ức chế thụ thể Angiotensin-Neprilysin (ARNI - Sacubitril/Valsartan), bắt buộc phải có khoảng thời gian nghỉ (Washout period) là bao lâu để tránh nguy cơ phù mạch đe dọa tính mạng?",
    "options": [
      "Tối thiểu 36 giờ sau liều ACEI cuối cùng",
      "Không cần khoảng nghỉ, có thể uống ARNI ngay cữ tiếp theo",
      "Ít nhất 7 ngày để thanh thải hết các thụ thể",
      "Khoảng 6 giờ nếu chức năng thận của người bệnh hoàn toàn bình thường"
    ],
    "correct": 0,
    "explanation": "Cả ACEI và chất ức chế Neprilysin (Sacubitril) đều làm chậm phân hủy Bradykinin. Nếu dùng cùng lúc hoặc không cách nhau đủ 36 giờ, Bradykinin tích lũy ồ ạt dẫn đến phù mạch mạch máu thanh quản cấp tính, gây tắc nghẽn đường thở và nghẹt thở tử vong."
  },
  {
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Bệnh nhân nhiễm khuẩn bệnh viện nặng do Trực khuẩn mủ xanh (Pseudomonas aeruginosa). Kháng sinh nhóm Beta-lactam nào sau đây KHÔNG CÓ hoạt tính kháng vi khuẩn này?",
    "options": [
      "Ceftriaxon",
      "Ceftazidim",
      "Cefepim",
      "Piperacillin / Tazobactam"
    ],
    "correct": 0,
    "explanation": "Ceftriaxone và Cefotaxime là Cephalosporin thế hệ 3 nhưng KHÔNG có hoạt tính trên Pseudomonas aeruginosa. Các Cephalosporin có hoạt tính chống mủ xanh là Ceftazidime (thế hệ 3) và Cefepime (thế hệ 4), cùng với Piperacillin/Tazobactam và Carbapenem (Meropenem, Imipenem)."
  },
  {
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Kháng sinh nhóm Carbapenem nào sau đây KHÔNG CÓ hoạt tính chống Pseudomonas aeruginosa và Acinetobacter baumannii, do đó chỉ thích hợp cho nhiễm khuẩn cộng đồng hoặc trực khuẩn ruột sinh ESBL?",
    "options": [
      "Meropenem",
      "Imipenem / Cilastatin",
      "Ertapenem",
      "Doripenem"
    ],
    "correct": 2,
    "explanation": "Ertapenem (Invanz) có đặc tính dược động học dùng 1 lần/ngày do gắn protein cao, nhưng phổ kháng khuẩn bị khuyết: KHÔNG diệt được Pseudomonas aeruginosa, Acinetobacter spp. và Enterococcus. Ba carbapenem còn lại (Mero, Imi, Dori) đều bao phủ được Pseudomonas."
  },
  {
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Trong điều trị nhiễm khuẩn huyết do Trực khuẩn đường ruột kháng Carbapenem (CRE) sinh men men carbapenemase nhóm KPC hoặc OXA-48, kháng sinh ức chế beta-lactamase thế hệ mới phối hợp được ưu tiên lựa chọn là:",
    "options": [
      "Ceftazidim / Avibactam",
      "Amoxicillin / Acid clavulanic",
      "Ampicillin / Sulbactam",
      "Cefoperazon / Sulbactam"
    ],
    "correct": 0,
    "explanation": "Ceftazidime/Avibactam (Zavicefta) là kháng sinh thế hệ mới phối hợp Avibactam (chất ức chế beta-lactamase non-beta-lactam) có khả năng ức chế men Carbapenemase nhóm A (KPC) và nhóm D (OXA-48), là liệu pháp đầu tay giải cứu nhiễm CRE."
  },
  {
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Kháng sinh Tigecyclin có phổ kháng khuẩn rất rộng bao phủ MRSA, VRE, CRE và Acinetobacter đa kháng, nhưng có nhược điểm dược động học nghiêm trọng nào cần lưu ý?",
    "options": [
      "Nồng độ trong máu thấp do Vd lớn, không thích hợp cho nhiễm khuẩn huyết",
      "Thải trừ hoàn toàn qua thận dạng nguyên vẹn gây độc tính thận nặng nề",
      "Gây tăng huyết áp kịch phát ác tính do co thắt động mạch thận hai bên",
      "Thời gian bán thải cực ngắn dưới 15 phút nên phải tiêm truyền liên tục"
    ],
    "correct": 0,
    "explanation": "Tigecycline có thể tích phân bố rất lớn (Vd > 7 - 10 L/kg), thuốc khuếch tán mạnh vào các mô sâu (mô mềm, ổ bụng) nhưng nồng độ trong huyết tương lại rất thấp. Do đó, FDA cảnh báo không dùng Tigecycline đơn độc điều trị nhiễm khuẩn huyết hoặc viêm phổi thở máy."
  },
  {
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Bệnh nhân nam 65 tuổi có tiền sử Rung nhĩ không do bệnh van tim (điểm CHA2DS2-VASc = 3) vừa trải qua can thiệp đặt stent mạch vành phủ thuốc (PCI) do Hội chứng vành cấp. Chiến lược chống huyết khối tối ưu hiện nay theo ESC nhằm cân bằng nguy cơ tắc stent và xuất huyết là:",
    "options": [
      "Liệu pháp 3 thuốc kéo dài liên tục 12 tháng bất kể nguy cơ xuất huyết cao",
      "Chỉ dùng đơn trị liệu Aspirin liều thấp 81 mg duy nhất ngay sau can thiệp",
      "Liệu pháp 3 thuốc ngắn hạn, sau đó chuyển sang liệu pháp 2 thuốc đến 12 tháng",
      "Ngừng toàn bộ thuốc chống đông đường uống và chỉ dùng Ticagrelor đơn độc"
    ],
    "correct": 2,
    "explanation": "Chiến lược hiện đại ưu tiên giảm thời gian phác đồ 3 thuốc (Triple therapy: NOAC + Aspirin + Clopidogrel) xuống tối thiểu (thường <= 1 tuần đến 1 tháng tùy nguy cơ huyết khối mạch vành), sau đó duy trì phác đồ đôi (Dual therapy: NOAC + Clopidogrel) đến 12 tháng để giảm tối đa biến cố xuất huyết nặng."
  },
  {
    "chapter": "Hen phế quản & COPD",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Theo hướng dẫn GOLD, chỉ định dùng kháng sinh trong đợt cấp bệnh phổi tắc nghẽn mạn tính (AECOPD) dựa trên tiêu chuẩn Anthonisen khi bệnh nhân có biểu hiện nào?",
    "options": [
      "Bệnh nhân có tăng lượng đờm mủ kèm theo tăng khó thở hoặc tăng thể tích đờm",
      "Chỉ cần bệnh nhân có ho khan đơn thuần không có sốt",
      "Mọi bệnh nhân đợt cấp COPD đều bắt buộc phải dùng kháng sinh tối thiểu 14 ngày",
      "Chỉ dùng kháng sinh khi cấy đờm dương tính sau 7 ngày nuôi cấy vi khuẩn"
    ],
    "correct": 0,
    "explanation": "Tiêu chuẩn Anthonisen: (1) Tăng khó thở, (2) Tăng thể tích đờm, (3) Tăng tính chất mủ của đờm. Kháng sinh được chỉ định khi có đủ 3 triệu chứng, hoặc có 2 triệu chứng trong đó bắt buộc có đờm mủ, hoặc bệnh nhân đợt cấp nặng phải thở máy (xâm lấn hoặc không xâm lấn)."
  },
  {
    "chapter": "Hen phế quản & COPD",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Thời gian điều trị bằng Corticoid toàn thân (như Prednison 40 mg đường uống mỗi ngày) được GOLD khuyến cáo trong đợt kịch phát COPD là bao lâu?",
    "options": [
      "Dùng trong 5 ngày",
      "Dùng từ 14 đến 21 ngày",
      "Dùng từ 1 đến 2 tháng",
      "Dùng liên tục suốt đời"
    ],
    "correct": 0,
    "explanation": "Nghiên cứu REDUCE chứng minh dùng Prednisone 40 mg/ngày trong 5 ngày mang lại hiệu quả cải thiện chức năng hô hấp và tỷ lệ hồi phục tương đương với liệu trình 14 ngày, nhưng giảm đáng kể nguy cơ tăng đường huyết, nhiễm trùng cơ hội và ức chế tuyến thượng thận."
  },
  {
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Khi bệnh nhân dùng Glucocorticoid đường toàn thân kéo dài trên 3 tuần, nguy cơ suy thượng thận thứ phát xảy ra do cơ chế feedback âm tính tác động lên cấu trúc nào?",
    "options": [
      "Kích thích tuyến tủy thượng thận tăng tiết Catecholamin",
      "Ức chế trục Hạ đồi - Tuyến yên - Vỏ thượng thận làm teo vỏ thượng thận",
      "Phá hủy trực tiếp các receptor corticosteroid tại màng tế bào bạch cầu",
      "Tăng cường hoạt tính của enzym 11-beta-HSD1 tại mô mỡ nội tạng"
    ],
    "correct": 1,
    "explanation": "Dùng Glucocorticoid ngoại sinh kéo dài sẽ kích hoạt cơ chế ức chế điều hòa ngược (Negative Feedback) lên vùng dưới đồi (giảm tiết CRH) và tuyến yên (giảm tiết ACTH). Thiếu ACTH kéo dài khiến lớp bó và lớp lưới của vỏ thượng thận bị teo nhỏ, mất khả năng tự tiết Cortisol khi ngừng thuốc."
  },
  {
    "chapter": "Thuốc giảm đau",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Thuốc giảm đau Paracetamol có liều tối đa hàng ngày khuyến cáo cho người lớn có chức năng gan bình thường là bao nhiêu để phòng ngừa hoại tử tế bào gan?",
    "options": [
      "4 gam / ngày",
      "2 gam / ngày",
      "6 gam / ngày",
      "8 gam / ngày"
    ],
    "correct": 0,
    "explanation": "Liều tối đa của Paracetamol ở người lớn bình thường là 4g/24 giờ (mỗi lần 500 - 1000mg cách nhau tối thiểu 4-6 giờ). Với người cao tuổi suy kiệt, người nghiện rượu mạn tính hoặc có bệnh gan mạn tính, liều tối đa nên giảm xuống không quá 2 - 3g/24 giờ."
  },
  {
    "chapter": "Thuốc giảm đau",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Khi điều trị cơn Gút cấp tính, Colchicin đường uống nên được dùng với chế độ liều chuẩn hóa theo khuyến cáo hiện đại của ACR và EULAR như thế nào?",
    "options": [
      "Uống 1 mg mỗi giờ cho đến khi xuất hiện tiêu chảy dữ dội thì dừng lại",
      "Khởi đầu 1 mg, sau 1 giờ thêm 0.5 mg, tổng ngày đầu không quá 1.5 - 1.8 mg",
      "Uống liều cao 5 mg ngay từ đầu kết hợp truyền dịch kiềm hóa nước tiểu",
      "Dùng duy nhất một viên 0.25 mg mỗi 3 ngày một lần sau khi ăn no xong"
    ],
    "correct": 1,
    "explanation": "Phác đồ Colchicine liều cao cũ (uống mỗi giờ đến khi tiêu chảy) gây độc tính tiêu hóa rất nặng. Hướng dẫn hiện đại khuyến cáo phác đồ liều thấp: Khởi đầu 1mg (hoặc 1.2mg), 1 giờ sau uống thêm 0.5mg (hoặc 0.6mg). Liều thấp có hiệu quả giảm đau tương đương liều cao nhưng độ an toàn vượt trội."
  },
  {
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Thuốc hạ Acid Uric máu nhóm ức chế Xanthine Oxidase (Allopurinol) khi khởi đầu điều trị hạ acid uric cho bệnh nhân gút mạn tính bắt buộc phải lưu ý điều gì?",
    "options": [
      "Kiểm tra kiểu gen HLA-B*5801 để phòng ngừa hội chứng dị ứng nặng Stevens-Johnson",
      "Định lượng nồng độ enzym G6PD trong hồng cầu để phòng ngừa nguy cơ tan máu cấp",
      "Xét nghiệm kiểu hình đa hình enzym CYP2C9 để xác định tốc độ chuyển hóa thuốc",
      "Đo hoạt tính enzym Thiopurine methyltransferase để tránh nguy cơ suy tủy xương"
    ],
    "correct": 0,
    "explanation": "Khi mới dùng Allopurinol/Febuxostat, nồng độ acid uric máu giảm nhanh làm bong tróc và hòa tan các tinh thể urat từ mô vào dịch khớp, dễ kích hoạt cơn gút cấp bùng phát. Do đó, bắt buộc phải dùng đồng thời thuốc phòng ngừa (Colchicine 0.5-1mg/ngày hoặc NSAID liều thấp) trong 3 - 6 tháng đầu."
  },
  {
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Biến chứng nguy hiểm nhất của thuốc Allopurinol là Hội chứng quá mẫn nghiêm trọng (AHS / SCAR bao gồm Stevens-Johnson và TEN). Yếu tố nguy cơ di truyền liên quan chặt chẽ nhất ở người châu Á (người Việt Nam, người Hoa) là mang alen:",
    "options": [
      "HLA-B*58:01",
      "HLA-B*15:02",
      "HLA-B*57:01",
      "HLA-DQB1*06:02"
    ],
    "correct": 0,
    "explanation": "Alen HLA-B*58:01 liên quan mật thiết với hội chứng quá mẫn đe dọa tính mạng do Allopurinol (tỷ lệ mang alen này ở người Việt khoảng 10-15%). HLA-B*15:02 liên quan đến Carbamazepine; HLA-B*57:01 liên quan đến Abacavir."
  },
  {
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Bệnh nhân nam 62 tuổi mắc Viêm phổi cộng đồng (CAP) điều trị nội trú tại khoa Hô hấp (không nằm ICU), không có yếu tố nguy cơ nhiễm trực khuẩn mủ xanh hay MRSA. Phác đồ kháng sinh kinh nghiệm theo ATS/IDSA và Hội Phổi Việt Nam là:",
    "options": [
      "Vancomycin tiêm truyền kết hợp với Gentamicin tiêm bắp duy trì liên tục trong 14 ngày",
      "Phối hợp Beta-lactam đường tiêm với Macrolid hoặc một Fluoroquinolon hô hấp đơn trị liệu",
      "Metronidazol đường uống phối hợp Ciprofloxacin truyền tĩnh mạch điều trị nội trú",
      "Cefazolin đơn độc truyền tĩnh mạch mỗi 8 giờ kết hợp thuốc giảm ho Codein đường uống"
    ],
    "correct": 1,
    "explanation": "Đối với CAP nội trú ngoài ICU, phác đồ chuẩn bao phủ cả vi khuẩn điển hình (Phế cầu) và không điển hình (Mycoplasma, Chlamydia, Legionella) là: Beta-lactam tiêm (Ceftriaxone 1-2g/ngày hoặc Ampicillin/Sulbactam) + Macrolide (Azithromycin/Clarithromycin), hoặc một Quinolone hô hấp (Levofloxacin 750mg, Moxifloxacin)."
  },
  {
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Thang điểm CURB-65 được sử dụng để đánh giá độ nặng và định hướng nơi điều trị cho bệnh nhân Viêm phổi cộng đồng (CAP). Năm tiêu chí của thang điểm này là:",
    "options": [
      "Rối loạn ý thức, Ure máu > 7 mmol/L, Tần số thở ≥ 30 lần/phút, Huyết áp, Tuổi ≥ 65",
      "Ho nhiều, Ure máu, Rối loạn nhịp tim, Bạch cầu máu > 15 G/L, Tuổi ≥ 60",
      "Hôn mê, Đường huyết > 10 mmol/L, Suy thận cấp, Tụt huyết áp, Tuổi ≥ 65",
      "Khó thở, Creatinin máu > 150 mcmol/L, Suy tim, SpO2 < 90%, Tuổi ≥ 70"
    ],
    "correct": 0,
    "explanation": "CURB-65 gồm: C (Confusion - lú lẫn/rối loạn ý thức); U (Urea > 7 mmol/L); R (Respiratory rate >= 30 lần/phút); B (Blood pressure: SBP < 90 hoặc DBP <= 60 mmHg); 65 (Tuổi >= 65). 0-1 điểm: điều trị ngoại trú; 2 điểm: cân nhắc nhập viện; 3-5 điểm: nhập viện điều trị nội trú/ICU."
  },
  {
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Bệnh nhân sau ghép thận đang dùng thuốc ức chế miễn dịch Tacrolimus. Kháng sinh hoặc thuốc chống nấm nào sau đây khi dùng chung sẽ làm TĂNG VỌT nồng độ Tacrolimus trong máu dẫn đến tổn thương thận cấp do ngộ độc?",
    "options": [
      "Voriconazol và Ketoconazol",
      "Rifampicin và Phenobarbital",
      "Amoxicillin và Cefuroxim",
      "Co-trimoxazol liều dự phòng nhiễm PCP"
    ],
    "correct": 0,
    "explanation": "Tacrolimus chuyển hóa chuyển hóa qua CYP3A4 và là cơ chất của P-gp. Các thuốc chống nấm nhóm Azole (Voriconazole, Itraconazole, Ketoconazole) ức chế rất mạnh CYP3A4, làm nồng độ Tacrolimus tăng vọt gấp 3 - 5 lần, gây co thắt tiểu động mạch vào cầu thận và suy thận cấp."
  },
  {
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Bệnh nhân đái tháo đường tuýp 2 mắc kèm Bệnh tim thiếu máu cục bộ do xơ vữa (ASCVD) hoặc Suy tim mạn tính. Nhóm thuốc hạ đường huyết nào được khuyến cáo ưu tiên bổ sung hàng đầu độc lập với mức HbA1c ban đầu?",
    "options": [
      "Thuốc đồng vận thụ thể GLP-1 hoặc thuốc ức chế kênh SGLT2",
      "Thuốc nhóm Sulfonylurea thế hệ 1 liều cao trước bữa ăn",
      "Thuốc nhóm Thiazolidinedion kết hợp thuốc ức chế DPP-4",
      "Insulin NPH tiêm dưới da liều cao duy trì trước khi ngủ"
    ],
    "correct": 0,
    "explanation": "Khuyến cáo ADA và ESC nhấn mạnh: Bệnh nhân ĐTĐ tuýp 2 có bệnh tim mạch xơ vữa (ASCVD) ưu tiên dùng GLP-1 RA có chứng minh lợi ích tim mạch (Liraglutide, Semaglutide) hoặc SGLT2i. Với suy tim (HFrEF/HFpEF) hoặc bệnh thận mạn (CKD), SGLT2i là lựa chọn số 1 để giảm tỷ lệ tử vong và biến cố tim mạch."
  },
  {
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Tác dụng phụ hiếm gặp nhưng rất nguy hiểm của thuốc ức chế SGLT2 (Dapagliflozin, Empagliflozin) cần được tư vấn kỹ cho bệnh nhân là:",
    "options": [
      "Xơ gan teo đét tiến triển nhanh dẫn đến suy gan cấp bùng phát và hôn mê gan",
      "Nhiễm toan ceton đái tháo đường với mức đường huyết bình thường hoặc chỉ tăng nhẹ",
      "Tăng huyết áp kịch phát dẫn đến phình tách động mạch chủ ngực và xuất huyết não",
      "Gây tổn thương thần kinh thính giác dẫn đến điếc tiếp nhận không thể hồi phục"
    ],
    "correct": 1,
    "explanation": "Thuốc ức chế SGLT2 thải đường qua nước tiểu nên dù cơ thể thiếu hụt insulin gây nhiễm toan ceton, đường huyết vẫn có thể < 250 mg/dL (Euglycemic DKA). Triệu chứng gồm buồn nôn, đau bụng, thở nhanh sâu, toan chuyển hóa khoảng trống anion tăng. Cần tạm ngưng thuốc khi phẫu thuật hoặc nhịn ăn kéo dài."
  },
  {
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Kháng sinh Fosfomycin đường uống dạng hạt cốm tan (Fosfomycin trometamol 3g liều duy nhất) được khuyến cáo là lựa chọn hàng đầu cho chỉ định nhiễm khuẩn nào?",
    "options": [
      "Nhiễm khuẩn tiết niệu dưới không biến chứng ở phụ nữ",
      "Viêm bể thận - thận cấp tính có sốt cao và rét run",
      "Nhiễm khuẩn huyết do tụ cầu vàng đa kháng",
      "Viêm tuyến tiền liệt mạn tính do vi khuẩn kỵ khí"
    ],
    "correct": 0,
    "explanation": "Fosfomycin trometamol 3g gói uống liều duy nhất đạt nồng độ rất cao trong nước tiểu kéo dài 48 - 72 giờ, diệt tốt E. coli (kể cả chủng sinh ESBL) và E. faecalis, là phác đồ đầu tay cho viêm bàng quang cấp không biến chứng ở phụ nữ. Không dùng cho viêm đài bể thận vì không đạt nồng độ mô thận đủ cao."
  },
  {
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Trong nhiễm trùng huyết do Acinetobacter baumannii kháng Carbapenem (CRAB), phác đồ phối hợp kháng sinh thường được áp dụng bao gồm thuốc nào sau đây?",
    "options": [
      "Colistin liều nạp phối hợp Ampicillin / Sulbactam liều cao",
      "Penicillin G tinh thể tiêm tĩnh mạch phối hợp Metronidazol",
      "Ceftriaxon phối hợp Gentamicin liều thông thường",
      "Erythromycin phối hợp Doxycyclin đường uống"
    ],
    "correct": 0,
    "explanation": "Acinetobacter baumannii đa kháng (CRAB) là tác nhân cực kỳ nguy hiểm. Phác đồ cứu cánh theo IDSA thường dựa trên Colistin (có liều nạp) phối hợp với Ampicillin/Sulbactam liều cao (Sulbactam có hoạt tính diệt khuẩn tự nhiên trên Acinetobacter) hoặc phối hợp Tigecycline liều tăng gấp đôi."
  },
  {
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Chỉ số Biomarker Procalcitonin (PCT) trong huyết thanh có giá trị dược lâm sàng quan trọng nhất trong việc:",
    "options": [
      "Định lượng chính xác số lượng vi khuẩn sống có mặt trong mẫu nước tiểu 24 giờ của bệnh nhân",
      "Phân biệt nhiễm khuẩn do vi khuẩn với sốt do virus và định hướng an toàn ngừng kháng sinh",
      "Đánh giá mức độ hủy hoại tế bào cơ tim sau hội chứng vành cấp và nhồi máu cơ tim cấp tính",
      "Đo lường chính xác mức lọc cầu thận độc lập với chỉ số Creatinin và khối lượng cơ bắp"
    ],
    "correct": 1,
    "explanation": "Procalcitonin tăng mạnh trong nhiễm khuẩn toàn thân do vi khuẩn nhưng bị ức chế trong nhiễm virus. Việc theo dõi động học PCT (nồng độ giảm > 80% so với đỉnh hoặc < 0.25 mcg/L) là công cụ stewardship quan trọng giúp bác sĩ ngưng kháng sinh an toàn và rút ngắn thời gian điều trị."
  },
  {
    "chapter": "Dược động học & Suy gan, thận",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Bệnh nhân suy thận mạn giai đoạn cuối đang lọc máu ngắt quãng chu kỳ (Hemodialysis - HD). Thời điểm sử dụng các kháng sinh bị thải trừ nhiều qua màng lọc nhân tạo (như Vancomycin hay Ceftazidim) là:",
    "options": [
      "Dùng sau khi kết thúc buổi lọc máu nhân tạo",
      "Dùng ngay trước khi bắt đầu cắm kim lọc máu 30 phút",
      "Dùng ở giữa chu kỳ lọc máu để máy lọc phân tán đều thuốc",
      "Chỉ dùng vào những ngày nghỉ không có lịch lọc máu"
    ],
    "correct": 0,
    "explanation": "Nếu dùng thuốc trước hoặc trong khi lọc máu, một lượng lớn thuốc sẽ bị màng lọc thẩm tách đào thải ra ngoài dịch lọc trước khi kịp phân bố vào mô, gây thất bại điều trị. Vì vậy, các thuốc bị lọc qua màng nhân tạo bắt buộc phải dùng ngay sau khi kết thúc mỗi buổi lọc máu."
  },
  {
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Thuốc chống loãng xương đường uống nhóm Bisphosphonat (như Alendronat 70 mg uống mỗi tuần một lần) đòi hỏi hướng dẫn sử dụng nghiêm ngặt nào để tránh loét thực quản?",
    "options": [
      "Nghiền nát viên thuốc hòa cùng nước cam chua để uống ngay trước lúc lên giường đi ngủ",
      "Uống cùng một cốc sữa tươi giàu canxi ngay sau bữa ăn trưa để giảm kích ứng đường ruột",
      "Uống sáng sớm lúc đói với cốc nước đầy, giữ tư thế thẳng đứng ít nhất 30 phút sau uống",
      "Nằm nghỉ ngơi thư giãn trên giường ngay lập tức sau khi nuốt viên thuốc với một ngụm nước"
    ],
    "correct": 2,
    "explanation": "Bisphosphonate đường uống có sinh khả dụng cực thấp (< 1%) và gây kích ứng, loét hoại tử niêm mạc thực quản nếu bị đọng lại. Bệnh nhân phải uống lúc bụng rỗng vào sáng sớm với nhiều nước lọc, không nằm và không ăn uống thuốc khác ít nhất 30 - 60 phút."
  },
  {
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Trong cấp cứu cơn Tăng huyết áp khẩn trương hoặc cấp cứu (Hypertensive crisis) có kèm Phình bóc tách động mạch chủ ngực cấp, mục tiêu kiểm soát huyết áp và nhịp tim ban đầu là:",
    "options": [
      "Thuốc giãn mạch trực tiếp đường tĩnh mạch như Hydralazin hoặc Natri nitroprussid đơn độc",
      "Thuốc chẹn beta giao cảm tác dụng cực ngắn đường tĩnh mạch như Esmolol hoặc Labetalol",
      "Thuốc chẹn kênh Canxi dihydropyridin tác dụng nhanh nhỏ dưới lưỡi như Nifedipin nang mềm",
      "Thuốc lợi tiểu quai Furosemid tiêm tĩnh mạch liều cao phối hợp truyền dịch đẳng trương"
    ],
    "correct": 1,
    "explanation": "Phình bóc tách động mạch chủ là cấp cứu ngoại lệ duy nhất đòi hỏi hạ áp khẩn cấp: cần hạ HATT < 120 mmHg và nhịp tim < 60 bpm trong 20 phút bằng chẹn beta IV (như Esmolol/Labetalol) để giảm lực xé động mạch (dP/dt), tránh vỡ quai động mạch chủ dẫn đến tử vong tức thì."
  },
  {
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Ở bệnh nhân Nhồi máu cơ tim cấp có ST chênh lên (STEMI), thuốc chẹn beta giao cảm đường uống (như Metoprolol succinate, Bisoprolol) KHÔNG NÊN khởi đầu trong 24 giờ đầu nếu bệnh nhân có dấu hiệu nào sau đây?",
    "options": [
      "Chỉ sử dụng đơn trị liệu Aspirin liều thấp 81 mg mỗi ngày một lần duy nhất",
      "Phối hợp Aspirin với thuốc ức chế P2Y12 như Ticagrelor hoặc Clopidogrel",
      "Dùng phối hợp 3 thuốc gồm Aspirin, Clopidogrel và thuốc chống đông đường uống",
      "Chỉ dùng thuốc chống đông đường uống Warfarin hoặc NOAC mà không dùng thuốc nào"
    ],
    "correct": 1,
    "explanation": "Khởi đầu thuốc chẹn beta sớm trong nhồi máu cơ tim cấp chống chỉ định nếu bệnh nhân có dấu hiệu suy tim ứ huyết, nhịp chậm (< 60 bpm), tụt HA (HATT < 100), block nhĩ thất độ II-III hoặc nguy cơ sốc tim, vì tác dụng ức chế co bóp cơ tim có thể đẩy bệnh nhân vào trụy mạch không hồi phục."
  },
  {
    "chapter": "Hen phế quản & COPD",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Thuốc giãn phế quản kháng cholinergic tác dụng kéo dài (LAMA như Tiotropium) có cơ chế phân tử chính trong điều trị COPD là:",
    "options": [
      "Kích thích trực tiếp thụ thể beta-2 adrenergic làm tăng tổng hợp AMP vòng gây giãn phế quản",
      "Ức chế thụ thể muscarinic M3 trên cơ trơn phế quản, làm giảm trương lực phế vị và giãn phế quản",
      "Ức chế enzym phosphodiesterase-4 nội bào giúp ngăn chặn giải phóng các chất trung gian viêm",
      "Đối kháng thụ thể leukotriene CysLT1 làm giảm phù nề niêm mạc và giảm tiết dịch nhầy đường thở"
    ],
    "correct": 1,
    "explanation": "Tiotropium là chất đối kháng cạnh tranh chọn lọc trên thụ thể Muscarinic M3 tại cơ trơn đường thở, ngăn chặn đường truyền tín hiệu phó giao cảm qua Acetylcholine, mang lại tác dụng giãn phế quản kéo dài trên 24 giờ và giảm ứ khí phổi trong COPD."
  },
  {
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Nhiễm khuẩn Clostridioides difficile (CDI) thể nặng hoặc tái phát trong bệnh viện theo hướng dẫn của IDSA/SHEA hiện nay ưu tiên lựa chọn thuốc đường uống hàng đầu là:",
    "options": [
      "Fidaxomicin hoặc Vancomycin đường uống",
      "Metronidazol đường tĩnh mạch liều cao",
      "Amoxicillin đường uống kết hợp Neomycin",
      "Ceftriaxon truyền tĩnh mạch mỗi 12 giờ"
    ],
    "correct": 0,
    "explanation": "Hướng dẫn IDSA/SHEA hiện đại đã đưa Metronidazole xuống hàng lựa chọn thay thế (chỉ dùng cho thể nhẹ khi không có thuốc khác). Fidaxomicin 200mg uống 2 lần/ngày hoặc Vancomycin 125mg uống 4 lần/ngày là lựa chọn hàng đầu cho CDI vì tác dụng tại chỗ trong lòng ruột và tỷ lệ tái phát thấp."
  },
  {
    "chapter": "Tương tác thuốc & Tương kỵ",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Bệnh nhân đang dùng thuốc chống đông đường uống ức chế yếu tố Xa trực tiếp Rivaroxaban. Nếu bệnh nhân bị nôn ra máu dữ dội đe dọa tính mạng, chất giải độc đặc hiệu (Antidote) hoàn nguyên tác dụng chống đông là:",
    "options": [
      "Andexanet alfa",
      "Idarucizumab",
      "Protamin sulfat",
      "Vitamin K1 tiêm tĩnh mạch"
    ],
    "correct": 0,
    "explanation": "Andexanet alfa là mồi nhử protein tái tổ hợp đặc hiệu liên kết và vô hiệu hóa các thuốc ức chế yếu tố Xa (Rivaroxaban, Apixaban). Idarucizumab (Praxbind) là kháng thể đơn dòng đặc hiệu cho Dabigatran. Protamine sulfat cho Heparin."
  },
  {
    "chapter": "Tương tác thuốc & Tương kỵ",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Thuốc chống đông trực tiếp Dabigatran etexilate có chất đối kháng đặc hiệu (Reversal agent) đã được cấp phép sử dụng trong cấp cứu xuất huyết đe dọa tính mạng là:",
    "options": [
      "Idarucizumab",
      "Andexanet alfa",
      "Flumazenil",
      "Phytomenadion"
    ],
    "correct": 0,
    "explanation": "Idarucizumab là đoạn kháng thể đơn dòng Fab nhân hóa có ái lực với Dabigatran cao gấp 350 lần so với ái lực của Dabigatran với Thrombin, giúp trung hòa hoàn toàn tác dụng chống đông chỉ sau vài phút tiêm truyền."
  },
  {
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Kháng sinh Ceftriaxon được đào thải qua những con đường sinh học nào trong cơ thể?",
    "options": [
      "Đào thải kép cân bằng qua cả thận và qua đường mật/phân",
      "Thải trừ 100% nguyên vẹn qua lọc cầu thận",
      "Chuyển hóa 100% tại biểu mô phổi thành acid amin",
      "Chỉ bài xuất qua tuyến mồ hôi và dịch nước bọt"
    ],
    "correct": 0,
    "explanation": "Ceftriaxone có con đường thải trừ kép: ~60% qua thận và ~40% qua đường mật vào phân. Nhờ cơ chế bù trừ này, bệnh nhân suy thận đơn thuần hoặc suy gan đơn thuần thường không cần phải hiệu chỉnh liều Ceftriaxone (trừ khi suy cả gan và thận nặng phối hợp)."
  },
  {
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Bệnh nhân điều trị bằng kháng sinh nhóm Quinolon (Levofloxacin) hoặc Macrolid (Azithromycin) cần được theo dõi điện tâm đồ (ECG) vì nguy cơ gây ra tác dụng phụ tim mạch nguy hiểm nào sau đây?",
    "options": [
      "Kéo dài khoảng QT dẫn đến loạn nhịp xoắn đỉnh",
      "Gây rung nhĩ kịch phát do cường giao cảm",
      "Gây tràn dịch màng ngoài tim co thắt",
      "Hẹp van động mạch chủ cấp tính"
    ],
    "correct": 0,
    "explanation": "Cả Quinolone và Macrolide đều ức chế kênh kali hERG tim, làm chậm quá trình tái cực thất, dẫn đến kéo dài khoảng QTc trên điện tâm đồ. Biến cố này có thể kích hoạt cơn loạn nhịp thất đa hình thái chết người gọi là xoắn đỉnh (Torsades de Pointes), đặc biệt khi kèm hạ K+ hay hạ Mg2+."
  },
  {
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Kháng sinh nào sau đây được xem là an toàn và được lựa chọn phổ biến nhất trong điều trị nhiễm khuẩn đường tiết niệu hoặc viêm đường hô hấp ở phụ nữ mang thai?",
    "options": [
      "Beta-lactam",
      "Fluoroquinolon",
      "Aminoglycosid",
      "Doxycyclin"
    ],
    "correct": 0,
    "explanation": "Kháng sinh Beta-lactam (Penicillin, Cephalosporin) không gây độc tế bào thai và được xếp loại an toàn hàng đầu (FDA nhóm B) trong suốt thai kỳ. Fluoroquinolone gây độc sụn khớp; Aminoglycoside độc tai trong thận; Tetracycline gây hỏng men và vàng răng vĩnh viễn cho thai nhi."
  },
  {
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Theo Tiêu chuẩn Beers (Beers Criteria) của Hội Lão khoa Hoa Kỳ (AGS), thuốc an thần ngủ nhóm Benzodiazepin (như Diazepam, Lorazepam) nên TRÁNH sử dụng ở người cao tuổi chủ yếu do:",
    "options": [
      "Nguy cơ gây suy tủy xương thứ phát dẫn đến thiếu máu bất sản và giảm bạch cầu hạt nặng",
      "Nguy cơ an thần quá mức, lú lẫn, té ngã và tác dụng kháng cholinergic gây bí tiểu, táo bón",
      "Nguy cơ gây loét thủng dạ dày tá tràng xuất huyết và thủng tạng rỗng đe dọa tính mạng",
      "Nguy cơ làm tăng huyết áp kịch phát dẫn đến phình tách động mạch chủ và xuất huyết não"
    ],
    "correct": 1,
    "explanation": "Người cao tuổi tăng độ nhạy cảm với Benzodiazepine và giảm tốc độ chuyển hóa thuốc tại gan. Thuốc gây an thần quá mức, rối loạn điều hòa thăng bằng vận động, mê sảng và té ngã gây gãy cổ xương đùi chấn thương sọ não, nên thuộc danh mục thuốc nguy cơ cao cần tránh theo Tiêu chuẩn Beers."
  },
  {
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Ở bệnh nhân đái tháo đường, chỉ số HbA1c phản ánh mức độ kiểm soát đường huyết trung bình trong khoảng thời gian nào trước đó?",
    "options": [
      "2 đến 3 tháng",
      "24 đến 48 giờ vừa qua",
      "1 đến 2 tuần lễ gần nhất",
      "1 năm trở lại đây"
    ],
    "correct": 0,
    "explanation": "HbA1c là sản phẩm gắn kết không thuận nghịch của Glucose với Hemoglobin trong hồng cầu. Do đời sống trung bình của hồng cầu là 120 ngày, chỉ số HbA1c phản ánh chính xác nồng độ glucose máu trung bình trong 2 đến 3 tháng trước đó, không bị ảnh hưởng bởi bữa ăn tức thời."
  },
  {
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Cẩm nang Trissel's Handbook on Injectable Drugs là tài liệu Dược lâm sàng kinh điển và uy tín hàng đầu thế giới được sử dụng chuyên biệt nhằm mục đích tra cứu:",
    "options": [
      "Cơ chế tác dụng dược lực học ở mức độ thụ thể tế bào và cấu trúc phân tử thuốc tim mạch",
      "Tính tương thích vật lý, độ ổn định hóa học và tương kỵ của các thuốc tiêm truyền tĩnh mạch",
      "Liều lượng, đường dùng và phác đồ hóa trị liệu điều trị ung thư cho bệnh nhân nhi khoa",
      "Bảng giá thanh toán bảo hiểm y tế và danh mục thuốc đấu thầu tập trung cấp quốc gia"
    ],
    "correct": 1,
    "explanation": "Trissel's là cẩm nang tiêu chuẩn vàng (Gold standard) để dược sĩ lâm sàng kiểm tra độ tương thích và độ ổn định của thuốc tiêm truyền: thuốc có thể pha chung trong cùng một bơm tiêm/dây truyền hay không, dùng dung môi nào (NaCl 0.9% hay Glucose 5%), độ ổn định sau pha theo thời gian và nhiệt độ."
  },
  {
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Theo Thông tư 22/2011/TT-BYT và các văn bản hiện hành về tổ chức hoạt động dược bệnh viện, việc Dược sĩ lâm sàng phát hiện tương tác thuốc chống chỉ định trong đơn và đề xuất bác sĩ đổi thuốc an toàn được gọi là:",
    "options": [
      "Can thiệp Dược lâm sàng",
      "Xử phạt hành chính đối với nhân viên y tế",
      "Thay đổi chẩn đoán y khoa của bệnh nhân",
      "Báo cáo vi phạm y đức lên thanh tra sở y tế"
    ],
    "correct": 0,
    "explanation": "Can thiệp Dược lâm sàng là hoạt động chuyên môn cốt lõi của Dược sĩ nhằm tối ưu hóa phác đồ điều trị, phát hiện sai sót dùng thuốc, tương tác thuốc bất lợi, chống chỉ định, quá liều và phản hồi với bác sĩ điều trị để điều chỉnh y lệnh kịp thời."
  },
  {
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Khi thực hiện tìm kiếm bài báo khoa học y học trên cơ sở dữ liệu PubMed/MEDLINE, việc sử dụng các thuật ngữ y học có kiểm soát MeSH (Medical Subject Headings) mang lại lợi ích gì lớn nhất?",
    "options": [
      "Tự động dịch toàn văn bài báo tiếng nước ngoài sang tiếng Việt theo chuẩn y khoa quốc tế",
      "Giúp tìm kiếm bao quát và chuẩn xác dù các tác giả sử dụng các từ đồng nghĩa khác nhau",
      "Cho phép tải về toàn văn miễn phí tất cả các bài báo nghiên cứu có tính phí bản quyền cao",
      "Chỉ hiển thị các bài báo nghiên cứu thử nghiệm lâm sàng được thực hiện tại các nước Châu Á"
    ],
    "correct": 1,
    "explanation": "MeSH là hệ thống từ vựng kiểm soát phân cấp của Thư viện Y khoa Quốc gia Hoa Kỳ (NLM). Dùng MeSH terms giúp truy vấn tìm kiếm gom toàn bộ các từ đồng nghĩa, từ viết tắt, biến thể ngôn ngữ của một khái niệm bệnh hoặc thuốc, tránh bỏ sót y văn quan trọng."
  },
  {
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Khi phối hợp pha trộn hai thuốc tiêm vào cùng một chai dịch truyền, hiện tượng xuất hiện tủa đục, đổi màu hoặc tách lớp ngay lập tức được phân loại là:",
    "options": [
      "Tương kỵ vật lý",
      "Tương tác dược động học tại gan",
      "Tương tác dược lực học cạnh tranh thụ thể",
      "Phản ứng có hại của thuốc loại B"
    ],
    "correct": 0,
    "explanation": "Tương kỵ vật lý là hiện tượng nhận biết được bằng mắt thường khi trộn các dung dịch tiêm truyền: kết tủa, vẩn đục, thay đổi màu sắc, tách lớp hoặc sinh khí. Tương kỵ này làm tắc dây truyền, tạo huyết khối vi mạch phổi hoặc làm mất tác dụng của thuốc."
  },
  {
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Khi nhận được thông báo thu hồi thuốc khẩn cấp cấp độ 1 từ Cục Quản lý Dược (Bộ Y tế) do thuốc có nguy cơ gây tổn hại nghiêm trọng đến tính mạng người dùng, trách nhiệm của bộ phận Dược lâm sàng và Khoa Dược bệnh viện là:",
    "options": [
      "Tiếp tục cấp phát hết số thuốc tồn kho hiện tại cho bệnh nhân nhẹ rồi mới ngừng nhập mới",
      "Ngừng ngay việc cấp phát, thông báo thu hồi tại các khoa phòng và niêm phong trong 24 giờ",
      "Chuyển toàn bộ số thuốc bị cảnh báo sang phân phát điều trị cho bệnh nhân khám ngoại trú",
      "Tự tổ chức kiểm nghiệm lại hoạt chất tại bệnh viện trước khi ra quyết định thu hồi chính thức"
    ],
    "correct": 1,
    "explanation": "Thu hồi thuốc cấp độ 1 là mức độ khẩn cấp cao nhất (đe dọa tính mạng hoặc tử vong). Quy định Bộ Y tế yêu cầu ngừng sử dụng ngay lập tức, thu hồi từ các khoa phòng và báo cáo trong vòng 24 giờ kể từ khi có quyết định."
  },
  {
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Theo hướng dẫn phân loại và xử trí tiêu chảy của Tổ chức Y tế Thế giới (WHO/IMCI), trẻ có các dấu hiệu: li bì, mắt rất trũng, uống nước rất kém hoặc không thể uống được, nếp véo da mất rất chậm (> 2 giây) được phân loại là:",
    "options": [
      "Tiêu chảy có mất nước nặng",
      "Tiêu chảy có mất nước nhẹ đến vừa",
      "Tiêu chảy không mất nước",
      "Tiêu chảy kéo dài không kèm biến chứng"
    ],
    "correct": 0,
    "explanation": "Phân loại mất nước theo IMCI: Mất nước nặng khi có >= 2 dấu hiệu: Li bì/hôn mê; Mắt rất trũng; Không uống được hoặc uống rất kém; Nếp véo da bụng mất rất chậm (> 2 giây). Bắt buộc xử trí cấp cứu theo Phác đồ C (truyền tĩnh mạch ngay dịch Ringer Lactat)."
  },
  {
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Trong phác đồ điều trị lỵ trực khuẩn cấp tính do Shigella ở trẻ em khi có tình trạng kháng Ampicillin và Cotrimoxazol cao, kháng sinh đường uống nào sau đây được khuyến cáo ưu tiên lựa chọn?",
    "options": [
      "Kháng sinh Metronidazol đơn độc kết hợp thuốc cầm tiêu chảy ruột",
      "Kháng sinh Azithromycin hoặc Ciprofloxacin liều chuẩn ngắn ngày",
      "Kháng sinh Vancomycin đường uống phối hợp truyền dịch điện giải",
      "Kháng sinh Amikacin tiêm bắp sâu duy trì liên tục trong 14 ngày"
    ],
    "correct": 1,
    "explanation": "Hướng dẫn của WHO và Bộ Y tế: Do Shigella kháng Cotrimoxazol và Ampicillin phổ biến, kháng sinh lựa chọn hàng đầu hiện nay là Ciprofloxacin (15 mg/kg x 2 lần/ngày trong 3 ngày) hoặc Azithromycin (10-12 mg/kg ngày đầu, 5 mg/kg các ngày sau)."
  },
  {
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Việc sử dụng thuốc chống nôn như Metoclopramid (Primperan) ở trẻ nhỏ bị tiêu chảy cấp nôn ói nhiều cần hết sức thận trọng và nhìn chung không được khuyến cáo rộng rãi do nguy cơ gặp biến chứng:",
    "options": [
      "Hội chứng ngoại tháp cấp tính",
      "Suy gan tối cấp do hoại tử tế bào gan",
      "Thủng dạ dày tá tràng tự phát",
      "Xuất huyết giảm tiểu cầu miễn dịch"
    ],
    "correct": 0,
    "explanation": "Metoclopramide ức chế thụ thể Dopamin D2 trung ương, ở trẻ em hàng rào máu não chưa hoàn thiện nên dễ gây hội chứng ngoại tháp cấp tính (rối loạn trương lực cơ, cơn quay mắt - cổ, ưỡn cong người) gây hoảng loạn cho gia đình và trẻ. Bù dịch đúng cách là biện pháp tốt nhất để giảm nôn do nhiễm toan."
  },
  {
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Khi trẻ bị tiêu chảy cấp kèm bất dung nạp Lactose thứ phát (phân chua bọt, hậu môn đỏ rực), biện pháp can thiệp dinh dưỡng Dược lâm sàng thích hợp nhất là:",
    "options": [
      "Nhịn ăn hoàn toàn chỉ truyền dịch tĩnh mạch và dùng dung dịch acid amin nuôi dưỡng trong 7 ngày",
      "Tiếp tục bú mẹ; nếu dùng sữa công thức thì tạm chuyển loại không lactose cho đến khi hồi phục",
      "Cho trẻ uống nước đường glucose đậm đặc 20% thay cho toàn bộ các bữa sữa cho đến khi cầm tiêu chảy",
      "Ngừng bú mẹ hoàn toàn và dùng phối hợp kháng sinh Metronidazol cùng Clindamycin đường uống ngay"
    ],
    "correct": 1,
    "explanation": "Tổn thương vi nhung mao niêm mạc ruột trong tiêu chảy cấp làm giảm men Lactase ở bờ bàn chải, dẫn đến bất dung nạp lactose thứ phát. Trẻ bú mẹ vẫn tiếp tục bú vì sữa mẹ có nhiều yếu tố bảo vệ; trẻ ăn sữa công thức nên dùng sữa không chứa lactose (Lactose-free) trong 1 - 2 tuần để phân sệt lại và hậu môn hết loét đỏ."
  },
  {
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Thuốc hạ sốt giảm đau Ibuprofen được khuyến cáo sử dụng cho trẻ em với liều lượng và khoảng cách đưa liều chuẩn là:",
    "options": [
      "5 đến 10 mg/kg mỗi liều, cách nhau 6 đến 8 giờ",
      "20 đến 25 mg/kg mỗi liều, cách nhau 2 giờ",
      "1 mg/kg mỗi ngày một lần duy nhất vào buổi sáng",
      "50 mg/kg mỗi liều khi trẻ sốt trên 39 độ C"
    ],
    "correct": 0,
    "explanation": "Ibuprofen dùng cho trẻ từ 3 tháng tuổi trở lên (hoặc >= 5 - 6 kg) với liều 5 - 10 mg/kg/lần mỗi 6 - 8 giờ, tối đa 30-40 mg/kg/ngày. Cần lưu ý chống chỉ định khi trẻ nghi ngờ sốt xuất huyết Dengue, mất nước nặng hoặc suy thận."
  },
  {
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Ở trẻ sơ sinh và trẻ đẻ non, tỷ lệ nước toàn phần trong cơ thể chiếm khoảng 75 - 80% trọng lượng cơ thể (so với 55 - 60% ở người lớn). Sự khác biệt sinh lý này dẫn đến biến đổi dược động học nào đối với các thuốc tan nhiều trong nước (như Aminoglycosid)?",
    "options": [
      "Thể tích phân bố giảm xuống mạnh, đòi hỏi liều nạp ban đầu theo mg/kg phải giảm đi một nửa",
      "Thể tích phân bố tính theo kg tăng lên, đòi hỏi liều nạp ban đầu theo mg/kg phải cao hơn",
      "Thuốc tích lũy hoàn toàn vào mô mỡ dưới da làm kéo dài thời gian bán thải lên gấp 5 lần",
      "Tốc độ lọc cầu thận và độ thanh thải qua thận tăng gấp 10 lần ngay sau khi sinh ra đời"
    ],
    "correct": 1,
    "explanation": "Vì trẻ sơ sinh có tỷ lệ nước cơ thể rất cao, các thuốc tan trong nước (như Gentamicin, Amikacin) phân bố vào khoang dịch ngoại bào rộng lớn, làm tăng Vd tính theo kg. Do đó, liều mg/kg của Aminoglycosid ở trẻ sơ sinh (ví dụ Amikacin 15-20 mg/kg) cao hơn so với người lớn để đạt nồng độ đỉnh diệt khuẩn trong huyết tương."
  },
  {
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Tại sao Ceftriaxon chống chỉ định tuyệt đối phối hợp hoặc tiêm cùng đường truyền với các dung dịch chứa Calci (như Ringer Lactat) ở trẻ sơ sinh dưới 28 ngày tuổi?",
    "options": [
      "Làm tăng nguy cơ co giật động kinh toàn thể do thuốc qua hàng rào máu não chưa hoàn thiện",
      "Nguy cơ tạo tủa Calci - Ceftriaxon không tan lắng đọng tại phổi và thận dẫn đến tử vong",
      "Gây hủy hoại tủy sống và liệt mềm hai chi dưới do ngộ độc trực tiếp nồng độ ion Calci tự do",
      "Làm biến đổi dung dịch Calci thành chất độc gây hạ đường huyết và toan chuyển hóa sơ sinh"
    ],
    "correct": 1,
    "explanation": "Ceftriaxon tạo muối tủa không hòa tan với ion Calci. Ở trẻ sơ sinh, tủa Ceftriaxon - Calci đã được ghi nhận gây tắc mạch vi mao mạch phổi và thận dẫn đến suy hô hấp, suy thận cấp tử vong. FDA và BYT cảnh báo chống chỉ định dùng chung Ceftriaxon với dịch chứa calci ở trẻ sơ sinh <= 28 ngày tuổi."
  },
  {
    "chapter": "Vitamin và chất khoáng",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Theo khuyến cáo của Viện Hàn lâm Nhi khoa Hoa Kỳ (AAP) và Bộ Y tế, trẻ sơ sinh bú mẹ hoàn toàn cần được bổ sung Vitamin D3 với liều lượng là bao nhiêu để dự phòng bệnh còi xương?",
    "options": [
      "400 IU mỗi ngày, bắt đầu ngay từ những ngày đầu sau sinh",
      "5000 IU mỗi ngày trong suốt năm đầu đời",
      "100.000 IU uống một lần duy nhất sau khi sinh",
      "Không cần bổ sung vì sữa mẹ đã chứa thừa lượng Vitamin D cần thiết"
    ],
    "correct": 0,
    "explanation": "Sữa mẹ là nguồn dinh dưỡng hoàn hảo nhất nhưng hàm lượng Vitamin D trong sữa mẹ rất thấp (< 50 IU/L). Do đó, trẻ bú mẹ hoàn toàn hoặc bú mẹ một phần cần được bổ sung 400 IU Vitamin D3/ngày bắt đầu từ tuần đầu sau sinh và duy trì cho đến khi trẻ uống đủ ít nhất 1 lít sữa công thức bổ sung vitamin D mỗi ngày."
  },
  {
    "chapter": "Vitamin và chất khoáng",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Bệnh nhân đang điều trị chống đông bằng Warfarin (Coumarin) được khuyến cáo duy trì lượng rau xanh giàu Vitamin K (như súp lơ, cải bó xôi, rau diếp) trong khẩu phần ăn ổn định mỗi ngày vì:",
    "options": [
      "Vitamin K làm tăng độc tính xuất huyết não của Warfarin lên gấp 10 lần do hiệp đồng tác dụng",
      "Vitamin K đối kháng tác dụng chống đông của Warfarin, làm giảm INR và tăng nguy cơ tắc mạch",
      "Vitamin K làm bất hoạt và phá hủy trực tiếp phân tử thuốc Warfarin ngay trong lòng mạch máu",
      "Rau xanh làm kiềm hóa nước tiểu dẫn đến tăng đào thải hoàn toàn Warfarin qua đường bài niệu"
    ],
    "correct": 1,
    "explanation": "Warfarin ức chế men Vitamin K epoxide reductase (VKOR), ngăn tổng hợp các yếu tố đông máu II, VII, IX, X phụ thuộc vitamin K. Nếu bệnh nhân đột ngột ăn nhiều thực phẩm giàu vitamin K, lượng vitamin K dư thừa sẽ vượt qua sự ức chế của Warfarin, làm INR tụt mạnh và mất tác dụng chống đông. Ngược lại, kiêng rau quá mức làm INR vọt cao gây xuất huyết. Do đó cần duy trì khẩu phần ổn định."
  },
  {
    "chapter": "Vitamin và chất khoáng",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Bệnh nhân sử dụng Vitamin C liều cao (trên 1000 - 2000 mg/ngày) kéo dài liên tục có nguy cơ cao hình thành loại sỏi thận nào sau đây?",
    "options": [
      "Sỏi Acid Uric do tăng thoái hóa nhân purin và tăng acid uric niệu ở ống thận",
      "Sỏi Canxi Oxalat do acid ascorbic chuyển hóa nội sinh thành oxalat trong nước tiểu",
      "Sỏi Struvit do vi khuẩn Proteus phân giải ure tạo phức hợp magie amoni phosphat",
      "Sỏi Cystin do đột biến di truyền tái hấp thu acid amin kiềm tại ống lượn gần"
    ],
    "correct": 1,
    "explanation": "Trong cơ thể, một phần Vitamin C (Acid ascorbic) được chuyển hóa thoái giáng thành Acid Oxalic (Oxalat). Khi dùng liều cao kéo dài (> 1g/ngày), nồng độ oxalat bài tiết qua nước tiểu tăng vọt, dễ kết hợp với Calci tạo thành tinh thể Canxi Oxalat không tan, lắng đọng gây sỏi thận và sỏi đường tiết niệu."
  },
  {
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Theo hướng dẫn của Hội Thấp khớp học Hoa Kỳ (ACR) và Bộ Y tế, bệnh nhân người lớn bắt đầu điều trị Glucocorticoid đường toàn thân với liều Prednisolon từ 5 mg/ngày kéo dài trên 3 tháng cần được can thiệp dự phòng loãng xương bằng:",
    "options": [
      "Chỉ định ngay liệu pháp hormon Estrogen liều cao tiêm bắp hàng tuần để dự phòng mất xương",
      "Bổ sung Canxi, Vitamin D và phối hợp Bisphosphonat dựa trên phân tầng nguy cơ gãy xương",
      "Yêu cầu bệnh nhân bất động tuyệt đối tại giường trong suốt thời gian điều trị Corticoid",
      "Chỉ cần dùng Paracetamol liều tối đa hàng ngày kết hợp thuốc an thần để giảm đau mỏi xương"
    ],
    "correct": 1,
    "explanation": "Loãng xương do Glucocorticoid (GIOP) xảy ra rất sớm (giảm mật độ xương nhanh nhất trong 3-6 tháng đầu). Khuyến cáo: Bổ sung Calci 1000-1200 mg + Vitamin D 800-1000 IU/ngày cho tất cả bệnh nhân dùng prednisone >= 2.5mg/ngày >= 3 tháng. Với người có nguy cơ trung bình - cao theo thang điểm FRAX, chỉ định thêm Bisphosphonate (Alendronate, Risedronate hoặc Zoledronic acid)."
  },
  {
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Sau khi dùng Glucocorticoid kéo dài, bệnh nhân có thể gặp 'Hội chứng ngừng Corticoid' (Steroid withdrawal syndrome). Điểm khác biệt mấu chốt giữa hội chứng này với suy vỏ thượng thận thứ phát là:",
    "options": [
      "Luôn kèm theo tụt huyết áp kịch phát, hạ natri máu nặng và trụy tim mạch không hồi phục",
      "Nồng độ Cortisol máu bình thường nhưng bệnh nhân vẫn mệt mỏi, đau nhức cơ khớp và chán ăn",
      "Xuất hiện ngay trong ngày đầu tiên giảm liều và tự khỏi sau 24 giờ không cần can thiệp",
      "Chỉ xảy ra khi dùng Glucocorticoid bôi ngoài da diện hẹp và không gặp khi dùng đường uống"
    ],
    "correct": 1,
    "explanation": "Hội chứng cai/ngừng Corticoid là tình trạng phụ thuộc thuốc về mặt thể chất và tâm lý: bệnh nhân mệt mỏi, đau nhức cơ bắp, khớp, buồn nôn dù xét nghiệm Cortisol và đáp ứng trục HPA đã trở về bình thường. Trong khi đó, suy thượng thận thứ phát có nồng độ Cortisol máu hạ thấp và có thể tụt huyết áp, hạ đường huyết."
  },
  {
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Tiêu chí STOPP/START (phiên bản 3) trong Dược lâm sàng lão khoa khuyến cáo BẮT ĐẦU (START criteria) nhóm thuốc nào sau đây cho người cao tuổi mắc bệnh suy tim phân suất tống máu giảm (HFrEF) để giảm tỷ lệ tử vong và nhập viện?",
    "options": [
      "Thuốc ức chế kênh đồng vận Natri-Glucose 2",
      "Thuốc chống loạn thần Haloperidol liều thấp",
      "Thuốc giãn cơ Mephenesin uống duy trì",
      "Thuốc chống co thắt cơ trơn Drotaverin dài ngày"
    ],
    "correct": 0,
    "explanation": "Tiêu chí START (Screening Tool to Alert doctors to Right Treatment) phiên bản cập nhật khuyến cáo bắt đầu SGLT2i (Dapagliflozin/Empagliflozin) cho người cao tuổi suy tim phân suất tống máu giảm (HFrEF) bất kể có đái tháo đường hay không, vì đã được chứng minh giảm rõ rệt tử vong tim mạch và tái nhập viện vì suy tim."
  },
  {
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Bệnh nhân nam 62 tuổi vào cấp cứu trong tình trạng huyết áp 210/120 mmHg kèm đau đầu dữ dội, lú lẫn, phù gai thị (bệnh não tăng huyết áp - Cơn tăng huyết áp cấp cứu). Mục tiêu và nguyên tắc hạ huyết áp trong giờ đầu tiên là:",
    "options": [
      "Hạ huyết áp thật nhanh về mức huyết áp tối ưu 120/80 mmHg ngay trong vòng 15 phút đầu",
      "Dùng thuốc hạ áp truyền tĩnh mạch, hạ huyết áp tâm thu không quá 20 - 25% trong giờ đầu",
      "Dùng ngay Nifedipin viên nang nhỏ giọt dưới lưỡi để hạ huyết áp tức thì trong 5 phút",
      "Không dùng thuốc hạ áp tĩnh mạch mà chỉ truyền Natri Clorid 0.9% tốc độ nhanh hồi sức"
    ],
    "correct": 1,
    "explanation": "Trong cơn tăng huyết áp cấp cứu (Hypertensive emergency), việc hạ huyết áp quá nhanh sẽ làm sụt giảm đột ngột áp lực tưới máu não và vành vốn đã thích nghi ở mức cao, gây nhồi máu não hoặc nhồi máu cơ tim. Mục tiêu chuẩn: Dùng thuốc truyền tĩnh mạch chỉnh liều (Nicardipine, Labetalol), hạ không quá 20 - 25% trong giờ đầu, sau đó đạt 160/100-110 mmHg trong 2 - 6 giờ tiếp theo. Chống chỉ định nhỏ Nifedipin dưới lưỡi vì tụt áp khó kiểm soát."
  },
  {
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Ở phụ nữ mang thai bị Tăng huyết áp mạn tính hoặc Tăng huyết áp thai kỳ, thuốc nào sau đây là lựa chọn hàng đầu an toàn được khuyến cáo, và nhóm thuốc nào bị CHỐNG CHỈ ĐỊNH TUYỆT ĐỐI do gây quái thai suy thận thai nhi?",
    "options": [
      "Lựa chọn ưu tiên là Enalapril, Captopril; Chống chỉ định thuốc chẹn beta và chẹn Calci",
      "Lựa chọn ưu tiên là Methyldopa, Labetalol; Chống chỉ định thuốc ức chế men chuyển và ARB",
      "Lựa chọn ưu tiên là Losartan, Telmisartan; Chống chỉ định Methyldopa và Hydralazin tiêm",
      "Lựa chọn ưu tiên là Thiazid liều cao; Chống chỉ định tuyệt đối Magie sulfat và Nifedipin"
    ],
    "correct": 1,
    "explanation": "Hướng dẫn ESC/ACOG: Thuốc hạ áp ưu tiên trong thai kỳ gồm Methyldopa, Labetalol và Nifedipine phóng thích chậm. Thuốc ức chế men chuyển (ACEI) và chẹn thụ thể Angiotensin II (ARB) chống chỉ định tuyệt đối (FDA nhóm X trong quý 2 và 3) vì gây thiểu ối, loạn sản ống thận thai nhi, vô niệu sơ sinh, dị tật sọ mặt và tử vong chu sinh."
  }
];

module.exports = UMP_QUESTIONS;
