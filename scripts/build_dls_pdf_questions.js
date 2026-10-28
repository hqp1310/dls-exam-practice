const fs = require('fs');

// Raw questions compiled from Dls.pdf recall with balanced distractors
const rawQuestions = [
  // --- BÀI 1: TĂNG HUYẾT ÁP (THA) ---
  {
    chapter: "Điều trị Tăng huyết áp & Cấp cứu THA",
    question: "Theo khuyến cáo của Bộ Y tế và Hội Tim mạch học Việt Nam (VNHA), nhóm thuốc hạ huyết áp ưu tiên hàng đầu được chỉ định khởi đầu trong điều trị tăng huyết áp ở bệnh nhân có kèm đái tháo đường (đặc biệt khi có đạm niệu vi thể microalbumin niệu) là:",
    correctAnswer: "Thuốc ức chế men chuyển (ACEi) hoặc thuốc chẹn thụ thể AT1 của angiotensin II (ARB)",
    distractors: [
      "Thuốc chẹn thụ thể beta-adrenergic không chọn lọc trên tim và mạch (như Propranolol)",
      "Thuốc lợi tiểu quai liều cao ngắt quãng có tác dụng bài xuất natri mạnh (như Furosemid)",
      "Thuốc chẹn chọn lọc thụ thể alpha-1 giao cảm ngoại biên gây giãn mạch (như Prazosin)"
    ],
    explanation: "ACEi (như Enalapril, Perindopril) hoặc ARB (như Losartan, Telmisartan) là nhóm thuốc ưu tiên số 1 cho bệnh nhân THA kèm ĐTĐ nhờ tác dụng giãn chọn lọc tiểu động mạch đi cầu thận, làm giảm áp lực lọc cầu thận, giảm bài xuất albumin niệu và làm chậm tiến triển bệnh thận đái tháo đường.",
    reference: "Hướng dẫn chẩn đoán và điều trị tăng huyết áp - Bộ Y tế & VNHA"
  },
  {
    chapter: "Điều trị Tăng huyết áp & Cấp cứu THA",
    question: "Bệnh nhân nam 52 tuổi mắc đái tháo đường typ 2 kèm tăng huyết áp nguyên phát (huyết áp 155/95 mmHg). Sau khi đã dùng Enalapril 10 mg/ngày nhưng huyết áp chưa đạt mục tiêu (< 130/80 mmHg), thuốc hạ áp được khuyến cáo ưu tiên phối hợp thêm là:",
    correctAnswer: "Amlodipin (nhóm chẹn kênh calci Dihydropyridin - DHP)",
    distractors: [
      "Atenolol (nhóm chẹn chọn lọc thụ thể beta-1 giao cảm tim)",
      "Hydrochlorothiazid (nhóm lợi tiểu thiazid liều cao 50 mg)",
      "Methyldopa (nhóm kích thích thụ thể alpha-2 tại trung ương)"
    ],
    explanation: "Theo phác đồ của VNHA/ESC và ADA, phối hợp chuẩn bậc 2 cho THA kèm ĐTĐ là ACEi (hoặc ARB) phối hợp với DHP-CCB (như Amlodipin). Amlodipin hạ áp mạnh mẽ qua cơ chế giãn tiểu động mạch ngoại biên, trung tính với chuyển hóa lipid và glucose máu, không làm nặng thêm tình trạng đề kháng insulin.",
    reference: "Khuyến cáo điều trị ĐTĐ & THA - ADA/EASD & VNHA"
  },
  {
    chapter: "Điều trị Tăng huyết áp & Cấp cứu THA",
    question: "Tác dụng không mong muốn thường gặp nhất trên hệ mạch máu của Nitroglycerin và các dẫn chất nitrat hữu cơ do tác dụng giãn mạch nhanh và mạnh là:",
    correctAnswer: "Nhức đầu do giãn mạch màng não, đỏ bừng mặt và hạ huyết áp tư thế đứng kèm nhịp tim nhanh phản xạ",
    distractors: [
      "Tăng huyết áp kịch phát ác tính kèm co thắt mạch ngoại vi dẫn đến hoại tử khô các đầu ngón chi",
      "Chậm nhịp xoang nghiêm trọng dẫn đến tụt huyết áp kéo dài và block nhĩ thất hoàn toàn độ 3",
      "Co thắt nghịch ngôn động mạch vành làm suy giảm trầm trọng lưu lượng máu nuôi dưỡng cơ tim"
    ],
    explanation: "Nitroglycerin chuyển hóa giải phóng NO kích hoạt guanylate cyclase gây giãn tĩnh mạch và động mạch. Giãn mạch màng não gây đau đầu nhức nhối (rất hay gặp trong những ngày đầu); giãn mạch da gây đỏ bừng mặt; giãn mạch ngoại vi gây tụt huyết áp tư thế đứng, kích thích phản xạ xoang cảnh gây nhịp tim nhanh bù trừ.",
    reference: "Dược lý học lâm sàng - Bài Thuốc điều trị đau thắt ngực"
  },
  {
    chapter: "Điều trị Tăng huyết áp & Cấp cứu THA",
    question: "Theo phân loại tăng huyết áp của Hội Tim mạch học Việt Nam (VNHA) và Hội Tim mạch Châu Âu (ESC), một bệnh nhân đo huyết áp phòng khám có huyết áp tâm thu 165 mmHg và huyết áp tâm trương 102 mmHg được phân độ là:",
    correctAnswer: "Tăng huyết áp độ 2 (Mức độ trung bình)",
    distractors: [
      "Tăng huyết áp độ 1 (Mức độ nhẹ vừa)",
      "Tăng huyết áp độ 3 (Mức độ nặng cao)",
      "Tăng huyết áp tâm thu đơn độc cao tuổi"
    ],
    explanation: "Tiêu chuẩn phân loại THA tại phòng khám: Độ 1 (HATT 140-159 và/hoặc HATC 90-99 mmHg); Độ 2 (HATT 160-179 và/hoặc HATC 100-109 mmHg); Độ 3 (HATT >= 180 và/hoặc HATC >= 110 mmHg). Bệnh nhân có HATT 165 mmHg và HATC 102 mmHg đều nằm trong ngưỡng của Tăng huyết áp độ 2.",
    reference: "Khuyến cáo chẩn đoán và điều trị tăng huyết áp người lớn - VNHA"
  },
  {
    chapter: "Điều trị Tăng huyết áp & Cấp cứu THA",
    question: "Bệnh nhân tăng huyết áp đã được điều trị phối hợp tối ưu 3 thuốc gồm: Ức chế men chuyển (hoặc ARB) + Chẹn kênh calci DHP + Lợi tiểu Thiazide ở liều dung nạp tối đa nhưng huyết áp vẫn >= 140/90 mmHg (THA kháng trị). Thuốc được khuyến cáo ưu tiên bổ sung tiếp theo (bước 4) là:",
    correctAnswer: "Spironolacton liều thấp (25 - 50 mg/ngày)",
    distractors: [
      "Nifedipin tác dụng nhanh ngậm dưới lưỡi",
      "Reserpin đường uống liều duy trì kéo dài",
      "Furosemid tiêm tĩnh mạch ngắt quãng hàng ngày"
    ],
    explanation: "Theo khuyến cáo của ESC/ESH và VNHA, khi bệnh nhân bị tăng huyết áp kháng trị (Resistant Hypertension) với phác đồ phối hợp 3 thuốc (A + C + D), thuốc lựa chọn hàng đầu bước 4 là Spironolacton liều thấp (25-50 mg/ngày) nhằm chẹn thụ thể mineralocorticoid, đối kháng tình trạng cường aldosterone thứ phát.",
    reference: "Khuyến cáo xử trí tăng huyết áp kháng trị - ESC & VNHA"
  },
  {
    chapter: "Tương tác thuốc & Tương kỵ",
    question: "Khi dùng đồng thời thuốc chẹn thụ thể alpha-1 adrenergic (như Doxazosin, Prazosin) với thuốc chủ vận thụ thể beta-2 adrenergic liều cao (như Salbutamol), tương tác dược lý nào trên hệ tim mạch cần được lưu ý?",
    correctAnswer: "Tăng nguy cơ tụt huyết áp tư thế đứng và phản xạ tim đập nhanh hồi hộp",
    distractors: [
      "Tăng nguy cơ co thắt khí phế quản cấp tính đe dọa suy hô hấp cấp nghẹt thở",
      "Gây tăng huyết áp kịch phát đột ngột do kích thích co mạch ngoại vi quá mức",
      "Làm tăng nồng độ kali huyết tương nghiêm trọng gây rung thất và ngừng tim"
    ],
    explanation: "Chẹn alpha-1 gây giãn tiểu động mạch và tĩnh mạch dẫn đến hạ huyết áp thế đứng; Salbutamol (đặc biệt khi dùng toàn thân hoặc khí dung liều cao) kích thích thụ thể beta-2 và một phần beta-1 gây giãn mạch ngoại vi, hạ huyết áp tâm trương, hạ kali máu và kích thích trực tiếp cơ tim gây nhịp tim nhanh, làm tăng nguy cơ chóng mặt và ngất xỉu khi thay đổi tư thế.",
    reference: "Dược thư Quốc gia Việt Nam - Chuyên luận Salbutamol & Doxazosin"
  },

  // --- BÀI 2: TIÊU CHẢY CẤP & KÉO DÀI ---
  {
    chapter: "Tiêu chảy cấp ở trẻ em",
    question: "Theo Tổ chức Y tế Thế giới (WHO) và Bộ Y tế, tiêu chảy kéo dài (Persistent Diarrhea) ở trẻ em được định nghĩa là đợt tiêu chảy khởi phát cấp tính nhưng kéo dài liên tục từ:",
    correctAnswer: "Từ 14 ngày trở lên (>= 14 ngày)",
    distractors: [
      "Từ 07 ngày trở lên (>= 07 ngày)",
      "Từ 21 ngày trở lên (>= 21 ngày)",
      "Từ 30 ngày trở lên (>= 30 ngày)"
    ],
    explanation: "Tiêu chảy kéo dài là đợt tiêu chảy khởi phát cấp tính (phân lỏng hoặc tóe nước) kéo dài từ 14 ngày trở lên. Tình trạng này làm tổn thương nặng nề niêm mạc ruột, kém hấp thu chất dinh dưỡng và dẫn đến suy dinh dưỡng nặng, tỷ lệ tử vong cao ở trẻ nhỏ.",
    reference: "Hướng dẫn chẩn đoán và xử trí tiêu chảy ở trẻ em - Bộ Y tế & WHO"
  },
  {
    chapter: "Tiêu chảy cấp ở trẻ em",
    question: "Theo định nghĩa lâm sàng của Bộ Y tế, tiêu chảy cấp (Acute Diarrhea) là đợt đi ngoài phân lỏng hoặc tóe nước bất thường từ 3 lần/ngày trở lên và có thời gian diễn tiến:",
    correctAnswer: "Dưới 14 ngày (diễn tiến cấp tính không quá 14 ngày)",
    distractors: [
      "Dưới 03 ngày (thường tự khỏi sau 24 đến 48 giờ đầu)",
      "Từ 14 đến 28 ngày (kéo dài trong vòng dưới một tháng)",
      "Trên 30 ngày (diễn tiến mạn tính kéo dài nhiều tháng)"
    ],
    explanation: "Tiêu chảy cấp được định nghĩa là đi ngoài phân lỏng hoặc tóe nước từ 3 lần/24 giờ trở lên, khởi phát đột ngột và kéo dài dưới 14 ngày (thường tự giới hạn trong vòng 5-7 ngày). Nếu đợt tiêu chảy kéo dài >= 14 ngày thì được phân loại là tiêu chảy kéo dài.",
    reference: "Hướng dẫn chẩn đoán và điều trị bệnh truyền nhiễm - Bộ Y tế"
  },
  {
    chapter: "Tiêu chảy cấp ở trẻ em",
    question: "Trẻ bị tiêu chảy cấp có dấu hiệu: li bì khó đánh thức, mắt rất trũng, uống nước rất kém hoặc không thể uống được, nếp véo da bụng mất rất chậm (> 2 giây). Mức độ mất nước này tương đương với lượng dịch cơ thể bị mất ước tính là:",
    correctAnswer: "Mất từ 10% trọng lượng cơ thể trở lên (Mất nước nặng - Phác đồ C)",
    distractors: [
      "Mất khoảng 5% đến 9% trọng lượng cơ thể (Có mất nước - Phác đồ B)",
      "Mất dưới 5% trọng lượng cơ thể (Không mất nước - Phác đồ A)",
      "Mất khoảng 1% đến 2% trọng lượng cơ thể (Mất nước thoáng qua)"
    ],
    explanation: "Theo bảng phân loại mất nước của WHO/Bộ Y tế: Mất nước nặng (Phác đồ C) được xác định khi có từ 2 dấu hiệu: li bì/hôn mê, mắt rất trũng, không uống được, nếp véo da mất rất chậm (> 2 giây), tương đương mất dịch >= 10% trọng lượng cơ thể (>= 100 ml/kg). Cần cấp cứu truyền dịch Ringer Lactate đường tĩnh mạch ngay lập tức.",
    reference: "Hướng dẫn xử trí tiêu chảy cấp ở trẻ em - Bộ Y tế & WHO"
  },
  {
    chapter: "Tiêu chảy cấp ở trẻ em",
    question: "Một trẻ 7 tuổi bị tiêu chảy cấp nhưng chưa có dấu hiệu mất nước (tỉnh táo, mắt không trũng, khát nước bình thường). Theo Phác đồ A của Bộ Y tế, lượng dung dịch ORS khuyến cáo cho trẻ uống bù sau mỗi lần đi ngoài phân lỏng là:",
    correctAnswer: "100 - 200 ml dung dịch ORS sau mỗi lần đi ngoài phân lỏng",
    distractors: [
      "50 - 100 ml dung dịch ORS sau mỗi lần đi ngoài phân lỏng",
      "300 - 500 ml dung dịch ORS sau mỗi lần đi ngoài phân lỏng",
      "10 - 20 ml dung dịch ORS sau mỗi lần đi ngoài phân lỏng"
    ],
    explanation: "Theo Phác đồ A của WHO và Bộ Y tế về phòng ngừa mất nước tại nhà: Trẻ < 2 tuổi uống 50 - 100 ml sau mỗi lần đi ngoài; Trẻ từ 2 đến 10 tuổi (ở đây là trẻ 7 tuổi) uống 100 - 200 ml sau mỗi lần đi ngoài; Trẻ từ 10 tuổi trở lên và người lớn uống theo nhu cầu (200 - 400 ml).",
    reference: "Hướng dẫn xử trí tiêu chảy cấp - Bộ Y tế"
  },
  {
    chapter: "Tiêu chảy cấp ở trẻ em",
    question: "Khi hướng dẫn phụ huynh cho trẻ bị tiêu chảy cấp uống dung dịch Oresol (ORS) tại nhà, dược sĩ lâm sàng cần nhấn mạnh nguyên tắc quan trọng nào sau đây?",
    correctAnswer: "Cho uống từng thìa nhỏ hoặc từng ngụm nhỏ cách nhau 1-2 phút; nếu trẻ nôn thì tạm nghỉ 10 phút rồi tiếp tục cho uống chậm lại",
    distractors: [
      "Cho trẻ uống một hơi thật nhanh hết cả cốc lớn ngay lập tức để bù đắp lượng dịch mất",
      "Pha 1 gói Oresol loại 1 lít với 500 ml nước để tăng nồng độ điện giải hấp thu vào máu",
      "Pha Oresol chung với sữa tươi đặc hoặc nước trái cây ngọt đậm để trẻ dễ uống và không sợ"
    ],
    explanation: "Nguyên tắc pha và cho uống Oresol: Pha đúng thể tích nước chỉ dẫn trên gói (pha quá đặc gây ưu trương co giật, pha loãng làm giảm hiệu quả); Cho uống chậm rãi từng thìa nhỏ để tránh gây kích thích nôn và tăng nhu động ruột; nếu nôn thì nghỉ 5-10 phút rồi cho uống lại chậm hơn. Dung dịch chỉ dùng trong 24 giờ.",
    reference: "Dược lâm sàng đại cương - Hướng dẫn sử dụng ORS an toàn"
  },
  {
    chapter: "Tiêu chảy cấp ở trẻ em",
    question: "Racecadotril (chất ức chế enzym enkephalinase niêm mạc ruột, giảm tiết nước và điện giải) được chỉ định phối hợp với bù nước điện giải trong tiêu chảy cấp ở trẻ em với liều dùng khuyến cáo là:",
    correctAnswer: "1,5 mg/kg mỗi lần, uống 3 lần/ngày (cách nhau 8 giờ)",
    distractors: [
      "10 mg/kg mỗi lần, uống 1 lần duy nhất trong ngày",
      "0,15 mg/kg mỗi lần, uống 2 lần/ngày cách 12 giờ",
      "5,0 mg/kg mỗi lần, uống 4 lần/ngày cách 6 giờ"
    ],
    explanation: "Racecadotril là tiền chất chuyển hóa thành thiorphan ức chế enzym enkephalinase ngoại biên, bảo vệ enkephalin nội sinh làm giảm tiết dịch ruột mà không làm giảm nhu động ruột. Liều chuẩn cho trẻ em từ 3 tháng tuổi là 1,5 mg/kg mỗi lần x 3 lần/ngày, uống tối đa không quá 7 ngày kết hợp với bù dịch ORS.",
    reference: "Dược thư Quốc gia Việt Nam - Chuyên luận Racecadotril"
  },
  {
    chapter: "Tiêu chảy cấp ở trẻ em",
    question: "Theo khuyến cáo của Hiệp hội Tiêu hóa, Gan mật và Dinh dưỡng Nhi khoa Châu Âu (ESPGHAN), chủng men vi sinh (Probiotics) nào có bằng chứng lâm sàng mức độ cao nhất giúp rút ngắn thời gian tiêu chảy cấp ở trẻ em?",
    correctAnswer: "Lactobacillus rhamnosus GG (LGG) và nấm men Saccharomyces boulardii",
    distractors: [
      "Bacillus subtilis phối hợp với vi khuẩn kỵ khí Clostridium butyricum",
      "Escherichia coli chủng tự nhiên phối hợp nấm men Candida albicans",
      "Streptococcus faecalis phối hợp với vi khuẩn Enterococcus faecium"
    ],
    explanation: "ESPGHAN và WHO chỉ khuyến cáo mạnh một số chủng Probiotics có bằng chứng thử nghiệm lâm sàng ngẫu nhiên có đối chứng rõ rệt là Lactobacillus rhamnosus GG (LGG) và nấm men Saccharomyces boulardii liều chuẩn nhằm giảm thời gian tiêu chảy và giảm số lần đi ngoài.",
    reference: "ESPGHAN Guidelines for the Management of Acute Gastroenteritis"
  },
  {
    chapter: "Tiêu chảy cấp ở trẻ em",
    question: "Trong phác đồ hỗ trợ điều trị tiêu chảy cấp ở trẻ em, mục đích cốt lõi của việc bổ sung men vi sinh (Probiotics) là gì?",
    correctAnswer: "Thiết lập lại cân bằng hệ vi sinh vật đường ruột, cạnh tranh vị trí bám và ức chế sự phát triển của vi khuẩn sinh độc tố gây bệnh",
    distractors: [
      "Tiêu diệt chọn lọc toàn bộ vi khuẩn Gram âm trong lòng ruột tương tự như kháng sinh phổ rộng",
      "Ức chế đám rối thần kinh cơ ruột làm bất động nhu động ruột nhằm cầm tiêu chảy tức thì",
      "Bù đắp hoàn toàn lượng nước và điện giải bị mất qua phân mà không cần sử dụng dung dịch ORS"
    ],
    explanation: "Probiotics không thay thế được Oresol bù dịch và không phải là kháng sinh diệt khuẩn. Mục đích của Probiotics là thiết lập lại cân bằng sinh thái đường ruột bị phá vỡ, cạnh tranh cơ chất dinh dưỡng và thụ thể bám dính, kích thích tiết IgA niêm mạc và rút ngắn thời gian bài xuất mầm bệnh.",
    reference: "Hướng dẫn điều trị tiêu chảy trẻ em - Bộ Y tế"
  },
  {
    chapter: "Tiêu chảy cấp ở trẻ em",
    question: "Ondansetron (kháng thụ thể 5-HT3) có thể được chỉ định cho trẻ tiêu chảy cấp nôn nhiều để giúp trẻ uống được ORS, nhưng KHÔNG ĐƯỢC dùng thường quy cho trẻ chỉ có tiêu chảy phân nước đơn thuần không nôn vì lý do gì?",
    correctAnswer: "Ondansetron có tác dụng phụ làm tăng lượng phân và kéo dài thời gian tiêu chảy",
    distractors: [
      "Ondansetron gây ức chế hô hấp sâu và co cứng cơ ngoại tháp nghiêm trọng",
      "Ondansetron gây tăng hấp thu natri quá mức dẫn đến phù phổi cấp tức thì",
      "Ondansetron gây tổn thương mạch mạc treo dẫn đến thủng ruột và xuất huyết"
    ],
    explanation: "Nhiều nghiên cứu lâm sàng chỉ ra rằng mặc dù Ondansetron giảm nôn hiệu quả giúp trẻ uống được ORS, tác dụng phụ thường gặp của nó là làm tăng số lần đi ngoài và kéo dài thời gian tiêu chảy (do giữ phân và độc tố lại trong ruột). Vì vậy, chỉ dùng liều duy nhất khi trẻ nôn liên tục thất bại với bù dịch bằng đường uống, tuyệt đối không lạm dụng khi không nôn.",
    reference: "AAP Guidelines on Acute Gastroenteritis & Bộ Y tế"
  },
  {
    chapter: "Tiêu chảy cấp ở trẻ em",
    question: "Một trẻ 18 tháng tuổi bị tiêu chảy cấp có kết quả điện giải đồ với nồng độ Natri huyết thanh là 140 mmol/L. Tình trạng này được phân loại là dạng mất nước nào?",
    correctAnswer: "Mất nước đẳng trương (Isotonic dehydration)",
    distractors: [
      "Mất nước ưu trương (Hypertonic dehydration)",
      "Mất nước nhược trương (Hypotonic dehydration)",
      "Mất nước kèm toan chuyển hóa mất bù nặng"
    ],
    explanation: "Phân loại mất nước dựa trên nồng độ Natri huyết thanh: Mất nước đẳng trương khi Natri từ 130 đến 150 mmol/L (tỷ lệ mất nước và mất muối tương đương nhau, chiếm 70-80% tiêu chảy cấp); Mất nước nhược trương khi Natri < 130 mmol/L; Mất nước ưu trương khi Natri > 150 mmol/L.",
    reference: "Sinh lý bệnh lâm sàng & Hướng dẫn xử trí tiêu chảy - Bộ Y tế"
  },
  {
    chapter: "Tiêu chảy cấp ở trẻ em",
    question: "Bệnh nhi 15 tháng tuổi bị tiêu chảy cấp ngày thứ 2, khám thấy: trẻ vật vã kích thích, mắt trũng, uống nước háo hức, nếp véo da bụng mất chậm; tiền sử 2 tuần trước được chẩn đoán suy dinh dưỡng. Dược sĩ lâm sàng xác định các vấn đề chính cần can thiệp ở bệnh nhi là:",
    correctAnswer: "Tiêu chảy cấp có mất nước (Phác đồ B) trên nền bệnh nhân suy dinh dưỡng",
    distractors: [
      "Tiêu chảy kéo dài mất nước nặng có sốc giảm thể tích trên bệnh nhân béo phì",
      "Tiêu chảy cấp không mất nước kèm ngộ độc thức ăn cấp tính trên cơ địa khỏe mạnh",
      "Nhiễm khuẩn huyết đường ruột không có mất nước trên bệnh nhân suy tủy xương"
    ],
    explanation: "Trẻ có các dấu hiệu: vật vã/kích thích, mắt trũng, uống háo hức, nếp véo da mất chậm => phân loại 'Có mất nước' (Mất nước độ 2 / Phác đồ B). Bệnh nhân có bệnh nền suy dinh dưỡng, cần lưu ý nếp véo da có thể mất chậm do giảm lớp mỡ dưới da và cần thận trọng nguy cơ quá tải dịch khi bù nước, bổ sung Kẽm và dinh dưỡng tích cực.",
    reference: "Xử trí lồng ghép các bệnh thường gặp ở trẻ em (IMCI) - Bộ Y tế"
  },
  {
    chapter: "Kháng sinh & Kháng sinh dự phòng",
    question: "Bệnh nhân xuất hiện sốt cao, đau quặn bụng, đi ngoài phân lỏng nhiều lần lẫn chất nhầy và máu, soi phân thấy nhiều bạch cầu và cấy phân xác định dương tính với Salmonella không gây thương hàn (Non-typhoidal Salmonella) có xâm lấn toàn thân. Kháng sinh ưu tiên được chỉ định là:",
    correctAnswer: "Ciprofloxacin (hoặc Ceftriaxon / Azithromycin nếu trẻ em hoặc vi khuẩn kháng thuốc)",
    distractors: [
      "Metronidazol đường uống đơn độc kết hợp men tiêu hóa protease vi nấm",
      "Vancomycin đường uống liều cao kết hợp thuốc cầm tiêu chảy loperamid",
      "Erythromycin estolat đường uống phối hợp vitamin nhóm B dạng tiêm bắp"
    ],
    explanation: "Khi tiêu chảy do Salmonella có chỉ định kháng sinh (trẻ nhỏ, người già, người suy giảm miễn dịch, có dấu hiệu nhiễm khuẩn toàn thân), nhóm Fluoroquinolon (Ciprofloxacin) là lựa chọn hàng đầu cho người lớn; ở trẻ em hoặc chủng kháng quinolon ưu tiên Cephalosporin thế hệ 3 (Ceftriaxone) hoặc Azithromycin. Metronidazol không có tác dụng trên vi khuẩn Gram âm hiếu khí Salmonella.",
    reference: "Hướng dẫn sử dụng kháng sinh - Bộ Y tế"
  },

  // --- BÀI 3: THUỐC TRÁNH THAI (TTT) ---
  {
    chapter: "Loãng xương, Tránh thai & Chuyển hóa",
    question: "Chế phẩm nào sau đây được sử dụng phổ biến làm thuốc tránh thai khẩn cấp đường uống đạt hiệu quả cao trong vòng 72 giờ sau giao hợp không bảo vệ?",
    correctAnswer: "Levonorgestrel đơn thuần liều đơn 1,5 mg (hoặc 0,75 mg uống 2 lần cách nhau 12 giờ)",
    distractors: [
      "Medroxyprogesterone acetate hỗn dịch tiêm bắp tác dụng kéo dài trong 3 tháng",
      "Ethinylestradiol đơn độc liều thấp 0,02 mg uống hàng ngày liên tục trong 21 ngày",
      "Dydrogesterone dạng viên đặt âm đạo giải phóng chậm dùng duy trì hoàng thể"
    ],
    explanation: "Thuốc tránh thai khẩn cấp đường uống chuẩn gồm Levonorgestrel (viên 1,5 mg uống 1 lần duy nhất trong 72 giờ, hoặc 2 viên 0,75 mg cách nhau 12 giờ), hoặc Ulipristal acetate 30 mg (chất điều hòa thụ thể progesterone chọn lọc dùng trong 120 giờ). Thuốc hoạt động chủ yếu bằng cách ức chế hoặc trì hoãn sự rụng trứng.",
    reference: "Hướng dẫn Quốc gia về các dịch vụ Chăm sóc sức khỏe sinh sản - Bộ Y tế"
  },
  {
    chapter: "Loãng xương, Tránh thai & Chuyển hóa",
    question: "Biện pháp tránh thai nào sau đây phát huy tác dụng ngừa thai chủ yếu thông qua cơ chế TOÀN THÂN (hấp thu vào máu ức chế trục dưới đồi - tuyến yên - buồng trứng ngăn cản rụng trứng)?",
    correctAnswer: "Thuốc viên tránh thai kết hợp đường uống (COC) và que cấy tránh thai dưới da (Implanon)",
    distractors: [
      "Thuốc diệt tinh trùng đặt âm đạo tại chỗ chứa hoạt chất nonoxynol-9 tạo bọt",
      "Màng ngăn âm đạo cơ học phối hợp bao cao su nam làm từ cao su tự nhiên",
      "Gel bôi trơn tạo hàng rào cản trở vật lý tại cổ tử cung khi giao hợp"
    ],
    explanation: "Thuốc viên tránh thai kết hợp (COC), viên chỉ có progestin (POP), thuốc tiêm tránh thai (DMPA) và que cấy dưới da đều giải phóng hormone vào tuần hoàn toàn thân để ức chế tiết GnRH, LH, FSH ngăn chặn sự phóng noãn. Trong khi đó, bao cao su, màng ngăn, chất diệt tinh trùng chỉ có tác dụng cơ học/hóa học tại chỗ.",
    reference: "Dược lý học - Bài Thuốc nội tiết tố sinh dục và tránh thai"
  },
  {
    chapter: "Loãng xương, Tránh thai & Chuyển hóa",
    question: "Chế phẩm que cấy tránh thai dưới da (chứa 1 que đơn giải phóng liên tục 68 mg Etonogestrel) được cấy vào mặt trong cánh tay không thuận có thời gian duy trì hiệu quả tránh thai tối đa là:",
    correctAnswer: "03 năm (36 tháng)",
    distractors: [
      "01 năm (12 tháng)",
      "06 tháng (nửa năm)",
      "10 năm (120 tháng)"
    ],
    explanation: "Que cấy tránh thai Implanon NXT (chứa Etonogestrel 68 mg) là một que đơn dẻo được cấy dưới da ở mặt trong cánh tay, giải phóng chậm progestin duy trì nồng độ ức chế rụng trứng liên tục, có hiệu quả tránh thai lên đến 99,9% trong thời gian 3 năm.",
    reference: "Dược thư Quốc gia Việt Nam & Hướng dẫn SKSS Bộ Y tế"
  },

  // --- BÀI 4: ĐẠI CƯƠNG DLS & NGHỊ ĐỊNH 131/2020/NĐ-CP ---
  {
    chapter: "Đại cương DLS & Thông tin thuốc",
    question: "Yếu tố khách quan mang tính bước ngoặt thúc đẩy sự ra đời và phát triển mạnh mẽ của ngành Dược lâm sàng trên thế giới vào những năm 1960 là:",
    correctAnswer: "Sự bùng nổ số lượng thuốc mới phức tạp, các thảm họa quái thai do thuốc (như thalidomide) và sự gia tăng tai biến do thuốc (ADR)",
    distractors: [
      "Sự thiếu hụt bác sĩ phẫu thuật ngoại khoa trầm trọng tại các bệnh viện đa khoa tuyến tỉnh",
      "Việc các quốc gia phương Tây đồng loạt bãi bỏ việc sử dụng các dạng thuốc đông dược cổ truyền",
      "Do các tổ hợp hóa chất quốc tế ngừng cung cấp tá dược dung môi để dập viên nén tổng hợp"
    ],
    explanation: "Trong thập niên 1960, sự bùng nổ các loại dược phẩm tổng hợp mới phức tạp đi kèm với thảm họa quái thai do Thalidomide (1961), tỷ lệ biến cố có hại của thuốc (ADR), tương tác thuốc và sai sót kê đơn tăng vọt, đòi hỏi phải có dược sĩ trực tiếp tham gia vào nhóm chăm sóc lâm sàng để đảm bảo dùng thuốc an toàn và hợp lý.",
    reference: "Giáo trình Dược lâm sàng - Đại học Dược Hà Nội"
  },
  {
    chapter: "Đại cương DLS & Thông tin thuốc",
    question: "Điểm khác biệt căn bản về vai trò chuyên môn giữa Dược sĩ lâm sàng và Bác sĩ điều trị trong nhóm chăm sóc y tế tại bệnh viện là:",
    correctAnswer: "Bác sĩ chuyên trách chẩn đoán bệnh và chỉ định chiến lược điều trị; Dược sĩ lâm sàng chuyên trách tối ưu hóa sử dụng thuốc, giám sát hiệu quả, an toàn và cá thể hóa liều dùng",
    distractors: [
      "Bác sĩ không được quyền kê đơn thuốc mà việc ra y lệnh chỉ định thuốc hoàn toàn do Dược sĩ lâm sàng độc quyền quyết định",
      "Dược sĩ lâm sàng trực tiếp thực hiện các ca đại phẫu thuật ngoại khoa và can thiệp thủ thuật xâm lấn phức tạp thay cho bác sĩ",
      "Bác sĩ chịu trách nhiệm pha chế thuốc tại phòng kiểm nghiệm còn Dược sĩ lâm sàng đảm nhận công tác thanh toán viện phí BHYT"
    ],
    explanation: "Bác sĩ là người thăm khám, chẩn đoán xác định bệnh và đưa ra mục tiêu điều trị; Dược sĩ lâm sàng là chuyên gia về dược lý học lâm sàng, phối hợp cùng bác sĩ để lựa chọn thuốc tối ưu, chỉnh liều theo chức năng cơ quan, rà soát tương tác thuốc, theo dõi nồng độ thuốc trong máu (TDM), phát hiện ADR và hướng dẫn người bệnh dùng thuốc đúng cách.",
    reference: "Nghị định 131/2020/NĐ-CP của Chính phủ & Luật Dược 2016"
  },
  {
    chapter: "Đại cương DLS & Thông tin thuốc",
    question: "Theo Nghị định số 131/2020/NĐ-CP của Chính phủ quy định về tổ chức, hoạt động Dược lâm sàng, định mức người làm công tác dược lâm sàng tại cơ sở khám bệnh, chữa bệnh nội trú tối thiểu là:",
    correctAnswer: "01 người làm công tác dược lâm sàng cho mỗi 150 giường bệnh nội trú",
    distractors: [
      "01 người làm công tác dược lâm sàng cho mỗi 500 giường bệnh nội trú",
      "01 người làm công tác dược lâm sàng cho mỗi 050 giường bệnh nội trú",
      "01 người làm công tác dược lâm sàng cho mỗi 1.000 giường bệnh nội trú"
    ],
    explanation: "Theo Khoản 1 Điều 9 Nghị định 131/2020/NĐ-CP: 'Cơ sở khám bệnh, chữa bệnh có giường bệnh nội trú phải bố trí tối thiểu 01 người làm công tác dược lâm sàng cho mỗi 150 giường bệnh nội trú'.",
    reference: "Khoản 1 Điều 9 Nghị định 131/2020/NĐ-CP"
  },
  {
    chapter: "Đại cương DLS & Thông tin thuốc",
    question: "Theo quy định tại Nghị định 131/2020/NĐ-CP, tại cơ sở khám bệnh, chữa bệnh không có giường bệnh nội trú hoặc tại khoa khám bệnh ngoại trú, định mức nhân lực dược lâm sàng tối thiểu là:",
    correctAnswer: "01 người làm công tác dược lâm sàng cho mỗi 1.000 đơn thuốc được cấp phát trong một ngày",
    distractors: [
      "01 người làm công tác dược lâm sàng cho mỗi 0.100 đơn thuốc được cấp phát trong một ngày",
      "01 người làm công tác dược lâm sàng cho mỗi 5.000 đơn thuốc được cấp phát trong một ngày",
      "01 người làm công tác dược lâm sàng cho mỗi 10.000 đơn thuốc được cấp phát trong một ngày"
    ],
    explanation: "Khoản 2 Điều 9 Nghị định 131/2020/NĐ-CP quy định: 'Cơ sở khám bệnh, chữa bệnh không có giường bệnh nội trú phải bố trí tối thiểu 01 người làm công tác dược lâm sàng cho mỗi 1.000 đơn thuốc được cấp phát trong một ngày'.",
    reference: "Khoản 2 Điều 9 Nghị định 131/2020/NĐ-CP"
  },
  {
    chapter: "Đại cương DLS & Thông tin thuốc",
    question: "Căn cứ theo Nghị định 131/2020/NĐ-CP, người phụ trách hoạt động dược lâm sàng tại bệnh viện y học cổ truyền bắt buộc phải đáp ứng yêu cầu tối thiểu về trình độ chuyên môn nào?",
    correctAnswer: "Phải có bằng tốt nghiệp đại học ngành Dược (Dược sĩ đại học) trở lên và có chứng chỉ hành nghề dược phù hợp",
    distractors: [
      "Chỉ cần có bằng Dược sĩ trình độ trung cấp chuyên ngành thuốc đông dược và có thâm niên công tác trên 3 năm",
      "Chỉ cần có bằng Y sĩ y học cổ truyền có chứng chỉ bốc thuốc theo phương pháp gia truyền của cơ sở",
      "Bất kỳ điều dưỡng viên cao đẳng nào đã hoàn thành khóa bồi dưỡng ngắn hạn 1 tháng về cấp phát thuốc"
    ],
    explanation: "Điều 7 Nghị định 131/2020/NĐ-CP quy định người phụ trách hoạt động dược lâm sàng của cơ sở khám chữa bệnh (bao gồm bệnh viện y học cổ truyền) phải có bằng tốt nghiệp đại học ngành dược trở lên và chứng chỉ hành nghề dược có phạm vi hoạt động chuyên môn về dược lâm sàng.",
    reference: "Điều 7 Nghị định 131/2020/NĐ-CP"
  },
  {
    chapter: "Đại cương DLS & Thông tin thuốc",
    question: "Hoạt động nào sau đây thể hiện đúng bản chất của việc cung cấp thông tin thuốc CHỦ ĐỘNG của dược sĩ lâm sàng tại bệnh viện?",
    correctAnswer: "Tự giác thu thập, thẩm định các cảnh báo an toàn thuốc từ BYT/FDA để biên soạn Bản tin Dược lâm sàng và xây dựng danh mục tương tác thuốc trước khi có sự cố xảy ra",
    distractors: [
      "Ngồi tại phòng Dược lâm sàng đợi bác sĩ điều trị hoặc điều dưỡng đến hỏi thì mới bắt đầu mở tài liệu tra cứu thông tin theo yêu cầu",
      "Chỉ tiến hành gửi văn bản trả lời khiếu nại của bệnh nhân sau khi đã xảy ra tai biến do thuốc nghiêm trọng dẫn đến kiện tụng",
      "Ghi âm lại toàn bộ các câu hỏi thắc mắc của bệnh nhân tại quầy phát thuốc rồi gửi chuyển tiếp sang văn phòng hãng dược giải quyết"
    ],
    explanation: "Thông tin thuốc chủ động (Proactive) là việc Dược sĩ tự khởi xướng, dự báo nhu cầu thông tin, xây dựng bản tin thuốc, cập nhật hướng dẫn điều trị, ban hành bảng tra cứu tương kỵ/tương tác thuốc để phòng ngừa sai sót TRƯỚC KHI có yêu cầu. Khác với thông tin bị động (Reactive) là giải đáp khi có câu hỏi yêu cầu.",
    reference: "Giáo trình Dược lâm sàng - Phần Thông tin thuốc"
  },
  {
    chapter: "Đại cương DLS & Thông tin thuốc",
    question: "Mốc đánh dấu sự bắt đầu du nhập chính thức của chuyên ngành Dược lâm sàng vào hệ thống y tế Việt Nam là hội thảo quốc tế diễn ra vào năm nào tại Hà Nội?",
    correctAnswer: "Năm 1990",
    distractors: [
      "Năm 1975",
      "Năm 2005",
      "Năm 1960"
    ],
    explanation: "Năm 1990, hội thảo quốc tế về Dược lâm sàng đầu tiên được tổ chức tại Hà Nội với sự tài trợ của Pháp, đánh dấu sự ra đời và từng bước đưa môn học Dược lâm sàng vào chương trình đào tạo đại học Dược tại Việt Nam.",
    reference: "Lịch sử phát triển Dược lâm sàng Việt Nam - Bộ Y tế"
  },
  {
    chapter: "Đại cương DLS & Thông tin thuốc",
    question: "Tỷ số giữa Hiệu quả điều trị và Nguy cơ rủi ro (Benefit-Risk Ratio hay Chỉ số điều trị) được Dược sĩ lâm sàng sử dụng làm tiêu chí cốt lõi nhằm:",
    correctAnswer: "Đánh giá xem lợi ích lâm sàng mà thuốc đem lại có vượt trội hơn nguy cơ tai biến có hại cho người bệnh hay không",
    distractors: [
      "Xác định mức giá bán buôn hợp lý của biệt dược gốc so với thuốc generic lưu hành trên thị trường dược phẩm",
      "Tính toán hạn dùng tối đa của viên nén sau khi mở nắp lọ thuốc ở điều kiện độ ẩm và nhiệt độ phòng tiêu chuẩn",
      "Định lượng mức độ vô khuẩn và hàm lượng nội độc tố vi khuẩn endotoxin trong dung dịch tiêm truyền tĩnh mạch"
    ],
    explanation: "Tỷ lệ Lợi ích / Nguy cơ (Benefit-Risk Ratio) là nguyên tắc vàng trong Dược lâm sàng. Một thuốc chỉ được chỉ định khi lợi ích điều trị mang lại vượt trội so với nguy cơ gặp tai biến có hại (ADR). Thuốc có khoảng điều trị hẹp đòi hỏi phải giám sát tỷ số này cực kỳ nghiêm ngặt.",
    reference: "Nguyên lý Dược lâm sàng - Đánh giá Lợi ích/Nguy cơ"
  },

  // --- BÀI 5: CÁC THÔNG SỐ DƯỢC ĐỘNG HỌC (PK) ---
  {
    chapter: "Dược động học & Suy gan, thận",
    question: "Thông số dược động học cơ bản và quyết định nhất dùng để xác định mức độ hấp thu và tính toán sinh khả dụng tuyệt đối (Bioavailability - F) của một chế phẩm thuốc là:",
    correctAnswer: "Diện tích dưới đường cong nồng độ - thời gian (AUC - Area Under the Curve)",
    distractors: [
      "Thể tích phân bố biểu kiến của thuốc trong cơ thể (Vd - Volume of Distribution)",
      "Thời gian bán thải sinh học của thuốc trong huyết tương (T1/2 - Elimination Half-life)",
      "Nồng độ đỉnh tối đa của thuốc đạt được trong tuần hoàn (Cmax - Peak Concentration)"
    ],
    explanation: "AUC phản ánh tổng lượng thuốc nguyên vẹn vào được vòng tuần hoàn chung sau khi dùng thuốc. Sinh khả dụng tuyệt đối được tính bằng tỷ lệ: F = (AUC_PO / AUC_IV) * (Liều_IV / Liều_PO). Trong khi đó, Cmax và Tmax phản ánh tốc độ hấp thu.",
    reference: "Dược động học lâm sàng - Bài Đánh giá Sinh khả dụng"
  },
  {
    chapter: "Dược động học & Suy gan, thận",
    question: "Trong nhóm Benzodiazepin, Oxazepam được ưu tiên lựa chọn điều trị lo âu hoặc mất ngủ cho bệnh nhân cao tuổi hoặc suy giảm chức năng tế bào gan thay vì Diazepam do đặc tính dược động học nào?",
    correctAnswer: "Oxazepam chỉ qua phản ứng liên hợp glucuronic ở pha II tạo chất không hoạt tính thải qua thận, không qua hệ enzym CYP450 pha I và không tạo chất chuyển hóa có T1/2 kéo dài",
    distractors: [
      "Oxazepam hoàn toàn không gắn kết với protein huyết tương và được bài xuất nguyên vẹn qua mật xuống phân mà không qua chuyển hóa",
      "Oxazepam chuyển hóa cực nhanh qua gan nhờ sự cảm ứng mạnh mẽ của hệ enzym CYP3A4 nội sinh giúp đào thải tức thì sau 30 phút",
      "Oxazepam không gây ra bất kỳ hiện tượng dung nạp thuốc hay lệ thuộc tâm thần nào kể cả khi dùng liều cao liên tục nhiều năm"
    ],
    explanation: "Nhóm 'LOT' (Lorazepam, Oxazepam, Temazepam) chỉ chuyển hóa qua phản ứng liên hợp trực tiếp ở Pha II (ít bị ảnh hưởng bởi tuổi tác và xơ gan), không tạo chất chuyển hóa hoạt tính và T1/2 ngắn. Ngược lại, Diazepam chuyển hóa qua Pha I (CYP2C19, CYP3A4) tạo chất chuyển hóa có hoạt tính Nordiazepam có T1/2 > 100 giờ, tích lũy gây an thần kéo dài, lú lẫn và té ngã ở người già.",
    reference: "Dược lý học lâm sàng & Beers Criteria"
  },
  {
    chapter: "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    question: "Thuốc giãn cơ Rocuronium (hoặc Vecuronium) được ưu tiên lựa chọn khi gây mê toàn thân trong phẫu thuật mổ lấy thai cấp cứu vì thuốc có đặc tính dược động học nào giúp hạn chế tối đa ảnh hưởng lên thai nhi?",
    correctAnswer: "Là phân tử amin bậc 4 tích điện cao, tan kém trong lipid nên rất khó khuếch tán qua hàng rào nhau thai",
    distractors: [
      "Là phân tử thân dầu cao, không tích điện nên khuếch tán cực nhanh qua hàng rào máu não thai nhi",
      "Bị phân hủy hoàn toàn bởi acid dịch vị dạ dày của người mẹ trước khi kịp hấp thu vào tuần hoàn máu",
      "Chuyển hóa tức thì thành chất đối kháng thụ thể nicotinic không còn hoạt tính sinh học ngay tại gan"
    ],
    explanation: "Các thuốc chẹn thần kinh cơ không khử cực (như Rocuronium, Atracurium) mang gốc amoni bậc bốn tích điện dương ở pH sinh lý, độ tan trong lipid rất thấp (kém tan trong mỡ). Do đó, thuốc hầu như không qua được hàng rào nhau thai ở liều điều trị, an toàn cho trẻ sơ sinh.",
    reference: "Dược lâm sàng chuyên ngành Gây mê hồi sức sản khoa"
  },
  {
    chapter: "Dược động học & Suy gan, thận",
    question: "Ở bệnh nhân suy dinh dưỡng, suy kiệt nặng, sự thay đổi dược động học nào sau đây làm tăng nguy cơ ngộ độc đối với các thuốc có tỷ lệ liên kết protein huyết tương cao (như Phenytoin, Warfarin)?",
    correctAnswer: "Nồng độ Albumin huyết tương giảm mạnh làm tăng tỷ lệ thuốc ở dạng tự do (dạng có hoạt tính sinh học) trong máu",
    distractors: [
      "Thể tích tuần hoàn tăng vọt làm pha loãng toàn bộ nồng độ thuốc dẫn đến mất hoàn toàn hiệu quả điều trị",
      "Hoạt tính men gan CYP450 tăng vọt làm tăng đào thải thuốc qua phân dẫn đến giảm nồng độ đáy của thuốc",
      "Nồng độ protein huyết tương tăng cao làm bất hoạt hoàn toàn lượng thuốc trong máu ngăn cản thuốc vào mô đích"
    ],
    explanation: "Bệnh nhân suy kiệt có nồng độ albumin huyết tương giảm mạnh. Các thuốc gắn mạnh vào albumin (> 90%) sẽ bị giảm vị trí gắn kết, dẫn đến tăng nồng độ thuốc tự do (unbound free fraction). Chính dạng tự do này khuếch tán vào mô và gây độc tính lâm sàng, dù nồng độ toàn phần trong xét nghiệm có thể vẫn bình thường.",
    reference: "Dược động học lâm sàng trên các đối tượng bệnh lý đặc biệt"
  },
  {
    chapter: "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    question: "Một phân tử thuốc có đặc điểm hóa lý nào sau đây sẽ DỄ DÀNG khuếch tán qua hàng rào nhau thai và bài xuất với nồng độ cao vào sữa mẹ?",
    correctAnswer: "Trọng lượng phân tử nhỏ (< 500 Da), độ tan trong lipid cao, mức độ ion hóa thấp ở pH sinh lý và tỷ lệ liên kết protein huyết tương thấp",
    distractors: [
      "Trọng lượng phân tử rất lớn (> 1000 Da), tích điện mạnh ở pH sinh lý, tan hoàn toàn trong nước và gắn protein huyết tương 99%",
      "Trọng lượng phân tử trung bình, tan kém trong lipid, mức độ ion hóa tối đa 100% tại cả pH huyết tương mẹ lẫn pH sữa mẹ",
      "Dạng phức hợp cao phân tử gắn kết không thuận nghịch với albumin huyết tương và không hòa tan trong bất kỳ dung môi hữu cơ nào"
    ],
    explanation: "Hàng rào nhau thai và biểu mô nang tuyến vú là các màng lipid kép. Các thuốc có kích thước phân tử nhỏ (< 500 Da), tính thân dầu (lipophilic) cao, dạng không ion hóa và dạng tự do trong huyết tương sẽ dễ dàng khuếch tán thụ động qua màng. Ngoài ra, do sữa mẹ có pH hơi acid (7.0 - 7.2) hơn huyết tương (7.4), các thuốc có tính base yếu sẽ bị 'bẫy ion' và tích tụ nồng độ cao trong sữa.",
    reference: "Dược thư Quốc gia Việt Nam - Sử dụng thuốc cho phụ nữ có thai và cho con bú"
  },
  {
    chapter: "Dược động học & Suy gan, thận",
    question: "Thuốc chống động kinh Phenytoin có tỷ lệ liên kết với protein huyết tương khoảng 90%. Ý nghĩa lâm sàng quan trọng nhất của thông số này trong theo dõi nồng độ thuốc điều trị (TDM) là gì?",
    correctAnswer: "Chỉ có 10% nồng độ thuốc ở dạng tự do phát huy tác dụng; khi albumin máu giảm, dạng tự do có thể tăng gấp đôi gây ngộ độc dù nồng độ toàn phần không đổi",
    distractors: [
      "Toàn bộ 90% lượng thuốc gắn protein sẽ lập tức bị đào thải qua nước tiểu mà hoàn toàn không thể tham gia vào bất kỳ phản ứng dược lý nào",
      "Thuốc hoàn toàn mất hiệu lực sinh học đối với hệ thần kinh trung ương nếu nồng độ albumin huyết tương của bệnh nhân tăng vượt quá 50 g/L",
      "Bệnh nhân bắt buộc phải tăng liều uống lên gấp 10 lần liều thông thường để bão hòa toàn bộ các vị trí gắn kết trước khi thuốc có tác dụng"
    ],
    explanation: "Phenytoin gắn kết 90% với Albumin, chỉ 10% ở dạng tự do. Khi albumin huyết tương giảm (từ 40 xuống 20 g/L), dạng tự do có thể tăng từ 10% lên 20% (tăng gấp đôi nguy cơ ngộ độc thần kinh như rung giật nhãn cầu, thất điều), trong khi nồng độ toàn phần đo được vẫn trong khoảng điều trị 10-20 mg/L. Cần dùng công thức Sheiner-Tozer để hiệu chỉnh.",
    reference: "Giám sát nồng độ thuốc trong điều trị (TDM) - Phenytoin"
  },

  // --- BÀI 6: CHỈ SỐ XÉT NGHIỆM LÂM SÀNG ---
  {
    chapter: "Xét nghiệm lâm sàng & Nhận định KQ",
    question: "Các đơn vị đo lường như mol/L, mmol/L, kg, K (Kelvin) được áp dụng rộng rãi trong y sinh học và cận lâm sàng thuộc hệ thống đơn vị nào?",
    correctAnswer: "Hệ đo lường quốc tế SI (Système International d'Unités)",
    distractors: [
      "Hệ đo lường thông thường của Mỹ (US Customary Units)",
      "Hệ đo lường quy ước cổ truyền Anh (Imperial Units)",
      "Hệ thống đơn vị dược điển La Mã cổ đại chuẩn hóa"
    ],
    explanation: "Hệ SI (Système International d'Unités) là hệ thống đo lường quốc tế chuẩn hóa. Trong hóa sinh lâm sàng, các chất có khối lượng phân tử xác định (như glucose, điện giải, urê, creatinine) được khuyến cáo biểu thị bằng đơn vị mol hoặc phân đoạn của mol (mmol/L, µmol/L).",
    reference: "Hóa sinh lâm sàng & Các chỉ số xét nghiệm"
  },
  {
    chapter: "Xét nghiệm lâm sàng & Nhận định KQ",
    question: "Theo tiêu chuẩn của Hiệp hội Đái tháo đường Hoa Kỳ (ADA) và Bộ Y tế, nồng độ glucose huyết tương lúc đói (FPG - nhịn ăn ít nhất 8 giờ) ở mức nào sau đây (xét nghiệm 2 lần độc lập) được chẩn đoán xác định là đái tháo đường?",
    correctAnswer: ">= 7,0 mmol/L (tương đương >= 126 mg/dL)",
    distractors: [
      ">= 5,6 mmol/L (tương đương >= 100 mg/dL)",
      ">= 11,1 mmol/L (tương đương >= 200 mg/dL)",
      ">= 6,1 mmol/L (tương đương >= 110 mg/dL)"
    ],
    explanation: "Tiêu chuẩn chẩn đoán đái tháo đường theo ADA/BYT: (1) Glucose huyết tương lúc đói >= 7,0 mmol/L (126 mg/dL); hoặc (2) Glucose 2 giờ sau nghiệm pháp dung nạp 75g glucose >= 11,1 mmol/L (200 mg/dL); hoặc (3) HbA1c >= 6,5%; hoặc (4) Bệnh nhân có triệu chứng kinh điển của tăng đường huyết kèm glucose ngẫu nhiên >= 11,1 mmol/L. Mức 5,6 - 6,9 mmol/L được xếp vào tiền đái tháo đường.",
    reference: "Hướng dẫn chẩn đoán và điều trị đái tháo đường týp 2 - Bộ Y tế"
  },
  {
    chapter: "Xét nghiệm lâm sàng & Nhận định KQ",
    question: "Tình trạng giảm nồng độ protein toàn phần huyết thanh thường gặp trong suy tế bào gan nặng, hội chứng thận hư hoặc suy dinh dưỡng, và thành phần protein bị suy giảm chủ yếu chiếm tỷ trọng lớn nhất là:",
    correctAnswer: "Albumin (chiếm hơn 50-60% tổng lượng protein huyết thanh)",
    distractors: [
      "Fibrinogen (chiếm tỷ trọng nhỏ tham gia con đường đông máu)",
      "Gamma globulin (chiếm tỷ trọng trung bình do tương bào tiết)",
      "Alpha-1 antitrypsin (protein ức chế protease tại phổi)"
    ],
    explanation: "Albumin do gan tổng hợp và chiếm hơn 50-60% tổng lượng protein huyết thanh, đóng vai trò chính tạo áp lực keo huyết tương. Khi suy giảm chức năng tổng hợp của gan, hội chứng thận hư (thất thoát qua cầu thận) hay bỏng nặng, thành phần sụt giảm sâu và quan trọng nhất là Albumin.",
    reference: "Hóa sinh lâm sàng - Đánh giá protein huyết thanh"
  },
  {
    chapter: "Xét nghiệm lâm sàng & Nhận định KQ",
    question: "Trong các enzym gan, enzym nào sau đây có độ nhạy rất cao phản ánh tình trạng ứ mật và đặc biệt tăng cao trong bệnh gan do lạm dụng rượu bia hoặc xơ gan ứ mật?",
    correctAnswer: "GGT (Gamma-Glutamyl Transferase) và ALP (Alkaline Phosphatase)",
    distractors: [
      "Amylase và Lipase huyết thanh trong bệnh lý viêm tụy cấp",
      "CK-MB và Troponin T trong bệnh lý nhồi máu hoại tử cơ tim",
      "Acid Phosphatase tiền liệt tuyến trong ung thư biểu mô tuyến"
    ],
    explanation: "GGT phân bố nhiều ở biểu mô đường mật và màng tế bào gan. GGT tăng rất nhạy khi có ứ mật trong hoặc ngoài gan và là chất chỉ điểm sinh học nhạy cảm nhất đối với tình trạng tổn thương gan do rượu (cảm ứng enzym do ethanol). ALP tăng cao đặc hiệu trong tắc mật và bệnh lý xương. ALT (GPT) đặc hiệu hơn cho hoại tử tế bào gan.",
    reference: "Nhận định xét nghiệm chức năng gan - Bộ Y tế"
  },
  {
    chapter: "Xét nghiệm lâm sàng & Nhận định KQ",
    question: "Bệnh nhân có biểu hiện vàng da, xét nghiệm thấy: Bilirubin trực tiếp tăng rất cao (chiếm > 50% toàn phần), Bilirubin gián tiếp tăng nhẹ, men ALP và GGT tăng gấp 4 lần bình thường, nước tiểu sẫm màu có Bilirubin niệu (+), phân bạc màu như phân cò. Kết quả này định hướng đến nguyên nhân:",
    correctAnswer: "Vàng da sau gan do tắc nghẽn đường mật (như sỏi ống mật chủ, u đầu tụy)",
    distractors: [
      "Vàng da trước gan do tan máu huyết tán cấp tính tan rã hồng cầu ồ ạt",
      "Vàng da bẩm sinh lành tính do thiếu hụt protein vận chuyển Gilbert",
      "Vàng da sinh lý do chưa hoàn thiện enzym glucuronyl transferase ở gan"
    ],
    explanation: "Vàng da sau gan (tắc mật): Bilirubin đã được liên hợp tại gan không xuống được ruột nên ứ lại tràn vào máu làm Bilirubin trực tiếp tăng vọt, bài xuất qua nước tiểu làm nước tiểu sẫm màu; thiếu sắc tố mật stercobilin xuống ruột làm phân bạc màu; kèm theo ALP và GGT tăng rất cao. Ngược lại, vàng da tan máu (trước gan) thì Bilirubin gián tiếp tăng ưu thế và phân sẫm màu.",
    reference: "Hóa sinh lâm sàng - Chẩn đoán phân biệt vàng da"
  },
  {
    chapter: "Xét nghiệm lâm sàng & Nhận định KQ",
    question: "Để đánh giá mức độ tổn thương và hoại tử tế bào gan trong viêm gan virus cấp hoặc viêm gan do thuốc (DILI), hai enzym aminotransferase huyết thanh cơ bản cần làm xét nghiệm là:",
    correctAnswer: "AST (SGOT) và ALT (SGPT)",
    distractors: [
      "Ure máu và Creatinine huyết thanh",
      "Troponin I và Peptide lợi niệu BNP",
      "Lipase và Amylase dịch tiêu hóa"
    ],
    explanation: "AST (Aspartate Aminotransferase hay SGOT) và ALT (Alanine Aminotransferase hay SGPT) là các transaminase nội bào. Khi màng tế bào gan bị tổn thương hoặc hoại tử, enzym giải phóng ồ ạt vào máu. ALT có tính đặc hiệu cho gan cao hơn AST (do AST còn có ở cơ tim, cơ vân, hồng cầu).",
    reference: "Đánh giá chức năng gan trong Dược lâm sàng"
  },
  {
    chapter: "Xét nghiệm lâm sàng & Nhận định KQ",
    question: "Bệnh nhân nữ, 40 tuổi, cân nặng 58 kg, chiều cao 160 cm, nồng độ Creatinine huyết thanh đo được là 170 µmol/L. Độ thanh thải Creatinine (CrCl) ước tính theo công thức Cockcroft-Gault của bệnh nhân này xấp xỉ là:",
    correctAnswer: "35,6 ml/phút (tương ứng suy giảm chức năng thận độ 3 mức độ trung bình)",
    distractors: [
      "62,5 ml/phút (tương ứng suy giảm chức năng thận độ 2 mức độ nhẹ vừa)",
      "85,2 ml/phút (tương ứng chức năng lọc cầu thận ở giới hạn bình thường)",
      "18,3 ml/phút (tương ứng suy giảm chức năng thận độ 4 mức độ rất nặng)"
    ],
    explanation: "Áp dụng công thức Cockcroft-Gault khi Creatinine tính bằng µmol/L: CrCl (ml/phút) = [(140 - Tuổi) x Cân nặng x Hệ số nữ 0,85] / [0,814 x Creatinine (µmol/L)]. Thay số: CrCl = [(140 - 40) x 58 x 0,85] / [0,814 x 170] = [100 x 58 x 0,85] / 138,38 = 4930 / 138,38 ≈ 35,6 ml/phút. Mức này tương ứng suy thận mức độ trung bình (độ 3).",
    reference: "Dược động học lâm sàng - Đánh giá chức năng thận theo Cockcroft-Gault"
  },
  {
    chapter: "Xét nghiệm lâm sàng & Nhận định KQ",
    question: "Bệnh nhân nam, 54 tuổi, cân nặng 60 kg, chiều cao 170 cm, nồng độ Creatinine huyết thanh là 160 µmol/L. Độ thanh thải Creatinine (CrCl) ước tính theo công thức Cockcroft-Gault của bệnh nhân này xấp xỉ là:",
    correctAnswer: "39,6 ml/phút (tương ứng suy giảm chức năng thận độ 3 mức độ trung bình)",
    distractors: [
      "55,8 ml/phút (tương ứng suy giảm chức năng thận độ 2 mức độ nhẹ vừa)",
      "78,4 ml/phút (tương ứng chức năng lọc cầu thận ở giới hạn bình thường)",
      "22,1 ml/phút (tương ứng suy giảm chức năng thận độ 4 mức độ rất nặng)"
    ],
    explanation: "Với bệnh nhân nam (không nhân hệ số 0,85): CrCl (ml/phút) = [(140 - Tuổi) x Cân nặng] / [0,814 x Creatinine (µmol/L)]. Thay số: CrCl = [(140 - 54) x 60] / [0,814 x 160] = [86 x 60] / 130,24 = 5160 / 130,24 ≈ 39,6 ml/phút.",
    reference: "Dược động học lâm sàng - Tính toán hiệu chỉnh liều theo chức năng thận"
  },
  {
    chapter: "Xét nghiệm lâm sàng & Nhận định KQ",
    question: "Tình trạng tăng nồng độ Urê máu và Creatinine máu do nguyên nhân 'sau thận' (Post-renal azotemia) thường xuất phát từ cơ chế bệnh sinh nào?",
    correctAnswer: "Tắc nghẽn cơ học đường dẫn nước tiểu (như sỏi niệu quản hai bên, sỏi kẹt cổ bàng quang, u xơ tuyến tiền liệt)",
    distractors: [
      "Mất nước cấp tính nặng do tiêu chảy nhiễm khuẩn hoặc sốc tụt huyết áp gây giảm tưới máu thận",
      "Hoại tử ống thận cấp do lắng đọng độc chất hoặc độc tính tích lũy của kháng sinh aminoglycosid",
      "Viêm cầu thận tiến triển nhanh kèm theo tăng sinh màng tế bào nội mô mạch máu thận lan tỏa"
    ],
    explanation: "Tăng nito phi protein máu (ure, creatinine) được chia làm 3 nhóm: (1) Trước thận: do giảm tưới máu thận (mất nước, sốc, suy tim); (2) Tại thận: do tổn thương chủ mô thận (viêm cầu thận, hoại tử ống thận); (3) Sau thận: do cản trở cơ học đường đào thải nước tiểu (sỏi đường tiết niệu, phì đại hoặc ung thư tiền liệt tuyến, chít hẹp niệu đạo).",
    reference: "Sinh lý bệnh học thận - tiết niệu"
  },
  {
    chapter: "Xét nghiệm lâm sàng & Nhận định KQ",
    question: "Bệnh nhân xuất hiện nhiều chấm và mảng xuất huyết bầm tím dưới da tự nhiên rải rác toàn thân, không sốt, không có dấu hiệu nhiễm trùng. Xét nghiệm huyết học cho thấy số lượng tiểu cầu giảm sâu xuống còn 12 G/L (khoảng tham chiếu bình thường 150 - 400 G/L), các dòng hồng cầu và bạch cầu bình thường. Định hướng chẩn đoán hàng đầu là:",
    correctAnswer: "Xuất huyết giảm tiểu cầu miễn dịch nguyên phát (ITP)",
    distractors: [
      "Sốt xuất huyết Dengue thể nặng có biến chứng sốc",
      "Thiếu máu bất sản tủy toàn bộ ba dòng tế bào máu",
      "Rối loạn đông máu nội mạch rải rác do nhiễm khuẩn huyết"
    ],
    explanation: "Bệnh nhân không sốt, không có hội chứng nhiễm trùng, chỉ có xuất huyết do giảm đơn độc dòng tiểu cầu nặng (12 G/L, < 20 G/L có nguy cơ xuất huyết nội tạng cao), các dòng khác bình thường => hướng tới bệnh cảnh kinh điển của Xuất huyết giảm tiểu cầu miễn dịch (Immune Thrombocytopenic Purpura - ITP). Thuốc điều trị đầu tay là Corticoid liều cao (Methylprednisolone) hoặc IVIG.",
    reference: "Huyết học lâm sàng - Chẩn đoán và điều trị ITP"
  },
  {
    chapter: "Xét nghiệm lâm sàng & Nhận định KQ",
    question: "Chỉ số sinh học (Biomarker) có độ nhạy và độ đặc hiệu cao nhất hiện nay, được xem là 'tiêu chuẩn vàng' để chẩn đoán hoại tử tế bào cơ tim trong nhồi máu cơ tim cấp hoặc viêm cơ tim cấp là:",
    correctAnswer: "Troponin T độ nhạy cao (hs-cTnT) hoặc Troponin I độ nhạy cao (hs-cTnI)",
    distractors: [
      "Nồng độ Glucose huyết tương và chỉ số glycated hemoglobin HbA1c",
      "Hoạt độ men Bilirubin toàn phần và phosphatase kiềm ALP huyết thanh",
      "Nồng độ Acid uric máu kết hợp định lượng nồng độ ure niệu 24 giờ"
    ],
    explanation: "Troponin tim (cTnI và cTnT) là phức hợp protein điều hòa co cơ chỉ có ở tế bào cơ tim. Khi cơ tim bị hoại tử hoặc viêm cấp, troponin phóng thích vào máu rất sớm và duy trì kéo dài 7-14 ngày. Xét nghiệm hs-cTn có độ nhạy và đặc hiệu vượt trội so với CK-MB và AST.",
    reference: "Khuyến cáo chẩn đoán Hội chứng vành cấp - ESC & VNHA"
  },

  // --- BÀI 7: TƯƠNG TÁC THUỐC ---
  {
    chapter: "Tương tác thuốc & Tương kỵ",
    question: "Việc sử dụng Naloxon để cấp cứu ngộ độc quá liều Morphin dựa trên loại tương tác thuốc nào?",
    correctAnswer: "Tương tác dược lực học - Đối kháng cạnh tranh trực tiếp trên thụ thể Mu-opioid",
    distractors: [
      "Tương tác dược động học - Cảm ứng mạnh mẽ hệ enzym chuyển hóa cytochrom tại gan",
      "Tương tác hóa học - Phản ứng tạo muối kết tủa không tan trong lòng mạch máu toàn thân",
      "Tương tác dược động học - Làm chậm và ức chế hoàn toàn hấp thu thuốc qua niêm mạc ruột"
    ],
    explanation: "Naloxon là chất đối kháng cạnh tranh thuần túy trên thụ thể opioid (đặc biệt là thụ thể mu). Naloxon có ái lực rất mạnh với thụ thể nhưng không có hoạt tính nội tại, cạnh tranh đẩy phân tử Morphin ra khỏi thụ thể, lập tức đảo ngược tình trạng ức chế hô hấp và hôn mê do morphin.",
    reference: "Dược lý học lâm sàng - Tương tác đối kháng cạnh tranh"
  },
  {
    chapter: "Tương tác thuốc & Tương kỵ",
    question: "Phối hợp thuốc chống trầm cảm ức chế tái thu hồi chọn lọc serotonin (SSRI như Fluoxetin, Sertralin) với thuốc nào sau đây bị CHỐNG CHỈ ĐỊNH do nguy cơ khởi phát Hội chứng Serotonin cấp tính đe dọa tính mạng?",
    correctAnswer: "Thuốc ức chế men Monoamine Oxidase (như IMAO Moclobemid, Selegiline) hoặc kháng sinh Linezolid",
    distractors: [
      "Thuốc kháng acid chứa nhôm hydroxyd và magnesi hydroxyd dạng hỗn dịch uống",
      "Thuốc kháng histamin H2 Famotidin hoặc Cimetidin liều tiêu chuẩn ban đêm",
      "Thuốc nhuận tràng thẩm thấu Lactulose hoặc Macrogol dạng gói bột hòa tan"
    ],
    explanation: "SSRI ức chế tái thu hồi serotonin, còn IMAO (và cả kháng sinh Linezolid vốn có hoạt tính ức chế MAO) ức chế enzym thoái giáng serotonin. Dùng đồng thời làm nồng độ serotonin trong khe synap tăng vọt, gây Hội chứng Serotonin đặc trưng bởi: kích động mê sảng, co giật cơ, tăng phản xạ, sốt cao ác tính, rối loạn thần kinh thực vật và tử vong.",
    reference: "Dược thư Quốc gia Việt Nam - Chuyên luận Fluoxetin & Linezolid"
  },
  {
    chapter: "Tương tác thuốc & Tương kỵ",
    question: "Khi điều trị suy tim bằng Glycosid tim (Digoxin), cần hết sức thận trọng và theo dõi sát điện giải đồ khi phối hợp với thuốc nào sau đây do nguy cơ làm hạ kali máu, dẫn đến bùng phát ngộ độc Digoxin gây loạn nhịp tim nguy hiểm?",
    correctAnswer: "Thuốc lợi tiểu quai (Furosemid) hoặc Corticoid liều cao",
    distractors: [
      "Thuốc lợi tiểu giữ kali Spironolacton hoặc Amilorid",
      "Thuốc ức chế men chuyển Enalapril hoặc Perindopril",
      "Thuốc bổ sung muối Kali clorid dạng viên giải phóng chậm"
    ],
    explanation: "Digoxin ức chế bơm Na+/K+-ATPase bằng cách cạnh tranh với ion K+ tại vị trí gắn kết bên ngoài màng tế bào cơ tim. Furosemid gây mất kali qua nước tiểu làm hạ K+ máu, tạo điều kiện cho Digoxin gắn chặt hơn vào bơm Na+/K+-ATPase, làm tăng độc tính tim đột ngột gây ngoại tâm thu thất, nhịp nhanh thất hoặc rung thất.",
    reference: "Tương tác thuốc trong thực hành lâm sàng - Bộ Y tế"
  },
  {
    chapter: "Tương tác thuốc & Tương kỵ",
    question: "Kháng sinh Fluoroquinolon (như Ciprofloxacin, Levofloxacin) bị giảm hấp thu nghiêm trọng qua đường uống khi dùng chung với thuốc kháng acid Antacid là do cơ chế tương tác nào?",
    correctAnswer: "Các ion kim loại đa hóa trị (Al3+, Mg2+, Ca2+) trong antacid tạo phức chelat không tan và không hấp thu với phân tử quinolon",
    distractors: [
      "Antacid phá hủy hoàn toàn cấu trúc vòng beta-lactam của kháng sinh do làm thay đổi pH môi trường dạ dày",
      "Antacid gây cảm ứng mạnh mẽ enzym chuyển hóa CYP1A2 tại gan làm tăng tốc độ bài xuất kháng sinh qua mật",
      "Antacid làm tăng áp lực lọc cầu thận và kiềm hóa nước tiểu dẫn đến tăng đào thải quinolon qua đường niệu"
    ],
    explanation: "Phân tử fluoroquinolon có các nhóm chức ceton và carboxyl tạo phức chelat (chelation) rất bền và không tan với các cation kim loại hóa trị 2 và 3 (Al3+, Mg2+, Ca2+, Fe2+, Zn2+). Phức hợp này không hấp thu được qua niêm mạc ruột, làm sinh khả dụng của kháng sinh giảm từ 50-90%. Cần uống fluoroquinolon ít nhất 2 giờ trước hoặc 4 giờ sau antacid.",
    reference: "Dược lý học lâm sàng - Bài Tương tác thuốc ở giai đoạn hấp thu"
  },
  {
    chapter: "Tương tác thuốc & Tương kỵ",
    question: "Phenobarbital là thuốc điều trị động kinh có tác dụng gây cảm ứng mạnh hệ enzym Cytochrome P450 (CYP) ở gan. Khi dùng phối hợp thuốc này dài ngày, cần lưu ý điều chỉnh liều của các thuốc dùng kèm chuyển hóa qua gan như thế nào?",
    correctAnswer: "Phải tăng liều các thuốc dùng kèm (như Thuốc tránh thai đường uống, Warfarin, Theophyllin, Corticoid) vì tốc độ chuyển hóa thuốc tăng làm giảm nồng độ điều trị",
    distractors: [
      "Phải giảm liều các thuốc dùng kèm xuống 1/2 liều thông thường để ngăn ngừa nguy cơ ngộ độc cấp tính do tích lũy thuốc trong máu",
      "Không cần điều chỉnh liều lượng vì phenobarbital hoàn toàn không làm thay đổi sinh khả dụng hay chuyển hóa của các thuốc khác",
      "Bắt buộc ngừng ngay lập tức phenobarbital trong vòng 24 giờ đầu tiên và thay thế bằng thuốc an thần thảo dược không qua gan"
    ],
    explanation: "Phenobarbital cảm ứng mạnh CYP3A4, CYP2C9, CYP1A2..., làm tăng tốc độ chuyển hóa các thuốc dùng cùng, khiến nồng độ của chúng trong máu sụt giảm nghiêm trọng, dẫn đến thất bại điều trị (ví dụ: làm mất tác dụng ngừa thai của thuốc tránh thai gây vỡ kế hoạch, giảm hiệu quả chống đông của Warfarin). Ngược lại, khi ngừng phenobarbital, nếu không giảm liều thuốc dùng kèm thì bệnh nhân sẽ bị ngộ độc.",
    reference: "Dược thư Quốc gia Việt Nam - Tương tác thuốc do cảm ứng enzym"
  },
  {
    chapter: "Tương tác thuốc & Tương kỵ",
    question: "Bệnh nhân đang sử dụng thuốc chống trầm cảm nhóm ức chế men Monoamine Oxidase (IMAO) nếu ăn các thực phẩm giàu chất nào sau đây (như phô mai lên men lâu năm, rượu vang đỏ, thịt hun khói) có thể khởi phát cơn tăng huyết áp kịch phát ác tính ('Cheese effect')?",
    correctAnswer: "Tyramine",
    distractors: [
      "Tryptophan",
      "Thiamine",
      "Cholesterol"
    ],
    explanation: "Tyramine là một amin sinh học có trong thực phẩm lên men. Bình thường tyramine bị phân hủy bởi enzym MAO tại niêm mạc ruột và gan. Khi dùng thuốc IMAO, tyramine không bị giáng hóa, hấp thu nguyên vẹn vào tuần hoàn và kích thích đầu tận cùng sợi giao cảm giải phóng ồ ạt Noradrenaline, gây co mạch dữ dội và cơn tăng huyết áp kịch phát dẫn đến xuất huyết não tử vong.",
    reference: "Tương tác giữa thuốc và thức ăn - ĐH Dược Hà Nội"
  },

  // --- BÀI 8: ADR & SỐC PHẢN VỆ ---
  {
    chapter: "ADR, Dị ứng & Sốc phản vệ",
    question: "Thiếu hụt di truyền men Glucose-6-Phosphate Dehydrogenase (G6PD) dẫn đến cơn tan máu huyết tán cấp tính khi bệnh nhân sử dụng thuốc có tính oxy hóa (như Dapsone, Primaquine, Sulfamethoxazole) được xếp vào phân loại ADR typ nào?",
    correctAnswer: "ADR Typ B (Bizarre - Phản ứng dị ứng hoặc đặc ứng di truyền Idiosyncrasy)",
    distractors: [
      "ADR Typ A (Augmented - Tác dụng dược lý quá mức phụ thuộc liều dùng)",
      "ADR Typ C (Chronic - Tác dụng liên quan đến liều tích lũy dài hạn)",
      "ADR Typ D (Delayed - Tác dụng xuất hiện muộn gây quái thai đột biến)"
    ],
    explanation: "Phân loại Rawlins & Thompson: ADR Typ B (Bizarre) là những phản ứng kỳ dị, không dự đoán được từ tác dụng dược lý thông thường của thuốc, không phụ thuộc vào liều dùng, tỷ lệ mắc thấp nhưng tỷ lệ tử vong cao; bao gồm phản ứng dị ứng miễn dịch và phản ứng đặc ứng do biến dị di truyền (như thiếu men G6PD gây tan máu).",
    reference: "Giáo trình Cảnh giác Dược & Theo dõi ADR - Bộ Y tế"
  },
  {
    chapter: "ADR, Dị ứng & Sốc phản vệ",
    question: "Đặc điểm nào sau đây thuộc về bản chất của thuốc làm gia tăng đáng kể nguy cơ xuất hiện các biến cố bất lợi (ADR) nghiêm trọng trên lâm sàng?",
    correctAnswer: "Thuốc có khoảng điều trị hẹp (Narrow Therapeutic Index - khoảng cách giữa liều điều trị và liều độc rất nhỏ)",
    distractors: [
      "Thuốc có khoảng điều trị rất rộng (như Penicillin hoặc Paracetamol ở khoảng liều tiêu chuẩn thông thường)",
      "Thuốc hoàn toàn không hấp thu vào hệ tuần hoàn chung mà chỉ phát huy tác dụng bao phủ bề mặt tại chỗ",
      "Thuốc có thời gian bán thải sinh học cực ngắn dưới 5 phút và không có ái lực gắn kết protein huyết tương"
    ],
    explanation: "Các thuốc có chỉ số điều trị hẹp (như Digoxin, Warfarin, Theophyllin, Aminoglycosid, Lithi, Phenytoin...) có nồng độ gây độc rất sát với nồng độ có hiệu quả điều trị. Chỉ một biến động nhỏ về liều lượng, chức năng đào thải gan thận hoặc tương tác thuốc đều dễ dàng đẩy nồng độ vào vùng gây độc tính nguy hiểm.",
    reference: "Dược lý học lâm sàng - Đánh giá an toàn thuốc"
  },
  {
    chapter: "ADR, Dị ứng & Sốc phản vệ",
    question: "Phản ứng quá mẫn muộn (Type IV theo phân loại Coombs & Gell) như viêm da tiếp xúc do thuốc, hồng ban đa dạng hoặc hội chứng Stevens-Johnson do thành phần nào của hệ miễn dịch làm trung gian khởi phát?",
    correctAnswer: "Lympho bào T mẫn cảm (T-cells) giải phóng các cytokin gây viêm và kích hoạt đại thực bào",
    distractors: [
      "Kháng thể IgE gắn trên bề mặt tế bào mast và bạch cầu ái kiềm gây giải phóng histamin ồ ạt",
      "Phức hợp miễn dịch kháng nguyên - kháng thể IgG lưu hành lắng đọng tại nội mạc thành mạch",
      "Kháng thể IgG và IgM hoạt hóa hệ thống bổ thể làm ly giải màng tế bào hồng cầu trực tiếp"
    ],
    explanation: "Phản ứng quá mẫn type IV là phản ứng miễn dịch qua trung gian tế bào (không do kháng thể lưu hành). Kháng nguyên thuốc kết hợp với protein nội sinh được trình diện cho tế bào T mẫn cảm; khi tiếp xúc lại, tế bào T hoạt hóa giải phóng lymphokine tuyển mộ đại thực bào và độc tế bào, phản ứng xuất hiện chậm sau 48 - 72 giờ.",
    reference: "Miễn dịch học lâm sàng & Dị ứng thuốc"
  },
  {
    chapter: "ADR, Dị ứng & Sốc phản vệ",
    question: "Theo Thông tư 51/2017/TT-BYT của Bộ Y tế, thuốc thiết yếu số 1 cấp cứu phản vệ từ độ II trở lên là Adrenaline (Epinephrine), được chỉ định sử dụng với nồng độ và đường dùng ngay lập tức là:",
    correctAnswer: "Dung dịch 1 mg/1 mL (nồng độ 1/1.000), tiêm bắp sâu ở mặt trước ngoài đùi",
    distractors: [
      "Dung dịch 1 mg/10 mL (nồng độ 1/10.000), tiêm dưới da mặt sau cánh tay",
      "Dung dịch 1 mg/100 mL, truyền tĩnh mạch chậm duy trì liên tục trong 6 giờ",
      "Dung dịch 1 mg/1 mL, cho bệnh nhân uống trực tiếp pha cùng nước đường"
    ],
    explanation: "Thông tư 51/2017/TT-BYT quy định: Adrenaline là thuốc thiết yếu, quan trọng hàng đầu cứu sống bệnh nhân. Ngay khi chẩn đoán phản vệ từ độ II trở lên, tiêm bắp ngay Adrenaline dung dịch 1mg/1ml (1/1.000) vào mặt trước ngoài đùi (người lớn dùng 1/2 ống = 0,5 mg; trẻ em tính theo cân nặng ~0,01 mg/kg). Tiêm bắp đùi cho tốc độ hấp thu và nồng độ đỉnh trong huyết tương nhanh hơn hẳn tiêm dưới da.",
    reference: "Thông tư 51/2017/TT-BYT hướng dẫn xử trí phản vệ"
  },
  {
    chapter: "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    question: "Theo hệ thống phân loại mức độ an toàn của thuốc đối với thai kỳ của Cơ quan Quản lý Dược phẩm Úc (TGA), nhóm phân loại nào quy định thuốc tuyệt đối CHỐNG CHỈ ĐỊNH do có nguy cơ cao gây dị tật vĩnh viễn cho thai nhi?",
    correctAnswer: "Phân loại X (Category X - Tuyệt đối chống chỉ định cho thai kỳ)",
    distractors: [
      "Phân loại A (Category A - Đã dùng an toàn trên số lượng lớn phụ nữ mang thai)",
      "Phân loại B1 (Category B1 - Chưa thấy tăng dị tật trên nghiên cứu động vật)",
      "Phân loại C (Category C - Có thể gây tác dụng có hại nhưng hồi phục được)"
    ],
    explanation: "Hệ thống TGA của Úc phân chia thuốc thành các nhóm: A, B1, B2, B3, C, D và X. Nhóm A là thuốc đã dùng trên số lượng lớn PNCT mà không thấy tăng dị tật thai nhi (an toàn nhất). Nhóm X là các thuốc có nguy cơ gây dị tật vĩnh viễn cho thai nhi rất cao, nguy cơ hoàn toàn vượt trội bất kỳ lợi ích điều trị nào, do đó chống chỉ định tuyệt đối cho phụ nữ đang mang thai hoặc có ý định mang thai (ví dụ Isotretinoin, Thalidomide, Methotrexate).",
    reference: "Prescribing medicines in pregnancy database - Australian TGA"
  },

  // --- BÀI 9: THÔNG TIN THUỐC ---
  {
    chapter: "Đại cương DLS & Thông tin thuốc",
    question: "Dược thư Quốc gia Việt Nam, Sách Martindale The Complete Drug Reference, và Dược điển là các tài liệu thuộc cấp thông tin thuốc nào?",
    correctAnswer: "Thông tin thuốc cấp 3 (Tertiary sources - Tài liệu tổng quan thẩm định)",
    distractors: [
      "Thông tin thuốc cấp 1 (Primary sources - Công trình nghiên cứu nguyên bản)",
      "Thông tin thuốc cấp 2 (Secondary sources - Hệ thống chỉ mục và tóm tắt)",
      "Thông tin thuốc cấp 4 (Quaternary sources - Dữ liệu thống kê thị trường)"
    ],
    explanation: "Phân loại nguồn thông tin thuốc: Cấp 1 (Primary) là các công trình nghiên cứu gốc công bố trên tạp chí khoa học; Cấp 2 (Secondary) là các cơ sở dữ liệu thư mục tra cứu chỉ mục và tóm tắt (PubMed, Embase, Cochrane); Cấp 3 (Tertiary) là các sách giáo khoa, dược thư, chuyên luận tổng quan đã được biên soạn và thẩm định thông tin từ nguồn cấp 1 và cấp 2.",
    reference: "Giáo trình Thông tin thuốc - Đại học Dược Hà Nội"
  },
  {
    chapter: "Đại cương DLS & Thông tin thuốc",
    question: "Khi tư vấn và cung cấp thông tin thuốc trực tiếp cho người bệnh tại quầy phát thuốc ngoại trú, dược sĩ lâm sàng cần ưu tiên tập trung vào nội dung nào sau đây?",
    correctAnswer: "Liều dùng, thời điểm uống thuốc (trước/sau ăn), đường dùng, các tác dụng phụ thường gặp và cách xử trí cơ bản, cách bảo quản thuốc",
    distractors: [
      "Cơ chế ức chế enzym ở mức độ sinh học phân tử và cấu trúc không gian ba chiều của các phân tử hoạt chất trong công thức",
      "Quy trình tổng hợp hóa dược và phương pháp kiểm nghiệm độ hòa tan đạt chuẩn Dược điển tại dây chuyền nhà máy sản xuất",
      "Kết quả thử nghiệm lâm sàng pha 1 đánh giá thông số dược động học và độ an toàn trên người tình nguyện hoàn toàn khỏe mạnh"
    ],
    explanation: "Thông tin cung cấp cho người bệnh phải mang tính thực hành, rõ ràng, dễ hiểu: Uống thuốc mấy lần/ngày, uống bao nhiêu viên, uống vào thời điểm nào (liên quan bữa ăn), nhận biết các dấu hiệu bất thường cần đến viện khám lại, cách bảo quản thuốc tại nhà. Các kiến thức học thuật nông sâu (cơ chế phân tử, pha lâm sàng) là dành cho nhân viên y tế.",
    reference: "Kỹ năng giao tiếp và tư vấn sử dụng thuốc cho người bệnh - Bộ Y tế"
  },

  // --- BÀI 10: ĐỐI TƯỢNG ĐẶC BIỆT (PNCT, TRẺ EM, SUY GAN) ---
  {
    chapter: "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    question: "Kháng sinh nào sau đây tuyệt đối CHỐNG CHỈ ĐỊNH cho phụ nữ mang thai từ tháng thứ 4 trở đi và trẻ em dưới 8 tuổi do tạo phức chelat với ion canxi làm đổi màu men răng vĩnh viễn và ức chế phát triển xương?",
    correctAnswer: "Doxycyclin và Tetracyclin",
    distractors: [
      "Amoxicillin và Ampicillin",
      "Ceftriaxon và Cefuroxim",
      "Spiramycin và Azithromycin"
    ],
    explanation: "Nhóm Tetracyclin (như Tetracyclin, Doxycyclin) có ái lực gắn rất mạnh với Canxi trong mô xương và mầm răng đang hình thành. Dùng cho PNCT từ tháng thứ 4 (thời điểm khoáng hóa răng thai nhi) sẽ gây vàng/nâu răng vĩnh viễn, khiếm khuyết men răng và làm chậm phát triển xương dài của trẻ.",
    reference: "Dược thư Quốc gia Việt Nam - Chuyên luận Tetracyclin"
  },
  {
    chapter: "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    question: "Trong quá trình phát triển của thai nhi, việc sử dụng thuốc trong giai đoạn nào sau đây có nguy cơ gây quái thai, dị tật hình thái cấu trúc giải phẫu nghiêm trọng nhất?",
    correctAnswer: "Giai đoạn phôi (từ tuần thứ 3 đến hết tuần thứ 8 sau thụ tinh)",
    distractors: [
      "Giai đoạn tiền phôi (từ ngày 0 đến tuần thứ 2 - quy luật 'tất cả hoặc không')",
      "Giai đoạn thai phát triển (từ tuần thứ 9 cho đến khi chuyển dạ sinh)",
      "Giai đoạn chuyển dạ chu sinh (trong vòng 24 đến 48 giờ trước sinh)"
    ],
    explanation: "Giai đoạn tạo phôi (tuần 3 đến tuần 8 sau thụ tinh) là thời kỳ biệt hóa các mầm cơ quan then chốt (tim, hệ thần kinh, chi, mắt, tai). Tác động của thuốc độc hại trong giai đoạn này dẫn đến các dị tật hình thái cấu trúc nặng nề nhất (quái thai). Giai đoạn tiền phôi tuân theo quy luật 'tất cả hoặc không có gì' (chết phôi hoặc phôi hồi phục hoàn toàn). Giai đoạn thai (sau tuần 9) ảnh hưởng chủ yếu đến chức năng và sự tăng trưởng.",
    reference: "Dược lý học sinh sản & Phôi thai học lâm sàng"
  },
  {
    chapter: "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    question: "Cơ quan và hệ thống nào sau đây ở thai nhi phát triển và hoàn thiện cấu trúc chức năng muộn nhất, kéo dài liên tục cho đến sau khi sinh?",
    correctAnswer: "Hệ thần kinh trung ương (não bộ) và hệ hô hấp (trưởng thành phế nang phổi)",
    distractors: [
      "Hệ thống tim mạch và các mạch máu lớn nuôi dưỡng tuần hoàn phôi thai",
      "Hệ thống các mầm chi trên và mầm chi dưới trong giai đoạn tạo hình chi",
      "Hệ thống cấu trúc tai ngoài và các thành phần hốc mắt giải phẫu cơ bản"
    ],
    explanation: "Não bộ (hệ thần kinh trung ương) và phổi (tiết chất hoạt diện surfactant) là hai cơ quan hoàn thiện muộn nhất. Sự phát triển tế bào thần kinh, myelin hóa và tạo synap tiếp diễn trong suốt thai kỳ và tiếp tục sau sinh nhiều năm. Tim và các chi đã hoàn thành tạo hình cơ bản ngay từ cuối tuần thứ 8.",
    reference: "Sử dụng thuốc cho phụ nữ có thai - ĐH Dược Hà Nội"
  },
  {
    chapter: "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    question: "Khi người mẹ đang cho con bú bắt buộc phải dùng kháng sinh Metronidazol đường uống liều cao, nguy cơ tác dụng không mong muốn nào có thể xảy ra ở trẻ bú mẹ?",
    correctAnswer: "Sữa mẹ có vị đắng làm trẻ bỏ bú, kèm theo rối loạn tiêu hóa nôn trớ, phân lỏng",
    distractors: [
      "Làm trẻ bị đổi màu men răng vĩnh viễn và ức chế cốt hóa đầu xương dài",
      "Gây điếc tiếp nhận thần kinh giác quan không hồi phục do độc tính ốc tai",
      "Gây đóng sớm sụn tiếp hợp khiến trẻ ngừng phát triển chiều cao hoàn toàn"
    ],
    explanation: "Metronidazol bài xuất khá nhiều vào sữa mẹ (nồng độ trong sữa tương đương nồng độ trong huyết tương mẹ). Thuốc có vị đắng kim loại đặc trưng làm thay đổi vị sữa mẹ khiến trẻ quấy khóc, từ chối bú mẹ, có thể gây tiêu chảy, buồn nôn. Khuyến cáo nếu mẹ dùng liều cao (ví dụ 2g duy nhất) nên vắt bỏ sữa và tạm ngừng cho con bú trong 12 - 24 giờ.",
    reference: "Dược thư Quốc gia Việt Nam - Chuyên luận Metronidazol"
  },
  {
    chapter: "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    question: "Phụ nữ mang thai tuần thứ 16 được chẩn đoán nhiễm khuẩn đường tiết niệu không biến chứng. Kháng sinh nào sau đây được khuyến cáo ưu tiên lựa chọn vì hiệu quả và độ an toàn cao cho thai kỳ?",
    correctAnswer: "Cefuroxim (hoặc Amoxicillin-clavulanat, Fosfomycin)",
    distractors: [
      "Ciprofloxacin (nhóm kháng sinh Fluoroquinolon)",
      "Doxycyclin (nhóm kháng sinh Tetracyclin)",
      "Cotrimoxazol (phối hợp Sulfamethoxazol - Trimethoprim)"
    ],
    explanation: "Kháng sinh an toàn hàng đầu điều trị viêm tiết niệu ở PNCT là nhóm Beta-lactam (Penicillin, Cephalosporin như Cefuroxime, Cefixime) và Fosfomycin trometamol (đơn liều). Quinolon chống chỉ định vì tổn thương sụn khớp; Tetracyclin chống chỉ định vì ảnh hưởng men răng và xương; Cotrimoxazol ức chế acid folic gây dị tật ống thần kinh ở quý 1 và nguy cơ vàng da nhân ở quý 3.",
    reference: "Hướng dẫn chẩn đoán và điều trị nhiễm khuẩn đường tiết niệu - Bộ Y tế"
  },
  {
    chapter: "Dược động học & Suy gan, thận",
    question: "Ở bệnh nhân xơ gan hoặc suy giảm chức năng tế bào gan nghiêm trọng, sự suy giảm chuyển hóa qua gan lần đầu (First-pass metabolism) dẫn đến hệ quả dược động học nào đối với các thuốc dùng đường uống có hệ số chiết xuất qua gan cao (như Propranolol, Morphin, Nitroglycerin)?",
    correctAnswer: "Sinh khả dụng đường uống tăng vọt bất thường, nồng độ thuốc tự do trong máu tăng cao dễ gây quá liều và ngộ độc nặng",
    distractors: [
      "Sinh khả dụng đường uống bị sụt giảm về 0 làm mất hoàn toàn hiệu quả điều trị của thuốc trên các mô đích ngoại vi",
      "Thuốc bị bất hoạt hoàn toàn bởi enzym ruột và đào thải nhanh chóng ra ngoài theo phân mà không vào được tuần hoàn",
      "Thời gian bán thải sinh học của thuốc bị rút ngắn gấp 10 lần khiến thuốc bị thanh thải tức thì ngay sau khi uống"
    ],
    explanation: "Bình thường các thuốc có hệ số chiết xuất qua gan cao (high hepatic extraction ratio) bị chuyển hóa phần lớn ngay ở vòng tuần hoàn cửa gan lần đầu. Ở bệnh nhân suy gan hoặc có tuần hoàn bàng hệ cửa - chủ (shunting), thuốc không qua gan chuyển hóa mà tràn thẳng vào tuần hoàn chung, làm sinh khả dụng tăng gấp 2-4 lần, gây tụt huyết áp sâu hoặc ức chế hô hấp nếu không giảm liều mạnh.",
    reference: "Dược động học lâm sàng trên bệnh nhân suy gan - Bộ Y tế"
  },

  // --- BÀI 11: GLUCOCORTICOID (CORTICOID) ---
  {
    chapter: "Glucocorticoid & Phác đồ điều trị",
    question: "Biến chứng nghiêm trọng và phổ biến nhất trên hệ cơ xương khớp khi bệnh nhân điều trị Glucocorticoid toàn thân liều cao kéo dài là gì?",
    correctAnswer: "Loãng xương thứ phát dẫn đến gãy xương bệnh lý (gãy xẹp đốt sống, gãy cổ xương đùi) và hoại tử vô mạch chỏm xương đùi",
    distractors: [
      "Xơ hóa bao khớp và kích thích tăng sinh quá mức màng hoạt dịch khớp gây dính khớp ngón tay",
      "Gai đôi cột sống thắt lưng bẩm sinh tái phát kèm theo lắng đọng canxi ngoài màng cứng",
      "Cường chức năng tuyến cận giáp nguyên phát làm tăng nồng độ canxi máu lên ngưỡng ngộ độc"
    ],
    explanation: "Glucocorticoid gây loãng xương nhanh chóng thông qua: ức chế tạo cốt bào (giảm tạo xương), tăng hủy cốt bào, giảm hấp thu canxi ở ruột và tăng đào thải canxi qua thận. Ngoài ra, Corticoid gây tắc các vi mạch nuôi xương dẫn đến biến chứng tàn phế rất nặng nề là hoại tử vô mạch chỏm xương đùi (Avascular necrosis). Ở trẻ em, thuốc ức chế sụn tiếp hợp làm chậm lớn.",
    reference: "Hướng dẫn chẩn đoán và điều trị bệnh cơ xương khớp - Bộ Y tế"
  },
  {
    chapter: "Glucocorticoid & Phác đồ điều trị",
    question: "Bệnh nhân sử dụng Glucocorticoid trong trường hợp nào sau đây BẮT BUỘC phải thực hiện giảm liều từ từ từng bước trước khi ngừng thuốc để tránh suy thượng thận cấp?",
    correctAnswer: "Dùng Corticoid toàn thân với liều tương đương Prednisolon >= 7,5 mg/ngày liên tục trên 3 tuần",
    distractors: [
      "Dùng Prednisolon 10 mg/ngày trong một đợt ngắn 5 ngày điều trị mày đay cấp tính",
      "Dùng dung dịch nhỏ mắt Dexamethason nồng độ 0,1% liên tục trong vòng 3 ngày",
      "Dùng kem bôi ngoài da Hydrocortison nồng độ 1% một lần duy nhất khi bị côn trùng đốt"
    ],
    explanation: "Khi dùng Glucocorticoid toàn thân liều trên mức sinh lý (tương đương Prednisolone >= 7,5 mg/ngày) kéo dài trên 3 tuần, trục dưới đồi - tuyến yên - thượng thận (HPA) bị ức chế phản hồi âm tính mạnh mẽ gây teo vỏ thượng thận. Nếu dừng đột ngột, cơ thể không kịp tiết cortisol nội sinh sẽ dẫn đến suy tuyến thượng thận cấp tính (tụt huyết áp, trụy mạch, tử vong). Đợt dùng ngắn ngày (< 2 tuần) không gây ức chế trục HPA vĩnh viễn nên có thể ngừng thuốc ngay mà không cần giảm liều.",
    reference: "Dược thư Quốc gia Việt Nam - Nguyên tắc ngừng Glucocorticoid"
  },
  {
    chapter: "Glucocorticoid & Phác đồ điều trị",
    question: "Bệnh nhân tự ý ngừng thuốc Methylprednisolone sau 3 tháng sử dụng liên tục điều trị viêm khớp dạng thấp, xuất hiện mệt mỏi kiệt sức, tụt huyết áp, nôn mửa, đau cơ khớp dữ dội. Biện pháp xử trí cấp bách và đúng đắn nhất là:",
    correctAnswer: "Lập tức cho dùng lại Glucocorticoid (Hydrocortisone tiêm tĩnh mạch hoặc tái lập lại liều Methylprednisolone trước đó), truyền dịch bù thể tích tuần hoàn rồi lên kế hoạch giảm liều từ từ",
    distractors: [
      "Tiếp tục kiên quyết ngừng hẳn Glucocorticoid và chỉ cho bệnh nhân uống nước đường giải nhiệt kết hợp vitamin C liều cao",
      "Cho bệnh nhân uống ngay thuốc lợi tiểu quai Furosemid liều cao để nhanh chóng đào thải toàn bộ nồng độ thuốc còn dư trong máu",
      "Tiêm bắp sâu Adrenaline liều cao ngắt quãng mỗi 5 phút liên tục cho đến khi bệnh nhân tỉnh táo hoàn toàn"
    ],
    explanation: "Đây là tình trạng suy thượng thận cấp do ngừng Glucocorticoid đột ngột sau thời gian dài dùng thuốc. Bắt buộc phải bù ngay Glucocorticoid (Hydrocortisone tiêm tĩnh mạch hoặc tái lập lại liều uống trước đó) kết hợp truyền dịch bù thể tích tuần hoàn để cứu vãn huyết áp. Sau khi bệnh nhân ổn định, mới thực hiện quy trình giảm liều chậm dần từng bước (tapering).",
    reference: "Hướng dẫn chẩn đoán và xử trí suy thượng thận cấp - Bộ Y tế"
  },
  {
    chapter: "Glucocorticoid & Phác đồ điều trị",
    question: "Tại sao bệnh nhân đang điều trị bằng Glucocorticoid liều cao toàn thân (như Prednisolon >= 20 mg/ngày kéo dài > 14 ngày) bị CHỐNG CHỈ ĐỊNH tiêm các loại vaccine vi sinh vật sống giảm độc lực (như Sởi - Quai bị - Rubella, Thủy đậu, Lao BCG)?",
    correctAnswer: "Corticoid gây ức chế miễn dịch làm vi sinh vật sống trong vaccine có thể nhân lên mất kiểm soát gây bệnh nhiễm trùng toàn thân đe dọa tính mạng",
    distractors: [
      "Corticoid phá hủy cấu trúc protein kháng nguyên làm mất hoàn toàn khả năng sinh miễn dịch bảo vệ của vaccine trong cơ thể",
      "Làm khởi phát cơn tăng huyết áp kịch phát ác tính do tương tác hóa học trực tiếp giữa dung môi vaccine và phân tử steroid",
      "Gây đông máu nội mạch tức thì tại mao mạch cơ quan đích dẫn đến tắc nghẽn hoàn toàn lưu thông mạch máu tại chi tiêm"
    ],
    explanation: "Corticoid liều cao gây ức chế mạnh tế bào lympho T, ức chế thực bào và giảm sản xuất kháng thể. Nếu tiêm chủng vaccine sống giảm độc lực, hệ miễn dịch suy yếu không thể kiểm soát mầm bệnh sống, dẫn đến nguy cơ mầm bệnh bùng phát gây nhiễm trùng lan tỏa tương tự như nhiễm khuẩn tự nhiên. Phải ngừng Corticoid liều cao ít nhất 1 tháng mới được tiêm vaccine sống.",
    reference: "Hướng dẫn tiêm chủng an toàn - CDC & Bộ Y tế"
  },
  {
    chapter: "Glucocorticoid & Phác đồ điều trị",
    question: "Bệnh nhân điều trị Prednisolone liều 16 mg/ngày liên tục trong 2 tháng xuất hiện triệu chứng đau nhức vùng khớp háng, đi lại khập khiễng khó khăn, kèm theo mất ngủ triền miên. Dược sĩ lâm sàng xác định biến cố bất lợi nghiêm trọng nghi do thuốc là:",
    correctAnswer: "Hoại tử vô mạch chỏm xương đùi và rối loạn tâm thần kinh do Glucocorticoid",
    distractors: [
      "Hội chứng chèn ép ống cổ tay cấp tính kèm theo thoái hóa gân gót hai bên",
      "Bệnh gút cấp tính do lắng đọng tinh thể acid uric tại bao hoạt dịch khớp háng",
      "Viêm khớp nhiễm khuẩn cấp tính do tụ cầu vàng xâm lấn qua đường tĩnh mạch"
    ],
    explanation: "Đau khớp háng và hạn chế vận động sau 2 tháng dùng Corticoid là dấu hiệu cảnh báo kinh điển của Hoại tử vô mạch chỏm xương đùi (Avascular Necrosis - AVN) do tổn thương vi mạch nuôi chỏm xương. Mất ngủ, kích thích, hưng cảm là tác dụng phụ thường gặp trên thần kinh trung ương của Glucocorticoid. Cần chụp MRI khớp háng để chẩn đoán xác định sớm.",
    reference: "Dược lý học lâm sàng - Tác dụng không mong muốn của Glucocorticoid"
  },
  {
    chapter: "Hen phế quản & COPD",
    question: "Trong điều trị hen phế quản và COPD, việc phối hợp Corticoid dạng hít (ICS như Budesonid, Fluticason) với thuốc chủ vận beta-2 adrenergic (như Salbutamol, Formoterol) mang lại tác dụng hiệp đồng dược lý nào?",
    correctAnswer: "Corticoid phục hồi và tăng số lượng thụ thể beta-2 trên cơ trơn phế quản, ngăn ngừa hiện tượng trơ thụ thể do dùng thuốc giãn phế quản kéo dài",
    distractors: [
      "Salbutamol kích thích gan tăng chuyển hóa thải trừ corticoid ra khỏi cơ thể qua đường mật giúp giảm độc tính toàn thân",
      "Corticoid làm giảm hấp thu salbutamol vào hệ tuần hoàn toàn thân giúp loại bỏ hoàn toàn nguy cơ hạ kali máu của thuốc",
      "Hai thuốc kết hợp hóa học tạo thành một phức chất đối kháng thụ thể muscarinic M3 giúp ngăn chặn hoàn toàn phản xạ co thắt"
    ],
    explanation: "Dùng thuốc chủ vận beta-2 kéo dài dẫn đến hiện tượng điều hòa giảm (down-regulation) và trơ thụ thể beta-2. Glucocorticoid có tác dụng kích thích phiên mã gen tổng hợp thụ thể beta-2 adrenergic, phục hồi độ nhạy cảm của thụ thể, chống viêm giảm phù nề niêm mạc phế quản. Ngược lại, kích thích beta-2 giúp mở đường thở để hạt thuốc ICS lắng đọng sâu hơn vào đường hô hấp nhỏ.",
    reference: "GINA Guidelines & Hướng dẫn chẩn đoán Hen phế quản - Bộ Y tế"
  },
  {
    chapter: "Glucocorticoid & Phác đồ điều trị",
    question: "Để hạn chế tối đa các tác dụng phụ chuyển hóa do dùng Glucocorticoid toàn thân dài ngày, dược sĩ lâm sàng cần tư vấn cho người bệnh chế độ ăn uống như thế nào?",
    correctAnswer: "Ăn giảm muối (hạn chế natri), giảm đường tinh chế, tăng cường protein nạc, bổ sung canxi và vitamin D, giàu kali",
    distractors: [
      "Ăn tăng cường nhiều muối mặn và chất béo bão hòa để bù đắp năng lượng tiêu hao cho quá trình viêm",
      "Kiêng hoàn toàn các thực phẩm chứa canxi và kali nhằm giảm gánh nặng lọc của cầu thận đang suy giảm",
      "Ăn nhiều tinh bột ngọt tinh chế và nhịn uống nước để hạn chế tối đa tình trạng đi tiểu đêm nhiều lần"
    ],
    explanation: "Corticoid gây giữ muối nước (tăng huyết áp, phù), mất kali qua thận (hạ K+ máu), tăng đường huyết và kháng insulin, tăng dị hóa protein gây teo cơ, và ức chế hấp thu canxi gây loãng xương. Do đó, chế độ ăn bắt buộc: giảm muối (< 2g natri/ngày), giảm đường, ăn đủ đạm, giàu kali (chuối, cam) và bổ sung đủ Canxi + Vitamin D.",
    reference: "Dinh dưỡng lâm sàng cho bệnh nhân dùng Glucocorticoid - Bộ Y tế"
  },

  // --- BÀI 12: THUỐC GIẢM ĐAU ---
  {
    chapter: "Thuốc giảm đau",
    question: "Theo Bậc thang giảm đau của Tổ chức Y tế Thế giới (WHO), đối với bệnh nhân ung thư giai đoạn cuối xuất hiện các cơn đau nặng dữ dội, nguyên tắc dùng thuốc giảm đau chuẩn là:",
    correctAnswer: "Sử dụng Opioid mạnh (như Morphin) uống định kỳ theo giờ cố định ('by the clock') kèm liều cứu nghẹt, và BẮT BUỘC phối hợp sẵn thuốc nhuận tràng",
    distractors: [
      "Chỉ dùng Paracetamol đơn độc liều tối đa và đợi khi bệnh nhân đau dữ dội không chịu nổi mới cho uống để tránh nguy cơ quen thuốc",
      "Tiêm Pethidin ngắt quãng nhiều ngày liên tiếp kết hợp với thuốc an thần nhóm phenothiazin để gây ngủ sâu liên tục",
      "Phối hợp đồng thời 3 loại thuốc NSAIDs khác nhau đường uống để hiệp đồng ức chế hoàn toàn con đường tổng hợp prostaglandin"
    ],
    explanation: "Giảm đau ung thư theo WHO: 'By the clock' (cho thuốc theo khoảng cách giờ cố định, không đợi đau mới cho), 'By the mouth' (ưu tiên đường uống), 'By the ladder' (đau nặng dùng bậc 3: Morphin, Fentanyl, Oxycodone). Tác dụng phụ táo bón của Morphin không bị dung nạp theo thời gian, do đó BẮT BUỘC phải chỉ định thường quy thuốc nhuận tràng kích thích (như Senna, Bisacodyl) ngay từ đầu.",
    reference: "Hướng dẫn chẩn đoán và điều trị giảm đau cho bệnh nhân ung thư - Bộ Y tế & WHO"
  },
  {
    chapter: "Thuốc giảm đau",
    question: "Phối hợp thuốc giảm đau nào sau đây được xem là hợp lý về mặt cơ chế dược lý học, giúp tăng cường hiệu quả giảm đau mà không làm tăng độc tính loét đường tiêu hóa?",
    correctAnswer: "Paracetamol kết hợp với Ibuprofen (khác cơ chế tác dụng)",
    distractors: [
      "Aspirin kết hợp với Meloxicam (phối hợp hai thuốc nhóm NSAIDs)",
      "Diclofenac kết hợp với Piroxicam (phối hợp hai thuốc nhóm NSAIDs)",
      "Ibuprofen kết hợp với Ketorolac (phối hợp hai thuốc nhóm NSAIDs)"
    ],
    explanation: "Paracetamol có tác dụng giảm đau chủ yếu ở trung ương; Ibuprofen là NSAID ức chế COX ngoại vi chống viêm giảm đau. Phối hợp Paracetamol + Ibuprofen mang lại hiệu quả giảm đau vượt trội tương đương phối hợp opioid liều thấp mà không làm tăng tác dụng phụ trên dạ dày. Ngược lại, TUYỆT ĐỐI KHÔNG phối hợp 2 thuốc NSAIDs với nhau vì không tăng tác dụng mà làm tăng vọt nguy cơ loét thủng dạ dày và suy thận.",
    reference: "Dược thư Quốc gia Việt Nam - Bài Phối hợp thuốc giảm đau"
  },
  {
    chapter: "Thuốc giảm đau",
    question: "Bệnh nhân có triệu chứng đau lan tỏa dọc đường đi dây thần kinh, cảm giác bỏng rát, giật điện như kim châm (đau thần kinh do đái tháo đường hoặc sau zona). Thuốc giảm đau nào sau đây là lựa chọn hàng đầu được ưu tiên chỉ định phối hợp?",
    correctAnswer: "Pregabalin (hoặc Gabapentin / Thuốc chống trầm cảm ba vòng Amitriptylin)",
    distractors: [
      "Paracetamol liều cao đơn thuần phối hợp vitamin nhóm B liều sinh lý",
      "Aspirin liều chống ngưng tập tiểu cầu 81 mg uống sau bữa ăn sáng",
      "Thuốc chống co thắt cơ trơn Papaverin hoặc Drotaverin đường uống"
    ],
    explanation: "Đau thần kinh không đáp ứng tốt với các thuốc giảm đau thông thường (Paracetamol, NSAIDs). Các hướng dẫn lâm sàng khuyến cáo thuốc hàng đầu (first-line) là nhóm gắn kết kênh Canxi alpha-2-delta (Pregabalin, Gabapentin), thuốc chống trầm cảm ba vòng (Amitriptyline) hoặc SNRI (Duloxetine). Trong trường hợp đau nặng kháng trị, có thể phối hợp thêm Opioid (Morphin, Tramadol).",
    reference: "Hướng dẫn điều trị đau thần kinh - IASP & Bộ Y tế"
  },

  // --- BÀI 13: KHÁNG SINH & CÁC CÂU LÂM SÀNG TỔNG HỢP ---
  {
    chapter: "Kháng sinh & Kháng sinh dự phòng",
    question: "Trong điều trị nhiễm khuẩn răng miệng (viêm quanh cuống răng, áp-xe răng) thường do vi khuẩn kỵ khí vùng miệng phối hợp với cầu khuẩn Gram dương, kháng sinh phối hợp kinh điển được ưu tiên lựa chọn là:",
    correctAnswer: "Spiramycin phối hợp với Metronidazol (biệt dược như Rodogyl)",
    distractors: [
      "Gentamicin phối hợp với Kanamycin (hai kháng sinh Aminoglycosid)",
      "Ciprofloxacin phối hợp với Ofloxacin (hai kháng sinh Quinolon)",
      "Trimethoprim đơn độc phối hợp men tiêu hóa protease vi nấm"
    ],
    explanation: "Nhiễm khuẩn khoang miệng và răng hàm mặt chủ yếu là vi khuẩn kỵ khí (Bacteroides, Peptostreptococcus) và liên cầu Gram dương. Phối hợp Spiramycin (Macrolid tập trung nồng độ rất cao trong nước bọt, mô nướu và xương ổ răng) với Metronidazol (kháng sinh diệt khuẩn kỵ khí tuyệt đối) tạo nên tác dụng hiệp đồng kinh điển trong nha khoa.",
    reference: "Dược thư Quốc gia Việt Nam - Chuyên luận Spiramycin & Metronidazol"
  },
  {
    chapter: "Kháng sinh & Kháng sinh dự phòng",
    question: "Bệnh nhân người lớn được chẩn đoán Viêm phổi thùy mắc phải tại cộng đồng (CAP) mức độ nhẹ đến trung bình điều trị ngoại trú, chưa có kết quả kháng sinh đồ. Theo phác đồ Bộ Y tế, kháng sinh ban đầu được khuyến cáo chỉ định là:",
    correctAnswer: "Amoxicillin liều cao (hoặc Amoxicillin - Acid clavulanic) ± Macrolid (như Clarithromycin, Azithromycin)",
    distractors: [
      "Vancomycin truyền tĩnh mạch phối hợp Colistin tiêm bắp sâu duy trì liên tục trong 14 ngày",
      "Metronidazol đường uống đơn độc phối hợp khí dung dung dịch muối ưu trương 3% tại chỗ",
      "Nystatin viên ngậm phối hợp dung dịch súc họng sát khuẩn chlorhexidine nồng độ 0,12%"
    ],
    explanation: "Căn nguyên vi khuẩn phổ biến nhất của viêm phổi thùy cộng đồng là Phế cầu (Streptococcus pneumoniae) và vi khuẩn không điển hình (Mycoplasma pneumoniae, Chlamydia pneumoniae). Phác đồ chuẩn của Bộ Y tế và ATS/IDSA khuyến cáo: Amoxicillin liều cao (đối kháng phế cầu kháng penicillin) hoặc Amoxicillin/Clavulanate phối hợp Macrolid (bao phủ vi khuẩn không điển hình).",
    reference: "Hướng dẫn chẩn đoán và điều trị viêm phổi mắc phải tại cộng đồng - Bộ Y tế"
  },
  {
    chapter: "Kháng sinh & Kháng sinh dự phòng",
    question: "Theo Hướng dẫn sử dụng kháng sinh của Bộ Y tế, thời điểm tối ưu để tiêm tĩnh mạch kháng sinh dự phòng trong phẫu thuật ngoại khoa sạch hoặc sạch - nhiễm là:",
    correctAnswer: "Trong vòng 30 đến 60 phút TRƯỚC KHI rạch da (thường thực hiện cùng lúc khởi mê)",
    distractors: [
      "Sau khi ca phẫu thuật đã kết thúc và bệnh nhân được chuyển về phòng hậu phẫu theo dõi",
      "Uống liên tục thuốc kháng sinh trước mổ 7 ngày tại nhà trước khi nhập viện phẫu thuật",
      "Tiêm ngay vào thời điểm phẫu thuật viên bắt đầu đóng vết mổ ở những mũi chỉ khâu cuối cùng"
    ],
    explanation: "Mục tiêu của kháng sinh dự phòng là đạt được nồng độ diệt khuẩn tối đa trong mô vết mổ NGAY TẠI THỜI ĐIỂM rạch da và duy trì nồng độ này suốt quá trình phẫu thuật. Thời điểm tiêm chuẩn là trong vòng 30 - 60 phút trước khi rạch da (với Vancomycin hoặc Fluoroquinolon truyền chậm thì trước 120 phút). Tiêm sau khi rạch da hoặc sau mổ làm mất hoàn toàn hiệu quả dự phòng nhiễm khuẩn vết mổ.",
    reference: "Hướng dẫn sử dụng kháng sinh trong bệnh viện - Bộ Y tế"
  },
  {
    chapter: "Sử dụng thuốc ở Trẻ em",
    question: "Trong hồi sức cấp cứu và điều trị nội trú ở trẻ em, đường dùng thuốc nào có sinh khả dụng đạt 100%, tốc độ hấp thu tức thì và nồng độ trong máu ổn định nhất?",
    correctAnswer: "Đường tiêm tĩnh mạch (IV)",
    distractors: [
      "Đường tiêm bắp sâu (IM)",
      "Đường uống siro lỏng",
      "Đường đặt hậu môn đạn"
    ],
    explanation: "Đường tiêm tĩnh mạch (IV) đưa thuốc trực tiếp vào vòng tuần hoàn, sinh khả dụng đạt 100%, không bị ảnh hưởng bởi nhu động ruột, thức ăn, nôn trớ hay giảm tưới máu ngoại vi (như tiêm bắp khi trẻ bị sốc co mạch). Vì vậy, tiêm tĩnh mạch là đường dùng ổn định và đáng tin cậy nhất trong cấp cứu nhi khoa.",
    reference: "Dược lâm sàng Nhi khoa - Đại học Dược Hà Nội"
  },
  {
    chapter: "ADR, Dị ứng & Sốc phản vệ",
    question: "Bệnh nhân có tiền sử nghi ngờ dị ứng kháng sinh được tiến hành thử phản ứng lẩy da (Prick test) với Amoxicillin. Kết quả test có thể bị ÂM TÍNH GIẢ nếu trước đó vài ngày bệnh nhân đã sử dụng thuốc nào sau đây?",
    correctAnswer: "Thuốc kháng thụ thể histamin H1 (như Loratadin, Cetirizin) hoặc Corticoid liều cao",
    distractors: [
      "Thuốc hạ huyết áp nhóm chẹn kênh calci Amlodipin hoặc Nifedipin viên tác dụng kéo dài",
      "Thuốc giảm đau hạ sốt Paracetamol hoặc Ibuprofen ở các mức liều điều trị thông thường",
      "Men vi sinh đường ruột Probiotic chứa bào tử vi khuẩn Bacillus clausii dạng hỗn dịch uống"
    ],
    explanation: "Thuốc kháng histamin H1 ức chế thụ thể H1 ở da, ngăn chặn phản ứng nổi mày đay và ban đỏ do histamin giải phóng từ tế bào mast khi tiếp xúc dị nguyên, dẫn đến kết quả test da âm tính giả (bệnh nhân thực sự dị ứng nhưng test không lên nốt sẩn). Khuyến cáo phải ngừng thuốc kháng histamin H1 ít nhất 3 - 5 ngày (với thuốc thế hệ 2 có thể cần 5-7 ngày) trước khi làm test da.",
    reference: "Hướng dẫn thực hiện test da chẩn đoán dị ứng thuốc - Bộ Y tế"
  },
  {
    chapter: "Vitamin và chất khoáng",
    question: "Theo Tổ chức Y tế Thế giới (WHO) và Bộ Y tế, Vitamin A liều cao được chỉ định bắt buộc trong phác đồ điều trị bệnh truyền nhiễm nào ở trẻ em nhằm phòng ngừa mù lòa do loét giác mạc và giảm tỷ lệ tử vong?",
    correctAnswer: "Bệnh Sởi (Measles)",
    distractors: [
      "Bệnh Quai bị",
      "Bệnh Thủy đậu",
      "Sốt xuất huyết"
    ],
    explanation: "Virus sởi làm tiêu hao nhanh chóng nguồn dự trữ Vitamin A trong cơ thể, dẫn đến thiếu vitamin A cấp tính gây tổn thương biểu mô, khô mắt, loét giác mạc dẫn đến mù lòa vĩnh viễn và làm suy giảm miễn dịch nặng nề. WHO và Bộ Y tế chỉ định bổ sung ngay 2 liều Vitamin A cao (theo tuổi: 100.000 - 200.000 IU) cho tất cả trẻ em mắc bệnh sởi.",
    reference: "Hướng dẫn chẩn đoán và điều trị bệnh Sởi - Bộ Y tế & WHO"
  },
  {
    chapter: "Xét nghiệm lâm sàng & Nhận định KQ",
    question: "Xét nghiệm định lượng nồng độ Acid Uric huyết thanh được sử dụng định kỳ để theo dõi hiệu quả điều trị và chỉnh liều của nhóm thuốc nào sau đây?",
    correctAnswer: "Thuốc ức chế men Xanthine Oxidase hạ acid uric máu (như Allopurinol, Febuxostat)",
    distractors: [
      "Thuốc hạ mỡ máu nhóm ức chế men HMG-CoA reductase (như Atorvastatin, Rosuvastatin)",
      "Thuốc kích thích tế bào beta đảo tụy bài tiết insulin nhóm Sulfonylurea (như Gliclazid)",
      "Thuốc kháng sinh nhóm Macrolid điều trị nhiễm khuẩn đường hô hấp (như Clarithromycin)"
    ],
    explanation: "Trong điều trị Gút mạn tính, mục tiêu điều trị bằng thuốc ức chế tổng hợp acid uric (Allopurinol, Febuxostat) là hạ và duy trì nồng độ Acid uric máu < 360 µmol/L (6 mg/dL), hoặc < 300 µmol/L (5 mg/dL) ở bệnh nhân có hạt tophi, nhằm hòa tan các tinh thể urat tại khớp và ngăn ngừa cơn gút cấp tái phát.",
    reference: "Hướng dẫn chẩn đoán và điều trị bệnh Gút - Bộ Y tế"
  },
  {
    chapter: "Dược động học & Suy gan, thận",
    question: "Trong hồi sức cấp cứu giải độc thuốc, việc sử dụng Amoni clorid (NH4Cl) nhằm mục đích acid hóa nước tiểu để làm tăng ion hóa và tăng đào thải qua thận đối với các thuốc có bản chất hóa học là:",
    correctAnswer: "Các chất có tính base yếu (như Amphetamin, Quinidin, Morphin)",
    distractors: [
      "Các chất có tính acid yếu (như Phenobarbital, Aspirin, Methotrexate)",
      "Các chất trung tính hoàn toàn không ion hóa ở bất kỳ dải pH nào",
      "Các kim loại nặng độc hại như Chì, Thủy ngân và Asen vô cơ"
    ],
    explanation: "Nguyên tắc bài xuất thuốc qua nước tiểu: Phân tử ở dạng ion hóa (tích điện) sẽ không thể tái hấp thu qua màng biểu mô ống thận và bị thải ra ngoài. Khi acid hóa nước tiểu bằng NH4Cl (pH nước tiểu giảm), các chất base yếu sẽ nhận H+ chuyển thành dạng ion hóa BH+, không tái hấp thu được và bị thải nhanh ra ngoài. Ngược lại, kiềm hóa nước tiểu bằng NaHCO3 dùng để đào thải thuốc có tính acid yếu (như Phenobarbital, Salicylate).",
    reference: "Dược lý học đại cương - Bài Thải trừ thuốc qua thận"
  },
  {
    chapter: "Tiêu chảy cấp ở trẻ em",
    question: "Diosmectite (Smecta) có cơ chế tác dụng bảo vệ niêm mạc đường tiêu hóa và hấp phụ độc tố vi khuẩn, khi sử dụng trên lâm sàng cần lưu ý hướng dẫn người bệnh:",
    correctAnswer: "Uống cách xa các thuốc điều trị khác ít nhất 2 giờ để tránh hiện tượng Smecta hấp phụ làm giảm sinh khả dụng của các thuốc dùng kèm",
    distractors: [
      "Bắt buộc phải uống ngay đồng thời cùng lúc với kháng sinh để tạo hiệu ứng bao phủ tăng cường khả năng diệt khuẩn tại ruột",
      "Cần uống kèm với nhiều dầu ăn hoặc sữa tươi béo nguyên kem để hòa tan hoàn toàn các phiến silicat trước khi xuống dạ dày",
      "Phải tiêm bắp sâu ngắt quãng hàng ngày chứ tuyệt đối không được phép cho người bệnh sử dụng qua đường tiêu hóa thông thường"
    ],
    explanation: "Diosmectite là nhôm-magnesi silicat tự nhiên có cấu trúc từng lớp lá phiến mỏng và độ nhớt cao, có khả năng bao phủ niêm mạc tiêu hóa và gắn kết hấp phụ độc tố, virus, vi khuẩn. Tuy nhiên, do đặc tính hấp phụ vật lý mạnh, nó cũng hấp phụ luôn các phân tử thuốc khác trong lòng ruột nếu uống đồng thời, làm cản trở hấp thu các thuốc này. Vì vậy, bắt buộc phải uống cách xa các thuốc khác ít nhất 2 giờ.",
    reference: "Dược thư Quốc gia Việt Nam - Chuyên luận Diosmectite"
  }
];

console.log(`Loaded ${rawQuestions.length} questions from Dls.pdf recall with balanced distractors.`);

// Balance position of correct answer across 0, 1, 2, 3
const processedQuestions = rawQuestions.map((q, idx) => {
  const targetCorrectIndex = idx % 4; // 0: A, 1: B, 2: C, 3: D
  
  const options = [];
  const distractorsCopy = [...q.distractors];
  
  for (let i = 0; i < 4; i++) {
    if (i === targetCorrectIndex) {
      options.push(q.correctAnswer);
    } else {
      options.push(distractorsCopy.shift());
    }
  }
  
  return {
    chapter: q.chapter,
    question: q.question,
    options: options,
    correct: targetCorrectIndex,
    explanation: q.explanation,
    reference: q.reference,
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Recall Dls.pdf)"
  };
});

module.exports = processedQuestions;
