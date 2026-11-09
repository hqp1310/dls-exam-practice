// NGÂN HÀNG DƯỢC LÝ 2 - PHẦN 1: TIM MẠCH
// Bài 1: Thuốc trợ tim (Chương 1, tr. 9-23)
// Bài 2: Thuốc điều trị THA (Chương 1, tr. 54-79)
// Bài 3: Thuốc chữa CĐTN (Chương 1, tr. 41-54)
// Bài 4: Thuốc chống loạn nhịp (Chương 1, tr. 23-41)
// Tiêu chuẩn: Chuẩn giáo trình Dược lý 2 Bộ Y tế, không mở ngoặc đơn gợi ý ở đáp án.

module.exports = [
  // =========================================================================
  // BÀI 1: THUỐC TRỢ TIM (SUY TIM) (trang 9 - 23)
  // =========================================================================
  {
    chapter: "Thuốc trợ tim",
    level: "Nhận biết",
    question: "Glycosid tim (Digitalis) có nguồn gốc chiết xuất chủ yếu từ loài thực vật nào?",
    options: [
      "Digitalis purpurea và Digitalis lanata",
      "Strophanthus kombe và Strophanthus gratus",
      "Datura stramonium và Atropa belladonna",
      "Rauwolfia serpentina và Catharanthus roseus"
    ],
    correct: 0,
    explanation: "Glycosid trợ tim nhóm Digitalis được chiết xuất chủ yếu từ cây Dương địa hoàng gồm Digitalis purpurea và Digitalis lanata.",
    reference: "Sách Dược lý 2 tr. 9-10"
  },
  {
    chapter: "Thuốc trợ tim",
    level: "Nhận biết",
    question: "Cấu trúc hóa học của glycosid tim gồm hai phần chính là phần đường (ose) và phần không đường (aglycon/genin). Phần nào quyết định tác dụng trợ tim của thuốc?",
    options: [
      "Phần không đường aglycon",
      "Phần đường ose",
      "Cả hai phần có vai trò ngang nhau",
      "Cầu nối glycosid giữa đường và aglycon"
    ],
    correct: 0,
    explanation: "Phần không đường (aglycon hay genin) mang nhân steroid gắn vòng lacton không no quyết định tác dụng trợ tim và độc tính của glycosid tim. Phần đường ose chỉ ảnh hưởng đến dược động học (độ tan, hấp thu, liên kết protein).",
    reference: "Sách Dược lý 2 tr. 10"
  },
  {
    chapter: "Thuốc trợ tim",
    level: "Nhận biết",
    question: "Cơ chế tác dụng phân tử cơ bản của glycosid trợ tim (Digoxin) trên tế bào cơ tim là gì?",
    options: [
      "Ức chế đặc hiệu enzym Na+-K+ ATPase ở màng tế bào cơ tim",
      "Kích thích enzym Adenylcyclase làm tăng tổng hợp AMP vòng",
      "Kích thích trực tiếp thụ thể beta-1 adrenergic tại màng tim",
      "Ức chế enzym phosphodiesterase III trong bào tương cơ tim"
    ],
    correct: 0,
    explanation: "Glycosid tim gắn đặc hiệu và ức chế bơm Na+-K+ ATPase ở màng tế bào cơ tim, làm tăng Na+ nội bào, từ đó giảm thải Ca2+ qua bơm trao đổi Na+/Ca2+, dẫn tới tích lũy Ca2+ tự do trong bào tương làm tăng lực co bóp cơ tim.",
    reference: "Sách Dược lý 2 tr. 11-12"
  },
  {
    chapter: "Thuốc trợ tim",
    level: "Nhận biết",
    question: "Tác dụng dược lý kinh điển của Digitalis trên hoạt động của tim được tóm tắt qua quy luật 4 chữ nào?",
    options: [
      "Tâm thu mạnh, chậm, đều và tâm trương dài ra",
      "Tâm thu nhanh, mạnh, giảm dẫn truyền và giảm tính trơ",
      "Tâm thu yếu, chậm, tăng tính kích thích và rút ngắn tâm trương",
      "Tăng nhịp tim, tăng dẫn truyền nhĩ thất, tăng nhu cầu oxy"
    ],
    correct: 0,
    explanation: "Tác dụng của Digitalis trên tim tóm tắt là: làm tim đập mạnh, chậm và đều (tăng co bóp, giảm nhịp xoang, kéo dài thời gian tâm trương giúp tim được nghỉ ngơi nhiều hơn và hồi phục năng lượng).",
    reference: "Sách Dược lý 2 tr. 13"
  },
  {
    chapter: "Thuốc trợ tim",
    level: "Vận dụng",
    question: "Vì sao glycosid tim làm giảm nhịp tim (tác dụng làm tim đập chậm)?",
    options: [
      "Kích thích dây thần kinh phế vị (dây X) và giảm tính tự động của nút xoang",
      "Kích thích trực tiếp thụ thể giao cảm alpha-1 tại ngoại vi",
      "Ức chế giải phóng acetylcholin tại tận cùng sợi đối giao cảm",
      "Ức chế trực tiếp dòng Ca2+ đi vào qua kênh L-type ở pha 2"
    ],
    correct: 0,
    explanation: "Glycosid tim làm tim đập chậm do kích thích trung tâm phế vị ở hành não và làm tăng tính nhạy cảm của thụ thể áp lực ở xoang cảnh với huyết áp, làm tăng trương lực phế vị đồng thời ức chế nút xoang.",
    reference: "Sách Dược lý 2 tr. 13"
  },
  {
    chapter: "Thuốc trợ tim",
    level: "Vận dụng",
    question: "Trên điện tâm đồ (ECG), dấu hiệu đặc trưng phản ánh tác dụng ngấm Digitalis điều trị (chưa phải ngộ độc) là gì?",
    options: [
      "Đoạn ST chênh xuống võng hình lòng máng và khoảng PR kéo dài",
      "Sóng T cao nhọn đối xứng và khoảng QRS giãn rộng",
      "Đoạn ST chênh lên dạng vòm và xuất hiện sóng Q hoại tử",
      "Mất hoàn toàn sóng P và khoảng QT kéo dài"
    ],
    correct: 0,
    explanation: "Dấu hiệu ngấm digitalis trên điện tâm đồ là đoạn ST chênh xuống võng hình đáy chén/lòng máng, khoảng PR kéo dài (do làm chậm dẫn truyền qua nút nhĩ thất) và khoảng QT ngắn lại.",
    reference: "Sách Dược lý 2 tr. 14"
  },
  {
    chapter: "Thuốc trợ tim",
    level: "Nhận biết",
    question: "So sánh dược động học giữa Digoxin và Digitoxin, nhận định nào sau đây là đúng?",
    options: [
      "Digoxin tan vừa trong mỡ, thải trừ chủ yếu qua thận dưới dạng còn hoạt tính",
      "Digitoxin tan nhiều trong nước, thải trừ chủ yếu qua nước tiểu dạng nguyên vẹn",
      "Digoxin có thời gian bán thải dài hơn nhiều so với Digitoxin (khoảng 7 ngày)",
      "Digitoxin gắn vào protein huyết tương rất thấp (dưới 20%)"
    ],
    correct: 0,
    explanation: "Digoxin có 3 nhóm -OH nên tan vừa trong lipid, hấp thu 60-80%, gắn protein huyết tương 25%, thải trừ chủ yếu qua thận dạng không đổi (t1/2 khoảng 36-40 giờ). Digitoxin rất tan trong lipid, chuyển hóa ở gan, gắn protein 97%, t1/2 khoảng 7 ngày.",
    reference: "Sách Dược lý 2 tr. 14-15"
  },
  {
    chapter: "Thuốc trợ tim",
    level: "Vận dụng",
    question: "Chỉ định kinh điển và thích hợp nhất của Glycosid trợ tim (Digoxin) trong lâm sàng là gì?",
    options: [
      "Suy tim cung lượng thấp có kèm rung nhĩ hoặc cuồng nhĩ nhanh",
      "Suy tim do hẹp van động mạch chủ khít hoặc hẹp dưới van",
      "Suy tim cung lượng cao do thiếu máu mạn tính hoặc nhiễm độc giáp",
      "Viêm cơ tim cấp do bạch hầu hoặc nhiễm trùng cấp tính"
    ],
    correct: 0,
    explanation: "Chỉ định tốt nhất của glycosid tim là suy tim cung lượng thấp kèm loạn nhịp nhanh trên thất (đặc biệt là rung nhĩ nhanh), do vừa làm tăng co bóp cơ tim vừa làm chậm dẫn truyền qua nút nhĩ thất.",
    reference: "Sách Dược lý 2 tr. 15"
  },
  {
    chapter: "Thuốc trợ tim",
    level: "Vận dụng",
    question: "Yếu tố rối loạn điện giải nào sau đây làm tăng rõ rệt độc tính của Digitalis và dễ dẫn đến loạn nhịp tim nguy hiểm?",
    options: [
      "Hạ kali máu, hạ magnesi máu và tăng calci máu",
      "Tăng kali máu, tăng magnesi máu và hạ calci máu",
      "Tăng natri máu, hạ calci máu và hạ clo máu",
      "Hạ natri máu, tăng kali máu và toan chuyển hóa"
    ],
    correct: 0,
    explanation: "Hạ K+ máu làm tăng gắn kết của digitalis vào enzym Na+-K+ ATPase nên làm tăng độc tính tim. Hạ Mg2+ máu và tăng Ca2+ máu cũng làm tăng độc tính nghiêm trọng của digitalis.",
    reference: "Sách Dược lý 2 tr. 16"
  },
  {
    chapter: "Thuốc trợ tim",
    level: "Nhận biết",
    question: "Dấu hiệu nhiễm độc sớm nhất của Digitalis trên hệ tiêu hóa và giác quan là gì?",
    options: [
      "Chán ăn, buồn nôn, nôn và nhìn đồ vật thấy quầng sáng màu vàng hoặc xanh",
      "Tiêu chảy ồ ạt kèm xuất huyết tiêu hóa dưới",
      "Táo bón kéo dài kèm khô miệng dữ dội",
      "Mất vị giác hoàn toàn và ù tai liên tục"
    ],
    correct: 0,
    explanation: "Dấu hiệu sớm ngộ độc digitalis: Tiêu hóa: chán ăn, buồn nôn, nôn, đau bụng; Giác quan/thần kinh: nhìn mờ, nhìn vật có quầng màu vàng hoặc màu xanh lá cây (xanthopsia), mệt mỏi, nhức đầu.",
    reference: "Sách Dược lý 2 tr. 16"
  },
  {
    chapter: "Thuốc trợ tim",
    level: "Vận dụng",
    question: "Loại rối loạn nhịp tim đặc trưng và nguy hiểm nhất gặp trong ngộ độc Digitalis là gì?",
    options: [
      "Ngoại tâm thu thất nhịp đôi, nhịp ba và nhịp nhanh thất",
      "Nhịp xoang nhanh trên 150 chu kỳ/phút",
      "Cơn rung nhĩ kịch phát có dẫn truyền nhanh",
      "Blốc nhánh phải hoàn toàn kèm trục lệch trái"
    ],
    correct: 0,
    explanation: "Độc tính tim nguy hiểm nhất của digitalis là các rối loạn nhịp thất: ngoại tâm thu thất xuất hiện dày đặc, thường có dạng nhịp đôi (bigeminy), nhịp ba hoặc nhịp nhanh thất, có thể tiến triển thành rung thất tử vong.",
    reference: "Sách Dược lý 2 tr. 16"
  },
  {
    chapter: "Thuốc trợ tim",
    level: "Vận dụng cao",
    question: "Thuốc kháng độc đặc hiệu nhất (antidote) được chỉ định trong ngộ độc nặng Glycosid tim đe dọa tính mạng là gì?",
    options: [
      "Kháng thể đặc hiệu kháng digoxin dạng phân đoạn Fab",
      "N-acetylcystein dạng tiêm truyền tĩnh mạch",
      "Protamin sulfat tiêm tĩnh mạch chậm",
      "Deferoxamin tiêm bắp sâu hoặc truyền tĩnh mạch"
    ],
    correct: 0,
    explanation: "Thuốc giải độc đặc hiệu tốt nhất khi ngộ độc nặng glycosid tim (digoxin/digitoxin) là dùng kháng thể kháng digoxin phân đoạn Fab (Digibind hoặc DigiFab). Các kháng thể này gắn kết mạnh với digoxin tự do trong máu và đưa qua thận bài tiết.",
    reference: "Sách Dược lý 2 tr. 17"
  },
  {
    chapter: "Thuốc trợ tim",
    level: "Vận dụng",
    question: "Xử trí ngộ độc Digitalis có xuất hiện ngoại tâm thu thất và nhịp nhanh thất, thuốc chống loạn nhịp nào được ưu tiên lựa chọn?",
    options: [
      "Lidocain hoặc Phenytoin",
      "Quinidin hoặc Procainamid",
      "Verapamil hoặc Diltiazem",
      "Amiodaron phối hợp Isoprenalin"
    ],
    correct: 0,
    explanation: "Để điều trị loạn nhịp thất do ngộ độc digitalis, thuốc được lựa chọn hàng đầu là Lidocain hoặc Phenytoin, do hai thuốc này ức chế tính tự động của thất mà ít làm ức chế dẫn truyền nhĩ thất. Quinidin và Verapamil bị chống chỉ định vì làm tăng nồng độ digoxin trong máu.",
    reference: "Sách Dược lý 2 tr. 17"
  },
  {
    chapter: "Thuốc trợ tim",
    level: "Nhận biết",
    question: "Glycosid tim thuộc nhóm Strophantus (như Ouabain, Strophantin G) có đặc điểm dược động học nổi bật nào?",
    options: [
      "Tan nhiều trong nước, rất ít hấp thu qua đường tiêu hóa nên chỉ dùng đường tiêm",
      "Tan rất mạnh trong lipid, hấp thu 100% qua đường uống",
      "Thời gian bán thải rất dài trên 10 ngày và tích lũy cao trong mô mỡ",
      "Chuyển hóa hoàn toàn qua gan bởi hệ enzym cytochrom P450"
    ],
    correct: 0,
    explanation: "Strophantin (như Ouabain) là glycosid rất ưa nước, hầu như không hấp thu qua đường uống nên chỉ dùng đường tiêm tĩnh mạch, tác dụng rất nhanh (sau 5-10 phút) và thải trừ nhanh qua thận, ít tích lũy hơn digitalis.",
    reference: "Sách Dược lý 2 tr. 18"
  },
  {
    chapter: "Thuốc trợ tim",
    level: "Nhận biết",
    question: "Nhóm thuốc trợ tim làm tăng AMP vòng bao gồm những nhóm nào sau đây?",
    options: [
      "Thuốc kích thích thụ thể beta-1 adrenergic và thuốc ức chế enzym phosphodiesterase III",
      "Thuốc kích thích thụ thể alpha-2 trung ương và thuốc chẹn kênh calci",
      "Thuốc ức chế men chuyển và thuốc đối kháng thụ thể angiotensin II",
      "Thuốc chẹn beta giao cảm không chọn lọc và glycosid chiết xuất từ lá cây"
    ],
    correct: 0,
    explanation: "Thuốc làm tăng AMP vòng nội bào gồm 2 nhóm: Nhóm kích thích thụ thể beta-1 adrenergic (như Dopamin, Dobutamin) làm tăng tổng hợp AMP vòng qua adenylcyclase; Nhóm ức chế enzym phosphodiesterase III (như Amrinon, Milrinon) làm giảm thoái giáng AMP vòng.",
    reference: "Sách Dược lý 2 tr. 18-20"
  },
  {
    chapter: "Thuốc trợ tim",
    level: "Vận dụng",
    question: "Dobutamin là thuốc trợ tim cấp cứu có cơ chế tác dụng dược lý chủ yếu nào?",
    options: [
      "Chủ vận chọn lọc trên thụ thể beta-1 adrenergic làm tăng mạnh sức co bóp cơ tim",
      "Chủ vận thụ thể dopamine D1 gây giãn mạch thận ở liều rất thấp",
      "Ức chế thụ thể alpha-1 adrenergic gây tụt huyết áp nghiêm trọng",
      "Ức chế trực tiếp kênh Na+ ở màng tế bào cơ tim pha 0"
    ],
    correct: 0,
    explanation: "Dobutamin là chất đồng vận chọn lọc trên thụ thể beta-1 adrenergic tại tim, làm tăng mạnh sức co bóp cơ tim (tác dụng inotropic dương tính) trong khi ít làm tăng tần số tim hơn so với Isoprenalin hay Dopamin.",
    reference: "Sách Dược lý 2 tr. 19"
  },
  {
    chapter: "Thuốc trợ tim",
    level: "Vận dụng",
    question: "Milrinon và Inamrinon (Amrinon) có cơ chế tác dụng làm tăng co bóp cơ tim kèm giãn mạch là nhờ ức chế enzym nào?",
    options: [
      "Phosphodiesterase typ III (PDE-3)",
      "Phosphodiesterase typ V (PDE-5)",
      "Monoamin oxidase (MAO)",
      "Acetylcholinesterase (AChE)"
    ],
    correct: 0,
    explanation: "Milrinon và Inamrinon ức chế chọn lọc enzym phosphodiesterase typ III (PDE-3), ngăn cản sự phân hủy AMP vòng, làm tăng nồng độ AMP vòng trong tế bào cơ tim (tăng co bóp) và trong cơ trơn thành mạch (gây giãn mạch, giảm tiền gánh và hậu gánh).",
    reference: "Sách Dược lý 2 tr. 20-21"
  },
  {
    chapter: "Thuốc trợ tim",
    level: "Vận dụng cao",
    question: "Tương tác thuốc nào sau đây làm tăng nồng độ Digoxin trong huyết tương lên từ 1,5 đến 2 lần và dễ gây ngộ độc?",
    options: [
      "Phối hợp Digoxin với Quinidin, Amiodaron hoặc Verapamil",
      "Phối hợp Digoxin với Rifampicin hoặc Phenobarbital",
      "Phối hợp Digoxin với Than hoạt hoặc Cholestyramin",
      "Phối hợp Digoxin với Thuốc kháng acid chứa nhôm hydroxyd"
    ],
    correct: 0,
    explanation: "Quinidin, Amiodaron và Verapamil ức chế bơm P-glycoprotein tại ống thận và đẩy digoxin ra khỏi vị trí gắn ở mô, làm giảm thải trừ digoxin qua thận, dẫn đến tăng nồng độ digoxin tự do trong máu lên 1,5 - 2 lần, dễ gây nhiễm độc.",
    reference: "Sách Dược lý 2 tr. 17"
  },

  // =========================================================================
  // BÀI 2: THUỐC ĐIỀU TRỊ TĂNG HUYẾT ÁP (trang 54 - 79)
  // =========================================================================
  {
    chapter: "Thuốc điều trị THA",
    level: "Nhận biết",
    question: "Theo cơ chế tác dụng, các nhóm thuốc chính được khuyến cáo hàng đầu trong điều trị tăng huyết áp bao gồm:",
    options: [
      "Thuốc lợi tiểu, chẹn kênh calci, ức chế men chuyển, chẹn thụ thể ARB và chẹn beta",
      "Thuốc trợ tim digitalis, thuốc chống đông máu và thuốc tiêu sợi huyết",
      "Thuốc kích thích thụ thể beta-2, thuốc ức chế phosphodiesterase và kháng sinh",
      "Thuốc an thần gây ngủ, thuốc giảm đau chống viêm không steroid và vitamin"
    ],
    correct: 0,
    explanation: "5 nhóm thuốc điều trị tăng huyết áp cơ bản gồm: Lợi tiểu (Thiazid), Chẹn kênh calci (CCB), Ức chế men chuyển (ACEI), Chẹn thụ thể Angiotensin II (ARB) và Chẹn thụ thể beta adrenergic.",
    reference: "Sách Dược lý 2 tr. 54-55"
  },
  {
    chapter: "Thuốc điều trị THA",
    level: "Nhận biết",
    question: "Cơ chế hạ huyết áp của nhóm thuốc ức chế men chuyển (ACEI) là gì?",
    options: [
      "Ức chế enzym chuyển angiotensin I thành angiotensin II và ngăn thoái giáng bradykinin",
      "Phong bế trực tiếp thụ thể AT1 của angiotensin II tại cơ trơn mạch máu",
      "Chẹn dòng Ca2+ đi vào tế bào cơ tim và cơ trơn thành động mạch",
      "Kích thích thụ thể alpha-2 adrenergic ở trung tâm vận mạch hành não"
    ],
    correct: 0,
    explanation: "Thuốc ức chế men chuyển (ACEI) ức chế enzym converting enzym (ACE), làm giảm tạo Angiotensin II (chất co mạch mạnh và kích thích tiết aldosteron), đồng thời ức chế enzym giáng hóa bradykinin (chất giãn mạch), dẫn đến giãn mạch và hạ huyết áp.",
    reference: "Sách Dược lý 2 tr. 66-67"
  },
  {
    chapter: "Thuốc điều trị THA",
    level: "Nhận biết",
    question: "Tác dụng không mong muốn đặc trưng và phổ biến nhất của nhóm ức chế men chuyển (như Captopril, Enalapril) khiến bệnh nhân phải đổi thuốc là gì?",
    options: [
      "Ho khan dai dẳng không kèm đờm",
      "Phù mắt cá chân vào buổi chiều",
      "Hạ kali huyết nghiêm trọng",
      "Rậm lông và phì đại nướu răng"
    ],
    correct: 0,
    explanation: "Ho khan dai dẳng (tỷ lệ 5-20%) là ADR điển hình của nhóm ACEI do ức chế thoái giáng bradykinin và chất P ở đường hô hấp trên. Khi gặp ho khan do ACEI, giải pháp là chuyển sang nhóm chẹn thụ thể ARB.",
    reference: "Sách Dược lý 2 tr. 68"
  },
  {
    chapter: "Thuốc điều trị THA",
    level: "Vận dụng",
    question: "Chống chỉ định tuyệt đối của nhóm thuốc ức chế men chuyển (ACEI) và nhóm chẹn thụ thể Angiotensin II (ARB) là gì?",
    options: [
      "Phụ nữ có thai, hẹp động mạch thận hai bên và tiền sử phù mạch do thuốc",
      "Bệnh nhân đái tháo đường có kèm protein niệu vi thể",
      "Bệnh nhân sau nhồi máu cơ tim có kèm suy tim sung huyết",
      "Bệnh nhân tăng huyết áp kèm phì đại lành tính tuyến tiền liệt"
    ],
    correct: 0,
    explanation: "ACEI và ARB chống chỉ định tuyệt đối cho: Phụ nữ mang thai (gây quái thai, suy thận thai nhi, vô niệu, sọ chậm phát triển), Hẹp động mạch thận hai bên (làm tụt áp lực lọc cầu thận gây suy thận cấp), Tiền sử phù mạch dị ứng, và Tăng kali máu nặng.",
    reference: "Sách Dược lý 2 tr. 68-70"
  },
  {
    chapter: "Thuốc điều trị THA",
    level: "Nhận biết",
    question: "Thuốc nào sau đây thuộc nhóm chẹn thụ thể Angiotensin II (ARB)?",
    options: [
      "Losartan, Valsartan, Telmisartan",
      "Captopril, Enalapril, Lisinopril",
      "Amlodipin, Nifedipin, Nicardipin",
      "Atenolol, Metoprolol, Bisoprolol"
    ],
    correct: 0,
    explanation: "Nhóm thuốc chẹn thụ thể AT1 của angiotensin II (ARB) có đuôi '-sartan' như Losartan, Valsartan, Irbesartan, Candesartan, Telmisartan.",
    reference: "Sách Dược lý 2 tr. 70"
  },
  {
    chapter: "Thuốc điều trị THA",
    level: "Vận dụng",
    question: "Ưu điểm vượt trội của nhóm ARB so với nhóm ACEI là gì?",
    options: [
      "Hầu như không làm tích lũy bradykinin nên không gây ho khan dai dẳng",
      "Có thể dùng an toàn cho phụ nữ có thai trong 3 tháng cuối",
      "Tác dụng hạ áp tức thì sau 30 giây dùng ngậm dưới lưỡi",
      "Gây thải trừ hoàn toàn kali qua nước tiểu tránh tăng kali máu"
    ],
    correct: 0,
    explanation: "Do ARB chỉ phong bế chọn lọc trên thụ thể AT1 mà không ức chế men chuyển ACE, nên không làm tích lũy bradykinin và chất P, nhờ đó khắc phục được tác dụng phụ ho khan và giảm tỷ lệ phù mạch so với ACEI.",
    reference: "Sách Dược lý 2 tr. 70"
  },
  {
    chapter: "Thuốc điều trị THA",
    level: "Nhận biết",
    question: "Thuốc chẹn kênh calci phân nhóm Dihydropyridin (DHP) tác dụng ưu tiên trên thành mạch gồm các thuốc nào?",
    options: [
      "Amlodipin, Nifedipin, Felodipin, Nicardipin",
      "Verapamil và Diltiazem",
      "Captopril và Enalapril",
      "Propranolol và Atenolol"
    ],
    correct: 0,
    explanation: "Dẫn xuất Dihydropyridin (DHP) có tận cùng '-dipin' (Amlodipin, Nifedipin, Felodipin...) có ái lực mạnh trên kênh L-type ở cơ trơn mạch máu hơn cơ tim, gây giãn mạnh tiểu động mạch và hạ huyết áp.",
    reference: "Sách Dược lý 2 tr. 62"
  },
  {
    chapter: "Thuốc điều trị THA",
    level: "Vận dụng",
    question: "Tác dụng không mong muốn thường gặp nhất của Amlodipin và các thuốc chẹn kênh calci nhóm DHP là gì?",
    options: [
      "Phù mắt cá chân hai bên và nóng bừng mặt do giãn tiểu động mạch",
      "Khô miệng dai dẳng và bí tiểu cấp tính",
      "Ho khan về đêm kèm co thắt phế quản",
      "Hạ đường huyết nghiêm trọng khi đói"
    ],
    correct: 0,
    explanation: "Nhóm DHP (như Amlodipin) gây giãn tiểu động mạch mạnh nhưng ít giãn tĩnh mạch, làm tăng áp lực thủy tĩnh mao mạch đẩy dịch ra khoang kẽ, gây phù mắt cá chân (phù ngoại vi) và bốc hỏa, nhức đầu.",
    reference: "Sách Dược lý 2 tr. 64"
  },
  {
    chapter: "Thuốc điều trị THA",
    level: "Nhận biết",
    question: "Verapamil và Diltiazem thuộc nhóm chẹn kênh calci Non-DHP có đặc điểm tác dụng nổi bật nào?",
    options: [
      "Tác dụng ưu tiên trên cơ tim, làm giảm nhịp tim và giảm dẫn truyền nhĩ thất",
      "Chỉ tác dụng trên cơ trơn phế quản làm giãn cơ trơn đường thở",
      "Chỉ làm giãn tĩnh mạch lớn mà không tác dụng trên tiểu động mạch",
      "Làm tăng nhịp tim phản xạ mạnh mẽ hơn nhiều so với Nifedipin"
    ],
    correct: 0,
    explanation: "Verapamil (nhóm phenylalkylamin) và Diltiazem (nhóm benzothiazepin) tác dụng ức chế trực tiếp trên kênh calci ở nút xoang và nút nhĩ thất, làm giảm co bóp cơ tim, giảm nhịp tim và làm chậm dẫn truyền nhĩ thất.",
    reference: "Sách Dược lý 2 tr. 62-63"
  },
  {
    chapter: "Thuốc điều trị THA",
    level: "Vận dụng cao",
    question: "Phối hợp thuốc hạ huyết áp nào sau đây bị CHỐNG CHỈ ĐỊNH do nguy cơ gây ngừng tim hoặc blốc nhĩ thất độ nặng?",
    options: [
      "Thuốc chẹn beta giao cảm phối hợp với Verapamil đường tĩnh mạch",
      "Thuốc ức chế men chuyển phối hợp với thuốc lợi tiểu Thiazid",
      "Thuốc chẹn kênh calci nhóm DHP phối hợp với thuốc chẹn beta",
      "Thuốc chẹn thụ thể ARB phối hợp với thuốc chẹn kênh calci DHP"
    ],
    correct: 0,
    explanation: "Cả thuốc chẹn beta và Verapamil đều có tác dụng ức chế mạnh cơ tim, làm chậm nhịp xoang và ức chế dẫn truyền qua nút nhĩ thất. Khi phối hợp cùng nhau (đặc biệt đường tiêm tĩnh mạch) có nguy cơ cao gây blốc nhĩ thất hoàn toàn, suy tim cấp hoặc ngừng tim.",
    reference: "Sách Dược lý 2 tr. 64-66"
  },
  {
    chapter: "Thuốc điều trị THA",
    level: "Nhận biết",
    question: "Methyldopa hạ huyết áp theo cơ chế nào sau đây?",
    options: [
      "Chuyển thành alpha-methylnoradrenalin kích thích thụ thể alpha-2 ở trung ương vận mạch",
      "Ức chế cạnh tranh thụ thể angiotensin II typ AT1 tại ngoại vi",
      "Phong bế thụ thể beta-1 adrenergic chọn lọc trên cơ tim",
      "Mở trực tiếp kênh kali trên cơ trơn tiểu động mạch"
    ],
    correct: 0,
    explanation: "Methyldopa vào thần kinh trung ương được chuyển hóa thành alpha-methylnoradrenalin, chất này kích thích thụ thể alpha-2 adrenergic ở hành não, làm giảm phát xung giao cảm từ trung ương ra ngoại biên, gây hạ huyết áp.",
    reference: "Sách Dược lý 2 tr. 71-72"
  },
  {
    chapter: "Thuốc điều trị THA",
    level: "Vận dụng",
    question: "Thuốc hạ huyết áp nào được coi là lựa chọn an toàn hàng đầu cho phụ nữ mang thai bị tăng huyết áp mạn tính hoặc tiền sản giật?",
    options: [
      "Methyldopa",
      "Captopril",
      "Losartan",
      "Aliskiren"
    ],
    correct: 0,
    explanation: "Methyldopa là thuốc điều trị tăng huyết áp được lựa chọn an toàn hàng đầu cho phụ nữ có thai vì có dữ liệu an toàn lâu năm nhất, không làm giảm lưu lượng máu tử cung - rau thai và không gây quái thai. Các lựa chọn khác gồm Labetalol, Hydralazin.",
    reference: "Sách Dược lý 2 tr. 72, 76"
  },
  {
    chapter: "Thuốc điều trị THA",
    level: "Nhận biết",
    question: "Cơn tăng huyết áp kịch phát (cấp cứu tăng huyết áp) thường ưu tiên sử dụng thuốc nào đường truyền tĩnh mạch có thời gian khởi phát cực nhanh và thời gian bán thải ngắn?",
    options: [
      "Natri nitroprusiat hoặc Nicardipin truyền tĩnh mạch",
      "Hydrochlorothiazid dạng viên nén uống buổi sáng",
      "Spironolacton dạng viên uống giải phóng kéo dài",
      "Bisoprolol dạng viên uống liều duy nhất mỗi ngày"
    ],
    correct: 0,
    explanation: "Trong cấp cứu cơn tăng huyết áp kịch phát đe dọa tổn thương cơ quan đích, Natri nitroprusiat hoặc Nicardipin truyền tĩnh mạch liên tục được ưu tiên vì có tác dụng hạ áp tức thì, kiểm soát được tốc độ hạ huyết áp.",
    reference: "Sách Dược lý 2 tr. 73-74"
  },
  {
    chapter: "Thuốc điều trị THA",
    level: "Vận dụng",
    question: "Tác dụng không mong muốn nghiêm trọng khi dùng Natri nitroprusiat truyền tĩnh mạch kéo dài hoặc liều cao là tích tụ chất độc nào?",
    options: [
      "Cyanid và Thiocyanat",
      "Axit lactic và Pyruvat",
      "Amoniac và Ure",
      "Methemoglobin và Bilirubin tự do"
    ],
    correct: 0,
    explanation: "Phân tử natri nitroprusiat chứa 5 nhóm cyanid. Khi chuyển hóa trong cơ thể giải phóng cyanid, gan chuyển cyanid thành thiocyanat để bài xuất qua thận. Truyền liều cao hoặc dùng cho người suy gan suy thận dễ gây ngộ độc cyanid và thiocyanat nguy hiểm.",
    reference: "Sách Dược lý 2 tr. 74"
  },
  {
    chapter: "Thuốc điều trị THA",
    level: "Nhận biết",
    question: "Thuốc lợi tiểu nào được khuyến cáo dùng phổ biến nhất trong điều trị tăng huyết áp vô căn đơn trị liệu hoặc phối hợp?",
    options: [
      "Hydrochlorothiazid và Indapamid",
      "Furosemid liều cao tiêm tĩnh mạch",
      "Acetazolamid viên uống",
      "Mannitol dung dịch truyền ưu trương"
    ],
    correct: 0,
    explanation: "Lợi tiểu nhóm Thiazid (Hydrochlorothiazid) và Thiazid-like (Indapamid, Chlorthalidon) là thuốc nền tảng trong điều trị tăng huyết áp lâu dài do thải trừ natri ban đầu và giãn mạch ngoại vi khi dùng kéo dài.",
    reference: "Sách Dược lý 2 tr. 56-57"
  },
  {
    chapter: "Thuốc điều trị THA",
    level: "Vận dụng",
    question: "Hiện tượng tụt huyết áp liều đầu tiên (hiệu ứng liều đầu - first dose phenomenon) kèm ngất xỉu thường hay gặp nhất ở nhóm thuốc hạ áp nào?",
    options: [
      "Thuốc chẹn thụ thể alpha-1 giao cảm (Prazosin, Doxazosin)",
      "Thuốc chẹn kênh calci nhóm dihydropyridin",
      "Thuốc đối kháng thụ thể aldosterone",
      "Thuốc lợi tiểu giữ kali triamteren"
    ],
    correct: 0,
    explanation: "Thuốc chẹn chọn lọc thụ thể alpha-1 adrenergic ngoại vi (Prazosin, Terazosin, Doxazosin) gây giãn cả tiểu động mạch và tiểu tĩnh mạch nhanh, dễ gây tụt huyết áp tư thế đứng nghiêm trọng ngay liều đầu tiên, nên phải uống liều đầu trước khi đi ngủ.",
    reference: "Sách Dược lý 2 tr. 61-62"
  },
  {
    chapter: "Thuốc điều trị THA",
    level: "Vận dụng cao",
    question: "Bệnh nhân tăng huyết áp kèm đái tháo đường typ 2 và có microalbumin niệu. Nhóm thuốc hạ áp nào được khuyến cáo ưu tiên lựa chọn hàng đầu để bảo vệ thận?",
    options: [
      "Thuốc ức chế men chuyển (ACEI) hoặc thuốc chẹn thụ thể (ARB)",
      "Thuốc chẹn beta giao cảm không chọn lọc",
      "Thuốc lợi tiểu quai furosemid liều cao",
      "Thuốc giãn mạch trực tiếp hydralazin"
    ],
    correct: 0,
    explanation: "ACEI và ARB làm giãn ưu thế tiểu động mạch đi ở cầu thận, làm giảm áp lực nội cầu thận, do đó làm giảm tiết protein qua nước tiểu và làm chậm tiến triển của bệnh thận đái tháo đường, là lựa chọn hàng đầu cho bệnh nhân THA kèm đái tháo đường.",
    reference: "Sách Dược lý 2 tr. 69, 76"
  },

  // =========================================================================
  // BÀI 3: THUỐC CHỮA CƠN ĐAU THẮT NGỰC (trang 41 - 54)
  // =========================================================================
  {
    chapter: "Thuốc chữa CĐTN",
    level: "Nhận biết",
    question: "Thuốc cắt cơn đau thắt ngực tác dụng nhanh và phổ biến nhất được sử dụng ngậm dưới lưỡi là thuốc nào?",
    options: [
      "Nitroglycerin",
      "Isosorbid-5-mononitrat uống phóng thích kéo dài",
      "Amlodipin viên nén",
      "Aspirin viên bao tan trong ruột"
    ],
    correct: 0,
    explanation: "Nitroglycerin ngậm dưới lưỡi hấp thu cực nhanh qua niêm mạc lưỡi trực tiếp vào tuần hoàn chung, tránh được chuyển hóa bước đầu qua gan 100%, xuất hiện tác dụng chỉ sau 1-3 phút, dùng để cắt nhanh cơn đau thắt ngực cấp.",
    reference: "Sách Dược lý 2 tr. 41-43"
  },
  {
    chapter: "Thuốc chữa CĐTN",
    level: "Nhận biết",
    question: "Cơ chế phân tử gây giãn mạch của nhóm nitrat hữu cơ (Nitroglycerin, Isosorbid dinitrat) là giải phóng chất nào?",
    options: [
      "Nitric oxid (NO) kích hoạt guanylyl cyclase làm tăng GMP vòng (cGMP)",
      "Prostacyclin (PGI2) kích hoạt adenylcyclase làm tăng AMP vòng",
      "Endothelin-1 ức chế enzym phosphodiesterase typ 3",
      "Histamin gắn vào thụ thể H1 trên tế bào nội mô mạch vành"
    ],
    correct: 0,
    explanation: "Các nitrat hữu cơ vào tế bào cơ trơn mạch máu kết hợp với nhóm sulfhydryl (-SH) để giải phóng oxyt nitric (NO). NO kích thích enzym guanylyl cyclase tổng hợp cGMP, làm khử phosphoryl chuỗi nhẹ myosin, gây giãn cơ trơn mạch máu.",
    reference: "Sách Dược lý 2 tr. 42"
  },
  {
    chapter: "Thuốc chữa CĐTN",
    level: "Vận dụng",
    question: "Cơ chế chính giúp Nitroglycerin làm giảm cơn đau thắt ngực ổn định là gì?",
    options: [
      "Giãn hệ tĩnh mạch làm giảm tiền gánh, từ đó giảm thể tích thất trái và giảm công cơ tim",
      "Làm tăng nhịp tim và tăng dẫn truyền để cung cấp nhiều máu hơn cho mô",
      "Co mạch ngoại biên để dồn máu tối đa về tuần hoàn mạch vành",
      "Ức chế trực tiếp trung tâm cảm giác đau ở vỏ não"
    ],
    correct: 0,
    explanation: "Ở liều điều trị, nitrat hữu cơ tác dụng nổi bật là làm giãn hệ tĩnh mạch lớn, làm ứ máu ở ngoại vi, làm giảm lượng máu dồn về tim (giảm tiền gánh), làm giảm thể tích tâm thất và giảm áp lực trong buồng tim, từ đó làm giảm tiêu thụ oxy cơ tim.",
    reference: "Sách Dược lý 2 tr. 42-43"
  },
  {
    chapter: "Thuốc chữa CĐTN",
    level: "Vận dụng",
    question: "Hiện tượng quen thuốc nhanh (tolerance) khi dùng nitrat hữu cơ liên tục trong ngày có nguyên nhân chủ yếu do đâu?",
    options: [
      "Cạn kiệt các nhóm sulfhydryl (-SH) cần thiết để chuyển hóa nitrat thành NO",
      "Tăng sinh quá mức thụ thể beta-1 adrenergic trên màng cơ tim",
      "Tăng đào thải thuốc đột ngột qua thận do kích thích enzym lọc cầu thận",
      "Hình thành kháng thể trung hòa chống lại phân tử nitroglycerin"
    ],
    correct: 0,
    explanation: "Dùng nitrat hữu cơ liên tục suốt ngày đêm sẽ làm cạn kiệt các nhóm sulfhydryl (-SH) trong tế bào nội mô cần cho việc sinh NO, gây giảm hoặc mất tác dụng giãn mạch. Để khắc phục, cần tạo một khoảng trống không dùng thuốc từ 8-12 giờ mỗi ngày.",
    reference: "Sách Dược lý 2 tr. 44"
  },
  {
    chapter: "Thuốc chữa CĐTN",
    level: "Nhận biết",
    question: "Tác dụng không mong muốn thường gặp khi bắt đầu dùng Nitroglycerin là gì?",
    options: [
      "Đau đầu dữ dội, bốc hỏa đỏ bừng mặt và tụt huyết áp tư thế",
      "Táo bón nặng kèm trướng bụng kéo dài",
      "Ho khan liên tục không dứt về đêm",
      "Tê bì đầu ngón tay do co thắt mạch ngoại vi"
    ],
    correct: 0,
    explanation: "Giãn các mạch máu vùng đầu gây đau đầu theo nhịp đập, giãn mạch da vùng mặt gây bốc hỏa đỏ bừng, và giãn tĩnh mạch toàn thân gây tụt huyết áp tư thế đứng kèm nhịp nhanh phản xạ.",
    reference: "Sách Dược lý 2 tr. 43"
  },
  {
    chapter: "Thuốc chữa CĐTN",
    level: "Vận dụng cao",
    question: "Phối hợp thuốc nào sau đây bị CHỐNG CHỈ ĐỊNH TUYỆT ĐỐI do nguy cơ tụt huyết áp hiểm nghèo đe dọa tính mạng?",
    options: [
      "Nitroglycerin phối hợp với Sildenafil hoặc Tadalafil",
      "Nitroglycerin phối hợp với thuốc chẹn beta giao cảm Metoprolol",
      "Nitroglycerin phối hợp với thuốc chống kết tập tiểu cầu Aspirin",
      "Nitroglycerin phối hợp với Statin hạ mỡ máu Atorvastatin"
    ],
    correct: 0,
    explanation: "Sildenafil/Tadalafil là thuốc ức chế phosphodiesterase typ 5 (PDE-5), ngăn giáng hóa cGMP. Nitrat hữu cơ làm tăng tổng hợp cGMP. Phối hợp hai thuốc dẫn tới cGMP tích lũy ồ ạt, gây giãn mạch hệ thống cực độ, tụt huyết áp sâu không hồi phục và tử vong.",
    reference: "Sách Dược lý 2 tr. 44"
  },
  {
    chapter: "Thuốc chữa CĐTN",
    level: "Nhận biết",
    question: "Trong điều trị dự phòng cơn đau thắt ngực mạn tính, nhóm thuốc chẹn beta giao cảm có tác dụng bảo vệ cơ tim nhờ cơ chế nào?",
    options: [
      "Làm giảm tần số tim, giảm sức co bóp cơ tim dẫn đến giảm nhu cầu tiêu thụ oxy của tim",
      "Giãn trực tiếp động mạch vành bị xơ vữa đang co thắt mạnh",
      "Làm tan các cục huyết khối bám trên mảng vữa xơ động mạch vành",
      "Kích thích tăng sinh các mạch máu bàng hệ nuôi dưỡng vùng cơ tim thiếu máu"
    ],
    correct: 0,
    explanation: "Thuốc chẹn beta ức chế thụ thể beta-1 adrenergic ở tim, làm giảm nhịp tim, giảm sức co bóp cơ tim và giảm huyết áp, từ đó làm giảm rõ rệt công của tim và nhu cầu oxy cơ tim cả khi nghỉ ngơi và khi gắng sức.",
    reference: "Sách Dược lý 2 tr. 46-47"
  },
  {
    chapter: "Thuốc chữa CĐTN",
    level: "Vận dụng",
    question: "Đau thắt ngực do co thắt mạch vành (Đau thắt ngực Prinzmetal hay thể biến thái) CHỐNG CHỈ ĐỊNH sử dụng nhóm thuốc nào sau đây đơn độc?",
    options: [
      "Thuốc chẹn beta giao cảm không chọn lọc (Propranolol)",
      "Thuốc chẹn kênh calci (Diltiazem, Amlodipin)",
      "Thuốc nitrat hữu cơ tác dụng kéo dài",
      "Thuốc giãn mạch trực tiếp"
    ],
    correct: 0,
    explanation: "Trong đau thắt ngực Prinzmetal do co thắt mạch vành, thuốc chẹn beta không chọn lọc phong bế thụ thể beta-2 (gây giãn mạch) để lại thụ thể alpha-1 (gây co mạch) không bị đối kháng, làm co thắt mạch vành nặng nề hơn. Thuốc lựa chọn hàng đầu là Chẹn calci và Nitrat.",
    reference: "Sách Dược lý 2 tr. 47, 51"
  },
  {
    chapter: "Thuốc chữa CĐTN",
    level: "Nhận biết",
    question: "Trimetazidin là thuốc điều trị bổ sung trong đau thắt ngực ổn định tác động theo cơ chế nào?",
    options: [
      "Tối ưu hóa chuyển hóa năng lượng tế bào cơ tim bằng cách ức chế quá trình beta-oxy hóa acid béo",
      "Giãn mạnh toàn bộ hệ thống động mạch vành và tĩnh mạch chủ",
      "Chẹn thụ thể AT1 của angiotensin II tại cơ trơn thành mạch",
      "Ức chế không hồi phục enzym cyclooxygenase-1 của tiểu cầu"
    ],
    correct: 0,
    explanation: "Trimetazidin bảo vệ tế bào cơ tim khỏi thiếu máu cục bộ bằng cách ức chế enzym 3-ketoacyl-CoA thiolase (3-KAT), làm chuyển dịch chuyển hóa năng lượng từ oxy hóa acid béo sang oxy hóa glucose (quá trình tiêu thụ ít oxy hơn trên mỗi phân tử ATP sinh ra).",
    reference: "Sách Dược lý 2 tr. 52"
  },

  // =========================================================================
  // BÀI 4: THUỐC CHỐNG LOẠN NHỊP TIM (trang 23 - 41)
  // =========================================================================
  {
    chapter: "Thuốc chống loạn nhịp",
    level: "Nhận biết",
    question: "Theo bảng phân loại thuốc chống loạn nhịp tim kinh điển của Vaughan Williams, Nhóm I gồm các thuốc có cơ chế tác dụng chính là gì?",
    options: [
      "Chẹn kênh natri (Na+) phụ thuộc điện thế ở màng tế bào cơ tim",
      "Chẹn thụ thể beta-adrenergic giao cảm",
      "Chẹn kênh kali (K+) kéo dài thời gian điện thế hoạt động",
      "Chẹn kênh calci (Ca2+) typ L"
    ],
    correct: 0,
    explanation: "Phân loại Vaughan Williams: Nhóm I: Chẹn kênh Na+; Nhóm II: Chẹn thụ thể beta adrenergic; Nhóm III: Chẹn kênh K+; Nhóm IV: Chẹn kênh Ca2+.",
    reference: "Sách Dược lý 2 tr. 28"
  },
  {
    chapter: "Thuốc chống loạn nhịp",
    level: "Nhận biết",
    question: "Các thuốc chống loạn nhịp nhóm IA (Quinidin, Procainamid, Disopyramid) có đặc điểm tác động điện sinh lý nào?",
    options: [
      "Làm chậm tốc độ khử cực pha 0 và kéo dài thời gian điện thế hoạt động (APD)",
      "Rút ngắn thời gian điện thế hoạt động và chỉ tác dụng chọn lọc trên mô thất",
      "Làm chậm rất mạnh pha 0 nhưng không ảnh hưởng đến thời gian điện thế hoạt động",
      "Chỉ làm tăng dẫn truyền nhĩ thất mà không ảnh hưởng nút xoang"
    ],
    correct: 0,
    explanation: "Nhóm IA (Quinidin, Procainamid): ức chế dòng Na+ ở pha 0 ở mức độ trung bình, đồng thời ức chế dòng K+ đi ra nên kéo dài thời gian điện thế hoạt động (APD) và thời kỳ trơ hiệu quả (ERP).",
    reference: "Sách Dược lý 2 tr. 29"
  },
  {
    chapter: "Thuốc chống loạn nhịp",
    level: "Nhận biết",
    question: "Thuốc chống loạn nhịp nào sau đây thuộc Nhóm IB chỉ có tác dụng trên tâm thất và được lựa chọn trong cấp cứu loạn nhịp thất sau nhồi máu cơ tim?",
    options: [
      "Lidocain",
      "Quinidin",
      "Flecainid",
      "Amiodaron"
    ],
    correct: 0,
    explanation: "Lidocain thuộc nhóm IB, có ái lực cao với kênh Na+ ở trạng thái bất hoạt, đặc biệt chọn lọc trên mô thiếu máu cục bộ tâm thất, dùng tiêm tĩnh mạch điều trị loạn nhịp thất trong nhồi máu cơ tim hoặc sau phẫu thuật tim.",
    reference: "Sách Dược lý 2 tr. 31-32"
  },
  {
    chapter: "Thuốc chống loạn nhịp",
    level: "Vận dụng",
    question: "Hội chứng 'Cinchonism' (ù tai, giảm thính lực, đau đầu, chóng mặt, rối loạn thị giác) là tác dụng phụ kinh điển của thuốc nào?",
    options: [
      "Quinidin",
      "Lidocain",
      "Metoprolol",
      "Adenosin"
    ],
    correct: 0,
    explanation: "Quinidin là dẫn chất alkaloid chiết xuất từ vỏ cây Cinchona. Khi dùng liều cao hoặc ngộ độc sẽ gây hội chứng ngộ độc vỏ cây Cinchona (Cinchonism) với triệu chứng: ù tai, hoa mắt, nhức đầu, điếc tạm thời, rối loạn thị giác.",
    reference: "Sách Dược lý 2 tr. 30"
  },
  {
    chapter: "Thuốc chống loạn nhịp",
    level: "Nhận biết",
    question: "Amiodaron thuộc nhóm III trong phân loại Vaughan Williams có cơ chế và đặc điểm điện sinh lý chính là gì?",
    options: [
      "Chẹn kênh K+, kéo dài pha tái cực và kéo dài thời gian điện thế hoạt động (APD)",
      "Chẹn kênh Ca2+ chọn lọc không làm thay đổi thời gian điện thế hoạt động",
      "Kích thích kênh Na+ mở sớm làm tăng tính tự động của cơ tim",
      "Chỉ phong bế chọn lọc thụ thể muscarinic M2 tại tim"
    ],
    correct: 0,
    explanation: "Amiodaron là thuốc nhóm III điển hình, ức chế kênh K+ đưa K+ ra ngoài tế bào trong pha 3 tái cực, kéo dài thời gian điện thế hoạt động (APD) và kéo dài thời kỳ trơ của tất cả các mô tim.",
    reference: "Sách Dược lý 2 tr. 35"
  },
  {
    chapter: "Thuốc chống loạn nhịp",
    level: "Vận dụng",
    question: "Phân tử Amiodaron chứa hàm lượng iod cao (khoảng 37% trọng lượng), do đó thuốc thường gây tác dụng phụ đặc trưng trên cơ quan nào?",
    options: [
      "Tuyến giáp (gây cả cường giáp hoặc suy giáp)",
      "Tuyến tụy nội tiết gây đái tháo tháo đường",
      "Tuyến thượng thận gây suy vỏ thượng thận",
      "Tuyến yên gây tiết sữa nhiều bất thường"
    ],
    correct: 0,
    explanation: "Phân tử amiodaron chứa lượng iod lớn, tích lũy lâu trong cơ thể (t1/2 lên tới 1-2 tháng), gây độc trên tuyến giáp: gây suy giáp (do ức chế chuyển T4 thành T3 ngoại vi) hoặc gây cường giáp (do thừa iod - hiệu ứng Jod-Basedow).",
    reference: "Sách Dược lý 2 tr. 36"
  },
  {
    chapter: "Thuốc chống loạn nhịp",
    level: "Vận dụng",
    question: "Tác dụng không mong muốn mạn tính nguy hiểm nhất ở phổi của Amiodaron có thể đe dọa tính mạng là gì?",
    options: [
      "Xơ hóa phổi kẽ và viêm phổi thâm nhiễm",
      "Tràn dịch màng phổi mủ cấp tính",
      "Cơn hen phế quản ác tính bộc phát",
      "Tăng tiết dịch phế quản gây ngập phế nang"
    ],
    correct: 0,
    explanation: "Độc tính mạn tính nguy hiểm nhất của amiodaron là gây viêm phổi kẽ dẫn tới xơ phổi (tỷ lệ 1-10%), có thể dẫn tới suy hô hấp không hồi phục và tử vong nếu không phát hiện dừng thuốc kịp thời.",
    reference: "Sách Dược lý 2 tr. 36"
  },
  {
    chapter: "Thuốc chống loạn nhịp",
    level: "Nhận biết",
    question: "Adenosin được lựa chọn hàng đầu trong cấp cứu cắt cơn nhịp nhanh kịch phát trên thất (SVT) theo đường nào sau đây?",
    options: [
      "Tiêm tĩnh mạch bolus thật nhanh trong vòng 1-2 giây rồi bơm đuổi muối sinh lý",
      "Tiêm bắp sâu ở vùng đùi hoặc vùng mông",
      "Uống cả viên trước bữa ăn 30 phút",
      "Truyền tĩnh mạch nhỏ giọt chậm trong 8 giờ"
    ],
    correct: 0,
    explanation: "Adenosin có thời gian bán hủy cực ngắn trong máu (chỉ dưới 10 giây do hồng cầu và tế bào nội mô bắt giữ và thoái hóa nhanh), do đó bắt buộc phải tiêm tĩnh mạch bolus cực nhanh trong 1-2 giây và bơm đẩy ngay 20ml nước muối sinh lý.",
    reference: "Sách Dược lý 2 tr. 38"
  },
  {
    chapter: "Thuốc chống loạn nhịp",
    level: "Vận dụng cao",
    question: "Các thuốc làm kéo dài khoảng QT trên điện tâm đồ (như Quinidin, Amiodaron, Sotalol) có nguy cơ gây ra biến chứng loạn nhịp thất chết người nào?",
    options: [
      "Xoắn đỉnh (Torsades de pointes)",
      "Cơn nhịp nhanh xoang kịch phát",
      "Nhịp thoát bộ nối nhĩ thất chậm",
      "Blốc nhánh trái hoàn toàn thoáng qua"
    ],
    correct: 0,
    explanation: "Các thuốc nhóm IA và nhóm III làm kéo dài khoảng QT (kéo dài pha tái cực), tạo điều kiện cho các hậu khử cực sớm (EAD) kích hoạt cơn nhịp nhanh thất đa hình thái nguy hiểm gọi là hiện tượng xoắn đỉnh (Torsades de pointes).",
    reference: "Sách Dược lý 2 tr. 30, 37"
  }
];
