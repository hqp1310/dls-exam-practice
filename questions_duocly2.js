/**
 * NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM DƯỢC LÝ 2 (CHUẨN BỘ Y TẾ)
 * Khung 20 bài giảng chính khóa (32 tiết) - 507 câu hỏi chuẩn hóa
 */

const DUOCLY2_EXAM_BANK = [
  {
    "id": 1,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Glycosid tim (Digitalis) có nguồn gốc chiết xuất chủ yếu từ loài thực vật nào?",
    "options": [
      "Digitalis purpurea và Digitalis lanata",
      "Rauwolfia serpentina và Catharanthus roseus",
      "Strophanthus kombe và Strophanthus gratus",
      "Datura stramonium và Atropa belladonna"
    ],
    "correct": 0,
    "explanation": "Glycosid trợ tim nhóm Digitalis được chiết xuất chủ yếu từ cây Dương địa hoàng gồm Digitalis purpurea và Digitalis lanata.",
    "reference": "Sách Dược lý 2 tr. 9-10"
  },
  {
    "id": 2,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cấu trúc hóa học của glycosid tim gồm hai phần chính là phần đường (ose) và phần không đường (aglycon/genin). Phần nào quyết định tác dụng trợ tim của thuốc?",
    "options": [
      "Cả hai phần có vai trò ngang nhau",
      "Cầu nối glycosid giữa đường và aglycon",
      "Phần đường ose",
      "Phần không đường aglycon"
    ],
    "correct": 3,
    "explanation": "Phần không đường (aglycon hay genin) mang nhân steroid gắn vòng lacton không no quyết định tác dụng trợ tim và độc tính của glycosid tim. Phần đường ose chỉ ảnh hưởng đến dược động học (độ tan, hấp thu, liên kết protein).",
    "reference": "Sách Dược lý 2 tr. 10"
  },
  {
    "id": 3,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cơ chế tác dụng phân tử cơ bản của glycosid trợ tim (Digoxin) trên tế bào cơ tim là gì?",
    "options": [
      "Ức chế đặc hiệu enzym Na+-K+ ATPase ở màng tế bào cơ tim",
      "Ức chế enzym phosphodiesterase III trong bào tương cơ tim",
      "Kích thích enzym Adenylcyclase làm tăng tổng hợp AMP vòng",
      "Kích thích trực tiếp thụ thể beta-1 adrenergic tại màng tim"
    ],
    "correct": 0,
    "explanation": "Glycosid tim gắn đặc hiệu và ức chế bơm Na+-K+ ATPase ở màng tế bào cơ tim, làm tăng Na+ nội bào, từ đó giảm thải Ca2+ qua bơm trao đổi Na+/Ca2+, dẫn tới tích lũy Ca2+ tự do trong bào tương làm tăng lực co bóp cơ tim.",
    "reference": "Sách Dược lý 2 tr. 11-12"
  },
  {
    "id": 4,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng dược lý kinh điển của Digitalis trên hoạt động của tim được tóm tắt qua quy luật 4 chữ nào?",
    "options": [
      "Tâm thu yếu, chậm, tăng tính kích thích và rút ngắn tâm trương",
      "Tăng nhịp tim, tăng dẫn truyền nhĩ thất, tăng nhu cầu oxy",
      "Tâm thu nhanh, mạnh, giảm dẫn truyền và giảm tính trơ",
      "Tâm thu mạnh, chậm, đều và tâm trương dài ra"
    ],
    "correct": 3,
    "explanation": "Tác dụng của Digitalis trên tim tóm tắt là: làm tim đập mạnh, chậm và đều (tăng co bóp, giảm nhịp xoang, kéo dài thời gian tâm trương giúp tim được nghỉ ngơi nhiều hơn và hồi phục năng lượng).",
    "reference": "Sách Dược lý 2 tr. 13"
  },
  {
    "id": 5,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Vì sao glycosid tim làm giảm nhịp tim (tác dụng làm tim đập chậm)?",
    "options": [
      "Ức chế trực tiếp dòng Ca2+ đi vào qua kênh L-type ở pha 2",
      "Kích thích trực tiếp thụ thể giao cảm alpha-1 tại ngoại vi",
      "Kích thích dây thần kinh phế vị và giảm tính tự động của nút xoang",
      "Ức chế giải phóng acetylcholin tại tận cùng sợi đối giao cảm"
    ],
    "correct": 2,
    "explanation": "Glycosid tim làm tim đập chậm do kích thích trung tâm phế vị ở hành não và làm tăng tính nhạy cảm của thụ thể áp lực ở xoang cảnh với huyết áp, làm tăng trương lực phế vị đồng thời ức chế nút xoang.",
    "reference": "Sách Dược lý 2 tr. 13"
  },
  {
    "id": 6,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trên điện tâm đồ (ECG), dấu hiệu đặc trưng phản ánh tác dụng ngấm Digitalis điều trị (chưa phải ngộ độc) là gì?",
    "options": [
      "Sóng T cao nhọn đối xứng và khoảng QRS giãn rộng",
      "Đoạn ST chênh lên dạng vòm và xuất hiện sóng Q hoại tử",
      "Mất hoàn toàn sóng P và khoảng QT kéo dài",
      "Đoạn ST chênh xuống võng hình lòng máng và khoảng PR kéo dài"
    ],
    "correct": 3,
    "explanation": "Dấu hiệu ngấm digitalis trên điện tâm đồ là đoạn ST chênh xuống võng hình đáy chén/lòng máng, khoảng PR kéo dài (do làm chậm dẫn truyền qua nút nhĩ thất) và khoảng QT ngắn lại.",
    "reference": "Sách Dược lý 2 tr. 14"
  },
  {
    "id": 7,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "So sánh dược động học giữa Digoxin và Digitoxin, nhận định nào sau đây là đúng?",
    "options": [
      "Digitoxin tan nhiều trong nước, thải trừ chủ yếu qua nước tiểu dạng nguyên vẹn",
      "Digitoxin gắn vào protein huyết tương rất thấp",
      "Digoxin tan vừa trong mỡ, thải trừ chủ yếu qua thận dưới dạng còn hoạt tính",
      "Digoxin có thời gian bán thải dài hơn nhiều so với Digitoxin"
    ],
    "correct": 2,
    "explanation": "Digoxin có 3 nhóm -OH nên tan vừa trong lipid, hấp thu 60-80%, gắn protein huyết tương 25%, thải trừ chủ yếu qua thận dạng không đổi (t1/2 khoảng 36-40 giờ). Digitoxin rất tan trong lipid, chuyển hóa ở gan, gắn protein 97%, t1/2 khoảng 7 ngày.",
    "reference": "Sách Dược lý 2 tr. 14-15"
  },
  {
    "id": 8,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Chỉ định kinh điển và thích hợp nhất của Glycosid trợ tim (Digoxin) trong lâm sàng là gì?",
    "options": [
      "Suy tim cung lượng cao do thiếu máu mạn tính hoặc nhiễm độc giáp",
      "Suy tim do hẹp van động mạch chủ khít hoặc hẹp dưới van",
      "Viêm cơ tim cấp do bạch hầu hoặc nhiễm trùng cấp tính",
      "Suy tim cung lượng thấp có kèm rung nhĩ hoặc cuồng nhĩ nhanh"
    ],
    "correct": 3,
    "explanation": "Chỉ định tốt nhất của glycosid tim là suy tim cung lượng thấp kèm loạn nhịp nhanh trên thất (đặc biệt là rung nhĩ nhanh), do vừa làm tăng co bóp cơ tim vừa làm chậm dẫn truyền qua nút nhĩ thất.",
    "reference": "Sách Dược lý 2 tr. 15"
  },
  {
    "id": 9,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Yếu tố rối loạn điện giải nào sau đây làm tăng rõ rệt độc tính của Digitalis và dễ dẫn đến loạn nhịp tim nguy hiểm?",
    "options": [
      "Tăng kali máu, tăng magnesi máu và hạ calci máu",
      "Hạ natri máu, tăng kali máu và toan chuyển hóa",
      "Hạ kali máu, hạ magnesi máu và tăng calci máu",
      "Tăng natri máu, hạ calci máu và hạ clo máu"
    ],
    "correct": 2,
    "explanation": "Hạ K+ máu làm tăng gắn kết của digitalis vào enzym Na+-K+ ATPase nên làm tăng độc tính tim. Hạ Mg2+ máu và tăng Ca2+ máu cũng làm tăng độc tính nghiêm trọng của digitalis.",
    "reference": "Sách Dược lý 2 tr. 16"
  },
  {
    "id": 10,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Dấu hiệu nhiễm độc sớm nhất của Digitalis trên hệ tiêu hóa và giác quan là gì?",
    "options": [
      "Mất vị giác hoàn toàn và ù tai liên tục",
      "Tiêu chảy ồ ạt kèm xuất huyết tiêu hóa dưới",
      "Táo bón kéo dài kèm khô miệng dữ dội",
      "Chán ăn, buồn nôn, nôn và nhìn đồ vật thấy quầng sáng màu vàng hoặc xanh"
    ],
    "correct": 3,
    "explanation": "Dấu hiệu sớm ngộ độc digitalis: Tiêu hóa: chán ăn, buồn nôn, nôn, đau bụng; Giác quan/thần kinh: nhìn mờ, nhìn vật có quầng màu vàng hoặc màu xanh lá cây (xanthopsia), mệt mỏi, nhức đầu.",
    "reference": "Sách Dược lý 2 tr. 16"
  },
  {
    "id": 11,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Loại rối loạn nhịp tim đặc trưng và nguy hiểm nhất gặp trong ngộ độc Digitalis là gì?",
    "options": [
      "Blốc nhánh phải hoàn toàn kèm trục lệch trái",
      "Ngoại tâm thu thất nhịp đôi, nhịp ba và nhịp nhanh thất",
      "Cơn rung nhĩ kịch phát có dẫn truyền nhanh",
      "Nhịp xoang nhanh trên 150 chu kỳ/phút"
    ],
    "correct": 1,
    "explanation": "Độc tính tim nguy hiểm nhất của digitalis là các rối loạn nhịp thất: ngoại tâm thu thất xuất hiện dày đặc, thường có dạng nhịp đôi (bigeminy), nhịp ba hoặc nhịp nhanh thất, có thể tiến triển thành rung thất tử vong.",
    "reference": "Sách Dược lý 2 tr. 16"
  },
  {
    "id": 12,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc kháng độc đặc hiệu nhất (antidote) được chỉ định trong ngộ độc nặng Glycosid tim đe dọa tính mạng là gì?",
    "options": [
      "Kháng thể đặc hiệu kháng digoxin dạng phân đoạn Fab",
      "N-acetylcystein dạng tiêm truyền tĩnh mạch",
      "Protamin sulfat tiêm tĩnh mạch chậm",
      "Deferoxamin tiêm bắp sâu hoặc truyền tĩnh mạch"
    ],
    "correct": 0,
    "explanation": "Thuốc giải độc đặc hiệu tốt nhất khi ngộ độc nặng glycosid tim (digoxin/digitoxin) là dùng kháng thể kháng digoxin phân đoạn Fab (Digibind hoặc DigiFab). Các kháng thể này gắn kết mạnh với digoxin tự do trong máu và đưa qua thận bài tiết.",
    "reference": "Sách Dược lý 2 tr. 17"
  },
  {
    "id": 13,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Xử trí ngộ độc Digitalis có xuất hiện ngoại tâm thu thất và nhịp nhanh thất, thuốc chống loạn nhịp nào được ưu tiên lựa chọn?",
    "options": [
      "Amiodaron phối hợp Isoprenalin",
      "Lidocain hoặc Phenytoin",
      "Verapamil hoặc Diltiazem",
      "Quinidin hoặc Procainamid"
    ],
    "correct": 1,
    "explanation": "Để điều trị loạn nhịp thất do ngộ độc digitalis, thuốc được lựa chọn hàng đầu là Lidocain hoặc Phenytoin, do hai thuốc này ức chế tính tự động của thất mà ít làm ức chế dẫn truyền nhĩ thất. Quinidin và Verapamil bị chống chỉ định vì làm tăng nồng độ digoxin trong máu.",
    "reference": "Sách Dược lý 2 tr. 17"
  },
  {
    "id": 14,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Glycosid tim thuộc nhóm Strophantus (như Ouabain, Strophantin G) có đặc điểm dược động học nổi bật nào?",
    "options": [
      "Tan nhiều trong nước, rất ít hấp thu qua đường tiêu hóa nên chỉ dùng đường tiêm",
      "Thời gian bán thải rất dài trên 10 ngày và tích lũy cao trong mô mỡ",
      "Tan rất mạnh trong lipid, hấp thu 100% qua đường uống",
      "Chuyển hóa hoàn toàn qua gan bởi hệ enzym cytochrom P450"
    ],
    "correct": 0,
    "explanation": "Strophantin (như Ouabain) là glycosid rất ưa nước, hầu như không hấp thu qua đường uống nên chỉ dùng đường tiêm tĩnh mạch, tác dụng rất nhanh (sau 5-10 phút) và thải trừ nhanh qua thận, ít tích lũy hơn digitalis.",
    "reference": "Sách Dược lý 2 tr. 18"
  },
  {
    "id": 15,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Nhóm thuốc trợ tim làm tăng AMP vòng bao gồm những nhóm nào sau đây?",
    "options": [
      "Thuốc kích thích thụ thể beta-1 adrenergic và thuốc ức chế enzym phosphodiesterase III",
      "Thuốc ức chế men chuyển và thuốc đối kháng thụ thể angiotensin II",
      "Thuốc chẹn beta giao cảm không chọn lọc và glycosid chiết xuất từ lá cây",
      "Thuốc kích thích thụ thể alpha-2 trung ương và thuốc chẹn kênh calci"
    ],
    "correct": 0,
    "explanation": "Thuốc làm tăng AMP vòng nội bào gồm 2 nhóm: Nhóm kích thích thụ thể beta-1 adrenergic (như Dopamin, Dobutamin) làm tăng tổng hợp AMP vòng qua adenylcyclase; Nhóm ức chế enzym phosphodiesterase III (như Amrinon, Milrinon) làm giảm thoái giáng AMP vòng.",
    "reference": "Sách Dược lý 2 tr. 18-20"
  },
  {
    "id": 16,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Dobutamin là thuốc trợ tim cấp cứu có cơ chế tác dụng dược lý chủ yếu nào?",
    "options": [
      "Ức chế thụ thể alpha-1 adrenergic gây tụt huyết áp nghiêm trọng",
      "Chủ vận chọn lọc trên thụ thể beta-1 adrenergic làm tăng mạnh sức co bóp cơ tim",
      "Chủ vận thụ thể dopamine D1 gây giãn mạch thận ở liều rất thấp",
      "Ức chế trực tiếp kênh Na+ ở màng tế bào cơ tim pha 0"
    ],
    "correct": 1,
    "explanation": "Dobutamin là chất đồng vận chọn lọc trên thụ thể beta-1 adrenergic tại tim, làm tăng mạnh sức co bóp cơ tim (tác dụng inotropic dương tính) trong khi ít làm tăng tần số tim hơn so với Isoprenalin hay Dopamin.",
    "reference": "Sách Dược lý 2 tr. 19"
  },
  {
    "id": 17,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Milrinon và Inamrinon (Amrinon) có cơ chế tác dụng làm tăng co bóp cơ tim kèm giãn mạch là nhờ ức chế enzym nào?",
    "options": [
      "Phosphodiesterase typ III PDE-3",
      "Monoamin oxidase MAO",
      "Acetylcholinesterase",
      "Phosphodiesterase typ V PDE-5"
    ],
    "correct": 0,
    "explanation": "Milrinon và Inamrinon ức chế chọn lọc enzym phosphodiesterase typ III (PDE-3), ngăn cản sự phân hủy AMP vòng, làm tăng nồng độ AMP vòng trong tế bào cơ tim (tăng co bóp) và trong cơ trơn thành mạch (gây giãn mạch, giảm tiền gánh và hậu gánh).",
    "reference": "Sách Dược lý 2 tr. 20-21"
  },
  {
    "id": 18,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tương tác thuốc nào sau đây làm tăng nồng độ Digoxin trong huyết tương lên từ 1,5 đến 2 lần và dễ gây ngộ độc?",
    "options": [
      "Phối hợp Digoxin với Than hoạt hoặc Cholestyramin",
      "Phối hợp Digoxin với Quinidin, Amiodaron hoặc Verapamil",
      "Phối hợp Digoxin với Rifampicin hoặc Phenobarbital",
      "Phối hợp Digoxin với Thuốc kháng acid chứa nhôm hydroxyd"
    ],
    "correct": 1,
    "explanation": "Quinidin, Amiodaron và Verapamil ức chế bơm P-glycoprotein tại ống thận và đẩy digoxin ra khỏi vị trí gắn ở mô, làm giảm thải trừ digoxin qua thận, dẫn đến tăng nồng độ digoxin tự do trong máu lên 1,5 - 2 lần, dễ gây nhiễm độc.",
    "reference": "Sách Dược lý 2 tr. 17"
  },
  {
    "id": 19,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị THA",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong chiến lược can thiệp tim mạch toàn diện nhằm bảo vệ các cơ quan đích (tim, não, thận) và kéo dài thời gian sống cho bệnh nhân tăng huyết áp vô căn, 4 nhóm hoạt chất hạ áp nền tảng bậc một (First-line) được các hiệp hội tim mạch quốc tế đồng thuận khuyến cáo sử dụng thường quy nhờ sở hữu bằng chứng lâm sàng vượt trội về giảm tỷ lệ tử vong và biến cố tim mạch lớn bao gồm:",
    "options": [
      "Thuốc ức chế men chuyển (ACEI), thuốc chẹn thụ thể Angiotensin II (ARB), thuốc giãn mạch trực tiếp mở kênh kali và thuốc chẹn alpha-1 adrenergic",
      "Thuốc chẹn kênh calci nhóm DHP, thuốc lợi tiểu quai liều cao, thuốc kích thích thụ thể alpha-2 trung ương và thuốc chẹn thụ thể ARB",
      "Thuốc ức chế men chuyển (ACEI), thuốc chẹn thụ thể Angiotensin II (ARB), thuốc chẹn kênh calci (CCB) và thuốc lợi tiểu thiazid / thiazid-like",
      "Thuốc chẹn chọn lọc thụ thể beta-1, thuốc ức chế trực tiếp enzym renin, thuốc ức chế men chuyển và thuốc đối kháng aldosteron chọn lọc"
    ],
    "correct": 2,
    "explanation": "4 nhóm thuốc hạ áp nền tảng bậc một (first-line) gồm: ACEI, ARB, CCB và Lợi tiểu thiazid / thiazid-like. Thuốc chẹn beta chỉ ưu tiên khi có chỉ định bắt buộc (sau nhồi máu cơ tim, suy tim, đau thắt ngực). Thuốc chẹn alpha-1, kích thích alpha-2 trung ương, giãn mạch trực tiếp hay lợi tiểu quai chỉ xếp vào nhóm bậc hai/bậc ba khi có chỉ định đặc biệt.",
    "reference": "Sách Dược lý 2 tr. 54-55"
  },
  {
    "id": 20,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị THA",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Một hợp chất điều trị tim mạch phát huy tác dụng huyết động thông qua việc đồng thời làm suy giảm nồng độ của một peptide co mạch 8 acid amin trong tuần hoàn và ngăn cản quá trình thoái giáng của một nonapeptide giãn mạch nội sinh tại vi tuần hoàn. Đích tác động phân tử trực tiếp của hợp chất này trong cơ thể là:",
    "options": [
      "Phong bế chọn lọc thụ thể AT1 gắn kết Angiotensin II trên màng tế bào cơ trơn tiểu động mạch",
      "Ức chế enzym Peptidyl-dipeptidase A (Kininase II / Angiotensin Converting Enzyme)",
      "Ức chế enzym Aminopeptidase A chịu trách nhiệm chuyển đổi Angiotensin II thành Angiotensin III",
      "Bất hoạt enzym Neutral Endopeptidase (Neprilysin) làm tăng tích lũy các peptide lợi niệu nhĩ ANP và BNP"
    ],
    "correct": 1,
    "explanation": "ACE chính là enzym Kininase II (Peptidyl-dipeptidase A), vừa có chức năng bẻ gãy Angiotensin I (10 acid amin) thành Angiotensin II (8 acid amin - chất co mạch mạnh), vừa giáng hóa Bradykinin (nonapeptide 9 acid amin - chất giãn mạch). Thuốc ACEI ức chế enzym này nên vừa giảm Angiotensin II vừa tích lũy Bradykinin.",
    "reference": "Sách Dược lý 2 tr. 66-67"
  },
  {
    "id": 21,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị THA",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Một bệnh nhân tăng huyết áp kiểm soát số đo huyết áp rất tốt sau một tháng dùng thuốc tim mạch đường uống. Tuy nhiên, bệnh nhân đi khám vì xuất hiện hội chứng kích ứng đường thở: ho từng cơn không có đờm, ngứa rát họng, tăng nhiều về đêm khi nằm ngủ, hoàn toàn không đáp ứng với thuốc giảm ho trung ương hay kháng histamin. Khám tim phổi và X-quang lồng ngực không ghi nhận bất thường. Cơ chế sinh hóa giải thích triệu chứng ho khan dai dẳng đặc trưng này là:",
    "options": [
      "Sự tích tụ bất thường của Bradykinin và chất P ở đường dẫn khí do enzym thoái giáng chúng bị phong bế cạnh tranh",
      "Sự tăng giải phóng Histamin và Leukotriene C4/D4 từ dưỡng bào phế quản do phản ứng quá mẫn typ I qua trung gian IgE",
      "Sự kích thích trực tiếp của phân tử thuốc lên thụ thể TRPV1 (Transient Receptor Potential Vanilloid 1) của sợi thần kinh cảm giác C",
      "Sự tích tụ Angiotensin I chuyển hướng kích thích thụ thể AT2 gây co thắt phế quản và tăng tiết dịch nhầy đường thở"
    ],
    "correct": 0,
    "explanation": "Ho khan dai dẳng (tỷ lệ 5-20%) là phản ứng bất lợi đặc trưng chỉ gặp ở nhóm ACEI, do ức chế enzym Kininase II làm ứ đọng Bradykinin và chất P ở đường hô hấp trên. Khi gặp tác dụng phụ này, giải pháp tối ưu là chuyển sang nhóm chẹn thụ thể ARB.",
    "reference": "Sách Dược lý 2 tr. 68"
  },
  {
    "id": 22,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị THA",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Một hoạt chất can thiệp vào trục thể dịch điều hòa huyết áp có thể gây sụt giảm cấp tính mức lọc cầu thận (GFR) dẫn đến vô niệu hoàn toàn và đe dọa tính mạng nếu chỉ định trên bệnh nhân có tổn thương giải phẫu mạch máu thận nào dưới đây?",
    "options": [
      "Xơ vữa vi mạch thận ở bệnh nhân đái tháo đường có tổn thương cầu thận xuất hiện microalbumin niệu",
      "Hẹp động mạch thận một bên trên bệnh nhân có quả thận đối bên chức năng hoàn toàn bình thường",
      "Tăng áp lực tĩnh mạch thận thứ phát do suy tim sung huyết phân suất tống máu giảm",
      "Hẹp động mạch thận hai bên hoặc hẹp động mạch thận trên bệnh nhân chỉ còn một quả thận chức năng duy nhất"
    ],
    "correct": 3,
    "explanation": "Khi hẹp động mạch thận hai bên (hoặc thận độc nhất), áp lực tưới máu cầu thận phụ thuộc hoàn toàn vào tác dụng co tiểu động mạch đi của Angiotensin II để duy trì GFR. Uống ACEI/ARB làm giãn tiểu động mạch đi, áp lực lọc cầu thận sập về 0 gây suy thận cấp vô niệu ngay lập tức.",
    "reference": "Sách Dược lý 2 tr. 69"
  },
  {
    "id": 23,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị THA",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Nhóm thuốc tác động trên hệ RAA phong bế cạnh tranh thụ thể AT1 trên màng tế bào đích gồm những hoạt chất sở hữu cấu trúc phân tử có đuôi tên chung đặc trưng nào sau đây?",
    "options": [
      "Đuôi '-pril' (như Captopril, Lisinopril, Perindopril)",
      "Đuôi '-sartan' (như Losartan, Valsartan, Telmisartan)",
      "Đuôi '-olol' (như Atenolol, Metoprolol, Bisoprolol)",
      "Đuôi '-dipin' (như Amlodipin, Felodipin, Nicardipin)"
    ],
    "correct": 1,
    "explanation": "Các thuốc chẹn chọn lọc thụ thể Angiotensin II (ARB) đều mang hậu tố '-sartan' (Losartan, Valsartan, Candesartan, Telmisartan). Nhóm '-pril' là ACEI, nhóm '-olol' là chẹn Beta, nhóm '-dipin' là CCB DHP.",
    "reference": "Sách Dược lý 2 tr. 70"
  },
  {
    "id": 24,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị THA",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong cùng nhóm can thiệp lên trục Renin - Angiotensin, ưu thế dược lý vượt trội nhất phân biệt nhóm thuốc chẹn thụ thể ARB với nhóm thuốc ức chế men chuyển ACEI là:",
    "options": [
      "Có thể sử dụng an toàn tuyệt đối cho phụ nữ mang thai trong suốt 3 quý của thai kỳ mà không gây độc thận thai nhi",
      "Thúc đẩy đào thải triệt để ion Kali qua nước tiểu, không bao giờ gây biến chứng tăng Kali huyết thanh",
      "Không gây hiện tượng tụt huyết áp liều đầu tiên ngay cả khi dùng liều cao trên bệnh nhân đang dùng thuốc lợi tiểu",
      "Chẹn trực tiếp tại thụ thể AT1 nên không can thiệp vào sự thoái giáng của Bradykinin, triệt tiêu gần như hoàn toàn nguy cơ ho khan dai dẳng"
    ],
    "correct": 3,
    "explanation": "Do ARB đối kháng chọn lọc trên thụ thể AT1 mà không ức chế men chuyển ACE (Kininase II), thuốc không làm tăng nồng độ Bradykinin và chất P trong đường thở, nhờ đó hầu như không gây ho khan (tỷ lệ tương đương giả dược), là lựa chọn thay thế hoàn hảo cho bệnh nhân không dung nạp ACEI.",
    "reference": "Sách Dược lý 2 tr. 71"
  },
  {
    "id": 25,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị THA",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Nhóm thuốc chẹn kênh calci có cấu trúc nhân dihydropyridin (DHP) sở hữu tính chọn lọc mô rất cao trên mạch máu so với cơ tim. Các hoạt chất kinh điển thuộc phân nhóm này là:",
    "options": [
      "Amlodipin, Nifedipin, Felodipin, Nicardipin",
      "Verapamil và Diltiazem",
      "Propranolol, Timolol và Sotalol",
      "Hydralazin, Minoxidil và Diazoxid"
    ],
    "correct": 0,
    "explanation": "Phân nhóm CCB DHP có cấu trúc nhân 1,4-dihydropyridin gồm các thuốc có đuôi '-dipin' (Amlodipin, Nifedipin, Nicardipin, Felodipin), tác dụng ưu thế trên cơ trơn tiểu động mạch. Verapamil (phenylalkylamin) và Diltiazem (benzothiazepin) thuộc nhóm Non-DHP tác dụng ưu thế trên cơ tim.",
    "reference": "Sách Dược lý 2 tr. 58-59"
  },
  {
    "id": 26,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị THA",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Một bệnh nhân tăng huyết áp được điều trị đơn trị liệu bằng một hoạt chất chẹn kênh calci phân nhóm dihydropyridin. Sau một tháng, bệnh nhân nhận thấy hai bàn chân và mắt cá chân sưng mọng, tăng rõ rệt vào buổi chiều, không kèm khó thở, tĩnh mạch cổ không nổi, BNP máu bình thường. Cơ chế vi tuần hoàn chính xác gây ra hiện tượng tích tụ dịch này là gì?",
    "options": [
      "Giãn chọn lọc hệ tiểu tĩnh mạch sau mao mạch làm giảm lưu lượng máu về tim, gây ứ trệ tuần hoàn ngoại vi",
      "Ứ muối nước thứ phát tại ống thận do thuốc kích thích phản xạ tiết Aldosteron từ tuyến vỏ thượng thận",
      "Giãn chọn lọc tiểu động mạch trước mao mạch làm tăng áp lực thủy tĩnh trong lòng mao mạch, đẩy dịch thấm vào mô kẽ",
      "Tăng tính thấm thành mao mạch toàn thân do giải phóng ồ ạt Histamin và Bradykinin từ tế bào nội mô"
    ],
    "correct": 2,
    "explanation": "Phù mắt cá chân do CCB DHP là 'phù giả' do cơ chế huyết động: thuốc làm giãn mạnh tiểu động mạch trước mao mạch trong khi tiểu tĩnh mạch sau mao mạch không giãn tương xứng, dẫn tới tăng áp lực thủy tĩnh mao mạch đẩy dịch ra khoang kẽ vùng thấp. Thuốc lợi tiểu không có hiệu quả trong tình huống này; phối hợp thêm ACEI/ARB (làm giãn tiểu tĩnh mạch) sẽ cân bằng áp lực mao mạch và giải quyết triệt để phù.",
    "reference": "Sách Dược lý 2 tr. 61"
  },
  {
    "id": 27,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị THA",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Khác biệt cơ bản nhất về đặc tính huyết động của các thuốc chẹn kênh calci phân nhóm Non-DHP (Verapamil, Diltiazem) so với phân nhóm DHP (Amlodipin) là:",
    "options": [
      "Chỉ làm giãn tĩnh mạch lớn mà hoàn toàn không tác động lên hệ thống tiểu động mạch ngoại vi",
      "Gây kích thích phản xạ giao cảm làm tăng nhịp tim mạnh mẽ hơn rất nhiều so với phân nhóm DHP",
      "Chỉ tác động chọn lọc trên cơ trơn phế quản và cơ trơn bàng quang mà không ảnh hưởng huyết áp",
      "Có ái lực cao trên kênh Calci ở nút xoang, nút nhĩ thất và cơ tim, làm giảm nhịp tim, giảm sức co bóp và làm chậm dẫn truyền nhĩ thất"
    ],
    "correct": 3,
    "explanation": "Verapamil và Diltiazem (Non-DHP) gắn vào vị trí đặc hiệu trên kênh Calci type L ở tim mạnh hơn ở mạch, có tác dụng inotropic âm tính (giảm co bóp), chronotropic âm tính (giảm nhịp tim) và dromotropic âm tính (chậm dẫn truyền AV), do đó thường dùng hạ áp ở bệnh nhân có kèm nhịp nhanh, rung nhĩ hoặc đau thắt ngực.",
    "reference": "Sách Dược lý 2 tr. 62"
  },
  {
    "id": 28,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị THA",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Một phác đồ phối hợp thuốc hạ áp có nguy cơ gây hiệp đồng ức chế quá mức tính tự động của nút xoang và làm ngừng trệ hoàn toàn sự dẫn truyền xung động qua nút nhĩ thất, dẫn đến trụy mạch vô tâm thu hoặc block nhĩ thất độ 3. Sự kết hợp cấm kỵ đó là giữa:",
    "options": [
      "Thuốc chẹn kênh calci DHP (Amlodipin) phối hợp cùng thuốc chẹn thụ thể beta-adrenergic",
      "Thuốc chẹn kênh calci Non-DHP (Verapamil/Diltiazem) phối hợp cùng thuốc chẹn thụ thể beta-adrenergic",
      "Thuốc ức chế men chuyển Enalapril phối hợp cùng thuốc chẹn kênh calci DHP Felodipin",
      "Thuốc lợi tiểu Thiazid phối hợp cùng thuốc chẹn thụ thể ARB Losartan"
    ],
    "correct": 1,
    "explanation": "Chống chỉ định phối hợp Verapamil hoặc Diltiazem với thuốc chẹn beta vì cả hai nhóm đều ức chế mạnh nút xoang và nút nhĩ thất, hiệp đồng gây nhịp tim chậm nghiêm trọng, block AV độ 3 hoặc ngừng tim vô tâm thu. Ngược lại, chẹn beta phối hợp CCB nhóm DHP (Amlodipin) lại là phối hợp kinh điển hợp lý.",
    "reference": "Sách Dược lý 2 tr. 63"
  },
  {
    "id": 29,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị THA",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Một thuốc hạ áp đường uống bản chất là tiền dược, sau khi vào hệ thần kinh trung ương được chuyển hóa thành chất đồng vận kích thích chọn lọc thụ thể alpha-2 adrenergic tiền synap ở nhân bó đơn độc thuộc hành não. Tác dụng sinh học cốt lõi hạ huyết áp của cơ chế này là:",
    "options": [
      "Làm giảm trương lực và tần số phát xung thần kinh giao cảm ly tâm từ trung ương tới tim và mạch máu ngoại vi",
      "Kích thích trực tiếp các tế bào nội mô mạch máu não giải phóng Nitric Oxide gây giãn mạch toàn thân",
      "Chẹn thụ thể alpha-1 adrenergic hậu synap ngăn cản tác động co mạch của noradrenaline tại các tiểu động mạch",
      "Kích thích trung tâm phế vị ở hành tủy gây cường phó giao cảm làm liệt cơ trơn mạch máu"
    ],
    "correct": 0,
    "explanation": "Methyldopa được vận chuyển qua hàng rào máu não, chuyển hóa thành alpha-methylnoradrenalin. Chất này kích thích mạnh thụ thể alpha-2 tiền synap tại hành não, ức chế giải phóng noradrenalin, làm giảm trương lực giao cảm ly tâm, hạ huyết áp êm dịu và không làm giảm dòng máu đến thận/tử cung bánh rau.",
    "reference": "Sách Dược lý 2 tr. 74-75"
  },
  {
    "id": 30,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị THA",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Một phụ nữ mang thai ở tuần thứ 20 được chẩn đoán tăng huyết áp thai kỳ. Thuốc hạ huyết áp nào được đồng thuận lựa chọn là an toàn nhất qua nhiều thập kỷ, không gây suy giảm lưu lượng tưới máu bánh rau và không gây độc tính dị tật thận thai nhi?",
    "options": [
      "Enalapril",
      "Losartan",
      "Methyldopa",
      "Aliskiren"
    ],
    "correct": 2,
    "explanation": "Methyldopa là thuốc lựa chọn hàng đầu (first-line) cho tăng huyết áp thai kỳ vì hồ sơ an toàn cho thai nhi đã được kiểm chứng lâu đời. Các thuốc ức chế hệ RAA (ACEI, ARB, Aliskiren) bị chống chỉ định tuyệt đối trong thai kỳ vì gây quái thai, suy thận và tử vong thai nhi.",
    "reference": "Sách Dược lý 2 tr. 76"
  },
  {
    "id": 31,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị THA",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong xử trí cơn tăng huyết áp cấp cứu (HA ≥ 180/120 mmHg kèm tổn thương cơ quan đích tiến triển như xuất huyết não, phình tách động mạch chủ, phù phổi cấp), đường dùng và nhóm thuốc bắt buộc ưu tiên lựa chọn là:",
    "options": [
      "Đường tiêm truyền tĩnh mạch liên tục với các thuốc có thời gian khởi phát nhanh và dễ chỉnh liều (như Nicardipine, Labetalol, Nitroprussid)",
      "Đường uống viên nén tác dụng kéo dài kết hợp tăng liều gấp ba lần ngay tại giường cấp cứu",
      "Đường ngậm dưới lưỡi viên Nifedipin nang mềm chọc thủng để hạ nhanh huyết áp về mức bình thường trong 10 phút",
      "Đường tiêm bắp sâu các thuốc lợi tiểu Thiazid kết hợp tiêm tĩnh mạch bolus Digoxin"
    ],
    "correct": 0,
    "explanation": "Cơn tăng huyết áp cấp cứu (Hypertensive Emergency) có tổn thương cơ quan đích bắt buộc phải dùng thuốc đường tĩnh mạch liên tục (Nicardipine IV, Labetalol IV, Nitroprussid IV) trong phòng hồi sức tích cực để kiểm soát chính xác tốc độ hạ áp, giảm không quá 20-25% trong giờ đầu.",
    "reference": "Sách Dược lý 2 tr. 77"
  },
  {
    "id": 32,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị THA",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Khi truyền tĩnh mạch liên tục Natri nitroprussid liều cao hoặc kéo dài quá 48 giờ để kiểm soát cơn tăng huyết áp ác tính, bệnh nhân có nguy cơ xuất hiện toan chuyển hóa tăng khoảng trống anion, lú lẫn và thở nhanh sâu do sự tích lũy chất độc nào trong cơ thể?",
    "options": [
      "Khí Nitric Oxide (NO) tự do gây ức chế chọn lọc enzym tổng hợp năng lượng ATP tại thận",
      "Gốc Xyanua (Cyanide - CN⁻) và Thiocyanat do thuốc bị chuyển hóa khử bởi hemoglobin",
      "Các ion Natri và Sắt tự do gây quá tải thể tích và nhiễm sắc tố huyết mô cấp tính",
      "Acid Uric và tinh thể Urat kết tủa làm hoại tử ống thận cấp"
    ],
    "correct": 1,
    "explanation": "Natri nitroprussid trong hồng cầu giải phóng NO đồng thời phóng thích 5 gốc Cyanide (CN⁻). Cyanide được enzym Rhodanase ở gan chuyển thành Thiocyanat thải qua thận. Khi dùng liều cao hoặc suy thận, CN⁻ tự do tích lũy ức chế chuỗi hô hấp tế bào gây toan lactic nặng và tử vong. Thuốc giải độc là Natri thiosulfat hoặc Hydroxocobalamin.",
    "reference": "Sách Dược lý 2 tr. 78"
  },
  {
    "id": 33,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị THA",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong điều trị tăng huyết áp vô căn đơn thuần, nhóm thuốc lợi tiểu nào được khuyến cáo ưu tiên lựa chọn hàng đầu nhờ hiệu quả hạ áp ổn định, giảm tỷ lệ đột quỵ và giá thành kinh tế?",
    "options": [
      "Lợi tiểu quai tác dụng mạnh (Furosemid, Bumetanid)",
      "Lợi tiểu giữ Kali kháng Aldosteron (Spironolacton, Eplerenone)",
      "Lợi tiểu thẩm thấu qua đường tĩnh mạch (Mannitol, Glycerol)",
      "Lợi tiểu Thiazid và Thiazid-like (Hydrochlorothiazid, Indapamid, Chlorthalidon)"
    ],
    "correct": 3,
    "explanation": "Thiazid (Hydrochlorothiazid) và Thiazid-like (Indapamid, Chlorthalidon) là lợi tiểu nền tảng được khuyến cáo hàng đầu trong tăng huyết áp vô căn nhờ tác dụng hạ áp kéo dài, giảm biến cố tim mạch và đột quỵ. Lợi tiểu quai chỉ ưu tiên khi có phù nặng, suy tim sung huyết hoặc suy thận nặng GFR < 30.",
    "reference": "Sách Dược lý 2 tr. 56"
  },
  {
    "id": 34,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị THA",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hiện tượng 'liều đầu tiên' (First-dose phenomenon) đặc trưng bởi tụt huyết áp tư thế đứng nghiêm trọng kèm chóng mặt, hoa mắt hoặc ngất xỉu ngay sau khi uống liều khởi đầu thường gặp nhất ở nhóm thuốc nào?",
    "options": [
      "Thuốc chẹn chọn lọc kênh Calci nhóm dihydropyridin (như Amlodipin)",
      "Thuốc chẹn chọn lọc thụ thể beta-1 adrenergic ở tim (như Bisoprolol)",
      "Thuốc phong bế chọn lọc thụ thể alpha-1 adrenergic ngoại vi (như Prazosin, Doxazosin)",
      "Thuốc chẹn thụ thể Angiotensin II phân nhóm AT1 (như Telmisartan)"
    ],
    "correct": 2,
    "explanation": "Thuốc chẹn alpha-1 ngoại vi (Prazosin, Doxazosin) gây giãn đồng thời cả tiểu động mạch và tiểu tĩnh mạch, làm giảm nhanh lượng máu tĩnh mạch đổ về tim. Ở liều đầu tiên, phản xạ co mạch tư thế bị triệt tiêu đột ngột dẫn đến tụt huyết áp tư thế đứng và ngất (First-dose syncope). Khắc phục: Khởi đầu bằng liều nhỏ và uống ngay trước lúc đi ngủ.",
    "reference": "Sách Dược lý 2 tr. 73"
  },
  {
    "id": 35,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị THA",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Một bệnh nhân 52 tuổi mắc đái tháo đường typ 2 kèm tăng huyết áp, xét nghiệm nước tiểu ghi nhận có microalbumin niệu (tỷ lệ Albumin/Creatinin niệu tăng). Nhóm thuốc hạ áp nào bắt buộc được ưu tiên lựa chọn hàng đầu để bảo vệ thận và làm chậm tiến triển suy thận?",
    "options": [
      "Thuốc ức chế men chuyển (ACEI) hoặc thuốc chẹn thụ thể Angiotensin II (ARB)",
      "Thuốc chẹn kênh calci Non-DHP (Verapamil, Diltiazem)",
      "Thuốc chẹn thụ thể beta giao cảm không chọn lọc (Propranolol)",
      "Thuốc giãn mạch trực tiếp trên động mạch (Hydralazin)"
    ],
    "correct": 0,
    "explanation": "ACEI và ARB là thuốc bảo vệ thận số 1 cho bệnh nhân đái tháo đường vì thuốc làm giãn chọn lọc tiểu động mạch đi nhiều hơn tiểu động mạch đến của cầu thận, làm giảm áp lực thủy tĩnh nội cầu thận, giảm rò rỉ protein qua màng lọc và ngăn ngừa xơ hóa cầu thận.",
    "reference": "Sách Dược lý 2 tr. 68-70"
  },
  {
    "id": 36,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc cắt cơn đau thắt ngực tác dụng nhanh và phổ biến nhất được sử dụng ngậm dưới lưỡi là thuốc nào?",
    "options": [
      "Aspirin viên bao tan trong ruột",
      "Amlodipin viên nén",
      "Nitroglycerin",
      "Isosorbid-5-mononitrat uống phóng thích kéo dài"
    ],
    "correct": 2,
    "explanation": "Nitroglycerin ngậm dưới lưỡi hấp thu cực nhanh qua niêm mạc lưỡi trực tiếp vào tuần hoàn chung, tránh được chuyển hóa bước đầu qua gan 100%, xuất hiện tác dụng chỉ sau 1-3 phút, dùng để cắt nhanh cơn đau thắt ngực cấp.",
    "reference": "Sách Dược lý 2 tr. 41-43"
  },
  {
    "id": 37,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cơ chế phân tử gây giãn mạch của nhóm nitrat hữu cơ (Nitroglycerin, Isosorbid dinitrat) là giải phóng chất nào?",
    "options": [
      "Endothelin-1 ức chế enzym phosphodiesterase typ 3",
      "Prostacyclin PGI2 kích hoạt adenylcyclase làm tăng AMP vòng",
      "Nitric oxid NO kích hoạt guanylyl cyclase làm tăng GMP vòng cGMP",
      "Histamin gắn vào thụ thể H1 trên tế bào nội mô mạch vành"
    ],
    "correct": 2,
    "explanation": "Các nitrat hữu cơ vào tế bào cơ trơn mạch máu kết hợp với nhóm sulfhydryl (-SH) để giải phóng oxyt nitric (NO). NO kích thích enzym guanylyl cyclase tổng hợp cGMP, làm khử phosphoryl chuỗi nhẹ myosin, gây giãn cơ trơn mạch máu.",
    "reference": "Sách Dược lý 2 tr. 42"
  },
  {
    "id": 38,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cơ chế chính giúp Nitroglycerin làm giảm cơn đau thắt ngực ổn định là gì?",
    "options": [
      "Giãn hệ tĩnh mạch làm giảm tiền gánh, từ đó giảm thể tích thất trái và giảm công cơ tim",
      "Ức chế trực tiếp trung tâm cảm giác đau ở vỏ não",
      "Co mạch ngoại biên để dồn máu tối đa về tuần hoàn mạch vành",
      "Làm tăng nhịp tim và tăng dẫn truyền để cung cấp nhiều máu hơn cho mô"
    ],
    "correct": 0,
    "explanation": "Ở liều điều trị, nitrat hữu cơ tác dụng nổi bật là làm giãn hệ tĩnh mạch lớn, làm ứ máu ở ngoại vi, làm giảm lượng máu dồn về tim (giảm tiền gánh), làm giảm thể tích tâm thất và giảm áp lực trong buồng tim, từ đó làm giảm tiêu thụ oxy cơ tim.",
    "reference": "Sách Dược lý 2 tr. 42-43"
  },
  {
    "id": 39,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hiện tượng quen thuốc nhanh (tolerance) khi dùng nitrat hữu cơ liên tục trong ngày có nguyên nhân chủ yếu do đâu?",
    "options": [
      "Tăng sinh quá mức thụ thể beta-1 adrenergic trên màng cơ tim",
      "Cạn kiệt các nhóm sulfhydryl -SH cần thiết để chuyển hóa nitrat thành NO",
      "Tăng đào thải thuốc đột ngột qua thận do kích thích enzym lọc cầu thận",
      "Hình thành kháng thể trung hòa chống lại phân tử nitroglycerin"
    ],
    "correct": 1,
    "explanation": "Dùng nitrat hữu cơ liên tục suốt ngày đêm sẽ làm cạn kiệt các nhóm sulfhydryl (-SH) trong tế bào nội mô cần cho việc sinh NO, gây giảm hoặc mất tác dụng giãn mạch. Để khắc phục, cần tạo một khoảng trống không dùng thuốc từ 8-12 giờ mỗi ngày.",
    "reference": "Sách Dược lý 2 tr. 44"
  },
  {
    "id": 40,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng không mong muốn thường gặp khi bắt đầu dùng Nitroglycerin là gì?",
    "options": [
      "Đau đầu dữ dội, bốc hỏa đỏ bừng mặt và tụt huyết áp tư thế",
      "Tê bì đầu ngón tay do co thắt mạch ngoại vi",
      "Ho khan liên tục không dứt về đêm",
      "Táo bón nặng kèm trướng bụng kéo dài"
    ],
    "correct": 0,
    "explanation": "Giãn các mạch máu vùng đầu gây đau đầu theo nhịp đập, giãn mạch da vùng mặt gây bốc hỏa đỏ bừng, và giãn tĩnh mạch toàn thân gây tụt huyết áp tư thế đứng kèm nhịp nhanh phản xạ.",
    "reference": "Sách Dược lý 2 tr. 43"
  },
  {
    "id": 41,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Phối hợp thuốc nào sau đây bị CHỐNG CHỈ ĐỊNH TUYỆT ĐỐI do nguy cơ tụt huyết áp hiểm nghèo đe dọa tính mạng?",
    "options": [
      "Nitroglycerin phối hợp với thuốc chẹn beta giao cảm Metoprolol",
      "Nitroglycerin phối hợp với Sildenafil hoặc Tadalafil",
      "Nitroglycerin phối hợp với Statin hạ mỡ máu Atorvastatin",
      "Nitroglycerin phối hợp với thuốc chống kết tập tiểu cầu Aspirin"
    ],
    "correct": 1,
    "explanation": "Sildenafil/Tadalafil là thuốc ức chế phosphodiesterase typ 5 (PDE-5), ngăn giáng hóa cGMP. Nitrat hữu cơ làm tăng tổng hợp cGMP. Phối hợp hai thuốc dẫn tới cGMP tích lũy ồ ạt, gây giãn mạch hệ thống cực độ, tụt huyết áp sâu không hồi phục và tử vong.",
    "reference": "Sách Dược lý 2 tr. 44"
  },
  {
    "id": 42,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong điều trị dự phòng cơn đau thắt ngực mạn tính, nhóm thuốc chẹn beta giao cảm có tác dụng bảo vệ cơ tim nhờ cơ chế nào?",
    "options": [
      "Kích thích tăng sinh các mạch máu bàng hệ nuôi dưỡng vùng cơ tim thiếu máu",
      "Làm tan các cục huyết khối bám trên mảng vữa xơ động mạch vành",
      "Giãn trực tiếp động mạch vành bị xơ vữa đang co thắt mạnh",
      "Làm giảm tần số tim, giảm sức co bóp cơ tim dẫn đến giảm nhu cầu tiêu thụ oxy của tim"
    ],
    "correct": 3,
    "explanation": "Thuốc chẹn beta ức chế thụ thể beta-1 adrenergic ở tim, làm giảm nhịp tim, giảm sức co bóp cơ tim và giảm huyết áp, từ đó làm giảm rõ rệt công của tim và nhu cầu oxy cơ tim cả khi nghỉ ngơi và khi gắng sức.",
    "reference": "Sách Dược lý 2 tr. 46-47"
  },
  {
    "id": 43,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Đau thắt ngực do co thắt mạch vành (Đau thắt ngực Prinzmetal hay thể biến thái) CHỐNG CHỈ ĐỊNH sử dụng nhóm thuốc nào sau đây đơn độc?",
    "options": [
      "Thuốc giãn mạch trực tiếp",
      "Thuốc chẹn beta giao cảm không chọn lọc",
      "Thuốc chẹn kênh calci",
      "Thuốc nitrat hữu cơ tác dụng kéo dài"
    ],
    "correct": 1,
    "explanation": "Trong đau thắt ngực Prinzmetal do co thắt mạch vành, thuốc chẹn beta không chọn lọc phong bế thụ thể beta-2 (gây giãn mạch) để lại thụ thể alpha-1 (gây co mạch) không bị đối kháng, làm co thắt mạch vành nặng nề hơn. Thuốc lựa chọn hàng đầu là Chẹn calci và Nitrat.",
    "reference": "Sách Dược lý 2 tr. 47, 51"
  },
  {
    "id": 44,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trimetazidin là thuốc điều trị bổ sung trong đau thắt ngực ổn định tác động theo cơ chế nào?",
    "options": [
      "Ức chế không hồi phục enzym cyclooxygenase-1 của tiểu cầu",
      "Chẹn thụ thể AT1 của angiotensin II tại cơ trơn thành mạch",
      "Giãn mạnh toàn bộ hệ thống động mạch vành và tĩnh mạch chủ",
      "Tối ưu hóa chuyển hóa năng lượng tế bào cơ tim bằng cách ức chế quá trình beta-oxy hóa acid béo"
    ],
    "correct": 3,
    "explanation": "Trimetazidin bảo vệ tế bào cơ tim khỏi thiếu máu cục bộ bằng cách ức chế enzym 3-ketoacyl-CoA thiolase (3-KAT), làm chuyển dịch chuyển hóa năng lượng từ oxy hóa acid béo sang oxy hóa glucose (quá trình tiêu thụ ít oxy hơn trên mỗi phân tử ATP sinh ra).",
    "reference": "Sách Dược lý 2 tr. 52"
  },
  {
    "id": 45,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Theo bảng phân loại thuốc chống loạn nhịp tim kinh điển của Vaughan Williams, Nhóm I gồm các thuốc có cơ chế tác dụng chính là gì?",
    "options": [
      "Chẹn kênh calci Ca2+ typ L",
      "Chẹn kênh natri Na+ phụ thuộc điện thế ở màng tế bào cơ tim",
      "Chẹn thụ thể beta-adrenergic giao cảm",
      "Chẹn kênh kali K+ kéo dài thời gian điện thế hoạt động"
    ],
    "correct": 1,
    "explanation": "Phân loại Vaughan Williams: Nhóm I: Chẹn kênh Na+; Nhóm II: Chẹn thụ thể beta adrenergic; Nhóm III: Chẹn kênh K+; Nhóm IV: Chẹn kênh Ca2+.",
    "reference": "Sách Dược lý 2 tr. 28"
  },
  {
    "id": 46,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Các thuốc chống loạn nhịp nhóm IA (Quinidin, Procainamid, Disopyramid) có đặc điểm tác động điện sinh lý nào?",
    "options": [
      "Làm chậm rất mạnh pha 0 nhưng không ảnh hưởng đến thời gian điện thế hoạt động",
      "Chỉ làm tăng dẫn truyền nhĩ thất mà không ảnh hưởng nút xoang",
      "Rút ngắn thời gian điện thế hoạt động và chỉ tác dụng chọn lọc trên mô thất",
      "Làm chậm tốc độ khử cực pha 0 và kéo dài thời gian điện thế hoạt động APD"
    ],
    "correct": 3,
    "explanation": "Nhóm IA (Quinidin, Procainamid): ức chế dòng Na+ ở pha 0 ở mức độ trung bình, đồng thời ức chế dòng K+ đi ra nên kéo dài thời gian điện thế hoạt động (APD) và thời kỳ trơ hiệu quả (ERP).",
    "reference": "Sách Dược lý 2 tr. 29"
  },
  {
    "id": 47,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc chống loạn nhịp nào sau đây thuộc Nhóm IB chỉ có tác dụng trên tâm thất và được lựa chọn trong cấp cứu loạn nhịp thất sau nhồi máu cơ tim?",
    "options": [
      "Amiodaron",
      "Quinidin",
      "Lidocain",
      "Flecainid"
    ],
    "correct": 2,
    "explanation": "Lidocain thuộc nhóm IB, có ái lực cao với kênh Na+ ở trạng thái bất hoạt, đặc biệt chọn lọc trên mô thiếu máu cục bộ tâm thất, dùng tiêm tĩnh mạch điều trị loạn nhịp thất trong nhồi máu cơ tim hoặc sau phẫu thuật tim.",
    "reference": "Sách Dược lý 2 tr. 31-32"
  },
  {
    "id": 48,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hội chứng 'Cinchonism' (ù tai, giảm thính lực, đau đầu, chóng mặt, rối loạn thị giác) là tác dụng phụ kinh điển của thuốc nào?",
    "options": [
      "Lidocain",
      "Metoprolol",
      "Adenosin",
      "Quinidin"
    ],
    "correct": 3,
    "explanation": "Quinidin là dẫn chất alkaloid chiết xuất từ vỏ cây Cinchona. Khi dùng liều cao hoặc ngộ độc sẽ gây hội chứng ngộ độc vỏ cây Cinchona (Cinchonism) với triệu chứng: ù tai, hoa mắt, nhức đầu, điếc tạm thời, rối loạn thị giác.",
    "reference": "Sách Dược lý 2 tr. 30"
  },
  {
    "id": 49,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Amiodaron thuộc nhóm III trong phân loại Vaughan Williams có cơ chế và đặc điểm điện sinh lý chính là gì?",
    "options": [
      "Chỉ phong bế chọn lọc thụ thể muscarinic M2 tại tim",
      "Chẹn kênh Ca2+ chọn lọc không làm thay đổi thời gian điện thế hoạt động",
      "Chẹn kênh K+, kéo dài pha tái cực và kéo dài thời gian điện thế hoạt động APD",
      "Kích thích kênh Na+ mở sớm làm tăng tính tự động của cơ tim"
    ],
    "correct": 2,
    "explanation": "Amiodaron là thuốc nhóm III điển hình, ức chế kênh K+ đưa K+ ra ngoài tế bào trong pha 3 tái cực, kéo dài thời gian điện thế hoạt động (APD) và kéo dài thời kỳ trơ của tất cả các mô tim.",
    "reference": "Sách Dược lý 2 tr. 35"
  },
  {
    "id": 50,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Phân tử Amiodaron chứa hàm lượng iod cao (khoảng 37% trọng lượng), do đó thuốc thường gây tác dụng phụ đặc trưng trên cơ quan nào?",
    "options": [
      "Tuyến tụy nội tiết gây đái tháo tháo đường",
      "Tuyến thượng thận gây suy vỏ thượng thận",
      "Tuyến yên gây tiết sữa nhiều bất thường",
      "Tuyến giáp"
    ],
    "correct": 3,
    "explanation": "Phân tử amiodaron chứa lượng iod lớn, tích lũy lâu trong cơ thể (t1/2 lên tới 1-2 tháng), gây độc trên tuyến giáp: gây suy giáp (do ức chế chuyển T4 thành T3 ngoại vi) hoặc gây cường giáp (do thừa iod - hiệu ứng Jod-Basedow).",
    "reference": "Sách Dược lý 2 tr. 36"
  },
  {
    "id": 51,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng không mong muốn mạn tính nguy hiểm nhất ở phổi của Amiodaron có thể đe dọa tính mạng là gì?",
    "options": [
      "Cơn hen phế quản ác tính bộc phát",
      "Tăng tiết dịch phế quản gây ngập phế nang",
      "Xơ hóa phổi kẽ và viêm phổi thâm nhiễm",
      "Tràn dịch màng phổi mủ cấp tính"
    ],
    "correct": 2,
    "explanation": "Độc tính mạn tính nguy hiểm nhất của amiodaron là gây viêm phổi kẽ dẫn tới xơ phổi (tỷ lệ 1-10%), có thể dẫn tới suy hô hấp không hồi phục và tử vong nếu không phát hiện dừng thuốc kịp thời.",
    "reference": "Sách Dược lý 2 tr. 36"
  },
  {
    "id": 52,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Adenosin được lựa chọn hàng đầu trong cấp cứu cắt cơn nhịp nhanh kịch phát trên thất (SVT) theo đường nào sau đây?",
    "options": [
      "Tiêm bắp sâu ở vùng đùi hoặc vùng mông",
      "Tiêm tĩnh mạch bolus thật nhanh trong vòng 1-2 giây rồi bơm đuổi muối sinh lý",
      "Uống cả viên trước bữa ăn 30 phút",
      "Truyền tĩnh mạch nhỏ giọt chậm trong 8 giờ"
    ],
    "correct": 1,
    "explanation": "Adenosin có thời gian bán hủy cực ngắn trong máu (chỉ dưới 10 giây do hồng cầu và tế bào nội mô bắt giữ và thoái hóa nhanh), do đó bắt buộc phải tiêm tĩnh mạch bolus cực nhanh trong 1-2 giây và bơm đẩy ngay 20ml nước muối sinh lý.",
    "reference": "Sách Dược lý 2 tr. 38"
  },
  {
    "id": 53,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Các thuốc làm kéo dài khoảng QT trên điện tâm đồ (như Quinidin, Amiodaron, Sotalol) có nguy cơ gây ra biến chứng loạn nhịp thất chết người nào?",
    "options": [
      "Blốc nhánh trái hoàn toàn thoáng qua",
      "Xoắn đỉnh",
      "Nhịp thoát bộ nối nhĩ thất chậm",
      "Cơn nhịp nhanh xoang kịch phát"
    ],
    "correct": 1,
    "explanation": "Các thuốc nhóm IA và nhóm III làm kéo dài khoảng QT (kéo dài pha tái cực), tạo điều kiện cho các hậu khử cực sớm (EAD) kích hoạt cơn nhịp nhanh thất đa hình thái nguy hiểm gọi là hiện tượng xoắn đỉnh (Torsades de pointes).",
    "reference": "Sách Dược lý 2 tr. 30, 37"
  },
  {
    "id": 54,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Vị trí tác dụng chủ yếu và cơ chế phân tử của thuốc lợi tiểu Furosemid là gì?",
    "options": [
      "Nhánh lên dày quai Henle, ức chế kênh đồng vận chuyển Na+/K+/2Cl-",
      "Ống lượn gần, ức chế men carbonic anhydrase",
      "Đoạn đầu ống lượn xa, ức chế đồng vận chuyển Na+/Cl-",
      "Ống góp, đối kháng cạnh tranh tại thụ thể aldosteron"
    ],
    "correct": 0,
    "explanation": "Furosemid thuộc nhóm lợi tiểu quai, tác dụng tại nhánh lên phần dày của quai Henle do ức chế hệ đồng vận chuyển Na+/K+/2Cl- ở bờ bàn chải tế bào biểu mô, dẫn tới thải trừ mạnh Na+, K+, Cl- và nước.",
    "reference": "Sách Dược lý 2 tr. 81-82"
  },
  {
    "id": 55,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Nhóm thuốc lợi tiểu nào có hiệu lực bài xuất muối nước mạnh nhất và vẫn duy trì được tác dụng khi mức lọc cầu thận giảm nặng (dưới 30 mL/phút)?",
    "options": [
      "Thuốc lợi tiểu ức chế carbonic anhydrase",
      "Thuốc lợi tiểu quai",
      "Thuốc lợi tiểu giữ kali",
      "Thuốc lợi tiểu Thiazid"
    ],
    "correct": 1,
    "explanation": "Lợi tiểu quai (Furosemid, Bumetanid, Torsemid) là nhóm lợi tiểu mạnh nhất (lợi tiểu trần cao), có khả năng đào thải tới 20-25% lượng natri lọc qua cầu thận và vẫn có hiệu lực khi suy thận nặng có GFR dưới 30 mL/phút.",
    "reference": "Sách Dược lý 2 tr. 82"
  },
  {
    "id": 56,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng không mong muốn trên thính giác (độc tính trên tai gây điếc thoáng qua hoặc vĩnh viễn) của Furosemid tăng lên rõ rệt khi dùng phối hợp với nhóm kháng sinh nào?",
    "options": [
      "Aminoglycosid",
      "Macrolid",
      "Beta-lactam",
      "Fluoroquinolon"
    ],
    "correct": 0,
    "explanation": "Cả Furosemid và kháng sinh Aminoglycosid (như Gentamicin, Amikacin, Streptomycin) đều có độc tính gây tổn thương tế bào lông ốc tai và tiền đình. Khi dùng phối hợp, nguy cơ gây điếc và độc tính tai tăng lên gấp nhiều lần.",
    "reference": "Sách Dược lý 2 tr. 83"
  },
  {
    "id": 57,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cơ chế tác dụng của thuốc lợi tiểu nhóm Thiazid (Hydrochlorothiazid) tại ống thận là gì?",
    "options": [
      "Ức chế kênh tái hấp thu glucose SGLT2 ở ống lượn gần",
      "Ức chế đồng vận chuyển Na+/Cl- ở đoạn đầu ống lượn xa",
      "Kháng thụ thể V2 của ADH tại ống góp",
      "Ức chế đồng vận chuyển Na+/K+/2Cl- ở quai Henle"
    ],
    "correct": 1,
    "explanation": "Thuốc lợi tiểu Thiazid tác dụng tại đoạn đầu ống lượn xa bằng cách gắn vào vị trí Cl- của hệ đồng vận chuyển Na+/Cl-, ức chế tái hấp thu Na+ và Cl-.",
    "reference": "Sách Dược lý 2 tr. 84"
  },
  {
    "id": 58,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Điểm khác biệt quan trọng về tác động trên bài xuất Canxi (Ca2+) giữa Furosemid và Hydrochlorothiazid là gì?",
    "options": [
      "Furosemid làm tăng thải Ca2+ qua nước tiểu, trong khi Hydrochlorothiazid làm tăng tái hấp thu và giảm thải Ca2+",
      "Cả hai thuốc đều làm tăng thải trừ Ca2+ qua nước tiểu với mức độ tương đương",
      "Furosemid giữ Ca2+ lại trong máu, còn Hydrochlorothiazid gây mất Ca2+ nặng nề",
      "Cả hai thuốc đều không làm thay đổi bài xuất ion Canxi qua thận"
    ],
    "correct": 0,
    "explanation": "Lợi tiểu quai (Furosemid) làm giảm điện thế dương trong lòng ống ở quai Henle nên làm tăng thải Ca2+ và Mg2+ (được chỉ định cấp cứu tăng canxi máu). Ngược lại, Thiazid làm tăng tái hấp thu Ca2+ ở ống lượn xa, làm giảm canxi niệu nên rất có lợi cho bệnh nhân loãng xương hoặc sỏi thận calci.",
    "reference": "Sách Dược lý 2 tr. 82, 85"
  },
  {
    "id": 59,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Spironolacton có cơ chế lợi tiểu và đặc điểm tác dụng nào sau đây?",
    "options": [
      "Ức chế enzym carbonic anhydrase làm kiềm hóa nước tiểu mạnh mẽ",
      "Đối kháng cạnh tranh với aldosteron tại thụ thể nội bào ở ống lượn xa và ống góp, gây tăng thải Na+ và giữ K+",
      "Làm giãn mạch thận chọn lọc làm tăng áp lực lọc cầu thận gấp 3 lần",
      "Ức chế trực tiếp kênh mở Na+ ở màng đỉnh mà không cần sự có mặt của aldosteron"
    ],
    "correct": 1,
    "explanation": "Spironolacton có cấu trúc tương tự aldosteron, cạnh tranh trực tiếp với aldosteron tại thụ thể mineralocorticoid trong tế bào chất của ống lượn xa và ống góp, làm giảm tổng hợp protein AIP, ngăn cản tái hấp thu Na+ và ngăn bài tiết K+, H+.",
    "reference": "Sách Dược lý 2 tr. 86-87"
  },
  {
    "id": 60,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng không mong muốn đặc trưng trên hệ nội tiết khi dùng Spironolacton kéo dài ở nam giới là gì?",
    "options": [
      "Chứng vú to ở nam giới và giảm ham muốn tình dục",
      "Phì đại tuyến giáp và lồi mắt",
      "Hội chứng Cushing với mặt tròn như mặt trăng",
      "Tăng tiết sữa bất thường kèm rậm lông toàn thân"
    ],
    "correct": 0,
    "explanation": "Do spironolacton có cấu trúc steroid gần giống hormon sinh dục, thuốc đối kháng thụ thể androgen và ức chế sinh tổng hợp androgen, gây tác dụng phụ ở nam giới: chứng vú to (gynecomastia), đau núm vú, bất lực, giảm tinh trùng.",
    "reference": "Sách Dược lý 2 tr. 88"
  },
  {
    "id": 61,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc lợi tiểu Amilorid và Triamteren thuộc nhóm nào sau đây?",
    "options": [
      "Thuốc đối kháng thụ thể vasopressin V2",
      "Thuốc lợi tiểu quai có tác dụng siêu ngắn",
      "Thuốc lợi tiểu làm hạ kali máu nghiêm trọng",
      "Thuốc lợi tiểu giữ kali không phụ thuộc vào nồng độ aldosteron"
    ],
    "correct": 3,
    "explanation": "Amilorid và Triamteren ức chế trực tiếp kênh natri biểu mô (ENaC) ở bờ tự do của tế bào ống lượn xa và ống góp, làm giảm tái hấp thu Na+ và ngăn thải K+ mà không phụ thuộc vào sự có mặt hay vắng mặt của aldosteron.",
    "reference": "Sách Dược lý 2 tr. 88-89"
  },
  {
    "id": 62,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Acetazolamid có cơ chế tác dụng là ức chế enzym carbonic anhydrase (CA). Chỉ định lâm sàng phổ biến nhất hiện nay của thuốc này là gì?",
    "options": [
      "Điều trị phù phổi cấp do suy tim trái sung huyết",
      "Hạ canxi máu cấp tính do suy cận giáp",
      "Hạ nhãn áp trong bệnh glôcôm và dự phòng hội chứng say độ cao",
      "Điều trị tăng huyết áp vô căn kháng trị"
    ],
    "correct": 2,
    "explanation": "Do ức chế CA ở thể mi của mắt làm giảm sản xuất thủy dịch, Acetazolamid là thuốc điều trị quan trọng trong bệnh glôcôm (tăng nhãn áp). Thuốc cũng làm tăng thải HCO3- gây toan chuyển hóa nhẹ kích thích thông khí nên dùng chống say độ cao (mountain sickness).",
    "reference": "Sách Dược lý 2 tr. 80-81"
  },
  {
    "id": 63,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Mannitol là thuốc lợi tiểu thẩm thấu được dùng chủ yếu bằng đường nào và có chỉ định cấp cứu nổi bật nào?",
    "options": [
      "Tiêm bắp sâu, chỉ định trong suy tim mạn tính giai đoạn cuối",
      "Uống trước bữa ăn, chỉ định trong xơ gan cổ trướng có phù",
      "Ngậm dưới lưỡi, chỉ định trong cơn phù phổi cấp huyết động",
      "Truyền tĩnh mạch ưu trương, chỉ định trong phù não cấp và tăng áp lực nội sọ"
    ],
    "correct": 3,
    "explanation": "Mannitol không hấp thu qua đường tiêu hóa nên bắt buộc dùng truyền tĩnh mạch dạng dung dịch ưu trương (10-20%). Thuốc làm tăng áp lực thẩm thấu máu, hút dịch từ khoang nội bào và nhu mô não vào lòng mạch, dùng cấp cứu phù não và hạ áp lực nội sọ.",
    "reference": "Sách Dược lý 2 tr. 90-91"
  },
  {
    "id": 64,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Nhóm thuốc ức chế bơm proton (PPI) có cơ chế phân tử tác dụng là gì?",
    "options": [
      "Cạnh tranh thuận nghịch tại thụ thể histamin H2 trên màng đáy tế bào viền",
      "Trung hòa trực tiếp acid chlohydric trong lòng dạ dày",
      "Ức chế không hồi phục enzym H+/K+ ATPase ở tế bào viền thành dạ dày",
      "Kích thích thụ thể prostaglandin EP3 làm tăng tiết chất nhầy và HCO3-"
    ],
    "correct": 2,
    "explanation": "Thuốc PPI (Omeprazol, Esomeprazol, Pantoprazol...) gắn cộng hóa trị vào gốc cystein của enzym H+/K+ ATPase (bơm proton - bước chung cuối cùng của quá trình bài tiết HCl), ức chế không hồi phục enzym này.",
    "reference": "Sách Dược lý 2 tr. 104-105"
  },
  {
    "id": 65,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thời điểm thích hợp nhất trong ngày để uống thuốc ức chế bơm proton (PPI) đạt hiệu quả ức chế acid tối đa là khi nào?",
    "options": [
      "Uống vào lúc nửa đêm khi đang ngủ say",
      "Uống ngay sau khi ăn no xong",
      "Uống cùng lúc với bữa ăn trưa",
      "Trước bữa ăn sáng khoảng 30 đến 60 phút"
    ],
    "correct": 3,
    "explanation": "PPI cần được hoạt hóa trong môi trường acid tại tế bào viền khi các bơm proton đang hoạt động mạnh nhất. Bơm proton hoạt động nhiều nhất sau một đêm nhịn ăn khi bắt đầu tiếp nhận bữa ăn đầu tiên, do đó uống trước ăn sáng 30-60 phút là tối ưu.",
    "reference": "Sách Dược lý 2 tr. 105"
  },
  {
    "id": 66,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc kháng thụ thể H2 nào sau đây có tác dụng ức chế mạnh hệ enzym cytochrom P450 ở gan và có tác dụng phụ kháng androgen gây vú to ở nam giới?",
    "options": [
      "Ranitidin",
      "Cimetidin",
      "Nizatidin",
      "Famotidin"
    ],
    "correct": 1,
    "explanation": "Cimetidin là kháng H2 thế hệ đầu, ức chế mạnh CYP450 gây nhiều tương tác thuốc nguy hiểm, đồng thời gắn vào thụ thể androgen và ức chế chuyển hóa estradiol gây chứng vú to ở nam giới và bất lực.",
    "reference": "Sách Dược lý 2 tr. 103-104"
  },
  {
    "id": 67,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cơ chế bảo vệ niêm mạc dạ dày của Sucralfat là gì?",
    "options": [
      "Ức chế dây thần kinh phế vị làm giảm bài tiết acid tự do",
      "Ức chế thụ thể gastrin trên tế bào thành dạ dày",
      "Tiêu diệt trực tiếp vi khuẩn Helicobacter pylori nhờ gốc sulfat",
      "Trong môi trường acid dịch vị phân ly tạo gel dính bảo vệ che phủ ổ loét"
    ],
    "correct": 3,
    "explanation": "Trong môi trường acid pH < 4, Sucralfat trùng hợp tạo thành một lớp gel nhầy dính chặt vào đáy ổ loét (do ái lực với protein dịch rỉ ổ loét mang điện dương), ngăn cản acid và pepsin tiếp xúc phá hủy niêm mạc.",
    "reference": "Sách Dược lý 2 tr. 107"
  },
  {
    "id": 68,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Vì sao không nên uống Sucralfat đồng thời cùng lúc với thuốc kháng acid (Antacid) hoặc thuốc ức chế bơm proton (PPI)?",
    "options": [
      "Vì phối hợp sẽ gây tạo muối không tan dẫn tới tắc ruột cơ học",
      "Vì Sucralfat cần môi trường acid để hoạt hóa và tạo gel bảo vệ ổ loét",
      "Vì làm mất hoàn toàn hoạt tính của enzym H+/K+ ATPase",
      "Vì làm tăng hấp thu nhôm vào máu gây độc tính não cấp tính"
    ],
    "correct": 1,
    "explanation": "Sucralfat bắt buộc phải có môi trường acid (pH dịch vị dưới 4) để trùng hợp tạo gel dính bảo vệ. Nếu uống chung với antacid hoặc PPI, pH dạ dày tăng lên sẽ làm giảm hoặc mất tác dụng tạo gel của sucralfat. Cần uống cách xa ít nhất 1-2 giờ.",
    "reference": "Sách Dược lý 2 tr. 107"
  },
  {
    "id": 69,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Misoprostol là thuốc tương tự Prostaglandin E1 bảo vệ niêm mạc dạ dày, CHỐNG CHỈ ĐỊNH tuyệt đối cho đối tượng nào sau đây?",
    "options": [
      "Bệnh nhân đang sử dụng thuốc chống viêm không steroid NSAID",
      "Bệnh nhân đái tháo đường có biến chứng viêm dây thần kinh",
      "Người già bị viêm teo niêm mạc dạ dày do thiếu acid",
      "Phụ nữ đang mang thai vì gây co bóp tử cung mạnh dẫn đến sảy thai"
    ],
    "correct": 3,
    "explanation": "Misoprostol kích thích co bóp cơ trơn tử cung mạnh mẽ, có thể gây sảy thai hoặc sinh non, chống chỉ định tuyệt đối cho phụ nữ có thai (trên lâm sàng còn dùng trong sản khoa để gây chuyển dạ hoặc đình chỉ thai nghén).",
    "reference": "Sách Dược lý 2 tr. 108"
  },
  {
    "id": 70,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng phụ thường gặp nhất của muối Nhôm hydroxyd và muối Magnesi hydroxyd trong các chế phẩm kháng acid (Antacid) là gì?",
    "options": [
      "Nhôm gây táo bón, Magnesi gây tiêu chảy",
      "Cả hai chất đều chỉ gây táo bón nặng",
      "Nhôm gây tiêu chảy, Magnesi gây táo bón",
      "Cả hai chất đều chỉ gây tiêu chảy nặng"
    ],
    "correct": 0,
    "explanation": "Nhôm hydroxyd có tính làm săn se niêm mạc ruột và giảm nhu động nên gây táo bón. Magnesi hydroxyd giữ nước theo cơ chế thẩm thấu nên gây tiêu chảy. Do đó người ta thường phối hợp cả hai chất trong cùng chế phẩm (như Maalox) để bù trừ triệt tiêu tác dụng phụ này.",
    "reference": "Sách Dược lý 2 tr. 102"
  },
  {
    "id": 71,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Khi sử dụng các hợp chất chứa Bismuth (như Bismuth subsalicylat/subcitrat) trong phác đồ tiệt trừ H. pylori, dấu hiệu lành tính nào thường làm bệnh nhân hoang mang cần được tư vấn trước?",
    "options": [
      "Mồ hôi và nước mắt tiết ra có màu xanh huỳnh quang",
      "Phân có màu đen sẫm và niêm mạc lưỡi có thể bị nhuộm đen",
      "Nước tiểu đổi sang màu đỏ cam như nước ngọt xá xị",
      "Xuất hiện các ban đỏ dạng sởi ở hai cẳng bàn chân"
    ],
    "correct": 1,
    "explanation": "Bismuth khi vào đường tiêu hóa kết hợp với sulfid vi khuẩn tạo thành bismuth sulfid màu đen, làm cho phân và lưỡi có màu đen. Đây là hiện tượng hoàn toàn vô hại nhưng rất dễ nhầm với xuất huyết tiêu hóa trên, cần dặn dò bệnh nhân trước.",
    "reference": "Sách Dược lý 2 tr. 108"
  },
  {
    "id": 72,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc giảm ho trung ương nào sau đây không gây nghiện, không gây ức chế trung tâm hô hấp ở liều điều trị và ít gây táo bón hơn Codein?",
    "options": [
      "Dextromethorphan",
      "Pholcodin",
      "Methadon",
      "Morphin sulfat"
    ],
    "correct": 0,
    "explanation": "Dextromethorphan là dẫn chất morphin nhưng không tác dụng lên thụ thể opioid ở liều điều trị, có tác dụng ức chế trung tâm ho ở hành não tương đương codein nhưng không gây nghiện, không ức chế hô hấp và không gây táo bón.",
    "reference": "Sách Dược lý 2 tr. 358 & Dược lý hô hấp"
  },
  {
    "id": 73,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cơ chế làm tiêu chất nhầy (long đờm) của N-acetylcystein là gì?",
    "options": [
      "Kích thích tuyến tiết chất nhầy tăng tiết nước làm loãng đờm",
      "Cắt đứt các cầu nối disulfid -S-S- của chuỗi mucoprotein trong đờm",
      "Ức chế phản xạ ho tại thụ thể cảm giác ở niêm mạc thanh quản",
      "Kiềm hóa dịch phế quản làm tan rã các tế bào biểu mô bong tróc"
    ],
    "correct": 1,
    "explanation": "N-acetylcystein có nhóm sulfhydryl (-SH) tự do, có tác dụng cắt đứt các cầu nối disulfid (-S-S-) của chuỗi mucopolysaccharid và mucoprotein trong dịch nhầy phế quản, làm giảm độ quánh của đờm giúp tống đờm ra ngoài dễ dàng.",
    "reference": "Sách Dược lý 2 tr. 358-359"
  },
  {
    "id": 74,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc tiêu chất nhầy N-acetylcystein cần thận trọng hoặc chống chỉ định ở bệnh nhân có tiền sử bệnh lý nào do nguy cơ gây co thắt phế quản?",
    "options": [
      "Bệnh hen phế quản",
      "Đái tháo đường typ 1",
      "Sỏi thận calci oxalat",
      "Tăng huyết áp vô căn"
    ],
    "correct": 0,
    "explanation": "N-acetylcystein có thể khởi phát phản xạ co thắt phế quản cấp tính ở bệnh nhân có cơ địa tăng phản ứng phế quản, do đó phải rất thận trọng và theo dõi sát hoặc phối hợp thuốc giãn phế quản ở người có tiền sử hen phế quản.",
    "reference": "Sách Dược lý 2 tr. 359"
  },
  {
    "id": 75,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Nhóm thuốc giãn phế quản tác dụng ngắn (SABA) dạng hít khí dung như Salbutamol, Terbutalin có cơ chế tác dụng là gì?",
    "options": [
      "Phong bế thụ thể muscarinic M3 trên cơ trơn khí phế quản",
      "Ức chế không chọn lọc enzym phosphodiesterase nội bào",
      "Kích thích chọn lọc thụ thể beta-2 adrenergic trên cơ trơn phế quản",
      "Chẹn thụ thể leukotrien CysLT1 ở đường dẫn khí"
    ],
    "correct": 2,
    "explanation": "Salbutamol và Terbutalin kích thích chọn lọc thụ thể beta-2 adrenergic gắn với protein Gs, hoạt hóa adenylcyclase làm tăng AMP vòng nội bào, gây giãn cơ trơn phế quản nhanh chóng (chỉ sau vài phút), là thuốc cắt cơn hen hàng đầu.",
    "reference": "Sách Dược lý 2 tr. 16, 267"
  },
  {
    "id": 76,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Biện pháp quan trọng nhất cần hướng dẫn bệnh nhân sau khi sử dụng Corticoid dạng hít (ICS như Budesonid, Fluticason) để tránh tác dụng phụ tại chỗ là gì?",
    "options": [
      "Nằm đầu thấp trong 30 phút sau khi dùng thuốc",
      "Uống ngay một ly sữa nóng hoặc nước đường",
      "Súc miệng và họng kỹ bằng nước sạch rồi nhổ đi",
      "Nín thở liên tục trong vòng 5 phút sau khi hít"
    ],
    "correct": 2,
    "explanation": "Corticoid dạng hít lắng đọng ở niêm mạc họng có thể gây nấm miệng hầu (Candida albicans) và khàn tiếng. Biện pháp phòng tránh đơn giản và hiệu quả nhất là súc miệng, họng bằng nước sạch và nhổ ra ngay sau mỗi lần hít thuốc.",
    "reference": "Sách Dược lý 2 tr. 291"
  },
  {
    "id": 77,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Montelukast và Zafirlukast là thuốc điều trị dự phòng hen phế quản có cơ chế tác dụng nào?",
    "options": [
      "Phong bế kênh calci phụ thuộc điện thế trên tế bào mast",
      "Ức chế trực tiếp enzym 5-lipoxygenase 5-LOX",
      "Đối kháng chọn lọc tại thụ thể CysLT1 của leukotrien",
      "Ức chế gắn kháng thể IgE lên bề mặt dưỡng bào"
    ],
    "correct": 2,
    "explanation": "Montelukast và Zafirlukast là chất đối kháng chọn lọc trên thụ thể cysteinyl leukotrien CysLT1, ngăn cản tác dụng co thắt phế quản, phù nề và tăng tiết dịch do leukotrien LTC4, LTD4, LTE4 gây ra trong bệnh hen.",
    "reference": "Sách Dược lý 2 tr. 267, 344"
  },
  {
    "id": 78,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Theophylin là thuốc giãn phế quản dẫn xuất xanthin, trong lâm sàng cần hết sức thận trọng và theo dõi nồng độ thuốc trong máu vì lý do gì?",
    "options": [
      "Thuốc chuyển hóa tạo chất độc cyanid tích lũy trong gan",
      "Gây suy tủy xương không hồi phục chỉ sau một liều duy nhất",
      "Cửa sổ điều trị rất hẹp, nồng độ độc rất gần với nồng độ điều trị gây loạn nhịp tim và co giật",
      "Thuốc bị phá hủy 100% bởi dịch vị dạ dày nên khó kiểm soát hấp thu"
    ],
    "correct": 2,
    "explanation": "Theophylin có khoảng điều trị hẹp (10-20 mcg/mL). Khi vượt quá 20 mcg/mL dễ xuất hiện độc tính nghiêm trọng: nhịp nhanh thất, loạn nhịp tim nguy hiểm, kích động và co giật kháng trị.",
    "reference": "Sách Dược lý 2 tr. 16, 20"
  },
  {
    "id": 79,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cơ chế tác dụng dược lý của các thuốc kháng histamin H1 là gì?",
    "options": [
      "Phá hủy trực tiếp phân tử histamin tự do đang lưu hành trong máu",
      "Ức chế sự tổng hợp histamin từ acid amin histidin",
      "Đối kháng cạnh tranh thuận nghịch với histamin tại thụ thể H1",
      "Kích thích enzym histaminase làm tăng thoái hóa histamin"
    ],
    "correct": 2,
    "explanation": "Các thuốc kháng H1 có cấu trúc tương tự histamin, cạnh tranh thuận nghịch với histamin tại vị trí gắn của thụ thể H1, ngăn chặn các đáp ứng sinh lý bệnh do histamin gây ra (co thắt phế quản, tăng tính thấm mao mạch, ngứa).",
    "reference": "Sách Dược lý 2 tr. 344"
  },
  {
    "id": 80,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Các thuốc nào sau đây thuộc nhóm kháng histamin H1 thế hệ 1?",
    "options": [
      "Cimetidin, Ranitidin, Famotidin",
      "Promethazin, Clorpheniramin, Diphenhydramin",
      "Desloratadin, Levocetirizin, Ebastin",
      "Loratadin, Cetirizin, Fexofenadin"
    ],
    "correct": 1,
    "explanation": "Thế hệ 1 gồm: Promethazin, Clorpheniramin, Diphenhydramin, Hydroxyzin, Dimenhydrinat. Thế hệ 2 gồm: Loratadin, Cetirizin, Fexofenadin... Còn Cimetidin, Ranitidin là thuốc kháng thụ thể H2.",
    "reference": "Sách Dược lý 2 tr. 344-345"
  },
  {
    "id": 81,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Vì sao các thuốc kháng histamin H1 thế hệ 1 (như Promethazin, Clorpheniramin) lại gây buồn ngủ, an thần sâu và giảm khả năng tập trung?",
    "options": [
      "Tan nhiều trong lipid, dễ dàng vượt qua hàng rào máu não và phong bế thụ thể H1 ở trung ương",
      "Làm cạn kiệt lượng glucose cung cấp cho các tế bào thần kinh vỏ não",
      "Làm giảm dòng máu tưới lên bán cầu đại não do co mạch não",
      "Ức chế trực tiếp trung tâm điều hòa thân nhiệt ở vùng dưới đồi"
    ],
    "correct": 0,
    "explanation": "Các thuốc thế hệ 1 có tính thân dầu cao, qua được hàng rào máu não và ức chế các thụ thể H1 tại hệ thần kinh trung ương (vốn có vai trò duy trì sự thức tỉnh), dẫn đến tác dụng an thần, buồn ngủ, giảm phản xạ vận động.",
    "reference": "Sách Dược lý 2 tr. 345"
  },
  {
    "id": 82,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Ưu điểm vượt trội của các thuốc kháng histamin H1 thế hệ 2 (như Loratadin, Cetirizin, Fexofenadin) so với thế hệ 1 là gì?",
    "options": [
      "Có tác dụng diệt khuẩn mạnh trên các chủng vi khuẩn gram âm",
      "Có thể thay thế hoàn toàn adrenalin trong cấp cứu sốc phản vệ",
      "Tác dụng hạ sốt và giảm đau mạnh tương đương morphin",
      "Ít qua hàng rào máu não, hầu như không gây buồn ngủ và không có tác dụng kháng cholinergic"
    ],
    "correct": 3,
    "explanation": "Thuốc kháng H1 thế hệ 2 có tính thân nước hơn, liên kết protein cao hoặc là cơ chất của bơm P-gp nên rất ít qua hàng rào máu não, đồng thời có tính chọn lọc cao trên thụ thể H1 ngoại vi, không gây an thần ngủ gà và không có tác dụng phụ atropinic (khô miệng, bí tiểu).",
    "reference": "Sách Dược lý 2 tr. 344, 348"
  },
  {
    "id": 83,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng phụ kiểu atropin (kháng muscarinic cholinergic) của thuốc kháng H1 thế hệ 1 biểu hiện qua các triệu chứng nào?",
    "options": [
      "Khô miệng, nhìn mờ, giãn đồng tử, bí tiểu và táo bón",
      "Tăng tiết nước bọt, tiêu chảy, co đồng tử và vã mồ hôi",
      "Tụt huyết áp nặng kèm co giật toàn thân",
      "Hạ thân nhiệt đột ngột kèm nhịp tim chậm xoang"
    ],
    "correct": 0,
    "explanation": "Do phong bế thụ thể muscarinic, kháng H1 thế hệ 1 gây tác dụng phụ kháng cholinergic điển hình: khô miệng họng, giảm tiết mồ hôi, giãn đồng tử gây nhìn mờ, tăng nhãn áp, bí tiểu (nguy hiểm ở người phì đại tuyến tiền liệt), táo bón.",
    "reference": "Sách Dược lý 2 tr. 345, 347"
  },
  {
    "id": 84,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hai thuốc kháng histamin H1 thế hệ 2 trước đây là Astemizol và Terfenadin đã bị rút khỏi thị trường hoặc hạn chế sử dụng nghiêm ngặt vì lý do nguy hiểm nào?",
    "options": [
      "Gây hội chứng ly giải biểu bì hoại tử nghiêm trọng",
      "Gây suy tủy xương gây mất toàn bộ tế bào máu ngoại vi",
      "Gây suy gan cấp hoại tử tế bào gan ồ ạt",
      "Kéo dài khoảng QT trên ECG và gây loạn nhịp thất xoắn đỉnh khi dùng cùng thuốc ức chế CYP3A4"
    ],
    "correct": 3,
    "explanation": "Terfenadin và Astemizol ức chế kênh kali hERG ở tim gây kéo dài khoảng QT. Khi dùng chung với các thuốc ức chế CYP3A4 (như Ketoconazol, Erythromycin...), nồng độ thuốc mẹ tăng vọt gây loạn nhịp thất nguy hiểm (xoắn đỉnh) dẫn đến đột tử.",
    "reference": "Sách Dược lý 2 tr. 348-349"
  },
  {
    "id": 85,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Fexofenadin có đặc điểm xuất xứ dược động học nổi bật nào?",
    "options": [
      "Là tiền chất cần enzym gan thủy phân mới có hoạt tính",
      "Là chất chuyển hóa có hoạt tính của Terfenadin nhưng không có độc tính gây loạn nhịp tim",
      "Là đồng phân quang học tả tuyền của Clorpheniramin",
      "Được sinh tổng hợp trực tiếp từ cấu trúc của Promethazin"
    ],
    "correct": 1,
    "explanation": "Fexofenadin chính là chất chuyển hóa acid carboxylic có hoạt tính của terfenadin. Do không chẹn kênh kali tim nên Fexofenadin giữ nguyên hoạt tính kháng dị ứng mạnh mà hoàn toàn an toàn cho tim, không gây xoắn đỉnh.",
    "reference": "Sách Dược lý 2 tr. 344, 349"
  },
  {
    "id": 86,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Metronidazol có phổ tác dụng và cơ chế kháng vi sinh vật nào sau đây?",
    "options": [
      "Ức chế không hồi phục enzym ADN gyrase",
      "Gắn vào tiểu phần 30S ribosom gây đọc sai mã mARN",
      "Ức chế tổng hợp vách tế bào peptidoglycan của vi khuẩn ái khí",
      "Khử nhóm nitro bởi protein vận chuyển electron tạo gốc tự do phá hủy chuỗi ADN của amip và vi khuẩn kỵ khí"
    ],
    "correct": 3,
    "explanation": "Nhóm 5-nitroimidazol (Metronidazol, Tinidazol) xâm nhập vào tế bào amip hoặc vi khuẩn kỵ khí, nhóm nitro bị enzym khử tạo các gốc tự do có độc tính cao làm đứt gãy sợi ADN và tiêu diệt tế bào ký sinh trùng.",
    "reference": "Sách Dược lý 2 tr. 207-208"
  },
  {
    "id": 87,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân đang điều trị bằng Metronidazol bắt buộc phải kiêng tuyệt đối đồ uống có cồn (rượu, bia) vì lý do gì?",
    "options": [
      "Gây đông máu nội mạch rải rác dẫn đến tắc mạch phổi",
      "Gây phản ứng tích tụ acetaldehyd kiểu Disulfiram với triệu chứng đỏ bừng mặt, nôn nao, tụt huyết áp",
      "Làm mất hoàn toàn tác dụng diệt amip của thuốc trong lòng ruột",
      "Gây xuất huyết tiêu hóa ồ ạt do thủng đại tràng"
    ],
    "correct": 1,
    "explanation": "Metronidazol ức chế enzym aldehyd dehydrogenase ở gan, làm cho cồn (ethanol) không thể chuyển hóa thành acid acetic mà dừng lại ở acetaldehyd. Nồng độ acetaldehyd tăng cao gây phản ứng kiểu disulfiram: bốc hỏa, nhức đầu dữ dội, buồn nôn, hạ huyết áp, đánh trống ngực.",
    "reference": "Sách Dược lý 2 tr. 208"
  },
  {
    "id": 88,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Để diệt triệt để thể kén amip không triệu chứng trong lòng ruột (người lành mang kén làm lây lan mầm bệnh), thuốc nào được ưu tiên lựa chọn?",
    "options": [
      "Cloroquin phosphat",
      "Emetin hydroclorid",
      "Metronidazol liều cao",
      "Diloxanid furoat"
    ],
    "correct": 3,
    "explanation": "Diloxanid furoat là thuốc diệt amip tiếp xúc trong lòng ruột tác dụng rất mạnh trên thể amip không triệu chứng và thể kén ở đại tràng, thường dùng đơn độc cho người lành mang kén hoặc phối hợp sau đợt điều trị amip xâm lấn bằng metronidazol.",
    "reference": "Sách Dược lý 2 tr. 209-210"
  },
  {
    "id": 89,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Các thuốc tẩy giun nhóm Benzimidazol (như Albendazol, Mebendazol) có cơ chế tác dụng chính là gì?",
    "options": [
      "Kích thích giải phóng acetylcholin gây co giật toàn thân giun",
      "Gây hủy hoại trực tiếp lớp vỏ cutin bên ngoài của giun trưởng thành",
      "Ức chế trùng hợp tubulin thành các vi quản và ức chế thu nhận glucose của giun",
      "Phong bế thụ thể GABA làm giun tăng trương lực cơ"
    ],
    "correct": 2,
    "explanation": "Albendazol và Mebendazol gắn đặc hiệu vào protein beta-tubulin của giun, ngăn chặn sự trùng hợp thành các vi quản tế bào (microtubules), dẫn đến ức chế quá trình vận chuyển chất dinh dưỡng và ức chế hấp thu glucose, làm cạn kiệt nguồn glycogen khiến giun bị chết đói.",
    "reference": "Sách Dược lý 2 tr. 215-216"
  },
  {
    "id": 90,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Khi cần điều trị ấu trùng sán dải heo ở não (Cysticercosis) hoặc nang sán dải chó (Echinococcus) ở mô sâu, việc uống Albendazol cùng với bữa ăn nhiều chất béo nhằm mục đích gì?",
    "options": [
      "Giúp thuốc phân hủy nhanh tại tá tràng để ngấm vào dịch tụy",
      "Tránh kích ứng niêm mạc dạ dày gây nôn mửa",
      "Ngăn cản thuốc thải trừ qua đường mật để không độc gan",
      "Tăng sinh khả dụng và độ hấp thu của thuốc vào máu lên gấp 4 đến 5 lần"
    ],
    "correct": 3,
    "explanation": "Khi tẩy giun trong lòng ruột, cần uống lúc đói để thuốc ít hấp thu. Nhưng khi điều trị ấu trùng sán ở mô sâu (não, gan, phổi), uống albendazol cùng bữa ăn giàu lipid sẽ làm tăng độ tan và hấp thu vào máu gấp 4-5 lần để đạt nồng độ điều trị ở mô tổn thương.",
    "reference": "Sách Dược lý 2 tr. 216"
  },
  {
    "id": 91,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc nào sau đây được coi là thuốc lựa chọn hàng đầu (đầu bảng) để điều trị hầu hết các bệnh sán lá (sán lá gan nhỏ, sán lá phổi, sán lá ruột) và sán máng?",
    "options": [
      "Metronidazol",
      "Pyrantel pamoat",
      "Praziquantel",
      "Piperazin"
    ],
    "correct": 2,
    "explanation": "Praziquantel là thuốc điều trị sán phổ rộng hiệu quả nhất hiện nay, đặc trị sán máng (Schistosoma), các loại sán lá (trừ sán lá gan lớn Fasciola), và các loại sán dây.",
    "reference": "Sách Dược lý 2 tr. 219"
  },
  {
    "id": 92,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cơ chế phân tử giúp Praziquantel tiêu diệt sán là gì?",
    "options": [
      "Ức chế tổng hợp ARN thông tin ở nhân tế bào sán",
      "Ức chế chuỗi chuyền electron ở ty thể của sán",
      "Làm tăng tính thấm của màng tế bào sán đối với ion Canxi Ca2+ gây co cứng và tổn thương vỏ sán",
      "Phong bế thụ thể histamin làm teo các giác bám của sán"
    ],
    "correct": 2,
    "explanation": "Praziquantel làm tăng tính thấm màng tế bào ký sinh trùng với ion Ca2+, gây dòng calci ồ ạt tràn vào làm cơ sán co cứng kéo dài và làm phồng rộp, nứt vỡ lớp vỏ bảo vệ, khiến sán bị hệ miễn dịch của vật chủ tấn công tiêu diệt.",
    "reference": "Sách Dược lý 2 tr. 219"
  },
  {
    "id": 93,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc nào là lựa chọn đặc hiệu hàng đầu được Bộ Y tế khuyến cáo trong điều trị bệnh sán lá gan lớn (Fasciola hepatica / Fasciola gigantica)?",
    "options": [
      "Pyrantel pamoat",
      "Diethylcarbamazin",
      "Triclabendazol",
      "Metronidazol"
    ],
    "correct": 2,
    "explanation": "Sán lá gan lớn (Fasciola) đề kháng tự nhiên với Praziquantel. Thuốc đặc hiệu duy nhất và hiệu quả nhất được Bộ Y tế phê duyệt là Triclabendazol (biệt dược Egaten).",
    "reference": "Sách Dược lý 2 tr. 220"
  },
  {
    "id": 94,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Diethylcarbamazin (DEC) là thuốc điều trị đặc hiệu căn nguyên bệnh ký sinh trùng nào?",
    "options": [
      "Bệnh giun tóc gây sa trực tràng",
      "Bệnh giun chỉ bạch huyết",
      "Bệnh lỵ amip cấp tính ngoài ruột",
      "Bệnh sán dây bò trưởng thành"
    ],
    "correct": 1,
    "explanation": "Diethylcarbamazin (DEC) là thuốc đặc hiệu lựa chọn hàng đầu để tiêu diệt ấu trùng và giun chỉ trưởng thành gây bệnh giun chỉ bạch huyết (Wuchereria bancrofti, Brugia malayi).",
    "reference": "Sách Dược lý 2 tr. 217"
  },
  {
    "id": 95,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Khi điều trị giun chỉ bằng Diethylcarbamazin (DEC), phản ứng dị ứng rầm rộ (phản ứng Mazzotti) gồm sốt cao, nổi mề đay, sưng đau hạch bạch huyết xuất hiện do nguyên nhân nào?",
    "options": [
      "Do kháng nguyên giải phóng ồ ạt từ xác ấu trùng giun chỉ bị tiêu diệt",
      "Do vi khuẩn cộng sinh trong lòng giun xâm nhập vào máu gây nhiễm trùng huyết",
      "Do thuốc tích lũy gây suy tạng và ngộ độc tế bào cấp tính",
      "Do bản thân thuốc DEC kích thích trực tiếp giải phóng histamin từ tế bào mast"
    ],
    "correct": 0,
    "explanation": "Phản ứng Mazzotti xuất hiện vài giờ sau liều DEC đầu tiên là do xác của hàng triệu ấu trùng giun chỉ chết đột ngột giải phóng protein lạ và dị nguyên vào tuần hoàn, kích hoạt đáp ứng miễn dịch - dị ứng mạnh của cơ thể.",
    "reference": "Sách Dược lý 2 tr. 217-218"
  },
  {
    "id": 96,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Ivermectin có cơ chế tác dụng dược lý chủ yếu nào?",
    "options": [
      "Ức chế không thuận nghịch chuỗi hô hấp tế bào ở ty thể",
      "Kích thích mở kênh ion Cl- qua trung gian thụ thể glutamate-gated và tăng giải phóng GABA",
      "Kháng acid folic làm ức chế tổng hợp purin của ký sinh trùng",
      "Tác dụng tương tự nicotin gây rung giật cơ liên tục"
    ],
    "correct": 1,
    "explanation": "Ivermectin gắn chọn lọc với kênh ion Cl- cổng glutamate ở dây thần kinh và cơ của giun, đồng thời làm tăng giải phóng chất dẫn truyền ức chế GABA, gây ưu cực hóa màng tế bào làm giun bị liệt cơ mềm và chết.",
    "reference": "Sách Dược lý 2 tr. 218"
  },
  {
    "id": 97,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Nhóm thuốc Statin (như Atorvastatin, Simvastatin, Rosuvastatin) có cơ chế phân tử làm hạ lipid máu là gì?",
    "options": [
      "Ức chế cạnh tranh enzym Hydroxymethylglutaryl-CoA reductase",
      "Ức chế thụ thể vận chuyển cholesterol NPC1L1 ở biểu mô ruột non",
      "Gắn kết acid mật trong ruột làm tăng bài xuất sterol qua phân",
      "Kích hoạt thụ thể nhân PPAR-alpha ở tế bào gan"
    ],
    "correct": 0,
    "explanation": "Statin ức chế enzym HMG-CoA reductase (enzym kiểm soát tốc độ tổng hợp cholesterol ở gan), làm giảm tổng hợp cholesterol nội bào, kích thích tế bào gan tăng tổng hợp thụ thể LDL trên bề mặt, làm tăng dọn dẹp LDL-C khỏi máu.",
    "reference": "Sách Dược lý 2 tr. 94-95"
  },
  {
    "id": 98,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Nhóm thuốc nào có hiệu quả làm giảm nồng độ LDL-Cholesterol mạnh nhất và chứng minh giảm rõ rệt tỷ lệ biến cố tử vong tim mạch trong thử nghiệm lâm sàng?",
    "options": [
      "Nhóm Resin gắn acid mật",
      "Nhóm Statin",
      "Nhóm Fibrat",
      "Nhóm dẫn xuất acid nicotinic"
    ],
    "correct": 1,
    "explanation": "Statin là nhóm thuốc hạ LDL-C mạnh nhất (giảm từ 20-60% tùy liều và hoạt lực) và là nhóm thuốc duy nhất có bằng chứng lâm sàng vững chắc nhất về giảm tử vong tim mạch và đột quỵ ở bệnh nhân xơ vữa động mạch.",
    "reference": "Sách Dược lý 2 tr. 95"
  },
  {
    "id": 99,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Vì sao các Statin có thời gian bán thải ngắn (như Simvastatin, Lovastatin, Pravastatin) được khuyến cáo nên uống vào buổi tối trước khi đi ngủ?",
    "options": [
      "Vì thuốc chỉ hấp thu tốt khi cơ thể ở trạng thái nằm ngủ",
      "Quá trình sinh tổng hợp cholesterol nội sinh ở gan diễn ra mạnh nhất vào ban đêm",
      "Để tránh hiện tượng thuốc bị ánh sáng mặt trời quang hóa làm giảm hoạt tính",
      "Để giảm tác dụng phụ gây kích ứng và đau rát dạ dày"
    ],
    "correct": 1,
    "explanation": "Enzym HMG-CoA reductase hoạt động tổng hợp cholesterol nội sinh mạnh nhất vào khoảng từ nửa đêm đến sáng sớm. Do đó các statin tác dụng ngắn cần uống vào buổi tối để nồng độ đỉnh trùng với thời điểm enzym hoạt động tối đa.",
    "reference": "Sách Dược lý 2 tr. 95"
  },
  {
    "id": 100,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng không mong muốn nghiêm trọng nhất của Statin trên cơ vân cần theo dõi chỉ số CK (Creatine Kinase) là gì?",
    "options": [
      "Viêm cơ hoại tử và tiêu cơ vân cấp giải phóng myoglobin gây suy thận cấp",
      "Liệt mềm tứ chi vĩnh viễn do thoái hóa myelin thần kinh cơ",
      "Tăng trương lực cơ gây co rút uốn ván kiểu ngộ độc strychnin",
      "Mất hoàn toàn trương lực cơ vòng thực quản dưới gây trào ngược"
    ],
    "correct": 0,
    "explanation": "Độc tính nguy hiểm nhất của statin là tiêu cơ vân (rhabdomyolysis). Cơ bị hủy hoại giải phóng ồ ạt enzym creatin kinase (CK tăng gấp > 10 lần giới hạn trên) và myoglobin vào máu, myoglobin làm tắc ống thận gây suy thận cấp đái ít và nước tiểu màu nâu đỏ xá xị.",
    "reference": "Sách Dược lý 2 tr. 96"
  },
  {
    "id": 101,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Nguy cơ tổn thương cơ vân và tiêu cơ vân tăng vọt lên gấp nhiều lần khi phối hợp thuốc Statin với nhóm thuốc nào sau đây?",
    "options": [
      "Thuốc ức chế men chuyển Enalapril",
      "Fibrat",
      "Thuốc chẹn thụ thể Beta Bisoprolol",
      "Resin gắn acid mật"
    ],
    "correct": 1,
    "explanation": "Gemfibrozil ức chế quá trình liên hợp glucuronic của statin và ức chế protein vận chuyển OATP1B1 đưa statin vào gan, làm tăng nồng độ statin tự do trong máu lên nhiều lần, làm bùng phát nguy cơ hủy cơ vân cấp tính.",
    "reference": "Sách Dược lý 2 tr. 96"
  },
  {
    "id": 102,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Nhóm thuốc Fibrat (như Fenofibrat, Gemfibrozil) có cơ chế phân tử là gì?",
    "options": [
      "Chủ vận thụ thể nhân PPAR-alpha kích thích tổng hợp enzym Lipoprotein lipase LPL",
      "Ức chế quá trình oxy hóa acid béo ở màng ty thể",
      "Ức chế men HMG-CoA reductase ở microsom gan",
      "Phong bế thụ thể PCSK9 trên bề mặt tế bào gan"
    ],
    "correct": 0,
    "explanation": "Fibrat gắn vào thụ thể nhân PPAR-alpha, điều hòa biểu hiện gen làm tăng tổng hợp lipoprotein lipase (LPL) và apolipoprotein A-I, A-II, đồng thời giảm tổng hợp Apo C-III, làm thoái giáng mạnh các hạt giàu triglycerid (VLDL).",
    "reference": "Sách Dược lý 2 tr. 92-93"
  },
  {
    "id": 103,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Chỉ định ưu tiên hàng đầu của nhóm thuốc Fibrat (Fenofibrat) trên lâm sàng là trường hợp nào?",
    "options": [
      "Tăng Cholesterol máu đơn thuần có LDL-C tăng cao",
      "Dự phòng nhồi máu cơ tim ở bệnh nhân chỉ tăng nhẹ LDL-C",
      "Hạ huyết áp tư thế kèm đau đầu mạn tính",
      "Tăng Triglycerid máu nặng để phòng ngừa viêm tụy cấp"
    ],
    "correct": 3,
    "explanation": "Fibrat có tác dụng hạ triglycerid rất mạnh (giảm 30-50%). Khi nồng độ triglycerid vượt ngưỡng 500 mg/dL (5,6 mmol/L), nguy cơ viêm tụy cấp tăng vọt, do đó chỉ định ưu tiên số 1 lúc này là dùng Fibrat để kéo triglycerid xuống nhanh.",
    "reference": "Sách Dược lý 2 tr. 93"
  },
  {
    "id": 104,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Resin gắn acid mật (Cholestyramin, Colestipol) có cơ chế tác dụng hạ lipid máu như thế nào?",
    "options": [
      "Kích thích tuyến mật tăng bài tiết cholesterol nguyên vẹn ra ngoài",
      "Ức chế trực tiếp enzym vận chuyển lipid ở biểu mô ruột non",
      "Trao đổi ion gắn với acid mật trong ruột tạo phức không tan đào thải qua phân, thúc đẩy gan chuyển hóa cholesterol thành acid mật",
      "Gây độc trực tiếp làm hoại tử các tế bào mỡ dưới da"
    ],
    "correct": 2,
    "explanation": "Cholestyramin là nhựa trao đổi anion không hấp thu qua ruột, gắn chặt với acid mật tạo phức không tan bài xuất theo phân, cắt đứt chu trình gan - ruột. Gan buộc phải tăng tiêu thụ cholesterol nội sinh để tổng hợp acid mật bù lại, làm giảm cholesterol máu.",
    "reference": "Sách Dược lý 2 tr. 91-92"
  },
  {
    "id": 105,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng không mong muốn thường gặp khi dùng Acid Nicotinic (Niacin / Vitamin B3) liều cao là bốc hỏa đỏ bừng mặt và ngứa ngáy dữ dội. Biện pháp hữu hiệu để giảm phản ứng này là gì?",
    "options": [
      "Uống đồng thời cùng một cốc nước đá thật lạnh",
      "Tiêm thuốc kháng sinh phổ rộng trước mỗi liều thuốc",
      "Uống thuốc vào lúc bụng đói cồn cào lúc sáng sớm",
      "Uống một liều Aspirin trước khi dùng Niacin khoảng 30 phút"
    ],
    "correct": 3,
    "explanation": "Hiện tượng đỏ bừng mặt và ngứa do niacin gây ra là do thuốc kích thích tế bào sừng giải phóng prostaglandin D2 và E2 gây giãn mạch dưới da. Uống aspirin (ức chế tổng hợp prostaglandin) trước khi dùng niacin 30 phút sẽ triệt tiêu hiệu quả phản ứng này.",
    "reference": "Sách Dược lý 2 tr. 98"
  },
  {
    "id": 106,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Ezetimibe làm giảm hấp thu cholesterol từ lòng ruột non nhờ ức chế protein vận chuyển nào?",
    "options": [
      "Dipeptidyl peptidase-4 DPP-4",
      "P-glycoprotein",
      "Niemann-Pick C1-Like 1 NPC1L1",
      "Sodium-glucose linked transporter 2 SGLT2"
    ],
    "correct": 2,
    "explanation": "Ezetimibe định vị tại diềm bàn chải ruột non và ức chế chọn lọc protein vận chuyển sterol NPC1L1, ngăn chặn hấp thu cholesterol ngoại sinh từ thức ăn và cholesterol nội sinh từ dịch mật vào tế bào biểu mô ruột.",
    "reference": "Sách Dược lý 2 tr. 99"
  },
  {
    "id": 107,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc chống sốt rét nào sau đây diệt được thể ngủ (hypnozoite) trong gan của Plasmodium vivax và Plasmodium ovale để chống sốt rét tái phát xa?",
    "options": [
      "Cloroquin",
      "Artesunat",
      "Quinin",
      "Primaquin"
    ],
    "correct": 3,
    "explanation": "Chỉ duy nhất Primaquin (dẫn xuất 8-aminoquinolin) có tác dụng tiêu diệt thể ngủ (hypnozoite) nằm trong tế bào gan của P. vivax và P. ovale, do đó là thuốc bắt buộc phải dùng để điều trị tiệt căn chống tái phát xa.",
    "reference": "Sách Dược lý 2 tr. 200"
  },
  {
    "id": 108,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trước khi chỉ định Primaquin để điều trị tiệt căn sốt rét do P. vivax, bắt buộc phải làm xét nghiệm sàng lọc gì cho bệnh nhân?",
    "options": [
      "Định lượng men gan AST và ALT",
      "Định lượng hoạt độ enzym Glucose-6-Phosphat Dehydrogenase G6PD",
      "Điện giải đồ máu toàn phần",
      "Xét nghiệm chức năng đông máu cơ bản"
    ],
    "correct": 1,
    "explanation": "Primaquin là chất oxy hóa mạnh. Ở bệnh nhân thiếu men G6PD, hồng cầu không tạo đủ NADPH để khử glutathion, khi dùng primaquin sẽ làm màng hồng cầu bị oxy hóa vỡ ồ ạt gây tan máu cấp tính, đái ra huyết sắc tố, suy thận cấp nguy hiểm.",
    "reference": "Sách Dược lý 2 tr. 201"
  },
  {
    "id": 109,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc chống sốt rét nào có nguồn gốc chiết xuất từ cây Thanh hao hoa vàng (Artemisia annua) và có tác dụng cắt cơn sốt rét nhanh nhất hiện nay?",
    "options": [
      "Mefloquin",
      "Quinin hydroclorid",
      "Cloroquin phosphat",
      "Dẫn xuất Artemisinin"
    ],
    "correct": 3,
    "explanation": "Dẫn xuất Artemisinin (Artesunat, Artemether, Dihydroartemisinin) chiết xuất từ cây Thanh hao hoa vàng, là nhóm thuốc diệt thể vô tính trong hồng cầu nhanh nhất, làm giảm mật độ ký sinh trùng nhanh hơn bất kỳ nhóm thuốc nào khác.",
    "reference": "Sách Dược lý 2 tr. 193-194"
  },
  {
    "id": 110,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Vì sao Tổ chức Y tế Thế giới (WHO) và Bộ Y tế Việt Nam nghiêm cấm sử dụng đơn trị liệu bằng dẫn xuất Artemisinin đường uống?",
    "options": [
      "Vì uống đơn chất sẽ gây suy tủy xương cấp tính",
      "Để ngăn ngừa nguy cơ ký sinh trùng sốt rét phát triển đột biến kháng thuốc nhanh chóng",
      "Vì thuốc đơn chất gây quái thai ở tất cả các giai đoạn của thai kỳ",
      "Vì thuốc đơn chất không có khả năng cắt cơn sốt rét trên lâm sàng"
    ],
    "correct": 1,
    "explanation": "Artemisinin có thời gian bán thải rất ngắn. Nếu dùng đơn trị liệu, nồng độ thuốc giảm nhanh tạo điều kiện cho ký sinh trùng tồn dư sống sót và đột biến kháng thuốc. Do đó bắt buộc phải dùng dạng phối hợp ACT (Artemisinin-based Combination Therapy).",
    "reference": "Sách Dược lý 2 tr. 195"
  },
  {
    "id": 111,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong cấp cứu sốt rét ác tính thể não có rối loạn tri giác, phác đồ điều trị ưu tiên lựa chọn hàng đầu hiện nay là gì?",
    "options": [
      "Fansidar tiêm bắp sâu",
      "Cloroquin dạng viên uống qua ống thông dạ dày",
      "Primaquin dạng viên đặt hậu môn",
      "Artesunat tiêm tĩnh mạch"
    ],
    "correct": 3,
    "explanation": "Theo hướng dẫn của Bộ Y tế, đối với sốt rét ác tính ở người lớn và trẻ em, thuốc lựa chọn hàng đầu là Artesunat tiêm tĩnh mạch (liều giờ 0, 12, 24 và sau đó mỗi ngày một liều cho đến khi bệnh nhân tỉnh táo uống được).",
    "reference": "Sách Dược lý 2 tr. 193-195"
  },
  {
    "id": 112,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Khi truyền tĩnh mạch Quinin điều trị sốt rét nặng, biến chứng chuyển hóa cấp tính nguy hiểm thường gặp cần kiểm tra đường huyết thường xuyên là gì?",
    "options": [
      "Hạ kali máu nặng kèm kiềm hô hấp cấp",
      "Hạ đường huyết nghiêm trọng do quinin kích thích tế bào beta tụy tăng tiết insulin",
      "Tăng acid uric máu cấp tính gây cơn gút cấp",
      "Tăng đường huyết đột ngột gây toan ceton do đái tháo đường"
    ],
    "correct": 1,
    "explanation": "Quinin là chất kích thích mạnh sự giải phóng insulin từ các tế bào beta của đảo tụy, gây biến chứng hạ glucose huyết rất nặng nề, đặc biệt ở phụ nữ có thai và bệnh nhân sốt rét ác tính. Cần truyền dung dịch glucose ưu trương và theo dõi đường huyết liên tục.",
    "reference": "Sách Dược lý 2 tr. 197-198"
  },
  {
    "id": 113,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng không mong muốn trên mắt đặc trưng khi sử dụng Cloroquin liều cao hoặc điều trị kéo dài là gì?",
    "options": [
      "Lắng đọng sắc tố ở võng mạc gây bệnh võng mạc hình mắt bò",
      "Làm teo dây thần kinh thị giác một bên mắt",
      "Gây đục thủy tinh thể do tăng nhãn áp góc mở",
      "Gây xuất huyết tiền phòng tự phát"
    ],
    "correct": 0,
    "explanation": "Cloroquin có ái lực rất cao với các tế bào chứa sắc tố melanin ở màng bồ đào và biểu mô sắc tố võng mạc. Dùng lâu ngày thuốc tích lũy gây tổn thương điểm vàng với hình ảnh đặc trưng 'hình mắt bò' (bull's eye), gây mù lòa không hồi phục.",
    "reference": "Sách Dược lý 2 tr. 199"
  },
  {
    "id": 114,
    "subject": "duocly2",
    "chapter": "KTGHP",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân nam 62 tuổi có tiền sử suy tim mạn tính kèm rung nhĩ nhanh và đang dùng Digoxin. Bác sĩ chỉ định thêm Furosemid liều cao để rút dịch phù. Nguy cơ tương tác thuốc nguy hiểm nhất có thể xảy ra là gì?",
    "options": [
      "Furosemid gây hạ kali máu làm tăng vọt độc tính của Digoxin dẫn đến loạn nhịp thất chết người",
      "Furosemid làm mất hoàn toàn tác dụng trợ tim của Digoxin trên nút xoang",
      "Digoxin làm tăng đào thải furosemid qua ống thận gây phù phổi cấp tái phát",
      "Furosemid làm tăng nồng độ kali máu gây liệt cơ hô hấp cấp tính"
    ],
    "correct": 0,
    "explanation": "Furosemid là thuốc lợi tiểu thải kali mạnh. Khi nồng độ K+ máu hạ xuống, vị trí gắn K+ trên enzym Na+-K+ ATPase bị bỏ trống, làm tăng đột biến sự gắn kết của Digoxin vào enzym này, đẩy bệnh nhân vào tình trạng nhiễm độc digitalis cấp với nguy cơ rung thất tử vong.",
    "reference": "Sách Dược lý 2 tr. 16, 83"
  },
  {
    "id": 115,
    "subject": "duocly2",
    "chapter": "KTGHP",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân nam 55 tuổi bị tăng huyết áp kèm tiền sử hen phế quản nặng và bệnh gút mạn tính. Nhóm thuốc hạ áp nào sau đây CHỐNG CHỈ ĐỊNH sử dụng cho bệnh nhân này?",
    "options": [
      "Thuốc chẹn thụ thể ARB và thuốc đối kháng canxi nhóm DHP",
      "Thuốc chẹn beta không chọn lọc và thuốc lợi tiểu Thiazid",
      "Thuốc ức chế men chuyển ACEI và thuốc kháng H1 thế hệ 2",
      "Thuốc giãn mạch trực tiếp và thuốc kháng acid chứa nhôm"
    ],
    "correct": 1,
    "explanation": "Thuốc chẹn beta không chọn lọc (như Propranolol) chẹn thụ thể beta-2 gây co thắt phế quản bùng phát cơn hen cấp ác tính; Thuốc lợi tiểu Thiazid cạnh tranh đào thải acid uric ở ống thận làm tăng acid uric máu gây khởi phát cơn gút cấp.",
    "reference": "Sách Dược lý 2 tr. 47, 57, 76"
  },
  {
    "id": 116,
    "subject": "duocly2",
    "chapter": "KTGHP",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân nữ 45 tuổi bị loét dạ dày tá tràng có H. pylori (+). Bác sĩ kê phác đồ 3 thuốc: PPI + Clarithromycin + Amoxicillin. Vai trò tiên quyết của thuốc PPI trong phác đồ này là gì?",
    "options": [
      "Nâng pH dịch vị lên trên 5 để bảo vệ kháng sinh khỏi bị phân hủy và giúp kháng sinh phát huy tác dụng diệt khuẩn tối đa",
      "PPI bao bọc tạo lớp màng che chắn ngăn không cho vi khuẩn bám vào tế bào biểu mô",
      "PPI kích thích bài tiết gastrin để huy động bạch cầu đa nhân tới ổ loét",
      "PPI trực tiếp tiêu diệt vi khuẩn H. pylori mà không cần đến kháng sinh"
    ],
    "correct": 0,
    "explanation": "Clarithromycin và Amoxicillin rất kém bền và giảm hoạt lực mạnh trong môi trường acid dịch vị pH thấp. PPI nâng cao pH dạ dày, vừa giúp kháng sinh bền vững đạt nồng độ diệt khuẩn cao, vừa kích thích H. pylori chuyển sang trạng thái phân chia nhạy cảm với kháng sinh.",
    "reference": "Sách Dược lý 2 tr. 105, 109"
  },
  {
    "id": 117,
    "subject": "duocly2",
    "chapter": "KTGHP",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cặp phối hợp thuốc nào sau đây là TƯƠNG TÁC CHỐNG CHỈ ĐỊNH TUYỆT ĐỐI do gây hạ huyết áp sâu kịch phát dẫn đến trụy mạch?",
    "options": [
      "Amlodipin và Thuốc ức chế men chuyển Enalapril",
      "Spironolacton và Thuốc lợi tiểu Thiazid",
      "Nitroglycerin và Thuốc ức chế PDE-5",
      "Metronidazol và Thuốc kháng acid Magnesi hydroxyd"
    ],
    "correct": 2,
    "explanation": "Nitrat hữu cơ cung cấp NO làm tăng sinh cGMP, trong khi Sildenafil ngăn chặn sự thoái giáng của cGMP. Lượng cGMP tích tụ cực lớn làm giãn toàn bộ hệ thống động tĩnh mạch, gây tụt huyết áp nghiêm trọng không đáp ứng hồi sức dẫn đến nhồi máu cơ tim hoặc tử vong.",
    "reference": "Sách Dược lý 2 tr. 44"
  },
  {
    "id": 118,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Các thuốc Glucocorticoid (như Prednisolon, Dexamethason) có tác dụng chống viêm mạnh nhờ cơ chế phân tử chủ yếu nào?",
    "options": [
      "Phong bế thụ thể histamin H1 và muscarinic M3 tại màng tế bào",
      "Kích thích trực tiếp tế bào lympho B tăng sinh kháng thể IgG",
      "Kích thích tổng hợp lipocortin-1 ức chế enzym phospholipase A2 và ức chế yếu tố phiên mã NF-kB",
      "Ức chế trực tiếp enzym HMG-CoA reductase tại tế bào gan"
    ],
    "correct": 2,
    "explanation": "Glucocorticoid gắn vào thụ thể nội bào GR, kích thích dịch mã tổng hợp protein lipocortin-1 (annexin-1), chất này ức chế phospholipase A2, làm ngăn chặn giải phóng acid arachidonic (tiền chất tạo prostaglandin và leukotrien). Ngoài ra GC ức chế NF-kB ngăn tổng hợp các cytokin gây viêm.",
    "reference": "Sách Dược lý 2 tr. 285-286"
  },
  {
    "id": 119,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Vì sao trong điều trị mạn tính bằng Glucocorticoid, nguyên tắc vàng là nên uống toàn bộ liều thuốc trong ngày vào một lần duy nhất lúc 8 giờ sáng?",
    "options": [
      "Để dạ dày tiết nhiều acid giúp hấp thu thuốc tốt nhất",
      "Tránh hiện tượng thuốc bị đào thải qua thận trong giấc ngủ trưa",
      "Trùng với đỉnh bài tiết cortisol sinh lý tự nhiên của cơ thể để giảm thiểu ức chế trục dưới đồi - tuyến yên - thượng thận",
      "Vì enzym gan chỉ chuyển hóa corticoid vào buổi sáng sớm"
    ],
    "correct": 2,
    "explanation": "Nồng độ cortisol nội sinh trong cơ thể bài tiết theo nhịp ngày đêm, cao nhất vào khoảng 6-8 giờ sáng và thấp nhất vào nửa đêm. Uống thuốc lúc 8 giờ sáng bắt chước nhịp sinh học tự nhiên, giúp trục HPA ít bị ức chế ngược nhất, hạn chế tối đa nguy cơ teo vỏ thượng thận.",
    "reference": "Sách Dược lý 2 tr. 284, 289"
  },
  {
    "id": 120,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hậu quả nghiêm trọng đe dọa tính mạng có thể xảy ra nếu bệnh nhân đang dùng Glucocorticoid liều cao kéo dài đột ngột ngừng thuốc là gì?",
    "options": [
      "Nhiễm toan ceton do đái tháo đường mất bù",
      "Tăng canxi máu cấp tính gây ngộ độc tim",
      "Suy vỏ thượng thận cấp tính dẫn đến trụy tim mạch và tụt huyết áp",
      "Bùng phát cơn tăng huyết áp kịch phát kèm xuất huyết não"
    ],
    "correct": 2,
    "explanation": "Dùng glucocorticoid ngoại sinh liều cao kéo dài ức chế bài tiết ACTH của tuyến yên, làm vỏ thượng thận bị teo lại. Nếu ngừng thuốc đột ngột, tuyến thượng thận bị teo không kịp sản xuất cortisol bù đắp, dẫn đến suy thượng thận cấp: tụt huyết áp nặng, mất nước, rối loạn điện giải và tử vong nếu không cấp cứu bù hydrocortison.",
    "reference": "Sách Dược lý 2 tr. 289"
  },
  {
    "id": 121,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tập hợp các triệu chứng: mặt tròn như mặt trăng, bướu mỡ sau gáy, rậm lông, da mỏng dễ bầm tím, tăng đường huyết và loãng xương đặc trưng cho hội chứng nào khi lạm dụng corticoid?",
    "options": [
      "Hội chứng Addison",
      "Hội chứng Basedow",
      "Hội chứng Cushing",
      "Hội chứng Sheehan"
    ],
    "correct": 2,
    "explanation": "Lạm dụng glucocorticoid kéo dài gây hội chứng Cushing do thuốc (cường vỏ thượng thận giả tạo) với biểu hiện tái phân bố mỡ đặc trưng (mặt tròn, bướu trâu), dị hóa protein (teo cơ chi, da mỏng, vết rạn da màu tím), loãng xương và đái tháo đường.",
    "reference": "Sách Dược lý 2 tr. 288"
  },
  {
    "id": 122,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc kháng giáp trạng tổng hợp Propylthiouracil (PTU) có cơ chế tác dụng nào?",
    "options": [
      "Phá hủy vĩnh viễn các nang tuyến giáp bằng tia bức xạ beta",
      "Tăng thoái hóa thyroxin tự do trong tuần hoàn máu",
      "Cạnh tranh trực tiếp với hormon TSH tại thụ thể màng tế bào giáp",
      "Ức chế enzym thyroid peroxidase TPO và ức chế chuyển T4 thành T3 ở mô ngoại vi"
    ],
    "correct": 3,
    "explanation": "Propylthiouracil (PTU) ức chế enzym peroxidase của tuyến giáp, ngăn chặn quá trình oxy hóa iodid và iod hóa tyrosin. Ngoài ra ưu điểm riêng của PTU là ức chế enzym deiodinase ở ngoại vi, ngăn cản chuyển T4 thành dạng T3 có hoạt tính mạnh hơn.",
    "reference": "Sách Dược lý 2 tr. 305"
  },
  {
    "id": 123,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc kháng giáp trạng tổng hợp nào được ưu tiên lựa chọn hàng đầu cho phụ nữ có thai bị cường giáp trong 3 tháng đầu thai kỳ?",
    "options": [
      "Propylthiouracil PTU",
      "Methimazol",
      "Dung dịch Lugol liều cao",
      "Iod phóng xạ I-131"
    ],
    "correct": 0,
    "explanation": "Trong 3 tháng đầu thai kỳ, PTU liên kết mạnh với protein huyết tương nên ít qua nhau thai hơn Methimazol và ít nguy cơ gây dị tật bẩm sinh (bất sản da đầu, teo thực quản). Do đó PTU là lựa chọn ưu tiên trong tam cá nguyệt thứ nhất.",
    "reference": "Sách Dược lý 2 tr. 306"
  },
  {
    "id": 124,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng không mong muốn hiếm gặp nhưng cực kỳ nguy hiểm của nhóm thuốc kháng giáp trạng tổng hợp (PTU, Methimazol) cần dặn bệnh nhân đi khám ngay khi bị sốt, đau họng là gì?",
    "options": [
      "Suy thận cấp vô niệu do sỏi urat",
      "Tăng nhãn áp góc đóng cấp tính",
      "Viêm tụy cấp thể hoại tử",
      "Mất bạch cầu hạt"
    ],
    "correct": 3,
    "explanation": "Biến chứng nguy hiểm nhất của thionamid là ức chế tủy xương gây mất bạch cầu hạt (bạch cầu trung tính giảm dưới 500/mm3), làm cơ thể mất khả năng chống đỡ nhiễm trùng. Bệnh nhân sốt cao, đau họng, loét miệng cần ngừng thuốc ngay và đếm công thức máu.",
    "reference": "Sách Dược lý 2 tr. 306"
  },
  {
    "id": 125,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Desmopressin là dẫn xuất tổng hợp của Vasopressin (ADH) có tác dụng chống bài niệu vượt trội, được chỉ định trong bệnh lý nào?",
    "options": [
      "Bệnh đái tháo nhạt trung ương và chứng đái dầm ban đêm ở trẻ em",
      "Đái tháo đường typ 1 phụ thuộc insulin",
      "Hội chứng tăng tiết ADH không thích hợp SIADH",
      "Suy tim sung huyết kèm phù phổi cấp"
    ],
    "correct": 0,
    "explanation": "Desmopressin tác dụng chọn lọc rất cao trên thụ thể V2 ở ống góp thận, làm tăng tái hấp thu nước mà ít tác dụng co mạch (thụ thể V1), là thuốc đặc trị bệnh đái tháo nhạt nguồn gốc trung ương và chứng đái dầm ban đêm ở trẻ em.",
    "reference": "Sách Dược lý 2 tr. 284"
  },
  {
    "id": 126,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tamoxifen là thuốc điều biến thụ thể estrogen chọn lọc (SERM) được sử dụng rộng rãi trong điều trị bệnh lý nào?",
    "options": [
      "Bệnh Basedow kháng thuốc kháng giáp",
      "Hội chứng buồng trứng đa nang thể béo phì",
      "Ung thư tuyến tiền liệt di căn xương",
      "Ung thư vú có thụ thể estrogen dương tính ER+"
    ],
    "correct": 3,
    "explanation": "Tamoxifen đối kháng cạnh tranh với estrogen tại thụ thể estrogen ở mô tuyến vú, ngăn cản estrogen kích thích sự tăng sinh của tế bào ung thư vú nhạy cảm với hormon (ER+).",
    "reference": "Sách Dược lý 2 tr. 250, 319"
  },
  {
    "id": 127,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Loại insulin nào sau đây duy nhất được phép sử dụng qua đường tiêm hoặc truyền tĩnh mạch trong cấp cứu hôn mê toan ceton do đái tháo đường?",
    "options": [
      "Insulin thường",
      "Insulin Detemir",
      "Insulin NPH",
      "Insulin Glargin"
    ],
    "correct": 0,
    "explanation": "Chỉ có Insulin thường (Regular Insulin / Insulin hòa tan tinh khiết) là dạng dung dịch trong suốt, tác dụng nhanh, được phép tiêm hoặc truyền tĩnh mạch trong cấp cứu hôn mê tăng áp lực thẩm thấu hoặc hôn mê toan ceton đái tháo đường. Các loại insulin đục hoặc có biến đổi chuỗi không được truyền TM.",
    "reference": "Sách Dược lý 2 tr. 295"
  },
  {
    "id": 128,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Các analog insulin tác dụng cực nhanh (Lispro, Aspart, Glulisine) có ưu điểm vượt trội nào so với Regular insulin?",
    "options": [
      "Không bao giờ gây tác dụng phụ hạ đường huyết dù dùng quá liều",
      "Có thể uống bằng đường tiêu hóa mà không bị enzym phân hủy",
      "Tác dụng kéo dài liên tục suốt 48 giờ chỉ cần tiêm 1 lần mỗi tuần",
      "Khởi phát tác dụng sau 10-15 phút, tiêm ngay sát trước bữa ăn giúp kiểm soát đường huyết sau ăn tốt hơn"
    ],
    "correct": 3,
    "explanation": "Do cấu trúc biến đổi ngăn cản sự tự trùng hợp thành dạng hexamer, Lispro và Aspart phân ly ngay thành monomer, hấp thu rất nhanh đạt đỉnh sau 30-60 phút, cho phép bệnh nhân tiêm ngay sát trước khi ăn hoặc ngay sau khi ăn.",
    "reference": "Sách Dược lý 2 tr. 295-296"
  },
  {
    "id": 129,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Insulin nền tác dụng kéo dài như Glargin (Lantus) có đặc điểm dược động học nổi bật nào?",
    "options": [
      "Hòa tan ở pH acid, khi tiêm dưới da kết tủa vi thể giải phóng chậm đều đặn suốt 24 giờ không có đỉnh nhọn",
      "Chỉ dùng để kiểm soát đường huyết sau các bữa ăn thịnh soạn",
      "Gây hạ đường huyết đột ngột sau tiêm 2 giờ",
      "Dung dịch có màu đục như sữa cần lắc đều trước khi tiêm"
    ],
    "correct": 0,
    "explanation": "Glargin được pha chế ở pH 4. Khi tiêm vào mô dưới da có pH sinh lý 7,4, phân tử kết tủa tạo thành các vi tinh thể tan rất chậm, phóng thích insulin ổn định liên tục suốt 24 giờ mà không có đỉnh nồng độ nhọn, giảm thiểu nguy cơ hạ đường huyết ban đêm.",
    "reference": "Sách Dược lý 2 tr. 296"
  },
  {
    "id": 130,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Biện pháp phòng ngừa hiện tượng loạn dưỡng mô mỡ (teo mỡ hoặc phì đại mỡ) tại vị trí tiêm insulin cho bệnh nhân là gì?",
    "options": [
      "Thoa cồn iod nồng độ cao trước và sau khi tiêm thuốc",
      "Chườm nước đá lạnh lên vị trí tiêm ngay sau khi rút kim",
      "Tiêm liên tục vào một vị trí cố định duy nhất mỗi ngày",
      "Luân chuyển đều đặn vị trí tiêm giữa các vùng bụng, đùi, cánh tay"
    ],
    "correct": 3,
    "explanation": "Tiêm nhiều lần vào cùng một vị trí sẽ kích thích mỡ tại chỗ phì đại hoặc gây teo mỡ làm giảm hấp thu insulin. Hướng dẫn bệnh nhân luân chuyển vị trí tiêm (vòng tròn quanh rốn, mặt trước đùi, mặt ngoài cánh tay) là biện pháp phòng ngừa chuẩn mực.",
    "reference": "Sách Dược lý 2 tr. 296"
  },
  {
    "id": 131,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Nhóm thuốc Sulfonylurea (như Gliclazid, Glimepirid, Glibenclamid) hạ đường huyết theo cơ chế nào?",
    "options": [
      "Ức chế enzym dipeptidyl peptidase-4 làm tăng nồng độ GLP-1",
      "Ức chế trực tiếp quá trình phân giải glycogen tại cơ vân",
      "Gắn vào thụ thể SUR1 làm đóng kênh K+ phụ thuộc ATP trên tế bào beta đảo tụy, kích thích giải phóng insulin",
      "Ức chế kênh đồng vận chuyển natri-glucose SGLT2 tại ống lượn gần"
    ],
    "correct": 2,
    "explanation": "Sulfonylurea gắn vào tiểu phần SUR1 làm đóng kênh K+ nhạy cảm ATP, gây khử cực màng tế bào beta đảo tụy, mở kênh Ca2+ phụ thuộc điện áp, ion Ca2+ tràn vào gây xuất bào giải phóng các bọc chứa insulin vào máu.",
    "reference": "Sách Dược lý 2 tr. 297"
  },
  {
    "id": 132,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Metformin (nhóm Biguanid) là thuốc đầu tay trong điều trị đái tháo đường typ 2 có cơ chế hạ đường huyết chủ yếu là gì?",
    "options": [
      "Gắn với protein vận chuyển mỡ làm tăng bài tiết mỡ qua nước tiểu",
      "Kích thích trực tiếp các tế bào beta đảo tụy tiết thêm insulin",
      "Hoạt hóa enzym AMPK làm giảm sản xuất glucose ở gan và tăng nhạy cảm của mô ngoại vi với insulin",
      "Phá hủy hormon glucagon ngay trong máu tĩnh mạch cửa"
    ],
    "correct": 2,
    "explanation": "Metformin hoạt hóa AMPK, ức chế quá trình tân tạo đường (gluconeogenesis) và phân giải glycogen ở tế bào gan, đồng thời cải thiện sự nhạy cảm của mô ngoại biên (cơ, mỡ) với insulin. Vì không kích thích tụy tiết insulin, Metformin không gây hạ đường huyết đơn độc và không làm tăng cân.",
    "reference": "Sách Dược lý 2 tr. 298-299"
  },
  {
    "id": 133,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng không mong muốn hiếm gặp nhưng có tỷ lệ tử vong cao nhất của Metformin là gì?",
    "options": [
      "Thủng loét hành tá tràng do tăng tiết acid",
      "Hôn mê hạ đường huyết sâu không hồi phục",
      "Nhiễm toan acid lactic",
      "Viêm gan hoại tử tế bào gan cấp"
    ],
    "correct": 2,
    "explanation": "Metformin ức chế chuyển hóa lactat tại ty thể tế bào gan. Khi dùng ở bệnh nhân suy thận nặng, suy gan, suy hô hấp, suy tim hoặc thiếu máu mô, lactat sẽ tích lũy gây toan acid lactic máu nặng nề với tỷ lệ tử vong lên tới 50%. Chống chỉ định khi mức lọc cầu thận eGFR < 30 mL/phút.",
    "reference": "Sách Dược lý 2 tr. 299"
  },
  {
    "id": 134,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Acarbose có cơ chế tác dụng làm giảm đường huyết sau bữa ăn nhờ ức chế enzym nào?",
    "options": [
      "Monoamin oxidase ở tận cùng thần kinh",
      "Phosphodiesterase typ 5 ở cơ trơn mạch máu",
      "Alpha-glucosidase ở bờ bàn chải ruột non",
      "Angiotensin converting enzyme ở nội mô mao mạch phổi"
    ],
    "correct": 2,
    "explanation": "Acarbose ức chế cạnh tranh thuận nghịch enzym alpha-glucosidase (maltase, isomaltase, sucrase) ở niêm mạc ruột non, làm chậm quá trình giáng hóa carbohydrat phức tạp thành monosaccharid (glucose), làm chậm hấp thu glucose và làm phẳng đỉnh đường huyết sau ăn.",
    "reference": "Sách Dược lý 2 tr. 300"
  },
  {
    "id": 135,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cơ chế chống đông máu của Heparin tiêu chuẩn (Heparin không phân đoạn - UFH) là gì?",
    "options": [
      "Hoạt hóa plasminogen thành plasmin làm tiêu cục máu đông",
      "Ức chế không hồi phục thụ thể P2Y12 trên màng tiểu cầu",
      "Gắn với Antithrombin III AT-III làm tăng tốc độ ức chế Thrombin và Yếu tố Xa lên hàng nghìn lần",
      "Ức chế enzym epoxide reductase ở gan làm giảm tổng hợp prothrombin"
    ],
    "correct": 2,
    "explanation": "Heparin gắn vào Antithrombin III làm biến đổi cấu hình không gian của AT-III, làm tăng tốc độ gắn và ức chế các enzym đông máu hoạt hóa (chủ yếu là Thrombin IIa và Yếu tố Xa) lên khoảng 1000 lần.",
    "reference": "Sách Dược lý 2 tr. 115-116"
  },
  {
    "id": 136,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Xét nghiệm cận lâm sàng thường quy được sử dụng để theo dõi hiệu quả và chỉnh liều khi điều trị bằng Heparin không phân đoạn (UFH) là gì?",
    "options": [
      "Thời gian thromboplastin một phần hoạt hóa",
      "Chỉ số bình thường hóa quốc tế INR",
      "Thời gian Prothrombin PT",
      "Số lượng tiểu cầu đơn thuần"
    ],
    "correct": 0,
    "explanation": "Heparin tiêu chuẩn tác động lên con đường đông máu nội sinh nên được theo dõi bằng thời gian aPTT. Mục tiêu điều trị thường duy trì aPTT gấp 1,5 đến 2,5 lần chứng. Đối với kháng vitamin K (Warfarin) thì mới theo dõi bằng PT/INR.",
    "reference": "Sách Dược lý 2 tr. 116"
  },
  {
    "id": 137,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Chất giải độc đặc hiệu (antidote) dùng để trung hòa tác dụng và cầm máu khi quá liều Heparin là gì?",
    "options": [
      "Protamin sulfat",
      "Naloxon hydroclorid",
      "Acid tranexamic",
      "Vitamin K1"
    ],
    "correct": 0,
    "explanation": "Protamin sulfat là một protein base mang điện tích dương mạnh, khi vào máu sẽ tạo phức hợp ion trung hòa bền vững với phân tử heparin mang điện tích âm mạnh, làm mất hoàn toàn hoạt tính chống đông của heparin.",
    "reference": "Sách Dược lý 2 tr. 117"
  },
  {
    "id": 138,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Ưu điểm vượt trội của Heparin trọng lượng phân tử thấp (LMWH như Enoxaparin) so với Heparin tiêu chuẩn (UFH) là gì?",
    "options": [
      "Có thể uống bằng đường tiêu hóa với hiệu lực 100%",
      "Sinh khả dụng cao, thời gian bán thải dài, đáp ứng liều dự đoán được nên không cần theo dõi xét nghiệm aPTT thường quy",
      "Không bao giờ gây biến chứng chảy máu dù dùng bất kỳ liều nào",
      "Tác dụng chọn lọc 100% trên thrombin IIa mà không ảnh hưởng yếu tố Xa"
    ],
    "correct": 1,
    "explanation": "LMWH có chuỗi polysaccharid ngắn hơn, ít gắn không đặc hiệu vào protein huyết tương và tế bào nội mô nên có sinh khả dụng dưới da > 90%, thời gian bán thải kéo dài (tiêm 1-2 lần/ngày), đáp ứng liều rất ổn định nên không cần xét nghiệm đông máu thường quy.",
    "reference": "Sách Dược lý 2 tr. 117-118"
  },
  {
    "id": 139,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc chống đông máu đường uống nhóm kháng Vitamin K (như Warfarin, Acenocoumarol) ngăn cản sự tổng hợp ở gan của các yếu tố đông máu nào?",
    "options": [
      "Yếu tố II, VII, IX và X",
      "Yếu tố III và Yếu tố IV",
      "Yếu tố XII, XIII và Prekallikrein",
      "Yếu tố I, V, VIII và XI"
    ],
    "correct": 0,
    "explanation": "Vitamin K là coenzym cần thiết để carboxyl hóa các gốc glutamat của các yếu tố đông máu II, VII, IX, X và protein C, protein S ở gan. Kháng vitamin K ức chế enzym epoxide reductase làm gan không tổng hợp được các yếu tố đông máu có hoạt tính này.",
    "reference": "Sách Dược lý 2 tr. 119"
  },
  {
    "id": 140,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Chỉ số INR (International Normalized Ratio) tối ưu cần duy trì ở bệnh nhân dùng Warfarin điều trị rung nhĩ phòng ngừa đột quỵ là bao nhiêu?",
    "options": [
      "3,5 đến 5,0",
      "2,0 đến 3,0",
      "0,8 đến 1,2",
      "6,0 đến 8,0"
    ],
    "correct": 1,
    "explanation": "Đối với phần lớn các chỉ định điều trị chống đông bằng kháng vitamin K (rung nhĩ, huyết khối tĩnh mạch sâu, thuyên tắc phổi), khoảng INR mục tiêu điều trị an toàn và hiệu quả là 2,0 - 3,0. (Riêng van tim nhân tạo cơ học có thể từ 2,5 - 3,5).",
    "reference": "Sách Dược lý 2 tr. 120"
  },
  {
    "id": 141,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Aspirin liều thấp (75 - 150 mg/ngày) có tác dụng chống kết tập tiểu cầu kéo dài suốt đời sống của tiểu cầu nhờ cơ chế nào?",
    "options": [
      "Acetyl hóa không thuận nghịch enzym Cyclooxygenase-1 COX-1 làm ức chế tổng hợp Thromboxan A2",
      "Ức chế enzym phosphodiesterase làm tăng thoái hóa AMP vòng",
      "Ức chế thụ thể thrombin PAR-1",
      "Phong bế thụ thể Glycoprotein IIb/IIIa trên màng tiểu cầu"
    ],
    "correct": 0,
    "explanation": "Aspirin acetyl hóa không hồi phục vị trí Serin 529 của enzym COX-1, ức chế hoàn toàn việc tạo Thromboxan A2 (chất co mạch và gây ngưng tập tiểu cầu mạnh). Do tiểu cầu không có nhân để tổng hợp protein mới, tác dụng này kéo dài suốt đời sống tiểu cầu (7-10 ngày).",
    "reference": "Sách Dược lý 2 tr. 122"
  },
  {
    "id": 142,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Clopidogrel (Plavix) có cơ chế chống ngưng tập tiểu cầu là gì?",
    "options": [
      "Phá hủy cấu trúc màng phospholipid của tiểu cầu",
      "Ức chế chọn lọc và không hồi phục thụ thể P2Y12 của ADP trên bề mặt tiểu cầu",
      "Chẹn kênh calci làm giảm nồng độ calci tự do trong tiểu cầu",
      "Ức chế enzym tổng hợp prostaglandin E1"
    ],
    "correct": 1,
    "explanation": "Clopidogrel là dẫn chất thienopyridin, sau khi chuyển hóa qua gan tạo chất chuyển hóa có hoạt tính gắn cộng hóa trị và ức chế vĩnh viễn thụ thể P2Y12 của ADP trên màng tiểu cầu, ngăn cản hoạt hóa phức hợp GP IIb/IIIa.",
    "reference": "Sách Dược lý 2 tr. 123"
  },
  {
    "id": 143,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Các thuốc tiêu sợi huyết (như Streptokinase, Alteplase rt-PA) làm tan cục huyết khối tắc mạch nhờ cơ chế nào?",
    "options": [
      "Ức chế enzym thromboplastin mô ở vị trí tổn thương",
      "Gắn kết ion Canxi làm mất hoạt tính của prothrombin",
      "Bao bọc tiểu cầu ngăn tiểu cầu kết dính vào thành mạch",
      "Hoạt hóa chuyển Plasminogen thành Plasmin để giáng hóa và phân cắt mạng lưới Fibrin"
    ],
    "correct": 3,
    "explanation": "Các thuốc tiêu huyết khối tác động như các chất hoạt hóa plasminogen (PA), chuyển plasminogen nội sinh thành plasmin (một enzym tiêu protein), plasmin cắt nhỏ mạng lưới sợi fibrin làm tan rã cục máu đông, tái thông dòng máu mạch vành hoặc mạch não.",
    "reference": "Sách Dược lý 2 tr. 125-126"
  },
  {
    "id": 144,
    "subject": "duocly2",
    "chapter": "Thuốc chữa thiếu máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc chữa thiếu máu do thiếu sắt thường dùng dạng muối sắt hóa trị mấy để dễ hấp thu qua niêm mạc tá tràng nhất?",
    "options": [
      "Sắt hóa trị sáu",
      "Sắt hóa trị hai Fe2+",
      "Sắt hóa trị ba Fe3+",
      "Sắt nguyên tố kim loại"
    ],
    "correct": 1,
    "explanation": "Sắt chỉ được hấp thu chủ yếu ở tá tràng và đầu hỗng tràng dưới dạng ion sắt hai (Fe2+). Vitamin C (acid ascorbic) có tính khử mạnh giúp duy trì sắt ở dạng Fe2+ nên làm tăng hấp thu sắt khi uống cùng.",
    "reference": "Sách Dược lý 2 tr. 127"
  },
  {
    "id": 145,
    "subject": "duocly2",
    "chapter": "Thuốc chữa thiếu máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Khi bệnh nhân bị ngộ độc sắt cấp tính (nồng độ sắt huyết thanh trên 500 mcg/dL) có biểu hiện nôn mửa, xuất huyết tiêu hóa và trụy mạch, thuốc tạo phức gắp sắt giải độc đặc hiệu là gì?",
    "options": [
      "Dimercaprol BAL",
      "Calci dinatri edetat",
      "Penicillamin",
      "Deferoxamin"
    ],
    "correct": 3,
    "explanation": "Deferoxamin gắn chọn lọc với ion Fe3+ tự do và ion sắt trong ferritin/hemosiderin tạo phức hợp chelat ferrioxamin tan trong nước và bài xuất an toàn qua nước tiểu (làm nước tiểu có màu đỏ cam), là thuốc giải độc đặc hiệu khi ngộ độc sắt.",
    "reference": "Sách Dược lý 2 tr. 127"
  },
  {
    "id": 146,
    "subject": "duocly2",
    "chapter": "Thuốc chữa thiếu máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thiếu máu hồng cầu to ác tính (bệnh Biermer) kèm tổn thương thoái hóa kết hợp tủy sống có nguyên nhân chính là do thiếu chất nào sau đây?",
    "options": [
      "Pyridoxin",
      "Acid folic",
      "Vitamin B12",
      "Sắt nguyên tố"
    ],
    "correct": 2,
    "explanation": "Thiếu Vitamin B12 (thường do dạ dày teo không tiết yếu tố nội Castle để hấp thu B12 ở hồi tràng) dẫn tới rối loạn phân chia tế bào máu (hồng cầu to) và suy giảm tổng hợp myelin thần kinh gây tổn thương sừng sau và bên tủy sống (hội chứng thoái hóa tủy kết hợp).",
    "reference": "Sách Dược lý 2 tr. 128"
  },
  {
    "id": 147,
    "subject": "duocly2",
    "chapter": "Thuốc chữa thiếu máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Phụ nữ chuẩn bị mang thai và trong 3 tháng đầu thai kỳ cần được bổ sung Acid folic hàng ngày nhằm mục đích phòng ngừa dị tật bẩm sinh quan trọng nào ở thai nhi?",
    "options": [
      "Dị tật còn ống động mạch và đảo gốc động mạch",
      "Dị tật teo hẹp thực quản bẩm sinh",
      "Bệnh xơ nang tụy di truyền",
      "Dị tật khuyết tật ống thần kinh"
    ],
    "correct": 3,
    "explanation": "Bổ sung Acid folic (400 mcg/ngày) trước khi thụ thai và trong giai đoạn đầu hình thành phôi thai giúp đóng kín ống thần kinh đúng thời điểm, giảm tới 70% nguy cơ dị tật ống thần kinh bẩm sinh (nứt đốt sống, thoát vị màng não tủy).",
    "reference": "Sách Dược lý 2 tr. 129"
  },
  {
    "id": 148,
    "subject": "duocly2",
    "chapter": "Thuốc chữa thiếu máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Erythropoietin (EPO - Epoetin alfa) được chỉ định chủ yếu để điều trị thiếu máu trong trường hợp nào?",
    "options": [
      "Bệnh đa hồng cầu nguyên phát",
      "Thiếu máu huyết tán do bất đồng nhóm máu ABO",
      "Thiếu máu mạn tính do suy thận giai đoạn cuối và thiếu máu do hóa trị ung thư",
      "Thiếu máu mất máu cấp tính do tai nạn giao thông"
    ],
    "correct": 2,
    "explanation": "Erythropoietin là hormon glycoprotein sinh ra 90% từ tế bào quanh ống thận. Khi thận suy mạn tính, lượng EPO sụt giảm nghiêm trọng dẫn tới thiếu máu đẳng sắc đẳng bào nặng. Bổ sung EPO tái tổ hợp là biện pháp điều trị đặc hiệu số 1.",
    "reference": "Sách Dược lý 2 tr. 130"
  },
  {
    "id": 149,
    "subject": "duocly2",
    "chapter": "Vitamin",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Triệu chứng ban đầu điển hình của tình trạng thiếu hụt Vitamin A là gì?",
    "options": [
      "Chảy máu chân răng và xuất huyết dưới màng xương",
      "Viêm dây thần kinh ngoại biên kèm tê phù hai chân",
      "Viêm da đối xứng ở các vùng hở tiếp xúc với ánh sáng",
      "Bệnh quáng gà và khô giác mạc"
    ],
    "correct": 3,
    "explanation": "Vitamin A (Retinol) tham gia vào chu trình thị giác tạo thành Rhodopsin ở tế bào que của võng mạc giúp mắt nhìn trong điều kiện ánh sáng yếu. Thiếu vitamin A gây triệu chứng quáng gà sớm nhất, tiếp theo là khô kết mạc, xuất hiện vệt Bitot và nhuyễn biểu mô giác mạc.",
    "reference": "Sách Dược lý 2 tr. 322-323"
  },
  {
    "id": 150,
    "subject": "duocly2",
    "chapter": "Vitamin",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Dạng chuyển hóa có hoạt tính sinh học mạnh nhất của Vitamin D trong cơ thể sau khi được hydroxyl hóa tại gan và thận là dạng nào?",
    "options": [
      "1,25-dihydroxycholecalciferol",
      "25-hydroxycholecalciferol",
      "Cholecalciferol",
      "Ergocalciferol"
    ],
    "correct": 0,
    "explanation": "Cholecalciferol (D3) được hydroxyl hóa lần 1 ở gan thành 25-(OH)-D3 (calcidiol), sau đó được enzym 1-alpha-hydroxylase ở ống thận hydroxyl hóa lần 2 tạo thành 1,25-(OH)2-D3 (calcitriol). Calcitriol là hormon có hoạt tính mạnh nhất điều hòa hấp thu canxi và phospho.",
    "reference": "Sách Dược lý 2 tr. 326"
  },
  {
    "id": 151,
    "subject": "duocly2",
    "chapter": "Vitamin",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh Beriberi (tê phù) thể ướt gây suy tim ứ huyết và thể khô gây viêm đa dây thần kinh có nguyên nhân do thiếu hụt vitamin nào?",
    "options": [
      "Vitamin B2",
      "Vitamin B12",
      "Vitamin B6",
      "Vitamin B1"
    ],
    "correct": 3,
    "explanation": "Vitamin B1 là coenzym thiamin pyrophosphat (TPP) tham gia khử carboxyl oxy hóa các acid cetonic. Thiếu B1 gây ứ trệ acid pyruvic và acid lactic trong mô dẫn tới bệnh Beriberi (thể khô: viêm đa dây thần kinh; thể ướt: giãn mạch ngoại biên, suy tim sung huyết) và hội chứng não Wernicke.",
    "reference": "Sách Dược lý 2 tr. 329-330"
  },
  {
    "id": 152,
    "subject": "duocly2",
    "chapter": "Vitamin",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh Pellagra với tam chứng kinh điển '3D': Viêm da (Dermatitis), Tiêu chảy (Diarrhea) và Sa sút trí tuệ (Dementia) xuất hiện khi cơ thể thiếu hụt vitamin nào?",
    "options": [
      "Vitamin B3",
      "Vitamin A",
      "Vitamin C",
      "Vitamin B1"
    ],
    "correct": 0,
    "explanation": "Vitamin PP (Acid nicotinic / Nicotinamid / Vitamin B3) cấu tạo nên hai coenzym quan trọng NAD+ và NADP+. Thiếu hụt vitamin PP gây bệnh Pellagra đặc trưng bởi 3 dấu hiệu kinh điển: Viêm da vùng hở đối xứng, Tiêu chảy kéo dài, và Rối loạn tâm thần/sa sút trí tuệ.",
    "reference": "Sách Dược lý 2 tr. 331-332"
  },
  {
    "id": 153,
    "subject": "duocly2",
    "chapter": "Vitamin",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Khi điều trị bệnh lao bằng kháng sinh Isoniazid (INH), bác sĩ bắt buộc phải kê phối hợp Vitamin B6 (Pyridoxin) nhằm mục đích gì?",
    "options": [
      "Phòng ngừa và điều trị viêm dây thần kinh ngoại biên do INH cạnh tranh và làm tăng thải B6",
      "Tăng cường khả năng xâm nhập của INH vào trong hang lao",
      "Bảo vệ tế bào gan khỏi tác dụng phụ gây viêm gan hoại tử của rifampicin",
      "Kích thích tủy xương tăng sinh hồng cầu bù trừ thiếu máu"
    ],
    "correct": 0,
    "explanation": "Isoniazid (INH) có cấu trúc hóa học tương tự pyridoxin, tạo phức hydrazon với pyridoxal phosphat làm bất hoạt và tăng đào thải pyridoxin qua nước tiểu, dẫn đến viêm dây thần kinh ngoại biên (tê bì đầu ngón tay ngón chân). Bổ sung vitamin B6 hàng ngày giúp triệt tiêu hoàn toàn tác dụng phụ này.",
    "reference": "Sách Dược lý 2 tr. 185, 333"
  },
  {
    "id": 154,
    "subject": "duocly2",
    "chapter": "Vitamin",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Sử dụng Vitamin C (Acid ascorbic) liều cao kéo dài trên 1g mỗi ngày có nguy cơ dẫn tới biến chứng tiết niệu nào?",
    "options": [
      "Xơ hóa cầu thận tiến triển nhanh",
      "Lắng đọng sỏi Calci Oxalat ở đường tiết niệu",
      "Đái tháo nhạt do tổn thương thụ thể V2",
      "Gây suy thận cấp do tích tụ tinh thể urat"
    ],
    "correct": 1,
    "explanation": "Một phần vitamin C trong cơ thể chuyển hóa thành acid oxalic. Dùng vitamin C liều cao kéo dài làm toan hóa nước tiểu và tăng bài tiết oxalat niệu, làm kết tủa với canxi tạo thành sỏi thận calci oxalat.",
    "reference": "Sách Dược lý 2 tr. 337-338"
  },
  {
    "id": 155,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Acyclovir là thuốc kháng virus nhóm tương tự nucleosid có cơ chế tác dụng chọn lọc cao trên virus Herpes nhờ yếu tố nào?",
    "options": [
      "Được phosphoryl hóa lần đầu tiên bởi enzym Thymidine kinase đặc hiệu của virus Herpes",
      "Ức chế enzym phiên mã ngược của tế bào người",
      "Gắn trực tiếp và làm tan biến lớp vỏ ngoài của hạt virus",
      "Kích hoạt tế bào lympho T tiêu diệt tế bào nhiễm virus"
    ],
    "correct": 0,
    "explanation": "Acyclovir là tiền chất trơ. Để có hoạt tính, thuốc phải được phosphoryl hóa lần đầu thành acyclovir-monophosphat bởi enzym Thymidine kinase của chính virus (ái lực gấp hàng triệu lần tế bào người), sau đó enzym tế bào chủ tiếp tục gắn thêm phosphat để tạo acyclovir triphosphat ức chế ADN polymerase của virus.",
    "reference": "Sách Dược lý 2 tr. 231"
  },
  {
    "id": 156,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc nào sau đây là tiền chất (prodrug) dạng ester L-valyl của Acyclovir, có sinh khả dụng đường uống cao hơn Acyclovir gấp 3 đến 5 lần?",
    "options": [
      "Ribavirin",
      "Valacyclovir",
      "Oseltamivir",
      "Ganciclovir"
    ],
    "correct": 1,
    "explanation": "Valacyclovir là ester L-valyl của acyclovir. Sau khi uống, thuốc được vận chuyển tích cực qua ruột và thủy phân nhanh ở gan thành acyclovir, đạt sinh khả dụng đường uống 54% (trong khi acyclovir chỉ đạt 15-20%), giúp giảm số lần uống thuốc trong ngày.",
    "reference": "Sách Dược lý 2 tr. 232"
  },
  {
    "id": 157,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Oseltamivir (Tamiflu) và Zanamivir có cơ chế tác dụng điều trị và dự phòng bệnh cúm A và cúm B là gì?",
    "options": [
      "Ức chế enzym Neuraminidase của virus cúm ngăn chặn sự giải phóng các hạt virus mới sinh",
      "Phong bế thụ thể hemagglutinin ngăn virus xâm nhập tế bào biểu mô đường hô hấp",
      "Ức chế kênh ion M2 của virus ngăn cản quá trình cởi vỏ",
      "Ức chế phân chia tế bào niêm mạc phế quản người"
    ],
    "correct": 0,
    "explanation": "Oseltamivir và Zanamivir là chất ức chế chọn lọc enzym neuraminidase (NA) trên bề mặt virus cúm A và B, ngăn chặn enzym này cắt cầu nối acid sialic, khiến các hạt virus mới nhân lên bị giữ chặt dính trên bề mặt tế bào chủ và không thể lan sang các tế bào lành khác.",
    "reference": "Sách Dược lý 2 tr. 235"
  },
  {
    "id": 158,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Để đạt hiệu quả điều trị tối ưu làm giảm thời gian sốt và giảm biến chứng hô hấp của bệnh cúm, Oseltamivir cần được bắt đầu sử dụng trong khoảng thời gian nào?",
    "options": [
      "Chỉ dùng khi bệnh nhân đã xuất hiện viêm phổi suy hô hấp nặng",
      "Trong vòng 48 giờ đầu tiên kể từ khi khởi phát triệu chứng cúm",
      "Sau khi các triệu chứng cúm đã hoàn toàn tự biến mất",
      "Sau khi bệnh nhân đã sốt liên tục quá 7 ngày"
    ],
    "correct": 1,
    "explanation": "Sự nhân lên của virus cúm đạt đỉnh vào khoảng 24-48 giờ sau khi khởi phát sốt và triệu chứng hô hấp. Sử dụng thuốc ức chế neuraminidase (Oseltamivir) trong vòng 48 giờ đầu sẽ chặn đứng đà nhân lên của virus, mang lại hiệu quả lâm sàng cao nhất.",
    "reference": "Sách Dược lý 2 tr. 236"
  },
  {
    "id": 159,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Zidovudin (AZT) thuộc nhóm thuốc kháng virus sao chép ngược nào trong phác đồ điều trị HIV/AIDS?",
    "options": [
      "Ức chế enzym protease PI",
      "Ức chế enzym sao chép ngược không phải nucleosid NNRTI",
      "Ức chế enzym sao chép ngược nhóm nucleosid NRTI",
      "Ức chế enzym gắn kết integrase INSTI"
    ],
    "correct": 2,
    "explanation": "Zidovudin (AZT) là thuốc kháng HIV đầu tiên, thuộc nhóm NRTI (Nucleoside Reverse Transcriptase Inhibitors), đóng vai trò như một nucleosid giả cạnh tranh với cơ chất tự nhiên và gắn chèn vào chuỗi ADN provirus làm đứt gãy chuỗi sớm.",
    "reference": "Sách Dược lý 2 tr. 237-238"
  },
  {
    "id": 160,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Ritonavir thường được phối hợp ở liều thấp cùng với các thuốc ức chế Protease khác (như Lopinavir, Atazanavir) trong phác đồ điều trị HIV vì tác dụng dược động học nào?",
    "options": [
      "Tăng đào thải thuốc qua nước tiểu để tránh suy thận",
      "Kích thích hệ miễn dịch sản sinh thêm tế bào lympho T CD4+",
      "Ức chế mạnh enzym gan CYP3A4 giúp tăng nồng độ và kéo dài thời gian bán thải của thuốc phối hợp",
      "Giúp trung hòa độc tính gây loét miệng của các thuốc khác"
    ],
    "correct": 2,
    "explanation": "Ritonavir là chất ức chế cực mạnh cytochrom P450 isoenzym CYP3A4 ở gan và ruột. Khi dùng liều thấp không nhằm mục đích kháng virus, Ritonavir đóng vai trò là chất 'tăng cường dược động học' (pharmacokinetic booster), ngăn chặn sự giáng hóa của các PI khác, giúp tăng vọt nồng độ thuốc trong máu.",
    "reference": "Sách Dược lý 2 tr. 239"
  },
  {
    "id": 161,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Methotrexat là thuốc chống ung thư thuộc nhóm chất chống chuyển hóa đặc hiệu pha S có cơ chế phân tử là gì?",
    "options": [
      "Ức chế enzym ribonucleotid reductase ở màng nhân",
      "Gắn chéo chuỗi xoắn kép ADN ngăn cản tháo xoắn",
      "Ức chế cạnh tranh enzym Dihydrofolat reductase DHFR ngăn chặn tạo acid tetrahydrofolic",
      "Ức chế enzym ADN polymerase phụ thuộc ARN"
    ],
    "correct": 2,
    "explanation": "Methotrexat có cấu trúc tương tự acid folic, gắn chặt vào enzym Dihydrofolat reductase (DHFR) với ái lực mạnh hơn acid folic tự nhiên 1000 lần, ngăn cản chuyển DHF thành THF (dạng coenzym cần thiết để tổng hợp purin và thymin của ADN).",
    "reference": "Sách Dược lý 2 tr. 245"
  },
  {
    "id": 162,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc giải cứu tế bào lành đặc hiệu (antidote) được dùng để giải độc và phục hồi tủy xương khi sử dụng Methotrexat liều cao trong hóa trị ung thư là gì?",
    "options": [
      "N-acetylcystein",
      "Vitamin B12",
      "Mesna dung dịch tiêm truyền",
      "Acid folinic"
    ],
    "correct": 3,
    "explanation": "Leucovorin (Acid folinic) là dạng dạng tetrahydrofolat đã hoạt hóa sẵn mà không cần qua bước khử của enzym DHFR. Do đó, tiêm Leucovorin sẽ giải cứu trực tiếp các tế bào lành của tủy xương và niêm mạc ruột khỏi độc tính chết người của Methotrexat liều cao.",
    "reference": "Sách Dược lý 2 tr. 246"
  },
  {
    "id": 163,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cyclophosphamid thuộc nhóm thuốc chống ung thư alkyl hóa, trong cơ thể chuyển hóa sinh ra chất độc Acrolein gây biến chứng nguy hiểm đặc trưng nào ở đường tiết niệu?",
    "options": [
      "Sỏi thận san hô hai bên thận",
      "Hoại tử ống thận cấp do kết tủa tinh thể",
      "Viêm bàng quang chảy máu vô khuẩn cấp tính",
      "Hẹp niệu quản đoạn chậu hông"
    ],
    "correct": 2,
    "explanation": "Chất chuyển hóa acrolein của cyclophosphamid và ifosfamid bài tiết vào nước tiểu và tích tụ gây kích ứng, loét hoại tử niêm mạc bàng quang, dẫn tới viêm bàng quang xuất huyết vô khuẩn (tiểu buốt, tiểu rắt, tiểu ra máu đỏ tươi đại thể).",
    "reference": "Sách Dược lý 2 tr. 247-248"
  },
  {
    "id": 164,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Biện pháp phòng ngừa đặc hiệu biến chứng viêm bàng quang chảy máu do chất độc Acrolein khi truyền Cyclophosphamid hoặc Ifosfamid liều cao là gì?",
    "options": [
      "Đặt ống thông niệu đạo rửa bàng quang liên tục bằng dung dịch cồn",
      "Uống dung dịch acid ascorbic liều cao để toan hóa nước tiểu",
      "Tiêm thuốc lợi tiểu giữ kali phối hợp kháng sinh quinolon",
      "Bù nhiều dịch đường tĩnh mạch và dùng thuốc giải độc Mesna"
    ],
    "correct": 3,
    "explanation": "Mesna (Natri 2-mercaptoethansulfonat) có nhóm sulfhydryl (-SH) tự do, khi bài tiết qua thận sẽ gắn trung hòa trực tiếp acrolein trong bàng quang tạo thành phức hợp bền không độc, kết hợp truyền nhiều dịch để rửa trôi bàng quang.",
    "reference": "Sách Dược lý 2 tr. 248"
  },
  {
    "id": 165,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Các thuốc chống ung thư nhóm alkaloid cây Dừa cạn (như Vincristin, Vinblastin) tác động đặc hiệu trên chu kỳ tế bào ở pha nào và theo cơ chế gì?",
    "options": [
      "Đặc hiệu pha G1, ức chế tổng hợp ARN ribosom",
      "Đặc hiệu pha M, gắn vào tubulin ngăn chặn sự trùng hợp tạo thoi phân bào làm tế bào ngừng phân chia ở kỳ giữa",
      "Không đặc hiệu pha, phá vỡ trực tiếp màng tế bào ung thư",
      "Đặc hiệu pha S, ức chế enzym thymin kinase"
    ],
    "correct": 1,
    "explanation": "Vincristin và Vinblastin gắn chọn lọc vào protein tubulin, ức chế sự trùng hợp của các dimer tubulin thành vi quản, ngăn cản tạo thoi vô sắc phân bào, làm các nhiễm sắc thể không thể phân ly về hai cực, khiến tế bào bị bắt giữ và chết ở kỳ giữa pha M.",
    "reference": "Sách Dược lý 2 tr. 252-253"
  },
  {
    "id": 166,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Kháng sinh chống ung thư Doxorubicin (Adriamycin) có độc tính đặc thù phụ thuộc liều tích lũy nguy hiểm nhất trên cơ quan nào?",
    "options": [
      "Viêm tụy cấp xuất huyết hoại tử",
      "Xơ hóa phổi kẽ lan tỏa",
      "Hoại tử vỏ thượng thận hai bên",
      "Độc tính trên cơ tim gây suy tim sung huyết mạn tính không hồi phục"
    ],
    "correct": 3,
    "explanation": "Doxorubicin tạo phức hợp với sắt sinh ra các gốc tự do oxy hóa (ROS) gây peroxy hóa lipid màng tế bào cơ tim. Do cơ tim có lượng enzym catalase thấp nên rất dễ bị tổn thương, gây suy tim sung huyết mạn tính phụ thuộc vào tổng liều tích lũy.",
    "reference": "Sách Dược lý 2 tr. 257-258"
  },
  {
    "id": 167,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cisplatin là thuốc chống ung thư nhóm phức hợp platin có hai tác dụng không mong muốn nghiêm trọng nổi bật nhất trên lâm sàng là gì?",
    "options": [
      "Tăng huyết áp kịch phát và xuất huyết tiêu hóa dưới",
      "Độc tính thận nặng nề và buồn nôn/nôn dữ dội bậc cao",
      "Mất trí nhớ ngắn hạn thoáng qua",
      "Hạ canxi máu nặng gây co giật uốn ván"
    ],
    "correct": 1,
    "explanation": "Cisplatin gây độc tế bào ống lượn gần dẫn tới suy thận cấp (cần truyền lượng lớn dịch NaCl 0,9% trước và sau truyền thuốc để tăng lợi niệu bảo vệ thận), đồng thời kích thích mạnh trung tâm nôn ở hành não gây nôn dữ dội cần dùng thuốc chống nôn kháng 5-HT3 Ondansetron liều cao.",
    "reference": "Sách Dược lý 2 tr. 249-250"
  },
  {
    "id": 168,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc kháng độc đặc hiệu (antidote) hàng đầu được sử dụng để điều trị ngộ độc cấp tính Paracetamol (Acetaminophen) là thuốc nào?",
    "options": [
      "Flumazenil",
      "Protamin sulfat",
      "Naloxon hydroclorid",
      "N-acetylcystein"
    ],
    "correct": 3,
    "explanation": "Khi quá liều paracetamol, chất chuyển hóa độc N-acetyl-p-benzoquinon imin (NAPQI) làm cạn kiệt glutathion của gan và gây hoại tử tế bào gan. N-acetylcystein cung cấp nhóm sulfhydryl (-SH) và thúc đẩy tổng hợp glutathion để trung hòa NAPQI, bảo vệ tế bào gan khỏi hoại tử.",
    "reference": "Sách Dược lý 2 tr. 358-359"
  },
  {
    "id": 169,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc đối kháng đặc hiệu tại thụ thể mu-opioid được dùng để cấp cứu ngộ độc cấp Opioid (như Morphin, Heroin, Fentanyl) có biểu hiện ức chế hô hấp và co đồng tử nhỏ như đầu đinh ghim là gì?",
    "options": [
      "Naloxon",
      "Pralidoxim PAM",
      "Atropin sulfat",
      "Flumazenil"
    ],
    "correct": 0,
    "explanation": "Naloxon là chất đối kháng thuần túy cạnh tranh tại tất cả các thụ thể opioid (ưu tiên mu-opioid), có tác dụng đảo ngược nhanh chóng tình trạng ức chế hô hấp, hôn mê và co đồng tử do morphin hoặc các opioid khác gây ra chỉ sau 1-2 phút tiêm tĩnh mạch.",
    "reference": "Sách Dược lý 2 tr. 361"
  },
  {
    "id": 170,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Flumazenil là chất đối kháng đặc hiệu tại thụ thể GABAA được sử dụng để đảo ngược tác dụng an thần và cấp cứu quá liều nhóm thuốc nào?",
    "options": [
      "Thuốc chống trầm cảm 3 vòng",
      "Thuốc tê nhóm este",
      "Barbiturat",
      "Benzodiazepin"
    ],
    "correct": 3,
    "explanation": "Flumazenil cạnh tranh tại vị trí gắn của Benzodiazepin trên phức hợp thụ thể GABAA - kênh Cl-, đảo ngược nhanh tác dụng ức chế thần kinh trung ương và hôn mê do ngộ độc benzodiazepin.",
    "reference": "Sách Dược lý 2 tr. 362"
  },
  {
    "id": 171,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Phác đồ kinh điển cấp cứu ngộ độc cấp thuốc trừ sâu nhóm Phospho hữu cơ bao gồm sự phối hợp của hai thuốc nào?",
    "options": [
      "Atropin sulfat và Pralidoxim PAM",
      "Dimercaprol và CaNa2EDTA",
      "Naloxon và Vitamin K1",
      "Ethanol và Fomepizol"
    ],
    "correct": 0,
    "explanation": "Atropin phong bế thụ thể muscarinic để giải quyết hội chứng cường phó giao cảm (co thắt phế quản, tăng tiết đờm dãi, nhịp chậm). Pralidoxim (PAM) là chất tái hoạt hóa enzym acetylcholinesterase bằng cách tách gốc phosphoryl ra khỏi enzym khi enzym chưa bị 'già hóa' (aging).",
    "reference": "Sách Dược lý 2 tr. 351, 359"
  },
  {
    "id": 172,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong ngộ độc cấp khí độc Carbon Monoxid (CO) gây ngạt mô tế bào do tạo Carboxyhemoglobin (HbCO), liệu pháp cấp cứu quan trọng nhất là gì?",
    "options": [
      "Rửa dạ dày bằng dung dịch than hoạt",
      "Thở oxy nguyên chất 100% hoặc liệu pháp oxy cao áp HBO",
      "Tiêm tĩnh mạch dung dịch xanh methylen",
      "Tiêm thuốc kích thích trung tâm hô hấp Nikethamid"
    ],
    "correct": 1,
    "explanation": "Khí CO gắn vào hemoglobin với ái lực gấp hơn 200 lần oxy tạo HbCO bền vững. Thở oxy 100% hoặc oxy cao áp (2-3 atm) làm tăng mạnh phân áp oxy hòa tan, đẩy nhanh tốc độ phân ly HbCO, rút ngắn thời gian bán hủy của HbCO từ 320 phút xuống còn 20-30 phút.",
    "reference": "Sách Dược lý 2 tr. 357"
  },
  {
    "id": 173,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong ngộ độc cấp các thuốc có bản chất acid yếu như Phenobarbital (Barbiturat) hoặc Aspirin (Salicylat), biện pháp tăng đào thải chất độc qua nước tiểu hiệu quả nhất là gì?",
    "options": [
      "Hạn chế uống nước và dùng thuốc giữ muối khoáng",
      "Cho bệnh nhân uống dung dịch acid chlohydric loãng",
      "Kiềm hóa nước tiểu bằng cách truyền tĩnh mạch dung dịch Natri hydrocarbonat",
      "Toan hóa nước tiểu bằng cách uống nhiều Vitamin C"
    ],
    "correct": 2,
    "explanation": "Khi kiềm hóa nước tiểu nâng pH lên trên 7,5 - 8, các phân tử thuốc acid yếu (Phenobarbital, Salicylat) sẽ bị ion hóa thành dạng phân cực mang điện tích, không thể tái hấp thu thụ động qua biểu mô ống thận và bị thải trừ ồ ạt theo nước tiểu ra ngoài (nguyên lý bẫy ion).",
    "reference": "Sách Dược lý 2 tr. 356"
  },
  {
    "id": 174,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong cấp cứu ngộ độc cồn công nghiệp Methanol (gây toan chuyển hóa nặng và mù mắt do tích tụ acid formic), vì sao Ethanol tinh khiết hoặc Fomepizol được sử dụng làm thuốc giải độc?",
    "options": [
      "Ethanol phá hủy trực tiếp phân tử methanol trong máu",
      "Ethanol gắn kết với acid formic tạo este không tan đào thải qua phân",
      "Cạnh tranh mạnh mẽ tại enzym Alcohol Dehydrogenase ADH làm chậm quá trình chuyển hóa Methanol thành Acid Formic độc hại",
      "Ethanol làm tăng sinh tế bào thần kinh thị giác"
    ],
    "correct": 2,
    "explanation": "Methanol tự thân ít độc, nhưng bị enzym ADH ở gan oxy hóa thành formaldehyd rồi thành acid formic gây toan máu nặng nề và teo dây thần kinh thị giác gây mù mắt. Ethanol có ái lực với ADH mạnh hơn methanol gấp 10-20 lần, chiếm giữ enzym và ngăn cản sự chuyển hóa methanol thành acid formic độc hại.",
    "reference": "Sách Dược lý 2 tr. 364"
  },
  {
    "id": 175,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Chất giải độc đặc hiệu dùng để điều trị tình trạng Methemoglobin máu (MetHb) cấp tính do ngộ độc các chất oxy hóa (như nitrit, dapsone, anilin) là gì?",
    "options": [
      "Atropin sulfat",
      "Acid tranexamic",
      "Xanh Methylen",
      "Natri thiosulfat"
    ],
    "correct": 2,
    "explanation": "Xanh methylen là chất nhận electron, dưới tác dụng của enzym NADPH-Methemoglobin reductase trong hồng cầu sẽ khử phân tử sắt ba (Fe3+) trong methemoglobin trở lại thành sắt hai (Fe2+) trong hemoglobin bình thường, phục hồi khả năng vận chuyển oxy của máu.",
    "reference": "Sách Dược lý 2 tr. 363"
  },
  {
    "id": 176,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Phần không đường (aglycon) của các glycosid tim có cấu trúc hóa học cơ bản gồm:",
    "options": [
      "Cấu trúc indol gắn với chuỗi nhánh piperazin",
      "Vòng dị vòng quinolin gắn với nhân benzen",
      "Nhân cyclopentanoperhydrophenanthren gắn với vòng lacton không no ở vị trí C17",
      "Khung steroid gắn với chuỗi polypeptid 51 acid amin"
    ],
    "correct": 2,
    "explanation": "Aglycon của glycosid tim gồm nhân steroid (cyclopentanoperhydrophenanthren) và một vòng lacton 5 cạnh (cardenolid) hoặc 6 cạnh (bufadienolid) gắn ở vị trí C17 hướng beta.",
    "reference": "Sách Dược lý 2 tr. 10"
  },
  {
    "id": 177,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Glycosid tim nhóm Bufadienolid có đặc điểm cấu trúc vòng lacton là gì?",
    "options": [
      "Vòng dị vòng furan 5 cạnh no",
      "Vòng lacton 4 cạnh không có nối đôi",
      "Vòng lacton 6 cạnh chứa 2 nối đôi",
      "Vòng lacton 5 cạnh chứa 1 nối đôi"
    ],
    "correct": 2,
    "explanation": "Nhóm Bufadienolid có vòng lacton 6 cạnh với 2 liên kết đôi (tìm thấy trong nhựa cóc Bufo hoặc củ hành biển Scilla), trong khi Cardenolid có vòng lacton 5 cạnh với 1 liên kết đôi (Digitalis, Strophantus).",
    "reference": "Sách Dược lý 2 tr. 10"
  },
  {
    "id": 178,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Vì sao Digoxin có thể dùng được cả đường uống và đường tiêm tĩnh mạch, trong khi Ouabain chỉ dùng đường tiêm tĩnh mạch?",
    "options": [
      "Digoxin tan vừa trong lipid nên hấp thu tốt qua ruột, còn Ouabain có nhiều nhóm -OH rất tan trong nước nên hầu như không qua được màng ruột",
      "Ouabain bị acid dạ dày phá hủy hoàn toàn trong khi digoxin bền vững tuyệt đối",
      "Digoxin không gắn vào protein huyết tương còn Ouabain gắn 100%",
      "Ouabain kích thích thụ thể vị giác gây co thắt thanh quản"
    ],
    "correct": 0,
    "explanation": "Digoxin có 3 nhóm phân cực (-OH) nên độ tan trong lipid vừa phải, hấp thu tốt qua đường tiêu hóa (60-80%). Ouabain có tới 5 nhóm -OH tự do nên cực kỳ thân nước, không thể khuếch tán qua lớp kép phospholipid của niêm mạc ruột (hấp thu < 2%).",
    "reference": "Sách Dược lý 2 tr. 11, 14, 18"
  },
  {
    "id": 179,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân suy thận mạn tính có độ thanh thải creatinin giảm nặng cần phải điều chỉnh liều như thế nào khi sử dụng Digoxin?",
    "options": [
      "Không cần chỉnh liều vì digoxin chuyển hóa hoàn toàn qua gan",
      "Bắt buộc phải giảm liều hoặc kéo dài khoảng cách giữa các lần dùng thuốc và định lượng nồng độ digoxin máu",
      "Chuyển hoàn toàn sang đường tiêm bắp sâu mà không cần chỉnh liều",
      "Tăng liều gấp đôi để bù đắp sự giảm lọc của cầu thận"
    ],
    "correct": 1,
    "explanation": "Digoxin thải trừ chủ yếu qua thận dưới dạng không biến đổi (khoảng 80%). Khi suy thận, độ thanh thải digoxin giảm tương ứng với độ thanh thải creatinin, thuốc bị tích lũy dễ gây ngộ độc chết người. Do đó bắt buộc phải giảm liều và theo dõi TDM.",
    "reference": "Sách Dược lý 2 tr. 15"
  },
  {
    "id": 180,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Ở liều điều trị, Dopamin truyền tĩnh mạch ở tốc độ thấp (1 - 2 mcg/kg/phút) tác động ưu tiên trên thụ thể nào và gây tác dụng gì?",
    "options": [
      "Kích thích thụ thể Dopamin D1 tại mạch thận gây giãn mạch thận và tăng lưu lượng nước tiểu",
      "Kích thích mạnh thụ thể alpha-1 adrenergic gây co mạch tăng huyết áp",
      "Kích thích thụ thể beta-1 adrenergic gây tăng nhịp tim nhanh trên 150 lần/phút",
      "Kích thích thụ thể histamin H2 gây loét dạ dày tá tràng"
    ],
    "correct": 0,
    "explanation": "Ở liều thận (1-2 mcg/kg/phút), Dopamin kích thích chọn lọc thụ thể D1 ở mạch thận, mạch mạc treo và mạch vành, gây giãn mạch, tăng dòng máu tới thận, tăng mức lọc cầu thận và tăng bài niệu natri.",
    "reference": "Sách Dược lý 2 tr. 19"
  },
  {
    "id": 181,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng không mong muốn trên hệ tạo máu đặc trưng của thuốc trợ tim Amrinon (Inamrinon) khi dùng kéo dài là gì?",
    "options": [
      "Gây bệnh đa hồng cầu thứ phát",
      "Giảm số lượng tiểu cầu",
      "Gây suy tủy bất sản toàn bộ dòng hồng cầu",
      "Gây tăng bạch cầu đa nhân trung tính"
    ],
    "correct": 1,
    "explanation": "Amrinon gây tác dụng phụ giảm tiểu cầu (tỷ lệ khoảng 10%), có thể hồi phục khi ngừng thuốc. Thuốc thế hệ sau là Milrinon ít gây giảm tiểu cầu hơn nên được ưu tiên sử dụng trên lâm sàng.",
    "reference": "Sách Dược lý 2 tr. 20-21"
  },
  {
    "id": 182,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Chống chỉ định dùng thuốc Glycosid tim (Digoxin) trong trường hợp bệnh tim mạch nào sau đây?",
    "options": [
      "Hẹp phì đại dưới van động mạch chủ và blốc nhĩ thất độ III",
      "Cuồng nhĩ có đáp ứng thất nhanh",
      "Suy tim ứ huyết do bệnh cơ tim giãn",
      "Rung nhĩ nhanh kèm huyết động ổn định"
    ],
    "correct": 0,
    "explanation": "Trong hẹp phì đại dưới van động mạch chủ (bệnh cơ tim phì đại tắc nghẽn), digitalis làm tăng sức co bóp cơ tim vùng vách liên thất sẽ làm đường tống máu thất trái càng bị bít tắc nặng nề hơn. Blốc nhĩ thất độ II-III chống chỉ định vì thuốc ức chế dẫn truyền nhĩ thất gây ngừng tim.",
    "reference": "Sách Dược lý 2 tr. 15"
  },
  {
    "id": 183,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị THA",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong nhóm ức chế men chuyển, Captopril sở hữu nhóm chức hóa học chứa lưu huỳnh tự do (-SH). Sự hiện diện của nhóm chức này liên quan trực tiếp đến những tác dụng không mong muốn đặc thù nào hiếm gặp ở các thuốc cùng nhóm khác?",
    "options": [
      "Phù mắt cá chân hai bên và tăng men gan cấp tính kiểu ứ mật",
      "Hội chứng bão giao cảm dội ngược và cơn đau thắt ngực khi ngừng thuốc",
      "Rối loạn vị giác (mất vị hoặc có vị kim loại trong miệng), phát ban da dạng dát sần và giảm bạch cầu hạt",
      "Tăng áp lực nội sọ và xuất huyết dưới màng nhện"
    ],
    "correct": 2,
    "explanation": "Nhóm sulfhydryl (-SH) trong Captopril gắn vào ion Zn2+ của men ACE, nhưng nhóm thiol này cũng chính là thủ phạm gây ra các ADR đặc thù: mất vị giác/vị kim loại (dysgeusia), phát ban da dị ứng và hiếm gặp là giảm bạch cầu hạt. Các ACEI thế hệ sau chứa nhóm carboxyl (Enalapril) hoặc phosphinyl (Fosinopril) ít gặp các tác dụng phụ này hơn.",
    "reference": "Sách Dược lý 2 tr. 67"
  },
  {
    "id": 184,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị THA",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hầu hết các thuốc ức chế men chuyển được dùng dưới dạng tiền dược (prodrug) cần gan thủy phân để tạo dạng có hoạt tính. Hai hoạt chất hiếm hoi trong nhóm đã có hoạt tính sinh học trực tiếp, hấp thu không cần chuyển hóa qua gan là:",
    "options": [
      "Enalapril và Ramipril",
      "Captopril và Lisinopril",
      "Perindopril và Fosinopril",
      "Benazepril và Quinapril"
    ],
    "correct": 1,
    "explanation": "Captopril và Lisinopril là 2 thuốc ức chế men chuyển duy nhất KHÔNG PHẢI tiền dược (không có đuôi -at), có hoạt tính trực tiếp ngay khi vào cơ thể và đào thải nguyên vẹn. Các thuốc khác (Enalapril -> Enalaprilat, Perindopril -> Perindoprilat, Ramipril -> Ramiprilat) đều là ester tiền dược cần gan thủy phân.",
    "reference": "Sách Dược lý 2 tr. 66"
  },
  {
    "id": 185,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị THA",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trước đây thực hành chọc thủng viên Nifedipin nang mềm nhỏ dưới lưỡi để xử trí huyết áp tăng vọt khá phổ biến, nhưng hiện nay bị CẤM TUYỆT ĐỐI do cơ chế bệnh sinh nào?",
    "options": [
      "Thuốc ức chế tức thì nút xoang dẫn đến ngừng tim đột ngột do phong bế kênh canxi ở tim",
      "Thuốc gây co thắt khí phế quản cấp tính dẫn đến suy hô hấp do kích thích thụ thể histamin",
      "Thuốc kích hoạt giải phóng renin ồ ạt làm huyết áp tăng vọt thành cơn bão tăng huyết áp ác tính",
      "Thuốc hấp thu quá nhanh gây tụt huyết áp ồ ạt, kích hoạt phản xạ giao cảm dữ dội gây nhịp nhanh, thiếu máu não và nhồi máu cơ tim cấp"
    ],
    "correct": 3,
    "explanation": "Nifedipin nang mềm nhỏ dưới lưỡi làm tụt huyết áp quá nhanh và không kiểm soát được, kích hoạt phản xạ giao cảm cường độ cực mạnh gây nhịp tim nhanh, co thắt mạch vành và hiện tượng 'cướp máu', dẫn tới nhồi máu cơ tim và thiếu máu não cục bộ. Phương pháp này đã bị cấm hoàn toàn.",
    "reference": "Sách Dược lý 2 tr. 60"
  },
  {
    "id": 186,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị THA",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong cấp cứu tăng huyết áp có tổn thương cơ quan đích (đặc biệt trong xuất huyết não hoặc tai biến mạch máu não), thuốc chẹn kênh calci nào có dạng tiêm truyền tĩnh mạch với đặc tính khởi phát nhanh, dễ chuẩn liều và không làm tăng áp lực nội sọ?",
    "options": [
      "Nicardipin",
      "Amlodipin",
      "Nimodipin đường uống",
      "Felodipin"
    ],
    "correct": 0,
    "explanation": "Nicardipin truyền tĩnh mạch (IV) là thuốc chẹn kênh calci DHP được ưu tiên hàng đầu trong cấp cứu tăng huyết áp, đột quỵ xuất huyết não và tiền sản giật nặng nhờ tác dụng chọn lọc cao trên mạch máu não và mạch vành, khởi phát nhanh trong vài phút, dễ điều chỉnh liều và không gây ức chế cơ tim.",
    "reference": "Sách Dược lý 2 tr. 61"
  },
  {
    "id": 187,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị THA",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Sau khi vào cơ thể, hoạt chất Minoxidil được chuyển hóa thành Minoxidil sulfat có tác dụng giãn mạch trực tiếp rất mạnh. Cơ chế phân tử chính xác của thuốc tại tế bào cơ trơn tiểu động mạch là gì?",
    "options": [
      "Ức chế enzym phosphodiesterase type 5 làm tích lũy cGMP trong tế bào cơ trơn mạch máu",
      "Kích hoạt trực tiếp enzym adenylate cyclase làm tăng tổng hợp cAMP gây giãn cơ trơn",
      "Phong bế chọn lọc thụ thể Endothelin ETA trên bề mặt tế bào nội mô mạch máu",
      "Mở kênh Kali nhạy cảm với ATP (K_ATP channel) gây ưu phân cực màng tế bào cơ trơn, ngăn dòng Ca²⁺ đi vào"
    ],
    "correct": 3,
    "explanation": "Minoxidil sulfat gắn vào tiểu đơn vị SUR của kênh Kali nhạy cảm ATP (K_ATP channel) trên màng tế bào cơ trơn mạch máu, mở kênh làm ion K+ ùa ra ngoài tế bào, gây hiện tượng ưu phân cực màng (hyperpolarization), đóng kênh Canxi phụ thuộc điện thế và làm giãn cơ trơn tiểu động mạch rất mạnh.",
    "reference": "Sách Dược lý 2 tr. 79"
  },
  {
    "id": 188,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị THA",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng không mong muốn gây tăng mọc lông tóc (Hypertrichosis) của hoạt chất Minoxidil bắt nguồn từ cơ chế giãn vi mạch tại nang lông, hiện nay được ứng dụng phổ biến trên lâm sàng để:",
    "options": [
      "Điều trị hội chứng rậm lông vô căn ở phụ nữ sau mãn kinh",
      "Bào chế dung dịch dùng ngoài bôi tại chỗ điều trị rụng tóc, hói đầu androgen",
      "Kích thích mọc lông mày cho bệnh nhân suy giáp trạng mạn tính",
      "Bào chế kem triệt lông vĩnh viễn nhờ làm teo nang lông khi dùng nồng độ cao"
    ],
    "correct": 1,
    "explanation": "Khi dùng đường uống trị THA kháng trị, Minoxidil gây rậm lông mặt, tay chân (hypertrichosis) sau vài tuần. Tác dụng phụ này đã được ứng dụng để bào chế dung dịch/bọt bôi ngoài da (Minoxidil 2%, 5%) kích thích mọc tóc trong điều trị chứng rụng tóc từng mảng và hói đầu di truyền.",
    "reference": "Sách Dược lý 2 tr. 80"
  },
  {
    "id": 189,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị THA",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hiện tượng tăng huyết áp dội ngược nguy hiểm (Rebound hypertension) với huyết áp vọt lên rất cao kèm bồn chồn, nhịp nhanh, vã mồ hôi và nguy cơ nhồi máu cơ tim cấp thường xảy ra khi bệnh nhân ngừng đột ngột thuốc nào?",
    "options": [
      "Thuốc lợi tiểu Thiazid",
      "Thuốc ức chế men chuyển Captopril",
      "Clonidin hoặc thuốc chẹn beta-adrenergic liều cao",
      "Thuốc chẹn thụ thể ARB Losartan"
    ],
    "correct": 2,
    "explanation": "Ngừng đột ngột Clonidin (thuốc chủ vận alpha-2 trung ương) hoặc thuốc chẹn beta liều cao gây ra hiện tượng tăng huyết áp dội ngược (Rebound hypertension) do sự tăng vọt catecholamin nội sinh tác động lên các thụ thể đã bị tăng sinh (up-regulation). Do đó luôn phải giảm liều từ từ (tapering) trong 1-2 tuần.",
    "reference": "Sách Dược lý 2 tr. 75"
  },
  {
    "id": 190,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị THA",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong phối hợp thuốc hạ áp, sự kết hợp giữa 2 nhóm thuốc nào dưới đây bị KHUYẾN CÁO TRÁNH / CHỐNG CHỈ ĐỊNH do không tăng thêm hiệu quả bảo vệ tim mạch mà làm tăng vọt biến cố suy thận cấp, hạ huyết áp quá mức và tăng kali máu?",
    "options": [
      "Phối hợp thuốc ức chế men chuyển (ACEI) cùng thuốc chẹn thụ thể Angiotensin II (ARB)",
      "Phối hợp thuốc ức chế men chuyển (ACEI) cùng thuốc chẹn kênh calci DHP",
      "Phối hợp thuốc chẹn thụ thể ARB cùng thuốc lợi tiểu Thiazid",
      "Phối hợp thuốc chẹn kênh calci DHP cùng thuốc chẹn beta-1 chọn lọc"
    ],
    "correct": 0,
    "explanation": "Nghiên cứu ONTARGET và hướng dẫn quốc tế khuyến cáo KHÔNG ĐƯỢC PHỐI HỢP ACEI VÀ ARB cùng lúc vì cùng can thiệp vào một trục sinh học (Dual-RAAS blockade), không làm giảm thêm tỷ lệ tử vong nhưng làm tăng gấp đôi nguy cơ suy thận cấp, tụt huyết áp kịch phát và tăng Kali máu nguy hiểm.",
    "reference": "Sách Dược lý 2 tr. 72"
  },
  {
    "id": 191,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Isosorbid-5-mononitrat (ISMN) có ưu điểm nổi bật nào so với Isosorbid dinitrat (ISDN)?",
    "options": [
      "Có tác dụng cắt cơn đau thắt ngực cấp chỉ sau 5 giây ngậm",
      "Không bao giờ gây hiện tượng quen thuốc dung nạp",
      "Có thể tiêm tủy sống điều trị đau do thiếu máu cơ tim",
      "Sinh khả dụng đường uống đạt xấp xỉ 100% do không bị chuyển hóa bước đầu qua gan"
    ],
    "correct": 3,
    "explanation": "ISDN bị chuyển hóa bước đầu qua gan rất mạnh nên sinh khả dụng thấp và dao động (20%). ISMN chính là chất chuyển hóa có hoạt tính của ISDN, không bị khử nitrat qua gan lần đầu nên sinh khả dụng đường uống đạt 100%, tác dụng ổn định kéo dài.",
    "reference": "Sách Dược lý 2 tr. 44"
  },
  {
    "id": 192,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Ivabradin là thuốc điều trị đau thắt ngực ổn định tác động theo cơ chế mới nào?",
    "options": [
      "Ức chế chọn lọc kênh If tại nút xoang làm giảm nhịp tim đơn thuần mà không ảnh hưởng sức co bóp cơ tim",
      "Kích thích thụ thể muscarinic M2 tại tâm nhĩ",
      "Chẹn kênh natri phụ thuộc điện thế ở sợi Purkinje",
      "Gắn vào thụ thể ryanodin ngăn giải phóng calci từ lưới nội bào"
    ],
    "correct": 0,
    "explanation": "Ivabradin ức chế chọn lọc dòng tạo nhịp If ở nút xoang, làm chậm tần số tim một cách chuyên biệt cả khi nghỉ ngơi và khi gắng sức mà hoàn toàn không làm giảm sức co bóp cơ tim hay tụt huyết áp, rất thích hợp khi bệnh nhân có chống chỉ định chẹn beta.",
    "reference": "Sách Dược lý 2 tr. 52"
  },
  {
    "id": 193,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Khi bệnh nhân đang lên cơn đau thắt ngực cấp tính, hướng dẫn cách sử dụng viên Nitroglycerin ngậm dưới lưỡi đúng chuẩn là gì?",
    "options": [
      "Uống ngay viên thuốc với một cốc nước sôi thật lớn",
      "Ngồi nghỉ ngơi hoặc nằm đầu cao, đặt 1 viên dưới lưỡi để tan tự nhiên không nhai không nuốt; nếu sau 5 phút không đỡ đau có thể dùng viên thứ 2",
      "Nhai nát viên thuốc rồi nuốt ngay lập tức",
      "Đặt dưới lưỡi liên tục 5 viên cùng một lúc"
    ],
    "correct": 1,
    "explanation": "Bệnh nhân phải ở tư thế ngồi (tránh tụt huyết áp tư thế ngất xỉu), đặt 1 viên ngậm dưới lưỡi để niêm mạc hấp thu thẳng vào tĩnh mạch. Không nhai, không nuốt. Nếu sau 5 phút không giảm, dùng viên thứ 2, tối đa 3 viên. Nếu sau 15 phút vẫn đau dữ dội phải gọi cấp cứu 115 vì nguy cơ nhồi máu cơ tim cấp.",
    "reference": "Sách Dược lý 2 tr. 43"
  },
  {
    "id": 194,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc chống loạn nhịp nào sau đây thuộc nhóm chẹn beta có thời gian bán thải siêu ngắn (khoảng 9 phút), dùng đường tiêm truyền tĩnh mạch cấp cứu?",
    "options": [
      "Esmolol",
      "Bisoprolol",
      "Atenolol",
      "Propranolol"
    ],
    "correct": 0,
    "explanation": "Esmolol là thuốc chẹn chọn lọc beta-1 có chứa liên kết este trong phân tử, bị enzym esterase của hồng cầu thủy phân cực nhanh, có thời gian bán thải chỉ 9 phút, dùng truyền tĩnh mạch cấp cứu để kiểm soát nhanh nhịp thất trong rung nhĩ hoặc sau mổ tim.",
    "reference": "Sách Dược lý 2 tr. 34"
  },
  {
    "id": 195,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc chống loạn nhịp Flecainid và Propafenon thuộc Nhóm IC theo phân loại Vaughan Williams bị CHỐNG CHỈ ĐỊNH ở đối tượng nào?",
    "options": [
      "Người trẻ tuổi bị hội chứng Wolff-Parkinson-White có dẫn truyền nhĩ thất phụ",
      "Bệnh nhân có bệnh tim thực tổn, suy tim hoặc tiền sử nhồi máu cơ tim",
      "Bệnh nhân rung nhĩ kịch phát có cấu trúc tim hoàn toàn bình thường",
      "Bệnh nhân tăng huyết áp giai đoạn 1 chưa biến chứng"
    ],
    "correct": 1,
    "explanation": "Thử nghiệm CAST (Cardiac Arrhythmia Suppression Trial) đã chứng minh thuốc nhóm IC (Flecainid) làm tăng tỷ lệ tử vong và ngừng tim đột ngột ở bệnh nhân có tổn thương cơ tim thực tổn hoặc sau nhồi máu cơ tim. Do đó nhóm IC chỉ được dùng cho người có tim bình thường về mặt cấu trúc.",
    "reference": "Sách Dược lý 2 tr. 33"
  },
  {
    "id": 196,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong cấp cứu cơn loạn nhịp thất xoắn đỉnh (Torsades de pointes) do thuốc kéo dài khoảng QT, thuốc điều trị cấp cứu lựa chọn hàng đầu qua đường tiêm tĩnh mạch là gì?",
    "options": [
      "Magnesi sulfat",
      "Digoxin tiêm tĩnh mạch",
      "Propranolol tiêm tĩnh mạch",
      "Calci clorid"
    ],
    "correct": 0,
    "explanation": "Magnesi sulfat tiêm tĩnh mạch là thuốc điều trị đặc hiệu hàng đầu được lựa chọn để cắt cơn xoắn đỉnh (Torsades de pointes) bất kể nồng độ magnesi trong máu bình thường hay hạ, nhờ tác dụng ức chế dòng calci đi vào pha 2 và triệt tiêu các hậu khử cực sớm (EAD).",
    "reference": "Sách Dược lý 2 tr. 39"
  },
  {
    "id": 197,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Procainamid khi sử dụng điều trị loạn nhịp tim kéo dài có nguy cơ gây hội chứng tự miễn giống bệnh lý nào?",
    "options": [
      "Bệnh viêm cột sống dính khớp liên kết HLA-B27",
      "Hội chứng giống Lupus ban đỏ hệ thống",
      "Bệnh nhược cơ tự miễn qua trung gian kháng thể kháng AChR",
      "Hội chứng Sjogren gây khô mắt khô miệng"
    ],
    "correct": 1,
    "explanation": "Dùng Procainamid kéo dài trên 6 tháng gây hội chứng giả Lupus do thuốc ở 25-30% bệnh nhân (đau khớp, viêm khớp, viêm màng phổi, sốt) kèm xét nghiệm kháng thể kháng nhân (ANA) và kháng histon dương tính. Các triệu chứng thường hồi phục sau khi ngừng thuốc.",
    "reference": "Sách Dược lý 2 tr. 31"
  },
  {
    "id": 198,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng lợi tiểu của Furosemid phụ thuộc một phần vào sự tổng hợp prostaglandin giãn mạch tại thận. Thuốc nào sau đây làm giảm tác dụng lợi tiểu của Furosemid khi phối hợp?",
    "options": [
      "Vitamin nhóm B",
      "Thuốc chống viêm không steroid",
      "Thuốc hạ lipid máu nhóm Statin",
      "Thuốc kháng sinh beta-lactam"
    ],
    "correct": 1,
    "explanation": "Furosemid kích thích tổng hợp prostaglandin (PGE2, PGI2) ở thận gây giãn tiểu động mạch đến và tăng dòng máu thận. Thuốc NSAID ức chế enzym COX làm giảm tổng hợp prostaglandin, từ đó làm giảm hiệu lực lợi tiểu và tác dụng hạ áp của Furosemid.",
    "reference": "Sách Dược lý 2 tr. 82-83"
  },
  {
    "id": 199,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Rối loạn chuyển hóa điển hình thường gặp khi sử dụng thuốc lợi tiểu nhóm Thiazid (Hydrochlorothiazid) kéo dài bao gồm:",
    "options": [
      "Tăng acid uric máu, tăng glucose máu, hạ kali máu và hạ natri máu",
      "Tăng canxi niệu nặng kèm sỏi thận calci oxalat",
      "Hạ acid uric máu, hạ đường huyết, tăng kali máu",
      "Toan chuyển hóa tăng clo máu nặng nề"
    ],
    "correct": 0,
    "explanation": "Thiazid cạnh tranh đào thải acid uric ở ống lượn gần gây tăng acid uric máu (có thể bùng phát cơn gút cấp), ức chế bài tiết insulin gây tăng đường huyết, làm mất K+ và Na+ qua nước tiểu, đồng thời làm tăng tái hấp thu calci máu.",
    "reference": "Sách Dược lý 2 tr. 85"
  },
  {
    "id": 200,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong điều trị cổ trướng do xơ gan, vì sao Spironolacton là thuốc lợi tiểu được lựa chọn hàng đầu?",
    "options": [
      "Vì Spironolacton tiêu diệt vi khuẩn gram âm trong dịch cổ trướng",
      "Vì bệnh nhân xơ gan có tình trạng cường aldosteron thứ phát do gan giảm giáng hóa aldosteron",
      "Vì thuốc làm co thắt tĩnh mạch cửa làm giảm áp lực xoang gan",
      "Vì Spironolacton kích thích tế bào gan tăng tổng hợp albumin"
    ],
    "correct": 1,
    "explanation": "Ở bệnh nhân xơ gan, dòng máu qua gan giảm và chức năng tế bào gan suy giảm khiến enzym gan không giáng hóa được hormon aldosteron, dẫn đến cường aldosteron thứ phát nặng nề gây giữ muối nước dữ dội. Do đó dùng chất đối kháng aldosteron như Spironolacton đánh trúng nguyên nhân sinh lý bệnh.",
    "reference": "Sách Dược lý 2 tr. 87"
  },
  {
    "id": 201,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Eplerenon là thuốc lợi tiểu thuộc nhóm nào và có ưu điểm gì so với Spironolacton?",
    "options": [
      "Chất ức chế carbonic anhydrase có tác dụng kéo dài 72 giờ",
      "Chất ức chế đồng vận chuyển Na+/Cl- ở ống lượn xa",
      "Chất đối kháng chọn lọc cao tại thụ thể aldosteron, không kháng androgen nên không gây vú to ở nam giới",
      "Thuốc lợi niệu quai thế hệ mới không gây điếc tai"
    ],
    "correct": 2,
    "explanation": "Eplerenon là chất đối kháng chọn lọc trên thụ thể mineralocorticoid (aldosteron), có ái lực rất thấp với thụ thể androgen và progesteron (kém 100-500 lần so với spironolacton), do đó không gây tác dụng phụ chứng vú to, bất lực ở nam giới hay rối loạn kinh nguyệt ở nữ giới.",
    "reference": "Sách Dược lý 2 tr. 88"
  },
  {
    "id": 202,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Chống chỉ định dùng thuốc lợi tiểu thẩm thấu Mannitol trong trường hợp nào sau đây?",
    "options": [
      "Tăng áp lực nội sọ do chấn thương sọ não",
      "Glôcôm góc đóng cấp tính",
      "Phòng ngừa suy thận cấp do tiêu cơ vân",
      "Suy tim ứ huyết sung huyết và phù phổi cấp"
    ],
    "correct": 3,
    "explanation": "Khi truyền Mannitol ưu trương vào lòng mạch, thuốc hút dịch rất nhanh từ khoang gian bào vào lòng mạch, làm tăng đột ngột thể tích tuần hoàn lưu hành (tăng tiền gánh). Ở bệnh nhân suy tim sung huyết hoặc phù phổi cấp, hiện tượng này sẽ làm tim quá tải cấp tính và làm vỡ mao mạch phổi gây tử vong.",
    "reference": "Sách Dược lý 2 tr. 90-91"
  },
  {
    "id": 203,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc ức chế bơm proton nào sau đây ít ức chế enzym cytochrom P450 isoenzym CYP2C19 nhất, an toàn nhất khi phối hợp cùng thuốc chống kết tập tiểu cầu Clopidogrel?",
    "options": [
      "Lansoprazol",
      "Omeprazol",
      "Pantoprazol",
      "Esomeprazol"
    ],
    "correct": 2,
    "explanation": "Omeprazol và Esomeprazol ức chế mạnh CYP2C19, làm cản trở quá trình sinh học chuyển Clopidogrel thành chất chuyển hóa có hoạt tính, làm giảm hiệu lực chống đông của clopidogrel. Pantoprazol có ái lực yếu nhất với CYP2C19 nên là PPI được khuyến cáo ưu tiên phối hợp cùng clopidogrel.",
    "reference": "Sách Dược lý 2 tr. 106"
  },
  {
    "id": 204,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Sử dụng thuốc ức chế bơm proton (PPI) liều cao kéo dài nhiều năm làm tăng nguy cơ biến chứng nào do giảm acid dạ dày mạn tính?",
    "options": [
      "Gây bùng phát cơn tăng huyết áp ác tính kèm phù mạch",
      "Gây lắng đọng sỏi acid uric ở đài bể thận",
      "Gây cường giáp trạng tự miễn bướu lồi mắt",
      "Kém hấp thu calci, magie, vitamin B12 dẫn đến tăng nguy cơ loãng xương, gãy xương và nhiễm khuẩn đường ruột do Clostridium difficile"
    ],
    "correct": 3,
    "explanation": "Acid clohydric dịch vị cần thiết để ion hóa calci, giải phóng vitamin B12 khỏi protein thức ăn và tiêu diệt vi khuẩn xâm nhập. Ức chế acid kéo dài gây kém hấp thu Ca2+, Mg2+, B12 (tăng nguy cơ gãy xương hông) và mất hàng rào bảo vệ dạ dày làm tăng nguy cơ viêm đại tràng giả mạc Clostridium difficile và viêm phổi.",
    "reference": "Sách Dược lý 2 tr. 106"
  },
  {
    "id": 205,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong dạ dày, tế bào nào trực tiếp đảm nhiệm chức năng bài tiết acid chlohydric (HCl) và yếu tố nội tại Castle?",
    "options": [
      "Tế bào biểu mô nhầy cổ tuyến",
      "Tế bào chính",
      "Tế bào viền",
      "Tế bào G ở hang vị"
    ],
    "correct": 2,
    "explanation": "Tế bào viền (tế bào thành) nằm ở vùng thân và đáy dạ dày bài tiết acid HCl qua bơm proton H+/K+ ATPase và bài tiết glycoprotein yếu tố nội tại Castle (cần thiết cho sự hấp thu vitamin B12 ở hồi tràng). Tế bào chính bài tiết pepsinogen.",
    "reference": "Sách Dược lý 2 tr. 102"
  },
  {
    "id": 206,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hiện tượng tiết acid dội ngược (acid rebound) và hội chứng kiềm - sữa (milk-alkali syndrome) thường gặp khi lạm dụng thuốc kháng acid chứa muối nào?",
    "options": [
      "Natri alginat",
      "Nhôm hydroxyd",
      "Magnesi trisilicat",
      "Calci carbonat"
    ],
    "correct": 3,
    "explanation": "Calci carbonat tác dụng trung hòa acid nhanh nhưng lượng Ca2+ tự do kích thích trực tiếp tế bào G giải phóng gastrin làm bài tiết acid thứ phát dội ngược. Uống lượng lớn CaCO3 cùng sữa giàu calci gây hội chứng kiềm sữa: tăng canxi máu, nhiễm kiềm chuyển hóa và suy thận.",
    "reference": "Sách Dược lý 2 tr. 103"
  },
  {
    "id": 207,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc giãn phế quản tác dụng kéo dài (LABA như Salmeterol, Formoterol) có nguyên tắc sử dụng an toàn bắt buộc trong bệnh hen phế quản là gì?",
    "options": [
      "Chỉ được dùng đường tiêm bắp sâu khi đang lên cơn hen cấp tính",
      "Không bao giờ được sử dụng đơn độc mà luôn phải phối hợp cùng với Corticoid dạng hít ICS",
      "Bắt buộc phải dùng kèm với thuốc kháng sinh nhóm macrolid",
      "Uống liên tục liều cao vào mỗi buổi sáng"
    ],
    "correct": 1,
    "explanation": "Trong hen phế quản, dùng đơn độc LABA (không có ICS) sẽ làm giãn phế quản che lấp tình trạng viêm nhiễm nền đường thở đang tiến triển, dẫn tới nguy cơ bùng phát cơn hen kịch phát ác tính và tăng tử vong do hen. Do đó LABA bắt buộc phải phối hợp cùng ICS.",
    "reference": "Sách Dược lý 2 tr. 267 & Dược lý hô hấp"
  },
  {
    "id": 208,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Ipratropium bromid và Tiotropium bromid là thuốc giãn phế quản tác động theo cơ chế nào, đặc biệt hiệu quả trong bệnh phổi tắc nghẽn mạn tính (COPD)?",
    "options": [
      "Chẹn kênh calci phụ thuộc điện thế",
      "Kích thích chọn lọc thụ thể beta-2 adrenergic",
      "Ức chế enzym 5-lipoxygenase",
      "Kháng thụ thể cholinergic muscarinic M3 trên cơ trơn phế quản"
    ],
    "correct": 3,
    "explanation": "Ipratropium (tác dụng ngắn SAMA) và Tiotropium (tác dụng dài LAMA) là dẫn xuất amoni bậc 4 đối kháng cạnh tranh tại thụ thể M3 của acetylcholin ở cơ trơn khí phế quản, ngăn cản co thắt phế quản và giảm tăng tiết chất nhầy, là thuốc nền tảng trong điều trị COPD.",
    "reference": "Sách Dược lý 2 tr. 345 & Dược lý hô hấp"
  },
  {
    "id": 209,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc kháng thể đơn dòng Omalizumab được chỉ định trong điều trị hen phế quản dị ứng nặng kháng trị có cơ chế tác dụng là gì?",
    "options": [
      "Phá hủy trực tiếp tế bào lympho B nhớ",
      "Gắn đặc hiệu vào vùng hằng định của kháng thể IgE tự do trong máu ngăn không cho IgE gắn vào thụ thể trên dưỡng bào",
      "Trung hòa trực tiếp chất gây co thắt phế quản leukotrien",
      "Ức chế thụ thể IL-5 trên bạch cầu ái toan"
    ],
    "correct": 1,
    "explanation": "Omalizumab là kháng thể đơn dòng tái tổ hợp gắn chọn lọc vào kháng thể IgE tự do trong tuần hoàn, ngăn chặn IgE gắn lên thụ thể có ái lực cao FceRI trên bề mặt dưỡng bào (mast cell) và bạch cầu ái kiềm, triệt tiêu phản ứng dị ứng giải phóng histamin và leukotrien.",
    "reference": "Sách Dược lý 2 tr. 267 & Dược lý hô hấp"
  },
  {
    "id": 210,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong cấp cứu sốc phản vệ độ II trở lên đe dọa ngừng tuần hoàn và suy hô hấp, thuốc cứu mạng bắt buộc phải tiêm bắp ngay lập tức là gì?",
    "options": [
      "Methylprednisolon",
      "Diphenhydramin",
      "Promethazin",
      "Adrenalin"
    ],
    "correct": 3,
    "explanation": "Adrenalin là thuốc hồi sức cấp cứu số 1 sống còn trong sốc phản vệ nhờ tác dụng kích thích alpha-1 gây co mạch nâng huyết áp, kích thích beta-1 tăng co bóp tim và kích thích beta-2 gây giãn phế quản cực mạnh. Kháng histamin H1 và Corticoid chỉ là thuốc hỗ trợ hàng hai.",
    "reference": "Sách Dược lý 2 tr. 346"
  },
  {
    "id": 211,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Dimenhydrinat và Diphenhydramin thường được sử dụng phổ biến trong lâm sàng để dự phòng và điều trị hội chứng nào?",
    "options": [
      "Nhiễm khuẩn đường tiết niệu cấp",
      "Say tàu xe, chóng mặt và rối loạn tiền đình",
      "Cơn hen phế quản ác tính",
      "Tăng huyết áp kịch phát do u tủy thượng thận"
    ],
    "correct": 1,
    "explanation": "Nhờ tác dụng ức chế thụ thể H1 ở trung tâm nôn hành não và tác dụng kháng cholinergic ức chế dẫn truyền tiền đình về tiểu não, Dimenhydrinat (Nautamine) và Diphenhydramin là thuốc chống say tàu xe (motion sickness) và chống nôn rất hiệu quả.",
    "reference": "Sách Dược lý 2 tr. 347"
  },
  {
    "id": 212,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc kháng histamin H1 thế hệ 1 (như Clorpheniramin, Promethazin) bị CHỐNG CHỈ ĐỊNH hoặc phải hết sức thận trọng ở nhóm bệnh nhân nào sau đây do tác dụng kháng cholinergic?",
    "options": [
      "Bệnh nhân phì đại lành tính tuyến tiền liệt và bệnh nhân glôcôm góc đóng",
      "Bệnh nhân bị tiêu chảy cấp mất nước",
      "Bệnh nhân nhịp tim nhanh trên thất",
      "Phụ nữ trẻ tuổi bị viêm mũi dị ứng theo mùa"
    ],
    "correct": 0,
    "explanation": "Do có tác dụng phong bế thụ thể muscarinic M3 giống Atropin, kháng H1 thế hệ 1 gây bí tiểu cấp ở nam giới có phì đại tuyến tiền liệt (co thắt cơ thắt cổ bàng quang, giãn cơ bàng quang) và gây giãn đồng tử làm bít tắc góc tiền phòng gây tăng nhãn áp cấp ở người bệnh glôcôm góc đóng.",
    "reference": "Sách Dược lý 2 tr. 345, 347"
  },
  {
    "id": 213,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Pyrantel pamoat tẩy giun theo cơ chế tác dụng sinh học nào?",
    "options": [
      "Ức chế thu nhận ion calci của ấu trùng sán",
      "Kích thích liên tục thụ thể nicotinic làm khử cực kéo dài tấm vận động thần kinh cơ, gây liệt cứng cơ giun",
      "Gây rối loạn màng nhân của ký sinh trùng đơn bào",
      "Ức chế tổng hợp vỏ chitin của trứng giun"
    ],
    "correct": 1,
    "explanation": "Pyrantel pamoat là chất phong bế thần kinh cơ theo cơ chế khử cực tương tự nicotin và ức chế enzym cholinesterase của giun, làm cơ giun bị co cứng liên tục không hồi phục và bị nhu động ruột đẩy tuột ra ngoài theo phân.",
    "reference": "Sách Dược lý 2 tr. 213-214"
  },
  {
    "id": 214,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong điều trị nhiễm giun kim bằng Mebendazol hoặc Albendazol, vì sao nguyên tắc bắt buộc là phải uống nhắc lại liều thứ hai sau 2 đến 4 tuần?",
    "options": [
      "Để kích thích hệ miễn dịch ruột sản sinh kháng thể chống giun",
      "Thuốc chỉ diệt được giun trưởng thành mà không diệt được trứng giun, uống nhắc lại để diệt lứa giun mới nở phòng tái nhiễm",
      "Liều đầu tiên chỉ có tác dụng làm giun giảm khả năng vận động",
      "Để bù trừ lượng thuốc bị phân hủy bởi enzym vi khuẩn đại tràng"
    ],
    "correct": 1,
    "explanation": "Thuốc nhóm benzimidazol diệt rất tốt giun kim trưởng thành nhưng hầu như không tiêu diệt được trứng giun kim còn bám ở nếp gấp hậu môn hoặc quần áo, móng tay. Sau 2-4 tuần trứng nở thành lứa giun mới, uống liều 2 giúp cắt đứt hoàn toàn chu trình tái nhiễm tự thân.",
    "reference": "Sách Dược lý 2 tr. 216"
  },
  {
    "id": 215,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Niclosamid là thuốc trị sán dây (sán dải bò, sán dải cá, sán dải heo) có cơ chế tác dụng là gì?",
    "options": [
      "Phá hủy chuỗi xoắn kép ADN của sán",
      "Gắn vào tubulin ngăn cản tạo thoi phân bào",
      "Ức chế quá trình phosphoryl hóa oxy hóa tạo ATP ở ty thể của sán dây",
      "Kích thích thụ thể GABA làm giãn cơ sán"
    ],
    "correct": 2,
    "explanation": "Niclosamid ức chế sự hấp thu glucose và ức chế quá trình phosphoryl hóa oxy hóa liên kết tại ty thể của sán dây, làm sán mất năng lượng ATP và đầu sán cùng các đốt sán bị phân rã, trôi theo phân ra ngoài.",
    "reference": "Sách Dược lý 2 tr. 220"
  },
  {
    "id": 216,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong phác đồ điều trị áp xe gan do amip, vì sao sau đợt dùng Metronidazol hoặc Tinidazol bệnh nhân vẫn bắt buộc phải uống tiếp một đợt thuốc Diloxanid furoat?",
    "options": [
      "Để làm tan các ổ sẹo xơ trong nhu mô gan",
      "Để giải độc gan do tác dụng phụ của metronidazol",
      "Để tiêu diệt triệt để thể amip mang kén trong lòng đại tràng, ngăn ngừa nguồn lây và tránh tái phát bệnh",
      "Để kích thích đường mật bài tiết nhanh lượng mủ tồn dư"
    ],
    "correct": 2,
    "explanation": "Metronidazol tiêu diệt rất tốt thể amip hoạt động ăn hồng cầu ở mô gan và thành ruột nhưng không có tác dụng trên thể kén amip trong lòng ruột. Khoảng 90% bệnh nhân áp xe gan do amip vẫn còn mang kén ở đại tràng; uống thêm Diloxanid furoat giúp quét sạch kén, triệt tiêu ổ chứa mầm bệnh.",
    "reference": "Sách Dược lý 2 tr. 209-210"
  },
  {
    "id": 217,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hai thuốc Statin nào sau đây là tiền chất (dạng vòng lacton chưa có hoạt tính), cần phải qua gan thủy phân mở vòng mới có tác dụng ức chế HMG-CoA reductase?",
    "options": [
      "Pravastatin và Fluvastatin",
      "Pitavastatin và Cerivastatin",
      "Lovastatin và Simvastatin",
      "Atorvastatin và Rosuvastatin"
    ],
    "correct": 2,
    "explanation": "Lovastatin và Simvastatin là các phân tử dạng este vòng lacton (tiền chất trơ). Sau khi hấp thu vào gan, enzym carboxyesterase thủy phân mở vòng lacton thành dạng dẫn xuất acid beta-hydroxy có hoạt tính sinh học.",
    "reference": "Sách Dược lý 2 tr. 94"
  },
  {
    "id": 218,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc hạ mỡ máu nhóm Statin nào sau đây có thời gian bán thải kéo dài (khoảng 14 - 20 giờ), có hoạt lực hạ LDL-C mạnh nhất và có thể uống vào bất kỳ thời điểm nào trong ngày?",
    "options": [
      "Lovastatin và Simvastatin",
      "Pravastatin và Fluvastatin",
      "Atorvastatin và Rosuvastatin",
      "Mevastatin và Compactin"
    ],
    "correct": 2,
    "explanation": "Atorvastatin (t1/2 khoảng 14 giờ) và Rosuvastatin (t1/2 khoảng 19-20 giờ) có thời gian bán hủy dài vượt trội so với các statin cũ (t1/2 1-3 giờ), ức chế HMG-CoA reductase suốt ngày đêm nên bệnh nhân có thể uống thuốc linh hoạt vào buổi sáng, trưa hoặc tối.",
    "reference": "Sách Dược lý 2 tr. 95"
  },
  {
    "id": 219,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Statin nào sau đây được đào thải chủ yếu qua phản ứng sulfat hóa mà không chuyển hóa qua hệ enzym cytochrom P450 isoenzym CYP3A4, ít xảy ra tương tác thuốc nhất?",
    "options": [
      "Lovastatin",
      "Atorvastatin",
      "Pravastatin",
      "Simvastatin"
    ],
    "correct": 2,
    "explanation": "Pravastatin là statin thân nước, không chuyển hóa qua hệ cytochrom P450 (CYP3A4) mà bài xuất qua phản ứng sulfat hóa và liên hợp glucuronic, do đó rất ít tương tác thuốc khi dùng cùng các thuốc ức chế CYP3A4 (kháng nấm azol, macrolid, ức chế protease).",
    "reference": "Sách Dược lý 2 tr. 95"
  },
  {
    "id": 220,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Loại Lipoprotein nào trong huyết tương chứa hàm lượng cholesterol cao nhất và là thủ phạm chính gây hình thành mảng xơ vữa động mạch?",
    "options": [
      "HDL",
      "LDL",
      "VLDL",
      "Chylomicron"
    ],
    "correct": 1,
    "explanation": "LDL vận chuyển tới 60-70% lượng cholesterol trong máu đến cung cấp cho các mô ngoại vi. Khi nồng độ LDL tăng cao, phân tử bị oxy hóa (ox-LDL) thâm nhập dưới lớp nội mô động mạch và bị đại thực bào nuốt tạo tế bào bọt, khởi động mảng xơ vữa động mạch.",
    "reference": "Sách Dược lý 2 tr. 91-92"
  },
  {
    "id": 221,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cơ chế tác dụng phân tử của Cloroquin trong việc tiêu diệt thể vô tính trong hồng cầu của ký sinh trùng sốt rét là gì?",
    "options": [
      "Ức chế chuỗi vận chuyển electron qua phức hợp cytochrom bc1",
      "Tích lũy trong không bào tiêu hóa và ức chế enzym heme polymerase làm tích tụ hem tự do gây độc làm thủng màng ký sinh trùng",
      "Phong bế thụ thể xâm nhập màng tế bào hồng cầu",
      "Ức chế enzym tổng hợp acid folic dihydropteroat synthetase"
    ],
    "correct": 1,
    "explanation": "Ký sinh trùng sốt rét ăn hemoglobin hồng cầu giải phóng hem tự do rất độc; ký sinh trùng dùng enzym heme polymerase để polymer hóa hem thành hemozoin (sắc tố sốt rét) không độc. Cloroquin ức chế enzym này, làm nồng độ hem tự do tăng vọt phá hủy màng tế bào ký sinh trùng.",
    "reference": "Sách Dược lý 2 tr. 198"
  },
  {
    "id": 222,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Các dẫn xuất Artemisinin (Artesunat, Artemether) có cấu trúc hóa học đặc thù chứa nhóm chức nào quyết định hoạt tính diệt ký sinh trùng cực nhanh?",
    "options": [
      "Cầu nối endoperoxid",
      "Vòng lactam 4 cạnh",
      "Nhóm thế sulfonamid gắn nhân benzen",
      "Nhóm thiol -SH tự do"
    ],
    "correct": 0,
    "explanation": "Phân tử artemisinin chứa cầu nối sesquiterpen lacton có cầu nối nội endoperoxid (-O-O-). Khi vào cơ thể, cầu nối này tương tác với ion sắt Fe2+ của hem trong hồng cầu bị nhiễm, tạo ra các gốc tự do ái điện tử cực mạnh phá hủy màng và protein ký sinh trùng.",
    "reference": "Sách Dược lý 2 tr. 193-194"
  },
  {
    "id": 223,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Phụ nữ mang thai trong 3 tháng đầu (tam cá nguyệt thứ nhất) nếu mắc sốt rét do P. falciparum chưa biến chứng, phác đồ điều trị được Bộ Y tế khuyến cáo là gì?",
    "options": [
      "Dùng đơn độc Primaquin liều cao",
      "Tiêm bắp Doxycyclin liên tục 14 ngày",
      "Dùng dung dịch truyền tĩnh mạch Natri nitroprusiat",
      "Quinin phối hợp với Clindamycin trong 7 ngày"
    ],
    "correct": 3,
    "explanation": "Theo hướng dẫn của Bộ Y tế, đối với phụ nữ có thai trong 3 tháng đầu, các thuốc ACT chưa đủ dữ liệu an toàn phôi thai nên ưu tiên điều trị bằng Quinin uống phối hợp Clindamycin trong 7 ngày. Từ tháng thứ 4 trở đi mới được dùng các phác đồ phối hợp dẫn xuất Artemisinin (ACT).",
    "reference": "Sách Dược lý 2 tr. 195, 204"
  },
  {
    "id": 224,
    "subject": "duocly2",
    "chapter": "KTGHP",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân nam 65 tuổi bị tăng huyết áp, suy tim sung huyết có phân suất tống máu giảm (EF = 30%) và đái tháo đường typ 2. Thuốc chẹn kênh calci nào sau đây bị CHỐNG CHỈ ĐỊNH sử dụng vì làm tăng nguy cơ tử vong do suy tim nặng hơn?",
    "options": [
      "Verapamil",
      "Nicardipin",
      "Amlodipin",
      "Felodipin"
    ],
    "correct": 0,
    "explanation": "Verapamil (và Diltiazem) có tác dụng ức chế co bóp cơ tim rất mạnh (inotropic âm tính), làm giảm nặng phân suất tống máu và làm trầm trọng thêm tình trạng ứ huyết ở bệnh nhân suy tim EF giảm, chống chỉ định tuyệt đối trong suy tim EF giảm. Chỉ CCB DHP thế hệ 2 (Amlodipin, Felodipin) mới an toàn khi cần hạ áp.",
    "reference": "Sách Dược lý 2 tr. 64-66"
  },
  {
    "id": 225,
    "subject": "duocly2",
    "chapter": "KTGHP",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tương tác thuốc nào sau đây giữa thuốc chống sốt rét và thuốc tim mạch có nguy cơ gây xoắn đỉnh và ngừng tim đe dọa tử vong?",
    "options": [
      "Artesunat phối hợp với Vitamin C",
      "Primaquin phối hợp với Metformin",
      "Cloroquin phối hợp với Paracetamol",
      "Quinin phối hợp với thuốc chống loạn nhịp Amiodaron hoặc Procainamid"
    ],
    "correct": 3,
    "explanation": "Quinin (và Mefloquin) có tác dụng kéo dài khoảng QT tương tự thuốc chống loạn nhịp nhóm IA và nhóm III. Khi phối hợp với Amiodaron, Sotalol hoặc Procainamid, tác dụng hiệp đồng làm khoảng QT kéo dài nghiêm trọng dẫn đến loạn nhịp thất xoắn đỉnh (Torsades de pointes) và tử vong.",
    "reference": "Sách Dược lý 2 tr. 37, 197"
  },
  {
    "id": 226,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Các hormon có bản chất là steroid (như cortisol, aldosteron, estrogen, testosteron) có đặc điểm thụ thể và cơ chế hoạt động phân tử là gì?",
    "options": [
      "Khuếch tán qua màng tế bào gắn vào thụ thể nội bào và điều hòa quá trình phiên mã gen",
      "Kích hoạt chuỗi phản ứng enzym ly giải màng tế bào đích",
      "Gắn vào thụ thể bắt cặp protein G trên màng tế bào làm tăng tổng hợp AMP vòng",
      "Mở trực tiếp kênh ion calci trên màng sinh chất trong vòng vài phần nghìn giây"
    ],
    "correct": 0,
    "explanation": "Do có bản chất lipid tan tốt trong mỡ, các hormon steroid dễ dàng khuếch tán qua màng lipid kép vào bên trong tế bào, gắn vào thụ thể đặc hiệu trong bào tương hoặc trong nhân tạo phức hợp hormon - thụ thể, phức hợp này gắn vào trình tự HRE trên ADN điều hòa phiên mã tạo mARN.",
    "reference": "Sách Dược lý 2 tr. 283"
  },
  {
    "id": 227,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cơ chế tránh thai cơ bản của thuốc tránh thai phối hợp dạng uống (chứa Estrogen và Progestin) là gì?",
    "options": [
      "Làm tan rã lớp niêm mạc tử cung gây chảy máu liên tục",
      "Gây tắc nghẽn cơ học vĩnh viễn vòi trứng",
      "Tiêu diệt trực tiếp tinh trùng ngay trong lòng âm đạo",
      "Ức chế bài tiết hormon giải phóng GnRH và ức chế tiết FSH, LH của tuyến yên qua cơ chế điều hòa ngược âm tính làm ngăn cản sự rụng trứng"
    ],
    "correct": 3,
    "explanation": "Estrogen và progestin ngoại sinh nồng độ ổn định tạo phản hồi ức chế âm tính (negative feedback) lên vùng dưới đồi và tuyến yên, làm triệt tiêu đỉnh phóng thích LH giữa chu kỳ kinh nguyệt, do đó ngăn chặn hoàn toàn hiện tượng rụng trứng.",
    "reference": "Sách Dược lý 2 tr. 315-316"
  },
  {
    "id": 228,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Dung dịch Lugol (chứa Iod và Kali iodid) được chỉ định dùng trước phẫu thuật cắt tuyến giáp điều trị bệnh Basedow khoảng 10 - 14 ngày nhằm mục đích gì?",
    "options": [
      "Làm giảm tưới máu, giảm thể tích mạch máu và làm săn chắc tuyến giáp để hạn chế chảy máu trong mổ",
      "Kích thích tuyến cận giáp tăng tiết parathormon",
      "Tiêu diệt hoàn toàn các tế bào ung thư giáp tiềm ẩn",
      "Tăng cường tiết thyroxin để tránh suy giáp trong khi gây mê"
    ],
    "correct": 0,
    "explanation": "Liều cao iodid gây hiệu ứng Wolff-Chaikoff ức chế tạm thời sự giải phóng hormon giáp và ức chế sinh mạch, làm co các mạch máu trong nhu mô giáp, làm tuyến giáp thu nhỏ và săn chắc lại, giúp phẫu thuật viên cắt tuyến giáp dễ dàng và tránh mất máu ồ ạt.",
    "reference": "Sách Dược lý 2 tr. 308"
  },
  {
    "id": 229,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Levothyroxin (L-T4) là thuốc điều trị thay thế suốt đời trong bệnh suy giáp mạn tính, bệnh nhân cần được hướng dẫn thời điểm uống thuốc như thế nào?",
    "options": [
      "Uống chung cùng viên bổ sung Canxi và Sắt",
      "Uống ngay sau khi ăn no bữa ăn trưa",
      "Uống vào lúc nửa đêm cùng một ly sữa đặc giàu đạm",
      "Uống vào buổi sáng sớm lúc bụng đói cách bữa ăn sáng ít nhất 30 đến 60 phút"
    ],
    "correct": 3,
    "explanation": "Levothyroxin hấp thu tốt nhất ở dạ dày khi môi trường có tính acid lúc đói. Thức ăn, sữa và các ion đa hóa trị như Calci, Sắt gắn kết tạo phức không tan làm giảm mạnh hấp thu T4. Do đó bắt buộc phải uống lúc sáng sớm trước khi ăn sáng ít nhất 30-60 phút.",
    "reference": "Sách Dược lý 2 tr. 302-303"
  },
  {
    "id": 230,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Đặc điểm nhận dạng cảm quan quan trọng của Insulin NPH (Isophane) và các loại insulin premix trộn sẵn khác với insulin Regular là gì?",
    "options": [
      "Là dung dịch hoàn toàn trong suốt như nước cất không bao giờ được lắc",
      "Có dạng gel đông đặc cần đun nóng trước khi tiêm",
      "Là dung dịch hỗn dịch có màu đục như nước vo gạo, bắt buộc phải lắc hoặc lăn nhẹ ống thuốc trước khi tiêm",
      "Có màu vàng huỳnh quang phát sáng trong bóng tối"
    ],
    "correct": 2,
    "explanation": "Insulin Regular và các analog hòa tan là dung dịch trong suốt. Insulin NPH là hỗn dịch chứa protamin tạo tinh thể làm chậm hấp thu nên có màu đục đồng nhất. Trước khi tiêm, người bệnh bắt buộc phải lăn nhẹ bút tiêm giữa hai lòng bàn tay để phân tán đều hạt thuốc.",
    "reference": "Sách Dược lý 2 tr. 295"
  },
  {
    "id": 231,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Khi bệnh nhân đái tháo đường bị hạ glucose máu nặng dẫn đến lơ mơ hoặc hôn mê, biện pháp xử trí cấp cứu khẩn cấp nào là CHỐNG CHỈ ĐỊNH?",
    "options": [
      "Tiêm bắp hoặc tiêm dưới da 1mg Glucagon",
      "Tiêm tĩnh mạch dung dịch Glucose ưu trương 20% hoặc 30%",
      "Đặt bệnh nhân nằm nghiêng an toàn để tránh hít sặc",
      "Cố ép bệnh nhân uống nước đường hoặc cho ngậm kẹo qua đường miệng"
    ],
    "correct": 3,
    "explanation": "Khi bệnh nhân đã rối loạn tri giác hoặc hôn mê, phản xạ nuốt và đóng thanh môn bị ức chế. Việc cố đổ nước đường vào miệng bệnh nhân sẽ làm nước đường tràn vào khí phế quản gây sặc nghẹt thở, viêm phổi hít tử vong. Bắt buộc phải cấp cứu bằng tiêm truyền tĩnh mạch glucose hoặc tiêm glucagon.",
    "reference": "Sách Dược lý 2 tr. 296"
  },
  {
    "id": 232,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc hạ đường huyết nhóm Sulfonylurea nào sau đây có thời gian tác dụng trung bình, được chuyển hóa và thải trừ cân bằng qua cả gan và thận, ít gây nguy cơ hạ đường huyết nặng nhất?",
    "options": [
      "Chlorpropamid",
      "Tolbutamid",
      "Gliclazid",
      "Glibenclamid"
    ],
    "correct": 2,
    "explanation": "Gliclazid (biệt dược Diamicron MR) kích thích tiết insulin phụ thuộc nồng độ glucose tốt hơn và phục hồi đỉnh tiết sớm của insulin, đào thải cân bằng nên có nguy cơ gây biến chứng hạ đường huyết thấp hơn rõ rệt so với Glibenclamid và Chlorpropamid.",
    "reference": "Sách Dược lý 2 tr. 297"
  },
  {
    "id": 233,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hội chứng giảm tiểu cầu do Heparin (HIT - Heparin-Induced Thrombocytopenia) typ II là một biến chứng miễn dịch nguy hiểm. Nghịch lý lâm sàng của hội chứng này là gì?",
    "options": [
      "Bệnh nhân bị tan máu cấp tính nhưng hồng cầu lưới lại giảm về 0",
      "Máu chảy đầm đìa khắp các niêm mạc nhưng thời gian đông máu lại rút ngắn",
      "Số lượng tiểu cầu giảm sâu nhưng bệnh nhân lại đối mặt với nguy cơ huyết khối tắc mạch lan tỏa đe dọa tử vong",
      "Tiểu cầu giảm nhưng nồng độ fibrinogen trong huyết tương tăng gấp 10 lần"
    ],
    "correct": 2,
    "explanation": "HIT typ II xảy ra do hình thành kháng thể IgG kháng phức hợp Heparin-PF4. Kháng thể này kích hoạt mạnh mẽ các tiểu cầu còn lại giải phóng vi hạt procoagulant, dẫn tới nghịch lý: tiểu cầu bị tiêu thụ làm số lượng giảm nhưng lại bùng phát huyết khối tắc mạch động tĩnh mạch ồ ạt.",
    "reference": "Sách Dược lý 2 tr. 116-117"
  },
  {
    "id": 234,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Chất đối kháng đặc hiệu (antidote) được chỉ định để trung hòa khẩn cấp tác dụng chống đông của thuốc ức chế trực tiếp thrombin đường uống Dabigatran là gì?",
    "options": [
      "Vitamin K1",
      "Idarucizumab",
      "Protamin sulfat",
      "Andexanet alfa"
    ],
    "correct": 1,
    "explanation": "Idarucizumab (Praxbind) là một kháng thể đơn dòng nhân hóa dạng phân đoạn Fab, có ái lực gắn với Dabigatran mạnh gấp 350 lần so với thrombin, giúp trung hòa hoàn toàn tác dụng chống đông của dabigatran trong vòng vài phút.",
    "reference": "Sách Dược lý 2 tr. 121"
  },
  {
    "id": 235,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Acid Tranexamic là thuốc cầm máu có cơ chế tác dụng chống tiêu fibrin như thế nào?",
    "options": [
      "Cạnh tranh chiếm giữ vị trí gắn lysin trên phân tử plasminogen, ngăn cản hoạt hóa plasminogen thành plasmin",
      "Gắn trực tiếp vào yếu tố VIII làm tăng tốc độ đông máu nội sinh",
      "Kích thích tủy xương tăng sản xuất tiểu cầu trong vòng 30 phút",
      "Làm co thắt cơ học toàn bộ các động mạch lớn đang chảy máu"
    ],
    "correct": 0,
    "explanation": "Acid Tranexamic gắn cạnh tranh vào vị trí gắn lysin của plasminogen và plasmin, ngăn cản plasmin liên kết với sợi huyết fibrin, làm chậm hoặc ức chế sự tiêu sợi huyết, bảo vệ cục máu đông fibrin không bị tan rã giúp cầm máu hiệu quả.",
    "reference": "Sách Dược lý 2 tr. 126"
  },
  {
    "id": 236,
    "subject": "duocly2",
    "chapter": "Thuốc chữa thiếu máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân sau phẫu thuật cắt toàn bộ dạ dày do ung thư dạ dày bắt buộc phải được bổ sung định kỳ suốt đời Vitamin B12 theo đường nào sau đây?",
    "options": [
      "Ngậm dưới lưỡi dạng kẹo",
      "Tiêm bắp sâu",
      "Uống dạng siro hòa tan",
      "Uống viên nén thông thường"
    ],
    "correct": 1,
    "explanation": "Dạ dày bị cắt toàn bộ đồng nghĩa với việc mất hoàn toàn tế bào viền tiết yếu tố nội tại Castle. Không có yếu tố nội, vitamin B12 uống vào sẽ không thể kết hợp để hấp thu tại hồi tràng. Do đó bắt buộc phải tiêm bắp định kỳ (1-3 tháng/lần) suốt đời.",
    "reference": "Sách Dược lý 2 tr. 128"
  },
  {
    "id": 237,
    "subject": "duocly2",
    "chapter": "Thuốc chữa thiếu máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Khi điều trị thiếu máu do thiếu sắt bằng các chế phẩm sắt đường uống, dấu hiệu cảm quan bình thường nào phân cần được giải thích trước cho bệnh nhân để tránh lo lắng?",
    "options": [
      "Phân có màu trắng bệch như phân cò",
      "Phân có màu đen sẫm hoặc xám đen nhưng không kèm nhầy máu",
      "Phân có màu đỏ tươi như máu mới chảy",
      "Phân có mùi hôi tanh nồng nặc và có bọt khí"
    ],
    "correct": 1,
    "explanation": "Một lượng lớn ion sắt không hấp thu hết trong lòng ruột sẽ phản ứng với khí hydro sulfid (H2S) do vi khuẩn tạo ra sinh ra sắt sulfid (FeS) có màu đen, làm phân có màu đen sẫm. Hiện tượng này hoàn toàn lành tính nhưng cần phân biệt với xuất huyết tiêu hóa.",
    "reference": "Sách Dược lý 2 tr. 127"
  },
  {
    "id": 238,
    "subject": "duocly2",
    "chapter": "Vitamin",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Vitamin K3 tổng hợp (Menadion) hiện nay bị CẤM chỉ định sử dụng cho trẻ sơ sinh và phụ nữ sắp sinh vì lý do an toàn nào?",
    "options": [
      "Nguy cơ gây tan máu cấp tính, tăng bilirubin tự do dẫn đến vàng da nhân não ở trẻ sơ sinh",
      "Gây ngừng thở do ức chế trung tâm hô hấp ở hành não",
      "Gây suy thận cấp do kết tủa tinh thể trong ống lượn",
      "Gây cốt hóa sớm các đầu xương dài làm trẻ bị lùn"
    ],
    "correct": 0,
    "explanation": "Menadion (Vitamin K3) là dẫn chất tổng hợp tan trong nước. Ở trẻ sơ sinh và người thiếu men G6PD, Menadion gây oxy hóa màng hồng cầu làm vỡ hồng cầu hàng loạt (tan máu), giải phóng bilirubin gián tiếp tự do ngấm qua hàng rào máu não chưa hoàn thiện gây vàng da nhân não và tổn thương thần kinh vĩnh viễn.",
    "reference": "Sách Dược lý 2 tr. 327"
  },
  {
    "id": 239,
    "subject": "duocly2",
    "chapter": "Vitamin",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Dấu hiệu nhiễm độc mạn tính nguy hiểm khi lạm dụng Vitamin A liều cao ở người lớn là gì?",
    "options": [
      "Hạ canxi máu nặng gây co giật bàn tay người đỡ đẻ",
      "Tăng áp lực nội sọ giả u não gây đau đầu dữ dội, buồn nôn, phù gai thị và bong tróc vảy da toàn thân",
      "Bệnh Scorbut gây chảy máu nướu răng tự phát",
      "Viêm cầu thận tiến triển nhanh kèm vô niệu"
    ],
    "correct": 1,
    "explanation": "Dùng thừa vitamin A kéo dài gây hội chứng ngộ độc vitamin A mạn: tăng áp lực nội sọ lành tính (giả u não - pseudotumor cerebri) với triệu chứng đau đầu nhiều, nôn vọt, nhìn đôi, phù nề gai thị, kèm theo rụng tóc, khô rát nứt nẻ môi và bong vảy da toàn thân.",
    "reference": "Sách Dược lý 2 tr. 323"
  },
  {
    "id": 240,
    "subject": "duocly2",
    "chapter": "Vitamin",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Vitamin nào sau đây đóng vai trò chất chống oxy hóa tự nhiên mạnh nhất, bảo vệ các acid béo chưa no của màng tế bào khỏi sự phá hủy của các gốc tự do?",
    "options": [
      "Vitamin E",
      "Vitamin B1",
      "Vitamin K1",
      "Vitamin D"
    ],
    "correct": 0,
    "explanation": "Vitamin E (alpha-tocopherol) định vị trong lớp lipid kép của màng tế bào và lipoprotein, đóng vai trò như chất bẫy gốc tự do, ngăn cản phản ứng peroxy hóa lipid màng tế bào và bảo vệ hồng cầu khỏi tan máu do các chất oxy hóa.",
    "reference": "Sách Dược lý 2 tr. 327-328"
  },
  {
    "id": 241,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Khi chủng virus Herpes Simplex (HSV) bị đột biến mất hoạt tính của enzym Thymidine kinase (TK- mutants) kháng lại Acyclovir, thuốc kháng virus nào sau đây được chỉ định thay thế?",
    "options": [
      "Famciclovir",
      "Foscarnet",
      "Valacyclovir",
      "Penciclovir"
    ],
    "correct": 1,
    "explanation": "Foscarnet là chất tương tự pyrophosphat vô cơ ức chế trực tiếp vị trí gắn pyrophosphat của ADN polymerase virus mà không cần bất kỳ bước phosphoryl hóa nào của enzym Thymidine kinase (TK). Do đó Foscarnet là thuốc lựa chọn hàng đầu cho các chủng HSV và VZV đề kháng acyclovir.",
    "reference": "Sách Dược lý 2 tr. 233"
  },
  {
    "id": 242,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Ganciclovir là thuốc kháng virus tương tự guanosin được ưu tiên chỉ định số 1 trong trường hợp nhiễm virus nào ở bệnh nhân suy giảm miễn dịch?",
    "options": [
      "Cytomegalovirus CMV gây viêm võng mạc, viêm phổi hoặc viêm đại tràng",
      "Virus viêm não Nhật Bản B",
      "Virus dại xâm nhập hệ thần kinh",
      "Virus hợp bào hô hấp RSV ở trẻ nhỏ"
    ],
    "correct": 0,
    "explanation": "Ganciclovir được phosphoryl hóa bởi enzym phosphotransferase UL97 đặc hiệu của Cytomegalovirus (CMV), có hoạt tính ức chế CMV mạnh hơn Acyclovir từ 50-100 lần, là thuốc đầu tay điều trị và dự phòng nhiễm CMV ở bệnh nhân ghép tạng hoặc AIDS.",
    "reference": "Sách Dược lý 2 tr. 232-233"
  },
  {
    "id": 243,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Efavirenz (EFV) là thuốc kháng HIV nhóm NNRTI có tác dụng không mong muốn đặc thù nổi bật trên cơ quan nào khiến thuốc được khuyên uống trước khi đi ngủ?",
    "options": [
      "Hệ tim mạch gây suy tim xung huyết cấp",
      "Tuyến giáp gây bướu giáp khổng lồ",
      "Hệ thần kinh trung ương gây ác mộng, mất ngủ, chóng mặt, lo âu và ảo giác",
      "Hệ cơ quan vận động gây viêm cân gan bàn chân"
    ],
    "correct": 2,
    "explanation": "Khoảng 50% bệnh nhân dùng Efavirenz gặp tác dụng phụ thần kinh - tâm thần: gặp ác mộng sống động kỳ lạ, mất ngủ, chóng mặt, giảm khả năng tập trung, trầm cảm. Uống thuốc vào buổi tối ngay trước khi đi ngủ giúp bệnh nhân vượt qua các triệu chứng này dễ dàng hơn.",
    "reference": "Sách Dược lý 2 tr. 238"
  },
  {
    "id": 244,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Sofosbuvir là thuốc kháng virus tác dụng trực tiếp (DAA) có bước ngoặt điều trị khỏi hoàn toàn bệnh Viêm gan C mạn tính (HCV) nhờ cơ chế phân tử nào?",
    "options": [
      "Ức chế enzym protease NS3/4A",
      "Ức chế protein không cấu trúc NS5A",
      "Ức chế sự gắn kết của virus vào thụ thể CD81",
      "Ức chế chọn lọc enzym ARN polymerase phụ thuộc ARN NS5B của virus HCV"
    ],
    "correct": 3,
    "explanation": "Sofosbuvir là một chất tương tự nucleotid ức chế cạnh tranh enzym NS5B RNA-dependent RNA polymerase của virus viêm gan C, chấm dứt sự nhân lên của ARN virus, có hiệu lực trên tất cả các kiểu gen (genotype) của HCV với tỷ lệ khỏi bệnh trên 95%.",
    "reference": "Sách Dược lý 2 tr. 240-241"
  },
  {
    "id": 245,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "5-Fluorouracil (5-FU) là thuốc chống ung thư thuộc nhóm chất chống chuyển hóa pyrimidin có cơ chế tác dụng là gì?",
    "options": [
      "Kích thích chuỗi enzym ly giải protein ubiquitin",
      "Ức chế enzym ribonucleotid reductase ở màng ngoài ty thể",
      "Ức chế enzym Thymidylat synthase TS ngăn chặn quá trình tổng hợp dTMP từ dUMP",
      "Gắn cộng hóa trị vào gốc purin gây đứt gãy sợi kép ADN"
    ],
    "correct": 2,
    "explanation": "5-FU được chuyển hóa nội bào thành FdUMP, chất này tạo phức hợp ức chế cạnh tranh giả với enzym Thymidylat synthase và acid folinic, ngăn cản chuyển dUMP thành dTMP, dẫn tới hiện tượng 'chết tế bào do thiếu thymin' (thymineless death).",
    "reference": "Sách Dược lý 2 tr. 246"
  },
  {
    "id": 246,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Các thuốc chống ung thư nhóm Taxan (như Paclitaxel, Docetaxel) có nguồn gốc chiết xuất từ loài thực vật nào?",
    "options": [
      "Cây Dừa cạn",
      "Cây Ba gạc",
      "Cây Thuốc phiện",
      "Cây Thông đỏ"
    ],
    "correct": 3,
    "explanation": "Paclitaxel được chiết xuất từ vỏ cây Thông đỏ Thái Bình Dương (Taxus brevifolia), Docetaxel là dẫn xuất bán tổng hợp từ lá cây Thông đỏ châu Âu (Taxus baccata). Thuốc có tác dụng làm bền vững vi quản, ngăn cản sự tháo dỡ thoi phân bào.",
    "reference": "Sách Dược lý 2 tr. 254"
  },
  {
    "id": 247,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Kháng sinh chống ung thư Bleomycin có ưu điểm lâm sàng nổi bật là ít ức chế tủy xương, tuy nhiên có tác dụng không mong muốn nghiêm trọng trên cơ quan nào?",
    "options": [
      "Gây điếc tai không hồi phục",
      "Gây hoại tử vỏ thượng thận hai bên",
      "Gây xơ hóa phổi kẽ thâm nhiễm và suy hô hấp",
      "Gây suy tim sung huyết mạn tính phụ thuộc liều"
    ],
    "correct": 2,
    "explanation": "Do mô phổi và da có lượng enzym bleomycin hydrolase (enzym bất hoạt thuốc) rất thấp nên Bleomycin tích lũy nồng độ cao ở phổi, sinh các gốc tự do kích hoạt viêm phế nang và dẫn tới xơ hóa phổi (pulmonary fibrosis) đe dọa tử vong.",
    "reference": "Sách Dược lý 2 tr. 259"
  },
  {
    "id": 248,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Dexrazoxan được sử dụng trong hóa trị liệu ung thư phối hợp cùng Doxorubicin nhằm mục đích gì?",
    "options": [
      "Tăng cường hoạt tính tiêu diệt khối u của Doxorubicin lên gấp 10 lần",
      "Kích thích tủy xương tăng sinh bạch cầu hạt nhanh chóng",
      "Ngăn cản tác dụng phụ gây rụng tóc của thuốc hóa chất",
      "Bảo vệ cơ tim khỏi độc tính gây suy tim do các gốc tự do của Doxorubicin tạo phức với sắt"
    ],
    "correct": 3,
    "explanation": "Dexrazoxan là chất tạo phức chelat nội bào đi vào tế bào cơ tim và bị thủy phân thành chất gắn sắt, ngăn cản Doxorubicin tạo phức với ion sắt Fe3+, từ đó triệt tiêu sự hình thành các gốc tự do oxy hóa phá hủy màng tế bào cơ tim.",
    "reference": "Sách Dược lý 2 tr. 258"
  },
  {
    "id": 249,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Biện pháp rửa dạ dày loại trừ chất độc bị CHỐNG CHỈ ĐỊNH trong tình huống ngộ độc đường uống nào sau đây?",
    "options": [
      "Ngộ độc các hóa chất ăn mòn mạnh hoặc dung môi xăng dầu bay hơi",
      "Ngộ độc Paracetamol trong vòng 1 giờ đầu tiên",
      "Ngộ độc nấm độc sau khi ăn bữa trưa 30 phút",
      "Ngộ độc thuốc an thần Barbiturat lượng lớn mới uống"
    ],
    "correct": 0,
    "explanation": "Ngộ độc acid/kiềm mạnh làm niêm mạc thực quản và dạ dày bị mỏng và hoại tử sâu, đưa ống thông vào dễ gây thủng thực quản/dạ dày. Ngộ độc xăng dầu dễ gây trào ngược hít sặc vào phổi gây viêm phổi hóa chất hoại tử tử vong. Bệnh nhân hôn mê chưa đặt nội khí quản cũng chống chỉ định rửa dạ dày.",
    "reference": "Sách Dược lý 2 tr. 355"
  },
  {
    "id": 250,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Than hoạt tính (Activated Charcoal) là chất hấp phụ tiêu hóa rất phổ biến, tuy nhiên than hoạt hầu như KHÔNG có tác dụng hấp phụ chất nào sau đây?",
    "options": [
      "Thuốc an thần gây ngủ nhóm barbiturat",
      "Thuốc chống trầm cảm ba vòng amitriptylin",
      "Thuốc hạ sốt giảm đau paracetamol",
      "Kim loại nặng và các chất điện giải, cồn"
    ],
    "correct": 3,
    "explanation": "Than hoạt hấp phụ tốt các chất hữu cơ không phân cực, có phân tử lượng từ 100 đến 1000 Da. Than hoạt hoàn toàn không hấp phụ các ion nhỏ phân cực cao như sắt, chì, lithium, kali, acid/kiềm mạnh và các phân tử cồn nhỏ như ethanol, methanol.",
    "reference": "Sách Dược lý 2 tr. 355-356"
  },
  {
    "id": 251,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Dimercaprol (BAL) và Calci dinatri edetat (CaNa2EDTA) là thuốc giải độc đặc hiệu điều trị ngộ độc nhóm chất nào?",
    "options": [
      "Ngộ độc kim loại nặng như Chì, Thủy ngân, Asen",
      "Ngộ độc thuốc tê nhóm amid",
      "Ngộ độc chất ức chế men chuyển ACEI",
      "Ngộ độc khí than Carbon monoxid CO"
    ],
    "correct": 0,
    "explanation": "BAL (British Anti-Lewisite) có 2 nhóm sulfhydryl (-SH) tự do tạo phức vòng chelat 5 cạnh bền vững với kim loại nặng (Asen, Thủy ngân, Vàng), cạnh tranh với nhóm -SH của enzym cơ thể. CaNa2EDTA tạo phức hòa tan bền với ion Chì (Pb2+) giúp bài xuất chì an toàn qua thận.",
    "reference": "Sách Dược lý 2 tr. 352-353"
  },
  {
    "id": 252,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hydroxocobalamin (một dạng của Vitamin B12) được sử dụng làm thuốc giải độc cấp cứu đặc hiệu cho bệnh nhân ngộ độc chất nào?",
    "options": [
      "Ngộ độc Insulin",
      "Ngộ độc Opioid",
      "Ngộ độc Heparin",
      "Ngộ độc Cyanid"
    ],
    "correct": 3,
    "explanation": "Hydroxocobalamin chứa nguyên tử coban gắn nhóm hydroxy, khi gặp cyanid trong máu coban sẽ kết hợp với cyanid với ái lực cực mạnh tạo thành cyanocobalamin (chính là Vitamin B12 hoàn toàn không độc), bài tiết nhanh và an toàn qua nước tiểu.",
    "reference": "Sách Dược lý 2 tr. 364"
  },
  {
    "id": 253,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Glycosid tim nhóm Digitalis có nguồn gốc tự nhiên từ bộ phận nào của cây Dương địa hoàng?",
    "options": [
      "Hạt chín phơi khô trong râm",
      "Lá cây thu hái vào năm thứ nhất hoặc năm thứ hai",
      "Hoa tươi mới chớm nở vào buổi sáng",
      "Vỏ rễ cây thu hoạch vào mùa đông"
    ],
    "correct": 1,
    "explanation": "Dược liệu Digitalis purpurea và Digitalis lanata sử dụng bộ phận dùng là lá cây thu hái vào năm thứ nhất hoặc trước khi ra hoa vào năm thứ hai, sấy khô ở nhiệt độ 50-60 độ C để bảo tồn glycosid.",
    "reference": "Sách Dược lý 2 tr. 9"
  },
  {
    "id": 254,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Đơn vị mèo và đơn vị ếch trước đây được dùng để làm gì đối với các chế phẩm Glycosid tim?",
    "options": [
      "Sinh kiểm định hiệu lực sinh học và độc tính của glycosid tim",
      "Định lượng hàm lượng tạp chất nitơ trong cao chiết",
      "Xác định độ tinh khiết hóa học của đường ose",
      "Đo tỷ trọng thể tích của bột lá dương địa hoàng"
    ],
    "correct": 0,
    "explanation": "Do glycosid tim có cấu trúc phức tạp và giới hạn an toàn hẹp, trước khi có phương pháp HPLC, người ta dùng phương pháp sinh vật học (đơn vị ếch, đơn vị mèo) để định chuẩn hoạt lực gây ngừng tim trên súc vật thí nghiệm.",
    "reference": "Sách Dược lý 2 tr. 14"
  },
  {
    "id": 255,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng tăng lực co bóp cơ tim của Digitalis kèm theo đặc điểm nào sau đây về mặt huyết động học?",
    "options": [
      "Làm tăng sức cản ngoại vi tối đa do co thắt toàn bộ mao mạch",
      "Làm giảm thể tích tim trong thời kỳ tâm trương và giảm tiêu thụ oxy cơ tim trên mỗi đơn vị công cơ học",
      "Làm giảm áp lực bơm máu từ tâm thất trái vào động mạch chủ",
      "Làm giãn to các buồng tim và tăng nhu cầu oxy cơ tim gấp 5 lần"
    ],
    "correct": 1,
    "explanation": "Ở tim suy, digitalis làm cơ tim co bóp mạnh và ngắn lại, tống máu triệt để hơn, làm giảm kích thước buồng thất tâm trương, giảm sức căng thành tim và giảm tiêu thụ oxy tính trên mỗi đơn vị công cơ học của tim.",
    "reference": "Sách Dược lý 2 tr. 13"
  },
  {
    "id": 256,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong các chế phẩm của cây Digitalis lanata, glycosid nào được sử dụng phổ biến nhất hiện nay trên lâm sàng?",
    "options": [
      "Digoxin",
      "Lanatosid A",
      "Desacetyl lanatosid C",
      "Gitaloxin"
    ],
    "correct": 0,
    "explanation": "Digoxin thu được từ Digitalis lanata qua quá trình thủy phân mất 1 phân tử glucose và 1 gốc acetyl, là glycosid trợ tim được dùng phổ biến nhất hiện nay nhờ dược động học ổn định và có thể định lượng được trong huyết thanh.",
    "reference": "Sách Dược lý 2 tr. 10, 14"
  },
  {
    "id": 257,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân đang dùng Digoxin nếu tiêm truyền dung dịch Calci clorid (CaCl2) hoặc Calci gluconat đường tĩnh mạch sẽ có nguy cơ xảy ra tai biến gì?",
    "options": [
      "Gây tắc tĩnh mạch phổi do kết tủa calci trong lòng mạch",
      "Gây loãng xương cấp tính do calci bị đào thải ồ ạt qua nước tiểu",
      "Tăng vọt độc tính của digitalis dẫn đến co cứng cơ tim và ngừng tim ở thì tâm thu",
      "Mất hoàn toàn tác dụng trợ tim của digoxin do calci gắn kết cạnh tranh"
    ],
    "correct": 2,
    "explanation": "Cả Digitalis và ion Ca2+ đều có tác dụng làm tăng calci nội bào cơ tim. Tiêm truyền calci tĩnh mạch khi bệnh nhân đang dùng digitalis sẽ gây hiệp đồng độc tính cực mạnh, làm tim co cứng liên tục và ngừng tim vĩnh viễn ở thì tâm thu.",
    "reference": "Sách Dược lý 2 tr. 16-17"
  },
  {
    "id": 258,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Khoảng nồng độ điều trị tối ưu của Digoxin trong huyết tương để đảm bảo hiệu lực và hạn chế ngộ độc là bao nhiêu?",
    "options": [
      "20 đến 50 mg/L",
      "5,0 đến 10,0 mcg/mL",
      "0,5 đến 2,0 ng/mL",
      "0,01 đến 0,05 mg/dL"
    ],
    "correct": 2,
    "explanation": "Khoảng trị liệu của Digoxin rất hẹp: từ 0,5 đến 2,0 ng/mL (thường khuyến cáo duy trì 0,8 - 1,2 ng/mL trong suy tim). Nồng độ trên 2,0 ng/mL có nguy cơ nhiễm độc tim rất cao.",
    "reference": "Sách Dược lý 2 tr. 15"
  },
  {
    "id": 259,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị THA",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Một thuốc chẹn beta thế hệ 3 có ái lực chọn lọc rất cao trên thụ thể beta-1 ở tim, đồng thời kích hoạt enzym eNOS nội mô giải phóng Nitric Oxide (NO) gây giãn mạch và cải thiện chức năng nội mạc là:",
    "options": [
      "Atenolol",
      "Nebivolol",
      "Propranolol",
      "Metoprolol"
    ],
    "correct": 1,
    "explanation": "Nebivolol là thuốc chẹn beta thế hệ 3 chọn lọc cao nhất trên thụ thể beta-1, đồng thời đồng vận thụ thể beta-3 kích hoạt eNOS giải phóng NO gây giãn mạch ngoại vi, giảm sức cản mạch và không ảnh hưởng xấu đến chuyển hóa lipid và đường máu như các thuốc chẹn beta cũ.",
    "reference": "Sách Dược lý 2 tr. 65"
  },
  {
    "id": 260,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị THA",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cơ chế tác động kép trên hệ thần kinh thực vật của hai thuốc Carvedilol và Labetalol giúp hạ áp hiệu quả mà không làm tăng sức cản ngoại vi là do phong bế đồng thời các thụ thể nào?",
    "options": [
      "Kích thích thụ thể alpha-2 trung ương và phong bế thụ thể beta-1 ở tim",
      "Phong bế thụ thể alpha-2 tiền synap và kích thích thụ thể beta-2 mạch máu",
      "Phong bế thụ thể alpha-1 adrenergic ngoại vi và phong bế cả thụ thể beta (beta-1, beta-2)",
      "Phong bế thụ thể Dopamin D2 và ức chế enzym monoamine oxidase (MAO)"
    ],
    "correct": 2,
    "explanation": "Labetalol và Carvedilol là các thuốc chẹn hỗn hợp: phong bế thụ thể alpha-1 ở mạch máu (gây giãn mạch, giảm sức cản ngoại vi) kết hợp phong bế thụ thể beta-1 ở tim (ngăn phản xạ tim nhanh bù trừ) và beta-2. Nhờ đó kiểm soát huyết áp rất êm dịu, bảo vệ bệnh nhân suy tim và cơn tăng huyết áp.",
    "reference": "Sách Dược lý 2 tr. 65"
  },
  {
    "id": 261,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị THA",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong phác đồ chuẩn bị tiền phẫu cho bệnh nhân u tủy thượng thận (Pheochromocytoma) tiết nhiều catecholamin, nguyên tắc dùng thuốc bắt buộc để tránh xảy ra cơn tăng huyết áp ác tính kịch phát và phù phổi cấp là:",
    "options": [
      "Bắt buộc phải dùng thuốc chẹn beta liều cao trước để khống chế nhịp tim, sau đó mới dùng thuốc chẹn alpha",
      "Dùng đồng thời thuốc ức chế men chuyển và thuốc chẹn beta ngay từ ngày đầu tiên",
      "Tuyệt đối không dùng bất kỳ thuốc chẹn thụ thể giao cảm nào trước khi phẫu thuật cắt khối u",
      "Bắt buộc phải dùng thuốc chẹn alpha-adrenergic trước vài tuần, sau khi mạch đã giãn mới được dùng thêm thuốc chẹn beta"
    ],
    "correct": 3,
    "explanation": "Quy tắc vàng trong u tủy thượng thận: PHẢI CHẸN ALPHA TRƯỚC, CHẸN BETA SAU. Nếu dùng chẹn beta trước, thụ thể beta-2 (giãn mạch) bị chặn lại, lượng lớn catecholamin sẽ gắn tự do vào thụ thể alpha-1 gây co mạch dữ dội, huyết áp tăng kịch phát dẫn tới đột quỵ hoặc phù phổi cấp tử vong.",
    "reference": "Sách Dược lý 2 tr. 74"
  },
  {
    "id": 262,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị THA",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Aliskiren là thuốc hạ huyết áp can thiệp vào khâu khởi đầu của trục RAA theo cơ chế sinh học phân tử nào?",
    "options": [
      "Ức chế trực tiếp enzym Renin, ngăn chặn bước chuyển đổi Angiotensinogen thành Angiotensin I",
      "Ức chế enzym men chuyển ACE, ngăn chặn chuyển Angiotensin I thành Angiotensin II",
      "Chẹn chọn lọc thụ thể AT1 của Angiotensin II trên cơ trơn thành mạch",
      "Ức chế thụ thể Mineralocorticoid tại tế bào biểu mô ống lượn xa của thận"
    ],
    "correct": 0,
    "explanation": "Aliskiren là thuốc ức chế trực tiếp enzym Renin (Direct Renin Inhibitor - DRI) đầu tiên được phê duyệt, liên kết với trung tâm hoạt động của Renin, ngăn cản sự phân cắt Angiotensinogen thành Angiotensin I, triệt tiêu trục RAA ngay từ khâu đầu tiên.",
    "reference": "Sách Dược lý 2 tr. 72"
  },
  {
    "id": 263,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị THA",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Một bệnh nhân điều trị tăng huyết áp đơn trị liệu được 6 tháng xuất hiện tình trạng phì đại mô nướu quanh chân răng (tăng sản lợi), lợi sưng nề che phủ một phần thân răng và dễ chảy máu khi đánh răng. Nhóm thuốc nào có nguy cơ cao nhất gây ra tác dụng phụ mô nha chu đặc trưng này?",
    "options": [
      "Thuốc ức chế men chuyển (như Enalapril, Lisinopril)",
      "Thuốc lợi tiểu Thiazid (như Hydrochlorothiazid)",
      "Thuốc chẹn kênh calci (như Amlodipin, Nifedipin)",
      "Thuốc chẹn beta giao cảm (như Bisoprolol, Metoprolol)"
    ],
    "correct": 2,
    "explanation": "Phì đại nướu răng (Gingival hyperplasia) là tác dụng phụ kinh điển của thuốc chẹn kênh Calci (đặc biệt là Nifedipin, Amlodipin) do kích thích tăng sinh nguyên bào sợi nướu và lắng đọng chất nền ngoại bào. Tác dụng phụ này cũng gặp ở Phenytoin và Cyclosporin.",
    "reference": "Sách Dược lý 2 tr. 61"
  },
  {
    "id": 264,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị THA",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Khi sử dụng Hydralazin đơn độc để hạ huyết áp, sự giãn nhanh tiểu động mạch kích thích phản xạ giao cảm làm tim đập nhanh, tăng nhu cầu oxy cơ tim và kích hoạt thận giữ muối nước gây phù. Để triệt tiêu hai phản xạ bù trừ này, phác đồ 'kiềng ba chân' kinh điển phối hợp Hydralazin với:",
    "options": [
      "Một thuốc chẹn kênh calci DHP và một thuốc giãn mạch trực tiếp Minoxidil",
      "Một thuốc chẹn beta (để chặn nhịp nhanh phản xạ) và một thuốc lợi tiểu (để chặn ứ dịch bù trừ)",
      "Một thuốc chủ vận beta-2 khí dung và một thuốc kháng histamin H1 thế hệ 2",
      "Một thuốc trợ tim Digoxin và một thuốc chống đông kháng vitamin K"
    ],
    "correct": 1,
    "explanation": "Hydralazin làm giãn mạnh tiểu động mạch gây ra 2 phản xạ bù trừ mãnh liệt: (1) Nhịp tim nhanh phản xạ qua trung gian giao cảm (ngăn ngừa bằng thuốc chẹn beta); (2) Giữ muối và nước qua trục RAA tại thận (ngăn ngừa bằng thuốc lợi tiểu). Phối hợp kiềng ba chân 'Hydralazin + Chẹn Beta + Lợi tiểu' là phác đồ kinh điển kiểm soát THA kháng trị.",
    "reference": "Sách Dược lý 2 tr. 79"
  },
  {
    "id": 265,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hiện tượng cướp máu mạch vành (coronary steal phenomenon) có thể xảy ra khi sử dụng thuốc giãn mạch vành nào sau đây?",
    "options": [
      "Trimetazidin",
      "Nitroglycerin",
      "Metoprolol",
      "Dipyridamol"
    ],
    "correct": 3,
    "explanation": "Dipyridamol làm giãn mạnh các mạch vành nhỏ lành lặn nhưng không làm giãn được các mạch vành đã bị xơ vữa hẹp nặng, dẫn tới máu chảy dồn về vùng cơ tim lành, 'cướp máu' của vùng cơ tim đang bị thiếu máu cục bộ khiến vùng thiếu máu càng thiếu nặng hơn.",
    "reference": "Sách Dược lý 2 tr. 45"
  },
  {
    "id": 266,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Dạng thuốc miếng dán qua da chứa Nitroglycerin (Transdermal patch) cần tuân thủ chế độ dán như thế nào để tránh quen thuốc?",
    "options": [
      "Dán liên tục 24/24 giờ không bao giờ được bóc ra",
      "Dán 12 đến 14 giờ mỗi ngày và gỡ bỏ ra trong 10 đến 12 giờ vào ban đêm",
      "Dán cùng lúc 3 miếng tại các vị trí khác nhau trên ngực",
      "Dán liên tục một miếng suốt 7 ngày mới thay miếng mới"
    ],
    "correct": 1,
    "explanation": "Để tránh hiện tượng cạn kiệt nhóm -SH gây nhờn thuốc (tolerance), miếng dán Nitroglycerin cần được dán vào buổi sáng và tháo bỏ vào buổi tối (tạo khoảng trống không có nitrat từ 10-12 giờ mỗi đêm), giúp tế bào phục hồi enzym chuyển hóa.",
    "reference": "Sách Dược lý 2 tr. 44"
  },
  {
    "id": 267,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong điều trị hội chứng mạch vành cấp, thuốc chẹn beta giao cảm làm giảm tỷ lệ tử vong và tái nhồi máu nhờ tác dụng nào?",
    "options": [
      "Ức chế trực tiếp enzym protease của vi khuẩn đường ruột",
      "Tăng cường sản xuất hồng cầu tại tủy xương",
      "Làm tan các mảng xơ vữa lắng đọng trong lòng động mạch vành",
      "Giảm công của tim, giảm nhu cầu oxy cơ tim và chống loạn nhịp thất ác tính"
    ],
    "correct": 3,
    "explanation": "Thuốc chẹn beta làm chậm nhịp tim giúp kéo dài thời gian tâm trương (thời điểm máu nuôi dưỡng mạch vành), giảm sức co bóp cơ tim, giảm huyết áp, từ đó hạ thấp tối đa mức tiêu thụ oxy của cơ tim và nâng ngưỡng rung thất, phòng ngừa đột tử.",
    "reference": "Sách Dược lý 2 tr. 46-47"
  },
  {
    "id": 268,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc chống loạn nhịp Mexiletin và Tocainid có đặc điểm dược động học nổi bật nào so với Lidocain?",
    "options": [
      "Hấp thu tốt qua đường tiêu hóa và có thể dùng bằng đường uống",
      "Không bao giờ chuyển hóa qua gan",
      "Chỉ dùng được bằng đường khí dung qua đường thở",
      "Có thời gian bán thải cực ngắn dưới 2 phút"
    ],
    "correct": 0,
    "explanation": "Lidocain bị gan chuyển hóa bước đầu tới 97% nên không thể uống được (chỉ dùng tiêm tĩnh mạch). Mexiletin và Tocainid là các dẫn chất amin bền vững với enzym gan, có sinh khả dụng đường uống cao (trên 80%), dùng điều trị duy trì loạn nhịp thất qua đường uống.",
    "reference": "Sách Dược lý 2 tr. 32"
  },
  {
    "id": 269,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Lắng đọng vi tinh thể màu nâu ở biểu mô giác mạc (microdeposits) và sạm da màu xanh xám (blue-gray skin) là tác dụng phụ do tích lũy của thuốc nào?",
    "options": [
      "Lidocain",
      "Verapamil",
      "Quinidin",
      "Amiodaron"
    ],
    "correct": 3,
    "explanation": "Amiodaron tích lũy trong các mô giàu lipid, gây lắng đọng vi tinh thể ở giác mạc (gặp ở hầu hết bệnh nhân điều trị trên 6 tháng) và lắng đọng ở da dưới tác động của ánh sáng mặt trời làm da đổi màu xám xanh vĩnh viễn.",
    "reference": "Sách Dược lý 2 tr. 36"
  },
  {
    "id": 270,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Sotalol là thuốc chống loạn nhịp độc đáo kết hợp hai đặc tính dược lý nào?",
    "options": [
      "Chẹn thụ thể beta không chọn lọc và chẹn kênh kali kéo dài pha tái cực",
      "Ức chế men chuyển ACE và chẹn thụ thể alpha-1",
      "Chẹn kênh natri nhóm IC và kích thích thụ thể muscarinic",
      "Chẹn kênh calci typ L và mở kênh kali"
    ],
    "correct": 0,
    "explanation": "Sotalol là đồng phân racemic có vừa tác dụng chẹn beta-adrenergic không chọn lọc (tác dụng nhóm II) vừa tác dụng ức chế kênh kali kéo dài thời gian điện thế hoạt động (tác dụng nhóm III).",
    "reference": "Sách Dược lý 2 tr. 37"
  },
  {
    "id": 271,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc lợi tiểu Indapamid thuộc nhóm nào và có ưu điểm dược lý nào nổi bật so với Hydrochlorothiazid?",
    "options": [
      "Thuốc lợi niệu quai có tác dụng cực mạnh",
      "Thuốc đối kháng aldosterone chọn lọc",
      "Thuốc lợi tiểu thẩm thấu dạng hạt nano",
      "Thuốc lợi tiểu giống thiazid, có thêm tác dụng giãn mạch trực tiếp và ít ảnh hưởng đến chuyển hóa lipid, glucid"
    ],
    "correct": 3,
    "explanation": "Indapamid là dẫn xuất indol sulfonamid có tác dụng ức chế đồng vận chuyển Na+/Cl- giống thiazid, đồng thời chẹn kênh Ca2+ ở cơ trơn mạch máu gây giãn mạch trực tiếp. Ở liều điều trị, Indapamid ít làm tăng đường huyết và acid uric máu hơn Hydrochlorothiazid.",
    "reference": "Sách Dược lý 2 tr. 84-86"
  },
  {
    "id": 272,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Khi phối hợp Furosemid với thuốc kháng sinh nhóm Cephalosporin thế hệ 1 (như Cefalothin, Cefazolin) liều cao, nguy cơ tổn thương cơ quan nào tăng lên rõ rệt?",
    "options": [
      "Gây xơ hóa cơ tim vùng mỏm",
      "Tăng độc tính điếc tai không hồi phục",
      "Tăng độc tính hoại tử ống thận cấp gây suy thận cấp",
      "Gây loét thủng đại tràng hoại tử"
    ],
    "correct": 2,
    "explanation": "Phối hợp thuốc lợi tiểu quai (Furosemid) với Cephalosporin thế hệ 1 liều cao làm tăng nồng độ kháng sinh tại biểu mô ống thận, gây hiệp đồng độc tính làm hoại tử tế bào ống lượn gần và suy thận cấp.",
    "reference": "Sách Dược lý 2 tr. 83"
  },
  {
    "id": 273,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tế bào chính (chief cells) ở niêm mạc dạ dày đảm nhiệm chức năng bài tiết chất nào sau đây?",
    "options": [
      "Acid clohydric",
      "Yếu tố nội tại Castle",
      "Pepsinogen",
      "Hormon Gastrin"
    ],
    "correct": 2,
    "explanation": "Tế bào chính ở tuyến đáy vị bài tiết pepsinogen (tiền enzym trơ). Trong môi trường acid pH < 3, pepsinogen bị cắt chuỗi peptid tạo thành pepsin hoạt động tiêu hóa protein.",
    "reference": "Sách Dược lý 2 tr. 102"
  },
  {
    "id": 274,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Enzym H+/K+ ATPase ở tế bào viền thành dạ dày hoạt động theo cơ chế vận chuyển ion nào?",
    "options": [
      "Đưa ion Na+ ra ngoài và kéo ion H+ vào trong",
      "Bơm ion Ca2+ ra ngoài đổi lấy ion Cl-",
      "Bơm chủ động ion H+ từ trong bào tương ra lòng dạ dày và đồng thời đưa ion K+ từ lòng dạ dày vào trong tế bào viền",
      "Bơm thụ động khuếch tán cả hai ion H+ và K+ ra lòng dạ dày"
    ],
    "correct": 2,
    "explanation": "Bơm proton H+/K+ ATPase sử dụng năng lượng thủy phân ATP để bơm ngược chiều gradient nồng độ ion H+ ra ngoài lòng dạ dày để tạo acid dịch vị, đồng thời kéo ion K+ ngược trở lại vào bào tương tế bào viền.",
    "reference": "Sách Dược lý 2 tr. 104"
  },
  {
    "id": 275,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Codein có tác dụng giảm ho trung ương tốt nhưng có nhược điểm nào sau đây cần lưu ý khi dùng cho người bệnh?",
    "options": [
      "Làm giãn cơ bàng quang gây đái dầm liên tục",
      "Gây tiêu chảy ồ ạt mất nước",
      "Gây táo bón, buồn ngủ và có nguy cơ gây nghiện khi lạm dụng kéo dài",
      "Gây tăng nhịp tim kịch phát trên 200 lần/phút"
    ],
    "correct": 2,
    "explanation": "Codein (methylmorphin) ức chế trung tâm ho ở hành não, nhưng một phần (khoảng 10%) chuyển hóa thành morphin, gây tác dụng phụ an thần, ức chế nhu động ruột gây táo bón và có khả năng gây lệ thuộc thuốc/nghiện khi dùng lâu.",
    "reference": "Sách Dược lý 2 tr. 358 & Dược lý hô hấp"
  },
  {
    "id": 276,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc tiêu chất nhầy Bromhexin và Ambroxol có cơ chế tác dụng dược lý nào?",
    "options": [
      "Làm teo nhỏ các phế nang bị giãn",
      "Làm tiêu các sợi mucopolysaccharid trong dịch đờm và kích thích tế bào biểu mô phế nang sản xuất chất diện hoạt",
      "Làm tê liệt phản xạ hắt hơi",
      "Làm đông vón đờm để đọng lại trong phế quản"
    ],
    "correct": 1,
    "explanation": "Bromhexin và chất chuyển hóa có hoạt tính của nó là Ambroxol làm phân giải các sợi mucopolysaccharid và mucoprotein làm lỏng đờm, đồng thời kích thích tế bào Clara tăng tổng hợp chất diện hoạt surfactant giúp bảo vệ phế nang.",
    "reference": "Sách Dược lý 2 tr. 358-359"
  },
  {
    "id": 277,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Promethazin thuộc nhóm cấu trúc phenothiazin, ngoài tác dụng kháng H1 còn phong bế thụ thể alpha-1 adrenergic ngoại biên gây tác dụng phụ nào?",
    "options": [
      "Hạ huyết áp tư thế đứng và hoa mắt chóng mặt khi thay đổi tư thế",
      "Tăng huyết áp kịch phát kèm xuất huyết võng mạc",
      "Co thắt mạch vành gây cơn đau thắt ngực",
      "Tắc mạch chi dưới do co thắt tiểu động mạch"
    ],
    "correct": 0,
    "explanation": "Do có khung cấu trúc tricyclic phenothiazin tương tự clorpromazin, Promethazin phong bế thụ thể alpha-1 adrenergic ở cơ trơn mạch máu, gây giãn mạch và hạ huyết áp tư thế đứng, đặc biệt khi tiêm hoặc dùng liều cao.",
    "reference": "Sách Dược lý 2 tr. 347"
  },
  {
    "id": 278,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc kháng histamin H1 nào sau đây có tác dụng kích thích cảm giác thèm ăn và gây tăng cân, đôi khi được dùng để hỗ trợ trẻ em biếng ăn chậm lớn?",
    "options": [
      "Cetirizin",
      "Cyproheptadin",
      "Fexofenadin",
      "Loratadin"
    ],
    "correct": 1,
    "explanation": "Cyproheptadin vừa kháng H1 vừa kháng thụ thể serotonin (5-HT2) ở vùng dưới đồi, ức chế trung tâm no và kích thích trung tâm thèm ăn, làm bệnh nhân ăn ngon miệng và tăng cân.",
    "reference": "Sách Dược lý 2 tr. 348"
  },
  {
    "id": 279,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Emetin và Dehydroemetin là các alkaloid chiết xuất từ rễ cây Ipeca dùng diệt amip trong mô, hiện nay rất ít được sử dụng vì độc tính nguy hiểm nào?",
    "options": [
      "Độc tính trên tim gây viêm cơ tim hoại tử, hạ huyết áp và loạn nhịp tim",
      "Gây xơ cứng bì toàn thể tiến triển nhanh",
      "Gây đục thủy tinh thể hai mắt vĩnh viễn",
      "Gây tiêu hủy hoàn toàn lớp sụn khớp gối"
    ],
    "correct": 0,
    "explanation": "Emetin tích lũy chậm và gắn chặt vào cơ tim, ức chế tổng hợp protein cơ tim, gây độc tính tim nặng nề: hạ huyết áp, đau vùng trước tim, nhịp nhanh, biến đổi sóng T và đoạn ST trên ECG, có thể gây trụy tim mạch tử vong.",
    "reference": "Sách Dược lý 2 tr. 210-211"
  },
  {
    "id": 280,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tinidazol và Secnidazol có ưu điểm dược động học nổi bật nào so với Metronidazol?",
    "options": [
      "Có thể dùng an toàn tuyệt đối cho phụ nữ mang thai tháng đầu",
      "Thời gian bán thải dài hơn nhiều cho phép dùng liều duy nhất hoặc số lần dùng ít hơn trong ngày",
      "Không bao giờ gây tác dụng phụ buồn nôn và vị kim loại",
      "Tan hoàn toàn trong nước nên không ngấm vào mô gan"
    ],
    "correct": 1,
    "explanation": "Tinidazol (t1/2 khoảng 12-14 giờ) và Secnidazol (t1/2 khoảng 17-29 giờ) có thời gian bán thải dài gấp đôi hoặc gấp ba so với Metronidazol (t1/2 8 giờ), cho phép dùng liều duy nhất trong ngày hoặc phác đồ ngắn ngày hơn mà vẫn đảm bảo hiệu quả tiệt trừ amip.",
    "reference": "Sách Dược lý 2 tr. 209"
  },
  {
    "id": 281,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Evolocumab và Alirocumab là nhóm thuốc hạ lipid máu thế hệ mới tác động theo cơ chế nào?",
    "options": [
      "Kháng thể đơn dòng ức chế enzym Proprotein Convertase Subtilisin/Kexin type 9 PCSK9",
      "Kích thích enzym Lipase nội mô thủy phân HDL",
      "Ức chế enzym tổng hợp chylomicron ở ruột non",
      "Gắn trực tiếp vào phân tử triglycerid làm bất hoạt"
    ],
    "correct": 0,
    "explanation": "PCSK9 là enzym gắn vào thụ thể LDL trên tế bào gan và đưa thụ thể này vào lysosom để phá hủy. Các kháng thể đơn dòng ức chế PCSK9 ngăn cản sự phân hủy thụ thể LDL, làm tăng mật độ thụ thể LDL trên màng tế bào gan, hạ LDL-C huyết tương thêm 50-70%.",
    "reference": "Sách Dược lý 2 tr. 100"
  },
  {
    "id": 282,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng phụ thường gặp nhất của nhóm Resin gắn acid mật (Cholestyramin, Colestipol) trên đường tiêu hóa là gì?",
    "options": [
      "Xuất huyết dạ dày tá tràng ồ ạt",
      "Táo bón, đầy bụng khó tiêu và giảm hấp thu các vitamin tan trong dầu",
      "Viêm teo gai lưỡi kèm mất vị giác hoàn toàn",
      "Tiêu chảy mỡ mất nước cấp tính"
    ],
    "correct": 1,
    "explanation": "Cholestyramin là chất polyme không tan, không hấp thu, giữ muối mật trong lòng ruột nên gây táo bón (rất phổ biến, cần uống nhiều nước và ăn nhiều chất xơ). Do acid mật bị gắn kết và đào thải nên làm cản trở hấp thu các vitamin tan trong lipid A, D, E, K.",
    "reference": "Sách Dược lý 2 tr. 92"
  },
  {
    "id": 283,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong chu kỳ phát triển của ký sinh trùng sốt rét, giai đoạn nào diễn ra hoàn toàn trong tế bào gan của người và không gây biểu hiện triệu chứng lâm sàng?",
    "options": [
      "Giai đoạn sinh sản hữu tính trong dạ dày muỗi",
      "Giai đoạn tiền hồng cầu",
      "Giai đoạn phân chia trong hồng cầu",
      "Giai đoạn phát triển thể giao bào trong máu ngoại vi"
    ],
    "correct": 1,
    "explanation": "Khi muỗi đốt, thoa trùng (sporozoite) theo máu đến xâm nhập tế bào gan chỉ sau 30-60 phút. Tại tế bào gan, ký sinh trùng nhân lên tạo thể phân liệt tiền hồng cầu trong 6-16 ngày mà hoàn toàn không gây bất kỳ triệu chứng sốt hay thiếu máu nào.",
    "reference": "Sách Dược lý 2 tr. 193"
  },
  {
    "id": 284,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc chống sốt rét Mefloquin có tác dụng diệt thể vô tính trong hồng cầu mạnh nhưng cần thận trọng vì tác dụng phụ trên hệ cơ quan nào?",
    "options": [
      "Tuyến tụy gây teo các tế bào tiết men tiêu hóa",
      "Hệ hô hấp gây tràn dịch màng phổi mủ",
      "Hệ xương khớp gây cốt hóa sụn sớm",
      "Hệ thần kinh tâm thần gây chóng mặt, mất ngủ, ác mộng, trầm cảm và rối loạn tâm thần"
    ],
    "correct": 3,
    "explanation": "Mefloquin qua hàng rào máu não và tích lũy nồng độ cao trong mô não, gây tác dụng không mong muốn trên thần kinh trung ương (tỷ lệ 1-10%): ác mộng dữ dội, lo âu, trầm cảm, hoang tưởng, co giật; chống chỉ định ở người có tiền sử động kinh hoặc rối loạn tâm thần.",
    "reference": "Sách Dược lý 2 tr. 199-200"
  },
  {
    "id": 285,
    "subject": "duocly2",
    "chapter": "KTGHP",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân nam 58 tuổi đang điều trị xơ vữa động mạch bằng Simvastatin 40mg/ngày. Bệnh nhân bị nhiễm nấm da và tự ý uống thêm Itraconazol viên nang. Nguy cơ tai biến nghiêm trọng nhất có thể xảy ra là gì?",
    "options": [
      "Simvastatin phá hủy tác dụng kháng nấm của Itraconazol",
      "Làm nhịp tim nhanh kịch phát trên 200 chu kỳ/phút",
      "Itraconazol ức chế mạnh CYP3A4 làm tăng nồng độ Simvastatin trong máu lên hàng chục lần dẫn đến tiêu cơ vân cấp và suy thận cấp",
      "Gây nhiễm toan ceton do đái tháo đường khởi phát"
    ],
    "correct": 2,
    "explanation": "Simvastatin được chuyển hóa độc quyền qua enzym CYP3A4 ở gan. Kháng nấm nhóm azol (Itraconazol, Ketoconazol) là chất ức chế cực mạnh CYP3A4, làm giảm độ thanh thải của simvastatin, nồng độ statin trong máu tăng vọt gấp 10-20 lần bùng phát hoại tử tiêu cơ vân cấp tính.",
    "reference": "Sách Dược lý 2 tr. 96"
  },
  {
    "id": 286,
    "subject": "duocly2",
    "chapter": "KTGHP",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân nữ 32 tuổi đang dùng thuốc tránh thai phối hợp đường uống (chứa Ethinylestradiol) để ngừa thai. Bác sĩ kê thêm kháng sinh Rifampicin để điều trị lao phổi. Nguy cơ thất bại ngừa thai do cơ chế nào?",
    "options": [
      "Rifampicin kích thích rụng trứng trực tiếp tại buồng trứng",
      "Rifampicin kết tủa với estrogen trong lòng ruột non",
      "Estrogen làm mất hoàn toàn hoạt tính diệt vi khuẩn lao của rifampicin",
      "Rifampicin cảm ứng mạnh enzym gan CYP3A4 làm tăng thoái hóa Ethinylestradiol dẫn đến mất tác dụng ngừa thai và có thai ngoài ý muốn"
    ],
    "correct": 3,
    "explanation": "Rifampicin là chất cảm ứng enzym cytochrom P450 (đặc biệt CYP3A4) mạnh nhất trong y học, làm tăng tốc độ chuyển hóa và đào thải Ethinylestradiol qua gan, nồng độ hormon tụt xuống dưới ngưỡng ức chế rụng trứng, dẫn tới thất bại tránh thai nghiêm trọng.",
    "reference": "Sách Dược lý 2 tr. 185, 316"
  },
  {
    "id": 287,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Oxytocin là hormon được tổng hợp ở vùng dưới đồi và dự trữ giải phóng từ tuyến nào sau đây?",
    "options": [
      "Thùy trước tuyến yên",
      "Tế bào kẽ Leydig của tinh hoàn",
      "Thùy sau tuyến yên",
      "Tuyến vỏ thượng thận"
    ],
    "correct": 2,
    "explanation": "Oxytocin và Vasopressin (ADH) được tổng hợp tại nhân trên thị và nhân cạnh thất của vùng dưới đồi, sau đó di chuyển dọc theo sợi trục thần kinh xuống dự trữ và giải phóng vào máu tại thùy sau tuyến yên (neurohypophysis).",
    "reference": "Sách Dược lý 2 tr. 283-284"
  },
  {
    "id": 288,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Khi điều trị bằng Glucocorticoid (như Prednisolon), tác dụng phụ gây loãng xương xốp xương có cơ chế sinh học là gì?",
    "options": [
      "Làm lắng đọng tinh thể canxi vô cơ vào thành mạch máu",
      "Tăng kích thích tủy xương sản sinh quá nhiều hồng cầu",
      "Làm tiêu hủy hoàn toàn lớp sụn khớp bàn chân",
      "Ức chế nguyên bào xương, giảm hấp thu calci ở ruột và tăng thải trừ calci qua nước tiểu"
    ],
    "correct": 3,
    "explanation": "Glucocorticoid đối kháng với vitamin D làm giảm hấp thu calci ở ruột, tăng thải calci qua thận gây cường cận giáp thứ phát kích thích hủy cốt bào, đồng thời ức chế trực tiếp hoạt động của nguyên bào xương (osteoblast), dẫn tới giảm mật độ xương và loãng xương nặng.",
    "reference": "Sách Dược lý 2 tr. 287"
  },
  {
    "id": 289,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Pioglitazon thuộc nhóm Thiazolidinedion (TZD) làm tăng tính nhạy cảm với insulin của tế bào ngoại vi thông qua thụ thể nhân nào?",
    "options": [
      "Peroxisome Proliferator-Activated Receptor alpha",
      "Thụ thể Estrogen nhân beta",
      "Peroxisome Proliferator-Activated Receptor gamma",
      "Thụ thể Glucagon-Like Peptide-1 GLP-1"
    ],
    "correct": 2,
    "explanation": "Nhóm TZD (Pioglitazon, Rosiglitazon) gắn chọn lọc vào thụ thể nhân PPAR-gamma định vị chủ yếu ở mô mỡ, cơ vân và gan, điều hòa phiên mã các gen kiểm soát chuyển hóa glucose và lipid, làm tăng biểu hiện chất vận chuyển GLUT4 giúp tăng thu nhận glucose vào tế bào.",
    "reference": "Sách Dược lý 2 tr. 299-300"
  },
  {
    "id": 290,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Chống chỉ định quan trọng nhất của nhóm thuốc Thiazolidinedion (Pioglitazon) là gì do tác dụng phụ giữ muối nước?",
    "options": [
      "Bệnh nhân tăng huyết áp giai đoạn 1",
      "Bệnh nhân đái tháo đường kèm béo phì",
      "Người bị viêm loét dạ dày tá tràng mạn tính",
      "Bệnh nhân suy tim sung huyết độ II đến độ IV theo phân độ NYHA"
    ],
    "correct": 3,
    "explanation": "Thuốc nhóm TZD gây tăng tái hấp thu natri và dịch tại ống lượn xa qua kích hoạt kênh ENaC, dẫn đến giữ dịch phù nề toàn thân và làm bùng phát hoặc làm nặng nề thêm tình trạng suy tim sung huyết, chống chỉ định tuyệt đối cho người suy tim NYHA II-IV.",
    "reference": "Sách Dược lý 2 tr. 300"
  },
  {
    "id": 291,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Rivaroxaban và Apixaban là các thuốc chống đông đường uống mới (DOAC) ức chế trực tiếp yếu tố đông máu nào?",
    "options": [
      "Yếu tố Xa tự do và yếu tố Xa gắn trong phức hợp prothrombinase",
      "Yếu tố IIa",
      "Yếu tố IXa nội sinh",
      "Yếu tố VIIa mô"
    ],
    "correct": 0,
    "explanation": "Rivaroxaban, Apixaban và Edoxaban là thuốc ức chế trực tiếp, chọn lọc và thuận nghịch yếu tố Xa (cả Xa tự do và Xa liên kết), ngăn chặn khâu chuyển prothrombin thành thrombin mà không cần chất đồng vận Antithrombin III.",
    "reference": "Sách Dược lý 2 tr. 121"
  },
  {
    "id": 292,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Chất giải độc đặc hiệu (antidote) được chỉ định để trung hòa khẩn cấp tác dụng chống đông của các thuốc ức chế yếu tố Xa (Rivaroxaban, Apixaban) là gì?",
    "options": [
      "Protamin sulfat",
      "Vitamin K1",
      "Idarucizumab",
      "Andexanet alfa"
    ],
    "correct": 3,
    "explanation": "Andexanet alfa là một phân tử protein mồi bẫy tái tổ hợp biến đổi gen đóng vai trò tương tự yếu tố Xa mất hoạt tính enzym, có ái lực cực cao với Rivaroxaban và Apixaban, gắn chặt và cô lập các phân tử thuốc này, giúp phục hồi quá trình đông máu.",
    "reference": "Sách Dược lý 2 tr. 122"
  },
  {
    "id": 293,
    "subject": "duocly2",
    "chapter": "Thuốc chữa thiếu máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong cơ thể người trưởng thành, sắt được dự trữ chủ yếu ở tế bào gan, lách và tủy xương dưới dạng phức hợp nào?",
    "options": [
      "Ferritin và Hemosiderin",
      "Myoglobin của cơ tim",
      "Hemoglobin tự do trong huyết tương",
      "Transferrin và Hemopexin"
    ],
    "correct": 0,
    "explanation": "Khoảng 70% sắt trong cơ thể nằm trong hemoglobin hồng cầu, khoảng 25-30% sắt được dự trữ trong hệ lưới nội mô (gan, lách, tủy xương) dưới dạng phức hợp protein Ferritin tan trong nước và Hemosiderin không tan.",
    "reference": "Sách Dược lý 2 tr. 127"
  },
  {
    "id": 294,
    "subject": "duocly2",
    "chapter": "Thuốc chữa thiếu máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Chất nào sau đây khi dùng đồng thời qua đường tiêu hóa làm giảm rõ rệt sự hấp thu của Sắt do tạo phức chelat không tan?",
    "options": [
      "Vitamin C",
      "Tannin trong trà đặc, cà phê, calci trong sữa và thuốc kháng acid antacid",
      "Acid chlohydric dịch vị",
      "Nước cam ép tươi nguyên chất"
    ],
    "correct": 1,
    "explanation": "Tannin trong trà, phytat trong ngũ cốc, polyphenol trong cà phê, ion calci trong sữa và các thuốc kháng acid (nhôm, magie hydroxyd) gắn kết mạnh với ion sắt tạo phức hợp kết tủa không tan, ngăn cản sắt hấp thu qua niêm mạc tá tràng.",
    "reference": "Sách Dược lý 2 tr. 127"
  },
  {
    "id": 295,
    "subject": "duocly2",
    "chapter": "Vitamin",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Vitamin nào sau đây được cơ thể tổng hợp ở da dưới tác dụng quang hóa của tia cực tím B (UVB) trong ánh nắng mặt trời?",
    "options": [
      "Vitamin D3",
      "Vitamin E",
      "Vitamin K1",
      "Vitamin A"
    ],
    "correct": 0,
    "explanation": "Dưới tác động của tia tử ngoại UVB (bước sóng 290-315 nm), tiền chất 7-dehydrocholesterol ở lớp biểu bì da bị mở vòng B chuyển thành tiền vitamin D3 (previtamin D3), sau đó đồng phân hóa nhiệt độ thành Cholecalciferol (Vitamin D3).",
    "reference": "Sách Dược lý 2 tr. 325"
  },
  {
    "id": 296,
    "subject": "duocly2",
    "chapter": "Vitamin",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Nước tiểu có màu vàng sáng huỳnh quang (vàng chanh) sau khi uống các viên vitamin tổng hợp là do bài tiết thành phần vitamin nào?",
    "options": [
      "Vitamin C",
      "Vitamin B2",
      "Vitamin B1",
      "Vitamin B6"
    ],
    "correct": 1,
    "explanation": "Riboflavin (Vitamin B2) có màu vàng cam tự nhiên và phát huỳnh quang dưới ánh sáng. Khi uống quá nhu cầu cơ thể, lượng thừa bài tiết nguyên vẹn qua nước tiểu làm nước tiểu có màu vàng sáng huỳnh quang đặc trưng hoàn toàn vô hại.",
    "reference": "Sách Dược lý 2 tr. 330"
  },
  {
    "id": 297,
    "subject": "duocly2",
    "chapter": "Vitamin",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân bị thiếu hụt Vitamin C (Acid ascorbic) nặng mắc bệnh Scorbut có biểu hiện xuất huyết dưới da và chảy máu nướu răng do cơ chế phân tử nào?",
    "options": [
      "Giảm quá trình hydroxyl hóa prolin và lysin làm suy yếu sự tổng hợp và liên kết chéo của sợi collagen thành mạch",
      "Tiêu hủy các yếu tố đông máu II, VII, IX, X ở gan",
      "Tăng tính thấm mao mạch do tăng giải phóng histamin",
      "Ức chế tủy xương làm giảm số lượng tiểu cầu xuống dưới 10.000/mm3"
    ],
    "correct": 0,
    "explanation": "Vitamin C là coenzym của enzym prolyl hydroxylase và lysyl hydroxylase, tham gia tạo hydroxyprolin và hydroxylysin cần thiết cho cấu trúc xoắn ba của chuỗi collagen. Thiếu vitamin C làm collagen mạch máu giòn, kém bền vững dẫn tới vỡ mao mạch và xuất huyết.",
    "reference": "Sách Dược lý 2 tr. 336-337"
  },
  {
    "id": 298,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Entecavir và Tenofovir disoproxil fumarat (TDF) là thuốc đầu tay được khuyến cáo sử dụng trong điều trị bệnh lý nhiễm virus nào?",
    "options": [
      "Viêm gan virus B mạn tính HBV",
      "Nhiễm Cytomegalovirus bẩm sinh",
      "Cúm mùa ác tính do virus H1N1",
      "Bệnh sởi có biến chứng viêm phổi"
    ],
    "correct": 0,
    "explanation": "Entecavir (dẫn xuất guanosin) và Tenofovir (dẫn xuất adenin) là các thuốc kháng virus đường uống thế hệ mới có hoạt lực ức chế ADN polymerase của virus viêm gan B cực mạnh và có hàng rào chống đột biến kháng thuốc rất cao, là phác đồ đầu tay hàng đầu theo Bộ Y tế.",
    "reference": "Sách Dược lý 2 tr. 240-241"
  },
  {
    "id": 299,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "So với Tenofovir disoproxil fumarat (TDF), tiền chất thế hệ mới Tenofovir alafenamid (TAF) có ưu điểm vượt trội nào về mặt độc tính?",
    "options": [
      "Có tác dụng kích thích tăng sinh hồng cầu tủy xương",
      "Hoàn toàn không đào thải qua thận",
      "Nồng độ thuốc trong huyết tương thấp hơn tới 90% nên giảm rõ rệt độc tính trên thận và giảm nguy cơ mất khoáng xương",
      "Có thể dùng đường tiêm bắp duy nhất 1 lần trong đời"
    ],
    "correct": 2,
    "explanation": "TAF bền vững hơn trong huyết tương và nhắm đích vào tế bào lympho và tế bào gan tốt hơn TDF. Do đó ở liều nhỏ hơn 10 lần, TAF vẫn đạt nồng độ nội bào cao tương đương nhưng nồng độ tự do trong máu giảm 90%, giảm thiểu độc tính trên ống thận và loãng xương.",
    "reference": "Sách Dược lý 2 tr. 238, 241"
  },
  {
    "id": 300,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Vincristin là thuốc chống ung thư nhóm alkaloid dừa cạn có tác dụng không mong muốn đặc trưng trên hệ cơ quan nào cần theo dõi sát?",
    "options": [
      "Gây suy tim sung huyết cấp trong vòng 24 giờ",
      "Gây suy tủy xương nghiêm trọng nhất trong tất cả các thuốc ung thư",
      "Độc tính trên hệ thần kinh ngoại biên gây tê bì đầu chi, mất phản xạ gân xương và táo bón do liệt ruột",
      "Gây lắng đọng sỏi ở túi mật"
    ],
    "correct": 2,
    "explanation": "Vincristin gắn vào tubulin sợi trục thần kinh làm ức chế vận chuyển chất dinh dưỡng dọc sợi trục, gây độc tính thần kinh ngoại biên phụ thuộc liều: tê bì đầu ngón, yếu cơ, mất phản xạ gân gót, táo bón nặng do liệt thần kinh ruột. Khác với Vinblastin, Vincristin ít độc tủy xương hơn.",
    "reference": "Sách Dược lý 2 tr. 253"
  },
  {
    "id": 301,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Nhóm thuốc chống ung thư alkyl hóa (như Cyclophosphamid, Clorambucil, Melphalan) tiêu diệt tế bào ác tính nhờ cơ chế nào?",
    "options": [
      "Kích thích enzym caspase phá hủy trực tiếp màng tế bào",
      "Bao bọc màng nhân ngăn cản nhân tế bào tiếp nhận oxy",
      "Tạo liên kết cộng hóa trị gắn gốc alkyl vào vị trí N7 của base guanin gây liên kết chéo giữa hai sợi ADN",
      "Ức chế enzym giải mã mARN tại ribosom"
    ],
    "correct": 2,
    "explanation": "Các chất alkyl hóa mang nhóm phản ứng ái điện tử, chuyển gốc alkyl gắn cộng hóa trị vào nguyên tử nitơ ở vị trí N7 của guanin trên phân tử ADN, tạo liên kết chéo giữa hai sợi ADN (cross-linking), làm chuỗi xoắn kép không tháo xoắn được dẫn tới đứt gãy ADN và chết tế bào.",
    "reference": "Sách Dược lý 2 tr. 247"
  },
  {
    "id": 302,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Pralidoxim (PAM) và Obidoxim có tác dụng giải độc trong ngộ độc thuốc trừ sâu phospho hữu cơ theo cơ chế phân tử nào?",
    "options": [
      "Kích thích gan tăng sản xuất enzym acetyltransferase",
      "Phong bế thụ thể muscarinic M1, M2, M3 tại cơ quan đáp ứng",
      "Gắn ái lực cao vào gốc phosphoryl để giải phóng và tái hoạt hóa enzym Acetylcholinesterase",
      "Trung hòa trực tiếp hơi độc lân hữu cơ đang bay lơ lửng trong phế nang"
    ],
    "correct": 2,
    "explanation": "Phospho hữu cơ gắn phosphoryl hóa enzym acetylcholinesterase làm enzym mất hoạt tính. Pralidoxim (PAM) có nhóm oxim (=N-OH) ái lực cực mạnh với phospho, tấn công tách gốc phosphoryl ra khỏi enzym, giúp phục hồi (tái hoạt hóa) enzym acetylcholinesterase trước khi enzym bị biến tính già hóa.",
    "reference": "Sách Dược lý 2 tr. 359-360"
  },
  {
    "id": 303,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong cấp cứu ngộ độc Phospho hữu cơ, dấu hiệu lâm sàng nào chứng tỏ bệnh nhân đã 'ngấm Atropin' đầy đủ để giảm liều duy trì?",
    "options": [
      "Bệnh nhân lên cơn co giật toàn thân và sốt cao 41 độ C",
      "Huyết áp tụt sâu và đồng tử co nhỏ như đầu kim",
      "Bụng chướng căng và xuất huyết tiêu hóa ồ ạt",
      "Đồng tử giãn 3-4 mm, da khô ấm hồng, hết ứ đọng đờm dãi phế quản và tần số tim từ 80-100 chu kỳ/phút"
    ],
    "correct": 3,
    "explanation": "Mục tiêu dùng Atropin trong ngộ độc phospho hữu cơ là đạt tình trạng ngấm atropin: da khô và ấm, niêm mạc miệng khô, phổi hết ran ẩm (hết ứ đọng đờm dãi), đồng tử giãn vừa (khoảng 3-4 mm), nhịp tim > 80 lần/phút. Sau đó duy trì liều để tránh tái ngộ độc.",
    "reference": "Sách Dược lý 2 tr. 359"
  },
  {
    "id": 304,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bộ ba thuốc giải độc đặc hiệu kinh điển theo cơ chế tạo Methemoglobin để cứu sống bệnh nhân ngộ độc Cyanid là gì?",
    "options": [
      "Amyl nitrit dạng hít, Natri nitrit và Natri thiosulfat dạng tiêm tĩnh mạch",
      "Naloxon, Atropin và Than hoạt tính",
      "Protamin sulfat, Deferoxamin và Flumazenil",
      "Xanh methylen, Vitamin C và Natri hydrocarbonat"
    ],
    "correct": 0,
    "explanation": "Amyl nitrit và Natri nitrit oxy hóa một phần hemoglobin thành Methemoglobin (Fe3+). Methemoglobin có ái lực với cyanid mạnh hơn cytochrom oxidase, hút cyanid tạo cyanomethemoglobin giải phóng enzym hô hấp tế bào. Sau đó tiêm Natri thiosulfat cung cấp lưu huỳnh cho enzym rhodanese chuyển cyanid thành thiocyanat bài tiết qua thận.",
    "reference": "Sách Dược lý 2 tr. 363-364"
  },
  {
    "id": 305,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân nữ 70 tuổi đang điều trị suy tim bằng Digoxin 0,25mg/ngày. Gần đây bệnh nhân xuất hiện nôn ói, mệt mỏi, mắt nhìn thấy quầng màu vàng. Xét nghiệm máu thấy Kali huyết tương 2,8 mmol/L, nồng độ Digoxin là 3,2 ng/mL. Xử trí cấp cứu đầu tiên là gì?",
    "options": [
      "Cho bệnh nhân uống dung dịch Furosemid liều cao để hạ kali",
      "Tiếp tục dùng liều Digoxin cũ nhưng bổ sung thêm viên canxi",
      "Tiêm tĩnh mạch Atropin liều cao và ép tim ngoài lồng ngực",
      "Ngừng ngay Digoxin và truyền tĩnh mạch Kali clorid có theo dõi điện tâm đồ"
    ],
    "correct": 3,
    "explanation": "Bệnh nhân có triệu chứng ngộ độc digitalis kinh điển kèm hạ kali máu nặng và nồng độ digoxin trong máu vượt ngưỡng độc (> 2 ng/mL). Xử trí bắt buộc đầu tiên là ngừng thuốc và truyền bù KCl chậm để nâng kali máu lên 4 - 4,5 mmol/L, làm giảm sự gắn kết của digoxin vào thụ thể.",
    "reference": "Sách Dược lý 2 tr. 16-17"
  },
  {
    "id": 306,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân sốc tim sau nhồi máu cơ tim cấp có huyết áp tụt 80/50 mmHg, thiểu niệu và áp lực tĩnh mạch trung tâm tăng cao. Thuốc trợ tim vận mạch nào truyền tĩnh mạch liên tục được lựa chọn ưu tiên để nâng huyết áp và cải thiện tưới máu thận?",
    "options": [
      "Ouabain tiêm tĩnh mạch bolus",
      "Dopamin phối hợp Dobutamin",
      "Propranolol tiêm tĩnh mạch",
      "Digoxin đường uống"
    ],
    "correct": 1,
    "explanation": "Trong sốc tim tụt huyết áp nặng, phối hợp Dobutamin (tăng co bóp cơ tim) và Dopamin ở liều vận mạch (tăng co bóp và co mạch nâng huyết áp) là phác đồ hồi sức kinh điển giúp nâng cung lượng tim và duy trì áp lực tưới máu các cơ quan sống còn.",
    "reference": "Sách Dược lý 2 tr. 19-20"
  },
  {
    "id": 307,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị THA",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Một bệnh nhân nam 62 tuổi vừa mắc tăng huyết áp, vừa có phì đại lành tính tuyến tiền liệt (BPH) gây tiểu khó, tiểu ngập ngừng và tiểu đêm nhiều lần. Nhóm thuốc hạ áp nào mang lại lợi ích kép cải thiện cùng lúc cả huyết áp và lưu lượng dòng tiểu nhờ giãn cơ trơn cổ bàng quang?",
    "options": [
      "Thuốc chẹn kênh calci Non-DHP (như Verapamil, Diltiazem)",
      "Thuốc chẹn chọn lọc thụ thể beta-1 adrenergic (như Atenolol, Metoprolol)",
      "Thuốc lợi tiểu Thiazid (như Hydrochlorothiazid, Indapamid)",
      "Thuốc chẹn chọn lọc thụ thể alpha-1 adrenergic (như Doxazosin, Terazosin, Prazosin)"
    ],
    "correct": 3,
    "explanation": "Thuốc chẹn alpha-1 adrenergic (Doxazosin, Terazosin) vừa ức chế thụ thể alpha-1 ở tiểu động mạch gây giãn mạch hạ áp, vừa ức chế thụ thể alpha-1A ở cơ trơn tuyến tiền liệt và cổ bàng quang, làm giảm trương lực cơ thắt, cải thiện rõ rệt dòng nước tiểu ở bệnh nhân phì đại tuyến tiền liệt.",
    "reference": "Sách Dược lý 2 tr. 73"
  },
  {
    "id": 308,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị THA",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân nam 50 tuổi dùng Enalapril 10mg/ngày đạt huyết áp mục tiêu nhưng xuất hiện ho khan dữ dội từng cơn về đêm làm mất ngủ triền miên. Bác sĩ quyết định đổi thuốc. Hoạt chất thay thế hợp lý nhất bảo toàn lợi ích bảo vệ tim mạch mà không gây ho là:",
    "options": [
      "Losartan (thuốc chẹn thụ thể ARB)",
      "Lisinopril (vẫn thuộc nhóm ức chế men chuyển ACEI)",
      "Captopril (vẫn thuộc nhóm ức chế men chuyển ACEI)",
      "Perindopril (vẫn thuộc nhóm ức chế men chuyển ACEI)"
    ],
    "correct": 0,
    "explanation": "Khi bệnh nhân bị ho khan do ACEI, đổi sang một ACEI khác (như Lisinopril, Captopril, Perindopril) hoàn toàn vô tác dụng vì đây là tác dụng phụ chung của cả nhóm (class effect) do ức chế Kininase II. Lựa chọn chuẩn mực là chuyển sang nhóm ARB (Losartan, Valsartan) vì nhóm này chẹn thụ thể AT1 mà không làm tăng Bradykinin.",
    "reference": "Sách Dược lý 2 tr. 71"
  },
  {
    "id": 309,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị THA",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Một phụ nữ 27 tuổi mang thai ở tuần thứ 16 đi khám định kỳ phát hiện huyết áp 150/95 mmHg. Nhóm thuốc hạ áp nào sau đây TUYỆT ĐỐI CHỐNG CHỈ ĐỊNH do gây suy thận thai nhi, thiểu ối và biến dạng xương sọ thai nhi?",
    "options": [
      "Thuốc kích thích thụ thể alpha-2 trung ương (Methyldopa)",
      "Thuốc ức chế men chuyển (ACEI) và thuốc chẹn thụ thể Angiotensin II (ARB)",
      "Thuốc chẹn hỗn hợp thụ thể alpha và beta (Labetalol)",
      "Thuốc chẹn kênh calci nhóm DHP tác dụng kéo dài (Nifedipin phóng thích kéo dài)"
    ],
    "correct": 1,
    "explanation": "ACEI và ARB chống chỉ định tuyệt đối trong thai kỳ (nhóm X/D). Thuốc qua nhau thai gây loạn sản thận thai nhi, vô niệu thai nhi, thiểu ối (thiểu ối làm phổi giảm sản và co cứng chi), chậm cốt hóa sọ và tử vong chu sinh.",
    "reference": "Sách Dược lý 2 tr. 69, 71"
  },
  {
    "id": 310,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân nam 56 tuổi bị đau thắt ngực khi gắng sức, bác sĩ kê đơn Nitroglycerin ngậm dưới lưỡi và Metoprolol uống hàng ngày. Sự phối hợp giữa Nitrat hữu cơ và thuốc chẹn beta mang lại lợi ích hiệp đồng gì?",
    "options": [
      "Kích thích tăng sinh màng tế bào nội mô mạch vành",
      "Chẹn beta ngăn cản phản xạ nhịp tim nhanh do nitrat gây ra, trong khi nitrat ngăn cản tình trạng tăng thể tích tâm thất do chẹn beta gây ra",
      "Hai thuốc cùng làm tăng nhịp tim lên gấp đôi",
      "Làm giảm đào thải cả hai thuốc qua gan"
    ],
    "correct": 1,
    "explanation": "Nitrat làm giãn mạch gây hạ áp dẫn tới phản xạ nhịp nhanh và tăng co bóp cơ tim; chẹn beta sẽ triệt tiêu phản xạ nhịp nhanh này. Ngược lại, chẹn beta làm chậm nhịp tim có thể làm tăng thể tích tâm thất cuối tâm trương; nitrat làm giảm tiền gánh sẽ triệt tiêu tác dụng phụ này.",
    "reference": "Sách Dược lý 2 tr. 48"
  },
  {
    "id": 311,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân nam 40 tuổi vào viện vì hồi hộp đánh trống ngực dữ dội, điện tâm đồ ghi nhận nhịp nhanh kịch phát trên thất (PSVT) tần số 180 chu kỳ/phút, huyết động ổn định. Sau khi làm nghiệm pháp kích thích phế vị không hiệu quả, thuốc tiêm tĩnh mạch được chỉ định hàng đầu là gì?",
    "options": [
      "Lidocain",
      "Digoxin",
      "Amiodaron",
      "Adenosin"
    ],
    "correct": 3,
    "explanation": "Adenosin là thuốc lựa chọn hàng đầu để cắt cơn nhịp nhanh kịch phát trên thất có vòng vào lại nút nhĩ thất (AVNRT/AVRT). Tiêm bolus tĩnh mạch cực nhanh 6mg làm blốc dẫn truyền qua nút nhĩ thất thoáng qua trong vài giây và lập lại nhịp xoang bình thường ở trên 90% trường hợp.",
    "reference": "Sách Dược lý 2 tr. 38"
  },
  {
    "id": 312,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân suy tim nặng đang dùng Furosemid 80mg/ngày xuất hiện tình trạng mệt mỏi, chướng bụng, chuột rút cơ bắp. Điện tâm đồ thấy sóng T dẹt, xuất hiện sóng U và đoạn ST chênh xuống. Bệnh nhân đang bị rối loạn điện giải nào?",
    "options": [
      "Hạ natri máu kèm tăng clo",
      "Hạ kali máu nặng",
      "Tăng kali máu cấp",
      "Tăng canxi máu"
    ],
    "correct": 1,
    "explanation": "Furosemid là thuốc lợi tiểu quai làm mất nhiều K+ qua nước tiểu. Triệu chứng yếu cơ, liệt ruột (chướng bụng) kèm dấu hiệu ECG sóng T dẹt, đoạn ST hạ thấp và xuất hiện sóng U điển hình cho hội chứng hạ kali máu nặng.",
    "reference": "Sách Dược lý 2 tr. 83"
  },
  {
    "id": 313,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân nam 60 tuổi bị viêm khớp dạng thấp cần phải điều trị lâu dài bằng thuốc chống viêm không steroid (NSAID). Để phòng ngừa biến chứng loét và chảy máu dạ dày tá tràng, thuốc nào sau đây được ưu tiên phối hợp hàng đầu?",
    "options": [
      "Thuốc kháng acid chứa nhôm hydroxyd dạng gói gel",
      "Thuốc kháng histamin H1 thế hệ 2",
      "Thuốc ức chế bơm proton",
      "Viên bổ sung canxi và vitamin D"
    ],
    "correct": 2,
    "explanation": "Thuốc ức chế bơm proton (PPI) là lựa chọn hàng đầu được khuyến cáo bởi các hướng dẫn quốc tế để dự phòng loét dạ dày - tá tràng và xuất huyết tiêu hóa ở bệnh nhân có nguy cơ cao phải điều trị kéo dài bằng NSAID.",
    "reference": "Sách Dược lý 2 tr. 106, 109"
  },
  {
    "id": 314,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân nam 35 tuổi được chẩn đoán mắc nang ấu trùng sán dải lợn ở cơ và dưới da. Bác sĩ chỉ định điều trị bằng Albendazol 800mg/ngày chia 2 lần trong 30 ngày. Bác sĩ kê thêm thuốc Dexamethason uống cùng trong tuần đầu tiên nhằm mục đích gì?",
    "options": [
      "Ngăn ngừa tác dụng phụ gây rụng tóc của albendazol",
      "Kích thích sán thoát vỏ nhanh chóng",
      "Dập tắt phản ứng viêm và phù nề mô do xác ấu trùng sán chết giải phóng độc tố",
      "Tăng cường hoạt lực diệt ấu trùng của albendazol"
    ],
    "correct": 2,
    "explanation": "Khi Albendazol tiêu diệt hàng loạt ấu trùng sán, các kháng nguyên và độc tố giải phóng từ xác sán gây phản ứng viêm phù nề mô xung quanh rất dữ dội (đặc biệt nguy hiểm nếu có nang sán trong não). Corticoid (Dexamethason) được dùng kèm để ức chế phản ứng viêm này.",
    "reference": "Sách Dược lý 2 tr. 216"
  },
  {
    "id": 315,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân nữ 25 tuổi có tiền sử hen phế quản nhẹ từng cơn. Khi xuất hiện cơn khó thở khò khè, ho tức ngực cấp tính, thuốc hít cắt cơn được lựa chọn đầu tay ngay lập tức là gì?",
    "options": [
      "Salmeterol bột hít",
      "Montelukast viên nhai",
      "Salbutamol bình xịt định liều MDI",
      "Theophylin viên phóng thích kéo dài"
    ],
    "correct": 2,
    "explanation": "Thuốc kích thích beta-2 adrenergic tác dụng ngắn (SABA) dạng hít như Salbutamol (Ventolin) có tác dụng giãn phế quản cực nhanh sau 3-5 phút, là thuốc cắt cơn hen cấp đầu tay số 1 trong mọi bậc điều trị hen.",
    "reference": "Sách Dược lý 2 tr. 267 & Dược lý hô hấp"
  },
  {
    "id": 316,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Một tài xế lái xe đường dài bị viêm mũi dị ứng và ngứa ngáy nhiều do thời tiết. Bác sĩ nên lựa chọn thuốc kháng histamin nào sau đây để không làm ảnh hưởng đến khả năng lái xe an toàn của bệnh nhân?",
    "options": [
      "Promethazin",
      "Diphenhydramin",
      "Fexofenadin",
      "Clorpheniramin"
    ],
    "correct": 2,
    "explanation": "Fexofenadin là thuốc kháng H1 thế hệ 2 hoàn toàn không qua được hàng rào máu não ở liều điều trị, không gây buồn ngủ, không làm chậm phản xạ vận động, được FDA xếp loại an toàn cho phi công và người lái tàu xe.",
    "reference": "Sách Dược lý 2 tr. 348-349"
  },
  {
    "id": 317,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân nam 45 tuổi đi xét nghiệm máu định kỳ có kết quả: Cholesterol toàn phần 6,8 mmol/L, Triglycerid 12,5 mmol/L (trên 1100 mg/dL), HDL-C 0,8 mmol/L. Nguy cơ cấp tính trước mắt đe dọa bệnh nhân là gì và thuốc ưu tiên số 1 cần dùng ngay là gì?",
    "options": [
      "Nguy cơ nhồi máu não; ưu tiên dùng ngay Aspirin",
      "Nguy cơ suy thận cấp; ưu tiên dùng ngay Furosemid",
      "Nguy cơ viêm tụy cấp; ưu tiên dùng ngay thuốc nhóm Fibrat",
      "Nguy cơ xơ gan mất bù; ưu tiên dùng ngay Vitamin B1"
    ],
    "correct": 2,
    "explanation": "Khi triglycerid máu tăng cực cao (> 10 mmol/L hay > 1000 mg/dL), các vi hạt chylomicron làm tắc vi tuần hoàn tụy và giải phóng acid béo tự do gây hoại tử tế bào tụy (viêm tụy cấp). Chỉ định cấp bách số 1 là dùng Fibrat (Fenofibrat) liều chuẩn để hạ nhanh triglycerid phòng viêm tụy cấp.",
    "reference": "Sách Dược lý 2 tr. 93"
  },
  {
    "id": 318,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân nam 30 tuổi từ vùng rừng núi Tây Nguyên trở về, sốt cao rét run từng cơn, xét nghiệm lam máu thấy thể tư dưỡng của Plasmodium vivax. Bác sĩ chỉ định Cloroquin trong 3 ngày. Để chống sốt rét tái phát sau này, bác sĩ cần chỉ định thêm thuốc nào trong 14 ngày tiếp theo?",
    "options": [
      "Primaquin",
      "Doxycyclin",
      "Quinin",
      "Artesunat"
    ],
    "correct": 0,
    "explanation": "Cloroquin chỉ diệt được thể phân chia trong hồng cầu (cắt cơn sốt). Ký sinh trùng P. vivax có thể ngủ (hypnozoite) nằm lại trong gan có thể tái phát sau vài tháng. Bắt buộc phải dùng tiếp Primaquin trong 14 ngày (sau khi đã xét nghiệm G6PD bình thường) để diệt sạch thể ngủ trong gan.",
    "reference": "Sách Dược lý 2 tr. 200-201"
  },
  {
    "id": 319,
    "subject": "duocly2",
    "chapter": "KTGHP",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân nữ 54 tuổi bị tăng huyết áp đang dùng Amlodipin 5mg/ngày. Bệnh nhân than phiền hai mắt cá chân bị phù sưng to vào buổi chiều nhưng ấn lõm không đau, xét nghiệm nước tiểu protein âm tính, chức năng thận bình thường. Giải pháp xử trí phù hợp nhất là gì?",
    "options": [
      "Kê thêm thuốc lợi tiểu quai Furosemid liều cao 80mg mỗi ngày",
      "Giải thích đây là tác dụng phụ giãn tiểu động mạch của Amlodipin và cân nhắc giảm liều hoặc phối hợp thêm thuốc nhóm ACEI/ARB",
      "Chẩn đoán bệnh nhân bị suy thận cấp và chuyển đi lọc máu khẩn cấp",
      "Kê thêm thuốc kháng sinh chống viêm mô bào"
    ],
    "correct": 1,
    "explanation": "Phù mắt cá chân do CCB (Amlodipin) là do giãn chọn lọc tiểu động mạch trước mao mạch làm tăng áp lực thủy tĩnh mao mạch chứ không phải do giữ muối nước hay suy thận, nên không đáp ứng với thuốc lợi tiểu. Phối hợp ACEI/ARB sẽ làm giãn thêm tiểu tĩnh mạch sau mao mạch, cân bằng áp lực mao mạch và làm biến mất triệu chứng phù chân.",
    "reference": "Sách Dược lý 2 tr. 64, 75"
  },
  {
    "id": 320,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân nam 45 tuổi bị viêm khớp dạng thấp đang uống Prednisolon 15mg/ngày liên tục 6 tháng nay. Bệnh nhân chuẩn bị trải qua phẫu thuật cắt túi mật nội soi. Xử trí chế độ dùng Corticoid trong thời gian phẫu thuật như thế nào là đúng?",
    "options": [
      "Phải tăng liều Hydrocortison đường tiêm trong ngày phẫu thuật và giảm dần về liều cũ khi ổn định để chống suy thượng thận cấp do stress phẫu thuật",
      "Thay thế toàn bộ bằng kháng sinh phổ rộng",
      "Chỉ dùng thuốc giảm đau paracetamol mà không cần quan tâm đến corticoid",
      "Cắt bỏ hoàn toàn Prednisolon trước phẫu thuật 3 ngày để vết mổ mau lành"
    ],
    "correct": 0,
    "explanation": "Bệnh nhân dùng corticoid kéo dài đã bị ức chế trục dưới đồi - tuyến yên - thượng thận nên không thể tự tiết thêm cortisol để đáp ứng với stress phẫu thuật. Nếu ngừng thuốc hoặc giữ nguyên liều thấp, bệnh nhân dễ rơi vào sốc suy thượng thận cấp tử vong. Bắt buộc phải bù liều stress (Hydrocortison tiêm TM) trong mổ.",
    "reference": "Sách Dược lý 2 tr. 289"
  },
  {
    "id": 321,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân nữ 62 tuổi mắc đái tháo đường typ 2 đang điều trị bằng Metformin 1000mg x 2 lần/ngày. Xét nghiệm định kỳ thấy Creatinin huyết thanh tăng lên 180 mcmol/L, mức lọc cầu thận ước tính (eGFR) là 24 mL/phút/1,73m2. Quyết định xử trí thuốc đúng đắn nhất là gì?",
    "options": [
      "Ngừng vĩnh viễn Metformin vì eGFR dưới 30 mL/phút có nguy cơ rất cao gây nhiễm toan acid lactic tử vong",
      "Tiếp tục giữ nguyên liều cũ vì metformin bảo vệ thận",
      "Tăng liều metformin lên gấp đôi để hạ đường huyết tốt hơn",
      "Chuyển sang dùng Metformin dạng tiêm bắp"
    ],
    "correct": 0,
    "explanation": "Metformin thải trừ gần như 100% qua thận dưới dạng không biến đổi. Khi eGFR giảm dưới 30 mL/phút/1.73m2, metformin bị tích lũy nặng nề trong cơ thể, ức chế chuyển hóa acid lactic ở ty thể dẫn tới toan máu acid lactic có tỷ lệ tử vong 50%. Chống chỉ định tuyệt đối khi eGFR < 30.",
    "reference": "Sách Dược lý 2 tr. 299"
  },
  {
    "id": 322,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân nam 65 tuổi đang dùng Warfarin để dự phòng huyết khối sau thay van tim cơ học, xét nghiệm INR định kỳ đạt 8,5 (nguy cơ chảy máu rất cao) nhưng hiện tại bệnh nhân hoàn toàn không có triệu chứng xuất huyết. Biện pháp xử trí chuẩn theo hướng dẫn là gì?",
    "options": [
      "Tiến hành lọc máu cấp cứu để đào thải warfarin",
      "Tạm ngừng Warfarin và cho uống một liều nhỏ Vitamin K1 đường uống",
      "Tiếp tục uống liều Warfarin cũ nhưng truyền thêm dung dịch natri clorid",
      "Tiêm tĩnh mạch bolus Protamin sulfat liều cao"
    ],
    "correct": 1,
    "explanation": "Khi INR từ 4,5 đến 10 mà không có xuất huyết trên lâm sàng, xử trí chuẩn là tạm dừng 1-2 liều Warfarin và có thể dùng Vitamin K1 liều thấp (1 - 2,5 mg) theo đường uống để đưa INR về khoảng an toàn. Đường uống cho đáp ứng hồi phục đông máu êm dịu và an toàn hơn tiêm TM.",
    "reference": "Sách Dược lý 2 tr. 120"
  },
  {
    "id": 323,
    "subject": "duocly2",
    "chapter": "Thuốc chữa thiếu máu",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân nam 55 tuổi bị suy thận mạn tính giai đoạn 4, nồng độ Hemoglobin máu giảm còn 8,2 g/dL. Trước khi bắt đầu chỉ định tiêm thuốc kích thích sinh hồng cầu Erythropoietin (EPO), bác sĩ bắt buộc phải kiểm tra và bổ sung đầy đủ yếu tố nào trước tiên?",
    "options": [
      "Dự trữ sắt trong cơ thể",
      "Số lượng tiểu cầu toàn phần",
      "Nồng độ hormone tuyến giáp TSH",
      "Nồng độ acid uric huyết tương"
    ],
    "correct": 0,
    "explanation": "Erythropoietin kích thích tủy xương tăng sinh ồ ạt hồng cầu non, quá trình này đòi hỏi lượng sắt rất lớn để tổng hợp hemoglobin. Nếu bệnh nhân bị thiếu sắt tiềm ẩn, tủy xương không có nguyên liệu sẽ dẫn tới đáp ứng kém hoặc thất bại điều trị với EPO. Bắt buộc phải bù đủ sắt trước và trong khi dùng EPO.",
    "reference": "Sách Dược lý 2 tr. 130"
  },
  {
    "id": 324,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân nam 35 tuổi nhiễm HIV giai đoạn lâm sàng 3 có số lượng tế bào lympho T CD4 là 180 tế bào/mm3. Trong phác đồ ARV có thuốc Zidovudin (AZT). Xét nghiệm tổng phân tích tế bào máu ngoại vi định kỳ cần theo dõi chặt chẽ chỉ số nào để phát hiện độc tính của AZT?",
    "options": [
      "Nồng độ acid uric máu",
      "Chỉ số đông máu INR",
      "Chỉ số men tụy Amylase và Lipase",
      "Số lượng hồng cầu và nồng độ Hemoglobin để phát hiện thiếu máu nặng do ức chế tủy xương"
    ],
    "correct": 3,
    "explanation": "Độc tính nguy hiểm và phổ biến nhất của Zidovudin (AZT) là ức chế tủy xương phụ thuộc liều, gây thiếu máu nặng hồng cầu to và giảm bạch cầu trung tính, thường xuất hiện sau 4-12 tuần điều trị, nhiều bệnh nhân phải truyền máu hoặc chuyển sang Tenofovir.",
    "reference": "Sách Dược lý 2 tr. 238"
  },
  {
    "id": 325,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân nữ 48 tuổi bị ung thư vú được hóa trị bằng phác đồ có chứa Doxorubicin (Adriamycin). Tổng liều tích lũy của Doxorubicin không được vượt quá ngưỡng bao nhiêu để tránh nguy cơ bùng phát suy tim sung huyết mạn tính không hồi phục?",
    "options": [
      "450 đến 550 mg/m2 diện tích da cơ thể",
      "10 đến 20 mg/m2 diện tích da cơ thể",
      "50 đến 100 mg/m2 diện tích da cơ thể",
      "1500 đến 2000 mg/m2 diện tích da cơ thể"
    ],
    "correct": 0,
    "explanation": "Độc tính trên tim của Doxorubicin phụ thuộc chặt chẽ vào tổng liều tích lũy suốt đời. Khi tổng liều vượt quá 450 - 550 mg/m2, tỷ lệ suy tim cơ tim mạn tính tăng vọt theo cấp số nhân (lên tới trên 30%), do đó đây là liều trần tích lũy tối đa tuyệt đối không được vượt qua.",
    "reference": "Sách Dược lý 2 tr. 258"
  },
  {
    "id": 326,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Một thanh niên 22 tuổi uống 30 viên Paracetamol 500mg (tổng liều 15g) để tự tử cách đây 4 giờ. Bệnh nhân tỉnh táo, nôn nao, chưa vàng mắt. Xử trí dùng thuốc giải độc đặc hiệu nào là đúng đắn và hiệu quả nhất lúc này?",
    "options": [
      "Tiêm bắp ngay Naloxon 0,4mg",
      "Tiêm tĩnh mạch Vitamin K1 liều cao 50mg",
      "Chờ 24 giờ sau xét nghiệm lại men gan nếu tăng mới bắt đầu điều trị",
      "Cho dùng ngay N-acetylcystein đường uống hoặc truyền tĩnh mạch trong vòng 8-10 giờ đầu sau uống"
    ],
    "correct": 3,
    "explanation": "15g Paracetamol là liều gây hoại tử tế bào gan cực nặng. N-acetylcystein (NAC) có hiệu quả bảo vệ gan gần như 100% nếu được sử dụng trong vòng 8 - 10 giờ đầu sau khi uống quá liều, trước khi tổn thương tế bào gan không hồi phục xảy ra. Không được trì hoãn chờ kết quả men gan.",
    "reference": "Sách Dược lý 2 tr. 358-359"
  },
  {
    "id": 327,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng giãn mạch của Nitrat hữu cơ diễn ra ưu tiên trên hệ mạch nào khi dùng ở liều điều trị thông thường?",
    "options": [
      "Động mạch thận làm giảm độ lọc cầu thận",
      "Tiểu động mạch ngoại vi làm giảm hậu gánh tối đa",
      "Hệ tĩnh mạch lớn làm giảm lượng máu trở về tim",
      "Mao mạch màng não gây co mạch não"
    ],
    "correct": 2,
    "explanation": "Ở liều điều trị thông thường, nitrat hữu cơ tác dụng ưu tiên trên cơ trơn của hệ tĩnh mạch lớn hơn nhiều so với động mạch, làm giãn tĩnh mạch, ứ trệ máu ở ngoại vi, làm giảm áp lực đổ đầy thất trái (giảm tiền gánh).",
    "reference": "Sách Dược lý 2 tr. 42"
  },
  {
    "id": 328,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Erythrityl tetranitrat và Pentaerythritol tetranitrat thuộc nhóm nitrat hữu cơ thường được sử dụng nhằm mục đích gì?",
    "options": [
      "Tiêm tủy sống chống đau sau mổ",
      "Cắt cơn đau thắt ngực cấp tính sau vài giây",
      "Bôi ngoài da trị nứt kẽ hậu môn",
      "Điều trị dự phòng cơn đau thắt ngực lâu dài do có thời gian tác dụng kéo dài"
    ],
    "correct": 3,
    "explanation": "Erythrityl tetranitrat và Pentaerythritol tetranitrat là các nitrat hữu cơ phân tử lớn, hấp thu và chuyển hóa chậm, tác dụng kéo dài từ 4 đến 8 giờ, dùng để điều trị dự phòng xuất hiện cơn đau thắt ngực.",
    "reference": "Sách Dược lý 2 tr. 44"
  },
  {
    "id": 329,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Vì sao thuốc chẹn kênh calci Dihydropyridin tác dụng ngắn (như Nifedipin viên nang) KHÔNG được dùng đơn độc để điều trị cơn đau thắt ngực không ổn định?",
    "options": [
      "Vì gây co thắt phế quản cấp tính",
      "Vì làm giảm bài tiết nước tiểu gây phù phổi",
      "Vì gây hạ áp nhanh kích hoạt phản xạ giao cảm làm tim đập nhanh và tăng tiêu thụ oxy cơ tim làm tăng nguy cơ nhồi máu",
      "Vì làm tan cục máu đông dẫn đến xuất huyết"
    ],
    "correct": 2,
    "explanation": "Nifedipin tác dụng ngắn gây giãn tiểu động mạch nhanh và tụt áp đột ngột, kích hoạt phản xạ giao cảm làm nhịp tim nhanh và co bóp mạnh, làm tăng nhu cầu oxy cơ tim trong khi mạch vành bị tắc nghẽn, làm tăng nguy cơ tử vong.",
    "reference": "Sách Dược lý 2 tr. 50"
  },
  {
    "id": 330,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Diltiazem là thuốc chẹn kênh calci nhóm benzothiazepin, trong điều trị đau thắt ngực có ưu điểm cân bằng nào?",
    "options": [
      "Tăng sức co bóp cơ tim gấp đôi",
      "Chỉ làm giãn tĩnh mạch lớn mà không ảnh hưởng cơ tim",
      "Hoàn toàn không chuyển hóa qua gan",
      "Vừa làm giãn mạch vành vừa làm chậm nhịp tim ở mức độ vừa phải, ít gây nhịp nhanh phản xạ"
    ],
    "correct": 3,
    "explanation": "Diltiazem có tác dụng trung gian giữa Verapamil (ức chế tim mạnh) và Nifedipin (giãn mạch mạnh): Diltiazem vừa làm giãn động mạch vành và động mạch ngoại biên, vừa làm chậm nhịp tim nhẹ nhàng, không gây nhịp nhanh phản xạ.",
    "reference": "Sách Dược lý 2 tr. 50-51"
  },
  {
    "id": 331,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Khi sử dụng Nitroglycerin xịt dưới lưỡi, tư thế chuẩn của người bệnh khi dùng thuốc là gì?",
    "options": [
      "Nằm ngửa đầu thấp dốc ngược",
      "Cúi gập người về phía trước ép bụng",
      "Ngồi tựa lưng hoặc đứng yên vị trí an toàn, không được hít sâu khi xịt",
      "Chạy bộ chậm để thuốc nhanh ngấm"
    ],
    "correct": 2,
    "explanation": "Bệnh nhân phải ngồi nghỉ ngơi hoặc đứng tựa để tránh bị ngất do tụt huyết áp tư thế. Khi xịt vào dưới lưỡi phải ngậm miệng lại và không hít sâu vào phổi để thuốc hấp thu qua niêm mạc miệng mà không gây kích ứng đường thở.",
    "reference": "Sách Dược lý 2 tr. 43"
  },
  {
    "id": 332,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong phân loại Vaughan Williams, thuốc chống loạn nhịp nhóm IC như Propafenon tác động lên điện thế hoạt động như thế nào?",
    "options": [
      "Chỉ phong bế dòng calci chậm pha 2",
      "Kéo dài pha tái cực và làm dài thời gian điện thế hoạt động",
      "Rút ngắn thời gian điện thế hoạt động của cơ thất",
      "Ức chế rất mạnh kênh Na+ làm giảm mạnh độ dốc khử cực pha 0 và làm chậm dẫn truyền, ít ảnh hưởng thời gian điện thế hoạt động"
    ],
    "correct": 3,
    "explanation": "Nhóm IC (Flecainid, Propafenon) gắn và tách khỏi kênh Na+ rất chậm, ức chế mạnh dòng Na+ đi vào làm giảm mạnh tốc độ khử cực pha 0 và làm chậm dẫn truyền trong thất (QRS giãn rộng), nhưng hầu như không thay đổi thời gian APD.",
    "reference": "Sách Dược lý 2 tr. 33"
  },
  {
    "id": 333,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Phenytoin (Diphenylhydantoin) ngoài tác dụng chống động kinh còn được dùng trong tim mạch điều trị loạn nhịp do nguyên nhân nào?",
    "options": [
      "Blốc nhĩ thất độ III bẩm sinh",
      "Loạn nhịp thất do ngộ độc Glycosid tim",
      "Loạn nhịp do cường giáp trạng",
      "Cắt cơn rung nhĩ kịch phát ở người trẻ"
    ],
    "correct": 1,
    "explanation": "Phenytoin thuộc nhóm IB, có tác dụng ức chế tính tự động của các ổ ngoại vị ở tâm thất nhưng lại cải thiện dẫn truyền nhĩ thất bị ức chế bởi digitalis, là thuốc rất hiệu quả điều trị loạn nhịp thất do ngộ độc digitalis.",
    "reference": "Sách Dược lý 2 tr. 32-33"
  },
  {
    "id": 334,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc chống loạn nhịp Amiodaron có thời gian bán thải (t1/2) trong cơ thể xấp xỉ khoảng bao lâu?",
    "options": [
      "Khoảng 25 đến 60 ngày",
      "Khoảng 2 đến 4 giờ",
      "Khoảng 24 giờ",
      "Khoảng 12 tháng"
    ],
    "correct": 0,
    "explanation": "Amiodaron rất tan trong mỡ, tích lũy lượng lớn trong mô mỡ và các tạng, thải trừ cực kỳ chậm với thời gian bán thải trung bình từ 25 đến 60 ngày (thậm chí tới hơn 100 ngày), do đó sau khi ngừng thuốc tác dụng và độc tính vẫn kéo dài nhiều tháng.",
    "reference": "Sách Dược lý 2 tr. 35"
  },
  {
    "id": 335,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bretylium tosilat thuộc nhóm III được chỉ định trong cấp cứu loạn nhịp tim trong tình huống nguy kịch nào?",
    "options": [
      "Hội chứng nút xoang bệnh lý",
      "Rung thất hoặc nhịp nhanh thất trơ kháng với sốc điện và lidocain",
      "Ngoại tâm thu nhĩ thưa thớt",
      "Nhịp xoang nhanh do lo âu"
    ],
    "correct": 1,
    "explanation": "Bretylium kéo dài mạnh mẽ thời gian điện thế hoạt động và thời kỳ trơ của tế bào cơ thất, nâng cao ngưỡng rung thất, là thuốc cấp cứu hồi sinh tim phổi trong rung thất dai dẳng kháng với sốc điện và các thuốc chống loạn nhịp khác.",
    "reference": "Sách Dược lý 2 tr. 37"
  },
  {
    "id": 336,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bumetanid và Torsemid là thuốc lợi tiểu thuộc nhóm nào và có đặc điểm gì so với Furosemid?",
    "options": [
      "Thuốc lợi tiểu giữ kali không kháng aldosteron",
      "Thuốc lợi niệu quai, có hoạt lực mạnh hơn Furosemid",
      "Thuốc ức chế carbonic anhydrase ở ống lượn xa",
      "Thuốc lợi niệu thẩm thấu tác dụng chậm"
    ],
    "correct": 1,
    "explanation": "Bumetanid và Torsemid là thuốc lợi tiểu quai, ức chế đồng vận chuyển Na+/K+/2Cl- ở quai Henle. Bumetanid có hoạt lực tính theo miligram mạnh gấp 40 lần Furosemid (1mg Bumetanid tương đương 40mg Furosemid) và sinh khả dụng đường uống cao hơn.",
    "reference": "Sách Dược lý 2 tr. 81"
  },
  {
    "id": 337,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Acid ethacrynic là thuốc lợi tiểu quai có đặc điểm hóa học nào khác biệt với Furosemid?",
    "options": [
      "Không chứa nhóm chức sulfonamid nên an toàn cho người có tiền sử dị ứng với kháng sinh sulfamid",
      "Không tan trong nước",
      "Chứa hai nguyên tử iot gắn vòng thơm",
      "Có cấu trúc steroid tổng hợp"
    ],
    "correct": 0,
    "explanation": "Furosemid, Bumetanid và Thiazid đều là dẫn chất chứa nhóm sulfonamid (-SO2NH2) nên có dị ứng chéo với kháng sinh sulfamid. Acid ethacrynic là dẫn chất acid phenoxyacetic không chứa nhóm sulfonamid, dùng được cho người dị ứng sulfamid.",
    "reference": "Sách Dược lý 2 tr. 81"
  },
  {
    "id": 338,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Phối hợp thuốc lợi tiểu Thiazid với thuốc lợi tiểu giữ Kali (như Triamteren hoặc Spironolacton) trong cùng một viên thuốc nhằm mục đích chính là gì?",
    "options": [
      "Tăng độc tính trên thính giác",
      "Tăng hiệu quả lợi niệu và triệt tiêu tác dụng phụ trên nồng độ kali máu",
      "Làm giảm hấp thu của cả hai thuốc ở dạ dày",
      "Kích thích tiết insulin bù trừ"
    ],
    "correct": 1,
    "explanation": "Thiazid gây mất kali trong khi lợi tiểu giữ kali (Spironolacton, Triamteren, Amilorid) ngăn cản đào thải kali. Phối hợp hai thuốc vừa tăng hiệp đồng bài xuất natri hạ áp, vừa giữ kali máu ở mức hằng định bình thường.",
    "reference": "Sách Dược lý 2 tr. 89"
  },
  {
    "id": 339,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc ức chế thụ thể Histamin H2 nào sau đây có hiệu lực ức chế bài tiết acid mạnh nhất theo trọng lượng (gấp 20 - 50 lần Cimetidin)?",
    "options": [
      "Famotidin",
      "Cimetidin",
      "Nizatidin",
      "Ranitidin"
    ],
    "correct": 0,
    "explanation": "Famotidin có hoạt lực ức chế bài tiết acid dịch vị mạnh nhất trong nhóm kháng H2 (mạnh gấp 20-50 lần Cimetidin và gấp 3-8 lần Ranitidin), tác dụng kéo dài 10-12 giờ và hoàn toàn không ức chế hệ enzym gan CYP450.",
    "reference": "Sách Dược lý 2 tr. 104"
  },
  {
    "id": 340,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Rabeprazol là thuốc ức chế bơm proton (PPI) thế hệ hai có đặc tính chuyển hóa nổi bật nào?",
    "options": [
      "Chỉ chuyển hóa ở vi nhung mao ruột",
      "Chuyển hóa chủ yếu qua con đường phi enzym nên ít phụ thuộc vào đa hình di truyền của CYP2C19",
      "Không chuyển hóa mà thải 100% qua mồ hôi",
      "Bị phá hủy hoàn toàn bởi dịch mật"
    ],
    "correct": 1,
    "explanation": "Rabeprazol được chuyển hóa chủ yếu qua con đường phi enzym thành dẫn xuất thioether, do đó hiệu lực ức chế acid của Rabeprazol rất ổn định, ít bị ảnh hưởng bởi tính đa hình di truyền của enzym CYP2C19 ở người châu Á.",
    "reference": "Sách Dược lý 2 tr. 105"
  },
  {
    "id": 341,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cơ chế kháng khuẩn của hợp chất Bismuth đối với vi khuẩn Helicobacter pylori trong dạ dày là gì?",
    "options": [
      "Gây đột biến chuỗi polyadenylat của vi khuẩn",
      "Ngăn chặn sự tháo xoắn của thoi phân bào vi khuẩn",
      "Làm biến tính protein, ức chế enzym urease và phá vỡ vách tế bào vi khuẩn",
      "Ức chế enzym sao chép ngược của vi khuẩn"
    ],
    "correct": 2,
    "explanation": "Bismuth gắn vào màng tế bào H. pylori, ức chế các enzym của vi khuẩn (đặc biệt là enzym urease giúp vi khuẩn trung hòa acid để sống sót), ngăn cản vi khuẩn bám dính vào tế bào niêm mạc và gây ly giải vách tế bào vi khuẩn.",
    "reference": "Sách Dược lý 2 tr. 108"
  },
  {
    "id": 342,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc giãn phế quản dẫn xuất Xanthin (như Theophylin, Aminophylin) làm giãn cơ trơn đường dẫn khí nhờ hai cơ chế phân tử nào?",
    "options": [
      "Kích thích chọn lọc thụ thể muscarinic M3 và tăng dòng calci",
      "Ức chế chuỗi chuyền điện tử ở màng ty thể",
      "Ức chế không chọn lọc enzym phosphodiesterase PDE làm tăng AMP vòng và đối kháng tại thụ thể Adenosin A1, A2",
      "Chẹn thụ thể beta-2 adrenergic trên phế quản"
    ],
    "correct": 2,
    "explanation": "Theophylin ức chế enzym phosphodiesterase (ngăn giáng hóa cAMP và cGMP gây giãn cơ trơn) và đối kháng cạnh tranh thụ thể adenosin (chất gây co thắt phế quản và giải phóng histamin ở bệnh nhân hen).",
    "reference": "Sách Dược lý 2 tr. 16, 20 & Dược lý hô hấp"
  },
  {
    "id": 343,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Aminophylin là dạng thuốc tiêm của Theophylin được bào chế phối hợp cùng chất nào để làm tăng độ tan trong nước?",
    "options": [
      "Natri hydrocarbonat",
      "Glycerin",
      "Ethylendiamin",
      "Acid citric"
    ],
    "correct": 2,
    "explanation": "Theophylin rất ít tan trong nước. Bào chế dạng phức hợp muối với ethylendiamin (Aminophylin chứa khoảng 80% theophylin) làm tăng độ tan trong nước gấp nhiều lần, cho phép dùng tiêm truyền tĩnh mạch cấp cứu.",
    "reference": "Sách Dược lý 2 tr. 20 & Dược lý hô hấp"
  },
  {
    "id": 344,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Desloratadin có nguồn gốc xuất xứ dược động học là gì?",
    "options": [
      "Được sinh tổng hợp trực tiếp từ histamin",
      "Là đồng phân quay phải của Cetirizin",
      "Là chất chuyển hóa chính có hoạt tính của Loratadin",
      "Là tiền chất este hóa của Fexofenadin"
    ],
    "correct": 2,
    "explanation": "Desloratadin chính là chất chuyển hóa có hoạt tính descarboethoxyloratadin của Loratadin. Thuốc có hoạt lực kháng H1 mạnh hơn loratadin gấp 3-4 lần, không cần chuyển hóa qua gan bước đầu và thời gian bán thải dài (27 giờ).",
    "reference": "Sách Dược lý 2 tr. 344, 349"
  },
  {
    "id": 345,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cetirizin và Levocetirizin có đặc điểm thải trừ nổi bật nào so với các thuốc kháng H1 thế hệ 2 khác?",
    "options": [
      "Chuyển hóa 100% qua enzym gan CYP3A4",
      "Đào thải độc quyền qua đường hô hấp",
      "Tích lũy hoàn toàn trong mô mỡ suốt đời",
      "Thải trừ chủ yếu qua thận dưới dạng không biến đổi, cần chỉnh liều khi suy thận"
    ],
    "correct": 3,
    "explanation": "Cetirizin (chất chuyển hóa carboxylic của hydroxyzine) và đồng phân hoạt tính Levocetirizin bài xuất chủ yếu qua thận ở dạng nguyên vẹn (khoảng 70% qua nước tiểu), ít chuyển hóa qua gan nên rất an toàn khi dùng cùng các thuốc ức chế CYP450.",
    "reference": "Sách Dược lý 2 tr. 349"
  },
  {
    "id": 346,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc tẩy giun Levamisol có cơ chế tác dụng dược lý nào?",
    "options": [
      "Tác dụng giống nicotin gây khử cực hạch thần kinh cơ làm liệt cứng cơ giun và có thêm tác dụng điều hòa miễn dịch",
      "Ức chế enzym tổng hợp thành tế bào giun",
      "Làm tan rã lớp cutin bảo vệ của giun",
      "Ức chế quá trình tháo xoắn ARN thông tin"
    ],
    "correct": 0,
    "explanation": "Levamisol (đồng phân L của tetramisol) kích thích hạch thần kinh của giun gây co cứng cơ làm liệt giun nhanh chóng. Ngoài ra thuốc còn có tác dụng kích thích miễn dịch tế bào (phục hồi chức năng tế bào lympho T).",
    "reference": "Sách Dược lý 2 tr. 214-215"
  },
  {
    "id": 347,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc tẩy giun nào sau đây đào thải qua nước tiểu làm nước tiểu có màu đỏ cam hoặc vàng tươi vô hại?",
    "options": [
      "Mebendazol",
      "Diethylcarbamazin",
      "Piperazin",
      "Pyrvinium pamoat"
    ],
    "correct": 3,
    "explanation": "Pyrvinium pamoat (thuốc nhuộm cyanin đặc trị giun kim) là chất có màu đỏ tươi, không hấp thu qua ruột, đào thải làm phân có màu đỏ tươi và nước tiểu có thể đổi màu đỏ cam, cần dặn bệnh nhân trước để tránh hoảng sợ.",
    "reference": "Sách Dược lý 2 tr. 214"
  },
  {
    "id": 348,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Acid béo Omega-3 (EPA và DHA) liều cao (2 - 4 g/ngày) có tác dụng hạ thành phần lipid máu nào rõ rệt nhất?",
    "options": [
      "Hạ mạnh nồng độ Triglycerid máu",
      "Hạ mạnh nồng độ Cholesterol toàn phần",
      "Phá hủy hoàn toàn hạt HDL",
      "Tăng vọt nồng độ LDL-Cholesterol"
    ],
    "correct": 0,
    "explanation": "Axit béo không bão hòa đa Omega-3 (EPA và DHA) ức chế enzym tổng hợp acid béo và triglycerid ở gan, đồng thời làm tăng thoái hóa acid béo ở ty thể, giúp hạ nồng độ Triglycerid máu từ 20 đến 50%.",
    "reference": "Sách Dược lý 2 tr. 100"
  },
  {
    "id": 349,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Fansidar là thuốc chống sốt rét phối hợp kinh điển giữa hai hoạt chất nào theo cơ chế hiệp đồng ức chế tổng hợp acid folic?",
    "options": [
      "Cloroquin và Quinin",
      "Primaquin và Doxycyclin",
      "Artesunat và Mefloquin",
      "Sulfadoxin và Pyrimethamin"
    ],
    "correct": 3,
    "explanation": "Fansidar là dạng phối hợp cố định giữa Sulfadoxin (ức chế enzym dihydropteroat synthetase) và Pyrimethamin (ức chế enzym dihydrofolat reductase), tác động ức chế nối tiếp hai khâu trong quá trình sinh tổng hợp acid tetrahydrofolic của ký sinh trùng.",
    "reference": "Sách Dược lý 2 tr. 202-203"
  },
  {
    "id": 350,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Doxycyclin được sử dụng trong bệnh sốt rét chủ yếu với vai trò gì?",
    "options": [
      "Dự phòng sốt rét cho người đi vào vùng sốt rét lưu hành có P. falciparum kháng cloroquin hoặc phối hợp điều trị",
      "Cắt cơn sốt rét ác tính tức thời trong vòng 15 phút",
      "Diệt thể giao bào chống lây lan sang muỗi",
      "Diệt thể ngủ trong gan của P. vivax thay thế primaquin"
    ],
    "correct": 0,
    "explanation": "Doxycyclin gắn vào tiểu phần 30S ribosom của ký sinh trùng gây chết chậm, thường được dùng để uống dự phòng cho du khách đi vào vùng có ký sinh trùng kháng thuốc, hoặc phối hợp cùng Quinin/Artesunat trong điều trị sốt rét do P. falciparum kháng thuốc.",
    "reference": "Sách Dược lý 2 tr. 203"
  },
  {
    "id": 351,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng của Glycosid tim trên dẫn truyền nhĩ thất là gì?",
    "options": [
      "Không ảnh hưởng gì đến nút nhĩ thất",
      "Rút ngắn khoảng PR trên điện tâm đồ",
      "Làm tăng tốc độ dẫn truyền qua nút nhĩ thất",
      "Làm chậm dẫn truyền và kéo dài thời gian trơ của nút nhĩ thất"
    ],
    "correct": 3,
    "explanation": "Do kích thích phế vị và tác động trực tiếp, glycosid tim làm chậm tốc độ dẫn truyền qua nút nhĩ thất và kéo dài thời kỳ trơ của nút này, làm khoảng PR trên ECG dài ra, ứng dụng điều trị rung nhĩ nhanh.",
    "reference": "Sách Dược lý 2 tr. 13"
  },
  {
    "id": 352,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân có nồng độ Kali máu tăng cao trên 5,5 mmol/L sẽ ảnh hưởng như thế nào đến tác dụng của Digitalis?",
    "options": [
      "Làm thuốc tích lũy hoàn toàn trong mô mỡ",
      "Làm giảm sự gắn kết của digitalis vào enzym Na+-K+ ATPase và làm giảm tác dụng trợ tim của thuốc",
      "Làm tăng vọt độc tính của digitalis gây ngừng tim",
      "Gây biến đổi cấu trúc phân tử digitalis thành dạng độc"
    ],
    "correct": 1,
    "explanation": "Ion K+ cạnh tranh vị trí gắn với glycosid tim trên enzym Na+-K+ ATPase. Khi K+ máu tăng cao, digitalis khó gắn vào enzym nên tác dụng trợ tim giảm đi; ngược lại khi K+ máu hạ, digitalis gắn mạnh dễ gây ngộ độc.",
    "reference": "Sách Dược lý 2 tr. 16"
  },
  {
    "id": 353,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị THA",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Phần lớn các thuốc ức chế men chuyển thải trừ chủ yếu qua thận nên phải giảm liều khi suy thận. Thuốc ức chế men chuyển nào sở hữu cấu trúc phosphinyl có cơ chế thải trừ bù trừ kép cân bằng 50:50 qua cả gan (mật/phân) và thận, an toàn cho người suy giảm chức năng thận vừa và nhẹ?",
    "options": [
      "Lisinopril (thải 100% qua thận nguyên vẹn)",
      "Enalapril (thải chủ yếu qua thận)",
      "Fosinopril",
      "Captopril (thải 95% qua thận)"
    ],
    "correct": 2,
    "explanation": "Fosinopril là thuốc ức chế men chuyển duy nhất chứa nhóm phosphinyl, được thải trừ cân bằng kép 50% qua gan mật và 50% qua thận. Khi chức năng thận suy giảm, gan sẽ tăng cường thải trừ bù trừ và ngược lại, do đó không cần chỉnh liều ở bệnh nhân suy thận nhẹ đến trung bình.",
    "reference": "Sách Dược lý 2 tr. 67"
  },
  {
    "id": 354,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị THA",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong các thuốc chẹn thụ thể ARB, hoạt chất nào có thời gian bán thải sinh học kéo dài nhất (t₁/₂ xấp xỉ 24 giờ) giúp kiểm soát huyết áp ổn định suốt chu kỳ ngày đêm, đồng thời có hoạt tính kích hoạt thụ thể nhân PPAR-gamma giúp cải thiện chuyển hóa glucose và lipid?",
    "options": [
      "Losartan (thời gian bán thải ngắn 6-9 giờ)",
      "Valsartan (thời gian bán thải khoảng 6 giờ)",
      "Eprosartan (thời gian bán thải khoảng 5-7 giờ)",
      "Telmisartan"
    ],
    "correct": 3,
    "explanation": "Telmisartan có thời gian bán thải dài nhất trong nhóm ARB (t1/2 ~ 24 giờ) và thải trừ 98% qua gan mật/phân. Cấu trúc độc đáo của Telmisartan còn hoạt hóa thụ thể nhân PPAR-gamma (tương tự nhóm Thiazolidinedion), làm tăng nhạy cảm insulin và giảm triglycerid máu, rất có lợi cho bệnh nhân THA có hội chứng chuyển hóa.",
    "reference": "Sách Dược lý 2 tr. 71"
  },
  {
    "id": 355,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị THA",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Một bệnh nhân nữ điều trị tăng huyết áp than phiền mỗi khi ra lạnh các đầu ngón tay bị tê cóng, chuyển sang trắng bệch rồi tím tái do co thắt mạch đầu chi (hiện tượng Raynaud thứ phát). Thuốc hạ áp nào có nguy cơ cao nhất gây ra biến chứng này do phong bế thụ thể beta-2 làm tăng trương lực thụ thể alpha-1 co mạch ngoại vi?",
    "options": [
      "Bisoprolol (chẹn chọn lọc cao trên thụ thể beta-1 tim)",
      "Amlodipin (thuốc chẹn kênh calci gây giãn mạch ngoại vi)",
      "Propranolol (thuốc chẹn beta không chọn lọc)",
      "Losartan (thuốc chẹn thụ thể AT1 gây giãn mạch)"
    ],
    "correct": 2,
    "explanation": "Propranolol là thuốc chẹn beta không chọn lọc, phong bế cả thụ thể beta-1 và beta-2. Thụ thể beta-2 ở cơ trơn mạch máu ngoại vi có tác dụng giãn mạch; khi bị Propranolol phong bế, tác dụng co mạch của thụ thể alpha-1 chiếm ưu thế hoàn toàn, gây co thắt mạch ngoại vi nặng và khởi phát hội chứng Raynaud hoặc đau cách hồi.",
    "reference": "Sách Dược lý 2 tr. 64"
  },
  {
    "id": 356,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng giãn mạch của Nitrat hữu cơ làm giảm tiền gánh và hậu gánh mang lại lợi ích gì cho cơ tim?",
    "options": [
      "Tăng khối lượng cơ tim vùng vách liên thất",
      "Làm tăng công của tim lên gấp 3 lần",
      "Làm giảm áp lực trong buồng thất và giảm sức căng thành tim, làm giảm mức tiêu thụ oxy của cơ tim",
      "Làm tăng áp lực tâm trương trong buồng thất"
    ],
    "correct": 2,
    "explanation": "Tiêu thụ oxy cơ tim phụ thuộc chủ yếu vào sức căng thành thất (theo định luật Laplace: sức căng tỷ lệ với bán kính buồng tim và áp lực tâm thất). Nitrat làm giảm thể tích thất và giảm áp lực thất nên làm giảm mạnh sức căng thành và giảm tiêu thụ oxy cơ tim.",
    "reference": "Sách Dược lý 2 tr. 42"
  },
  {
    "id": 357,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Chống chỉ định dùng Nitroglycerin trong tình huống nhồi máu cơ tim nào sau đây do nguy cơ gây tụt huyết áp nghiêm trọng không hồi phục?",
    "options": [
      "Nhồi máu cơ tim có kèm tăng huyết áp",
      "Nhồi máu cơ tim thành trước",
      "Nhồi máu cơ tim thất phải kèm tụt huyết áp",
      "Đau thắt ngực ổn định mạn tính"
    ],
    "correct": 2,
    "explanation": "Trong nhồi máu cơ tim thất phải, cung lượng tim phụ thuộc sống còn vào tiền gánh (áp lực đổ đầy nhĩ phải và thất phải). Dùng nitrat làm giãn tĩnh mạch giảm tiền gánh sẽ làm tụt huyết áp sâu kịch phát và sốc tim.",
    "reference": "Sách Dược lý 2 tr. 44"
  },
  {
    "id": 358,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc chống loạn nhịp tim Quinidin có tác dụng phụ kiểu atropin (kháng cholinergic) gây biểu hiện nào sau đây?",
    "options": [
      "Co đồng tử tối đa",
      "Tăng tiết nước bọt liên tục",
      "Làm tăng dẫn truyền nhĩ thất và có thể làm tăng nhịp thất trong cuồng nhĩ",
      "Làm chậm nhịp tim dưới 40 chu kỳ/phút"
    ],
    "correct": 2,
    "explanation": "Quinidin có tác dụng kháng muscarinic (giống atropin), làm tăng dẫn truyền qua nút nhĩ thất. Ở bệnh nhân cuồng nhĩ, quinidin có thể biến blốc 2:1 thành dẫn truyền 1:1 làm nhịp thất tăng vọt nguy hiểm (cần dùng kèm digoxin hoặc chẹn beta trước).",
    "reference": "Sách Dược lý 2 tr. 29-30"
  },
  {
    "id": 359,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc chống loạn nhịp Lidocain được chuyển hóa chủ yếu ở gan bởi hệ enzym cytochrom P450 nào?",
    "options": [
      "CYP2D6",
      "Enzym monoamin oxidase",
      "CYP3A4 và CYP1A2",
      "Enzym esterase huyết tương"
    ],
    "correct": 2,
    "explanation": "Lidocain bị khử alkyl ở gan chủ yếu qua CYP3A4 và CYP1A2 tạo thành monoethylglycinexylidide (MEGX) và glycinexylidide (GX), sau đó bài tiết qua thận. Ở bệnh nhân suy gan hoặc suy tim giảm dòng máu qua gan, nồng độ lidocain tăng dễ gây độc thần kinh.",
    "reference": "Sách Dược lý 2 tr. 32"
  },
  {
    "id": 360,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Triamteren và Amilorid thường được phối hợp cùng với Thiazid trong điều trị tăng huyết áp nhằm mục đích chính là gì?",
    "options": [
      "Bảo tồn kali máu ngăn ngừa biến chứng hạ kali máu do Thiazid gây ra",
      "Kích thích tăng tiết hormon renin",
      "Làm mất tác dụng hạ áp của thiazid",
      "Tăng độc tính của thiazid trên vi khuẩn"
    ],
    "correct": 0,
    "explanation": "Triamteren và Amilorid là thuốc lợi tiểu giữ kali (ức chế kênh ENaC ở ống lượn xa và ống góp). Phối hợp với Thiazid giúp bù trừ tình trạng mất kali của Thiazid, giữ nồng độ kali máu trong giới hạn bình thường.",
    "reference": "Sách Dược lý 2 tr. 88-89"
  },
  {
    "id": 361,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc lợi tiểu nào sau đây có cấu trúc tương tự hormon aldosteron và cạnh tranh gắn kết tại thụ thể mineralocorticoid?",
    "options": [
      "Furosemid",
      "Spironolacton",
      "Hydrochlorothiazid",
      "Acetazolamid"
    ],
    "correct": 1,
    "explanation": "Spironolacton có khung steroid tương tự phân tử aldosteron, gắn cạnh tranh vào thụ thể nội bào của aldosteron tại tế bào chính của ống lượn xa và ống góp, làm giảm tái hấp thu natri và giảm thải kali.",
    "reference": "Sách Dược lý 2 tr. 86-87"
  },
  {
    "id": 362,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Esomeprazol là dạng đồng phân quang học nào của phân tử Omeprazol?",
    "options": [
      "Đồng phân tả tuyền S-omeprazol",
      "Dẫn xuất hydroxy hóa của omeprazol",
      "Hỗn hợp racemic 50:50",
      "Đồng phân hữu tuyền R-omeprazol"
    ],
    "correct": 0,
    "explanation": "Esomeprazol là đồng phân quang học dạng S (S-enantiomer) tinh khiết của Omeprazol. Do ít bị chuyển hóa bước đầu qua enzym gan CYP2C19 hơn đồng phân R, Esomeprazol đạt sinh khả dụng và nồng độ trong máu cao hơn, kiểm soát acid ổn định hơn.",
    "reference": "Sách Dược lý 2 tr. 105"
  },
  {
    "id": 363,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Phác đồ 4 thuốc có Bismuth điều trị tiệt trừ vi khuẩn Helicobacter pylori được khuyến cáo hiện nay bao gồm các thuốc nào?",
    "options": [
      "Thuốc PPI phối hợp Clarithromycin, Amoxicillin và Ciprofloxacin",
      "Thuốc PPI phối hợp Bismuth subcitrat, Metronidazol và Tetracyclin",
      "Thuốc kháng H2 phối hợp Nhôm hydroxyd và Aspirin",
      "Thuốc PPI phối hợp Rifampicin và Isoniazid"
    ],
    "correct": 1,
    "explanation": "Phác đồ 4 thuốc có Bismuth (Bismuth-based quadruple therapy) gồm: PPI (uống 2 lần/ngày) + Bismuth + Metronidazol + Tetracyclin trong 14 ngày, là phác đồ ưu tiên hàng đầu tại những vùng có tỷ lệ H. pylori kháng Clarithromycin cao.",
    "reference": "Sách Dược lý 2 tr. 109"
  },
  {
    "id": 364,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Albendazol chuyển hóa nhanh ở gan lần đầu tạo thành chất chuyển hóa nào có hoạt tính diệt ký sinh trùng trong máu và mô?",
    "options": [
      "Glucuronid albendazol",
      "Albendazol sulfon",
      "Hydroxy-albendazol",
      "Albendazol sulfoxid"
    ],
    "correct": 3,
    "explanation": "Albendazol hấp thu qua ruột được gan chuyển hóa bước đầu nhanh chóng thành Albendazol sulfoxid còn hoạt tính diệt giun sán mạnh. Chất chuyển hóa này phân bố tốt vào dịch não tủy, dịch nang sán và các mô sâu trong cơ thể.",
    "reference": "Sách Dược lý 2 tr. 215"
  },
  {
    "id": 365,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc nào sau đây là lựa chọn đặc hiệu đầu bảng để điều trị bệnh nhiễm trùng roi âm đạo (Trichomonas vaginalis)?",
    "options": [
      "Nystatin",
      "Metronidazol hoặc Tinidazol",
      "Albendazol",
      "Praziquantel"
    ],
    "correct": 1,
    "explanation": "Metronidazol (uống liều duy nhất 2g hoặc 500mg x 2 lần/ngày trong 7 ngày) là thuốc điều trị đặc hiệu hàng đầu bệnh trùng roi Trichomonas vaginalis cho cả bệnh nhân và bạn tình.",
    "reference": "Sách Dược lý 2 tr. 207-208"
  },
  {
    "id": 366,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng không mong muốn thường gặp nhất của các thuốc chủ vận beta-2 adrenergic đường khí dung (như Salbutamol) do thuốc ngấm vào máu là gì?",
    "options": [
      "Hạ huyết áp tư thế",
      "Táo bón và khô miệng",
      "Buồn ngủ và hạ thân nhiệt",
      "Run đầu ngón tay và nhịp tim nhanh đánh trống ngực"
    ],
    "correct": 3,
    "explanation": "Thuốc kích thích thụ thể beta-2 trên cơ vân gây run ngón tay (tremor - tác dụng phụ phổ biến nhất), đồng thời kích thích thụ thể beta-1 và beta-2 tại tim gây nhịp tim nhanh và hồi hộp đánh trống ngực.",
    "reference": "Sách Dược lý 2 tr. 16 & Dược lý hô hấp"
  },
  {
    "id": 367,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc giảm ho ngoại vi Benzonatat làm giảm phản xạ ho theo cơ chế nào?",
    "options": [
      "Gây tê cục bộ các thụ thể cảm giác ho ở đường dẫn khí",
      "Phong bế thụ thể histamin H1 ở vỏ não",
      "Ức chế trung tâm ho ở hành não",
      "Tiêu chất nhầy làm loãng đờm"
    ],
    "correct": 0,
    "explanation": "Benzonatat có cấu trúc tương tự thuốc tê Tetracain, có tác dụng gây tê các thụ thể nhận cảm căng giãn (stretch receptors) ở đường hô hấp dưới, làm giảm dẫn truyền xung động cảm giác kích thích ho về hành não.",
    "reference": "Sách Dược lý 2 tr. 358 & Dược lý hô hấp"
  },
  {
    "id": 368,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng của Histamin trên thụ thể H1 ở cơ trơn đường hô hấp và mạch máu ngoại vi là gì?",
    "options": [
      "Tăng tiết acid clohydric ở tế bào viền dạ dày",
      "Gây chậm nhịp tim và blốc dẫn truyền nhĩ thất",
      "Giãn cơ trơn khí phế quản và co thắt mao mạch",
      "Co thắt cơ trơn khí phế quản và làm giãn mao mạch, tăng tính thấm thành mạch gây phù nề"
    ],
    "correct": 3,
    "explanation": "Histamin gắn vào thụ thể H1 gắn protein Gq làm tăng IP3 và Ca2+ nội bào, gây co thắt cơ trơn phế quản (gây khó thở hen) và làm tế bào nội mô mao mạch co lại mở rộng khe gian bào gây thoát huyết tương, phù nề và mề đay dị ứng.",
    "reference": "Sách Dược lý 2 tr. 341-342"
  },
  {
    "id": 369,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc kháng histamin H1 Loratadin được chuyển hóa qua gan chủ yếu bởi enzym nào để tạo thành chất chuyển hóa có hoạt tính Desloratadin?",
    "options": [
      "Enzym esterase ruột non",
      "CYP2C9",
      "CYP3A4 và CYP2D6",
      "Enzym monoamin oxidase"
    ],
    "correct": 2,
    "explanation": "Loratadin được chuyển hóa bước đầu qua gan bởi hệ cytochrom P450 (chủ yếu là CYP3A4 và CYP2D6) tạo thành dẫn xuất desloratadin (chất chuyển hóa có hoạt tính kháng dị ứng mạnh kéo dài).",
    "reference": "Sách Dược lý 2 tr. 344, 349"
  },
  {
    "id": 370,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Enzym Lipoprotein Lipase (LPL) được kích hoạt bởi nhóm Fibrat có vai trò sinh lý gì trong chuyển hóa mỡ máu?",
    "options": [
      "Tổng hợp cholesterol ở tế bào gan",
      "Vận chuyển cholesterol từ HDL sang LDL",
      "Bài tiết acid mật ra túi mật",
      "Thủy phân triglycerid trong Chylomicron và VLDL thành acid béo tự do và glycerol để mô sử dụng"
    ],
    "correct": 3,
    "explanation": "Lipoprotein lipase (LPL) định vị trên bề mặt tế bào nội mô mao mạch cơ và mỡ, chịu trách nhiệm thủy phân lõi triglycerid của chylomicron và VLDL, giúp dọn sạch triglycerid khỏi tuần hoàn máu.",
    "reference": "Sách Dược lý 2 tr. 92"
  },
  {
    "id": 371,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Rosuvastatin có đặc điểm cấu trúc và dược động học nào khác biệt với Atorvastatin?",
    "options": [
      "Bị phá hủy hoàn toàn bởi acid dạ dày",
      "Tan nhiều trong lipid và chuyển hóa hoàn toàn qua CYP3A4",
      "Có tính thân nước hơn, chuyển hóa qua CYP2C9 ở mức độ rất thấp và thải trừ chủ yếu dạng không biến đổi qua phân",
      "Có thời gian bán thải cực ngắn chỉ 1 giờ"
    ],
    "correct": 2,
    "explanation": "Rosuvastatin là một statin thân nước (nhờ nhóm chức sulfonamid), chuyển hóa rất ít qua gan (chỉ khoảng 10% qua CYP2C9), 90% đào thải nguyên vẹn qua phân và nước tiểu, do đó ít bị tương tác thuốc bởi các chất ức chế CYP3A4 so với Atorvastatin và Simvastatin.",
    "reference": "Sách Dược lý 2 tr. 95"
  },
  {
    "id": 372,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Ký sinh trùng Plasmodium falciparum gây bệnh sốt rét ác tính nguy hiểm nhất vì đặc tính bệnh học nào?",
    "options": [
      "Chỉ xâm nhập vào tế bào bạch cầu đa nhân",
      "Tạo ra độc tố vi khuẩn làm tan rã màng hồng cầu",
      "Chỉ sinh sản trong tủy sống",
      "Khả năng xâm nhập vào hồng cầu ở mọi lứa tuổi và làm hồng cầu nhiễm dính vào nội mô vi mạch gây tắc mạch nội tạng"
    ],
    "correct": 3,
    "explanation": "Khác với P. vivax chỉ xâm nhập hồng cầu non, P. falciparum xâm nhập mọi lứa tuổi hồng cầu (làm mật độ KST tăng cực cao), đồng thời làm hồng cầu biến dạng và dính vào thụ thể CD36 nội mô mao mạch não, thận, phổi gây tắc nghẽn vi tuần hoàn dẫn đến sốt rét thể não và suy đa tạng.",
    "reference": "Sách Dược lý 2 tr. 193"
  },
  {
    "id": 373,
    "subject": "duocly2",
    "chapter": "KTGHP",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân nam 50 tuổi bị loét dạ dày tá tràng có xét nghiệm H. pylori (+), kèm tăng huyết áp đang dùng Amlodipin. Khi kê phác đồ 3 thuốc tiệt trừ H. pylori chứa Clarithromycin, bác sĩ cần lưu ý tương tác gì?",
    "options": [
      "Không có bất kỳ tương tác thuốc nào xảy ra",
      "Clarithromycin làm mất tác dụng hạ áp của Amlodipin",
      "Clarithromycin ức chế CYP3A4 làm tăng nồng độ Amlodipin trong máu dẫn tới tụt huyết áp và phù chân nặng hơn",
      "Amlodipin làm giảm hấp thu của Amoxicillin"
    ],
    "correct": 2,
    "explanation": "Clarithromycin là chất ức chế mạnh isoenzym CYP3A4 ở gan. Amlodipin chuyển hóa chủ yếu qua CYP3A4. Phối hợp hai thuốc làm giảm chuyển hóa Amlodipin, nồng độ Amlodipin tăng cao gây tụt huyết áp quá mức và bùng phát phù chân.",
    "reference": "Sách Dược lý 2 tr. 64, 109, 160"
  },
  {
    "id": 374,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hormon nào sau đây của tuyến tụy nội tiết có tác dụng làm tăng nồng độ glucose máu thông qua kích thích phân giải glycogen và tân tạo đường ở tế bào gan?",
    "options": [
      "Glucagon",
      "Insulin",
      "Somatostatin",
      "Polypeptid tụy"
    ],
    "correct": 0,
    "explanation": "Glucagon do các tế bào alpha của đảo tụy bài tiết, tác động lên thụ thể màng tế bào gan kích thích adenylcyclase tăng cAMP, hoạt hóa enzym phosphorylase thúc đẩy phân giải glycogen thành glucose và kích thích tân tạo đường, đưa glucose vào máu.",
    "reference": "Sách Dược lý 2 tr. 294"
  },
  {
    "id": 375,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc kháng estrogen Clomiphen citrat được chỉ định trong sản phụ khoa nhằm mục đích gì?",
    "options": [
      "Ức chế sự phát triển của thai nhi",
      "Kích thích rụng trứng trong điều trị vô sinh do không phóng noãn",
      "Làm giảm tiết sữa sau sinh",
      "Điều trị ung thư nội mạc tử cung di căn"
    ],
    "correct": 1,
    "explanation": "Clomiphen phong bế thụ thể estrogen ở vùng dưới đồi, ngăn chặn cơ chế điều hòa ngược âm tính của estrogen nội sinh, làm vùng dưới đồi tăng tiết GnRH và tuyến yên tăng tiết FSH, LH kích thích nang trứng phát triển và rụng trứng, dùng điều trị vô sinh do không rụng trứng.",
    "reference": "Sách Dược lý 2 tr. 320"
  },
  {
    "id": 376,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Insulin Regular sau khi tiêm dưới da thường bắt đầu xuất hiện tác dụng sau bao lâu và kéo dài trong bao lâu?",
    "options": [
      "Bắt đầu tác dụng sau 30 phút, đạt đỉnh sau 2-3 giờ và kéo dài khoảng 6-8 giờ",
      "Bắt đầu tác dụng sau 5 phút và kéo dài 24 giờ",
      "Bắt đầu tác dụng sau 4 giờ và kéo dài 3 ngày",
      "Tác dụng tức thời sau 10 giây và duy trì suốt 48 giờ"
    ],
    "correct": 0,
    "explanation": "Insulin Regular (nhanh) dạng dung dịch tiêm dưới da bắt đầu có tác dụng sau 30 phút, đạt nồng độ đỉnh trong máu sau 2 đến 3 giờ và duy trì thời gian tác dụng khoảng 6 đến 8 giờ, do đó phải tiêm trước bữa ăn 30 phút.",
    "reference": "Sách Dược lý 2 tr. 295"
  },
  {
    "id": 377,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cơ chế phân tử gây ra nhiễm toan acid lactic của thuốc Metformin là gì?",
    "options": [
      "Ức chế quá trình bài tiết acid lactic qua màng đáy cầu thận",
      "Ức chế phức hợp I chuỗi hô hấp tế bào ở ty thể làm giảm chuyển hóa pyruvat và lactat thành glucose qua chu trình Cori",
      "Phá hủy màng tế bào gan gây rò rỉ acid hữu cơ",
      "Kích thích tế bào cơ giải phóng acid lactic vào máu"
    ],
    "correct": 1,
    "explanation": "Metformin ức chế phức hợp I ở ty thể tế bào gan, làm tăng tỷ lệ NADH/NAD+, ức chế enzym pyruvat carboxylase ngăn cản quá trình tân tạo đường từ lactat, khiến acid lactic tích lũy trong máu gây toan chuyển hóa nặng khi gan hoặc thận bị suy.",
    "reference": "Sách Dược lý 2 tr. 299"
  },
  {
    "id": 378,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Ticagrelor khác biệt với Clopidogrel ở đặc điểm tương tác thụ thể P2Y12 nào?",
    "options": [
      "Là chất đối kháng gắn thuận nghịch tại thụ thể P2Y12 và có hoạt tính trực tiếp không cần chuyển hóa qua gan",
      "Gắn không thuận nghịch và cần men CYP2C19 chuyển hóa",
      "Chỉ dùng qua đường tiêm tĩnh mạch",
      "Có tác dụng kích thích đông máu"
    ],
    "correct": 0,
    "explanation": "Ticagrelor là dẫn xuất cyclopentyltriazolopyrimidin đối kháng gắn thuận nghịch tại vị trí dị lập thể trên thụ thể P2Y12, là thuốc có hoạt tính trực tiếp không phải tiền chất, khởi phát tác dụng nhanh và phục hồi chức năng tiểu cầu nhanh hơn Clopidogrel.",
    "reference": "Sách Dược lý 2 tr. 123"
  },
  {
    "id": 379,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Các yếu tố đông máu II, VII, IX và X được tổng hợp ở gan dưới dạng tiền chất và cần Vitamin K để hoàn thiện cấu trúc nhờ phản ứng hóa sinh nào?",
    "options": [
      "Methyl hóa các gốc lysin",
      "Carboxyl hóa các gốc acid glutamic thành gamma-carboxyglutamat",
      "Khử nhóm amin của acid amin leucine",
      "Phosphoryl hóa các gốc serin"
    ],
    "correct": 1,
    "explanation": "Enzym gamma-glutamyl carboxylase phụ thuộc vitamin K khử bổ sung nhóm carboxyl (-COOH) vào gốc acid glutamic của các yếu tố đông máu tạo thành các gốc gamma-carboxyglutamat (Gla). Các gốc Gla này có điện tích âm gắn được với ion Ca2+ giúp gắn yếu tố đông máu lên màng phospholipid tiểu cầu.",
    "reference": "Sách Dược lý 2 tr. 119"
  },
  {
    "id": 380,
    "subject": "duocly2",
    "chapter": "Vitamin",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Ở trẻ sơ sinh bú mẹ hoàn toàn, nguyên nhân thường dẫn đến xuất huyết não màng não sớm là do thiếu hụt vitamin nào?",
    "options": [
      "Vitamin K",
      "Vitamin A",
      "Vitamin C",
      "Vitamin B1"
    ],
    "correct": 0,
    "explanation": "Trẻ sơ sinh có lượng dự trữ vitamin K thấp, sữa mẹ nghèo vitamin K và hệ vi khuẩn chí đường ruột chưa phát triển, dẫn tới giảm prothrombin và các yếu tố đông máu, nguy cơ xuất huyết não - màng não tử vong cao. Bắt buộc phải tiêm bắp 1mg Vitamin K1 ngay sau sinh.",
    "reference": "Sách Dược lý 2 tr. 327"
  },
  {
    "id": 381,
    "subject": "duocly2",
    "chapter": "Vitamin",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tình trạng thiếu hụt Vitamin D ở trẻ em đang tuổi lớn dẫn đến bệnh lý xương đặc trưng nào?",
    "options": [
      "Bệnh giòn xương di truyền",
      "Bệnh còi xương với chuỗi hạt sườn, trán dô, chân vòng kiềng chữ O hoặc chữ X",
      "Viêm khớp dạng thấp thanh thiếu niên",
      "Bệnh nhuyễn xương ở người lớn"
    ],
    "correct": 1,
    "explanation": "Ở trẻ em, thiếu vitamin D làm giảm hấp thu calci và phosphat ở ruột, giảm khoáng hóa sụn tăng trưởng, dẫn đến bệnh còi xương (Rickets) biểu hiện chuỗi hạt sườn, cổ tay phình to (vòng cổ tay), chân cong vòng kiềng, thóp liền chậm.",
    "reference": "Sách Dược lý 2 tr. 326"
  },
  {
    "id": 382,
    "subject": "duocly2",
    "chapter": "Thuốc chữa thiếu máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Protein vận chuyển sắt chuyên biệt trong huyết tương đưa sắt từ niêm mạc ruột đến tủy xương để sinh hồng cầu là protein nào?",
    "options": [
      "Hemosiderin",
      "Transferrin",
      "Ferritin",
      "Albumin"
    ],
    "correct": 1,
    "explanation": "Transferrin (siderophilin) là một beta-globulin do gan tổng hợp, mỗi phân tử transferrin có khả năng gắn kết chặt chẽ với hai ion Fe3+ và vận chuyển sắt trong tuần hoàn máu đến các thụ thể transferrin trên bề mặt tế bào tiền thân hồng cầu ở tủy xương.",
    "reference": "Sách Dược lý 2 tr. 127"
  },
  {
    "id": 383,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Interferon-alpha (IFN-alpha) kháng virus theo cơ chế sinh học phân tử nào?",
    "options": [
      "Bơm chất độc trực tiếp vào hạt virus",
      "Ức chế sự gắn kết của virus vào hồng cầu",
      "Gắn vào thụ thể bề mặt tế bào, kích hoạt con đường JAK-STAT kích thích phiên mã các gen sản xuất enzym ức chế dịch mã mARN của virus",
      "Phá vỡ lớp vỏ protein capsid của virus ngoài tế bào"
    ],
    "correct": 2,
    "explanation": "Interferon gắn vào thụ thể đặc hiệu kích hoạt con đường tín hiệu JAK-STAT, kích thích phiên mã hàng trăm gen ISG tạo các enzym (như 2'-5' oligoadenylate synthetase kích hoạt RNase L giáng hóa ARN virus và protein kinase R ức chế yếu tố khởi đầu dịch mã eIF-2), dập tắt sự nhân lên của virus.",
    "reference": "Sách Dược lý 2 tr. 230"
  },
  {
    "id": 384,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Etoposid và Teniposid là thuốc chống ung thư nhóm dẫn xuất podophyllotoxin ức chế enzym nào của tế bào ung thư?",
    "options": [
      "Topoisomerase I gây đứt gãy sợi đơn ADN",
      "Telomerase",
      "Topoisomerase II gây đứt gãy sợi kép ADN",
      "ADN Polymerase"
    ],
    "correct": 2,
    "explanation": "Etoposid và Teniposid tạo phức hợp ba phân tử với enzym Topoisomerase II và phân tử ADN, ngăn cản enzym hàn gắn các mối nối đứt gãy sau khi tháo xoắn, dẫn đến đứt gãy chuỗi kép ADN không hồi phục và kích hoạt quá trình tự chết (apoptosis) của tế bào ung thư.",
    "reference": "Sách Dược lý 2 tr. 256"
  },
  {
    "id": 385,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong ngộ độc cấp các thuốc có bản chất base yếu (như Quinin, Amphetamin, Strychnin), biện pháp tăng đào thải chất độc qua nước tiểu là gì?",
    "options": [
      "Tiêm thuốc giữ nước vasopressin",
      "Kiềm hóa nước tiểu bằng Natri hydrocarbonat",
      "Hạn chế bù dịch tối đa",
      "Toan hóa nước tiểu bằng cách truyền Amoni clorid hoặc uống nhiều Vitamin C"
    ],
    "correct": 3,
    "explanation": "Khi toan hóa nước tiểu (hạ pH nước tiểu xuống dưới 5,5), các phân tử base yếu sẽ nhận ion H+ tạo dạng ion hóa phân cực (BH+), dạng này không thể khuếch tán qua lớp màng lipid của tế bào ống thận để tái hấp thu và bị giữ lại đào thải ra ngoài.",
    "reference": "Sách Dược lý 2 tr. 356"
  },
  {
    "id": 386,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Chất chuyển hóa chính của Nitroglycerin trong tế bào là Glyceryl dinitrat có đặc tính dược lý nào?",
    "options": [
      "Là chất độc gây suy tủy",
      "Gây co mạch vành dữ dội",
      "Có tác dụng giãn mạch kém hơn nitroglycerin khoảng 10 lần nhưng thời gian bán thải dài hơn",
      "Không còn bất kỳ hoạt tính giãn mạch nào"
    ],
    "correct": 2,
    "explanation": "Nitroglycerin vào gan và hồng cầu bị khử nitrat nhanh chóng tạo 1,2-glyceryl dinitrat và 1,3-glyceryl dinitrat. Các chất này vẫn còn tác dụng giãn mạch nhưng yếu hơn chất mẹ 10 lần, có t1/2 dài hơn khoảng 40 phút.",
    "reference": "Sách Dược lý 2 tr. 41"
  },
  {
    "id": 387,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Nicorandil là thuốc điều trị đau thắt ngực có cơ chế tác dụng kép kết hợp nào sau đây?",
    "options": [
      "Ức chế men chuyển và phong bế kênh natri",
      "Chẹn kênh calci và kích thích beta-1",
      "Kích thích thụ thể alpha-2 và ức chế men COX",
      "Mở kênh Kali phụ thuộc ATP và cung cấp nhóm nitrat giải phóng NO gây giãn cả động mạch và tĩnh mạch"
    ],
    "correct": 3,
    "explanation": "Nicorandil là dẫn xuất nicotinamid có cấu trúc chứa gốc nitrat. Thuốc vừa giải phóng NO gây giãn hệ tĩnh mạch (giảm tiền gánh), vừa mở kênh K-ATP ở tế bào cơ trơn tiểu động mạch gây giãn động mạch vành và động mạch hệ thống (giảm hậu gánh).",
    "reference": "Sách Dược lý 2 tr. 52"
  },
  {
    "id": 388,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc chống đau thắt ngực Ranolazin tác động theo cơ chế phân tử nào?",
    "options": [
      "Giãn trực tiếp tĩnh mạch chủ dưới",
      "Ức chế chọn lọc dòng Natri muộn làm giảm quá tải calci nội bào trong tế bào cơ tim thiếu máu",
      "Tăng sinh hồng cầu non",
      "Phong bế thụ thể histamin H2"
    ],
    "correct": 1,
    "explanation": "Khi cơ tim thiếu máu, dòng Na+ muộn đi vào tế bào tăng lên làm tăng Ca2+ nội bào qua bơm trao đổi Na+/Ca2+, gây tăng sức căng thành tâm thất. Ranolazin ức chế chọn lọc dòng Na+ muộn, làm giảm nồng độ Ca2+ quá tải, cải thiện tưới máu cơ tim.",
    "reference": "Sách Dược lý 2 tr. 53"
  },
  {
    "id": 389,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Disopyramid thuộc nhóm IA trong phân loại Vaughan Williams có đặc điểm tác dụng phụ nào rất nổi bật?",
    "options": [
      "Gây hạ đường huyết sâu",
      "Gây rậm lông toàn thân",
      "Gây viêm gan hoại tử ồ ạt",
      "Tác dụng kháng cholinergic rất mạnh gây khô miệng, bí tiểu và ức chế co bóp cơ tim mạnh"
    ],
    "correct": 3,
    "explanation": "Disopyramid có tác dụng kháng cholinergic mạnh nhất trong nhóm IA, gây bí tiểu, khô miệng, nhìn mờ và có tác dụng ức chế co bóp cơ tim (inotropic âm tính) rất rõ rệt, do đó chống chỉ định ở bệnh nhân suy tim và phì đại tiền liệt tuyến.",
    "reference": "Sách Dược lý 2 tr. 31"
  },
  {
    "id": 390,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Ibutilid và Dofetilid thuộc nhóm III được chỉ định chủ yếu qua đường tiêm tĩnh mạch trong tình huống nào?",
    "options": [
      "Chuyển nhịp nhanh chóng trong cuồng nhĩ hoặc rung nhĩ mới xuất hiện về nhịp xoang",
      "Điều trị ngoại tâm thu thất thưa",
      "Hạ huyết áp kịch phát trong mổ",
      "Điều trị nhịp tim chậm xoang"
    ],
    "correct": 0,
    "explanation": "Ibutilid và Dofetilid là thuốc nhóm III chẹn chọn lọc kênh K+ (dòng IKr), làm kéo dài thời gian điện thế hoạt động nhĩ và thất, dùng đường tiêm tĩnh mạch để chuyển nhanh cơn rung nhĩ hoặc cuồng nhĩ cấp về nhịp xoang với tỷ lệ thành công cao.",
    "reference": "Sách Dược lý 2 tr. 37"
  },
  {
    "id": 391,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Adenosin gắn vào thụ thể nào tại nút nhĩ thất để gây tăng dòng K+ và ức chế dòng Ca2+, làm chậm dẫn truyền nhĩ thất?",
    "options": [
      "Thụ thể Adenosin A2A",
      "Thụ thể Muscarinic M1",
      "Thụ thể Beta-2 adrenergic",
      "Thụ thể Adenosin A1"
    ],
    "correct": 3,
    "explanation": "Adenosin gắn vào thụ thể A1 bắt cặp protein Gi trên tế bào nút nhĩ thất, ức chế adenylcyclase làm giảm cAMP, mở kênh K+ phụ thuộc acetylcholin/adenosin và ức chế dòng Ca2+ L-type, gây ưu cực hóa màng và ức chế mạnh dẫn truyền qua nút nhĩ thất.",
    "reference": "Sách Dược lý 2 tr. 38"
  },
  {
    "id": 392,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc lợi tiểu Thiazid (Hydrochlorothiazid) có tác dụng hạ huyết áp kéo dài nhờ cơ chế huyết động học nào sau vài tuần điều trị?",
    "options": [
      "Làm giảm thể tích dịch ngoại bào ban đầu và làm giãn cơ trơn thành tiểu động mạch do làm giảm natri nội bào",
      "Làm co mạch ngoại vi để dồn máu về tim",
      "Tiêu hủy các sợi collagen quanh động mạch",
      "Ức chế trung tâm vận mạch ở hành não"
    ],
    "correct": 0,
    "explanation": "Trong vài ngày đầu, Thiazid hạ áp do thải natri và nước làm giảm thể tích máu. Sau 4-6 tuần, thể tích máu hồi phục một phần nhưng huyết áp vẫn duy trì thấp do thành mạch giảm natri, làm giảm tính nhạy cảm của cơ trơn mạch máu với các chất co mạch (noradrenalin, angiotensin II).",
    "reference": "Sách Dược lý 2 tr. 84-85"
  },
  {
    "id": 393,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Vị trí tác dụng của thuốc đối kháng thụ thể Vasopressin V2 (như Tolvaptan, Conivaptan) trong nephron thận là gì?",
    "options": [
      "Ống lượn gần",
      "Cầu thận",
      "Quai Henle",
      "Tế bào chính của ống góp, ngăn cản tái hấp thu nước tự do"
    ],
    "correct": 3,
    "explanation": "Tolvaptan là thuốc đối kháng chọn lọc thụ thể V2 của ADH tại ống góp, ngăn chặn sự gắn bọt kênh nước Aquaporin-2 lên màng đỉnh, làm tăng đào thải nước tự do mà không làm mất điện giải (thuốc lợi niệu nước - aquaretic), dùng trong hạ natri máu do SIADH hoặc suy tim.",
    "reference": "Sách Dược lý 2 tr. 89-90"
  },
  {
    "id": 394,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Lansoprazol và Pantoprazol thuộc nhóm PPI có sinh khả dụng đường uống đạt khoảng bao nhiêu %?",
    "options": [
      "Khoảng 75% đến 85%",
      "Khoảng 20% đến 30%",
      "Đạt 100% tuyệt đối",
      "Dưới 10%"
    ],
    "correct": 0,
    "explanation": "Lansoprazol có sinh khả dụng đường uống rất cao (khoảng 80-85%), Pantoprazol đạt khoảng 77%. Các thuốc PPI đều được bào chế dưới dạng viên bao tan trong ruột để bảo vệ thuốc không bị acid dạ dày phá hủy trước khi hấp thu ở ruột non.",
    "reference": "Sách Dược lý 2 tr. 105"
  },
  {
    "id": 395,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng bảo vệ niêm mạc dạ dày của Prostaglandin nội sinh (PGE2 và PGI2) bao gồm các yếu tố nào?",
    "options": [
      "Tiêu diệt trực tiếp toàn bộ vi khuẩn đường ruột",
      "Kích thích bài tiết chất nhầy mucin, bài tiết ion bicarbonat HCO3- và tăng cường lưu lượng dòng máu niêm mạc dạ dày",
      "Tăng bài tiết acid HCl và tăng bài tiết pepsin",
      "Làm co thắt cơ vòng môn vị ngăn tống thức ăn"
    ],
    "correct": 1,
    "explanation": "Prostaglandin E2 và I2 do niêm mạc dạ dày tiết ra có vai trò bảo vệ sống còn: gắn vào thụ thể EP3 tế bào viền ức chế tiết acid, kích thích tế bào biểu mô tiết chất nhầy và HCO3- tạo hàng rào kiềm bảo vệ, đồng thời giãn mạch làm tăng dòng máu nuôi dưỡng niêm mạc.",
    "reference": "Sách Dược lý 2 tr. 107-108"
  },
  {
    "id": 396,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Terbutalin là thuốc giãn phế quản thuộc nhóm nào sau đây?",
    "options": [
      "Chủ vận chọn lọc trên thụ thể beta-2 adrenergic tác dụng ngắn SABA",
      "Ức chế kênh calci Non-DHP",
      "Kháng thụ thể leukotrien CysLT1",
      "Chủ vận thụ thể muscarinic M3"
    ],
    "correct": 0,
    "explanation": "Terbutalin (Bricanyl) là thuốc chủ vận chọn lọc thụ thể beta-2 adrenergic tác dụng ngắn (SABA), dùng dạng khí dung hoặc tiêm dưới da để cắt cơn co thắt phế quản cấp trong hen và COPD.",
    "reference": "Sách Dược lý 2 tr. 16, 267"
  },
  {
    "id": 397,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc Corticoid dạng hít Beclomethason dipropionat có cơ chế chống viêm tại chỗ đường thở là gì?",
    "options": [
      "Phá vỡ trực tiếp các hạt phấn hoa trong phế nang",
      "Làm tê liệt phản xạ thở ở trung tâm hành não",
      "Ức chế sự thâm nhiễm của bạch cầu ái toan, đại thực bào và làm giảm phù nề, giảm tính phản ứng quá mức của phế quản",
      "Làm đông vón dịch tiết khí quản"
    ],
    "correct": 2,
    "explanation": "Beclomethason là corticosteroid hít (ICS) tác dụng chống viêm tại chỗ mạnh, làm giảm số lượng và hoạt tính của bạch cầu ái toan, tế bào mast và lympho T ở niêm mạc đường thở, làm giảm tiết dịch nhầy và giảm tính phản ứng quá mức của phế quản với dị nguyên.",
    "reference": "Sách Dược lý 2 tr. 291 & Dược lý hô hấp"
  },
  {
    "id": 398,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Alimemazin (Trimeprazin) là thuốc kháng histamin H1 thế hệ 1 thường được chỉ định phổ biến trong trường hợp nào?",
    "options": [
      "Lợi tiểu chống phù",
      "Hạ huyết áp kịch phát",
      "Giảm ho do dị ứng, ho khan về đêm và chống ngứa trong các bệnh da dị ứng",
      "Cắt cơn sốt rét ác tính"
    ],
    "correct": 2,
    "explanation": "Alimemazin là dẫn chất phenothiazin có tác dụng kháng H1 mạnh, an thần gây ngủ và chống ho khan do ức chế thụ thể phế vị ngoại vi, rất hay dùng để giảm ho khan kích ứng về đêm ở trẻ em và người lớn và giảm ngứa do mề đay.",
    "reference": "Sách Dược lý 2 tr. 347"
  },
  {
    "id": 399,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng kháng histamin H1 của Hydroxyzin còn đi kèm với tác dụng dược lý nổi bật nào trên hệ thần kinh?",
    "options": [
      "Gây mất trí nhớ vĩnh viễn",
      "Gây kích thích tâm thần vận động hưng cảm",
      "Tác dụng an thần giải lo âu và giãn cơ nhẹ",
      "Kích thích tủy sống tăng phản xạ gân xương"
    ],
    "correct": 2,
    "explanation": "Hydroxyzin (biệt dược Atarax) là thuốc kháng H1 thế hệ 1 có tác dụng ức chế các vùng dưới vỏ não, có hoạt tính giải lo âu (anxiolytic), an thần và giãn cơ nhẹ, thường dùng điều trị chứng lo âu, căng thẳng kèm ngứa dị ứng.",
    "reference": "Sách Dược lý 2 tr. 348"
  },
  {
    "id": 400,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong cơ thể, Trichomonas vaginalis là loại ký sinh trùng đơn bào lây truyền chủ yếu qua con đường nào?",
    "options": [
      "Xuyên qua da bàn chân khi đi chân đất",
      "Qua muỗi Anopheles đốt",
      "Đường quan hệ tình dục",
      "Đường ăn uống thực phẩm sống"
    ],
    "correct": 2,
    "explanation": "Trichomonas vaginalis (trùng roi âm đạo) ký sinh ở đường sinh dục - tiết niệu của nam và nữ, lây truyền chủ yếu qua đường quan hệ tình dục không an toàn, gây viêm âm đạo có khí hư bọt màu vàng xanh hôi ở nữ và viêm niệu đạo ở nam.",
    "reference": "Sách Dược lý 2 tr. 207"
  },
  {
    "id": 401,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc tẩy giun Mebendazol rất ít hấp thu qua đường tiêu hóa (chỉ khoảng 5 - 10%), đặc tính này mang lại lợi ích gì khi điều trị giun trong lòng ruột?",
    "options": [
      "Giúp bài tiết thuốc qua mồ hôi",
      "Giúp thuốc ngấm nhanh vào tủy xương",
      "Tập trung nồng độ thuốc rất cao trong lòng ruột để tiêu diệt giun tại chỗ và rất ít gây độc tính toàn thân",
      "Làm tăng sinh khả dụng qua gan"
    ],
    "correct": 2,
    "explanation": "Mebendazol kém tan và hấp thu rất ít qua ruột (< 10%). Điều này cực kỳ có lợi khi điều trị các loại giun ký sinh trong lòng ruột (giun đũa, giun kim, giun móc, giun tóc), thuốc lưu lại nồng độ cao tiếp xúc với giun và hầu như không gây độc tính toàn thân.",
    "reference": "Sách Dược lý 2 tr. 215"
  },
  {
    "id": 402,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Gemfibrozil và Fenofibrat có sự khác biệt quan trọng nào khi phối hợp cùng với thuốc nhóm Statin?",
    "options": [
      "Cả hai thuốc đều tuyệt đối an toàn như nhau khi dùng cùng statin",
      "Gemfibrozil ức chế mạnh sự liên hợp glucuronic của statin nên tăng nguy cơ tiêu cơ vân rất cao, trong khi Fenofibrat ít tương tác này hơn và an toàn hơn khi cần phối hợp",
      "Gemfibrozil làm mất hoàn toàn tác dụng của statin",
      "Fenofibrat gây độc thận gấp 100 lần Gemfibrozil"
    ],
    "correct": 1,
    "explanation": "Gemfibrozil ức chế enzym glucuronosyltransferase (UGT1A1 và UGT1A3) giáng hóa statin và ức chế protein vận chuyển OATP1B1, làm nồng độ statin trong máu tăng vọt gây tiêu cơ vân. Fenofibrat chuyển hóa qua con đường khác nên an toàn hơn nhiều khi bắt buộc phải phối hợp statin.",
    "reference": "Sách Dược lý 2 tr. 96"
  },
  {
    "id": 403,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Mục tiêu điều trị hạ LDL-Cholesterol huyết tương ở bệnh nhân có nguy cơ tim mạch rất cao (sau nhồi máu cơ tim, sau can thiệp mạch vành) theo khuyến cáo hiện nay là gì?",
    "options": [
      "Hạ LDL-C xuống dưới 1,4 mmol/L và giảm ít nhất 50% so với mức nền",
      "Hạ LDL-C xuống dưới 4,0 mmol/L",
      "Chỉ cần hạ Triglycerid mà không cần quan tâm LDL-C",
      "Nâng LDL-C lên trên 3,0 mmol/L"
    ],
    "correct": 0,
    "explanation": "Theo các hướng dẫn tim mạch quốc tế và Bộ Y tế, ở nhóm bệnh nhân có biến cố tim mạch xơ vữa (nguy cơ rất cao), mục tiêu LDL-C cần đạt là < 1,4 mmol/L (55 mg/dL) và giảm tối thiểu 50% so với ban đầu, thường đòi hỏi điều trị bằng Statin hoạt lực mạnh phối hợp Ezetimibe.",
    "reference": "Sách Dược lý 2 tr. 95, 101"
  },
  {
    "id": 404,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc chống sốt rét Quinin có nguồn gốc chiết xuất từ dược liệu tự nhiên nào?",
    "options": [
      "Lá cây Thanh hao hoa vàng",
      "Nhựa cây Thuốc phiện",
      "Hạt cây Mã tiền",
      "Vỏ thân cây Canh-ki-na"
    ],
    "correct": 3,
    "explanation": "Quinin là alkaloid chính được chiết xuất từ vỏ thân hoặc vỏ rễ của các loài cây Canh-ki-na (Cinchona), có nguồn gốc từ Nam Mỹ, được đưa vào châu Âu từ thế kỷ 17 để điều trị sốt rét ngã nước.",
    "reference": "Sách Dược lý 2 tr. 196"
  },
  {
    "id": 405,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Piperaquin phosphat thường được phối hợp cùng với Dihydroartemisinin (biệt dược CV Artecan / Eurartesim) trong phác đồ ACT của Bộ Y tế vì ưu điểm nào?",
    "options": [
      "Có tác dụng diệt thể ngủ trong gan của P. vivax",
      "Có thời gian bán thải dài giúp quét sạch ký sinh trùng sót lại và chống tái nhiễm sốt rét",
      "Giúp làm tăng hấp thu của thuốc qua đường thở",
      "Có tác dụng hạ huyết áp tức thời"
    ],
    "correct": 1,
    "explanation": "Dihydroartemisinin cắt cơn sốt và diệt ký sinh trùng cực nhanh nhưng t1/2 chỉ 1-2 giờ. Phối hợp với Piperaquin (thuốc dẫn xuất bisquinolin có t1/2 rất dài từ 20-30 ngày) giúp tiêu diệt triệt để các ký sinh trùng còn sót lại và duy trì nồng độ bảo vệ chống tái nhiễm trong nhiều tuần.",
    "reference": "Sách Dược lý 2 tr. 195, 203"
  },
  {
    "id": 406,
    "subject": "duocly2",
    "chapter": "KTGHP",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân nam 60 tuổi bị gout mạn tính và tăng huyết áp. Thuốc hạ huyết áp nhóm chẹn thụ thể ARB nào sau đây có thêm tác dụng ức chế protein vận chuyển URAT1 ở ống thận, giúp tăng đào thải acid uric qua nước tiểu và hạ acid uric máu?",
    "options": [
      "Olmesartan",
      "Valsartan",
      "Candesartan",
      "Losartan"
    ],
    "correct": 3,
    "explanation": "Losartan là thuốc duy nhất trong nhóm ARB có tác dụng ức chế chất vận chuyển URAT1 ở ống lượn gần, làm tăng đào thải acid uric qua nước tiểu và làm hạ nồng độ acid uric máu, là lựa chọn hạ áp lý tưởng cho bệnh nhân THA có kèm tăng acid uric hoặc bệnh gút.",
    "reference": "Sách Dược lý 2 tr. 70"
  },
  {
    "id": 407,
    "subject": "duocly2",
    "chapter": "KTGHP",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân nam 52 tuổi có tiền sử loét dạ dày tá tràng và rung nhĩ mạn tính. Khi dùng thuốc chống đông Warfarin phối hợp với thuốc kháng acid Antacid dạng gel chứa nhôm và magie hydroxyd, tương tác thuốc nào xảy ra nếu uống cùng một lúc?",
    "options": [
      "Làm mất hoàn toàn tác dụng trung hòa acid",
      "Thuốc kháng acid chelat hóa và hấp phụ Warfarin làm giảm hấp thu của Warfarin dẫn tới nguy cơ huyết khối",
      "Làm tăng vọt nồng độ Warfarin gây xuất huyết",
      "Làm kết tủa sỏi bàng quang"
    ],
    "correct": 1,
    "explanation": "Các thuốc kháng acid chứa ion đa hóa trị (Al3+, Mg2+) tạo phức chelat và hấp phụ các thuốc có tính acid yếu như Warfarin, Digoxin, Ciprofloxacin trong lòng ruột, làm giảm hấp thu và giảm nồng độ thuốc trong máu. Cần uống cách xa nhau ít nhất 2 giờ.",
    "reference": "Sách Dược lý 2 tr. 103, 120"
  },
  {
    "id": 408,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Fludrocortison là hormon tổng hợp thuộc nhóm nào và có tác dụng gì nổi bật?",
    "options": [
      "Nhóm hormon kháng insulin",
      "Nhóm hormon tuyến cận giáp",
      "Nhóm hormon tăng trưởng kích thích phát triển chiều cao",
      "Nhóm Mineralocorticoid tác dụng giữ muối nước rất mạnh , dùng điều trị suy vỏ thượng thận nguyên phát bệnh Addison"
    ],
    "correct": 3,
    "explanation": "Fludrocortison là một steroid tổng hợp có tác dụng mineralocorticoid cực mạnh (tăng tái hấp thu Na+ và thải K+ ở ống thận), dùng phối hợp cùng Hydrocortison trong liệu pháp thay thế điều trị bệnh suy vỏ thượng thận tiên phát (Addison) để duy trì huyết áp và cân bằng điện giải.",
    "reference": "Sách Dược lý 2 tr. 286"
  },
  {
    "id": 409,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng của Hormon tăng trưởng (GH - Somatotropin) trên chuyển hóa glucid và lipid trong cơ thể là gì?",
    "options": [
      "Làm teo nhỏ các đầu xương dài",
      "Tăng phân giải lipid ở mô mỡ và làm giảm nhạy cảm insulin",
      "Làm hạ đường huyết sâu tương tự insulin",
      "Ức chế tổng hợp protein cơ thể"
    ],
    "correct": 1,
    "explanation": "GH kích thích gan sản xuất IGF-1 kích thích tăng trưởng sụn xương và đồng hóa protein, đồng thời kích thích phân giải triglycerid ở mô mỡ thành acid béo và đối kháng tác dụng của insulin tại cơ và gan (tác dụng sinh đái tháo đường - diabetogenic effect).",
    "reference": "Sách Dược lý 2 tr. 284"
  },
  {
    "id": 410,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc đồng vận thụ thể GLP-1 (như Liraglutid, Semaglutid) có tác dụng hạ đường huyết và giảm cân mạnh mẽ nhờ các cơ chế nào?",
    "options": [
      "Kích thích tăng bài tiết enzym pepsin dạ dày",
      "Ức chế tủy xương sản sinh hồng cầu",
      "Phá hủy màng tế bào mỡ dưới da",
      "Kích thích tiết insulin phụ thuộc glucose, ức chế tiết glucagon, làm chậm tốc độ làm rỗng dạ dày và tăng cảm giác no ở trung ương"
    ],
    "correct": 3,
    "explanation": "Các chất đồng vận thụ thể GLP-1 bắt chước hormon incretin tự nhiên: kích thích tụy tiết insulin khi có đường, ức chế glucagon, làm thức ăn lưu lại dạ dày lâu hơn (chậm rỗng dạ dày) và tác động lên trung tâm no ở vùng dưới đồi làm giảm cảm giác thèm ăn, giúp giảm cân rõ rệt.",
    "reference": "Sách Dược lý 2 tr. 301"
  },
  {
    "id": 411,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Dấu hiệu hạ đường huyết cảnh báo sớm qua hệ thần kinh thực vật giao cảm (như run tay, hồi hộp, vã mồ hôi) có thể bị che lấp hoàn toàn nếu bệnh nhân đang dùng đồng thời nhóm thuốc nào?",
    "options": [
      "Thuốc ức chế men chuyển Enalapril",
      "Thuốc lợi tiểu Thiazid",
      "Thuốc chẹn thụ thể beta giao cảm",
      "Thuốc kháng H1 Cetirizin"
    ],
    "correct": 2,
    "explanation": "Khi đường huyết hạ, tủy thượng thận tiết adrenalin gây phản ứng cảnh báo qua thụ thể beta: run rẩy, tim đập nhanh, hồi hộp, lo âu. Thuốc chẹn beta phong bế các đáp ứng này, che lấp các dấu hiệu cảnh báo khiến bệnh nhân đột ngột rơi vào hôn mê hạ đường huyết nguy hiểm (chỉ còn dấu hiệu vã mồ hôi qua cholinergic).",
    "reference": "Sách Dược lý 2 tr. 60, 296"
  },
  {
    "id": 412,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc tiêu sợi huyết Alteplase (rt-PA) có ưu điểm vượt trội nào so với Streptokinase?",
    "options": [
      "Có nguồn gốc từ vi khuẩn liên cầu tan máu beta",
      "Chỉ dùng qua đường uống",
      "Gây tăng huyết áp tức thì",
      "Là protein tái tổ hợp tự nhiên của người, có tính chọn lọc cao trên fibrin cục máu đông và không có tính kháng nguyên gây sốc phản vệ"
    ],
    "correct": 3,
    "explanation": "Streptokinase chiết xuất từ liên cầu khuẩn nên có tính kháng nguyên mạnh, dễ gây sốc phản vệ và cơ thể sinh kháng thể kháng thuốc sau 1 lần dùng. Alteplase là chất hoạt hóa plasminogen mô tái tổ hợp (rt-PA) giống hệt protein người, không sinh kháng thể và chọn lọc cao trên plasminogen gắn với fibrin.",
    "reference": "Sách Dược lý 2 tr. 125-126"
  },
  {
    "id": 413,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Dabigatran etexilat là thuốc chống đông đường uống ức chế trực tiếp enzym đông máu nào?",
    "options": [
      "Yếu tố XIIa",
      "Yếu tố Xa",
      "Thrombin tự do và thrombin gắn trong cục máu đông",
      "Yếu tố VIIa"
    ],
    "correct": 2,
    "explanation": "Dabigatran là thuốc ức chế trực tiếp thrombin (Direct Thrombin Inhibitor - DTI) đường uống, gắn chọn lọc và cạnh tranh thuận nghịch vào vị trí hoạt động của Thrombin (IIa), ngăn cản chuyển fibrinogen thành fibrin.",
    "reference": "Sách Dược lý 2 tr. 121"
  },
  {
    "id": 414,
    "subject": "duocly2",
    "chapter": "Vitamin",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Vitamin B9 (Acid folic) sau khi vào cơ thể được chuyển hóa thành dạng coenzym có hoạt tính sinh học nào tham gia vận chuyển các nhóm một carbon?",
    "options": [
      "Thiamin pyrophosphat TPP",
      "Pyridoxal phosphat PLP",
      "Acid tetrahydrofolic",
      "Flavin mononucleotid FMN"
    ],
    "correct": 2,
    "explanation": "Acid folic được khử bởi enzym dihydrofolat reductase (DHFR) tạo thành Acid Tetrahydrofolic (THF). THF là coenzym tiếp nhận và vận chuyển các mảnh 1 carbon (nhóm methyl, formyl) cần thiết cho quá trình sinh tổng hợp các base purin và thymin của phân tử ADN.",
    "reference": "Sách Dược lý 2 tr. 129, 334"
  },
  {
    "id": 415,
    "subject": "duocly2",
    "chapter": "Vitamin",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Triệu chứng lưỡi đỏ bóng, loét nứt ở các góc mép môi (viêm mép miệng) và viêm kết mạc mắt xuất hiện khi cơ thể thiếu hụt vitamin nào?",
    "options": [
      "Vitamin K",
      "Vitamin E",
      "Vitamin B2",
      "Vitamin D"
    ],
    "correct": 2,
    "explanation": "Thiếu Vitamin B2 (Riboflavin) ảnh hưởng sớm nhất đến các biểu mô có tốc độ phân chia nhanh, gây hội chứng viêm niêm mạc da: loét nứt góc miệng (angular stomatitis), viêm lưỡi đỏ tươi bóng, viêm da dầu quanh cánh mũi và viêm bờ mi, sợ ánh sáng.",
    "reference": "Sách Dược lý 2 tr. 330-331"
  },
  {
    "id": 416,
    "subject": "duocly2",
    "chapter": "Thuốc chữa thiếu máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Khi điều trị thiếu máu hồng cầu to, nếu chẩn đoán nhầm giữa thiếu Vitamin B12 và thiếu Acid folic mà chỉ dùng đơn độc Acid folic liều cao thì hậu quả nguy hiểm là gì?",
    "options": [
      "Gây suy tủy xương cấp tính",
      "Cải thiện được các chỉ số huyết học nhưng làm tổn thương thoái hóa thần kinh tủy sống tiếp tục tiến triển nặng nề không hồi phục",
      "Gây tan máu ồ ạt trong lòng mạch",
      "Làm huyết áp tăng vọt gây xuất huyết não"
    ],
    "correct": 1,
    "explanation": "Acid folic liều cao có thể giải quyết được tình trạng thiếu máu hồng cầu to do thiếu B12 (nhờ cung cấp folate cho tổng hợp ADN), nhưng không tham gia tổng hợp myelin. Do đó triệu chứng thiếu máu giả tạo khỏi trong khi tổn thương thoái hóa tủy sống (tê bì, liệt vận động) tiến triển âm thầm thành tàn phế vĩnh viễn.",
    "reference": "Sách Dược lý 2 tr. 128-129"
  },
  {
    "id": 417,
    "subject": "duocly2",
    "chapter": "Thuốc chữa thiếu máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Các chế phẩm Sắt tiêm tĩnh mạch hiện đại (như Sắt sucrose, Sắt carboxymaltose) có ưu điểm nào vượt trội so với Sắt dextran thế hệ cũ?",
    "options": [
      "Tỷ lệ gây phản ứng phản vệ và dị ứng thấp hơn rất nhiều, không cần phải làm test thử liều trước khi tiêm",
      "Không bao giờ tích lũy trong gan",
      "Thời gian bán thải chỉ 5 giây",
      "Có thể uống chung với trà đặc"
    ],
    "correct": 0,
    "explanation": "Sắt dextran có chuỗi polymer dextran có tính kháng nguyên cao, tỷ lệ sốc phản vệ gây tử vong đáng kể nên bắt buộc phải tiêm test liều nhỏ. Các phức hợp sắt sucrose và sắt carboxymaltose không chứa dextran nên hầu như không gây phản vệ, an toàn hơn nhiều.",
    "reference": "Sách Dược lý 2 tr. 127"
  },
  {
    "id": 418,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc kháng virus nào sau đây được bào chế dưới dạng khí dung hít trực tiếp điều trị nhiễm virus hợp bào hô hấp (RSV) nặng ở trẻ nhỏ?",
    "options": [
      "Acyclovir",
      "Ribavirin",
      "Zidovudin",
      "Lamivudin"
    ],
    "correct": 1,
    "explanation": "Ribavirin dạng phun mù khí dung (aerosol) được chỉ định đặc biệt trong điều trị viêm tiểu phế quản và viêm phổi nặng do virus hợp bào hô hấp (RSV) ở trẻ sơ sinh và trẻ nhỏ có nguy cơ cao.",
    "reference": "Sách Dược lý 2 tr. 234-235"
  },
  {
    "id": 419,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Amantadin và Rimantadin ức chế sự nhân lên của virus cúm A theo cơ chế phân tử nào?",
    "options": [
      "Phong bế kênh ion protein M2 của virus, ngăn chặn dòng H+ đi vào hạt virus và ức chế quá trình cởi vỏ",
      "Phá vỡ liên kết lipid màng ngoài",
      "Ức chế tổng hợp vỏ capsome",
      "Ức chế enzym neuraminidase trên màng tế bào"
    ],
    "correct": 0,
    "explanation": "Amantadin và Rimantadin gắn vào lòng kênh ion M2 của virus cúm A, ngăn cản ion H+ từ endosom tràn vào bên trong hạt virus, làm vỏ virus không thể acid hóa để tháo rời (cởi vỏ), khiến ARN virus không thể giải phóng vào tế bào chất.",
    "reference": "Sách Dược lý 2 tr. 236"
  },
  {
    "id": 420,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Kháng sinh chống ung thư Actinomycin D (Dactinomycin) gắn xen vào chuỗi xoắn kép ADN để ức chế enzym nào?",
    "options": [
      "ARN polymerase phụ thuộc ADN ngăn cản quá trình phiên mã",
      "Enzym tổng hợp chuỗi acid amin",
      "Topoisomerase IV",
      "Protein kinase C"
    ],
    "correct": 0,
    "explanation": "Dactinomycin gắn chèn vào các cặp base guanin - cytosin của chuỗi xoắn kép ADN, làm biến dạng cấu trúc không gian và ngăn cản sự di chuyển của enzym ARN polymerase, làm đình trệ quá trình tổng hợp ARN của tế bào ung thư.",
    "reference": "Sách Dược lý 2 tr. 257"
  },
  {
    "id": 421,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Irinotecan và Topotecan là thuốc chống ung thư nhóm dẫn xuất camptothecin có cơ chế phân tử là ức chế enzym nào?",
    "options": [
      "Thymidylat synthase",
      "Topoisomerase I gây đứt gãy sợi đơn ADN",
      "Dihydrofolat reductase",
      "Topoisomerase II"
    ],
    "correct": 1,
    "explanation": "Irinotecan và Topotecan ức chế enzym Topoisomerase I (enzym cắt và hàn gắn 1 sợi ADN để tháo xoắn trong quá trình nhân đôi). Thuốc làm bền vững phức hợp enzym - ADN, dẫn đến đứt gãy sợi đơn ADN không thể tự hàn gắn.",
    "reference": "Sách Dược lý 2 tr. 256"
  },
  {
    "id": 422,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Fomepizol (4-methylpyrazol) là thuốc kháng độc đặc hiệu hiện đại trong cấp cứu ngộ độc Ethylen glycol (chất chống đông trong két nước ô tô) nhờ ức chế enzym nào?",
    "options": [
      "Alcohol Dehydrogenase ADH ngăn chặn chuyển ethylen glycol thành acid glycolic và acid oxalic độc thận",
      "Cholinesterase",
      "Aldehyd dehydrogenase",
      "Xanthin oxidase"
    ],
    "correct": 0,
    "explanation": "Ethylen glycol chuyển hóa qua enzym ADH tạo acid glycolic gây toan chuyển hóa nặng và acid oxalic kết tủa tinh thể canxi oxalat làm tắc nghẽn hoại tử ống thận cấp. Fomepizol là chất ức chế cạnh tranh cực mạnh enzym ADH, chặn đứng sự hình thành các chất chuyển hóa độc hại này.",
    "reference": "Sách Dược lý 2 tr. 364"
  },
  {
    "id": 423,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong ngộ độc khí than Carbon Monoxid (CO), màu sắc da và niêm mạc điển hình của bệnh nhân thường là gì?",
    "options": [
      "Da vàng như nghệ do tan máu",
      "Da và môi có màu đỏ hồng như quả anh đào",
      "Da nổi mụn mủ lở loét",
      "Da tím tái xám xịt do thiếu oxy"
    ],
    "correct": 1,
    "explanation": "Khác với các nguyên nhân suy hô hấp thông thường gây tím tái móng tay môi, phức hợp Carboxyhemoglobin (HbCO) có màu đỏ tươi sáng. Khi ngộ độc nặng, da, môi và niêm mạc của nạn nhân có màu đỏ hồng cánh đào (cherry red) đặc trưng.",
    "reference": "Sách Dược lý 2 tr. 357"
  },
  {
    "id": 424,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tế bào G ở vùng hang vị dạ dày chịu trách nhiệm tổng hợp và bài tiết hormon nào kích thích tế bào viền tiết acid?",
    "options": [
      "Gastrin",
      "Cholecystokinin",
      "Somatostatin",
      "Secretin"
    ],
    "correct": 0,
    "explanation": "Tế bào G ở hang vị bài tiết hormon Gastrin. Gastrin theo máu đến kích thích trực tiếp tế bào viền qua thụ thể CCK2 và kích thích tế bào ECL giải phóng histamin, làm tăng bài tiết acid dịch vị.",
    "reference": "Sách Dược lý 2 tr. 102"
  },
  {
    "id": 425,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tế bào ECL (Enterochromaffin-like cells) ở niêm mạc dạ dày giải phóng chất hóa học trung gian nào gắn vào thụ thể H2 của tế bào viền?",
    "options": [
      "Serotonin",
      "Acetylcholin",
      "Prostaglandin",
      "Histamin"
    ],
    "correct": 3,
    "explanation": "Tế bào ECL chịu sự kích thích của gastrin và dây X giải phóng Histamin vào dịch ngoại bào kẽ. Histamin khuếch tán gắn vào thụ thể H2 trên màng đáy tế bào viền, hoạt hóa adenylcyclase làm tăng cAMP kích thích bơm proton tiết HCl.",
    "reference": "Sách Dược lý 2 tr. 102"
  },
  {
    "id": 426,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Somatostatin do tế bào D ở niêm mạc dạ dày tiết ra có vai trò điều hòa bài tiết acid như thế nào?",
    "options": [
      "Kích thích mở môn vị tống thức ăn",
      "Kích thích bài tiết acid dạ dày gấp 10 lần",
      "Ức chế bài tiết acid dịch vị thông qua ức chế trực tiếp tế bào viền, tế bào ECL và tế bào G",
      "Làm tan rã chất nhầy bảo vệ"
    ],
    "correct": 2,
    "explanation": "Somatostatin là chất ức chế tự nhiên mạnh nhất của quá trình bài tiết acid dạ dày: khi pH dạ dày giảm xuống dưới 3, tế bào D tiết somatostatin ức chế tế bào G tiết gastrin, ức chế tế bào ECL tiết histamin và ức chế trực tiếp tế bào viền.",
    "reference": "Sách Dược lý 2 tr. 102"
  },
  {
    "id": 427,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Carbocystein là thuốc điều hòa chất nhầy đường hô hấp có cơ chế tác dụng là gì?",
    "options": [
      "Ức chế trung tâm ho ở hành não",
      "Làm co thắt cơ trơn phế quản",
      "Làm khô dịch tiết đường thở",
      "Cắt đứt cầu nối disulfid và kích thích enzym sialyltransferase tổng hợp sialomucin bảo vệ niêm mạc"
    ],
    "correct": 3,
    "explanation": "Carbocystein làm đứt các cầu nối disulfid của glycoprotein trong chất nhầy và phục hồi tỷ lệ cân bằng giữa sialomucin (dịch nhầy loãng bảo vệ) và fucomucin (dịch nhầy quánh đặc), giúp dịch phế quản thông thoáng dễ tống ra.",
    "reference": "Sách Dược lý 2 tr. 358 & Dược lý hô hấp"
  },
  {
    "id": 428,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Dẫn xuất Corticoid khí dung Budesonid có đặc điểm dược động học nào giúp giảm thiểu độc tính toàn thân?",
    "options": [
      "Không bao giờ hấp thu vào máu",
      "Gắn 100% vào tế bào hồng cầu",
      "Phần thuốc nuốt vào dạ dày bị chuyển hóa bước đầu qua gan tới trên 90% thành chất không còn hoạt tính",
      "Thải trừ hoàn toàn qua phổi khi thở ra"
    ],
    "correct": 2,
    "explanation": "Khi hít corticoid, khoảng 80-90% lượng thuốc bị nuốt vào đường tiêu hóa. Budesonid và Fluticason bị enzym gan chuyển hóa bước đầu (first-pass metabolism) tới 90-99% thành chất bất hoạt, do đó nồng độ thuốc tự do vào vòng tuần hoàn chung rất thấp, ít gây tác dụng phụ toàn thân.",
    "reference": "Sách Dược lý 2 tr. 291 & Dược lý hô hấp"
  },
  {
    "id": 429,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng phụ thường gặp nhất của Theophylin khi nồng độ trong máu vượt quá khoảng điều trị an toàn là gì?",
    "options": [
      "Hạ thân nhiệt và ngủ sâu li bì",
      "Táo bón nặng và bí tiểu cấp",
      "Tụt huyết áp tư thế",
      "Buồn nôn, nôn mửa, bồn chồn, nhịp tim nhanh và mất ngủ"
    ],
    "correct": 3,
    "explanation": "Dấu hiệu sớm nhất của quá liều Theophylin là kích thích tiêu hóa (buồn nôn, nôn) và kích thích hệ thần kinh trung ương (bồn chồn, run rẩy, mất ngủ, nhịp tim nhanh). Nếu nồng độ tiếp tục tăng cao sẽ gây loạn nhịp thất và co giật tử vong.",
    "reference": "Sách Dược lý 2 tr. 20 & Dược lý hô hấp"
  },
  {
    "id": 430,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Vị trí gắn của Histamin trên thụ thể H1 dẫn đến sự hoạt hóa của hệ thống truyền tin nội bào nào?",
    "options": [
      "Protein Gs hoạt hóa Adenylcyclase làm tăng AMP vòng",
      "Protein Gq hoạt hóa Phospholipase C PLC làm tăng Inositol Triphosphat IP3 và Diacylglycerol DAG",
      "Thụ thể gắn kênh ion Cl-",
      "Protein Gi ức chế Adenylcyclase"
    ],
    "correct": 1,
    "explanation": "Thụ thể Histamin H1 là thụ thể bắt cặp protein Gq. Khi histamin gắn vào, protein Gq kích hoạt enzym phospholipase Cbeta, enzym này thủy phân PIP2 màng tạo IP3 (giải phóng Ca2+ từ lưới nội bào gây co cơ trơn) và DAG (hoạt hóa Protein Kinase C).",
    "reference": "Sách Dược lý 2 tr. 342"
  },
  {
    "id": 431,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc kháng histamin H1 Bilastin và Rupatadin thuộc nhóm thế hệ mấy và có ưu điểm gì?",
    "options": [
      "Thuốc chỉ dùng ngoài da trị bỏng",
      "Thế hệ 1, có tác dụng an thần gây ngủ cực mạnh",
      "Thế hệ 3, tác dụng kéo dài suốt 1 tháng",
      "Thế hệ 2, tác dụng chọn lọc cao ngoại vi, không gây buồn ngủ và không chuyển hóa qua gan"
    ],
    "correct": 3,
    "explanation": "Bilastin và Rupatadin là các thuốc kháng H1 thế hệ 2 mới. Bilastin không chuyển hóa qua enzym cytochrom P450 mà đào thải nguyên vẹn qua phân và nước tiểu, không gây buồn ngủ và không có độc tính trên tim mạch.",
    "reference": "Sách Dược lý 2 tr. 348"
  },
  {
    "id": 432,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng có lợi ngoài tác dụng hạ lipid máu (pleiotropic effects) của nhóm Statin trên hệ tim mạch bao gồm:",
    "options": [
      "Làm tan các cục sỏi canxi trong túi mật",
      "Cải thiện chức năng nội mô mạch máu, ổn định mảng xơ vữa, chống viêm và chống huyết khối",
      "Làm giãn cơ bàng quang",
      "Tăng sinh hồng cầu non ở tủy xương"
    ],
    "correct": 1,
    "explanation": "Ngoài hạ LDL-C, statin còn có các tác dụng đa hiệu (pleiotropic effects) độc lập với mức giảm cholesterol: kích hoạt eNOS phục hồi chức năng nội mô, làm dày vỏ xơ chống nứt vỡ mảng xơ vữa, giảm các dấu ấn viêm (giảm hs-CRP) và giảm kết tập tiểu cầu.",
    "reference": "Sách Dược lý 2 tr. 95"
  },
  {
    "id": 433,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Chống chỉ định tuyệt đối của nhóm thuốc Statin hạ lipid máu là đối tượng nào sau đây?",
    "options": [
      "Người già trên 65 tuổi",
      "Bệnh nhân tăng huyết áp vô căn",
      "Bệnh nhân đái tháo đường typ 2 có microalbumin niệu",
      "Bệnh gan tiến triển có men gan ALT/AST tăng liên tục gấp 3 lần giới hạn trên và phụ nữ có thai hoặc cho con bú"
    ],
    "correct": 3,
    "explanation": "Statin chuyển hóa chủ yếu ở gan và có thể gây tổn thương gan, chống chỉ định khi bệnh gan đang hoạt động hoặc men gan tăng cao kéo dài. Statin cũng chống chỉ định tuyệt đối trong thai kỳ và cho con bú vì cholesterol rất cần thiết cho sự phát triển não và màng tế bào thai nhi.",
    "reference": "Sách Dược lý 2 tr. 96"
  },
  {
    "id": 434,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Ký sinh trùng Plasmodium nào sau đây có chu kỳ sốt rét cách 72 giờ (sốt 3 ngày một cơn - quartan malaria)?",
    "options": [
      "Plasmodium ovale",
      "Plasmodium malariae",
      "Plasmodium vivax",
      "Plasmodium falciparum"
    ],
    "correct": 1,
    "explanation": "Chu kỳ phân chia thể vô tính trong hồng cầu của P. falciparum, P. vivax và P. ovale là 48 giờ (sốt cách nhật - 2 ngày một cơn). Riêng Plasmodium malariae có chu kỳ phân chia là 72 giờ, gây cơn sốt chu kỳ 3 ngày một lần (sốt thể 4 ngày).",
    "reference": "Sách Dược lý 2 tr. 193"
  },
  {
    "id": 435,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc chống sốt rét Halofantrin và Lumefantrin thuộc nhóm cấu trúc hóa học nào?",
    "options": [
      "Dẫn xuất 8-aminoquinolin",
      "Dẫn xuất Arylaminoalcohol",
      "Dẫn xuất 4-aminoquinolin",
      "Dẫn xuất acridin"
    ],
    "correct": 1,
    "explanation": "Lumefantrin và Halofantrin là các chất thuộc nhóm arylaminoalcohol (cùng nhóm với quinin và mefloquin), diệt thể vô tính trong hồng cầu. Lumefantrin được phối hợp cùng Artemether trong viên thuốc phối hợp chuẩn Coartem của WHO.",
    "reference": "Sách Dược lý 2 tr. 200"
  },
  {
    "id": 436,
    "subject": "duocly2",
    "chapter": "KTGHP",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân nam 64 tuổi có tiền sử tăng huyết áp, đái tháo đường và suy tim nhẹ. Thuốc hạ huyết áp nào sau đây có bằng chứng vững chắc nhất giúp làm chậm quá trình tái cấu trúc cơ tim và giảm tỷ lệ tử vong?",
    "options": [
      "Thuốc ức chế men chuyển",
      "Thuốc giãn mạch trực tiếp minoxidil",
      "Thuốc lợi tiểu thẩm thấu mannitol",
      "Thuốc chẹn kênh calci DHP tác dụng ngắn"
    ],
    "correct": 0,
    "explanation": "Angiotensin II là yếu tố kích thích mạnh mẽ quá trình phì đại cơ tim, xơ hóa và tái cấu trúc buồng tim. Thuốc ức chế men chuyển ACEI chặn đứng sự hình thành Angiotensin II, ngăn chặn tái cấu trúc thất trái và được chứng minh giảm rõ rệt tỷ lệ tử vong trong suy tim.",
    "reference": "Sách Dược lý 2 tr. 69, 76"
  },
  {
    "id": 437,
    "subject": "duocly2",
    "chapter": "KTGHP",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân nữ 45 tuổi bị hen phế quản cần nhổ răng hàm số 8. Bác sĩ nên tránh kê đơn thuốc giảm đau nào sau đây vì nguy cơ kích hoạt hội chứng 'Bộ ba Samter' gây co thắt phế quản cấp ác tính?",
    "options": [
      "Dung dịch gây tê Lidocain",
      "Aspirin và các thuốc NSAID ức chế COX-1",
      "Paracetamol liều thấp 500mg",
      "Kháng sinh Amoxicillin"
    ],
    "correct": 1,
    "explanation": "Hội chứng Widal hay tam chứng Samter (hen phế quản, polyp mũi và dị ứng aspirin) xảy ra khi NSAID ức chế enzym COX-1, làm chuyển toàn bộ chuyển hóa acid arachidonic sang con đường 5-LOX, tạo ra lượng lớn leukotrien gây co thắt phế quản dữ dội.",
    "reference": "Sách Dược lý 2 tr. 267"
  },
  {
    "id": 438,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hội chứng suy thượng thận cấp do ngừng Glucocorticoid đột ngột có các biểu hiện lâm sàng đe dọa tính mạng nào?",
    "options": [
      "Tụt huyết áp nặng dẫn tới trụy tim mạch sốc, mất nước, nôn mửa, đau bụng dữ dội, hạ đường huyết và hạ natri máu",
      "Cường giáp trạng bão giáp",
      "Tăng cân đột ngột kèm mặt tròn đỏ",
      "Tăng huyết áp kịch phát kèm phù phổi cấp"
    ],
    "correct": 0,
    "explanation": "Khi ngừng corticoid đột ngột, nồng độ cortisol máu tụt về gần bằng 0 trong khi thượng thận chưa hồi phục, gây suy thượng thận cấp: giảm thể tích tuần hoàn, tụt huyết áp trụy mạch không hồi phục với bù dịch, hạ natri máu, tăng kali máu và hạ glucose máu.",
    "reference": "Sách Dược lý 2 tr. 289"
  },
  {
    "id": 439,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Spironolacton ngoài tác dụng lợi tiểu giữ kali còn là thuốc kháng hormon nào ở các mô cơ quan sinh dục?",
    "options": [
      "Đối kháng thụ thể Estrogen",
      "Kích thích tuyến yên tiết LH",
      "Đối kháng thụ thể Androgen và ức chế tổng hợp testosteron",
      "Ức chế thụ thể prolactin"
    ],
    "correct": 2,
    "explanation": "Spironolacton có ái lực gắn và phong bế thụ thể androgen ngoại vi, đồng thời ức chế enzym 17-hydroxylase và 17,20-desmolase làm giảm tổng hợp testosteron, được dùng trên lâm sàng để điều trị chứng rậm lông, mụn trứng cá nặng ở phụ nữ mắc hội chứng buồng trứng đa nang.",
    "reference": "Sách Dược lý 2 tr. 88, 318"
  },
  {
    "id": 440,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Phức hợp Insulin dạng monomer hòa tan khi tiêm dưới da được cơ thể tạo phức tinh thể hexamer bền vững nhờ sự có mặt của ion kim loại nào?",
    "options": [
      "Sắt Fe2+",
      "Mangan",
      "Kẽm",
      "Đồng"
    ],
    "correct": 2,
    "explanation": "Phân tử insulin tự nhiên kết hợp với 2 ion Kẽm (Zn2+) tạo thành phức hợp hexamer 6 phân tử rất bền vững và tan chậm. Khi tiêm dưới da, hexamer khuếch tán chậm, sau đó pha loãng dần phân ly thành monomer mới ngấm vào mao mạch.",
    "reference": "Sách Dược lý 2 tr. 295"
  },
  {
    "id": 441,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng phụ phổ biến nhất trên đường tiêu hóa khi bắt đầu điều trị bằng thuốc hạ đường huyết Metformin là gì?",
    "options": [
      "Táo bón nặng gây tắc ruột",
      "Loét thủng hành tá tràng",
      "Buồn nôn, tiêu chảy phân lỏng, đau bụng quặn và vị kim loại khó chịu ở miệng",
      "Xuất huyết đường mật"
    ],
    "correct": 2,
    "explanation": "Khoảng 20-30% bệnh nhân gặp tác dụng phụ đường tiêu hóa khi khởi trị Metformin: tiêu chảy, đầy hơi, buồn nôn, đau bụng âm ỉ và vị kim loại trong miệng. Các triệu chứng này thường thoáng qua và giảm dần khi bắt đầu bằng liều thấp và uống ngay trong hoặc sau bữa ăn.",
    "reference": "Sách Dược lý 2 tr. 299"
  },
  {
    "id": 442,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Dipyridamol làm tăng nồng độ AMP vòng trong tiểu cầu để ức chế kết tập tiểu cầu nhờ cơ chế nào?",
    "options": [
      "Chẹn kênh natri phụ thuộc điện thế",
      "Phá hủy thụ thể GPIIb/IIIa",
      "Ức chế enzym Phosphodiesterase PDE và ức chế sự thu hồi adenosin vào tế bào",
      "Ức chế không hồi phục thụ thể thromboxan A2"
    ],
    "correct": 2,
    "explanation": "Dipyridamol ức chế enzym phosphodiesterase ở tiểu cầu làm ngăn phân hủy cAMP, đồng thời ức chế tái hấp thu adenosin làm tăng adenosin ngoại bào kích thích adenylcyclase, nồng độ cAMP nội bào tăng cao làm giảm nồng độ calci tự do, ức chế kết tập tiểu cầu.",
    "reference": "Sách Dược lý 2 tr. 124"
  },
  {
    "id": 443,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Ticlopidin và Prasugrel thuộc nhóm cấu trúc hóa học nào cùng với Clopidogrel?",
    "options": [
      "Dẫn xuất Coumarin",
      "Dẫn xuất Salicylat",
      "Dẫn xuất Thienopyridin",
      "Dẫn xuất Indandion"
    ],
    "correct": 2,
    "explanation": "Ticlopidin, Clopidogrel và Prasugrel đều là dẫn xuất Thienopyridin. Thuốc bị chuyển hóa qua gan thành chất chuyển hóa có nhóm thiol (-SH) tự do gắn cộng hóa trị với thụ thể P2Y12 của ADP trên bề mặt tiểu cầu.",
    "reference": "Sách Dược lý 2 tr. 123"
  },
  {
    "id": 444,
    "subject": "duocly2",
    "chapter": "Vitamin",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Chất nào sau đây là tiền vitamin A (Provitamin A) có nhiều trong các loại củ quả màu vàng, đỏ và rau có màu xanh đậm?",
    "options": [
      "Calcidiol",
      "Tocopherol",
      "Ergosterol",
      "Beta-caroten"
    ],
    "correct": 3,
    "explanation": "Beta-caroten là tiền chất của vitamin A có trong gấc, cà rốt, bí đỏ, đu đủ, rau ngót... Khi vào niêm mạc ruột non, một phân tử beta-caroten được enzym carotenase phân cắt ở vị trí liên kết trung tâm tạo ra hai phân tử Retinal (sau đó khử thành Retinol).",
    "reference": "Sách Dược lý 2 tr. 322"
  },
  {
    "id": 445,
    "subject": "duocly2",
    "chapter": "Vitamin",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Vitamin B6 (Pyridoxin) tham gia vào chu trình chuyển hóa acid amin nào thành chất dẫn truyền thần kinh ức chế GABA trong não?",
    "options": [
      "Khử carboxyl của Acid Glutamic tạo thành GABA",
      "Thủy phân acid aspartic",
      "Methyl hóa glycin",
      "Oxy hóa lysin"
    ],
    "correct": 0,
    "explanation": "Pyridoxal phosphat (PLP - dạng hoạt tính của B6) là coenzym của enzym glutamat decarboxylase (GAD), xúc tác phản ứng khử carboxyl của acid glutamic tạo acid gamma-aminobutyric (GABA). Thiếu B6 làm giảm GABA gây co giật ở trẻ sơ sinh và trẻ nhỏ.",
    "reference": "Sách Dược lý 2 tr. 333"
  },
  {
    "id": 446,
    "subject": "duocly2",
    "chapter": "Thuốc chữa thiếu máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Triệu chứng móng tay mỏng, dẹt, dễ gãy và lõm hình thìa (koilonychia) cùng với viêm teo niêm mạc lưỡi là biểu hiện điển hình của bệnh lý thiếu máu nào?",
    "options": [
      "Thiếu máu ác tính do thiếu B12",
      "Thiếu máu do suy tủy xương",
      "Thiếu máu huyết tán tự miễn",
      "Thiếu máu do thiếu sắt mạn tính kéo dài"
    ],
    "correct": 3,
    "explanation": "Thiếu sắt kéo dài không chỉ làm giảm hemoglobin mà còn làm giảm các enzym chứa sắt ở mô (cytochrom, peroxidase), gây rối loạn dinh dưỡng biểu mô: móng tay dẹt lõm hình thìa (koilonychia), viêm teo gai lưỡi, khó nuốt do màng ngăn thực quản (hội chứng Plummer-Vinson).",
    "reference": "Sách Dược lý 2 tr. 127"
  },
  {
    "id": 447,
    "subject": "duocly2",
    "chapter": "Thuốc chữa thiếu máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc kích thích sinh hồng cầu thế hệ mới Darbepoetin alfa có ưu điểm nào vượt trội so với Epoetin alfa (EPO)?",
    "options": [
      "Chứa thêm 2 chuỗi carbohydrat gắn N-linked làm thời gian bán thải dài gấp 3 lần, chỉ cần tiêm 1 lần mỗi 1-2 tuần",
      "Có thể uống bằng đường tiêu hóa",
      "Không bao giờ gây tăng huyết áp",
      "Chỉ tác dụng trên dòng bạch cầu"
    ],
    "correct": 0,
    "explanation": "Darbepoetin alfa là phân tử EPO tái tổ hợp được biến đổi gen bổ sung thêm 2 chuỗi sialic acid, giúp phân tử tồn tại lâu hơn trong máu, thời gian bán thải dài gấp 3 lần so với Epoetin alfa, cho phép kéo dài khoảng cách tiêm từ 3 lần/tuần thành 1 lần/tuần hoặc 2 tuần/lần.",
    "reference": "Sách Dược lý 2 tr. 130"
  },
  {
    "id": 448,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Lamivudin (3TC) là thuốc kháng virus thuộc nhóm NRTI được chỉ định điều trị đồng thời hai bệnh nhiễm virus mạn tính nào?",
    "options": [
      "Nhiễm virus Cúm A và virus Dại",
      "Nhiễm virus Đậu mùa và Sởi",
      "Nhiễm virus Herpes và Cytomegalovirus",
      "Nhiễm virus HIV và Viêm gan virus B HBV"
    ],
    "correct": 3,
    "explanation": "Lamivudin (3TC) ức chế cả enzym sao chép ngược của HIV và enzym ADN polymerase của virus viêm gan B (HBV). Thuốc được dùng trong cả phác đồ phối hợp kháng HIV và phác đồ điều trị viêm gan B mạn tính.",
    "reference": "Sách Dược lý 2 tr. 238, 240"
  },
  {
    "id": 449,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc kháng HIV nhóm NNRTI Nevirapin (NVP) có độc tính nguy hiểm nào cần theo dõi sát trong những tuần đầu điều trị?",
    "options": [
      "Hội chứng dị ứng da nhiễm độc hoại tử thượng bì Stevens-Johnson và độc tính hoại tử tế bào gan cấp",
      "Gây nhồi máu phổi",
      "Gây điếc tai cấp tính",
      "Gây mù mắt do đục thủy tinh thể"
    ],
    "correct": 0,
    "explanation": "Nevirapin có nguy cơ cao gây phát ban dị ứng da nặng (hội chứng Stevens-Johnson hoặc hội chứng Lyell) và viêm gan nhiễm độc cấp tính (tử vong do suy gan), thường bùng phát trong 6-12 tuần đầu điều trị.",
    "reference": "Sách Dược lý 2 tr. 238"
  },
  {
    "id": 450,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Kháng thể đơn dòng Rituximab được chỉ định trong điều trị u lympho không Hodgkin và bệnh tự miễn nhắm vào kháng nguyên nào trên bề mặt tế bào lympho B?",
    "options": [
      "Kháng nguyên CD8",
      "Kháng nguyên CD3",
      "Kháng nguyên CD4",
      "Kháng nguyên CD20"
    ],
    "correct": 3,
    "explanation": "Rituximab là kháng thể đơn dòng gắn đặc hiệu vào kháng nguyên xuyên màng CD20 biểu hiện trên bề mặt tế bào lympho tiền B và lympho B trưởng thành, kích hoạt độc tế bào phụ thuộc bổ thể (CDC) và độc tế bào qua trung gian kháng thể (ADCC) tiêu diệt tế bào B ác tính.",
    "reference": "Sách Dược lý 2 tr. 261"
  },
  {
    "id": 451,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc chống ung thư Cytarabin (Ara-C) là chất chống chuyển hóa pyrimidin cạnh tranh và ức chế enzym nào trong pha S?",
    "options": [
      "Enzym Telomerase",
      "ADN Polymerase của tế bào ung thư",
      "Enzym Ribonucleotid reductase",
      "Enzym Topoisomerase II"
    ],
    "correct": 1,
    "explanation": "Cytarabin (Cytosin arabinosid) sau khi được phosphoryl hóa thành ara-CTP sẽ cạnh tranh với dCTP tự nhiên, ức chế trực tiếp enzym ADN polymerase và gắn chèn vào chuỗi ADN gây ức chế kéo dài chuỗi và ngừng sao chép ADN ở pha S.",
    "reference": "Sách Dược lý 2 tr. 247"
  },
  {
    "id": 452,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc kháng độc đặc hiệu Succimer (DMSA) là thuốc gắp kim loại nặng có ưu điểm nổi bật nào so với Dimercaprol (BAL)?",
    "options": [
      "Có vị ngọt tự nhiên",
      "Chỉ có tác dụng với ion sắt",
      "Chỉ dùng qua đường tiêm tủy sống",
      "Tan trong nước, có thể sử dụng thuận tiện qua đường uống và ít độc tính hơn BAL"
    ],
    "correct": 3,
    "explanation": "Succimer (DMSA - Dimercaptosuccinic acid) là dẫn chất tan trong nước của BAL, có thể uống qua đường tiêu hóa, đào thải phức hợp chelat an toàn qua thận và ít gây độc tính thần kinh hơn hẳn so với BAL (vốn phải tiêm bắp dầu đau đớn).",
    "reference": "Sách Dược lý 2 tr. 353"
  },
  {
    "id": 453,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Khi bệnh nhân bị ngộ độc cấp thuốc chống trầm cảm ba vòng (như Amitriptylin) có blốc dẫn truyền và phức bộ QRS giãn rộng trên ECG, thuốc kiềm hóa máu cấp cứu được truyền tĩnh mạch là gì?",
    "options": [
      "Amoni clorid",
      "Dung dịch Ringer lactat",
      "Natri hydrocarbonat",
      "Calci clorid"
    ],
    "correct": 2,
    "explanation": "Thuốc chống trầm cảm 3 vòng phong bế kênh Na+ cơ tim gây QRS giãn rộng và loạn nhịp thất. Truyền Natri hydrocarbonat tĩnh mạch vừa cung cấp tải Na+ vượt qua sự ức chế kênh, vừa kiềm hóa máu làm giảm gắn kết của thuốc vào kênh Na+, giúp thu hẹp phức bộ QRS và cứu sống bệnh nhân.",
    "reference": "Sách Dược lý 2 tr. 357"
  },
  {
    "id": 454,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng giãn phế quản của nhóm thuốc kháng cholinergic (Ipratropium) có đặc điểm gì so với thuốc kích thích beta-2 (Salbutamol)?",
    "options": [
      "Có tác dụng cắt cơn hen tức thì sau 5 giây",
      "Gây nhịp tim chậm xoang",
      "Khởi phát tác dụng chậm hơn và hiệu lực tối đa yếu hơn một chút ở bệnh nhân hen, nhưng rất hiệu quả ở bệnh nhân COPD",
      "Làm tăng tiết đờm dãi gấp 3 lần"
    ],
    "correct": 2,
    "explanation": "Ipratropium làm giãn phế quản bằng cách phong bế trương lực phó giao cảm nền, tác dụng chậm hơn SABA (đạt đỉnh sau 1-2 giờ) nên ít dùng đơn độc cắt cơn hen cấp, nhưng ở bệnh nhân COPD trương lực phó giao cảm cao nên thuốc rất hiệu quả.",
    "reference": "Sách Dược lý 2 tr. 345 & Dược lý hô hấp"
  },
  {
    "id": 455,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Fluticason propionat là thuốc corticoid dùng đường hít có ái lực gắn với thụ thể glucocorticoid như thế nào so với Dexamethason?",
    "options": [
      "Chỉ gắn vào thụ thể mineralocorticoid",
      "Không có ái lực với thụ thể glucocorticoid",
      "Gấp khoảng 3 lần Dexamethason và gấp 18 lần Dexamethason về hoạt tính chống viêm tại chỗ",
      "Yếu hơn Dexamethason 100 lần"
    ],
    "correct": 2,
    "explanation": "Fluticason propionat có tính thân dầu cao, gắn rất chặt và phân ly chậm khỏi thụ thể glucocorticoid tại chỗ ở phế quản, hoạt tính chống viêm tại chỗ mạnh gấp nhiều lần dexamethason và beclomethason.",
    "reference": "Sách Dược lý 2 tr. 291 & Dược lý hô hấp"
  },
  {
    "id": 456,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Zafirlukast và Montelukast dùng đường nào và có thời điểm uống thuốc thích hợp nhất trong ngày là khi nào?",
    "options": [
      "Đường tiêm dưới da buổi sáng",
      "Đường khí dung hít liên tục",
      "Đường uống, thường uống một lần duy nhất vào buổi tối trước khi đi ngủ",
      "Đường đặt hậu môn"
    ],
    "correct": 2,
    "explanation": "Montelukast dùng đường uống hấp thu nhanh, đạt đỉnh sau 2-4 giờ. Hen phế quản thường hay bùng phát nặng lên về đêm và sáng sớm (do trương lực phế vị tăng và nồng độ cortisol giảm), uống thuốc vào buổi tối giúp kiểm soát triệu chứng ban đêm tốt nhất.",
    "reference": "Sách Dược lý 2 tr. 267 & Dược lý hô hấp"
  },
  {
    "id": 457,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Ketotifen là thuốc kháng histamin H1 thế hệ 2 có thêm cơ chế tác dụng ổn định màng tế bào nào?",
    "options": [
      "Ngăn cản tế bào gan thoái hóa mỡ",
      "Ổn định màng tế bào thần kinh chống động kinh",
      "Ổn định màng dưỡng bào ngăn chặn sự giải phóng histamin và các chất trung gian hóa học",
      "Ổn định màng tế bào hồng cầu chống tan máu"
    ],
    "correct": 2,
    "explanation": "Ketotifen vừa là chất đối kháng không cạnh tranh tại thụ thể H1, vừa có tác dụng ổn định màng tế bào mast và bạch cầu ái kiềm, ức chế sự mất hạt giải phóng histamin, leukotrien, dùng dự phòng hen phế quản và viêm mũi dị ứng.",
    "reference": "Sách Dược lý 2 tr. 348"
  },
  {
    "id": 458,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Levocetirizin là đồng phân quang học nào của Cetirizin và có đặc điểm gì?",
    "options": [
      "Đồng phân quay phải bất hoạt",
      "Đồng phân quay trái có hoạt tính kháng H1 mạnh gấp đôi cetirizin racemic",
      "Dạng tiền chất không tan",
      "Dạng este hóa của loratadin"
    ],
    "correct": 1,
    "explanation": "Levocetirizin là đồng phân (R) quang học có hoạt tính của cetirizin, có ái lực với thụ thể H1 cao gấp 2 lần hỗn hợp racemic, cho phép dùng liều bằng một nửa (5mg so với 10mg của cetirizin) với hiệu quả tương đương và giảm thiểu buồn ngủ.",
    "reference": "Sách Dược lý 2 tr. 349"
  },
  {
    "id": 459,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc kháng histamin H1 dùng nhỏ mắt điều trị viêm kết mạc dị ứng phổ biến hiện nay là gì?",
    "options": [
      "Olopatadin và Azelastin",
      "Atropin sulfat",
      "Cimetidin",
      "Promethazin"
    ],
    "correct": 0,
    "explanation": "Olopatadin và Azelastin là các thuốc kháng H1 thế hệ 2 tác dụng kép (vừa kháng H1 vừa ổn định màng tế bào mast) được bào chế dưới dạng dung dịch nhỏ mắt tác dụng tại chỗ rất nhanh và hiệu quả trong viêm kết mạc dị ứng.",
    "reference": "Sách Dược lý 2 tr. 348"
  },
  {
    "id": 460,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Vì sao không nên dùng đồng thời thuốc kháng histamin H1 thế hệ 1 cùng với rượu, bia hoặc thuốc ngủ?",
    "options": [
      "Vì làm mất hoàn toàn tác dụng chống dị ứng",
      "Vì gây tương tác hiệp đồng làm tăng ức chế hệ thần kinh trung ương quá mức dẫn đến hôn mê hoặc suy hô hấp",
      "Vì gây phản ứng xuất huyết bàng quang",
      "Vì làm hủy hoại mô sụn khớp"
    ],
    "correct": 1,
    "explanation": "Kháng H1 thế hệ 1 qua hàng rào máu não gây ức chế thần kinh trung ương. Khi phối hợp cùng rượu, bia, thuốc an thần hoặc thuốc ngủ barbiturat, tác dụng ức chế thần kinh bị cộng hưởng (hiệp đồng tăng mức), gây ngủ sâu, mất phản xạ và có thể suy hô hấp.",
    "reference": "Sách Dược lý 2 tr. 346"
  },
  {
    "id": 461,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Piperazin tẩy giun đũa và giun kim theo cơ chế tác động thần kinh nào?",
    "options": [
      "Tác dụng giống GABA làm mở kênh clo gây ưu cực hóa màng tế bào cơ giun dẫn đến liệt mềm",
      "Phá vỡ lớp vỏ cutin của giun",
      "Ức chế men phân giải đường của sán",
      "Kích thích tấm vận động gây co cứng cơ giun"
    ],
    "correct": 0,
    "explanation": "Piperazin tác động như chất chủ vận trên thụ thể GABA ở tế bào cơ giun, làm mở kênh Cl- đưa ion Cl- vào tế bào gây ưu cực hóa màng, làm giảm tính hưng phấn và làm cơ giun bị liệt mềm (flaccid paralysis).",
    "reference": "Sách Dược lý 2 tr. 214"
  },
  {
    "id": 462,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân điều trị sán dây heo (Taenia solium) bằng Niclosamid cần phải uống kèm theo thuốc tẩy muối (như Magnesi sulfat) sau 2 giờ nhằm mục đích gì?",
    "options": [
      "Để làm tăng hấp thu của niclosamid vào máu",
      "Tống nhanh các đốt sán bị phân rã ra ngoài trước khi trứng sán thoát ra giải phóng ấu trùng xâm nhập vào máu gây bệnh nang sán não",
      "Để giảm kích ứng dạ dày",
      "Để bù trừ lượng magie mất đi"
    ],
    "correct": 1,
    "explanation": "Niclosamid chỉ làm chết đoạn thân sán và phân rã các đốt sán. Nếu các đốt sán dây lợn nằm lại trong ruột bị dịch tiêu hóa phân hủy sẽ giải phóng hàng vạn trứng sán, trứng nở thành ấu trùng chui qua thành ruột vào máu lên não (ấu trùng sán lợn ở não). Thuốc tẩy muối giúp tống sạch sán ra ngoài trước khi trứng kịp giải phóng.",
    "reference": "Sách Dược lý 2 tr. 220"
  },
  {
    "id": 463,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Khi điều trị bằng thuốc hạ lipid máu nhóm Statin, cần chỉ định xét nghiệm enzym gan ALT/AST và enzym cơ Creatine Kinase (CK) trong tình huống nào?",
    "options": [
      "Xét nghiệm trước khi bắt đầu điều trị và kiểm tra lại khi bệnh nhân có biểu hiện đau cơ, yếu cơ hoặc mệt mỏi bất thường",
      "Chỉ xét nghiệm khi bệnh nhân bị sốt cao",
      "Không bao giờ cần xét nghiệm các enzym này",
      "Xét nghiệm liên tục mỗi 3 ngày một lần"
    ],
    "correct": 0,
    "explanation": "Trước khi khởi trị statin cần định lượng ALT/AST và CK nền. Trong quá trình điều trị, nếu bệnh nhân xuất hiện triệu chứng đau cơ, mỏi cơ, yếu cơ hoặc nước tiểu sẫm màu, cần định lượng ngay CK máu (nếu CK > 5-10 lần giới hạn trên cần dừng thuốc ngay).",
    "reference": "Sách Dược lý 2 tr. 96"
  },
  {
    "id": 464,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Apo B-100 là apolipoprotein cấu trúc chính của phân tử lipoprotein nào?",
    "options": [
      "Chylomicron",
      "LDL và VLDL",
      "HDL",
      "Albumin"
    ],
    "correct": 1,
    "explanation": "Apolipoprotein B-100 (Apo B-100) được tổng hợp ở gan, là thành phần protein cấu trúc duy nhất gắn trên bề mặt của VLDL, IDL và LDL, đóng vai trò phối tử gắn vào thụ thể LDL (LDL receptor) ở gan để dọn dẹp cholesterol.",
    "reference": "Sách Dược lý 2 tr. 91-92"
  },
  {
    "id": 465,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc chống sốt rét Artemether được bào chế dưới dạng dầu tiêm bắp sâu, có đặc tính hấp thu và chuyển hóa như thế nào?",
    "options": [
      "Chỉ dùng qua đường ngậm dưới lưỡi",
      "Tan hoàn toàn trong nước",
      "Không bao giờ chuyển hóa qua gan",
      "Hấp thu chậm đều từ mô cơ và được khử methyl ở gan tạo thành Dihydroartemisinin có hoạt tính"
    ],
    "correct": 3,
    "explanation": "Artemether là dẫn xuất methyl ether tan trong dầu của artemisinin, dùng tiêm bắp sâu tan chậm, duy trì nồng độ thuốc ổn định trong máu và được enzym gan cytochrom P450 khử methyl tạo Dihydroartemisinin diệt ký sinh trùng nhanh chóng.",
    "reference": "Sách Dược lý 2 tr. 195"
  },
  {
    "id": 466,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh sốt rét 'đái ra huyết sắc tố' (Blackwater fever) là một biến chứng tán huyết nội mạch cấp tính nghiêm trọng thường liên quan đến việc dùng thuốc nào ở người thiếu men G6PD hoặc sốt rét nặng?",
    "options": [
      "Quinin hoặc Primaquin",
      "Doxycyclin",
      "Artesunat",
      "Cloroquin"
    ],
    "correct": 0,
    "explanation": "Hội chứng đái huyết sắc tố (nước tiểu màu đen như nước vối hoặc xá xị) là biến chứng tan máu ồ ạt trong lòng mạch do miễn dịch hoặc do thiếu men G6PD, thường khởi phát khi điều trị bằng Quinin hoặc Primaquin, dẫn tới hoại tử ống thận cấp và suy thận vô niệu.",
    "reference": "Sách Dược lý 2 tr. 197, 201"
  },
  {
    "id": 467,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc chống sốt rét Atovaquon phối hợp cùng Proguanil (biệt dược Malarone) ức chế ký sinh trùng theo cơ chế nào?",
    "options": [
      "Ức chế màng ngoài hồng cầu",
      "Kích thích tăng nhiệt độ máu",
      "Làm tan rã không bào tiêu hóa",
      "Ức chế chuỗi vận chuyển electron ở ty thể qua phức hợp cytochrom bc1 và ức chế enzym dihydrofolat reductase"
    ],
    "correct": 3,
    "explanation": "Atovaquon gắn vào cytochrom bc1 ở ty thể ký sinh trùng làm sụp đổ điện thế màng ty thể và ức chế tổng hợp pyrimidin. Proguanil ức chế dihydrofolat reductase. Phối hợp này (Malarone) có hiệu lực diệt cả thể phân liệt ở gan và thể hồng cầu của P. falciparum kháng thuốc.",
    "reference": "Sách Dược lý 2 tr. 202"
  },
  {
    "id": 468,
    "subject": "duocly2",
    "chapter": "KTGHP",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân nam 55 tuổi có tiền sử đái tháo đường typ 2, tăng huyết áp và tăng triglycerid máu. Đang dùng Metformin và Fenofibrat. Bác sĩ kê thêm thuốc kháng đông Acenocoumarol (Sintrom) vì rung nhĩ. Nguy cơ tương tác thuốc nào cần lưu ý?",
    "options": [
      "Không có bất kỳ tương tác nào giữa các thuốc này",
      "Metformin làm mất hoàn toàn tác dụng của Sintrom",
      "Fenofibrat đẩy Acenocoumarol ra khỏi vị trí gắn protein huyết tương làm tăng tác dụng chống đông và tăng nguy cơ xuất huyết",
      "Acenocoumarol làm tăng đường huyết kịch phát"
    ],
    "correct": 2,
    "explanation": "Fenofibrat gắn rất mạnh vào albumin huyết tương (khoảng 99%), cạnh tranh vị trí gắn và đẩy các thuốc chống đông kháng vitamin K (như Acenocoumarol, Warfarin) ra dạng tự do, làm tăng vọt chỉ số INR và tăng nguy cơ chảy máu nghiêm trọng.",
    "reference": "Sách Dược lý 2 tr. 93, 120"
  },
  {
    "id": 469,
    "subject": "duocly2",
    "chapter": "KTGHP",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân nam 62 tuổi sau can thiệp đặt stent mạch vành đang uống Aspirin 81mg và Clopidogrel 75mg hàng ngày. Bệnh nhân bị đau thượng vị ợ chua, bác sĩ nội soi thấy viêm trợt hang vị. Thuốc ức chế bài tiết acid nào sau đây an toàn nhất để tránh làm giảm tác dụng chống đông của Clopidogrel?",
    "options": [
      "Omeprazol liều cao",
      "Esomeprazol liều cao",
      "Cimetidin",
      "Pantoprazol hoặc Famotidin"
    ],
    "correct": 3,
    "explanation": "Clopidogrel cần enzym CYP2C19 chuyển hóa thành dạng có hoạt tính. Omeprazol, Esomeprazol và Cimetidin ức chế mạnh CYP2C19 làm giảm hoạt hóa Clopidogrel. Pantoprazol (ít ức chế CYP2C19 nhất) hoặc Famotidin (kháng H2) là lựa chọn an toàn không gây tương tác bất lợi này.",
    "reference": "Sách Dược lý 2 tr. 104, 106, 123"
  },
  {
    "id": 470,
    "subject": "duocly2",
    "chapter": "KTGHP",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân nữ 38 tuổi bị cường giáp Basedow đang điều trị bằng Propylthiouracil (PTU). Bệnh nhân đột ngột sốt cao 39 độ C, đau rát họng dữ dội và có vết loét ở niêm mạc miệng. Hướng xử trí khẩn cấp là gì?",
    "options": [
      "Cho bệnh nhân súc miệng nước muối rồi về nhà theo dõi",
      "Tăng gấp đôi liều PTU để dập tắt cơn bão giáp",
      "Ngừng ngay PTU, làm xét nghiệm tổng phân tích tế bào máu khẩn cấp để kiểm tra số lượng bạch cầu trung tính và cách ly phòng nhiễm trùng",
      "Kê đơn thuốc giảm đau chống viêm aspirin"
    ],
    "correct": 2,
    "explanation": "Sốt cao kèm đau họng, loét miệng ở người dùng thuốc kháng giáp trạng tổng hợp là dấu hiệu kinh điển báo động tình trạng mất bạch cầu hạt (agranulocytosis). Bắt buộc phải ngừng ngay thuốc và đếm công thức máu khẩn; nếu bạch cầu trung tính < 500/mm3 cần nhập viện cách ly và dùng kháng sinh phổ rộng.",
    "reference": "Sách Dược lý 2 tr. 306"
  },
  {
    "id": 471,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Triamcinolon là dẫn xuất glucocorticoid tổng hợp có đặc điểm tác dụng nào sau đây?",
    "options": [
      "Tác dụng giữ muối nước mạnh gấp 50 lần hydrocortison",
      "Chỉ có tác dụng hạ sốt giảm đau",
      "Kích thích tăng tiết insulin",
      "Có hoạt lực chống viêm mạnh hơn Hydrocortison khoảng 4-5 lần và hầu như không giữ muối nước"
    ],
    "correct": 3,
    "explanation": "Triamcinolon có gắn thêm nguyên tử fluor ở vị trí C9 và nhóm -OH ở vị trí C16, làm tăng mạnh hoạt tính chống viêm (gấp 5 lần hydrocortison) nhưng triệt tiêu hoàn toàn tác dụng giữ muối nước (không gây phù), thường dùng dạng tiêm nội khớp tác dụng kéo dài (Kenacort).",
    "reference": "Sách Dược lý 2 tr. 285, 290"
  },
  {
    "id": 472,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Finasterid và Dutasterid là thuốc ức chế enzym nào được chỉ định điều trị phì đại lành tính tuyến tiền liệt và rụng tóc kiểu hói ở nam giới?",
    "options": [
      "5-alpha Reductase ngăn chuyển Testosteron thành Dihydrotestosteron DHT",
      "Aromatase",
      "Phosphodiesterase typ 5",
      "Tyrosin kinase"
    ],
    "correct": 0,
    "explanation": "Finasterid và Dutasterid ức chế enzym 5-alpha reductase, ngăn cản sự chuyển đổi testosteron thành dihydrotestosteron (DHT - hormon kích thích trực tiếp sự tăng sinh tế bào tuyến tiền liệt và teo nang tóc), làm giảm kích thước u xơ tiền liệt tuyến và kích thích mọc tóc.",
    "reference": "Sách Dược lý 2 tr. 318"
  },
  {
    "id": 473,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Anastrozol và Letrozol là thuốc thuộc nhóm ức chế enzym nào được dùng trong điều trị ung thư vú sau mãn kinh?",
    "options": [
      "Ức chế men chuyển ACE",
      "Ức chế enzym Topoisomerase",
      "Ức chế enzym Protease",
      "Ức chế enzym Aromatase ngăn cản tổng hợp Estrogen từ androgen ở mô ngoại vi"
    ],
    "correct": 3,
    "explanation": "Ở phụ nữ mãn kinh, estrogen được tổng hợp chủ yếu ở mô mỡ ngoại vi nhờ enzym aromatase chuyển đổi androgen thượng thận thành estrogen. Các chất ức chế aromatase (Anastrozol, Letrozol) làm giảm nồng độ estrogen huyết thanh tới trên 95%, làm teo tế bào ung thư vú phụ thuộc estrogen.",
    "reference": "Sách Dược lý 2 tr. 320"
  },
  {
    "id": 474,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Glimepirid là thuốc hạ đường huyết nhóm Sulfonylurea thế hệ 2 có ưu điểm nào sau đây?",
    "options": [
      "Không bao giờ gây tác dụng phụ hạ đường huyết",
      "Có tác dụng kéo dài suốt 24 giờ cho phép dùng liều duy nhất mỗi ngày một lần và ít gây kiệt quệ tế bào beta",
      "Chỉ có tác dụng khi tiêm bắp",
      "Dùng được cho bệnh nhân đái tháo đường typ 1"
    ],
    "correct": 1,
    "explanation": "Glimepirid gắn và tách khỏi thụ thể SUR nhanh hơn glibenclamid, có hoạt lực mạnh, thời gian tác dụng kéo dài 24 giờ cho phép uống 1 lần mỗi ngày trước bữa ăn sáng, ít gây hạ đường huyết nghiêm trọng hơn glibenclamid.",
    "reference": "Sách Dược lý 2 tr. 297"
  },
  {
    "id": 475,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng phụ thường gặp nhất của nhóm thuốc ức chế kênh SGLT2 (Dapagliflozin, Empagliflozin) là gì do tăng đào thải glucose qua nước tiểu?",
    "options": [
      "Nhiễm nấm sinh dục và nhiễm trùng đường tiết niệu",
      "Tăng cân béo phì dữ dội",
      "Gây phù mắt cá chân hai bên",
      "Gây suy tủy xương"
    ],
    "correct": 0,
    "explanation": "Do nồng độ glucose trong nước tiểu tăng rất cao (đào thải 70-100g đường/ngày), môi trường đường ngọt ở đường tiết niệu và vùng sinh dục tạo điều kiện thuận lợi cho nấm Candida và vi khuẩn phát triển, gây viêm âm đạo, viêm quy đầu và nhiễm trùng tiểu.",
    "reference": "Sách Dược lý 2 tr. 301"
  },
  {
    "id": 476,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Men Prothrombin trong chuỗi đông máu huyết tương được enzym chuyển đổi thành chất nào đóng vai trò trung tâm biến đổi fibrinogen thành fibrin?",
    "options": [
      "Kallikrein",
      "Thrombin",
      "Antithrombin",
      "Plasmin"
    ],
    "correct": 1,
    "explanation": "Prothrombin (Yếu tố II) dưới sự xúc tác của phức hợp prothrombinase (Yếu tố Xa, Va, phospholipid và Ca2+) bị cắt chuỗi peptid tạo thành Thrombin (Yếu tố IIa). Thrombin là enzym xúc tác phân cắt fibrinogen hòa tan thành các sợi fibrin không tan tạo cục máu đông.",
    "reference": "Sách Dược lý 2 tr. 113, 115"
  },
  {
    "id": 477,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Enoxaparin là thuốc chống đông Heparin trọng lượng phân tử thấp (LMWH) có trọng lượng phân tử trung bình khoảng bao nhiêu Dalton?",
    "options": [
      "Khoảng 4.500 Dalton",
      "Dưới 500 Dalton",
      "Khoảng 15.000 đến 30.000 Dalton",
      "Trên 100.000 Dalton"
    ],
    "correct": 0,
    "explanation": "Heparin tiêu chuẩn (UFH) có trọng lượng phân tử từ 12.000 đến 15.000 Da. Bằng phương pháp phân đoạn hoặc giải trùng hợp, Enoxaparin thu được chuỗi ngắn hơn với trọng lượng phân tử trung bình khoảng 4.500 Da, làm tăng tính chọn lọc trên yếu tố Xa.",
    "reference": "Sách Dược lý 2 tr. 117"
  },
  {
    "id": 478,
    "subject": "duocly2",
    "chapter": "Vitamin",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân có biểu hiện viêm lợi chảy máu chân răng, các vết bầm tím xuất huyết dưới da tự phát và vết thương lâu liền sẹo là triệu chứng của bệnh gì?",
    "options": [
      "Bệnh Pellagra do thiếu Vitamin PP",
      "Bệnh Scorbut do thiếu hụt Vitamin C",
      "Bệnh còi xương do thiếu Vitamin D",
      "Bệnh Beriberi do thiếu Vitamin B1"
    ],
    "correct": 1,
    "explanation": "Bệnh Scorbut (Scurvy) là bệnh kinh điển do thiếu vitamin C dài ngày (thường gặp ở thủy thủ trước đây do ăn thiếu rau tươi), làm giảm tổng hợp collagen thành mạch gây chảy máu nướu răng, rụng răng, xuất huyết dưới màng xương và suy giảm miễn dịch.",
    "reference": "Sách Dược lý 2 tr. 336-337"
  },
  {
    "id": 479,
    "subject": "duocly2",
    "chapter": "Vitamin",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Vitamin nào sau đây còn được gọi là Vitamin H hoặc Coenzym R, tham gia vào các phản ứng carboxyl hóa trong chuyển hóa mỡ và acid amin?",
    "options": [
      "Biotin",
      "Riboflavin",
      "Thiamin",
      "Tocopherol"
    ],
    "correct": 0,
    "explanation": "Biotin (Vitamin B8 hoặc Vitamin B7, trước đây gọi là Vitamin H) là coenzym của các enzym carboxylase xúc tác gắn CO2 trong chuyển hóa glucid, lipid và tân tạo đường, thiếu biotin gây rụng tóc, viêm da tróc vảy quanh mắt mũi miệng.",
    "reference": "Sách Dược lý 2 tr. 333"
  },
  {
    "id": 480,
    "subject": "duocly2",
    "chapter": "Thuốc chữa thiếu máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Chỉ số thể tích trung bình hồng cầu (MCV) ở bệnh nhân thiếu máu do thiếu Sắt và thiếu máu do thiếu Vitamin B12 / Acid folic có sự khác biệt như thế nào?",
    "options": [
      "Cả hai bệnh đều có MCV hoàn toàn bình thường",
      "Thiếu sắt có MCV giảm dưới 80 fL, còn thiếu B12/Folate có MCV tăng trên 100 fL",
      "Chỉ số MCV không có giá trị phân biệt hai bệnh này",
      "Thiếu sắt có MCV tăng rất cao, thiếu B12 có MCV giảm"
    ],
    "correct": 1,
    "explanation": "Thiếu sắt làm tủy xương không đủ nguyên liệu tạo hemoglobin nên tế bào hồng cầu bị nhỏ lại và nhược sắc (MCV < 80 fL, MCHC giảm). Ngược lại, thiếu B12 hoặc acid folic làm chậm phân chia nhân trong khi bào tương vẫn phát triển, tạo ra các hồng cầu khổng lồ dị dạng (MCV > 100 fL).",
    "reference": "Sách Dược lý 2 tr. 127-128"
  },
  {
    "id": 481,
    "subject": "duocly2",
    "chapter": "Thuốc chữa thiếu máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng không mong muốn thường gặp nhất khi tiêm thuốc kích thích sinh hồng cầu Erythropoietin (EPO) là gì cần theo dõi huyết áp?",
    "options": [
      "Tụt huyết áp trụy mạch",
      "Hạ canxi máu nặng",
      "Khởi phát hoặc làm nặng thêm tình trạng tăng huyết áp",
      "Gây loét dạ dày xuất huyết"
    ],
    "correct": 2,
    "explanation": "EPO kích thích tủy xương làm tăng nhanh số lượng hồng cầu và tăng độ quánh của máu, đồng thời có tác dụng co mạch trực tiếp, dẫn tới làm tăng huyết áp ở khoảng 20-30% bệnh nhân suy thận mạn tính, cần kiểm soát huyết áp chặt chẽ.",
    "reference": "Sách Dược lý 2 tr. 130"
  },
  {
    "id": 482,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc kháng HIV nhóm ức chế men Protease (PI như Ritonavir, Lopinavir) ngăn chặn quá trình nào trong vòng đời của virus?",
    "options": [
      "Ức chế sự hòa màng của virus",
      "Phá hủy chuỗi ARN thông tin của tế bào người",
      "Ức chế enzym protease cắt các chuỗi polyprotein gag-pol dài thành các protein chức năng cấu trúc của hạt virus trưởng thành",
      "Ngăn cản virus bám vào tế bào lympho T"
    ],
    "correct": 2,
    "explanation": "Khi hạt virus HIV mới nhân lên nảy chồi ra khỏi tế bào, các protein của virus nằm ở dạng chuỗi dài chưa hoạt động (polyprotein). Enzym protease của virus cắt chuỗi này để tạo thành các hạt virus hoàn chỉnh có khả năng lây nhiễm. Thuốc PI ức chế khâu này làm hạt virus sinh ra bị non và không có khả năng lây nhiễm.",
    "reference": "Sách Dược lý 2 tr. 239"
  },
  {
    "id": 483,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng phụ gây rối loạn phân bố mỡ (Lipodystrophy - teo mỡ ở mặt chi và tích tụ mỡ ở bụng, gáy tạo bướu trâu) là đặc trưng của nhóm thuốc điều trị HIV nào?",
    "options": [
      "Thuốc ức chế men tích hợp integrase INSTI",
      "Interferon tiêm dưới da",
      "Thuốc ức chế men Protease PI",
      "Thuốc kháng virus cúm oseltamivir"
    ],
    "correct": 2,
    "explanation": "Dùng thuốc nhóm PI (và một số NRTI cũ) kéo dài gây hội chứng rối loạn phân bố mỡ (lipodystrophy): teo mô mỡ dưới da vùng mặt, mông và các chi khiến chi gầy guộc lộ mạch máu, trong khi lại tích tụ mỡ nội tạng ở bụng và vùng gáy (bướu trâu), kèm kháng insulin và tăng mỡ máu.",
    "reference": "Sách Dược lý 2 tr. 239"
  },
  {
    "id": 484,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc chống ung thư nào sau đây làm tăng thoái hóa acid uric để phòng ngừa hội chứng ly giải khối u cấp tính (Tumor Lysis Syndrome)?",
    "options": [
      "Cisplatin",
      "Vincristin",
      "Rasburicase",
      "Methotrexat"
    ],
    "correct": 2,
    "explanation": "Hội chứng ly giải u giải phóng ồ ạt acid uric làm tắc ống thận gây suy thận cấp. Rasburicase là enzym urat oxidase tái tổ hợp xúc tác chuyển đổi acid uric thành allantoin tan trong nước gấp 10 lần và dễ dàng đào thải qua thận, bảo vệ thận hiệu quả.",
    "reference": "Sách Dược lý 2 tr. 263"
  },
  {
    "id": 485,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc chống nôn Ondansetron và Granisetron được sử dụng phổ biến trong phác đồ hóa trị ung thư tác động theo cơ chế thụ thể nào?",
    "options": [
      "Kích thích thụ thể Dopamin D2",
      "Ức chế thụ thể Mu-opioid",
      "Đối kháng chọn lọc tại thụ thể Serotonin 5-HT3 ở trung tâm nôn hành não và tận cùng thần kinh phế vị đường tiêu hóa",
      "Phong bế thụ thể Histamin H2"
    ],
    "correct": 2,
    "explanation": "Thuốc hóa chất ung thư (đặc biệt là Cisplatin) làm tế bào ưa crom ở ruột giải phóng ồ ạt serotonin kích thích thụ thể 5-HT3 truyền tín hiệu về trung tâm nôn ở sàn não thất IV. Ondansetron đối kháng chọn lọc thụ thể 5-HT3 dập tắt phản xạ nôn rất hiệu quả.",
    "reference": "Sách Dược lý 2 tr. 250"
  },
  {
    "id": 486,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Chất giải độc đặc hiệu Deferoxamin (Desferal) tạo phức với ion sắt Fe3+ theo tỷ lệ phân tử nào?",
    "options": [
      "Không tạo phức mà chỉ oxy hóa sắt",
      "Hai phân tử gắn một ion sắt",
      "Một phân tử gắn mười ion sắt",
      "Một phân tử Deferoxamin gắn kết với một ion Fe3+ tạo phức chelat ổn định"
    ],
    "correct": 3,
    "explanation": "Mỗi phân tử Deferoxamin có 3 nhóm hydroxamic tạo cấu trúc càng cua (octahedral) bọc kín 1 ion sắt ba (Fe3+) với ái lực rất cao (hằng số bền 10^31), tạo phức chất ferrioxamin màu đỏ hòa tan trong nước và bài xuất ra ngoài theo nước tiểu.",
    "reference": "Sách Dược lý 2 tr. 127, 353"
  },
  {
    "id": 487,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hội chứng ngộ độc cấp tính do thuốc trừ sâu Phospho hữu cơ gồm hai hội chứng lâm sàng kinh điển nào?",
    "options": [
      "Hội chứng Cushing và hội chứng Addison",
      "Hội chứng Muscarinic và Hội chứng Nicotinic",
      "Hội chứng đông máu rải rác và sốt cao ác tính",
      "Hội chứng suy tủy và hội chứng tăng huyết áp"
    ],
    "correct": 1,
    "explanation": "Phospho hữu cơ ức chế enzym acetylcholinesterase làm acetylcholin tích tụ ồ ạt ở các synap, gây 2 hội chứng chính: Hội chứng cường muscarinic (co đồng tử, vã mồ hôi, ứ đọng đờm dãi, nhịp chậm) và Hội chứng nicotinic (rung giật bó cơ ngực bụng, liệt cơ hoành và cơ liên sườn).",
    "reference": "Sách Dược lý 2 tr. 351, 359"
  },
  {
    "id": 488,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng của thuốc chống sốt rét Primaquin trên thể giao bào (gametocyte) của P. falciparum có ý nghĩa dịch tễ học gì?",
    "options": [
      "Giúp tăng sinh tế bào gan",
      "Làm giảm thân nhiệt bệnh nhân ngay lập tức",
      "Tiêu diệt muỗi hút máu",
      "Tiêu diệt thể giao bào làm cắt đứt sự lây truyền mầm bệnh sang muỗi Anopheles"
    ],
    "correct": 3,
    "explanation": "Primaquin là thuốc duy nhất có khả năng tiêu diệt nhanh chóng thể giao bào (gametocyte) của tất cả các loài Plasmodium (kể cả P. falciparum), ngăn cản muỗi hút máu truyền bệnh sang người khác, có ý nghĩa chiến lược trong dập dịch và thanh toán sốt rét.",
    "reference": "Sách Dược lý 2 tr. 201"
  },
  {
    "id": 489,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong các thuốc chống sốt rét, thuốc nào sau đây bị chống chỉ định tuyệt đối cho phụ nữ đang mang thai ở mọi thời kỳ?",
    "options": [
      "Primaquin",
      "Quinin",
      "Artesunat",
      "Cloroquin"
    ],
    "correct": 0,
    "explanation": "Primaquin qua nhau thai vào tuần hoàn thai nhi. Do hệ thống enzym G6PD của thai nhi chưa hoàn thiện, thuốc gây tan máu cấp tính và tử vong thai nhi trong tử cung. Chống chỉ định tuyệt đối cho phụ nữ mang thai.",
    "reference": "Sách Dược lý 2 tr. 201"
  },
  {
    "id": 490,
    "subject": "duocly2",
    "chapter": "KTGHP",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân nam 68 tuổi bị suy tim sung huyết đang dùng Enalapril và Spironolacton. Bác sĩ kê thêm viên Kali clorid (KCl) để bồi phụ. Nguy cơ nguy hiểm nhất đe dọa ngừng tim là gì?",
    "options": [
      "Hạ kali máu nặng",
      "Nhiễm kiềm chuyển hóa",
      "Tụt huyết áp do mất nước",
      "Tăng kali máu kịch phát gây loạn nhịp thất chết người hoặc ngừng tim tâm trương"
    ],
    "correct": 3,
    "explanation": "Cả ACEI (Enalapril làm giảm aldosteron) và Spironolacton (kháng aldosteron) đều giữ kali lại trong máu. Dùng thêm chế phẩm bù Kali clorid ngoại sinh sẽ làm nồng độ K+ máu tăng vọt gây ngừng tim đột ngột.",
    "reference": "Sách Dược lý 2 tr. 68, 87"
  },
  {
    "id": 491,
    "subject": "duocly2",
    "chapter": "KTGHP",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân nam 58 tuổi đang điều trị tăng huyết áp bằng Amlodipin. Bệnh nhân bị nhiễm khuẩn răng miệng và được nha sĩ kê Erythromycin. Hiện tượng gì xảy ra do tương tác thuốc?",
    "options": [
      "Erythromycin ức chế enzym CYP3A4 làm tăng nồng độ Amlodipin dẫn tới tụt huyết áp và nhức đầu dữ dội",
      "Gây loét niêm mạc lưỡi hoại tử",
      "Erythromycin làm mất tác dụng của Amlodipin",
      "Amlodipin làm mất tác dụng kháng khuẩn của Erythromycin"
    ],
    "correct": 0,
    "explanation": "Erythromycin là chất ức chế enzym CYP3A4 ở gan. Amlodipin chuyển hóa qua CYP3A4. Phối hợp hai thuốc làm giảm chuyển hóa Amlodipin, nồng độ Amlodipin máu tăng cao gây tụt huyết áp sâu, bốc hỏa, phù chân.",
    "reference": "Sách Dược lý 2 tr. 64, 160"
  },
  {
    "id": 492,
    "subject": "duocly2",
    "chapter": "KTGHP",
    "level": "Vận dụng cao",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân nữ 42 tuổi bị viêm khớp dạng thấp đang uống Dexamethason kéo dài. Bác sĩ kê thêm Ibuprofen để giảm đau khớp. Nguy cơ tai biến tiêu hóa tăng gấp bao nhiêu lần?",
    "options": [
      "Làm giảm nguy cơ loét do hai thuốc trung hòa nhau",
      "Gây liệt ruột cơ học",
      "Không làm tăng nguy cơ loét",
      "Tăng nguy cơ loét và xuất huyết tiêu hóa lên gấp 4 đến 10 lần so với dùng đơn độc"
    ],
    "correct": 3,
    "explanation": "Cả Corticoid và NSAID đều ức chế tổng hợp prostaglandin bảo vệ niêm mạc dạ dày (corticoid ức chế phospholipase A2, NSAID ức chế COX). Dùng đồng thời hai thuốc gây hiệp đồng hủy hoại niêm mạc, làm tăng nguy cơ loét và thủng dạ dày lên gấp 4-10 lần.",
    "reference": "Sách Dược lý 2 tr. 267, 288"
  },
  {
    "id": 493,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thời gian bán thải sinh học trong huyết tương của phân tử Insulin tự nhiên là khoảng bao lâu?",
    "options": [
      "Khoảng 5 đến 10 phút",
      "Chỉ khoảng 30 giây",
      "Khoảng 12 đến 24 giờ",
      "Khoảng 3 đến 5 ngày"
    ],
    "correct": 0,
    "explanation": "Insulin tự do trong tuần hoàn máu bị enzym insulinase ở gan và thận phân hủy rất nhanh, có thời gian bán thải chỉ từ 5 đến 10 phút. Tác dụng kéo dài của các chế phẩm tiêm là do quá trình giải phóng và hấp thu chậm từ mô dưới da.",
    "reference": "Sách Dược lý 2 tr. 294"
  },
  {
    "id": 494,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Insulin Glulisine là một analog insulin tác dụng cực nhanh có sự thay đổi acid amin nào trong chuỗi?",
    "options": [
      "Gắn thêm chuỗi acid béo myristic",
      "Đảo vị trí prolin và lysin ở chuỗi B",
      "Thêm hai phân tử arginin vào chuỗi B",
      "Acid amin asparagin ở vị trí B3 được thay bằng lysin và lysin ở vị trí B29 được thay bằng acid glutamic"
    ],
    "correct": 3,
    "explanation": "Insulin Glulisine (Apidra) được tạo ra bằng công nghệ tái tổ hợp ADN: thay thế asparagin B3 bằng lysin và thay thế lysin B29 bằng acid glutamic, giúp phân tử phân ly nhanh thành monomer và hấp thu cực nhanh.",
    "reference": "Sách Dược lý 2 tr. 296"
  },
  {
    "id": 495,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc chống đông máu nào sau đây là thuốc an toàn được lựa chọn hàng đầu cho phụ nữ mang thai cần điều trị hoặc dự phòng huyết khối tĩnh mạch sâu?",
    "options": [
      "Aspirin liều cao",
      "Dabigatran",
      "Heparin trọng lượng phân tử thấp",
      "Warfarin đường uống"
    ],
    "correct": 2,
    "explanation": "Heparin tiêu chuẩn và LMWH (Enoxaparin) là các phân tử polysaccharid lớn mang điện tích âm mạnh, không qua được hàng rào nhau thai nên an toàn tuyệt đối cho thai nhi. Warfarin qua nhau thai gây dị tật thai nhi nặng và xuất huyết thai.",
    "reference": "Sách Dược lý 2 tr. 118, 120"
  },
  {
    "id": 496,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Men Plasmin trong hệ tiêu sợi huyết có chức năng sinh học là gì?",
    "options": [
      "Tổng hợp các sợi collagen",
      "Chuyển prothrombin thành thrombin",
      "Cắt nhỏ mạng lưới fibrin và fibrinogen thành các mảnh FDP và D-dimer làm tan cục máu đông",
      "Kích hoạt ngưng tập tiểu cầu"
    ],
    "correct": 2,
    "explanation": "Plasmin là enzym tiêu protein nội sinh. Khi được hoạt hóa từ plasminogen, plasmin cắt đứt các liên kết peptid trong mạng lưới sợi fibrin và fibrinogen, giải phóng các đoạn phân đoạn D-dimer và FDP, làm tan rã cục huyết khối.",
    "reference": "Sách Dược lý 2 tr. 113, 125"
  },
  {
    "id": 497,
    "subject": "duocly2",
    "chapter": "Thuốc chữa thiếu máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong cơ thể người, nhu cầu hấp thu sắt sinh lý hàng ngày ở người trưởng thành bình thường là khoảng bao nhiêu?",
    "options": [
      "Khoảng 10 gram mỗi ngày",
      "Khoảng 500 mg mỗi ngày",
      "Khoảng 1 đến 2 mg mỗi ngày",
      "Khoảng 50 đến 100 mg mỗi ngày"
    ],
    "correct": 2,
    "explanation": "Cơ thể chỉ mất một lượng nhỏ sắt hàng ngày (khoảng 1 mg ở nam và 1,5 - 2 mg ở nữ do kinh nguyệt) qua tế bào ruột bong tróc và mồ hôi. Khẩu phần ăn cung cấp khoảng 10-20 mg sắt nhưng ruột chỉ hấp thu khoảng 10% (1 - 2 mg/ngày).",
    "reference": "Sách Dược lý 2 tr. 127"
  },
  {
    "id": 498,
    "subject": "duocly2",
    "chapter": "Thuốc chữa thiếu máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Vitamin B12 trong thức ăn sau khi vào dạ dày kết hợp với Yếu tố nội tại (Intrinsic Factor) tạo phức hợp được hấp thu tại đoạn nào của ống tiêu hóa?",
    "options": [
      "Đoạn đầu hỗng tràng",
      "Hành tá tràng",
      "Đoạn cuối hồi tràng",
      "Manh tràng ruột già"
    ],
    "correct": 2,
    "explanation": "Phức hợp Vitamin B12 - Yếu tố nội tại di chuyển dọc theo ruột non mà không bị enzym tiêu hóa phá hủy, đến đoạn cuối hồi tràng (terminal ileum) thì gắn vào thụ thể đặc hiệu cubilin trên tế bào biểu mô và được ẩm bào vào máu.",
    "reference": "Sách Dược lý 2 tr. 128"
  },
  {
    "id": 499,
    "subject": "duocly2",
    "chapter": "Thuốc chữa thiếu máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thiếu Acid folic ở người lớn chủ yếu do nguyên nhân nào sau đây?",
    "options": [
      "Do di truyền trên nhiễm sắc thể giới tính X",
      "Do uống nhiều nước lọc",
      "Chế độ ăn thiếu rau xanh, hoa quả tươi hoặc do nghiện rượu mạn tính và hội chứng kém hấp thu",
      "Do cơ thể tiết quá nhiều enzym gan"
    ],
    "correct": 2,
    "explanation": "Dự trữ acid folic trong gan rất ít (chỉ đủ dùng trong 2-4 tháng). Do đó chế độ ăn kiêng khem thiếu rau tươi lá xanh, người nghiện rượu (rượu cản trở chu trình gan ruột của folate) hoặc bệnh ruột non gây thiếu hụt acid folic rất nhanh.",
    "reference": "Sách Dược lý 2 tr. 129"
  },
  {
    "id": 500,
    "subject": "duocly2",
    "chapter": "Vitamin",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Vitamin K1 (Phylloquinon) có nhiều nhất trong nhóm thực phẩm nào sau đây?",
    "options": [
      "Các loại rau có lá màu xanh đậm",
      "Các loại thịt đỏ như thịt bò, thịt cừu",
      "Dầu cá và mỡ động vật",
      "Các loại hạt ngũ cốc tinh chế"
    ],
    "correct": 0,
    "explanation": "Phylloquinon (Vitamin K1) được tổng hợp bởi thực vật quang hợp, có hàm lượng rất phong phú trong các loại rau lá xanh (rau bina, cải xoăn, súp lơ xanh, mùi tây) và một số loại dầu thực vật (dầu đậu nành, dầu canola).",
    "reference": "Sách Dược lý 2 tr. 326"
  },
  {
    "id": 501,
    "subject": "duocly2",
    "chapter": "Vitamin",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Vitamin D3 (Cholecalciferol) trong sữa và dầu gan cá hấp thu tốt nhất tại ruột non nhờ sự hỗ trợ của yếu tố nào?",
    "options": [
      "Yếu tố nội tại Castle",
      "Muối mật và các acid béo trong bữa ăn",
      "Enzym amylase nước bọt",
      "Acid chlohydric dịch vị"
    ],
    "correct": 1,
    "explanation": "Là một vitamin tan trong dầu, Vitamin D cần có acid mật và enzym lipase tụy để tạo các hạt mixen hòa tan khuếch tán qua niêm mạc ruột non. Do đó uống vitamin D cùng bữa ăn có chất béo giúp tăng hấp thu tối đa.",
    "reference": "Sách Dược lý 2 tr. 325"
  },
  {
    "id": 502,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc kháng virus Ganciclovir có độc tính ức chế tủy xương phụ thuộc liều, nguy cơ này tăng cao khi phối hợp cùng thuốc kháng HIV nào?",
    "options": [
      "Zidovudin AZT",
      "Nevirapin",
      "Efavirenz",
      "Tenofovir"
    ],
    "correct": 0,
    "explanation": "Cả Ganciclovir và Zidovudin (AZT) đều có độc tính ức chế tủy xương nghiêm trọng. Khi phối hợp cùng lúc ở bệnh nhân HIV có nhiễm CMV, tỷ lệ giảm bạch cầu hạt và thiếu máu nặng tăng lên rất cao (thường phải thay AZT bằng Tenofovir hoặc Abacavir).",
    "reference": "Sách Dược lý 2 tr. 233, 238"
  },
  {
    "id": 503,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Penciclovir và Famciclovir là thuốc kháng virus thuộc nhóm tương tự nucleosid có chỉ định điều trị bệnh do virus nào?",
    "options": [
      "Virus Cúm lợn",
      "Virus Herpes Simplex HSV và Thủy đậu - Zona VZV",
      "Virus Bại liệt",
      "Virus Viêm gan A"
    ],
    "correct": 1,
    "explanation": "Famciclovir là tiền chất đường uống dạng diacetyl của Penciclovir. Thuốc được phosphoryl hóa bởi thymidine kinase của virus Herpes, có thời gian bán hủy nội bào rất dài (7-20 giờ), đặc trị nhiễm HSV tái phát và bệnh Zona thần kinh.",
    "reference": "Sách Dược lý 2 tr. 233"
  },
  {
    "id": 504,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Phức hợp Platin Cisplatin gắn cộng hóa trị vào ADN tế bào ung thư chủ yếu tạo liên kết chéo ở vị trí nào?",
    "options": [
      "Đường deoxyribose",
      "Nguyên tử N7 của hai gốc Guanin liền kề trên cùng một sợi hoặc hai sợi đối diện của ADN",
      "Gốc phosphat ở đầu 5'",
      "Liên kết hydro giữa adenin và thymin"
    ],
    "correct": 1,
    "explanation": "Cisplatin sau khi vào tế bào bị thủy phân mất hai nguyên tử clo, nguyên tử platin tích điện dương gắn cộng hóa trị vào nguyên tử N7 của guanin, tạo liên kết chéo nội sợi (intrastrand crosslink 90%) hoặc liên kết chéo liên sợi làm biến dạng ADN và kích hoạt apoptosis.",
    "reference": "Sách Dược lý 2 tr. 248"
  },
  {
    "id": 505,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc chống ung thư Capecitabin (Xeloda) là tiền chất đường uống trong cơ thể chuyển hóa qua 3 bước enzym tại mô khối u để tạo thành chất có hoạt tính nào?",
    "options": [
      "Cisplatin",
      "Cytarabin",
      "Methotrexat",
      "5-Fluorouracil 5-FU"
    ],
    "correct": 3,
    "explanation": "Capecitabin là tiền chất fluoropyrimidin đường uống. Tại mô khối u, nồng độ enzym thymidine phosphorylase cao gấp nhiều lần mô lành sẽ chuyển đổi capecitabin thành 5-FU có hoạt tính, giúp nhắm đích khối u và hạn chế độc tính toàn thân.",
    "reference": "Sách Dược lý 2 tr. 246"
  },
  {
    "id": 506,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thời điểm vàng đạt hiệu quả cao nhất để rửa dạ dày loại bỏ độc chất sau khi bệnh nhân uống phải chất độc là bao lâu?",
    "options": [
      "Sau khi chất độc đã ngấm vào các tạng",
      "Trong vòng 1 giờ đầu tiên sau khi uống",
      "Sau 12 đến 24 giờ",
      "Sau 3 ngày"
    ],
    "correct": 1,
    "explanation": "Hiệu quả loại bỏ chất độc bằng rửa dạ dày giảm rất nhanh theo thời gian: sau 1 giờ chỉ lấy được khoảng 30-50% chất độc, sau 2 giờ chỉ còn dưới 10-15%. Do đó rửa dạ dày chỉ được khuyến cáo khi bệnh nhân đến sớm trong vòng 60 phút đầu.",
    "reference": "Sách Dược lý 2 tr. 355"
  },
  {
    "id": 507,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Khi tiêm tĩnh mạch Naloxon để cấp cứu ngộ độc Opioid, thời gian duy trì tác dụng của Naloxon ngắn hơn thời gian tác dụng của morphin và methadon, dẫn tới nguy cơ gì cần theo dõi?",
    "options": [
      "Gây rụng tóc",
      "Gây suy tủy xương",
      "Gây tăng huyết áp vĩnh viễn",
      "Hiện tượng tái hôn mê và ức chế hô hấp quay trở lại sau khi hết tác dụng của Naloxon"
    ],
    "correct": 3,
    "explanation": "Naloxon có thời gian bán thải chỉ 30-90 phút trong khi Morphin tác dụng 4-6 giờ và Methadon tác dụng 24-36 giờ. Sau khi tiêm naloxon bệnh nhân tỉnh lại nhưng khi thuốc hết tác dụng, morphin còn lại lại gắn vào thụ thể gây tái ức chế hô hấp và hôn mê, cần theo dõi liên tục ít nhất 4-6 giờ.",
    "reference": "Sách Dược lý 2 tr. 361"
  }
];

// Cấu trúc phân bổ 60 câu thi chuẩn 60 phút theo khung 32 tiết:
const DUOCLY2_MATRIX_32H = [
  { chapter: "Thuốc trợ tim", lesson: "Bài 1", hours: 2, count: 4 },
  { chapter: "Thuốc điều trị THA", lesson: "Bài 2", hours: 2, count: 4 },
  { chapter: "Thuốc chữa CĐTN", lesson: "Bài 3", hours: 1, count: 2 },
  { chapter: "Thuốc chống loạn nhịp", lesson: "Bài 4", hours: 1, count: 2 },
  { chapter: "Thuốc lợi niệu", lesson: "Bài 5", hours: 2, count: 4 },
  { chapter: "Thuốc điều trị DDTT", lesson: "Bài 6", hours: 2, count: 4 },
  { chapter: "Thuốc chống giun sán, amibe", lesson: "Bài 7", hours: 2, count: 4 },
  { chapter: "Thuốc ĐC RLHH", lesson: "Bài 8", hours: 1, count: 2 },
  { chapter: "Thuốc kháng H1", lesson: "Bài 9", hours: 1, count: 2 },
  { chapter: "Thuốc hạ lipid máu", lesson: "Bài 10", hours: 2, count: 4 },
  { chapter: "Thuốc chống sốt rét", lesson: "Bài 11", hours: 2, count: 4 },
  { chapter: "KTGHP", lesson: "Bài 12", hours: 1, count: 2 },
  { chapter: "Hormon", lesson: "Bài 13", hours: 3, count: 6 },
  { chapter: "Thuốc hạ glucose máu", lesson: "Bài 14", hours: 2, count: 4 },
  { chapter: "Thuốc/QT đông cầm máu", lesson: "Bài 15", hours: 2, count: 4 },
  { chapter: "Vitamin", lesson: "Bài 16", hours: 0, count: 2 },
  { chapter: "Thuốc chữa thiếu máu", lesson: "Bài 17", hours: 2, count: 3 },
  { chapter: "Thuốc kháng virus", lesson: "Bài 18", hours: 2, count: 4 },
  { chapter: "Thuốc chống ung thư", lesson: "Bài 19", hours: 1, count: 2 },
  { chapter: "Thuốc/trong điều trị ngộ độc", lesson: "Bài 20", hours: 1, count: 3 }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DUOCLY2_EXAM_BANK, DUOCLY2_MATRIX_32H };
}
