// NGÂN HÀNG DƯỢC LÝ 2 - MỞ RỘNG PHẦN 3: KÝ SINH TRÙNG, LIPID MÁU, SỐT RÉT & KTGHP (Bài 7, 10, 11, 12)
// Tiêu chuẩn: Chuẩn giáo trình Dược lý 2 Bộ Y tế, không mở ngoặc đơn gợi ý ở đáp án.

module.exports = [
  // =========================================================================
  // BÀI 7: THUỐC CHỐNG GIUN SÁN, AMIBE (BỔ SUNG)
  // =========================================================================
  {
    chapter: "Thuốc chống giun sán, amibe",
    level: "Nhận biết",
    question: "Pyrantel pamoat tẩy giun theo cơ chế tác dụng sinh học nào?",
    options: [
      "Kích thích liên tục thụ thể nicotinic làm khử cực kéo dài tấm vận động thần kinh cơ, gây liệt cứng cơ giun",
      "Ức chế tổng hợp vỏ chitin của trứng giun",
      "Ức chế thu nhận ion calci của ấu trùng sán",
      "Gây rối loạn màng nhân của ký sinh trùng đơn bào"
    ],
    correct: 0,
    explanation: "Pyrantel pamoat là chất phong bế thần kinh cơ theo cơ chế khử cực tương tự nicotin và ức chế enzym cholinesterase của giun, làm cơ giun bị co cứng liên tục không hồi phục và bị nhu động ruột đẩy tuột ra ngoài theo phân.",
    reference: "Sách Dược lý 2 tr. 213-214"
  },
  {
    chapter: "Thuốc chống giun sán, amibe",
    level: "Vận dụng",
    question: "Trong điều trị nhiễm giun kim bằng Mebendazol hoặc Albendazol, vì sao nguyên tắc bắt buộc là phải uống nhắc lại liều thứ hai sau 2 đến 4 tuần?",
    options: [
      "Thuốc chỉ diệt được giun trưởng thành mà không diệt được trứng giun, uống nhắc lại để diệt lứa giun mới nở phòng tái nhiễm",
      "Liều đầu tiên chỉ có tác dụng làm giun giảm khả năng vận động",
      "Để kích thích hệ miễn dịch ruột sản sinh kháng thể chống giun",
      "Để bù trừ lượng thuốc bị phân hủy bởi enzym vi khuẩn đại tràng"
    ],
    correct: 0,
    explanation: "Thuốc nhóm benzimidazol diệt rất tốt giun kim trưởng thành nhưng hầu như không tiêu diệt được trứng giun kim còn bám ở nếp gấp hậu môn hoặc quần áo, móng tay. Sau 2-4 tuần trứng nở thành lứa giun mới, uống liều 2 giúp cắt đứt hoàn toàn chu trình tái nhiễm tự thân.",
    reference: "Sách Dược lý 2 tr. 216"
  },
  {
    chapter: "Thuốc chống giun sán, amibe",
    level: "Nhận biết",
    question: "Niclosamid là thuốc trị sán dây (sán dải bò, sán dải cá, sán dải heo) có cơ chế tác dụng là gì?",
    options: [
      "Ức chế quá trình phosphoryl hóa oxy hóa tạo ATP ở ty thể của sán dây",
      "Kích thích thụ thể GABA làm giãn cơ sán",
      "Phá hủy chuỗi xoắn kép ADN của sán",
      "Gắn vào tubulin ngăn cản tạo thoi phân bào"
    ],
    correct: 0,
    explanation: "Niclosamid ức chế sự hấp thu glucose và ức chế quá trình phosphoryl hóa oxy hóa liên kết tại ty thể của sán dây, làm sán mất năng lượng ATP và đầu sán cùng các đốt sán bị phân rã, trôi theo phân ra ngoài.",
    reference: "Sách Dược lý 2 tr. 220"
  },
  {
    chapter: "Thuốc chống giun sán, amibe",
    level: "Vận dụng cao",
    question: "Trong phác đồ điều trị áp xe gan do amip, vì sao sau đợt dùng Metronidazol hoặc Tinidazol bệnh nhân vẫn bắt buộc phải uống tiếp một đợt thuốc Diloxanid furoat?",
    options: [
      "Để tiêu diệt triệt để thể amip mang kén trong lòng đại tràng, ngăn ngừa nguồn lây và tránh tái phát bệnh",
      "Để làm tan các ổ sẹo xơ trong nhu mô gan",
      "Để giải độc gan do tác dụng phụ của metronidazol",
      "Để kích thích đường mật bài tiết nhanh lượng mủ tồn dư"
    ],
    correct: 0,
    explanation: "Metronidazol tiêu diệt rất tốt thể amip hoạt động ăn hồng cầu ở mô gan và thành ruột nhưng không có tác dụng trên thể kén amip trong lòng ruột. Khoảng 90% bệnh nhân áp xe gan do amip vẫn còn mang kén ở đại tràng; uống thêm Diloxanid furoat giúp quét sạch kén, triệt tiêu ổ chứa mầm bệnh.",
    reference: "Sách Dược lý 2 tr. 209-210"
  },

  // =========================================================================
  // BÀI 10: THUỐC HẠ LIPID MÁU (BỔ SUNG)
  // =========================================================================
  {
    chapter: "Thuốc hạ lipid máu",
    level: "Nhận biết",
    question: "Hai thuốc Statin nào sau đây là tiền chất (dạng vòng lacton chưa có hoạt tính), cần phải qua gan thủy phân mở vòng mới có tác dụng ức chế HMG-CoA reductase?",
    options: [
      "Lovastatin và Simvastatin",
      "Atorvastatin và Rosuvastatin",
      "Pravastatin và Fluvastatin",
      "Pitavastatin và Cerivastatin"
    ],
    correct: 0,
    explanation: "Lovastatin và Simvastatin là các phân tử dạng este vòng lacton (tiền chất trơ). Sau khi hấp thu vào gan, enzym carboxyesterase thủy phân mở vòng lacton thành dạng dẫn xuất acid beta-hydroxy có hoạt tính sinh học.",
    reference: "Sách Dược lý 2 tr. 94"
  },
  {
    chapter: "Thuốc hạ lipid máu",
    level: "Nhận biết",
    question: "Thuốc hạ mỡ máu nhóm Statin nào sau đây có thời gian bán thải kéo dài (khoảng 14 - 20 giờ), có hoạt lực hạ LDL-C mạnh nhất và có thể uống vào bất kỳ thời điểm nào trong ngày?",
    options: [
      "Atorvastatin và Rosuvastatin",
      "Lovastatin và Simvastatin",
      "Pravastatin và Fluvastatin",
      "Mevastatin và Compactin"
    ],
    correct: 0,
    explanation: "Atorvastatin (t1/2 khoảng 14 giờ) và Rosuvastatin (t1/2 khoảng 19-20 giờ) có thời gian bán hủy dài vượt trội so với các statin cũ (t1/2 1-3 giờ), ức chế HMG-CoA reductase suốt ngày đêm nên bệnh nhân có thể uống thuốc linh hoạt vào buổi sáng, trưa hoặc tối.",
    reference: "Sách Dược lý 2 tr. 95"
  },
  {
    chapter: "Thuốc hạ lipid máu",
    level: "Nhận biết",
    question: "Statin nào sau đây được đào thải chủ yếu qua phản ứng sulfat hóa mà không chuyển hóa qua hệ enzym cytochrom P450 isoenzym CYP3A4, ít xảy ra tương tác thuốc nhất?",
    options: [
      "Pravastatin",
      "Simvastatin",
      "Lovastatin",
      "Atorvastatin"
    ],
    correct: 0,
    explanation: "Pravastatin là statin thân nước, không chuyển hóa qua hệ cytochrom P450 (CYP3A4) mà bài xuất qua phản ứng sulfat hóa và liên hợp glucuronic, do đó rất ít tương tác thuốc khi dùng cùng các thuốc ức chế CYP3A4 (kháng nấm azol, macrolid, ức chế protease).",
    reference: "Sách Dược lý 2 tr. 95"
  },
  {
    chapter: "Thuốc hạ lipid máu",
    level: "Nhận biết",
    question: "Loại Lipoprotein nào trong huyết tương chứa hàm lượng cholesterol cao nhất và là thủ phạm chính gây hình thành mảng xơ vữa động mạch?",
    options: [
      "LDL (Low Density Lipoprotein)",
      "HDL (High Density Lipoprotein)",
      "VLDL (Very Low Density Lipoprotein)",
      "Chylomicron"
    ],
    correct: 0,
    explanation: "LDL vận chuyển tới 60-70% lượng cholesterol trong máu đến cung cấp cho các mô ngoại vi. Khi nồng độ LDL tăng cao, phân tử bị oxy hóa (ox-LDL) thâm nhập dưới lớp nội mô động mạch và bị đại thực bào nuốt tạo tế bào bọt, khởi động mảng xơ vữa động mạch.",
    reference: "Sách Dược lý 2 tr. 91-92"
  },

  // =========================================================================
  // BÀI 11: THUỐC CHỐNG SỐT RÉT (BỔ SUNG)
  // =========================================================================
  {
    chapter: "Thuốc chống sốt rét",
    level: "Nhận biết",
    question: "Cơ chế tác dụng phân tử của Cloroquin trong việc tiêu diệt thể vô tính trong hồng cầu của ký sinh trùng sốt rét là gì?",
    options: [
      "Tích lũy trong không bào tiêu hóa và ức chế enzym heme polymerase làm tích tụ hem tự do gây độc làm thủng màng ký sinh trùng",
      "Ức chế enzym tổng hợp acid folic dihydropteroat synthetase",
      "Phong bế thụ thể xâm nhập màng tế bào hồng cầu",
      "Ức chế chuỗi vận chuyển electron qua phức hợp cytochrom bc1"
    ],
    correct: 0,
    explanation: "Ký sinh trùng sốt rét ăn hemoglobin hồng cầu giải phóng hem tự do rất độc; ký sinh trùng dùng enzym heme polymerase để polymer hóa hem thành hemozoin (sắc tố sốt rét) không độc. Cloroquin ức chế enzym này, làm nồng độ hem tự do tăng vọt phá hủy màng tế bào ký sinh trùng.",
    reference: "Sách Dược lý 2 tr. 198"
  },
  {
    chapter: "Thuốc chống sốt rét",
    level: "Nhận biết",
    question: "Các dẫn xuất Artemisinin (Artesunat, Artemether) có cấu trúc hóa học đặc thù chứa nhóm chức nào quyết định hoạt tính diệt ký sinh trùng cực nhanh?",
    options: [
      "Cầu nối endoperoxid (-C-O-O-C-)",
      "Vòng lactam 4 cạnh",
      "Nhóm thế sulfonamid gắn nhân benzen",
      "Nhóm thiol (-SH) tự do"
    ],
    correct: 0,
    explanation: "Phân tử artemisinin chứa cầu nối sesquiterpen lacton có cầu nối nội endoperoxid (-O-O-). Khi vào cơ thể, cầu nối này tương tác với ion sắt Fe2+ của hem trong hồng cầu bị nhiễm, tạo ra các gốc tự do ái điện tử cực mạnh phá hủy màng và protein ký sinh trùng.",
    reference: "Sách Dược lý 2 tr. 193-194"
  },
  {
    chapter: "Thuốc chống sốt rét",
    level: "Vận dụng",
    question: "Phụ nữ mang thai trong 3 tháng đầu (tam cá nguyệt thứ nhất) nếu mắc sốt rét do P. falciparum chưa biến chứng, phác đồ điều trị được Bộ Y tế khuyến cáo là gì?",
    options: [
      "Quinin phối hợp với Clindamycin trong 7 ngày",
      "Dùng đơn độc Primaquin liều cao",
      "Dùng dung dịch truyền tĩnh mạch Natri nitroprusiat",
      "Tiêm bắp Doxycyclin liên tục 14 ngày"
    ],
    correct: 0,
    explanation: "Theo hướng dẫn của Bộ Y tế, đối với phụ nữ có thai trong 3 tháng đầu, các thuốc ACT chưa đủ dữ liệu an toàn phôi thai nên ưu tiên điều trị bằng Quinin uống phối hợp Clindamycin trong 7 ngày. Từ tháng thứ 4 trở đi mới được dùng các phác đồ phối hợp dẫn xuất Artemisinin (ACT).",
    reference: "Sách Dược lý 2 tr. 195, 204"
  },

  // =========================================================================
  // BÀI 12: KTGHP - TỔNG HỢP KIẾN THỨC BÀI 1 - 11 (BỔ SUNG)
  // =========================================================================
  {
    chapter: "KTGHP",
    level: "Vận dụng cao",
    question: "Bệnh nhân nam 65 tuổi bị tăng huyết áp, suy tim sung huyết có phân suất tống máu giảm (EF = 30%) và đái tháo đường typ 2. Thuốc chẹn kênh calci nào sau đây bị CHỐNG CHỈ ĐỊNH sử dụng vì làm tăng nguy cơ tử vong do suy tim nặng hơn?",
    options: [
      "Verapamil",
      "Amlodipin",
      "Felodipin",
      "Nicardipin"
    ],
    correct: 0,
    explanation: "Verapamil (và Diltiazem) có tác dụng ức chế co bóp cơ tim rất mạnh (inotropic âm tính), làm giảm nặng phân suất tống máu và làm trầm trọng thêm tình trạng ứ huyết ở bệnh nhân suy tim EF giảm, chống chỉ định tuyệt đối trong suy tim EF giảm. Chỉ CCB DHP thế hệ 2 (Amlodipin, Felodipin) mới an toàn khi cần hạ áp.",
    reference: "Sách Dược lý 2 tr. 64-66"
  },
  {
    chapter: "KTGHP",
    level: "Vận dụng cao",
    question: "Tương tác thuốc nào sau đây giữa thuốc chống sốt rét và thuốc tim mạch có nguy cơ gây xoắn đỉnh và ngừng tim đe dọa tử vong?",
    options: [
      "Quinin phối hợp với thuốc chống loạn nhịp Amiodaron hoặc Procainamid",
      "Cloroquin phối hợp với Paracetamol",
      "Artesunat phối hợp với Vitamin C",
      "Primaquin phối hợp với Metformin"
    ],
    correct: 0,
    explanation: "Quinin (và Mefloquin) có tác dụng kéo dài khoảng QT tương tự thuốc chống loạn nhịp nhóm IA và nhóm III. Khi phối hợp với Amiodaron, Sotalol hoặc Procainamid, tác dụng hiệp đồng làm khoảng QT kéo dài nghiêm trọng dẫn đến loạn nhịp thất xoắn đỉnh (Torsades de pointes) và tử vong.",
    reference: "Sách Dược lý 2 tr. 37, 197"
  }
];
