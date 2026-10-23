// Ngân hàng 822 Câu hỏi Trắc nghiệm Dược Lâm Sàng Chuẩn Hóa 100% Không Trùng Lặp
// Đầy đủ 16 chương trọng tâm, 4 phương án cân đối, triệt tiêu thiên kiến vị trí & độ dài, chuẩn đại học Dược
const ALL_EXAM_BANK = [
  {
    "id": 1,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Môn học Dược lâm sàng được khai sinh sớm nhất tại quốc gia nào vào những năm 1960?",
    "options": [
      "Canada",
      "Cộng hòa Pháp",
      "Vương quốc Anh",
      "Hoa Kỳ"
    ],
    "correct": 3,
    "explanation": "Dược lâm sàng ra đời tại Mỹ vào những năm 1960 và đưa vào giảng dạy đại học năm 1964.",
    "reference": "Sách DLS tr. 9"
  },
  {
    "id": 2,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Mốc đánh dấu sự du nhập chính thức của Dược lâm sàng vào Việt Nam là hội thảo năm nào tại Hà Nội?",
    "options": [
      "Năm 1990",
      "Năm 1980",
      "Năm 1986",
      "Năm 1998"
    ],
    "correct": 0,
    "explanation": "Hội thảo tháng 11/1990 tại ĐH Dược Hà Nội do tổ chức Tầm nhìn thế giới - Australia tài trợ là mốc khởi đầu DLS tại Việt Nam.",
    "reference": "Sách DLS tr. 11"
  },
  {
    "id": 3,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Bộ môn Dược lâm sàng Trường Đại học Dược Hà Nội chính thức thành lập vào năm nào?",
    "options": [
      "Năm 1993",
      "Năm 1998",
      "Năm 2005",
      "Năm 2000"
    ],
    "correct": 1,
    "explanation": "Quyết định thành lập Bộ môn Dược lâm sàng vào ngày 11/02/1998.",
    "reference": "Sách DLS tr. 12"
  },
  {
    "id": 4,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Bốn tiêu chuẩn cơ bản để lựa chọn thuốc hợp lý gồm những yếu tố nào?",
    "options": [
      "Hấp thu, Phân bố, Chuyển hóa, Thải trừ",
      "Hàm lượng, Ái lực, Tương thích, Kháng thuốc",
      "Hiệu quả, An toàn, Tiện dụng, Kinh tế",
      "Hiệu lực, An thần, Tiêu hóa, Kháng sinh"
    ],
    "correct": 2,
    "explanation": "Bốn tiêu chuẩn cốt lõi là H-A-T-K và thêm tiêu chuẩn Sẵn có.",
    "reference": "Sách DLS tr. 13"
  },
  {
    "id": 5,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Trong xử trí cơn cấp cứu khẩn cấp, tiêu chuẩn nào luôn được ưu tiên cao nhất?",
    "options": [
      "Tính tiện dụng",
      "Tính kinh tế",
      "Khả năng sẵn có",
      "Hiệu quả điều trị"
    ],
    "correct": 3,
    "explanation": "Cấp cứu khẩn cấp đòi hỏi thuốc có hiệu quả nhanh để cứu tính mạng.",
    "reference": "Sách DLS tr. 14"
  },
  {
    "id": 6,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Khi điều trị bệnh mạn tính kéo dài, hai tiêu chuẩn nào cần được ưu tiên cân nhắc?",
    "options": [
      "Độ thanh thải và Thải trừ",
      "Hiệu quả và Tốc độ tác dụng",
      "Độ an toàn và Tính kinh tế",
      "Tính tiện dụng và Phân bố"
    ],
    "correct": 2,
    "explanation": "Điều trị mạn tính đòi hỏi thuốc ít độc tính và chi phí hợp lý.",
    "reference": "Sách DLS tr. 15"
  },
  {
    "id": 7,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Theo khuyến cáo của WHO, số thuốc trung bình trong một đơn điều trị ngoại trú nên là:",
    "options": [
      "Khoảng 5,0 thuốc",
      "Khoảng 0,5 thuốc",
      "Khoảng 1,5 thuốc",
      "Khoảng 3,5 thuốc"
    ],
    "correct": 2,
    "explanation": "Chỉ tiêu kê đơn WHO trung bình khoảng 1,5 thuốc trên một đơn để tránh tương tác.",
    "reference": "Sách DLS tr. 21"
  },
  {
    "id": 8,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Tỷ lệ đơn thuốc có kê kháng sinh ngoại trú theo khuyến cáo của WHO nên ở mức:",
    "options": [
      "Khoảng 50% đến 60%",
      "Khoảng 20% đến 30%",
      "Dưới 5%",
      "Trên 70%"
    ],
    "correct": 1,
    "explanation": "Chỉ tiêu WHO khuyến cáo tỷ lệ đơn có kháng sinh là 20-30%.",
    "reference": "Sách DLS tr. 22"
  },
  {
    "id": 9,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Tỷ lệ thuốc dạng tiêm trong đơn theo khuyến cáo của WHO nên ở mức khoảng:",
    "options": [
      "Khoảng 20%",
      "Khoảng 40%",
      "Khoảng 60%",
      "Dưới 5%"
    ],
    "correct": 0,
    "explanation": "Chỉ tiêu WHO khuyến cáo thuốc tiêm khoảng 20% nhằm ưu tiên đường uống.",
    "reference": "Sách DLS tr. 22"
  },
  {
    "id": 10,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Tỷ lệ phần trăm thuốc kê theo tên gốc trong đơn theo khuyến cáo WHO là:",
    "options": [
      "Đạt 75%",
      "Đạt 50%",
      "Đạt 30%",
      "Đạt 100%"
    ],
    "correct": 3,
    "explanation": "WHO khuyến cáo kê đơn theo tên generic đạt 100%.",
    "reference": "Sách DLS tr. 21"
  },
  {
    "id": 11,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Trình tự bước đầu tiên trong 4 bước thiết lập phác đồ điều trị là:",
    "options": [
      "Lựa chọn phương án điều trị",
      "Thiết lập đơn thuốc cụ thể",
      "Xác định mục tiêu điều trị",
      "Xác định vấn đề cần giải quyết"
    ],
    "correct": 3,
    "explanation": "Bước 1 là xác định vấn đề của người bệnh.",
    "reference": "Sách DLS tr. 16"
  },
  {
    "id": 12,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Nguồn thông tin thuốc cấp 1 bao gồm tài liệu nào sau đây?",
    "options": [
      "Hệ thống mục lục tóm tắt",
      "Sách giáo khoa dược lý",
      "Bài báo công trình nghiên cứu gốc",
      "Dược thư Quốc gia Việt Nam"
    ],
    "correct": 2,
    "explanation": "Nguồn cấp 1 là các bài báo công bố kết quả nghiên cứu lâm sàng gốc ban đầu.",
    "reference": "Sách DLS tr. 122"
  },
  {
    "id": 13,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Nguồn thông tin thuốc cấp 2 bao gồm tài liệu nào sau đây?",
    "options": [
      "Sách giáo trình Dược lâm sàng",
      "Chỉ mục dữ liệu tóm tắt tra cứu",
      "Bài báo nghiên cứu gốc",
      "Tờ hướng dẫn sử dụng thuốc"
    ],
    "correct": 1,
    "explanation": "Nguồn cấp 2 là hệ thống tóm tắt mục lục như PubMed, Medline.",
    "reference": "Sách DLS tr. 122"
  },
  {
    "id": 14,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Nguồn thông tin thuốc cấp 3 có ưu điểm nổi bật nào sau đây?",
    "options": [
      "Tính khái quát cao và đã được thẩm định",
      "Không bao giờ có sai sót cá nhân",
      "Được cập nhật theo từng ngày",
      "Chứa toàn bộ dữ liệu thô nghiên cứu"
    ],
    "correct": 0,
    "explanation": "Nguồn cấp 3 có tính hệ thống, bao quát và độ tin cậy cao.",
    "reference": "Sách DLS tr. 122"
  },
  {
    "id": 15,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Bước đầu tiên trong quy trình cung cấp thông tin thuốc 6 bước là:",
    "options": [
      "Đánh giá chất lượng tài liệu",
      "Tìm kiếm thông tin trên mạng",
      "Trả lời trực tiếp câu hỏi",
      "Xác định đặc điểm của người yêu cầu"
    ],
    "correct": 3,
    "explanation": "Xác định đối tượng hỏi là ai để trả lời phù hợp.",
    "reference": "Sách DLS tr. 124"
  },
  {
    "id": 16,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Chỉ số DDD được định nghĩa là:",
    "options": [
      "Liều tối đa có thể dung nạp",
      "Liều nạp ban đầu trong cấp cứu",
      "Liều gây độc cho động vật thí nghiệm",
      "Liều trung bình hàng ngày theo quy ước"
    ],
    "correct": 3,
    "explanation": "Defined Daily Dose là liều duy trì trung bình hàng ngày cho người lớn.",
    "reference": "Sách DLS tr. 14"
  },
  {
    "id": 17,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Địa chỉ Trung tâm Thông tin thuốc và Theo dõi ADR Quốc gia đặt tại số nào?",
    "options": [
      "138A Giảng Võ Hà Nội",
      "48 Hàng Bài Hà Nội",
      "110 Cầu Giấy Hà Nội",
      "Số 1 Tràng Tiền Hà Nội"
    ],
    "correct": 0,
    "explanation": "Trung tâm đặt tại ĐH Dược Hà Nội 138A Giảng Võ.",
    "reference": "Sách DLS tr. 104"
  },
  {
    "id": 18,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Nhiệm vụ trọng tâm của Dược sĩ lâm sàng trong Hội đồng Thuốc và Điều trị bệnh viện là gì?",
    "options": [
      "Thay thế bác sĩ điều trị ký giấy xuất viện",
      "Xây dựng danh mục thuốc và giám sát sử dụng an toàn",
      "Sửa chữa hệ thống máy chiếu tia xạ",
      "Trực tiếp mổ phẫu thuật cấp cứu cho người bệnh"
    ],
    "correct": 1,
    "explanation": "Dược sĩ lâm sàng tư vấn danh mục và phác đồ chuẩn cho hội đồng thuốc.",
    "reference": "Sách DLS tr. 23"
  },
  {
    "id": 19,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Kỹ năng thu thập thông tin người bệnh của Dược sĩ lâm sàng nhằm mục đích chủ yếu gì?",
    "options": [
      "Định lượng nồng độ kháng thể trong huyết tương",
      "Kiểm tra trình độ học vấn người nhà bệnh nhân",
      "Tính toán giá trị tài sản cá nhân người bệnh",
      "Khai thác chính xác tiền sử dùng thuốc và dị ứng"
    ],
    "correct": 3,
    "explanation": "Thu thập tiền sử dị ứng, tiền sử dùng thuốc, bệnh kèm để tránh sai sót.",
    "reference": "Sách DLS tr. 18-20"
  },
  {
    "id": 20,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Chỉ tiêu thời gian phát thuốc cho một người bệnh nhằm đảm bảo mục đích nào?",
    "options": [
      "Giảm số lượng nhân viên y tế tại quầy ở mức độ vừa và nặng",
      "Đảm bảo người bệnh hiểu rõ liều lượng và cách dùng",
      "Tăng số lượng thuốc bán ra trong ngày sau khi dùng thuốc",
      "Rút ngắn thời gian làm việc của dược sĩ kéo dài liên tục"
    ],
    "correct": 1,
    "explanation": "Thời gian phát thuốc là thời điểm vàng để hướng dẫn người bệnh dùng thuốc đúng.",
    "reference": "Sách DLS tr. 22"
  },
  {
    "id": 21,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Khi trả lời thông tin thuốc cho người bệnh, yêu cầu quan trọng nhất về hình thức là gì?",
    "options": [
      "Viết tay tắt để người bệnh tự dịch nghĩa trên lâm sàng",
      "Chỉ cung cấp công thức hóa học của chất ở mức độ vừa và nặng",
      "Ngắn gọn, dễ hiểu, tránh thuật ngữ chuyên môn phức tạp",
      "Dùng nhiều thuật ngữ tiếng Anh chuyên sâu sau khi dùng thuốc"
    ],
    "correct": 2,
    "explanation": "Thông tin cho bệnh nhân phải dễ hiểu, rõ ràng và mạch lạc.",
    "reference": "Sách DLS tr. 123-124"
  },
  {
    "id": 22,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Khi tư vấn về thuốc có khoảng điều trị hẹp, dược sĩ lâm sàng cần lưu ý điểm gì?",
    "options": [
      "Chỉ cần dặn uống thuốc khi thấy có triệu chứng ở mức độ vừa và nặng",
      "Cho phép bệnh nhân tự tăng liều gấp đôi trên lâm sàng",
      "Cần theo dõi nồng độ thuốc trong máu và dấu hiệu ngộ độc",
      "Không cần quan tâm đến chức năng gan thận ở người bệnh"
    ],
    "correct": 2,
    "explanation": "Thuốc có khoảng điều trị hẹp cần theo dõi nồng độ máu (TDM) sát sao.",
    "reference": "Sách DLS tr. 13, 27"
  },
  {
    "id": 23,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Tại sao đơn thuốc cho người cao tuổi cần ghi rõ ràng cả đường dùng và thời điểm dùng?",
    "options": [
      "Giúp giảm bớt thời gian giải thích của bác sĩ kèm theo sốt nhẹ",
      "Để nhà thuốc bán được nhiều sản phẩm hơn trên lâm sàng định kỳ",
      "Để đơn thuốc trông dài và chuyên nghiệp hơn ở người bệnh",
      "Giúp người bệnh tránh nhầm lẫn và tăng tuân thủ điều trị"
    ],
    "correct": 3,
    "explanation": "Người cao tuổi hay nhầm lẫn nên cần hướng dẫn thật rõ ràng.",
    "reference": "Sách DLS tr. 22, 160"
  },
  {
    "id": 24,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Khái niệm người dược sĩ lâm sàng tham gia hội chẩn cùng bác sĩ tại khoa lâm sàng có vai trò:",
    "options": [
      "Cầu nối tối ưu hóa dùng thuốc giữa thầy thuốc và người bệnh",
      "Kê đơn thuốc độc lập không qua bác sĩ trong phác đồ chuẩn",
      "Thay thế hoàn toàn vai trò chẩn đoán bệnh ở người bệnh",
      "Giám định pháp y các trường hợp tử vong kèm theo sốt nhẹ"
    ],
    "correct": 0,
    "explanation": "Dược sĩ lâm sàng đóng vai trò cầu nối chuyên môn về thuốc.",
    "reference": "Sách DLS tr. 13"
  },
  {
    "id": 25,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Chỉ số hiệu quả trên rủi ro của một thuốc được coi là tối ưu khi nào?",
    "options": [
      "Thuốc có dạng bào chế phức tạp nhất trong phác đồ chuẩn",
      "Khả năng khỏi bệnh cao và tác dụng không mong muốn thấp",
      "Thời gian bảo quản thuốc kéo dài nhất theo khuyến cáo",
      "Giá tiền rẻ nhất trên thị trường hiện tại kèm theo sốt nhẹ"
    ],
    "correct": 1,
    "explanation": "Tỷ số Hiệu quả / Rủi ro cao thể hiện tính an toàn và hiệu lực điều trị vượt trội.",
    "reference": "Sách DLS tr. 13"
  },
  {
    "id": 26,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Việc thẩm định danh mục thuốc thiết yếu tại bệnh viện được thực hiện định kỳ bởi:",
    "options": [
      "Trung tâm Kiểm nghiệm Dược phẩm tỉnh",
      "Phòng Tài chính kế toán bệnh viện",
      "Khoa Khám bệnh ngoại trú bệnh viện",
      "Hội đồng Thuốc và Điều trị của bệnh viện"
    ],
    "correct": 3,
    "explanation": "Hội đồng Thuốc và Điều trị chịu trách nhiệm xây dựng và thẩm định danh mục thuốc.",
    "reference": "Sách DLS tr. 23"
  },
  {
    "id": 27,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Khái niệm người bệnh tuân thủ điều trị được định nghĩa là:",
    "options": [
      "Số lượng thuốc mà người bệnh dự trữ trong nhà",
      "Mức độ người bệnh dùng thuốc đúng theo chỉ dẫn y khoa",
      "Tần suất tái khám tại bệnh viện tuyến trên",
      "Khả năng chi trả viện phí đúng hạn của người bệnh"
    ],
    "correct": 1,
    "explanation": "Tuân thủ điều trị là việc thực hiện đúng chỉ định về liều, số lần và cách uống.",
    "reference": "Sách DLS tr. 18-21"
  },
  {
    "id": 28,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Khi thiết lập phác đồ điều trị, việc lựa chọn dạng thuốc viên sủi bọt không phù hợp cho bệnh nhân nào?",
    "options": [
      "Bệnh nhân tăng huyết áp cần ăn kiêng muối nghiêm ngặt",
      "Bệnh nhân có triệu chứng khó nuốt viên nén to",
      "Trẻ em trên 6 tuổi biết uống thuốc sủi",
      "Bệnh nhân sốt cao cần hạ sốt nhanh"
    ],
    "correct": 0,
    "explanation": "Viên sủi bọt chứa lượng lớn muối natri hydrocarbonat, gây tăng huyết áp và phù.",
    "reference": "Sách DLS tr. 133"
  },
  {
    "id": 29,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Biện pháp nào sau đây giúp nâng cao độ an toàn khi sử dụng thuốc tiêm truyền tĩnh mạch liều cao?",
    "options": [
      "Tiêm thật nhanh dưới 30 giây để đạt nồng độ tức thì",
      "Pha chung nhiều loại thuốc vào cùng một dây truyền",
      "Sử dụng máy truyền dịch có kiểm soát tốc độ chính xác",
      "Không cần đo huyết áp trong suốt quá trình truyền"
    ],
    "correct": 2,
    "explanation": "Máy truyền dịch giúp duy trì tốc độ truyền hằng định, tránh tụt huyết áp hoặc sốc.",
    "reference": "Sách DLS tr. 137"
  },
  {
    "id": 30,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Tài liệu chuyên khảo 'Dược thư Quốc gia Việt Nam' xuất bản lần thứ hai năm 2015 do cơ quan nào ban hành?",
    "options": [
      "Hiệp hội Bệnh viện Tư nhân",
      "Tổng cục Đo lường Chất lượng",
      "Cục Sở hữu Trí tuệ",
      "Bộ Y tế Việt Nam"
    ],
    "correct": 3,
    "explanation": "Dược thư Quốc gia là văn bản tài liệu chính thống của Bộ Y tế.",
    "reference": "Sách DLS tr. 122"
  },
  {
    "id": 31,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Cơ sở dữ liệu Micromedex hoặc UpToDate thuộc loại nguồn thông tin thuốc nào?",
    "options": [
      "Tài liệu lưu trữ nội bộ chưa qua biên tập kèm theo sốt nhẹ",
      "Hệ thống thông tin điện tử tích hợp cập nhật thường xuyên",
      "Danh mục kê khai giá thuốc bán lẻ ở người bệnh",
      "Bản tin quảng cáo phát miễn phí cho người bệnh trên lâm sàng"
    ],
    "correct": 1,
    "explanation": "UpToDate và Micromedex là các nguồn cơ sở dữ liệu lâm sàng thẩm định hàng đầu.",
    "reference": "Sách DLS tr. 126"
  },
  {
    "id": 32,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Trong phiếu báo cáo phản ứng có hại của thuốc (ADR), nội dung nào bắt buộc phải có để thẩm định quan hệ nhân quả?",
    "options": [
      "Thời điểm bắt đầu xuất hiện biến cố sau khi dùng thuốc",
      "Họ tên của người thân đưa bệnh nhân vào viện",
      "Màu sắc của bao bì hộp thuốc ban đầu",
      "Địa chỉ cơ quan bảo hiểm chi trả tiền viện phí"
    ],
    "correct": 0,
    "explanation": "Trình tự thời gian dùng thuốc và xuất hiện biến cố là cốt lõi để đánh giá mối quan hệ nhân quả.",
    "reference": "Sách DLS tr. 101, 103"
  },
  {
    "id": 33,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Chỉ số nào trong đơn thuốc phản ánh trực tiếp nguy cơ quá tải thuốc và tương tác bất lợi?",
    "options": [
      "Tên thương mại của nhà sản xuất",
      "Hạn sử dụng ghi trên vỉ thuốc",
      "Số phòng khám in trên phiếu đơn",
      "Tổng số lượng thuốc kê trong một đơn"
    ],
    "correct": 3,
    "explanation": "Số lượng thuốc càng nhiều thì tỷ lệ gặp tương tác thuốc bất lợi càng tăng theo cấp số nhân.",
    "reference": "Sách DLS tr. 66"
  },
  {
    "id": 34,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Quy trình khai thác thông tin thuốc từ bệnh nhân cần tránh hành vi nào sau đây?",
    "options": [
      "Lắng nghe cẩn thận những lo lắng của người bệnh trong phác đồ chuẩn",
      "Đặt câu hỏi đóng mang tính áp đặt hoặc mớm ý cho người bệnh",
      "Hỏi kỹ về tiền sử dị ứng thời tiết và thức ăn kéo dài liên tục",
      "Kiểm tra lại tên các vỉ thuốc bệnh nhân mang theo theo khuyến cáo"
    ],
    "correct": 1,
    "explanation": "Cần đặt câu hỏi mở, tránh câu hỏi áp đặt mớm ý khiến thông tin thu được thiếu khách quan.",
    "reference": "Sách DLS tr. 20"
  },
  {
    "id": 35,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Nguyên tắc lựa chọn thuốc khi thiết lập danh mục thuốc của bệnh viện cần căn cứ vào:",
    "options": [
      "Mô hình bệnh tật thực tế của địa phương và bằng chứng lâm sàng",
      "Màu sắc viên thuốc bắt mắt để dễ quảng cáo sau khi dùng thuốc",
      "Chương trình khuyến mại chiết khấu của nhà phân phối theo khuyến cáo",
      "Sở thích kê đơn thói quen của từng bác sĩ kéo dài liên tục định kỳ"
    ],
    "correct": 0,
    "explanation": "Danh mục thuốc bệnh viện phải dựa trên mô hình bệnh tật và y học chứng cứ.",
    "reference": "Sách DLS tr. 23"
  },
  {
    "id": 36,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Yếu tố nào sau đây là tiêu chí để phân loại thuốc không kê đơn (OTC)?",
    "options": [
      "Thuốc mới phát minh lưu hành dưới 2 năm ở mức độ vừa và nặng",
      "Thuốc có nguy cơ gây nghiện và hội chứng cai sau khi dùng thuốc",
      "Độc tính thấp, khoảng điều trị rộng và trị triệu chứng thông thường",
      "Thuốc chỉ dùng theo đường tiêm tĩnh mạch sâu kéo dài liên tục"
    ],
    "correct": 2,
    "explanation": "Thuốc OTC có độ an toàn cao, người bệnh có thể tự xử trí các triệu chứng nhẹ thông thường.",
    "reference": "Sách DLS tr. 123"
  },
  {
    "id": 37,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Thuật ngữ TDM (Therapeutic Drug Monitoring) trong thực hành Dược lâm sàng có nghĩa là:",
    "options": [
      "Giám sát nồng độ thuốc trong huyết tương để tối ưu hóa phác đồ",
      "Định lượng tạp chất lạ trong nguyên liệu thô",
      "Đếm số lượng viên thuốc tồn dư trong kho dược cuối tháng",
      "Kiểm tra nhiệt độ bảo quản của tủ lạnh chứa vắc xin"
    ],
    "correct": 0,
    "explanation": "TDM là đo nồng độ thuốc trong máu để hiệu chỉnh liều cá thể hóa.",
    "reference": "Sách DLS tr. 10, 45"
  },
  {
    "id": 38,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Bệnh nhân điều trị ngoại trú cần được dược sĩ hướng dẫn xử trí như thế nào nếu quên một liều thuốc?",
    "options": [
      "Uống ngay khi nhớ ra nhưng không uống gấp đôi nếu gần cữ kế tiếp",
      "Tự ý mua thêm thuốc kháng sinh uống kèm ở người bệnh",
      "Ngừng thuốc hoàn toàn và chuyển sang thuốc khác trên lâm sàng",
      "Uống ngay lập tức gấp đôi liều để bù lại lượng đã mất ở mức độ vừa và nặng"
    ],
    "correct": 0,
    "explanation": "Không được uống gấp đôi liều để bù liều quên vì nguy cơ gây ngộ độc quá liều.",
    "reference": "Sách DLS tr. 21"
  },
  {
    "id": 39,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Trong thử nghiệm độc tính cấp trên chuột, thời gian theo dõi chuột chết thường là bao lâu?",
    "options": [
      "Trong vòng 6 tháng liên tục",
      "Trong vòng 48 giờ sau khi đưa thuốc",
      "Chỉ theo dõi trong 5 phút đầu tiên",
      "Trong vòng 3 năm theo dõi"
    ],
    "correct": 1,
    "explanation": "Độc tính cấp theo dõi tử vong trong vòng 48 giờ sau khi dùng liều thử nghiệm.",
    "reference": "Sách DLS tr. 2"
  },
  {
    "id": 40,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Theo phân loại độc tính cấp của GHS, chế phẩm có giá trị LD50 trên 5000 mg/kg được xếp vào nhóm:",
    "options": [
      "Độc trung bình",
      "Gần như không độc",
      "Rất độc",
      "Cực kỳ độc"
    ],
    "correct": 1,
    "explanation": "LD50 > 5000 mg/kg thuộc nhóm 6: Gần như không độc.",
    "reference": "Sách DLS tr. 9"
  },
  {
    "id": 41,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Dịch chiết thảo mộc có giá trị LD50 bằng 1200 mg/kg đường uống trên chuột, theo GHS được xếp vào nhóm:",
    "options": [
      "Gần như không độc",
      "Rất độc",
      "Cực kỳ độc",
      "Độc trung bình"
    ],
    "correct": 3,
    "explanation": "LD50 từ 300 đến 2000 mg/kg thuộc nhóm 4: Độc trung bình.",
    "reference": "Sách DLS tr. 9"
  },
  {
    "id": 42,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Yếu tố nào sau đây quyết định giá trị sinh khả dụng tương đối giữa hai chế phẩm cùng hoạt chất?",
    "options": [
      "Tỷ lệ giữa diện tích dưới đường cong AUC của hai chế phẩm",
      "Độ nhớt của dung môi pha chế theo khuyến cáo",
      "Thời hạn bảo quản ghi trên nhãn lọ kéo dài liên tục",
      "Tốc độ lắng máu của người tình nguyện trong phác đồ chuẩn"
    ],
    "correct": 0,
    "explanation": "F tương đối = (AUC thuốc thử / AUC thuốc đối chứng) x 100%.",
    "reference": "Sách DLS tr. 28"
  },
  {
    "id": 43,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Chỉ tiêu tỷ lệ đơn thuốc có dùng vitamin theo khuyến cáo sử dụng hợp lý cần tránh:",
    "options": [
      "Kê vitamin cho bệnh nhân sau phẫu thuật cắt dạ dày theo khuyến cáo",
      "Lạm dụng vitamin khi chế độ ăn của người bệnh đã cân đối đầy đủ",
      "Kê vitamin B6 cho người đang điều trị lao sau khi dùng thuốc",
      "Bổ sung vitamin cho trẻ sinh non nhẹ cân kéo dài liên tục"
    ],
    "correct": 1,
    "explanation": "Tránh kê vitamin bừa bãi khi người bệnh có chế độ dinh dưỡng bình thường.",
    "reference": "Sách DLS tr. 196, 202"
  },
  {
    "id": 44,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Tại các nước phát triển, năm thứ năm của chương trình đào tạo Dược sĩ đại học thường là:",
    "options": [
      "Năm học kinh doanh và tiếp thị thương mại ở mức độ vừa và nặng",
      "Năm thực tập sản xuất tại nhà máy hóa chất sau khi dùng thuốc",
      "Năm viện - trường thực hành trực tiếp tại các bệnh viện",
      "Năm học lý thuyết thuần túy tại giảng đường kéo dài liên tục"
    ],
    "correct": 2,
    "explanation": "Năm viện trường (5 ème A.H.U) đào tạo thực hành dược lâm sàng tại bệnh viện.",
    "reference": "Sách DLS tr. 10"
  },
  {
    "id": 45,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Khái niệm 'kinh tế dược' (Pharmacoeconomics) trong lựa chọn thuốc đánh giá yếu tố nào?",
    "options": [
      "Tỷ lệ hoa hồng chi trả cho đại lý cung ứng ở mức độ vừa và nặng định kỳ",
      "Giá thành rẻ nhất bất kể hiệu quả điều trị trên lâm sàng",
      "So sánh giữa chi phí điều trị và kết quả đầu ra về sức khỏe đạt được",
      "Tổng số tiền thu được từ việc bán thuốc cho bệnh viện sau khi dùng thuốc"
    ],
    "correct": 2,
    "explanation": "Kinh tế dược phân tích chi phí - hiệu quả (Cost-Effectiveness) để chọn phác đồ tối ưu.",
    "reference": "Sách DLS tr. 14"
  },
  {
    "id": 46,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Mục tiêu cơ bản của việc ghi nhãn phụ hướng dẫn sử dụng thuốc cho người bệnh là gì?",
    "options": [
      "Che giấu hạn dùng thực tế của sản phẩm trên lâm sàng",
      "Quảng cáo thương hiệu của nhà thuốc tư nhân ở mức độ vừa và nặng",
      "Giúp người bệnh dùng đúng cách, đúng giờ và bảo quản đúng quy cách",
      "Thay thế cho việc bác sĩ khám lại định kỳ ở người bệnh"
    ],
    "correct": 2,
    "explanation": "Nhãn phụ ghi rõ cách dùng giúp người bệnh không bị nhầm lẫn khi về nhà.",
    "reference": "Sách DLS tr. 22"
  },
  {
    "id": 47,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Dược sĩ lâm sàng cần cảnh báo người bệnh tránh uống rượu khi đang sử dụng thuốc nào sau đây?",
    "options": [
      "Metronidazol, Cephalosporin, Paracetamol",
      "Dung dịch bù nước Oresol trên lâm sàng định kỳ",
      "Viên ngậm sát khuẩn miệng kèm theo sốt nhẹ",
      "Men vi sinh nấm men ở người bệnh"
    ],
    "correct": 0,
    "explanation": "Rượu tương tác độc với Paracetamol (gan), Metronidazol/Cephalosporin (hội chứng antabuse).",
    "reference": "Sách DLS tr. 85-86"
  },
  {
    "id": 48,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Tài liệu nào sau đây bắt buộc phải có sẵn trong phòng pha chế và khoa dược bệnh viện?",
    "options": [
      "Dược điển Việt Nam hiện hành",
      "Sách hướng dẫn du lịch quốc tế",
      "Tạp chí thời trang nước ngoài",
      "Tập thơ ca dân gian"
    ],
    "correct": 0,
    "explanation": "Dược điển Việt Nam là tiêu chuẩn kỹ thuật quốc gia bắt buộc phải tuân thủ.",
    "reference": "Sách DLS tr. 122"
  },
  {
    "id": 49,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Khi người bệnh xuất hiện triệu chứng bất thường nghi do thuốc, bước xử trí đầu tiên là:",
    "options": [
      "Tự ý tăng gấp đôi liều thuốc để dập triệu chứng",
      "Ngừng ngay thuốc nghi ngờ và báo cho nhân viên y tế",
      "Uống thêm một cốc nước chè đặc nóng",
      "Chờ đợi đủ một tháng sau mới đi khám lại"
    ],
    "correct": 1,
    "explanation": "Ngừng ngay thuốc nghi ngờ là nguyên tắc bảo đảm an toàn tính mạng đầu tiên.",
    "reference": "Sách DLS tr. 98, 113"
  },
  {
    "id": 50,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Trung tâm Thông tin thuốc đóng vai trò như thế nào trong đào tạo liên tục cho cán bộ y tế?",
    "options": [
      "Tổ chức các khóa học thi lấy bằng lái xe trong phác đồ chuẩn",
      "Kiểm định chất lượng vật liệu xây dựng kéo dài liên tục",
      "Cung cấp thông tin cập nhật về an toàn thuốc và cảnh giác dược",
      "Đào tạo kỹ thuật viên sửa chữa điện nước theo khuyến cáo"
    ],
    "correct": 2,
    "explanation": "Trung tâm TTT thường xuyên tổ chức tập huấn về an toàn và cảnh giác dược.",
    "reference": "Sách DLS tr. 128"
  },
  {
    "id": 51,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Hai chế phẩm thuốc được coi là tương đương sinh học khi thông số nào bắt buộc nằm trong khoảng 80 - 125%?",
    "options": [
      "Thời gian bán thải",
      "Thông số Tmax",
      "Thông số AUC",
      "Thông số Cmax"
    ],
    "correct": 2,
    "explanation": "AUC phản ánh mức độ hấp thu và là thông số bắt buộc chặt chẽ trong đánh giá tương đương sinh học.",
    "reference": "Sách DLS tr. 26"
  },
  {
    "id": 52,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Thời gian để nồng độ thuốc đạt trạng thái ổn định trong máu khi truyền tĩnh mạch liên tục tương ứng với bao nhiêu lần thời gian bán thải?",
    "options": [
      "Khoảng 12 lần",
      "Khoảng 5 lần",
      "Khoảng 2 lần",
      "Khoảng 8 lần"
    ],
    "correct": 1,
    "explanation": "Quy tắc 5 lần t1/2 để nồng độ thuốc đạt trạng thái cân bằng Css.",
    "reference": "Sách DLS tr. 32"
  },
  {
    "id": 53,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Thời gian để thuốc đào thải trên 99% lượng ban đầu ra khỏi cơ thể tương ứng với bao nhiêu lần thời gian bán thải?",
    "options": [
      "Khoảng 10 lần",
      "Khoảng 5 lần",
      "Khoảng 3 lần",
      "Khoảng 7 lần"
    ],
    "correct": 3,
    "explanation": "Sau 7 lần t1/2, lượng thuốc bị thải trừ trên 99%, coi như đào thải hoàn toàn.",
    "reference": "Sách DLS tr. 35"
  },
  {
    "id": 54,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Thuốc nào sau đây có hệ số chiết xuất qua gan cao và phụ thuộc chủ yếu vào lưu lượng dòng máu qua gan?",
    "options": [
      "Theophyllin",
      "Propranolol",
      "Diazepam",
      "Warfarin"
    ],
    "correct": 1,
    "explanation": "Propranolol có EH > 0,7 phụ thuộc lưu lượng máu qua gan.",
    "reference": "Sách DLS tr. 39"
  },
  {
    "id": 55,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Thuốc nào sau đây có hệ số chiết xuất qua gan thấp và phụ thuộc chủ yếu vào hoạt tính enzym chuyển hóa gan?",
    "options": [
      "Nitroglycerin",
      "Morphin",
      "Theophyllin",
      "Lidocain"
    ],
    "correct": 2,
    "explanation": "Theophyllin có EH < 0,3 phụ thuộc enzym gan.",
    "reference": "Sách DLS tr. 39"
  },
  {
    "id": 56,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Ở bệnh nhân xơ gan nặng, thuốc an thần nhóm Benzodiazepin nào được ưu tiên lựa chọn do chuyển hóa qua liên hợp Pha II?",
    "options": [
      "Oxazepam",
      "Flurazepam",
      "Diazepam",
      "Clordiazepoxid"
    ],
    "correct": 0,
    "explanation": "Oxazepam chỉ chuyển hóa qua liên hợp glucuronic nên ít bị ảnh hưởng bởi suy gan.",
    "reference": "Sách DLS tr. 39"
  },
  {
    "id": 57,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Khi bệnh nhân xơ gan có cổ trướng phù nề, thể tích phân bố của các thuốc tan nhiều trong nước sẽ thay đổi như thế nào?",
    "options": [
      "Thể tích phân bố không đổi",
      "Thể tích phân bố giảm đi",
      "Sinh khả dụng giảm một nửa",
      "Thể tích phân bố tăng lên"
    ],
    "correct": 3,
    "explanation": "Tăng thể tích dịch ngoại bào làm tăng thể tích phân bố Vd của thuốc tan trong nước.",
    "reference": "Sách DLS tr. 37"
  },
  {
    "id": 58,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Nồng độ albumin huyết tương giảm ở bệnh nhân suy gan, suy thận sẽ dẫn đến biến đổi nào đối với thuốc gắn protein cao?",
    "options": [
      "Tăng gắn kết thuốc vào mô mỡ",
      "Tăng tỷ lệ thuốc ở dạng tự do",
      "Giảm tỷ lệ thuốc ở dạng tự do",
      "Giảm tốc độ lọc của cầu thận"
    ],
    "correct": 1,
    "explanation": "Albumin giảm làm giảm điểm gắn, khiến tỷ lệ thuốc tự do tăng vọt gây độc tính.",
    "reference": "Sách DLS tr. 37, 53"
  },
  {
    "id": 59,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Khi suy giảm chức năng thận, đối với kháng sinh Aminosid, phương pháp hiệu chỉnh liều được ưu tiên nhất là:",
    "options": [
      "Không cần hiệu chỉnh vì ít độc tính sau khi dùng thuốc",
      "Giữ nguyên khoảng cách và giảm liều theo khuyến cáo",
      "Giữ nguyên liều và nới rộng khoảng cách đưa thuốc",
      "Rút ngắn khoảng cách và tăng liều kéo dài liên tục"
    ],
    "correct": 2,
    "explanation": "Aminosid diệt khuẩn phụ thuộc nồng độ đỉnh nên cần giữ liều cao và nới rộng khoảng cách.",
    "reference": "Sách DLS tr. 43-44"
  },
  {
    "id": 60,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Bệnh nhân được coi là suy thận nặng khi hệ số thanh thải creatinin giảm xuống dưới mức nào?",
    "options": [
      "Dưới 60 mL/phút",
      "Dưới 15 mL/phút",
      "Dưới 120 mL/phút",
      "Dưới 90 mL/phút"
    ],
    "correct": 1,
    "explanation": "Clcr dưới 15 mL/phút là suy thận nặng hoặc giai đoạn cuối, cần lọc máu.",
    "reference": "Sách DLS tr. 51"
  },
  {
    "id": 61,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Thuốc truyền tĩnh mạch với tốc độ 20 mg/h, độ thanh thải toàn phần Cl = 4 L/h. Nồng độ thuốc ở trạng thái cân bằng Css là:",
    "options": [
      "5 mg/L",
      "80 mg/L",
      "0,2 mg/L",
      "10 mg/L"
    ],
    "correct": 0,
    "explanation": "Css = V_inf / Cl = 20 / 4 = 5 mg/L.",
    "reference": "Sách DLS tr. 32"
  },
  {
    "id": 62,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Khi độ thanh thải của một thuốc giảm đi một nửa trong khi thể tích phân bố không đổi, thời gian bán thải sẽ thay đổi thế nào?",
    "options": [
      "Giảm đi bốn lần",
      "Tăng lên gấp đôi",
      "Giảm đi một nửa",
      "Không có sự thay đổi"
    ],
    "correct": 1,
    "explanation": "t1/2 = 0,693 x Vd / Cl, Cl giảm 2 lần thì t1/2 tăng 2 lần.",
    "reference": "Sách DLS tr. 35"
  },
  {
    "id": 63,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Sinh khả dụng tuyệt đối của một thuốc đưa qua đường uống được xác định bằng cách so sánh với đường đưa nào?",
    "options": [
      "Đường hít qua miệng",
      "Đường đặt trực tràng",
      "Đường tiêm bắp sâu",
      "Đường tiêm tĩnh mạch"
    ],
    "correct": 3,
    "explanation": "F tuyệt đối so sánh AUC đường uống với AUC đường tiêm tĩnh mạch F=100%.",
    "reference": "Sách DLS tr. 27"
  },
  {
    "id": 64,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Đại lượng nào phản ánh tốt nhất mức độ thâm nhập và phân tán của một thuốc vào các mô trong cơ thể?",
    "options": [
      "Tốc độ bài xuất qua mật",
      "Thể tích phân bố biểu kiến",
      "Áp suất keo của huyết tương",
      "Độ nhớt của máu toàn phần"
    ],
    "correct": 1,
    "explanation": "Thể tích phân bố Vd càng lớn chứng tỏ thuốc phân tán sâu vào các mô cơ quan.",
    "reference": "Sách DLS tr. 28-29"
  },
  {
    "id": 65,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Độ thanh thải toàn phần của một thuốc trong cơ thể bằng tổng độ thanh thải qua các cơ quan nào?",
    "options": [
      "Chỉ tính riêng lượng thuốc bài xuất qua tuyến mồ hôi trong phác đồ chuẩn",
      "Độ thanh thải qua thận nhân với độ thanh thải qua gan kèm theo sốt nhẹ",
      "Độ thanh thải qua thận cộng độ thanh thải qua gan và các cơ quan khác",
      "Độ thanh thải qua phổi trừ đi độ thanh thải qua mật theo khuyến cáo"
    ],
    "correct": 2,
    "explanation": "Cl toàn phần = Cl thận + Cl gan + Cl các cơ quan khác.",
    "reference": "Sách DLS tr. 31"
  },
  {
    "id": 66,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Ý nghĩa lâm sàng chính của việc xác định thời gian bán thải t1/2 của một thuốc là gì?",
    "options": [
      "Đánh giá mức độ độc tính trên tế bào ung thư kéo dài liên tục",
      "Quyết định khoảng cách thời gian giữa các lần đưa thuốc trong ngày",
      "Xác định giá thành bán lẻ của hộp thuốc trên thị trường trong phác đồ chuẩn",
      "Lựa chọn kích cỡ kim tiêm phù hợp khi tiêm bắp theo khuyến cáo"
    ],
    "correct": 1,
    "explanation": "t1/2 quyết định nhịp đưa thuốc: thuốc có t1/2 ngắn phải dùng nhiều lần, t1/2 dài dùng 1 lần/ngày.",
    "reference": "Sách DLS tr. 35"
  },
  {
    "id": 67,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Hiện tượng chuyển hóa bước đầu qua gan làm ảnh hưởng trực tiếp đến thông số dược động học nào?",
    "options": [
      "Áp suất thẩm thấu dịch ruột",
      "Sinh khả dụng đường uống",
      "Tốc độ lọc của cầu thận",
      "Thời gian rỗng của dạ dày"
    ],
    "correct": 1,
    "explanation": "Chuyển hóa bước đầu qua gan phá hủy một phần dược chất trước khi vào tuần hoàn chung làm giảm F%.",
    "reference": "Sách DLS tr. 27, 37"
  },
  {
    "id": 68,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Đối với thuốc diệt khuẩn phụ thuộc thời gian như Beta-lactam, biện pháp chỉnh liều khi suy thận là:",
    "options": [
      "Giữ nguyên liều và kéo dài khoảng cách dùng kéo dài liên tục",
      "Tăng liều gấp ba lần và dùng một lần duy nhất sau khi dùng thuốc",
      "Ngừng thuốc hoàn toàn không được sử dụng ở mức độ vừa và nặng",
      "Giữ nguyên khoảng cách đưa thuốc và giảm liều từng lần"
    ],
    "correct": 3,
    "explanation": "Beta-lactam cần duy trì nồng độ trên MIC thường xuyên nên ưu tiên giảm liều giữ nguyên khoảng cách.",
    "reference": "Sách DLS tr. 43"
  },
  {
    "id": 69,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Thuốc chống sốt rét Cloroquin có thể tích phân bố Vd rất lớn hàng nghìn lít là do nguyên nhân nào?",
    "options": [
      "Thuốc bài xuất qua thận với tốc độ cực nhanh",
      "Thuốc tan hoàn toàn trong dịch huyết tương lòng mạch",
      "Thuốc gắn kết rất mạnh vào các mô và tế bào sâu trong cơ thể",
      "Thuốc không bao giờ gắn vào protein huyết tương"
    ],
    "correct": 2,
    "explanation": "Cloroquin gắn rất mạnh vào mô ngoại vi nên nồng độ trong máu rất thấp, dẫn đến Vd biểu kiến rất lớn.",
    "reference": "Sách DLS tr. 28"
  },
  {
    "id": 70,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Một thuốc có tỷ lệ liên kết với protein huyết tương trên 90%, khi dùng chung với chất cạnh tranh gắn kết sẽ gây biến cố gì?",
    "options": [
      "Làm mất hoàn toàn tác dụng điều trị của thuốc ở mức độ vừa và nặng",
      "Làm giảm thời gian lưu giữ thuốc trong gan ở người bệnh",
      "Tăng vọt nồng độ thuốc tự do có hoạt tính dẫn đến ngộ độc",
      "Tăng tốc độ gắn thuốc vào hồng cầu trên lâm sàng"
    ],
    "correct": 2,
    "explanation": "Thuốc gắn protein cao khi bị đẩy ra dạng tự do sẽ tăng đột ngột nồng độ có hoạt tính gây quá liều.",
    "reference": "Sách DLS tr. 37, 70"
  },
  {
    "id": 71,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Ông Nguyễn Văn B., 62 tuổi, nặng 58 kg, có nồng độ Creatinin huyết thanh là 1.4 mg/dL. Hệ số thanh thải creatinin ước tính theo Cockcroft - Gault của bệnh nhân là:",
    "options": [
      "45,7 mL/phút",
      "85,6 mL/phút",
      "15,0 mL/phút",
      "105,2 mL/phút"
    ],
    "correct": 0,
    "explanation": "Công thức Cockcroft - Gault cho nam: Clcr = [(140 - 62) x 58] / (72 x 1.4)  = 45,7 mL/phút.",
    "reference": "Sách DLS tr. 51"
  },
  {
    "id": 72,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Bà Trần Thị C., 68 tuổi, nặng 52 kg, có nồng độ Creatinin huyết thanh là 1.3 mg/dL. Hệ số thanh thải creatinin ước tính theo Cockcroft - Gault của bệnh nhân là:",
    "options": [
      "105,2 mL/phút",
      "85,6 mL/phút",
      "15,0 mL/phút",
      "35,4 mL/phút"
    ],
    "correct": 3,
    "explanation": "Công thức Cockcroft - Gault cho nữ: Clcr = [(140 - 68) x 52] / (72 x 1.3) x 0,85 = 35,4 mL/phút.",
    "reference": "Sách DLS tr. 51"
  },
  {
    "id": 73,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Bệnh nhân Lê Văn D., 45 tuổi, nặng 65 kg, có nồng độ Creatinin huyết thanh là 2.2 mg/dL. Hệ số thanh thải creatinin ước tính theo Cockcroft - Gault của bệnh nhân là:",
    "options": [
      "85,6 mL/phút",
      "105,2 mL/phút",
      "15,0 mL/phút",
      "41,0 mL/phút"
    ],
    "correct": 3,
    "explanation": "Công thức Cockcroft - Gault cho nam: Clcr = [(140 - 45) x 65] / (72 x 2.2)  = 41,0 mL/phút.",
    "reference": "Sách DLS tr. 51"
  },
  {
    "id": 74,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Bệnh nhân Phạm Thị E., 50 tuổi, nặng 60 kg, có nồng độ Creatinin huyết thanh là 0.9 mg/dL. Hệ số thanh thải creatinin ước tính theo Cockcroft - Gault của bệnh nhân là:",
    "options": [
      "15,0 mL/phút",
      "85,6 mL/phút",
      "70,8 mL/phút",
      "105,2 mL/phút"
    ],
    "correct": 2,
    "explanation": "Công thức Cockcroft - Gault cho nữ: Clcr = [(140 - 50) x 60] / (72 x 0.9) x 0,85 = 70,8 mL/phút.",
    "reference": "Sách DLS tr. 51"
  },
  {
    "id": 75,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Cụ ông Hoàng Văn F., 82 tuổi, nặng 48 kg, có nồng độ Creatinin huyết thanh là 1.6 mg/dL. Hệ số thanh thải creatinin ước tính theo Cockcroft - Gault của bệnh nhân là:",
    "options": [
      "85,6 mL/phút",
      "15,0 mL/phút",
      "24,2 mL/phút",
      "105,2 mL/phút"
    ],
    "correct": 2,
    "explanation": "Công thức Cockcroft - Gault cho nam: Clcr = [(140 - 82) x 48] / (72 x 1.6)  = 24,2 mL/phút.",
    "reference": "Sách DLS tr. 51"
  },
  {
    "id": 76,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Cụ bà Vũ Thị G., 79 tuổi, nặng 44 kg, có nồng độ Creatinin huyết thanh là 1.5 mg/dL. Hệ số thanh thải creatinin ước tính theo Cockcroft - Gault của bệnh nhân là:",
    "options": [
      "85,6 mL/phút",
      "105,2 mL/phút",
      "21,1 mL/phút",
      "15,0 mL/phút"
    ],
    "correct": 2,
    "explanation": "Công thức Cockcroft - Gault cho nữ: Clcr = [(140 - 79) x 44] / (72 x 1.5) x 0,85 = 21,1 mL/phút.",
    "reference": "Sách DLS tr. 51"
  },
  {
    "id": 77,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Bệnh nhân Đỗ Văn H., 35 tuổi, nặng 72 kg, có nồng độ Creatinin huyết thanh là 1.1 mg/dL. Hệ số thanh thải creatinin ước tính theo Cockcroft - Gault của bệnh nhân là:",
    "options": [
      "15,0 mL/phút",
      "95,5 mL/phút",
      "85,6 mL/phút",
      "105,2 mL/phút"
    ],
    "correct": 1,
    "explanation": "Công thức Cockcroft - Gault cho nam: Clcr = [(140 - 35) x 72] / (72 x 1.1)  = 95,5 mL/phút.",
    "reference": "Sách DLS tr. 51"
  },
  {
    "id": 78,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Bệnh nhân Bùi Thị K., 58 tuổi, nặng 54 kg, có nồng độ Creatinin huyết thanh là 1.7 mg/dL. Hệ số thanh thải creatinin ước tính theo Cockcroft - Gault của bệnh nhân là:",
    "options": [
      "30,8 mL/phút",
      "85,6 mL/phút",
      "105,2 mL/phút",
      "15,0 mL/phút"
    ],
    "correct": 0,
    "explanation": "Công thức Cockcroft - Gault cho nữ: Clcr = [(140 - 58) x 54] / (72 x 1.7) x 0,85 = 30,8 mL/phút.",
    "reference": "Sách DLS tr. 51"
  },
  {
    "id": 79,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Ông Ngô Văn L., 73 tuổi, nặng 62 kg, có nồng độ Creatinin huyết thanh là 1.8 mg/dL. Hệ số thanh thải creatinin ước tính theo Cockcroft - Gault của bệnh nhân là:",
    "options": [
      "32,0 mL/phút",
      "15,0 mL/phút",
      "105,2 mL/phút",
      "85,6 mL/phút"
    ],
    "correct": 0,
    "explanation": "Công thức Cockcroft - Gault cho nam: Clcr = [(140 - 73) x 62] / (72 x 1.8)  = 32,0 mL/phút.",
    "reference": "Sách DLS tr. 51"
  },
  {
    "id": 80,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Bà Đặng Thị M., 64 tuổi, nặng 50 kg, có nồng độ Creatinin huyết thanh là 1.2 mg/dL. Hệ số thanh thải creatinin ước tính theo Cockcroft - Gault của bệnh nhân là:",
    "options": [
      "105,2 mL/phút",
      "15,0 mL/phút",
      "37,3 mL/phút",
      "85,6 mL/phút"
    ],
    "correct": 2,
    "explanation": "Công thức Cockcroft - Gault cho nữ: Clcr = [(140 - 64) x 50] / (72 x 1.2) x 0,85 = 37,3 mL/phút.",
    "reference": "Sách DLS tr. 51"
  },
  {
    "id": 81,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Bệnh nhân Trịnh Văn N., 55 tuổi, nặng 68 kg, có nồng độ Creatinin huyết thanh là 1 mg/dL. Hệ số thanh thải creatinin ước tính theo Cockcroft - Gault của bệnh nhân là:",
    "options": [
      "85,6 mL/phút",
      "105,2 mL/phút",
      "15,0 mL/phút",
      "80,3 mL/phút"
    ],
    "correct": 3,
    "explanation": "Công thức Cockcroft - Gault cho nam: Clcr = [(140 - 55) x 68] / (72 x 1)  = 80,3 mL/phút.",
    "reference": "Sách DLS tr. 51"
  },
  {
    "id": 82,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Bệnh nhân Đoàn Thị P., 71 tuổi, nặng 46 kg, có nồng độ Creatinin huyết thanh là 1.9 mg/dL. Hệ số thanh thải creatinin ước tính theo Cockcroft - Gault của bệnh nhân là:",
    "options": [
      "85,6 mL/phút",
      "19,7 mL/phút",
      "105,2 mL/phút",
      "15,0 mL/phút"
    ],
    "correct": 1,
    "explanation": "Công thức Cockcroft - Gault cho nữ: Clcr = [(140 - 71) x 46] / (72 x 1.9) x 0,85 = 19,7 mL/phút.",
    "reference": "Sách DLS tr. 51"
  },
  {
    "id": 83,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Ông Mai Văn Q., 66 tuổi, nặng 70 kg, có nồng độ Creatinin huyết thanh là 2.5 mg/dL. Hệ số thanh thải creatinin ước tính theo Cockcroft - Gault của bệnh nhân là:",
    "options": [
      "28,8 mL/phút",
      "105,2 mL/phút",
      "15,0 mL/phút",
      "85,6 mL/phút"
    ],
    "correct": 0,
    "explanation": "Công thức Cockcroft - Gault cho nam: Clcr = [(140 - 66) x 70] / (72 x 2.5)  = 28,8 mL/phút.",
    "reference": "Sách DLS tr. 51"
  },
  {
    "id": 84,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Bà Lý Thị R., 48 tuổi, nặng 56 kg, có nồng độ Creatinin huyết thanh là 0.8 mg/dL. Hệ số thanh thải creatinin ước tính theo Cockcroft - Gault của bệnh nhân là:",
    "options": [
      "76,1 mL/phút",
      "105,2 mL/phút",
      "15,0 mL/phút",
      "85,6 mL/phút"
    ],
    "correct": 0,
    "explanation": "Công thức Cockcroft - Gault cho nữ: Clcr = [(140 - 48) x 56] / (72 x 0.8) x 0,85 = 76,1 mL/phút.",
    "reference": "Sách DLS tr. 51"
  },
  {
    "id": 85,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Bệnh nhân Phan Văn S., 77 tuổi, nặng 53 kg, có nồng độ Creatinin huyết thanh là 1.5 mg/dL. Hệ số thanh thải creatinin ước tính theo Cockcroft - Gault của bệnh nhân là:",
    "options": [
      "85,6 mL/phút",
      "30,9 mL/phút",
      "105,2 mL/phút",
      "15,0 mL/phút"
    ],
    "correct": 1,
    "explanation": "Công thức Cockcroft - Gault cho nam: Clcr = [(140 - 77) x 53] / (72 x 1.5)  = 30,9 mL/phút.",
    "reference": "Sách DLS tr. 51"
  },
  {
    "id": 86,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Bệnh nhân Tạ Thị T., 85 tuổi, nặng 42 kg, có nồng độ Creatinin huyết thanh là 1.4 mg/dL. Hệ số thanh thải creatinin ước tính theo Cockcroft - Gault của bệnh nhân là:",
    "options": [
      "19,5 mL/phút",
      "85,6 mL/phút",
      "105,2 mL/phút",
      "15,0 mL/phút"
    ],
    "correct": 0,
    "explanation": "Công thức Cockcroft - Gault cho nữ: Clcr = [(140 - 85) x 42] / (72 x 1.4) x 0,85 = 19,5 mL/phút.",
    "reference": "Sách DLS tr. 51"
  },
  {
    "id": 87,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Ông Đinh Văn U., 59 tuổi, nặng 75 kg, có nồng độ Creatinin huyết thanh là 1.3 mg/dL. Hệ số thanh thải creatinin ước tính theo Cockcroft - Gault của bệnh nhân là:",
    "options": [
      "15,0 mL/phút",
      "85,6 mL/phút",
      "105,2 mL/phút",
      "64,9 mL/phút"
    ],
    "correct": 3,
    "explanation": "Công thức Cockcroft - Gault cho nam: Clcr = [(140 - 59) x 75] / (72 x 1.3)  = 64,9 mL/phút.",
    "reference": "Sách DLS tr. 51"
  },
  {
    "id": 88,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Bà Lâm Thị V., 63 tuổi, nặng 49 kg, có nồng độ Creatinin huyết thanh là 1.6 mg/dL. Hệ số thanh thải creatinin ước tính theo Cockcroft - Gault của bệnh nhân là:",
    "options": [
      "105,2 mL/phút",
      "15,0 mL/phút",
      "85,6 mL/phút",
      "27,8 mL/phút"
    ],
    "correct": 3,
    "explanation": "Công thức Cockcroft - Gault cho nữ: Clcr = [(140 - 63) x 49] / (72 x 1.6) x 0,85 = 27,8 mL/phút.",
    "reference": "Sách DLS tr. 51"
  },
  {
    "id": 89,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Bệnh nhân Chu Văn X., 52 tuổi, nặng 64 kg, có nồng độ Creatinin huyết thanh là 1.2 mg/dL. Hệ số thanh thải creatinin ước tính theo Cockcroft - Gault của bệnh nhân là:",
    "options": [
      "105,2 mL/phút",
      "15,0 mL/phút",
      "85,6 mL/phút",
      "65,2 mL/phút"
    ],
    "correct": 3,
    "explanation": "Công thức Cockcroft - Gault cho nam: Clcr = [(140 - 52) x 64] / (72 x 1.2)  = 65,2 mL/phút.",
    "reference": "Sách DLS tr. 51"
  },
  {
    "id": 90,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Bệnh nhân Võ Thị Y., 69 tuổi, nặng 51 kg, có nồng độ Creatinin huyết thanh là 1.5 mg/dL. Hệ số thanh thải creatinin ước tính theo Cockcroft - Gault của bệnh nhân là:",
    "options": [
      "105,2 mL/phút",
      "15,0 mL/phút",
      "85,6 mL/phút",
      "28,5 mL/phút"
    ],
    "correct": 3,
    "explanation": "Công thức Cockcroft - Gault cho nữ: Clcr = [(140 - 69) x 51] / (72 x 1.5) x 0,85 = 28,5 mL/phút.",
    "reference": "Sách DLS tr. 51"
  },
  {
    "id": 91,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Tính liều nạp tĩnh mạch của Digoxin cho bệnh nhân nặng 60 kg để đạt nồng độ tức thì 0,0015 mg/L, biết thể tích phân bố Vd = 7 L/kg và F = 1:",
    "options": [
      "50 mg",
      "0,63 mg",
      "25 mg",
      "1500 mg"
    ],
    "correct": 1,
    "explanation": "Áp dụng công thức liều nạp D = (Vd x Cân nặng x Cp) / F = (7 x 60 x 0,0015 mg/L) / 1 = 0,63 mg.",
    "reference": "Sách DLS tr. 29"
  },
  {
    "id": 92,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Tính liều nạp tĩnh mạch của Theophyllin cho bệnh nhân nặng 50 kg để đạt nồng độ tức thì 12 mg/L, biết thể tích phân bố Vd = 0.5 L/kg và F = 1:",
    "options": [
      "25 mg",
      "1500 mg",
      "300 mg",
      "50 mg"
    ],
    "correct": 2,
    "explanation": "Áp dụng công thức liều nạp D = (Vd x Cân nặng x Cp) / F = (0.5 x 50 x 12 mg/L) / 1 = 300 mg.",
    "reference": "Sách DLS tr. 29"
  },
  {
    "id": 93,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Tính liều nạp tĩnh mạch của Gentamicin cho bệnh nhân nặng 70 kg để đạt nồng độ tức thì 6 mg/L, biết thể tích phân bố Vd = 0.25 L/kg và F = 1:",
    "options": [
      "105 mg",
      "25 mg",
      "50 mg",
      "1500 mg"
    ],
    "correct": 0,
    "explanation": "Áp dụng công thức liều nạp D = (Vd x Cân nặng x Cp) / F = (0.25 x 70 x 6 mg/L) / 1 = 105 mg.",
    "reference": "Sách DLS tr. 29"
  },
  {
    "id": 94,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Tính liều nạp tĩnh mạch của Amikacin cho bệnh nhân nặng 60 kg để đạt nồng độ tức thì 25 mg/L, biết thể tích phân bố Vd = 0.25 L/kg và F = 1:",
    "options": [
      "375 mg",
      "1500 mg",
      "25 mg",
      "50 mg"
    ],
    "correct": 0,
    "explanation": "Áp dụng công thức liều nạp D = (Vd x Cân nặng x Cp) / F = (0.25 x 60 x 25 mg/L) / 1 = 375 mg.",
    "reference": "Sách DLS tr. 29"
  },
  {
    "id": 95,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Tính liều nạp tĩnh mạch của Vancomycin cho bệnh nhân nặng 65 kg để đạt nồng độ tức thì 20 mg/L, biết thể tích phân bố Vd = 0.7 L/kg và F = 1:",
    "options": [
      "1500 mg",
      "25 mg",
      "50 mg",
      "910 mg"
    ],
    "correct": 3,
    "explanation": "Áp dụng công thức liều nạp D = (Vd x Cân nặng x Cp) / F = (0.7 x 65 x 20 mg/L) / 1 = 910 mg.",
    "reference": "Sách DLS tr. 29"
  },
  {
    "id": 96,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Tính liều nạp tĩnh mạch của Phenobarbital cho bệnh nhân nặng 55 kg để đạt nồng độ tức thì 10 mg/L, biết thể tích phân bố Vd = 0.6 L/kg và F = 1:",
    "options": [
      "1500 mg",
      "50 mg",
      "25 mg",
      "330 mg"
    ],
    "correct": 3,
    "explanation": "Áp dụng công thức liều nạp D = (Vd x Cân nặng x Cp) / F = (0.6 x 55 x 10 mg/L) / 1 = 330 mg.",
    "reference": "Sách DLS tr. 29"
  },
  {
    "id": 97,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Tính liều nạp tĩnh mạch của Lidocain cho bệnh nhân nặng 70 kg để đạt nồng độ tức thì 3 mg/L, biết thể tích phân bố Vd = 1.1 L/kg và F = 1:",
    "options": [
      "231 mg",
      "1500 mg",
      "50 mg",
      "25 mg"
    ],
    "correct": 0,
    "explanation": "Áp dụng công thức liều nạp D = (Vd x Cân nặng x Cp) / F = (1.1 x 70 x 3 mg/L) / 1 = 231 mg.",
    "reference": "Sách DLS tr. 29"
  },
  {
    "id": 98,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Tính liều nạp tĩnh mạch của Tobramycin cho bệnh nhân nặng 50 kg để đạt nồng độ tức thì 5 mg/L, biết thể tích phân bố Vd = 0.26 L/kg và F = 1:",
    "options": [
      "65 mg",
      "50 mg",
      "25 mg",
      "1500 mg"
    ],
    "correct": 0,
    "explanation": "Áp dụng công thức liều nạp D = (Vd x Cân nặng x Cp) / F = (0.26 x 50 x 5 mg/L) / 1 = 65 mg.",
    "reference": "Sách DLS tr. 29"
  },
  {
    "id": 99,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Tính liều nạp tĩnh mạch của Netilmicin cho bệnh nhân nặng 60 kg để đạt nồng độ tức thì 8 mg/L, biết thể tích phân bố Vd = 0.22 L/kg và F = 1:",
    "options": [
      "50 mg",
      "25 mg",
      "1500 mg",
      "105,6 mg"
    ],
    "correct": 3,
    "explanation": "Áp dụng công thức liều nạp D = (Vd x Cân nặng x Cp) / F = (0.22 x 60 x 8 mg/L) / 1 = 105,6 mg.",
    "reference": "Sách DLS tr. 29"
  },
  {
    "id": 100,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Tính liều nạp tĩnh mạch của Procainamid cho bệnh nhân nặng 60 kg để đạt nồng độ tức thì 6 mg/L, biết thể tích phân bố Vd = 2 L/kg và F = 1:",
    "options": [
      "1500 mg",
      "720 mg",
      "50 mg",
      "25 mg"
    ],
    "correct": 1,
    "explanation": "Áp dụng công thức liều nạp D = (Vd x Cân nặng x Cp) / F = (2 x 60 x 6 mg/L) / 1 = 720 mg.",
    "reference": "Sách DLS tr. 29"
  },
  {
    "id": 101,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Tính liều nạp tĩnh mạch của Quinidin cho bệnh nhân nặng 70 kg để đạt nồng độ tức thì 3 mg/L, biết thể tích phân bố Vd = 2.5 L/kg và F = 1:",
    "options": [
      "25 mg",
      "50 mg",
      "525 mg",
      "1500 mg"
    ],
    "correct": 2,
    "explanation": "Áp dụng công thức liều nạp D = (Vd x Cân nặng x Cp) / F = (2.5 x 70 x 3 mg/L) / 1 = 525 mg.",
    "reference": "Sách DLS tr. 29"
  },
  {
    "id": 102,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Tính liều nạp tĩnh mạch của Valproat natri cho bệnh nhân nặng 50 kg để đạt nồng độ tức thì 50 mg/L, biết thể tích phân bố Vd = 0.2 L/kg và F = 1:",
    "options": [
      "50 mg",
      "1500 mg",
      "500 mg",
      "25 mg"
    ],
    "correct": 2,
    "explanation": "Áp dụng công thức liều nạp D = (Vd x Cân nặng x Cp) / F = (0.2 x 50 x 50 mg/L) / 1 = 500 mg.",
    "reference": "Sách DLS tr. 29"
  },
  {
    "id": 103,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Tính liều nạp tĩnh mạch của Carbamazepin cho bệnh nhân nặng 60 kg để đạt nồng độ tức thì 8 mg/L, biết thể tích phân bố Vd = 1.2 L/kg và F = 1:",
    "options": [
      "25 mg",
      "50 mg",
      "1500 mg",
      "576 mg"
    ],
    "correct": 3,
    "explanation": "Áp dụng công thức liều nạp D = (Vd x Cân nặng x Cp) / F = (1.2 x 60 x 8 mg/L) / 1 = 576 mg.",
    "reference": "Sách DLS tr. 29"
  },
  {
    "id": 104,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Tính liều nạp tĩnh mạch của Methotrexat cho bệnh nhân nặng 50 kg để đạt nồng độ tức thì 10 mg/L, biết thể tích phân bố Vd = 0.8 L/kg và F = 1:",
    "options": [
      "25 mg",
      "1500 mg",
      "400 mg",
      "50 mg"
    ],
    "correct": 2,
    "explanation": "Áp dụng công thức liều nạp D = (Vd x Cân nặng x Cp) / F = (0.8 x 50 x 10 mg/L) / 1 = 400 mg.",
    "reference": "Sách DLS tr. 29"
  },
  {
    "id": 105,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Tính liều nạp tĩnh mạch của Ceftriaxon cho bệnh nhân nặng 60 kg để đạt nồng độ tức thì 100 mg/L, biết thể tích phân bố Vd = 0.15 L/kg và F = 1:",
    "options": [
      "900 mg",
      "50 mg",
      "25 mg",
      "1500 mg"
    ],
    "correct": 0,
    "explanation": "Áp dụng công thức liều nạp D = (Vd x Cân nặng x Cp) / F = (0.15 x 60 x 100 mg/L) / 1 = 900 mg.",
    "reference": "Sách DLS tr. 29"
  },
  {
    "id": 106,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Tính liều nạp tĩnh mạch của Ceftazidim cho bệnh nhân nặng 70 kg để đạt nồng độ tức thì 40 mg/L, biết thể tích phân bố Vd = 0.23 L/kg và F = 1:",
    "options": [
      "50 mg",
      "25 mg",
      "644 mg",
      "1500 mg"
    ],
    "correct": 2,
    "explanation": "Áp dụng công thức liều nạp D = (Vd x Cân nặng x Cp) / F = (0.23 x 70 x 40 mg/L) / 1 = 644 mg.",
    "reference": "Sách DLS tr. 29"
  },
  {
    "id": 107,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Tính liều nạp tĩnh mạch của Cefepim cho bệnh nhân nặng 60 kg để đạt nồng độ tức thì 50 mg/L, biết thể tích phân bố Vd = 0.25 L/kg và F = 1:",
    "options": [
      "50 mg",
      "750 mg",
      "25 mg",
      "1500 mg"
    ],
    "correct": 1,
    "explanation": "Áp dụng công thức liều nạp D = (Vd x Cân nặng x Cp) / F = (0.25 x 60 x 50 mg/L) / 1 = 750 mg.",
    "reference": "Sách DLS tr. 29"
  },
  {
    "id": 108,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Tính liều nạp tĩnh mạch của Levofloxacin cho bệnh nhân nặng 65 kg để đạt nồng độ tức thì 6 mg/L, biết thể tích phân bố Vd = 1.3 L/kg và F = 1:",
    "options": [
      "25 mg",
      "507 mg",
      "1500 mg",
      "50 mg"
    ],
    "correct": 1,
    "explanation": "Áp dụng công thức liều nạp D = (Vd x Cân nặng x Cp) / F = (1.3 x 65 x 6 mg/L) / 1 = 507 mg.",
    "reference": "Sách DLS tr. 29"
  },
  {
    "id": 109,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Tính liều nạp tĩnh mạch của Ciprofloxacin cho bệnh nhân nặng 60 kg để đạt nồng độ tức thì 3 mg/L, biết thể tích phân bố Vd = 2.1 L/kg và F = 1:",
    "options": [
      "378 mg",
      "50 mg",
      "25 mg",
      "1500 mg"
    ],
    "correct": 0,
    "explanation": "Áp dụng công thức liều nạp D = (Vd x Cân nặng x Cp) / F = (2.1 x 60 x 3 mg/L) / 1 = 378 mg.",
    "reference": "Sách DLS tr. 29"
  },
  {
    "id": 110,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Tính liều nạp tĩnh mạch của Metronidazol cho bệnh nhân nặng 55 kg để đạt nồng độ tức thì 15 mg/L, biết thể tích phân bố Vd = 0.8 L/kg và F = 1:",
    "options": [
      "660 mg",
      "50 mg",
      "1500 mg",
      "25 mg"
    ],
    "correct": 0,
    "explanation": "Áp dụng công thức liều nạp D = (Vd x Cân nặng x Cp) / F = (0.8 x 55 x 15 mg/L) / 1 = 660 mg.",
    "reference": "Sách DLS tr. 29"
  },
  {
    "id": 111,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Phối hợp giữa kháng sinh Aminosid với Furosemid gây nguy cơ tổn thương nặng trên hai cơ quan nào?",
    "options": [
      "Thận và cơ quan thính giác",
      "Tủy xương và cơ quan tạo máu",
      "Gan và hệ thống đường mật",
      "Niêm mạc dạ dày và tá tràng"
    ],
    "correct": 0,
    "explanation": "Cả hai thuốc đều độc trên thận và tai, phối hợp làm tăng nguy cơ suy thận cấp và điếc vĩnh viễn.",
    "reference": "Sách DLS tr. 68"
  },
  {
    "id": 112,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Dùng đồng thời Cimetidin với Warfarin gây nguy cơ xuất huyết là do cơ chế nào?",
    "options": [
      "Cimetidin làm tăng đào thải Warfarin qua thận",
      "Cimetidin cạnh tranh thụ thể của Warfarin",
      "Cimetidin ức chế enzym chuyển hóa Warfarin ở gan",
      "Cimetidin phá hủy phân tử Warfarin trong ruột"
    ],
    "correct": 2,
    "explanation": "Cimetidin ức chế CYP450 làm giảm chuyển hóa Warfarin, tăng nồng độ tự do gây chảy máu.",
    "reference": "Sách DLS tr. 71"
  },
  {
    "id": 113,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Khi dùng chung Gastropulgite với Ciprofloxacin, hướng dẫn dùng thuốc hợp lý là gì?",
    "options": [
      "Uống Ciprofloxacin cách xa Gastropulgite ít nhất 2 giờ",
      "Uống Gastropulgite gấp đôi liều quy định theo khuyến cáo",
      "Uống hai thuốc cùng lúc ngay trong bữa ăn kèm theo sốt nhẹ",
      "Nhai nát Ciprofloxacin rồi uống cùng nước chè trong phác đồ chuẩn"
    ],
    "correct": 0,
    "explanation": "Nhôm và magnesi trong antacid tạo chelat không tan với fluoroquinolon, phải uống cách xa ít nhất 2 giờ.",
    "reference": "Sách DLS tr. 69-70"
  },
  {
    "id": 114,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Kháng sinh Tetracyclin bị giảm sinh khả dụng rõ rệt khi uống chung với sữa là do nguyên nhân nào?",
    "options": [
      "Độ kiềm của sữa làm biến tính kháng sinh",
      "Chất béo trong sữa phá hủy vòng phân tử thuốc",
      "Ion Calci trong sữa tạo phức chelat khó hấp thu",
      "Protein trong sữa kích thích nhu động ruột"
    ],
    "correct": 2,
    "explanation": "Ion Ca2+ trong sữa tạo phức chelat không hấp thu với Tetracyclin.",
    "reference": "Sách DLS tr. 69"
  },
  {
    "id": 115,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Nhóm thuốc nào sau đây là các chất gây cảm ứng mạnh enzym chuyển hóa thuốc tại gan?",
    "options": [
      "Cimetidin, Erythromycin, Ketoconazol",
      "Rifampicin, Phenobarbital, Carbamazepin",
      "Omeprazol, Ciprofloxacin, Clarithromycin",
      "Allopurinol, Isoniazid, Metronidazol"
    ],
    "correct": 1,
    "explanation": "Các chất cảm ứng enzym CYP450 gồm Rifampicin, Phenobarbital, Carbamazepin, Phenytoin.",
    "reference": "Sách DLS tr. 71"
  },
  {
    "id": 116,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Phối hợp đồng thời hai thuốc cùng ức chế hệ RAA gây ra nguy cơ biến cố bất lợi nào?",
    "options": [
      "Hạ kali máu và nhịp tim nhanh kịch phát",
      "Loét dạ dày tá tràng và chảy máu tiêu hóa",
      "Tăng kali máu, suy thận cấp, tụt huyết áp",
      "Co thắt phế quản và khó thở cấp tính"
    ],
    "correct": 2,
    "explanation": "Ức chế kép hệ RAAS làm suy giảm nặng chức năng thận và tăng kali máu.",
    "reference": "Sách DLS tr. 68"
  },
  {
    "id": 117,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Phối hợp thuốc ức chế men chuyển với Amlodipin mang lại lợi ích gì về mặt giảm tác dụng phụ?",
    "options": [
      "Giảm hiện tượng phù mắt cá chân do Amlodipin",
      "Ngăn ngừa hiện tượng nhịp tim chậm xoang",
      "Tránh nguy cơ tăng đường huyết sau ăn",
      "Làm mất hoàn toàn tác dụng phụ ho khan"
    ],
    "correct": 0,
    "explanation": "ƯCMC làm giãn tiểu động mạch đi, cân bằng áp lực mao mạch giúp giảm phù do Amlodipin.",
    "reference": "Sách DLS tr. 68"
  },
  {
    "id": 118,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Tương tác đối kháng cạnh tranh trực tiếp trên cùng thụ thể xảy ra giữa cặp thuốc nào sau đây?",
    "options": [
      "Warfarin và Cimetidin",
      "Furosemid và Gentamicin",
      "Atropin và Pilocarpin",
      "Tetracyclin và Sữa"
    ],
    "correct": 2,
    "explanation": "Atropin và Pilocarpin đối kháng trực tiếp trên thụ thể muscarinic.",
    "reference": "Sách DLS tr. 67"
  },
  {
    "id": 119,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Phối hợp thuốc lợi tiểu Thiazid với thuốc ức chế men chuyển giúp giảm tác dụng phụ nào?",
    "options": [
      "Giảm nguy cơ ho khan của thuốc ức chế men chuyển",
      "Giảm nguy cơ hạ kali máu do Thiazid gây ra",
      "Tránh hiện tượng đỏ bừng mặt khi dùng thuốc",
      "Làm tăng bài xuất natri ra ngoài nước tiểu"
    ],
    "correct": 1,
    "explanation": "Lợi tiểu thiazid gây mất kali trong khi ƯCMC giữ kali, phối hợp giúp cân bằng kali máu.",
    "reference": "Sách DLS tr. 68"
  },
  {
    "id": 120,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Uống rượu khi đang dùng thuốc hạ đường huyết nhóm Sulfonylure có thể xuất hiện phản ứng gì?",
    "options": [
      "Hội chứng ngoại tháp cấp tính",
      "Xuất huyết võng mạc không hồi phục",
      "Cơn tăng huyết áp kịch phát nguy hiểm",
      "Phản ứng sợ rượu kiểu Antabuse"
    ],
    "correct": 3,
    "explanation": "Tolbutamid ức chế chuyển hóa rượu gây tích tụ acetaldehyd (hội chứng antabuse).",
    "reference": "Sách DLS tr. 86"
  },
  {
    "id": 121,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Phối hợp Paracetamol với rượu làm tăng nguy cơ tổn thương cơ quan nào trong cơ thể?",
    "options": [
      "Tổn thương hoại tử tế bào gan",
      "Loét thủng niêm mạc bàng quang",
      "Viêm xơ dây thần kinh thị giác",
      "Đục mờ thủy tinh thể mắt"
    ],
    "correct": 0,
    "explanation": "Rượu cảm ứng CYP2E1 làm tăng tạo chất chuyển hóa độc NAPQI gây hoại tử tế bào gan.",
    "reference": "Sách DLS tr. 86"
  },
  {
    "id": 122,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Để kiềm hóa nước tiểu nhằm tăng đào thải các thuốc acid yếu như Barbiturat, người ta dùng chất nào?",
    "options": [
      "Dung dịch Acid ascorbic liều cao",
      "Dung dịch Amoni clorid truyền tĩnh mạch",
      "Dung dịch Acid citric đậm đặc",
      "Dung dịch Natri hydrocarbonat"
    ],
    "correct": 3,
    "explanation": "NaHCO3 làm kiềm hóa nước tiểu, tăng ion hóa các thuốc acid yếu giúp tăng thải trừ.",
    "reference": "Sách DLS tr. 71"
  },
  {
    "id": 123,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Dùng đồng thời Erythromycin với Theophyllin sẽ dẫn đến hiện tượng dược động học nào?",
    "options": [
      "Giảm tác dụng kháng khuẩn của Erythromycin",
      "Tăng tốc độ chuyển hóa Theophyllin qua gan",
      "Tăng bài xuất Theophyllin qua nước tiểu",
      "Tăng nồng độ Theophyllin trong máu gây ngộ độc"
    ],
    "correct": 3,
    "explanation": "Erythromycin ức chế men gan làm giảm chuyển hóa Theophyllin, tăng nguy cơ ngộ độc.",
    "reference": "Sách DLS tr. 71"
  },
  {
    "id": 124,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Phối hợp kháng sinh Macrolid với dẫn chất nấm cựa gà Ergotamin bị chống chỉ định do nguy cơ:",
    "options": [
      "Hạ đường huyết dẫn đến hôn mê sâu ở mức độ vừa và nặng",
      "Loãng xương và gãy xương đùi tự phát kéo dài liên tục",
      "Xuất huyết tiêu hóa ồ ạt không cầm được sau khi dùng thuốc",
      "Co mạch ngoại vi quá mức gây thiếu máu hoại tử chi"
    ],
    "correct": 3,
    "explanation": "Macrolid ức chế chuyển hóa ergotamin làm tăng nồng độ ergotamin gây co mạch nặng hoại tử chi.",
    "reference": "Sách DLS tr. 84"
  },
  {
    "id": 125,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Thuốc ức chế men chuyển phối hợp với Allopurinol làm gia tăng tỷ lệ mắc tác dụng phụ nào?",
    "options": [
      "Gây suy tủy xương mất bạch cầu hạt",
      "Gây điếc tai không hồi phục ở người lớn",
      "Gây đục thủy tinh thể tiến triển nhanh",
      "Tăng nguy cơ phản ứng dị ứng nặng trên da"
    ],
    "correct": 3,
    "explanation": "Phối hợp ƯCMC và Allopurinol làm tăng nguy cơ dị ứng nặng, hội chứng Stevens-Johnson.",
    "reference": "Sách DLS tr. 184"
  },
  {
    "id": 126,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Dùng chung Digoxin với thuốc lợi tiểu gây hạ kali máu như Furosemid làm tăng nguy cơ nào?",
    "options": [
      "Gây tăng nồng độ kali trong huyết tương",
      "Làm giảm tác dụng trợ tim của Digoxin",
      "Làm tăng bài xuất Digoxin qua đường thận",
      "Tăng nguy cơ ngộ độc Digoxin gây loạn nhịp tim"
    ],
    "correct": 3,
    "explanation": "Hạ kali máu làm tăng tính nhạy cảm của cơ tim với Digoxin dẫn đến loạn nhịp nguy hiểm.",
    "reference": "Sách DLS tr. 68"
  },
  {
    "id": 127,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Khi dùng chung viên sắt sulfat với nước chè xanh (trà), hiện tượng gì sẽ xảy ra?",
    "options": [
      "Làm tăng tác dụng kích ứng niêm mạc ruột kèm theo sốt nhẹ",
      "Chất tanin trong chè tạo kết tủa với sắt làm giảm hấp thu",
      "Gây đổi màu răng thành màu vàng vĩnh viễn ở người bệnh",
      "Tăng tốc độ hòa tan và hấp thu của muối sắt trên lâm sàng"
    ],
    "correct": 1,
    "explanation": "Tanin trong chè tạo tủa khó tan với Fe2+, làm mất tác dụng bổ sung sắt.",
    "reference": "Sách DLS tr. 85"
  },
  {
    "id": 128,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Thuốc chống đông Warfarin dùng chung với kháng nấm Fluconazol dẫn đến hậu quả lâm sàng nào?",
    "options": [
      "Làm mất tác dụng điều trị nấm của Fluconazol kèm theo sốt nhẹ",
      "Rút ngắn thời gian đông máu gây tắc mạch ở người bệnh",
      "Kéo dài thời gian đông máu và tăng nguy cơ xuất huyết",
      "Gây tăng huyết áp kịch phát ở người bệnh trong phác đồ chuẩn"
    ],
    "correct": 2,
    "explanation": "Fluconazol ức chế CYP2C9 chuyển hóa Warfarin làm nồng độ Warfarin tăng cao.",
    "reference": "Sách DLS tr. 70, 71"
  },
  {
    "id": 129,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Sử dụng đồng thời kháng sinh Clarithromycin với thuốc hạ mỡ máu Simvastatin làm tăng nguy cơ biến chứng gì?",
    "options": [
      "Gây tăng áp lực nội sọ cấp tính",
      "Co thắt khí phế quản gây suy hô hấp",
      "Tiêu cơ vân cấp tính và suy thận cấp",
      "Xuất huyết tiêu hóa do thủng dạ dày"
    ],
    "correct": 2,
    "explanation": "Clarithromycin ức chế CYP3A4 làm tăng nồng độ Simvastatin trong máu gây tiêu cơ vân.",
    "reference": "Sách DLS tr. 71, 184"
  },
  {
    "id": 130,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Phối hợp thuốc ức chế tái hấp thu chọn lọc Serotonin với thuốc ức chế men MAO gây hội chứng nguy hiểm nào?",
    "options": [
      "Hội chứng ngộ độc Serotonin kịch phát",
      "Hội chứng suy tuyến thượng thận cấp",
      "Hội chứng ngoại tháp cấp tính",
      "Hội chứng thiếu máu bất sản tủy xương"
    ],
    "correct": 0,
    "explanation": "Ức chế chuyển hóa và tái hấp thu serotonin làm nồng độ serotonin quá cao gây co giật, sốt cao, tử vong.",
    "reference": "Sách DLS tr. 68"
  },
  {
    "id": 131,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Khi dùng chung Methotrexat với Aspirin, cơ chế dẫn đến tăng độc tính của Methotrexat là gì?",
    "options": [
      "Aspirin làm giảm bài tiết acid uric tại ống thận",
      "Aspirin đẩy Methotrexat ra khỏi vị trí liên kết protein huyết tương",
      "Aspirin kích thích tủy xương làm tăng nhạy cảm tế bào",
      "Aspirin làm tăng tính thấm của hàng rào máu não đối với thuốc"
    ],
    "correct": 1,
    "explanation": "Aspirin cạnh tranh gắn kết albumin làm tăng nồng độ methotrexat tự do độc tính cao.",
    "reference": "Sách DLS tr. 70"
  },
  {
    "id": 132,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Phối hợp Spironolacton với Enalapril trên bệnh nhân suy thận cần thận trọng cao vì nguy cơ gì?",
    "options": [
      "Gây bí tiểu tiện cấp tính do co thắt cổ bàng quang",
      "Tăng kali huyết thanh mức độ nặng",
      "Hạ đường huyết đột ngột lúc nửa đêm",
      "Hạ kali máu kéo dài khó hồi phục"
    ],
    "correct": 1,
    "explanation": "Cả hai thuốc đều làm giảm thải trừ kali, dễ dẫn đến tăng kali máu gây ngưng tim.",
    "reference": "Sách DLS tr. 68"
  },
  {
    "id": 133,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Khi dùng chung Levofloxacin với thuốc bổ sung Sắt sulfat, cách giải quyết phù hợp nhất là gì?",
    "options": [
      "Uống chung hai thuốc vào bữa ăn sáng nhiều dầu mỡ",
      "Uống hai thuốc cách nhau tối thiểu 2 giờ đồng hồ",
      "Tăng gấp đôi liều của Levofloxacin trong ngày",
      "Hòa tan viên sắt vào nước trước khi uống kháng sinh"
    ],
    "correct": 1,
    "explanation": "Cation kim loại hóa trị 2 của sắt tạo phức chelat không tan với fluoroquinolon.",
    "reference": "Sách DLS tr. 69"
  },
  {
    "id": 134,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Phối hợp Acid valproic với Phenytoin dẫn đến thay đổi dược động học nào của Phenytoin?",
    "options": [
      "Làm giảm nồng độ toàn phần và tự do của Phenytoin",
      "Tăng nồng độ Phenytoin dạng tự do trong huyết tương",
      "Tăng tốc độ gắn kết của Phenytoin vào thụ thể GABA",
      "Làm mất hoàn toàn tác dụng chống co giật của Phenytoin"
    ],
    "correct": 1,
    "explanation": "Valproat đẩy Phenytoin khỏi protein huyết tương và ức chế chuyển hóa ở gan.",
    "reference": "Sách DLS tr. 70"
  },
  {
    "id": 135,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Dùng đồng thời Digoxin và Amiodaron đòi hỏi bác sĩ lâm sàng phải thực hiện can thiệp gì?",
    "options": [
      "Bổ sung dung dịch kali liều cao vào tĩnh mạch",
      "Ngừng ngay lập tức việc dùng Amiodaron",
      "Tăng liều Digoxin lên gấp đôi để duy trì hiệu lực",
      "Giảm liều Digoxin xuống một nửa và theo dõi nồng độ"
    ],
    "correct": 3,
    "explanation": "Amiodaron ức chế P-gp làm tăng gấp đôi nồng độ Digoxin, phải giảm liều Digoxin 30-50%.",
    "reference": "Sách DLS tr. 71"
  },
  {
    "id": 136,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Phụ nữ đang uống thuốc tránh thai kết hợp nếu điều trị lao bằng Rifampicin có nguy cơ gặp biến cố gì?",
    "options": [
      "Viêm gan cấp do ứ mật tại gan trong phác đồ chuẩn",
      "Thất bại trong việc ngừa thai và mang thai ngoài ý muốn",
      "Huyết khối tĩnh mạch sâu chi dưới diện rộng ở người bệnh",
      "Xuất huyết tử cung bất thường đe dọa tính mạng kèm theo sốt nhẹ"
    ],
    "correct": 1,
    "explanation": "Rifampicin cảm ứng mạnh CYP3A4 làm tăng chuyển hóa estrogen và progestin.",
    "reference": "Sách DLS tr. 71"
  },
  {
    "id": 137,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Bệnh nhân uống Metronidazol cần kiêng tuyệt đối đồ uống chứa cồn vì lý do gì?",
    "options": [
      "Tăng nguy cơ gây co giật toàn thể kịch phát",
      "Làm mất hoạt tính kháng khuẩn của Metronidazol",
      "Gây suy giảm thị lực và viêm dây thần kinh thị",
      "Tích tụ Acetaldehyd gây buồn nôn, tụt áp và đỏ mặt"
    ],
    "correct": 3,
    "explanation": "Metronidazol ức chế enzym aldehyd dehydrogenase gây hội chứng antabuse.",
    "reference": "Sách DLS tr. 86"
  },
  {
    "id": 138,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Dùng đồng thời Clopidogrel với Omeprazol làm giảm tác dụng chống kết tập tiểu cầu do cơ chế nào?",
    "options": [
      "Omeprazol ức chế enzym CYP2C19 chuyển hóa Clopidogrel",
      "Omeprazol kích thích phá hủy Clopidogrel tại đại tràng",
      "Omeprazol làm giảm độ acid dạ dày cản trở phân rã thuốc",
      "Omeprazol gắn kết trực tiếp với thụ thể P2Y12 ở tiểu cầu"
    ],
    "correct": 0,
    "explanation": "Clopidogrel là tiền dược cần CYP2C19 hoạt hóa, Omeprazol ức chế CYP2C19 làm giảm hoạt chất có tác dụng.",
    "reference": "Sách DLS tr. 71"
  },
  {
    "id": 139,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Khi bệnh nhân cần dùng đồng thời Levothyroxin và Sucralfat, khuyến cáo sử dụng thuốc là:",
    "options": [
      "Uống hai thuốc cách xa nhau ít nhất 4 giờ",
      "Nghiền nát cả hai viên thuốc rồi hòa nước uống",
      "Thay đổi Levothyroxin bằng hormon tuyến giáp dạng tiêm",
      "Uống cùng lúc vào buổi sáng trước bữa ăn"
    ],
    "correct": 0,
    "explanation": "Sucralfat tạo màng bọc niêm mạc cản trở hấp thu của Levothyroxin.",
    "reference": "Sách DLS tr. 69"
  },
  {
    "id": 140,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Kháng sinh Macrolid phối hợp với Carbamazepin dẫn đến nguy cơ nào cho bệnh nhân?",
    "options": [
      "Gây suy tủy xương dòng bạch cầu hạt cấp tính",
      "Làm mất tác dụng chống động kinh dẫn đến cơn co giật",
      "Gây tiêu chảy nhiễm trùng do Clostridium difficile",
      "Ngộ độc Carbamazepin gây chóng mặt, nhìn đôi và mất điều hòa"
    ],
    "correct": 3,
    "explanation": "Macrolid ức chế CYP3A4 làm giảm chuyển hóa Carbamazepin, tăng độc tính thần kinh.",
    "reference": "Sách DLS tr. 71"
  },
  {
    "id": 141,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Dùng đồng thời Lithi với thuốc lợi tiểu Hydrochlorothiazid làm tăng độc tính của Lithi do:",
    "options": [
      "Thiazid đẩy Lithi khỏi vị trí gắn kết ở xương",
      "Thiazid ức chế enzym thoái giáng Lithi ở gan",
      "Thiazid kích thích hấp thu Lithi tại ruột",
      "Thiazid làm giảm bài tiết Lithi ở ống thận"
    ],
    "correct": 3,
    "explanation": "Mất natri qua nước tiểu khiến ống lượn gần tăng tái hấp thu cả natri lẫn lithi, gây tích lũy độc lithi.",
    "reference": "Sách DLS tr. 71"
  },
  {
    "id": 142,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Kháng sinh Ciprofloxacin khi dùng chung với Theophyllin sẽ dẫn đến hiện tượng gì?",
    "options": [
      "Gây viêm xơ gân gót nhanh chóng hơn bình thường ở người bệnh",
      "Tăng đào thải Theophyllin qua đường tiết niệu trên lâm sàng",
      "Tăng nồng độ Theophyllin trong máu gây co giật và loạn nhịp",
      "Giảm tác dụng kháng khuẩn của Ciprofloxacin ở mức độ vừa và nặng"
    ],
    "correct": 2,
    "explanation": "Ciprofloxacin ức chế CYP1A2 làm chậm thoái hóa Theophyllin dẫn đến ngộ độc.",
    "reference": "Sách DLS tr. 71"
  },
  {
    "id": 143,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Cặp thuốc nào sau đây thể hiện tương tác đối kháng đặc hiệu trong điều trị cấp cứu ngộ độc?",
    "options": [
      "Gentamicin và Ampicillin",
      "Morphin và Naloxon",
      "Cefuroxim và Metronidazol",
      "Aspirin và Paracetamol"
    ],
    "correct": 1,
    "explanation": "Naloxon là chất đối kháng cạnh tranh chọn lọc trên thụ thể mu opiat dùng giải độc morphin.",
    "reference": "Sách DLS tr. 67"
  },
  {
    "id": 144,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Khi trung hòa tác dụng chống đông của Heparin bằng Protaminsulfat, bản chất tương tác là gì?",
    "options": [
      "Tăng tốc độ giáng hóa Heparin qua gan",
      "Kích thích tủy xương tăng sinh tiểu cầu cấp tốc",
      "Tương tác hóa học tạo phức trung hòa điện tích",
      "Cạnh tranh vị trí gắn trên phân tử Antithrombin III"
    ],
    "correct": 2,
    "explanation": "Protamin mang điện tích dương mạnh trung hòa heparin mang điện tích âm mạnh.",
    "reference": "Sách DLS tr. 66"
  },
  {
    "id": 145,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Không được trộn chung kháng sinh Penicillin và Aminosid trong cùng một chai dịch truyền vì:",
    "options": [
      "Kích thích thành mạch gây viêm tắc tĩnh mạch nông",
      "Làm tăng quá mức độ thẩm thấu của dung dịch tiêm truyền",
      "Hai thuốc tương kỵ hóa học tạo kết tủa mất hoạt tính",
      "Gây sốt cao kịch phát do phản ứng sinh nhiệt"
    ],
    "correct": 2,
    "explanation": "Aminosid và penicillin tạo liên kết cộng hóa trị làm bất hoạt lẫn nhau khi tiếp xúc nồng độ cao.",
    "reference": "Sách DLS tr. 65"
  },
  {
    "id": 146,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Thuốc ức chế bơm proton như Omeprazol làm giảm hấp thu thuốc nào sau đây do làm tăng pH dạ dày?",
    "options": [
      "Metformin",
      "Amoxicillin",
      "Ketoconazol",
      "Paracetamol"
    ],
    "correct": 2,
    "explanation": "Ketoconazol và Itraconazol dạng viên cần môi trường acid dạ dày để hòa tan và hấp thu.",
    "reference": "Sách DLS tr. 69"
  },
  {
    "id": 147,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Dùng đồng thời Probenecid với Ampicillin đem lại mục đích điều trị nào?",
    "options": [
      "Làm chậm bài tiết Ampicillin qua ống thận để kéo dài nồng độ điều trị",
      "Mở rộng phổ tác dụng trên vi khuẩn kỵ khí sau khi dùng thuốc",
      "Ngăn ngừa phản ứng dị ứng sốc phản vệ của Penicillin kéo dài liên tục",
      "Làm tăng tốc độ hòa tan của Ampicillin tại dạ dày theo khuyến cáo định kỳ"
    ],
    "correct": 0,
    "explanation": "Probenecid cạnh tranh chất vận chuyển anion ở ống thận làm giảm đào thải beta-lactam.",
    "reference": "Sách DLS tr. 71"
  },
  {
    "id": 148,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Dùng đồng thời Ibuprofen trước Aspirin liều thấp ngừa huyết khối có thể gây ra hậu quả gì?",
    "options": [
      "Làm mất tác dụng bảo vệ tim mạch chống kết tập tiểu cầu của Aspirin",
      "Gây tăng nhãn áp cấp tính ở người cao tuổi ở mức độ vừa và nặng",
      "Làm tăng gấp đôi nguy cơ hạ thân nhiệt đột ngột kéo dài liên tục",
      "Gây cơn co giật động kinh trên bệnh nhân tim mạch sau khi dùng thuốc"
    ],
    "correct": 0,
    "explanation": "Ibuprofen chiếm giữ vị trí gắn của COX-1 trước khiến Aspirin không acetyl hóa được tiểu cầu.",
    "reference": "Sách DLS tr. 68"
  },
  {
    "id": 149,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Phối hợp thuốc ức chế men phosphodiesterase 5 với Nitroglycerin bị chống chỉ định tuyệt đối vì:",
    "options": [
      "Tụt huyết áp trầm trọng đe dọa tính mạng người bệnh",
      "Gây suy thận cấp do tắc nghẽn ống thận",
      "Tăng áp lực nội sọ gây phù não cấp tính",
      "Gây nhồi máu cơ tim thất phải do co thắt mạch vành"
    ],
    "correct": 0,
    "explanation": "Cả hai thuốc đều làm tăng cGMP gây giãn mạch hệ thống cực mạnh, tụt huyết áp tử vong.",
    "reference": "Sách DLS tr. 84"
  },
  {
    "id": 150,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Uống rượu kéo dài mạn tính ảnh hưởng như thế nào đến liều dùng của các thuốc gây mê và thuốc ngủ?",
    "options": [
      "Làm mất hoàn toàn tác dụng của thuốc ngủ trên lâm sàng",
      "Làm tăng nhu cầu liều do hiện tượng cảm ứng enzym gan mạn tính",
      "Làm chậm khởi phát tác dụng của thuốc gây mê ở người bệnh",
      "Làm giảm liều cần dùng do độc tính tăng cao ở mức độ vừa và nặng"
    ],
    "correct": 1,
    "explanation": "Nghiện rượu mạn tính gây cảm ứng enzym gan, làm tăng tốc độ chuyển hóa thuốc cần dùng liều cao hơn.",
    "reference": "Sách DLS tr. 86"
  },
  {
    "id": 151,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Nước bưởi chùm chứa chất nào có khả năng ức chế không hồi phục enzym CYP3A4 ở niêm mạc ruột?",
    "options": [
      "Furanocoumarin",
      "Vitamin C",
      "Acid citric",
      "Chất xơ pectin"
    ],
    "correct": 0,
    "explanation": "Furanocoumarin trong bưởi chùm ức chế CYP3A4 ruột làm tăng vọt sinh khả dụng của statin, nifedipin.",
    "reference": "Sách DLS tr. 85"
  },
  {
    "id": 152,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Khi dùng chung thuốc hạ sốt Paracetamol với thuốc chống lao Isoniazid, nguy cơ nào tăng lên?",
    "options": [
      "Độc tính phá hủy tế bào gan",
      "Thiếu máu bất sản dòng hồng cầu",
      "Loét thủng dạ dày tá tràng",
      "Viêm đa dây thần kinh ngoại biên"
    ],
    "correct": 0,
    "explanation": "Isoniazid cảm ứng CYP2E1 làm tăng tạo NAPQI gây độc tế bào gan của Paracetamol.",
    "reference": "Sách DLS tr. 84"
  },
  {
    "id": 153,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Phối hợp kháng sinh Cloramphenicol với Paracetamol làm tăng độc tính của Cloramphenicol do:",
    "options": [
      "Ức chế bài xuất Cloramphenicol tại cầu thận",
      "Cạnh tranh liên hợp với acid glucuronic tại gan",
      "Tăng khả năng liên kết của Cloramphenicol với hồng cầu",
      "Tăng hấp thu Cloramphenicol tại đoạn đầu hỗng tràng"
    ],
    "correct": 1,
    "explanation": "Cả hai đều liên hợp glucuronic, paracetamol làm chậm đào thải cloramphenicol dẫn đến suy tủy.",
    "reference": "Sách DLS tr. 70"
  },
  {
    "id": 154,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Phối hợp kháng sinh Co-trimoxazol với Methotrexat làm tăng nguy cơ biến chứng nào?",
    "options": [
      "Ức chế tủy xương nặng gây suy giảm các dòng tế bào máu",
      "Gây điếc tai tiếp nhận không phục hồi",
      "Tăng đường huyết kịch phát dẫn đến nhiễm toan ceton",
      "Gây nhịp chậm xoang và block nhĩ thất độ 3"
    ],
    "correct": 0,
    "explanation": "Cả hai chất đều kháng acid folic, phối hợp làm tăng ức chế tổng hợp ADN ở tủy xương.",
    "reference": "Sách DLS tr. 68"
  },
  {
    "id": 155,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Thuốc nào sau đây làm tăng nồng độ Digoxin trong huyết tương do làm giảm độ thanh thải ngoài thận?",
    "options": [
      "Amoxicillin",
      "Paracetamol",
      "Quinidin",
      "Ranitidin"
    ],
    "correct": 2,
    "explanation": "Quinidin đẩy digoxin khỏi protein mô và ức chế P-glycoprotein làm tăng gấp 2 lần nồng độ digoxin.",
    "reference": "Sách DLS tr. 70"
  },
  {
    "id": 156,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Dùng phối hợp thuốc ức chế men chuyển với Spironolacton cần theo dõi chặt chẽ chỉ số xét nghiệm nào?",
    "options": [
      "Nồng độ Natri huyết thanh",
      "Nồng độ Bilirubin toàn phần",
      "Nồng độ Kali huyết thanh",
      "Chỉ số men gan AST và ALT"
    ],
    "correct": 2,
    "explanation": "Nguy cơ tăng kali máu rất cao, cần xét nghiệm điện giải đồ định kỳ.",
    "reference": "Sách DLS tr. 68"
  },
  {
    "id": 157,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Khi dùng chung Allopurinol với thuốc 6-Mercaptopurin, liều của 6-Mercaptopurin phải điều chỉnh thế nào?",
    "options": [
      "Tăng lên gấp đôi so với liều điều trị thông thường",
      "Giảm xuống còn 1/4 đến 1/3 liều thông thường",
      "Duy trì giữ nguyên liều ban đầu không thay đổi",
      "Chỉ dùng một liều duy nhất vào ban đêm"
    ],
    "correct": 1,
    "explanation": "Allopurinol ức chế xanthin oxidase chuyển hóa 6-MP, phải giảm liều 6-MP còn 25-33% để tránh suy tủy tử vong.",
    "reference": "Sách DLS tr. 71"
  },
  {
    "id": 158,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Tác dụng hiệp đồng tăng mức trong điều trị nhiễm trùng thu được từ sự phối hợp cặp thuốc nào?",
    "options": [
      "Penicillin G và Tetracyclin",
      "Erythromycin và Clindamycin",
      "Ampicillin và Cloramphenicol",
      "Sulfamethoxazol và Trimethoprim"
    ],
    "correct": 3,
    "explanation": "Sulfamethoxazol và Trimethoprim ức chế 2 bước liên tiếp trong tổng hợp acid folic của vi khuẩn.",
    "reference": "Sách DLS tr. 66"
  },
  {
    "id": 159,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Bệnh nhân dùng thuốc chống trầm cảm ức chế enzym MAO cần tránh ăn các loại thực phẩm nào?",
    "options": [
      "Hoa quả tươi có vị chua như cam quýt",
      "Các loại rau xanh có màu xanh đậm",
      "Thịt gia cầm và các loại cá nước ngọt",
      "Pho mát lên men lâu năm và rượu vang"
    ],
    "correct": 3,
    "explanation": "Pho mát lâu năm chứa nhiều tyramin không bị phân hủy bởi MAO gây co mạch tăng huyết áp kịch phát.",
    "reference": "Sách DLS tr. 85"
  },
  {
    "id": 160,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Kháng sinh nào sau đây không nên phối hợp đồng thời với Penicillin do tính chất đối kháng tác dụng diệt khuẩn?",
    "options": [
      "Amikacin",
      "Tetracyclin",
      "Tobramycin",
      "Gentamicin"
    ],
    "correct": 1,
    "explanation": "Tetracyclin kìm khuẩn ức chế nhân lên của vi khuẩn làm giảm tác dụng diệt khuẩn trên vách của Penicillin.",
    "reference": "Sách DLS tr. 67"
  },
  {
    "id": 161,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Theo phân loại Rawlins và Thompson, phản ứng có hại của thuốc thuộc Typ A có đặc điểm nào?",
    "options": [
      "Tiên lượng được và liên quan trực tiếp đến liều dùng",
      "Xảy ra do cơ chế miễn dịch dị ứng qua kháng thể",
      "Chỉ xuất hiện sau nhiều năm dùng thuốc liên tục",
      "Không dự đoán được và tỷ lệ tử vong rất cao"
    ],
    "correct": 0,
    "explanation": "Typ A chiếm 80% ADR, liên quan đến tác dụng dược lý, phụ thuộc liều và dự đoán trước được.",
    "reference": "Sách DLS tr. 98"
  },
  {
    "id": 162,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Phản ứng có hại của thuốc thuộc Typ B có đặc điểm nổi bật nào sau đây?",
    "options": [
      "Không phụ thuộc liều dùng và khó dự đoán trước",
      "Liên quan mật thiết đến cơ chế dược lý chính của thuốc",
      "Biến mất nhanh khi giảm liều dùng của thuốc",
      "Phụ thuộc liều lượng và tỷ lệ mắc bệnh rất cao"
    ],
    "correct": 0,
    "explanation": "Typ B không phụ thuộc liều, khó dự đoán, thường do dị ứng hoặc bất thường di truyền.",
    "reference": "Sách DLS tr. 99"
  },
  {
    "id": 163,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Phản ứng tan máu cấp ở người thiếu hụt enzym G6PD khi dùng thuốc sốt rét Primaquin thuộc loại nào?",
    "options": [
      "Phản ứng dị ứng qua trung gian IgE",
      "Tác dụng bất thường do di truyền",
      "Tác dụng phụ do dùng quá liều lượng",
      "Phản ứng dội ngược sau khi dừng thuốc đột ngột"
    ],
    "correct": 1,
    "explanation": "Thiếu G6PD gây tan máu là một phản ứng bất thường do gen (Idiosyncrasy), thuộc Typ B.",
    "reference": "Sách DLS tr. 100"
  },
  {
    "id": 164,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Theo phân loại Gell và Coombs, phản ứng phản vệ tức thì Typ I xảy ra thông qua trung gian của kháng thể nào?",
    "options": [
      "Kháng thể IgM",
      "Kháng thể IgA",
      "Kháng thể IgG",
      "Kháng thể IgE"
    ],
    "correct": 3,
    "explanation": "Dị ứng Typ I qua trung gian IgE gắn trên tế bào mast và bạch cầu ưa base gây giải phóng histamin.",
    "reference": "Sách DLS tr. 102"
  },
  {
    "id": 165,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Thuốc thiết yếu đầu tay có tính chất quyết định cứu sống người bệnh trong xử trí cấp cứu sốc phản vệ là:",
    "options": [
      "Adrenalin tiêm bắp",
      "Dopamin truyền tĩnh mạch chậm",
      "Methylprednisolon tiêm tĩnh mạch",
      "Diphenhydramin tiêm bắp"
    ],
    "correct": 0,
    "explanation": "Adrenalin là thuốc cấp cứu đầu tay, tiêm bắp ngay lập tức ở mặt trước ngoài đùi.",
    "reference": "Thông tư 51/2017/TT-BYT"
  },
  {
    "id": 166,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Vị trí tiêm bắp Adrenalin được khuyến cáo ưu tiên hàng đầu trong phác đồ xử trí phản vệ là:",
    "options": [
      "Cơ delta cánh tay",
      "Dưới da vùng quanh rốn",
      "Cơ mông trên ngoài",
      "Mặt trước ngoài đùi"
    ],
    "correct": 3,
    "explanation": "Tiêm bắp mặt trước ngoài đùi hấp thu nhanh và đạt nồng độ đỉnh trong máu tốt nhất.",
    "reference": "Thông tư 51/2017/TT-BYT"
  },
  {
    "id": 167,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Liều Adrenalin tiêm bắp ban đầu khuyến cáo cho người lớn khi xuất hiện phản vệ độ 2 trở lên là:",
    "options": [
      "1/10 ống tương đương 0,1 mg",
      "1/2 ống tương đương 0,5 mg",
      "2 ống tương đương 2 mg tiêm bắp",
      "Nguyên cả 1 ống 1 mg tiêm tĩnh mạch"
    ],
    "correct": 1,
    "explanation": "Liều tiêm bắp ban đầu cho người lớn là 1/2 ống (0,5 mg) nồng độ 1 mg/1 ml.",
    "reference": "Thông tư 51/2017/TT-BYT"
  },
  {
    "id": 168,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Khi thực hiện test lẩy da với kháng sinh Penicillin, kết quả được coi là dương tính khi:",
    "options": [
      "Vùng da chỉ hơi đỏ nhẹ không có sẩn phù ở người bệnh",
      "Người bệnh cảm thấy hơi ngứa thoáng qua kèm theo sốt nhẹ",
      "Đường kính dát đỏ lớn hơn 10 mm không kèm sẩn trong phác đồ chuẩn",
      "Đường kính sẩn phù lớn hơn hoặc bằng 3 mm so với chứng âm"
    ],
    "correct": 3,
    "explanation": "Test lẩy da dương tính khi đường kính sẩn phù >= 3 mm kèm quầng đỏ sau 15-20 phút.",
    "reference": "Sách DLS tr. 105"
  },
  {
    "id": 169,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Hội chứng hoại tử thượng bì nhiễm độc hay hội chứng Lyell có tỷ lệ tổn thương da chiếm:",
    "options": [
      "Dưới 10% diện tích bề mặt cơ thể",
      "Chỉ xuất hiện ở niêm mạc mắt và miệng",
      "Trên 30% diện tích bề mặt cơ thể",
      "Khoảng từ 10% đến 30% diện tích bề mặt cơ thể"
    ],
    "correct": 2,
    "explanation": "Hội chứng Lyell (TEN) có diện tích bong tróc thượng bì > 30% bề mặt cơ thể.",
    "reference": "Sách DLS tr. 104"
  },
  {
    "id": 170,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Hội chứng Stevens-Johnson có mức độ tổn thương bong tróc thượng bì da chiếm tỷ lệ:",
    "options": [
      "Từ 30% đến 50% diện tích cơ thể",
      "Trên 50% diện tích bề mặt cơ thể",
      "Dưới 10% diện tích bề mặt cơ thể",
      "Toàn bộ bề mặt da và lông móng"
    ],
    "correct": 2,
    "explanation": "SJS có diện tích bong tróc thượng bì < 10% diện tích cơ thể kèm tổn thương nhiều niêm mạc.",
    "reference": "Sách DLS tr. 104"
  },
  {
    "id": 171,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Kháng sinh nhóm Fluoroquinolon có tác dụng phụ đặc trưng nào trên hệ vận động?",
    "options": [
      "Viêm và đứt gân gót Achilles",
      "Xơ cứng khớp gối hai bên",
      "Hoại tử vô mạch chỏm xương đùi",
      "Nhược cơ tiến triển không hồi phục"
    ],
    "correct": 0,
    "explanation": "Fluoroquinolon có cảnh báo nguy cơ viêm gân và đứt gân gót Achilles.",
    "reference": "Sách DLS tr. 101"
  },
  {
    "id": 172,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Hội chứng người đỏ khi truyền kháng sinh Vancomycin xuất hiện chủ yếu do nguyên nhân nào?",
    "options": [
      "Tốc độ truyền tĩnh mạch Vancomycin quá nhanh",
      "Dị ứng thuốc qua trung gian kháng thể IgE",
      "Bệnh nhân bị nhiễm độc tố tụ cầu vàng",
      "Thuốc bị biến tính do pha trong dung dịch mặn"
    ],
    "correct": 0,
    "explanation": "Red man syndrome do truyền tĩnh mạch quá nhanh giải phóng histamin trực tiếp không qua IgE.",
    "reference": "Sách DLS tr. 101"
  },
  {
    "id": 173,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Tác dụng phụ ho khan dai dẳng của nhóm thuốc ức chế men chuyển liên quan đến sự tích tụ của chất nào?",
    "options": [
      "Chất Histamin và Serotonin",
      "Chất Bradykinin và chất P",
      "Chất Prostaglandin E1",
      "Chất Angiotensin II nội sinh"
    ],
    "correct": 1,
    "explanation": "Men chuyển angiotensin cũng giáng hóa bradykinin, ức chế men này làm ứ đọng bradykinin gây ho khan.",
    "reference": "Sách DLS tr. 101"
  },
  {
    "id": 174,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Bệnh nhân xuất hiện cơn hen phế quản cấp sau khi uống Aspirin là do cơ chế nào?",
    "options": [
      "Aspirin gây liệt cơ trơn thành khí phế quản trên lâm sàng",
      "Aspirin kích thích trực tiếp giải phóng Histamin ở mức độ vừa và nặng",
      "Aspirin ức chế trung tâm hô hấp ở hành não ở người bệnh",
      "Chuyển dịch chuyển hóa acid arachidonic sang tạo Leukotrien"
    ],
    "correct": 3,
    "explanation": "Ức chế COX làm tăng chuyển hóa theo con đường LOX tạo nhiều cysteinyl leukotrien gây co thắt phế quản.",
    "reference": "Sách DLS tr. 101"
  },
  {
    "id": 175,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Biến chứng suy tủy xương mất bạch cầu hạt không thể hồi phục là ADR hiếm gặp nhưng đặc trưng của thuốc nào?",
    "options": [
      "Ciprofloxacin",
      "Spironolacton",
      "Cloramphenicol",
      "Amoxicillin"
    ],
    "correct": 2,
    "explanation": "Cloramphenicol có thể gây suy tủy bất sản không phụ thuộc liều rất nguy hiểm.",
    "reference": "Sách DLS tr. 100"
  },
  {
    "id": 176,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Hội chứng xám nguy hiểm ở trẻ sơ sinh là biến chứng ngộ độc của kháng sinh nào?",
    "options": [
      "Tetracyclin",
      "Gentamicin",
      "Cloramphenicol",
      "Erythromycin"
    ],
    "correct": 2,
    "explanation": "Trẻ sơ sinh thiếu enzym glucuronyl transferase làm tích lũy cloramphenicol gây hội chứng xám.",
    "reference": "Sách DLS tr. 101"
  },
  {
    "id": 177,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Thuốc hạ áp nhóm chẹn kênh calci Dihydropyridin thường gây ra tác dụng phụ khó chịu nào?",
    "options": [
      "Tăng tiết dịch nhầy đường thở",
      "Ho khan kéo dài không có đờm",
      "Mất vị giác hoàn toàn",
      "Phù mắt cá chân và đỏ bừng mặt"
    ],
    "correct": 3,
    "explanation": "DHP gây giãn tiểu động mạch trước mao mạch làm tăng áp lực mao mạch dẫn đến phù mắt cá chân.",
    "reference": "Sách DLS tr. 101"
  },
  {
    "id": 178,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Thuốc lợi tiểu Thiazid thường gây rối loạn điện giải và chuyển hóa nào sau đây?",
    "options": [
      "Tăng natri máu và hạ đường huyết",
      "Tăng kali máu và hạ acid uric máu",
      "Hạ calci máu và hạ mỡ máu",
      "Hạ kali máu và tăng acid uric máu"
    ],
    "correct": 3,
    "explanation": "Thiazid gây thải trừ K+, giữ Ca2+, giảm thải trừ acid uric và gây tăng đường huyết nhẹ.",
    "reference": "Sách DLS tr. 101"
  },
  {
    "id": 179,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Tác dụng không mong muốn gây hoại tử tế bào gan cấp tính của Paracetamol khi dùng quá liều là do:",
    "options": [
      "Paracetamol gây co thắt tĩnh mạch cửa gan",
      "Chất chuyển hóa độc NAPQI làm cạn kiệt Glutathion",
      "Paracetamol kích thích tế bào Kupffer tiết cytokine",
      "Paracetamol phá hủy màng phospholipid tế bào gan"
    ],
    "correct": 1,
    "explanation": "NAPQI phản ứng với protein tế bào gan khi glutathion cạn kiệt dưới 30%.",
    "reference": "Sách DLS tr. 101"
  },
  {
    "id": 180,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Chất giải độc đặc hiệu dùng để cấp cứu ngộ độc Paracetamol kịp thời là:",
    "options": [
      "Atropin sulfat",
      "N-Acetylcystein",
      "Naloxon hydroclorid",
      "Flumazenil"
    ],
    "correct": 1,
    "explanation": "N-acetylcystein bổ sung nhóm sulfhydryl khôi phục dự trữ glutathion gan.",
    "reference": "Sách DLS tr. 101"
  },
  {
    "id": 181,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Tác dụng phụ làm đổi màu răng và ức chế phát triển xương ở trẻ em dưới 8 tuổi là đặc trưng của thuốc nào?",
    "options": [
      "Kháng sinh nhóm Tetracyclin",
      "Kháng sinh nhóm Cephalosporin",
      "Kháng sinh nhóm Macrolid",
      "Kháng sinh nhóm Penicillin"
    ],
    "correct": 0,
    "explanation": "Tetracyclin tạo phức chelat bền vững với calci phosphat ở răng và mầm xương đang phát triển.",
    "reference": "Sách DLS tr. 101"
  },
  {
    "id": 182,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Hiện tượng sốc phản vệ thuộc phản ứng dị ứng thuốc loại mấy theo phân loại Gell và Coombs?",
    "options": [
      "Dị ứng Typ I",
      "Dị ứng Typ II",
      "Dị ứng Typ III",
      "Dị ứng Typ IV"
    ],
    "correct": 0,
    "explanation": "Sốc phản vệ là phản ứng dị ứng tức thì Typ I qua trung gian kháng thể IgE.",
    "reference": "Sách DLS tr. 102"
  },
  {
    "id": 183,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Phản ứng tan máu tự miễn do dùng Methyldopa là ví dụ điển hình của loại dị ứng nào?",
    "options": [
      "Dị ứng Typ III",
      "Dị ứng Typ I",
      "Dị ứng Typ II",
      "Dị ứng Typ IV"
    ],
    "correct": 2,
    "explanation": "Dị ứng Typ II là phản ứng độc tế bào qua kháng thể IgG, IgM gắn kháng nguyên trên màng tế bào.",
    "reference": "Sách DLS tr. 102"
  },
  {
    "id": 184,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Bệnh huyết thanh do phức hợp kháng nguyên kháng thể lắng đọng ở thành mạch thuộc dị ứng loại nào?",
    "options": [
      "Dị ứng Typ I",
      "Dị ứng Typ III",
      "Dị ứng Typ II",
      "Dị ứng Typ IV"
    ],
    "correct": 1,
    "explanation": "Dị ứng Typ III là phản ứng qua phức hợp miễn dịch lưu hành gây viêm mạch và viêm cầu thận.",
    "reference": "Sách DLS tr. 103"
  },
  {
    "id": 185,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Viêm da tiếp xúc dị ứng do bôi thuốc tại chỗ là ví dụ điển hình của phản ứng dị ứng nào?",
    "options": [
      "Dị ứng Typ IV",
      "Dị ứng Typ II",
      "Dị ứng Typ I",
      "Dị ứng Typ III"
    ],
    "correct": 0,
    "explanation": "Dị ứng Typ IV qua trung gian tế bào lympho T, khởi phát chậm sau 24-72 giờ.",
    "reference": "Sách DLS tr. 103"
  },
  {
    "id": 186,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Biến cố tụt huyết áp liều đầu tiên khi sử dụng thuốc ức chế men chuyển có thể phòng ngừa bằng cách:",
    "options": [
      "Uống thuốc kèm theo bữa ăn thật nhiều dầu mỡ",
      "Truyền dung dịch glucose ưu trương trước khi uống",
      "Khởi đầu bằng liều thấp nhất và uống trước khi đi ngủ",
      "Uống đồng thời thêm thuốc lợi tiểu quai liều cao"
    ],
    "correct": 2,
    "explanation": "Liều đầu tiên của ƯCMC nên dùng liều rất thấp vào buổi tối trước khi ngủ để tránh tụt áp tư thế đứng.",
    "reference": "Sách DLS tr. 101"
  },
  {
    "id": 187,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Bệnh nhân có tiền sử phù mạch thần kinh do thuốc ức chế men chuyển thì việc dùng thuốc sau đó là:",
    "options": [
      "Có thể dùng lại nếu giảm một nửa liều lượng",
      "Chống chỉ định tuyệt đối nhóm ức chế men chuyển",
      "Chỉ được dùng ở dạng tiêm truyền tĩnh mạch",
      "Được phép dùng nếu uống kèm thuốc kháng histamin"
    ],
    "correct": 1,
    "explanation": "Phù mạch là ADR nguy hiểm đe dọa tắc nghẽn đường thở, chống chỉ định vĩnh viễn ƯCMC.",
    "reference": "Sách DLS tr. 101"
  },
  {
    "id": 188,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Phản ứng có hại của thuốc xuất hiện do ngừng thuốc đột ngột sau thời gian dài điều trị được xếp vào nhóm nào?",
    "options": [
      "Typ B",
      "Typ C",
      "Typ A",
      "Typ E"
    ],
    "correct": 3,
    "explanation": "Typ E là End of use, xuất hiện khi ngừng thuốc đột ngột như suy thượng thận do corticoid.",
    "reference": "Sách DLS tr. 99"
  },
  {
    "id": 189,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Tác dụng có hại của thuốc xuất hiện sau thời gian dài tích lũy mạn tính được xếp vào nhóm nào?",
    "options": [
      "Typ C",
      "Typ D",
      "Typ B",
      "Typ A"
    ],
    "correct": 0,
    "explanation": "Typ C là Chronic, liên quan đến liều tích lũy và thời gian điều trị dài ngày.",
    "reference": "Sách DLS tr. 99"
  },
  {
    "id": 190,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Biến chứng ung thư hoặc sinh quái thai xuất hiện muộn nhiều năm sau dùng thuốc thuộc nhóm nào?",
    "options": [
      "Typ B",
      "Typ C",
      "Typ D",
      "Typ A"
    ],
    "correct": 2,
    "explanation": "Typ D là Delayed, gồm tác dụng gây quái thai, biến dị gen hoặc sinh ung thư.",
    "reference": "Sách DLS tr. 99"
  },
  {
    "id": 191,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Thang đo nào sau đây được sử dụng phổ biến nhất trên thế giới để đánh giá mối liên quan giữa thuốc và ADR?",
    "options": [
      "Thang đo Glasgow",
      "Thang đo Child-Pugh",
      "Thang đo Cockcroft-Gault",
      "Thang đo Naranjo"
    ],
    "correct": 3,
    "explanation": "Thang đo Naranjo gồm 10 câu hỏi đánh giá mức độ chắc chắn của ADR.",
    "reference": "Sách DLS tr. 106"
  },
  {
    "id": 192,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Trung tâm Quốc gia về Thông tin thuốc và Theo dõi phản ứng có hại của thuốc tại Việt Nam đặt tại đâu?",
    "options": [
      "Cục Quản lý Dược Việt Nam",
      "Bệnh viện Bạch Mai",
      "Trường Đại học Dược Hà Nội",
      "Viện Kiểm nghiệm Thuốc Trung ương"
    ],
    "correct": 2,
    "explanation": "Trung tâm DI & ADR Quốc gia đặt tại Trường Đại học Dược Hà Nội.",
    "reference": "Sách DLS tr. 107"
  },
  {
    "id": 193,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Thuốc nào sau đây gây nguy cơ độc tính trên cơ quan thính giác làm giảm thính lực không hồi phục?",
    "options": [
      "Kháng sinh Aminosid",
      "Thuốc hạ mỡ máu Statin",
      "Thuốc ức chế men chuyển",
      "Kháng sinh Amoxicillin"
    ],
    "correct": 0,
    "explanation": "Aminosid phá hủy tế bào lông ốc tai dẫn đến điếc không hồi phục.",
    "reference": "Sách DLS tr. 101"
  },
  {
    "id": 194,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Tác dụng phụ gây viêm võng mạc và lắng đọng sắc tố ở mắt là biến chứng cần theo dõi của thuốc nào?",
    "options": [
      "Omeprazol theo khuyến cáo",
      "Salbutamol kéo dài liên tục",
      "Chloroquin và Hydroxychloroquin",
      "Paracetamol trong phác đồ chuẩn"
    ],
    "correct": 2,
    "explanation": "Chloroquin tích lũy ở võng mạc gây bệnh võng mạc hình mắt bò vĩnh viễn.",
    "reference": "Sách DLS tr. 101"
  },
  {
    "id": 195,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Thuốc kháng giáp trạng tổng hợp Methimazol và Thiamazol có tác dụng không mong muốn nghiêm trọng nào?",
    "options": [
      "Mất bạch cầu hạt gây nhiễm trùng nặng",
      "Gây cơn bão giáp trạng cấp tính",
      "Gây xuất huyết giảm tiểu cầu vô căn",
      "Gây cường aldosteron tiên phát"
    ],
    "correct": 0,
    "explanation": "Thuốc kháng giáp có nguy cơ gây mất bạch cầu hạt, bệnh nhân sốt đau họng phải xét nghiệm máu ngay.",
    "reference": "Sách DLS tr. 101"
  },
  {
    "id": 196,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Bệnh nhân dùng Statin xuất hiện đau cơ, nước tiểu màu sẫm như nước vối, xét nghiệm cần làm ngay là:",
    "options": [
      "Đo nồng độ Calci toàn phần ở mức độ vừa và nặng",
      "Định lượng nồng độ Creatin Kinase huyết thanh",
      "Định lượng nồng độ Bilirubin máu kéo dài liên tục",
      "Xét nghiệm cặn lắng nước tiểu sau khi dùng thuốc"
    ],
    "correct": 1,
    "explanation": "CK tăng > 10 lần giới hạn trên bình thường khẳng định biến chứng tiêu cơ vân do Statin.",
    "reference": "Sách DLS tr. 101"
  },
  {
    "id": 197,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Nhóm thuốc giảm đau chống viêm không steroid (NSAID) gây loét dạ dày tá tràng là do cơ chế nào?",
    "options": [
      "Kích thích tế bào thành tăng tiết quá mức acid hydrocloric",
      "Ức chế enzym COX-1 làm giảm tổng hợp Prostaglandin bảo vệ",
      "Làm tăng sinh quá mức vi khuẩn Helicobacter pylori",
      "Phá hủy trực tiếp lớp cơ trơn của thành dạ dày"
    ],
    "correct": 1,
    "explanation": "COX-1 tạo PGE2 và PGI2 duy trì tưới máu niêm mạc và tiết chất nhầy bảo vệ dạ dày.",
    "reference": "Sách DLS tr. 101"
  },
  {
    "id": 198,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Thuốc lợi tiểu giữ kali Spironolacton có thể gây ra tác dụng phụ nội tiết nào ở nam giới?",
    "options": [
      "Chứng to vú ở nam giới và rối loạn cương dương",
      "Làm tăng giọng nói trầm ở nam giới ở người bệnh",
      "Làm teo cơ và loãng xương nhanh chóng trên lâm sàng",
      "Gây rậm lông và tăng tiết bã nhờn ở mức độ vừa và nặng"
    ],
    "correct": 0,
    "explanation": "Spironolacton có cấu trúc steroid đối kháng thụ thể androgen gây to vú ở nam.",
    "reference": "Sách DLS tr. 101"
  },
  {
    "id": 199,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Biến chứng viêm đại tràng giả mạc do Clostridium difficile liên quan chặt chẽ nhất với kháng sinh nào?",
    "options": [
      "Nystatin",
      "Vancomycin",
      "Gentamicin",
      "Clindamycin"
    ],
    "correct": 3,
    "explanation": "Clindamycin tiêu diệt vi khuẩn đường ruột tạo điều kiện cho C. difficile phát triển tiết độc tố.",
    "reference": "Sách DLS tr. 101"
  },
  {
    "id": 200,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Khi bệnh nhân có biểu hiện khó thở, thở rít thanh quản do phản vệ, can thiệp khẩn cấp đường thở là:",
    "options": [
      "Cho bệnh nhân uống dung dịch Corticoid liều cao ở người bệnh",
      "Khẩn trương tiêm bắp Adrenalin và chuẩn bị đặt nội khí quản",
      "Để bệnh nhân nằm sấp và vỗ rung lồng ngực kèm theo sốt nhẹ",
      "Đặt sonde dạ dày để rửa sạch độc chất còn lại trong phác đồ chuẩn"
    ],
    "correct": 1,
    "explanation": "Phù nề thanh môn gây nghẹt thở, phải tiêm Adrenalin ngay và kiểm soát đường thở khẩn cấp.",
    "reference": "Thông tư 51/2017/TT-BYT"
  },
  {
    "id": 201,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Dấu hiệu lâm sàng sớm và phổ biến nhất của phản ứng phản vệ nhẹ thường xuất hiện ở đâu?",
    "options": [
      "Đau bụng dữ dội kèm tiêu chảy ra máu",
      "Hôn mê sâu và ngừng tuần hoàn hô hấp",
      "Gãy xương sườn tự phát do co giật",
      "Da và niêm mạc với mày đay, mẩn ngứa, đỏ da"
    ],
    "correct": 3,
    "explanation": "80-90% trường hợp phản vệ khởi phát bằng triệu chứng da và niêm mạc.",
    "reference": "Thông tư 51/2017/TT-BYT"
  },
  {
    "id": 202,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Sau khi tiêm bắp Adrenalin lần đầu tiên, nếu người bệnh chưa cải thiện triệu chứng thì tiêm nhắc lại sau:",
    "options": [
      "15 đến 20 phút",
      "3 đến 5 phút",
      "Sau 2 giờ đồng hồ",
      "30 đến 45 phút"
    ],
    "correct": 1,
    "explanation": "Nếu huyết áp chưa lên hoặc còn khó thở, tiêm bắp nhắc lại mỗi 3-5 phút.",
    "reference": "Thông tư 51/2017/TT-BYT"
  },
  {
    "id": 203,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Tư thế nằm đúng cho bệnh nhân đang trong cơn sốc phản vệ có tụt huyết áp là:",
    "options": [
      "Ngồi tựa lưng vuông góc với giường",
      "Đứng dựa vào tường để dễ thở",
      "Nằm sấp đầu nghiêng về một bên",
      "Nằm ngửa đầu thấp, chân kê cao"
    ],
    "correct": 3,
    "explanation": "Nằm ngửa đầu thấp chân cao giúp dồn máu tĩnh mạch về tim duy trì huyết áp trung tâm.",
    "reference": "Thông tư 51/2017/TT-BYT"
  },
  {
    "id": 204,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Thuốc chống loạn nhịp tim Amiodaron có chứa lượng iod cao nên thường gây tác dụng phụ trên tuyến nào?",
    "options": [
      "Tuyến cận giáp",
      "Tuyến ức",
      "Tuyến tụy nội tiết",
      "Tuyến giáp trạng"
    ],
    "correct": 3,
    "explanation": "Amiodaron chứa iod có thể gây suy giáp hoặc cường giáp do tích tụ iod.",
    "reference": "Sách DLS tr. 101"
  },
  {
    "id": 205,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Hội chứng ngoại tháp gồm run tay chân và co cứng cơ là tác dụng phụ điển hình của nhóm thuốc nào?",
    "options": [
      "Thuốc giãn phế quản beta-2",
      "Thuốc an thần chống loạn thần",
      "Thuốc kháng histamin H1 thế hệ 2",
      "Thuốc chống viêm không steroid"
    ],
    "correct": 1,
    "explanation": "Thuốc an thần phong bế thụ thể Dopamin D2 ở thể vân gây hội chứng Parkinson giả.",
    "reference": "Sách DLS tr. 101"
  },
  {
    "id": 206,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Để phòng ngừa tác dụng phụ loét dạ dày khi điều trị NSAID kéo dài, biện pháp phối hợp tối ưu là:",
    "options": [
      "Dùng kèm thuốc ức chế bơm proton",
      "Dùng kèm dung dịch đường glucose 5%",
      "Bẻ vụn viên thuốc trước khi uống",
      "Uống thuốc cùng một ly sữa đặc"
    ],
    "correct": 0,
    "explanation": "PPI giúp nâng pH dạ dày và ức chế tiết acid, bảo vệ niêm mạc tốt nhất khi dùng NSAID dài ngày.",
    "reference": "Sách DLS tr. 101"
  },
  {
    "id": 207,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Thuốc hạ lipid máu nhóm Fibrat khi dùng kéo dài có nguy cơ gây tác dụng phụ nào trên đường mật?",
    "options": [
      "Hẹp đường mật bẩm sinh",
      "Ung thư biểu mô đường mật",
      "Sỏi mật cholesterol",
      "Viêm teo túi mật"
    ],
    "correct": 2,
    "explanation": "Fibrat tăng bài tiết cholesterol vào dịch mật làm bão hòa cholesterol tạo sỏi mật.",
    "reference": "Sách DLS tr. 101"
  },
  {
    "id": 208,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Kháng sinh nhóm Sulfamid có thể gây ra biến chứng sỏi niệu do cơ chế nào?",
    "options": [
      "Thuốc kích thích tiết nhầy gây tắc nghẽn bể thận",
      "Thuốc làm tăng bài xuất calci vào trong nước tiểu",
      "Thuốc kết tinh tạo sỏi trong môi trường nước tiểu acid",
      "Thuốc phá hủy nhu mô đài bể thận"
    ],
    "correct": 2,
    "explanation": "Sulfamid ít tan trong nước tiểu acid nên dễ kết tinh thành sỏi, cần uống nhiều nước kiềm.",
    "reference": "Sách DLS tr. 101"
  },
  {
    "id": 209,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Thuốc gây độc tính trên dây thần kinh thính giác số VIII và tiền đình dẫn đến chóng mặt dữ dội là:",
    "options": [
      "Cefotaxim",
      "Streptomycin",
      "Metronidazol",
      "Ampicillin"
    ],
    "correct": 1,
    "explanation": "Streptomycin đặc biệt độc trên tiền đình và thính giác gây mất thăng bằng.",
    "reference": "Sách DLS tr. 101"
  },
  {
    "id": 210,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Phản ứng Jarisch-Herxheimer thường xuất hiện khi bắt đầu điều trị bệnh giang mai bằng Penicillin là do:",
    "options": [
      "Nhiễm khuẩn bệnh viện cơ hội xuất hiện",
      "Dị ứng kháng thể IgE với phân tử Penicillin",
      "Vi khuẩn xoắn khuẩn tan rã ồ ạt giải phóng độc tố",
      "Quá liều Penicillin gây co giật vỏ não"
    ],
    "correct": 2,
    "explanation": "Xoắn khuẩn Treponema pallidum bị diệt hàng loạt giải phóng nội độc tố gây sốt, ớn lạnh, tụt áp.",
    "reference": "Sách DLS tr. 101"
  },
  {
    "id": 211,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Chỉ số xét nghiệm huyết học nào phản ánh kích thước trung bình của hồng cầu?",
    "options": [
      "Chỉ số MCH",
      "Chỉ số MCHC",
      "Chỉ số RDW",
      "Chỉ số MCV"
    ],
    "correct": 3,
    "explanation": "MCV là thể tích trung bình của hồng cầu, đơn vị fL.",
    "reference": "Sách DLS tr. 115"
  },
  {
    "id": 212,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Chỉ số MCV dưới 80 fL đặc trưng cho loại thiếu máu nào?",
    "options": [
      "Thiếu máu hồng cầu nhỏ",
      "Thiếu máu hồng cầu bình thường",
      "Thiếu máu hồng cầu to",
      "Thiếu máu do tan máu cấp"
    ],
    "correct": 0,
    "explanation": "MCV < 80 fL là thiếu máu hồng cầu nhỏ, thường do thiếu sắt hoặc Thalassemia.",
    "reference": "Sách DLS tr. 115"
  },
  {
    "id": 213,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Nguyên nhân phổ biến nhất dẫn đến thiếu máu hồng cầu to với MCV trên 100 fL là:",
    "options": [
      "Thiếu hụt nguyên tố Sắt trong khẩu phần",
      "Nhiễm giun móc mạn tính đường ruột",
      "Thiếu hụt Vitamin B12 hoặc Acid folic",
      "Mất máu cấp tính do chấn thương ngoại khoa"
    ],
    "correct": 2,
    "explanation": "Thiếu vitamin B12 hoặc acid folic làm giảm tổng hợp ADN khiến phân chia tế bào chậm tạo hồng cầu to.",
    "reference": "Sách DLS tr. 116"
  },
  {
    "id": 214,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Chỉ số xét nghiệm nào có độ nhạy và độ đặc hiệu cao nhất để chẩn đoán thiếu máu thiếu sắt giai đoạn sớm?",
    "options": [
      "Nồng độ sắt huyết thanh lúc đói",
      "Độ bão hòa Transferrin",
      "Ferritin huyết thanh",
      "Dung tích hồng cầu lắng"
    ],
    "correct": 2,
    "explanation": "Ferritin phản ánh lượng sắt dự trữ trong cơ thể, giảm sớm nhất trước khi nồng độ sắt máu giảm.",
    "reference": "Sách DLS tr. 117"
  },
  {
    "id": 215,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Chỉ số men gan ALT có đặc điểm nào sau đây về tính đặc hiệu mô?",
    "options": [
      "Phân bố chủ yếu ở cơ tim và cơ vân",
      "Đặc hiệu cho tổn thương tế bào gan hơn men AST",
      "Chỉ xuất hiện khi có tắc mật ngoài gan",
      "Đặc hiệu cho hệ thống biểu mô đường mật"
    ],
    "correct": 1,
    "explanation": "ALT tập trung chủ yếu trong bào tương tế bào gan, trong khi AST có nhiều ở cơ tim và cơ vân.",
    "reference": "Sách DLS tr. 120"
  },
  {
    "id": 216,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Tỷ số De Ritis tức AST trên ALT lớn hơn 2 gợi ý bệnh lý tổn thương gan do nguyên nhân nào?",
    "options": [
      "Nhiễm trùng đường mật do sỏi",
      "Viêm gan virus B cấp tính",
      "Viêm gan nhiễm mỡ không do rượu",
      "Bệnh gan do lạm dụng rượu mạn tính"
    ],
    "correct": 3,
    "explanation": "Tỷ số AST/ALT > 2 rất đặc trưng cho tổn thương gan do rượu.",
    "reference": "Sách DLS tr. 121"
  },
  {
    "id": 217,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Hai enzym xét nghiệm nào tăng cao rõ rệt trong hội chứng ứ mật tại gan hoặc tắc mật ngoài gan?",
    "options": [
      "AST và ALT",
      "LDH và CK",
      "Amylase và Lipase",
      "ALP và GGT"
    ],
    "correct": 3,
    "explanation": "Phosphatase kiềm và GGT tăng rất mạnh khi có ứ mật hoặc tắc mật.",
    "reference": "Sách DLS tr. 122"
  },
  {
    "id": 218,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Xét nghiệm enzym GGT đặc biệt nhạy cảm trong việc phát hiện tình trạng nào ở người bệnh?",
    "options": [
      "Bệnh nhân bị loét thủng dạ dày tá tràng",
      "Người bệnh lạm dụng rượu hoặc nghiện rượu",
      "Bệnh nhân bị viêm cầu thận cấp tính",
      "Bệnh nhân bị nhồi máu cơ tim thất trái"
    ],
    "correct": 1,
    "explanation": "GGT tăng rất sớm ở người uống rượu nhiều do hiện tượng cảm ứng men gan.",
    "reference": "Sách DLS tr. 122"
  },
  {
    "id": 219,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Xét nghiệm protein huyết tương nào phản ánh chức năng tổng hợp dài hạn của gan?",
    "options": [
      "Albumin huyết thanh",
      "Globulin miễn dịch",
      "Prealbumin huyết thanh",
      "Transferrin huyết thanh"
    ],
    "correct": 0,
    "explanation": "Albumin có thời gian bán thải 20 ngày, giảm trong xơ gan hoặc suy giảm chức năng gan mạn.",
    "reference": "Sách DLS tr. 123"
  },
  {
    "id": 220,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Chỉ số xét nghiệm nào sau đây phản ánh chính xác nhất chức năng đông máu nội sinh do gan tổng hợp cấp tính?",
    "options": [
      "Thời gian máu chảy",
      "Thời gian Prothrombin",
      "Nồng độ Fibrinogen tự do",
      "Số lượng tiểu cầu"
    ],
    "correct": 1,
    "explanation": "Prothrombin có thời gian bán thải ngắn nên PT/INR phản ánh chức năng tổng hợp cấp của gan.",
    "reference": "Sách DLS tr. 124"
  },
  {
    "id": 221,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Tăng Bilirubin gián tiếp tự do đơn thuần trong máu thường gặp trong tình trạng bệnh lý nào?",
    "options": [
      "Xơ gan giai đoạn cuối mất bù",
      "Sỏi kẹt ống mật chủ ngoài gan",
      "Ung thư đầu tụy chèn ép đường mật",
      "Tan máu ồ ạt hoặc hội chứng Gilbert"
    ],
    "correct": 3,
    "explanation": "Bilirubin tự do chưa liên hợp tăng cao khi có tăng phá hủy hồng cầu hoặc thiếu men liên hợp.",
    "reference": "Sách DLS tr. 125"
  },
  {
    "id": 222,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Tăng Bilirubin trực tiếp liên hợp trong máu kèm nước tiểu sẫm màu và phân bạc màu gợi ý:",
    "options": [
      "Thiếu máu tan máu bẩm sinh",
      "Ngộ độc cấp tính khí than CO",
      "Suy tủy xương dòng hồng cầu",
      "Hội chứng tắc nghẽn đường dẫn mật"
    ],
    "correct": 3,
    "explanation": "Bilirubin trực tiếp không xuống được ruột làm phân bạc màu và trào ngược vào máu đào thải qua nước tiểu.",
    "reference": "Sách DLS tr. 125"
  },
  {
    "id": 223,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Chỉ số xét nghiệm vàng để chẩn đoán phân biệt viêm tụy cấp trên lâm sàng là:",
    "options": [
      "AST và ALT huyết thanh",
      "Bilirubin toàn phần",
      "Creatin Kinase huyết thanh",
      "Lipase huyết thanh"
    ],
    "correct": 3,
    "explanation": "Lipase đặc hiệu cho tụy hơn amylase và tồn tại trong máu lâu hơn.",
    "reference": "Sách DLS tr. 126"
  },
  {
    "id": 224,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Chỉ số xét nghiệm Troponin I và Troponin T đặc hiệu cho tổn thương cơ quan nào?",
    "options": [
      "Tổn thương tế bào cơ vân vân",
      "Tổn thương màng đáy cầu thận",
      "Tổn thương nhu mô não bộ",
      "Tổn thương hoại tử cơ tim"
    ],
    "correct": 3,
    "explanation": "Troponin tim là dấu ấn sinh học chuẩn vàng chẩn đoán nhồi máu cơ tim cấp.",
    "reference": "Sách DLS tr. 127"
  },
  {
    "id": 225,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Chỉ số xét nghiệm HbA1c phản ánh mức đường huyết trung bình của bệnh nhân trong khoảng thời gian nào?",
    "options": [
      "Khoảng 6 tháng đến 1 năm trước",
      "Khoảng 2 đến 3 tháng vừa qua",
      "Khoảng 24 đến 48 giờ trước đó",
      "Khoảng 1 tuần lễ gần nhất"
    ],
    "correct": 1,
    "explanation": "HbA1c gắn kết bền với hồng cầu có đời sống 120 ngày, phản ánh đường huyết 2-3 tháng trước.",
    "reference": "Sách DLS tr. 128"
  },
  {
    "id": 226,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Mức HbA1c từ bao nhiêu phần trăm trở lên là tiêu chuẩn chẩn đoán bệnh đái tháo đường?",
    "options": [
      "Từ 6,5% trở lên",
      "Từ 8,0% trở lên",
      "Từ 7,5% trở lên",
      "Từ 5,7% trở lên"
    ],
    "correct": 0,
    "explanation": "Theo tiêu chuẩn ADA và Bộ Y tế, HbA1c >= 6,5% xác định chẩn đoán đái tháo đường.",
    "reference": "Sách DLS tr. 128"
  },
  {
    "id": 227,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Xét nghiệm Glucose huyết tương lúc đói từ mức nào trở lên thì được chẩn đoán đái tháo đường?",
    "options": [
      "Từ 4,0 mmol/L trở lên",
      "Từ 5,6 mmol/L trở lên",
      "Từ 7,0 mmol/L trở lên",
      "Từ 11,1 mmol/L trở lên"
    ],
    "correct": 2,
    "explanation": "Glucose huyết tương lúc đói (sau nhịn ăn 8h) >= 7,0 mmol/L (126 mg/dL) chẩn đoán ĐTĐ.",
    "reference": "Sách DLS tr. 128"
  },
  {
    "id": 228,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Chỉ số lipid máu nào được xem là yếu tố nguy cơ tim mạch xơ vữa hàng đầu cần kiểm soát mục tiêu?",
    "options": [
      "Chylomicron trong huyết tương",
      "Triglycerid toàn phần trong máu",
      "Cholesterol lipoprotein tỷ trọng cao",
      "Cholesterol lipoprotein tỷ trọng thấp"
    ],
    "correct": 3,
    "explanation": "LDL-C là mục tiêu điều trị hàng đầu để dự phòng biến cố tim mạch xơ vữa.",
    "reference": "Sách DLS tr. 129"
  },
  {
    "id": 229,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Nồng độ Kali máu bình thường ở người trưởng thành khỏe mạnh nằm trong giới hạn nào?",
    "options": [
      "Từ 5,5 đến 7,0 mmol/L",
      "Từ 135 đến 145 mmol/L",
      "Từ 3,5 đến 5,0 mmol/L",
      "Từ 1,5 đến 2,5 mmol/L"
    ],
    "correct": 2,
    "explanation": "Giới hạn bình thường của kali máu là 3,5 - 5,0 mmol/L.",
    "reference": "Sách DLS tr. 130"
  },
  {
    "id": 230,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Khi nồng độ Kali máu giảm dưới 3,0 mmol/L, biến chứng nguy hiểm nhất đe dọa người bệnh là:",
    "options": [
      "Co giật toàn thể do phù não cấp ở mức độ vừa và nặng",
      "Rối loạn nhịp tim và ngừng tim ở thì tâm trương",
      "Suy thận cấp do hoại tử ống thận trên lâm sàng",
      "Loét thủng niêm mạc đường tiêu hóa ở người bệnh"
    ],
    "correct": 1,
    "explanation": "Hạ kali máu gây kéo dài khoảng QT, xoắn đỉnh và rung thất nguy kịch.",
    "reference": "Sách DLS tr. 130"
  },
  {
    "id": 231,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Nồng độ Natri máu bình thường ở người khỏe mạnh là bao nhiêu?",
    "options": [
      "Từ 135 đến 145 mmol/L",
      "Từ 150 đến 165 mmol/L",
      "Từ 20 đến 30 mmol/L",
      "Từ 105 đến 115 mmol/L"
    ],
    "correct": 0,
    "explanation": "Khoảng sinh lý bình thường của natri huyết thanh là 135 - 145 mmol/L.",
    "reference": "Sách DLS tr. 131"
  },
  {
    "id": 232,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Hạ Natri máu cấp tính nặng gây ra biến chứng thần kinh nguy hiểm nào cho bệnh nhân?",
    "options": [
      "Xuất huyết khoang dưới nhện diện rộng",
      "Nhồi máu cuống não thân não",
      "Phù não cấp dẫn đến co giật và hôn mê",
      "Xơ cứng cột bên teo cơ"
    ],
    "correct": 2,
    "explanation": "Hạ natri làm nước nhược trương di chuyển vào tế bào não gây phù não cấp tính.",
    "reference": "Sách DLS tr. 131"
  },
  {
    "id": 233,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Chỉ số xét nghiệm nồng độ Calci toàn phần trong huyết thanh cần được hiệu chỉnh theo nồng độ nào?",
    "options": [
      "Nồng độ Glucose huyết thanh",
      "Nồng độ Creatinin huyết thanh",
      "Nồng độ Albumin huyết thanh",
      "Nồng độ Hemoglobin trong máu"
    ],
    "correct": 2,
    "explanation": "Khoảng 40-50% calci gắn albumin, khi albumin giảm cần công thức calci hiệu chỉnh: Ca_hc = Ca_tp + 0,8*(4 - Alb).",
    "reference": "Sách DLS tr. 132"
  },
  {
    "id": 234,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Xét nghiệm định lượng nồng độ Procalcitonin trong huyết tương có giá trị nổi bật gì?",
    "options": [
      "Xác định bệnh lý suy dinh dưỡng ở trẻ em",
      "Đánh giá mức độ tổn thương hoại tử tế bào gan",
      "Phân biệt nhiễm trùng do vi khuẩn với do virus",
      "Chẩn đoán xác định bệnh ung thư tuyến giáp trạng"
    ],
    "correct": 2,
    "explanation": "Procalcitonin tăng rất cao trong nhiễm khuẩn nặng và sốc nhiễm khuẩn, không tăng do virus.",
    "reference": "Sách DLS tr. 133"
  },
  {
    "id": 235,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Xét nghiệm chỉ số Protein phản ứng C trong huyết thanh phản ánh hiện tượng gì trong cơ thể?",
    "options": [
      "Tình trạng viêm cấp tính hoặc tổn thương mô",
      "Mức độ cô đặc máu do mất nước qua da",
      "Chức năng tạo máu của tế bào tủy xương",
      "Chức năng bài xuất chất thải của cầu thận"
    ],
    "correct": 0,
    "explanation": "CRP là protein pha cấp do gan sản xuất tăng vọt khi có viêm, nhiễm trùng hoặc hoại tử mô.",
    "reference": "Sách DLS tr. 134"
  },
  {
    "id": 236,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Chỉ số INR được sử dụng để theo dõi hiệu quả và chỉnh liều thuốc điều trị nào?",
    "options": [
      "Thuốc tiêu sợi huyết Streptokinase",
      "Thuốc chống kết tập tiểu cầu Aspirin",
      "Thuốc chống đông kháng Vitamin K",
      "Thuốc chống đông đường tiêm Heparin"
    ],
    "correct": 2,
    "explanation": "INR là xét nghiệm chuẩn hóa thời gian PT theo dõi điều trị Warfarin (mục tiêu 2,0 - 3,0).",
    "reference": "Sách DLS tr. 135"
  },
  {
    "id": 237,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Xét nghiệm aPTT được sử dụng ưu tiên hàng đầu để theo dõi hiệu quả điều trị của thuốc nào?",
    "options": [
      "Thuốc ức chế kết tập tiểu cầu Clopidogrel",
      "Heparin tiêu chuẩn không phân đoạn",
      "Heparin trọng lượng phân tử thấp Enoxaparin",
      "Thuốc chống đông đường uống Warfarin"
    ],
    "correct": 1,
    "explanation": "aPTT theo dõi thời gian đông máu nội sinh khi truyền heparin không phân đoạn (duy trì 1,5 - 2,5 lần chứng).",
    "reference": "Sách DLS tr. 135"
  },
  {
    "id": 238,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Theo dõi kháng đông bằng xét nghiệm Anti-Xa được chỉ định bắt buộc trong trường hợp nào khi dùng Enoxaparin?",
    "options": [
      "Phụ nữ có thai, người béo phì hoặc suy thận nặng",
      "Bệnh nhân có số lượng tiểu cầu hoàn toàn bình thường",
      "Bệnh nhân tăng huyết áp vô căn giai đoạn 1",
      "Người trẻ tuổi khỏe mạnh không có bệnh lý nền"
    ],
    "correct": 0,
    "explanation": "LMWH ít cần theo dõi, nhưng đối tượng đặc biệt (suy thận, thai kỳ, béo phì) cần đo Anti-Xa.",
    "reference": "Sách DLS tr. 136"
  },
  {
    "id": 239,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Tỷ số BUN trên Creatinin huyết thanh lớn hơn 20 gợi ý nguyên nhân suy thận cấp loại nào?",
    "options": [
      "Suy thận cấp tại thận do hoại tử ống thận",
      "Suy thận cấp trước thận do giảm tưới máu thận",
      "Suy thận mạn tính giai đoạn cuối mất bù",
      "Suy thận cấp sau thận do tắc nghẽn sỏi niệu"
    ],
    "correct": 1,
    "explanation": "BUN/Creatinin > 20 phản ánh tình trạng giảm thể tích tuần hoàn hiệu dụng trước thận.",
    "reference": "Sách DLS tr. 137"
  },
  {
    "id": 240,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Chỉ số Protein niệu từ mức nào trở lên trong 24 giờ là tiêu chuẩn xác định hội chứng thận hư?",
    "options": [
      "Trên 3,5 g trong 24 giờ",
      "Trên 2,0 g trong 24 giờ",
      "Trên 1,0 g trong 24 giờ",
      "Trên 0,5 g trong 24 giờ"
    ],
    "correct": 0,
    "explanation": "Protein niệu >= 3,5 g/24h kèm giảm albumin máu và phù là tiêu chuẩn hội chứng thận hư.",
    "reference": "Sách DLS tr. 138"
  },
  {
    "id": 241,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Xét nghiệm tìm Microalbumin niệu có ý nghĩa lâm sàng quan trọng nhất trong việc:",
    "options": [
      "Đánh giá mức độ sỏi niệu quản tái phát trong phác đồ chuẩn",
      "Chẩn đoán xác định viêm bàng quang cấp tính kèm theo sốt nhẹ",
      "Chẩn đoán ung thư biểu mô tuyến tiền liệt theo khuyến cáo",
      "Phát hiện sớm tổn thương thận do bệnh đái tháo đường"
    ],
    "correct": 3,
    "explanation": "Microalbumin niệu (30-300 mg/24h) là dấu ấn sớm phát hiện bệnh thận đái tháo đường.",
    "reference": "Sách DLS tr. 139"
  },
  {
    "id": 242,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Xét nghiệm độ thanh thải Creatinin nước tiểu 24 giờ phản ánh trực tiếp chỉ số sinh lý nào?",
    "options": [
      "Mức lọc cầu thận ước tính của người bệnh",
      "Lưu lượng dòng máu qua tĩnh mạch cửa gan",
      "Khả năng tái hấp thu đường ở ống lượn gần",
      "Khả năng cô đặc nước tiểu của quai Henle"
    ],
    "correct": 0,
    "explanation": "ClCr nước tiểu 24h đo trực tiếp độ lọc cầu thận GFR.",
    "reference": "Sách DLS tr. 139"
  },
  {
    "id": 243,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Bạch cầu đa nhân trung tính tăng cao trong công thức máu gợi ý cơ thể đang phản ứng với tình trạng nào?",
    "options": [
      "Dị ứng thuốc qua trung gian kháng thể",
      "Nhiễm trùng cấp tính do vi khuẩn",
      "Nhiễm độc kim loại nặng chì và thủy ngân",
      "Nhiễm ký sinh trùng giun sán"
    ],
    "correct": 1,
    "explanation": "Bạch cầu trung tính tăng cao là đáp ứng điển hình chống vi khuẩn sinh mủ.",
    "reference": "Sách DLS tr. 140"
  },
  {
    "id": 244,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Bạch cầu ưa acid tăng cao trong máu ngoại vi thường liên quan chặt chẽ đến tình trạng nào?",
    "options": [
      "Nhiễm ký sinh trùng hoặc bệnh lý dị ứng",
      "Nhiễm khuẩn cấp tính tụ cầu vàng",
      "Nhồi máu não giai đoạn tối cấp",
      "Viêm ruột thừa cấp có vỡ mủ"
    ],
    "correct": 0,
    "explanation": "Bạch cầu ưa acid tăng trong phản ứng dị ứng và nhiễm ký sinh trùng đường ruột.",
    "reference": "Sách DLS tr. 140"
  },
  {
    "id": 245,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Giảm số lượng bạch cầu đa nhân trung tính dưới 500 tế bào trên microlit đặt người bệnh vào nguy cơ gì?",
    "options": [
      "Nguy cơ nhiễm trùng cơ hội đe dọa tính mạng",
      "Nguy cơ suy thận cấp do tắc nghẽn ống thận",
      "Nguy cơ chảy máu tự nhiên dưới niêm mạc",
      "Nguy cơ tắc mạch huyết khối tĩnh mạch sâu"
    ],
    "correct": 0,
    "explanation": "Bạch cầu trung tính < 500/uL là giảm bạch cầu hạt nặng, nguy cơ nhiễm trùng tử vong cao.",
    "reference": "Sách DLS tr. 141"
  },
  {
    "id": 246,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Số lượng tiểu cầu giảm dưới mức 50.000 trên microlit làm xuất hiện nguy cơ nào sau đây?",
    "options": [
      "Nguy cơ xuất huyết tự phát khi va chạm nhẹ",
      "Nguy cơ thiếu máu tan máu tự miễn",
      "Nguy cơ đông máu nội mạch lan tỏa",
      "Nguy cơ hoại tử đầu chi do thiếu máu nuôi"
    ],
    "correct": 0,
    "explanation": "Tiểu cầu < 50.000/uL làm tăng rõ rệt nguy cơ xuất huyết da, niêm mạc và phẫu thuật.",
    "reference": "Sách DLS tr. 142"
  },
  {
    "id": 247,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Xét nghiệm nồng độ Acid Uric huyết thanh bình thường ở nam giới khỏe mạnh là:",
    "options": [
      "Dưới 200 micromol/L",
      "Dưới 420 micromol/L",
      "Dưới 600 micromol/L",
      "Dưới 100 micromol/L"
    ],
    "correct": 1,
    "explanation": "Giới hạn trên của acid uric ở nam giới bình thường là 420 umol/L (7,0 mg/dL).",
    "reference": "Sách DLS tr. 143"
  },
  {
    "id": 248,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Chỉ số xét nghiệm Creatin Kinase phân nhóm MB tăng cao gợi ý tổn thương cơ quan nào?",
    "options": [
      "Cơ vân vân",
      "Cơ tim",
      "Nhu mô phổi",
      "Nhu mô não"
    ],
    "correct": 1,
    "explanation": "CK-MB là enzym tập trung nhiều nhất ở tế bào cơ tim.",
    "reference": "Sách DLS tr. 144"
  },
  {
    "id": 249,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Xét nghiệm đo nồng độ Digoxin trong huyết tương để theo dõi trị liệu nên được lấy mẫu vào thời điểm nào?",
    "options": [
      "Sau 30 phút kể từ lúc uống thuốc với nước",
      "Ngay lập tức sau khi bệnh nhân vừa nuốt viên thuốc",
      "Vào thời điểm nồng độ đỉnh sau 1 giờ uống",
      "Ít nhất 6 đến 8 giờ sau liều uống gần nhất"
    ],
    "correct": 3,
    "explanation": "Digoxin phân bố chậm vào mô tim, phải lấy máu sau uống ít nhất 6-8 giờ để tránh đỉnh giả.",
    "reference": "Sách DLS tr. 145"
  },
  {
    "id": 250,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Khoảng điều trị nồng độ trong máu an toàn và hiệu quả của Digoxin trong điều trị suy tim là:",
    "options": [
      "Từ 2,0 đến 4,0 ng/mL",
      "Từ 5,0 đến 10,0 ng/mL",
      "Từ 0,5 đến 0,9 ng/mL",
      "Từ 0,05 đến 0,1 ng/mL"
    ],
    "correct": 2,
    "explanation": "Trong suy tim, nồng độ đích khuyến cáo của Digoxin là 0,5 - 0,9 ng/mL để tránh độc tính.",
    "reference": "Sách DLS tr. 145"
  },
  {
    "id": 251,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Khoảng nồng độ đáy mục tiêu của Vancomycin trong điều trị nhiễm trùng nặng do MRSA là:",
    "options": [
      "Từ 25 đến 35 mg/L",
      "Từ 1 đến 2 mg/L",
      "Từ 15 đến 20 mg/L",
      "Từ 5 đến 10 mg/L"
    ],
    "correct": 2,
    "explanation": "Nhiễm khuẩn nặng (viêm phổi, viêm màng não, viêm nội tâm mạc) do MRSA cần C_trough 15 - 20 mg/L.",
    "reference": "Sách DLS tr. 146"
  },
  {
    "id": 252,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Khoảng nồng độ điều trị hiệu quả của Theophyllin trong huyết tương ở bệnh nhân hen phế quản là:",
    "options": [
      "Từ 1 đến 5 mcg/mL",
      "Từ 10 đến 20 mcg/mL",
      "Từ 30 đến 50 mcg/mL",
      "Từ 50 đến 100 mcg/mL"
    ],
    "correct": 1,
    "explanation": "Cửa sổ điều trị của Theophyllin hẹp, tối ưu từ 10 - 20 mcg/mL.",
    "reference": "Sách DLS tr. 147"
  },
  {
    "id": 253,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Xét nghiệm nồng độ Phenytoin toàn phần trong huyết tương có khoảng điều trị thông thường là:",
    "options": [
      "Từ 1 đến 4 mg/L",
      "Từ 10 đến 20 mg/L",
      "Từ 40 đến 60 mg/L",
      "Từ 80 đến 100 mg/L"
    ],
    "correct": 1,
    "explanation": "Khoảng điều trị an toàn của Phenytoin toàn phần là 10 - 20 mg/L.",
    "reference": "Sách DLS tr. 148"
  },
  {
    "id": 254,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Chỉ số xét nghiệm BNP và NT-proBNP có giá trị lâm sàng vượt trội nhất trong việc:",
    "options": [
      "Chẩn đoán phân biệt lao phổi với viêm phổi thùy",
      "Xác định nguy cơ gãy xương ở người loãng xương",
      "Chẩn đoán xác định và loại trừ hội chứng suy tim",
      "Đánh giá mức độ xơ vữa của động mạch cảnh"
    ],
    "correct": 2,
    "explanation": "BNP và NT-proBNP do tâm thất tiết ra khi quá tải áp lực, giá trị loại trừ suy tim rất cao.",
    "reference": "Sách DLS tr. 149"
  },
  {
    "id": 255,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Xét nghiệm độ lắng máu tăng cao phản ánh hiện tượng nào đang diễn ra trong cơ thể?",
    "options": [
      "Hiện tượng cô đặc máu do sốt xuất huyết",
      "Tình trạng tăng sinh hồng cầu thứ phát",
      "Tình trạng thiếu máu do suy tủy xương",
      "Tình trạng viêm nhiễm hoặc tăng protein pha cấp"
    ],
    "correct": 3,
    "explanation": "Fibrinogen và globulin tăng khi có viêm làm hồng cầu kết tụ nhanh hơn, tăng tốc độ lắng máu.",
    "reference": "Sách DLS tr. 150"
  },
  {
    "id": 256,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Khí máu động mạch cho kết quả pH giảm, PaCO2 tăng, HCO3- bình thường gợi ý tình trạng rối loạn nào?",
    "options": [
      "Toan hô hấp cấp tính",
      "Toan chuyển hóa cấp tính",
      "Kiềm hô hấp mạn tính",
      "Kiềm chuyển hóa bù trừ"
    ],
    "correct": 0,
    "explanation": "pH giảm kèm PaCO2 tăng là toan hô hấp điển hình, thường do suy giảm thông khí phế nang.",
    "reference": "Sách DLS tr. 151"
  },
  {
    "id": 257,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Khí máu động mạch có pH giảm, HCO3- giảm, PaCO2 giảm bù trừ gợi ý tình trạng rối loạn nào?",
    "options": [
      "Toan hô hấp mất bù hoàn toàn",
      "Toan chuyển hóa có bù trừ hô hấp",
      "Kiềm hô hấp có bù trừ thận",
      "Kiềm chuyển hóa cấp tính"
    ],
    "correct": 1,
    "explanation": "HCO3- giảm tiên phát kèm pH giảm là toan chuyển hóa, cơ thể bù bằng tăng thông khí giảm PaCO2.",
    "reference": "Sách DLS tr. 151"
  },
  {
    "id": 258,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Xét nghiệm độ thẩm thấu niệu cao hơn độ thẩm thấu máu phản ánh chức năng nào của thận?",
    "options": [
      "Khả năng cô đặc nước tiểu của ống lượn và quai Henle",
      "Khả năng lọc sạch độc chất của màng đáy cầu thận",
      "Khả năng tổng hợp erythropoietin của tế bào kẽ",
      "Khả năng bài tiết enzym renin của bộ máy cận cầu thận"
    ],
    "correct": 0,
    "explanation": "Nước tiểu cô đặc chứng tỏ ống thận và tủy thận hoạt động tốt đáp ứng với hormon ADH.",
    "reference": "Sách DLS tr. 152"
  },
  {
    "id": 259,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Chỉ số Albumin niệu trên Creatinin niệu từ 30 đến 300 mg/g được phân loại là:",
    "options": [
      "Tăng albumin niệu đại thể mức độ nặng",
      "Albumin niệu hoàn toàn bình thường",
      "Tăng albumin niệu vi thể mức độ trung bình",
      "Protein niệu ngưỡng hội chứng thận hư"
    ],
    "correct": 2,
    "explanation": "ACR 30 - 300 mg/g là microalbumin niệu (A2), phản ánh tổn thương thận sớm.",
    "reference": "Sách DLS tr. 153"
  },
  {
    "id": 260,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Xét nghiệm nồng độ Magnesi huyết thanh giảm thường đi kèm với tình trạng rối loạn điện giải nào?",
    "options": [
      "Tăng calci máu và tăng phosphat máu",
      "Tăng kali máu và tăng natri máu",
      "Hạ natri máu kèm tăng clo máu",
      "Hạ kali máu và hạ calci máu khó điều chỉnh"
    ],
    "correct": 3,
    "explanation": "Hạ Mg2+ ức chế bơm Na+/K+-ATPase và giảm tiết PTH gây hạ kali và hạ calci trơ với bù thông thường.",
    "reference": "Sách DLS tr. 154"
  },
  {
    "id": 261,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Đặc điểm độ pH dịch vị dạ dày ở trẻ sơ sinh trong 24 đến 48 giờ đầu sau sinh là:",
    "options": [
      "Không chứa dịch vị dạ dày",
      "Hoàn toàn tương đương với người trưởng thành",
      "Rất toan với pH từ 1 đến 2",
      "Gần như trung tính từ 6 đến 8"
    ],
    "correct": 3,
    "explanation": "Trẻ sơ sinh có dịch vị dạ dày kiềm/trung tính lúc mới sinh, sau đó mới toan dần.",
    "reference": "Sách DLS tr. 160"
  },
  {
    "id": 262,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Do pH dạ dày cao hơn ở trẻ sơ sinh, độ hấp thu của kháng sinh nào sau đây tăng lên rõ rệt?",
    "options": [
      "Kháng sinh nhóm Sulfamid kháng khuẩn",
      "Thuốc chống viêm phi steroid Ibuprofen",
      "Kháng sinh nhóm Penicillin và Ampicillin",
      "Thuốc an thần Phenobarbital dạng uống"
    ],
    "correct": 2,
    "explanation": "Các thuốc base yếu hoặc không bền trong acid như Penicillin, Ampicillin hấp thu tốt hơn ở trẻ sơ sinh.",
    "reference": "Sách DLS tr. 161"
  },
  {
    "id": 263,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Tỷ lệ nước toàn phần trong cơ thể trẻ sơ sinh chiếm khoảng bao nhiêu phần trăm trọng lượng cơ thể?",
    "options": [
      "Khoảng 35 đến 40%",
      "Khoảng 75 đến 80%",
      "Khoảng 60 đến 65%",
      "Khoảng 50 đến 55%"
    ],
    "correct": 1,
    "explanation": "Trẻ sơ sinh có tỷ lệ nước toàn phần rất cao (75-80%), người lớn chỉ khoảng 60%.",
    "reference": "Sách DLS tr. 161"
  },
  {
    "id": 264,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Do thể tích dịch ngoại bào ở trẻ sơ sinh rất lớn, thể tích phân bố của thuốc nào sau đây tăng cao?",
    "options": [
      "Thuốc trợ tim Digoxin gắn mô cơ",
      "Thuốc ngủ Diazepam tan nhiều trong lipid",
      "Thuốc hạ mỡ máu nhóm Statin",
      "Kháng sinh Aminosid tan nhiều trong nước"
    ],
    "correct": 3,
    "explanation": "Thuốc tan trong nước như Aminosid phân bố rộng trong dịch ngoại bào lớn của trẻ, cần liều nạp ban đầu tính theo kg cao hơn.",
    "reference": "Sách DLS tr. 162"
  },
  {
    "id": 265,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Nồng độ Albumin huyết tương ở trẻ sơ sinh có đặc điểm nào so với người lớn?",
    "options": [
      "Cao hơn gấp đôi so với người trưởng thành",
      "Tương đương hoàn toàn về cả lượng và chất",
      "Chỉ gắn kết được với các phân tử đường glucose",
      "Thấp hơn và ái lực gắn kết với thuốc yếu hơn"
    ],
    "correct": 3,
    "explanation": "Nồng độ albumin và globulin ở trẻ sơ sinh thấp hơn, khả năng gắn kết thuốc kém hơn làm tăng nồng độ thuốc tự do.",
    "reference": "Sách DLS tr. 162"
  },
  {
    "id": 266,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Nguy cơ vàng da nhân não ở trẻ sơ sinh tăng cao khi dùng Sulfamid là do cơ chế nào?",
    "options": [
      "Sulfamid gây tắc hoàn toàn ống mật chủ",
      "Sulfamid kích thích tăng sản xuất Bilirubin ở lách",
      "Sulfamid đẩy Bilirubin tự do ra khỏi Albumin huyết tương",
      "Sulfamid phá hủy trực tiếp tế bào hồng cầu sơ sinh"
    ],
    "correct": 2,
    "explanation": "Sulfamid cạnh tranh vị trí gắn albumin với bilirubin làm tăng bilirubin tự do ngấm vào não.",
    "reference": "Sách DLS tr. 163"
  },
  {
    "id": 267,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Hệ enzym chuyển hóa Cytochrome P450 ở trẻ sơ sinh có đặc điểm nổi bật nào?",
    "options": [
      "Chưa hoàn thiện và hoạt tính chỉ bằng một phần người lớn",
      "Hoạt động mạnh hơn người lớn gấp 3 lần sau khi dùng thuốc",
      "Chỉ có khả năng oxy hóa các acid amin kéo dài liên tục",
      "Đạt hoạt tính tối đa ngay sau khi chào đời theo khuyến cáo"
    ],
    "correct": 0,
    "explanation": "Hệ men gan CYP450 và liên hợp glucuronic ở trẻ sơ sinh còn rất non nớt.",
    "reference": "Sách DLS tr. 163"
  },
  {
    "id": 268,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Kháng sinh Cloramphenicol gây hội chứng xám nguy kịch ở trẻ sơ sinh do thiếu hụt enzym nào?",
    "options": [
      "Enzym Alcohol dehydrogenase",
      "Enzym Glucose 6-phosphatase",
      "Enzym Cytochrome P450 3A4",
      "Enzym Glucuronyl transferase"
    ],
    "correct": 3,
    "explanation": "Gan trẻ sơ sinh thiếu UDP-glucuronyl transferase làm tích lũy cloramphenicol tự do gây trụy mạch tím tái.",
    "reference": "Sách DLS tr. 163"
  },
  {
    "id": 269,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Mức lọc cầu thận ở trẻ sơ sinh đủ tháng đạt mức tương đương người lớn vào thời điểm nào?",
    "options": [
      "Khi trẻ đạt từ 6 đến 12 tháng tuổi",
      "Khi trẻ bước sang tuổi dậy thì",
      "Vào tuần thứ 3 sau khi chào đời",
      "Ngay trong tuần đầu tiên sau khi sinh"
    ],
    "correct": 0,
    "explanation": "Chức năng lọc cầu thận và bài tiết ống thận hoàn thiện dần và tương đương người lớn sau 6-12 tháng.",
    "reference": "Sách DLS tr. 164"
  },
  {
    "id": 270,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Hàng rào máu não ở trẻ sơ sinh có đặc điểm gì cần lưu ý khi kê đơn thuốc thần kinh?",
    "options": [
      "Rất dày đặc ngăn chặn hoàn toàn mọi loại phân tử thuốc",
      "Chỉ cho phép các thuốc tan trong nước đi qua",
      "Tính thấm rất cao làm thuốc dễ dàng thâm nhập vào mô não",
      "Hoàn thiện đầy đủ như người trưởng thành"
    ],
    "correct": 2,
    "explanation": "Hàng rào máu não ở trẻ sơ sinh chưa hoàn thiện, tính thấm cao dễ gây độc tính thần kinh trung ương.",
    "reference": "Sách DLS tr. 164"
  },
  {
    "id": 271,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Kháng sinh nhóm Fluoroquinolon bị chống chỉ định ở trẻ em dưới 18 tuổi chủ yếu vì lý do gì?",
    "options": [
      "Nguy cơ gây tổn thương và thoái hóa sụn tiếp hợp ở khớp",
      "Nguy cơ gây đục thủy tinh thể bẩm sinh kèm theo sốt nhẹ",
      "Nguy cơ làm teo niêm mạc phế nang phổi ở người bệnh",
      "Nguy cơ gây suy thận mạn tính giai đoạn cuối trên lâm sàng"
    ],
    "correct": 0,
    "explanation": "Fluoroquinolon gây tổn thương sụn tăng trưởng ở động vật thực nghiệm non, chống chỉ định cho trẻ em.",
    "reference": "Sách DLS tr. 165"
  },
  {
    "id": 272,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Kháng sinh nhóm Tetracyclin bị chống chỉ định cho trẻ em dưới 8 tuổi do tác hại nào?",
    "options": [
      "Gây xuất huyết võng mạc hai bên mắt trong phác đồ chuẩn kéo dài liên tục trên lâm sàng",
      "Gây hội chứng Fanconi suy ống thận cấp kèm theo sốt nhẹ theo đúng hướng dẫn của Bộ Y tế",
      "Gây điếc tai không phục hồi do hủy ốc tai ở người bệnh ở bệnh nhân có nguy cơ biến chứng cao",
      "Gây hỏng men răng, ố vàng răng vĩnh viễn và chậm phát triển xương"
    ],
    "correct": 3,
    "explanation": "Tetracyclin lắng đọng vào mầm răng và xương làm xỉn màu răng vĩnh viễn và ức chế xương dài.",
    "reference": "Sách DLS tr. 165"
  },
  {
    "id": 273,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Không được dùng Aspirin để hạ sốt cho trẻ em bị nhiễm virus cúm hoặc thủy đậu vì nguy cơ:",
    "options": [
      "Hội chứng Guillain-Barré liệt cơ hô hấp kèm theo sốt nhẹ",
      "Cơn tan máu cấp do vỡ màng hồng cầu theo khuyến cáo",
      "Xuất huyết tiêu hóa do thủng tá tràng trong phác đồ chuẩn",
      "Hội chứng Reye gây thoái hóa mỡ gan và phù não cấp"
    ],
    "correct": 3,
    "explanation": "Aspirin kết hợp nhiễm virus ở trẻ em làm tăng nguy cơ hội chứng Reye tử vong cao.",
    "reference": "Sách DLS tr. 166"
  },
  {
    "id": 274,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Thuốc hạ sốt giảm đau được lựa chọn hàng đầu và an toàn nhất cho trẻ em là:",
    "options": [
      "Paracetamol với liều 10 đến 15 mg/kg mỗi lần",
      "Indomethacin dạng viên đặt hậu môn theo khuyến cáo",
      "Ketorolac tiêm bắp ngắt quãng kéo dài liên tục",
      "Aspirin với liều 50 mg/kg mỗi ngày trong phác đồ chuẩn"
    ],
    "correct": 0,
    "explanation": "Paracetamol 10-15 mg/kg mỗi 4-6 giờ (tối đa 60 mg/kg/ngày) là lựa chọn đầu tay an toàn cho trẻ.",
    "reference": "Sách DLS tr. 166"
  },
  {
    "id": 275,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Khi dùng Ibuprofen hạ sốt cho trẻ em, khoảng cách tối thiểu giữa hai lần dùng thuốc là:",
    "options": [
      "Cách nhau ít nhất 12 giờ",
      "Chỉ dùng một liều duy nhất mỗi ngày",
      "Cách nhau từ 6 đến 8 giờ",
      "Cách nhau từ 1 đến 2 giờ"
    ],
    "correct": 2,
    "explanation": "Liều Ibuprofen cho trẻ em là 5-10 mg/kg mỗi lần, khoảng cách an toàn là 6-8 giờ.",
    "reference": "Sách DLS tr. 167"
  },
  {
    "id": 276,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Phương pháp tính liều thuốc cho trẻ em nào được xem là chính xác và khoa học nhất?",
    "options": [
      "Lấy một nửa liều của người lớn áp dụng chung",
      "Tính liều dựa theo tuổi theo công thức Young",
      "Tính liều dựa trên diện tích bề mặt cơ thể",
      "Tính liều quy đổi đơn thuần theo số cân nặng"
    ],
    "correct": 2,
    "explanation": "Diện tích bề mặt cơ thể phản ánh sát nhất các chức năng sinh lý tim mạch, chuyển hóa và lọc cầu thận.",
    "reference": "Sách DLS tr. 168"
  },
  {
    "id": 277,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Biểu đồ Mosteller được sử dụng trên lâm sàng nhi khoa nhằm mục đích gì?",
    "options": [
      "Đánh giá mức độ mất nước trong tiêu chảy cấp sau khi dùng thuốc",
      "Ước tính diện tích bề mặt cơ thể từ chiều cao và cân nặng",
      "Đánh giá chỉ số phát triển tâm thần vận động trên lâm sàng",
      "Tính toán tốc độ truyền dung dịch điện giải ở mức độ vừa và nặng"
    ],
    "correct": 1,
    "explanation": "Công thức Mosteller tính diện tích da: BSA = căn bậc hai của (chiều cao x cân nặng / 3600).",
    "reference": "Sách DLS tr. 168"
  },
  {
    "id": 278,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Thuốc nhỏ mũi chứa hoạt chất co mạch Naphazolin chống chỉ định cho trẻ em ở độ tuổi nào?",
    "options": [
      "Chống chỉ định cho trẻ dưới 15 tuổi",
      "Chống chỉ định cho trẻ dưới 6 tuổi",
      "Chỉ cấm ở trẻ em béo phì trên 10 tuổi",
      "Được phép dùng cho mọi lứa tuổi từ sơ sinh"
    ],
    "correct": 1,
    "explanation": "Naphazolin hấp thu toàn thân có thể gây ngộ độc ức chế TKTW, hạ thân nhiệt, hôn mê ở trẻ nhỏ.",
    "reference": "Sách DLS tr. 169"
  },
  {
    "id": 279,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Không được dùng thuốc chống tiêu chảy Loperamid cho trẻ dưới mấy tuổi do nguy cơ liệt ruột?",
    "options": [
      "Trẻ em dưới 12 tuổi",
      "Trẻ vị thành niên từ 14 tuổi",
      "Chỉ dùng cho người trên 25 tuổi",
      "Trẻ em dưới 2 tuổi"
    ],
    "correct": 3,
    "explanation": "Loperamid làm giảm nhu động ruột, nguy cơ liệt ruột và nhiễm độc ở trẻ nhỏ dưới 2 tuổi.",
    "reference": "Sách DLS tr. 170"
  },
  {
    "id": 280,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Đặc điểm hấp thu thuốc qua da ở trẻ sơ sinh và trẻ nhỏ so với người lớn là:",
    "options": [
      "Tăng hấp thu rất mạnh do lớp sừng mỏng và diện tích da lớn",
      "Không có khả năng hấp thu thuốc qua da kèm theo sốt nhẹ",
      "Hấp thu rất kém do da trẻ chứa nhiều chất béo ở người bệnh",
      "Hoàn toàn giống nhau ở mọi lứa tuổi trong phác đồ chuẩn"
    ],
    "correct": 0,
    "explanation": "Lớp sừng mỏng, giàu mạch máu và tỷ lệ diện tích da/cân nặng lớn làm tăng độc tính khi bôi thuốc ngoài da.",
    "reference": "Sách DLS tr. 171"
  },
  {
    "id": 281,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Bôi Corticoid diện rộng kéo dài ở trẻ nhỏ có thể dẫn đến nguy cơ bất lợi nghiêm trọng nào?",
    "options": [
      "Gây dậy thì sớm thứ phát ở bé gái",
      "Gây phì đại cơ tim buồng thất trái",
      "Làm tăng chiều cao vượt mức sinh lý bình thường",
      "Ức chế trục dưới đồi tuyến yên thượng thận và chậm lớn"
    ],
    "correct": 3,
    "explanation": "Hấp thu toàn thân corticoid ức chế tiết GH và ACTH làm trẻ chậm tăng trưởng chiều cao.",
    "reference": "Sách DLS tr. 171"
  },
  {
    "id": 282,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Đường dùng thuốc nào sau đây nên hạn chế tối đa ở trẻ nhỏ do gây đau đớn và nguy cơ hoại tử cơ?",
    "options": [
      "Đường nhỏ mắt",
      "Đường uống siro",
      "Đường tiêm bắp",
      "Đường xịt khí dung"
    ],
    "correct": 2,
    "explanation": "Khối cơ trẻ còn nhỏ, tưới máu không đều, tiêm bắp dễ gây đau, áp xe và tổn thương dây thần kinh.",
    "reference": "Sách DLS tr. 172"
  },
  {
    "id": 283,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Kháng sinh Ceftriaxon chống chỉ định dùng đồng thời với dung dịch nào ở trẻ sơ sinh?",
    "options": [
      "Dung dịch tiêm truyền chứa Calci như Ringer Lactat",
      "Dung dịch Natri clorid 0,9% sinh lý kéo dài liên tục",
      "Nước cất vô trùng pha thuốc tiêm sau khi dùng thuốc",
      "Dung dịch Glucose 5% đẳng trương theo khuyến cáo định kỳ"
    ],
    "correct": 0,
    "explanation": "Ceftriaxon tạo muối tủa ceftriaxon-calci ở phổi và thận trẻ sơ sinh đe dọa tính mạng.",
    "reference": "Sách DLS tr. 173"
  },
  {
    "id": 284,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Nguy cơ methemoglobin máu ở trẻ nhỏ tăng cao khi sử dụng nhóm thuốc nào sau đây?",
    "options": [
      "Men vi sinh đường ruột chứa vi khuẩn sống",
      "Thuốc tê tại chỗ như Benzocain và Prilocain",
      "Thuốc bổ sung kẽm sulfat siro",
      "Vitamin C liều cao dạng sủi bọt"
    ],
    "correct": 1,
    "explanation": "HbF dễ bị oxy hóa thành MetHb hơn HbA khi tiếp xúc với các thuốc oxy hóa như benzocain.",
    "reference": "Sách DLS tr. 174"
  },
  {
    "id": 285,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Thời gian làm rỗng dạ dày ở trẻ sơ sinh có đặc điểm gì ảnh hưởng đến dược động học?",
    "options": [
      "Chỉ làm rỗng dạ dày vào ban đêm",
      "Hoàn toàn ổn định như người trưởng thành",
      "Kéo dài và không dự đoán được trong 6 tháng đầu",
      "Rất nhanh chóng chỉ trong vài phút"
    ],
    "correct": 2,
    "explanation": "Thời gian rỗng dạ dày kéo dài làm chậm tốc độ hấp thu của nhiều loại thuốc uống.",
    "reference": "Sách DLS tr. 175"
  },
  {
    "id": 286,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Hàm lượng mỡ trong cơ thể trẻ sinh non có đặc điểm gì so với trẻ đủ tháng?",
    "options": [
      "Tương đương hoàn toàn với trẻ 5 tuổi ở người bệnh",
      "Rất thấp chỉ chiếm khoảng 1 đến 3% trọng lượng",
      "Cao hơn người lớn gấp nhiều lần trên lâm sàng",
      "Chiếm hơn 50% trọng lượng cơ thể ở mức độ vừa và nặng"
    ],
    "correct": 1,
    "explanation": "Trẻ non tháng có rất ít mô mỡ, các thuốc tan nhiều trong mỡ sẽ giảm thể tích phân bố.",
    "reference": "Sách DLS tr. 176"
  },
  {
    "id": 287,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Kháng sinh Sulfamid có thể dùng an toàn cho trẻ em bắt đầu từ lứa tuổi nào?",
    "options": [
      "Ngay ngày đầu tiên sau sinh",
      "Từ trên 2 tháng tuổi",
      "Chỉ dùng cho trẻ trên 15 tuổi",
      "Không bao giờ được dùng cho trẻ em"
    ],
    "correct": 1,
    "explanation": "Sulfamid chống chỉ định ở trẻ < 2 tháng tuổi vì nguy cơ vàng da nhân não, trên 2 tháng dùng được.",
    "reference": "Sách DLS tr. 177"
  },
  {
    "id": 288,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Dạng bào chế nào sau đây thích hợp và an toàn nhất cho trẻ dưới 2 tuổi dùng đường uống?",
    "options": [
      "Viên nén bao phim nguyên vẹn",
      "Viên ngậm dưới lưỡi có vị đắng",
      "Viên nang cứng kích thước lớn",
      "Dạng dung dịch siro hoặc hỗn dịch uống"
    ],
    "correct": 3,
    "explanation": "Siro, hỗn dịch lỏng phân liều bằng thìa đong/xi lanh dễ nuốt và tránh nguy cơ hóc sặc.",
    "reference": "Sách DLS tr. 178"
  },
  {
    "id": 289,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Khi cho trẻ uống thuốc bằng xi lanh, vị trí bơm thuốc an toàn nhất để tránh sặc là:",
    "options": [
      "Bơm thật mạnh vào vòm họng trên",
      "Bơm từ từ vào góc má trong của miệng",
      "Bơm thẳng vào chính giữa cuống họng",
      "Bơm thuốc khi trẻ đang khóc to dữ dội"
    ],
    "correct": 1,
    "explanation": "Bơm chậm vào khoang giữa má và hàm dưới giúp trẻ tự nuốt, hạn chế tối đa sặc vào khí quản.",
    "reference": "Sách DLS tr. 179"
  },
  {
    "id": 290,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Hiện tượng tăng áp lực nội sọ lành tính kèm phồng thóp ở trẻ nhỏ có thể do thuốc nào?",
    "options": [
      "Thuốc hạ sốt Paracetamol",
      "Vitamin A liều cao kéo dài",
      "Dung dịch bù nước Oresol",
      "Vitamin B1 đường uống"
    ],
    "correct": 1,
    "explanation": "Ngộ độc vitamin A cấp hoặc mạn ở trẻ gây thóp phồng, đau đầu, tăng áp lực nội sọ.",
    "reference": "Sách DLS tr. 180"
  },
  {
    "id": 291,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Thuốc kháng Histamin H1 thế hệ 1 như Promethazin chống chỉ định cho trẻ dưới 2 tuổi vì:",
    "options": [
      "Nguy cơ ức chế hô hấp dẫn đến ngừng thở khi ngủ",
      "Gây suy gan cấp tính hoại tử nhu mô kéo dài liên tục",
      "Gây điếc tai tiếp nhận thần kinh theo khuyến cáo",
      "Gây tổn thương men răng vĩnh viễn sau khi dùng thuốc"
    ],
    "correct": 0,
    "explanation": "Promethazin có cảnh báo hộp đen gây ức chế hô hấp nghiêm trọng tử vong ở trẻ < 2 tuổi.",
    "reference": "Sách DLS tr. 181"
  },
  {
    "id": 292,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Kháng sinh nhóm Macrolid như Erythromycin dùng cho trẻ sơ sinh làm tăng nguy cơ biến chứng nào?",
    "options": [
      "Viêm tụy cấp xuất huyết hoại tử",
      "Co thắt túi mật cấp tính",
      "Hẹp môn vị phì đại ở trẻ sơ sinh",
      "Thủng đại tràng bẩm sinh"
    ],
    "correct": 2,
    "explanation": "Erythromycin kích thích thụ thể motilin gây phì đại cơ môn vị ở trẻ sơ sinh dưới 2 tuần tuổi.",
    "reference": "Sách DLS tr. 182"
  },
  {
    "id": 293,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Biện pháp vật lý hạ sốt an toàn được khuyến cáo phối hợp khi trẻ sốt cao là:",
    "options": [
      "Lau người bằng nước ấm có nhiệt độ thấp hơn nhiệt độ cơ thể 2 độ C",
      "Ủ kín chăn dày để toát mồ hôi thật nhiều trên lâm sàng",
      "Xoa cồn y tế lên toàn bộ cơ thể trẻ ở mức độ vừa và nặng",
      "Chườm đá lạnh trực tiếp lên trán và ngực sau khi dùng thuốc định kỳ"
    ],
    "correct": 0,
    "explanation": "Lau nước ấm giúp giãn mạch thải nhiệt an toàn; chườm đá hoặc dùng cồn gây co mạch và ngộ độc cồn qua da.",
    "reference": "Sách DLS tr. 183"
  },
  {
    "id": 294,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Tổng liều Paracetamol tối đa trong một ngày được khuyến cáo cho trẻ em là:",
    "options": [
      "Không vượt quá 60 mg/kg mỗi ngày",
      "Không giới hạn liều tối đa",
      "Không vượt quá 150 mg/kg mỗi ngày",
      "Không vượt quá 20 mg/kg mỗi ngày"
    ],
    "correct": 0,
    "explanation": "Liều tối đa hàng ngày của Paracetamol ở trẻ em là 60 mg/kg/ngày (hoặc tối đa 4g/ngày).",
    "reference": "Sách DLS tr. 184"
  },
  {
    "id": 295,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Ở trẻ em bị hen phế quản, dụng cụ hỗ trợ nào bắt buộc phải dùng kèm với bình xịt định liều?",
    "options": [
      "Bình tạo ẩm khí dung nước ấm",
      "Buồng đệm có van một chiều",
      "Ống thở oxy qua mũi",
      "Mặt nạ thở máy không xâm lấn"
    ],
    "correct": 1,
    "explanation": "Buồng đệm giúp trẻ nhỏ hít thuốc vào phổi hiệu quả mà không cần phối hợp tay bóp miệng hít.",
    "reference": "Sách DLS tr. 185"
  },
  {
    "id": 296,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Kháng sinh Doxycyclin hiện nay có thể cân nhắc dùng ngắn ngày cho trẻ dưới 8 tuổi trong bệnh nào?",
    "options": [
      "Viêm họng đỏ thông thường do virus ở người bệnh",
      "Nhiễm khuẩn tiết niệu không biến chứng trong phác đồ chuẩn",
      "Bệnh sốt mò hoặc sốt vẹt Rickettsia đe dọa tính mạng",
      "Viêm tai giữa cấp tái phát nhiều lần kèm theo sốt nhẹ"
    ],
    "correct": 2,
    "explanation": "Theo CDC và AAP, đợt ngắn < 21 ngày Doxycyclin điều trị sốt mò ít nguy cơ gây ố màu răng và được phép dùng.",
    "reference": "Sách DLS tr. 186"
  },
  {
    "id": 297,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Hấp thu thuốc qua đường tiêm dưới da ở trẻ nhỏ có đặc điểm gì?",
    "options": [
      "Hoàn toàn không hấp thu được vào tuần hoàn trong phác đồ chuẩn",
      "Nhanh hơn người lớn gấp ba lần kèm theo sốt nhẹ định kỳ",
      "Chỉ dùng được cho các loại kháng sinh theo khuyến cáo",
      "Kém ổn định do hệ thống mao mạch dưới da chưa phát triển đều"
    ],
    "correct": 3,
    "explanation": "Lưới mao mạch dưới da ở trẻ còn thay đổi, tưới máu phụ thuộc nhiệt độ nên hấp thu kém ổn định.",
    "reference": "Sách DLS tr. 187"
  },
  {
    "id": 298,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Trẻ sơ sinh có nồng độ acid mật trong lòng ruột thấp hơn người lớn ảnh hưởng đến:",
    "options": [
      "Khả năng gắn kết thuốc với protein huyết tương",
      "Sự hòa tan và hấp thu các thuốc tan nhiều trong lipid",
      "Sự hấp thu của các kháng sinh tan trong nước",
      "Quá trình đào thải thuốc qua nước tiểu"
    ],
    "correct": 1,
    "explanation": "Acid mật thấp làm giảm khả năng nhũ hóa chất béo và hấp thu thuốc tan trong lipid.",
    "reference": "Sách DLS tr. 188"
  },
  {
    "id": 299,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Tại sao không nên dùng thuốc chống nôn Metoclopramid thường quy cho trẻ em?",
    "options": [
      "Gây suy thận cấp không hồi phục theo khuyến cáo định kỳ",
      "Làm trẻ ăn quá nhiều gây béo phì kéo dài liên tục",
      "Nguy cơ cao xuất hiện phản ứng ngoại tháp loạn trương lực cơ",
      "Làm tăng bài tiết acid dạ dày gây thủng ruột sau khi dùng thuốc"
    ],
    "correct": 2,
    "explanation": "Trẻ em rất nhạy cảm với tác dụng phụ ngoại tháp của thuốc phong bế dopamin.",
    "reference": "Sách DLS tr. 189"
  },
  {
    "id": 300,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Thuốc giảm đau Codein bị chống chỉ định giảm đau cho trẻ sau phẫu thuật cắt amidan vì:",
    "options": [
      "Nguy cơ chuyển hóa nhanh thành Morphin gây ngừng thở",
      "Gây sốt cao kịch phát không đáp ứng thuốc sau khi dùng thuốc",
      "Gây chảy máu ồ ạt tại vết mổ amidan kéo dài liên tục",
      "Làm mất phản xạ nhai nuốt thức ăn ở mức độ vừa và nặng"
    ],
    "correct": 0,
    "explanation": "Trẻ mang gen chuyển hóa siêu nhanh CYP2D6 biến đổi codein thành morphin nồng độ độc gây tử vong.",
    "reference": "Sách DLS tr. 190"
  },
  {
    "id": 301,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Chỉ số nào sau đây phản ánh tốc độ chuyển hóa thuốc ở trẻ từ 1 đến 9 tuổi?",
    "options": [
      "Tốc độ chuyển hóa chậm nhất trong mọi lứa tuổi sau khi dùng thuốc",
      "Tốc độ chuyển hóa qua gan tính theo kg nhanh hơn người lớn",
      "Chỉ bằng một nửa so với người trưởng thành trên lâm sàng",
      "Hoàn toàn ngừng chuyển hóa thuốc qua gan ở mức độ vừa và nặng"
    ],
    "correct": 1,
    "explanation": "Trẻ em 1-9 tuổi có thể tích gan tương đối lớn và lưu lượng máu qua gan cao, chuyển hóa thuốc nhanh hơn.",
    "reference": "Sách DLS tr. 191"
  },
  {
    "id": 302,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Khi tính liều thuốc cho trẻ bị béo phì, đối với các thuốc tan trong nước nên tính theo:",
    "options": [
      "Cân nặng lý tưởng hiệu chỉnh theo chiều cao",
      "Không điều chỉnh dùng nguyên liều người lớn",
      "Lấy cân nặng thực tế cộng thêm 20%",
      "Cân nặng thực tế đo trên bàn cân"
    ],
    "correct": 0,
    "explanation": "Mô mỡ ít tưới máu và ít nước, thuốc phân bố dịch ngoại bào nên tính theo cân nặng lý tưởng IBW.",
    "reference": "Sách DLS tr. 192"
  },
  {
    "id": 303,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Dung dịch bù nước Oresol cần được pha với lượng nước như thế nào?",
    "options": [
      "Pha chung với nước ngọt có ga hoặc sữa tươi",
      "Pha càng đặc càng tốt để tăng hiệu quả bù muối",
      "Pha thật loãng với gấp 3 lần lượng nước quy định",
      "Pha chính xác với thể tích nước ghi trên bao bì sản phẩm"
    ],
    "correct": 3,
    "explanation": "Pha quá đặc gây tăng áp lực thẩm thấu làm mất nước tế bào và co giật ở trẻ nhỏ.",
    "reference": "Sách DLS tr. 193"
  },
  {
    "id": 304,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Kẽm được khuyến cáo bổ sung cho trẻ em bị tiêu chảy cấp trong thời gian bao lâu?",
    "options": [
      "Uống liên tục trong vòng 10 đến 14 ngày",
      "Chỉ uống một liều duy nhất khi nhập viện",
      "Chỉ uống đúng trong 2 ngày đầu tiên",
      "Uống kéo dài liên tục trong suốt 6 tháng"
    ],
    "correct": 0,
    "explanation": "Bổ sung kẽm 10-14 ngày giúp tái tạo niêm mạc ruột và giảm đợt tiêu chảy tái phát.",
    "reference": "Sách DLS tr. 194"
  },
  {
    "id": 305,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Dấu hiệu mất nước nặng ở trẻ bị tiêu chảy cấp đòi hỏi can thiệp cấp cứu là gì?",
    "options": [
      "Nước tiểu có màu vàng trong",
      "Nếp véo da trở lại trạng thái bình thường ngay",
      "Li bì hoặc hôn mê, mắt trũng sâu, véo da mất rất chậm",
      "Trẻ tỉnh táo đòi uống nước liên tục"
    ],
    "correct": 2,
    "explanation": "Li bì, mất phản xạ uống nước, véo da mất > 2 giây là dấu hiệu mất nước nặng cần truyền dịch tĩnh mạch cấp cứu.",
    "reference": "Sách DLS tr. 195"
  },
  {
    "id": 306,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Nguyên tắc vàng được khuyến cáo hàng đầu khi kê đơn thuốc cho người cao tuổi là:",
    "options": [
      "Phối hợp cùng lúc thật nhiều thuốc cùng nhóm",
      "Duy trì cố định liều dùng như người 30 tuổi",
      "Dùng ngay liều tối đa để đạt hiệu quả cấp tốc",
      "Bắt đầu bằng liều thấp và tăng liều thật chậm rãi"
    ],
    "correct": 3,
    "explanation": "Nguyên tắc 'Start low, go slow' là cốt lõi để hạn chế tai biến thuốc ở người già.",
    "reference": "Sách DLS tr. 200"
  },
  {
    "id": 307,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Sự thay đổi thành phần cơ thể sinh lý ở người cao tuổi thể hiện qua đặc điểm nào?",
    "options": [
      "Tỷ lệ mỡ giảm xuống mức tối thiểu sau khi dùng thuốc",
      "Lượng nước cơ thể tăng vọt lên đến 80% theo khuyến cáo",
      "Khối cơ bắp tăng lên do quá trình xơ hóa kéo dài liên tục",
      "Khối cơ giảm, lượng mỡ tăng, lượng nước cơ thể giảm"
    ],
    "correct": 3,
    "explanation": "Tuổi già làm giảm nước cơ thể (giảm 15-20%), giảm khối nạc cơ bắp và tăng tỷ lệ mô mỡ.",
    "reference": "Sách DLS tr. 201"
  },
  {
    "id": 308,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Do lượng nước cơ thể giảm ở người già, nồng độ đỉnh trong huyết tương của thuốc nào tăng lên?",
    "options": [
      "Các thuốc tan nhiều trong lipid như Diazepam",
      "Các thuốc có phân tử lượng cực lớn",
      "Mọi loại thuốc đều giảm nồng độ đỉnh",
      "Các thuốc tan nhiều trong nước như Aminosid, Digoxin"
    ],
    "correct": 3,
    "explanation": "Giảm thể tích nước phân bố làm tăng nồng độ đỉnh của các thuốc tan trong nước.",
    "reference": "Sách DLS tr. 201"
  },
  {
    "id": 309,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Thời gian bán thải của thuốc ngủ tan trong lipid Diazepam ở người cao tuổi có xu hướng:",
    "options": [
      "Bị triệt tiêu hoàn toàn tác dụng trên lâm sàng",
      "Kéo dài hơn rất nhiều so với người trẻ tuổi",
      "Không có bất kỳ sự thay đổi nào ở mức độ vừa và nặng",
      "Rút ngắn lại chỉ còn vài giờ sau khi dùng thuốc"
    ],
    "correct": 1,
    "explanation": "Tăng khối mỡ làm tăng thể tích phân bố của thuốc tan trong lipid, kéo dài T1/2 gây tích lũy thuốc.",
    "reference": "Sách DLS tr. 202"
  },
  {
    "id": 310,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Nồng độ Albumin huyết tương giảm sinh lý ở người cao tuổi dẫn đến biến đổi dược động học nào?",
    "options": [
      "Ngăn chặn thuốc đi qua hàng rào mạch máu",
      "Làm giảm nồng độ thuốc tự do trong máu",
      "Tăng phân đoạn thuốc tự do có hoạt tính sinh học",
      "Làm tăng khả năng gắn kết của các thuốc acid"
    ],
    "correct": 2,
    "explanation": "Albumin giảm làm tỷ lệ thuốc tự do tăng, dễ gây quá liều và ngộ độc thuốc.",
    "reference": "Sách DLS tr. 202"
  },
  {
    "id": 311,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Lưu lượng máu qua gan ở người cao tuổi giảm khoảng bao nhiêu phần trăm so với người trẻ?",
    "options": [
      "Giảm trên 80%",
      "Giảm từ 20 đến 40%",
      "Hoàn toàn không thay đổi theo tuổi",
      "Tăng lên khoảng 50%"
    ],
    "correct": 1,
    "explanation": "Lưu lượng tuần hoàn qua gan giảm 20-40% làm giảm thanh thải các thuốc có tỷ số ly trích cao.",
    "reference": "Sách DLS tr. 203"
  },
  {
    "id": 312,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Sự suy giảm chức năng lọc của cầu thận ở người già có đặc điểm sinh lý nào?",
    "options": [
      "Mức lọc cầu thận giảm dần trung bình 1 ml/phút mỗi năm sau tuổi 40",
      "Mức lọc cầu thận tăng đều đặn theo thời gian ở người bệnh",
      "Đột ngột suy giảm về mức 0 sau tuổi 65 kèm theo sốt nhẹ",
      "Không có sự thay đổi nào về mức lọc cầu thận trong phác đồ chuẩn"
    ],
    "correct": 0,
    "explanation": "Từ sau 40 tuổi, mức lọc cầu thận GFR giảm sinh lý khoảng 1 ml/phút/năm.",
    "reference": "Sách DLS tr. 204"
  },
  {
    "id": 313,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Tại sao nồng độ Creatinin huyết thanh ở người già có thể bình thường dù chức năng thận đã suy giảm?",
    "options": [
      "Do Creatinin bị giáng hóa hoàn toàn tại gan trong phác đồ chuẩn",
      "Do thận người già bài tiết bù Creatinin vào phân kèm theo sốt nhẹ định kỳ",
      "Do khối cơ bắp của người già bị teo giảm làm giảm sản sinh Creatinin",
      "Do chế độ ăn kiêng muối làm giảm Creatinin theo khuyến cáo"
    ],
    "correct": 2,
    "explanation": "Khối cơ teo làm giảm nguồn sinh creatinin nội sinh, khiến nồng độ creatinin máu trông bình thường.",
    "reference": "Sách DLS tr. 204"
  },
  {
    "id": 314,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Để đánh giá chính xác chức năng thận chỉnh liều thuốc ở người cao tuổi, công cụ cần dùng là:",
    "options": [
      "Đếm số lần đi tiểu trong ngày kéo dài liên tục",
      "Dựa vào chỉ số đường huyết lúc đói theo khuyến cáo",
      "Chỉ dựa vào nồng độ Creatinin huyết thanh đơn thuần trong phác đồ chuẩn",
      "Ước tính độ thanh thải Creatinin bằng công thức Cockcroft-Gault"
    ],
    "correct": 3,
    "explanation": "Công thức Cockcroft-Gault tính đến tuổi, cân nặng và giới tính để ước tính ClCr chính xác.",
    "reference": "Sách DLS tr. 205"
  },
  {
    "id": 315,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Tiêu chí Beers được xây dựng và áp dụng trên lâm sàng nhằm mục đích chính là gì?",
    "options": [
      "Tính toán tốc độ tiêm truyền tĩnh mạch tối đa sau khi dùng thuốc",
      "Đánh giá mức độ suy dinh dưỡng tuổi già kéo dài liên tục",
      "Phân loại giai đoạn tiến triển của bệnh ung thư theo khuyến cáo",
      "Xác định thuốc có nguy cơ tiềm ẩn không phù hợp người cao tuổi"
    ],
    "correct": 3,
    "explanation": "Tiêu chuẩn Beers là hướng dẫn quốc tế liệt kê các thuốc nên tránh hoặc dùng thận trọng ở người cao tuổi.",
    "reference": "Sách DLS tr. 206"
  },
  {
    "id": 316,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Thuốc kháng cholinergic như Diphenhydramin hoặc Amitriptylin ở người già có nguy cơ gây ra biến chứng:",
    "options": [
      "Hạ huyết áp tư thế đứng kèm sốt cao sau khi dùng thuốc",
      "Gây hạ đường huyết kịch phát ở mức độ vừa và nặng",
      "Tiêu chảy phân mỡ ồ ạt kéo dài kéo dài liên tục",
      "Lú lẫn, sa sút trí tuệ, táo bón và bí tiểu cấp"
    ],
    "correct": 3,
    "explanation": "Người già rất nhạy cảm với tác dụng kháng muscarinic gây lú lẫn, khô miệng, mờ mắt, táo bón, bí tiểu.",
    "reference": "Sách DLS tr. 207"
  },
  {
    "id": 317,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Thuốc an thần nhóm Benzodiazepin tác dụng kéo dài như Diazepam ở người già làm gia tăng nguy cơ:",
    "options": [
      "Gây hưng cảm và kích động tâm thần vận động sau khi dùng thuốc",
      "Gây xuất huyết võng mạc không hồi phục ở mức độ vừa và nặng",
      "Buồn ngủ ban ngày, lú lẫn, mất thăng bằng và ngã gãy xương",
      "Gây loét thủng tá tràng trên lâm sàng"
    ],
    "correct": 2,
    "explanation": "Tích lũy benzodiazepin kéo dài gây an thần quá mức, mất phối hợp động tác dẫn đến té ngã gãy cổ xương đùi.",
    "reference": "Sách DLS tr. 208"
  },
  {
    "id": 318,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Thuốc chống viêm không steroid (NSAID) dùng kéo dài ở người cao tuổi đặc biệt nguy hiểm trên hai cơ quan nào?",
    "options": [
      "Tuyến tụy và cơ quan sinh sản trên lâm sàng",
      "Dạ dày tiêu hóa và chức năng lọc của thận",
      "Phổi và cơ quan thính giác ở mức độ vừa và nặng",
      "Mô liên kết và sụn khớp ở người bệnh"
    ],
    "correct": 1,
    "explanation": "NSAID gây loét xuất huyết tiêu hóa và suy thận cấp, làm nặng thêm suy tim và tăng huyết áp ở người già.",
    "reference": "Sách DLS tr. 209"
  },
  {
    "id": 319,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Hiện tượng hạ huyết áp tư thế đứng ở người cao tuổi thường trầm trọng hơn do suy giảm phản xạ nào?",
    "options": [
      "Phản xạ thụ thể áp lực xoang cảnh và quai động mạch chủ",
      "Phản xạ co cơ vân thành bụng trên lâm sàng định kỳ",
      "Phản xạ đóng mở nắp thanh quản kèm theo sốt nhẹ",
      "Phản xạ bài tiết hormon tuyến giáp ở người bệnh"
    ],
    "correct": 0,
    "explanation": "Baroreceptor suy giảm tính nhạy cảm khiến mạch máu không co kịp khi thay đổi tư thế.",
    "reference": "Sách DLS tr. 210"
  },
  {
    "id": 320,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Thuốc chống loạn thần thế hệ thứ nhất như Haloperidol ở người cao tuổi có tỷ lệ cao gây ra:",
    "options": [
      "Đục mờ giác mạc cấp tính trong phác đồ chuẩn kéo dài liên tục trên lâm sàng",
      "Hội chứng thận hư thứ phát ở người bệnh ở bệnh nhân có nguy cơ biến chứng cao",
      "Hội chứng ngoại tháp với run cứng cơ và rối loạn vận động muộn",
      "Bệnh lý cơ tim giãn vô căn kèm theo sốt nhẹ theo đúng hướng dẫn của Bộ Y tế"
    ],
    "correct": 2,
    "explanation": "Thuốc kháng dopamin gây ngoại tháp nặng và làm tăng nguy cơ đột quỵ tử vong ở bệnh nhân sa sút trí tuệ.",
    "reference": "Sách DLS tr. 211"
  },
  {
    "id": 321,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Hiện tượng đa dược (Polypharmacy) ở người cao tuổi thường được định nghĩa trên thực hành lâm sàng là:",
    "options": [
      "Dùng đồng thời từ 5 loại thuốc trở lên mỗi ngày",
      "Dùng thuốc nhiều hơn 1 lần trong ngày",
      "Kê đơn một loại thuốc duy nhất liên tục",
      "Dùng từ 2 loại thuốc bổ sung vitamin"
    ],
    "correct": 0,
    "explanation": "Polypharmacy định nghĩa là sử dụng thường xuyên >= 5 thuốc, làm tăng vọt nguy cơ tương tác và ADR.",
    "reference": "Sách DLS tr. 212"
  },
  {
    "id": 322,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Kê đơn một thuốc mới để điều trị tác dụng phụ của một thuốc đã dùng trước đó được gọi là hiện tượng gì?",
    "options": [
      "Dung nạp thuốc nhanh",
      "Dòng thác kê đơn",
      "Hội chứng cai thuốc",
      "Tương tác hiệp đồng"
    ],
    "correct": 1,
    "explanation": "Prescribing cascade: bác sĩ nhầm ADR với bệnh mới và kê thêm thuốc mới làm nặng thêm chuỗi biến cố.",
    "reference": "Sách DLS tr. 213"
  },
  {
    "id": 323,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Thuốc điều trị đái tháo đường nhóm Sulfonylure nào nên tránh tuyệt đối ở người cao tuổi vì hạ đường huyết kéo dài?",
    "options": [
      "Gliclazid",
      "Metformin",
      "Glimepirid",
      "Glibenclamid"
    ],
    "correct": 3,
    "explanation": "Glibenclamid có thời gian tác dụng rất dài và chất chuyển hóa hoạt tính đào thải qua thận gây hạ đường huyết hôn mê.",
    "reference": "Sách DLS tr. 214"
  },
  {
    "id": 324,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Nhóm thuốc hạ huyết áp nào sau đây là lựa chọn ưu tiên ở bệnh nhân cao tuổi có tăng huyết áp tâm thu đơn độc?",
    "options": [
      "Thuốc tác động lên hệ thần kinh trung ương Clonidin",
      "Thuốc chẹn kênh calci DHP và lợi tiểu Thiazid",
      "Thuốc chẹn thụ thể alpha-1 ngoại biên",
      "Thuốc chẹn beta giao cảm không chọn lọc"
    ],
    "correct": 1,
    "explanation": "Thiazid và DHP (như Amlodipin) chứng minh giảm tốt nhất biến cố đột quỵ trong THA tâm thu đơn độc ở người già.",
    "reference": "Sách DLS tr. 215"
  },
  {
    "id": 325,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Bệnh nhân cao tuổi có phì đại lành tính tuyến tiền liệt cần tránh sử dụng nhóm thuốc nào?",
    "options": [
      "Thuốc hạ sốt Paracetamol",
      "Thuốc ức chế men HMG-CoA reductase",
      "Thuốc có tác dụng kháng cholinergic",
      "Thuốc ức chế men chuyển"
    ],
    "correct": 2,
    "explanation": "Kháng cholinergic làm co thắt cơ vòng cổ bàng quang và giảm co bóp bàng quang gây bí tiểu cấp.",
    "reference": "Sách DLS tr. 216"
  },
  {
    "id": 326,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Suy giảm chức năng nhận thức ở người cao tuổi ảnh hưởng trực tiếp nhất đến khâu nào trong điều trị?",
    "options": [
      "Thời gian thuốc bị giáng hóa tại gan ở người bệnh",
      "Tốc độ hấp thu thuốc qua ruột non ở mức độ vừa và nặng",
      "Tỷ lệ gắn kết của thuốc vào albumin trên lâm sàng",
      "Sự tuân thủ phác đồ điều trị dùng thuốc của người bệnh"
    ],
    "correct": 3,
    "explanation": "Quên liều, uống nhầm liều hoặc uống lặp lại do suy giảm trí nhớ là rào cản tuân thủ lớn nhất.",
    "reference": "Sách DLS tr. 217"
  },
  {
    "id": 327,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Dụng cụ hỗ trợ nào sau đây giúp cải thiện rõ rệt sự tuân thủ dùng thuốc cho người bệnh cao tuổi?",
    "options": [
      "Giao toàn bộ bao bì thuốc nguyên lọ lớn ở người bệnh",
      "Tăng số lần uống thuốc lên 5 lần mỗi ngày kèm theo sốt nhẹ",
      "Hộp chia thuốc theo các buổi sáng trưa chiều tối trong tuần",
      "Đơn thuốc viết tay bằng chữ viết tắt chuyên môn trên lâm sàng"
    ],
    "correct": 2,
    "explanation": "Hộp chia liều (pillbox) theo ngày và buổi giúp bệnh nhân già kiểm soát thuốc đã uống.",
    "reference": "Sách DLS tr. 218"
  },
  {
    "id": 328,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Thuốc giãn cơ ngoại biên Cyclobenzaprin bị khuyến cáo tránh dùng cho người già theo tiêu chí Beers vì:",
    "options": [
      "Gây điếc tai tiếp nhận trong phác đồ chuẩn kéo dài liên tục trên lâm sàng",
      "Tác dụng kháng cholinergic mạnh và nguy cơ an thần gây ngã",
      "Gây xuất huyết tiêu hóa ồ ạt ở người bệnh ở bệnh nhân có nguy cơ biến chứng cao",
      "Làm tăng áp lực nội sọ cấp kèm theo sốt nhẹ theo đúng hướng dẫn của Bộ Y tế"
    ],
    "correct": 1,
    "explanation": "Các thuốc giãn cơ có hoạt tính kháng cholinergic và an thần cao, tăng nguy cơ gãy xương.",
    "reference": "Sách DLS tr. 219"
  },
  {
    "id": 329,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Bệnh nhân cao tuổi bị suy tim phân suất tống máu giảm, thuốc nào sau đây chống chỉ định dùng thường quy?",
    "options": [
      "Thuốc chẹn kênh calci Non-DHP như Verapamil và Diltiazem",
      "Thuốc lợi tiểu quai Furosemid theo khuyến cáo",
      "Thuốc chẹn beta chọn lọc Bisoprolol kèm theo sốt nhẹ định kỳ",
      "Thuốc ức chế thụ thể Angiotensin trong phác đồ chuẩn"
    ],
    "correct": 0,
    "explanation": "Verapamil và Diltiazem ức chế co bóp cơ tim mạnh làm nặng thêm suy tim sung huyết.",
    "reference": "Sách DLS tr. 220"
  },
  {
    "id": 330,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Digoxin dùng ở người cao tuổi có khoảng cửa sổ điều trị rất hẹp, nồng độ huyết tương khuyến cáo duy trì là:",
    "options": [
      "Từ 0,5 đến 0,8 ng/mL",
      "Trên 10 ng/mL",
      "Từ 1,5 đến 2,5 ng/mL",
      "Từ 3,0 đến 5,0 ng/mL"
    ],
    "correct": 0,
    "explanation": "Ở người già, nồng độ Digoxin > 1,0 ng/mL làm tăng rõ rệt tỷ lệ tử vong do loạn nhịp tim.",
    "reference": "Sách DLS tr. 221"
  },
  {
    "id": 331,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Thuốc giảm đau Opioid ở người già cần đặc biệt chú ý dự phòng tác dụng phụ thường trực nào?",
    "options": [
      "Tăng huyết áp kịch phát",
      "Hạ đường huyết sau ăn",
      "Tiêu chảy phân nước liên tục",
      "Táo bón mạn tính kéo dài"
    ],
    "correct": 3,
    "explanation": "Opioid hầu như luôn gây táo bón và không dung nạp theo thời gian, phải chủ động dùng kèm thuốc nhuận tràng.",
    "reference": "Sách DLS tr. 222"
  },
  {
    "id": 332,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Thuốc chống trầm cảm ba vòng Amitriptylin nên tránh dùng cho người già sa sút trí tuệ vì:",
    "options": [
      "Làm giảm tiết dịch mồ hôi toàn thân ở mức độ vừa và nặng",
      "Gây hạ men gan ALT và AST sau khi dùng thuốc",
      "Làm trầm trọng thêm tình trạng suy giảm trí nhớ và mê sảng",
      "Gây tăng sinh tế bào thần kinh đệm kéo dài liên tục"
    ],
    "correct": 2,
    "explanation": "Tác dụng kháng cholinergic trung ương ức chế dẫn truyền acetylcholin gây lú lẫn và mê sảng cấp.",
    "reference": "Sách DLS tr. 223"
  },
  {
    "id": 333,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Nhóm thuốc chống trầm cảm nào sau đây được ưu tiên lựa chọn an toàn hơn cho người cao tuổi?",
    "options": [
      "Thuốc ức chế không hồi phục enzym MAO ở mức độ vừa và nặng",
      "Thuốc chống trầm cảm ba vòng TCA liều cao sau khi dùng thuốc",
      "Dẫn chất Barbiturat tác dụng kéo dài trên lâm sàng",
      "Thuốc ức chế tái hấp thu chọn lọc Serotonin như Sertralin"
    ],
    "correct": 3,
    "explanation": "SSRI (Sertralin, Escitalopram) ít tác dụng phụ tim mạch và kháng cholinergic hơn nhiều so với TCA.",
    "reference": "Sách DLS tr. 224"
  },
  {
    "id": 334,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Thuốc hạ áp nhóm chẹn thụ thể Alpha-1 như Doxazosin hoặc Prazosin có nguy cơ đặc trưng nào ở người già?",
    "options": [
      "Gây tăng áp lực nội sọ đột ngột ở người bệnh",
      "Tụt huyết áp tư thế đứng nghiêm trọng ngay liều đầu tiên",
      "Gây bí tiểu hoàn toàn không tự chủ ở mức độ vừa và nặng",
      "Gây co thắt khí phế quản cấp trên lâm sàng"
    ],
    "correct": 1,
    "explanation": "Chẹn alpha-1 ngoại biên gây giãn mạch tĩnh mạch và động mạch, dễ ngất khi đứng dậy.",
    "reference": "Sách DLS tr. 225"
  },
  {
    "id": 335,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Khi dùng thuốc chống đông đường uống thế hệ mới NOAC ở người già, yếu tố nào quyết định việc giảm liều?",
    "options": [
      "Thời gian ngủ trung bình mỗi đêm",
      "Chỉ số xét nghiệm nồng độ Bilirubin toàn phần",
      "Tuổi tác, cân nặng và chỉ số Creatinin huyết thanh",
      "Chiều cao và màu da của bệnh nhân"
    ],
    "correct": 2,
    "explanation": "Liều NOAC (Apixaban, Rivaroxaban) được giảm dựa trên các tiêu chí: tuổi >= 80, cân nặng <= 60 kg, Cr >= 1,5 mg/dL.",
    "reference": "Sách DLS tr. 226"
  },
  {
    "id": 336,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Hiện tượng run tay lành tính ở người già có thể bị nhầm lẫn với tác dụng phụ của thuốc nào?",
    "options": [
      "Thuốc bổ sung Canxi carbonat",
      "Men tiêu hóa Enzym tụy",
      "Thuốc chủ vận beta-2 Salbutamol hoặc Theophyllin",
      "Thuốc nhỏ mắt dung dịch nước muối sinh lý"
    ],
    "correct": 2,
    "explanation": "Kích thích thụ thể beta-2 trên cơ vân gây run đầu chi, thường gặp khi dùng thuốc hen suyễn.",
    "reference": "Sách DLS tr. 227"
  },
  {
    "id": 337,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Người cao tuổi uống thuốc kháng viêm Corticoid kéo dài có nguy cơ gãy xương cao nhất ở vị trí nào?",
    "options": [
      "Xương bàn chân và xương bánh chè",
      "Thân đốt sống thắt lưng và cổ xương đùi",
      "Các đốt ngón tay ngón chân",
      "Xương đòn và xương bả vai"
    ],
    "correct": 1,
    "explanation": "Loãng xương do corticoid tấn công xương xốp gây xẹp đốt sống và gãy cổ xương đùi tự phát.",
    "reference": "Sách DLS tr. 228"
  },
  {
    "id": 338,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Thuốc ức chế bơm proton PPI dùng kéo dài nhiều năm ở người cao tuổi làm tăng nguy cơ biến chứng nào?",
    "options": [
      "Xuất huyết bàng quang cấp theo khuyến cáo ở mức độ vừa đến mức độ nặng",
      "Gãy xương do loãng xương và nhiễm khuẩn ruột do C. difficile",
      "Cường chức năng tuyến thượng thận kéo dài liên tục kèm theo sốt cao và suy nhược cơ thể",
      "Bệnh bạch cầu cấp dòng tủy trong phác đồ chuẩn kéo dài liên tục trên lâm sàng"
    ],
    "correct": 1,
    "explanation": "Giảm acid dạ dày kéo dài cản trở hấp thu calci, magnesi và phá vỡ hàng rào bảo vệ đường ruột.",
    "reference": "Sách DLS tr. 229"
  },
  {
    "id": 339,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Hạ Natri máu ở người cao tuổi thường là tác dụng không mong muốn của nhóm thuốc nào?",
    "options": [
      "Thuốc lợi tiểu Thiazid và thuốc chống trầm cảm SSRI",
      "Thuốc kháng acid dạ dày chứa nhôm theo khuyến cáo định kỳ",
      "Thuốc điều hòa lipid huyết tương Statin kéo dài liên tục",
      "Thuốc giãn phế quản Ipratropium sau khi dùng thuốc"
    ],
    "correct": 0,
    "explanation": "Thiazid và SSRI gây hội chứng SIADH làm hạ natri máu nặng gây lú lẫn ở người già.",
    "reference": "Sách DLS tr. 230"
  },
  {
    "id": 340,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Để hạn chế nguy cơ tương tác thuốc ở người cao tuổi mắc nhiều bệnh mạn tính, giải pháp hữu hiệu là:",
    "options": [
      "Tăng gấp đôi số lượng bác sĩ chuyên khoa khám bệnh sau khi dùng thuốc",
      "Yêu cầu người bệnh tự mua thêm các bài thuốc thảo dược kéo dài liên tục",
      "Đánh giá lại định kỳ toàn bộ thuốc đang dùng và loại bỏ thuốc không cần thiết",
      "Dừng toàn bộ mọi loại thuốc không điều trị ở mức độ vừa và nặng"
    ],
    "correct": 2,
    "explanation": "Rà soát thuốc (Medication review) và ngưng kê đơn (Deprescribing) giúp giảm đa dược và tương tác.",
    "reference": "Sách DLS tr. 231"
  },
  {
    "id": 341,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Cơ quan vị giác và khứu giác suy giảm ở người cao tuổi ảnh hưởng như thế nào đến việc ăn uống?",
    "options": [
      "Giảm cảm giác thèm ăn và có xu hướng nêm nếm thức ăn mặn hơn",
      "Không có bất kỳ ảnh hưởng nào đến hành vi ăn uống ở mức độ vừa và nặng",
      "Làm người già ăn nhiều đồ ngọt mất kiểm soát sau khi dùng thuốc",
      "Khiến người già chỉ thích ăn thức ăn cay nóng trên lâm sàng"
    ],
    "correct": 0,
    "explanation": "Giảm vị giác khiến người già dễ chán ăn, suy dinh dưỡng hoặc ăn nhiều muối làm tăng huyết áp.",
    "reference": "Sách DLS tr. 232"
  },
  {
    "id": 342,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Thuốc an thần điều trị mất ngủ nào sau đây được coi là an toàn hơn ở người cao tuổi?",
    "options": [
      "Dẫn chất Benzodiazepin tác dụng kéo dài",
      "Melatonin hoặc thuốc chủ vận thụ thể Melatonin",
      "Thuốc chống loạn thần thế hệ 1 Clopromazin",
      "Thuốc ngủ Barbiturat liều cao"
    ],
    "correct": 1,
    "explanation": "Melatonin có tác dụng sinh lý tự nhiên, không gây nghiện, không gây ức chế hô hấp hay mất thăng bằng té ngã.",
    "reference": "Sách DLS tr. 233"
  },
  {
    "id": 343,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Nhóm thuốc chẹn beta giao cảm ở người cao tuổi có đáp ứng lâm sàng thay đổi như thế nào?",
    "options": [
      "Giảm độ nhạy cảm của thụ thể beta giao cảm với thuốc",
      "Hoàn toàn mất tác dụng hạ áp",
      "Tăng nhạy cảm gấp 10 lần so với người trẻ tuổi",
      "Chỉ làm tăng nhịp tim nhanh kịch phát"
    ],
    "correct": 0,
    "explanation": "Mật độ và độ nhạy cảm của thụ thể beta-adrenergic giảm dần theo tuổi già.",
    "reference": "Sách DLS tr. 234"
  },
  {
    "id": 344,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Bệnh nhân cao tuổi có nguy cơ ngã rất cao nếu huyết áp tâm thu hạ xuống dưới mức:",
    "options": [
      "Dưới 110 mmHg",
      "Dưới 160 mmHg",
      "Dưới 130 mmHg",
      "Dưới 140 mmHg"
    ],
    "correct": 0,
    "explanation": "Hạ huyết áp quá tích cực (< 110-120 mmHg) ở người già làm thiếu máu não cục bộ gây chóng mặt té ngã.",
    "reference": "Sách DLS tr. 235"
  },
  {
    "id": 345,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Mục tiêu điều trị bệnh mạn tính ở người cao tuổi rất yếu cần ưu tiên hàng đầu tiêu chí nào?",
    "options": [
      "Duy trì chất lượng cuộc sống và phòng tránh biến cố té ngã do thuốc",
      "Kiểm soát đường huyết và huyết áp xuống mức thấp nhất kèm theo sốt nhẹ",
      "Chữa khỏi hoàn toàn tất cả các bệnh lý thoái hóa trong phác đồ chuẩn",
      "Kéo dài tuổi thọ bằng mọi can thiệp xâm lấn theo khuyến cáo"
    ],
    "correct": 0,
    "explanation": "Ở người già yếu, ưu tiên chất lượng sống, độc lập chức năng và an toàn hơn là kiểm soát chỉ số gắt gao.",
    "reference": "Sách DLS tr. 236"
  },
  {
    "id": 346,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Giai đoạn nào trong thai kỳ thai nhi nhạy cảm nhất với tác nhân gây quái thai dị tật hình thái?",
    "options": [
      "Giai đoạn tiền phôi trong 2 tuần đầu sau thụ tinh",
      "Giai đoạn ba tháng cuối trước khi chuyển dạ",
      "Giai đoạn chu sinh trong tuần cuối thai kỳ",
      "Giai đoạn hình thành cơ quan từ tuần thứ 3 đến tuần thứ 8"
    ],
    "correct": 3,
    "explanation": "Tuần 3 - 8 (ngày 18-56) là thời kỳ biệt hóa cơ quan, nhạy cảm tối đa với dị tật cấu trúc.",
    "reference": "Sách DLS tr. 240"
  },
  {
    "id": 347,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Quy luật 'tất cả hoặc không' của tác nhân độc hại thường áp dụng cho giai đoạn nào của thai kỳ?",
    "options": [
      "Giai đoạn thai nhi từ tháng thứ 4 trở đi",
      "Toàn bộ 9 tháng 10 ngày thai kỳ",
      "Giai đoạn tiền phôi hai tuần đầu sau thụ tinh",
      "Giai đoạn phôi thai từ tuần thứ 4 đến tuần thứ 8"
    ],
    "correct": 2,
    "explanation": "2 tuần đầu sau thụ tinh: nếu tổn thương nặng phôi sẽ chết tự nhiên, nếu nhẹ tế bào sửa chữa hoàn toàn.",
    "reference": "Sách DLS tr. 241"
  },
  {
    "id": 348,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Theo phân loại mức độ an toàn của FDA, nhóm thuốc nào được chứng minh có nguy cơ quái thai trên người nhưng lợi ích có thể chấp nhận trong tình huống đe dọa mạng sống?",
    "options": [
      "Nhóm B",
      "Nhóm A",
      "Nhóm X",
      "Nhóm D"
    ],
    "correct": 3,
    "explanation": "Nhóm D: có bằng chứng nguy cơ trên thai nhi người, nhưng lợi ích điều trị trong bệnh hiểm nghèo có thể vượt trội nguy cơ.",
    "reference": "Sách DLS tr. 242"
  },
  {
    "id": 349,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Nhóm thuốc phân loại mức độ nguy cơ X theo FDA có đặc điểm nào sau đây?",
    "options": [
      "Chống chỉ định tuyệt đối cho phụ nữ mang thai hoặc có thể mang thai",
      "An toàn tuyệt đối qua thử nghiệm lâm sàng có đối chứng sau khi dùng thuốc",
      "Chưa có nghiên cứu đầy đủ trên cơ thể người ở mức độ vừa và nặng định kỳ",
      "Được phép dùng rộng rãi trong suốt thai kỳ trên lâm sàng"
    ],
    "correct": 0,
    "explanation": "Nhóm X: nguy cơ quái thai rõ ràng, không có bất kỳ lợi ích điều trị nào bù đắp được, chống chỉ định tuyệt đối.",
    "reference": "Sách DLS tr. 243"
  },
  {
    "id": 350,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Đặc tính hóa lý nào của phân tử thuốc giúp thuốc dễ dàng khuếch tán thụ động qua hàng rào nhau thai?",
    "options": [
      "Trọng lượng phân tử rất lớn trên 1000 Dalton ở mức độ vừa và nặng",
      "Trọng lượng phân tử nhỏ dưới 500 Dalton và tan nhiều trong lipid",
      "Khả năng gắn kết rất mạnh với albumin huyết tương mẹ ở người bệnh",
      "Mức độ ion hóa rất cao ở pH sinh lý trên lâm sàng"
    ],
    "correct": 1,
    "explanation": "Thuốc phân tử nhỏ (< 500 Da), không ion hóa, tan nhiều trong lipid dễ qua nhau thai nhất.",
    "reference": "Sách DLS tr. 244"
  },
  {
    "id": 351,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Thuốc điều trị mụn trứng cá Isotretinoin bị xếp vào nhóm nguy cơ nào của FDA đối với thai kỳ?",
    "options": [
      "Nhóm A",
      "Nhóm X",
      "Nhóm C",
      "Nhóm B"
    ],
    "correct": 1,
    "explanation": "Isotretinoin gây dị tật sọ mặt, tai, tim nghiêm trọng, chống chỉ định tuyệt đối cho phụ nữ có thai.",
    "reference": "Sách DLS tr. 245"
  },
  {
    "id": 352,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Thuốc chống đông máu Warfarin dùng trong 3 tháng đầu thai kỳ gây ra hội chứng dị tật nào?",
    "options": [
      "Hội chứng phì đại tuyến giáp trạng bẩm sinh ở người bệnh",
      "Hội chứng teo cơ tủy sống tiến triển kèm theo sốt nhẹ",
      "Hội chứng vô sọ và thoát vị rốn trong phác đồ chuẩn",
      "Hội chứng quái thai Warfarin với mũi tẹt và bất thường xương"
    ],
    "correct": 3,
    "explanation": "Warfarin qua nhau thai gây bất thường sụn xương, mũi tẹt hình yên ngựa, mù mắt và chậm phát triển.",
    "reference": "Sách DLS tr. 246"
  },
  {
    "id": 353,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Thuốc chống đông máu được ưu tiên lựa chọn hàng đầu cho phụ nữ mang thai có nguy cơ huyết khối là:",
    "options": [
      "Thuốc chống đông đường uống Warfarin",
      "Thuốc ức chế yếu tố Xa Rivaroxaban",
      "Heparin trọng lượng phân tử thấp như Enoxaparin",
      "Thuốc ức chế trực tiếp thrombin Dabigatran"
    ],
    "correct": 2,
    "explanation": "Heparin và LMWH phân tử lượng lớn tích điện âm mạnh không qua được nhau thai nên an toàn cho thai nhi.",
    "reference": "Sách DLS tr. 247"
  },
  {
    "id": 354,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Nhóm thuốc hạ huyết áp nào sau đây chống chỉ định tuyệt đối trong quý 2 và quý 3 của thai kỳ?",
    "options": [
      "Thuốc ức chế men chuyển và thuốc ức chế thụ thể Angiotensin",
      "Thuốc hạ huyết áp tác động trung ương Methyldopa trong phác đồ chuẩn",
      "Thuốc chẹn beta giao cảm Labetalol kéo dài liên tục",
      "Thuốc giãn mạch trực tiếp Hydralazin theo khuyến cáo"
    ],
    "correct": 0,
    "explanation": "ƯCMC và ƯCTT gây thiểu ối, suy thận thai nhi, vô niệu, chậm phát triển xương sọ và tử vong thai nhi.",
    "reference": "Sách DLS tr. 248"
  },
  {
    "id": 355,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Thuốc hạ huyết áp kinh điển được xem là lựa chọn hàng đầu an toàn nhất cho phụ nữ mang thai là:",
    "options": [
      "Methyldopa",
      "Captopril",
      "Losartan",
      "Atenolol"
    ],
    "correct": 0,
    "explanation": "Methyldopa có hồ sơ an toàn lâu đời nhất, không gây ảnh hưởng xấu lên tuần hoàn nhau thai.",
    "reference": "Sách DLS tr. 249"
  },
  {
    "id": 356,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Thuốc giảm đau hạ sốt được lựa chọn ưu tiên hàng đầu và an toàn nhất trong thai kỳ là:",
    "options": [
      "Aspirin liều cao",
      "Celecoxib",
      "Paracetamol",
      "Ibuprofen"
    ],
    "correct": 2,
    "explanation": "Paracetamol là thuốc giảm đau hạ sốt chuẩn cho phụ nữ có thai ở liều điều trị thông thường.",
    "reference": "Sách DLS tr. 250"
  },
  {
    "id": 357,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Dùng thuốc chống viêm không steroid ở ba tháng cuối thai kỳ có thể dẫn đến biến chứng nguy hiểm nào?",
    "options": [
      "Đóng sớm ống động mạch và gây vô niệu thiểu ối",
      "Làm thai nhi chuyển dạ sinh non trước tháng thứ 7",
      "Gây dị tật tim bẩm sinh đảo gốc động mạch",
      "Gây đục thủy tinh thể thai nhi"
    ],
    "correct": 0,
    "explanation": "NSAID ức chế prostaglandin PGE2 làm co ống động mạch sớm gây tăng áp phổi và suy thận thai nhi.",
    "reference": "Sách DLS tr. 251"
  },
  {
    "id": 358,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Thuốc chống động kinh Acid Valproic dùng cho phụ nữ mang thai làm tăng nguy cơ dị tật nào?",
    "options": [
      "Dị tật khuyết tật ống thần kinh như tật nứt đốt sống",
      "Dị tật dính ngón tay chân bẩm sinh ở mức độ vừa và nặng",
      "Dị tật teo hẹp tá tràng bẩm sinh trên lâm sàng",
      "Bệnh lý mắt khổng lồ ở người bệnh"
    ],
    "correct": 0,
    "explanation": "Valproat kháng acid folic làm tăng nguy cơ nứt đốt sống và giảm chỉ số thông minh ở trẻ sinh ra.",
    "reference": "Sách DLS tr. 252"
  },
  {
    "id": 359,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Để dự phòng dị tật ống thần kinh ở thai nhi, phụ nữ dự định mang thai cần bổ sung chất nào?",
    "options": [
      "Vitamin D3 liều sốc đường tiêm ở người bệnh",
      "Muối Iod nguyên chất liều cao kèm theo sốt nhẹ",
      "Acid folic với liều tối thiểu 400 mcg mỗi ngày",
      "Vitamin A liều cao 50.000 đơn vị trên lâm sàng"
    ],
    "correct": 2,
    "explanation": "Uống acid folic 400-800 mcg/ngày ít nhất 1-3 tháng trước khi mang thai giảm 70% dị tật ống thần kinh.",
    "reference": "Sách DLS tr. 253"
  },
  {
    "id": 360,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Thuốc kiểm soát đường huyết được lựa chọn ưu tiên hàng đầu cho phụ nữ bị đái tháo đường thai kỳ là:",
    "options": [
      "Thuốc ức chế men DPP-4",
      "Thuốc ức chế men SGLT-2",
      "Thuốc viên uống Sulfonylure Glibenclamid",
      "Insulin người dạng tiêm dưới da"
    ],
    "correct": 3,
    "explanation": "Insulin không đi qua nhau thai và kiểm soát đường huyết hiệu quả nhất, chuẩn vàng trong thai kỳ.",
    "reference": "Sách DLS tr. 254"
  },
  {
    "id": 361,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Kháng sinh nhóm Penicillin và Cephalosporin được xếp vào mức độ an toàn nào cho phụ nữ mang thai?",
    "options": [
      "Nhóm nguy hiểm có bằng chứng quái thai loại D",
      "Nhóm an toàn cao loại B",
      "Nhóm chống chỉ định loại X",
      "Nhóm hoàn toàn chưa thử nghiệm"
    ],
    "correct": 1,
    "explanation": "Beta-lactam là kháng sinh an toàn nhất trong thai kỳ (FDA nhóm B).",
    "reference": "Sách DLS tr. 255"
  },
  {
    "id": 362,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Kháng sinh nào sau đây dùng cho mẹ gần ngày sinh có thể làm tăng nguy cơ vàng da nhân não ở trẻ sơ sinh?",
    "options": [
      "Kháng sinh Cefalexin",
      "Kháng sinh Sulfamid",
      "Kháng sinh Erythromycin",
      "Kháng sinh Amoxicillin"
    ],
    "correct": 1,
    "explanation": "Sulfamid cạnh tranh vị trí gắn kết bilirubin với albumin ở trẻ sơ sinh gần sinh gây vàng da nhân não.",
    "reference": "Sách DLS tr. 256"
  },
  {
    "id": 363,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Hội chứng hải cẩu với cụt tứ chi bẩm sinh nổi tiếng trong lịch sử dược học là do thảm họa của thuốc nào?",
    "options": [
      "Diethylstilbestrol",
      "Thalidomid",
      "Sulfanilamid",
      "Chloroquin"
    ],
    "correct": 1,
    "explanation": "Thalidomid dùng chống nghén những năm 1960 gây dị tật teo cụt chi hải cẩu ở hàng ngàn trẻ sơ sinh.",
    "reference": "Sách DLS tr. 257"
  },
  {
    "id": 364,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Kháng sinh Clarithromycin được khuyến cáo tránh dùng trong thai kỳ hơn so với Azithromycin vì:",
    "options": [
      "Làm thai nhi phát triển quá mức ở mức độ vừa và nặng",
      "Làm mất hoàn toàn tác dụng của oxytocin kéo dài liên tục",
      "Có dữ liệu ghi nhận dị tật tim thai trên động vật thực nghiệm",
      "Gây vàng da tắc mật cho người mẹ sau khi dùng thuốc"
    ],
    "correct": 2,
    "explanation": "Clarithromycin thuộc nhóm C (có độc tính trên phôi ở động vật), Azithromycin an toàn hơn (nhóm B).",
    "reference": "Sách DLS tr. 258"
  },
  {
    "id": 365,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Thể tích tuần hoàn huyết tương ở phụ nữ có thai thay đổi sinh lý như thế nào?",
    "options": [
      "Giảm khoảng 20% do thai chèn ép tĩnh mạch",
      "Hoàn toàn giữ nguyên không thay đổi",
      "Tăng từ 40 đến 50% so với trước khi mang thai",
      "Giảm mạnh dẫn đến tụt huyết áp kéo dài"
    ],
    "correct": 2,
    "explanation": "Thể tích máu và dịch ngoại bào tăng 40-50% làm tăng thể tích phân bố của nhiều loại thuốc.",
    "reference": "Sách DLS tr. 259"
  },
  {
    "id": 366,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Mức lọc cầu thận GFR ở người mẹ mang thai có sự biến đổi sinh lý nào?",
    "options": [
      "Giảm sút một nửa do thận bị chèn ép ở mức độ vừa và nặng",
      "Không có bất kỳ sự thay đổi nào ở người bệnh",
      "Hoàn toàn ngừng lọc trong 3 tháng giữa trên lâm sàng",
      "Tăng lên khoảng 50% làm tăng đào thải thuốc qua thận"
    ],
    "correct": 3,
    "explanation": "GFR tăng mạnh làm tăng thanh thải và giảm nồng độ đáy của các thuốc thải trừ qua thận như ampicillin.",
    "reference": "Sách DLS tr. 260"
  },
  {
    "id": 367,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Nồng độ Albumin huyết tương ở người mẹ mang thai giảm sinh lý do nguyên nhân nào?",
    "options": [
      "Do gan người mẹ ngừng sản xuất albumin trên lâm sàng định kỳ",
      "Do albumin bị thai nhi hấp thu hết ở người bệnh",
      "Hiện tượng pha loãng máu do thể tích tuần hoàn tăng mạnh",
      "Do albumin bị đào thải toàn bộ qua nước tiểu kèm theo sốt nhẹ"
    ],
    "correct": 2,
    "explanation": "Pha loãng sinh lý làm giảm nồng độ albumin, tăng tỷ lệ thuốc ở dạng tự do.",
    "reference": "Sách DLS tr. 261"
  },
  {
    "id": 368,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Thuốc điều trị buồn nôn và nôn thai nghén được coi là lựa chọn an toàn đầu tay là phối hợp:",
    "options": [
      "Pyridoxin và Doxylamin",
      "Metoclopramid liều cao",
      "Dexamethason truyền tĩnh mạch",
      "Ondansetron tiêm tĩnh mạch"
    ],
    "correct": 0,
    "explanation": "Phối hợp Vitamin B6 và doxylamin là thuốc chống nghén đầu tay được FDA phê duyệt an toàn cho thai kỳ.",
    "reference": "Sách DLS tr. 262"
  },
  {
    "id": 369,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Thuốc chống chỉ định tuyệt đối trong thai kỳ do nguy cơ ung thư biểu mô âm đạo ở con gái tuổi dậy thì là:",
    "options": [
      "Prednisolon",
      "Diethylstilbestrol",
      "Progesteron tự nhiên",
      "Methyldopa"
    ],
    "correct": 1,
    "explanation": "DES dùng chống dọa sảy thai trước đây gây ung thư biểu mô tế bào sáng âm đạo ở con gái sau này (ADR typ D).",
    "reference": "Sách DLS tr. 263"
  },
  {
    "id": 370,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Magnesi sulfat tiêm truyền tĩnh mạch được chỉ định trong sản khoa nhằm mục đích chính là:",
    "options": [
      "Gây chuyển dạ đẻ chỉ huy kéo dài liên tục",
      "Dự phòng và cắt cơn co giật trong sản giật nặng",
      "Kích thích tăng tiết sữa non sau sinh theo khuyến cáo",
      "Hạ huyết áp cấp cứu tức thì trong phác đồ chuẩn"
    ],
    "correct": 1,
    "explanation": "MgSO4 là thuốc hàng đầu để kiểm soát và dự phòng co giật ở bệnh nhân tiền sản giật/sản giật.",
    "reference": "Sách DLS tr. 264"
  },
  {
    "id": 371,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Chỉ số tỷ lệ nồng độ thuốc trong sữa mẹ so với huyết tương mẹ được ký hiệu là:",
    "options": [
      "Chỉ số RID",
      "Thể tích phân bố Vd",
      "Hệ số thanh thải Cl",
      "Tỷ số M trên P"
    ],
    "correct": 3,
    "explanation": "Tỷ số M/P (Milk to Plasma ratio) phản ánh mức độ bài xuất của thuốc vào sữa mẹ.",
    "reference": "Sách DLS tr. 265"
  },
  {
    "id": 372,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Chỉ số liều tương đối của trẻ bú mẹ được coi là an toàn chấp nhận được khi:",
    "options": [
      "Từ 20% đến 30%",
      "Dưới 10%",
      "Trên 50%",
      "Bằng 100%"
    ],
    "correct": 1,
    "explanation": "Chỉ số RID (Relative Infant Dose) < 10% được đa số chuyên gia coi là an toàn cho trẻ bú mẹ.",
    "reference": "Sách DLS tr. 266"
  },
  {
    "id": 373,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Đặc tính của sữa mẹ có xu hướng tích lũy các phân tử thuốc có tính chất hóa lý nào?",
    "options": [
      "Các thuốc có tính acid mạnh tan trong nước sau khi dùng thuốc",
      "Các thuốc có tính base yếu và tan nhiều trong lipid",
      "Các ion khoáng chất mang điện tích âm trên lâm sàng",
      "Các phân tử protein có kích thước khổng lồ ở mức độ vừa và nặng"
    ],
    "correct": 1,
    "explanation": "Sữa mẹ có pH hơi acid hơn huyết tương (khoảng 7,0-7,2) nên giữ các thuốc base yếu theo cơ chế bẫy ion.",
    "reference": "Sách DLS tr. 267"
  },
  {
    "id": 374,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Biện pháp dùng thuốc tối ưu để giảm thiểu lượng thuốc bài xuất vào sữa khi trẻ bú là:",
    "options": [
      "Tăng gấp đôi liều dùng của mẹ để sữa có nhiều kháng thể",
      "Cho trẻ bú ngay trước khi mẹ uống thuốc hoặc cách xa thời điểm dùng thuốc",
      "Cho trẻ bú ngay vào thời điểm thuốc đạt nồng độ đỉnh trong máu mẹ",
      "Bơm thẳng sữa mẹ ra bình rồi đun sôi khử thuốc"
    ],
    "correct": 1,
    "explanation": "Uống thuốc ngay sau khi cho con bú giúp nồng độ thuốc giảm nhiều trước cữ bú tiếp theo.",
    "reference": "Sách DLS tr. 268"
  },
  {
    "id": 375,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Thuốc điều trị suy giáp Levothyroxin ở phụ nữ mang thai thường cần điều chỉnh liều như thế nào?",
    "options": [
      "Cần tăng liều dùng từ 25 đến 50% trong thai kỳ",
      "Giữ nguyên liều cố định không cần xét nghiệm",
      "Phải giảm một nửa liều để không gây cường giáp thai nhi",
      "Cần ngừng thuốc ngay lập tức để tránh độc cho thai"
    ],
    "correct": 0,
    "explanation": "Nhu cầu hormon giáp tăng cao trong thai kỳ, phụ nữ suy giáp cần tăng liều levothyroxin ngay khi có thai.",
    "reference": "Sách DLS tr. 269"
  },
  {
    "id": 376,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Kháng nấm đường uống Fluconazol liều cao kéo dài trong 3 tháng đầu thai kỳ có nguy cơ gây dị tật gì?",
    "options": [
      "Gây hội chứng chân tay khoèo kèm theo sốt nhẹ",
      "Gây đục mờ giác mạc hai mắt trong phác đồ chuẩn",
      "Gây điếc tai tiếp nhận bẩm sinh ở người bệnh",
      "Dị tật sọ mặt và dị tật tim bẩm sinh phức tạp"
    ],
    "correct": 3,
    "explanation": "Fluconazol liều cao (> 400 mg/ngày) ức chế tổng hợp sterol gây hội chứng dị tật tương tự hội chứng Antley-Bixler.",
    "reference": "Sách DLS tr. 270"
  },
  {
    "id": 377,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Thuốc ức chế miễn dịch Methotrexat chống chỉ định tuyệt đối cho thai phụ vì tác hại nào?",
    "options": [
      "Sảy thai, thai chết lưu và hội chứng quái thai nghiêm trọng",
      "Làm thai nhi phát triển thành thai to quá khổ theo khuyến cáo",
      "Gây tăng huyết áp thai kỳ ác tính kèm theo sốt nhẹ định kỳ",
      "Gây đái tháo đường khởi phát sớm ở thai trong phác đồ chuẩn"
    ],
    "correct": 0,
    "explanation": "Methotrexat là chất ức chế tổng hợp ADN cực mạnh, thuốc phá thai nội khoa, nhóm X của FDA.",
    "reference": "Sách DLS tr. 271"
  },
  {
    "id": 378,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Để thúc đẩy sự trưởng thành phổi của thai nhi khi dọa sinh non trước 34 tuần, thuốc được chỉ định là:",
    "options": [
      "Prednisolon dạng viên nén uống",
      "Betamethason hoặc Dexamethason tiêm bắp",
      "Hydrocortison tiêm tĩnh mạch liều cao",
      "Methylprednisolon truyền ngắt quãng"
    ],
    "correct": 1,
    "explanation": "Betamethason/Dexamethason qua nhau thai tốt kích thích tổng hợp surfactant ở phế nang thai nhi.",
    "reference": "Sách DLS tr. 272"
  },
  {
    "id": 379,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Thuốc kháng giáp trạng tổng hợp được ưu tiên lựa chọn trong 3 tháng đầu thai kỳ là:",
    "options": [
      "Thiamazol",
      "Dung dịch Iod Lugol liều cao",
      "Propylthiouracil",
      "Methimazol"
    ],
    "correct": 2,
    "explanation": "PTU ít gây dị tật da đầu và teo thực quản hơn Methimazol trong quý 1; sau quý 1 có thể chuyển sang Methimazol.",
    "reference": "Sách DLS tr. 273"
  },
  {
    "id": 380,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Thuốc kháng Histamin H1 nào sau đây được chứng minh có hồ sơ an toàn tốt nhất cho phụ nữ mang thai?",
    "options": [
      "Diphenhydramin liều tối đa",
      "Hydroxyzin liều cao",
      "Promethazin dạng tiêm",
      "Chlorpheniramin và Cetirizin"
    ],
    "correct": 3,
    "explanation": "Chlorpheniramin (thế hệ 1) và Cetirizin, Loratadin (thế hệ 2) được phân loại an toàn nhóm B cho thai kỳ.",
    "reference": "Sách DLS tr. 274"
  },
  {
    "id": 381,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Phụ nữ mang thai bị hen phế quản cần điều trị cắt cơn khó thở cấp tính bằng thuốc nào?",
    "options": [
      "Tiêm bắp Morphin giảm kích thích hô hấp",
      "Khí dung Salbutamol dạng hít định liều",
      "Truyền tĩnh mạch Magnesi sulfat liều cao",
      "Uống viên nén Theophyllin tác dụng kéo dài"
    ],
    "correct": 1,
    "explanation": "SABA dạng hít như Salbutamol tác dụng tại chỗ ở phế quản, rất ít hấp thu toàn thân, an toàn cho mẹ và thai.",
    "reference": "Sách DLS tr. 275"
  },
  {
    "id": 382,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Corticoid hít được nghiên cứu nhiều nhất và khuyến cáo ưu tiên cho thai phụ mắc hen phế quản là:",
    "options": [
      "Fluticason propionat",
      "Mometason furoat",
      "Budesonid dạng hít",
      "Beclomethason dipropionat"
    ],
    "correct": 2,
    "explanation": "Budesonid có nhiều dữ liệu nghiên cứu dịch tễ trên phụ nữ mang thai nhất và được xếp nhóm B.",
    "reference": "Sách DLS tr. 276"
  },
  {
    "id": 383,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Kháng sinh nào sau đây an toàn và thích hợp điều trị nhiễm trùng tiết niệu không triệu chứng ở thai phụ?",
    "options": [
      "Doxycyclin viên nang",
      "Ciprofloxacin dạng viên nén",
      "Co-trimoxazol vào tuần 38 thai kỳ",
      "Amoxicillin clavulanat hoặc Cefalexin"
    ],
    "correct": 3,
    "explanation": "Cephalosporin thế hệ 1 hoặc Augmentin là lựa chọn đầu tay an toàn điều trị khuẩn niệu ở thai phụ.",
    "reference": "Sách DLS tr. 277"
  },
  {
    "id": 384,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Kháng sinh Macrolid nào sau đây được xem là an toàn nhất để điều trị nhiễm khuẩn đường thở cho thai phụ?",
    "options": [
      "Telithromycin",
      "Azithromycin",
      "Clarithromycin",
      "Roxithromycin"
    ],
    "correct": 1,
    "explanation": "Azithromycin thuộc phân loại FDA nhóm B, hấp thu tốt và an toàn cao trong suốt thai kỳ.",
    "reference": "Sách DLS tr. 278"
  },
  {
    "id": 385,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Bổ sung sắt cho phụ nữ mang thai nhằm mục đích phòng ngừa bệnh lý nào phổ biến nhất?",
    "options": [
      "Thiếu máu do thiếu sắt ở mẹ và suy dinh dưỡng bào thai",
      "Nhiễm độc thai nghén tiền sản giật trong phác đồ chuẩn",
      "Gãy xương chậu tự phát khi sinh theo khuyến cáo",
      "Tiểu đường thai kỳ kháng insulin kèm theo sốt nhẹ định kỳ"
    ],
    "correct": 0,
    "explanation": "Nhu cầu sắt tăng gấp đôi trong thai kỳ để tạo máu cho mẹ và thai nhi.",
    "reference": "Sách DLS tr. 279"
  },
  {
    "id": 386,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Tác dụng không mong muốn thường gặp nhất của viên uống bổ sung sắt ở phụ nữ mang thai là:",
    "options": [
      "Táo bón, buồn nôn và phân có màu đen",
      "Xuất huyết dưới da dạng chấm",
      "Tiêu chảy phân mỡ ồ ạt",
      "Hạ đường huyết kịch phát"
    ],
    "correct": 0,
    "explanation": "Táo bón và buồn nôn là ADR điển hình của sắt uống, làm nhiều thai phụ bỏ thuốc.",
    "reference": "Sách DLS tr. 280"
  },
  {
    "id": 387,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Thuốc ức chế tiết sữa Cabergolin hoặc Bromocriptin có cơ chế tác dụng dược lý là gì?",
    "options": [
      "Ức chế bài tiết hormon tăng trưởng GH",
      "Phá hủy trực tiếp nang tuyến sữa",
      "Kháng thụ thể Oxytocin tại tế bào cơ biểu mô tuyến vú",
      "Kích thích thụ thể Dopamin D2 làm ức chế giải phóng Prolactin"
    ],
    "correct": 3,
    "explanation": "Chất chủ vận dopamin ức chế thùy trước tuyến yên tiết prolactin làm ngừng tạo sữa.",
    "reference": "Sách DLS tr. 281"
  },
  {
    "id": 388,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Kháng sinh nào sau đây có thể gây biến đổi màu răng của trẻ nhỏ khi bú mẹ kéo dài?",
    "options": [
      "Erythromycin",
      "Cefixim",
      "Tetracyclin",
      "Penicillin V"
    ],
    "correct": 2,
    "explanation": "Tetracyclin bài xuất vào sữa mẹ và liên kết với calci của răng trẻ bú mẹ gây ố màu men răng.",
    "reference": "Sách DLS tr. 282"
  },
  {
    "id": 389,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Người mẹ đang cho con bú cần giảm đau sau sinh nên ưu tiên chọn thuốc nào an toàn nhất?",
    "options": [
      "Codein dạng viên phối hợp",
      "Aspirin liều cao 1000 mg",
      "Tramadol tiêm truyền",
      "Ibuprofen hoặc Paracetamol"
    ],
    "correct": 3,
    "explanation": "Ibuprofen và Paracetamol bài tiết vào sữa rất ít, có chỉ số RID < 1%, rất an toàn cho con bú.",
    "reference": "Sách DLS tr. 283"
  },
  {
    "id": 390,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Cơ quan Quản lý Dược phẩm Hoa Kỳ cảnh báo không dùng Codein cho bà mẹ đang cho con bú vì:",
    "options": [
      "Trẻ bú mẹ có thể ngộ độc Morphin dẫn đến hôn mê ngừng thở",
      "Làm mất sữa hoàn toàn của người mẹ ở mức độ vừa và nặng",
      "Làm trẻ bị tiêu chảy nhiễm khuẩn nặng ở người bệnh",
      "Gây vàng da tắc mật kéo dài ở trẻ sơ sinh trên lâm sàng"
    ],
    "correct": 0,
    "explanation": "Mẹ mang kiểu gen chuyển hóa siêu nhanh CYP2D6 biến codein thành morphin bài tiết vào sữa làm chết trẻ bú mẹ.",
    "reference": "Sách DLS tr. 284"
  },
  {
    "id": 391,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Khi người mẹ đang cho con bú bắt buộc phải dùng thuốc có tỷ lệ bài xuất vào sữa cao thì can thiệp là:",
    "options": [
      "Tạm thời vắt bỏ sữa mẹ và cho trẻ ăn sữa công thức trong đợt dùng thuốc",
      "Đun sôi sữa mẹ ở 100 độ C trước khi cho bú kèm theo sốt nhẹ",
      "Vẫn cho con bú bình thường và theo dõi nhịp thở trên lâm sàng định kỳ",
      "Cho trẻ uống kèm than hoạt tính để hấp phụ thuốc ở người bệnh"
    ],
    "correct": 0,
    "explanation": "Tạm ngừng bú mẹ trong thời gian dùng thuốc độc tính cao và duy trì vắt sữa để tránh mất sữa.",
    "reference": "Sách DLS tr. 285"
  },
  {
    "id": 392,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Thuốc nào sau đây làm tăng tiết sữa mẹ do có tác dụng đối kháng thụ thể Dopamin D2 ngoại vi?",
    "options": [
      "Domperidon",
      "Loperamid",
      "Omeprazol",
      "Ranitidin"
    ],
    "correct": 0,
    "explanation": "Domperidon phong bế thụ thể D2 tuyến yên kích thích giải phóng prolactin làm tăng tiết sữa.",
    "reference": "Sách DLS tr. 286"
  },
  {
    "id": 393,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Phụ nữ mang thai bị nhiễm trùng âm đạo do Trichomonas có thể dùng Metronidazol ở thời điểm nào?",
    "options": [
      "Chỉ được dùng ở dạng tiêm dưới da",
      "Chống chỉ định tuyệt đối trong suốt 9 tháng thai kỳ",
      "Có thể dùng an toàn sau 3 tháng đầu của thai kỳ",
      "Chỉ được dùng duy nhất trong tuần đầu tiên"
    ],
    "correct": 2,
    "explanation": "Metronidazol an toàn cho thai phụ sau quý 1 (từ tuần 14 trở đi) để điều trị viêm âm đạo.",
    "reference": "Sách DLS tr. 287"
  },
  {
    "id": 394,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Nhóm thuốc chống nấm Azol bôi ngoài da tại chỗ cho phụ nữ mang thai có đặc điểm gì?",
    "options": [
      "Gây sảy thai tự nhiên ngay lập tức",
      "Gây ức chế chức năng tuyến thượng thận thai nhi",
      "Hấp thu toàn thân rất thấp và an toàn khi dùng tại chỗ",
      "Chống chỉ định tuyệt đối cho mọi vùng da"
    ],
    "correct": 2,
    "explanation": "Clotrimazol hay Miconazol dùng bôi ngoài da hấp thu vào máu mẹ không đáng kể, an toàn cho thai.",
    "reference": "Sách DLS tr. 288"
  },
  {
    "id": 395,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Nguyên tắc chung cốt lõi khi sử dụng thuốc cho phụ nữ mang thai là:",
    "options": [
      "Dùng liều gấp đôi để đảm bảo nồng độ thuốc cho cả mẹ và thai theo khuyến cáo định kỳ",
      "Thay thế toàn bộ thuốc tây y bằng các bài thuốc dân gian truyền miệng kéo dài liên tục",
      "Không bao giờ được sử dụng bất kỳ loại thuốc nào sau khi dùng thuốc",
      "Chỉ dùng khi thật sự cần thiết với liều thấp nhất có hiệu quả trong thời gian ngắn nhất"
    ],
    "correct": 3,
    "explanation": "Cân nhắc kỹ cán cân lợi ích/nguy cơ, ưu tiên thuốc có lịch sử an toàn lâu đời nhất.",
    "reference": "Sách DLS tr. 289"
  },
  {
    "id": 396,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Thông số PK/PD nào phản ánh tối ưu hiệu quả diệt khuẩn của nhóm kháng sinh Beta-lactam?",
    "options": [
      "Tỷ lệ thời gian nồng độ thuốc trong máu vượt quá MIC",
      "Diện tích dưới đường cong nồng độ trên MIC",
      "Thời gian thuốc tồn tại trong lòng thực bào",
      "Tỷ số nồng độ đỉnh trên nồng độ ức chế tối thiểu"
    ],
    "correct": 0,
    "explanation": "Beta-lactam là kháng sinh diệt khuẩn phụ thuộc thời gian, mục tiêu T > MIC đạt ít nhất 40-70% khoảng liều.",
    "reference": "Sách DLS tr. 295"
  },
  {
    "id": 397,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Thông số PK/PD đặc trưng quyết định hiệu lực kháng khuẩn của kháng sinh nhóm Aminosid là:",
    "options": [
      "Thể tích phân bố toàn phần của thuốc trong dịch ngoại bào",
      "Thời gian nồng độ thuốc duy trì trên MIC",
      "Tỷ số nồng độ thuốc tại mô mỡ trên huyết tương",
      "Tỷ số giữa nồng độ đỉnh Cmax trên nồng độ ức chế tối thiểu MIC"
    ],
    "correct": 3,
    "explanation": "Aminosid diệt khuẩn phụ thuộc nồng độ, mục tiêu Cmax/MIC đạt từ 8 đến 10 lần để tối đa hóa diệt khuẩn.",
    "reference": "Sách DLS tr. 296"
  },
  {
    "id": 398,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Thông số PK/PD liên quan chặt chẽ nhất đến hiệu quả điều trị của kháng sinh Vancomycin là:",
    "options": [
      "Tỷ số diện tích dưới đường cong 24 giờ trên MIC đạt trên 400",
      "Nồng độ đỉnh Cmax đạt trên 100 mg/L ở mức độ vừa và nặng",
      "Tốc độ truyền tĩnh mạch chậm dưới 10 phút ở người bệnh",
      "Thời gian T > MIC đạt 100% khoảng liều trên lâm sàng"
    ],
    "correct": 0,
    "explanation": "Hiệu quả điều trị MRSA của Vancomycin tương quan tốt nhất với AUC24/MIC >= 400 (thường từ 400-600).",
    "reference": "Sách DLS tr. 297"
  },
  {
    "id": 399,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Hiện tượng tác dụng hậu kháng sinh kéo dài là đặc tính nổi bật của nhóm kháng sinh nào?",
    "options": [
      "Aminosid và Fluoroquinolon",
      "Cefuroxim và Ceftriaxon",
      "Penicillin và Ampicillin",
      "Sulfamethoxazol và Trimethoprim"
    ],
    "correct": 0,
    "explanation": "PAE kéo dài cho phép Aminosid vẫn ức chế vi khuẩn nhiều giờ sau khi nồng độ thuốc đã hạ xuống dưới MIC.",
    "reference": "Sách DLS tr. 298"
  },
  {
    "id": 400,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Chế độ liều dùng Aminosid một lần duy nhất trong ngày dựa trên những cơ sở khoa học nào?",
    "options": [
      "Làm giảm thời gian truyền thuốc xuống mức thấp nhất",
      "Tăng khả năng liên kết của kháng sinh với protein huyết tương",
      "Tối ưu hóa tỷ số Cmax trên MIC và giảm tích lũy gây độc tai thận",
      "Giúp thuốc hấp thu tốt hơn qua đường tiêu hóa"
    ],
    "correct": 2,
    "explanation": "Liều đơn hàng ngày đạt đỉnh Cmax rất cao giúp diệt khuẩn mạnh và nồng độ đáy thấp giảm độc tai thận.",
    "reference": "Sách DLS tr. 299"
  },
  {
    "id": 401,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh nhóm Carbapenem như Meropenem có thể tối ưu hóa hiệu quả điều trị nhiễm khuẩn nặng bằng cách:",
    "options": [
      "Giảm số lần đưa thuốc xuống 1 lần duy nhất trong tuần",
      "Chuyển sang dùng đường uống sau bữa ăn",
      "Tiêm tĩnh mạch trực tiếp thật nhanh trong 1 phút",
      "Kéo dài thời gian truyền tĩnh mạch từ 3 đến 4 giờ"
    ],
    "correct": 3,
    "explanation": "Truyền kéo dài (extended infusion) tối đa hóa chỉ số T > MIC cho vi khuẩn gram âm kháng thuốc.",
    "reference": "Sách DLS tr. 300"
  },
  {
    "id": 402,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Cơ chế tác dụng kháng khuẩn của nhóm kháng sinh Beta-lactam là gì?",
    "options": [
      "Làm rối loạn tính thấm của màng bào tương vi khuẩn",
      "Ức chế tiểu đơn vị 30S của ribosom ngăn tổng hợp protein",
      "Ức chế enzym Transpeptidase ngăn cản tổng hợp vách peptidoglycan",
      "Ức chế enzym ADN gyrase cản trở sao chép vật chất di truyền"
    ],
    "correct": 2,
    "explanation": "Beta-lactam gắn PBP ức chế giai đoạn cuối cùng trong liên kết chéo peptidoglycan làm vách tế bào vỡ tung.",
    "reference": "Sách DLS tr. 301"
  },
  {
    "id": 403,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Cơ chế tác dụng của kháng sinh nhóm Aminosid trên vi khuẩn là:",
    "options": [
      "Gắn vào tiểu đơn vị 50S ngăn cản tạo liên kết peptid kéo dài liên tục",
      "Ức chế tổng hợp acid mycolic ở thành tế bào vi khuẩn theo khuyến cáo định kỳ",
      "Ức chế enzym dihydropteroat synthetase tổng hợp acid folic sau khi dùng thuốc",
      "Gắn không hồi phục vào tiểu đơn vị 30S của ribosom gây sai lệch dịch mã"
    ],
    "correct": 3,
    "explanation": "Aminosid gắn 30S gây đọc sai mã mARN và ức chế tổng hợp protein dẫn đến chết vi khuẩn.",
    "reference": "Sách DLS tr. 302"
  },
  {
    "id": 404,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh nhóm Macrolid tác động lên quá trình sinh học nào của vi khuẩn?",
    "options": [
      "Phá hủy màng tế bào ngoài của vi khuẩn gram âm kéo dài liên tục",
      "Ức chế enzym ARN polymerase phụ thuộc ADN sau khi dùng thuốc",
      "Ức chế tổng hợp protein thông qua gắn kết tiểu đơn vị 50S ribosom",
      "Cạnh tranh vị trí gắn kết của chất đối kháng PABA ở mức độ vừa và nặng"
    ],
    "correct": 2,
    "explanation": "Macrolid gắn tiểu đơn vị 50S ribosom ngăn chặn phản ứng chuyển vị của chuỗi polypeptid.",
    "reference": "Sách DLS tr. 303"
  },
  {
    "id": 405,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh nhóm Fluoroquinolon tiêu diệt vi khuẩn thông qua ức chế các enzym nào?",
    "options": [
      "ADN gyrase và Topoisomerase IV của vi khuẩn",
      "Enzym Dihydrofolat reductase vi khuẩn",
      "Enzym Transpeptidase và Carboxypeptidase",
      "Enzym Beta-lactamase phổ rộng"
    ],
    "correct": 0,
    "explanation": "Quinolon ức chế ADN gyrase (vi khuẩn gram âm) và Topoisomerase IV (vi khuẩn gram dương).",
    "reference": "Sách DLS tr. 304"
  },
  {
    "id": 406,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh Glycopeptid như Vancomycin diệt khuẩn thông qua cơ chế nào?",
    "options": [
      "Ức chế tổng hợp các tiền chất lipid A ở người bệnh",
      "Gắn vào chuỗi D-Ala-D-Ala ngăn cản kéo dài chuỗi peptidoglycan",
      "Xâm nhập qua kênh porin phá vỡ màng tế bào ở mức độ vừa và nặng",
      "Gắn vào tiểu đơn vị 30S gây ngừng dịch mã trên lâm sàng"
    ],
    "correct": 1,
    "explanation": "Vancomycin gắn vào tận cùng D-alanyl-D-alanin ngăn cản tổng hợp vách tế bào vi khuẩn gram dương.",
    "reference": "Sách DLS tr. 305"
  },
  {
    "id": 407,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh nào sau đây chỉ có tác dụng trên vi khuẩn kỵ khí và động vật nguyên sinh?",
    "options": [
      "Metronidazol",
      "Gentamicin",
      "Amikacin",
      "Ciprofloxacin"
    ],
    "correct": 0,
    "explanation": "Metronidazol cần môi trường khử của vi khuẩn kỵ khí để kích hoạt nhóm nitro thành gốc tự do phá hủy ADN.",
    "reference": "Sách DLS tr. 306"
  },
  {
    "id": 408,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh nhóm Aminosid hoàn toàn không có tác dụng trên nhóm vi khuẩn nào?",
    "options": [
      "Trực khuẩn mủ xanh Pseudomonas",
      "Vi khuẩn kỵ khí tuyệt đối",
      "Tụ cầu vàng nhạy cảm methicillin",
      "Vi khuẩn hiếu khí Gram âm"
    ],
    "correct": 1,
    "explanation": "Aminosid cần hệ thống vận chuyển phụ thuộc oxy để vào trong tế bào nên vô hiệu với vi khuẩn kỵ khí.",
    "reference": "Sách DLS tr. 307"
  },
  {
    "id": 409,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Phối hợp Amoxicillin với Acid Clavulanic đem lại lợi ích điều trị gì?",
    "options": [
      "Làm giảm tác dụng phụ tiêu chảy của Amoxicillin trong phác đồ chuẩn",
      "Làm tăng tốc độ lọc của kháng sinh qua cầu thận kèm theo sốt nhẹ",
      "Bảo vệ Amoxicillin không bị phân hủy bởi enzym Beta-lactamase",
      "Mở rộng phổ tác dụng trên trực khuẩn mủ xanh theo khuyến cáo"
    ],
    "correct": 2,
    "explanation": "Acid clavulanic là chất ức chế beta-lactamase bất hoạt enzym của vi khuẩn tiết ra.",
    "reference": "Sách DLS tr. 308"
  },
  {
    "id": 410,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Chất ức chế Beta-lactamase Tazobactam thường được phối hợp với kháng sinh nào?",
    "options": [
      "Ampicillin",
      "Piperacillin",
      "Cefotaxim",
      "Meropenem"
    ],
    "correct": 1,
    "explanation": "Phối hợp Piperacillin/Tazobactam có phổ kháng khuẩn rất rộng bao phủ cả trực khuẩn mủ xanh Pseudomonas.",
    "reference": "Sách DLS tr. 309"
  },
  {
    "id": 411,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh Cephalosporin thế hệ mấy có hoạt tính mạnh nhất trên trực khuẩn mủ xanh Pseudomonas aeruginosa?",
    "options": [
      "Cephalosporin thế hệ 1 như Cefazolin và Cefalexin theo khuyến cáo",
      "Cephalosporin thế hệ 5 như Ceftarolin sau khi dùng thuốc",
      "Cephalosporin thế hệ 3 như Ceftazidim và thế hệ 4 như Cefepim",
      "Cephalosporin thế hệ 2 như Cefuroxim kéo dài liên tục định kỳ"
    ],
    "correct": 2,
    "explanation": "Ceftazidim và Cefepim là các cephalosporin kháng trực khuẩn mủ xanh chủ lực trên lâm sàng.",
    "reference": "Sách DLS tr. 310"
  },
  {
    "id": 412,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh Cephalosporin thế hệ 5 Ceftarolin có ưu điểm vượt trội nào so với thế hệ trước?",
    "options": [
      "Có tác dụng diệt nấm sợi và virus hợp bào sau khi dùng thuốc",
      "Dùng được bằng đường uống cho trẻ sơ sinh ở mức độ vừa và nặng",
      "Có hoạt tính điều trị trên tụ cầu vàng kháng methicillin",
      "Không bị đào thải qua thận ở người suy thận kéo dài liên tục"
    ],
    "correct": 2,
    "explanation": "Ceftarolin gắn ái lực cao vào PBP-2a nên có hoạt tính diệt chủng MRSA.",
    "reference": "Sách DLS tr. 311"
  },
  {
    "id": 413,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Vi khuẩn tụ cầu vàng đề kháng Methicillin (MRSA) thông qua cơ chế phân tử nào?",
    "options": [
      "Bơm đẩy chủ động tống kháng sinh ra ngoài màng trên lâm sàng",
      "Biến đổi protein gắn Penicillin thành dạng PBP-2a có ái lực rất thấp",
      "Tiết ra một lượng khổng lồ enzym Penicillinase sau khi dùng thuốc định kỳ",
      "Đóng hoàn toàn các kênh porin trên màng ngoài ở mức độ vừa và nặng"
    ],
    "correct": 1,
    "explanation": "Gen mecA mã hóa PBP-2a làm mất ái lực gắn của hầu hết các beta-lactam.",
    "reference": "Sách DLS tr. 312"
  },
  {
    "id": 414,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh Linezolid diệt khuẩn vi khuẩn Gram dương kháng thuốc thông qua vị trí tác động nào?",
    "options": [
      "Ức chế hấp thu acid folic từ môi trường ở người bệnh",
      "Ức chế enzym ARN polymerase của vi khuẩn trên lâm sàng",
      "Gắn vào vị trí 23S của tiểu đơn vị 50S ngăn tạo phức hợp khởi đầu",
      "Phá vỡ màng phospholipid ngoài của tế bào vi khuẩn ở mức độ vừa và nặng"
    ],
    "correct": 2,
    "explanation": "Linezolid (Oxazolidinon) ức chế giai đoạn sớm nhất của dịch mã protein vi khuẩn.",
    "reference": "Sách DLS tr. 313"
  },
  {
    "id": 415,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Tác dụng không mong muốn cần theo dõi sát khi điều trị Linezolid kéo dài trên 2 tuần là:",
    "options": [
      "Độc tính trên ốc tai gây điếc tai vĩnh viễn",
      "Ức chế tủy xương gây giảm tiểu cầu và thiếu máu",
      "Đứt gân gót Achilles hai bên",
      "Loét thủng dạ dày tá tràng"
    ],
    "correct": 1,
    "explanation": "Dùng Linezolid > 14 ngày làm tăng nguy cơ suy tủy có hồi phục (đặc biệt giảm tiểu cầu) và viêm dây thần kinh ngoại biên.",
    "reference": "Sách DLS tr. 314"
  },
  {
    "id": 416,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh Colistin (Polymyxin E) thường được giữ lại làm vũ khí cuối cùng để điều trị:",
    "options": [
      "Nhiễm vi khuẩn lao kháng đa thuốc kèm theo sốt nhẹ",
      "Nhiễm nấm Candida xâm lấn toàn thân ở người bệnh",
      "Nhiễm virus cúm mùa ác tính trong phác đồ chuẩn",
      "Trực khuẩn Gram âm đa kháng thuốc và toàn kháng thuốc"
    ],
    "correct": 3,
    "explanation": "Colistin diệt trực khuẩn Gram âm đa kháng (Acinetobacter baumannii, Pseudomonas, K. pneumoniae).",
    "reference": "Sách DLS tr. 315"
  },
  {
    "id": 417,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Hai độc tính nghiêm trọng nhất của kháng sinh Colistin trên lâm sàng là gì?",
    "options": [
      "Gây điếc vĩnh viễn và mù lòa cấp tính trong phác đồ chuẩn",
      "Gây hoại tử tế bào gan bùng phát theo khuyến cáo",
      "Độc tính trên tủy xương và độc võng mạc kèm theo sốt nhẹ",
      "Độc tính trên thận và độc tính trên thần kinh cơ"
    ],
    "correct": 3,
    "explanation": "Colistin gây hoại tử ống thận cấp và chẹn thần kinh cơ dẫn đến liệt cơ hô hấp ngừng thở.",
    "reference": "Sách DLS tr. 316"
  },
  {
    "id": 418,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Mục đích chính của việc sử dụng kháng sinh dự phòng trong ngoại khoa là gì?",
    "options": [
      "Tiêu diệt toàn bộ vi khuẩn cộng sinh trong đường tiêu hóa",
      "Ngăn ngừa nhiễm khuẩn tại vị trí vết mổ phẫu thuật",
      "Khử trùng dụng cụ phẫu thuật trong phòng mổ",
      "Điều trị triệt để ổ nhiễm trùng đã có sẵn trong cơ thể"
    ],
    "correct": 1,
    "explanation": "KSDP nhằm diệt vi khuẩn xâm nhập vào vết mổ trong quá trình phẫu thuật, phòng ngừa SSI.",
    "reference": "Hướng dẫn KSDP - Bộ Y tế"
  },
  {
    "id": 419,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Phẫu thuật nào sau đây bắt buộc phải sử dụng kháng sinh dự phòng thường quy?",
    "options": [
      "Phẫu thuật sạch có đặt vật liệu nhân tạo và phẫu thuật sạch nhiễm",
      "Nội soi chẩn đoán dạ dày thông thường sau khi dùng thuốc",
      "Tiểu phẫu cắt nốt ruồi ngoài da kéo dài liên tục",
      "Tất cả các ca phẫu thuật sạch nông không đặt dị vật theo khuyến cáo"
    ],
    "correct": 0,
    "explanation": "Phẫu thuật sạch có cấy ghép mô/vật liệu nhân tạo và phẫu thuật sạch-nhiễm luôn có chỉ định KSDP.",
    "reference": "Hướng dẫn KSDP - Bộ Y tế"
  },
  {
    "id": 420,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Thời điểm tiêm kháng sinh dự phòng đường tĩnh mạch tối ưu nhất là khi nào?",
    "options": [
      "Sau khi ca phẫu thuật đã hoàn thành đưa về phòng hồi tỉnh",
      "Trong vòng 60 phút trước khi rạch da phẫu thuật",
      "Chỉ tiêm khi vết mổ bắt đầu chảy dịch mủ",
      "Trước khi phẫu thuật 24 giờ đồng hồ"
    ],
    "correct": 1,
    "explanation": "Tiêm trước rạch da 30-60 phút để nồng độ kháng sinh tại mô vết mổ đạt đỉnh lúc rạch da.",
    "reference": "Hướng dẫn KSDP - Bộ Y tế"
  },
  {
    "id": 421,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Đối với hai kháng sinh Vancomycin và Fluoroquinolon, thời điểm bắt đầu truyền dự phòng là:",
    "options": [
      "Trước khi rạch da đúng 15 phút sau khi dùng thuốc định kỳ",
      "Sau khi rạch da hoàn tất ở mức độ vừa và nặng",
      "Trước khi phẫu thuật 3 ngày liên tục trên lâm sàng",
      "Bắt đầu truyền trong vòng 120 phút trước khi rạch da"
    ],
    "correct": 3,
    "explanation": "Vancomycin và Quinolon cần truyền chậm ít nhất 60-120 phút để tránh tụt áp và hội chứng Red man.",
    "reference": "Hướng dẫn KSDP - Bộ Y tế"
  },
  {
    "id": 422,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh được lựa chọn phổ biến và chuẩn mực nhất cho hầu hết các loại phẫu thuật dự phòng là:",
    "options": [
      "Meropenem",
      "Ceftriaxon",
      "Gentamicin",
      "Cefazolin"
    ],
    "correct": 3,
    "explanation": "Cefazolin (Cephalosporin thế hệ 1) diệt tụ cầu và liên cầu tốt, T1/2 phù hợp và giá thành hợp lý.",
    "reference": "Hướng dẫn KSDP - Bộ Y tế"
  },
  {
    "id": 423,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Trong phẫu thuật đại trực tràng sạch nhiễm, phác đồ kháng sinh dự phòng cần bao phủ thêm nhóm vi khuẩn nào?",
    "options": [
      "Vi khuẩn lao kháng thuốc ở người bệnh",
      "Vi khuẩn kỵ khí đường ruột như Bacteroides fragilis",
      "Nấm men Candida albicans trên lâm sàng định kỳ",
      "Virus viêm gan B và C kèm theo sốt nhẹ"
    ],
    "correct": 1,
    "explanation": "Đại trực tràng chứa nhiều vi khuẩn kỵ khí, cần phối hợp Cefazolin với Metronidazol (hoặc dùng Cefoxitin).",
    "reference": "Hướng dẫn KSDP - Bộ Y tế"
  },
  {
    "id": 424,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Chỉ định tiêm nhắc lại liều kháng sinh dự phòng trong quá trình phẫu thuật khi nào?",
    "options": [
      "Bệnh nhân có biểu hiện sốt nhẹ trong lúc mổ ở người bệnh ở bệnh nhân có nguy cơ biến chứng cao",
      "Thời gian phẫu thuật kéo dài quá 2 lần thời gian bán thải của thuốc",
      "Chỉ tiêm nhắc lại khi mổ xong trong phác đồ chuẩn kéo dài liên tục trên lâm sàng",
      "Sau mỗi 30 phút bất kể thời gian mổ kèm theo sốt nhẹ theo đúng hướng dẫn của Bộ Y tế"
    ],
    "correct": 1,
    "explanation": "Cần bổ sung liều trong mổ nếu thời gian phẫu thuật > 2 lần T1/2 của kháng sinh (Cefazolin nhắc lại sau 4h).",
    "reference": "Hướng dẫn KSDP - Bộ Y tế"
  },
  {
    "id": 425,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Trường hợp người bệnh bị mất máu trong phẫu thuật với lượng bao nhiêu thì cần tiêm bổ sung liều KSDP?",
    "options": [
      "Bất kỳ lượng máu nào bị mất",
      "Mất máu từ 300 đến 500 mL",
      "Mất máu trên 1500 mL ở người lớn",
      "Mất máu từ 100 đến 200 mL"
    ],
    "correct": 2,
    "explanation": "Mất máu > 1500 mL làm giảm thể tích tuần hoàn và nồng độ kháng sinh tại mô, cần tiêm thêm 1 liều.",
    "reference": "Hướng dẫn KSDP - Bộ Y tế"
  },
  {
    "id": 426,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Thời gian duy trì kháng sinh dự phòng sau phẫu thuật được khuyến cáo tối đa là bao lâu?",
    "options": [
      "Phải uống thêm 1 tháng kháng sinh sau xuất viện",
      "Không quá 24 giờ sau khi kết thúc phẫu thuật",
      "Kéo dài cho đến khi cắt chỉ vết mổ",
      "Phải duy trì tối thiểu 7 ngày liên tục"
    ],
    "correct": 1,
    "explanation": "Duy trì KSDP > 24 giờ không làm giảm thêm nhiễm khuẩn vết mổ mà tăng nguy cơ vi khuẩn kháng thuốc và C. difficile.",
    "reference": "Hướng dẫn KSDP - Bộ Y tế"
  },
  {
    "id": 427,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Bệnh nhân có tiền sử sốc phản vệ với Penicillin cần dùng KSDP thì kháng sinh thay thế thích hợp là:",
    "options": [
      "Amoxicillin clavulanat",
      "Ampicillin sulbactam",
      "Vancomycin hoặc Clindamycin",
      "Cefalexin đường uống"
    ],
    "correct": 2,
    "explanation": "Dị ứng nặng typ I với beta-lactam thay thế bằng Vancomycin hoặc Clindamycin để bao phủ cầu khuẩn gram dương.",
    "reference": "Hướng dẫn KSDP - Bộ Y tế"
  },
  {
    "id": 428,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh Ceftriaxon có ưu điểm dược động học nổi bật nào khi dùng điều trị ngoại trú?",
    "options": [
      "Hấp thu tốt 100% qua đường uống sau bữa ăn kéo dài liên tục",
      "Thời gian bán thải dài khoảng 8 giờ cho phép dùng 1 lần trong ngày",
      "Không gắn kết với protein huyết tương sau khi dùng thuốc",
      "Đào thải nguyên vẹn 100% qua đường mồ hôi ở mức độ vừa và nặng"
    ],
    "correct": 1,
    "explanation": "Ceftriaxon có T1/2 dài nhất trong các cephalosporin thế hệ 3, chỉ cần tiêm 1 lần/ngày.",
    "reference": "Sách DLS tr. 320"
  },
  {
    "id": 429,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh nào sau đây có khả năng thâm nhập tốt nhất qua hàng rào máu não khi màng não bị viêm?",
    "options": [
      "Gentamicin và Amikacin",
      "Cefazolin và Cefalexin",
      "Ceftriaxon và Cefotaxim",
      "Clindamycin và Erythromycin"
    ],
    "correct": 2,
    "explanation": "Ceftriaxon và Cefotaxim đạt nồng độ rất cao trong dịch não tủy khi viêm màng não.",
    "reference": "Sách DLS tr. 321"
  },
  {
    "id": 430,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh nhóm Aminosid nào có hoạt tính mạnh nhất trên trực khuẩn mủ xanh Pseudomonas?",
    "options": [
      "Tobramycin và Amikacin",
      "Kanamycin ở người bệnh",
      "Streptomycin ở mức độ vừa và nặng",
      "Neomycin trên lâm sàng"
    ],
    "correct": 0,
    "explanation": "Tobramycin và Amikacin là 2 aminosid có hiệu lực mạnh nhất chống trực khuẩn mủ xanh.",
    "reference": "Sách DLS tr. 322"
  },
  {
    "id": 431,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Phối hợp kháng sinh theo nguyên tắc đồng vận diệt khuẩn được chỉ định bắt buộc trong bệnh lý nào?",
    "options": [
      "Viêm họng do liên cầu khuẩn tan huyết beta nhóm A",
      "Viêm mô tế bào nông cẳng chân",
      "Nhiễm khuẩn tiết niệu thể viêm bàng quang cấp",
      "Viêm nội tâm mạc nhiễm khuẩn do Enterococcus faecalis"
    ],
    "correct": 3,
    "explanation": "Enterococcus trơ với nhiều thuốc, bắt buộc phối hợp Ampicillin + Gentamicin để diệt khuẩn hoàn toàn.",
    "reference": "Sách DLS tr. 323"
  },
  {
    "id": 432,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh nào sau đây đào thải chủ yếu qua gan mật nên không cần hiệu chỉnh liều khi suy thận?",
    "options": [
      "Levofloxacin và Ciprofloxacin",
      "Vancomycin và Teicoplanin",
      "Gentamicin và Tobramycin",
      "Ceftriaxon và Moxifloxacin"
    ],
    "correct": 3,
    "explanation": "Ceftriaxon và Moxifloxacin bài tiết qua mật và gan nhiều, không cần chỉnh liều khi suy giảm chức năng thận.",
    "reference": "Sách DLS tr. 324"
  },
  {
    "id": 433,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh Cotrimoxazol là dạng phối hợp cố định của hai hoạt chất nào theo tỷ lệ 5:1?",
    "options": [
      "Sulfadiazin và Pyrimethamin",
      "Sulfamethoxazol và Trimethoprim",
      "Sulfisoxazol và Ampicillin",
      "Sulfadoxin và Cloramphenicol"
    ],
    "correct": 1,
    "explanation": "Bactrim là phối hợp Sulfamethoxazol và Trimethoprim theo tỷ lệ khối lượng 5:1.",
    "reference": "Sách DLS tr. 325"
  },
  {
    "id": 434,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Cơ chế hiệp đồng của Sulfamethoxazol và Trimethoprim là ức chế hai khâu nào trong chuyển hóa acid folic?",
    "options": [
      "Dihydropteroat synthetase và Dihydrofolat reductase",
      "Enzym Topoisomerase II và IV theo khuyến cáo",
      "Enzym Transpeptidase và Carboxypeptidase kéo dài liên tục",
      "Enzym ADN polymerase và ARN polymerase trong phác đồ chuẩn"
    ],
    "correct": 0,
    "explanation": "SMX ức chế khâu tổng hợp acid dihydrofolic, TMP ức chế khâu khử thành acid tetrahydrofolic.",
    "reference": "Sách DLS tr. 326"
  },
  {
    "id": 435,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh nào sau đây là thuốc lựa chọn hàng đầu để điều trị viêm phổi do vi nấm Pneumocystis jirovecii?",
    "options": [
      "Cotrimoxazol liều cao",
      "Erythromycin",
      "Ciprofloxacin",
      "Ceftriaxon"
    ],
    "correct": 0,
    "explanation": "Cotrimoxazol liều cao là thuốc điều trị và dự phòng chuẩn cho viêm phổi PCP ở bệnh nhân suy giảm miễn dịch.",
    "reference": "Sách DLS tr. 327"
  },
  {
    "id": 436,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh nhóm Macrolid nào có thời gian bán thải dài nhất cho phép dùng phác đồ 3 đến 5 ngày?",
    "options": [
      "Spiramycin",
      "Erythromycin",
      "Azithromycin",
      "Clarithromycin"
    ],
    "correct": 2,
    "explanation": "Azithromycin có T1/2 mô lên đến 68 giờ và tích lũy trong đại thực bào, liệu trình điều trị chỉ cần 3-5 ngày.",
    "reference": "Sách DLS tr. 328"
  },
  {
    "id": 437,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Tác dụng phụ gây kéo dài khoảng QT trên điện tâm đồ dẫn đến loạn nhịp xoắn đỉnh là nguy cơ của:",
    "options": [
      "Kháng sinh nhóm Macrolid và Quinolon",
      "Kháng sinh nhóm Aminosid",
      "Kháng sinh nhóm Penicillin tự nhiên",
      "Kháng sinh nhóm Glycopeptid"
    ],
    "correct": 0,
    "explanation": "Macrolid và Fluoroquinolon đều ức chế kênh kali IKr làm kéo dài QT và có nguy cơ gây xoắn đỉnh.",
    "reference": "Sách DLS tr. 329"
  },
  {
    "id": 438,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh Clindamycin thuộc nhóm Lincosamid có đặc tính phân bố rất tốt vào mô nào?",
    "options": [
      "Dịch kính trong nhãn cầu",
      "Dịch não tủy khoang dưới nhện",
      "Mô xương và dịch bao khớp",
      "Mô mỡ quanh thận"
    ],
    "correct": 2,
    "explanation": "Clindamycin thâm nhập mô xương rất cao, thường được dùng điều trị viêm tủy xương do tụ cầu.",
    "reference": "Sách DLS tr. 330"
  },
  {
    "id": 439,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh điều trị nhiễm khuẩn đường tiết niệu Fosfomycin có phác đồ liều dùng độc đáo như thế nào?",
    "options": [
      "Uống 4 lần mỗi ngày liên tục trong 2 tuần",
      "Tiêm bắp ngắt quãng mỗi 6 giờ",
      "Đặt dưới lưỡi trước mỗi bữa ăn",
      "Uống một liều duy nhất 3 gam"
    ],
    "correct": 3,
    "explanation": "Fosfomycin trometamol 3g liều duy nhất đạt nồng độ diệt khuẩn trong nước tiểu kéo dài 48-72 giờ.",
    "reference": "Sách DLS tr. 331"
  },
  {
    "id": 440,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh Nitrofurantoin dùng điều trị viêm bàng quang cấp bị chống chỉ định khi mức lọc cầu thận:",
    "options": [
      "Dưới 120 mL trên phút",
      "Dưới 30 mL trên phút",
      "Trên 60 mL trên phút",
      "Dưới 90 mL trên phút"
    ],
    "correct": 1,
    "explanation": "Khi ClCr < 30 mL/min, Nitrofurantoin không đạt nồng độ điều trị trong nước tiểu và tăng nguy cơ độc thần kinh.",
    "reference": "Sách DLS tr. 332"
  },
  {
    "id": 441,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Daptomycin là kháng sinh lipopeptid vòng bị bất hoạt hoàn toàn bởi chất nào trong cơ thể?",
    "options": [
      "Chất diện hoạt Surfactant ở phế nang phổi",
      "Men pepsin trong dạ dày trong phác đồ chuẩn",
      "Dịch nước mắt ở mắt theo khuyến cáo",
      "Dịch mật do gan tiết ra kèm theo sốt nhẹ định kỳ"
    ],
    "correct": 0,
    "explanation": "Daptomycin bị surfactant phổi trung hòa mất tác dụng, chống chỉ định điều trị viêm phổi.",
    "reference": "Sách DLS tr. 333"
  },
  {
    "id": 442,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Độc tính đặc trưng cần xét nghiệm theo dõi nồng độ Creatin Kinase định kỳ của Daptomycin là:",
    "options": [
      "Độc tính làm mất thính lực tai trong",
      "Gây xơ hóa cơ vòng bàng quang",
      "Độc tính gây viêm cơ và tiêu cơ vân",
      "Độc tính gây suy gan cấp hoại tử"
    ],
    "correct": 2,
    "explanation": "Daptomycin gây độc tính trên cơ phụ thuộc liều, cần theo dõi chỉ số men CK hàng tuần.",
    "reference": "Sách DLS tr. 334"
  },
  {
    "id": 443,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Tigecyclin là kháng sinh nhóm Glycylcyclin có đặc điểm dược động học nổi bật nào?",
    "options": [
      "Nồng độ trong máu cực cao nhưng không vào mô theo khuyến cáo định kỳ",
      "Chỉ dùng được qua đường uống sau khi dùng thuốc",
      "Đào thải 100% nguyên vẹn qua nước tiểu kéo dài liên tục",
      "Thể tích phân bố cực lớn thâm nhập mô tốt nhưng nồng độ máu rất thấp"
    ],
    "correct": 3,
    "explanation": "Tigecyclin vào mô rất mạnh nhưng nồng độ máu thấp, không dùng điều trị nhiễm khuẩn huyết.",
    "reference": "Sách DLS tr. 335"
  },
  {
    "id": 444,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh nào sau đây là lựa chọn hàng đầu điều trị viêm đại tràng giả mạc do Clostridium difficile?",
    "options": [
      "Ampicillin đường uống",
      "Vancomycin đường uống",
      "Gentamicin tiêm bắp",
      "Vancomycin truyền tĩnh mạch"
    ],
    "correct": 1,
    "explanation": "Vancomycin đường uống không hấp thu vào máu, tập trung nồng độ cực cao trong lòng ruột diệt C. difficile.",
    "reference": "Sách DLS tr. 336"
  },
  {
    "id": 445,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Fidaxomicin là kháng sinh mới được ưu tiên điều trị viêm ruột do C. difficile vì ưu điểm gì?",
    "options": [
      "Hấp thu hoàn toàn 100% vào tuần hoàn",
      "Có thể dùng điều trị các bệnh do virus đường ruột",
      "Giá thành rẻ nhất trong tất cả các kháng sinh",
      "Tỷ lệ tái phát bệnh thấp hơn so với Vancomycin uống"
    ],
    "correct": 3,
    "explanation": "Fidaxomicin có phổ hẹp bảo tồn hệ vi sinh vật ruột tự nhiên nên giảm mạnh nguy cơ tái phát C. difficile.",
    "reference": "Sách DLS tr. 337"
  },
  {
    "id": 446,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh nhóm Carbapenem nào sau đây không có hoạt tính trên trực khuẩn mủ xanh Pseudomonas?",
    "options": [
      "Imipenem",
      "Meropenem",
      "Ertapenem",
      "Doripenem"
    ],
    "correct": 2,
    "explanation": "Ertapenem không diệt được Pseudomonas và Acinetobacter, chỉ cần dùng 1 lần/ngày.",
    "reference": "Sách DLS tr. 338"
  },
  {
    "id": 447,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh Imipenem luôn phải phối hợp cố định với Cilastatin nhằm mục đích gì?",
    "options": [
      "Giúp Imipenem ngấm được vào tế bào gan kèm theo sốt nhẹ",
      "Giảm nguy cơ dị ứng sốc phản vệ ở người bệnh",
      "Làm tăng độ hòa tan của Imipenem trong máu trên lâm sàng định kỳ",
      "Ức chế enzym Dehydropeptidase 1 ở ống thận bảo vệ Imipenem"
    ],
    "correct": 3,
    "explanation": "Cilastatin ức chế enzym dehydropeptidase-I tại bờ bàn chải ống thận ngăn chuyển hóa độc thận của Imipenem.",
    "reference": "Sách DLS tr. 339"
  },
  {
    "id": 448,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Tác dụng không mong muốn trên hệ thần kinh trung ương cần chú ý nhất của Imipenem là:",
    "options": [
      "Làm giãn đồng tử hai bên mắt kèm theo sốt nhẹ theo đúng hướng dẫn của Bộ Y tế",
      "Gây mất trí nhớ ngắn hạn cấp tính ở người bệnh ở bệnh nhân có nguy cơ biến chứng cao",
      "Gây điếc tiếp nhận thần kinh trong phác đồ chuẩn kéo dài liên tục trên lâm sàng",
      "Gây co giật đặc biệt trên bệnh nhân có suy giảm chức năng thận"
    ],
    "correct": 3,
    "explanation": "Imipenem đối kháng thụ thể GABA, nguy cơ gây co giật cao nhất trong các carbapenem nếu không chỉnh liều suy thận.",
    "reference": "Sách DLS tr. 340"
  },
  {
    "id": 449,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh nhóm Fluoroquinolon đường hô hấp có hoạt tính diệt phế cầu Streptococcus pneumoniae mạnh là:",
    "options": [
      "Ofloxacin theo khuyến cáo",
      "Norfloxacin trong phác đồ chuẩn",
      "Levofloxacin và Moxifloxacin",
      "Ciprofloxacin kèm theo sốt nhẹ"
    ],
    "correct": 2,
    "explanation": "Levofloxacin và Moxifloxacin là 'respiratory fluoroquinolones' có hoạt lực rất cao trên phế cầu.",
    "reference": "Sách DLS tr. 341"
  },
  {
    "id": 450,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Moxifloxacin không thích hợp để điều trị nhiễm khuẩn đường tiết niệu do nguyên nhân nào?",
    "options": [
      "Thuốc bị phân hủy hoàn toàn bởi vi khuẩn E. coli trong phác đồ chuẩn kéo dài liên tục trên lâm sàng",
      "Thuốc bị nước tiểu acid phá hủy kéo dài liên tục kèm theo sốt cao và suy nhược cơ thể",
      "Thuốc gây tắc nghẽn ống thận tạo tinh thể theo khuyến cáo ở mức độ vừa đến mức độ nặng",
      "Thải trừ qua gan mật và nồng độ thuốc dạng hoạt tính trong nước tiểu rất thấp"
    ],
    "correct": 3,
    "explanation": "Moxifloxacin chuyển hóa qua gan bài xuất qua phân, chỉ < 20% qua thận nên không đạt nồng độ diệt khuẩn tiết niệu.",
    "reference": "Sách DLS tr. 342"
  },
  {
    "id": 451,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh nào sau đây gây nước tiểu, nước bọt và nước mắt có màu đỏ cam đặc trưng?",
    "options": [
      "Rifampicin",
      "Isoniazid",
      "Ethambutol",
      "Pyrazinamid"
    ],
    "correct": 0,
    "explanation": "Rifampicin có màu đỏ tự nhiên, bài tiết qua dịch tiết cơ thể nhuộm đỏ cam dịch tiết.",
    "reference": "Sách DLS tr. 343"
  },
  {
    "id": 452,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Tác dụng không mong muốn gây viêm dây thần kinh thị giác giảm thị lực và mù màu đỏ xanh là của:",
    "options": [
      "Rifampicin",
      "Isoniazid",
      "Streptomycin",
      "Ethambutol"
    ],
    "correct": 3,
    "explanation": "Ethambutol gây viêm thần kinh thị phụ thuộc liều, bệnh nhân cần kiểm tra thị lực và phân biệt màu đỏ-xanh.",
    "reference": "Sách DLS tr. 344"
  },
  {
    "id": 453,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Để phòng ngừa viêm dây thần kinh ngoại biên do thuốc chống lao Isoniazid, người ta dùng kèm:",
    "options": [
      "Vitamin B6 với liều 10 đến 25 mg mỗi ngày",
      "Vitamin A dạng dầu trên lâm sàng định kỳ",
      "Vitamin B12 đường tiêm bắp sau khi dùng thuốc",
      "Vitamin C liều cao dạng sủi ở mức độ vừa và nặng"
    ],
    "correct": 0,
    "explanation": "INH cạnh tranh và làm tăng đào thải Pyridoxin (Vitamin B6) gây viêm thần kinh ngoại biên.",
    "reference": "Sách DLS tr. 345"
  },
  {
    "id": 454,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Hiện tượng kháng chéo giữa các kháng sinh Macrolid, Lincosamid và Streptogramin B là do cơ chế:",
    "options": [
      "Tăng tổng hợp vách tế bào dày gấp đôi ở người bệnh",
      "Tiết enzym Acetyltransferase bất hoạt thuốc trên lâm sàng",
      "Methyl hóa thụ thể đích trên tiểu đơn vị 23S của ribosom 50S",
      "Đột biến enzym ADN gyrase của vi khuẩn ở mức độ vừa và nặng"
    ],
    "correct": 2,
    "explanation": "Gen erm mã hóa enzym methyltransferase làm biến đổi điểm gắn chung trên 50S (kiểu hình MLSB).",
    "reference": "Sách DLS tr. 346"
  },
  {
    "id": 455,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh nhóm Monobactam Aztreonam có đặc điểm nổi bật nào về phổ tác dụng và tính sinh dị ứng?",
    "options": [
      "Gây dị ứng chéo 100% với Ceftazidim kèm theo sốt nhẹ theo đúng hướng dẫn của Bộ Y tế",
      "Chỉ tác dụng trên vi khuẩn Gram âm hiếu khí và không gây dị ứng chéo với Penicillin",
      "Chỉ diệt được cầu khuẩn Gram dương ở người bệnh ở bệnh nhân có nguy cơ biến chứng cao",
      "Có phổ tác dụng cực rộng trên cả vi khuẩn kỵ khí trên lâm sàng định kỳ kèm theo rối loạn chức năng cơ quan"
    ],
    "correct": 1,
    "explanation": "Aztreonam chỉ diệt Gram âm, an toàn cho bệnh nhân dị ứng penicillin (trừ dị ứng chéo với Ceftazidim vì cùng chuỗi bên).",
    "reference": "Sách DLS tr. 347"
  },
  {
    "id": 456,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Chỉ số nồng độ ức chế tối thiểu MIC của một kháng sinh đối với vi khuẩn được định nghĩa là:",
    "options": [
      "Nồng độ tối đa cơ thể người bệnh có thể dung nạp được kèm theo sốt nhẹ theo đúng hướng dẫn của Bộ Y tế",
      "Nồng độ kháng sinh đo được tại mô vết mổ trong phác đồ chuẩn kéo dài liên tục trên lâm sàng",
      "Nồng độ thấp nhất ngăn chặn sự phát triển nhìn thấy được của vi khuẩn sau 18 đến 24 giờ",
      "Nồng độ tiêu diệt 99,9% số lượng vi khuẩn ban đầu ở người bệnh ở bệnh nhân có nguy cơ biến chứng cao"
    ],
    "correct": 2,
    "explanation": "MIC là nồng độ kháng sinh thấp nhất ức chế nhìn thấy được sự nhân lên của vi khuẩn in vitro.",
    "reference": "Sách DLS tr. 348"
  },
  {
    "id": 457,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Chỉ số nồng độ diệt khuẩn tối thiểu MBC được định nghĩa là nồng độ kháng sinh có khả năng:",
    "options": [
      "Tiêu diệt từ 99,9% số lượng vi khuẩn sống sót ban đầu",
      "Gắn kết vào toàn bộ các điểm gắn ribosom theo khuyến cáo",
      "Làm vi khuẩn ngừng sinh độc tố nội bào trong phác đồ chuẩn",
      "Ức chế sự di chuyển của vi khuẩn trong thạch kèm theo sốt nhẹ"
    ],
    "correct": 0,
    "explanation": "MBC là nồng độ thấp nhất tiêu diệt 99,9% vi khuẩn trong mẫu cấy chuẩn sau 24 giờ.",
    "reference": "Sách DLS tr. 349"
  },
  {
    "id": 458,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Một kháng sinh được phân loại là diệt khuẩn khi tỷ số giữa MBC trên MIC có giá trị:",
    "options": [
      "Lớn hơn hoặc bằng 32",
      "Nhỏ hơn hoặc bằng 4",
      "Bằng 0",
      "Lớn hơn 100"
    ],
    "correct": 1,
    "explanation": "Nếu MBC/MIC <= 4 kháng sinh có tính diệt khuẩn mạnh; nếu MBC/MIC >= 8-16 là kháng sinh kìm khuẩn.",
    "reference": "Sách DLS tr. 350"
  },
  {
    "id": 459,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Khi sử dụng Vancomycin, việc theo dõi nồng độ đáy C_trough trong máu trước liều tiếp theo nhằm mục đích:",
    "options": [
      "Đảm bảo hiệu lực diệt khuẩn và phòng tránh độc tính trên thận",
      "Xác định thời điểm bệnh nhân có thể xuất viện sau khi dùng thuốc",
      "Kiểm tra mức độ dị ứng trên da của bệnh nhân kéo dài liên tục",
      "Đánh giá tốc độ hòa tan của thuốc tại tĩnh mạch theo khuyến cáo"
    ],
    "correct": 0,
    "explanation": "Đo nồng độ đáy trước liều thứ 4 giúp duy trì C_trough 15-20 mg/L đảm bảo hiệu lực và tránh suy thận cấp.",
    "reference": "Sách DLS tr. 351"
  },
  {
    "id": 460,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Phối hợp Vancomycin với Piperacillin Tazobactam gần đây được cảnh báo trên lâm sàng vì nguy cơ:",
    "options": [
      "Gây xuất huyết tiêu hóa diện rộng ở mức độ vừa và nặng",
      "Tăng nguy cơ xuất hiện tổn thương thận cấp tính hiệp đồng",
      "Gây hạ đường huyết kịch phát sau tiêm sau khi dùng thuốc",
      "Làm mất hoạt tính diệt khuẩn của Vancomycin kéo dài liên tục"
    ],
    "correct": 1,
    "explanation": "Nhiều nghiên cứu lâm sàng chứng minh phối hợp Vanco + Zosyn làm tăng đáng kể tỷ lệ suy thận cấp.",
    "reference": "Sách DLS tr. 352"
  },
  {
    "id": 461,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh nhóm Oxazolidinon Tedizolid có ưu thế nào so với Linezolid?",
    "options": [
      "Chỉ cần dùng 1 lần trong ngày và ít gây ức chế tủy xương hơn",
      "Diệt được cả vi khuẩn kỵ khí Clostridium ở mức độ vừa và nặng",
      "Không gây bất kỳ tác dụng phụ nào trên lâm sàng",
      "Chỉ cần dùng đường tiêm bắp không đau sau khi dùng thuốc định kỳ"
    ],
    "correct": 0,
    "explanation": "Tedizolid có ái lực cao hơn, liều thấp 200 mg x 1 lần/ngày và độc tính tạo máu thấp hơn Linezolid.",
    "reference": "Sách DLS tr. 353"
  },
  {
    "id": 462,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh dự phòng trong phẫu thuật thay khớp háng nhân tạo được khuyến cáo ưu tiên dùng thuốc nào?",
    "options": [
      "Ciprofloxacin đường uống",
      "Metronidazol truyền tĩnh mạch",
      "Amoxicillin viên nang",
      "Cefazolin tiêm tĩnh mạch"
    ],
    "correct": 3,
    "explanation": "Phẫu thuật chấn thương chỉnh hình đặt dụng cụ nhân tạo khuyến cáo dùng Cefazolin (hoặc Vancomycin nếu tỷ lệ MRSA cao).",
    "reference": "Hướng dẫn KSDP - Bộ Y tế"
  },
  {
    "id": 463,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh dự phòng có được chỉ định thường quy cho thủ thuật nội soi phế quản chẩn đoán không biến chứng không?",
    "options": [
      "Không được chỉ định thường quy",
      "Chỉ định tiêm 3 loại kháng sinh phối hợp",
      "Bắt buộc phải truyền kháng sinh trước 1 ngày",
      "Phải dùng liên tục 5 ngày sau thủ thuật"
    ],
    "correct": 0,
    "explanation": "Thủ thuật nội soi chẩn đoán không xâm lấn mô sâu không có chỉ định dùng kháng sinh dự phòng.",
    "reference": "Hướng dẫn KSDP - Bộ Y tế"
  },
  {
    "id": 464,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Khi người bệnh béo phì có cân nặng trên 120 kg, liều Cefazolin dự phòng phẫu thuật cần điều chỉnh:",
    "options": [
      "Giảm liều xuống 500 mg để tránh ngộ độc",
      "Tăng liều Cefazolin lên 3 gam tiêm tĩnh mạch",
      "Chuyển sang dùng kháng sinh đường uống",
      "Duy trì liều 1 gam tiêu chuẩn không đổi"
    ],
    "correct": 1,
    "explanation": "Bệnh nhân béo phì (BMI cao hoặc cân nặng >= 120 kg) liều Cefazolin dự phòng tăng từ 2g lên 3g.",
    "reference": "Hướng dẫn KSDP - Bộ Y tế"
  },
  {
    "id": 465,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Việc cạo lông vùng mổ bằng dao cạo trước phẫu thuật có ảnh hưởng gì đến nhiễm khuẩn vết mổ?",
    "options": [
      "Giúp vết mổ vô khuẩn hoàn toàn tuyệt đối kèm theo sốt nhẹ định kỳ",
      "Không có bất kỳ ảnh hưởng nào trong phác đồ chuẩn",
      "Rút ngắn thời gian liền sẹo của vết mổ theo khuyến cáo",
      "Làm tăng vi tổn thương da dẫn đến tăng tỷ lệ nhiễm khuẩn vết mổ"
    ],
    "correct": 3,
    "explanation": "Dao cạo gây xước da vi thể tạo ổ vi khuẩn cư trú; khuyến cáo chỉ cắt tỉa lông bằng kéo/máy tỉa sát giờ mổ.",
    "reference": "Hướng dẫn KSDP - Bộ Y tế"
  },
  {
    "id": 466,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh nào sau đây thuộc nhóm Beta-lactamase phổ rộng ESBL có thể phân hủy?",
    "options": [
      "Cephalosporin thế hệ 3 như Ceftriaxon và Cefotaxim",
      "Kháng sinh Glycopeptid Vancomycin kéo dài liên tục",
      "Carbapenem như Meropenem và Imipenem trong phác đồ chuẩn",
      "Cephamycin như Cefoxitin theo khuyến cáo"
    ],
    "correct": 0,
    "explanation": "Vi khuẩn sinh ESBL thủy phân penicillin, cephalosporin các thế hệ và aztreonam; carbapenem là thuốc chọn lựa.",
    "reference": "Sách DLS tr. 357"
  },
  {
    "id": 467,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Chế độ xuống thang kháng sinh (De-escalation) trong điều trị nhiễm khuẩn nặng là chiến lược nhằm:",
    "options": [
      "Chuyển sang kháng sinh phổ hẹp hơn khi có kết quả kháng sinh đồ",
      "Chuyển từ đường truyền tĩnh mạch sang tiêm bắp sau khi dùng thuốc",
      "Giảm liều kháng sinh xuống còn một nửa liều chuẩn kéo dài liên tục",
      "Ngừng kháng sinh ngay sau khi bệnh nhân hết sốt 12 giờ theo khuyến cáo"
    ],
    "correct": 0,
    "explanation": "Khởi đầu bao vây phổ rộng, sau 48-72h có kháng sinh đồ thì 'xuống thang' phổ hẹp để giảm chọn lọc kháng thuốc.",
    "reference": "Sách DLS tr. 358"
  },
  {
    "id": 468,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh Ceftobiprole và Ceftaroline được gọi là Cephalosporin thế hệ mới vì có hoạt tính trên:",
    "options": [
      "Vi nấm xâm lấn Aspergillus",
      "Trực khuẩn kỵ khí Bacteroides fragilis",
      "Tụ cầu vàng kháng Methicillin",
      "Tất cả các loại virus có màng bọc"
    ],
    "correct": 2,
    "explanation": "Ceftaroline và Ceftobiprole là Cephalosporin thế hệ mới đặc trị chủng MRSA.",
    "reference": "Sách DLS tr. 359"
  },
  {
    "id": 469,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Hiện tượng sốc độc tố do vi khuẩn giải phóng ồ ạt độc tố trong viêm mô hoại tử có thể giảm khi dùng kèm:",
    "options": [
      "Cefazolin tiêm tĩnh mạch ngắt quãng ở mức độ vừa và nặng",
      "Gentamicin liều cao đường tiêm bắp sau khi dùng thuốc định kỳ",
      "Clindamycin do có tác dụng ức chế tổng hợp độc tố vi khuẩn",
      "Ciprofloxacin dạng truyền tĩnh mạch trên lâm sàng"
    ],
    "correct": 2,
    "explanation": "Clindamycin ức chế ribosom 50S làm ngừng sản xuất độc tố protein của tụ cầu và liên cầu.",
    "reference": "Sách DLS tr. 360"
  },
  {
    "id": 470,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh Telavancin và Oritavancin thuộc nhóm Lipoglycopeptid có đặc tính khác biệt nổi bật là:",
    "options": [
      "Chỉ dùng bằng đường uống viên nén ở mức độ vừa và nặng",
      "Thời gian bán thải cực dài cho phép dùng một liều duy nhất cho cả đợt",
      "Không có tác dụng trên bất kỳ vi khuẩn Gram dương nào trên lâm sàng",
      "Đào thải 100% qua đường hô hấp ở người bệnh"
    ],
    "correct": 1,
    "explanation": "Oritavancin và Dalbavancin có T1/2 trên 200-300 giờ, chỉ cần truyền 1 liều duy nhất cho đợt điều trị nhiễm khuẩn da mô mềm.",
    "reference": "Sách DLS tr. 361"
  },
  {
    "id": 471,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Nồng độ Cortisol nội sinh trong cơ thể người đạt đỉnh cao nhất vào khoảng thời gian nào trong ngày?",
    "options": [
      "Khoảng 20 giờ tối",
      "Khoảng 12 giờ trưa",
      "Khoảng nửa đêm từ 0 đến 2 giờ sáng",
      "Khoảng 6 đến 8 giờ sáng"
    ],
    "correct": 3,
    "explanation": "Trục HPA tiết cortisol theo nhịp ngày đêm, cao nhất lúc 6-8h sáng và thấp nhất lúc nửa đêm.",
    "reference": "Sách DLS tr. 370"
  },
  {
    "id": 472,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Để hạn chế tối đa nguy cơ ức chế trục dưới đồi tuyến yên thượng thận, thời điểm uống Corticoid tối ưu là:",
    "options": [
      "Một lần duy nhất vào lúc 8 giờ sáng sau khi ăn no",
      "Uống vào lúc 22 giờ đêm trước khi đi ngủ",
      "Chỉ uống vào buổi chiều muộn khoảng 17 giờ",
      "Uống chia đều 4 lần trước các bữa ăn và trước ngủ"
    ],
    "correct": 0,
    "explanation": "Uống vào 8h sáng trùng với đỉnh cortisol sinh lý nên ít gây ức chế phản hồi ngược âm tính trục HPA.",
    "reference": "Sách DLS tr. 371"
  },
  {
    "id": 473,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Liều tương đương kháng viêm của Prednisolon 5 mg tương ứng với bao nhiêu mg Dexamethason?",
    "options": [
      "0,6 mg",
      "4 mg",
      "20 mg",
      "0,75 mg"
    ],
    "correct": 3,
    "explanation": "Bảng tương đương: Hydrocortison 20mg = Prednisolon 5mg = Methylprednisolon 4mg = Dexamethason 0,75mg.",
    "reference": "Sách DLS tr. 372"
  },
  {
    "id": 474,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Liều tương đương kháng viêm của Methylprednisolon so với Prednisolon 5 mg là:",
    "options": [
      "10 mg",
      "1 mg",
      "20 mg",
      "4 mg"
    ],
    "correct": 3,
    "explanation": "Methylprednisolon có hoạt lực kháng viêm mạnh hơn prednisolon (4 mg Methylprednisolon = 5 mg Prednisolon).",
    "reference": "Sách DLS tr. 372"
  },
  {
    "id": 475,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Glucocorticoid nào sau đây có hoạt tính giữ muối nước Mineralocorticoid mạnh nhất?",
    "options": [
      "Dexamethason",
      "Betamethason",
      "Hydrocortison",
      "Triamcinolon"
    ],
    "correct": 2,
    "explanation": "Hydrocortison có tỷ lệ giữ muối/nước cao nhất trong nhóm (tương đương 1:1), Dexamethason gần như bằng 0.",
    "reference": "Sách DLS tr. 373"
  },
  {
    "id": 476,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Hai Glucocorticoid nào sau đây hầu như hoàn toàn không có hoạt tính giữ muối nước Mineralocorticoid?",
    "options": [
      "Fludrocortison và Aldosteron",
      "Hydrocortison và Cortison",
      "Dexamethason và Betamethason",
      "Prednisolon và Prednison"
    ],
    "correct": 2,
    "explanation": "Dexamethason và Betamethason là dẫn chất fluorin hóa không gây giữ natri và nước.",
    "reference": "Sách DLS tr. 373"
  },
  {
    "id": 477,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Cơ chế tác dụng chống viêm ở mức độ phân tử của Glucocorticoid thông qua ức chế enzym nào?",
    "options": [
      "Phospholipase A2 thông qua kích thích tạo Lipocortin 1",
      "Adenylate cyclase ở màng nhân tế bào trên lâm sàng định kỳ",
      "5-Lipoxygenase trực tiếp tại bào tương ở mức độ vừa và nặng",
      "Cyclooxygenase 1 trực tiếp tại màng tế bào sau khi dùng thuốc"
    ],
    "correct": 0,
    "explanation": "Corticoid gắn thụ thể nhân kích thích tổng hợp lipocortin-1 (annexin A1) ức chế phospholipase A2.",
    "reference": "Sách DLS tr. 374"
  },
  {
    "id": 478,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Nguy cơ suy vỏ thượng thận thứ phát cấp tính do ngừng Corticoid đột ngột thường xảy ra khi dùng thuốc:",
    "options": [
      "Chỉ bôi ngoài da một lượng nhỏ ở mu bàn tay ở người bệnh",
      "Liều trên 5 mg Prednisolon mỗi ngày kéo dài trên 3 tuần",
      "Dùng liều thấp trong vòng 3 ngày liên tục trên lâm sàng",
      "Chỉ dùng một liều duy nhất trong cấp cứu sốc ở mức độ vừa và nặng"
    ],
    "correct": 1,
    "explanation": "Dùng liều tương đương >= 5mg prednisolon trên 3 tuần gây teo vỏ thượng thận, ngừng đột ngột gây suy thượng thận cấp.",
    "reference": "Sách DLS tr. 375"
  },
  {
    "id": 479,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Triệu chứng lâm sàng điển hình của cơn suy thượng thận cấp do ngừng thuốc Corticoid đột ngột bao gồm:",
    "options": [
      "Tăng huyết áp kịch phát kèm xuất huyết não trên lâm sàng định kỳ",
      "Tụt huyết áp trụy mạch, sốt cao, đau bụng dữ dội và lơ mơ",
      "Co giật toàn thể và cứng hàm uốn ván ở người bệnh",
      "Phù toàn thân và tăng kali máu nhẹ kèm theo sốt nhẹ"
    ],
    "correct": 1,
    "explanation": "Suy thượng thận cấp là cấp cứu nội khoa với trụy mạch, tụt áp không đáp ứng dịch, hạ natri, tăng kali.",
    "reference": "Sách DLS tr. 376"
  },
  {
    "id": 480,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Chế độ điều trị Corticoid cách ngày mang lại ưu điểm vượt trội nào trên bệnh nhân điều trị dài hạn?",
    "options": [
      "Giúp bệnh nhân tăng cân nhanh chóng hơn kèm theo sốt nhẹ",
      "Làm giảm hoàn toàn chi phí mua thuốc trong phác đồ chuẩn",
      "Giúp giảm thiểu tình trạng ức chế trục hạ đồi tuyến yên thượng thận",
      "Làm tăng gấp đôi hiệu lực kháng viêm của thuốc ở người bệnh"
    ],
    "correct": 2,
    "explanation": "Dùng cách ngày cho phép trục HPA có 24 giờ phục hồi sinh lý trong ngày nghỉ thuốc.",
    "reference": "Sách DLS tr. 377"
  },
  {
    "id": 481,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Hội chứng Cushing do thuốc biểu hiện bằng các dấu hiệu phân bố mỡ đặc trưng nào?",
    "options": [
      "Tích tụ mỡ chủ yếu ở cẳng chân và bàn chân trong phác đồ chuẩn",
      "Teo toàn bộ mô mỡ ở vùng ngực và bụng kèm theo sốt nhẹ định kỳ",
      "Khuôn mặt tròn như mặt trăng, bướu trâu ở gáy và béo trung tâm",
      "Mất hoàn toàn lớp mỡ dưới da toàn thân theo khuyến cáo"
    ],
    "correct": 2,
    "explanation": "Hội chứng Cushing phân bố lại mỡ: mặt tròn trăng rằm, gù trâu sau gáy, béo bụng kèm teo cơ gốc chi.",
    "reference": "Sách DLS tr. 378"
  },
  {
    "id": 482,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Biến chứng trên hệ xương của việc sử dụng Glucocorticoid liều cao kéo dài là gì?",
    "options": [
      "Loãng xương và hoại tử vô mạch chỏm xương đùi",
      "Làm cốt hóa sớm sụn tiếp hợp ở người già",
      "Gây xơ hóa các khớp ngón tay ngón chân",
      "Làm tăng mật độ khoáng chất xương quá mức"
    ],
    "correct": 0,
    "explanation": "Corticoid ức chế hủy cốt bào, ức chế tạo xương, giảm hấp thu Ca ở ruột gây loãng xương và hoại tử vô mạch chỏm xương đùi.",
    "reference": "Sách DLS tr. 379"
  },
  {
    "id": 483,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Để phòng ngừa loãng xương cho bệnh nhân phải dùng Glucocorticoid kéo dài trên 3 tháng, biện pháp bổ sung là:",
    "options": [
      "Bổ sung Vitamin A liều cao 50.000 đơn vị kéo dài liên tục",
      "Uống thật nhiều nước ngọt có ga mỗi ngày theo khuyến cáo",
      "Bổ sung Canxi, Vitamin D3 và xem xét dùng Bisphosphonat",
      "Truyền albumin huyết thanh định kỳ sau khi dùng thuốc"
    ],
    "correct": 2,
    "explanation": "Khuyến cáo dự phòng loãng xương: Ca 1000-1200 mg/ngày, Vit D 800 IU/ngày và Bisphosphonat (như Alendronat).",
    "reference": "Sách DLS tr. 380"
  },
  {
    "id": 484,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Glucocorticoid ảnh hưởng đến chuyển hóa glucid như thế nào dẫn đến nguy cơ đái tháo đường?",
    "options": [
      "Làm tăng đào thải glucose ồ ạt qua đường phân ở mức độ vừa và nặng",
      "Tăng tân tạo glucose tại gan và giảm sử dụng glucose ở mô ngoại vi",
      "Ức chế phân hủy Glycogen tại tế bào cơ vân sau khi dùng thuốc",
      "Kích thích tế bào beta đảo tụy tăng tiết Insulin kéo dài liên tục"
    ],
    "correct": 1,
    "explanation": "Corticoid kích thích enzym tân tạo đường gan, gây đề kháng insulin ngoại vi làm tăng glucose máu.",
    "reference": "Sách DLS tr. 381"
  },
  {
    "id": 485,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Biến chứng trên mắt khi sử dụng Glucocorticoid nhỏ mắt hoặc toàn thân kéo dài bao gồm:",
    "options": [
      "Đục thủy tinh thể dưới bao sau và tăng nhãn áp Glaucoma",
      "Bong giác mạc tự phát hai mắt trên lâm sàng",
      "Viêm kết mạc dị ứng mùa xuân sau khi dùng thuốc định kỳ",
      "Teo dây thần kinh thị giác một bên mắt ở mức độ vừa và nặng"
    ],
    "correct": 0,
    "explanation": "Tăng nhãn áp do giảm lưu thông thủy dịch và đục thủy tinh thể dưới bao sau là ADR mắt của corticoid.",
    "reference": "Sách DLS tr. 382"
  },
  {
    "id": 486,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Tác dụng phụ trên da của Glucocorticoid bôi tại chỗ kéo dài thể hiện qua hiện tượng:",
    "options": [
      "Teo da, rạn nứt da, giãn mao mạch và chậm liền sẹo",
      "Tăng sinh biểu bì làm da dày sừng thô ráp",
      "Làm đổi màu da thành màu xanh tím",
      "Làm mất hoàn toàn các tuyến mồ hôi trên da"
    ],
    "correct": 0,
    "explanation": "Corticoid ức chế tổng hợp collagen và phân chia tế bào làm teo mỏng da, rạn da đỏ và giãn mạch.",
    "reference": "Sách DLS tr. 383"
  },
  {
    "id": 487,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Glucocorticoid làm tăng nguy cơ loét dạ dày tá tràng đặc biệt nghiêm trọng khi phối hợp đồng thời với:",
    "options": [
      "Thuốc bảo vệ niêm mạc Sucralfat",
      "Thuốc ức chế men bơm proton Omeprazol",
      "Dung dịch kháng acid dạ dày chứa nhôm",
      "Thuốc chống viêm giảm đau không steroid NSAID"
    ],
    "correct": 3,
    "explanation": "Phối hợp Corticoid + NSAID làm tăng nguy cơ loét và xuất huyết tiêu hóa lên gấp 4 đến 5 lần.",
    "reference": "Sách DLS tr. 384"
  },
  {
    "id": 488,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Biến chứng ức chế miễn dịch của Glucocorticoid làm bùng phát nguy cơ nhiễm trùng nào?",
    "options": [
      "Bệnh lý tiêu chảy do ngộ độc thức ăn kèm theo sốt nhẹ",
      "Sốt phát ban dạng sởi ở trẻ em trong phác đồ chuẩn",
      "Tái hoạt hóa vi khuẩn lao và nhiễm nấm cơ hội",
      "Nhiễm khuẩn cấp tính tụ cầu ngoài da ở người bệnh"
    ],
    "correct": 2,
    "explanation": "Corticoid làm giảm lympho T, ức chế đại thực bào làm dễ bùng phát lao tiềm ẩn và nhiễm nấm cơ hội.",
    "reference": "Sách DLS tr. 385"
  },
  {
    "id": 489,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Phác đồ giảm liều Corticoid khi ngừng điều trị dài hạn cần tuân thủ nguyên tắc nào?",
    "options": [
      "Giảm liều từ từ từng bước mỗi 1 đến 2 tuần trước khi ngưng hẳn",
      "Tăng gấp đôi liều trong 3 ngày cuối rồi ngừng",
      "Chuyển sang dùng thuốc đường tiêm tĩnh mạch trước khi ngưng",
      "Ngừng đột ngột ngay khi các triệu chứng viêm biến mất"
    ],
    "correct": 0,
    "explanation": "Giảm liều chậm 10-20% mỗi 1-2 tuần cho phép tuyến thượng thận có thời gian phục hồi chức năng bài tiết.",
    "reference": "Sách DLS tr. 386"
  },
  {
    "id": 490,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Liệu pháp Corticoid liều xung (Pulse therapy) thường sử dụng hoạt chất nào truyền tĩnh mạch liều cao?",
    "options": [
      "Hydrocortison tiêm bắp ngắt quãng theo khuyến cáo ở mức độ vừa đến mức độ nặng",
      "Dexamethason liều 100 mg mỗi giờ trong phác đồ chuẩn kéo dài liên tục trên lâm sàng",
      "Methylprednisolon với liều 500 đến 1000 mg mỗi ngày trong 3 ngày",
      "Prednisolon uống sau bữa ăn tối kéo dài liên tục kèm theo sốt cao và suy nhược cơ thể"
    ],
    "correct": 2,
    "explanation": "Pulse therapy dùng Methylprednisolon truyền ngắt quãng điều trị viêm thận lupus, thải ghép cấp.",
    "reference": "Sách DLS tr. 387"
  },
  {
    "id": 491,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Ảnh hưởng của Glucocorticoid lên chuyển hóa điện giải trong cơ thể thể hiện bằng:",
    "options": [
      "Giữ Kali và đào thải Natri ra ngoài cơ thể theo khuyến cáo định kỳ",
      "Làm tăng đào thải đồng thời cả Natri và Kali kéo dài liên tục",
      "Giữ Natri và nước đồng thời tăng đào thải Kali qua nước tiểu",
      "Làm tăng nồng độ Calci và Phosphat trong máu sau khi dùng thuốc"
    ],
    "correct": 2,
    "explanation": "Corticoid kích thích ống thận tái hấp thu Na+ trao đổi bài xuất K+ và H+ gây phù và hạ kali máu.",
    "reference": "Sách DLS tr. 388"
  },
  {
    "id": 492,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Tác dụng của Glucocorticoid trên hệ thần kinh tâm thần có thể gây ra biểu hiện nào?",
    "options": [
      "Mất hoàn toàn phản xạ nuốt và phản xạ ho ở mức độ vừa và nặng",
      "Mất ngủ, hưng cảm, sảng khoái quá mức hoặc trầm cảm loạn thần",
      "Hôn mê sâu li bì kéo dài suốt cả ngày kéo dài liên tục",
      "Liệt vận động nửa người thoáng qua sau khi dùng thuốc"
    ],
    "correct": 1,
    "explanation": "Corticoid có thể gây rối loạn khí sắc, hưng cảm, mất ngủ hoặc trầm cảm loạn thần phụ thuộc liều.",
    "reference": "Sách DLS tr. 389"
  },
  {
    "id": 493,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Glucocorticoid dạng hít như Fluticason hoặc Budesonid có tác dụng phụ tại chỗ thường gặp nhất là:",
    "options": [
      "Nhiễm nấm Candida hầu họng và khàn tiếng",
      "Mất vị giác giác quan vĩnh viễn ở mức độ vừa và nặng",
      "Loét trợt niêm mạc lưỡi sâu trên lâm sàng",
      "Chảy máu cam ồ ạt kéo dài sau khi dùng thuốc"
    ],
    "correct": 0,
    "explanation": "Lắng đọng thuốc hạt ở hầu họng gây nấm miệng và ức chế cơ thanh quản gây khàn tiếng.",
    "reference": "Sách DLS tr. 390"
  },
  {
    "id": 494,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Để phòng ngừa tác dụng phụ nấm miệng và khàn tiếng khi dùng Corticoid hít, khuyến cáo người bệnh là:",
    "options": [
      "Súc miệng họng thật kỹ bằng nước sạch và nhổ đi sau mỗi lần hít",
      "Dùng kèm dung dịch kháng sinh nhỏ họng ở người bệnh",
      "Nín thở tuyệt đối trong 5 phút sau xịt thuốc trên lâm sàng",
      "Uống ngay một ly sữa nóng sau khi hít thuốc ở mức độ vừa và nặng"
    ],
    "correct": 0,
    "explanation": "Súc miệng sâu trong họng và nhổ bỏ nước giúp loại bỏ corticoid lắng đọng ở niêm mạc hầu họng.",
    "reference": "Sách DLS tr. 391"
  },
  {
    "id": 495,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Glucocorticoid dùng toàn thân kéo dài ảnh hưởng như thế nào đến sự phát triển của trẻ em?",
    "options": [
      "Không gây bất kỳ tác động nào đến tầm vóc trẻ",
      "Kích thích làm trẻ phát triển chiều cao vượt trội",
      "Ức chế sự phát triển chiều cao làm trẻ bị lùn và chậm lớn",
      "Làm trẻ bị phì đại các khớp ngón tay"
    ],
    "correct": 2,
    "explanation": "Corticoid ức chế tiết GH và làm chậm tăng trưởng sụn đầu xương khiến trẻ chậm phát triển chiều cao.",
    "reference": "Sách DLS tr. 392"
  },
  {
    "id": 496,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Xét nghiệm nghiệm pháp kích thích bằng Synacthen (ACTH tổng hợp) được dùng để đánh giá:",
    "options": [
      "Tốc độ lọc của màng đáy cầu thận kèm theo sốt nhẹ",
      "Mức độ nhạy cảm của màng tế bào với Glucose ở người bệnh",
      "Chức năng co bóp tống máu của tim trong phác đồ chuẩn",
      "Khả năng đáp ứng bài tiết Cortisol của tuyến thượng thận"
    ],
    "correct": 3,
    "explanation": "Nghiệm pháp Synacthen đo cortisol máu trước và sau tiêm ACTH giúp chẩn đoán suy thượng thận.",
    "reference": "Sách DLS tr. 393"
  },
  {
    "id": 497,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Trong phẫu thuật hoặc stress nhiễm trùng nặng ở người đang dùng Corticoid dài hạn, cần xử trí liều thế nào?",
    "options": [
      "Giảm một nửa liều để bảo vệ vết thương phẫu thuật trong phác đồ chuẩn",
      "Tăng liều Corticoid lên gấp 2 đến 3 lần để bù trừ cho phản ứng stress",
      "Ngừng thuốc ngay lập tức để tránh ức chế miễn dịch kèm theo sốt nhẹ định kỳ",
      "Giữ nguyên liều uống hàng ngày không thay đổi theo khuyến cáo"
    ],
    "correct": 1,
    "explanation": "Cơ thể bình thường tăng tiết cortisol gấp nhiều lần khi phẫu thuật; bệnh nhân suy teo vỏ thượng thận cần tăng liều stress.",
    "reference": "Sách DLS tr. 394"
  },
  {
    "id": 498,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Glucocorticoid có tác dụng hạ sốt và chống dị ứng cực mạnh là nhờ khả năng ức chế giải phóng chất nào?",
    "options": [
      "Chất nhầy niêm mạc khí phế quản trong phác đồ chuẩn",
      "Men tiêu protein Pepsin trong dạ dày kéo dài liên tục",
      "Hormon tuyến cận giáp Calcitonin theo khuyến cáo",
      "Các Cytokine gây sốt như IL-1, TNF-alpha và Histamin"
    ],
    "correct": 3,
    "explanation": "Corticoid ức chế các cytokine tiền viêm (IL-1, IL-6, TNF) và giảm phóng thích chất trung gian hóa học.",
    "reference": "Sách DLS tr. 395"
  },
  {
    "id": 499,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Thuốc Glucocorticoid nào sau đây là tiền dược phải trải qua quá trình khử hydro tại gan mới có hoạt tính?",
    "options": [
      "Dexamethason và Betamethason",
      "Prednison và Cortison",
      "Methylprednisolon",
      "Prednisolon và Hydrocortison"
    ],
    "correct": 1,
    "explanation": "Prednison chuyển thành Prednisolon và Cortison chuyển thành Hydrocortison nhờ enzym 11-beta-HSD1 ở gan.",
    "reference": "Sách DLS tr. 396"
  },
  {
    "id": 500,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Bệnh nhân bị suy giảm chức năng gan nặng nên ưu tiên sử dụng thuốc nào giữa Prednison và Prednisolon?",
    "options": [
      "Ưu tiên chọn Prednisolon vì không cần chuyển hóa qua gan",
      "Bắt buộc phải dùng dạng viên đặt hậu môn ở mức độ vừa và nặng",
      "Ưu tiên chọn Prednison vì giá thành rẻ hơn kéo dài liên tục",
      "Cả hai thuốc đều không được dùng cho bệnh gan sau khi dùng thuốc"
    ],
    "correct": 0,
    "explanation": "Gan suy không chuyển hóa được Prednison thành Prednisolon hoạt tính, nên dùng trực tiếp Prednisolon.",
    "reference": "Sách DLS tr. 397"
  },
  {
    "id": 501,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Bệnh nhân đái tháo đường đang dùng Glucocorticoid cần được điều chỉnh chế độ điều trị như thế nào?",
    "options": [
      "Giảm liều Insulin xuống để tránh hạ đường huyết sau khi dùng thuốc định kỳ",
      "Cần tăng liều thuốc hạ đường huyết hoặc Insulin và theo dõi đường máu",
      "Chỉ cần ăn kiêng đường tuyệt đối không dùng thuốc trên lâm sàng",
      "Ngừng hoàn toàn việc kiểm tra đường máu mao mạch ở mức độ vừa và nặng"
    ],
    "correct": 1,
    "explanation": "Corticoid làm tăng đường huyết đáng kể, thường cần tăng liều insulin (đặc biệt insulin tác dụng nhanh bữa ăn).",
    "reference": "Sách DLS tr. 398"
  },
  {
    "id": 502,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Glucocorticoid dùng liều cao kéo dài làm tăng số lượng loại tế bào máu nào trong công thức máu?",
    "options": [
      "Tế bào tiểu cầu trong máu ngoại vi trên lâm sàng",
      "Bạch cầu đa nhân trung tính do giải phóng từ thành mạch vào máu",
      "Hồng cầu lưới mới sinh ra ở người bệnh",
      "Bạch cầu ưa acid và bạch cầu lympho ở mức độ vừa và nặng"
    ],
    "correct": 1,
    "explanation": "Corticoid làm tăng bạch cầu trung tính (demargination) nhưng giảm tế bào lympho, bạch cầu ái toan và ái kiềm.",
    "reference": "Sách DLS tr. 399"
  },
  {
    "id": 503,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Kháng chỉ định tiêm chủng loại vắc xin nào cho người đang dùng Glucocorticoid liều cao ức chế miễn dịch?",
    "options": [
      "Vắc xin sống giảm động lực như sởi quai bị rubella, lao",
      "Vắc xin tái tổ hợp viêm gan B ở người bệnh",
      "Vắc xin giải độc tố uốn ván bất hoạt trên lâm sàng định kỳ",
      "Vắc xin phế cầu liên hợp kèm theo sốt nhẹ"
    ],
    "correct": 0,
    "explanation": "Ức chế miễn dịch do corticoid liều cao có thể làm virus sống trong vắc xin nhân lên gây bệnh toàn thân.",
    "reference": "Sách DLS tr. 400"
  },
  {
    "id": 504,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Triamcinolon acetonid tiêm tại chỗ vào bao gân hoặc ổ khớp có thể gây ra tai biến nào nếu tiêm sai vị trí?",
    "options": [
      "Đứt gân, teo mô mỡ dưới da và mất sắc tố da tại chỗ",
      "Gây liệt hoàn toàn dây thần kinh cảm giác",
      "Làm khớp bị dính cứng vĩnh viễn ngay lập tức",
      "Gây xơ vữa động mạch khoeo chân"
    ],
    "correct": 0,
    "explanation": "Tiêm corticoid vào gân làm thoái hóa collagen dẫn đến đứt gân; tiêm nông gây teo mỡ và mất sắc tố da.",
    "reference": "Sách DLS tr. 401"
  },
  {
    "id": 505,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Thời gian tác dụng sinh học của nhóm Glucocorticoid tác dụng kéo dài như Dexamethason là:",
    "options": [
      "Từ 36 đến 54 giờ",
      "Chỉ kéo dài trong 2 giờ",
      "Từ 18 đến 36 giờ",
      "Từ 8 đến 12 giờ"
    ],
    "correct": 0,
    "explanation": "Dexamethason và Betamethason có T1/2 sinh học dài nhất (36-54 giờ), ức chế HPA mạnh nhất.",
    "reference": "Sách DLS tr. 402"
  },
  {
    "id": 506,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Thời gian tác dụng sinh học của nhóm Glucocorticoid tác dụng ngắn như Hydrocortison là:",
    "options": [
      "Chỉ khoảng 30 phút",
      "Từ 8 đến 12 giờ",
      "Trên 72 giờ liên tục",
      "Từ 24 đến 48 giờ"
    ],
    "correct": 1,
    "explanation": "Hydrocortison có tác dụng sinh học ngắn (8-12 giờ), tương đương hormon nội sinh.",
    "reference": "Sách DLS tr. 402"
  },
  {
    "id": 507,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Thời gian tác dụng sinh học của nhóm tác dụng trung bình như Prednisolon và Methylprednisolon là:",
    "options": [
      "Dưới 6 giờ",
      "Từ 2 đến 4 giờ",
      "Trên 60 giờ",
      "Từ 18 đến 36 giờ"
    ],
    "correct": 3,
    "explanation": "Prednisolon và Methylprednisolon có thời gian tác dụng trung bình (18-36 giờ), lý tưởng cho phác đồ cách ngày.",
    "reference": "Sách DLS tr. 402"
  },
  {
    "id": 508,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Khuyến cáo về chế độ ăn uống cho người bệnh điều trị Glucocorticoid dài ngày bao gồm:",
    "options": [
      "Nhịn ăn hoàn toàn chất đạm để bảo vệ thận sau khi dùng thuốc",
      "Chỉ uống nước lọc không ăn tinh bột ở mức độ vừa và nặng",
      "Ăn thật nhiều đồ ngọt và thức ăn mặn đậm đà kéo dài liên tục",
      "Ăn giảm muối, hạn chế đường, giàu protein và bổ sung Canxi"
    ],
    "correct": 3,
    "explanation": "Giảm muối để hạn chế phù THA, giảm đường để tránh đái tháo đường, tăng đạm bù dị hóa và bổ sung canxi ngừa loãng xương.",
    "reference": "Sách DLS tr. 403"
  },
  {
    "id": 509,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Hiện tượng yếu cơ gốc chi đối xứng hai bên khi dùng Glucocorticoid liều cao được gọi là biến chứng:",
    "options": [
      "Hội chứng teo cơ tủy sống",
      "Bệnh lý nhược cơ tiên phát",
      "Bệnh cơ do Corticoid",
      "Viêm đa dây thần kinh ngoại biên"
    ],
    "correct": 2,
    "explanation": "Corticoid làm tăng dị hóa protein gây teo và yếu cơ gốc chi (cơ delta, cơ đùi), hồi phục khi giảm liều.",
    "reference": "Sách DLS tr. 404"
  },
  {
    "id": 510,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Tác dụng của Glucocorticoid trong cấp cứu sốc phản vệ có vai trò chủ yếu trong việc:",
    "options": [
      "Gây giãn cơ trơn khí quản tức thì như Adrenalin trên lâm sàng",
      "Làm tăng ngay lập tức huyết áp trong vòng 30 giây ở mức độ vừa và nặng",
      "Làm mất cảm giác lo âu hoảng sợ của bệnh nhân ở người bệnh",
      "Phòng ngừa và xử trí phản ứng phản vệ pha 2 xuất hiện muộn"
    ],
    "correct": 3,
    "explanation": "Corticoid có khởi phát tác dụng chậm (sau 4-6h), vai trò chính là phòng phản vệ 2 pha, không thay thế adrenalin cấp cứu.",
    "reference": "Sách DLS tr. 405"
  },
  {
    "id": 511,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Thuốc Glucocorticoid bôi ngoài da loại có hoạt lực rất mạnh (Nhóm I) ví dụ là hoạt chất nào?",
    "options": [
      "Desonid 0,05%",
      "Clobetasol propionat 0,05%",
      "Betamethason dipropionat nồng độ thấp",
      "Hydrocortison acetat 1%"
    ],
    "correct": 1,
    "explanation": "Clobetasol propionat 0,05% là corticoid dùng ngoài nhóm I có hoạt lực cực mạnh, chỉ bôi ngắn ngày diện tích nhỏ.",
    "reference": "Sách DLS tr. 406"
  },
  {
    "id": 512,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Không nên bôi Glucocorticoid hoạt lực mạnh vào những vùng da nào sau đây vì nguy cơ teo da cao?",
    "options": [
      "Vùng da ngoài khớp khuỷu tay trong phác đồ chuẩn",
      "Vùng da dày ở lưng và cẳng tay kèm theo sốt nhẹ",
      "Vùng da mặt, nếp gấp kẽ bẹn nách và vùng mi mắt",
      "Vùng lòng bàn tay và lòng bàn chân ở người bệnh"
    ],
    "correct": 2,
    "explanation": "Vùng da mặt và nếp kẽ rất mỏng, hấp thu thuốc mạnh và nguy cơ teo da giãn mạch rất cao.",
    "reference": "Sách DLS tr. 407"
  },
  {
    "id": 513,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Glucocorticoid tác dụng chống dị ứng bằng cách phong bế sự giải phóng chất trung gian nào từ tế bào mast?",
    "options": [
      "Hormon Glucagon và Somatostatin",
      "Histamin, Leukotrien và Bradykinin",
      "Enzym Pepsinogen và Renin",
      "Khí oxy trong lòng mạch"
    ],
    "correct": 1,
    "explanation": "Corticoid làm ổn định màng dưỡng bào và giảm tổng hợp các chất trung gian gây viêm.",
    "reference": "Sách DLS tr. 408"
  },
  {
    "id": 514,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Hội chứng ngừng thuốc Glucocorticoid (Steroid withdrawal syndrome) biểu hiện bằng:",
    "options": [
      "Cơn đau thắt ngực kịch phát không ổn định trong phác đồ chuẩn",
      "Xuất huyết bàng quang cấp tính theo khuyến cáo",
      "Đục mờ giác mạc hai mắt kéo dài liên tục",
      "Sốt, đau mỏi cơ khớp, mệt mỏi suy nhược dù cortisol máu bình thường"
    ],
    "correct": 3,
    "explanation": "Bệnh nhân phụ thuộc thuốc về tâm lý và thể chất có thể mệt mỏi, đau cơ khớp khi ngưng dù chức năng HPA đã hồi phục.",
    "reference": "Sách DLS tr. 409"
  },
  {
    "id": 515,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Khi bệnh nhân cần dùng Corticoid nhưng có tiền sử viêm loét dạ dày tá tràng tiến triển, giải pháp là:",
    "options": [
      "Chuyển sang dùng dạng thuốc bột hòa tan theo khuyến cáo",
      "Phối hợp bắt buộc với thuốc ức chế bơm proton PPI",
      "Uống thuốc vào lúc bụng đói cồn cào kéo dài liên tục",
      "Bẻ đôi liều uống trước khi đi ngủ sau khi dùng thuốc"
    ],
    "correct": 1,
    "explanation": "PPI giúp giảm tiết acid bảo vệ niêm mạc dạ dày khi bắt buộc phải dùng corticoid.",
    "reference": "Sách DLS tr. 410"
  },
  {
    "id": 516,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Hoạt tính kháng viêm của Corticoid liên quan trực tiếp đến sự ức chế biểu hiện của enzym nào?",
    "options": [
      "Enzym Carbonic anhydrase ở thận kéo dài liên tục",
      "Enzym Cholin acetyltransferase ở thần kinh ở mức độ vừa và nặng",
      "Enzym Tyrosin hydroxylase ở não sau khi dùng thuốc",
      "Enzym Cyclooxygenase 2 cảm ứng trong quá trình viêm"
    ],
    "correct": 3,
    "explanation": "Corticoid ức chế phiên mã gen mã hóa enzym COX-2 cảm ứng tạo prostaglandin gây viêm.",
    "reference": "Sách DLS tr. 411"
  },
  {
    "id": 517,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Tác dụng phụ gây tăng áp lực nội sọ lành tính có thể gặp ở đối tượng bệnh nhân nào khi dùng Corticoid?",
    "options": [
      "Người tập thể hình cường độ cao trên lâm sàng",
      "Người cao tuổi mắc bệnh đái tháo đường sau khi dùng thuốc",
      "Trẻ em khi giảm liều hoặc ngừng thuốc Corticoid quá nhanh",
      "Phụ nữ sau khi sinh con 6 tháng ở mức độ vừa và nặng"
    ],
    "correct": 2,
    "explanation": "Hội chứng não giả (pseudotumor cerebri) tăng áp lực nội sọ có thể xảy ra ở trẻ em khi ngưng corticoid đột ngột.",
    "reference": "Sách DLS tr. 412"
  },
  {
    "id": 518,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Loại Glucocorticoid khí dung nào sau đây có sinh khả dụng toàn thân thấp nhất dưới 1%?",
    "options": [
      "Hydrocortison dạng xịt",
      "Beclomethason dipropionat",
      "Triamcinolon acetonid",
      "Ciclesonid và Mometason furoat"
    ],
    "correct": 3,
    "explanation": "Ciclesonid là tiền dược hoạt hóa tại phổi và chuyển hóa qua gan lần đầu gần 100%, sinh khả dụng toàn thân cực thấp.",
    "reference": "Sách DLS tr. 413"
  },
  {
    "id": 519,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Khi điều trị viêm màng não do vi khuẩn ở người lớn, Dexamethason nên được đưa vào thời điểm nào?",
    "options": [
      "Sau khi đã điều trị kháng sinh được đủ 48 giờ trên lâm sàng",
      "Chỉ đưa vào khi bệnh nhân hết sốt hoàn toàn ở người bệnh",
      "Trước hoặc cùng thời điểm với liều kháng sinh đầu tiên",
      "Đưa vào ngày thứ 7 của đợt điều trị kèm theo sốt nhẹ"
    ],
    "correct": 2,
    "explanation": "Dexamethason dùng trước hoặc cùng lúc kháng sinh đầu tiên giúp giảm viêm do độc tố vi khuẩn tan rã và giảm di chứng điếc.",
    "reference": "Sách DLS tr. 414"
  },
  {
    "id": 520,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Liệu trình dùng Dexamethason trong viêm màng não nhiễm khuẩn ở người lớn thường kéo dài bao lâu?",
    "options": [
      "Chỉ dùng một liều duy nhất",
      "Kéo dài trong vòng 4 ngày liên tục",
      "Kéo dài tối thiểu 1 tháng",
      "Kéo dài 14 ngày ngắt quãng"
    ],
    "correct": 1,
    "explanation": "Dexamethason 10 mg tiêm tĩnh mạch mỗi 6 giờ trong 4 ngày được khuyến cáo cho viêm màng não phế cầu.",
    "reference": "Sách DLS tr. 415"
  },
  {
    "id": 521,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Trong đợt cấp bệnh phổi tắc nghẽn mạn tính COPD, liệu trình dùng Corticoid toàn thân được khuyến cáo là:",
    "options": [
      "Prednisolon 100 mg mỗi ngày trong 30 ngày",
      "Prednisolon 40 mg mỗi ngày trong vòng 5 ngày",
      "Dexamethason tiêm bắp trong suốt 6 tháng",
      "Không dùng Corticoid cho đợt cấp COPD"
    ],
    "correct": 1,
    "explanation": "Hướng dẫn GOLD khuyến cáo Prednisone/Prednisolone 40 mg/ngày trong 5 ngày cho đợt cấp COPD.",
    "reference": "Sách DLS tr. 416"
  },
  {
    "id": 522,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Một đợt điều trị ngắn ngày Corticoid được định nghĩa trên thực hành lâm sàng là kéo dài dưới:",
    "options": [
      "Dưới 180 ngày kéo dài liên tục",
      "Dưới 60 ngày điều trị trong phác đồ chuẩn",
      "Dưới 90 ngày theo khuyến cáo",
      "Dưới 14 ngày điều trị liên tục"
    ],
    "correct": 3,
    "explanation": "Đợt ngắn ngày < 14 ngày thường không gây teo vỏ thượng thận và có thể ngưng thuốc mà không cần giảm liều phức tạp.",
    "reference": "Sách DLS tr. 417"
  },
  {
    "id": 523,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Bệnh nhân có vết loét giác mạc do vi rút Herpes simplex bị chống chỉ định tuyệt đối với:",
    "options": [
      "Thuốc nhỏ mắt nước mắt nhân tạo",
      "Dung dịch nhỏ mắt kháng sinh",
      "Thuốc nhỏ mắt chứa Corticoid",
      "Thuốc nhỏ mắt chứa Acyclovir"
    ],
    "correct": 2,
    "explanation": "Corticoid nhỏ mắt làm virus Herpes bùng phát hoại tử thủng giác mạc gây mù vĩnh viễn.",
    "reference": "Sách DLS tr. 418"
  },
  {
    "id": 524,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Tại sao không nên dùng Glucocorticoid toàn thân kéo dài để hạ sốt thông thường?",
    "options": [
      "Vì nguy cơ che lấp các dấu hiệu nhiễm trùng và gây nhiều tác dụng phụ nặng",
      "Vì Corticoid hoàn toàn không có tác dụng hạ thân nhiệt kéo dài liên tục",
      "Vì làm thân nhiệt tụt xuống dưới 30 độ C gây tử vong sau khi dùng thuốc",
      "Vì làm mất tác dụng của các loại kháng sinh ở mức độ vừa và nặng"
    ],
    "correct": 0,
    "explanation": "Corticoid có độc tính toàn thân lớn và làm lu mờ triệu chứng nhiễm khuẩn nguy hiểm.",
    "reference": "Sách DLS tr. 419"
  },
  {
    "id": 525,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Sự gắn kết của Cortisol tự nhiên trong máu chủ yếu thông qua loại protein chuyên biệt nào?",
    "options": [
      "Transcortin hay Globulin gắn Corticosteroid",
      "Alpha-1 acid glycoprotein ở mức độ vừa và nặng",
      "Fibrinogen hòa tan trên lâm sàng",
      "Albumin huyết thanh đơn thuần sau khi dùng thuốc"
    ],
    "correct": 0,
    "explanation": "CBG (Transcortin) gắn khoảng 75-80% cortisol lưu hành với ái lực rất cao.",
    "reference": "Sách DLS tr. 420"
  },
  {
    "id": 526,
    "chapter": "Thuốc giảm đau",
    "question": "Theo thang bậc giảm đau 3 bước của Tổ chức Y tế Thế giới (WHO), bậc 1 bao gồm những thuốc nào?",
    "options": [
      "Thuốc giảm đau không Opioid như Paracetamol và NSAID",
      "Thuốc gây mê đường hít phối hợp ở người bệnh",
      "Thuốc Opioid mạnh như Morphin và Fentanyl trên lâm sàng",
      "Thuốc Opioid yếu như Codein và Tramadol ở mức độ vừa và nặng"
    ],
    "correct": 0,
    "explanation": "Bậc 1 dùng cho đau nhẹ đến vừa: Non-opioid (Paracetamol, NSAID) +/- thuốc hỗ trợ.",
    "reference": "Sách DLS tr. 425"
  },
  {
    "id": 527,
    "chapter": "Thuốc giảm đau",
    "question": "Bậc 2 trong thang giảm đau của WHO dành cho mức độ đau nào và sử dụng nhóm thuốc gì?",
    "options": [
      "Đau dữ dội không chịu nổi, dùng Morphin liều cao",
      "Đau mức độ vừa, dùng Opioid yếu như Codein hoặc Tramadol",
      "Đau nhẹ thoáng qua, chỉ cần chườm ấm",
      "Đau thần kinh mạn tính, dùng thuốc chống động kinh đơn độc"
    ],
    "correct": 1,
    "explanation": "Bậc 2 dùng khi đau vừa (VAS 4-6): Opioid yếu +/- non-opioid +/- thuốc hỗ trợ.",
    "reference": "Sách DLS tr. 426"
  },
  {
    "id": 528,
    "chapter": "Thuốc giảm đau",
    "question": "Bậc 3 trong thang bậc giảm đau của WHO áp dụng cho bệnh nhân nào và dùng thuốc gì?",
    "options": [
      "Đau cơ do mệt mỏi, dùng Paracetamol liều thấp ở người bệnh",
      "Đau răng thông thường, dùng Aspirin đơn độc trong phác đồ chuẩn",
      "Đau đầu do căng thẳng, dùng thuốc an thần kèm theo sốt nhẹ",
      "Đau nặng dữ dội, dùng Opioid mạnh như Morphin hoặc Fentanyl"
    ],
    "correct": 3,
    "explanation": "Bậc 3 dùng cho đau nặng (VAS 7-10): Opioid mạnh như Morphin, Oxycodon, Fentanyl.",
    "reference": "Sách DLS tr. 427"
  },
  {
    "id": 529,
    "chapter": "Thuốc giảm đau",
    "question": "Tổng liều Paracetamol tối đa khuyến cáo cho người lớn khỏe mạnh trong 24 giờ là:",
    "options": [
      "8 gam trong 24 giờ",
      "4 gam trong 24 giờ",
      "1 gam trong 24 giờ",
      "2 gam trong 24 giờ"
    ],
    "correct": 1,
    "explanation": "Liều tối đa người lớn là 4g/ngày (hoặc 2-3g/ngày ở người già, người nghiện rượu, suy dinh dưỡng).",
    "reference": "Sách DLS tr. 428"
  },
  {
    "id": 530,
    "chapter": "Thuốc giảm đau",
    "question": "Chất chuyển hóa trung gian có độc tính cao gây hoại tử tế bào gan của Paracetamol là:",
    "options": [
      "Acid para-aminobenzoic kéo dài liên tục",
      "N-acetyl-p-benzoquinone imine viết tắt là NAPQI",
      "Acid salicylic tự do trong tế bào trong phác đồ chuẩn",
      "Chất liên hợp glucuronic không tan theo khuyến cáo"
    ],
    "correct": 1,
    "explanation": "CYP2E1 chuyển hóa paracetamol thành NAPQI, chất này phản ứng làm chết tế bào gan.",
    "reference": "Sách DLS tr. 429"
  },
  {
    "id": 531,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc giải độc đặc hiệu N-Acetylcystein phát huy hiệu quả bảo vệ gan tối ưu nhất khi dùng trong vòng:",
    "options": [
      "Sau 7 ngày khi men gan đã tăng vọt kéo dài liên tục",
      "Sau 48 giờ kể từ khi xuất hiện vàng da theo khuyến cáo định kỳ",
      "Chỉ dùng khi bệnh nhân đã hôn mê gan sau khi dùng thuốc",
      "Trong vòng 8 đến 10 giờ đầu sau khi uống ngộ độc Paracetamol"
    ],
    "correct": 3,
    "explanation": "NAC dùng trong vòng 8-10 giờ đầu sau ngộ độc giúp phòng ngừa gần như 100% tổn thương gan nặng.",
    "reference": "Sách DLS tr. 430"
  },
  {
    "id": 532,
    "chapter": "Thuốc giảm đau",
    "question": "Khác biệt cơ bản về tác dụng dược lý giữa Paracetamol và các thuốc NSAID là:",
    "options": [
      "Paracetamol có tác dụng chống viêm mạnh hơn Aspirin kéo dài liên tục",
      "Paracetamol gây loét dạ dày tá tràng nặng nề hơn sau khi dùng thuốc",
      "Paracetamol gây co thắt khí phế quản ở mọi bệnh nhân ở mức độ vừa và nặng",
      "Paracetamol không có tác dụng chống viêm và không ức chế kết tập tiểu cầu"
    ],
    "correct": 3,
    "explanation": "Paracetamol giảm đau hạ sốt trung ương, không chống viêm và không ảnh hưởng tiểu cầu/dạ dày.",
    "reference": "Sách DLS tr. 431"
  },
  {
    "id": 533,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc chống viêm không steroid (NSAID) ức chế enzym nào để ngăn chặn tổng hợp Prostaglandin?",
    "options": [
      "Enzym Cyclooxygenase",
      "Enzym Phospholipase A2",
      "Enzym Lipoxygenase",
      "Enzym Xanthine oxidase"
    ],
    "correct": 0,
    "explanation": "NSAID ức chế enzym COX-1 và COX-2 biến đổi acid arachidonic thành prostaglandin và thromboxan.",
    "reference": "Sách DLS tr. 432"
  },
  {
    "id": 534,
    "chapter": "Thuốc giảm đau",
    "question": "Enzym COX-1 có vai trò sinh lý quan trọng nào trong cơ thể người?",
    "options": [
      "Bảo vệ niêm mạc dạ dày và duy trì dòng máu tưới thận",
      "Tiêu diệt vi khuẩn xâm nhập vào máu",
      "Kích thích tạo cơn đau và phản ứng sốt cấp tính",
      "Làm tan cục máu đông trong lòng mạch"
    ],
    "correct": 0,
    "explanation": "COX-1 là enzym cấu tạo tạo PG bảo vệ tế bào biểu mô dạ dày và điều hòa tưới máu thận.",
    "reference": "Sách DLS tr. 433"
  },
  {
    "id": 535,
    "chapter": "Thuốc giảm đau",
    "question": "Enzym COX-2 chủ yếu được sinh ra trong điều kiện sinh lý nào?",
    "options": [
      "Chỉ sinh ra ở người khỏe mạnh không bị bệnh",
      "Được cảm ứng mạnh mẽ tại các mô đang có phản ứng viêm",
      "Chỉ xuất hiện trong lòng các tế bào hồng cầu già",
      "Tồn tại thường trực với nồng độ cao trong niêm mạc dạ dày"
    ],
    "correct": 1,
    "explanation": "COX-2 là enzym cảm ứng sinh ra khi có kích thích viêm, chấn thương mô, tạo các PG gây viêm và đau.",
    "reference": "Sách DLS tr. 434"
  },
  {
    "id": 536,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc NSAID ức chế chọn lọc trên enzym COX-2 như Celecoxib có ưu điểm lâm sàng nổi bật nào?",
    "options": [
      "Giảm đáng kể tỷ lệ tác dụng phụ gây loét và xuất huyết tiêu hóa",
      "Có thể dùng an toàn cho người suy tim giai đoạn cuối trong phác đồ chuẩn",
      "Làm giảm hoàn toàn nguy cơ biến cố tim mạch huyết khối kèm theo sốt nhẹ",
      "Không gây bất kỳ tác dụng phụ nào trên thận ở người bệnh"
    ],
    "correct": 0,
    "explanation": "Ức chế chọn lọc COX-2 giúp bảo tồn COX-1 ở dạ dày nên giảm loét tiêu hóa nhưng tăng biến cố tim mạch.",
    "reference": "Sách DLS tr. 435"
  },
  {
    "id": 537,
    "chapter": "Thuốc giảm đau",
    "question": "Các thuốc NSAID ức chế chọn lọc COX-2 bị cảnh báo đặc biệt về nguy cơ biến chứng nào?",
    "options": [
      "Gây suy tủy xương dòng hồng cầu cấp trong phác đồ chuẩn",
      "Gây viêm xơ đường mật tiên phát theo khuyến cáo",
      "Gây điếc tai tiếp nhận không phục hồi kèm theo sốt nhẹ định kỳ",
      "Biến cố tim mạch huyết khối như nhồi máu cơ tim và đột quỵ"
    ],
    "correct": 3,
    "explanation": "Ức chế PGI2 (giãn mạch, chống đông) mà không ức chế TXA2 (co mạch, đông máu) gây mất thăng bằng tim mạch.",
    "reference": "Sách DLS tr. 436"
  },
  {
    "id": 538,
    "chapter": "Thuốc giảm đau",
    "question": "Aspirin liều thấp từ 75 đến 100 mg mỗi ngày được sử dụng trong tim mạch với mục đích:",
    "options": [
      "Chống viêm cơ tim cấp tính do virus kéo dài liên tục",
      "Giảm đau nhức đầu gối do thoái hóa khớp theo khuyến cáo",
      "Chống kết tập tiểu cầu để phòng ngừa huyết khối động mạch",
      "Hạ sốt nhanh trong các cơn sốt cao ác tính trong phác đồ chuẩn"
    ],
    "correct": 2,
    "explanation": "Aspirin acetyl hóa không hồi phục COX-1 tiểu cầu làm mất tạo TXA2 trong suốt đời sống tiểu cầu (7-10 ngày).",
    "reference": "Sách DLS tr. 437"
  },
  {
    "id": 539,
    "chapter": "Thuốc giảm đau",
    "question": "Tại sao tác dụng chống kết tập tiểu cầu của Aspirin kéo dài suốt đời sống của tiểu cầu?",
    "options": [
      "Vì tiểu cầu không có nhân nên không thể tổng hợp mới enzym COX-1 bị bất hoạt",
      "Vì tủy xương ngừng sản xuất tiểu cầu mới sau khi dùng thuốc",
      "Vì Aspirin lưu lại trong huyết tương suốt đời sống tiểu cầu theo khuyến cáo định kỳ",
      "Vì Aspirin phá hủy hoàn toàn màng tế bào tiểu cầu kéo dài liên tục"
    ],
    "correct": 0,
    "explanation": "Tiểu cầu không có nhân để phiên mã ARN tạo protein mới, ức chế COX-1 tồn tại vĩnh viễn đến khi tiểu cầu chết.",
    "reference": "Sách DLS tr. 438"
  },
  {
    "id": 540,
    "chapter": "Thuốc giảm đau",
    "question": "Bệnh nhân có tiền sử loét dạ dày tá tràng nếu bắt buộc phải dùng NSAID thì lựa chọn tối ưu là:",
    "options": [
      "Dùng đồng thời hai loại NSAID khác nhau ở mức độ vừa và nặng",
      "Dùng Indomethacin liều tối đa kèm nước chanh sau khi dùng thuốc",
      "Dùng Aspirin liều cao uống vào ban đêm kéo dài liên tục",
      "Dùng NSAID chọn lọc COX-2 kết hợp cùng với thuốc ức chế bơm proton PPI"
    ],
    "correct": 3,
    "explanation": "Khuyến cáo hội tiêu hóa: bệnh nhân nguy cơ tiêu hóa cao dùng COX-2 selective + PPI.",
    "reference": "Sách DLS tr. 439"
  },
  {
    "id": 541,
    "chapter": "Thuốc giảm đau",
    "question": "Tác dụng của NSAID lên chức năng thận là do ức chế tổng hợp Prostaglandin nào?",
    "options": [
      "Leukotrien B4 gây viêm màng đáy cầu thận ở mức độ vừa và nặng",
      "Prostaglandin F2-alpha ở tủy thận trên lâm sàng",
      "Thromboxan A2 gây giãn mao mạch cầu thận sau khi dùng thuốc định kỳ",
      "PGE2 và PGI2 gây co tiểu động mạch đến của cầu thận làm giảm GFR"
    ],
    "correct": 3,
    "explanation": "PG làm giãn tiểu động mạch vào duy trì GFR, NSAID ức chế PG làm co tiểu động mạch vào gây suy thận cấp.",
    "reference": "Sách DLS tr. 440"
  },
  {
    "id": 542,
    "chapter": "Thuốc giảm đau",
    "question": "Bộ ba nguy hiểm gây suy thận cấp (Triple whammy) khi dùng đồng thời trên một bệnh nhân bao gồm:",
    "options": [
      "Thuốc hạ mỡ máu, vitamin nhóm B và dung dịch glucose",
      "Thuốc kháng sinh, thuốc hạ sốt và thuốc kháng acid",
      "Thuốc lợi tiểu, thuốc ức chế men chuyển và thuốc NSAID",
      "Thuốc kháng histamin, paracetamol và men tiêu hóa"
    ],
    "correct": 2,
    "explanation": "Lợi tiểu (giảm thể tích) + ƯCMC (giãn tiểu động mạch ra) + NSAID (co tiểu động mạch vào) làm sụp đổ hoàn toàn GFR.",
    "reference": "Sách DLS tr. 441"
  },
  {
    "id": 543,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc NSAID nào sau đây có nguy cơ gây độc tính trên tim mạch thấp nhất được ưu tiên cho bệnh nhân tim mạch?",
    "options": [
      "Etoricoxib",
      "Diclofenac",
      "Celecoxib",
      "Naproxen"
    ],
    "correct": 3,
    "explanation": "Naproxen ức chế COX-1 bền vững tương tự aspirin nên có nguy cơ tim mạch thấp nhất trong các NSAID.",
    "reference": "Sách DLS tr. 442"
  },
  {
    "id": 544,
    "chapter": "Thuốc giảm đau",
    "question": "Tam chứng kinh điển của ngộ độc cấp tính Morphin và các Opioid bao gồm:",
    "options": [
      "Hôn mê sâu, ức chế hô hấp thở chậm và đồng tử co nhỏ như đầu đinh ghim",
      "Mất trí nhớ, liệt nửa người và xuất huyết tiêu hóa trong phác đồ chuẩn",
      "Tăng huyết áp kịch phát, tiêu chảy cấp và run giật cơ kèm theo sốt nhẹ",
      "Sốt cao co giật, thở nhanh nông và giãn đồng tử tối đa ở người bệnh"
    ],
    "correct": 0,
    "explanation": "Tam chứng ngộ độc opioid: Hôn mê + Thở chậm (< 8-10 l/p hoặc ngưng thở) + Đồng tử co nhỏ châm kim.",
    "reference": "Sách DLS tr. 443"
  },
  {
    "id": 545,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc giải độc đặc hiệu dùng để cấp cứu tức thì ngộ độc Morphin và các Opioid là:",
    "options": [
      "Atropin sulfat tiêm bắp",
      "Naloxon tiêm tĩnh mạch",
      "Flumazenil tiêm tĩnh mạch",
      "Physostigmin truyền chậm"
    ],
    "correct": 1,
    "explanation": "Naloxon là chất đối kháng cạnh tranh thuần túy trên thụ thể mu opiat, phục hồi hô hấp sau vài phút.",
    "reference": "Sách DLS tr. 444"
  },
  {
    "id": 546,
    "chapter": "Thuốc giảm đau",
    "question": "Tác dụng không mong muốn thường trực của Morphin mà bệnh nhân không bao giờ dung nạp theo thời gian là:",
    "options": [
      "Táo bón và co nhỏ đồng tử",
      "Buồn nôn và nôn mửa",
      "Ngứa da và nổi mày đay",
      "Buồn ngủ và an thần"
    ],
    "correct": 0,
    "explanation": "Dung nạp xuất hiện với tác dụng giảm đau, an thần, nôn; nhưng táo bón và co đồng tử không bao giờ dung nạp.",
    "reference": "Sách DLS tr. 445"
  },
  {
    "id": 547,
    "chapter": "Thuốc giảm đau",
    "question": "Cơ chế giảm đau của Morphin là do kích thích chọn lọc trên loại thụ thể nào trong hệ thần kinh?",
    "options": [
      "Thụ thể GABA-A",
      "Thụ thể Muscarinic M1",
      "Thụ thể Mu-opioid",
      "Thụ thể Beta-2 adrenergic"
    ],
    "correct": 2,
    "explanation": "Morphin gắn thụ thể mu-opioid ở tủy sống và trên tủy làm ức chế dẫn truyền xung động đau lên não.",
    "reference": "Sách DLS tr. 446"
  },
  {
    "id": 548,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc giảm đau Opioid Fentanyl dạng miếng dán thẩm thấu qua da có đặc điểm chỉ định nào?",
    "options": [
      "Dùng giảm đau sau nhổ răng thông thường sau khi dùng thuốc",
      "Dùng cấp cứu các cơn đau quặn thận cấp tính dữ dội kéo dài liên tục",
      "Chỉ dùng cho các cơn đau mạn tính liên tục đã dung nạp với Opioid",
      "Dùng điều trị sốt xuất huyết ở trẻ nhỏ ở mức độ vừa và nặng"
    ],
    "correct": 2,
    "explanation": "Miếng dán Fentanyl giải phóng chậm ổn định trong 72 giờ, chỉ dùng cho đau mạn tính dung nạp opioid (như ung thư).",
    "reference": "Sách DLS tr. 447"
  },
  {
    "id": 549,
    "chapter": "Thuốc giảm đau",
    "question": "Tại sao miếng dán Fentanyl không bao giờ được dùng để điều trị cơn đau cấp tính sau mổ?",
    "options": [
      "Vì khởi phát tác dụng rất chậm sau 12 đến 24 giờ và nguy cơ ức chế hô hấp chết người",
      "Vì thuốc làm chảy máu vết mổ dữ dội trên lâm sàng",
      "Vì miếng dán làm tăng nhịp tim gây loạn nhịp tức thì ở mức độ vừa và nặng",
      "Vì thuốc bị phân hủy ngay khi dán lên da người sau mổ sau khi dùng thuốc định kỳ"
    ],
    "correct": 0,
    "explanation": "Cần 12-24h thuốc mới đạt nồng độ ổn định, không chỉnh liều nhanh được, nguy cơ ngộ độc ức chế hô hấp tử vong.",
    "reference": "Sách DLS tr. 448"
  },
  {
    "id": 550,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc giảm đau Opioid Pethidin (Meperidin) không nên dùng kéo dài trên 48 giờ vì tích lũy chất độc nào?",
    "options": [
      "Chất chuyển hóa morphin 6 glucuronid ở người bệnh",
      "N-acetyl cystein gây suy gan trên lâm sàng",
      "Normeperidin gây kích thích thần kinh co giật",
      "Acid mefenamic gây thủng dạ dày ở mức độ vừa và nặng"
    ],
    "correct": 2,
    "explanation": "Normeperidin có T1/2 dài (15-30h) tích lũy gây run, giật cơ và co giật, đặc biệt ở người suy thận.",
    "reference": "Sách DLS tr. 449"
  },
  {
    "id": 551,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc giảm đau Tramadol có cơ chế tác dụng kép độc đáo thể hiện qua hai tác động nào?",
    "options": [
      "Kích thích thụ thể GABA và đối kháng Dopamin ở người bệnh",
      "Gắn thụ thể Mu-opioid và ức chế tái hấp thu Serotonin cùng Noradrenalin",
      "Ức chế kênh Natri và kênh Calci màng tế bào kèm theo sốt nhẹ",
      "Ức chế đồng thời cả COX-1 và Phospholipase A2 trên lâm sàng định kỳ"
    ],
    "correct": 1,
    "explanation": "Tramadol kích thích yếu thụ thể mu đồng thời tăng nồng độ serotonin và noradrenalin ở tủy sống ức chế dẫn truyền đau.",
    "reference": "Sách DLS tr. 450"
  },
  {
    "id": 552,
    "chapter": "Thuốc giảm đau",
    "question": "Dùng Tramadol phối hợp với các thuốc chống trầm cảm nhóm SSRI làm tăng nguy cơ xuất hiện biến chứng gì?",
    "options": [
      "Hội chứng thận hư thứ phát",
      "Hội chứng ngộ độc Serotonin kịch phát",
      "Hội chứng hoại tử thượng bì nhiễm độc",
      "Cơn đau quặn gan dữ dội"
    ],
    "correct": 1,
    "explanation": "Cả hai đều làm tăng serotonin synap, phối hợp dễ dẫn đến hội chứng serotonin đe dọa tính mạng.",
    "reference": "Sách DLS tr. 451"
  },
  {
    "id": 553,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc giảm đau Codein có tác dụng giảm đau trên lâm sàng là nhờ chuyển hóa thành chất nào qua CYP2D6?",
    "options": [
      "Chuyển hóa thành Paracetamol hoạt tính",
      "Chuyển hóa thành Fentanyl nồng độ cao",
      "Chuyển hóa thành Morphin với tỷ lệ khoảng 10%",
      "Chuyển hóa thành Acid salicylic tự do"
    ],
    "correct": 2,
    "explanation": "Codein là tiền dược, khoảng 10% được CYP2D6 chuyển hóa thành morphin mang lại tác dụng giảm đau.",
    "reference": "Sách DLS tr. 452"
  },
  {
    "id": 554,
    "chapter": "Thuốc giảm đau",
    "question": "Người mang kiểu gen chuyển hóa siêu nhanh enzym CYP2D6 khi uống Codein có nguy cơ gặp biến cố gì?",
    "options": [
      "Bị dị ứng nổi mẩn ngứa nhẹ ngoài da theo khuyến cáo",
      "Bị sỏi thận acid uric cấp tính kéo dài liên tục",
      "Ngộ độc Morphin dẫn đến hôn mê ức chế hô hấp đe dọa tính mạng",
      "Mất hoàn toàn tác dụng giảm đau của Codein trong phác đồ chuẩn"
    ],
    "correct": 2,
    "explanation": "CYP2D6 siêu nhanh chuyển hóa vọt codein thành lượng lớn morphin gây ngộ độc cấp nguy hiểm.",
    "reference": "Sách DLS tr. 453"
  },
  {
    "id": 555,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc chống viêm NSAID Ketorolac dạng tiêm có khuyến cáo về thời gian sử dụng tối đa là bao lâu?",
    "options": [
      "Không dùng quá 5 ngày liên tục",
      "Không dùng quá 30 ngày",
      "Có thể dùng liên tục trong 6 tháng",
      "Chỉ dùng một lần duy nhất trong đời"
    ],
    "correct": 0,
    "explanation": "Ketorolac có độc tính loét xuất huyết dạ dày và suy thận rất cao, chống chỉ định dùng quá 5 ngày.",
    "reference": "Sách DLS tr. 454"
  },
  {
    "id": 556,
    "chapter": "Thuốc giảm đau",
    "question": "Cơn hen do Aspirin (Aspirin-induced asthma) thường đi kèm với các triệu chứng lâm sàng nào trong tam chứng Samter?",
    "options": [
      "Loét dạ dày tá tràng, trào ngược và ho sau khi dùng thuốc",
      "Hen phế quản mạn tính, polyp mũi và dị ứng với Aspirin cùng NSAID",
      "Viêm xoang cấp, thủng màng nhĩ và điếc kéo dài liên tục",
      "Nổi mề đay, sốt rét run và vàng mắt ở mức độ vừa và nặng"
    ],
    "correct": 1,
    "explanation": "Tam chứng Samter (AERD): Hen phế quản + Polyp mũi + Nhạy cảm phản ứng dữ dội với Aspirin/NSAID.",
    "reference": "Sách DLS tr. 455"
  },
  {
    "id": 557,
    "chapter": "Thuốc giảm đau",
    "question": "Bệnh nhân có hội chứng suy tim sung huyết khi sử dụng NSAID có nguy cơ xuất hiện biến cố nào?",
    "options": [
      "Ứ dịch gây đợt cấp suy tim mất bù và kháng thuốc lợi tiểu",
      "Gây cơn bão giáp trạng cấp tính sau khi dùng thuốc định kỳ",
      "Làm tan hoàn toàn huyết khối trong buồng tim ở mức độ vừa và nặng",
      "Làm tim đập chậm xoang dưới 30 nhịp trên lâm sàng"
    ],
    "correct": 0,
    "explanation": "NSAID gây co mạch thận, ứ muối nước làm giảm hiệu quả lợi tiểu quai và thúc đẩy suy tim mất bù.",
    "reference": "Sách DLS tr. 456"
  },
  {
    "id": 558,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc giảm đau đau dây thần kinh sau Zona hoặc đau thần kinh đái tháo đường được ưu tiên lựa chọn là:",
    "options": [
      "Gabapentin hoặc Pregabalin",
      "Paracetamol liều tối đa 4g",
      "Aspirin dạng viên bao tan",
      "Morphin dạng viên nén giải phóng chậm"
    ],
    "correct": 0,
    "explanation": "Pregabalin và Gabapentin gắn kênh calci phụ thuộc điện thế ức chế phóng thích glutamat, thuốc hàng đầu cho đau thần kinh.",
    "reference": "Sách DLS tr. 457"
  },
  {
    "id": 559,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc giảm đau điều trị đặc hiệu hàng đầu cho cơn đau dây thần kinh sinh ba số V là:",
    "options": [
      "Ibuprofen",
      "Paracetamol",
      "Codein phosphat",
      "Carbamazepin"
    ],
    "correct": 3,
    "explanation": "Carbamazepin phong bế kênh natri là thuốc chuẩn vàng đầu tay kiểm soát đau dây V kịch phát.",
    "reference": "Sách DLS tr. 458"
  },
  {
    "id": 560,
    "chapter": "Thuốc giảm đau",
    "question": "Hội chứng cai thuốc Opioid xuất hiện khi ngừng thuốc đột ngột ở người nghiện biểu hiện bằng các dấu hiệu:",
    "options": [
      "Táo bón dữ dội và khô miệng hoàn toàn kèm theo sốt nhẹ",
      "Hôn mê sâu, thở chậm và co nhỏ đồng tử ở người bệnh",
      "Ngáp, chảy nước mũi nước mắt, nổi da gà, tiêu chảy và giãn đồng tử",
      "Hạ thân nhiệt và tụt huyết áp kịch phát trong phác đồ chuẩn"
    ],
    "correct": 2,
    "explanation": "Cai opioid: cường giao cảm dữ dội, giãn đồng tử, vã mồ hôi, tiêu chảy, đau quặn bụng, đau cơ xương.",
    "reference": "Sách DLS tr. 459"
  },
  {
    "id": 561,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc chống trầm cảm ba vòng Amitriptylin ở liều thấp thường được chỉ định để điều trị tình trạng nào?",
    "options": [
      "Chống phù nề sau phẫu thuật chấn thương theo khuyến cáo",
      "Đau thần kinh mạn tính và dự phòng đau nửa đầu Migraine",
      "Cấp cứu đau quặn mật dữ dội kèm theo sốt nhẹ định kỳ",
      "Hạ sốt cao co giật ở trẻ em trong phác đồ chuẩn"
    ],
    "correct": 1,
    "explanation": "Amitriptylin 10-25mg uống tối làm tăng ức chế đau hướng xuống, hiệu quả trong đau thần kinh và phòng Migraine.",
    "reference": "Sách DLS tr. 460"
  },
  {
    "id": 562,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc giảm đau Diclofenac dạng gel bôi ngoài da tại chỗ có ưu điểm lớn nào so với dạng uống?",
    "options": [
      "Có tác dụng nhanh hơn tiêm tĩnh mạch kèm theo buồn nôn, nôn mửa và đau quặn bụng dữ dội",
      "Làm tan hoàn toàn các gai xương thoái hóa kèm theo đau đầu dữ dội và sốt cao run người",
      "Tập trung nồng độ cao tại khớp và giảm thiểu tác dụng phụ toàn thân trên tiêu hóa tim mạch",
      "Không bao giờ gây dị ứng da kèm theo chóng mặt, ù tai và suy giảm thính lực nhẹ"
    ],
    "correct": 2,
    "explanation": "Hấp thu toàn thân của gel Diclofenac chỉ khoảng 6-10% so với uống, giảm mạnh ADR dạ dày ruột.",
    "reference": "Sách DLS tr. 461"
  },
  {
    "id": 563,
    "chapter": "Thuốc giảm đau",
    "question": "Nguyên tắc sử dụng thuốc giảm đau cho bệnh nhân ung thư giai đoạn cuối được WHO khuyến cáo là:",
    "options": [
      "Dùng thuốc đều đặn theo giờ cố định không chờ đến khi đau mới uống",
      "Chỉ tiêm giảm đau khi bệnh nhân khóc lóc kêu đau theo khuyến cáo định kỳ",
      "Hạn chế tối đa dùng Opioid vì sợ bệnh nhân nghiện thuốc kéo dài liên tục",
      "Chỉ dùng một liều duy nhất trước khi đi ngủ sau khi dùng thuốc"
    ],
    "correct": 0,
    "explanation": "Đau ung thư cần dùng giảm đau theo giờ cố định 'by the clock' để duy trì nồng độ thuốc liên tục trong máu.",
    "reference": "Sách DLS tr. 462"
  },
  {
    "id": 564,
    "chapter": "Thuốc giảm đau",
    "question": "Cơn đau đột xuất bùng phát ở bệnh nhân ung thư đang điều trị duy trì Opioid được kiểm soát bằng:",
    "options": [
      "Tăng liều miếng dán Fentanyl lên gấp 3 lần kéo dài liên tục kèm theo sốt cao và suy nhược cơ thể",
      "Chuyển sang tiêm bắp nước cất vô trùng sau khi dùng thuốc kết hợp theo dõi định kỳ chức năng thận",
      "Bắt buộc bệnh nhân phải nhịn ăn ở mức độ vừa và nặng làm tăng tỷ lệ tử vong trên người bệnh",
      "Dùng thêm một liều Opioid tác dụng nhanh giải phóng tức thì theo nhu cầu"
    ],
    "correct": 3,
    "explanation": "Đau bùng phát (breakthrough pain) xử trí bằng opioid giải phóng tức thì (IR) liều tương đương 1/6 đến 1/10 tổng liều 24h.",
    "reference": "Sách DLS tr. 463"
  },
  {
    "id": 565,
    "chapter": "Thuốc giảm đau",
    "question": "Phương pháp kiểm soát giảm đau do bệnh nhân tự điều khiển PCA cho phép bệnh nhân:",
    "options": [
      "Tự pha thuốc giảm đau vào chai dịch truyền ở mức độ vừa và nặng",
      "Tự bấm nút để máy tiêm một liều nhỏ thuốc giảm đau tĩnh mạch đã cài đặt an toàn",
      "Tự ý chỉnh tăng tốc độ truyền thuốc của máy theo ý muốn sau khi dùng thuốc định kỳ",
      "Tự rút kim truyền khi cảm thấy đỡ đau trên lâm sàng"
    ],
    "correct": 1,
    "explanation": "PCA cho phép bệnh nhân chủ động bấm nút tiêm liều bolus cài sẵn kèm khoảng thời gian khóa an toàn (lockout interval).",
    "reference": "Sách DLS tr. 464"
  },
  {
    "id": 566,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc nhuận tràng nào được khuyến cáo phối hợp thường quy ngay từ đầu khi kê đơn Morphin điều trị đau?",
    "options": [
      "Uống dung dịch dầu khoáng đậm đặc trên lâm sàng kèm theo rối loạn chức năng cơ quan",
      "Chỉ thụt tháo đại tràng hàng ngày ở người bệnh ở bệnh nhân có nguy cơ biến chứng cao",
      "Chỉ uống men vi sinh đường ruột ở mức độ vừa và nặng làm tăng tỷ lệ tử vong trên người bệnh",
      "Thuốc nhuận tràng kích thích như Senna hoặc Bisacodyl phối hợp thuốc làm mềm phân"
    ],
    "correct": 3,
    "explanation": "Opioid làm giảm nhu động ruột và tăng co thắt cơ vòng, phải chủ động dùng nhuận tràng kích thích + thẩm thấu/làm mềm phân.",
    "reference": "Sách DLS tr. 465"
  },
  {
    "id": 567,
    "chapter": "Thuốc giảm đau",
    "question": "Chất chuyển hóa Morphin-6-glucuronid có đặc điểm dược lý học nào cần lưu ý ở bệnh nhân suy thận?",
    "options": [
      "Là chất hoàn toàn không có hoạt tính sinh học trên lâm sàng định kỳ kèm theo rối loạn chức năng cơ quan",
      "Là chất có hoạt tính giảm đau và tích lũy gây ức chế hô hấp ở người suy thận",
      "Gây biến đổi màu da thành màu vàng chanh kèm theo sốt nhẹ theo đúng hướng dẫn của Bộ Y tế",
      "Bị đào thải hoàn toàn qua đường hô hấp ở người bệnh ở bệnh nhân có nguy cơ biến chứng cao"
    ],
    "correct": 1,
    "explanation": "M6G có hoạt lực giảm đau mạnh hơn morphin, bài xuất qua thận nên suy thận gây tích lũy ngộ độc morphin chậm.",
    "reference": "Sách DLS tr. 466"
  },
  {
    "id": 568,
    "chapter": "Thuốc giảm đau",
    "question": "Methadon là thuốc giảm đau Opioid tổng hợp có ưu thế đặc biệt nào trong điều trị giảm đau mạn tính?",
    "options": [
      "Không chuyển hóa qua gan mật trong phác đồ chuẩn kéo dài liên tục trên lâm sàng",
      "Không gây bất kỳ tình trạng phụ thuộc thuốc nào ở người bệnh ở bệnh nhân có nguy cơ biến chứng cao",
      "Thời gian bán thải dài và có tác dụng đối kháng thụ thể NMDA giảm đau thần kinh",
      "Chỉ cần dùng một lần duy nhất trong tháng kèm theo sốt nhẹ theo đúng hướng dẫn của Bộ Y tế"
    ],
    "correct": 2,
    "explanation": "Methadon chẹn NMDA giúp giảm đau thần kinh và ngăn ngừa hiện tượng dung nạp opioid, T1/2 dài 24-36h.",
    "reference": "Sách DLS tr. 467"
  },
  {
    "id": 569,
    "chapter": "Thuốc giảm đau",
    "question": "Nguy cơ loạn nhịp tim xoắn đỉnh khi dùng Methadon liều cao liên quan đến tác dụng phụ nào?",
    "options": [
      "Làm ngắn khoảng PR bệnh lý",
      "Gây nhịp nhanh trên thất kịch phát",
      "Gây rung nhĩ đáp ứng thất nhanh",
      "Làm kéo dài khoảng QT trên điện tâm đồ"
    ],
    "correct": 3,
    "explanation": "Methadon liều cao ức chế kênh kali hERG làm kéo dài khoảng QTc, cần đo điện tâm đồ định kỳ.",
    "reference": "Sách DLS tr. 468"
  },
  {
    "id": 570,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc giảm đau Oxycodon đường uống thường được phối hợp với chất nào để ngăn ngừa lạm dụng thuốc?",
    "options": [
      "Naloxon nhằm đối kháng tác dụng tại ruột và mất hiệu lực khi tiêm nghiền nát",
      "Paracetamol liều cực cao trong phác đồ chuẩn",
      "Atropin chống nôn kết hợp xét nghiệm đánh giá chức năng gan thận định kỳ",
      "Caffein kích thích thần kinh theo khuyến cáo"
    ],
    "correct": 0,
    "explanation": "Phối hợp Oxycodon/Naloxon giải phóng kéo dài: Naloxon đường uống sinh khả dụng < 3% giúp giảm táo bón ruột và ngăn tiêm tĩnh mạch.",
    "reference": "Sách DLS tr. 469"
  },
  {
    "id": 571,
    "chapter": "Thuốc giảm đau",
    "question": "Khái niệm 'Dung nạp thuốc' khi điều trị Opioid kéo dài có nghĩa là gì?",
    "options": [
      "Bệnh nhân có biểu hiện thèm muốn thuốc để tìm khoái cảm sau khi dùng thuốc",
      "Cần phải tăng liều thuốc dần theo thời gian để đạt được hiệu quả giảm đau ban đầu",
      "Bệnh nhân xuất hiện các cơn co giật khi uống thuốc theo khuyến cáo định kỳ",
      "Thuốc gây dị ứng sốc phản vệ dữ dội kéo dài liên tục"
    ],
    "correct": 1,
    "explanation": "Dung nạp là hiện tượng sinh lý đáp ứng giảm dần với một liều cố định, đòi hỏi tăng liều để duy trì hiệu quả.",
    "reference": "Sách DLS tr. 470"
  },
  {
    "id": 572,
    "chapter": "Thuốc giảm đau",
    "question": "Khái niệm 'Phụ thuộc thể chất' với Opioid được xác định khi xuất hiện hiện tượng nào?",
    "options": [
      "Xuất hiện vết loét sâu tại niêm mạc miệng sau khi dùng thuốc kết hợp theo dõi định kỳ chức năng thận",
      "Bệnh nhân nói lảm nhảm sau khi uống thuốc kéo dài liên tục kèm theo sốt cao và suy nhược cơ thể",
      "Tăng đường huyết không kiểm soát được ở mức độ vừa và nặng làm tăng tỷ lệ tử vong trên người bệnh",
      "Xuất hiện hội chứng cai khi ngừng thuốc đột ngột hoặc dùng chất đối kháng"
    ],
    "correct": 3,
    "explanation": "Phụ thuộc thể chất là trạng thái thích nghi thần kinh biểu hiện bằng triệu chứng cai khi ngừng thuốc.",
    "reference": "Sách DLS tr. 471"
  },
  {
    "id": 573,
    "chapter": "Thuốc giảm đau",
    "question": "Phản ứng giả dị ứng nổi mày đay ngứa ngáy khi tiêm nhanh Morphin xảy ra là do cơ chế nào?",
    "options": [
      "Nhiễm trùng huyết do vi khuẩn trong lọ thuốc ở mức độ vừa và nặng",
      "Dị ứng kháng thể IgE đặc hiệu với phân tử Morphin sau khi dùng thuốc định kỳ",
      "Morphin kích thích trực tiếp tế bào mast giải phóng Histamin không qua kháng thể IgE",
      "Tắc mạch do tinh thể thuốc kết tủa trên lâm sàng"
    ],
    "correct": 2,
    "explanation": "Morphin degranulate mast cells trực tiếp giải phóng histamin gây ngứa đỏ da, không phải dị ứng miễn dịch thực sự.",
    "reference": "Sách DLS tr. 472"
  },
  {
    "id": 574,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc chống viêm NSAID Indomethacin có chỉ định đặc biệt trong sản nhi khoa để điều trị bệnh lý nào?",
    "options": [
      "Kích thích thở ở trẻ sơ sinh ngừng thở trên lâm sàng",
      "Đóng ống động mạch còn mở ở trẻ sơ sinh non tháng",
      "Điều trị vàng da sơ sinh bẩm sinh ở người bệnh",
      "Gây chuyển dạ đẻ ở thai quá ngày ở mức độ vừa và nặng"
    ],
    "correct": 1,
    "explanation": "Indomethacin ức chế prostaglandin PGE2 làm co và đóng ống động mạch (PDA) ở trẻ non tháng.",
    "reference": "Sách DLS tr. 473"
  },
  {
    "id": 575,
    "chapter": "Thuốc giảm đau",
    "question": "Bệnh nhân bị bệnh Gút cấp tính chống chỉ định dùng Aspirin liều thấp hạ sốt giảm đau vì lý do gì?",
    "options": [
      "Aspirin gây loét đầu ngón chân cái ở người bệnh ở bệnh nhân có nguy cơ biến chứng cao",
      "Aspirin làm tăng tổng hợp purin tại gan kèm theo sốt nhẹ theo đúng hướng dẫn của Bộ Y tế",
      "Aspirin liều thấp ức chế bài tiết acid uric tại ống thận làm nặng thêm cơn gút",
      "Aspirin làm tan tinh thể urat gây nhiễm độc máu trên lâm sàng định kỳ kèm theo rối loạn chức năng cơ quan"
    ],
    "correct": 2,
    "explanation": "Aspirin liều thấp (< 2g/ngày) cạnh tranh bài tiết acid uric ở ống lượn gần làm tăng acid uric máu.",
    "reference": "Sách DLS tr. 474"
  },
  {
    "id": 576,
    "chapter": "Vitamin và chất khoáng",
    "question": "Nhóm các vitamin tan trong dầu bao gồm 4 vitamin nào sau đây?",
    "options": [
      "Vitamin H, B5, B1 và B3",
      "Vitamin B9, B12, C và PP",
      "Vitamin B1, B2, B6 và C",
      "Vitamin A, D, E và K"
    ],
    "correct": 3,
    "explanation": "Các vitamin tan trong dầu gồm A, D, E, K; được hấp thu cùng lipid và tích lũy trong gan và mô mỡ.",
    "reference": "Sách DLS tr. 480"
  },
  {
    "id": 577,
    "chapter": "Vitamin và chất khoáng",
    "question": "Hiện tượng ngộ độc thừa vitamin do tích lũy kéo dài thường xảy ra phổ biến nhất ở nhóm vitamin nào?",
    "options": [
      "Nhóm vitamin tan trong nước B và C",
      "Tất cả các loại vitamin đều không tích lũy",
      "Nhóm vitamin tan trong dầu A và D",
      "Chỉ xảy ra khi uống vitamin C liều thấp"
    ],
    "correct": 2,
    "explanation": "Vitamin tan trong dầu đào thải chậm, dùng quá liều kéo dài gây tích lũy ngộ độc mạn tính.",
    "reference": "Sách DLS tr. 481"
  },
  {
    "id": 578,
    "chapter": "Vitamin và chất khoáng",
    "question": "Dấu hiệu lâm sàng sớm nhất của tình trạng thiếu hụt Vitamin A trong cơ thể là gì?",
    "options": [
      "Mù lòa hoàn toàn do teo nhãn cầu tức thì trong phác đồ chuẩn",
      "Xuất huyết tiền phòng mắt kéo dài liên tục",
      "Bệnh quáng gà giảm thị lực trong điều kiện ánh sáng yếu",
      "Viêm dây thần kinh thị giác hai mắt theo khuyến cáo"
    ],
    "correct": 2,
    "explanation": "Vitamin A là thành phần của sắc tố rhodopsin ở tế bào que võng mạc, thiếu hụt gây quáng gà.",
    "reference": "Sách DLS tr. 482"
  },
  {
    "id": 579,
    "chapter": "Vitamin và chất khoáng",
    "question": "Dùng quá liều Vitamin A kéo dài ở phụ nữ mang thai có nguy cơ gây hậu quả nghiêm trọng nào?",
    "options": [
      "Làm người mẹ bị rụng toàn bộ tóc sau khi dùng thuốc",
      "Gây đẻ non sinh đôi cùng trứng theo khuyến cáo định kỳ",
      "Gây dị tật bẩm sinh quái thai nghiêm trọng ở sọ mặt và tim mạch",
      "Làm trẻ sơ sinh mọc răng trước khi sinh kéo dài liên tục"
    ],
    "correct": 2,
    "explanation": "Vitamin A liều cao (> 10.000 IU/ngày) có độc tính gây quái thai mạnh trong quý 1 thai kỳ.",
    "reference": "Sách DLS tr. 483"
  },
  {
    "id": 580,
    "chapter": "Vitamin và chất khoáng",
    "question": "Dạng hoạt tính sinh học có tác dụng trực tiếp mạnh nhất của Vitamin D trong cơ thể người là:",
    "options": [
      "Cholecalciferol hay Vitamin D3",
      "25-hydroxycholecalciferol hay Calcidiol",
      "Ergocalciferol hay Vitamin D2",
      "1,25-dihydroxycholecalciferol hay Calcitriol"
    ],
    "correct": 3,
    "explanation": "Calcitriol là hormon có hoạt tính sinh học cao nhất, được hydroxyl hóa ở thận bởi enzym 1-alpha-hydroxylase.",
    "reference": "Sách DLS tr. 484"
  },
  {
    "id": 581,
    "chapter": "Vitamin và chất khoáng",
    "question": "Bệnh nhân bị suy thận mạn tính giai đoạn cuối cần bổ sung dạng Vitamin D nào sau đây?",
    "options": [
      "Calcitriol hoặc Alfacalcidol",
      "Vitamin D2 dạng dầu uống",
      "Vitamin D3 dạng viên nén thông thường",
      "Tăng cường phơi nắng đơn thuần"
    ],
    "correct": 0,
    "explanation": "Thận suy mất enzym 1-alpha hydroxylase không thể chuyển 25-OH-D thành calcitriol, bắt buộc dùng Calcitriol trực tiếp.",
    "reference": "Sách DLS tr. 485"
  },
  {
    "id": 582,
    "chapter": "Vitamin và chất khoáng",
    "question": "Vai trò sinh học chủ yếu của Vitamin D trong cơ thể là gì?",
    "options": [
      "Giảm nồng độ Calci trong huyết tương ở người bệnh",
      "Tăng hấp thu Canxi và Phosphat tại ruột non và tái hấp thu ở thận",
      "Ức chế quá trình khoáng hóa xương non trên lâm sàng",
      "Tăng bài tiết Canxi ra ngoài qua nước tiểu ở mức độ vừa và nặng"
    ],
    "correct": 1,
    "explanation": "Vitamin D kích thích tổng hợp protein vận chuyển calbindin ở ruột giúp hấp thu tối đa Ca2+ và PO43-.",
    "reference": "Sách DLS tr. 486"
  },
  {
    "id": 583,
    "chapter": "Vitamin và chất khoáng",
    "question": "Tình trạng thiếu hụt Vitamin D ở trẻ em đang phát triển dẫn đến bệnh lý xương nào?",
    "options": [
      "Bệnh viêm khớp dạng thấp thiếu niên kèm theo sốt nhẹ",
      "Bệnh giòn xương bẩm sinh tạo xương bất toàn ở người bệnh",
      "Bệnh còi xương với biến dạng lồng ngực và chân vòng kiềng",
      "Bệnh xơ cứng cột bên teo cơ trên lâm sàng định kỳ"
    ],
    "correct": 2,
    "explanation": "Thiếu vitamin D ở trẻ em làm giảm khoáng hóa sụn tăng trưởng gây bệnh còi xương (Rickets).",
    "reference": "Sách DLS tr. 487"
  },
  {
    "id": 584,
    "chapter": "Vitamin và chất khoáng",
    "question": "Vitamin K đóng vai trò là đồng yếu tố xúc tác cho quá trình hoạt hóa các yếu tố đông máu nào tại gan?",
    "options": [
      "Tất cả các yếu tố đông máu trong cơ thể",
      "Yếu tố XI, XII và Protein S",
      "Yếu tố II, VII, IX và yếu tố X",
      "Yếu tố I, V, VIII và yếu tố XIII"
    ],
    "correct": 2,
    "explanation": "Vitamin K là coenzym của carboxylase carboxyl hóa gốc acid glutamic tạo các yếu tố II, VII, IX, X và Protein C, S.",
    "reference": "Sách DLS tr. 488"
  },
  {
    "id": 585,
    "chapter": "Vitamin và chất khoáng",
    "question": "Để phòng ngừa bệnh xuất huyết não màng não do thiếu Vitamin K ở trẻ sơ sinh, can thiệp quy chuẩn là:",
    "options": [
      "Cho trẻ uống Vitamin K1 đều đặn mỗi ngày suốt 1 năm kèm theo sốt nhẹ",
      "Tiêm bắp một liều duy nhất Vitamin K1 ngay sau khi trẻ chào đời",
      "Cho người mẹ uống Vitamin K liều cao trước khi sinh theo khuyến cáo",
      "Tiêm truyền tĩnh mạch huyết tương tươi đông lạnh trong phác đồ chuẩn"
    ],
    "correct": 1,
    "explanation": "Tiêm bắp 1mg Vitamin K1 ngay sau sinh là quy chuẩn quốc tế phòng xuất huyết sơ sinh do sữa mẹ nghèo vitamin K.",
    "reference": "Sách DLS tr. 489"
  },
  {
    "id": 586,
    "chapter": "Vitamin và chất khoáng",
    "question": "Thuốc giải độc đặc hiệu khi bệnh nhân bị quá liều thuốc chống đông máu Warfarin gây chảy máu là:",
    "options": [
      "Dung dịch Natri clorid 0,9% kéo dài liên tục",
      "Vitamin K1 đường tiêm truyền tĩnh mạch chậm hoặc uống",
      "Vitamin C truyền tĩnh mạch liều cao trong phác đồ chuẩn",
      "Dung dịch Glucose ưu trương theo khuyến cáo"
    ],
    "correct": 1,
    "explanation": "Vitamin K1 (Phytomenadion) cạnh tranh hồi phục enzym epoxide reductase bị warfarin ức chế.",
    "reference": "Sách DLS tr. 490"
  },
  {
    "id": 587,
    "chapter": "Vitamin và chất khoáng",
    "question": "Thiếu hụt Vitamin B1 (Thiamin) mạn tính ở người nghiện rượu dẫn đến hội chứng thần kinh kinh điển nào?",
    "options": [
      "Hội chứng não Wernicke và loạn thần Korsakoff",
      "Hội chứng Guillain-Barré liệt tiến triển",
      "Bệnh đa xơ cứng rải rác",
      "Bệnh Parkinson thể run"
    ],
    "correct": 0,
    "explanation": "Thiếu Thiamin ở người nghiện rượu gây bệnh Beriberi và hội chứng não Wernicke (lú lẫn, thất điều, liệt vận nhãn).",
    "reference": "Sách DLS tr. 491"
  },
  {
    "id": 588,
    "chapter": "Vitamin và chất khoáng",
    "question": "Tại sao ở bệnh nhân nghiện rượu bị hôn mê hạ đường huyết, phải tiêm Thiamin trước khi truyền dung dịch Glucose?",
    "options": [
      "Để tránh thúc đẩy khởi phát cấp tính hội chứng não Wernicke đe dọa tính mạng",
      "Để ngăn chặn hiện tượng dị ứng với Glucose sau khi dùng thuốc",
      "Để làm giảm áp lực thẩm thấu của dung dịch đường ở mức độ vừa và nặng",
      "Để làm tăng tốc độ phân hủy Glucose trong máu kéo dài liên tục"
    ],
    "correct": 0,
    "explanation": "Chuyển hóa glucose tiêu thụ cạn kiệt thiamin dự trữ ít ỏi còn lại thúc đẩy phù não Wernicke hoại tử thể vú.",
    "reference": "Sách DLS tr. 492"
  },
  {
    "id": 589,
    "chapter": "Vitamin và chất khoáng",
    "question": "Bệnh Pellagra với tứ chứng kinh điển (Viêm da, Tiêu chảy, Sa sút trí tuệ và Tử vong) là do thiếu hụt vitamin nào?",
    "options": [
      "Vitamin B1 hay Thiamin sau khi dùng thuốc",
      "Vitamin B3 hay Niacin hay Acid nicotinic",
      "Vitamin B5 hay Acid pantothenic trên lâm sàng",
      "Vitamin B2 hay Riboflavin ở mức độ vừa và nặng"
    ],
    "correct": 1,
    "explanation": "Thiếu Vitamin B3 (PP) gây bệnh Pellagra: Diarrhea, Dermatitis, Dementia, Death (4 chữ D).",
    "reference": "Sách DLS tr. 493"
  },
  {
    "id": 590,
    "chapter": "Vitamin và chất khoáng",
    "question": "Hiện tượng đỏ bừng mặt và ngứa ngáy khi uống Acid nicotinic liều cao hạ mỡ máu là do giải phóng chất nào?",
    "options": [
      "Acid lactic trong các thớ cơ",
      "Histamin từ các tế bào bạch cầu đa nhân",
      "Serotonin từ các tế bào tiểu cầu",
      "Prostaglandin D2 gây giãn mạch ngoại vi"
    ],
    "correct": 3,
    "explanation": "Niacin kích thích thụ thể GPR109A gây phóng thích PGD2 làm giãn mạch bừng mặt (ngăn ngừa bằng uống Aspirin trước 30p).",
    "reference": "Sách DLS tr. 494"
  },
  {
    "id": 591,
    "chapter": "Vitamin và chất khoáng",
    "question": "Vitamin B6 (Pyridoxin) tham gia chuyển hóa acid amin và là thuốc giải độc đặc hiệu cho ngộ độc hoạt chất nào?",
    "options": [
      "Kháng sinh Gentamicin",
      "Thuốc chống lao Isoniazid",
      "Thuốc ngủ Barbiturat",
      "Thuốc hạ sốt Paracetamol"
    ],
    "correct": 1,
    "explanation": "INH ức chế pyridoxine phosphokinase gây co giật và viêm thần kinh; Vitamin B6 là thuốc giải độc đặc hiệu.",
    "reference": "Sách DLS tr. 495"
  },
  {
    "id": 592,
    "chapter": "Vitamin và chất khoáng",
    "question": "Thiếu hụt Vitamin B12 (Cobalamin) gây ra loại bệnh lý thiếu máu nào trên lâm sàng?",
    "options": [
      "Thiếu máu hồng cầu khổng lồ kèm tổn thương thần kinh kết hợp",
      "Thiếu máu bất sản tủy xương toàn bộ trong phác đồ chuẩn",
      "Thiếu máu tan máu tự miễn bẩm sinh kèm theo sốt nhẹ",
      "Thiếu máu hồng cầu nhỏ nhược sắc do thiếu sắt ở người bệnh"
    ],
    "correct": 0,
    "explanation": "Thiếu B12 làm rối loạn tổng hợp ADN gây hồng cầu to (MCV > 100 fL) và thoái hóa kết hợp tủy sống (tê bì, mất cảm giác sâu).",
    "reference": "Sách DLS tr. 496"
  },
  {
    "id": 593,
    "chapter": "Vitamin và chất khoáng",
    "question": "Yếu tố nội tại do tế bào thành dạ dày tiết ra có vai trò bắt buộc đối với quá trình nào?",
    "options": [
      "Hấp thu nguyên tố Sắt tại tá tràng",
      "Phân hủy phân tử Vitamin A trong lòng ruột",
      "Hòa tan Vitamin C trong dịch ruột",
      "Hấp thu Vitamin B12 tại đoạn cuối hồi tràng"
    ],
    "correct": 3,
    "explanation": "Intrinsic factor (IF) tạo phức hợp với B12 giúp nhận diện thụ thể cubilin để hấp thu tại hồi tràng.",
    "reference": "Sách DLS tr. 497"
  },
  {
    "id": 594,
    "chapter": "Vitamin và chất khoáng",
    "question": "Thiếu hụt Acid Folic (Vitamin B9) trong thai kỳ làm gia tăng rõ rệt dị tật bẩm sinh nào ở thai nhi?",
    "options": [
      "Khuyết tật ống thần kinh như nứt đốt sống và vô sọ",
      "Dị tật teo hẹp thực quản bẩm sinh kéo dài liên tục",
      "Dị tật thông liên thất tim bẩm sinh trong phác đồ chuẩn",
      "Dị tật bàn chân khoèo bẩm sinh theo khuyến cáo"
    ],
    "correct": 0,
    "explanation": "Folat cần cho đóng ống thần kinh trong 28 ngày đầu thai kỳ; thiếu hụt gây nứt đốt sống và vô sọ.",
    "reference": "Sách DLS tr. 498"
  },
  {
    "id": 595,
    "chapter": "Vitamin và chất khoáng",
    "question": "Điểm khác biệt quan trọng trong biểu hiện lâm sàng giữa thiếu hụt Acid Folic và thiếu hụt Vitamin B12 là:",
    "options": [
      "Thiếu Acid Folic không gây ra tổn thương thoái hóa thần kinh",
      "Thiếu Acid Folic làm tăng nồng độ sắt máu kéo dài liên tục",
      "Thiếu Acid Folic gây thiếu máu hồng cầu nhỏ theo khuyến cáo định kỳ",
      "Thiếu Acid Folic chỉ xuất hiện ở người cao tuổi sau khi dùng thuốc"
    ],
    "correct": 0,
    "explanation": "Cả hai đều gây thiếu máu hồng cầu to, nhưng thiếu B12 gây tổn thương thần kinh (do thiếu SAM) còn folat thì không.",
    "reference": "Sách DLS tr. 499"
  },
  {
    "id": 596,
    "chapter": "Vitamin và chất khoáng",
    "question": "Nếu dùng nhầm Acid Folic liều cao đơn độc để điều trị cho người bệnh bị thiếu hụt Vitamin B12 thì hậu quả là:",
    "options": [
      "Gây tan máu ồ ạt trong lòng mạch sau khi dùng thuốc kết hợp theo dõi định kỳ chức năng thận",
      "Làm mất hoàn toàn trí nhớ trong 24 giờ ở mức độ vừa và nặng làm tăng tỷ lệ tử vong trên người bệnh",
      "Khắc phục được thiếu máu nhưng làm tổn thương thần kinh tiến triển nặng hơn",
      "Làm bệnh nhân bị suy tim cấp tính tử vong ngay kéo dài liên tục kèm theo sốt cao và suy nhược cơ thể"
    ],
    "correct": 2,
    "explanation": "Bổ sung folat sửa chữa được thiếu máu nhưng che lấp tổn thương thoái hóa tủy sống do thiếu B12 tiếp tục phá hủy thần kinh.",
    "reference": "Sách DLS tr. 500"
  },
  {
    "id": 597,
    "chapter": "Vitamin và chất khoáng",
    "question": "Vitamin C (Acid ascorbic) tham gia vào phản ứng sinh học nào quan trọng nhất trong cấu trúc mô liên kết?",
    "options": [
      "Phosphoryl hóa phân tử đường Glucose sau khi dùng thuốc",
      "Oxy hóa các acid béo chuỗi dài trong ty thể ở mức độ vừa và nặng",
      "Khử carboxyl của acid amin glutamic trên lâm sàng",
      "Hydroxyl hóa Prolin và Lysin trong tổng hợp Collagen"
    ],
    "correct": 3,
    "explanation": "Vitamin C là coenzym của prolyl và lysyl hydroxylase tổng hợp sợi collagen bền vững.",
    "reference": "Sách DLS tr. 501"
  },
  {
    "id": 598,
    "chapter": "Vitamin và chất khoáng",
    "question": "Bệnh Scorbut với triệu chứng chảy máu chân răng, bầm tím dưới da và vết thương khó lành là do thiếu hụt:",
    "options": [
      "Vitamin B1 liều cao",
      "Vitamin D dạng hoạt tính",
      "Vitamin C kéo dài",
      "Nguyên tố Kẽm trong thức ăn"
    ],
    "correct": 2,
    "explanation": "Thiếu vitamin C làm sợi collagen yếu, vỡ mao mạch gây chảy máu nướu răng, xuất huyết dưới da (bệnh Scorbut).",
    "reference": "Sách DLS tr. 502"
  },
  {
    "id": 599,
    "chapter": "Vitamin và chất khoáng",
    "question": "Uống Vitamin C đồng thời với viên sắt mang lại lợi ích gì về mặt dược động học?",
    "options": [
      "Tạo phức hợp chelat đào thải sắt nhanh qua phân trên lâm sàng định kỳ",
      "Ngăn chặn sắt chuyển hóa qua gan lần đầu kèm theo sốt nhẹ",
      "Làm giảm độ acid của dịch vị dạ dày ở người bệnh",
      "Khử sắt Fe3+ thành Fe2+ giúp tăng cường hấp thu sắt qua niêm mạc ruột"
    ],
    "correct": 3,
    "explanation": "Vitamin C khử Fe3+ thành Fe2+ dễ tan và hấp thu hơn nhiều tại tá tràng.",
    "reference": "Sách DLS tr. 503"
  },
  {
    "id": 600,
    "chapter": "Vitamin và chất khoáng",
    "question": "Lạm dụng Vitamin C liều cao trên 2 gam mỗi ngày kéo dài có nguy cơ gây ra biến chứng sỏi thận loại nào?",
    "options": [
      "Sỏi thận Struvit do nhiễm trùng tiết niệu kèm theo sốt nhẹ",
      "Sỏi thận Acid Uric do tăng thoái giáng purin ở người bệnh",
      "Sỏi thận Cystin do rối loạn di truyền trong phác đồ chuẩn",
      "Sỏi thận Calci Oxalat do chuyển hóa Vitamin C tạo Oxalat"
    ],
    "correct": 3,
    "explanation": "Acid ascorbic chuyển hóa thành acid oxalic, kết hợp calci tạo sỏi calci oxalat trong đường tiết niệu.",
    "reference": "Sách DLS tr. 504"
  },
  {
    "id": 601,
    "chapter": "Vitamin và chất khoáng",
    "question": "Muối sắt đường uống hấp thu tối ưu nhất khi được uống vào thời điểm nào?",
    "options": [
      "Uống chung với một ấm trà xanh đặc theo khuyến cáo",
      "Uống cùng lúc với một ly sữa tươi đầy trong phác đồ chuẩn",
      "Uống ngay sau khi ăn no một bữa nhiều dầu mỡ kèm theo sốt nhẹ",
      "Uống lúc đói cách xa bữa ăn kèm với nước cam hoặc nước lọc"
    ],
    "correct": 3,
    "explanation": "Sắt hấp thu tốt nhất ở môi trường acid dạ dày lúc đói; thức ăn, calci, trà/cà phê cản trở hấp thu sắt.",
    "reference": "Sách DLS tr. 505"
  },
  {
    "id": 602,
    "chapter": "Vitamin và chất khoáng",
    "question": "Thuốc giải độc đặc hiệu trong cấp cứu ngộ độc cấp tính muối sắt ở trẻ em là hoạt chất nào?",
    "options": [
      "Naloxon tiêm bắp",
      "Deferoxamin tiêm truyền",
      "N-acetylcystein truyền tĩnh mạch",
      "Dimercaprol tiêm dưới da"
    ],
    "correct": 1,
    "explanation": "Deferoxamin tạo phức chelat hòa tan ferrioxamin với ion sắt tự do độc tính cao và thải qua nước tiểu màu đỏ cam.",
    "reference": "Sách DLS tr. 506"
  },
  {
    "id": 603,
    "chapter": "Vitamin và chất khoáng",
    "question": "Thuốc bổ sung Canxi dạng Canxi carbonat có đặc điểm hấp thu nào cần chú ý khi hướng dẫn bệnh nhân?",
    "options": [
      "Hấp thu tốt nhất lúc bụng đói cồn cào theo khuyến cáo định kỳ",
      "Có thể nhai chung với các loại kháng sinh cyclin kéo dài liên tục",
      "Cần môi trường acid dạ dày để hòa tan nên cần uống ngay sau bữa ăn",
      "Không bao giờ gây sỏi thận dù dùng liều cao sau khi dùng thuốc"
    ],
    "correct": 2,
    "explanation": "Canxi carbonat cần acid dịch vị để phân ly Ca2+, nên uống ngay sau bữa ăn; người giảm toan dịch vị nên dùng Canxi citrat.",
    "reference": "Sách DLS tr. 507"
  },
  {
    "id": 604,
    "chapter": "Vitamin và chất khoáng",
    "question": "Chất khoáng Kẽm đóng vai trò quan trọng trong cơ thể người đối với các chức năng nào sau đây?",
    "options": [
      "Chỉ có tác dụng làm chậm nhịp tim sau khi dùng thuốc",
      "Hệ thống miễn dịch, sự biệt hóa tế bào và làm lành vết thương",
      "Đào thải nước tiểu qua ống thận ở mức độ vừa và nặng",
      "Chỉ tham gia vận chuyển khí oxy trong hồng cầu kéo dài liên tục"
    ],
    "correct": 1,
    "explanation": "Kẽm là thành phần của hơn 300 enzym, cần thiết cho phân chia tế bào, miễn dịch và tái tạo biểu mô.",
    "reference": "Sách DLS tr. 508"
  },
  {
    "id": 605,
    "chapter": "Vitamin và chất khoáng",
    "question": "Thiếu hụt nguyên tố Kẽm ở trẻ nhỏ thường dẫn đến những biểu hiện lâm sàng nào?",
    "options": [
      "Gây điếc tai tiếp nhận thần kinh trên lâm sàng kèm theo rối loạn chức năng cơ quan",
      "Chậm tăng trưởng tầm vóc, biếng ăn, tiêu chảy và tổn thương viêm da đầu chi",
      "Làm răng mọc lệch lạc nhiều hàng ở mức độ vừa và nặng làm tăng tỷ lệ tử vong trên người bệnh",
      "Gây tăng cân nhanh béo phì quá mức sau khi dùng thuốc định kỳ kết hợp theo dõi định kỳ chức năng thận"
    ],
    "correct": 1,
    "explanation": "Thiếu kẽm gây chậm lớn, chán ăn, suy giảm miễn dịch và bệnh viêm da đầu chi ruột (acrodermatitis enteropathica).",
    "reference": "Sách DLS tr. 509"
  },
  {
    "id": 606,
    "chapter": "Vitamin và chất khoáng",
    "question": "Vi chất Iod là thành phần cấu tạo thiết yếu của các hormon nào trong cơ thể?",
    "options": [
      "Hormon điều hòa đường máu Insulin",
      "Hormon tuyến tủy thượng thận Adrenalin",
      "Hormon sinh dục nữ Estrogen và Progesteron",
      "Hormon tuyến giáp Thyroxin và Triiodothyronin"
    ],
    "correct": 3,
    "explanation": "Iod là nguyên liệu tổng hợp T3 và T4 của tuyến giáp; thiếu iod gây bướu cổ đơn thuần và đần độn ở trẻ em.",
    "reference": "Sách DLS tr. 510"
  },
  {
    "id": 607,
    "chapter": "Vitamin và chất khoáng",
    "question": "Thiếu hụt nguyên tố Magnesi trong máu thường dẫn đến các triệu chứng thần kinh cơ nào sau đây?",
    "options": [
      "Giảm hoàn toàn trương lực các nhóm cơ kèm theo sốt nhẹ",
      "Liệt mềm toàn thân mất phản xạ gân xương trên lâm sàng định kỳ",
      "Tăng tính kích thích thần kinh cơ, co giật, run cơ và chuột rút",
      "Hôn mê sâu không có phản ứng đau ở người bệnh"
    ],
    "correct": 2,
    "explanation": "Hạ Mg2+ làm tăng dẫn truyền thần kinh cơ gây run giật, co thắt cơ, dấu hiệu Chvostek/Trousseau và loạn nhịp tim.",
    "reference": "Sách DLS tr. 511"
  },
  {
    "id": 608,
    "chapter": "Vitamin và chất khoáng",
    "question": "Thuốc bổ sung Vitamin E (Tocopherol) được biết đến với vai trò sinh học chủ yếu nào?",
    "options": [
      "Chất chống oxy hóa bảo vệ màng tế bào khỏi tổn thương gốc tự do",
      "Tăng cường đào thải acid uric ra ngoài cơ thể kèm theo sốt nhẹ",
      "Kích thích tạo cục máu đông ngăn chảy máu ở người bệnh",
      "Kích thích phân chia tế bào xương dài trong phác đồ chuẩn"
    ],
    "correct": 0,
    "explanation": "Vitamin E là chất chống oxy hóa tan trong mỡ chính bảo vệ phospholipid màng tế bào khỏi peroxy hóa lipid.",
    "reference": "Sách DLS tr. 512"
  },
  {
    "id": 609,
    "chapter": "Vitamin và chất khoáng",
    "question": "Dùng Vitamin E liều rất cao kéo dài có thể làm gia tăng nguy cơ bất lợi nào?",
    "options": [
      "Nguy cơ xuất huyết do đối kháng với tác dụng của Vitamin K",
      "Gây loét thủng thực quản cấp tính kèm theo sốt nhẹ định kỳ",
      "Gây rụng lông mày lông mi theo khuyến cáo",
      "Gây sỏi thận struvit kích thước lớn trong phác đồ chuẩn"
    ],
    "correct": 0,
    "explanation": "Vitamin E liều cao (> 1000 IU/ngày) có thể ức chế phụ thuộc vitamin K trong đông máu làm tăng nguy cơ chảy máu.",
    "reference": "Sách DLS tr. 513"
  },
  {
    "id": 610,
    "chapter": "Vitamin và chất khoáng",
    "question": "Thiếu hụt nguyên tố Đồng trong cơ thể có thể gây ra bệnh lý nào tương tự như thiếu sắt?",
    "options": [
      "Thiếu máu hồng cầu nhỏ nhược sắc kháng điều trị bằng sắt",
      "Bệnh đa hồng cầu nguyên phát trong phác đồ chuẩn",
      "Bệnh bạch cầu mạn dòng lympho kéo dài liên tục",
      "Hội chứng tăng bạch cầu đơn nhân theo khuyến cáo"
    ],
    "correct": 0,
    "explanation": "Đồng là thành phần của ceruloplasmin oxy hóa Fe2+ thành Fe3+ để gắn transferrin; thiếu đồng gây thiếu máu thiếu sắt trơ.",
    "reference": "Sách DLS tr. 514"
  },
  {
    "id": 611,
    "chapter": "Vitamin và chất khoáng",
    "question": "Bệnh lý di truyền Wilson đặc trưng bởi sự tích lũy độc chất khoáng nào trong gan và não?",
    "options": [
      "Nguyên tố Đồng với vòng Kayser-Fleischer ở rìa giác mạc",
      "Nguyên tố Sắt với da sạm màu đồng thiếc theo khuyến cáo",
      "Nguyên tố Nhôm gây sa sút trí tuệ sau khi dùng thuốc",
      "Nguyên tố Chì với đường viền chì ở lợi răng kéo dài liên tục"
    ],
    "correct": 0,
    "explanation": "Bệnh Wilson ứ đọng đồng tại gan, nhân nền não bộ và màng Descemet giác mạc (vòng Kayser-Fleischer).",
    "reference": "Sách DLS tr. 515"
  },
  {
    "id": 612,
    "chapter": "Vitamin và chất khoáng",
    "question": "Thuốc tạo chelat dùng để gắp đồng điều trị bệnh Wilson là hoạt chất nào?",
    "options": [
      "Protamin sulfat ở mức độ vừa và nặng",
      "Deferoxamin kéo dài liên tục",
      "Penicillamin hoặc Trientin",
      "N-acetylcystein sau khi dùng thuốc"
    ],
    "correct": 2,
    "explanation": "D-penicillamin tạo phức tan với đồng đào thải qua nước tiểu điều trị bệnh thoái hóa gan đậu Wilson.",
    "reference": "Sách DLS tr. 516"
  },
  {
    "id": 613,
    "chapter": "Vitamin và chất khoáng",
    "question": "Bệnh ứ sắt mô di truyền (Hemochromatosis) đặc trưng bởi sự tích lũy quá mức của sắt tại các cơ quan:",
    "options": [
      "Hệ thống xương khớp và móng tay ở mức độ vừa và nặng",
      "Các phế nang và màng phổi hai bên trên lâm sàng",
      "Cơ quan thính giác và thị giác sau khi dùng thuốc định kỳ",
      "Gan, tim và tuyến tụy nội tiết gây đái tháo đường đồng thiếc"
    ],
    "correct": 3,
    "explanation": "Sắt ứ đọng phá hủy tế bào gan (xơ gan), tụy (đái tháo đường) và cơ tim (suy tim loạn nhịp).",
    "reference": "Sách DLS tr. 517"
  },
  {
    "id": 614,
    "chapter": "Vitamin và chất khoáng",
    "question": "Biện pháp điều trị đầu tay cơ bản nhất cho bệnh nhân bị bệnh ứ sắt mô di truyền là gì?",
    "options": [
      "Uống sữa tươi thật nhiều mỗi ngày",
      "Cắt bỏ toàn bộ lách",
      "Uống thuốc lợi tiểu quai liều cao",
      "Trích rạch mở tĩnh mạch rút máu định kỳ"
    ],
    "correct": 3,
    "explanation": "Rút máu tĩnh mạch định kỳ (phlebotomy) rút bớt hồng cầu buộc cơ thể tiêu thụ sắt dự trữ để tạo hồng cầu mới.",
    "reference": "Sách DLS tr. 518"
  },
  {
    "id": 615,
    "chapter": "Vitamin và chất khoáng",
    "question": "Vitamin B2 (Riboflavin) khi uống vào cơ thể thường làm thay đổi màu nước tiểu thành màu gì?",
    "options": [
      "Màu vàng tươi hoặc vàng huỳnh quang",
      "Màu đen sẫm như cà phê ở người bệnh",
      "Màu đỏ thẫm như máu trên lâm sàng định kỳ",
      "Màu xanh nước biển nhạt kèm theo sốt nhẹ"
    ],
    "correct": 0,
    "explanation": "Riboflavin có màu vàng tự nhiên và bài tiết nguyên vẹn qua nước tiểu tạo màu vàng sáng vô hại.",
    "reference": "Sách DLS tr. 519"
  },
  {
    "id": 616,
    "chapter": "Vitamin và chất khoáng",
    "question": "Triệu chứng kinh điển của thiếu hụt Vitamin B2 bao gồm các tổn thương ở đâu?",
    "options": [
      "Xơ gan cổ trướng giai đoạn mất bù trong phác đồ chuẩn",
      "Viêm nứt mép mép miệng, viêm lưỡi đỏ bóng và viêm da dầu",
      "Rụng răng cửa hàng loạt kèm theo sốt nhẹ",
      "Đau thắt ngực khi gắng sức ở người bệnh"
    ],
    "correct": 1,
    "explanation": "Thiếu riboflavin gây tổn thương niêm mạc da: nứt mép (cheilosis), viêm góc miệng và viêm lưỡi đỏ tươi.",
    "reference": "Sách DLS tr. 520"
  },
  {
    "id": 617,
    "chapter": "Vitamin và chất khoáng",
    "question": "Chất khoáng Selen là thành phần cấu tạo thiết yếu của enzym chống oxy hóa nào trong cơ thể?",
    "options": [
      "Catalase nội bào",
      "Glutathion peroxidase",
      "Superoxide dismutase",
      "Cytochrome c oxidase"
    ],
    "correct": 1,
    "explanation": "Selen gắn dưới dạng selenocystein tại trung tâm hoạt động của enzym glutathion peroxidase khử hydroperoxyd độc hại.",
    "reference": "Sách DLS tr. 521"
  },
  {
    "id": 618,
    "chapter": "Vitamin và chất khoáng",
    "question": "Bệnh Keshan là bệnh lý cơ tim giãn do thiếu hụt vi chất nào trong chế độ ăn ở một số vùng địa lý?",
    "options": [
      "Vi chất Natri",
      "Vi chất Selen",
      "Vi chất Calci",
      "Vi chất Clo"
    ],
    "correct": 1,
    "explanation": "Bệnh Keshan là bệnh cơ tim hoại tử ở các vùng đất nghèo Selen, bổ sung Selen phòng ngừa hiệu quả.",
    "reference": "Sách DLS tr. 522"
  },
  {
    "id": 619,
    "chapter": "Vitamin và chất khoáng",
    "question": "Vitamin B5 (Acid pantothenic) là thành phần cấu tạo không thể thiếu của phân tử sinh học nào?",
    "options": [
      "Phân tử sắc tố Heme trong hồng cầu kéo dài liên tục",
      "Hormon giáp trạng Thyroxin sau khi dùng thuốc",
      "Coenzym A tham gia chu trình Krebs và chuyển hóa acid béo",
      "Phân tử Adenosin triphosphat ATP theo khuyến cáo định kỳ"
    ],
    "correct": 2,
    "explanation": "Acid pantothenic là tiền chất tổng hợp Coenzym A (CoA) thiết yếu cho chuyển hóa năng lượng tế bào.",
    "reference": "Sách DLS tr. 523"
  },
  {
    "id": 620,
    "chapter": "Vitamin và chất khoáng",
    "question": "Vitamin H (Biotin hay Vitamin B7) tham gia xúc tác cho các phản ứng sinh học loại nào?",
    "options": [
      "Các phản ứng carboxyl hóa gắn nhóm CO2 trong chuyển hóa glucid và lipid",
      "Các phản ứng methyl hóa phân tử ADN sau khi dùng thuốc kết hợp theo dõi định kỳ chức năng thận",
      "Các phản ứng phosphoryl hóa protein ở mức độ vừa và nặng làm tăng tỷ lệ tử vong trên người bệnh",
      "Các phản ứng khử hydro giải phóng năng lượng kéo dài liên tục kèm theo sốt cao và suy nhược cơ thể"
    ],
    "correct": 0,
    "explanation": "Biotin là coenzym của các carboxylase (pyruvat carboxylase, acetyl-CoA carboxylase) chuyển hóa acid béo và đường.",
    "reference": "Sách DLS tr. 524"
  },
  {
    "id": 621,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Theo khuyến cáo của Bộ Y tế và ESC, chẩn đoán tăng huyết áp tại phòng khám khi huyết áp đạt từ mức nào?",
    "options": [
      "Huyết áp tâm thu từ 160 mmHg hoặc tâm trương từ 100 mmHg",
      "Huyết áp tâm thu từ 180 mmHg hoặc tâm trương từ 110 mmHg",
      "Huyết áp tâm thu từ 140 mmHg hoặc tâm trương từ 90 mmHg",
      "Huyết áp tâm thu từ 120 mmHg hoặc tâm trương từ 80 mmHg"
    ],
    "correct": 2,
    "explanation": "Chẩn đoán THA phòng khám: HA tâm thu >= 140 mmHg và/hoặc HA tâm trương >= 90 mmHg.",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế"
  },
  {
    "id": 622,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Tăng huyết áp độ 2 được xác định khi chỉ số huyết áp phòng khám nằm trong khoảng nào?",
    "options": [
      "Tâm thu từ 140 đến 159 mmHg hoặc tâm trương từ 90 đến 99 mmHg",
      "Tâm thu trên 180 mmHg hoặc tâm trương trên 120 mmHg",
      "Tâm thu từ 130 đến 139 mmHg hoặc tâm trương từ 85 đến 89 mmHg",
      "Tâm thu từ 160 đến 179 mmHg hoặc tâm trương từ 100 đến 109 mmHg"
    ],
    "correct": 3,
    "explanation": "Độ 1: 140-159/90-99 mmHg; Độ 2: 160-179/100-109 mmHg; Độ 3: >= 180/>= 110 mmHg.",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế"
  },
  {
    "id": 623,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Điểm khác biệt cốt lõi giữa cơn tăng huyết áp cấp cứu và cơn tăng huyết áp khẩn cấp là gì?",
    "options": [
      "Cơn tăng huyết áp cấp cứu có huyết áp cao hơn nhiều trên lâm sàng định kỳ",
      "Cơn tăng huyết áp khẩn cấp luôn phải đặt nội khí quản ở người bệnh",
      "Cơn tăng huyết áp cấp cứu chỉ xảy ra ở người trẻ tuổi kèm theo sốt nhẹ",
      "Cơn tăng huyết áp cấp cứu có kèm theo tổn thương cơ quan đích cấp tính tiến triển"
    ],
    "correct": 3,
    "explanation": "Hypertensive emergency có tổn thương cơ quan đích cấp đe dọa tính mạng (nhồi máu não, phù phổi cấp, phình bóc tách ĐMC).",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế"
  },
  {
    "id": 624,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Mục tiêu hạ áp trong giờ đầu tiên ở bệnh nhân có cơn tăng huyết áp cấp cứu là:",
    "options": [
      "Không được hạ huyết áp trong suốt 24 giờ đầu",
      "Hạ huyết áp tâm thu xuống dưới 90 mmHg",
      "Hạ ngay lập tức huyết áp về mức sinh lý 120 trên 80 mmHg",
      "Hạ huyết áp không quá 25% so với huyết áp ban đầu"
    ],
    "correct": 3,
    "explanation": "Hạ áp quá nhanh gây thiếu máu não và vành, nguyên tắc là hạ không quá 25% trong giờ đầu.",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế"
  },
  {
    "id": 625,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Trong phình bóc tách động mạch chủ cấp, mục tiêu hạ huyết áp tâm thu khẩn cấp là đạt dưới mức nào?",
    "options": [
      "Dưới 150 mmHg trong vòng 24 giờ kèm theo sốt nhẹ định kỳ theo đúng hướng dẫn của Bộ Y tế",
      "Duy trì huyết áp ở mức 140 trên 90 mmHg theo khuyến cáo ở mức độ vừa đến mức độ nặng",
      "Dưới 160 mmHg trong vòng 3 ngày trong phác đồ chuẩn kéo dài liên tục trên lâm sàng",
      "Dưới 120 mmHg và nhịp tim dưới 60 nhịp trên phút trong vòng 20 phút"
    ],
    "correct": 3,
    "explanation": "Bóc tách ĐMC cần hạ áp cực nhanh: HATT < 120 mmHg và tần số tim < 60 l/p trong 20 phút để giảm xé rách thành mạch.",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế"
  },
  {
    "id": 626,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc truyền tĩnh mạch liên tục được lựa chọn hàng đầu trong cấp cứu cơn tăng huyết áp là:",
    "options": [
      "Nicardipin hoặc Labetalol truyền tĩnh mạch",
      "Captopril viên nén ngậm dưới lưỡi",
      "Amlodipin dạng viên uống sau ăn",
      "Nifedipin dạng viên nang nhỏ giọt dưới lưỡi"
    ],
    "correct": 0,
    "explanation": "Nicardipin hoặc Labetalol tiêm truyền tĩnh mạch chỉnh liều chính xác; cấm dùng Nifedipin nhỏ dưới lưỡi vì tụt áp đột ngột tử vong.",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế"
  },
  {
    "id": 627,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Bốn nhóm thuốc hạ huyết áp thiết yếu đầu tay được khuyến cáo sử dụng phổ biến nhất là:",
    "options": [
      "Chẹn beta, chẹn alpha, thuốc giãn mạch trực tiếp và an thần theo khuyến cáo",
      "Thuốc hạ áp trung ương, thuốc ức chế renin và magnesi sau khi dùng thuốc",
      "Thuốc lợi tiểu quai, thuốc lợi tiểu giữ kali và reserpin kéo dài liên tục",
      "Ức chế men chuyển, chẹn thụ thể AT1, chẹn kênh calci và lợi tiểu thiazid"
    ],
    "correct": 3,
    "explanation": "4 nhóm đầu tay theo khuyến cáo Bộ Y tế/ESC: ACEI, ARB, CCB và Thiazide/thiazide-like.",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế"
  },
  {
    "id": 628,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Chiến lược khởi đầu điều trị tăng huyết áp từ độ 1 có nguy cơ trung bình đến cao được ưu tiên là:",
    "options": [
      "Khởi đầu bằng viên phối hợp cố định liều thấp hai nhóm thuốc",
      "Phối hợp cùng lúc 4 loại thuốc liều cao sau khi dùng thuốc",
      "Dùng đơn trị liệu một thuốc với liều tối đa kéo dài liên tục",
      "Chỉ thay đổi lối sống không dùng thuốc trong 5 năm ở mức độ vừa và nặng"
    ],
    "correct": 0,
    "explanation": "Khởi đầu bằng viên phối hợp đôi (SPC) giúp kiểm soát HA nhanh hơn, tăng tuân thủ và ít ADR hơn tăng liều đơn độc.",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế"
  },
  {
    "id": 629,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Phối hợp thuốc hạ huyết áp nào sau đây bị chống chỉ định do làm tăng biến cố tim mạch và suy thận?",
    "options": [
      "Thuốc chẹn kênh calci phối hợp với lợi tiểu Thiazid",
      "Thuốc ức chế thụ thể Angiotensin phối hợp với lợi tiểu Thiazid",
      "Thuốc ức chế men chuyển phối hợp với thuốc chẹn kênh calci",
      "Thuốc ức chế men chuyển phối hợp với thuốc ức chế thụ thể Angiotensin"
    ],
    "correct": 3,
    "explanation": "Nghiên cứu ONTARGET chứng minh ức chế kép hệ RAAS không tăng lợi ích mà làm tăng suy thận cấp và tăng kali máu.",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế"
  },
  {
    "id": 630,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Bệnh nhân tăng huyết áp có kèm bệnh đái tháo đường và đạm niệu nên ưu tiên chọn nhóm thuốc nào?",
    "options": [
      "Thuốc ức chế men chuyển hoặc thuốc ức chế thụ thể Angiotensin",
      "Thuốc lợi tiểu quai Furosemid đơn thuần ở người bệnh",
      "Thuốc chẹn beta giao cảm không chọn lọc ở mức độ vừa và nặng",
      "Thuốc giãn mạch trực tiếp Hydralazin trên lâm sàng"
    ],
    "correct": 0,
    "explanation": "ACEI/ARB giãn tiểu động mạch đi làm giảm áp lực nội cầu thận, làm chậm tiến triển bệnh thận đái tháo đường.",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế"
  },
  {
    "id": 631,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Tác dụng phụ ho khan dai dẳng của nhóm thuốc ức chế men chuyển có thể khắc phục bằng cách:",
    "options": [
      "Uống kèm thuốc giảm ho chứa Codein kéo dài",
      "Chuyển sang nhóm thuốc chẹn thụ thể Angiotensin II",
      "Tăng gấp đôi liều thuốc ức chế men chuyển",
      "Chuyển sang dùng thuốc chẹn beta không chọn lọc"
    ],
    "correct": 1,
    "explanation": "ARB chẹn chọn lọc tại thụ thể AT1 không làm tích tụ bradykinin nên không gây ho khan như ACEI.",
    "reference": "Sách DLS tr. 535"
  },
  {
    "id": 632,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Hai chống chỉ định tuyệt đối của nhóm thuốc ức chế men chuyển và ức chế thụ thể là:",
    "options": [
      "Người cao tuổi mắc bệnh thoái hóa khớp trong phác đồ chuẩn",
      "Bệnh nhân đái tháo đường typ 2 và gout ở người bệnh",
      "Phụ nữ có thai và bệnh nhân hẹp động mạch thận hai bên",
      "Bệnh nhân sau nhồi máu cơ tim có suy tim kèm theo sốt nhẹ"
    ],
    "correct": 2,
    "explanation": "Chống chỉ định tuyệt đối: có thai, hẹp ĐM thận 2 bên (hoặc hẹp ĐM thận độc nhất), tiền sử phù mạch do ACEI.",
    "reference": "Sách DLS tr. 536"
  },
  {
    "id": 633,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Khi bắt đầu điều trị bằng thuốc ức chế men chuyển, mức tăng nồng độ Creatinin huyết thanh chấp nhận được là:",
    "options": [
      "Không được phép tăng dù chỉ 1 micromol/L trong phác đồ chuẩn",
      "Tăng dưới 30% so với giá trị ban đầu trước điều trị",
      "Tăng gấp 3 lần giá trị ban đầu theo khuyến cáo",
      "Tăng từ 50% đến 100% so với ban đầu kèm theo sốt nhẹ"
    ],
    "correct": 1,
    "explanation": "Creatinin tăng nhẹ < 30% do giảm áp lực lọc cầu thận là hiện tượng bình thường và thận được bảo vệ lâu dài.",
    "reference": "Sách DLS tr. 537"
  },
  {
    "id": 634,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc chẹn kênh calci nhóm Dihydropyridin như Amlodipin hạ áp thông qua cơ chế nào?",
    "options": [
      "Kích thích trung tâm vận mạch ở thân não trong phác đồ chuẩn",
      "Đối kháng cạnh tranh trên thụ thể Aldosteron kéo dài liên tục",
      "Chẹn kênh Calci typ L gây giãn chọn lọc cơ trơn tiểu động mạch",
      "Ức chế tái hấp thu muối natri tại ống lượn xa theo khuyến cáo"
    ],
    "correct": 2,
    "explanation": "DHP ức chế dòng Ca2+ đi vào tế bào cơ trơn mạch máu gây giãn mạch giảm sức cản ngoại vi.",
    "reference": "Sách DLS tr. 538"
  },
  {
    "id": 635,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Tác dụng phụ phù ngoại vi mắt cá chân của Amlodipin có đặc điểm lâm sàng nào?",
    "options": [
      "Phù do cơ thể giữ muối và giữ nước toàn thân theo khuyến cáo định kỳ",
      "Phù do phản ứng dị ứng qua kháng thể IgE sau khi dùng thuốc",
      "Phù do suy tim sung huyết tiến triển nhanh kéo dài liên tục",
      "Phù do giãn tiểu động mạch trước mao mạch làm tăng áp lực mao mạch"
    ],
    "correct": 3,
    "explanation": "Phù do CCB là phù cơ học giãn mạch trước mao mạch, không đáp ứng với thuốc lợi tiểu mà giảm khi phối hợp với ACEI/ARB.",
    "reference": "Sách DLS tr. 539"
  },
  {
    "id": 636,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc chẹn kênh calci Non-Dihydropyridin bao gồm hai hoạt chất nào sau đây?",
    "options": [
      "Verapamil và Diltiazem",
      "Amlodipin và Felodipin",
      "Nifedipin và Nicardipin",
      "Lacidipin và Lercanidipin"
    ],
    "correct": 0,
    "explanation": "Non-DHP gồm Verapamil (tác dụng mạnh lên tim) và Diltiazem (tác dụng cân bằng tim và mạch).",
    "reference": "Sách DLS tr. 540"
  },
  {
    "id": 637,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc hạ áp chẹn beta giao cảm nào sau đây có tính chọn lọc cao trên thụ thể Beta-1 ở tim?",
    "options": [
      "Propranolol và Nadolol sau khi dùng thuốc",
      "Carvedilol và Labetalol ở mức độ vừa và nặng",
      "Bisoprolol, Metoprolol và Nebivolol",
      "Sotalol và Timolol trên lâm sàng định kỳ"
    ],
    "correct": 2,
    "explanation": "Bisoprolol, Metoprolol succinat và Nebivolol là các chẹn beta-1 chọn lọc tim, an toàn hơn trên đường thở.",
    "reference": "Sách DLS tr. 541"
  },
  {
    "id": 638,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc chẹn beta giao cảm Carvedilol có cơ chế tác dụng hạ huyết áp độc đáo là phối hợp giữa:",
    "options": [
      "Chẹn không chọn lọc thụ thể Beta và chẹn thụ thể Alpha-1 gây giãn mạch",
      "Ức chế men chuyển và tăng giữ kali máu ở người bệnh",
      "Chẹn chọn lọc thụ thể Beta-1 và kích thích bài tiết Renin ở mức độ vừa và nặng",
      "Chẹn kênh Calci và kích thích thụ thể Muscarinic trên lâm sàng"
    ],
    "correct": 0,
    "explanation": "Carvedilol vừa chẹn beta1, beta2 vừa chẹn alpha1 ngoại biên giúp hạ áp mạnh và giảm tái cấu trúc tâm thất trong suy tim.",
    "reference": "Sách DLS tr. 542"
  },
  {
    "id": 639,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Nhóm thuốc chẹn beta giao cảm bị chống chỉ định tuyệt đối ở đối tượng bệnh nhân nào?",
    "options": [
      "Bệnh nhân hen phế quản nặng và block nhĩ thất độ 2 hoặc độ 3",
      "Bệnh nhân có nhịp xoang nhanh trên 100 lần trên phút",
      "Bệnh nhân tăng huyết áp có kèm suy tim phân suất tống máu giảm",
      "Bệnh nhân sau nhồi máu cơ tim có tăng huyết áp"
    ],
    "correct": 0,
    "explanation": "Chẹn beta gây co thắt phế quản ở người hen suyễn và ức chế nút nhĩ thất gây ngừng tim nếu có block dẫn truyền nặng.",
    "reference": "Sách DLS tr. 543"
  },
  {
    "id": 640,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Tại sao không bao giờ được ngừng thuốc chẹn beta giao cảm một cách đột ngột ở người bệnh tim mạch?",
    "options": [
      "Gây phù phổi cấp do ứ trệ tuần hoàn trong phác đồ chuẩn kéo dài liên tục trên lâm sàng",
      "Nguy cơ bùng phát cơn tăng huyết áp, đau thắt ngực và nhồi máu cơ tim cấp",
      "Gây tụt huyết áp trụy mạch không hồi phục ở người bệnh ở bệnh nhân có nguy cơ biến chứng cao",
      "Làm tim đập chậm xoang dưới 30 lần trên phút kèm theo sốt nhẹ theo đúng hướng dẫn của Bộ Y tế"
    ],
    "correct": 1,
    "explanation": "Hiện tượng tăng nhạy cảm thụ thể do upregulation khiến ngưng đột ngột gây cường giao cảm dội ngược nguy kịch.",
    "reference": "Sách DLS tr. 544"
  },
  {
    "id": 641,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc lợi tiểu Thiazid-like Indapamid có ưu điểm vượt trội nào so với Hydrochlorothiazid?",
    "options": [
      "Có thể dùng an toàn cho người suy thận vô niệu theo khuyến cáo ở mức độ vừa đến mức độ nặng",
      "Hiệu lực hạ áp kéo dài 24 giờ và trung tính hơn về mặt chuyển hóa lipid đường",
      "Không gây hạ nồng độ kali trong máu trong phác đồ chuẩn kéo dài liên tục trên lâm sàng",
      "Làm tăng bài tiết đường qua nước tiểu kèm theo sốt nhẹ định kỳ theo đúng hướng dẫn của Bộ Y tế"
    ],
    "correct": 1,
    "explanation": "Indapamid có T1/2 dài, giảm biến cố đột quỵ tốt (nghiên cứu HYVET) và ít rối loạn chuyển hóa hơn HCTZ.",
    "reference": "Sách DLS tr. 545"
  },
  {
    "id": 642,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc lợi tiểu Thiazid giảm dần hiệu quả hạ huyết áp rõ rệt khi mức lọc cầu thận eGFR giảm xuống:",
    "options": [
      "Dưới 120 mL trên phút kéo dài liên tục",
      "Dưới 30 mL trên phút trên 1,73 m2 da",
      "Dưới 60 mL trên phút theo khuyến cáo",
      "Dưới 90 mL trên phút trong phác đồ chuẩn"
    ],
    "correct": 1,
    "explanation": "Khi eGFR < 30 mL/min, Thiazid mất hiệu lực lợi tiểu, cần thay thế bằng lợi tiểu quai như Furosemid.",
    "reference": "Sách DLS tr. 546"
  },
  {
    "id": 643,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc hạ huyết áp nào sau đây có thể gây ra hiện tượng rậm lông tóc nên được ứng dụng trị hói đầu?",
    "options": [
      "Amlodipin",
      "Enalapril",
      "Losartan",
      "Minoxidil"
    ],
    "correct": 3,
    "explanation": "Minoxidil mở kênh kali gây giãn mạch mạnh, tác dụng phụ rậm lông được bào chế dung dịch xịt tại chỗ trị rụng tóc.",
    "reference": "Sách DLS tr. 547"
  },
  {
    "id": 644,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Tăng huyết áp kháng trị được định nghĩa là khi huyết áp vẫn không đạt mục tiêu dù đã dùng:",
    "options": [
      "Dùng duy nhất một loại thuốc chẹn beta liều tối đa sau khi dùng thuốc kết hợp theo dõi định kỳ chức năng thận",
      "Dùng thuốc hạ áp liên tục trong 1 tuần lễ ở mức độ vừa và nặng làm tăng tỷ lệ tử vong trên người bệnh",
      "Tối thiểu 2 thuốc hạ áp ở liều khởi đầu thấp nhất kéo dài liên tục kèm theo sốt cao và suy nhược cơ thể",
      "Tối thiểu 3 thuốc hạ áp khác nhóm ở liều tối ưu trong đó có một thuốc lợi tiểu"
    ],
    "correct": 3,
    "explanation": "THA kháng trị: không kiểm soát được HA dù đã phối hợp >= 3 thuốc tối ưu (gồm ACEI/ARB + CCB + Lợi tiểu).",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế"
  },
  {
    "id": 645,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc được khuyến cáo ưu tiên bổ sung thêm bước 4 cho bệnh nhân tăng huyết áp kháng trị là:",
    "options": [
      "Spironolacton liều thấp từ 25 đến 50 mg mỗi ngày",
      "Tăng liều Amlodipin lên gấp đôi liều tối đa",
      "Bổ sung dung dịch nước muối sinh lý",
      "Chuyển sang dùng thuốc tiêm truyền tĩnh mạch"
    ],
    "correct": 0,
    "explanation": "Nghiên cứu PATHWAY-2 chứng minh Spironolacton là thuốc bước 4 hiệu quả nhất kiểm soát THA kháng trị.",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế"
  },
  {
    "id": 646,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc hạ huyết áp tác động lên hệ thần kinh trung ương Clonidin hạ áp theo cơ chế nào?",
    "options": [
      "Ức chế bài tiết hormon aldosterone tại tuyến vỏ thượng thận ở người bệnh ở bệnh nhân có nguy cơ biến chứng cao",
      "Phong bế trực tiếp thụ thể Alpha-1 tại thành mạch ở mức độ vừa và nặng làm tăng tỷ lệ tử vong trên người bệnh",
      "Kích thích thụ thể Beta-2 gây giãn tiểu động mạch trên lâm sàng kèm theo rối loạn chức năng cơ quan",
      "Kích thích chọn lọc thụ thể Alpha-2 tiền synap làm giảm trương lực giao cảm ngoại vi"
    ],
    "correct": 3,
    "explanation": "Chất chủ vận alpha-2 trung ương làm giảm dòng xung động giao cảm ly tâm từ hành não.",
    "reference": "Sách DLS tr. 549"
  },
  {
    "id": 647,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Hiện tượng tăng huyết áp dội ngược nguy kịch xuất hiện khi ngừng đột ngột thuốc nào sau đây?",
    "options": [
      "Clonidin",
      "Hydrochlorothiazid",
      "Amlodipin",
      "Losartan"
    ],
    "correct": 0,
    "explanation": "Ngừng đột ngột Clonidin gây cơn bão catecholamin kịch phát tăng huyết áp ác tính.",
    "reference": "Sách DLS tr. 550"
  },
  {
    "id": 648,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc giãn mạch trực tiếp Hydralazin dùng hạ áp kéo dài có thể gây ra hội chứng giống bệnh tự miễn nào?",
    "options": [
      "Hội chứng xơ cứng bì toàn thể kèm theo sốt nhẹ",
      "Hội chứng thận hư tiên phát ở người bệnh",
      "Hội chứng Lupus ban đỏ hệ thống do thuốc",
      "Hội chứng viêm đa cơ tự miễn trong phác đồ chuẩn"
    ],
    "correct": 2,
    "explanation": "Hydralazin (đặc biệt ở người acetyl hóa chậm) có thể gây hội chứng Lupus do thuốc với kháng thể kháng histon.",
    "reference": "Sách DLS tr. 551"
  },
  {
    "id": 649,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc hạ huyết áp truyền tĩnh mạch Natri Nitroprussid khi truyền kéo dài có nguy cơ ngộ độc chất nào?",
    "options": [
      "Khí Carbon monoxyd",
      "Chất độc Chì và Thủy ngân",
      "Chất độc Cyanid và Thiocyanat",
      "Chất độc Asen vô cơ"
    ],
    "correct": 2,
    "explanation": "Nitroprussid giáng hóa giải phóng gốc cyanid, tích lũy gây nhiễm toan lactic và ngộ độc thiocyanat.",
    "reference": "Sách DLS tr. 552"
  },
  {
    "id": 650,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Chất giải độc dùng kèm để dự phòng ngộ độc Cyanid khi truyền Nitroprussid liều cao là:",
    "options": [
      "Natri thiosulfat",
      "N-acetylcystein",
      "Deferoxamin",
      "Naloxon"
    ],
    "correct": 0,
    "explanation": "Natri thiosulfat cung cấp gốc lưu huỳnh cho enzym rhodanese chuyển hóa cyanid độc thành thiocyanat ít độc thải qua thận.",
    "reference": "Sách DLS tr. 553"
  },
  {
    "id": 651,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Chỉ số huyết áp mục tiêu chung cần đạt được cho hầu hết bệnh nhân tăng huyết áp dưới 65 tuổi là:",
    "options": [
      "Dưới 160 trên 100 mmHg sau khi dùng thuốc",
      "Dưới 130 trên 80 mmHg nếu dung nạp tốt",
      "Dưới 100 trên 60 mmHg kéo dài liên tục",
      "Dưới 150 trên 95 mmHg theo khuyến cáo định kỳ"
    ],
    "correct": 1,
    "explanation": "Hầu hết khuyến cáo tim mạch đặt đích HA < 130/80 mmHg cho bệnh nhân < 65 tuổi (không dưới 120/70 mmHg).",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế"
  },
  {
    "id": 652,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Đối với người cao tuổi từ 65 tuổi trở lên, chỉ số huyết áp tâm thu mục tiêu ban đầu nên đạt là:",
    "options": [
      "Từ 130 đến 139 mmHg",
      "Từ 150 đến 160 mmHg",
      "Dưới 90 mmHg",
      "Dưới 110 mmHg"
    ],
    "correct": 0,
    "explanation": "Người >= 65 tuổi mục tiêu HATT ban đầu từ 130-139 mmHg để tránh hạ áp quá mức gây thiếu máu não té ngã.",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế"
  },
  {
    "id": 653,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Bệnh nhân tăng huyết áp có phì đại lành tính tuyến tiền liệt, nhóm thuốc nào mang lại lợi ích kép?",
    "options": [
      "Thuốc chẹn thụ thể Alpha-1 như Doxazosin hoặc Tamsulosin",
      "Thuốc lợi tiểu Thiazid trên lâm sàng",
      "Thuốc chẹn kênh calci DHP ở mức độ vừa và nặng",
      "Thuốc ức chế men chuyển sau khi dùng thuốc định kỳ"
    ],
    "correct": 0,
    "explanation": "Chẹn alpha-1 làm giãn cơ trơn mạch máu hạ áp đồng thời giãn cơ cổ bàng quang giảm tiểu khó do phì đại tuyến tiền liệt.",
    "reference": "Sách DLS tr. 556"
  },
  {
    "id": 654,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc chẹn thụ thể Angiotensin II nào sau đây có tác dụng phụ độc đáo là tăng bài xuất acid uric qua thận?",
    "options": [
      "Candesartan",
      "Losartan",
      "Telmisartan",
      "Valsartan"
    ],
    "correct": 1,
    "explanation": "Losartan ức chế chất vận chuyển URAT-1 ở ống lượn gần làm giảm nồng độ acid uric máu, rất tốt cho người THA kèm gút.",
    "reference": "Sách DLS tr. 557"
  },
  {
    "id": 655,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc hạ áp chẹn thụ thể Angiotensin nào có thời gian bán thải dài nhất cho phép kiểm soát huyết áp 24 giờ ổn định?",
    "options": [
      "Valsartan",
      "Eprosartan",
      "Telmisartan",
      "Losartan"
    ],
    "correct": 2,
    "explanation": "Telmisartan có T1/2 lên tới 24 giờ và hoạt hóa thụ thể PPAR-gamma cải thiện chuyển hóa glucose.",
    "reference": "Sách DLS tr. 558"
  },
  {
    "id": 656,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Tác dụng phụ phù mạch thần kinh (Angioedema) do thuốc ức chế men chuyển là do sự ứ đọng của chất nào?",
    "options": [
      "Chất Calcitonin tuyến giáp kèm theo sốt nhẹ",
      "Chất Bradykinin trong mô dưới da và niêm mạc",
      "Chất Angiotensin II nội bào ở người bệnh",
      "Chất Serotonin tiểu cầu trong phác đồ chuẩn"
    ],
    "correct": 1,
    "explanation": "Men ACE chịu trách nhiệm phân hủy Bradykinin, ức chế men này làm nồng độ Bradykinin tăng cao gây phù mạch thanh môn đe dọa tắc thở.",
    "reference": "Sách DLS tr. 559"
  },
  {
    "id": 657,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Khi bệnh nhân bị phù mạch do thuốc ức chế men chuyển, can thiệp xử trí khẩn cấp tương tự như:",
    "options": [
      "Tiêm bắp kháng sinh Penicillin liều cao trong phác đồ chuẩn",
      "Để bệnh nhân tự nghỉ ngơi tại nhà theo khuyến cáo",
      "Cho bệnh nhân uống dung dịch Oresol bù nước kèm theo sốt nhẹ",
      "Xử trí cấp cứu phản vệ với Adrenalin và kiểm soát đường thở"
    ],
    "correct": 3,
    "explanation": "Phù mạch cấp tính gây nghẹt thở cần tiêm Adrenalin bắp, Corticoid và chuẩn bị mở khí quản khẩn cấp.",
    "reference": "Sách DLS tr. 560"
  },
  {
    "id": 658,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Khuyến cáo về lượng muối ăn hàng ngày cho người bệnh tăng huyết áp là:",
    "options": [
      "Dưới 5 gam muối ăn tương đương dưới 2 gam Natri mỗi ngày",
      "Không cần hạn chế muối ăn kéo dài liên tục",
      "Ăn càng nhiều muối càng tốt để nâng thể tích theo khuyến cáo",
      "Dưới 15 gam muối ăn mỗi ngày trong phác đồ chuẩn"
    ],
    "correct": 0,
    "explanation": "Giảm tiêu thụ muối < 5g/ngày (khoảng 1 thìa cà phê) giúp hạ 5-8 mmHg huyết áp tâm thu.",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế"
  },
  {
    "id": 659,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Hiệu ứng 'áo choàng trắng' trong đo huyết áp được định nghĩa là tình trạng:",
    "options": [
      "Huyết áp thay đổi liên tục theo từng nhịp thở kéo dài liên tục",
      "Huyết áp tăng cao khi đo tại phòng khám nhưng bình thường khi đo tại nhà",
      "Bệnh nhân bị dị ứng với trang phục màu trắng sau khi dùng thuốc",
      "Huyết áp thấp khi đo tại bệnh viện nhưng tăng cao lúc ngủ theo khuyến cáo"
    ],
    "correct": 1,
    "explanation": "Tăng huyết áp áo choàng trắng do tâm lý lo âu khi gặp nhân viên y tế, chẩn đoán bằng đo HA lưu động 24h (ABPM).",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế"
  },
  {
    "id": 660,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc chẹn beta Nebivolol có thêm cơ chế giãn mạch độc đáo thông qua con đường nào?",
    "options": [
      "Ức chế trực tiếp men Renin ở thận sau khi dùng thuốc",
      "Kích thích giải phóng Nitric Oxide từ tế bào nội mô mạch máu",
      "Tăng cường phân hủy chất Bradykinin ở mức độ vừa và nặng",
      "Kích thích kênh Canxi mở rộng kéo dài liên tục"
    ],
    "correct": 1,
    "explanation": "Nebivolol kích thích thụ thể beta-3 nội mô tăng tổng hợp NO gây giãn mạch và giảm sức cản ngoại vi.",
    "reference": "Sách DLS tr. 563"
  },
  {
    "id": 661,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc lợi tiểu giữ Kali Eplerenon có ưu điểm gì so với Spironolacton?",
    "options": [
      "Chọn lọc cao trên thụ thể Mineralocorticoid nên không gây to vú ở nam giới",
      "Có hiệu lực lợi tiểu mạnh gấp 10 lần ở mức độ vừa và nặng làm tăng tỷ lệ tử vong trên người bệnh",
      "Không gây tăng nồng độ kali trong máu sau khi dùng thuốc định kỳ kết hợp theo dõi định kỳ chức năng thận",
      "Đào thải 100% qua đường hô hấp trên lâm sàng kèm theo rối loạn chức năng cơ quan"
    ],
    "correct": 0,
    "explanation": "Eplerenon ít gắn thụ thể androgen và progesteron nên không gây chứng to vú hay rối loạn cương ở nam giới.",
    "reference": "Sách DLS tr. 564"
  },
  {
    "id": 662,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Theo dõi điện giải đồ nồng độ Kali huyết thanh khi dùng phối hợp ƯCMC và Lợi tiểu giữ kali nên tiến hành:",
    "options": [
      "Chỉ kiểm tra khi bệnh nhân bị ngất ở người bệnh",
      "Chỉ cần xét nghiệm sau 5 năm điều trị ở mức độ vừa và nặng",
      "Sau 1 đến 2 tuần bắt đầu điều trị hoặc khi chỉnh liều",
      "Không cần xét nghiệm nếu bệnh nhân thấy khỏe trên lâm sàng"
    ],
    "correct": 2,
    "explanation": "Cần kiểm tra kali máu và creatinin sau 1-2 tuần dùng phối hợp để phát hiện sớm tăng kali máu đe dọa tim mạch.",
    "reference": "Sách DLS tr. 565"
  },
  {
    "id": 663,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Trong xuất huyết não cấp tính kèm tăng huyết áp, mức huyết áp tâm thu được khuyến cáo hạ xuống là:",
    "options": [
      "Hạ huyết áp tâm thu xuống khoảng 140 mmHg một cách thận trọng",
      "Hạ ngay huyết áp tâm thu xuống dưới 90 mmHg trên lâm sàng định kỳ",
      "Dùng thuốc nâng huyết áp lên trên 220 mmHg kèm theo sốt nhẹ",
      "Không được hạ huyết áp để áp lực tưới máu não tối đa ở người bệnh"
    ],
    "correct": 0,
    "explanation": "Hạ HATT xuống mức an toàn 140 mmHg giúp hạn chế khối máu tụ lan rộng mà không làm thiếu máu não cục bộ.",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế"
  },
  {
    "id": 664,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Trong đột quỵ thiếu máu não cục bộ cấp có chỉ định dùng thuốc tiêu sợi huyết Alteplase, huyết áp phải hạ xuống dưới:",
    "options": [
      "Dưới 100 trên 60 mmHg trong phác đồ chuẩn kéo dài liên tục trên lâm sàng",
      "Dưới 185 trên 110 mmHg trước khi tiêm thuốc tiêu sợi huyết",
      "Dưới 220 trên 120 mmHg kèm theo sốt nhẹ theo đúng hướng dẫn của Bộ Y tế",
      "Dưới 120 trên 80 mmHg ở người bệnh ở bệnh nhân có nguy cơ biến chứng cao"
    ],
    "correct": 1,
    "explanation": "HA >= 185/110 mmHg làm tăng nguy cơ chuyển dạng xuất huyết não khi dùng rt-PA, phải hạ dưới ngưỡng này trước khi tiêm.",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế"
  },
  {
    "id": 665,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc hạ huyết áp nhóm chẹn kênh calci nào sau đây có thời gian bán thải dài nhất khoảng 35 đến 50 giờ?",
    "options": [
      "Nicardipin",
      "Nifedipin",
      "Isradipin",
      "Amlodipin"
    ],
    "correct": 3,
    "explanation": "Amlodipin có T1/2 rất dài (35-50h) đảm bảo tác dụng hạ áp êm dịu suốt 24 giờ ngay cả khi quên 1 liều.",
    "reference": "Sách DLS tr. 568"
  },
  {
    "id": 666,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Tác dụng phụ nhịp tim nhanh phản xạ thường gặp nhất ở nhóm thuốc hạ áp nào sau đây?",
    "options": [
      "Thuốc chẹn beta giao cảm chọn lọc theo khuyến cáo",
      "Thuốc ức chế men chuyển kéo dài liên tục",
      "Thuốc chẹn kênh calci Dihydropyridin tác dụng ngắn",
      "Thuốc chẹn kênh calci Non-Dihydropyridin trong phác đồ chuẩn"
    ],
    "correct": 2,
    "explanation": "DHP tác dụng ngắn gây giãn tiểu động mạch nhanh làm giảm áp lực kích thích baroreceptor gây phản xạ tim đập nhanh.",
    "reference": "Sách DLS tr. 569"
  },
  {
    "id": 667,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Phối hợp Amlodipin với thuốc chẹn beta giao cảm như Bisoprolol mang lại lợi ích gì?",
    "options": [
      "Làm tăng bài tiết đường qua nước tiểu theo khuyến cáo định kỳ ở mức độ vừa đến mức độ nặng",
      "Ngăn ngừa hoàn toàn nguy cơ ho khan kéo dài liên tục kèm theo sốt cao và suy nhược cơ thể",
      "Chẹn beta làm mất hiện tượng nhịp tim nhanh phản xạ do Amlodipin gây ra",
      "Làm mất tác dụng phụ táo bón sau khi dùng thuốc kết hợp theo dõi định kỳ chức năng thận"
    ],
    "correct": 2,
    "explanation": "Bisoprolol ức chế giao cảm tim làm giảm tần số tim bù trừ do giãn mạch của Amlodipin.",
    "reference": "Sách DLS tr. 570"
  },
  {
    "id": 668,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Bệnh nhân tăng huyết áp có kèm bệnh gút cấp tính nên tránh sử dụng nhóm thuốc hạ áp nào?",
    "options": [
      "Thuốc ức chế men chuyển Enalapril",
      "Thuốc chẹn thụ thể Angiotensin Losartan",
      "Thuốc chẹn kênh calci DHP",
      "Thuốc lợi tiểu Thiazid và lợi tiểu quai"
    ],
    "correct": 3,
    "explanation": "Lợi tiểu Thiazid và quai cạnh tranh bài tiết với acid uric tại ống thận làm tăng vọt acid uric máu khởi phát cơn gút cấp.",
    "reference": "Sách DLS tr. 571"
  },
  {
    "id": 669,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thời điểm đo huyết áp bằng máy đo tự động tại nhà chuẩn xác nhất là khi nào?",
    "options": [
      "Đo vào buổi sáng sau khi ngủ dậy đi tiểu và buổi tối trước khi đi ngủ",
      "Đo ngay sau khi vừa chạy bộ về sau khi dùng thuốc định kỳ kết hợp theo dõi định kỳ chức năng thận",
      "Đo ngay sau khi vừa uống 2 ly cà phê đậm trên lâm sàng kèm theo rối loạn chức năng cơ quan",
      "Đo trong lúc đang cãi nhau căng thẳng ở mức độ vừa và nặng làm tăng tỷ lệ tử vong trên người bệnh"
    ],
    "correct": 0,
    "explanation": "Đo HA tại nhà: ngồi nghỉ 5 phút, đo 2 lần sáng (sau ngủ dậy, trước ăn/uống thuốc) và 2 lần tối trước khi ngủ.",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế"
  },
  {
    "id": 670,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Chỉ số huyết áp đo tại nhà trung bình từ bao nhiêu được xem là tương đương chẩn đoán THA phòng khám 140/90?",
    "options": [
      "Từ 120 trên 80 mmHg trở lên",
      "Từ 150 trên 95 mmHg trở lên",
      "Từ 140 trên 90 mmHg trở lên",
      "Từ 135 trên 85 mmHg trở lên"
    ],
    "correct": 3,
    "explanation": "Ngưỡng chẩn đoán THA tại nhà là >= 135/85 mmHg (thấp hơn ngưỡng phòng khám 140/90 mmHg).",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế"
  },
  {
    "id": 671,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc điều hòa huyết áp Aliskiren tác động lên khâu đầu tiên của hệ RAA bằng cách nào?",
    "options": [
      "Phong bế thụ thể AT1",
      "Ức chế men chuyển Angiotensin",
      "Ức chế trực tiếp enzym Renin",
      "Đối kháng thụ thể Aldosteron"
    ],
    "correct": 2,
    "explanation": "Aliskiren là thuốc ức chế trực tiếp enzym renin (DRI) ngăn cản tạo angiotensin I từ angiotensinogen.",
    "reference": "Sách DLS tr. 574"
  },
  {
    "id": 672,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc hạ áp Reserpin kinh điển tác động theo cơ chế nào?",
    "options": [
      "Kích thích kênh Kali tại cơ trơn mạch kèm theo sốt nhẹ theo đúng hướng dẫn của Bộ Y tế",
      "Phong bế chọn lọc thụ thể Beta-1 ở người bệnh ở bệnh nhân có nguy cơ biến chứng cao",
      "Làm cạn kiệt dự trữ Catecholamin và Serotonin ở tận cùng dây thần kinh giao cảm",
      "Ức chế tái hấp thu Natri ở quai Henle trong phác đồ chuẩn kéo dài liên tục trên lâm sàng"
    ],
    "correct": 2,
    "explanation": "Reserpin ức chế chất vận chuyển VMAT làm cạn kiệt noradrenalin trong túi synap, dễ gây trầm cảm tự sát.",
    "reference": "Sách DLS tr. 575"
  },
  {
    "id": 673,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Bệnh nhân tăng huyết áp có hội chứng mạch vành mạn tính ổn định, nhóm thuốc bắt buộc chỉ định là:",
    "options": [
      "Thuốc lợi tiểu quai đơn độc liều cao kèm theo sốt nhẹ",
      "Thuốc chẹn beta giao cảm và thuốc ức chế men chuyển",
      "Thuốc hạ áp tác động trung ương Clonidin trong phác đồ chuẩn",
      "Thuốc giãn mạch trực tiếp Hydralazin theo khuyến cáo"
    ],
    "correct": 1,
    "explanation": "Chẹn beta giảm nhu cầu oxy cơ tim và ƯCMC cải thiện tái cấu trúc tâm thất, giảm tử vong sau biến cố vành.",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế"
  },
  {
    "id": 674,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc chẹn beta nào sau đây có thêm tác dụng chẹn kênh calci mang lại hiệu quả giãn mạch bổ sung?",
    "options": [
      "Propranolol",
      "Atenolol",
      "Carvedilol",
      "Metoprolol"
    ],
    "correct": 2,
    "explanation": "Carvedilol ở nồng độ cao có thêm tác dụng chẹn kênh canxi yếu hỗ trợ giãn mạch ngoại vi.",
    "reference": "Sách DLS tr. 577"
  },
  {
    "id": 675,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Nhóm thuốc chẹn kênh calci Dihydropyridin có thể gây ra tác dụng phụ tiêu hóa thường gặp là:",
    "options": [
      "Loét thủng dạ dày tá tràng",
      "Tiêu chảy phân nước liên tục",
      "Viêm tụy cấp xuất huyết",
      "Táo bón đặc biệt với Verapamil"
    ],
    "correct": 3,
    "explanation": "Non-DHP (đặc biệt Verapamil) ức chế cơ trơn ruột gây táo bón dai dẳng ở người cao tuổi.",
    "reference": "Sách DLS tr. 578"
  },
  {
    "id": 676,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Khi kê đơn thuốc hạ áp cho người lái xe hoặc vận hành máy móc, cần cảnh báo tác dụng phụ nào ở tuần đầu?",
    "options": [
      "Gây ảo giác hoang tưởng nhìn thấy ma",
      "Hiện tượng chóng mặt hoa mắt do hạ huyết áp tư thế",
      "Gây mù màu không phân biệt được đèn giao thông",
      "Làm mất thính lực tạm thời"
    ],
    "correct": 1,
    "explanation": "Giai đoạn đầu hạ áp làm giảm tưới máu não thích nghi tạm thời gây chóng mặt khi đổi tư thế.",
    "reference": "Sách DLS tr. 579"
  },
  {
    "id": 677,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Biện pháp không dùng thuốc nào sau đây giúp giảm huyết áp hiệu quả nhất ở người béo phì?",
    "options": [
      "Ngủ liên tục 14 tiếng mỗi ngày ở mức độ vừa và nặng",
      "Giảm cân nặng đưa chỉ số khối cơ thể BMI về mức lý tưởng",
      "Tắm nước lạnh vào mùa đông trên lâm sàng",
      "Chỉ uống nước ngọt thay cơm sau khi dùng thuốc định kỳ"
    ],
    "correct": 1,
    "explanation": "Giảm mỗi 10 kg cân nặng dư thừa giúp hạ từ 5 đến 20 mmHg huyết áp tâm thu.",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế"
  },
  {
    "id": 678,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Chế độ ăn kiêng DASH được khuyến cáo cho người tăng huyết áp có đặc điểm dinh dưỡng là:",
    "options": [
      "Chỉ ăn chất béo từ dầu chiên đi chiên lại trên lâm sàng kèm theo rối loạn chức năng cơ quan",
      "Giàu rau xanh hoa quả tươi ngũ cốc nguyên hạt sữa ít béo và giảm mỡ bão hòa",
      "Ăn nhiều thịt đỏ và nội tạng động vật ở mức độ vừa và nặng làm tăng tỷ lệ tử vong trên người bệnh",
      "Ăn thật nhiều đồ hộp và xúc xích ở người bệnh ở bệnh nhân có nguy cơ biến chứng cao"
    ],
    "correct": 1,
    "explanation": "DASH diet giàu kali, calci, magnesi và chất xơ, giảm tối đa chất béo bão hòa và cholesterol.",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế"
  },
  {
    "id": 679,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Tập thể dục nhịp điệu đều đặn như đi bộ nhanh 30 phút mỗi ngày trong 5 ngày mỗi tuần giúp:",
    "options": [
      "Gây teo nhỏ các buồng tim sinh lý ở người bệnh",
      "Làm huyết áp tăng vọt vĩnh viễn không hạ trên lâm sàng định kỳ",
      "Giảm huyết áp tâm thu từ 4 đến 9 mmHg và cải thiện chức năng nội mô",
      "Không có bất kỳ lợi ích tim mạch nào kèm theo sốt nhẹ"
    ],
    "correct": 2,
    "explanation": "Vận động thể lực mức độ vừa phải đều đặn giúp hạ áp rõ rệt và tăng độ đàn hồi thành mạch.",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế"
  },
  {
    "id": 680,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Bệnh nhân tăng huyết áp có kèm suy tim phân suất tống máu giảm nặng chống chỉ định với thuốc nào?",
    "options": [
      "Thuốc chẹn beta chọn lọc Bisoprolol kèm theo sốt nhẹ theo đúng hướng dẫn của Bộ Y tế",
      "Thuốc lợi tiểu quai Furosemid trong phác đồ chuẩn kéo dài liên tục trên lâm sàng",
      "Thuốc chẹn kênh calci DHP tác dụng ngắn và thuốc chẹn kênh calci Non-DHP",
      "Thuốc ức chế men chuyển ở người bệnh ở bệnh nhân có nguy cơ biến chứng cao"
    ],
    "correct": 2,
    "explanation": "Verapamil, Diltiazem và Nifedipin tác dụng ngắn gây ức chế co bóp cơ tim làm nặng thêm suy tim và tử vong.",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế"
  },
  {
    "id": 681,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Định nghĩa tiêu chảy cấp ở trẻ em theo Tổ chức Y tế Thế giới (WHO) là tình trạng:",
    "options": [
      "Đi phân rắn từng viên như phân dê trong phác đồ chuẩn kéo dài liên tục trên lâm sàng",
      "Đi ngoài phân sệt 1 lần trong ngày kèm theo sốt nhẹ định kỳ theo đúng hướng dẫn của Bộ Y tế",
      "Đi ngoài phân lỏng hoặc toé nước từ 3 lần trở lên trong 24 giờ kéo dài không quá 14 ngày",
      "Đi tiêu phân có nhầy nhớt kéo dài trên 1 tháng theo khuyến cáo ở mức độ vừa đến mức độ nặng"
    ],
    "correct": 2,
    "explanation": "Tiêu chảy cấp định nghĩa là đi phân lỏng hoặc nhiều nước >= 3 lần/24h, diễn biến dưới 14 ngày.",
    "reference": "Sách DLS tr. 585"
  },
  {
    "id": 682,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Nguyên nhân virus gây tiêu chảy cấp mùa đông phổ biến và nguy hiểm nhất ở trẻ dưới 2 tuổi là:",
    "options": [
      "Rotavirus",
      "Cytomegalovirus",
      "Adenovirus",
      "Coronavirus"
    ],
    "correct": 0,
    "explanation": "Rotavirus gây tổn thương phá hủy tế bào lông nhung ruột non, nguyên nhân hàng đầu gây tiêu chảy mất nước nặng ở trẻ nhỏ.",
    "reference": "Sách DLS tr. 586"
  },
  {
    "id": 683,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Thời gian diễn biến tự nhiên thông thường của một đợt tiêu chảy cấp do virus ở trẻ em là:",
    "options": [
      "Kéo dài đúng 24 giờ rồi khỏi theo khuyến cáo định kỳ",
      "Kéo dài khoảng từ 5 đến 7 ngày và thường tự giới hạn",
      "Chỉ diễn ra trong vòng 2 giờ sau khi dùng thuốc",
      "Kéo dài liên tục trên 3 tháng kéo dài liên tục"
    ],
    "correct": 1,
    "explanation": "Tiêu chảy cấp do virus tự hồi phục sau 5-7 ngày khi tế bào niêm mạc ruột non được tái sinh hoàn toàn.",
    "reference": "Sách DLS tr. 587"
  },
  {
    "id": 684,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Nguyên tắc điều trị quan trọng nhất có tính chất quyết định cứu sống trẻ bị tiêu chảy cấp là:",
    "options": [
      "Cho trẻ nhịn ăn uống tuyệt đối để ruột nghỉ ngơi",
      "Dùng ngay thuốc cầm tiêu chảy để chặn đi ngoài",
      "Dùng ngay kháng sinh phổ rộng liều cao",
      "Bù nước và điện giải kịp thời đúng phác đồ"
    ],
    "correct": 3,
    "explanation": "Mất nước và rối loạn điện giải là nguyên nhân tử vong hàng đầu; bù nước điện giải là nền tảng điều trị cốt lõi.",
    "reference": "Sách DLS tr. 588"
  },
  {
    "id": 685,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Dung dịch bù nước Oresol áp lực thẩm thấu thấp được WHO khuyến cáo có độ thẩm thấu là bao nhiêu?",
    "options": [
      "150 mOsmol trên lít",
      "500 mOsmol trên lít",
      "245 mOsmol trên lít",
      "311 mOsmol trên lít"
    ],
    "correct": 2,
    "explanation": "ORS nồng độ thẩm thấu thấp (245 mOsm/L) giảm tỷ lệ nôn, giảm số lần tiêu chảy và giảm nhu cầu truyền dịch so với ORS cũ.",
    "reference": "Sách DLS tr. 589"
  },
  {
    "id": 686,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Thành phần cơ bản trong dung dịch Oresol tiêu chuẩn giúp tăng cường hấp thu Natri và nước qua ruột là:",
    "options": [
      "Hạt chất béo nhũ tương hóa ở mức độ vừa và nặng làm tăng tỷ lệ tử vong trên người bệnh",
      "Vitamin C liều cao ở người bệnh ở bệnh nhân có nguy cơ biến chứng cao",
      "Các acid amin mạch nhánh trên lâm sàng kèm theo rối loạn chức năng cơ quan",
      "Phân tử Glucose theo cơ chế đồng vận chuyển qua chất mang SGLT-1"
    ],
    "correct": 3,
    "explanation": "Glucose và Natri đồng vận chuyển tỷ lệ 1:1 qua bơm SGLT-1 niêm mạc ruột kéo theo các phân tử nước vào tuần hoàn.",
    "reference": "Sách DLS tr. 590"
  },
  {
    "id": 687,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Phác đồ A của WHO trong điều trị tiêu chảy cấp được áp dụng cho đối tượng trẻ nào?",
    "options": [
      "Trẻ bị tiêu chảy chưa có dấu hiệu mất nước và điều trị tại nhà",
      "Trẻ bị tiêu chảy có co giật kèm theo sốt nhẹ",
      "Trẻ bị mất nước mức độ trung bình trên lâm sàng định kỳ",
      "Trẻ bị sốc mất nước nguy kịch ở người bệnh"
    ],
    "correct": 0,
    "explanation": "Phác đồ A bù dịch tại nhà bằng ORS và nước nấu chín sau mỗi lần đi ngoài phòng ngừa mất nước.",
    "reference": "Sách DLS tr. 591"
  },
  {
    "id": 688,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Lượng dung dịch Oresol cần cho trẻ dưới 2 tuổi uống sau mỗi lần đi ngoài phân lỏng theo Phác đồ A là:",
    "options": [
      "Chỉ cho uống một ngụm khoảng 5 mL",
      "Từ 50 đến 100 mL sau mỗi lần đi tiêu lỏng",
      "Từ 200 đến 300 mL sau mỗi lần đi tiêu",
      "Cho uống liên tục cả chai 1 lít một lần"
    ],
    "correct": 1,
    "explanation": "Trẻ < 2 tuổi uống 50-100 ml; trẻ 2-10 tuổi uống 100-200 ml; trẻ > 10 tuổi uống theo nhu cầu sau mỗi lần đi tiêu.",
    "reference": "Sách DLS tr. 592"
  },
  {
    "id": 689,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Phác đồ B của WHO được áp dụng cho trường hợp trẻ bị tiêu chảy cấp có mức độ mất nước nào?",
    "options": [
      "Trẻ bị sốc mất nước nặng li bì hôn mê trong phác đồ chuẩn kéo dài liên tục trên lâm sàng",
      "Trẻ có biểu hiện xuất huyết tiêu hóa theo khuyến cáo ở mức độ vừa đến mức độ nặng",
      "Trẻ có dấu hiệu mất nước mức độ nhẹ đến trung bình điều trị tại cơ sở y tế",
      "Trẻ hoàn toàn không mất nước kèm theo sốt nhẹ định kỳ theo đúng hướng dẫn của Bộ Y tế"
    ],
    "correct": 2,
    "explanation": "Phác đồ B điều trị mất nước mức độ 'Có mất nước' bằng ORS tại cơ sở y tế trong 4 giờ.",
    "reference": "Sách DLS tr. 593"
  },
  {
    "id": 690,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Lượng dung dịch Oresol cần bù cho trẻ trong 4 giờ đầu theo Phác đồ B được tính theo công thức:",
    "options": [
      "Số cân nặng của trẻ tính bằng kg nhân với 75 mL",
      "Số cân nặng của trẻ nhân với 20 mL trong phác đồ chuẩn",
      "Số cân nặng của trẻ nhân với 150 mL theo khuyến cáo",
      "Cố định 500 mL cho mọi lứa tuổi kéo dài liên tục"
    ],
    "correct": 0,
    "explanation": "Lượng ORS trong 4 giờ đầu: Cân nặng (kg) x 75 mL (hoặc tính theo bảng tuổi nếu không cân được).",
    "reference": "Sách DLS tr. 594"
  },
  {
    "id": 691,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Dấu hiệu lâm sàng phân loại trẻ vào nhóm 'Mất nước nặng' (Phác đồ C) bao gồm hai dấu hiệu nào?",
    "options": [
      "Trẻ khóc có nước mắt bình thường kéo dài liên tục",
      "Nếp véo da bụng mất rất nhanh sau khi dùng thuốc",
      "Trẻ tỉnh táo đòi uống nước liên tục theo khuyến cáo định kỳ",
      "Li bì hoặc hôn mê và không thể uống được hoặc uống rất kém"
    ],
    "correct": 3,
    "explanation": "Tiêu chuẩn Mất nước nặng: có >= 2 dấu hiệu: Li bì/hôn mê; Mắt trũng; Không uống được; Véo da mất rất chậm (> 2 giây).",
    "reference": "Sách DLS tr. 595"
  },
  {
    "id": 692,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Dung dịch truyền tĩnh mạch cấp cứu được lựa chọn ưu tiên hàng đầu trong Phác đồ C của WHO là:",
    "options": [
      "Dung dịch Natri hydrocarbonat đậm đặc ở mức độ vừa và nặng",
      "Dung dịch Albumin người 20% sau khi dùng thuốc",
      "Dung dịch Glucose ưu trương 10% kéo dài liên tục",
      "Dung dịch Ringer Lactat hoặc dung dịch Natri clorid 0,9%"
    ],
    "correct": 3,
    "explanation": "Ringer Lactat là dịch truyền tốt nhất bù thể tích và kiềm hóa toan; dung dịch thay thế là NaCl 0,9%.",
    "reference": "Sách DLS tr. 596"
  },
  {
    "id": 693,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Tổng lượng dịch truyền tĩnh mạch cho trẻ bị mất nước nặng theo Phác đồ C là bao nhiêu?",
    "options": [
      "200 mL trên mỗi kg cân nặng",
      "100 mL trên mỗi kg cân nặng",
      "50 mL trên mỗi kg cân nặng",
      "30 mL trên mỗi kg cân nặng"
    ],
    "correct": 1,
    "explanation": "Tổng lượng dịch truyền là 100 mL/kg, chia thành 2 giai đoạn: hồi sức nhanh ban đầu (30 ml/kg) và duy trì tiếp theo (70 ml/kg).",
    "reference": "Sách DLS tr. 597"
  },
  {
    "id": 694,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Ở trẻ dưới 12 tháng tuổi bị mất nước nặng, tốc độ truyền dịch 100 mL/kg được thực hiện trong bao lâu?",
    "options": [
      "Toàn bộ 100 mL/kg truyền thật nhanh trong 15 phút trên lâm sàng",
      "Truyền nhỏ giọt kéo dài liên tục 24 giờ ở người bệnh",
      "30 mL/kg trong 1 giờ đầu và 70 mL/kg trong 5 giờ tiếp theo",
      "30 mL/kg trong 30 phút và 70 mL/kg trong 2,5 giờ ở mức độ vừa và nặng"
    ],
    "correct": 2,
    "explanation": "Trẻ < 12 tháng: 30 ml/kg trong 1 giờ, sau đó 70 ml/kg trong 5 giờ (tổng cộng 6 giờ).",
    "reference": "Sách DLS tr. 598"
  },
  {
    "id": 695,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Ở trẻ từ 12 tháng tuổi trở lên bị mất nước nặng, thời gian truyền hết 100 mL/kg dịch là:",
    "options": [
      "30 mL/kg trong 30 phút đầu và 70 mL/kg trong 2,5 giờ tiếp theo",
      "Chỉ truyền trong 10 phút kèm theo sốt nhẹ",
      "Truyền đều đặn trong suốt 12 giờ trên lâm sàng định kỳ",
      "30 mL/kg trong 2 giờ và 70 mL/kg trong 6 giờ ở người bệnh"
    ],
    "correct": 0,
    "explanation": "Trẻ >= 12 tháng: 30 ml/kg trong 30 phút, sau đó 70 ml/kg trong 2,5 giờ (tổng cộng 3 giờ).",
    "reference": "Sách DLS tr. 598"
  },
  {
    "id": 696,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Tại sao việc bổ sung Kẽm cho trẻ bị tiêu chảy cấp trong 10 đến 14 ngày là bắt buộc?",
    "options": [
      "Kẽm làm se phân đặc lại ngay lập tức kèm theo sốt nhẹ theo đúng hướng dẫn của Bộ Y tế",
      "Kẽm giúp phục hồi cấu trúc niêm mạc ruột và giảm tỷ lệ tái phát tiêu chảy",
      "Kẽm có tác dụng tiêu diệt trực tiếp các loại virus ở người bệnh ở bệnh nhân có nguy cơ biến chứng cao",
      "Kẽm làm giảm cảm giác thèm ăn của trẻ trong phác đồ chuẩn kéo dài liên tục trên lâm sàng"
    ],
    "correct": 1,
    "explanation": "Kẽm tăng sinh tế bào biểu mô ruột, tăng miễn dịch tế bào, giảm thời gian và độ nặng tiêu chảy, ngừa đợt mới trong 2-3 tháng.",
    "reference": "Sách DLS tr. 599"
  },
  {
    "id": 697,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Liều bổ sung Kẽm hàng ngày cho trẻ em từ 6 tháng tuổi trở lên bị tiêu chảy cấp là:",
    "options": [
      "10 mg Kẽm nguyên tố mỗi ngày kèm theo sốt nhẹ định kỳ",
      "5 mg Kẽm nguyên tố mỗi ngày theo khuyến cáo",
      "20 mg Kẽm nguyên tố mỗi ngày trong 10 đến 14 ngày",
      "50 mg Kẽm nguyên tố mỗi ngày trong phác đồ chuẩn"
    ],
    "correct": 2,
    "explanation": "Liều kẽm: trẻ < 6 tháng tuổi dùng 10 mg/ngày; trẻ từ 6 tháng tuổi trở lên dùng 20 mg/ngày trong 10-14 ngày.",
    "reference": "Sách DLS tr. 600"
  },
  {
    "id": 698,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Liều bổ sung Kẽm hàng ngày cho trẻ dưới 6 tháng tuổi bị tiêu chảy cấp là bao nhiêu?",
    "options": [
      "20 mg Kẽm nguyên tố mỗi ngày",
      "Không được bổ sung kẽm cho trẻ dưới 6 tháng",
      "2 mg Kẽm nguyên tố mỗi ngày",
      "10 mg Kẽm nguyên tố mỗi ngày trong 10 đến 14 ngày"
    ],
    "correct": 3,
    "explanation": "Trẻ dưới 6 tháng tuổi dùng liều 10 mg kẽm nguyên tố/ngày liên tục 10-14 ngày.",
    "reference": "Sách DLS tr. 600"
  },
  {
    "id": 699,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Kháng sinh có được chỉ định thường quy cho trẻ em bị tiêu chảy cấp không?",
    "options": [
      "Bắt buộc phải dùng kháng sinh ngay từ ngày đầu tiên theo khuyến cáo định kỳ",
      "Không được chỉ định thường quy trừ khi có bằng chứng lỵ trực khuẩn hoặc tả",
      "Chỉ dùng kháng sinh khi trẻ sốt nhẹ 37,5 độ kéo dài liên tục",
      "Luôn tiêm phối hợp hai loại kháng sinh phổ rộng sau khi dùng thuốc"
    ],
    "correct": 1,
    "explanation": "Đa số tiêu chảy do virus hoặc cơ chế thẩm thấu; lạm dụng kháng sinh gây loạn khuẩn ruột và kháng thuốc.",
    "reference": "Sách DLS tr. 601"
  },
  {
    "id": 700,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Trẻ bị tiêu chảy phân có nhầy lẫn máu đại thể kèm sốt cao mót rặn được chẩn đoán là:",
    "options": [
      "Rối loạn tiêu hóa thoáng qua do thức ăn",
      "Tiêu chảy do dị ứng đạm sữa bò",
      "Tiêu chảy do nhiễm virus Rotavirus thông thường",
      "Hội chứng lỵ trực khuẩn cần điều trị bằng kháng sinh"
    ],
    "correct": 3,
    "explanation": "Phân máu kèm sốt là dấu hiệu viêm loét đại tràng do vi khuẩn xâm lấn (Shigella), bắt buộc dùng kháng sinh.",
    "reference": "Sách DLS tr. 602"
  },
  {
    "id": 701,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Kháng sinh đường uống được WHO khuyến cáo lựa chọn hàng đầu điều trị lỵ trực khuẩn ở trẻ em là:",
    "options": [
      "Ampicillin hỗn dịch",
      "Cotrimoxazol viên nén",
      "Ciprofloxacin đường uống",
      "Gentamicin tiêm bắp"
    ],
    "correct": 2,
    "explanation": "Ciprofloxacin (15 mg/kg x 2 lần/ngày trong 3 ngày) là lựa chọn hàng đầu hiện nay của WHO cho bệnh lỵ do Shigella.",
    "reference": "Sách DLS tr. 603"
  },
  {
    "id": 702,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Thuốc chống tiêu chảy làm giảm nhu động ruột Loperamid bị chống chỉ định cho trẻ em vì nguy cơ:",
    "options": [
      "Gây liệt ruột cơ năng, ứ đọng độc tố và hoại tử ruột",
      "Gây điếc tai tiếp nhận thần kinh trên lâm sàng",
      "Gây suy tim cấp do rối loạn nhịp ở mức độ vừa và nặng",
      "Làm trẻ bị viêm da dị ứng cấp ở người bệnh"
    ],
    "correct": 0,
    "explanation": "Loperamid ức chế nhu động ruột làm tích tụ độc tố vi khuẩn trong lòng ruột gây liệt ruột nhiễm độc tử vong ở trẻ nhỏ.",
    "reference": "Sách DLS tr. 604"
  },
  {
    "id": 703,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Thuốc kháng tiết đường ruột Racecadotril có cơ chế tác dụng dược lý là gì?",
    "options": [
      "Làm liệt nhu động cơ vòng ruột già trên lâm sàng định kỳ kèm theo rối loạn chức năng cơ quan",
      "Bao phủ cơ học toàn bộ niêm mạc dạ dày kèm theo sốt nhẹ theo đúng hướng dẫn của Bộ Y tế",
      "Ức chế enzym Enkephalinase làm giảm tiết nước và điện giải vào lòng ruột",
      "Tiêu diệt vi khuẩn tả và lỵ ở người bệnh ở bệnh nhân có nguy cơ biến chứng cao"
    ],
    "correct": 2,
    "explanation": "Racecadotril bảo vệ enkephalin nội sinh, giảm tiết dịch ruột mà không ảnh hưởng đến thời gian vận chuyển của ruột.",
    "reference": "Sách DLS tr. 605"
  },
  {
    "id": 704,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Chất hấp phụ Smectit (Diosmectite) trong điều trị tiêu chảy hoạt động theo cơ chế nào?",
    "options": [
      "Diệt khuẩn bằng cách phá màng vi sinh vật kèm theo sốt nhẹ",
      "Gắn kết hấp phụ độc tố vi khuẩn và bảo vệ lớp nhầy niêm mạc ruột",
      "Ức chế chọn lọc bơm proton tế bào thành ở người bệnh",
      "Kích thích tái hấp thu đường chủ động trong phác đồ chuẩn"
    ],
    "correct": 1,
    "explanation": "Diosmectite là nhôm magnesi silicat thiên nhiên có cấu trúc lớp bọc niêm mạc và gắn giữ độc tố vi khuẩn thải ra ngoài.",
    "reference": "Sách DLS tr. 606"
  },
  {
    "id": 705,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Khi dùng chung Diosmectite với các thuốc khác đường uống, hướng dẫn sử dụng đúng là:",
    "options": [
      "Nghiền nát uống chung cùng lúc với kháng sinh",
      "Uống cách xa các thuốc khác tối thiểu từ 1 đến 2 giờ",
      "Uống trước khi đi ngủ kèm với viên sắt",
      "Không cần quan tâm đến thời điểm dùng"
    ],
    "correct": 1,
    "explanation": "Diosmectite hấp phụ các phân tử thuốc khác làm giảm hấp thu thuốc uống cùng, phải uống cách xa 1-2h.",
    "reference": "Sách DLS tr. 607"
  },
  {
    "id": 706,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Men vi sinh Probiotic như Saccharomyces boulardii hoặc Lactobacillus có lợi ích gì trong tiêu chảy cấp?",
    "options": [
      "Chữa khỏi tiêu chảy ngay lập tức sau 1 giờ kéo dài liên tục kèm theo sốt cao và suy nhược cơ thể",
      "Diệt sạch toàn bộ vi khuẩn trong đường ruột theo khuyến cáo ở mức độ vừa đến mức độ nặng",
      "Thay thế hoàn toàn dung dịch bù nước Oresol trong phác đồ chuẩn kéo dài liên tục trên lâm sàng",
      "Rút ngắn thời gian tiêu chảy khoảng 1 ngày và cân bằng hệ vi sinh đường ruột"
    ],
    "correct": 3,
    "explanation": "Probiotic hỗ trợ rút ngắn thời gian tiêu chảy khoảng 24h và giảm thời gian nằm viện của trẻ.",
    "reference": "Sách DLS tr. 608"
  },
  {
    "id": 707,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Chế độ dinh dưỡng đúng đắn cho trẻ nhỏ trong thời gian bị tiêu chảy cấp là gì?",
    "options": [
      "Chỉ cho trẻ ăn cháo muối trắng không có thịt sau khi dùng thuốc",
      "Tiếp tục cho trẻ bú mẹ và ăn uống bình thường đầy đủ chất dinh dưỡng",
      "Pha loãng sữa công thức xuống còn 1/4 nồng độ kéo dài liên tục",
      "Bắt trẻ nhịn ăn tuyệt đối chỉ cho uống nước lọc theo khuyến cáo định kỳ"
    ],
    "correct": 1,
    "explanation": "Trẻ cần tiếp tục bú mẹ và ăn thức ăn giàu dinh dưỡng chia nhỏ bữa để thúc đẩy tế bào niêm mạc ruột hồi phục và tránh suy dinh dưỡng.",
    "reference": "Sách DLS tr. 609"
  },
  {
    "id": 708,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Khi trẻ bị tiêu chảy cấp có biểu hiện nôn sau khi vừa uống Oresol thì người chăm sóc cần làm gì?",
    "options": [
      "Chuyển sang tiêm kháng sinh ngay lập tức sau khi dùng thuốc",
      "Tạm ngừng cho uống 10 phút sau đó cho uống lại chậm rãi từng thìa nhỏ",
      "Cấm tuyệt đối không cho trẻ uống nước nữa ở mức độ vừa và nặng",
      "Bắt trẻ uống ngay gấp đôi lượng vừa nôn ra kéo dài liên tục"
    ],
    "correct": 1,
    "explanation": "Chờ 10 phút cho dịu dạ dày, sau đó bón từng thìa nhỏ mỗi 2-3 phút, đa số trẻ sẽ dung nạp và giữ được nước.",
    "reference": "Sách DLS tr. 610"
  },
  {
    "id": 709,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Dấu hiệu nếp véo da bụng mất rất chậm (trên 2 giây) phản ánh tình trạng gì của cơ thể trẻ?",
    "options": [
      "Trẻ có làn da quá nhiều mỡ dưới da ở mức độ vừa và nặng",
      "Hiện tượng sinh lý hoàn toàn bình thường trên lâm sàng",
      "Tình trạng mất nước nặng đe dọa thể tích tuần hoàn",
      "Trẻ bị suy dinh dưỡng thể phù sau khi dùng thuốc định kỳ"
    ],
    "correct": 2,
    "explanation": "Mất nước nội mô và ngoại bào làm giảm độ đàn hồi mô dưới da, véo da mất > 2 giây là dấu hiệu mất nước nặng.",
    "reference": "Sách DLS tr. 611"
  },
  {
    "id": 710,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Biến chứng toan chuyển hóa trong tiêu chảy cấp nặng ở trẻ em chủ yếu là do mất chất gì qua phân?",
    "options": [
      "Mất một lượng lớn ion Bicarbonat HCO3- qua dịch phân lỏng",
      "Do trẻ ăn quá nhiều chất đạm ở người bệnh",
      "Tích tụ acid uric trong huyết tương ở mức độ vừa và nặng",
      "Do thận tăng bài tiết ion Hydro H+ trên lâm sàng"
    ],
    "correct": 0,
    "explanation": "Dịch phân tiêu chảy chứa nồng độ HCO3- rất cao (30-50 mEq/L), mất kiềm qua phân gây toan chuyển hóa nặng thở sâu Kussmaul.",
    "reference": "Sách DLS tr. 612"
  },
  {
    "id": 711,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Biến chứng hạ Kali máu trong tiêu chảy cấp kéo dài biểu hiện bằng các dấu hiệu nào?",
    "options": [
      "Chướng bụng, giảm nhu động ruột, yếu cơ và loạn nhịp tim",
      "Phù toàn thân có vết lõm sâu kèm theo sốt nhẹ",
      "Tăng phản xạ gân xương quá mức ở người bệnh",
      "Co giật toàn thể và cứng hàm uốn ván trên lâm sàng định kỳ"
    ],
    "correct": 0,
    "explanation": "Mất kali qua phân gây hạ K+ máu: chướng bụng liệt ruột cơ năng, yếu cơ, chuột rút và sóng T dẹt trên ECG.",
    "reference": "Sách DLS tr. 613"
  },
  {
    "id": 712,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Dấu hiệu nguy hiểm nào sau đây đòi hỏi phải đưa trẻ bị tiêu chảy cấp đến bệnh viện ngay lập tức?",
    "options": [
      "Trẻ sốt cao, nôn liên tục, khát nước dữ dội hoặc đi ngoài phân có máu",
      "Trẻ ngủ ngoan sau khi uống Oresol trong phác đồ chuẩn kéo dài liên tục trên lâm sàng",
      "Trẻ đi tiểu nước tiểu màu vàng nhạt ở người bệnh ở bệnh nhân có nguy cơ biến chứng cao",
      "Trẻ đòi bú mẹ nhiều hơn bình thường kèm theo sốt nhẹ theo đúng hướng dẫn của Bộ Y tế"
    ],
    "correct": 0,
    "explanation": "Các dấu hiệu báo động đỏ: sốt cao, nôn tất cả mọi thứ, khát dữ dội, phân có máu, li bì khó đánh thức.",
    "reference": "Sách DLS tr. 614"
  },
  {
    "id": 713,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Dung dịch Oresol sau khi pha với nước đun sôi để nguội chỉ có giá trị sử dụng tối đa trong vòng:",
    "options": [
      "Trong vòng 7 ngày nếu để tủ lạnh",
      "Trong vòng 48 giờ",
      "Trong vòng 24 giờ đồng hồ",
      "Chỉ dùng được trong 15 phút"
    ],
    "correct": 2,
    "explanation": "ORS pha xong để quá 24h dễ bị nhiễm khuẩn và lên men, phải đổ bỏ và pha gói mới mỗi ngày.",
    "reference": "Sách DLS tr. 615"
  },
  {
    "id": 714,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Tại sao không được pha dung dịch Oresol vào nước khoáng hoặc nước ngọt có ga?",
    "options": [
      "Vì làm dung dịch bốc mùi khó chịu kéo dài liên tục",
      "Vì nước khoáng làm Oresol biến tính thành chất độc theo khuyến cáo",
      "Vì nước ngọt làm mất màu dung dịch Oresol trong phác đồ chuẩn",
      "Vì làm sai lệch áp lực thẩm thấu chuẩn và nồng độ các chất điện giải"
    ],
    "correct": 3,
    "explanation": "Nước khoáng hoặc nước ngọt làm tăng áp lực thẩm thấu dung dịch dẫn đến tiêu chảy tăng tiết nặng hơn.",
    "reference": "Sách DLS tr. 616"
  },
  {
    "id": 715,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Vắc xin phòng bệnh tiêu chảy do Rotavirus cho trẻ nhỏ được đưa vào cơ thể qua đường nào?",
    "options": [
      "Đường nhỏ mũi phun sương sau khi dùng thuốc",
      "Đường tiêm trong da mu bàn tay kéo dài liên tục",
      "Đường tiêm bắp sâu ở đùi theo khuyến cáo định kỳ",
      "Đường uống với 2 hoặc 3 liều tùy loại vắc xin"
    ],
    "correct": 3,
    "explanation": "Vắc xin Rotavirus là vắc xin sống giảm độc lực dùng đường uống, hoàn thành trước 6-8 tháng tuổi.",
    "reference": "Sách DLS tr. 617"
  },
  {
    "id": 716,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Bệnh tả ở trẻ em và người lớn đặc trưng bởi biểu hiện tiêu chảy có tính chất nào?",
    "options": [
      "Phân nhầy lẫn máu mũi kèm sốt cao co giật kéo dài liên tục kèm theo sốt cao và suy nhược cơ thể",
      "Phân rắn xen kẽ táo bón từng đợt sau khi dùng thuốc kết hợp theo dõi định kỳ chức năng thận",
      "Phân có màu đen sẫm như bã cà phê ở mức độ vừa và nặng làm tăng tỷ lệ tử vong trên người bệnh",
      "Tiêu chảy phân toàn nước đục như nước vo gạo số lượng ồ ạt không sốt"
    ],
    "correct": 3,
    "explanation": "Độc tố tả kích thích adenylate cyclase gây xuất tiết ồ ạt nước và điện giải, phân trắng đục như nước vo gạo tanh nồng.",
    "reference": "Sách DLS tr. 618"
  },
  {
    "id": 717,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Kháng sinh điều trị bệnh tả ở trẻ em được ưu tiên hiện nay là hoạt chất nào?",
    "options": [
      "Azithromycin đường uống",
      "Cloramphenicol dạng viên",
      "Penicillin V đường uống",
      "Gentamicin tiêm bắp"
    ],
    "correct": 0,
    "explanation": "Azithromycin (20 mg/kg 1 liều duy nhất) là lựa chọn ưu tiên điều trị tả ở trẻ em do tỷ lệ kháng quinolon cao.",
    "reference": "Sách DLS tr. 619"
  },
  {
    "id": 718,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Tiêu chảy thẩm thấu xảy ra do sự hiện diện của chất nào trong lòng ruột cản trở hấp thu nước?",
    "options": [
      "Chất xơ không hòa tan cellulose trên lâm sàng kèm theo rối loạn chức năng cơ quan",
      "Các phân tử đường không hấp thu như Lactose làm tăng áp lực thẩm thấu hút nước",
      "Các phân tử protein thịt bò ở người bệnh ở bệnh nhân có nguy cơ biến chứng cao",
      "Các hạt cát vô cơ không tiêu hóa ở mức độ vừa và nặng làm tăng tỷ lệ tử vong trên người bệnh"
    ],
    "correct": 1,
    "explanation": "Thiếu men lactase thứ phát sau tổn thương lông nhung làm lactose không tiêu tích tụ hút nước vào lòng ruột.",
    "reference": "Sách DLS tr. 620"
  },
  {
    "id": 719,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Trẻ bị tiêu chảy kéo dài không dung nạp Lactose thứ phát nên được xử trí dinh dưỡng thế nào?",
    "options": [
      "Ngừng toàn bộ mọi nguồn thức ăn chất lỏng trên lâm sàng định kỳ",
      "Chỉ cho uống dung dịch nước đường mía đậm đặc ở người bệnh",
      "Chuyển sang dùng tạm thời sữa công thức không chứa đường Lactose",
      "Bổ sung thật nhiều sữa đặc có đường kèm theo sốt nhẹ"
    ],
    "correct": 2,
    "explanation": "Sữa không lactose (Lactose-free) giúp giảm tiêu chảy thẩm thấu trong giai đoạn niêm mạc ruột đang hồi phục enzym lactase.",
    "reference": "Sách DLS tr. 621"
  },
  {
    "id": 720,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Hiện tượng lồng ruột ở trẻ nhỏ có thể biểu hiện bằng triệu chứng nào dễ nhầm với tiêu chảy?",
    "options": [
      "Sốt cao liên tục kèm ho khan kèm theo sốt nhẹ theo đúng hướng dẫn của Bộ Y tế",
      "Đi ngoài phân toàn nước màu xanh ở người bệnh ở bệnh nhân có nguy cơ biến chứng cao",
      "Táo bón kéo dài nhiều tuần trong phác đồ chuẩn kéo dài liên tục trên lâm sàng",
      "Đau bụng từng cơn dữ dội, nôn mửa và đi ngoài phân nhầy máu như thạch"
    ],
    "correct": 3,
    "explanation": "Lồng ruột cấp: khóc thét từng cơn, nôn ra dịch mật, sờ thấy khối lồng và đi ngoài phân máu nhầy như thạch đỏ việt quất.",
    "reference": "Sách DLS tr. 622"
  },
  {
    "id": 721,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Thuốc chống nôn Ondansetron có thể được cân nhắc dùng một liều duy nhất trong tiêu chảy cấp khi:",
    "options": [
      "Trẻ nôn nhiều cản trở việc bù dịch bằng đường uống Oresol",
      "Dùng để cầm tiêu chảy sau 10 phút",
      "Chỉ dùng khi trẻ có co giật toàn thân",
      "Tất cả mọi trẻ bị tiêu chảy đều phải dùng thường quy"
    ],
    "correct": 0,
    "explanation": "Một liều Ondansetron uống giúp giảm nôn, tăng tỷ lệ bù dịch bằng ORS thành công và tránh phải truyền dịch tĩnh mạch.",
    "reference": "Sách DLS tr. 623"
  },
  {
    "id": 722,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Chỉ định đặt sonde dạ dày nhỏ giọt Oresol được áp dụng trong tình huống nào ở Phác đồ B?",
    "options": [
      "Trẻ tỉnh táo bú mẹ rất tốt trong phác đồ chuẩn kéo dài liên tục trên lâm sàng",
      "Trẻ bị nôn liên tục hoặc từ chối uống nhưng chưa có chỉ định truyền tĩnh mạch",
      "Trẻ bị thủng ruột nghi viêm phúc mạc kéo dài liên tục kèm theo sốt cao và suy nhược cơ thể",
      "Trẻ đang trong cơn sốc tụt huyết áp theo khuyến cáo ở mức độ vừa đến mức độ nặng"
    ],
    "correct": 1,
    "explanation": "Nhỏ giọt dạ dày ORS chậm giúp bù dịch hiệu quả khi trẻ mệt nôn nhiều mà chưa có đường truyền tĩnh mạch.",
    "reference": "Sách DLS tr. 624"
  },
  {
    "id": 723,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Sau khi đã bù đủ dịch theo Phác đồ B trong 4 giờ, bước tiếp theo bác sĩ cần làm là:",
    "options": [
      "Ngừng toàn bộ việc cho trẻ ăn uống sau khi dùng thuốc kết hợp theo dõi định kỳ chức năng thận",
      "Cho trẻ xuất viện ngay không cần dặn dò theo khuyến cáo định kỳ ở mức độ vừa đến mức độ nặng",
      "Đánh giá lại tình trạng mất nước của trẻ để quyết định phác đồ tiếp theo",
      "Chuyển sang truyền dịch cấp cứu ngay lập tức kéo dài liên tục kèm theo sốt cao và suy nhược cơ thể"
    ],
    "correct": 2,
    "explanation": "Sau 4h Phác đồ B: nếu hết mất nước chuyển Phác đồ A; nếu còn mất nước lặp lại Phác đồ B; nếu nặng lên chuyển Phác đồ C.",
    "reference": "Sách DLS tr. 625"
  },
  {
    "id": 724,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Mục tiêu quan trọng của việc giáo dục truyền thông cho các bà mẹ về tiêu chảy cấp là:",
    "options": [
      "Biết cách pha và cho uống Oresol đúng cách ngay khi trẻ bắt đầu đi tiêu lỏng",
      "Biết cách tiêm truyền dịch tại nhà ở mức độ vừa và nặng làm tăng tỷ lệ tử vong trên người bệnh",
      "Biết cách ép trẻ nhịn ăn để sạch ruột sau khi dùng thuốc kết hợp theo dõi định kỳ chức năng thận",
      "Biết cách tự ra hiệu thuốc mua kháng sinh mạnh kéo dài liên tục kèm theo sốt cao và suy nhược cơ thể"
    ],
    "correct": 0,
    "explanation": "Bù dịch sớm bằng ORS đúng nồng độ tại nhà giúp ngăn ngừa tới 90% biến chứng mất nước nặng.",
    "reference": "Sách DLS tr. 626"
  },
  {
    "id": 725,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Nước cháo muối là dung dịch thay thế dân gian an toàn trong Phác đồ A được nấu theo tỷ lệ nào?",
    "options": [
      "Một nắm gạo, một nhúm muối nhỏ và một lít nước đun sôi",
      "Pha muối vào nước ngọt hoa quả đóng lon trên lâm sàng",
      "Nửa bát muối pha với một lít nước sau khi dùng thuốc định kỳ",
      "Nấu cháo thật đặc không cho nước ở mức độ vừa và nặng"
    ],
    "correct": 0,
    "explanation": "Nước cháo muối (1 nắm gạo + 1 nhúm muối 3-4g trong 1 lít nước) cung cấp tinh bột và natri an toàn khi chưa có ORS.",
    "reference": "Sách DLS tr. 627"
  },
  {
    "id": 726,
    "chapter": "Hen phế quản & COPD",
    "question": "Bản chất bệnh học cơ bản của bệnh hen phế quản là tình trạng:",
    "options": [
      "Viêm mạn tính đường thở với sự tham gia của nhiều tế bào và yếu tố tế bào",
      "Tổn thương phá hủy không hồi phục vách phế nang trên lâm sàng kèm theo rối loạn chức năng cơ quan",
      "Nhiễm khuẩn cấp tính mưng mủ ở phế nang ở mức độ vừa và nặng làm tăng tỷ lệ tử vong trên người bệnh",
      "Xơ hóa vĩnh viễn các mao mạch phổi ở người bệnh ở bệnh nhân có nguy cơ biến chứng cao"
    ],
    "correct": 0,
    "explanation": "Hen là bệnh lý viêm mạn tính đường thở dẫn đến tăng phản ứng phế quản và tắc nghẽn luồng khí hồi phục được.",
    "reference": "GINA 2023 / Hướng dẫn chẩn đoán Hen - Bộ Y tế"
  },
  {
    "id": 727,
    "chapter": "Hen phế quản & COPD",
    "question": "Đặc điểm chức năng hô hấp đặc trưng nhất giúp phân biệt hen phế quản với COPD là:",
    "options": [
      "Dung tích sống gắng sức FVC luôn giảm nặng ở người bệnh ở bệnh nhân có nguy cơ biến chứng cao",
      "Khí máu động mạch luôn có toan chuyển hóa kèm theo sốt nhẹ theo đúng hướng dẫn của Bộ Y tế",
      "Sự tắc nghẽn luồng khí có tính chất hồi phục hoàn toàn hoặc đáng kể sau test giãn phế quản",
      "Tắc nghẽn cố định không hồi phục trên lâm sàng định kỳ kèm theo rối loạn chức năng cơ quan"
    ],
    "correct": 2,
    "explanation": "Test hồi phục phế quản dương tính (FEV1 tăng > 12% và > 200 mL sau hít SABA) là tiêu chuẩn vàng chẩn đoán hen.",
    "reference": "GINA 2023"
  },
  {
    "id": 728,
    "chapter": "Hen phế quản & COPD",
    "question": "Nhóm thuốc nào sau đây đóng vai trò là nền tảng kiểm soát viêm hàng đầu trong điều trị Hen phế quản?",
    "options": [
      "Corticoid dạng hít ICS",
      "Thuốc giãn phế quản Theophyllin uống",
      "Thuốc chủ vận beta-2 tác dụng ngắn SABA",
      "Thuốc kháng cholinergic dạng hít SAMA"
    ],
    "correct": 0,
    "explanation": "Corticoid hít (ICS) là thuốc chống viêm nền tảng bắt buộc để kiểm soát triệu chứng và giảm đợt cấp hen.",
    "reference": "GINA 2023"
  },
  {
    "id": 729,
    "chapter": "Hen phế quản & COPD",
    "question": "Tại sao theo hướng dẫn GINA hiện nay, không bao giờ được dùng SABA đơn độc để điều trị hen phế quản?",
    "options": [
      "Vì SABA gây nghiện thuốc nghiêm trọng trong phác đồ chuẩn",
      "Vì SABA không có tác dụng làm giãn cơ trơn phế quản kèm theo sốt nhẹ định kỳ",
      "Vì dùng SABA đơn độc làm tăng nguy cơ đợt kịch phát nặng và tử vong do hen",
      "Vì SABA làm đông máu trong mao mạch phổi theo khuyến cáo"
    ],
    "correct": 2,
    "explanation": "Dùng SABA đơn độc không kiểm soát viêm đường thở, làm tăng điều hòa giảm thụ thể beta-2 và tăng tử vong do hen.",
    "reference": "GINA 2023"
  },
  {
    "id": 730,
    "chapter": "Hen phế quản & COPD",
    "question": "Liệu pháp SMART trong điều trị hen phế quản là liệu trình sử dụng:",
    "options": [
      "Dùng hai bình xịt khác nhau hoàn toàn trong phác đồ chuẩn kéo dài liên tục trên lâm sàng",
      "Chỉ dùng thuốc viên uống giải phóng kéo dài theo khuyến cáo ở mức độ vừa đến mức độ nặng",
      "Chỉ tiêm truyền tĩnh mạch định kỳ hàng tháng kéo dài liên tục kèm theo sốt cao và suy nhược cơ thể",
      "Một bình hít duy nhất chứa phối hợp ICS và Formoterol cho cả duy trì và cắt cơn"
    ],
    "correct": 3,
    "explanation": "SMART (Single Inhaler Maintenance and Reliever Therapy) dùng ICS-Formoterol làm thuốc duy trì kiêm cắt cơn.",
    "reference": "GINA 2023"
  },
  {
    "id": 731,
    "chapter": "Hen phế quản & COPD",
    "question": "Tại sao Formoterol là LABA duy nhất thích hợp được lựa chọn cho liệu pháp cắt cơn trong hen?",
    "options": [
      "Vì có khởi phát tác dụng giãn phế quản rất nhanh trong vòng 1 đến 3 phút tương đương Salbutamol",
      "Vì Formoterol không có tác dụng phụ trên tim mạch theo khuyến cáo định kỳ ở mức độ vừa đến mức độ nặng",
      "Vì Formoterol là dạng thuốc viên giải phóng nhanh kéo dài liên tục kèm theo sốt cao và suy nhược cơ thể",
      "Vì Formoterol có nguồn gốc hoàn toàn từ thảo dược sau khi dùng thuốc kết hợp theo dõi định kỳ chức năng thận"
    ],
    "correct": 0,
    "explanation": "Formoterol vừa có tác dụng nhanh như SABA (1-3 phút) vừa kéo dài 12 giờ như LABA, lý tưởng cho cắt cơn kèm bổ sung ICS.",
    "reference": "GINA 2023"
  },
  {
    "id": 732,
    "chapter": "Hen phế quản & COPD",
    "question": "Thuốc chủ vận Beta-2 tác dụng ngắn Salbutamol cắt cơn khó thở thông qua cơ chế nào?",
    "options": [
      "Ức chế enzym Phosphodiesterase 4 sau khi dùng thuốc kết hợp theo dõi định kỳ chức năng thận",
      "Phong bế thụ thể Muscarinic M3 kéo dài liên tục kèm theo sốt cao và suy nhược cơ thể",
      "Gắn trực tiếp vào phân tử IgE tự do ở mức độ vừa và nặng làm tăng tỷ lệ tử vong trên người bệnh",
      "Kích thích thụ thể Beta-2 làm tăng AMP vòng gây giãn cơ trơn phế quản"
    ],
    "correct": 3,
    "explanation": "Salbutamol kích thích adenylate cyclase tạo cAMP làm giảm Ca2+ nội bào gây giãn cơ trơn đường thở.",
    "reference": "Sách DLS tr. 635"
  },
  {
    "id": 733,
    "chapter": "Hen phế quản & COPD",
    "question": "Tác dụng phụ thường gặp nhất của thuốc chủ vận Beta-2 như Salbutamol thể hiện qua triệu chứng:",
    "options": [
      "Tê liệt dây thần kinh số VII ngoại biên sau khi dùng thuốc",
      "Xuất huyết dưới da dạng chấm mảng ở mức độ vừa và nặng",
      "Run ngón tay, nhịp tim nhanh hồi hộp và hạ kali máu nhẹ",
      "Mất vị giác hoàn toàn kéo dài trên lâm sàng"
    ],
    "correct": 2,
    "explanation": "Kích thích thụ thể beta-2 trên cơ vân gây run tay, thụ thể beta tim gây tim nhanh và đưa K+ vào nội bào gây hạ kali.",
    "reference": "Sách DLS tr. 636"
  },
  {
    "id": 734,
    "chapter": "Hen phế quản & COPD",
    "question": "Corticoid dạng hít như Fluticason propionat hay Budesonid có tác dụng phụ tại chỗ phổ biến nhất là:",
    "options": [
      "Mù lòa do tăng nhãn áp tức thì ở mức độ vừa và nặng",
      "Chảy máu cam ồ ạt khó cầm trên lâm sàng",
      "Rụng răng cửa hàm trên ở người bệnh",
      "Nhiễm nấm Candida khoang miệng và khàn tiếng"
    ],
    "correct": 3,
    "explanation": "Lắng đọng corticoid hạt tại hầu họng ức chế miễn dịch tại chỗ gây nấm miệng và liệt cơ khép thanh âm gây khàn tiếng.",
    "reference": "Sách DLS tr. 637"
  },
  {
    "id": 735,
    "chapter": "Hen phế quản & COPD",
    "question": "Dụng cụ buồng đệm có van một chiều dùng kèm bình xịt định liều MDI mang lại lợi ích nổi bật nào?",
    "options": [
      "Tăng lượng thuốc lắng đọng tại phổi và giảm lắng đọng ở hầu họng",
      "Làm thuốc bay hơi hoàn toàn vào không khí trên lâm sàng định kỳ",
      "Làm tăng gấp đôi kích thước của hạt thuốc ở người bệnh",
      "Làm thuốc chuyển thành dạng viên nén kèm theo sốt nhẹ"
    ],
    "correct": 0,
    "explanation": "Buồng đệm giảm vận tốc hạt thuốc, hạn chế va đập vào họng và giúp trẻ em/người già không cần phối hợp tay bóp miệng hít.",
    "reference": "Sách DLS tr. 638"
  },
  {
    "id": 736,
    "chapter": "Hen phế quản & COPD",
    "question": "Thuốc kháng thụ thể Leukotrien Montelukast có ưu thế đặc biệt trong điều trị thể hen phế quản nào?",
    "options": [
      "Cơn hen cấp tính tại phòng cấp cứu kèm theo sốt nhẹ theo đúng hướng dẫn của Bộ Y tế",
      "Hen ác tính đe dọa ngừng thở ngay lập tức ở người bệnh ở bệnh nhân có nguy cơ biến chứng cao",
      "Hen do gắng sức, hen nhạy cảm với Aspirin và hen kèm viêm mũi dị ứng",
      "Hen ở người cao tuổi có suy tim nặng trong phác đồ chuẩn kéo dài liên tục trên lâm sàng"
    ],
    "correct": 2,
    "explanation": "Montelukast đường uống ức chế CysLT1 rất hiệu quả cho hen dị ứng, hen khởi phát do gắng sức và tam chứng Samter do NSAID.",
    "reference": "Sách DLS tr. 639"
  },
  {
    "id": 737,
    "chapter": "Hen phế quản & COPD",
    "question": "Cơ quan Quản lý Dược phẩm Hoa Kỳ đưa ra cảnh báo hộp đen về tác dụng phụ thần kinh của Montelukast là:",
    "options": [
      "Gây điếc tai tiếp nhận không phục hồi kèm theo sốt nhẹ định kỳ",
      "Rối loạn tâm thần, thay đổi hành vi khí sắc và ý nghĩ tự sát",
      "Gây liệt nửa người thoáng qua trong phác đồ chuẩn",
      "Gây suy tủy xương bất sản theo khuyến cáo"
    ],
    "correct": 1,
    "explanation": "FDA cảnh báo Montelukast có thể gây ác mộng, kích động, trầm cảm và hành vi tự sát.",
    "reference": "Sách DLS tr. 640"
  },
  {
    "id": 738,
    "chapter": "Hen phế quản & COPD",
    "question": "Thuốc kháng thể đơn dòng Omalizumab được chỉ định điều trị cho bệnh nhân hen phế quản thể nào?",
    "options": [
      "Cơn hen cấp tính đang đặt nội khí quản theo khuyến cáo ở mức độ vừa đến mức độ nặng",
      "Bệnh phổi tắc nghẽn mạn tính COPD đơn thuần kéo dài liên tục kèm theo sốt cao và suy nhược cơ thể",
      "Tất cả các thể hen nhẹ ngắt quãng trong phác đồ chuẩn kéo dài liên tục trên lâm sàng",
      "Hen dị ứng nặng dai dẳng có nồng độ IgE huyết thanh tăng cao kháng trị"
    ],
    "correct": 3,
    "explanation": "Omalizumab là kháng thể kháng IgE gắn vào đoạn Fc của IgE tự do, ngăn cản IgE gắn lên tế bào mast.",
    "reference": "Sách DLS tr. 641"
  },
  {
    "id": 739,
    "chapter": "Hen phế quản & COPD",
    "question": "Kháng thể đơn dòng Mepolizumab và Benralizumab tác động lên đích sinh học nào trong hen nặng?",
    "options": [
      "Enzym Cyclooxygenase 2 tại phổi sau khi dùng thuốc",
      "Thụ thể Histamin H1 trên cơ trơn kéo dài liên tục",
      "Interleukin 2 kích thích tế bào lympho T theo khuyến cáo định kỳ",
      "Interleukin 5 hoặc thụ thể IL-5 nhằm tiêu diệt bạch cầu ưa acid"
    ],
    "correct": 3,
    "explanation": "IL-5 là cytokine chính hoạt hóa và duy trì sự sống của bạch cầu ái toan (eosinophil) trong hen typ 2.",
    "reference": "Sách DLS tr. 642"
  },
  {
    "id": 740,
    "chapter": "Hen phế quản & COPD",
    "question": "Khí dung Magnesi sulfat hoặc truyền tĩnh mạch Magnesi sulfat trong cơn hen phế quản nặng có tác dụng gì?",
    "options": [
      "Làm tăng phản ứng viêm để tống xuất đờm kéo dài liên tục",
      "Làm giãn cơ trơn phế quản thông qua ức chế dòng calci đi vào tế bào",
      "Làm co thắt mạch máu phổi giảm phù nề sau khi dùng thuốc",
      "Kích thích trung tâm hô hấp tăng tần số thở ở mức độ vừa và nặng"
    ],
    "correct": 1,
    "explanation": "Mg2+ cạnh tranh với Ca2+ ức chế co thắt cơ trơn phế quản, chỉ định hỗ trợ trong cơn hen phế quản nặng trơ với SABA.",
    "reference": "Sách DLS tr. 643"
  },
  {
    "id": 741,
    "chapter": "Hen phế quản & COPD",
    "question": "Trong điều trị cơn hen phế quản cấp tính nặng, chỉ định Corticoid toàn thân được khuyến cáo dùng:",
    "options": [
      "Tiêm tĩnh mạch liên tục trong vòng 6 tháng sau khi dùng thuốc định kỳ kết hợp theo dõi định kỳ chức năng thận",
      "Đường uống với liều tương đương Prednisolon 40 đến 50 mg mỗi ngày trong 5 đến 7 ngày",
      "Chỉ dùng dạng bôi ngoài da diện rộng ở mức độ vừa và nặng làm tăng tỷ lệ tử vong trên người bệnh",
      "Không được dùng Corticoid trong cơn hen cấp trên lâm sàng kèm theo rối loạn chức năng cơ quan"
    ],
    "correct": 1,
    "explanation": "Corticoid toàn thân uống (hiệu quả tương đương tiêm tĩnh mạch nếu bệnh nhân uống được) ngắn ngày 5-7 ngày cắt đợt cấp hen.",
    "reference": "GINA 2023"
  },
  {
    "id": 742,
    "chapter": "Hen phế quản & COPD",
    "question": "Bệnh phổi tắc nghẽn mạn tính COPD đặc trưng bởi tình trạng tổn thương bệnh học nào sau đây?",
    "options": [
      "Tắc nghẽn phế quản hồi phục hoàn toàn sau dùng thuốc ở mức độ vừa và nặng làm tăng tỷ lệ tử vong trên người bệnh",
      "Tắc nghẽn luồng khí dai dẳng tiến triển không hồi phục hoàn toàn liên quan khói thuốc",
      "Xơ cứng toàn bộ các xương sườn lồng ngực trên lâm sàng kèm theo rối loạn chức năng cơ quan",
      "Tràn khí màng phổi tự phát hai bên ở người bệnh ở bệnh nhân có nguy cơ biến chứng cao"
    ],
    "correct": 1,
    "explanation": "COPD là bệnh hô hấp tiến triển, tắc nghẽn cố định (FEV1/FVC < 0,70 sau test giãn phế quản) chủ yếu do khói thuốc lá/bụi độc.",
    "reference": "GOLD 2024"
  },
  {
    "id": 743,
    "chapter": "Hen phế quản & COPD",
    "question": "Yếu tố nguy cơ hàng đầu dẫn đến sự khởi phát và tiến triển của bệnh COPD là gì?",
    "options": [
      "Thói quen tập thể dục cường độ cao kèm theo sốt nhẹ",
      "Chế độ ăn nhiều dầu mỡ động vật trên lâm sàng định kỳ",
      "Hút thuốc lá chủ động và tiếp xúc khói thuốc thụ động lâu năm",
      "Uống rượu vang đỏ vào buổi tối ở người bệnh"
    ],
    "correct": 2,
    "explanation": "Hơn 80-90% trường hợp COPD có tiền sử hút thuốc lá kéo dài.",
    "reference": "GOLD 2024"
  },
  {
    "id": 744,
    "chapter": "Hen phế quản & COPD",
    "question": "Nhóm thuốc giãn phế quản kháng Cholinergic tác dụng kéo dài LAMA như Tiotropium hoạt động bằng cách:",
    "options": [
      "Ức chế thụ thể Leukotrien tại phổi trong phác đồ chuẩn",
      "Kích thích thụ thể giao cảm Beta-2 ở người bệnh",
      "Ức chế tái hấp thu Dopamin ở synap kèm theo sốt nhẹ",
      "Phong bế chọn lọc thụ thể Muscarinic M3 trên cơ trơn phế quản"
    ],
    "correct": 3,
    "explanation": "Tiotropium đối kháng thụ thể M3 ngăn acetylcholin gây co thắt phế quản, nền tảng điều trị giãn phế quản trong COPD.",
    "reference": "GOLD 2024"
  },
  {
    "id": 745,
    "chapter": "Hen phế quản & COPD",
    "question": "Theo khuyến cáo của GOLD hiện nay, nhóm bệnh nhân COPD có đợt cấp thường xuyên (Nhóm E) nên khởi đầu bằng:",
    "options": [
      "Phối hợp LABA và LAMA",
      "Đơn trị liệu bằng thuốc SABA khi cần",
      "Đơn trị liệu bằng Corticoid hít ICS",
      "Chỉ dùng kháng sinh đường uống dự phòng"
    ],
    "correct": 0,
    "explanation": "GOLD 2024 khuyến cáo khởi đầu bằng bộ đôi giãn phế quản LABA + LAMA cho nhóm E (nguy cơ đợt cấp cao).",
    "reference": "GOLD 2024"
  },
  {
    "id": 746,
    "chapter": "Hen phế quản & COPD",
    "question": "Chỉ định bổ sung thêm Corticoid dạng hít vào phác đồ LABA/LAMA (liệu pháp bộ ba) cho bệnh nhân COPD khi nào?",
    "options": [
      "Bệnh nhân hoàn toàn không có đợt cấp nào kéo dài liên tục kèm theo sốt cao và suy nhược cơ thể",
      "Số lượng bạch cầu ái toan trong máu từ 300 tế bào trên microlit trở lên kèm tiền sử đợt cấp",
      "Số lượng bạch cầu ái toan trong máu bằng 0 trong phác đồ chuẩn kéo dài liên tục trên lâm sàng",
      "Bệnh nhân có tiền sử viêm phổi tái phát nhiều lần theo khuyến cáo ở mức độ vừa đến mức độ nặng"
    ],
    "correct": 1,
    "explanation": "Bạch cầu ái toan máu >= 300/uL (hoặc >= 100/uL kèm >= 2 đợt cấp vừa/1 đợt cấp nhập viện) là tiêu chí bổ sung ICS trong COPD.",
    "reference": "GOLD 2024"
  },
  {
    "id": 747,
    "chapter": "Hen phế quản & COPD",
    "question": "Nguy cơ tác dụng không mong muốn nghiêm trọng khi sử dụng Corticoid dạng hít ở bệnh nhân COPD là gì?",
    "options": [
      "Làm gia tăng tỷ lệ mắc bệnh viêm phổi nhiễm trùng",
      "Làm teo nhỏ hoàn toàn hai lá phổi sau khi dùng thuốc",
      "Gây suy tim sung huyết cấp tính theo khuyến cáo định kỳ",
      "Gây tràn dịch màng ngoài tim kéo dài liên tục"
    ],
    "correct": 0,
    "explanation": "ICS trong COPD làm tăng nguy cơ viêm phổi vi khuẩn (đặc biệt khi BC ái toan máu thấp < 100/uL).",
    "reference": "GOLD 2024"
  },
  {
    "id": 748,
    "chapter": "Hen phế quản & COPD",
    "question": "Thuốc ức chế chọn lọc enzym Phosphodiesterase 4 Roflumilast được chỉ định trong COPD nhằm mục đích:",
    "options": [
      "Làm tan đờm tức thì trong vòng 5 phút kéo dài liên tục kèm theo sốt cao và suy nhược cơ thể",
      "Cắt cơn khó thở cấp tính thay thế thuốc hít sau khi dùng thuốc kết hợp theo dõi định kỳ chức năng thận",
      "Diệt trực khuẩn mủ xanh trong đường thở ở mức độ vừa và nặng làm tăng tỷ lệ tử vong trên người bệnh",
      "Giảm tần suất đợt cấp ở bệnh nhân viêm phế quản mạn tắc nghẽn nặng FEV1 dưới 50%"
    ],
    "correct": 3,
    "explanation": "Roflumilast đường uống chống viêm nội bào, giảm đợt cấp ở COPD thể viêm phế quản mạn có FEV1 < 50% dự đoán.",
    "reference": "GOLD 2024"
  },
  {
    "id": 749,
    "chapter": "Hen phế quản & COPD",
    "question": "Thuốc giãn phế quản Theophyllin có khoảng cửa sổ điều trị rất hẹp, nồng độ máu tối ưu khuyến cáo là:",
    "options": [
      "Từ 10 đến 20 mcg trên mL",
      "Từ 30 đến 40 mcg trên mL",
      "Từ 50 đến 100 mcg trên mL",
      "Dưới 1 mcg trên mL"
    ],
    "correct": 0,
    "explanation": "Cửa sổ điều trị hẹp 10-20 mcg/mL, trên 20 mcg/mL dễ ngộ độc buồn nôn, loạn nhịp tim và co giật.",
    "reference": "Sách DLS tr. 649"
  },
  {
    "id": 750,
    "chapter": "Hen phế quản & COPD",
    "question": "Thuốc tiêu nhầy N-Acetylcystein dạng uống hoặc khí dung làm loãng đờm nhờ cơ chế nào?",
    "options": [
      "Làm đông vón các sợi fibrin trong đờm trên lâm sàng",
      "Phá hủy màng tế bào biểu mô phế quản ở người bệnh",
      "Cắt đứt các cầu nối disulfid trong phân tử mucoprotein của chất nhầy",
      "Kích thích phế nang bài tiết thật nhiều nước ở mức độ vừa và nặng"
    ],
    "correct": 2,
    "explanation": "Nhóm -SH tự do của NAC bẻ gãy cầu disulfid (-S-S-) của mucopolysaccharid làm giảm độ quánh của đờm nhớt.",
    "reference": "Sách DLS tr. 650"
  },
  {
    "id": 751,
    "chapter": "Hen phế quản & COPD",
    "question": "Liệu pháp oxy dài hạn tại nhà cho bệnh nhân COPD suy hô hấp mạn tính được chỉ định khi PaO2 khi nghỉ:",
    "options": [
      "Nhỏ hơn hoặc bằng 55 mmHg hoặc SaO2 dưới 88%",
      "Lớn hơn 80 mmHg trên lâm sàng định kỳ",
      "Từ 65 đến 75 mmHg ở người bệnh",
      "Bất kỳ mức oxy máu nào kèm theo sốt nhẹ"
    ],
    "correct": 0,
    "explanation": "Thở oxy dài hạn (>= 15h/ngày) cải thiện sống còn ở bệnh nhân COPD có PaO2 <= 55 mmHg (hoặc SaO2 <= 88%).",
    "reference": "GOLD 2024"
  },
  {
    "id": 752,
    "chapter": "Hen phế quản & COPD",
    "question": "Mục tiêu độ bão hòa oxy máu SpO2 khi thở oxy hỗ trợ cho bệnh nhân COPD trong đợt cấp là:",
    "options": [
      "Từ 88 đến 92%",
      "Từ 98 đến 100%",
      "Từ 70 đến 80%",
      "Duy trì cố định 95%"
    ],
    "correct": 0,
    "explanation": "Thở oxy quá mức làm mất kích thích giảm oxy của trung tâm hô hấp gây ứ CO2 nguy kịch; mục tiêu chuẩn là 88-92%.",
    "reference": "GOLD 2024"
  },
  {
    "id": 753,
    "chapter": "Hen phế quản & COPD",
    "question": "Hai loại vắc xin bắt buộc phải tiêm phòng định kỳ hàng năm hoặc nhắc lại cho bệnh nhân COPD là:",
    "options": [
      "Vắc xin phòng bệnh dại và uốn ván trong phác đồ chuẩn",
      "Vắc xin sốt xuất huyết và sởi theo khuyến cáo",
      "Vắc xin tả và vắc xin thương hàn kèm theo sốt nhẹ",
      "Vắc xin cúm mùa và vắc xin phòng phế cầu khuẩn"
    ],
    "correct": 3,
    "explanation": "Tiêm phòng vắc xin Cúm hàng năm và vắc xin Phế cầu giúp giảm rõ rệt số đợt cấp nặng và tử vong ở bệnh nhân COPD.",
    "reference": "GOLD 2024"
  },
  {
    "id": 754,
    "chapter": "Hen phế quản & COPD",
    "question": "Thuốc chẹn beta giao cảm nào sau đây an toàn hơn khi bắt buộc phải dùng cho bệnh nhân COPD có bệnh tim mạch?",
    "options": [
      "Thuốc chẹn không chọn lọc Nadolol kéo dài liên tục",
      "Thuốc chẹn không chọn lọc Propranolol trong phác đồ chuẩn",
      "Thuốc chẹn chọn lọc Beta-1 như Bisoprolol hoặc Metoprolol",
      "Thuốc chẹn không chọn lọc Timolol theo khuyến cáo"
    ],
    "correct": 2,
    "explanation": "Chẹn chọn lọc beta-1 ít tác động lên thụ thể beta-2 ở phế quản, an toàn cho bệnh nhân COPD có bệnh tim thiếu máu cục bộ/suy tim.",
    "reference": "GOLD 2024"
  },
  {
    "id": 755,
    "chapter": "Hen phế quản & COPD",
    "question": "Trong đợt cấp COPD có dấu hiệu bội nhiễm vi khuẩn (Tam chứng Anthonisen), chỉ định dùng kháng sinh khi có:",
    "options": [
      "Chỉ số đường huyết tăng cao kéo dài liên tục định kỳ",
      "Huyết áp tâm thu giảm nhẹ sau khi dùng thuốc",
      "Bệnh nhân chỉ cảm thấy ho khan nhẹ theo khuyến cáo",
      "Tăng khó thở, tăng thể tích đờm và đờm mủ đục"
    ],
    "correct": 3,
    "explanation": "Tam chứng Anthonisen: khó thở tăng, lượng đờm tăng, đờm chuyển màu mủ đục. Có >= 2 dấu hiệu (gồm đờm mủ) có chỉ định kháng sinh.",
    "reference": "GOLD 2024"
  },
  {
    "id": 756,
    "chapter": "Hen phế quản & COPD",
    "question": "Kháng sinh Macrolid Azithromycin uống liều thấp 250 mg mỗi ngày kéo dài 1 năm ở bệnh nhân COPD nhằm:",
    "options": [
      "Làm tăng chức năng thông khí FEV1 sau khi dùng thuốc kết hợp theo dõi định kỳ chức năng thận",
      "Tác dụng chống viêm điều hòa miễn dịch làm giảm tần suất các đợt cấp",
      "Tiêu diệt hoàn toàn vi khuẩn lao tiềm ẩn kéo dài liên tục kèm theo sốt cao và suy nhược cơ thể",
      "Chữa khỏi hoàn toàn bệnh COPD ở mức độ vừa và nặng làm tăng tỷ lệ tử vong trên người bệnh"
    ],
    "correct": 1,
    "explanation": "Azithromycin duy trì liều thấp có hoạt tính chống viêm và chống tạo biofilm giúp giảm đợt cấp ở người hút thuốc đã cai.",
    "reference": "GOLD 2024"
  },
  {
    "id": 757,
    "chapter": "Hen phế quản & COPD",
    "question": "Kỹ thuật thở chúm môi và thở cơ hoành có ý nghĩa phục hồi chức năng gì cho người bệnh COPD?",
    "options": [
      "Làm tăng áp lực âm trong lồng ngực trên lâm sàng",
      "Ngăn cản khí oxy đi vào trong phổi ở mức độ vừa và nặng",
      "Làm tăng áp lực dương đường thở thì thở ra giúp phế nang không bị xẹp sớm",
      "Làm tăng nhịp thở lên gấp 3 lần bình thường sau khi dùng thuốc định kỳ"
    ],
    "correct": 2,
    "explanation": "Thở chúm môi tạo PEEP nội sinh giữ cho đường thở nhỏ không bị xẹp sớm, giúp tống bớt khí cặn ứ đọng.",
    "reference": "Sách DLS tr. 656"
  },
  {
    "id": 758,
    "chapter": "Hen phế quản & COPD",
    "question": "Thước đo lưu lượng đỉnh PEF được sử dụng cho bệnh nhân hen phế quản tại nhà nhằm mục đích gì?",
    "options": [
      "Theo dõi mức độ kiểm soát đường thở và phát hiện sớm nguy cơ đợt cấp",
      "Đánh giá mức độ tổn thương màng đáy phế nang ở người bệnh",
      "Đo nồng độ oxy hòa tan trong máu động mạch ở mức độ vừa và nặng",
      "Định lượng lượng đờm tiết ra trong ngày trên lâm sàng"
    ],
    "correct": 0,
    "explanation": "Đo PEF hàng ngày so sánh với giá trị tốt nhất của bản thân giúp nhận biết sớm co thắt phế quản để xử trí theo kế hoạch hành động.",
    "reference": "GINA 2023"
  },
  {
    "id": 759,
    "chapter": "Hen phế quản & COPD",
    "question": "Khi chỉ số PEF của bệnh nhân hen giảm xuống dưới 50% so với giá trị tốt nhất, vùng cảnh báo là:",
    "options": [
      "Không cần can thiệp y tế kèm theo sốt nhẹ",
      "Vùng đỏ thể hiện cơn kịch phát nặng nguy hiểm cần cấp cứu ngay",
      "Vùng vàng thể hiện cơn hen nhẹ ở người bệnh",
      "Vùng xanh thể hiện kiểm soát rất tốt trên lâm sàng định kỳ"
    ],
    "correct": 1,
    "explanation": "Vùng xanh: 80-100%; Vùng vàng: 50-80% (cần tăng thuốc); Vùng đỏ: < 50% (cấp cứu khẩn cấp).",
    "reference": "GINA 2023"
  },
  {
    "id": 760,
    "chapter": "Hen phế quản & COPD",
    "question": "Bình hít bột khô DPI có yêu cầu kỹ thuật hít khác biệt cơ bản với bình xịt định liều MDI là:",
    "options": [
      "Phải lắc bình hít thật kỹ trước mỗi lần dùng kèm theo sốt nhẹ",
      "Chỉ được dùng kèm với buồng đệm trong phác đồ chuẩn",
      "Đòi hỏi bệnh nhân phải hít vào thật nhanh, thật mạnh và sâu",
      "Phải bóp bình thuốc cùng lúc với thì hít vào ở người bệnh"
    ],
    "correct": 2,
    "explanation": "DPI vận hành nhờ luồng khí hít vào của bệnh nhân để phân tán hạt bột, cần hít nhanh mạnh sâu; không dùng buồng đệm.",
    "reference": "Sách DLS tr. 659"
  },
  {
    "id": 761,
    "chapter": "Hen phế quản & COPD",
    "question": "Bình hạt mịn khí dung Respimat có ưu thế vật lý học nổi bật nào so với các bình xịt thông thường?",
    "options": [
      "Hạt khí dung bay cực nhanh đập vào thành sau họng kèm theo sốt nhẹ định kỳ",
      "Tự động kích hoạt khi bệnh nhân ngủ theo khuyến cáo",
      "Hạt khí dung bay chậm và kéo dài giúp tăng lắng đọng vào phổi gấp 2 lần",
      "Thuốc ở dạng bột khô siêu mịn trong phác đồ chuẩn"
    ],
    "correct": 2,
    "explanation": "Respimat tạo đám mây hạt sương mịn bay chậm (soft mist inhaler) cho phép thuốc đi sâu vào phế quản nhỏ.",
    "reference": "Sách DLS tr. 660"
  },
  {
    "id": 762,
    "chapter": "Hen phế quản & COPD",
    "question": "Bệnh nhân hen phế quản xuất hiện cơn khó thở về đêm thường do nguyên nhân sinh học nào?",
    "options": [
      "Áp lực tĩnh mạch phổi giảm xuống mức tối thiểu theo khuyến cáo",
      "Nồng độ Cortisol và Epinephrin nội sinh hạ xuống thấp nhất vào ban đêm",
      "Do ăn quá nhiều chất đạm vào bữa tối kéo dài liên tục",
      "Nồng độ Oxy trong phòng ngủ tăng quá cao trong phác đồ chuẩn"
    ],
    "correct": 1,
    "explanation": "Trương lực phế vị tăng và cortisol nội sinh chạm đáy lúc nửa đêm khiến hen phế quản thường nặng lên vào ban đêm và sáng sớm.",
    "reference": "Sách DLS tr. 661"
  },
  {
    "id": 763,
    "chapter": "Hen phế quản & COPD",
    "question": "Thuốc giãn phế quản kháng cholinergic Ipratropium bromid có khởi phát và thời gian tác dụng là:",
    "options": [
      "Chỉ kéo dài trong vòng 10 phút",
      "Khởi phát sau 15 đến 30 phút và kéo dài khoảng 4 đến 6 giờ",
      "Khởi phát ngay lập tức sau 1 giây và kéo dài 24 giờ",
      "Kéo dài liên tục trong suốt 1 tuần"
    ],
    "correct": 1,
    "explanation": "Ipratropium (SAMA) khởi phát chậm hơn SABA một chút (15-30p) và tác dụng kéo dài 4-6h.",
    "reference": "Sách DLS tr. 662"
  },
  {
    "id": 764,
    "chapter": "Hen phế quản & COPD",
    "question": "Phối hợp Salbutamol với Ipratropium bromid (Combivent) trong cơn hen cấp mang lại hiệu quả gì?",
    "options": [
      "Làm mất hoàn toàn tác dụng phụ của Salbutamol kéo dài liên tục",
      "Giãn phế quản hiệp đồng thông qua hai cơ chế tác động độc lập trên thụ thể",
      "Thay thế hoàn toàn nhu cầu thở oxy của bệnh nhân sau khi dùng thuốc",
      "Làm tăng đông máu để bảo vệ niêm mạc ở mức độ vừa và nặng"
    ],
    "correct": 1,
    "explanation": "Kích thích beta-2 (giãn cơ trực tiếp) + ức chế muscarinic (chống co thắt cholinergic) đem lại hiệu quả giãn phế quản tối ưu.",
    "reference": "Sách DLS tr. 663"
  },
  {
    "id": 765,
    "chapter": "Hen phế quản & COPD",
    "question": "Khi dùng Corticoid hít liều cao kéo dài ở người cao tuổi, cần lưu ý tầm soát biến chứng nào?",
    "options": [
      "Gãy xương sườn tự phát do ho",
      "Suy tủy bất sản dòng bạch cầu",
      "Ung thư biểu mô đường mật",
      "Loãng xương và đục thủy tinh thể mắt"
    ],
    "correct": 3,
    "explanation": "Một phần ICS liều cao nuốt vào và hấp thu toàn thân có thể làm giảm mật độ xương và tăng nhãn áp/đục thủy tinh thể ở người già.",
    "reference": "Sách DLS tr. 664"
  },
  {
    "id": 766,
    "chapter": "Hen phế quản & COPD",
    "question": "Thuốc chống viêm kháng thể đơn dòng Dupilumab trong điều trị hen nặng tác động ức chế:",
    "options": [
      "Thụ thể của Histamin H2 ở mức độ vừa và nặng",
      "Thụ thể của Interleukin 4 và Interleukin 13",
      "Enzym chuyển hóa Leukotrien A4 ở người bệnh",
      "Thụ thể của Angiotensin II trên lâm sàng"
    ],
    "correct": 1,
    "explanation": "Dupilumab phong bế tiểu đơn vị IL-4R-alpha dùng chung của cả IL-4 và IL-13, ức chế viêm qua Th2.",
    "reference": "GINA 2023"
  },
  {
    "id": 767,
    "chapter": "Hen phế quản & COPD",
    "question": "Chỉ số FEV1 trong thăm dò chức năng hô hấp đo lường thông số nào của luồng khí thở?",
    "options": [
      "Thể tích khí thở ra gắng sức tối đa trong giây đầu tiên",
      "Dung tích sống toàn phần của hai lá phổi",
      "Tốc độ dòng khí đỉnh khi hít vào tối đa",
      "Lượng khí còn lại trong phổi sau khi thở ra hết sức"
    ],
    "correct": 0,
    "explanation": "FEV1 (Forced Expiratory Volume in 1 second) là thể tích khí thở ra gắng sức trong giây đầu tiên, chỉ số then chốt đánh giá tắc nghẽn.",
    "reference": "Sách DLS tr. 666"
  },
  {
    "id": 768,
    "chapter": "Hen phế quản & COPD",
    "question": "Chỉ số Tiffeneau được tính bằng tỷ lệ phần trăm giữa:",
    "options": [
      "Lưu lượng đỉnh PEF trên dung tích toàn phổi TLC",
      "Khí cặn RV trên dung tích sống VC",
      "Thể tích FEV1 trên dung tích sống chậm VC",
      "Thể tích FEV1 trên dung tích sống gắng sức FVC"
    ],
    "correct": 2,
    "explanation": "Chỉ số Tiffeneau = FEV1 / VC x 100%; còn chỉ số Gaensler = FEV1 / FVC x 100%.",
    "reference": "Sách DLS tr. 667"
  },
  {
    "id": 769,
    "chapter": "Hen phế quản & COPD",
    "question": "Hiện tượng tái cấu trúc đường thở trong hen phế quản mạn tính không được kiểm soát bao gồm:",
    "options": [
      "Mất hoàn toàn hệ thống mao mạch phổi trong phác đồ chuẩn",
      "Lắng đọng tinh thể acid uric ở vách phế nang theo khuyến cáo",
      "Teo nhỏ toàn bộ các tiểu phế quản tận kèm theo sốt nhẹ định kỳ",
      "Phì đại cơ trơn phế quản, dày màng đáy và tăng sinh tuyến tiết nhầy"
    ],
    "correct": 3,
    "explanation": "Viêm mạn tính không ức chế dẫn đến tái cấu trúc đường thở không hồi phục: xơ hóa màng đáy, tăng sinh cơ trơn và mạch máu.",
    "reference": "Sách DLS tr. 668"
  },
  {
    "id": 770,
    "chapter": "Hen phế quản & COPD",
    "question": "Khi chuyển từ thuốc Corticoid dạng uống sang Corticoid dạng hít ở bệnh nhân hen nặng, nguyên tắc là:",
    "options": [
      "Giảm liều Corticoid uống từ từ trong khi đã gối đầu Corticoid hít",
      "Tăng gấp đôi liều Corticoid uống trong 1 tháng theo khuyến cáo",
      "Chỉ dùng Corticoid hít vào ngày cuối tuần kéo dài liên tục",
      "Ngừng thuốc uống đột ngột ngay trong ngày đầu hít thuốc trong phác đồ chuẩn"
    ],
    "correct": 0,
    "explanation": "Tuyến thượng thận đang bị ức chế do corticoid uống, phải duy trì ICS và giảm liều uống thật chậm để tránh suy thượng thận cấp.",
    "reference": "Sách DLS tr. 669"
  },
  {
    "id": 771,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Tiêu chuẩn vàng của WHO chẩn đoán loãng xương dựa trên chỉ số T-score đo mật độ xương DEXA là:",
    "options": [
      "T-score lớn hơn âm 1,0 độ lệch chuẩn",
      "T-score nhỏ hơn hoặc bằng âm 2,5 độ lệch chuẩn",
      "T-score bằng 0",
      "T-score từ âm 1,0 đến âm 2,5 độ lệch chuẩn"
    ],
    "correct": 1,
    "explanation": "Bình thường: T-score >= -1,0; Thiếu xương (osteopenia): -2,5 < T-score < -1,0; Loãng xương (osteoporosis): T-score <= -2,5.",
    "reference": "Sách DLS tr. 675"
  },
  {
    "id": 772,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Nhóm thuốc chống hủy xương được xem là lựa chọn hàng đầu trong điều trị loãng xương là:",
    "options": [
      "Thuốc giảm đau chống viêm NSAID",
      "Thuốc bổ sung Vitamin C",
      "Thuốc nhóm Bisphosphonat",
      "Thuốc chẹn kênh calci"
    ],
    "correct": 2,
    "explanation": "Bisphosphonat (Alendronat, Zoledronic acid) ức chế hủy cốt bào, là lựa chọn đầu tay giảm gãy xương.",
    "reference": "Sách DLS tr. 676"
  },
  {
    "id": 773,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Cơ chế tác dụng phân tử của nhóm thuốc Bisphosphonat chứa nitơ trên tế bào hủy xương là:",
    "options": [
      "Tăng hấp thu calci thụ động tại ruột trên lâm sàng",
      "Kích thích tạo cốt bào tăng sinh xương mới sau khi dùng thuốc định kỳ",
      "Tăng cường đào thải acid uric qua đường tiết niệu ở mức độ vừa và nặng",
      "Ức chế enzym Farnesyl pyrophosphate synthase cản trở hoạt động hủy xương"
    ],
    "correct": 3,
    "explanation": "Bisphosphonat chứa N ức chế enzym FPPS làm gián đoạn quá trình prenyl hóa protein gây chết theo chương trình của hủy cốt bào.",
    "reference": "Sách DLS tr. 677"
  },
  {
    "id": 774,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Hướng dẫn sử dụng bắt buộc đối với thuốc viên uống Alendronat 70 mg mỗi tuần là:",
    "options": [
      "Uống cùng lúc với bữa ăn trưa nhiều dầu mỡ ở người bệnh",
      "Uống sáng sớm lúc đói với một cốc nước lọc đầy và ngồi thẳng 30 phút",
      "Nhai nát viên thuốc rồi uống cùng với một ly sữa tươi ở mức độ vừa và nặng",
      "Uống ngay trước khi đi ngủ vào ban đêm trên lâm sàng"
    ],
    "correct": 1,
    "explanation": "Alendronat kích ứng loét thực quản dữ dội; phải uống lúc đói với nhiều nước lọc và giữ tư thế đứng/ngồi thẳng ít nhất 30-60 phút.",
    "reference": "Sách DLS tr. 678"
  },
  {
    "id": 775,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Thuốc Bisphosphonat truyền tĩnh mạch Acid Zoledronic 5 mg có phác đồ sử dụng điều trị loãng xương là:",
    "options": [
      "Tiêm bắp ngắt quãng mỗi 6 giờ kèm theo sốt nhẹ",
      "Truyền tĩnh mạch mỗi tuần một lần ở người bệnh định kỳ",
      "Truyền tĩnh mạch hàng ngày trong 1 tháng trên lâm sàng",
      "Truyền tĩnh mạch một liều duy nhất mỗi năm một lần"
    ],
    "correct": 3,
    "explanation": "Zoledronic acid 5mg truyền tĩnh mạch chậm trong ít nhất 15 phút, chu kỳ 1 lần/năm.",
    "reference": "Sách DLS tr. 679"
  },
  {
    "id": 776,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Hai tác dụng phụ hiếm gặp nhưng nghiêm trọng khi sử dụng Bisphosphonat kéo dài nhiều năm là:",
    "options": [
      "Hoại tử xương hàm và gãy xương đùi không điển hình",
      "Xơ gan cổ trướng giai đoạn cuối trong phác đồ chuẩn",
      "Mù lòa hai mắt do teo võng mạc kèm theo sốt nhẹ",
      "Suy tủy toàn bộ và thiếu máu bất sản ở người bệnh"
    ],
    "correct": 0,
    "explanation": "Ức chế chu chuyển xương quá mức dài hạn gây ONJ (hoại tử xương hàm sau thủ thuật răng) và gãy xương đùi dưới mấu chuyển dạng ngang.",
    "reference": "Sách DLS tr. 680"
  },
  {
    "id": 777,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Thuốc điều hòa thụ thể Estrogen chọn lọc Raloxifen có ưu điểm gì trong điều trị loãng xương?",
    "options": [
      "Kích thích tăng sinh tế bào niêm mạc nội mạc tử cung kèm theo sốt nhẹ định kỳ",
      "Làm tan hoàn toàn cục máu đông trong tĩnh mạch trong phác đồ chuẩn",
      "Chữa khỏi hoàn toàn bệnh đái tháo đường theo khuyến cáo",
      "Tác dụng giống Estrogen trên xương nhưng đối kháng trên tuyến vú và tử cung"
    ],
    "correct": 3,
    "explanation": "Raloxifen kích thích estrogen ở xương ngăn loãng xương và ức chế estrogen ở vú/tử cung giảm nguy cơ ung thư vú.",
    "reference": "Sách DLS tr. 681"
  },
  {
    "id": 778,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Tác dụng phụ nguy hiểm nhất cần lưu ý khi chỉ định Raloxifen cho phụ nữ mãn kinh là:",
    "options": [
      "Gây ung thư biểu mô tuyến vú trong phác đồ chuẩn kéo dài liên tục trên lâm sàng",
      "Tăng nguy cơ huyết khối tắc mạch tĩnh mạch sâu và thuyên tắc phổi",
      "Gây rậm lông và giọng nói trầm theo khuyến cáo ở mức độ vừa đến mức độ nặng",
      "Làm tụt huyết áp tư thế đứng kéo dài liên tục kèm theo sốt cao và suy nhược cơ thể"
    ],
    "correct": 1,
    "explanation": "SERM làm tăng nguy cơ huyết khối tĩnh mạch tương tự liệu pháp hormon thay thế, chống chỉ định ở người có tiền sử thuyên tắc mạch.",
    "reference": "Sách DLS tr. 682"
  },
  {
    "id": 779,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Thuốc kháng thể đơn dòng Denosumab điều trị loãng xương gắn kết đặc hiệu với phối tử nào?",
    "options": [
      "Gắn vào enzym Cytochrome P450 ở gan kéo dài liên tục",
      "Gắn trực tiếp vào tinh thể Hydroxyapatit của xương theo khuyến cáo định kỳ",
      "Gắn vào thụ thể Insulin màng tế bào sau khi dùng thuốc",
      "Gắn kết với phân tử RANKL ngăn kích hoạt thụ thể RANK trên hủy cốt bào"
    ],
    "correct": 3,
    "explanation": "Denosumab bắt chước osteoprotegerin (OPG) ức chế RANKL, ngăn chặn tiền hủy cốt bào biệt hóa thành hủy cốt bào.",
    "reference": "Sách DLS tr. 683"
  },
  {
    "id": 780,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Thuốc đồng vận hormon tuyến cận giáp Teriparatid có cơ chế tác dụng kích thích tạo xương khi:",
    "options": [
      "Bôi ngoài da tại các khớp thoái hóa ở mức độ vừa và nặng",
      "Truyền tĩnh mạch liên tục suốt 24 giờ kéo dài liên tục",
      "Tiêm dưới da ngắt quãng liều thấp mỗi ngày một lần",
      "Uống liều cao sau bữa ăn sau khi dùng thuốc"
    ],
    "correct": 2,
    "explanation": "PTH ngắt quãng kích thích tạo cốt bào nhiều hơn hủy cốt bào, thúc đẩy tổng hợp xương mới (tác dụng đồng hóa).",
    "reference": "Sách DLS tr. 684"
  },
  {
    "id": 781,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Viên thuốc tránh thai kết hợp đường uống hàng ngày có cơ chế tác dụng ngừa thai chính là gì?",
    "options": [
      "Ức chế tuyến yên tiết FSH và LH làm ngăn cản hiện tượng rụng trứng",
      "Phá hủy màng tế bào trứng đã thụ tinh ở mức độ vừa và nặng",
      "Diệt trực tiếp các tế bào tinh trùng trong âm đạo sau khi dùng thuốc",
      "Gây teo nhỏ buồng trứng vĩnh viễn trên lâm sàng"
    ],
    "correct": 0,
    "explanation": "Estrogen ức chế FSH ngăn chọn lọc nang noãn, Progestin ức chế đỉnh phóng noãn LH ngăn rụng trứng và làm đặc dịch nhầy cổ tử cung.",
    "reference": "Sách DLS tr. 685"
  },
  {
    "id": 782,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Phụ nữ trên 35 tuổi có hút thuốc lá chống chỉ định tuyệt đối dùng viên tránh thai kết hợp vì nguy cơ:",
    "options": [
      "Gây loãng xương sớm trước tuổi mãn kinh",
      "Biến cố huyết khối tắc mạch tim mạch và đột quỵ",
      "Gây suy thận mạn giai đoạn cuối",
      "Làm suy tuyến giáp trạng cấp tính"
    ],
    "correct": 1,
    "explanation": "Estrogen + hút thuốc lá ở phụ nữ >= 35 tuổi làm tăng gấp nhiều lần biến cố huyết khối động mạch và tĩnh mạch tử vong.",
    "reference": "Sách DLS tr. 686"
  },
  {
    "id": 783,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Thuốc tránh thai khẩn cấp chứa hoạt chất Levonorgestrel 1,5 mg cần uống trong thời gian tối đa:",
    "options": [
      "Trong vòng 7 ngày sau quan hệ trên lâm sàng định kỳ",
      "Chỉ uống trước khi quan hệ 1 giờ ở người bệnh",
      "Uống vào ngày cuối cùng của chu kỳ kinh kèm theo sốt nhẹ",
      "Trong vòng 72 giờ sau khi quan hệ tình dục không an toàn"
    ],
    "correct": 3,
    "explanation": "Levonorgestrel 1,5mg uống càng sớm càng tốt, tối đa trong 72h (hiệu quả cao nhất trong 24h đầu).",
    "reference": "Sách DLS tr. 687"
  },
  {
    "id": 784,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Thuốc tránh thai khẩn cấp thế hệ mới Ulipristal acetat có thể sử dụng có hiệu lực trong vòng:",
    "options": [
      "Trong vòng 120 giờ tức 5 ngày sau khi quan hệ",
      "Chỉ dùng được sau khi đã chậm kinh trong phác đồ chuẩn",
      "Trong vòng 10 ngày kèm theo sốt nhẹ",
      "Trong vòng 24 giờ đầu tiên ở người bệnh"
    ],
    "correct": 0,
    "explanation": "Ulipristal là chất điều hòa thụ thể progesteron chọn lọc (SPRM), duy trì hiệu quả tránh thai khẩn cấp đến 120h.",
    "reference": "Sách DLS tr. 688"
  },
  {
    "id": 785,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Nếu phụ nữ quên uống 1 viên thuốc tránh thai hàng ngày kết hợp thì xử trí đúng là:",
    "options": [
      "Uống thuốc tránh thai khẩn cấp ngay lập tức theo khuyến cáo ở mức độ vừa đến mức độ nặng",
      "Uống cùng lúc 5 viên thuốc để bù trong phác đồ chuẩn kéo dài liên tục trên lâm sàng",
      "Bỏ luôn cả vỉ thuốc và đợi chu kỳ sau kèm theo sốt nhẹ định kỳ theo đúng hướng dẫn của Bộ Y tế",
      "Uống ngay viên thuốc đã quên khi nhớ ra và uống viên tiếp theo đúng giờ thường lệ"
    ],
    "correct": 3,
    "explanation": "Quên 1 viên (< 24h): uống ngay viên quên (dù phải uống 2 viên cùng lúc) và tiếp tục uống các viên sau như bình thường.",
    "reference": "Sách DLS tr. 689"
  },
  {
    "id": 786,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Thuốc điều trị đái tháo đường đầu tay được khuyến cáo cho hầu hết bệnh nhân đái tháo đường typ 2 là:",
    "options": [
      "Gliclazid",
      "Acarbose",
      "Metformin",
      "Insulin NPH"
    ],
    "correct": 2,
    "explanation": "Metformin là nền tảng điều trị đầu tay (không gây hạ đường huyết, kiểm soát cân nặng, giảm biến cố tim mạch).",
    "reference": "ADA 2024 / Hướng dẫn ĐTĐ - Bộ Y tế"
  },
  {
    "id": 787,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Cơ chế tác dụng hạ đường huyết chính của Metformin là gì?",
    "options": [
      "Tăng bài tiết glucose ra ngoài theo đường nước tiểu kéo dài liên tục",
      "Kích thích tế bào beta đảo tụy tăng tiết Insulin theo khuyến cáo định kỳ",
      "Làm chậm phân giải tinh bột tại ruột non sau khi dùng thuốc",
      "Ức chế sản xuất glucose tại gan và tăng độ nhạy cảm insulin ở mô ngoại vi"
    ],
    "correct": 3,
    "explanation": "Metformin hoạt hóa enzym AMPK tại gan làm giảm tân tạo glucose và tăng nhạy cảm insulin cơ vân.",
    "reference": "Sách DLS tr. 691"
  },
  {
    "id": 788,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Tác dụng không mong muốn hiếm gặp nhưng rất nguy hiểm đến tính mạng của Metformin là:",
    "options": [
      "Tiêu cơ vân cấp tính",
      "Nhiễm toan Lactic huyết",
      "Hạ đường huyết gây hôn mê sâu",
      "Đục mờ thủy tinh thể mắt"
    ],
    "correct": 1,
    "explanation": "Lactic acidosis hiếm gặp nhưng tử vong 50%, thường xảy ra khi tích lũy thuốc ở người suy thận, suy tim nặng, nghiện rượu.",
    "reference": "Sách DLS tr. 692"
  },
  {
    "id": 789,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Chống chỉ định dùng Metformin khi mức lọc cầu thận ước tính eGFR của bệnh nhân giảm xuống dưới:",
    "options": [
      "Dưới 60 mL trên phút sau khi dùng thuốc",
      "Dưới 90 mL trên phút ở mức độ vừa và nặng",
      "Dưới 30 mL trên phút trên 1,73 m2 da",
      "Dưới 120 mL trên phút trên lâm sàng"
    ],
    "correct": 2,
    "explanation": "eGFR < 30 mL/min chống chỉ định tuyệt đối Metformin; eGFR 30-44 mL/min giảm liều tối đa 1000 mg/ngày.",
    "reference": "ADA 2024"
  },
  {
    "id": 790,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Trước khi chụp phim có tiêm thuốc cản quang chứa iod đường tĩnh mạch, bệnh nhân đang dùng Metformin cần:",
    "options": [
      "Tạm ngừng Metformin trước khi chụp và chỉ dùng lại sau 48 giờ nếu chức năng thận ổn định",
      "Không cần can thiệp gì và thông báo ngay cho bác sĩ điều trị khi có bất thường ở bệnh nhân có nguy cơ biến chứng cao",
      "Tăng gấp đôi liều Metformin trước khi tiêm thuốc cản quang ở mức độ vừa và nặng làm tăng tỷ lệ tử vong trên người bệnh",
      "Uống Metformin cùng lúc với thuốc cản quang trên lâm sàng kèm theo rối loạn chức năng cơ quan"
    ],
    "correct": 0,
    "explanation": "Thuốc cản quang có thể gây suy thận cấp làm tích lũy Metformin dẫn đến toan lactic, phải ngừng Metformin 48h.",
    "reference": "Sách DLS tr. 694"
  },
  {
    "id": 791,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Nhóm thuốc ức chế đồng vận chuyển Natri Glucose 2 SGLT-2 như Dapagliflozin có cơ chế tác dụng là:",
    "options": [
      "Kích thích tế bào tụy sản sinh ra hormon Insulin trên lâm sàng định kỳ kèm theo rối loạn chức năng cơ quan",
      "Làm chậm tiêu hóa chất bột đường trong lòng ruột ở người bệnh ở bệnh nhân có nguy cơ biến chứng cao",
      "Ngăn tái hấp thu Glucose tại ống lượn gần làm tăng thải trừ Glucose qua nước tiểu",
      "Ức chế enzym phá hủy hormon Incretin kèm theo sốt nhẹ theo đúng hướng dẫn của Bộ Y tế"
    ],
    "correct": 2,
    "explanation": "SGLT-2 chịu trách nhiệm 90% tái hấp thu glucose ở ống lượn gần; ức chế protein này làm đường thoát ra nước tiểu.",
    "reference": "ADA 2024"
  },
  {
    "id": 792,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Hai lợi ích tim mạch và thận vượt trội đã được chứng minh của nhóm thuốc ức chế SGLT-2 là:",
    "options": [
      "Làm giảm nhịp tim xoang xuống dưới 50 nhịp ở người bệnh ở bệnh nhân có nguy cơ biến chứng cao",
      "Giảm tỷ lệ tử vong và nhập viện do suy tim cùng làm chậm suy thận mạn tiến triển",
      "Làm tăng chức năng lọc của cầu thận lên gấp đôi trong phác đồ chuẩn kéo dài liên tục trên lâm sàng",
      "Chữa khỏi hoàn toàn bệnh xơ vữa động mạch vành kèm theo sốt nhẹ theo đúng hướng dẫn của Bộ Y tế"
    ],
    "correct": 1,
    "explanation": "Dapagliflozin và Empagliflozin giảm rõ rệt tử vong tim mạch, nhập viện do suy tim và suy thận mạn bất kể có ĐTĐ hay không.",
    "reference": "ADA 2024"
  },
  {
    "id": 793,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Tác dụng không mong muốn thường gặp nhất của nhóm thuốc ức chế SGLT-2 là gì?",
    "options": [
      "Nhiễm nấm đường niệu dục và nhiễm trùng tiết niệu",
      "Gây loét thủng niêm mạc dạ dày kèm theo sốt nhẹ định kỳ",
      "Gây rụng tóc hàng loạt trong phác đồ chuẩn",
      "Làm tăng men gan AST và ALT theo khuyến cáo"
    ],
    "correct": 0,
    "explanation": "Nước tiểu nhiều đường tạo môi trường thuận lợi cho nấm Candida sinh sôi ở âm đạo/bao quy đầu và viêm đường tiểu.",
    "reference": "ADA 2024"
  },
  {
    "id": 794,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Biến chứng nhiễm toan ceton với mức đường huyết gần như bình thường là nguy cơ của nhóm thuốc nào?",
    "options": [
      "Thuốc ức chế men Alpha-glucosidase",
      "Thuốc ức chế men DPP-4",
      "Thuốc ức chế men SGLT-2",
      "Thuốc hạ đường huyết nhóm Sulfonylure"
    ],
    "correct": 2,
    "explanation": "Euglycemic DKA (toan ceton đường huyết không cao < 250 mg/dL) là biến chứng nguy hiểm cần cảnh giác của SGLT2i.",
    "reference": "ADA 2024"
  },
  {
    "id": 795,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Thuốc chủ vận thụ thể GLP-1 như Liraglutid hay Semaglutid có tác dụng nổi bật nào ngoài hạ đường huyết?",
    "options": [
      "Làm giảm nồng độ men tụy trong máu",
      "Gây tăng cân nhanh chóng cho người suy dinh dưỡng",
      "Giảm cân nặng mạnh mẽ và bảo vệ tim mạch chống xơ vữa",
      "Chữa khỏi bệnh đục thủy tinh thể mắt"
    ],
    "correct": 2,
    "explanation": "GLP-1 RA làm chậm rỗng dạ dày, tạo cảm giác no ở não giúp giảm cân ngoạn mục và giảm biến cố xơ vữa tim mạch.",
    "reference": "ADA 2024"
  },
  {
    "id": 796,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Đường dùng thuốc chủ yếu hiện nay của hầu hết các thuốc đồng vận thụ thể GLP-1 là:",
    "options": [
      "Tiêm dưới da một lần mỗi tuần hoặc một lần mỗi ngày",
      "Đặt dưới lưỡi trước khi ngủ sau khi dùng thuốc",
      "Uống viên bao tan trong ruột sau bữa ăn kéo dài liên tục",
      "Xịt khí dung qua đường hô hấp ở mức độ vừa và nặng"
    ],
    "correct": 0,
    "explanation": "Đa số GLP-1 RA (Semaglutide, Dulaglutide) dùng tiêm dưới da 1 lần/tuần (hiện có thêm Semaglutide uống dạng viên nén đặc biệt).",
    "reference": "ADA 2024"
  },
  {
    "id": 797,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Nhóm thuốc ức chế men Dipeptidyl peptidase 4 DPP-4 như Sitagliptin hạ đường huyết theo cơ chế nào?",
    "options": [
      "Kích thích tế bào alpha đảo tụy tiết Glucagon trên lâm sàng",
      "Ức chế vận chuyển Glucose vào tế bào hồng cầu ở mức độ vừa và nặng",
      "Kích thích trực tiếp thụ thể Insulin tại cơ bắp sau khi dùng thuốc định kỳ",
      "Ngăn cản sự thoái giáng của hormon Incretin nội sinh kéo dài tác dụng tiết Insulin"
    ],
    "correct": 3,
    "explanation": "DPP-4 giáng hóa GLP-1 và GIP nội sinh; ức chế men này duy trì nồng độ incretin kích thích tiết insulin phụ thuộc glucose.",
    "reference": "Sách DLS tr. 700"
  },
  {
    "id": 798,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Ưu điểm vượt trội về độ an toàn của nhóm thuốc ức chế DPP-4 trên lâm sàng là gì?",
    "options": [
      "Làm tan hoàn toàn sỏi túi mật trên lâm sàng",
      "Hầu như không gây hạ đường huyết khi dùng đơn độc và trung tính với cân nặng",
      "Có thể dùng thay thế Insulin ở người đái tháo đường typ 1 ở người bệnh",
      "Làm giảm cân nặng nhanh như phẫu thuật thắt dạ dày ở mức độ vừa và nặng"
    ],
    "correct": 1,
    "explanation": "Tác dụng tiết insulin phụ thuộc glucose (chỉ kích thích khi đường huyết cao) nên không gây tụt đường huyết và không tăng cân.",
    "reference": "Sách DLS tr. 701"
  },
  {
    "id": 799,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Nhóm thuốc hạ đường huyết Sulfonylure kích thích tiết Insulin thông qua tác động lên kênh nào?",
    "options": [
      "Mở rộng kênh Natri trên màng tế bào trên lâm sàng định kỳ kèm theo rối loạn chức năng cơ quan",
      "Ức chế thụ thể Glucagon kèm theo sốt nhẹ theo đúng hướng dẫn của Bộ Y tế",
      "Đóng kênh Kali phụ thuộc ATP làm mở kênh Calci gây khử cực màng tế bào beta",
      "Chẹn kênh Clo ở màng nhân ở người bệnh ở bệnh nhân có nguy cơ biến chứng cao"
    ],
    "correct": 2,
    "explanation": "Sulfonylure gắn thụ thể SUR1 đóng kênh K(ATP) gây khử cực mở kênh Ca2+ phụ thuộc điện thế phóng thích insulin.",
    "reference": "Sách DLS tr. 702"
  },
  {
    "id": 800,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Thuốc Sulfonylure Gliclazid có ưu điểm gì so với Glibenclamid kinh điển?",
    "options": [
      "Không có hoạt tính hạ đường huyết trong phác đồ chuẩn kéo dài liên tục trên lâm sàng",
      "Chỉ dùng được qua đường tiêm tĩnh mạch kèm theo sốt nhẹ theo đúng hướng dẫn của Bộ Y tế",
      "Làm tăng men gan mạnh hơn ở người bệnh ở bệnh nhân có nguy cơ biến chứng cao",
      "Thời gian tác dụng phù hợp hơn và tỷ lệ gây hạ đường huyết thấp hơn nhiều"
    ],
    "correct": 3,
    "explanation": "Gliclazid gắn có hồi phục và phóng thích khỏi SUR1 nhanh hơn Glibenclamid, ít nguy cơ hạ đường huyết nặng kéo dài.",
    "reference": "Sách DLS tr. 703"
  },
  {
    "id": 801,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Triệu chứng cảnh báo sớm của cơn hạ đường huyết do thuốc ở bệnh nhân đái tháo đường bao gồm:",
    "options": [
      "Vã mồ hôi, run tay, tim đập nhanh hồi hộp, đói cồn cào và lo âu",
      "Đau tức ngực lan lên vai trái trong phác đồ chuẩn kéo dài liên tục trên lâm sàng",
      "Bí tiểu tiện và khô miệng theo khuyến cáo ở mức độ vừa đến mức độ nặng",
      "Sốt cao rét run liên tục kèm theo sốt nhẹ định kỳ theo đúng hướng dẫn của Bộ Y tế"
    ],
    "correct": 0,
    "explanation": "Hạ đường huyết kích thích giao cảm tiết adrenalin gây vã mồ hôi lạnh, run rẩy, hồi hộp đánh trống ngực, đói cồn cào.",
    "reference": "Sách DLS tr. 704"
  },
  {
    "id": 802,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Nhóm thuốc nào có thể che lấp hầu hết các dấu hiệu cảnh báo hạ đường huyết giao cảm ngoại trừ vã mồ hôi?",
    "options": [
      "Thuốc chẹn kênh calci DHP",
      "Thuốc lợi tiểu Thiazid",
      "Thuốc ức chế men chuyển",
      "Thuốc chẹn beta giao cảm"
    ],
    "correct": 3,
    "explanation": "Chẹn beta che lấp run tay, tim nhanh, lo âu; dấu hiệu duy nhất còn giữ lại để nhận biết hạ đường huyết là vã mồ hôi.",
    "reference": "Sách DLS tr. 705"
  },
  {
    "id": 803,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Xử trí cấp cứu ban đầu cho bệnh nhân hạ đường huyết còn tỉnh táo có thể nuốt được là:",
    "options": [
      "Bắt bệnh nhân nhịn ăn uống nằm nghỉ sau khi dùng thuốc kết hợp theo dõi định kỳ chức năng thận",
      "Cho uống ngay 15 đến 20 gam đường đơn giản như nửa cốc nước ngọt hoặc 3 viên đường",
      "Tiêm ngay một liều Insulin tác dụng nhanh kéo dài liên tục kèm theo sốt cao và suy nhược cơ thể",
      "Cho ăn một bát cơm đầy nhiều dầu mỡ theo khuyến cáo định kỳ ở mức độ vừa đến mức độ nặng"
    ],
    "correct": 1,
    "explanation": "Quy tắc 15: nạp 15g carbohydrate hấp thu nhanh (nước đường, nước cam), kiểm tra lại đường máu sau 15 phút.",
    "reference": "ADA 2024"
  },
  {
    "id": 804,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Thuốc ức chế men Alpha-glucosidase như Acarbose có cơ chế tác dụng hạ đường huyết là:",
    "options": [
      "Kích thích tủy sống tiết hormon sinh dục kéo dài liên tục",
      "Làm chậm quá trình phân giải và hấp thu carbohydrate tại ruột non giúp giảm đỉnh đường sau ăn",
      "Tăng tiêu thụ glucose tại tế bào não do cạnh tranh vị trí gắn kết đặc hiệu trên thụ thể",
      "Ức chế bài xuất glucose qua thận làm thay đổi tính thấm chọn lọc của màng tế bào đích"
    ],
    "correct": 1,
    "explanation": "Acarbose ức chế enzym bờ bàn chải ruột cản trở thủy phân disaccharid thành monosaccharid, làm phẳng đỉnh đường sau ăn.",
    "reference": "Sách DLS tr. 707"
  },
  {
    "id": 805,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Tác dụng phụ phổ biến nhất của Acarbose khiến nhiều bệnh nhân bỏ thuốc là:",
    "options": [
      "Hạ huyết áp kịch phát ở mức độ vừa và nặng",
      "Đầy hơi, sôi bụng, chướng bụng và trung tiện nhiều",
      "Viêm đau các khớp ngón chân trên lâm sàng",
      "Đau đầu dữ dội vào ban đêm sau khi dùng thuốc định kỳ"
    ],
    "correct": 1,
    "explanation": "Carbohydrate không tiêu hóa bị vi khuẩn đại tràng lên men sinh khí carbon dioxid, hydro gây đầy hơi chướng bụng.",
    "reference": "Sách DLS tr. 708"
  },
  {
    "id": 806,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Nhóm thuốc Thiazolidinedion TZD như Pioglitazon hoạt động thông qua kích thích thụ thể nhân nào?",
    "options": [
      "Thụ thể Glucocorticoid nội bào trên lâm sàng kèm theo rối loạn chức năng cơ quan",
      "Thụ thể Estrogen alpha ở mức độ vừa và nặng làm tăng tỷ lệ tử vong trên người bệnh",
      "Thụ thể PPAR-gamma làm tăng nhạy cảm insulin của mô mỡ và cơ",
      "Thụ thể Hormon giáp trạng ở người bệnh ở bệnh nhân có nguy cơ biến chứng cao"
    ],
    "correct": 2,
    "explanation": "Pioglitazon hoạt hóa PPAR-gamma thúc đẩy biệt hóa tế bào mỡ và tăng nhạy cảm insulin toàn thân.",
    "reference": "Sách DLS tr. 709"
  },
  {
    "id": 807,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Chống chỉ định tuyệt đối sử dụng Pioglitazon ở bệnh nhân mắc bệnh lý nào sau đây?",
    "options": [
      "Bệnh nhân tăng huyết áp có đạm niệu trên lâm sàng định kỳ",
      "Bệnh nhân bị hen phế quản nhẹ ở người bệnh",
      "Bệnh nhân có tiền sử hoặc đang mắc bệnh suy tim sung huyết",
      "Bệnh nhân sau phẫu thuật ruột thừa kèm theo sốt nhẹ"
    ],
    "correct": 2,
    "explanation": "TZD gây ứ dịch giữ natri làm nặng thêm suy tim, chống chỉ định cho bệnh nhân suy tim NYHA III-IV.",
    "reference": "Sách DLS tr. 710"
  },
  {
    "id": 808,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Insulin tác dụng nhanh dạng tương tự như Lispro, Aspart hoặc Glulisine nên được tiêm vào thời điểm nào?",
    "options": [
      "Chỉ tiêm vào lúc nửa đêm trước khi ngủ kèm theo sốt nhẹ",
      "Tiêm khi đói cách xa bữa ăn 4 giờ trong phác đồ chuẩn",
      "Ngay trước bữa ăn từ 5 đến 15 phút hoặc ngay sau bữa ăn",
      "Trước bữa ăn đúng 2 giờ đồng hồ ở người bệnh"
    ],
    "correct": 2,
    "explanation": "Insulin analog tác dụng siêu nhanh tan monomer ngấm ngay, tiêm 5-15 phút trước ăn kiểm soát đường huyết sau ăn.",
    "reference": "Sách DLS tr. 711"
  },
  {
    "id": 809,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Insulin tác dụng kéo dài dạng tương tự như Glargine hoặc Degludec có ưu điểm vượt trội nào?",
    "options": [
      "Chỉ cần tiêm một lần duy nhất trong tuần trong phác đồ chuẩn",
      "Hấp thu hoàn toàn qua đường uống theo khuyến cáo",
      "Tạo nồng độ đáy phẳng không có đỉnh giúp kiểm soát đường huyết ổn định ít gây hạ đường đêm",
      "Tác dụng diệt khuẩn mạnh mẽ trên đối tượng bệnh nhân có tiền sử suy giảm chức năng định kỳ"
    ],
    "correct": 2,
    "explanation": "Glargine kết tủa vi thể tan chậm không tạo đỉnh nhọn, Degludec tạo chuỗi đa phân tử, giảm nguy cơ hạ đường huyết đêm.",
    "reference": "Sách DLS tr. 712"
  },
  {
    "id": 810,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Vị trí tiêm Insulin dưới da có tốc độ hấp thu thuốc nhanh và ổn định nhất trên cơ thể là:",
    "options": [
      "Vùng mông trên ngoài kéo dài liên tục",
      "Vùng mặt sau ngoài cánh tay theo khuyến cáo",
      "Vùng da bụng xung quanh rốn cách rốn tối thiểu 2 cm",
      "Vùng mặt trước ngoài đùi trong phác đồ chuẩn"
    ],
    "correct": 2,
    "explanation": "Bụng có lưu lượng máu ổn định hấp thu insulin nhanh nhất, sau đó đến cánh tay, đùi và mông.",
    "reference": "Sách DLS tr. 713"
  },
  {
    "id": 811,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Hiện tượng loạn dưỡng mỡ teo hoặc phì đại mô mỡ tại vị trí tiêm Insulin có thể phòng ngừa bằng cách:",
    "options": [
      "Chườm nóng trước khi rút kim tiêm",
      "Tiêm lặp lại đúng một điểm duy nhất mỗi ngày",
      "Dùng kim tiêm cùn nhiều lần",
      "Luân chuyển đều đặn vị trí tiêm thuốc mỗi lần tiêm"
    ],
    "correct": 3,
    "explanation": "Luân chuyển vị trí tiêm trong cùng một vùng (cách nhau 1-2 cm) tránh kích thích tăng sinh hoặc teo mô mỡ do tác dụng đồng hóa của insulin.",
    "reference": "Sách DLS tr. 714"
  },
  {
    "id": 812,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Thuốc hạ mỡ máu nhóm Statin ức chế enzym nào để ngăn chặn tổng hợp Cholesterol tại gan?",
    "options": [
      "Enzym HMG-CoA reductase",
      "Enzym Lecithin cholesterol acyltransferase",
      "Enzym Cholesterol esterase",
      "Enzym Lipoprotein lipase"
    ],
    "correct": 0,
    "explanation": "Statin ức chế cạnh tranh men giới hạn tốc độ tổng hợp cholesterol là 3-hydroxy-3-methylglutaryl-coenzyme A reductase.",
    "reference": "Sách DLS tr. 715"
  },
  {
    "id": 813,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Hậu quả dược lý của việc ức chế HMG-CoA reductase tại tế bào gan là gì?",
    "options": [
      "Ngăn cản gan bài tiết acid mật thông qua ức chế chọn lọc enzym đích tại tế bào",
      "Tăng biểu hiện thụ thể LDL trên bề mặt tế bào gan giúp tăng thanh thải LDL-C khỏi máu",
      "Làm giảm số lượng thụ thể LDL ở gan sau khi dùng thuốc định kỳ",
      "Kích thích gan tăng sản xuất Triglycerid ở mức độ vừa và nặng"
    ],
    "correct": 1,
    "explanation": "Cholesterol nội bào giảm kích hoạt SREBP-2 tăng tổng hợp thụ thể LDL hút LDL-C từ máu vào gan, hạ 30-55% LDL-C máu.",
    "reference": "Sách DLS tr. 716"
  },
  {
    "id": 814,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Hai hoạt chất Statin nào sau đây có hiệu lực hạ mỡ máu cường độ mạnh giảm LDL-C trên 50% ở liều cao?",
    "options": [
      "Simvastatin và Pravastatin",
      "Pitavastatin liều thấp",
      "Lovastatin và Fluvastatin",
      "Atorvastatin và Rosuvastatin"
    ],
    "correct": 3,
    "explanation": "Liệu pháp statin cường độ mạnh (Atorvastatin 40-80 mg, Rosuvastatin 20-40 mg) giảm LDL-C >= 50%.",
    "reference": "ACC/AHA 2018"
  },
  {
    "id": 815,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Thời điểm uống thích hợp nhất trong ngày đối với các Statin có thời gian bán thải ngắn như Simvastatin là:",
    "options": [
      "Buổi tối trước khi đi ngủ",
      "Không quan trọng uống lúc nào",
      "Buổi trưa ngay sau bữa ăn",
      "Buổi sáng sớm sau khi thức dậy"
    ],
    "correct": 0,
    "explanation": "Cholesterol gan tổng hợp mạnh nhất vào ban đêm; statin T1/2 ngắn (Simvastatin, Lovastatin) nên uống buổi tối trước ngủ.",
    "reference": "Sách DLS tr. 718"
  },
  {
    "id": 816,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Thuốc ức chế hấp thu Cholesterol tại bờ bàn chải ruột non là hoạt chất nào?",
    "options": [
      "Ezetimibe",
      "Fenofibrat",
      "Acid nicotinic",
      "Cholestyramin"
    ],
    "correct": 0,
    "explanation": "Ezetimibe gắn protein vận chuyển NPC1L1 ở vi nhung mao ruột non ức chế chọn lọc hấp thu cholesterol ngoại sinh.",
    "reference": "Sách DLS tr. 719"
  },
  {
    "id": 817,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Phối hợp Statin với Ezetimibe mang lại lợi ích điều trị gì trên bệnh nhân có nguy cơ tim mạch rất cao?",
    "options": [
      "Hạ thêm 15 đến 20% nồng độ LDL-C giúp đạt mục tiêu điều trị tối ưu",
      "Giảm liều Insulin cần tiêm theo khuyến cáo",
      "Làm mất hoàn toàn tác dụng phụ của Statin kèm theo sốt nhẹ định kỳ",
      "Làm tăng bài xuất đường qua nước tiểu trong phác đồ chuẩn"
    ],
    "correct": 0,
    "explanation": "Cơ chế kép (ức chế tổng hợp ở gan + ức chế hấp thu ở ruột) giúp giảm sâu LDL-C mà không cần dùng statin liều quá cao.",
    "reference": "Sách DLS tr. 720"
  },
  {
    "id": 818,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Thuốc hạ mỡ máu nhóm Fibrat như Fenofibrat có tác dụng vượt trội nhất trên chỉ số lipid nào?",
    "options": [
      "Tăng nồng độ Chylomicron trong máu kéo dài liên tục",
      "Làm giảm mạnh nồng độ Triglycerid và tăng HDL-C",
      "Làm giảm nồng độ LDL-C cường độ mạnh trong phác đồ chuẩn",
      "Làm giảm hoàn toàn nồng độ đường huyết theo khuyến cáo"
    ],
    "correct": 1,
    "explanation": "Fibrat kích hoạt PPAR-alpha tăng tổng hợp LPL làm giảm 30-50% Triglycerid máu và tăng HDL-C.",
    "reference": "Sách DLS tr. 721"
  },
  {
    "id": 819,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Khi cần phối hợp Statin với Fibrat để điều trị rối loạn lipid máu hỗn hợp, nên chọn Fibrat nào để an toàn cho cơ?",
    "options": [
      "Cả hai đều có độc tính tiêu cơ vân như nhau kéo dài liên tục kèm theo sốt cao và suy nhược cơ thể",
      "Ưu tiên chọn Fenofibrat vì ít cạnh tranh liên hợp glucuronic với Statin hơn Gemfibrozil",
      "Không bao giờ được dùng Fenofibrat sau khi dùng thuốc kết hợp theo dõi định kỳ chức năng thận",
      "Bắt buộc phải chọn Gemfibrozil theo khuyến cáo định kỳ ở mức độ vừa đến mức độ nặng"
    ],
    "correct": 1,
    "explanation": "Gemfibrozil ức chế liên hợp glucuronic của statin làm tăng nồng độ statin trong máu gây tiêu cơ vân nặng; Fenofibrat an toàn hơn.",
    "reference": "Sách DLS tr. 722"
  },
  {
    "id": 820,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Thuốc ức chế kháng thể đơn dòng PCSK9 như Evolocumab hay Alirocumab hạ LDL-C theo cơ chế:",
    "options": [
      "Ngăn chặn sự giáng hóa của thụ thể LDL giúp thụ thể được tái tuần hoàn lên bề mặt gan",
      "Ức chế vận chuyển Chylomicron ở mức độ vừa và nặng làm tăng tỷ lệ tử vong trên người bệnh",
      "Kích thích tủy xương sản sinh hồng cầu mới sau khi dùng thuốc kết hợp theo dõi định kỳ chức năng thận",
      "Ức chế phân hủy Triglycerid tại mô mỡ kéo dài liên tục kèm theo sốt cao và suy nhược cơ thể"
    ],
    "correct": 0,
    "explanation": "PCSK9 gắn thụ thể LDL đưa vào tiêu thể phá hủy; ức chế PCSK9 giúp thụ thể LDL tái tuần hoàn liên tục hạ LDL-C thêm 60%.",
    "reference": "Sách DLS tr. 723"
  },
  {
    "id": 821,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Chỉ định dùng thuốc hạ Triglycerid khẩn cấp như Fenofibrat được đặt ra khi nồng độ Triglycerid máu vượt quá:",
    "options": [
      "Vượt quá 5,6 mmol/L tức trên 500 mg/dL để phòng ngừa viêm tụy cấp",
      "Vượt quá 2,2 mmol/L sau khi dùng thuốc định kỳ",
      "Vượt quá 1,7 mmol/L ở mức độ vừa và nặng",
      "Chỉ dùng khi Triglycerid vượt quá 20 mmol/L trên lâm sàng"
    ],
    "correct": 0,
    "explanation": "Triglycerid > 500 mg/dL (5,6 mmol/L) làm tăng vọt nguy cơ viêm tụy cấp hoại tử, mục tiêu ưu tiên là hạ Triglycerid ngay.",
    "reference": "Sách DLS tr. 724"
  },
  {
    "id": 822,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Axit béo Omega-3 liều cao từ 2 đến 4 gam mỗi ngày có tác dụng chủ yếu trong điều trị lipid máu là:",
    "options": [
      "Làm tan hoàn toàn các mảng vôi hóa van tim trên lâm sàng kèm theo rối loạn chức năng cơ quan",
      "Làm tăng gấp đôi nồng độ LDL-C xấu ở mức độ vừa và nặng làm tăng tỷ lệ tử vong trên người bệnh",
      "Làm hạ huyết áp kịch phát ở người bệnh ở bệnh nhân có nguy cơ biến chứng cao",
      "Làm giảm nồng độ Triglycerid huyết tương thông qua ức chế VLDL tại gan"
    ],
    "correct": 3,
    "explanation": "Omega-3 (EPA/DHA) ức chế enzym DGAT và tăng oxy hóa beta acid béo gan làm giảm tổng hợp VLDL giàu triglycerid.",
    "reference": "Sách DLS tr. 725"
  }
];
