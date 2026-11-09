// TẬP CÂU HỎI BỔ SUNG 3: VITAMIN, VIRUS, UNG THƯ & GIẢI ĐỘC (Bài 16, 18, 19, 20)
// Chuẩn giáo trình Dược lý 2 Bộ Y tế, KHÔNG mở ngoặc đơn gợi ý ở đáp án.

module.exports = [
  // --- BÀI 16: VITAMIN ---
  {
    chapter: "Vitamin",
    level: "Nhận biết",
    question: "Vitamin nào sau đây được cơ thể tổng hợp ở da dưới tác dụng quang hóa của tia cực tím B (UVB) trong ánh nắng mặt trời?",
    options: [
      "Vitamin D3 (Cholecalciferol)",
      "Vitamin A (Retinol)",
      "Vitamin E (Tocopherol)",
      "Vitamin K1 (Phylloquinon)"
    ],
    correct: 0,
    explanation: "Dưới tác động của tia tử ngoại UVB (bước sóng 290-315 nm), tiền chất 7-dehydrocholesterol ở lớp biểu bì da bị mở vòng B chuyển thành tiền vitamin D3 (previtamin D3), sau đó đồng phân hóa nhiệt độ thành Cholecalciferol (Vitamin D3).",
    reference: "Sách Dược lý 2 tr. 325"
  },
  {
    chapter: "Vitamin",
    level: "Nhận biết",
    question: "Nước tiểu có màu vàng sáng huỳnh quang (vàng chanh) sau khi uống các viên vitamin tổng hợp là do bài tiết thành phần vitamin nào?",
    options: [
      "Vitamin B2 (Riboflavin)",
      "Vitamin B1 (Thiamin)",
      "Vitamin C (Acid ascorbic)",
      "Vitamin B6 (Pyridoxin)"
    ],
    correct: 0,
    explanation: "Riboflavin (Vitamin B2) có màu vàng cam tự nhiên và phát huỳnh quang dưới ánh sáng. Khi uống quá nhu cầu cơ thể, lượng thừa bài tiết nguyên vẹn qua nước tiểu làm nước tiểu có màu vàng sáng huỳnh quang đặc trưng hoàn toàn vô hại.",
    reference: "Sách Dược lý 2 tr. 330"
  },
  {
    chapter: "Vitamin",
    level: "Vận dụng",
    question: "Bệnh nhân bị thiếu hụt Vitamin C (Acid ascorbic) nặng mắc bệnh Scorbut có biểu hiện xuất huyết dưới da và chảy máu nướu răng do cơ chế phân tử nào?",
    options: [
      "Giảm quá trình hydroxyl hóa prolin và lysin làm suy yếu sự tổng hợp và liên kết chéo của sợi collagen thành mạch",
      "Ức chế tủy xương làm giảm số lượng tiểu cầu xuống dưới 10.000/mm3",
      "Tiêu hủy các yếu tố đông máu II, VII, IX, X ở gan",
      "Tăng tính thấm mao mạch do tăng giải phóng histamin"
    ],
    correct: 0,
    explanation: "Vitamin C là coenzym của enzym prolyl hydroxylase và lysyl hydroxylase, tham gia tạo hydroxyprolin và hydroxylysin cần thiết cho cấu trúc xoắn ba của chuỗi collagen. Thiếu vitamin C làm collagen mạch máu giòn, kém bền vững dẫn tới vỡ mao mạch và xuất huyết.",
    reference: "Sách Dược lý 2 tr. 336-337"
  },

  // --- BÀI 18: THUỐC KHÁNG VIRUS ---
  {
    chapter: "Thuốc kháng virus",
    level: "Nhận biết",
    question: "Entecavir và Tenofovir disoproxil fumarat (TDF) là thuốc đầu tay được khuyến cáo sử dụng trong điều trị bệnh lý nhiễm virus nào?",
    options: [
      "Viêm gan virus B mạn tính (HBV)",
      "Cúm mùa ác tính do virus H1N1",
      "Nhiễm Cytomegalovirus bẩm sinh",
      "Bệnh sởi có biến chứng viêm phổi"
    ],
    correct: 0,
    explanation: "Entecavir (dẫn xuất guanosin) và Tenofovir (dẫn xuất adenin) là các thuốc kháng virus đường uống thế hệ mới có hoạt lực ức chế ADN polymerase của virus viêm gan B cực mạnh và có hàng rào chống đột biến kháng thuốc rất cao, là phác đồ đầu tay hàng đầu theo Bộ Y tế.",
    reference: "Sách Dược lý 2 tr. 240-241"
  },
  {
    chapter: "Thuốc kháng virus",
    level: "Vận dụng",
    question: "So với Tenofovir disoproxil fumarat (TDF), tiền chất thế hệ mới Tenofovir alafenamid (TAF) có ưu điểm vượt trội nào về mặt độc tính?",
    options: [
      "Nồng độ thuốc trong huyết tương thấp hơn tới 90% nên giảm rõ rệt độc tính trên thận và giảm nguy cơ mất khoáng xương",
      "Có thể dùng đường tiêm bắp duy nhất 1 lần trong đời",
      "Hoàn toàn không đào thải qua thận",
      "Có tác dụng kích thích tăng sinh hồng cầu tủy xương"
    ],
    correct: 0,
    explanation: "TAF bền vững hơn trong huyết tương và nhắm đích vào tế bào lympho và tế bào gan tốt hơn TDF. Do đó ở liều nhỏ hơn 10 lần, TAF vẫn đạt nồng độ nội bào cao tương đương nhưng nồng độ tự do trong máu giảm 90%, giảm thiểu độc tính trên ống thận và loãng xương.",
    reference: "Sách Dược lý 2 tr. 238, 241"
  },

  // --- BÀI 19: THUỐC CHỐNG UNG THƯ ---
  {
    chapter: "Thuốc chống ung thư",
    level: "Nhận biết",
    question: "Vincristin là thuốc chống ung thư nhóm alkaloid dừa cạn có tác dụng không mong muốn đặc trưng trên hệ cơ quan nào cần theo dõi sát?",
    options: [
      "Độc tính trên hệ thần kinh ngoại biên gây tê bì đầu chi, mất phản xạ gân xương và táo bón do liệt ruột",
      "Gây suy tủy xương nghiêm trọng nhất trong tất cả các thuốc ung thư",
      "Gây suy tim sung huyết cấp trong vòng 24 giờ",
      "Gây lắng đọng sỏi ở túi mật"
    ],
    correct: 0,
    explanation: "Vincristin gắn vào tubulin sợi trục thần kinh làm ức chế vận chuyển chất dinh dưỡng dọc sợi trục, gây độc tính thần kinh ngoại biên phụ thuộc liều: tê bì đầu ngón, yếu cơ, mất phản xạ gân gót, táo bón nặng do liệt thần kinh ruột. Khác với Vinblastin, Vincristin ít độc tủy xương hơn.",
    reference: "Sách Dược lý 2 tr. 253"
  },
  {
    chapter: "Thuốc chống ung thư",
    level: "Nhận biết",
    question: "Nhóm thuốc chống ung thư alkyl hóa (như Cyclophosphamid, Clorambucil, Melphalan) tiêu diệt tế bào ác tính nhờ cơ chế nào?",
    options: [
      "Tạo liên kết cộng hóa trị gắn gốc alkyl vào vị trí N7 của base guanin gây liên kết chéo giữa hai sợi ADN",
      "Ức chế enzym giải mã mARN tại ribosom",
      "Bao bọc màng nhân ngăn cản nhân tế bào tiếp nhận oxy",
      "Kích thích enzym caspase phá hủy trực tiếp màng tế bào"
    ],
    correct: 0,
    explanation: "Các chất alkyl hóa mang nhóm phản ứng ái điện tử, chuyển gốc alkyl gắn cộng hóa trị vào nguyên tử nitơ ở vị trí N7 của guanin trên phân tử ADN, tạo liên kết chéo giữa hai sợi ADN (cross-linking), làm chuỗi xoắn kép không tháo xoắn được dẫn tới đứt gãy ADN và chết tế bào.",
    reference: "Sách Dược lý 2 tr. 247"
  },

  // --- BÀI 20: THUỐC TRONG ĐIỀU TRỊ NGỘ ĐỘC CẤP ---
  {
    chapter: "Thuốc/trong điều trị ngộ độc",
    level: "Nhận biết",
    question: "Pralidoxim (PAM) và Obidoxim có tác dụng giải độc trong ngộ độc thuốc trừ sâu phospho hữu cơ theo cơ chế phân tử nào?",
    options: [
      "Gắn ái lực cao vào gốc phosphoryl để giải phóng và tái hoạt hóa enzym Acetylcholinesterase",
      "Phong bế thụ thể muscarinic M1, M2, M3 tại cơ quan đáp ứng",
      "Kích thích gan tăng sản xuất enzym acetyltransferase",
      "Trung hòa trực tiếp hơi độc lân hữu cơ đang bay lơ lửng trong phế nang"
    ],
    correct: 0,
    explanation: "Phospho hữu cơ gắn phosphoryl hóa enzym acetylcholinesterase làm enzym mất hoạt tính. Pralidoxim (PAM) có nhóm oxim (=N-OH) ái lực cực mạnh với phospho, tấn công tách gốc phosphoryl ra khỏi enzym, giúp phục hồi (tái hoạt hóa) enzym acetylcholinesterase trước khi enzym bị biến tính già hóa.",
    reference: "Sách Dược lý 2 tr. 359-360"
  },
  {
    chapter: "Thuốc/trong điều trị ngộ độc",
    level: "Vận dụng",
    question: "Trong cấp cứu ngộ độc Phospho hữu cơ, dấu hiệu lâm sàng nào chứng tỏ bệnh nhân đã 'ngấm Atropin' đầy đủ để giảm liều duy trì?",
    options: [
      "Đồng tử giãn 3-4 mm, da khô ấm hồng, hết ứ đọng đờm dãi phế quản và tần số tim từ 80-100 chu kỳ/phút",
      "Bệnh nhân lên cơn co giật toàn thân và sốt cao 41 độ C",
      "Huyết áp tụt sâu và đồng tử co nhỏ như đầu kim",
      "Bụng chướng căng và xuất huyết tiêu hóa ồ ạt"
    ],
    correct: 0,
    explanation: "Mục tiêu dùng Atropin trong ngộ độc phospho hữu cơ là đạt tình trạng ngấm atropin: da khô và ấm, niêm mạc miệng khô, phổi hết ran ẩm (hết ứ đọng đờm dãi), đồng tử giãn vừa (khoảng 3-4 mm), nhịp tim > 80 lần/phút. Sau đó duy trì liều để tránh tái ngộ độc.",
    reference: "Sách Dược lý 2 tr. 359"
  },
  {
    chapter: "Thuốc/trong điều trị ngộ độc",
    level: "Nhận biết",
    question: "Bộ ba thuốc giải độc đặc hiệu kinh điển theo cơ chế tạo Methemoglobin để cứu sống bệnh nhân ngộ độc Cyanid là gì?",
    options: [
      "Amyl nitrit dạng hít, Natri nitrit và Natri thiosulfat dạng tiêm tĩnh mạch",
      "Naloxon, Atropin và Than hoạt tính",
      "Xanh methylen, Vitamin C và Natri hydrocarbonat",
      "Protamin sulfat, Deferoxamin và Flumazenil"
    ],
    correct: 0,
    explanation: "Amyl nitrit và Natri nitrit oxy hóa một phần hemoglobin thành Methemoglobin (Fe3+). Methemoglobin có ái lực với cyanid mạnh hơn cytochrom oxidase, hút cyanid tạo cyanomethemoglobin giải phóng enzym hô hấp tế bào. Sau đó tiêm Natri thiosulfat cung cấp lưu huỳnh cho enzym rhodanese chuyển cyanid thành thiocyanat bài tiết qua thận.",
    reference: "Sách Dược lý 2 tr. 363-364"
  }
];

