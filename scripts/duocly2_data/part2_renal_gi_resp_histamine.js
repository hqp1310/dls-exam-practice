// NGÂN HÀNG DƯỢC LÝ 2 - PHẦN 2: THẬN, TIÊU HÓA, HÔ HẤP, KHÁNG HISTAMIN H1
// Bài 5: Thuốc lợi niệu (Chương 2, tr. 79-91)
// Bài 6: Thuốc điều trị DDTT (Chương 4, tr. 102-113)
// Bài 8: Thuốc ĐC RLHH (tr. 16, 267 và chuyên đề dược lý hô hấp)
// Bài 9: Thuốc kháng H1 (Chương 18, tr. 342-354)
// Tiêu chuẩn: Chuẩn giáo trình Dược lý 2 Bộ Y tế, không mở ngoặc đơn gợi ý ở đáp án.

module.exports = [
  // =========================================================================
  // BÀI 5: THUỐC LỢI NIỆU (trang 79 - 91)
  // =========================================================================
  {
    chapter: "Thuốc lợi niệu",
    level: "Nhận biết",
    question: "Vị trí tác dụng chủ yếu và cơ chế phân tử của thuốc lợi tiểu Furosemid là gì?",
    options: [
      "Nhánh lên dày quai Henle, ức chế kênh đồng vận chuyển Na+/K+/2Cl-",
      "Ống lượn gần, ức chế men carbonic anhydrase",
      "Đoạn đầu ống lượn xa, ức chế đồng vận chuyển Na+/Cl-",
      "Ống góp, đối kháng cạnh tranh tại thụ thể aldosteron"
    ],
    correct: 0,
    explanation: "Furosemid thuộc nhóm lợi tiểu quai, tác dụng tại nhánh lên phần dày của quai Henle do ức chế hệ đồng vận chuyển Na+/K+/2Cl- ở bờ bàn chải tế bào biểu mô, dẫn tới thải trừ mạnh Na+, K+, Cl- và nước.",
    reference: "Sách Dược lý 2 tr. 81-82"
  },
  {
    chapter: "Thuốc lợi niệu",
    level: "Nhận biết",
    question: "Nhóm thuốc lợi tiểu nào có hiệu lực bài xuất muối nước mạnh nhất và vẫn duy trì được tác dụng khi mức lọc cầu thận giảm nặng (dưới 30 mL/phút)?",
    options: [
      "Thuốc lợi tiểu quai",
      "Thuốc lợi tiểu Thiazid",
      "Thuốc lợi tiểu giữ kali",
      "Thuốc lợi tiểu ức chế carbonic anhydrase"
    ],
    correct: 0,
    explanation: "Lợi tiểu quai (Furosemid, Bumetanid, Torsemid) là nhóm lợi tiểu mạnh nhất (lợi tiểu trần cao), có khả năng đào thải tới 20-25% lượng natri lọc qua cầu thận và vẫn có hiệu lực khi suy thận nặng có GFR dưới 30 mL/phút.",
    reference: "Sách Dược lý 2 tr. 82"
  },
  {
    chapter: "Thuốc lợi niệu",
    level: "Vận dụng",
    question: "Tác dụng không mong muốn trên thính giác (độc tính trên tai gây điếc thoáng qua hoặc vĩnh viễn) của Furosemid tăng lên rõ rệt khi dùng phối hợp với nhóm kháng sinh nào?",
    options: [
      "Aminoglycosid",
      "Beta-lactam",
      "Macrolid",
      "Fluoroquinolon"
    ],
    correct: 0,
    explanation: "Cả Furosemid và kháng sinh Aminoglycosid (như Gentamicin, Amikacin, Streptomycin) đều có độc tính gây tổn thương tế bào lông ốc tai và tiền đình. Khi dùng phối hợp, nguy cơ gây điếc và độc tính tai tăng lên gấp nhiều lần.",
    reference: "Sách Dược lý 2 tr. 83"
  },
  {
    chapter: "Thuốc lợi niệu",
    level: "Nhận biết",
    question: "Cơ chế tác dụng của thuốc lợi tiểu nhóm Thiazid (Hydrochlorothiazid) tại ống thận là gì?",
    options: [
      "Ức chế đồng vận chuyển Na+/Cl- ở đoạn đầu ống lượn xa",
      "Ức chế đồng vận chuyển Na+/K+/2Cl- ở quai Henle",
      "Ức chế kênh tái hấp thu glucose SGLT2 ở ống lượn gần",
      "Kháng thụ thể V2 của ADH tại ống góp"
    ],
    correct: 0,
    explanation: "Thuốc lợi tiểu Thiazid tác dụng tại đoạn đầu ống lượn xa bằng cách gắn vào vị trí Cl- của hệ đồng vận chuyển Na+/Cl-, ức chế tái hấp thu Na+ và Cl-.",
    reference: "Sách Dược lý 2 tr. 84"
  },
  {
    chapter: "Thuốc lợi niệu",
    level: "Vận dụng",
    question: "Điểm khác biệt quan trọng về tác động trên bài xuất Canxi (Ca2+) giữa Furosemid và Hydrochlorothiazid là gì?",
    options: [
      "Furosemid làm tăng thải Ca2+ qua nước tiểu, trong khi Hydrochlorothiazid làm tăng tái hấp thu và giảm thải Ca2+",
      "Furosemid giữ Ca2+ lại trong máu, còn Hydrochlorothiazid gây mất Ca2+ nặng nề",
      "Cả hai thuốc đều làm tăng thải trừ Ca2+ qua nước tiểu với mức độ tương đương",
      "Cả hai thuốc đều không làm thay đổi bài xuất ion Canxi qua thận"
    ],
    correct: 0,
    explanation: "Lợi tiểu quai (Furosemid) làm giảm điện thế dương trong lòng ống ở quai Henle nên làm tăng thải Ca2+ và Mg2+ (được chỉ định cấp cứu tăng canxi máu). Ngược lại, Thiazid làm tăng tái hấp thu Ca2+ ở ống lượn xa, làm giảm canxi niệu nên rất có lợi cho bệnh nhân loãng xương hoặc sỏi thận calci.",
    reference: "Sách Dược lý 2 tr. 82, 85"
  },
  {
    chapter: "Thuốc lợi niệu",
    level: "Nhận biết",
    question: "Spironolacton có cơ chế lợi tiểu và đặc điểm tác dụng nào sau đây?",
    options: [
      "Đối kháng cạnh tranh với aldosteron tại thụ thể nội bào ở ống lượn xa và ống góp, gây tăng thải Na+ và giữ K+",
      "Ức chế trực tiếp kênh mở Na+ ở màng đỉnh mà không cần sự có mặt của aldosteron",
      "Ức chế enzym carbonic anhydrase làm kiềm hóa nước tiểu mạnh mẽ",
      "Làm giãn mạch thận chọn lọc làm tăng áp lực lọc cầu thận gấp 3 lần"
    ],
    correct: 0,
    explanation: "Spironolacton có cấu trúc tương tự aldosteron, cạnh tranh trực tiếp với aldosteron tại thụ thể mineralocorticoid trong tế bào chất của ống lượn xa và ống góp, làm giảm tổng hợp protein AIP, ngăn cản tái hấp thu Na+ và ngăn bài tiết K+, H+.",
    reference: "Sách Dược lý 2 tr. 86-87"
  },
  {
    chapter: "Thuốc lợi niệu",
    level: "Vận dụng",
    question: "Tác dụng không mong muốn đặc trưng trên hệ nội tiết khi dùng Spironolacton kéo dài ở nam giới là gì?",
    options: [
      "Chứng vú to ở nam giới và giảm ham muốn tình dục",
      "Hội chứng Cushing với mặt tròn như mặt trăng",
      "Phì đại tuyến giáp và lồi mắt",
      "Tăng tiết sữa bất thường kèm rậm lông toàn thân"
    ],
    correct: 0,
    explanation: "Do spironolacton có cấu trúc steroid gần giống hormon sinh dục, thuốc đối kháng thụ thể androgen và ức chế sinh tổng hợp androgen, gây tác dụng phụ ở nam giới: chứng vú to (gynecomastia), đau núm vú, bất lực, giảm tinh trùng.",
    reference: "Sách Dược lý 2 tr. 88"
  },
  {
    chapter: "Thuốc lợi niệu",
    level: "Nhận biết",
    question: "Thuốc lợi tiểu Amilorid và Triamteren thuộc nhóm nào sau đây?",
    options: [
      "Thuốc lợi tiểu giữ kali không phụ thuộc vào nồng độ aldosteron",
      "Thuốc lợi tiểu quai có tác dụng siêu ngắn",
      "Thuốc đối kháng thụ thể vasopressin V2",
      "Thuốc lợi tiểu làm hạ kali máu nghiêm trọng"
    ],
    correct: 0,
    explanation: "Amilorid và Triamteren ức chế trực tiếp kênh natri biểu mô (ENaC) ở bờ tự do của tế bào ống lượn xa và ống góp, làm giảm tái hấp thu Na+ và ngăn thải K+ mà không phụ thuộc vào sự có mặt hay vắng mặt của aldosteron.",
    reference: "Sách Dược lý 2 tr. 88-89"
  },
  {
    chapter: "Thuốc lợi niệu",
    level: "Nhận biết",
    question: "Acetazolamid có cơ chế tác dụng là ức chế enzym carbonic anhydrase (CA). Chỉ định lâm sàng phổ biến nhất hiện nay của thuốc này là gì?",
    options: [
      "Hạ nhãn áp trong bệnh glôcôm và dự phòng hội chứng say độ cao",
      "Điều trị phù phổi cấp do suy tim trái sung huyết",
      "Điều trị tăng huyết áp vô căn kháng trị",
      "Hạ canxi máu cấp tính do suy cận giáp"
    ],
    correct: 0,
    explanation: "Do ức chế CA ở thể mi của mắt làm giảm sản xuất thủy dịch, Acetazolamid là thuốc điều trị quan trọng trong bệnh glôcôm (tăng nhãn áp). Thuốc cũng làm tăng thải HCO3- gây toan chuyển hóa nhẹ kích thích thông khí nên dùng chống say độ cao (mountain sickness).",
    reference: "Sách Dược lý 2 tr. 80-81"
  },
  {
    chapter: "Thuốc lợi niệu",
    level: "Nhận biết",
    question: "Mannitol là thuốc lợi tiểu thẩm thấu được dùng chủ yếu bằng đường nào và có chỉ định cấp cứu nổi bật nào?",
    options: [
      "Truyền tĩnh mạch ưu trương, chỉ định trong phù não cấp và tăng áp lực nội sọ",
      "Uống trước bữa ăn, chỉ định trong xơ gan cổ trướng có phù",
      "Tiêm bắp sâu, chỉ định trong suy tim mạn tính giai đoạn cuối",
      "Ngậm dưới lưỡi, chỉ định trong cơn phù phổi cấp huyết động"
    ],
    correct: 0,
    explanation: "Mannitol không hấp thu qua đường tiêu hóa nên bắt buộc dùng truyền tĩnh mạch dạng dung dịch ưu trương (10-20%). Thuốc làm tăng áp lực thẩm thấu máu, hút dịch từ khoang nội bào và nhu mô não vào lòng mạch, dùng cấp cứu phù não và hạ áp lực nội sọ.",
    reference: "Sách Dược lý 2 tr. 90-91"
  },

  // =========================================================================
  // BÀI 6: THUỐC ĐIỀU TRỊ VIÊM LOÉT DẠ DÀY TÁ TRÀNG (trang 102 - 113)
  // =========================================================================
  {
    chapter: "Thuốc điều trị DDTT",
    level: "Nhận biết",
    question: "Nhóm thuốc ức chế bơm proton (PPI) có cơ chế phân tử tác dụng là gì?",
    options: [
      "Ức chế không hồi phục enzym H+/K+ ATPase ở tế bào viền thành dạ dày",
      "Cạnh tranh thuận nghịch tại thụ thể histamin H2 trên màng đáy tế bào viền",
      "Kích thích thụ thể prostaglandin EP3 làm tăng tiết chất nhầy và HCO3-",
      "Trung hòa trực tiếp acid chlohydric (HCl) trong lòng dạ dày"
    ],
    correct: 0,
    explanation: "Thuốc PPI (Omeprazol, Esomeprazol, Pantoprazol...) gắn cộng hóa trị vào gốc cystein của enzym H+/K+ ATPase (bơm proton - bước chung cuối cùng của quá trình bài tiết HCl), ức chế không hồi phục enzym này.",
    reference: "Sách Dược lý 2 tr. 104-105"
  },
  {
    chapter: "Thuốc điều trị DDTT",
    level: "Vận dụng",
    question: "Thời điểm thích hợp nhất trong ngày để uống thuốc ức chế bơm proton (PPI) đạt hiệu quả ức chế acid tối đa là khi nào?",
    options: [
      "Trước bữa ăn sáng khoảng 30 đến 60 phút",
      "Uống ngay sau khi ăn no xong",
      "Uống vào lúc nửa đêm khi đang ngủ say",
      "Uống cùng lúc với bữa ăn trưa"
    ],
    correct: 0,
    explanation: "PPI cần được hoạt hóa trong môi trường acid tại tế bào viền khi các bơm proton đang hoạt động mạnh nhất. Bơm proton hoạt động nhiều nhất sau một đêm nhịn ăn khi bắt đầu tiếp nhận bữa ăn đầu tiên, do đó uống trước ăn sáng 30-60 phút là tối ưu.",
    reference: "Sách Dược lý 2 tr. 105"
  },
  {
    chapter: "Thuốc điều trị DDTT",
    level: "Nhận biết",
    question: "Thuốc kháng thụ thể H2 nào sau đây có tác dụng ức chế mạnh hệ enzym cytochrom P450 ở gan và có tác dụng phụ kháng androgen gây vú to ở nam giới?",
    options: [
      "Cimetidin",
      "Ranitidin",
      "Famotidin",
      "Nizatidin"
    ],
    correct: 0,
    explanation: "Cimetidin là kháng H2 thế hệ đầu, ức chế mạnh CYP450 gây nhiều tương tác thuốc nguy hiểm, đồng thời gắn vào thụ thể androgen và ức chế chuyển hóa estradiol gây chứng vú to ở nam giới và bất lực.",
    reference: "Sách Dược lý 2 tr. 103-104"
  },
  {
    chapter: "Thuốc điều trị DDTT",
    level: "Nhận biết",
    question: "Cơ chế bảo vệ niêm mạc dạ dày của Sucralfat là gì?",
    options: [
      "Trong môi trường acid dịch vị phân ly tạo gel dính bảo vệ che phủ ổ loét",
      "Ức chế thụ thể gastrin trên tế bào thành dạ dày",
      "Tiêu diệt trực tiếp vi khuẩn Helicobacter pylori nhờ gốc sulfat",
      "Ức chế dây thần kinh phế vị làm giảm bài tiết acid tự do"
    ],
    correct: 0,
    explanation: "Trong môi trường acid pH < 4, Sucralfat trùng hợp tạo thành một lớp gel nhầy dính chặt vào đáy ổ loét (do ái lực với protein dịch rỉ ổ loét mang điện dương), ngăn cản acid và pepsin tiếp xúc phá hủy niêm mạc.",
    reference: "Sách Dược lý 2 tr. 107"
  },
  {
    chapter: "Thuốc điều trị DDTT",
    level: "Vận dụng",
    question: "Vì sao không nên uống Sucralfat đồng thời cùng lúc với thuốc kháng acid (Antacid) hoặc thuốc ức chế bơm proton (PPI)?",
    options: [
      "Vì Sucralfat cần môi trường acid để hoạt hóa và tạo gel bảo vệ ổ loét",
      "Vì phối hợp sẽ gây tạo muối không tan dẫn tới tắc ruột cơ học",
      "Vì làm tăng hấp thu nhôm vào máu gây độc tính não cấp tính",
      "Vì làm mất hoàn toàn hoạt tính của enzym H+/K+ ATPase"
    ],
    correct: 0,
    explanation: "Sucralfat bắt buộc phải có môi trường acid (pH dịch vị dưới 4) để trùng hợp tạo gel dính bảo vệ. Nếu uống chung với antacid hoặc PPI, pH dạ dày tăng lên sẽ làm giảm hoặc mất tác dụng tạo gel của sucralfat. Cần uống cách xa ít nhất 1-2 giờ.",
    reference: "Sách Dược lý 2 tr. 107"
  },
  {
    chapter: "Thuốc điều trị DDTT",
    level: "Vận dụng",
    question: "Misoprostol là thuốc tương tự Prostaglandin E1 bảo vệ niêm mạc dạ dày, CHỐNG CHỈ ĐỊNH tuyệt đối cho đối tượng nào sau đây?",
    options: [
      "Phụ nữ đang mang thai vì gây co bóp tử cung mạnh dẫn đến sảy thai",
      "Bệnh nhân đang sử dụng thuốc chống viêm không steroid NSAID",
      "Người già bị viêm teo niêm mạc dạ dày do thiếu acid",
      "Bệnh nhân đái tháo đường có biến chứng viêm dây thần kinh"
    ],
    correct: 0,
    explanation: "Misoprostol kích thích co bóp cơ trơn tử cung mạnh mẽ, có thể gây sảy thai hoặc sinh non, chống chỉ định tuyệt đối cho phụ nữ có thai (trên lâm sàng còn dùng trong sản khoa để gây chuyển dạ hoặc đình chỉ thai nghén).",
    reference: "Sách Dược lý 2 tr. 108"
  },
  {
    chapter: "Thuốc điều trị DDTT",
    level: "Nhận biết",
    question: "Tác dụng phụ thường gặp nhất của muối Nhôm hydroxyd và muối Magnesi hydroxyd trong các chế phẩm kháng acid (Antacid) là gì?",
    options: [
      "Nhôm gây táo bón, Magnesi gây tiêu chảy",
      "Nhôm gây tiêu chảy, Magnesi gây táo bón",
      "Cả hai chất đều chỉ gây tiêu chảy nặng",
      "Cả hai chất đều chỉ gây táo bón nặng"
    ],
    correct: 0,
    explanation: "Nhôm hydroxyd có tính làm săn se niêm mạc ruột và giảm nhu động nên gây táo bón. Magnesi hydroxyd giữ nước theo cơ chế thẩm thấu nên gây tiêu chảy. Do đó người ta thường phối hợp cả hai chất trong cùng chế phẩm (như Maalox) để bù trừ triệt tiêu tác dụng phụ này.",
    reference: "Sách Dược lý 2 tr. 102"
  },
  {
    chapter: "Thuốc điều trị DDTT",
    level: "Vận dụng",
    question: "Khi sử dụng các hợp chất chứa Bismuth (như Bismuth subsalicylat/subcitrat) trong phác đồ tiệt trừ H. pylori, dấu hiệu lành tính nào thường làm bệnh nhân hoang mang cần được tư vấn trước?",
    options: [
      "Phân có màu đen sẫm và niêm mạc lưỡi có thể bị nhuộm đen",
      "Nước tiểu đổi sang màu đỏ cam như nước ngọt xá xị",
      "Mồ hôi và nước mắt tiết ra có màu xanh huỳnh quang",
      "Xuất hiện các ban đỏ dạng sởi ở hai cẳng bàn chân"
    ],
    correct: 0,
    explanation: "Bismuth khi vào đường tiêu hóa kết hợp với sulfid vi khuẩn tạo thành bismuth sulfid màu đen, làm cho phân và lưỡi có màu đen. Đây là hiện tượng hoàn toàn vô hại nhưng rất dễ nhầm với xuất huyết tiêu hóa trên, cần dặn dò bệnh nhân trước.",
    reference: "Sách Dược lý 2 tr. 108"
  },

  // =========================================================================
  // BÀI 8: THUỐC ĐIỀU CHỈNH RỐI LOẠN HÔ HẤP (GIẢM HO, LONG ĐỜM, HEN PHẾ QUẢN)
  // =========================================================================
  {
    chapter: "Thuốc ĐC RLHH",
    level: "Nhận biết",
    question: "Thuốc giảm ho trung ương nào sau đây không gây nghiện, không gây ức chế trung tâm hô hấp ở liều điều trị và ít gây táo bón hơn Codein?",
    options: [
      "Dextromethorphan",
      "Morphin sulfat",
      "Pholcodin",
      "Methadon"
    ],
    correct: 0,
    explanation: "Dextromethorphan là dẫn chất morphin nhưng không tác dụng lên thụ thể opioid ở liều điều trị, có tác dụng ức chế trung tâm ho ở hành não tương đương codein nhưng không gây nghiện, không ức chế hô hấp và không gây táo bón.",
    reference: "Sách Dược lý 2 tr. 358 & Dược lý hô hấp"
  },
  {
    chapter: "Thuốc ĐC RLHH",
    level: "Nhận biết",
    question: "Cơ chế làm tiêu chất nhầy (long đờm) của N-acetylcystein là gì?",
    options: [
      "Cắt đứt các cầu nối disulfid (-S-S-) của chuỗi mucoprotein trong đờm",
      "Ức chế phản xạ ho tại thụ thể cảm giác ở niêm mạc thanh quản",
      "Kích thích tuyến tiết chất nhầy tăng tiết nước làm loãng đờm",
      "Kiềm hóa dịch phế quản làm tan rã các tế bào biểu mô bong tróc"
    ],
    correct: 0,
    explanation: "N-acetylcystein có nhóm sulfhydryl (-SH) tự do, có tác dụng cắt đứt các cầu nối disulfid (-S-S-) của chuỗi mucopolysaccharid và mucoprotein trong dịch nhầy phế quản, làm giảm độ quánh của đờm giúp tống đờm ra ngoài dễ dàng.",
    reference: "Sách Dược lý 2 tr. 358-359"
  },
  {
    chapter: "Thuốc ĐC RLHH",
    level: "Vận dụng",
    question: "Thuốc tiêu chất nhầy N-acetylcystein cần thận trọng hoặc chống chỉ định ở bệnh nhân có tiền sử bệnh lý nào do nguy cơ gây co thắt phế quản?",
    options: [
      "Bệnh hen phế quản",
      "Tăng huyết áp vô căn",
      "Đái tháo đường typ 1",
      "Sỏi thận calci oxalat"
    ],
    correct: 0,
    explanation: "N-acetylcystein có thể khởi phát phản xạ co thắt phế quản cấp tính ở bệnh nhân có cơ địa tăng phản ứng phế quản, do đó phải rất thận trọng và theo dõi sát hoặc phối hợp thuốc giãn phế quản ở người có tiền sử hen phế quản.",
    reference: "Sách Dược lý 2 tr. 359"
  },
  {
    chapter: "Thuốc ĐC RLHH",
    level: "Nhận biết",
    question: "Nhóm thuốc giãn phế quản tác dụng ngắn (SABA) dạng hít khí dung như Salbutamol, Terbutalin có cơ chế tác dụng là gì?",
    options: [
      "Kích thích chọn lọc thụ thể beta-2 adrenergic trên cơ trơn phế quản",
      "Phong bế thụ thể muscarinic M3 trên cơ trơn khí phế quản",
      "Ức chế không chọn lọc enzym phosphodiesterase nội bào",
      "Chẹn thụ thể leukotrien CysLT1 ở đường dẫn khí"
    ],
    correct: 0,
    explanation: "Salbutamol và Terbutalin kích thích chọn lọc thụ thể beta-2 adrenergic gắn với protein Gs, hoạt hóa adenylcyclase làm tăng AMP vòng nội bào, gây giãn cơ trơn phế quản nhanh chóng (chỉ sau vài phút), là thuốc cắt cơn hen hàng đầu.",
    reference: "Sách Dược lý 2 tr. 16, 267"
  },
  {
    chapter: "Thuốc ĐC RLHH",
    level: "Vận dụng",
    question: "Biện pháp quan trọng nhất cần hướng dẫn bệnh nhân sau khi sử dụng Corticoid dạng hít (ICS như Budesonid, Fluticason) để tránh tác dụng phụ tại chỗ là gì?",
    options: [
      "Súc miệng và họng kỹ bằng nước sạch rồi nhổ đi",
      "Nín thở liên tục trong vòng 5 phút sau khi hít",
      "Uống ngay một ly sữa nóng hoặc nước đường",
      "Nằm đầu thấp trong 30 phút sau khi dùng thuốc"
    ],
    correct: 0,
    explanation: "Corticoid dạng hít lắng đọng ở niêm mạc họng có thể gây nấm miệng hầu (Candida albicans) và khàn tiếng. Biện pháp phòng tránh đơn giản và hiệu quả nhất là súc miệng, họng bằng nước sạch và nhổ ra ngay sau mỗi lần hít thuốc.",
    reference: "Sách Dược lý 2 tr. 291"
  },
  {
    chapter: "Thuốc ĐC RLHH",
    level: "Nhận biết",
    question: "Montelukast và Zafirlukast là thuốc điều trị dự phòng hen phế quản có cơ chế tác dụng nào?",
    options: [
      "Đối kháng chọn lọc tại thụ thể CysLT1 của leukotrien",
      "Ức chế trực tiếp enzym 5-lipoxygenase (5-LOX)",
      "Phong bế kênh calci phụ thuộc điện thế trên tế bào mast",
      "Ức chế gắn kháng thể IgE lên bề mặt dưỡng bào"
    ],
    correct: 0,
    explanation: "Montelukast và Zafirlukast là chất đối kháng chọn lọc trên thụ thể cysteinyl leukotrien CysLT1, ngăn cản tác dụng co thắt phế quản, phù nề và tăng tiết dịch do leukotrien LTC4, LTD4, LTE4 gây ra trong bệnh hen.",
    reference: "Sách Dược lý 2 tr. 267, 344"
  },
  {
    chapter: "Thuốc ĐC RLHH",
    level: "Vận dụng",
    question: "Theophylin là thuốc giãn phế quản dẫn xuất xanthin, trong lâm sàng cần hết sức thận trọng và theo dõi nồng độ thuốc trong máu vì lý do gì?",
    options: [
      "Cửa sổ điều trị rất hẹp, nồng độ độc rất gần với nồng độ điều trị gây loạn nhịp tim và co giật",
      "Thuốc bị phá hủy 100% bởi dịch vị dạ dày nên khó kiểm soát hấp thu",
      "Gây suy tủy xương không hồi phục chỉ sau một liều duy nhất",
      "Thuốc chuyển hóa tạo chất độc cyanid tích lũy trong gan"
    ],
    correct: 0,
    explanation: "Theophylin có khoảng điều trị hẹp (10-20 mcg/mL). Khi vượt quá 20 mcg/mL dễ xuất hiện độc tính nghiêm trọng: nhịp nhanh thất, loạn nhịp tim nguy hiểm, kích động và co giật kháng trị.",
    reference: "Sách Dược lý 2 tr. 16, 20"
  },

  // =========================================================================
  // BÀI 9: THUỐC KHÁNG HISTAMIN H1 (trang 342 - 354)
  // =========================================================================
  {
    chapter: "Thuốc kháng H1",
    level: "Nhận biết",
    question: "Cơ chế tác dụng dược lý của các thuốc kháng histamin H1 là gì?",
    options: [
      "Đối kháng cạnh tranh thuận nghịch với histamin tại thụ thể H1",
      "Ức chế sự tổng hợp histamin từ acid amin histidin",
      "Phá hủy trực tiếp phân tử histamin tự do đang lưu hành trong máu",
      "Kích thích enzym histaminase làm tăng thoái hóa histamin"
    ],
    correct: 0,
    explanation: "Các thuốc kháng H1 có cấu trúc tương tự histamin, cạnh tranh thuận nghịch với histamin tại vị trí gắn của thụ thể H1, ngăn chặn các đáp ứng sinh lý bệnh do histamin gây ra (co thắt phế quản, tăng tính thấm mao mạch, ngứa).",
    reference: "Sách Dược lý 2 tr. 344"
  },
  {
    chapter: "Thuốc kháng H1",
    level: "Nhận biết",
    question: "Các thuốc nào sau đây thuộc nhóm kháng histamin H1 thế hệ 1?",
    options: [
      "Promethazin, Clorpheniramin, Diphenhydramin",
      "Loratadin, Cetirizin, Fexofenadin",
      "Desloratadin, Levocetirizin, Ebastin",
      "Cimetidin, Ranitidin, Famotidin"
    ],
    correct: 0,
    explanation: "Thế hệ 1 gồm: Promethazin, Clorpheniramin, Diphenhydramin, Hydroxyzin, Dimenhydrinat. Thế hệ 2 gồm: Loratadin, Cetirizin, Fexofenadin... Còn Cimetidin, Ranitidin là thuốc kháng thụ thể H2.",
    reference: "Sách Dược lý 2 tr. 344-345"
  },
  {
    chapter: "Thuốc kháng H1",
    level: "Vận dụng",
    question: "Vì sao các thuốc kháng histamin H1 thế hệ 1 (như Promethazin, Clorpheniramin) lại gây buồn ngủ, an thần sâu và giảm khả năng tập trung?",
    options: [
      "Tan nhiều trong lipid, dễ dàng vượt qua hàng rào máu não và phong bế thụ thể H1 ở trung ương",
      "Làm cạn kiệt lượng glucose cung cấp cho các tế bào thần kinh vỏ não",
      "Ức chế trực tiếp trung tâm điều hòa thân nhiệt ở vùng dưới đồi",
      "Làm giảm dòng máu tưới lên bán cầu đại não do co mạch não"
    ],
    correct: 0,
    explanation: "Các thuốc thế hệ 1 có tính thân dầu cao, qua được hàng rào máu não và ức chế các thụ thể H1 tại hệ thần kinh trung ương (vốn có vai trò duy trì sự thức tỉnh), dẫn đến tác dụng an thần, buồn ngủ, giảm phản xạ vận động.",
    reference: "Sách Dược lý 2 tr. 345"
  },
  {
    chapter: "Thuốc kháng H1",
    level: "Nhận biết",
    question: "Ưu điểm vượt trội của các thuốc kháng histamin H1 thế hệ 2 (như Loratadin, Cetirizin, Fexofenadin) so với thế hệ 1 là gì?",
    options: [
      "Ít qua hàng rào máu não, hầu như không gây buồn ngủ và không có tác dụng kháng cholinergic",
      "Có tác dụng diệt khuẩn mạnh trên các chủng vi khuẩn gram âm",
      "Tác dụng hạ sốt và giảm đau mạnh tương đương morphin",
      "Có thể thay thế hoàn toàn adrenalin trong cấp cứu sốc phản vệ"
    ],
    correct: 0,
    explanation: "Thuốc kháng H1 thế hệ 2 có tính thân nước hơn, liên kết protein cao hoặc là cơ chất của bơm P-gp nên rất ít qua hàng rào máu não, đồng thời có tính chọn lọc cao trên thụ thể H1 ngoại vi, không gây an thần ngủ gà và không có tác dụng phụ atropinic (khô miệng, bí tiểu).",
    reference: "Sách Dược lý 2 tr. 344, 348"
  },
  {
    chapter: "Thuốc kháng H1",
    level: "Vận dụng",
    question: "Tác dụng phụ kiểu atropin (kháng muscarinic cholinergic) của thuốc kháng H1 thế hệ 1 biểu hiện qua các triệu chứng nào?",
    options: [
      "Khô miệng, nhìn mờ, giãn đồng tử, bí tiểu và táo bón",
      "Tăng tiết nước bọt, tiêu chảy, co đồng tử và vã mồ hôi",
      "Hạ thân nhiệt đột ngột kèm nhịp tim chậm xoang",
      "Tụt huyết áp nặng kèm co giật toàn thân"
    ],
    correct: 0,
    explanation: "Do phong bế thụ thể muscarinic, kháng H1 thế hệ 1 gây tác dụng phụ kháng cholinergic điển hình: khô miệng họng, giảm tiết mồ hôi, giãn đồng tử gây nhìn mờ, tăng nhãn áp, bí tiểu (nguy hiểm ở người phì đại tuyến tiền liệt), táo bón.",
    reference: "Sách Dược lý 2 tr. 345, 347"
  },
  {
    chapter: "Thuốc kháng H1",
    level: "Vận dụng cao",
    question: "Hai thuốc kháng histamin H1 thế hệ 2 trước đây là Astemizol và Terfenadin đã bị rút khỏi thị trường hoặc hạn chế sử dụng nghiêm ngặt vì lý do nguy hiểm nào?",
    options: [
      "Kéo dài khoảng QT trên ECG và gây loạn nhịp thất xoắn đỉnh khi dùng cùng thuốc ức chế CYP3A4",
      "Gây suy gan cấp hoại tử tế bào gan ồ ạt",
      "Gây suy tủy xương gây mất toàn bộ tế bào máu ngoại vi",
      "Gây hội chứng ly giải biểu bì hoại tử nghiêm trọng (Lyell)"
    ],
    correct: 0,
    explanation: "Terfenadin và Astemizol ức chế kênh kali hERG ở tim gây kéo dài khoảng QT. Khi dùng chung với các thuốc ức chế CYP3A4 (như Ketoconazol, Erythromycin...), nồng độ thuốc mẹ tăng vọt gây loạn nhịp thất nguy hiểm (xoắn đỉnh) dẫn đến đột tử.",
    reference: "Sách Dược lý 2 tr. 348-349"
  },
  {
    chapter: "Thuốc kháng H1",
    level: "Nhận biết",
    question: "Fexofenadin có đặc điểm xuất xứ dược động học nổi bật nào?",
    options: [
      "Là chất chuyển hóa có hoạt tính của Terfenadin nhưng không có độc tính gây loạn nhịp tim",
      "Là đồng phân quang học tả tuyền của Clorpheniramin",
      "Được sinh tổng hợp trực tiếp từ cấu trúc của Promethazin",
      "Là tiền chất cần enzym gan thủy phân mới có hoạt tính"
    ],
    correct: 0,
    explanation: "Fexofenadin chính là chất chuyển hóa acid carboxylic có hoạt tính của terfenadin. Do không chẹn kênh kali tim nên Fexofenadin giữ nguyên hoạt tính kháng dị ứng mạnh mà hoàn toàn an toàn cho tim, không gây xoắn đỉnh.",
    reference: "Sách Dược lý 2 tr. 344, 349"
  }
];

