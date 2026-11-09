// NGÂN HÀNG DƯỢC LÝ 2 - PHẦN 4: NỘI TIẾT, HẠ ĐƯỜNG HUYẾT, ĐÔNG MÁU & THIẾU MÁU
// Bài 13: Hormon (Chương 16, tr. 283-294, 301-322)
// Bài 14: Thuốc hạ glucose máu (Chương 16, tr. 294-301)
// Bài 15: Thuốc/QT đông cầm máu (Chương 5, tr. 113-127)
// Bài 17: Thuốc chữa thiếu máu (Chương 6, tr. 127-130)
// Tiêu chuẩn: Chuẩn giáo trình Dược lý 2 Bộ Y tế, không mở ngoặc đơn gợi ý ở đáp án.

module.exports = [
  // =========================================================================
  // BÀI 13: HORMON VÀ THUỐC ĐIỀU CHỈNH RỐI LOẠN NỘI TIẾT (trang 283-294, 301-322)
  // =========================================================================
  {
    chapter: "Hormon",
    level: "Nhận biết",
    question: "Các thuốc Glucocorticoid (như Prednisolon, Dexamethason) có tác dụng chống viêm mạnh nhờ cơ chế phân tử chủ yếu nào?",
    options: [
      "Kích thích tổng hợp lipocortin-1 (annexin-1) ức chế enzym phospholipase A2 và ức chế yếu tố phiên mã NF-kB",
      "Ức chế trực tiếp enzym HMG-CoA reductase tại tế bào gan",
      "Phong bế thụ thể histamin H1 và muscarinic M3 tại màng tế bào",
      "Kích thích trực tiếp tế bào lympho B tăng sinh kháng thể IgG"
    ],
    correct: 0,
    explanation: "Glucocorticoid gắn vào thụ thể nội bào GR, kích thích dịch mã tổng hợp protein lipocortin-1 (annexin-1), chất này ức chế phospholipase A2, làm ngăn chặn giải phóng acid arachidonic (tiền chất tạo prostaglandin và leukotrien). Ngoài ra GC ức chế NF-kB ngăn tổng hợp các cytokin gây viêm.",
    reference: "Sách Dược lý 2 tr. 285-286"
  },
  {
    chapter: "Hormon",
    level: "Vận dụng",
    question: "Vì sao trong điều trị mạn tính bằng Glucocorticoid, nguyên tắc vàng là nên uống toàn bộ liều thuốc trong ngày vào một lần duy nhất lúc 8 giờ sáng?",
    options: [
      "Trùng với đỉnh bài tiết cortisol sinh lý tự nhiên của cơ thể để giảm thiểu ức chế trục dưới đồi - tuyến yên - thượng thận",
      "Để dạ dày tiết nhiều acid giúp hấp thu thuốc tốt nhất",
      "Tránh hiện tượng thuốc bị đào thải qua thận trong giấc ngủ trưa",
      "Vì enzym gan chỉ chuyển hóa corticoid vào buổi sáng sớm"
    ],
    correct: 0,
    explanation: "Nồng độ cortisol nội sinh trong cơ thể bài tiết theo nhịp ngày đêm, cao nhất vào khoảng 6-8 giờ sáng và thấp nhất vào nửa đêm. Uống thuốc lúc 8 giờ sáng bắt chước nhịp sinh học tự nhiên, giúp trục HPA ít bị ức chế ngược nhất, hạn chế tối đa nguy cơ teo vỏ thượng thận.",
    reference: "Sách Dược lý 2 tr. 284, 289"
  },
  {
    chapter: "Hormon",
    level: "Vận dụng",
    question: "Hậu quả nghiêm trọng đe dọa tính mạng có thể xảy ra nếu bệnh nhân đang dùng Glucocorticoid liều cao kéo dài đột ngột ngừng thuốc là gì?",
    options: [
      "Suy vỏ thượng thận cấp tính dẫn đến trụy tim mạch và tụt huyết áp",
      "Bùng phát cơn tăng huyết áp kịch phát kèm xuất huyết não",
      "Nhiễm toan ceton do đái tháo đường mất bù",
      "Tăng canxi máu cấp tính gây ngộ độc tim"
    ],
    correct: 0,
    explanation: "Dùng glucocorticoid ngoại sinh liều cao kéo dài ức chế bài tiết ACTH của tuyến yên, làm vỏ thượng thận bị teo lại. Nếu ngừng thuốc đột ngột, tuyến thượng thận bị teo không kịp sản xuất cortisol bù đắp, dẫn đến suy thượng thận cấp: tụt huyết áp nặng, mất nước, rối loạn điện giải và tử vong nếu không cấp cứu bù hydrocortison.",
    reference: "Sách Dược lý 2 tr. 289"
  },
  {
    chapter: "Hormon",
    level: "Nhận biết",
    question: "Tập hợp các triệu chứng: mặt tròn như mặt trăng, bướu mỡ sau gáy, rậm lông, da mỏng dễ bầm tím, tăng đường huyết và loãng xương đặc trưng cho hội chứng nào khi lạm dụng corticoid?",
    options: [
      "Hội chứng Cushing",
      "Hội chứng Addison",
      "Hội chứng Basedow",
      "Hội chứng Sheehan"
    ],
    correct: 0,
    explanation: "Lạm dụng glucocorticoid kéo dài gây hội chứng Cushing do thuốc (cường vỏ thượng thận giả tạo) với biểu hiện tái phân bố mỡ đặc trưng (mặt tròn, bướu trâu), dị hóa protein (teo cơ chi, da mỏng, vết rạn da màu tím), loãng xương và đái tháo đường.",
    reference: "Sách Dược lý 2 tr. 288"
  },
  {
    chapter: "Hormon",
    level: "Nhận biết",
    question: "Thuốc kháng giáp trạng tổng hợp Propylthiouracil (PTU) có cơ chế tác dụng nào?",
    options: [
      "Ức chế enzym thyroid peroxidase (TPO) và ức chế chuyển T4 thành T3 ở mô ngoại vi",
      "Phá hủy vĩnh viễn các nang tuyến giáp bằng tia bức xạ beta",
      "Cạnh tranh trực tiếp với hormon TSH tại thụ thể màng tế bào giáp",
      "Tăng thoái hóa thyroxin tự do trong tuần hoàn máu"
    ],
    correct: 0,
    explanation: "Propylthiouracil (PTU) ức chế enzym peroxidase của tuyến giáp, ngăn chặn quá trình oxy hóa iodid và iod hóa tyrosin. Ngoài ra ưu điểm riêng của PTU là ức chế enzym deiodinase ở ngoại vi, ngăn cản chuyển T4 thành dạng T3 có hoạt tính mạnh hơn.",
    reference: "Sách Dược lý 2 tr. 305"
  },
  {
    chapter: "Hormon",
    level: "Vận dụng",
    question: "Thuốc kháng giáp trạng tổng hợp nào được ưu tiên lựa chọn hàng đầu cho phụ nữ có thai bị cường giáp trong 3 tháng đầu thai kỳ?",
    options: [
      "Propylthiouracil (PTU)",
      "Methimazol",
      "Iod phóng xạ I-131",
      "Dung dịch Lugol liều cao"
    ],
    correct: 0,
    explanation: "Trong 3 tháng đầu thai kỳ, PTU liên kết mạnh với protein huyết tương nên ít qua nhau thai hơn Methimazol và ít nguy cơ gây dị tật bẩm sinh (bất sản da đầu, teo thực quản). Do đó PTU là lựa chọn ưu tiên trong tam cá nguyệt thứ nhất.",
    reference: "Sách Dược lý 2 tr. 306"
  },
  {
    chapter: "Hormon",
    level: "Vận dụng cao",
    question: "Tác dụng không mong muốn hiếm gặp nhưng cực kỳ nguy hiểm của nhóm thuốc kháng giáp trạng tổng hợp (PTU, Methimazol) cần dặn bệnh nhân đi khám ngay khi bị sốt, đau họng là gì?",
    options: [
      "Mất bạch cầu hạt (Agranulocytosis)",
      "Suy thận cấp vô niệu do sỏi urat",
      "Viêm tụy cấp thể hoại tử",
      "Tăng nhãn áp góc đóng cấp tính"
    ],
    correct: 0,
    explanation: "Biến chứng nguy hiểm nhất của thionamid là ức chế tủy xương gây mất bạch cầu hạt (bạch cầu trung tính giảm dưới 500/mm3), làm cơ thể mất khả năng chống đỡ nhiễm trùng. Bệnh nhân sốt cao, đau họng, loét miệng cần ngừng thuốc ngay và đếm công thức máu.",
    reference: "Sách Dược lý 2 tr. 306"
  },
  {
    chapter: "Hormon",
    level: "Nhận biết",
    question: "Desmopressin là dẫn xuất tổng hợp của Vasopressin (ADH) có tác dụng chống bài niệu vượt trội, được chỉ định trong bệnh lý nào?",
    options: [
      "Bệnh đái tháo nhạt trung ương và chứng đái dầm ban đêm ở trẻ em",
      "Đái tháo đường typ 1 phụ thuộc insulin",
      "Suy tim sung huyết kèm phù phổi cấp",
      "Hội chứng tăng tiết ADH không thích hợp (SIADH)"
    ],
    correct: 0,
    explanation: "Desmopressin tác dụng chọn lọc rất cao trên thụ thể V2 ở ống góp thận, làm tăng tái hấp thu nước mà ít tác dụng co mạch (thụ thể V1), là thuốc đặc trị bệnh đái tháo nhạt nguồn gốc trung ương và chứng đái dầm ban đêm ở trẻ em.",
    reference: "Sách Dược lý 2 tr. 284"
  },
  {
    chapter: "Hormon",
    level: "Nhận biết",
    question: "Tamoxifen là thuốc điều biến thụ thể estrogen chọn lọc (SERM) được sử dụng rộng rãi trong điều trị bệnh lý nào?",
    options: [
      "Ung thư vú có thụ thể estrogen dương tính (ER+)",
      "Ung thư tuyến tiền liệt di căn xương",
      "Bệnh Basedow kháng thuốc kháng giáp",
      "Hội chứng buồng trứng đa nang thể béo phì"
    ],
    correct: 0,
    explanation: "Tamoxifen đối kháng cạnh tranh với estrogen tại thụ thể estrogen ở mô tuyến vú, ngăn cản estrogen kích thích sự tăng sinh của tế bào ung thư vú nhạy cảm với hormon (ER+).",
    reference: "Sách Dược lý 2 tr. 250, 319"
  },

  // =========================================================================
  // BÀI 14: THUỐC HẠ GLUCOSE MÁU (trang 294 - 301)
  // =========================================================================
  {
    chapter: "Thuốc hạ glucose máu",
    level: "Nhận biết",
    question: "Loại insulin nào sau đây duy nhất được phép sử dụng qua đường tiêm hoặc truyền tĩnh mạch trong cấp cứu hôn mê toan ceton do đái tháo đường?",
    options: [
      "Insulin thường (Regular Insulin)",
      "Insulin NPH (Isophane)",
      "Insulin Glargin",
      "Insulin Detemir"
    ],
    correct: 0,
    explanation: "Chỉ có Insulin thường (Regular Insulin / Insulin hòa tan tinh khiết) là dạng dung dịch trong suốt, tác dụng nhanh, được phép tiêm hoặc truyền tĩnh mạch trong cấp cứu hôn mê tăng áp lực thẩm thấu hoặc hôn mê toan ceton đái tháo đường. Các loại insulin đục hoặc có biến đổi chuỗi không được truyền TM.",
    reference: "Sách Dược lý 2 tr. 295"
  },
  {
    chapter: "Thuốc hạ glucose máu",
    level: "Nhận biết",
    question: "Các analog insulin tác dụng cực nhanh (Lispro, Aspart, Glulisine) có ưu điểm vượt trội nào so với Regular insulin?",
    options: [
      "Khởi phát tác dụng sau 10-15 phút, tiêm ngay sát trước bữa ăn giúp kiểm soát đường huyết sau ăn tốt hơn",
      "Tác dụng kéo dài liên tục suốt 48 giờ chỉ cần tiêm 1 lần mỗi tuần",
      "Không bao giờ gây tác dụng phụ hạ đường huyết dù dùng quá liều",
      "Có thể uống bằng đường tiêu hóa mà không bị enzym phân hủy"
    ],
    correct: 0,
    explanation: "Do cấu trúc biến đổi ngăn cản sự tự trùng hợp thành dạng hexamer, Lispro và Aspart phân ly ngay thành monomer, hấp thu rất nhanh đạt đỉnh sau 30-60 phút, cho phép bệnh nhân tiêm ngay sát trước khi ăn hoặc ngay sau khi ăn.",
    reference: "Sách Dược lý 2 tr. 295-296"
  },
  {
    chapter: "Thuốc hạ glucose máu",
    level: "Nhận biết",
    question: "Insulin nền tác dụng kéo dài như Glargin (Lantus) có đặc điểm dược động học nổi bật nào?",
    options: [
      "Hòa tan ở pH acid, khi tiêm dưới da kết tủa vi thể giải phóng chậm đều đặn suốt 24 giờ không có đỉnh nhọn",
      "Gây hạ đường huyết đột ngột sau tiêm 2 giờ",
      "Dung dịch có màu đục như sữa cần lắc đều trước khi tiêm",
      "Chỉ dùng để kiểm soát đường huyết sau các bữa ăn thịnh soạn"
    ],
    correct: 0,
    explanation: "Glargin được pha chế ở pH 4. Khi tiêm vào mô dưới da có pH sinh lý 7,4, phân tử kết tủa tạo thành các vi tinh thể tan rất chậm, phóng thích insulin ổn định liên tục suốt 24 giờ mà không có đỉnh nồng độ nhọn, giảm thiểu nguy cơ hạ đường huyết ban đêm.",
    reference: "Sách Dược lý 2 tr. 296"
  },
  {
    chapter: "Thuốc hạ glucose máu",
    level: "Vận dụng",
    question: "Biện pháp phòng ngừa hiện tượng loạn dưỡng mô mỡ (teo mỡ hoặc phì đại mỡ) tại vị trí tiêm insulin cho bệnh nhân là gì?",
    options: [
      "Luân chuyển đều đặn vị trí tiêm giữa các vùng bụng, đùi, cánh tay",
      "Tiêm liên tục vào một vị trí cố định duy nhất mỗi ngày",
      "Chườm nước đá lạnh lên vị trí tiêm ngay sau khi rút kim",
      "Thoa cồn iod nồng độ cao trước và sau khi tiêm thuốc"
    ],
    correct: 0,
    explanation: "Tiêm nhiều lần vào cùng một vị trí sẽ kích thích mỡ tại chỗ phì đại hoặc gây teo mỡ làm giảm hấp thu insulin. Hướng dẫn bệnh nhân luân chuyển vị trí tiêm (vòng tròn quanh rốn, mặt trước đùi, mặt ngoài cánh tay) là biện pháp phòng ngừa chuẩn mực.",
    reference: "Sách Dược lý 2 tr. 296"
  },
  {
    chapter: "Thuốc hạ glucose máu",
    level: "Nhận biết",
    question: "Nhóm thuốc Sulfonylurea (như Gliclazid, Glimepirid, Glibenclamid) hạ đường huyết theo cơ chế nào?",
    options: [
      "Gắn vào thụ thể SUR1 làm đóng kênh K+ phụ thuộc ATP trên tế bào beta đảo tụy, kích thích giải phóng insulin",
      "Ức chế enzym dipeptidyl peptidase-4 làm tăng nồng độ GLP-1",
      "Ức chế kênh đồng vận chuyển natri-glucose SGLT2 tại ống lượn gần",
      "Ức chế trực tiếp quá trình phân giải glycogen tại cơ vân"
    ],
    correct: 0,
    explanation: "Sulfonylurea gắn vào tiểu phần SUR1 làm đóng kênh K+ nhạy cảm ATP, gây khử cực màng tế bào beta đảo tụy, mở kênh Ca2+ phụ thuộc điện áp, ion Ca2+ tràn vào gây xuất bào giải phóng các bọc chứa insulin vào máu.",
    reference: "Sách Dược lý 2 tr. 297"
  },
  {
    chapter: "Thuốc hạ glucose máu",
    level: "Nhận biết",
    question: "Metformin (nhóm Biguanid) là thuốc đầu tay trong điều trị đái tháo đường typ 2 có cơ chế hạ đường huyết chủ yếu là gì?",
    options: [
      "Hoạt hóa enzym AMPK làm giảm sản xuất glucose ở gan và tăng nhạy cảm của mô ngoại vi với insulin",
      "Kích thích trực tiếp các tế bào beta đảo tụy tiết thêm insulin",
      "Gắn với protein vận chuyển mỡ làm tăng bài tiết mỡ qua nước tiểu",
      "Phá hủy hormon glucagon ngay trong máu tĩnh mạch cửa"
    ],
    correct: 0,
    explanation: "Metformin hoạt hóa AMPK, ức chế quá trình tân tạo đường (gluconeogenesis) và phân giải glycogen ở tế bào gan, đồng thời cải thiện sự nhạy cảm của mô ngoại biên (cơ, mỡ) với insulin. Vì không kích thích tụy tiết insulin, Metformin không gây hạ đường huyết đơn độc và không làm tăng cân.",
    reference: "Sách Dược lý 2 tr. 298-299"
  },
  {
    chapter: "Thuốc hạ glucose máu",
    level: "Vận dụng",
    question: "Tác dụng không mong muốn hiếm gặp nhưng có tỷ lệ tử vong cao nhất của Metformin là gì?",
    options: [
      "Nhiễm toan acid lactic",
      "Viêm gan hoại tử tế bào gan cấp",
      "Hôn mê hạ đường huyết sâu không hồi phục",
      "Thủng loét hành tá tràng do tăng tiết acid"
    ],
    correct: 0,
    explanation: "Metformin ức chế chuyển hóa lactat tại ty thể tế bào gan. Khi dùng ở bệnh nhân suy thận nặng, suy gan, suy hô hấp, suy tim hoặc thiếu máu mô, lactat sẽ tích lũy gây toan acid lactic máu nặng nề với tỷ lệ tử vong lên tới 50%. Chống chỉ định khi mức lọc cầu thận eGFR < 30 mL/phút.",
    reference: "Sách Dược lý 2 tr. 299"
  },
  {
    chapter: "Thuốc hạ glucose máu",
    level: "Nhận biết",
    question: "Acarbose có cơ chế tác dụng làm giảm đường huyết sau bữa ăn nhờ ức chế enzym nào?",
    options: [
      "Alpha-glucosidase ở bờ bàn chải ruột non",
      "Phosphodiesterase typ 5 ở cơ trơn mạch máu",
      "Monoamin oxidase ở tận cùng thần kinh",
      "Angiotensin converting enzyme ở nội mô mao mạch phổi"
    ],
    correct: 0,
    explanation: "Acarbose ức chế cạnh tranh thuận nghịch enzym alpha-glucosidase (maltase, isomaltase, sucrase) ở niêm mạc ruột non, làm chậm quá trình giáng hóa carbohydrat phức tạp thành monosaccharid (glucose), làm chậm hấp thu glucose và làm phẳng đỉnh đường huyết sau ăn.",
    reference: "Sách Dược lý 2 tr. 300"
  },

  // =========================================================================
  // BÀI 15: THUỐC TÁC DỤNG TRÊN QUÁ TRÌNH ĐÔNG MÁU VÀ TIÊU FIBRIN (trang 113 - 127)
  // =========================================================================
  {
    chapter: "Thuốc/QT đông cầm máu",
    level: "Nhận biết",
    question: "Cơ chế chống đông máu của Heparin tiêu chuẩn (Heparin không phân đoạn - UFH) là gì?",
    options: [
      "Gắn với Antithrombin III (AT-III) làm tăng tốc độ ức chế Thrombin (IIa) và Yếu tố Xa lên hàng nghìn lần",
      "Ức chế enzym epoxide reductase ở gan làm giảm tổng hợp prothrombin",
      "Ức chế không hồi phục thụ thể P2Y12 trên màng tiểu cầu",
      "Hoạt hóa plasminogen thành plasmin làm tiêu cục máu đông"
    ],
    correct: 0,
    explanation: "Heparin gắn vào Antithrombin III làm biến đổi cấu hình không gian của AT-III, làm tăng tốc độ gắn và ức chế các enzym đông máu hoạt hóa (chủ yếu là Thrombin IIa và Yếu tố Xa) lên khoảng 1000 lần.",
    reference: "Sách Dược lý 2 tr. 115-116"
  },
  {
    chapter: "Thuốc/QT đông cầm máu",
    level: "Vận dụng",
    question: "Xét nghiệm cận lâm sàng thường quy được sử dụng để theo dõi hiệu quả và chỉnh liều khi điều trị bằng Heparin không phân đoạn (UFH) là gì?",
    options: [
      "Thời gian thromboplastin một phần hoạt hóa (aPTT)",
      "Chỉ số bình thường hóa quốc tế (INR)",
      "Thời gian Prothrombin (PT)",
      "Số lượng tiểu cầu đơn thuần"
    ],
    correct: 0,
    explanation: "Heparin tiêu chuẩn tác động lên con đường đông máu nội sinh nên được theo dõi bằng thời gian aPTT. Mục tiêu điều trị thường duy trì aPTT gấp 1,5 đến 2,5 lần chứng. Đối với kháng vitamin K (Warfarin) thì mới theo dõi bằng PT/INR.",
    reference: "Sách Dược lý 2 tr. 116"
  },
  {
    chapter: "Thuốc/QT đông cầm máu",
    level: "Nhận biết",
    question: "Chất giải độc đặc hiệu (antidote) dùng để trung hòa tác dụng và cầm máu khi quá liều Heparin là gì?",
    options: [
      "Protamin sulfat",
      "Vitamin K1",
      "Acid tranexamic",
      "Naloxon hydroclorid"
    ],
    correct: 0,
    explanation: "Protamin sulfat là một protein base mang điện tích dương mạnh, khi vào máu sẽ tạo phức hợp ion trung hòa bền vững với phân tử heparin mang điện tích âm mạnh, làm mất hoàn toàn hoạt tính chống đông của heparin.",
    reference: "Sách Dược lý 2 tr. 117"
  },
  {
    chapter: "Thuốc/QT đông cầm máu",
    level: "Nhận biết",
    question: "Ưu điểm vượt trội của Heparin trọng lượng phân tử thấp (LMWH như Enoxaparin) so với Heparin tiêu chuẩn (UFH) là gì?",
    options: [
      "Sinh khả dụng cao, thời gian bán thải dài, đáp ứng liều dự đoán được nên không cần theo dõi xét nghiệm aPTT thường quy",
      "Có thể uống bằng đường tiêu hóa với hiệu lực 100%",
      "Không bao giờ gây biến chứng chảy máu dù dùng bất kỳ liều nào",
      "Tác dụng chọn lọc 100% trên thrombin IIa mà không ảnh hưởng yếu tố Xa"
    ],
    correct: 0,
    explanation: "LMWH có chuỗi polysaccharid ngắn hơn, ít gắn không đặc hiệu vào protein huyết tương và tế bào nội mô nên có sinh khả dụng dưới da > 90%, thời gian bán thải kéo dài (tiêm 1-2 lần/ngày), đáp ứng liều rất ổn định nên không cần xét nghiệm đông máu thường quy.",
    reference: "Sách Dược lý 2 tr. 117-118"
  },
  {
    chapter: "Thuốc/QT đông cầm máu",
    level: "Nhận biết",
    question: "Thuốc chống đông máu đường uống nhóm kháng Vitamin K (như Warfarin, Acenocoumarol) ngăn cản sự tổng hợp ở gan của các yếu tố đông máu nào?",
    options: [
      "Yếu tố II, VII, IX và X",
      "Yếu tố I, V, VIII và XI",
      "Yếu tố XII, XIII và Prekallikrein",
      "Yếu tố III và Yếu tố IV"
    ],
    correct: 0,
    explanation: "Vitamin K là coenzym cần thiết để carboxyl hóa các gốc glutamat của các yếu tố đông máu II, VII, IX, X và protein C, protein S ở gan. Kháng vitamin K ức chế enzym epoxide reductase làm gan không tổng hợp được các yếu tố đông máu có hoạt tính này.",
    reference: "Sách Dược lý 2 tr. 119"
  },
  {
    chapter: "Thuốc/QT đông cầm máu",
    level: "Vận dụng",
    question: "Chỉ số INR (International Normalized Ratio) tối ưu cần duy trì ở bệnh nhân dùng Warfarin điều trị rung nhĩ phòng ngừa đột quỵ là bao nhiêu?",
    options: [
      "2,0 đến 3,0",
      "0,8 đến 1,2",
      "3,5 đến 5,0",
      "6,0 đến 8,0"
    ],
    correct: 0,
    explanation: "Đối với phần lớn các chỉ định điều trị chống đông bằng kháng vitamin K (rung nhĩ, huyết khối tĩnh mạch sâu, thuyên tắc phổi), khoảng INR mục tiêu điều trị an toàn và hiệu quả là 2,0 - 3,0. (Riêng van tim nhân tạo cơ học có thể từ 2,5 - 3,5).",
    reference: "Sách Dược lý 2 tr. 120"
  },
  {
    chapter: "Thuốc/QT đông cầm máu",
    level: "Nhận biết",
    question: "Aspirin liều thấp (75 - 150 mg/ngày) có tác dụng chống kết tập tiểu cầu kéo dài suốt đời sống của tiểu cầu nhờ cơ chế nào?",
    options: [
      "Acetyl hóa không thuận nghịch enzym Cyclooxygenase-1 (COX-1) làm ức chế tổng hợp Thromboxan A2",
      "Phong bế thụ thể Glycoprotein IIb/IIIa trên màng tiểu cầu",
      "Ức chế enzym phosphodiesterase làm tăng thoái hóa AMP vòng",
      "Ức chế thụ thể thrombin PAR-1"
    ],
    correct: 0,
    explanation: "Aspirin acetyl hóa không hồi phục vị trí Serin 529 của enzym COX-1, ức chế hoàn toàn việc tạo Thromboxan A2 (chất co mạch và gây ngưng tập tiểu cầu mạnh). Do tiểu cầu không có nhân để tổng hợp protein mới, tác dụng này kéo dài suốt đời sống tiểu cầu (7-10 ngày).",
    reference: "Sách Dược lý 2 tr. 122"
  },
  {
    chapter: "Thuốc/QT đông cầm máu",
    level: "Nhận biết",
    question: "Clopidogrel (Plavix) có cơ chế chống ngưng tập tiểu cầu là gì?",
    options: [
      "Ức chế chọn lọc và không hồi phục thụ thể P2Y12 của ADP trên bề mặt tiểu cầu",
      "Chẹn kênh calci làm giảm nồng độ calci tự do trong tiểu cầu",
      "Ức chế enzym tổng hợp prostaglandin E1",
      "Phá hủy cấu trúc màng phospholipid của tiểu cầu"
    ],
    correct: 0,
    explanation: "Clopidogrel là dẫn chất thienopyridin, sau khi chuyển hóa qua gan tạo chất chuyển hóa có hoạt tính gắn cộng hóa trị và ức chế vĩnh viễn thụ thể P2Y12 của ADP trên màng tiểu cầu, ngăn cản hoạt hóa phức hợp GP IIb/IIIa.",
    reference: "Sách Dược lý 2 tr. 123"
  },
  {
    chapter: "Thuốc/QT đông cầm máu",
    level: "Nhận biết",
    question: "Các thuốc tiêu sợi huyết (như Streptokinase, Alteplase rt-PA) làm tan cục huyết khối tắc mạch nhờ cơ chế nào?",
    options: [
      "Hoạt hóa chuyển Plasminogen thành Plasmin để giáng hóa và phân cắt mạng lưới Fibrin",
      "Bao bọc tiểu cầu ngăn tiểu cầu kết dính vào thành mạch",
      "Gắn kết ion Canxi làm mất hoạt tính của prothrombin",
      "Ức chế enzym thromboplastin mô ở vị trí tổn thương"
    ],
    correct: 0,
    explanation: "Các thuốc tiêu huyết khối tác động như các chất hoạt hóa plasminogen (PA), chuyển plasminogen nội sinh thành plasmin (một enzym tiêu protein), plasmin cắt nhỏ mạng lưới sợi fibrin làm tan rã cục máu đông, tái thông dòng máu mạch vành hoặc mạch não.",
    reference: "Sách Dược lý 2 tr. 125-126"
  },

  // =========================================================================
  // BÀI 17: THUỐC CHỮA THIẾU MÁU (trang 127 - 130)
  // =========================================================================
  {
    chapter: "Thuốc chữa thiếu máu",
    level: "Nhận biết",
    question: "Thuốc chữa thiếu máu do thiếu sắt thường dùng dạng muối sắt hóa trị mấy để dễ hấp thu qua niêm mạc tá tràng nhất?",
    options: [
      "Sắt hóa trị hai (Fe2+)",
      "Sắt hóa trị ba (Fe3+)",
      "Sắt nguyên tố kim loại (Fe0)",
      "Sắt hóa trị sáu (Fe6+)"
    ],
    correct: 0,
    explanation: "Sắt chỉ được hấp thu chủ yếu ở tá tràng và đầu hỗng tràng dưới dạng ion sắt hai (Fe2+). Vitamin C (acid ascorbic) có tính khử mạnh giúp duy trì sắt ở dạng Fe2+ nên làm tăng hấp thu sắt khi uống cùng.",
    reference: "Sách Dược lý 2 tr. 127"
  },
  {
    chapter: "Thuốc chữa thiếu máu",
    level: "Vận dụng",
    question: "Khi bệnh nhân bị ngộ độc sắt cấp tính (nồng độ sắt huyết thanh trên 500 mcg/dL) có biểu hiện nôn mửa, xuất huyết tiêu hóa và trụy mạch, thuốc tạo phức gắp sắt giải độc đặc hiệu là gì?",
    options: [
      "Deferoxamin",
      "Dimercaprol (BAL)",
      "Calci dinatri edetat (CaNa2EDTA)",
      "Penicillamin"
    ],
    correct: 0,
    explanation: "Deferoxamin gắn chọn lọc với ion Fe3+ tự do và ion sắt trong ferritin/hemosiderin tạo phức hợp chelat ferrioxamin tan trong nước và bài xuất an toàn qua nước tiểu (làm nước tiểu có màu đỏ cam), là thuốc giải độc đặc hiệu khi ngộ độc sắt.",
    reference: "Sách Dược lý 2 tr. 127"
  },
  {
    chapter: "Thuốc chữa thiếu máu",
    level: "Nhận biết",
    question: "Thiếu máu hồng cầu to ác tính (bệnh Biermer) kèm tổn thương thoái hóa kết hợp tủy sống có nguyên nhân chính là do thiếu chất nào sau đây?",
    options: [
      "Vitamin B12 (Cobalamin)",
      "Acid folic (Vitamin B9)",
      "Sắt nguyên tố",
      "Pyridoxin (Vitamin B6)"
    ],
    correct: 0,
    explanation: "Thiếu Vitamin B12 (thường do dạ dày teo không tiết yếu tố nội Castle để hấp thu B12 ở hồi tràng) dẫn tới rối loạn phân chia tế bào máu (hồng cầu to) và suy giảm tổng hợp myelin thần kinh gây tổn thương sừng sau và bên tủy sống (hội chứng thoái hóa tủy kết hợp).",
    reference: "Sách Dược lý 2 tr. 128"
  },
  {
    chapter: "Thuốc chữa thiếu máu",
    level: "Vận dụng",
    question: "Phụ nữ chuẩn bị mang thai và trong 3 tháng đầu thai kỳ cần được bổ sung Acid folic hàng ngày nhằm mục đích phòng ngừa dị tật bẩm sinh quan trọng nào ở thai nhi?",
    options: [
      "Dị tật khuyết tật ống thần kinh (nứt đốt sống, vô sọ)",
      "Dị tật còn ống động mạch và đảo gốc động mạch",
      "Dị tật teo hẹp thực quản bẩm sinh",
      "Bệnh xơ nang tụy di truyền"
    ],
    correct: 0,
    explanation: "Bổ sung Acid folic (400 mcg/ngày) trước khi thụ thai và trong giai đoạn đầu hình thành phôi thai giúp đóng kín ống thần kinh đúng thời điểm, giảm tới 70% nguy cơ dị tật ống thần kinh bẩm sinh (nứt đốt sống, thoát vị màng não tủy).",
    reference: "Sách Dược lý 2 tr. 129"
  },
  {
    chapter: "Thuốc chữa thiếu máu",
    level: "Nhận biết",
    question: "Erythropoietin (EPO - Epoetin alfa) được chỉ định chủ yếu để điều trị thiếu máu trong trường hợp nào?",
    options: [
      "Thiếu máu mạn tính do suy thận giai đoạn cuối và thiếu máu do hóa trị ung thư",
      "Thiếu máu huyết tán do bất đồng nhóm máu ABO",
      "Thiếu máu mất máu cấp tính do tai nạn giao thông",
      "Bệnh đa hồng cầu nguyên phát"
    ],
    correct: 0,
    explanation: "Erythropoietin là hormon glycoprotein sinh ra 90% từ tế bào quanh ống thận. Khi thận suy mạn tính, lượng EPO sụt giảm nghiêm trọng dẫn tới thiếu máu đẳng sắc đẳng bào nặng. Bổ sung EPO tái tổ hợp là biện pháp điều trị đặc hiệu số 1.",
    reference: "Sách Dược lý 2 tr. 130"
  }
];
