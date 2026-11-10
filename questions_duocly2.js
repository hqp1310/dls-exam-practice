/**
 * NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM DƯỢC LÝ 2 (CHUẨN BỘ Y TẾ)
 * Khung 20 bài giảng chính khóa (32 tiết) - 507 câu hỏi chuẩn hóa
 */

const DUOCLY2_EXAM_BANK = [
  {
    "id": 1,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Một hoạt chất trợ tim kinh điển có nguồn gốc thực vật từ cây Dương địa hoàng được phân lập để sử dụng trong điều trị suy tim sung huyết mạn tính. Loài thực vật nào sau đây là nguồn gốc chiết xuất chính cung cấp phân tử Digoxin có độ tan trung bình trong nước và bài xuất chủ yếu qua thận?",
    "options": [
      "Strophanthus kombe cung cấp glycosid nhóm G tan mạnh trong lipid",
      "Digitalis purpurea chiết xuất ra Digitoxin có chu kỳ gan - ruột kéo dài",
      "Digitalis lanata cung cấp dẫn xuất acetyl được thủy phân thành Digoxin",
      "Rauwolfia serpentina cung cấp alkaloid ức chế bọc dự trữ noradrenalin"
    ],
    "correct": 2,
    "explanation": "Digoxin được chiết xuất chủ yếu từ lá cây Dương địa hoàng lông Digitalis lanata (thông qua dẫn xuất lanatosid C rồi khử acetyl thành digoxin). Trong khi Digitalis purpurea (Dương địa hoàng tía) chiết xuất chủ yếu Digitoxin.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 2,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Phân tử glycosid tim cấu tạo gồm phần aglycon (genin) gắn với chuỗi đường ose qua cầu nối glycosid. Khi khảo sát mối liên quan giữa cấu trúc hóa học và tác dụng sinh học, cấu trúc nào đóng vai trò cốt lõi quyết định trực tiếp lực co bóp cơ tim và độc tính của thuốc?",
    "options": [
      "Chuỗi oligosaccharid quyết định ái lực liên kết với thụ thể tại cầu nối màng tế bào",
      "Nhân steroid mang vòng lacton không no ở vị trí C17 và nhóm OH ở vị trí C14",
      "Nhóm thế hydroxyl ở vị trí C3 tạo liên kết hydro nội phân tử với kênh calci",
      "Số lượng gốc đường digitoxose quyết định khả năng kích hoạt trực tiếp adenylcyclase"
    ],
    "correct": 1,
    "explanation": "Phần không đường (aglycon/genin) mang khung steroid (cyclopentanoperhydrophenanthren) gắn vòng lacton không bão hòa ở C17 và nhóm OH hướng beta ở C14 quyết định tác dụng trợ tim và độc tính. Phần đường chỉ ảnh hưởng dược động học (độ tan, hấp thu, liên kết protein).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 3,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Một bệnh nhân suy tim tâm thu điều trị bằng thuốc làm tăng co bóp cơ tim. Tại màng sợi cơ tim, phân tử thuốc tác động ức chế đích sinh học nào để kích hoạt chuỗi phản ứng dẫn đến tích lũy ion calci tự do trong bào tương?",
    "options": [
      "Ức chế thuận nghịch enzym Na+/K+-ATPase tại mặt ngoài màng tế bào cơ tim",
      "Kích thích kênh đồng vận chuyển 3Na+/1Ca2+ đưa trực tiếp calci ngoại bào vào tế bào",
      "Ức chế thụ thể ryanodine trên màng lưới nội chất làm giải phóng calci dự trữ",
      "Kích hoạt trực tiếp enzym phosphodiesterase-3 trong bào tương sợi cơ tim"
    ],
    "correct": 0,
    "explanation": "Digoxin ức chế chọn lọc bơm Na+/K+-ATPase làm tăng Na+ nội bào. Sự tăng Na+ nội bào làm suy giảm gradient nồng độ dẫn tới ức chế bơm trao đổi Na+/Ca2+ (hoặc đảo chiều bơm), giảm thải Ca2+ ra ngoài, làm tích tụ Ca2+ tự do trong bào tương gắn vào troponin C tăng lực co cơ.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 4,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng huyết động học và điện sinh lý cơ tim của Glycosid tim khi dùng ở liều điều trị tối ưu thường được đúc kết qua quy luật biến đổi nào sau đây?",
    "options": [
      "Tăng nhịp xoang, tăng tốc độ dẫn truyền nhĩ thất, tăng nhu cầu tiêu thụ oxy cơ tim",
      "Tăng tính kích thích thất, rút ngắn thời gian tâm trương, giãn động mạch vành",
      "Giảm tính tự động nút xoang, tăng dẫn truyền qua nút nhĩ thất, giảm lực co tâm thu",
      "Tăng lực và tốc độ co bóp tâm thu, giảm tần số tim, làm chậm dẫn truyền nhĩ thất, kéo dài tâm trương"
    ],
    "correct": 3,
    "explanation": "Quy luật 4 tác dụng kinh điển của Digitalis: Tăng co bóp (inotropic dương), chậm nhịp (chronotropic âm), giảm dẫn truyền nhĩ thất (dromotropic âm), tăng tính kích thích sợi cơ tâm thất ở liều cao (bathmotropic dương).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 5,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cơ chế chính yếu giải thích tại sao hoạt chất trợ tim glycosid lại có khả năng làm chậm tần số thất một cách hữu hiệu ở bệnh nhân suy tim có kèm rung nhĩ là gì?",
    "options": [
      "Chẹn hoàn toàn thụ thể beta-1 adrenergic ở màng tế bào nút xoang và cơ nhĩ",
      "Kích thích trương lực thần kinh phế vị (dây X) và kéo dài thời kỳ trơ của nút nhĩ thất",
      "Ức chế kênh calci typ T ở các tế bào dẫn nhịp phụ tại mạng lưới Purkinje",
      "Tăng giải phóng catecholamin nội sinh tại tận cùng sợi thần kinh giao cảm cơ tim"
    ],
    "correct": 1,
    "explanation": "Digitalis kích thích trực tiếp trung tâm phế vị ở hành não và thụ thể áp lực ở xoang cảnh, tăng hoạt tính đối giao cảm (dây X), làm giảm tính tự động nút xoang và kéo dài thời kỳ trơ của nút nhĩ thất, ngăn bớt các xung động từ nhĩ xuống thất.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 6,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trên điện tâm đồ (ECG) của một bệnh nhân đang dùng thuốc trợ tim glycosid, dấu hiệu biến đổi đoạn ST nào sau đây phản ánh tác dụng ngấm thuốc sinh lý bình thường chứ chưa phải ngộ độc?",
    "options": [
      "Đoạn ST chênh lên dạng vòm nhọn điển hình kèm sóng T đảo ngược sâu ở chuyển đạo trước tim",
      "Khoảng QT kéo dài rõ rệt kèm theo sự xuất hiện của sóng U bệnh lý kích thước lớn",
      "Đoạn PR rút ngắn dưới 0.12 giây kèm theo phức bộ QRS giãn rộng quá 0.14 giây",
      "Đoạn ST chênh lõm lòng thuyền (hình thìa súp) và khoảng QT ngắn lại"
    ],
    "correct": 3,
    "explanation": "Dấu hiệu 'ngấm digitalis' trên ECG điển hình là đoạn ST chênh xuống hình lõm đáy cong như lòng thuyền (hình thìa súp / Salvador Dali's mustache), sóng T dẹt hoặc âm, khoảng QT rút ngắn lại.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 7,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân suy tim cao tuổi xuất hiện triệu chứng thị giác nhìn mọi vật chuyển sang màu vàng - xanh lá cây (xanthopsia) và thấy quầng sáng quanh bóng đèn. Đây là dấu hiệu độc tính đặc trưng gắn liền với nhóm thuốc nào?",
    "options": [
      "Ức chế bơm Na+/K+-ATPase tại các tế bào cảm thụ quang học của võng mạc",
      "Chẹn kênh calci làm giảm tưới máu vi mạch nuôi dây thần kinh thị giác",
      "Ức chế carbonic anhydrase làm sụt giảm áp lực nội nhãn dịch kính",
      "Chẹn thụ thể beta-adrenergic gây co thắt mạch máu nuôi tế bào nón"
    ],
    "correct": 0,
    "explanation": "Ảo thị màu vàng hoặc xanh lá cây (xanthopsia), nhìn thấy vầng hào quang là dấu hiệu nhiễm độc thần kinh thị giác kinh điển của Digitalis, do thuốc ức chế Na+/K+-ATPase tại tế bào nón/que của võng mạc.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 8,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Nồng độ ion nào trong huyết tương khi bị sụt giảm sẽ trực tiếp làm tăng độc tính loạn nhịp của Digoxin lên mức nguy hiểm nhất, ngay cả khi nồng độ Digoxin định lượng trong máu vẫn nằm trong giới hạn điều trị?",
    "options": [
      "Hạ nồng độ Natri huyết tương (Na+ < 135 mmol/L)",
      "Hạ nồng độ Clorid huyết tương (Cl- < 95 mmol/L)",
      "Hạ nồng độ Kali huyết tương (K+ < 3.5 mmol/L)",
      "Hạ nồng độ Bicarbonat huyết tương (HCO3- < 22 mmol/L)"
    ],
    "correct": 2,
    "explanation": "K+ và Digoxin cạnh tranh gắn vào vị trí tiểu đơn vị alpha của bơm Na+/K+-ATPase. Khi hạ K+ máu, vị trí gắn bị bỏ trống tạo điều kiện cho Digoxin gắn mạnh mẽ và bền vững hơn, gây ngộ độc nặng dù nồng độ thuốc trong máu bình thường.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 9,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân nam 65 tuổi đang điều trị suy tim bằng Digoxin 0.25 mg/ngày. Khi bác sĩ phối hợp thêm một thuốc chống loạn nhịp để kiểm soát cơn rung nhĩ kịch phát, nồng độ Digoxin trong huyết tương tăng vọt gấp đôi. Thuốc chống loạn nhịp nào có khả năng gây tương tác này mạnh nhất?",
    "options": [
      "Lidocain do ức chế cạnh tranh men chuyển hóa CYP1A2 tại gan",
      "Quinidin do đẩy Digoxin khỏi vị trí gắn ở mô và ức chế P-glycoprotein ở thận",
      "Propranolol do làm tăng tính thấm mao mạch cầu thận đối với phân tử phân cực",
      "Adenosin do làm giảm lưu lượng máu tưới qua nhu mô vỏ thận"
    ],
    "correct": 1,
    "explanation": "Quinidin đẩy Digoxin ra khỏi các điểm gắn ở mô cơ vân và ức chế protein vận chuyển P-glycoprotein tại ống thận, làm giảm thể tích phân bố và giảm thanh thải Digoxin qua thận, khiến nồng độ Digoxin trong huyết tương tăng gấp đôi.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 10,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Sự khác biệt căn bản về mặt dược động học giữa hai hoạt chất glycosid tim là Digoxin và Digitoxin nằm ở đặc tính nào sau đây?",
    "options": [
      "Digoxin gắn protein huyết tương 95% trong khi Digitoxin hoàn toàn không gắn protein",
      "Digitoxin đào thải 80% dưới dạng nguyên vẹn qua lọc cầu thận và bài tiết ống thận",
      "Digoxin bài xuất chủ yếu qua thận (80%), còn Digitoxin chuyển hóa chủ yếu qua gan (90%) có chu kỳ gan - ruột",
      "Digoxin có thời gian bán thải dài 5-7 ngày, còn Digitoxin có thời gian bán thải chỉ 20-30 giờ"
    ],
    "correct": 2,
    "explanation": "Digoxin phân cực ưa nước, gắn protein thấp (25%), thải trừ qua thận 80% dạng nguyên vẹn (T1/2 = 36-40h). Digitoxin tan nhiều trong lipid, gắn protein rất cao (95%), chuyển hóa 90% qua gan có chu kỳ gan-ruột và T1/2 kéo dài tới 5-7 ngày.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 11,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Một bệnh nhân suy tim nặng có biểu hiện ngộ độc glycosid tim cấp tính đe dọa tính mạng với block nhĩ thất độ 3 và ngoại tâm thu thất đa ổ dày đặc. Biện pháp điều trị đặc hiệu tối ưu có khả năng trung hòa nhanh độc chất trong tuần hoàn là gì?",
    "options": [
      "Truyền kháng thể kháng Digoxin đặc hiệu (Digoxin Immune Fab fragments)",
      "Tiến hành sốc điện chuyển nhịp đồng bộ ngay lập tức với mức năng lượng 200J",
      "Truyền dung dịch Calci gluconat 10% tĩnh mạch để phục hồi lực co bóp cơ tim",
      "Lọc máu ngoài thận ngắt quãng (hemodialysis) để loại bỏ toàn bộ lượng thuốc tự do"
    ],
    "correct": 0,
    "explanation": "Thuốc giải độc đặc hiệu duy nhất là kháng thể kháng Digoxin (Digoxin Immune Fab / Digibind). Chống chỉ định sốc điện vì nguy cơ gây rung thất trơ; Lọc máu không hiệu quả vì thể tích phân bố của Digoxin rất lớn (Vd = 6-7 L/kg); Calci IV cấm dùng vì tăng nguy cơ ngừng tim kỳ tâm thu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 12,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Vì sao việc tiêm tĩnh mạch muối Calci (như Calci clorid hoặc Calci gluconat) bị coi là chống chỉ định tuyệt đối trên bệnh nhân đang dùng hoặc nghi ngờ ngộ độc Glycosid tim?",
    "options": [
      "Calci làm tăng thanh thải glycosid tim qua thận dẫn đến mất hiệu lực trợ tim",
      "Calci tạo phức chelate không tan với glycosid tim gây tắc nghẽn vi mạch phổi",
      "Calci ức chế cạnh tranh với thụ thể phế vị làm huyết áp tụt sâu không hồi phục",
      "Hiệp đồng làm tăng vọt calci nội bào cơ tim, dễ khởi phát loạn nhịp thất chết người hoặc ngừng tim kỳ tâm thu"
    ],
    "correct": 3,
    "explanation": "Bản thân Digitalis đã làm tích tụ một lượng lớn Ca2+ tự do trong tế bào cơ tim. Tiêm thêm Calci đường tĩnh mạch sẽ gây quá tải Ca2+ nội bào trầm trọng, kích hoạt hiện tượng hậu khử cực muộn (DADs) gây rung thất hoặc ngừng tim ở thì tâm thu (Stone heart).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 13,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong xử trí ngộ độc Digoxin có biểu hiện loạn nhịp thất nguy hiểm (ngoại tâm thu thất chùm, nhịp nhanh thất), hai thuốc chống loạn nhịp nào sau đây được ưu tiên lựa chọn hàng đầu?",
    "options": [
      "Quinidin hoặc Disopyramid đường tĩnh mạch",
      "Lidocain hoặc Phenytoin đường tĩnh mạch",
      "Amiodaron hoặc Sotalol đường tiêm truyền",
      "Verapamil hoặc Diltiazem đường tĩnh mạch chậm"
    ],
    "correct": 1,
    "explanation": "Lidocain và Phenytoin (Nhóm IB) là hai thuốc được ưu tiên hàng đầu điều trị loạn nhịp thất do ngộ độc Digitalis, vì chúng ức chế tính tự động bất thường ở thất mà không làm chậm thêm dẫn truyền qua nút nhĩ thất (Phenytoin thậm chí cải thiện dẫn truyền nhĩ thất).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 14,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Khoảng nồng độ điều trị tối ưu (therapeutic window) của Digoxin trong huyết tương được khuyến cáo để kiểm soát suy tim mà giảm thiểu tối đa nguy cơ độc tính là bao nhiêu?",
    "options": [
      "Từ 2.5 đến 4.0 ng/mL",
      "Từ 0.1 đến 0.4 ng/mL",
      "Từ 0.5 đến 0.9 ng/mL (tối đa không quá 1.0 - 1.2 ng/mL)",
      "Từ 5.0 đến 10.0 ng/mL"
    ],
    "correct": 2,
    "explanation": "Theo các hướng dẫn tim mạch hiện đại (dựa trên thử nghiệm DIG), nồng độ Digoxin huyết tương tối ưu trong suy tim là 0.5 - 0.9 ng/mL (hoặc 0.8 - 1.2 ng/mL trong rung nhĩ). Khi nồng độ >= 2.0 ng/mL, tỷ lệ ngộ độc và tử vong tăng vọt.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 15,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc trợ tim Milrinon thuộc nhóm thuốc nào và cơ chế phân tử của thuốc mang lại tác dụng huyết động học kép ra sao?",
    "options": [
      "Ức chế enzym Phosphodiesterase-3 (PDE-3), làm tăng cAMP nội bào gây vừa tăng co bóp cơ tim vừa giãn mạch",
      "Chủ vận thụ thể beta-1 adrenergic chọn lọc, kích hoạt adenylcyclase làm tăng giải phóng noradrenalin",
      "Chẹn kênh calci phụ thuộc điện thế typ L, làm chậm nhịp tim và tăng thời gian đổ đầy thất",
      "Kích thích enzym guanylyl cyclase, làm tăng cGMP gây giãn tiểu động mạch chọn lọc không ảnh hưởng tim"
    ],
    "correct": 0,
    "explanation": "Milrinon và Inamrinon là thuốc ức chế chọn lọc enzym phosphodiesterase typ 3 (PDE-3), ngăn thoái giáng cAMP. Tăng cAMP trong cơ tim làm tăng Ca2+ nội bào tăng co bóp tim; trong khi tăng cAMP ở cơ trơn mạch máu gây giãn mạch (tác dụng 'Inodilator').",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 16,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tại sao nhóm thuốc ức chế Phosphodiesterase-3 (Milrinon, Inamrinon) dù cải thiện triệu chứng huyết động rất tốt trong suy tim cấp nhưng lại bị chống chỉ định dùng kéo dài đường uống trong suy tim mạn tính?",
    "options": [
      "Làm teo biểu mô ống thận và gây suy thận cấp tiến triển sau 1 tuần dùng thuốc",
      "Gây lắng đọng sắc tố da không hồi phục và viêm xơ hóa mô kẽ phổi lan tỏa",
      "Gây tiêu cơ vân cấp và suy gan nặng do ức chế chuyển hóa tổng hợp mevalonate",
      "Làm tăng đáng kể tỷ lệ tử vong do khởi phát các cơn loạn nhịp thất ác tính đe dọa tính mạng"
    ],
    "correct": 3,
    "explanation": "Thử nghiệm lâm sàng PROMISE đã chứng minh dùng thuốc ức chế PDE-3 đường uống kéo dài làm tăng tỷ lệ tử vong đáng kể so với giả dược, chủ yếu do biến chứng loạn nhịp thất ác tính và đột tử. Vì vậy, nhóm này chỉ được dùng đường tĩnh mạch ngắn hạn trong suy tim cấp mất bù.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 17,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Dobutamin là một catecholamin tổng hợp được chỉ định phổ biến trong sốc tim và suy tim cấp mất bù. Tác dụng dược lý ưu thế của hoạt chất này được trung hòa thông qua tương tác thụ thể nào?",
    "options": [
      "Chủ vận ưu thế thụ thể alpha-1 adrenergic gây co mạch ngoại vi nâng huyết áp nhanh",
      "Đối kháng thụ thể dopaminergic D1 tại giường mạch mạc treo và thận",
      "Chủ vận mạnh trên thụ thể beta-1 adrenergic cơ tim, tăng sức co bóp rõ rệt nhưng ít làm tăng nhịp tim hơn isoproterenol",
      "Kích thích chọn lọc thụ thể beta-2 adrenergic tại đường dẫn khí gây giãn phế quản"
    ],
    "correct": 2,
    "explanation": "Dobutamin là đồng phân racemic tác động chủ vận ưu thế trên thụ thể beta-1 adrenergic ở màng tế bào cơ tim, làm tăng mạnh sức co bóp cơ tim (inotropic (+)) với mức tăng nhịp tim và tiêu thụ oxy tương đối ít hơn so với dopamin hoặc isoproterenol.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 18,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Ở bệnh nhân suy tim có chức năng thận suy giảm (eGFR < 30 mL/phút), việc điều chỉnh liều thuốc trợ tim Digoxin cần tuân theo nguyên tắc bắt buộc nào?",
    "options": [
      "Tăng gấp đôi liều dùng hàng ngày vì độ thanh thải thận giảm làm thuốc khó ngấm vào cơ tim",
      "Bắt buộc giảm liều hoặc kéo dài khoảng cách dùng thuốc và theo dõi chặt chẽ nồng độ Digoxin trong máu",
      "Giữ nguyên liều nạp ban đầu và phối hợp thêm thuốc lợi tiểu quai liều cao để tăng bài tiết thuốc",
      "Chuyển ngay sang tiêm truyền tĩnh mạch liều duy nhất mỗi ngày để tránh chuyển hóa qua gan"
    ],
    "correct": 1,
    "explanation": "Do 80% lượng Digoxin được thải trừ qua thận dưới dạng nguyên vẹn, độ thanh thải của Digoxin tỷ lệ thuận trực tiếp với độ thanh thải creatinin (CrCl). Khi suy thận, thuốc bị tích lũy gây ngộ độc nếu không giảm liều hoặc giãn khoảng cách đưa liều.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
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
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Một bệnh nhân xuất hiện cơn đau thắt ngực điển hình sau xương ức khi leo cầu thang. Chế phẩm giãn mạch nào sau đây được lựa chọn để cắt cơn cấp tính với yêu cầu khởi phát tác dụng nhanh nhất trong vòng 1 đến 3 phút thông qua tránh hoàn toàn chuyển hóa bước đầu qua gan?",
    "options": [
      "Aspirin viên nén bao tan trong ruột uống ngay lập tức",
      "Amlodipin viên nang uống tác dụng kéo dài",
      "Nitroglycerin dạng viên ngậm dưới lưỡi hoặc xịt niêm mạc miệng",
      "Isosorbid-5-mononitrat viên phóng thích kéo dài uống nuốt nguyên viên"
    ],
    "correct": 2,
    "explanation": "Nitroglycerin ngậm dưới lưỡi hoặc xịt dưới lưỡi hấp thu cực nhanh qua tĩnh mạch dưới lưỡi đổ thẳng vào tĩnh mạch chủ trên, tránh được 100% chuyển hóa bước đầu qua gan, xuất hiện tác dụng sau 1-3 phút để cắt cơn đau thắt ngực cấp.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 37,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cơ chế truyền tín hiệu nội bào chịu trách nhiệm trực tiếp cho tác dụng giãn cơ trơn mạch máu của nhóm nitrat hữu cơ liên quan đến việc kích hoạt chuỗi phản ứng sinh hóa nào sau đây?",
    "options": [
      "Giải phóng prostacyclin (PGI2) kích hoạt adenylcyclase làm tăng tổng hợp AMP vòng",
      "Chuyển hóa giải phóng Nitric Oxid (NO) kích hoạt guanylyl cyclase hòa tan làm tăng GMP vòng (cGMP)",
      "Ức chế trực tiếp thụ thể endothelin-1 màng tế bào làm giảm ion calci ngoại bào đi vào",
      "Kích thích kênh kali nhạy cảm ATP (K_ATP) gây ưu phân cực màng tế bào cơ trơn"
    ],
    "correct": 1,
    "explanation": "Nitrat hữu cơ đi vào tế bào cơ trơn mạch máu, kết hợp với nhóm sulfhydryl (-SH) nhờ enzym ALDH-2 tạo NO. NO kích hoạt guanylyl cyclase hòa tan biến GTP thành cGMP. cGMP kích hoạt protein kinase G khử phosphoryl chuỗi nhẹ myosin (MLC) gây giãn cơ trơn.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 38,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Huyết động học chủ yếu giúp Nitroglycerin làm giảm nhu cầu oxy cơ tim và cắt dứt cơn đau thắt ngực ổn định ở liều điều trị thông thường là gì?",
    "options": [
      "Giãn ưu thế hệ tĩnh mạch dung tích lớn làm giảm lượng máu về tim (giảm tiền gánh) và giảm sức căng thành thất",
      "Giãn chọn lọc các nhánh tiểu động mạch vành bị xơ vữa hẹp cứng để tăng tối đa lưu lượng máu",
      "Co mạch ngoại biên toàn thân để dồn thể tích máu từ các cơ quan ngoại vi về nuôi cơ tim",
      "Ức chế trung khu cảm giác đau ở đồi thị và vỏ não làm mất cảm giác đau thắt ngực"
    ],
    "correct": 0,
    "explanation": "Ở liều điều trị, Nitroglycerin tác dụng ưu thế trên hệ tĩnh mạch lớn, làm ứ máu ngoại vi, giảm hồi lưu tĩnh mạch về tim (giảm tiền gánh), giảm thể tích thất trái cuối tâm trương và giảm sức căng thành tim, từ đó giảm mạnh nhu cầu oxy cơ tim.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 39,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hiện tượng dung nạp thuốc (tolerance) khi dùng liên tục nitrat hữu cơ 24/24 giờ trong ngày mà không có khoảng nghỉ chủ yếu xuất phát từ cơ chế phân tử nào?",
    "options": [
      "Tăng đào thải đột ngột qua thận do kích hoạt enzym lọc cầu thận",
      "Hình thành kháng thể trung hòa IgG đặc hiệu chống lại gốc nitrat",
      "Tăng sinh bù trừ thụ thể beta-1 adrenergic trên màng tế bào cơ tim",
      "Cạn kiệt các nhóm sulfhydryl (-SH) tự do nội bào và bất hoạt enzym ALDH-2 cần thiết để tạo NO"
    ],
    "correct": 3,
    "explanation": "Dùng nitrat liên tục làm cạn kiệt các nhóm sulfhydryl (-SH) nội bào và bất hoạt enzym aldehyde dehydrogenase-2 (ALDH-2) tại ty thể, ngăn cản quá trình chuyển hóa nitrat thành NO, dẫn đến mất tác dụng giãn mạch (hiệu ứng tolerance).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 40,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng không mong muốn tức thì thường gặp nhất khi bệnh nhân bắt đầu sử dụng Nitroglycerin hoặc tăng liều là gì?",
    "options": [
      "Ho khan dai dẳng không dứt kèm ngứa rát họng về đêm",
      "Táo bón kéo dài kèm trướng bụng do liệt nhu động ruột",
      "Đau đầu dữ dội (kiểu mạch đập), đỏ bừng mặt và hạ huyết áp tư thế đứng",
      "Tê bì đầu chi kiểu mang găng do co thắt vi mạch đầu chi"
    ],
    "correct": 2,
    "explanation": "Do tác dụng giãn nhanh các mạch máu não và màng não gây đau đầu dữ dội kiểu giật theo nhịp mạch; đồng thời giãn mạch ngoại vi gây đỏ bừng mặt và tụt huyết áp tư thế đứng có thể gây chóng mặt, ngất.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 41,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Sự phối hợp giữa Nitrat hữu cơ và thuốc ức chế Phosphodiesterase-5 (như Sildenafil, Tadalafil) bị chống chỉ định tuyệt đối vì lý do nguy hiểm nào sau đây?",
    "options": [
      "Cùng làm bùng nổ nồng độ cGMP nội bào gây giãn mạch dữ dội, tụt huyết áp kịch phát không hồi phục và trụy tim mạch tử vong",
      "Tạo phức kết tủa không tan trong máu gây thuyên tắc phổi cấp tính",
      "Gây ức chế cạnh tranh giải phóng noradrenalin dẫn đến liệt cơ hô hấp",
      "Kích thích co giật vỏ não kháng trị do hiệp đồng vượt qua hàng rào máu não"
    ],
    "correct": 0,
    "explanation": "Nitrat làm tăng tổng hợp cGMP, còn thuốc ức chế PDE-5 ngăn thoái giáng cGMP. Nồng độ cGMP tăng vọt mất kiểm soát gây giãn cơ trơn mạch máu toàn thân dữ dội, tụt huyết áp nghiêm trọng không đáp ứng hồi sức, gây nhồi máu cơ tim và tử vong.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 42,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Để ngăn ngừa hiện tượng dung nạp Nitrat (tolerance) trong điều trị dự phòng đau thắt ngực mạn tính, biện pháp sử dụng thuốc nào sau đây bắt buộc phải được áp dụng?",
    "options": [
      "Uống kèm dung dịch Natri bicarbonat để kiềm hóa máu tăng hấp thu",
      "Bố trí một khoảng thời gian trống không có nitrat (Nitrate-free interval) kéo dài 8 đến 12 giờ mỗi ngày",
      "Tăng liều gấp đôi sau mỗi 3 ngày dùng thuốc liên tục để bù trừ",
      "Phối hợp ngay từ đầu với một thuốc chống đông kháng vitamin K"
    ],
    "correct": 1,
    "explanation": "Bắt buộc phải tạo khoảng thời gian 'sạch thuốc' (Nitrate-free interval) từ 8-12 giờ mỗi ngày (thường tháo miếng dán hoặc không uống thuốc vào ban đêm đối với đau thắt ngực gắng sức) để mô cơ trơn tái tạo lại các nhóm -SH tự do.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 43,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Chất chuyển hóa có hoạt tính của Isosorbid dinitrat được phân lập dưới dạng thuốc đơn độc có sinh khả dụng đường uống gần 100% và không bị chuyển hóa bước đầu qua gan là hoạt chất nào?",
    "options": [
      "Isosorbid-2-mononitrat",
      "Pentaerythritol tetranitrat",
      "Erythrityl tetranitrat",
      "Isosorbid-5-mononitrat"
    ],
    "correct": 3,
    "explanation": "Isosorbid-5-mononitrat (ISMN) là chất chuyển hóa có hoạt tính của ISDN, có sinh khả dụng đường uống đạt 100% (không bị gan chuyển hóa bước đầu), thời gian bán thải dài (4-5 giờ) nên rất thích hợp dùng dự phòng cơn đau thắt ngực.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 44,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong điều trị cơn đau thắt ngực co thắt mạch vành nguyên phát (Prinzmetal / Variant Angina), nhóm thuốc nào sau đây bị chống chỉ định dùng đơn độc vì có thể làm co thắt mạch vành nặng hơn?",
    "options": [
      "Thuốc chẹn kênh calci nhóm Dihydropyridine (Amlodipin)",
      "Thuốc nitrat hữu cơ tác dụng kéo dài (Isosorbid mononitrat)",
      "Thuốc chẹn beta-adrenergic không chọn lọc (Propranolol)",
      "Thuốc chẹn kênh calci non-dihydropyridine (Diltiazem)"
    ],
    "correct": 2,
    "explanation": "Trong đau thắt ngực Prinzmetal, chẹn beta không chọn lọc sẽ ức chế thụ thể beta-2 (vốn giúp giãn mạch), để hở thụ thể alpha-1 không bị đối kháng, catecholamin gắn vào alpha-1 gây co thắt động mạch vành dữ dội hơn.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 45,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Theo phân loại kinh điển của Vaughan Williams về các thuốc chống loạn nhịp tim, nhóm I gồm các phân tử có đích tác động phân tử chính là gì?",
    "options": [
      "Chẹn kênh calci typ L phụ thuộc điện thế tại nút nhĩ thất",
      "Chẹn kênh Natri nhanh (INa) phụ thuộc điện thế ở màng sợi cơ tim và sợi Purkinje",
      "Chẹn thụ thể beta-adrenergic giao cảm tại nút xoang",
      "Chẹn kênh Kali chậm (IK) làm kéo dài thời gian tái cực"
    ],
    "correct": 1,
    "explanation": "Nhóm I trong phân loại Vaughan Williams là các thuốc chẹn kênh Natri nhanh phụ thuộc điện thế (INa), làm giảm tốc độ khử cực pha 0 của điện thế hoạt động.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 46,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Các thuốc chống loạn nhịp thuộc phân nhóm IA (như Quinidin, Procainamid, Disopyramid) có đặc điểm biến đổi điện sinh lý tế bào cơ tim điển hình nào sau đây?",
    "options": [
      "Làm chậm rất mạnh pha 0 nhưng hoàn toàn không làm thay đổi thời gian điện thế hoạt động (APD)",
      "Rút ngắn thời gian điện thế hoạt động (APD) và chỉ tác dụng chọn lọc trên mô cơ tâm thất",
      "Ức chế chọn lọc dòng calci ở pha 2 làm giảm co bóp cơ tim mà không đổi thời gian trơ",
      "Làm giảm tốc độ khử cực pha 0 mức độ trung bình và kéo dài thời gian điện thế hoạt động (APD) cũng như thời kỳ trơ hữu hiệu (ERP)"
    ],
    "correct": 3,
    "explanation": "Nhóm IA chẹn kênh Na+ mức độ vừa phải và đồng thời chẹn kênh K+ (pha 3), dẫn đến làm chậm pha 0 và kéo dài thời gian điện thế hoạt động (APD) cũng như kéo dài thời kỳ trơ (ERP), biểu hiện trên ECG là kéo dài phức bộ QRS và khoảng QT.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 47,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc chống loạn nhịp nào sau đây thuộc phân nhóm IB có đặc tính gắn và tách khỏi kênh Natri rất nhanh, tác dụng chọn lọc cao trên mô thiếu máu hoặc khử cực (tâm thất) và là thuốc hàng đầu cấp cứu loạn nhịp thất sau nhồi máu cơ tim?",
    "options": [
      "Amiodaron dạng tiêm truyền tĩnh mạch",
      "Quinidin sulfat dạng viên uống",
      "Lidocain tiêm tĩnh mạch trực tiếp",
      "Flecainid acetat dạng viên nén"
    ],
    "correct": 2,
    "explanation": "Lidocain thuộc nhóm IB, có ái lực cao với kênh Na+ ở trạng thái bất hoạt (thường gặp ở mô cơ tim bị thiếu máu cục bộ hoặc khử cực kéo dài). Thuốc rút ngắn APD, chỉ tác dụng trên thất và là lựa chọn hàng đầu cấp cứu nhịp nhanh thất, rung thất sau nhồi máu cơ tim.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 48,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hội chứng 'Cinchonism' với tam chứng kinh điển: ù tai, giảm thính lực, chóng mặt, nhìn mờ kèm buồn nôn và nhức đầu dữ dội là biểu hiện ngộ độc đặc trưng của hoạt chất chống loạn nhịp nào?",
    "options": [
      "Quinidin (chiết xuất từ vỏ cây Canh-ki-na)",
      "Metoprolol (chẹn chọn lọc thụ thể beta-1)",
      "Adenosin (chủ vận thụ thể purinergic A1)",
      "Lidocain (thuốc gây tê dẫn xuất amid)"
    ],
    "correct": 0,
    "explanation": "Quinidin là đồng phân quay phải của Quinin, chiết xuất từ vỏ cây Cinchona. Quá liều hoặc ngộ độc Quinidin gây hội chứng Cinchonism với các rối loạn thính giác (ù tai, điếc), thị giác và tiêu hóa.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 49,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Amiodaron thuộc Nhóm III trong phân loại Vaughan Williams, đặc trưng bởi cơ chế điện sinh lý cơ bản nào sau đây?",
    "options": [
      "Chẹn kênh calci typ T làm tăng tốc độ khử cực chậm tâm trương",
      "Chỉ phong bế chọn lọc thụ thể Muscarinic M2 tại màng cơ tâm nhĩ",
      "Chẹn kênh Kali (IK), kéo dài pha tái cực 3, từ đó kéo dài thời gian điện thế hoạt động (APD) và thời kỳ trơ",
      "Kích thích kênh Natri mở sớm làm tăng tính tự động của các ổ dẫn nhịp lạc chỗ"
    ],
    "correct": 2,
    "explanation": "Nhóm III (Amiodaron, Sotalol) có tác dụng chính là chẹn các kênh Kali phụ thuộc điện thế tham gia tái cực ở pha 3, làm kéo dài thời gian điện thế hoạt động (APD) và kéo dài thời kỳ trơ hữu hiệu (ERP) ở cả nhĩ và thất.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 50,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Dấu hiệu lắng đọng vi thể ở mắt (Corneal microdeposits) và đổi màu da thành xanh xám (Blue-grey skin) sau khi tiếp xúc ánh nắng là tác dụng phụ gắn liền với thuốc chống loạn nhịp nào?",
    "options": [
      "Lidocain tiêm truyền liên tục",
      "Amiodaron dùng đường uống kéo dài",
      "Procainamid dùng liều cao",
      "Verapamil điều trị rung nhĩ"
    ],
    "correct": 1,
    "explanation": "Amiodaron tích tụ lâu trong mô mỡ, biểu mô giác mạc (tạo lắng đọng giác mạc hình xoáy ở > 90% bệnh nhân) và tích tụ hạt sắc tố lipofuscin ở lớp biểu bì da kết hợp với ánh nắng mặt trời tạo hội chứng da xanh xám (Blue-smurf syndrome).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 51,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng không mong muốn nghiêm trọng nhất có thể dẫn tới tử vong nếu không phát hiện kịp thời trên bệnh nhân điều trị loạn nhịp bằng Amiodaron dài ngày là gì?",
    "options": [
      "Viêm cầu thận hoại tử cấp kèm vô niệu",
      "Suy tủy xương toàn bộ gây giảm 3 dòng",
      "Hội chứng tiêu cơ vân cấp giải phóng myoglobin",
      "Xơ phổi mô kẽ tiến triển (Pulmonary fibrosis) gây suy hô hấp"
    ],
    "correct": 3,
    "explanation": "Độc tính trên phổi (viêm phổi mô kẽ, xơ phổi) xảy ra ở khoảng 1-10% bệnh nhân dùng Amiodaron, là tác dụng phụ nguy hiểm nhất và có thể gây tử vong. Cần theo dõi định kỳ X-quang phổi và chức năng hô hấp (DLCO).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 52,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Vì sao Amiodaron có thể gây ra cả hai trạng thái bệnh lý đối nghịch trên tuyến giáp: vừa có thể gây suy giáp, vừa có thể gây cường giáp?",
    "options": [
      "Phân tử Amiodaron chứa tới 37% Iod theo khối lượng, có thể gây ức chế tổng hợp hormon (hiệu ứng Wolff-Chaikoff) hoặc kích thích bùng phát tổng hợp (hiệu ứng Jod-Basedow)",
      "Thuốc kích thích chọn lọc thụ thể TSH ở thùy trước tuyến yên",
      "Amiodaron ức chế enzym iodinase ở thận làm tăng giữ iod tự do",
      "Thuốc làm tiêu hủy trực tiếp các nang tuyến giáp do kích hoạt bổ thể"
    ],
    "correct": 0,
    "explanation": "Trong 200mg Amiodaron có chứa khoảng 75mg Iod. Lượng iod khổng lồ giải phóng hàng ngày có thể gây suy giáp (do ức chế tổng hợp hormon giáp - hiệu ứng Wolff-Chaikoff) hoặc gây cường giáp (do thừa nguyên liệu tổng hợp hormon - hiệu ứng Jod-Basedow).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 53,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hội chứng 'Lupus ban đỏ do thuốc' (Drug-induced Lupus) với sốt, viêm đa khớp, viêm màng phổi và kháng thể kháng Histone dương tính là tác dụng phụ kinh điển của thuốc chống loạn nhịp nào?",
    "options": [
      "Lidocain",
      "Sotalol",
      "Procainamid",
      "Mexiletin"
    ],
    "correct": 2,
    "explanation": "Procainamid gây hội chứng giống Lupus ban đỏ hệ thống ở 20-30% bệnh nhân dùng kéo dài (đặc biệt ở nhóm người có kiểu hình acetyl hóa chậm). Kháng thể kháng Histone dương tính là dấu ấn đặc trưng; các triệu chứng biến mất khi ngừng thuốc.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 54,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Vị trí tác động và hệ thống đồng vận chuyển ion nào tại nephron là đích sinh học bị ức chế trực tiếp bởi nhóm thuốc lợi tiểu quai (như Furosemid, Bumetanid)?",
    "options": [
      "Hệ thống đồng vận chuyển Na+/K+/2Cl- tại đoạn dày nhánh lên quai Henle",
      "Kênh đồng vận chuyển Na+/Cl- tại đoạn đầu ống lượn xa",
      "Kênh biểu mô Natri (ENaC) nhạy cảm amilorid tại ống góp vỏ",
      "Hệ thống trao đổi Na+/H+ và enzym Carbonic Anhydrase tại ống lượn gần"
    ],
    "correct": 0,
    "explanation": "Thuốc lợi tiểu quai (Furosemid, Bumetanid, Torsemid) ức chế đặc hiệu hệ đồng vận chuyển Na+/K+/2Cl- (NKCC2) ở màng đỉnh tế bào biểu mô đoạn dày nhánh lên của quai Henle.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 55,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác động đối nghịch độc nhất lên sự bài xuất ion Calci qua nước tiểu giữa thuốc lợi tiểu quai (Furosemid) và thuốc lợi tiểu Thiazid (Hydrochlorothiazid) diễn ra theo quy luật nào?",
    "options": [
      "Cả hai nhóm đều làm tăng đào thải calci qua nước tiểu dẫn đến hạ calci máu nặng",
      "Thiazid làm tăng bài tiết calci gây sỏi thận; trong khi Furosemid giữ calci chữa loãng xương",
      "Furosemid làm tăng đào thải Calci qua nước tiểu (làm hạ calci máu); trong khi Thiazid làm tăng tái hấp thu Calci (làm tăng calci máu)",
      "Cả hai nhóm đều ức chế hoàn toàn sự tái hấp thu calci tại biểu mô ống lượn gần"
    ],
    "correct": 2,
    "explanation": "Furosemid làm mất điện thế dương trong lòng ống ở quai Henle, ức chế tái hấp thu Ca2+ thụ động qua khe tế bào $\\rightarrow$ tăng thải Ca2+ (dùng trị tăng Ca2+ máu). Thiazid ức chế tái hấp thu Na+ ở ống lượn xa làm kích hoạt bơm trao đổi Na+/Ca2+ ở màng đáy $\\rightarrow$ tăng tái hấp thu Ca2+ vào máu (giảm calci niệu, tốt cho người loãng xương).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 56,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc lợi tiểu nhóm Thiazid (như Hydrochlorothiazid, Indapamid) phát huy tác dụng bài niệu thông qua ức chế vị trí vận chuyển ion nào tại ống thận?",
    "options": [
      "Bơm trao đổi Na+/K+-ATPase ở màng đáy ống lượn gần",
      "Hệ đồng vận chuyển Na+/Cl- (NCC) tại biểu mô đoạn đầu ống lượn xa",
      "Kênh rò rỉ Kali ở tế bào chính của ống góp vỏ",
      "Hệ đồng vận chuyển Glucose-Natri SGLT-2 ở đoạn S1 ống lượn gần"
    ],
    "correct": 1,
    "explanation": "Thiazid gắn và ức chế chọn lọc hệ đồng vận chuyển Na+/Cl- (NCC) ở màng đỉnh tế bào biểu mô đoạn đầu ống lượn xa, ngăn cản tái hấp thu khoảng 5-10% lượng Na+ được lọc.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 57,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Khi mức lọc cầu thận của bệnh nhân suy thận giảm xuống dưới ngưỡng eGFR < 30 mL/phút, nhóm thuốc lợi tiểu nào sau đây bị mất hoàn toàn hiệu lực và bắt buộc phải thay thế bằng Lợi tiểu quai?",
    "options": [
      "Thuốc lợi tiểu thẩm thấu Manitol",
      "Thuốc kháng Aldosteron như Spironolacton",
      "Thuốc ức chế enzym Carbonic Anhydrase",
      "Nhóm thuốc lợi tiểu Thiazid và các dẫn chất giống Thiazid (như Hydrochlorothiazid, Chlorthalidon)"
    ],
    "correct": 3,
    "explanation": "Khi eGFR < 30 mL/phút, dòng dịch lọc đến ống lượn xa quá ít, nhóm Thiazid mất hoàn toàn tác dụng lợi niệu. Lúc này bắt buộc phải dùng Lợi tiểu quai (Furosemid liều cao) mới có thể tống muối nước và duy trì thể tích nước tiểu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 58,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Độc tính trên tai (Ototoxicity) gây ù tai, giảm thính lực hoặc điếc không hồi phục là nguy cơ đặc biệt nguy hiểm khi sử dụng Furosemid trong tình huống lâm sàng nào sau đây?",
    "options": [
      "Uống Furosemid liều thấp 20 mg mỗi ngày vào buổi sáng",
      "Dùng phối hợp Furosemid với thuốc ức chế men chuyển Enalapril",
      "Tiêm tĩnh mạch Furosemid liều cao quá nhanh hoặc dùng đồng thời với kháng sinh Aminoglycosid (như Gentamicin, Amikacin)",
      "Dùng chung Furosemid với thực phẩm chứa nhiều ion kali như chuối chín"
    ],
    "correct": 2,
    "explanation": "Furosemid làm biến đổi nồng độ điện giải trong nội dịch tai trong và gây tổn thương dải mạch vân (stria vascularis) ở ốc tai. Nguy cơ điếc vĩnh viễn tăng vọt khi tiêm tĩnh mạch nhanh liều cao hoặc dùng phối hợp với kháng sinh Aminoglycosid.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 59,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc lợi tiểu tiết kiệm Kali Spironolacton có cơ chế tác dụng phân tử đặc trưng là gì?",
    "options": [
      "Đối kháng cạnh tranh đặc hiệu với Aldosteron tại thụ thể Mineralocorticoid trong bào tương tế bào ống góp",
      "Chẹn trực tiếp kênh biểu mô Natri (ENaC) ở màng đỉnh tế bào chính mà không qua thụ thể",
      "Ức chế enzym 11-beta-hydroxylase tại vỏ tuyến thượng thận",
      "Kích thích tuyến yên giảm bài tiết hormon chống bài niệu Vasopressin (ADH)"
    ],
    "correct": 0,
    "explanation": "Spironolacton khuếch tán vào tế bào biểu mô ống góp, gắn và cạnh tranh với Aldosteron tại thụ thể Mineralocorticoid (MR) nội bào, ngăn cản phức hợp này vào nhân kích hoạt tổng hợp protein cảm ứng aldosteron (AIPs) như kênh ENaC và bơm Na+/K+-ATPase.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 60,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng phụ gây chứng vú to ở nam giới (Gynecomastia), đau núm vú và rối loạn kinh nguyệt ở phụ nữ của Spironolacton bắt nguồn từ cơ chế nào?",
    "options": [
      "Kích thích tế bào ưa acid tuyến yên tăng tiết quá mức hormon tăng trưởng GH",
      "Cấu trúc steroid của Spironolacton gắn không chọn lọc, vừa chẹn thụ thể Androgen vừa kích hoạt nhẹ thụ thể Progesteron",
      "Ức chế enzym aromatase làm ứ đọng nồng độ testosterone tự do trong máu",
      "Phá hủy các thụ thể oxytocin tại tuyến vú và tử cung"
    ],
    "correct": 1,
    "explanation": "Spironolacton có cấu trúc steroid tương tự nội tiết tố sinh dục, liên kết chéo đối kháng thụ thể Androgen và kích hoạt thụ thể Progesteron, dẫn tới chứng vú to ở nam (gynecomastia), bất lực và rối loạn kinh nguyệt. Eplerenon là chất chọn lọc trên MR nên không gây tác dụng này.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 61,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc lợi tiểu tiết kiệm Kali nào sau đây chẹn trực tiếp kênh biểu mô Natri (ENaC) ở màng đỉnh tế bào chính của ống góp mà không phụ thuộc vào sự hiện diện của hormon Aldosteron?",
    "options": [
      "Spironolacton",
      "Eplerenon",
      "Canrenon",
      "Amilorid và Triamteren"
    ],
    "correct": 3,
    "explanation": "Amilorid và Triamteren tác động trực tiếp ức chế kênh dẫn truyền Natri biểu mô (ENaC) ở màng đỉnh tế bào chính ống góp, làm giảm tái hấp thu Na+ và giảm bài tiết K+ mà không cần thông qua thụ thể Aldosteron.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 62,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Acetazolamid là một thuốc lợi tiểu yếu tác động thông qua ức chế enzym nào tại biểu mô ống lượn gần và có ứng dụng đặc hiệu điều trị bệnh tăng nhãn áp (Glaucoma)?",
    "options": [
      "Enzym Phosphodiesterase typ 5",
      "Enzym Adenylcyclase phụ thuộc Calci",
      "Enzym Carbonic Anhydrase (CA)",
      "Enzym Na+/K+-ATPase"
    ],
    "correct": 2,
    "explanation": "Acetazolamid ức chế enzym Carbonic Anhydrase (CA) ở ống lượn gần và thể mi của mắt. Ức chế CA tại thể mi làm giảm tổng hợp thủy dịch, giúp hạ nhãn áp trong điều trị Glaucoma góc mở và cấp cứu Glaucoma góc đóng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 63,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Rối loạn thăng bằng kiềm toan đặc trưng có thể xảy ra khi điều trị bằng thuốc lợi tiểu Acetazolamid là trạng thái nào sau đây?",
    "options": [
      "Nhiễm toan chuyển hóa tăng Clo máu kèm theo nước tiểu có tính kiềm",
      "Nhiễm kiềm chuyển hóa giảm Kali máu kèm theo nước tiểu acid",
      "Nhiễm toan hô hấp cấp tính do ứ đọng khí cacbonic trong phế nang",
      "Nhiễm kiềm hô hấp mạn tính do tăng thông khí bù trừ"
    ],
    "correct": 0,
    "explanation": "Ức chế CA ở ống lượn gần làm ngăn cản tái hấp thu ion Bicarbonat (HCO3-), khiến HCO3- bị đào thải ồ ạt qua nước tiểu $\\rightarrow$ nước tiểu bị kiềm hóa, trong khi máu mất kiềm dẫn đến nhiễm toan chuyển hóa tăng Clo máu (Hyperchloremic metabolic acidosis).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 64,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Đích tác động sinh học nào tại tế bào viền niêm mạc dạ dày là chặng cuối cùng của quá trình bài tiết ion H+ vào lòng dạ dày, bị ức chế không hồi phục bởi nhóm thuốc PPI?",
    "options": [
      "Thụ thể Histamin H2 ở màng đáy bên tế bào viền",
      "Bơm enzym H+/K+-ATPase tại màng vi quản của tế bào viền",
      "Thụ thể Gastrin CCK2 liên kết protein Gq",
      "Thụ thể Muscarinic M3 nhạy cảm acetylcholin"
    ],
    "correct": 1,
    "explanation": "Bơm H+/K+-ATPase (bơm proton) ở màng đỉnh vi quản tiết của tế bào viền là con đường chung cuối cùng bài tiết H+ ra dịch vị dạ dày. PPI gắn cộng hóa trị vào cầu nối disulfid (-S-S-) của bơm này, gây bất hoạt không hồi phục.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 65,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tại sao các thuốc ức chế bơm proton (PPI như Omeprazol, Esomeprazol) bắt buộc phải được bào chế dưới dạng viên bao tan trong ruột hoặc pellet bao kháng acid?",
    "options": [
      "Để ngăn ngừa thuốc bị enzym pepsin thủy phân trong dạ dày",
      "Để giảm kích ứng trực tiếp của thuốc lên cơ vòng thực quản dưới",
      "Để làm chậm tốc độ hòa tan giúp kéo dài thời gian bán thải trong máu",
      "Do PPI là các tiền chất base yếu dễ bị phá hủy và bất hoạt sớm trong môi trường acid dịch vị dạ dày"
    ],
    "correct": 3,
    "explanation": "PPI là base yếu, rất kém bền trong môi trường acid (bị chuyển hóa thành dạng sulfenamid ngay trong lòng dạ dày và không hấp thu được). Viên bao kháng acid giúp thuốc qua dạ dày an toàn xuống ruột non hấp thu vào máu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 66,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thời điểm dùng thuốc tối ưu trong ngày của nhóm thuốc ức chế bơm proton (PPI) để đạt hiệu quả ức chế acid dạ dày cao nhất là thời điểm nào?",
    "options": [
      "Uống trước bữa ăn sáng khoảng 30 đến 60 phút khi bụng đói",
      "Uống ngay sau khi ăn no bữa tối để ức chế tiết acid ban đêm",
      "Uống vào lúc nửa đêm (24h) khi lượng acid dịch vị tự do đạt đỉnh",
      "Uống ngắt quãng cùng lúc trong các bữa ăn chính"
    ],
    "correct": 0,
    "explanation": "PPI chỉ gắn và ức chế các bơm proton đang ở trạng thái hoạt động (bơm acid ra ngoài). Bữa ăn sau đó 30-60 phút sẽ kích thích tối đa số lượng bơm proton hoạt động, đúng vào thời điểm nồng độ PPI trong máu đạt đỉnh.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 67,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc kháng thụ thể Histamin H2 nào sau đây có khả năng ức chế mạnh nhiều enzym cytochrom P450 ở gan (CYP1A2, 2C9, 2D6, 3A4) và kháng thụ thể androgen gây chứng vú to ở nam giới?",
    "options": [
      "Famotidin",
      "Ranitidin",
      "Cimetidin",
      "Nizatidin"
    ],
    "correct": 2,
    "explanation": "Cimetidin ức chế mạnh hệ enzym CYP450 tại gan làm tăng nồng độ nhiều thuốc dùng chung (Warfarin, Theophyllin, Phenytoin). Cimetidin còn có tác dụng kháng androgen và tăng tiết prolactin gây chứng vú to ở nam và chảy sữa.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 68,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hiện tượng 'Dung nạp nhanh' (Tachyphylaxis / Tolerance) làm giảm hiệu lực ức chế bài tiết acid dịch vị sau vài ngày sử dụng liên tục thường xảy ra với nhóm thuốc nào?",
    "options": [
      "Thuốc ức chế bơm proton (PPI)",
      "Thuốc kháng thụ thể Histamin H2 (như Famotidin, Ranitidin)",
      "Thuốc kháng toan Antacid chứa nhôm và magnesi",
      "Thuốc bao phủ vết loét Sucralfat"
    ],
    "correct": 1,
    "explanation": "Kháng H2 làm giảm tiết acid nhanh chóng nhưng cơ thể phản ứng bù trừ bằng cách tăng tiết gastrin, kích thích thụ thể CCK2 trên tế bào viền. Hiện tượng dung nạp nhanh xuất hiện chỉ sau 3-5 ngày dùng thuốc liên tục. PPI không gặp hiện tượng này.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 69,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng không mong muốn đối lập trên nhu động ruột giữa muối nhôm hydroxyd Al(OH)3 và muối magnesi hydroxyd Mg(OH)2 khi dùng đơn độc là gì?",
    "options": [
      "Cả hai muối đều làm tăng nhu động ruột gây tiêu chảy phân nước cấp tính",
      "Nhôm hydroxyd gây tiêu chảy thẩm thấu; Magnesi hydroxyd gây táo bón co thắt",
      "Cả hai muối đều gây liệt ruột cơ năng và viêm ruột thừa hoại tử",
      "Nhôm hydroxyd gây táo bón và phân cứng; trong khi Magnesi hydroxyd gây tiêu chảy thẩm thấu"
    ],
    "correct": 3,
    "explanation": "Al3+ làm giãn cơ trơn ruột và kết tủa protein niêm mạc gây săn se dẫn đến táo bón. Ngược lại, Mg2+ không hấp thu giữ nước trong lòng ruột gây tiêu chảy thẩm thấu. Vì vậy, các chế phẩm Antacid (như Maalox) thường phối hợp cả hai để cân bằng nhu động.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 70,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cơ chế bảo vệ niêm mạc dạ dày của Sucralfat đòi hỏi điều kiện môi trường nào để phát huy tác dụng tạo hàng rào che phủ ổ loét?",
    "options": [
      "Môi trường acid (pH < 4) để thuốc polyme hóa thành một lớp gel dính kiên cố gắn vào protein ổ loét",
      "Môi trường kiềm (pH > 7) để thuốc phân giải thành các ion nhôm tự do trung hòa acid",
      "Có sự hiện diện của muối mật để nhũ hóa thành các hạt micelle thấm sâu vào lớp dưới niêm mạc",
      "Môi trường trung tính tuyệt đối để tránh phá vỡ cầu nối disaccharid"
    ],
    "correct": 0,
    "explanation": "Sucralfat là phức hợp của sucrose octasulfat và nhôm hydroxyd. Trong môi trường acid (pH < 4), thuốc bị trùng hợp (polymer hóa) tạo thành một lớp gel dính có điện tích âm, gắn chặt vào các protein mang điện tích dương tại đáy ổ loét.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 71,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng phụ làm phân có màu đen sẫm và làm đen bề mặt lưỡi là đặc điểm nhận biết vô hại nhưng dễ gây lo lắng của hoạt chất điều trị loét dạ dày nào?",
    "options": [
      "Sucralfat dạng hỗn dịch uống",
      "Omeprazol dạng viên phóng thích chậm",
      "Bismuth subsalicylat (hoặc Tripotassium dicitrato bismuthate)",
      "Misoprostol viên nén đặt dưới lưỡi"
    ],
    "correct": 2,
    "explanation": "Bismuth phản ứng với khí hydro sulfid (H2S) do vi khuẩn đường ruột sinh ra tạo thành muối Bismuth sulfid (Bi2S3) kết tủa màu đen, làm phân và lưỡi có màu đen nhánh (dễ nhầm với xuất huyết tiêu hóa do loét).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 72,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Một hoạt chất chủ vận chọn lọc thụ thể beta-2 adrenergic tác dụng ngắn (SABA) được hít qua bình xịt định liều để cắt nhanh cơn khó thở cấp tính trong hen phế quản là gì?",
    "options": [
      "Salmeterol dạng bột hít khô",
      "Ipratropium bromid dạng khí dung",
      "Salbutamol (Albuterol) dạng bình xịt định liều MDI",
      "Budesonid dạng hỗn dịch khí dung"
    ],
    "correct": 2,
    "explanation": "Salbutamol (Albuterol) và Terbutalin là các thuốc kích thích chọn lọc thụ thể beta-2 adrenergic tác dụng ngắn (SABA), khởi phát tác dụng nhanh sau 3-5 phút, kéo dài 4-6 giờ, là lựa chọn hàng đầu để cắt cơn co thắt phế quản cấp tính.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 73,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cơ chế phân tử của Salbutamol và các thuốc kích thích beta-2 adrenergic dẫn đến giãn cơ trơn phế quản liên quan trực tiếp đến chất truyền tin thứ hai nào?",
    "options": [
      "Kích hoạt enzym adenylcyclase làm tăng tổng hợp AMP vòng (cAMP), hoạt hóa protein kinase A và làm giảm calci tự do nội bào",
      "Kích thích enzym guanylyl cyclase làm tăng GMP vòng (cGMP)",
      "Ức chế phospholipase C làm cạn kiệt Inositol triphosphat (IP3)",
      "Mở trực tiếp kênh calci phụ thuộc điện thế typ L ở màng tế bào"
    ],
    "correct": 0,
    "explanation": "Chủ vận beta-2 gắn vào thụ thể liên kết protein Gs, hoạt hóa adenylcyclase tổng hợp cAMP. cAMP kích hoạt PKA phosphoryl hóa làm bất hoạt MLCK và thúc đẩy bơm Ca2+ ra ngoài lưới nội bào, gây giãn cơ trơn phế quản.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 74,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cảnh báo an toàn hộp đen (Black Box Warning) của các cơ quan quản lý dược phẩm quốc tế đối với thuốc chủ vận beta-2 tác dụng kéo dài (LABA như Salmeterol, Formoterol) trong điều trị hen phế quản là gì?",
    "options": [
      "Cấm dùng cho bệnh nhân trên 65 tuổi do nguy cơ suy tủy",
      "CẤM TUYỆT ĐỐI sử dụng LABA đơn trị liệu không có Corticosteroid hít (ICS) đi kèm vì làm tăng nguy cơ tử vong do hen",
      "Bắt buộc ngừng thuốc trước khi tiêm vaccin phòng cúm mùa",
      "Chỉ được dùng đường tiêm dưới da trong các đợt bùng phát"
    ],
    "correct": 1,
    "explanation": "Dùng LABA đơn độc làm giảm nhạy cảm thụ thể beta-2 và che giấu tình trạng viêm mạn tính của đường thở, làm tăng đáng kể các đợt kịch phát nặng đe dọa tính mạng và tử vong do hen. Do đó, trong hen phế quản, LABA bắt buộc phải luôn kết hợp với ICS.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 75,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng không mong muốn tại chỗ điển hình nhất khi sử dụng Corticosteroid dạng hít (ICS như Fluticason, Budesonid) điều trị hen phế quản kéo dài là gì?",
    "options": [
      "Co thắt cơ thắt thực quản dưới gây nghẹn thức ăn đặc",
      "Mất hoàn toàn khứu giác do teo niêm mạc cuốn mũi dưới",
      "Tăng tiết nước bọt ồ ạt kèm theo phì đại tuyến mang tai",
      "Nhiễm nấm Candida ở khoang miệng - hầu họng và khàn tiếng do kích ứng dây thanh"
    ],
    "correct": 3,
    "explanation": "Do một phần thuốc dạng xịt hít lắng đọng tại khoang miệng và hầu họng gây ức chế miễn dịch tại chỗ và teo cơ thanh âm, dẫn tới nhiễm nấm Candida miệng (tưa miệng) và khàn tiếng. Phòng ngừa bằng cách súc miệng nhổ nước ngay sau khi hít thuốc.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 76,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Phạm vi nồng độ trị liệu (Therapeutic window) của Theophyllin trong huyết tương được khuyến cáo để đạt hiệu quả giãn phế quản mà tránh được các độc tính nguy hiểm là bao nhiêu?",
    "options": [
      "Từ 1 đến 5 mcg/mL",
      "Từ 25 đến 50 mcg/mL",
      "Từ 10 đến 20 mcg/mL (ở người cao tuổi khuyến cáo 5 - 15 mcg/mL)",
      "Từ 50 đến 100 mcg/mL"
    ],
    "correct": 2,
    "explanation": "Theophyllin có khoảng trị liệu rất hẹp: nồng độ điều trị tối ưu là 10 - 20 mcg/mL. Khi nồng độ > 20 mcg/mL xuất hiện buồn nôn, nôn mửa; khi > 30 mcg/mL nguy cơ loạn nhịp tim nguy hiểm và co giật kháng trị tử vong.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 77,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cơ chế tác dụng giãn phế quản của Ipratropium bromid và Tiotropium bromid là gì?",
    "options": [
      "Đối kháng cạnh tranh không chọn lọc tại các thụ thể Muscarinic (M1, M2, M3) của hệ đối giao cảm tại đường dẫn khí",
      "Kích thích chọn lọc thụ thể beta-2 adrenergic tại cơ trơn phế quản",
      "Ức chế trực tiếp enzym 5-lipoxygenase ngăn tổng hợp leukotriene",
      "Kháng thụ thể histamin H1 ở tế bào biểu mô phế quản"
    ],
    "correct": 0,
    "explanation": "Ipratropium (SAMA) và Tiotropium (LAMA) là các dẫn chất amoni bậc 4 đối kháng thụ thể Muscarinic (chủ yếu là M3) trên cơ trơn phế quản, ngăn chặn tác dụng co thắt phế quản và tăng tiết nhầy của acetylcholin.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 78,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc kháng thụ thể Leukotriene Montelukast và Zafirlukast tác động chọn lọc trên phân nhóm thụ thể nào sau đây để ngăn ngừa co thắt phế quản và phù nề đường thở?",
    "options": [
      "Thụ thể Leukotriene B4 (BLT1) trên tế bào bạch cầu đa nhân trung tính",
      "Thụ thể Cysteinyl Leukotriene 1 (CysLT1) tại cơ trơn đường thở",
      "Thụ thể Thromboxan A2 (TP) trên màng tiểu cầu",
      "Thụ thể Prostaglandin F2-alpha (FP) ở cơ trơn phế quản"
    ],
    "correct": 1,
    "explanation": "Montelukast và Zafirlukast là các chất đối kháng chọn lọc cao tại thụ thể CysLT1, ngăn chặn tác động của các leukotriene cysteinyl (LTC4, LTD4, LTE4) - những chất trung gian gây co thắt phế quản mạnh gấp 1000 lần histamin và tăng tính thấm thành mạch.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 79,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Đặc điểm hóa lý và dược động học nào sau đây là nguyên nhân cơ bản khiến các thuốc kháng Histamin H1 thế hệ 1 (như Clorpheniramin, Promethazin, Diphenhydramin) gây tác dụng phụ an thần và buồn ngủ sâu?",
    "options": [
      "Phân tử có khối lượng rất lớn và mang điện tích âm ở pH sinh lý",
      "Gắn không thuận nghịch với albumin huyết tương và chỉ đào thải qua đường mật",
      "Bị bơm tống thuốc P-glycoprotein tại hàng rào máu não tống ngược vào lòng mạch",
      "Tính thân dầu (lipophilic) cao, phân tử nhỏ và không tích điện ở pH sinh lý, dễ dàng vượt qua hàng rào máu não chiếm giữ thụ thể H1 trung ương"
    ],
    "correct": 3,
    "explanation": "Thuốc thế hệ 1 có tính thân dầu cao, không ion hóa ở pH sinh lý và kích thước phân tử nhỏ nên dễ dàng khuếch tán qua hàng rào máu não, chẹn thụ thể H1 ở vỏ não và hệ lưới, làm suy giảm dẫn truyền kích thích tỉnh táo của histamin gây buồn ngủ sâu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 80,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tại sao các thuốc kháng Histamin H1 thế hệ 2 (như Loratadin, Cetirizin, Fexofenadin) hầu như không gây buồn ngủ và không ảnh hưởng đến khả năng tập trung khi lái xe?",
    "options": [
      "Bị thoái biến hoàn toàn bởi enzym ở biểu mô niêm mạc ruột non trước khi hấp thu",
      "Cấu trúc phân cực, mang điện tích ở pH sinh lý, gắn protein cao và là cơ chất của bơm P-glycoprotein, hầu như không qua được hàng rào máu não",
      "Chỉ tác dụng trên thụ thể Histamin H2 ở tế bào viền dạ dày",
      "Có tác dụng kích thích trực tiếp thụ thể giao cảm alpha-1 gây tỉnh táo bù trừ"
    ],
    "correct": 1,
    "explanation": "Thuốc thế hệ 2 có tính ưa nước cao hơn, bị ion hóa ở pH sinh lý, gắn protein mạnh và đặc biệt là cơ chất của bơm tống thuốc P-glycoprotein tại nội mô mạch máu não (bị bơm ngược ra ngoài nếu lọt vào), do đó thuốc chọn lọc cao trên thụ thể H1 ngoại vi.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 81,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng phụ kháng Cholinergic (Anticholinergic) kinh điển của kháng H1 thế hệ 1 biểu hiện qua các triệu chứng nào sau đây?",
    "options": [
      "Khô miệng, nhìn mờ do giãn đồng tử, bí tiểu, táo bón và tăng nhãn áp",
      "Tăng tiết nước bọt ồ ạt, tiêu chảy phân lỏng và co đồng tử nhỏ",
      "Nhịp tim chậm dưới 40 chu kỳ/phút và tụt huyết áp tư thế",
      "Co thắt phế quản cấp tính kèm tăng tiết đờm dãi đường thở"
    ],
    "correct": 0,
    "explanation": "Do cấu trúc tương đồng với thuốc kháng muscarinic, kháng H1 thế hệ 1 chẹn thụ thể Muscarinic ngoại vi gây hội chứng anticholinergic: khô miệng, giảm tiết mồ hôi, giãn đồng tử (nhìn mờ), bí tiểu (do co cơ thắt cổ bàng quang) và táo bón.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 82,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Chống chỉ định quan trọng nào sau đây áp dụng nghiêm ngặt cho thuốc kháng Histamin H1 thế hệ 1 do tác dụng chẹn thụ thể Muscarinic ngoại vi?",
    "options": [
      "Hạ huyết áp mạn tính và nhược cơ",
      "Viêm mũi dị ứng theo mùa và mày đay cấp tính",
      "Phì đại tuyến tiền liệt lành tính có ứ đọng nước tiểu và Glaucoma góc đóng",
      "Suy tuyến thượng thận mạn tính kèm hạ kali máu"
    ],
    "correct": 2,
    "explanation": "Tác dụng kháng muscarinic làm co cơ thắt cổ bàng quang và giãn cơ bàng quang dẫn đến bí tiểu cấp ở người phì đại tiền liệt tuyến; đồng thời gây giãn đồng tử làm nghẽn góc tiền đình mắt, khởi phát cơn tăng nhãn áp cấp ở người có Glaucoma góc đóng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 83,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bài học lâm sàng về độc tính tim mạch xoắn đỉnh (Torsades de Pointes) dẫn đến việc rút khỏi thị trường của Terfenadin và Astemizol liên quan đến tương tác thuốc với nhóm chất nào?",
    "options": [
      "Thuốc lợi tiểu tiết kiệm kali như Spironolacton",
      "Các vitamin nhóm B tan trong nước",
      "Thuốc hạ sốt giảm đau Paracetamol",
      "Thuốc ức chế enzym cytochrom P450 isoenzym CYP3A4 (như Ketoconazol, Itraconazol, Erythromycin)"
    ],
    "correct": 3,
    "explanation": "Terfenadin là tiền chất chẹn kênh Kali tim mạch (hERG) khi ở nồng độ cao. Các thuốc ức chế mạnh CYP3A4 (Ketoconazol, Erythromycin) ngăn chuyển hóa Terfenadin thành chất chuyển hóa có hoạt tính Fexofenadin, làm nồng độ Terfenadin mẹ tăng vọt gây kéo dài QT và xoắn đỉnh tử vong.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 84,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Chất chuyển hóa có hoạt tính của Terfenadin được phát triển thành thuốc kháng H1 thế hệ 2 an toàn tuyệt đối cho tim mạch, không làm kéo dài khoảng QT là gì?",
    "options": [
      "Desloratadin",
      "Fexofenadin",
      "Levocetirizin",
      "Olopatadin"
    ],
    "correct": 1,
    "explanation": "Fexofenadin là dẫn chất acid carboxylic chuyển hóa của Terfenadin qua enzym CYP3A4. Phân tử này giữ nguyên hoạt tính kháng H1 mạnh nhưng hoàn toàn không chẹn kênh Kali tim mạch hERG, không gây xoắn đỉnh kể cả khi dùng liều rất cao.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 85,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Vì sao các thuốc kháng Histamin H1 thế hệ 1 (như Dimenhydrinat, Diphenhydramin, Promethazin) có hiệu quả chống say tàu xe và chống nôn tiền đình, trong khi thế hệ 2 hoàn toàn không có tác dụng này?",
    "options": [
      "Do thế hệ 1 vượt qua hàng rào máu não ức chế đồng thời thụ thể H1 và thụ thể Muscarinic trung ương tại nhân tiền đình và trung tâm nôn ở thân não",
      "Do thế hệ 1 có tác dụng gây tê bề mặt niêm mạc dạ dày làm mất cảm giác buồn nôn",
      "Do thế hệ 1 làm tăng tốc độ làm rỗng dạ dày nhanh gấp 5 lần thế hệ 2",
      "Do thế hệ 1 kích thích thụ thể Serotonin 5-HT3 tại vùng kích hoạt CTZ"
    ],
    "correct": 0,
    "explanation": "Cung phản xạ say tàu xe từ mê đạo tai trong truyền tín hiệu qua các synap cholinergic và histaminergic tại nhân tiền đình. Thuốc thế hệ 1 vào não chẹn cả thụ thể H1 và M trung ương, cắt đứt dẫn truyền này; trong khi thế hệ 2 không vào não nên không có tác dụng chống say tàu xe.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 86,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Các thuốc tẩy giun dẫn chất Benzimidazol (như Albendazol, Mebendazol) tiêu diệt ký sinh trùng thông qua cơ chế phân tử nào sau đây?",
    "options": [
      "Ức chế enzym acetylcholinesterase làm giun bị co giật",
      "Kích thích mở kênh Clo phụ thuộc glutamat làm tê liệt giun",
      "Gắn chọn lọc vào tiểu phần beta-tubulin của giun, ức chế quá trình trùng hợp vi ống (microtubules) làm gián đoạn thu nhận glucose và thoái hóa cấu trúc tế bào giun",
      "Phá hủy màng tế bào giun thông qua tạo các gốc tự do oxy hóa"
    ],
    "correct": 2,
    "explanation": "Albendazol và Mebendazol gắn đặc hiệu vào beta-tubulin của giun (ái lực cao hơn tubulin người hàng trăm lần), ức chế quá trình trùng hợp thành vi ống (microtubules). Mất vi ống làm tế bào giun mất khả năng vận chuyển bài tiết, ức chế bắt giữ glucose, làm cạn kiệt glycogen khiến giun bất động và chết chậm.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 87,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Nguyên tắc sử dụng thuốc Albendazol có sự khác biệt đối lập căn bản giữa chỉ định điều trị nhiễm giun đường ruột thông thường và điều trị ấu trùng sán mô bào (Nang sán chó Echinococcus hoặc Ấu trùng sán lợn ở não) như thế nào?",
    "options": [
      "Trị giun đường ruột uống lúc đói để thuốc ít hấp thu tập trung trong lòng ruột; còn trị ấu trùng mô bào bắt buộc uống cùng bữa ăn giàu chất béo để tăng hấp thu vào máu gấp 4 - 5 lần",
      "Trị giun ruột cần tiêm bắp; còn trị sán mô uống dạng viên bao tan",
      "Cả hai trường hợp đều bắt buộc phải uống vào lúc nửa đêm cùng nước đường",
      "Trị giun ruột uống liều cao duy nhất 1 lần; còn trị sán mô uống liều cực nhỏ ngắt quãng"
    ],
    "correct": 0,
    "explanation": "Albendazol rất ít tan trong nước, hấp thu qua ruột lúc đói chỉ < 5% (thích hợp diệt giun đũa, giun móc tại lòng ruột). Khi điều trị ấu trùng sán dải ở mô sâu (não, gan), bắt buộc phải uống cùng bữa ăn có chất béo để tăng độ tan và tăng sinh khả dụng vào máu lên gấp 4-5 lần tạo nồng độ diệt ấu trùng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 88,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Pyrantel pamoat là thuốc tẩy giun có cơ chế tác dụng làm tê liệt cơ giun thông qua cơ chế thần kinh cơ nào?",
    "options": [
      "Ức chế tổng hợp acetylcholin tại hạch thần kinh giun",
      "Kích thích khử cực kéo dài các thụ thể Nicotinic tại khớp nối thần kinh cơ của giun và ức chế cholinesterase, gây liệt cứng (spastic paralysis) khiến giun bị nhu động ruột tống ra ngoài",
      "Kích hoạt thụ thể GABA gây liệt mềm toàn thân giun",
      "Phong bế các kênh ion natri phụ thuộc điện thế"
    ],
    "correct": 1,
    "explanation": "Pyrantel pamoat là chất chủ vận mạnh tại thụ thể Nicotinic acetylcholine ở màng sau synap của giun, gây khử cực liên tục dẫn đến co cứng cơ dữ dội và liệt cứng (spastic paralysis). Giun bị liệt cứng mất khả năng bám vào thành ruột và bị nhu động đẩy ra ngoài theo phân.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 89,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Praziquantel là thuốc lựa chọn hàng đầu điều trị các bệnh sán lá (sán lá gan, sán lá phổi, sán máng) và sán dây nhờ cơ chế làm biến đổi tính thấm màng tế bào ký sinh trùng đối với ion nào?",
    "options": [
      "Ion Natri (Na+)",
      "Ion Magnesi (Mg2+)",
      "Ion Kali (K+)",
      "Ion Calci (Ca2+) - làm calci tràn vào bào tương gây co cứng cơ tức thì và phân rã lớp vỏ sán"
    ],
    "correct": 3,
    "explanation": "Praziquantel làm tăng đột ngột tính thấm của màng tế bào sán đối với ion Ca2+, làm dòng Ca2+ ồ ạt tràn vào trong bào tương. Điều này gây co thắt và liệt cứng cơ sán lập tức, đồng thời tạo các bọng nước làm vỡ lớp vỏ bao (tegument), bộc lộ kháng nguyên cho hệ miễn dịch vật chủ tiêu diệt.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 90,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc Niclosamid diệt sán dây dải lợn (Taenia solium) có nguy cơ gây biến chứng bệnh ấu trùng sán lợn ở não (Neurocysticercosis) nếu không áp dụng biện pháp phòng ngừa nào?",
    "options": [
      "Tiêm kèm kháng sinh Cephalosporin thế hệ 3",
      "Uống kèm thuốc chống nôn Domperidon liều cao",
      "Bắt buộc phải uống thuốc nhuận tràng muối (như Magnesi sulfat) sau khi uống Niclosamid khoảng 2 giờ để tống sạch đốt sán bị phân rã và trứng sán ra ngoài",
      "Uống thuốc liên tục trong vòng 30 ngày không nghỉ"
    ],
    "correct": 2,
    "explanation": "Niclosamid giết chết đầu và đốt sán nhưng không giết được trứng sán. Khi đốt sán bị tiêu hóa trong ruột, hàng triệu trứng sán giải phóng ra; nếu bị trào ngược lên dạ dày hoặc nở trong ruột non, ấu trùng sẽ xuyên thành mạch di chuyển lên não gây bệnh ấu trùng sán lợn ở não. Cần tẩy xổ muối ngay sau 2 giờ để tống sạch trứng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 91,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Ivermectin là thuốc lựa chọn hàng đầu điều trị bệnh giun chỉ Onchocerca (gây mù do giun chỉ ở sông) và bệnh ấu trùng giun lươn (Strongyloides stercoralis) nhờ cơ chế phân tử nào?",
    "options": [
      "Gắn chọn lọc vào các kênh Clo phụ thuộc Glutamat (GluCl) ở tế bào thần kinh và cơ của giun, gây ưu phân cực và liệt mềm ký sinh trùng",
      "Ức chế tổng hợp protein thông qua tiểu phần 30S ribosom",
      "Phá hủy màng tế bào giun thông qua ức chế sinh tổng hợp ergosterol",
      "Chẹn kênh calci màng trước synap thần kinh giun"
    ],
    "correct": 0,
    "explanation": "Ivermectin gắn đặc hiệu vào các kênh Clo nhạy cảm Glutamat (GluCl) - kênh chỉ có ở động vật không xương sống (không có ở người). Thuốc làm tăng tính thấm ion Cl- vào tế bào, gây ưu phân cực màng, làm tê liệt mềm (flaccid paralysis) cơ quan vận động và họng của giun khiến chúng chết đói.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 92,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Metronidazol và các dẫn chất 5-nitroimidazol phát huy tác dụng diệt vi khuẩn kỵ khí và ký sinh trùng đơn bào (amip, trichomonas, giardia) thông qua phản ứng chuyển hóa nội bào nào?",
    "options": [
      "Ức chế tổng hợp thành tế bào peptidoglycan",
      "Nhóm nitro (-NO2) của thuốc được khử bởi enzym ferredoxin của ký sinh trùng tạo các gốc tự do nitro ngắn hạn phá hủy cấu trúc chuỗi xoắn kép DNA",
      "Chẹn thụ thể dopamin D2 trên màng sinh chất",
      "Kích thích enzym superoxide dismutase gây cạn kiệt hydroperoxyd"
    ],
    "correct": 1,
    "explanation": "Metronidazol là tiền chất. Trong môi trường yếm khí của amip hoặc vi khuẩn kỵ khí, protein vận chuyển electron ferredoxin khử nhóm nitro (-NO2) của thuốc thành các gốc tự do dạng khử có độc tính cao. Các gốc tự do này tấn công bẻ gãy chuỗi xoắn kép DNA, làm đứt gãy DNA và giết chết ký sinh trùng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 93,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Phản ứng kiểu Disulfiram (Antabuse-like reaction) với đỏ bừng mặt, nhức đầu dữ dội, nôn mửa liên tục và tụt huyết áp xảy ra khi bệnh nhân uống rượu trong thời gian điều trị bằng thuốc nào?",
    "options": [
      "Albendazol",
      "Praziquantel",
      "Pyrantel pamoat",
      "Metronidazol (hoặc Tinidazol)"
    ],
    "correct": 3,
    "explanation": "Metronidazol ức chế enzym Aldehyd Dehydrogenase ở gan, ngăn cản chuyển hóa acetaldehyd thành acid acetic khi uống rượu. Acetaldehyd ứ đọng với nồng độ cao trong máu gây đỏ bừng mặt, tim đập nhanh, buồn nôn, nôn mửa dữ dội và tụt huyết áp. Cấm uống rượu trong khi dùng và sau khi ngừng thuốc 72 giờ.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 94,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong điều trị bệnh lỵ amip thể mô cấp tính hoặc áp xe gan do amip (Entamoeba histolytica), nguyên tắc bắt buộc sau khi kết thúc đợt điều trị bằng Metronidazol là gì?",
    "options": [
      "Tiếp tục uống Metronidazol liều gấp đôi trong 3 tháng tiếp theo",
      "Tiêm bắp sâu dung dịch Emetin mỗi tuần một lần",
      "Bắt buộc phải dùng tiếp một đợt thuốc diệt amip lòng ruột (như Diloxanid furoat hoặc Paromomycin) để tiệt trừ hoàn toàn thể bào nang amip trong lòng ruột",
      "Cho bệnh nhân uống dung dịch cồn y tế để khử trùng đường ruột"
    ],
    "correct": 2,
    "explanation": "Metronidazol chỉ diệt thể amip hoạt động (trophozoite) xâm lấn ở mô ruột và gan, hoàn toàn không có tác dụng trên thể bào nang (cyst) trong lòng ruột. Nếu không dùng thêm thuốc diệt amip lòng ruột (như Diloxanid furoat), bào nang sẽ tiếp tục tồn tại, tái phát bệnh và làm người bệnh trở thành nguồn lây mầm bệnh.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 95,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng không mong muốn thường gặp và vô hại của Metronidazol khiến bệnh nhân lo lắng nhưng là bình thường là hiện tượng nào?",
    "options": [
      "Làm nước tiểu đổi thành màu nâu sẫm hoặc đỏ nâu do các chất chuyển hóa hòa tan của thuốc",
      "Làm rụng toàn bộ lông mi và lông mày",
      "Làm phân có màu trắng bệch như phân cò",
      "Làm da xuất hiện các đốm sắc tố màu xanh lơ"
    ],
    "correct": 0,
    "explanation": "Các chất chuyển hóa có màu của Metronidazol bài tiết qua thận làm nước tiểu có màu sẫm tối hoặc đỏ nâu. Hiện tượng này hoàn toàn lành tính và sẽ tự biến mất sau khi ngừng thuốc, cần dặn trước để bệnh nhân yên tâm tuân thủ điều trị.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 96,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Chống chỉ định quan trọng nào sau đây áp dụng cho Albendazol và Mebendazol do độc tính trên sự phát triển của thai nhi?",
    "options": [
      "Bệnh nhân tăng huyết áp vô căn đang dùng thuốc chẹn kênh calci",
      "Phụ nữ có thai (đặc biệt trong 3 tháng đầu thai kỳ) và trẻ em dưới 1 tuổi do nguy cơ gây quái thai và ức chế tủy",
      "Người cao tuổi bị bệnh phổi tắc nghẽn mạn tính",
      "Bệnh nhân đái tháo đường đang kiểm soát đường huyết tốt"
    ],
    "correct": 1,
    "explanation": "Albendazol và Mebendazol ức chế trùng hợp tubulin của phôi thai, có bằng chứng gây dị tật thai nhi và tiêu thai trên động vật thực nghiệm. Thuốc chống chỉ định trong thai kỳ (đặc biệt 3 tháng đầu) và thận trọng cho phụ nữ có ý định mang thai (cần tránh thai 1 tháng sau khi uống thuốc).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 97,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Đích tác động sinh học nào tại tế bào gan là bước giới hạn tốc độ tổng hợp cholesterol nội sinh, bị ức chế cạnh tranh trực tiếp bởi nhóm thuốc Statin?",
    "options": [
      "Enzym 3-Hydroxy-3-Methylglutaryl-Coenzym A Reductase (HMG-CoA Reductase)",
      "Enzym Squalene epoxidase trong chuỗi tổng hợp lanosterol",
      "Enzym 7-alpha-hydroxylase chuyển hóa cholesterol thành acid mật",
      "Protein vận chuyển microsomal triglycerid transfer protein (MTP)"
    ],
    "correct": 0,
    "explanation": "HMG-CoA Reductase là enzym xúc tác chuyển đổi HMG-CoA thành acid mevalonic - đây là phản ứng giới hạn tốc độ và quyết định của toàn bộ chuỗi sinh tổng hợp cholesterol tại tế bào gan. Statin có cấu trúc tương tự HMG-CoA, ức chế cạnh tranh mạnh mẽ enzym này.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 98,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cơ chế chính yếu giải thích tại sao sự ức chế tổng hợp cholesterol tại tế bào gan của Statin lại dẫn đến sụt giảm mạnh nồng độ LDL-Cholesterol lưu hành trong máu là gì?",
    "options": [
      "Làm tăng đào thải trực tiếp LDL-C qua đường lọc vi cầu thận",
      "Gây kết tủa và phá hủy các hạt lipoprotein LDL ngay trong lòng mạch",
      "Nồng độ cholesterol nội bào giảm kích hoạt yếu tố SREBP-2, làm tăng phiên mã và tăng mật độ thụ thể LDL trên bề mặt tế bào gan, kéo LDL từ máu vào gan",
      "Ức chế sự bài tiết của enzym lipase tụy tại lòng ruột non"
    ],
    "correct": 2,
    "explanation": "Khi cholesterol nội bào giảm, protein SREBP-2 được chuyển vào nhân kích hoạt phiên mã gen thụ thể LDL, làm tăng số lượng thụ thể LDL ở màng tế bào gan. Các thụ thể này tăng cường bắt giữ và thanh thải LDL và VLDL từ máu vào tế bào gan, làm giảm 20-60% LDL-C máu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 99,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tại sao các thuốc Statin có thời gian bán thải ngắn (như Simvastatin, Lovastatin, Pravastatin) được khuyến cáo bắt buộc phải uống vào buổi tối trước khi đi ngủ?",
    "options": [
      "Để giảm tác dụng phụ gây kích ứng và đau rát dạ dày ban ngày",
      "Do enzym HMG-CoA Reductase ở gan tổng hợp cholesterol nội sinh mạnh nhất vào ban đêm từ 0 giờ đến 4 giờ sáng",
      "Để tăng liên kết của thuốc với albumin huyết tương khi ngủ",
      "Để tránh hiện tượng thuốc bị ánh sáng mặt trời quang hóa làm giảm hoạt tính"
    ],
    "correct": 1,
    "explanation": "Sinh tổng hợp cholesterol tại tế bào gan tuân theo nhịp sinh học ngày đêm, đạt cường độ cao nhất vào ban đêm khi cơ thể nhịn ăn (từ nửa đêm đến rạng sáng). Do đó, statin bán thải ngắn cần uống buổi tối trước khi ngủ để nồng độ thuốc đạt đỉnh đúng lúc enzym hoạt động mạnh nhất.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 100,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hai thuốc Statin nào sau đây có thời gian bán thải sinh học kéo dài (T1/2 từ 14 đến 20 giờ) và có hiệu lực hạ LDL-C mạnh nhất, cho phép uống linh hoạt vào bất kỳ thời điểm nào trong ngày?",
    "options": [
      "Fluvastatin và Pravastatin",
      "Simvastatin và Lovastatin",
      "Cerivastatin và Pitavastatin",
      "Atorvastatin và Rosuvastatin"
    ],
    "correct": 3,
    "explanation": "Atorvastatin (T1/2 = 14h) và Rosuvastatin (T1/2 = 19h) là hai statin thế hệ mới có thời gian bán thải kéo dài và hiệu lực hạ LDL-C vượt trội (thuộc nhóm statin cường độ cao), cho phép bệnh nhân uống vào bất kỳ thời điểm nào trong ngày mà không phụ thuộc vào bữa ăn hay ban đêm.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 101,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Biến chứng cơ vân nghiêm trọng nhất có thể dẫn tới tử vong do suy thận cấp hoại tử ống thận liên quan đến độc tính của Statin là hội chứng nào?",
    "options": [
      "Tiêu cơ vân cấp tính (Rhabdomyolysis) kèm theo tăng vọt enzym Creatine Kinase (CK > 10 lần) và myoglobin niệu",
      "Viêm bao gân gót Achille cấp tính kèm đứt gân tự phát",
      "Hội chứng nhược cơ ác tính do tự kháng thể kháng thụ thể acetylcholin",
      "Xơ hóa cơ delta tiến triển lan tỏa sang cơ hoành"
    ],
    "correct": 0,
    "explanation": "Tiêu cơ vân cấp (Rhabdomyolysis) làm tế bào cơ bị ly giải ồ ạt, giải phóng Myoglobin vào tuần hoàn gây tắc ống thận dẫn đến suy thận cấp vô niệu. Dấu hiệu chẩn đoán là đau cơ dữ dội, nước tiểu sẫm màu như nước trà/xá xị và men CK tăng gấp trên 10-40 lần giới hạn trên.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 102,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Nguy cơ tổn thương cơ và tiêu cơ vân cấp tăng vọt gấp 10 - 20 lần khi phối hợp thuốc Statin với hoạt chất hạ lipid máu nào sau đây?",
    "options": [
      "Nhựa gắn acid mật Cholestyramin",
      "Thuốc ức chế hấp thu cholesterol Ezetimibe",
      "Gemfibrozil (dẫn chất Fibrat)",
      "Dầu cá chứa acid béo Omega-3 (EPA/DHA)"
    ],
    "correct": 2,
    "explanation": "Gemfibrozil ức chế quá trình glucuronid hóa của statin và ức chế protein vận chuyển OATP1B1 đưa statin vào gan, làm nồng độ statin tự do trong máu tăng vọt gấp nhiều lần, đẩy nguy cơ tiêu cơ vân lên rất cao. Nếu bắt buộc phối hợp Statin với Fibrat, Fenofibrat là lựa chọn an toàn hơn nhiều.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 103,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Các thuốc hạ lipid máu nhóm Fibrat (như Fenofibrat, Gemfibrozil) phát huy tác dụng hạ Triglycerid máu vượt trội thông qua cơ chế phân tử nào?",
    "options": [
      "Kích thích chọn lọc enzym HMG-CoA Synthase tại ty thể tế bào mỡ",
      "Chủ vận thụ thể nhân PPAR-alpha (Peroxisome Proliferator-Activated Receptor Alpha), tăng biểu hiện Lipoprotein Lipase (LPL) và tăng oxy hóa acid béo",
      "Ức chế protein vận chuyển cholesterol NPC1L1 tại biểu mô ruột non",
      "Đối kháng thụ thể PCSK9 trên bề mặt màng tế bào gan"
    ],
    "correct": 1,
    "explanation": "Fibrat là các chất chủ vận chọn lọc trên thụ thể nhân PPAR-alpha. Hoạt hóa PPAR-alpha làm tăng tổng hợp enzym Lipoprotein Lipase (LPL) ở nội mô mao mạch (thủy phân triglycerid trong VLDL và chylomicron), giảm apoC-III và tăng apoA-I/apoA-II (làm tăng HDL-C).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 104,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Chỉ định lâm sàng hàng đầu và ưu tiên tuyệt đối của nhóm thuốc Fibrat (Fenofibrat) trong thực hành y khoa là tình huống nào?",
    "options": [
      "Tăng Cholesterol máu gia đình đồng hợp tử có LDL-C > 500 mg/dL",
      "Xơ vữa động mạch cảnh không có rối loạn triglycerid",
      "Dự phòng thứ phát nhồi máu não cấp trong vòng 24 giờ",
      "Tăng Triglycerid máu nặng (Triglycerid >= 500 mg/dL hoặc >= 5.6 mmol/L) để phòng ngừa viêm tụy cấp"
    ],
    "correct": 3,
    "explanation": "Khi Triglycerid máu tăng rất cao (>= 500 mg/dL, đặc biệt > 1000 mg/dL), các hạt chylomicron ứ đọng làm tắc vi tuần hoàn tụy, enzym lipase giải phóng acid béo tự do gây hoại tử tụy cấp. Mục tiêu hàng đầu lúc này là dùng Fibrat để hạ nhanh triglycerid ngừa viêm tụy cấp.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 105,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cơ chế tác dụng chọn lọc độc nhất vô nhị của Ezetimibe trong việc hạ cholesterol máu là gì?",
    "options": [
      "Ức chế đặc hiệu protein vận chuyển Niemann-Pick C1-Like 1 (NPC1L1) tại diềm bàn chải ruột non, ngăn cản hấp thu cholesterol từ thức ăn và dịch mật",
      "Tạo phức chelate không tan với acid mật trong lòng hồi tràng",
      "Ức chế enzym tổng hợp apolipoprotein B-100 tại gan",
      "Kích hoạt enzym Lecithin-Cholesterol Acyltransferase (LCAT) trong máu"
    ],
    "correct": 0,
    "explanation": "Ezetimibe gắn và ức chế chọn lọc protein vận chuyển NPC1L1 ở diềm bàn chải biểu mô ruột non, làm giảm khoảng 50% sự hấp thu cholesterol từ thức ăn và dịch mật vào tế bào ruột mà không làm giảm hấp thu triglycerid, acid béo hay các vitamin tan trong dầu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 106,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng phụ cơn đỏ bừng mặt (Flushing), bốc hỏa và ngứa ngáy dữ dội sau khi uống Acid Nicotinic (Niacin / Vitamin B3) xuất phát từ chất trung gian hóa học nào?",
    "options": [
      "Histamin phóng thích từ bạch cầu ái kiềm",
      "Serotonin giải phóng từ tế bào ưa crôm đường tiêu hóa",
      "Prostaglandin D2 (PGD2) và Prostaglandin E2 (PGE2) được giải phóng tại mao mạch dưới da",
      "Bradykinin tích tụ do enzym Kininase II bị bất hoạt"
    ],
    "correct": 2,
    "explanation": "Niacin kích hoạt thụ thể GPR109A ở tế bào sừng và tế bào Langerhans tại da, kích thích phospholipase A2 giải phóng PGD2 và PGE2 gây giãn mạnh các mao mạch da mặt và ngực trên, gây đỏ bừng mặt và ngứa dữ dội. Uống Aspirin 325mg trước 30 phút sẽ dự phòng được.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 107,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trước khi chỉ định Primaquin để điều trị tiệt căn chống tái phát sốt rét do Plasmodium vivax, xét nghiệm sàng lọc bắt buộc phải thực hiện cho bệnh nhân là gì?",
    "options": [
      "Định lượng nồng độ men gan AST và ALT",
      "Xét nghiệm chức năng đông máu cơ bản",
      "Định lượng hoạt độ enzym Glucose-6-Phosphat Dehydrogenase (G6PD) trong hồng cầu để phòng ngừa nguy cơ tan máu cấp tính tử vong",
      "Điện giải đồ máu toàn phần"
    ],
    "correct": 2,
    "explanation": "Primaquin và các chất chuyển hóa có tính oxy hóa mạnh. Ở bệnh nhân thiếu hụt men G6PD, hồng cầu không sản xuất đủ NADPH để tái tạo glutathione khử, màng hồng cầu bị oxy hóa dẫn đến vỡ hồng cầu ồ ạt, gây cơn tan máu cấp tính, tiểu huyết sắc tố và suy thận cấp đe dọa tính mạng. Bắt buộc phải thử G6PD trước khi dùng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 108,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Primaquin là thuốc chống sốt rét DUY NHẤT có khả năng tác động lên giai đoạn nào trong chu kỳ sinh học của ký sinh trùng Plasmodium?",
    "options": [
      "Tiêu diệt thể ngủ ẩn trong tế bào gan (Hypnozoite) của P. vivax và P. ovale để chống tái phát xa, đồng thời diệt thể giao bào trong máu ngăn ngừa lây truyền",
      "Chỉ diệt thể phân liệt vô tính trong hồng cầu để cắt cơn sốt",
      "Tiêu diệt thoa trùng (sporozoite) ngay khi muỗi vừa đốt truyền vào máu",
      "Làm biến đổi hình thái hồng cầu khiến ký sinh trùng không xâm nhập được"
    ],
    "correct": 0,
    "explanation": "Hypnozoite (thể ngủ trong gan) là nguyên nhân gây ra các cơn sốt rét tái phát xa sau nhiều tháng hoặc nhiều năm ở P. vivax và P. ovale. Primaquin (và Tafenoquine) là thuốc duy nhất diệt sạch thể ẩn này để điều trị tiệt căn hoàn toàn, đồng thời diệt thể giao bào (gametocyte) ngăn muỗi truyền bệnh sang người khác.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 109,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cơ chế phân tử của Chloroquin tiêu diệt ký sinh trùng sốt rét trong không bào tiêu hóa của hồng cầu dựa trên phản ứng nào?",
    "options": [
      "Ức chế enzym tổng hợp acid folic của ký sinh trùng",
      "Ức chế quá trình trùng hợp Heme độc thành Hemozoin (sắc tố sốt rét không độc), khiến Heme tự do tích tụ đầu độc và làm thủng màng không bào ký sinh trùng",
      "Phá hủy chuỗi DNA của ký sinh trùng thông qua alkyl hóa",
      "Chẹn kênh calci màng sinh chất của ký sinh trùng"
    ],
    "correct": 1,
    "explanation": "Ký sinh trùng ăn hemoglobin giải phóng phân tử Heme (ferriprotoporphyrin IX) rất độc. Để tự vệ, ký sinh trùng trùng hợp heme thành tinh thể hemozoin trơ không độc. Chloroquin tích tụ ở không bào tiêu hóa (pH acid), gắn vào heme ngăn tạo hemozoin. Heme tự do tích tụ làm vỡ màng không bào và giết chết ký sinh trùng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 110,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh lý võng mạc hình mắt bò (Bull's Eye Maculopathy) gây mất thị lực trung tâm không hồi phục là tác dụng phụ nguy hiểm của hoạt chất chống sốt rét nào khi dùng liều cao kéo dài?",
    "options": [
      "Primaquin",
      "Artesunat",
      "Quinin sulfat",
      "Chloroquin (hoặc Hydroxychloroquin)"
    ],
    "correct": 3,
    "explanation": "Chloroquin có ái lực rất cao với sắc tố melanin ở biểu mô sắc tố võng mạc mắt. Dùng liều cao kéo dài (thường gặp khi điều trị lupus ban đỏ hoặc viêm khớp dạng thấp) gây lắng đọng giác mạc và thoái hóa hoàng điểm hình mắt bò (Bull's eye maculopathy) không hồi phục. Bắt buộc khám đáy mắt định kỳ.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 111,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tam chứng lâm sàng kinh điển của hội chứng nhiễm độc Cinchonism khi sử dụng Quinin liều cao hoặc truyền tĩnh mạch nhanh gồm những dấu hiệu nào?",
    "options": [
      "Co cứng cơ, tetany và sốt cao ác tính",
      "Ho khan, khó thở và phù phổi cấp",
      "Ù tai, giảm thính lực (nghe kém), chóng mặt, nhìn mờ kèm buồn nôn và nhức đầu dữ dội",
      "Phù mắt cá chân hai bên và tăng huyết áp kịch phát"
    ],
    "correct": 2,
    "explanation": "Hội chứng Cinchonism là biểu hiện nhiễm độc alkaloid Canh-ki-na (Quinin, Quinidin). Thuốc tác động lên ốc tai, tiền đình và thị thần kinh gây ù tai, điếc thoáng qua, hoa mắt chóng mặt, ám điểm thị giác kèm theo đau đầu dữ dội, buồn nôn; các triệu chứng này hồi phục khi ngừng hoặc giảm liều.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 112,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng phụ hạ đường huyết đột ngột và nghiêm trọng trong điều trị sốt rét ác tính bằng Quinin truyền tĩnh mạch xuất phát từ cơ chế nào?",
    "options": [
      "Quinin kích thích trực tiếp tế bào beta đảo tụy tăng bài tiết Insulin vào máu",
      "Quinin ức chế tân tạo glucose tại tế bào gan",
      "Ký sinh trùng sốt rét tiêu thụ toàn bộ lượng glucose trong máu",
      "Quinin làm tăng đào thải glucose qua nước tiểu tại ống thận"
    ],
    "correct": 0,
    "explanation": "Quinin đóng kênh K_ATP ở tế bào beta đảo tụy, kích thích trực tiếp sự bài tiết insulin quá mức. Ở phụ nữ mang thai hoặc bệnh nhân sốt rét ác tính, nguy cơ hạ đường huyết sâu rất cao. Bắt buộc phải pha Quinin truyền trong dung dịch Glucose 5% hoặc 10% và theo dõi đường huyết liên tục.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 113,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Các dẫn chất của Artemisinin (như Artesunat, Artemether, Dihydroartemisinin) phát huy tác dụng diệt thể phân liệt ký sinh trùng sốt rét cực nhanh nhờ cấu trúc hóa học độc đáo nào?",
    "options": [
      "Vòng lacton 5 cạnh chưa bão hòa",
      "Cầu nối nội Peroxyd (Endoperoxide bridge - C-O-O-C) bị sắt của Heme xúc tác bẻ gãy, sinh ra các gốc tự do có tính oxy hóa cực mạnh phá hủy màng và protein ký sinh trùng",
      "Nhân quinolin gắn clo ở vị trí C7",
      "Chuỗi peptid mạch nhánh 14 acid amin"
    ],
    "correct": 1,
    "explanation": "Artemisinin là sesquiterpene lactone có cầu nối nội peroxyd (endoperoxide bridge). Khi vào không bào tiêu hóa của ký sinh trùng, ion sắt Fe2+ của heme sẽ cắt cầu nối peroxyd này sinh ra các gốc tự do carbon (carbon-centered free radicals) có hoạt tính cao, alkyl hóa và phá hủy enzym PfATP6 và màng tế bào ký sinh trùng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 114,
    "subject": "duocly2",
    "chapter": "KTGHP",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân nam 62 tuổi có tiền sử suy tim mạn tính đang điều trị duy trì bằng Digoxin. Bác sĩ kê thêm thuốc lợi tiểu quai Furosemid liều cao để rút dịch phù mà không bù Kali. Hậu quả tương tác dược lực học nguy hiểm nhất có thể xảy ra là gì?",
    "options": [
      "Furosemid gây hạ Kali máu làm tăng ái lực gắn của Digoxin vào bơm Na+/K+-ATPase, đẩy nồng độ độc tính lên cao kích hoạt các cơn loạn nhịp thất chết người",
      "Furosemid làm tăng độ thanh thải của Digoxin dẫn đến mất tác dụng trợ tim",
      "Digoxin làm bất hoạt tác dụng bài niệu của Furosemid tại quai Henle",
      "Hai thuốc tạo phức kết tủa không tan trong lòng ống thận gây suy thận cấp"
    ],
    "correct": 0,
    "explanation": "Furosemid ức chế tái hấp thu Na+/K+/2Cl- gây mất K+ qua nước tiểu, dẫn đến hạ Kali máu. Do ion K+ và Digoxin cạnh tranh gắn vào vị trí tiểu đơn vị alpha của bơm Na+/K+-ATPase, hạ K+ máu làm Digoxin gắn chặt hơn vào thụ thể, gây ngộ độc loạn nhịp thất nặng (kể cả khi nồng độ Digoxin trong máu ở mức bình thường).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 115,
    "subject": "duocly2",
    "chapter": "KTGHP",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tương tác dược lực học đối kháng (Antagonism) xảy ra giữa thuốc giãn phế quản chủ vận beta-2 adrenergic (Salbutamol) và thuốc hạ áp nào sau đây có thể đẩy bệnh nhân hen vào cơn suy hô hấp cấp tính?",
    "options": [
      "Thuốc chẹn kênh calci Amlodipin",
      "Thuốc ức chế men chuyển Enalapril",
      "Thuốc chẹn beta-adrenergic không chọn lọc (Propranolol, Timolol nhỏ mắt)",
      "Thuốc lợi tiểu Thiazid"
    ],
    "correct": 2,
    "explanation": "Propranolol chẹn không chọn lọc cả thụ thể beta-1 và beta-2. Thuốc đối kháng cạnh tranh trực tiếp tại thụ thể beta-2 trên cơ trơn phế quản, triệt tiêu hoàn toàn tác dụng giãn phế quản của Salbutamol, đồng thời gây co thắt phế quản cấp tính nặng đe dọa tính mạng người bệnh hen.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 116,
    "subject": "duocly2",
    "chapter": "KTGHP",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Một phụ nữ 24 tuổi đang dùng thuốc tránh thai đường uống kết hợp (chứa Ethinylestradiol và Levonorgestrel) được bác sĩ kê đơn điều trị bệnh lao bằng phác đồ có Rifampicin. Sau 2 tháng, bệnh nhân phát hiện có thai ngoài ý muốn. Cơ chế tương tác dược động học dẫn đến thất bại này là gì?",
    "options": [
      "Rifampicin làm tăng đào thải hormon tránh thai qua nước tiểu",
      "Rifampicin là chất cảm ứng enzym Cytochrom P450 (đặc biệt CYP3A4) cực mạnh tại gan, làm tăng tốc độ chuyển hóa thoái giáng estrogen và progestin, khiến nồng độ hormon trong máu giảm sâu dưới ngưỡng ức chế rụng trứng",
      "Rifampicin phá hủy cấu trúc của màng niêm mạc tử cung",
      "Rifampicin cạnh tranh thụ thể estrogen tại vùng dưới đồi"
    ],
    "correct": 1,
    "explanation": "Rifampicin kích hoạt thụ thể nhân PXR, gây cảm ứng tăng tổng hợp enzym CYP3A4 và protein vận chuyển P-gp tại gan và ruột. Nồng độ enzym tăng cao làm tốc độ chuyển hóa Ethinylestradiol tăng vọt, nồng độ hormon máu giảm sâu dẫn đến mất tác dụng ức chế rụng trứng và vỡ kế hoạch có thai.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 117,
    "subject": "duocly2",
    "chapter": "KTGHP",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tại sao việc uống chung nước ép bưởi chùm (Grapefruit juice) với thuốc hạ lipid máu Simvastatin hoặc thuốc hạ áp Amlodipin lại có thể gây tụt huyết áp nghiêm trọng hoặc tiêu cơ vân cấp?",
    "options": [
      "Nước bưởi chùm chứa lượng lớn acid citric gây toan hóa máu",
      "Nước bưởi chùm làm tăng tiết acid dịch vị phá hủy thuốc",
      "Nước bưởi chùm kích thích bài tiết insulin gây hạ đường huyết",
      "Các chất Furanocoumarin (như Bergapten, Dihydroxybergamottin) trong bưởi chùm ức chế không hồi phục enzym CYP3A4 ở biểu mô ruột non, làm giảm chuyển hóa bước đầu qua ruột khiến sinh khả dụng của thuốc tăng vọt gấp 3 - 5 lần"
    ],
    "correct": 3,
    "explanation": "Furanocoumarin trong bưởi chùm bất hoạt không hồi phục enzym CYP3A4 tại niêm mạc ruột non kéo dài 24-72 giờ (cần thời gian để ruột tổng hợp enzym mới). Các thuốc chuyển hóa bước đầu qua ruột mạnh (Simvastatin, Lovastatin, Felodipin, Amlodipin) sẽ ùa vào máu với nồng độ tăng gấp 3-10 lần, gây tiêu cơ vân hoặc trụy mạch.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 118,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cơ chế phân tử cốt lõi giải thích tác dụng chống viêm cực mạnh của các Glucocorticoid (như Prednisolon, Dexamethason) liên quan trực tiếp đến việc kích thích tế bào tăng tổng hợp protein nội bào nào?",
    "options": [
      "Protein Cyclooxygenase-2 (COX-2) ở tế bào nội mô",
      "Protein Calmodulin liên kết ion calci",
      "Protein Lipocortin-1 (Annexin A1), có khả năng ức chế trực tiếp enzym Phospholipase A2",
      "Protein P-glycoprotein tại màng đáy tế bào gan"
    ],
    "correct": 2,
    "explanation": "Glucocorticoid gắn vào thụ thể GR nội bào, đi vào nhân làm tăng phiên mã gen Lipocortin-1 (Annexin A1). Lipocortin-1 ức chế enzym Phospholipase A2, ngăn chặn sự giải phóng Acid arachidonic từ màng tế bào, từ đó chặn đứng toàn bộ con đường sinh tổng hợp cả Prostaglandin lẫn Leukotriene.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 119,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thời điểm dùng thuốc tối ưu trong ngày khi sử dụng Glucocorticoid đường toàn thân điều trị bệnh mạn tính để giảm thiểu tối đa nguy cơ ức chế trục Dưới đồi - Tuyến yên - Thượng thận (HPA) là gì?",
    "options": [
      "Uống 1 liều duy nhất vào khoảng 7 - 8 giờ sáng cùng bữa ăn sáng (hoặc dùng phác đồ cách nhật)",
      "Uống vào buổi tối trước khi đi ngủ để ức chế tiết cortisol ban đêm",
      "Chia đều thành 4 lần uống cách nhau mỗi 6 giờ trong ngày",
      "Uống vào buổi trưa ngay trước khi ăn bữa trưa"
    ],
    "correct": 0,
    "explanation": "Trục HPA tiết Cortisol theo nhịp sinh học tự nhiên, nồng độ đạt đỉnh cao nhất vào khoảng 8 giờ sáng và thấp nhất vào nửa đêm. Uống thuốc vào 8 giờ sáng trùng với đỉnh sinh lý của cơ thể, do đó ít gây ức chế ngược trục HPA nhất, giảm thiểu nguy cơ teo vỏ thượng thận.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 120,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tại sao khi điều trị bằng Glucocorticoid liều cao kéo dài trên 2 - 3 tuần, nguyên tắc bắt buộc khi muốn ngừng thuốc là phải giảm liều từ từ (Tapering) mà không được dừng đột ngột?",
    "options": [
      "Do thuốc tích lũy nhiều ở mô mỡ cần thời gian đào thải",
      "Vỏ thượng thận đã bị teo và giảm chức năng sau thời gian dài bị ức chế trục HPA; dừng đột ngột sẽ dẫn đến cơn Suy thượng thận cấp (Acute adrenal crisis) trụy tim mạch tử vong",
      "Để ngăn ngừa nguy cơ hạ đường huyết kịch phát do bùng phát insulin",
      "Để tránh tình trạng tăng huyết áp dội ngược do tăng aldosteron"
    ],
    "correct": 1,
    "explanation": "Dùng corticoid kéo dài ức chế bài tiết CRH và ACTH làm vỏ thượng thận teo dần. Khi dừng thuốc đột ngột, tuyến thượng thận chưa kịp phục hồi khả năng bài tiết cortisol sinh lý, đẩy bệnh nhân vào cơn suy thượng thận cấp tính (tụt huyết áp nặng, sốc, trụy mạch, rối loạn điện giải và tử vong).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 121,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Glucocorticoid nào sau đây có hoạt tính chống viêm mạnh nhất (gấp 25 - 30 lần Hydrocortison), hầu như hoàn toàn không có tác dụng giữ muối nước (tác dụng mineralocorticoid = 0) và có thời gian tác dụng rất dài?",
    "options": [
      "Prednisolon",
      "Methylprednisolon",
      "Triamcinolon",
      "Dexamethason (hoặc Betamethason)"
    ],
    "correct": 3,
    "explanation": "Dexamethason và Betamethason là các glucocorticoid fluor hóa thế hệ dài (T1/2 sinh học > 36-54 giờ), có hoạt tính kháng viêm mạnh gấp 25-30 lần hydrocortison, hoàn toàn không giữ Na+ và nước (tác dụng mineralocorticoid = 0), chuyên dùng chống phù não và cấp cứu viêm nặng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 122,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng phụ gây loãng xương (Osteoporosis) và hoại tử vô mạch chỏm xương đùi khi dùng Corticosteroid kéo dài xuất phát từ chuỗi biến đổi sinh học nào sau đây?",
    "options": [
      "Kích thích tuyến giáp tăng tiết Calcitonin quá mức",
      "Làm giảm bài xuất ion phosphat qua ống lượn gần",
      "Ức chế hoạt động của tế bào tạo cốt bào (osteoblast), giảm hấp thu Calci ở ruột, tăng thải Calci qua thận gây cường cận giáp thứ phát kích thích hủy cốt bào",
      "Làm tắc nghẽn hoàn toàn động mạch nuôi màng xương"
    ],
    "correct": 2,
    "explanation": "Corticoid ức chế trực tiếp tạo cốt bào, thúc đẩy hủy cốt bào, ức chế hấp thu Ca2+ ở ruột do đối kháng vitamin D, tăng thải Ca2+ qua thận dẫn tới tụt calci máu gây kích hoạt PTH tăng tiêu xương, làm giảm mật độ xương nhanh chóng và gây hoại tử vô mạch chỏm xương đùi.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 123,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong điều trị cơn bão giáp trạng (Thyroid storm) hoặc chuẩn bị phẫu thuật cắt tuyến giáp, dung dịch Iod vô cơ (Dung dịch Lugol) phát huy tác dụng ức chế giải phóng hormon giáp tức thì nhờ cơ chế nào?",
    "options": [
      "Hiệu ứng Wolff-Chaikoff: Nồng độ iod cao tạm thời làm ức chế gắn iod vào thyroglobulin và phong tỏa sự giải phóng T3, T4 vào máu",
      "Phá hủy cấu trúc màng các nang tuyến giáp do độc tính oxy hóa",
      "Kích thích tuyến yên giảm bài tiết hormon TSH qua điều hòa ngược",
      "Ức chế enzym khử iod 5-deiodinase ở ngoại vi"
    ],
    "correct": 0,
    "explanation": "Dung dịch Lugol (5% I2 + 10% KI) cung cấp lượng iod cao cấp tính gây hiệu ứng Wolff-Chaikoff: ức chế enzym TPO ngăn gắn iod vào tyrosin và ức chế quá trình thủy phân giải phóng T3/T4 từ thyroglobulin vào máu, làm giảm nhanh nồng độ hormon giáp trong vòng 24-48 giờ và làm săn chắc nhu mô giáp.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 124,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Lựa chọn thuốc kháng giáp trạng tổng hợp cho phụ nữ mang thai bị cường giáp Basedow trong 3 tháng đầu thai kỳ (quý 1) tuân theo nguyên tắc bắt buộc nào?",
    "options": [
      "Sử dụng Thiamazol liều cao để kiểm soát dứt điểm cường giáp",
      "Ưu tiên dùng Propylthiouracil (PTU) vì thuốc gắn mạnh vào protein huyết tương nên ít qua nhau thai, tránh dị tật bẩm sinh da đầu (Aplasia cutis) của Thiamazol",
      "Chỉ dùng dung dịch Lugol uống ngắt quãng mỗi tuần",
      "Chống chỉ định tuyệt đối tất cả các thuốc kháng giáp và chỉ dùng chẹn beta"
    ],
    "correct": 1,
    "explanation": "Thiamazol trong 3 tháng đầu có nguy cơ gây dị tật phôi thai (bất sản da đầu bẩm sinh Aplasia cutis congenita, teo thực quản). PTU liên kết protein huyết tương cao hơn (80%) nên ít qua nhau thai hơn, được ưu tiên trong quý 1 thai kỳ. Từ quý 2 chuyển sang Thiamazol vì PTU có độc tính hoại tử gan cấp.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 125,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng không mong muốn đặc ứng nguy hiểm nhất đe dọa tính mạng người bệnh của các thuốc kháng giáp trạng tổng hợp (PTU, Thiamazol) là biến chứng nào?",
    "options": [
      "Suy thận cấp do lắng đọng tinh thể urat",
      "Xơ cứng rải rác thần kinh trung ương",
      "Mất bạch cầu hạt (Agranulocytosis, số lượng bạch cầu trung tính < 500 tế bào/microL) kèm nhiễm trùng nặng",
      "Xuất huyết tiêu hóa do giãn vỡ tĩnh mạch thực quản"
    ],
    "correct": 3,
    "explanation": "Mất bạch cầu hạt (Agranulocytosis) xảy ra ở 0.1-0.5% bệnh nhân dùng thuốc kháng giáp, thường xuất hiện trong 3 tháng đầu. Bệnh nhân có biểu hiện sốt cao đột ngột, đau rát họng, viêm loét miệng hoại tử. Bắt buộc phải ngừng thuốc ngay và cách ly điều trị.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 126,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Levothyroxin (T4 tổng hợp) là thuốc lựa chọn hàng đầu trong điều trị suy giáp. Hướng dẫn uống thuốc chuẩn xác nào giúp đảm bảo sinh khả dụng hấp thu tối đa của Levothyroxin?",
    "options": [
      "Uống cùng bữa ăn trưa nhiều dầu mỡ",
      "Uống ngay sau khi ăn no bữa tối",
      "Uống 1 lần duy nhất vào buổi sáng khi bụng đói, trước bữa ăn sáng ít nhất 30 đến 60 phút chỉ với nước lọc",
      "Uống chung với sữa tươi hoặc viên bổ sung Calci và Sắt để tránh kích ứng dạ dày"
    ],
    "correct": 2,
    "explanation": "Thức ăn, sữa, cà phê, calci và sắt làm giảm mạnh sự hấp thu Levothyroxin qua niêm mạc ruột. Thuốc cần được uống vào buổi sáng sớm khi bụng đói hoàn toàn, trước khi ăn sáng ít nhất 30-60 phút chỉ với một cốc nước lọc.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 127,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cơ chế tác dụng phân tử hàng đầu của Metformin giúp hạ đường huyết ở bệnh nhân đái tháo đường typ 2 mà hầu như không gây tác dụng phụ hạ đường huyết quá mức là gì?",
    "options": [
      "Kích thích tế bào beta đảo tụy tăng tổng hợp và bài xuất insulin vào máu",
      "Kích hoạt protein kinase phụ thuộc AMP (AMPK), ức chế quá trình tân tạo glucose tại gan (gluconeogenesis) và tăng nhạy cảm insulin ở mô ngoại vi",
      "Ức chế trực tiếp enzym alpha-glucosidase tại diềm bàn chải ruột non",
      "Tăng đào thải glucose tự do qua nước tiểu do ức chế kênh lọc cầu thận"
    ],
    "correct": 1,
    "explanation": "Metformin đi vào tế bào gan kích hoạt enzym AMP-activated protein kinase (AMPK), dẫn tới ức chế các enzym chủ chốt của quá trình tân tạo glucose (PEPCK và G6Pase), làm giảm sản xuất glucose từ gan tới 75%; đồng thời tăng thu nhận glucose ở cơ vân và không kích thích tiết insulin nên không gây hạ đường huyết.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 128,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng không mong muốn nghiêm trọng nhất có tỷ lệ tử vong cao tới 50% nhưng hiếm gặp của Metformin là biến chứng nào?",
    "options": [
      "Xơ gan ứ mật hoại tử tế bào gan cấp tính",
      "Tiêu cơ vân cấp giải phóng myoglobin niệu",
      "Suy tủy xương bất sản 3 dòng tế bào máu",
      "Nhiễm toan Acid Lactic (Lactic Acidosis) do ức chế chuyển đổi lactat thành glucose tại gan"
    ],
    "correct": 3,
    "explanation": "Metformin ức chế phức hợp 1 của chuỗi hô hấp tế bào và ức chế enzym pyruvate carboxylase, làm cản trở chuyển hóa acid lactic thành glucose. Khi thuốc bị tích lũy (như ở người suy thận), acid lactic ứ đọng trong máu dẫn tới nhiễm toan acid lactic máu nặng với tỷ lệ tử vong cao.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 129,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Quy tắc an toàn dược lâm sàng nào bắt buộc phải thực hiện khi bệnh nhân đang dùng Metformin cần chụp X-quang hoặc chụp cắt lớp có tiêm thuốc cản quang tĩnh mạch chứa Iod?",
    "options": [
      "Ngừng Metformin ít nhất 48 giờ trước khi chụp và chỉ dùng lại sau chụp 48 giờ khi xét nghiệm chức năng thận (eGFR) bình thường",
      "Tăng gấp đôi liều Metformin trong ngày chụp để hỗ trợ thận bài tiết cản quang",
      "Tiêm kèm thuốc lợi tiểu Furosemid liều cao ngay trước khi chụp",
      "Uống kèm dung dịch Natri bicarbonat 500 mL ngay sau khi chụp"
    ],
    "correct": 0,
    "explanation": "Thuốc cản quang chứa iod có thể gây suy thận cấp thoáng qua do co mạch và hoại tử ống thận. Nếu bệnh nhân tiếp tục dùng Metformin, suy thận sẽ làm Metformin không đào thải được, tích lũy gây nhiễm toan lactic tử vong. Bắt buộc ngưng thuốc trước 48h và đánh giá lại eGFR sau 48h.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 130,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Nhóm thuốc hạ đường huyết Sulfonylurea (như Glibenclamid, Gliclazid, Glimepirid) kích thích bài tiết insulin từ tế bào beta đảo tụy thông qua tác động lên kênh ion nào trên màng tế bào?",
    "options": [
      "Mở kênh Kali phụ thuộc calci làm ưu phân cực màng tế bào",
      "Ức chế trực tiếp kênh Natri phụ thuộc điện thế ở pha 0",
      "Gắn và đóng kênh Kali nhạy cảm ATP (K_ATP), gây khử cực màng tế bào, mở kênh Calci phụ thuộc điện thế đưa Ca2+ vào kích hoạt xuất bào các bọc chứa Insulin",
      "Ức chế thụ thể vận chuyển Glucose GLUT-2"
    ],
    "correct": 2,
    "explanation": "Sulfonylurea gắn vào tiểu đơn vị SUR1 của kênh K_ATP, làm đóng kênh này. Dòng K+ không thoát ra ngoài được làm màng tế bào beta khử cực. Khử cực làm mở kênh Calci typ L, Ca2+ ngoại bào tràn vào bào tương kích hoạt hòa màng các bọc dự trữ insulin tống insulin vào máu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 131,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tại sao thuốc Sulfonylurea thế hệ 2 là Glibenclamid (Glyburide) lại có nguy cơ gây hạ đường huyết nghiêm trọng và kéo dài đặc biệt nguy hiểm ở bệnh nhân cao tuổi?",
    "options": [
      "Do thuốc phá hủy trực tiếp các tế bào alpha tiết glucagon",
      "Thời gian bán thải sinh học kéo dài và chuyển hóa qua gan thành các chất vẫn còn hoạt tính hạ đường huyết thải trừ qua thận, dễ tích lũy khi suy giảm chức năng thận",
      "Do thuốc ức chế hoàn toàn sự thèm ăn ở vùng dưới đồi",
      "Do thuốc chuyển đổi tế bào mỡ thành tế bào beta đảo tụy"
    ],
    "correct": 1,
    "explanation": "Glibenclamid có thời gian gắn thụ thể rất dài và chuyển hóa thành các chất chuyển hóa (4-trans-hydroxy và 3-cis-hydroxy glibenclamide) vẫn có hoạt tính hạ đường huyết bài tiết qua thận. Ở người cao tuổi suy giảm lọc cầu thận, thuốc tích lũy gây hạ đường huyết sâu, hôn mê kéo dài nhiều ngày.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 132,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Nhóm thuốc ức chế SGLT-2 (như Empagliflozin, Dapagliflozin) hạ đường huyết theo cơ chế sinh lý thận độc đáo nào?",
    "options": [
      "Tăng cường tốc độ lọc cầu thận lên gấp đôi để tống đường qua nước tiểu",
      "Phá hủy các phân tử glucose ngay trong dịch lọc tại quai Henle",
      "Ức chế enzym thủy phân glycogen tại các tế bào biểu mô thận",
      "Ức chế chọn lọc protein đồng vận chuyển Natri - Glucose typ 2 (SGLT-2) ở đoạn đầu ống lượn gần, ngăn cản tái hấp thu glucose làm tăng đào thải glucose qua nước tiểu"
    ],
    "correct": 3,
    "explanation": "Khoảng 90% lượng glucose trong dịch lọc cầu thận được tái hấp thu ở đoạn S1 ống lượn gần nhờ chất vận chuyển SGLT-2. Thuốc ức chế SGLT-2 ngăn cản quá trình này, làm thải trừ khoảng 70-80g glucose ra nước tiểu mỗi ngày (tương đương 300 kcal), giúp hạ đường huyết và giảm cân.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 133,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Biến chứng toan chuyển hóa đặc thù cần cảnh giác khi điều trị bằng thuốc ức chế SGLT-2 (Empagliflozin, Dapagliflozin) là hội chứng nào?",
    "options": [
      "Nhiễm toan Ceton đái tháo đường với mức đường huyết bình thường hoặc tăng nhẹ (Euglycemic DKA)",
      "Nhiễm toan acid lactic kèm theo tăng men gan cấp",
      "Nhiễm toan chuyển hóa tăng clo máu kèm suy hô hấp",
      "Hội chứng tăng áp lực thẩm thấu máu không nhiễm toan"
    ],
    "correct": 0,
    "explanation": "Do làm mất đường qua nước tiểu, nồng độ glucose và insulin máu giảm nhẹ trong khi glucagon tăng, kích hoạt ly giải lipid tạo thể ceton (acetoacetate, beta-hydroxybutyrate). Bệnh nhân bị nhiễm toan ceton nặng nhưng mức đường huyết vẫn dưới 250 mg/dL (Euglycemic DKA), rất dễ bị bỏ sót.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 134,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng phụ thường gặp nhất ở bệnh nhân sử dụng thuốc ức chế SGLT-2 là gì do lượng đường bài xuất trong nước tiểu cao?",
    "options": [
      "Suy thận mạn tính giai đoạn cuối",
      "Loét thủng dạ dày tá tràng",
      "Nhiễm nấm đường sinh dục (nhiễm nấm Candida âm đạo/quy đầu) và nhiễm trùng đường tiết niệu",
      "Viêm tụy cấp hoại tử mỡ"
    ],
    "correct": 2,
    "explanation": "Đào thải lượng lớn glucose vào nước tiểu tạo môi trường giàu dinh dưỡng thuận lợi cho nấm men (đặc biệt Candida albicans) và vi khuẩn phát triển, dẫn tới tỷ lệ cao bị viêm âm hộ - âm đạo ở nữ và viêm quy đầu ở nam, cùng nguy cơ nhiễm trùng tiểu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 135,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Heparin tiêu chuẩn không phân đoạn (UFH) phát huy tác dụng chống đông máu tức thì trong lòng mạch thông qua cơ chế phân tử nào?",
    "options": [
      "Ức chế trực tiếp enzym tổng hợp prothrombin tại tế bào gan",
      "Gắn trực tiếp vào tiểu cầu ngăn cản sự hình thành nút tiểu cầu",
      "Gắn vào Antithrombin III (AT-III), làm thay đổi cấu hình không gian làm tăng tốc độ bất hoạt Thrombin (yếu tố IIa) và Yếu tố Xa lên gấp 1000 lần",
      "Tiêu hủy các sợi fibrin đã hình thành trong lòng cục máu đông"
    ],
    "correct": 2,
    "explanation": "Heparin chứa chuỗi pentasaccharid đặc hiệu gắn vào Antithrombin III (AT-III), làm biến đổi cấu hình của AT-III tăng ái lực với các protease đông máu, tăng tốc độ bất hoạt Thrombin (IIa) và Yếu tố Xa lên khoảng 1000 lần. UFH cần chuỗi polysaccharide dài ít nhất 18 đơn vị đường để bắt cầu ức chế đồng thời cả IIa và Xa.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 136,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Sự khác biệt căn bản về mặt cơ chế ức chế yếu tố đông máu giữa Heparin trọng lượng phân tử thấp (LMWH như Enoxaparin) và Heparin tiêu chuẩn (UFH) là gì?",
    "options": [
      "LMWH có chuỗi đường ngắn hơn nên ức chế ưu thế chọn lọc trên Yếu tố Xa (tỷ lệ Xa/IIa từ 2:1 đến 4:1) và ít ức chế trực tiếp Thrombin (IIa)",
      "LMWH chỉ ức chế Thrombin mà hoàn toàn không tác động lên Yếu tố Xa",
      "LMWH ức chế quá trình tổng hợp vitamin K tại ruột non",
      "LMWH có tác dụng tiêu sợi huyết trực tiếp không cần antithrombin III"
    ],
    "correct": 0,
    "explanation": "Do có chuỗi polysaccharide ngắn hơn (< 18 đơn vị đường), phần lớn phân tử LMWH không đủ độ dài để tạo cầu nối kẹp chặt đồng thời cả AT-III và Thrombin (IIa). Do đó, LMWH chủ yếu bất hoạt Yếu tố Xa (tỷ lệ ức chế Xa/IIa là 3:1 hoặc 4:1 đối với enoxaparin), trong khi UFH ức chế ngang nhau cả IIa và Xa (tỷ lệ 1:1).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 137,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Xét nghiệm cận lâm sàng nào được sử dụng thường quy để theo dõi và hiệu chỉnh liều khi điều trị chống đông bằng Heparin tiêu chuẩn không phân đoạn (UFH) đường tĩnh mạch?",
    "options": [
      "Chỉ số INR (International Normalized Ratio)",
      "Thời gian thromboplastin từng phần hoạt hóa (aPTT - duy trì mục tiêu gấp 1.5 đến 2.5 lần chứng)",
      "Thời gian Prothrombin (PT / Tỷ lệ Prothrombin)",
      "Thời gian máu chảy (Bleeding time - Duke)"
    ],
    "correct": 1,
    "explanation": "UFH ức chế con đường đông máu nội chung và nội sinh, do đó được theo dõi bằng xét nghiệm thời gian thromboplastin một phần hoạt hóa (aPTT / TCA). Nồng độ điều trị đạt yêu cầu khi aPTT kéo dài gấp 1.5 - 2.5 lần so với mẫu chứng (chứng khoảng 30-35s, đích điều trị 50-75s).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 138,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hội chứng Giảm tiểu cầu do Heparin (HIT - Heparin-Induced Thrombocytopenia) typ II qua trung gian miễn dịch có đặc điểm bệnh lý nghịch lý cực kỳ nguy hiểm nào?",
    "options": [
      "Số lượng tiểu cầu giảm sâu kèm theo xuất huyết dưới da lan tỏa không cầm được",
      "Gây suy tủy xương bất sản dòng hồng cầu đơn thuần",
      "Gây tan máu cấp tính nội mạch với test Coombs dương tính",
      "Kháng thể IgG kháng phức hợp Heparin - Yếu tố 4 tiểu cầu (PF4) kích hoạt tiểu cầu ồ ạt, làm giảm số lượng tiểu cầu nhưng nghịch lý lại gây biến chứng huyết khối tắc mạch đe dọa tính mạng"
    ],
    "correct": 3,
    "explanation": "HIT typ II là phản ứng tự miễn dịch: kháng thể IgG liên kết với phức hợp Heparin-PF4 trên màng tiểu cầu, kích hoạt thụ thể Fc-gamma-RIIa gây kết tập tiểu cầu toàn thân. Số lượng tiểu cầu sụt giảm (> 50%), nhưng nghịch lý lâm sàng là gây bùng phát các cục huyết khối tắc động mạch và tĩnh mạch nghiêm trọng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 139,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc giải độc đặc hiệu (Antidote) được tiêm tĩnh mạch chậm để trung hòa tác dụng chống đông của Heparin tiêu chuẩn trong trường hợp quá liều xuất huyết là gì?",
    "options": [
      "Vitamin K1 (Phytomenadion) tiêm tĩnh mạch",
      "Acid tranexamic (AMCA) truyền tĩnh mạch",
      "Protamin sulfat (1 mg trung hòa khoảng 100 đơn vị Heparin)",
      "Huyết tương tươi đông lạnh (FFP)"
    ],
    "correct": 2,
    "explanation": "Protamin sulfat là một protein base mạnh chiết xuất từ tinh trùng cá hồi, mang điện tích dương dày đặc. Khi tiêm tĩnh mạch, nó kết hợp ion tĩnh điện cực mạnh với phân tử Heparin (mang điện tích âm cao) tạo thành phức hợp muối bền vững không còn hoạt tính chống đông.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 140,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cơ chế phân tử của thuốc chống đông đường uống Warfarin và các dẫn chất coumarin là ức chế enzym nào tại tế bào gan?",
    "options": [
      "Ức chế enzym Vitamin K Epoxide Reductase (VKORC1), ngăn cản khử vitamin K dạng oxy hóa thành dạng khử cần thiết cho quá trình gamma-carboxyl hóa các yếu tố đông máu II, VII, IX, X",
      "Ức chế trực tiếp enzym Thrombin hòa tan trong tuần hoàn",
      "Ức chế enzym Cytochrom P450 chuyển hóa acid mật",
      "Ức chế gắn kết của fibrinogen vào thụ thể GPIIb/IIIa"
    ],
    "correct": 0,
    "explanation": "Warfarin ức chế enzym VKORC1 tại gan, ngăn cản tái tạo vitamin K hydroquinone (dạng khử). Thiếu vitamin K khử làm bất hoạt enzym gamma-glutamyl carboxylase, khiến các yếu tố đông máu II, VII, IX, X và protein C, S không được gắn thêm nhóm carboxyl ở gốc acid glutamic, mất khả năng gắn Ca2+ và mất hoạt tính đông máu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 141,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hiện tượng hoại tử da do Warfarin (Warfarin-induced Skin Necrosis) trong những ngày đầu mới bắt đầu điều trị xuất phát từ nguyên nhân sinh lý nào?",
    "options": [
      "Warfarin gây co thắt các động mạch tận nuôi da",
      "Protein C (chất chống đông tự nhiên) có thời gian bán hủy rất ngắn (khoảng 8 giờ) nên bị suy giảm trước các yếu tố đông máu khác (đặc biệt yếu tố II và X bán hủy dài), tạo ra trạng thái tăng đông nghịch lý tạm thời gây huyết khối vi mạch da",
      "Dị ứng quá mẫn typ 1 giải phóng histamin phá hủy mao mạch dưới da",
      "Thuốc làm tích tụ tinh thể calci oxalat tại lớp mỡ dưới da"
    ],
    "correct": 1,
    "explanation": "Protein C là chất chống đông tự nhiên phụ thuộc vitamin K có bán thải ngắn nhất (~8h), trong khi yếu tố II bán thải dài (60h). Trong 24-48h đầu, nồng độ Protein C tụt trước trong khi các yếu tố đông máu II, IX, X vẫn còn cao, gây mất cân bằng tạm thời đẩy cơ thể vào trạng thái tăng đông gây tắc vi mạch hoại tử da.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 142,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Để theo dõi hiệu quả điều trị và chỉnh liều của thuốc chống đông kháng vitamin K (Warfarin), xét nghiệm sinh hóa nào là tiêu chuẩn vàng bắt buộc?",
    "options": [
      "Thời gian đông máu Lee-White",
      "Định lượng số lượng tiểu cầu ngoại vi mỗi tuần",
      "Thời gian máu đông toàn phần qua nghiệm pháp gắn kaolin",
      "Chỉ số bình thường hóa quốc tế INR (International Normalized Ratio, duy trì mục tiêu từ 2.0 đến 3.0 cho hầu hết các chỉ định)"
    ],
    "correct": 3,
    "explanation": "INR được tính từ tỷ số thời gian prothrombin (PT) của bệnh nhân so với mẫu chứng chuẩn hóa qua chỉ số nhạy quốc tế (ISI). Mục tiêu INR trong rung nhĩ, huyết khối tĩnh mạch sâu là 2.0 - 3.0 (riêng van tim cơ học 2 lá là 2.5 - 3.5).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 143,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Aspirin (Acid acetylsalicylic) thể hiện tác dụng kháng kết tập tiểu cầu kéo dài suốt đời sống của tiểu cầu (7 - 10 ngày) nhờ cơ chế hóa học đặc biệt nào?",
    "options": [
      "Ức chế cạnh tranh thuận nghịch trên thụ thể ADP P2Y12",
      "Chẹn kênh calci phụ thuộc điện thế trên màng tiểu cầu",
      "Acetyl hóa cộng hóa trị không hồi phục vị trí Serin 529 của enzym Cyclooxygenase-1 (COX-1), ngăn chặn tổng hợp Thromboxan A2 (TXA2)",
      "Ức chế thụ thể glycoprotein IIb/IIIa qua liên kết disulfide"
    ],
    "correct": 2,
    "explanation": "Aspirin chuyển nhóm acetyl gắn cộng hóa trị vào gốc Serin 529 trong lòng enzym COX-1 của tiểu cầu, gây bất hoạt vĩnh viễn enzym này. Do tiểu cầu không có nhân để phiên mã tổng hợp enzym mới, tác dụng ức chế tổng hợp TXA2 kéo dài cho đến khi toàn bộ lứa tiểu cầu này chết đi (7-10 ngày).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 144,
    "subject": "duocly2",
    "chapter": "Thuốc chữa thiếu máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Vị trí giải phẫu nào của ống tiêu hóa là nơi diễn ra quá trình hấp thu ion Sắt (Fe2+) chủ yếu và hiệu quả nhất vào tuần hoàn cơ thể?",
    "options": [
      "Thân và đáy dạ dày",
      "Đoạn tá tràng và phần đầu hỗng tràng",
      "Đoạn cuối hồi tràng",
      "Toàn bộ khung đại tràng"
    ],
    "correct": 1,
    "explanation": "Sắt vô cơ được hấp thu chủ yếu tại tá tràng và đoạn đầu hỗng tràng thông qua kênh vận chuyển kim loại hóa trị 2 (DMT1) ở màng đỉnh tế bào biểu mô ruột non. Tại đây môi trường acid từ dịch vị chuyển xuống giúp giữ sắt ở dạng Fe2+ hòa tan dễ hấp thu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 145,
    "subject": "duocly2",
    "chapter": "Thuốc chữa thiếu máu",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Dạng hóa trị nào của ion Sắt là dạng hòa tan dễ dàng được vận chuyển qua chất vận chuyển kim loại hóa trị 2 (DMT1) vào tế bào biểu mô ruột non?",
    "options": [
      "Sắt kim loại tự do Fe(0)",
      "Sắt hóa trị ba Fe3+ (sắt ferric)",
      "Phức hợp sắt phosphat kết tủa",
      "Sắt hóa trị hai Fe2+ (sắt ferrous)"
    ],
    "correct": 3,
    "explanation": "DMT1 chỉ vận chuyển ion sắt hóa trị hai Fe2+. Sắt trong thức ăn chủ yếu là Fe3+, cần được khử thành Fe2+ nhờ enzym ferrireductase (duodenal cytochrome B - Dcytb) ở màng diềm bàn chải và acid dịch vị dạ dày trước khi hấp thu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 146,
    "subject": "duocly2",
    "chapter": "Thuốc chữa thiếu máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tại sao việc uống chung viên Sắt đường uống với Vitamin C (Acid ascorbic) lại làm tăng đáng kể hiệu quả hấp thu Sắt của cơ thể?",
    "options": [
      "Vitamin C khử ion Fe3+ khó tan thành ion Fe2+ hòa tan và tạo phức chelate bền vững ngăn cản sắt bị kết tủa ở pH kiềm của tá tràng",
      "Vitamin C phá hủy lớp chất nhầy bảo vệ niêm mạc ruột",
      "Vitamin C kích thích tủy xương tăng sản xuất hồng cầu bù trừ",
      "Vitamin C ức chế enzym thoái hóa ferritin tại gan"
    ],
    "correct": 0,
    "explanation": "Acid ascorbic có tính khử mạnh, chuyển Fe3+ thành Fe2+ và tạo phức chelate hòa tan với sắt ở pH acid của dạ dày. Phức hợp này vẫn duy trì trạng thái hòa tan khi xuống tá tràng (nơi pH bắt đầu kiềm hóa), giúp tăng sinh khả dụng hấp thu sắt lên gấp 2-3 lần.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 147,
    "subject": "duocly2",
    "chapter": "Thuốc chữa thiếu máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Những loại thực phẩm hoặc thuốc nào sau đây khi dùng cùng lúc sẽ cản trở hấp thu sắt đường uống do tạo phức kết tủa không tan trong lòng ruột?",
    "options": [
      "Nước cam tươi và thịt bò",
      "Nước chanh và acid folic",
      "Trà đặc (chứa tanin), sữa tươi (chứa calci), thuốc kháng toan Antacid và thuốc ức chế tiết acid (PPI)",
      "Nước khoáng có ga và đường glucose"
    ],
    "correct": 2,
    "explanation": "Tanin trong trà, phytat trong ngũ cốc, calci trong sữa tạo phức kết tủa không tan với sắt. Thuốc kháng toan và PPI làm tăng pH dạ dày ngăn cản chuyển Fe3+ thành Fe2+, làm giảm nghiêm trọng hấp thu sắt. Cần uống viên sắt cách xa các chất này ít nhất 2 giờ.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 148,
    "subject": "duocly2",
    "chapter": "Thuốc chữa thiếu máu",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Ngộ độc sắt cấp tính (Acute Iron Poisoning) thường gặp ở trẻ nhỏ uống nhầm viên sắt của người lớn có thể gây tử vong nhanh chóng do tổn thương cơ quan nào?",
    "options": [
      "Teo cơ hoành dẫn đến suy hô hấp cơ học",
      "Ăn mòn và hoại tử niêm mạc dạ dày ruột gây xuất huyết tiêu hóa ồ ạt, sốc giảm thể tích, toan chuyển hóa nặng và suy gan hoại tử tế bào gan",
      "Tắc nghẽn ống mật chủ do hình thành sỏi sắt",
      "Tăng nhãn áp cấp tính gây mù lòa hai mắt"
    ],
    "correct": 1,
    "explanation": "Sắt tự do dư thừa có tính ăn mòn trực tiếp gây loét hoại tử niêm mạc dạ dày ruột (nôn máu, đi ngoài phân đen). Khi vào máu, sắt gây tổn thương màng ty thể, giải phóng H+ gây toan chuyển hóa sâu, sốc trụy mạch và hoại tử tế bào gan cấp dẫn tới tử vong.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 149,
    "subject": "duocly2",
    "chapter": "Vitamin",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân nghiện rượu mạn tính nhập viện trong tình trạng lú lẫn, mất điều hòa động tác (ataxia) và liệt vận nhãn (ophthalmoplegia). Quy tắc an toàn cấp cứu tối thượng khi truyền dịch ở bệnh nhân này là gì?",
    "options": [
      "Bắt buộc phải tiêm bổ sung Vitamin B1 (Thiamin) trước khi truyền dung dịch Glucose để tránh đẩy bệnh nhân vào hội chứng não Wernicke cấp tính tử vong",
      "Truyền dung dịch Glucose 10% ngay lập tức để phục hồi năng lượng não",
      "Tiêm tĩnh mạch insulin liều cao để thúc đẩy đưa đường vào tế bào",
      "Chỉ truyền dịch keo Albumin mà không dùng bất kỳ vitamin nào"
    ],
    "correct": 0,
    "explanation": "Thiamin (B1) là coenzym của pyruvate dehydrogenase cần thiết để chuyển hóa glucose. Bệnh nhân nghiện rượu bị cạn kiệt B1 trầm trọng. Nếu truyền Glucose trước, quá trình chuyển hóa glucose sẽ tiêu thụ nốt lượng B1 ít ỏi còn lại, gây tổn thương thể nhú và thân não cấp tính (hội chứng não Wernicke), hôn mê và tử vong.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 150,
    "subject": "duocly2",
    "chapter": "Vitamin",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Dấu hiệu lâm sàng kinh điển của bệnh Beriberi thể ướt (Wet Beriberi) do thiếu hụt Vitamin B1 (Thiamin) trầm trọng là gì?",
    "options": [
      "Teo cơ đối xứng ở hai chi dưới kèm mất phản xạ gân xương",
      "Suy tim cung lượng cao (High-output heart failure) với tim to, nhịp nhanh, phù toàn thân ứ trệ tuần hoàn",
      "Viêm da đối xứng ở các vùng hở tiếp xúc với ánh sáng",
      "Chảy máu chân răng và xuất huyết dưới màng xương"
    ],
    "correct": 2,
    "explanation": "Thiếu Thiamin gây giãn tiểu động mạch toàn thân làm giảm sức cản ngoại vi, cơ thể bù trừ bằng cách tăng vọt cung lượng tim dẫn đến suy tim cung lượng cao (Beriberi thể ướt) với tim to, nhịp nhanh, khó thở và phù to toàn thân. Khác với Beriberi thể khô chủ yếu là viêm đa dây thần kinh ngoại biên.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 151,
    "subject": "duocly2",
    "chapter": "Vitamin",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tam chứng lâm sàng kinh điển '3D' gồm Viêm da (Dermatitis), Tiêu chảy (Diarrhea) và Sa sút trí tuệ (Dementia) là biểu hiện của bệnh Pellagra do thiếu hụt vitamin nào?",
    "options": [
      "Vitamin B2 (Riboflavin)",
      "Vitamin B3 (Niacin / Acid nicotinic / Nicotinamid)",
      "Vitamin B5 (Acid pantothenic)",
      "Vitamin B6 (Pyridoxin)"
    ],
    "correct": 1,
    "explanation": "Pellagra do thiếu hụt Vitamin B3 (Niacin - tiền chất của NAD/NADP) hoặc thiếu acid amin Tryptophan. Bệnh đặc trưng bởi tam chứng '3D' (Dermatitis - viêm da đối xứng nhạy cảm ánh sáng, Diarrhea - tiêu chảy mạn tính, Dementia - lú lẫn sa sút trí tuệ; nếu không điều trị sẽ dẫn tới Death - tử vong).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 152,
    "subject": "duocly2",
    "chapter": "Vitamin",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Khi điều trị bệnh lao bằng kháng sinh Isoniazid (INH), việc bắt buộc phải dùng kèm Vitamin B6 (Pyridoxin) nhằm mục đích phòng ngừa tác dụng phụ nào?",
    "options": [
      "Độc tính trên gan gây viêm gan hoại tử tế bào gan",
      "Thiếu máu tan máu cấp tính ở người thiếu G6PD",
      "Hội chứng viêm đa khớp dạng thấp do lắng đọng phức hợp miễn dịch",
      "Viêm dây thần kinh ngoại biên (tê bì, kiến bò đầu chi) do INH tăng thải trừ và ức chế enzym kích hoạt Pyridoxin"
    ],
    "correct": 3,
    "explanation": "Isoniazid (INH) tạo phức hydrazon với pyridoxal phosphat làm tăng đào thải vitamin B6 qua nước tiểu, đồng thời ức chế enzym pyridoxal kinase. Thiếu B6 làm giảm tổng hợp chất dẫn truyền GABA và myelin, gây viêm dây thần kinh ngoại biên. Bổ sung Pyridoxin 25-50 mg/ngày giúp phòng ngừa triệt để.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 153,
    "subject": "duocly2",
    "chapter": "Vitamin",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng phụ gây sỏi thận Calci Oxalat (Nephrolithiasis) và toan hóa nước tiểu có nguy cơ xuất hiện khi sử dụng liều cao kéo dài vitamin nào?",
    "options": [
      "Vitamin C (Acid ascorbic liều cao trên 1 - 2 g/ngày)",
      "Vitamin B1 (Thiamin)",
      "Vitamin E (Tocopherol)",
      "Vitamin B12 (Cyanocobalamin)"
    ],
    "correct": 0,
    "explanation": "Acid ascorbic (Vitamin C) được chuyển hóa một phần trong cơ thể thành acid oxalic. Dùng liều cao kéo dài làm tăng đào thải oxalat qua nước tiểu; oxalat kết tủa với calci tạo sỏi Calci oxalat ở đường tiết niệu, đồng thời toan hóa nước tiểu cản trở đào thải acid uric gây bùng phát gút.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 154,
    "subject": "duocly2",
    "chapter": "Vitamin",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Độc tính gây dị tật thai nhi nghiêm trọng (Teratogenicity) gồm biến dạng sọ mặt, dị tật tai và tim mạch là nguy cơ cảnh báo đen đối với dạng thuốc liều cao của vitamin nào?",
    "options": [
      "Vitamin C đường tiêm tĩnh mạch",
      "Dẫn xuất của Vitamin A (Retinoid như Isotretinoin, Acitretin)",
      "Vitamin E tổng hợp dạng dầu",
      "Vitamin B9 liều cao trên 5 mg"
    ],
    "correct": 2,
    "explanation": "Vitamin A liều cao và các retinoid (như Isotretinoin trị mụn, Acitretin trị vảy nến) có độc tính quái thai cực mạnh, gây dị tật sọ mặt, teo vành tai, dị tật cung động mạch chủ và hệ thần kinh trung ương. Phụ nữ dùng thuốc bắt buộc phải tránh thai tuyệt đối trong và sau khi ngừng thuốc.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 155,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Đặc tính chọn lọc sinh học vượt trội của Acyclovir đối với các tế bào bị nhiễm virus Herpes Simplex (HSV) và Varicella Zoster (VZV) so với các tế bào lành của người xuất phát từ bước hoạt hóa nào?",
    "options": [
      "Acyclovir chỉ có thể xâm nhập qua màng tế bào đã bị virus làm thủng",
      "Acyclovir được vận chuyển tích cực bởi thụ thể CD4",
      "Bước monophosphoryl hóa đầu tiên bắt buộc phải có enzym Thymidine Kinase đặc hiệu của virus xúc tác; enzym của tế bào người không chuyển hóa được",
      "Acyclovir chỉ liên kết với protein của virus trong máu"
    ],
    "correct": 2,
    "explanation": "Acyclovir là tiền chất trơ. Bước chuyển Acyclovir thành acyclovir-monophosphat đòi hỏi enzym Thymidine Kinase của virus (HSV-TK có ái lực cao gấp 200 lần so với enzym người). Các bước gắn phosphat tiếp theo mới do enzym tế bào người thực hiện tạo triphosphate ức chế DNA polymerase, do đó thuốc chỉ hoạt hóa trong tế bào nhiễm virus.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 156,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng phụ suy thận cấp do kết tinh tinh thể (Crystal nephropathy) là biến chứng nguy hiểm có thể xảy ra khi sử dụng Acyclovir đường tĩnh mạch trong điều trị viêm não Herpes nếu không áp dụng biện pháp phòng ngừa nào?",
    "options": [
      "Bắt buộc phải truyền tĩnh mạch chậm trong ít nhất 1 giờ và bù đủ dịch đảm bảo lưu lượng nước tiểu dồi dào để hòa tan tinh thể",
      "Tiêm bolus thật nhanh trong vòng 1 phút để thuốc qua thận tức thì",
      "Uống kèm thuốc lợi tiểu Thiazid để tăng giữ nước",
      "Acid hóa nước tiểu bằng vitamin C liều cao"
    ],
    "correct": 0,
    "explanation": "Acyclovir ít tan trong nước tiểu. Khi tiêm tĩnh mạch nhanh liều cao, nồng độ thuốc vượt ngưỡng bão hòa trong lòng ống lượn và ống góp, kết tủa thành các tinh thể hình kim gây tắc nghẽn ống thận và suy thận cấp. Bắt buộc phải truyền chậm trên 60 phút và truyền dịch muối đảm bảo bài niệu tốt.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 157,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Ganciclovir có cơ chế tác dụng tương tự Acyclovir nhưng có độc tính ức chế tủy xương nghiêm trọng hơn nhiều (giảm bạch cầu hạt, giảm tiểu cầu), được chỉ định ưu tiên hàng đầu điều trị nhiễm loại virus cơ hội nào ở bệnh nhân suy giảm miễn dịch (ghép tạng, AIDS)?",
    "options": [
      "Virus viêm gan B (HBV)",
      "Cytomegalovirus (CMV - đặc biệt viêm võng mạc do CMV gây mù lòa)",
      "Virus cúm mùa Influenza typ A",
      "Virus hợp bào hô hấp (RSV)"
    ],
    "correct": 1,
    "explanation": "Ganciclovir được hoạt hóa bởi enzym phosphotransferase UL97 của Cytomegalovirus (CMV), có hoạt tính kháng CMV mạnh gấp 50-100 lần Acyclovir. Do ức chế cả DNA polymerase tế bào người, thuốc gây ức chế tủy xương nặng (giảm bạch cầu trung tính), chuyên dùng cấp cứu viêm võng mạc hoặc viêm phổi do CMV.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 158,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Oseltamivir (Tamiflu) và Zanamivir (Relenza) ức chế sự nhân lên và lây lan của virus cúm A và cúm B thông qua việc phong bế enzym bề mặt nào của virus?",
    "options": [
      "Enzym Hemagglutinin (HA)",
      "Enzym RNA-dependent RNA polymerase",
      "Kênh ion M2 trên vỏ bọc virus",
      "Enzym Neuraminidase (NA) - ngăn cản sự phân cắt acid sialic để giải phóng các hạt virus mới nảy chồi ra khỏi tế bào vật chủ"
    ],
    "correct": 3,
    "explanation": "Enzym Neuraminidase (NA) trên bề mặt virus cúm có nhiệm vụ cắt cầu nối acid sialic giữa vỏ virus và màng tế bào vật chủ, cho phép các hạt virus con nảy chồi thoát ra ngoài để lây nhiễm tế bào mới. Thuốc ức chế NA giam giữ virus bám dính trên màng tế bào, chặn đứng chu kỳ lây lan.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 159,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cửa sổ thời gian vàng tối ưu để bắt đầu sử dụng thuốc kháng virus Oseltamivir (Tamiflu) nhằm đạt hiệu quả rút ngắn thời gian bệnh và giảm biến chứng viêm phổi do cúm là bao lâu?",
    "options": [
      "Trong vòng 12 giờ đầu tiên sau khi tiếp xúc với nguồn lây",
      "Sau ngày thứ 5 của đợt cúm khi đã có bội nhiễm vi khuẩn",
      "Trong vòng 48 giờ đầu tiên kể từ khi bắt đầu khởi phát các triệu chứng sốt cúm",
      "Bất kỳ thời điểm nào trước khi hết sốt"
    ],
    "correct": 2,
    "explanation": "Virus cúm nhân lên đạt đỉnh trong đường hô hấp sau 24-48 giờ kể từ khi xuất hiện triệu chứng. Dùng Oseltamivir trong vòng 48 giờ đầu giúp ức chế virus kịp thời, rút ngắn thời gian sốt và giảm biến chứng viêm phổi nặng; dùng sau 48 giờ hiệu quả lâm sàng giảm sút rõ rệt (trừ ca bệnh nặng nhập viện).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 160,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Phản ứng quá mẫn toàn thân đe dọa tính mạng (sốt cao, phát ban da, suy hô hấp tụt huyết áp tử vong khi tái sử dụng) là cảnh báo an toàn đặc biệt gắn liền với thuốc kháng HIV Abacavir ở bệnh nhân mang alen di truyền nào?",
    "options": [
      "Alen gen HLA-B*5701 (bắt buộc phải xét nghiệm sàng lọc trước khi kê đơn)",
      "Đột biến gen CYP2C19*2",
      "Đột biến gen kháng thuốc K65R",
      "Alen gen HLA-B*1502"
    ],
    "correct": 0,
    "explanation": "Bệnh nhân mang gen HLA-B*5701 khi dùng Abacavir có nguy cơ bị phản ứng quá mẫn toàn thân (HSR) đe dọa tính mạng (tỷ lệ 50%). Kháng nguyên gắn vào rãnh liên kết kháng nguyên của HLA-B*5701 kích hoạt tế bào T độc CD8+. Bắt buộc sàng lọc gen HLA-B*5701 trước khi bắt đầu phác đồ Abacavir.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 161,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Các tác nhân alkyl hóa (Alkylating agents như Cyclophosphamid, Clorambucil, Melphalan) tiêu diệt tế bào ung thư thông qua phản ứng hóa học nào trên chuỗi xoắn kép DNA?",
    "options": [
      "Thủy phân chuỗi liên kết phosphodiester của màng nhân",
      "Gắn cộng hóa trị các gốc alkyl vào vị trí N7 của Guanin trên DNA, tạo các liên kết chéo nội chuỗi hoặc liên cực chuỗi làm biến dạng và đứt gãy DNA khi phân chia tế bào",
      "Ức chế enzym phiên mã ngược RNA polymerase",
      "Chèn trực tiếp vào giữa các cặp base nitơ mà không tạo liên kết cộng hóa trị"
    ],
    "correct": 1,
    "explanation": "Tác nhân alkyl hóa tạo ion carbonium mang điện tích dương mạnh, tấn công ái nhân vào nguyên tử nitơ ở vị trí N7 của bazơ guanin trên DNA. Tạo cầu nối chéo giữa 2 chuỗi DNA (interstrand cross-link) ngăn cản tháo xoắn nhân đôi và phiên mã, kích hoạt con đường tự chết của tế bào (apoptosis).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 162,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Biến chứng Viêm bàng quang chảy máu vô trùng (Hemorrhagic cystitis) gây đái ra máu dữ dội do độc tính của Cyclophosphamid và Ifosfamid bắt nguồn từ chất chuyển hóa độc hại nào?",
    "options": [
      "Phosphoramid mustard",
      "4-hydroxycyclophosphamid",
      "Acid carboxyphosphamid",
      "Acrolein (chất aldehyde độc bài tiết và tích tụ gây loét hoại tử niêm mạc bàng quang)"
    ],
    "correct": 3,
    "explanation": "Cyclophosphamid qua gan chuyển hóa thành 4-hydroxycyclophosphamid, sau đó phân cắt tự phát thành phosphoramid mustard (chất diệt ung thư) và Acrolein. Acrolein là một aldehyde có độc tính cực cao với mô niêm mạc, tích tụ trong nước tiểu gây ăn mòn, loét hoại tử và chảy máu bàng quang dữ dội.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 163,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc giải độc bảo vệ bàng quang bắt buộc phải tiêm truyền cùng với hóa chất Cyclophosphamid liều cao hoặc Ifosfamid để trung hòa Acrolein là gì?",
    "options": [
      "MESNA (Natri 2-mercaptoethanesulfonat, cung cấp nhóm -SH tự do liên kết trung hòa Acrolein tạo phức trơ không độc)",
      "Dexrazoxan truyền tĩnh mạch",
      "Leucovorin (Acid folinic)",
      "N-Acetylcystein đường uống"
    ],
    "correct": 0,
    "explanation": "MESNA (2-mercaptoethane sulfonate sodium) tập trung nồng độ cao trong nước tiểu bàng quang. Nhóm thiol (-SH) tự do của MESNA phản ứng cộng ái nhân vào liên kết đôi của Acrolein tạo thành một phức hợp thioether bền vững, tan trong nước và hoàn toàn không độc, đào thải ra ngoài.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 164,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Methotrexat là thuốc chống chuyển hóa thuộc nhóm kháng Folate (Antifolate) tiêu diệt tế bào ung thư thông qua ức chế đặc hiệu enzym nào?",
    "options": [
      "Enzym Ribonucleotid Reductase",
      "Enzym Thymidylate Synthase",
      "Enzym Dihydrofolat Reductase (DHFR), ngăn cản chuyển hóa acid folic thành dạng hoạt tính Acid Tetrahydrofolic (THF)",
      "Enzym DNA Topoisomerase II"
    ],
    "correct": 2,
    "explanation": "Methotrexat có cấu trúc tương tự acid folic nhưng có ái lực với enzym Dihydrofolate Reductase (DHFR) cao gấp 1000 lần acid folic. Ức chế cạnh tranh DHFR làm cạn kiệt THF - cofactor thiết yếu tổng hợp thymidylate và purin, chặn đứng sự tổng hợp DNA ở pha S của chu kỳ tế bào.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 165,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Liệu pháp 'Giải cứu' (Leucovorin rescue) bằng cách truyền Acid Folinic (Leucovorin) sau khi sử dụng Methotrexat liều cao nhằm mục đích sinh học nào?",
    "options": [
      "Tăng cường hoạt tính tiêu diệt khối u của Methotrexat",
      "Cung cấp trực tiếp Folate dạng đã khử hoạt tính (THF) cho các tế bào lành của tủy xương và niêm mạc ruột non mà không cần enzym DHFR, giúp cứu sống bệnh nhân khỏi suy tủy tử vong",
      "Đào thải Methotrexat qua thận nhanh gấp 10 lần",
      "Kích thích tế bào lympho T tiêu diệt tế bào ung thư"
    ],
    "correct": 1,
    "explanation": "Leucovorin (5-formyl-THF) là dạng folate hoạt tính nằm ở hạ lưu của enzym DHFR. Khi dùng Methotrexat liều cao tiêu diệt khối u, truyền Leucovorin sẽ được các tế bào lành (tủy xương, niêm mạc ruột) thu nhận trực tiếp mà không cần enzym DHFR, giúp tế bào lành sống sót phục hồi.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 166,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Độc tính trên cơ tim phụ thuộc liều tích lũy (Cumulative dose-dependent cardiotoxicity) dẫn tới bệnh cơ tim giãn và suy tim ứ huyết không hồi phục là cảnh báo nguy hiểm nhất của kháng sinh chống ung thư nhóm Anthracyclin nào?",
    "options": [
      "Bleomycin",
      "Mitomycin C",
      "Dactinomycin",
      "Doxorubicin (Adriamycin / Daunorubicin)"
    ],
    "correct": 3,
    "explanation": "Doxorubicin tạo phức chelate với ion sắt (Fe2+/Fe3+) trong tế bào cơ tim, thúc đẩy phản ứng Fenton sinh ra các gốc tự do hydroxyl (OH•) và superoxide độc hại. Do cơ tim có nồng độ enzym catalase bảo vệ rất thấp, màng ty thể cơ tim bị phá hủy không hồi phục dẫn đến suy tim sung huyết khi liều tích lũy > 450-550 mg/m2.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 167,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc bảo vệ cơ tim đặc hiệu (Cardioprotective agent) được chỉ định phối hợp để chelate hóa sắt nội bào ngăn ngừa suy tim do Doxorubicin là gì?",
    "options": [
      "Dexrazoxan (Zinecard / Cardioxane)",
      "MESNA",
      "Deferoxamin",
      "Acid Tranexamic"
    ],
    "correct": 0,
    "explanation": "Dexrazoxan là một tiền chất thân dầu thâm nhập vào trong tế bào cơ tim, bị thủy phân thành chất chelate hóa sắt nội bào mạnh (ICRF-198), ngăn chặn Doxorubicin gắn với sắt tạo gốc tự do, giảm thiểu tổn thương ty thể cơ tim mà không làm giảm hoạt tính chống ung thư của Doxorubicin.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 168,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cơ chế bệnh sinh phân tử gây hoại tử tế bào gan cấp tính hàng đầu trong ngộ độc cấp Paracetamol (Acetaminophen) liều cao xuất phát từ chất chuyển hóa độc hại nào?",
    "options": [
      "Paracetamol dạng nguyên vẹn tích tụ trong ty thể tế bào gan",
      "Sự hình thành phức hợp acid glucuronic không tan",
      "N-acetyl-p-benzoquinone imine (NAPQI) - chất chuyển hóa trung gian qua CYP2E1 làm cạn kiệt Glutathione nội bào của tế bào gan, gắn cộng hóa trị vào các đại phân tử gây hoại tử tế bào gan trung tâm tiểu thùy",
      "Sự tích tụ gốc tự do hydroxyl do enzym catalase bị ức chế"
    ],
    "correct": 2,
    "explanation": "Ở liều điều trị, NAPQI độc hại được khử độc nhanh chóng nhờ liên hợp với Glutathione. Khi dùng quá liều (> 150 mg/kg), con đường glucuronid và sulfat bị bão hòa, enzym CYP2E1 sản sinh ồ ạt NAPQI làm cạn kiệt > 70% kho dự trữ Glutathione của gan. NAPQI tự do phản ứng gắn cộng hóa trị vào màng và protein ty thể tế bào gan gây hoại tử trung tâm tiểu thùy.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 169,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cơ chế giải độc đặc hiệu và 'cửa sổ thời gian vàng' của N-Acetylcystein (NAC) trong điều trị ngộ độc cấp Paracetamol là gì?",
    "options": [
      "NAC cung cấp nhóm -SH và là tiền chất tổng hợp Glutathione mới cho tế bào gan; hiệu quả bảo vệ gan đạt gần 100% nếu được sử dụng trong vòng 8 đến 10 giờ đầu sau khi uống thuốc",
      "NAC ức chế hấp thu paracetamol tại ruột nếu dùng trong 24 giờ",
      "NAC kiềm hóa nước tiểu làm tăng đào thải paracetamol qua thận trong 48 giờ",
      "NAC trung hòa trực tiếp paracetamol trong lòng mạch máu"
    ],
    "correct": 0,
    "explanation": "NAC là tiền chất của L-cysteine cần thiết để tổng hợp Glutathione nội bào, đồng thời cung cấp nhóm sulfhydryl (-SH) liên kết trực tiếp trung hòa NAPQI. Dùng NAC trong vòng 8-10 giờ đầu kể từ khi uống paracetamol bảo vệ gan gần như tuyệt đối, giảm nguy cơ hoại tử gan nặng xuống < 2% và ngăn ngừa tử vong.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 170,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Ngộ độc cấp tính thuốc trừ sâu nhóm Phospho hữu cơ (hoặc khí độc thần kinh Sarin, VX) gây hội chứng cường Cholinergic cấp tính do ức chế enzym nào?",
    "options": [
      "Enzym Butyrylcholinesterase tại huyết tương đơn thuần",
      "Enzym Acetylcholinesterase (AChE), dẫn đến tích tụ ồ ạt Acetylcholin tại tất cả các synap thần kinh cholinergic (hệ Muscarinic, Nicotinic và thần kinh trung ương)",
      "Enzym Monoamine Oxidase (MAO) tại màng ngoài ty thể",
      "Enzym Dopa-decarboxylase tại ngoại vi"
    ],
    "correct": 1,
    "explanation": "Phospho hữu cơ phosphoryl hóa vị trí serin tại trung tâm hoạt động của enzym Acetylcholinesterase (AChE), gây bất hoạt enzym này. Acetylcholin không bị giáng hóa, tích tụ ồ ạt kích thích liên tục các thụ thể Muscarinic (co đồng tử, tăng tiết đờm dãi, nhịp chậm), thụ thể Nicotinic (co giật cơ, liệt cơ hô hấp) và thần kinh trung ương.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 171,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hai thuốc giải độc kinh điển bắt buộc phải phối hợp đồng thời trong cấp cứu ngộ độc thuốc trừ sâu Phospho hữu cơ là gì?",
    "options": [
      "Naloxone phối hợp với Flumazenil tiêm tĩnh mạch",
      "Vitamin K1 phối hợp với Than hoạt đa liều",
      "Xanh Methylen phối hợp với Calci gluconat",
      "Atropin sulfat (đối kháng triệu chứng Muscarinic) phối hợp với Pralidoxime - PAM (tái hoạt hóa enzym Acetylcholinesterase trước khi bị 'lão hóa')"
    ],
    "correct": 3,
    "explanation": "Atropin liều cao cắt đứt các triệu chứng kích thích Muscarinic nguy hiểm (chống co thắt phế quản, ngừng tiết dịch phế quản, nâng nhịp tim). Pralidoxime (PAM) gắn vào vị trí anion của enzym AChE, kéo gốc phospho ra khỏi enzym để giải phóng và phục hồi lại hoạt tính của AChE trước khi enzym bị 'lão hóa' (Aging) liên kết chặt không hồi phục.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 172,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tam chứng kinh điển phản ánh tình trạng ngộ độc cấp tính các thuốc Opioid (Morphin, Heroin, Fentanyl) đe dọa ngừng thở tử vong gồm những dấu hiệu nào?",
    "options": [
      "Tăng huyết áp kịch phát, nhịp tim nhanh và giãn đồng tử tối đa",
      "Co cứng cơ toàn thân, sốt cao ác tính và tiêu chảy",
      "Ức chế trung khu hô hấp (thở chậm < 8 - 10 lần/phút hoặc ngừng thở), đồng tử co nhỏ như đầu đinh ghim (Pinpoint pupils) và hôn mê sâu",
      "Ảo giác kích động thần kinh, co giật và phù phổi cấp"
    ],
    "correct": 2,
    "explanation": "Tam chứng ngộ độc Opioid kinh điển (Opioid toxidrome): ức chế trung khu hô hấp ở hành não (nhịp thở chậm, nông, ngắt quãng $le 8$ lần/phút $\rightarrow$ ngừng thở), đồng tử co nhỏ như đầu đinh ghim (pinpoint pupils - do kích thích phó giao cảm nhân Edinger-Westphal) và hôn mê mất ý thức hoàn toàn.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 173,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc giải độc đặc hiệu Naloxone trong ngộ độc cấp Opioid cần lưu ý đặc điểm dược động học nào sau đây để tránh bệnh nhân tái rơi vào hôn mê ngừng thở?",
    "options": [
      "Thời gian bán thải của Naloxone trong máu rất ngắn (chỉ khoảng 30 đến 90 phút), ngắn hơn nhiều so với thời gian tác dụng của hầu hết các Opioid (Morphin, Methadon), do đó phải theo dõi sát và tiêm nhắc lại hoặc truyền tĩnh mạch liên tục",
      "Naloxone tích lũy trong gan nhiều ngày gây ngộ độc gan cấp",
      "Naloxone làm tăng tác dụng an thần của morphin",
      "Naloxone chỉ có tác dụng khi dùng đường uống hấp thu qua ruột"
    ],
    "correct": 0,
    "explanation": "Naloxone là chất đối kháng cạnh tranh thuần túy tại thụ thể opioid mu. Bán thải của Naloxone chỉ 30-90 phút trong khi morphin kéo dài 3-5 giờ (Methadon kéo dài 24-36 giờ). Khi Naloxone hết tác dụng, opioid trong cơ thể sẽ gắn lại vào thụ thể làm bệnh nhân ngừng thở tái phát; do đó phải theo dõi liên tục ít nhất 4-24 giờ.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 174,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Flumazenil là chất giải độc đặc hiệu đối kháng cạnh tranh trên thụ thể GABA-A được chỉ định trong ngộ độc nhóm thuốc an thần gây ngủ nào?",
    "options": [
      "Thuốc ngủ nhóm Barbiturat (như Phenobarbital)",
      "Thuốc an thần gây ngủ nhóm Benzodiazepin (như Diazepam, Midazolam, Lorazepam)",
      "Thuốc chống trầm cảm 3 vòng (Amitriptylin)",
      "Thuốc an thần kinh kháng dopamin (Haloperidol)"
    ],
    "correct": 1,
    "explanation": "Flumazenil gắn cạnh tranh đặc hiệu tại vị trí gắn benzodiazepin trên thụ thể GABA-A, hóa giải nhanh chóng tác dụng an thần, gây ngủ và ức chế hô hấp của các thuốc nhóm Benzodiazepin trong vòng 1-2 phút sau khi tiêm tĩnh mạch.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 175,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cảnh báo nguy hiểm khi chỉ định Flumazenil cho bệnh nhân ngộ độc chưa rõ tiền sử là nguy cơ kích hoạt cơn co giật kháng trị tử vong trong trường hợp nào?",
    "options": [
      "Bệnh nhân có ngộ độc phối hợp với thuốc hạ sốt Paracetamol",
      "Bệnh nhân đang có tình trạng tăng huyết áp",
      "Bệnh nhân có tiền sử động kinh hoặc ngộ độc phối hợp với thuốc chống trầm cảm 3 vòng (TCA như Amitriptylin)",
      "Bệnh nhân có tiền sử viêm loét dạ dày tá tràng"
    ],
    "correct": 3,
    "explanation": "Flumazenil làm mất tác dụng chống co giật của Benzodiazepin. Ở bệnh nhân ngộ độc phối hợp TCA (thuốc hạ thấp ngưỡng co giật và loạn nhịp tim), Flumazenil sẽ bộc lộ độc tính gây co giật dữ dội và loạn nhịp thất của TCA, rất khó điều trị và có thể gây tử vong. Cần cân nhắc kỹ trước khi dùng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 176,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Phần aglycon của glycosid tim có nhân steroid gắn vòng lacton ở vị trí C17. Sự bão hòa (hydro hóa làm mất liên kết đôi) của vòng lacton này sẽ dẫn đến hệ quả sinh học nào?",
    "options": [
      "Làm mất hầu như hoàn toàn tác dụng trợ tim của phân tử thuốc",
      "Làm tăng hoạt tính trợ tim và kéo dài thời gian bán thải lên gấp 10 lần",
      "Làm thuốc chuyển sang tác dụng chẹn thụ thể beta-adrenergic giao cảm",
      "Làm tăng độ tan trong lipid giúp thuốc vượt qua hàng rào máu não nhanh hơn"
    ],
    "correct": 0,
    "explanation": "Vòng lacton 5 cạnh hoặc 6 cạnh chưa bão hòa (mang liên kết đôi) ở vị trí C17 là cấu trúc thiết yếu quyết định hoạt tính sinh học. Nếu hydro hóa làm bão hòa liên kết đôi này hoặc mở vòng lacton, phân tử sẽ mất hầu như hoàn toàn tác dụng trợ tim.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 177,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân có nồng độ Magnesi huyết tương sụt giảm nghiêm trọng (Mg2+ < 0.7 mmol/L) khi dùng thuốc trợ tim glycosid sẽ đối mặt với nguy cơ bệnh lý nào sau đây?",
    "options": [
      "Thuốc mất hoàn toàn ái lực với thụ thể do thiếu cation kích hoạt bề mặt",
      "Tăng nhạy cảm của cơ tim với độc tính Digitalis và khó điều trị loạn nhịp thất nếu không bù Magnesi",
      "Tăng phân hủy enzym Na+/K+-ATPase thành các tiểu đơn vị peptid bất hoạt",
      "Làm giảm hấp thu glycosid tim từ lòng ruột do bất hoạt hệ vận chuyển tích cực"
    ],
    "correct": 3,
    "explanation": "Magnesi là cofactor thiết yếu cho hoạt động của enzym Na+/K+-ATPase. Thiếu hụt Mg2+ làm giảm chức năng bơm và hiệp đồng với hạ K+ máu làm tăng nguy cơ ngộ độc Digitalis. Các rối loạn nhịp do ngộ độc Digitalis kèm hạ Mg2+ thường kháng trị với các thuốc chống loạn nhịp nếu chưa bù Mg2+.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 178,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng không mong muốn sớm nhất và thường xuất hiện đầu tiên cảnh báo tình trạng quá liều hoặc bắt đầu ngộ độc Digitalis trên lâm sàng là gì?",
    "options": [
      "Ảo giác thính giác và co giật toàn thể kiểu động kinh",
      "Block nhánh trái hoàn toàn kèm tràn dịch màng ngoài tim",
      "Rối loạn tiêu hóa (chán ăn, buồn nôn, nôn mửa, đau quặn bụng)",
      "Đái ra máu vi thể do hoại tử biểu mô mao quản cầu thận"
    ],
    "correct": 2,
    "explanation": "Dấu hiệu sớm nhất và nhạy nhất của ngộ độc Digitalis là các rối loạn tiêu hóa: chán ăn, buồn nôn, nôn mửa. Đây là phản ứng do kích thích vùng kích hoạt thụ thể hóa học (chemoreceptor trigger zone - CTZ) ở sàn não thất IV.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 179,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Biểu hiện loạn nhịp tim đặc trưng và thường gặp nhất phản ánh tình trạng ngộ độc cơ tim do Glycosid tim gây ra là dạng loạn nhịp nào sau đây?",
    "options": [
      "Nhịp chậm xoang đơn thuần không có rối loạn dẫn truyền",
      "Ngoại tâm thu thất (đặc biệt là dạng nhịp đôi - bigeminy, nhịp ba, hoặc đa ổ)",
      "Cơn nhịp nhanh kịch phát trên thất do vòng vào lại nút nhĩ thất (AVNRT)",
      "Cuồng nhĩ với tỷ lệ dẫn truyền nhĩ thất cố định 2:1"
    ],
    "correct": 1,
    "explanation": "Ngoại tâm thu thất (đặc biệt là dạng ngoại tâm thu thất nhịp đôi - bigeminy hoặc đa ổ) là rối loạn nhịp thường gặp nhất và đặc trưng nhất của ngộ độc Digitalis, do thuốc làm quá tải Ca2+ nội bào sinh ra các điện thế hậu khử cực muộn (DADs).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 180,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Chỉ định lâm sàng chính yếu và kinh điển nhất của nhóm thuốc Glycosid tim (Digoxin) trong thực hành hiện đại là trường hợp nào?",
    "options": [
      "Suy tim tâm thu (phân suất tống máu giảm EF < 40%) kèm theo rung nhĩ nhanh để kiểm soát tần số thất",
      "Suy tim tâm trương đơn thuần có bảo tồn phân suất tống máu (HFpEF)",
      "Bệnh cơ tim phì đại tắc nghẽn đường ra thất trái (HOCM)",
      "Viêm cơ tim cấp do virus kèm huyết áp tụt sâu và block AV độ 2 Mobitz II"
    ],
    "correct": 0,
    "explanation": "Chỉ định kinh điển có lợi ích rõ rệt nhất của Digoxin hiện nay là suy tim tâm thu mạn tính (HFrEF) có kèm theo rung nhĩ với đáp ứng tần số thất nhanh, nhờ tác dụng kép: tăng co bóp cơ tim và làm chậm dẫn truyền nhĩ thất kiểm soát tần số thất.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 181,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Chống chỉ định quan trọng nào sau đây áp dụng cho Glycosid tim do nguy cơ làm tăng chênh áp đường tống máu thất trái và làm bệnh nhân đột tử?",
    "options": [
      "Bệnh cơ tim giãn vô căn kèm phân suất tống máu sụt giảm nặng",
      "Suy tim sau nhồi máu cơ tim có rối loạn chức năng tâm thu thất trái",
      "Bệnh tim thiếu máu cục bộ mạn tính kèm tăng huyết áp nguyên phát",
      "Bệnh cơ tim phì đại tắc nghẽn (HOCM) hoặc hẹp van động mạch chủ nặng"
    ],
    "correct": 3,
    "explanation": "Trong bệnh cơ tim phì đại tắc nghẽn (HOCM), tăng co bóp cơ tim sẽ làm dày thêm vách liên thất và tăng mức độ hẹp đường tống máu thất trái, làm giảm cung lượng tim nghiêm trọng và có thể dẫn đến đột tử.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 182,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tại sao thuốc lợi tiểu Spironolacton lại có lợi thế đặc biệt khi dùng phối hợp trong phác đồ điều trị suy tim có dùng Digoxin?",
    "options": [
      "Spironolacton kích hoạt enzym gan giúp đào thải Digoxin nhanh hơn",
      "Spironolacton là thuốc lợi tiểu giữ kali, giúp phòng ngừa hạ K+ máu từ đó giảm nguy cơ ngộ độc Digoxin",
      "Spironolacton làm tăng dẫn truyền nhĩ thất giúp triệt tiêu tác dụng phụ chậm nhịp",
      "Spironolacton cạnh tranh trực tiếp với Digoxin tại thụ thể màng cơ vân"
    ],
    "correct": 1,
    "explanation": "Spironolacton là thuốc kháng aldosteron giữ kali máu. Việc duy trì nồng độ K+ máu ổn định trong khoảng 4.0 - 5.0 mmol/L giúp bảo vệ enzym Na+/K+-ATPase, ngăn ngừa tình trạng ngộ độc loạn nhịp do Digoxin.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
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
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc chống đau thắt ngực Ivabradine tác động lên điện sinh lý tế bào cơ tim theo cơ chế chọn lọc độc nhất vô nhị nào sau đây?",
    "options": [
      "Chẹn kênh calci typ T ở tế bào nội mạc mạch vành",
      "Ức chế chọn lọc dòng kênh If (funny current) tại nút xoang làm chậm nhịp tim mà không ảnh hưởng lực co bóp cơ tim hay huyết áp",
      "Chẹn thụ thể beta-1 adrenergic ở màng tế bào nút xoang và sợi Purkinje",
      "Kích hoạt kênh kali phụ thuộc acetylcholin làm ưu phân cực màng nhĩ"
    ],
    "correct": 1,
    "explanation": "Ivabradine ức chế đặc hiệu dòng If (dòng ion Na+/K+ đi vào chịu trách nhiệm cho pha khử cực chậm tâm trương) tại nút xoang, giúp giảm nhịp tim thuần túy mà không ảnh hưởng đến co bóp cơ tim hay huyết áp.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 192,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng phụ giác quan đặc thù chỉ gặp ở thuốc điều trị đau thắt ngực Ivabradine là hiện tượng nào sau đây?",
    "options": [
      "Hiện tượng chói sáng mắt (phosphenes / hiện tượng đom đóm mắt) khi thay đổi cường độ ánh sáng đột ngột",
      "Mất vị giác hoàn toàn kèm theo rối loạn khứu giác kéo dài",
      "Ảo thị giác nhìn mọi vật đổi thành màu vàng hoặc xanh lá cây",
      "Giảm thính lực một bên kèm theo ù tai dạng tiếng ve kêu liên tục"
    ],
    "correct": 0,
    "explanation": "Hiện tượng chói sáng mắt (phosphenes) là tác dụng phụ đặc trưng của Ivabradine (gặp ở khoảng 15% bệnh nhân), do thuốc ức chế dòng dòng kênh h ở võng mạc (tương tự dòng If ở nút xoang).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 193,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trimetazidine là thuốc chống đau thắt ngực theo cơ chế chuyển hóa cơ tim. Cơ chế phân tử chính xác của hoạt chất này là gì?",
    "options": [
      "Kích thích enzym ty thể phân giải glycogen thành acid lactic",
      "Ức chế thụ thể ryanodine trên mạng nội chất giải phóng calci",
      "Ức chế vận chuyển acid béo tự do qua màng đáy mao mạch cơ tim",
      "Ức chế enzym 3-ketoacyl-CoA thiolase (3-KAT), chuyển chuyển hóa năng lượng từ oxy hóa acid béo sang oxy hóa glucose"
    ],
    "correct": 3,
    "explanation": "Trimetazidine ức chế chọn lọc enzym 3-ketoacyl-CoA thiolase (3-KAT) trong chuỗi beta-oxy hóa acid béo. Điều này thúc đẩy tế bào cơ tim chuyển sang oxy hóa glucose (tiêu thụ ít oxy hơn trên mỗi phân tử ATP tạo ra), bảo vệ cơ tim trong điều kiện thiếu máu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 194,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc chống loạn nhịp Adenosin được chỉ định hàng đầu trong cấp cứu cơn nhịp nhanh kịch phát trên thất (PSVT) nhờ cơ chế phân tử nào?",
    "options": [
      "Ức chế enzym phosphodiesterase-3 làm tăng AMP vòng nội bào",
      "Gắn vào thụ thể Purinergic A1 ở nút nhĩ thất, kích hoạt kênh Kali và ức chế dòng Calci, gây ức chế dẫn truyền nhĩ thất tức thì",
      "Chẹn chọn lọc kênh Natri phụ thuộc điện thế ở mạng lưới Purkinje",
      "Đối kháng cạnh tranh thụ thể giao cảm beta-1 tại màng tế bào cơ tim"
    ],
    "correct": 1,
    "explanation": "Adenosin gắn vào thụ thể A1 tại nút nhĩ thất, liên kết với protein Gi làm giảm cAMP, mở kênh K+ phụ thuộc acetylcholin/adenosin gây ưu phân cực màng và ức chế dòng Ca2+, làm ngưng trệ dẫn truyền qua nút nhĩ thất lập tức để cắt vòng vào lại trong PSVT.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 195,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Đặc điểm dược động học độc nhất vô nhị của Adenosin đòi hỏi kỹ thuật tiêm tĩnh mạch phải cực kỳ đặc biệt là gì?",
    "options": [
      "Gắn protein huyết tương 99% nên phải tiêm truyền chậm qua bơm tiêm điện trong 24 giờ",
      "Chuyển hóa qua gan chậm với thời gian bán thải kéo dài trên 72 giờ",
      "Thuốc tan kém trong nước nên phải pha trong nhũ dịch lipid truyền qua tĩnh mạch trung tâm",
      "Thời gian bán thải trong máu cực ngắn (dưới 10 giây) do bị enzym deaminase và hồng cầu bắt giữ, bắt buộc phải tiêm bolus tĩnh mạch cực nhanh kèm tráng dịch"
    ],
    "correct": 3,
    "explanation": "Thời gian bán thải của Adenosin trong tuần hoàn chỉ dưới 10 giây do bị hồng cầu và tế bào nội mô bắt giữ và thoái biến nhanh bởi enzym adenosin deaminase. Do đó, bắt buộc phải tiêm bolus tĩnh mạch cực nhanh (1-2 giây) qua đường truyền gần tim kèm xả ngay 20mL NaCl 0.9%.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 196,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Nguy cơ loạn nhịp thất 'Xoắn đỉnh' (Torsades de Pointes) và đột tử có khả năng xảy ra cao nhất khi sử dụng các thuốc chống loạn nhịp có đặc tính điện sinh lý nào sau đây?",
    "options": [
      "Các thuốc kéo dài pha tái cực làm kéo dài khoảng QT trên ECG (như Nhóm IA: Quinidin; Nhóm III: Sotalol, Dofetilide)",
      "Các thuốc rút ngắn thời gian điện thế hoạt động (như Nhóm IB: Lidocain, Mexiletin)",
      "Các thuốc làm chậm dẫn truyền nhĩ thất đơn thuần (như Nhóm IV: Verapamil)",
      "Các thuốc chẹn beta giao cảm làm giảm nhịp tim xoang (như Metoprolol)"
    ],
    "correct": 0,
    "explanation": "Các thuốc Nhóm IA và Nhóm III làm kéo dài thời gian điện thế hoạt động và khoảng QT. Khi khoảng QT kéo dài (đặc biệt kèm hạ K+, hạ Mg2+ hoặc nhịp chậm), điện thế hậu khử cực sớm (EADs) dễ xuất hiện kích hoạt cơn nhịp nhanh thất xoắn đỉnh (Torsades de Pointes).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 197,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc chống loạn nhịp Nhóm IC (Flecainid, Propafenon) có đặc điểm dược lý điện sinh lý phân biệt với các phân nhóm khác ở điểm nào?",
    "options": [
      "Rút ngắn rất mạnh thời gian dẫn truyền nhĩ thất và thời kỳ trơ",
      "Chẹn kênh calci typ T chọn lọc không ảnh hưởng phức bộ QRS",
      "Ức chế cực mạnh kênh Natri (pha 0) làm giãn rộng phức bộ QRS rõ rệt, nhưng hầu như không thay đổi thời gian điện thế hoạt động (APD)",
      "Chỉ làm chậm pha khử cực chậm tâm trương ở nút xoang"
    ],
    "correct": 2,
    "explanation": "Nhóm IC (Flecainid, Propafenon) có động học gắn - tách khỏi kênh Na+ rất chậm (chẹn mạnh nhất pha 0), làm chậm dẫn truyền nội thất và giãn rộng phức bộ QRS rõ rệt, nhưng hầu như không làm thay đổi thời gian điện thế hoạt động (APD).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 198,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Vì sao việc sử dụng thuốc lợi tiểu thẩm thấu Mannitol bị chống chỉ định tuyệt đối ở bệnh nhân suy tim ứ huyết nặng hoặc đang có phù phổi cấp?",
    "options": [
      "Mannitol làm co thắt tiểu phế quản gây cơn hen phế quản cấp",
      "Mannitol kéo nước nhanh chóng từ khoang kẽ vào lòng mạch làm tăng vọt thể tích tuần hoàn cấp tính, làm tim quá tải và phù phổi bùng phát",
      "Mannitol gây tiêu cơ tim cấp do làm giảm tưới máu qua động mạch vành",
      "Mannitol ức chế bài tiết nước tiểu dẫn đến vỡ bàng quang do tăng áp lực"
    ],
    "correct": 1,
    "explanation": "Khi truyền tĩnh mạch, dung dịch ưu trương Mannitol phân bố ở khoang ngoại bào và kéo một lượng nước khổng lồ từ mô kẽ vào lòng mạch. Hiện tượng tăng gánh thể tích tuần hoàn cấp tính này sẽ đẩy bệnh nhân suy tim vào cơn phù phổi cấp và trụy tim mạch tử vong.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 199,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng phụ rối loạn chuyển hóa nào sau đây là đặc trưng và thường gặp nhất khi điều trị lâu dài bằng thuốc lợi tiểu Thiazid (HCTZ) hoặc Lợi tiểu quai (Furosemid)?",
    "options": [
      "Hạ đường huyết nghiêm trọng và giảm nồng độ acid uric máu",
      "Tăng nồng độ kali máu và tăng thải trừ calci qua đường mật",
      "Tăng acid uric máu (nguy cơ bùng phát cơn Gút cấp) và tăng đường huyết",
      "Nhiễm toan lactic máu và hạ triglycerid máu toàn phần"
    ],
    "correct": 3,
    "explanation": "Cả Thiazid và Lợi tiểu quai đều cạnh tranh thải trừ với acid uric tại ống lượn gần, dẫn tới tăng acid uric máu có thể khởi phát cơn gút cấp. Đồng thời, thuốc gây hạ K+ máu làm giảm bài tiết insulin từ tế bào beta đảo tụy, gây tăng đường huyết.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 200,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc lợi tiểu nào sau đây được ưu tiên lựa chọn hàng đầu trong điều trị phù và cổ trướng ở bệnh nhân xơ gan nhờ khả năng đối kháng tình trạng cường aldosteron thứ phát?",
    "options": [
      "Furosemid dùng đơn độc liều cao",
      "Acetazolamid viên nén",
      "Spironolacton (hoặc phối hợp Spironolacton với Furosemid theo tỷ lệ 100mg : 40mg)",
      "Hydrochlorothiazid phối hợp thuốc chẹn beta"
    ],
    "correct": 2,
    "explanation": "Ở bệnh nhân xơ gan cổ trướng, gan giảm thoái biến aldosteron dẫn đến tình trạng cường aldosteron thứ phát trầm trọng. Spironolacton đối kháng trực tiếp aldosteron là nền tảng điều trị (thường phối hợp với Furosemid theo tỷ lệ vàng 100:40 để duy trì cân bằng kali máu).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 201,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cơ chế nào giải thích tại sao thuốc chống viêm không steroid (NSAID như Indomethacin, Ibuprofen) lại làm giảm đáng kể hiệu lực lợi niệu và hạ huyết áp của Furosemid?",
    "options": [
      "NSAID ức chế tổng hợp Prostaglandin PGE2 và PGI2 tại thận, làm mất tác dụng giãn tiểu động mạch đến của Furosemid",
      "NSAID cạnh tranh liên kết trực tiếp trên hệ đồng vận chuyển Na+/K+/2Cl-",
      "NSAID kích thích tăng tiết aldosteron từ lớp cầu vỏ thượng thận",
      "NSAID phá hủy cấu trúc của Furosemid tại môi trường acid dạ dày"
    ],
    "correct": 0,
    "explanation": "Furosemid kích thích tổng hợp các Prostaglandin giãn mạch (PGE2, PGI2) tại thận, giúp tăng dòng máu qua thận và tăng lọc. NSAID ức chế enzym COX làm giảm tổng hợp prostaglandin, gây co tiểu động mạch đến và triệt tiêu tác dụng lợi niệu này.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 202,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Một bệnh nhân tăng huyết áp có tiền sử sỏi thận Calci tái phát nhiều lần. Nhóm thuốc lợi tiểu nào sau đây vừa có tác dụng hạ huyết áp, vừa có khả năng phòng ngừa tạo sỏi calci niệu?",
    "options": [
      "Thuốc lợi tiểu quai (Bumetanid)",
      "Thuốc lợi tiểu Thiazid (Hydrochlorothiazid, Indapamid)",
      "Thuốc lợi tiểu thẩm thấu (Glycerin)",
      "Thuốc kháng Aldosteron (Eplerenon)"
    ],
    "correct": 1,
    "explanation": "Thiazid làm tăng tái hấp thu Ca2+ ở ống lượn xa vào máu, làm giảm đáng kể nồng độ Calci đào thải trong nước tiểu (giảm calci niệu), từ đó làm giảm sự bão hòa và ngăn ngừa tái phát sỏi calci oxalat đường tiết niệu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 203,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Misoprostol là một dẫn chất tổng hợp của Prostaglandin E1 (PGE1) được chỉ định chủ yếu để dự phòng và điều trị loét dạ dày tá tràng do nguyên nhân nào?",
    "options": [
      "Loét do nhiễm khuẩn Helicobacter pylori kháng Clarithromycin",
      "Loét dạ dày tá tràng do dùng thuốc chống viêm không steroid (NSAID)",
      "Hội chứng Zollinger-Ellison có u tăng tiết gastrin ác tính",
      "Trào ngược dạ dày thực quản (GERD) độ IV có biến chứng Barrett thực quản"
    ],
    "correct": 1,
    "explanation": "NSAID ức chế COX-1 làm cạn kiệt prostaglandin bảo vệ niêm mạc dạ dày. Misoprostol thay thế PGE1 nội sinh, kích thích tế bào biểu mô nhầy tiết chất nhầy và HCO3-, đồng thời giảm tiết acid, chuyên dùng dự phòng loét do NSAID.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 204,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Chống chỉ định quan trọng và tuyệt đối nhất của Misoprostol trong thực hành sản phụ khoa là trường hợp nào?",
    "options": [
      "Bệnh nhân đái tháo đường thai kỳ đang dùng insulin",
      "Phụ nữ cho con bú sau sinh mổ",
      "Bệnh nhân có tiền sử mổ lấy thai cũ trên 2 năm",
      "Phụ nữ có thai do nguy cơ kích thích co bóp tử cung mạnh gây sảy thai hoặc dị tật thai nhi"
    ],
    "correct": 3,
    "explanation": "Misoprostol kích thích mạnh thụ thể prostanoid trên cơ trơn tử cung gây co bóp tử cung dữ dội, gây sảy thai, chuyển dạ sớm hoặc dị tật thai nhi (hội chứng Moebius). Thuốc chống chỉ định tuyệt đối cho phụ nữ mang thai (trừ khi dùng phá thai nội khoa).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 205,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong phác đồ 4 thuốc có Bismuth (Bismuth quadruple therapy) tiệt trừ vi khuẩn Helicobacter pylori kháng thuốc, thành phần gồm những thuốc nào?",
    "options": [
      "PPI + Bismuth + Metronidazol + Tetracyclin",
      "PPI + Amoxicillin + Clarithromycin + Levofloxacin",
      "Kháng H2 + Bismuth + Ciprofloxacin + Doxycyclin",
      "PPI + Sucralfat + Azithromycin + Rifampicin"
    ],
    "correct": 0,
    "explanation": "Phác đồ 4 thuốc có Bismuth kinh điển gồm: một thuốc PPI (liều chuẩn 2 lần/ngày) + Bismuth subcitrat/subsalicylat + Metronidazol + Tetracyclin dùng trong 14 ngày, hiện là phác đồ hàng đầu tại vùng có tỷ lệ kháng Clarithromycin cao.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 206,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tương tác thuốc đáng lo ngại giữa Omeprazol và thuốc kháng kết tập tiểu cầu Clopidogrel xảy ra do cơ chế cạnh tranh enzym chuyển hóa nào tại gan?",
    "options": [
      "Cạnh tranh liên kết với albumin huyết tương làm tăng Clopidogrel tự do",
      "Ức chế bài xuất Clopidogrel qua đường mật làm tích lũy gây độc",
      "Ức chế cytochrom P450 isoenzym CYP2C19, làm giảm chuyển hóa Clopidogrel thành dạng có hoạt tính chống đông",
      "Kích thích enzym CYP3A4 làm thoái giáng Clopidogrel nhanh gấp 10 lần"
    ],
    "correct": 2,
    "explanation": "Clopidogrel là tiền chất cần CYP2C19 chuyển hóa thành chất có hoạt tính. Omeprazol và Esomeprazol ức chế CYP2C19 làm giảm nồng độ chất chuyển hóa hoạt tính của Clopidogrel, làm giảm tác dụng chống đông tăng nguy cơ huyết khối stent.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 207,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hoạt chất nào sau đây có cơ chế ức chế chọn lọc enzym 5-Lipoxygenase (5-LOX), ngăn chặn toàn bộ chuỗi tổng hợp các chất trung gian Leukotriene từ Acid arachidonic?",
    "options": [
      "Montelukast",
      "Zafirlukast",
      "Pranlukast",
      "Zileuton"
    ],
    "correct": 3,
    "explanation": "Zileuton là thuốc duy nhất ức chế trực tiếp enzym 5-lipoxygenase (5-LOX), ngăn chặn sự hình thành của tất cả các loại leukotriene (cả LTB4 và các cysteinyl leukotriene LTC4, LTD4, LTE4). Thuốc cần theo dõi men gan vì có độc tính gan.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 208,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tương tác thuốc làm tăng vọt nồng độ Theophyllin trong máu gây ngộ độc co giật và loạn nhịp thất xảy ra khi dùng phối hợp với kháng sinh nào sau đây do ức chế enzym CYP1A2 tại gan?",
    "options": [
      "Amoxicillin",
      "Azithromycin",
      "Ciprofloxacin (hoặc Erythromycin)",
      "Cephalexin"
    ],
    "correct": 2,
    "explanation": "Ciprofloxacin (kháng sinh Quinolon) và Erythromycin (Macrolid) là các chất ức chế mạnh isoenzym CYP1A2 tại gan - con đường chuyển hóa chính của Theophyllin. Phối hợp này làm giảm độ thanh thải của Theophyllin từ 30-50%, gây ngộ độc nghiêm trọng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 209,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Dextromethorphan là hoạt chất giảm ho trung ương phổ biến có đặc tính dược lý khác biệt với Codein ở điểm mấu chốt nào sau đây?",
    "options": [
      "Đồng phân d của morphinan, không gắn vào thụ thể opioid mu, không gây nghiện và không gây táo bón ở liều điều trị",
      "Tác dụng chủ yếu ngoại vi làm tê liệt các đầu mút thụ cảm thể ho tại phế quản",
      "Có tác dụng giảm đau mạnh gấp 10 lần morphin đường tĩnh mạch",
      "Gây co đồng tử nhỏ như đầu kim và ức chế hô hấp sâu ngay ở liều thông thường"
    ],
    "correct": 0,
    "explanation": "Dextromethorphan là đồng phân d của levorphanol. Thuốc ức chế trung tâm ho ở hành não nhưng hầu như không tác động lên thụ thể opioid mu ở liều điều trị, không có tác dụng giảm đau, không gây nghiện và không gây táo bón như Codein.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 210,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Promethazin là một dẫn xuất phenothiazin thuộc nhóm kháng H1 thế hệ 1 có tác dụng an thần và chống nôn rất mạnh. Cảnh báo an toàn của FDA chống chỉ định dùng Promethazin cho đối tượng nào?",
    "options": [
      "Phụ nữ mãn kinh bị cơn bốc hỏa",
      "Nam giới mắc bệnh viêm gan B mạn tính",
      "Trẻ em dưới 2 tuổi do nguy cơ ức chế hô hấp sâu dẫn đến tử vong đột ngột",
      "Bệnh nhân có tiền sử gãy xương cẳng chân"
    ],
    "correct": 2,
    "explanation": "FDA đã ban hành cảnh báo hộp đen chống chỉ định Promethazin cho trẻ em dưới 2 tuổi vì thuốc có thể gây ức chế hô hấp kịch phát dẫn đến ngạt thở và tử vong đột ngột (hội chứng đột tử ở trẻ nhỏ - SIDS).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 211,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc kháng Histamin H1 nào sau đây có cấu trúc dẫn chất piperazin, là chất chuyển hóa có hoạt tính của Hydroxyzin, có thể gây buồn ngủ nhẹ ở một số bệnh nhân nhạy cảm?",
    "options": [
      "Loratadin",
      "Fexofenadin",
      "Azelastin",
      "Cetirizin"
    ],
    "correct": 3,
    "explanation": "Cetirizin là chất chuyển hóa mang gốc acid carboxyl của Hydroxyzin. Mặc dù thuộc thế hệ 2 nhưng ở khoảng 10% người dùng, Cetirizin vẫn có thể qua não một lượng nhỏ và gây buồn ngủ thoáng qua (nhiều hơn so với Fexofenadin hay Loratadin).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 212,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cyproheptadin là một thuốc kháng H1 thế hệ 1 có đặc tính đối kháng thêm thụ thể nào sau đây, dẫn đến tác dụng phụ kích thích ăn ngon miệng và làm tăng cân?",
    "options": [
      "Đối kháng thụ thể Serotonin 5-HT2A tại trung tâm kiểm soát cảm giác no ở vùng dưới đồi",
      "Kích thích thụ thể Dopamin D2 ở tuyến yên",
      "Ức chế thụ thể Leptin tại mô mỡ trắng",
      "Kích thích thụ thể Insulin ở tế bào cơ vân"
    ],
    "correct": 1,
    "explanation": "Cyproheptadin vừa kháng H1 vừa là chất đối kháng mạnh thụ thể Serotonin 5-HT2. Serotonin kích thích cảm giác no tại vùng dưới đồi; chẹn thụ thể này sẽ kích thích trung tâm thèm ăn, làm bệnh nhân ăn nhiều và tăng cân nhanh chóng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 213,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc nào sau đây là thuốc kháng sinh nhóm Aminoglycosid không hấp thu qua đường tiêu hóa, được dùng bằng đường uống để diệt amip lòng ruột và điều trị hôn mê gan?",
    "options": [
      "Gentamicin",
      "Amikacin",
      "Tobramycin",
      "Paromomycin"
    ],
    "correct": 3,
    "explanation": "Paromomycin là kháng sinh aminoglycosid dùng đường uống, hầu như không hấp thu qua niêm mạc ruột non (< 1%), giữ nguyên nồng độ cao trong lòng ruột để tiêu diệt thể amip lòng ruột và diệt vi khuẩn sinh amoniac trong điều trị bệnh não gan.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 214,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Phản ứng Mazzotti là một phản ứng dị ứng toàn thân nghiêm trọng (sốt cao, tụt huyết áp, sưng hạch, phù nề) có thể xảy ra khi dùng Ivermectin hoặc Diethylcarbamazin (DEC) do nguyên nhân nào?",
    "options": [
      "Độc tính trực tiếp của phân tử thuốc lên cơ tim",
      "Phản ứng miễn dịch bùng phát của cơ thể đối với lượng kháng nguyên khổng lồ giải phóng ra khi hàng triệu ấu trùng giun chỉ bị tiêu diệt ồ ạt",
      "Thuốc làm tan tế bào hồng cầu ồ ạt do thiếu men G6PD",
      "Tương tác thuốc với các enzym cytochrom P450 ở gan"
    ],
    "correct": 2,
    "explanation": "Phản ứng Mazzotti xảy ra ở bệnh nhân nhiễm nặng giun chỉ Onchocerca khi dùng thuốc diệt ấu trùng giun. Lượng lớn ấu trùng microfilariae chết giải phóng protein kháng nguyên lạ ồ ạt kích hoạt phản ứng viêm miễn dịch toàn thân dữ dội. Cần chuẩn bị sẵn Corticosteroid và kháng histamin để xử trí.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 215,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hoạt chất nào sau đây là thuốc lựa chọn hàng đầu trong điều trị bệnh giun chỉ bạch huyết (Wuchereria bancrofti, Brugia malayi) gây bệnh phù chân voi?",
    "options": [
      "Diethylcarbamazin (DEC)",
      "Niclosamid",
      "Pyrantel pamoat",
      "Diloxanid furoat"
    ],
    "correct": 0,
    "explanation": "Diethylcarbamazin (DEC) làm thay đổi bề mặt màng của ấu trùng giun chỉ bạch huyết khiến chúng dễ bị hệ miễn dịch thực bào tiêu diệt, đồng thời làm tê liệt giun chỉ trưởng thành, là thuốc số 1 trong phác đồ điều trị và thanh toán bệnh giun chỉ bạch huyết.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 216,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc nào sau đây chỉ tác dụng chọn lọc tiêu diệt thể bào nang của amip trong lòng đại tràng mà hầu như không hấp thu vào máu, ít tác dụng phụ toàn thân?",
    "options": [
      "Tinidazol",
      "Diloxanid furoat",
      "Emetin hydroclorid",
      "Secnidazol"
    ],
    "correct": 1,
    "explanation": "Diloxanid furoat là thuốc diệt amip lòng ruột (luminal amebicide) kinh điển. Tại lòng ruột non, thuốc bị thủy phân giải phóng diloxanid tự do tác động trực tiếp tiêu diệt các bào nang amip trong lòng đại tràng, tỷ lệ tiệt trừ đạt trên 90% ở người mang trùng không triệu chứng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 217,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Nhựa gắn acid mật (Bile acid sequestrants như Cholestyramin, Colestipol) hạ lipid máu theo cơ chế nào sau đây?",
    "options": [
      "Kích thích gan tăng bài tiết cholesterol vào ống mật",
      "Trao đổi ion Clo lấy acid mật tạo phức không tan đào thải theo phân, ngăn cản chu kỳ gan - ruột khiến gan phải tiêu hao cholesterol để tổng hợp acid mật mới",
      "Ức chế sự tạo thành các hạt chylomicron tại ruột non",
      "Tăng cường hoạt tính của enzym lipoprotein lipase ở cơ vân"
    ],
    "correct": 1,
    "explanation": "Cholestyramin là nhựa trao đổi anion không hấp thu. Trong ruột non, thuốc gắn không thuận nghịch với acid mật mang điện tích âm, tống ra ngoài theo phân. Mất acid mật làm gián đoạn chu kỳ gan-ruột, kích thích gan huy động cholesterol nội bào để tổng hợp acid mật mới, làm tăng thụ thể LDL kéo LDL-C máu giảm.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 218,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hạn chế lớn nhất về mặt dược động học khi sử dụng nhóm thuốc nhựa gắn acid mật (Cholestyramin) là tương tác thuốc nào?",
    "options": [
      "Ức chế mạnh mẽ hệ enzym cytochrom P450 ở gan",
      "Làm phá hủy cấu trúc của các thuốc có tính base trong dạ dày",
      "Tạo phức chelate không hấp thu, cản trở sự hấp thu của nhiều thuốc dùng chung (như Warfarin, Digoxin, Levothyroxin, Thiazid) và các vitamin tan trong dầu (A, D, E, K)",
      "Làm tăng đào thải qua thận của các thuốc có tính acid"
    ],
    "correct": 3,
    "explanation": "Bản chất là polymer trao đổi ion phân tử lớn không hấp thu, Cholestyramin hấp phụ và tạo phức trơ với các thuốc mang tính acid nhẹ dùng cùng lúc (Warfarin, Digoxin, Thiazid, Levothyroxin...) và vitamin tan trong dầu (A, D, E, K). Bắt buộc phải uống các thuốc khác trước 1 giờ hoặc sau 4-6 giờ.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 219,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Evolocumab và Alirocumab thuộc nhóm thuốc hạ lipid máu hiện đại nào có khả năng giảm LDL-C ngoạn mục tới 60 - 70% ở bệnh nhân nguy cơ tim mạch rất cao?",
    "options": [
      "Kháng thể đơn dòng ức chế Proprotein Convertase Subtilisin/Kexin Type 9 (PCSK9)",
      "Thuốc ức chế protein vận chuyển cholesteryl ester transfer protein (CETP)",
      "Oligonucleotid đối mã ức chế tổng hợp Apolipoprotein B (Mipomersen)",
      "Thuốc chủ vận thụ thể Farnesoid X Receptor (FXR)"
    ],
    "correct": 0,
    "explanation": "Enzym PCSK9 liên kết với thụ thể LDL trên bề mặt tế bào gan và thúc đẩy sự thoái giáng thụ thể này trong lysosome. Evolocumab và Alirocumab là các kháng thể đơn dòng ức chế PCSK9, giúp tái sử dụng và tăng vọt số lượng thụ thể LDL ở màng tế bào gan, kéo tụt nồng độ LDL-C máu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 220,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Chống chỉ định quan trọng nhất và tuyệt đối của nhóm thuốc Statin cần ghi nhớ trong dược lâm sàng là đối tượng nào?",
    "options": [
      "Bệnh nhân tăng huyết áp giai đoạn 2 có kèm bệnh thận đái tháo đường",
      "Phụ nữ có thai, phụ nữ đang trong thời kỳ cho con bú và bệnh nhân có bệnh gan tiến triển đang tăng men gan",
      "Bệnh nhân cao tuổi trên 75 tuổi có tiền sử xơ vữa động mạch vành",
      "Người bệnh đái tháo đường typ 2 có chỉ số HbA1c trên 8.0%"
    ],
    "correct": 2,
    "explanation": "Cholesterol và các hợp chất chuyển hóa trung gian (mevalonate, dolichol, squalene) là thành phần cấu tạo thiết yếu của màng tế bào phôi thai và sự phát triển của hệ thần kinh thai nhi. Statin có nguy cơ gây dị tật thai nhi, chống chỉ định tuyệt đối trong thai kỳ và cho con bú.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 221,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tại sao trong điều trị sốt rét hiện đại, Tổ chức Y tế Thế giới (WHO) và Bộ Y tế bắt buộc phải sử dụng phác đồ phối hợp ACT (Artemisinin-based Combination Therapy) mà CẤM dùng dẫn chất Artemisinin đơn độc?",
    "options": [
      "Để tăng độc tính của thuốc lên giao bào ký sinh trùng",
      "Do dẫn chất Artemisinin có giá thành quá đắt đỏ",
      "Để ngăn ngừa nguy cơ hạ thân nhiệt ở bệnh nhân sốt cao",
      "Dẫn chất Artemisinin diệt ký sinh trùng cực nhanh nhưng có thời gian bán thải rất ngắn (T1/2 < 1-2 giờ); dùng đơn độc sẽ có tỷ lệ tái phát rất cao và nhanh chóng tạo ra các chủng ký sinh trùng đột biến kháng thuốc"
    ],
    "correct": 3,
    "explanation": "Artemisinin làm sạch ký sinh trùng trong máu rất nhanh nhưng bán thải rất ngắn (< 2h). Thuốc phối hợp đi kèm (như Lumefantrine, Piperaquine, Mefloquine) có bán thải dài (vài tuần) sẽ tiêu diệt nốt những ký sinh trùng còn sót lại, ngăn ngừa sốt rét tái phát và triệt tiêu khả năng đột biến kháng Artemisinin.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 222,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Chỉ định cấp cứu sống còn hàng đầu của thuốc tiêm tĩnh mạch Artesunat (Artesunate IV) là trong trường hợp nào?",
    "options": [
      "Dự phòng sốt rét cho khách du lịch vào vùng dịch tễ",
      "Sốt rét thông thường do P. malariae",
      "Sốt rét ác tính (Severe/Complicated malaria) và sốt rét thể não do Plasmodium falciparum",
      "Sốt rét tái phát xa do P. vivax sau 1 năm"
    ],
    "correct": 2,
    "explanation": "Artesunat tiêm tĩnh mạch là tiêu chuẩn vàng cấp cứu sốt rét ác tính và sốt rét thể não do P. falciparum (vượt trội hơn Quinin IV cả về hiệu quả giảm tử vong và tính an toàn, ít gây hạ đường huyết và loạn nhịp). Liều tiêm ở các thời điểm 0h, 12h, 24h và sau đó mỗi ngày một lần.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 223,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc chống sốt rét Mefloquin được dùng phổ biến để dự phòng sốt rét cho người đi du lịch nhưng có chống chỉ định nghiêm ngặt ở đối tượng nào?",
    "options": [
      "Bệnh nhân có tiền sử rối loạn tâm thần, trầm cảm nặng hoặc tiền sử động kinh co giật",
      "Phụ nữ sau mãn kinh có nguy cơ loãng xương",
      "Bệnh nhân đái tháo đường đang kiểm soát tốt",
      "Người có tiền sử dị ứng với kháng sinh Penicillin"
    ],
    "correct": 0,
    "explanation": "Mefloquin qua hàng rào máu não rất tốt và có độc tính thần kinh tâm thần đáng kể: ác mộng dữ dội, mất ngủ, trầm cảm nặng, hoang tưởng ảo giác và kích hoạt cơn co giật. Thuốc chống chỉ định tuyệt đối cho người có tiền sử bệnh tâm thần, rối loạn lo âu nặng hoặc động kinh.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 224,
    "subject": "duocly2",
    "chapter": "KTGHP",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tương tác đẩy protein huyết tương (Displacement from plasma protein binding) xảy ra khi phối hợp thuốc chống viêm NSAID (Aspirin, Phenylbutazon) với thuốc chống đông Warfarin dẫn tới hậu quả lâm sàng nguy hiểm nào?",
    "options": [
      "Aspirin có ái lực rất cao với Albumin, đẩy Warfarin ra khỏi vị trí gắn làm nồng độ Warfarin dạng tự do trong máu tăng vọt, kết hợp với tác dụng ức chế tiểu cầu của Aspirin gây xuất huyết ồ ạt đe dọa tính mạng",
      "Làm mất hoàn toàn tác dụng chống đông của Warfarin",
      "Warfarin làm mất tác dụng hạ sốt giảm đau của NSAID",
      "Gây lắng đọng tinh thể protein tại cầu thận dẫn tới vô niệu"
    ],
    "correct": 0,
    "explanation": "Warfarin gắn protein huyết tương tới 99% (chỉ 1% tự do có hoạt tính). NSAID đẩy một lượng nhỏ Warfarin từ dạng gắn thành tự do (ví dụ tăng từ 1% lên 2% tự do, tương đương tăng gấp đôi nồng độ có hoạt tính). Kết hợp với tác dụng kháng tiểu cầu và loét dạ dày của NSAID, xuất huyết tiêu hóa ồ ạt là điều khó tránh khỏi.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 225,
    "subject": "duocly2",
    "chapter": "KTGHP",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tương tác thuốc tạo phức Chelate không tan tại đường tiêu hóa làm giảm hấp thu tới 80% của kháng sinh Ciprofloxacin hoặc Doxycyclin xảy ra khi uống cùng với các chất nào sau đây?",
    "options": [
      "Nước ép táo và bánh mì",
      "Thuốc hạ sốt Paracetamol",
      "Các thuốc hoặc thực phẩm chứa cation kim loại đa hóa trị (Fe2+, Ca2+, Mg2+, Al3+) như viên sắt, sữa tươi hoặc thuốc kháng toan Antacid",
      "Dung dịch truyền Glucose 5%"
    ],
    "correct": 2,
    "explanation": "Các kháng sinh nhóm Fluoroquinolon (Ciprofloxacin) và Tetracyclin (Doxycyclin) có cấu trúc hóa học dễ tạo phức chelate bền vững không tan với các ion kim loại hóa trị 2 và 3 (Ca2+, Mg2+, Al3+, Fe2+, Zn2+). Phức hợp này không thể hấp thu qua niêm mạc ruột non, dẫn tới thất bại điều trị nhiễm khuẩn.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 226,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc tránh thai đường uống kết hợp chứa Estrogen và Progestin làm tăng nguy cơ biến cố thuyên tắc huyết khối tĩnh mạch (DVT) và thuyên tắc phổi (PE) chủ yếu do tác động nào của Estrogen tại gan?",
    "options": [
      "Kích thích gan tăng tổng hợp các yếu tố đông máu (II, VII, IX, X, Fibrinogen) và làm giảm nồng độ chất chống đông tự nhiên Antithrombin III",
      "Làm giảm số lượng tiểu cầu tuần hoàn gây kết tập tiểu cầu dội ngược",
      "Gây co thắt các tĩnh mạch sâu ở chi dưới làm ứ trệ tuần hoàn",
      "Ức chế enzym plasminogen làm mất khả năng tự tiêu cục máu đông"
    ],
    "correct": 0,
    "explanation": "Estrogen chuyển hóa qua gan kích thích tăng tổng hợp các yếu tố đông máu phụ thuộc vitamin K (yếu tố II, VII, IX, X) và Fibrinogen, đồng thời làm giảm Antithrombin III và Protein S, dẫn tới trạng thái tăng đông. Nguy cơ huyết khối tăng cao ở phụ nữ trên 35 tuổi có hút thuốc lá.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 227,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tamoxifen là một chất điều hòa thụ thể Estrogen chọn lọc (SERM) được chỉ định trong ung thư vú nhạy cảm thụ thể nội tiết có đặc tính dược lý phân hóa ra sao giữa các mô?",
    "options": [
      "Chỉ ức chế thụ thể Estrogen tại tuyến giáp mà không ảnh hưởng tuyến vú",
      "Đối kháng thụ thể Estrogen tại mô tuyến vú, nhưng lại có tác dụng chủ vận một phần trên thụ thể Estrogen tại nội mạc tử cung và xương",
      "Kích thích mạnh thụ thể Estrogen tại tuyến vú nhưng ức chế tại xương",
      "Ức chế hoàn toàn thụ thể Estrogen đồng đều trên tất cả các cơ quan"
    ],
    "correct": 1,
    "explanation": "Tamoxifen là SERM: có tác dụng đối kháng Estrogen tại mô tuyến vú (ức chế tế bào ung thư vú tăng sinh); nhưng lại có tác dụng chủ vận một phần tại mô xương (ngăn ngừa tiêu xương) và nội mạc tử cung (làm tăng nguy cơ quá sản và ung thư nội mạc tử cung).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 228,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc nào sau đây thuộc nhóm ức chế enzym Aromatase (Aromatase inhibitors) ngăn cản chuyển đổi androgen thành estrogen, được chỉ định điều trị ung thư vú ở phụ nữ sau mãn kinh?",
    "options": [
      "Raloxifene",
      "Clomiphene",
      "Fulvestrant",
      "Anastrozole (hoặc Letrozole / Exemestane)"
    ],
    "correct": 3,
    "explanation": "Anastrozole và Letrozole ức chế chọn lọc enzym Aromatase ở mô mỡ ngoại vi - nguồn sản sinh estrogen chủ yếu ở phụ nữ sau mãn kinh, làm nồng độ estrogen lưu hành giảm tới > 95%, cắt đứt nguồn dinh dưỡng kích thích tế bào ung thư vú.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 229,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Oxytocin là một nonapeptid được thùy sau tuyến yên bài tiết, được chỉ định qua đường tiêm truyền tĩnh mạch trong sản khoa để đạt mục đích chính nào?",
    "options": [
      "Làm giãn cơ trơn cổ tử cung và giảm co bóp tử cung để dự phòng chuyển dạ dọa đẻ non",
      "Kích thích tuyến yên tiết Prolactin làm tăng tiết sữa",
      "Gây co bóp nhịp nhàng cơ trơn tử cung để giục sinh (khởi phát chuyển dạ) và phòng ngừa xuất huyết sau sinh do đờ tử cung",
      "Nâng huyết áp trong sốc nhiễm trùng sau phẫu thuật mổ lấy thai"
    ],
    "correct": 2,
    "explanation": "Oxytocin kích thích thụ thể oxytocin liên kết protein Gq trên cơ trơn tử cung làm tăng Ca2+ nội bào, gây co bóp tử cung có nhịp điệu tương tự chuyển dạ tự nhiên, dùng khởi phát chuyển dạ và kiểm soát băng huyết sau sinh do đờ tử cung.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 230,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Nhóm thuốc đồng vận thụ thể GLP-1 (như Liraglutid, Semaglutid) mang lại tác dụng hạ đường huyết phụ thuộc glucose và giảm cân mạnh mẽ thông qua các tác động sinh học nào?",
    "options": [
      "Ức chế trực tiếp cảm giác thèm ngọt ở gai vị giác của lưỡi",
      "Kích thích tiết insulin phụ thuộc nồng độ glucose máu, ức chế tiết glucagon sau ăn, làm chậm rỗng dạ dày và tác động lên vùng dưới đồi làm giảm cảm giác thèm ăn",
      "Làm tiêu mỡ nội tạng bằng cách tăng thân nhiệt ác tính",
      "Ức chế sự phân giải carbohydrate tại lòng ống tiêu hóa"
    ],
    "correct": 1,
    "explanation": "GLP-1 RA bắt chước hormon incretin nội sinh: chỉ kích thích tiết insulin khi đường máu tăng (do đó không gây hạ đường huyết đơn trị liệu), ức chế bài tiết glucagon từ tế bào alpha, làm chậm nhu động dạ dày gây no lâu và ức chế trung tâm thèm ăn ở não, giúp hạ HbA1c và giảm cân rõ rệt.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 231,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cảnh báo an toàn hộp đen (Black Box Warning) của nhóm thuốc Đồng vận thụ thể GLP-1 (Liraglutid, Semaglutid) chống chỉ định tuyệt đối cho đối tượng nào?",
    "options": [
      "Bệnh nhân có tiền sử bệnh tim mạch xơ vữa cục bộ",
      "Bệnh nhân có độ thanh thải creatinin dưới 60 mL/phút",
      "Bệnh nhân trên 65 tuổi có béo phì độ 2",
      "Bệnh nhân có tiền sử bản thân hoặc gia đình mắc ung thư biểu mô tuyến giáp thể tủy (MTC) hoặc hội chứng đa u nội tiết type 2 (MEN 2)"
    ],
    "correct": 3,
    "explanation": "Các nghiên cứu trên loài gặm nhấm cho thấy đồng vận GLP-1 kích thích thụ thể GLP-1 trên tế bào C tuyến giáp gây tăng sinh và phát triển u tế bào C tuyến giáp thể tủy (MTC). Thuốc chống chỉ định tuyệt đối ở người có tiền sử bản thân hoặc gia đình mắc MTC hoặc hội chứng MEN 2.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 232,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Các thuốc ức chế enzym Dipeptidyl Peptidase-4 (DPP-4 inhibitors như Sitagliptin, Vildagliptin, Linagliptin) làm tăng nồng độ của hormon nào trong tuần hoàn sau bữa ăn?",
    "options": [
      "Hormon Incretin nội sinh (GLP-1 và GIP) nhờ ngăn cản sự thoái giáng nhanh chóng của chúng",
      "Hormon Adrenalin từ tủy thượng thận",
      "Hormon Glucagon từ tế bào alpha đảo tụy",
      "Hormon Somatostatin từ vùng dưới đồi"
    ],
    "correct": 0,
    "explanation": "GLP-1 và GIP nội sinh bình thường bị enzym DPP-4 phân cắt bất hoạt rất nhanh chỉ sau 1-2 phút trong máu. Thuốc ức chế DPP-4 ngăn cản sự thoái giáng này, kéo dài thời gian bán hủy và tăng nồng độ incretin có hoạt tính gấp 2-3 lần sau bữa ăn.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 233,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Dabigatran etexilate là một thuốc chống đông đường uống thế hệ mới (DOAC) thuộc nhóm nào?",
    "options": [
      "Thuốc ức chế trực tiếp Thrombin (Direct Thrombin Inhibitor - ức chế trực tiếp Yếu tố IIa)",
      "Thuốc ức chế chọn lọc Yếu tố Xa tự do và liên kết",
      "Thuốc đối kháng thụ thể Vitamin K tại gan",
      "Thuốc kích thích Antithrombin III tổng hợp nội sinh"
    ],
    "correct": 0,
    "explanation": "Dabigatran là thuốc ức chế trực tiếp Thrombin (yếu tố IIa) đường uống: gắn cạnh tranh thuận nghịch vào vị trí xúc tác của cả Thrombin tự do và Thrombin đã gắn vào cục sợi huyết fibrin, ngăn chặn quá trình chuyển đổi fibrinogen thành fibrin.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 234,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Rivaroxaban, Apixaban và Edoxaban thuộc nhóm thuốc chống đông đường uống tác động trực tiếp lên mắt xích nào trong thác đông máu?",
    "options": [
      "Ức chế trực tiếp enzym Thrombin (Yếu tố IIa)",
      "Ức chế trực tiếp và chọn lọc Yếu tố Xa (Direct Factor Xa Inhibitors)",
      "Ức chế sự hoạt hóa của Yếu tố VII qua con đường ngoại sinh",
      "Bất hoạt Yếu tố XIII ngăn cản tạo liên kết chéo sợi fibrin"
    ],
    "correct": 1,
    "explanation": "Rivaroxaban, Apixaban, Edoxaban (các thuốc có đuôi '-xaban') là thuốc ức chế trực tiếp và chọn lọc yếu tố Xa (chẹn chữ 'Xa' trong tên thuốc). Yếu tố Xa là điểm hội tụ của cả con đường đông máu nội sinh và ngoại sinh để tạo thrombin.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 235,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Kháng thể đơn dòng Idarucizumab (Praxbind) là thuốc giải độc đặc hiệu (Specific reversal agent) được thiết kế riêng biệt để hóa giải tức thì tác dụng chống đông của thuốc nào?",
    "options": [
      "Warfarin",
      "Heparin trọng lượng phân tử thấp (Enoxaparin)",
      "Rivaroxaban",
      "Dabigatran"
    ],
    "correct": 3,
    "explanation": "Idarucizumab là đoạn kháng thể đơn dòng nhân hóa (Fab) có ái lực liên kết với Dabigatran cao gấp khoảng 350 lần so với ái lực của Dabigatran với Thrombin, trung hòa lập tức Dabigatran trong tuần hoàn trong vòng vài phút khi có xuất huyết đe dọa tính mạng hoặc phẫu thuật cấp cứu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 236,
    "subject": "duocly2",
    "chapter": "Thuốc chữa thiếu máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc giải độc đặc hiệu (Antidote) tạo phức chelate chọn lọc cao với ion sắt tự do trong máu để đào thải phức hợp màu đỏ cam qua nước tiểu trong ngộ độc sắt cấp tính là gì?",
    "options": [
      "Dimercaprol (BAL)",
      "Penicillamin",
      "EDTA calci dinatri",
      "Deferoxamin (Desferrioxamine)"
    ],
    "correct": 3,
    "explanation": "Deferoxamin là chất tạo chelate đặc hiệu có ái lực cực cao với ion Fe3+ (gắp sắt từ ferritin và hemosiderin nhưng không lấy sắt từ hemoglobin hay cytochrom). Phức hợp Ferrioxamine bền vững có màu đỏ cam được đào thải an toàn qua nước tiểu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 237,
    "subject": "duocly2",
    "chapter": "Thuốc chữa thiếu máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh thiếu máu ác tính Biermer (Pernicious Anemia) xuất phát từ nguyên nhân sinh lý bệnh nào dẫn tới mất hoàn toàn khả năng hấp thu Vitamin B12 qua đường tiêu hóa?",
    "options": [
      "Tự kháng thể phá hủy tế bào viền dạ dày làm mất Yếu tố nội tại (Intrinsic Factor) cần thiết để gắn và hấp thu Vitamin B12 tại đoạn cuối hồi tràng",
      "Hệ vi khuẩn đường ruột tiêu thụ toàn bộ lượng vitamin B12 ăn vào",
      "Tế bào gan không còn khả năng tổng hợp transcobalamin II",
      "Thận đào thải toàn bộ lượng vitamin B12 tự do qua nước tiểu"
    ],
    "correct": 0,
    "explanation": "Bệnh Biermer là bệnh tự miễn: tự kháng thể kháng tế bào viền hoặc kháng yếu tố nội tại (IF). Không có IF, vitamin B12 không thể tạo phức hợp IF-B12 để được nhận diện bởi thụ thể cubilin tại đoạn cuối hồi tràng, dẫn tới thiếu hụt B12 tuyệt đối dù ăn đủ chất.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 238,
    "subject": "duocly2",
    "chapter": "Vitamin",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh lý Scorbut (Scurvy) đặc trưng bởi chảy máu chân răng, xuất huyết dưới da quanh nang lông, vết thương lâu lành và rụng răng là do thiếu hụt Vitamin C ảnh hưởng đến phản ứng sinh hóa nào?",
    "options": [
      "Phản ứng liên hợp glucuronid tại tế bào gan",
      "Phản ứng hydroxyl hóa các gốc Prolin và Lysin trong chuỗi tổng hợp sợi Collagen",
      "Phản ứng phosphoryl hóa chuỗi nhẹ myosin",
      "Phản ứng khử carboxyl của acid pyruvic"
    ],
    "correct": 1,
    "explanation": "Vitamin C là cofactor thiết yếu khử Fe3+ thành Fe2+ cho các enzym prolyl hydroxylase và lysyl hydroxylase, cần thiết để tạo liên kết chéo bền vững của chuỗi xoắn ba Collagen. Thiếu vitamin C làm collagen mạch máu và mô liên kết suy yếu, gây xuất huyết và chậm lành vết thương (bệnh Scorbut).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 239,
    "subject": "duocly2",
    "chapter": "Vitamin",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Quá trình hoạt hóa sinh học của Vitamin D3 (Cholecalciferol) từ ánh nắng mặt trời thành dạng hormon có hoạt tính mạnh nhất Calcitriol (1,25-dihydroxycholecalciferol) cần sự tham gia tuần tự của hai cơ quan nào?",
    "options": [
      "Dạ dày và ruột non",
      "Tuyến giáp và tuyến cận giáp",
      "Phổi và lách",
      "Gan (25-hydroxyl hóa) và Thận (1-alpha-hydroxyl hóa dưới sự điều hòa của PTH)"
    ],
    "correct": 3,
    "explanation": "Cholecalciferol đến Gan được enzym 25-hydroxylase gắn nhóm OH tạo 25-(OH)-D3 (Calcifediol). Sau đó đến Thận, enzym 1-alpha-hydroxylase (được kích hoạt bởi hormon PTH) gắn thêm nhóm OH thứ hai tạo 1,25-(OH)2-D3 (Calcitriol) - đây là dạng có hoạt tính sinh học mạnh nhất điều hòa hấp thu Calci.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 240,
    "subject": "duocly2",
    "chapter": "Vitamin",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tại sao ở bệnh nhân suy thận mạn tính giai đoạn cuối có tổn thương nhu mô thận nặng, việc bổ sung Vitamin D bắt buộc phải sử dụng dạng Calcitriol hoặc Alfacalcidol mà không dùng Cholecalciferol thông thường?",
    "options": [
      "Do nhu mô thận bị xơ hóa không còn đủ enzym 1-alpha-hydroxylase để hoạt hóa Vitamin D thành dạng có hoạt tính",
      "Do Cholecalciferol bị lọc và đào thải hoàn toàn qua màng lọc nhân tạo",
      "Do Cholecalciferol làm tăng tích tụ ure máu",
      "Do thuốc thông thường làm phá hủy các mạch máu thận còn lại"
    ],
    "correct": 0,
    "explanation": "Ở bệnh nhân suy thận nặng, tế bào ống thận bị phá hủy làm mất enzym 1-alpha-hydroxylase, không thể chuyển đổi 25-(OH)-D3 thành dạng hoạt tính 1,25-(OH)2-D3. Bắt buộc phải bổ sung trực tiếp dạng đã được 1-alpha-hydroxyl hóa là Calcitriol hoặc Alfacalcidol để chống loãng xương và hạ calci máu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 241,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Zidovudin (AZT) - thuốc kháng virus retrovirus đầu tiên được sử dụng điều trị HIV thuộc nhóm nào?",
    "options": [
      "Thuốc ức chế enzym Protease (PI)",
      "Thuốc ức chế men sao chép ngược nucleosid (NRTI - Nucleoside Reverse Transcriptase Inhibitors)",
      "Thuốc ức chế hòa màng tế bào (Fusion inhibitors)",
      "Thuốc ức chế enzym Integrase (INSTI)"
    ],
    "correct": 1,
    "explanation": "Zidovudin (AZT) là dẫn chất thymidine thuộc nhóm NRTI. Sau khi được tế bào phosphoryl hóa thành dạng triphosphate, nó cạnh tranh với cơ chất tự nhiên gắn vào chuỗi DNA đang kéo dài của virus do enzym sao chép ngược (Reverse Transcriptase) xúc tác, gây kết thúc sớm chuỗi DNA (chain termination).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 242,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng không mong muốn nghiêm trọng thường gặp của Zidovudin (AZT) đòi hỏi phải theo dõi công thức máu định kỳ là gì?",
    "options": [
      "Tăng tiểu cầu tiên phát gây huyết khối mạch",
      "Suy tủy xương gây thiếu máu hồng cầu to nặng và giảm bạch cầu trung tính",
      "Xơ hóa phổi mô kẽ tiến triển",
      "Viêm khớp gút cấp tính do tăng acid uric"
    ],
    "correct": 3,
    "explanation": "AZT có độc tính chọn lọc kém hơn các NRTI thế hệ mới, ức chế một phần enzym DNA polymerase gamma ở ty thể và tủy xương của người, dẫn tới thiếu máu hồng cầu to nặng và giảm bạch cầu hạt. Bệnh nhân có thể phải truyền máu hoặc đổi thuốc.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 243,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Nhóm thuốc ức chế men sao chép ngược không nucleosid (NNRTI như Efavirenz, Nevirapin) ức chế enzym Reverse Transcriptase của HIV-1 theo cơ chế nào?",
    "options": [
      "Cạnh tranh trực tiếp tại vị trí gắn cơ chất dNTP",
      "Gắn trực tiếp vào vị trí dị lập thể (allosteric site) gần trung tâm xúc tác của enzym Reverse Transcriptase, làm biến đổi cấu hình không gian bất hoạt enzym",
      "Ức chế sự tích hợp DNA provirus vào nhiễm sắc thể người",
      "Thủy phân vỏ capsid của virus trước khi xâm nhập"
    ],
    "correct": 2,
    "explanation": "NNRTI gắn trực tiếp vào một túi kỵ nước (allosteric hydrophobic pocket) nằm gần trung tâm hoạt động của enzym RT của HIV-1. Sự gắn này làm biến đổi cấu trúc ba chiều của enzym, ức chế hoạt tính xúc tác mà không cần trải qua bước phosphoryl hóa nội bào như các NRTI.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 244,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng phụ gây ác mộng kinh hoàng, ảo giác, mất ngủ và trầm cảm nặng thường gặp trong vài tuần đầu điều trị ARV là đặc trưng của thuốc nào?",
    "options": [
      "Efavirenz (thuốc nhóm NNRTI qua hàng rào máu não rất mạnh)",
      "Tenofovir disoproxil fumarate",
      "Lamivudin",
      "Dolutegravir"
    ],
    "correct": 0,
    "explanation": "Efavirenz qua hàng rào máu não rất tốt và có độc tính thần kinh trung ương xảy ra ở > 50% bệnh nhân trong những tuần đầu: chóng mặt, mất ngủ, giấc mơ kỳ quái kinh dị (vivid dreams/nightmares), trầm cảm nặng và rối loạn tâm thần. Thuốc nên uống trước khi ngủ khi bụng đói.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 245,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Biến chứng Xơ phổi mô kẽ tiến triển (Pulmonary fibrosis) và viêm phổi hoại tử phụ thuộc liều tích lũy là độc tính cơ quan đặc thù của thuốc chống ung thư nào do mô phổi thiếu hụt enzym bất hoạt thuốc?",
    "options": [
      "Cisplatin",
      "Bleomycin (do mô phổi và da có nồng độ enzym Bleomycin hydrolase rất thấp)",
      "Vincristin",
      "Fluorouracil"
    ],
    "correct": 2,
    "explanation": "Bleomycin bị bất hoạt bởi enzym Bleomycin hydrolase. Tuy nhiên mô phổi và da hầu như không có enzym này, khiến Bleomycin tích lũy nồng độ cao trong phế nang. Gốc tự do sinh ra phá hủy mao mạch phế nang gây viêm phổi kẽ và xơ phổi lan tỏa không hồi phục (liều tích lũy > 400 đơn vị).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 246,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hai độc tính nghiêm trọng nhất cần theo dõi sát và dự phòng tích cực bằng liệu pháp truyền dịch muối đẳng trương thể tích lớn (2 - 3 lít/ngày) khi sử dụng hóa chất Cisplatin là gì?",
    "options": [
      "Xơ gan ứ mật và loét giác mạc",
      "Độc tính hoại tử ống thận cấp (Nephrotoxicity) và độc tính gây điếc giác quan không hồi phục trên ốc tai (Ototoxicity)",
      "Viêm tủy sống cắt ngang và liệt ruột cơ năng",
      "Hội chứng hoại tử thượng bì nhiễm độc Lyell"
    ],
    "correct": 1,
    "explanation": "Phức hợp bạch kim Cisplatin gắn và tích lũy chọn lọc ở tế bào biểu mô ống lượn gần ở thận và tế bào lông ốc tai ở tai trong. Thuốc gây suy thận cấp hoại tử ống thận (mất Mg2+, K+) và điếc thần kinh giác quan tần số cao. Bắt buộc phải bù dịch NaCl 0.9% thể tích lớn kèm lợi tiểu thẩm thấu để rửa trôi thuốc qua thận.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 247,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Alkaloid thực vật chiết xuất từ cây Dừa cạn (Vinca alkaloids như Vincristin, Vinblastin) tiêu diệt tế bào ung thư ở pha M của chu kỳ tế bào thông qua cơ chế nào?",
    "options": [
      "Ức chế enzym Topoisomerase I tháo xoắn DNA",
      "Kích thích làm bền vững bất thường vi ống ngăn cản sự phân rã thoi vô sắc",
      "Gắn vào tubulin và ức chế sự trùng hợp (polymerization) của các heterodimer alpha/beta-tubulin thành vi ống, làm tê liệt thoi phân bào (thoi vô sắc)",
      "Phá hủy màng nhân tế bào ung thư thông qua hoạt hóa caspase"
    ],
    "correct": 3,
    "explanation": "Vincristin và Vinblastin gắn chọn lọc vào vị trí Vinca trên phân tử tubulin, ức chế sự trùng hợp tạo vi ống (microtubules). Không hình thành được thoi vô sắc (mitotic spindle), tế bào ung thư bị kẹt lại ở kỳ giữa (metaphase) của pha phân bào M và kích hoạt quá trình tự chết tế bào.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 248,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cảnh báo tử vong tuyệt đối (Fatal warning) liên quan đến đường dùng thuốc của Vincristin trong quy chế sử dụng thuốc ung thư là gì?",
    "options": [
      "CẤM TUYỆT ĐỐI tiêm vào khoang dưới nhện tủy sống (tiêm nội tủy) vì gây viêm tủy hoại tử lan tỏa lên não và tử vong 100%; thuốc CHỈ ĐƯỢC DÙNG TIÊM TĨNH MẠCH",
      "Cấm tiêm tĩnh mạch ngoại vi vì gây tắc mạch tức thì",
      "Chỉ được uống thuốc khi bụng thật no",
      "Bắt buộc tiêm dưới da vùng bụng"
    ],
    "correct": 0,
    "explanation": "Nhầm lẫn tiêm Vincristin vào tủy sống (Intrathecal injection) thay vì tiêm tĩnh mạch là thảm họa y khoa: thuốc gây viêm hoại tử thần kinh trung ương tiến triển, phù não và tử vong 100%. Quy chế bắt buộc: nhãn thuốc Vincristin phải ghi dòng chữ cảnh báo đỏ 'CHỈ TIÊM TĨNH MẠCH - TỬ VONG NẾU TIÊM VÀO TỦY SỐNG'.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 249,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Xanh Methylen (Methylene Blue 1%) là thuốc giải độc đặc hiệu đường tĩnh mạch được chỉ định trong trường hợp ngộ độc chất gây Methemoglobin máu (như Dapsone, Nitrit, thuốc nhuộm anilin) nhờ phản ứng sinh hóa nào?",
    "options": [
      "Tăng cường tạo phức chelate không tan với phân tử hemoglobin",
      "Gắn trực tiếp vào oxy trong huyết tương để vận chuyển oxy thay cho hồng cầu",
      "Đóng vai trò là chất nhận electron từ NADPH nhờ enzym NADPH-MetHb Reductase, sau đó chuyển electron khử ion Fe3+ trong Methemoglobin trở lại thành ion Fe2+ trong Hemoglobin bình thường",
      "Kích thích tủy xương sản xuất ngay lập tức lứa hồng cầu mới"
    ],
    "correct": 2,
    "explanation": "Methemoglobin chứa Fe3+ mất khả năng gắn oxy. Xanh Methylen được enzym NADPH-methemoglobin reductase khử thành xanh leucomethylene. Xanh leucomethylene sau đó nhường electron khử Fe3+ trở lại thành Fe2+ trong hemoglobin bình thường, phục hồi khả năng vận chuyển oxy của máu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 250,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Chống chỉ định tuyệt đối của Xanh Methylen (Methylene Blue) khi điều trị ngộ độc Methemoglobin máu là đối tượng bệnh nhân nào do nguy cơ gây tan máu cấp tính ồ ạt?",
    "options": [
      "Bệnh nhân thiếu hụt enzym Glucose-6-Phosphat Dehydrogenase (G6PD)",
      "Bệnh nhân suy thận mạn tính đang chạy thận nhân tạo",
      "Bệnh nhân có tiền sử hen phế quản phế nang",
      "Bệnh nhân tăng huyết áp giai đoạn 1"
    ],
    "correct": 0,
    "explanation": "Xanh Methylen cần NADPH để chuyển thành dạng khử hoạt tính. Ở người thiếu enzym G6PD, tế bào hồng cầu không sản xuất đủ NADPH, khiến Xanh Methylen không phát huy được tác dụng mà ngược lại đóng vai trò là chất oxy hóa trực tiếp gây tan máu nội mạch cấp tính dữ dội.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 251,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bộ kít giải độc Cyanua kinh điển gồm Amyl Nitrit, Natri Nitrit và Natri Thiosulfat giải độc theo cơ chế đa tầng nào?",
    "options": [
      "Ức chế sự hấp thu cyanua qua biểu mô niêm mạc ruột",
      "Nitrit tạo Methemoglobin có ái lực cực cao với ion Cyanide để kéo CN- ra khỏi enzym Cytochrom Oxidase ty thể tạo Cyanmethemoglobin; sau đó Thiosulfat cung cấp lưu huỳnh cho enzym Rhodanese chuyển CN- thành Thiocyanat không độc bài tiết qua thận",
      "Làm đông vón phân tử cyanua trong lòng mạch máu",
      "Kiềm hóa máu bằng cách trung hòa acid hydrocyanic"
    ],
    "correct": 1,
    "explanation": "Cyanua gắn chặt vào ion Fe3+ của cytochrom oxidase làm ngạt tế bào. Hít Amyl nitrit / tiêm Natri nitrit sẽ oxy hóa một phần Hb thành MetHb (chứa Fe3+ ái lực cao) để hút CN- ra khỏi ty thể giải phóng enzym hô hấp. Sau đó tiêm Natri thiosulfat cung cấp gốc lưu huỳnh cho enzym Rhodanese ở gan biến CN- thành Thiocyanat vô hại thải qua nước tiểu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 252,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hydroxocobalamin (Vitamin B12a) là thuốc giải độc Cyanua hiện đại được ưu tiên hàng đầu hiện nay nhờ cơ chế phản ứng tạo phức chất an toàn nào?",
    "options": [
      "Thủy phân chuỗi liên kết carbon - nitơ của cyanua",
      "Gắn ion calci để tạo muối calci cyanua kết tủa",
      "Phân hủy cyanua thành khí amoniac bài tiết qua phổi",
      "Gắn kết trực tiếp phân tử Cyanide với ion Cobalt trong cấu trúc của Hydroxocobalamin để tạo thành Cyanocobalamin (Vitamin B12) hoàn toàn không độc và bài tiết qua thận"
    ],
    "correct": 3,
    "explanation": "Mỗi phân tử Hydroxocobalamin chứa một nguyên tử Coban (Co3+) có ái lực liên kết với gốc Cyanide cao hơn nhiều so với cytochrom oxidase. Thuốc giằng CN- ra tạo thành Cyanocobalamin (chính là Vitamin B12 sinh lý), đào thải an toàn qua nước tiểu, không gây biến chứng tạo MetHb nguy hiểm như nhóm Nitrit.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 253,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Khi đo nồng độ Digoxin trong huyết thanh để theo dõi điều trị (TDM), mẫu máu phải được lấy ở thời điểm nào để kết quả phản ánh chính xác trạng thái cân bằng giữa máu và mô cơ tim?",
    "options": [
      "Ngay sau khi uống thuốc 30 phút để bắt được nồng độ đỉnh hấp thu",
      "Sau khi uống thuốc ít nhất 6 đến 8 giờ (hoặc ngay trước liều kế tiếp)",
      "Tại thời điểm 2 giờ sau ăn no để tránh nhiễu do lipid máu",
      "Vào lúc 12 giờ đêm khi nồng độ cortisol sinh lý giảm xuống mức thấp nhất"
    ],
    "correct": 2,
    "explanation": "Digoxin có pha phân bố mô rất chậm (kéo dài 6-8 giờ sau khi uống). Lấy máu sớm hơn 6 giờ sẽ cho nồng độ giả tạo rất cao trong máu trong khi thuốc chưa đạt trạng thái cân bằng phân bố ở mô cơ tim.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 254,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Một bệnh nhân dùng quá liều Digoxin có biểu hiện nhịp tim chậm nghiêm trọng dưới 40 chu kỳ/phút kèm block nhĩ thất độ 2. Thuốc tiêm tĩnh mạch đầu tay để nâng nhịp tim và cải thiện dẫn truyền là gì?",
    "options": [
      "Atropin sulfat tiêm tĩnh mạch để ức chế trương lực phế vị quá mức",
      "Propranolol tiêm tĩnh mạch để chẹn phản xạ giao cảm ngược",
      "Amiodaron truyền tĩnh mạch để đồng bộ hóa nhịp cơ tim",
      "Verapamil tiêm tĩnh mạch chậm để giãn tiểu động mạch vành"
    ],
    "correct": 0,
    "explanation": "Atropin đối kháng tác dụng kích thích đối giao cảm (dây X) của Digitalis trên nút xoang và nút nhĩ thất, giúp nâng nhịp tim và phục hồi dẫn truyền nhĩ thất trong trường hợp nhịp chậm xoang hoặc block nhĩ thất do quá liều.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 255,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hoạt chất nào sau đây là thuốc trợ tim nhóm Glycosid tim có nguồn gốc chiết xuất từ hạt cây Strophanthus gratus, có đặc tính tan rất mạnh trong nước và chỉ dùng đường tiêm tĩnh mạch?",
    "options": [
      "Digitoxin dạng viên nén giải phóng kéo dài",
      "Acetyldigoxin dạng dung dịch nhỏ giọt đường uống",
      "Ouabain (g-Strophanthin) có tác dụng cực nhanh và bài tiết nguyên vẹn qua thận",
      "Lanatosid C dạng viên bao tan trong ruột"
    ],
    "correct": 3,
    "explanation": "Ouabain (g-Strophanthin) chiết xuất từ hạt cây Strophanthus gratus, có cấu trúc rất nhiều nhóm -OH phân cực nên tan mạnh trong nước, không hấp thu qua ruột nên chỉ dùng đường tiêm tĩnh mạch cấp cứu, tác dụng xuất hiện sau 5-10 phút.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 256,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cơ chế tác dụng phân tử của Levosimendan - một thuốc tăng nhạy cảm calci (calcium sensitizer) thế hệ mới dùng trong suy tim cấp là gì?",
    "options": [
      "Tăng giải phóng calci từ lưới nội bào thông qua thụ thể IP3",
      "Gắn chọn lọc vào Troponin C phụ thuộc nồng độ calci, làm tăng lực co bóp mà không làm tăng calci nội bào",
      "Ức chế không thuận nghịch bơm Na+/Ca2+ tại màng bào tương sợi cơ tim",
      "Hoạt hóa trực tiếp kênh calci typ L ở màng tế bào làm dòng calci đi vào ồ ạt"
    ],
    "correct": 2,
    "explanation": "Levosimendan gắn vào tiểu phần Troponin C của sợi cơ tim khi có mặt Ca2+, làm tăng độ nhạy cảm của sợi co cơ với Ca2+ sẵn có mà không làm tăng nồng độ Ca2+ nội bào tự do, do đó không làm tăng tiêu thụ oxy và ít nguy cơ gây loạn nhịp hơn các thuốc tăng co cơ truyền thống.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 257,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tương tác giữa Digoxin và kháng sinh Macrolid (như Clarithromycin, Erythromycin) dẫn đến tăng nồng độ Digoxin trong huyết tương qua cơ chế nào?",
    "options": [
      "Diệt vi khuẩn Eubacterium lentum ở ruột làm giảm thoái biến Digoxin và ức chế P-glycoprotein",
      "Tăng liên kết của Digoxin với albumin huyết tương làm tăng nồng độ thuốc tự do",
      "Kích thích enzym hấp thu thuốc tại diềm bàn chải biểu mô ruột non",
      "Cạnh tranh đào thải tại ống lượn xa làm giảm bài tiết Digoxin vào nước tiểu"
    ],
    "correct": 1,
    "explanation": "Khoảng 10% dân số có vi khuẩn đường ruột Eubacterium lentum chuyển hóa bất hoạt Digoxin thành dihydrodigoxin. Kháng sinh Macrolid diệt vi khuẩn này làm tăng sinh khả dụng của Digoxin, đồng thời ức chế bơm P-glycoprotein ở thận làm giảm thanh thải Digoxin.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 258,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tại sao suy tuyến giáp (nhược giáp) lại là yếu tố làm tăng độc tính của Digoxin trên bệnh nhân tim mạch?",
    "options": [
      "Làm giảm tốc độ lọc cầu thận và giảm thể tích phân bố của thuốc dẫn đến nồng độ thuốc trong máu tăng cao",
      "Làm tăng sinh đột biến số lượng thụ thể Na+/K+-ATPase trên màng tế bào cơ tim",
      "Làm tăng hấp thu Digoxin qua đường tiêu hóa lên mức gần 100%",
      "Kích thích tuyến thượng thận tăng tiết aldosteron làm hạ kali máu nghiêm trọng"
    ],
    "correct": 0,
    "explanation": "Suy giáp làm giảm chuyển hóa cơ bản, giảm lưu lượng máu thận, giảm tốc độ lọc cầu thận và giảm thể tích phân bố, khiến nồng độ Digoxin trong máu tăng cao dễ gây ngộ độc. Ngược lại, cường giáp làm tăng thanh thải và giảm nhạy cảm với Digoxin.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
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
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hiện tượng 'Cướp máu mạch vành' (Coronary Steal Syndrome) xảy ra khi sử dụng thuốc giãn mạch vành nào sau đây?",
    "options": [
      "Thuốc chẹn thụ thể beta-1 chọn lọc như Bisoprolol",
      "Thuốc ức chế men chuyển như Enalaprilat",
      "Thuốc giãn tiểu động mạch vành mạnh như Dipyridamol hoặc DHP tác dụng ngắn",
      "Thuốc chuyển hóa năng lượng cơ tim như Trimetazidine"
    ],
    "correct": 2,
    "explanation": "Dipyridamol hoặc DHP tác dụng nhanh làm giãn mạnh các tiểu động mạch vành ở vùng cơ tim lành, trong khi mạch máu vùng cơ tim thiếu máu đã giãn tối đa. Máu sẽ bị hút về vùng lành, làm vùng cơ tim thiếu máu càng bị thiếu máu trầm trọng hơn (hội chứng cướp máu).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 266,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tại sao việc phối hợp giữa một thuốc Chẹn Beta giao cảm và một thuốc Nitrat hữu cơ lại được xem là phác đồ kinh điển lý tưởng trong điều trị đau thắt ngực ổn định gắng sức?",
    "options": [
      "Nitrat làm tăng nhịp tim phản xạ sẽ triệt tiêu tác dụng phụ co thắt phế quản của Chẹn Beta",
      "Chẹn Beta triệt tiêu phản xạ nhịp tim nhanh do Nitrat gây ra; còn Nitrat triệt tiêu hiện tượng tăng thể tích thất trái do Chẹn Beta gây ra",
      "Chẹn Beta giúp gan tăng cường chuyển hóa Nitrat thành NO nhanh hơn gấp 5 lần",
      "Cả hai thuốc cùng ức chế trực tiếp enzym COX-1 trên tiểu cầu ngăn ngừa huyết khối"
    ],
    "correct": 1,
    "explanation": "Sự phối hợp hoàn hảo: Nitrat gây hạ áp kéo theo phản xạ giao cảm làm tim nhanh và tăng co bóp $\\rightarrow$ Chẹn Beta sẽ triệt tiêu phản xạ này. Ngược lại, Chẹn Beta làm tim đập chậm kéo dài tâm trương làm tăng thể tích thất trái $\\rightarrow$ Nitrat làm giãn tĩnh mạch giảm hồi lưu sẽ triệt tiêu tác dụng phụ này.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 267,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Dạng ngộ độc huyết học nguy hiểm có thể xảy ra khi truyền tĩnh mạch Nitroglycerin hoặc Natri nitroprussid liều cao kéo dài là gì?",
    "options": [
      "Nhiễm Methemoglobin máu (MetHb) làm mất khả năng vận chuyển oxy của hồng cầu",
      "Hội chứng giảm bạch cầu hạt trung tính cấp tính đe dọa nhiễm trùng cơ hội",
      "Thiếu máu tan máu tự miễn với nghiệm pháp Coombs trực tiếp dương tính",
      "Bệnh đa hồng cầu thứ phát do tăng sản xuất erythropoietin bù trừ"
    ],
    "correct": 0,
    "explanation": "Các gốc nitrit được tạo thành từ chuyển hóa nitrat có tính oxy hóa mạnh, oxy hóa ion Fe2+ trong hemoglobin thành Fe3+ tạo Methemoglobin. Khi nồng độ MetHb > 10-20%, máu có màu nâu sô-cô-la và giảm khả năng vận chuyển oxy mô.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 268,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thử nghiệm lâm sàng nổi tiếng CAST (Cardiac Arrhythmia Suppression Trial) đã đưa ra kết luận cảnh báo sinh tử nào về việc sử dụng thuốc chống loạn nhịp Nhóm IC (Flecainid, Encainid)?",
    "options": [
      "Thuốc làm tăng nguy cơ ung thư bàng quang tiến triển sau 6 tháng điều trị",
      "Dùng thuốc trên bệnh nhân có tiền sử nhồi máu cơ tim hoặc bệnh tim thực thể làm tăng gấp đôi tỷ lệ tử vong do khởi phát loạn nhịp ác tính",
      "Thuốc gây tiêu cơ vân cấp tính khi phối hợp với thuốc hạ áp nhóm ACEI",
      "Thuốc gây hội chứng thiếu máu tan máu tự miễn với nghiệm pháp Coombs dương tính"
    ],
    "correct": 1,
    "explanation": "Thử nghiệm CAST chứng minh: mặc dù Flecainid và Encainid triệt tiêu rất tốt các ngoại tâm thu thất trên Holter ECG, nhưng trên bệnh nhân sau nhồi máu cơ tim có tổn thương thực thể cơ tim, thuốc lại làm tăng gấp 2.5 lần tỷ lệ tử vong do khởi phát các cơn loạn nhịp thất ác tính (hiệu ứng proarrhythmia).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 269,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Biện pháp cấp cứu bằng thuốc được lựa chọn hàng đầu để cắt cơn nhịp nhanh thất Xoắn đỉnh (Torsades de Pointes) đang đe dọa biến thành rung thất là gì?",
    "options": [
      "Tiêm tĩnh mạch dung dịch Calci clorid 10%",
      "Truyền tĩnh mạch dung dịch Natri bicarbonat 8.4%",
      "Tiêm tĩnh mạch Magnesi sulfat (MgSO4 1-2g trong 5-10 phút)",
      "Tiêm tĩnh mạch chậm Digoxin 0.5 mg"
    ],
    "correct": 3,
    "explanation": "Magnesi sulfat (MgSO4) tiêm tĩnh mạch là thuốc lựa chọn đầu tay để điều trị và cắt cơn xoắn đỉnh (kể cả khi nồng độ Mg2+ máu bình thường), nhờ cơ chế chẹn dòng calci đi vào màng tế bào làm triệt tiêu các điện thế hậu khử cực sớm (EADs).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 270,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Nhóm thuốc chống loạn nhịp nào trong phân loại Vaughan Williams được chứng minh có khả năng làm giảm tỷ lệ đột tử và giảm tỷ lệ tử vong chung tốt nhất sau nhồi máu cơ tim?",
    "options": [
      "Nhóm II (Các thuốc chẹn thụ thể beta-adrenergic giao cảm)",
      "Nhóm IA (Quinidin, Disopyramid)",
      "Nhóm IC (Flecainid, Propafenon)",
      "Nhóm IV (Verapamil, Diltiazem)"
    ],
    "correct": 0,
    "explanation": "Các thuốc chẹn beta-adrenergic (Nhóm II) là nhóm thuốc chống loạn nhịp duy nhất được chứng minh nhất quán trong các thử nghiệm lâm sàng lớn là làm giảm tỷ lệ đột tử do tim và cải thiện tỷ lệ sống còn sau nhồi máu cơ tim.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 271,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Indapamid là một thuốc lợi tiểu thuộc nhóm giống Thiazid (Thiazide-like) có ưu thế huyết động học đặc biệt nào trong điều trị tăng huyết áp nguyên phát?",
    "options": [
      "Tác dụng chủ yếu trên cơ tim làm giảm nhịp tim và giảm co bóp",
      "Ức chế chọn lọc thụ thể beta-2 adrenergic tại cơ trơn mạch máu",
      "Không ảnh hưởng đến bài xuất ion Natri ở ống lượn xa",
      "Có tác dụng kép: vừa lợi niệu thải muối nhẹ, vừa chẹn dòng calci tại thành mạch gây giãn tiểu động mạch trực tiếp"
    ],
    "correct": 3,
    "explanation": "Indapamid là dẫn chất indol-sulfonamid. Ngoài tác dụng lợi niệu nhẹ tại ống lượn xa, thuốc còn có đặc tính chẹn dòng calci qua màng tế bào cơ trơn mạch máu, làm giảm sức cản ngoại vi và hạ huyết áp hiệu quả mà ít gây rối loạn chuyển hóa lipid và glucose.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 272,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Chỉ định lâm sàng độc đáo của thuốc lợi tiểu Acetazolamid trong y học thể thao và du lịch thám hiểm là trường hợp nào?",
    "options": [
      "Tăng cường sức bền cơ bắp cho vận động viên cử tạ",
      "Phòng ngừa và điều trị chứng Say độ cao cấp tính (Acute Mountain Sickness - AMS)",
      "Dự phòng cơn say sóng và say tàu xe trên biển",
      "Điều trị co cứng cơ do chuột rút khi chạy marathon"
    ],
    "correct": 2,
    "explanation": "Khi lên vùng cao thiếu oxy, cơ thể thở nhanh bù trừ gây nhiễm kiềm hô hấp, làm ức chế trung khu hô hấp ở hành não. Acetazolamid làm tăng bài tiết HCO3- qua nước tiểu gây nhiễm toan chuyển hóa nhẹ, kích thích trung khu hô hấp thông khí sâu hơn, phòng ngừa chứng say độ cao cấp.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 273,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Sử dụng thuốc ức chế bơm proton (PPI) liều cao kéo dài trên 1 năm làm tăng nguy cơ gãy xương (đặc biệt là gãy cổ xương đùi ở người cao tuổi) do cơ chế nào?",
    "options": [
      "Làm tăng đào thải calci qua thận do ức chế kênh tái hấp thu",
      "Giảm độ acid dịch vị kéo dài cản trở quá trình ion hóa và hòa tan Calci không tan trong thức ăn, làm giảm hấp thu Calci",
      "Ức chế trực tiếp hoạt động của tế bào tạo cốt bào tại màng xương",
      "Kích thích tuyến cận giáp tăng tiết hormon PTH làm tiêu xương liên tục"
    ],
    "correct": 1,
    "explanation": "Acid dịch vị dạ dày cần thiết để ion hóa muối calci không tan (như calci carbonat) thành Ca2+ tự do để hấp thu ở ruột. PPI làm tăng pH dạ dày kéo dài dẫn tới giảm hấp thu calci, gây cường cận giáp thứ phát và loãng xương, tăng nguy cơ gãy xương.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 274,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Vonoprazan là một hoạt chất mới thuộc nhóm P-CAB (Potassium-Competitive Acid Blocker) có ưu thế vượt trội so với PPI truyền thống ở đặc điểm nào sau đây?",
    "options": [
      "Chỉ tác dụng trên thụ thể gastrin mà không tác động lên bơm H+/K+-ATPase",
      "Không hấp thu vào máu mà chỉ tác dụng tráng bảo vệ cơ học tại niêm mạc",
      "Là base yếu cần môi trường acid đậm đặc để hoạt hóa thành dạng sulfenamid",
      "Ức chế cạnh tranh thuận nghịch với ion K+ tại bơm H+/K+-ATPase, không cần môi trường acid để hoạt hóa và khởi phát tác dụng cực nhanh"
    ],
    "correct": 3,
    "explanation": "Vonoprazan (P-CAB) gắn cạnh tranh với ion K+ ở mặt ngoài của bơm H+/K+-ATPase mà không cần proton hóa trong môi trường acid. Thuốc có thời gian bán thải dài, ức chế acid nhanh, mạnh và ổn định hơn nhiều so với PPI.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 275,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cơ chế phân tử làm tiêu chất nhầy (Mucolytic) của N-Acetylcystein (NAC) trong các bệnh lý phế quản có đờm đặc quánh là gì?",
    "options": [
      "Kích thích tế bào đài tăng tiết nước làm loãng dịch nhầy",
      "Nhóm sulfhydryl (-SH) tự do khử và bẻ gãy các cầu nối disulfid (-S-S-) của chuỗi mucoprotein trong đờm",
      "Ức chế enzym elastase của bạch cầu đa nhân trung tính",
      "Phân hủy hoàn toàn các phân tử DNA do vi khuẩn giải phóng ra"
    ],
    "correct": 1,
    "explanation": "N-Acetylcystein (NAC) mang nhóm sulfhydryl (-SH) tự do có tính khử, bẻ gãy các cầu nối disulfid (-S-S-) liên kết các sợi mucopolysaccharid của đờm, làm giảm độ quánh nhớt của chất nhầy và dễ tống đờm ra ngoài qua phản xạ ho.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 276,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tại sao thuốc giảm ho trung ương có nguồn gốc opioid (như Codein, Dextromethorphan) bị chống chỉ định tuyệt đối trong cơn hen phế quản cấp tính?",
    "options": [
      "Làm phá hủy lớp surfactant lót lòng phế nang",
      "Làm tăng đào thải natri qua nước tiểu gây tụt huyết áp",
      "Ức chế phản xạ ho tự nhiên dẫn đến ứ đọng dịch tiết gây bít tắc đường thở, đồng thời Codein kích thích giải phóng histamin làm co thắt phế quản nặng hơn",
      "Kích hoạt enzym phosphodiesterase làm giảm AMP vòng"
    ],
    "correct": 3,
    "explanation": "Trong cơn hen cấp, phản xạ ho giúp tống đờm dãi bít tắc lòng phế quản. Dùng thuốc giảm ho ức chế trung khu ho sẽ làm đờm ứ nghẽn bít hoàn toàn các tiểu phế quản gây suy hô hấp ngạt thở; ngoài ra Codein còn gây phóng thích histamin làm co thắt phế quản tăng thêm.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 277,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Chất chuyển hóa có hoạt tính của Loratadin được tinh chế thành thuốc kháng H1 thế hệ 2 có hiệu lực kháng dị ứng mạnh và thời gian bán thải dài là hoạt chất nào?",
    "options": [
      "Desloratadin",
      "Levocetirizin",
      "Rupatadin",
      "Bilastin"
    ],
    "correct": 0,
    "explanation": "Desloratadin là chất chuyển hóa có hoạt tính chính của Loratadin sau khi qua gan khử ethoxycarbonyl. Desloratadin có ái lực với thụ thể H1 mạnh gấp 3-4 lần Loratadin và thời gian bán thải kéo dài khoảng 27 giờ.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 278,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc kháng H1 dạng xịt mũi hoặc nhỏ mắt tại chỗ nào sau đây có tác dụng kép: vừa ức chế thụ thể H1 vừa có tác dụng ổn định màng tế bào dưỡng bào (Mast cell stabilizer)?",
    "options": [
      "Diphenhydramin",
      "Clorpheniramin",
      "Azelastin (hoặc Olopatadin / Ketotifen)",
      "Promethazin"
    ],
    "correct": 2,
    "explanation": "Azelastin, Olopatadin và Ketotifen là các thuốc kháng H1 thế hệ 2 tác dụng tại chỗ (nhỏ mắt hoặc xịt mũi) có cơ chế kép: vừa đối kháng cạnh tranh thụ thể H1, vừa làm bền vững màng dưỡng bào ngăn phóng thích histamin và leukotriene.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 279,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tại sao khi điều trị bệnh Nang sán chó (Hydatid cyst do Echinococcus granulosus) bằng Albendazol kéo dài nhiều tháng, bệnh nhân bắt buộc phải làm xét nghiệm công thức máu và men gan định kỳ mỗi 2 tuần?",
    "options": [
      "Thuốc làm tăng bài tiết acid uric gây suy thận",
      "Thuốc làm tăng vọt calci máu gây vôi hóa nang sán",
      "Thuốc có nguy cơ gây độc tế bào gan (tăng men gan AST/ALT) và ức chế tủy xương gây giảm bạch cầu hạt đe dọa tính mạng",
      "Thuốc làm tan máu mạn tính gây thiếu máu hồng cầu nhỏ"
    ],
    "correct": 3,
    "explanation": "Dùng Albendazol liều cao kéo dài trong điều trị sán mô gây độc tính tích lũy: làm tăng men gan có thể dẫn đến viêm gan (khoảng 15% bệnh nhân) và ức chế tủy xương gây giảm bạch cầu trung tính hoặc suy tủy toàn bộ. Cần xét nghiệm ALT, AST và công thức máu mỗi 2 tuần trong 3 tháng đầu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 280,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Levamisol trước đây được sử dụng làm thuốc tẩy giun đũa nhưng hiện nay bị hạn chế sử dụng do tác dụng phụ đặc ứng nguy hiểm nào trên hệ tạo máu?",
    "options": [
      "Gây suy tủy giảm 3 dòng tế bào máu và mất bạch cầu hạt qua trung gian kháng thể tự miễn",
      "Gây tăng tiểu cầu tiên phát dẫn tới tắc mạch",
      "Gây hội chứng đa hồng cầu thứ phát",
      "Làm biến đổi hình dạng hồng cầu thành hình liềm"
    ],
    "correct": 2,
    "explanation": "Levamisol kích thích miễn dịch bất thường sinh tự kháng thể gây mất bạch cầu hạt (Agranulocytosis) và viêm mạch máu hoại tử da (đặc biệt ở dái tai và chi), do đó đã bị loại bỏ khỏi danh mục thuốc tẩy giun thông thường ở hầu hết các nước.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 281,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Ngoài tác dụng làm giảm nồng độ LDL-Cholesterol, các thuốc Statin còn mang lại lợi ích tim mạch to lớn nhờ 'Tác dụng đa hiệu' (Pleiotropic effects) nào sau đây?",
    "options": [
      "Ức chế trực tiếp dẫn truyền qua nút nhĩ thất làm ổn định nhịp tim",
      "Cải thiện chức năng nội mô mạch máu, chống viêm, ổn định mảng xơ vữa không bị nứt vỡ và ức chế kết tập tiểu cầu",
      "Tăng bài tiết natri qua thận giúp giảm huyết áp tâm thu ngay lập tức",
      "Kích thích tủy xương tăng sản xuất hồng cầu bù đắp thiếu máu cơ tim"
    ],
    "correct": 1,
    "explanation": "Tác dụng đa hiệu (Pleiotropic effects) của Statin xuất phát từ việc ức chế tổng hợp các isoprenoid (farnesyl pyrophosphate, geranylgeranyl pyrophosphate), giúp tăng biểu hiện eNOS, giảm cytokin viêm (giảm hs-CRP), làm dày vỏ xơ ổn định mảng vữa ngừa nhồi máu cơ tim.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 282,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân nam 54 tuổi đang dùng Simvastatin 40 mg/ngày xuất hiện triệu chứng đau mỏi cơ bắp toàn thân và nước tiểu có màu sẫm như nước ngọt coca. Bác sĩ cần chỉ định xét nghiệm sinh hóa máu cấp cứu nào ngay lập tức?",
    "options": [
      "Định lượng nồng độ Amylase và Lipase huyết thanh",
      "Định lượng Bilirubin toàn phần và trực tiếp",
      "Định lượng men Creatine Kinase (CK) toàn phần và kiểm tra chức năng thận (Creatinin máu)",
      "Định lượng Calci ion hóa và Phosphat máu"
    ],
    "correct": 3,
    "explanation": "Đau cơ kèm nước tiểu sẫm màu là dấu hiệu kinh điển của tiêu cơ vân cấp (Rhabdomyolysis) do độc tính statin. Bắt buộc phải ngừng Statin ngay lập tức và xét nghiệm Creatine Kinase (CK) cùng Creatinin để đánh giá mức độ hủy cơ và tổn thương thận cấp do myoglobin.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 283,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cơ chế tác dụng phối hợp hiệp đồng của viên phối hợp Fansidar (Sulfadoxin + Pyrimethamin) dựa trên nguyên tắc ức chế chuỗi phản ứng sinh học nào của ký sinh trùng?",
    "options": [
      "Ức chế chuỗi vận chuyển điện tử tại ty thể",
      "Ức chế tuần tự hai chặng kế tiếp nhau trong con đường sinh tổng hợp Acid Tetrahydrofolic của ký sinh trùng (Sulfadoxin ức chế Dihydropteroat Synthase; Pyrimethamin ức chế Dihydrofolat Reductase)",
      "Ức chế sự trùng hợp màng vi ống tubulin",
      "Chẹn thụ thể nhập bào cholesterol của hồng cầu"
    ],
    "correct": 1,
    "explanation": "Sulfadoxin ức chế enzym dihydropteroate synthase (cạnh tranh PABA), còn Pyrimethamin ức chế enzym dihydrofolate reductase (DHFR). Ức chế kép tuần tự hai enzym liên tiếp làm ngừng trệ hoàn toàn sự tổng hợp acid tetrahydrofolic cần cho sao chép DNA ký sinh trùng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 284,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Sốt tiểu đen (Blackwater fever) là một biến chứng nguy hiểm của bệnh sốt rét ác tính (hoặc do dùng Quinin) đặc trưng bởi các triệu chứng nào?",
    "options": [
      "Sốt cao kịch phát, tan máu nội mạch ồ ạt, vàng da đậm, nước tiểu màu đen như nước vối (do chứa hemoglobin tự do) và suy thận cấp vô niệu",
      "Phân có màu đen nhánh kèm theo hạ thân nhiệt",
      "Da đổi thành màu đen sạm do lắng đọng melanin",
      "Xuất huyết tiêu hóa dưới ồ ạt kèm chảy máu mũi"
    ],
    "correct": 3,
    "explanation": "Sốt tiểu đen (Blackwater fever) là biến chứng tan máu nội mạch cấp tính dữ dội ở người nhiễm P. falciparum điều trị bằng Quinin. Hồng cầu vỡ hàng loạt giải phóng lượng lớn hemoglobin vào huyết tương, vượt quá ngưỡng gắn haptoglobin, bài tiết qua nước tiểu gây nước tiểu màu đen/nâu sẫm và tắc ống thận suy thận cấp.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 285,
    "subject": "duocly2",
    "chapter": "KTGHP",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hội chứng Serotonin (Serotonin Syndrome) đe dọa tính mạng với kích động, run giật cơ (clonus), tăng thân nhiệt ác tính, vã mồ hôi và co giật xảy ra khi phối hợp đồng thời các thuốc nào sau đây?",
    "options": [
      "Thuốc chẹn beta giao cảm phối hợp với thuốc lợi tiểu quai",
      "Thuốc chống trầm cảm ức chế tái hấp thu chọn lọc Serotonin (SSRI như Fluoxetin) phối hợp với thuốc ức chế enzym MAO (MAOI), Tramadol hoặc Linezolid",
      "Thuốc ức chế men chuyển phối hợp với thuốc hạ lipid máu Statin",
      "Thuốc kháng histamin H1 thế hệ 2 phối hợp với Paracetamol"
    ],
    "correct": 1,
    "explanation": "Phối hợp hai hay nhiều thuốc cùng làm tăng nồng độ Serotonin ở synap thần kinh trung ương (SSRI ngăn thu hồi + MAOI ngăn giáng hóa, hoặc kèm Tramadol, Linezolid) sẽ kích hoạt quá mức thụ thể 5-HT2A. Điều này dẫn tới hội chứng Serotonin: kích động thần kinh, rung giật nhãn cầu, co giật cơ, sốt cao ác tính và tử vong.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 286,
    "subject": "duocly2",
    "chapter": "KTGHP",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cơ chế tương tác làm tăng độc tính của Digoxin khi phối hợp với thuốc chống loạn nhịp Verapamil, Amiodaron hoặc kháng sinh Clarithromycin liên quan đến đích vận chuyển nào tại ống thận?",
    "options": [
      "Ức chế thụ thể vận chuyển anion hữu cơ OAT1",
      "Kích thích thụ thể vận chuyển cation hữu cơ OCT2",
      "Ức chế enzym vận chuyển glucose SGLT-2",
      "Ức chế bơm tống thuốc P-glycoprotein (P-gp / MDR1) tại màng đỉnh tế bào biểu mô ống lượn gần, làm giảm bài xuất Digoxin vào nước tiểu"
    ],
    "correct": 3,
    "explanation": "Digoxin được bài xuất chủ yếu qua ống thận nhờ bơm tống thuốc P-glycoprotein (P-gp). Verapamil, Amiodaron, Quinidin và Clarithromycin là các chất ức chế mạnh P-gp, làm giảm bài tiết Digoxin qua thận và tăng hấp thu Digoxin từ ruột, khiến nồng độ Digoxin trong huyết tương tăng vọt gấp 2-3 lần.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 287,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng phụ ngộ độc nước (Water intoxication) kèm theo hạ Natri máu co giật có thể xảy ra khi truyền tĩnh mạch Oxytocin liều cao kéo dài là do cơ chế nào?",
    "options": [
      "Oxytocin có độ tương đồng cấu trúc acid amin với Vasopressin (ADH), ở liều cao sẽ kích hoạt thụ thể V2 tại ống góp gây giữ nước tự do ồ ạt",
      "Oxytocin phá hủy màng biểu mô ống lượn gần gây rò rỉ nước",
      "Oxytocin ức chế bài tiết aldosteron từ vỏ thượng thận",
      "Oxytocin kích thích trung tâm khát ở vùng dưới đồi gây uống nước vô độ"
    ],
    "correct": 0,
    "explanation": "Oxytocin và Vasopressin (ADH) đều là các nonapeptid có cấu trúc tương tự nhau (chỉ khác 2 acid amin). Ở liều cao truyền kéo dài, Oxytocin gắn kích hoạt thụ thể V2 ở tế bào chính ống góp thận, gây giữ nước tự do dẫn đến hạ Natri máu pha loãng và ngộ độc nước.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 288,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Mifepriston (RU-486) được sử dụng trong phá thai nội khoa giai đoạn sớm (phối hợp với Misoprostol) hoạt động theo cơ chế dược lý nào?",
    "options": [
      "Đối kháng cạnh tranh đặc hiệu tại thụ thể Progesteron, làm thoái hóa niêm mạc tử cung và bong túi thai",
      "Chủ vận mạnh thụ thể Estrogen làm teo màng rụng tử cung",
      "Ức chế enzym tổng hợp Prostaglandin tại bánh rau",
      "Tiêu hủy tế bào hoàng thể buồng trứng qua cơ chế miễn dịch"
    ],
    "correct": 1,
    "explanation": "Mifepriston là chất đối kháng cạnh tranh tại thụ thể Progesteron. Thiếu hụt tác dụng của progesteron làm niêm mạc tử cung màng rụng bị hoại tử bong tróc, túi thai rời khỏi thành tử cung và làm tăng độ nhạy cảm của cơ tử cung với prostaglandin (Misoprostol dùng tiếp theo để tống thai).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 289,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc ức chế DPP-4 nào sau đây được đào thải chủ yếu qua đường mật và phân (chỉ khoảng 5% thải trừ qua thận), do đó là lựa chọn an toàn duy nhất không cần hiệu chỉnh liều ở bất kỳ mức độ suy thận nào?",
    "options": [
      "Sitagliptin",
      "Vildagliptin",
      "Saxagliptin",
      "Linagliptin"
    ],
    "correct": 2,
    "explanation": "Linagliptin đào thải chủ yếu qua hệ gan - mật và phân dưới dạng nguyên vẹn (khoảng 90%), chỉ 5% thải qua thận. Vì vậy, Linagliptin là thuốc duy nhất trong nhóm DPP-4 có thể dùng liều cố định 5 mg/ngày cho mọi giai đoạn suy thận (kể cả bệnh thận mạn giai đoạn cuối chạy thận nhân tạo).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 290,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Nhóm thuốc Thiazolidinedion (TZD như Pioglitazone) tăng nhạy cảm insulin ở tế bào cơ và mỡ thông qua việc gắn và kích hoạt thụ thể nhân nào?",
    "options": [
      "Thụ thể nhân PPAR-gamma (Peroxisome Proliferator-Activated Receptor Gamma)",
      "Thụ thể nhân FXR điều hòa acid mật",
      "Thụ thể nhân LXR điều hòa cholesterol",
      "Thụ thể nhân RXR liên kết acid retinoic"
    ],
    "correct": 1,
    "explanation": "Pioglitazone là chất chủ vận chọn lọc trên thụ thể nhân PPAR-gamma (có nhiều ở mô mỡ, cơ vân, gan). Hoạt hóa PPAR-gamma kích thích phiên mã các gen điều hòa chuyển hóa glucid và lipid, tăng tổng hợp chất vận chuyển GLUT-4 và adiponectin, làm tăng nhạy cảm insulin ngoại vi.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 291,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Andexanet alfa là một phân tử mồi nhử tái tổ hợp biến đổi gen (Recombinant modified decoy protein) được dùng làm thuốc giải độc đặc hiệu cho nhóm thuốc chống đông nào?",
    "options": [
      "Các thuốc ức chế trực tiếp Thrombin như Argatroban và Bivalirudin",
      "Các thuốc chống đông ức chế Yếu tố Xa (Rivaroxaban, Apixaban, Edoxaban và Enoxaparin)",
      "Thuốc chống đông kháng vitamin K Warfarin",
      "Thuốc chống kết tập tiểu cầu Clopidogrel"
    ],
    "correct": 2,
    "explanation": "Andexanet alfa là protein yếu tố Xa người tái tổ hợp bị đột biến (mất hoạt tính xúc tác đông máu), đóng vai trò như một phân tử 'mồi nhử' gắn chặt và giam giữ các thuốc ức chế Xa (Rivaroxaban, Apixaban), giải phóng yếu tố Xa nội sinh của cơ thể để phục hồi đông máu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 292,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc chống kết tập tiểu cầu Clopidogrel ức chế sự kết tập tiểu cầu thông qua cơ chế thụ thể nào sau đây?",
    "options": [
      "Ức chế không hồi phục thụ thể ADP phân nhóm P2Y12 trên bề mặt màng tiểu cầu",
      "Đối kháng cạnh tranh tại thụ thể Glycoprotein IIb/IIIa",
      "Ức chế thụ thể Thromboxan A2 (TP receptor)",
      "Kích hoạt thụ thể Prostacyclin IP gây tăng cAMP nội bào"
    ],
    "correct": 0,
    "explanation": "Clopidogrel là tiền chất dẫn xuất thienopyridin, qua gan chuyển hóa tạo chất có hoạt tính gắn cộng hóa trị vào gốc cystein của thụ thể P2Y12, ức chế vĩnh viễn sự gắn của ADP lên thụ thể này, ngăn cản con đường hoạt hóa phức hợp GP IIb/IIIa.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 293,
    "subject": "duocly2",
    "chapter": "Thuốc chữa thiếu máu",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Đường dùng bắt buộc và lâu dài của Vitamin B12 (Hydroxocobalamin / Cyanocobalamin) trong điều trị bệnh thiếu máu ác tính Biermer hoặc sau phẫu thuật cắt toàn bộ dạ dày là gì?",
    "options": [
      "Uống viên nén bao tan trong ruột sau bữa ăn",
      "Uống dung dịch siro đậm đặc cùng với bữa ăn sáng",
      "Tiêm bắp (hoặc tiêm dưới da sâu) định kỳ suốt đời do dùng đường uống hoàn toàn không hấp thu được",
      "Thụt trực tràng mỗi buổi tối"
    ],
    "correct": 2,
    "explanation": "Do mất hoàn toàn yếu tố nội tại của dạ dày hoặc mất hồi tràng, cơ thể hoàn toàn không thể hấp thu B12 qua đường tiêu hóa. Bệnh nhân bắt buộc phải tiêm bắp Vitamin B12 định kỳ suốt đời (ban đầu tiêm cách ngày, sau đó duy trì tiêm bắp 1000 mcg mỗi 1-3 tháng).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 294,
    "subject": "duocly2",
    "chapter": "Thuốc chữa thiếu máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Erythropoietin (EPO / Epoetin alfa) được sản sinh chủ yếu từ cơ quan nào trong cơ thể khi nồng độ oxy mô bị suy giảm và được chỉ định hàng đầu trong điều trị thiếu máu do nguyên nhân nào?",
    "options": [
      "Tiết ra từ tủy xương; điều trị thiếu máu do tan máu tự miễn",
      "Tiết ra từ tế bào kẽ quanh ống thận (90%); chỉ định hàng đầu điều trị thiếu máu do bệnh thận mạn tính (suy thận mạn)",
      "Tiết ra từ tế bào Kupffer của gan; điều trị thiếu máu do xơ gan",
      "Tiết ra từ lách; điều trị thiếu máu do chảy máu cấp tính"
    ],
    "correct": 1,
    "explanation": "Khoảng 90% Erythropoietin nội sinh được sản xuất bởi các nguyên bào sợi quanh ống lượn gần tại thận khi có thiếu oxy mô. Bệnh nhân suy thận mạn tính bị giảm sản xuất EPO trầm trọng dẫn đến thiếu máu đẳng sắc đẳng bào, bắt buộc phải dùng EPO tái tổ hợp (rHuEPO).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 295,
    "subject": "duocly2",
    "chapter": "Vitamin",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Vitamin E (Alpha-tocopherol) phát huy tác dụng sinh học bảo vệ cơ thể chủ yếu thông qua vai trò nào?",
    "options": [
      "Chất vận chuyển acid amin qua màng tế bào",
      "Chất chống oxy hóa tan trong lipid bảo vệ các acid béo chưa bão hòa của màng tế bào khỏi quá trình peroxy hóa lipid do gốc tự do",
      "Coenzym kích hoạt quá trình đông máu nội sinh",
      "Kích thích tuyến thượng thận tổng hợp steroid"
    ],
    "correct": 2,
    "explanation": "Vitamin E là chất chống oxy hóa tan trong mỡ chính của cơ thể. Phân tử này bẫy các gốc tự do peroxyl, ngăn chặn phản ứng dây chuyền peroxy hóa lipid màng tế bào (đặc biệt màng hồng cầu và mô thần kinh), duy trì sự toàn vẹn của màng tế bào.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 296,
    "subject": "duocly2",
    "chapter": "Vitamin",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Nguy cơ chảy máu và xuất huyết tăng vọt khi sử dụng Vitamin E liều cao kéo dài là do tương tác đối kháng với vitamin nào sau đây?",
    "options": [
      "Vitamin C",
      "Vitamin K (Vitamin E liều cao cản trở quá trình carboxyl hóa phụ thuộc vitamin K)",
      "Vitamin B12",
      "Vitamin D"
    ],
    "correct": 1,
    "explanation": "Vitamin E liều cao (> 800-1000 IU/ngày) ức chế chức năng tiểu cầu và cản trở sự chuyển hóa của Vitamin K trong gan, làm giảm nồng độ các yếu tố đông máu phụ thuộc vitamin K, làm tăng nguy cơ xuất huyết, đặc biệt ở bệnh nhân đang dùng thuốc chống đông Warfarin.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 297,
    "subject": "duocly2",
    "chapter": "Vitamin",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Vitamin nào sau đây được tổng hợp một lượng đáng kể bởi hệ vi khuẩn đường ruột (vi khuẩn cộng sinh đại tràng) và trẻ sơ sinh thường phải tiêm bắp ngay sau sinh để phòng ngừa xuất huyết não?",
    "options": [
      "Vitamin A",
      "Vitamin C",
      "Vitamin B1",
      "Vitamin K (Vitamin K2 - Menaquinone được tổng hợp bởi vi khuẩn ruột)"
    ],
    "correct": 3,
    "explanation": "Hệ vi khuẩn đường ruột tổng hợp Vitamin K2 (menaquinone) cung cấp một phần nhu cầu cơ thể. Trẻ sơ sinh có đường ruột hoàn toàn vô khuẩn và sữa mẹ chứa rất ít vitamin K, do đó có nguy cơ cao bị bệnh xuất huyết ở trẻ sơ sinh (đặc biệt xuất huyết não màng não). Tiêm bắp Vitamin K1 ngay sau sinh là quy chuẩn y tế bắt buộc.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 298,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hội chứng rối loạn phân bố mỡ (Lipodystrophy) với teo mỡ ở mặt, tay chân nhưng tích tụ mỡ ở bụng và sau gáy tạo 'Gù trâu' (Buffalo hump), kèm theo tăng lipid máu và đề kháng insulin là tác dụng phụ điển hình của nhóm thuốc ARV nào?",
    "options": [
      "Thuốc ức chế men Integrase (INSTI)",
      "Thuốc ức chế enzym Protease (PI như Ritonavir, Lopinavir, Atazanavir)",
      "Thuốc ức chế thụ thể CCR5 (Maraviroc)",
      "Thuốc kháng virus viêm gan B (Entecavir)"
    ],
    "correct": 1,
    "explanation": "Các thuốc ức chế Protease (PI) cản trở các yếu tố điều hòa phiên mã lipid (SREBP-1) và các protein liên kết acid retinoic trong mô mỡ, dẫn đến thoái hóa mô mỡ dưới da ngoại vi và tích tụ mỡ nội tạng (hội chứng buffalo hump, bụng cóc), kèm theo xơ vữa mạch máu sớm.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 299,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tại sao trong các phác đồ điều trị HIV, Ritonavir liều thấp thường được phối hợp cùng với các thuốc ức chế Protease khác (như Lopinavir/ritonavir hoặc Darunavir/ritonavir)?",
    "options": [
      "Để tăng hiệu quả kháng khuẩn đường ruột",
      "Để ngăn ngừa nguy cơ dị ứng da",
      "Để trung hòa tính acid của các thuốc khác trong dạ dày",
      "Ritonavir là chất ức chế cực mạnh enzym gan CYP3A4, đóng vai trò là chất 'tăng cường sinh dược học' (Pharmacokinetic booster), giúp làm tăng nồng độ và kéo dài thời gian bán hủy của thuốc PI dùng chung"
    ],
    "correct": 3,
    "explanation": "Ritonavir ở liều thấp (100-200 mg) không dùng với mục đích diệt virus mà đóng vai trò là chất 'booster': ức chế enzym CYP3A4 ở gan và ruột, ngăn cản chuyển hóa thuốc PI đi kèm, giúp nâng nồng độ thuốc trong máu lên gấp nhiều lần và giảm tần suất uống thuốc.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 300,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc chống ung thư nhóm Taxane (Paclitaxel chiết xuất từ vỏ cây Thông đỏ Taxus brevifolia) tác động lên vi ống thoi phân bào theo cơ chế đối lập với Vinca alkaloid như thế nào?",
    "options": [
      "Paclitaxel ức chế sự tổng hợp protein tubulin tại ribosom",
      "Paclitaxel thúc đẩy sự trùng hợp và làm bền vững quá mức các vi ống, ngăn cản sự phân rã bình thường của vi ống thoi vô sắc trong kỳ sau của phân bào",
      "Paclitaxel hòa tan các sợi thoi phân bào ngay khi vừa hình thành",
      "Paclitaxel làm xoắn ngược các sợi vi ống tạo cấu trúc vòng khép kín"
    ],
    "correct": 2,
    "explanation": "Ngược lại với Vinca alkaloids (ức chế tạo vi ống), Paclitaxel gắn vào tiểu phần beta-tubulin làm tăng cường trùng hợp và ổn định hóa các bó vi ống bất thường, ngăn cản vi ống tự phân rã (depolymerization). Thoi phân bào bị 'đóng băng' cứng đờ, tế bào ung thư không thể hoàn tất phân chia và chết ở pha G2/M.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 301,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng phụ thần kinh ngoại biên đặc trưng của Vincristin (Vincristine-induced peripheral neuropathy) biểu hiện qua các triệu chứng lâm sàng nào?",
    "options": [
      "Co cứng cơ toàn thân và sốt cao ác tính",
      "Tê bì mất cảm giác đầu chi kiểu mang găng mang vớ, giảm hoặc mất phản xạ gân gót và táo bón nặng do liệt nhu động ruột",
      "Rối loạn trí nhớ và mất tiếng nói",
      "Run giật nhãn cầu ngang và điếc tai đột ngột"
    ],
    "correct": 1,
    "explanation": "Vi ống cần thiết cho quá trình vận chuyển sợi trục thần kinh (axonal transport) trong các dây thần kinh dài. Vincristin làm gián đoạn vi ống sợi trục gây bệnh thần kinh ngoại biên cảm giác - vận động (tê bì, yếu cơ, mất phản xạ gân xương) và tổn thương đám rối thần kinh tự chủ ruột gây táo bón nặng, liệt ruột cơ năng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 302,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong ngộ độc cấp tính khí Carbon Monoxide (CO - khói đám cháy, bếp than tổ ong), biện pháp điều trị giải độc cứu sống tế bào não hàng đầu là gì?",
    "options": [
      "Truyền dung dịch Natri bicarbonat 4.2%",
      "Tiêm bắp Atropin sulfat liều cao",
      "Cho thở Oxy nguyên chất 100% qua mặt nạ có túi dự trữ hoặc liệu pháp Oxy cao áp (Hyperbaric Oxygen - HBO) trong buồng cao áp",
      "Truyền huyết tương tươi đông lạnh"
    ],
    "correct": 2,
    "explanation": "CO gắn vào Hemoglobin với ái lực cao gấp 200-250 lần oxy tạo Carboxyhemoglobin (HbCO). Thở oxy khí trời bình thường cần 320 phút để thải trừ 50% HbCO. Thở Oxy 100% rút ngắn T1/2 xuống còn 80 phút; thở Oxy cao áp (2.5-3 atm) rút ngắn T1/2 xuống chỉ còn 20-25 phút, đẩy CO nhanh chóng khỏi hemoglobin và mô não.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 303,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong ngộ độc cấp tính thuốc chống trầm cảm 3 vòng (TCA như Amitriptylin) có biểu hiện phức bộ QRS giãn rộng quá 0.12 giây và loạn nhịp thất, thuốc cấp cứu kiềm hóa máu giải độc số 1 là gì?",
    "options": [
      "Natri Bicarbonat 8.4% (NaHCO3) tiêm tĩnh mạch trực tiếp và truyền duy trì duy trì pH máu từ 7.45 đến 7.55",
      "Amiodaron truyền tĩnh mạch chậm",
      "Calci clorid 10% tiêm tĩnh mạch",
      "Dung dịch Ringer lactat truyền tĩnh mạch nhanh"
    ],
    "correct": 0,
    "explanation": "TCA chẹn kênh Natri nhanh ở cơ tim làm chậm dẫn truyền gây QRS giãn rộng và xoắn đỉnh. Natri Bicarbonat làm tăng nồng độ Na+ ngoại bào cạnh tranh đẩy TCA khỏi kênh Natri, đồng thời kiềm hóa máu (pH 7.45-7.55) làm tăng tỷ lệ TCA ở dạng không ion hóa giảm ái lực với kênh Natri, giúp thu hẹp QRS và cắt loạn nhịp.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 304,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Kháng sinh hoặc độc chất kháng Cholinergic (Atropin, Cà độc dược, thuốc kháng H1 thế hệ 1) gây hội chứng Anticholinergic cấp tính (mê sảng, sốt cao, đồng tử giãn tối đa, da khô đỏ, bí tiểu) được giải độc đặc hiệu bằng thuốc nào?",
    "options": [
      "Pralidoxime (PAM)",
      "Physostigmin (thuốc ức chế Acetylcholinesterase amin bậc 3 vượt qua được hàng rào máu não)",
      "Neostigmin tiêm bắp",
      "Pyridostigmin đường uống"
    ],
    "correct": 1,
    "explanation": "Physostigmin là một amin bậc 3 thân dầu, có khả năng vượt qua hàng rào máu não rất tốt (khác với Neostigmin là amin bậc 4 chỉ tác dụng ngoại vi). Thuốc ức chế AChE làm tăng nồng độ acetylcholin cả ở não và ngoại vi, hóa giải nhanh chóng tình trạng mê sảng, co giật và các triệu chứng ngoại vi của ngộ độc Atropin.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 305,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Sự xuất hiện của 'sóng U' trên bản ghi điện tâm đồ của bệnh nhân đang điều trị bằng Digoxin thường gợi ý tình trạng rối loạn điện giải đi kèm nào?",
    "options": [
      "Tăng nồng độ calci máu ác tính (> 3.0 mmol/L)",
      "Nhiễm toan hô hấp nặng do ứ đọng CO2",
      "Hạ kali máu đáng kể (K+ < 3.0 mmol/L)",
      "Tăng natri máu ưu trương do mất nước ngoài tế bào"
    ],
    "correct": 3,
    "explanation": "Sóng U nổi bật trên ECG là dấu hiệu đặc trưng của hạ kali máu nặng. Khi kết hợp với điều trị Digoxin, đây là cảnh báo nguy cơ cực cao khởi phát loạn nhịp thất chết người (xoắn đỉnh, rung thất).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 306,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác động của Digoxin lên thời gian trơ và tốc độ dẫn truyền tại hệ thống dẫn truyền trong tim có đặc điểm phân hóa như thế nào giữa tầng nhĩ và tầng thất?",
    "options": [
      "Tăng dẫn truyền qua nút nhĩ thất nhưng làm chậm dẫn truyền ở cơ tâm thất",
      "Rút ngắn thời gian trơ của nút nhĩ thất và kéo dài thời gian trơ của cơ tâm nhĩ",
      "Làm chậm dẫn truyền và kéo dài thời kỳ trơ của nút nhĩ thất, nhưng rút ngắn thời kỳ trơ của cơ thất",
      "Kéo dài thời kỳ trơ đồng đều trên toàn bộ hệ thống nút xoang, nút AV và sợi Purkinje"
    ],
    "correct": 2,
    "explanation": "Digitalis kích thích phế vị làm chậm dẫn truyền và kéo dài thời kỳ trơ của nút nhĩ thất (bảo vệ thất trong rung nhĩ). Tuy nhiên, trên cơ tâm thất, thuốc lại rút ngắn thời gian điện thế hoạt động và rút ngắn thời kỳ trơ, làm tăng tính kích thích thất ở liều cao.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
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
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc chống đau thắt ngực Ranolazine cải thiện tình trạng thiếu máu cơ tim thông qua can thiệp vào dòng ion nào ở pha tái cực tế bào cơ tim?",
    "options": [
      "Kích hoạt dòng calci đi vào ở pha 2 làm tăng co bóp cơ tim",
      "Ức chế dòng kali đi ra chậm làm kéo dài thời gian điện thế hoạt động",
      "Kích thích dòng natri nhanh ở pha 0 làm tăng tốc độ khử cực",
      "Ức chế chọn lọc dòng Natri muộn đi vào (late INa), ngăn ngừa quá tải calci nội bào qua bơm trao đổi Na+/Ca2+"
    ],
    "correct": 3,
    "explanation": "Ranolazine ức chế chọn lọc dòng Natri muộn (late INa) trong tế bào cơ tim thiếu máu. Giảm Na+ nội bào giúp bơm Na+/Ca2+ tống Ca2+ ra ngoài, ngăn ngừa quá tải Ca2+ nội bào tâm trương, giảm sức căng thành thất và cải thiện tưới máu cơ tim.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 311,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc chống loạn nhịp Nhóm IV gồm Verapamil và Diltiazem có tác dụng cắt cơn và kiểm soát tần số thất trong các loạn nhịp trên thất chủ yếu nhờ vị trí tác động nào?",
    "options": [
      "Chẹn kênh Natri nhanh ở các sợi dẫn truyền cơ tâm thất",
      "Ức chế thụ thể beta-2 adrenergic tại tiểu phế quản",
      "Chẹn kênh Calci typ L tại nút xoang và nút nhĩ thất, làm chậm khử cực pha 0 và kéo dài thời kỳ trơ của nút nhĩ thất",
      "Kích thích giải phóng nitric oxid từ tế bào nội mô mạch vành"
    ],
    "correct": 2,
    "explanation": "Điện thế hoạt động tại nút xoang và nút nhĩ thất phụ thuộc chủ yếu vào dòng Ca2+ đi vào qua kênh L-type ở pha 0. Verapamil và Diltiazem ức chế dòng này, làm chậm nhịp xoang và làm chậm dẫn truyền, kéo dài thời kỳ trơ của nút nhĩ thất.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 312,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Biến chứng nguy hiểm đến tính mạng nào sau đây có thể xuất hiện khi phối hợp thuốc lợi tiểu tiết kiệm Kali (Spironolacton hoặc Amilorid) với thuốc ức chế men chuyển (ACEI) hoặc thuốc chẹn thụ thể ARB?",
    "options": [
      "Tăng Kali máu ác tính (K+ > 6.5 mmol/L) dẫn tới rung thất và ngừng tim",
      "Hạ Natri máu sâu kèm phù não và co giật",
      "Nhiễm kiềm chuyển hóa nặng kèm tetany co cứng cơ",
      "Cơn bão giáp trạng do giải phóng thyroxin cấp tính"
    ],
    "correct": 0,
    "explanation": "Cả thuốc ức chế hệ RAA (ACEI/ARB) và thuốc lợi tiểu tiết kiệm Kali đều làm giảm bài tiết K+ tại ống thận. Phối hợp đồng thời hai nhóm này làm tăng vọt nguy cơ tăng Kali máu ác tính (đặc biệt ở người có suy thận hoặc đái tháo đường), có thể gây ngừng tim đột ngột.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 313,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hội chứng 'Rebound acid hypersecretion' (Tăng tiết acid hồi ứng dội ngược) gây ợ nóng dữ dội sau khi dừng đột ngột thuốc điều trị loét dạ dày là do nguyên nhân sinh lý nào?",
    "options": [
      "Nồng độ Gastrin huyết thanh tăng cao bù trừ trong suốt thời gian dùng thuốc làm phì đại các tế bào viền và tế bào ECL",
      "Vi khuẩn Helicobacter pylori bùng phát nhân đôi số lượng trong vòng 24 giờ",
      "Tuyến tụy ngừng bài tiết dịch tụy kiềm vào tá tràng",
      "Lớp chất nhầy bảo vệ niêm mạc dạ dày bị tiêu hủy hoàn toàn do thiếu máu"
    ],
    "correct": 0,
    "explanation": "Khi dùng PPI/kháng H2 kéo dài, nồng độ acid thấp kích thích tế bào G tăng tiết Gastrin liên tục. Nồng độ Gastrin máu cao gây tăng sinh và phì đại tế bào viền. Khi dừng thuốc đột ngột, các tế bào viền phì đại sẽ tiết acid ồ ạt (hiệu ứng rebound).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 314,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Triclabendazol là một dẫn xuất benzimidazol đặc biệt, là thuốc lựa chọn hàng đầu đặc hiệu trong điều trị bệnh lý ký sinh trùng nào ở Việt Nam?",
    "options": [
      "Bệnh giun lươn ruột lan tỏa",
      "Bệnh Sán lá gan lớn (Fasciola hepatica và Fasciola gigantica)",
      "Bệnh sán máng đường niệu",
      "Bệnh giun xoắn cơ vân"
    ],
    "correct": 0,
    "explanation": "Triclabendazol có hiệu lực diệt sán lá gan lớn Fasciola cực mạnh (diệt cả sán non di chuyển trong nhu mô gan và sán trưởng thành trong ống mật), với tỷ lệ khỏi bệnh trên 95% chỉ sau 1-2 liều uống, vượt trội hơn hẳn Praziquantel (vốn ít hiệu quả trên Fasciola).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 315,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Kháng thể đơn dòng Omalizumab được chỉ định trong điều trị hen phế quản dị ứng nặng kháng trị có cơ chế tác dụng đặc hiệu nào?",
    "options": [
      "Ức chế thụ thể IL-5 trên màng bạch cầu ái toan",
      "Gắn chọn lọc vào phần Fc tự do của kháng thể IgE trong máu, ngăn cản IgE gắn lên thụ thể Fc-epsilon-RI trên màng dưỡng bào",
      "Chẹn kênh calci typ L ở màng tế bào cơ trơn phế quản",
      "Bất hoạt thụ thể TNF-alpha hòa tan trong tuần hoàn"
    ],
    "correct": 2,
    "explanation": "Omalizumab là kháng thể đơn dòng nhân hóa tái tổ hợp liên kết đặc hiệu với phần Fc của IgE tự do trong tuần hoàn, ngăn chặn IgE gắn lên thụ thể có ái lực cao Fc-epsilon-RI trên bề mặt dưỡng bào (mast cell) và bạch cầu ái kiềm, ngăn chặn phản ứng giải phóng histamin.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 316,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong xử trí Cấp cứu Sốc phản vệ (Anaphylactic shock) đe dọa tính mạng do tụt huyết áp và co thắt thanh phế quản, thuốc cấp cứu đầu tay bắt buộc tiêm bắp ngay lập tức là gì?",
    "options": [
      "Kháng Histamin H1 tiêm bắp sâu (Diphenhydramin)",
      "Corticosteroid tiêm tĩnh mạch (Methylprednisolon)",
      "Kháng Histamin H2 truyền tĩnh mạch (Ranitidin)",
      "Adrenalin (Epinephrin) tiêm bắp sâu ngay lập tức ở mặt trước ngoài đùi"
    ],
    "correct": 3,
    "explanation": "Adrenalin là thuốc cấp cứu sống còn duy nhất trong sốc phản vệ: kích thích alpha-1 làm co mạch nâng huyết áp, kích thích beta-1 tăng co bóp tim, và kích thích beta-2 làm giãn phế quản và ức chế dưỡng bào phóng thích hóa chất. Kháng H1 và Corticosteroid chỉ là thuốc hỗ trợ thứ yếu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 317,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Acid bempedoic là thuốc hạ lipid máu đường uống mới có cơ chế tác dụng ức chế enzym nào trong cùng chuỗi tổng hợp cholesterol với Statin nhưng ít gây tác dụng phụ đau cơ?",
    "options": [
      "Enzym ATP Citrate Lyase (ACL) ở chặng trước HMG-CoA Reductase",
      "Enzym Lanosterol demethylase tại ty thể",
      "Enzym Lecithin cholesterol acyltransferase (LCAT)",
      "Enzym Acyl-CoA cholesterol acyltransferase (ACAT)"
    ],
    "correct": 0,
    "explanation": "Acid Bempedoic ức chế enzym ATP Citrate Lyase (ACL) - enzym nằm ở thượng nguồn của HMG-CoA Reductase. Điểm độc đáo: Acid bempedoic là tiền chất chỉ được hoạt hóa bởi enzym ACSVL1 có ở tế bào gan mà không có ở cơ vân, do đó hầu như không gây tác dụng phụ đau cơ như Statin.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 318,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Atovaquon phối hợp với Proguanil (viên Malarone) là thuốc dự phòng và điều trị sốt rét hiện đại. Cơ chế phân tử của Atovaquon là gì?",
    "options": [
      "Ức chế vận chuyển glucose qua màng hồng cầu",
      "Ức chế phức hợp Cytochrom bc1 (phức hợp III) trong chuỗi hô hấp ty thể của ký sinh trùng, làm sụp đổ điện thế màng ty thể",
      "Ức chế enzym polymerase sao chép ARN",
      "Làm biến đổi pH dịch bào tương của tế bào gan"
    ],
    "correct": 2,
    "explanation": "Atovaquon là dẫn xuất hydroxynaphthoquinone có cấu trúc tương tự ubiquinone. Thuốc ức chế chọn lọc phức hợp Cytochrom bc1 ở màng trong ty thể ký sinh trùng, chặn đứng chuỗi chuyền điện tử và ngừng tổng hợp pyrimidin, làm sụp đổ điện thế ty thể của ký sinh trùng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 319,
    "subject": "duocly2",
    "chapter": "KTGHP",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hiện tượng tương tác 'Hiệp đồng vượt mức' (Potentiation / Synergism) trong điều trị nhiễm khuẩn được ứng dụng kinh điển qua sự kết hợp giữa kháng sinh Amoxicillin và Acid Clavulanic (hoặc Ampicillin + Sulbactam) dựa trên nguyên lý nào?",
    "options": [
      "Acid Clavulanic đóng vai trò là chất ức chế enzym Beta-lactamase tự sát, bảo vệ Amoxicillin không bị vi khuẩn phá hủy vòng beta-lactam",
      "Acid Clavulanic làm tăng tốc độ phân chia của vi khuẩn để kháng sinh diệt nhanh hơn",
      "Acid Clavulanic làm tăng độ tan của Amoxicillin trong lipid màng",
      "Amoxicillin kích hoạt tính kháng khuẩn nội tại của Acid Clavulanic"
    ],
    "correct": 0,
    "explanation": "Bản thân Acid Clavulanic có hoạt tính kháng khuẩn rất yếu. Tuy nhiên, nó gắn cộng hóa trị không hồi phục vào enzym Beta-lactamase do vi khuẩn tiết ra (chất ức chế tự sát - suicide inhibitor), làm tê liệt enzym này, bảo vệ phân tử Amoxicillin nguyên vẹn để tiêu diệt các chủng vi khuẩn tiết men kháng thuốc.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 320,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Spironolacton có tác dụng điều trị mụn trứng cá và chứng rậm lông (Hirsutism) ở phụ nữ mắc hội chứng buồng trứng đa nang (PCOS) nhờ tác dụng nội tiết nào?",
    "options": [
      "Kích thích buồng trứng tăng sản xuất estrogen nội sinh",
      "Ức chế enzym tổng hợp cortisol tại tuyến thượng thận",
      "Làm giảm bài xuất natri qua tuyến bã nhờn ngoài da",
      "Đối kháng thụ thể Androgen và ức chế nhẹ enzym 17-alpha-hydroxylase làm giảm tổng hợp testosterone"
    ],
    "correct": 3,
    "explanation": "Ngoài tác dụng kháng mineralocorticoid, Spironolacton còn chẹn thụ thể Androgen tại nang lông và tuyến bã nhờn, đồng thời ức chế enzym sinh tổng hợp androgen, làm giảm tiết bã nhờn trị mụn và giảm rậm lông ở phụ nữ PCOS.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 321,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng không mong muốn nghiêm trọng khiến Pioglitazone bị chống chỉ định tuyệt đối ở bệnh nhân có suy tim xung huyết (NYHA III - IV) là gì?",
    "options": [
      "Gây hoại tử tế bào cơ tim do thiếu máu",
      "Làm khởi phát cơn rung nhĩ kịch phát trơ",
      "Gây co thắt các nhánh động mạch vành chính",
      "Gây giữ muối và nước qua trung gian kích hoạt kênh ENaC ở ống thận, dẫn đến phù ngoại biên và làm bùng phát hoặc nặng thêm suy tim ứ huyết"
    ],
    "correct": 3,
    "explanation": "Hoạt hóa PPAR-gamma ở ống góp thận làm tăng biểu hiện kênh Natri ENaC, kích thích tăng tái hấp thu muối và nước, dẫn đến tăng thể tích tuần hoàn ngoại bào, gây phù ngoại biên và bùng phát suy tim sung huyết nặng. Thuốc chống chỉ định ở người có suy tim NYHA III-IV.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 322,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc chống kết tập tiểu cầu Ticagrelor khác biệt cơ bản với Clopidogrel và Prasugrel ở đặc điểm dược lý nào sau đây?",
    "options": [
      "Ticagrelor là thuốc có hoạt tính trực tiếp (không phải tiền chất) và gắn ức chế thuận nghịch tại vị trí dị lập thể trên thụ thể P2Y12",
      "Ticagrelor chỉ tác dụng qua ức chế men COX-1 ở tiểu cầu",
      "Ticagrelor gắn không hồi phục vào thụ thể P2Y12 suốt đời sống tiểu cầu",
      "Ticagrelor chỉ được dùng đường tiêm truyền tĩnh mạch cấp cứu"
    ],
    "correct": 1,
    "explanation": "Khác với Clopidogrel và Prasugrel (tiền chất gắn cộng hóa trị không hồi phục vào vị trí gắn ADP), Ticagrelor là dẫn chất cyclopentyltriazolopyrimidine có hoạt tính trực tiếp, gắn thuận nghịch vào vị trí dị lập thể (allosteric site) của thụ thể P2Y12, làm phục hồi chức năng tiểu cầu nhanh hơn khi ngừng thuốc.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 323,
    "subject": "duocly2",
    "chapter": "Thuốc chữa thiếu máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Biến chứng tim mạch nguy hiểm có thể xảy ra khi điều trị bằng Erythropoietin (EPO) nếu nồng độ Hemoglobin trong máu tăng quá nhanh (> 1 g/dL trong 2 tuần) hoặc vượt ngưỡng mục tiêu (Hb > 11.5 g/dL) là gì?",
    "options": [
      "Tụt huyết áp tư thế đứng kèm suy tim sung huyết",
      "Rung nhĩ kịch phát có chu kỳ",
      "Huyết khối động tĩnh mạch (nhồi máu não, nhồi máu cơ tim, tắc cầu nối động tĩnh mạch chạy thận) và cơn tăng huyết áp kịch phát",
      "Viêm cơ tim tự miễn do kháng thể tái tổ hợp"
    ],
    "correct": 3,
    "explanation": "EPO kích thích tủy xương tăng nhanh số lượng hồng cầu làm tăng độ nhớt của máu và tăng sức cản ngoại vi, dẫn đến cơn tăng huyết áp kịch phát kèm co giật; đồng thời kích hoạt tiểu cầu làm tăng vọt nguy cơ tắc mạch huyết khối (đột quỵ não, nhồi máu cơ tim, tắc catheter chạy thận).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 324,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Dolutegravir, Raltegravir và Bictegravir thuộc nhóm thuốc kháng retrovirus hiện đại nào hiện là phác đồ ưu tiên hàng đầu toàn cầu nhờ hiệu lực diệt virus cực nhanh và hàng rào kháng thuốc cao?",
    "options": [
      "Thuốc ức chế hòa màng tế bào",
      "Thuốc ức chế thụ thể đồng vận CCR5",
      "Thuốc ức chế enzym tích hợp chuỗi Integrase (INSTI - Integrase Strand Transfer Inhibitors)",
      "Thuốc ức chế sự trưởng thành của virus"
    ],
    "correct": 2,
    "explanation": "INSTI (thuốc có đuôi '-tegravir') ức chế enzym Integrase của HIV, ngăn cản bước chuyển chuỗi tích hợp DNA virus vừa sao chép vào bộ gen nhiễm sắc thể của tế bào lympho T CD4+. Nhóm này làm giảm tải lượng virus nhanh nhất, dung nạp tốt và là phác đồ bậc 1 ưu tiên của WHO.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 325,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc chống chuyển hóa 5-Fluorouracil (5-FU) tiêu diệt tế bào ung thư thông qua ức chế enzym nào cần thiết cho quá trình sinh tổng hợp pyrimidin của DNA?",
    "options": [
      "Enzym Ribonucleotid Reductase",
      "Enzym Dihydroorotat Dehydrogenase",
      "Enzym Thymidylate Synthase (TS) - ngăn chặn chuyển đổi dUMP thành dTMP",
      "Enzym DNA Ligase I"
    ],
    "correct": 3,
    "explanation": "5-FU được chuyển hóa thành chất có hoạt tính 5-FdUMP. 5-FdUMP gắn chặt với enzym Thymidylate Synthase (TS) và cofactor N5,N10-methylen-THF tạo thành phức hợp ba bền vững, ức chế không hồi phục enzym TS, chặn đứng phản ứng methyl hóa dUMP thành dTMP (nguyên liệu tổng hợp thymidine của DNA).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 326,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc giải độc đặc hiệu Penicillamin (D-penicillamine) và Trientin được chỉ định trong điều trị bệnh lý quá tải hoặc ngộ độc kim loại nặng nào?",
    "options": [
      "Ngộ độc Sắt cấp tính",
      "Ngộ độc Thủy ngân vô cơ",
      "Bệnh lý thoái hóa gan - đậu mềm do ứ đọng Đồng (Bệnh Wilson) và ngộ độc Đồng",
      "Ngộ độc Khí than CO"
    ],
    "correct": 3,
    "explanation": "Penicillamin là dẫn xuất của penicillin mang nhóm sulfhydryl (-SH) tự do, có ái lực tạo phức chelate hòa tan rất mạnh với ion Đồng (Cu2+), giúp đào thải đồng ồ ạt qua nước tiểu trong bệnh Wilson (rối loạn chuyển hóa đồng di truyền) và ngộ độc đồng cấp/mạn.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 327,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Khi dán miếng dán Nitroglycerin qua da để dự phòng cơn đau thắt ngực, hướng dẫn dùng thuốc chuẩn xác nào giúp hạn chế tình trạng lờn thuốc (tolerance)?",
    "options": [
      "Dán liên tục miếng dán 24/24 giờ và thay miếng dán mới mỗi 48 giờ",
      "Dán 2 miếng cùng lúc vào buổi sáng và tháo bỏ cả 2 vào buổi trưa",
      "Dán miếng dán trong khoảng 12 đến 14 giờ vào ban ngày, tháo bỏ vào buổi tối để có khoảng trống 10-12 giờ không thuốc",
      "Chỉ dán miếng dán khi bắt đầu xuất hiện cơn đau ngực cấp tính và gỡ ngay sau 5 phút"
    ],
    "correct": 2,
    "explanation": "Miếng dán phóng thích qua da được dán vào buổi sáng (khoảng 12-14 giờ) và bóc ra vào buổi tối trước khi đi ngủ, tạo khoảng trống không thuốc 10-12 giờ ban đêm để phục hồi độ nhạy cảm của thụ thể và nồng độ sulfhydryl.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 328,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân dùng thuốc chống đau thắt ngực Nicorandil có cơ chế giãn mạch kép độc đáo gồm những tác động nào?",
    "options": [
      "Chẹn kênh calci typ L đồng thời kích thích thụ thể beta-2 adrenergic phế quản",
      "Vừa có tác dụng giống nitrat giải phóng NO, vừa mở kênh Kali nhạy cảm ATP (K_ATP) gây giãn cơ trơn mạch máu",
      "Ức chế enzym phosphodiesterase-5 kết hợp đối kháng thụ thể angiotensin II",
      "Ức chế enzym men chuyển đồng thời chẹn thụ thể alpha-1 adrenergic ngoại vi"
    ],
    "correct": 1,
    "explanation": "Nicorandil có cơ chế kép: cấu trúc nitrat giải phóng NO làm tăng cGMP gây giãn tĩnh mạch; đồng thời phân tử kích hoạt mở kênh K_ATP gây ưu phân cực màng tế bào cơ trơn làm giãn tiểu động mạch vành.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 329,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng phụ loét niêm mạc đường tiêu hóa nặng (loét miệng, loét hậu môn, thủng ruột) là cảnh báo an toàn đặc biệt gắn liền với thuốc chống đau thắt ngực nào sau đây?",
    "options": [
      "Nicorandil do tác dụng mở kênh K_ATP và chuyển hóa tại biểu mô niêm mạc",
      "Nitroglycerin dạng viên ngậm dưới lưỡi phóng thích nhanh",
      "Isosorbid mononitrat dạng viên bao tan trong ruột",
      "Aspirin liều thấp 81 mg chống kết tập tiểu cầu"
    ],
    "correct": 0,
    "explanation": "Nicorandil có cảnh báo đặc biệt về tác dụng phụ gây loét niêm mạc nặng, sâu và dai dẳng ở đường tiêu hóa (loét miệng áp-tơ khổng lồ, loét dạ dày ruột, loét quanh hậu môn). Loét này chỉ lành khi ngưng hoàn toàn Nicorandil.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 330,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong nghiệm pháp gắng sức chẩn đoán bệnh tim thiếu máu cục bộ, thuốc giãn mạch vành nào sau đây thường được truyền tĩnh mạch để gây hiện tượng 'cướp máu mạch vành' nhân tạo bộc lộ vùng cơ tim thiếu máu trên xạ hình tưới máu?",
    "options": [
      "Nitroglycerin tiêm bolus tĩnh mạch",
      "Propranolol truyền tĩnh mạch chậm",
      "Verapamil tiêm tĩnh mạch trực tiếp",
      "Dipyridamol hoặc Adenosin truyền tĩnh mạch"
    ],
    "correct": 3,
    "explanation": "Dipyridamol và Adenosin là các chất giãn mạch vành mạnh được dùng trong stress test tim mạch (xạ hình SPECT hoặc cộng hưởng từ cơ tim) để làm giãn tối đa vùng mạch vành lành, gây hiện tượng cướp máu bộc lộ rõ vùng thiếu máu cơ tim.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 331,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Chống chỉ định quan trọng nhất của thuốc chống đau thắt ngực Trimetazidine cần lưu ý đặc biệt ở bệnh nhân cao tuổi là gì?",
    "options": [
      "Hen phế quản nặng và bệnh phổi tắc nghẽn mạn tính giai đoạn cuối",
      "Bệnh nhân có suy giảm chức năng thận mức độ nhẹ (CrCl 60-90 mL/phút)",
      "Bệnh nhân mắc bệnh Parkinson, hội chứng run chân không yên và các rối loạn vận động ngoại tháp",
      "Bệnh nhân có tiền sử viêm loét dạ dày tá tràng nhiễm Helicobacter pylori"
    ],
    "correct": 2,
    "explanation": "Trimetazidine qua được hàng rào máu não và có thể ức chế dẫn truyền dopaminergic, gây khởi phát hoặc làm trầm trọng thêm các triệu chứng Parkinson (run tay, cứng đơ, chậm chạp) và hội chứng chân không yên. Thuốc chống chỉ định tuyệt đối ở người bệnh Parkinson.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 332,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân có hội chứng Wolff-Parkinson-White (WPW) kèm theo rung nhĩ xuất hiện cơn nhịp nhanh kịch phát. Nhóm thuốc nào sau đây bị chống chỉ định tuyệt đối vì có thể thúc đẩy dẫn truyền qua cầu Kent gây rung thất tử vong?",
    "options": [
      "Procainamid hoặc Ibutilide đường tĩnh mạch",
      "Các thuốc làm chậm dẫn truyền nút nhĩ thất như Digoxin, Verapamil, Diltiazem và Adenosin",
      "Sốc điện chuyển nhịp đồng bộ có gây mê",
      "Thuốc chẹn kênh Natri nhóm IA đường tĩnh mạch"
    ],
    "correct": 1,
    "explanation": "Trong rung nhĩ kèm WPW, nếu dùng các thuốc ức chế chọn lọc nút AV (Digoxin, Verapamil, Diltiazem, Adenosin), các xung động rung nhĩ sẽ không thể đi qua nút AV mà bị dồn toàn bộ qua đường dẫn truyền phụ (cầu Kent) với tần số 300-400 ck/phút, dẫn tới rung thất và tử vong.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 333,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Một hoạt chất chống loạn nhịp nhóm IB dùng đường uống có cấu trúc và tính chất dược lý tương tự Lidocain, thường được chỉ định trong loạn nhịp thất mạn tính là gì?",
    "options": [
      "Tocainid",
      "Disopyramid",
      "Moricizin",
      "Mexiletin"
    ],
    "correct": 3,
    "explanation": "Mexiletin là dẫn chất amin của Lidocain có khả năng kháng lại sự chuyển hóa bước đầu qua gan rất mạnh của Lidocain, do đó có sinh khả dụng đường uống cao (> 85%) và được dùng điều trị loạn nhịp thất đường uống.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 334,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Đặc điểm dược động học của Amiodaron có tính chất nào sau đây giải thích tại sao tác dụng của thuốc xuất hiện rất chậm và tồn tại hàng tháng sau khi ngừng thuốc?",
    "options": [
      "Tính thân dầu cực cao và thể tích phân bố khổng lồ (Vd lên tới 60 L/kg), thời gian bán thải kéo dài từ 25 đến 110 ngày",
      "Đào thải nguyên vẹn 100% qua nước tiểu mà không qua chuyển hóa gan",
      "Gắn cộng hóa trị không thuận nghịch với albumin huyết tương",
      "Bị tích lũy hoàn toàn trong lòng các tế bào hồng cầu tuần hoàn"
    ],
    "correct": 0,
    "explanation": "Amiodaron cực kỳ thân dầu, tích lũy chậm và sâu vào các mô mỡ, gan, phổi, da, cơ tim với thể tích phân bố Vd = 60 L/kg. Thời gian bán thải trung bình 40-60 ngày (dao động 25-110 ngày), đòi hỏi phải dùng liều nạp (loading dose) lớn khi khởi đầu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 335,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc chống loạn nhịp Sotalol là một phân tử đặc biệt kết hợp tác dụng dược lý của hai nhóm thuốc nào trong phân loại Vaughan Williams?",
    "options": [
      "Nhóm I (Chẹn kênh Natri) và Nhóm IV (Chẹn kênh Calci)",
      "Nhóm IB (Rút ngắn APD) và Nhóm IC (Làm chậm pha 0)",
      "Nhóm II (Chẹn beta-adrenergic không chọn lọc) và Nhóm III (Chẹn kênh Kali kéo dài APD)",
      "Nhóm II (Chẹn chọn lọc beta-1) và Nhóm I (Chẹn kênh Natri nhanh)"
    ],
    "correct": 2,
    "explanation": "Sotalol là hỗn hợp racemic: đồng phân d-sotalol có tác dụng Nhóm III (chẹn kênh K+ kéo dài thời gian điện thế hoạt động), trong khi đồng phân l-sotalol có cả tác dụng Nhóm III và tác dụng Nhóm II (chẹn thụ thể beta không chọn lọc).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 336,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc lợi tiểu Thiazid làm giảm nhạy cảm của thụ thể với catecholamin và hạ huyết áp lâu dài chủ yếu thông qua việc làm giảm nồng độ ion nào trong thành mạch?",
    "options": [
      "Làm cạn kiệt ion Magnesi nội bào ở thành mạch",
      "Làm giảm lượng ion Natri nội bào trong tế bào cơ trơn thành mạch, từ đó gián tiếp làm giảm Calci nội bào gây giãn mạch bền vững",
      "Làm tăng tích lũy ion Calci trong lưới nội sinh chất thành mạch",
      "Làm mất ion Bicarbonat trong dịch ngoại bào quanh thành mạch"
    ],
    "correct": 1,
    "explanation": "Trong vài tuần đầu, Thiazid hạ áp do giảm thể tích huyết tương. Về lâu dài, tác dụng hạ áp bền vững là do thuốc làm cạn kiệt Na+ ở thành mạch, kích hoạt bơm trao đổi Na+/Ca2+ đẩy Ca2+ ra ngoài, làm giảm Ca2+ nội bào trong cơ trơn thành mạch gây giãn mạch và giảm sức cản ngoại vi.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 337,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Phản ứng phụ dị ứng chéo (phát ban da, hội chứng Stevens-Johnson) có thể xảy ra ở bệnh nhân có tiền sử dị ứng với Sulfamid khi sử dụng các thuốc lợi tiểu nào sau đây?",
    "options": [
      "Spironolacton và Eplerenon",
      "Amilorid và Triamteren",
      "Furosemid, Bumetanid và các dẫn chất Thiazid (chứa nhóm sulfonamid -SO2NH2)",
      "Manitol và Acid ethacrynic"
    ],
    "correct": 3,
    "explanation": "Furosemid, Bumetanid, Torsemid, HCTZ, Indapamid và Acetazolamid đều mang nhóm cấu trúc sulfonamid (-SO2NH2), có thể gây dị ứng chéo ở bệnh nhân mẫn cảm với sulfamid. Acid ethacrynic là thuốc lợi tiểu quai duy nhất không có nhóm sulfonamid (dẫn xuất acid phenoxyacetic).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 338,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân suy thận kèm phù phổi cấp có tiền sử dị ứng nặng với kháng sinh Sulfamid thì thuốc lợi tiểu quai nào sau đây là lựa chọn an toàn không gây dị ứng chéo?",
    "options": [
      "Furosemid",
      "Torsemid",
      "Acid ethacrynic",
      "Bumetanid"
    ],
    "correct": 2,
    "explanation": "Acid ethacrynic là thuốc lợi tiểu quai có khung cấu trúc acid phenoxyacetic, hoàn toàn không chứa nhóm sulfonamid (-SO2NH2), do đó là lựa chọn an toàn tuyệt đối cho bệnh nhân có tiền sử dị ứng nặng với sulfamid.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 339,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng phụ hạ Magnesi máu nặng (Hypomagnesemia) gây co cứng cơ, loạn nhịp tim và co giật là cảnh báo an toàn của FDA đối với việc sử dụng nhóm thuốc nào kéo dài trên 3 tháng?",
    "options": [
      "Thuốc kháng toan Antacid dạng nhũ dịch",
      "Thuốc kháng thụ thể Histamin H2",
      "Thuốc ức chế bơm proton (PPI)",
      "Thuốc bảo vệ tế bào Sucralfat"
    ],
    "correct": 2,
    "explanation": "Dùng PPI kéo dài làm giảm hấp thu Mg2+ chủ động qua các kênh TRPM6/TRPM7 ở biểu mô ruột non do làm thay đổi pH vi môi trường lòng ruột, dẫn tới hạ Magnesi máu nặng (hypomagnesemia), có thể kèm hạ Calci và hạ Kali máu thứ phát.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 340,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tại sao thuốc kháng toan Natri bicarbonat (NaHCO3) không được khuyến cáo dùng dài ngày để điều trị loét dạ dày tá tràng mạn tính?",
    "options": [
      "Thuốc làm chậm nhu động ruột gây tắc ruột phân su",
      "Hấp thu vào máu gây nhiễm kiềm chuyển hóa toàn thân, giữ muối nước gây phù và sinh khí CO2 gây chướng bụng, kích thích tiết acid dội ngược",
      "Tạo phức chelate không tan phá hủy men tụy ngoại tiết",
      "Thuốc chuyển hóa thành acid uric làm tăng nguy cơ bệnh gút"
    ],
    "correct": 1,
    "explanation": "NaHCO3 là antacid toàn thân hòa tan tốt, trung hòa acid sinh ra khí CO2 (gây ợ hơi, căng trướng dạ dày có thể thủng ổ loét). Lượng Na+ hấp thu gây quá tải tuần hoàn, tăng HA, phù; và gốc HCO3- hấp thu gây nhiễm kiềm chuyển hóa toàn thân (hội chứng kiềm sữa).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 341,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc nào sau đây làm tăng trương lực cơ vòng thực quản dưới (LES) và tăng tốc độ làm rỗng dạ dày (Prokinetic), thường được phối hợp trong điều trị bệnh trào ngược dạ dày thực quản (GERD)?",
    "options": [
      "Loperamid",
      "Hyoscin butylbromid",
      "Atropin sulfat",
      "Domperidon hoặc Metoclopramid"
    ],
    "correct": 3,
    "explanation": "Domperidon và Metoclopramid đối kháng thụ thể Dopamin D2 ở đường tiêu hóa và CTZ, làm tăng trương lực cơ vòng thực quản dưới (LES), tăng nhu động hang vị dạ dày và thúc đẩy làm rỗng dạ dày, giảm áp lực trào ngược lên thực quản.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 342,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng phụ run cơ đầu ngón tay (Tremor) và hồi hộp đánh trống ngực khi sử dụng Salbutamol liều cao là do cơ chế nào?",
    "options": [
      "Kích thích thụ thể beta-2 adrenergic tại cơ vân và phản xạ giao cảm kích thích tim do giãn mạch ngoại vi",
      "Ức chế thụ thể dopamin D2 tại thể vân của não",
      "Kích thích thụ thể muscarinic M3 tại các hạch giao cảm",
      "Làm hạ natri máu sâu gây rối loạn dẫn truyền thần kinh cơ"
    ],
    "correct": 0,
    "explanation": "Run ngón tay là tác dụng phụ phổ biến nhất của SABA, do kích thích thụ thể beta-2 trên tế bào cơ vân. Đánh trống ngực xuất phát từ giãn tiểu động mạch ngoại vi gây tụt huyết áp kích hoạt phản xạ giao cảm, và một phần do thuốc liều cao kích thích thụ thể beta-1 ở tim.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 343,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Roflumilast là một thuốc uống mới được phê duyệt trong điều trị duy trì bệnh phổi tắc nghẽn mạn tính (COPD) giai đoạn nặng có cơ chế hoạt động là gì?",
    "options": [
      "Kháng thụ thể Interleukin-4 và Interleukin-13",
      "Ức chế chọn lọc enzym Phosphodiesterase-4 (PDE-4), làm tăng cAMP nội bào trong các tế bào viêm đường thở",
      "Chủ vận thụ thể alpha-2 adrenergic trung ương",
      "Chẹn kênh Kali phụ thuộc ATP ở biểu mô niêm mạc phế quản"
    ],
    "correct": 1,
    "explanation": "Roflumilast là thuốc ức chế chọn lọc enzym PDE-4 (isoenzym chiếm ưu thế trong các tế bào viêm như bạch cầu trung tính, đại thực bào và lympho bào), làm tăng cAMP nội bào, ức chế quá trình viêm mạn tính và giảm tần suất các đợt bùng phát COPD nặng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 344,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tại sao việc uống nước ép bưởi chùm hoặc nước ép táo, cam lại làm giảm đáng kể sinh khả dụng đường uống của Fexofenadin tới 30 - 40%?",
    "options": [
      "Nước ép hoa quả phá hủy cấu trúc amin bậc 3 của Fexofenadin trong dạ dày",
      "Các flavonoid trong nước hoa quả ức chế polypeptide vận chuyển anion hữu cơ OATP1A2 ở niêm mạc ruột non cần thiết để hấp thu Fexofenadin",
      "Nước hoa quả làm tăng bài tiết thuốc qua mật gấp 5 lần",
      "Nước hoa quả làm kết tủa Fexofenadin thành dạng tinh thể không tan"
    ],
    "correct": 1,
    "explanation": "Fexofenadin hấp thu qua ruột phụ thuộc vào protein vận chuyển OATP1A2. Naringin và hesperidin trong nước bưởi, cam, táo ức chế OATP1A2, làm giảm hấp thu Fexofenadin từ 30-40%. Cần uống Fexofenadin với nước lọc, cách xa nước hoa quả ít nhất 2-4 giờ.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 345,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Đặc điểm dược động học của Bilastin - thuốc kháng H1 thế hệ 2 mới giúp thuốc này hầu như không có tương tác chuyển hóa qua gan là gì?",
    "options": [
      "Thuốc hầu như không bị chuyển hóa qua enzym Cytochrom P450, đào thải chủ yếu dưới dạng nguyên vẹn qua phân và nước tiểu",
      "Thuốc chuyển hóa 100% qua liên hợp acid glucuronic tại thận",
      "Thuốc bị bất hoạt hoàn toàn bởi enzym MAO ở tế bào ruột",
      "Thuốc liên kết cộng hóa trị vĩnh viễn với albumin huyết tương"
    ],
    "correct": 0,
    "explanation": "Bilastin hầu như không qua chuyển hóa gan (khoảng 95% đào thải dạng nguyên vẹn qua phân và nước tiểu), không tương tác với hệ enzym CYP450, do đó rất an toàn và không cần chỉnh liều ở bệnh nhân suy giảm chức năng gan.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 346,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc nào sau đây điều trị nhiễm trùng roi âm đạo (Trichomonas vaginalis) có thể dùng phác đồ liều duy nhất 2g đường uống cho cả bệnh nhân và bạn tình?",
    "options": [
      "Albendazol 400 mg",
      "Metronidazol (hoặc Tinidazol liều duy nhất 2g)",
      "Nystatin viên đặt",
      "Clotrimazol bôi ngoài"
    ],
    "correct": 1,
    "explanation": "Metronidazol hoặc Tinidazol liều duy nhất 2g đường uống là phác đồ chuẩn điều trị viêm âm đạo do Trichomonas vaginalis. Nguyên tắc bắt buộc là phải điều trị đồng thời cho cả bạn tình/chồng để ngăn chặn tái nhiễm chéo ('hiệu ứng bóng bàn').",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 347,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Kháng sinh nhóm Nitroimidazol nào sau đây có thời gian bán thải dài nhất (khoảng 12 - 14 giờ, dài gấp đôi Metronidazol) và ít gây vị kim loại khó chịu ở miệng hơn?",
    "options": [
      "Metronidazol",
      "Ornidazol",
      "Tinidazol",
      "Secnidazol"
    ],
    "correct": 3,
    "explanation": "Tinidazol có thời gian bán hủy dài hơn (12-14 giờ so với 8 giờ của Metronidazol), cho phép dùng 1 lần/ngày và ít gây tác dụng phụ buồn nôn, đắng miệng hay vị kim loại khó chịu hơn Metronidazol, giúp bệnh nhân dung nạp tốt hơn.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 348,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tại sao nhóm thuốc nhựa gắn acid mật (Cholestyramin) lại bị chống chỉ định ở bệnh nhân có nồng độ Triglycerid máu tăng cao (> 400 - 500 mg/dL)?",
    "options": [
      "Làm tan máu cấp tính ở người thiếu enzym G6PD",
      "Gây ức chế phản xạ bài xuất dịch mật từ túi mật",
      "Gây kích thích tế bào gan tăng tổng hợp Triglycerid và tăng bài xuất VLDL phản ứng bù trừ, làm triglycerid máu tăng vọt dễ khởi phát viêm tụy cấp",
      "Gây kết tủa protein huyết tương làm tắc vi mạch thận"
    ],
    "correct": 2,
    "explanation": "Khi acid mật bị mất qua phân, gan tăng cường chuyển hóa chuyển đổi các nguồn năng lượng thành acid mật bù trừ, kéo theo kích thích tổng hợp acid béo và bài tiết lipoprotein VLDL (giàu triglycerid). Nếu bệnh nhân đã có triglycerid cao từ trước, dùng nhựa gắn acid mật sẽ làm triglycerid tăng bùng phát.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 349,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Kháng sinh nào sau đây thuộc nhóm Tetracyclin thường được phối hợp với Quinin hoặc dùng đơn độc dự phòng sốt rét ngắn hạn cho người đi vào vùng dịch tễ kháng thuốc?",
    "options": [
      "Doxycyclin",
      "Amoxicillin",
      "Erythromycin",
      "Ciprofloxacin"
    ],
    "correct": 0,
    "explanation": "Doxycyclin có tác dụng ức chế apicoplast (bào quan có nguồn gốc thực vật thiết yếu của Plasmodium), làm ký sinh trùng chết chậm ở thế hệ phân chia tiếp theo. Thuốc được dùng phối hợp với Quinin hoặc dùng dự phòng sốt rét cho người lớn đi vào vùng kháng đa thuốc (uống 100 mg/ngày).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 350,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tafenoquine là một thuốc chống sốt rét dẫn chất 8-aminoquinolin thế hệ mới có ưu thế vượt trội so với Primaquin ở đặc điểm nào?",
    "options": [
      "Hoàn toàn không gây tan máu ở người thiếu enzym G6PD",
      "Thời gian bán thải cực dài (khoảng 2 - 3 tuần), cho phép điều trị tiệt căn P. vivax chỉ bằng một LIỀU DUY NHẤT thay vì phải uống 14 ngày như Primaquin",
      "Thuốc chỉ dùng bằng đường tiêm tĩnh mạch chậm",
      "Có thể dùng an toàn tuyệt đối cho phụ nữ mang thai 3 tháng đầu"
    ],
    "correct": 1,
    "explanation": "Tafenoquine có T1/2 sinh học kéo dài 14-20 ngày. Trong điều trị tiệt căn P. vivax, Tafenoquine chỉ cần dùng một liều duy nhất 300 mg (sau khi điều trị cắt cơn), khắc phục triệt để vấn đề không tuân thủ phác đồ 14 ngày của Primaquin (tuy nhiên vẫn bắt buộc phải xét nghiệm G6PD trước khi dùng).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 351,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân nam 58 tuổi dùng thuốc trợ tim có biểu hiện vú to ở nam giới (gynecomastia) và giảm ham muốn tình dục sau thời gian dài điều trị. Tác dụng phụ nội tiết này của Digoxin bắt nguồn từ cơ chế phân tử nào?",
    "options": [
      "Digoxin ức chế trực tiếp enzym aromatase tại mô mỡ ngoại vi",
      "Cấu trúc steroid của aglycon có khả năng gắn chéo và kích hoạt nhẹ thụ thể Estrogen",
      "Kích thích tuyến yên tăng bài tiết prolactin thông qua ức chế dopamin",
      "Ức chế sản sinh testosterone tại tế bào Leydig tinh hoàn do làm hạ calci nội bào"
    ],
    "correct": 1,
    "explanation": "Khung steroid của aglycon trong phân tử Digoxin có độ tương đồng cấu trúc nhất định với các hormon sinh dục, có thể liên kết chéo với thụ thể Estrogen và cạnh tranh với thụ thể Androgen, gây chứng vú to ở nam giới (gynecomastia) khi dùng dài ngày.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 352,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Khi bệnh nhân suy tim có phù phổi cấp kháng trị với thuốc lợi tiểu, Dopamin ở khoảng liều nào sau đây được gọi là 'liều thận' giúp kích hoạt thụ thể D1 gây giãn mạch thận và tăng lưu lượng nước tiểu?",
    "options": [
      "Liều thấp từ 1 đến 3 mcg/kg/phút tác động ưu thế trên thụ thể dopaminergic D1",
      "Liều trung bình từ 5 đến 10 mcg/kg/phút tác động ưu thế trên thụ thể beta-1 adrenergic",
      "Liều cao trên 15 mcg/kg/phút tác động ưu thế trên thụ thể alpha-1 adrenergic co mạch",
      "Liều bolus ngắt quãng 50 mcg/kg tiêm tĩnh mạch nhanh mỗi 4 giờ"
    ],
    "correct": 0,
    "explanation": "Dopamin liều thấp (1-3 mcg/kg/phút) kích thích thụ thể D1 ở giường mạch thận, mạc treo và vành, gây giãn mạch thận tăng dòng máu tưới thận và tăng lọc. Liều trung bình (5-10 mcg/kg/phút) kích thích beta-1 tăng co bóp tim. Liều cao (> 10 mcg/kg/phút) kích thích alpha-1 gây co mạch nâng HA.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
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
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tại sao không nên dùng thuốc chẹn kênh calci Dihydropyridine (DHP) tác dụng ngắn (như Nifedipin viên nang bóp dưới lưỡi) trong cơn đau thắt ngực cấp tính hoặc hội chứng vành cấp?",
    "options": [
      "Làm co thắt tiểu phế quản dẫn đến suy hô hấp cấp tính",
      "Gây tụt huyết áp đột ngột kích hoạt phản xạ giao cảm mạnh làm nhịp tim nhanh vọt, tăng nhu cầu oxy và dễ khởi phát nhồi máu cơ tim",
      "Làm đông vón máu tức thì trong lòng động mạch vành do kết tập tiểu cầu",
      "Gây suy thận cấp vô niệu do làm co mạch thận chọn lọc"
    ],
    "correct": 1,
    "explanation": "Nifedipin tác dụng ngắn gây tụt huyết áp quá nhanh và mạnh, kích hoạt cung phản xạ áp thụ quan làm bùng phát cơn bão giao cảm: tim đập nhanh vọt, tăng co bóp và tăng tiêu thụ oxy cơ tim, làm nặng thêm cơn thiếu máu cơ tim và tăng nguy cơ tử vong.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 357,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Khi điều trị phối hợp thuốc cho bệnh nhân đau thắt ngực ổn định có kèm suy tim phân suất tống máu giảm (EF < 35%), nhóm thuốc chẹn kênh calci nào sau đây bị chống chỉ định tuyệt đối?",
    "options": [
      "Thuốc chẹn kênh calci Non-Dihydropyridine (Verapamil, Diltiazem) do tác dụng ức chế co bóp cơ tim mạnh (inotropic âm)",
      "Thuốc chẹn kênh calci Dihydropyridine thế hệ 2 tác dụng kéo dài (Amlodipin)",
      "Thuốc chẹn kênh calci chọn lọc vi mạch thận như Felodipin",
      "Thuốc chẹn kênh calci thế hệ 3 có tính thân dầu cao như Lercanidipin"
    ],
    "correct": 0,
    "explanation": "Verapamil và Diltiazem có tác dụng ức chế co bóp cơ tim (inotropic âm) rất mạnh và làm chậm nhịp tim, dẫn đến suy sụp huyết động, phù phổi cấp và tử vong ở bệnh nhân suy tim có phân suất tống máu giảm (HFrEF).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 358,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng phụ kháng cholinergic (Anticholinergic) mạnh mẽ nhất trong nhóm thuốc chống loạn nhịp IA thuộc về thuốc nào, gây khô miệng, nhìn mờ, táo bón và bí tiểu?",
    "options": [
      "Quinidin",
      "Disopyramid",
      "Procainamid",
      "Lidocain"
    ],
    "correct": 1,
    "explanation": "Disopyramid có tác dụng phụ kháng cholinergic (kháng muscarinic) mạnh nhất trong nhóm IA, gây bí tiểu ở bệnh nhân phì đại tiền liệt tuyến, tăng nhãn áp ở bệnh nhân glaucom và làm nặng thêm suy tim do tác dụng ức chế co bóp cơ tim mạnh.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 359,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Ibutilide và Dofetilide là các thuốc chống loạn nhịp Nhóm III 'tinh khiết' (pure class III) được chỉ định chủ yếu qua đường tĩnh mạch để đạt mục tiêu lâm sàng nào?",
    "options": [
      "Nâng huyết áp trong sốc tim do nhồi máu cơ tim thất phải",
      "Tăng dẫn truyền qua nút nhĩ thất để điều trị block AV hoàn toàn",
      "Chuyển nhịp nhanh chóng rung nhĩ hoặc cuồng nhĩ mới xuất hiện về nhịp xoang",
      "Ức chế co thắt mạch vành trong cơn đau thắt ngực thể Prinzmetal"
    ],
    "correct": 3,
    "explanation": "Ibutilide (dạng tiêm tĩnh mạch) và Dofetilide (uống) là thuốc chẹn kênh K+ chọn lọc cao (IKr), được chỉ định hàng đầu để chuyển nhịp nhanh chóng rung nhĩ hoặc cuồng nhĩ mới khởi phát (< 48 giờ) về nhịp xoang bình thường.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 360,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tolvaptan và Conivaptan thuộc nhóm thuốc lợi tiểu mới nào (Aquaretics) được chỉ định trong hội chứng tăng tiết ADH không thích hợp (SIADH) và hạ Natri máu do suy tim?",
    "options": [
      "Thuốc ức chế thụ thể endothelin ETA",
      "Thuốc đối kháng thụ thể Vasopressin V2 (Vaptans) tại ống góp, gây thải trừ nước tự do mà không mất điện giải",
      "Thuốc ức chế kênh rò rỉ Natri tại quai Henle",
      "Thuốc chủ vận thụ thể natriuretic peptid type A"
    ],
    "correct": 1,
    "explanation": "Tolvaptan và Conivaptan là các chất đối kháng chọn lọc hoặc không chọn lọc thụ thể Vasopressin V2 (Vaptans) tại tế bào chính ống góp, ngăn cản sự di chuyển của các kênh dẫn nước Aquaporin-2 ra màng, làm tăng thải trừ nước tự do (Aquaresis) mà không làm mất điện giải, giúp nâng nồng độ Natri huyết tương.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 361,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tại sao thuốc lợi tiểu quai Furosemid khi tiêm tĩnh mạch lại có thể làm giảm triệu chứng khó thở trong phù phổi cấp ngay lập tức sau 5 - 15 phút, trước cả khi bệnh nhân bắt đầu đi tiểu?",
    "options": [
      "Thuốc làm giãn nhanh hệ tĩnh mạch dung tích lớn qua trung gian prostaglandin, làm giảm tiền gánh và giảm áp lực mao mạch phổi bít trước khi xuất hiện tác dụng bài niệu",
      "Thuốc ức chế trung khu phản xạ ho và thở nhanh ở hành não",
      "Thuốc làm tiêu các cục máu đông vi mạch phổi qua kích hoạt plasminogen",
      "Thuốc kích thích cơ hoành tăng co bóp làm nở các phế nang bị ngập nước"
    ],
    "correct": 0,
    "explanation": "Khi tiêm tĩnh mạch, Furosemid kích thích tổng hợp prostaglandin tại thận và phổi gây giãn nhanh hệ tĩnh mạch dung tích lớn sau 5-15 phút, làm giảm hồi lưu tĩnh mạch về tim (giảm tiền gánh), hạ áp lực đổ đầy thất trái và áp lực mao mạch phổi bít, cắt nhanh cơn phù phổi cấp trước khi thận kịp bài niệu (tác dụng lợi niệu thường sau 20-30 phút).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 362,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Vì sao Domperidon được ưa chuộng hơn Metoclopramid trong điều trị chứng trào ngược dạ dày thực quản và buồn nôn ở bệnh nhân cao tuổi?",
    "options": [
      "Domperidon hầu như không vượt qua hàng rào máu não nên rất hiếm khi gây tác dụng phụ ngoại tháp (run tay, loạn trương lực cơ)",
      "Domperidon có tác dụng ức chế trực tiếp thụ thể proton tại tế bào viền",
      "Domperidon hoàn toàn không bị chuyển hóa qua gan nên an toàn cho người xơ gan",
      "Domperidon có thời gian bán thải kéo dài trên 72 giờ chỉ cần uống 1 lần mỗi tuần"
    ],
    "correct": 0,
    "explanation": "Metoclopramid thân dầu qua được hàng rào máu não chẹn thụ thể D2 ở thể vân gây rối loạn vận động ngoại tháp (hội chứng Parkinson, loạn trương lực cấp, rối loạn vận động muộn). Domperidon khó qua hàng rào máu não nên rất ít nguy cơ này.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 363,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Xét nghiệm vi khuẩn Helicobacter pylori bằng 'Test hơi thở Ure' (Urea Breath Test - UBT) đòi hỏi bệnh nhân phải ngừng sử dụng thuốc ức chế bơm proton (PPI) trong thời gian tối thiểu bao lâu trước khi làm test để tránh kết quả âm tính giả?",
    "options": [
      "Ngừng trước 24 giờ",
      "Ngừng tối thiểu 2 tuần (14 ngày)",
      "Ngừng tối thiểu 3 tháng",
      "Không cần ngừng thuốc nếu làm xét nghiệm vào buổi sáng"
    ],
    "correct": 2,
    "explanation": "PPI ức chế sự nhân lên của H. pylori và ức chế hoạt tính enzym Urease của vi khuẩn. Dùng PPI gần ngày làm test sẽ làm enzym urease không phân giải được viên uống C13/C14-ure, gây kết quả âm tính giả. Bắt buộc ngừng PPI ít nhất 2 tuần và kháng sinh 4 tuần.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 364,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc tẩy giun nào sau đây phát huy tác dụng thông qua kích hoạt trực tiếp thụ thể GABA tại cơ vân của giun, gây ưu phân cực và liệt mềm giun?",
    "options": [
      "Pyrantel pamoat",
      "Piperazin",
      "Niclosamid",
      "Praziquantel"
    ],
    "correct": 2,
    "explanation": "Piperazin là chất chủ vận tại thụ thể GABA ở màng sau synap thần kinh cơ của giun. Mở kênh Clo gây ưu phân cực màng, làm cơ giun giãn hoàn toàn và bị liệt mềm (khác với liệt cứng của Pyrantel), giun sống bị nhu động ruột đẩy ra ngoài theo phân.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 365,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tại sao khi điều trị bệnh ấu trùng sán dải lợn ở não (Neurocysticercosis) bằng Praziquantel hoặc Albendazol, bệnh nhân bắt buộc phải được điều trị phối hợp với Corticosteroid (Dexamethason)?",
    "options": [
      "Để giảm phản ứng viêm và phù não kịch phát do độc tố và xác ấu trùng sán bị tiêu diệt giải phóng ra trong mô não",
      "Để tăng nồng độ Praziquantel trong máu lên gấp 10 lần",
      "Để chống nhiễm nấm cơ hội ở màng não",
      "Để ngăn ngừa nguy cơ hạ đường huyết do sán tiêu thụ"
    ],
    "correct": 0,
    "explanation": "Khi thuốc diệt sán ngấm vào não giết chết các nang ấu trùng, kháng nguyên lạ thoát ra kích hoạt phản ứng viêm dữ dội xung quanh nang sán, gây phù não cấp tính bùng phát các cơn co giật, tăng áp lực nội sọ và tụt kẹt não tử vong. Corticosteroid dùng kèm giúp dập tắt phản ứng viêm này.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 366,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cromolyn natri và Nedocromil natri dự phòng cơn co thắt phế quản do dị ứng hoặc gắng sức theo cơ chế dược lý nào?",
    "options": [
      "Giãn trực tiếp cơ trơn phế quản qua tăng cGMP",
      "Chẹn thụ thể muscarinic tại hạch phó giao cảm",
      "Làm ổn định màng tế bào dưỡng bào (Mast cell stabilizer), ngăn cản sự mất hạt và phóng thích các chất trung gian hóa học (Histamin, Leukotriene)",
      "Ức chế trung khu hô hấp ở hành tủy"
    ],
    "correct": 3,
    "explanation": "Cromolyn và Nedocromil chẹn các kênh Clo trên màng dưỡng bào, ức chế dòng Ca2+ đi vào, làm ổn định màng tế bào mast, ngăn chặn hiện tượng mất hạt giải phóng histamin và leukotriene khi có kháng nguyên kích thích. Thuốc chỉ dùng dự phòng, không có tác dụng cắt cơn.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 367,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tại sao việc dùng Corticosteroid đường toàn thân (như Prednisolon, Methylprednisolon) liều cao ngắt quãng ngắn ngày (5-7 ngày) lại là biện pháp nền tảng trong xử trí đợt cấp hen phế quản nặng?",
    "options": [
      "Có tác dụng giãn cơ trơn phế quản tức thì sau 30 giây",
      "Làm tăng tính thấm thành mạch giúp dịch thoát ra ngoài nhanh",
      "Ức chế mạnh mẽ phản ứng viêm cấp tính, giảm phù nề niêm mạc phế quản và phục hồi độ nhạy cảm của các thụ thể beta-2 adrenergic đã bị trơ",
      "Tiêu diệt trực tiếp các vi khuẩn gây nhiễm trùng đường hô hấp dưới"
    ],
    "correct": 2,
    "explanation": "Corticosteroid toàn thân ức chế dòng tế bào viêm và cytokin, giảm phù nề và xuất tiết dịch nhầy lòng phế quản; đồng thời thuốc làm tăng phiên mã gen thụ thể beta-2 (up-regulation), khôi phục độ nhạy cảm của thụ thể beta-2 vốn bị trơ sau khi dùng quá nhiều SABA.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 368,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hội chứng 'Dị ứng phấn hoa' gây ngứa mắt, chảy nước mắt, ngứa mũi và hắt hơi liên tục được khởi phát chủ yếu do Histamin kích hoạt thụ thể nào tại các đầu mút dây thần kinh cảm giác?",
    "options": [
      "Thụ thể Histamin H2 liên kết protein Gs",
      "Thụ thể Histamin H3 ở màng trước synap thần kinh trung ương",
      "Thụ thể Histamin H1 liên kết protein Gq/11 làm tăng IP3 và ion calci nội bào kích thích đầu mút sợi thần kinh cảm giác C",
      "Thụ thể Histamin H4 trên màng tế bào tủy xương"
    ],
    "correct": 2,
    "explanation": "Histamin gắn vào thụ thể H1 trên các sợi thần kinh cảm giác không myelin hóa (sợi C), kích hoạt phospholipase C sinh IP3/DAG tăng Ca2+ nội bào, phát sinh các xung động thần kinh gây cảm giác ngứa ngáy dữ dội và phản xạ hắt hơi.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 369,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tương tác nguy hiểm khi dùng thuốc kháng Histamin H1 thế hệ 1 phối hợp với rượu (ethanol) hoặc thuốc an thần nhóm Benzodiazepin là gì?",
    "options": [
      "Triệt tiêu hoàn toàn tác dụng chống dị ứng của thuốc kháng H1",
      "Làm giảm hấp thu rượu qua niêm mạc dạ dày",
      "Gây hoại tử tế bào gan cấp do tạo chất chuyển hóa NAPQI",
      "Hiệp đồng ức chế thần kinh trung ương quá mức, gây ngủ sâu li bì, hạ thân nhiệt, ức chế trung khu hô hấp và hôn mê"
    ],
    "correct": 3,
    "explanation": "Cả rượu, benzodiazepin và kháng H1 thế hệ 1 đều có tác dụng ức chế hệ thần kinh trung ương. Khi phối hợp, chúng hiệp đồng tăng cường tác dụng an thần, làm chậm phản xạ vận động, có thể dẫn tới ức chế hô hấp và tử vong do tai nạn hoặc hôn mê.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 370,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng phụ tăng nguy cơ hình thành sỏi mật Calci - Cholesterol (Gallstones / Cholelithiasis) là cảnh báo an toàn gắn liền với nhóm thuốc hạ mỡ máu nào?",
    "options": [
      "Nhóm Fibrat (Fenofibrat, Gemfibrozil)",
      "Nhóm thuốc ức chế PCSK9",
      "Nhóm acid béo Omega-3 tinh chế",
      "Nhóm thuốc Statin cường độ cao"
    ],
    "correct": 1,
    "explanation": "Fibrat ức chế enzym 7-alpha-hydroxylase (bước giới hạn chuyển cholesterol thành acid mật), làm giảm tổng hợp acid mật và tăng bài tiết cholesterol tự do vào dịch mật. Tình trạng bão hòa cholesterol trong túi mật này dẫn đến dễ kết tinh và hình thành sỏi mật (cholelithiasis).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 371,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Statin nào sau đây được đào thải chủ yếu qua thận và gan mà hoàn toàn không qua chuyển hóa bởi enzym Cytochrom P450, do đó có nguy cơ tương tác thuốc thấp nhất trong các Statin?",
    "options": [
      "Simvastatin",
      "Lovastatin",
      "Atorvastatin",
      "Pravastatin (hoặc Rosuvastatin / Pitavastatin)"
    ],
    "correct": 3,
    "explanation": "Pravastatin tan nhiều trong nước, được bài xuất qua cả gan và thận và hoàn toàn không bị chuyển hóa qua hệ enzym CYP450, do đó không bị ảnh hưởng bởi các thuốc ức chế hoặc cảm ứng CYP3A4, là lựa chọn an toàn khi cần phối hợp nhiều thuốc phức tạp (như thuốc chống thải ghép, thuốc kháng HIV).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 372,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hiện tượng ký sinh trùng sốt rét Plasmodium falciparum kháng thuốc Chloroquin xuất phát từ cơ chế đột biến gen nào?",
    "options": [
      "Đột biến enzym dihydrofolat reductase làm enzym không gắn thuốc",
      "Đột biến protein vận chuyển màng Pfcrt (P. falciparum chloroquine resistance transporter), bơm tống Chloroquin ra khỏi không bào tiêu hóa",
      "Ký sinh trùng ngừng hoàn toàn việc tiêu thụ hemoglobin",
      "Tăng sinh lớp vỏ protein dày ngăn cản thuốc khuếch tán"
    ],
    "correct": 3,
    "explanation": "Đột biến gen Pfcrt (đặc biệt là đột biến K76T) làm thay đổi điện tích protein vận chuyển màng không bào tiêu hóa, biến nó thành bơm tống thuốc chủ động tống Chloroquin mang điện tích dương ra khỏi không bào, làm nồng độ thuốc không đủ ức chế tạo hemozoin.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 373,
    "subject": "duocly2",
    "chapter": "KTGHP",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Khi điều trị bệnh Parkinson, việc phối hợp Levodopa với Carbidopa (hoặc Benserazid) mang lại ưu thế dược động học quyết định nào?",
    "options": [
      "Carbidopa kích thích tổng hợp dopamin trực tiếp tại vỏ não",
      "Carbidopa làm tăng đào thải Levodopa qua nước tiểu",
      "Carbidopa ức chế enzym Dopa-decarboxylase ở ngoại vi nhưng không qua được hàng rào máu não, giúp bảo vệ Levodopa vào não tối đa và giảm tác dụng phụ nôn mửa ở ngoại vi",
      "Carbidopa là chất đối kháng thụ thể muscarinic tại thể vân"
    ],
    "correct": 2,
    "explanation": "Dopamin không qua được hàng rào máu não nhưng Levodopa qua được. Enzym Dopa-decarboxylase ở ngoại vi chuyển hóa 99% Levodopa thành dopamin ngay ngoài máu gây nôn mửa và tụt HA. Carbidopa chỉ ức chế enzym này ở ngoại vi (không vào não), bảo vệ Levodopa vào não tăng gấp 5 lần và triệt tiêu tác dụng phụ ngoại vi.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 374,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Calcitonin là hormon được tiết ra từ tế bào cận nang (tế bào C) của tuyến giáp có tác dụng hạ Calci máu sinh lý thông qua cơ chế nào?",
    "options": [
      "Tăng hấp thu calci qua niêm mạc ruột non phụ thuộc vitamin D",
      "Kích thích trực tiếp các tế bào hủy cốt bào (osteoclast) tăng tiêu xương",
      "Gắn vào thụ thể trên bề mặt tế bào hủy cốt bào (osteoclast), ức chế nhanh chóng hoạt tính tiêu xương của tế bào này và tăng đào thải Calci qua thận",
      "Chuyển đổi calci tự do trong máu thành dạng kết tủa lắng đọng ở gan"
    ],
    "correct": 2,
    "explanation": "Calcitonin gắn vào thụ thể trên màng tế bào hủy cốt bào (osteoclast), làm bất hoạt và teo các riềm bàn chải của tế bào hủy xương trong vòng vài phút, ngăn cản giải phóng calci từ xương vào máu; đồng thời tăng bài xuất Ca2+ qua nước tiểu, dùng trị tăng calci máu cấp và bệnh Paget xương.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 375,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Teriparatide là một đoạn peptid tái tổ hợp của hormon tuyến cận giáp người (rhPTH 1-34) có tác dụng kích thích tạo xương mạnh mẽ trong điều trị loãng xương nặng khi được sử dụng theo chế độ liều nào?",
    "options": [
      "Tiêm dưới da ngắt quãng mỗi ngày 1 lần để kích thích ưu thế hoạt động của tế bào tạo cốt bào (osteoblast)",
      "Truyền tĩnh mạch liên tục 24/24 giờ bằng bơm tiêm điện",
      "Uống liều cao mỗi tuần một lần cùng bữa ăn",
      "Cấy que phóng thích chậm dưới da duy trì nồng độ cao liên tục trong 5 năm"
    ],
    "correct": 0,
    "explanation": "Nồng độ PTH cao liên tục (như trong cường cận giáp) sẽ kích thích hủy xương. Tuy nhiên, khi tiêm dưới da ngắt quãng 1 lần mỗi ngày (pulsatile administration), nồng độ Teriparatide tăng đỉnh ngắn hạn sẽ kích thích ưu thế các tế bào tạo cốt bào (osteoblast) tổng hợp chất nền xương mới.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 376,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc ức chế enzym Alpha-glucosidase (Acarbose, Miglitol) làm giảm đường huyết sau ăn theo cơ chế sinh lý nào tại đường tiêu hóa?",
    "options": [
      "Ức chế cạnh tranh các enzym alpha-glucosidase (maltase, sucrase, glucoamylase) ở diềm bàn chải ruột non, làm chậm quá trình phân giải carbohydrate phức tạp thành glucose tự do",
      "Ức chế enzym pepsin phân hủy protein dạ dày",
      "Tăng cường hoạt tính của enzym men vi sinh vật đại tràng",
      "Tạo phức chelate không tan với phân tử đường đơn trong lòng ruột"
    ],
    "correct": 0,
    "explanation": "Acarbose ức chế thuận nghịch các enzym alpha-glucosidase ở diềm bàn chải ruột non, làm chậm quá trình cắt chuỗi tinh bột, dextrin và đường đôi thành glucose, do đó làm chậm và dàn trải sự hấp thu glucose, làm giảm đỉnh đường huyết sau ăn mà không gây hạ đường huyết.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 377,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng không mong muốn phổ biến nhất khiến nhiều bệnh nhân phải ngừng thuốc Acarbose là gì do lượng carbohydrate không tiêu hóa bị đẩy xuống đại tràng?",
    "options": [
      "Táo bón kéo dài kèm theo sa búi trĩ",
      "Viêm loét trợt niêm mạc thực quản dưới",
      "Đầy hơi, sôi bụng, trung tiện nhiều (đánh rắm) và tiêu chảy do vi khuẩn đại tràng lên men carbohydrate",
      "Chảy máu đường tiêu hóa trên do ăn mòn niêm mạc"
    ],
    "correct": 2,
    "explanation": "Carbohydrate không được hấp thu ở ruột non sẽ trôi xuống ruột già, bị hệ vi khuẩn kỵ khí đại tràng lên men yếm khí sinh ra nhiều khí (H2, CO2, CH4) và acid béo chuỗi ngắn, gây chướng bụng đầy hơi, sôi bụng, trung tiện liên tục và tiêu chảy phân lỏng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 378,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Nhóm thuốc ức chế Glycoprotein IIb/IIIa (như Abciximab, Tirofiban, Eptifibatid) là thuốc kháng kết tập tiểu cầu mạnh nhất nhờ cơ chế khóa chặng cuối nào?",
    "options": [
      "Ức chế sự giải phóng hạt đặc và hạt alpha của tiểu cầu",
      "Chẹn thụ thể Collagen loại 1 dưới lớp nội mạc mạch máu",
      "Khóa thụ thể GP IIb/IIIa, ngăn cản sự gắn kết của Fibrinogen tạo cầu nối liên kết chéo giữa các tiểu cầu với nhau",
      "Ức chế tổng hợp yếu tố von Willebrand (vWF) từ tế bào nội mô"
    ],
    "correct": 3,
    "explanation": "Thụ thể integrin GP IIb/IIIa là con đường chung cuối cùng của mọi quá trình kết tập tiểu cầu. Khi được hoạt hóa, GP IIb/IIIa gắn với Fibrinogen tạo cầu nối liên kết các tiểu cầu thành khối nút tiểu cầu. Thuốc chẹn GP IIb/IIIa khóa thụ thể này làm tê liệt hoàn toàn sự kết tập tiểu cầu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 379,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc tiêu sợi huyết Alteplase (recombinant tissue plasminogen activator - rtPA) làm tan cục huyết khối thông qua phản ứng enzym sinh học nào?",
    "options": [
      "Thủy phân trực tiếp các liên kết peptid của phân tử Thrombin",
      "Bất hoạt Yếu tố XIIIa làm phân rã liên kết chéo fibrin",
      "Chuyển đổi enzym Plasminogen bị bẫy trong cục máu đông thành enzym Plasmin có hoạt tính tiêu hủy mạng lưới sợi Fibrin",
      "Tăng cường hoạt tính của protein chống đông Protein S"
    ],
    "correct": 2,
    "explanation": "Alteplase là chất hoạt hóa plasminogen mô tái tổ hợp (rtPA), có ái lực rất cao với fibrin trong cục huyết khối. Tại bề mặt cục đông, Alteplase chuyển hóa plasminogen gắn fibrin thành plasmin; plasmin là enzym protease tiêu hủy mạng lưới fibrin làm tan cục huyết khối tái thông mạch máu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 380,
    "subject": "duocly2",
    "chapter": "Vitamin",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hội chứng 'Tăng áp lực nội sọ giả u não' (Pseudotumor cerebri) với đau đầu dữ dội, buồn nôn, phù gai thị giác hai bên là biểu hiện nhiễm độc đặc trưng của tình trạng ngộ độc cấp hoặc mạn tính vitamin nào?",
    "options": [
      "Vitamin A (Retinol liều cao tích lũy)",
      "Vitamin B6",
      "Vitamin B1",
      "Vitamin B12"
    ],
    "correct": 0,
    "explanation": "Ngộ độc thừa Vitamin A (Hypervitaminosis A) làm tăng áp lực nội sọ lành tính (Pseudotumor cerebri) do tăng tiết và giảm hấp thu dịch não tủy, gây đau đầu dữ dội, nhìn đôi, phù gai thị giác (dễ nhầm với u não), rụng tóc, bong tróc da và đau nhức xương khớp.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 381,
    "subject": "duocly2",
    "chapter": "Vitamin",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tổn thương thần kinh cảm giác ngoại biên không hồi phục (bệnh thần kinh cảm giác dạng mang bốt, mất điều hòa cảm giác) có thể xảy ra khi lạm dụng vitamin nào sau đây ở liều cao kéo dài (> 500 mg - 2 g/ngày)?",
    "options": [
      "Vitamin B1",
      "Vitamin B2",
      "Vitamin B6 (Pyridoxin liều cao kéo dài)",
      "Vitamin C"
    ],
    "correct": 2,
    "explanation": "Mặc dù là vitamin tan trong nước, Pyridoxin (B6) dùng liều rất cao kéo dài (> 500mg/ngày trong nhiều tháng) gây độc trực tiếp cho các hạch rễ sau tủy sống (dorsal root ganglion), dẫn đến bệnh thần kinh cảm giác ngoại biên nặng (mất cảm giác rung, mất điều hòa cảm giác, dị cảm chi dưới).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 382,
    "subject": "duocly2",
    "chapter": "Thuốc chữa thiếu máu",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Dấu hiệu phân có màu đen nhánh khi uống các chế phẩm Sắt đường uống có đặc điểm phân biệt nào so với phân đen do xuất huyết tiêu hóa trên?",
    "options": [
      "Phân đen do uống sắt là hiện tượng hóa học lành tính bình thường (do sắt sulfid FeS tạo thành), phân thường thành khuôn đặc và xét nghiệm tìm máu ẩn trong phân âm tính",
      "Phân đen do uống sắt có mùi khắm đặc trưng của máu thoái hóa",
      "Phân đen do uống sắt luôn kèm theo nôn ra máu tươi",
      "Phân đen do uống sắt chỉ xuất hiện sau khi ngừng thuốc 1 tuần"
    ],
    "correct": 0,
    "explanation": "Sắt không hấp thu phản ứng với H2S trong lòng ruột tạo kết tủa Sắt sulfid (FeS) màu đen. Đây là hiện tượng sinh lý hoàn toàn vô hại, phân đen nhưng không lỏng nát, không có mùi thối khẳm tanh của máu thoái hóa và xét nghiệm máu ẩn trong phân (FOBT) âm tính.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 383,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Sofosbuvir là một hoạt chất mang tính cách mạng trong điều trị dứt điểm viêm gan virus C (HCV) mạn tính có cơ chế tác dụng phân tử là gì?",
    "options": [
      "Chất tương tự nucleotid ức chế chọn lọc enzym RNA polymerase NS5B phụ thuộc RNA của virus viêm gan C, gây kết thúc sớm chuỗi RNA",
      "Ức chế enzym protease NS3/4A của virus",
      "Chẹn thụ thể nhập bào CD81 ở tế bào gan",
      "Kích thích sản xuất interferon nội sinh"
    ],
    "correct": 0,
    "explanation": "Sofosbuvir là một tiền chất nucleotide (dẫn xuất uridin), được chuyển hóa trong tế bào gan thành dạng có hoạt tính triphosphate (GS-461203). Dạng này cạnh tranh với UTP, gắn vào chuỗi RNA đang tổng hợp bởi enzym NS5B RNA polymerase của HCV gây kết thúc sớm chuỗi sao chép, chữa khỏi > 95% viêm gan C.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 384,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Imatinib (Glivec) là thuốc điều trị đích kinh điển đã thay đổi hoàn toàn tiên lượng của bệnh Lơ-xê-mi kinh dòng tủy (CML) nhờ ức chế chọn lọc enzym Tyrosine Kinase của protein đột biến nào?",
    "options": [
      "Protein dung hợp BCR-ABL (được mã hóa bởi nhiễm sắc thể Philadelphia t(9;22))",
      "Thụ thể yếu tố phát triển biểu mô EGFR",
      "Thụ thể yếu tố phát triển nội mô mạch máu VEGFR",
      "Protein đột biến BRAF V600E"
    ],
    "correct": 0,
    "explanation": "Chuyển đoạn nhiễm sắc thể Philadelphia t(9;22) tạo ra gen dung hợp BCR-ABL mã hóa protein tyrosine kinase hoạt động liên tục kích thích tế bào tủy tăng sinh mất kiểm soát. Imatinib chẹn chọn lọc túi gắn ATP của enzym BCR-ABL tyrosine kinase, cắt đứt tín hiệu sinh ung thư, đưa > 90% bệnh nhân CML về lui bệnh hoàn toàn.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 385,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Dimercaprol (BAL - British Anti-Lewisite) là thuốc gắp kim loại nặng qua đường tiêm bắp sâu được phát minh trong thế chiến để giải độc kim loại nào?",
    "options": [
      "Ngộ độc muối Calci clorid",
      "Ngộ độc Thạch tín (Asen), Thủy ngân và Vàng",
      "Ngộ độc Kali clorid",
      "Ngộ độc Nhôm phosphat"
    ],
    "correct": 2,
    "explanation": "Dimercaprol (BAL) chứa hai nhóm thiol (-SH) cạnh nhau, cạnh tranh với các enzym của tế bào để liên kết với các kim loại nặng có độc tính ái lực cao với nhóm -SH như Asen (thạch tín), Thủy ngân vô cơ và muối Vàng, tạo phức hợp vòng 5 cạnh bền vững đào thải qua nước tiểu và đường mật.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 386,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc chống đau thắt ngực nào sau đây được phân loại vào nhóm thuốc mở kênh Kali nhạy cảm ATP (K_ATP opener) và dẫn xuất nitrat?",
    "options": [
      "Ranolazine",
      "Ivabradine",
      "Trimetazidine",
      "Nicorandil"
    ],
    "correct": 3,
    "explanation": "Nicorandil là phân tử lai (hybrid) độc đáo: mang nhóm nitrat (-ONO2) giúp giải phóng NO kích thích cGMP gây giãn tĩnh mạch, đồng thời có cấu trúc mở kênh K_ATP gây giãn tiểu động mạch vành.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 387,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Nguyên nhân chính khiến Isosorbid dinitrat (ISDN) có sinh khả dụng đường uống thấp và dao động thất thường (khoảng 20-25%) so với Isosorbid-5-mononitrat là gì?",
    "options": [
      "Bị phá hủy hoàn toàn bởi acid dịch vị dạ dày trong môi trường pH < 2",
      "Bị chuyển hóa bước đầu qua gan rất mạnh (First-pass hepatic metabolism) bởi enzym glutathione-organic nitrate reductase",
      "Tạo phức chelate không hấp thu với ion calci trong lòng ruột non",
      "Bị bơm tống thuốc P-glycoprotein tống ngược toàn bộ vào lòng ruột"
    ],
    "correct": 1,
    "explanation": "ISDN bị chuyển hóa bước đầu qua gan rất lớn (First-pass metabolism) bởi enzym glutathione-organic nitrate reductase ở gan, chỉ khoảng 20-25% liều uống vào được tuần hoàn chung. Ngược lại, ISMN không bị gan chuyển hóa bước đầu nên sinh khả dụng đạt 100%.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 388,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Vị trí tác động huyết động học nào sau đây giải thích tại sao Nitroglycerin liều cao tiêm tĩnh mạch lại có thể làm giảm huyết áp động mạch và hậu gánh tim?",
    "options": [
      "Ức chế trực tiếp dòng calci đi vào tế bào cơ tim tâm thất",
      "Chẹn thụ thể alpha-1 adrenergic tại các động mạch lớn ở chi",
      "Ở liều cao, thuốc mất tính chọn lọc tĩnh mạch và bắt đầu gây giãn các tiểu động mạch kháng lực ngoại vi",
      "Kích thích trung tâm ức chế vận mạch ở hành não làm giãn mạch toàn thân"
    ],
    "correct": 2,
    "explanation": "Ở liều thấp điều trị, Nitroglycerin chọn lọc giãn tĩnh mạch (giảm tiền gánh). Khi tăng liều cao tiêm truyền tĩnh mạch, thuốc mất dần tính chọn lọc và bắt đầu gây giãn trực tiếp các tiểu động mạch kháng lực ngoại vi, làm hạ sức cản ngoại vi (giảm hậu gánh) và hạ huyết áp động mạch.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 389,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Biến chứng loạn nhịp do ngộ độc Lidocain khi tiêm tĩnh mạch quá liều thường đi kèm với các dấu hiệu ngộ độc cơ quan nào xuất hiện trước tiên?",
    "options": [
      "Độc tính thần kinh trung ương (chóng mặt, tê quanh miệng, nói lắp, lú lẫn, co giật toàn thể)",
      "Độc tính trên biểu mô phế quản gây co thắt phế quản dạng hen",
      "Suy thận cấp hoại tử ống thận cấp tính có protein niệu",
      "Hội chứng hoại tử tế bào gan bùng phát với vàng da ứ mật"
    ],
    "correct": 0,
    "explanation": "Lidocain qua hàng rào máu não rất nhanh. Triệu chứng độc tính sớm nhất của Lidocain là độc tính thần kinh trung ương: tê bì quanh miệng, dị cảm lưỡi, chóng mặt, ù tai, nói ngọng, co giật giật cơ và cuối cùng là ức chế hô hấp, hôn mê.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 390,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Vernakalant là một thuốc chống loạn nhịp mới có tác dụng chuyển nhịp rung nhĩ cấp tính chọn lọc trên tâm nhĩ nhờ cơ chế nào?",
    "options": [
      "Chẹn kênh calci typ T ở màng tế bào tâm thất",
      "Chẹn các dòng ion Kali chọn lọc ở tâm nhĩ (IKur) và chẹn kênh Natri phụ thuộc điện thế khi tần số tim cao",
      "Ức chế thụ thể adenosin A2A tại các tiểu động mạch vành",
      "Kích hoạt bơm Na+/K+-ATPase làm tăng phân cực màng tâm nhĩ"
    ],
    "correct": 1,
    "explanation": "Vernakalant tác động đa kênh nhưng có tính chọn lọc rất cao trên tâm nhĩ: chẹn kênh Kali IKur (chỉ có ở tâm nhĩ, không có ở tâm thất) và kênh IK,ACh, làm kéo dài thời kỳ trơ tâm nhĩ mà ít kéo dài thời kỳ trơ tâm thất, do đó giảm thiểu tối đa nguy cơ xoắn đỉnh thất.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 391,
    "subject": "duocly2",
    "chapter": "Thuốc chống loạn nhịp",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Khi điều trị loạn nhịp bằng Amiodaron, xét nghiệm cận lâm sàng nào sau đây bắt buộc phải được kiểm tra định kỳ mỗi 6 tháng để phát hiện sớm các tác dụng phụ đặc thù?",
    "options": [
      "Đo lưu lượng đỉnh hô hấp (PEFR) và nồng độ acid uric máu",
      "Chụp cộng hưởng từ sọ não và định lượng nồng độ calci máu",
      "Điện tâm đồ (ECG), xét nghiệm chức năng gan (AST/ALT) và chức năng tuyến giáp (TSH, FT4)",
      "Nội soi dạ dày tá tràng và định lượng nồng độ amylase huyết thanh"
    ],
    "correct": 2,
    "explanation": "Theo khuyến cáo tim mạch quốc tế, bệnh nhân dùng Amiodaron kéo dài bắt buộc phải theo dõi định kỳ: ECG (kiểm tra khoảng QT, nhịp chậm), men gan AST/ALT (độc tính gan) và chức năng tuyến giáp TSH, FT4 mỗi 6 tháng; kèm chụp X-quang phổi mỗi năm.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 392,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Rối loạn điện giải nào sau đây thường đi kèm với tình trạng nhiễm kiềm chuyển hóa khi sử dụng thuốc lợi tiểu quai hoặc Thiazid liều cao kéo dài?",
    "options": [
      "Tăng Natri máu và tăng Calci máu",
      "Tăng Kali máu và tăng Magnesi máu",
      "Hạ Kali máu (Hypokalemia) và hạ Magnesi máu (Hypomagnesemia)",
      "Hạ Natri máu nhưng tăng Kali máu ưu thế"
    ],
    "correct": 3,
    "explanation": "Thiazid và Lợi tiểu quai làm tăng lượng Na+ và dịch chảy đến ống góp. Để tái hấp thu Na+, tế bào biểu mô ống góp tăng bài tiết K+ và H+ vào nước tiểu $\\rightarrow$ gây hạ K+ máu và nhiễm kiềm chuyển hóa; đồng thời thuốc cũng làm tăng đào thải Mg2+ qua nước tiểu gây hạ Mg2+ máu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 393,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hiện tượng 'Phản ứng dội ngược' (Rebound retention) gây giữ muối và nước sau khi hết tác dụng của thuốc lợi tiểu quai có thể được khắc phục hiệu quả bằng cách nào?",
    "options": [
      "Ngừng dùng thuốc hoàn toàn và chuyển sang uống nước khoáng có ga",
      "Tăng lượng muối ăn hàng ngày lên gấp đôi để bù trừ lượng muối đã mất",
      "Bổ sung chế độ ăn giảm muối nghiêm ngặt kết hợp chia liều nhỏ nhiều lần trong ngày hoặc phối hợp thêm Thiazid",
      "Chỉ dùng thuốc 1 lần duy nhất mỗi tuần"
    ],
    "correct": 2,
    "explanation": "Khi nồng độ Furosemid trong máu giảm xuống, cơ thể kích hoạt hệ thần kinh giao cảm và hệ RAA gây tái hấp thu Na+ ồ ạt sau đó (hiệu ứng post-diuretic retention). Cách khắc phục là hạn chế lượng natri nhập vào (ăn nhạt < 2g Na/ngày) và phối hợp thêm thuốc lợi tiểu tác dụng ở vị trí khác (như Thiazid).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 394,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc kháng H2 nào sau đây có hiệu lực ức chế bài tiết acid dịch vị mạnh nhất trên mỗi miligram liều dùng (mạnh gấp 20-50 lần Cimetidin) và không gây ức chế enzym CYP450 tại gan?",
    "options": [
      "Ranitidin",
      "Famotidin",
      "Nizatidin",
      "Roxatidin"
    ],
    "correct": 1,
    "explanation": "Famotidin có vòng thiazol trong cấu trúc, là thuốc ức chế thụ thể H2 mạnh nhất (mạnh gấp 20-50 lần Cimetidin và 7-10 lần Ranitidin), không có ái lực với enzym cytochrom P450 nên không gây tương tác thuốc qua chuyển hóa gan và không kháng androgen.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 395,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng phụ viêm đại tràng giả mạc do vi khuẩn Clostridioides difficile (C. diff) bùng phát có nguy cơ gia tăng ở bệnh nhân dùng PPI dài ngày chủ yếu do nguyên nhân nào?",
    "options": [
      "Thuốc làm tăng tính thấm mao mạch mạc treo ruột đối với độc tố vi khuẩn",
      "PPI trực tiếp kích thích sự nảy mầm của nha bào vi khuẩn kỵ khí",
      "Mất đi hàng rào acid dạ dày bảo vệ tự nhiên tạo điều kiện cho các nha bào vi khuẩn sống sót vượt qua dạ dày xuống đại tràng phát triển",
      "PPI phá hủy lớp vi nhung mao của tế bào biểu mô đại tràng"
    ],
    "correct": 3,
    "explanation": "Môi trường acid dịch vị dạ dày bình thường (pH 1.5 - 2) là hàng rào tiêu diệt hầu hết vi khuẩn và nha bào xâm nhập qua đường tiêu hóa. PPI làm tăng pH dạ dày triệt tiêu hàng rào này, tạo điều kiện cho nha bào Clostridioides difficile sống sót và bùng phát ở đại tràng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 396,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc tiêu nhầy Dornase alfa (Recombinant human DNase) được chỉ định khí dung đặc hiệu trong điều trị bệnh lý đường hô hấp di truyền nào?",
    "options": [
      "Bệnh xơ nang tụy phế quản (Cystic Fibrosis)",
      "Hen phế quản dị ứng ngoại lai mạn tính",
      "Hội chứng ngưng thở khi ngủ do tắc nghẽn (OSA)",
      "Tràn dịch màng phổi dịch thấm do suy tim"
    ],
    "correct": 0,
    "explanation": "Dornase alfa là enzym deoxyribonuclease tái tổ hợp của người, có khả năng cắt thủy phân các chuỗi DNA ngoại bào do bạch cầu thoái hóa giải phóng trong chất nhầy mủ đặc quánh của bệnh nhân xơ nang (Cystic Fibrosis), làm loãng đờm rõ rệt.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 397,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hội chứng Churg-Strauss (Viêm mạch u hạt bạch cầu ái toan) là tác dụng phụ hiếm gặp nhưng đặc trưng cần theo dõi khi sử dụng nhóm thuốc hô hấp nào?",
    "options": [
      "Thuốc đối kháng thụ thể Leukotriene (Montelukast, Zafirlukast)",
      "Thuốc kích thích beta-2 adrenergic tác dụng ngắn (Salbutamol)",
      "Thuốc kháng cholinergic hít (Ipratropium)",
      "Thuốc giảm ho trung ương không opioid (Dextromethorphan)"
    ],
    "correct": 1,
    "explanation": "Hội chứng Churg-Strauss (viêm mạch tăng bạch cầu ái toan hệ thống, bệnh thần kinh ngoại biên, tổn thương tim mạch) thỉnh thoảng xuất hiện ở bệnh nhân hen điều trị bằng thuốc kháng leukotriene, thường trùng với giai đoạn bắt đầu giảm liều corticosteroid toàn thân.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 398,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc kháng H1 Diphenhydramin thường được thêm vào thành phần của các thuốc ngủ không kê đơn (OTC sleep aids) nhờ tác dụng dược lý nào?",
    "options": [
      "Tác dụng an thần gây ngủ mạnh do chẹn thụ thể H1 trung ương và thụ thể Muscarinic trong não",
      "Tác dụng hạ huyết áp qua giãn tiểu động mạch cảnh",
      "Tác dụng làm giảm thân nhiệt qua ức chế trung tâm điều nhiệt",
      "Tác dụng kích thích giải phóng melatonin từ tuyến tùng"
    ],
    "correct": 1,
    "explanation": "Diphenhydramin có tác dụng an thần và gây ngủ rất mạnh, làm rút ngắn thời gian tiềm tàng vào giấc ngủ, do đó thường được bào chế trong các thuốc ngủ không kê đơn (như Nytol, Sominex) hoặc kết hợp hạ sốt giảm đau ban đêm (Panadol ban đêm).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 399,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Biểu hiện ngộ độc cấp tính thuốc kháng Histamin H1 thế hệ 1 ở trẻ nhỏ có đặc điểm nghịch thường nào so với người lớn?",
    "options": [
      "Ở trẻ nhỏ, ngộ độc thường biểu hiện bằng trạng thái kích thích thần kinh trung ương: bồn chồn, ảo giác, co giật, sốt cao ác tính trước khi rơi vào hôn mê",
      "Hạ thân nhiệt sâu kèm theo nhịp tim chậm xoang dưới 30 lần/phút",
      "Gây tiêu chảy ồ ạt kèm theo xuất huyết tiêu hóa dưới",
      "Hoàn toàn không có biểu hiện ngộ độc do trẻ có enzym phân hủy nhanh"
    ],
    "correct": 0,
    "explanation": "Ở trẻ em, ngộ độc kháng H1 thế hệ 1 thường gây kích thích thần kinh nghịch lý do tác dụng kháng cholinergic trung ương vượt trội: kích động, co giật giật cơ, ảo giác, sốt cao (do giảm tiết mồ hôi), giãn đồng tử, sau đó mới chuyển sang ức chế hô hấp và hôn mê.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 400,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Độc tính trên thần kinh ngoại vi (bệnh thần kinh cảm giác tê bì đầu chi) và co giật khi sử dụng Metronidazol liều cao kéo dài là do cơ chế nào?",
    "options": [
      "Thuốc phá hủy màng bao myelin và tích tụ chất chuyển hóa độc trong dịch não tủy",
      "Thuốc làm hạ natri máu thẩm thấu",
      "Thuốc cạnh tranh thụ thể acetylcholin tại tủy sống",
      "Thuốc gây tắc nghẽn tĩnh mạch xoang màng cứng"
    ],
    "correct": 1,
    "explanation": "Metronidazol thân dầu qua được hàng rào máu não rất tốt. Khi dùng liều cao kéo dài (> 2-4 tuần như trong áp xe gan hoặc viêm tủy xương), thuốc tích lũy gây độc thần kinh: dị cảm đầu chi, mất điều hòa vận động tiểu não, co giật và bệnh não hồi phục khi ngừng thuốc.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 401,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân bị nhiễm sán máng (Schistosoma) có biểu hiện tiểu ra máu và xơ hóa đường tiết niệu. Thuốc nào sau đây là thuốc đặc hiệu duy nhất tiêu diệt tất cả các loài sán máng?",
    "options": [
      "Albendazol",
      "Metronidazol",
      "Praziquantel",
      "Ivermectin"
    ],
    "correct": 3,
    "explanation": "Praziquantel là thuốc điều trị đặc hiệu số 1 cho tất cả các loài sán máng (Schistosoma haematobium, S. mansoni, S. japonicum) với tỷ lệ khỏi bệnh rất cao (> 85-90%) chỉ sau 1 ngày điều trị chia liều nhỏ.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 402,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Khi phối hợp thuốc hạ lipid máu, sự kết hợp giữa Statin và Ezetimibe mang lại lợi ích hiệp đồng vượt trội dựa trên nguyên lý dược lý học nào?",
    "options": [
      "Hiệp đồng kép: Statin ức chế sinh tổng hợp cholesterol nội sinh tại gan, trong khi Ezetimibe ức chế hấp thu cholesterol ngoại sinh tại ruột non",
      "Ezetimibe làm tăng chuyển hóa của Statin thành các chất có hoạt tính mạnh hơn gấp 10 lần",
      "Cả hai thuốc cùng làm giảm bài tiết acid uric qua thận giúp bảo vệ khớp",
      "Statin triệt tiêu hoàn toàn tác dụng phụ gây tiêu chảy của Ezetimibe"
    ],
    "correct": 0,
    "explanation": "Đây là sự phối hợp bổ trợ hoàn hảo: ức chế tổng hợp cholesterol tại gan bằng Statin thường kích hoạt phản xạ ruột tăng hấp thu cholesterol từ thức ăn bù trừ. Ezetimibe chặn đứng cơ chế bù trừ này tại ruột, tạo hiệu quả hạ LDL-C cộng gộp thêm 15-25% mà không cần tăng liều Statin.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 403,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc nào sau đây là một phân tử RNA can thiệp nhỏ (siRNA) tổng hợp được tiêm dưới da mỗi 6 tháng một lần để ức chế dịch mã tổng hợp protein PCSK9 trong điều trị tăng cholesterol máu?",
    "options": [
      "Alirocumab",
      "Evolocumab",
      "Inclisiran",
      "Volanesorsen"
    ],
    "correct": 2,
    "explanation": "Inclisiran là một siRNA sợi kép gắn chuỗi GalNAc hướng đích tế bào gan. Trong tế bào gan, Inclisiran gắn vào phức hợp RISC phân cắt đặc hiệu sợi mRNA mã hóa PCSK9, ức chế dịch mã tạo protein PCSK9 kéo dài, chỉ cần tiêm dưới da 6 tháng một lần.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 404,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Dạng sốt rét do loài ký sinh trùng nào sau đây KHÔNG có thể ngủ trong gan (không có Hypnozoite), do đó chỉ cần điều trị diệt thể phân liệt trong hồng cầu là khỏi bệnh hoàn toàn mà không cần dùng Primaquin chống tái phát xa?",
    "options": [
      "Plasmodium vivax",
      "Plasmodium ovale",
      "Plasmodium falciparum (và Plasmodium malariae)",
      "Plasmodium cynomolgi"
    ],
    "correct": 2,
    "explanation": "Plasmodium falciparum và P. malariae sau khi xâm nhập tế bào gan chỉ phân chia thành các thể phân liệt rồi vỡ vào máu, hoàn toàn không hình thành thể ngủ (Hypnozoite) trong gan. Do đó điều trị khỏi đợt sốt rét thể hồng cầu là khỏi bệnh triệt căn, không có tái phát xa (không cần dùng Primaquin 14 ngày).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 405,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Khi điều trị sốt rét ác tính thể não bằng Quinin dihydroclorid đường truyền tĩnh mạch, việc tiêm tĩnh mạch trực tiếp (bolus IV) bị nghiêm cấm tuyệt đối vì lý do nguy hiểm nào?",
    "options": [
      "Gây suy sụp huyết động, tụt huyết áp kịch phát, loạn nhịp thất chết người và ngừng tim đột ngột",
      "Làm vỡ hồng cầu hàng loạt gây tắc mạch phổi",
      "Làm co cứng cơ hàm dẫn tới cắn đứt lưỡi",
      "Gây tổn thương không hồi phục tế bào biểu mô ống thận"
    ],
    "correct": 0,
    "explanation": "Quinin có tác dụng ức chế trực tiếp cơ tim và giãn mạch ngoại vi rất mạnh. Tiêm tĩnh mạch trực tiếp quá nhanh sẽ làm nồng độ thuốc trong tim tăng vọt tức thì, gây tụt huyết áp nghiêm trọng không hồi phục, ngừng tim thì tâm thu hoặc khởi phát rung thất tử vong.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 406,
    "subject": "duocly2",
    "chapter": "KTGHP",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Biến chứng tụt huyết áp nghiêm trọng có thể dẫn tới sốc tim tử vong khi sử dụng đồng thời dẫn xuất Nitrat hữu cơ (Nitroglycerin) với thuốc điều trị rối loạn cương dương ức chế PDE-5 (Sildenafil) là ví dụ điển hình của loại tương tác nào?",
    "options": [
      "Tương tác đối kháng cạnh tranh trên thụ thể adrenergic",
      "Tương tác dược lực học hiệp đồng nhân (bùng nổ chất truyền tin cGMP nội bào gây giãn cơ trơn mạch máu toàn thân dữ dội)",
      "Tương tác cản trở hấp thu tại biểu mô ruột non",
      "Tương tác tạo phức ion kim loại trong lòng mạch"
    ],
    "correct": 1,
    "explanation": "Nitrat kích thích guanylyl cyclase tổng hợp cGMP, trong khi Sildenafil ức chế enzym PDE-5 thoái giáng cGMP. Hai thuốc tác động vào hai mắt xích liên tiếp làm cGMP tăng vọt theo cấp số nhân, gây giãn mạch toàn thân dữ dội, tụt huyết áp kịch phát không đáp ứng hồi sức.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 407,
    "subject": "duocly2",
    "chapter": "KTGHP",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Một bệnh nhân trầm cảm đang dùng thuốc ức chế enzym Monoamine Oxidase (MAOI) ăn thực phẩm giàu Tyramine (như phô mai lên men lâu năm, rượu vang đỏ) xuất hiện cơn tăng huyết áp kịch phát đe dọa đột quỵ não. Đây là hiện tượng tương tác nổi tiếng nào?",
    "options": [
      "Hội chứng xơ vữa động mạch cấp tính",
      "Hội chứng ngộ độc thức ăn do tụ cầu",
      "Hội chứng nhược cơ ác tính",
      "Hiệu ứng Phô mai (The Cheese Effect) do Tyramine không bị enzym MAO đường ruột giáng hóa, vào máu kích thích giải phóng Noradrenalin ồ ạt từ đầu tận cùng giao cảm"
    ],
    "correct": 3,
    "explanation": "Tyramine trong phô mai, rượu vang bình thường bị enzym MAO-A ở ruột và gan phân hủy hoàn toàn. Khi dùng thuốc MAOI, enzym bị phong bế khiến Tyramine hấp thu nguyên vẹn vào máu, vào tận cùng thần kinh giao cảm đẩy Noradrenalin dự trữ ra ngoài ồ ạt, gây co mạch dữ dội và cơn tăng huyết áp ác tính.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 408,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân nam 45 tuổi có hội chứng Cushing do dùng thuốc kéo dài có biểu hiện béo trung tâm, mặt tròn như mặt trăng (Moon face), teo cơ tứ chi và da mỏng có vết rạn tím. Hiện tượng teo cơ này xuất phát từ tác động chuyển hóa nào của Corticoid?",
    "options": [
      "Ức chế phân giải glycogen tại cơ vân",
      "Kích thích thoái hóa protein ở cơ vân và ức chế vận chuyển acid amin vào tế bào cơ để cung cấp nguyên liệu cho quá trình tân tạo đường tại gan",
      "Làm cạn kiệt ion natri trong bào tương sợi cơ",
      "Phá hủy cầu nối actomyosin do ức chế enzym creatin kinase"
    ],
    "correct": 1,
    "explanation": "Glucocorticoid có tác dụng dị hóa protein mạnh: kích thích phân giải protein tại cơ vân thành các acid amin tự do, vận chuyển về gan để tân tạo glucose. Quá trình này làm khối lượng cơ bị teo nhẽo, yếu cơ gốc chi và làm mỏng tổ chức collagen dưới da tạo các vết rạn da màu tím.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 409,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Fludrocortison là một dẫn xuất steroid tổng hợp được chỉ định trong điều trị suy vỏ thượng thận nguyên phát (Bệnh Addison) nhờ đặc tính nổi trội nào?",
    "options": [
      "Có hoạt tính Mineralocorticoid (giữ muối nước) cực kỳ mạnh mẽ, cao gấp hơn 100 lần so với hoạt tính chống viêm",
      "Chỉ tác dụng trên thụ thể glucocorticoid ở màng não",
      "Không bao giờ gây tăng huyết áp dù dùng liều cao",
      "Có khả năng kích thích tuyến tụy tăng tiết insulin"
    ],
    "correct": 3,
    "explanation": "Fludrocortison có tác dụng giữ muối nước (mineralocorticoid) cực mạnh, gấp 125-250 lần hydrocortison, trong khi tác dụng kháng viêm chỉ gấp 10 lần. Thuốc được dùng bổ sung tác dụng giữ muối nước thay thế aldosteron trong bệnh suy thượng thận nguyên phát Addison.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 410,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Insulin tác dụng nhanh (Rapid-acting insulin analogues như Lispro, Aspart, Glulisine) có ưu thế khởi phát tác dụng cực nhanh (sau 10 - 15 phút) nhờ thay đổi cấu trúc nào ngăn cản sự tự kết hợp phân tử?",
    "options": [
      "Đột biến đảo vị trí các acid amin ở đầu C của chuỗi B, ngăn cản các phân tử insulin monomer tự kết hợp thành dạng hexamer bền vững",
      "Gắn thêm chuỗi acid béo 14 carbon vào chuỗi A",
      "Bổ sung phức hợp kẽm protamin tạo tinh thể lắng đọng",
      "Gia tăng cầu nối disulfid nội phân tử làm phân tử bền vững"
    ],
    "correct": 1,
    "explanation": "Insulin người thông thường ở nồng độ cao tự trùng hợp thành dạng hexamer (6 phân tử) chậm phân ly. Lispro (đảo vị trí ProB28 và LysB29) và Aspart (thay ProB28 bằng Asp) làm giảm tương tác kỵ nước, ngăn tạo hexamer, phân tử tồn tại dạng monomer hấp thu vào máu cực nhanh sau 10-15 phút.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 411,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Insulin tác dụng kéo dài Glargine (Lantus) duy trì nồng độ đáy phẳng, không có đỉnh (Peakless) kéo dài 24 giờ nhờ đặc tính hóa lý độc đáo nào tại vị trí tiêm dưới da?",
    "options": [
      "Thuốc được bao bọc trong các hạt liposome giải phóng chậm",
      "Gắn thuận nghịch với albumin huyết tương thông qua chuỗi acid myristic",
      "Dung dịch thuốc có pH acid (pH 4.0), khi tiêm vào mô dưới da có pH sinh lý (pH 7.4) sẽ kết tủa tạo thành các hạt vi tinh thể giải phóng monomer cực kỳ chậm và đều đặn",
      "Bị đại thực bào dưới da thực bào và nhả dần ra máu"
    ],
    "correct": 3,
    "explanation": "Insulin Glargine hòa tan hoàn toàn ở pH 4.0 trong lọ thuốc. Khi tiêm dưới da có pH trung tính 7.4, thuốc bị trung hòa và kết tủa thành các vi tinh thể (microprecipitates). Các tinh thể này giải phóng monomer insulin cực chậm và đều đặn vào mao mạch, tạo đường cong nồng độ phẳng không đỉnh kéo dài 24h.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 412,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cửa sổ thời gian vàng tối đa được khuyến cáo để chỉ định thuốc tiêu sợi huyết Alteplase (rtPA) đường tĩnh mạch trong điều trị Nhồi máu não cấp tính (đột quỵ thiếu máu não) là bao lâu kể từ khi khởi phát triệu chứng?",
    "options": [
      "Trước 4.5 giờ kể từ thời điểm khởi phát triệu chứng (sau khi đã loại trừ xuất huyết não trên CT)",
      "Trước 12 giờ kể từ thời điểm khởi phát triệu chứng",
      "Trong vòng 24 đến 48 giờ sau đột quỵ",
      "Bất kỳ thời điểm nào trong tuần đầu tiên nếu bệnh nhân còn tỉnh táo"
    ],
    "correct": 0,
    "explanation": "Theo các hướng dẫn đột quỵ quốc tế (AHA/ASA), cửa sổ điều trị tiêu sợi huyết tĩnh mạch chuẩn trong nhồi máu não cấp là trong vòng 4.5 giờ kể từ thời điểm khởi phát (thời điểm người bệnh bình thường lần cuối). Dùng sau 4.5 giờ nguy cơ xuất huyết não chuyển dạng tử vong cao hơn nhiều lợi ích.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 413,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc chống tiêu sợi huyết Acid Tranexamic (AMCA) cầm máu thông qua cơ chế phân tử nào?",
    "options": [
      "Kích thích tủy xương tăng sản sinh tiểu cầu nhanh chóng",
      "Gắn cạnh tranh vào vị trí gắn lysin trên phân tử Plasminogen và Plasmin, ngăn cản plasmin liên kết và phân hủy mạng lưới Fibrin",
      "Làm tăng tổng hợp yếu tố VIII tại tế bào nội mô mạch máu",
      "Gây co mạch cục bộ mạnh mẽ tại vị trí mạch máu bị tổn thương"
    ],
    "correct": 1,
    "explanation": "Acid Tranexamic là một acid amin tổng hợp có cấu trúc tương tự lysin. Thuốc gắn cạnh tranh vào các vị trí gắn lysin (kringle domains) trên phân tử plasminogen và plasmin, phong tỏa khả năng liên kết của plasmin với fibrin, bảo vệ cục máu đông fibrin không bị tiêu hủy.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 414,
    "subject": "duocly2",
    "chapter": "Vitamin",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thiếu hụt Vitamin B2 (Riboflavin) thường biểu hiện đặc trưng qua các tổn thương niêm mạc nào sau đây?",
    "options": [
      "Viêm loét dạ dày tá tràng hoại tử",
      "Nứt kẽ mép (cheilosis / viêm góc mép), viêm lưỡi màu đỏ tươi (viêm lưỡi bản đồ) và viêm da dầu quanh cánh mũi",
      "Xuất huyết võng mạc và bong giác mạc",
      "Loét mục vùng cùng cụt do tì đè"
    ],
    "correct": 1,
    "explanation": "Riboflavin (B2) là thành phần cấu tạo coenzym FAD và FMN tham gia chuỗi hô hấp tế bào. Thiếu B2 gây tổn thương điển hình ở vùng ranh giới niêm mạc da: nứt góc mép (chốc mép), viêm môi, lưỡi đỏ tím sưng nề (magenta tongue) và viêm da tiết bã nhờn ở nếp mũi má.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 415,
    "subject": "duocly2",
    "chapter": "Vitamin",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Phụ nữ mang thai được khuyến cáo bổ sung Acid Folic (Vitamin B9) trước khi thụ thai và trong 3 tháng đầu thai kỳ nhằm mục đích phòng ngừa dị tật bẩm sinh nguy hiểm nào ở thai nhi?",
    "options": [
      "Dị tật thông liên thất tim bẩm sinh",
      "Dị tật loạn sản khớp háng bẩm sinh",
      "Dị tật teo hẹp thực quản bẩm sinh",
      "Các dị tật ống thần kinh (Neural Tube Defects - như tật nứt đốt sống chẻ đôi spina bifida và thai vô sọ)"
    ],
    "correct": 3,
    "explanation": "Ống thần kinh thai nhi đóng lại vào ngày thứ 28 sau thụ thai. Thiếu Acid Folic làm rối loạn tổng hợp purin/pyrimidin phân chia tế bào thần kinh, gây dị tật ống thần kinh (nứt đốt sống, thoát vị màng não tủy, thai vô sọ). Bổ sung 400 mcg - 5 mg acid folic/ngày giúp giảm tới 70% nguy cơ dị tật này.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 416,
    "subject": "duocly2",
    "chapter": "Thuốc chữa thiếu máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Dạng sắt tiêm tĩnh mạch nào sau đây (như Sắt Dextran thế hệ cũ) có nguy cơ cao nhất gây sốc phản vệ đe dọa tính mạng đòi hỏi phải tiêm liều thử nghiệm (Test dose) trước khi truyền?",
    "options": [
      "Sắt Sucrose (Venofer)",
      "Sắt Carboxymaltose (Ferinject)",
      "Phức hợp Sắt Dextran phân tử lượng cao (High-molecular-weight iron dextran)",
      "Sắt Isomaltoside"
    ],
    "correct": 2,
    "explanation": "Phức hợp Sắt Dextran chứa kháng nguyên polysaccharide dextran có thể kích hoạt phản ứng phản vệ nặng qua trung gian miễn dịch (sốc phản vệ tụt huyết áp tử vong). Bắt buộc phải tiêm liều test (test dose) trước khi truyền. Các chế phẩm mới (Sắt sucrose, Sắt carboxymaltose) không chứa dextran nên an toàn hơn nhiều.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 417,
    "subject": "duocly2",
    "chapter": "Thuốc chữa thiếu máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Khi điều trị thiếu máu thiếu sắt bằng thuốc sắt đường uống, chỉ số cận lâm sàng nào sau đây phản ánh chính xác nhất tình trạng phục hồi các kho dự trữ sắt của cơ thể để quyết định thời điểm ngừng thuốc?",
    "options": [
      "Nồng độ Hemoglobin máu toàn phần",
      "Nồng độ Ferritin huyết thanh (cần tiếp tục uống sắt thêm 3-6 tháng sau khi Hb đã bình thường để đưa Ferritin > 50 mcg/L)",
      "Số lượng hồng cầu lưới ngoại vi",
      "Độ bão hòa Transferrin huyết thanh (TSAT)"
    ],
    "correct": 1,
    "explanation": "Khi uống sắt, Hemoglobin thường bình thường sau 1-2 tháng, nhưng các kho dự trữ sắt (ferritin tại gan, tủy xương) vẫn bị cạn kiệt. Nguyên tắc bắt buộc là phải tiếp tục uống sắt thêm 3 đến 6 tháng sau khi Hb đã bình thường cho đến khi nồng độ Ferritin huyết thanh đạt mục tiêu phục hồi dự trữ.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 418,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc nào sau đây là thuốc kháng virus dùng đường uống có hoạt tính chọn lọc cao ức chế enzym DNA polymerase của virus viêm gan B (HBV), có tỷ lệ kháng thuốc rất thấp và là lựa chọn hàng đầu điều trị viêm gan B mạn tính hiện nay?",
    "options": [
      "Lamivudin liều 100 mg",
      "Entecavir (hoặc Tenofovir alafenamide - TAF)",
      "Adefovir dipivoxil",
      "Ribavirin"
    ],
    "correct": 1,
    "explanation": "Entecavir (dẫn chất guanosine) và Tenofovir (TAF/TDF) là các thuốc kháng virus viêm gan B thế hệ mới có hoạt lực ức chế nhân lên của HBV cực mạnh và hàng rào kháng thuốc rất cao (tỷ lệ đột biến kháng thuốc sau 5 năm ở bệnh nhân chưa từng dùng thuốc là < 1%, vượt trội hoàn toàn so với Lamivudin).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 419,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc kháng virus dạng xịt hít Ribavirin được chỉ định điều trị nhiễm virus nào ở trẻ nhỏ có suy hô hấp nặng?",
    "options": [
      "Virus cúm gia cầm H5N1",
      "Virus hợp bào hô hấp (RSV - Respiratory Syncytial Virus) gây viêm tiểu phế quản nặng ở trẻ sơ sinh",
      "Virus sởi thể ác tính",
      "Virus thủy đậu biến chứng thần kinh"
    ],
    "correct": 3,
    "explanation": "Khí dung Ribavirin là chỉ định được phê chuẩn trong điều trị viêm phổi và viêm tiểu phế quản nặng do virus hợp bào hô hấp (RSV) ở trẻ sơ sinh và trẻ nhỏ có nguy cơ cao (bệnh tim bẩm sinh, đẻ non). Ribavirin ức chế enzym inosine monophosphate dehydrogenase của virus.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 420,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Kháng thể đơn dòng Trastuzumab (Herceptin) được chỉ định trong điều trị ung thư vú và ung thư dạ dày có thụ thể nào sau đây bộc lộ quá mức (Overexpression)?",
    "options": [
      "Thụ thể CD20 trên bề mặt tế bào lympho B",
      "Thụ thể HER2/neu (Human Epidermal Growth Factor Receptor 2 / ErbB2)",
      "Thụ thể Programmed Death-1 (PD-1)",
      "Thụ thể Angiotensin II type 1"
    ],
    "correct": 2,
    "explanation": "Khoảng 20-25% bệnh nhân ung thư vú có gen HER2 bị khuếch đại, biểu hiện hàng triệu thụ thể HER2 trên màng tế bào ung thư thúc đẩy di căn. Trastuzumab là kháng thể đơn dòng gắn vào đoạn ngoại bào của HER2, ức chế tín hiệu tăng sinh, ngăn chặn cắt thụ thể và kích hoạt miễn dịch ADCC tiêu diệt tế bào u.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 421,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Kháng thể đơn dòng Rituximab làm tiêu biến nhanh chóng các tế bào lympho B trong điều trị u lympho không Hodgkin tế bào B nhờ gắn chọn lọc vào kháng nguyên bề mặt nào?",
    "options": [
      "Kháng nguyên CD20",
      "Kháng nguyên CD4",
      "Kháng nguyên CD8",
      "Kháng nguyên CD19"
    ],
    "correct": 1,
    "explanation": "CD20 là kháng nguyên bề mặt biểu hiện đặc hiệu trên tế bào lympho B từ giai đoạn tiền B cho đến khi trưởng thành (nhưng không có trên tương bào và tế bào gốc tạo máu). Rituximab gắn vào CD20 kích hoạt độc tế bào phụ thuộc bổ thể (CDC) và độc tế bào qua trung gian kháng thể (ADCC) tiêu diệt chọn lọc tế bào lympho B.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 422,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Fomepizol (4-methylpyrazole) hoặc Ethanol đường uống/tiêm tĩnh mạch là thuốc giải độc đặc hiệu cứu sống bệnh nhân ngộ độc Methanol (Cồn công nghiệp) hoặc Ethylene glycol (dung dịch làm mát động cơ) thông qua cơ chế nào?",
    "options": [
      "Ức chế cạnh tranh mạnh mẽ enzym Alcohol Dehydrogenase (ADH) tại gan, ngăn cản chuyển hóa Methanol thành Acid Formic độc hại và ngăn cản chuyển Ethylene glycol thành Acid Oxalic",
      "Tăng cường hoạt tính của enzym phân hủy cồn tại dạ dày",
      "Gây kết tủa phân tử methanol trong lòng ruột non",
      "Ức chế sự hấp thu cồn qua niêm mạc đường tiêu hóa"
    ],
    "correct": 0,
    "explanation": "Bản thân Methanol và Ethylene glycol ít độc, nhưng chuyển hóa qua enzym Alcohol Dehydrogenase (ADH) tạo ra các chất cực độc: Acid Formic (gây toan máu sâu, mù mắt vĩnh viễn do phá hủy thần kinh thị giác) và Acid Oxalic (gây suy thận cấp). Fomepizol ức chế chọn lọc ADH (hoặc Ethanol cạnh tranh với ái lực cao gấp 20 lần) giúp ngăn chặn hoàn toàn sự tạo thành các acid độc này.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 423,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong ngộ độc cấp tính thuốc ngủ nhóm Barbiturat (như Phenobarbital) hoặc ngộ độc Aspirin (Salicylat), biện pháp tăng cường đào thải chất độc qua nước tiểu được áp dụng dựa trên nguyên tắc nào?",
    "options": [
      "Acid hóa nước tiểu bằng Acid ascorbic để bẫy ion",
      "Kiềm hóa nước tiểu bằng truyền dung dịch Natri Bicarbonat 1.4% (duy trì pH nước tiểu từ 7.5 đến 8.5) để ion hóa các thuốc mang tính acid yếu, ngăn cản tái hấp thu tại ống thận và tăng tống ra ngoài",
      "Cho bệnh nhân uống dung dịch muối ăn đậm đặc để gây nôn",
      "Tiêm thuốc lợi tiểu Spironolacton giữ kali"
    ],
    "correct": 1,
    "explanation": "Phenobarbital và Salicylat là các acid yếu. Truyền Natri Bicarbonat làm kiềm hóa nước tiểu (pH > 7.5) khiến các phân tử thuốc nhường proton phân ly thành dạng ion hóa mang điện tích âm (A-). Dạng ion hóa không thể khuếch tán tái hấp thu qua màng biểu mô ống lượn xa (bị bẫy ion), bị tống nhanh chóng ra nước tiểu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 424,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong điều trị xuất huyết tiêu hóa trên do loét dạ dày tá tràng sau can thiệp nội soi cầm máu, phác đồ dùng thuốc PPI đường tĩnh mạch nào sau đây được khuyến cáo để ổn định cục máu đông?",
    "options": [
      "Tiêm tĩnh mạch bolus 80 mg Esomeprazol hoặc Pantoprazol, sau đó truyền tĩnh mạch liên tục 8 mg/giờ trong 72 giờ",
      "Tiêm tĩnh mạch ngắt quãng 20 mg mỗi 12 giờ một lần",
      "Uống viên nén bao tan 40 mg mỗi buổi sáng kèm truyền dịch mặn",
      "Tiêm bắp sâu dung dịch Omeprazol liều cao 160 mg duy nhất"
    ],
    "correct": 0,
    "explanation": "Cục máu đông tiểu cầu chỉ bền vững khi pH dịch vị duy trì liên tục trên 6. Phác đồ bolus 80 mg IV sau đó truyền liên tục 8 mg/giờ trong 72 giờ giúp duy trì pH dạ dày > 6 liên tục, ngăn chặn enzym pepsin tiêu hủy cục máu đông và giảm tỷ lệ tái xuất huyết.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 425,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tương tác thuốc làm giảm hấp thu các hoạt chất kháng nấm đường uống như Ketoconazol hoặc Itraconazol khi dùng chung với PPI hoặc Antacid xảy ra do cơ chế nào?",
    "options": [
      "Tạo phức chelate không tan với ion nhôm trong lòng ruột",
      "Kích thích enzym CYP3A4 tại gan phá hủy thuốc kháng nấm nhanh chóng",
      "Các thuốc kháng nấm này là base yếu, bắt buộc cần môi trường acid dịch vị dạ dày để hòa tan và hấp thu vào tuần hoàn",
      "Thuốc kháng nấm cạnh tranh gắn kết với albumin huyết tương"
    ],
    "correct": 2,
    "explanation": "Các thuốc kháng nấm nhóm Azol (Ketoconazol, Itraconazol) có tính base yếu, cần pH acid mạnh của dạ dày để hòa tan. PPI, kháng H2 hoặc Antacid làm tăng pH dạ dày khiến các thuốc này không hòa tan được và bị đào thải ra ngoài theo phân, dẫn đến thất bại điều trị.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 426,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hoạt chất nào sau đây là thuốc kháng acid không hấp thu chứa phức hợp hydrated magnesium aluminium silicate có tác dụng bao phủ vết loét và hấp phụ độc tố đường ruột?",
    "options": [
      "Natri alginat",
      "Diosmectit (hoặc Almasilat / Magaldrat)",
      "Simethicon",
      "Carbocistein"
    ],
    "correct": 1,
    "explanation": "Diosmectit (và các muối phức hợp Magaldrat / Almasilat) là phức hợp nhôm magnesi silicat thiên nhiên có cấu trúc lớp kép, có độ nhầy quánh cao giúp bao phủ niêm mạc đường tiêu hóa và hấp phụ độc tố, vi khuẩn bảo vệ ổ loét và niêm mạc ruột.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 427,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc giảm ho ngoại vi Benzonatat có cơ chế tác dụng phân tử đặc thù nào giúp làm dịu phản xạ ho?",
    "options": [
      "Kích thích thụ thể opioid delta tại hành não",
      "Gây tê niêm mạc đường thở thông qua ức chế thụ thể kéo giãn (stretch receptors) tại đường dẫn khí và màng phổi",
      "Làm tăng tiết dịch nhầy bảo vệ niêm mạc khí phế quản",
      "Ức chế enzym tổng hợp acetylcholin tại tận cùng thần kinh X"
    ],
    "correct": 3,
    "explanation": "Benzonatat có cấu trúc tương tự thuốc gây tê tại chỗ tetracain. Thuốc ức chế các thụ thể kéo giãn cảm giác ho (stretch receptors) tại niêm mạc khí phế quản và màng phổi, làm gián đoạn cung phản xạ ho ngoại biên mà không ức chế trung khu hô hấp.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 428,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng phụ hạ Kali máu (Hypokalemia) có thể xuất hiện khi sử dụng nhóm thuốc hô hấp nào sau đây ở liều cao hoặc khí dung liên tục trong cơn hen nặng?",
    "options": [
      "Thuốc kháng cholinergic LAMA (Tiotropium)",
      "Thuốc kích thích beta-2 adrenergic (Salbutamol khí dung liều cao liên tục)",
      "Thuốc kháng thụ thể leukotriene (Montelukast)",
      "Thuốc tiêu nhầy Bromhexin"
    ],
    "correct": 2,
    "explanation": "Chủ vận beta-2 liều cao kích hoạt bơm Na+/K+-ATPase trên màng tế bào cơ vân và gan, thúc đẩy vận chuyển K+ từ máu vào trong tế bào, gây hạ Kali máu thoáng qua (tác dụng này thậm chí được ứng dụng để cấp cứu hạ K+ máu trong tăng kali máu cấp).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 429,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bromhexin và chất chuyển hóa có hoạt tính của nó là Ambroxol làm loãng đờm và dễ khạc đờm thông qua cơ chế nào?",
    "options": [
      "Kích hoạt tế bào thanh dịch bài tiết chất nhầy ít quánh và kích thích tổng hợp chất diện hoạt Surfactant phổi",
      "Ức chế trực tiếp phản xạ ho ở sàn não thất IV",
      "Khử hoàn toàn các cầu nối disulfid trong sợi mucopolysaccharid",
      "Tăng đào thải ion calci qua đường phế quản"
    ],
    "correct": 0,
    "explanation": "Bromhexin và Ambroxol phân giải các sợi mucopolysaccharid acid trong đờm, kích thích tế bào biểu mô phế quản tăng bài tiết dịch thanh lỏng và kích thích tế bào phế nang type II tăng tổng hợp Surfactant, giúp giảm sức căng bề mặt và dễ khạc đờm.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 430,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hoạt chất kháng H1 thế hệ 2 nào sau đây có thời gian khởi phát tác dụng nhanh nhất (chỉ sau 15 đến 30 phút) và có dạng viên ngậm phân tán trong miệng rất tiện dụng cho bệnh nhân bị mày đay cấp?",
    "options": [
      "Loratadin",
      "Cetirizin (hoặc Levocetirizin)",
      "Fexofenadin",
      "Astemizol"
    ],
    "correct": 2,
    "explanation": "Cetirizin hấp thu rất nhanh qua đường tiêu hóa, nồng độ đỉnh trong huyết tương đạt được sau 30-60 phút và tác dụng kháng histamin xuất hiện chỉ sau 20 phút, nhanh hơn đáng kể so với Loratadin và Fexofenadin, rất thích hợp dập tắt triệu chứng ngứa mày đay cấp.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 431,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hiện tượng giãn mạch và tăng tính thấm thành mạch trong phản ứng dị ứng mày đay cấp tính do Histamin được trung gian bởi cơ chế nội mô nào?",
    "options": [
      "Ức chế tổng hợp prostaglandin I2 tại màng tế bào nội mô",
      "Chẹn kênh calci làm cơ trơn thành mạch mất trương lực",
      "Kích thích thụ thể H1 trên tế bào nội mô làm giải phóng Nitric Oxid (NO) và làm co rút các tế bào nội mô tạo khe hở thoát dịch vào mô kẽ",
      "Phá hủy mạng lưới collagen ngoại bào của thành mạch"
    ],
    "correct": 3,
    "explanation": "Histamin gắn vào thụ thể H1 trên tế bào nội mô mao mạch kích hoạt eNOS sản sinh NO gây giãn tiểu động mạch; đồng thời kích hoạt các sợi actin/myosin làm tế bào nội mô co tròn lại, mở rộng khe hở giữa các tế bào (endothelial gaps) cho huyết tương thoát ra ngoài gây sẩn phù (wheal).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 432,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng phụ làm tăng men gan (tăng AST/ALT gấp trên 3 lần giới hạn trên bình thường) khi sử dụng Statin thường có đặc điểm lâm sàng nào sau đây?",
    "options": [
      "Thường xuất hiện sớm trong 3 tháng đầu, phụ thuộc vào liều dùng và có tính chất hồi phục hoàn toàn khi giảm liều hoặc ngừng thuốc",
      "Tiến triển không hồi phục dẫn tới xơ gan mất bù trong vòng 1 năm",
      "Chỉ xảy ra ở bệnh nhân nữ mang kiểu gen chậm chuyển hóa",
      "Luôn đi kèm với tình trạng suy thận cấp hoại tử biểu mô"
    ],
    "correct": 1,
    "explanation": "Tăng men gan không triệu chứng xảy ra ở khoảng 0.5-2% người dùng Statin, phụ thuộc liều dùng và thường xuất hiện trong 12 tuần đầu điều trị. Hiện tượng này thường tự giới hạn hoặc hồi phục hoàn toàn về mức bình thường khi giảm liều hoặc ngưng thuốc, rất hiếm khi gây tổn thương gan thực thể.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 433,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Chế phẩm acid béo Omega-3 tinh chế chứa Icosapent ethyl (dẫn xuất ethyl ester của EPA) được chứng minh trong thử nghiệm lâm sàng REDUCE-IT giúp giảm đáng kể biến cố tim mạch ở bệnh nhân nào?",
    "options": [
      "Bệnh nhân có tăng cholesterol máu đơn thuần có nồng độ triglycerid bình thường",
      "Bệnh nhân có bệnh tim mạch xơ vữa đã điều trị Statin nhưng vẫn còn tồn dư tăng Triglycerid máu (135 - 499 mg/dL)",
      "Bệnh nhân tăng huyết áp kịch phát kèm suy thận mạn giai đoạn cuối",
      "Trẻ em bị hội chứng thận hư tái phát"
    ],
    "correct": 3,
    "explanation": "Thử nghiệm REDUCE-IT chứng minh Icosapent ethyl (EPA tinh chế liều cao 4g/ngày) làm giảm 25% các biến cố tim mạch lớn (tử vong do tim, nhồi máu cơ tim, đột quỵ) ở bệnh nhân có xơ vữa mạch máu hoặc đái tháo đường đang dùng statin nhưng vẫn còn tình trạng tăng triglycerid máu tồn dư.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 434,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc chống sốt rét nào sau đây được phân lập từ vỏ cây Cinchona officinalis được sử dụng từ thế kỷ 17 và là đồng phân quay trái của Quinidin?",
    "options": [
      "Chloroquin",
      "Quinin",
      "Primaquin",
      "Artemisinin"
    ],
    "correct": 1,
    "explanation": "Quinin là alkaloid tự nhiên quay trái chiết xuất từ vỏ cây Canh-ki-na (Cinchona). Đồng phân quang học quay phải của nó là Quinidin (được dùng chủ yếu làm thuốc chống loạn nhịp tim Nhóm IA).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 435,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong 3 tháng đầu thai kỳ (quý 1), nếu thai phụ mắc sốt rét thông thường do P. falciparum, hướng dẫn quốc gia hiện nay khuyến cáo phác đồ an toàn nào?",
    "options": [
      "Phác đồ Primaquin phối hợp Mefloquin",
      "Phác đồ Quinin uống kết hợp Clindamycin trong 7 ngày",
      "Phác đồ Doxycyclin liều cao trong 14 ngày",
      "Phác đồ Fansidar liều duy nhất mỗi tuần"
    ],
    "correct": 3,
    "explanation": "Trong quý 1 thai kỳ, các thuốc nhóm Artemisinin có nguy cơ tiêu thai trên động vật thực nghiệm (chỉ dùng khi ác tính nguy cơ tử vong cao). Phác đồ an toàn nhất được khuyến cáo cho thai phụ quý 1 là Quinin sulfat uống phối hợp với Clindamycin trong 7 ngày.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 436,
    "subject": "duocly2",
    "chapter": "KTGHP",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tại sao khi phối hợp hai kháng sinh cùng nhóm Aminoglycosid hoặc phối hợp Aminoglycosid với thuốc lợi tiểu quai Furosemid liều cao lại bị cấm chỉ định?",
    "options": [
      "Hiệp đồng cộng độc tính trên tai (Ototoxicity) và độc tính trên thận (Nephrotoxicity), gây điếc vĩnh viễn và suy thận cấp hoại tử ống thận",
      "Hai thuốc trung hòa lẫn nhau làm mất hoàn toàn hoạt tính kháng khuẩn",
      "Gây rối loạn đông máu làm chảy máu chân răng liên tục",
      "Làm giảm thân nhiệt xuống mức nguy hiểm"
    ],
    "correct": 0,
    "explanation": "Cả Aminoglycosid và Furosemid đều gây độc cho dải mạch vân ở ốc tai và gây hoại tử tế bào biểu mô ống lượn gần ở thận. Dùng phối hợp sẽ làm tăng tích lũy thuốc ở tai trong và mô thận, gây độc tính hiệp đồng cộng dẫn đến điếc giác quan không hồi phục và suy thận cấp.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 437,
    "subject": "duocly2",
    "chapter": "KTGHP",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tương tác làm giảm pH nước tiểu (toan hóa nước tiểu bằng Vitamin C hoặc Amoni clorid) ảnh hưởng như thế nào đến sự đào thải của các thuốc có tính base yếu (như Amphetamin, Morphin)?",
    "options": [
      "Làm giảm đào thải các thuốc base yếu qua nước tiểu",
      "Không ảnh hưởng đến sự đào thải qua lọc cầu thận",
      "Làm tăng mức độ ion hóa của thuốc base yếu trong lòng ống thận, ngăn cản tái hấp thu thụ động và làm tăng tốc độ đào thải thuốc qua nước tiểu (hiện tượng bẫy ion)",
      "Làm kết tủa thuốc gây sỏi bàng quang"
    ],
    "correct": 2,
    "explanation": "Theo nguyên lý bẫy ion: Trong môi trường nước tiểu acid (pH thấp), thuốc có tính base yếu sẽ nhận H+ tích điện dương (dạng ion hóa). Dạng ion hóa phân cực không tan trong lipid nên không thể khuếch tán tái hấp thu qua màng tế bào ống thận, bị đào thải nhanh chóng ra ngoài nước tiểu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 438,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hội chứng 'Suy thượng thận cấp' xảy ra khi ngừng đột ngột Corticosteroid sau điều trị kéo dài thường biểu hiện qua các triệu chứng lâm sàng và cận lâm sàng nguy hiểm nào?",
    "options": [
      "Tăng huyết áp kịch phát, tăng đường huyết và tăng natri máu",
      "Co cứng cơ toàn thân kèm theo tăng nhãn áp cấp",
      "Tụt huyết áp trụy mạch, sốt cao, đau bụng quặn dữ dội, hạ đường huyết, hạ Natri máu và tăng Kali máu",
      "Phù phổi cấp kèm theo thiểu niệu vô niệu cấp"
    ],
    "correct": 2,
    "explanation": "Thiếu hụt cortisol và aldosteron cấp tính dẫn đến mất muối và nước qua thận: tụt huyết áp nặng, sốc trụy mạch kháng trị; hạ Natri máu, tăng Kali máu (do không thải K+), hạ đường huyết nặng (do mất tân tạo đường) và các cơn đau bụng quặn dễ nhầm với bụng ngoại khoa.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 439,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc nào sau đây được phân loại vào nhóm thuốc chẹn thụ thể Oxytocin (Oxytocin receptor antagonists), được tiêm tĩnh mạch để làm giảm co bóp tử cung trong điều trị dọa đẻ non?",
    "options": [
      "Atosiban",
      "Carbetocin",
      "Dinoprostone",
      "Alprostadil"
    ],
    "correct": 0,
    "explanation": "Atosiban là chất đối kháng cạnh tranh tại thụ thể oxytocin ở cơ tử cung, làm giảm tần số và biên độ các cơn co thắt tử cung, được dùng tiêm truyền tĩnh mạch để trì hoãn chuyển dạ dọa sinh non từ tuần 24 đến 33 của thai kỳ.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 440,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Biến chứng teo mô mỡ (Lipoatrophy) hoặc phì đại mô mỡ (Lipohypertrophy) tại vị trí tiêm Insulin dưới da thường xảy ra do nguyên nhân nào và làm ảnh hưởng ra sao đến điều trị?",
    "options": [
      "Tiêm nhiều lần lặp đi lặp lại tại cùng một vị trí da, làm thay đổi thất thường tốc độ hấp thu Insulin dẫn tới dao động đường huyết khó kiểm soát",
      "Do phản ứng dị ứng kháng thể IgE với chất bảo quản cresol",
      "Do vi khuẩn xâm nhập gây viêm mủ mô bào mạn tính dưới da",
      "Do thuốc kích thích tăng sinh biểu mô da tạo khối u lành tính"
    ],
    "correct": 0,
    "explanation": "Lipohypertrophy xuất phát từ tác dụng kích thích đồng hóa tại chỗ của insulin khi tiêm liên tục tại cùng một điểm. Mô mỡ bị xơ hóa và phì đại làm cản trở và làm chậm tốc độ hấp thu insulin thất thường, gây ra các cơn tăng đường huyết không giải thích được hoặc hạ đường huyết muộn.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 441,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Phân biệt giữa 'Hiệu ứng Somogyi' và 'Hiện tượng Bình minh' (Dawn phenomenon) ở bệnh nhân đái tháo đường có tăng đường huyết lúc sáng sớm dựa trên đặc điểm sinh lý nào?",
    "options": [
      "Cả hai đều có nồng độ đường huyết lúc nửa đêm (2h - 3h sáng) tăng rất cao",
      "Hiệu ứng Somogyi có hạ đường huyết lúc 2h - 3h sáng kích hoạt hormon phản điều hòa gây tăng đường huyết dội ngược; còn Hiện tượng Bình minh đường huyết 2h - 3h sáng bình thường hoặc tăng do tăng tiết GH và Cortisol sinh lý",
      "Hiệu ứng Somogyi chỉ xảy ra ở bệnh nhân đái tháo đường typ 2 dùng Metformin",
      "Hiện tượng Bình minh chỉ xuất hiện khi bệnh nhân ăn quá nhiều vào bữa tối"
    ],
    "correct": 2,
    "explanation": "Đo đường huyết lúc 3 giờ sáng: Nếu đường huyết < 70 mg/dL là Hiệu ứng Somogyi (hạ đường huyết ban đêm kích thích tiết glucagon, cortisol, epinephrine làm đường huyết sáng tăng vọt $\\rightarrow$ cần giảm liều insulin ban đêm). Nếu đường huyết 3h sáng bình thường hoặc cao là Hiện tượng Bình minh (do đỉnh tiết GH/cortisol $\\rightarrow$ cần tăng liều insulin ban đêm).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 442,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Chống chỉ định quan trọng nhất và phổ biến nhất của thuốc chống đông đường uống Warfarin cần ghi nhớ trong dược lâm sàng là đối tượng nào?",
    "options": [
      "Bệnh nhân có van tim nhân tạo cơ học ở vị trí van 2 lá",
      "Phụ nữ sau mãn kinh có nguy cơ loãng xương",
      "Phụ nữ mang thai (đặc biệt trong 3 tháng đầu thai kỳ) do nguy cơ gây dị tật phôi thai (Hội chứng Warfarin bào thai) và xuất huyết thai nhi",
      "Bệnh nhân bị thuyên tắc tĩnh mạch sâu chi dưới lần đầu"
    ],
    "correct": 3,
    "explanation": "Warfarin qua được nhau thai rất dễ dàng. Dùng trong 3 tháng đầu gây hội chứng Warfarin thai nhi (khiếm khuyết xương mũi lõm, loạn sản đầu xương có đốm, teo dây thị giác, chậm phát triển trí tuệ) và gây xuất huyết não thai nhi trong quý 2-3. Thuốc chống chỉ định tuyệt đối trong thai kỳ (thay bằng LMWH).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 443,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tại sao bệnh nhân cần phẫu thuật lớn theo chương trình (như mổ bắt con, phẫu thuật tim mạch) bắt buộc phải ngừng thuốc Aspirin trước ngày phẫu thuật ít nhất 7 đến 10 ngày?",
    "options": [
      "Để nồng độ kali máu trở về trạng thái ổn định",
      "Để gan phục hồi khả năng chuyển hóa thuốc gây mê toàn thân",
      "Do Aspirin ức chế không hồi phục COX-1 tiểu cầu suốt đời sống của tiểu cầu (7-10 ngày), cần thời gian để tủy xương sinh ra lứa tiểu cầu mới có chức năng đông máu bình thường",
      "Để tránh tương tác thuốc làm giảm tác dụng của kháng sinh dự phòng"
    ],
    "correct": 2,
    "explanation": "Tiểu cầu bị aspirin acetyl hóa không thể phục hồi chức năng trong suốt vòng đời 7-10 ngày. Mỗi ngày tủy xương chỉ sinh ra khoảng 10-15% lượng tiểu cầu mới. Cần ngừng Aspirin ít nhất 7-10 ngày để có đủ > 80% số lượng tiểu cầu mới bình thường đảm bảo cầm máu trong phẫu thuật.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 444,
    "subject": "duocly2",
    "chapter": "Vitamin",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cơ chế nào giải thích tại sao bổ sung Acid Folic liều cao đơn độc cho bệnh nhân thiếu máu ác tính do thiếu Vitamin B12 lại bị coi là sai lầm nguy hiểm?",
    "options": [
      "Acid Folic giải quyết được tình trạng thiếu máu hồng cầu to nhưng che giấu và bỏ sót tổn thương thoái hóa sợi trục tủy sống do thiếu B12, khiến bệnh nhân tàn phế thần kinh vĩnh viễn",
      "Acid Folic phá hủy các tế bào biểu mô thần kinh tủy sống",
      "Acid Folic làm tăng đào thải vitamin B12 qua đường phân",
      "Acid Folic gây đông vón máu trong tủy xương"
    ],
    "correct": 0,
    "explanation": "Cả thiếu B9 và B12 đều gây thiếu máu hồng cầu to. Nạp acid folic liều cao sẽ vượt qua được 'bẫy folate' giúp tủy xương tổng hợp DNA tạo hồng cầu bình thường (công thức máu hồi phục), nhưng không thể chuyển đổi methylmalonyl-CoA thành succinyl-CoA (cần B12), khiến thoái hóa bao myelin cột sau tủy sống âm thầm tiến triển thành liệt vĩnh viễn.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 445,
    "subject": "duocly2",
    "chapter": "Vitamin",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Biotin (Vitamin B7 / Vitamin H) đóng vai trò là coenzym thiết yếu xúc tác cho nhóm phản ứng sinh hóa nào trong chuyển hóa acid béo và tân tạo đường?",
    "options": [
      "Phản ứng chuyển nhóm amin (Transamination)",
      "Phản ứng khử carboxyl oxy hóa",
      "Phản ứng Carboxyl hóa gắn CO2 (như pyruvate carboxylase, acetyl-CoA carboxylase)",
      "Phản ứng methyl hóa DNA"
    ],
    "correct": 2,
    "explanation": "Biotin là coenzym của các enzym Carboxylase (Pyruvate carboxylase, Acetyl-CoA carboxylase, Propionyl-CoA carboxylase) xúc tác gắn gốc CO2 vào cơ chất trong chuyển hóa lipid, glucid và acid amin. Ăn nhiều lòng trắng trứng sống (chứa avidin gắn chặt biotin) có thể gây thiếu hụt biotin.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 446,
    "subject": "duocly2",
    "chapter": "Thuốc chữa thiếu máu",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc nào sau đây kích thích tạo máu thuộc nhóm thuốc kích thích cụm bạch cầu hạt (G-CSF - Granulocyte Colony-Stimulating Factor), được chỉ định để điều trị hạ bạch cầu trung tính do hóa trị liệu ung thư?",
    "options": [
      "Epoetin alfa",
      "Darbepoetin alfa",
      "Oprelvekin",
      "Filgrastim (hoặc Pegfilgrastim)"
    ],
    "correct": 3,
    "explanation": "Filgrastim là yếu tố kích thích dòng bạch cầu hạt của người tái tổ hợp (r-metHuG-CSF), kích thích tủy xương tăng sinh, biệt hóa và giải phóng các bạch cầu đa nhân trung tính vào máu, giúp rút ngắn giai đoạn hạ bạch cầu sau hóa trị và giảm nguy cơ sốc nhiễm trùng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 447,
    "subject": "duocly2",
    "chapter": "Thuốc chữa thiếu máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng phụ thường gặp nhất của Filgrastim (G-CSF) do tủy xương tăng sinh ồ ạt các tế bào dòng tủy là gì?",
    "options": [
      "Đau nhức xương (đặc biệt ở xương cùng cụt, xương chậu và xương ức)",
      "Rụng tóc toàn thể",
      "Suy thận cấp hoại tử ống thận",
      "Xơ hóa cơ tim thất trái"
    ],
    "correct": 0,
    "explanation": "Đau xương (bone pain) là tác dụng phụ phổ biến nhất của Filgrastim (chiếm khoảng 20-30% bệnh nhân), xuất phát từ hiện tượng tủy xương tại các xương xốp tăng sinh tế bào ồ ạt làm tăng áp lực trong khoang tủy xương. Triệu chứng đáp ứng tốt với Paracetamol hoặc NSAID.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 448,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Remdesivir là thuốc kháng virus phổ rộng được phê duyệt điều trị COVID-19 nặng nhập viện có cơ chế phân tử tác động lên SARS-CoV-2 như thế nào?",
    "options": [
      "Chẹn thụ thể gắn kết ACE-2 ở tế bào biểu mô phế nang",
      "Ức chế enzym Protease chính 3CLpro",
      "Là tiền chất tương tự adenosin nucleosid, ức chế cạnh tranh enzym RNA polymerase phụ thuộc RNA (RdRp) của virus làm ngừng trệ sao chép",
      "Ức chế sự nảy chồi của virus tại màng tế bào"
    ],
    "correct": 2,
    "explanation": "Remdesivir là một tiền chất monophosphoramidat nucleoside, vào trong tế bào được chuyển hóa thành dạng có hoạt tính remdesivir triphosphate (NTP tương tự ATP). Dạng này được enzym RdRp của SARS-CoV-2 đưa nhầm vào chuỗi RNA, gây ngừng trệ sao chép chuỗi sau 3 nucleotide (delayed chain termination).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 449,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Nirmatrelvir phối hợp với Ritonavir (thuốc Paxlovid) điều trị sớm COVID-19 nhẹ đến trung bình có cơ chế phân tử của Nirmatrelvir là gì?",
    "options": [
      "Ức chế chọn lọc enzym Protease chính Mpro (Main protease / 3CLpro) của virus SARS-CoV-2",
      "Chẹn gai protein S của virus",
      "Ức chế enzym sao chép ngược",
      "Kích thích interferon gamma bài tiết"
    ],
    "correct": 0,
    "explanation": "Nirmatrelvir là chất ức chế chọn lọc enzym protease chính Mpro (3CLpro) của SARS-CoV-2. Enzym này chịu trách nhiệm cắt các polyprotein lớn thành các protein phi cấu trúc chức năng của virus. Ức chế Mpro làm ngừng trệ quá trình nhân đôi của virus. Ritonavir dùng kèm để tăng nồng độ Nirmatrelvir.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 450,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc chống tạo mạch Bevacizumab (Avastin) ngăn chặn sự phát triển của các mạch máu mới nuôi khối u bằng cách trung hòa phân tử nào trong vi môi trường u?",
    "options": [
      "Yếu tố phát triển nguyên bào sợi bFGF",
      "Yếu tố hoại tử khối u TNF-alpha",
      "Yếu tố phát triển nội mô mạch máu (VEGF-A / Vascular Endothelial Growth Factor A)",
      "Chất ức chế hoạt hóa plasminogen PAI-1"
    ],
    "correct": 3,
    "explanation": "Khối u kích thước > 2mm cần tạo mạch máu mới để cung cấp oxy và dinh dưỡng. Khối u tiết ra VEGF-A kích thích tế bào nội mô mạch máu tăng sinh. Bevacizumab là kháng thể đơn dòng liên kết và trung hòa VEGF-A tự do, ngăn VEGF gắn vào thụ thể VEGFR, bỏ đói khối u và làm thoái triển mạng mạch máu nuôi u.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 451,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Các thuốc ức chế điểm kiểm soát miễn dịch (Immune Checkpoint Inhibitors như Pembrolizumab, Nivolumab) giải phóng hệ miễn dịch của cơ thể tấn công khối u thông qua việc phong bế tương tác giữa hai phân tử nào?",
    "options": [
      "Thụ thể PD-1 trên tế bào lympho T và phối tử PD-L1/PD-L2 trên màng tế bào ung thư",
      "Thụ thể CD28 và phân tử B7 trên tế bào trình diện kháng nguyên",
      "Kháng thể IgE và thụ thể Fc-epsilon",
      "Phức hợp HLA lớp 1 và thụ thể TCR"
    ],
    "correct": 0,
    "explanation": "Tế bào ung thư lẩn tránh hệ miễn dịch bằng cách biểu hiện phối tử PD-L1 gắn vào thụ thể PD-1 trên tế bào T độc (CD8+), phát tín hiệu ức chế làm tế bào T bị 'kiệt sức' (T-cell exhaustion). Kháng thể kháng PD-1 (Pembrolizumab, Nivolumab) chặn đứng tương tác này, 'tháo phanh' hệ miễn dịch để tế bào T tiêu diệt tế bào ung thư.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 452,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Than hoạt tính (Activated Charcoal) là chất hấp phụ tiêu hóa đầu tay trong xử trí ngộ độc cấp qua đường uống, nhưng KHÔNG CÓ HIỆU QUẢ hấp phụ đối với nhóm chất nào sau đây?",
    "options": [
      "Các thuốc chống trầm cảm 3 vòng và Paracetamol",
      "Các alcaloid tự nhiên và Morphin",
      "Các acid mạnh, base mạnh (chất ăn mòn), các ion kim loại (Sắt, Lithi, Chì) và các alcol đơn giản (Ethanol, Methanol, Ethylene glycol)",
      "Thuốc ngủ nhóm Benzodiazepin"
    ],
    "correct": 3,
    "explanation": "Than hoạt tính có diện tích bề mặt khổng lồ (1000 m2/g) hấp phụ rất tốt các phân tử hữu cơ cồng kềnh không phân cực. Tuy nhiên, than hoạt KHÔNG hấp phụ được các ion kim loại nhỏ mang điện tích cao (Sắt, Lithi, Kali), các acid/kiềm ăn mòn mạnh, và các phân tử alcol phân cực nhỏ (Ethanol, Methanol).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 453,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Chống chỉ định tuyệt đối của biện pháp Rửa dạ dày (Gastric lavage) hoặc Dùng thuốc gây nôn (Siro Ipeca) trong cấp cứu ngộ độc là tình huống nào?",
    "options": [
      "Uống quá liều thuốc hạ sốt Paracetamol trong vòng 1 giờ",
      "Ngộ độc các chất ăn mòn mạnh (Acid vô cơ mạnh hoặc Kiềm mạnh như nước tẩy rửa bồn cầu, xút) hoặc các Hydrocarbon dễ bay hơi (Xăng, dầu hỏa) do nguy cơ thủng thực quản, dạ dày và sặc gây viêm phổi hoại tử",
      "Ngộ độc thuốc chống sốt rét Chloroquin",
      "Bệnh nhân uống nhầm viên thuốc hạ huyết áp"
    ],
    "correct": 2,
    "explanation": "Rửa dạ dày hoặc gây nôn khi uống acid/base mạnh sẽ làm chất ăn mòn tiếp xúc lần thứ hai với niêm mạc thực quản và hầu họng, nguy cơ làm thủng thực quản và trung thất tử vong. Uống xăng dầu nếu gây nôn sẽ hít sặc vào đường thở gây viêm phổi hóa chất hoại tử lan tỏa.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 454,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng dược lý nào sau đây của Theophyllin giải thích tại sao thuốc này có tác dụng lợi tiểu nhẹ và kích thích thần kinh gây mất ngủ ở bệnh nhân dùng thuốc?",
    "options": [
      "Đối kháng thụ thể Adenosine A1 và A2A tại các mô",
      "Kích thích thụ thể GABA-A tại vỏ não",
      "Chẹn kênh calci màng trước synap thần kinh giao cảm",
      "Ức chế tái hấp thu Dopamin tại thể vân"
    ],
    "correct": 1,
    "explanation": "Adenosine là chất dẫn truyền thần kinh ức chế tự nhiên (gây buồn ngủ, co phế quản, giảm lọc cầu thận). Theophyllin đối kháng thụ thể Adenosine A1 và A2, gây kích thích thần kinh trung ương (tỉnh táo, mất ngủ, bồn chồn) và giãn tiểu động mạch đến thận gây lợi niệu nhẹ.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 455,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc giãn phế quản tác dụng kéo dài Tiotropium bromid có tính chọn lọc động học (kinh tế học phân tử) vượt trội hơn Ipratropium bromid ở điểm nào?",
    "options": [
      "Thuốc chỉ dùng đường uống hấp thu 100% qua ruột non",
      "Thuốc không có ái lực với bất kỳ thụ thể muscarinic nào tại phổi",
      "Tách khỏi thụ thể M2 nhanh hơn nhưng gắn kết và tách khỏi thụ thể M3 rất chậm (thời gian bán hủy tách thụ thể M3 lên tới 35 giờ)",
      "Thuốc chuyển hóa thành hợp chất có hoạt tính chẹn beta-1"
    ],
    "correct": 3,
    "explanation": "Tiotropium gắn vào các thụ thể M1, M2, M3 nhưng tách khỏi thụ thể M2 (thụ thể ức chế tự điều hòa) rất nhanh, trong khi tách khỏi thụ thể M3 (thụ thể gây co thắt phế quản) cực kỳ chậm với T1/2 phân ly lên tới 35 giờ, cho phép dùng liều 1 lần duy nhất trong ngày.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 456,
    "subject": "duocly2",
    "chapter": "Thuốc ĐC RLHH",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong điều trị hen phế quản nặng có tăng bạch cầu ái toan (Eosinophilic asthma), kháng thể đơn dòng Mepolizumab hoặc Benralizumab nhắm vào đích sinh học nào?",
    "options": [
      "Thụ thể Histamin H4",
      "Interleukin-5 (IL-5) hoặc thụ thể alpha của Interleukin-5 (IL-5Ralpha)",
      "Enzym Cyclooxygenase-2",
      "Phức hợp kháng nguyên HLA-DR"
    ],
    "correct": 2,
    "explanation": "IL-5 là cytokin chủ chốt điều hòa sự biệt hóa, tăng sinh, hoạt hóa và sống sót của bạch cầu ái toan (eosinophil). Mepolizumab trung hòa IL-5 hòa tan, còn Benralizumab gắn lên thụ thể IL-5Ralpha gây độc tế bào phụ thuộc kháng thể (ADCC) tiêu diệt bạch cầu ái toan.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 457,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Doxylamin là một thuốc kháng H1 thế hệ 1 thường được chỉ định phối hợp với Pyridoxin (Vitamin B6) để điều trị tình trạng bệnh lý đặc biệt nào?",
    "options": [
      "Cơn đau nửa đầu Migraine cấp tính",
      "Chứng nôn và buồn nôn thai nghén trong 3 tháng đầu thai kỳ (Morning sickness)",
      "Hội chứng cai rượu cấp tính có sảng run",
      "Viêm da dị ứng tiếp xúc mạn tính"
    ],
    "correct": 1,
    "explanation": "Sự kết hợp giữa Doxylamin (kháng H1 thế hệ 1) và Pyridoxin (Vitamin B6) là phác đồ hàng đầu được FDA phê chuẩn (Diclegis) để điều trị chứng ốm nghén, buồn nôn và nôn thai nghén nặng, đã được chứng minh an toàn tuyệt đối cho thai nhi.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 458,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Rupatadin là một thuốc chống dị ứng thế hệ mới có cơ chế tác dụng kép đối kháng đồng thời hai chất trung gian hóa học nào?",
    "options": [
      "Đối kháng thụ thể Histamin H1 và đối kháng thụ thể Yếu tố hoạt hóa tiểu cầu (PAF)",
      "Đối kháng thụ thể Histamin H1 và thụ thể Bradykinin B2",
      "Đối kháng thụ thể Histamin H1 và thụ thể Serotonin 5-HT3",
      "Đối kháng thụ thể Histamin H1 và thụ thể Dopamin D2"
    ],
    "correct": 0,
    "explanation": "Rupatadin có cơ chế kép độc đáo: vừa đối kháng chọn lọc cao tại thụ thể Histamin H1 ngoại biên, vừa đối kháng thụ thể của Yếu tố hoạt hóa tiểu cầu (Platelet-Activating Factor - PAF), giúp ức chế toàn diện hơn quá trình viêm dị ứng và tăng tính thấm thành mạch.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 459,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Khi làm các nghiệm pháp lẩy da chẩn đoán dị ứng (Prick test), bệnh nhân bắt buộc phải ngừng sử dụng thuốc kháng Histamin H1 trong thời gian tối thiểu bao lâu để tránh kết quả âm tính giả?",
    "options": [
      "Ngừng trước 12 giờ",
      "Ngừng tối thiểu 3 đến 7 ngày (tùy thuộc vào thời gian bán thải của từng thuốc)",
      "Ngừng tối thiểu 1 tháng",
      "Không cần ngừng thuốc nếu làm test dị nguyên thức ăn"
    ],
    "correct": 2,
    "explanation": "Kháng H1 ức chế phản xạ mày đay và ban đỏ (wheal and flare) tại da khi tiếp xúc dị nguyên. Do đó, bắt buộc phải ngừng thuốc kháng H1 từ 3 đến 7 ngày trước khi tiến hành test lẩy da (skin prick test) để phản ứng da phục hồi bình thường, tránh âm tính giả.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 460,
    "subject": "duocly2",
    "chapter": "Thuốc kháng H1",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc kháng Histamin H1 thế hệ 1 nào sau đây có cấu trúc dẫn xuất piperidin, có tác dụng chống ngứa rất mạnh và thường được dùng điều trị viêm da cơ địa ngứa nhiều về đêm?",
    "options": [
      "Cetirizin",
      "Loratadin",
      "Fexofenadin",
      "Alimemazin (hoặc Dimetinden / Dexclorpheniramin)"
    ],
    "correct": 3,
    "explanation": "Alimemazin (dẫn xuất phenothiazin) và Dimetinden có tác dụng chống ngứa cực mạnh kết hợp an thần nhẹ, được chỉ định ưu tiên để cắt cơn ngứa dữ dội trong viêm da cơ địa, chàm, mày đay, đặc biệt giúp bệnh nhân ngủ ngon về đêm không cào gãi tổn thương da.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 461,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc nào sau đây diệt amip bằng cách ức chế tổng hợp protein thông qua việc phong bế sự chuyển vị của chuỗi polypeptid trên ribosom nhưng có độc tính rất cao trên tim mạch?",
    "options": [
      "Metronidazol",
      "Emetin (hoặc Dehydroemetin)",
      "Diloxanid",
      "Tinidazol"
    ],
    "correct": 1,
    "explanation": "Emetin là alkaloid chiết xuất từ rễ cây Ipeca, diệt thể amip ăn hồng cầu ở mô cực mạnh. Tuy nhiên thuốc tích lũy gây độc tim mạch nặng (loạn nhịp tim, hạ HA, suy tim cấp, biến đổi sóng T trên ECG), hiện nay đã hầu như bị thay thế hoàn toàn bởi Metronidazol.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 462,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc tẩy giun Mebendazol dạng viên nhai 500 mg được khuyến cáo tẩy giun định kỳ cộng đồng với chế độ liều như thế nào?",
    "options": [
      "Uống 1 viên duy nhất 500 mg mỗi ngày trong 1 tháng",
      "Uống 1 viên nhai duy nhất 500 mg nhắc lại mỗi 6 tháng một lần",
      "Uống 2 viên trước mỗi bữa ăn",
      "Uống kèm dung dịch dầu thầu dầu tẩy xổ"
    ],
    "correct": 2,
    "explanation": "Theo khuyến cáo của Bộ Y tế và WHO, tẩy giun định kỳ tại vùng dịch tễ sử dụng Mebendazol 500 mg (hoặc Albendazol 400 mg) liều duy nhất mỗi 6 tháng một lần cho người lớn và trẻ em trên 1-2 tuổi để kiểm soát nhiễm giun truyền qua đất.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 463,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng làm tăng đường huyết nhẹ và làm tăng nhẹ nguy cơ khởi phát đái tháo đường mới mắc (New-onset diabetes) là đặc điểm cần lưu ý khi sử dụng nhóm thuốc nào kéo dài ở bệnh nhân có hội chứng chuyển hóa?",
    "options": [
      "Nhựa gắn acid mật (Colesevelam)",
      "Ezetimibe viên nén",
      "Nhóm thuốc Statin cường độ cao (đặc biệt ở người có sẵn tiền đái tháo đường)",
      "Dầu cá Omega-3 tinh chế"
    ],
    "correct": 2,
    "explanation": "Các thử nghiệm lâm sàng lớn cho thấy dùng Statin cường độ cao kéo dài làm tăng nhẹ tỷ lệ mắc đái tháo đường typ 2 mới khởi phát (khoảng 1 trường hợp trên 255 bệnh nhân điều trị 4 năm), chủ yếu ở người có sẵn các yếu tố nguy cơ của hội chứng chuyển hóa. Lợi ích bảo vệ tim mạch của Statin vượt trội hơn nguy cơ này.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 464,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Enzym chuyển hóa cytochrom P450 nào tại gan chịu trách nhiệm chính trong quá trình thoái giáng và thải trừ của ba Statin phổ biến là Simvastatin, Lovastatin và Atorvastatin?",
    "options": [
      "CYP2D6",
      "CYP3A4",
      "CYP1A2",
      "CYP2E1"
    ],
    "correct": 1,
    "explanation": "Simvastatin, Lovastatin và Atorvastatin được chuyển hóa chủ yếu qua isoenzym CYP3A4 tại gan và ruột. Khi dùng chung với các thuốc ức chế mạnh CYP3A4 (như Clarithromycin, Ketoconazol, nước bưởi chùm, thuốc ức chế Protease HIV), nồng độ các Statin này trong máu sẽ tăng vọt gây tiêu cơ vân cấp.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 465,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thời gian bán thải cực dài của thuốc chống sốt rét Cloroquin (lên tới 30 đến 60 ngày) xuất phát từ đặc tính dược động học nào?",
    "options": [
      "Thuốc gắn cộng hóa trị vĩnh viễn với albumin huyết tương",
      "Thuốc có tính kiềm yếu, bị tích tụ và bẫy ion trong các không bào lysosome của mô và gắn sâu vào các tế bào sắc tố gan, lách, thận, võng mạc với thể tích phân bố khổng lồ (Vd = 200 - 300 L/kg)",
      "Thuốc không thể đào thải qua lọc cầu thận",
      "Thuốc bị ức chế phân hủy bởi enzym MAO"
    ],
    "correct": 2,
    "explanation": "Chloroquin là một base lưỡng tính thân dầu. Khi vào tế bào, nó bị proton hóa trong môi trường acid của lysosome, không thể khuếch tán ngược ra ngoài (hiện tượng bẫy ion). Thuốc tích lũy sâu trong gan, thận, phổi, da, mắt với Vd khổng lồ, đào thải rất chậm ra nước tiểu trong nhiều tuần đến nhiều tháng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 466,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Phác đồ ACT phổ biến nhất đang được sử dụng điều trị sốt rét do P. falciparum chưa biến chứng tại Việt Nam hiện nay là phối hợp nào?",
    "options": [
      "Dihydroartemisinin + Piperaquin phosphat (biệt dược Arterakine hoặc CV Artecan)",
      "Artesunat + Quinin",
      "Artemether + Chloroquin",
      "Primaquin + Doxycyclin"
    ],
    "correct": 0,
    "explanation": "Viên phối hợp Dihydroartemisinin (40 mg) + Piperaquin phosphat (320 mg) là phác đồ ACT chuẩn ưu tiên hàng đầu của Bộ Y tế Việt Nam để điều trị sốt rét do P. falciparum chưa biến chứng, uống trong 3 ngày liên tiếp.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 467,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Biến chứng tan máu muộn sau điều trị bằng Artesunat đường tĩnh mạch (Post-artesunate delayed hemolysis - PADH) thường xuất hiện sau bao lâu kể từ khi khỏi sốt rét?",
    "options": [
      "Ngay sau khi tiêm thuốc 10 phút",
      "Khoảng 1 đến 3 tuần sau khi kết thúc đợt điều trị Artesunat (do hiện tượng 'pitting' lách loại bỏ xác ký sinh trùng làm hồng cầu giảm tuổi thọ)",
      "Sau 6 tháng đến 1 năm",
      "Chỉ xuất hiện khi bệnh nhân uống thêm rượu bia"
    ],
    "correct": 1,
    "explanation": "PADH là hiện tượng tan máu muộn xảy ra ở 10-20% bệnh nhân sốt rét ác tính điều trị bằng Artesunat tiêm mạch, xuất hiện từ ngày thứ 7 đến 21. Cơ chế do lách bóc tách xác ký sinh trùng bị artesunat giết chết ra khỏi hồng cầu ('pitting'), các hồng cầu sống sót này có màng yếu và bị tan máu muộn sau 1-3 tuần.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 468,
    "subject": "duocly2",
    "chapter": "KTGHP",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân ghép thận đang điều trị bằng thuốc chống thải ghép Cyclosporin hoặc Tacrolimus được kê thêm thuốc kháng nấm Ketoconazol. Bác sĩ cần phải điều chỉnh liều thuốc chống thải ghép như thế nào để tránh ngộ độc suy thận?",
    "options": [
      "Tăng gấp đôi liều thuốc chống thải ghép",
      "Bắt buộc phải giảm liều Cyclosporin/Tacrolimus từ 50% đến 75% và theo dõi nồng độ thuốc trong máu vì Ketoconazol ức chế mạnh CYP3A4 làm giảm chuyển hóa thuốc",
      "Giữ nguyên liều và uống cách nhau 30 phút",
      "Ngừng hoàn toàn thuốc chống thải ghép trong 1 tháng"
    ],
    "correct": 1,
    "explanation": "Ketoconazol là chất ức chế mạnh isoenzym CYP3A4 và P-glycoprotein. Cyclosporin và Tacrolimus chuyển hóa chủ yếu qua CYP3A4; khi dùng chung, nồng độ của chúng trong máu tăng vọt gấp 3-4 lần gây hoại tử ống thận và suy thận cấp. Bắt buộc phải giảm mạnh liều và định lượng nồng độ đáy thường xuyên.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 469,
    "subject": "duocly2",
    "chapter": "KTGHP",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tương tác dược lực học đối kháng giữa kháng sinh diệt khuẩn tác động lên thành tế bào vi khuẩn đang phân chia (như Penicillin, Cephalosporin) và kháng sinh kìm khuẩn ức chế tổng hợp protein (như Tetracyclin, Chloramphenicol) dẫn tới hậu quả gì?",
    "options": [
      "Làm tăng nguy cơ sốc phản vệ ở bệnh nhân",
      "Tạo chủng vi khuẩn đột biến kháng đa thuốc ngay lập tức",
      "Gây tiêu cơ vân cấp giải phóng myoglobin",
      "Làm giảm hoặc triệt tiêu hiệu lực diệt khuẩn của Penicillin (do Tetracyclin làm ngừng phân chia tế bào vi khuẩn, trong khi Penicillin chỉ diệt được vi khuẩn đang nhân đôi thành tế bào)"
    ],
    "correct": 3,
    "explanation": "Penicillin chỉ diệt khuẩn khi vi khuẩn đang trong pha phân chia tích cực (logarithmic phase) để ức chế tổng hợp thành peptidoglycan mới. Kháng sinh kìm khuẩn (Tetracyclin, Erythromycin) ức chế tổng hợp protein làm vi khuẩn ngừng phân chia, khiến Penicillin mất đích tác động, làm giảm hiệu lực điều trị.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 470,
    "subject": "duocly2",
    "chapter": "KTGHP",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc nào sau đây là chất ức chế men Cytochrom P450 isoenzym CYP2D6 tại gan, có thể làm giảm tác dụng giảm đau của tiền chất giảm đau Codein và Tramadol?",
    "options": [
      "Fluoxetin hoặc Paroxetin (thuốc chống trầm cảm nhóm SSRI)",
      "Rifampicin (kháng sinh trị lao)",
      "Phenobarbital (thuốc chống co giật)",
      "Carbamazepin (thuốc điều trị đau dây thần kinh)"
    ],
    "correct": 0,
    "explanation": "Codein và Tramadol là các tiền chất cần enzym CYP2D6 ở gan chuyển hóa (khử methyl) thành dạng có hoạt tính giảm đau mạnh (Morphin và O-desmethyltramadol). Fluoxetin và Paroxetin ức chế mạnh CYP2D6, ngăn cản sự chuyển hóa này làm bệnh nhân không có cảm giác giảm đau.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 471,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Khi bệnh nhân đang điều trị bằng Corticoid dài ngày cần phải trải qua một cuộc đại phẫu thuật hoặc gặp chấn thương nặng (Stress sinh lý cấp), nguyên tắc điều chỉnh liều Corticoid bắt buộc là gì?",
    "options": [
      "Ngừng dùng Corticoid ngay lập tức trước khi phẫu thuật 24 giờ",
      "Bắt buộc phải tăng liều Corticoid lên gấp 2 đến 3 lần liều duy trì (liều stress) trong giai đoạn phẫu thuật để bù đắp sự thiếu hụt đáp ứng stress tự nhiên của vỏ thượng thận bị teo",
      "Giữ nguyên liều uống hàng ngày và truyền thêm dung dịch Glucose ưu trương",
      "Chuyển sang dùng thuốc kháng viêm không steroid (NSAID) thay thế"
    ],
    "correct": 1,
    "explanation": "Bình thường khi bị stress nặng (phẫu thuật, chấn thương), tuyến thượng thận tiết cortisol tăng vọt gấp 5-10 lần để duy trì huyết áp và chuyển hóa. Ở người teo thượng thận do corticoid, cơ thể mất khả năng này; do đó bắt buộc phải tiêm Hydrocortison liều cao (liều stress 100-300mg/ngày) để tránh tử vong.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 472,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc điều hòa thụ thể Estrogen chọn lọc Raloxifene có ưu thế an toàn hơn Tamoxifen trong phòng ngừa và điều trị loãng xương sau mãn kinh ở đặc điểm nào?",
    "options": [
      "Không có tác dụng chủ vận trên nội mạc tử cung nên hoàn toàn không làm tăng nguy cơ ung thư nội mạc tử cung",
      "Có tác dụng hạ huyết áp và giảm cân mạnh",
      "Không gây bốc hỏa hay chuột rút ở chi dưới",
      "Uống 1 liều duy nhất mỗi năm tiêm dưới da"
    ],
    "correct": 3,
    "explanation": "Raloxifene có tác dụng chủ vận Estrogen trên xương (tăng mật độ xương) và trên chuyển hóa lipid; nhưng đối kháng Estrogen ở cả mô vú VÀ nội mạc tử cung, do đó không kích thích tăng sinh nội mạc tử cung và không làm tăng nguy cơ ung thư nội mạc tử cung như Tamoxifen.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 473,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Cơ chế phân tử của Propylthiouracil (PTU) có ưu thế bổ sung so với Thiamazol trong điều trị cấp cứu cơn bão giáp trạng (Thyroid storm) ở điểm nào?",
    "options": [
      "PTU phá hủy trực tiếp các kho dự trữ thyroglobulin trong lòng nang giáp",
      "Ngoài ức chế enzym TPO ở tuyến giáp, PTU còn ức chế enzym 5'-deiodinase ở ngoại vi, ngăn cản chuyển hóa T4 thành T3 dạng có hoạt tính mạnh tại các mô",
      "PTU có tác dụng chẹn thụ thể beta-1 adrenergic trực tiếp tại tim",
      "PTU kích hoạt bổ thể tiêu diệt các kháng thể kích thích tuyến giáp TRAb"
    ],
    "correct": 2,
    "explanation": "T3 có hoạt tính sinh học mạnh gấp 4-5 lần T4. PTU có ưu thế độc nhất là ức chế enzym 5'-deiodinase ở mô ngoại vi, ngăn cản sự chuyển đổi từ T4 thành T3 ở gan, thận và tim, làm giảm nhanh nồng độ T3 lưu hành trong cơn bão giáp; trong khi Thiamazol không có tác dụng ức chế ngoại vi này.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 474,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc hạ đường huyết nhóm Meglitinide (Repaglinide, Nateglinide) có ưu thế lâm sàng đặc biệt nào phù hợp cho bệnh nhân có lối sống ăn uống không đều đặn?",
    "options": [
      "Khởi phát nhanh và thời gian tác dụng rất ngắn, uống ngay trước bữa ăn (bữa ăn nào dùng bữa đó, không ăn không dùng thuốc) để kiểm soát đỉnh đường huyết sau ăn",
      "Có thời gian bán thải kéo dài trên 48 giờ chỉ cần uống 1 lần mỗi tuần",
      "Không bao giờ bị đào thải qua gan hay thận",
      "Chỉ tác dụng trên sự phân giải lipid mà không ảnh hưởng insulin"
    ],
    "correct": 1,
    "explanation": "Meglitinide cũng đóng kênh K_ATP nhưng ở vị trí khác Sulfonylurea, khởi phát tác dụng trong 15-30 phút và T1/2 rất ngắn (< 1-1.5 giờ). Bệnh nhân tuân thủ nguyên tắc: 'Ăn một bữa - uống một viên, không ăn - không uống', giúp kiểm soát chính xác đỉnh đường huyết sau ăn và giảm nguy cơ hạ đường huyết xa bữa ăn.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 475,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong cấp cứu Hôn mê hạ đường huyết nặng (bệnh nhân mất ý thức không thể nuốt được thức ăn) tại nhà hoặc tuyến y tế cơ sở, thuốc tiêm bắp hoặc tiêm dưới da cứu mạng đầu tay là gì?",
    "options": [
      "Insulin tác dụng nhanh 10 đơn vị tiêm bắp",
      "Dung dịch Natri clorid 0.9% truyền tĩnh mạch chậm",
      "Glucagon 1 mg tiêm bắp hoặc tiêm dưới da (kích thích gan ly giải glycogen thành glucose)",
      "Metformin tiêm bắp sâu 500 mg"
    ],
    "correct": 3,
    "explanation": "Khi bệnh nhân hạ đường huyết nặng mất ý thức không thể uống đường, Glucagon 1mg tiêm bắp/tiêm dưới da (hoặc xịt mũi Baqsimi) là thuốc cấp cứu số 1: kích thích thụ thể glucagon ở gan ly giải glycogen phóng thích glucose vào máu trong vòng 10-15 phút giúp bệnh nhân tỉnh lại.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 476,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân có tiền sử hội chứng Giảm tiểu cầu do Heparin (HIT) khi cần dùng thuốc chống đông đường tiêm để can thiệp mạch vành hoặc phẫu thuật tim thì thuốc nào sau đây là lựa chọn an toàn tuyệt đối?",
    "options": [
      "Argatroban hoặc Bivalirudin (thuốc ức chế trực tiếp Thrombin đường tiêm không qua antithrombin)",
      "Heparin trọng lượng phân tử thấp Enoxaparin",
      "Dẫn xuất Heparinoid Danaparoid liều cao",
      "Heparin tiêu chuẩn UFH phối hợp kháng thể trung hòa"
    ],
    "correct": 0,
    "explanation": "Trong HIT, kháng thể có phản ứng chéo rất cao (> 90%) với LMWH nên cấm dùng LMWH. Argatroban và Bivalirudin là các thuốc ức chế trực tiếp Thrombin (DTI) có cấu trúc tổng hợp hoàn toàn khác heparin, không phản ứng chéo với kháng thể HIT, là lựa chọn số 1 thay thế.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 477,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Fondaparinux là một pentasaccharid tổng hợp có cơ chế chống đông máu chọn lọc ra sao?",
    "options": [
      "Gắn trực tiếp và ức chế Thrombin mà không cần cofactor",
      "Gắn chọn lọc vào Antithrombin III, chỉ kích hoạt AT-III ức chế chọn lọc Yếu tố Xa mà hoàn toàn không ức chế Thrombin (IIa)",
      "Ức chế con đường đông máu ngoại sinh thông qua ức chế yếu tố mô (Tissue Factor)",
      "Kích thích tế bào nội mô tăng bài tiết Thrombomodulin"
    ],
    "correct": 1,
    "explanation": "Fondaparinux là chuỗi 5 gốc đường (pentasaccharide) tổng hợp giống hệt đoạn gắn AT-III của heparin. Do chuỗi quá ngắn, nó chỉ làm AT-III biến đổi cấu hình để bất hoạt Yếu tố Xa, hoàn toàn không đủ độ dài để ức chế Thrombin (IIa). Thuốc không gây hội chứng HIT.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 478,
    "subject": "duocly2",
    "chapter": "Vitamin",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Protein Avidin có trong lòng trắng trứng gà sống có khả năng gây hội chứng thiếu hụt vitamin nào do tạo phức liên kết cực kỳ bền vững không hấp thu?",
    "options": [
      "Vitamin B1",
      "Biotin (Vitamin B7)",
      "Vitamin B6",
      "Vitamin B12"
    ],
    "correct": 1,
    "explanation": "Avidin là một glycoprotein trong lòng trắng trứng sống, có ái lực liên kết với Biotin mạnh nhất trong tự nhiên (hằng số phân ly Kd ~ 10^-15 M). Khi ăn nhiều trứng sống, avidin giam giữ biotin không cho hấp thu qua ruột gây rụng tóc, viêm da tróc vảy và rối loạn thần kinh.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 479,
    "subject": "duocly2",
    "chapter": "Vitamin",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Chất nào sau đây là dạng provitamin A có nguồn gốc thực vật (rau quả có màu vàng, cam, xanh đậm) được phân cắt đối xứng tại niêm mạc ruột non để tạo thành hai phân tử Retinal?",
    "options": [
      "Lycopene",
      "Lutein",
      "Beta-Caroten",
      "Zeaxanthin"
    ],
    "correct": 3,
    "explanation": "Beta-Caroten là carotenoid provitamin A quan trọng nhất trong thực vật (cà rốt, bí đỏ, gấc). Tại biểu mô ruột non, enzym beta-caroten 15,15'-dioxygenase cắt đôi phân tử beta-caroten ở liên kết trung tâm tạo ra 2 phân tử Retinal (sau đó khử thành Retinol).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 480,
    "subject": "duocly2",
    "chapter": "Thuốc chữa thiếu máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Oprelvekin (Interleukin-11 tái tổ hợp) và Romiplostim được chỉ định trong huyết học nhằm mục đích tăng sinh dòng tế bào máu nào?",
    "options": [
      "Dòng hồng cầu trong thiếu máu mạn tính",
      "Dòng bạch cầu lympho T chống nhiễm virus",
      "Dòng tế bào nhân khổng lồ (Megakaryocyte) để làm tăng số lượng Tiểu cầu phòng ngừa xuất huyết",
      "Dòng bạch cầu đơn nhân đại thực bào"
    ],
    "correct": 2,
    "explanation": "Oprelvekin (rhIL-11) và Romiplostim / Eltrombopag (chất chủ vận thụ thể thrombopoietin) kích thích tế bào nhân khổng lồ tại tủy xương tăng sinh và trưởng thành, thúc đẩy sản xuất tiểu cầu, được dùng phòng ngừa và điều trị hạ tiểu cầu nặng do hóa trị hoặc xuất huyết giảm tiểu cầu miễn dịch (ITP).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 481,
    "subject": "duocly2",
    "chapter": "Thuốc chữa thiếu máu",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hormone Hepcidin do gan bài tiết đóng vai trò là chất điều hòa trung tâm của quá trình chuyển hóa sắt trong cơ thể thông qua cơ chế nào?",
    "options": [
      "Kích thích tủy xương tăng bắt giữ sắt tự do",
      "Gắn vào kênh xuất bào sắt Ferroportin trên màng tế bào biểu mô ruột và đại thực bào, gây thoái giáng kênh này làm khóa giữ sắt trong tế bào, làm giảm nồng độ sắt trong máu",
      "Tăng cường hòa tan sắt tại lòng tá tràng",
      "Kích hoạt enzym vận chuyển sắt qua hàng rào máu não"
    ],
    "correct": 1,
    "explanation": "Ferroportin là kênh duy nhất đưa sắt từ trong tế bào biểu mô ruột và đại thực bào ra máu. Hepcidin gắn vào Ferroportin gây nhập bào và phân hủy kênh này, giam giữ sắt trong tế bào không cho vào máu. Trong viêm mạn tính, Hepcidin tăng cao gây ra bệnh cảnh 'Thiếu máu trong bệnh mạn tính'.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 482,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tenofovir alafenamide (TAF) là dạng tiền chất thế hệ mới của Tenofovir có ưu thế vượt trội so với Tenofovir disoproxil fumarate (TDF) ở điểm nào?",
    "options": [
      "TAF bền vững hơn trong huyết tương, phân bố hướng đích cao vào các tế bào đích (tế bào lympho và tế bào gan), nồng độ thuốc trong máu thấp hơn 90% nên giảm thiểu tối đa độc tính trên thận và giảm nguy cơ loãng xương",
      "TAF có thể dùng đường tiêm bắp ngắt quãng 6 tháng một lần",
      "TAF không bao giờ gây tăng men gan",
      "TAF chữa khỏi hoàn toàn virus HIV ra khỏi cơ thể"
    ],
    "correct": 1,
    "explanation": "TDF bị thủy phân sớm trong huyết tương giải phóng nồng độ tenofovir tự do trong máu cao, gây tổn thương ống thận (hội chứng Fanconi) và mất mật độ khoáng của xương. TAF bền vững trong máu, chỉ được kích hoạt nội bào nhờ cathepsin A, do đó liều dùng thấp hơn 10 lần mà hiệu lực tương đương và an toàn cho thận, xương.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 483,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc nào sau đây là chất ức chế hòa màng (Fusion inhibitor) tiêm dưới da, ngăn cản sự thay đổi cấu hình của glycoprotein gp41 của virus HIV ngăn không cho virus hòa nhập màng tế bào vật chủ?",
    "options": [
      "Maraviroc",
      "Enfuvirtid (T-20)",
      "Ibalizumab",
      "Fostemsavir"
    ],
    "correct": 3,
    "explanation": "Enfuvirtid (T-20) là một peptid tổng hợp gồm 36 acid amin. Thuốc liên kết chọn lọc với tiểu đơn vị vỏ ngoài gp41 của HIV-1, ngăn cản gp41 gập lại thành cấu trúc 6 chuỗi xoắn (six-helix bundle), từ đó ngăn màng virus hòa nhập với màng tế bào lympho T CD4+.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 484,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hội chứng 'Bàn tay - Bàn chân' (Hand-Foot Syndrome / Palmar-plantar erythrodysesthesia) với ban đỏ, phù nề, đau rát và bong tróc da lòng bàn tay và lòng bàn chân là tác dụng phụ điển hình của hóa chất nào?",
    "options": [
      "Vincristin",
      "Capecitabin (tiền chất đường uống của 5-Fluorouracil)",
      "Bleomycin",
      "Cisplatin"
    ],
    "correct": 2,
    "explanation": "Capecitabin hấp thu qua ruột và qua 3 bước enzym tại gan và mô u để giải phóng 5-FU. Một phần thuốc bài tiết qua tuyến mồ hôi ở lòng bàn tay và bàn chân, gây độc tế bào sừng và phản ứng viêm mạch tại chỗ, biểu hiện hội chứng bàn tay - bàn chân gây đau đớn, nứt nẻ và tróc da.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 485,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hội chứng tiêu giải khối u cấp tính (Tumor Lysis Syndrome - TLS) sau đợt hóa trị liệu các khối u nhạy cảm (như u lympho, bạch cầu cấp) đặc trưng bởi bộ tứ rối loạn điện giải và chuyển hóa nguy hiểm nào?",
    "options": [
      "Tăng Acid Uric máu, Tăng Kali máu, Tăng Phosphat máu và Hạ Calci máu thứ phát (nguy cơ suy thận cấp do kết tinh tinh thể urat và loạn nhịp tim ngừng tim)",
      "Hạ Kali máu, hạ natri máu, tăng calci máu và hạ đường huyết",
      "Nhiễm kiềm chuyển hóa, tăng natri máu và hạ phosphat máu",
      "Tăng nồng độ protein toàn phần và hạ bilirubin máu"
    ],
    "correct": 1,
    "explanation": "Khi hàng tỷ tế bào ung thư bị tiêu diệt đồng loạt, các chất nội bào tràn vào máu: Acid nucleic thoái hóa thành Acid Uric tăng vọt gây tắc ống thận suy thận cấp; Kali nội bào tràn ra gây tăng K+ máu nguy cơ ngừng tim; Phosphat nội bào tràn ra gắn Calci tạo kết tủa phosphat calci gây hạ Ca2+ máu co giật.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 486,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Nhũ dịch Lipid đường tĩnh mạch (Intravenous Lipid Emulsion - ILE / Intralipid 20%) là liệu pháp cấp cứu hồi sức hồi sinh tim phổi đặc hiệu trong ngộ độc độc chất nào?",
    "options": [
      "Ngộ độc thuốc hạ đường huyết Sulfonylurea",
      "Ngộ độc cấp tính các thuốc gây tê cục bộ có tính thân dầu cao (như Bupivacain, Ropivacain, Lidocain) gây ngừng tim kháng trị (hiệu ứng bẫy chìm lipid - Lipid sink)",
      "Ngộ độc thuốc kháng sinh Cephalosporin",
      "Ngộ độc thuốc tiêu sợi huyết"
    ],
    "correct": 0,
    "explanation": "Bupivacain là thuốc gây tê cực kỳ thân dầu, gắn chặt vào kênh natri cơ tim gây trụy mạch và ngừng tim kháng sốc điện. Truyền nhũ dịch mỡ Intralipid 20% tạo một khoang lipid khổng lồ trong lòng mạch ('Lipid sink'), hút sạch các phân tử thuốc gây tê thân dầu ra khỏi mô cơ tim, phục hồi chức năng co bóp tim nhanh chóng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 487,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong ngộ độc thuốc chẹn kênh Calci (CCB) hoặc thuốc chẹn Beta liều cao gây tụt huyết áp nặng và nhịp chậm trơ kháng hồi sức, liệu pháp truyền hormone nào sau đây mang lại hiệu quả tăng co bóp cơ tim không qua thụ thể beta?",
    "options": [
      "Glucagon tiêm tĩnh mạch liều cao (hoặc Liệu pháp Insulin liều cao kèm Glucose - HIE)",
      "Thyroxin tiêm tĩnh mạch chậm",
      "Oxytocin truyền tĩnh mạch",
      "Aldosteron tiêm bắp sâu"
    ],
    "correct": 1,
    "explanation": "Glucagon gắn vào thụ thể glucagon riêng biệt trên màng tế bào cơ tim, kích hoạt adenylcyclase độc lập không phụ thuộc thụ thể beta-1, làm tăng cAMP nội bào, tăng dòng Ca2+ giúp tăng nhịp tim và lực co bóp. Liệu pháp Insulin liều cao kết hợp truyền glucose (HIE) cũng là phác đồ hàng đầu cung cấp năng lượng cho cơ tim.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 488,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Kháng thể hoặc xét nghiệm chẩn đoán nhanh sốt rét (RDT) tìm kháng nguyên nào của P. falciparum trong máu bệnh nhân?",
    "options": [
      "Kháng nguyên vỏ HBsAg",
      "Kháng nguyên protein giàu histidin-2 (HRP-2 / Histidine-Rich Protein 2) hoặc enzym pLDH",
      "Kháng nguyên men troponin I",
      "Kháng nguyên thụ thể CD4"
    ],
    "correct": 3,
    "explanation": "Các test chẩn đoán nhanh sốt rét (RDTs) phát hiện kháng nguyên HRP-2 (đặc hiệu cao cho P. falciparum) hoặc enzym lactate dehydrogenase của ký sinh trùng (pLDH) và aldolase (phát hiện cả P. vivax, P. malariae, P. ovale), cho kết quả nhanh sau 15 phút tại thực địa.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 489,
    "subject": "duocly2",
    "chapter": "Thuốc chống sốt rét",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tác dụng phụ làm đổi màu nước tiểu thành màu vàng chanh đậm và vị đắng kéo dài là đặc điểm nhận biết khi dùng thuốc chống sốt rét nào?",
    "options": [
      "Quinin sulfat",
      "Mefloquin",
      "Mepacrin (hoặc Quinacrin)",
      "Artemisinin"
    ],
    "correct": 2,
    "explanation": "Mepacrin (Quinacrin) là thuốc chống sốt rét dẫn xuất acridin cũ, có màu vàng sáng huỳnh quang. Thuốc nhuộm vàng da, củng mạc mắt (dễ nhầm với hoàng đảm) và làm nước tiểu có màu vàng chanh đậm, kèm theo vị đắng rất khó chịu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 490,
    "subject": "duocly2",
    "chapter": "KTGHP",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Khi điều trị phối hợp Sulfamethoxazol và Trimethoprim (thuốc Co-trimoxazol / Bactrim), tỷ lệ nồng độ thuốc tối ưu trong huyết tương được duy trì ở mức bao nhiêu để đạt hiệu lực diệt khuẩn hiệp đồng tối đa?",
    "options": [
      "Tỷ lệ 1 phần Sulfamethoxazol : 1 phần Trimethoprim",
      "Tỷ lệ 20 phần Sulfamethoxazol : 1 phần Trimethoprim (trong viên thuốc bào chế theo tỷ lệ liều 5:1)",
      "Tỷ lệ 1 phần Sulfamethoxazol : 20 phần Trimethoprim",
      "Tỷ lệ 100 phần Sulfamethoxazol : 1 phần Trimethoprim"
    ],
    "correct": 2,
    "explanation": "Mặc dù viên thuốc Co-trimoxazol được bào chế theo tỷ lệ 5:1 (400mg SMX + 80mg TMP), do Trimethoprim có thể tích phân bố lớn hơn nhiều và tan tốt hơn trong lipid, nên tỷ lệ nồng độ thuốc tự do trong huyết tương đạt được ở mức 20:1 - đây là tỷ lệ vàng đạt hiệu lực diệt khuẩn hiệp đồng tối ưu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 491,
    "subject": "duocly2",
    "chapter": "KTGHP",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tương tác bất lợi giữa thuốc kháng virus Tenofovir disoproxil fumarate (TDF) và thuốc ức chế Protease tăng cường (như Lopinavir/ritonavir) dẫn tới nguy cơ tổn thương cơ quan nào cao nhất?",
    "options": [
      "Tăng độc tính trên thận (hội chứng Fanconi thận, protein niệu và suy giảm tốc độ lọc cầu thận)",
      "Gây điếc tai không hồi phục",
      "Gây xơ hóa cơ tim thất trái",
      "Gây hoại tử biểu mô giác mạc mắt"
    ],
    "correct": 1,
    "explanation": "Ritonavir ức chế các protein vận chuyển bài tiết Tenofovir ở ống thận, làm tăng nồng độ Tenofovir tích lũy trong tế bào biểu mô ống lượn gần lên gấp nhiều lần. Điều này dẫn đến tổn thương ty thể tế bào ống thận, gây hội chứng Fanconi mắc phải và suy thận tiến triển.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 492,
    "subject": "duocly2",
    "chapter": "KTGHP",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thời gian bán thải sinh học (T1/2) của một thuốc là 12 giờ. Theo nguyên lý dược động học lâm sàng, sau khoảng thời gian dùng thuốc lặp lại liên tục bao lâu thì nồng độ thuốc trong huyết tương sẽ đạt trạng thái cân bằng ổn định (Steady-state concentration - Css)?",
    "options": [
      "Sau 12 giờ (đúng bằng 1 lần T1/2)",
      "Sau 24 giờ (đúng bằng 2 lần T1/2)",
      "Sau khoảng 48 đến 60 giờ (tương đương 4 đến 5 lần thời gian bán thải T1/2)",
      "Sau 1 tháng dùng thuốc liên tục"
    ],
    "correct": 3,
    "explanation": "Theo dược động học hằng định: Khi dùng liều lặp lại với khoảng cách liều đều đặn, nồng độ thuốc tích lũy và đạt trạng thái cân bằng (Css - khi lượng thuốc vào bằng lượng thải trừ) sau khoảng 4 đến 5 lần T1/2 (đạt 93.75% ở 4 T1/2 và 96.87% ở 5 T1/2). Với T1/2 = 12h, cần 48-60 giờ để đạt Css.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 493,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thử nghiệm lâm sàng tim mạch EMPA-REG OUTCOME đã tạo ra bước ngoặt lịch sử cho thuốc điều trị đái tháo đường nào khi lần đầu tiên chứng minh làm giảm đáng kể tử vong do tim mạch và giảm nhập viện vì suy tim?",
    "options": [
      "Empagliflozin (nhóm ức chế SGLT-2)",
      "Sitagliptin (nhóm ức chế DPP-4)",
      "Gliclazid MR (nhóm Sulfonylurea)",
      "Pioglitazone (nhóm Thiazolidinedion)"
    ],
    "correct": 0,
    "explanation": "Năm 2015, nghiên cứu EMPA-REG OUTCOME chứng minh Empagliflozin làm giảm 38% tử vong do nguyên nhân tim mạch và giảm 35% nguy cơ nhập viện do suy tim ở bệnh nhân ĐTĐ typ 2 có bệnh tim mạch xơ vữa, mở ra kỷ nguyên dùng ức chế SGLT-2 điều trị suy tim và bảo vệ thận.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 494,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân đái tháo đường typ 2 có mức lọc cầu thận eGFR giảm xuống 25 mL/phút/1.73m2. Nhóm thuốc hạ đường huyết nào sau đây bị chống chỉ định khởi đầu hoặc bắt buộc phải ngừng sử dụng do nguy cơ tích lũy độc tính?",
    "options": [
      "Insulin tiêm dưới da điều chỉnh liều",
      "Metformin (chống chỉ định tuyệt đối khi eGFR < 30 mL/phút do nguy cơ toan lactic)",
      "Linagliptin viên nén 5 mg",
      "Thuốc đồng vận thụ thể GLP-1 như Dulaglutid"
    ],
    "correct": 2,
    "explanation": "Theo khuyến cáo của ADA và KDIGO: Metformin chống chỉ định tuyệt đối khi eGFR < 30 mL/phút/1.73m2 vì nguy cơ tích lũy thuốc gây nhiễm toan acid lactic tử vong. Khi eGFR từ 30-44 mL/phút, liều tối đa của Metformin không quá 1000 mg/ngày và không được khởi đầu mới.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 495,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Xử trí cấp cứu biến chứng xuất huyết đe dọa tính mạng do quá liều Warfarin (chỉ số INR > 10 hoặc có xuất huyết não, nội tạng) gồm những biện pháp bắt buộc nào sau đây?",
    "options": [
      "Tiêm tĩnh mạch chậm Vitamin K1 (Phytomenadion 5 - 10 mg) phối hợp truyền Phức hợp Prothrombin cô đặc (PCC 4 yếu tố) hoặc Huyết tương tươi đông lạnh (FFP)",
      "Tiêm bắp sâu dung dịch Heparin tiêu chuẩn 5000 đơn vị",
      "Truyền dung dịch Natri clorid 0.9% thể tích lớn kèm Furosemid",
      "Uống viên sắt sulfat kèm theo truyền tiểu cầu đậm đặc"
    ],
    "correct": 3,
    "explanation": "Vitamin K1 đường tĩnh mạch mất ít nhất 6-24 giờ để gan tổng hợp lại các yếu tố đông máu mới. Do đó, trong xuất huyết đe dọa tính mạng, bắt buộc phải truyền ngay PCC (Phức hợp Prothrombin cô đặc chứa sẵn yếu tố II, VII, IX, X) hoặc FFP để đảo ngược tình trạng đông máu tức thì, kết hợp tiêm Vitamin K1 IV chậm.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 496,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Dipyridamol làm tăng tác dụng chống kết tập tiểu cầu khi phối hợp với Aspirin trong dự phòng thứ phát đột quỵ nhồi máu não nhờ cơ chế phân tử nào?",
    "options": [
      "Ức chế trực tiếp enzym COX-2 tại nội mô mạch máu não",
      "Ức chế enzym Phosphodiesterase (PDE) và ức chế thu hồi Adenosin vào tế bào, làm tăng nồng độ cAMP nội bào của tiểu cầu ngăn cản hoạt hóa",
      "Tăng cường giáng hóa fibrinogen trong tuần hoàn",
      "Kích hoạt thụ thể thrombin PAR-1 trên màng tiểu cầu"
    ],
    "correct": 2,
    "explanation": "Dipyridamol ức chế enzym phosphodiesterase (làm tăng cAMP nội bào tiểu cầu) và ức chế bắt giữ adenosin ở hồng cầu (adenosin kích hoạt thụ thể A2 trên tiểu cầu tăng thêm cAMP). Nồng độ cAMP cao ngăn chặn sự huy động calci nội bào, ức chế kết tập tiểu cầu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 497,
    "subject": "duocly2",
    "chapter": "Thuốc chữa thiếu máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tại sao ở bệnh nhân thiếu máu hồng cầu to do thiếu hụt Vitamin B12, xét nghiệm sinh hóa lại thấy nồng độ Acid Methylmalonic (MMA) và Homocystein trong huyết tương tăng cao?",
    "options": [
      "Do tế bào cơ vân tăng giải phóng myoglobin vào máu",
      "Do tủy xương ngừng phân chia tế bào hoàn toàn",
      "Do Vitamin B12 là cofactor thiết yếu cho enzym Methylmalonyl-CoA mutase (chuyển MMA thành succinyl-CoA) và enzym Methionine synthase (chuyển homocystein thành methionin)",
      "Do acid uric cạnh tranh bài tiết qua thận"
    ],
    "correct": 3,
    "explanation": "Vitamin B12 cần cho 2 phản ứng enzym: Methylmalonyl-CoA mutase (cần adenosylcobalamin) và Methionine synthase (cần methylcobalamin). Thiếu B12 làm tắc nghẽn cả 2 phản ứng, khiến cả Methylmalonic acid (MMA) và Homocystein tích tụ tăng vọt trong máu (trong khi thiếu Acid folic chỉ làm tăng Homocystein mà không tăng MMA).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 498,
    "subject": "duocly2",
    "chapter": "Thuốc chữa thiếu máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Dấu hiệu 'Đáp ứng hồng cầu lưới' (Reticulocyte response) xuất hiện vào ngày thứ 5 đến ngày thứ 7 sau khi bắt đầu điều trị thiếu máu thiếu sắt có ý nghĩa lâm sàng là gì?",
    "options": [
      "Cho thấy tủy xương đã đáp ứng tốt với việc bổ sung sắt và bắt đầu tăng sinh sản xuất ồ ạt các hồng cầu mới",
      "Cảnh báo tình trạng quá tải sắt nguy hiểm tại tủy xương",
      "Chỉ điểm phản ứng dị ứng thuốc sắt cần phải ngừng thuốc ngay",
      "Cho thấy bệnh nhân bị tan máu cấp tính nội mạch"
    ],
    "correct": 0,
    "explanation": "Số lượng hồng cầu lưới (hồng cầu non mới rời tủy xương) tăng vọt đạt đỉnh sau 5-7 ngày dùng sắt (gấp 3-5 lần bình thường) là bằng chứng xác thực đầu tiên trên xét nghiệm chứng minh tủy xương đã nhận được sắt và đang tăng tốc sản xuất hồng cầu hiệu quả.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 499,
    "subject": "duocly2",
    "chapter": "Thuốc chữa thiếu máu",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân mắc bệnh Thalassemia thể nặng phải truyền máu định kỳ hàng tháng thường gặp biến chứng ứ đọng sắt mạn tính (Hemochromatosis / Hemosiderosis). Thuốc thải sắt đường uống tiện dụng hiện nay là gì?",
    "options": [
      "Deferoxamin tiêm dưới da liên tục qua bơm tiêm điện",
      "Deferasirox (hoặc Deferiprone) dạng viên uống phân tán mỗi ngày 1 lần",
      "Acid ascorbic liều cao kết hợp lợi tiểu",
      "Natri thiosulfat truyền tĩnh mạch"
    ],
    "correct": 2,
    "explanation": "Trước đây bệnh nhân phải tiêm truyền Deferoxamin dưới da chậm 8-12 tiếng mỗi đêm rất bất tiện. Hiện nay, Deferasirox (Exjade) là thuốc tạo phức chelate sắt đường uống thế hệ mới, chỉ cần uống 1 lần mỗi ngày, thải sắt qua đường mật và phân, giúp ngăn ngừa suy tim và suy gan do ứ sắt ở bệnh nhân Thalassemia.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 500,
    "subject": "duocly2",
    "chapter": "Vitamin",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Tình trạng thiếu hụt Vitamin A gây triệu chứng quáng gà (Nyctalopia - nhìn kém lúc chạng vạng tối) xuất phát từ sự suy giảm sắc tố thị giác nào tại tế bào que của võng mạc?",
    "options": [
      "Iodopsin",
      "Melanin",
      "Rhodopsin (sắc tố thị giác cấu tạo từ 11-cis-retinal gắn với protein Opsin)",
      "Cytochrom c"
    ],
    "correct": 2,
    "explanation": "11-cis-retinal kết hợp với protein Opsin tạo thành Rhodopsin - sắc tố thị giác của tế bào que chịu trách nhiệm cho thị giác trong điều kiện ánh sáng yếu (ban đêm). Thiếu vitamin A làm giảm tái tổng hợp Rhodopsin, gây triệu chứng quáng gà sớm nhất.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 501,
    "subject": "duocly2",
    "chapter": "Vitamin",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Biểu hiện ngộ độc thừa Vitamin D cấp tính hoặc mạn tính (Hypervitaminosis D) chủ yếu xuất phát từ hậu quả bệnh lý nào trong tuần hoàn?",
    "options": [
      "Hạ calci máu nặng gây co giật tetany",
      "Tăng Calci máu ác tính (Hypercalcemia) gây nôn mửa, suy nhược, sỏi thận, vôi hóa mạch máu và các mô mềm (tim, thận, phổi)",
      "Hạ huyết áp kịch phát do giãn cơ trơn mạch",
      "Tăng đào thải ion phosphat gây còi xương thứ phát"
    ],
    "correct": 1,
    "explanation": "Vitamin D liều cao làm tăng hấp thu Ca2+ tối đa ở ruột và tăng tiêu xương, gây tăng Calci máu nặng. Calci lắng đọng vào các mô mềm (vôi hóa di căn ở thận gây suy thận, vôi hóa động mạch và mô tim), kèm theo đa niệu, mất nước, nôn mửa và rối loạn nhịp tim.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 502,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Maraviroc là thuốc kháng retrovirus độc đáo nhắm vào tế bào vật chủ của người thay vì nhắm vào virus HIV thông qua cơ chế nào?",
    "options": [
      "Ức chế thụ thể CD4 trên tế bào lympho T",
      "Đối kháng thụ thể đồng vận chemokine CCR5 trên bề mặt tế bào lympho người, ngăn cản protein gp120 của HIV-1 gắn kết và xâm nhập",
      "Kích thích tế bào lympho tự thực bào",
      "Bất hoạt thụ thể CXCR4 tại tủy xương"
    ],
    "correct": 2,
    "explanation": "Maraviroc là chất điều hòa dị lập thể gắn vào thụ thể CCR5 của tế bào miễn dịch người (đồng thụ thể cần thiết cho các chủng virus HIV-1 hướng CCR5 xâm nhập). Khóa thụ thể CCR5 ngăn gp120 của virus tương tác với tế bào. Bắt buộc phải làm xét nghiệm tính hướng đích (Tropism assay) trước khi dùng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 503,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Valacyclovir là dạng tiền chất ester L-valyl của Acyclovir được phát triển nhằm mục đích khắc phục nhược điểm dược động học nào của Acyclovir?",
    "options": [
      "Tăng sinh khả dụng đường uống từ 15-20% của Acyclovir lên mức 55-70% nhờ hấp thu qua chất vận chuyển peptid ở ruột non",
      "Giảm độ thanh thải qua thận để tránh suy thận",
      "Tăng liên kết protein huyết tương lên 100%",
      "Tránh chuyển hóa bước đầu qua phổi"
    ],
    "correct": 1,
    "explanation": "Acyclovir đường uống có sinh khả dụng rất thấp (chỉ 15-20%) do khó qua màng ruột, phải uống 5 lần/ngày. Valacyclovir là tiền chất ester gắn acid amin L-valin, được các chất vận chuyển peptid (PEPT1) tại ruột non hấp thu tích cực, nâng sinh khả dụng lên 55-70%, chỉ cần uống 2-3 lần/ngày.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 504,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc Rasburicase (Urate oxidase tái tổ hợp) được chỉ định trong cấp cứu Hội chứng tiêu giải khối u (TLS) phát huy tác dụng hạ nhanh nồng độ Acid Uric máu nhờ phản ứng enzym nào?",
    "options": [
      "Ức chế enzym Xanthine Oxidase ngăn tạo acid uric",
      "Tăng bài xuất acid uric qua đường mật theo phân",
      "Chuyển đổi trực tiếp phân tử Acid Uric khó tan thành Allantoin hòa tan cao gấp 10 lần, dễ dàng đào thải qua nước tiểu mà không gây kết tinh ở ống thận",
      "Phá hủy các phân tử purin tự do trong máu"
    ],
    "correct": 3,
    "explanation": "Con người thiếu enzym urate oxidase nên acid uric là sản phẩm thoái biến cuối cùng rất khó tan. Rasburicase là enzym urate oxidase tái tổ hợp, xúc tác oxy hóa acid uric thành allantoin - một chất chuyển hóa có độ tan trong nước cao gấp 10 lần acid uric, tống ra nước tiểu an toàn giúp hạ acid uric máu tức thì.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 505,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc ức chế enzym Topoisomerase II dẫn xuất Epipodophyllotoxin nào sau đây gây kẹt phức hợp có thể bẻ gãy chuỗi xoắn kép DNA và có nguy cơ gây bệnh bạch cầu cấp thứ phát (Secondary acute leukemia) sau vài năm điều trị?",
    "options": [
      "Etoposid (VP-16 / Teniposid)",
      "Irinotecan",
      "Topotecan",
      "Dactinomycin"
    ],
    "correct": 0,
    "explanation": "Etoposid gắn và ổn định phức hợp trung gian giữa Topoisomerase II và DNA, ngăn cản sự hàn gắn lại chuỗi xoắn kép DNA, làm DNA bị đứt gãy hai sợi tích lũy gây chết tế bào ở pha S-G2. Đứt gãy DNA có thể gây chuyển đoạn nhiễm sắc thể (đặc biệt gen MLL ở 11q23) dẫn đến nguy cơ ung thư máu thứ phát sau này.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 506,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Octreotid (chất tương tự Somatostatin tổng hợp) được chỉ định đặc hiệu trong xử trí ngộ độc nhóm thuốc hạ đường huyết nào để ngăn chặn tái phát các cơn hạ đường huyết kéo dài?",
    "options": [
      "Thuốc ức chế SGLT-2",
      "Metformin",
      "Thuốc ức chế alpha-glucosidase",
      "Thuốc nhóm Sulfonylurea (như Glibenclamid, Glimepirid) do Octreotid ức chế mạnh mẽ sự bài tiết Insulin từ tế bào beta đảo tụy"
    ],
    "correct": 3,
    "explanation": "Khi ngộ độc Sulfonylurea, truyền glucose liên tục có thể kích thích tế bào beta tụy tiết thêm insulin, gây hạ đường huyết dội ngược nguy hiểm. Octreotid gắn vào thụ thể Somatostatin type 2 ở tế bào beta đảo tụy, ức chế dòng calci đi vào màng tế bào, cắt đứt hoàn toàn sự bài tiết insulin, ngăn ngừa tái phát hạ đường huyết.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  },
  {
    "id": 507,
    "subject": "duocly2",
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc tạo phức chelate Natri Calci Edetat (CaNa2-EDTA) và Succimer (DMSA) được chỉ định ưu tiên hàng đầu trong điều trị ngộ độc kim loại nặng tích lũy nào?",
    "options": [
      "Ngộ độc Sắt cấp tính",
      "Ngộ độc Chì (Lead poisoning / Plumbism)",
      "Ngộ độc Vàng nguyên tố",
      "Ngộ độc Bạc nitrat"
    ],
    "correct": 2,
    "explanation": "CaNa2-EDTA (tiêm tĩnh mạch) và Succimer (DMSA đường uống) là các chất tạo chelate số 1 trong điều trị ngộ độc Chì cấp và mạn tính. Ion Chì (Pb2+) thay thế ion Calci trong phức hợp EDTA do có ái lực cao hơn, tạo phức chì-EDTA bền vững không độc và đào thải nhanh chóng qua nước tiểu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)"
  }
];

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
