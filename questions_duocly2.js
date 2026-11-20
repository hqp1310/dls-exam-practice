// NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM DƯỢC LÝ 2 CHUẨN BỘ Y TẾ (507 CÂU)
// Đào tạo Dược sĩ Đại học - Bác sĩ Đa khoa (Bộ Y tế - PGS.TS. Mai Tất Tố, TS. Vũ Thị Trâm)
// Chuẩn khung 20 bài (32 tiết) - 100% không mở ngoặc đơn lộ đáp án - Đáp án xáo trộn đều A/B/C/D
// Tích hợp giải thích chi tiết toàn bộ các phương án Đúng & Sai (Distractor Explanations)
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
      "Strophanthus kombe",
      "Digitalis purpurea",
      "Digitalis lanata",
      "Rauwolfia serpentina"
    ],
    "correct": 2,
    "explanation": "Digoxin được chiết xuất chủ yếu từ lá cây Dương địa hoàng lông Digitalis lanata (thông qua dẫn xuất lanatosid C rồi khử acetyl thành digoxin). Trong khi Digitalis purpurea (Dương địa hoàng tía) chiết xuất chủ yếu Digitoxin.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Strophanthus kombe chiết xuất Ouabain (G-strophanthin) tác dụng rất nhanh bằng đường tiêm, không phải nguồn chiết xuất Digoxin.",
      "Digitalis purpurea (Dương địa hoàng tía) chiết xuất chủ yếu Digitoxin (chuyển hóa qua gan, T1/2 ~7 ngày), không phải nguồn chính cung cấp Digoxin.",
      "Digoxin được chiết xuất chủ yếu từ lá cây Dương địa hoàng lông Digitalis lanata (thông qua dẫn xuất lanatosid C rồi khử acetyl thành digoxin). Trong khi Digitalis purpurea (Dương địa hoàng tía) chiết xuất chủ yếu Digitoxin.",
      "Rauwolfia serpentina chiết xuất Reserpin - thuốc liệt giao cảm trị tăng huyết áp, không thuộc nhóm glycosid trợ tim."
    ]
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
      "Chuỗi oligosaccharid liên kết glycosid ở vị trí C3",
      "Khung steroid mang vòng lacton không no tại vị trí C17",
      "Nhóm thế hydroxyl gắn trực tiếp trên nhân steroid ở C3",
      "Các gốc đường digitoxose liên kết nối tiếp ở mạch nhánh"
    ],
    "correct": 1,
    "explanation": "Phần không đường (aglycon/genin) mang khung steroid (cyclopentanoperhydrophenanthren) gắn vòng lacton không bão hòa ở C17 và nhóm OH hướng beta ở C14 quyết định tác dụng trợ tim và độc tính. Phần đường chỉ ảnh hưởng dược động học (độ tan, hấp thu, liên kết protein).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Mạch đường (ose) ở C3 chỉ quyết định tính tan và dược động học (hấp thu, liên kết protein), không quyết định trực tiếp hoạt tính co cơ tim và độc tính.",
      "Phần không đường (aglycon/genin) mang khung steroid (cyclopentanoperhydrophenanthren) gắn vòng lacton không bão hòa ở C17 và nhóm OH hướng beta ở C14 quyết định tác dụng trợ tim và độc tính. Phần đường chỉ ảnh hưởng dược động học (độ tan, hấp thu, liên kết protein).",
      "Mạch đường (ose) ở C3 chỉ quyết định tính tan và dược động học (hấp thu, liên kết protein), không quyết định trực tiếp hoạt tính co cơ tim và độc tính.",
      "Mạch đường (ose) ở C3 chỉ quyết định tính tan và dược động học (hấp thu, liên kết protein), không quyết định trực tiếp hoạt tính co cơ tim và độc tính."
    ]
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
      "Enzym Na+/K+-ATPase ở màng tế bào",
      "Kênh đồng vận chuyển 3Na+/1Ca2+",
      "Thụ thể ryanodine trên màng lưới nội chất",
      "Enzym phosphodiesterase-3 trong tế bào cơ tim"
    ],
    "correct": 0,
    "explanation": "Digoxin ức chế chọn lọc bơm Na+/K+-ATPase làm tăng Na+ nội bào. Sự tăng Na+ nội bào làm suy giảm gradient nồng độ dẫn tới ức chế bơm trao đổi Na+/Ca2+ (hoặc đảo chiều bơm), giảm thải Ca2+ ra ngoài, làm tích tụ Ca2+ tự do trong bào tương gắn vào troponin C tăng lực co cơ.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Digoxin ức chế chọn lọc bơm Na+/K+-ATPase làm tăng Na+ nội bào. Sự tăng Na+ nội bào làm suy giảm gradient nồng độ dẫn tới ức chế bơm trao đổi Na+/Ca2+ (hoặc đảo chiều bơm), giảm thải Ca2+ ra ngoài, làm tích tụ Ca2+ tự do trong bào tương gắn vào troponin C tăng lực co cơ.",
      "Bơm đổi Na+/Ca2+ (NCX) chỉ bị ức chế gián tiếp do nồng độ Na+ nội bào tăng cao, không phải đích gắn ức chế trực tiếp ban đầu của Digoxin.",
      "Thụ thể Ryanodine (RyR) phóng thích Ca2+ từ lưới nội sinh chất, không phải là thụ thể hoặc bơm bị glycosid tim gắn ức chế trực tiếp.",
      "Enzym PDE-3 là đích tác dụng của nhóm Milrinon/Inamrinon (thuốc tăng co bóp không glycosid), không phải cơ chế của Digitalis."
    ]
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
      "Tăng co bóp, giảm nhịp xoang, giảm dẫn truyền nhĩ thất",
      "Giảm co bóp, tăng nhịp xoang, tăng dẫn truyền nhĩ thất",
      "Tăng co bóp, tăng nhịp xoang, tăng tốc độ dẫn truyền",
      "Giảm co bóp, giảm nhịp tim, tăng kích thích nút nhĩ thất"
    ],
    "correct": 0,
    "explanation": "Quy luật 4 tác dụng kinh điển của Digitalis: Tăng co bóp (inotropic dương), chậm nhịp (chronotropic âm), giảm dẫn truyền nhĩ thất (dromotropic âm), tăng tính kích thích sợi cơ tâm thất ở liều cao (bathmotropic dương).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Quy luật 4 tác dụng kinh điển của Digitalis: Tăng co bóp (inotropic dương), chậm nhịp (chronotropic âm), giảm dẫn truyền nhĩ thất (dromotropic âm), tăng tính kích thích sợi cơ tâm thất ở liều cao (bathmotropic dương).",
      "Phương án này không đúng vì \"Giảm co bóp, tăng nhịp xoang, tăng dẫn truyền nhĩ thất\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tăng co bóp, tăng nhịp xoang, tăng tốc độ dẫn truyền\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Giảm co bóp, giảm nhịp tim, tăng kích thích nút nhĩ thất\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Chẹn thụ thể beta-1 adrenergic ở màng tế bào cơ tim",
      "Tăng giải phóng catecholamin tận cùng sợi giao cảm tim",
      "Ức chế kênh calci typ T ở các tế bào dẫn nhịp tâm nhĩ",
      "Tăng trương lực phế vị kéo dài thời kỳ trơ nút nhĩ thất"
    ],
    "correct": 3,
    "explanation": "Digitalis kích thích trực tiếp trung tâm phế vị ở hành não và thụ thể áp lực ở xoang cảnh, tăng hoạt tính đối giao cảm (dây X), làm giảm tính tự động nút xoang và kéo dài thời kỳ trơ của nút nhĩ thất, ngăn bớt các xung động từ nhĩ xuống thất.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Chẹn beta-1 adrenergic là cơ chế của nhóm Beta-blocker (Bisoprolol, Metoprolol), không phải cơ chế làm chậm nhịp của Glycosid tim.",
      "Tăng giải phóng catecholamin sẽ làm tim đập nhanh và tăng nhu cầu oxy cơ tim, hoàn toàn trái ngược với tác dụng làm chậm nhịp tim của Digitalis.",
      "Phương án này không đúng vì \"Ức chế kênh calci typ T ở các tế bào dẫn nhịp tâm nhĩ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Digitalis kích thích trực tiếp trung tâm phế vị ở hành não và thụ thể áp lực ở xoang cảnh, tăng hoạt tính đối giao cảm (dây X), làm giảm tính tự động nút xoang và kéo dài thời kỳ trơ của nút nhĩ thất, ngăn bớt các xung động từ nhĩ xuống thất."
    ]
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
      "Đoạn ST chênh lên dạng vòm nhọn",
      "Khoảng QT kéo dài kèm sóng U biên độ lớn",
      "Đoạn ST chênh lõm hình lòng thuyền",
      "Đoạn PR rút ngắn kèm QRS giãn rộng"
    ],
    "correct": 2,
    "explanation": "Dấu hiệu 'ngấm digitalis' trên ECG điển hình là đoạn ST chênh xuống hình lõm đáy cong như lòng thuyền (hình thìa súp / Salvador Dali's mustache), sóng T dẹt hoặc âm, khoảng QT rút ngắn lại.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Đoạn ST chênh lên dạng vòm nhọn\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Khoảng QT kéo dài kèm sóng U biên độ lớn\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Dấu hiệu 'ngấm digitalis' trên ECG điển hình là đoạn ST chênh xuống hình lõm đáy cong như lòng thuyền (hình thìa súp / Salvador Dali's mustache), sóng T dẹt hoặc âm, khoảng QT rút ngắn lại.",
      "Phương án này không đúng vì \"Đoạn PR rút ngắn kèm QRS giãn rộng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Thuốc ức chế Na+/K+-ATPase (Glycosid tim)",
      "Thuốc chẹn kênh calci nhóm dihydropyridin",
      "Thuốc ức chế carbonic anhydrase",
      "Thuốc chẹn thụ thể beta-adrenergic"
    ],
    "correct": 0,
    "explanation": "Ảo thị màu vàng hoặc xanh lá cây (xanthopsia), nhìn thấy vầng hào quang là dấu hiệu nhiễm độc thần kinh thị giác kinh điển của Digitalis, do thuốc ức chế Na+/K+-ATPase tại tế bào nón/que của võng mạc.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Ảo thị màu vàng hoặc xanh lá cây (xanthopsia), nhìn thấy vầng hào quang là dấu hiệu nhiễm độc thần kinh thị giác kinh điển của Digitalis, do thuốc ức chế Na+/K+-ATPase tại tế bào nón/que của võng mạc.",
      "Phương án này không đúng vì \"Thuốc chẹn kênh calci nhóm dihydropyridin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thuốc ức chế carbonic anhydrase\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thuốc chẹn thụ thể beta-adrenergic\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Ion Natri (Na+)",
      "Ion Kali (K+)",
      "Ion Clorid (Cl-)",
      "Ion Bicarbonat (HCO3-)"
    ],
    "correct": 1,
    "explanation": "K+ và Digoxin cạnh tranh gắn vào vị trí tiểu đơn vị alpha của bơm Na+/K+-ATPase. Khi hạ K+ máu, vị trí gắn bị bỏ trống tạo điều kiện cho Digoxin gắn mạnh mẽ và bền vững hơn, gây ngộ độc nặng dù nồng độ thuốc trong máu bình thường.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Ion Natri (Na+)\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "K+ và Digoxin cạnh tranh gắn vào vị trí tiểu đơn vị alpha của bơm Na+/K+-ATPase. Khi hạ K+ máu, vị trí gắn bị bỏ trống tạo điều kiện cho Digoxin gắn mạnh mẽ và bền vững hơn, gây ngộ độc nặng dù nồng độ thuốc trong máu bình thường.",
      "Phương án này không đúng vì \"Ion Clorid (Cl-)\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ion Bicarbonat (HCO3-)\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Lidocain",
      "Quinidin",
      "Mexiletin",
      "Amiodaron"
    ],
    "correct": 1,
    "explanation": "Quinidin đẩy Digoxin ra khỏi các điểm gắn ở mô cơ vân và ức chế protein vận chuyển P-glycoprotein tại ống thận, làm giảm thể tích phân bố và giảm thanh thải Digoxin qua thận, khiến nồng độ Digoxin trong huyết tương tăng gấp đôi.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Lidocain\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Quinidin đẩy Digoxin ra khỏi các điểm gắn ở mô cơ vân và ức chế protein vận chuyển P-glycoprotein tại ống thận, làm giảm thể tích phân bố và giảm thanh thải Digoxin qua thận, khiến nồng độ Digoxin trong huyết tương tăng gấp đôi.",
      "Phương án này không đúng vì \"Mexiletin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Amiodaron\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
  },
  {
    "id": 10,
    "subject": "duocly2",
    "chapter": "Thuốc trợ tim",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hai hoạt chất glycosid trợ tim cùng chiết xuất từ chi Digitalis nhưng có số lượng nhóm hydroxyl khác nhau trên khung steroid dẫn đến sự phân cực đối lập. Sự khác biệt căn bản về số phận sinh học trong cơ thể giữa phân tử phân cực (mang 3 nhóm OH) và phân tử thân dầu (mang 2 nhóm OH) là gì?",
    "options": [
      "Phân tử phân cực gắn mạnh protein; phân tử thân dầu ở dạng tự do",
      "Phân tử thân dầu bài xuất qua thận; phân tử phân cực chuyển hóa gan",
      "Phân tử phân cực thải trừ qua thận; phân tử thân dầu chuyển hóa qua gan",
      "Phân tử phân cực có t1/2 5-7 ngày; phân tử thân dầu có t1/2 1 ngày"
    ],
    "correct": 2,
    "explanation": "Digoxin phân cực ưa nước, gắn protein thấp (25%), thải trừ qua thận 80% dạng nguyên vẹn (T1/2 = 36-40h). Digitoxin tan nhiều trong lipid, gắn protein rất cao (95%), chuyển hóa 90% qua gan có chu kỳ gan-ruột và T1/2 kéo dài tới 5-7 ngày.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Phân tử phân cực gắn mạnh protein; phân tử thân dầu ở dạng tự do\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Phân tử thân dầu bài xuất qua thận; phân tử phân cực chuyển hóa gan\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Digoxin phân cực ưa nước, gắn protein thấp (25%), thải trừ qua thận 80% dạng nguyên vẹn (T1/2 = 36-40h). Digitoxin tan nhiều trong lipid, gắn protein rất cao (95%), chuyển hóa 90% qua gan có chu kỳ gan-ruột và T1/2 kéo dài tới 5-7 ngày.",
      "Phương án này không đúng vì \"Phân tử phân cực có t1/2 5-7 ngày; phân tử thân dầu có t1/2 1 ngày\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Truyền tĩnh mạch calci gluconat",
      "Dùng kháng thể kháng Digoxin đặc hiệu (Fab)",
      "Sốc điện chuyển nhịp phá rung thất khẩn cấp",
      "Lọc máu thẩm tách ngoài thận"
    ],
    "correct": 1,
    "explanation": "Thuốc giải độc đặc hiệu duy nhất là kháng thể kháng Digoxin (Digoxin Immune Fab / Digibind). Chống chỉ định sốc điện vì nguy cơ gây rung thất trơ; Lọc máu không hiệu quả vì thể tích phân bố của Digoxin rất lớn (Vd = 6-7 L/kg); Calci IV cấm dùng vì tăng nguy cơ ngừng tim kỳ tâm thu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Truyền tĩnh mạch calci gluconat\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Thuốc giải độc đặc hiệu duy nhất là kháng thể kháng Digoxin (Digoxin Immune Fab / Digibind). Chống chỉ định sốc điện vì nguy cơ gây rung thất trơ; Lọc máu không hiệu quả vì thể tích phân bố của Digoxin rất lớn (Vd = 6-7 L/kg); Calci IV cấm dùng vì tăng nguy cơ ngừng tim kỳ tâm thu.",
      "Phương án này không đúng vì \"Sốc điện chuyển nhịp phá rung thất khẩn cấp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Lọc máu thẩm tách ngoài thận\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Làm tăng đào thải glycosid qua thận gây suy tim cấp",
      "Tạo tủa chelate gây tắc nghẽn hệ vi tuần hoàn phổi",
      "Làm tăng calci nội bào gây rung thất hoặc ngừng tim tâm thu",
      "Cạnh tranh thụ thể phế vị ở hành não gây hạ huyết áp"
    ],
    "correct": 2,
    "explanation": "Bản thân Digitalis đã làm tích tụ một lượng lớn Ca2+ tự do trong tế bào cơ tim. Tiêm thêm Calci đường tĩnh mạch sẽ gây quá tải Ca2+ nội bào trầm trọng, kích hoạt hiện tượng hậu khử cực muộn (DADs) gây rung thất hoặc ngừng tim ở thì tâm thu (Stone heart).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Làm tăng đào thải glycosid qua thận gây suy tim cấp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tạo tủa chelate gây tắc nghẽn hệ vi tuần hoàn phổi\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Bản thân Digitalis đã làm tích tụ một lượng lớn Ca2+ tự do trong tế bào cơ tim. Tiêm thêm Calci đường tĩnh mạch sẽ gây quá tải Ca2+ nội bào trầm trọng, kích hoạt hiện tượng hậu khử cực muộn (DADs) gây rung thất hoặc ngừng tim ở thì tâm thu (Stone heart).",
      "Phương án này không đúng vì \"Cạnh tranh thụ thể phế vị ở hành não gây hạ huyết áp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Quinidin hoặc Disopyramid đường tĩnh mạch\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Lidocain và Phenytoin (Nhóm IB) là hai thuốc được ưu tiên hàng đầu điều trị loạn nhịp thất do ngộ độc Digitalis, vì chúng ức chế tính tự động bất thường ở thất mà không làm chậm thêm dẫn truyền qua nút nhĩ thất (Phenytoin thậm chí cải thiện dẫn truyền nhĩ thất).",
      "Phương án này không đúng vì \"Amiodaron hoặc Sotalol đường tiêm truyền\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Verapamil hoặc Diltiazem đường tĩnh mạch chậm\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Từ 0.5 đến 0.9 ng/mL",
      "Từ 1.5 đến 2.5 ng/mL",
      "Từ 2.6 đến 4.0 ng/mL",
      "Từ 0.1 đến 0.4 ng/mL"
    ],
    "correct": 0,
    "explanation": "Theo các hướng dẫn tim mạch hiện đại (dựa trên thử nghiệm DIG), nồng độ Digoxin huyết tương tối ưu trong suy tim là 0.5 - 0.9 ng/mL (hoặc 0.8 - 1.2 ng/mL trong rung nhĩ). Khi nồng độ >= 2.0 ng/mL, tỷ lệ ngộ độc và tử vong tăng vọt.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Theo các hướng dẫn tim mạch hiện đại (dựa trên thử nghiệm DIG), nồng độ Digoxin huyết tương tối ưu trong suy tim là 0.5 - 0.9 ng/mL (hoặc 0.8 - 1.2 ng/mL trong rung nhĩ). Khi nồng độ >= 2.0 ng/mL, tỷ lệ ngộ độc và tử vong tăng vọt.",
      "Phương án này không đúng vì \"Từ 1.5 đến 2.5 ng/mL\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Từ 2.6 đến 4.0 ng/mL\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Từ 0.1 đến 0.4 ng/mL\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Kích thích guanylyl cyclase làm tăng cGMP",
      "Kích thích adenylate cyclase làm tăng noradrenalin",
      "Ức chế phosphodiesterase-3 làm tăng cAMP nội bào",
      "Chẹn thụ thể beta-1 giao cảm làm giảm cAMP"
    ],
    "correct": 2,
    "explanation": "Milrinon và Inamrinon là thuốc ức chế chọn lọc enzym phosphodiesterase typ 3 (PDE-3), ngăn thoái giáng cAMP. Tăng cAMP trong cơ tim làm tăng Ca2+ nội bào tăng co bóp tim; trong khi tăng cAMP ở cơ trơn mạch máu gây giãn mạch (tác dụng 'Inodilator').",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Kích thích guanylyl cyclase làm tăng cGMP\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích thích adenylate cyclase làm tăng noradrenalin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Milrinon và Inamrinon là thuốc ức chế chọn lọc enzym phosphodiesterase typ 3 (PDE-3), ngăn thoái giáng cAMP. Tăng cAMP trong cơ tim làm tăng Ca2+ nội bào tăng co bóp tim; trong khi tăng cAMP ở cơ trơn mạch máu gây giãn mạch (tác dụng 'Inodilator').",
      "Chẹn beta-1 adrenergic là cơ chế của nhóm Beta-blocker (Bisoprolol, Metoprolol), không phải cơ chế làm chậm nhịp của Glycosid tim."
    ]
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
      "Gây viêm xơ hóa mô kẽ phổi tiến triển không hồi phục",
      "Gây hoại tử biểu mô ống thận cấp và suy thận tiến triển",
      "Gây hội chứng tiêu cơ vân cấp và suy gan tối cấp tính",
      "Tăng tỷ lệ tử vong liên quan loạn nhịp thất ác tính"
    ],
    "correct": 3,
    "explanation": "Thử nghiệm lâm sàng PROMISE đã chứng minh dùng thuốc ức chế PDE-3 đường uống kéo dài làm tăng tỷ lệ tử vong đáng kể so với giả dược, chủ yếu do biến chứng loạn nhịp thất ác tính và đột tử. Vì vậy, nhóm này chỉ được dùng đường tĩnh mạch ngắn hạn trong suy tim cấp mất bù.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Gây viêm xơ hóa mô kẽ phổi tiến triển không hồi phục\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Gây hoại tử biểu mô ống thận cấp và suy thận tiến triển\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Gây hội chứng tiêu cơ vân cấp và suy gan tối cấp tính\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Thử nghiệm lâm sàng PROMISE đã chứng minh dùng thuốc ức chế PDE-3 đường uống kéo dài làm tăng tỷ lệ tử vong đáng kể so với giả dược, chủ yếu do biến chứng loạn nhịp thất ác tính và đột tử. Vì vậy, nhóm này chỉ được dùng đường tĩnh mạch ngắn hạn trong suy tim cấp mất bù."
    ]
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
      "Chủ vận ưu thế trên thụ thể beta-1 adrenergic",
      "Kích thích chọn lọc thụ thể alpha-1 adrenergic",
      "Đối kháng thụ thể dopaminergic D1 ở ngoại biên",
      "Kích thích chọn lọc thụ thể beta-2 adrenergic"
    ],
    "correct": 0,
    "explanation": "Dobutamin là đồng phân racemic tác động chủ vận ưu thế trên thụ thể beta-1 adrenergic ở màng tế bào cơ tim, làm tăng mạnh sức co bóp cơ tim (inotropic (+)) với mức tăng nhịp tim và tiêu thụ oxy tương đối ít hơn so với dopamin hoặc isoproterenol.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Dobutamin là đồng phân racemic tác động chủ vận ưu thế trên thụ thể beta-1 adrenergic ở màng tế bào cơ tim, làm tăng mạnh sức co bóp cơ tim (inotropic (+)) với mức tăng nhịp tim và tiêu thụ oxy tương đối ít hơn so với dopamin hoặc isoproterenol.",
      "Phương án này không đúng vì \"Kích thích chọn lọc thụ thể alpha-1 adrenergic\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Đối kháng thụ thể dopaminergic D1 ở ngoại biên\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích thích chọn lọc thụ thể beta-2 adrenergic\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Tăng liều dùng hàng ngày bù trừ giảm độ lọc thận",
      "Giảm liều dùng hoặc giãn khoảng cách đưa thuốc",
      "Giữ nguyên liều nạp và phối hợp thêm lợi tiểu quai",
      "Chuyển sang tiêm tĩnh mạch tránh chuyển hóa gan"
    ],
    "correct": 1,
    "explanation": "Do 80% lượng Digoxin được thải trừ qua thận dưới dạng nguyên vẹn, độ thanh thải của Digoxin tỷ lệ thuận trực tiếp với độ thanh thải creatinin (CrCl). Khi suy thận, thuốc bị tích lũy gây ngộ độc nếu không giảm liều hoặc giãn khoảng cách đưa liều.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Tăng liều dùng hàng ngày bù trừ giảm độ lọc thận\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Do 80% lượng Digoxin được thải trừ qua thận dưới dạng nguyên vẹn, độ thanh thải của Digoxin tỷ lệ thuận trực tiếp với độ thanh thải creatinin (CrCl). Khi suy thận, thuốc bị tích lũy gây ngộ độc nếu không giảm liều hoặc giãn khoảng cách đưa liều.",
      "Phương án này không đúng vì \"Giữ nguyên liều nạp và phối hợp thêm lợi tiểu quai\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Chuyển sang tiêm tĩnh mạch tránh chuyển hóa gan\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Ức chế men chuyển, chẹn beta, lợi tiểu quai, chẹn alpha",
      "Ức chế men chuyển, chẹn thụ thể ARB, chẹn calci, lợi tiểu thiazid",
      "Chẹn kênh calci, chẹn beta, lợi tiểu quai, đồng vận alpha trung ương",
      "Chẹn beta chọn lọc, kháng aldosteron, giãn trực tiếp mạch, nitrat"
    ],
    "correct": 1,
    "explanation": "4 nhóm thuốc hạ áp nền tảng bậc một (first-line) gồm: ACEI, ARB, CCB và Lợi tiểu thiazid / thiazid-like. Thuốc chẹn beta chỉ ưu tiên khi có chỉ định bắt buộc (sau nhồi máu cơ tim, suy tim, đau thắt ngực). Thuốc chẹn alpha-1, kích thích alpha-2 trung ương, giãn mạch trực tiếp hay lợi tiểu quai chỉ xếp vào nhóm bậc hai/bậc ba khi có chỉ định đặc biệt.",
    "reference": "Sách Dược lý 2 tr. 54-55",
    "distractorExplanations": [
      "Thuốc chẹn beta giao cảm hiện nay không còn là lựa chọn hàng đầu cho tăng huyết áp không biến chứng (chỉ ưu tiên khi có bệnh mạch vành, suy tim hoặc sau nhồi máu cơ tim).",
      "4 nhóm thuốc hạ áp nền tảng bậc một (first-line) gồm: ACEI, ARB, CCB và Lợi tiểu thiazid / thiazid-like. Thuốc chẹn beta chỉ ưu tiên khi có chỉ định bắt buộc (sau nhồi máu cơ tim, suy tim, đau thắt ngực). Thuốc chẹn alpha-1, kích thích alpha-2 trung ương, giãn mạch trực tiếp hay lợi tiểu quai chỉ xếp vào nhóm bậc hai/bậc ba khi có chỉ định đặc biệt.",
      "Thuốc chẹn beta giao cảm hiện nay không còn là lựa chọn hàng đầu cho tăng huyết áp không biến chứng (chỉ ưu tiên khi có bệnh mạch vành, suy tim hoặc sau nhồi máu cơ tim).",
      "Thuốc chẹn beta giao cảm hiện nay không còn là lựa chọn hàng đầu cho tăng huyết áp không biến chứng (chỉ ưu tiên khi có bệnh mạch vành, suy tim hoặc sau nhồi máu cơ tim)."
    ]
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
      "Thụ thể AT1 của angiotensin II trên cơ trơn mạch",
      "Enzym aminopeptidase A chuyển hóa angiotensin II",
      "Enzym chuyển angiotensin (ACE / kininase II)",
      "Enzym neutral endopeptidase (neprilysin)"
    ],
    "correct": 2,
    "explanation": "ACE chính là enzym Kininase II (Peptidyl-dipeptidase A), vừa có chức năng bẻ gãy Angiotensin I (10 acid amin) thành Angiotensin II (8 acid amin - chất co mạch mạnh), vừa giáng hóa Bradykinin (nonapeptide 9 acid amin - chất giãn mạch). Thuốc ACEI ức chế enzym này nên vừa giảm Angiotensin II vừa tích lũy Bradykinin.",
    "reference": "Sách Dược lý 2 tr. 66-67",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Thụ thể AT1 của angiotensin II trên cơ trơn mạch\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Enzym aminopeptidase A chuyển hóa angiotensin II\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "ACE chính là enzym Kininase II (Peptidyl-dipeptidase A), vừa có chức năng bẻ gãy Angiotensin I (10 acid amin) thành Angiotensin II (8 acid amin - chất co mạch mạnh), vừa giáng hóa Bradykinin (nonapeptide 9 acid amin - chất giãn mạch). Thuốc ACEI ức chế enzym này nên vừa giảm Angiotensin II vừa tích lũy Bradykinin.",
      "Phương án này không đúng vì \"Enzym neutral endopeptidase (neprilysin)\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Kích thích trung tâm phản xạ ho tại hành não",
      "Tăng phóng thích histamin từ dưỡng bào phế quản",
      "Tích tụ bradykinin và chất P ở đường hô hấp",
      "Tích tụ trực tiếp angiotensin I tại phế quản"
    ],
    "correct": 2,
    "explanation": "Ho khan dai dẳng (tỷ lệ 5-20%) là phản ứng bất lợi đặc trưng chỉ gặp ở nhóm ACEI, do ức chế enzym Kininase II làm ứ đọng Bradykinin và chất P ở đường hô hấp trên. Khi gặp tác dụng phụ này, giải pháp tối ưu là chuyển sang nhóm chẹn thụ thể ARB.",
    "reference": "Sách Dược lý 2 tr. 68",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Kích thích trung tâm phản xạ ho tại hành não\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tăng phóng thích histamin từ dưỡng bào phế quản\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Ho khan dai dẳng (tỷ lệ 5-20%) là phản ứng bất lợi đặc trưng chỉ gặp ở nhóm ACEI, do ức chế enzym Kininase II làm ứ đọng Bradykinin và chất P ở đường hô hấp trên. Khi gặp tác dụng phụ này, giải pháp tối ưu là chuyển sang nhóm chẹn thụ thể ARB.",
      "Phương án này không đúng vì \"Tích tụ trực tiếp angiotensin I tại phế quản\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Hẹp động mạch thận một bên còn thận đối bên khỏe",
      "Xơ vữa vi mạch vỏ thận ở bệnh nhân cao tuổi tăng áp",
      "Tăng áp tĩnh mạch thận hai bên trong hội chứng thận",
      "Hẹp động mạch thận hai bên hoặc trên thận độc nhất"
    ],
    "correct": 3,
    "explanation": "Khi hẹp động mạch thận hai bên (hoặc thận độc nhất), áp lực tưới máu cầu thận phụ thuộc hoàn toàn vào tác dụng co tiểu động mạch đi của Angiotensin II để duy trì GFR. Uống ACEI/ARB làm giãn tiểu động mạch đi, áp lực lọc cầu thận sập về 0 gây suy thận cấp vô niệu ngay lập tức.",
    "reference": "Sách Dược lý 2 tr. 69",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Hẹp động mạch thận một bên còn thận đối bên khỏe\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Xơ vữa vi mạch vỏ thận ở bệnh nhân cao tuổi tăng áp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tăng áp tĩnh mạch thận hai bên trong hội chứng thận\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Khi hẹp động mạch thận hai bên (hoặc thận độc nhất), áp lực tưới máu cầu thận phụ thuộc hoàn toàn vào tác dụng co tiểu động mạch đi của Angiotensin II để duy trì GFR. Uống ACEI/ARB làm giãn tiểu động mạch đi, áp lực lọc cầu thận sập về 0 gây suy thận cấp vô niệu ngay lập tức."
    ]
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
      "Tên hoạt chất tận cùng bằng đuôi pril",
      "Tên hoạt chất tận cùng bằng đuôi dipin",
      "Tên hoạt chất tận cùng bằng đuôi sartan",
      "Tên hoạt chất tận cùng bằng đuôi olol"
    ],
    "correct": 2,
    "explanation": "Các thuốc chẹn chọn lọc thụ thể Angiotensin II (ARB) đều mang hậu tố '-sartan' (Losartan, Valsartan, Candesartan, Telmisartan). Nhóm '-pril' là ACEI, nhóm '-olol' là chẹn Beta, nhóm '-dipin' là CCB DHP.",
    "reference": "Sách Dược lý 2 tr. 70",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Tên hoạt chất tận cùng bằng đuôi pril\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tên hoạt chất tận cùng bằng đuôi dipin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Các thuốc chẹn chọn lọc thụ thể Angiotensin II (ARB) đều mang hậu tố '-sartan' (Losartan, Valsartan, Candesartan, Telmisartan). Nhóm '-pril' là ACEI, nhóm '-olol' là chẹn Beta, nhóm '-dipin' là CCB DHP.",
      "Phương án này không đúng vì \"Tên hoạt chất tận cùng bằng đuôi olol\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Hầu như không gây ho khan và phù mạch",
      "An toàn cho phụ nữ trong suốt thai kỳ",
      "Không gây hiện tượng hạ áp liều đầu",
      "Tăng đào thải ion kali qua nước tiểu"
    ],
    "correct": 0,
    "explanation": "Do ARB đối kháng chọn lọc trên thụ thể AT1 mà không ức chế men chuyển ACE (Kininase II), thuốc không làm tăng nồng độ Bradykinin và chất P trong đường thở, nhờ đó hầu như không gây ho khan (tỷ lệ tương đương giả dược), là lựa chọn thay thế hoàn hảo cho bệnh nhân không dung nạp ACEI.",
    "reference": "Sách Dược lý 2 tr. 71",
    "distractorExplanations": [
      "Do ARB đối kháng chọn lọc trên thụ thể AT1 mà không ức chế men chuyển ACE (Kininase II), thuốc không làm tăng nồng độ Bradykinin và chất P trong đường thở, nhờ đó hầu như không gây ho khan (tỷ lệ tương đương giả dược), là lựa chọn thay thế hoàn hảo cho bệnh nhân không dung nạp ACEI.",
      "Phương án này không đúng vì \"An toàn cho phụ nữ trong suốt thai kỳ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Không gây hiện tượng hạ áp liều đầu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tăng đào thải ion kali qua nước tiểu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Amlodipin, Nifedipin, Felodipin và Nicardipin",
      "Verapamil, Gallopamil, Diltiazem và Clentiazem",
      "Propranolol, Timolol, Nadolol và Sotalol",
      "Hydralazin, Minoxidil, Diazoxid và Nitroprussid"
    ],
    "correct": 0,
    "explanation": "Phân nhóm CCB DHP có cấu trúc nhân 1,4-dihydropyridin gồm các thuốc có đuôi '-dipin' (Amlodipin, Nifedipin, Nicardipin, Felodipin), tác dụng ưu thế trên cơ trơn tiểu động mạch. Verapamil (phenylalkylamin) và Diltiazem (benzothiazepin) thuộc nhóm Non-DHP tác dụng ưu thế trên cơ tim.",
    "reference": "Sách Dược lý 2 tr. 58-59",
    "distractorExplanations": [
      "Phân nhóm CCB DHP có cấu trúc nhân 1,4-dihydropyridin gồm các thuốc có đuôi '-dipin' (Amlodipin, Nifedipin, Nicardipin, Felodipin), tác dụng ưu thế trên cơ trơn tiểu động mạch. Verapamil (phenylalkylamin) và Diltiazem (benzothiazepin) thuộc nhóm Non-DHP tác dụng ưu thế trên cơ tim.",
      "Phương án này không đúng vì \"Verapamil, Gallopamil, Diltiazem và Clentiazem\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Propranolol, Timolol, Nadolol và Sotalol\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Hydralazin, Minoxidil, Diazoxid và Nitroprussid\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Giãn chọn lọc tiểu tĩnh mạch gây ứ trệ máu ngoại biên",
      "Giãn chọn lọc tiểu động mạch gây tăng áp lực mao mạch",
      "Tăng giữ natri nước thứ phát tại hệ thống ống thận",
      "Tăng tính thấm mao mạch ngoại vi thoát dịch gian bào"
    ],
    "correct": 1,
    "explanation": "Phù mắt cá chân do CCB DHP là 'phù giả' do cơ chế huyết động: thuốc làm giãn mạnh tiểu động mạch trước mao mạch trong khi tiểu tĩnh mạch sau mao mạch không giãn tương xứng, dẫn tới tăng áp lực thủy tĩnh mao mạch đẩy dịch ra khoang kẽ vùng thấp. Thuốc lợi tiểu không có hiệu quả trong tình huống này; phối hợp thêm ACEI/ARB (làm giãn tiểu tĩnh mạch) sẽ cân bằng áp lực mao mạch và giải quyết triệt để phù.",
    "reference": "Sách Dược lý 2 tr. 61",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Giãn chọn lọc tiểu tĩnh mạch gây ứ trệ máu ngoại biên\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phù mắt cá chân do CCB DHP là 'phù giả' do cơ chế huyết động: thuốc làm giãn mạnh tiểu động mạch trước mao mạch trong khi tiểu tĩnh mạch sau mao mạch không giãn tương xứng, dẫn tới tăng áp lực thủy tĩnh mao mạch đẩy dịch ra khoang kẽ vùng thấp. Thuốc lợi tiểu không có hiệu quả trong tình huống này; phối hợp thêm ACEI/ARB (làm giãn tiểu tĩnh mạch) sẽ cân bằng áp lực mao mạch và giải quyết triệt để phù.",
      "Phương án này không đúng vì \"Tăng giữ natri nước thứ phát tại hệ thống ống thận\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tăng tính thấm mao mạch ngoại vi thoát dịch gian bào\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Kích thích phản xạ giao cảm gây tăng nhịp tim và co bóp",
      "Giãn chọn lọc tĩnh mạch lớn mà không hạ huyết áp động mạch",
      "Ức chế lực co bóp tim và làm chậm dẫn truyền nút nhĩ thất",
      "Tăng cường tính tự động nút xoang và tăng tốc dẫn truyền"
    ],
    "correct": 2,
    "explanation": "Verapamil và Diltiazem (Non-DHP) gắn vào vị trí đặc hiệu trên kênh Calci type L ở tim mạnh hơn ở mạch, có tác dụng inotropic âm tính (giảm co bóp), chronotropic âm tính (giảm nhịp tim) và dromotropic âm tính (chậm dẫn truyền AV), do đó thường dùng hạ áp ở bệnh nhân có kèm nhịp nhanh, rung nhĩ hoặc đau thắt ngực.",
    "reference": "Sách Dược lý 2 tr. 62",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Kích thích phản xạ giao cảm gây tăng nhịp tim và co bóp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Giãn chọn lọc tĩnh mạch lớn mà không hạ huyết áp động mạch\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Verapamil và Diltiazem (Non-DHP) gắn vào vị trí đặc hiệu trên kênh Calci type L ở tim mạnh hơn ở mạch, có tác dụng inotropic âm tính (giảm co bóp), chronotropic âm tính (giảm nhịp tim) và dromotropic âm tính (chậm dẫn truyền AV), do đó thường dùng hạ áp ở bệnh nhân có kèm nhịp nhanh, rung nhĩ hoặc đau thắt ngực.",
      "Phương án này không đúng vì \"Tăng cường tính tự động nút xoang và tăng tốc dẫn truyền\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Chẹn kênh calci DHP phối hợp thuốc chẹn beta",
      "Chẹn kênh calci Non-DHP phối hợp thuốc chẹn beta",
      "Thuốc ức chế men chuyển phối hợp thuốc chẹn thụ thể ARB",
      "Thuốc lợi tiểu thiazid phối hợp thuốc chẹn alpha-1"
    ],
    "correct": 1,
    "explanation": "Chống chỉ định phối hợp Verapamil hoặc Diltiazem với thuốc chẹn beta vì cả hai nhóm đều ức chế mạnh nút xoang và nút nhĩ thất, hiệp đồng gây nhịp tim chậm nghiêm trọng, block AV độ 3 hoặc ngừng tim vô tâm thu. Ngược lại, chẹn beta phối hợp CCB nhóm DHP (Amlodipin) lại là phối hợp kinh điển hợp lý.",
    "reference": "Sách Dược lý 2 tr. 63",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Chẹn kênh calci DHP phối hợp thuốc chẹn beta\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Chống chỉ định phối hợp Verapamil hoặc Diltiazem với thuốc chẹn beta vì cả hai nhóm đều ức chế mạnh nút xoang và nút nhĩ thất, hiệp đồng gây nhịp tim chậm nghiêm trọng, block AV độ 3 hoặc ngừng tim vô tâm thu. Ngược lại, chẹn beta phối hợp CCB nhóm DHP (Amlodipin) lại là phối hợp kinh điển hợp lý.",
      "Phương án này không đúng vì \"Thuốc ức chế men chuyển phối hợp thuốc chẹn thụ thể ARB\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thuốc lợi tiểu thiazid phối hợp thuốc chẹn alpha-1\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Chẹn thụ thể alpha-1 hậu synap tại các tiểu động mạch",
      "Kích thích tế bào nội mô giải phóng nitric oxid giãn mạch",
      "Kích thích trung tâm phó giao cảm làm giãn cơ trơn mạch",
      "Giảm trương lực giao cảm ly tâm đến tim và mạch máu"
    ],
    "correct": 3,
    "explanation": "Methyldopa được vận chuyển qua hàng rào máu não, chuyển hóa thành alpha-methylnoradrenalin. Chất này kích thích mạnh thụ thể alpha-2 tiền synap tại hành não, ức chế giải phóng noradrenalin, làm giảm trương lực giao cảm ly tâm, hạ huyết áp êm dịu và không làm giảm dòng máu đến thận/tử cung bánh rau.",
    "reference": "Sách Dược lý 2 tr. 74-75",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Chẹn thụ thể alpha-1 hậu synap tại các tiểu động mạch\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích thích tế bào nội mô giải phóng nitric oxid giãn mạch\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích thích trung tâm phó giao cảm làm giãn cơ trơn mạch\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Methyldopa được vận chuyển qua hàng rào máu não, chuyển hóa thành alpha-methylnoradrenalin. Chất này kích thích mạnh thụ thể alpha-2 tiền synap tại hành não, ức chế giải phóng noradrenalin, làm giảm trương lực giao cảm ly tâm, hạ huyết áp êm dịu và không làm giảm dòng máu đến thận/tử cung bánh rau."
    ]
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
    "reference": "Sách Dược lý 2 tr. 76",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Enalapril\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Losartan\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Methyldopa là thuốc lựa chọn hàng đầu (first-line) cho tăng huyết áp thai kỳ vì hồ sơ an toàn cho thai nhi đã được kiểm chứng lâu đời. Các thuốc ức chế hệ RAA (ACEI, ARB, Aliskiren) bị chống chỉ định tuyệt đối trong thai kỳ vì gây quái thai, suy thận và tử vong thai nhi.",
      "Phương án này không đúng vì \"Aliskiren\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Tiêm truyền tĩnh mạch liên tục thuốc hạ áp tác dụng nhanh",
      "Uống viên phóng thích kéo dài với liều lượng tăng gấp đôi",
      "Ngậm dưới lưỡi viên nang nifedipin chọc thủng",
      "Tiêm bắp sâu thuốc lợi tiểu thiazid kết hợp digoxin"
    ],
    "correct": 0,
    "explanation": "Cơn tăng huyết áp cấp cứu (Hypertensive Emergency) có tổn thương cơ quan đích bắt buộc phải dùng thuốc đường tĩnh mạch liên tục (Nicardipine IV, Labetalol IV, Nitroprussid IV) trong phòng hồi sức tích cực để kiểm soát chính xác tốc độ hạ áp, giảm không quá 20-25% trong giờ đầu.",
    "reference": "Sách Dược lý 2 tr. 77",
    "distractorExplanations": [
      "Cơn tăng huyết áp cấp cứu (Hypertensive Emergency) có tổn thương cơ quan đích bắt buộc phải dùng thuốc đường tĩnh mạch liên tục (Nicardipine IV, Labetalol IV, Nitroprussid IV) trong phòng hồi sức tích cực để kiểm soát chính xác tốc độ hạ áp, giảm không quá 20-25% trong giờ đầu.",
      "Phương án này không đúng vì \"Uống viên phóng thích kéo dài với liều lượng tăng gấp đôi\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ngậm dưới lưỡi viên nang nifedipin chọc thủng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tiêm bắp sâu thuốc lợi tiểu thiazid kết hợp digoxin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Gốc cyanide và thiocyanate",
      "Khí nitric oxide dạng tự do",
      "Phức hợp ion sắt tự do huyết",
      "Tinh thể acid uric lắng đọng"
    ],
    "correct": 0,
    "explanation": "Natri nitroprussid trong hồng cầu giải phóng NO đồng thời phóng thích 5 gốc Cyanide (CN⁻). Cyanide được enzym Rhodanase ở gan chuyển thành Thiocyanat thải qua thận. Khi dùng liều cao hoặc suy thận, CN⁻ tự do tích lũy ức chế chuỗi hô hấp tế bào gây toan lactic nặng và tử vong. Thuốc giải độc là Natri thiosulfat hoặc Hydroxocobalamin.",
    "reference": "Sách Dược lý 2 tr. 78",
    "distractorExplanations": [
      "Natri nitroprussid trong hồng cầu giải phóng NO đồng thời phóng thích 5 gốc Cyanide (CN⁻). Cyanide được enzym Rhodanase ở gan chuyển thành Thiocyanat thải qua thận. Khi dùng liều cao hoặc suy thận, CN⁻ tự do tích lũy ức chế chuỗi hô hấp tế bào gây toan lactic nặng và tử vong. Thuốc giải độc là Natri thiosulfat hoặc Hydroxocobalamin.",
      "Phương án này không đúng vì \"Khí nitric oxide dạng tự do\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Phức hợp ion sắt tự do huyết\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tinh thể acid uric lắng đọng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Thuốc lợi tiểu quai ức chế Na+/K+/2Cl-",
      "Thuốc lợi tiểu giữ kali kháng aldosteron",
      "Thuốc lợi tiểu thẩm thấu đường tĩnh mạch",
      "Thuốc lợi tiểu thiazid và giống thiazid"
    ],
    "correct": 3,
    "explanation": "Thiazid (Hydrochlorothiazid) và Thiazid-like (Indapamid, Chlorthalidon) là lợi tiểu nền tảng được khuyến cáo hàng đầu trong tăng huyết áp vô căn nhờ tác dụng hạ áp kéo dài, giảm biến cố tim mạch và đột quỵ. Lợi tiểu quai chỉ ưu tiên khi có phù nặng, suy tim sung huyết hoặc suy thận nặng GFR < 30.",
    "reference": "Sách Dược lý 2 tr. 56",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Thuốc lợi tiểu quai ức chế Na+/K+/2Cl-\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thuốc lợi tiểu giữ kali kháng aldosteron\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thuốc lợi tiểu thẩm thấu đường tĩnh mạch\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Thiazid (Hydrochlorothiazid) và Thiazid-like (Indapamid, Chlorthalidon) là lợi tiểu nền tảng được khuyến cáo hàng đầu trong tăng huyết áp vô căn nhờ tác dụng hạ áp kéo dài, giảm biến cố tim mạch và đột quỵ. Lợi tiểu quai chỉ ưu tiên khi có phù nặng, suy tim sung huyết hoặc suy thận nặng GFR < 30."
    ]
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
      "Thuốc chẹn kênh calci phân nhóm dihydropyridin",
      "Thuốc chẹn chọn lọc thụ thể beta-1 adrenergic",
      "Thuốc chẹn chọn lọc thụ thể alpha-1 adrenergic",
      "Thuốc chẹn thụ thể angiotensin II (nhóm ARB)"
    ],
    "correct": 2,
    "explanation": "Thuốc chẹn alpha-1 ngoại vi (Prazosin, Doxazosin) gây giãn đồng thời cả tiểu động mạch và tiểu tĩnh mạch, làm giảm nhanh lượng máu tĩnh mạch đổ về tim. Ở liều đầu tiên, phản xạ co mạch tư thế bị triệt tiêu đột ngột dẫn đến tụt huyết áp tư thế đứng và ngất (First-dose syncope). Khắc phục: Khởi đầu bằng liều nhỏ và uống ngay trước lúc đi ngủ.",
    "reference": "Sách Dược lý 2 tr. 73",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Thuốc chẹn kênh calci phân nhóm dihydropyridin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thuốc chẹn chọn lọc thụ thể beta-1 adrenergic\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Thuốc chẹn alpha-1 ngoại vi (Prazosin, Doxazosin) gây giãn đồng thời cả tiểu động mạch và tiểu tĩnh mạch, làm giảm nhanh lượng máu tĩnh mạch đổ về tim. Ở liều đầu tiên, phản xạ co mạch tư thế bị triệt tiêu đột ngột dẫn đến tụt huyết áp tư thế đứng và ngất (First-dose syncope). Khắc phục: Khởi đầu bằng liều nhỏ và uống ngay trước lúc đi ngủ.",
      "Phương án này không đúng vì \"Thuốc chẹn thụ thể angiotensin II (nhóm ARB)\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Thuốc chẹn kênh calci non-dihydropyridin đường uống",
      "Thuốc ức chế men chuyển hoặc chẹn thụ thể angiotensin",
      "Thuốc chẹn thụ thể beta giao cảm không chọn lọc tim",
      "Thuốc giãn trực tiếp cơ trơn tiểu động mạch ngoại biên"
    ],
    "correct": 1,
    "explanation": "ACEI và ARB là thuốc bảo vệ thận số 1 cho bệnh nhân đái tháo đường vì thuốc làm giãn chọn lọc tiểu động mạch đi nhiều hơn tiểu động mạch đến của cầu thận, làm giảm áp lực thủy tĩnh nội cầu thận, giảm rò rỉ protein qua màng lọc và ngăn ngừa xơ hóa cầu thận.",
    "reference": "Sách Dược lý 2 tr. 68-70",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Thuốc chẹn kênh calci non-dihydropyridin đường uống\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "ACEI và ARB là thuốc bảo vệ thận số 1 cho bệnh nhân đái tháo đường vì thuốc làm giãn chọn lọc tiểu động mạch đi nhiều hơn tiểu động mạch đến của cầu thận, làm giảm áp lực thủy tĩnh nội cầu thận, giảm rò rỉ protein qua màng lọc và ngăn ngừa xơ hóa cầu thận.",
      "Phương án này không đúng vì \"Thuốc chẹn thụ thể beta giao cảm không chọn lọc tim\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Thuốc chẹn alpha-1, kích thích alpha-2 trung ương (Methyldopa, Clonidin) và thuốc giãn mạch trực tiếp chỉ là nhóm thuốc bậc 2 hoặc bậc 3 trong điều trị THA."
    ]
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
      "Aspirin viên bao tan trong ruột uống ngay lập tức",
      "Amlodipin viên nang uống tác dụng kéo dài",
      "Nitroglycerin viên ngậm dưới lưỡi hoặc xịt niêm mạc",
      "Isosorbid-5-mononitrat viên phóng thích kéo dài"
    ],
    "correct": 2,
    "explanation": "Nitroglycerin ngậm dưới lưỡi hoặc xịt dưới lưỡi hấp thu cực nhanh qua tĩnh mạch dưới lưỡi đổ thẳng vào tĩnh mạch chủ trên, tránh được 100% chuyển hóa bước đầu qua gan, xuất hiện tác dụng sau 1-3 phút để cắt cơn đau thắt ngực cấp.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Aspirin viên bao tan trong ruột uống ngay lập tức\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Amlodipin viên nang uống tác dụng kéo dài\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Nitroglycerin ngậm dưới lưỡi hoặc xịt dưới lưỡi hấp thu cực nhanh qua tĩnh mạch dưới lưỡi đổ thẳng vào tĩnh mạch chủ trên, tránh được 100% chuyển hóa bước đầu qua gan, xuất hiện tác dụng sau 1-3 phút để cắt cơn đau thắt ngực cấp.",
      "Phương án này không đúng vì \"Isosorbid-5-mononitrat viên phóng thích kéo dài\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Kích thích prostacyclin hoạt hóa adenylcyclase tăng cAMP",
      "Giải phóng nitric oxid kích hoạt guanylyl cyclase tăng cGMP",
      "Ức chế chọn lọc thụ thể endothelin-1 ngăn dòng calci vào",
      "Mở trực tiếp kênh kali nhạy cảm ATP gây giãn cơ trơn"
    ],
    "correct": 1,
    "explanation": "Nitrat hữu cơ đi vào tế bào cơ trơn mạch máu, kết hợp với nhóm sulfhydryl (-SH) nhờ enzym ALDH-2 tạo NO. NO kích hoạt guanylyl cyclase hòa tan biến GTP thành cGMP. cGMP kích hoạt protein kinase G khử phosphoryl chuỗi nhẹ myosin (MLC) gây giãn cơ trơn.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Kích thích prostacyclin hoạt hóa adenylcyclase tăng cAMP\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Nitrat hữu cơ đi vào tế bào cơ trơn mạch máu, kết hợp với nhóm sulfhydryl (-SH) nhờ enzym ALDH-2 tạo NO. NO kích hoạt guanylyl cyclase hòa tan biến GTP thành cGMP. cGMP kích hoạt protein kinase G khử phosphoryl chuỗi nhẹ myosin (MLC) gây giãn cơ trơn.",
      "Phương án này không đúng vì \"Ức chế chọn lọc thụ thể endothelin-1 ngăn dòng calci vào\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Mở trực tiếp kênh kali nhạy cảm ATP gây giãn cơ trơn\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Giãn ưu thế hệ tĩnh mạch làm giảm tiền gánh và sức căng thất",
      "Giãn chọn lọc các nhánh tiểu động mạch vành bị xơ vữa",
      "Co hệ mạch ngoại vi toàn thân dồn tuần hoàn về tim",
      "Ức chế chọn lọc trung khu cảm giác đau tại đồi thị và vỏ não"
    ],
    "correct": 0,
    "explanation": "Ở liều điều trị, Nitroglycerin tác dụng ưu thế trên hệ tĩnh mạch lớn, làm ứ máu ngoại vi, giảm hồi lưu tĩnh mạch về tim (giảm tiền gánh), giảm thể tích thất trái cuối tâm trương và giảm sức căng thành tim, từ đó giảm mạnh nhu cầu oxy cơ tim.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Ở liều điều trị, Nitroglycerin tác dụng ưu thế trên hệ tĩnh mạch lớn, làm ứ máu ngoại vi, giảm hồi lưu tĩnh mạch về tim (giảm tiền gánh), giảm thể tích thất trái cuối tâm trương và giảm sức căng thành tim, từ đó giảm mạnh nhu cầu oxy cơ tim.",
      "Phương án này không đúng vì \"Giãn chọn lọc các nhánh tiểu động mạch vành bị xơ vữa\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Co hệ mạch ngoại vi toàn thân dồn tuần hoàn về tim\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ức chế chọn lọc trung khu cảm giác đau tại đồi thị và vỏ não\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Hình thành kháng thể IgG cạnh tranh vị trí gắn nitrat",
      "Cảm ứng enzym chuyển hóa tại gan làm tăng đào thải thuốc",
      "Cạn kiệt nhóm sulfhydryl nội bào và bất hoạt enzym ALDH-2",
      "Tăng sinh thụ thể beta adrenergic trên màng tế bào cơ tim"
    ],
    "correct": 2,
    "explanation": "Dùng nitrat liên tục làm cạn kiệt các nhóm sulfhydryl (-SH) nội bào và bất hoạt enzym aldehyde dehydrogenase-2 (ALDH-2) tại ty thể, ngăn cản quá trình chuyển hóa nitrat thành NO, dẫn đến mất tác dụng giãn mạch (hiệu ứng tolerance).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Hình thành kháng thể IgG cạnh tranh vị trí gắn nitrat\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Cảm ứng enzym chuyển hóa tại gan làm tăng đào thải thuốc\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Dùng nitrat liên tục làm cạn kiệt các nhóm sulfhydryl (-SH) nội bào và bất hoạt enzym aldehyde dehydrogenase-2 (ALDH-2) tại ty thể, ngăn cản quá trình chuyển hóa nitrat thành NO, dẫn đến mất tác dụng giãn mạch (hiệu ứng tolerance).",
      "Phương án này không đúng vì \"Tăng sinh thụ thể beta adrenergic trên màng tế bào cơ tim\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Ho khan dai dẳng kèm cảm giác ngứa rát họng về đêm",
      "Táo bón kéo dài kèm trướng bụng do giảm nhu động ruột",
      "Đau đầu kiểu mạch đập, đỏ bừng mặt và hạ huyết áp tư thế",
      "Tê bì dị cảm đầu chi đối xứng hai bên do co mạch vi tuần hoàn"
    ],
    "correct": 2,
    "explanation": "Do tác dụng giãn nhanh các mạch máu não và màng não gây đau đầu dữ dội kiểu giật theo nhịp mạch; đồng thời giãn mạch ngoại vi gây đỏ bừng mặt và tụt huyết áp tư thế đứng có thể gây chóng mặt, ngất.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Ho khan dai dẳng kèm cảm giác ngứa rát họng về đêm\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Táo bón kéo dài kèm trướng bụng do giảm nhu động ruột\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Do tác dụng giãn nhanh các mạch máu não và màng não gây đau đầu dữ dội kiểu giật theo nhịp mạch; đồng thời giãn mạch ngoại vi gây đỏ bừng mặt và tụt huyết áp tư thế đứng có thể gây chóng mặt, ngất.",
      "Phương án này không đúng vì \"Tê bì dị cảm đầu chi đối xứng hai bên do co mạch vi tuần hoàn\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Tạo phức kết tủa gây tắc mạch phổi cấp tính đe dọa tử vong",
      "Ức chế dẫn truyền thần kinh cơ gây suy hô hấp và liệt cơ",
      "Tăng tính thấm hàng rào máu não gây phù não cấp tính",
      "Tích lũy cGMP gây giãn mạch quá mức và tụt huyết áp trầm trọng"
    ],
    "correct": 3,
    "explanation": "Nitrat làm tăng tổng hợp cGMP, còn thuốc ức chế PDE-5 ngăn thoái giáng cGMP. Nồng độ cGMP tăng vọt mất kiểm soát gây giãn cơ trơn mạch máu toàn thân dữ dội, tụt huyết áp nghiêm trọng không đáp ứng hồi sức, gây nhồi máu cơ tim và tử vong.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Tạo phức kết tủa gây tắc mạch phổi cấp tính đe dọa tử vong\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ức chế dẫn truyền thần kinh cơ gây suy hô hấp và liệt cơ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tăng tính thấm hàng rào máu não gây phù não cấp tính\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Nitrat làm tăng tổng hợp cGMP, còn thuốc ức chế PDE-5 ngăn thoái giáng cGMP. Nồng độ cGMP tăng vọt mất kiểm soát gây giãn cơ trơn mạch máu toàn thân dữ dội, tụt huyết áp nghiêm trọng không đáp ứng hồi sức, gây nhồi máu cơ tim và tử vong."
    ]
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
      "Uống thuốc kèm dung dịch kiềm nhẹ tăng hấp thu",
      "Bố trí khoảng thời gian trống không có nitrat từ 8 đến 12 giờ",
      "Chủ động tăng liều gấp đôi sau mỗi ba ngày điều trị",
      "Phối hợp ngay từ đầu với một thuốc chống đông kháng vitamin K"
    ],
    "correct": 1,
    "explanation": "Bắt buộc phải tạo khoảng thời gian 'sạch thuốc' (Nitrate-free interval) từ 8-12 giờ mỗi ngày (thường tháo miếng dán hoặc không uống thuốc vào ban đêm đối với đau thắt ngực gắng sức) để mô cơ trơn tái tạo lại các nhóm -SH tự do.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Uống thuốc kèm dung dịch kiềm nhẹ tăng hấp thu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Bắt buộc phải tạo khoảng thời gian 'sạch thuốc' (Nitrate-free interval) từ 8-12 giờ mỗi ngày (thường tháo miếng dán hoặc không uống thuốc vào ban đêm đối với đau thắt ngực gắng sức) để mô cơ trơn tái tạo lại các nhóm -SH tự do.",
      "Phương án này không đúng vì \"Chủ động tăng liều gấp đôi sau mỗi ba ngày điều trị\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Phối hợp ngay từ đầu với một thuốc chống đông kháng vitamin K\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Isosorbid-2-mononitrat\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Pentaerythritol tetranitrat\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Erythrityl tetranitrat\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Isosorbid-5-mononitrat (ISMN) là chất chuyển hóa có hoạt tính của ISDN, có sinh khả dụng đường uống đạt 100% (không bị gan chuyển hóa bước đầu), thời gian bán thải dài (4-5 giờ) nên rất thích hợp dùng dự phòng cơn đau thắt ngực."
    ]
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
      "Thuốc chẹn kênh calci dẫn xuất Dihydropyridine",
      "Thuốc nitrat hữu cơ tổng hợp tác dụng kéo dài",
      "Thuốc chẹn thụ thể beta-adrenergic không chọn lọc",
      "Thuốc chẹn kênh calci dẫn xuất Non-Dihydropyridine"
    ],
    "correct": 2,
    "explanation": "Trong đau thắt ngực Prinzmetal, chẹn beta không chọn lọc sẽ ức chế thụ thể beta-2 (vốn giúp giãn mạch), để hở thụ thể alpha-1 không bị đối kháng, catecholamin gắn vào alpha-1 gây co thắt động mạch vành dữ dội hơn.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Thuốc chẹn kênh calci dẫn xuất Dihydropyridine\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thuốc nitrat hữu cơ tổng hợp tác dụng kéo dài\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Trong đau thắt ngực Prinzmetal, chẹn beta không chọn lọc sẽ ức chế thụ thể beta-2 (vốn giúp giãn mạch), để hở thụ thể alpha-1 không bị đối kháng, catecholamin gắn vào alpha-1 gây co thắt động mạch vành dữ dội hơn.",
      "Phương án này không đúng vì \"Thuốc chẹn kênh calci dẫn xuất Non-Dihydropyridine\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Chẹn kênh calci typ L phụ thuộc điện thế ở nút nhĩ thất",
      "Chẹn dòng Natri nhanh phụ thuộc điện thế ở màng cơ tim",
      "Chẹn thụ thể beta-adrenergic giao cảm ở màng tế bào nút xoang",
      "Chẹn kênh Kali chậm phụ thuộc điện thế kéo dài tái cực"
    ],
    "correct": 1,
    "explanation": "Nhóm I trong phân loại Vaughan Williams là các thuốc chẹn kênh Natri nhanh phụ thuộc điện thế (INa), làm giảm tốc độ khử cực pha 0 của điện thế hoạt động.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Chẹn kênh calci typ L phụ thuộc điện thế ở nút nhĩ thất\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Nhóm I trong phân loại Vaughan Williams là các thuốc chẹn kênh Natri nhanh phụ thuộc điện thế (INa), làm giảm tốc độ khử cực pha 0 của điện thế hoạt động.",
      "Phương án này không đúng vì \"Chẹn thụ thể beta-adrenergic giao cảm ở màng tế bào nút xoang\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Chẹn kênh kali kéo dài điện thế hoạt động thuộc nhóm III (như Amiodaron, Sotalol), không phải cơ chế của nhóm I (chẹn kênh Na+)."
    ]
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
      "Giảm rất mạnh pha 0, không đổi thời gian điện thế hoạt động",
      "Rút ngắn điện thế hoạt động, ức chế chọn lọc cơ tâm thất",
      "Giảm dòng calci pha 2 gây giảm co bóp mà không đổi thời kỳ trơ",
      "Giảm vừa pha 0, kéo dài điện thế hoạt động và thời kỳ trơ"
    ],
    "correct": 3,
    "explanation": "Nhóm IA chẹn kênh Na+ mức độ vừa phải và đồng thời chẹn kênh K+ (pha 3), dẫn đến làm chậm pha 0 và kéo dài thời gian điện thế hoạt động (APD) cũng như kéo dài thời kỳ trơ (ERP), biểu hiện trên ECG là kéo dài phức bộ QRS và khoảng QT.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Giảm rất mạnh pha 0, không đổi thời gian điện thế hoạt động\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Rút ngắn điện thế hoạt động, ức chế chọn lọc cơ tâm thất\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Giảm dòng calci pha 2 gây giảm co bóp mà không đổi thời kỳ trơ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Nhóm IA chẹn kênh Na+ mức độ vừa phải và đồng thời chẹn kênh K+ (pha 3), dẫn đến làm chậm pha 0 và kéo dài thời gian điện thế hoạt động (APD) cũng như kéo dài thời kỳ trơ (ERP), biểu hiện trên ECG là kéo dài phức bộ QRS và khoảng QT."
    ]
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
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Amiodaron dạng tiêm truyền tĩnh mạch\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Quinidin sulfat dạng viên uống\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Lidocain thuộc nhóm IB, có ái lực cao với kênh Na+ ở trạng thái bất hoạt (thường gặp ở mô cơ tim bị thiếu máu cục bộ hoặc khử cực kéo dài). Thuốc rút ngắn APD, chỉ tác dụng trên thất và là lựa chọn hàng đầu cấp cứu nhịp nhanh thất, rung thất sau nhồi máu cơ tim.",
      "Phương án này không đúng vì \"Flecainid acetat dạng viên nén\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Quinidin",
      "Metoprolol",
      "Adenosin",
      "Lidocain"
    ],
    "correct": 0,
    "explanation": "Quinidin là đồng phân quay phải của Quinin, chiết xuất từ vỏ cây Cinchona. Quá liều hoặc ngộ độc Quinidin gây hội chứng Cinchonism với các rối loạn thính giác (ù tai, điếc), thị giác và tiêu hóa.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Quinidin là đồng phân quay phải của Quinin, chiết xuất từ vỏ cây Cinchona. Quá liều hoặc ngộ độc Quinidin gây hội chứng Cinchonism với các rối loạn thính giác (ù tai, điếc), thị giác và tiêu hóa.",
      "Phương án này không đúng vì \"Metoprolol\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Adenosin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Lidocain\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Chẹn kênh calci typ T làm thay đổi khử cực chậm tâm trương",
      "Phong bế thụ thể muscarinic M2 tại cơ nhĩ tăng dẫn truyền phế vị",
      "Chẹn kênh Kali, kéo dài pha tái cực 3 và thời kỳ trơ hữu hiệu",
      "Kích thích kênh Natri mở sớm làm tăng tốc độ dẫn truyền tim"
    ],
    "correct": 2,
    "explanation": "Nhóm III (Amiodaron, Sotalol) có tác dụng chính là chẹn các kênh Kali phụ thuộc điện thế tham gia tái cực ở pha 3, làm kéo dài thời gian điện thế hoạt động (APD) và kéo dài thời kỳ trơ hữu hiệu (ERP) ở cả nhĩ và thất.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Chẹn kênh calci typ T làm thay đổi khử cực chậm tâm trương\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Phong bế thụ thể muscarinic M2 tại cơ nhĩ tăng dẫn truyền phế vị\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Nhóm III (Amiodaron, Sotalol) có tác dụng chính là chẹn các kênh Kali phụ thuộc điện thế tham gia tái cực ở pha 3, làm kéo dài thời gian điện thế hoạt động (APD) và kéo dài thời kỳ trơ hữu hiệu (ERP) ở cả nhĩ và thất.",
      "Phương án này không đúng vì \"Kích thích kênh Natri mở sớm làm tăng tốc độ dẫn truyền tim\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Lidocain tiêm truyền liên tục\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Amiodaron tích tụ lâu trong mô mỡ, biểu mô giác mạc (tạo lắng đọng giác mạc hình xoáy ở > 90% bệnh nhân) và tích tụ hạt sắc tố lipofuscin ở lớp biểu bì da kết hợp với ánh nắng mặt trời tạo hội chứng da xanh xám (Blue-smurf syndrome).",
      "Phương án này không đúng vì \"Procainamid dùng liều cao\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Verapamil điều trị rung nhĩ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Viêm phổi và xơ phổi mô kẽ",
      "Suy thận cấp thể thiểu niệu",
      "Tiêu cơ vân cấp hủy hoại cơ",
      "Suy tủy xương giảm ba dòng"
    ],
    "correct": 0,
    "explanation": "Độc tính trên phổi (viêm phổi mô kẽ, xơ phổi) xảy ra ở khoảng 1-10% bệnh nhân dùng Amiodaron, là tác dụng phụ nguy hiểm nhất và có thể gây tử vong. Cần theo dõi định kỳ X-quang phổi và chức năng hô hấp (DLCO).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Độc tính trên phổi (viêm phổi mô kẽ, xơ phổi) xảy ra ở khoảng 1-10% bệnh nhân dùng Amiodaron, là tác dụng phụ nguy hiểm nhất và có thể gây tử vong. Cần theo dõi định kỳ X-quang phổi và chức năng hô hấp (DLCO).",
      "Phương án này không đúng vì \"Suy thận cấp thể thiểu niệu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tiêu cơ vân cấp hủy hoại cơ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Suy tủy xương giảm ba dòng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Chứa lượng lớn Iod gây hiệu ứng Wolff-Chaikoff hoặc Jod-Basedow",
      "Kích hoạt thụ thể giải phóng hormon tuyến yên tăng thoái giáng",
      "Ức chế cạnh tranh enzym khử iod và phá vỡ hấp thu iod nang giáp",
      "Kích hoạt bổ thể phá hủy tế bào biểu mô nang tuyến giáp"
    ],
    "correct": 0,
    "explanation": "Trong 200mg Amiodaron có chứa khoảng 75mg Iod. Lượng iod khổng lồ giải phóng hàng ngày có thể gây suy giáp (do ức chế tổng hợp hormon giáp - hiệu ứng Wolff-Chaikoff) hoặc gây cường giáp (do thừa nguyên liệu tổng hợp hormon - hiệu ứng Jod-Basedow).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Trong 200mg Amiodaron có chứa khoảng 75mg Iod. Lượng iod khổng lồ giải phóng hàng ngày có thể gây suy giáp (do ức chế tổng hợp hormon giáp - hiệu ứng Wolff-Chaikoff) hoặc gây cường giáp (do thừa nguyên liệu tổng hợp hormon - hiệu ứng Jod-Basedow).",
      "Phương án này không đúng vì \"Kích hoạt thụ thể giải phóng hormon tuyến yên tăng thoái giáng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ức chế cạnh tranh enzym khử iod và phá vỡ hấp thu iod nang giáp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích hoạt bổ thể phá hủy tế bào biểu mô nang tuyến giáp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Thuốc gây tê và chống loạn nhịp Lidocain",
      "Thuốc chẹn beta chống loạn nhịp Sotalol",
      "Thuốc chống loạn nhịp Procainamid",
      "Thuốc chống loạn nhịp dẫn xuất Mexiletin"
    ],
    "correct": 2,
    "explanation": "Procainamid gây hội chứng giống Lupus ban đỏ hệ thống ở 20-30% bệnh nhân dùng kéo dài (đặc biệt ở nhóm người có kiểu hình acetyl hóa chậm). Kháng thể kháng Histone dương tính là dấu ấn đặc trưng; các triệu chứng biến mất khi ngừng thuốc.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Thuốc gây tê và chống loạn nhịp Lidocain\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thuốc chẹn beta chống loạn nhịp Sotalol\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Procainamid gây hội chứng giống Lupus ban đỏ hệ thống ở 20-30% bệnh nhân dùng kéo dài (đặc biệt ở nhóm người có kiểu hình acetyl hóa chậm). Kháng thể kháng Histone dương tính là dấu ấn đặc trưng; các triệu chứng biến mất khi ngừng thuốc.",
      "Phương án này không đúng vì \"Thuốc chống loạn nhịp dẫn xuất Mexiletin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Đồng vận chuyển Na+-Cl- tại ống lượn xa",
      "Đồng vận chuyển Na+-K+-2Cl- ở quai Henle",
      "Kênh natri biểu mô ENaC tại vùng ống góp",
      "Hệ thống trao đổi Na+-H+ ở ống lượn gần"
    ],
    "correct": 1,
    "explanation": "Thuốc lợi tiểu quai (Furosemid, Bumetanid, Torsemid) ức chế đặc hiệu hệ đồng vận chuyển Na+/K+/2Cl- (NKCC2) ở màng đỉnh tế bào biểu mô đoạn dày nhánh lên của quai Henle.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Đồng vận chuyển Na+-Cl- tại ống lượn xa là vị trí tác dụng đặc hiệu của nhóm Thiazid (Hydrochlorothiazid), không phải đích tác dụng của câu hỏi này.",
      "Thuốc lợi tiểu quai (Furosemid, Bumetanid, Torsemid) ức chế đặc hiệu hệ đồng vận chuyển Na+/K+/2Cl- (NKCC2) ở màng đỉnh tế bào biểu mô đoạn dày nhánh lên của quai Henle.",
      "Kênh natri biểu mô ENaC ở ống góp là vị trí tác dụng của nhóm lợi tiểu giữ kali (Amilorid, Triamteren), không phải phương án đúng.",
      "Hệ thống trao đổi Na+-H+ và enzym CA tại ống lượn gần là cơ chế của Acetazolamid, không phù hợp với câu hỏi này."
    ]
  },
  {
    "id": 55,
    "subject": "duocly2",
    "chapter": "Thuốc lợi niệu",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Hai phân nhóm thuốc lợi tiểu hạ áp phổ biến tác động tại quai Henle và ống lượn xa có ảnh hưởng hoàn toàn trái ngược lên cân bằng ion Calci tại thận. Quy luật tác động lên sự đào thải calci qua nước tiểu của hai nhóm này là gì?",
    "options": [
      "Thuốc tại quai Henle và ống lượn xa đều làm tăng đào thải Calci",
      "Thuốc tại ống lượn xa tăng đào thải; thuốc tại quai Henle tăng giữ",
      "Thuốc tại quai Henle tăng đào thải; thuốc tại ống lượn xa tăng giữ",
      "Thuốc tại quai Henle và ống lượn xa đều làm tăng giữ lại Calci"
    ],
    "correct": 2,
    "explanation": "Furosemid làm mất điện thế dương trong lòng ống ở quai Henle, ức chế tái hấp thu Ca2+ thụ động qua khe tế bào $\\rightarrow$ tăng thải Ca2+ (dùng trị tăng Ca2+ máu). Thiazid ức chế tái hấp thu Na+ ở ống lượn xa làm kích hoạt bơm trao đổi Na+/Ca2+ ở màng đáy $\\rightarrow$ tăng tái hấp thu Ca2+ vào máu (giảm calci niệu, tốt cho người loãng xương).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Đồng vận chuyển Na+-Cl- tại ống lượn xa là vị trí tác dụng đặc hiệu của nhóm Thiazid (Hydrochlorothiazid), không phải đích tác dụng của câu hỏi này.",
      "Đồng vận chuyển Na+-Cl- tại ống lượn xa là vị trí tác dụng đặc hiệu của nhóm Thiazid (Hydrochlorothiazid), không phải đích tác dụng của câu hỏi này.",
      "Furosemid làm mất điện thế dương trong lòng ống ở quai Henle, ức chế tái hấp thu Ca2+ thụ động qua khe tế bào $\\rightarrow$ tăng thải Ca2+ (dùng trị tăng Ca2+ máu). Thiazid ức chế tái hấp thu Na+ ở ống lượn xa làm kích hoạt bơm trao đổi Na+/Ca2+ ở màng đáy $\\rightarrow$ tăng tái hấp thu Ca2+ vào máu (giảm calci niệu, tốt cho người loãng xương).",
      "Đồng vận chuyển Na+-Cl- tại ống lượn xa là vị trí tác dụng đặc hiệu của nhóm Thiazid (Hydrochlorothiazid), không phải đích tác dụng của câu hỏi này."
    ]
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
      "Bơm trao đổi Na+/K+-ATPase ở ống lượn gần",
      "Hệ đồng vận chuyển Na+/Cl- ở ống lượn xa",
      "Kênh bài tiết ion Kali ở vỏ ống góp",
      "Hệ đồng vận chuyển SGLT-2 ở ống lượn gần"
    ],
    "correct": 1,
    "explanation": "Thiazid gắn và ức chế chọn lọc hệ đồng vận chuyển Na+/Cl- (NCC) ở màng đỉnh tế bào biểu mô đoạn đầu ống lượn xa, ngăn cản tái hấp thu khoảng 5-10% lượng Na+ được lọc.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Hệ thống trao đổi Na+-H+ và enzym CA tại ống lượn gần là cơ chế của Acetazolamid, không phù hợp với câu hỏi này.",
      "Thiazid gắn và ức chế chọn lọc hệ đồng vận chuyển Na+/Cl- (NCC) ở màng đỉnh tế bào biểu mô đoạn đầu ống lượn xa, ngăn cản tái hấp thu khoảng 5-10% lượng Na+ được lọc.",
      "Kênh natri biểu mô ENaC ở ống góp là vị trí tác dụng của nhóm lợi tiểu giữ kali (Amilorid, Triamteren), không phải phương án đúng.",
      "Hệ thống trao đổi Na+-H+ và enzym CA tại ống lượn gần là cơ chế của Acetazolamid, không phù hợp với câu hỏi này."
    ]
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
      "Thuốc lợi tiểu thẩm thấu đường tĩnh mạch",
      "Thuốc kháng thụ thể mineralocorticoid",
      "Thuốc ức chế enzym carbonic anhydrase",
      "Thuốc lợi tiểu Thiazid và giống Thiazid"
    ],
    "correct": 3,
    "explanation": "Khi eGFR < 30 mL/phút, dòng dịch lọc đến ống lượn xa quá ít, nhóm Thiazid mất hoàn toàn tác dụng lợi niệu. Lúc này bắt buộc phải dùng Lợi tiểu quai (Furosemid liều cao) mới có thể tống muối nước và duy trì thể tích nước tiểu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Thuốc lợi tiểu thẩm thấu đường tĩnh mạch\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thuốc kháng thụ thể mineralocorticoid\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Hệ thống trao đổi Na+-H+ và enzym CA tại ống lượn gần là cơ chế của Acetazolamid, không phù hợp với câu hỏi này.",
      "Khi eGFR < 30 mL/phút, dòng dịch lọc đến ống lượn xa quá ít, nhóm Thiazid mất hoàn toàn tác dụng lợi niệu. Lúc này bắt buộc phải dùng Lợi tiểu quai (Furosemid liều cao) mới có thể tống muối nước và duy trì thể tích nước tiểu."
    ]
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
      "Uống liều thấp duy trì kết hợp ăn giảm muối",
      "Dùng phối hợp thuốc ức chế men chuyển tim mạch",
      "Tiêm tĩnh mạch liều cao nhanh hoặc phối hợp Aminoglycosid",
      "Dùng kéo dài kết hợp bổ sung kali qua đường uống"
    ],
    "correct": 2,
    "explanation": "Furosemid làm biến đổi nồng độ điện giải trong nội dịch tai trong và gây tổn thương dải mạch vân (stria vascularis) ở ốc tai. Nguy cơ điếc vĩnh viễn tăng vọt khi tiêm tĩnh mạch nhanh liều cao hoặc dùng phối hợp với kháng sinh Aminoglycosid.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Uống liều thấp duy trì kết hợp ăn giảm muối\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Dùng phối hợp thuốc ức chế men chuyển tim mạch\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Furosemid làm biến đổi nồng độ điện giải trong nội dịch tai trong và gây tổn thương dải mạch vân (stria vascularis) ở ốc tai. Nguy cơ điếc vĩnh viễn tăng vọt khi tiêm tĩnh mạch nhanh liều cao hoặc dùng phối hợp với kháng sinh Aminoglycosid.",
      "Phương án này không đúng vì \"Dùng kéo dài kết hợp bổ sung kali qua đường uống\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Đối kháng cạnh tranh Aldosteron tại thụ thể Mineralocorticoid",
      "Chẹn trực tiếp kênh biểu mô Natri ở màng tế bào ống góp",
      "Ức chế chọn lọc enzym 11-beta-hydroxylase ở vỏ thượng thận",
      "Kích thích tuyến yên giảm bài tiết hormon vasopressin"
    ],
    "correct": 0,
    "explanation": "Spironolacton khuếch tán vào tế bào biểu mô ống góp, gắn và cạnh tranh với Aldosteron tại thụ thể Mineralocorticoid (MR) nội bào, ngăn cản phức hợp này vào nhân kích hoạt tổng hợp protein cảm ứng aldosteron (AIPs) như kênh ENaC và bơm Na+/K+-ATPase.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Spironolacton khuếch tán vào tế bào biểu mô ống góp, gắn và cạnh tranh với Aldosteron tại thụ thể Mineralocorticoid (MR) nội bào, ngăn cản phức hợp này vào nhân kích hoạt tổng hợp protein cảm ứng aldosteron (AIPs) như kênh ENaC và bơm Na+/K+-ATPase.",
      "Kênh natri biểu mô ENaC ở ống góp là vị trí tác dụng của nhóm lợi tiểu giữ kali (Amilorid, Triamteren), không phải phương án đúng.",
      "Phương án này không đúng vì \"Ức chế chọn lọc enzym 11-beta-hydroxylase ở vỏ thượng thận\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích thích tuyến yên giảm bài tiết hormon vasopressin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Kích thích tuyến yên tăng tiết quá mức prolactin",
      "Chẹn thụ thể Androgen và kích hoạt thụ thể Progesteron",
      "Ức chế không hồi phục enzym aromatase ngoại vi",
      "Tác động đối kháng trực tiếp lên các thụ thể oxytocin"
    ],
    "correct": 1,
    "explanation": "Spironolacton có cấu trúc steroid tương tự nội tiết tố sinh dục, liên kết chéo đối kháng thụ thể Androgen và kích hoạt thụ thể Progesteron, dẫn tới chứng vú to ở nam (gynecomastia), bất lực và rối loạn kinh nguyệt. Eplerenon là chất chọn lọc trên MR nên không gây tác dụng này.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Kích thích tuyến yên tăng tiết quá mức prolactin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Spironolacton có cấu trúc steroid tương tự nội tiết tố sinh dục, liên kết chéo đối kháng thụ thể Androgen và kích hoạt thụ thể Progesteron, dẫn tới chứng vú to ở nam (gynecomastia), bất lực và rối loạn kinh nguyệt. Eplerenon là chất chọn lọc trên MR nên không gây tác dụng này.",
      "Phương án này không đúng vì \"Ức chế không hồi phục enzym aromatase ngoại vi\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tác động đối kháng trực tiếp lên các thụ thể oxytocin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Spironolacton và Canrenon",
      "Eplerenon và Furosemid",
      "Acetazolamid và Manitol",
      "Amilorid và Triamteren"
    ],
    "correct": 3,
    "explanation": "Amilorid và Triamteren tác động trực tiếp ức chế kênh dẫn truyền Natri biểu mô (ENaC) ở màng đỉnh tế bào chính ống góp, làm giảm tái hấp thu Na+ và giảm bài tiết K+ mà không cần thông qua thụ thể Aldosteron.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Spironolacton và Canrenon\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Eplerenon và Furosemid\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Acetazolamid và Manitol\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Amilorid và Triamteren tác động trực tiếp ức chế kênh dẫn truyền Natri biểu mô (ENaC) ở màng đỉnh tế bào chính ống góp, làm giảm tái hấp thu Na+ và giảm bài tiết K+ mà không cần thông qua thụ thể Aldosteron."
    ]
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
      "Enzym Carbonic Anhydrase",
      "Enzym Na+/K+-ATPase màng đáy"
    ],
    "correct": 2,
    "explanation": "Acetazolamid ức chế enzym Carbonic Anhydrase (CA) ở ống lượn gần và thể mi của mắt. Ức chế CA tại thể mi làm giảm tổng hợp thủy dịch, giúp hạ nhãn áp trong điều trị Glaucoma góc mở và cấp cứu Glaucoma góc đóng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Enzym Phosphodiesterase typ 5\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Enzym Adenylcyclase phụ thuộc Calci\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Acetazolamid ức chế enzym Carbonic Anhydrase (CA) ở ống lượn gần và thể mi của mắt. Ức chế CA tại thể mi làm giảm tổng hợp thủy dịch, giúp hạ nhãn áp trong điều trị Glaucoma góc mở và cấp cứu Glaucoma góc đóng.",
      "Phương án này không đúng vì \"Enzym Na+/K+-ATPase màng đáy\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Nhiễm toan chuyển hóa tăng Clo máu",
      "Nhiễm kiềm chuyển hóa giảm Kali máu",
      "Nhiễm toan hô hấp do ứ đọng carbon dioxid",
      "Nhiễm kiềm hô hấp do tăng thông khí bù trừ"
    ],
    "correct": 0,
    "explanation": "Ức chế CA ở ống lượn gần làm ngăn cản tái hấp thu ion Bicarbonat (HCO3-), khiến HCO3- bị đào thải ồ ạt qua nước tiểu $\\rightarrow$ nước tiểu bị kiềm hóa, trong khi máu mất kiềm dẫn đến nhiễm toan chuyển hóa tăng Clo máu (Hyperchloremic metabolic acidosis).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Ức chế CA ở ống lượn gần làm ngăn cản tái hấp thu ion Bicarbonat (HCO3-), khiến HCO3- bị đào thải ồ ạt qua nước tiểu $\\rightarrow$ nước tiểu bị kiềm hóa, trong khi máu mất kiềm dẫn đến nhiễm toan chuyển hóa tăng Clo máu (Hyperchloremic metabolic acidosis).",
      "Phương án này không đúng vì \"Nhiễm kiềm chuyển hóa giảm Kali máu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Nhiễm toan hô hấp do ứ đọng carbon dioxid\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Nhiễm kiềm hô hấp do tăng thông khí bù trừ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Thụ thể Histamin H2 ở màng đáy bên tế bào viền\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Bơm H+/K+-ATPase (bơm proton) ở màng đỉnh vi quản tiết của tế bào viền là con đường chung cuối cùng bài tiết H+ ra dịch vị dạ dày. PPI gắn cộng hóa trị vào cầu nối disulfid (-S-S-) của bơm này, gây bất hoạt không hồi phục.",
      "Phương án này không đúng vì \"Thụ thể Gastrin CCK2 liên kết protein Gq\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thụ thể Muscarinic M3 nhạy cảm acetylcholin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Thuốc bị men pepsin dạ dày phân hủy tạo độc tố",
      "Hoạt chất gây kích ứng trực tiếp niêm mạc dạ dày",
      "Tiền chất PPI base yếu dễ bị phá hủy bởi acid dịch vị",
      "Dược chất bị phân hủy bởi các enzym tại nước bọt"
    ],
    "correct": 2,
    "explanation": "PPI là base yếu, rất kém bền trong môi trường acid (bị chuyển hóa thành dạng sulfenamid ngay trong lòng dạ dày và không hấp thu được). Viên bao kháng acid giúp thuốc qua dạ dày an toàn xuống ruột non hấp thu vào máu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Thuốc bị men pepsin dạ dày phân hủy tạo độc tố\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Hoạt chất gây kích ứng trực tiếp niêm mạc dạ dày\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "PPI là base yếu, rất kém bền trong môi trường acid (bị chuyển hóa thành dạng sulfenamid ngay trong lòng dạ dày và không hấp thu được). Viên bao kháng acid giúp thuốc qua dạ dày an toàn xuống ruột non hấp thu vào máu.",
      "Phương án này không đúng vì \"Dược chất bị phân hủy bởi các enzym tại nước bọt\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Uống ngay sau khi vừa ăn no vào bữa tối",
      "Uống vào lúc nửa đêm khi dịch vị đạt đỉnh",
      "Uống cùng lúc ngay trong các bữa ăn chính",
      "Uống trước bữa ăn sáng từ 30 đến 60 phút"
    ],
    "correct": 3,
    "explanation": "PPI chỉ gắn và ức chế các bơm proton đang ở trạng thái hoạt động (bơm acid ra ngoài). Bữa ăn sau đó 30-60 phút sẽ kích thích tối đa số lượng bơm proton hoạt động, đúng vào thời điểm nồng độ PPI trong máu đạt đỉnh.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Uống ngay sau khi vừa ăn no vào bữa tối\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Uống vào lúc nửa đêm khi dịch vị đạt đỉnh\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Uống cùng lúc ngay trong các bữa ăn chính\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "PPI chỉ gắn và ức chế các bơm proton đang ở trạng thái hoạt động (bơm acid ra ngoài). Bữa ăn sau đó 30-60 phút sẽ kích thích tối đa số lượng bơm proton hoạt động, đúng vào thời điểm nồng độ PPI trong máu đạt đỉnh."
    ]
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
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Famotidin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ranitidin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Cimetidin ức chế mạnh hệ enzym CYP450 tại gan làm tăng nồng độ nhiều thuốc dùng chung (Warfarin, Theophyllin, Phenytoin). Cimetidin còn có tác dụng kháng androgen và tăng tiết prolactin gây chứng vú to ở nam và chảy sữa.",
      "Phương án này không đúng vì \"Nizatidin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Thuốc ức chế bơm proton H+/K+-ATPase tại tế bào viền",
      "Thuốc kháng thụ thể histamin H2 tại niêm mạc dạ dày",
      "Thuốc kháng toan antacid chứa hydroxyd nhôm và magnesi",
      "Thuốc bảo vệ tế bào và bao phủ ổ loét sucralfat"
    ],
    "correct": 1,
    "explanation": "Kháng H2 làm giảm tiết acid nhanh chóng nhưng cơ thể phản ứng bù trừ bằng cách tăng tiết gastrin, kích thích thụ thể CCK2 trên tế bào viền. Hiện tượng dung nạp nhanh xuất hiện chỉ sau 3-5 ngày dùng thuốc liên tục. PPI không gặp hiện tượng này.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Thuốc ức chế bơm proton H+/K+-ATPase tại tế bào viền\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Kháng H2 làm giảm tiết acid nhanh chóng nhưng cơ thể phản ứng bù trừ bằng cách tăng tiết gastrin, kích thích thụ thể CCK2 trên tế bào viền. Hiện tượng dung nạp nhanh xuất hiện chỉ sau 3-5 ngày dùng thuốc liên tục. PPI không gặp hiện tượng này.",
      "Phương án này không đúng vì \"Thuốc kháng toan antacid chứa hydroxyd nhôm và magnesi\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Sucralfat tạo phức hợp gel bao phủ ổ loét và bảo vệ niêm mạc trong môi trường acid, không có tác dụng ức chế bài tiết acid dịch vị."
    ]
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
      "Al(OH)3 gây táo bón, còn Mg(OH)2 gây tiêu chảy",
      "Al(OH)3 gây tiêu chảy, còn Mg(OH)2 gây táo bón",
      "Cả hai muối đều làm tăng nhu động gây tiêu chảy",
      "Cả hai muối đều làm giảm nhu động gây táo bón"
    ],
    "correct": 0,
    "explanation": "Al3+ làm giãn cơ trơn ruột và kết tủa protein niêm mạc gây săn se dẫn đến táo bón. Ngược lại, Mg2+ không hấp thu giữ nước trong lòng ruột gây tiêu chảy thẩm thấu. Vì vậy, các chế phẩm Antacid (như Maalox) thường phối hợp cả hai để cân bằng nhu động.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Al3+ làm giãn cơ trơn ruột và kết tủa protein niêm mạc gây săn se dẫn đến táo bón. Ngược lại, Mg2+ không hấp thu giữ nước trong lòng ruột gây tiêu chảy thẩm thấu. Vì vậy, các chế phẩm Antacid (như Maalox) thường phối hợp cả hai để cân bằng nhu động.",
      "Phương án này không đúng vì \"Al(OH)3 gây tiêu chảy, còn Mg(OH)2 gây táo bón\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Cả hai muối đều làm tăng nhu động gây tiêu chảy\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Cả hai muối đều làm giảm nhu động gây táo bón\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Môi trường acid với pH dưới 4",
      "Môi trường kiềm với pH trên 7",
      "Môi trường có muối mật nhũ hóa",
      "Môi trường trung tính với pH xấp xỉ 7"
    ],
    "correct": 0,
    "explanation": "Sucralfat là phức hợp của sucrose octasulfat và nhôm hydroxyd. Trong môi trường acid (pH < 4), thuốc bị trùng hợp (polymer hóa) tạo thành một lớp gel dính có điện tích âm, gắn chặt vào các protein mang điện tích dương tại đáy ổ loét.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Sucralfat là phức hợp của sucrose octasulfat và nhôm hydroxyd. Trong môi trường acid (pH < 4), thuốc bị trùng hợp (polymer hóa) tạo thành một lớp gel dính có điện tích âm, gắn chặt vào các protein mang điện tích dương tại đáy ổ loét.",
      "Phương án này không đúng vì \"Môi trường kiềm với pH trên 7\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Môi trường có muối mật nhũ hóa\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Môi trường trung tính với pH xấp xỉ 7\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Tiêu chảy cấp khi đi du lịch nước ngoài",
      "Tiêu chảy kèm sốt cao và phân có máu",
      "Tiêu chảy cơ năng trong ruột kích thích",
      "Tiêu chảy thẩm thấu kém dung nạp lactose"
    ],
    "correct": 1,
    "explanation": "Bismuth phản ứng với khí hydro sulfid (H2S) do vi khuẩn đường ruột sinh ra tạo thành muối Bismuth sulfid (Bi2S3) kết tủa màu đen, làm phân và lưỡi có màu đen nhánh (dễ nhầm với xuất huyết tiêu hóa do loét).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Tiêu chảy cấp khi đi du lịch nước ngoài\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Bismuth phản ứng với khí hydro sulfid (H2S) do vi khuẩn đường ruột sinh ra tạo thành muối Bismuth sulfid (Bi2S3) kết tủa màu đen, làm phân và lưỡi có màu đen nhánh (dễ nhầm với xuất huyết tiêu hóa do loét).",
      "Phương án này không đúng vì \"Tiêu chảy cơ năng trong ruột kích thích\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tiêu chảy thẩm thấu kém dung nạp lactose\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Salmeterol dạng bột hít khô qua dụng cụ phân liều",
      "Ipratropium bromid dạng khí dung dung dịch tại chỗ",
      "Salbutamol dạng bình xịt định liều tác dụng nhanh",
      "Budesonid dạng hỗn dịch khí dung kiểm soát viêm hen"
    ],
    "correct": 2,
    "explanation": "Salbutamol (Albuterol) và Terbutalin là các thuốc kích thích chọn lọc thụ thể beta-2 adrenergic tác dụng ngắn (SABA), khởi phát tác dụng nhanh sau 3-5 phút, kéo dài 4-6 giờ, là lựa chọn hàng đầu để cắt cơn co thắt phế quản cấp tính.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Salmeterol dạng bột hít khô qua dụng cụ phân liều\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ipratropium bromid dạng khí dung dung dịch tại chỗ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Salbutamol (Albuterol) và Terbutalin là các thuốc kích thích chọn lọc thụ thể beta-2 adrenergic tác dụng ngắn (SABA), khởi phát tác dụng nhanh sau 3-5 phút, kéo dài 4-6 giờ, là lựa chọn hàng đầu để cắt cơn co thắt phế quản cấp tính.",
      "Phương án này không đúng vì \"Budesonid dạng hỗn dịch khí dung kiểm soát viêm hen\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Tăng tổng hợp AMP vòng qua kích hoạt enzym adenylcyclase",
      "Tăng tổng hợp GMP vòng qua kích thích guanylyl cyclase",
      "Ức chế enzym phospholipase C làm giảm inositol triphosphat",
      "Mở kênh calci phụ thuộc điện thế typ L trên màng tế bào"
    ],
    "correct": 0,
    "explanation": "Chủ vận beta-2 gắn vào thụ thể liên kết protein Gs, hoạt hóa adenylcyclase tổng hợp cAMP. cAMP kích hoạt PKA phosphoryl hóa làm bất hoạt MLCK và thúc đẩy bơm Ca2+ ra ngoài lưới nội bào, gây giãn cơ trơn phế quản.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Chủ vận beta-2 gắn vào thụ thể liên kết protein Gs, hoạt hóa adenylcyclase tổng hợp cAMP. cAMP kích hoạt PKA phosphoryl hóa làm bất hoạt MLCK và thúc đẩy bơm Ca2+ ra ngoài lưới nội bào, gây giãn cơ trơn phế quản.",
      "Phương án này không đúng vì \"Tăng tổng hợp GMP vòng qua kích thích guanylyl cyclase\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ức chế enzym phospholipase C làm giảm inositol triphosphat\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Mở kênh calci phụ thuộc điện thế typ L trên màng tế bào\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Chống chỉ định dùng cho người cao tuổi suy tim",
      "Bắt buộc ngừng thuốc trước khi tiêm vacxin 4 tuần",
      "Không dùng đơn trị liệu mà phải phối hợp ICS",
      "Chỉ dùng đường tiêm dưới da trong cơn hen kịch phát"
    ],
    "correct": 2,
    "explanation": "Dùng LABA đơn độc làm giảm nhạy cảm thụ thể beta-2 và che giấu tình trạng viêm mạn tính của đường thở, làm tăng đáng kể các đợt kịch phát nặng đe dọa tính mạng và tử vong do hen. Do đó, trong hen phế quản, LABA bắt buộc phải luôn kết hợp với ICS.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Chống chỉ định dùng cho người cao tuổi suy tim\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Bắt buộc ngừng thuốc trước khi tiêm vacxin 4 tuần\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Dùng LABA đơn độc làm giảm nhạy cảm thụ thể beta-2 và che giấu tình trạng viêm mạn tính của đường thở, làm tăng đáng kể các đợt kịch phát nặng đe dọa tính mạng và tử vong do hen. Do đó, trong hen phế quản, LABA bắt buộc phải luôn kết hợp với ICS.",
      "Phương án này không đúng vì \"Chỉ dùng đường tiêm dưới da trong cơn hen kịch phát\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Chảy máu vách ngăn mũi kéo dài",
      "Teo niêm mạc đường thở do lắng đọng thuốc",
      "Viêm loét nướu cấp tính tái phát",
      "Nấm Candida hầu họng và khàn tiếng"
    ],
    "correct": 3,
    "explanation": "Do một phần thuốc dạng xịt hít lắng đọng tại khoang miệng và hầu họng gây ức chế miễn dịch tại chỗ và teo cơ thanh âm, dẫn tới nhiễm nấm Candida miệng (tưa miệng) và khàn tiếng. Phòng ngừa bằng cách súc miệng nhổ nước ngay sau khi hít thuốc.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Chảy máu vách ngăn mũi kéo dài\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Teo niêm mạc đường thở do lắng đọng thuốc\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Viêm loét nướu cấp tính tái phát\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Do một phần thuốc dạng xịt hít lắng đọng tại khoang miệng và hầu họng gây ức chế miễn dịch tại chỗ và teo cơ thanh âm, dẫn tới nhiễm nấm Candida miệng (tưa miệng) và khàn tiếng. Phòng ngừa bằng cách súc miệng nhổ nước ngay sau khi hít thuốc."
    ]
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
      "Nồng độ từ 1 đến 5 mcg/mL trong huyết tương",
      "Nồng độ từ 25 đến 50 mcg/mL trong huyết tương",
      "Nồng độ từ 10 đến 20 mcg/mL trong huyết tương",
      "Nồng độ từ 50 đến 100 mcg/mL trong huyết tương"
    ],
    "correct": 2,
    "explanation": "Theophyllin có khoảng trị liệu rất hẹp: nồng độ điều trị tối ưu là 10 - 20 mcg/mL. Khi nồng độ > 20 mcg/mL xuất hiện buồn nôn, nôn mửa; khi > 30 mcg/mL nguy cơ loạn nhịp tim nguy hiểm và co giật kháng trị tử vong.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Nồng độ từ 1 đến 5 mcg/mL trong huyết tương\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Nồng độ từ 25 đến 50 mcg/mL trong huyết tương\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Theophyllin có khoảng trị liệu rất hẹp: nồng độ điều trị tối ưu là 10 - 20 mcg/mL. Khi nồng độ > 20 mcg/mL xuất hiện buồn nôn, nôn mửa; khi > 30 mcg/mL nguy cơ loạn nhịp tim nguy hiểm và co giật kháng trị tử vong.",
      "Phương án này không đúng vì \"Nồng độ từ 50 đến 100 mcg/mL trong huyết tương\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Đối kháng thụ thể muscarinic tại cơ trơn phế quản",
      "Kích thích thụ thể beta-2 adrenergic tại phế quản",
      "Ức chế chọn lọc enzym 5-lipoxygenase đường hô hấp",
      "Đối kháng chọn lọc thụ thể histamin H1 đường hô hấp"
    ],
    "correct": 0,
    "explanation": "Ipratropium (SAMA) và Tiotropium (LAMA) là các dẫn chất amoni bậc 4 đối kháng thụ thể Muscarinic (chủ yếu là M3) trên cơ trơn phế quản, ngăn chặn tác dụng co thắt phế quản và tăng tiết nhầy của acetylcholin.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Ipratropium (SAMA) và Tiotropium (LAMA) là các dẫn chất amoni bậc 4 đối kháng thụ thể Muscarinic (chủ yếu là M3) trên cơ trơn phế quản, ngăn chặn tác dụng co thắt phế quản và tăng tiết nhầy của acetylcholin.",
      "Phương án này không đúng vì \"Kích thích thụ thể beta-2 adrenergic tại phế quản\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ức chế chọn lọc enzym 5-lipoxygenase đường hô hấp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Đối kháng chọn lọc thụ thể histamin H1 đường hô hấp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Thụ thể leukotriene B4 typ 1 trên bạch cầu trung tính",
      "Thụ thể cysteinyl leukotriene typ 1 tại đường hô hấp",
      "Thụ thể thromboxan A2 typ prostanoid trên màng tiểu cầu",
      "Thụ thể prostaglandin F2-alpha tại cơ trơn phế quản"
    ],
    "correct": 1,
    "explanation": "Montelukast và Zafirlukast là các chất đối kháng chọn lọc cao tại thụ thể CysLT1, ngăn chặn tác động của các leukotriene cysteinyl (LTC4, LTD4, LTE4) - những chất trung gian gây co thắt phế quản mạnh gấp 1000 lần histamin và tăng tính thấm thành mạch.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Thụ thể leukotriene B4 typ 1 trên bạch cầu trung tính\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Montelukast và Zafirlukast là các chất đối kháng chọn lọc cao tại thụ thể CysLT1, ngăn chặn tác động của các leukotriene cysteinyl (LTC4, LTD4, LTE4) - những chất trung gian gây co thắt phế quản mạnh gấp 1000 lần histamin và tăng tính thấm thành mạch.",
      "Phương án này không đúng vì \"Thụ thể thromboxan A2 typ prostanoid trên màng tiểu cầu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thụ thể prostaglandin F2-alpha tại cơ trơn phế quản\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Phân tử khối lượng lớn, phân cực mạnh ở pH sinh lý",
      "Gắn kết không thuận nghịch với albumin huyết tương",
      "Bị bơm tống thuốc P-glycoprotein tống ngược khỏi não",
      "Tính thân dầu cao, không tích điện nên dễ qua hàng rào máu não"
    ],
    "correct": 3,
    "explanation": "Thuốc thế hệ 1 có tính thân dầu cao, không ion hóa ở pH sinh lý và kích thước phân tử nhỏ nên dễ dàng khuếch tán qua hàng rào máu não, chẹn thụ thể H1 ở vỏ não và hệ lưới, làm suy giảm dẫn truyền kích thích tỉnh táo của histamin gây buồn ngủ sâu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Phân tử khối lượng lớn, phân cực mạnh ở pH sinh lý\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Gắn kết không thuận nghịch với albumin huyết tương\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Bị bơm tống thuốc P-glycoprotein tống ngược khỏi não\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Thuốc thế hệ 1 có tính thân dầu cao, không ion hóa ở pH sinh lý và kích thước phân tử nhỏ nên dễ dàng khuếch tán qua hàng rào máu não, chẹn thụ thể H1 ở vỏ não và hệ lưới, làm suy giảm dẫn truyền kích thích tỉnh táo của histamin gây buồn ngủ sâu."
    ]
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
      "Bị phân hủy hoàn toàn bởi hệ enzym tại niêm mạc ruột",
      "Cấu trúc phân cực, tích điện và bị bơm P-gp tống khỏi não",
      "Đối kháng chọn lọc trên thụ thể H2 ở niêm mạc dạ dày",
      "Kích thích thụ thể giao cảm alpha-1 tại hệ thần kinh"
    ],
    "correct": 1,
    "explanation": "Thuốc thế hệ 2 có tính ưa nước cao hơn, bị ion hóa ở pH sinh lý, gắn protein mạnh và đặc biệt là cơ chất của bơm tống thuốc P-glycoprotein tại nội mô mạch máu não (bị bơm ngược ra ngoài nếu lọt vào), do đó thuốc chọn lọc cao trên thụ thể H1 ngoại vi.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Bị phân hủy hoàn toàn bởi hệ enzym tại niêm mạc ruột\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Thuốc thế hệ 2 có tính ưa nước cao hơn, bị ion hóa ở pH sinh lý, gắn protein mạnh và đặc biệt là cơ chất của bơm tống thuốc P-glycoprotein tại nội mô mạch máu não (bị bơm ngược ra ngoài nếu lọt vào), do đó thuốc chọn lọc cao trên thụ thể H1 ngoại vi.",
      "Phương án này không đúng vì \"Đối kháng chọn lọc trên thụ thể H2 ở niêm mạc dạ dày\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích thích thụ thể giao cảm alpha-1 tại hệ thần kinh\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Tăng tiết nước bọt, co đồng tử và tiêu chảy lỏng",
      "Khô miệng, nhìn mờ, giảm tiết mồ hôi và táo bón",
      "Chậm nhịp tim, tụt huyết áp và hạ thân nhiệt sâu",
      "Co thắt phế quản, tăng tiết đờm dãi đường hô hấp"
    ],
    "correct": 1,
    "explanation": "Do cấu trúc tương đồng với thuốc kháng muscarinic, kháng H1 thế hệ 1 chẹn thụ thể Muscarinic ngoại vi gây hội chứng anticholinergic: khô miệng, giảm tiết mồ hôi, giãn đồng tử (nhìn mờ), bí tiểu (do co cơ thắt cổ bàng quang) và táo bón.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Tăng tiết nước bọt, co đồng tử và tiêu chảy lỏng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Do cấu trúc tương đồng với thuốc kháng muscarinic, kháng H1 thế hệ 1 chẹn thụ thể Muscarinic ngoại vi gây hội chứng anticholinergic: khô miệng, giảm tiết mồ hôi, giãn đồng tử (nhìn mờ), bí tiểu (do co cơ thắt cổ bàng quang) và táo bón.",
      "Phương án này không đúng vì \"Chậm nhịp tim, tụt huyết áp và hạ thân nhiệt sâu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Co thắt phế quản, tăng tiết đờm dãi đường hô hấp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Hạ huyết áp tư thế đứng mạn tính",
      "Viêm mũi dị ứng mạn tính có polyp mũi",
      "Phì đại tuyến tiền liệt và glaucom góc đóng",
      "Suy vỏ thượng thận tiên phát mạn tính"
    ],
    "correct": 2,
    "explanation": "Tác dụng kháng muscarinic làm co cơ thắt cổ bàng quang và giãn cơ bàng quang dẫn đến bí tiểu cấp ở người phì đại tiền liệt tuyến; đồng thời gây giãn đồng tử làm nghẽn góc tiền đình mắt, khởi phát cơn tăng nhãn áp cấp ở người có Glaucoma góc đóng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Hạ huyết áp tư thế đứng mạn tính\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Viêm mũi dị ứng mạn tính có polyp mũi\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Tác dụng kháng muscarinic làm co cơ thắt cổ bàng quang và giãn cơ bàng quang dẫn đến bí tiểu cấp ở người phì đại tiền liệt tuyến; đồng thời gây giãn đồng tử làm nghẽn góc tiền đình mắt, khởi phát cơn tăng nhãn áp cấp ở người có Glaucoma góc đóng.",
      "Phương án này không đúng vì \"Suy vỏ thượng thận tiên phát mạn tính\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Thuốc lợi tiểu tiết kiệm kali (Spironolacton)",
      "Thuốc kháng viêm không steroid (NSAID)",
      "Các dẫn chất glycosid trợ tim (Digoxin)",
      "Thuốc ức chế enzym cytochrom CYP3A4"
    ],
    "correct": 3,
    "explanation": "Terfenadin là tiền chất chẹn kênh Kali tim mạch (hERG) khi ở nồng độ cao. Các thuốc ức chế mạnh CYP3A4 (Ketoconazol, Erythromycin) ngăn chuyển hóa Terfenadin thành chất chuyển hóa có hoạt tính Fexofenadin, làm nồng độ Terfenadin mẹ tăng vọt gây kéo dài QT và xoắn đỉnh tử vong.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Thuốc lợi tiểu tiết kiệm kali (Spironolacton)\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thuốc kháng viêm không steroid (NSAID)\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Các dẫn chất glycosid trợ tim (Digoxin)\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Terfenadin là tiền chất chẹn kênh Kali tim mạch (hERG) khi ở nồng độ cao. Các thuốc ức chế mạnh CYP3A4 (Ketoconazol, Erythromycin) ngăn chuyển hóa Terfenadin thành chất chuyển hóa có hoạt tính Fexofenadin, làm nồng độ Terfenadin mẹ tăng vọt gây kéo dài QT và xoắn đỉnh tử vong."
    ]
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
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Desloratadin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Fexofenadin là dẫn chất acid carboxylic chuyển hóa của Terfenadin qua enzym CYP3A4. Phân tử này giữ nguyên hoạt tính kháng H1 mạnh nhưng hoàn toàn không chẹn kênh Kali tim mạch hERG, không gây xoắn đỉnh kể cả khi dùng liều rất cao.",
      "Phương án này không đúng vì \"Levocetirizin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Olopatadin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Gây tê niêm mạc dạ dày và ức chế chọn lọc thụ thể serotonin",
      "Kích thích thụ thể dopamin D2 tại vùng kích hoạt hóa nôn",
      "Ức chế thụ thể H1 và Muscarinic trung ương tại tiền đình",
      "Tăng trương lực cơ thắt thực quản dưới và làm rỗng dạ dày"
    ],
    "correct": 2,
    "explanation": "Cung phản xạ say tàu xe từ mê đạo tai trong truyền tín hiệu qua các synap cholinergic và histaminergic tại nhân tiền đình. Thuốc thế hệ 1 vào não chẹn cả thụ thể H1 và M trung ương, cắt đứt dẫn truyền này; trong khi thế hệ 2 không vào não nên không có tác dụng chống say tàu xe.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Gây tê niêm mạc dạ dày và ức chế chọn lọc thụ thể serotonin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích thích thụ thể dopamin D2 tại vùng kích hoạt hóa nôn\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Cung phản xạ say tàu xe từ mê đạo tai trong truyền tín hiệu qua các synap cholinergic và histaminergic tại nhân tiền đình. Thuốc thế hệ 1 vào não chẹn cả thụ thể H1 và M trung ương, cắt đứt dẫn truyền này; trong khi thế hệ 2 không vào não nên không có tác dụng chống say tàu xe.",
      "Phương án này không đúng vì \"Tăng trương lực cơ thắt thực quản dưới và làm rỗng dạ dày\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Ức chế acetylcholinesterase làm tăng tích tụ acetylcholin",
      "Mở kênh clo phụ thuộc glutamat gây liệt mềm cơ thể giun",
      "Tạo các gốc tự do peroxy hóa lipid làm rách màng tế bào",
      "Gắn chọn lọc vào beta-tubulin và ức chế trùng hợp vi ống"
    ],
    "correct": 3,
    "explanation": "Albendazol và Mebendazol gắn đặc hiệu vào beta-tubulin của giun (ái lực cao hơn tubulin người hàng trăm lần), ức chế quá trình trùng hợp thành vi ống (microtubules). Mất vi ống làm tế bào giun mất khả năng vận chuyển bài tiết, ức chế bắt giữ glucose, làm cạn kiệt glycogen khiến giun bất động và chết chậm.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Ức chế acetylcholinesterase làm tăng tích tụ acetylcholin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Mở kênh clo phụ thuộc glutamat gây liệt mềm cơ thể giun\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tạo các gốc tự do peroxy hóa lipid làm rách màng tế bào\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Albendazol và Mebendazol gắn đặc hiệu vào beta-tubulin của giun (ái lực cao hơn tubulin người hàng trăm lần), ức chế quá trình trùng hợp thành vi ống (microtubules). Mất vi ống làm tế bào giun mất khả năng vận chuyển bài tiết, ức chế bắt giữ glucose, làm cạn kiệt glycogen khiến giun bất động và chết chậm."
    ]
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
      "Trị giun ruột uống lúc đói; trị ấu trùng sán mô uống cùng thức ăn béo",
      "Trị giun ruột dùng đường tiêm bắp; trị ấu trùng sán mô dùng đường uống",
      "Trị giun ruột uống với kiềm; trị ấu trùng sán mô uống cùng nước chua",
      "Trị giun ruột uống một liều; trị ấu trùng sán mô dùng liều tăng dần"
    ],
    "correct": 0,
    "explanation": "Albendazol rất ít tan trong nước, hấp thu qua ruột lúc đói chỉ < 5% (thích hợp diệt giun đũa, giun móc tại lòng ruột). Khi điều trị ấu trùng sán dải ở mô sâu (não, gan), bắt buộc phải uống cùng bữa ăn có chất béo để tăng độ tan và tăng sinh khả dụng vào máu lên gấp 4-5 lần tạo nồng độ diệt ấu trùng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Albendazol rất ít tan trong nước, hấp thu qua ruột lúc đói chỉ < 5% (thích hợp diệt giun đũa, giun móc tại lòng ruột). Khi điều trị ấu trùng sán dải ở mô sâu (não, gan), bắt buộc phải uống cùng bữa ăn có chất béo để tăng độ tan và tăng sinh khả dụng vào máu lên gấp 4-5 lần tạo nồng độ diệt ấu trùng.",
      "Phương án này không đúng vì \"Trị giun ruột dùng đường tiêm bắp; trị ấu trùng sán mô dùng đường uống\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Trị giun ruột uống với kiềm; trị ấu trùng sán mô uống cùng nước chua\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Trị giun ruột uống một liều; trị ấu trùng sán mô dùng liều tăng dần\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Ức chế tổng hợp acetylcholin làm giun mất trương lực vận động",
      "Kích thích thụ thể nicotinic và kháng AChE gây liệt cứng cơ",
      "Kích hoạt thụ thể GABA mở kênh clo gây liệt mềm cơ thể giun",
      "Chẹn kênh natri phụ thuộc điện thế trên sợi trục thần kinh"
    ],
    "correct": 1,
    "explanation": "Pyrantel pamoat là chất chủ vận mạnh tại thụ thể Nicotinic acetylcholine ở màng sau synap của giun, gây khử cực liên tục dẫn đến co cứng cơ dữ dội và liệt cứng (spastic paralysis). Giun bị liệt cứng mất khả năng bám vào thành ruột và bị nhu động đẩy ra ngoài theo phân.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Ức chế tổng hợp acetylcholin làm giun mất trương lực vận động\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Pyrantel pamoat là chất chủ vận mạnh tại thụ thể Nicotinic acetylcholine ở màng sau synap của giun, gây khử cực liên tục dẫn đến co cứng cơ dữ dội và liệt cứng (spastic paralysis). Giun bị liệt cứng mất khả năng bám vào thành ruột và bị nhu động đẩy ra ngoài theo phân.",
      "Phương án này không đúng vì \"Kích hoạt thụ thể GABA mở kênh clo gây liệt mềm cơ thể giun\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Chẹn kênh natri phụ thuộc điện thế trên sợi trục thần kinh\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Tăng tính thấm màng tế bào với ion calci",
      "Tăng tính thấm màng tế bào với ion natri",
      "Tăng tính thấm màng tế bào với ion magnesi",
      "Tăng tính thấm màng tế bào với ion kali"
    ],
    "correct": 0,
    "explanation": "Praziquantel làm tăng đột ngột tính thấm của màng tế bào sán đối với ion Ca2+, làm dòng Ca2+ ồ ạt tràn vào trong bào tương. Điều này gây co thắt và liệt cứng cơ sán lập tức, đồng thời tạo các bọng nước làm vỡ lớp vỏ bao (tegument), bộc lộ kháng nguyên cho hệ miễn dịch vật chủ tiêu diệt.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Praziquantel làm tăng đột ngột tính thấm của màng tế bào sán đối với ion Ca2+, làm dòng Ca2+ ồ ạt tràn vào trong bào tương. Điều này gây co thắt và liệt cứng cơ sán lập tức, đồng thời tạo các bọng nước làm vỡ lớp vỏ bao (tegument), bộc lộ kháng nguyên cho hệ miễn dịch vật chủ tiêu diệt.",
      "Phương án này không đúng vì \"Tăng tính thấm màng tế bào với ion natri\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tăng tính thấm màng tế bào với ion magnesi\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tăng tính thấm màng tế bào với ion kali\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Tiêm phối hợp kháng sinh nhóm cephalosporin thế hệ ba",
      "Uống thuốc tẩy muối magnesi sulfat sau khoảng hai giờ",
      "Uống thuốc chống nôn tác dụng trung ương liều cao",
      "Dùng kháng histamin phối hợp corticoid trước khi uống"
    ],
    "correct": 1,
    "explanation": "Niclosamid giết chết đầu và đốt sán nhưng không giết được trứng sán. Khi đốt sán bị tiêu hóa trong ruột, hàng triệu trứng sán giải phóng ra; nếu bị trào ngược lên dạ dày hoặc nở trong ruột non, ấu trùng sẽ xuyên thành mạch di chuyển lên não gây bệnh ấu trùng sán lợn ở não. Cần tẩy xổ muối ngay sau 2 giờ để tống sạch trứng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Tiêm phối hợp kháng sinh nhóm cephalosporin thế hệ ba\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Niclosamid giết chết đầu và đốt sán nhưng không giết được trứng sán. Khi đốt sán bị tiêu hóa trong ruột, hàng triệu trứng sán giải phóng ra; nếu bị trào ngược lên dạ dày hoặc nở trong ruột non, ấu trùng sẽ xuyên thành mạch di chuyển lên não gây bệnh ấu trùng sán lợn ở não. Cần tẩy xổ muối ngay sau 2 giờ để tống sạch trứng.",
      "Phương án này không đúng vì \"Uống thuốc chống nôn tác dụng trung ương liều cao\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Dùng kháng histamin phối hợp corticoid trước khi uống\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Gắn kênh clo phụ thuộc glutamat gây ưu phân cực và liệt mềm giun",
      "Ức chế tiểu phần 30S của ribosom ngừng sinh tổng hợp protein",
      "Ức chế enzym 14-alpha demethylase làm ngừng tổng hợp ergosterol",
      "Chẹn kênh calci phụ thuộc điện thế ở màng trước synap"
    ],
    "correct": 0,
    "explanation": "Ivermectin gắn đặc hiệu vào các kênh Clo nhạy cảm Glutamat (GluCl) - kênh chỉ có ở động vật không xương sống (không có ở người). Thuốc làm tăng tính thấm ion Cl- vào tế bào, gây ưu phân cực màng, làm tê liệt mềm (flaccid paralysis) cơ quan vận động và họng của giun khiến chúng chết đói.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Ivermectin gắn đặc hiệu vào các kênh Clo nhạy cảm Glutamat (GluCl) - kênh chỉ có ở động vật không xương sống (không có ở người). Thuốc làm tăng tính thấm ion Cl- vào tế bào, gây ưu phân cực màng, làm tê liệt mềm (flaccid paralysis) cơ quan vận động và họng của giun khiến chúng chết đói.",
      "Phương án này không đúng vì \"Ức chế tiểu phần 30S của ribosom ngừng sinh tổng hợp protein\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ức chế enzym 14-alpha demethylase làm ngừng tổng hợp ergosterol\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Chẹn kênh calci phụ thuộc điện thế ở màng trước synap\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Ức chế tổng hợp peptidoglycan ở thành tế bào vi khuẩn",
      "Khử nhóm nitro tạo gốc tự do phá hủy chuỗi xoắn kép DNA",
      "Cạnh tranh chọn lọc enzym tổng hợp dẫn chất acid folic",
      "Kích hoạt superoxide dismutase tiêu hao năng lượng tế bào"
    ],
    "correct": 1,
    "explanation": "Metronidazol là tiền chất. Trong môi trường yếm khí của amip hoặc vi khuẩn kỵ khí, protein vận chuyển electron ferredoxin khử nhóm nitro (-NO2) của thuốc thành các gốc tự do dạng khử có độc tính cao. Các gốc tự do này tấn công bẻ gãy chuỗi xoắn kép DNA, làm đứt gãy DNA và giết chết ký sinh trùng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Ức chế tổng hợp peptidoglycan ở thành tế bào vi khuẩn\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Metronidazol là tiền chất. Trong môi trường yếm khí của amip hoặc vi khuẩn kỵ khí, protein vận chuyển electron ferredoxin khử nhóm nitro (-NO2) của thuốc thành các gốc tự do dạng khử có độc tính cao. Các gốc tự do này tấn công bẻ gãy chuỗi xoắn kép DNA, làm đứt gãy DNA và giết chết ký sinh trùng.",
      "Phương án này không đúng vì \"Cạnh tranh chọn lọc enzym tổng hợp dẫn chất acid folic\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích hoạt superoxide dismutase tiêu hao năng lượng tế bào\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Albendazol dạng viên nhai",
      "Praziquantel dạng viên nén bao phim",
      "Pyrantel pamoat dạng hỗn dịch uống",
      "Metronidazol dạng viên uống"
    ],
    "correct": 3,
    "explanation": "Metronidazol ức chế enzym Aldehyd Dehydrogenase ở gan, ngăn cản chuyển hóa acetaldehyd thành acid acetic khi uống rượu. Acetaldehyd ứ đọng với nồng độ cao trong máu gây đỏ bừng mặt, tim đập nhanh, buồn nôn, nôn mửa dữ dội và tụt huyết áp. Cấm uống rượu trong khi dùng và sau khi ngừng thuốc 72 giờ.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Albendazol dạng viên nhai\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Praziquantel dạng viên nén bao phim\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Pyrantel pamoat dạng hỗn dịch uống\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Metronidazol ức chế enzym Aldehyd Dehydrogenase ở gan, ngăn cản chuyển hóa acetaldehyd thành acid acetic khi uống rượu. Acetaldehyd ứ đọng với nồng độ cao trong máu gây đỏ bừng mặt, tim đập nhanh, buồn nôn, nôn mửa dữ dội và tụt huyết áp. Cấm uống rượu trong khi dùng và sau khi ngừng thuốc 72 giờ."
    ]
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
      "Tiếp tục dùng metronidazol duy trì kéo dài trong ba tháng",
      "Tiêm bắp phối hợp dung dịch emetin định kỳ sau mỗi đợt",
      "Dùng tiếp một đợt thuốc diệt amip lòng ruột (Paromomycin)",
      "Cho uống kháng sinh aminoglycosid kết hợp thụt tháo ruột"
    ],
    "correct": 2,
    "explanation": "Metronidazol chỉ diệt thể amip hoạt động (trophozoite) xâm lấn ở mô ruột và gan, hoàn toàn không có tác dụng trên thể bào nang (cyst) trong lòng ruột. Nếu không dùng thêm thuốc diệt amip lòng ruột (như Diloxanid furoat), bào nang sẽ tiếp tục tồn tại, tái phát bệnh và làm người bệnh trở thành nguồn lây mầm bệnh.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Tiếp tục dùng metronidazol duy trì kéo dài trong ba tháng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tiêm bắp phối hợp dung dịch emetin định kỳ sau mỗi đợt\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Metronidazol chỉ diệt thể amip hoạt động (trophozoite) xâm lấn ở mô ruột và gan, hoàn toàn không có tác dụng trên thể bào nang (cyst) trong lòng ruột. Nếu không dùng thêm thuốc diệt amip lòng ruột (như Diloxanid furoat), bào nang sẽ tiếp tục tồn tại, tái phát bệnh và làm người bệnh trở thành nguồn lây mầm bệnh.",
      "Phương án này không đúng vì \"Cho uống kháng sinh aminoglycosid kết hợp thụt tháo ruột\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Rụng tóc từng mảng và rụng lông mi kéo dài",
      "Phân bạc màu kèm theo triệu chứng vàng da",
      "Nước tiểu đổi màu đỏ nâu hoặc sẫm tối",
      "Da xuất hiện dát tăng sắc tố xám xanh ở mặt"
    ],
    "correct": 2,
    "explanation": "Các chất chuyển hóa có màu của Metronidazol bài tiết qua thận làm nước tiểu có màu sẫm tối hoặc đỏ nâu. Hiện tượng này hoàn toàn lành tính và sẽ tự biến mất sau khi ngừng thuốc, cần dặn trước để bệnh nhân yên tâm tuân thủ điều trị.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Rụng tóc từng mảng và rụng lông mi kéo dài\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Phân bạc màu kèm theo triệu chứng vàng da\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Các chất chuyển hóa có màu của Metronidazol bài tiết qua thận làm nước tiểu có màu sẫm tối hoặc đỏ nâu. Hiện tượng này hoàn toàn lành tính và sẽ tự biến mất sau khi ngừng thuốc, cần dặn trước để bệnh nhân yên tâm tuân thủ điều trị.",
      "Phương án này không đúng vì \"Da xuất hiện dát tăng sắc tố xám xanh ở mặt\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Bệnh nhân tăng huyết áp vô căn giai đoạn một",
      "Người cao tuổi mắc bệnh phổi tắc nghẽn mạn",
      "Bệnh nhân đái tháo đường typ hai kiểm soát",
      "Phụ nữ mang thai và trẻ em dưới một tuổi"
    ],
    "correct": 3,
    "explanation": "Albendazol và Mebendazol ức chế trùng hợp tubulin của phôi thai, có bằng chứng gây dị tật thai nhi và tiêu thai trên động vật thực nghiệm. Thuốc chống chỉ định trong thai kỳ (đặc biệt 3 tháng đầu) và thận trọng cho phụ nữ có ý định mang thai (cần tránh thai 1 tháng sau khi uống thuốc).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Bệnh nhân tăng huyết áp vô căn giai đoạn một\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Người cao tuổi mắc bệnh phổi tắc nghẽn mạn\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Bệnh nhân đái tháo đường typ hai kiểm soát\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Albendazol và Mebendazol ức chế trùng hợp tubulin của phôi thai, có bằng chứng gây dị tật thai nhi và tiêu thai trên động vật thực nghiệm. Thuốc chống chỉ định trong thai kỳ (đặc biệt 3 tháng đầu) và thận trọng cho phụ nữ có ý định mang thai (cần tránh thai 1 tháng sau khi uống thuốc)."
    ]
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
      "Enzym HMG-CoA Reductase chuyển HMG-CoA thành mevalonat",
      "Enzym Squalene epoxidase chuyển squalene thành epoxide",
      "Enzym 7-alpha-hydroxylase chuyển cholesterol thành mật",
      "Protein vận chuyển MTP xúc tác vận chuyển lipid qua màng"
    ],
    "correct": 0,
    "explanation": "HMG-CoA Reductase là enzym xúc tác chuyển đổi HMG-CoA thành acid mevalonic - đây là phản ứng giới hạn tốc độ và quyết định của toàn bộ chuỗi sinh tổng hợp cholesterol tại tế bào gan. Statin có cấu trúc tương tự HMG-CoA, ức chế cạnh tranh mạnh mẽ enzym này.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "HMG-CoA Reductase là enzym xúc tác chuyển đổi HMG-CoA thành acid mevalonic - đây là phản ứng giới hạn tốc độ và quyết định của toàn bộ chuỗi sinh tổng hợp cholesterol tại tế bào gan. Statin có cấu trúc tương tự HMG-CoA, ức chế cạnh tranh mạnh mẽ enzym này.",
      "Phương án này không đúng vì \"Enzym Squalene epoxidase chuyển squalene thành epoxide\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Enzym 7-alpha-hydroxylase chuyển cholesterol thành mật\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Protein vận chuyển MTP xúc tác vận chuyển lipid qua màng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Tăng đào thải trực tiếp các lipoprotein LDL qua nước tiểu",
      "Biến tính phân tử ApoB-100 gây tự phân hủy hạt LDL",
      "Tăng số lượng và mật độ thụ thể LDL ở màng tế bào gan",
      "Ức chế bài tiết lipase tụy ở tá tràng ngừng nhũ hóa lipid"
    ],
    "correct": 2,
    "explanation": "Khi cholesterol nội bào giảm, protein SREBP-2 được chuyển vào nhân kích hoạt phiên mã gen thụ thể LDL, làm tăng số lượng thụ thể LDL ở màng tế bào gan. Các thụ thể này tăng cường bắt giữ và thanh thải LDL và VLDL từ máu vào tế bào gan, làm giảm 20-60% LDL-C máu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Tăng đào thải trực tiếp các lipoprotein LDL qua nước tiểu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Biến tính phân tử ApoB-100 gây tự phân hủy hạt LDL\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Khi cholesterol nội bào giảm, protein SREBP-2 được chuyển vào nhân kích hoạt phiên mã gen thụ thể LDL, làm tăng số lượng thụ thể LDL ở màng tế bào gan. Các thụ thể này tăng cường bắt giữ và thanh thải LDL và VLDL từ máu vào tế bào gan, làm giảm 20-60% LDL-C máu.",
      "Phương án này không đúng vì \"Ức chế bài tiết lipase tụy ở tá tràng ngừng nhũ hóa lipid\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Sinh tổng hợp cholesterol ở gan đạt đỉnh vào ban đêm",
      "Hấp thu qua đường tiêu hóa đạt hiệu suất cao lúc ngủ",
      "Gắn kết với protein huyết tương tăng mạnh về ban đêm",
      "Hoạt chất bị phân hủy quang hóa dưới ánh nắng ban ngày"
    ],
    "correct": 0,
    "explanation": "Sinh tổng hợp cholesterol tại tế bào gan tuân theo nhịp sinh học ngày đêm, đạt cường độ cao nhất vào ban đêm khi cơ thể nhịn ăn (từ nửa đêm đến rạng sáng). Do đó, statin bán thải ngắn cần uống buổi tối trước khi ngủ để nồng độ thuốc đạt đỉnh đúng lúc enzym hoạt động mạnh nhất.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Sinh tổng hợp cholesterol tại tế bào gan tuân theo nhịp sinh học ngày đêm, đạt cường độ cao nhất vào ban đêm khi cơ thể nhịn ăn (từ nửa đêm đến rạng sáng). Do đó, statin bán thải ngắn cần uống buổi tối trước khi ngủ để nồng độ thuốc đạt đỉnh đúng lúc enzym hoạt động mạnh nhất.",
      "Phương án này không đúng vì \"Hấp thu qua đường tiêu hóa đạt hiệu suất cao lúc ngủ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Gắn kết với protein huyết tương tăng mạnh về ban đêm\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Hoạt chất bị phân hủy quang hóa dưới ánh nắng ban ngày\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Fluvastatin và Pravastatin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Simvastatin và Lovastatin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Cerivastatin và Pitavastatin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Atorvastatin (T1/2 = 14h) và Rosuvastatin (T1/2 = 19h) là hai statin thế hệ mới có thời gian bán thải kéo dài và hiệu lực hạ LDL-C vượt trội (thuộc nhóm statin cường độ cao), cho phép bệnh nhân uống vào bất kỳ thời điểm nào trong ngày mà không phụ thuộc vào bữa ăn hay ban đêm."
    ]
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
      "Tiêu cơ vân cấp tính kèm tăng CK và myoglobin niệu",
      "Viêm gân gót Achille cấp gây đứt gân tự phát khi vận động",
      "Hội chứng nhược cơ ác tính do tự kháng thể kháng thụ thể",
      "Xơ hóa cơ delta tiến triển lan tỏa gây suy giảm thông khí"
    ],
    "correct": 0,
    "explanation": "Tiêu cơ vân cấp (Rhabdomyolysis) làm tế bào cơ bị ly giải ồ ạt, giải phóng Myoglobin vào tuần hoàn gây tắc ống thận dẫn đến suy thận cấp vô niệu. Dấu hiệu chẩn đoán là đau cơ dữ dội, nước tiểu sẫm màu như nước trà/xá xị và men CK tăng gấp trên 10-40 lần giới hạn trên.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Tiêu cơ vân cấp (Rhabdomyolysis) làm tế bào cơ bị ly giải ồ ạt, giải phóng Myoglobin vào tuần hoàn gây tắc ống thận dẫn đến suy thận cấp vô niệu. Dấu hiệu chẩn đoán là đau cơ dữ dội, nước tiểu sẫm màu như nước trà/xá xị và men CK tăng gấp trên 10-40 lần giới hạn trên.",
      "Phương án này không đúng vì \"Viêm gân gót Achille cấp gây đứt gân tự phát khi vận động\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Hội chứng nhược cơ ác tính do tự kháng thể kháng thụ thể\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Xơ hóa cơ delta tiến triển lan tỏa gây suy giảm thông khí\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Dẫn chất acid fibric Gemfibrozil",
      "Dầu cá chứa acid béo Omega-3 tinh chế"
    ],
    "correct": 2,
    "explanation": "Gemfibrozil ức chế quá trình glucuronid hóa của statin và ức chế protein vận chuyển OATP1B1 đưa statin vào gan, làm nồng độ statin tự do trong máu tăng vọt gấp nhiều lần, đẩy nguy cơ tiêu cơ vân lên rất cao. Nếu bắt buộc phối hợp Statin với Fibrat, Fenofibrat là lựa chọn an toàn hơn nhiều.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Nhựa gắn acid mật Cholestyramin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Ezetimibe ức chế protein NPC1L1 ở diềm bàn chải ruột, nguy cơ độc cơ thấp hơn rất nhiều so với phối hợp Statin liều cao với Fibrat.",
      "Gemfibrozil ức chế quá trình glucuronid hóa của statin và ức chế protein vận chuyển OATP1B1 đưa statin vào gan, làm nồng độ statin tự do trong máu tăng vọt gấp nhiều lần, đẩy nguy cơ tiêu cơ vân lên rất cao. Nếu bắt buộc phối hợp Statin với Fibrat, Fenofibrat là lựa chọn an toàn hơn nhiều.",
      "Phương án này không đúng vì \"Dầu cá chứa acid béo Omega-3 tinh chế\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Kích thích enzym HMG-CoA Synthase tại tế bào mô mỡ",
      "Chủ vận thụ thể nhân PPAR-alpha tăng Lipoprotein Lipase",
      "Ức chế protein vận chuyển sterol NPC1L1 tại ruột non",
      "Đối kháng thụ thể PCSK9 ở màng gan tăng thoái giáng LDL"
    ],
    "correct": 1,
    "explanation": "Fibrat là các chất chủ vận chọn lọc trên thụ thể nhân PPAR-alpha. Hoạt hóa PPAR-alpha làm tăng tổng hợp enzym Lipoprotein Lipase (LPL) ở nội mô mao mạch (thủy phân triglycerid trong VLDL và chylomicron), giảm apoC-III và tăng apoA-I/apoA-II (làm tăng HDL-C).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Kích thích enzym HMG-CoA Synthase tại tế bào mô mỡ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Fibrat là các chất chủ vận chọn lọc trên thụ thể nhân PPAR-alpha. Hoạt hóa PPAR-alpha làm tăng tổng hợp enzym Lipoprotein Lipase (LPL) ở nội mô mao mạch (thủy phân triglycerid trong VLDL và chylomicron), giảm apoC-III và tăng apoA-I/apoA-II (làm tăng HDL-C).",
      "Phương án này không đúng vì \"Ức chế protein vận chuyển sterol NPC1L1 tại ruột non\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Đối kháng thụ thể PCSK9 ở màng gan tăng thoái giáng LDL\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Tăng cholesterol máu gia đình đồng hợp tử nặng",
      "Tăng triglycerid máu rất nặng trên 500 mg/dL",
      "Xơ vữa mạch vành có mức mỡ máu bình thường",
      "Dự phòng biến cố thiếu máu cục bộ thoáng qua"
    ],
    "correct": 1,
    "explanation": "Khi Triglycerid máu tăng rất cao (>= 500 mg/dL, đặc biệt > 1000 mg/dL), các hạt chylomicron ứ đọng làm tắc vi tuần hoàn tụy, enzym lipase giải phóng acid béo tự do gây hoại tử tụy cấp. Mục tiêu hàng đầu lúc này là dùng Fibrat để hạ nhanh triglycerid ngừa viêm tụy cấp.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Tăng cholesterol máu gia đình đồng hợp tử nặng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Khi Triglycerid máu tăng rất cao (>= 500 mg/dL, đặc biệt > 1000 mg/dL), các hạt chylomicron ứ đọng làm tắc vi tuần hoàn tụy, enzym lipase giải phóng acid béo tự do gây hoại tử tụy cấp. Mục tiêu hàng đầu lúc này là dùng Fibrat để hạ nhanh triglycerid ngừa viêm tụy cấp.",
      "Phương án này không đúng vì \"Xơ vữa mạch vành có mức mỡ máu bình thường\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Dự phòng biến cố thiếu máu cục bộ thoáng qua\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Ức chế đặc hiệu protein vận chuyển NPC1L1 ở ruột non",
      "Tạo phức chelate không tan với acid mật trong lòng ruột",
      "Ức chế enzym dịch mã tổng hợp protein ApoB-100 ở gan",
      "Kích hoạt chọn lọc enzym LCAT trong tuần hoàn máu"
    ],
    "correct": 0,
    "explanation": "Ezetimibe gắn và ức chế chọn lọc protein vận chuyển NPC1L1 ở diềm bàn chải biểu mô ruột non, làm giảm khoảng 50% sự hấp thu cholesterol từ thức ăn và dịch mật vào tế bào ruột mà không làm giảm hấp thu triglycerid, acid béo hay các vitamin tan trong dầu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Ezetimibe gắn và ức chế chọn lọc protein vận chuyển NPC1L1 ở diềm bàn chải biểu mô ruột non, làm giảm khoảng 50% sự hấp thu cholesterol từ thức ăn và dịch mật vào tế bào ruột mà không làm giảm hấp thu triglycerid, acid béo hay các vitamin tan trong dầu.",
      "Phương án này không đúng vì \"Tạo phức chelate không tan với acid mật trong lòng ruột\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ức chế enzym dịch mã tổng hợp protein ApoB-100 ở gan\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích hoạt chọn lọc enzym LCAT trong tuần hoàn máu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Histamin giải phóng từ dưỡng bào và bạch cầu ái kiềm",
      "Serotonin giải phóng từ tế bào ưa crôm đường tiêu hóa",
      "Prostaglandin D2 và Prostaglandin E2 tại mạch dưới da",
      "Bradykinin tích tụ trong mô kẽ do enzym kininase bị ức chế"
    ],
    "correct": 2,
    "explanation": "Niacin kích hoạt thụ thể GPR109A ở tế bào sừng và tế bào Langerhans tại da, kích thích phospholipase A2 giải phóng PGD2 và PGE2 gây giãn mạnh các mao mạch da mặt và ngực trên, gây đỏ bừng mặt và ngứa dữ dội. Uống Aspirin 325mg trước 30 phút sẽ dự phòng được.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Histamin giải phóng từ dưỡng bào và bạch cầu ái kiềm\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Serotonin giải phóng từ tế bào ưa crôm đường tiêu hóa\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Niacin kích hoạt thụ thể GPR109A ở tế bào sừng và tế bào Langerhans tại da, kích thích phospholipase A2 giải phóng PGD2 và PGE2 gây giãn mạnh các mao mạch da mặt và ngực trên, gây đỏ bừng mặt và ngứa dữ dội. Uống Aspirin 325mg trước 30 phút sẽ dự phòng được.",
      "Phương án này không đúng vì \"Bradykinin tích tụ trong mô kẽ do enzym kininase bị ức chế\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Định lượng hoạt độ enzym men gan AST và ALT",
      "Xét nghiệm chức năng đông máu toàn bộ và INR",
      "Định lượng hoạt độ enzym G6PD trong hồng cầu",
      "Điện giải đồ định lượng nồng độ natri và kali"
    ],
    "correct": 2,
    "explanation": "Primaquin và các chất chuyển hóa có tính oxy hóa mạnh. Ở bệnh nhân thiếu hụt men G6PD, hồng cầu không sản xuất đủ NADPH để tái tạo glutathione khử, màng hồng cầu bị oxy hóa dẫn đến vỡ hồng cầu ồ ạt, gây cơn tan máu cấp tính, tiểu huyết sắc tố và suy thận cấp đe dọa tính mạng. Bắt buộc phải thử G6PD trước khi dùng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Định lượng hoạt độ enzym men gan AST và ALT\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Xét nghiệm chức năng đông máu toàn bộ và INR\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Primaquin và các chất chuyển hóa có tính oxy hóa mạnh. Ở bệnh nhân thiếu hụt men G6PD, hồng cầu không sản xuất đủ NADPH để tái tạo glutathione khử, màng hồng cầu bị oxy hóa dẫn đến vỡ hồng cầu ồ ạt, gây cơn tan máu cấp tính, tiểu huyết sắc tố và suy thận cấp đe dọa tính mạng. Bắt buộc phải thử G6PD trước khi dùng.",
      "Phương án này không đúng vì \"Điện giải đồ định lượng nồng độ natri và kali\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Thể ngủ trong gan và thể giao bào trong máu",
      "Thể phân liệt vô tính trong hồng cầu",
      "Thoa trùng tự do trong huyết tương",
      "Thể tư dưỡng non trong màng hồng cầu"
    ],
    "correct": 0,
    "explanation": "Hypnozoite (thể ngủ trong gan) là nguyên nhân gây ra các cơn sốt rét tái phát xa sau nhiều tháng hoặc nhiều năm ở P. vivax và P. ovale. Primaquin (và Tafenoquine) là thuốc duy nhất diệt sạch thể ẩn này để điều trị tiệt căn hoàn toàn, đồng thời diệt thể giao bào (gametocyte) ngăn muỗi truyền bệnh sang người khác.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Hypnozoite (thể ngủ trong gan) là nguyên nhân gây ra các cơn sốt rét tái phát xa sau nhiều tháng hoặc nhiều năm ở P. vivax và P. ovale. Primaquin (và Tafenoquine) là thuốc duy nhất diệt sạch thể ẩn này để điều trị tiệt căn hoàn toàn, đồng thời diệt thể giao bào (gametocyte) ngăn muỗi truyền bệnh sang người khác.",
      "Phương án này không đúng vì \"Thể phân liệt vô tính trong hồng cầu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thoa trùng tự do trong huyết tương\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thể tư dưỡng non trong màng hồng cầu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Ức chế chọn lọc enzym men dihydrofolat reductase",
      "Alkyl hóa chuỗi xoắn kép DNA ngăn cản sao chép",
      "Chẹn kênh calci màng gây rối loạn điện giải bào",
      "Ức chế trùng hợp heme độc thành sắc tố hemozoin"
    ],
    "correct": 3,
    "explanation": "Ký sinh trùng ăn hemoglobin giải phóng phân tử Heme (ferriprotoporphyrin IX) rất độc. Để tự vệ, ký sinh trùng trùng hợp heme thành tinh thể hemozoin trơ không độc. Chloroquin tích tụ ở không bào tiêu hóa (pH acid), gắn vào heme ngăn tạo hemozoin. Heme tự do tích tụ làm vỡ màng không bào và giết chết ký sinh trùng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Ức chế chọn lọc enzym men dihydrofolat reductase\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Alkyl hóa chuỗi xoắn kép DNA ngăn cản sao chép\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Chẹn kênh calci màng gây rối loạn điện giải bào\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Ký sinh trùng ăn hemoglobin giải phóng phân tử Heme (ferriprotoporphyrin IX) rất độc. Để tự vệ, ký sinh trùng trùng hợp heme thành tinh thể hemozoin trơ không độc. Chloroquin tích tụ ở không bào tiêu hóa (pH acid), gắn vào heme ngăn tạo hemozoin. Heme tự do tích tụ làm vỡ màng không bào và giết chết ký sinh trùng."
    ]
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
      "Thuốc Primaquin phosphat",
      "Thuốc Artesunat tiêm tĩnh mạch",
      "Thuốc Quinin dihydroclorid",
      "Thuốc Chloroquin phosphat"
    ],
    "correct": 3,
    "explanation": "Chloroquin có ái lực rất cao với sắc tố melanin ở biểu mô sắc tố võng mạc mắt. Dùng liều cao kéo dài (thường gặp khi điều trị lupus ban đỏ hoặc viêm khớp dạng thấp) gây lắng đọng giác mạc và thoái hóa hoàng điểm hình mắt bò (Bull's eye maculopathy) không hồi phục. Bắt buộc khám đáy mắt định kỳ.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Thuốc Primaquin phosphat\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thuốc Artesunat tiêm tĩnh mạch\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thuốc Quinin dihydroclorid\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Chloroquin có ái lực rất cao với sắc tố melanin ở biểu mô sắc tố võng mạc mắt. Dùng liều cao kéo dài (thường gặp khi điều trị lupus ban đỏ hoặc viêm khớp dạng thấp) gây lắng đọng giác mạc và thoái hóa hoàng điểm hình mắt bò (Bull's eye maculopathy) không hồi phục. Bắt buộc khám đáy mắt định kỳ."
    ]
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
      "Co cứng cơ, sốt cao ác tính, rối loạn nhịp thở Cheyne-Stokes",
      "Ho khan kịch phát, khó thở thì thở ra và phù phổi cấp",
      "Ù tai, giảm thính lực, chóng mặt và rối loạn thị giác",
      "Phù mắt cá chân đối xứng, tăng huyết áp kịch phát"
    ],
    "correct": 2,
    "explanation": "Hội chứng Cinchonism là biểu hiện nhiễm độc alkaloid Canh-ki-na (Quinin, Quinidin). Thuốc tác động lên ốc tai, tiền đình và thị thần kinh gây ù tai, điếc thoáng qua, hoa mắt chóng mặt, ám điểm thị giác kèm theo đau đầu dữ dội, buồn nôn; các triệu chứng này hồi phục khi ngừng hoặc giảm liều.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Co cứng cơ, sốt cao ác tính, rối loạn nhịp thở Cheyne-Stokes\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ho khan kịch phát, khó thở thì thở ra và phù phổi cấp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Hội chứng Cinchonism là biểu hiện nhiễm độc alkaloid Canh-ki-na (Quinin, Quinidin). Thuốc tác động lên ốc tai, tiền đình và thị thần kinh gây ù tai, điếc thoáng qua, hoa mắt chóng mặt, ám điểm thị giác kèm theo đau đầu dữ dội, buồn nôn; các triệu chứng này hồi phục khi ngừng hoặc giảm liều.",
      "Phương án này không đúng vì \"Phù mắt cá chân đối xứng, tăng huyết áp kịch phát\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Quinin kích thích trực tiếp tế bào beta tụy tiết insulin",
      "Quinin ức chế hoàn toàn con đường tân tạo glucose ở gan",
      "Ký sinh trùng tăng tốc tiêu thụ toàn bộ glucose huyết tương",
      "Quinin chẹn thụ thể làm tăng đào thải glucose qua thận"
    ],
    "correct": 0,
    "explanation": "Quinin đóng kênh K_ATP ở tế bào beta đảo tụy, kích thích trực tiếp sự bài tiết insulin quá mức. Ở phụ nữ mang thai hoặc bệnh nhân sốt rét ác tính, nguy cơ hạ đường huyết sâu rất cao. Bắt buộc phải pha Quinin truyền trong dung dịch Glucose 5% hoặc 10% và theo dõi đường huyết liên tục.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Quinin đóng kênh K_ATP ở tế bào beta đảo tụy, kích thích trực tiếp sự bài tiết insulin quá mức. Ở phụ nữ mang thai hoặc bệnh nhân sốt rét ác tính, nguy cơ hạ đường huyết sâu rất cao. Bắt buộc phải pha Quinin truyền trong dung dịch Glucose 5% hoặc 10% và theo dõi đường huyết liên tục.",
      "Phương án này không đúng vì \"Quinin ức chế hoàn toàn con đường tân tạo glucose ở gan\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ký sinh trùng tăng tốc tiêu thụ toàn bộ glucose huyết tương\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Quinin chẹn thụ thể làm tăng đào thải glucose qua thận\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Cầu nối nội peroxyd sinh các gốc tự do có độc tính",
      "Cấu trúc vòng lacton năm cạnh ức chế tổng hợp protein",
      "Nhân dị vòng quinolin chèn vào giữa các cặp base nitơ",
      "Chuỗi oligopeptid phân nhánh ức chế chọn lọc protease"
    ],
    "correct": 0,
    "explanation": "Artemisinin là sesquiterpene lactone có cầu nối nội peroxyd (endoperoxide bridge). Khi vào không bào tiêu hóa của ký sinh trùng, ion sắt Fe2+ của heme sẽ cắt cầu nối peroxyd này sinh ra các gốc tự do carbon (carbon-centered free radicals) có hoạt tính cao, alkyl hóa và phá hủy enzym PfATP6 và màng tế bào ký sinh trùng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Artemisinin là sesquiterpene lactone có cầu nối nội peroxyd (endoperoxide bridge). Khi vào không bào tiêu hóa của ký sinh trùng, ion sắt Fe2+ của heme sẽ cắt cầu nối peroxyd này sinh ra các gốc tự do carbon (carbon-centered free radicals) có hoạt tính cao, alkyl hóa và phá hủy enzym PfATP6 và màng tế bào ký sinh trùng.",
      "Phương án này không đúng vì \"Cấu trúc vòng lacton năm cạnh ức chế tổng hợp protein\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Nhân dị vòng quinolin chèn vào giữa các cặp base nitơ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Chuỗi oligopeptid phân nhánh ức chế chọn lọc protease\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
  },
  {
    "id": 114,
    "subject": "duocly2",
    "chapter": "KTGHP",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân suy tim đang dùng một glycosid tim trợ tim được chỉ định thêm một thuốc bài niệu tác động tại đoạn dày nhánh lên quai Henle liều cao nhưng không được kiểm tra điện giải đồ hay bù ion kèm theo. Hậu quả tương tác dược lực học nghiêm trọng nhất có nguy cơ xuất hiện là gì?",
    "options": [
      "Hạ natri máu làm tăng gắn glycosid vào thụ thể gây block nhĩ thất",
      "Hạ kali máu làm tăng gắn glycosid vào Na+/K+-ATPase gây loạn nhịp thất",
      "Tăng kali máu cạnh tranh gắn thụ thể làm mất hoàn toàn hiệu lực trợ tim",
      "Hạ calci máu ức chế sức co bóp cơ tim dẫn đến suy tim mất bù cấp tính"
    ],
    "correct": 0,
    "explanation": "Furosemid ức chế tái hấp thu Na+/K+/2Cl- gây mất K+ qua nước tiểu, dẫn đến hạ Kali máu. Do ion K+ và Digoxin cạnh tranh gắn vào vị trí tiểu đơn vị alpha của bơm Na+/K+-ATPase, hạ K+ máu làm Digoxin gắn chặt hơn vào thụ thể, gây ngộ độc loạn nhịp thất nặng (kể cả khi nồng độ Digoxin trong máu ở mức bình thường).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Furosemid ức chế tái hấp thu Na+/K+/2Cl- gây mất K+ qua nước tiểu, dẫn đến hạ Kali máu. Do ion K+ và Digoxin cạnh tranh gắn vào vị trí tiểu đơn vị alpha của bơm Na+/K+-ATPase, hạ K+ máu làm Digoxin gắn chặt hơn vào thụ thể, gây ngộ độc loạn nhịp thất nặng (kể cả khi nồng độ Digoxin trong máu ở mức bình thường).",
      "Phương án này không đúng vì \"Hạ kali máu làm tăng gắn glycosid vào Na+/K+-ATPase gây loạn nhịp thất\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tăng kali máu cạnh tranh gắn thụ thể làm mất hoàn toàn hiệu lực trợ tim\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Hạ calci máu ức chế sức co bóp cơ tim dẫn đến suy tim mất bù cấp tính\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Thuốc chẹn kênh calci nhóm dihydropyridin chọn lọc",
      "Thuốc chẹn thụ thể beta adrenergic không chọn lọc",
      "Thuốc ức chế men chuyển thụ thể angiotensin huyết",
      "Thuốc lợi tiểu quai ức chế tái hấp thu natri thận"
    ],
    "correct": 1,
    "explanation": "Propranolol chẹn không chọn lọc cả thụ thể beta-1 và beta-2. Thuốc đối kháng cạnh tranh trực tiếp tại thụ thể beta-2 trên cơ trơn phế quản, triệt tiêu hoàn toàn tác dụng giãn phế quản của Salbutamol, đồng thời gây co thắt phế quản cấp tính nặng đe dọa tính mạng người bệnh hen.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Thuốc chẹn kênh calci nhóm dihydropyridin chọn lọc\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Propranolol chẹn không chọn lọc cả thụ thể beta-1 và beta-2. Thuốc đối kháng cạnh tranh trực tiếp tại thụ thể beta-2 trên cơ trơn phế quản, triệt tiêu hoàn toàn tác dụng giãn phế quản của Salbutamol, đồng thời gây co thắt phế quản cấp tính nặng đe dọa tính mạng người bệnh hen.",
      "Phương án này không đúng vì \"Thuốc ức chế men chuyển thụ thể angiotensin huyết\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thuốc lợi tiểu quai ức chế tái hấp thu natri thận\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Rifampicin làm kiềm hóa nước tiểu tăng đào thải hormon",
      "Rifampicin cảm ứng CYP3A4 tăng thoái giáng hormon tránh thai",
      "Rifampicin gắn vào niêm mạc tử cung thúc đẩy phôi làm tổ",
      "Rifampicin đối kháng tại thụ thể estrogen vùng dưới đồi"
    ],
    "correct": 1,
    "explanation": "Rifampicin kích hoạt thụ thể nhân PXR, gây cảm ứng tăng tổng hợp enzym CYP3A4 và protein vận chuyển P-gp tại gan và ruột. Nồng độ enzym tăng cao làm tốc độ chuyển hóa Ethinylestradiol tăng vọt, nồng độ hormon máu giảm sâu dẫn đến mất tác dụng ức chế rụng trứng và vỡ kế hoạch có thai.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Rifampicin làm kiềm hóa nước tiểu tăng đào thải hormon\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Rifampicin kích hoạt thụ thể nhân PXR, gây cảm ứng tăng tổng hợp enzym CYP3A4 và protein vận chuyển P-gp tại gan và ruột. Nồng độ enzym tăng cao làm tốc độ chuyển hóa Ethinylestradiol tăng vọt, nồng độ hormon máu giảm sâu dẫn đến mất tác dụng ức chế rụng trứng và vỡ kế hoạch có thai.",
      "Phương án này không đúng vì \"Rifampicin gắn vào niêm mạc tử cung thúc đẩy phôi làm tổ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Rifampicin đối kháng tại thụ thể estrogen vùng dưới đồi\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Nước bưởi chứa acid hữu cơ gây toan chuyển hóa nặng",
      "Nước bưởi kích thích acid dạ dày làm phân hủy hoạt chất",
      "Nước bưởi kích thích thụ thể cholinergic gây giãn mạch",
      "Furanocoumarin trong bưởi ức chế CYP3A4 làm tăng nồng độ thuốc"
    ],
    "correct": 3,
    "explanation": "Furanocoumarin trong bưởi chùm bất hoạt không hồi phục enzym CYP3A4 tại niêm mạc ruột non kéo dài 24-72 giờ (cần thời gian để ruột tổng hợp enzym mới). Các thuốc chuyển hóa bước đầu qua ruột mạnh (Simvastatin, Lovastatin, Felodipin, Amlodipin) sẽ ùa vào máu với nồng độ tăng gấp 3-10 lần, gây tiêu cơ vân hoặc trụy mạch.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Nước bưởi chứa acid hữu cơ gây toan chuyển hóa nặng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Nước bưởi kích thích acid dạ dày làm phân hủy hoạt chất\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Nước bưởi kích thích thụ thể cholinergic gây giãn mạch\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Furanocoumarin trong bưởi chùm bất hoạt không hồi phục enzym CYP3A4 tại niêm mạc ruột non kéo dài 24-72 giờ (cần thời gian để ruột tổng hợp enzym mới). Các thuốc chuyển hóa bước đầu qua ruột mạnh (Simvastatin, Lovastatin, Felodipin, Amlodipin) sẽ ùa vào máu với nồng độ tăng gấp 3-10 lần, gây tiêu cơ vân hoặc trụy mạch."
    ]
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
      "Protein Cyclooxygenase-2 xúc tác tổng hợp prostaglandin",
      "Protein Calmodulin tham gia hoạt hóa các kênh vận chuyển ion",
      "Protein Lipocortin-1 có khả năng ức chế Phospholipase A2",
      "Protein P-glycoprotein đóng vai trò bơm tống các chất độc"
    ],
    "correct": 2,
    "explanation": "Glucocorticoid gắn vào thụ thể GR nội bào, đi vào nhân làm tăng phiên mã gen Lipocortin-1 (Annexin A1). Lipocortin-1 ức chế enzym Phospholipase A2, ngăn chặn sự giải phóng Acid arachidonic từ màng tế bào, từ đó chặn đứng toàn bộ con đường sinh tổng hợp cả Prostaglandin lẫn Leukotriene.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Protein Cyclooxygenase-2 xúc tác tổng hợp prostaglandin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Protein Calmodulin tham gia hoạt hóa các kênh vận chuyển ion\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Glucocorticoid gắn vào thụ thể GR nội bào, đi vào nhân làm tăng phiên mã gen Lipocortin-1 (Annexin A1). Lipocortin-1 ức chế enzym Phospholipase A2, ngăn chặn sự giải phóng Acid arachidonic từ màng tế bào, từ đó chặn đứng toàn bộ con đường sinh tổng hợp cả Prostaglandin lẫn Leukotriene.",
      "Phương án này không đúng vì \"Protein P-glycoprotein đóng vai trò bơm tống các chất độc\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Uống một liều duy nhất lúc 7-8 giờ sáng cùng bữa ăn hoặc cách nhật",
      "Uống một liều duy nhất vào buổi tối trước khi đi ngủ",
      "Chia đều tổng liều thành bốn lần uống cách nhau mỗi 6 giờ",
      "Uống chia hai lần vào buổi trưa và chiều tối ngay sau ăn"
    ],
    "correct": 0,
    "explanation": "Trục HPA tiết Cortisol theo nhịp sinh học tự nhiên, nồng độ đạt đỉnh cao nhất vào khoảng 8 giờ sáng và thấp nhất vào nửa đêm. Uống thuốc vào 8 giờ sáng trùng với đỉnh sinh lý của cơ thể, do đó ít gây ức chế ngược trục HPA nhất, giảm thiểu nguy cơ teo vỏ thượng thận.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Trục HPA tiết Cortisol theo nhịp sinh học tự nhiên, nồng độ đạt đỉnh cao nhất vào khoảng 8 giờ sáng và thấp nhất vào nửa đêm. Uống thuốc vào 8 giờ sáng trùng với đỉnh sinh lý của cơ thể, do đó ít gây ức chế ngược trục HPA nhất, giảm thiểu nguy cơ teo vỏ thượng thận.",
      "Phương án này không đúng vì \"Uống một liều duy nhất vào buổi tối trước khi đi ngủ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Chia đều tổng liều thành bốn lần uống cách nhau mỗi 6 giờ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Uống chia hai lần vào buổi trưa và chiều tối ngay sau ăn\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Phòng ngừa hiện tượng tái phát đợt cấp tính loét dạ dày",
      "Tránh nguy cơ tích tụ lipid mô mỡ gây hội chứng Cushing",
      "Phòng ngừa nguy cơ suy vỏ thượng thận cấp tính nặng",
      "Ngăn ngừa tình trạng tăng hủy xương gây gãy xương tự phát"
    ],
    "correct": 2,
    "explanation": "Dùng corticoid kéo dài ức chế bài tiết CRH và ACTH làm vỏ thượng thận teo dần. Khi dừng thuốc đột ngột, tuyến thượng thận chưa kịp phục hồi khả năng bài tiết cortisol sinh lý, đẩy bệnh nhân vào cơn suy thượng thận cấp tính (tụt huyết áp nặng, sốc, trụy mạch, rối loạn điện giải và tử vong).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Phòng ngừa hiện tượng tái phát đợt cấp tính loét dạ dày\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tránh nguy cơ tích tụ lipid mô mỡ gây hội chứng Cushing\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Dùng corticoid kéo dài ức chế bài tiết CRH và ACTH làm vỏ thượng thận teo dần. Khi dừng thuốc đột ngột, tuyến thượng thận chưa kịp phục hồi khả năng bài tiết cortisol sinh lý, đẩy bệnh nhân vào cơn suy thượng thận cấp tính (tụt huyết áp nặng, sốc, trụy mạch, rối loạn điện giải và tử vong).",
      "Phương án này không đúng vì \"Ngăn ngừa tình trạng tăng hủy xương gây gãy xương tự phát\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Dẫn xuất tổng hợp Prednisolon",
      "Dẫn xuất Methylprednisolon axetat",
      "Dẫn xuất Triamcinolon acetonid",
      "Dẫn xuất tổng hợp Dexamethason"
    ],
    "correct": 3,
    "explanation": "Dexamethason và Betamethason là các glucocorticoid fluor hóa thế hệ dài (T1/2 sinh học > 36-54 giờ), có hoạt tính kháng viêm mạnh gấp 25-30 lần hydrocortison, hoàn toàn không giữ Na+ và nước (tác dụng mineralocorticoid = 0), chuyên dùng chống phù não và cấp cứu viêm nặng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Dẫn xuất tổng hợp Prednisolon\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Dẫn xuất Methylprednisolon axetat\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Dẫn xuất Triamcinolon acetonid\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Dexamethason và Betamethason là các glucocorticoid fluor hóa thế hệ dài (T1/2 sinh học > 36-54 giờ), có hoạt tính kháng viêm mạnh gấp 25-30 lần hydrocortison, hoàn toàn không giữ Na+ và nước (tác dụng mineralocorticoid = 0), chuyên dùng chống phù não và cấp cứu viêm nặng."
    ]
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
      "Kích thích tuyến giáp tăng tiết calcitonin ức chế khoáng hóa",
      "Làm giảm bài xuất ion phosphat gây lắng đọng muối canxi",
      "Ức chế tạo cốt bào, giảm hấp thu calci, kích thích hủy cốt bào",
      "Gây co thắt và tắc nghẽn mạng lưới vi mạch nuôi màng xương"
    ],
    "correct": 2,
    "explanation": "Corticoid ức chế trực tiếp tạo cốt bào, thúc đẩy hủy cốt bào, ức chế hấp thu Ca2+ ở ruột do đối kháng vitamin D, tăng thải Ca2+ qua thận dẫn tới tụt calci máu gây kích hoạt PTH tăng tiêu xương, làm giảm mật độ xương nhanh chóng và gây hoại tử vô mạch chỏm xương đùi.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Kích thích tuyến giáp tăng tiết calcitonin ức chế khoáng hóa\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Làm giảm bài xuất ion phosphat gây lắng đọng muối canxi\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Corticoid ức chế trực tiếp tạo cốt bào, thúc đẩy hủy cốt bào, ức chế hấp thu Ca2+ ở ruột do đối kháng vitamin D, tăng thải Ca2+ qua thận dẫn tới tụt calci máu gây kích hoạt PTH tăng tiêu xương, làm giảm mật độ xương nhanh chóng và gây hoại tử vô mạch chỏm xương đùi.",
      "Phương án này không đúng vì \"Gây co thắt và tắc nghẽn mạng lưới vi mạch nuôi màng xương\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Gây hiệu ứng Wolff-Chaikoff ức chế gắn iod và phóng thích T3, T4",
      "Phá hủy cấu trúc màng tế bào nang giáp qua gốc tự do oxy hóa",
      "Kích thích tuyến yên giảm bài tiết TSH qua điều hòa ngược",
      "Ức chế enzym deiodinase ngoại vi ngăn cản chuyển T4 thành T3"
    ],
    "correct": 0,
    "explanation": "Dung dịch Lugol (5% I2 + 10% KI) cung cấp lượng iod cao cấp tính gây hiệu ứng Wolff-Chaikoff: ức chế enzym TPO ngăn gắn iod vào tyrosin và ức chế quá trình thủy phân giải phóng T3/T4 từ thyroglobulin vào máu, làm giảm nhanh nồng độ hormon giáp trong vòng 24-48 giờ và làm săn chắc nhu mô giáp.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Dung dịch Lugol (5% I2 + 10% KI) cung cấp lượng iod cao cấp tính gây hiệu ứng Wolff-Chaikoff: ức chế enzym TPO ngăn gắn iod vào tyrosin và ức chế quá trình thủy phân giải phóng T3/T4 từ thyroglobulin vào máu, làm giảm nhanh nồng độ hormon giáp trong vòng 24-48 giờ và làm săn chắc nhu mô giáp.",
      "Phương án này không đúng vì \"Phá hủy cấu trúc màng tế bào nang giáp qua gốc tự do oxy hóa\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích thích tuyến yên giảm bài tiết TSH qua điều hòa ngược\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ức chế enzym deiodinase ngoại vi ngăn cản chuyển T4 thành T3\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Ưu tiên sử dụng hóa dược Thiamazol",
      "Sử dụng đơn độc dung dịch iod Lugol",
      "Chống chỉ định dùng nhóm thionamid",
      "Ưu tiên sử dụng Propylthiouracil"
    ],
    "correct": 3,
    "explanation": "Thiamazol trong 3 tháng đầu có nguy cơ gây dị tật phôi thai (bất sản da đầu bẩm sinh Aplasia cutis congenita, teo thực quản). PTU liên kết protein huyết tương cao hơn (80%) nên ít qua nhau thai hơn, được ưu tiên trong quý 1 thai kỳ. Từ quý 2 chuyển sang Thiamazol vì PTU có độc tính hoại tử gan cấp.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Ưu tiên sử dụng hóa dược Thiamazol\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Sử dụng đơn độc dung dịch iod Lugol\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Chống chỉ định dùng nhóm thionamid\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Thiamazol trong 3 tháng đầu có nguy cơ gây dị tật phôi thai (bất sản da đầu bẩm sinh Aplasia cutis congenita, teo thực quản). PTU liên kết protein huyết tương cao hơn (80%) nên ít qua nhau thai hơn, được ưu tiên trong quý 1 thai kỳ. Từ quý 2 chuyển sang Thiamazol vì PTU có độc tính hoại tử gan cấp."
    ]
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
      "Mất bạch cầu hạt kèm nhiễm trùng nặng",
      "Suy thận cấp tính lắng đọng tinh thể urat",
      "Xơ gan cổ trướng hoại tử tế bào gan cấp",
      "Xuất huyết tiêu hóa vỡ tĩnh mạch thực quản"
    ],
    "correct": 0,
    "explanation": "Mất bạch cầu hạt (Agranulocytosis) xảy ra ở 0.1-0.5% bệnh nhân dùng thuốc kháng giáp, thường xuất hiện trong 3 tháng đầu. Bệnh nhân có biểu hiện sốt cao đột ngột, đau rát họng, viêm loét miệng hoại tử. Bắt buộc phải ngừng thuốc ngay và cách ly điều trị.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Mất bạch cầu hạt (Agranulocytosis) xảy ra ở 0.1-0.5% bệnh nhân dùng thuốc kháng giáp, thường xuất hiện trong 3 tháng đầu. Bệnh nhân có biểu hiện sốt cao đột ngột, đau rát họng, viêm loét miệng hoại tử. Bắt buộc phải ngừng thuốc ngay và cách ly điều trị.",
      "Phương án này không đúng vì \"Suy thận cấp tính lắng đọng tinh thể urat\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Xơ gan cổ trướng hoại tử tế bào gan cấp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Xuất huyết tiêu hóa vỡ tĩnh mạch thực quản\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Uống cùng bữa ăn trưa nhiều dầu mỡ để tăng hấp thu qua mật",
      "Uống ngay sau khi ăn no bữa tối trước thời điểm đi ngủ",
      "Uống buổi sáng khi đói trước ăn 30-60 phút với nước lọc",
      "Uống chung với sữa tươi hoặc chế phẩm bổ sung canxi và sắt"
    ],
    "correct": 2,
    "explanation": "Thức ăn, sữa, cà phê, calci và sắt làm giảm mạnh sự hấp thu Levothyroxin qua niêm mạc ruột. Thuốc cần được uống vào buổi sáng sớm khi bụng đói hoàn toàn, trước khi ăn sáng ít nhất 30-60 phút chỉ với một cốc nước lọc.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Uống cùng bữa ăn trưa nhiều dầu mỡ để tăng hấp thu qua mật\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Uống ngay sau khi ăn no bữa tối trước thời điểm đi ngủ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Thức ăn, sữa, cà phê, calci và sắt làm giảm mạnh sự hấp thu Levothyroxin qua niêm mạc ruột. Thuốc cần được uống vào buổi sáng sớm khi bụng đói hoàn toàn, trước khi ăn sáng ít nhất 30-60 phút chỉ với một cốc nước lọc.",
      "Phương án này không đúng vì \"Uống chung với sữa tươi hoặc chế phẩm bổ sung canxi và sắt\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Kích thích thụ thể SUR1 đảo tụy tiết insulin",
      "Kích hoạt AMPK ức chế tân tạo glucose tại gan",
      "Ức chế men alpha-glucosidase ở niêm mạc ruột",
      "Ức chế đồng vận chuyển natri-glucose tại thận"
    ],
    "correct": 1,
    "explanation": "Metformin đi vào tế bào gan kích hoạt enzym AMP-activated protein kinase (AMPK), dẫn tới ức chế các enzym chủ chốt của quá trình tân tạo glucose (PEPCK và G6Pase), làm giảm sản xuất glucose từ gan tới 75%; đồng thời tăng thu nhận glucose ở cơ vân và không kích thích tiết insulin nên không gây hạ đường huyết.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Kích thích thụ thể SUR1 đảo tụy tiết insulin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Metformin đi vào tế bào gan kích hoạt enzym AMP-activated protein kinase (AMPK), dẫn tới ức chế các enzym chủ chốt của quá trình tân tạo glucose (PEPCK và G6Pase), làm giảm sản xuất glucose từ gan tới 75%; đồng thời tăng thu nhận glucose ở cơ vân và không kích thích tiết insulin nên không gây hạ đường huyết.",
      "Phương án này không đúng vì \"Ức chế men alpha-glucosidase ở niêm mạc ruột\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ức chế đồng vận chuyển natri-glucose tại thận\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Hoại tử tế bào gan cấp tính",
      "Hội chứng tiêu cơ vân cấp",
      "Nhiễm toan acid lactic máu",
      "Suy tủy xương giảm ba dòng"
    ],
    "correct": 2,
    "explanation": "Metformin ức chế phức hợp 1 của chuỗi hô hấp tế bào và ức chế enzym pyruvate carboxylase, làm cản trở chuyển hóa acid lactic thành glucose. Khi thuốc bị tích lũy (như ở người suy thận), acid lactic ứ đọng trong máu dẫn tới nhiễm toan acid lactic máu nặng với tỷ lệ tử vong cao.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Hoại tử tế bào gan cấp tính\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Hội chứng tiêu cơ vân cấp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Metformin ức chế phức hợp 1 của chuỗi hô hấp tế bào và ức chế enzym pyruvate carboxylase, làm cản trở chuyển hóa acid lactic thành glucose. Khi thuốc bị tích lũy (như ở người suy thận), acid lactic ứ đọng trong máu dẫn tới nhiễm toan acid lactic máu nặng với tỷ lệ tử vong cao.",
      "Phương án này không đúng vì \"Suy tủy xương giảm ba dòng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Tạm ngừng Metformin trước thủ thuật và dùng lại sau 48 giờ",
      "Tăng gấp đôi liều Metformin kết hợp truyền dung dịch điện giải",
      "Dùng đồng thời thuốc lợi tiểu quai liều cao trước thủ thuật",
      "Bổ sung dung dịch kiềm hóa natri bicarbonat liên tục"
    ],
    "correct": 0,
    "explanation": "Thuốc cản quang chứa iod có thể gây suy thận cấp thoáng qua do co mạch và hoại tử ống thận. Nếu bệnh nhân tiếp tục dùng Metformin, suy thận sẽ làm Metformin không đào thải được, tích lũy gây nhiễm toan lactic tử vong. Bắt buộc ngưng thuốc trước 48h và đánh giá lại eGFR sau 48h.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Thuốc cản quang chứa iod có thể gây suy thận cấp thoáng qua do co mạch và hoại tử ống thận. Nếu bệnh nhân tiếp tục dùng Metformin, suy thận sẽ làm Metformin không đào thải được, tích lũy gây nhiễm toan lactic tử vong. Bắt buộc ngưng thuốc trước 48h và đánh giá lại eGFR sau 48h.",
      "Phương án này không đúng vì \"Tăng gấp đôi liều Metformin kết hợp truyền dung dịch điện giải\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Dùng đồng thời thuốc lợi tiểu quai liều cao trước thủ thuật\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Bổ sung dung dịch kiềm hóa natri bicarbonat liên tục\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Mở kênh kali phụ thuộc vào calci",
      "Chẹn kênh natri phụ thuộc điện thế",
      "Mở kênh clo qua trung gian protein",
      "Đóng kênh kali nhạy cảm với ATP"
    ],
    "correct": 3,
    "explanation": "Sulfonylurea gắn vào tiểu đơn vị SUR1 của kênh K_ATP, làm đóng kênh này. Dòng K+ không thoát ra ngoài được làm màng tế bào beta khử cực. Khử cực làm mở kênh Calci typ L, Ca2+ ngoại bào tràn vào bào tương kích hoạt hòa màng các bọc dự trữ insulin tống insulin vào máu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Mở kênh kali phụ thuộc vào calci\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Chẹn kênh natri phụ thuộc điện thế\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Mở kênh clo qua trung gian protein\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Sulfonylurea gắn vào tiểu đơn vị SUR1 của kênh K_ATP, làm đóng kênh này. Dòng K+ không thoát ra ngoài được làm màng tế bào beta khử cực. Khử cực làm mở kênh Calci typ L, Ca2+ ngoại bào tràn vào bào tương kích hoạt hòa màng các bọc dự trữ insulin tống insulin vào máu."
    ]
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
      "Gắn không hồi phục vào thụ thể glucagon tại tế bào gan",
      "Có các chất chuyển hóa còn hoạt tính đào thải qua thận",
      "Ức chế chọn lọc trung tâm thèm ăn tại vùng dưới đồi",
      "Làm biến đổi tế bào mỡ thành tế bào tiết insulin ngoại lai"
    ],
    "correct": 1,
    "explanation": "Glibenclamid có thời gian gắn thụ thể rất dài và chuyển hóa thành các chất chuyển hóa (4-trans-hydroxy và 3-cis-hydroxy glibenclamide) vẫn có hoạt tính hạ đường huyết bài tiết qua thận. Ở người cao tuổi suy giảm lọc cầu thận, thuốc tích lũy gây hạ đường huyết sâu, hôn mê kéo dài nhiều ngày.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Gắn không hồi phục vào thụ thể glucagon tại tế bào gan\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Glibenclamid có thời gian gắn thụ thể rất dài và chuyển hóa thành các chất chuyển hóa (4-trans-hydroxy và 3-cis-hydroxy glibenclamide) vẫn có hoạt tính hạ đường huyết bài tiết qua thận. Ở người cao tuổi suy giảm lọc cầu thận, thuốc tích lũy gây hạ đường huyết sâu, hôn mê kéo dài nhiều ngày.",
      "Phương án này không đúng vì \"Ức chế chọn lọc trung tâm thèm ăn tại vùng dưới đồi\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Làm biến đổi tế bào mỡ thành tế bào tiết insulin ngoại lai\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Tăng áp lực lọc cầu thận kết hợp ức chế tái hấp thu nước",
      "Kích hoạt thoái giáng đường tự do thành các thể ceton đào thải",
      "Ức chế enzym phosphorylase tại biểu mô ống lượn xa",
      "Ức chế protein đồng vận chuyển Na+-glucose SGLT-2 ở ống lượn gần"
    ],
    "correct": 3,
    "explanation": "Khoảng 90% lượng glucose trong dịch lọc cầu thận được tái hấp thu ở đoạn S1 ống lượn gần nhờ chất vận chuyển SGLT-2. Thuốc ức chế SGLT-2 ngăn cản quá trình này, làm thải trừ khoảng 70-80g glucose ra nước tiểu mỗi ngày (tương đương 300 kcal), giúp hạ đường huyết và giảm cân.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Tăng áp lực lọc cầu thận kết hợp ức chế tái hấp thu nước\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích hoạt thoái giáng đường tự do thành các thể ceton đào thải\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ức chế enzym phosphorylase tại biểu mô ống lượn xa\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Khoảng 90% lượng glucose trong dịch lọc cầu thận được tái hấp thu ở đoạn S1 ống lượn gần nhờ chất vận chuyển SGLT-2. Thuốc ức chế SGLT-2 ngăn cản quá trình này, làm thải trừ khoảng 70-80g glucose ra nước tiểu mỗi ngày (tương đương 300 kcal), giúp hạ đường huyết và giảm cân."
    ]
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
      "Nhiễm toan ceton với mức đường huyết bình thường hoặc tăng nhẹ",
      "Nhiễm toan acid lactic nặng kèm hoại tử nhu mô gan cấp",
      "Nhiễm toan chuyển hóa tăng clo máu kết hợp suy hô hấp cấp",
      "Hội chứng tăng áp lực thẩm thấu máu không toan ceton"
    ],
    "correct": 0,
    "explanation": "Do làm mất đường qua nước tiểu, nồng độ glucose và insulin máu giảm nhẹ trong khi glucagon tăng, kích hoạt ly giải lipid tạo thể ceton (acetoacetate, beta-hydroxybutyrate). Bệnh nhân bị nhiễm toan ceton nặng nhưng mức đường huyết vẫn dưới 250 mg/dL (Euglycemic DKA), rất dễ bị bỏ sót.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Do làm mất đường qua nước tiểu, nồng độ glucose và insulin máu giảm nhẹ trong khi glucagon tăng, kích hoạt ly giải lipid tạo thể ceton (acetoacetate, beta-hydroxybutyrate). Bệnh nhân bị nhiễm toan ceton nặng nhưng mức đường huyết vẫn dưới 250 mg/dL (Euglycemic DKA), rất dễ bị bỏ sót.",
      "Phương án này không đúng vì \"Nhiễm toan acid lactic nặng kèm hoại tử nhu mô gan cấp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Nhiễm toan chuyển hóa tăng clo máu kết hợp suy hô hấp cấp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Hội chứng tăng áp lực thẩm thấu máu không toan ceton\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Suy giảm cấp tính chức năng lọc cầu thận kèm viêm mô kẽ",
      "Loét trợt niêm mạc dạ dày tá tràng gây xuất huyết",
      "Nhiễm nấm đường sinh dục và viêm nhiễm khuẩn đường tiết niệu",
      "Hoại tử tế bào tụy cấp tính gây rối loạn tiêu hóa"
    ],
    "correct": 2,
    "explanation": "Đào thải lượng lớn glucose vào nước tiểu tạo môi trường giàu dinh dưỡng thuận lợi cho nấm men (đặc biệt Candida albicans) và vi khuẩn phát triển, dẫn tới tỷ lệ cao bị viêm âm hộ - âm đạo ở nữ và viêm quy đầu ở nam, cùng nguy cơ nhiễm trùng tiểu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Suy giảm cấp tính chức năng lọc cầu thận kèm viêm mô kẽ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Loét trợt niêm mạc dạ dày tá tràng gây xuất huyết\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Đào thải lượng lớn glucose vào nước tiểu tạo môi trường giàu dinh dưỡng thuận lợi cho nấm men (đặc biệt Candida albicans) và vi khuẩn phát triển, dẫn tới tỷ lệ cao bị viêm âm hộ - âm đạo ở nữ và viêm quy đầu ở nam, cùng nguy cơ nhiễm trùng tiểu.",
      "Phương án này không đúng vì \"Hoại tử tế bào tụy cấp tính gây rối loạn tiêu hóa\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Gắn trực tiếp lên thụ thể tiểu cầu ức chế kết tập",
      "Ức chế chọn lọc enzym tổng hợp prothrombin tại gan",
      "Gắn antithrombin III tăng tốc bất hoạt thrombin và yếu tố Xa",
      "Kích hoạt enzym tiêu sợi huyết plasmin phân rã fibrin"
    ],
    "correct": 2,
    "explanation": "Heparin chứa chuỗi pentasaccharid đặc hiệu gắn vào Antithrombin III (AT-III), làm biến đổi cấu hình của AT-III tăng ái lực với các protease đông máu, tăng tốc độ bất hoạt Thrombin (IIa) và Yếu tố Xa lên khoảng 1000 lần. UFH cần chuỗi polysaccharide dài ít nhất 18 đơn vị đường để bắt cầu ức chế đồng thời cả IIa và Xa.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Gắn trực tiếp lên thụ thể tiểu cầu ức chế kết tập\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ức chế chọn lọc enzym tổng hợp prothrombin tại gan\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Heparin chứa chuỗi pentasaccharid đặc hiệu gắn vào Antithrombin III (AT-III), làm biến đổi cấu hình của AT-III tăng ái lực với các protease đông máu, tăng tốc độ bất hoạt Thrombin (IIa) và Yếu tố Xa lên khoảng 1000 lần. UFH cần chuỗi polysaccharide dài ít nhất 18 đơn vị đường để bắt cầu ức chế đồng thời cả IIa và Xa.",
      "Phương án này không đúng vì \"Kích hoạt enzym tiêu sợi huyết plasmin phân rã fibrin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Chuỗi đường ngắn ức chế ưu thế yếu tố Xa hơn thrombin",
      "Chuỗi đường phân tử thấp chỉ ức chế trực tiếp thrombin tự do",
      "Ức chế quá trình tổng hợp vitamin K của vi khuẩn đường ruột",
      "Kích hoạt trực tiếp phản ứng tiêu sợi huyết nội sinh"
    ],
    "correct": 0,
    "explanation": "Do có chuỗi polysaccharide ngắn hơn (< 18 đơn vị đường), phần lớn phân tử LMWH không đủ độ dài để tạo cầu nối kẹp chặt đồng thời cả AT-III và Thrombin (IIa). Do đó, LMWH chủ yếu bất hoạt Yếu tố Xa (tỷ lệ ức chế Xa/IIa là 3:1 hoặc 4:1 đối với enoxaparin), trong khi UFH ức chế ngang nhau cả IIa và Xa (tỷ lệ 1:1).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Do có chuỗi polysaccharide ngắn hơn (< 18 đơn vị đường), phần lớn phân tử LMWH không đủ độ dài để tạo cầu nối kẹp chặt đồng thời cả AT-III và Thrombin (IIa). Do đó, LMWH chủ yếu bất hoạt Yếu tố Xa (tỷ lệ ức chế Xa/IIa là 3:1 hoặc 4:1 đối với enoxaparin), trong khi UFH ức chế ngang nhau cả IIa và Xa (tỷ lệ 1:1).",
      "Phương án này không đúng vì \"Chuỗi đường phân tử thấp chỉ ức chế trực tiếp thrombin tự do\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ức chế quá trình tổng hợp vitamin K của vi khuẩn đường ruột\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích hoạt trực tiếp phản ứng tiêu sợi huyết nội sinh\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Chỉ số bình thường hóa quốc tế INR đường ngoại sinh",
      "Thời gian thromboplastin từng phần hoạt hóa aPTT",
      "Thời gian prothrombin PT đánh giá phức hợp prothrombin",
      "Thời gian máu chảy xác định theo phương pháp Duke"
    ],
    "correct": 1,
    "explanation": "UFH ức chế con đường đông máu nội chung và nội sinh, do đó được theo dõi bằng xét nghiệm thời gian thromboplastin một phần hoạt hóa (aPTT / TCA). Nồng độ điều trị đạt yêu cầu khi aPTT kéo dài gấp 1.5 - 2.5 lần so với mẫu chứng (chứng khoảng 30-35s, đích điều trị 50-75s).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Chỉ số bình thường hóa quốc tế INR đường ngoại sinh\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "UFH ức chế con đường đông máu nội chung và nội sinh, do đó được theo dõi bằng xét nghiệm thời gian thromboplastin một phần hoạt hóa (aPTT / TCA). Nồng độ điều trị đạt yêu cầu khi aPTT kéo dài gấp 1.5 - 2.5 lần so với mẫu chứng (chứng khoảng 30-35s, đích điều trị 50-75s).",
      "Phương án này không đúng vì \"Thời gian prothrombin PT đánh giá phức hợp prothrombin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thời gian máu chảy xác định theo phương pháp Duke\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Hạ tiểu cầu nặng gây xuất huyết nhưng đông máu bình thường",
      "Suy tủy xương ức chế dòng hồng cầu gây thiếu máu nghiêm trọng",
      "Kích hoạt bổ thể gây tan máu nội mạch cấp và vàng da tắc mật",
      "Giảm số lượng tiểu cầu nhưng gây biến chứng huyết khối tắc mạch"
    ],
    "correct": 3,
    "explanation": "HIT typ II là phản ứng tự miễn dịch: kháng thể IgG liên kết với phức hợp Heparin-PF4 trên màng tiểu cầu, kích hoạt thụ thể Fc-gamma-RIIa gây kết tập tiểu cầu toàn thân. Số lượng tiểu cầu sụt giảm (> 50%), nhưng nghịch lý lâm sàng là gây bùng phát các cục huyết khối tắc động mạch và tĩnh mạch nghiêm trọng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Hạ tiểu cầu nặng gây xuất huyết nhưng đông máu bình thường\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Suy tủy xương ức chế dòng hồng cầu gây thiếu máu nghiêm trọng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích hoạt bổ thể gây tan máu nội mạch cấp và vàng da tắc mật\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "HIT typ II là phản ứng tự miễn dịch: kháng thể IgG liên kết với phức hợp Heparin-PF4 trên màng tiểu cầu, kích hoạt thụ thể Fc-gamma-RIIa gây kết tập tiểu cầu toàn thân. Số lượng tiểu cầu sụt giảm (> 50%), nhưng nghịch lý lâm sàng là gây bùng phát các cục huyết khối tắc động mạch và tĩnh mạch nghiêm trọng."
    ]
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
      "Phytomenadion đường tiêm tĩnh mạch",
      "Acid tranexamic truyền tĩnh mạch chậm",
      "Protamin sulfat tiêm tĩnh mạch chậm",
      "Huyết tương tươi đông lạnh truyền nhanh"
    ],
    "correct": 2,
    "explanation": "Protamin sulfat là một protein base mạnh chiết xuất từ tinh trùng cá hồi, mang điện tích dương dày đặc. Khi tiêm tĩnh mạch, nó kết hợp ion tĩnh điện cực mạnh với phân tử Heparin (mang điện tích âm cao) tạo thành phức hợp muối bền vững không còn hoạt tính chống đông.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Phytomenadion đường tiêm tĩnh mạch\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Acid tranexamic truyền tĩnh mạch chậm\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Protamin sulfat là một protein base mạnh chiết xuất từ tinh trùng cá hồi, mang điện tích dương dày đặc. Khi tiêm tĩnh mạch, nó kết hợp ion tĩnh điện cực mạnh với phân tử Heparin (mang điện tích âm cao) tạo thành phức hợp muối bền vững không còn hoạt tính chống đông.",
      "Phương án này không đúng vì \"Huyết tương tươi đông lạnh truyền nhanh\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Ức chế enzym vitamin K epoxide reductase làm giảm dạng khử",
      "Ức chế trực tiếp vị trí xúc tác của enzym thrombin tự do",
      "Ức chế enzym cyclooxygenase tại tế bào nội mô mạch máu",
      "Ức chế các isoenzym cytochrom P450 ở vi thể tế bào gan"
    ],
    "correct": 0,
    "explanation": "Warfarin ức chế enzym VKORC1 tại gan, ngăn cản tái tạo vitamin K hydroquinone (dạng khử). Thiếu vitamin K khử làm bất hoạt enzym gamma-glutamyl carboxylase, khiến các yếu tố đông máu II, VII, IX, X và protein C, S không được gắn thêm nhóm carboxyl ở gốc acid glutamic, mất khả năng gắn Ca2+ và mất hoạt tính đông máu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Warfarin ức chế enzym VKORC1 tại gan, ngăn cản tái tạo vitamin K hydroquinone (dạng khử). Thiếu vitamin K khử làm bất hoạt enzym gamma-glutamyl carboxylase, khiến các yếu tố đông máu II, VII, IX, X và protein C, S không được gắn thêm nhóm carboxyl ở gốc acid glutamic, mất khả năng gắn Ca2+ và mất hoạt tính đông máu.",
      "Phương án này không đúng vì \"Ức chế trực tiếp vị trí xúc tác của enzym thrombin tự do\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ức chế enzym cyclooxygenase tại tế bào nội mô mạch máu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ức chế các isoenzym cytochrom P450 ở vi thể tế bào gan\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Thuốc gây co thắt kéo dài các tiểu động mạch nuôi dưỡng mô",
      "Protein C giảm nhanh hơn các yếu tố đông máu gây tăng đông tạm thời",
      "Phản ứng quá mẫn giải phóng histamin phá hủy mao mạch dưới da",
      "Lắng đọng phức hợp miễn dịch gây viêm tắc mạch hoại tử mỡ"
    ],
    "correct": 1,
    "explanation": "Protein C là chất chống đông tự nhiên phụ thuộc vitamin K có bán thải ngắn nhất (~8h), trong khi yếu tố II bán thải dài (60h). Trong 24-48h đầu, nồng độ Protein C tụt trước trong khi các yếu tố đông máu II, IX, X vẫn còn cao, gây mất cân bằng tạm thời đẩy cơ thể vào trạng thái tăng đông gây tắc vi mạch hoại tử da.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Thuốc gây co thắt kéo dài các tiểu động mạch nuôi dưỡng mô\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Protein C là chất chống đông tự nhiên phụ thuộc vitamin K có bán thải ngắn nhất (~8h), trong khi yếu tố II bán thải dài (60h). Trong 24-48h đầu, nồng độ Protein C tụt trước trong khi các yếu tố đông máu II, IX, X vẫn còn cao, gây mất cân bằng tạm thời đẩy cơ thể vào trạng thái tăng đông gây tắc vi mạch hoại tử da.",
      "Phương án này không đúng vì \"Phản ứng quá mẫn giải phóng histamin phá hủy mao mạch dưới da\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Lắng đọng phức hợp miễn dịch gây viêm tắc mạch hoại tử mỡ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Thời gian đông máu toàn phần Lee White",
      "Số lượng tiểu cầu và nồng độ fibrinogen",
      "Thời gian thromboplastin từng phần aPTT",
      "Chỉ số bình thường hóa quốc tế INR"
    ],
    "correct": 3,
    "explanation": "INR được tính từ tỷ số thời gian prothrombin (PT) của bệnh nhân so với mẫu chứng chuẩn hóa qua chỉ số nhạy quốc tế (ISI). Mục tiêu INR trong rung nhĩ, huyết khối tĩnh mạch sâu là 2.0 - 3.0 (riêng van tim cơ học 2 lá là 2.5 - 3.5).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Thời gian đông máu toàn phần Lee White\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Số lượng tiểu cầu và nồng độ fibrinogen\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thời gian thromboplastin từng phần aPTT\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "INR được tính từ tỷ số thời gian prothrombin (PT) của bệnh nhân so với mẫu chứng chuẩn hóa qua chỉ số nhạy quốc tế (ISI). Mục tiêu INR trong rung nhĩ, huyết khối tĩnh mạch sâu là 2.0 - 3.0 (riêng van tim cơ học 2 lá là 2.5 - 3.5)."
    ]
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
      "Gắn cạnh tranh vào thụ thể ADP P2Y12 trên màng tiểu cầu",
      "Khóa thụ thể glycoprotein IIb/IIIa qua liên kết disulfide",
      "Acetyl hóa không hồi phục enzym COX-1 tại gốc serin 529",
      "Kích thích thụ thể prostacyclin IP làm tăng tổng hợp cAMP"
    ],
    "correct": 2,
    "explanation": "Aspirin chuyển nhóm acetyl gắn cộng hóa trị vào gốc Serin 529 trong lòng enzym COX-1 của tiểu cầu, gây bất hoạt vĩnh viễn enzym này. Do tiểu cầu không có nhân để phiên mã tổng hợp enzym mới, tác dụng ức chế tổng hợp TXA2 kéo dài cho đến khi toàn bộ lứa tiểu cầu này chết đi (7-10 ngày).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Gắn cạnh tranh vào thụ thể ADP P2Y12 trên màng tiểu cầu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Khóa thụ thể glycoprotein IIb/IIIa qua liên kết disulfide\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Aspirin chuyển nhóm acetyl gắn cộng hóa trị vào gốc Serin 529 trong lòng enzym COX-1 của tiểu cầu, gây bất hoạt vĩnh viễn enzym này. Do tiểu cầu không có nhân để phiên mã tổng hợp enzym mới, tác dụng ức chế tổng hợp TXA2 kéo dài cho đến khi toàn bộ lứa tiểu cầu này chết đi (7-10 ngày).",
      "Phương án này không đúng vì \"Kích thích thụ thể prostacyclin IP làm tăng tổng hợp cAMP\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Niêm mạc vùng thân và đáy dạ dày",
      "Đoạn tá tràng và đầu hỗng tràng",
      "Đoạn cuối hồi tràng sát manh tràng",
      "Toàn bộ khung đại tràng lên và ngang"
    ],
    "correct": 1,
    "explanation": "Sắt vô cơ được hấp thu chủ yếu tại tá tràng và đoạn đầu hỗng tràng thông qua kênh vận chuyển kim loại hóa trị 2 (DMT1) ở màng đỉnh tế bào biểu mô ruột non. Tại đây môi trường acid từ dịch vị chuyển xuống giúp giữ sắt ở dạng Fe2+ hòa tan dễ hấp thu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Niêm mạc vùng thân và đáy dạ dày\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Sắt vô cơ được hấp thu chủ yếu tại tá tràng và đoạn đầu hỗng tràng thông qua kênh vận chuyển kim loại hóa trị 2 (DMT1) ở màng đỉnh tế bào biểu mô ruột non. Tại đây môi trường acid từ dịch vị chuyển xuống giúp giữ sắt ở dạng Fe2+ hòa tan dễ hấp thu.",
      "Phương án này không đúng vì \"Đoạn cuối hồi tràng sát manh tràng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Toàn bộ khung đại tràng lên và ngang\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Ion sắt hóa trị hai Fe2+",
      "Sắt kim loại tự do dạng hạt mịn",
      "Ion sắt hóa trị ba Fe3+",
      "Phức hợp sắt phosphat kết tủa"
    ],
    "correct": 0,
    "explanation": "DMT1 chỉ vận chuyển ion sắt hóa trị hai Fe2+. Sắt trong thức ăn chủ yếu là Fe3+, cần được khử thành Fe2+ nhờ enzym ferrireductase (duodenal cytochrome B - Dcytb) ở màng diềm bàn chải và acid dịch vị dạ dày trước khi hấp thu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "DMT1 chỉ vận chuyển ion sắt hóa trị hai Fe2+. Sắt trong thức ăn chủ yếu là Fe3+, cần được khử thành Fe2+ nhờ enzym ferrireductase (duodenal cytochrome B - Dcytb) ở màng diềm bàn chải và acid dịch vị dạ dày trước khi hấp thu.",
      "Phương án này không đúng vì \"Sắt kim loại tự do dạng hạt mịn\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ion sắt hóa trị ba Fe3+\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Phức hợp sắt phosphat kết tủa\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Tăng tiết acid dịch vị đồng thời ức chế giải phóng men tiêu đạm",
      "Kích thích tủy xương tăng sinh hồng cầu lưới và erythropoietin",
      "Khử Fe3+ thành Fe2+ hòa tan và tạo phức chelate dễ hấp thu",
      "Ức chế hepcidin tại gan làm tăng huy động sắt từ kho dự trữ"
    ],
    "correct": 2,
    "explanation": "Acid ascorbic có tính khử mạnh, chuyển Fe3+ thành Fe2+ và tạo phức chelate hòa tan với sắt ở pH acid của dạ dày. Phức hợp này vẫn duy trì trạng thái hòa tan khi xuống tá tràng (nơi pH bắt đầu kiềm hóa), giúp tăng sinh khả dụng hấp thu sắt lên gấp 2-3 lần.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Tăng tiết acid dịch vị đồng thời ức chế giải phóng men tiêu đạm\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích thích tủy xương tăng sinh hồng cầu lưới và erythropoietin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Acid ascorbic có tính khử mạnh, chuyển Fe3+ thành Fe2+ và tạo phức chelate hòa tan với sắt ở pH acid của dạ dày. Phức hợp này vẫn duy trì trạng thái hòa tan khi xuống tá tràng (nơi pH bắt đầu kiềm hóa), giúp tăng sinh khả dụng hấp thu sắt lên gấp 2-3 lần.",
      "Phương án này không đúng vì \"Ức chế hepcidin tại gan làm tăng huy động sắt từ kho dự trữ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Nước cam tươi giàu acid ascorbic và các loại thịt đỏ",
      "Trà đặc chứa tanin, sữa tươi chứa calci và thuốc antacid",
      "Nước chanh tươi, dung dịch glucose và acid folic viên uống",
      "Dung dịch natri clorid đẳng trương, dầu cá và acid amin"
    ],
    "correct": 1,
    "explanation": "Tanin trong trà, phytat trong ngũ cốc, calci trong sữa tạo phức kết tủa không tan với sắt. Thuốc kháng toan và PPI làm tăng pH dạ dày ngăn cản chuyển Fe3+ thành Fe2+, làm giảm nghiêm trọng hấp thu sắt. Cần uống viên sắt cách xa các chất này ít nhất 2 giờ.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Nước cam tươi giàu acid ascorbic và các loại thịt đỏ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Tanin trong trà, phytat trong ngũ cốc, calci trong sữa tạo phức kết tủa không tan với sắt. Thuốc kháng toan và PPI làm tăng pH dạ dày ngăn cản chuyển Fe3+ thành Fe2+, làm giảm nghiêm trọng hấp thu sắt. Cần uống viên sắt cách xa các chất này ít nhất 2 giờ.",
      "Phương án này không đúng vì \"Nước chanh tươi, dung dịch glucose và acid folic viên uống\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Dung dịch natri clorid đẳng trương, dầu cá và acid amin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Liệt trung tâm hô hấp tại hành não gây ngừng thở",
      "Tắc nghẽn đường dẫn mật ngoài gan gây hoại tử túi mật",
      "Phá hủy màng cầu thận cấp tính gây vô niệu hoàn toàn",
      "Ăn mòn niêm mạc tiêu hóa gây xuất huyết, sốc và hoại tử gan"
    ],
    "correct": 3,
    "explanation": "Sắt tự do dư thừa có tính ăn mòn trực tiếp gây loét hoại tử niêm mạc dạ dày ruột (nôn máu, đi ngoài phân đen). Khi vào máu, sắt gây tổn thương màng ty thể, giải phóng H+ gây toan chuyển hóa sâu, sốc trụy mạch và hoại tử tế bào gan cấp dẫn tới tử vong.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Liệt trung tâm hô hấp tại hành não gây ngừng thở\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tắc nghẽn đường dẫn mật ngoài gan gây hoại tử túi mật\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Phá hủy màng cầu thận cấp tính gây vô niệu hoàn toàn\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Sắt tự do dư thừa có tính ăn mòn trực tiếp gây loét hoại tử niêm mạc dạ dày ruột (nôn máu, đi ngoài phân đen). Khi vào máu, sắt gây tổn thương màng ty thể, giải phóng H+ gây toan chuyển hóa sâu, sốc trụy mạch và hoại tử tế bào gan cấp dẫn tới tử vong."
    ]
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
      "Tiêm vitamin B1 trước khi truyền glucose ngừa hội chứng Wernicke",
      "Truyền ngay dung dịch glucose ưu trương kết hợp insulin liều cao",
      "Chỉ truyền dung dịch albumin và tuyệt đối không bổ sung vitamin B",
      "Tiêm truyền acid amin thiết yếu kết hợp natri bicarbonat"
    ],
    "correct": 0,
    "explanation": "Thiamin (B1) là coenzym của pyruvate dehydrogenase cần thiết để chuyển hóa glucose. Bệnh nhân nghiện rượu bị cạn kiệt B1 trầm trọng. Nếu truyền Glucose trước, quá trình chuyển hóa glucose sẽ tiêu thụ nốt lượng B1 ít ỏi còn lại, gây tổn thương thể nhú và thân não cấp tính (hội chứng não Wernicke), hôn mê và tử vong.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Thiamin (B1) là coenzym của pyruvate dehydrogenase cần thiết để chuyển hóa glucose. Bệnh nhân nghiện rượu bị cạn kiệt B1 trầm trọng. Nếu truyền Glucose trước, quá trình chuyển hóa glucose sẽ tiêu thụ nốt lượng B1 ít ỏi còn lại, gây tổn thương thể nhú và thân não cấp tính (hội chứng não Wernicke), hôn mê và tử vong.",
      "Phương án này không đúng vì \"Truyền ngay dung dịch glucose ưu trương kết hợp insulin liều cao\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Chỉ truyền dung dịch albumin và tuyệt đối không bổ sung vitamin B\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tiêm truyền acid amin thiết yếu kết hợp natri bicarbonat\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Teo cơ đối xứng hai chi dưới kèm mất phản xạ",
      "Suy tim cung lượng cao kèm phù to toàn thân",
      "Viêm da đối xứng ở các vùng hở với ánh sáng",
      "Chảy máu chân răng và xuất huyết màng xương"
    ],
    "correct": 1,
    "explanation": "Thiếu Thiamin gây giãn tiểu động mạch toàn thân làm giảm sức cản ngoại vi, cơ thể bù trừ bằng cách tăng vọt cung lượng tim dẫn đến suy tim cung lượng cao (Beriberi thể ướt) với tim to, nhịp nhanh, khó thở và phù to toàn thân. Khác với Beriberi thể khô chủ yếu là viêm đa dây thần kinh ngoại biên.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Teo cơ đối xứng hai chi dưới kèm mất phản xạ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Thiếu Thiamin gây giãn tiểu động mạch toàn thân làm giảm sức cản ngoại vi, cơ thể bù trừ bằng cách tăng vọt cung lượng tim dẫn đến suy tim cung lượng cao (Beriberi thể ướt) với tim to, nhịp nhanh, khó thở và phù to toàn thân. Khác với Beriberi thể khô chủ yếu là viêm đa dây thần kinh ngoại biên.",
      "Phương án này không đúng vì \"Viêm da đối xứng ở các vùng hở với ánh sáng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Chảy máu chân răng và xuất huyết màng xương\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Vitamin B2 hay riboflavin",
      "Vitamin B5 hay acid pantothenic",
      "Vitamin B3 hay acid nicotinic",
      "Vitamin B6 hay pyridoxin"
    ],
    "correct": 2,
    "explanation": "Pellagra do thiếu hụt Vitamin B3 (Niacin - tiền chất của NAD/NADP) hoặc thiếu acid amin Tryptophan. Bệnh đặc trưng bởi tam chứng '3D' (Dermatitis - viêm da đối xứng nhạy cảm ánh sáng, Diarrhea - tiêu chảy mạn tính, Dementia - lú lẫn sa sút trí tuệ; nếu không điều trị sẽ dẫn tới Death - tử vong).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Vitamin B2 hay riboflavin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Vitamin B5 hay acid pantothenic\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Pellagra do thiếu hụt Vitamin B3 (Niacin - tiền chất của NAD/NADP) hoặc thiếu acid amin Tryptophan. Bệnh đặc trưng bởi tam chứng '3D' (Dermatitis - viêm da đối xứng nhạy cảm ánh sáng, Diarrhea - tiêu chảy mạn tính, Dementia - lú lẫn sa sút trí tuệ; nếu không điều trị sẽ dẫn tới Death - tử vong).",
      "Phương án này không đúng vì \"Vitamin B6 hay pyridoxin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Viêm hoại tử tế bào gan cấp tiến triển",
      "Viêm thoái hóa dây thần kinh ngoại biên",
      "Thiếu máu huyết tán giảm hoạt tính men G6PD",
      "Lắng đọng phức hợp miễn dịch tại các ổ khớp"
    ],
    "correct": 1,
    "explanation": "Isoniazid (INH) tạo phức hydrazon với pyridoxal phosphat làm tăng đào thải vitamin B6 qua nước tiểu, đồng thời ức chế enzym pyridoxal kinase. Thiếu B6 làm giảm tổng hợp chất dẫn truyền GABA và myelin, gây viêm dây thần kinh ngoại biên. Bổ sung Pyridoxin 25-50 mg/ngày giúp phòng ngừa triệt để.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Viêm hoại tử tế bào gan cấp tiến triển\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Isoniazid (INH) tạo phức hydrazon với pyridoxal phosphat làm tăng đào thải vitamin B6 qua nước tiểu, đồng thời ức chế enzym pyridoxal kinase. Thiếu B6 làm giảm tổng hợp chất dẫn truyền GABA và myelin, gây viêm dây thần kinh ngoại biên. Bổ sung Pyridoxin 25-50 mg/ngày giúp phòng ngừa triệt để.",
      "Phương án này không đúng vì \"Thiếu máu huyết tán giảm hoạt tính men G6PD\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Lắng đọng phức hợp miễn dịch tại các ổ khớp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Vitamin B1",
      "Vitamin B6",
      "Vitamin B12",
      "Vitamin C"
    ],
    "correct": 3,
    "explanation": "Acid ascorbic (Vitamin C) được chuyển hóa một phần trong cơ thể thành acid oxalic. Dùng liều cao kéo dài làm tăng đào thải oxalat qua nước tiểu; oxalat kết tủa với calci tạo sỏi Calci oxalat ở đường tiết niệu, đồng thời toan hóa nước tiểu cản trở đào thải acid uric gây bùng phát gút.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Vitamin B1\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Vitamin B6\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Vitamin B12\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Acid ascorbic (Vitamin C) được chuyển hóa một phần trong cơ thể thành acid oxalic. Dùng liều cao kéo dài làm tăng đào thải oxalat qua nước tiểu; oxalat kết tủa với calci tạo sỏi Calci oxalat ở đường tiết niệu, đồng thời toan hóa nước tiểu cản trở đào thải acid uric gây bùng phát gút."
    ]
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
      "Dẫn chất của vitamin A nhóm retinoid",
      "Dung dịch vitamin E dạng dầu tổng hợp",
      "Vitamin C tinh khiết tiêm truyền tĩnh mạch",
      "Acid folic liều cao trên năm miligam"
    ],
    "correct": 0,
    "explanation": "Vitamin A liều cao và các retinoid (như Isotretinoin trị mụn, Acitretin trị vảy nến) có độc tính quái thai cực mạnh, gây dị tật sọ mặt, teo vành tai, dị tật cung động mạch chủ và hệ thần kinh trung ương. Phụ nữ dùng thuốc bắt buộc phải tránh thai tuyệt đối trong và sau khi ngừng thuốc.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Vitamin A liều cao và các retinoid (như Isotretinoin trị mụn, Acitretin trị vảy nến) có độc tính quái thai cực mạnh, gây dị tật sọ mặt, teo vành tai, dị tật cung động mạch chủ và hệ thần kinh trung ương. Phụ nữ dùng thuốc bắt buộc phải tránh thai tuyệt đối trong và sau khi ngừng thuốc.",
      "Phương án này không đúng vì \"Dung dịch vitamin E dạng dầu tổng hợp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Vitamin C tinh khiết tiêm truyền tĩnh mạch\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Acid folic liều cao trên năm miligam\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Monophosphoryl hóa nhờ Thymidine kinase đặc hiệu virus",
      "Gắn kết đặc hiệu vào phức hợp glycoprotein vỏ ngoài virus",
      "Di và triphosphoryl hóa nhờ các enzym kinase tế bào chủ",
      "Khuếch tán thụ động qua màng bào tương tế bào ký chủ"
    ],
    "correct": 0,
    "explanation": "Acyclovir là tiền chất trơ. Bước chuyển Acyclovir thành acyclovir-monophosphat đòi hỏi enzym Thymidine Kinase của virus (HSV-TK có ái lực cao gấp 200 lần so với enzym người). Các bước gắn phosphat tiếp theo mới do enzym tế bào người thực hiện tạo triphosphate ức chế DNA polymerase, do đó thuốc chỉ hoạt hóa trong tế bào nhiễm virus.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Acyclovir là tiền chất trơ. Bước chuyển Acyclovir thành acyclovir-monophosphat đòi hỏi enzym Thymidine Kinase của virus (HSV-TK có ái lực cao gấp 200 lần so với enzym người). Các bước gắn phosphat tiếp theo mới do enzym tế bào người thực hiện tạo triphosphate ức chế DNA polymerase, do đó thuốc chỉ hoạt hóa trong tế bào nhiễm virus.",
      "Phương án này không đúng vì \"Gắn kết đặc hiệu vào phức hợp glycoprotein vỏ ngoài virus\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Di và triphosphoryl hóa nhờ các enzym kinase tế bào chủ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Khuếch tán thụ động qua màng bào tương tế bào ký chủ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Tiêm nhanh tĩnh mạch phối hợp bổ sung kali clorid",
      "Phối hợp lợi tiểu spironolacton duy trì điện giải",
      "Truyền tĩnh mạch chậm trên một giờ kết hợp bù đủ dịch",
      "Kiềm hóa nước tiểu phối hợp furosemid liều cao kéo dài"
    ],
    "correct": 2,
    "explanation": "Acyclovir ít tan trong nước tiểu. Khi tiêm tĩnh mạch nhanh liều cao, nồng độ thuốc vượt ngưỡng bão hòa trong lòng ống lượn và ống góp, kết tủa thành các tinh thể hình kim gây tắc nghẽn ống thận và suy thận cấp. Bắt buộc phải truyền chậm trên 60 phút và truyền dịch muối đảm bảo bài niệu tốt.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Tiêm nhanh tĩnh mạch phối hợp bổ sung kali clorid\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Phối hợp lợi tiểu spironolacton duy trì điện giải\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Acyclovir ít tan trong nước tiểu. Khi tiêm tĩnh mạch nhanh liều cao, nồng độ thuốc vượt ngưỡng bão hòa trong lòng ống lượn và ống góp, kết tủa thành các tinh thể hình kim gây tắc nghẽn ống thận và suy thận cấp. Bắt buộc phải truyền chậm trên 60 phút và truyền dịch muối đảm bảo bài niệu tốt.",
      "Phương án này không đúng vì \"Kiềm hóa nước tiểu phối hợp furosemid liều cao kéo dài\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Virus hợp bào hô hấp gây viêm tiểu phế quản tắc nghẽn",
      "Virus varicella zoster kháng acyclovir lan tỏa toàn thân",
      "Virus viêm gan B mạn tính có dấu hiệu xơ gan mất bù",
      "Cytomegalovirus thể xâm lấn nội tạng hoặc viêm võng mạc"
    ],
    "correct": 3,
    "explanation": "Ganciclovir được hoạt hóa bởi enzym phosphotransferase UL97 của Cytomegalovirus (CMV), có hoạt tính kháng CMV mạnh gấp 50-100 lần Acyclovir. Do ức chế cả DNA polymerase tế bào người, thuốc gây ức chế tủy xương nặng (giảm bạch cầu trung tính), chuyên dùng cấp cứu viêm võng mạc hoặc viêm phổi do CMV.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Virus hợp bào hô hấp gây viêm tiểu phế quản tắc nghẽn\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Virus varicella zoster kháng acyclovir lan tỏa toàn thân\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Virus viêm gan B mạn tính có dấu hiệu xơ gan mất bù\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Ganciclovir được hoạt hóa bởi enzym phosphotransferase UL97 của Cytomegalovirus (CMV), có hoạt tính kháng CMV mạnh gấp 50-100 lần Acyclovir. Do ức chế cả DNA polymerase tế bào người, thuốc gây ức chế tủy xương nặng (giảm bạch cầu trung tính), chuyên dùng cấp cứu viêm võng mạc hoặc viêm phổi do CMV."
    ]
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
      "Kênh ion M2 cản trở cởi vỏ bọc giải phóng vật chất di truyền",
      "Enzym RNA polymerase phụ thuộc RNA làm gián đoạn sao chép",
      "Kháng nguyên hemagglutinin ức chế gắn kết virus vào thụ thể",
      "Enzym neuraminidase ngăn chặn virus mới tách rời màng tế bào"
    ],
    "correct": 3,
    "explanation": "Enzym Neuraminidase (NA) trên bề mặt virus cúm có nhiệm vụ cắt cầu nối acid sialic giữa vỏ virus và màng tế bào vật chủ, cho phép các hạt virus con nảy chồi thoát ra ngoài để lây nhiễm tế bào mới. Thuốc ức chế NA giam giữ virus bám dính trên màng tế bào, chặn đứng chu kỳ lây lan.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Kênh ion M2 cản trở cởi vỏ bọc giải phóng vật chất di truyền\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Enzym RNA polymerase phụ thuộc RNA làm gián đoạn sao chép\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kháng nguyên hemagglutinin ức chế gắn kết virus vào thụ thể\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Enzym Neuraminidase (NA) trên bề mặt virus cúm có nhiệm vụ cắt cầu nối acid sialic giữa vỏ virus và màng tế bào vật chủ, cho phép các hạt virus con nảy chồi thoát ra ngoài để lây nhiễm tế bào mới. Thuốc ức chế NA giam giữ virus bám dính trên màng tế bào, chặn đứng chu kỳ lây lan."
    ]
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
      "Trong vòng 72 đến 96 giờ tính từ thời điểm tiếp xúc gần",
      "Trong vòng 48 giờ đầu tiên kể từ khi xuất hiện triệu chứng",
      "Sau ngày thứ 5 khi các dấu hiệu nhiễm khuẩn thứ phát xuất hiện",
      "Trong vòng 12 giờ đầu tiên sau khi nghi ngờ phơi nhiễm"
    ],
    "correct": 1,
    "explanation": "Virus cúm nhân lên đạt đỉnh trong đường hô hấp sau 24-48 giờ kể từ khi xuất hiện triệu chứng. Dùng Oseltamivir trong vòng 48 giờ đầu giúp ức chế virus kịp thời, rút ngắn thời gian sốt và giảm biến chứng viêm phổi nặng; dùng sau 48 giờ hiệu quả lâm sàng giảm sút rõ rệt (trừ ca bệnh nặng nhập viện).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Trong vòng 72 đến 96 giờ tính từ thời điểm tiếp xúc gần\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Virus cúm nhân lên đạt đỉnh trong đường hô hấp sau 24-48 giờ kể từ khi xuất hiện triệu chứng. Dùng Oseltamivir trong vòng 48 giờ đầu giúp ức chế virus kịp thời, rút ngắn thời gian sốt và giảm biến chứng viêm phổi nặng; dùng sau 48 giờ hiệu quả lâm sàng giảm sút rõ rệt (trừ ca bệnh nặng nhập viện).",
      "Phương án này không đúng vì \"Sau ngày thứ 5 khi các dấu hiệu nhiễm khuẩn thứ phát xuất hiện\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Trong vòng 12 giờ đầu tiên sau khi nghi ngờ phơi nhiễm\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Đột biến gen CYP2C19 suy giảm chuyển hóa thuốc chống đông",
      "Alen gen HLA-B*5701 liên quan quá mẫn dị ứng miễn dịch",
      "Alen gen HLA-B*1502 liên quan hội chứng Stevens-Johnson",
      "Đột biến kháng thuốc K65R trên enzym phiên mã ngược"
    ],
    "correct": 1,
    "explanation": "Bệnh nhân mang gen HLA-B*5701 khi dùng Abacavir có nguy cơ bị phản ứng quá mẫn toàn thân (HSR) đe dọa tính mạng (tỷ lệ 50%). Kháng nguyên gắn vào rãnh liên kết kháng nguyên của HLA-B*5701 kích hoạt tế bào T độc CD8+. Bắt buộc sàng lọc gen HLA-B*5701 trước khi bắt đầu phác đồ Abacavir.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Đột biến gen CYP2C19 suy giảm chuyển hóa thuốc chống đông\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Bệnh nhân mang gen HLA-B*5701 khi dùng Abacavir có nguy cơ bị phản ứng quá mẫn toàn thân (HSR) đe dọa tính mạng (tỷ lệ 50%). Kháng nguyên gắn vào rãnh liên kết kháng nguyên của HLA-B*5701 kích hoạt tế bào T độc CD8+. Bắt buộc sàng lọc gen HLA-B*5701 trước khi bắt đầu phác đồ Abacavir.",
      "Phương án này không đúng vì \"Alen gen HLA-B*1502 liên quan hội chứng Stevens-Johnson\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Đột biến kháng thuốc K65R trên enzym phiên mã ngược\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Gắn alkyl vào vị trí N7 của guanin tạo liên kết chéo làm đứt DNA",
      "Chèn trực tiếp giữa các cặp base nitơ ngăn cản mở xoắn DNA",
      "Phosphoryl hóa đầu 5-phosphate làm ức chế enzym nối DNA ligase",
      "Thủy phân liên kết phosphodiester làm tan rã màng bao bọc nhân"
    ],
    "correct": 0,
    "explanation": "Tác nhân alkyl hóa tạo ion carbonium mang điện tích dương mạnh, tấn công ái nhân vào nguyên tử nitơ ở vị trí N7 của bazơ guanin trên DNA. Tạo cầu nối chéo giữa 2 chuỗi DNA (interstrand cross-link) ngăn cản tháo xoắn nhân đôi và phiên mã, kích hoạt con đường tự chết của tế bào (apoptosis).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Tác nhân alkyl hóa tạo ion carbonium mang điện tích dương mạnh, tấn công ái nhân vào nguyên tử nitơ ở vị trí N7 của bazơ guanin trên DNA. Tạo cầu nối chéo giữa 2 chuỗi DNA (interstrand cross-link) ngăn cản tháo xoắn nhân đôi và phiên mã, kích hoạt con đường tự chết của tế bào (apoptosis).",
      "Phương án này không đúng vì \"Chèn trực tiếp giữa các cặp base nitơ ngăn cản mở xoắn DNA\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Phosphoryl hóa đầu 5-phosphate làm ức chế enzym nối DNA ligase\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thủy phân liên kết phosphodiester làm tan rã màng bao bọc nhân\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Chất chuyển hóa có hoạt tính phosphoramid mustard",
      "Dẫn xuất trung gian chuyển hóa 4-hydroxycyclophosphamid",
      "Dẫn xuất bất hoạt carboxyphosphamid đào thải qua thận",
      "Chất chuyển hóa acrolein tích tụ gây tổn thương bàng quang"
    ],
    "correct": 3,
    "explanation": "Cyclophosphamid qua gan chuyển hóa thành 4-hydroxycyclophosphamid, sau đó phân cắt tự phát thành phosphoramid mustard (chất diệt ung thư) và Acrolein. Acrolein là một aldehyde có độc tính cực cao với mô niêm mạc, tích tụ trong nước tiểu gây ăn mòn, loét hoại tử và chảy máu bàng quang dữ dội.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Chất chuyển hóa có hoạt tính phosphoramid mustard\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Dẫn xuất trung gian chuyển hóa 4-hydroxycyclophosphamid\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Dẫn xuất bất hoạt carboxyphosphamid đào thải qua thận\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Cyclophosphamid qua gan chuyển hóa thành 4-hydroxycyclophosphamid, sau đó phân cắt tự phát thành phosphoramid mustard (chất diệt ung thư) và Acrolein. Acrolein là một aldehyde có độc tính cực cao với mô niêm mạc, tích tụ trong nước tiểu gây ăn mòn, loét hoại tử và chảy máu bàng quang dữ dội."
    ]
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
      "Dexrazoxan",
      "Leucovorin",
      "Amifostin",
      "Mesna"
    ],
    "correct": 3,
    "explanation": "MESNA (2-mercaptoethane sulfonate sodium) tập trung nồng độ cao trong nước tiểu bàng quang. Nhóm thiol (-SH) tự do của MESNA phản ứng cộng ái nhân vào liên kết đôi của Acrolein tạo thành một phức hợp thioether bền vững, tan trong nước và hoàn toàn không độc, đào thải ra ngoài.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Dexrazoxan\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Acid folinic (Leucovorin) là chất giải cứu tế bào lành khi dùng Methotrexat liều cao, không dùng cho các nhóm alkyl hóa.",
      "Phương án này không đúng vì \"Amifostin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "MESNA (2-mercaptoethane sulfonate sodium) tập trung nồng độ cao trong nước tiểu bàng quang. Nhóm thiol (-SH) tự do của MESNA phản ứng cộng ái nhân vào liên kết đôi của Acrolein tạo thành một phức hợp thioether bền vững, tan trong nước và hoàn toàn không độc, đào thải ra ngoài."
    ]
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
      "Enzym thymidylate synthase chuyển dUMP thành dTMP trong nhân",
      "Enzym dihydrofolat reductase xúc tác tạo acid tetrahydrofolic",
      "Enzym ribonucleotid reductase khử ribonucleotid thành dNTP",
      "Enzym DNA topoisomerase II tháo xoắn chuỗi xoắn kép sao chép"
    ],
    "correct": 1,
    "explanation": "Methotrexat có cấu trúc tương tự acid folic nhưng có ái lực với enzym Dihydrofolate Reductase (DHFR) cao gấp 1000 lần acid folic. Ức chế cạnh tranh DHFR làm cạn kiệt THF - cofactor thiết yếu tổng hợp thymidylate và purin, chặn đứng sự tổng hợp DNA ở pha S của chu kỳ tế bào.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Enzym thymidylate synthase chuyển dUMP thành dTMP trong nhân\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Methotrexat có cấu trúc tương tự acid folic nhưng có ái lực với enzym Dihydrofolate Reductase (DHFR) cao gấp 1000 lần acid folic. Ức chế cạnh tranh DHFR làm cạn kiệt THF - cofactor thiết yếu tổng hợp thymidylate và purin, chặn đứng sự tổng hợp DNA ở pha S của chu kỳ tế bào.",
      "Phương án này không đúng vì \"Enzym ribonucleotid reductase khử ribonucleotid thành dNTP\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Enzym DNA topoisomerase II tháo xoắn chuỗi xoắn kép sao chép\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Tăng cường khả năng khuếch tán của thuốc qua màng tế bào u",
      "Kiềm hóa nước tiểu thúc đẩy đào thải methotrexat qua thận",
      "Cung cấp folat hoạt tính cho tế bào lành không qua enzym DHFR",
      "Kích thích tủy xương tăng sinh tế bào miễn dịch chống khối u"
    ],
    "correct": 2,
    "explanation": "Leucovorin (5-formyl-THF) là dạng folate hoạt tính nằm ở hạ lưu của enzym DHFR. Khi dùng Methotrexat liều cao tiêu diệt khối u, truyền Leucovorin sẽ được các tế bào lành (tủy xương, niêm mạc ruột) thu nhận trực tiếp mà không cần enzym DHFR, giúp tế bào lành sống sót phục hồi.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Tăng cường khả năng khuếch tán của thuốc qua màng tế bào u\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kiềm hóa nước tiểu thúc đẩy đào thải methotrexat qua thận\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Leucovorin (5-formyl-THF) là dạng folate hoạt tính nằm ở hạ lưu của enzym DHFR. Khi dùng Methotrexat liều cao tiêu diệt khối u, truyền Leucovorin sẽ được các tế bào lành (tủy xương, niêm mạc ruột) thu nhận trực tiếp mà không cần enzym DHFR, giúp tế bào lành sống sót phục hồi.",
      "Phương án này không đúng vì \"Kích thích tủy xương tăng sinh tế bào miễn dịch chống khối u\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Mitomycin C",
      "Bleomycin",
      "Dactinomycin",
      "Doxorubicin hydroclorid"
    ],
    "correct": 3,
    "explanation": "Doxorubicin tạo phức chelate với ion sắt (Fe2+/Fe3+) trong tế bào cơ tim, thúc đẩy phản ứng Fenton sinh ra các gốc tự do hydroxyl (OH•) và superoxide độc hại. Do cơ tim có nồng độ enzym catalase bảo vệ rất thấp, màng ty thể cơ tim bị phá hủy không hồi phục dẫn đến suy tim sung huyết khi liều tích lũy > 450-550 mg/m2.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Mitomycin C\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Bleomycin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Dactinomycin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Doxorubicin tạo phức chelate với ion sắt (Fe2+/Fe3+) trong tế bào cơ tim, thúc đẩy phản ứng Fenton sinh ra các gốc tự do hydroxyl (OH•) và superoxide độc hại. Do cơ tim có nồng độ enzym catalase bảo vệ rất thấp, màng ty thể cơ tim bị phá hủy không hồi phục dẫn đến suy tim sung huyết khi liều tích lũy > 450-550 mg/m2."
    ]
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
      "Dexrazoxan tiêm tĩnh mạch",
      "Deferoxamin tiêm truyền tĩnh mạch",
      "Acid tranexamic đường tiêm",
      "MESNA truyền tĩnh mạch"
    ],
    "correct": 0,
    "explanation": "Dexrazoxan là một tiền chất thân dầu thâm nhập vào trong tế bào cơ tim, bị thủy phân thành chất chelate hóa sắt nội bào mạnh (ICRF-198), ngăn chặn Doxorubicin gắn với sắt tạo gốc tự do, giảm thiểu tổn thương ty thể cơ tim mà không làm giảm hoạt tính chống ung thư của Doxorubicin.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Dexrazoxan là một tiền chất thân dầu thâm nhập vào trong tế bào cơ tim, bị thủy phân thành chất chelate hóa sắt nội bào mạnh (ICRF-198), ngăn chặn Doxorubicin gắn với sắt tạo gốc tự do, giảm thiểu tổn thương ty thể cơ tim mà không làm giảm hoạt tính chống ung thư của Doxorubicin.",
      "Phương án này không đúng vì \"Deferoxamin tiêm truyền tĩnh mạch\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Acid tranexamic đường tiêm\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Mesna là thuốc giải độc đặc hiệu trung hòa acrolein trong bàng quang của Cyclophosphamid/Ifosfamid, không dùng cho các thuốc khác."
    ]
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
      "Dẫn xuất liên hợp glucuronid tích tụ nồng độ cao gây độc ty thể",
      "Phức hợp paracetamol nguyên dạng lắng đọng hoại tử xoang gan",
      "Gốc tự do hydroxyl ứ đọng kéo dài ức chế chu trình acid citric",
      "Chất chuyển hóa NAPQI cạn kiệt glutathione và liên kết protein gan"
    ],
    "correct": 3,
    "explanation": "Ở liều điều trị, NAPQI độc hại được khử độc nhanh chóng nhờ liên hợp với Glutathione. Khi dùng quá liều (> 150 mg/kg), con đường glucuronid và sulfat bị bão hòa, enzym CYP2E1 sản sinh ồ ạt NAPQI làm cạn kiệt > 70% kho dự trữ Glutathione của gan. NAPQI tự do phản ứng gắn cộng hóa trị vào màng và protein ty thể tế bào gan gây hoại tử trung tâm tiểu thùy.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Con đường liên hợp glucuronid là con đường chuyển hóa chính không độc và an toàn của Paracetamol (chiếm ~60%), không phải nguyên nhân gây hoại tử tế bào gan.",
      "Paracetamol nguyên dạng không tích tụ gây hoại tử trực tiếp mà độc tính gan hoàn toàn do chất chuyển hóa ái điện tử NAPQI khi cạn kiệt Glutathione.",
      "Độc tính gan của Paracetamol đặc hiệu do NAPQI gắn cộng hóa trị vào đại phân tử protein của tế bào gan, không phải do cơ chế ức chế chu trình acid citric.",
      "Ở liều điều trị, NAPQI độc hại được khử độc nhanh chóng nhờ liên hợp với Glutathione. Khi dùng quá liều (> 150 mg/kg), con đường glucuronid và sulfat bị bão hòa, enzym CYP2E1 sản sinh ồ ạt NAPQI làm cạn kiệt > 70% kho dự trữ Glutathione của gan. NAPQI tự do phản ứng gắn cộng hóa trị vào màng và protein ty thể tế bào gan gây hoại tử trung tâm tiểu thùy."
    ]
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
      "Ức chế hấp thu thuốc tại ống tiêu hóa trong vòng 12 giờ đầu",
      "Kiềm hóa nước tiểu làm tăng bài tiết acid trong vòng 24 giờ",
      "Cung cấp sulfhydryl tổng hợp glutathione tối ưu trong 8-10 giờ đầu",
      "Chuyển paracetamol thành dẫn xuất sulfat không độc trong 6 giờ đầu"
    ],
    "correct": 2,
    "explanation": "NAC là tiền chất của L-cysteine cần thiết để tổng hợp Glutathione nội bào, đồng thời cung cấp nhóm sulfhydryl (-SH) liên kết trực tiếp trung hòa NAPQI. Dùng NAC trong vòng 8-10 giờ đầu kể từ khi uống paracetamol bảo vệ gan gần như tuyệt đối, giảm nguy cơ hoại tử gan nặng xuống < 2% và ngăn ngừa tử vong.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Ức chế hấp thu thuốc tại ống tiêu hóa trong vòng 12 giờ đầu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kiềm hóa nước tiểu làm tăng bài tiết acid trong vòng 24 giờ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "NAC là tiền chất của L-cysteine cần thiết để tổng hợp Glutathione nội bào, đồng thời cung cấp nhóm sulfhydryl (-SH) liên kết trực tiếp trung hòa NAPQI. Dùng NAC trong vòng 8-10 giờ đầu kể từ khi uống paracetamol bảo vệ gan gần như tuyệt đối, giảm nguy cơ hoại tử gan nặng xuống < 2% và ngăn ngừa tử vong.",
      "Phương án này không đúng vì \"Chuyển paracetamol thành dẫn xuất sulfat không độc trong 6 giờ đầu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Enzym butyrylcholinesterase",
      "Enzym monoamin oxydase",
      "Enzym acetylcholinesterase",
      "Enzym dopa decarboxylase"
    ],
    "correct": 2,
    "explanation": "Phospho hữu cơ phosphoryl hóa vị trí serin tại trung tâm hoạt động của enzym Acetylcholinesterase (AChE), gây bất hoạt enzym này. Acetylcholin không bị giáng hóa, tích tụ ồ ạt kích thích liên tục các thụ thể Muscarinic (co đồng tử, tăng tiết đờm dãi, nhịp chậm), thụ thể Nicotinic (co giật cơ, liệt cơ hô hấp) và thần kinh trung ương.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Enzym butyrylcholinesterase\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Enzym monoamin oxydase\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phospho hữu cơ phosphoryl hóa vị trí serin tại trung tâm hoạt động của enzym Acetylcholinesterase (AChE), gây bất hoạt enzym này. Acetylcholin không bị giáng hóa, tích tụ ồ ạt kích thích liên tục các thụ thể Muscarinic (co đồng tử, tăng tiết đờm dãi, nhịp chậm), thụ thể Nicotinic (co giật cơ, liệt cơ hô hấp) và thần kinh trung ương.",
      "Phương án này không đúng vì \"Enzym dopa decarboxylase\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Naloxone đối kháng opioid kết hợp flumazenil tiêm tĩnh mạch",
      "Xanh methylen khử methemoglobin kết hợp calci gluconat ổn định màng",
      "Vitamin K1 phục hồi đông máu kết hợp than hoạt đa liều làm sạch ruột",
      "Atropin đối kháng muscarinic kết hợp pralidoxim tái hoạt hóa AChE"
    ],
    "correct": 3,
    "explanation": "Atropin liều cao cắt đứt các triệu chứng kích thích Muscarinic nguy hiểm (chống co thắt phế quản, ngừng tiết dịch phế quản, nâng nhịp tim). Pralidoxime (PAM) gắn vào vị trí anion của enzym AChE, kéo gốc phospho ra khỏi enzym để giải phóng và phục hồi lại hoạt tính của AChE trước khi enzym bị 'lão hóa' (Aging) liên kết chặt không hồi phục.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Naloxone đối kháng opioid kết hợp flumazenil tiêm tĩnh mạch\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Xanh methylen khử methemoglobin kết hợp calci gluconat ổn định màng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Vitamin K1 phục hồi đông máu kết hợp than hoạt đa liều làm sạch ruột\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Atropin liều cao cắt đứt các triệu chứng kích thích Muscarinic nguy hiểm (chống co thắt phế quản, ngừng tiết dịch phế quản, nâng nhịp tim). Pralidoxime (PAM) gắn vào vị trí anion của enzym AChE, kéo gốc phospho ra khỏi enzym để giải phóng và phục hồi lại hoạt tính của AChE trước khi enzym bị 'lão hóa' (Aging) liên kết chặt không hồi phục."
    ]
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
      "Kích động tâm thần vận động, co giật toàn thân và sốt cao",
      "Cơn tăng huyết áp kịch phát, nhịp nhanh và đồng tử giãn tối đa",
      "Suy hô hấp cấp tính, giãn đồng tử một bên và rối loạn trương lực",
      "Ức chế trung khu hô hấp, đồng tử co nhỏ như đầu đinh ghim và hôn mê"
    ],
    "correct": 3,
    "explanation": "Tam chứng ngộ độc Opioid kinh điển (Opioid toxidrome): ức chế trung khu hô hấp ở hành não (nhịp thở chậm, nông, ngắt quãng $le 8$ lần/phút $\rightarrow$ ngừng thở), đồng tử co nhỏ như đầu đinh ghim (pinpoint pupils - do kích thích phó giao cảm nhân Edinger-Westphal) và hôn mê mất ý thức hoàn toàn.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Kích động tâm thần vận động, co giật toàn thân và sốt cao\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Cơn tăng huyết áp kịch phát, nhịp nhanh và đồng tử giãn tối đa\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Suy hô hấp cấp tính, giãn đồng tử một bên và rối loạn trương lực\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Tam chứng ngộ độc Opioid kinh điển (Opioid toxidrome): ức chế trung khu hô hấp ở hành não (nhịp thở chậm, nông, ngắt quãng $le 8$ lần/phút $\rightarrow$ ngừng thở), đồng tử co nhỏ như đầu đinh ghim (pinpoint pupils - do kích thích phó giao cảm nhân Edinger-Westphal) và hôn mê mất ý thức hoàn toàn."
    ]
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
      "Tích lũy kéo dài trong mô mỡ gây phóng thích chậm",
      "Hấp thu qua đường tiêu hóa cần uống lặp lại liên tục",
      "Bán thải rất ngắn đòi hỏi theo dõi và tiêm nhắc lại",
      "Thể tích phân bố rất nhỏ bị thải trừ nhanh qua thận"
    ],
    "correct": 2,
    "explanation": "Naloxone là chất đối kháng cạnh tranh thuần túy tại thụ thể opioid mu. Bán thải của Naloxone chỉ 30-90 phút trong khi morphin kéo dài 3-5 giờ (Methadon kéo dài 24-36 giờ). Khi Naloxone hết tác dụng, opioid trong cơ thể sẽ gắn lại vào thụ thể làm bệnh nhân ngừng thở tái phát; do đó phải theo dõi liên tục ít nhất 4-24 giờ.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Tích lũy kéo dài trong mô mỡ gây phóng thích chậm\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Hấp thu qua đường tiêu hóa cần uống lặp lại liên tục\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Naloxone là chất đối kháng cạnh tranh thuần túy tại thụ thể opioid mu. Bán thải của Naloxone chỉ 30-90 phút trong khi morphin kéo dài 3-5 giờ (Methadon kéo dài 24-36 giờ). Khi Naloxone hết tác dụng, opioid trong cơ thể sẽ gắn lại vào thụ thể làm bệnh nhân ngừng thở tái phát; do đó phải theo dõi liên tục ít nhất 4-24 giờ.",
      "Phương án này không đúng vì \"Thể tích phân bố rất nhỏ bị thải trừ nhanh qua thận\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Nhóm barbiturat gây tăng thời gian mở kênh clorid",
      "Nhóm thuốc chống trầm cảm ba vòng ức chế tái hấp thu monoamin",
      "Nhóm an thần kinh thế hệ một đối kháng thụ thể dopamin D2",
      "Nhóm benzodiazepin điều hòa dị lập thể thụ thể GABA-A"
    ],
    "correct": 3,
    "explanation": "Flumazenil gắn cạnh tranh đặc hiệu tại vị trí gắn benzodiazepin trên thụ thể GABA-A, hóa giải nhanh chóng tác dụng an thần, gây ngủ và ức chế hô hấp của các thuốc nhóm Benzodiazepin trong vòng 1-2 phút sau khi tiêm tĩnh mạch.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Nhóm barbiturat gây tăng thời gian mở kênh clorid\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Nhóm thuốc chống trầm cảm ba vòng ức chế tái hấp thu monoamin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Nhóm an thần kinh thế hệ một đối kháng thụ thể dopamin D2\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Flumazenil gắn cạnh tranh đặc hiệu tại vị trí gắn benzodiazepin trên thụ thể GABA-A, hóa giải nhanh chóng tác dụng an thần, gây ngủ và ức chế hô hấp của các thuốc nhóm Benzodiazepin trong vòng 1-2 phút sau khi tiêm tĩnh mạch."
    ]
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
      "Ngộ độc phối hợp thuốc hạ sốt giảm đau paracetamol",
      "Đang xuất hiện cơn tăng huyết áp kịch phát ác tính",
      "Ngộ độc phối hợp thuốc chống trầm cảm ba vòng TCA",
      "Tiền sử viêm loét dạ dày tá tràng tiến triển mạn"
    ],
    "correct": 2,
    "explanation": "Flumazenil làm mất tác dụng chống co giật của Benzodiazepin. Ở bệnh nhân ngộ độc phối hợp TCA (thuốc hạ thấp ngưỡng co giật và loạn nhịp tim), Flumazenil sẽ bộc lộ độc tính gây co giật dữ dội và loạn nhịp thất của TCA, rất khó điều trị và có thể gây tử vong. Cần cân nhắc kỹ trước khi dùng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Ngộ độc phối hợp thuốc hạ sốt giảm đau paracetamol\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Đang xuất hiện cơn tăng huyết áp kịch phát ác tính\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Flumazenil làm mất tác dụng chống co giật của Benzodiazepin. Ở bệnh nhân ngộ độc phối hợp TCA (thuốc hạ thấp ngưỡng co giật và loạn nhịp tim), Flumazenil sẽ bộc lộ độc tính gây co giật dữ dội và loạn nhịp thất của TCA, rất khó điều trị và có thể gây tử vong. Cần cân nhắc kỹ trước khi dùng.",
      "Phương án này không đúng vì \"Tiền sử viêm loét dạ dày tá tràng tiến triển mạn\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Mất hầu như hoàn toàn tác dụng trợ tim",
      "Tăng mạnh lực co bóp và kéo dài thời gian bán thải",
      "Chuyển thành chất đối kháng thụ thể adrenergic",
      "Tăng mạnh độ tan trong lipid và qua hàng rào máu não"
    ],
    "correct": 0,
    "explanation": "Vòng lacton 5 cạnh hoặc 6 cạnh chưa bão hòa (mang liên kết đôi) ở vị trí C17 là cấu trúc thiết yếu quyết định hoạt tính sinh học. Nếu hydro hóa làm bão hòa liên kết đôi này hoặc mở vòng lacton, phân tử sẽ mất hầu như hoàn toàn tác dụng trợ tim.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Vòng lacton 5 cạnh hoặc 6 cạnh chưa bão hòa (mang liên kết đôi) ở vị trí C17 là cấu trúc thiết yếu quyết định hoạt tính sinh học. Nếu hydro hóa làm bão hòa liên kết đôi này hoặc mở vòng lacton, phân tử sẽ mất hầu như hoàn toàn tác dụng trợ tim.",
      "Phương án này không đúng vì \"Tăng mạnh lực co bóp và kéo dài thời gian bán thải\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Chuyển thành chất đối kháng thụ thể adrenergic\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tăng mạnh độ tan trong lipid và qua hàng rào máu não\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Giảm khả năng hấp thu glycosid tại niêm mạc ruột",
      "Tăng nhạy cảm của cơ tim với độc tính loạn nhịp digitalis",
      "Thúc đẩy thoái giáng enzym vận chuyển ion qua màng",
      "Mất hoàn toàn ái lực gắn kết với thụ thể bề mặt tim"
    ],
    "correct": 1,
    "explanation": "Magnesi là cofactor thiết yếu cho hoạt động của enzym Na+/K+-ATPase. Thiếu hụt Mg2+ làm giảm chức năng bơm và hiệp đồng với hạ K+ máu làm tăng nguy cơ ngộ độc Digitalis. Các rối loạn nhịp do ngộ độc Digitalis kèm hạ Mg2+ thường kháng trị với các thuốc chống loạn nhịp nếu chưa bù Mg2+.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Giảm khả năng hấp thu glycosid tại niêm mạc ruột\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Magnesi là cofactor thiết yếu cho hoạt động của enzym Na+/K+-ATPase. Thiếu hụt Mg2+ làm giảm chức năng bơm và hiệp đồng với hạ K+ máu làm tăng nguy cơ ngộ độc Digitalis. Các rối loạn nhịp do ngộ độc Digitalis kèm hạ Mg2+ thường kháng trị với các thuốc chống loạn nhịp nếu chưa bù Mg2+.",
      "Phương án này không đúng vì \"Thúc đẩy thoái giáng enzym vận chuyển ion qua màng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Mất hoàn toàn ái lực gắn kết với thụ thể bề mặt tim\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Rối loạn thị giác nhìn mờ hoặc nhìn màu vàng xanh",
      "Rối loạn tiêu hóa chán ăn, buồn nôn và nôn",
      "Xuất hiện cơn co giật toàn thể kèm ảo giác",
      "Block nhánh trái hoàn toàn kèm tràn dịch màng ngoài tim"
    ],
    "correct": 1,
    "explanation": "Dấu hiệu sớm nhất và nhạy nhất của ngộ độc Digitalis là các rối loạn tiêu hóa: chán ăn, buồn nôn, nôn mửa. Đây là phản ứng do kích thích vùng kích hoạt thụ thể hóa học (chemoreceptor trigger zone - CTZ) ở sàn não thất IV.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Rối loạn thị giác nhìn mờ hoặc nhìn màu vàng xanh\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Dấu hiệu sớm nhất và nhạy nhất của ngộ độc Digitalis là các rối loạn tiêu hóa: chán ăn, buồn nôn, nôn mửa. Đây là phản ứng do kích thích vùng kích hoạt thụ thể hóa học (chemoreceptor trigger zone - CTZ) ở sàn não thất IV.",
      "Phương án này không đúng vì \"Xuất hiện cơn co giật toàn thể kèm ảo giác\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Block nhánh trái hoàn toàn kèm tràn dịch màng ngoài tim\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Nhịp chậm xoang đơn thuần không kèm rối loạn dẫn truyền",
      "Ngoại tâm thu thất đa ổ hoặc nhịp đôi, nhịp ba",
      "Nhịp nhanh kịch phát trên thất do vòng vào lại",
      "Cuồng động nhĩ với tỷ lệ block dẫn truyền 2:1"
    ],
    "correct": 1,
    "explanation": "Ngoại tâm thu thất (đặc biệt là dạng ngoại tâm thu thất nhịp đôi - bigeminy hoặc đa ổ) là rối loạn nhịp thường gặp nhất và đặc trưng nhất của ngộ độc Digitalis, do thuốc làm quá tải Ca2+ nội bào sinh ra các điện thế hậu khử cực muộn (DADs).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Nhịp chậm xoang đơn thuần không kèm rối loạn dẫn truyền\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Ngoại tâm thu thất (đặc biệt là dạng ngoại tâm thu thất nhịp đôi - bigeminy hoặc đa ổ) là rối loạn nhịp thường gặp nhất và đặc trưng nhất của ngộ độc Digitalis, do thuốc làm quá tải Ca2+ nội bào sinh ra các điện thế hậu khử cực muộn (DADs).",
      "Phương án này không đúng vì \"Nhịp nhanh kịch phát trên thất do vòng vào lại\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Cuồng động nhĩ với tỷ lệ block dẫn truyền 2:1\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Bệnh cơ tim phì đại tắc nghẽn đường ra thất trái",
      "Suy tim giảm phân suất tống máu kèm rung nhĩ nhanh",
      "Suy tim tâm trương bảo tồn phân suất tống máu thất",
      "Viêm cơ tim cấp do virus kèm tụt huyết áp tuần hoàn"
    ],
    "correct": 1,
    "explanation": "Chỉ định kinh điển có lợi ích rõ rệt nhất của Digoxin hiện nay là suy tim tâm thu mạn tính (HFrEF) có kèm theo rung nhĩ với đáp ứng tần số thất nhanh, nhờ tác dụng kép: tăng co bóp cơ tim và làm chậm dẫn truyền nhĩ thất kiểm soát tần số thất.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Bệnh cơ tim phì đại tắc nghẽn đường ra thất trái\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Chỉ định kinh điển có lợi ích rõ rệt nhất của Digoxin hiện nay là suy tim tâm thu mạn tính (HFrEF) có kèm theo rung nhĩ với đáp ứng tần số thất nhanh, nhờ tác dụng kép: tăng co bóp cơ tim và làm chậm dẫn truyền nhĩ thất kiểm soát tần số thất.",
      "Phương án này không đúng vì \"Suy tim tâm trương bảo tồn phân suất tống máu thất\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Viêm cơ tim cấp do virus kèm tụt huyết áp tuần hoàn\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Bệnh cơ tim phì đại tắc nghẽn hoặc hẹp van động mạch chủ",
      "Bệnh cơ tim giãn vô căn kèm giảm phân suất tống máu",
      "Suy tim mạn tính sau nhồi máu cơ tim có giảm co bóp",
      "Bệnh tim thiếu máu cục bộ kèm tăng huyết áp nguyên phát"
    ],
    "correct": 0,
    "explanation": "Trong bệnh cơ tim phì đại tắc nghẽn (HOCM), tăng co bóp cơ tim sẽ làm dày thêm vách liên thất và tăng mức độ hẹp đường tống máu thất trái, làm giảm cung lượng tim nghiêm trọng và có thể dẫn đến đột tử.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Trong bệnh cơ tim phì đại tắc nghẽn (HOCM), tăng co bóp cơ tim sẽ làm dày thêm vách liên thất và tăng mức độ hẹp đường tống máu thất trái, làm giảm cung lượng tim nghiêm trọng và có thể dẫn đến đột tử.",
      "Phương án này không đúng vì \"Bệnh cơ tim giãn vô căn kèm giảm phân suất tống máu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Suy tim mạn tính sau nhồi máu cơ tim có giảm co bóp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Bệnh tim thiếu máu cục bộ kèm tăng huyết áp nguyên phát\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Kích hoạt enzym gan thúc đẩy đào thải nhanh digoxin",
      "Tăng dẫn truyền nhĩ thất triệt tiêu tác dụng làm chậm tim",
      "Cạnh tranh trực tiếp với digoxin trên mô cơ vân",
      "Giữ kali máu làm giảm nguy cơ loạn nhịp do digoxin"
    ],
    "correct": 3,
    "explanation": "Spironolacton là thuốc kháng aldosteron giữ kali máu. Việc duy trì nồng độ K+ máu ổn định trong khoảng 4.0 - 5.0 mmol/L giúp bảo vệ enzym Na+/K+-ATPase, ngăn ngừa tình trạng ngộ độc loạn nhịp do Digoxin.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Kích hoạt enzym gan thúc đẩy đào thải nhanh digoxin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tăng dẫn truyền nhĩ thất triệt tiêu tác dụng làm chậm tim\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Cạnh tranh trực tiếp với digoxin trên mô cơ vân\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Spironolacton là thuốc kháng aldosteron giữ kali máu. Việc duy trì nồng độ K+ máu ổn định trong khoảng 4.0 - 5.0 mmol/L giúp bảo vệ enzym Na+/K+-ATPase, ngăn ngừa tình trạng ngộ độc loạn nhịp do Digoxin."
    ]
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
      "Phù mắt cá chân kéo dài kèm tăng men gan ứ mật",
      "Mất vị giác, phát ban ngoài da và giảm bạch cầu",
      "Bão giao cảm bùng phát cơn đau ngực khi ngừng thuốc",
      "Tăng áp lực nội sọ đột ngột gây xuất huyết não màng"
    ],
    "correct": 1,
    "explanation": "Nhóm sulfhydryl (-SH) trong Captopril gắn vào ion Zn2+ của men ACE, nhưng nhóm thiol này cũng chính là thủ phạm gây ra các ADR đặc thù: mất vị giác/vị kim loại (dysgeusia), phát ban da dị ứng và hiếm gặp là giảm bạch cầu hạt. Các ACEI thế hệ sau chứa nhóm carboxyl (Enalapril) hoặc phosphinyl (Fosinopril) ít gặp các tác dụng phụ này hơn.",
    "reference": "Sách Dược lý 2 tr. 67",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Phù mắt cá chân kéo dài kèm tăng men gan ứ mật\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Nhóm sulfhydryl (-SH) trong Captopril gắn vào ion Zn2+ của men ACE, nhưng nhóm thiol này cũng chính là thủ phạm gây ra các ADR đặc thù: mất vị giác/vị kim loại (dysgeusia), phát ban da dị ứng và hiếm gặp là giảm bạch cầu hạt. Các ACEI thế hệ sau chứa nhóm carboxyl (Enalapril) hoặc phosphinyl (Fosinopril) ít gặp các tác dụng phụ này hơn.",
      "Phương án này không đúng vì \"Bão giao cảm bùng phát cơn đau ngực khi ngừng thuốc\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tăng áp lực nội sọ đột ngột gây xuất huyết não màng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
    "reference": "Sách Dược lý 2 tr. 66",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Enalapril và Ramipril\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Captopril và Lisinopril là 2 thuốc ức chế men chuyển duy nhất KHÔNG PHẢI tiền dược (không có đuôi -at), có hoạt tính trực tiếp ngay khi vào cơ thể và đào thải nguyên vẹn. Các thuốc khác (Enalapril -> Enalaprilat, Perindopril -> Perindoprilat, Ramipril -> Ramiprilat) đều là ester tiền dược cần gan thủy phân.",
      "Phương án này không đúng vì \"Perindopril và Fosinopril\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Benazepril và Quinapril\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Ức chế tức thời nút xoang gây ngừng tim đột ngột",
      "Co thắt phế quản cấp tính gây suy hô hấp nặng",
      "Kích hoạt bài tiết renin tái bùng phát cơn tăng huyết áp",
      "Gây tụt áp nhanh kích hoạt phản xạ giao cảm loạn nhịp tim"
    ],
    "correct": 3,
    "explanation": "Nifedipin nang mềm nhỏ dưới lưỡi làm tụt huyết áp quá nhanh và không kiểm soát được, kích hoạt phản xạ giao cảm cường độ cực mạnh gây nhịp tim nhanh, co thắt mạch vành và hiện tượng 'cướp máu', dẫn tới nhồi máu cơ tim và thiếu máu não cục bộ. Phương pháp này đã bị cấm hoàn toàn.",
    "reference": "Sách Dược lý 2 tr. 60",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Ức chế tức thời nút xoang gây ngừng tim đột ngột\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Co thắt phế quản cấp tính gây suy hô hấp nặng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích hoạt bài tiết renin tái bùng phát cơn tăng huyết áp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Nifedipin nang mềm nhỏ dưới lưỡi làm tụt huyết áp quá nhanh và không kiểm soát được, kích hoạt phản xạ giao cảm cường độ cực mạnh gây nhịp tim nhanh, co thắt mạch vành và hiện tượng 'cướp máu', dẫn tới nhồi máu cơ tim và thiếu máu não cục bộ. Phương pháp này đã bị cấm hoàn toàn."
    ]
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
    "reference": "Sách Dược lý 2 tr. 61",
    "distractorExplanations": [
      "Nicardipin truyền tĩnh mạch (IV) là thuốc chẹn kênh calci DHP được ưu tiên hàng đầu trong cấp cứu tăng huyết áp, đột quỵ xuất huyết não và tiền sản giật nặng nhờ tác dụng chọn lọc cao trên mạch máu não và mạch vành, khởi phát nhanh trong vài phút, dễ điều chỉnh liều và không gây ức chế cơ tim.",
      "Phương án này không đúng vì \"Amlodipin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Nimodipin đường uống\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Felodipin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Ức chế phosphodiesterase-5 làm tăng cGMP nội bào",
      "Kích hoạt adenylate cyclase làm tăng cAMP nội bào",
      "Mở kênh kali nhạy cảm ATP gây ưu phân cực màng cơ trơn",
      "Phong bế cạnh tranh thụ thể endothelin ETA ở nội mô"
    ],
    "correct": 2,
    "explanation": "Minoxidil sulfat gắn vào tiểu đơn vị SUR của kênh Kali nhạy cảm ATP (K_ATP channel) trên màng tế bào cơ trơn mạch máu, mở kênh làm ion K+ ùa ra ngoài tế bào, gây hiện tượng ưu phân cực màng (hyperpolarization), đóng kênh Canxi phụ thuộc điện thế và làm giãn cơ trơn tiểu động mạch rất mạnh.",
    "reference": "Sách Dược lý 2 tr. 79",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Ức chế phosphodiesterase-5 làm tăng cGMP nội bào\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích hoạt adenylate cyclase làm tăng cAMP nội bào\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Minoxidil sulfat gắn vào tiểu đơn vị SUR của kênh Kali nhạy cảm ATP (K_ATP channel) trên màng tế bào cơ trơn mạch máu, mở kênh làm ion K+ ùa ra ngoài tế bào, gây hiện tượng ưu phân cực màng (hyperpolarization), đóng kênh Canxi phụ thuộc điện thế và làm giãn cơ trơn tiểu động mạch rất mạnh.",
      "Phương án này không đúng vì \"Phong bế cạnh tranh thụ thể endothelin ETA ở nội mô\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Điều trị hội chứng rậm lông ở phụ nữ mãn kinh",
      "Bào chế dung dịch bôi ngoài điều trị rụng tóc hói đầu",
      "Kích thích mọc lông mày cho người suy giáp trạng",
      "Bào chế kem triệt lông vĩnh viễn nồng độ đậm đặc"
    ],
    "correct": 1,
    "explanation": "Khi dùng đường uống trị THA kháng trị, Minoxidil gây rậm lông mặt, tay chân (hypertrichosis) sau vài tuần. Tác dụng phụ này đã được ứng dụng để bào chế dung dịch/bọt bôi ngoài da (Minoxidil 2%, 5%) kích thích mọc tóc trong điều trị chứng rụng tóc từng mảng và hói đầu di truyền.",
    "reference": "Sách Dược lý 2 tr. 80",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Điều trị hội chứng rậm lông ở phụ nữ mãn kinh\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Khi dùng đường uống trị THA kháng trị, Minoxidil gây rậm lông mặt, tay chân (hypertrichosis) sau vài tuần. Tác dụng phụ này đã được ứng dụng để bào chế dung dịch/bọt bôi ngoài da (Minoxidil 2%, 5%) kích thích mọc tóc trong điều trị chứng rụng tóc từng mảng và hói đầu di truyền.",
      "Phương án này không đúng vì \"Kích thích mọc lông mày cho người suy giáp trạng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Bào chế kem triệt lông vĩnh viễn nồng độ đậm đặc\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Thuốc kích thích alpha-2 trung ương hoặc chẹn beta liều cao",
      "Thuốc lợi tiểu thiazid hạ áp qua đào thải natri ở thận",
      "Thuốc ức chế men chuyển ngăn tạo angiotensin II",
      "Thuốc chẹn thụ thể angiotensin II đối kháng tại mạch máu"
    ],
    "correct": 0,
    "explanation": "Ngừng đột ngột Clonidin (thuốc chủ vận alpha-2 trung ương) hoặc thuốc chẹn beta liều cao gây ra hiện tượng tăng huyết áp dội ngược (Rebound hypertension) do sự tăng vọt catecholamin nội sinh tác động lên các thụ thể đã bị tăng sinh (up-regulation). Do đó luôn phải giảm liều từ từ (tapering) trong 1-2 tuần.",
    "reference": "Sách Dược lý 2 tr. 75",
    "distractorExplanations": [
      "Ngừng đột ngột Clonidin (thuốc chủ vận alpha-2 trung ương) hoặc thuốc chẹn beta liều cao gây ra hiện tượng tăng huyết áp dội ngược (Rebound hypertension) do sự tăng vọt catecholamin nội sinh tác động lên các thụ thể đã bị tăng sinh (up-regulation). Do đó luôn phải giảm liều từ từ (tapering) trong 1-2 tuần.",
      "Phương án này không đúng vì \"Thuốc lợi tiểu thiazid hạ áp qua đào thải natri ở thận\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thuốc ức chế men chuyển ngăn tạo angiotensin II\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thuốc chẹn thụ thể angiotensin II đối kháng tại mạch máu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Phối hợp thuốc ức chế men chuyển cùng thuốc chẹn thụ thể ARB",
      "Phối hợp thuốc ức chế men chuyển cùng thuốc chẹn calci DHP",
      "Phối hợp thuốc chẹn thụ thể ARB cùng thuốc lợi tiểu thiazid",
      "Phối hợp thuốc chẹn calci DHP cùng thuốc chẹn beta-1"
    ],
    "correct": 0,
    "explanation": "Nghiên cứu ONTARGET và hướng dẫn quốc tế khuyến cáo KHÔNG ĐƯỢC PHỐI HỢP ACEI VÀ ARB cùng lúc vì cùng can thiệp vào một trục sinh học (Dual-RAAS blockade), không làm giảm thêm tỷ lệ tử vong nhưng làm tăng gấp đôi nguy cơ suy thận cấp, tụt huyết áp kịch phát và tăng Kali máu nguy hiểm.",
    "reference": "Sách Dược lý 2 tr. 72",
    "distractorExplanations": [
      "Nghiên cứu ONTARGET và hướng dẫn quốc tế khuyến cáo KHÔNG ĐƯỢC PHỐI HỢP ACEI VÀ ARB cùng lúc vì cùng can thiệp vào một trục sinh học (Dual-RAAS blockade), không làm giảm thêm tỷ lệ tử vong nhưng làm tăng gấp đôi nguy cơ suy thận cấp, tụt huyết áp kịch phát và tăng Kali máu nguy hiểm.",
      "Phương án này không đúng vì \"Phối hợp thuốc ức chế men chuyển cùng thuốc chẹn calci DHP\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Phối hợp thuốc chẹn thụ thể ARB cùng thuốc lợi tiểu thiazid\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Phối hợp thuốc chẹn calci DHP cùng thuốc chẹn beta-1\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Chẹn kênh calci typ T làm chậm khử cực tâm trương cơ tim",
      "Ức chế chọn lọc kênh If tại nút xoang làm chậm nhịp tim",
      "Chẹn thụ thể beta-1 giao cảm ở màng tế bào nút xoang",
      "Kích hoạt dòng kali phụ thuộc acetylcholin kéo dài trơ tim"
    ],
    "correct": 1,
    "explanation": "Ivabradine ức chế đặc hiệu dòng If (dòng ion Na+/K+ đi vào chịu trách nhiệm cho pha khử cực chậm tâm trương) tại nút xoang, giúp giảm nhịp tim thuần túy mà không ảnh hưởng đến co bóp cơ tim hay huyết áp.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Chẹn kênh calci typ T làm chậm khử cực tâm trương cơ tim\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Ivabradine ức chế đặc hiệu dòng If (dòng ion Na+/K+ đi vào chịu trách nhiệm cho pha khử cực chậm tâm trương) tại nút xoang, giúp giảm nhịp tim thuần túy mà không ảnh hưởng đến co bóp cơ tim hay huyết áp.",
      "Phương án này không đúng vì \"Chẹn thụ thể beta-1 giao cảm ở màng tế bào nút xoang\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích hoạt dòng kali phụ thuộc acetylcholin kéo dài trơ tim\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Hiện tượng chói sáng mắt khi thay đổi đột ngột ánh sáng",
      "Mất hoàn toàn vị giác kèm theo rối loạn cảm giác mùi vị",
      "Ảo giác thị giác nhìn mọi vật đổi thành sắc vàng hoặc xanh",
      "Giảm thính lực một bên kèm theo ù tai dạng tiếng ve kêu"
    ],
    "correct": 0,
    "explanation": "Hiện tượng chói sáng mắt (phosphenes) là tác dụng phụ đặc trưng của Ivabradine (gặp ở khoảng 15% bệnh nhân), do thuốc ức chế dòng dòng kênh h ở võng mạc (tương tự dòng If ở nút xoang).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Hiện tượng chói sáng mắt (phosphenes) là tác dụng phụ đặc trưng của Ivabradine (gặp ở khoảng 15% bệnh nhân), do thuốc ức chế dòng dòng kênh h ở võng mạc (tương tự dòng If ở nút xoang).",
      "Phương án này không đúng vì \"Mất hoàn toàn vị giác kèm theo rối loạn cảm giác mùi vị\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ảo giác thị giác nhìn mọi vật đổi thành sắc vàng hoặc xanh\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Giảm thính lực một bên kèm theo ù tai dạng tiếng ve kêu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Ức chế thụ thể ryanodine ngăn giải phóng ion calci vào bào tương",
      "Ức chế vận chuyển acid béo và gia tăng dự trữ glycogen",
      "Ức chế 3-ketoacyl-CoA thiolase, ưu tiên oxy hóa glucose"
    ],
    "correct": 3,
    "explanation": "Trimetazidine ức chế chọn lọc enzym 3-ketoacyl-CoA thiolase (3-KAT) trong chuỗi beta-oxy hóa acid béo. Điều này thúc đẩy tế bào cơ tim chuyển sang oxy hóa glucose (tiêu thụ ít oxy hơn trên mỗi phân tử ATP tạo ra), bảo vệ cơ tim trong điều kiện thiếu máu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Kích thích enzym ty thể phân giải glycogen thành acid lactic\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ức chế thụ thể ryanodine ngăn giải phóng ion calci vào bào tương\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ức chế vận chuyển acid béo và gia tăng dự trữ glycogen\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Trimetazidine ức chế chọn lọc enzym 3-ketoacyl-CoA thiolase (3-KAT) trong chuỗi beta-oxy hóa acid béo. Điều này thúc đẩy tế bào cơ tim chuyển sang oxy hóa glucose (tiêu thụ ít oxy hơn trên mỗi phân tử ATP tạo ra), bảo vệ cơ tim trong điều kiện thiếu máu."
    ]
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
      "Ức chế phosphodiesterase-3 tăng AMP vòng tăng dẫn truyền nhĩ thất",
      "Gắn thụ thể A1, kích hoạt dòng Kali và ức chế dòng Calci nút AV",
      "Chẹn kênh Natri nhanh ở mạng Purkinje kéo dài dẫn truyền thất",
      "Đối kháng thụ thể beta-1 giao cảm làm giảm co bóp cơ tim tức thì"
    ],
    "correct": 1,
    "explanation": "Adenosin gắn vào thụ thể A1 tại nút nhĩ thất, liên kết với protein Gi làm giảm cAMP, mở kênh K+ phụ thuộc acetylcholin/adenosin gây ưu phân cực màng và ức chế dòng Ca2+, làm ngưng trệ dẫn truyền qua nút nhĩ thất lập tức để cắt vòng vào lại trong PSVT.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Ức chế phosphodiesterase-3 tăng AMP vòng tăng dẫn truyền nhĩ thất\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Adenosin gắn vào thụ thể A1 tại nút nhĩ thất, liên kết với protein Gi làm giảm cAMP, mở kênh K+ phụ thuộc acetylcholin/adenosin gây ưu phân cực màng và ức chế dòng Ca2+, làm ngưng trệ dẫn truyền qua nút nhĩ thất lập tức để cắt vòng vào lại trong PSVT.",
      "Phương án này không đúng vì \"Chẹn kênh Natri nhanh ở mạng Purkinje kéo dài dẫn truyền thất\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Đối kháng thụ thể beta-1 giao cảm làm giảm co bóp cơ tim tức thì\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Gắn kết protein huyết tương trên chín mươi chín phần trăm",
      "Chuyển hóa qua gan chậm với thời gian bán thải trên ba ngày",
      "Độ tan trong nước kém bắt buộc phải hòa tan trong nhũ dịch",
      "Thời gian bán thải dưới mười giây đòi hỏi tiêm bolus nhanh"
    ],
    "correct": 3,
    "explanation": "Thời gian bán thải của Adenosin trong tuần hoàn chỉ dưới 10 giây do bị hồng cầu và tế bào nội mô bắt giữ và thoái biến nhanh bởi enzym adenosin deaminase. Do đó, bắt buộc phải tiêm bolus tĩnh mạch cực nhanh (1-2 giây) qua đường truyền gần tim kèm xả ngay 20mL NaCl 0.9%.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Gắn kết protein huyết tương trên chín mươi chín phần trăm\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Chuyển hóa qua gan chậm với thời gian bán thải trên ba ngày\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Độ tan trong nước kém bắt buộc phải hòa tan trong nhũ dịch\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Thời gian bán thải của Adenosin trong tuần hoàn chỉ dưới 10 giây do bị hồng cầu và tế bào nội mô bắt giữ và thoái biến nhanh bởi enzym adenosin deaminase. Do đó, bắt buộc phải tiêm bolus tĩnh mạch cực nhanh (1-2 giây) qua đường truyền gần tim kèm xả ngay 20mL NaCl 0.9%."
    ]
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
      "Kéo dài thời gian tái cực và kéo dài khoảng QT trên điện tim",
      "Rút ngắn thời gian điện thế hoạt động tại mô cơ tâm thất",
      "Làm chậm dẫn truyền qua nút nhĩ thất và tăng thời kỳ trơ",
      "Chẹn thụ thể beta giao cảm làm chậm tần số phát nhịp nút xoang"
    ],
    "correct": 0,
    "explanation": "Các thuốc Nhóm IA và Nhóm III làm kéo dài thời gian điện thế hoạt động và khoảng QT. Khi khoảng QT kéo dài (đặc biệt kèm hạ K+, hạ Mg2+ hoặc nhịp chậm), điện thế hậu khử cực sớm (EADs) dễ xuất hiện kích hoạt cơn nhịp nhanh thất xoắn đỉnh (Torsades de Pointes).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Các thuốc Nhóm IA và Nhóm III làm kéo dài thời gian điện thế hoạt động và khoảng QT. Khi khoảng QT kéo dài (đặc biệt kèm hạ K+, hạ Mg2+ hoặc nhịp chậm), điện thế hậu khử cực sớm (EADs) dễ xuất hiện kích hoạt cơn nhịp nhanh thất xoắn đỉnh (Torsades de Pointes).",
      "Phương án này không đúng vì \"Rút ngắn thời gian điện thế hoạt động tại mô cơ tâm thất\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Làm chậm dẫn truyền qua nút nhĩ thất và tăng thời kỳ trơ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Chẹn thụ thể beta giao cảm làm chậm tần số phát nhịp nút xoang\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Rút ngắn thời gian dẫn truyền và giảm điện thế hoạt động",
      "Chẹn chọn lọc kênh calci mà không gây biến đổi phức bộ QRS",
      "Ức chế mạnh pha 0 giãn rộng QRS mà ít đổi điện thế hoạt động",
      "Kéo dài thời gian tái cực mà không thay đổi dẫn truyền nhĩ"
    ],
    "correct": 2,
    "explanation": "Nhóm IC (Flecainid, Propafenon) có động học gắn - tách khỏi kênh Na+ rất chậm (chẹn mạnh nhất pha 0), làm chậm dẫn truyền nội thất và giãn rộng phức bộ QRS rõ rệt, nhưng hầu như không làm thay đổi thời gian điện thế hoạt động (APD).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Rút ngắn thời gian dẫn truyền và giảm điện thế hoạt động\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Chẹn chọn lọc kênh calci mà không gây biến đổi phức bộ QRS\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Nhóm IC (Flecainid, Propafenon) có động học gắn - tách khỏi kênh Na+ rất chậm (chẹn mạnh nhất pha 0), làm chậm dẫn truyền nội thất và giãn rộng phức bộ QRS rõ rệt, nhưng hầu như không làm thay đổi thời gian điện thế hoạt động (APD).",
      "Phương án này không đúng vì \"Kéo dài thời gian tái cực mà không thay đổi dẫn truyền nhĩ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Co thắt tiểu phế quản tận cùng gây suy hô hấp cấp",
      "Kéo nước vào lòng mạch làm tăng thể tích tuần hoàn",
      "Làm giảm tưới máu qua động mạch vành gây hoại tử tim",
      "Ức chế bài xuất nước tiểu gây ứ đọng trong bàng quang"
    ],
    "correct": 1,
    "explanation": "Khi truyền tĩnh mạch, dung dịch ưu trương Mannitol phân bố ở khoang ngoại bào và kéo một lượng nước khổng lồ từ mô kẽ vào lòng mạch. Hiện tượng tăng gánh thể tích tuần hoàn cấp tính này sẽ đẩy bệnh nhân suy tim vào cơn phù phổi cấp và trụy tim mạch tử vong.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Co thắt tiểu phế quản tận cùng gây suy hô hấp cấp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Khi truyền tĩnh mạch, dung dịch ưu trương Mannitol phân bố ở khoang ngoại bào và kéo một lượng nước khổng lồ từ mô kẽ vào lòng mạch. Hiện tượng tăng gánh thể tích tuần hoàn cấp tính này sẽ đẩy bệnh nhân suy tim vào cơn phù phổi cấp và trụy tim mạch tử vong.",
      "Phương án này không đúng vì \"Làm giảm tưới máu qua động mạch vành gây hoại tử tim\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ức chế bài xuất nước tiểu gây ứ đọng trong bàng quang\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Tăng thải trừ acid uric máu và gây hạ đường huyết",
      "Tăng nồng độ kali máu và tăng thải calci qua gan",
      "Tăng acid uric máu và tăng nồng độ đường huyết",
      "Nhiễm toan lactic máu và giảm triglycerid huyết thanh"
    ],
    "correct": 2,
    "explanation": "Cả Thiazid và Lợi tiểu quai đều cạnh tranh thải trừ với acid uric tại ống lượn gần, dẫn tới tăng acid uric máu có thể khởi phát cơn gút cấp. Đồng thời, thuốc gây hạ K+ máu làm giảm bài tiết insulin từ tế bào beta đảo tụy, gây tăng đường huyết.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Tăng thải trừ acid uric máu và gây hạ đường huyết\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tăng nồng độ kali máu và tăng thải calci qua gan\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Cả Thiazid và Lợi tiểu quai đều cạnh tranh thải trừ với acid uric tại ống lượn gần, dẫn tới tăng acid uric máu có thể khởi phát cơn gút cấp. Đồng thời, thuốc gây hạ K+ máu làm giảm bài tiết insulin từ tế bào beta đảo tụy, gây tăng đường huyết.",
      "Phương án này không đúng vì \"Nhiễm toan lactic máu và giảm triglycerid huyết thanh\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Furosemid dùng đơn độc đường uống",
      "Acetazolamid dùng đơn độc đường uống",
      "Spironolacton dùng đơn độc hoặc phối hợp",
      "Hydrochlorothiazid dùng phối hợp chẹn beta"
    ],
    "correct": 2,
    "explanation": "Ở bệnh nhân xơ gan cổ trướng, gan giảm thoái biến aldosteron dẫn đến tình trạng cường aldosteron thứ phát trầm trọng. Spironolacton đối kháng trực tiếp aldosteron là nền tảng điều trị (thường phối hợp với Furosemid theo tỷ lệ vàng 100:40 để duy trì cân bằng kali máu).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Furosemid dùng đơn độc đường uống\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Acetazolamid dùng đơn độc đường uống\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Ở bệnh nhân xơ gan cổ trướng, gan giảm thoái biến aldosteron dẫn đến tình trạng cường aldosteron thứ phát trầm trọng. Spironolacton đối kháng trực tiếp aldosteron là nền tảng điều trị (thường phối hợp với Furosemid theo tỷ lệ vàng 100:40 để duy trì cân bằng kali máu).",
      "Phương án này không đúng vì \"Hydrochlorothiazid dùng phối hợp chẹn beta\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "NSAID ức chế tổng hợp prostaglandin giãn mạch tại thận",
      "NSAID cạnh tranh trên hệ đồng vận chuyển Na+/K+/2Cl-",
      "NSAID kích thích vỏ thượng thận tăng tiết aldosteron",
      "NSAID tạo phức chelate làm giảm hấp thu Furosemid"
    ],
    "correct": 0,
    "explanation": "Furosemid kích thích tổng hợp các Prostaglandin giãn mạch (PGE2, PGI2) tại thận, giúp tăng dòng máu qua thận và tăng lọc. NSAID ức chế enzym COX làm giảm tổng hợp prostaglandin, gây co tiểu động mạch đến và triệt tiêu tác dụng lợi niệu này.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Furosemid kích thích tổng hợp các Prostaglandin giãn mạch (PGE2, PGI2) tại thận, giúp tăng dòng máu qua thận và tăng lọc. NSAID ức chế enzym COX làm giảm tổng hợp prostaglandin, gây co tiểu động mạch đến và triệt tiêu tác dụng lợi niệu này.",
      "Phương án này không đúng vì \"NSAID cạnh tranh trên hệ đồng vận chuyển Na+/K+/2Cl-\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"NSAID kích thích vỏ thượng thận tăng tiết aldosteron\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"NSAID tạo phức chelate làm giảm hấp thu Furosemid\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Thuốc lợi tiểu quai tác dụng mạnh",
      "Thuốc lợi tiểu Thiazid và giống Thiazid",
      "Thuốc lợi tiểu thẩm thấu qua đường uống",
      "Thuốc kháng thụ thể chọn lọc Aldosteron"
    ],
    "correct": 1,
    "explanation": "Thiazid làm tăng tái hấp thu Ca2+ ở ống lượn xa vào máu, làm giảm đáng kể nồng độ Calci đào thải trong nước tiểu (giảm calci niệu), từ đó làm giảm sự bão hòa và ngăn ngừa tái phát sỏi calci oxalat đường tiết niệu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Thuốc lợi tiểu quai tác dụng mạnh\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Thiazid làm tăng tái hấp thu Ca2+ ở ống lượn xa vào máu, làm giảm đáng kể nồng độ Calci đào thải trong nước tiểu (giảm calci niệu), từ đó làm giảm sự bão hòa và ngăn ngừa tái phát sỏi calci oxalat đường tiết niệu.",
      "Phương án này không đúng vì \"Thuốc lợi tiểu thẩm thấu qua đường uống\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thuốc kháng thụ thể chọn lọc Aldosteron\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Nhiễm khuẩn chủng Helicobacter pylori đa kháng",
      "Sử dụng dài ngày các thuốc chống viêm không steroid NSAID",
      "Tăng tiết acid trong hội chứng Zollinger-Ellison",
      "Trào ngược dạ dày thực quản có biến chứng Barrett"
    ],
    "correct": 1,
    "explanation": "NSAID ức chế COX-1 làm cạn kiệt prostaglandin bảo vệ niêm mạc dạ dày. Misoprostol thay thế PGE1 nội sinh, kích thích tế bào biểu mô nhầy tiết chất nhầy và HCO3-, đồng thời giảm tiết acid, chuyên dùng dự phòng loét do NSAID.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Nhiễm khuẩn chủng Helicobacter pylori đa kháng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "NSAID ức chế COX-1 làm cạn kiệt prostaglandin bảo vệ niêm mạc dạ dày. Misoprostol thay thế PGE1 nội sinh, kích thích tế bào biểu mô nhầy tiết chất nhầy và HCO3-, đồng thời giảm tiết acid, chuyên dùng dự phòng loét do NSAID.",
      "Phương án này không đúng vì \"Tăng tiết acid trong hội chứng Zollinger-Ellison\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Trào ngược dạ dày thực quản có biến chứng Barrett\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Phụ nữ đái tháo đường thai kỳ đang điều trị insulin",
      "Phụ nữ trong giai đoạn cho con bú trong năm đầu tiên",
      "Bệnh nhân có sẹo phẫu thuật lấy thai cũ trên hai năm",
      "Phụ nữ có thai do nguy cơ co bóp tử cung gây sảy thai"
    ],
    "correct": 3,
    "explanation": "Misoprostol kích thích mạnh thụ thể prostanoid trên cơ trơn tử cung gây co bóp tử cung dữ dội, gây sảy thai, chuyển dạ sớm hoặc dị tật thai nhi (hội chứng Moebius). Thuốc chống chỉ định tuyệt đối cho phụ nữ mang thai (trừ khi dùng phá thai nội khoa).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Phụ nữ đái tháo đường thai kỳ đang điều trị insulin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Phụ nữ trong giai đoạn cho con bú trong năm đầu tiên\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Bệnh nhân có sẹo phẫu thuật lấy thai cũ trên hai năm\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Misoprostol kích thích mạnh thụ thể prostanoid trên cơ trơn tử cung gây co bóp tử cung dữ dội, gây sảy thai, chuyển dạ sớm hoặc dị tật thai nhi (hội chứng Moebius). Thuốc chống chỉ định tuyệt đối cho phụ nữ mang thai (trừ khi dùng phá thai nội khoa)."
    ]
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
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phác đồ 4 thuốc có Bismuth kinh điển gồm: một thuốc PPI (liều chuẩn 2 lần/ngày) + Bismuth subcitrat/subsalicylat + Metronidazol + Tetracyclin dùng trong 14 ngày, hiện là phác đồ hàng đầu tại vùng có tỷ lệ kháng Clarithromycin cao.",
      "Phương án này không đúng vì \"PPI + Amoxicillin + Clarithromycin + Levofloxacin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kháng H2 + Bismuth + Ciprofloxacin + Doxycyclin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Sucralfat tạo phức hợp gel bao phủ ổ loét và bảo vệ niêm mạc trong môi trường acid, không có tác dụng ức chế bài tiết acid dịch vị."
    ]
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
      "Cạnh tranh liên kết với albumin huyết tương",
      "Ức chế bơm vận chuyển P-glycoprotein ở đường mật",
      "Ức chế enzym CYP2C19 làm giảm hoạt hóa clopidogrel",
      "Cảm ứng enzym CYP3A4 làm tăng đào thải thuốc"
    ],
    "correct": 2,
    "explanation": "Clopidogrel là tiền chất cần CYP2C19 chuyển hóa thành chất có hoạt tính. Omeprazol và Esomeprazol ức chế CYP2C19 làm giảm nồng độ chất chuyển hóa hoạt tính của Clopidogrel, làm giảm tác dụng chống đông tăng nguy cơ huyết khối stent.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Cạnh tranh liên kết với albumin huyết tương\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ức chế bơm vận chuyển P-glycoprotein ở đường mật\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Clopidogrel là tiền chất cần CYP2C19 chuyển hóa thành chất có hoạt tính. Omeprazol và Esomeprazol ức chế CYP2C19 làm giảm nồng độ chất chuyển hóa hoạt tính của Clopidogrel, làm giảm tác dụng chống đông tăng nguy cơ huyết khối stent.",
      "Phương án này không đúng vì \"Cảm ứng enzym CYP3A4 làm tăng đào thải thuốc\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Montelukast\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Zafirlukast\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Pranlukast\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Zileuton là thuốc duy nhất ức chế trực tiếp enzym 5-lipoxygenase (5-LOX), ngăn chặn sự hình thành của tất cả các loại leukotriene (cả LTB4 và các cysteinyl leukotriene LTC4, LTD4, LTE4). Thuốc cần theo dõi men gan vì có độc tính gan."
    ]
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
      "Kháng sinh Amoxicillin phổ rộng",
      "Kháng sinh Azithromycin nhóm macrolid",
      "Kháng sinh Ciprofloxacin",
      "Kháng sinh Cephalexin thế hệ một"
    ],
    "correct": 2,
    "explanation": "Ciprofloxacin (kháng sinh Quinolon) và Erythromycin (Macrolid) là các chất ức chế mạnh isoenzym CYP1A2 tại gan - con đường chuyển hóa chính của Theophyllin. Phối hợp này làm giảm độ thanh thải của Theophyllin từ 30-50%, gây ngộ độc nghiêm trọng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Kháng sinh Amoxicillin phổ rộng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kháng sinh Azithromycin nhóm macrolid\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Ciprofloxacin (kháng sinh Quinolon) và Erythromycin (Macrolid) là các chất ức chế mạnh isoenzym CYP1A2 tại gan - con đường chuyển hóa chính của Theophyllin. Phối hợp này làm giảm độ thanh thải của Theophyllin từ 30-50%, gây ngộ độc nghiêm trọng.",
      "Phương án này không đúng vì \"Kháng sinh Cephalexin thế hệ một\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Không gắn vào thụ thể opioid mu nên không gây nghiện",
      "Gây tê chọn lọc thụ thể nhận cảm ho ở niêm mạc hô hấp",
      "Tác dụng giảm đau trung ương mạnh tương đương morphin",
      "Gây co đồng tử hình mũi kim và ức chế trung tâm hô hấp"
    ],
    "correct": 0,
    "explanation": "Dextromethorphan là đồng phân d của levorphanol. Thuốc ức chế trung tâm ho ở hành não nhưng hầu như không tác động lên thụ thể opioid mu ở liều điều trị, không có tác dụng giảm đau, không gây nghiện và không gây táo bón như Codein.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Dextromethorphan là đồng phân d của levorphanol. Thuốc ức chế trung tâm ho ở hành não nhưng hầu như không tác động lên thụ thể opioid mu ở liều điều trị, không có tác dụng giảm đau, không gây nghiện và không gây táo bón như Codein.",
      "Phương án này không đúng vì \"Gây tê chọn lọc thụ thể nhận cảm ho ở niêm mạc hô hấp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tác dụng giảm đau trung ương mạnh tương đương morphin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Gây co đồng tử hình mũi kim và ức chế trung tâm hô hấp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Phụ nữ tiền mãn kinh có rối loạn vận mạch bốc hỏa",
      "Nam giới trưởng thành có bệnh viêm gan tiến triển",
      "Trẻ em dưới hai tuổi có nguy cơ suy hô hấp tử vong",
      "Người cao tuổi có tiền sử chấn thương gãy xương đùi"
    ],
    "correct": 2,
    "explanation": "FDA đã ban hành cảnh báo hộp đen chống chỉ định Promethazin cho trẻ em dưới 2 tuổi vì thuốc có thể gây ức chế hô hấp kịch phát dẫn đến ngạt thở và tử vong đột ngột (hội chứng đột tử ở trẻ nhỏ - SIDS).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Phụ nữ tiền mãn kinh có rối loạn vận mạch bốc hỏa\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Nam giới trưởng thành có bệnh viêm gan tiến triển\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "FDA đã ban hành cảnh báo hộp đen chống chỉ định Promethazin cho trẻ em dưới 2 tuổi vì thuốc có thể gây ức chế hô hấp kịch phát dẫn đến ngạt thở và tử vong đột ngột (hội chứng đột tử ở trẻ nhỏ - SIDS).",
      "Phương án này không đúng vì \"Người cao tuổi có tiền sử chấn thương gãy xương đùi\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Loratadin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Fexofenadin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Azelastin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Cetirizin là chất chuyển hóa mang gốc acid carboxyl của Hydroxyzin. Mặc dù thuộc thế hệ 2 nhưng ở khoảng 10% người dùng, Cetirizin vẫn có thể qua não một lượng nhỏ và gây buồn ngủ thoáng qua (nhiều hơn so với Fexofenadin hay Loratadin)."
    ]
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
      "Kích thích chọn lọc thụ thể Dopamin D2 ở tuyến yên",
      "Đối kháng thụ thể Serotonin năm HT hai vùng dưới đồi",
      "Ức chế dẫn truyền thụ thể Leptin tại mô mỡ toàn thân",
      "Kích thích nhạy cảm thụ thể Insulin tại tế bào cơ vân"
    ],
    "correct": 1,
    "explanation": "Cyproheptadin vừa kháng H1 vừa là chất đối kháng mạnh thụ thể Serotonin 5-HT2. Serotonin kích thích cảm giác no tại vùng dưới đồi; chẹn thụ thể này sẽ kích thích trung tâm thèm ăn, làm bệnh nhân ăn nhiều và tăng cân nhanh chóng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Kích thích chọn lọc thụ thể Dopamin D2 ở tuyến yên\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Cyproheptadin vừa kháng H1 vừa là chất đối kháng mạnh thụ thể Serotonin 5-HT2. Serotonin kích thích cảm giác no tại vùng dưới đồi; chẹn thụ thể này sẽ kích thích trung tâm thèm ăn, làm bệnh nhân ăn nhiều và tăng cân nhanh chóng.",
      "Phương án này không đúng vì \"Ức chế dẫn truyền thụ thể Leptin tại mô mỡ toàn thân\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích thích nhạy cảm thụ thể Insulin tại tế bào cơ vân\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
  },
  {
    "id": 213,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Một bệnh nhân xơ gan mất bù có biểu hiện tiền hôn mê gan do tăng amoniac máu, đồng thời xét nghiệm phân phát hiện thể bào nang Entamoeba histolytica. Kháng sinh aminoglycosid dùng đường uống không hấp thu vào máu được chỉ định để giải quyết đồng thời cả hai tình trạng này là:",
    "options": [
      "Neomycin sulfat",
      "Tobramycin sulfat",
      "Kanamycin sulfat",
      "Paromomycin sulfat"
    ],
    "correct": 3,
    "explanation": "Paromomycin là kháng sinh aminoglycosid dùng đường uống, hầu như không hấp thu qua niêm mạc ruột non (< 1%), giữ nguyên nồng độ cao trong lòng ruột để tiêu diệt thể amip lòng ruột và diệt vi khuẩn sinh amoniac trong điều trị bệnh não gan.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Neomycin sulfat\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tobramycin sulfat\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kanamycin sulfat\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Paromomycin là kháng sinh aminoglycosid dùng đường uống, hầu như không hấp thu qua niêm mạc ruột non (< 1%), giữ nguyên nồng độ cao trong lòng ruột để tiêu diệt thể amip lòng ruột và diệt vi khuẩn sinh amoniac trong điều trị bệnh não gan."
    ]
  },
  {
    "id": 214,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Phản ứng Mazzotti là một phản ứng dị ứng toàn thân nghiêm trọng có thể xảy ra khi dùng Ivermectin hoặc Diethylcarbamazin do nguyên nhân nào?",
    "options": [
      "Độc tính trực tiếp của phân tử thuốc gây tổn thương mô",
      "Kháng nguyên giải phóng ồ ạt khi ấu trùng giun bị tiêu diệt",
      "Tan máu cấp tính nội mạch ở bệnh nhân thiếu hụt men G6PD",
      "Tương tác ức chế chuyển hóa enzym cytochrom P450 tại gan"
    ],
    "correct": 1,
    "explanation": "Phản ứng Mazzotti xảy ra ở bệnh nhân nhiễm nặng giun chỉ Onchocerca khi dùng thuốc diệt ấu trùng giun (Ivermectin hoặc Diethylcarbamazin DEC). Lượng lớn ấu trùng chết giải phóng kháng nguyên lạ ồ ạt kích hoạt phản ứng viêm miễn dịch toàn thân dữ dội (sốt, tụt huyết áp, phù, co thắt phế quản). Cần chuẩn bị sẵn Corticosteroid và kháng histamin để xử trí.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Độc tính trực tiếp của phân tử thuốc gây tổn thương mô\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phản ứng Mazzotti xảy ra ở bệnh nhân nhiễm nặng giun chỉ Onchocerca khi dùng thuốc diệt ấu trùng giun (Ivermectin hoặc Diethylcarbamazin DEC). Lượng lớn ấu trùng chết giải phóng kháng nguyên lạ ồ ạt kích hoạt phản ứng viêm miễn dịch toàn thân dữ dội (sốt, tụt huyết áp, phù, co thắt phế quản). Cần chuẩn bị sẵn Corticosteroid và kháng histamin để xử trí.",
      "Phương án này không đúng vì \"Tan máu cấp tính nội mạch ở bệnh nhân thiếu hụt men G6PD\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tương tác ức chế chuyển hóa enzym cytochrom P450 tại gan\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Diethylcarbamazin đường uống",
      "Pyrantel pamoat dạng hỗn dịch",
      "Diloxanid furoat dạng viên nén",
      "Niclosamid dạng viên nhai"
    ],
    "correct": 0,
    "explanation": "Diethylcarbamazin (DEC) làm thay đổi bề mặt màng của ấu trùng giun chỉ bạch huyết khiến chúng dễ bị hệ miễn dịch thực bào tiêu diệt, đồng thời làm tê liệt giun chỉ trưởng thành, là thuốc số 1 trong phác đồ điều trị và thanh toán bệnh giun chỉ bạch huyết.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Diethylcarbamazin (DEC) làm thay đổi bề mặt màng của ấu trùng giun chỉ bạch huyết khiến chúng dễ bị hệ miễn dịch thực bào tiêu diệt, đồng thời làm tê liệt giun chỉ trưởng thành, là thuốc số 1 trong phác đồ điều trị và thanh toán bệnh giun chỉ bạch huyết.",
      "Phương án này không đúng vì \"Pyrantel pamoat dạng hỗn dịch\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Diloxanid furoat dạng viên nén\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Niclosamid dạng viên nhai\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Tinidazol\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Diloxanid furoat là thuốc diệt amip lòng ruột (luminal amebicide) kinh điển. Tại lòng ruột non, thuốc bị thủy phân giải phóng diloxanid tự do tác động trực tiếp tiêu diệt các bào nang amip trong lòng đại tràng, tỷ lệ tiệt trừ đạt trên 90% ở người mang trùng không triệu chứng.",
      "Phương án này không đúng vì \"Emetin hydroclorid\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Secnidazol\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Kích thích tế bào gan tăng bài xuất cholesterol vào mật",
      "Gắn acid mật trong ruột, thúc đẩy gan dùng cholesterol tạo mật",
      "Ức chế quá trình đóng gói và bài xuất chylomicron vào ruột",
      "Tăng hoạt tính thủy phân của enzym Lipoprotein Lipase"
    ],
    "correct": 1,
    "explanation": "Cholestyramin là nhựa trao đổi anion không hấp thu. Trong ruột non, thuốc gắn không thuận nghịch với acid mật mang điện tích âm, tống ra ngoài theo phân. Mất acid mật làm gián đoạn chu kỳ gan-ruột, kích thích gan huy động cholesterol nội bào để tổng hợp acid mật mới, làm tăng thụ thể LDL kéo LDL-C máu giảm.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Kích thích tế bào gan tăng bài xuất cholesterol vào mật\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Cholestyramin là nhựa trao đổi anion không hấp thu. Trong ruột non, thuốc gắn không thuận nghịch với acid mật mang điện tích âm, tống ra ngoài theo phân. Mất acid mật làm gián đoạn chu kỳ gan-ruột, kích thích gan huy động cholesterol nội bào để tổng hợp acid mật mới, làm tăng thụ thể LDL kéo LDL-C máu giảm.",
      "Phương án này không đúng vì \"Ức chế quá trình đóng gói và bài xuất chylomicron vào ruột\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tăng hoạt tính thủy phân của enzym Lipoprotein Lipase\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Ức chế enzym cytochrom P450 chuyển hóa thuốc tại gan",
      "Phá hủy cấu trúc của các thuốc mang tính kiềm tại dạ dày",
      "Cản trở hấp thu các thuốc dùng chung và vitamin tan trong dầu",
      "Tăng đào thải qua ống thận các hoạt chất mang tính acid yếu"
    ],
    "correct": 2,
    "explanation": "Bản chất là polymer trao đổi ion phân tử lớn không hấp thu, Cholestyramin hấp phụ và tạo phức trơ với các thuốc mang tính acid nhẹ dùng cùng lúc (Warfarin, Digoxin, Thiazid, Levothyroxin...) và vitamin tan trong dầu (A, D, E, K). Bắt buộc phải uống các thuốc khác trước 1 giờ hoặc sau 4-6 giờ.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Ức chế enzym cytochrom P450 chuyển hóa thuốc tại gan\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Phá hủy cấu trúc của các thuốc mang tính kiềm tại dạ dày\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Bản chất là polymer trao đổi ion phân tử lớn không hấp thu, Cholestyramin hấp phụ và tạo phức trơ với các thuốc mang tính acid nhẹ dùng cùng lúc (Warfarin, Digoxin, Thiazid, Levothyroxin...) và vitamin tan trong dầu (A, D, E, K). Bắt buộc phải uống các thuốc khác trước 1 giờ hoặc sau 4-6 giờ.",
      "Phương án này không đúng vì \"Tăng đào thải qua ống thận các hoạt chất mang tính acid yếu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Kháng thể đơn dòng ức chế chọn lọc enzym PCSK9",
      "Thuốc ức chế protein vận chuyển este cholesteryl CETP",
      "Oligonucleotid đối mã ức chế tổng hợp protein ApoB-100",
      "Thuốc chủ vận chọn lọc thụ thể nhân acid mật FXR"
    ],
    "correct": 0,
    "explanation": "Enzym PCSK9 liên kết với thụ thể LDL trên bề mặt tế bào gan và thúc đẩy sự thoái giáng thụ thể này trong lysosome. Evolocumab và Alirocumab là các kháng thể đơn dòng ức chế PCSK9, giúp tái sử dụng và tăng vọt số lượng thụ thể LDL ở màng tế bào gan, kéo tụt nồng độ LDL-C máu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Enzym PCSK9 liên kết với thụ thể LDL trên bề mặt tế bào gan và thúc đẩy sự thoái giáng thụ thể này trong lysosome. Evolocumab và Alirocumab là các kháng thể đơn dòng ức chế PCSK9, giúp tái sử dụng và tăng vọt số lượng thụ thể LDL ở màng tế bào gan, kéo tụt nồng độ LDL-C máu.",
      "Phương án này không đúng vì \"Thuốc ức chế protein vận chuyển este cholesteryl CETP\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Oligonucleotid đối mã ức chế tổng hợp protein ApoB-100\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thuốc chủ vận chọn lọc thụ thể nhân acid mật FXR\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Tăng huyết áp độ hai kèm bệnh lý thận đái tháo đường",
      "Phụ nữ có thai, cho con bú và bệnh gan đang tiến triển",
      "Người cao tuổi trên bảy mươi lăm tuổi có xơ vữa mạch vành",
      "Bệnh nhân đái tháo đường typ hai kiểm soát đường kém"
    ],
    "correct": 1,
    "explanation": "Cholesterol và các hợp chất chuyển hóa trung gian (mevalonate, dolichol, squalene) là thành phần cấu tạo thiết yếu của màng tế bào phôi thai và sự phát triển của hệ thần kinh thai nhi. Statin có nguy cơ gây dị tật thai nhi, chống chỉ định tuyệt đối trong thai kỳ và cho con bú.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Tăng huyết áp độ hai kèm bệnh lý thận đái tháo đường\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Cholesterol và các hợp chất chuyển hóa trung gian (mevalonate, dolichol, squalene) là thành phần cấu tạo thiết yếu của màng tế bào phôi thai và sự phát triển của hệ thần kinh thai nhi. Statin có nguy cơ gây dị tật thai nhi, chống chỉ định tuyệt đối trong thai kỳ và cho con bú.",
      "Phương án này không đúng vì \"Người cao tuổi trên bảy mươi lăm tuổi có xơ vữa mạch vành\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Bệnh nhân đái tháo đường typ hai kiểm soát đường kém\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Tiêu diệt toàn bộ thể giao bào ngăn muỗi Anopheles truyền bệnh",
      "Dẫn chất artemisinin đắt đỏ phối hợp giảm chi phí điều trị",
      "Ngăn ngừa nguy cơ hạ thân nhiệt đột ngột ở bệnh nhân sốt cao",
      "Artemisinin thải trừ nhanh, dùng đơn độc dễ kháng thuốc"
    ],
    "correct": 3,
    "explanation": "Artemisinin làm sạch ký sinh trùng trong máu rất nhanh nhưng bán thải rất ngắn (< 2h). Thuốc phối hợp đi kèm (như Lumefantrine, Piperaquine, Mefloquine) có bán thải dài (vài tuần) sẽ tiêu diệt nốt những ký sinh trùng còn sót lại, ngăn ngừa sốt rét tái phát và triệt tiêu khả năng đột biến kháng Artemisinin.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Tiêu diệt toàn bộ thể giao bào ngăn muỗi Anopheles truyền bệnh\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Dẫn chất artemisinin đắt đỏ phối hợp giảm chi phí điều trị\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ngăn ngừa nguy cơ hạ thân nhiệt đột ngột ở bệnh nhân sốt cao\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Artemisinin làm sạch ký sinh trùng trong máu rất nhanh nhưng bán thải rất ngắn (< 2h). Thuốc phối hợp đi kèm (như Lumefantrine, Piperaquine, Mefloquine) có bán thải dài (vài tuần) sẽ tiêu diệt nốt những ký sinh trùng còn sót lại, ngăn ngừa sốt rét tái phát và triệt tiêu khả năng đột biến kháng Artemisinin."
    ]
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
      "Cắt cơn sốt rét thông thường do thể ký sinh Plasmodium",
      "Cấp cứu sốt rét ác tính và biến chứng sốt rét thể não",
      "Điều trị tiệt căn thể ngủ trong gan của ký sinh trùng"
    ],
    "correct": 2,
    "explanation": "Artesunat tiêm tĩnh mạch là tiêu chuẩn vàng cấp cứu sốt rét ác tính và sốt rét thể não do P. falciparum (vượt trội hơn Quinin IV cả về hiệu quả giảm tử vong và tính an toàn, ít gây hạ đường huyết và loạn nhịp). Liều tiêm ở các thời điểm 0h, 12h, 24h và sau đó mỗi ngày một lần.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Dự phòng sốt rét cho khách du lịch vào vùng dịch tễ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Cắt cơn sốt rét thông thường do thể ký sinh Plasmodium\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Artesunat tiêm tĩnh mạch là tiêu chuẩn vàng cấp cứu sốt rét ác tính và sốt rét thể não do P. falciparum (vượt trội hơn Quinin IV cả về hiệu quả giảm tử vong và tính an toàn, ít gây hạ đường huyết và loạn nhịp). Liều tiêm ở các thời điểm 0h, 12h, 24h và sau đó mỗi ngày một lần.",
      "Phương án này không đúng vì \"Điều trị tiệt căn thể ngủ trong gan của ký sinh trùng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Tiền sử rối loạn tâm thần, trầm cảm nặng hoặc động kinh",
      "Phụ nữ sau mãn kinh điều trị bằng liệu pháp hormon",
      "Bệnh nhân đái tháo đường typ 2 đang kiểm soát ổn định",
      "Người có tiền sử dị ứng nhẹ ngoài da với penicillin"
    ],
    "correct": 0,
    "explanation": "Mefloquin qua hàng rào máu não rất tốt và có độc tính thần kinh tâm thần đáng kể: ác mộng dữ dội, mất ngủ, trầm cảm nặng, hoang tưởng ảo giác và kích hoạt cơn co giật. Thuốc chống chỉ định tuyệt đối cho người có tiền sử bệnh tâm thần, rối loạn lo âu nặng hoặc động kinh.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Mefloquin qua hàng rào máu não rất tốt và có độc tính thần kinh tâm thần đáng kể: ác mộng dữ dội, mất ngủ, trầm cảm nặng, hoang tưởng ảo giác và kích hoạt cơn co giật. Thuốc chống chỉ định tuyệt đối cho người có tiền sử bệnh tâm thần, rối loạn lo âu nặng hoặc động kinh.",
      "Phương án này không đúng vì \"Phụ nữ sau mãn kinh điều trị bằng liệu pháp hormon\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Bệnh nhân đái tháo đường typ 2 đang kiểm soát ổn định\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Người có tiền sử dị ứng nhẹ ngoài da với penicillin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Tăng mạnh nồng độ warfarin tự do gây xuất huyết nặng",
      "Cảm ứng men gan làm mất hoàn toàn tác dụng chống đông",
      "Phong tỏa thụ thể làm mất hoàn toàn hiệu lực hạ sốt",
      "Kết tủa protein tại cầu thận gây suy thận cấp tính"
    ],
    "correct": 0,
    "explanation": "Warfarin gắn protein huyết tương tới 99% (chỉ 1% tự do có hoạt tính). NSAID đẩy một lượng nhỏ Warfarin từ dạng gắn thành tự do (ví dụ tăng từ 1% lên 2% tự do, tương đương tăng gấp đôi nồng độ có hoạt tính). Kết hợp với tác dụng kháng tiểu cầu và loét dạ dày của NSAID, xuất huyết tiêu hóa ồ ạt là điều khó tránh khỏi.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Warfarin gắn protein huyết tương tới 99% (chỉ 1% tự do có hoạt tính). NSAID đẩy một lượng nhỏ Warfarin từ dạng gắn thành tự do (ví dụ tăng từ 1% lên 2% tự do, tương đương tăng gấp đôi nồng độ có hoạt tính). Kết hợp với tác dụng kháng tiểu cầu và loét dạ dày của NSAID, xuất huyết tiêu hóa ồ ạt là điều khó tránh khỏi.",
      "Phương án này không đúng vì \"Cảm ứng men gan làm mất hoàn toàn tác dụng chống đông\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Phong tỏa thụ thể làm mất hoàn toàn hiệu lực hạ sốt\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kết tủa protein tại cầu thận gây suy thận cấp tính\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Thức ăn tinh bột kết hợp nước ép hoa quả chứa acid hữu cơ",
      "Thuốc chống viêm không steroid dùng đường uống đồng thời",
      "Chế phẩm chứa ion kim loại đa hóa trị hoặc sữa tươi",
      "Dịch truyền dinh dưỡng cung cấp hỗn hợp acid amin tự do"
    ],
    "correct": 2,
    "explanation": "Các kháng sinh nhóm Fluoroquinolon (Ciprofloxacin) và Tetracyclin (Doxycyclin) có cấu trúc hóa học dễ tạo phức chelate bền vững không tan với các ion kim loại hóa trị 2 và 3 (Ca2+, Mg2+, Al3+, Fe2+, Zn2+). Phức hợp này không thể hấp thu qua niêm mạc ruột non, dẫn tới thất bại điều trị nhiễm khuẩn.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Thức ăn tinh bột kết hợp nước ép hoa quả chứa acid hữu cơ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thuốc chống viêm không steroid dùng đường uống đồng thời\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Các kháng sinh nhóm Fluoroquinolon (Ciprofloxacin) và Tetracyclin (Doxycyclin) có cấu trúc hóa học dễ tạo phức chelate bền vững không tan với các ion kim loại hóa trị 2 và 3 (Ca2+, Mg2+, Al3+, Fe2+, Zn2+). Phức hợp này không thể hấp thu qua niêm mạc ruột non, dẫn tới thất bại điều trị nhiễm khuẩn.",
      "Phương án này không đúng vì \"Dịch truyền dinh dưỡng cung cấp hỗn hợp acid amin tự do\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Tăng tổng hợp yếu tố đông máu tại gan và giảm antithrombin III",
      "Làm giảm số lượng tiểu cầu tuần hoàn gây kết tập dội ngược",
      "Gây co thắt các nhánh tĩnh mạch sâu ở chi dưới làm ứ trệ",
      "Ức chế hoạt hóa plasminogen làm suy giảm khả năng tiêu sợi huyết"
    ],
    "correct": 0,
    "explanation": "Estrogen chuyển hóa qua gan kích thích tăng tổng hợp các yếu tố đông máu phụ thuộc vitamin K (yếu tố II, VII, IX, X) và Fibrinogen, đồng thời làm giảm Antithrombin III và Protein S, dẫn tới trạng thái tăng đông. Nguy cơ huyết khối tăng cao ở phụ nữ trên 35 tuổi có hút thuốc lá.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Estrogen chuyển hóa qua gan kích thích tăng tổng hợp các yếu tố đông máu phụ thuộc vitamin K (yếu tố II, VII, IX, X) và Fibrinogen, đồng thời làm giảm Antithrombin III và Protein S, dẫn tới trạng thái tăng đông. Nguy cơ huyết khối tăng cao ở phụ nữ trên 35 tuổi có hút thuốc lá.",
      "Phương án này không đúng vì \"Làm giảm số lượng tiểu cầu tuần hoàn gây kết tập dội ngược\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Gây co thắt các nhánh tĩnh mạch sâu ở chi dưới làm ứ trệ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ức chế hoạt hóa plasminogen làm suy giảm khả năng tiêu sợi huyết\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
  },
  {
    "id": 227,
    "subject": "duocly2",
    "chapter": "Hormon",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Một hoạt chất chống ung thư thuộc nhóm điều hòa thụ thể nội tiết chọn lọc (SERM) được dùng đường uống trong điều trị ung thư biểu mô tuyến vú phụ thuộc hormon. Đặc tính dược lý phân hóa trên các mô đích của phân tử này là gì?",
    "options": [
      "Đối kháng thụ thể estrogen ở tử cung, nhưng chủ vận ở vú và xương",
      "Đối kháng thụ thể estrogen ở vú, nhưng chủ vận ở tử cung và xương",
      "Đối kháng thụ thể estrogen ở xương, nhưng chủ vận ở vú và tử cung",
      "Chủ vận hoàn toàn trên tuyến vú và đối kháng hoàn toàn trên xương"
    ],
    "correct": 1,
    "explanation": "Tamoxifen là SERM: có tác dụng đối kháng Estrogen tại mô tuyến vú (ức chế tế bào ung thư vú tăng sinh); nhưng lại có tác dụng chủ vận một phần tại mô xương (ngăn ngừa tiêu xương) và nội mạc tử cung (làm tăng nguy cơ quá sản và ung thư nội mạc tử cung).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Đối kháng thụ thể estrogen ở tử cung, nhưng chủ vận ở vú và xương\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Tamoxifen là SERM: có tác dụng đối kháng Estrogen tại mô tuyến vú (ức chế tế bào ung thư vú tăng sinh); nhưng lại có tác dụng chủ vận một phần tại mô xương (ngăn ngừa tiêu xương) và nội mạc tử cung (làm tăng nguy cơ quá sản và ung thư nội mạc tử cung).",
      "Phương án này không đúng vì \"Đối kháng thụ thể estrogen ở xương, nhưng chủ vận ở vú và tử cung\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Chủ vận hoàn toàn trên tuyến vú và đối kháng hoàn toàn trên xương\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Hoạt chất Raloxifen",
      "Hoạt chất Clomifen",
      "Hoạt chất Fulvestrant",
      "Hoạt chất Anastrozol"
    ],
    "correct": 3,
    "explanation": "Anastrozole và Letrozole ức chế chọn lọc enzym Aromatase ở mô mỡ ngoại vi - nguồn sản sinh estrogen chủ yếu ở phụ nữ sau mãn kinh, làm nồng độ estrogen lưu hành giảm tới > 95%, cắt đứt nguồn dinh dưỡng kích thích tế bào ung thư vú.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Hoạt chất Raloxifen\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Hoạt chất Clomifen\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Hoạt chất Fulvestrant\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Anastrozole và Letrozole ức chế chọn lọc enzym Aromatase ở mô mỡ ngoại vi - nguồn sản sinh estrogen chủ yếu ở phụ nữ sau mãn kinh, làm nồng độ estrogen lưu hành giảm tới > 95%, cắt đứt nguồn dinh dưỡng kích thích tế bào ung thư vú."
    ]
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
      "Làm giãn cơ trơn tử cung dự phòng nguy cơ chuyển dạ đẻ non",
      "Kích thích thùy trước tuyến yên tăng cường tiết sữa sau đẻ",
      "Nâng chỉ số huyết áp và thể tích tuần hoàn trong cấp cứu sốc",
      "Kích thích co tử cung gây chuyển dạ và cầm máu sau sinh"
    ],
    "correct": 3,
    "explanation": "Oxytocin kích thích thụ thể oxytocin liên kết protein Gq trên cơ trơn tử cung làm tăng Ca2+ nội bào, gây co bóp tử cung có nhịp điệu tương tự chuyển dạ tự nhiên, dùng khởi phát chuyển dạ và kiểm soát băng huyết sau sinh do đờ tử cung.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Làm giãn cơ trơn tử cung dự phòng nguy cơ chuyển dạ đẻ non\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích thích thùy trước tuyến yên tăng cường tiết sữa sau đẻ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Nâng chỉ số huyết áp và thể tích tuần hoàn trong cấp cứu sốc\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Oxytocin kích thích thụ thể oxytocin liên kết protein Gq trên cơ trơn tử cung làm tăng Ca2+ nội bào, gây co bóp tử cung có nhịp điệu tương tự chuyển dạ tự nhiên, dùng khởi phát chuyển dạ và kiểm soát băng huyết sau sinh do đờ tử cung."
    ]
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
      "Tăng giải phóng adiponectin và ức chế thụ thể ghrelin dạ dày",
      "Kích thích tiết insulin phụ thuộc glucose, chậm rỗng dạ dày",
      "Tăng chuyển hóa cơ bản thông qua thụ thể beta-3 tại mỡ nâu",
      "Ức chế hoạt tính lipase tụy tại tá tràng ngăn hấp thu lipid"
    ],
    "correct": 1,
    "explanation": "GLP-1 RA bắt chước hormon incretin nội sinh: chỉ kích thích tiết insulin khi đường máu tăng (do đó không gây hạ đường huyết đơn trị liệu), ức chế bài tiết glucagon từ tế bào alpha, làm chậm nhu động dạ dày gây no lâu và ức chế trung tâm thèm ăn ở não, giúp hạ HbA1c và giảm cân rõ rệt.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Tăng giải phóng adiponectin và ức chế thụ thể ghrelin dạ dày\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "GLP-1 RA bắt chước hormon incretin nội sinh: chỉ kích thích tiết insulin khi đường máu tăng (do đó không gây hạ đường huyết đơn trị liệu), ức chế bài tiết glucagon từ tế bào alpha, làm chậm nhu động dạ dày gây no lâu và ức chế trung tâm thèm ăn ở não, giúp hạ HbA1c và giảm cân rõ rệt.",
      "Phương án này không đúng vì \"Tăng chuyển hóa cơ bản thông qua thụ thể beta-3 tại mỡ nâu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ức chế hoạt tính lipase tụy tại tá tràng ngăn hấp thu lipid\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Tiền sử bệnh mạch vành xơ vữa hoặc từng nhồi máu cơ tim",
      "Suy giảm chức năng thận mạn tính với thanh thải dưới 30 mL/phút",
      "Người cao tuổi đái tháo đường kèm béo phì thoái hóa võng mạc",
      "Tiền sử ung thư tuyến giáp thể tủy hoặc hội chứng MEN typ 2"
    ],
    "correct": 3,
    "explanation": "Các nghiên cứu trên loài gặm nhấm cho thấy đồng vận GLP-1 kích thích thụ thể GLP-1 trên tế bào C tuyến giáp gây tăng sinh và phát triển u tế bào C tuyến giáp thể tủy (MTC). Thuốc chống chỉ định tuyệt đối ở người có tiền sử bản thân hoặc gia đình mắc MTC hoặc hội chứng MEN 2.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Tiền sử bệnh mạch vành xơ vữa hoặc từng nhồi máu cơ tim\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Suy giảm chức năng thận mạn tính với thanh thải dưới 30 mL/phút\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Người cao tuổi đái tháo đường kèm béo phì thoái hóa võng mạc\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Các nghiên cứu trên loài gặm nhấm cho thấy đồng vận GLP-1 kích thích thụ thể GLP-1 trên tế bào C tuyến giáp gây tăng sinh và phát triển u tế bào C tuyến giáp thể tủy (MTC). Thuốc chống chỉ định tuyệt đối ở người có tiền sử bản thân hoặc gia đình mắc MTC hoặc hội chứng MEN 2."
    ]
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
      "Hormon incretin nội sinh gồm GLP-1 và GIP",
      "Hormon adrenalin tiết từ tủy tuyến thượng thận",
      "Hormon glucagon tiết từ tế bào alpha đảo tụy",
      "Hormon somatostatin điều hòa dịch tiêu hóa ruột"
    ],
    "correct": 0,
    "explanation": "GLP-1 và GIP nội sinh bình thường bị enzym DPP-4 phân cắt bất hoạt rất nhanh chỉ sau 1-2 phút trong máu. Thuốc ức chế DPP-4 ngăn cản sự thoái giáng này, kéo dài thời gian bán hủy và tăng nồng độ incretin có hoạt tính gấp 2-3 lần sau bữa ăn.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "GLP-1 và GIP nội sinh bình thường bị enzym DPP-4 phân cắt bất hoạt rất nhanh chỉ sau 1-2 phút trong máu. Thuốc ức chế DPP-4 ngăn cản sự thoái giáng này, kéo dài thời gian bán hủy và tăng nồng độ incretin có hoạt tính gấp 2-3 lần sau bữa ăn.",
      "Phương án này không đúng vì \"Hormon adrenalin tiết từ tủy tuyến thượng thận\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Hormon glucagon tiết từ tế bào alpha đảo tụy\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Hormon somatostatin điều hòa dịch tiêu hóa ruột\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Ức chế trực tiếp thrombin tự do và thrombin gắn kết",
      "Ức chế chọn lọc yếu tố mười hoạt hóa dạng hòa tan",
      "Đối kháng cạnh tranh men chuyển hóa vitamin K ở gan",
      "Kích thích giải phóng antithrombin ba từ nội mô mạch"
    ],
    "correct": 0,
    "explanation": "Dabigatran là thuốc ức chế trực tiếp Thrombin (yếu tố IIa) đường uống: gắn cạnh tranh thuận nghịch vào vị trí xúc tác của cả Thrombin tự do và Thrombin đã gắn vào cục sợi huyết fibrin, ngăn chặn quá trình chuyển đổi fibrinogen thành fibrin.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Dabigatran là thuốc ức chế trực tiếp Thrombin (yếu tố IIa) đường uống: gắn cạnh tranh thuận nghịch vào vị trí xúc tác của cả Thrombin tự do và Thrombin đã gắn vào cục sợi huyết fibrin, ngăn chặn quá trình chuyển đổi fibrinogen thành fibrin.",
      "Phương án này không đúng vì \"Ức chế chọn lọc yếu tố mười hoạt hóa dạng hòa tan\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Đối kháng cạnh tranh men chuyển hóa vitamin K ở gan\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích thích giải phóng antithrombin ba từ nội mô mạch\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Ức chế trực tiếp hoạt tính của enzym thrombin huyết tương",
      "Ức chế trực tiếp và chọn lọc yếu tố mười hoạt hóa (Xa)",
      "Ức chế sự hoạt hóa của yếu tố bảy con đường ngoại sinh",
      "Bất hoạt yếu tố mười ba ngăn hình thành liên kết chéo fibrin"
    ],
    "correct": 1,
    "explanation": "Rivaroxaban, Apixaban, Edoxaban (các thuốc có đuôi '-xaban') là thuốc ức chế trực tiếp và chọn lọc yếu tố Xa (chẹn chữ 'Xa' trong tên thuốc). Yếu tố Xa là điểm hội tụ của cả con đường đông máu nội sinh và ngoại sinh để tạo thrombin.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Ức chế trực tiếp hoạt tính của enzym thrombin huyết tương\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Rivaroxaban, Apixaban, Edoxaban (các thuốc có đuôi '-xaban') là thuốc ức chế trực tiếp và chọn lọc yếu tố Xa (chẹn chữ 'Xa' trong tên thuốc). Yếu tố Xa là điểm hội tụ của cả con đường đông máu nội sinh và ngoại sinh để tạo thrombin.",
      "Phương án này không đúng vì \"Ức chế sự hoạt hóa của yếu tố bảy con đường ngoại sinh\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Bất hoạt yếu tố mười ba ngăn hình thành liên kết chéo fibrin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Enoxaparin",
      "Rivaroxaban",
      "Dabigatran"
    ],
    "correct": 3,
    "explanation": "Idarucizumab là đoạn kháng thể đơn dòng nhân hóa (Fab) có ái lực liên kết với Dabigatran cao gấp khoảng 350 lần so với ái lực của Dabigatran với Thrombin, trung hòa lập tức Dabigatran trong tuần hoàn trong vòng vài phút khi có xuất huyết đe dọa tính mạng hoặc phẫu thuật cấp cứu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Warfarin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Enoxaparin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Rivaroxaban\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Idarucizumab là đoạn kháng thể đơn dòng nhân hóa (Fab) có ái lực liên kết với Dabigatran cao gấp khoảng 350 lần so với ái lực của Dabigatran với Thrombin, trung hòa lập tức Dabigatran trong tuần hoàn trong vòng vài phút khi có xuất huyết đe dọa tính mạng hoặc phẫu thuật cấp cứu."
    ]
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
      "Deferoxamin",
      "Penicillamin",
      "Calci dinatri edetat",
      "Dimercaprol tiêm bắp"
    ],
    "correct": 0,
    "explanation": "Deferoxamin là chất tạo chelate đặc hiệu có ái lực cực cao với ion Fe3+ (gắp sắt từ ferritin và hemosiderin nhưng không lấy sắt từ hemoglobin hay cytochrom). Phức hợp Ferrioxamine bền vững có màu đỏ cam được đào thải an toàn qua nước tiểu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Deferoxamin là chất tạo chelate đặc hiệu có ái lực cực cao với ion Fe3+ (gắp sắt từ ferritin và hemosiderin nhưng không lấy sắt từ hemoglobin hay cytochrom). Phức hợp Ferrioxamine bền vững có màu đỏ cam được đào thải an toàn qua nước tiểu.",
      "Phương án này không đúng vì \"Penicillamin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Calci dinatri edetat\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Dimercaprol tiêm bắp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Hệ vi khuẩn ruột phát triển tiêu thụ cobalamin từ thức ăn",
      "Nhu mô gan suy giảm nghiêm trọng tổng hợp transcobalamin",
      "Tự kháng thể kháng tế bào viền làm mất yếu tố nội ở hồi tràng",
      "Tổn thương màng đáy cầu thận làm đào thải vitamin B12 qua thận"
    ],
    "correct": 2,
    "explanation": "Bệnh Biermer là bệnh tự miễn: tự kháng thể kháng tế bào viền hoặc kháng yếu tố nội tại (IF). Không có IF, vitamin B12 không thể tạo phức hợp IF-B12 để được nhận diện bởi thụ thể cubilin tại đoạn cuối hồi tràng, dẫn tới thiếu hụt B12 tuyệt đối dù ăn đủ chất.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Hệ vi khuẩn ruột phát triển tiêu thụ cobalamin từ thức ăn\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Nhu mô gan suy giảm nghiêm trọng tổng hợp transcobalamin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Bệnh Biermer là bệnh tự miễn: tự kháng thể kháng tế bào viền hoặc kháng yếu tố nội tại (IF). Không có IF, vitamin B12 không thể tạo phức hợp IF-B12 để được nhận diện bởi thụ thể cubilin tại đoạn cuối hồi tràng, dẫn tới thiếu hụt B12 tuyệt đối dù ăn đủ chất.",
      "Phương án này không đúng vì \"Tổn thương màng đáy cầu thận làm đào thải vitamin B12 qua thận\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Phản ứng liên hợp glucuronid tại microsom tế bào biểu mô gan",
      "Phản ứng hydroxyl hóa prolin và lysin tổng hợp chuỗi collagen",
      "Phản ứng phosphoryl hóa chuỗi nhẹ myosin tại sợi cơ trơn",
      "Phản ứng khử carboxyl oxy hóa acid pyruvic tạo acetyl-CoA"
    ],
    "correct": 1,
    "explanation": "Vitamin C là cofactor thiết yếu khử Fe3+ thành Fe2+ cho các enzym prolyl hydroxylase và lysyl hydroxylase, cần thiết để tạo liên kết chéo bền vững của chuỗi xoắn ba Collagen. Thiếu vitamin C làm collagen mạch máu và mô liên kết suy yếu, gây xuất huyết và chậm lành vết thương (bệnh Scorbut).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Phản ứng liên hợp glucuronid tại microsom tế bào biểu mô gan\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Vitamin C là cofactor thiết yếu khử Fe3+ thành Fe2+ cho các enzym prolyl hydroxylase và lysyl hydroxylase, cần thiết để tạo liên kết chéo bền vững của chuỗi xoắn ba Collagen. Thiếu vitamin C làm collagen mạch máu và mô liên kết suy yếu, gây xuất huyết và chậm lành vết thương (bệnh Scorbut).",
      "Phương án này không đúng vì \"Phản ứng phosphoryl hóa chuỗi nhẹ myosin tại sợi cơ trơn\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Phản ứng khử carboxyl oxy hóa acid pyruvic tạo acetyl-CoA\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Niêm mạc dạ dày và ruột non",
      "Tuyến giáp và cận giáp",
      "Nhu mô phổi và lách",
      "Nhu mô gan và nhu mô thận"
    ],
    "correct": 3,
    "explanation": "Cholecalciferol đến Gan được enzym 25-hydroxylase gắn nhóm OH tạo 25-(OH)-D3 (Calcifediol). Sau đó đến Thận, enzym 1-alpha-hydroxylase (được kích hoạt bởi hormon PTH) gắn thêm nhóm OH thứ hai tạo 1,25-(OH)2-D3 (Calcitriol) - đây là dạng có hoạt tính sinh học mạnh nhất điều hòa hấp thu Calci.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Niêm mạc dạ dày và ruột non\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tuyến giáp và cận giáp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Nhu mô phổi và lách\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Cholecalciferol đến Gan được enzym 25-hydroxylase gắn nhóm OH tạo 25-(OH)-D3 (Calcifediol). Sau đó đến Thận, enzym 1-alpha-hydroxylase (được kích hoạt bởi hormon PTH) gắn thêm nhóm OH thứ hai tạo 1,25-(OH)2-D3 (Calcitriol) - đây là dạng có hoạt tính sinh học mạnh nhất điều hòa hấp thu Calci."
    ]
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
      "Thiếu hụt enzym 1-alpha-hydroxylase ở mô thận",
      "Bị đào thải ồ ạt qua màng lọc khi chạy thận nhân tạo",
      "Cạnh tranh đào thải với ure làm tăng urê huyết tương",
      "Gây độc trực tiếp phá hủy màng mao mạch tại cầu thận"
    ],
    "correct": 0,
    "explanation": "Ở bệnh nhân suy thận nặng, tế bào ống thận bị phá hủy làm mất enzym 1-alpha-hydroxylase, không thể chuyển đổi 25-(OH)-D3 thành dạng hoạt tính 1,25-(OH)2-D3. Bắt buộc phải bổ sung trực tiếp dạng đã được 1-alpha-hydroxyl hóa là Calcitriol hoặc Alfacalcidol để chống loãng xương và hạ calci máu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Ở bệnh nhân suy thận nặng, tế bào ống thận bị phá hủy làm mất enzym 1-alpha-hydroxylase, không thể chuyển đổi 25-(OH)-D3 thành dạng hoạt tính 1,25-(OH)2-D3. Bắt buộc phải bổ sung trực tiếp dạng đã được 1-alpha-hydroxyl hóa là Calcitriol hoặc Alfacalcidol để chống loãng xương và hạ calci máu.",
      "Phương án này không đúng vì \"Bị đào thải ồ ạt qua màng lọc khi chạy thận nhân tạo\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Cạnh tranh đào thải với ure làm tăng urê huyết tương\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Gây độc trực tiếp phá hủy màng mao mạch tại cầu thận\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Nhóm ức chế men sao chép ngược cấu trúc nucleosid (NRTI)",
      "Nhóm ức chế enzym protease ngăn cản virus trưởng thành",
      "Nhóm ức chế hòa màng ngăn virus xâm nhập tế bào chủ",
      "Nhóm ức chế men sao chép ngược không nucleosid (NNRTI)"
    ],
    "correct": 0,
    "explanation": "Zidovudin (AZT) là dẫn chất thymidine thuộc nhóm NRTI. Sau khi được tế bào phosphoryl hóa thành dạng triphosphate, nó cạnh tranh với cơ chất tự nhiên gắn vào chuỗi DNA đang kéo dài của virus do enzym sao chép ngược (Reverse Transcriptase) xúc tác, gây kết thúc sớm chuỗi DNA (chain termination).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Zidovudin (AZT) là dẫn chất thymidine thuộc nhóm NRTI. Sau khi được tế bào phosphoryl hóa thành dạng triphosphate, nó cạnh tranh với cơ chất tự nhiên gắn vào chuỗi DNA đang kéo dài của virus do enzym sao chép ngược (Reverse Transcriptase) xúc tác, gây kết thúc sớm chuỗi DNA (chain termination).",
      "Phương án này không đúng vì \"Nhóm ức chế enzym protease ngăn cản virus trưởng thành\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Nhóm ức chế hòa màng ngăn virus xâm nhập tế bào chủ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Nhóm ức chế men sao chép ngược không nucleosid (NNRTI)\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Tăng sinh tiểu cầu tiên phát gây tắc nghẽn mạch máu",
      "Thiếu máu hồng cầu to nặng kèm giảm bạch cầu hạt",
      "Xơ hóa mô kẽ phổi gây suy giảm chức năng hô hấp",
      "Viêm khớp cấp tính do lắng đọng muối urat tại các khớp"
    ],
    "correct": 1,
    "explanation": "AZT có độc tính chọn lọc kém hơn các NRTI thế hệ mới, ức chế một phần enzym DNA polymerase gamma ở ty thể và tủy xương của người, dẫn tới thiếu máu hồng cầu to nặng và giảm bạch cầu hạt. Bệnh nhân có thể phải truyền máu hoặc đổi thuốc.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Tăng sinh tiểu cầu tiên phát gây tắc nghẽn mạch máu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "AZT có độc tính chọn lọc kém hơn các NRTI thế hệ mới, ức chế một phần enzym DNA polymerase gamma ở ty thể và tủy xương của người, dẫn tới thiếu máu hồng cầu to nặng và giảm bạch cầu hạt. Bệnh nhân có thể phải truyền máu hoặc đổi thuốc.",
      "Phương án này không đúng vì \"Xơ hóa mô kẽ phổi gây suy giảm chức năng hô hấp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Viêm khớp cấp tính do lắng đọng muối urat tại các khớp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Gắn cạnh tranh trực tiếp tại vị trí gắn cơ chất nucleotid",
      "Gắn vào vị trí dị lập thể làm biến đổi cấu hình men sao chép",
      "Ức chế tích hợp DNA tiền virus vào bộ gen tế bào người bệnh",
      "Thủy phân vỏ protein capsid của virus trước khi xâm nhập"
    ],
    "correct": 1,
    "explanation": "NNRTI gắn trực tiếp vào một túi kỵ nước (allosteric hydrophobic pocket) nằm gần trung tâm hoạt động của enzym RT của HIV-1. Sự gắn này làm biến đổi cấu trúc ba chiều của enzym, ức chế hoạt tính xúc tác mà không cần trải qua bước phosphoryl hóa nội bào như các NRTI.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Gắn cạnh tranh trực tiếp tại vị trí gắn cơ chất nucleotid\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "NNRTI gắn trực tiếp vào một túi kỵ nước (allosteric hydrophobic pocket) nằm gần trung tâm hoạt động của enzym RT của HIV-1. Sự gắn này làm biến đổi cấu trúc ba chiều của enzym, ức chế hoạt tính xúc tác mà không cần trải qua bước phosphoryl hóa nội bào như các NRTI.",
      "Phương án này không đúng vì \"Ức chế tích hợp DNA tiền virus vào bộ gen tế bào người bệnh\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thủy phân vỏ protein capsid của virus trước khi xâm nhập\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Nevirapin viên nén",
      "Efavirenz viên nén",
      "Rilpivirin viên nén",
      "Etravirin viên nén"
    ],
    "correct": 1,
    "explanation": "Efavirenz qua hàng rào máu não rất tốt và có độc tính thần kinh trung ương xảy ra ở > 50% bệnh nhân trong những tuần đầu: chóng mặt, mất ngủ, giấc mơ kỳ quái kinh dị (vivid dreams/nightmares), trầm cảm nặng và rối loạn tâm thần. Thuốc nên uống trước khi ngủ khi bụng đói.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Nevirapin viên nén\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Efavirenz qua hàng rào máu não rất tốt và có độc tính thần kinh trung ương xảy ra ở > 50% bệnh nhân trong những tuần đầu: chóng mặt, mất ngủ, giấc mơ kỳ quái kinh dị (vivid dreams/nightmares), trầm cảm nặng và rối loạn tâm thần. Thuốc nên uống trước khi ngủ khi bụng đói.",
      "Phương án này không đúng vì \"Rilpivirin viên nén\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Etravirin viên nén\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Vincristin",
      "Fluorouracil",
      "Bleomycin"
    ],
    "correct": 3,
    "explanation": "Bleomycin bị bất hoạt bởi enzym Bleomycin hydrolase. Tuy nhiên mô phổi và da hầu như không có enzym này, khiến Bleomycin tích lũy nồng độ cao trong phế nang. Gốc tự do sinh ra phá hủy mao mạch phế nang gây viêm phổi kẽ và xơ phổi lan tỏa không hồi phục (liều tích lũy > 400 đơn vị).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Cisplatin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Vincristin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Fluorouracil\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Bleomycin bị bất hoạt bởi enzym Bleomycin hydrolase. Tuy nhiên mô phổi và da hầu như không có enzym này, khiến Bleomycin tích lũy nồng độ cao trong phế nang. Gốc tự do sinh ra phá hủy mao mạch phế nang gây viêm phổi kẽ và xơ phổi lan tỏa không hồi phục (liều tích lũy > 400 đơn vị)."
    ]
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
      "Viêm gan hoại tử tế bào gan cấp và tổn thương thoái hóa võng mạc",
      "Hoại tử ống thận cấp gây suy thận và điếc thần kinh giác quan",
      "Viêm bàng quang xuất huyết vô trùng và rối loạn nhịp tim chậm",
      "Suy tủy xương không hồi phục và co thắt phế quản cấp đe dọa"
    ],
    "correct": 1,
    "explanation": "Phức hợp bạch kim Cisplatin gắn và tích lũy chọn lọc ở tế bào biểu mô ống lượn gần ở thận và tế bào lông ốc tai ở tai trong. Thuốc gây suy thận cấp hoại tử ống thận (mất Mg2+, K+) và điếc thần kinh giác quan tần số cao. Bắt buộc phải bù dịch NaCl 0.9% thể tích lớn kèm lợi tiểu thẩm thấu để rửa trôi thuốc qua thận.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Viêm gan hoại tử tế bào gan cấp và tổn thương thoái hóa võng mạc\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phức hợp bạch kim Cisplatin gắn và tích lũy chọn lọc ở tế bào biểu mô ống lượn gần ở thận và tế bào lông ốc tai ở tai trong. Thuốc gây suy thận cấp hoại tử ống thận (mất Mg2+, K+) và điếc thần kinh giác quan tần số cao. Bắt buộc phải bù dịch NaCl 0.9% thể tích lớn kèm lợi tiểu thẩm thấu để rửa trôi thuốc qua thận.",
      "Phương án này không đúng vì \"Viêm bàng quang xuất huyết vô trùng và rối loạn nhịp tim chậm\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Suy tủy xương không hồi phục và co thắt phế quản cấp đe dọa\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Ức chế men topoisomerase một trong quá trình tháo xoắn sợi đôi",
      "Ức chế trùng hợp tubulin thành vi ống làm tê liệt thoi phân bào",
      "Kích thích trùng hợp vi ống ngăn cản sự phân rã thoi vô sắc",
      "Hoạt hóa trực tiếp enzym caspase gây ly giải màng nhân tế bào"
    ],
    "correct": 1,
    "explanation": "Vincristin và Vinblastin gắn chọn lọc vào vị trí Vinca trên phân tử tubulin, ức chế sự trùng hợp tạo vi ống (microtubules). Không hình thành được thoi vô sắc (mitotic spindle), tế bào ung thư bị kẹt lại ở kỳ giữa (metaphase) của pha phân bào M và kích hoạt quá trình tự chết tế bào.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Ức chế men topoisomerase một trong quá trình tháo xoắn sợi đôi\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Vincristin và Vinblastin gắn chọn lọc vào vị trí Vinca trên phân tử tubulin, ức chế sự trùng hợp tạo vi ống (microtubules). Không hình thành được thoi vô sắc (mitotic spindle), tế bào ung thư bị kẹt lại ở kỳ giữa (metaphase) của pha phân bào M và kích hoạt quá trình tự chết tế bào.",
      "Phương án này không đúng vì \"Kích thích trùng hợp vi ống ngăn cản sự phân rã thoi vô sắc\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Hoạt hóa trực tiếp enzym caspase gây ly giải màng nhân tế bào\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Cấm tiêm bắp sâu do nguy cơ gây hoại tử tiêu cơ vân cấp tính",
      "Cấm tiêm tĩnh mạch trung tâm do nguy cơ tạo huyết khối tim lớn",
      "Cấm tiêm tủy sống do gây hoại tử thần kinh dẫn tới tử vong",
      "Cấm tiêm dưới da do nguy cơ gây viêm loét mục mô dưới da rộng"
    ],
    "correct": 2,
    "explanation": "Nhầm lẫn tiêm Vincristin vào tủy sống (Intrathecal injection) thay vì tiêm tĩnh mạch là thảm họa y khoa: thuốc gây viêm hoại tử thần kinh trung ương tiến triển, phù não và tử vong 100%. Quy chế bắt buộc: nhãn thuốc Vincristin phải ghi dòng chữ cảnh báo đỏ 'CHỈ TIÊM TĨNH MẠCH - TỬ VONG NẾU TIÊM VÀO TỦY SỐNG'.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Cấm tiêm bắp sâu do nguy cơ gây hoại tử tiêu cơ vân cấp tính\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Cấm tiêm tĩnh mạch trung tâm do nguy cơ tạo huyết khối tim lớn\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Nhầm lẫn tiêm Vincristin vào tủy sống (Intrathecal injection) thay vì tiêm tĩnh mạch là thảm họa y khoa: thuốc gây viêm hoại tử thần kinh trung ương tiến triển, phù não và tử vong 100%. Quy chế bắt buộc: nhãn thuốc Vincristin phải ghi dòng chữ cảnh báo đỏ 'CHỈ TIÊM TĨNH MẠCH - TỬ VONG NẾU TIÊM VÀO TỦY SỐNG'.",
      "Phương án này không đúng vì \"Cấm tiêm dưới da do nguy cơ gây viêm loét mục mô dưới da rộng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Khử Fe3+ thành Fe2+ trong hemoglobin nhờ enzym NADPH reductase",
      "Chelate hóa trực tiếp các phân tử oxy hóa ngoại sinh vào globin",
      "Kích thích tăng sinh enzym catalase phân giải các hợp chất nitrit",
      "Tăng tính thấm màng hồng cầu khuếch tán oxy hòa tan vào hem"
    ],
    "correct": 0,
    "explanation": "Methemoglobin chứa Fe3+ mất khả năng gắn oxy. Xanh Methylen được enzym NADPH-methemoglobin reductase khử thành xanh leucomethylene. Xanh leucomethylene sau đó nhường electron khử Fe3+ trở lại thành Fe2+ trong hemoglobin bình thường, phục hồi khả năng vận chuyển oxy của máu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Methemoglobin chứa Fe3+ mất khả năng gắn oxy. Xanh Methylen được enzym NADPH-methemoglobin reductase khử thành xanh leucomethylene. Xanh leucomethylene sau đó nhường electron khử Fe3+ trở lại thành Fe2+ trong hemoglobin bình thường, phục hồi khả năng vận chuyển oxy của máu.",
      "Phương án này không đúng vì \"Chelate hóa trực tiếp các phân tử oxy hóa ngoại sinh vào globin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích thích tăng sinh enzym catalase phân giải các hợp chất nitrit\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tăng tính thấm màng hồng cầu khuếch tán oxy hòa tan vào hem\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Bệnh nhân suy giảm chức năng lọc cầu thận mạn tính",
      "Bệnh nhân có tiền sử hen phế quản co thắt phế nang",
      "Bệnh nhân thiếu hụt enzym glucose-6-phosphat dehydrogenase (G6PD)",
      "Bệnh nhân có tiền sử viêm loét dạ dày tá tràng tiến triển"
    ],
    "correct": 2,
    "explanation": "Xanh Methylen cần NADPH để chuyển thành dạng khử hoạt tính. Ở người thiếu enzym G6PD, tế bào hồng cầu không sản xuất đủ NADPH, khiến Xanh Methylen không phát huy được tác dụng mà ngược lại đóng vai trò là chất oxy hóa trực tiếp gây tan máu nội mạch cấp tính dữ dội.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Bệnh nhân suy giảm chức năng lọc cầu thận mạn tính\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Bệnh nhân có tiền sử hen phế quản co thắt phế nang\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Xanh Methylen cần NADPH để chuyển thành dạng khử hoạt tính. Ở người thiếu enzym G6PD, tế bào hồng cầu không sản xuất đủ NADPH, khiến Xanh Methylen không phát huy được tác dụng mà ngược lại đóng vai trò là chất oxy hóa trực tiếp gây tan máu nội mạch cấp tính dữ dội.",
      "Phương án này không đúng vì \"Bệnh nhân có tiền sử viêm loét dạ dày tá tràng tiến triển\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Oxy hóa trực tiếp cyanua và kiềm hóa nước tiểu tăng đào thải",
      "Tạo methemoglobin giải phóng ty thể và chuyển thành thiocyanat",
      "Kết tủa ion cyanua trong ruột và trung hòa độc chất trong máu",
      "Ức chế qua hàng rào máu não và phân giải thành khí qua phổi"
    ],
    "correct": 1,
    "explanation": "Cyanua gắn chặt vào ion Fe3+ của cytochrom oxidase làm ngạt tế bào. Hít Amyl nitrit / tiêm Natri nitrit sẽ oxy hóa một phần Hb thành MetHb (chứa Fe3+ ái lực cao) để hút CN- ra khỏi ty thể giải phóng enzym hô hấp. Sau đó tiêm Natri thiosulfat cung cấp gốc lưu huỳnh cho enzym Rhodanese ở gan biến CN- thành Thiocyanat vô hại thải qua nước tiểu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Oxy hóa trực tiếp cyanua và kiềm hóa nước tiểu tăng đào thải\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Cyanua gắn chặt vào ion Fe3+ của cytochrom oxidase làm ngạt tế bào. Hít Amyl nitrit / tiêm Natri nitrit sẽ oxy hóa một phần Hb thành MetHb (chứa Fe3+ ái lực cao) để hút CN- ra khỏi ty thể giải phóng enzym hô hấp. Sau đó tiêm Natri thiosulfat cung cấp gốc lưu huỳnh cho enzym Rhodanese ở gan biến CN- thành Thiocyanat vô hại thải qua nước tiểu.",
      "Phương án này không đúng vì \"Kết tủa ion cyanua trong ruột và trung hòa độc chất trong máu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ức chế qua hàng rào máu não và phân giải thành khí qua phổi\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Gắn ion cobalt với cyanide tạo cyanocobalamin không độc qua thận",
      "Chelate hóa gốc cyanide với ion sắt huyết thanh đào thải qua mật",
      "Thủy phân chuỗi liên kết carbon-nitơ của cyanide thành carbonic",
      "Cung cấp nhóm lưu huỳnh cho enzym rhodanese phân giải cyanide"
    ],
    "correct": 0,
    "explanation": "Mỗi phân tử Hydroxocobalamin chứa một nguyên tử Coban (Co3+) có ái lực liên kết với gốc Cyanide cao hơn nhiều so với cytochrom oxidase. Thuốc giằng CN- ra tạo thành Cyanocobalamin (chính là Vitamin B12 sinh lý), đào thải an toàn qua nước tiểu, không gây biến chứng tạo MetHb nguy hiểm như nhóm Nitrit.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Mỗi phân tử Hydroxocobalamin chứa một nguyên tử Coban (Co3+) có ái lực liên kết với gốc Cyanide cao hơn nhiều so với cytochrom oxidase. Thuốc giằng CN- ra tạo thành Cyanocobalamin (chính là Vitamin B12 sinh lý), đào thải an toàn qua nước tiểu, không gây biến chứng tạo MetHb nguy hiểm như nhóm Nitrit.",
      "Phương án này không đúng vì \"Chelate hóa gốc cyanide với ion sắt huyết thanh đào thải qua mật\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thủy phân chuỗi liên kết carbon-nitơ của cyanide thành carbonic\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Cung cấp nhóm lưu huỳnh cho enzym rhodanese phân giải cyanide\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Ngay sau khi uống ba mươi phút tại thời điểm đỉnh",
      "Tại thời điểm hai giờ sau bữa ăn no chứa nhiều mỡ",
      "Sau khi uống ít nhất 6-8 giờ hoặc trước liều kế tiếp",
      "Vào thời điểm nửa đêm khi cortisol sinh lý thấp nhất"
    ],
    "correct": 2,
    "explanation": "Digoxin có pha phân bố mô rất chậm (kéo dài 6-8 giờ sau khi uống). Lấy máu sớm hơn 6 giờ sẽ cho nồng độ giả tạo rất cao trong máu trong khi thuốc chưa đạt trạng thái cân bằng phân bố ở mô cơ tim.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Ngay sau khi uống ba mươi phút tại thời điểm đỉnh\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tại thời điểm hai giờ sau bữa ăn no chứa nhiều mỡ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Digoxin có pha phân bố mô rất chậm (kéo dài 6-8 giờ sau khi uống). Lấy máu sớm hơn 6 giờ sẽ cho nồng độ giả tạo rất cao trong máu trong khi thuốc chưa đạt trạng thái cân bằng phân bố ở mô cơ tim.",
      "Phương án này không đúng vì \"Vào thời điểm nửa đêm khi cortisol sinh lý thấp nhất\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Atropin sulfat tiêm tĩnh mạch",
      "Propranolol tiêm tĩnh mạch",
      "Amiodaron truyền tĩnh mạch",
      "Verapamil tiêm tĩnh mạch chậm"
    ],
    "correct": 0,
    "explanation": "Atropin đối kháng tác dụng kích thích đối giao cảm (dây X) của Digitalis trên nút xoang và nút nhĩ thất, giúp nâng nhịp tim và phục hồi dẫn truyền nhĩ thất trong trường hợp nhịp chậm xoang hoặc block nhĩ thất do quá liều.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Atropin đối kháng tác dụng kích thích đối giao cảm (dây X) của Digitalis trên nút xoang và nút nhĩ thất, giúp nâng nhịp tim và phục hồi dẫn truyền nhĩ thất trong trường hợp nhịp chậm xoang hoặc block nhĩ thất do quá liều.",
      "Phương án này không đúng vì \"Propranolol tiêm tĩnh mạch\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Amiodaron truyền tĩnh mạch\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Verapamil tiêm tĩnh mạch chậm\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Digitoxin",
      "Acetyldigoxin",
      "Lanatosid C",
      "Ouabain"
    ],
    "correct": 3,
    "explanation": "Ouabain (g-Strophanthin) chiết xuất từ hạt cây Strophanthus gratus, có cấu trúc rất nhiều nhóm -OH phân cực nên tan mạnh trong nước, không hấp thu qua ruột nên chỉ dùng đường tiêm tĩnh mạch cấp cứu, tác dụng xuất hiện sau 5-10 phút.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Digitoxin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Acetyldigoxin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Lanatosid C\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Ouabain (g-Strophanthin) chiết xuất từ hạt cây Strophanthus gratus, có cấu trúc rất nhiều nhóm -OH phân cực nên tan mạnh trong nước, không hấp thu qua ruột nên chỉ dùng đường tiêm tĩnh mạch cấp cứu, tác dụng xuất hiện sau 5-10 phút."
    ]
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
      "Tăng giải phóng calci từ mạng nội chất qua thụ thể IP3",
      "Gắn vào Troponin C tăng lực co cơ mà không tăng calci tự do",
      "Ức chế hoạt động bơm trao đổi natri - calci màng tế bào",
      "Hoạt hóa trực tiếp kênh calci typ L gây tăng dòng calci vào"
    ],
    "correct": 1,
    "explanation": "Levosimendan gắn vào tiểu phần Troponin C của sợi cơ tim khi có mặt Ca2+, làm tăng độ nhạy cảm của sợi co cơ với Ca2+ sẵn có mà không làm tăng nồng độ Ca2+ nội bào tự do, do đó không làm tăng tiêu thụ oxy và ít nguy cơ gây loạn nhịp hơn các thuốc tăng co cơ truyền thống.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Tăng giải phóng calci từ mạng nội chất qua thụ thể IP3\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Levosimendan gắn vào tiểu phần Troponin C của sợi cơ tim khi có mặt Ca2+, làm tăng độ nhạy cảm của sợi co cơ với Ca2+ sẵn có mà không làm tăng nồng độ Ca2+ nội bào tự do, do đó không làm tăng tiêu thụ oxy và ít nguy cơ gây loạn nhịp hơn các thuốc tăng co cơ truyền thống.",
      "Phương án này không đúng vì \"Ức chế hoạt động bơm trao đổi natri - calci màng tế bào\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Hoạt hóa trực tiếp kênh calci typ L gây tăng dòng calci vào\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Diệt khuẩn ruột giảm thoái biến và ức chế P-glycoprotein",
      "Tăng gắn protein huyết tương làm tăng nồng độ tự do",
      "Kích thích enzym vận chuyển ở niêm mạc bờ bàn chải ruột",
      "Cạnh tranh bài tiết ở ống thận làm giảm thải trừ qua nước tiểu"
    ],
    "correct": 0,
    "explanation": "Khoảng 10% dân số có vi khuẩn đường ruột Eubacterium lentum chuyển hóa bất hoạt Digoxin thành dihydrodigoxin. Kháng sinh Macrolid diệt vi khuẩn này làm tăng sinh khả dụng của Digoxin, đồng thời ức chế bơm P-glycoprotein ở thận làm giảm thanh thải Digoxin.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Khoảng 10% dân số có vi khuẩn đường ruột Eubacterium lentum chuyển hóa bất hoạt Digoxin thành dihydrodigoxin. Kháng sinh Macrolid diệt vi khuẩn này làm tăng sinh khả dụng của Digoxin, đồng thời ức chế bơm P-glycoprotein ở thận làm giảm thanh thải Digoxin.",
      "Phương án này không đúng vì \"Tăng gắn protein huyết tương làm tăng nồng độ tự do\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích thích enzym vận chuyển ở niêm mạc bờ bàn chải ruột\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Cạnh tranh bài tiết ở ống thận làm giảm thải trừ qua nước tiểu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Giảm mức lọc cầu thận và giảm thể tích phân bố của thuốc",
      "Tăng số lượng thụ thể Na+/K+-ATPase tại màng tim",
      "Tăng tỷ lệ hấp thu thuốc qua niêm mạc ống tiêu hóa",
      "Kích thích vỏ thượng thận tăng tiết aldosteron gây hạ kali"
    ],
    "correct": 0,
    "explanation": "Suy giáp làm giảm chuyển hóa cơ bản, giảm lưu lượng máu thận, giảm tốc độ lọc cầu thận và giảm thể tích phân bố, khiến nồng độ Digoxin trong máu tăng cao dễ gây ngộ độc. Ngược lại, cường giáp làm tăng thanh thải và giảm nhạy cảm với Digoxin.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Suy giáp làm giảm chuyển hóa cơ bản, giảm lưu lượng máu thận, giảm tốc độ lọc cầu thận và giảm thể tích phân bố, khiến nồng độ Digoxin trong máu tăng cao dễ gây ngộ độc. Ngược lại, cường giáp làm tăng thanh thải và giảm nhạy cảm với Digoxin.",
      "Phương án này không đúng vì \"Tăng số lượng thụ thể Na+/K+-ATPase tại màng tim\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tăng tỷ lệ hấp thu thuốc qua niêm mạc ống tiêu hóa\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích thích vỏ thượng thận tăng tiết aldosteron gây hạ kali\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
    "reference": "Sách Dược lý 2 tr. 65",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Atenolol\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Nebivolol là thuốc chẹn beta thế hệ 3 chọn lọc cao nhất trên thụ thể beta-1, đồng thời đồng vận thụ thể beta-3 kích hoạt eNOS giải phóng NO gây giãn mạch ngoại vi, giảm sức cản mạch và không ảnh hưởng xấu đến chuyển hóa lipid và đường máu như các thuốc chẹn beta cũ.",
      "Phương án này không đúng vì \"Propranolol\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Metoprolol\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Kích thích alpha-2 tại thân não và chẹn beta-1 ở cơ tim",
      "Chẹn alpha-2 tiền synap và kích thích beta-2 ở mạch máu",
      "Chẹn thụ thể alpha-1 và chẹn không chọn lọc thụ thể beta",
      "Chẹn thụ thể dopamin D2 và ức chế enzym MAO ngoại biên"
    ],
    "correct": 2,
    "explanation": "Labetalol và Carvedilol là các thuốc chẹn hỗn hợp: phong bế thụ thể alpha-1 ở mạch máu (gây giãn mạch, giảm sức cản ngoại vi) kết hợp phong bế thụ thể beta-1 ở tim (ngăn phản xạ tim nhanh bù trừ) và beta-2. Nhờ đó kiểm soát huyết áp rất êm dịu, bảo vệ bệnh nhân suy tim và cơn tăng huyết áp.",
    "reference": "Sách Dược lý 2 tr. 65",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Kích thích alpha-2 tại thân não và chẹn beta-1 ở cơ tim\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Chẹn alpha-2 tiền synap và kích thích beta-2 ở mạch máu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Labetalol và Carvedilol là các thuốc chẹn hỗn hợp: phong bế thụ thể alpha-1 ở mạch máu (gây giãn mạch, giảm sức cản ngoại vi) kết hợp phong bế thụ thể beta-1 ở tim (ngăn phản xạ tim nhanh bù trừ) và beta-2. Nhờ đó kiểm soát huyết áp rất êm dịu, bảo vệ bệnh nhân suy tim và cơn tăng huyết áp.",
      "Phương án này không đúng vì \"Chẹn thụ thể dopamin D2 và ức chế enzym MAO ngoại biên\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Dùng chẹn alpha trước rồi mới dùng thêm chẹn beta",
      "Dùng chẹn beta trước rồi mới dùng phối hợp chẹn alpha",
      "Dùng đồng thời cả thuốc chẹn beta và ức chế men chuyển",
      "Dùng đơn độc thuốc chẹn beta liều cao liên tục trước mổ"
    ],
    "correct": 0,
    "explanation": "Quy tắc vàng trong u tủy thượng thận: PHẢI CHẸN ALPHA TRƯỚC, CHẸN BETA SAU. Nếu dùng chẹn beta trước, thụ thể beta-2 (giãn mạch) bị chặn lại, lượng lớn catecholamin sẽ gắn tự do vào thụ thể alpha-1 gây co mạch dữ dội, huyết áp tăng kịch phát dẫn tới đột quỵ hoặc phù phổi cấp tử vong.",
    "reference": "Sách Dược lý 2 tr. 74",
    "distractorExplanations": [
      "Quy tắc vàng trong u tủy thượng thận: PHẢI CHẸN ALPHA TRƯỚC, CHẸN BETA SAU. Nếu dùng chẹn beta trước, thụ thể beta-2 (giãn mạch) bị chặn lại, lượng lớn catecholamin sẽ gắn tự do vào thụ thể alpha-1 gây co mạch dữ dội, huyết áp tăng kịch phát dẫn tới đột quỵ hoặc phù phổi cấp tử vong.",
      "Phương án này không đúng vì \"Dùng chẹn beta trước rồi mới dùng phối hợp chẹn alpha\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Dùng đồng thời cả thuốc chẹn beta và ức chế men chuyển\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Dùng đơn độc thuốc chẹn beta liều cao liên tục trước mổ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Ức chế men chuyển angiotensin",
      "Ức chế chọn lọc enzym renin",
      "Chẹn thụ thể AT1 của angiotensin",
      "Đối kháng thụ thể aldosteron"
    ],
    "correct": 1,
    "explanation": "Aliskiren là thuốc ức chế trực tiếp enzym Renin (Direct Renin Inhibitor - DRI) đầu tiên được phê duyệt, liên kết với trung tâm hoạt động của Renin, ngăn cản sự phân cắt Angiotensinogen thành Angiotensin I, triệt tiêu trục RAA ngay từ khâu đầu tiên.",
    "reference": "Sách Dược lý 2 tr. 72",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Ức chế men chuyển angiotensin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Aliskiren là thuốc ức chế trực tiếp enzym Renin (Direct Renin Inhibitor - DRI) đầu tiên được phê duyệt, liên kết với trung tâm hoạt động của Renin, ngăn cản sự phân cắt Angiotensinogen thành Angiotensin I, triệt tiêu trục RAA ngay từ khâu đầu tiên.",
      "Phương án này không đúng vì \"Chẹn thụ thể AT1 của angiotensin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Đối kháng thụ thể aldosteron\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Thuốc ức chế men chuyển điều hòa hệ renin angiotensin",
      "Thuốc lợi tiểu nhóm thiazid làm tăng bài tiết ion natri",
      "Thuốc chẹn kênh calci phân nhóm dihydropyridin",
      "Thuốc chẹn chọn lọc thụ thể beta-1 adrenergic ở tim"
    ],
    "correct": 2,
    "explanation": "Phì đại nướu răng (Gingival hyperplasia) là tác dụng phụ kinh điển của thuốc chẹn kênh Calci (đặc biệt là Nifedipin, Amlodipin) do kích thích tăng sinh nguyên bào sợi nướu và lắng đọng chất nền ngoại bào. Tác dụng phụ này cũng gặp ở Phenytoin và Cyclosporin.",
    "reference": "Sách Dược lý 2 tr. 61",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Thuốc ức chế men chuyển điều hòa hệ renin angiotensin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thuốc lợi tiểu nhóm thiazid làm tăng bài tiết ion natri\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phì đại nướu răng (Gingival hyperplasia) là tác dụng phụ kinh điển của thuốc chẹn kênh Calci (đặc biệt là Nifedipin, Amlodipin) do kích thích tăng sinh nguyên bào sợi nướu và lắng đọng chất nền ngoại bào. Tác dụng phụ này cũng gặp ở Phenytoin và Cyclosporin.",
      "Phương án này không đúng vì \"Thuốc chẹn chọn lọc thụ thể beta-1 adrenergic ở tim\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Một thuốc chẹn calci DHP cùng một thuốc mở kênh kali",
      "Một thuốc chẹn beta cùng một thuốc lợi tiểu quai hoặc thiazid",
      "Một thuốc chủ vận beta-2 cùng một thuốc kháng histamin H1",
      "Một thuốc trợ tim digoxin cùng một thuốc chống đông đường uống"
    ],
    "correct": 1,
    "explanation": "Hydralazin làm giãn mạnh tiểu động mạch gây ra 2 phản xạ bù trừ mãnh liệt: (1) Nhịp tim nhanh phản xạ qua trung gian giao cảm (ngăn ngừa bằng thuốc chẹn beta); (2) Giữ muối và nước qua trục RAA tại thận (ngăn ngừa bằng thuốc lợi tiểu). Phối hợp kiềng ba chân 'Hydralazin + Chẹn Beta + Lợi tiểu' là phác đồ kinh điển kiểm soát THA kháng trị.",
    "reference": "Sách Dược lý 2 tr. 79",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Một thuốc chẹn calci DHP cùng một thuốc mở kênh kali\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Hydralazin làm giãn mạnh tiểu động mạch gây ra 2 phản xạ bù trừ mãnh liệt: (1) Nhịp tim nhanh phản xạ qua trung gian giao cảm (ngăn ngừa bằng thuốc chẹn beta); (2) Giữ muối và nước qua trục RAA tại thận (ngăn ngừa bằng thuốc lợi tiểu). Phối hợp kiềng ba chân 'Hydralazin + Chẹn Beta + Lợi tiểu' là phác đồ kinh điển kiểm soát THA kháng trị.",
      "Phương án này không đúng vì \"Một thuốc chủ vận beta-2 cùng một thuốc kháng histamin H1\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Một thuốc trợ tim digoxin cùng một thuốc chống đông đường uống\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Nitroglycerin",
      "Trimetazidin",
      "Dipyridamol",
      "Nicorandil"
    ],
    "correct": 2,
    "explanation": "Dipyridamol hoặc DHP tác dụng nhanh làm giãn mạnh các tiểu động mạch vành ở vùng cơ tim lành, trong khi mạch máu vùng cơ tim thiếu máu đã giãn tối đa. Máu sẽ bị hút về vùng lành, làm vùng cơ tim thiếu máu càng bị thiếu máu trầm trọng hơn (hội chứng cướp máu).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Nitroglycerin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Trimetazidin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Dipyridamol hoặc DHP tác dụng nhanh làm giãn mạnh các tiểu động mạch vành ở vùng cơ tim lành, trong khi mạch máu vùng cơ tim thiếu máu đã giãn tối đa. Máu sẽ bị hút về vùng lành, làm vùng cơ tim thiếu máu càng bị thiếu máu trầm trọng hơn (hội chứng cướp máu).",
      "Phương án này không đúng vì \"Nicorandil\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
  },
  {
    "id": 266,
    "subject": "duocly2",
    "chapter": "Thuốc chữa CĐTN",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong điều trị cơn đau thắt ngực ổn định gắng sức, việc phối hợp giữa một thuốc làm chậm nhịp tim chẹn beta và một thuốc làm giãn hệ tĩnh mạch dung tích lớn mang lại hiệu quả hiệp đồng lý tưởng dựa trên cơ chế nào?",
    "options": [
      "Thuốc chẹn beta giảm nhịp tim phản xạ, thuốc giãn tĩnh mạch giảm tiền gánh",
      "Thuốc giãn tĩnh mạch làm tăng nhịp phản xạ triệt tiêu co thắt tiểu phế quản",
      "Thuốc chẹn beta thúc đẩy gan tăng chuyển hóa thuốc giãn tĩnh mạch thành NO",
      "Cả hai thuốc cùng ức chế enzym tổng hợp thromboxan A2 phòng ngừa huyết khối"
    ],
    "correct": 1,
    "explanation": "Sự phối hợp hoàn hảo: Nitrat gây hạ áp kéo theo phản xạ giao cảm làm tim nhanh và tăng co bóp $\\rightarrow$ Chẹn Beta sẽ triệt tiêu phản xạ này. Ngược lại, Chẹn Beta làm tim đập chậm kéo dài tâm trương làm tăng thể tích thất trái $\\rightarrow$ Nitrat làm giãn tĩnh mạch giảm hồi lưu sẽ triệt tiêu tác dụng phụ này.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Thuốc chẹn beta giảm nhịp tim phản xạ, thuốc giãn tĩnh mạch giảm tiền gánh\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Sự phối hợp hoàn hảo: Nitrat gây hạ áp kéo theo phản xạ giao cảm làm tim nhanh và tăng co bóp $\\rightarrow$ Chẹn Beta sẽ triệt tiêu phản xạ này. Ngược lại, Chẹn Beta làm tim đập chậm kéo dài tâm trương làm tăng thể tích thất trái $\\rightarrow$ Nitrat làm giãn tĩnh mạch giảm hồi lưu sẽ triệt tiêu tác dụng phụ này.",
      "Phương án này không đúng vì \"Thuốc chẹn beta thúc đẩy gan tăng chuyển hóa thuốc giãn tĩnh mạch thành NO\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Cả hai thuốc cùng ức chế enzym tổng hợp thromboxan A2 phòng ngừa huyết khối\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Nhiễm Methemoglobin máu làm giảm vận chuyển oxy của hồng cầu",
      "Giảm bạch cầu hạt trung tính đe dọa nhiễm trùng cơ hội",
      "Thiếu máu tan máu tự miễn với nghiệm pháp Coombs dương tính",
      "Đa hồng cầu thứ phát do tăng sản xuất erythropoietin ở thận"
    ],
    "correct": 0,
    "explanation": "Các gốc nitrit được tạo thành từ chuyển hóa nitrat có tính oxy hóa mạnh, oxy hóa ion Fe2+ trong hemoglobin thành Fe3+ tạo Methemoglobin. Khi nồng độ MetHb > 10-20%, máu có màu nâu sô-cô-la và giảm khả năng vận chuyển oxy mô.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Các gốc nitrit được tạo thành từ chuyển hóa nitrat có tính oxy hóa mạnh, oxy hóa ion Fe2+ trong hemoglobin thành Fe3+ tạo Methemoglobin. Khi nồng độ MetHb > 10-20%, máu có màu nâu sô-cô-la và giảm khả năng vận chuyển oxy mô.",
      "Phương án này không đúng vì \"Giảm bạch cầu hạt trung tính đe dọa nhiễm trùng cơ hội\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thiếu máu tan máu tự miễn với nghiệm pháp Coombs dương tính\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Đa hồng cầu thứ phát do tăng sản xuất erythropoietin ở thận\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Tăng nguy cơ gây xơ hóa mô kẽ phổi tiến triển",
      "Hội chứng tiêu cơ vân cấp gây tổn thương thận",
      "Gây suy tủy xương bất sản nặng không hồi phục",
      "Tăng tỷ lệ tử vong do loạn nhịp thất ác tính"
    ],
    "correct": 3,
    "explanation": "Thử nghiệm CAST chứng minh: mặc dù Flecainid và Encainid triệt tiêu rất tốt các ngoại tâm thu thất trên Holter ECG, nhưng trên bệnh nhân sau nhồi máu cơ tim có tổn thương thực thể cơ tim, thuốc lại làm tăng gấp 2.5 lần tỷ lệ tử vong do khởi phát các cơn loạn nhịp thất ác tính (hiệu ứng proarrhythmia).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Tăng nguy cơ gây xơ hóa mô kẽ phổi tiến triển\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Hội chứng tiêu cơ vân cấp gây tổn thương thận\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Gây suy tủy xương bất sản nặng không hồi phục\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Thử nghiệm CAST chứng minh: mặc dù Flecainid và Encainid triệt tiêu rất tốt các ngoại tâm thu thất trên Holter ECG, nhưng trên bệnh nhân sau nhồi máu cơ tim có tổn thương thực thể cơ tim, thuốc lại làm tăng gấp 2.5 lần tỷ lệ tử vong do khởi phát các cơn loạn nhịp thất ác tính (hiệu ứng proarrhythmia)."
    ]
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
      "Tiêm tĩnh mạch magnesi sulfat",
      "Tiêm tĩnh mạch calci clorid",
      "Tiêm truyền natri bicarbonat",
      "Tiêm truyền tĩnh mạch lidocain"
    ],
    "correct": 0,
    "explanation": "Magnesi sulfat (MgSO4) tiêm tĩnh mạch là thuốc lựa chọn đầu tay để điều trị và cắt cơn xoắn đỉnh (kể cả khi nồng độ Mg2+ máu bình thường), nhờ cơ chế chẹn dòng calci đi vào màng tế bào làm triệt tiêu các điện thế hậu khử cực sớm (EADs).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Magnesi sulfat (MgSO4) tiêm tĩnh mạch là thuốc lựa chọn đầu tay để điều trị và cắt cơn xoắn đỉnh (kể cả khi nồng độ Mg2+ máu bình thường), nhờ cơ chế chẹn dòng calci đi vào màng tế bào làm triệt tiêu các điện thế hậu khử cực sớm (EADs).",
      "Phương án này không đúng vì \"Tiêm tĩnh mạch calci clorid\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tiêm truyền natri bicarbonat\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tiêm truyền tĩnh mạch lidocain\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Nhóm IA chẹn kênh natri kéo dài tái cực",
      "Nhóm II chẹn thụ thể beta giao cảm",
      "Nhóm IC chẹn mạnh kênh natri phân ly chậm",
      "Nhóm IV chẹn chọn lọc kênh calci màng tim"
    ],
    "correct": 1,
    "explanation": "Các thuốc chẹn beta-adrenergic (Nhóm II) là nhóm thuốc chống loạn nhịp duy nhất được chứng minh nhất quán trong các thử nghiệm lâm sàng lớn là làm giảm tỷ lệ đột tử do tim và cải thiện tỷ lệ sống còn sau nhồi máu cơ tim.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Nhóm IA chẹn kênh natri kéo dài tái cực\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Các thuốc chẹn beta-adrenergic (Nhóm II) là nhóm thuốc chống loạn nhịp duy nhất được chứng minh nhất quán trong các thử nghiệm lâm sàng lớn là làm giảm tỷ lệ đột tử do tim và cải thiện tỷ lệ sống còn sau nhồi máu cơ tim.",
      "Phương án này không đúng vì \"Nhóm IC chẹn mạnh kênh natri phân ly chậm\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Nhóm IV chẹn chọn lọc kênh calci màng tim\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Ức chế trực tiếp sức co bóp tim và làm chậm nhịp tim",
      "Ức chế chọn lọc thụ thể beta-2 giao cảm tại thành mạch",
      "Tăng chọn lọc đào thải acid uric qua nước tiểu ở thận",
      "Vừa lợi niệu thải muối vừa chẹn calci gây giãn mạch"
    ],
    "correct": 3,
    "explanation": "Indapamid là dẫn chất indol-sulfonamid. Ngoài tác dụng lợi niệu nhẹ tại ống lượn xa, thuốc còn có đặc tính chẹn dòng calci qua màng tế bào cơ trơn mạch máu, làm giảm sức cản ngoại vi và hạ huyết áp hiệu quả mà ít gây rối loạn chuyển hóa lipid và glucose.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Ức chế trực tiếp sức co bóp tim và làm chậm nhịp tim\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ức chế chọn lọc thụ thể beta-2 giao cảm tại thành mạch\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tăng chọn lọc đào thải acid uric qua nước tiểu ở thận\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Indapamid là dẫn chất indol-sulfonamid. Ngoài tác dụng lợi niệu nhẹ tại ống lượn xa, thuốc còn có đặc tính chẹn dòng calci qua màng tế bào cơ trơn mạch máu, làm giảm sức cản ngoại vi và hạ huyết áp hiệu quả mà ít gây rối loạn chuyển hóa lipid và glucose."
    ]
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
      "Dự phòng các cơn say sóng và say tàu xe",
      "Giảm phù nề và co rút cơ khi vận động nặng",
      "Phòng và điều trị chứng say độ cao cấp",
      "Tăng sức bền cơ bắp trong thi đấu thể thao"
    ],
    "correct": 2,
    "explanation": "Khi lên vùng cao thiếu oxy, cơ thể thở nhanh bù trừ gây nhiễm kiềm hô hấp, làm ức chế trung khu hô hấp ở hành não. Acetazolamid làm tăng bài tiết HCO3- qua nước tiểu gây nhiễm toan chuyển hóa nhẹ, kích thích trung khu hô hấp thông khí sâu hơn, phòng ngừa chứng say độ cao cấp.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Dự phòng các cơn say sóng và say tàu xe\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Giảm phù nề và co rút cơ khi vận động nặng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Khi lên vùng cao thiếu oxy, cơ thể thở nhanh bù trừ gây nhiễm kiềm hô hấp, làm ức chế trung khu hô hấp ở hành não. Acetazolamid làm tăng bài tiết HCO3- qua nước tiểu gây nhiễm toan chuyển hóa nhẹ, kích thích trung khu hô hấp thông khí sâu hơn, phòng ngừa chứng say độ cao cấp.",
      "Phương án này không đúng vì \"Tăng sức bền cơ bắp trong thi đấu thể thao\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Tăng đào thải ion calci qua ống thận ở quai Henle",
      "Ức chế trực tiếp hoạt tính của tế bào tạo cốt bào",
      "Kích thích liên tục hoạt động tế bào hủy cốt bào",
      "Giảm tiết acid dịch vị làm cản trở hấp thu calci"
    ],
    "correct": 3,
    "explanation": "Acid dịch vị dạ dày cần thiết để ion hóa muối calci không tan (như calci carbonat) thành Ca2+ tự do để hấp thu ở ruột. PPI làm tăng pH dạ dày kéo dài dẫn tới giảm hấp thu calci, gây cường cận giáp thứ phát và loãng xương, tăng nguy cơ gãy xương.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Tăng đào thải ion calci qua ống thận ở quai Henle\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ức chế trực tiếp hoạt tính của tế bào tạo cốt bào\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích thích liên tục hoạt động tế bào hủy cốt bào\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Acid dịch vị dạ dày cần thiết để ion hóa muối calci không tan (như calci carbonat) thành Ca2+ tự do để hấp thu ở ruột. PPI làm tăng pH dạ dày kéo dài dẫn tới giảm hấp thu calci, gây cường cận giáp thứ phát và loãng xương, tăng nguy cơ gãy xương."
    ]
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
      "Ức chế chọn lọc thụ thể gastrin trên tế bào viền",
      "Tạo màng bao cơ học che phủ bề mặt niêm mạc dạ dày",
      "Là tiền chất bắt buộc hoạt hóa trong môi trường acid",
      "Ức chế cạnh tranh với ion kali mà không cần acid hoạt hóa"
    ],
    "correct": 3,
    "explanation": "Vonoprazan (P-CAB) gắn cạnh tranh với ion K+ ở mặt ngoài của bơm H+/K+-ATPase mà không cần proton hóa trong môi trường acid. Thuốc có thời gian bán thải dài, ức chế acid nhanh, mạnh và ổn định hơn nhiều so với PPI.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Ức chế chọn lọc thụ thể gastrin trên tế bào viền\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tạo màng bao cơ học che phủ bề mặt niêm mạc dạ dày\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Là tiền chất bắt buộc hoạt hóa trong môi trường acid\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Vonoprazan (P-CAB) gắn cạnh tranh với ion K+ ở mặt ngoài của bơm H+/K+-ATPase mà không cần proton hóa trong môi trường acid. Thuốc có thời gian bán thải dài, ức chế acid nhanh, mạnh và ổn định hơn nhiều so với PPI."
    ]
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
      "Nhóm sulfhydryl tự do khử và bẻ gãy cầu nối disulfid",
      "Kích thích biểu mô phế quản tăng tiết dịch thanh dịch",
      "Ức chế enzym elastase và men protease của bạch cầu",
      "Thủy phân trực tiếp các chuỗi ADN ngoại bào trong đờm"
    ],
    "correct": 0,
    "explanation": "N-Acetylcystein (NAC) mang nhóm sulfhydryl (-SH) tự do có tính khử, bẻ gãy các cầu nối disulfid (-S-S-) liên kết các sợi mucopolysaccharid của đờm, làm giảm độ quánh nhớt của chất nhầy và dễ tống đờm ra ngoài qua phản xạ ho.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "N-Acetylcystein (NAC) mang nhóm sulfhydryl (-SH) tự do có tính khử, bẻ gãy các cầu nối disulfid (-S-S-) liên kết các sợi mucopolysaccharid của đờm, làm giảm độ quánh nhớt của chất nhầy và dễ tống đờm ra ngoài qua phản xạ ho.",
      "Phương án này không đúng vì \"Kích thích biểu mô phế quản tăng tiết dịch thanh dịch\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ức chế enzym elastase và men protease của bạch cầu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thủy phân trực tiếp các chuỗi ADN ngoại bào trong đờm\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Kích thích enzym phosphodiesterase làm giảm AMP vòng",
      "Ức chế phản xạ ho gây ứ đọng đờm và giải phóng histamin",
      "Phá hủy trực tiếp lớp chất diện hoạt surfactant phế nang",
      "Ức chế dẫn truyền thần kinh giao cảm gây hạ áp nặng"
    ],
    "correct": 1,
    "explanation": "Trong cơn hen cấp, phản xạ ho giúp tống đờm dãi bít tắc lòng phế quản. Dùng thuốc giảm ho ức chế trung khu ho sẽ làm đờm ứ nghẽn bít hoàn toàn các tiểu phế quản gây suy hô hấp ngạt thở; ngoài ra Codein còn gây phóng thích histamin làm co thắt phế quản tăng thêm.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Kích thích enzym phosphodiesterase làm giảm AMP vòng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Trong cơn hen cấp, phản xạ ho giúp tống đờm dãi bít tắc lòng phế quản. Dùng thuốc giảm ho ức chế trung khu ho sẽ làm đờm ứ nghẽn bít hoàn toàn các tiểu phế quản gây suy hô hấp ngạt thở; ngoài ra Codein còn gây phóng thích histamin làm co thắt phế quản tăng thêm.",
      "Phương án này không đúng vì \"Phá hủy trực tiếp lớp chất diện hoạt surfactant phế nang\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ức chế dẫn truyền thần kinh giao cảm gây hạ áp nặng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Desloratadin là chất chuyển hóa có hoạt tính chính của Loratadin sau khi qua gan khử ethoxycarbonyl. Desloratadin có ái lực với thụ thể H1 mạnh gấp 3-4 lần Loratadin và thời gian bán thải kéo dài khoảng 27 giờ.",
      "Phương án này không đúng vì \"Levocetirizin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Rupatadin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Bilastin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Azelastin",
      "Promethazin"
    ],
    "correct": 2,
    "explanation": "Azelastin, Olopatadin và Ketotifen là các thuốc kháng H1 thế hệ 2 tác dụng tại chỗ (nhỏ mắt hoặc xịt mũi) có cơ chế kép: vừa đối kháng cạnh tranh thụ thể H1, vừa làm bền vững màng dưỡng bào ngăn phóng thích histamin và leukotriene.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Diphenhydramin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Clorpheniramin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Azelastin, Olopatadin và Ketotifen là các thuốc kháng H1 thế hệ 2 tác dụng tại chỗ (nhỏ mắt hoặc xịt mũi) có cơ chế kép: vừa đối kháng cạnh tranh thụ thể H1, vừa làm bền vững màng dưỡng bào ngăn phóng thích histamin và leukotriene.",
      "Phương án này không đúng vì \"Promethazin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
  },
  {
    "id": 279,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Khi điều trị bệnh nang sán chó do Echinococcus granulosus bằng Albendazol kéo dài, người bệnh bắt buộc phải xét nghiệm công thức máu và men gan định kỳ do nguy cơ nào?",
    "options": [
      "Lắng đọng tinh thể acid uric tại hệ thống ống thận",
      "Tăng nồng độ calci máu gây vôi hóa mô tim mạch",
      "Độc tế bào gan và ức chế tủy xương gây hạ bạch cầu trung tính",
      "Tan máu mạn tính ngoài mạch gây thiếu máu hồng cầu to"
    ],
    "correct": 2,
    "explanation": "Dùng Albendazol liều cao kéo dài trong điều trị nang sán mô gây độc tính tích lũy: làm tăng men gan dẫn đến viêm gan (khoảng 15% bệnh nhân) và ức chế tủy xương gây giảm bạch cầu trung tính hoặc suy tủy. Cần xét nghiệm ALT, AST và công thức máu mỗi 2 tuần trong 3 tháng đầu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Lắng đọng tinh thể acid uric tại hệ thống ống thận\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tăng nồng độ calci máu gây vôi hóa mô tim mạch\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Dùng Albendazol liều cao kéo dài trong điều trị nang sán mô gây độc tính tích lũy: làm tăng men gan dẫn đến viêm gan (khoảng 15% bệnh nhân) và ức chế tủy xương gây giảm bạch cầu trung tính hoặc suy tủy. Cần xét nghiệm ALT, AST và công thức máu mỗi 2 tuần trong 3 tháng đầu.",
      "Phương án này không đúng vì \"Tan máu mạn tính ngoài mạch gây thiếu máu hồng cầu to\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
  },
  {
    "id": 280,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Levamisol trước đây từng dùng để tẩy giun đũa nhưng hiện nay bị hạn chế do tác dụng không mong muốn nghiêm trọng nào trên hệ tạo máu?",
    "options": [
      "Gây mất bạch cầu hạt qua cơ chế miễn dịch tự kháng thể",
      "Tăng sinh tiểu cầu tiên phát gây tắc mạch",
      "Kích thích tủy xương gây hội chứng đa hồng cầu thứ phát",
      "Biến đổi cấu trúc màng làm hồng cầu biến dạng hình liềm"
    ],
    "correct": 0,
    "explanation": "Levamisol kích thích miễn dịch bất thường sinh tự kháng thể gây mất bạch cầu hạt (Agranulocytosis) và viêm mạch máu hoại tử da, do đó đã bị loại bỏ khỏi danh mục thuốc tẩy giun thông thường ở hầu hết các nước.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Levamisol kích thích miễn dịch bất thường sinh tự kháng thể gây mất bạch cầu hạt (Agranulocytosis) và viêm mạch máu hoại tử da, do đó đã bị loại bỏ khỏi danh mục thuốc tẩy giun thông thường ở hầu hết các nước.",
      "Phương án này không đúng vì \"Tăng sinh tiểu cầu tiên phát gây tắc mạch\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích thích tủy xương gây hội chứng đa hồng cầu thứ phát\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Biến đổi cấu trúc màng làm hồng cầu biến dạng hình liềm\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Ức chế dòng calci làm chậm dẫn truyền qua nút nhĩ thất",
      "Cải thiện nội mô, chống viêm, ổn định mảng xơ vữa và tiểu cầu",
      "Tăng đào thải natri qua quai Henle của thận làm hạ áp",
      "Kích thích tủy xương tăng sản xuất dòng hồng cầu ngoại vi"
    ],
    "correct": 1,
    "explanation": "Tác dụng đa hiệu (Pleiotropic effects) của Statin xuất phát từ việc ức chế tổng hợp các isoprenoid (farnesyl pyrophosphate, geranylgeranyl pyrophosphate), giúp tăng biểu hiện eNOS, giảm cytokin viêm (giảm hs-CRP), làm dày vỏ xơ ổn định mảng vữa ngừa nhồi máu cơ tim.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Ức chế dòng calci làm chậm dẫn truyền qua nút nhĩ thất\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Tác dụng đa hiệu (Pleiotropic effects) của Statin xuất phát từ việc ức chế tổng hợp các isoprenoid (farnesyl pyrophosphate, geranylgeranyl pyrophosphate), giúp tăng biểu hiện eNOS, giảm cytokin viêm (giảm hs-CRP), làm dày vỏ xơ ổn định mảng vữa ngừa nhồi máu cơ tim.",
      "Phương án này không đúng vì \"Tăng đào thải natri qua quai Henle của thận làm hạ áp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích thích tủy xương tăng sản xuất dòng hồng cầu ngoại vi\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Định lượng amylase và lipase huyết thanh",
      "Định lượng bilirubin toàn phần và trực tiếp",
      "Định lượng creatin kinase và creatinin máu",
      "Định lượng nồng độ calci ion hóa và phosphat"
    ],
    "correct": 2,
    "explanation": "Đau cơ kèm nước tiểu sẫm màu là dấu hiệu kinh điển của tiêu cơ vân cấp (Rhabdomyolysis) do độc tính statin. Bắt buộc phải ngừng Statin ngay lập tức và xét nghiệm Creatine Kinase (CK) cùng Creatinin để đánh giá mức độ hủy cơ và tổn thương thận cấp do myoglobin.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Định lượng amylase và lipase huyết thanh\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Định lượng bilirubin toàn phần và trực tiếp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Đau cơ kèm nước tiểu sẫm màu là dấu hiệu kinh điển của tiêu cơ vân cấp (Rhabdomyolysis) do độc tính statin. Bắt buộc phải ngừng Statin ngay lập tức và xét nghiệm Creatine Kinase (CK) cùng Creatinin để đánh giá mức độ hủy cơ và tổn thương thận cấp do myoglobin.",
      "Phương án này không đúng vì \"Định lượng nồng độ calci ion hóa và phosphat\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Ức chế phức hợp chuỗi vận chuyển điện tử tại màng ty thể",
      "Ức chế tuần tự hai chặng tổng hợp acid tetrahydrofolic",
      "Ức chế trùng hợp vi ống ngăn cản hình thành thoi vô sắc",
      "Phong bế thụ thể nhập bào cholesterol trên màng hồng cầu"
    ],
    "correct": 1,
    "explanation": "Sulfadoxin ức chế enzym dihydropteroate synthase (cạnh tranh PABA), còn Pyrimethamin ức chế enzym dihydrofolate reductase (DHFR). Ức chế kép tuần tự hai enzym liên tiếp làm ngừng trệ hoàn toàn sự tổng hợp acid tetrahydrofolic cần cho sao chép DNA ký sinh trùng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Ức chế phức hợp chuỗi vận chuyển điện tử tại màng ty thể\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Sulfadoxin ức chế enzym dihydropteroate synthase (cạnh tranh PABA), còn Pyrimethamin ức chế enzym dihydrofolate reductase (DHFR). Ức chế kép tuần tự hai enzym liên tiếp làm ngừng trệ hoàn toàn sự tổng hợp acid tetrahydrofolic cần cho sao chép DNA ký sinh trùng.",
      "Phương án này không đúng vì \"Ức chế trùng hợp vi ống ngăn cản hình thành thoi vô sắc\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Phong bế thụ thể nhập bào cholesterol trên màng hồng cầu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Xuất huyết tiêu hóa ồ ạt kèm theo chảy máu niêm mạc",
      "Tăng lắng đọng sắc tố da gây sạm đen toàn thân kéo dài",
      "Phân đen như hắc ín kèm theo các cơn sốt rét run",
      "Tan máu nội mạch, đái huyết cầu tố và suy thận cấp"
    ],
    "correct": 3,
    "explanation": "Sốt tiểu đen (Blackwater fever) là biến chứng tan máu nội mạch cấp tính dữ dội ở người nhiễm P. falciparum điều trị bằng Quinin. Hồng cầu vỡ hàng loạt giải phóng lượng lớn hemoglobin vào huyết tương, vượt quá ngưỡng gắn haptoglobin, bài tiết qua nước tiểu gây nước tiểu màu đen/nâu sẫm và tắc ống thận suy thận cấp.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Xuất huyết tiêu hóa ồ ạt kèm theo chảy máu niêm mạc\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tăng lắng đọng sắc tố da gây sạm đen toàn thân kéo dài\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Phân đen như hắc ín kèm theo các cơn sốt rét run\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Sốt tiểu đen (Blackwater fever) là biến chứng tan máu nội mạch cấp tính dữ dội ở người nhiễm P. falciparum điều trị bằng Quinin. Hồng cầu vỡ hàng loạt giải phóng lượng lớn hemoglobin vào huyết tương, vượt quá ngưỡng gắn haptoglobin, bài tiết qua nước tiểu gây nước tiểu màu đen/nâu sẫm và tắc ống thận suy thận cấp."
    ]
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
      "Thuốc chẹn beta giao cảm phối hợp với lợi tiểu quai liều cao",
      "Thuốc SSRI phối hợp với thuốc ức chế MAO hoặc tramadol",
      "Thuốc ức chế men chuyển phối hợp với thuốc nhóm statin",
      "Thuốc kháng H1 thế hệ hai phối hợp với paracetamol"
    ],
    "correct": 1,
    "explanation": "Phối hợp hai hay nhiều thuốc cùng làm tăng nồng độ Serotonin ở synap thần kinh trung ương (SSRI ngăn thu hồi + MAOI ngăn giáng hóa, hoặc kèm Tramadol, Linezolid) sẽ kích hoạt quá mức thụ thể 5-HT2A. Điều này dẫn tới hội chứng Serotonin: kích động thần kinh, rung giật nhãn cầu, co giật cơ, sốt cao ác tính và tử vong.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Thuốc chẹn beta giao cảm phối hợp với lợi tiểu quai liều cao\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phối hợp hai hay nhiều thuốc cùng làm tăng nồng độ Serotonin ở synap thần kinh trung ương (SSRI ngăn thu hồi + MAOI ngăn giáng hóa, hoặc kèm Tramadol, Linezolid) sẽ kích hoạt quá mức thụ thể 5-HT2A. Điều này dẫn tới hội chứng Serotonin: kích động thần kinh, rung giật nhãn cầu, co giật cơ, sốt cao ác tính và tử vong.",
      "Phương án này không đúng vì \"Thuốc ức chế men chuyển phối hợp với thuốc nhóm statin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thuốc kháng H1 thế hệ hai phối hợp với paracetamol\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Ức chế thụ thể vận chuyển anion hữu cơ OAT1 tại ống lượn gần",
      "Kích thích thụ thể vận chuyển cation hữu cơ OCT2 tại ống thận",
      "Ức chế kênh đồng vận chuyển natri glucose SGLT-2 tại màng lọc",
      "Ức chế bơm tống thuốc P-glycoprotein tại biểu mô ống thận"
    ],
    "correct": 3,
    "explanation": "Digoxin được bài xuất chủ yếu qua ống thận nhờ bơm tống thuốc P-glycoprotein (P-gp). Verapamil, Amiodaron, Quinidin và Clarithromycin là các chất ức chế mạnh P-gp, làm giảm bài tiết Digoxin qua thận và tăng hấp thu Digoxin từ ruột, khiến nồng độ Digoxin trong huyết tương tăng vọt gấp 2-3 lần.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Ức chế thụ thể vận chuyển anion hữu cơ OAT1 tại ống lượn gần\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích thích thụ thể vận chuyển cation hữu cơ OCT2 tại ống thận\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ức chế kênh đồng vận chuyển natri glucose SGLT-2 tại màng lọc\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Digoxin được bài xuất chủ yếu qua ống thận nhờ bơm tống thuốc P-glycoprotein (P-gp). Verapamil, Amiodaron, Quinidin và Clarithromycin là các chất ức chế mạnh P-gp, làm giảm bài tiết Digoxin qua thận và tăng hấp thu Digoxin từ ruột, khiến nồng độ Digoxin trong huyết tương tăng vọt gấp 2-3 lần."
    ]
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
      "Oxytocin tương đồng vasopressin, kích hoạt thụ thể V2 giữ nước",
      "Oxytocin phá hủy biểu mô ống lượn gần làm giảm tái hấp thu natri",
      "Oxytocin ức chế hoàn toàn quá trình sinh tổng hợp aldosteron",
      "Oxytocin kích thích trung tâm khát ở vùng dưới đồi gây uống nhiều"
    ],
    "correct": 0,
    "explanation": "Oxytocin và Vasopressin (ADH) đều là các nonapeptid có cấu trúc tương tự nhau (chỉ khác 2 acid amin). Ở liều cao truyền kéo dài, Oxytocin gắn kích hoạt thụ thể V2 ở tế bào chính ống góp thận, gây giữ nước tự do dẫn đến hạ Natri máu pha loãng và ngộ độc nước.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Oxytocin và Vasopressin (ADH) đều là các nonapeptid có cấu trúc tương tự nhau (chỉ khác 2 acid amin). Ở liều cao truyền kéo dài, Oxytocin gắn kích hoạt thụ thể V2 ở tế bào chính ống góp thận, gây giữ nước tự do dẫn đến hạ Natri máu pha loãng và ngộ độc nước.",
      "Phương án này không đúng vì \"Oxytocin phá hủy biểu mô ống lượn gần làm giảm tái hấp thu natri\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Oxytocin ức chế hoàn toàn quá trình sinh tổng hợp aldosteron\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Oxytocin kích thích trung tâm khát ở vùng dưới đồi gây uống nhiều\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Đối kháng cạnh tranh thụ thể progesteron",
      "Chủ vận chọn lọc trên thụ thể estrogen",
      "Ức chế men tổng hợp prostaglandin tử cung",
      "Phong bế chọn lọc thụ thể hormon oxytocin"
    ],
    "correct": 0,
    "explanation": "Mifepriston là chất đối kháng cạnh tranh tại thụ thể Progesteron. Thiếu hụt tác dụng của progesteron làm niêm mạc tử cung màng rụng bị hoại tử bong tróc, túi thai rời khỏi thành tử cung và làm tăng độ nhạy cảm của cơ tử cung với prostaglandin (Misoprostol dùng tiếp theo để tống thai).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Mifepriston là chất đối kháng cạnh tranh tại thụ thể Progesteron. Thiếu hụt tác dụng của progesteron làm niêm mạc tử cung màng rụng bị hoại tử bong tróc, túi thai rời khỏi thành tử cung và làm tăng độ nhạy cảm của cơ tử cung với prostaglandin (Misoprostol dùng tiếp theo để tống thai).",
      "Phương án này không đúng vì \"Chủ vận chọn lọc trên thụ thể estrogen\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ức chế men tổng hợp prostaglandin tử cung\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Phong bế chọn lọc thụ thể hormon oxytocin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Sitagliptin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Vildagliptin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Linagliptin đào thải chủ yếu qua hệ gan - mật và phân dưới dạng nguyên vẹn (khoảng 90%), chỉ 5% thải qua thận. Vì vậy, Linagliptin là thuốc duy nhất trong nhóm DPP-4 có thể dùng liều cố định 5 mg/ngày cho mọi giai đoạn suy thận (kể cả bệnh thận mạn giai đoạn cuối chạy thận nhân tạo).",
      "Phương án này không đúng vì \"Linagliptin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Thụ thể nhân PPAR-alpha",
      "Thụ thể nhân PPAR-gamma",
      "Thụ thể nhân LXR nội bào",
      "Thụ thể nhân FXR đường mật"
    ],
    "correct": 1,
    "explanation": "Pioglitazone là chất chủ vận chọn lọc trên thụ thể nhân PPAR-gamma (có nhiều ở mô mỡ, cơ vân, gan). Hoạt hóa PPAR-gamma kích thích phiên mã các gen điều hòa chuyển hóa glucid và lipid, tăng tổng hợp chất vận chuyển GLUT-4 và adiponectin, làm tăng nhạy cảm insulin ngoại vi.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Thụ thể nhân PPAR-alpha\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Pioglitazone là chất chủ vận chọn lọc trên thụ thể nhân PPAR-gamma (có nhiều ở mô mỡ, cơ vân, gan). Hoạt hóa PPAR-gamma kích thích phiên mã các gen điều hòa chuyển hóa glucid và lipid, tăng tổng hợp chất vận chuyển GLUT-4 và adiponectin, làm tăng nhạy cảm insulin ngoại vi.",
      "Phương án này không đúng vì \"Thụ thể nhân LXR nội bào\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thụ thể nhân FXR đường mật\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Thuốc ức chế trực tiếp men thrombin",
      "Thuốc kháng vitamin K dùng đường uống",
      "Thuốc chống đông ức chế yếu tố Xa",
      "Thuốc ức chế kết tập tiểu cầu máu"
    ],
    "correct": 2,
    "explanation": "Andexanet alfa là protein yếu tố Xa người tái tổ hợp bị đột biến (mất hoạt tính xúc tác đông máu), đóng vai trò như một phân tử 'mồi nhử' gắn chặt và giam giữ các thuốc ức chế Xa (Rivaroxaban, Apixaban), giải phóng yếu tố Xa nội sinh của cơ thể để phục hồi đông máu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Thuốc ức chế trực tiếp men thrombin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thuốc kháng vitamin K dùng đường uống\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Andexanet alfa là protein yếu tố Xa người tái tổ hợp bị đột biến (mất hoạt tính xúc tác đông máu), đóng vai trò như một phân tử 'mồi nhử' gắn chặt và giam giữ các thuốc ức chế Xa (Rivaroxaban, Apixaban), giải phóng yếu tố Xa nội sinh của cơ thể để phục hồi đông máu.",
      "Phương án này không đúng vì \"Thuốc ức chế kết tập tiểu cầu máu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Ức chế không hồi phục thụ thể ADP P2Y12 trên bề mặt tiểu cầu",
      "Đối kháng cạnh tranh tại thụ thể glycoprotein IIb/IIIa",
      "Khóa thụ thể thromboxan A2 ngăn truyền tín hiệu co mạch",
      "Hoạt hóa trực tiếp thụ thể prostacyclin IP làm tăng cAMP"
    ],
    "correct": 0,
    "explanation": "Clopidogrel là tiền chất dẫn xuất thienopyridin, qua gan chuyển hóa tạo chất có hoạt tính gắn cộng hóa trị vào gốc cystein của thụ thể P2Y12, ức chế vĩnh viễn sự gắn của ADP lên thụ thể này, ngăn cản con đường hoạt hóa phức hợp GP IIb/IIIa.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Clopidogrel là tiền chất dẫn xuất thienopyridin, qua gan chuyển hóa tạo chất có hoạt tính gắn cộng hóa trị vào gốc cystein của thụ thể P2Y12, ức chế vĩnh viễn sự gắn của ADP lên thụ thể này, ngăn cản con đường hoạt hóa phức hợp GP IIb/IIIa.",
      "Phương án này không đúng vì \"Đối kháng cạnh tranh tại thụ thể glycoprotein IIb/IIIa\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Khóa thụ thể thromboxan A2 ngăn truyền tín hiệu co mạch\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Hoạt hóa trực tiếp thụ thể prostacyclin IP làm tăng cAMP\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Uống viên phóng thích kéo dài hàng ngày",
      "Tiêm bắp sâu định kỳ duy trì suốt đời",
      "Ngậm dưới lưỡi dạng viên phân tán nhanh",
      "Đặt hậu môn dạng viên đạn tan trong dịch"
    ],
    "correct": 1,
    "explanation": "Do mất hoàn toàn yếu tố nội tại của dạ dày hoặc mất hồi tràng, cơ thể hoàn toàn không thể hấp thu B12 qua đường tiêu hóa. Bệnh nhân bắt buộc phải tiêm bắp Vitamin B12 định kỳ suốt đời (ban đầu tiêm cách ngày, sau đó duy trì tiêm bắp 1000 mcg mỗi 1-3 tháng).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Uống viên phóng thích kéo dài hàng ngày\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Do mất hoàn toàn yếu tố nội tại của dạ dày hoặc mất hồi tràng, cơ thể hoàn toàn không thể hấp thu B12 qua đường tiêu hóa. Bệnh nhân bắt buộc phải tiêm bắp Vitamin B12 định kỳ suốt đời (ban đầu tiêm cách ngày, sau đó duy trì tiêm bắp 1000 mcg mỗi 1-3 tháng).",
      "Phương án này không đúng vì \"Ngậm dưới lưỡi dạng viên phân tán nhanh\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Đặt hậu môn dạng viên đạn tan trong dịch\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Tế bào tủy xương, điều trị thiếu máu do thiếu acid folic",
      "Tế bào Kupffer gan, điều trị thiếu máu do xơ gan mất bù",
      "Tế bào nội mô lách, điều trị thiếu máu do tan máu tự miễn",
      "Tế bào kẽ thận, điều trị thiếu máu do suy thận mạn tính"
    ],
    "correct": 3,
    "explanation": "Khoảng 90% Erythropoietin nội sinh được sản xuất bởi các nguyên bào sợi quanh ống lượn gần tại thận khi có thiếu oxy mô. Bệnh nhân suy thận mạn tính bị giảm sản xuất EPO trầm trọng dẫn đến thiếu máu đẳng sắc đẳng bào, bắt buộc phải dùng EPO tái tổ hợp (rHuEPO).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Tế bào tủy xương, điều trị thiếu máu do thiếu acid folic\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tế bào Kupffer gan, điều trị thiếu máu do xơ gan mất bù\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tế bào nội mô lách, điều trị thiếu máu do tan máu tự miễn\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Khoảng 90% Erythropoietin nội sinh được sản xuất bởi các nguyên bào sợi quanh ống lượn gần tại thận khi có thiếu oxy mô. Bệnh nhân suy thận mạn tính bị giảm sản xuất EPO trầm trọng dẫn đến thiếu máu đẳng sắc đẳng bào, bắt buộc phải dùng EPO tái tổ hợp (rHuEPO)."
    ]
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
      "Chống oxy hóa bảo vệ lipid màng tế bào",
      "Coenzym tham gia vào quá trình đông máu",
      "Vận chuyển acid amin qua màng sinh học",
      "Kích thích tuyến thượng thận tiết hormon"
    ],
    "correct": 0,
    "explanation": "Vitamin E là chất chống oxy hóa tan trong mỡ chính của cơ thể. Phân tử này bẫy các gốc tự do peroxyl, ngăn chặn phản ứng dây chuyền peroxy hóa lipid màng tế bào (đặc biệt màng hồng cầu và mô thần kinh), duy trì sự toàn vẹn của màng tế bào.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Vitamin E là chất chống oxy hóa tan trong mỡ chính của cơ thể. Phân tử này bẫy các gốc tự do peroxyl, ngăn chặn phản ứng dây chuyền peroxy hóa lipid màng tế bào (đặc biệt màng hồng cầu và mô thần kinh), duy trì sự toàn vẹn của màng tế bào.",
      "Phương án này không đúng vì \"Coenzym tham gia vào quá trình đông máu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Vận chuyển acid amin qua màng sinh học\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích thích tuyến thượng thận tiết hormon\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Vitamin D",
      "Vitamin B12",
      "Vitamin K"
    ],
    "correct": 3,
    "explanation": "Vitamin E liều cao (> 800-1000 IU/ngày) ức chế chức năng tiểu cầu và cản trở sự chuyển hóa của Vitamin K trong gan, làm giảm nồng độ các yếu tố đông máu phụ thuộc vitamin K, làm tăng nguy cơ xuất huyết, đặc biệt ở bệnh nhân đang dùng thuốc chống đông Warfarin.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Vitamin C\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Vitamin D\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Vitamin B12\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Vitamin E liều cao (> 800-1000 IU/ngày) ức chế chức năng tiểu cầu và cản trở sự chuyển hóa của Vitamin K trong gan, làm giảm nồng độ các yếu tố đông máu phụ thuộc vitamin K, làm tăng nguy cơ xuất huyết, đặc biệt ở bệnh nhân đang dùng thuốc chống đông Warfarin."
    ]
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
      "Vitamin K chống xuất huyết",
      "Vitamin B1 tan trong nước",
      "Vitamin A tan trong dầu",
      "Vitamin B12 nguồn gốc động vật"
    ],
    "correct": 0,
    "explanation": "Hệ vi khuẩn đường ruột tổng hợp Vitamin K2 (menaquinone) cung cấp một phần nhu cầu cơ thể. Trẻ sơ sinh có đường ruột hoàn toàn vô khuẩn và sữa mẹ chứa rất ít vitamin K, do đó có nguy cơ cao bị bệnh xuất huyết ở trẻ sơ sinh (đặc biệt xuất huyết não màng não). Tiêm bắp Vitamin K1 ngay sau sinh là quy chuẩn y tế bắt buộc.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Hệ vi khuẩn đường ruột tổng hợp Vitamin K2 (menaquinone) cung cấp một phần nhu cầu cơ thể. Trẻ sơ sinh có đường ruột hoàn toàn vô khuẩn và sữa mẹ chứa rất ít vitamin K, do đó có nguy cơ cao bị bệnh xuất huyết ở trẻ sơ sinh (đặc biệt xuất huyết não màng não). Tiêm bắp Vitamin K1 ngay sau sinh là quy chuẩn y tế bắt buộc.",
      "Phương án này không đúng vì \"Vitamin B1 tan trong nước\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Vitamin A tan trong dầu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Vitamin B12 nguồn gốc động vật\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Nhóm ức chế men tích hợp integrase",
      "Nhóm ức chế enzym protease của virus",
      "Nhóm ức chế men sao chép ngược không nucleosid",
      "Nhóm ức chế thụ thể đồng vận CCR5 xâm nhập"
    ],
    "correct": 1,
    "explanation": "Các thuốc ức chế Protease (PI) cản trở các yếu tố điều hòa phiên mã lipid (SREBP-1) và các protein liên kết acid retinoic trong mô mỡ, dẫn đến thoái hóa mô mỡ dưới da ngoại vi và tích tụ mỡ nội tạng (hội chứng buffalo hump, bụng cóc), kèm theo xơ vữa mạch máu sớm.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Nhóm ức chế men tích hợp integrase\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Các thuốc ức chế Protease (PI) cản trở các yếu tố điều hòa phiên mã lipid (SREBP-1) và các protein liên kết acid retinoic trong mô mỡ, dẫn đến thoái hóa mô mỡ dưới da ngoại vi và tích tụ mỡ nội tạng (hội chứng buffalo hump, bụng cóc), kèm theo xơ vữa mạch máu sớm.",
      "Phương án này không đúng vì \"Nhóm ức chế men sao chép ngược không nucleosid\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Nhóm ức chế thụ thể đồng vận CCR5 xâm nhập\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Tăng hấp thu qua ruột nhờ ức chế bơm tống thuốc P-gp",
      "Ức chế enzym CYP3A4 làm tăng nồng độ thuốc phối hợp",
      "Cạnh tranh gắn protein huyết tương tăng dạng tự do",
      "Kiềm hóa dịch vị dạ dày giảm phân hủy bởi acid"
    ],
    "correct": 1,
    "explanation": "Ritonavir ở liều thấp (100-200 mg) không dùng với mục đích diệt virus mà đóng vai trò là chất 'booster': ức chế enzym CYP3A4 ở gan và ruột, ngăn cản chuyển hóa thuốc PI đi kèm, giúp nâng nồng độ thuốc trong máu lên gấp nhiều lần và giảm tần suất uống thuốc.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Tăng hấp thu qua ruột nhờ ức chế bơm tống thuốc P-gp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Ritonavir ở liều thấp (100-200 mg) không dùng với mục đích diệt virus mà đóng vai trò là chất 'booster': ức chế enzym CYP3A4 ở gan và ruột, ngăn cản chuyển hóa thuốc PI đi kèm, giúp nâng nồng độ thuốc trong máu lên gấp nhiều lần và giảm tần suất uống thuốc.",
      "Phương án này không đúng vì \"Cạnh tranh gắn protein huyết tương tăng dạng tự do\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kiềm hóa dịch vị dạ dày giảm phân hủy bởi acid\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Ức chế sinh tổng hợp chuỗi phân tử protein tubulin",
      "Làm tan rã cấu trúc thoi phân bào ngay khi hình thành",
      "Thúc đẩy trùng hợp và ức chế giải trùng hợp vi ống",
      "Ức chế mạnh mẽ sự trùng hợp của các dimer tubulin"
    ],
    "correct": 2,
    "explanation": "Ngược lại với Vinca alkaloids (ức chế tạo vi ống), Paclitaxel gắn vào tiểu phần beta-tubulin làm tăng cường trùng hợp và ổn định hóa các bó vi ống bất thường, ngăn cản vi ống tự phân rã (depolymerization). Thoi phân bào bị 'đóng băng' cứng đờ, tế bào ung thư không thể hoàn tất phân chia và chết ở pha G2/M.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Ức chế sinh tổng hợp chuỗi phân tử protein tubulin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Làm tan rã cấu trúc thoi phân bào ngay khi hình thành\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Ngược lại với Vinca alkaloids (ức chế tạo vi ống), Paclitaxel gắn vào tiểu phần beta-tubulin làm tăng cường trùng hợp và ổn định hóa các bó vi ống bất thường, ngăn cản vi ống tự phân rã (depolymerization). Thoi phân bào bị 'đóng băng' cứng đờ, tế bào ung thư không thể hoàn tất phân chia và chết ở pha G2/M.",
      "Phương án này không đúng vì \"Ức chế mạnh mẽ sự trùng hợp của các dimer tubulin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Thất điều dáng đi, rung giật nhãn cầu kèm chóng mặt",
      "Run tay khi nghỉ và cứng đờ cơ kiểu bánh xe răng cưa",
      "Liệt mềm hai chi dưới cấp tính kèm theo bí tiểu tiện",
      "Tê bì đầu chi, giảm phản xạ gân xương và bị táo bón"
    ],
    "correct": 3,
    "explanation": "Vi ống cần thiết cho quá trình vận chuyển sợi trục thần kinh (axonal transport) trong các dây thần kinh dài. Vincristin làm gián đoạn vi ống sợi trục gây bệnh thần kinh ngoại biên cảm giác - vận động (tê bì, yếu cơ, mất phản xạ gân xương) và tổn thương đám rối thần kinh tự chủ ruột gây táo bón nặng, liệt ruột cơ năng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Thất điều dáng đi, rung giật nhãn cầu kèm chóng mặt\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Run tay khi nghỉ và cứng đờ cơ kiểu bánh xe răng cưa\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Liệt mềm hai chi dưới cấp tính kèm theo bí tiểu tiện\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Vi ống cần thiết cho quá trình vận chuyển sợi trục thần kinh (axonal transport) trong các dây thần kinh dài. Vincristin làm gián đoạn vi ống sợi trục gây bệnh thần kinh ngoại biên cảm giác - vận động (tê bì, yếu cơ, mất phản xạ gân xương) và tổn thương đám rối thần kinh tự chủ ruột gây táo bón nặng, liệt ruột cơ năng."
    ]
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
      "Liệu pháp thở oxy liều cao qua mặt nạ có túi hoặc oxy cao áp",
      "Truyền natri bicarbonat kiềm hóa máu chống toan lactic",
      "Tiêm tĩnh mạch atropin sulfat liều cao kích thích hô hấp",
      "Truyền khối hồng cầu kết hợp lọc máu hấp phụ than hoạt"
    ],
    "correct": 0,
    "explanation": "CO gắn vào Hemoglobin với ái lực cao gấp 200-250 lần oxy tạo Carboxyhemoglobin (HbCO). Thở oxy khí trời bình thường cần 320 phút để thải trừ 50% HbCO. Thở Oxy 100% rút ngắn T1/2 xuống còn 80 phút; thở Oxy cao áp (2.5-3 atm) rút ngắn T1/2 xuống chỉ còn 20-25 phút, đẩy CO nhanh chóng khỏi hemoglobin và mô não.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "CO gắn vào Hemoglobin với ái lực cao gấp 200-250 lần oxy tạo Carboxyhemoglobin (HbCO). Thở oxy khí trời bình thường cần 320 phút để thải trừ 50% HbCO. Thở Oxy 100% rút ngắn T1/2 xuống còn 80 phút; thở Oxy cao áp (2.5-3 atm) rút ngắn T1/2 xuống chỉ còn 20-25 phút, đẩy CO nhanh chóng khỏi hemoglobin và mô não.",
      "Phương án này không đúng vì \"Truyền natri bicarbonat kiềm hóa máu chống toan lactic\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tiêm tĩnh mạch atropin sulfat liều cao kích thích hô hấp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Truyền khối hồng cầu kết hợp lọc máu hấp phụ than hoạt\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Dung dịch natri bicarbonat",
      "Dung dịch ringer lactat",
      "Dung dịch calci clorid",
      "Thuốc amiodaron hydroclorid"
    ],
    "correct": 0,
    "explanation": "TCA chẹn kênh Natri nhanh ở cơ tim làm chậm dẫn truyền gây QRS giãn rộng và xoắn đỉnh. Natri Bicarbonat làm tăng nồng độ Na+ ngoại bào cạnh tranh đẩy TCA khỏi kênh Natri, đồng thời kiềm hóa máu (pH 7.45-7.55) làm tăng tỷ lệ TCA ở dạng không ion hóa giảm ái lực với kênh Natri, giúp thu hẹp QRS và cắt loạn nhịp.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "TCA chẹn kênh Natri nhanh ở cơ tim làm chậm dẫn truyền gây QRS giãn rộng và xoắn đỉnh. Natri Bicarbonat làm tăng nồng độ Na+ ngoại bào cạnh tranh đẩy TCA khỏi kênh Natri, đồng thời kiềm hóa máu (pH 7.45-7.55) làm tăng tỷ lệ TCA ở dạng không ion hóa giảm ái lực với kênh Natri, giúp thu hẹp QRS và cắt loạn nhịp.",
      "Phương án này không đúng vì \"Dung dịch ringer lactat\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Dung dịch calci clorid\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thuốc amiodaron hydroclorid\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Pyridostigmin",
      "Physostigmin",
      "Neostigmin",
      "Pralidoxim"
    ],
    "correct": 1,
    "explanation": "Physostigmin là một amin bậc 3 thân dầu, có khả năng vượt qua hàng rào máu não rất tốt (khác với Neostigmin là amin bậc 4 chỉ tác dụng ngoại vi). Thuốc ức chế AChE làm tăng nồng độ acetylcholin cả ở não và ngoại vi, hóa giải nhanh chóng tình trạng mê sảng, co giật và các triệu chứng ngoại vi của ngộ độc Atropin.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Pyridostigmin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Physostigmin là một amin bậc 3 thân dầu, có khả năng vượt qua hàng rào máu não rất tốt (khác với Neostigmin là amin bậc 4 chỉ tác dụng ngoại vi). Thuốc ức chế AChE làm tăng nồng độ acetylcholin cả ở não và ngoại vi, hóa giải nhanh chóng tình trạng mê sảng, co giật và các triệu chứng ngoại vi của ngộ độc Atropin.",
      "Phương án này không đúng vì \"Neostigmin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Pralidoxim\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Tăng nồng độ calci máu",
      "Tăng nồng độ natri máu",
      "Hạ nồng độ kali máu",
      "Nhiễm toan hô hấp cấp"
    ],
    "correct": 2,
    "explanation": "Sóng U nổi bật trên ECG là dấu hiệu đặc trưng của hạ kali máu nặng. Khi kết hợp với điều trị Digoxin, đây là cảnh báo nguy cơ cực cao khởi phát loạn nhịp thất chết người (xoắn đỉnh, rung thất).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Tăng nồng độ calci máu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tăng nồng độ natri máu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Sóng U nổi bật trên ECG là dấu hiệu đặc trưng của hạ kali máu nặng. Khi kết hợp với điều trị Digoxin, đây là cảnh báo nguy cơ cực cao khởi phát loạn nhịp thất chết người (xoắn đỉnh, rung thất).",
      "Phương án này không đúng vì \"Nhiễm toan hô hấp cấp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Rút ngắn thời gian trơ nút nhĩ thất, kéo dài trơ cơ thất",
      "Kéo dài thời gian trơ đồng đều trên toàn bộ các buồng tim",
      "Rút ngắn thời gian trơ đồng đều trên toàn bộ hệ dẫn truyền",
      "Kéo dài thời gian trơ nút nhĩ thất, rút ngắn trơ cơ thất"
    ],
    "correct": 3,
    "explanation": "Digitalis kích thích phế vị làm chậm dẫn truyền và kéo dài thời kỳ trơ của nút nhĩ thất (bảo vệ thất trong rung nhĩ). Tuy nhiên, trên cơ tâm thất, thuốc lại rút ngắn thời gian điện thế hoạt động và rút ngắn thời kỳ trơ, làm tăng tính kích thích thất ở liều cao.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Rút ngắn thời gian trơ nút nhĩ thất, kéo dài trơ cơ thất\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kéo dài thời gian trơ đồng đều trên toàn bộ các buồng tim\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Rút ngắn thời gian trơ đồng đều trên toàn bộ hệ dẫn truyền\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Digitalis kích thích phế vị làm chậm dẫn truyền và kéo dài thời kỳ trơ của nút nhĩ thất (bảo vệ thất trong rung nhĩ). Tuy nhiên, trên cơ tâm thất, thuốc lại rút ngắn thời gian điện thế hoạt động và rút ngắn thời kỳ trơ, làm tăng tính kích thích thất ở liều cao."
    ]
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
      "Thuốc chẹn kênh calci Non-DHP (Verapamil, Diltiazem)",
      "Thuốc chẹn chọn lọc thụ thể beta-1 adrenergic",
      "Thuốc lợi tiểu nhóm thiazid ức chế tái hấp thu muối",
      "Thuốc chẹn chọn lọc thụ thể alpha-1 adrenergic ngoại vi"
    ],
    "correct": 3,
    "explanation": "Thuốc chẹn alpha-1 adrenergic (Doxazosin, Terazosin) vừa ức chế thụ thể alpha-1 ở tiểu động mạch gây giãn mạch hạ áp, vừa ức chế thụ thể alpha-1A ở cơ trơn tuyến tiền liệt và cổ bàng quang, làm giảm trương lực cơ thắt, cải thiện rõ rệt dòng nước tiểu ở bệnh nhân phì đại tuyến tiền liệt.",
    "reference": "Sách Dược lý 2 tr. 73",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Thuốc chẹn kênh calci Non-DHP (Verapamil, Diltiazem)\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thuốc chẹn chọn lọc thụ thể beta-1 adrenergic\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thuốc lợi tiểu nhóm thiazid ức chế tái hấp thu muối\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Thuốc chẹn alpha-1 adrenergic (Doxazosin, Terazosin) vừa ức chế thụ thể alpha-1 ở tiểu động mạch gây giãn mạch hạ áp, vừa ức chế thụ thể alpha-1A ở cơ trơn tuyến tiền liệt và cổ bàng quang, làm giảm trương lực cơ thắt, cải thiện rõ rệt dòng nước tiểu ở bệnh nhân phì đại tuyến tiền liệt."
    ]
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
      "Losartan",
      "Perindopril",
      "Lisinopril",
      "Captopril"
    ],
    "correct": 0,
    "explanation": "Khi bệnh nhân bị ho khan do ACEI, đổi sang một ACEI khác (như Lisinopril, Captopril, Perindopril) hoàn toàn vô tác dụng vì đây là tác dụng phụ chung của cả nhóm (class effect) do ức chế Kininase II. Lựa chọn chuẩn mực là chuyển sang nhóm ARB (Losartan, Valsartan) vì nhóm này chẹn thụ thể AT1 mà không làm tăng Bradykinin.",
    "reference": "Sách Dược lý 2 tr. 71",
    "distractorExplanations": [
      "Khi bệnh nhân bị ho khan do ACEI, đổi sang một ACEI khác (như Lisinopril, Captopril, Perindopril) hoàn toàn vô tác dụng vì đây là tác dụng phụ chung của cả nhóm (class effect) do ức chế Kininase II. Lựa chọn chuẩn mực là chuyển sang nhóm ARB (Losartan, Valsartan) vì nhóm này chẹn thụ thể AT1 mà không làm tăng Bradykinin.",
      "Phương án này không đúng vì \"Perindopril\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Lisinopril\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Captopril\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Thuốc ức chế men chuyển hoặc thuốc chẹn thụ thể ARB",
      "Thuốc chẹn phối hợp thụ thể alpha-1 và beta (Labetalol)",
      "Thuốc chẹn kênh calci DHP dạng phóng thích kéo dài"
    ],
    "correct": 1,
    "explanation": "ACEI và ARB chống chỉ định tuyệt đối trong thai kỳ (nhóm X/D). Thuốc qua nhau thai gây loạn sản thận thai nhi, vô niệu thai nhi, thiểu ối (thiểu ối làm phổi giảm sản và co cứng chi), chậm cốt hóa sọ và tử vong chu sinh.",
    "reference": "Sách Dược lý 2 tr. 69, 71",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Thuốc kích thích thụ thể alpha-2 trung ương (Methyldopa)\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "ACEI và ARB chống chỉ định tuyệt đối trong thai kỳ (nhóm X/D). Thuốc qua nhau thai gây loạn sản thận thai nhi, vô niệu thai nhi, thiểu ối (thiểu ối làm phổi giảm sản và co cứng chi), chậm cốt hóa sọ và tử vong chu sinh.",
      "Phương án này không đúng vì \"Thuốc chẹn phối hợp thụ thể alpha-1 và beta (Labetalol)\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thuốc chẹn kênh calci DHP dạng phóng thích kéo dài\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Kích hoạt dòng calci đi vào ở pha 2 tăng co bóp cơ tim",
      "Ức chế dòng kali đi ra chậm kéo dài điện thế hoạt động",
      "Kích thích dòng natri nhanh ở pha 0 tăng tốc độ khử cực",
      "Ức chế chọn lọc dòng Natri muộn, ngừa quá tải calci nội bào"
    ],
    "correct": 3,
    "explanation": "Ranolazine ức chế chọn lọc dòng Natri muộn (late INa) trong tế bào cơ tim thiếu máu. Giảm Na+ nội bào giúp bơm Na+/Ca2+ tống Ca2+ ra ngoài, ngăn ngừa quá tải Ca2+ nội bào tâm trương, giảm sức căng thành thất và cải thiện tưới máu cơ tim.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Kích hoạt dòng calci đi vào ở pha 2 tăng co bóp cơ tim\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ức chế dòng kali đi ra chậm kéo dài điện thế hoạt động\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích thích dòng natri nhanh ở pha 0 tăng tốc độ khử cực\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Ranolazine ức chế chọn lọc dòng Natri muộn (late INa) trong tế bào cơ tim thiếu máu. Giảm Na+ nội bào giúp bơm Na+/Ca2+ tống Ca2+ ra ngoài, ngăn ngừa quá tải Ca2+ nội bào tâm trương, giảm sức căng thành thất và cải thiện tưới máu cơ tim."
    ]
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
      "Chẹn kênh Natri nhanh ở sợi dẫn truyền cơ tâm thất",
      "Ức chế thụ thể beta-2 giao cảm tại phế quản và mạch máu",
      "Chẹn kênh Calci typ L tại nút xoang và nút nhĩ thất",
      "Kích thích nội mô vành giải phóng nitric oxid giãn mạch"
    ],
    "correct": 2,
    "explanation": "Điện thế hoạt động tại nút xoang và nút nhĩ thất phụ thuộc chủ yếu vào dòng Ca2+ đi vào qua kênh L-type ở pha 0. Verapamil và Diltiazem ức chế dòng này, làm chậm nhịp xoang và làm chậm dẫn truyền, kéo dài thời kỳ trơ của nút nhĩ thất.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Chẹn kênh Natri nhanh ở sợi dẫn truyền cơ tâm thất\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ức chế thụ thể beta-2 giao cảm tại phế quản và mạch máu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Điện thế hoạt động tại nút xoang và nút nhĩ thất phụ thuộc chủ yếu vào dòng Ca2+ đi vào qua kênh L-type ở pha 0. Verapamil và Diltiazem ức chế dòng này, làm chậm nhịp xoang và làm chậm dẫn truyền, kéo dài thời kỳ trơ của nút nhĩ thất.",
      "Phương án này không đúng vì \"Kích thích nội mô vành giải phóng nitric oxid giãn mạch\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Hạ natri máu nặng gây phù não cấp tính",
      "Tăng kali máu nặng đe dọa ngừng tim",
      "Nhiễm kiềm chuyển hóa kèm cơn co cứng cơ",
      "Cơn bão giáp kịch phát đe dọa tính mạng"
    ],
    "correct": 1,
    "explanation": "Cả thuốc ức chế hệ RAA (ACEI/ARB) và thuốc lợi tiểu tiết kiệm Kali đều làm giảm bài tiết K+ tại ống thận. Phối hợp đồng thời hai nhóm này làm tăng vọt nguy cơ tăng Kali máu ác tính (đặc biệt ở người có suy thận hoặc đái tháo đường), có thể gây ngừng tim đột ngột.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Hạ natri máu nặng gây phù não cấp tính\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Cả thuốc ức chế hệ RAA (ACEI/ARB) và thuốc lợi tiểu tiết kiệm Kali đều làm giảm bài tiết K+ tại ống thận. Phối hợp đồng thời hai nhóm này làm tăng vọt nguy cơ tăng Kali máu ác tính (đặc biệt ở người có suy thận hoặc đái tháo đường), có thể gây ngừng tim đột ngột.",
      "Phương án này không đúng vì \"Nhiễm kiềm chuyển hóa kèm cơn co cứng cơ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Cơn bão giáp kịch phát đe dọa tính mạng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Bùng phát số lượng vi khuẩn Helicobacter pylori",
      "Ức chế bài tiết dịch kiềm từ tụy vào tá tràng",
      "Tăng tiết gastrin máu gây phì đại tế bào viền",
      "Co thắt mạch máu niêm mạc dạ dày gây thiếu máu"
    ],
    "correct": 2,
    "explanation": "Khi dùng PPI/kháng H2 kéo dài, nồng độ acid thấp kích thích tế bào G tăng tiết Gastrin liên tục. Nồng độ Gastrin máu cao gây tăng sinh và phì đại tế bào viền. Khi dừng thuốc đột ngột, các tế bào viền phì đại sẽ tiết acid ồ ạt (hiệu ứng rebound).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Bùng phát số lượng vi khuẩn Helicobacter pylori\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ức chế bài tiết dịch kiềm từ tụy vào tá tràng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Khi dùng PPI/kháng H2 kéo dài, nồng độ acid thấp kích thích tế bào G tăng tiết Gastrin liên tục. Nồng độ Gastrin máu cao gây tăng sinh và phì đại tế bào viền. Khi dừng thuốc đột ngột, các tế bào viền phì đại sẽ tiết acid ồ ạt (hiệu ứng rebound).",
      "Phương án này không đúng vì \"Co thắt mạch máu niêm mạc dạ dày gây thiếu máu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
  },
  {
    "id": 314,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Dẫn xuất benzimidazol nào sau đây là thuốc lựa chọn hàng đầu đặc hiệu nhất trong điều trị bệnh sán lá gan lớn Fasciola hepatica và Fasciola gigantica?",
    "options": [
      "Albendazol",
      "Triclabendazol",
      "Mebendazol",
      "Thiabendazol"
    ],
    "correct": 1,
    "explanation": "Triclabendazol có hiệu lực diệt sán lá gan lớn Fasciola cực mạnh (diệt cả sán non di chuyển trong nhu mô gan và sán trưởng thành trong ống mật), với tỷ lệ khỏi bệnh trên 95% chỉ sau 1-2 liều uống, vượt trội hơn hẳn Praziquantel (vốn ít hiệu quả trên Fasciola).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Albendazol/Mebendazol chủ yếu tác dụng trên giun tròn đường ruột; với sán lá, sán máng thuốc ưu tiên số một là Praziquantel.",
      "Triclabendazol có hiệu lực diệt sán lá gan lớn Fasciola cực mạnh (diệt cả sán non di chuyển trong nhu mô gan và sán trưởng thành trong ống mật), với tỷ lệ khỏi bệnh trên 95% chỉ sau 1-2 liều uống, vượt trội hơn hẳn Praziquantel (vốn ít hiệu quả trên Fasciola).",
      "Albendazol/Mebendazol chủ yếu tác dụng trên giun tròn đường ruột; với sán lá, sán máng thuốc ưu tiên số một là Praziquantel.",
      "Phương án này không đúng vì \"Thiabendazol\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Chẹn chọn lọc kênh calci typ L ở cơ trơn khí đạo",
      "Bất hoạt thụ thể TNF-alpha hòa tan trong máu",
      "Ức chế thụ thể IL-5 trên màng bạch cầu toan",
      "Gắn chọn lọc lên IgE tự do trong tuần hoàn"
    ],
    "correct": 3,
    "explanation": "Omalizumab là kháng thể đơn dòng nhân hóa tái tổ hợp liên kết đặc hiệu với phần Fc của IgE tự do trong tuần hoàn, ngăn chặn IgE gắn lên thụ thể có ái lực cao Fc-epsilon-RI trên bề mặt dưỡng bào (mast cell) và bạch cầu ái kiềm, ngăn chặn phản ứng giải phóng histamin.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Chẹn chọn lọc kênh calci typ L ở cơ trơn khí đạo\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Bất hoạt thụ thể TNF-alpha hòa tan trong máu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ức chế thụ thể IL-5 trên màng bạch cầu toan\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Omalizumab là kháng thể đơn dòng nhân hóa tái tổ hợp liên kết đặc hiệu với phần Fc của IgE tự do trong tuần hoàn, ngăn chặn IgE gắn lên thụ thể có ái lực cao Fc-epsilon-RI trên bề mặt dưỡng bào (mast cell) và bạch cầu ái kiềm, ngăn chặn phản ứng giải phóng histamin."
    ]
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
      "Adrenalin tiêm bắp",
      "Diphenhydramin tiêm bắp",
      "Promethazin tiêm bắp",
      "Methylprednisolon tiêm bắp"
    ],
    "correct": 0,
    "explanation": "Adrenalin là thuốc cấp cứu sống còn duy nhất trong sốc phản vệ: kích thích alpha-1 làm co mạch nâng huyết áp, kích thích beta-1 tăng co bóp tim, và kích thích beta-2 làm giãn phế quản và ức chế dưỡng bào phóng thích hóa chất. Kháng H1 và Corticosteroid chỉ là thuốc hỗ trợ thứ yếu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Adrenalin là thuốc cấp cứu sống còn duy nhất trong sốc phản vệ: kích thích alpha-1 làm co mạch nâng huyết áp, kích thích beta-1 tăng co bóp tim, và kích thích beta-2 làm giãn phế quản và ức chế dưỡng bào phóng thích hóa chất. Kháng H1 và Corticosteroid chỉ là thuốc hỗ trợ thứ yếu.",
      "Phương án này không đúng vì \"Diphenhydramin tiêm bắp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Promethazin tiêm bắp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Methylprednisolon tiêm bắp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Enzym ATP Citrate Lyase ở chặng trước HMG-CoA Reductase",
      "Enzym Lanosterol demethylase tham gia khử methyl ở ty thể",
      "Enzym Lecithin cholesterol acyltransferase trong huyết tương",
      "Enzym Acyl-CoA cholesterol acyltransferase tại ruột non"
    ],
    "correct": 0,
    "explanation": "Acid Bempedoic ức chế enzym ATP Citrate Lyase (ACL) - enzym nằm ở thượng nguồn của HMG-CoA Reductase. Điểm độc đáo: Acid bempedoic là tiền chất chỉ được hoạt hóa bởi enzym ACSVL1 có ở tế bào gan mà không có ở cơ vân, do đó hầu như không gây tác dụng phụ đau cơ như Statin.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Acid Bempedoic ức chế enzym ATP Citrate Lyase (ACL) - enzym nằm ở thượng nguồn của HMG-CoA Reductase. Điểm độc đáo: Acid bempedoic là tiền chất chỉ được hoạt hóa bởi enzym ACSVL1 có ở tế bào gan mà không có ở cơ vân, do đó hầu như không gây tác dụng phụ đau cơ như Statin.",
      "Phương án này không đúng vì \"Enzym Lanosterol demethylase tham gia khử methyl ở ty thể\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Enzym Lecithin cholesterol acyltransferase trong huyết tương\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Enzym Acyl-CoA cholesterol acyltransferase tại ruột non\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Ức chế vận chuyển glucose qua màng tế bào",
      "Ức chế phức hợp cytochrom bc1 ở ty thể",
      "Ức chế men ARN polymerase của ký sinh trùng",
      "Làm thay đổi nồng độ pH nội bào tương tế bào"
    ],
    "correct": 1,
    "explanation": "Atovaquon là dẫn xuất hydroxynaphthoquinone có cấu trúc tương tự ubiquinone. Thuốc ức chế chọn lọc phức hợp Cytochrom bc1 ở màng trong ty thể ký sinh trùng, chặn đứng chuỗi chuyền điện tử và ngừng tổng hợp pyrimidin, làm sụp đổ điện thế ty thể của ký sinh trùng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Ức chế vận chuyển glucose qua màng tế bào\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Atovaquon là dẫn xuất hydroxynaphthoquinone có cấu trúc tương tự ubiquinone. Thuốc ức chế chọn lọc phức hợp Cytochrom bc1 ở màng trong ty thể ký sinh trùng, chặn đứng chuỗi chuyền điện tử và ngừng tổng hợp pyrimidin, làm sụp đổ điện thế ty thể của ký sinh trùng.",
      "Phương án này không đúng vì \"Ức chế men ARN polymerase của ký sinh trùng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Làm thay đổi nồng độ pH nội bào tương tế bào\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
  },
  {
    "id": 319,
    "subject": "duocly2",
    "chapter": "KTGHP",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong phác đồ kháng khuẩn đường uống kinh điển kết hợp giữa một aminopenicillin và một dẫn chất có nguồn gốc từ Streptomyces clavuligerus, vai trò dược lý cốt lõi của dẫn chất phối hợp là gì?",
    "options": [
      "Mở rộng phổ tác dụng bằng cách ức chế tổng hợp thành tế bào vi khuẩn",
      "Kích hoạt trực tiếp enzym autolysin làm đẩy nhanh quá trình ly giải màng",
      "Ức chế enzym beta-lactamase kiểu tự sát bảo vệ phân tử kháng sinh",
      "Phong bế bơm đẩy kháng sinh qua màng giúp tăng tích lũy thuốc nội bào"
    ],
    "correct": 0,
    "explanation": "Bản thân Acid Clavulanic có hoạt tính kháng khuẩn rất yếu. Tuy nhiên, nó gắn cộng hóa trị không hồi phục vào enzym Beta-lactamase do vi khuẩn tiết ra (chất ức chế tự sát - suicide inhibitor), làm tê liệt enzym này, bảo vệ phân tử Amoxicillin nguyên vẹn để tiêu diệt các chủng vi khuẩn tiết men kháng thuốc.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Bản thân Acid Clavulanic có hoạt tính kháng khuẩn rất yếu. Tuy nhiên, nó gắn cộng hóa trị không hồi phục vào enzym Beta-lactamase do vi khuẩn tiết ra (chất ức chế tự sát - suicide inhibitor), làm tê liệt enzym này, bảo vệ phân tử Amoxicillin nguyên vẹn để tiêu diệt các chủng vi khuẩn tiết men kháng thuốc.",
      "Phương án này không đúng vì \"Kích hoạt trực tiếp enzym autolysin làm đẩy nhanh quá trình ly giải màng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ức chế enzym beta-lactamase kiểu tự sát bảo vệ phân tử kháng sinh\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Phong bế bơm đẩy kháng sinh qua màng giúp tăng tích lũy thuốc nội bào\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Kích thích buồng trứng tăng sinh tổng hợp estrogen nội sinh",
      "Ức chế chọn lọc enzym tổng hợp cortisol tại vỏ thượng thận",
      "Làm giảm bài xuất natri và nước qua tuyến bã nhờn ngoài da",
      "Đối kháng thụ thể androgen và ức chế tổng hợp testosterone"
    ],
    "correct": 3,
    "explanation": "Ngoài tác dụng kháng mineralocorticoid, Spironolacton còn chẹn thụ thể Androgen tại nang lông và tuyến bã nhờn, đồng thời ức chế enzym sinh tổng hợp androgen, làm giảm tiết bã nhờn trị mụn và giảm rậm lông ở phụ nữ PCOS.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Kích thích buồng trứng tăng sinh tổng hợp estrogen nội sinh\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ức chế chọn lọc enzym tổng hợp cortisol tại vỏ thượng thận\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Làm giảm bài xuất natri và nước qua tuyến bã nhờn ngoài da\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Ngoài tác dụng kháng mineralocorticoid, Spironolacton còn chẹn thụ thể Androgen tại nang lông và tuyến bã nhờn, đồng thời ức chế enzym sinh tổng hợp androgen, làm giảm tiết bã nhờn trị mụn và giảm rậm lông ở phụ nữ PCOS."
    ]
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
      "Co thắt vi tuần hoàn mạch vành",
      "Rối loạn nhịp thất kịch phát",
      "Ứ muối nước và phù ngoại vi",
      "Hoại tử tế bào cơ tim thất trái"
    ],
    "correct": 2,
    "explanation": "Hoạt hóa PPAR-gamma ở ống góp thận làm tăng biểu hiện kênh Natri ENaC, kích thích tăng tái hấp thu muối và nước, dẫn đến tăng thể tích tuần hoàn ngoại bào, gây phù ngoại biên và bùng phát suy tim sung huyết nặng. Thuốc chống chỉ định ở người có suy tim NYHA III-IV.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Co thắt vi tuần hoàn mạch vành\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Rối loạn nhịp thất kịch phát\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Hoạt hóa PPAR-gamma ở ống góp thận làm tăng biểu hiện kênh Natri ENaC, kích thích tăng tái hấp thu muối và nước, dẫn đến tăng thể tích tuần hoàn ngoại bào, gây phù ngoại biên và bùng phát suy tim sung huyết nặng. Thuốc chống chỉ định ở người có suy tim NYHA III-IV.",
      "Phương án này không đúng vì \"Hoại tử tế bào cơ tim thất trái\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Hoạt tính trực tiếp và gắn thuận nghịch thụ thể P2Y12",
      "Tiền chất gắn không thuận nghịch thụ thể P2Y12 tiểu cầu",
      "Hoạt tính trực tiếp ức chế chọn lọc enzym cyclooxygenase",
      "Tiền chất chuyển hóa đối kháng thụ thể glycoprotein tim"
    ],
    "correct": 0,
    "explanation": "Khác với Clopidogrel và Prasugrel (tiền chất gắn cộng hóa trị không hồi phục vào vị trí gắn ADP), Ticagrelor là dẫn chất cyclopentyltriazolopyrimidine có hoạt tính trực tiếp, gắn thuận nghịch vào vị trí dị lập thể (allosteric site) của thụ thể P2Y12, làm phục hồi chức năng tiểu cầu nhanh hơn khi ngừng thuốc.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Khác với Clopidogrel và Prasugrel (tiền chất gắn cộng hóa trị không hồi phục vào vị trí gắn ADP), Ticagrelor là dẫn chất cyclopentyltriazolopyrimidine có hoạt tính trực tiếp, gắn thuận nghịch vào vị trí dị lập thể (allosteric site) của thụ thể P2Y12, làm phục hồi chức năng tiểu cầu nhanh hơn khi ngừng thuốc.",
      "Phương án này không đúng vì \"Tiền chất gắn không thuận nghịch thụ thể P2Y12 tiểu cầu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Hoạt tính trực tiếp ức chế chọn lọc enzym cyclooxygenase\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tiền chất chuyển hóa đối kháng thụ thể glycoprotein tim\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Tụt huyết áp tư thế đứng kèm suy tim",
      "Tắc mạch huyết khối và cơn tăng huyết áp",
      "Rung nhĩ kịch phát kèm tụt huyết áp nặng",
      "Viêm cơ tim tự miễn do kháng thể tái tổ hợp"
    ],
    "correct": 1,
    "explanation": "EPO kích thích tủy xương tăng nhanh số lượng hồng cầu làm tăng độ nhớt của máu và tăng sức cản ngoại vi, dẫn đến cơn tăng huyết áp kịch phát kèm co giật; đồng thời kích hoạt tiểu cầu làm tăng vọt nguy cơ tắc mạch huyết khối (đột quỵ não, nhồi máu cơ tim, tắc catheter chạy thận).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Tụt huyết áp tư thế đứng kèm suy tim\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "EPO kích thích tủy xương tăng nhanh số lượng hồng cầu làm tăng độ nhớt của máu và tăng sức cản ngoại vi, dẫn đến cơn tăng huyết áp kịch phát kèm co giật; đồng thời kích hoạt tiểu cầu làm tăng vọt nguy cơ tắc mạch huyết khối (đột quỵ não, nhồi máu cơ tim, tắc catheter chạy thận).",
      "Phương án này không đúng vì \"Rung nhĩ kịch phát kèm tụt huyết áp nặng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Viêm cơ tim tự miễn do kháng thể tái tổ hợp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Thuốc ức chế hòa màng virus với màng tế bào vật chủ",
      "Thuốc ức chế thụ thể đồng vận CCR5 ngăn virus xâm nhập",
      "Thuốc ức chế enzym tích hợp chuỗi integrase của virus",
      "Thuốc ức chế enzym protease cản trở quá trình trưởng thành"
    ],
    "correct": 2,
    "explanation": "INSTI (thuốc có đuôi '-tegravir') ức chế enzym Integrase của HIV, ngăn cản bước chuyển chuỗi tích hợp DNA virus vừa sao chép vào bộ gen nhiễm sắc thể của tế bào lympho T CD4+. Nhóm này làm giảm tải lượng virus nhanh nhất, dung nạp tốt và là phác đồ bậc 1 ưu tiên của WHO.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Thuốc ức chế hòa màng virus với màng tế bào vật chủ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thuốc ức chế thụ thể đồng vận CCR5 ngăn virus xâm nhập\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "INSTI (thuốc có đuôi '-tegravir') ức chế enzym Integrase của HIV, ngăn cản bước chuyển chuỗi tích hợp DNA virus vừa sao chép vào bộ gen nhiễm sắc thể của tế bào lympho T CD4+. Nhóm này làm giảm tải lượng virus nhanh nhất, dung nạp tốt và là phác đồ bậc 1 ưu tiên của WHO.",
      "Phương án này không đúng vì \"Thuốc ức chế enzym protease cản trở quá trình trưởng thành\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Enzym ribonucleotid reductase",
      "Enzym dihydrofolat reductase",
      "Enzym thymidylate synthase",
      "Enzym DNA topoisomerase hai"
    ],
    "correct": 2,
    "explanation": "5-FU được chuyển hóa thành chất có hoạt tính 5-FdUMP. 5-FdUMP gắn chặt với enzym Thymidylate Synthase (TS) và cofactor N5,N10-methylen-THF tạo thành phức hợp ba bền vững, ức chế không hồi phục enzym TS, chặn đứng phản ứng methyl hóa dUMP thành dTMP (nguyên liệu tổng hợp thymidine của DNA).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Enzym ribonucleotid reductase\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Enzym dihydrofolat reductase\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "5-FU được chuyển hóa thành chất có hoạt tính 5-FdUMP. 5-FdUMP gắn chặt với enzym Thymidylate Synthase (TS) và cofactor N5,N10-methylen-THF tạo thành phức hợp ba bền vững, ức chế không hồi phục enzym TS, chặn đứng phản ứng methyl hóa dUMP thành dTMP (nguyên liệu tổng hợp thymidine của DNA).",
      "Phương án này không đúng vì \"Enzym DNA topoisomerase hai\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Quá tải chì mạn tính và thiếu máu",
      "Quá tải sắt cấp tính ở trẻ nhỏ",
      "Quá tải thủy ngân dạng thể vô cơ",
      "Quá tải đồng và mắc bệnh Wilson"
    ],
    "correct": 3,
    "explanation": "Penicillamin là dẫn xuất của penicillin mang nhóm sulfhydryl (-SH) tự do, có ái lực tạo phức chelate hòa tan rất mạnh với ion Đồng (Cu2+), giúp đào thải đồng ồ ạt qua nước tiểu trong bệnh Wilson (rối loạn chuyển hóa đồng di truyền) và ngộ độc đồng cấp/mạn.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Quá tải chì mạn tính và thiếu máu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Quá tải sắt cấp tính ở trẻ nhỏ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Quá tải thủy ngân dạng thể vô cơ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Penicillamin là dẫn xuất của penicillin mang nhóm sulfhydryl (-SH) tự do, có ái lực tạo phức chelate hòa tan rất mạnh với ion Đồng (Cu2+), giúp đào thải đồng ồ ạt qua nước tiểu trong bệnh Wilson (rối loạn chuyển hóa đồng di truyền) và ngộ độc đồng cấp/mạn."
    ]
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
      "Dán liên tục cả ngày và đêm, thay miếng dán mới mỗi hai ngày",
      "Dán đồng thời hai miếng vào buổi sáng và gỡ bỏ vào đầu chiều",
      "Dán 12 đến 14 giờ ban ngày, tháo ban đêm tạo khoảng trống thuốc",
      "Chỉ dán ngay khi bắt đầu xuất hiện cơn đau ngực cấp tính"
    ],
    "correct": 2,
    "explanation": "Miếng dán phóng thích qua da được dán vào buổi sáng (khoảng 12-14 giờ) và bóc ra vào buổi tối trước khi đi ngủ, tạo khoảng trống không thuốc 10-12 giờ ban đêm để phục hồi độ nhạy cảm của thụ thể và nồng độ sulfhydryl.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Dán liên tục cả ngày và đêm, thay miếng dán mới mỗi hai ngày\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Dán đồng thời hai miếng vào buổi sáng và gỡ bỏ vào đầu chiều\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Miếng dán phóng thích qua da được dán vào buổi sáng (khoảng 12-14 giờ) và bóc ra vào buổi tối trước khi đi ngủ, tạo khoảng trống không thuốc 10-12 giờ ban đêm để phục hồi độ nhạy cảm của thụ thể và nồng độ sulfhydryl.",
      "Phương án này không đúng vì \"Chỉ dán ngay khi bắt đầu xuất hiện cơn đau ngực cấp tính\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Chẹn dòng calci typ L kết hợp kích thích beta-2 tại phế quản",
      "Tác dụng giống nitrat kết hợp mở kênh kali nhạy cảm ATP",
      "Ức chế enzym PDE-5 kết hợp đối kháng thụ thể AT1 mạch máu",
      "Ức chế enzym men chuyển kết hợp chẹn thụ thể alpha-1"
    ],
    "correct": 1,
    "explanation": "Nicorandil có cơ chế kép: cấu trúc nitrat giải phóng NO làm tăng cGMP gây giãn tĩnh mạch; đồng thời phân tử kích hoạt mở kênh K_ATP gây ưu phân cực màng tế bào cơ trơn làm giãn tiểu động mạch vành.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Chẹn dòng calci typ L kết hợp kích thích beta-2 tại phế quản\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Nicorandil có cơ chế kép: cấu trúc nitrat giải phóng NO làm tăng cGMP gây giãn tĩnh mạch; đồng thời phân tử kích hoạt mở kênh K_ATP gây ưu phân cực màng tế bào cơ trơn làm giãn tiểu động mạch vành.",
      "Phối hợp Nitrat hữu cơ với thuốc ức chế PDE-5 (Sildenafil, Tadalafil) là chống chỉ định tuyệt đối vì gây giãn mạch ồ ạt dẫn tới tụt huyết áp nghiêm trọng có thể đe dọa tính mạng.",
      "Phương án này không đúng vì \"Ức chế enzym men chuyển kết hợp chẹn thụ thể alpha-1\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Nicorandil",
      "Nitroglycerin",
      "Isosorbid mononitrat",
      "Trimetazidine"
    ],
    "correct": 0,
    "explanation": "Nicorandil có cảnh báo đặc biệt về tác dụng phụ gây loét niêm mạc nặng, sâu và dai dẳng ở đường tiêu hóa (loét miệng áp-tơ khổng lồ, loét dạ dày ruột, loét quanh hậu môn). Loét này chỉ lành khi ngưng hoàn toàn Nicorandil.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Nicorandil có cảnh báo đặc biệt về tác dụng phụ gây loét niêm mạc nặng, sâu và dai dẳng ở đường tiêu hóa (loét miệng áp-tơ khổng lồ, loét dạ dày ruột, loét quanh hậu môn). Loét này chỉ lành khi ngưng hoàn toàn Nicorandil.",
      "Phương án này không đúng vì \"Nitroglycerin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Isosorbid mononitrat\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Trimetazidine\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Nitroglycerin tiêm bolus tĩnh mạch\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Propranolol truyền tĩnh mạch chậm\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Verapamil tiêm tĩnh mạch trực tiếp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Dipyridamol và Adenosin là các chất giãn mạch vành mạnh được dùng trong stress test tim mạch (xạ hình SPECT hoặc cộng hưởng từ cơ tim) để làm giãn tối đa vùng mạch vành lành, gây hiện tượng cướp máu bộc lộ rõ vùng thiếu máu cơ tim."
    ]
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
      "Bệnh nhân hen phế quản nặng hoặc bệnh phổi tắc nghẽn mạn tính",
      "Bệnh nhân có suy giảm chức năng thận mức độ nhẹ",
      "Bệnh nhân mắc bệnh Parkinson và các rối loạn ngoại tháp",
      "Bệnh nhân có tiền sử viêm loét dạ dày tá tràng mạn tính"
    ],
    "correct": 2,
    "explanation": "Trimetazidine qua được hàng rào máu não và có thể ức chế dẫn truyền dopaminergic, gây khởi phát hoặc làm trầm trọng thêm các triệu chứng Parkinson (run tay, cứng đơ, chậm chạp) và hội chứng chân không yên. Thuốc chống chỉ định tuyệt đối ở người bệnh Parkinson.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Bệnh nhân hen phế quản nặng hoặc bệnh phổi tắc nghẽn mạn tính\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Bệnh nhân có suy giảm chức năng thận mức độ nhẹ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Trimetazidine qua được hàng rào máu não và có thể ức chế dẫn truyền dopaminergic, gây khởi phát hoặc làm trầm trọng thêm các triệu chứng Parkinson (run tay, cứng đơ, chậm chạp) và hội chứng chân không yên. Thuốc chống chỉ định tuyệt đối ở người bệnh Parkinson.",
      "Phương án này không đúng vì \"Bệnh nhân có tiền sử viêm loét dạ dày tá tràng mạn tính\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Thuốc làm chậm dẫn truyền qua nút nhĩ thất",
      "Thuốc chẹn kênh natri thuộc phân nhóm IA",
      "Thuốc chẹn kênh kali thuộc phân nhóm III",
      "Thuốc chẹn calci phân nhóm dihydropyridin"
    ],
    "correct": 0,
    "explanation": "Trong rung nhĩ kèm WPW, nếu dùng các thuốc ức chế chọn lọc nút AV (Digoxin, Verapamil, Diltiazem, Adenosin), các xung động rung nhĩ sẽ không thể đi qua nút AV mà bị dồn toàn bộ qua đường dẫn truyền phụ (cầu Kent) với tần số 300-400 ck/phút, dẫn tới rung thất và tử vong.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Trong rung nhĩ kèm WPW, nếu dùng các thuốc ức chế chọn lọc nút AV (Digoxin, Verapamil, Diltiazem, Adenosin), các xung động rung nhĩ sẽ không thể đi qua nút AV mà bị dồn toàn bộ qua đường dẫn truyền phụ (cầu Kent) với tần số 300-400 ck/phút, dẫn tới rung thất và tử vong.",
      "Phương án này không đúng vì \"Thuốc chẹn kênh natri thuộc phân nhóm IA\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thuốc chẹn kênh kali thuộc phân nhóm III\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thuốc chẹn calci phân nhóm dihydropyridin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Tocainid\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Disopyramid\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Moricizin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Mexiletin là dẫn chất amin của Lidocain có khả năng kháng lại sự chuyển hóa bước đầu qua gan rất mạnh của Lidocain, do đó có sinh khả dụng đường uống cao (> 85%) và được dùng điều trị loạn nhịp thất đường uống."
    ]
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
      "Tính thân dầu cao, thể tích phân bố lớn, t1/2 kéo dài 25-110 ngày",
      "Đào thải nguyên vẹn qua nước tiểu mà không qua gan",
      "Gắn kết cộng hóa trị không thuận nghịch với albumin",
      "Tích lũy hoàn toàn trong màng tế bào hồng cầu tuần hoàn"
    ],
    "correct": 0,
    "explanation": "Amiodaron cực kỳ thân dầu, tích lũy chậm và sâu vào các mô mỡ, gan, phổi, da, cơ tim với thể tích phân bố Vd = 60 L/kg. Thời gian bán thải trung bình 40-60 ngày (dao động 25-110 ngày), đòi hỏi phải dùng liều nạp (loading dose) lớn khi khởi đầu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Amiodaron cực kỳ thân dầu, tích lũy chậm và sâu vào các mô mỡ, gan, phổi, da, cơ tim với thể tích phân bố Vd = 60 L/kg. Thời gian bán thải trung bình 40-60 ngày (dao động 25-110 ngày), đòi hỏi phải dùng liều nạp (loading dose) lớn khi khởi đầu.",
      "Phương án này không đúng vì \"Đào thải nguyên vẹn qua nước tiểu mà không qua gan\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Gắn kết cộng hóa trị không thuận nghịch với albumin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tích lũy hoàn toàn trong màng tế bào hồng cầu tuần hoàn\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Nhóm I chẹn kênh Natri và Nhóm IV chẹn kênh Calci",
      "Nhóm IB rút ngắn tái cực và Nhóm IC làm chậm pha khử cực",
      "Nhóm II chẹn beta không chọn lọc và Nhóm III chẹn kênh Kali",
      "Nhóm II chẹn chọn lọc beta-1 và Nhóm I chẹn nhanh dòng Natri"
    ],
    "correct": 2,
    "explanation": "Sotalol là hỗn hợp racemic: đồng phân d-sotalol có tác dụng Nhóm III (chẹn kênh K+ kéo dài thời gian điện thế hoạt động), trong khi đồng phân l-sotalol có cả tác dụng Nhóm III và tác dụng Nhóm II (chẹn thụ thể beta không chọn lọc).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Nhóm I chẹn kênh Natri và Nhóm IV chẹn kênh Calci\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Nhóm IB rút ngắn tái cực và Nhóm IC làm chậm pha khử cực\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Sotalol là hỗn hợp racemic: đồng phân d-sotalol có tác dụng Nhóm III (chẹn kênh K+ kéo dài thời gian điện thế hoạt động), trong khi đồng phân l-sotalol có cả tác dụng Nhóm III và tác dụng Nhóm II (chẹn thụ thể beta không chọn lọc).",
      "Phương án này không đúng vì \"Nhóm II chẹn chọn lọc beta-1 và Nhóm I chẹn nhanh dòng Natri\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Làm giảm Natri nội bào gián tiếp làm giảm Calci nội bào",
      "Làm tăng tích lũy ion Calci trong lưới nội bào",
      "Làm đào thải ồ ạt ion Bicarbonat toan hóa mô mạch"
    ],
    "correct": 1,
    "explanation": "Trong vài tuần đầu, Thiazid hạ áp do giảm thể tích huyết tương. Về lâu dài, tác dụng hạ áp bền vững là do thuốc làm cạn kiệt Na+ ở thành mạch, kích hoạt bơm trao đổi Na+/Ca2+ đẩy Ca2+ ra ngoài, làm giảm Ca2+ nội bào trong cơ trơn thành mạch gây giãn mạch và giảm sức cản ngoại vi.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Làm cạn kiệt ion Magnesi nội bào ở thành mạch\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Trong vài tuần đầu, Thiazid hạ áp do giảm thể tích huyết tương. Về lâu dài, tác dụng hạ áp bền vững là do thuốc làm cạn kiệt Na+ ở thành mạch, kích hoạt bơm trao đổi Na+/Ca2+ đẩy Ca2+ ra ngoài, làm giảm Ca2+ nội bào trong cơ trơn thành mạch gây giãn mạch và giảm sức cản ngoại vi.",
      "Phương án này không đúng vì \"Làm tăng tích lũy ion Calci trong lưới nội bào\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Làm đào thải ồ ạt ion Bicarbonat toan hóa mô mạch\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Spironolacton và acid ethacrynic",
      "Furosemid và hydrochlorothiazid",
      "Amilorid dạng muối và triamteren",
      "Manitol dịch truyền và eplerenon"
    ],
    "correct": 1,
    "explanation": "Furosemid, Bumetanid, Torsemid, HCTZ, Indapamid và Acetazolamid đều mang nhóm cấu trúc sulfonamid (-SO2NH2), có thể gây dị ứng chéo ở bệnh nhân mẫn cảm với sulfamid. Acid ethacrynic là thuốc lợi tiểu quai duy nhất không có nhóm sulfonamid (dẫn xuất acid phenoxyacetic).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Spironolacton và acid ethacrynic\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Furosemid, Bumetanid, Torsemid, HCTZ, Indapamid và Acetazolamid đều mang nhóm cấu trúc sulfonamid (-SO2NH2), có thể gây dị ứng chéo ở bệnh nhân mẫn cảm với sulfamid. Acid ethacrynic là thuốc lợi tiểu quai duy nhất không có nhóm sulfonamid (dẫn xuất acid phenoxyacetic).",
      "Phương án này không đúng vì \"Amilorid dạng muối và triamteren\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Manitol dịch truyền và eplerenon\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Furosemid dẫn xuất sulfonamid",
      "Torsemid dẫn xuất sulfonylurea",
      "Acid ethacrynic",
      "Bumetanid dẫn xuất sulfonamid"
    ],
    "correct": 2,
    "explanation": "Acid ethacrynic là thuốc lợi tiểu quai có khung cấu trúc acid phenoxyacetic, hoàn toàn không chứa nhóm sulfonamid (-SO2NH2), do đó là lựa chọn an toàn tuyệt đối cho bệnh nhân có tiền sử dị ứng nặng với sulfamid.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Furosemid dẫn xuất sulfonamid\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Torsemid dẫn xuất sulfonylurea\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Acid ethacrynic là thuốc lợi tiểu quai có khung cấu trúc acid phenoxyacetic, hoàn toàn không chứa nhóm sulfonamid (-SO2NH2), do đó là lựa chọn an toàn tuyệt đối cho bệnh nhân có tiền sử dị ứng nặng với sulfamid.",
      "Phương án này không đúng vì \"Bumetanid dẫn xuất sulfonamid\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Thuốc kháng toan antacid dạng hỗn dịch uống",
      "Thuốc kháng thụ thể histamin H2 đường uống",
      "Thuốc ức chế bơm proton H+/K+-ATPase",
      "Thuốc bảo vệ tế bào và niêm mạc sucralfat"
    ],
    "correct": 2,
    "explanation": "Dùng PPI kéo dài làm giảm hấp thu Mg2+ chủ động qua các kênh TRPM6/TRPM7 ở biểu mô ruột non do làm thay đổi pH vi môi trường lòng ruột, dẫn tới hạ Magnesi máu nặng (hypomagnesemia), có thể kèm hạ Calci và hạ Kali máu thứ phát.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Thuốc kháng toan antacid dạng hỗn dịch uống\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thuốc kháng thụ thể histamin H2 đường uống\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Dùng PPI kéo dài làm giảm hấp thu Mg2+ chủ động qua các kênh TRPM6/TRPM7 ở biểu mô ruột non do làm thay đổi pH vi môi trường lòng ruột, dẫn tới hạ Magnesi máu nặng (hypomagnesemia), có thể kèm hạ Calci và hạ Kali máu thứ phát.",
      "Sucralfat tạo phức hợp gel bao phủ ổ loét và bảo vệ niêm mạc trong môi trường acid, không có tác dụng ức chế bài tiết acid dịch vị."
    ]
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
      "Làm giảm nhu động ruột gây tình trạng táo bón kéo dài",
      "Nhiễm kiềm chuyển hóa, giữ muối nước và acid dội ngược",
      "Tạo phức chelate không tan làm bất hoạt enzym tiêu hóa",
      "Lắng đọng tinh thể urat tại cầu thận gây suy giảm chức năng"
    ],
    "correct": 1,
    "explanation": "NaHCO3 là antacid toàn thân hòa tan tốt, trung hòa acid sinh ra khí CO2 (gây ợ hơi, căng trướng dạ dày có thể thủng ổ loét). Lượng Na+ hấp thu gây quá tải tuần hoàn, tăng HA, phù; và gốc HCO3- hấp thu gây nhiễm kiềm chuyển hóa toàn thân (hội chứng kiềm sữa).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Làm giảm nhu động ruột gây tình trạng táo bón kéo dài\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "NaHCO3 là antacid toàn thân hòa tan tốt, trung hòa acid sinh ra khí CO2 (gây ợ hơi, căng trướng dạ dày có thể thủng ổ loét). Lượng Na+ hấp thu gây quá tải tuần hoàn, tăng HA, phù; và gốc HCO3- hấp thu gây nhiễm kiềm chuyển hóa toàn thân (hội chứng kiềm sữa).",
      "Phương án này không đúng vì \"Tạo phức chelate không tan làm bất hoạt enzym tiêu hóa\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Lắng đọng tinh thể urat tại cầu thận gây suy giảm chức năng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
  },
  {
    "id": 341,
    "subject": "duocly2",
    "chapter": "Thuốc điều trị DDTT",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân trào ngược dạ dày thực quản nặng được phối hợp thêm một thuốc điều hòa vận động (prokinetic) nhằm tăng trương lực cơ thắt thực quản dưới và gia tăng tháo rỗng dạ dày. Thuốc đối kháng thụ thể Dopamin D2 ngoại vi được ưu tiên lựa chọn là:",
    "options": [
      "Metoclopramid hydroclorid",
      "Hyoscin butylbromid",
      "Loperamid hydroclorid",
      "Domperidon maleat"
    ],
    "correct": 3,
    "explanation": "Domperidon và Metoclopramid đối kháng thụ thể Dopamin D2 ở đường tiêu hóa và CTZ, làm tăng trương lực cơ vòng thực quản dưới (LES), tăng nhu động hang vị dạ dày và thúc đẩy làm rỗng dạ dày, giảm áp lực trào ngược lên thực quản.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Metoclopramid hydroclorid\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Hyoscin butylbromid\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Loperamid hydroclorid\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Domperidon và Metoclopramid đối kháng thụ thể Dopamin D2 ở đường tiêu hóa và CTZ, làm tăng trương lực cơ vòng thực quản dưới (LES), tăng nhu động hang vị dạ dày và thúc đẩy làm rỗng dạ dày, giảm áp lực trào ngược lên thực quản."
    ]
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
      "Ức chế thụ thể dopamin D2 tại hệ ngoại tháp",
      "Kích thích thụ thể muscarinic M3 tại cơ trơn",
      "Kích thích thụ thể beta-2 cơ vân và thụ thể tim",
      "Chẹn kênh dẫn truyền ion calci trên màng cơ vân"
    ],
    "correct": 2,
    "explanation": "Run ngón tay là tác dụng phụ phổ biến nhất của SABA, do kích thích thụ thể beta-2 trên tế bào cơ vân. Đánh trống ngực xuất phát từ giãn tiểu động mạch ngoại vi gây tụt huyết áp kích hoạt phản xạ giao cảm, và một phần do thuốc liều cao kích thích thụ thể beta-1 ở tim.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Ức chế thụ thể dopamin D2 tại hệ ngoại tháp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích thích thụ thể muscarinic M3 tại cơ trơn\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Run ngón tay là tác dụng phụ phổ biến nhất của SABA, do kích thích thụ thể beta-2 trên tế bào cơ vân. Đánh trống ngực xuất phát từ giãn tiểu động mạch ngoại vi gây tụt huyết áp kích hoạt phản xạ giao cảm, và một phần do thuốc liều cao kích thích thụ thể beta-1 ở tim.",
      "Phương án này không đúng vì \"Chẹn kênh dẫn truyền ion calci trên màng cơ vân\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Kháng thụ thể interleukin-4 và interleukin-13",
      "Ức chế enzym phosphodiesterase-4 (PDE-4) tăng AMP vòng",
      "Kích thích chọn lọc thụ thể alpha-2 trung ương",
      "Chẹn kênh kali phụ thuộc ATP tại cơ trơn phế quản"
    ],
    "correct": 1,
    "explanation": "Roflumilast là thuốc ức chế chọn lọc enzym PDE-4 (isoenzym chiếm ưu thế trong các tế bào viêm như bạch cầu trung tính, đại thực bào và lympho bào), làm tăng cAMP nội bào, ức chế quá trình viêm mạn tính và giảm tần suất các đợt bùng phát COPD nặng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Kháng thụ thể interleukin-4 và interleukin-13\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Roflumilast là thuốc ức chế chọn lọc enzym PDE-4 (isoenzym chiếm ưu thế trong các tế bào viêm như bạch cầu trung tính, đại thực bào và lympho bào), làm tăng cAMP nội bào, ức chế quá trình viêm mạn tính và giảm tần suất các đợt bùng phát COPD nặng.",
      "Phương án này không đúng vì \"Kích thích chọn lọc thụ thể alpha-2 trung ương\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Chẹn kênh kali phụ thuộc ATP tại cơ trơn phế quản\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Acid trong nước hoa quả phá hủy phân tử thuốc ở dạ dày",
      "Flavonoid trong nước hoa quả ức chế chất vận chuyển OATP1A2",
      "Nước hoa quả làm tăng bài tiết thuốc qua đường mật vào phân",
      "Polyphenol tạo phức kết tủa không tan với thuốc ở ruột"
    ],
    "correct": 1,
    "explanation": "Fexofenadin hấp thu qua ruột phụ thuộc vào protein vận chuyển OATP1A2. Naringin và hesperidin trong nước bưởi, cam, táo ức chế OATP1A2, làm giảm hấp thu Fexofenadin từ 30-40%. Cần uống Fexofenadin với nước lọc, cách xa nước hoa quả ít nhất 2-4 giờ.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Acid trong nước hoa quả phá hủy phân tử thuốc ở dạ dày\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Fexofenadin hấp thu qua ruột phụ thuộc vào protein vận chuyển OATP1A2. Naringin và hesperidin trong nước bưởi, cam, táo ức chế OATP1A2, làm giảm hấp thu Fexofenadin từ 30-40%. Cần uống Fexofenadin với nước lọc, cách xa nước hoa quả ít nhất 2-4 giờ.",
      "Phương án này không đúng vì \"Nước hoa quả làm tăng bài tiết thuốc qua đường mật vào phân\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Polyphenol tạo phức kết tủa không tan với thuốc ở ruột\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Chuyển hóa hoàn toàn qua liên hợp glucuronid ở thận",
      "Bị oxy hóa nhanh chóng bởi monoamin oxidase ở ruột",
      "Thủy phân hoàn toàn bởi hệ enzym esterase huyết tương",
      "Không chuyển hóa qua CYP450 và bài xuất nguyên vẹn"
    ],
    "correct": 3,
    "explanation": "Bilastin hầu như không qua chuyển hóa gan (khoảng 95% đào thải dạng nguyên vẹn qua phân và nước tiểu), không tương tác với hệ enzym CYP450, do đó rất an toàn và không cần chỉnh liều ở bệnh nhân suy giảm chức năng gan.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Chuyển hóa hoàn toàn qua liên hợp glucuronid ở thận\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Bị oxy hóa nhanh chóng bởi monoamin oxidase ở ruột\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thủy phân hoàn toàn bởi hệ enzym esterase huyết tương\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Bilastin hầu như không qua chuyển hóa gan (khoảng 95% đào thải dạng nguyên vẹn qua phân và nước tiểu), không tương tác với hệ enzym CYP450, do đó rất an toàn và không cần chỉnh liều ở bệnh nhân suy giảm chức năng gan."
    ]
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
      "Albendazol dạng viên nhai 400 mg",
      "Metronidazol đường uống liều 2 g",
      "Nystatin dạng viên đặt âm đạo",
      "Clotrimazol dạng kem bôi ngoài da và âm đạo"
    ],
    "correct": 1,
    "explanation": "Metronidazol hoặc Tinidazol liều duy nhất 2g đường uống là phác đồ chuẩn điều trị viêm âm đạo do Trichomonas vaginalis. Nguyên tắc bắt buộc là phải điều trị đồng thời cho cả bạn tình/chồng để ngăn chặn tái nhiễm chéo ('hiệu ứng bóng bàn').",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Albendazol dạng viên nhai 400 mg\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Metronidazol hoặc Tinidazol liều duy nhất 2g đường uống là phác đồ chuẩn điều trị viêm âm đạo do Trichomonas vaginalis. Nguyên tắc bắt buộc là phải điều trị đồng thời cho cả bạn tình/chồng để ngăn chặn tái nhiễm chéo ('hiệu ứng bóng bàn').",
      "Phương án này không đúng vì \"Nystatin dạng viên đặt âm đạo\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Clotrimazol dạng kem bôi ngoài da và âm đạo\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Metronidazol\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ornidazol\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tinidazol\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Tinidazol có thời gian bán hủy dài hơn (12-14 giờ so với 8 giờ của Metronidazol), cho phép dùng 1 lần/ngày và ít gây tác dụng phụ buồn nôn, đắng miệng hay vị kim loại khó chịu hơn Metronidazol, giúp bệnh nhân dung nạp tốt hơn."
    ]
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
      "Gây tan máu cấp tính ở người thiếu men G6PD do vỡ màng",
      "Ức chế phản xạ bài xuất dịch mật gây ứ mật trong gan",
      "Kích thích gan tăng tổng hợp Triglycerid và VLDL bù trừ",
      "Tạo phức chelate không tan với protein gây tắc mao mạch"
    ],
    "correct": 2,
    "explanation": "Khi acid mật bị mất qua phân, gan tăng cường chuyển hóa chuyển đổi các nguồn năng lượng thành acid mật bù trừ, kéo theo kích thích tổng hợp acid béo và bài tiết lipoprotein VLDL (giàu triglycerid). Nếu bệnh nhân đã có triglycerid cao từ trước, dùng nhựa gắn acid mật sẽ làm triglycerid tăng bùng phát.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Gây tan máu cấp tính ở người thiếu men G6PD do vỡ màng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ức chế phản xạ bài xuất dịch mật gây ứ mật trong gan\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Khi acid mật bị mất qua phân, gan tăng cường chuyển hóa chuyển đổi các nguồn năng lượng thành acid mật bù trừ, kéo theo kích thích tổng hợp acid béo và bài tiết lipoprotein VLDL (giàu triglycerid). Nếu bệnh nhân đã có triglycerid cao từ trước, dùng nhựa gắn acid mật sẽ làm triglycerid tăng bùng phát.",
      "Phương án này không đúng vì \"Tạo phức chelate không tan với protein gây tắc mao mạch\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Doxycyclin có tác dụng ức chế apicoplast (bào quan có nguồn gốc thực vật thiết yếu của Plasmodium), làm ký sinh trùng chết chậm ở thế hệ phân chia tiếp theo. Thuốc được dùng phối hợp với Quinin hoặc dùng dự phòng sốt rét cho người lớn đi vào vùng kháng đa thuốc (uống 100 mg/ngày).",
      "Phương án này không đúng vì \"Amoxicillin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Erythromycin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ciprofloxacin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Thời gian bán thải dài và dùng một liều duy nhất",
      "Không gây tan máu ở người có cơ địa thiếu G6PD",
      "An toàn tuyệt đối cho phụ nữ mang thai mọi thời kỳ",
      "Bào chế dạng tiêm truyền tĩnh mạch tác dụng kéo dài"
    ],
    "correct": 0,
    "explanation": "Tafenoquine có T1/2 sinh học kéo dài 14-20 ngày. Trong điều trị tiệt căn P. vivax, Tafenoquine chỉ cần dùng một liều duy nhất 300 mg (sau khi điều trị cắt cơn), khắc phục triệt để vấn đề không tuân thủ phác đồ 14 ngày của Primaquin (tuy nhiên vẫn bắt buộc phải xét nghiệm G6PD trước khi dùng).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Tafenoquine có T1/2 sinh học kéo dài 14-20 ngày. Trong điều trị tiệt căn P. vivax, Tafenoquine chỉ cần dùng một liều duy nhất 300 mg (sau khi điều trị cắt cơn), khắc phục triệt để vấn đề không tuân thủ phác đồ 14 ngày của Primaquin (tuy nhiên vẫn bắt buộc phải xét nghiệm G6PD trước khi dùng).",
      "Phương án này không đúng vì \"Không gây tan máu ở người có cơ địa thiếu G6PD\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"An toàn tuyệt đối cho phụ nữ mang thai mọi thời kỳ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Bào chế dạng tiêm truyền tĩnh mạch tác dụng kéo dài\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Ức chế cạnh tranh enzym aromatase ở mô mỡ",
      "Cấu trúc aglycon gắn chéo và kích hoạt thụ thể estrogen",
      "Kích thích tuyến yên tăng cường bài tiết prolactin",
      "Ức chế tổng hợp testosterone tại tế bào kẽ tinh hoàn"
    ],
    "correct": 1,
    "explanation": "Khung steroid của aglycon trong phân tử Digoxin có độ tương đồng cấu trúc nhất định với các hormon sinh dục, có thể liên kết chéo với thụ thể Estrogen và cạnh tranh với thụ thể Androgen, gây chứng vú to ở nam giới (gynecomastia) khi dùng dài ngày.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Ức chế cạnh tranh enzym aromatase ở mô mỡ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Khung steroid của aglycon trong phân tử Digoxin có độ tương đồng cấu trúc nhất định với các hormon sinh dục, có thể liên kết chéo với thụ thể Estrogen và cạnh tranh với thụ thể Androgen, gây chứng vú to ở nam giới (gynecomastia) khi dùng dài ngày.",
      "Phương án này không đúng vì \"Kích thích tuyến yên tăng cường bài tiết prolactin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ức chế tổng hợp testosterone tại tế bào kẽ tinh hoàn\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Liều trung bình từ 5 đến 10 mcg/kg/phút",
      "Liều tăng cao từ 10 đến 20 mcg/kg/phút",
      "Liều thấp từ 1 đến 3 mcg/kg/phút",
      "Liều tiêm nhanh từ 20 đến 50 mcg/kg"
    ],
    "correct": 2,
    "explanation": "Dopamin liều thấp (1-3 mcg/kg/phút) kích thích thụ thể D1 ở giường mạch thận, mạc treo và vành, gây giãn mạch thận tăng dòng máu tưới thận và tăng lọc. Liều trung bình (5-10 mcg/kg/phút) kích thích beta-1 tăng co bóp tim. Liều cao (> 10 mcg/kg/phút) kích thích alpha-1 gây co mạch nâng HA.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Liều trung bình từ 5 đến 10 mcg/kg/phút\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Liều tăng cao từ 10 đến 20 mcg/kg/phút\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Dopamin liều thấp (1-3 mcg/kg/phút) kích thích thụ thể D1 ở giường mạch thận, mạc treo và vành, gây giãn mạch thận tăng dòng máu tưới thận và tăng lọc. Liều trung bình (5-10 mcg/kg/phút) kích thích beta-1 tăng co bóp tim. Liều cao (> 10 mcg/kg/phút) kích thích alpha-1 gây co mạch nâng HA.",
      "Phương án này không đúng vì \"Liều tiêm nhanh từ 20 đến 50 mcg/kg\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Thuốc lisinopril",
      "Thuốc enalapril",
      "Thuốc perindopril",
      "Thuốc fosinopril"
    ],
    "correct": 3,
    "explanation": "Fosinopril là thuốc ức chế men chuyển duy nhất chứa nhóm phosphinyl, được thải trừ cân bằng kép 50% qua gan mật và 50% qua thận. Khi chức năng thận suy giảm, gan sẽ tăng cường thải trừ bù trừ và ngược lại, do đó không cần chỉnh liều ở bệnh nhân suy thận nhẹ đến trung bình.",
    "reference": "Sách Dược lý 2 tr. 67",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Thuốc lisinopril\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thuốc enalapril\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thuốc perindopril\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Fosinopril là thuốc ức chế men chuyển duy nhất chứa nhóm phosphinyl, được thải trừ cân bằng kép 50% qua gan mật và 50% qua thận. Khi chức năng thận suy giảm, gan sẽ tăng cường thải trừ bù trừ và ngược lại, do đó không cần chỉnh liều ở bệnh nhân suy thận nhẹ đến trung bình."
    ]
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
      "Thuốc telmisartan",
      "Thuốc candesartan",
      "Thuốc losartan kali",
      "Thuốc valsartan"
    ],
    "correct": 0,
    "explanation": "Telmisartan có thời gian bán thải dài nhất trong nhóm ARB (t1/2 ~ 24 giờ) và thải trừ 98% qua gan mật/phân. Cấu trúc độc đáo của Telmisartan còn hoạt hóa thụ thể nhân PPAR-gamma (tương tự nhóm Thiazolidinedion), làm tăng nhạy cảm insulin và giảm triglycerid máu, rất có lợi cho bệnh nhân THA có hội chứng chuyển hóa.",
    "reference": "Sách Dược lý 2 tr. 71",
    "distractorExplanations": [
      "Telmisartan có thời gian bán thải dài nhất trong nhóm ARB (t1/2 ~ 24 giờ) và thải trừ 98% qua gan mật/phân. Cấu trúc độc đáo của Telmisartan còn hoạt hóa thụ thể nhân PPAR-gamma (tương tự nhóm Thiazolidinedion), làm tăng nhạy cảm insulin và giảm triglycerid máu, rất có lợi cho bệnh nhân THA có hội chứng chuyển hóa.",
      "Phương án này không đúng vì \"Thuốc candesartan\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thuốc losartan kali\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thuốc valsartan\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Bisoprolol chẹn chọn lọc trên thụ thể beta-1 ở tim",
      "Amlodipin chẹn kênh calci gây giãn cơ trơn mạch máu",
      "Propranolol phong bế không chọn lọc thụ thể beta",
      "Losartan chẹn thụ thể angiotensin II tại thành mạch"
    ],
    "correct": 2,
    "explanation": "Propranolol là thuốc chẹn beta không chọn lọc, phong bế cả thụ thể beta-1 và beta-2. Thụ thể beta-2 ở cơ trơn mạch máu ngoại vi có tác dụng giãn mạch; khi bị Propranolol phong bế, tác dụng co mạch của thụ thể alpha-1 chiếm ưu thế hoàn toàn, gây co thắt mạch ngoại vi nặng và khởi phát hội chứng Raynaud hoặc đau cách hồi.",
    "reference": "Sách Dược lý 2 tr. 64",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Bisoprolol chẹn chọn lọc trên thụ thể beta-1 ở tim\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Amlodipin chẹn kênh calci gây giãn cơ trơn mạch máu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Propranolol là thuốc chẹn beta không chọn lọc, phong bế cả thụ thể beta-1 và beta-2. Thụ thể beta-2 ở cơ trơn mạch máu ngoại vi có tác dụng giãn mạch; khi bị Propranolol phong bế, tác dụng co mạch của thụ thể alpha-1 chiếm ưu thế hoàn toàn, gây co thắt mạch ngoại vi nặng và khởi phát hội chứng Raynaud hoặc đau cách hồi.",
      "Phương án này không đúng vì \"Losartan chẹn thụ thể angiotensin II tại thành mạch\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Làm co thắt tiểu phế quản gây suy hô hấp cấp tính",
      "Gây tụt áp nhanh kích hoạt phản xạ giao cảm làm tim nhanh",
      "Làm bùng phát kết tập tiểu cầu gây đông vón tắc mạch vành",
      "Làm co thắt tiểu động mạch thận dẫn tới suy thận cấp vô niệu"
    ],
    "correct": 1,
    "explanation": "Nifedipin tác dụng ngắn gây tụt huyết áp quá nhanh và mạnh, kích hoạt cung phản xạ áp thụ quan làm bùng phát cơn bão giao cảm: tim đập nhanh vọt, tăng co bóp và tăng tiêu thụ oxy cơ tim, làm nặng thêm cơn thiếu máu cơ tim và tăng nguy cơ tử vong.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Làm co thắt tiểu phế quản gây suy hô hấp cấp tính\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Nifedipin tác dụng ngắn gây tụt huyết áp quá nhanh và mạnh, kích hoạt cung phản xạ áp thụ quan làm bùng phát cơn bão giao cảm: tim đập nhanh vọt, tăng co bóp và tăng tiêu thụ oxy cơ tim, làm nặng thêm cơn thiếu máu cơ tim và tăng nguy cơ tử vong.",
      "Phương án này không đúng vì \"Làm bùng phát kết tập tiểu cầu gây đông vón tắc mạch vành\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Làm co thắt tiểu động mạch thận dẫn tới suy thận cấp vô niệu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Nhóm dihydropyridin thế hệ một",
      "Nhóm non-dihydropyridin",
      "Nhóm dihydropyridin thế hệ hai",
      "Nhóm dihydropyridin thế hệ ba"
    ],
    "correct": 1,
    "explanation": "Verapamil và Diltiazem có tác dụng ức chế co bóp cơ tim (inotropic âm) rất mạnh và làm chậm nhịp tim, dẫn đến suy sụp huyết động, phù phổi cấp và tử vong ở bệnh nhân suy tim có phân suất tống máu giảm (HFrEF).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Nhóm dihydropyridin thế hệ một\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Verapamil và Diltiazem có tác dụng ức chế co bóp cơ tim (inotropic âm) rất mạnh và làm chậm nhịp tim, dẫn đến suy sụp huyết động, phù phổi cấp và tử vong ở bệnh nhân suy tim có phân suất tống máu giảm (HFrEF).",
      "Phương án này không đúng vì \"Nhóm dihydropyridin thế hệ hai\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Nhóm dihydropyridin thế hệ ba\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Quinidin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Disopyramid có tác dụng phụ kháng cholinergic (kháng muscarinic) mạnh nhất trong nhóm IA, gây bí tiểu ở bệnh nhân phì đại tiền liệt tuyến, tăng nhãn áp ở bệnh nhân glaucom và làm nặng thêm suy tim do tác dụng ức chế co bóp cơ tim mạnh.",
      "Phương án này không đúng vì \"Procainamid\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Lidocain\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Cắt cơn nhịp nhanh thất đa hình xoắn đỉnh",
      "Nâng huyết áp động mạch trong sốc do tim cấp",
      "Chuyển rung nhĩ hoặc cuồng nhĩ về nhịp xoang",
      "Phục hồi dẫn truyền nhĩ thất trong block tim"
    ],
    "correct": 2,
    "explanation": "Ibutilide (dạng tiêm tĩnh mạch) và Dofetilide (uống) là thuốc chẹn kênh K+ chọn lọc cao (IKr), được chỉ định hàng đầu để chuyển nhịp nhanh chóng rung nhĩ hoặc cuồng nhĩ mới khởi phát (< 48 giờ) về nhịp xoang bình thường.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Cắt cơn nhịp nhanh thất đa hình xoắn đỉnh\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Nâng huyết áp động mạch trong sốc do tim cấp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Ibutilide (dạng tiêm tĩnh mạch) và Dofetilide (uống) là thuốc chẹn kênh K+ chọn lọc cao (IKr), được chỉ định hàng đầu để chuyển nhịp nhanh chóng rung nhĩ hoặc cuồng nhĩ mới khởi phát (< 48 giờ) về nhịp xoang bình thường.",
      "Phương án này không đúng vì \"Phục hồi dẫn truyền nhĩ thất trong block tim\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Ức chế thụ thể endothelin ETA tại cơ trơn mạch",
      "Chủ vận thụ thể natriuretic peptid ở mạch thận",
      "Chẹn kênh đồng vận chuyển ion natri quai Henle",
      "Đối kháng thụ thể vasopressin V2 tại ống góp"
    ],
    "correct": 3,
    "explanation": "Tolvaptan và Conivaptan là các chất đối kháng chọn lọc hoặc không chọn lọc thụ thể Vasopressin V2 (Vaptans) tại tế bào chính ống góp, ngăn cản sự di chuyển của các kênh dẫn nước Aquaporin-2 ra màng, làm tăng thải trừ nước tự do (Aquaresis) mà không làm mất điện giải, giúp nâng nồng độ Natri huyết tương.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Ức chế thụ thể endothelin ETA tại cơ trơn mạch\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Chủ vận thụ thể natriuretic peptid ở mạch thận\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Đồng vận chuyển Na+-K+-2Cl- ở quai Henle là đích tác dụng của nhóm lợi tiểu quai (Furosemid), không thỏa mãn tiêu chí câu hỏi này.",
      "Tolvaptan và Conivaptan là các chất đối kháng chọn lọc hoặc không chọn lọc thụ thể Vasopressin V2 (Vaptans) tại tế bào chính ống góp, ngăn cản sự di chuyển của các kênh dẫn nước Aquaporin-2 ra màng, làm tăng thải trừ nước tự do (Aquaresis) mà không làm mất điện giải, giúp nâng nồng độ Natri huyết tương."
    ]
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
      "Làm giãn hệ tĩnh mạch dung tích giảm tiền gánh qua prostaglandin",
      "Ức chế trung khu hô hấp tại hành não làm giảm cảm giác khó thở",
      "Làm tiêu các cục huyết khối vi mạch trong tuần hoàn phổi",
      "Kích thích trực tiếp cơ hoành tăng cường thông khí phế nang"
    ],
    "correct": 0,
    "explanation": "Khi tiêm tĩnh mạch, Furosemid kích thích tổng hợp prostaglandin tại thận và phổi gây giãn nhanh hệ tĩnh mạch dung tích lớn sau 5-15 phút, làm giảm hồi lưu tĩnh mạch về tim (giảm tiền gánh), hạ áp lực đổ đầy thất trái và áp lực mao mạch phổi bít, cắt nhanh cơn phù phổi cấp trước khi thận kịp bài niệu (tác dụng lợi niệu thường sau 20-30 phút).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Khi tiêm tĩnh mạch, Furosemid kích thích tổng hợp prostaglandin tại thận và phổi gây giãn nhanh hệ tĩnh mạch dung tích lớn sau 5-15 phút, làm giảm hồi lưu tĩnh mạch về tim (giảm tiền gánh), hạ áp lực đổ đầy thất trái và áp lực mao mạch phổi bít, cắt nhanh cơn phù phổi cấp trước khi thận kịp bài niệu (tác dụng lợi niệu thường sau 20-30 phút).",
      "Phương án này không đúng vì \"Ức chế trung khu hô hấp tại hành não làm giảm cảm giác khó thở\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Làm tiêu các cục huyết khối vi mạch trong tuần hoàn phổi\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích thích trực tiếp cơ hoành tăng cường thông khí phế nang\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Không qua hàng rào máu não nên ít tác dụng phụ ngoại tháp",
      "Không chuyển hóa qua gan nên không gây độc tế bào gan",
      "Ức chế chọn lọc bơm proton làm giảm tiết acid dạ dày",
      "Thời gian bán thải kéo dài và duy trì nồng độ ổn định"
    ],
    "correct": 0,
    "explanation": "Metoclopramid thân dầu qua được hàng rào máu não chẹn thụ thể D2 ở thể vân gây rối loạn vận động ngoại tháp (hội chứng Parkinson, loạn trương lực cấp, rối loạn vận động muộn). Domperidon khó qua hàng rào máu não nên rất ít nguy cơ này.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Metoclopramid thân dầu qua được hàng rào máu não chẹn thụ thể D2 ở thể vân gây rối loạn vận động ngoại tháp (hội chứng Parkinson, loạn trương lực cấp, rối loạn vận động muộn). Domperidon khó qua hàng rào máu não nên rất ít nguy cơ này.",
      "Phương án này không đúng vì \"Không chuyển hóa qua gan nên không gây độc tế bào gan\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ức chế chọn lọc bơm proton làm giảm tiết acid dạ dày\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thời gian bán thải kéo dài và duy trì nồng độ ổn định\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Tối thiểu 24 giờ",
      "Tối thiểu 2 tuần",
      "Tối thiểu 48 giờ",
      "Tối thiểu một tháng"
    ],
    "correct": 1,
    "explanation": "PPI ức chế sự nhân lên của H. pylori và ức chế hoạt tính enzym Urease của vi khuẩn. Dùng PPI gần ngày làm test sẽ làm enzym urease không phân giải được viên uống C13/C14-ure, gây kết quả âm tính giả. Bắt buộc ngừng PPI ít nhất 2 tuần và kháng sinh 4 tuần.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Tối thiểu 24 giờ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "PPI ức chế sự nhân lên của H. pylori và ức chế hoạt tính enzym Urease của vi khuẩn. Dùng PPI gần ngày làm test sẽ làm enzym urease không phân giải được viên uống C13/C14-ure, gây kết quả âm tính giả. Bắt buộc ngừng PPI ít nhất 2 tuần và kháng sinh 4 tuần.",
      "Phương án này không đúng vì \"Tối thiểu 48 giờ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tối thiểu một tháng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
  },
  {
    "id": 364,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Một thuốc tẩy giun cổ điển tác dụng chọn lọc trên giun đũa và giun kim thông qua phong bế dẫn truyền thần kinh cơ, làm tăng tính thấm của màng cơ giun với ion clo. Tác động dược lý phân tử cốt lõi của hoạt chất này là:",
    "options": [
      "Kích thích thụ thể nicotinic gây co cứng cơ giun",
      "Ức chế phản ứng trùng hợp tubulin tạo vi ống giun",
      "Kích hoạt thụ thể GABA làm mở kênh clo liệt mềm cơ",
      "Ức chế chọn lọc enzym fumarat reductase của ký sinh"
    ],
    "correct": 2,
    "explanation": "Piperazin là chất chủ vận tại thụ thể GABA ở màng sau synap thần kinh cơ của giun. Mở kênh Clo gây ưu phân cực màng, làm cơ giun giãn hoàn toàn và bị liệt mềm (khác với liệt cứng của Pyrantel), giun sống bị nhu động ruột đẩy ra ngoài theo phân.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Kích thích thụ thể nicotinic gây co cứng cơ giun\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ức chế phản ứng trùng hợp tubulin tạo vi ống giun\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Piperazin là chất chủ vận tại thụ thể GABA ở màng sau synap thần kinh cơ của giun. Mở kênh Clo gây ưu phân cực màng, làm cơ giun giãn hoàn toàn và bị liệt mềm (khác với liệt cứng của Pyrantel), giun sống bị nhu động ruột đẩy ra ngoài theo phân.",
      "Phương án này không đúng vì \"Ức chế chọn lọc enzym fumarat reductase của ký sinh\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Tăng nồng độ thuốc diệt sán trong dịch não tủy",
      "Ngăn ngừa nhiễm nấm cơ hội và vi khuẩn tại màng não",
      "Kiểm soát hạ glucose máu cấp do ấu trùng sán tiêu thụ",
      "Giảm phản ứng viêm và phù não khi ấu trùng sán chết"
    ],
    "correct": 3,
    "explanation": "Khi thuốc diệt sán ngấm vào não giết chết các nang ấu trùng, kháng nguyên lạ thoát ra kích hoạt phản ứng viêm dữ dội xung quanh nang sán, gây phù não cấp tính bùng phát các cơn co giật, tăng áp lực nội sọ và tụt kẹt não tử vong. Corticosteroid dùng kèm giúp dập tắt phản ứng viêm này.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Tăng nồng độ thuốc diệt sán trong dịch não tủy\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ngăn ngừa nhiễm nấm cơ hội và vi khuẩn tại màng não\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kiểm soát hạ glucose máu cấp do ấu trùng sán tiêu thụ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Khi thuốc diệt sán ngấm vào não giết chết các nang ấu trùng, kháng nguyên lạ thoát ra kích hoạt phản ứng viêm dữ dội xung quanh nang sán, gây phù não cấp tính bùng phát các cơn co giật, tăng áp lực nội sọ và tụt kẹt não tử vong. Corticosteroid dùng kèm giúp dập tắt phản ứng viêm này."
    ]
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
      "Ổn định màng dưỡng bào và ngăn phóng thích chất trung gian",
      "Giãn trực tiếp cơ trơn phế quản thông qua tăng cGMP",
      "Chẹn thụ thể muscarinic M3 tại cơ trơn phế quản",
      "Kích thích thụ thể beta-2 giao cảm trên đường dẫn khí"
    ],
    "correct": 0,
    "explanation": "Cromolyn và Nedocromil chẹn các kênh Clo trên màng dưỡng bào, ức chế dòng Ca2+ đi vào, làm ổn định màng tế bào mast, ngăn chặn hiện tượng mất hạt giải phóng histamin và leukotriene khi có kháng nguyên kích thích. Thuốc chỉ dùng dự phòng, không có tác dụng cắt cơn.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Cromolyn và Nedocromil chẹn các kênh Clo trên màng dưỡng bào, ức chế dòng Ca2+ đi vào, làm ổn định màng tế bào mast, ngăn chặn hiện tượng mất hạt giải phóng histamin và leukotriene khi có kháng nguyên kích thích. Thuốc chỉ dùng dự phòng, không có tác dụng cắt cơn.",
      "Phương án này không đúng vì \"Giãn trực tiếp cơ trơn phế quản thông qua tăng cGMP\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Chẹn thụ thể muscarinic M3 tại cơ trơn phế quản\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích thích thụ thể beta-2 giao cảm trên đường dẫn khí\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Giãn trực tiếp cơ trơn khí phế quản tức thì sau ba mươi giây",
      "Tăng tính thấm thành mạch dẫn lưu dịch xuất tiết nhanh",
      "Chống viêm, giảm phù nề và phục hồi thụ thể beta-2",
      "Tiêu diệt vi khuẩn kỵ khí gây nhiễm trùng cơ hội"
    ],
    "correct": 2,
    "explanation": "Corticosteroid toàn thân ức chế dòng tế bào viêm và cytokin, giảm phù nề và xuất tiết dịch nhầy lòng phế quản; đồng thời thuốc làm tăng phiên mã gen thụ thể beta-2 (up-regulation), khôi phục độ nhạy cảm của thụ thể beta-2 vốn bị trơ sau khi dùng quá nhiều SABA.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Giãn trực tiếp cơ trơn khí phế quản tức thì sau ba mươi giây\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tăng tính thấm thành mạch dẫn lưu dịch xuất tiết nhanh\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Corticosteroid toàn thân ức chế dòng tế bào viêm và cytokin, giảm phù nề và xuất tiết dịch nhầy lòng phế quản; đồng thời thuốc làm tăng phiên mã gen thụ thể beta-2 (up-regulation), khôi phục độ nhạy cảm của thụ thể beta-2 vốn bị trơ sau khi dùng quá nhiều SABA.",
      "Phương án này không đúng vì \"Tiêu diệt vi khuẩn kỵ khí gây nhiễm trùng cơ hội\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Thụ thể Histamin H2 liên kết Gs làm tăng AMP vòng",
      "Thụ thể Histamin H3 liên kết Gi ở màng trước synap",
      "Thụ thể Histamin H1 liên kết Gq kích thích đầu tận thần kinh",
      "Thụ thể Histamin H4 liên kết Gi trên màng tế bào miễn dịch"
    ],
    "correct": 2,
    "explanation": "Histamin gắn vào thụ thể H1 trên các sợi thần kinh cảm giác không myelin hóa (sợi C), kích hoạt phospholipase C sinh IP3/DAG tăng Ca2+ nội bào, phát sinh các xung động thần kinh gây cảm giác ngứa ngáy dữ dội và phản xạ hắt hơi.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Thụ thể Histamin H2 liên kết Gs làm tăng AMP vòng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thụ thể Histamin H3 liên kết Gi ở màng trước synap\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Histamin gắn vào thụ thể H1 trên các sợi thần kinh cảm giác không myelin hóa (sợi C), kích hoạt phospholipase C sinh IP3/DAG tăng Ca2+ nội bào, phát sinh các xung động thần kinh gây cảm giác ngứa ngáy dữ dội và phản xạ hắt hơi.",
      "Phương án này không đúng vì \"Thụ thể Histamin H4 liên kết Gi trên màng tế bào miễn dịch\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Đối kháng dược lý làm triệt tiêu tác dụng chống dị ứng",
      "Làm chậm rỗng dạ dày dẫn đến giảm hấp thu các chất",
      "Tạo chất chuyển hóa độc gây hoại tử tế bào gan diện rộng",
      "Hiệp đồng ức chế thần kinh trung ương và ức chế hô hấp"
    ],
    "correct": 3,
    "explanation": "Cả rượu, benzodiazepin và kháng H1 thế hệ 1 đều có tác dụng ức chế hệ thần kinh trung ương. Khi phối hợp, chúng hiệp đồng tăng cường tác dụng an thần, làm chậm phản xạ vận động, có thể dẫn tới ức chế hô hấp và tử vong do tai nạn hoặc hôn mê.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Đối kháng dược lý làm triệt tiêu tác dụng chống dị ứng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Làm chậm rỗng dạ dày dẫn đến giảm hấp thu các chất\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tạo chất chuyển hóa độc gây hoại tử tế bào gan diện rộng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Cả rượu, benzodiazepin và kháng H1 thế hệ 1 đều có tác dụng ức chế hệ thần kinh trung ương. Khi phối hợp, chúng hiệp đồng tăng cường tác dụng an thần, làm chậm phản xạ vận động, có thể dẫn tới ức chế hô hấp và tử vong do tai nạn hoặc hôn mê."
    ]
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
      "Nhóm dẫn chất statin",
      "Nhóm dẫn chất fibrat",
      "Nhóm nhựa gắn acid mật",
      "Nhóm ức chế men PCSK9"
    ],
    "correct": 1,
    "explanation": "Fibrat ức chế enzym 7-alpha-hydroxylase (bước giới hạn chuyển cholesterol thành acid mật), làm giảm tổng hợp acid mật và tăng bài tiết cholesterol tự do vào dịch mật. Tình trạng bão hòa cholesterol trong túi mật này dẫn đến dễ kết tinh và hình thành sỏi mật (cholelithiasis).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Nhóm dẫn chất statin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Fibrat ức chế enzym 7-alpha-hydroxylase (bước giới hạn chuyển cholesterol thành acid mật), làm giảm tổng hợp acid mật và tăng bài tiết cholesterol tự do vào dịch mật. Tình trạng bão hòa cholesterol trong túi mật này dẫn đến dễ kết tinh và hình thành sỏi mật (cholelithiasis).",
      "Phương án này không đúng vì \"Nhóm nhựa gắn acid mật\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Nhóm ức chế men PCSK9\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Pravastatin"
    ],
    "correct": 3,
    "explanation": "Pravastatin tan nhiều trong nước, được bài xuất qua cả gan và thận và hoàn toàn không bị chuyển hóa qua hệ enzym CYP450, do đó không bị ảnh hưởng bởi các thuốc ức chế hoặc cảm ứng CYP3A4, là lựa chọn an toàn khi cần phối hợp nhiều thuốc phức tạp (như thuốc chống thải ghép, thuốc kháng HIV).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Simvastatin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Lovastatin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Atorvastatin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Pravastatin tan nhiều trong nước, được bài xuất qua cả gan và thận và hoàn toàn không bị chuyển hóa qua hệ enzym CYP450, do đó không bị ảnh hưởng bởi các thuốc ức chế hoặc cảm ứng CYP3A4, là lựa chọn an toàn khi cần phối hợp nhiều thuốc phức tạp (như thuốc chống thải ghép, thuốc kháng HIV)."
    ]
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
      "Đột biến enzym dihydrofolat reductase",
      "Đột biến enzym dihydropteroat synthase",
      "Đột biến gen vận chuyển màng Pfcrt",
      "Đột biến hệ enzym ty thể cytochrome b"
    ],
    "correct": 2,
    "explanation": "Đột biến gen Pfcrt (đặc biệt là đột biến K76T) làm thay đổi điện tích protein vận chuyển màng không bào tiêu hóa, biến nó thành bơm tống thuốc chủ động tống Chloroquin mang điện tích dương ra khỏi không bào, làm nồng độ thuốc không đủ ức chế tạo hemozoin.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Đột biến enzym dihydrofolat reductase\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Đột biến enzym dihydropteroat synthase\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Đột biến gen Pfcrt (đặc biệt là đột biến K76T) làm thay đổi điện tích protein vận chuyển màng không bào tiêu hóa, biến nó thành bơm tống thuốc chủ động tống Chloroquin mang điện tích dương ra khỏi không bào, làm nồng độ thuốc không đủ ức chế tạo hemozoin.",
      "Phương án này không đúng vì \"Đột biến hệ enzym ty thể cytochrome b\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Kích thích tổng hợp và giải phóng dopamin tại vùng vỏ não",
      "Tăng bài tiết acid uric và tăng thanh thải qua nước tiểu",
      "Đối kháng chọn lọc thụ thể muscarinic tại thể vân của não",
      "Ức chế dopa decarboxylase ngoại vi, tăng levodopa vào não"
    ],
    "correct": 3,
    "explanation": "Dopamin không qua được hàng rào máu não nhưng Levodopa qua được. Enzym Dopa-decarboxylase ở ngoại vi chuyển hóa 99% Levodopa thành dopamin ngay ngoài máu gây nôn mửa và tụt HA. Carbidopa chỉ ức chế enzym này ở ngoại vi (không vào não), bảo vệ Levodopa vào não tăng gấp 5 lần và triệt tiêu tác dụng phụ ngoại vi.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Kích thích tổng hợp và giải phóng dopamin tại vùng vỏ não\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tăng bài tiết acid uric và tăng thanh thải qua nước tiểu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Đối kháng chọn lọc thụ thể muscarinic tại thể vân của não\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Dopamin không qua được hàng rào máu não nhưng Levodopa qua được. Enzym Dopa-decarboxylase ở ngoại vi chuyển hóa 99% Levodopa thành dopamin ngay ngoài máu gây nôn mửa và tụt HA. Carbidopa chỉ ức chế enzym này ở ngoại vi (không vào não), bảo vệ Levodopa vào não tăng gấp 5 lần và triệt tiêu tác dụng phụ ngoại vi."
    ]
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
      "Kích thích ruột non tăng hấp thu calci phụ thuộc vitamin D",
      "Kích thích hủy cốt bào làm tăng tốc độ tiêu hủy mô xương",
      "Gắn thụ thể hủy cốt bào ức chế tiêu xương và tăng thải calci thận",
      "Chuyển hóa calci tự do trong máu lắng đọng vào gan và lách"
    ],
    "correct": 2,
    "explanation": "Calcitonin gắn vào thụ thể trên màng tế bào hủy cốt bào (osteoclast), làm bất hoạt và teo các riềm bàn chải của tế bào hủy xương trong vòng vài phút, ngăn cản giải phóng calci từ xương vào máu; đồng thời tăng bài xuất Ca2+ qua nước tiểu, dùng trị tăng calci máu cấp và bệnh Paget xương.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Kích thích ruột non tăng hấp thu calci phụ thuộc vitamin D\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích thích hủy cốt bào làm tăng tốc độ tiêu hủy mô xương\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Calcitonin gắn vào thụ thể trên màng tế bào hủy cốt bào (osteoclast), làm bất hoạt và teo các riềm bàn chải của tế bào hủy xương trong vòng vài phút, ngăn cản giải phóng calci từ xương vào máu; đồng thời tăng bài xuất Ca2+ qua nước tiểu, dùng trị tăng calci máu cấp và bệnh Paget xương.",
      "Phương án này không đúng vì \"Chuyển hóa calci tự do trong máu lắng đọng vào gan và lách\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Tiêm dưới da ngắt quãng một lần mỗi ngày",
      "Truyền tĩnh mạch liên tục bằng bơm tiêm điện",
      "Uống liều cao định kỳ một lần trong mỗi tuần",
      "Cấy que phóng thích chậm liên tục dưới da bụng"
    ],
    "correct": 0,
    "explanation": "Nồng độ PTH cao liên tục (như trong cường cận giáp) sẽ kích thích hủy xương. Tuy nhiên, khi tiêm dưới da ngắt quãng 1 lần mỗi ngày (pulsatile administration), nồng độ Teriparatide tăng đỉnh ngắn hạn sẽ kích thích ưu thế các tế bào tạo cốt bào (osteoblast) tổng hợp chất nền xương mới.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Nồng độ PTH cao liên tục (như trong cường cận giáp) sẽ kích thích hủy xương. Tuy nhiên, khi tiêm dưới da ngắt quãng 1 lần mỗi ngày (pulsatile administration), nồng độ Teriparatide tăng đỉnh ngắn hạn sẽ kích thích ưu thế các tế bào tạo cốt bào (osteoblast) tổng hợp chất nền xương mới.",
      "Phương án này không đúng vì \"Truyền tĩnh mạch liên tục bằng bơm tiêm điện\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Uống liều cao định kỳ một lần trong mỗi tuần\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Cấy que phóng thích chậm liên tục dưới da bụng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Ức chế enzym alpha-glucosidase tại diềm bàn chải ruột non",
      "Ức chế enzym pepsin dạ dày làm giảm nhũ tương hóa tinh bột",
      "Kích thích vi khuẩn kỵ khí đại tràng tăng chuyển hóa đường",
      "Tạo phức chelate không tan với phân tử đường đơn ở ruột"
    ],
    "correct": 0,
    "explanation": "Acarbose ức chế thuận nghịch các enzym alpha-glucosidase ở diềm bàn chải ruột non, làm chậm quá trình cắt chuỗi tinh bột, dextrin và đường đôi thành glucose, do đó làm chậm và dàn trải sự hấp thu glucose, làm giảm đỉnh đường huyết sau ăn mà không gây hạ đường huyết.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Acarbose ức chế thuận nghịch các enzym alpha-glucosidase ở diềm bàn chải ruột non, làm chậm quá trình cắt chuỗi tinh bột, dextrin và đường đôi thành glucose, do đó làm chậm và dàn trải sự hấp thu glucose, làm giảm đỉnh đường huyết sau ăn mà không gây hạ đường huyết.",
      "Phương án này không đúng vì \"Ức chế enzym pepsin dạ dày làm giảm nhũ tương hóa tinh bột\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích thích vi khuẩn kỵ khí đại tràng tăng chuyển hóa đường\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tạo phức chelate không tan với phân tử đường đơn ở ruột\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Táo bón kéo dài, chướng bụng và tắc liệt ruột",
      "Đầy hơi, chướng bụng, trung tiện và tiêu chảy",
      "Viêm loét niêm mạc thực quản và trào ngược acid",
      "Xuất huyết đường tiêu hóa trên và viêm trợt dạ dày"
    ],
    "correct": 1,
    "explanation": "Carbohydrate không được hấp thu ở ruột non sẽ trôi xuống ruột già, bị hệ vi khuẩn kỵ khí đại tràng lên men yếm khí sinh ra nhiều khí (H2, CO2, CH4) và acid béo chuỗi ngắn, gây chướng bụng đầy hơi, sôi bụng, trung tiện liên tục và tiêu chảy phân lỏng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Táo bón kéo dài, chướng bụng và tắc liệt ruột\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Carbohydrate không được hấp thu ở ruột non sẽ trôi xuống ruột già, bị hệ vi khuẩn kỵ khí đại tràng lên men yếm khí sinh ra nhiều khí (H2, CO2, CH4) và acid béo chuỗi ngắn, gây chướng bụng đầy hơi, sôi bụng, trung tiện liên tục và tiêu chảy phân lỏng.",
      "Phương án này không đúng vì \"Viêm loét niêm mạc thực quản và trào ngược acid\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Xuất huyết đường tiêu hóa trên và viêm trợt dạ dày\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
  },
  {
    "id": 378,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Một nhóm thuốc chống kết tập tiểu cầu đường tĩnh mạch có hiệu lực ức chế mạnh nhất nhờ khả năng phong bế trực tiếp đích liên kết cuối cùng của fibrinogen trên bề mặt tiểu cầu. Nhóm thuốc đó tác động lên thụ thể nào?",
    "options": [
      "Thụ thể ADP P2Y12 trên màng tiểu cầu",
      "Thụ thể collagen dưới lớp nội mô mạch",
      "Thụ thể glycoprotein IIb/IIIa bề mặt",
      "Thụ thể thromboxan A2 tại tế bào máu"
    ],
    "correct": 2,
    "explanation": "Thụ thể integrin GP IIb/IIIa là con đường chung cuối cùng của mọi quá trình kết tập tiểu cầu. Khi được hoạt hóa, GP IIb/IIIa gắn với Fibrinogen tạo cầu nối liên kết các tiểu cầu thành khối nút tiểu cầu. Thuốc chẹn GP IIb/IIIa khóa thụ thể này làm tê liệt hoàn toàn sự kết tập tiểu cầu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Thụ thể ADP P2Y12 trên màng tiểu cầu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thụ thể collagen dưới lớp nội mô mạch\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Thụ thể integrin GP IIb/IIIa là con đường chung cuối cùng của mọi quá trình kết tập tiểu cầu. Khi được hoạt hóa, GP IIb/IIIa gắn với Fibrinogen tạo cầu nối liên kết các tiểu cầu thành khối nút tiểu cầu. Thuốc chẹn GP IIb/IIIa khóa thụ thể này làm tê liệt hoàn toàn sự kết tập tiểu cầu.",
      "Phương án này không đúng vì \"Thụ thể thromboxan A2 tại tế bào máu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
  },
  {
    "id": 379,
    "subject": "duocly2",
    "chapter": "Thuốc/QT đông cầm máu",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong cấp cứu nhồi máu cơ tim cấp hoặc đột quỵ thiếu máu não cấp, hoạt chất tái tổ hợp mô (rtPA) giúp tái thông dòng máu bị tắc nghẽn thông qua xúc tác phản ứng sinh hóa nào?",
    "options": [
      "Hoạt hóa prothrombin thành thrombin hòa tan",
      "Chuyển tiền enzym plasminogen thành plasmin",
      "Bất hoạt trực tiếp yếu tố XIII ổn định fibrin",
      "Kích hoạt antithrombin III bất hoạt thrombin"
    ],
    "correct": 2,
    "explanation": "Alteplase là chất hoạt hóa plasminogen mô tái tổ hợp (rtPA), có ái lực rất cao với fibrin trong cục huyết khối. Tại bề mặt cục đông, Alteplase chuyển hóa plasminogen gắn fibrin thành plasmin; plasmin là enzym protease tiêu hủy mạng lưới fibrin làm tan cục huyết khối tái thông mạch máu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Hoạt hóa prothrombin thành thrombin hòa tan\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Chuyển tiền enzym plasminogen thành plasmin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Alteplase là chất hoạt hóa plasminogen mô tái tổ hợp (rtPA), có ái lực rất cao với fibrin trong cục huyết khối. Tại bề mặt cục đông, Alteplase chuyển hóa plasminogen gắn fibrin thành plasmin; plasmin là enzym protease tiêu hủy mạng lưới fibrin làm tan cục huyết khối tái thông mạch máu.",
      "Phương án này không đúng vì \"Kích hoạt antithrombin III bất hoạt thrombin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Vitamin D dạng ergocalciferol",
      "Vitamin A dạng retinol liều cao",
      "Vitamin B6 dạng pyridoxin",
      "Vitamin B12 dạng cobalamin"
    ],
    "correct": 1,
    "explanation": "Ngộ độc thừa Vitamin A (Hypervitaminosis A) làm tăng áp lực nội sọ lành tính (Pseudotumor cerebri) do tăng tiết và giảm hấp thu dịch não tủy, gây đau đầu dữ dội, nhìn đôi, phù gai thị giác (dễ nhầm với u não), rụng tóc, bong tróc da và đau nhức xương khớp.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Vitamin D dạng ergocalciferol\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Ngộ độc thừa Vitamin A (Hypervitaminosis A) làm tăng áp lực nội sọ lành tính (Pseudotumor cerebri) do tăng tiết và giảm hấp thu dịch não tủy, gây đau đầu dữ dội, nhìn đôi, phù gai thị giác (dễ nhầm với u não), rụng tóc, bong tróc da và đau nhức xương khớp.",
      "Phương án này không đúng vì \"Vitamin B6 dạng pyridoxin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Vitamin B12 dạng cobalamin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Vitamin B1 hay thiamin",
      "Vitamin B2",
      "Vitamin B6 hay pyridoxin",
      "Vitamin B12 hay cobalamin"
    ],
    "correct": 2,
    "explanation": "Mặc dù là vitamin tan trong nước, Pyridoxin (B6) dùng liều rất cao kéo dài (> 500mg/ngày trong nhiều tháng) gây độc trực tiếp cho các hạch rễ sau tủy sống (dorsal root ganglion), dẫn đến bệnh thần kinh cảm giác ngoại biên nặng (mất cảm giác rung, mất điều hòa cảm giác, dị cảm chi dưới).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Vitamin B1 hay thiamin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Vitamin B2\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Mặc dù là vitamin tan trong nước, Pyridoxin (B6) dùng liều rất cao kéo dài (> 500mg/ngày trong nhiều tháng) gây độc trực tiếp cho các hạch rễ sau tủy sống (dorsal root ganglion), dẫn đến bệnh thần kinh cảm giác ngoại biên nặng (mất cảm giác rung, mất điều hòa cảm giác, dị cảm chi dưới).",
      "Phương án này không đúng vì \"Vitamin B12 hay cobalamin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Phân lỏng nát, có mùi khắm tanh đặc trưng của máu thoái hóa",
      "Phân dính nhiều chất nhầy kèm máu tươi và đau quặn bụng",
      "Phân chuyển màu sẫm đen sau khi ngừng thuốc sắt một tuần",
      "Phân thường đóng khuôn, không mùi tanh và máu ẩn âm tính"
    ],
    "correct": 3,
    "explanation": "Sắt không hấp thu phản ứng với H2S trong lòng ruột tạo kết tủa Sắt sulfid (FeS) màu đen. Đây là hiện tượng sinh lý hoàn toàn vô hại, phân đen nhưng không lỏng nát, không có mùi thối khẳm tanh của máu thoái hóa và xét nghiệm máu ẩn trong phân (FOBT) âm tính.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Phân lỏng nát, có mùi khắm tanh đặc trưng của máu thoái hóa\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Phân dính nhiều chất nhầy kèm máu tươi và đau quặn bụng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Phân chuyển màu sẫm đen sau khi ngừng thuốc sắt một tuần\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Sắt không hấp thu phản ứng với H2S trong lòng ruột tạo kết tủa Sắt sulfid (FeS) màu đen. Đây là hiện tượng sinh lý hoàn toàn vô hại, phân đen nhưng không lỏng nát, không có mùi thối khẳm tanh của máu thoái hóa và xét nghiệm máu ẩn trong phân (FOBT) âm tính."
    ]
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
      "Ức chế enzym serine protease NS3/4A của virus",
      "Ức chế phức hợp phosphoprotein NS5A của virus",
      "Chẹn thụ thể xâm nhập CD81 trên màng tế bào gan",
      "Ức chế enzym RNA polymerase NS5B của virus"
    ],
    "correct": 3,
    "explanation": "Sofosbuvir là một tiền chất nucleotide (dẫn xuất uridin), được chuyển hóa trong tế bào gan thành dạng có hoạt tính triphosphate (GS-461203). Dạng này cạnh tranh với UTP, gắn vào chuỗi RNA đang tổng hợp bởi enzym NS5B RNA polymerase của HCV gây kết thúc sớm chuỗi sao chép, chữa khỏi > 95% viêm gan C.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Ức chế enzym serine protease NS3/4A của virus\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ức chế phức hợp phosphoprotein NS5A của virus\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Chẹn thụ thể xâm nhập CD81 trên màng tế bào gan\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Sofosbuvir là một tiền chất nucleotide (dẫn xuất uridin), được chuyển hóa trong tế bào gan thành dạng có hoạt tính triphosphate (GS-461203). Dạng này cạnh tranh với UTP, gắn vào chuỗi RNA đang tổng hợp bởi enzym NS5B RNA polymerase của HCV gây kết thúc sớm chuỗi sao chép, chữa khỏi > 95% viêm gan C."
    ]
  },
  {
    "id": 384,
    "subject": "duocly2",
    "chapter": "Thuốc chống ung thư",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Một liệu pháp nhắm trúng đích phân tử đường uống đã tạo nên cuộc cách mạng trong điều trị bệnh bạch cầu mạn dòng tủy mang nhiễm sắc thể Philadelphia t(9;22). Thuốc phát huy hiệu lực thông qua ức chế chọn lọc hoạt tính tyrosine kinase của sản phẩm gen nào?",
    "options": [
      "Protein dung hợp PML-RARA",
      "Protein dung hợp BCR-ABL",
      "Thụ thể tyrosine kinase FLT3",
      "Protein đột biến JAK2 V617F"
    ],
    "correct": 0,
    "explanation": "Chuyển đoạn nhiễm sắc thể Philadelphia t(9;22) tạo ra gen dung hợp BCR-ABL mã hóa protein tyrosine kinase hoạt động liên tục kích thích tế bào tủy tăng sinh mất kiểm soát. Imatinib chẹn chọn lọc túi gắn ATP của enzym BCR-ABL tyrosine kinase, cắt đứt tín hiệu sinh ung thư, đưa > 90% bệnh nhân CML về lui bệnh hoàn toàn.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Chuyển đoạn nhiễm sắc thể Philadelphia t(9;22) tạo ra gen dung hợp BCR-ABL mã hóa protein tyrosine kinase hoạt động liên tục kích thích tế bào tủy tăng sinh mất kiểm soát. Imatinib chẹn chọn lọc túi gắn ATP của enzym BCR-ABL tyrosine kinase, cắt đứt tín hiệu sinh ung thư, đưa > 90% bệnh nhân CML về lui bệnh hoàn toàn.",
      "Phương án này không đúng vì \"Protein dung hợp BCR-ABL\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thụ thể tyrosine kinase FLT3\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Protein đột biến JAK2 V617F\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Ngộ độc asen, thủy ngân và muối vàng",
      "Ngộ độc chì nặng kèm tổn thương não",
      "Ngộ độc sắt cấp tính và mạn tính nặng",
      "Ngộ độc nhôm phosphat và magnesi sulfat"
    ],
    "correct": 0,
    "explanation": "Dimercaprol (BAL) chứa hai nhóm thiol (-SH) cạnh nhau, cạnh tranh với các enzym của tế bào để liên kết với các kim loại nặng có độc tính ái lực cao với nhóm -SH như Asen (thạch tín), Thủy ngân vô cơ và muối Vàng, tạo phức hợp vòng 5 cạnh bền vững đào thải qua nước tiểu và đường mật.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Dimercaprol (BAL) chứa hai nhóm thiol (-SH) cạnh nhau, cạnh tranh với các enzym của tế bào để liên kết với các kim loại nặng có độc tính ái lực cao với nhóm -SH như Asen (thạch tín), Thủy ngân vô cơ và muối Vàng, tạo phức hợp vòng 5 cạnh bền vững đào thải qua nước tiểu và đường mật.",
      "Phương án này không đúng vì \"Ngộ độc chì nặng kèm tổn thương não\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ngộ độc sắt cấp tính và mạn tính nặng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ngộ độc nhôm phosphat và magnesi sulfat\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Ranolazine\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ivabradine\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Trimetazidine\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Nicorandil là phân tử lai (hybrid) độc đáo: mang nhóm nitrat (-ONO2) giúp giải phóng NO kích thích cGMP gây giãn tĩnh mạch, đồng thời có cấu trúc mở kênh K_ATP gây giãn tiểu động mạch vành."
    ]
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
      "Bị phá hủy bởi acid dịch vị dạ dày có độ pH rất thấp",
      "Bị chuyển hóa bước đầu qua gan rất mạnh bởi enzym reductase",
      "Tạo phức chelate không tan với ion khoáng hóa trị hai ở ruột",
      "Bị hệ thống bơm P-glycoprotein tại niêm mạc ruột bài xuất ngược"
    ],
    "correct": 1,
    "explanation": "ISDN bị chuyển hóa bước đầu qua gan rất lớn (First-pass metabolism) bởi enzym glutathione-organic nitrate reductase ở gan, chỉ khoảng 20-25% liều uống vào được tuần hoàn chung. Ngược lại, ISMN không bị gan chuyển hóa bước đầu nên sinh khả dụng đạt 100%.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Bị phá hủy bởi acid dịch vị dạ dày có độ pH rất thấp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "ISDN bị chuyển hóa bước đầu qua gan rất lớn (First-pass metabolism) bởi enzym glutathione-organic nitrate reductase ở gan, chỉ khoảng 20-25% liều uống vào được tuần hoàn chung. Ngược lại, ISMN không bị gan chuyển hóa bước đầu nên sinh khả dụng đạt 100%.",
      "Phương án này không đúng vì \"Tạo phức chelate không tan với ion khoáng hóa trị hai ở ruột\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Bị hệ thống bơm P-glycoprotein tại niêm mạc ruột bài xuất ngược\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Ức chế trực tiếp dòng calci vào tế bào cơ tim tâm thất",
      "Chẹn thụ thể alpha-1 adrenergic tại các động mạch lớn ngoại vi",
      "Ở liều cao gây giãn thêm các tiểu động mạch kháng lực ngoại vi",
      "Kích thích trung tâm ức chế vận mạch tại hành não gây giãn mạch"
    ],
    "correct": 2,
    "explanation": "Ở liều thấp điều trị, Nitroglycerin chọn lọc giãn tĩnh mạch (giảm tiền gánh). Khi tăng liều cao tiêm truyền tĩnh mạch, thuốc mất dần tính chọn lọc và bắt đầu gây giãn trực tiếp các tiểu động mạch kháng lực ngoại vi, làm hạ sức cản ngoại vi (giảm hậu gánh) và hạ huyết áp động mạch.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Ức chế trực tiếp dòng calci vào tế bào cơ tim tâm thất\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Chẹn thụ thể alpha-1 adrenergic tại các động mạch lớn ngoại vi\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Ở liều thấp điều trị, Nitroglycerin chọn lọc giãn tĩnh mạch (giảm tiền gánh). Khi tăng liều cao tiêm truyền tĩnh mạch, thuốc mất dần tính chọn lọc và bắt đầu gây giãn trực tiếp các tiểu động mạch kháng lực ngoại vi, làm hạ sức cản ngoại vi (giảm hậu gánh) và hạ huyết áp động mạch.",
      "Phương án này không đúng vì \"Kích thích trung tâm ức chế vận mạch tại hành não gây giãn mạch\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Độc tính thần kinh trung ương (dị cảm, chóng mặt, co giật)",
      "Độc tính đường hô hấp gây co thắt phế quản và khó thở cấp",
      "Suy thận cấp thể hoại tử ống thận kèm xuất hiện protein niệu",
      "Hoại tử tế bào gan cấp tính kèm vàng da và ứ mật nặng"
    ],
    "correct": 0,
    "explanation": "Lidocain qua hàng rào máu não rất nhanh. Triệu chứng độc tính sớm nhất của Lidocain là độc tính thần kinh trung ương: tê bì quanh miệng, dị cảm lưỡi, chóng mặt, ù tai, nói ngọng, co giật giật cơ và cuối cùng là ức chế hô hấp, hôn mê.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Lidocain qua hàng rào máu não rất nhanh. Triệu chứng độc tính sớm nhất của Lidocain là độc tính thần kinh trung ương: tê bì quanh miệng, dị cảm lưỡi, chóng mặt, ù tai, nói ngọng, co giật giật cơ và cuối cùng là ức chế hô hấp, hôn mê.",
      "Phương án này không đúng vì \"Độc tính đường hô hấp gây co thắt phế quản và khó thở cấp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Suy thận cấp thể hoại tử ống thận kèm xuất hiện protein niệu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Hoại tử tế bào gan cấp tính kèm vàng da và ứ mật nặng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Chẹn kênh calci typ T ở màng tế bào tâm thất kéo dài trơ thất",
      "Chẹn dòng Kali chọn lọc ở nhĩ và chẹn kênh Natri khi nhịp nhanh",
      "Ức chế thụ thể adenosin A2A tại tiểu động mạch vành giảm tiêu thụ O2",
      "Kích hoạt bơm Na+/K+-ATPase làm tăng phân cực màng nhĩ thất"
    ],
    "correct": 1,
    "explanation": "Vernakalant tác động đa kênh nhưng có tính chọn lọc rất cao trên tâm nhĩ: chẹn kênh Kali IKur (chỉ có ở tâm nhĩ, không có ở tâm thất) và kênh IK,ACh, làm kéo dài thời kỳ trơ tâm nhĩ mà ít kéo dài thời kỳ trơ tâm thất, do đó giảm thiểu tối đa nguy cơ xoắn đỉnh thất.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Chẹn kênh calci typ T ở màng tế bào tâm thất kéo dài trơ thất\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Vernakalant tác động đa kênh nhưng có tính chọn lọc rất cao trên tâm nhĩ: chẹn kênh Kali IKur (chỉ có ở tâm nhĩ, không có ở tâm thất) và kênh IK,ACh, làm kéo dài thời kỳ trơ tâm nhĩ mà ít kéo dài thời kỳ trơ tâm thất, do đó giảm thiểu tối đa nguy cơ xoắn đỉnh thất.",
      "Phương án này không đúng vì \"Ức chế thụ thể adenosin A2A tại tiểu động mạch vành giảm tiêu thụ O2\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích hoạt bơm Na+/K+-ATPase làm tăng phân cực màng nhĩ thất\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Đo lưu lượng đỉnh hô hấp và định lượng acid uric huyết thanh",
      "Chụp cộng hưởng từ sọ não và định lượng calci trong máu",
      "Ghi điện tâm đồ, xét nghiệm chức năng gan và tuyến giáp",
      "Nội soi dạ dày tá tràng và định lượng enzym amylase máu"
    ],
    "correct": 2,
    "explanation": "Theo khuyến cáo tim mạch quốc tế, bệnh nhân dùng Amiodaron kéo dài bắt buộc phải theo dõi định kỳ: ECG (kiểm tra khoảng QT, nhịp chậm), men gan AST/ALT (độc tính gan) và chức năng tuyến giáp TSH, FT4 mỗi 6 tháng; kèm chụp X-quang phổi mỗi năm.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Đo lưu lượng đỉnh hô hấp và định lượng acid uric huyết thanh\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Chụp cộng hưởng từ sọ não và định lượng calci trong máu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Theo khuyến cáo tim mạch quốc tế, bệnh nhân dùng Amiodaron kéo dài bắt buộc phải theo dõi định kỳ: ECG (kiểm tra khoảng QT, nhịp chậm), men gan AST/ALT (độc tính gan) và chức năng tuyến giáp TSH, FT4 mỗi 6 tháng; kèm chụp X-quang phổi mỗi năm.",
      "Phương án này không đúng vì \"Nội soi dạ dày tá tràng và định lượng enzym amylase máu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Hạ Kali máu và hạ Magnesi máu",
      "Tăng Kali máu và tăng Magnesi máu",
      "Hạ Natri máu và tăng Calci máu",
      "Tăng Natri máu và tăng Kali máu"
    ],
    "correct": 0,
    "explanation": "Thiazid và Lợi tiểu quai làm tăng lượng Na+ và dịch chảy đến ống góp. Để tái hấp thu Na+, tế bào biểu mô ống góp tăng bài tiết K+ và H+ vào nước tiểu $\\rightarrow$ gây hạ K+ máu và nhiễm kiềm chuyển hóa; đồng thời thuốc cũng làm tăng đào thải Mg2+ qua nước tiểu gây hạ Mg2+ máu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Thiazid và Lợi tiểu quai làm tăng lượng Na+ và dịch chảy đến ống góp. Để tái hấp thu Na+, tế bào biểu mô ống góp tăng bài tiết K+ và H+ vào nước tiểu $\\rightarrow$ gây hạ K+ máu và nhiễm kiềm chuyển hóa; đồng thời thuốc cũng làm tăng đào thải Mg2+ qua nước tiểu gây hạ Mg2+ máu.",
      "Phương án này không đúng vì \"Tăng Kali máu và tăng Magnesi máu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Hạ Natri máu và tăng Calci máu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tăng Natri máu và tăng Kali máu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Ngừng thuốc đột ngột và bù dịch tích cực bằng nước khoáng",
      "Tăng lượng muối natri trong khẩu phần ăn lên gấp đôi",
      "Ăn giảm muối, chia nhỏ liều trong ngày hoặc phối hợp Thiazid",
      "Chuyển sang dùng thuốc gián đoạn một lần mỗi tuần"
    ],
    "correct": 2,
    "explanation": "Khi nồng độ Furosemid trong máu giảm xuống, cơ thể kích hoạt hệ thần kinh giao cảm và hệ RAA gây tái hấp thu Na+ ồ ạt sau đó (hiệu ứng post-diuretic retention). Cách khắc phục là hạn chế lượng natri nhập vào (ăn nhạt < 2g Na/ngày) và phối hợp thêm thuốc lợi tiểu tác dụng ở vị trí khác (như Thiazid).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Ngừng thuốc đột ngột và bù dịch tích cực bằng nước khoáng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tăng lượng muối natri trong khẩu phần ăn lên gấp đôi\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Khi nồng độ Furosemid trong máu giảm xuống, cơ thể kích hoạt hệ thần kinh giao cảm và hệ RAA gây tái hấp thu Na+ ồ ạt sau đó (hiệu ứng post-diuretic retention). Cách khắc phục là hạn chế lượng natri nhập vào (ăn nhạt < 2g Na/ngày) và phối hợp thêm thuốc lợi tiểu tác dụng ở vị trí khác (như Thiazid).",
      "Phương án này không đúng vì \"Chuyển sang dùng thuốc gián đoạn một lần mỗi tuần\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Ranitidin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Famotidin có vòng thiazol trong cấu trúc, là thuốc ức chế thụ thể H2 mạnh nhất (mạnh gấp 20-50 lần Cimetidin và 7-10 lần Ranitidin), không có ái lực với enzym cytochrom P450 nên không gây tương tác thuốc qua chuyển hóa gan và không kháng androgen.",
      "Phương án này không đúng vì \"Nizatidin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Roxatidin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Kích thích sự nảy mầm của các nha bào kỵ khí",
      "Mất hàng rào acid dịch vị bảo vệ tự nhiên của dạ dày",
      "Tăng tính thấm mao mạch mạc treo với độc tố vi khuẩn",
      "Phá hủy lớp vi nhung mao bề mặt biểu mô ruột"
    ],
    "correct": 1,
    "explanation": "Môi trường acid dịch vị dạ dày bình thường (pH 1.5 - 2) là hàng rào tiêu diệt hầu hết vi khuẩn và nha bào xâm nhập qua đường tiêu hóa. PPI làm tăng pH dạ dày triệt tiêu hàng rào này, tạo điều kiện cho nha bào Clostridioides difficile sống sót và bùng phát ở đại tràng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Kích thích sự nảy mầm của các nha bào kỵ khí\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Môi trường acid dịch vị dạ dày bình thường (pH 1.5 - 2) là hàng rào tiêu diệt hầu hết vi khuẩn và nha bào xâm nhập qua đường tiêu hóa. PPI làm tăng pH dạ dày triệt tiêu hàng rào này, tạo điều kiện cho nha bào Clostridioides difficile sống sót và bùng phát ở đại tràng.",
      "Phương án này không đúng vì \"Tăng tính thấm mao mạch mạc treo với độc tố vi khuẩn\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Phá hủy lớp vi nhung mao bề mặt biểu mô ruột\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Bệnh xơ nang tụy phế quản di truyền",
      "Bệnh hen phế quản dị ứng ngoại sinh",
      "Hội chứng ngưng thở tắc nghẽn khi ngủ",
      "Bệnh phổi tắc nghẽn mạn tính thể khí phế thũng"
    ],
    "correct": 0,
    "explanation": "Dornase alfa là enzym deoxyribonuclease tái tổ hợp của người, có khả năng cắt thủy phân các chuỗi DNA ngoại bào do bạch cầu thoái hóa giải phóng trong chất nhầy mủ đặc quánh của bệnh nhân xơ nang (Cystic Fibrosis), làm loãng đờm rõ rệt.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Dornase alfa là enzym deoxyribonuclease tái tổ hợp của người, có khả năng cắt thủy phân các chuỗi DNA ngoại bào do bạch cầu thoái hóa giải phóng trong chất nhầy mủ đặc quánh của bệnh nhân xơ nang (Cystic Fibrosis), làm loãng đờm rõ rệt.",
      "Phương án này không đúng vì \"Bệnh hen phế quản dị ứng ngoại sinh\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Hội chứng ngưng thở tắc nghẽn khi ngủ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Bệnh phổi tắc nghẽn mạn tính thể khí phế thũng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Thuốc đối kháng thụ thể cysteinyl leukotriene",
      "Thuốc chủ vận thụ thể beta-2 adrenergic tác dụng ngắn",
      "Thuốc kháng cholinergic dẫn chất amoni bậc bốn dạng hít",
      "Thuốc giảm ho trung ương không gây nghiện morphinan"
    ],
    "correct": 0,
    "explanation": "Hội chứng Churg-Strauss (viêm mạch tăng bạch cầu ái toan hệ thống, bệnh thần kinh ngoại biên, tổn thương tim mạch) thỉnh thoảng xuất hiện ở bệnh nhân hen điều trị bằng thuốc kháng leukotriene, thường trùng với giai đoạn bắt đầu giảm liều corticosteroid toàn thân.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Hội chứng Churg-Strauss (viêm mạch tăng bạch cầu ái toan hệ thống, bệnh thần kinh ngoại biên, tổn thương tim mạch) thỉnh thoảng xuất hiện ở bệnh nhân hen điều trị bằng thuốc kháng leukotriene, thường trùng với giai đoạn bắt đầu giảm liều corticosteroid toàn thân.",
      "Phương án này không đúng vì \"Thuốc chủ vận thụ thể beta-2 adrenergic tác dụng ngắn\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thuốc kháng cholinergic dẫn chất amoni bậc bốn dạng hít\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thuốc giảm ho trung ương không gây nghiện morphinan\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Giãn tiểu động mạch cảnh và giảm sức cản ngoại vi",
      "Kích thích tuyến tùng gia tăng tổng hợp melatonin",
      "Chẹn thụ thể H1 và muscarinic ở thần kinh trung ương",
      "Ức chế trung tâm điều nhiệt ở vùng dưới đồi thể tạng"
    ],
    "correct": 2,
    "explanation": "Diphenhydramin có tác dụng an thần và gây ngủ rất mạnh, làm rút ngắn thời gian tiềm tàng vào giấc ngủ, do đó thường được bào chế trong các thuốc ngủ không kê đơn (như Nytol, Sominex) hoặc kết hợp hạ sốt giảm đau ban đêm (Panadol ban đêm).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Giãn tiểu động mạch cảnh và giảm sức cản ngoại vi\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích thích tuyến tùng gia tăng tổng hợp melatonin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Diphenhydramin có tác dụng an thần và gây ngủ rất mạnh, làm rút ngắn thời gian tiềm tàng vào giấc ngủ, do đó thường được bào chế trong các thuốc ngủ không kê đơn (như Nytol, Sominex) hoặc kết hợp hạ sốt giảm đau ban đêm (Panadol ban đêm).",
      "Phương án này không đúng vì \"Ức chế trung tâm điều nhiệt ở vùng dưới đồi thể tạng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Kích thích thần kinh trung ương gây bồn chồn, co giật, sốt cao",
      "Hạ thân nhiệt sâu kèm theo nhịp tim chậm xoang nặng",
      "Viêm ruột xuất huyết cấp tính kèm tiêu chảy mất nước",
      "Không có triệu chứng do hệ enzym gan phân hủy thuốc nhanh"
    ],
    "correct": 0,
    "explanation": "Ở trẻ em, ngộ độc kháng H1 thế hệ 1 thường gây kích thích thần kinh nghịch lý do tác dụng kháng cholinergic trung ương vượt trội: kích động, co giật giật cơ, ảo giác, sốt cao (do giảm tiết mồ hôi), giãn đồng tử, sau đó mới chuyển sang ức chế hô hấp và hôn mê.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Ở trẻ em, ngộ độc kháng H1 thế hệ 1 thường gây kích thích thần kinh nghịch lý do tác dụng kháng cholinergic trung ương vượt trội: kích động, co giật giật cơ, ảo giác, sốt cao (do giảm tiết mồ hôi), giãn đồng tử, sau đó mới chuyển sang ức chế hô hấp và hôn mê.",
      "Phương án này không đúng vì \"Hạ thân nhiệt sâu kèm theo nhịp tim chậm xoang nặng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Viêm ruột xuất huyết cấp tính kèm tiêu chảy mất nước\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Không có triệu chứng do hệ enzym gan phân hủy thuốc nhanh\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
  },
  {
    "id": 400,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Khi điều trị áp xe gan hoặc lỵ amip nặng bằng Metronidazol liều cao kéo dài, độc tính thần kinh nghiêm trọng cần ngừng thuốc ngay là gì?",
    "options": [
      "Bệnh lý thần kinh cảm giác ngoại vi và cơn co giật",
      "Hội chứng ngoại tháp với cứng đờ và run kiểu Parkinson",
      "Viêm thị thần kinh hậu nhãn cầu gây mất thị lực cấp",
      "Hôn mê do tăng áp lực nội sọ và phù gai thị nặng"
    ],
    "correct": 0,
    "explanation": "Metronidazol thân dầu qua được hàng rào máu não rất tốt. Khi dùng liều cao kéo dài (> 2-4 tuần như trong áp xe gan hoặc viêm tủy xương), thuốc tích lũy gây độc thần kinh: dị cảm đầu chi, mất điều hòa vận động tiểu não, co giật và bệnh não hồi phục khi ngừng thuốc.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Metronidazol thân dầu qua được hàng rào máu não rất tốt. Khi dùng liều cao kéo dài (> 2-4 tuần như trong áp xe gan hoặc viêm tủy xương), thuốc tích lũy gây độc thần kinh: dị cảm đầu chi, mất điều hòa vận động tiểu não, co giật và bệnh não hồi phục khi ngừng thuốc.",
      "Phương án này không đúng vì \"Hội chứng ngoại tháp với cứng đờ và run kiểu Parkinson\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Viêm thị thần kinh hậu nhãn cầu gây mất thị lực cấp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Hôn mê do tăng áp lực nội sọ và phù gai thị nặng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
  },
  {
    "id": 401,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Một bệnh nhân trở về từ vùng hồ nước ngọt nhiệt đới xuất hiện tiểu máu vi thể và chẩn đoán xác định nhiễm sán máng (Schistosoma). Thuốc điều trị đặc hiệu làm tăng tính thấm ion calci gây liệt cứng và bộc lộ kháng nguyên bề mặt của sán là:",
    "options": [
      "Oxamniquin",
      "Niclosamid",
      "Praziquantel",
      "Ivermectin"
    ],
    "correct": 2,
    "explanation": "Praziquantel là thuốc điều trị đặc hiệu số 1 cho tất cả các loài sán máng (Schistosoma haematobium, S. mansoni, S. japonicum) với tỷ lệ khỏi bệnh rất cao (> 85-90%) chỉ sau 1 ngày điều trị chia liều nhỏ.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Oxamniquin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Niclosamid\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Praziquantel là thuốc điều trị đặc hiệu số 1 cho tất cả các loài sán máng (Schistosoma haematobium, S. mansoni, S. japonicum) với tỷ lệ khỏi bệnh rất cao (> 85-90%) chỉ sau 1 ngày điều trị chia liều nhỏ.",
      "Phương án này không đúng vì \"Ivermectin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
  },
  {
    "id": 402,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Một bệnh nhân tim mạch có nồng độ LDL-C tăng rất cao được chỉ định phác đồ phối hợp hai thuốc hạ lipid theo cơ chế 'khóa hai đầu' chuyển hóa cholesterol. Nguyên lý dược lý học của sự kết hợp này là gì?",
    "options": [
      "Giảm tổng hợp acid mật ở gan kết hợp tăng bài xuất qua ruột",
      "Giảm tổng hợp cholesterol ở gan kết hợp giảm hấp thu ở ruột",
      "Tăng thoái giáng LDL trong máu kết hợp ức chế lipase tại tụy",
      "Kích hoạt enzym LCAT huyết tương kết hợp ức chế thụ thể PCSK9"
    ],
    "correct": 0,
    "explanation": "Đây là sự phối hợp bổ trợ hoàn hảo: ức chế tổng hợp cholesterol tại gan bằng Statin thường kích hoạt phản xạ ruột tăng hấp thu cholesterol từ thức ăn bù trừ. Ezetimibe chặn đứng cơ chế bù trừ này tại ruột, tạo hiệu quả hạ LDL-C cộng gộp thêm 15-25% mà không cần tăng liều Statin.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Đây là sự phối hợp bổ trợ hoàn hảo: ức chế tổng hợp cholesterol tại gan bằng Statin thường kích hoạt phản xạ ruột tăng hấp thu cholesterol từ thức ăn bù trừ. Ezetimibe chặn đứng cơ chế bù trừ này tại ruột, tạo hiệu quả hạ LDL-C cộng gộp thêm 15-25% mà không cần tăng liều Statin.",
      "Phương án này không đúng vì \"Giảm tổng hợp cholesterol ở gan kết hợp giảm hấp thu ở ruột\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tăng thoái giáng LDL trong máu kết hợp ức chế lipase tại tụy\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích hoạt enzym LCAT huyết tương kết hợp ức chế thụ thể PCSK9\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
  },
  {
    "id": 403,
    "subject": "duocly2",
    "chapter": "Thuốc hạ lipid máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Một liệu pháp sinh học tiên tiến ứng dụng công nghệ can thiệp RNA (siRNA) tổng hợp tiêm dưới da định kỳ mỗi 6 tháng nhằm ức chế dịch mã tổng hợp protein PCSK9 tại tế bào gan là:",
    "options": [
      "Alirocumab",
      "Evolocumab",
      "Inclisiran",
      "Bococizumab"
    ],
    "correct": 2,
    "explanation": "Inclisiran là một siRNA sợi kép gắn chuỗi GalNAc hướng đích tế bào gan. Trong tế bào gan, Inclisiran gắn vào phức hợp RISC phân cắt đặc hiệu sợi mRNA mã hóa PCSK9, ức chế dịch mã tạo protein PCSK9 kéo dài, chỉ cần tiêm dưới da 6 tháng một lần.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Alirocumab\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Evolocumab\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Inclisiran là một siRNA sợi kép gắn chuỗi GalNAc hướng đích tế bào gan. Trong tế bào gan, Inclisiran gắn vào phức hợp RISC phân cắt đặc hiệu sợi mRNA mã hóa PCSK9, ức chế dịch mã tạo protein PCSK9 kéo dài, chỉ cần tiêm dưới da 6 tháng một lần.",
      "Phương án này không đúng vì \"Bococizumab\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Nhiễm trùng do ký sinh trùng Plasmodium vivax",
      "Nhiễm trùng do ký sinh trùng Plasmodium ovale",
      "Nhiễm ký sinh trùng Plasmodium falciparum",
      "Nhiễm trùng do ký sinh trùng Plasmodium cynomolgi"
    ],
    "correct": 2,
    "explanation": "Plasmodium falciparum và P. malariae sau khi xâm nhập tế bào gan chỉ phân chia thành các thể phân liệt rồi vỡ vào máu, hoàn toàn không hình thành thể ngủ (Hypnozoite) trong gan. Do đó điều trị khỏi đợt sốt rét thể hồng cầu là khỏi bệnh triệt căn, không có tái phát xa (không cần dùng Primaquin 14 ngày).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Nhiễm trùng do ký sinh trùng Plasmodium vivax\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Nhiễm trùng do ký sinh trùng Plasmodium ovale\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Plasmodium falciparum và P. malariae sau khi xâm nhập tế bào gan chỉ phân chia thành các thể phân liệt rồi vỡ vào máu, hoàn toàn không hình thành thể ngủ (Hypnozoite) trong gan. Do đó điều trị khỏi đợt sốt rét thể hồng cầu là khỏi bệnh triệt căn, không có tái phát xa (không cần dùng Primaquin 14 ngày).",
      "Phương án này không đúng vì \"Nhiễm trùng do ký sinh trùng Plasmodium cynomolgi\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Gây tụt huyết áp kịch phát, loạn nhịp thất và ngừng tim đột ngột",
      "Làm vỡ hồng cầu hàng loạt gây tắc nghẽn động mạch phổi",
      "Kích thích co cứng cơ hàm và co thắt thanh quản kịch phát",
      "Hoại tử biểu mô ống thận gây suy thận cấp vô niệu"
    ],
    "correct": 0,
    "explanation": "Quinin có tác dụng ức chế trực tiếp cơ tim và giãn mạch ngoại vi rất mạnh. Tiêm tĩnh mạch trực tiếp quá nhanh sẽ làm nồng độ thuốc trong tim tăng vọt tức thì, gây tụt huyết áp nghiêm trọng không hồi phục, ngừng tim thì tâm thu hoặc khởi phát rung thất tử vong.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Quinin có tác dụng ức chế trực tiếp cơ tim và giãn mạch ngoại vi rất mạnh. Tiêm tĩnh mạch trực tiếp quá nhanh sẽ làm nồng độ thuốc trong tim tăng vọt tức thì, gây tụt huyết áp nghiêm trọng không hồi phục, ngừng tim thì tâm thu hoặc khởi phát rung thất tử vong.",
      "Phương án này không đúng vì \"Làm vỡ hồng cầu hàng loạt gây tắc nghẽn động mạch phổi\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích thích co cứng cơ hàm và co thắt thanh quản kịch phát\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Hoại tử biểu mô ống thận gây suy thận cấp vô niệu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Tương tác đối kháng cạnh tranh trên thụ thể alpha-1 ngoại vi",
      "Tương tác hiệp đồng tăng mức làm tăng vọt cGMP gây tụt áp",
      "Tương tác cản trở hấp thu do thay đổi pH và tốc độ rỗng dạ dày",
      "Tương tác tạo phức chelate làm bất hoạt enzym chuyển hóa"
    ],
    "correct": 1,
    "explanation": "Nitrat kích thích guanylyl cyclase tổng hợp cGMP, trong khi Sildenafil ức chế enzym PDE-5 thoái giáng cGMP. Hai thuốc tác động vào hai mắt xích liên tiếp làm cGMP tăng vọt theo cấp số nhân, gây giãn mạch toàn thân dữ dội, tụt huyết áp kịch phát không đáp ứng hồi sức.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Tương tác đối kháng cạnh tranh trên thụ thể alpha-1 ngoại vi\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Nitrat kích thích guanylyl cyclase tổng hợp cGMP, trong khi Sildenafil ức chế enzym PDE-5 thoái giáng cGMP. Hai thuốc tác động vào hai mắt xích liên tiếp làm cGMP tăng vọt theo cấp số nhân, gây giãn mạch toàn thân dữ dội, tụt huyết áp kịch phát không đáp ứng hồi sức.",
      "Phương án này không đúng vì \"Tương tác cản trở hấp thu do thay đổi pH và tốc độ rỗng dạ dày\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tương tác tạo phức chelate làm bất hoạt enzym chuyển hóa\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Cơn bão giao cảm kịch phát",
      "Hội chứng suy tủy ác tính",
      "Hội chứng serotonin cấp tính",
      "Hiệu ứng phô mai điển hình"
    ],
    "correct": 3,
    "explanation": "Tyramine trong phô mai, rượu vang bình thường bị enzym MAO-A ở ruột và gan phân hủy hoàn toàn. Khi dùng thuốc MAOI, enzym bị phong bế khiến Tyramine hấp thu nguyên vẹn vào máu, vào tận cùng thần kinh giao cảm đẩy Noradrenalin dự trữ ra ngoài ồ ạt, gây co mạch dữ dội và cơn tăng huyết áp ác tính.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Cơn bão giao cảm kịch phát\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Hội chứng suy tủy ác tính\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Hội chứng serotonin cấp tính\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Tyramine trong phô mai, rượu vang bình thường bị enzym MAO-A ở ruột và gan phân hủy hoàn toàn. Khi dùng thuốc MAOI, enzym bị phong bế khiến Tyramine hấp thu nguyên vẹn vào máu, vào tận cùng thần kinh giao cảm đẩy Noradrenalin dự trữ ra ngoài ồ ạt, gây co mạch dữ dội và cơn tăng huyết áp ác tính."
    ]
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
      "Ức chế phân giải glycogen dự trữ làm sợi cơ thiếu năng lượng",
      "Kích thích thoái hóa protein cơ huy động acid amin tân tạo đường",
      "Gây cạn kiệt ion natri và kali trong bào tương sợi cơ vân",
      "Phá hủy liên kết sợi actomyosin qua ức chế creatin kinase"
    ],
    "correct": 1,
    "explanation": "Glucocorticoid có tác dụng dị hóa protein mạnh: kích thích phân giải protein tại cơ vân thành các acid amin tự do, vận chuyển về gan để tân tạo glucose. Quá trình này làm khối lượng cơ bị teo nhẽo, yếu cơ gốc chi và làm mỏng tổ chức collagen dưới da tạo các vết rạn da màu tím.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Ức chế phân giải glycogen dự trữ làm sợi cơ thiếu năng lượng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Glucocorticoid có tác dụng dị hóa protein mạnh: kích thích phân giải protein tại cơ vân thành các acid amin tự do, vận chuyển về gan để tân tạo glucose. Quá trình này làm khối lượng cơ bị teo nhẽo, yếu cơ gốc chi và làm mỏng tổ chức collagen dưới da tạo các vết rạn da màu tím.",
      "Phương án này không đúng vì \"Gây cạn kiệt ion natri và kali trong bào tương sợi cơ vân\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Phá hủy liên kết sợi actomyosin qua ức chế creatin kinase\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Hoạt tính mineralocorticoid giữ muối nước rất mạnh",
      "Hoạt tính glucocorticoid kháng viêm chọn lọc tại não",
      "Kích thích các tế bào đảo tụy tăng cường tiết insulin",
      "Tăng tổng hợp hormon aldosteron nội sinh ở vỏ thượng thận"
    ],
    "correct": 0,
    "explanation": "Fludrocortison có tác dụng giữ muối nước (mineralocorticoid) cực mạnh, gấp 125-250 lần hydrocortison, trong khi tác dụng kháng viêm chỉ gấp 10 lần. Thuốc được dùng bổ sung tác dụng giữ muối nước thay thế aldosteron trong bệnh suy thượng thận nguyên phát Addison.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Fludrocortison có tác dụng giữ muối nước (mineralocorticoid) cực mạnh, gấp 125-250 lần hydrocortison, trong khi tác dụng kháng viêm chỉ gấp 10 lần. Thuốc được dùng bổ sung tác dụng giữ muối nước thay thế aldosteron trong bệnh suy thượng thận nguyên phát Addison.",
      "Phương án này không đúng vì \"Hoạt tính glucocorticoid kháng viêm chọn lọc tại não\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích thích các tế bào đảo tụy tăng cường tiết insulin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tăng tổng hợp hormon aldosteron nội sinh ở vỏ thượng thận\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Gắn thêm chuỗi acid béo mười bốn carbon vào chuỗi A",
      "Thay đổi acid amin chuỗi B ngăn cản tự tạo hexamer",
      "Bổ sung phức hợp kẽm protamin tạo tinh thể lắng đọng",
      "Tăng số lượng cầu nối disulfid nội phân tử trong chuỗi"
    ],
    "correct": 1,
    "explanation": "Insulin người thông thường ở nồng độ cao tự trùng hợp thành dạng hexamer (6 phân tử) chậm phân ly. Lispro (đảo vị trí ProB28 và LysB29) và Aspart (thay ProB28 bằng Asp) làm giảm tương tác kỵ nước, ngăn tạo hexamer, phân tử tồn tại dạng monomer hấp thu vào máu cực nhanh sau 10-15 phút.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Gắn thêm chuỗi acid béo mười bốn carbon vào chuỗi A\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Insulin người thông thường ở nồng độ cao tự trùng hợp thành dạng hexamer (6 phân tử) chậm phân ly. Lispro (đảo vị trí ProB28 và LysB29) và Aspart (thay ProB28 bằng Asp) làm giảm tương tác kỵ nước, ngăn tạo hexamer, phân tử tồn tại dạng monomer hấp thu vào máu cực nhanh sau 10-15 phút.",
      "Phương án này không đúng vì \"Bổ sung phức hợp kẽm protamin tạo tinh thể lắng đọng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tăng số lượng cầu nối disulfid nội phân tử trong chuỗi\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Bao bọc trong hạt liposome phóng thích chậm kéo dài",
      "Gắn thuận nghịch albumin huyết tương qua chuỗi acid béo",
      "Kết tủa vi tinh thể ở mô dưới da tại pH sinh lý 7,4",
      "Đại thực bào tại mô dưới da thực bào và nhả dần vào máu"
    ],
    "correct": 2,
    "explanation": "Insulin Glargine hòa tan hoàn toàn ở pH 4.0 trong lọ thuốc. Khi tiêm dưới da có pH trung tính 7.4, thuốc bị trung hòa và kết tủa thành các vi tinh thể (microprecipitates). Các tinh thể này giải phóng monomer insulin cực chậm và đều đặn vào mao mạch, tạo đường cong nồng độ phẳng không đỉnh kéo dài 24h.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Bao bọc trong hạt liposome phóng thích chậm kéo dài\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Gắn thuận nghịch albumin huyết tương qua chuỗi acid béo\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Insulin Glargine hòa tan hoàn toàn ở pH 4.0 trong lọ thuốc. Khi tiêm dưới da có pH trung tính 7.4, thuốc bị trung hòa và kết tủa thành các vi tinh thể (microprecipitates). Các tinh thể này giải phóng monomer insulin cực chậm và đều đặn vào mao mạch, tạo đường cong nồng độ phẳng không đỉnh kéo dài 24h.",
      "Phương án này không đúng vì \"Đại thực bào tại mô dưới da thực bào và nhả dần vào máu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Trước 4.5 giờ kể từ khi khởi phát và đã loại trừ xuất huyết",
      "Trước 12 giờ kể từ khi xuất hiện các triệu chứng thần kinh",
      "Trong vòng 24 đến 48 giờ sau đột quỵ thiếu máu cục bộ",
      "Bất kỳ thời điểm nào trong tuần đầu tiên nếu bệnh nhân tỉnh"
    ],
    "correct": 0,
    "explanation": "Theo các hướng dẫn đột quỵ quốc tế (AHA/ASA), cửa sổ điều trị tiêu sợi huyết tĩnh mạch chuẩn trong nhồi máu não cấp là trong vòng 4.5 giờ kể từ thời điểm khởi phát (thời điểm người bệnh bình thường lần cuối). Dùng sau 4.5 giờ nguy cơ xuất huyết não chuyển dạng tử vong cao hơn nhiều lợi ích.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Theo các hướng dẫn đột quỵ quốc tế (AHA/ASA), cửa sổ điều trị tiêu sợi huyết tĩnh mạch chuẩn trong nhồi máu não cấp là trong vòng 4.5 giờ kể từ thời điểm khởi phát (thời điểm người bệnh bình thường lần cuối). Dùng sau 4.5 giờ nguy cơ xuất huyết não chuyển dạng tử vong cao hơn nhiều lợi ích.",
      "Phương án này không đúng vì \"Trước 12 giờ kể từ khi xuất hiện các triệu chứng thần kinh\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Trong vòng 24 đến 48 giờ sau đột quỵ thiếu máu cục bộ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Bất kỳ thời điểm nào trong tuần đầu tiên nếu bệnh nhân tỉnh\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Kích thích tủy xương tăng sinh và biệt hóa tạo tiểu cầu mới",
      "Gắn cạnh tranh vị trí lysin trên plasminogen ngăn phân hủy fibrin",
      "Kích thích nội mô tổng hợp và giải phóng yếu tố VIII và vWF",
      "Gây co thắt các cơ trơn tiểu động mạch tại vị trí tổn thương"
    ],
    "correct": 1,
    "explanation": "Acid Tranexamic là một acid amin tổng hợp có cấu trúc tương tự lysin. Thuốc gắn cạnh tranh vào các vị trí gắn lysin (kringle domains) trên phân tử plasminogen và plasmin, phong tỏa khả năng liên kết của plasmin với fibrin, bảo vệ cục máu đông fibrin không bị tiêu hủy.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Kích thích tủy xương tăng sinh và biệt hóa tạo tiểu cầu mới\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Acid Tranexamic là một acid amin tổng hợp có cấu trúc tương tự lysin. Thuốc gắn cạnh tranh vào các vị trí gắn lysin (kringle domains) trên phân tử plasminogen và plasmin, phong tỏa khả năng liên kết của plasmin với fibrin, bảo vệ cục máu đông fibrin không bị tiêu hủy.",
      "Phương án này không đúng vì \"Kích thích nội mô tổng hợp và giải phóng yếu tố VIII và vWF\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Gây co thắt các cơ trơn tiểu động mạch tại vị trí tổn thương\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Nứt kẽ mép, viêm lưỡi bóng đỏ và viêm da tiết bã cánh mũi",
      "Viêm loét niêm mạc thực quản, loét trợt dạ dày và hẹp môn vị",
      "Xuất huyết vi mạch võng mạc, phù gai thị và bong giác mạc",
      "Hoại tử niêm mạc hầu họng, loét sâu vùng xương cùng cụt"
    ],
    "correct": 0,
    "explanation": "Riboflavin (B2) là thành phần cấu tạo coenzym FAD và FMN tham gia chuỗi hô hấp tế bào. Thiếu B2 gây tổn thương điển hình ở vùng ranh giới niêm mạc da: nứt góc mép (chốc mép), viêm môi, lưỡi đỏ tím sưng nề (magenta tongue) và viêm da tiết bã nhờn ở nếp mũi má.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Riboflavin (B2) là thành phần cấu tạo coenzym FAD và FMN tham gia chuỗi hô hấp tế bào. Thiếu B2 gây tổn thương điển hình ở vùng ranh giới niêm mạc da: nứt góc mép (chốc mép), viêm môi, lưỡi đỏ tím sưng nề (magenta tongue) và viêm da tiết bã nhờn ở nếp mũi má.",
      "Phương án này không đúng vì \"Viêm loét niêm mạc thực quản, loét trợt dạ dày và hẹp môn vị\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Xuất huyết vi mạch võng mạc, phù gai thị và bong giác mạc\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Hoại tử niêm mạc hầu họng, loét sâu vùng xương cùng cụt\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Dị tật tim bẩm sinh còn ống động mạch",
      "Dị tật trật khớp háng và loạn sản sụn",
      "Dị tật tiêu hóa teo thực quản bẩm sinh",
      "Dị tật ống thần kinh nứt đốt sống"
    ],
    "correct": 3,
    "explanation": "Ống thần kinh thai nhi đóng lại vào ngày thứ 28 sau thụ thai. Thiếu Acid Folic làm rối loạn tổng hợp purin/pyrimidin phân chia tế bào thần kinh, gây dị tật ống thần kinh (nứt đốt sống, thoát vị màng não tủy, thai vô sọ). Bổ sung 400 mcg - 5 mg acid folic/ngày giúp giảm tới 70% nguy cơ dị tật này.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Dị tật tim bẩm sinh còn ống động mạch\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Dị tật trật khớp háng và loạn sản sụn\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Dị tật tiêu hóa teo thực quản bẩm sinh\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Ống thần kinh thai nhi đóng lại vào ngày thứ 28 sau thụ thai. Thiếu Acid Folic làm rối loạn tổng hợp purin/pyrimidin phân chia tế bào thần kinh, gây dị tật ống thần kinh (nứt đốt sống, thoát vị màng não tủy, thai vô sọ). Bổ sung 400 mcg - 5 mg acid folic/ngày giúp giảm tới 70% nguy cơ dị tật này."
    ]
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
      "Phức hợp sắt carboxymaltose phân tử lượng cao",
      "Phức hợp sắt isomaltoside liên kết polyme bền",
      "Phức hợp sắt dextran trọng lượng phân tử cao",
      "Phức hợp sắt sucrose giải phóng chậm qua truyền"
    ],
    "correct": 2,
    "explanation": "Phức hợp Sắt Dextran chứa kháng nguyên polysaccharide dextran có thể kích hoạt phản ứng phản vệ nặng qua trung gian miễn dịch (sốc phản vệ tụt huyết áp tử vong). Bắt buộc phải tiêm liều test (test dose) trước khi truyền. Các chế phẩm mới (Sắt sucrose, Sắt carboxymaltose) không chứa dextran nên an toàn hơn nhiều.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Phức hợp sắt carboxymaltose phân tử lượng cao\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Phức hợp sắt isomaltoside liên kết polyme bền\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phức hợp Sắt Dextran chứa kháng nguyên polysaccharide dextran có thể kích hoạt phản ứng phản vệ nặng qua trung gian miễn dịch (sốc phản vệ tụt huyết áp tử vong). Bắt buộc phải tiêm liều test (test dose) trước khi truyền. Các chế phẩm mới (Sắt sucrose, Sắt carboxymaltose) không chứa dextran nên an toàn hơn nhiều.",
      "Phương án này không đúng vì \"Phức hợp sắt sucrose giải phóng chậm qua truyền\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Nồng độ hemoglobin toàn phần",
      "Số lượng hồng cầu lưới ngoại vi",
      "Độ bão hòa transferrin huyết thanh",
      "Nồng độ ferritin huyết thanh"
    ],
    "correct": 3,
    "explanation": "Khi uống sắt, Hemoglobin thường bình thường sau 1-2 tháng, nhưng các kho dự trữ sắt (ferritin tại gan, tủy xương) vẫn bị cạn kiệt. Nguyên tắc bắt buộc là phải tiếp tục uống sắt thêm 3 đến 6 tháng sau khi Hb đã bình thường cho đến khi nồng độ Ferritin huyết thanh đạt mục tiêu phục hồi dự trữ.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Nồng độ hemoglobin toàn phần\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Số lượng hồng cầu lưới ngoại vi\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Độ bão hòa transferrin huyết thanh\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Khi uống sắt, Hemoglobin thường bình thường sau 1-2 tháng, nhưng các kho dự trữ sắt (ferritin tại gan, tủy xương) vẫn bị cạn kiệt. Nguyên tắc bắt buộc là phải tiếp tục uống sắt thêm 3 đến 6 tháng sau khi Hb đã bình thường cho đến khi nồng độ Ferritin huyết thanh đạt mục tiêu phục hồi dự trữ."
    ]
  },
  {
    "id": 418,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Một bệnh nhân viêm gan B mạn tính có tải lượng HBV-DNA cao cần điều trị bằng thuốc kháng virus đường uống thế hệ mới có hàng rào kháng thuốc cao và ức chế chọn lọc enzym DNA polymerase. Thuốc đầu tay được khuyến cáo là:",
    "options": [
      "Lamivudin viên nén",
      "Telbivudin viên nén",
      "Entecavir viên nén",
      "Adefovir viên nén"
    ],
    "correct": 2,
    "explanation": "Entecavir (dẫn chất guanosine) và Tenofovir (TAF/TDF) là các thuốc kháng virus viêm gan B thế hệ mới có hoạt lực ức chế nhân lên của HBV cực mạnh và hàng rào kháng thuốc rất cao (tỷ lệ đột biến kháng thuốc sau 5 năm ở bệnh nhân chưa từng dùng thuốc là < 1%, vượt trội hoàn toàn so với Lamivudin).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Lamivudin viên nén\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Telbivudin viên nén\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Entecavir (dẫn chất guanosine) và Tenofovir (TAF/TDF) là các thuốc kháng virus viêm gan B thế hệ mới có hoạt lực ức chế nhân lên của HBV cực mạnh và hàng rào kháng thuốc rất cao (tỷ lệ đột biến kháng thuốc sau 5 năm ở bệnh nhân chưa từng dùng thuốc là < 1%, vượt trội hoàn toàn so với Lamivudin).",
      "Phương án này không đúng vì \"Adefovir viên nén\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Virus hợp bào hô hấp RSV",
      "Virus cúm gia cầm A H5N1",
      "Virus thủy đậu biến chứng",
      "Virus gây bệnh sởi ác tính"
    ],
    "correct": 0,
    "explanation": "Khí dung Ribavirin là chỉ định được phê chuẩn trong điều trị viêm phổi và viêm tiểu phế quản nặng do virus hợp bào hô hấp (RSV) ở trẻ sơ sinh và trẻ nhỏ có nguy cơ cao (bệnh tim bẩm sinh, đẻ non). Ribavirin ức chế enzym inosine monophosphate dehydrogenase của virus.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Khí dung Ribavirin là chỉ định được phê chuẩn trong điều trị viêm phổi và viêm tiểu phế quản nặng do virus hợp bào hô hấp (RSV) ở trẻ sơ sinh và trẻ nhỏ có nguy cơ cao (bệnh tim bẩm sinh, đẻ non). Ribavirin ức chế enzym inosine monophosphate dehydrogenase của virus.",
      "Phương án này không đúng vì \"Virus cúm gia cầm A H5N1\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Virus thủy đậu biến chứng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Virus gây bệnh sởi ác tính\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Thụ thể CD20 trên màng tế bào lympho B",
      "Thụ thể HER2 còn gọi là thụ thể ErbB2",
      "Thụ thể checkpoint miễn dịch PD-1",
      "Thụ thể yếu tố tăng trưởng nội mô VEGFR-2"
    ],
    "correct": 1,
    "explanation": "Khoảng 20-25% bệnh nhân ung thư vú có gen HER2 bị khuếch đại, biểu hiện hàng triệu thụ thể HER2 trên màng tế bào ung thư thúc đẩy di căn. Trastuzumab là kháng thể đơn dòng gắn vào đoạn ngoại bào của HER2, ức chế tín hiệu tăng sinh, ngăn chặn cắt thụ thể và kích hoạt miễn dịch ADCC tiêu diệt tế bào u.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Thụ thể CD20 trên màng tế bào lympho B\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Khoảng 20-25% bệnh nhân ung thư vú có gen HER2 bị khuếch đại, biểu hiện hàng triệu thụ thể HER2 trên màng tế bào ung thư thúc đẩy di căn. Trastuzumab là kháng thể đơn dòng gắn vào đoạn ngoại bào của HER2, ức chế tín hiệu tăng sinh, ngăn chặn cắt thụ thể và kích hoạt miễn dịch ADCC tiêu diệt tế bào u.",
      "Phương án này không đúng vì \"Thụ thể checkpoint miễn dịch PD-1\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thụ thể yếu tố tăng trưởng nội mô VEGFR-2\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Kháng nguyên CD20\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "CD20 là kháng nguyên bề mặt biểu hiện đặc hiệu trên tế bào lympho B từ giai đoạn tiền B cho đến khi trưởng thành (nhưng không có trên tương bào và tế bào gốc tạo máu). Rituximab gắn vào CD20 kích hoạt độc tế bào phụ thuộc bổ thể (CDC) và độc tế bào qua trung gian kháng thể (ADCC) tiêu diệt chọn lọc tế bào lympho B.",
      "Phương án này không đúng vì \"Kháng nguyên CD8\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kháng nguyên CD19\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Tăng đào thải phân tử cồn nguyên dạng qua hô hấp và mồ hôi",
      "Kết tủa các hợp chất alcol trong ruột ngăn cản hấp thu vào máu",
      "Ức chế cạnh tranh enzym alcohol dehydrogenase ngăn tạo acid độc",
      "Kích thích gan oxy hóa độc chất thành carbonic và nước"
    ],
    "correct": 2,
    "explanation": "Bản thân Methanol và Ethylene glycol ít độc, nhưng chuyển hóa qua enzym Alcohol Dehydrogenase (ADH) tạo ra các chất cực độc: Acid Formic (gây toan máu sâu, mù mắt vĩnh viễn do phá hủy thần kinh thị giác) và Acid Oxalic (gây suy thận cấp). Fomepizol ức chế chọn lọc ADH (hoặc Ethanol cạnh tranh với ái lực cao gấp 20 lần) giúp ngăn chặn hoàn toàn sự tạo thành các acid độc này.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Paracetamol nguyên dạng không tích tụ gây hoại tử trực tiếp mà độc tính gan hoàn toàn do chất chuyển hóa ái điện tử NAPQI khi cạn kiệt Glutathione.",
      "Phương án này không đúng vì \"Kết tủa các hợp chất alcol trong ruột ngăn cản hấp thu vào máu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Bản thân Methanol và Ethylene glycol ít độc, nhưng chuyển hóa qua enzym Alcohol Dehydrogenase (ADH) tạo ra các chất cực độc: Acid Formic (gây toan máu sâu, mù mắt vĩnh viễn do phá hủy thần kinh thị giác) và Acid Oxalic (gây suy thận cấp). Fomepizol ức chế chọn lọc ADH (hoặc Ethanol cạnh tranh với ái lực cao gấp 20 lần) giúp ngăn chặn hoàn toàn sự tạo thành các acid độc này.",
      "Phương án này không đúng vì \"Kích thích gan oxy hóa độc chất thành carbonic và nước\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Acid hóa nước tiểu bằng acid ascorbic tăng ion hóa thuốc acid",
      "Kiềm hóa nước tiểu bằng natri bicarbonat ngăn tái hấp thu ống thận",
      "Bổ sung dịch điện giải ưu trương tăng áp lực thẩm thấu ống lượn",
      "Sử dụng lợi tiểu giữ kali thúc đẩy bài xuất nhanh chóng ra ngoài"
    ],
    "correct": 1,
    "explanation": "Phenobarbital và Salicylat là các acid yếu. Truyền Natri Bicarbonat làm kiềm hóa nước tiểu (pH > 7.5) khiến các phân tử thuốc nhường proton phân ly thành dạng ion hóa mang điện tích âm (A-). Dạng ion hóa không thể khuếch tán tái hấp thu qua màng biểu mô ống lượn xa (bị bẫy ion), bị tống nhanh chóng ra nước tiểu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Acid hóa nước tiểu bằng acid ascorbic tăng ion hóa thuốc acid\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phenobarbital và Salicylat là các acid yếu. Truyền Natri Bicarbonat làm kiềm hóa nước tiểu (pH > 7.5) khiến các phân tử thuốc nhường proton phân ly thành dạng ion hóa mang điện tích âm (A-). Dạng ion hóa không thể khuếch tán tái hấp thu qua màng biểu mô ống lượn xa (bị bẫy ion), bị tống nhanh chóng ra nước tiểu.",
      "Phương án này không đúng vì \"Bổ sung dịch điện giải ưu trương tăng áp lực thẩm thấu ống lượn\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Sử dụng lợi tiểu giữ kali thúc đẩy bài xuất nhanh chóng ra ngoài\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Tiêm bolus 80 mg rồi truyền liên tục 8 mg/giờ trong 72 giờ",
      "Tiêm ngắt quãng 20 mg mỗi 12 giờ kết hợp truyền muối",
      "Uống viên bao tan trong ruột 40 mg mỗi sáng khi đói",
      "Tiêm bắp sâu liều cao duy nhất một lần trong đợt cấp"
    ],
    "correct": 0,
    "explanation": "Cục máu đông tiểu cầu chỉ bền vững khi pH dịch vị duy trì liên tục trên 6. Phác đồ bolus 80 mg IV sau đó truyền liên tục 8 mg/giờ trong 72 giờ giúp duy trì pH dạ dày > 6 liên tục, ngăn chặn enzym pepsin tiêu hủy cục máu đông và giảm tỷ lệ tái xuất huyết.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Cục máu đông tiểu cầu chỉ bền vững khi pH dịch vị duy trì liên tục trên 6. Phác đồ bolus 80 mg IV sau đó truyền liên tục 8 mg/giờ trong 72 giờ giúp duy trì pH dạ dày > 6 liên tục, ngăn chặn enzym pepsin tiêu hủy cục máu đông và giảm tỷ lệ tái xuất huyết.",
      "Phương án này không đúng vì \"Tiêm ngắt quãng 20 mg mỗi 12 giờ kết hợp truyền muối\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Uống viên bao tan trong ruột 40 mg mỗi sáng khi đói\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tiêm bắp sâu liều cao duy nhất một lần trong đợt cấp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Tạo phức chelate không tan với ion kim loại lòng ruột",
      "Tăng pH dạ dày làm giảm hòa tan thuốc kháng nấm",
      "Cảm ứng enzym cytochrom P450 làm tăng thoái giáng gan",
      "Cạnh tranh vị trí gắn albumin làm tăng đào thải thận"
    ],
    "correct": 1,
    "explanation": "Các thuốc kháng nấm nhóm Azol (Ketoconazol, Itraconazol) có tính base yếu, cần pH acid mạnh của dạ dày để hòa tan. PPI, kháng H2 hoặc Antacid làm tăng pH dạ dày khiến các thuốc này không hòa tan được và bị đào thải ra ngoài theo phân, dẫn đến thất bại điều trị.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Tạo phức chelate không tan với ion kim loại lòng ruột\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Các thuốc kháng nấm nhóm Azol (Ketoconazol, Itraconazol) có tính base yếu, cần pH acid mạnh của dạ dày để hòa tan. PPI, kháng H2 hoặc Antacid làm tăng pH dạ dày khiến các thuốc này không hòa tan được và bị đào thải ra ngoài theo phân, dẫn đến thất bại điều trị.",
      "Phương án này không đúng vì \"Cảm ứng enzym cytochrom P450 làm tăng thoái giáng gan\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Cạnh tranh vị trí gắn albumin làm tăng đào thải thận\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Diosmectit",
      "Simethicon",
      "Carbocistein"
    ],
    "correct": 1,
    "explanation": "Diosmectit (và các muối phức hợp Magaldrat / Almasilat) là phức hợp nhôm magnesi silicat thiên nhiên có cấu trúc lớp kép, có độ nhầy quánh cao giúp bao phủ niêm mạc đường tiêu hóa và hấp phụ độc tố, vi khuẩn bảo vệ ổ loét và niêm mạc ruột.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Natri alginat\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Diosmectit (và các muối phức hợp Magaldrat / Almasilat) là phức hợp nhôm magnesi silicat thiên nhiên có cấu trúc lớp kép, có độ nhầy quánh cao giúp bao phủ niêm mạc đường tiêu hóa và hấp phụ độc tố, vi khuẩn bảo vệ ổ loét và niêm mạc ruột.",
      "Phương án này không đúng vì \"Simethicon\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Carbocistein\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Kích thích thụ thể opioid delta tại trung khu hành não",
      "Tăng tiết dịch nhầy bảo vệ niêm mạc đường khí phế quản",
      "Ức chế thụ thể kéo giãn tại niêm mạc đường dẫn khí",
      "Chẹn tổng hợp acetylcholin tại ngọn dây thần kinh mười"
    ],
    "correct": 2,
    "explanation": "Benzonatat có cấu trúc tương tự thuốc gây tê tại chỗ tetracain. Thuốc ức chế các thụ thể kéo giãn cảm giác ho (stretch receptors) tại niêm mạc khí phế quản và màng phổi, làm gián đoạn cung phản xạ ho ngoại biên mà không ức chế trung khu hô hấp.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Kích thích thụ thể opioid delta tại trung khu hành não\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tăng tiết dịch nhầy bảo vệ niêm mạc đường khí phế quản\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Benzonatat có cấu trúc tương tự thuốc gây tê tại chỗ tetracain. Thuốc ức chế các thụ thể kéo giãn cảm giác ho (stretch receptors) tại niêm mạc khí phế quản và màng phổi, làm gián đoạn cung phản xạ ho ngoại biên mà không ức chế trung khu hô hấp.",
      "Phương án này không đúng vì \"Chẹn tổng hợp acetylcholin tại ngọn dây thần kinh mười\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Thuốc kháng cholinergic tác dụng kéo dài",
      "Thuốc kích thích beta-2 adrenergic",
      "Thuốc kháng thụ thể cysteinyl leukotriene",
      "Thuốc làm loãng và tiêu chất nhầy đường thở"
    ],
    "correct": 1,
    "explanation": "Chủ vận beta-2 liều cao kích hoạt bơm Na+/K+-ATPase trên màng tế bào cơ vân và gan, thúc đẩy vận chuyển K+ từ máu vào trong tế bào, gây hạ Kali máu thoáng qua (tác dụng này thậm chí được ứng dụng để cấp cứu hạ K+ máu trong tăng kali máu cấp).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Thuốc kháng cholinergic tác dụng kéo dài\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Chủ vận beta-2 liều cao kích hoạt bơm Na+/K+-ATPase trên màng tế bào cơ vân và gan, thúc đẩy vận chuyển K+ từ máu vào trong tế bào, gây hạ Kali máu thoáng qua (tác dụng này thậm chí được ứng dụng để cấp cứu hạ K+ máu trong tăng kali máu cấp).",
      "Phương án này không đúng vì \"Thuốc kháng thụ thể cysteinyl leukotriene\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thuốc làm loãng và tiêu chất nhầy đường thở\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Tăng tiết dịch lỏng và kích thích tổng hợp surfactant",
      "Ức chế chọn lọc trung tâm phản xạ ho tại hành não",
      "Cắt trực tiếp cầu nối disulfid chuỗi mucopolysaccharid",
      "Tăng đào thải ion calci vào lòng đường dẫn khí phế quản"
    ],
    "correct": 0,
    "explanation": "Bromhexin và Ambroxol phân giải các sợi mucopolysaccharid acid trong đờm, kích thích tế bào biểu mô phế quản tăng bài tiết dịch thanh lỏng và kích thích tế bào phế nang type II tăng tổng hợp Surfactant, giúp giảm sức căng bề mặt và dễ khạc đờm.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Bromhexin và Ambroxol phân giải các sợi mucopolysaccharid acid trong đờm, kích thích tế bào biểu mô phế quản tăng bài tiết dịch thanh lỏng và kích thích tế bào phế nang type II tăng tổng hợp Surfactant, giúp giảm sức căng bề mặt và dễ khạc đờm.",
      "Phương án này không đúng vì \"Ức chế chọn lọc trung tâm phản xạ ho tại hành não\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Cắt trực tiếp cầu nối disulfid chuỗi mucopolysaccharid\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tăng đào thải ion calci vào lòng đường dẫn khí phế quản\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Fexofenadin",
      "Desloratadin",
      "Cetirizin"
    ],
    "correct": 3,
    "explanation": "Cetirizin hấp thu rất nhanh qua đường tiêu hóa, nồng độ đỉnh trong huyết tương đạt được sau 30-60 phút và tác dụng kháng histamin xuất hiện chỉ sau 20 phút, nhanh hơn đáng kể so với Loratadin và Fexofenadin, rất thích hợp dập tắt triệu chứng ngứa mày đay cấp.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Loratadin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Fexofenadin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Desloratadin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Cetirizin hấp thu rất nhanh qua đường tiêu hóa, nồng độ đỉnh trong huyết tương đạt được sau 30-60 phút và tác dụng kháng histamin xuất hiện chỉ sau 20 phút, nhanh hơn đáng kể so với Loratadin và Fexofenadin, rất thích hợp dập tắt triệu chứng ngứa mày đay cấp."
    ]
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
      "Thụ thể H1 giải phóng NO và co rút nội mô",
      "Ức chế tổng hợp prostacyclin tại nội mô",
      "Chẹn kênh calci làm mất trương lực mạch",
      "Thủy phân collagen phá hủy cấu trúc mạch"
    ],
    "correct": 0,
    "explanation": "Histamin gắn vào thụ thể H1 trên tế bào nội mô mao mạch kích hoạt eNOS sản sinh NO gây giãn tiểu động mạch; đồng thời kích hoạt các sợi actin/myosin làm tế bào nội mô co tròn lại, mở rộng khe hở giữa các tế bào (endothelial gaps) cho huyết tương thoát ra ngoài gây sẩn phù (wheal).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Histamin gắn vào thụ thể H1 trên tế bào nội mô mao mạch kích hoạt eNOS sản sinh NO gây giãn tiểu động mạch; đồng thời kích hoạt các sợi actin/myosin làm tế bào nội mô co tròn lại, mở rộng khe hở giữa các tế bào (endothelial gaps) cho huyết tương thoát ra ngoài gây sẩn phù (wheal).",
      "Phương án này không đúng vì \"Ức chế tổng hợp prostacyclin tại nội mô\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Chẹn kênh calci làm mất trương lực mạch\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thủy phân collagen phá hủy cấu trúc mạch\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Tiến triển không hồi phục gây xơ gan mất bù",
      "Phụ thuộc liều và hồi phục khi ngừng thuốc",
      "Chỉ xuất hiện ở người có gen chuyển hóa chậm",
      "Luôn đi kèm hoại tử ống thận cấp gây vô niệu"
    ],
    "correct": 1,
    "explanation": "Tăng men gan không triệu chứng xảy ra ở khoảng 0.5-2% người dùng Statin, phụ thuộc liều dùng và thường xuất hiện trong 12 tuần đầu điều trị. Hiện tượng này thường tự giới hạn hoặc hồi phục hoàn toàn về mức bình thường khi giảm liều hoặc ngưng thuốc, rất hiếm khi gây tổn thương gan thực thể.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Tiến triển không hồi phục gây xơ gan mất bù\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Tăng men gan không triệu chứng xảy ra ở khoảng 0.5-2% người dùng Statin, phụ thuộc liều dùng và thường xuất hiện trong 12 tuần đầu điều trị. Hiện tượng này thường tự giới hạn hoặc hồi phục hoàn toàn về mức bình thường khi giảm liều hoặc ngưng thuốc, rất hiếm khi gây tổn thương gan thực thể.",
      "Phương án này không đúng vì \"Chỉ xuất hiện ở người có gen chuyển hóa chậm\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Luôn đi kèm hoại tử ống thận cấp gây vô niệu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Tăng cholesterol đơn thuần có triglycerid bình thường",
      "Tăng huyết áp kịch phát kèm theo suy thận mạn",
      "Xơ vữa mạch dùng statin còn tăng triglycerid tồn dư",
      "Trẻ em mắc hội chứng thận hư tái phát kháng corticoid"
    ],
    "correct": 2,
    "explanation": "Thử nghiệm REDUCE-IT chứng minh Icosapent ethyl (EPA tinh chế liều cao 4g/ngày) làm giảm 25% các biến cố tim mạch lớn (tử vong do tim, nhồi máu cơ tim, đột quỵ) ở bệnh nhân có xơ vữa mạch máu hoặc đái tháo đường đang dùng statin nhưng vẫn còn tình trạng tăng triglycerid máu tồn dư.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Tăng cholesterol đơn thuần có triglycerid bình thường\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tăng huyết áp kịch phát kèm theo suy thận mạn\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Thử nghiệm REDUCE-IT chứng minh Icosapent ethyl (EPA tinh chế liều cao 4g/ngày) làm giảm 25% các biến cố tim mạch lớn (tử vong do tim, nhồi máu cơ tim, đột quỵ) ở bệnh nhân có xơ vữa mạch máu hoặc đái tháo đường đang dùng statin nhưng vẫn còn tình trạng tăng triglycerid máu tồn dư.",
      "Phương án này không đúng vì \"Trẻ em mắc hội chứng thận hư tái phát kháng corticoid\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Chloroquin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Quinin là alkaloid tự nhiên quay trái chiết xuất từ vỏ cây Canh-ki-na (Cinchona). Đồng phân quang học quay phải của nó là Quinidin (được dùng chủ yếu làm thuốc chống loạn nhịp tim Nhóm IA).",
      "Phương án này không đúng vì \"Primaquin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Artemisinin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Primaquin phối hợp Mefloquin trong ba ngày",
      "Doxycyclin phối hợp Artesunat trong bảy ngày",
      "Fansidar liều duy nhất mỗi tuần trong thai kỳ",
      "Quinin phối hợp Clindamycin trong bảy ngày"
    ],
    "correct": 3,
    "explanation": "Trong quý 1 thai kỳ, các thuốc nhóm Artemisinin có nguy cơ tiêu thai trên động vật thực nghiệm (chỉ dùng khi ác tính nguy cơ tử vong cao). Phác đồ an toàn nhất được khuyến cáo cho thai phụ quý 1 là Quinin sulfat uống phối hợp với Clindamycin trong 7 ngày.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Primaquin phối hợp Mefloquin trong ba ngày\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Doxycyclin phối hợp Artesunat trong bảy ngày\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Fansidar liều duy nhất mỗi tuần trong thai kỳ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Trong quý 1 thai kỳ, các thuốc nhóm Artemisinin có nguy cơ tiêu thai trên động vật thực nghiệm (chỉ dùng khi ác tính nguy cơ tử vong cao). Phác đồ an toàn nhất được khuyến cáo cho thai phụ quý 1 là Quinin sulfat uống phối hợp với Clindamycin trong 7 ngày."
    ]
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
      "Hiệp đồng tăng độc tính trên tai gây điếc và hoại tử ống thận",
      "Hai thuốc phản ứng tạo tủa làm mất hoạt tính kháng khuẩn",
      "Kích hoạt tiêu sợi huyết gây rối loạn đông máu xuất huyết",
      "Ức chế trung tâm điều nhiệt ở dưới đồi làm hạ thân nhiệt sâu"
    ],
    "correct": 0,
    "explanation": "Cả Aminoglycosid và Furosemid đều gây độc cho dải mạch vân ở ốc tai và gây hoại tử tế bào biểu mô ống lượn gần ở thận. Dùng phối hợp sẽ làm tăng tích lũy thuốc ở tai trong và mô thận, gây độc tính hiệp đồng cộng dẫn đến điếc giác quan không hồi phục và suy thận cấp.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Cả Aminoglycosid và Furosemid đều gây độc cho dải mạch vân ở ốc tai và gây hoại tử tế bào biểu mô ống lượn gần ở thận. Dùng phối hợp sẽ làm tăng tích lũy thuốc ở tai trong và mô thận, gây độc tính hiệp đồng cộng dẫn đến điếc giác quan không hồi phục và suy thận cấp.",
      "Phương án này không đúng vì \"Hai thuốc phản ứng tạo tủa làm mất hoạt tính kháng khuẩn\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích hoạt tiêu sợi huyết gây rối loạn đông máu xuất huyết\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ức chế trung tâm điều nhiệt ở dưới đồi làm hạ thân nhiệt sâu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Tăng tỷ lệ dạng không ion hóa thúc đẩy tái hấp thu vào máu",
      "Không làm biến đổi động học thanh thải qua màng lọc cầu thận",
      "Tăng ion hóa thuốc base yếu, giảm tái hấp thu, tăng đào thải",
      "Làm giảm độ tan của thuốc dẫn tới kết tinh tạo sỏi thận"
    ],
    "correct": 2,
    "explanation": "Theo nguyên lý bẫy ion: Trong môi trường nước tiểu acid (pH thấp), thuốc có tính base yếu sẽ nhận H+ tích điện dương (dạng ion hóa). Dạng ion hóa phân cực không tan trong lipid nên không thể khuếch tán tái hấp thu qua màng tế bào ống thận, bị đào thải nhanh chóng ra ngoài nước tiểu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Tăng tỷ lệ dạng không ion hóa thúc đẩy tái hấp thu vào máu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Không làm biến đổi động học thanh thải qua màng lọc cầu thận\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Theo nguyên lý bẫy ion: Trong môi trường nước tiểu acid (pH thấp), thuốc có tính base yếu sẽ nhận H+ tích điện dương (dạng ion hóa). Dạng ion hóa phân cực không tan trong lipid nên không thể khuếch tán tái hấp thu qua màng tế bào ống thận, bị đào thải nhanh chóng ra ngoài nước tiểu.",
      "Phương án này không đúng vì \"Làm giảm độ tan của thuốc dẫn tới kết tinh tạo sỏi thận\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Tăng huyết áp kịch phát, tăng natri máu và hôn mê toan ceton",
      "Co cứng cơ toàn thân uốn ván, tăng trương lực ngoại tháp",
      "Tụt huyết áp trụy mạch, đau bụng, hạ natri và tăng kali máu",
      "Phù phổi cấp huyết động kết hợp thiểu niệu do hoại tử ống thận"
    ],
    "correct": 2,
    "explanation": "Thiếu hụt cortisol và aldosteron cấp tính dẫn đến mất muối và nước qua thận: tụt huyết áp nặng, sốc trụy mạch kháng trị; hạ Natri máu, tăng Kali máu (do không thải K+), hạ đường huyết nặng (do mất tân tạo đường) và các cơn đau bụng quặn dễ nhầm với bụng ngoại khoa.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Tăng huyết áp kịch phát, tăng natri máu và hôn mê toan ceton\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Co cứng cơ toàn thân uốn ván, tăng trương lực ngoại tháp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Thiếu hụt cortisol và aldosteron cấp tính dẫn đến mất muối và nước qua thận: tụt huyết áp nặng, sốc trụy mạch kháng trị; hạ Natri máu, tăng Kali máu (do không thải K+), hạ đường huyết nặng (do mất tân tạo đường) và các cơn đau bụng quặn dễ nhầm với bụng ngoại khoa.",
      "Phương án này không đúng vì \"Phù phổi cấp huyết động kết hợp thiểu niệu do hoại tử ống thận\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Atosiban là chất đối kháng cạnh tranh tại thụ thể oxytocin ở cơ tử cung, làm giảm tần số và biên độ các cơn co thắt tử cung, được dùng tiêm truyền tĩnh mạch để trì hoãn chuyển dạ dọa sinh non từ tuần 24 đến 33 của thai kỳ.",
      "Phương án này không đúng vì \"Carbetocin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Dinoprostone\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Alprostadil\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
  },
  {
    "id": 440,
    "subject": "duocly2",
    "chapter": "Thuốc hạ glucose máu",
    "level": "Vận dụng",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Biến chứng teo mô mỡ (Lipoatrophy) hoặc phì đại mô mỡ (Lipohypertrophy) tại vị trí tiêm một loại hormon peptide điều hòa đường huyết dưới da thường xảy ra do nguyên nhân nào và làm ảnh hưởng ra sao đến điều trị?",
    "options": [
      "Tiêm lặp lại một vị trí làm hấp thu hormon bị biến động thất thường",
      "Phản ứng dị ứng qua kháng thể IgE làm xơ hóa tổ chức liên kết dưới da",
      "Vi khuẩn kỵ khí xâm nhập vào mô mỡ gây phản ứng viêm mủ cục bộ mạn tính",
      "Kích thích tăng sinh quá mức tế bào thượng bì tạo các khối u xơ biểu mô"
    ],
    "correct": 0,
    "explanation": "Lipohypertrophy xuất phát từ tác dụng kích thích đồng hóa tại chỗ của insulin khi tiêm liên tục tại cùng một điểm. Mô mỡ bị xơ hóa và phì đại làm cản trở và làm chậm tốc độ hấp thu insulin thất thường, gây ra các cơn tăng đường huyết không giải thích được hoặc hạ đường huyết muộn.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Lipohypertrophy xuất phát từ tác dụng kích thích đồng hóa tại chỗ của insulin khi tiêm liên tục tại cùng một điểm. Mô mỡ bị xơ hóa và phì đại làm cản trở và làm chậm tốc độ hấp thu insulin thất thường, gây ra các cơn tăng đường huyết không giải thích được hoặc hạ đường huyết muộn.",
      "Phương án này không đúng vì \"Phản ứng dị ứng qua kháng thể IgE làm xơ hóa tổ chức liên kết dưới da\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Vi khuẩn kỵ khí xâm nhập vào mô mỡ gây phản ứng viêm mủ cục bộ mạn tính\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích thích tăng sinh quá mức tế bào thượng bì tạo các khối u xơ biểu mô\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Cả hai tình trạng đều có đường huyết nửa đêm tăng cao",
      "Somogyi có hạ đường huyết nửa đêm còn Bình minh thì không",
      "Somogyi chỉ xuất hiện khi điều trị bằng metformin kéo dài",
      "Hiện tượng Bình minh chỉ xảy ra khi bệnh nhân ăn quá nhiều"
    ],
    "correct": 1,
    "explanation": "Đo đường huyết lúc 3 giờ sáng: Nếu đường huyết < 70 mg/dL là Hiệu ứng Somogyi (hạ đường huyết ban đêm kích thích tiết glucagon, cortisol, epinephrine làm đường huyết sáng tăng vọt $\\rightarrow$ cần giảm liều insulin ban đêm). Nếu đường huyết 3h sáng bình thường hoặc cao là Hiện tượng Bình minh (do đỉnh tiết GH/cortisol $\\rightarrow$ cần tăng liều insulin ban đêm).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Cả hai tình trạng đều có đường huyết nửa đêm tăng cao\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Đo đường huyết lúc 3 giờ sáng: Nếu đường huyết < 70 mg/dL là Hiệu ứng Somogyi (hạ đường huyết ban đêm kích thích tiết glucagon, cortisol, epinephrine làm đường huyết sáng tăng vọt $\\rightarrow$ cần giảm liều insulin ban đêm). Nếu đường huyết 3h sáng bình thường hoặc cao là Hiện tượng Bình minh (do đỉnh tiết GH/cortisol $\\rightarrow$ cần tăng liều insulin ban đêm).",
      "Phương án này không đúng vì \"Somogyi chỉ xuất hiện khi điều trị bằng metformin kéo dài\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Hiện tượng Bình minh chỉ xảy ra khi bệnh nhân ăn quá nhiều\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Bệnh nhân có van tim nhân tạo cơ học",
      "Bệnh nhân thuyên tắc tĩnh mạch sâu",
      "Phụ nữ đang trong thời kỳ mang thai",
      "Phụ nữ sau mãn kinh có loãng xương"
    ],
    "correct": 2,
    "explanation": "Warfarin qua được nhau thai rất dễ dàng. Dùng trong 3 tháng đầu gây hội chứng Warfarin thai nhi (khiếm khuyết xương mũi lõm, loạn sản đầu xương có đốm, teo dây thị giác, chậm phát triển trí tuệ) và gây xuất huyết não thai nhi trong quý 2-3. Thuốc chống chỉ định tuyệt đối trong thai kỳ (thay bằng LMWH).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Bệnh nhân có van tim nhân tạo cơ học\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Bệnh nhân thuyên tắc tĩnh mạch sâu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Warfarin qua được nhau thai rất dễ dàng. Dùng trong 3 tháng đầu gây hội chứng Warfarin thai nhi (khiếm khuyết xương mũi lõm, loạn sản đầu xương có đốm, teo dây thị giác, chậm phát triển trí tuệ) và gây xuất huyết não thai nhi trong quý 2-3. Thuốc chống chỉ định tuyệt đối trong thai kỳ (thay bằng LMWH).",
      "Phương án này không đúng vì \"Phụ nữ sau mãn kinh có loãng xương\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Phục hồi hoàn toàn khả năng chuyển hóa của enzym gan",
      "Phục hồi chức năng lọc cầu thận và thăng bằng kiềm toan",
      "Tránh tương tác làm giảm nồng độ kháng sinh dự phòng mổ",
      "Chờ tủy xương sinh lứa tiểu cầu mới có chức năng đông máu"
    ],
    "correct": 3,
    "explanation": "Tiểu cầu bị aspirin acetyl hóa không thể phục hồi chức năng trong suốt vòng đời 7-10 ngày. Mỗi ngày tủy xương chỉ sinh ra khoảng 10-15% lượng tiểu cầu mới. Cần ngừng Aspirin ít nhất 7-10 ngày để có đủ > 80% số lượng tiểu cầu mới bình thường đảm bảo cầm máu trong phẫu thuật.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Phục hồi hoàn toàn khả năng chuyển hóa của enzym gan\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Phục hồi chức năng lọc cầu thận và thăng bằng kiềm toan\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tránh tương tác làm giảm nồng độ kháng sinh dự phòng mổ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Tiểu cầu bị aspirin acetyl hóa không thể phục hồi chức năng trong suốt vòng đời 7-10 ngày. Mỗi ngày tủy xương chỉ sinh ra khoảng 10-15% lượng tiểu cầu mới. Cần ngừng Aspirin ít nhất 7-10 ngày để có đủ > 80% số lượng tiểu cầu mới bình thường đảm bảo cầm máu trong phẫu thuật."
    ]
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
      "Cải thiện được thiếu máu nhưng không ngừa thoái hóa thần kinh",
      "Kích thích tế bào miễn dịch phá hủy myelin hoại tử sợi trục",
      "Cạnh tranh liên kết với thụ thể làm tăng đào thải vitamin B12",
      "Ức chế tủy xương giải phóng hồng cầu gây đông vón vi mạch"
    ],
    "correct": 0,
    "explanation": "Cả thiếu B9 và B12 đều gây thiếu máu hồng cầu to. Nạp acid folic liều cao sẽ vượt qua được 'bẫy folate' giúp tủy xương tổng hợp DNA tạo hồng cầu bình thường (công thức máu hồi phục), nhưng không thể chuyển đổi methylmalonyl-CoA thành succinyl-CoA (cần B12), khiến thoái hóa bao myelin cột sau tủy sống âm thầm tiến triển thành liệt vĩnh viễn.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Cả thiếu B9 và B12 đều gây thiếu máu hồng cầu to. Nạp acid folic liều cao sẽ vượt qua được 'bẫy folate' giúp tủy xương tổng hợp DNA tạo hồng cầu bình thường (công thức máu hồi phục), nhưng không thể chuyển đổi methylmalonyl-CoA thành succinyl-CoA (cần B12), khiến thoái hóa bao myelin cột sau tủy sống âm thầm tiến triển thành liệt vĩnh viễn.",
      "Phương án này không đúng vì \"Kích thích tế bào miễn dịch phá hủy myelin hoại tử sợi trục\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Cạnh tranh liên kết với thụ thể làm tăng đào thải vitamin B12\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ức chế tủy xương giải phóng hồng cầu gây đông vón vi mạch\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Phản ứng chuyển amin gắn vào cetoglutarat",
      "Phản ứng carboxyl hóa cố định carbon dioxid",
      "Phản ứng khử hydro oxy hóa của acid béo",
      "Phản ứng methyl hóa bảo vệ cấu trúc DNA"
    ],
    "correct": 1,
    "explanation": "Biotin là coenzym của các enzym Carboxylase (Pyruvate carboxylase, Acetyl-CoA carboxylase, Propionyl-CoA carboxylase) xúc tác gắn gốc CO2 vào cơ chất trong chuyển hóa lipid, glucid và acid amin. Ăn nhiều lòng trắng trứng sống (chứa avidin gắn chặt biotin) có thể gây thiếu hụt biotin.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Phản ứng chuyển amin gắn vào cetoglutarat\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Biotin là coenzym của các enzym Carboxylase (Pyruvate carboxylase, Acetyl-CoA carboxylase, Propionyl-CoA carboxylase) xúc tác gắn gốc CO2 vào cơ chất trong chuyển hóa lipid, glucid và acid amin. Ăn nhiều lòng trắng trứng sống (chứa avidin gắn chặt biotin) có thể gây thiếu hụt biotin.",
      "Phương án này không đúng vì \"Phản ứng khử hydro oxy hóa của acid béo\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Phản ứng methyl hóa bảo vệ cấu trúc DNA\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
  },
  {
    "id": 446,
    "subject": "duocly2",
    "chapter": "Thuốc chữa thiếu máu",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Một bệnh nhân ung thư sau đợt hóa trị liệu xuất hiện sốt giảm bạch cầu hạt trung tính nặng. Chế phẩm sinh học tái tổ hợp dòng yếu tố kích thích cụm (G-CSF) được chỉ định cấp cứu để phục hồi số lượng bạch cầu là:",
    "options": [
      "Epoetin alfa",
      "Romiplostim",
      "Filgrastim",
      "Oprelvekin"
    ],
    "correct": 2,
    "explanation": "Filgrastim là yếu tố kích thích dòng bạch cầu hạt của người tái tổ hợp (r-metHuG-CSF), kích thích tủy xương tăng sinh, biệt hóa và giải phóng các bạch cầu đa nhân trung tính vào máu, giúp rút ngắn giai đoạn hạ bạch cầu sau hóa trị và giảm nguy cơ sốc nhiễm trùng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Epoetin alfa\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Romiplostim\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Filgrastim là yếu tố kích thích dòng bạch cầu hạt của người tái tổ hợp (r-metHuG-CSF), kích thích tủy xương tăng sinh, biệt hóa và giải phóng các bạch cầu đa nhân trung tính vào máu, giúp rút ngắn giai đoạn hạ bạch cầu sau hóa trị và giảm nguy cơ sốc nhiễm trùng.",
      "Phương án này không đúng vì \"Oprelvekin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Rụng tóc hoàn toàn kèm viêm da",
      "Suy thận cấp do hoại tử ống thận cấp",
      "Xơ hóa van tim và phì đại thất trái",
      "Đau nhức xương khớp và vùng chậu"
    ],
    "correct": 3,
    "explanation": "Đau xương (bone pain) là tác dụng phụ phổ biến nhất của Filgrastim (chiếm khoảng 20-30% bệnh nhân), xuất phát từ hiện tượng tủy xương tại các xương xốp tăng sinh tế bào ồ ạt làm tăng áp lực trong khoang tủy xương. Triệu chứng đáp ứng tốt với Paracetamol hoặc NSAID.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Rụng tóc hoàn toàn kèm viêm da\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Suy thận cấp do hoại tử ống thận cấp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Xơ hóa van tim và phì đại thất trái\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Đau xương (bone pain) là tác dụng phụ phổ biến nhất của Filgrastim (chiếm khoảng 20-30% bệnh nhân), xuất phát từ hiện tượng tủy xương tại các xương xốp tăng sinh tế bào ồ ạt làm tăng áp lực trong khoang tủy xương. Triệu chứng đáp ứng tốt với Paracetamol hoặc NSAID."
    ]
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
      "Chẹn thụ thể ACE-2 ngăn cản gai glycoprotein của virus",
      "Ức chế enzym protease chính 3CLpro ngừng cắt polyprotein",
      "Cạnh tranh ức chế enzym RNA polymerase phụ thuộc RNA",
      "Phong bế kênh ion màng vỏ virus ngăn cản giải phóng gen"
    ],
    "correct": 2,
    "explanation": "Remdesivir là một tiền chất monophosphoramidat nucleoside, vào trong tế bào được chuyển hóa thành dạng có hoạt tính remdesivir triphosphate (NTP tương tự ATP). Dạng này được enzym RdRp của SARS-CoV-2 đưa nhầm vào chuỗi RNA, gây ngừng trệ sao chép chuỗi sau 3 nucleotide (delayed chain termination).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Chẹn thụ thể ACE-2 ngăn cản gai glycoprotein của virus\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ức chế enzym protease chính 3CLpro ngừng cắt polyprotein\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Remdesivir là một tiền chất monophosphoramidat nucleoside, vào trong tế bào được chuyển hóa thành dạng có hoạt tính remdesivir triphosphate (NTP tương tự ATP). Dạng này được enzym RdRp của SARS-CoV-2 đưa nhầm vào chuỗi RNA, gây ngừng trệ sao chép chuỗi sau 3 nucleotide (delayed chain termination).",
      "Phương án này không đúng vì \"Phong bế kênh ion màng vỏ virus ngăn cản giải phóng gen\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Ức chế enzym protease chính Mpro của virus ngăn cắt polyprotein",
      "Gắn kết vào protein gai S ngăn virus tương tác với thụ thể",
      "Ức chế enzym RNA polymerase phụ thuộc RNA gián đoạn kéo dài sợi",
      "Phong bế các kênh ion vỏ bọc cản trở cởi áo virion"
    ],
    "correct": 0,
    "explanation": "Nirmatrelvir là chất ức chế chọn lọc enzym protease chính Mpro (3CLpro) của SARS-CoV-2. Enzym này chịu trách nhiệm cắt các polyprotein lớn thành các protein phi cấu trúc chức năng của virus. Ức chế Mpro làm ngừng trệ quá trình nhân đôi của virus. Ritonavir dùng kèm để tăng nồng độ Nirmatrelvir.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Nirmatrelvir là chất ức chế chọn lọc enzym protease chính Mpro (3CLpro) của SARS-CoV-2. Enzym này chịu trách nhiệm cắt các polyprotein lớn thành các protein phi cấu trúc chức năng của virus. Ức chế Mpro làm ngừng trệ quá trình nhân đôi của virus. Ritonavir dùng kèm để tăng nồng độ Nirmatrelvir.",
      "Phương án này không đúng vì \"Gắn kết vào protein gai S ngăn virus tương tác với thụ thể\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ức chế enzym RNA polymerase phụ thuộc RNA gián đoạn kéo dài sợi\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Phong bế các kênh ion vỏ bọc cản trở cởi áo virion\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Yếu tố phát triển nội mô mạch máu VEGF-A",
      "Yếu tố phát triển nguyên bào sợi ngoại biên",
      "Yếu tố hoại tử u dạng hòa tan TNF-alpha",
      "Chất ức chế hoạt hóa men plasminogen PAI-1"
    ],
    "correct": 0,
    "explanation": "Khối u kích thước > 2mm cần tạo mạch máu mới để cung cấp oxy và dinh dưỡng. Khối u tiết ra VEGF-A kích thích tế bào nội mô mạch máu tăng sinh. Bevacizumab là kháng thể đơn dòng liên kết và trung hòa VEGF-A tự do, ngăn VEGF gắn vào thụ thể VEGFR, bỏ đói khối u và làm thoái triển mạng mạch máu nuôi u.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Khối u kích thước > 2mm cần tạo mạch máu mới để cung cấp oxy và dinh dưỡng. Khối u tiết ra VEGF-A kích thích tế bào nội mô mạch máu tăng sinh. Bevacizumab là kháng thể đơn dòng liên kết và trung hòa VEGF-A tự do, ngăn VEGF gắn vào thụ thể VEGFR, bỏ đói khối u và làm thoái triển mạng mạch máu nuôi u.",
      "Phương án này không đúng vì \"Yếu tố phát triển nguyên bào sợi ngoại biên\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Yếu tố hoại tử u dạng hòa tan TNF-alpha\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Chất ức chế hoạt hóa men plasminogen PAI-1\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Thụ thể PD-1 trên tế bào lympho T và phối tử PD-L1 trên tế bào u",
      "Thụ thể CD28 trên tế bào T và phân tử B7 trên tế bào trình diện",
      "Thụ thể CTLA-4 trên tế bào T và phân tử CD80 trên tế bào u",
      "Thụ thể TCR trên tế bào T và kháng nguyên HLA lớp 1 trên tế bào u"
    ],
    "correct": 0,
    "explanation": "Tế bào ung thư lẩn tránh hệ miễn dịch bằng cách biểu hiện phối tử PD-L1 gắn vào thụ thể PD-1 trên tế bào T độc (CD8+), phát tín hiệu ức chế làm tế bào T bị 'kiệt sức' (T-cell exhaustion). Kháng thể kháng PD-1 (Pembrolizumab, Nivolumab) chặn đứng tương tác này, 'tháo phanh' hệ miễn dịch để tế bào T tiêu diệt tế bào ung thư.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Tế bào ung thư lẩn tránh hệ miễn dịch bằng cách biểu hiện phối tử PD-L1 gắn vào thụ thể PD-1 trên tế bào T độc (CD8+), phát tín hiệu ức chế làm tế bào T bị 'kiệt sức' (T-cell exhaustion). Kháng thể kháng PD-1 (Pembrolizumab, Nivolumab) chặn đứng tương tác này, 'tháo phanh' hệ miễn dịch để tế bào T tiêu diệt tế bào ung thư.",
      "Phương án này không đúng vì \"Thụ thể CD28 trên tế bào T và phân tử B7 trên tế bào trình diện\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thụ thể CTLA-4 trên tế bào T và phân tử CD80 trên tế bào u\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thụ thể TCR trên tế bào T và kháng nguyên HLA lớp 1 trên tế bào u\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Thuốc chống trầm cảm ba vòng và paracetamol liều cao",
      "Acid base mạnh ion kim loại và các alcol đơn giản",
      "Alcaloid tự nhiên amin bậc ba và dẫn xuất morphin",
      "Các thuốc ngủ an thần giải lo âu nhóm benzodiazepin"
    ],
    "correct": 1,
    "explanation": "Than hoạt tính có diện tích bề mặt khổng lồ (1000 m2/g) hấp phụ rất tốt các phân tử hữu cơ cồng kềnh không phân cực. Tuy nhiên, than hoạt KHÔNG hấp phụ được các ion kim loại nhỏ mang điện tích cao (Sắt, Lithi, Kali), các acid/kiềm ăn mòn mạnh, và các phân tử alcol phân cực nhỏ (Ethanol, Methanol).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Thuốc chống trầm cảm ba vòng và paracetamol liều cao\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Than hoạt tính có diện tích bề mặt khổng lồ (1000 m2/g) hấp phụ rất tốt các phân tử hữu cơ cồng kềnh không phân cực. Tuy nhiên, than hoạt KHÔNG hấp phụ được các ion kim loại nhỏ mang điện tích cao (Sắt, Lithi, Kali), các acid/kiềm ăn mòn mạnh, và các phân tử alcol phân cực nhỏ (Ethanol, Methanol).",
      "Phương án này không đúng vì \"Alcaloid tự nhiên amin bậc ba và dẫn xuất morphin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Các thuốc ngủ an thần giải lo âu nhóm benzodiazepin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Uống quá liều paracetamol trong vòng một giờ đầu ngộ độc",
      "Uống nhầm các loại thuốc hạ huyết áp nhóm chẹn calci",
      "Ngộ độc chất ăn mòn mạnh hoặc hydrocarbon dễ bay hơi",
      "Ngộ độc cấp tính các thuốc chống sốt rét aminoquinolin"
    ],
    "correct": 2,
    "explanation": "Rửa dạ dày hoặc gây nôn khi uống acid/base mạnh sẽ làm chất ăn mòn tiếp xúc lần thứ hai với niêm mạc thực quản và hầu họng, nguy cơ làm thủng thực quản và trung thất tử vong. Uống xăng dầu nếu gây nôn sẽ hít sặc vào đường thở gây viêm phổi hóa chất hoại tử lan tỏa.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Uống quá liều paracetamol trong vòng một giờ đầu ngộ độc\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Uống nhầm các loại thuốc hạ huyết áp nhóm chẹn calci\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Rửa dạ dày hoặc gây nôn khi uống acid/base mạnh sẽ làm chất ăn mòn tiếp xúc lần thứ hai với niêm mạc thực quản và hầu họng, nguy cơ làm thủng thực quản và trung thất tử vong. Uống xăng dầu nếu gây nôn sẽ hít sặc vào đường thở gây viêm phổi hóa chất hoại tử lan tỏa.",
      "Phương án này không đúng vì \"Ngộ độc cấp tính các thuốc chống sốt rét aminoquinolin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Đối kháng thụ thể Adenosine A1 và A2A tại các mô\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Adenosine là chất dẫn truyền thần kinh ức chế tự nhiên (gây buồn ngủ, co phế quản, giảm lọc cầu thận). Theophyllin đối kháng thụ thể Adenosine A1 và A2, gây kích thích thần kinh trung ương (tỉnh táo, mất ngủ, bồn chồn) và giãn tiểu động mạch đến thận gây lợi niệu nhẹ.",
      "Phương án này không đúng vì \"Chẹn kênh calci màng trước synap thần kinh giao cảm\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ức chế tái hấp thu Dopamin tại thể vân\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Hấp thu hoàn toàn qua đường ruột mà không qua gan",
      "Không gắn kết với phân typ thụ thể muscarinic phổi",
      "Chuyển hóa thành chất có hoạt tính chẹn beta một tim",
      "Tách khỏi thụ thể M2 nhanh nhưng tách khỏi M3 rất chậm"
    ],
    "correct": 3,
    "explanation": "Tiotropium gắn vào các thụ thể M1, M2, M3 nhưng tách khỏi thụ thể M2 (thụ thể ức chế tự điều hòa) rất nhanh, trong khi tách khỏi thụ thể M3 (thụ thể gây co thắt phế quản) cực kỳ chậm với T1/2 phân ly lên tới 35 giờ, cho phép dùng liều 1 lần duy nhất trong ngày.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Hấp thu hoàn toàn qua đường ruột mà không qua gan\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Không gắn kết với phân typ thụ thể muscarinic phổi\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Chuyển hóa thành chất có hoạt tính chẹn beta một tim\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Tiotropium gắn vào các thụ thể M1, M2, M3 nhưng tách khỏi thụ thể M2 (thụ thể ức chế tự điều hòa) rất nhanh, trong khi tách khỏi thụ thể M3 (thụ thể gây co thắt phế quản) cực kỳ chậm với T1/2 phân ly lên tới 35 giờ, cho phép dùng liều 1 lần duy nhất trong ngày."
    ]
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
      "Interleukin-5 hoặc thụ thể alpha của Interleukin-5",
      "Thụ thể histamin H4 trên màng tế bào mast phế quản",
      "Enzym cyclooxygenase-2 tại biểu mô đường hô hấp trên",
      "Phức hợp kháng nguyên phù hợp tổ chức bề mặt tế bào"
    ],
    "correct": 0,
    "explanation": "IL-5 là cytokin chủ chốt điều hòa sự biệt hóa, tăng sinh, hoạt hóa và sống sót của bạch cầu ái toan (eosinophil). Mepolizumab trung hòa IL-5 hòa tan, còn Benralizumab gắn lên thụ thể IL-5Ralpha gây độc tế bào phụ thuộc kháng thể (ADCC) tiêu diệt bạch cầu ái toan.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "IL-5 là cytokin chủ chốt điều hòa sự biệt hóa, tăng sinh, hoạt hóa và sống sót của bạch cầu ái toan (eosinophil). Mepolizumab trung hòa IL-5 hòa tan, còn Benralizumab gắn lên thụ thể IL-5Ralpha gây độc tế bào phụ thuộc kháng thể (ADCC) tiêu diệt bạch cầu ái toan.",
      "Phương án này không đúng vì \"Thụ thể histamin H4 trên màng tế bào mast phế quản\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Enzym cyclooxygenase-2 tại biểu mô đường hô hấp trên\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Phức hợp kháng nguyên phù hợp tổ chức bề mặt tế bào\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Cơn đau nửa đầu co thắt mạch máu não kịch phát",
      "Buồn nôn và nôn thai nghén trong giai đoạn đầu thai kỳ",
      "Hội chứng cai rượu cấp tính có biểu hiện sảng run",
      "Viêm da cơ địa dị ứng tiếp xúc tái phát theo mùa"
    ],
    "correct": 1,
    "explanation": "Sự kết hợp giữa Doxylamin (kháng H1 thế hệ 1) và Pyridoxin (Vitamin B6) là phác đồ hàng đầu được FDA phê chuẩn (Diclegis) để điều trị chứng ốm nghén, buồn nôn và nôn thai nghén nặng, đã được chứng minh an toàn tuyệt đối cho thai nhi.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Cơn đau nửa đầu co thắt mạch máu não kịch phát\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Sự kết hợp giữa Doxylamin (kháng H1 thế hệ 1) và Pyridoxin (Vitamin B6) là phác đồ hàng đầu được FDA phê chuẩn (Diclegis) để điều trị chứng ốm nghén, buồn nôn và nôn thai nghén nặng, đã được chứng minh an toàn tuyệt đối cho thai nhi.",
      "Phương án này không đúng vì \"Hội chứng cai rượu cấp tính có biểu hiện sảng run\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Viêm da cơ địa dị ứng tiếp xúc tái phát theo mùa\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Thụ thể Histamin H1 và thụ thể của yếu tố hoạt hóa tiểu cầu PAF",
      "Thụ thể Histamin H1 và thụ thể Bradykinin B2 tại nội mô",
      "Thụ thể Histamin H1 và thụ thể Serotonin 5-HT3 tại tiêu hóa",
      "Thụ thể Histamin H1 và thụ thể Dopamin D2 tại trung tâm nôn"
    ],
    "correct": 0,
    "explanation": "Rupatadin có cơ chế kép độc đáo: vừa đối kháng chọn lọc cao tại thụ thể Histamin H1 ngoại biên, vừa đối kháng thụ thể của Yếu tố hoạt hóa tiểu cầu (Platelet-Activating Factor - PAF), giúp ức chế toàn diện hơn quá trình viêm dị ứng và tăng tính thấm thành mạch.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Rupatadin có cơ chế kép độc đáo: vừa đối kháng chọn lọc cao tại thụ thể Histamin H1 ngoại biên, vừa đối kháng thụ thể của Yếu tố hoạt hóa tiểu cầu (Platelet-Activating Factor - PAF), giúp ức chế toàn diện hơn quá trình viêm dị ứng và tăng tính thấm thành mạch.",
      "Phương án này không đúng vì \"Thụ thể Histamin H1 và thụ thể Bradykinin B2 tại nội mô\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thụ thể Histamin H1 và thụ thể Serotonin 5-HT3 tại tiêu hóa\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thụ thể Histamin H1 và thụ thể Dopamin D2 tại trung tâm nôn\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Tối thiểu mười hai giờ",
      "Từ ba đến bảy ngày",
      "Tối thiểu hai mươi tư giờ",
      "Tối thiểu một tháng tròn"
    ],
    "correct": 1,
    "explanation": "Kháng H1 ức chế phản xạ mày đay và ban đỏ (wheal and flare) tại da khi tiếp xúc dị nguyên. Do đó, bắt buộc phải ngừng thuốc kháng H1 từ 3 đến 7 ngày trước khi tiến hành test lẩy da (skin prick test) để phản ứng da phục hồi bình thường, tránh âm tính giả.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Tối thiểu mười hai giờ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Kháng H1 ức chế phản xạ mày đay và ban đỏ (wheal and flare) tại da khi tiếp xúc dị nguyên. Do đó, bắt buộc phải ngừng thuốc kháng H1 từ 3 đến 7 ngày trước khi tiến hành test lẩy da (skin prick test) để phản ứng da phục hồi bình thường, tránh âm tính giả.",
      "Phương án này không đúng vì \"Tối thiểu hai mươi tư giờ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tối thiểu một tháng tròn\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Alimemazin"
    ],
    "correct": 3,
    "explanation": "Alimemazin (dẫn xuất phenothiazin) và Dimetinden có tác dụng chống ngứa cực mạnh kết hợp an thần nhẹ, được chỉ định ưu tiên để cắt cơn ngứa dữ dội trong viêm da cơ địa, chàm, mày đay, đặc biệt giúp bệnh nhân ngủ ngon về đêm không cào gãi tổn thương da.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Loratadin/Cetirizin/Fexofenadin là thuốc kháng H1 thế hệ 2 không qua hàng rào máu não ở liều điều trị, không gây buồn ngủ và không có tác dụng an thần.",
      "Loratadin/Cetirizin/Fexofenadin là thuốc kháng H1 thế hệ 2 không qua hàng rào máu não ở liều điều trị, không gây buồn ngủ và không có tác dụng an thần.",
      "Loratadin/Cetirizin/Fexofenadin là thuốc kháng H1 thế hệ 2 không qua hàng rào máu não ở liều điều trị, không gây buồn ngủ và không có tác dụng an thần.",
      "Alimemazin (dẫn xuất phenothiazin) và Dimetinden có tác dụng chống ngứa cực mạnh kết hợp an thần nhẹ, được chỉ định ưu tiên để cắt cơn ngứa dữ dội trong viêm da cơ địa, chàm, mày đay, đặc biệt giúp bệnh nhân ngủ ngon về đêm không cào gãi tổn thương da."
    ]
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
      "Emetin",
      "Diloxanid furoat",
      "Tinidazol"
    ],
    "correct": 1,
    "explanation": "Emetin là alkaloid chiết xuất từ rễ cây Ipeca, diệt thể amip ăn hồng cầu ở mô cực mạnh. Tuy nhiên thuốc tích lũy gây độc tim mạch nặng (loạn nhịp tim, hạ HA, suy tim cấp, biến đổi sóng T trên ECG), hiện nay đã hầu như bị thay thế hoàn toàn bởi Metronidazol.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Metronidazol\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Emetin là alkaloid chiết xuất từ rễ cây Ipeca, diệt thể amip ăn hồng cầu ở mô cực mạnh. Tuy nhiên thuốc tích lũy gây độc tim mạch nặng (loạn nhịp tim, hạ HA, suy tim cấp, biến đổi sóng T trên ECG), hiện nay đã hầu như bị thay thế hoàn toàn bởi Metronidazol.",
      "Phương án này không đúng vì \"Diloxanid furoat\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tinidazol\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
  },
  {
    "id": 462,
    "subject": "duocly2",
    "chapter": "Thuốc chống giun sán, amibe",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Thuốc tẩy giun Mebendazol dạng viên nhai 500 mg được khuyến cáo tẩy giun định kỳ trong cộng đồng với chế độ liều như thế nào?",
    "options": [
      "Uống 1 viên 500 mg duy nhất mỗi ngày trong 1 tháng",
      "Uống 1 viên nhai duy nhất 500 mg nhắc lại định kỳ mỗi 6 tháng",
      "Uống 2 viên trước mỗi bữa ăn liên tục trong 3 ngày",
      "Uống 1 viên 500 mg duy nhất kèm dung dịch dầu thầu dầu"
    ],
    "correct": 1,
    "explanation": "Theo khuyến cáo của Bộ Y tế và WHO, tẩy giun định kỳ tại vùng dịch tễ sử dụng Mebendazol 500 mg (hoặc Albendazol 400 mg) liều duy nhất mỗi 6 tháng một lần cho người lớn và trẻ em trên 1-2 tuổi để kiểm soát nhiễm giun truyền qua đất.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Uống 1 viên 500 mg duy nhất mỗi ngày trong 1 tháng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Theo khuyến cáo của Bộ Y tế và WHO, tẩy giun định kỳ tại vùng dịch tễ sử dụng Mebendazol 500 mg (hoặc Albendazol 400 mg) liều duy nhất mỗi 6 tháng một lần cho người lớn và trẻ em trên 1-2 tuổi để kiểm soát nhiễm giun truyền qua đất.",
      "Phương án này không đúng vì \"Uống 2 viên trước mỗi bữa ăn liên tục trong 3 ngày\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Uống 1 viên 500 mg duy nhất kèm dung dịch dầu thầu dầu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Nhựa gắn acid mật trao đổi ion (Cholestyramin, Colestipol)",
      "Thuốc ức chế chọn lọc hấp thu cholesterol tại ruột Ezetimibe",
      "Các thuốc Statin sử dụng ở mức liều điều trị cường độ cao",
      "Chế phẩm dầu cá chứa acid béo omega-3 độ tinh khiết cao"
    ],
    "correct": 2,
    "explanation": "Các thử nghiệm lâm sàng lớn cho thấy dùng Statin cường độ cao kéo dài làm tăng nhẹ tỷ lệ mắc đái tháo đường typ 2 mới khởi phát (khoảng 1 trường hợp trên 255 bệnh nhân điều trị 4 năm), chủ yếu ở người có sẵn các yếu tố nguy cơ của hội chứng chuyển hóa. Lợi ích bảo vệ tim mạch của Statin vượt trội hơn nguy cơ này.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Nhựa gắn acid mật trao đổi ion (Cholestyramin, Colestipol)\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thuốc ức chế chọn lọc hấp thu cholesterol tại ruột Ezetimibe\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Các thử nghiệm lâm sàng lớn cho thấy dùng Statin cường độ cao kéo dài làm tăng nhẹ tỷ lệ mắc đái tháo đường typ 2 mới khởi phát (khoảng 1 trường hợp trên 255 bệnh nhân điều trị 4 năm), chủ yếu ở người có sẵn các yếu tố nguy cơ của hội chứng chuyển hóa. Lợi ích bảo vệ tim mạch của Statin vượt trội hơn nguy cơ này.",
      "Phương án này không đúng vì \"Chế phẩm dầu cá chứa acid béo omega-3 độ tinh khiết cao\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"CYP2D6\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Simvastatin, Lovastatin và Atorvastatin được chuyển hóa chủ yếu qua isoenzym CYP3A4 tại gan và ruột. Khi dùng chung với các thuốc ức chế mạnh CYP3A4 (như Clarithromycin, Ketoconazol, nước bưởi chùm, thuốc ức chế Protease HIV), nồng độ các Statin này trong máu sẽ tăng vọt gây tiêu cơ vân cấp.",
      "Phương án này không đúng vì \"CYP1A2\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"CYP2E1\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Gắn liên kết cộng hóa trị không thuận nghịch với albumin",
      "Không bị lọc qua cầu thận và không bài xuất ở ống thận",
      "Bẫy ion trong lysosome mô và thể tích phân bố rất lớn",
      "Bị ức chế hoàn toàn quá trình thoái biến bởi enzym gan"
    ],
    "correct": 2,
    "explanation": "Chloroquin là một base lưỡng tính thân dầu. Khi vào tế bào, nó bị proton hóa trong môi trường acid của lysosome, không thể khuếch tán ngược ra ngoài (hiện tượng bẫy ion). Thuốc tích lũy sâu trong gan, thận, phổi, da, mắt với Vd khổng lồ, đào thải rất chậm ra nước tiểu trong nhiều tuần đến nhiều tháng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Gắn liên kết cộng hóa trị không thuận nghịch với albumin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Không bị lọc qua cầu thận và không bài xuất ở ống thận\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Chloroquin là một base lưỡng tính thân dầu. Khi vào tế bào, nó bị proton hóa trong môi trường acid của lysosome, không thể khuếch tán ngược ra ngoài (hiện tượng bẫy ion). Thuốc tích lũy sâu trong gan, thận, phổi, da, mắt với Vd khổng lồ, đào thải rất chậm ra nước tiểu trong nhiều tuần đến nhiều tháng.",
      "Phương án này không đúng vì \"Bị ức chế hoàn toàn quá trình thoái biến bởi enzym gan\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Dihydroartemisinin phối hợp với Piperaquin phosphat",
      "Artesunat tiêm tĩnh mạch phối hợp với Quinin sulfat",
      "Artemether đường tiêm bắp phối hợp với Chloroquin",
      "Primaquin phosphat phối hợp với kháng sinh Doxycyclin"
    ],
    "correct": 0,
    "explanation": "Viên phối hợp Dihydroartemisinin (40 mg) + Piperaquin phosphat (320 mg) là phác đồ ACT chuẩn ưu tiên hàng đầu của Bộ Y tế Việt Nam để điều trị sốt rét do P. falciparum chưa biến chứng, uống trong 3 ngày liên tiếp.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Viên phối hợp Dihydroartemisinin (40 mg) + Piperaquin phosphat (320 mg) là phác đồ ACT chuẩn ưu tiên hàng đầu của Bộ Y tế Việt Nam để điều trị sốt rét do P. falciparum chưa biến chứng, uống trong 3 ngày liên tiếp.",
      "Phương án này không đúng vì \"Artesunat tiêm tĩnh mạch phối hợp với Quinin sulfat\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Artemether đường tiêm bắp phối hợp với Chloroquin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Primaquin phosphat phối hợp với kháng sinh Doxycyclin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Xuất hiện tối cấp trong vòng 10 đến 30 phút sau tiêm truyền",
      "Xuất hiện sau khoảng 1 đến 3 tuần kể từ khi kết thúc đợt điều trị",
      "Tiềm ẩn và chỉ bùng phát sau 6 tháng đến 1 năm khỏi bệnh",
      "Chỉ xuất hiện nếu bệnh nhân đồng thời sử dụng đồ uống có cồn"
    ],
    "correct": 1,
    "explanation": "PADH là hiện tượng tan máu muộn xảy ra ở 10-20% bệnh nhân sốt rét ác tính điều trị bằng Artesunat tiêm mạch, xuất hiện từ ngày thứ 7 đến 21. Cơ chế do lách bóc tách xác ký sinh trùng bị artesunat giết chết ra khỏi hồng cầu ('pitting'), các hồng cầu sống sót này có màng yếu và bị tan máu muộn sau 1-3 tuần.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Xuất hiện tối cấp trong vòng 10 đến 30 phút sau tiêm truyền\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "PADH là hiện tượng tan máu muộn xảy ra ở 10-20% bệnh nhân sốt rét ác tính điều trị bằng Artesunat tiêm mạch, xuất hiện từ ngày thứ 7 đến 21. Cơ chế do lách bóc tách xác ký sinh trùng bị artesunat giết chết ra khỏi hồng cầu ('pitting'), các hồng cầu sống sót này có màng yếu và bị tan máu muộn sau 1-3 tuần.",
      "Phương án này không đúng vì \"Tiềm ẩn và chỉ bùng phát sau 6 tháng đến 1 năm khỏi bệnh\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Chỉ xuất hiện nếu bệnh nhân đồng thời sử dụng đồ uống có cồn\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Tăng gấp đôi liều duy trì hàng ngày bù trừ tương tác",
      "Giữ nguyên liều và hướng dẫn uống cách xa nhau ba mươi phút",
      "Ngừng tạm thời thuốc chống thải ghép trong vòng một tháng",
      "Giảm mạnh liều và định lượng nồng độ thuốc trong máu"
    ],
    "correct": 3,
    "explanation": "Ketoconazol là chất ức chế mạnh isoenzym CYP3A4 và P-glycoprotein. Cyclosporin và Tacrolimus chuyển hóa chủ yếu qua CYP3A4; khi dùng chung, nồng độ của chúng trong máu tăng vọt gấp 3-4 lần gây hoại tử ống thận và suy thận cấp. Bắt buộc phải giảm mạnh liều và định lượng nồng độ đáy thường xuyên.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Tăng gấp đôi liều duy trì hàng ngày bù trừ tương tác\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Giữ nguyên liều và hướng dẫn uống cách xa nhau ba mươi phút\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ngừng tạm thời thuốc chống thải ghép trong vòng một tháng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Ketoconazol là chất ức chế mạnh isoenzym CYP3A4 và P-glycoprotein. Cyclosporin và Tacrolimus chuyển hóa chủ yếu qua CYP3A4; khi dùng chung, nồng độ của chúng trong máu tăng vọt gấp 3-4 lần gây hoại tử ống thận và suy thận cấp. Bắt buộc phải giảm mạnh liều và định lượng nồng độ đáy thường xuyên."
    ]
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
      "Giảm hoặc mất hiệu lực diệt khuẩn của penicillin",
      "Tăng mạnh tần suất sốc phản vệ đe dọa tính mạng",
      "Gây đột biến gen chọn lọc tạo chủng vi khuẩn kháng thuốc",
      "Gây ly giải cơ vân cấp tính gây hoại tử ống thận"
    ],
    "correct": 0,
    "explanation": "Penicillin chỉ diệt khuẩn khi vi khuẩn đang trong pha phân chia tích cực (logarithmic phase) để ức chế tổng hợp thành peptidoglycan mới. Kháng sinh kìm khuẩn (Tetracyclin, Erythromycin) ức chế tổng hợp protein làm vi khuẩn ngừng phân chia, khiến Penicillin mất đích tác động, làm giảm hiệu lực điều trị.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Penicillin chỉ diệt khuẩn khi vi khuẩn đang trong pha phân chia tích cực (logarithmic phase) để ức chế tổng hợp thành peptidoglycan mới. Kháng sinh kìm khuẩn (Tetracyclin, Erythromycin) ức chế tổng hợp protein làm vi khuẩn ngừng phân chia, khiến Penicillin mất đích tác động, làm giảm hiệu lực điều trị.",
      "Phương án này không đúng vì \"Tăng mạnh tần suất sốc phản vệ đe dọa tính mạng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Gây đột biến gen chọn lọc tạo chủng vi khuẩn kháng thuốc\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Gây ly giải cơ vân cấp tính gây hoại tử ống thận\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
  },
  {
    "id": 470,
    "subject": "duocly2",
    "chapter": "KTGHP",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Bệnh nhân đang dùng thuốc giảm đau dạng tiền chất (Codein) nhưng không thấy thuyên giảm đau sau khi được kê thêm một thuốc điều trị trầm cảm. Hoạt chất gây ức chế mạnh isoenzym CYP2D6 làm giảm tạo morphin có hoạt tính là:",
    "options": [
      "Fluoxetin",
      "Sertralin",
      "Citalopram",
      "Venlafaxin"
    ],
    "correct": 0,
    "explanation": "Codein và Tramadol là các tiền chất cần enzym CYP2D6 ở gan chuyển hóa (khử methyl) thành dạng có hoạt tính giảm đau mạnh (Morphin và O-desmethyltramadol). Fluoxetin và Paroxetin ức chế mạnh CYP2D6, ngăn cản sự chuyển hóa này làm bệnh nhân không có cảm giác giảm đau.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Codein và Tramadol là các tiền chất cần enzym CYP2D6 ở gan chuyển hóa (khử methyl) thành dạng có hoạt tính giảm đau mạnh (Morphin và O-desmethyltramadol). Fluoxetin và Paroxetin ức chế mạnh CYP2D6, ngăn cản sự chuyển hóa này làm bệnh nhân không có cảm giác giảm đau.",
      "Phương án này không đúng vì \"Sertralin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Citalopram\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Venlafaxin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Ngừng thuốc trước phẫu thuật ít nhất hai mươi tư giờ",
      "Tăng liều lên gấp hai đến ba lần liều duy trì",
      "Giữ nguyên liều uống kết hợp truyền glucose ưu trương",
      "Ngừng corticoid và thay bằng kháng viêm không steroid"
    ],
    "correct": 1,
    "explanation": "Bình thường khi bị stress nặng (phẫu thuật, chấn thương), tuyến thượng thận tiết cortisol tăng vọt gấp 5-10 lần để duy trì huyết áp và chuyển hóa. Ở người teo thượng thận do corticoid, cơ thể mất khả năng này; do đó bắt buộc phải tiêm Hydrocortison liều cao (liều stress 100-300mg/ngày) để tránh tử vong.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Ngừng thuốc trước phẫu thuật ít nhất hai mươi tư giờ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Bình thường khi bị stress nặng (phẫu thuật, chấn thương), tuyến thượng thận tiết cortisol tăng vọt gấp 5-10 lần để duy trì huyết áp và chuyển hóa. Ở người teo thượng thận do corticoid, cơ thể mất khả năng này; do đó bắt buộc phải tiêm Hydrocortison liều cao (liều stress 100-300mg/ngày) để tránh tử vong.",
      "Phương án này không đúng vì \"Giữ nguyên liều uống kết hợp truyền glucose ưu trương\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ngừng corticoid và thay bằng kháng viêm không steroid\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Có tác dụng hạ huyết áp và làm giảm thể trọng rõ rệt",
      "Không bao giờ gây bốc hỏa hay chuột rút ở hai chi dưới",
      "Không làm gia tăng nguy cơ ung thư nội mạc tử cung",
      "Chỉ cần dùng liều duy nhất tiêm dưới da mỗi năm một lần"
    ],
    "correct": 2,
    "explanation": "Raloxifene có tác dụng chủ vận Estrogen trên xương (tăng mật độ xương) và trên chuyển hóa lipid; nhưng đối kháng Estrogen ở cả mô vú VÀ nội mạc tử cung, do đó không kích thích tăng sinh nội mạc tử cung và không làm tăng nguy cơ ung thư nội mạc tử cung như Tamoxifen.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Có tác dụng hạ huyết áp và làm giảm thể trọng rõ rệt\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Không bao giờ gây bốc hỏa hay chuột rút ở hai chi dưới\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Raloxifene có tác dụng chủ vận Estrogen trên xương (tăng mật độ xương) và trên chuyển hóa lipid; nhưng đối kháng Estrogen ở cả mô vú VÀ nội mạc tử cung, do đó không kích thích tăng sinh nội mạc tử cung và không làm tăng nguy cơ ung thư nội mạc tử cung như Tamoxifen.",
      "Phương án này không đúng vì \"Chỉ cần dùng liều duy nhất tiêm dưới da mỗi năm một lần\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Phá hủy trực tiếp kho dự trữ thyroglobulin ở tuyến giáp",
      "Chẹn chọn lọc trên thụ thể beta một giao cảm ở cơ tim",
      "Kích hoạt hệ bổ thể tiêu diệt kháng thể kháng giáp TRAb",
      "Ức chế enzym năm phẩy deiodinase ở mô ngoại vi"
    ],
    "correct": 3,
    "explanation": "T3 có hoạt tính sinh học mạnh gấp 4-5 lần T4. PTU có ưu thế độc nhất là ức chế enzym 5'-deiodinase ở mô ngoại vi, ngăn cản sự chuyển đổi từ T4 thành T3 ở gan, thận và tim, làm giảm nhanh nồng độ T3 lưu hành trong cơn bão giáp; trong khi Thiamazol không có tác dụng ức chế ngoại vi này.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Phá hủy trực tiếp kho dự trữ thyroglobulin ở tuyến giáp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Chẹn chọn lọc trên thụ thể beta một giao cảm ở cơ tim\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích hoạt hệ bổ thể tiêu diệt kháng thể kháng giáp TRAb\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "T3 có hoạt tính sinh học mạnh gấp 4-5 lần T4. PTU có ưu thế độc nhất là ức chế enzym 5'-deiodinase ở mô ngoại vi, ngăn cản sự chuyển đổi từ T4 thành T3 ở gan, thận và tim, làm giảm nhanh nồng độ T3 lưu hành trong cơn bão giáp; trong khi Thiamazol không có tác dụng ức chế ngoại vi này."
    ]
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
      "Khởi phát nhanh tác dụng ngắn uống ngay trước bữa ăn",
      "Thời gian bán thải kéo dài trên bốn mươi tám giờ dùng",
      "Không chuyển hóa qua gan và không bài xuất qua thận",
      "Kích thích phân giải lipid mà không tăng tiết insulin"
    ],
    "correct": 0,
    "explanation": "Meglitinide cũng đóng kênh K_ATP nhưng ở vị trí khác Sulfonylurea, khởi phát tác dụng trong 15-30 phút và T1/2 rất ngắn (< 1-1.5 giờ). Bệnh nhân tuân thủ nguyên tắc: 'Ăn một bữa - uống một viên, không ăn - không uống', giúp kiểm soát chính xác đỉnh đường huyết sau ăn và giảm nguy cơ hạ đường huyết xa bữa ăn.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Meglitinide cũng đóng kênh K_ATP nhưng ở vị trí khác Sulfonylurea, khởi phát tác dụng trong 15-30 phút và T1/2 rất ngắn (< 1-1.5 giờ). Bệnh nhân tuân thủ nguyên tắc: 'Ăn một bữa - uống một viên, không ăn - không uống', giúp kiểm soát chính xác đỉnh đường huyết sau ăn và giảm nguy cơ hạ đường huyết xa bữa ăn.",
      "Phương án này không đúng vì \"Thời gian bán thải kéo dài trên bốn mươi tám giờ dùng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Không chuyển hóa qua gan và không bài xuất qua thận\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích thích phân giải lipid mà không tăng tiết insulin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Insulin tác dụng nhanh mười đơn vị tiêm bắp sâu",
      "Glucagon một miligam tiêm bắp hoặc dưới da",
      "Dung dịch natri clorid không phẩy chín phần trăm",
      "Metformin năm trăm miligam tiêm bắp sâu khẩn cấp"
    ],
    "correct": 1,
    "explanation": "Khi bệnh nhân hạ đường huyết nặng mất ý thức không thể uống đường, Glucagon 1mg tiêm bắp/tiêm dưới da (hoặc xịt mũi Baqsimi) là thuốc cấp cứu số 1: kích thích thụ thể glucagon ở gan ly giải glycogen phóng thích glucose vào máu trong vòng 10-15 phút giúp bệnh nhân tỉnh lại.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Insulin tác dụng nhanh mười đơn vị tiêm bắp sâu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Khi bệnh nhân hạ đường huyết nặng mất ý thức không thể uống đường, Glucagon 1mg tiêm bắp/tiêm dưới da (hoặc xịt mũi Baqsimi) là thuốc cấp cứu số 1: kích thích thụ thể glucagon ở gan ly giải glycogen phóng thích glucose vào máu trong vòng 10-15 phút giúp bệnh nhân tỉnh lại.",
      "Phương án này không đúng vì \"Dung dịch natri clorid không phẩy chín phần trăm\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Metformin năm trăm miligam tiêm bắp sâu khẩn cấp\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Argatroban hoặc Bivalirudin",
      "Enoxaparin hoặc Dalteparin",
      "Danaparoid phối hợp Fondaparinux",
      "Heparin tiêu chuẩn phối hợp Protamin"
    ],
    "correct": 0,
    "explanation": "Trong HIT, kháng thể có phản ứng chéo rất cao (> 90%) với LMWH nên cấm dùng LMWH. Argatroban và Bivalirudin là các thuốc ức chế trực tiếp Thrombin (DTI) có cấu trúc tổng hợp hoàn toàn khác heparin, không phản ứng chéo với kháng thể HIT, là lựa chọn số 1 thay thế.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Trong HIT, kháng thể có phản ứng chéo rất cao (> 90%) với LMWH nên cấm dùng LMWH. Argatroban và Bivalirudin là các thuốc ức chế trực tiếp Thrombin (DTI) có cấu trúc tổng hợp hoàn toàn khác heparin, không phản ứng chéo với kháng thể HIT, là lựa chọn số 1 thay thế.",
      "Phương án này không đúng vì \"Enoxaparin hoặc Dalteparin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Danaparoid phối hợp Fondaparinux\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Heparin tiêu chuẩn phối hợp Protamin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Gắn trực tiếp lên vị trí hoạt động của phân tử thrombin",
      "Gắn chọn lọc vào antithrombin III ức chế chọn lọc yếu tố Xa",
      "Ức chế trực tiếp yếu tố mô ngăn tạo phức hợp con đường ngoại sinh",
      "Kích thích nội mô tăng tổng hợp thrombomodulin hoạt hóa protein C"
    ],
    "correct": 1,
    "explanation": "Fondaparinux là chuỗi 5 gốc đường (pentasaccharide) tổng hợp giống hệt đoạn gắn AT-III của heparin. Do chuỗi quá ngắn, nó chỉ làm AT-III biến đổi cấu hình để bất hoạt Yếu tố Xa, hoàn toàn không đủ độ dài để ức chế Thrombin (IIa). Thuốc không gây hội chứng HIT.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Gắn trực tiếp lên vị trí hoạt động của phân tử thrombin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Fondaparinux là chuỗi 5 gốc đường (pentasaccharide) tổng hợp giống hệt đoạn gắn AT-III của heparin. Do chuỗi quá ngắn, nó chỉ làm AT-III biến đổi cấu hình để bất hoạt Yếu tố Xa, hoàn toàn không đủ độ dài để ức chế Thrombin (IIa). Thuốc không gây hội chứng HIT.",
      "Phương án này không đúng vì \"Ức chế trực tiếp yếu tố mô ngăn tạo phức hợp con đường ngoại sinh\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kích thích nội mô tăng tổng hợp thrombomodulin hoạt hóa protein C\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Biotin",
      "Vitamin B1",
      "Vitamin B6",
      "Vitamin B12"
    ],
    "correct": 0,
    "explanation": "Avidin là một glycoprotein trong lòng trắng trứng sống, có ái lực liên kết với Biotin mạnh nhất trong tự nhiên (hằng số phân ly Kd ~ 10^-15 M). Khi ăn nhiều trứng sống, avidin giam giữ biotin không cho hấp thu qua ruột gây rụng tóc, viêm da tróc vảy và rối loạn thần kinh.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Avidin là một glycoprotein trong lòng trắng trứng sống, có ái lực liên kết với Biotin mạnh nhất trong tự nhiên (hằng số phân ly Kd ~ 10^-15 M). Khi ăn nhiều trứng sống, avidin giam giữ biotin không cho hấp thu qua ruột gây rụng tóc, viêm da tróc vảy và rối loạn thần kinh.",
      "Phương án này không đúng vì \"Vitamin B1\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Vitamin B6\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Vitamin B12\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Lycopene\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Lutein\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Beta-Caroten\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Beta-Caroten là carotenoid provitamin A quan trọng nhất trong thực vật (cà rốt, bí đỏ, gấc). Tại biểu mô ruột non, enzym beta-caroten 15,15'-dioxygenase cắt đôi phân tử beta-caroten ở liên kết trung tâm tạo ra 2 phân tử Retinal (sau đó khử thành Retinol)."
    ]
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
      "Dòng tế bào tiền thân hồng cầu tại hệ thống tủy xương",
      "Dòng tế bào nhân khổng lồ tăng sinh tiểu cầu",
      "Dòng bạch cầu lympho tăng cường miễn dịch dịch thể",
      "Dòng bạch cầu đơn nhân và đại thực bào chống nhiễm trùng"
    ],
    "correct": 1,
    "explanation": "Oprelvekin (rhIL-11) và Romiplostim / Eltrombopag (chất chủ vận thụ thể thrombopoietin) kích thích tế bào nhân khổng lồ tại tủy xương tăng sinh và trưởng thành, thúc đẩy sản xuất tiểu cầu, được dùng phòng ngừa và điều trị hạ tiểu cầu nặng do hóa trị hoặc xuất huyết giảm tiểu cầu miễn dịch (ITP).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Dòng tế bào tiền thân hồng cầu tại hệ thống tủy xương\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Oprelvekin (rhIL-11) và Romiplostim / Eltrombopag (chất chủ vận thụ thể thrombopoietin) kích thích tế bào nhân khổng lồ tại tủy xương tăng sinh và trưởng thành, thúc đẩy sản xuất tiểu cầu, được dùng phòng ngừa và điều trị hạ tiểu cầu nặng do hóa trị hoặc xuất huyết giảm tiểu cầu miễn dịch (ITP).",
      "Phương án này không đúng vì \"Dòng bạch cầu lympho tăng cường miễn dịch dịch thể\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Dòng bạch cầu đơn nhân và đại thực bào chống nhiễm trùng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Kích thích tủy xương tăng cường bắt giữ sắt tự do tuần hoàn",
      "Tăng tiết acid dịch vị dạ dày hòa tan muối sắt khó hấp thu",
      "Gắn vào ferroportin gây thoái biến kênh xuất bào giữ sắt nội bào",
      "Thúc đẩy vận chuyển ion sắt qua hàng rào máu não vào mô não"
    ],
    "correct": 2,
    "explanation": "Ferroportin là kênh duy nhất đưa sắt từ trong tế bào biểu mô ruột và đại thực bào ra máu. Hepcidin gắn vào Ferroportin gây nhập bào và phân hủy kênh này, giam giữ sắt trong tế bào không cho vào máu. Trong viêm mạn tính, Hepcidin tăng cao gây ra bệnh cảnh 'Thiếu máu trong bệnh mạn tính'.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Kích thích tủy xương tăng cường bắt giữ sắt tự do tuần hoàn\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tăng tiết acid dịch vị dạ dày hòa tan muối sắt khó hấp thu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Ferroportin là kênh duy nhất đưa sắt từ trong tế bào biểu mô ruột và đại thực bào ra máu. Hepcidin gắn vào Ferroportin gây nhập bào và phân hủy kênh này, giam giữ sắt trong tế bào không cho vào máu. Trong viêm mạn tính, Hepcidin tăng cao gây ra bệnh cảnh 'Thiếu máu trong bệnh mạn tính'.",
      "Phương án này không đúng vì \"Thúc đẩy vận chuyển ion sắt qua hàng rào máu não vào mô não\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Dùng đường tiêm bắp định kỳ sáu tháng một lần kéo dài",
      "Không bao giờ gây độc tính trên tế bào gan và men gan",
      "Giảm độc tính trên thận và giảm nguy cơ loãng xương",
      "Tiêu diệt hoàn toàn virus HIV khỏi bộ gen người bệnh"
    ],
    "correct": 2,
    "explanation": "TDF bị thủy phân sớm trong huyết tương giải phóng nồng độ tenofovir tự do trong máu cao, gây tổn thương ống thận (hội chứng Fanconi) và mất mật độ khoáng của xương. TAF bền vững trong máu, chỉ được kích hoạt nội bào nhờ cathepsin A, do đó liều dùng thấp hơn 10 lần mà hiệu lực tương đương và an toàn cho thận, xương.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Dùng đường tiêm bắp định kỳ sáu tháng một lần kéo dài\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Không bao giờ gây độc tính trên tế bào gan và men gan\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "TDF bị thủy phân sớm trong huyết tương giải phóng nồng độ tenofovir tự do trong máu cao, gây tổn thương ống thận (hội chứng Fanconi) và mất mật độ khoáng của xương. TAF bền vững trong máu, chỉ được kích hoạt nội bào nhờ cathepsin A, do đó liều dùng thấp hơn 10 lần mà hiệu lực tương đương và an toàn cho thận, xương.",
      "Phương án này không đúng vì \"Tiêu diệt hoàn toàn virus HIV khỏi bộ gen người bệnh\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
  },
  {
    "id": 483,
    "subject": "duocly2",
    "chapter": "Thuốc kháng virus",
    "level": "Thông hiểu",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Một bệnh nhân HIV kháng đa thuốc cần bổ sung hoạt chất đường tiêm dưới da có cơ chế gắn chọn lọc vào glycoprotein gp41 nhằm ngăn cản sự hòa màng lipid giữa vỏ virus và màng tế bào lympho T-CD4. Phân tử đó là:",
    "options": [
      "Maraviroc",
      "Ibalizumab",
      "Fostemsavir",
      "Enfuvirtid"
    ],
    "correct": 3,
    "explanation": "Enfuvirtid (T-20) là một peptid tổng hợp gồm 36 acid amin. Thuốc liên kết chọn lọc với tiểu đơn vị vỏ ngoài gp41 của HIV-1, ngăn cản gp41 gập lại thành cấu trúc 6 chuỗi xoắn (six-helix bundle), từ đó ngăn màng virus hòa nhập với màng tế bào lympho T CD4+.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Maraviroc\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ibalizumab\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Fostemsavir\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Enfuvirtid (T-20) là một peptid tổng hợp gồm 36 acid amin. Thuốc liên kết chọn lọc với tiểu đơn vị vỏ ngoài gp41 của HIV-1, ngăn cản gp41 gập lại thành cấu trúc 6 chuỗi xoắn (six-helix bundle), từ đó ngăn màng virus hòa nhập với màng tế bào lympho T CD4+."
    ]
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
      "Capecitabin",
      "Cyclophosphamid",
      "Doxorubicin",
      "Methotrexat"
    ],
    "correct": 0,
    "explanation": "Capecitabin hấp thu qua ruột và qua 3 bước enzym tại gan và mô u để giải phóng 5-FU. Một phần thuốc bài tiết qua tuyến mồ hôi ở lòng bàn tay và bàn chân, gây độc tế bào sừng và phản ứng viêm mạch tại chỗ, biểu hiện hội chứng bàn tay - bàn chân gây đau đớn, nứt nẻ và tróc da.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Capecitabin hấp thu qua ruột và qua 3 bước enzym tại gan và mô u để giải phóng 5-FU. Một phần thuốc bài tiết qua tuyến mồ hôi ở lòng bàn tay và bàn chân, gây độc tế bào sừng và phản ứng viêm mạch tại chỗ, biểu hiện hội chứng bàn tay - bàn chân gây đau đớn, nứt nẻ và tróc da.",
      "Phương án này không đúng vì \"Cyclophosphamid\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Doxorubicin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Methotrexat\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Hạ kali máu hạ natri máu tăng calci máu và hạ glucose",
      "Tăng acid uric tăng kali tăng phosphat và hạ calci máu",
      "Nhiễm kiềm chuyển hóa tăng natri máu và giảm phosphat",
      "Tăng protein máu hạ bilirubin máu và tăng natri máu"
    ],
    "correct": 1,
    "explanation": "Khi hàng tỷ tế bào ung thư bị tiêu diệt đồng loạt, các chất nội bào tràn vào máu: Acid nucleic thoái hóa thành Acid Uric tăng vọt gây tắc ống thận suy thận cấp; Kali nội bào tràn ra gây tăng K+ máu nguy cơ ngừng tim; Phosphat nội bào tràn ra gắn Calci tạo kết tủa phosphat calci gây hạ Ca2+ máu co giật.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Hạ kali máu hạ natri máu tăng calci máu và hạ glucose\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Khi hàng tỷ tế bào ung thư bị tiêu diệt đồng loạt, các chất nội bào tràn vào máu: Acid nucleic thoái hóa thành Acid Uric tăng vọt gây tắc ống thận suy thận cấp; Kali nội bào tràn ra gây tăng K+ máu nguy cơ ngừng tim; Phosphat nội bào tràn ra gắn Calci tạo kết tủa phosphat calci gây hạ Ca2+ máu co giật.",
      "Phương án này không đúng vì \"Nhiễm kiềm chuyển hóa tăng natri máu và giảm phosphat\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tăng protein máu hạ bilirubin máu và tăng natri máu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Ngộ độc thuốc hạ đường huyết nhóm sulfonylurea kéo dài",
      "Ngộ độc thuốc kháng sinh diệt khuẩn nhóm cephalosporin",
      "Ngộ độc thuốc gây tê cục bộ có tính thân dầu rất cao",
      "Ngộ độc thuốc tiêu sợi huyết tái tổ hợp gây chảy máu"
    ],
    "correct": 2,
    "explanation": "Bupivacain là thuốc gây tê cực kỳ thân dầu, gắn chặt vào kênh natri cơ tim gây trụy mạch và ngừng tim kháng sốc điện. Truyền nhũ dịch mỡ Intralipid 20% tạo một khoang lipid khổng lồ trong lòng mạch ('Lipid sink'), hút sạch các phân tử thuốc gây tê thân dầu ra khỏi mô cơ tim, phục hồi chức năng co bóp tim nhanh chóng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Ngộ độc thuốc hạ đường huyết nhóm sulfonylurea kéo dài\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ngộ độc thuốc kháng sinh diệt khuẩn nhóm cephalosporin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Bupivacain là thuốc gây tê cực kỳ thân dầu, gắn chặt vào kênh natri cơ tim gây trụy mạch và ngừng tim kháng sốc điện. Truyền nhũ dịch mỡ Intralipid 20% tạo một khoang lipid khổng lồ trong lòng mạch ('Lipid sink'), hút sạch các phân tử thuốc gây tê thân dầu ra khỏi mô cơ tim, phục hồi chức năng co bóp tim nhanh chóng.",
      "Phương án này không đúng vì \"Ngộ độc thuốc tiêu sợi huyết tái tổ hợp gây chảy máu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Thyroxin tiêm tĩnh mạch chậm",
      "Oxytocin truyền tĩnh mạch liên tục",
      "Aldosteron tiêm bắp sâu định kỳ",
      "Glucagon tiêm tĩnh mạch liều cao"
    ],
    "correct": 3,
    "explanation": "Glucagon gắn vào thụ thể glucagon riêng biệt trên màng tế bào cơ tim, kích hoạt adenylcyclase độc lập không phụ thuộc thụ thể beta-1, làm tăng cAMP nội bào, tăng dòng Ca2+ giúp tăng nhịp tim và lực co bóp. Liệu pháp Insulin liều cao kết hợp truyền glucose (HIE) cũng là phác đồ hàng đầu cung cấp năng lượng cho cơ tim.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Thyroxin tiêm tĩnh mạch chậm\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Oxytocin truyền tĩnh mạch liên tục\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Aldosteron tiêm bắp sâu định kỳ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Glucagon gắn vào thụ thể glucagon riêng biệt trên màng tế bào cơ tim, kích hoạt adenylcyclase độc lập không phụ thuộc thụ thể beta-1, làm tăng cAMP nội bào, tăng dòng Ca2+ giúp tăng nhịp tim và lực co bóp. Liệu pháp Insulin liều cao kết hợp truyền glucose (HIE) cũng là phác đồ hàng đầu cung cấp năng lượng cho cơ tim."
    ]
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
      "Kháng nguyên HRP-2 và enzym pLDH",
      "Kháng nguyên vỏ bề mặt virus HBsAg",
      "Kháng nguyên protein Troponin I tim",
      "Kháng nguyên thụ thể bề mặt CD4 T"
    ],
    "correct": 0,
    "explanation": "Các test chẩn đoán nhanh sốt rét (RDTs) phát hiện kháng nguyên HRP-2 (đặc hiệu cao cho P. falciparum) hoặc enzym lactate dehydrogenase của ký sinh trùng (pLDH) và aldolase (phát hiện cả P. vivax, P. malariae, P. ovale), cho kết quả nhanh sau 15 phút tại thực địa.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Các test chẩn đoán nhanh sốt rét (RDTs) phát hiện kháng nguyên HRP-2 (đặc hiệu cao cho P. falciparum) hoặc enzym lactate dehydrogenase của ký sinh trùng (pLDH) và aldolase (phát hiện cả P. vivax, P. malariae, P. ovale), cho kết quả nhanh sau 15 phút tại thực địa.",
      "Phương án này không đúng vì \"Kháng nguyên vỏ bề mặt virus HBsAg\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kháng nguyên protein Troponin I tim\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Kháng nguyên thụ thể bề mặt CD4 T\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Thuốc Quinin sulfat",
      "Thuốc Mefloquin hydroclorid",
      "Thuốc Mepacrin",
      "Thuốc Artemisinin tự nhiên"
    ],
    "correct": 2,
    "explanation": "Mepacrin (Quinacrin) là thuốc chống sốt rét dẫn xuất acridin cũ, có màu vàng sáng huỳnh quang. Thuốc nhuộm vàng da, củng mạc mắt (dễ nhầm với hoàng đảm) và làm nước tiểu có màu vàng chanh đậm, kèm theo vị đắng rất khó chịu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Thuốc Quinin sulfat\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Thuốc Mefloquin hydroclorid\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Mepacrin (Quinacrin) là thuốc chống sốt rét dẫn xuất acridin cũ, có màu vàng sáng huỳnh quang. Thuốc nhuộm vàng da, củng mạc mắt (dễ nhầm với hoàng đảm) và làm nước tiểu có màu vàng chanh đậm, kèm theo vị đắng rất khó chịu.",
      "Phương án này không đúng vì \"Thuốc Artemisinin tự nhiên\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
  },
  {
    "id": 490,
    "subject": "duocly2",
    "chapter": "KTGHP",
    "level": "Nhận biết",
    "source": "BYT",
    "sourceName": "Giáo trình Dược lý 2 Bộ Y tế",
    "question": "Trong phác đồ kháng khuẩn hiệp đồng tác động vào hai chặng liên tiếp tổng hợp acid folic (viên Co-trimoxazol), để đạt được tỷ lệ hiệp đồng 1:5 trong máu thì tỷ lệ phối hợp nồng độ sulfamethoxazol và trimethoprim trong huyết tương phải duy trì ở mức bao nhiêu?",
    "options": [
      "Tỷ lệ năm sulfamethoxazol trên một trimethoprim",
      "Tỷ lệ hai mươi sulfamethoxazol trên một trimethoprim",
      "Tỷ lệ mười sulfamethoxazol trên một trimethoprim",
      "Tỷ lệ bốn mươi sulfamethoxazol trên một trimethoprim"
    ],
    "correct": 1,
    "explanation": "Mặc dù viên thuốc Co-trimoxazol được bào chế theo tỷ lệ 5:1 (400mg SMX + 80mg TMP), do Trimethoprim có thể tích phân bố lớn hơn nhiều và tan tốt hơn trong lipid, nên tỷ lệ nồng độ thuốc tự do trong huyết tương đạt được ở mức 20:1 - đây là tỷ lệ vàng đạt hiệu lực diệt khuẩn hiệp đồng tối ưu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Tỷ lệ năm sulfamethoxazol trên một trimethoprim\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Mặc dù viên thuốc Co-trimoxazol được bào chế theo tỷ lệ 5:1 (400mg SMX + 80mg TMP), do Trimethoprim có thể tích phân bố lớn hơn nhiều và tan tốt hơn trong lipid, nên tỷ lệ nồng độ thuốc tự do trong huyết tương đạt được ở mức 20:1 - đây là tỷ lệ vàng đạt hiệu lực diệt khuẩn hiệp đồng tối ưu.",
      "Phương án này không đúng vì \"Tỷ lệ mười sulfamethoxazol trên một trimethoprim\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tỷ lệ bốn mươi sulfamethoxazol trên một trimethoprim\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Gây điếc tai tiếp nhận và giảm thính lực vĩnh viễn",
      "Gây xơ hóa cơ tim thất trái gây suy tim sung huyết mạn",
      "Gây độc tính trên thận và suy giảm mức lọc cầu thận",
      "Gây hoại tử biểu mô giác mạc mắt và mất thị lực sớm"
    ],
    "correct": 2,
    "explanation": "Ritonavir ức chế các protein vận chuyển bài tiết Tenofovir ở ống thận, làm tăng nồng độ Tenofovir tích lũy trong tế bào biểu mô ống lượn gần lên gấp nhiều lần. Điều này dẫn đến tổn thương ty thể tế bào ống thận, gây hội chứng Fanconi mắc phải và suy thận tiến triển.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Gây điếc tai tiếp nhận và giảm thính lực vĩnh viễn\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Gây xơ hóa cơ tim thất trái gây suy tim sung huyết mạn\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Ritonavir ức chế các protein vận chuyển bài tiết Tenofovir ở ống thận, làm tăng nồng độ Tenofovir tích lũy trong tế bào biểu mô ống lượn gần lên gấp nhiều lần. Điều này dẫn đến tổn thương ty thể tế bào ống thận, gây hội chứng Fanconi mắc phải và suy thận tiến triển.",
      "Phương án này không đúng vì \"Gây hoại tử biểu mô giác mạc mắt và mất thị lực sớm\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Sau khoảng mười hai giờ dùng thuốc lặp lại",
      "Sau khoảng hai mươi tư giờ dùng thuốc liên tục",
      "Sau khoảng ba mươi ngày dùng thuốc đều đặn",
      "Sau khoảng bốn mươi tám đến sáu mươi giờ"
    ],
    "correct": 3,
    "explanation": "Theo dược động học hằng định: Khi dùng liều lặp lại với khoảng cách liều đều đặn, nồng độ thuốc tích lũy và đạt trạng thái cân bằng (Css - khi lượng thuốc vào bằng lượng thải trừ) sau khoảng 4 đến 5 lần T1/2 (đạt 93.75% ở 4 T1/2 và 96.87% ở 5 T1/2). Với T1/2 = 12h, cần 48-60 giờ để đạt Css.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Sau khoảng mười hai giờ dùng thuốc lặp lại\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Sau khoảng hai mươi tư giờ dùng thuốc liên tục\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Sau khoảng ba mươi ngày dùng thuốc đều đặn\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Theo dược động học hằng định: Khi dùng liều lặp lại với khoảng cách liều đều đặn, nồng độ thuốc tích lũy và đạt trạng thái cân bằng (Css - khi lượng thuốc vào bằng lượng thải trừ) sau khoảng 4 đến 5 lần T1/2 (đạt 93.75% ở 4 T1/2 và 96.87% ở 5 T1/2). Với T1/2 = 12h, cần 48-60 giờ để đạt Css."
    ]
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
      "Empagliflozin",
      "Sitagliptin",
      "Gliclazid",
      "Pioglitazone"
    ],
    "correct": 0,
    "explanation": "Năm 2015, nghiên cứu EMPA-REG OUTCOME chứng minh Empagliflozin làm giảm 38% tử vong do nguyên nhân tim mạch và giảm 35% nguy cơ nhập viện do suy tim ở bệnh nhân ĐTĐ typ 2 có bệnh tim mạch xơ vữa, mở ra kỷ nguyên dùng ức chế SGLT-2 điều trị suy tim và bảo vệ thận.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Năm 2015, nghiên cứu EMPA-REG OUTCOME chứng minh Empagliflozin làm giảm 38% tử vong do nguyên nhân tim mạch và giảm 35% nguy cơ nhập viện do suy tim ở bệnh nhân ĐTĐ typ 2 có bệnh tim mạch xơ vữa, mở ra kỷ nguyên dùng ức chế SGLT-2 điều trị suy tim và bảo vệ thận.",
      "Phương án này không đúng vì \"Sitagliptin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Gliclazid\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Pioglitazone\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Metformin",
      "Linagliptin",
      "Dulaglutid",
      "Insulin glargine"
    ],
    "correct": 0,
    "explanation": "Theo khuyến cáo của ADA và KDIGO: Metformin chống chỉ định tuyệt đối khi eGFR < 30 mL/phút/1.73m2 vì nguy cơ tích lũy thuốc gây nhiễm toan acid lactic tử vong. Khi eGFR từ 30-44 mL/phút, liều tối đa của Metformin không quá 1000 mg/ngày và không được khởi đầu mới.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Theo khuyến cáo của ADA và KDIGO: Metformin chống chỉ định tuyệt đối khi eGFR < 30 mL/phút/1.73m2 vì nguy cơ tích lũy thuốc gây nhiễm toan acid lactic tử vong. Khi eGFR từ 30-44 mL/phút, liều tối đa của Metformin không quá 1000 mg/ngày và không được khởi đầu mới.",
      "Phương án này không đúng vì \"Linagliptin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Dulaglutid\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Insulin glargine\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Heparin tiêu chuẩn phối hợp truyền protamin sulfat",
      "Vitamin K1 phối hợp phức hợp prothrombin PCC",
      "Dung dịch natri clorid phối hợp tiêm furosemid",
      "Sắt sulfat đường uống phối hợp truyền khối tiểu cầu"
    ],
    "correct": 1,
    "explanation": "Vitamin K1 đường tĩnh mạch mất ít nhất 6-24 giờ để gan tổng hợp lại các yếu tố đông máu mới. Do đó, trong xuất huyết đe dọa tính mạng, bắt buộc phải truyền ngay PCC (Phức hợp Prothrombin cô đặc chứa sẵn yếu tố II, VII, IX, X) hoặc FFP để đảo ngược tình trạng đông máu tức thì, kết hợp tiêm Vitamin K1 IV chậm.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Heparin dùng đường tiêm và tác dụng qua Antithrombin III theo dõi bằng aPTT, không phải thuốc uống kháng vitamin K theo dõi bằng PT/INR.",
      "Vitamin K1 đường tĩnh mạch mất ít nhất 6-24 giờ để gan tổng hợp lại các yếu tố đông máu mới. Do đó, trong xuất huyết đe dọa tính mạng, bắt buộc phải truyền ngay PCC (Phức hợp Prothrombin cô đặc chứa sẵn yếu tố II, VII, IX, X) hoặc FFP để đảo ngược tình trạng đông máu tức thì, kết hợp tiêm Vitamin K1 IV chậm.",
      "Phương án này không đúng vì \"Dung dịch natri clorid phối hợp tiêm furosemid\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Sắt sulfat đường uống phối hợp truyền khối tiểu cầu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Ức chế chọn lọc enzym cyclooxygenase hai nội mô",
      "Tăng cường giáng hóa nồng độ fibrinogen tuần hoàn",
      "Ức chế Phosphodiesterase và tăng adenosin nội bào",
      "Kích hoạt thụ thể gắn thrombin trên màng tiểu cầu"
    ],
    "correct": 2,
    "explanation": "Dipyridamol ức chế enzym phosphodiesterase (làm tăng cAMP nội bào tiểu cầu) và ức chế bắt giữ adenosin ở hồng cầu (adenosin kích hoạt thụ thể A2 trên tiểu cầu tăng thêm cAMP). Nồng độ cAMP cao ngăn chặn sự huy động calci nội bào, ức chế kết tập tiểu cầu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Ức chế chọn lọc enzym cyclooxygenase hai nội mô\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tăng cường giáng hóa nồng độ fibrinogen tuần hoàn\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Dipyridamol ức chế enzym phosphodiesterase (làm tăng cAMP nội bào tiểu cầu) và ức chế bắt giữ adenosin ở hồng cầu (adenosin kích hoạt thụ thể A2 trên tiểu cầu tăng thêm cAMP). Nồng độ cAMP cao ngăn chặn sự huy động calci nội bào, ức chế kết tập tiểu cầu.",
      "Phương án này không đúng vì \"Kích hoạt thụ thể gắn thrombin trên màng tiểu cầu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Tế bào cơ vân ly giải giải phóng nhiều acid amin vào máu",
      "Ức chế hoàn toàn quá trình biệt hóa dòng tế bào tủy xương",
      "Acid uric cạnh tranh đào thải ở thận làm ứ trệ chất chuyển hóa",
      "Thiếu hụt cofactor cho enzym methylmalonyl-CoA mutase"
    ],
    "correct": 3,
    "explanation": "Vitamin B12 cần cho 2 phản ứng enzym: Methylmalonyl-CoA mutase (cần adenosylcobalamin) và Methionine synthase (cần methylcobalamin). Thiếu B12 làm tắc nghẽn cả 2 phản ứng, khiến cả Methylmalonic acid (MMA) và Homocystein tích tụ tăng vọt trong máu (trong khi thiếu Acid folic chỉ làm tăng Homocystein mà không tăng MMA).",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Tế bào cơ vân ly giải giải phóng nhiều acid amin vào máu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ức chế hoàn toàn quá trình biệt hóa dòng tế bào tủy xương\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Acid uric cạnh tranh đào thải ở thận làm ứ trệ chất chuyển hóa\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Vitamin B12 cần cho 2 phản ứng enzym: Methylmalonyl-CoA mutase (cần adenosylcobalamin) và Methionine synthase (cần methylcobalamin). Thiếu B12 làm tắc nghẽn cả 2 phản ứng, khiến cả Methylmalonic acid (MMA) và Homocystein tích tụ tăng vọt trong máu (trong khi thiếu Acid folic chỉ làm tăng Homocystein mà không tăng MMA)."
    ]
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
      "Tích lũy quá liều ion sắt tự do gây hoại tử tế bào tủy",
      "Chỉ điểm phản ứng quá mẫn miễn dịch đòi hỏi ngừng phác đồ",
      "Phản ánh tình trạng tan máu ồ ạt trong mạch do độc tính sắt",
      "Cho thấy tủy xương đáp ứng tốt và tăng sinh hồng cầu mới"
    ],
    "correct": 3,
    "explanation": "Số lượng hồng cầu lưới (hồng cầu non mới rời tủy xương) tăng vọt đạt đỉnh sau 5-7 ngày dùng sắt (gấp 3-5 lần bình thường) là bằng chứng xác thực đầu tiên trên xét nghiệm chứng minh tủy xương đã nhận được sắt và đang tăng tốc sản xuất hồng cầu hiệu quả.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Tích lũy quá liều ion sắt tự do gây hoại tử tế bào tủy\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Chỉ điểm phản ứng quá mẫn miễn dịch đòi hỏi ngừng phác đồ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Phản ánh tình trạng tan máu ồ ạt trong mạch do độc tính sắt\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Số lượng hồng cầu lưới (hồng cầu non mới rời tủy xương) tăng vọt đạt đỉnh sau 5-7 ngày dùng sắt (gấp 3-5 lần bình thường) là bằng chứng xác thực đầu tiên trên xét nghiệm chứng minh tủy xương đã nhận được sắt và đang tăng tốc sản xuất hồng cầu hiệu quả."
    ]
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
      "Deferasirox",
      "Deferoxamin",
      "Dimercaprol",
      "Penicillamin"
    ],
    "correct": 0,
    "explanation": "Trước đây bệnh nhân phải tiêm truyền Deferoxamin dưới da chậm 8-12 tiếng mỗi đêm rất bất tiện. Hiện nay, Deferasirox (Exjade) là thuốc tạo phức chelate sắt đường uống thế hệ mới, chỉ cần uống 1 lần mỗi ngày, thải sắt qua đường mật và phân, giúp ngăn ngừa suy tim và suy gan do ứ sắt ở bệnh nhân Thalassemia.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Trước đây bệnh nhân phải tiêm truyền Deferoxamin dưới da chậm 8-12 tiếng mỗi đêm rất bất tiện. Hiện nay, Deferasirox (Exjade) là thuốc tạo phức chelate sắt đường uống thế hệ mới, chỉ cần uống 1 lần mỗi ngày, thải sắt qua đường mật và phân, giúp ngăn ngừa suy tim và suy gan do ứ sắt ở bệnh nhân Thalassemia.",
      "Phương án này không đúng vì \"Deferoxamin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Dimercaprol\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Penicillamin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Rhodopsin",
      "Iodopsin",
      "Porphyropsin",
      "Cyanopsin"
    ],
    "correct": 0,
    "explanation": "11-cis-retinal kết hợp với protein Opsin tạo thành Rhodopsin - sắc tố thị giác của tế bào que chịu trách nhiệm cho thị giác trong điều kiện ánh sáng yếu (ban đêm). Thiếu vitamin A làm giảm tái tổng hợp Rhodopsin, gây triệu chứng quáng gà sớm nhất.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "11-cis-retinal kết hợp với protein Opsin tạo thành Rhodopsin - sắc tố thị giác của tế bào que chịu trách nhiệm cho thị giác trong điều kiện ánh sáng yếu (ban đêm). Thiếu vitamin A làm giảm tái tổng hợp Rhodopsin, gây triệu chứng quáng gà sớm nhất.",
      "Phương án này không đúng vì \"Iodopsin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Porphyropsin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Cyanopsin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Hạ calci máu kịch phát gây co giật tetany và loạn nhịp tim",
      "Tăng calci máu gây sỏi thận và vôi hóa mô mềm ngoài xương",
      "Hạ huyết áp tư thế do giãn cơ trơn và giảm thể tích tuần hoàn",
      "Tăng đào thải phosphat qua thận gây nhuyễn xương biến dạng"
    ],
    "correct": 1,
    "explanation": "Vitamin D liều cao làm tăng hấp thu Ca2+ tối đa ở ruột và tăng tiêu xương, gây tăng Calci máu nặng. Calci lắng đọng vào các mô mềm (vôi hóa di căn ở thận gây suy thận, vôi hóa động mạch và mô tim), kèm theo đa niệu, mất nước, nôn mửa và rối loạn nhịp tim.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Hạ calci máu kịch phát gây co giật tetany và loạn nhịp tim\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Vitamin D liều cao làm tăng hấp thu Ca2+ tối đa ở ruột và tăng tiêu xương, gây tăng Calci máu nặng. Calci lắng đọng vào các mô mềm (vôi hóa di căn ở thận gây suy thận, vôi hóa động mạch và mô tim), kèm theo đa niệu, mất nước, nôn mửa và rối loạn nhịp tim.",
      "Phương án này không đúng vì \"Hạ huyết áp tư thế do giãn cơ trơn và giảm thể tích tuần hoàn\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tăng đào thải phosphat qua thận gây nhuyễn xương biến dạng\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Ức chế thụ thể CD4 bề mặt tế bào lympho T người",
      "Đối kháng thụ thể CCR5 ngăn virus xâm nhập",
      "Kích thích tế bào lympho T tự thực bào hạt virus",
      "Bất hoạt thụ thể chemokine CXCR4 tại tủy xương"
    ],
    "correct": 1,
    "explanation": "Maraviroc là chất điều hòa dị lập thể gắn vào thụ thể CCR5 của tế bào miễn dịch người (đồng thụ thể cần thiết cho các chủng virus HIV-1 hướng CCR5 xâm nhập). Khóa thụ thể CCR5 ngăn gp120 của virus tương tác với tế bào. Bắt buộc phải làm xét nghiệm tính hướng đích (Tropism assay) trước khi dùng.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Ức chế thụ thể CD4 bề mặt tế bào lympho T người\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Maraviroc là chất điều hòa dị lập thể gắn vào thụ thể CCR5 của tế bào miễn dịch người (đồng thụ thể cần thiết cho các chủng virus HIV-1 hướng CCR5 xâm nhập). Khóa thụ thể CCR5 ngăn gp120 của virus tương tác với tế bào. Bắt buộc phải làm xét nghiệm tính hướng đích (Tropism assay) trước khi dùng.",
      "Phương án này không đúng vì \"Kích thích tế bào lympho T tự thực bào hạt virus\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Bất hoạt thụ thể chemokine CXCR4 tại tủy xương\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Giảm độ thanh thải qua thận hạn chế nguy cơ độc tính",
      "Tăng tỷ lệ liên kết với protein huyết tương lên tối đa",
      "Tăng sinh khả dụng đường uống qua chất vận chuyển màng ruột",
      "Tránh chuyển hóa qua hệ enzym vi thể tại phổi và gan"
    ],
    "correct": 2,
    "explanation": "Acyclovir đường uống có sinh khả dụng rất thấp (chỉ 15-20%) do khó qua màng ruột, phải uống 5 lần/ngày. Valacyclovir là tiền chất ester gắn acid amin L-valin, được các chất vận chuyển peptid (PEPT1) tại ruột non hấp thu tích cực, nâng sinh khả dụng lên 55-70%, chỉ cần uống 2-3 lần/ngày.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Giảm độ thanh thải qua thận hạn chế nguy cơ độc tính\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tăng tỷ lệ liên kết với protein huyết tương lên tối đa\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Acyclovir đường uống có sinh khả dụng rất thấp (chỉ 15-20%) do khó qua màng ruột, phải uống 5 lần/ngày. Valacyclovir là tiền chất ester gắn acid amin L-valin, được các chất vận chuyển peptid (PEPT1) tại ruột non hấp thu tích cực, nâng sinh khả dụng lên 55-70%, chỉ cần uống 2-3 lần/ngày.",
      "Phương án này không đúng vì \"Tránh chuyển hóa qua hệ enzym vi thể tại phổi và gan\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Ức chế enzym xanthine oxidase tạo acid uric máu",
      "Tăng bài xuất nồng độ acid uric qua dịch mật theo phân",
      "Phân hủy trực tiếp các phân tử purin trong tuần hoàn",
      "Chuyển acid uric thành allantoin dễ tan trong nước"
    ],
    "correct": 3,
    "explanation": "Con người thiếu enzym urate oxidase nên acid uric là sản phẩm thoái biến cuối cùng rất khó tan. Rasburicase là enzym urate oxidase tái tổ hợp, xúc tác oxy hóa acid uric thành allantoin - một chất chuyển hóa có độ tan trong nước cao gấp 10 lần acid uric, tống ra nước tiểu an toàn giúp hạ acid uric máu tức thì.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Ức chế enzym xanthine oxidase tạo acid uric máu\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Tăng bài xuất nồng độ acid uric qua dịch mật theo phân\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Phân hủy trực tiếp các phân tử purin trong tuần hoàn\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Con người thiếu enzym urate oxidase nên acid uric là sản phẩm thoái biến cuối cùng rất khó tan. Rasburicase là enzym urate oxidase tái tổ hợp, xúc tác oxy hóa acid uric thành allantoin - một chất chuyển hóa có độ tan trong nước cao gấp 10 lần acid uric, tống ra nước tiểu an toàn giúp hạ acid uric máu tức thì."
    ]
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
      "Irinotecan",
      "Topotecan",
      "Etoposid",
      "Dactinomycin"
    ],
    "correct": 2,
    "explanation": "Etoposid gắn và ổn định phức hợp trung gian giữa Topoisomerase II và DNA, ngăn cản sự hàn gắn lại chuỗi xoắn kép DNA, làm DNA bị đứt gãy hai sợi tích lũy gây chết tế bào ở pha S-G2. Đứt gãy DNA có thể gây chuyển đoạn nhiễm sắc thể (đặc biệt gen MLL ở 11q23) dẫn đến nguy cơ ung thư máu thứ phát sau này.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Irinotecan\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Topotecan\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Etoposid gắn và ổn định phức hợp trung gian giữa Topoisomerase II và DNA, ngăn cản sự hàn gắn lại chuỗi xoắn kép DNA, làm DNA bị đứt gãy hai sợi tích lũy gây chết tế bào ở pha S-G2. Đứt gãy DNA có thể gây chuyển đoạn nhiễm sắc thể (đặc biệt gen MLL ở 11q23) dẫn đến nguy cơ ung thư máu thứ phát sau này.",
      "Phương án này không đúng vì \"Dactinomycin\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Nhóm sulfonylurea",
      "Nhóm thiazolidinedion",
      "Nhóm ức chế SGLT-2",
      "Nhóm ức chế DPP-4"
    ],
    "correct": 0,
    "explanation": "Khi ngộ độc Sulfonylurea, truyền glucose liên tục có thể kích thích tế bào beta tụy tiết thêm insulin, gây hạ đường huyết dội ngược nguy hiểm. Octreotid gắn vào thụ thể Somatostatin type 2 ở tế bào beta đảo tụy, ức chế dòng calci đi vào màng tế bào, cắt đứt hoàn toàn sự bài tiết insulin, ngăn ngừa tái phát hạ đường huyết.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Khi ngộ độc Sulfonylurea, truyền glucose liên tục có thể kích thích tế bào beta tụy tiết thêm insulin, gây hạ đường huyết dội ngược nguy hiểm. Octreotid gắn vào thụ thể Somatostatin type 2 ở tế bào beta đảo tụy, ức chế dòng calci đi vào màng tế bào, cắt đứt hoàn toàn sự bài tiết insulin, ngăn ngừa tái phát hạ đường huyết.",
      "Phương án này không đúng vì \"Nhóm thiazolidinedion\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Nhóm ức chế SGLT-2\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Nhóm ức chế DPP-4\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
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
      "Ngộ độc Chì tích lũy",
      "Ngộ độc Thủy ngân vô cơ",
      "Ngộ độc Asen mạn tính"
    ],
    "correct": 1,
    "explanation": "CaNa2-EDTA (tiêm tĩnh mạch) và Succimer (DMSA đường uống) là các chất tạo chelate số 1 trong điều trị ngộ độc Chì cấp và mạn tính. Ion Chì (Pb2+) thay thế ion Calci trong phức hợp EDTA do có ái lực cao hơn, tạo phức chì-EDTA bền vững không độc và đào thải nhanh chóng qua nước tiểu.",
    "reference": "Giáo trình Dược lý 2 Bộ Y tế (PGS.TS. Mai Tất Tố)",
    "distractorExplanations": [
      "Phương án này không đúng vì \"Ngộ độc Sắt cấp tính\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "CaNa2-EDTA (tiêm tĩnh mạch) và Succimer (DMSA đường uống) là các chất tạo chelate số 1 trong điều trị ngộ độc Chì cấp và mạn tính. Ion Chì (Pb2+) thay thế ion Calci trong phức hợp EDTA do có ái lực cao hơn, tạo phức chì-EDTA bền vững không độc và đào thải nhanh chóng qua nước tiểu.",
      "Phương án này không đúng vì \"Ngộ độc Thủy ngân vô cơ\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.",
      "Phương án này không đúng vì \"Ngộ độc Asen mạn tính\" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này."
    ]
  }
];

const DUOCLY2_MATRIX_32H = [
  {
    "chapter": "Thuốc trợ tim",
    "lesson": "Bài 1",
    "hours": 2,
    "count": 4
  },
  {
    "chapter": "Thuốc điều trị THA",
    "lesson": "Bài 2",
    "hours": 2,
    "count": 4
  },
  {
    "chapter": "Thuốc chữa CĐTN",
    "lesson": "Bài 3",
    "hours": 1,
    "count": 2
  },
  {
    "chapter": "Thuốc chống loạn nhịp",
    "lesson": "Bài 4",
    "hours": 1,
    "count": 2
  },
  {
    "chapter": "Thuốc lợi niệu",
    "lesson": "Bài 5",
    "hours": 2,
    "count": 4
  },
  {
    "chapter": "Thuốc điều trị DDTT",
    "lesson": "Bài 6",
    "hours": 2,
    "count": 4
  },
  {
    "chapter": "Thuốc chống giun sán, amibe",
    "lesson": "Bài 7",
    "hours": 2,
    "count": 4
  },
  {
    "chapter": "Thuốc ĐC RLHH",
    "lesson": "Bài 8",
    "hours": 1,
    "count": 2
  },
  {
    "chapter": "Thuốc kháng H1",
    "lesson": "Bài 9",
    "hours": 1,
    "count": 2
  },
  {
    "chapter": "Thuốc hạ lipid máu",
    "lesson": "Bài 10",
    "hours": 2,
    "count": 4
  },
  {
    "chapter": "Thuốc chống sốt rét",
    "lesson": "Bài 11",
    "hours": 2,
    "count": 4
  },
  {
    "chapter": "KTGHP",
    "lesson": "Bài 12",
    "hours": 1,
    "count": 2
  },
  {
    "chapter": "Hormon",
    "lesson": "Bài 13",
    "hours": 3,
    "count": 6
  },
  {
    "chapter": "Thuốc hạ glucose máu",
    "lesson": "Bài 14",
    "hours": 2,
    "count": 4
  },
  {
    "chapter": "Thuốc/QT đông cầm máu",
    "lesson": "Bài 15",
    "hours": 2,
    "count": 4
  },
  {
    "chapter": "Vitamin",
    "lesson": "Bài 16",
    "hours": 0,
    "count": 2
  },
  {
    "chapter": "Thuốc chữa thiếu máu",
    "lesson": "Bài 17",
    "hours": 2,
    "count": 3
  },
  {
    "chapter": "Thuốc kháng virus",
    "lesson": "Bài 18",
    "hours": 2,
    "count": 4
  },
  {
    "chapter": "Thuốc chống ung thư",
    "lesson": "Bài 19",
    "hours": 1,
    "count": 2
  },
  {
    "chapter": "Thuốc/trong điều trị ngộ độc",
    "lesson": "Bài 20",
    "hours": 1,
    "count": 3
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DUOCLY2_EXAM_BANK, DUOCLY2_MATRIX_32H };
}
