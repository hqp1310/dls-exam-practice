// TẬP CÂU HỎI BỔ SUNG 2: KÝ SINH TRÙNG, NỘI TIẾT, TIỂU ĐƯỜNG, ĐÔNG MÁU & THIẾU MÁU
// (Bài 7, 10, 11, 12, 13, 14, 15, 17)
// Chuẩn giáo trình Dược lý 2 Bộ Y tế, KHÔNG mở ngoặc đơn gợi ý ở đáp án.

module.exports = [
  // --- BÀI 7: THUỐC CHỐNG GIUN SÁN, AMIBE ---
  {
    chapter: "Thuốc chống giun sán, amibe",
    level: "Nhận biết",
    question: "Emetin và Dehydroemetin là các alkaloid chiết xuất từ rễ cây Ipeca dùng diệt amip trong mô, hiện nay rất ít được sử dụng vì độc tính nguy hiểm nào?",
    options: [
      "Độc tính trên tim gây viêm cơ tim hoại tử, hạ huyết áp và loạn nhịp tim",
      "Gây xơ cứng bì toàn thể tiến triển nhanh",
      "Gây đục thủy tinh thể hai mắt vĩnh viễn",
      "Gây tiêu hủy hoàn toàn lớp sụn khớp gối"
    ],
    correct: 0,
    explanation: "Emetin tích lũy chậm và gắn chặt vào cơ tim, ức chế tổng hợp protein cơ tim, gây độc tính tim nặng nề: hạ huyết áp, đau vùng trước tim, nhịp nhanh, biến đổi sóng T và đoạn ST trên ECG, có thể gây trụy tim mạch tử vong.",
    reference: "Sách Dược lý 2 tr. 210-211"
  },
  {
    chapter: "Thuốc chống giun sán, amibe",
    level: "Nhận biết",
    question: "Tinidazol và Secnidazol có ưu điểm dược động học nổi bật nào so với Metronidazol?",
    options: [
      "Thời gian bán thải dài hơn nhiều cho phép dùng liều duy nhất hoặc số lần dùng ít hơn trong ngày",
      "Tan hoàn toàn trong nước nên không ngấm vào mô gan",
      "Không bao giờ gây tác dụng phụ buồn nôn và vị kim loại",
      "Có thể dùng an toàn tuyệt đối cho phụ nữ mang thai tháng đầu"
    ],
    correct: 0,
    explanation: "Tinidazol (t1/2 khoảng 12-14 giờ) và Secnidazol (t1/2 khoảng 17-29 giờ) có thời gian bán thải dài gấp đôi hoặc gấp ba so với Metronidazol (t1/2 8 giờ), cho phép dùng liều duy nhất trong ngày hoặc phác đồ ngắn ngày hơn mà vẫn đảm bảo hiệu quả tiệt trừ amip.",
    reference: "Sách Dược lý 2 tr. 209"
  },

  // --- BÀI 10: THUỐC HẠ LIPID MÁU ---
  {
    chapter: "Thuốc hạ lipid máu",
    level: "Nhận biết",
    question: "Evolocumab và Alirocumab là nhóm thuốc hạ lipid máu thế hệ mới tác động theo cơ chế nào?",
    options: [
      "Kháng thể đơn dòng ức chế enzym Proprotein Convertase Subtilisin/Kexin type 9 (PCSK9)",
      "Ức chế enzym tổng hợp chylomicron ở ruột non",
      "Kích thích enzym Lipase nội mô thủy phân HDL",
      "Gắn trực tiếp vào phân tử triglycerid làm bất hoạt"
    ],
    correct: 0,
    explanation: "PCSK9 là enzym gắn vào thụ thể LDL trên tế bào gan và đưa thụ thể này vào lysosom để phá hủy. Các kháng thể đơn dòng ức chế PCSK9 ngăn cản sự phân hủy thụ thể LDL, làm tăng mật độ thụ thể LDL trên màng tế bào gan, hạ LDL-C huyết tương thêm 50-70%.",
    reference: "Sách Dược lý 2 tr. 100"
  },
  {
    chapter: "Thuốc hạ lipid máu",
    level: "Vận dụng",
    question: "Tác dụng phụ thường gặp nhất của nhóm Resin gắn acid mật (Cholestyramin, Colestipol) trên đường tiêu hóa là gì?",
    options: [
      "Táo bón, đầy bụng khó tiêu và giảm hấp thu các vitamin tan trong dầu (A, D, E, K)",
      "Tiêu chảy mỡ mất nước cấp tính",
      "Xuất huyết dạ dày tá tràng ồ ạt",
      "Viêm teo gai lưỡi kèm mất vị giác hoàn toàn"
    ],
    correct: 0,
    explanation: "Cholestyramin là chất polyme không tan, không hấp thu, giữ muối mật trong lòng ruột nên gây táo bón (rất phổ biến, cần uống nhiều nước và ăn nhiều chất xơ). Do acid mật bị gắn kết và đào thải nên làm cản trở hấp thu các vitamin tan trong lipid A, D, E, K.",
    reference: "Sách Dược lý 2 tr. 92"
  },

  // --- BÀI 11: THUỐC CHỐNG SỐT RÉT ---
  {
    chapter: "Thuốc chống sốt rét",
    level: "Nhận biết",
    question: "Trong chu kỳ phát triển của ký sinh trùng sốt rét, giai đoạn nào diễn ra hoàn toàn trong tế bào gan của người và không gây biểu hiện triệu chứng lâm sàng?",
    options: [
      "Giai đoạn tiền hồng cầu (thể phân liệt trong gan)",
      "Giai đoạn phân chia trong hồng cầu",
      "Giai đoạn phát triển thể giao bào trong máu ngoại vi",
      "Giai đoạn sinh sản hữu tính trong dạ dày muỗi"
    ],
    correct: 0,
    explanation: "Khi muỗi đốt, thoa trùng (sporozoite) theo máu đến xâm nhập tế bào gan chỉ sau 30-60 phút. Tại tế bào gan, ký sinh trùng nhân lên tạo thể phân liệt tiền hồng cầu trong 6-16 ngày mà hoàn toàn không gây bất kỳ triệu chứng sốt hay thiếu máu nào.",
    reference: "Sách Dược lý 2 tr. 193"
  },
  {
    chapter: "Thuốc chống sốt rét",
    level: "Nhận biết",
    question: "Thuốc chống sốt rét Mefloquin có tác dụng diệt thể vô tính trong hồng cầu mạnh nhưng cần thận trọng vì tác dụng phụ trên hệ cơ quan nào?",
    options: [
      "Hệ thần kinh tâm thần gây chóng mặt, mất ngủ, ác mộng, trầm cảm và rối loạn tâm thần",
      "Hệ xương khớp gây cốt hóa sụn sớm",
      "Hệ hô hấp gây tràn dịch màng phổi mủ",
      "Tuyến tụy gây teo các tế bào tiết men tiêu hóa"
    ],
    correct: 0,
    explanation: "Mefloquin qua hàng rào máu não và tích lũy nồng độ cao trong mô não, gây tác dụng không mong muốn trên thần kinh trung ương (tỷ lệ 1-10%): ác mộng dữ dội, lo âu, trầm cảm, hoang tưởng, co giật; chống chỉ định ở người có tiền sử động kinh hoặc rối loạn tâm thần.",
    reference: "Sách Dược lý 2 tr. 199-200"
  },

  // --- BÀI 12: KTGHP ---
  {
    chapter: "KTGHP",
    level: "Vận dụng cao",
    question: "Bệnh nhân nam 58 tuổi đang điều trị xơ vữa động mạch bằng Simvastatin 40mg/ngày. Bệnh nhân bị nhiễm nấm da và tự ý uống thêm Itraconazol viên nang. Nguy cơ tai biến nghiêm trọng nhất có thể xảy ra là gì?",
    options: [
      "Itraconazol ức chế mạnh CYP3A4 làm tăng nồng độ Simvastatin trong máu lên hàng chục lần dẫn đến tiêu cơ vân cấp và suy thận cấp",
      "Simvastatin phá hủy tác dụng kháng nấm của Itraconazol",
      "Gây nhiễm toan ceton do đái tháo đường khởi phát",
      "Làm nhịp tim nhanh kịch phát trên 200 chu kỳ/phút"
    ],
    correct: 0,
    explanation: "Simvastatin được chuyển hóa độc quyền qua enzym CYP3A4 ở gan. Kháng nấm nhóm azol (Itraconazol, Ketoconazol) là chất ức chế cực mạnh CYP3A4, làm giảm độ thanh thải của simvastatin, nồng độ statin trong máu tăng vọt gấp 10-20 lần bùng phát hoại tử tiêu cơ vân cấp tính.",
    reference: "Sách Dược lý 2 tr. 96"
  },
  {
    chapter: "KTGHP",
    level: "Vận dụng cao",
    question: "Bệnh nhân nữ 32 tuổi đang dùng thuốc tránh thai phối hợp đường uống (chứa Ethinylestradiol) để ngừa thai. Bác sĩ kê thêm kháng sinh Rifampicin để điều trị lao phổi. Nguy cơ thất bại ngừa thai do cơ chế nào?",
    options: [
      "Rifampicin cảm ứng mạnh enzym gan CYP3A4 làm tăng thoái hóa Ethinylestradiol dẫn đến mất tác dụng ngừa thai và có thai ngoài ý muốn",
      "Rifampicin kết tủa với estrogen trong lòng ruột non",
      "Rifampicin kích thích rụng trứng trực tiếp tại buồng trứng",
      "Estrogen làm mất hoàn toàn hoạt tính diệt vi khuẩn lao của rifampicin"
    ],
    correct: 0,
    explanation: "Rifampicin là chất cảm ứng enzym cytochrom P450 (đặc biệt CYP3A4) mạnh nhất trong y học, làm tăng tốc độ chuyển hóa và đào thải Ethinylestradiol qua gan, nồng độ hormon tụt xuống dưới ngưỡng ức chế rụng trứng, dẫn tới thất bại tránh thai nghiêm trọng.",
    reference: "Sách Dược lý 2 tr. 185, 316"
  },

  // --- BÀI 13: HORMON ---
  {
    chapter: "Hormon",
    level: "Nhận biết",
    question: "Oxytocin là hormon được tổng hợp ở vùng dưới đồi và dự trữ giải phóng từ tuyến nào sau đây?",
    options: [
      "Thùy sau tuyến yên (tuyến yên thần kinh)",
      "Thùy trước tuyến yên (tuyến yên tuyến)",
      "Tuyến vỏ thượng thận",
      "Tế bào kẽ Leydig của tinh hoàn"
    ],
    correct: 0,
    explanation: "Oxytocin và Vasopressin (ADH) được tổng hợp tại nhân trên thị và nhân cạnh thất của vùng dưới đồi, sau đó di chuyển dọc theo sợi trục thần kinh xuống dự trữ và giải phóng vào máu tại thùy sau tuyến yên (neurohypophysis).",
    reference: "Sách Dược lý 2 tr. 283-284"
  },
  {
    chapter: "Hormon",
    level: "Nhận biết",
    question: "Khi điều trị bằng Glucocorticoid (như Prednisolon), tác dụng phụ gây loãng xương xốp xương có cơ chế sinh học là gì?",
    options: [
      "Ức chế nguyên bào xương, giảm hấp thu calci ở ruột và tăng thải trừ calci qua nước tiểu",
      "Tăng kích thích tủy xương sản sinh quá nhiều hồng cầu",
      "Làm lắng đọng tinh thể canxi vô cơ vào thành mạch máu",
      "Làm tiêu hủy hoàn toàn lớp sụn khớp bàn chân"
    ],
    correct: 0,
    explanation: "Glucocorticoid đối kháng với vitamin D làm giảm hấp thu calci ở ruột, tăng thải calci qua thận gây cường cận giáp thứ phát kích thích hủy cốt bào, đồng thời ức chế trực tiếp hoạt động của nguyên bào xương (osteoblast), dẫn tới giảm mật độ xương và loãng xương nặng.",
    reference: "Sách Dược lý 2 tr. 287"
  },

  // --- BÀI 14: THUỐC HẠ GLUCOSE MÁU ---
  {
    chapter: "Thuốc hạ glucose máu",
    level: "Nhận biết",
    question: "Pioglitazon thuộc nhóm Thiazolidinedion (TZD) làm tăng tính nhạy cảm với insulin của tế bào ngoại vi thông qua thụ thể nhân nào?",
    options: [
      "Peroxisome Proliferator-Activated Receptor gamma (PPAR-gamma)",
      "Peroxisome Proliferator-Activated Receptor alpha (PPAR-alpha)",
      "Thụ thể Glucagon-Like Peptide-1 (GLP-1)",
      "Thụ thể Estrogen nhân beta (ER-beta)"
    ],
    correct: 0,
    explanation: "Nhóm TZD (Pioglitazon, Rosiglitazon) gắn chọn lọc vào thụ thể nhân PPAR-gamma định vị chủ yếu ở mô mỡ, cơ vân và gan, điều hòa phiên mã các gen kiểm soát chuyển hóa glucose và lipid, làm tăng biểu hiện chất vận chuyển GLUT4 giúp tăng thu nhận glucose vào tế bào.",
    reference: "Sách Dược lý 2 tr. 299-300"
  },
  {
    chapter: "Thuốc hạ glucose máu",
    level: "Vận dụng",
    question: "Chống chỉ định quan trọng nhất của nhóm thuốc Thiazolidinedion (Pioglitazon) là gì do tác dụng phụ giữ muối nước?",
    options: [
      "Bệnh nhân suy tim sung huyết độ II đến độ IV theo phân độ NYHA",
      "Bệnh nhân tăng huyết áp giai đoạn 1",
      "Người bị viêm loét dạ dày tá tràng mạn tính",
      "Bệnh nhân đái tháo đường kèm béo phì"
    ],
    correct: 0,
    explanation: "Thuốc nhóm TZD gây tăng tái hấp thu natri và dịch tại ống lượn xa qua kích hoạt kênh ENaC, dẫn đến giữ dịch phù nề toàn thân và làm bùng phát hoặc làm nặng nề thêm tình trạng suy tim sung huyết, chống chỉ định tuyệt đối cho người suy tim NYHA II-IV.",
    reference: "Sách Dược lý 2 tr. 300"
  },

  // --- BÀI 15: THUỐC ĐÔNG CẦM MÁU ---
  {
    chapter: "Thuốc/QT đông cầm máu",
    level: "Nhận biết",
    question: "Rivaroxaban và Apixaban là các thuốc chống đông đường uống mới (DOAC) ức chế trực tiếp yếu tố đông máu nào?",
    options: [
      "Yếu tố Xa tự do và yếu tố Xa gắn trong phức hợp prothrombinase",
      "Yếu tố IIa (Thrombin)",
      "Yếu tố VIIa mô",
      "Yếu tố IXa nội sinh"
    ],
    correct: 0,
    explanation: "Rivaroxaban, Apixaban và Edoxaban là thuốc ức chế trực tiếp, chọn lọc và thuận nghịch yếu tố Xa (cả Xa tự do và Xa liên kết), ngăn chặn khâu chuyển prothrombin thành thrombin mà không cần chất đồng vận Antithrombin III.",
    reference: "Sách Dược lý 2 tr. 121"
  },
  {
    chapter: "Thuốc/QT đông cầm máu",
    level: "Nhận biết",
    question: "Chất giải độc đặc hiệu (antidote) được chỉ định để trung hòa khẩn cấp tác dụng chống đông của các thuốc ức chế yếu tố Xa (Rivaroxaban, Apixaban) là gì?",
    options: [
      "Andexanet alfa",
      "Protamin sulfat",
      "Idarucizumab",
      "Vitamin K1"
    ],
    correct: 0,
    explanation: "Andexanet alfa là một phân tử protein mồi bẫy tái tổ hợp biến đổi gen đóng vai trò tương tự yếu tố Xa mất hoạt tính enzym, có ái lực cực cao với Rivaroxaban và Apixaban, gắn chặt và cô lập các phân tử thuốc này, giúp phục hồi quá trình đông máu.",
    reference: "Sách Dược lý 2 tr. 122"
  },

  // --- BÀI 17: THUỐC CHỮA THIẾU MÁU ---
  {
    chapter: "Thuốc chữa thiếu máu",
    level: "Nhận biết",
    question: "Trong cơ thể người trưởng thành, sắt được dự trữ chủ yếu ở tế bào gan, lách và tủy xương dưới dạng phức hợp nào?",
    options: [
      "Ferritin và Hemosiderin",
      "Transferrin và Hemopexin",
      "Hemoglobin tự do trong huyết tương",
      "Myoglobin của cơ tim"
    ],
    correct: 0,
    explanation: "Khoảng 70% sắt trong cơ thể nằm trong hemoglobin hồng cầu, khoảng 25-30% sắt được dự trữ trong hệ lưới nội mô (gan, lách, tủy xương) dưới dạng phức hợp protein Ferritin tan trong nước và Hemosiderin không tan.",
    reference: "Sách Dược lý 2 tr. 127"
  },
  {
    chapter: "Thuốc chữa thiếu máu",
    level: "Vận dụng",
    question: "Chất nào sau đây khi dùng đồng thời qua đường tiêu hóa làm giảm rõ rệt sự hấp thu của Sắt do tạo phức chelat không tan?",
    options: [
      "Tannin trong trà đặc, cà phê, calci trong sữa và thuốc kháng acid antacid",
      "Vitamin C (Acid ascorbic)",
      "Acid chlohydric dịch vị",
      "Nước cam ép tươi nguyên chất"
    ],
    correct: 0,
    explanation: "Tannin trong trà, phytat trong ngũ cốc, polyphenol trong cà phê, ion calci trong sữa và các thuốc kháng acid (nhôm, magie hydroxyd) gắn kết mạnh với ion sắt tạo phức hợp kết tủa không tan, ngăn cản sắt hấp thu qua niêm mạc tá tràng.",
    reference: "Sách Dược lý 2 tr. 127"
  }
];
