// NGÂN HÀNG DƯỢC LÝ 2 - MỞ RỘNG PHẦN 5: VITAMIN, VIRUS, UNG THƯ & GIẢI ĐỘC CẤP (Bài 16, 18, 19, 20)
// Tiêu chuẩn: Chuẩn giáo trình Dược lý 2 Bộ Y tế, không mở ngoặc đơn gợi ý ở đáp án.

module.exports = [
  // =========================================================================
  // BÀI 16: VITAMIN (BỔ SUNG)
  // =========================================================================
  {
    chapter: "Vitamin",
    level: "Nhận biết",
    question: "Vitamin K3 tổng hợp (Menadion) hiện nay bị CẤM chỉ định sử dụng cho trẻ sơ sinh và phụ nữ sắp sinh vì lý do an toàn nào?",
    options: [
      "Nguy cơ gây tan máu cấp tính, tăng bilirubin tự do dẫn đến vàng da nhân não ở trẻ sơ sinh",
      "Gây cốt hóa sớm các đầu xương dài làm trẻ bị lùn",
      "Gây suy thận cấp do kết tủa tinh thể trong ống lượn",
      "Gây ngừng thở do ức chế trung tâm hô hấp ở hành não"
    ],
    correct: 0,
    explanation: "Menadion (Vitamin K3) là dẫn chất tổng hợp tan trong nước. Ở trẻ sơ sinh và người thiếu men G6PD, Menadion gây oxy hóa màng hồng cầu làm vỡ hồng cầu hàng loạt (tan máu), giải phóng bilirubin gián tiếp tự do ngấm qua hàng rào máu não chưa hoàn thiện gây vàng da nhân não và tổn thương thần kinh vĩnh viễn.",
    reference: "Sách Dược lý 2 tr. 327"
  },
  {
    chapter: "Vitamin",
    level: "Vận dụng",
    question: "Dấu hiệu nhiễm độc mạn tính nguy hiểm khi lạm dụng Vitamin A liều cao ở người lớn là gì?",
    options: [
      "Tăng áp lực nội sọ giả u não gây đau đầu dữ dội, buồn nôn, phù gai thị và bong tróc vảy da toàn thân",
      "Bệnh Scorbut gây chảy máu nướu răng tự phát",
      "Hạ canxi máu nặng gây co giật bàn tay người đỡ đẻ",
      "Viêm cầu thận tiến triển nhanh kèm vô niệu"
    ],
    correct: 0,
    explanation: "Dùng thừa vitamin A kéo dài gây hội chứng ngộ độc vitamin A mạn: tăng áp lực nội sọ lành tính (giả u não - pseudotumor cerebri) với triệu chứng đau đầu nhiều, nôn vọt, nhìn đôi, phù nề gai thị, kèm theo rụng tóc, khô rát nứt nẻ môi và bong vảy da toàn thân.",
    reference: "Sách Dược lý 2 tr. 323"
  },
  {
    chapter: "Vitamin",
    level: "Nhận biết",
    question: "Vitamin nào sau đây đóng vai trò chất chống oxy hóa tự nhiên mạnh nhất, bảo vệ các acid béo chưa no của màng tế bào khỏi sự phá hủy của các gốc tự do?",
    options: [
      "Vitamin E (Tocopherol)",
      "Vitamin D (Calciferol)",
      "Vitamin B1 (Thiamin)",
      "Vitamin K1 (Phylloquinon)"
    ],
    correct: 0,
    explanation: "Vitamin E (alpha-tocopherol) định vị trong lớp lipid kép của màng tế bào và lipoprotein, đóng vai trò như chất bẫy gốc tự do, ngăn cản phản ứng peroxy hóa lipid màng tế bào và bảo vệ hồng cầu khỏi tan máu do các chất oxy hóa.",
    reference: "Sách Dược lý 2 tr. 327-328"
  },

  // =========================================================================
  // BÀI 18: THUỐC KHÁNG VIRUS (BỔ SUNG)
  // =========================================================================
  {
    chapter: "Thuốc kháng virus",
    level: "Nhận biết",
    question: "Khi chủng virus Herpes Simplex (HSV) bị đột biến mất hoạt tính của enzym Thymidine kinase (TK- mutants) kháng lại Acyclovir, thuốc kháng virus nào sau đây được chỉ định thay thế?",
    options: [
      "Foscarnet",
      "Valacyclovir",
      "Famciclovir",
      "Penciclovir"
    ],
    correct: 0,
    explanation: "Foscarnet là chất tương tự pyrophosphat vô cơ ức chế trực tiếp vị trí gắn pyrophosphat của ADN polymerase virus mà không cần bất kỳ bước phosphoryl hóa nào của enzym Thymidine kinase (TK). Do đó Foscarnet là thuốc lựa chọn hàng đầu cho các chủng HSV và VZV đề kháng acyclovir.",
    reference: "Sách Dược lý 2 tr. 233"
  },
  {
    chapter: "Thuốc kháng virus",
    level: "Nhận biết",
    question: "Ganciclovir là thuốc kháng virus tương tự guanosin được ưu tiên chỉ định số 1 trong trường hợp nhiễm virus nào ở bệnh nhân suy giảm miễn dịch?",
    options: [
      "Cytomegalovirus (CMV) gây viêm võng mạc, viêm phổi hoặc viêm đại tràng",
      "Virus hợp bào hô hấp (RSV) ở trẻ nhỏ",
      "Virus viêm não Nhật Bản B",
      "Virus dại xâm nhập hệ thần kinh"
    ],
    correct: 0,
    explanation: "Ganciclovir được phosphoryl hóa bởi enzym phosphotransferase UL97 đặc hiệu của Cytomegalovirus (CMV), có hoạt tính ức chế CMV mạnh hơn Acyclovir từ 50-100 lần, là thuốc đầu tay điều trị và dự phòng nhiễm CMV ở bệnh nhân ghép tạng hoặc AIDS.",
    reference: "Sách Dược lý 2 tr. 232-233"
  },
  {
    chapter: "Thuốc kháng virus",
    level: "Nhận biết",
    question: "Efavirenz (EFV) là thuốc kháng HIV nhóm NNRTI có tác dụng không mong muốn đặc thù nổi bật trên cơ quan nào khiến thuốc được khuyên uống trước khi đi ngủ?",
    options: [
      "Hệ thần kinh trung ương gây ác mộng, mất ngủ, chóng mặt, lo âu và ảo giác",
      "Hệ tim mạch gây suy tim xung huyết cấp",
      "Hệ cơ quan vận động gây viêm cân gan bàn chân",
      "Tuyến giáp gây bướu giáp khổng lồ"
    ],
    correct: 0,
    explanation: "Khoảng 50% bệnh nhân dùng Efavirenz gặp tác dụng phụ thần kinh - tâm thần: gặp ác mộng sống động kỳ lạ, mất ngủ, chóng mặt, giảm khả năng tập trung, trầm cảm. Uống thuốc vào buổi tối ngay trước khi đi ngủ giúp bệnh nhân vượt qua các triệu chứng này dễ dàng hơn.",
    reference: "Sách Dược lý 2 tr. 238"
  },
  {
    chapter: "Thuốc kháng virus",
    level: "Nhận biết",
    question: "Sofosbuvir là thuốc kháng virus tác dụng trực tiếp (DAA) có bước ngoặt điều trị khỏi hoàn toàn bệnh Viêm gan C mạn tính (HCV) nhờ cơ chế phân tử nào?",
    options: [
      "Ức chế chọn lọc enzym ARN polymerase phụ thuộc ARN (NS5B) của virus HCV",
      "Ức chế enzym protease NS3/4A",
      "Ức chế protein không cấu trúc NS5A",
      "Ức chế sự gắn kết của virus vào thụ thể CD81"
    ],
    correct: 0,
    explanation: "Sofosbuvir là một chất tương tự nucleotid ức chế cạnh tranh enzym NS5B RNA-dependent RNA polymerase của virus viêm gan C, chấm dứt sự nhân lên của ARN virus, có hiệu lực trên tất cả các kiểu gen (genotype) của HCV với tỷ lệ khỏi bệnh trên 95%.",
    reference: "Sách Dược lý 2 tr. 240-241"
  },

  // =========================================================================
  // BÀI 19: THUỐC CHỐNG UNG THƯ (BỔ SUNG)
  // =========================================================================
  {
    chapter: "Thuốc chống ung thư",
    level: "Nhận biết",
    question: "5-Fluorouracil (5-FU) là thuốc chống ung thư thuộc nhóm chất chống chuyển hóa pyrimidin có cơ chế tác dụng là gì?",
    options: [
      "Ức chế enzym Thymidylat synthase (TS) ngăn chặn quá trình tổng hợp dTMP từ dUMP",
      "Ức chế enzym ribonucleotid reductase ở màng ngoài ty thể",
      "Gắn cộng hóa trị vào gốc purin gây đứt gãy sợi kép ADN",
      "Kích thích chuỗi enzym ly giải protein ubiquitin"
    ],
    correct: 0,
    explanation: "5-FU được chuyển hóa nội bào thành FdUMP, chất này tạo phức hợp ức chế cạnh tranh giả với enzym Thymidylat synthase và acid folinic, ngăn cản chuyển dUMP thành dTMP, dẫn tới hiện tượng 'chết tế bào do thiếu thymin' (thymineless death).",
    reference: "Sách Dược lý 2 tr. 246"
  },
  {
    chapter: "Thuốc chống ung thư",
    level: "Nhận biết",
    question: "Các thuốc chống ung thư nhóm Taxan (như Paclitaxel, Docetaxel) có nguồn gốc chiết xuất từ loài thực vật nào?",
    options: [
      "Cây Thông đỏ (Taxus brevifolia / Taxus baccata)",
      "Cây Dừa cạn (Catharanthus roseus)",
      "Cây Ba gạc (Rauwolfia serpentina)",
      "Cây Thuốc phiện (Papaver somniferum)"
    ],
    correct: 0,
    explanation: "Paclitaxel được chiết xuất từ vỏ cây Thông đỏ Thái Bình Dương (Taxus brevifolia), Docetaxel là dẫn xuất bán tổng hợp từ lá cây Thông đỏ châu Âu (Taxus baccata). Thuốc có tác dụng làm bền vững vi quản, ngăn cản sự tháo dỡ thoi phân bào.",
    reference: "Sách Dược lý 2 tr. 254"
  },
  {
    chapter: "Thuốc chống ung thư",
    level: "Nhận biết",
    question: "Kháng sinh chống ung thư Bleomycin có ưu điểm lâm sàng nổi bật là ít ức chế tủy xương, tuy nhiên có tác dụng không mong muốn nghiêm trọng trên cơ quan nào?",
    options: [
      "Gây xơ hóa phổi kẽ thâm nhiễm và suy hô hấp",
      "Gây hoại tử vỏ thượng thận hai bên",
      "Gây suy tim sung huyết mạn tính phụ thuộc liều",
      "Gây điếc tai không hồi phục"
    ],
    correct: 0,
    explanation: "Do mô phổi và da có lượng enzym bleomycin hydrolase (enzym bất hoạt thuốc) rất thấp nên Bleomycin tích lũy nồng độ cao ở phổi, sinh các gốc tự do kích hoạt viêm phế nang và dẫn tới xơ hóa phổi (pulmonary fibrosis) đe dọa tử vong.",
    reference: "Sách Dược lý 2 tr. 259"
  },
  {
    chapter: "Thuốc chống ung thư",
    level: "Nhận biết",
    question: "Dexrazoxan được sử dụng trong hóa trị liệu ung thư phối hợp cùng Doxorubicin nhằm mục đích gì?",
    options: [
      "Bảo vệ cơ tim khỏi độc tính gây suy tim do các gốc tự do của Doxorubicin tạo phức với sắt",
      "Tăng cường hoạt tính tiêu diệt khối u của Doxorubicin lên gấp 10 lần",
      "Ngăn cản tác dụng phụ gây rụng tóc của thuốc hóa chất",
      "Kích thích tủy xương tăng sinh bạch cầu hạt nhanh chóng"
    ],
    correct: 0,
    explanation: "Dexrazoxan là chất tạo phức chelat nội bào đi vào tế bào cơ tim và bị thủy phân thành chất gắn sắt, ngăn cản Doxorubicin tạo phức với ion sắt Fe3+, từ đó triệt tiêu sự hình thành các gốc tự do oxy hóa phá hủy màng tế bào cơ tim.",
    reference: "Sách Dược lý 2 tr. 258"
  },

  // =========================================================================
  // BÀI 20: THUỐC TRONG ĐIỀU TRỊ NGỘ ĐỘC CẤP (BỔ SUNG)
  // =========================================================================
  {
    chapter: "Thuốc/trong điều trị ngộ độc",
    level: "Vận dụng",
    question: "Biện pháp rửa dạ dày loại trừ chất độc bị CHỐNG CHỈ ĐỊNH trong tình huống ngộ độc đường uống nào sau đây?",
    options: [
      "Ngộ độc các hóa chất ăn mòn mạnh (acid mạnh, kiềm mạnh) hoặc dung môi xăng dầu bay hơi",
      "Ngộ độc Paracetamol trong vòng 1 giờ đầu tiên",
      "Ngộ độc thuốc an thần Barbiturat lượng lớn mới uống",
      "Ngộ độc nấm độc sau khi ăn bữa trưa 30 phút"
    ],
    correct: 0,
    explanation: "Ngộ độc acid/kiềm mạnh làm niêm mạc thực quản và dạ dày bị mỏng và hoại tử sâu, đưa ống thông vào dễ gây thủng thực quản/dạ dày. Ngộ độc xăng dầu dễ gây trào ngược hít sặc vào phổi gây viêm phổi hóa chất hoại tử tử vong. Bệnh nhân hôn mê chưa đặt nội khí quản cũng chống chỉ định rửa dạ dày.",
    reference: "Sách Dược lý 2 tr. 355"
  },
  {
    chapter: "Thuốc/trong điều trị ngộ độc",
    level: "Nhận biết",
    question: "Than hoạt tính (Activated Charcoal) là chất hấp phụ tiêu hóa rất phổ biến, tuy nhiên than hoạt hầu như KHÔNG có tác dụng hấp phụ chất nào sau đây?",
    options: [
      "Kim loại nặng (sắt, chì, thủy ngân, lithium) và các chất điện giải, cồn (ethanol, methanol)",
      "Thuốc an thần gây ngủ nhóm barbiturat",
      "Thuốc hạ sốt giảm đau paracetamol",
      "Thuốc chống trầm cảm ba vòng amitriptylin"
    ],
    correct: 0,
    explanation: "Than hoạt hấp phụ tốt các chất hữu cơ không phân cực, có phân tử lượng từ 100 đến 1000 Da. Than hoạt hoàn toàn không hấp phụ các ion nhỏ phân cực cao như sắt, chì, lithium, kali, acid/kiềm mạnh và các phân tử cồn nhỏ như ethanol, methanol.",
    reference: "Sách Dược lý 2 tr. 355-356"
  },
  {
    chapter: "Thuốc/trong điều trị ngộ độc",
    level: "Nhận biết",
    question: "Dimercaprol (BAL) và Calci dinatri edetat (CaNa2EDTA) là thuốc giải độc đặc hiệu điều trị ngộ độc nhóm chất nào?",
    options: [
      "Ngộ độc kim loại nặng như Chì (Pb), Thủy ngân (Hg), Asen (As)",
      "Ngộ độc thuốc tê nhóm amid",
      "Ngộ độc khí than Carbon monoxid (CO)",
      "Ngộ độc chất ức chế men chuyển ACEI"
    ],
    correct: 0,
    explanation: "BAL (British Anti-Lewisite) có 2 nhóm sulfhydryl (-SH) tự do tạo phức vòng chelat 5 cạnh bền vững với kim loại nặng (Asen, Thủy ngân, Vàng), cạnh tranh với nhóm -SH của enzym cơ thể. CaNa2EDTA tạo phức hòa tan bền với ion Chì (Pb2+) giúp bài xuất chì an toàn qua thận.",
    reference: "Sách Dược lý 2 tr. 352-353"
  },
  {
    chapter: "Thuốc/trong điều trị ngộ độc",
    level: "Nhận biết",
    question: "Hydroxocobalamin (một dạng của Vitamin B12) được sử dụng làm thuốc giải độc cấp cứu đặc hiệu cho bệnh nhân ngộ độc chất nào?",
    options: [
      "Ngộ độc Cyanid",
      "Ngộ độc Opioid",
      "Ngộ độc Heparin",
      "Ngộ độc Insulin"
    ],
    correct: 0,
    explanation: "Hydroxocobalamin chứa nguyên tử coban gắn nhóm hydroxy, khi gặp cyanid trong máu coban sẽ kết hợp với cyanid với ái lực cực mạnh tạo thành cyanocobalamin (chính là Vitamin B12 hoàn toàn không độc), bài tiết nhanh và an toàn qua nước tiểu.",
    reference: "Sách Dược lý 2 tr. 364"
  }
];

