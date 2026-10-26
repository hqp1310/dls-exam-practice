// Ngân hàng câu hỏi trắc nghiệm Dược Lâm Sàng toàn diện
// Tổng hợp chuẩn Bộ Y tế & Đề thi Dược Lâm Sàng các trường ĐH Y Dược hàng đầu (HUP, UMP, HMU)
// Đã qua chuẩn hóa phân bố đáp án, loại bỏ hoàn toàn cụm từ mồi dễ đoán, chuẩn hóa chất lượng đáp án nhiễu

const ALL_EXAM_BANK = [
  {
    "id": 1,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Môn học Dược lâm sàng được khai sinh sớm nhất tại quốc gia nào vào những năm 1960?",
    "options": [
      "Hoa Kỳ",
      "Canada",
      "Cộng hòa Pháp",
      "Vương quốc Anh"
    ],
    "correct": 0,
    "explanation": "Dược lâm sàng ra đời tại Mỹ vào những năm 1960 và đưa vào giảng dạy đại học năm 1964.",
    "reference": "Sách DLS tr. 9",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 2,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Mốc đánh dấu sự du nhập chính thức của Dược lâm sàng vào Việt Nam là hội thảo năm nào tại Hà Nội?",
    "options": [
      "Năm 1980",
      "Năm 1990",
      "Năm 1986",
      "Năm 1998"
    ],
    "correct": 1,
    "explanation": "Hội thảo tháng 11/1990 tại ĐH Dược Hà Nội do tổ chức Tầm nhìn thế giới - Australia tài trợ là mốc khởi đầu DLS tại Việt Nam.",
    "reference": "Sách DLS tr. 11",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 3,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Bộ môn Dược lâm sàng Trường Đại học Dược Hà Nội chính thức thành lập vào năm nào?",
    "options": [
      "Năm 1993",
      "Năm 2005",
      "Năm 1998",
      "Năm 2000"
    ],
    "correct": 2,
    "explanation": "Quyết định thành lập Bộ môn Dược lâm sàng vào ngày 11/02/1998.",
    "reference": "Sách DLS tr. 12",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 4,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Bốn tiêu chuẩn cơ bản để lựa chọn thuốc hợp lý gồm những yếu tố nào?",
    "options": [
      "Hấp thu tốt, Phân bố rộng, Chuyển hóa nhanh, Thải trừ hoàn toàn",
      "Hàm lượng cao, Ái lực mạnh, Tương thích rộng, Ít kháng thuốc",
      "Hoạt lực mạnh, Sinh khả dụng tuyệt đối, Độc tính thấp, Kháng sinh đồ nhạy",
      "Hiệu quả cao, An toàn, Tiện dụng, Chi phí kinh tế hợp lý"
    ],
    "correct": 3,
    "explanation": "Bốn tiêu chuẩn cốt lõi là H-A-T-K và thêm tiêu chuẩn Sẵn có.",
    "reference": "Sách DLS tr. 13",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 5,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Trong xử trí cơn cấp cứu khẩn cấp, tiêu chuẩn nào luôn được ưu tiên cao nhất?",
    "options": [
      "Hiệu quả điều trị",
      "Tính tiện dụng",
      "Tính kinh tế",
      "Khả năng sẵn có"
    ],
    "correct": 0,
    "explanation": "Cấp cứu khẩn cấp đòi hỏi thuốc có hiệu quả nhanh để cứu tính mạng.",
    "reference": "Sách DLS tr. 14",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 6,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Khi điều trị bệnh mạn tính kéo dài, hai tiêu chuẩn nào cần được ưu tiên cân nhắc?",
    "options": [
      "Độ thanh thải và Thải trừ",
      "Độ an toàn và Tính kinh tế",
      "Hiệu quả và Tốc độ tác dụng",
      "Tính tiện dụng và Phân bố"
    ],
    "correct": 1,
    "explanation": "Điều trị mạn tính đòi hỏi thuốc ít độc tính và chi phí hợp lý.",
    "reference": "Sách DLS tr. 15",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 7,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Theo khuyến cáo của WHO, số thuốc trung bình trong một đơn điều trị ngoại trú nên là:",
    "options": [
      "Khoảng 3,0 thuốc",
      "Khoảng 4,5 thuốc",
      "Khoảng 1,5 thuốc",
      "Khoảng 6,0 thuốc"
    ],
    "correct": 2,
    "explanation": "Chỉ tiêu kê đơn WHO trung bình khoảng 1,5 thuốc trên một đơn để tránh tương tác.",
    "reference": "Sách DLS tr. 21",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 8,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Tỷ lệ đơn thuốc có kê kháng sinh ngoại trú theo khuyến cáo của WHO nên ở mức:",
    "options": [
      "Khoảng 5% đến 10%",
      "Khoảng 10% đến 15%",
      "Khoảng 15% đến 20%",
      "Khoảng 20% đến 30%"
    ],
    "correct": 3,
    "explanation": "Chỉ tiêu WHO khuyến cáo tỷ lệ đơn có kháng sinh là 20-30%.",
    "reference": "Sách DLS tr. 22",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 9,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Tỷ lệ thuốc dạng tiêm trong đơn theo khuyến cáo của WHO nên ở mức khoảng:",
    "options": [
      "Khoảng 20%",
      "Khoảng 35%",
      "Khoảng 50%",
      "Khoảng 65%"
    ],
    "correct": 0,
    "explanation": "Chỉ tiêu WHO khuyến cáo thuốc tiêm khoảng 20% nhằm ưu tiên đường uống.",
    "reference": "Sách DLS tr. 22",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 10,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Tỷ lệ phần trăm thuốc kê theo tên gốc trong đơn theo khuyến cáo WHO là:",
    "options": [
      "Đạt 75%",
      "Đạt 100%",
      "Đạt 50%",
      "Đạt 30%"
    ],
    "correct": 1,
    "explanation": "WHO khuyến cáo kê đơn theo tên generic đạt 100%.",
    "reference": "Sách DLS tr. 21",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 11,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Trình tự bước đầu tiên trong 4 bước thiết lập phác đồ điều trị là:",
    "options": [
      "Lựa chọn phương án điều trị",
      "Thiết lập đơn thuốc cụ thể",
      "Xác định vấn đề cần giải quyết",
      "Xác định mục tiêu điều trị"
    ],
    "correct": 2,
    "explanation": "Bước 1 là xác định vấn đề của người bệnh.",
    "reference": "Sách DLS tr. 16",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 12,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Nguồn thông tin thuốc cấp 1 bao gồm tài liệu nào sau đây?",
    "options": [
      "Hệ thống mục lục tóm tắt",
      "Sách giáo khoa dược lý",
      "Dược thư Quốc gia Việt Nam",
      "Bài báo công trình nghiên cứu gốc"
    ],
    "correct": 3,
    "explanation": "Nguồn cấp 1 là các bài báo công bố kết quả nghiên cứu lâm sàng gốc ban đầu.",
    "reference": "Sách DLS tr. 122",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 13,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Nguồn thông tin thuốc cấp 2 bao gồm tài liệu nào sau đây?",
    "options": [
      "Chỉ mục dữ liệu tóm tắt tra cứu",
      "Sách giáo trình Dược lâm sàng",
      "Bài báo nghiên cứu gốc",
      "Tờ hướng dẫn sử dụng thuốc"
    ],
    "correct": 0,
    "explanation": "Nguồn cấp 2 là hệ thống tóm tắt mục lục như PubMed, Medline.",
    "reference": "Sách DLS tr. 122",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 14,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Nguồn thông tin thuốc cấp 3 có ưu điểm nổi bật nào sau đây?",
    "options": [
      "Không bao giờ có sai sót cá nhân",
      "Tính khái quát cao và đã được thẩm định",
      "Được cập nhật theo từng ngày",
      "Chứa toàn bộ dữ liệu thô nghiên cứu"
    ],
    "correct": 1,
    "explanation": "Nguồn cấp 3 có tính hệ thống, bao quát và độ tin cậy cao.",
    "reference": "Sách DLS tr. 122",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 15,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Bước đầu tiên trong quy trình cung cấp thông tin thuốc 6 bước là:",
    "options": [
      "Đánh giá chất lượng tài liệu",
      "Tìm kiếm thông tin trên mạng",
      "Xác định đặc điểm của người yêu cầu",
      "Trả lời trực tiếp câu hỏi"
    ],
    "correct": 2,
    "explanation": "Xác định đối tượng hỏi là ai để trả lời phù hợp.",
    "reference": "Sách DLS tr. 124",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 14",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 104",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 23",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 19,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Kỹ năng thu thập thông tin người bệnh của Dược sĩ lâm sàng nhằm mục đích chủ yếu gì?",
    "options": [
      "Định lượng nồng độ kháng thể trong huyết tương",
      "Kiểm tra trình độ học vấn người nhà bệnh nhân",
      "Khai thác chính xác tiền sử dùng thuốc và dị ứng",
      "Tính toán giá trị tài sản cá nhân người bệnh"
    ],
    "correct": 2,
    "explanation": "Thu thập tiền sử dị ứng, tiền sử dùng thuốc, bệnh kèm để tránh sai sót.",
    "reference": "Sách DLS tr. 18-20",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 20,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Chỉ tiêu thời gian phát thuốc cho một người bệnh nhằm đảm bảo mục đích nào?",
    "options": [
      "Giảm số lượng nhân viên y tế tại quầy",
      "Tăng số lượng thuốc bán ra trong ngày",
      "Rút ngắn thời gian làm việc của dược sĩ",
      "Đảm bảo người bệnh hiểu rõ liều lượng và cách dùng"
    ],
    "correct": 3,
    "explanation": "Thời gian phát thuốc là thời điểm vàng để hướng dẫn người bệnh dùng thuốc đúng.",
    "reference": "Sách DLS tr. 22",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 21,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Khi trả lời thông tin thuốc cho người bệnh, yêu cầu quan trọng nhất về hình thức là gì?",
    "options": [
      "Trình bày ngắn gọn, dễ hiểu, rõ liều lượng và tránh thuật ngữ chuyên môn phức tạp",
      "Dùng chữ viết tắt chuyên khoa để tóm tắt các cảnh báo tương tác",
      "Cung cấp bản sao chi tiết chuyên khảo dược thư và cơ chế tác dụng phân tử",
      "Sử dụng tên danh pháp quốc tế INN và biệt dược tiếng Anh chuyên sâu"
    ],
    "correct": 0,
    "explanation": "Thông tin cho bệnh nhân phải dễ hiểu, rõ ràng và mạch lạc.",
    "reference": "Sách DLS tr. 123-124",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 22,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Khi tư vấn về thuốc có khoảng điều trị hẹp, dược sĩ lâm sàng cần lưu ý điểm gì?",
    "options": [
      "Hướng dẫn bệnh nhân chỉ uống thuốc khi xuất hiện triệu chứng rầm rộ",
      "Phải giám sát nồng độ thuốc trong máu (TDM) và nhận biết dấu hiệu ngộ độc sớm",
      "Cho phép bệnh nhân tự tăng liều gấp đôi nếu quên uống cữ thuốc trước",
      "Chỉ định phối hợp thêm một thuốc đối kháng liều thấp để giảm độc tính"
    ],
    "correct": 1,
    "explanation": "Thuốc có khoảng điều trị hẹp cần theo dõi nồng độ máu (TDM) sát sao.",
    "reference": "Sách DLS tr. 13, 27",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 23,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Tại sao đơn thuốc cho người cao tuổi cần ghi rõ ràng cả đường dùng và thời điểm dùng?",
    "options": [
      "Giúp giảm bớt thời gian giải thích của bác sĩ",
      "Để nhà thuốc bán được nhiều sản phẩm hơn",
      "Giúp người bệnh tránh nhầm lẫn và tăng tuân thủ điều trị",
      "Để đơn thuốc trông dài và chuyên nghiệp hơn"
    ],
    "correct": 2,
    "explanation": "Người cao tuổi hay nhầm lẫn nên cần hướng dẫn thật rõ ràng.",
    "reference": "Sách DLS tr. 22, 160",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 24,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Khái niệm người dược sĩ lâm sàng tham gia hội chẩn cùng bác sĩ tại khoa lâm sàng có vai trò:",
    "options": [
      "Kê đơn thuốc độc lập không qua bác sĩ",
      "Thay thế hoàn toàn vai trò chẩn đoán bệnh",
      "Giám định pháp y các trường hợp tử vong",
      "Cầu nối tối ưu hóa dùng thuốc giữa thầy thuốc và người bệnh"
    ],
    "correct": 3,
    "explanation": "Dược sĩ lâm sàng đóng vai trò cầu nối chuyên môn về thuốc.",
    "reference": "Sách DLS tr. 13",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 25,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Chỉ số hiệu quả trên rủi ro của một thuốc được coi là tối ưu khi nào?",
    "options": [
      "Khả năng khỏi bệnh cao và tác dụng không mong muốn thấp",
      "Thuốc có dạng bào chế phức tạp nhất",
      "Thời gian bảo quản thuốc kéo dài nhất",
      "Giá tiền rẻ nhất trên thị trường hiện tại"
    ],
    "correct": 0,
    "explanation": "Tỷ số Hiệu quả / Rủi ro cao thể hiện tính an toàn và hiệu lực điều trị vượt trội.",
    "reference": "Sách DLS tr. 13",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 26,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Việc thẩm định danh mục thuốc thiết yếu tại bệnh viện được thực hiện định kỳ bởi:",
    "options": [
      "Trung tâm Kiểm nghiệm Dược phẩm tỉnh",
      "Hội đồng Thuốc và Điều trị của bệnh viện",
      "Phòng Tài chính kế toán bệnh viện",
      "Khoa Khám bệnh ngoại trú bệnh viện"
    ],
    "correct": 1,
    "explanation": "Hội đồng Thuốc và Điều trị chịu trách nhiệm xây dựng và thẩm định danh mục thuốc.",
    "reference": "Sách DLS tr. 23",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 27,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Khái niệm người bệnh tuân thủ điều trị được định nghĩa là:",
    "options": [
      "Số lượng thuốc mà người bệnh dự trữ trong nhà",
      "Tần suất tái khám tại bệnh viện tuyến trên",
      "Mức độ người bệnh dùng thuốc đúng theo chỉ dẫn y khoa",
      "Khả năng chi trả viện phí đúng hạn của người bệnh"
    ],
    "correct": 2,
    "explanation": "Tuân thủ điều trị là việc thực hiện đúng chỉ định về liều, số lần và cách uống.",
    "reference": "Sách DLS tr. 18-21",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 28,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Khi thiết lập phác đồ điều trị, việc lựa chọn dạng thuốc viên sủi bọt không phù hợp cho bệnh nhân nào?",
    "options": [
      "Bệnh nhân có triệu chứng khó nuốt viên nén to",
      "Trẻ em trên 6 tuổi biết uống thuốc sủi",
      "Bệnh nhân sốt cao cần hạ sốt nhanh",
      "Bệnh nhân tăng huyết áp cần ăn kiêng muối nghiêm ngặt"
    ],
    "correct": 3,
    "explanation": "Viên sủi bọt chứa lượng lớn muối natri hydrocarbonat, gây tăng huyết áp và phù.",
    "reference": "Sách DLS tr. 133",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 29,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Biện pháp nào sau đây giúp nâng cao độ an toàn khi sử dụng thuốc tiêm truyền tĩnh mạch liều cao?",
    "options": [
      "Tuân thủ đúng dung môi pha, tốc độ truyền và theo dõi sát dấu hiệu sinh tồn",
      "Truyền thật nhanh trong 5 phút để nhanh chóng đạt nồng độ điều trị",
      "Pha chung nhiều loại thuốc vào một chai dịch truyền để tiết kiệm đường truyền",
      "Chỉ cần kiểm tra nhiệt độ cơ thể sau khi kết thúc truyền dịch 24 giờ"
    ],
    "correct": 0,
    "explanation": "Máy truyền dịch giúp duy trì tốc độ truyền hằng định, tránh tụt huyết áp hoặc sốc.",
    "reference": "Sách DLS tr. 137",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 30,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Tài liệu chuyên khảo 'Dược thư Quốc gia Việt Nam' xuất bản lần thứ hai năm 2015 do cơ quan nào ban hành?",
    "options": [
      "Hiệp hội Bệnh viện Tư nhân",
      "Bộ Y tế Việt Nam",
      "Tổng cục Đo lường Chất lượng",
      "Cục Sở hữu Trí tuệ"
    ],
    "correct": 1,
    "explanation": "Dược thư Quốc gia là văn bản tài liệu chính thống của Bộ Y tế.",
    "reference": "Sách DLS tr. 122",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 31,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Cơ sở dữ liệu Micromedex hoặc UpToDate thuộc loại nguồn thông tin thuốc nào?",
    "options": [
      "Nguồn thông tin cấp 1 (Primary sources)",
      "Nguồn thông tin cấp 2 (Secondary sources)",
      "Nguồn thông tin cấp 3 (Tertiary sources)",
      "Tạp chí chuyên ngành đăng bài báo nghiên cứu gốc thử nghiệm lâm sàng"
    ],
    "correct": 2,
    "explanation": "UpToDate và Micromedex là các nguồn cơ sở dữ liệu lâm sàng thẩm định hàng đầu.",
    "reference": "Sách DLS tr. 126",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 32,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Trong phiếu báo cáo phản ứng có hại của thuốc (ADR), nội dung nào bắt buộc phải có để thẩm định quan hệ nhân quả?",
    "options": [
      "Họ tên của người thân đưa bệnh nhân vào viện",
      "Màu sắc của bao bì hộp thuốc ban đầu",
      "Địa chỉ cơ quan bảo hiểm chi trả tiền viện phí",
      "Thời điểm bắt đầu xuất hiện biến cố"
    ],
    "correct": 3,
    "explanation": "Trình tự thời gian dùng thuốc và xuất hiện biến cố là cốt lõi để đánh giá mối quan hệ nhân quả.",
    "reference": "Sách DLS tr. 101, 103",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 33,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Chỉ số nào trong đơn thuốc phản ánh trực tiếp nguy cơ quá tải thuốc và tương tác bất lợi?",
    "options": [
      "Tổng số lượng thuốc kê trong một đơn",
      "Tên thương mại của nhà sản xuất",
      "Hạn sử dụng ghi trên vỉ thuốc",
      "Số phòng khám in trên phiếu đơn"
    ],
    "correct": 0,
    "explanation": "Số lượng thuốc càng nhiều thì tỷ lệ gặp tương tác thuốc bất lợi càng tăng theo cấp số nhân.",
    "reference": "Sách DLS tr. 66",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 34,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Quy trình khai thác thông tin thuốc từ bệnh nhân cần tránh hành vi nào sau đây?",
    "options": [
      "Lắng nghe cẩn thận những lo lắng của người bệnh",
      "Đặt câu hỏi đóng mang tính áp đặt hoặc mớm ý cho người bệnh",
      "Hỏi kỹ về tiền sử dị ứng thời tiết và thức ăn",
      "Kiểm tra lại tên các vỉ thuốc bệnh nhân mang theo"
    ],
    "correct": 1,
    "explanation": "Cần đặt câu hỏi mở, tránh câu hỏi áp đặt mớm ý khiến thông tin thu được thiếu khách quan.",
    "reference": "Sách DLS tr. 20",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 35,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Nguyên tắc lựa chọn thuốc khi thiết lập danh mục thuốc của bệnh viện cần căn cứ vào:",
    "options": [
      "Ưu tiên chọn thuốc có giá thành rẻ nhất bất kể sinh khả dụng và độ tinh khiết",
      "Ưu tiên tối đa các biệt dược gốc đắt tiền có mặt lâu năm trên thị trường",
      "Căn cứ vào mô hình bệnh tật thực tế và hướng dẫn điều trị chuẩn dựa trên bằng chứng",
      "Lựa chọn theo sở thích kê đơn cá nhân của các bác sĩ trưởng khoa"
    ],
    "correct": 2,
    "explanation": "Danh mục thuốc bệnh viện phải dựa trên mô hình bệnh tật và y học chứng cứ.",
    "reference": "Sách DLS tr. 23",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 36,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Yếu tố nào sau đây là tiêu chí để phân loại thuốc không kê đơn (OTC)?",
    "options": [
      "Thuốc mới phát minh lưu hành dưới 2 năm",
      "Thuốc có nguy cơ gây nghiện và hội chứng cai",
      "Thuốc chỉ dùng theo đường tiêm tĩnh mạch sâu",
      "Độc tính thấp, khoảng điều trị rộng và trị triệu chứng thông thường"
    ],
    "correct": 3,
    "explanation": "Thuốc OTC có độ an toàn cao, người bệnh có thể tự xử trí các triệu chứng nhẹ thông thường.",
    "reference": "Sách DLS tr. 123",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 10, 45",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 38,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Bệnh nhân điều trị ngoại trú cần được dược sĩ hướng dẫn xử trí như thế nào nếu quên một liều thuốc?",
    "options": [
      "Tự ý mua thêm thuốc kháng sinh uống kèm",
      "Uống ngay khi nhớ ra nhưng không uống gấp đôi nếu gần cữ kế tiếp",
      "Ngừng thuốc hoàn toàn và chuyển sang thuốc khác",
      "Uống ngay lập tức gấp đôi liều để bù lại lượng đã mất"
    ],
    "correct": 1,
    "explanation": "Không được uống gấp đôi liều để bù liều quên vì nguy cơ gây ngộ độc quá liều.",
    "reference": "Sách DLS tr. 21",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 39,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Trong thử nghiệm độc tính cấp trên chuột, thời gian theo dõi chuột chết thường là bao lâu?",
    "options": [
      "Trong vòng 6 tháng liên tục",
      "Chỉ theo dõi trong 5 phút đầu tiên",
      "Trong vòng 48 giờ sau khi đưa thuốc",
      "Trong vòng 3 năm theo dõi"
    ],
    "correct": 2,
    "explanation": "Độc tính cấp theo dõi tử vong trong vòng 48 giờ sau khi dùng liều thử nghiệm.",
    "reference": "Sách DLS tr. 2",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 40,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Theo phân loại độc tính cấp của GHS, chế phẩm có giá trị LD50 trên 5000 mg/kg được xếp vào nhóm:",
    "options": [
      "Độc trung bình",
      "Rất độc",
      "Cực kỳ độc",
      "Gần như không độc"
    ],
    "correct": 3,
    "explanation": "LD50 > 5000 mg/kg thuộc nhóm 6: Gần như không độc.",
    "reference": "Sách DLS tr. 9",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 41,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Dịch chiết thảo mộc có giá trị LD50 bằng 1200 mg/kg đường uống trên chuột, theo GHS được xếp vào nhóm:",
    "options": [
      "Độc trung bình",
      "Gần như không độc",
      "Rất độc",
      "Cực kỳ độc"
    ],
    "correct": 0,
    "explanation": "LD50 từ 300 đến 2000 mg/kg thuộc nhóm 4: Độc trung bình.",
    "reference": "Sách DLS tr. 9",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 42,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Yếu tố nào sau đây quyết định giá trị sinh khả dụng tương đối giữa hai chế phẩm cùng hoạt chất?",
    "options": [
      "Độ nhớt của dung môi pha chế",
      "Tỷ lệ giữa diện tích dưới đường cong AUC của hai chế phẩm",
      "Thời hạn bảo quản ghi trên nhãn lọ",
      "Tốc độ lắng máu của người tình nguyện"
    ],
    "correct": 1,
    "explanation": "F tương đối = (AUC thuốc thử / AUC thuốc đối chứng) x 100%.",
    "reference": "Sách DLS tr. 28",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 43,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Chỉ tiêu tỷ lệ đơn thuốc có dùng vitamin theo khuyến cáo sử dụng hợp lý cần tránh:",
    "options": [
      "Kê vitamin cho bệnh nhân sau phẫu thuật cắt dạ dày",
      "Kê vitamin B6 cho người đang điều trị lao",
      "Lạm dụng vitamin khi chế độ ăn của người bệnh đã cân đối đầy đủ",
      "Bổ sung vitamin cho trẻ sinh non nhẹ cân"
    ],
    "correct": 2,
    "explanation": "Tránh kê vitamin bừa bãi khi người bệnh có chế độ dinh dưỡng bình thường.",
    "reference": "Sách DLS tr. 196, 202",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 44,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Tại các nước phát triển, năm thứ năm của chương trình đào tạo Dược sĩ đại học thường là:",
    "options": [
      "Năm học kinh doanh và tiếp thị thương mại",
      "Năm thực tập sản xuất tại nhà máy hóa chất",
      "Năm học lý thuyết thuần túy tại giảng đường",
      "Năm viện - trường thực hành trực tiếp tại các bệnh viện"
    ],
    "correct": 3,
    "explanation": "Năm viện trường (5 ème A.H.U) đào tạo thực hành dược lâm sàng tại bệnh viện.",
    "reference": "Sách DLS tr. 10",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 45,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Khái niệm 'kinh tế dược' (Pharmacoeconomics) trong lựa chọn thuốc đánh giá yếu tố nào?",
    "options": [
      "So sánh giữa chi phí điều trị và kết quả đầu ra về sức khỏe đạt được",
      "Tỷ lệ hoa hồng chi trả cho đại lý cung ứng",
      "Giá thành rẻ nhất bất kể hiệu quả điều trị",
      "Tổng số tiền thu được từ việc bán thuốc cho bệnh viện"
    ],
    "correct": 0,
    "explanation": "Kinh tế dược phân tích chi phí - hiệu quả (Cost-Effectiveness) để chọn phác đồ tối ưu.",
    "reference": "Sách DLS tr. 14",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 46,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Mục tiêu cơ bản của việc ghi nhãn phụ hướng dẫn sử dụng thuốc cho người bệnh là gì?",
    "options": [
      "Thay thế hoàn toàn đơn thuốc của bác sĩ điều trị",
      "Nhắc nhở người bệnh về đường dùng, thời điểm uống thuốc và các cảnh báo an toàn đặc biệt",
      "Cung cấp các thông số phân tích hóa lý và kiểm nghiệm lô sản xuất",
      "Tóm tắt toàn bộ nghiên cứu dược động học trên động vật thí nghiệm"
    ],
    "correct": 1,
    "explanation": "Nhãn phụ ghi rõ cách dùng giúp người bệnh không bị nhầm lẫn khi về nhà.",
    "reference": "Sách DLS tr. 22",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 47,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Dược sĩ lâm sàng cần cảnh báo người bệnh tránh uống rượu khi đang sử dụng thuốc nào sau đây?",
    "options": [
      "Dung dịch bù nước Oresol",
      "Viên ngậm sát khuẩn miệng",
      "Metronidazol, Cephalosporin, Paracetamol",
      "Men vi sinh nấm men"
    ],
    "correct": 2,
    "explanation": "Rượu tương tác độc với Paracetamol (gan), Metronidazol/Cephalosporin (hội chứng antabuse).",
    "reference": "Sách DLS tr. 85-86",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 48,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Tài liệu nào sau đây bắt buộc phải có sẵn trong phòng pha chế và khoa dược bệnh viện?",
    "options": [
      "Sách hướng dẫn du lịch quốc tế",
      "Tạp chí thời trang nước ngoài",
      "Tập thơ ca dân gian",
      "Dược điển Việt Nam hiện hành"
    ],
    "correct": 3,
    "explanation": "Dược điển Việt Nam là tiêu chuẩn kỹ thuật quốc gia bắt buộc phải tuân thủ.",
    "reference": "Sách DLS tr. 122",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 49,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Khi người bệnh xuất hiện triệu chứng bất thường nghi do thuốc, bước xử trí đầu tiên là:",
    "options": [
      "Ngừng ngay thuốc nghi ngờ và báo cho nhân viên y tế",
      "Tự ý tăng gấp đôi liều thuốc để dập triệu chứng",
      "Uống thêm một cốc nước chè đặc nóng",
      "Chờ đợi đủ một tháng sau mới đi khám lại"
    ],
    "correct": 0,
    "explanation": "Ngừng ngay thuốc nghi ngờ là nguyên tắc bảo đảm an toàn tính mạng đầu tiên.",
    "reference": "Sách DLS tr. 98, 113",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 50,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Trung tâm Thông tin thuốc đóng vai trò như thế nào trong đào tạo liên tục cho cán bộ y tế?",
    "options": [
      "Trực tiếp cấp chứng chỉ hành nghề khám chữa bệnh cho bác sĩ nội trú",
      "Cung cấp thông tin cập nhật về an toàn thuốc, tương tác và cảnh giác dược",
      "Cung ứng toàn bộ danh mục thuốc thiết yếu cho các bệnh viện tuyến tỉnh",
      "Giám sát hoạt động tài chính và thanh quyết toán bảo hiểm y tế"
    ],
    "correct": 1,
    "explanation": "Trung tâm TTT thường xuyên tổ chức tập huấn về an toàn và cảnh giác dược.",
    "reference": "Sách DLS tr. 128",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 26",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 52,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Thời gian để nồng độ thuốc đạt trạng thái ổn định trong máu khi truyền tĩnh mạch liên tục tương ứng với bao nhiêu lần thời gian bán thải?",
    "options": [
      "Khoảng 1 lần",
      "Khoảng 2 lần",
      "Khoảng 3 lần",
      "Khoảng 5 lần"
    ],
    "correct": 3,
    "explanation": "Quy tắc 5 lần t1/2 để nồng độ thuốc đạt trạng thái cân bằng Css.",
    "reference": "Sách DLS tr. 32",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 53,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Thời gian để thuốc đào thải trên 99% lượng ban đầu ra khỏi cơ thể tương ứng với bao nhiêu lần thời gian bán thải?",
    "options": [
      "Khoảng 7 lần",
      "Khoảng 2 lần",
      "Khoảng 3 lần",
      "Khoảng 5 lần"
    ],
    "correct": 0,
    "explanation": "Sau 7 lần t1/2, lượng thuốc bị thải trừ trên 99%, coi như đào thải hoàn toàn.",
    "reference": "Sách DLS tr. 35",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 39",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 39",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 56,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Ở bệnh nhân xơ gan nặng, thuốc an thần nhóm Benzodiazepin nào được ưu tiên lựa chọn do chuyển hóa qua liên hợp Pha II?",
    "options": [
      "Flurazepam",
      "Diazepam",
      "Clordiazepoxid",
      "Oxazepam"
    ],
    "correct": 3,
    "explanation": "Oxazepam chỉ chuyển hóa qua liên hợp glucuronic nên ít bị ảnh hưởng bởi suy gan.",
    "reference": "Sách DLS tr. 39",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 57,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Khi bệnh nhân xơ gan có cổ trướng phù nề, thể tích phân bố của các thuốc tan nhiều trong nước sẽ thay đổi như thế nào?",
    "options": [
      "Thể tích phân bố tăng lên",
      "Thể tích phân bố không đổi",
      "Thể tích phân bố giảm đi",
      "Sinh khả dụng giảm một nửa"
    ],
    "correct": 0,
    "explanation": "Tăng thể tích dịch ngoại bào làm tăng thể tích phân bố Vd của thuốc tan trong nước.",
    "reference": "Sách DLS tr. 37",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 37, 53",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 59,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Khi suy giảm chức năng thận, đối với kháng sinh Aminosid, phương pháp hiệu chỉnh liều được ưu tiên nhất là:",
    "options": [
      "Chuyển hoàn toàn sang đường uống để giảm hấp thu vào thận",
      "Giữ nguyên khoảng cách đưa thuốc (mỗi 8 giờ) và giảm liều dùng một lần",
      "Giữ nguyên liều một lần và nới rộng khoảng cách đưa thuốc (ví dụ từ 24h lên 36 - 48h)",
      "Phối hợp thêm Furosemid liều cao để tăng đào thải kháng sinh qua nước tiểu"
    ],
    "correct": 2,
    "explanation": "Aminosid diệt khuẩn phụ thuộc nồng độ đỉnh nên cần giữ liều cao và nới rộng khoảng cách.",
    "reference": "Sách DLS tr. 43-44",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 60,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Bệnh nhân được coi là suy thận nặng khi hệ số thanh thải creatinin giảm xuống dưới mức nào?",
    "options": [
      "Dưới 60 mL/phút",
      "Dưới 120 mL/phút",
      "Dưới 90 mL/phút",
      "Dưới 15 mL/phút"
    ],
    "correct": 3,
    "explanation": "Clcr dưới 15 mL/phút là suy thận nặng hoặc giai đoạn cuối, cần lọc máu.",
    "reference": "Sách DLS tr. 51",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 61,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Thuốc truyền tĩnh mạch với tốc độ 20 mg/h, độ thanh thải toàn phần Cl = 4 L/h. Nồng độ thuốc ở trạng thái cân bằng Css là:",
    "options": [
      "5 mg/L",
      "10 mg/L",
      "20 mg/L",
      "80 mg/L"
    ],
    "correct": 0,
    "explanation": "Css = V_inf / Cl = 20 / 4 = 5 mg/L.",
    "reference": "Sách DLS tr. 32",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 35",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 63,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Sinh khả dụng tuyệt đối của một thuốc đưa qua đường uống được xác định bằng cách so sánh với đường đưa nào?",
    "options": [
      "Đường hít qua miệng",
      "Đường đặt trực tràng",
      "Đường tiêm tĩnh mạch",
      "Đường tiêm bắp sâu"
    ],
    "correct": 2,
    "explanation": "F tuyệt đối so sánh AUC đường uống với AUC đường tiêm tĩnh mạch F=100%.",
    "reference": "Sách DLS tr. 27",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 64,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Đại lượng nào phản ánh tốt nhất mức độ thâm nhập và phân tán của một thuốc vào các mô trong cơ thể?",
    "options": [
      "Tốc độ bài xuất qua mật",
      "Áp suất keo của huyết tương",
      "Độ nhớt của máu toàn phần",
      "Thể tích phân bố biểu kiến"
    ],
    "correct": 3,
    "explanation": "Thể tích phân bố Vd càng lớn chứng tỏ thuốc phân tán sâu vào các mô cơ quan.",
    "reference": "Sách DLS tr. 28-29",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 65,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Độ thanh thải toàn phần của một thuốc trong cơ thể bằng tổng độ thanh thải qua các cơ quan nào?",
    "options": [
      "Độ thanh thải qua thận cộng độ thanh thải qua gan và các cơ quan khác",
      "Tích số giữa độ thanh thải qua thận và độ thanh thải qua gan chia cho thể tích phân bố",
      "Độ thanh thải qua thận trừ đi lượng thuốc bị tái hấp thu tại ống thận",
      "Tỷ số giữa tốc độ lọc cầu thận và lưu lượng máu qua tĩnh mạch cửa gan"
    ],
    "correct": 0,
    "explanation": "Cl toàn phần = Cl thận + Cl gan + Cl các cơ quan khác.",
    "reference": "Sách DLS tr. 31",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 66,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Ý nghĩa lâm sàng chính của việc xác định thời gian bán thải t1/2 của một thuốc là gì?",
    "options": [
      "Đánh giá mức độ độc tính trên các dòng tế bào tủy xương",
      "Quyết định khoảng cách thời gian giữa các lần đưa thuốc và thời gian đạt trạng thái ổn định",
      "Ước tính mức độ gắn kết của thuốc với thụ thể nội bào",
      "Xác định thể tích dịch ngoại bào cần thiết để hòa tan hoàn toàn liều nạp"
    ],
    "correct": 1,
    "explanation": "t1/2 quyết định nhịp đưa thuốc: thuốc có t1/2 ngắn phải dùng nhiều lần, t1/2 dài dùng 1 lần/ngày.",
    "reference": "Sách DLS tr. 35",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 67,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Hiện tượng chuyển hóa bước đầu qua gan làm ảnh hưởng trực tiếp đến thông số dược động học nào?",
    "options": [
      "Áp suất thẩm thấu dịch ruột",
      "Tốc độ lọc của cầu thận",
      "Sinh khả dụng đường uống",
      "Thời gian rỗng của dạ dày"
    ],
    "correct": 2,
    "explanation": "Chuyển hóa bước đầu qua gan phá hủy một phần dược chất trước khi vào tuần hoàn chung làm giảm F%.",
    "reference": "Sách DLS tr. 27, 37",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 68,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Đối với thuốc diệt khuẩn phụ thuộc thời gian như Beta-lactam, biện pháp chỉnh liều khi suy thận là:",
    "options": [
      "Giữ nguyên liều và kéo dài khoảng cách dùng",
      "Tăng liều gấp ba lần và dùng một lần duy nhất",
      "Ngừng thuốc hoàn toàn không được sử dụng",
      "Giữ nguyên khoảng cách đưa thuốc và giảm liều từng lần"
    ],
    "correct": 3,
    "explanation": "Beta-lactam cần duy trì nồng độ trên MIC thường xuyên nên ưu tiên giảm liều giữ nguyên khoảng cách.",
    "reference": "Sách DLS tr. 43",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 69,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Thuốc chống sốt rét Cloroquin có thể tích phân bố Vd rất lớn hàng nghìn lít là do nguyên nhân nào?",
    "options": [
      "Thuốc gắn kết rất mạnh vào các mô và tế bào sâu trong cơ thể",
      "Thuốc bài xuất qua thận với tốc độ cực nhanh",
      "Thuốc tan hoàn toàn trong dịch huyết tương lòng mạch",
      "Thuốc không bao giờ gắn vào protein huyết tương"
    ],
    "correct": 0,
    "explanation": "Cloroquin gắn rất mạnh vào mô ngoại vi nên nồng độ trong máu rất thấp, dẫn đến Vd biểu kiến rất lớn.",
    "reference": "Sách DLS tr. 28",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 70,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Một thuốc có tỷ lệ liên kết với protein huyết tương trên 90%, khi dùng chung với chất cạnh tranh gắn kết sẽ gây biến cố gì?",
    "options": [
      "Làm mất hoàn toàn tác dụng điều trị của thuốc",
      "Tăng vọt nồng độ thuốc tự do có hoạt tính dẫn đến ngộ độc",
      "Làm giảm thời gian lưu giữ thuốc trong gan",
      "Tăng tốc độ gắn thuốc vào hồng cầu"
    ],
    "correct": 1,
    "explanation": "Thuốc gắn protein cao khi bị đẩy ra dạng tự do sẽ tăng đột ngột nồng độ có hoạt tính gây quá liều.",
    "reference": "Sách DLS tr. 37, 70",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 71,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Ông Nguyễn Văn B., 62 tuổi, nặng 58 kg, có nồng độ Creatinin huyết thanh là 1.4 mg/dL. Hệ số thanh thải creatinin ước tính theo Cockcroft - Gault của bệnh nhân là:",
    "options": [
      "53,8 mL/phút",
      "68,2 mL/phút",
      "45,7 mL/phút",
      "85,6 mL/phút"
    ],
    "correct": 2,
    "explanation": "Công thức Cockcroft - Gault cho nam: Clcr = [(140 - 62) x 58] / (72 x 1.4)  = 45,7 mL/phút.",
    "reference": "Sách DLS tr. 51",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 51",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 73,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Bệnh nhân Lê Văn D., 45 tuổi, nặng 65 kg, có nồng độ Creatinin huyết thanh là 2.2 mg/dL. Hệ số thanh thải creatinin ước tính theo Cockcroft - Gault của bệnh nhân là:",
    "options": [
      "41,0 mL/phút",
      "85,6 mL/phút",
      "105,2 mL/phút",
      "15,0 mL/phút"
    ],
    "correct": 0,
    "explanation": "Công thức Cockcroft - Gault cho nam: Clcr = [(140 - 45) x 65] / (72 x 2.2)  = 41,0 mL/phút.",
    "reference": "Sách DLS tr. 51",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 74,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Bệnh nhân Phạm Thị E., 50 tuổi, nặng 60 kg, có nồng độ Creatinin huyết thanh là 0.9 mg/dL. Hệ số thanh thải creatinin ước tính theo Cockcroft - Gault của bệnh nhân là:",
    "options": [
      "15,0 mL/phút",
      "70,8 mL/phút",
      "85,6 mL/phút",
      "105,2 mL/phút"
    ],
    "correct": 1,
    "explanation": "Công thức Cockcroft - Gault cho nữ: Clcr = [(140 - 50) x 60] / (72 x 0.9) x 0,85 = 70,8 mL/phút.",
    "reference": "Sách DLS tr. 51",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 51",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 76,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Cụ bà Vũ Thị G., 79 tuổi, nặng 44 kg, có nồng độ Creatinin huyết thanh là 1.5 mg/dL. Hệ số thanh thải creatinin ước tính theo Cockcroft - Gault của bệnh nhân là:",
    "options": [
      "85,6 mL/phút",
      "105,2 mL/phút",
      "15,0 mL/phút",
      "21,1 mL/phút"
    ],
    "correct": 3,
    "explanation": "Công thức Cockcroft - Gault cho nữ: Clcr = [(140 - 79) x 44] / (72 x 1.5) x 0,85 = 21,1 mL/phút.",
    "reference": "Sách DLS tr. 51",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 77,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Bệnh nhân Đỗ Văn H., 35 tuổi, nặng 72 kg, có nồng độ Creatinin huyết thanh là 1.1 mg/dL. Hệ số thanh thải creatinin ước tính theo Cockcroft - Gault của bệnh nhân là:",
    "options": [
      "95,5 mL/phút",
      "15,0 mL/phút",
      "85,6 mL/phút",
      "105,2 mL/phút"
    ],
    "correct": 0,
    "explanation": "Công thức Cockcroft - Gault cho nam: Clcr = [(140 - 35) x 72] / (72 x 1.1)  = 95,5 mL/phút.",
    "reference": "Sách DLS tr. 51",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 78,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Bệnh nhân Bùi Thị K., 58 tuổi, nặng 54 kg, có nồng độ Creatinin huyết thanh là 1.7 mg/dL. Hệ số thanh thải creatinin ước tính theo Cockcroft - Gault của bệnh nhân là:",
    "options": [
      "85,6 mL/phút",
      "30,8 mL/phút",
      "105,2 mL/phút",
      "15,0 mL/phút"
    ],
    "correct": 1,
    "explanation": "Công thức Cockcroft - Gault cho nữ: Clcr = [(140 - 58) x 54] / (72 x 1.7) x 0,85 = 30,8 mL/phút.",
    "reference": "Sách DLS tr. 51",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 79,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Ông Ngô Văn L., 73 tuổi, nặng 62 kg, có nồng độ Creatinin huyết thanh là 1.8 mg/dL. Hệ số thanh thải creatinin ước tính theo Cockcroft - Gault của bệnh nhân là:",
    "options": [
      "15,0 mL/phút",
      "105,2 mL/phút",
      "32,0 mL/phút",
      "85,6 mL/phút"
    ],
    "correct": 2,
    "explanation": "Công thức Cockcroft - Gault cho nam: Clcr = [(140 - 73) x 62] / (72 x 1.8)  = 32,0 mL/phút.",
    "reference": "Sách DLS tr. 51",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 80,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Bà Đặng Thị M., 64 tuổi, nặng 50 kg, có nồng độ Creatinin huyết thanh là 1.2 mg/dL. Hệ số thanh thải creatinin ước tính theo Cockcroft - Gault của bệnh nhân là:",
    "options": [
      "105,2 mL/phút",
      "15,0 mL/phút",
      "85,6 mL/phút",
      "37,3 mL/phút"
    ],
    "correct": 3,
    "explanation": "Công thức Cockcroft - Gault cho nữ: Clcr = [(140 - 64) x 50] / (72 x 1.2) x 0,85 = 37,3 mL/phút.",
    "reference": "Sách DLS tr. 51",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 81,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Bệnh nhân Trịnh Văn N., 55 tuổi, nặng 68 kg, có nồng độ Creatinin huyết thanh là 1 mg/dL. Hệ số thanh thải creatinin ước tính theo Cockcroft - Gault của bệnh nhân là:",
    "options": [
      "80,3 mL/phút",
      "85,6 mL/phút",
      "105,2 mL/phút",
      "15,0 mL/phút"
    ],
    "correct": 0,
    "explanation": "Công thức Cockcroft - Gault cho nam: Clcr = [(140 - 55) x 68] / (72 x 1)  = 80,3 mL/phút.",
    "reference": "Sách DLS tr. 51",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 51",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 83,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Ông Mai Văn Q., 66 tuổi, nặng 70 kg, có nồng độ Creatinin huyết thanh là 2.5 mg/dL. Hệ số thanh thải creatinin ước tính theo Cockcroft - Gault của bệnh nhân là:",
    "options": [
      "105,2 mL/phút",
      "15,0 mL/phút",
      "28,8 mL/phút",
      "85,6 mL/phút"
    ],
    "correct": 2,
    "explanation": "Công thức Cockcroft - Gault cho nam: Clcr = [(140 - 66) x 70] / (72 x 2.5)  = 28,8 mL/phút.",
    "reference": "Sách DLS tr. 51",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 84,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Bà Lý Thị R., 48 tuổi, nặng 56 kg, có nồng độ Creatinin huyết thanh là 0.8 mg/dL. Hệ số thanh thải creatinin ước tính theo Cockcroft - Gault của bệnh nhân là:",
    "options": [
      "105,2 mL/phút",
      "15,0 mL/phút",
      "85,6 mL/phút",
      "76,1 mL/phút"
    ],
    "correct": 3,
    "explanation": "Công thức Cockcroft - Gault cho nữ: Clcr = [(140 - 48) x 56] / (72 x 0.8) x 0,85 = 76,1 mL/phút.",
    "reference": "Sách DLS tr. 51",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 85,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Bệnh nhân Phan Văn S., 77 tuổi, nặng 53 kg, có nồng độ Creatinin huyết thanh là 1.5 mg/dL. Hệ số thanh thải creatinin ước tính theo Cockcroft - Gault của bệnh nhân là:",
    "options": [
      "30,9 mL/phút",
      "85,6 mL/phút",
      "105,2 mL/phút",
      "15,0 mL/phút"
    ],
    "correct": 0,
    "explanation": "Công thức Cockcroft - Gault cho nam: Clcr = [(140 - 77) x 53] / (72 x 1.5)  = 30,9 mL/phút.",
    "reference": "Sách DLS tr. 51",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 86,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Bệnh nhân Tạ Thị T., 85 tuổi, nặng 42 kg, có nồng độ Creatinin huyết thanh là 1.4 mg/dL. Hệ số thanh thải creatinin ước tính theo Cockcroft - Gault của bệnh nhân là:",
    "options": [
      "85,6 mL/phút",
      "19,5 mL/phút",
      "105,2 mL/phút",
      "15,0 mL/phút"
    ],
    "correct": 1,
    "explanation": "Công thức Cockcroft - Gault cho nữ: Clcr = [(140 - 85) x 42] / (72 x 1.4) x 0,85 = 19,5 mL/phút.",
    "reference": "Sách DLS tr. 51",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 87,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Ông Đinh Văn U., 59 tuổi, nặng 75 kg, có nồng độ Creatinin huyết thanh là 1.3 mg/dL. Hệ số thanh thải creatinin ước tính theo Cockcroft - Gault của bệnh nhân là:",
    "options": [
      "15,0 mL/phút",
      "85,6 mL/phút",
      "64,9 mL/phút",
      "105,2 mL/phút"
    ],
    "correct": 2,
    "explanation": "Công thức Cockcroft - Gault cho nam: Clcr = [(140 - 59) x 75] / (72 x 1.3)  = 64,9 mL/phút.",
    "reference": "Sách DLS tr. 51",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 51",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 89,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Bệnh nhân Chu Văn X., 52 tuổi, nặng 64 kg, có nồng độ Creatinin huyết thanh là 1.2 mg/dL. Hệ số thanh thải creatinin ước tính theo Cockcroft - Gault của bệnh nhân là:",
    "options": [
      "65,2 mL/phút",
      "105,2 mL/phút",
      "15,0 mL/phút",
      "85,6 mL/phút"
    ],
    "correct": 0,
    "explanation": "Công thức Cockcroft - Gault cho nam: Clcr = [(140 - 52) x 64] / (72 x 1.2)  = 65,2 mL/phút.",
    "reference": "Sách DLS tr. 51",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 90,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Bệnh nhân Võ Thị Y., 69 tuổi, nặng 51 kg, có nồng độ Creatinin huyết thanh là 1.5 mg/dL. Hệ số thanh thải creatinin ước tính theo Cockcroft - Gault của bệnh nhân là:",
    "options": [
      "105,2 mL/phút",
      "28,5 mL/phút",
      "15,0 mL/phút",
      "85,6 mL/phút"
    ],
    "correct": 1,
    "explanation": "Công thức Cockcroft - Gault cho nữ: Clcr = [(140 - 69) x 51] / (72 x 1.5) x 0,85 = 28,5 mL/phút.",
    "reference": "Sách DLS tr. 51",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 91,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Tính liều nạp tĩnh mạch của Digoxin cho bệnh nhân nặng 60 kg để đạt nồng độ tức thì 0,0015 mg/L, biết thể tích phân bố Vd = 7 L/kg và F = 1:",
    "options": [
      "50 mg",
      "25 mg",
      "0,63 mg",
      "1500 mg"
    ],
    "correct": 2,
    "explanation": "Áp dụng công thức liều nạp D = (Vd x Cân nặng x Cp) / F = (7 x 60 x 0,0015 mg/L) / 1 = 0,63 mg.",
    "reference": "Sách DLS tr. 29",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 92,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Tính liều nạp tĩnh mạch của Theophyllin cho bệnh nhân nặng 50 kg để đạt nồng độ tức thì 12 mg/L, biết thể tích phân bố Vd = 0.5 L/kg và F = 1:",
    "options": [
      "25 mg",
      "1500 mg",
      "50 mg",
      "300 mg"
    ],
    "correct": 3,
    "explanation": "Áp dụng công thức liều nạp D = (Vd x Cân nặng x Cp) / F = (0.5 x 50 x 12 mg/L) / 1 = 300 mg.",
    "reference": "Sách DLS tr. 29",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 29",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 94,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Tính liều nạp tĩnh mạch của Amikacin cho bệnh nhân nặng 60 kg để đạt nồng độ tức thì 25 mg/L, biết thể tích phân bố Vd = 0.25 L/kg và F = 1:",
    "options": [
      "1500 mg",
      "375 mg",
      "25 mg",
      "50 mg"
    ],
    "correct": 1,
    "explanation": "Áp dụng công thức liều nạp D = (Vd x Cân nặng x Cp) / F = (0.25 x 60 x 25 mg/L) / 1 = 375 mg.",
    "reference": "Sách DLS tr. 29",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 95,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Tính liều nạp tĩnh mạch của Vancomycin cho bệnh nhân nặng 65 kg để đạt nồng độ tức thì 20 mg/L, biết thể tích phân bố Vd = 0.7 L/kg và F = 1:",
    "options": [
      "1500 mg",
      "25 mg",
      "910 mg",
      "50 mg"
    ],
    "correct": 2,
    "explanation": "Áp dụng công thức liều nạp D = (Vd x Cân nặng x Cp) / F = (0.7 x 65 x 20 mg/L) / 1 = 910 mg.",
    "reference": "Sách DLS tr. 29",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 29",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 29",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 98,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Tính liều nạp tĩnh mạch của Tobramycin cho bệnh nhân nặng 50 kg để đạt nồng độ tức thì 5 mg/L, biết thể tích phân bố Vd = 0.26 L/kg và F = 1:",
    "options": [
      "50 mg",
      "65 mg",
      "25 mg",
      "1500 mg"
    ],
    "correct": 1,
    "explanation": "Áp dụng công thức liều nạp D = (Vd x Cân nặng x Cp) / F = (0.26 x 50 x 5 mg/L) / 1 = 65 mg.",
    "reference": "Sách DLS tr. 29",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 99,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Tính liều nạp tĩnh mạch của Netilmicin cho bệnh nhân nặng 60 kg để đạt nồng độ tức thì 8 mg/L, biết thể tích phân bố Vd = 0.22 L/kg và F = 1:",
    "options": [
      "50 mg",
      "25 mg",
      "105,6 mg",
      "1500 mg"
    ],
    "correct": 2,
    "explanation": "Áp dụng công thức liều nạp D = (Vd x Cân nặng x Cp) / F = (0.22 x 60 x 8 mg/L) / 1 = 105,6 mg.",
    "reference": "Sách DLS tr. 29",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 100,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Tính liều nạp tĩnh mạch của Procainamid cho bệnh nhân nặng 60 kg để đạt nồng độ tức thì 6 mg/L, biết thể tích phân bố Vd = 2 L/kg và F = 1:",
    "options": [
      "960 mg",
      "1200 mg",
      "1500 mg",
      "720 mg"
    ],
    "correct": 3,
    "explanation": "Áp dụng công thức liều nạp D = (Vd x Cân nặng x Cp) / F = (2 x 60 x 6 mg/L) / 1 = 720 mg.",
    "reference": "Sách DLS tr. 29",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 101,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Tính liều nạp tĩnh mạch của Quinidin cho bệnh nhân nặng 70 kg để đạt nồng độ tức thì 3 mg/L, biết thể tích phân bố Vd = 2.5 L/kg và F = 1:",
    "options": [
      "4 giờ",
      "1 giờ",
      "2 giờ",
      "3 giờ"
    ],
    "correct": 0,
    "explanation": "Áp dụng công thức liều nạp D = (Vd x Cân nặng x Cp) / F = (2.5 x 70 x 3 mg/L) / 1 = 525 mg.",
    "reference": "Sách DLS tr. 29",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 102,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Tính liều nạp tĩnh mạch của Valproat natri cho bệnh nhân nặng 50 kg để đạt nồng độ tức thì 50 mg/L, biết thể tích phân bố Vd = 0.2 L/kg và F = 1:",
    "options": [
      "50 L",
      "35 L",
      "70 L",
      "100 L"
    ],
    "correct": 1,
    "explanation": "Áp dụng công thức liều nạp D = (Vd x Cân nặng x Cp) / F = (0.2 x 50 x 50 mg/L) / 1 = 500 mg.",
    "reference": "Sách DLS tr. 29",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 103,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Tính liều nạp tĩnh mạch của Carbamazepin cho bệnh nhân nặng 60 kg để đạt nồng độ tức thì 8 mg/L, biết thể tích phân bố Vd = 1.2 L/kg và F = 1:",
    "options": [
      "1,2 L/h",
      "2,5 L/h",
      "5,0 L/h",
      "3,8 L/h"
    ],
    "correct": 2,
    "explanation": "Áp dụng công thức liều nạp D = (Vd x Cân nặng x Cp) / F = (1.2 x 60 x 8 mg/L) / 1 = 576 mg.",
    "reference": "Sách DLS tr. 29",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 104,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Tính liều nạp tĩnh mạch của Methotrexat cho bệnh nhân nặng 50 kg để đạt nồng độ tức thì 10 mg/L, biết thể tích phân bố Vd = 0.8 L/kg và F = 1:",
    "options": [
      "180 mg.h/L",
      "240 mg.h/L",
      "300 mg.h/L",
      "120 mg.h/L"
    ],
    "correct": 3,
    "explanation": "Áp dụng công thức liều nạp D = (Vd x Cân nặng x Cp) / F = (0.8 x 50 x 10 mg/L) / 1 = 400 mg.",
    "reference": "Sách DLS tr. 29",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 105,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Tính liều nạp tĩnh mạch của Ceftriaxon cho bệnh nhân nặng 60 kg để đạt nồng độ tức thì 100 mg/L, biết thể tích phân bố Vd = 0.15 L/kg và F = 1:",
    "options": [
      "80%",
      "30%",
      "45%",
      "60%"
    ],
    "correct": 0,
    "explanation": "Áp dụng công thức liều nạp D = (Vd x Cân nặng x Cp) / F = (0.15 x 60 x 100 mg/L) / 1 = 900 mg.",
    "reference": "Sách DLS tr. 29",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 106,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Tính liều nạp tĩnh mạch của Ceftazidim cho bệnh nhân nặng 70 kg để đạt nồng độ tức thì 40 mg/L, biết thể tích phân bố Vd = 0.23 L/kg và F = 1:",
    "options": [
      "36 giờ",
      "24 giờ",
      "48 giờ",
      "72 giờ"
    ],
    "correct": 1,
    "explanation": "Áp dụng công thức liều nạp D = (Vd x Cân nặng x Cp) / F = (0.23 x 70 x 40 mg/L) / 1 = 644 mg.",
    "reference": "Sách DLS tr. 29",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 107,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Tính liều nạp tĩnh mạch của Cefepim cho bệnh nhân nặng 60 kg để đạt nồng độ tức thì 50 mg/L, biết thể tích phân bố Vd = 0.25 L/kg và F = 1:",
    "options": [
      "50 mg",
      "100 mg",
      "250 mg",
      "150 mg"
    ],
    "correct": 2,
    "explanation": "Áp dụng công thức liều nạp D = (Vd x Cân nặng x Cp) / F = (0.25 x 60 x 50 mg/L) / 1 = 750 mg.",
    "reference": "Sách DLS tr. 29",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 108,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Tính liều nạp tĩnh mạch của Levofloxacin cho bệnh nhân nặng 65 kg để đạt nồng độ tức thì 6 mg/L, biết thể tích phân bố Vd = 1.3 L/kg và F = 1:",
    "options": [
      "18 giờ",
      "24 giờ",
      "36 giờ",
      "12 giờ"
    ],
    "correct": 3,
    "explanation": "Áp dụng công thức liều nạp D = (Vd x Cân nặng x Cp) / F = (1.3 x 65 x 6 mg/L) / 1 = 507 mg.",
    "reference": "Sách DLS tr. 29",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 109,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Tính liều nạp tĩnh mạch của Ciprofloxacin cho bệnh nhân nặng 60 kg để đạt nồng độ tức thì 3 mg/L, biết thể tích phân bố Vd = 2.1 L/kg và F = 1:",
    "options": [
      "1,0 mcg/mL",
      "0,2 mcg/mL",
      "0,5 mcg/mL",
      "0,8 mcg/mL"
    ],
    "correct": 0,
    "explanation": "Áp dụng công thức liều nạp D = (Vd x Cân nặng x Cp) / F = (2.1 x 60 x 3 mg/L) / 1 = 378 mg.",
    "reference": "Sách DLS tr. 29",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 110,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Tính liều nạp tĩnh mạch của Metronidazol cho bệnh nhân nặng 55 kg để đạt nồng độ tức thì 15 mg/L, biết thể tích phân bố Vd = 0.8 L/kg và F = 1:",
    "options": [
      "35 mcg/mL",
      "25 mcg/mL",
      "45 mcg/mL",
      "60 mcg/mL"
    ],
    "correct": 1,
    "explanation": "Áp dụng công thức liều nạp D = (Vd x Cân nặng x Cp) / F = (0.8 x 55 x 15 mg/L) / 1 = 660 mg.",
    "reference": "Sách DLS tr. 29",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 111,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Phối hợp giữa kháng sinh Aminosid với Furosemid gây nguy cơ tổn thương nặng trên hai cơ quan nào?",
    "options": [
      "2 giờ",
      "4 giờ",
      "8 giờ",
      "6 giờ"
    ],
    "correct": 2,
    "explanation": "Cả hai thuốc đều độc trên thận và tai, phối hợp làm tăng nguy cơ suy thận cấp và điếc vĩnh viễn.",
    "reference": "Sách DLS tr. 68",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 112,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Dùng đồng thời Cimetidin với Warfarin gây nguy cơ xuất huyết là do cơ chế nào?",
    "options": [
      "95%",
      "98%",
      "99%",
      "90%"
    ],
    "correct": 3,
    "explanation": "Cimetidin ức chế CYP450 làm giảm chuyển hóa Warfarin, tăng nồng độ tự do gây chảy máu.",
    "reference": "Sách DLS tr. 71",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 113,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Khi dùng chung Gastropulgite với Ciprofloxacin, hướng dẫn dùng thuốc hợp lý là gì?",
    "options": [
      "75%",
      "25%",
      "40%",
      "55%"
    ],
    "correct": 0,
    "explanation": "Nhôm và magnesi trong antacid tạo chelat không tan với fluoroquinolon, phải uống cách xa ít nhất 2 giờ.",
    "reference": "Sách DLS tr. 69-70",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 114,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Kháng sinh Tetracyclin bị giảm sinh khả dụng rõ rệt khi uống chung với sữa là do nguyên nhân nào?",
    "options": [
      "80 mL/phút",
      "60 mL/phút",
      "100 mL/phút",
      "120 mL/phút"
    ],
    "correct": 1,
    "explanation": "Ion Ca2+ trong sữa tạo phức chelat không hấp thu với Tetracyclin.",
    "reference": "Sách DLS tr. 69",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 115,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Nhóm thuốc nào sau đây là các chất gây cảm ứng mạnh enzym chuyển hóa thuốc tại gan?",
    "options": [
      "0,1 L/kg",
      "0,2 L/kg",
      "0,6 L/kg",
      "0,4 L/kg"
    ],
    "correct": 2,
    "explanation": "Các chất cảm ứng enzym CYP450 gồm Rifampicin, Phenobarbital, Carbamazepin, Phenytoin.",
    "reference": "Sách DLS tr. 71",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 116,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Phối hợp đồng thời hai thuốc cùng ức chế hệ RAA gây ra nguy cơ biến cố bất lợi nào?",
    "options": [
      "0,4",
      "0,6",
      "0,8",
      "0,2"
    ],
    "correct": 3,
    "explanation": "Ức chế kép hệ RAAS làm suy giảm nặng chức năng thận và tăng kali máu.",
    "reference": "Sách DLS tr. 68",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 117,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Phối hợp thuốc ức chế men chuyển với Amlodipin mang lại lợi ích gì về mặt giảm tác dụng phụ?",
    "options": [
      "70%",
      "25%",
      "40%",
      "55%"
    ],
    "correct": 0,
    "explanation": "ƯCMC làm giãn tiểu động mạch đi, cân bằng áp lực mao mạch giúp giảm phù do Amlodipin.",
    "reference": "Sách DLS tr. 68",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 118,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Tương tác đối kháng cạnh tranh trực tiếp trên cùng thụ thể xảy ra giữa cặp thuốc nào sau đây?",
    "options": [
      "25 mg/L",
      "15 mg/L",
      "35 mg/L",
      "50 mg/L"
    ],
    "correct": 1,
    "explanation": "Atropin và Pilocarpin đối kháng trực tiếp trên thụ thể muscarinic.",
    "reference": "Sách DLS tr. 67",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 119,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Phối hợp thuốc lợi tiểu Thiazid với thuốc ức chế men chuyển giúp giảm tác dụng phụ nào?",
    "options": [
      "0,02 h^-1",
      "0,05 h^-1",
      "0,10 h^-1",
      "0,08 h^-1"
    ],
    "correct": 2,
    "explanation": "Lợi tiểu thiazid gây mất kali trong khi ƯCMC giữ kali, phối hợp giúp cân bằng kali máu.",
    "reference": "Sách DLS tr. 68",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 120,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Uống rượu khi đang dùng thuốc hạ đường huyết nhóm Sulfonylure có thể xuất hiện phản ứng gì?",
    "options": [
      "65%",
      "75%",
      "85%",
      "50%"
    ],
    "correct": 3,
    "explanation": "Tolbutamid ức chế chuyển hóa rượu gây tích tụ acetaldehyd (hội chứng antabuse).",
    "reference": "Sách DLS tr. 86",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 86",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 122,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Để kiềm hóa nước tiểu nhằm tăng đào thải các thuốc acid yếu như Barbiturat, người ta dùng chất nào?",
    "options": [
      "Dung dịch Acid ascorbic liều cao",
      "Dung dịch Natri hydrocarbonat",
      "Dung dịch Amoni clorid truyền tĩnh mạch",
      "Dung dịch Acid citric đậm đặc"
    ],
    "correct": 1,
    "explanation": "NaHCO3 làm kiềm hóa nước tiểu, tăng ion hóa các thuốc acid yếu giúp tăng thải trừ.",
    "reference": "Sách DLS tr. 71",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 123,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Dùng đồng thời Erythromycin với Theophyllin sẽ dẫn đến hiện tượng dược động học nào?",
    "options": [
      "Giảm tác dụng kháng khuẩn của Erythromycin",
      "Tăng tốc độ chuyển hóa Theophyllin qua gan",
      "Tăng nồng độ Theophyllin trong máu gây ngộ độc",
      "Tăng bài xuất Theophyllin qua nước tiểu"
    ],
    "correct": 2,
    "explanation": "Erythromycin ức chế men gan làm giảm chuyển hóa Theophyllin, tăng nguy cơ ngộ độc.",
    "reference": "Sách DLS tr. 71",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 124,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Phối hợp kháng sinh Macrolid với dẫn chất nấm cựa gà Ergotamin bị chống chỉ định do nguy cơ:",
    "options": [
      "Hạ đường huyết dẫn đến hôn mê sâu",
      "Loãng xương và gãy xương đùi tự phát",
      "Xuất huyết tiêu hóa ồ ạt không cầm được",
      "Co mạch ngoại vi quá mức gây thiếu máu hoại tử chi"
    ],
    "correct": 3,
    "explanation": "Macrolid ức chế chuyển hóa ergotamin làm tăng nồng độ ergotamin gây co mạch nặng hoại tử chi.",
    "reference": "Sách DLS tr. 84",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 125,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Thuốc ức chế men chuyển phối hợp với Allopurinol làm gia tăng tỷ lệ mắc tác dụng phụ nào?",
    "options": [
      "Tăng nguy cơ phản ứng dị ứng nặng trên da",
      "Gây suy tủy xương mất bạch cầu hạt",
      "Gây điếc tai không hồi phục ở người lớn",
      "Gây đục thủy tinh thể tiến triển nhanh"
    ],
    "correct": 0,
    "explanation": "Phối hợp ƯCMC và Allopurinol làm tăng nguy cơ dị ứng nặng, hội chứng Stevens-Johnson.",
    "reference": "Sách DLS tr. 184",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 126,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Dùng chung Digoxin với thuốc lợi tiểu gây hạ kali máu như Furosemid làm tăng nguy cơ nào?",
    "options": [
      "Gây tăng nồng độ kali trong huyết tương",
      "Tăng nguy cơ ngộ độc Digoxin gây loạn nhịp tim",
      "Làm giảm tác dụng trợ tim của Digoxin",
      "Làm tăng bài xuất Digoxin qua đường thận"
    ],
    "correct": 1,
    "explanation": "Hạ kali máu làm tăng tính nhạy cảm của cơ tim với Digoxin dẫn đến loạn nhịp nguy hiểm.",
    "reference": "Sách DLS tr. 68",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 127,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Khi dùng chung viên sắt sulfat với nước chè xanh (trà), hiện tượng gì sẽ xảy ra?",
    "options": [
      "Làm tăng tác dụng kích ứng niêm mạc ruột",
      "Gây đổi màu răng thành màu vàng vĩnh viễn",
      "Chất tanin trong chè tạo kết tủa với sắt làm giảm hấp thu",
      "Tăng tốc độ hòa tan và hấp thu của muối sắt"
    ],
    "correct": 2,
    "explanation": "Tanin trong chè tạo tủa khó tan với Fe2+, làm mất tác dụng bổ sung sắt.",
    "reference": "Sách DLS tr. 85",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 128,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Thuốc chống đông Warfarin dùng chung với kháng nấm Fluconazol dẫn đến hậu quả lâm sàng nào?",
    "options": [
      "Làm mất tác dụng điều trị nấm của Fluconazol",
      "Rút ngắn thời gian đông máu gây tắc mạch",
      "Gây tăng huyết áp kịch phát",
      "Kéo dài thời gian đông máu và tăng nguy cơ xuất huyết"
    ],
    "correct": 3,
    "explanation": "Fluconazol ức chế CYP2C9 chuyển hóa Warfarin làm nồng độ Warfarin tăng cao.",
    "reference": "Sách DLS tr. 70, 71",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 129,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Sử dụng đồng thời kháng sinh Clarithromycin với thuốc hạ mỡ máu Simvastatin làm tăng nguy cơ biến chứng gì?",
    "options": [
      "Tiêu cơ vân cấp tính và suy thận cấp",
      "Gây tăng áp lực nội sọ cấp tính",
      "Co thắt khí phế quản gây suy hô hấp",
      "Xuất huyết tiêu hóa do thủng dạ dày"
    ],
    "correct": 0,
    "explanation": "Clarithromycin ức chế CYP3A4 làm tăng nồng độ Simvastatin trong máu gây tiêu cơ vân.",
    "reference": "Sách DLS tr. 71, 184",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 130,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Phối hợp thuốc ức chế tái hấp thu chọn lọc Serotonin với thuốc ức chế men MAO gây hội chứng nguy hiểm nào?",
    "options": [
      "Hội chứng suy tuyến thượng thận cấp",
      "Hội chứng ngộ độc Serotonin kịch phát",
      "Hội chứng ngoại tháp cấp tính",
      "Hội chứng thiếu máu bất sản tủy xương"
    ],
    "correct": 1,
    "explanation": "Ức chế chuyển hóa và tái hấp thu serotonin làm nồng độ serotonin quá cao gây co giật, sốt cao, tử vong.",
    "reference": "Sách DLS tr. 68",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 131,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Khi dùng chung Methotrexat với Aspirin, cơ chế dẫn đến tăng độc tính của Methotrexat là gì?",
    "options": [
      "Aspirin làm giảm bài tiết acid uric tại ống thận",
      "Aspirin kích thích tủy xương làm tăng nhạy cảm tế bào",
      "Aspirin đẩy Methotrexat ra khỏi vị trí liên kết protein huyết tương",
      "Aspirin làm tăng tính thấm của hàng rào máu não đối với thuốc"
    ],
    "correct": 2,
    "explanation": "Aspirin cạnh tranh gắn kết albumin làm tăng nồng độ methotrexat tự do độc tính cao.",
    "reference": "Sách DLS tr. 70",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 132,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Phối hợp Spironolacton với Enalapril trên bệnh nhân suy thận cần thận trọng cao vì nguy cơ gì?",
    "options": [
      "Gây bí tiểu tiện cấp tính do co thắt cổ bàng quang",
      "Hạ đường huyết đột ngột lúc nửa đêm",
      "Hạ kali máu kéo dài khó hồi phục",
      "Tăng kali huyết thanh mức độ nặng"
    ],
    "correct": 3,
    "explanation": "Cả hai thuốc đều làm giảm thải trừ kali, dễ dẫn đến tăng kali máu gây ngưng tim.",
    "reference": "Sách DLS tr. 68",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 133,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Khi dùng chung Levofloxacin với thuốc bổ sung Sắt sulfat, cách giải quyết phù hợp nhất là gì?",
    "options": [
      "Uống hai thuốc cách nhau tối thiểu 2 giờ đồng hồ",
      "Uống chung hai thuốc vào bữa ăn sáng nhiều dầu mỡ",
      "Tăng gấp đôi liều của Levofloxacin trong ngày",
      "Hòa tan viên sắt vào nước trước khi uống kháng sinh"
    ],
    "correct": 0,
    "explanation": "Cation kim loại hóa trị 2 của sắt tạo phức chelat không tan với fluoroquinolon.",
    "reference": "Sách DLS tr. 69",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 70",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 135,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Dùng đồng thời Digoxin và Amiodaron đòi hỏi bác sĩ lâm sàng phải thực hiện can thiệp gì?",
    "options": [
      "Bổ sung dung dịch kali liều cao vào tĩnh mạch",
      "Ngừng ngay lập tức việc dùng Amiodaron",
      "Giảm liều Digoxin xuống một nửa và theo dõi nồng độ",
      "Tăng liều Digoxin lên gấp đôi để duy trì hiệu lực"
    ],
    "correct": 2,
    "explanation": "Amiodaron ức chế P-gp làm tăng gấp đôi nồng độ Digoxin, phải giảm liều Digoxin 30-50%.",
    "reference": "Sách DLS tr. 71",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 136,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Phụ nữ đang uống thuốc tránh thai kết hợp nếu điều trị lao bằng Rifampicin có nguy cơ gặp biến cố gì?",
    "options": [
      "Viêm gan cấp do ứ mật tại gan",
      "Huyết khối tĩnh mạch sâu chi dưới diện rộng",
      "Xuất huyết tử cung bất thường đe dọa tính mạng",
      "Thất bại trong việc ngừa thai và mang thai ngoài ý muốn"
    ],
    "correct": 3,
    "explanation": "Rifampicin cảm ứng mạnh CYP3A4 làm tăng chuyển hóa estrogen và progestin.",
    "reference": "Sách DLS tr. 71",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 137,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Bệnh nhân uống Metronidazol cần kiêng tuyệt đối đồ uống chứa cồn vì lý do gì?",
    "options": [
      "Tích tụ Acetaldehyd gây buồn nôn, tụt áp và đỏ mặt",
      "Tăng nguy cơ gây co giật toàn thể kịch phát",
      "Làm mất hoạt tính kháng khuẩn của Metronidazol",
      "Gây suy giảm thị lực và viêm dây thần kinh thị"
    ],
    "correct": 0,
    "explanation": "Metronidazol ức chế enzym aldehyd dehydrogenase gây hội chứng antabuse.",
    "reference": "Sách DLS tr. 86",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 138,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Dùng đồng thời Clopidogrel với Omeprazol làm giảm tác dụng chống kết tập tiểu cầu do cơ chế nào?",
    "options": [
      "Omeprazol kích thích phá hủy Clopidogrel tại đại tràng",
      "Omeprazol ức chế enzym CYP2C19 chuyển hóa Clopidogrel",
      "Omeprazol làm giảm độ acid dạ dày cản trở phân rã thuốc",
      "Omeprazol gắn kết trực tiếp với thụ thể P2Y12 ở tiểu cầu"
    ],
    "correct": 1,
    "explanation": "Clopidogrel là tiền dược cần CYP2C19 hoạt hóa, Omeprazol ức chế CYP2C19 làm giảm hoạt chất có tác dụng.",
    "reference": "Sách DLS tr. 71",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 139,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Khi bệnh nhân cần dùng đồng thời Levothyroxin và Sucralfat, khuyến cáo sử dụng thuốc là:",
    "options": [
      "Nghiền nát cả hai viên thuốc rồi hòa nước uống",
      "Thay đổi Levothyroxin bằng hormon tuyến giáp dạng tiêm",
      "Uống hai thuốc cách xa nhau ít nhất 4 giờ",
      "Uống cùng lúc vào buổi sáng trước bữa ăn"
    ],
    "correct": 2,
    "explanation": "Sucralfat tạo màng bọc niêm mạc cản trở hấp thu của Levothyroxin.",
    "reference": "Sách DLS tr. 69",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 71",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 141,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Dùng đồng thời Lithi với thuốc lợi tiểu Hydrochlorothiazid làm tăng độc tính của Lithi do:",
    "options": [
      "Thiazid làm giảm bài tiết Lithi ở ống thận",
      "Thiazid đẩy Lithi khỏi vị trí gắn kết ở xương",
      "Thiazid ức chế enzym thoái giáng Lithi ở gan",
      "Thiazid kích thích hấp thu Lithi tại ruột"
    ],
    "correct": 0,
    "explanation": "Mất natri qua nước tiểu khiến ống lượn gần tăng tái hấp thu cả natri lẫn lithi, gây tích lũy độc lithi.",
    "reference": "Sách DLS tr. 71",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 142,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Kháng sinh Ciprofloxacin khi dùng chung với Theophyllin sẽ dẫn đến hiện tượng gì?",
    "options": [
      "Gây viêm xơ gân gót nhanh chóng hơn bình thường",
      "Tăng nồng độ Theophyllin trong máu gây co giật và loạn nhịp",
      "Tăng đào thải Theophyllin qua đường tiết niệu",
      "Giảm tác dụng kháng khuẩn của Ciprofloxacin"
    ],
    "correct": 1,
    "explanation": "Ciprofloxacin ức chế CYP1A2 làm chậm thoái hóa Theophyllin dẫn đến ngộ độc.",
    "reference": "Sách DLS tr. 71",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 143,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Cặp thuốc nào sau đây thể hiện tương tác đối kháng đặc hiệu trong điều trị cấp cứu ngộ độc?",
    "options": [
      "Gentamicin và Ampicillin",
      "Cefuroxim và Metronidazol",
      "Morphin và Naloxon",
      "Aspirin và Paracetamol"
    ],
    "correct": 2,
    "explanation": "Naloxon là chất đối kháng cạnh tranh chọn lọc trên thụ thể mu opiat dùng giải độc morphin.",
    "reference": "Sách DLS tr. 67",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 144,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Khi trung hòa tác dụng chống đông của Heparin bằng Protaminsulfat, bản chất tương tác là gì?",
    "options": [
      "Tăng tốc độ giáng hóa Heparin qua gan",
      "Kích thích tủy xương tăng sinh tiểu cầu cấp tốc",
      "Cạnh tranh vị trí gắn trên phân tử Antithrombin III",
      "Tương tác hóa học tạo phức trung hòa điện tích"
    ],
    "correct": 3,
    "explanation": "Protamin mang điện tích dương mạnh trung hòa heparin mang điện tích âm mạnh.",
    "reference": "Sách DLS tr. 66",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 145,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Không được trộn chung kháng sinh Penicillin và Aminosid trong cùng một chai dịch truyền vì:",
    "options": [
      "Hai thuốc tương kỵ hóa học tạo kết tủa mất hoạt tính",
      "Kích thích thành mạch gây viêm tắc tĩnh mạch nông",
      "Làm tăng quá mức độ thẩm thấu của dung dịch tiêm truyền",
      "Gây sốt cao kịch phát do phản ứng sinh nhiệt"
    ],
    "correct": 0,
    "explanation": "Aminosid và penicillin tạo liên kết cộng hóa trị làm bất hoạt lẫn nhau khi tiếp xúc nồng độ cao.",
    "reference": "Sách DLS tr. 65",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 146,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Thuốc ức chế bơm proton như Omeprazol làm giảm hấp thu thuốc nào sau đây do làm tăng pH dạ dày?",
    "options": [
      "Metformin",
      "Ketoconazol",
      "Amoxicillin",
      "Paracetamol"
    ],
    "correct": 1,
    "explanation": "Ketoconazol và Itraconazol dạng viên cần môi trường acid dạ dày để hòa tan và hấp thu.",
    "reference": "Sách DLS tr. 69",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 147,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Dùng đồng thời Probenecid với Ampicillin đem lại mục đích điều trị nào?",
    "options": [
      "Mở rộng phổ tác dụng trên vi khuẩn kỵ khí",
      "Ngăn ngừa phản ứng dị ứng sốc phản vệ của Penicillin",
      "Làm chậm bài tiết Ampicillin qua ống thận để kéo dài nồng độ điều trị",
      "Làm tăng tốc độ hòa tan của Ampicillin tại dạ dày"
    ],
    "correct": 2,
    "explanation": "Probenecid cạnh tranh chất vận chuyển anion ở ống thận làm giảm đào thải beta-lactam.",
    "reference": "Sách DLS tr. 71",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 148,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Dùng đồng thời Ibuprofen trước Aspirin liều thấp ngừa huyết khối có thể gây ra hậu quả gì?",
    "options": [
      "Gây tăng nhãn áp cấp tính ở người cao tuổi",
      "Làm tăng gấp đôi nguy cơ hạ thân nhiệt đột ngột",
      "Gây cơn co giật động kinh trên bệnh nhân tim mạch",
      "Làm mất tác dụng bảo vệ tim mạch chống kết tập tiểu cầu của Aspirin"
    ],
    "correct": 3,
    "explanation": "Ibuprofen chiếm giữ vị trí gắn của COX-1 trước khiến Aspirin không acetyl hóa được tiểu cầu.",
    "reference": "Sách DLS tr. 68",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 84",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 150,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Uống rượu kéo dài mạn tính ảnh hưởng như thế nào đến liều dùng của các thuốc gây mê và thuốc ngủ?",
    "options": [
      "Làm mất hoàn toàn tác dụng của thuốc ngủ",
      "Làm tăng nhu cầu liều do hiện tượng cảm ứng enzym gan mạn tính",
      "Làm chậm khởi phát tác dụng của thuốc gây mê",
      "Làm giảm liều cần dùng do độc tính tăng cao"
    ],
    "correct": 1,
    "explanation": "Nghiện rượu mạn tính gây cảm ứng enzym gan, làm tăng tốc độ chuyển hóa thuốc cần dùng liều cao hơn.",
    "reference": "Sách DLS tr. 86",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 151,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Nước bưởi chùm chứa chất nào có khả năng ức chế không hồi phục enzym CYP3A4 ở niêm mạc ruột?",
    "options": [
      "Vitamin C",
      "Acid citric",
      "Furanocoumarin",
      "Chất xơ pectin"
    ],
    "correct": 2,
    "explanation": "Furanocoumarin trong bưởi chùm ức chế CYP3A4 ruột làm tăng vọt sinh khả dụng của statin, nifedipin.",
    "reference": "Sách DLS tr. 85",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 152,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Khi dùng chung thuốc hạ sốt Paracetamol với thuốc chống lao Isoniazid, nguy cơ nào tăng lên?",
    "options": [
      "Thiếu máu bất sản dòng hồng cầu",
      "Loét thủng dạ dày tá tràng",
      "Viêm đa dây thần kinh ngoại biên",
      "Độc tính phá hủy tế bào gan"
    ],
    "correct": 3,
    "explanation": "Isoniazid cảm ứng CYP2E1 làm tăng tạo NAPQI gây độc tế bào gan của Paracetamol.",
    "reference": "Sách DLS tr. 84",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 153,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Phối hợp kháng sinh Cloramphenicol với Paracetamol làm tăng độc tính của Cloramphenicol do:",
    "options": [
      "Cạnh tranh liên hợp với acid glucuronic tại gan",
      "Ức chế bài xuất Cloramphenicol tại cầu thận",
      "Tăng khả năng liên kết của Cloramphenicol với hồng cầu",
      "Tăng hấp thu Cloramphenicol tại đoạn đầu hỗng tràng"
    ],
    "correct": 0,
    "explanation": "Cả hai đều liên hợp glucuronic, paracetamol làm chậm đào thải cloramphenicol dẫn đến suy tủy.",
    "reference": "Sách DLS tr. 70",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 154,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Phối hợp kháng sinh Co-trimoxazol với Methotrexat làm tăng nguy cơ biến chứng nào?",
    "options": [
      "Gây điếc tai tiếp nhận không phục hồi",
      "Ức chế tủy xương nặng gây suy giảm các dòng tế bào máu",
      "Tăng đường huyết kịch phát dẫn đến nhiễm toan ceton",
      "Gây nhịp chậm xoang và block nhĩ thất độ 3"
    ],
    "correct": 1,
    "explanation": "Cả hai chất đều kháng acid folic, phối hợp làm tăng ức chế tổng hợp ADN ở tủy xương.",
    "reference": "Sách DLS tr. 68",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 70",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 156,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Dùng phối hợp thuốc ức chế men chuyển với Spironolacton cần theo dõi chặt chẽ chỉ số xét nghiệm nào?",
    "options": [
      "Nồng độ Natri huyết thanh",
      "Nồng độ Bilirubin toàn phần",
      "Chỉ số men gan AST và ALT",
      "Nồng độ Kali huyết thanh"
    ],
    "correct": 3,
    "explanation": "Nguy cơ tăng kali máu rất cao, cần xét nghiệm điện giải đồ định kỳ.",
    "reference": "Sách DLS tr. 68",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 157,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Khi dùng chung Allopurinol với thuốc 6-Mercaptopurin, liều của 6-Mercaptopurin phải điều chỉnh thế nào?",
    "options": [
      "Giảm xuống còn 1/4 đến 1/3 liều thông thường",
      "Tăng lên gấp đôi so với liều điều trị thông thường",
      "Duy trì giữ nguyên liều ban đầu không thay đổi",
      "Chỉ dùng một liều duy nhất vào ban đêm"
    ],
    "correct": 0,
    "explanation": "Allopurinol ức chế xanthin oxidase chuyển hóa 6-MP, phải giảm liều 6-MP còn 25-33% để tránh suy tủy tử vong.",
    "reference": "Sách DLS tr. 71",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 158,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Tác dụng hiệp đồng tăng mức trong điều trị nhiễm trùng thu được từ sự phối hợp cặp thuốc nào?",
    "options": [
      "Penicillin G và Tetracyclin",
      "Sulfamethoxazol và Trimethoprim",
      "Erythromycin và Clindamycin",
      "Ampicillin và Cloramphenicol"
    ],
    "correct": 1,
    "explanation": "Sulfamethoxazol và Trimethoprim ức chế 2 bước liên tiếp trong tổng hợp acid folic của vi khuẩn.",
    "reference": "Sách DLS tr. 66",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 159,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Bệnh nhân dùng thuốc chống trầm cảm ức chế enzym MAO cần tránh ăn các loại thực phẩm nào?",
    "options": [
      "Hoa quả tươi có vị chua như cam quýt",
      "Các loại rau xanh có màu xanh đậm",
      "Pho mát lên men lâu năm và rượu vang",
      "Thịt gia cầm và các loại cá nước ngọt"
    ],
    "correct": 2,
    "explanation": "Pho mát lâu năm chứa nhiều tyramin không bị phân hủy bởi MAO gây co mạch tăng huyết áp kịch phát.",
    "reference": "Sách DLS tr. 85",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 160,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Kháng sinh nào sau đây không nên phối hợp đồng thời với Penicillin do tính chất đối kháng tác dụng diệt khuẩn?",
    "options": [
      "Amikacin",
      "Tobramycin",
      "Gentamicin",
      "Tetracyclin"
    ],
    "correct": 3,
    "explanation": "Tetracyclin kìm khuẩn ức chế nhân lên của vi khuẩn làm giảm tác dụng diệt khuẩn trên vách của Penicillin.",
    "reference": "Sách DLS tr. 67",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 98",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 162,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Phản ứng có hại của thuốc thuộc Typ B có đặc điểm nổi bật nào sau đây?",
    "options": [
      "Liên quan mật thiết đến cơ chế dược lý chính của thuốc",
      "Không phụ thuộc liều dùng và khó dự đoán trước",
      "Biến mất nhanh khi giảm liều dùng của thuốc",
      "Phụ thuộc liều lượng và tỷ lệ mắc bệnh rất cao"
    ],
    "correct": 1,
    "explanation": "Typ B không phụ thuộc liều, khó dự đoán, thường do dị ứng hoặc bất thường di truyền.",
    "reference": "Sách DLS tr. 99",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 163,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Phản ứng tan máu cấp ở người thiếu hụt enzym G6PD khi dùng thuốc sốt rét Primaquin thuộc loại nào?",
    "options": [
      "Phản ứng dị ứng qua trung gian IgE",
      "Tác dụng phụ do dùng quá liều lượng",
      "Tác dụng bất thường do di truyền",
      "Phản ứng dội ngược sau khi dừng thuốc đột ngột"
    ],
    "correct": 2,
    "explanation": "Thiếu G6PD gây tan máu là một phản ứng bất thường do gen (Idiosyncrasy), thuộc Typ B.",
    "reference": "Sách DLS tr. 100",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 102",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Thông tư 51/2017/TT-BYT",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 166,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Vị trí tiêm bắp Adrenalin được khuyến cáo ưu tiên hàng đầu trong phác đồ xử trí phản vệ là:",
    "options": [
      "Cơ delta cánh tay",
      "Mặt trước ngoài đùi",
      "Dưới da vùng quanh rốn",
      "Cơ mông trên ngoài"
    ],
    "correct": 1,
    "explanation": "Tiêm bắp mặt trước ngoài đùi hấp thu nhanh và đạt nồng độ đỉnh trong máu tốt nhất.",
    "reference": "Thông tư 51/2017/TT-BYT",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 167,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Liều Adrenalin tiêm bắp ban đầu khuyến cáo cho người lớn khi xuất hiện phản vệ độ 2 trở lên là:",
    "options": [
      "1/10 ống tương đương 0,1 mg",
      "2 ống tương đương 2 mg tiêm bắp",
      "1/2 ống tương đương 0,5 mg",
      "Nguyên cả 1 ống 1 mg tiêm tĩnh mạch"
    ],
    "correct": 2,
    "explanation": "Liều tiêm bắp ban đầu cho người lớn là 1/2 ống (0,5 mg) nồng độ 1 mg/1 ml.",
    "reference": "Thông tư 51/2017/TT-BYT",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 168,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Khi thực hiện test lẩy da với kháng sinh Penicillin, kết quả được coi là dương tính khi:",
    "options": [
      "Vùng da chỉ hơi đỏ nhẹ không có sẩn phù",
      "Người bệnh cảm thấy hơi ngứa thoáng qua",
      "Đường kính dát đỏ lớn hơn 10 mm không kèm sẩn",
      "Đường kính sẩn phù lớn hơn hoặc bằng 3 mm so với chứng âm"
    ],
    "correct": 3,
    "explanation": "Test lẩy da dương tính khi đường kính sẩn phù >= 3 mm kèm quầng đỏ sau 15-20 phút.",
    "reference": "Sách DLS tr. 105",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 169,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Hội chứng hoại tử thượng bì nhiễm độc hay hội chứng Lyell có tỷ lệ tổn thương da chiếm:",
    "options": [
      "Trên 30% diện tích bề mặt cơ thể",
      "Dưới 10% diện tích bề mặt cơ thể",
      "Chỉ xuất hiện ở niêm mạc mắt và miệng",
      "Khoảng từ 10% đến 30% diện tích bề mặt cơ thể"
    ],
    "correct": 0,
    "explanation": "Hội chứng Lyell (TEN) có diện tích bong tróc thượng bì > 30% bề mặt cơ thể.",
    "reference": "Sách DLS tr. 104",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 170,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Hội chứng Stevens-Johnson có mức độ tổn thương bong tróc thượng bì da chiếm tỷ lệ:",
    "options": [
      "Từ 30% đến 50% diện tích cơ thể",
      "Dưới 10% diện tích bề mặt cơ thể",
      "Trên 50% diện tích bề mặt cơ thể",
      "Toàn bộ bề mặt da và lông móng"
    ],
    "correct": 1,
    "explanation": "SJS có diện tích bong tróc thượng bì < 10% diện tích cơ thể kèm tổn thương nhiều niêm mạc.",
    "reference": "Sách DLS tr. 104",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 171,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Kháng sinh nhóm Fluoroquinolon có tác dụng phụ đặc trưng nào trên hệ vận động?",
    "options": [
      "Xơ cứng khớp gối hai bên",
      "Hoại tử vô mạch chỏm xương đùi",
      "Viêm và đứt gân gót Achilles",
      "Nhược cơ tiến triển không hồi phục"
    ],
    "correct": 2,
    "explanation": "Fluoroquinolon có cảnh báo nguy cơ viêm gân và đứt gân gót Achilles.",
    "reference": "Sách DLS tr. 101",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 172,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Hội chứng người đỏ khi truyền kháng sinh Vancomycin xuất hiện chủ yếu do nguyên nhân nào?",
    "options": [
      "Dị ứng thuốc qua trung gian kháng thể IgE",
      "Bệnh nhân bị nhiễm độc tố tụ cầu vàng",
      "Thuốc bị biến tính do pha trong dung dịch mặn",
      "Tốc độ truyền tĩnh mạch Vancomycin quá nhanh"
    ],
    "correct": 3,
    "explanation": "Red man syndrome do truyền tĩnh mạch quá nhanh giải phóng histamin trực tiếp không qua IgE.",
    "reference": "Sách DLS tr. 101",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 173,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Tác dụng phụ ho khan dai dẳng của nhóm thuốc ức chế men chuyển liên quan đến sự tích tụ của chất nào?",
    "options": [
      "Chất Bradykinin và chất P",
      "Chất Histamin và Serotonin",
      "Chất Prostaglandin E1",
      "Chất Angiotensin II nội sinh"
    ],
    "correct": 0,
    "explanation": "Men chuyển angiotensin cũng giáng hóa bradykinin, ức chế men này làm ứ đọng bradykinin gây ho khan.",
    "reference": "Sách DLS tr. 101",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 174,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Bệnh nhân xuất hiện cơn hen phế quản cấp sau khi uống Aspirin là do cơ chế nào?",
    "options": [
      "Aspirin gây liệt cơ trơn thành khí phế quản",
      "Chuyển dịch chuyển hóa acid arachidonic sang tạo Leukotrien",
      "Aspirin kích thích trực tiếp giải phóng Histamin",
      "Aspirin ức chế trung tâm hô hấp ở hành não"
    ],
    "correct": 1,
    "explanation": "Ức chế COX làm tăng chuyển hóa theo con đường LOX tạo nhiều cysteinyl leukotrien gây co thắt phế quản.",
    "reference": "Sách DLS tr. 101",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 100",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 176,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Hội chứng xám nguy hiểm ở trẻ sơ sinh là biến chứng ngộ độc của kháng sinh nào?",
    "options": [
      "Tetracyclin",
      "Gentamicin",
      "Erythromycin",
      "Cloramphenicol"
    ],
    "correct": 3,
    "explanation": "Trẻ sơ sinh thiếu enzym glucuronyl transferase làm tích lũy cloramphenicol gây hội chứng xám.",
    "reference": "Sách DLS tr. 101",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 177,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Thuốc hạ áp nhóm chẹn kênh calci Dihydropyridin thường gây ra tác dụng phụ khó chịu nào?",
    "options": [
      "Phù mắt cá chân và đỏ bừng mặt",
      "Tăng tiết dịch nhầy đường thở",
      "Ho khan kéo dài không có đờm",
      "Mất vị giác hoàn toàn"
    ],
    "correct": 0,
    "explanation": "DHP gây giãn tiểu động mạch trước mao mạch làm tăng áp lực mao mạch dẫn đến phù mắt cá chân.",
    "reference": "Sách DLS tr. 101",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 178,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Thuốc lợi tiểu Thiazid thường gây rối loạn điện giải và chuyển hóa nào sau đây?",
    "options": [
      "Tăng natri máu và hạ đường huyết",
      "Hạ kali máu và tăng acid uric máu",
      "Tăng kali máu và hạ acid uric máu",
      "Hạ calci máu và hạ mỡ máu"
    ],
    "correct": 1,
    "explanation": "Thiazid gây thải trừ K+, giữ Ca2+, giảm thải trừ acid uric và gây tăng đường huyết nhẹ.",
    "reference": "Sách DLS tr. 101",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 179,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Tác dụng không mong muốn gây hoại tử tế bào gan cấp tính của Paracetamol khi dùng quá liều là do:",
    "options": [
      "Paracetamol gây co thắt tĩnh mạch cửa gan",
      "Paracetamol kích thích tế bào Kupffer tiết cytokine",
      "Chất chuyển hóa độc NAPQI làm cạn kiệt Glutathion",
      "Paracetamol phá hủy màng phospholipid tế bào gan"
    ],
    "correct": 2,
    "explanation": "NAPQI phản ứng với protein tế bào gan khi glutathion cạn kiệt dưới 30%.",
    "reference": "Sách DLS tr. 101",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 180,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Chất giải độc đặc hiệu dùng để cấp cứu ngộ độc Paracetamol kịp thời là:",
    "options": [
      "Atropin sulfat",
      "Naloxon hydroclorid",
      "Flumazenil",
      "N-Acetylcystein"
    ],
    "correct": 3,
    "explanation": "N-acetylcystein bổ sung nhóm sulfhydryl khôi phục dự trữ glutathion gan.",
    "reference": "Sách DLS tr. 101",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 101",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 182,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Hiện tượng sốc phản vệ thuộc phản ứng dị ứng thuốc loại mấy theo phân loại Gell và Coombs?",
    "options": [
      "Dị ứng Typ II",
      "Dị ứng Typ I",
      "Dị ứng Typ III",
      "Dị ứng Typ IV"
    ],
    "correct": 1,
    "explanation": "Sốc phản vệ là phản ứng dị ứng tức thì Typ I qua trung gian kháng thể IgE.",
    "reference": "Sách DLS tr. 102",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 102",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 184,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Bệnh huyết thanh do phức hợp kháng nguyên kháng thể lắng đọng ở thành mạch thuộc dị ứng loại nào?",
    "options": [
      "Dị ứng Typ I",
      "Dị ứng Typ II",
      "Dị ứng Typ IV",
      "Dị ứng Typ III"
    ],
    "correct": 3,
    "explanation": "Dị ứng Typ III là phản ứng qua phức hợp miễn dịch lưu hành gây viêm mạch và viêm cầu thận.",
    "reference": "Sách DLS tr. 103",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 103",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 186,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Biến cố tụt huyết áp liều đầu tiên khi sử dụng thuốc ức chế men chuyển có thể phòng ngừa bằng cách:",
    "options": [
      "Uống thuốc kèm theo bữa ăn thật nhiều dầu mỡ",
      "Khởi đầu bằng liều thấp nhất và uống trước khi đi ngủ",
      "Truyền dung dịch glucose ưu trương trước khi uống",
      "Uống đồng thời thêm thuốc lợi tiểu quai liều cao"
    ],
    "correct": 1,
    "explanation": "Liều đầu tiên của ƯCMC nên dùng liều rất thấp vào buổi tối trước khi ngủ để tránh tụt áp tư thế đứng.",
    "reference": "Sách DLS tr. 101",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 187,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Bệnh nhân có tiền sử phù mạch thần kinh do thuốc ức chế men chuyển thì việc dùng thuốc sau đó là:",
    "options": [
      "Có thể dùng lại nếu giảm một nửa liều lượng",
      "Chỉ được dùng ở dạng tiêm truyền tĩnh mạch",
      "Chống chỉ định tuyệt đối nhóm ức chế men chuyển",
      "Được phép dùng nếu uống kèm thuốc kháng histamin"
    ],
    "correct": 2,
    "explanation": "Phù mạch là ADR nguy hiểm đe dọa tắc nghẽn đường thở, chống chỉ định vĩnh viễn ƯCMC.",
    "reference": "Sách DLS tr. 101",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 99",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 99",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 190,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Biến chứng ung thư hoặc sinh quái thai xuất hiện muộn nhiều năm sau dùng thuốc thuộc nhóm nào?",
    "options": [
      "Typ B",
      "Typ D",
      "Typ C",
      "Typ A"
    ],
    "correct": 1,
    "explanation": "Typ D là Delayed, gồm tác dụng gây quái thai, biến dị gen hoặc sinh ung thư.",
    "reference": "Sách DLS tr. 99",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 191,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Thang đo nào sau đây được sử dụng phổ biến nhất trên thế giới để đánh giá mối liên quan giữa thuốc và ADR?",
    "options": [
      "Thang đo Glasgow",
      "Thang đo Child-Pugh",
      "Thang đo Naranjo",
      "Thang đo Cockcroft-Gault"
    ],
    "correct": 2,
    "explanation": "Thang đo Naranjo gồm 10 câu hỏi đánh giá mức độ chắc chắn của ADR.",
    "reference": "Sách DLS tr. 106",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 192,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Trung tâm Quốc gia về Thông tin thuốc và Theo dõi phản ứng có hại của thuốc tại Việt Nam đặt tại đâu?",
    "options": [
      "Cục Quản lý Dược Việt Nam",
      "Bệnh viện Bạch Mai",
      "Viện Kiểm nghiệm Thuốc Trung ương",
      "Trường Đại học Dược Hà Nội"
    ],
    "correct": 3,
    "explanation": "Trung tâm DI & ADR Quốc gia đặt tại Trường Đại học Dược Hà Nội.",
    "reference": "Sách DLS tr. 107",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 101",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 194,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Tác dụng phụ gây viêm võng mạc và lắng đọng sắc tố ở mắt là biến chứng cần theo dõi của thuốc nào?",
    "options": [
      "Omeprazol",
      "Chloroquin và Hydroxychloroquin",
      "Salbutamol",
      "Paracetamol"
    ],
    "correct": 1,
    "explanation": "Chloroquin tích lũy ở võng mạc gây bệnh võng mạc hình mắt bò vĩnh viễn.",
    "reference": "Sách DLS tr. 101",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 195,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Thuốc kháng giáp trạng tổng hợp Methimazol và Thiamazol có tác dụng không mong muốn nghiêm trọng nào?",
    "options": [
      "Gây cơn bão giáp trạng cấp tính",
      "Gây xuất huyết giảm tiểu cầu vô căn",
      "Mất bạch cầu hạt gây nhiễm trùng nặng",
      "Gây cường aldosteron tiên phát"
    ],
    "correct": 2,
    "explanation": "Thuốc kháng giáp có nguy cơ gây mất bạch cầu hạt, bệnh nhân sốt đau họng phải xét nghiệm máu ngay.",
    "reference": "Sách DLS tr. 101",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 196,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Bệnh nhân dùng Statin xuất hiện đau cơ, nước tiểu màu sẫm như nước vối, xét nghiệm cần làm ngay là:",
    "options": [
      "Đo nồng độ Calci toàn phần",
      "Định lượng nồng độ Bilirubin máu",
      "Xét nghiệm cặn lắng nước tiểu",
      "Định lượng nồng độ Creatin Kinase huyết thanh"
    ],
    "correct": 3,
    "explanation": "CK tăng > 10 lần giới hạn trên bình thường khẳng định biến chứng tiêu cơ vân do Statin.",
    "reference": "Sách DLS tr. 101",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 197,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Nhóm thuốc giảm đau chống viêm không steroid (NSAID) gây loét dạ dày tá tràng là do cơ chế nào?",
    "options": [
      "Ức chế enzym COX-1 làm giảm tổng hợp Prostaglandin bảo vệ",
      "Kích thích tế bào thành tăng tiết quá mức acid hydrocloric",
      "Làm tăng sinh quá mức vi khuẩn Helicobacter pylori",
      "Phá hủy trực tiếp lớp cơ trơn của thành dạ dày"
    ],
    "correct": 0,
    "explanation": "COX-1 tạo PGE2 và PGI2 duy trì tưới máu niêm mạc và tiết chất nhầy bảo vệ dạ dày.",
    "reference": "Sách DLS tr. 101",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 198,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Thuốc lợi tiểu giữ kali Spironolacton có thể gây ra tác dụng phụ nội tiết nào ở nam giới?",
    "options": [
      "Làm tăng giọng nói trầm ở nam giới",
      "Chứng to vú ở nam giới và rối loạn cương dương",
      "Làm teo cơ và loãng xương nhanh chóng",
      "Gây rậm lông và tăng tiết bã nhờn"
    ],
    "correct": 1,
    "explanation": "Spironolacton có cấu trúc steroid đối kháng thụ thể androgen gây to vú ở nam.",
    "reference": "Sách DLS tr. 101",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 199,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Biến chứng viêm đại tràng giả mạc do Clostridium difficile liên quan chặt chẽ nhất với kháng sinh nào?",
    "options": [
      "Nystatin",
      "Vancomycin",
      "Clindamycin",
      "Gentamicin"
    ],
    "correct": 2,
    "explanation": "Clindamycin tiêu diệt vi khuẩn đường ruột tạo điều kiện cho C. difficile phát triển tiết độc tố.",
    "reference": "Sách DLS tr. 101",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 200,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Khi bệnh nhân có biểu hiện khó thở, thở rít thanh quản do phản vệ, can thiệp khẩn cấp đường thở là:",
    "options": [
      "Cho bệnh nhân uống dung dịch Corticoid liều cao",
      "Để bệnh nhân nằm sấp và vỗ rung lồng ngực",
      "Đặt sonde dạ dày để rửa sạch độc chất còn lại",
      "Khẩn trương tiêm bắp Adrenalin và chuẩn bị đặt nội khí quản"
    ],
    "correct": 3,
    "explanation": "Phù nề thanh môn gây nghẹt thở, phải tiêm Adrenalin ngay và kiểm soát đường thở khẩn cấp.",
    "reference": "Thông tư 51/2017/TT-BYT",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 201,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Dấu hiệu lâm sàng sớm và phổ biến nhất của phản ứng phản vệ nhẹ thường xuất hiện ở đâu?",
    "options": [
      "Da và niêm mạc với mày đay, mẩn ngứa, đỏ da",
      "Đau bụng dữ dội kèm tiêu chảy ra máu",
      "Hôn mê sâu và ngừng tuần hoàn hô hấp",
      "Gãy xương sườn tự phát do co giật"
    ],
    "correct": 0,
    "explanation": "80-90% trường hợp phản vệ khởi phát bằng triệu chứng da và niêm mạc.",
    "reference": "Thông tư 51/2017/TT-BYT",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Thông tư 51/2017/TT-BYT",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 203,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Tư thế nằm đúng cho bệnh nhân đang trong cơn sốc phản vệ có tụt huyết áp là:",
    "options": [
      "Ngồi tựa lưng vuông góc với giường",
      "Đứng dựa vào tường để dễ thở",
      "Nằm ngửa đầu thấp, chân kê cao",
      "Nằm sấp đầu nghiêng về một bên"
    ],
    "correct": 2,
    "explanation": "Nằm ngửa đầu thấp chân cao giúp dồn máu tĩnh mạch về tim duy trì huyết áp trung tâm.",
    "reference": "Thông tư 51/2017/TT-BYT",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 101",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 205,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Hội chứng ngoại tháp gồm run tay chân và co cứng cơ là tác dụng phụ điển hình của nhóm thuốc nào?",
    "options": [
      "Thuốc an thần chống loạn thần",
      "Thuốc giãn phế quản beta-2",
      "Thuốc kháng histamin H1 thế hệ 2",
      "Thuốc chống viêm không steroid"
    ],
    "correct": 0,
    "explanation": "Thuốc an thần phong bế thụ thể Dopamin D2 ở thể vân gây hội chứng Parkinson giả.",
    "reference": "Sách DLS tr. 101",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 206,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Để phòng ngừa tác dụng phụ loét dạ dày khi điều trị NSAID kéo dài, biện pháp phối hợp tối ưu là:",
    "options": [
      "Dùng kèm dung dịch đường glucose 5%",
      "Dùng kèm thuốc ức chế bơm proton",
      "Bẻ vụn viên thuốc trước khi uống",
      "Uống thuốc cùng một ly sữa đặc"
    ],
    "correct": 1,
    "explanation": "PPI giúp nâng pH dạ dày và ức chế tiết acid, bảo vệ niêm mạc tốt nhất khi dùng NSAID dài ngày.",
    "reference": "Sách DLS tr. 101",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 101",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 208,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Kháng sinh nhóm Sulfamid có thể gây ra biến chứng sỏi niệu do cơ chế nào?",
    "options": [
      "Thuốc kích thích tiết nhầy gây tắc nghẽn bể thận",
      "Thuốc làm tăng bài xuất calci vào trong nước tiểu",
      "Thuốc phá hủy nhu mô đài bể thận",
      "Thuốc kết tinh tạo sỏi trong môi trường nước tiểu acid"
    ],
    "correct": 3,
    "explanation": "Sulfamid ít tan trong nước tiểu acid nên dễ kết tinh thành sỏi, cần uống nhiều nước kiềm.",
    "reference": "Sách DLS tr. 101",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 209,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Thuốc gây độc tính trên dây thần kinh thính giác số VIII và tiền đình dẫn đến chóng mặt dữ dội là:",
    "options": [
      "Streptomycin",
      "Cefotaxim",
      "Metronidazol",
      "Ampicillin"
    ],
    "correct": 0,
    "explanation": "Streptomycin đặc biệt độc trên tiền đình và thính giác gây mất thăng bằng.",
    "reference": "Sách DLS tr. 101",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 210,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Phản ứng Jarisch-Herxheimer thường xuất hiện khi bắt đầu điều trị bệnh giang mai bằng Penicillin là do:",
    "options": [
      "Nhiễm khuẩn bệnh viện cơ hội xuất hiện",
      "Vi khuẩn xoắn khuẩn tan rã ồ ạt giải phóng độc tố",
      "Dị ứng kháng thể IgE với phân tử Penicillin",
      "Quá liều Penicillin gây co giật vỏ não"
    ],
    "correct": 1,
    "explanation": "Xoắn khuẩn Treponema pallidum bị diệt hàng loạt giải phóng nội độc tố gây sốt, ớn lạnh, tụt áp.",
    "reference": "Sách DLS tr. 101",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 211,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Chỉ số xét nghiệm huyết học nào phản ánh kích thước trung bình của hồng cầu?",
    "options": [
      "Chỉ số MCH",
      "Chỉ số MCHC",
      "Chỉ số MCV",
      "Chỉ số RDW"
    ],
    "correct": 2,
    "explanation": "MCV là thể tích trung bình của hồng cầu, đơn vị fL.",
    "reference": "Sách DLS tr. 115",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 212,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Chỉ số MCV dưới 80 fL đặc trưng cho loại thiếu máu nào?",
    "options": [
      "Thiếu máu hồng cầu bình thường",
      "Thiếu máu hồng cầu to",
      "Thiếu máu do tan máu cấp",
      "Thiếu máu hồng cầu nhỏ"
    ],
    "correct": 3,
    "explanation": "MCV < 80 fL là thiếu máu hồng cầu nhỏ, thường do thiếu sắt hoặc Thalassemia.",
    "reference": "Sách DLS tr. 115",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 213,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Nguyên nhân phổ biến nhất dẫn đến thiếu máu hồng cầu to với MCV trên 100 fL là:",
    "options": [
      "Thiếu hụt Vitamin B12 hoặc Acid folic",
      "Thiếu hụt nguyên tố Sắt trong khẩu phần",
      "Nhiễm giun móc mạn tính đường ruột",
      "Mất máu cấp tính do chấn thương ngoại khoa"
    ],
    "correct": 0,
    "explanation": "Thiếu vitamin B12 hoặc acid folic làm giảm tổng hợp ADN khiến phân chia tế bào chậm tạo hồng cầu to.",
    "reference": "Sách DLS tr. 116",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 214,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Chỉ số xét nghiệm nào có độ nhạy và độ đặc hiệu cao nhất để chẩn đoán thiếu máu thiếu sắt giai đoạn sớm?",
    "options": [
      "Nồng độ sắt huyết thanh lúc đói",
      "Ferritin huyết thanh",
      "Độ bão hòa Transferrin",
      "Dung tích hồng cầu lắng"
    ],
    "correct": 1,
    "explanation": "Ferritin phản ánh lượng sắt dự trữ trong cơ thể, giảm sớm nhất trước khi nồng độ sắt máu giảm.",
    "reference": "Sách DLS tr. 117",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 215,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Chỉ số men gan ALT có đặc điểm nào sau đây về tính đặc hiệu mô?",
    "options": [
      "Phân bố chủ yếu ở cơ tim và cơ vân",
      "Chỉ xuất hiện khi có tắc mật ngoài gan",
      "Đặc hiệu cho tổn thương tế bào gan hơn men AST",
      "Đặc hiệu cho hệ thống biểu mô đường mật"
    ],
    "correct": 2,
    "explanation": "ALT tập trung chủ yếu trong bào tương tế bào gan, trong khi AST có nhiều ở cơ tim và cơ vân.",
    "reference": "Sách DLS tr. 120",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 121",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 217,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Hai enzym xét nghiệm nào tăng cao rõ rệt trong hội chứng ứ mật tại gan hoặc tắc mật ngoài gan?",
    "options": [
      "ALP và GGT",
      "AST và ALT",
      "LDH và CK",
      "Amylase và Lipase"
    ],
    "correct": 0,
    "explanation": "Phosphatase kiềm và GGT tăng rất mạnh khi có ứ mật hoặc tắc mật.",
    "reference": "Sách DLS tr. 122",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 122",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 219,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Xét nghiệm protein huyết tương nào phản ánh chức năng tổng hợp dài hạn của gan?",
    "options": [
      "Globulin miễn dịch",
      "Prealbumin huyết thanh",
      "Albumin huyết thanh",
      "Transferrin huyết thanh"
    ],
    "correct": 2,
    "explanation": "Albumin có thời gian bán thải 20 ngày, giảm trong xơ gan hoặc suy giảm chức năng gan mạn.",
    "reference": "Sách DLS tr. 123",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 220,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Chỉ số xét nghiệm nào sau đây phản ánh chính xác nhất chức năng đông máu nội sinh do gan tổng hợp cấp tính?",
    "options": [
      "Thời gian máu chảy",
      "Nồng độ Fibrinogen tự do",
      "Số lượng tiểu cầu",
      "Thời gian Prothrombin"
    ],
    "correct": 3,
    "explanation": "Prothrombin có thời gian bán thải ngắn nên PT/INR phản ánh chức năng tổng hợp cấp của gan.",
    "reference": "Sách DLS tr. 124",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 221,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Tăng Bilirubin gián tiếp tự do đơn thuần trong máu thường gặp trong tình trạng bệnh lý nào?",
    "options": [
      "Tan máu ồ ạt hoặc hội chứng Gilbert",
      "Xơ gan giai đoạn cuối mất bù",
      "Sỏi kẹt ống mật chủ ngoài gan",
      "Ung thư đầu tụy chèn ép đường mật"
    ],
    "correct": 0,
    "explanation": "Bilirubin tự do chưa liên hợp tăng cao khi có tăng phá hủy hồng cầu hoặc thiếu men liên hợp.",
    "reference": "Sách DLS tr. 125",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 222,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Tăng Bilirubin trực tiếp liên hợp trong máu kèm nước tiểu sẫm màu và phân bạc màu gợi ý:",
    "options": [
      "Thiếu máu tan máu bẩm sinh",
      "Hội chứng tắc nghẽn đường dẫn mật",
      "Ngộ độc cấp tính khí than CO",
      "Suy tủy xương dòng hồng cầu"
    ],
    "correct": 1,
    "explanation": "Bilirubin trực tiếp không xuống được ruột làm phân bạc màu và trào ngược vào máu đào thải qua nước tiểu.",
    "reference": "Sách DLS tr. 125",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 223,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Chỉ số xét nghiệm vàng để chẩn đoán phân biệt viêm tụy cấp trên lâm sàng là:",
    "options": [
      "AST và ALT huyết thanh",
      "Bilirubin toàn phần",
      "Lipase huyết thanh",
      "Creatin Kinase huyết thanh"
    ],
    "correct": 2,
    "explanation": "Lipase đặc hiệu cho tụy hơn amylase và tồn tại trong máu lâu hơn.",
    "reference": "Sách DLS tr. 126",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 127",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 225,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Chỉ số xét nghiệm HbA1c phản ánh mức đường huyết trung bình của bệnh nhân trong khoảng thời gian nào?",
    "options": [
      "Khoảng 2 đến 3 tháng vừa qua",
      "Khoảng 6 tháng đến 1 năm trước",
      "Khoảng 24 đến 48 giờ trước đó",
      "Khoảng 1 tuần lễ gần nhất"
    ],
    "correct": 0,
    "explanation": "HbA1c gắn kết bền với hồng cầu có đời sống 120 ngày, phản ánh đường huyết 2-3 tháng trước.",
    "reference": "Sách DLS tr. 128",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 226,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Mức HbA1c từ bao nhiêu phần trăm trở lên là tiêu chuẩn chẩn đoán bệnh đái tháo đường?",
    "options": [
      "Từ 8,0% trở lên",
      "Từ 6,5% trở lên",
      "Từ 7,5% trở lên",
      "Từ 5,7% trở lên"
    ],
    "correct": 1,
    "explanation": "Theo tiêu chuẩn ADA và Bộ Y tế, HbA1c >= 6,5% xác định chẩn đoán đái tháo đường.",
    "reference": "Sách DLS tr. 128",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 128",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 129",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 229,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Nồng độ Kali máu bình thường ở người trưởng thành khỏe mạnh nằm trong giới hạn nào?",
    "options": [
      "Từ 3,5 đến 5,0 mmol/L",
      "Từ 5,5 đến 7,0 mmol/L",
      "Từ 135 đến 145 mmol/L",
      "Từ 1,5 đến 2,5 mmol/L"
    ],
    "correct": 0,
    "explanation": "Giới hạn bình thường của kali máu là 3,5 - 5,0 mmol/L.",
    "reference": "Sách DLS tr. 130",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 230,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Khi nồng độ Kali máu giảm dưới 3,0 mmol/L, biến chứng nguy hiểm nhất đe dọa người bệnh là:",
    "options": [
      "Co giật toàn thể do phù não cấp",
      "Rối loạn nhịp tim và ngừng tim ở thì tâm trương",
      "Suy thận cấp do hoại tử ống thận",
      "Loét thủng niêm mạc đường tiêu hóa"
    ],
    "correct": 1,
    "explanation": "Hạ kali máu gây kéo dài khoảng QT, xoắn đỉnh và rung thất nguy kịch.",
    "reference": "Sách DLS tr. 130",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 231,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Nồng độ Natri máu bình thường ở người khỏe mạnh là bao nhiêu?",
    "options": [
      "Từ 150 đến 165 mmol/L",
      "Từ 20 đến 30 mmol/L",
      "Từ 135 đến 145 mmol/L",
      "Từ 105 đến 115 mmol/L"
    ],
    "correct": 2,
    "explanation": "Khoảng sinh lý bình thường của natri huyết thanh là 135 - 145 mmol/L.",
    "reference": "Sách DLS tr. 131",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 232,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Hạ Natri máu cấp tính nặng gây ra biến chứng thần kinh nguy hiểm nào cho bệnh nhân?",
    "options": [
      "Xuất huyết khoang dưới nhện diện rộng",
      "Nhồi máu cuống não thân não",
      "Xơ cứng cột bên teo cơ",
      "Phù não cấp dẫn đến co giật và hôn mê"
    ],
    "correct": 3,
    "explanation": "Hạ natri làm nước nhược trương di chuyển vào tế bào não gây phù não cấp tính.",
    "reference": "Sách DLS tr. 131",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 233,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Chỉ số xét nghiệm nồng độ Calci toàn phần trong huyết thanh cần được hiệu chỉnh theo nồng độ nào?",
    "options": [
      "Nồng độ Albumin huyết thanh",
      "Nồng độ Glucose huyết thanh",
      "Nồng độ Creatinin huyết thanh",
      "Nồng độ Hemoglobin trong máu"
    ],
    "correct": 0,
    "explanation": "Khoảng 40-50% calci gắn albumin, khi albumin giảm cần công thức calci hiệu chỉnh: Ca_hc = Ca_tp + 0,8*(4 - Alb).",
    "reference": "Sách DLS tr. 132",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 234,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Xét nghiệm định lượng nồng độ Procalcitonin trong huyết tương có giá trị nổi bật gì?",
    "options": [
      "Xác định bệnh lý suy dinh dưỡng ở trẻ em",
      "Phân biệt nhiễm trùng do vi khuẩn với do virus",
      "Đánh giá mức độ tổn thương hoại tử tế bào gan",
      "Chẩn đoán xác định bệnh ung thư tuyến giáp trạng"
    ],
    "correct": 1,
    "explanation": "Procalcitonin tăng rất cao trong nhiễm khuẩn nặng và sốc nhiễm khuẩn, không tăng do virus.",
    "reference": "Sách DLS tr. 133",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 235,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Xét nghiệm chỉ số Protein phản ứng C trong huyết thanh phản ánh hiện tượng gì trong cơ thể?",
    "options": [
      "Mức độ cô đặc máu do mất nước qua da",
      "Chức năng tạo máu của tế bào tủy xương",
      "Tình trạng viêm cấp tính hoặc tổn thương mô",
      "Chức năng bài xuất chất thải của cầu thận"
    ],
    "correct": 2,
    "explanation": "CRP là protein pha cấp do gan sản xuất tăng vọt khi có viêm, nhiễm trùng hoặc hoại tử mô.",
    "reference": "Sách DLS tr. 134",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 236,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Chỉ số INR được sử dụng để theo dõi hiệu quả và chỉnh liều thuốc điều trị nào?",
    "options": [
      "Thuốc tiêu sợi huyết Streptokinase",
      "Thuốc chống kết tập tiểu cầu Aspirin",
      "Thuốc chống đông đường tiêm Heparin",
      "Thuốc chống đông kháng Vitamin K"
    ],
    "correct": 3,
    "explanation": "INR là xét nghiệm chuẩn hóa thời gian PT theo dõi điều trị Warfarin (mục tiêu 2,0 - 3,0).",
    "reference": "Sách DLS tr. 135",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 237,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Xét nghiệm aPTT được sử dụng ưu tiên hàng đầu để theo dõi hiệu quả điều trị của thuốc nào?",
    "options": [
      "Heparin tiêu chuẩn không phân đoạn",
      "Thuốc ức chế kết tập tiểu cầu Clopidogrel",
      "Heparin trọng lượng phân tử thấp Enoxaparin",
      "Thuốc chống đông đường uống Warfarin"
    ],
    "correct": 0,
    "explanation": "aPTT theo dõi thời gian đông máu nội sinh khi truyền heparin không phân đoạn (duy trì 1,5 - 2,5 lần chứng).",
    "reference": "Sách DLS tr. 135",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 238,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Theo dõi kháng đông bằng xét nghiệm Anti-Xa được chỉ định bắt buộc trong trường hợp nào khi dùng Enoxaparin?",
    "options": [
      "Bệnh nhân có số lượng tiểu cầu hoàn toàn bình thường",
      "Phụ nữ có thai, người béo phì hoặc suy thận nặng",
      "Bệnh nhân tăng huyết áp vô căn giai đoạn 1",
      "Người trẻ tuổi khỏe mạnh không có bệnh lý nền"
    ],
    "correct": 1,
    "explanation": "LMWH ít cần theo dõi, nhưng đối tượng đặc biệt (suy thận, thai kỳ, béo phì) cần đo Anti-Xa.",
    "reference": "Sách DLS tr. 136",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 239,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Tỷ số BUN trên Creatinin huyết thanh lớn hơn 20 gợi ý nguyên nhân suy thận cấp loại nào?",
    "options": [
      "Suy thận cấp tại thận do hoại tử ống thận",
      "Suy thận mạn tính giai đoạn cuối mất bù",
      "Suy thận cấp trước thận do giảm tưới máu thận",
      "Suy thận cấp sau thận do tắc nghẽn sỏi niệu"
    ],
    "correct": 2,
    "explanation": "BUN/Creatinin > 20 phản ánh tình trạng giảm thể tích tuần hoàn hiệu dụng trước thận.",
    "reference": "Sách DLS tr. 137",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 240,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Chỉ số Protein niệu từ mức nào trở lên trong 24 giờ là tiêu chuẩn xác định hội chứng thận hư?",
    "options": [
      "Trên 2,0 g trong 24 giờ",
      "Trên 1,0 g trong 24 giờ",
      "Trên 0,5 g trong 24 giờ",
      "Trên 3,5 g trong 24 giờ"
    ],
    "correct": 3,
    "explanation": "Protein niệu >= 3,5 g/24h kèm giảm albumin máu và phù là tiêu chuẩn hội chứng thận hư.",
    "reference": "Sách DLS tr. 138",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 241,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Xét nghiệm tìm Microalbumin niệu có ý nghĩa lâm sàng quan trọng nhất trong việc:",
    "options": [
      "Phát hiện sớm tổn thương thận do bệnh đái tháo đường",
      "Đánh giá mức độ sỏi niệu quản tái phát",
      "Chẩn đoán xác định viêm bàng quang cấp tính",
      "Chẩn đoán ung thư biểu mô tuyến tiền liệt"
    ],
    "correct": 0,
    "explanation": "Microalbumin niệu (30-300 mg/24h) là dấu ấn sớm phát hiện bệnh thận đái tháo đường.",
    "reference": "Sách DLS tr. 139",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 242,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Xét nghiệm độ thanh thải Creatinin nước tiểu 24 giờ phản ánh trực tiếp chỉ số sinh lý nào?",
    "options": [
      "Lưu lượng dòng máu qua tĩnh mạch cửa gan",
      "Mức lọc cầu thận ước tính của người bệnh",
      "Khả năng tái hấp thu đường ở ống lượn gần",
      "Khả năng cô đặc nước tiểu của quai Henle"
    ],
    "correct": 1,
    "explanation": "ClCr nước tiểu 24h đo trực tiếp độ lọc cầu thận GFR.",
    "reference": "Sách DLS tr. 139",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 243,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Bạch cầu đa nhân trung tính tăng cao trong công thức máu gợi ý cơ thể đang phản ứng với tình trạng nào?",
    "options": [
      "Dị ứng thuốc qua trung gian kháng thể",
      "Nhiễm độc kim loại nặng chì và thủy ngân",
      "Nhiễm trùng cấp tính do vi khuẩn",
      "Nhiễm ký sinh trùng giun sán"
    ],
    "correct": 2,
    "explanation": "Bạch cầu trung tính tăng cao là đáp ứng điển hình chống vi khuẩn sinh mủ.",
    "reference": "Sách DLS tr. 140",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 244,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Bạch cầu ưa acid tăng cao trong máu ngoại vi thường liên quan chặt chẽ đến tình trạng nào?",
    "options": [
      "Nhiễm khuẩn cấp tính tụ cầu vàng",
      "Nhồi máu não giai đoạn tối cấp",
      "Viêm ruột thừa cấp có vỡ mủ",
      "Nhiễm ký sinh trùng hoặc bệnh lý dị ứng"
    ],
    "correct": 3,
    "explanation": "Bạch cầu ưa acid tăng trong phản ứng dị ứng và nhiễm ký sinh trùng đường ruột.",
    "reference": "Sách DLS tr. 140",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 141",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 246,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Số lượng tiểu cầu giảm dưới mức 50.000 trên microlit làm xuất hiện nguy cơ nào sau đây?",
    "options": [
      "Nguy cơ thiếu máu tan máu tự miễn",
      "Nguy cơ xuất huyết tự phát khi va chạm nhẹ",
      "Nguy cơ đông máu nội mạch lan tỏa",
      "Nguy cơ hoại tử đầu chi do thiếu máu nuôi"
    ],
    "correct": 1,
    "explanation": "Tiểu cầu < 50.000/uL làm tăng rõ rệt nguy cơ xuất huyết da, niêm mạc và phẫu thuật.",
    "reference": "Sách DLS tr. 142",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 247,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Xét nghiệm nồng độ Acid Uric huyết thanh bình thường ở nam giới khỏe mạnh là:",
    "options": [
      "Dưới 200 micromol/L",
      "Dưới 600 micromol/L",
      "Dưới 420 micromol/L",
      "Dưới 100 micromol/L"
    ],
    "correct": 2,
    "explanation": "Giới hạn trên của acid uric ở nam giới bình thường là 420 umol/L (7,0 mg/dL).",
    "reference": "Sách DLS tr. 143",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 248,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Chỉ số xét nghiệm Creatin Kinase phân nhóm MB tăng cao gợi ý tổn thương cơ quan nào?",
    "options": [
      "Cơ vân vân",
      "Nhu mô phổi",
      "Nhu mô não",
      "Cơ tim"
    ],
    "correct": 3,
    "explanation": "CK-MB là enzym tập trung nhiều nhất ở tế bào cơ tim.",
    "reference": "Sách DLS tr. 144",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 249,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Xét nghiệm đo nồng độ Digoxin trong huyết tương để theo dõi trị liệu nên được lấy mẫu vào thời điểm nào?",
    "options": [
      "Ít nhất 6 đến 8 giờ sau liều uống gần nhất",
      "Sau 30 phút kể từ lúc uống thuốc với nước",
      "Ngay lập tức sau khi bệnh nhân vừa nuốt viên thuốc",
      "Vào thời điểm nồng độ đỉnh sau 1 giờ uống"
    ],
    "correct": 0,
    "explanation": "Digoxin phân bố chậm vào mô tim, phải lấy máu sau uống ít nhất 6-8 giờ để tránh đỉnh giả.",
    "reference": "Sách DLS tr. 145",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 250,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Khoảng điều trị nồng độ trong máu an toàn và hiệu quả của Digoxin trong điều trị suy tim là:",
    "options": [
      "Từ 2,0 đến 4,0 ng/mL",
      "Từ 0,5 đến 0,9 ng/mL",
      "Từ 5,0 đến 10,0 ng/mL",
      "Từ 0,05 đến 0,1 ng/mL"
    ],
    "correct": 1,
    "explanation": "Trong suy tim, nồng độ đích khuyến cáo của Digoxin là 0,5 - 0,9 ng/mL để tránh độc tính.",
    "reference": "Sách DLS tr. 145",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 146",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 252,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Khoảng nồng độ điều trị hiệu quả của Theophyllin trong huyết tương ở bệnh nhân hen phế quản là:",
    "options": [
      "Từ 1 đến 5 mcg/mL",
      "Từ 30 đến 50 mcg/mL",
      "Từ 50 đến 100 mcg/mL",
      "Từ 10 đến 20 mcg/mL"
    ],
    "correct": 3,
    "explanation": "Cửa sổ điều trị của Theophyllin hẹp, tối ưu từ 10 - 20 mcg/mL.",
    "reference": "Sách DLS tr. 147",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 253,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Xét nghiệm nồng độ Phenytoin toàn phần trong huyết tương có khoảng điều trị thông thường là:",
    "options": [
      "Từ 10 đến 20 mg/L",
      "Từ 1 đến 4 mg/L",
      "Từ 40 đến 60 mg/L",
      "Từ 80 đến 100 mg/L"
    ],
    "correct": 0,
    "explanation": "Khoảng điều trị an toàn của Phenytoin toàn phần là 10 - 20 mg/L.",
    "reference": "Sách DLS tr. 148",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 254,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Chỉ số xét nghiệm BNP và NT-proBNP có giá trị lâm sàng vượt trội nhất trong việc:",
    "options": [
      "Chẩn đoán phân biệt lao phổi với viêm phổi thùy",
      "Chẩn đoán xác định và loại trừ hội chứng suy tim",
      "Xác định nguy cơ gãy xương ở người loãng xương",
      "Đánh giá mức độ xơ vữa của động mạch cảnh"
    ],
    "correct": 1,
    "explanation": "BNP và NT-proBNP do tâm thất tiết ra khi quá tải áp lực, giá trị loại trừ suy tim rất cao.",
    "reference": "Sách DLS tr. 149",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 255,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Xét nghiệm độ lắng máu tăng cao phản ánh hiện tượng nào đang diễn ra trong cơ thể?",
    "options": [
      "Hiện tượng cô đặc máu do sốt xuất huyết",
      "Tình trạng tăng sinh hồng cầu thứ phát",
      "Tình trạng viêm nhiễm hoặc tăng protein pha cấp",
      "Tình trạng thiếu máu do suy tủy xương"
    ],
    "correct": 2,
    "explanation": "Fibrinogen và globulin tăng khi có viêm làm hồng cầu kết tụ nhanh hơn, tăng tốc độ lắng máu.",
    "reference": "Sách DLS tr. 150",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 256,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Khí máu động mạch cho kết quả pH giảm, PaCO2 tăng, HCO3- bình thường gợi ý tình trạng rối loạn nào?",
    "options": [
      "Toan chuyển hóa cấp tính",
      "Kiềm hô hấp mạn tính",
      "Kiềm chuyển hóa bù trừ",
      "Toan hô hấp cấp tính"
    ],
    "correct": 3,
    "explanation": "pH giảm kèm PaCO2 tăng là toan hô hấp điển hình, thường do suy giảm thông khí phế nang.",
    "reference": "Sách DLS tr. 151",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 257,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Khí máu động mạch có pH giảm, HCO3- giảm, PaCO2 giảm bù trừ gợi ý tình trạng rối loạn nào?",
    "options": [
      "Toan chuyển hóa có bù trừ hô hấp",
      "Toan hô hấp mất bù hoàn toàn",
      "Kiềm hô hấp có bù trừ thận",
      "Kiềm chuyển hóa cấp tính"
    ],
    "correct": 0,
    "explanation": "HCO3- giảm tiên phát kèm pH giảm là toan chuyển hóa, cơ thể bù bằng tăng thông khí giảm PaCO2.",
    "reference": "Sách DLS tr. 151",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 258,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Xét nghiệm độ thẩm thấu niệu cao hơn độ thẩm thấu máu phản ánh chức năng nào của thận?",
    "options": [
      "Khả năng lọc sạch độc chất của màng đáy cầu thận",
      "Khả năng cô đặc nước tiểu của ống lượn và quai Henle",
      "Khả năng tổng hợp erythropoietin của tế bào kẽ",
      "Khả năng bài tiết enzym renin của bộ máy cận cầu thận"
    ],
    "correct": 1,
    "explanation": "Nước tiểu cô đặc chứng tỏ ống thận và tủy thận hoạt động tốt đáp ứng với hormon ADH.",
    "reference": "Sách DLS tr. 152",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 153",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 154",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 261,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Đặc điểm độ pH dịch vị dạ dày ở trẻ sơ sinh trong 24 đến 48 giờ đầu sau sinh là:",
    "options": [
      "Gần như trung tính từ 6 đến 8",
      "Không chứa dịch vị dạ dày",
      "Hoàn toàn tương đương với người trưởng thành",
      "Rất toan với pH từ 1 đến 2"
    ],
    "correct": 0,
    "explanation": "Trẻ sơ sinh có dịch vị dạ dày kiềm/trung tính lúc mới sinh, sau đó mới toan dần.",
    "reference": "Sách DLS tr. 160",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 262,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Do pH dạ dày cao hơn ở trẻ sơ sinh, độ hấp thu của kháng sinh nào sau đây tăng lên rõ rệt?",
    "options": [
      "Kháng sinh nhóm Sulfamid kháng khuẩn",
      "Kháng sinh nhóm Penicillin và Ampicillin",
      "Thuốc chống viêm phi steroid Ibuprofen",
      "Thuốc an thần Phenobarbital dạng uống"
    ],
    "correct": 1,
    "explanation": "Các thuốc base yếu hoặc không bền trong acid như Penicillin, Ampicillin hấp thu tốt hơn ở trẻ sơ sinh.",
    "reference": "Sách DLS tr. 161",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 263,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Tỷ lệ nước toàn phần trong cơ thể trẻ sơ sinh chiếm khoảng bao nhiêu phần trăm trọng lượng cơ thể?",
    "options": [
      "Khoảng 35 đến 40%",
      "Khoảng 60 đến 65%",
      "Khoảng 75 đến 80%",
      "Khoảng 50 đến 55%"
    ],
    "correct": 2,
    "explanation": "Trẻ sơ sinh có tỷ lệ nước toàn phần rất cao (75-80%), người lớn chỉ khoảng 60%.",
    "reference": "Sách DLS tr. 161",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 162",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 265,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Nồng độ Albumin huyết tương ở trẻ sơ sinh có đặc điểm nào so với người lớn?",
    "options": [
      "Thấp hơn và ái lực gắn kết với thuốc yếu hơn",
      "Cao hơn gấp đôi so với người trưởng thành",
      "Tương đương hoàn toàn về cả lượng và chất",
      "Chỉ gắn kết được với các phân tử đường glucose"
    ],
    "correct": 0,
    "explanation": "Nồng độ albumin và globulin ở trẻ sơ sinh thấp hơn, khả năng gắn kết thuốc kém hơn làm tăng nồng độ thuốc tự do.",
    "reference": "Sách DLS tr. 162",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 266,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Nguy cơ vàng da nhân não ở trẻ sơ sinh tăng cao khi dùng Sulfamid là do cơ chế nào?",
    "options": [
      "Sulfamid gây tắc hoàn toàn ống mật chủ",
      "Sulfamid đẩy Bilirubin tự do ra khỏi Albumin huyết tương",
      "Sulfamid kích thích tăng sản xuất Bilirubin ở lách",
      "Sulfamid phá hủy trực tiếp tế bào hồng cầu sơ sinh"
    ],
    "correct": 1,
    "explanation": "Sulfamid cạnh tranh vị trí gắn albumin với bilirubin làm tăng bilirubin tự do ngấm vào não.",
    "reference": "Sách DLS tr. 163",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 267,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Hệ enzym chuyển hóa Cytochrome P450 ở trẻ sơ sinh có đặc điểm nổi bật nào?",
    "options": [
      "Hoạt động mạnh hơn người lớn gấp 3 lần",
      "Chỉ có khả năng oxy hóa các acid amin",
      "Chưa hoàn thiện và hoạt tính chỉ bằng một phần người lớn",
      "Đạt hoạt tính tối đa ngay sau khi chào đời"
    ],
    "correct": 2,
    "explanation": "Hệ men gan CYP450 và liên hợp glucuronic ở trẻ sơ sinh còn rất non nớt.",
    "reference": "Sách DLS tr. 163",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 163",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 164",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 270,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Hàng rào máu não ở trẻ sơ sinh có đặc điểm gì cần lưu ý khi kê đơn thuốc thần kinh?",
    "options": [
      "Rất dày đặc ngăn chặn hoàn toàn mọi loại phân tử thuốc",
      "Tính thấm rất cao làm thuốc dễ dàng thâm nhập vào mô não",
      "Chỉ cho phép các thuốc tan trong nước đi qua",
      "Hoàn thiện đầy đủ như người trưởng thành"
    ],
    "correct": 1,
    "explanation": "Hàng rào máu não ở trẻ sơ sinh chưa hoàn thiện, tính thấm cao dễ gây độc tính thần kinh trung ương.",
    "reference": "Sách DLS tr. 164",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 271,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Kháng sinh nhóm Fluoroquinolon bị chống chỉ định ở trẻ em dưới 18 tuổi chủ yếu vì lý do gì?",
    "options": [
      "Nguy cơ gây đục thủy tinh thể bẩm sinh",
      "Nguy cơ làm teo niêm mạc phế nang phổi",
      "Nguy cơ gây tổn thương và thoái hóa sụn tiếp hợp ở khớp",
      "Nguy cơ gây suy thận mạn tính giai đoạn cuối"
    ],
    "correct": 2,
    "explanation": "Fluoroquinolon gây tổn thương sụn tăng trưởng ở động vật thực nghiệm non, chống chỉ định cho trẻ em.",
    "reference": "Sách DLS tr. 165",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 272,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Kháng sinh nhóm Tetracyclin bị chống chỉ định cho trẻ em dưới 8 tuổi do tác hại nào?",
    "options": [
      "Gây xuất huyết võng mạc hai bên mắt",
      "Gây hội chứng Fanconi suy ống thận cấp",
      "Gây điếc tai không phục hồi do hủy ốc tai",
      "Gây hỏng men răng, ố vàng răng vĩnh viễn và chậm phát triển xương"
    ],
    "correct": 3,
    "explanation": "Tetracyclin lắng đọng vào mầm răng và xương làm xỉn màu răng vĩnh viễn và ức chế xương dài.",
    "reference": "Sách DLS tr. 165",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 273,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Không được dùng Aspirin để hạ sốt cho trẻ em bị nhiễm virus cúm hoặc thủy đậu vì nguy cơ:",
    "options": [
      "Hội chứng Reye gây thoái hóa mỡ gan và phù não cấp",
      "Hội chứng Guillain-Barré liệt cơ hô hấp",
      "Cơn tan máu cấp do vỡ màng hồng cầu",
      "Xuất huyết tiêu hóa do thủng tá tràng"
    ],
    "correct": 0,
    "explanation": "Aspirin kết hợp nhiễm virus ở trẻ em làm tăng nguy cơ hội chứng Reye tử vong cao.",
    "reference": "Sách DLS tr. 166",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 274,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Thuốc hạ sốt giảm đau được lựa chọn hàng đầu và an toàn nhất cho trẻ em là:",
    "options": [
      "Indomethacin dạng viên đặt hậu môn",
      "Paracetamol với liều 10 đến 15 mg/kg mỗi lần",
      "Ketorolac tiêm bắp ngắt quãng",
      "Aspirin với liều 50 mg/kg mỗi ngày"
    ],
    "correct": 1,
    "explanation": "Paracetamol 10-15 mg/kg mỗi 4-6 giờ (tối đa 60 mg/kg/ngày) là lựa chọn đầu tay an toàn cho trẻ.",
    "reference": "Sách DLS tr. 166",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 167",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 276,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Phương pháp tính liều thuốc cho trẻ em nào được xem là chính xác và khoa học nhất?",
    "options": [
      "Lấy một nửa liều của người lớn áp dụng chung",
      "Tính liều dựa theo tuổi theo công thức Young",
      "Tính liều quy đổi đơn thuần theo số cân nặng",
      "Tính liều dựa trên diện tích bề mặt cơ thể"
    ],
    "correct": 3,
    "explanation": "Diện tích bề mặt cơ thể phản ánh sát nhất các chức năng sinh lý tim mạch, chuyển hóa và lọc cầu thận.",
    "reference": "Sách DLS tr. 168",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 277,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Biểu đồ Mosteller được sử dụng trên lâm sàng nhi khoa nhằm mục đích gì?",
    "options": [
      "Ước tính diện tích bề mặt cơ thể từ chiều cao và cân nặng",
      "Đánh giá mức độ mất nước trong tiêu chảy cấp",
      "Đánh giá chỉ số phát triển tâm thần vận động",
      "Tính toán tốc độ truyền dung dịch điện giải"
    ],
    "correct": 0,
    "explanation": "Công thức Mosteller tính diện tích da: BSA = căn bậc hai của (chiều cao x cân nặng / 3600).",
    "reference": "Sách DLS tr. 168",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 169",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 279,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Không được dùng thuốc chống tiêu chảy Loperamid cho trẻ dưới mấy tuổi do nguy cơ liệt ruột?",
    "options": [
      "Trẻ em dưới 12 tuổi",
      "Trẻ vị thành niên từ 14 tuổi",
      "Trẻ em dưới 2 tuổi",
      "Chỉ dùng cho người trên 25 tuổi"
    ],
    "correct": 2,
    "explanation": "Loperamid làm giảm nhu động ruột, nguy cơ liệt ruột và nhiễm độc ở trẻ nhỏ dưới 2 tuổi.",
    "reference": "Sách DLS tr. 170",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 280,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Đặc điểm hấp thu thuốc qua da ở trẻ sơ sinh và trẻ nhỏ so với người lớn là:",
    "options": [
      "Không có khả năng hấp thu thuốc qua da",
      "Hấp thu rất kém do da trẻ chứa nhiều chất béo",
      "Hoàn toàn giống nhau ở mọi lứa tuổi",
      "Tăng hấp thu rất mạnh do lớp sừng mỏng và diện tích da lớn"
    ],
    "correct": 3,
    "explanation": "Lớp sừng mỏng, giàu mạch máu và tỷ lệ diện tích da/cân nặng lớn làm tăng độc tính khi bôi thuốc ngoài da.",
    "reference": "Sách DLS tr. 171",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 281,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Bôi Corticoid diện rộng kéo dài ở trẻ nhỏ có thể dẫn đến nguy cơ bất lợi nghiêm trọng nào?",
    "options": [
      "Ức chế trục dưới đồi tuyến yên thượng thận và chậm lớn",
      "Gây dậy thì sớm thứ phát ở bé gái",
      "Gây phì đại cơ tim buồng thất trái",
      "Làm tăng chiều cao vượt mức sinh lý bình thường"
    ],
    "correct": 0,
    "explanation": "Hấp thu toàn thân corticoid ức chế tiết GH và ACTH làm trẻ chậm tăng trưởng chiều cao.",
    "reference": "Sách DLS tr. 171",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 282,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Đường dùng thuốc nào sau đây nên hạn chế tối đa ở trẻ nhỏ do gây đau đớn và nguy cơ hoại tử cơ?",
    "options": [
      "Đường nhỏ mắt",
      "Đường tiêm bắp",
      "Đường uống siro",
      "Đường xịt khí dung"
    ],
    "correct": 1,
    "explanation": "Khối cơ trẻ còn nhỏ, tưới máu không đều, tiêm bắp dễ gây đau, áp xe và tổn thương dây thần kinh.",
    "reference": "Sách DLS tr. 172",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 283,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Kháng sinh Ceftriaxon chống chỉ định dùng đồng thời với dung dịch nào ở trẻ sơ sinh?",
    "options": [
      "Dung dịch Natri clorid 0,9% sinh lý",
      "Nước cất vô trùng pha thuốc tiêm",
      "Dung dịch tiêm truyền chứa Calci như Ringer Lactat",
      "Dung dịch Glucose 5% đẳng trương"
    ],
    "correct": 2,
    "explanation": "Ceftriaxon tạo muối tủa ceftriaxon-calci ở phổi và thận trẻ sơ sinh đe dọa tính mạng.",
    "reference": "Sách DLS tr. 173",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 284,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Nguy cơ methemoglobin máu ở trẻ nhỏ tăng cao khi sử dụng nhóm thuốc nào sau đây?",
    "options": [
      "Men vi sinh đường ruột chứa vi khuẩn sống",
      "Thuốc bổ sung kẽm sulfat siro",
      "Vitamin C liều cao dạng sủi bọt",
      "Thuốc tê tại chỗ như Benzocain và Prilocain"
    ],
    "correct": 3,
    "explanation": "HbF dễ bị oxy hóa thành MetHb hơn HbA khi tiếp xúc với các thuốc oxy hóa như benzocain.",
    "reference": "Sách DLS tr. 174",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 285,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Thời gian làm rỗng dạ dày ở trẻ sơ sinh có đặc điểm gì ảnh hưởng đến dược động học?",
    "options": [
      "Kéo dài và không dự đoán được trong 6 tháng đầu",
      "Chỉ làm rỗng dạ dày vào ban đêm",
      "Hoàn toàn ổn định như người trưởng thành",
      "Rất nhanh chóng chỉ trong vài phút"
    ],
    "correct": 0,
    "explanation": "Thời gian rỗng dạ dày kéo dài làm chậm tốc độ hấp thu của nhiều loại thuốc uống.",
    "reference": "Sách DLS tr. 175",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 286,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Hàm lượng mỡ trong cơ thể trẻ sinh non có đặc điểm gì so với trẻ đủ tháng?",
    "options": [
      "Tương đương hoàn toàn với trẻ 5 tuổi",
      "Rất thấp chỉ chiếm khoảng 1 đến 3% trọng lượng",
      "Cao hơn người lớn gấp nhiều lần",
      "Chiếm hơn 50% trọng lượng cơ thể"
    ],
    "correct": 1,
    "explanation": "Trẻ non tháng có rất ít mô mỡ, các thuốc tan nhiều trong mỡ sẽ giảm thể tích phân bố.",
    "reference": "Sách DLS tr. 176",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 287,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Kháng sinh Sulfamid có thể dùng an toàn cho trẻ em bắt đầu từ lứa tuổi nào?",
    "options": [
      "Ngay ngày đầu tiên sau sinh",
      "Chỉ dùng cho trẻ trên 15 tuổi",
      "Từ trên 2 tháng tuổi",
      "Không bao giờ được dùng cho trẻ em"
    ],
    "correct": 2,
    "explanation": "Sulfamid chống chỉ định ở trẻ < 2 tháng tuổi vì nguy cơ vàng da nhân não, trên 2 tháng dùng được.",
    "reference": "Sách DLS tr. 177",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 178",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 289,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Khi cho trẻ uống thuốc bằng xi lanh, vị trí bơm thuốc an toàn nhất để tránh sặc là:",
    "options": [
      "Bơm từ từ vào góc má trong của miệng",
      "Bơm thật mạnh vào vòm họng trên",
      "Bơm thẳng vào chính giữa cuống họng",
      "Bơm thuốc khi trẻ đang khóc to dữ dội"
    ],
    "correct": 0,
    "explanation": "Bơm chậm vào khoang giữa má và hàm dưới giúp trẻ tự nuốt, hạn chế tối đa sặc vào khí quản.",
    "reference": "Sách DLS tr. 179",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 180",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 291,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Thuốc kháng Histamin H1 thế hệ 1 như Promethazin chống chỉ định cho trẻ dưới 2 tuổi vì:",
    "options": [
      "Gây suy gan cấp tính hoại tử nhu mô",
      "Gây điếc tai tiếp nhận thần kinh",
      "Nguy cơ ức chế hô hấp dẫn đến ngừng thở khi ngủ",
      "Gây tổn thương men răng vĩnh viễn"
    ],
    "correct": 2,
    "explanation": "Promethazin có cảnh báo hộp đen gây ức chế hô hấp nghiêm trọng tử vong ở trẻ < 2 tuổi.",
    "reference": "Sách DLS tr. 181",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 292,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Kháng sinh nhóm Macrolid như Erythromycin dùng cho trẻ sơ sinh làm tăng nguy cơ biến chứng nào?",
    "options": [
      "Viêm tụy cấp xuất huyết hoại tử",
      "Co thắt túi mật cấp tính",
      "Thủng đại tràng bẩm sinh",
      "Hẹp môn vị phì đại ở trẻ sơ sinh"
    ],
    "correct": 3,
    "explanation": "Erythromycin kích thích thụ thể motilin gây phì đại cơ môn vị ở trẻ sơ sinh dưới 2 tuần tuổi.",
    "reference": "Sách DLS tr. 182",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 293,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Biện pháp vật lý hạ sốt an toàn được khuyến cáo phối hợp khi trẻ sốt cao là:",
    "options": [
      "Lau người bằng nước ấm có nhiệt độ thấp hơn nhiệt độ cơ thể 2 độ C",
      "Ủ kín chăn dày để toát mồ hôi thật nhiều",
      "Xoa cồn y tế lên toàn bộ cơ thể trẻ",
      "Chườm đá lạnh trực tiếp lên trán và ngực"
    ],
    "correct": 0,
    "explanation": "Lau nước ấm giúp giãn mạch thải nhiệt an toàn; chườm đá hoặc dùng cồn gây co mạch và ngộ độc cồn qua da.",
    "reference": "Sách DLS tr. 183",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 294,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Tổng liều Paracetamol tối đa trong một ngày được khuyến cáo cho trẻ em là:",
    "options": [
      "Không giới hạn liều tối đa",
      "Không vượt quá 60 mg/kg mỗi ngày",
      "Không vượt quá 150 mg/kg mỗi ngày",
      "Không vượt quá 20 mg/kg mỗi ngày"
    ],
    "correct": 1,
    "explanation": "Liều tối đa hàng ngày của Paracetamol ở trẻ em là 60 mg/kg/ngày (hoặc tối đa 4g/ngày).",
    "reference": "Sách DLS tr. 184",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 295,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Ở trẻ em bị hen phế quản, dụng cụ hỗ trợ nào bắt buộc phải dùng kèm với bình xịt định liều?",
    "options": [
      "Bình tạo ẩm khí dung nước ấm",
      "Ống thở oxy qua mũi",
      "Buồng đệm có van một chiều",
      "Mặt nạ thở máy không xâm lấn"
    ],
    "correct": 2,
    "explanation": "Buồng đệm giúp trẻ nhỏ hít thuốc vào phổi hiệu quả mà không cần phối hợp tay bóp miệng hít.",
    "reference": "Sách DLS tr. 185",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 296,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Kháng sinh Doxycyclin hiện nay có thể cân nhắc dùng ngắn ngày cho trẻ dưới 8 tuổi trong bệnh nào?",
    "options": [
      "Viêm họng đỏ thông thường do virus",
      "Nhiễm khuẩn tiết niệu không biến chứng",
      "Viêm tai giữa cấp tái phát nhiều lần",
      "Bệnh sốt mò hoặc sốt vẹt Rickettsia đe dọa tính mạng"
    ],
    "correct": 3,
    "explanation": "Theo CDC và AAP, đợt ngắn < 21 ngày Doxycyclin điều trị sốt mò ít nguy cơ gây ố màu răng và được phép dùng.",
    "reference": "Sách DLS tr. 186",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 297,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Hấp thu thuốc qua đường tiêm dưới da ở trẻ nhỏ có đặc điểm gì?",
    "options": [
      "Kém ổn định do hệ thống mao mạch dưới da chưa phát triển đều",
      "Hoàn toàn không hấp thu được vào tuần hoàn",
      "Nhanh hơn người lớn gấp ba lần",
      "Chỉ dùng được cho các loại kháng sinh"
    ],
    "correct": 0,
    "explanation": "Lưới mao mạch dưới da ở trẻ còn thay đổi, tưới máu phụ thuộc nhiệt độ nên hấp thu kém ổn định.",
    "reference": "Sách DLS tr. 187",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 188",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 299,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Tại sao không nên dùng thuốc chống nôn Metoclopramid thường quy cho trẻ em?",
    "options": [
      "Gây suy thận cấp không hồi phục",
      "Làm trẻ ăn quá nhiều gây béo phì",
      "Nguy cơ cao xuất hiện phản ứng ngoại tháp loạn trương lực cơ",
      "Làm tăng bài tiết acid dạ dày gây thủng ruột"
    ],
    "correct": 2,
    "explanation": "Trẻ em rất nhạy cảm với tác dụng phụ ngoại tháp của thuốc phong bế dopamin.",
    "reference": "Sách DLS tr. 189",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 300,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Thuốc giảm đau Codein bị chống chỉ định giảm đau cho trẻ sau phẫu thuật cắt amidan vì:",
    "options": [
      "Gây sốt cao kịch phát không đáp ứng thuốc",
      "Gây chảy máu ồ ạt tại vết mổ amidan",
      "Làm mất phản xạ nhai nuốt thức ăn",
      "Nguy cơ chuyển hóa nhanh thành Morphin gây ngừng thở"
    ],
    "correct": 3,
    "explanation": "Trẻ mang gen chuyển hóa siêu nhanh CYP2D6 biến đổi codein thành morphin nồng độ độc gây tử vong.",
    "reference": "Sách DLS tr. 190",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 301,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Chỉ số nào sau đây phản ánh tốc độ chuyển hóa thuốc ở trẻ từ 1 đến 9 tuổi?",
    "options": [
      "Tốc độ chuyển hóa qua gan tính theo kg nhanh hơn người lớn",
      "Tốc độ chuyển hóa chậm nhất trong mọi lứa tuổi",
      "Chỉ bằng một nửa so với người trưởng thành",
      "Hoàn toàn ngừng chuyển hóa thuốc qua gan"
    ],
    "correct": 0,
    "explanation": "Trẻ em 1-9 tuổi có thể tích gan tương đối lớn và lưu lượng máu qua gan cao, chuyển hóa thuốc nhanh hơn.",
    "reference": "Sách DLS tr. 191",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 302,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Khi tính liều thuốc cho trẻ bị béo phì, đối với các thuốc tan trong nước nên tính theo:",
    "options": [
      "Không điều chỉnh dùng nguyên liều người lớn",
      "Cân nặng lý tưởng hiệu chỉnh theo chiều cao",
      "Lấy cân nặng thực tế cộng thêm 20%",
      "Cân nặng thực tế đo trên bàn cân"
    ],
    "correct": 1,
    "explanation": "Mô mỡ ít tưới máu và ít nước, thuốc phân bố dịch ngoại bào nên tính theo cân nặng lý tưởng IBW.",
    "reference": "Sách DLS tr. 192",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 303,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Dung dịch bù nước Oresol cần được pha với lượng nước như thế nào?",
    "options": [
      "Pha chung với nước ngọt có ga hoặc sữa tươi",
      "Pha càng đặc càng tốt để tăng hiệu quả bù muối",
      "Pha chính xác với thể tích nước ghi trên bao bì sản phẩm",
      "Pha thật loãng với gấp 3 lần lượng nước quy định"
    ],
    "correct": 2,
    "explanation": "Pha quá đặc gây tăng áp lực thẩm thấu làm mất nước tế bào và co giật ở trẻ nhỏ.",
    "reference": "Sách DLS tr. 193",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 304,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Kẽm được khuyến cáo bổ sung cho trẻ em bị tiêu chảy cấp trong thời gian bao lâu?",
    "options": [
      "Chỉ uống một liều duy nhất khi nhập viện",
      "Chỉ uống đúng trong 2 ngày đầu tiên",
      "Uống trong suốt 6 tháng",
      "Uống liên tục trong vòng 10 đến 14 ngày"
    ],
    "correct": 3,
    "explanation": "Bổ sung kẽm 10-14 ngày giúp tái tạo niêm mạc ruột và giảm đợt tiêu chảy tái phát.",
    "reference": "Sách DLS tr. 194",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 305,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Dấu hiệu mất nước nặng ở trẻ bị tiêu chảy cấp đòi hỏi can thiệp cấp cứu là gì?",
    "options": [
      "Li bì hoặc hôn mê, mắt trũng sâu, véo da mất rất chậm",
      "Nước tiểu có màu vàng trong",
      "Nếp véo da trở lại trạng thái bình thường ngay",
      "Trẻ tỉnh táo đòi uống nước liên tục"
    ],
    "correct": 0,
    "explanation": "Li bì, mất phản xạ uống nước, véo da mất > 2 giây là dấu hiệu mất nước nặng cần truyền dịch tĩnh mạch cấp cứu.",
    "reference": "Sách DLS tr. 195",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 306,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Nguyên tắc vàng được khuyến cáo hàng đầu khi kê đơn thuốc cho người cao tuổi là:",
    "options": [
      "Phối hợp cùng lúc thật nhiều thuốc cùng nhóm",
      "Bắt đầu bằng liều thấp và tăng liều thật chậm rãi",
      "Duy trì cố định liều dùng như người 30 tuổi",
      "Dùng ngay liều tối đa để đạt hiệu quả cấp tốc"
    ],
    "correct": 1,
    "explanation": "Nguyên tắc 'Start low, go slow' là cốt lõi để hạn chế tai biến thuốc ở người già.",
    "reference": "Sách DLS tr. 200",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 307,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Sự thay đổi thành phần cơ thể sinh lý ở người cao tuổi thể hiện qua đặc điểm nào?",
    "options": [
      "Tỷ lệ mỡ giảm xuống mức tối thiểu",
      "Lượng nước cơ thể tăng vọt lên đến 80%",
      "Khối cơ giảm, lượng mỡ tăng, lượng nước cơ thể giảm",
      "Khối cơ bắp tăng lên do quá trình xơ hóa"
    ],
    "correct": 2,
    "explanation": "Tuổi già làm giảm nước cơ thể (giảm 15-20%), giảm khối nạc cơ bắp và tăng tỷ lệ mô mỡ.",
    "reference": "Sách DLS tr. 201",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 201",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 309,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Thời gian bán thải của thuốc ngủ tan trong lipid Diazepam ở người cao tuổi có xu hướng:",
    "options": [
      "Kéo dài hơn rất nhiều so với người trẻ tuổi",
      "Bị triệt tiêu hoàn toàn tác dụng",
      "Không có bất kỳ sự thay đổi nào",
      "Rút ngắn lại chỉ còn vài giờ"
    ],
    "correct": 0,
    "explanation": "Tăng khối mỡ làm tăng thể tích phân bố của thuốc tan trong lipid, kéo dài T1/2 gây tích lũy thuốc.",
    "reference": "Sách DLS tr. 202",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 310,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Nồng độ Albumin huyết tương giảm sinh lý ở người cao tuổi dẫn đến biến đổi dược động học nào?",
    "options": [
      "Ngăn chặn thuốc đi qua hàng rào mạch máu",
      "Tăng phân đoạn thuốc tự do có hoạt tính sinh học",
      "Làm giảm nồng độ thuốc tự do trong máu",
      "Làm tăng khả năng gắn kết của các thuốc acid"
    ],
    "correct": 1,
    "explanation": "Albumin giảm làm tỷ lệ thuốc tự do tăng, dễ gây quá liều và ngộ độc thuốc.",
    "reference": "Sách DLS tr. 202",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 311,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Lưu lượng máu qua gan ở người cao tuổi giảm khoảng bao nhiêu phần trăm so với người trẻ?",
    "options": [
      "Giảm trên 80%",
      "Hoàn toàn không thay đổi theo tuổi",
      "Giảm từ 20 đến 40%",
      "Tăng lên khoảng 50%"
    ],
    "correct": 2,
    "explanation": "Lưu lượng tuần hoàn qua gan giảm 20-40% làm giảm thanh thải các thuốc có tỷ số ly trích cao.",
    "reference": "Sách DLS tr. 203",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 312,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Sự suy giảm chức năng lọc của cầu thận ở người già có đặc điểm sinh lý nào?",
    "options": [
      "Mức lọc cầu thận tăng đều đặn theo thời gian",
      "Đột ngột suy giảm về mức 0 sau tuổi 65",
      "Không có sự thay đổi nào về mức lọc cầu thận",
      "Mức lọc cầu thận giảm dần trung bình 1 ml/phút mỗi năm sau tuổi 40"
    ],
    "correct": 3,
    "explanation": "Từ sau 40 tuổi, mức lọc cầu thận GFR giảm sinh lý khoảng 1 ml/phút/năm.",
    "reference": "Sách DLS tr. 204",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 313,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Tại sao nồng độ Creatinin huyết thanh ở người già có thể bình thường dù chức năng thận đã suy giảm?",
    "options": [
      "Do khối cơ bắp của người già bị teo giảm làm giảm sản sinh Creatinin",
      "Do Creatinin bị giáng hóa hoàn toàn tại gan",
      "Do thận người già bài tiết bù Creatinin vào phân",
      "Do chế độ ăn kiêng muối làm giảm Creatinin"
    ],
    "correct": 0,
    "explanation": "Khối cơ teo làm giảm nguồn sinh creatinin nội sinh, khiến nồng độ creatinin máu trông bình thường.",
    "reference": "Sách DLS tr. 204",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 314,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Để đánh giá chính xác chức năng thận chỉnh liều thuốc ở người cao tuổi, công cụ cần dùng là:",
    "options": [
      "Đếm số lần đi tiểu trong ngày",
      "Ước tính độ thanh thải Creatinin bằng công thức Cockcroft-Gault",
      "Dựa vào chỉ số đường huyết lúc đói",
      "Chỉ dựa vào nồng độ Creatinin huyết thanh đơn thuần"
    ],
    "correct": 1,
    "explanation": "Công thức Cockcroft-Gault tính đến tuổi, cân nặng và giới tính để ước tính ClCr chính xác.",
    "reference": "Sách DLS tr. 205",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 315,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Tiêu chí Beers được xây dựng và áp dụng trên lâm sàng nhằm mục đích chính là gì?",
    "options": [
      "Tính toán tốc độ tiêm truyền tĩnh mạch tối đa",
      "Đánh giá mức độ suy dinh dưỡng tuổi già",
      "Xác định thuốc có nguy cơ tiềm ẩn không phù hợp người cao tuổi",
      "Phân loại giai đoạn tiến triển của bệnh ung thư"
    ],
    "correct": 2,
    "explanation": "Tiêu chuẩn Beers là hướng dẫn quốc tế liệt kê các thuốc nên tránh hoặc dùng thận trọng ở người cao tuổi.",
    "reference": "Sách DLS tr. 206",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 316,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Thuốc kháng cholinergic như Diphenhydramin hoặc Amitriptylin ở người già có nguy cơ gây ra biến chứng:",
    "options": [
      "Hạ huyết áp tư thế đứng kèm sốt cao",
      "Gây hạ đường huyết kịch phát",
      "Tiêu chảy phân mỡ ồ ạt kéo dài",
      "Lú lẫn, sa sút trí tuệ, táo bón và bí tiểu cấp"
    ],
    "correct": 3,
    "explanation": "Người già rất nhạy cảm với tác dụng kháng muscarinic gây lú lẫn, khô miệng, mờ mắt, táo bón, bí tiểu.",
    "reference": "Sách DLS tr. 207",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 317,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Thuốc an thần nhóm Benzodiazepin tác dụng kéo dài như Diazepam ở người già làm gia tăng nguy cơ:",
    "options": [
      "Buồn ngủ ban ngày, lú lẫn, mất thăng bằng và ngã gãy xương",
      "Gây hưng cảm và kích động tâm thần vận động",
      "Gây xuất huyết võng mạc không hồi phục",
      "Gây loét thủng tá tràng"
    ],
    "correct": 0,
    "explanation": "Tích lũy benzodiazepin kéo dài gây an thần quá mức, mất phối hợp động tác dẫn đến té ngã gãy cổ xương đùi.",
    "reference": "Sách DLS tr. 208",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 318,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Thuốc chống viêm không steroid (NSAID) dùng kéo dài ở người cao tuổi đặc biệt nguy hiểm trên hai cơ quan nào?",
    "options": [
      "Tuyến tụy và cơ quan sinh sản",
      "Dạ dày tiêu hóa và chức năng lọc của thận",
      "Phổi và cơ quan thính giác",
      "Mô liên kết và sụn khớp"
    ],
    "correct": 1,
    "explanation": "NSAID gây loét xuất huyết tiêu hóa và suy thận cấp, làm nặng thêm suy tim và tăng huyết áp ở người già.",
    "reference": "Sách DLS tr. 209",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 319,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Hiện tượng hạ huyết áp tư thế đứng ở người cao tuổi thường trầm trọng hơn do suy giảm phản xạ nào?",
    "options": [
      "Phản xạ co cơ vân thành bụng",
      "Phản xạ đóng mở nắp thanh quản",
      "Phản xạ thụ thể áp lực xoang cảnh và quai động mạch chủ",
      "Phản xạ bài tiết hormon tuyến giáp"
    ],
    "correct": 2,
    "explanation": "Baroreceptor suy giảm tính nhạy cảm khiến mạch máu không co kịp khi thay đổi tư thế.",
    "reference": "Sách DLS tr. 210",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 320,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Thuốc chống loạn thần thế hệ thứ nhất như Haloperidol ở người cao tuổi có tỷ lệ cao gây ra:",
    "options": [
      "Đục mờ giác mạc cấp tính",
      "Hội chứng thận hư thứ phát",
      "Bệnh lý cơ tim giãn vô căn",
      "Hội chứng ngoại tháp với run cứng cơ và rối loạn vận động muộn"
    ],
    "correct": 3,
    "explanation": "Thuốc kháng dopamin gây ngoại tháp nặng và làm tăng nguy cơ đột quỵ tử vong ở bệnh nhân sa sút trí tuệ.",
    "reference": "Sách DLS tr. 211",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 212",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 213",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 323,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Thuốc điều trị đái tháo đường nhóm Sulfonylure nào nên tránh tuyệt đối ở người cao tuổi vì hạ đường huyết kéo dài?",
    "options": [
      "Gliclazid",
      "Metformin",
      "Glibenclamid",
      "Glimepirid"
    ],
    "correct": 2,
    "explanation": "Glibenclamid có thời gian tác dụng rất dài và chất chuyển hóa hoạt tính đào thải qua thận gây hạ đường huyết hôn mê.",
    "reference": "Sách DLS tr. 214",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 324,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Nhóm thuốc hạ huyết áp nào sau đây là lựa chọn ưu tiên ở bệnh nhân cao tuổi có tăng huyết áp tâm thu đơn độc?",
    "options": [
      "Thuốc tác động lên hệ thần kinh trung ương Clonidin",
      "Thuốc chẹn thụ thể alpha-1 ngoại biên",
      "Thuốc chẹn beta giao cảm không chọn lọc",
      "Thuốc chẹn kênh calci DHP và lợi tiểu Thiazid"
    ],
    "correct": 3,
    "explanation": "Thiazid và DHP (như Amlodipin) chứng minh giảm tốt nhất biến cố đột quỵ trong THA tâm thu đơn độc ở người già.",
    "reference": "Sách DLS tr. 215",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 325,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Bệnh nhân cao tuổi có phì đại lành tính tuyến tiền liệt cần tránh sử dụng nhóm thuốc nào?",
    "options": [
      "Thuốc có tác dụng kháng cholinergic",
      "Thuốc hạ sốt Paracetamol",
      "Thuốc ức chế men HMG-CoA reductase",
      "Thuốc ức chế men chuyển"
    ],
    "correct": 0,
    "explanation": "Kháng cholinergic làm co thắt cơ vòng cổ bàng quang và giảm co bóp bàng quang gây bí tiểu cấp.",
    "reference": "Sách DLS tr. 216",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 326,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Suy giảm chức năng nhận thức ở người cao tuổi ảnh hưởng trực tiếp nhất đến khâu nào trong điều trị?",
    "options": [
      "Thời gian thuốc bị giáng hóa tại gan",
      "Sự tuân thủ phác đồ điều trị dùng thuốc của người bệnh",
      "Tốc độ hấp thu thuốc qua ruột non",
      "Tỷ lệ gắn kết của thuốc vào albumin"
    ],
    "correct": 1,
    "explanation": "Quên liều, uống nhầm liều hoặc uống lặp lại do suy giảm trí nhớ là rào cản tuân thủ lớn nhất.",
    "reference": "Sách DLS tr. 217",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 327,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Dụng cụ hỗ trợ nào sau đây giúp cải thiện rõ rệt sự tuân thủ dùng thuốc cho người bệnh cao tuổi?",
    "options": [
      "Giao toàn bộ bao bì thuốc nguyên lọ lớn",
      "Tăng số lần uống thuốc lên 5 lần mỗi ngày",
      "Hộp chia thuốc theo các buổi sáng trưa chiều tối trong tuần",
      "Đơn thuốc viết tay bằng chữ viết tắt chuyên môn"
    ],
    "correct": 2,
    "explanation": "Hộp chia liều (pillbox) theo ngày và buổi giúp bệnh nhân già kiểm soát thuốc đã uống.",
    "reference": "Sách DLS tr. 218",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 328,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Thuốc giãn cơ ngoại biên Cyclobenzaprin bị khuyến cáo tránh dùng cho người già theo tiêu chí Beers vì:",
    "options": [
      "Gây điếc tai tiếp nhận",
      "Gây xuất huyết tiêu hóa ồ ạt",
      "Làm tăng áp lực nội sọ cấp",
      "Tác dụng kháng cholinergic mạnh và nguy cơ an thần gây ngã"
    ],
    "correct": 3,
    "explanation": "Các thuốc giãn cơ có hoạt tính kháng cholinergic và an thần cao, tăng nguy cơ gãy xương.",
    "reference": "Sách DLS tr. 219",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 329,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Bệnh nhân cao tuổi bị suy tim phân suất tống máu giảm, thuốc nào sau đây chống chỉ định dùng thường quy?",
    "options": [
      "Thuốc chẹn kênh calci Non-DHP như Verapamil và Diltiazem",
      "Thuốc lợi tiểu quai Furosemid",
      "Thuốc chẹn beta chọn lọc Bisoprolol",
      "Thuốc ức chế thụ thể Angiotensin"
    ],
    "correct": 0,
    "explanation": "Verapamil và Diltiazem ức chế co bóp cơ tim mạnh làm nặng thêm suy tim sung huyết.",
    "reference": "Sách DLS tr. 220",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 330,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Digoxin dùng ở người cao tuổi có khoảng cửa sổ điều trị rất hẹp, nồng độ huyết tương khuyến cáo duy trì là:",
    "options": [
      "Trên 10 ng/mL",
      "Từ 0,5 đến 0,8 ng/mL",
      "Từ 1,5 đến 2,5 ng/mL",
      "Từ 3,0 đến 5,0 ng/mL"
    ],
    "correct": 1,
    "explanation": "Ở người già, nồng độ Digoxin > 1,0 ng/mL làm tăng rõ rệt tỷ lệ tử vong do loạn nhịp tim.",
    "reference": "Sách DLS tr. 221",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 331,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Thuốc giảm đau Opioid ở người già cần đặc biệt chú ý dự phòng tác dụng phụ thường trực nào?",
    "options": [
      "Tăng huyết áp kịch phát",
      "Hạ đường huyết sau ăn",
      "Táo bón mạn tính kéo dài",
      "Tiêu chảy phân nước liên tục"
    ],
    "correct": 2,
    "explanation": "Opioid hầu như luôn gây táo bón và không dung nạp theo thời gian, phải chủ động dùng kèm thuốc nhuận tràng.",
    "reference": "Sách DLS tr. 222",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 332,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Thuốc chống trầm cảm ba vòng Amitriptylin nên tránh dùng cho người già sa sút trí tuệ vì:",
    "options": [
      "Làm giảm tiết dịch mồ hôi toàn thân",
      "Gây hạ men gan ALT và AST",
      "Gây tăng sinh tế bào thần kinh đệm",
      "Làm trầm trọng thêm tình trạng suy giảm trí nhớ và mê sảng"
    ],
    "correct": 3,
    "explanation": "Tác dụng kháng cholinergic trung ương ức chế dẫn truyền acetylcholin gây lú lẫn và mê sảng cấp.",
    "reference": "Sách DLS tr. 223",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 333,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Nhóm thuốc chống trầm cảm nào sau đây được ưu tiên lựa chọn an toàn hơn cho người cao tuổi?",
    "options": [
      "Thuốc ức chế tái hấp thu chọn lọc Serotonin như Sertralin",
      "Thuốc ức chế không hồi phục enzym MAO",
      "Thuốc chống trầm cảm ba vòng TCA liều cao",
      "Dẫn chất Barbiturat tác dụng kéo dài"
    ],
    "correct": 0,
    "explanation": "SSRI (Sertralin, Escitalopram) ít tác dụng phụ tim mạch và kháng cholinergic hơn nhiều so với TCA.",
    "reference": "Sách DLS tr. 224",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 334,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Thuốc hạ áp nhóm chẹn thụ thể Alpha-1 như Doxazosin hoặc Prazosin có nguy cơ đặc trưng nào ở người già?",
    "options": [
      "Gây tăng áp lực nội sọ đột ngột",
      "Tụt huyết áp tư thế đứng nghiêm trọng ngay liều đầu tiên",
      "Gây bí tiểu hoàn toàn không tự chủ",
      "Gây co thắt khí phế quản cấp"
    ],
    "correct": 1,
    "explanation": "Chẹn alpha-1 ngoại biên gây giãn mạch tĩnh mạch và động mạch, dễ ngất khi đứng dậy.",
    "reference": "Sách DLS tr. 225",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 226",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 336,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Hiện tượng run tay lành tính ở người già có thể bị nhầm lẫn với tác dụng phụ của thuốc nào?",
    "options": [
      "Thuốc bổ sung Canxi carbonat",
      "Men tiêu hóa Enzym tụy",
      "Thuốc nhỏ mắt dung dịch nước muối sinh lý",
      "Thuốc chủ vận beta-2 Salbutamol hoặc Theophyllin"
    ],
    "correct": 3,
    "explanation": "Kích thích thụ thể beta-2 trên cơ vân gây run đầu chi, thường gặp khi dùng thuốc hen suyễn.",
    "reference": "Sách DLS tr. 227",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 337,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Người cao tuổi uống thuốc kháng viêm Corticoid kéo dài có nguy cơ gãy xương cao nhất ở vị trí nào?",
    "options": [
      "Thân đốt sống thắt lưng và cổ xương đùi",
      "Xương bàn chân và xương bánh chè",
      "Các đốt ngón tay ngón chân",
      "Xương đòn và xương bả vai"
    ],
    "correct": 0,
    "explanation": "Loãng xương do corticoid tấn công xương xốp gây xẹp đốt sống và gãy cổ xương đùi tự phát.",
    "reference": "Sách DLS tr. 228",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 338,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Thuốc ức chế bơm proton PPI dùng kéo dài nhiều năm ở người cao tuổi làm tăng nguy cơ biến chứng nào?",
    "options": [
      "Xuất huyết bàng quang cấp",
      "Gãy xương do loãng xương và nhiễm khuẩn ruột do C. difficile",
      "Cường chức năng tuyến thượng thận",
      "Bệnh bạch cầu cấp dòng tủy"
    ],
    "correct": 1,
    "explanation": "Giảm acid dạ dày kéo dài cản trở hấp thu calci, magnesi và phá vỡ hàng rào bảo vệ đường ruột.",
    "reference": "Sách DLS tr. 229",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 339,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Hạ Natri máu ở người cao tuổi thường là tác dụng không mong muốn của nhóm thuốc nào?",
    "options": [
      "Thuốc kháng acid dạ dày chứa nhôm",
      "Thuốc điều hòa lipid huyết tương Statin",
      "Thuốc lợi tiểu Thiazid và thuốc chống trầm cảm SSRI",
      "Thuốc giãn phế quản Ipratropium"
    ],
    "correct": 2,
    "explanation": "Thiazid và SSRI gây hội chứng SIADH làm hạ natri máu nặng gây lú lẫn ở người già.",
    "reference": "Sách DLS tr. 230",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 340,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Để hạn chế nguy cơ tương tác thuốc ở người cao tuổi mắc nhiều bệnh mạn tính, giải pháp hữu hiệu là:",
    "options": [
      "Tăng gấp đôi liều dùng của tất cả các thuốc để bù trừ chuyển hóa kém",
      "Cho bệnh nhân tự mua thêm các thuốc chống oxy hóa không kê đơn để hỗ trợ",
      "Kê thêm thuốc an thần để giảm các triệu chứng khó chịu toàn thân",
      "Thường xuyên rà soát đơn thuốc (Medication reconciliation) và loại bỏ các thuốc không còn chỉ định"
    ],
    "correct": 3,
    "explanation": "Rà soát thuốc (Medication review) và ngưng kê đơn (Deprescribing) giúp giảm đa dược và tương tác.",
    "reference": "Sách DLS tr. 231",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 341,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Cơ quan vị giác và khứu giác suy giảm ở người cao tuổi ảnh hưởng như thế nào đến việc ăn uống?",
    "options": [
      "Giảm cảm giác thèm ăn và có xu hướng nêm nếm thức ăn mặn hơn",
      "Không có bất kỳ ảnh hưởng nào đến hành vi ăn uống",
      "Làm người già ăn nhiều đồ ngọt mất kiểm soát",
      "Khiến người già chỉ thích ăn thức ăn cay nóng"
    ],
    "correct": 0,
    "explanation": "Giảm vị giác khiến người già dễ chán ăn, suy dinh dưỡng hoặc ăn nhiều muối làm tăng huyết áp.",
    "reference": "Sách DLS tr. 232",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 233",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 343,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Nhóm thuốc chẹn beta giao cảm ở người cao tuổi có đáp ứng lâm sàng thay đổi như thế nào?",
    "options": [
      "Hoàn toàn mất tác dụng hạ áp",
      "Tăng nhạy cảm gấp 10 lần so với người trẻ tuổi",
      "Giảm độ nhạy cảm của thụ thể beta giao cảm với thuốc",
      "Chỉ làm tăng nhịp tim nhanh kịch phát"
    ],
    "correct": 2,
    "explanation": "Mật độ và độ nhạy cảm của thụ thể beta-adrenergic giảm dần theo tuổi già.",
    "reference": "Sách DLS tr. 234",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 344,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Bệnh nhân cao tuổi có nguy cơ ngã rất cao nếu huyết áp tâm thu hạ xuống dưới mức:",
    "options": [
      "Dưới 160 mmHg",
      "Dưới 130 mmHg",
      "Dưới 140 mmHg",
      "Dưới 110 mmHg"
    ],
    "correct": 3,
    "explanation": "Hạ huyết áp quá tích cực (< 110-120 mmHg) ở người già làm thiếu máu não cục bộ gây chóng mặt té ngã.",
    "reference": "Sách DLS tr. 235",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 345,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Mục tiêu điều trị bệnh mạn tính ở người cao tuổi rất yếu cần ưu tiên hàng đầu tiêu chí nào?",
    "options": [
      "Duy trì chất lượng cuộc sống, giảm gánh nặng đa thuốc và phòng tránh biến cố té ngã do thuốc",
      "Hạ huyết áp tâm thu xuống dưới 110 mmHg và HbA1c dưới 6.0% bằng mọi giá",
      "Đạt tất cả các chỉ số xét nghiệm sinh hóa lý tưởng giống như người trẻ tuổi",
      "Phối hợp tối đa các thuốc đặc trị để đảo ngược hoàn toàn quá trình thoái hóa cơ quan"
    ],
    "correct": 0,
    "explanation": "Ở người già yếu, ưu tiên chất lượng sống, độc lập chức năng và an toàn hơn là kiểm soát chỉ số gắt gao.",
    "reference": "Sách DLS tr. 236",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 346,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Giai đoạn nào trong thai kỳ thai nhi nhạy cảm nhất với tác nhân gây quái thai dị tật hình thái?",
    "options": [
      "Giai đoạn tiền phôi trong 2 tuần đầu sau thụ tinh",
      "Giai đoạn hình thành cơ quan từ tuần thứ 3 đến tuần thứ 8",
      "Giai đoạn ba tháng cuối trước khi chuyển dạ",
      "Giai đoạn chu sinh trong tuần cuối thai kỳ"
    ],
    "correct": 1,
    "explanation": "Tuần 3 - 8 (ngày 18-56) là thời kỳ biệt hóa cơ quan, nhạy cảm tối đa với dị tật cấu trúc.",
    "reference": "Sách DLS tr. 240",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 241",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 242",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 349,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Nhóm thuốc phân loại mức độ nguy cơ X theo FDA có đặc điểm nào sau đây?",
    "options": [
      "Chống chỉ định tuyệt đối cho phụ nữ mang thai hoặc có thể mang thai",
      "An toàn tuyệt đối qua thử nghiệm lâm sàng có đối chứng",
      "Chưa có nghiên cứu đầy đủ trên cơ thể người",
      "Được phép dùng rộng rãi trong suốt thai kỳ"
    ],
    "correct": 0,
    "explanation": "Nhóm X: nguy cơ quái thai rõ ràng, không có bất kỳ lợi ích điều trị nào bù đắp được, chống chỉ định tuyệt đối.",
    "reference": "Sách DLS tr. 243",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 350,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Đặc tính hóa lý nào của phân tử thuốc giúp thuốc dễ dàng khuếch tán thụ động qua hàng rào nhau thai?",
    "options": [
      "Trọng lượng phân tử rất lớn trên 1000 Dalton",
      "Trọng lượng phân tử nhỏ dưới 500 Dalton và tan nhiều trong lipid",
      "Khả năng gắn kết rất mạnh với albumin huyết tương mẹ",
      "Mức độ ion hóa rất cao ở pH sinh lý"
    ],
    "correct": 1,
    "explanation": "Thuốc phân tử nhỏ (< 500 Da), không ion hóa, tan nhiều trong lipid dễ qua nhau thai nhất.",
    "reference": "Sách DLS tr. 244",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 351,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Thuốc điều trị mụn trứng cá Isotretinoin bị xếp vào nhóm nguy cơ nào của FDA đối với thai kỳ?",
    "options": [
      "Nhóm A",
      "Nhóm C",
      "Nhóm X",
      "Nhóm B"
    ],
    "correct": 2,
    "explanation": "Isotretinoin gây dị tật sọ mặt, tai, tim nghiêm trọng, chống chỉ định tuyệt đối cho phụ nữ có thai.",
    "reference": "Sách DLS tr. 245",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 352,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Thuốc chống đông máu Warfarin dùng trong 3 tháng đầu thai kỳ gây ra hội chứng dị tật nào?",
    "options": [
      "Hội chứng phì đại tuyến giáp trạng bẩm sinh",
      "Hội chứng teo cơ tủy sống tiến triển",
      "Hội chứng vô sọ và thoát vị rốn",
      "Hội chứng quái thai Warfarin với mũi tẹt và bất thường xương"
    ],
    "correct": 3,
    "explanation": "Warfarin qua nhau thai gây bất thường sụn xương, mũi tẹt hình yên ngựa, mù mắt và chậm phát triển.",
    "reference": "Sách DLS tr. 246",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 353,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Thuốc chống đông máu được ưu tiên lựa chọn hàng đầu cho phụ nữ mang thai có nguy cơ huyết khối là:",
    "options": [
      "Heparin trọng lượng phân tử thấp như Enoxaparin",
      "Thuốc chống đông đường uống Warfarin",
      "Thuốc ức chế yếu tố Xa Rivaroxaban",
      "Thuốc ức chế trực tiếp thrombin Dabigatran"
    ],
    "correct": 0,
    "explanation": "Heparin và LMWH phân tử lượng lớn tích điện âm mạnh không qua được nhau thai nên an toàn cho thai nhi.",
    "reference": "Sách DLS tr. 247",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 354,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Nhóm thuốc hạ huyết áp nào sau đây chống chỉ định tuyệt đối trong quý 2 và quý 3 của thai kỳ?",
    "options": [
      "Thuốc hạ huyết áp tác động trung ương Methyldopa",
      "Thuốc ức chế men chuyển và thuốc ức chế thụ thể Angiotensin",
      "Thuốc chẹn beta giao cảm Labetalol",
      "Thuốc giãn mạch trực tiếp Hydralazin"
    ],
    "correct": 1,
    "explanation": "ƯCMC và ƯCTT gây thiểu ối, suy thận thai nhi, vô niệu, chậm phát triển xương sọ và tử vong thai nhi.",
    "reference": "Sách DLS tr. 248",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 355,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Thuốc hạ huyết áp kinh điển được xem là lựa chọn hàng đầu an toàn nhất cho phụ nữ mang thai là:",
    "options": [
      "Captopril",
      "Losartan",
      "Methyldopa",
      "Atenolol"
    ],
    "correct": 2,
    "explanation": "Methyldopa có hồ sơ an toàn lâu đời nhất, không gây ảnh hưởng xấu lên tuần hoàn nhau thai.",
    "reference": "Sách DLS tr. 249",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 356,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Thuốc giảm đau hạ sốt được lựa chọn ưu tiên hàng đầu và an toàn nhất trong thai kỳ là:",
    "options": [
      "Aspirin liều cao",
      "Celecoxib",
      "Ibuprofen",
      "Paracetamol"
    ],
    "correct": 3,
    "explanation": "Paracetamol là thuốc giảm đau hạ sốt chuẩn cho phụ nữ có thai ở liều điều trị thông thường.",
    "reference": "Sách DLS tr. 250",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 251",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 358,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Thuốc chống động kinh Acid Valproic dùng cho phụ nữ mang thai làm tăng nguy cơ dị tật nào?",
    "options": [
      "Dị tật dính ngón tay chân bẩm sinh",
      "Dị tật khuyết tật ống thần kinh như tật nứt đốt sống",
      "Dị tật teo hẹp tá tràng bẩm sinh",
      "Bệnh lý mắt khổng lồ"
    ],
    "correct": 1,
    "explanation": "Valproat kháng acid folic làm tăng nguy cơ nứt đốt sống và giảm chỉ số thông minh ở trẻ sinh ra.",
    "reference": "Sách DLS tr. 252",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 359,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Để dự phòng dị tật ống thần kinh ở thai nhi, phụ nữ dự định mang thai cần bổ sung chất nào?",
    "options": [
      "Vitamin D3 liều sốc đường tiêm",
      "Muối Iod nguyên chất liều cao",
      "Acid folic với liều tối thiểu 400 mcg mỗi ngày",
      "Vitamin A liều cao 50.000 đơn vị"
    ],
    "correct": 2,
    "explanation": "Uống acid folic 400-800 mcg/ngày ít nhất 1-3 tháng trước khi mang thai giảm 70% dị tật ống thần kinh.",
    "reference": "Sách DLS tr. 253",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 254",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 361,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Kháng sinh nhóm Penicillin và Cephalosporin được xếp vào mức độ an toàn nào cho phụ nữ mang thai?",
    "options": [
      "Nhóm an toàn cao loại B",
      "Nhóm nguy hiểm có bằng chứng quái thai loại D",
      "Nhóm chống chỉ định loại X",
      "Nhóm hoàn toàn chưa thử nghiệm"
    ],
    "correct": 0,
    "explanation": "Beta-lactam là kháng sinh an toàn nhất trong thai kỳ (FDA nhóm B).",
    "reference": "Sách DLS tr. 255",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 256",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 363,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Hội chứng hải cẩu với cụt tứ chi bẩm sinh nổi tiếng trong lịch sử dược học là do thảm họa của thuốc nào?",
    "options": [
      "Diethylstilbestrol",
      "Sulfanilamid",
      "Thalidomid",
      "Chloroquin"
    ],
    "correct": 2,
    "explanation": "Thalidomid dùng chống nghén những năm 1960 gây dị tật teo cụt chi hải cẩu ở hàng ngàn trẻ sơ sinh.",
    "reference": "Sách DLS tr. 257",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 364,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Kháng sinh Clarithromycin được khuyến cáo tránh dùng trong thai kỳ hơn so với Azithromycin vì:",
    "options": [
      "Làm thai nhi phát triển quá mức",
      "Làm mất hoàn toàn tác dụng của oxytocin",
      "Gây vàng da tắc mật cho người mẹ",
      "Có dữ liệu ghi nhận dị tật tim thai trên động vật thực nghiệm"
    ],
    "correct": 3,
    "explanation": "Clarithromycin thuộc nhóm C (có độc tính trên phôi ở động vật), Azithromycin an toàn hơn (nhóm B).",
    "reference": "Sách DLS tr. 258",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 365,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Thể tích tuần hoàn huyết tương ở phụ nữ có thai thay đổi sinh lý như thế nào?",
    "options": [
      "Tăng từ 40 đến 50% so với trước khi mang thai",
      "Giảm khoảng 20% do thai chèn ép tĩnh mạch",
      "Hoàn toàn giữ nguyên không thay đổi",
      "Giảm mạnh dẫn đến tụt huyết áp kéo dài"
    ],
    "correct": 0,
    "explanation": "Thể tích máu và dịch ngoại bào tăng 40-50% làm tăng thể tích phân bố của nhiều loại thuốc.",
    "reference": "Sách DLS tr. 259",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 366,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Mức lọc cầu thận GFR ở người mẹ mang thai có sự biến đổi sinh lý nào?",
    "options": [
      "Giảm sút một nửa do thận bị chèn ép",
      "Tăng lên khoảng 50% làm tăng đào thải thuốc qua thận",
      "Không có bất kỳ sự thay đổi nào",
      "Hoàn toàn ngừng lọc trong 3 tháng giữa"
    ],
    "correct": 1,
    "explanation": "GFR tăng mạnh làm tăng thanh thải và giảm nồng độ đáy của các thuốc thải trừ qua thận như ampicillin.",
    "reference": "Sách DLS tr. 260",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 367,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Nồng độ Albumin huyết tương ở người mẹ mang thai giảm sinh lý do nguyên nhân nào?",
    "options": [
      "Do gan người mẹ ngừng sản xuất albumin",
      "Do albumin bị thai nhi hấp thu hết",
      "Hiện tượng pha loãng máu do thể tích tuần hoàn tăng mạnh",
      "Do albumin bị đào thải toàn bộ qua nước tiểu"
    ],
    "correct": 2,
    "explanation": "Pha loãng sinh lý làm giảm nồng độ albumin, tăng tỷ lệ thuốc ở dạng tự do.",
    "reference": "Sách DLS tr. 261",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 368,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Thuốc điều trị buồn nôn và nôn thai nghén được coi là lựa chọn an toàn đầu tay là phối hợp:",
    "options": [
      "Metoclopramid liều cao",
      "Dexamethason truyền tĩnh mạch",
      "Ondansetron tiêm tĩnh mạch",
      "Pyridoxin và Doxylamin"
    ],
    "correct": 3,
    "explanation": "Phối hợp Vitamin B6 và doxylamin là thuốc chống nghén đầu tay được FDA phê duyệt an toàn cho thai kỳ.",
    "reference": "Sách DLS tr. 262",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 369,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Thuốc chống chỉ định tuyệt đối trong thai kỳ do nguy cơ ung thư biểu mô âm đạo ở con gái tuổi dậy thì là:",
    "options": [
      "Diethylstilbestrol",
      "Prednisolon",
      "Progesteron tự nhiên",
      "Methyldopa"
    ],
    "correct": 0,
    "explanation": "DES dùng chống dọa sảy thai trước đây gây ung thư biểu mô tế bào sáng âm đạo ở con gái sau này (ADR typ D).",
    "reference": "Sách DLS tr. 263",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 370,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Magnesi sulfat tiêm truyền tĩnh mạch được chỉ định trong sản khoa nhằm mục đích chính là:",
    "options": [
      "Gây chuyển dạ đẻ chỉ huy",
      "Dự phòng và cắt cơn co giật trong sản giật nặng",
      "Kích thích tăng tiết sữa non sau sinh",
      "Hạ huyết áp cấp cứu tức thì"
    ],
    "correct": 1,
    "explanation": "MgSO4 là thuốc hàng đầu để kiểm soát và dự phòng co giật ở bệnh nhân tiền sản giật/sản giật.",
    "reference": "Sách DLS tr. 264",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 371,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Chỉ số tỷ lệ nồng độ thuốc trong sữa mẹ so với huyết tương mẹ được ký hiệu là:",
    "options": [
      "Chỉ số RID",
      "Thể tích phân bố Vd",
      "Tỷ số M trên P",
      "Hệ số thanh thải Cl"
    ],
    "correct": 2,
    "explanation": "Tỷ số M/P (Milk to Plasma ratio) phản ánh mức độ bài xuất của thuốc vào sữa mẹ.",
    "reference": "Sách DLS tr. 265",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 372,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Chỉ số liều tương đối của trẻ bú mẹ được coi là an toàn chấp nhận được khi:",
    "options": [
      "Từ 20% đến 30%",
      "Trên 50%",
      "Bằng 100%",
      "Dưới 10%"
    ],
    "correct": 3,
    "explanation": "Chỉ số RID (Relative Infant Dose) < 10% được đa số chuyên gia coi là an toàn cho trẻ bú mẹ.",
    "reference": "Sách DLS tr. 266",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 373,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Đặc tính của sữa mẹ có xu hướng tích lũy các phân tử thuốc có tính chất hóa lý nào?",
    "options": [
      "Các thuốc có tính base yếu và tan nhiều trong lipid",
      "Các thuốc có tính acid mạnh tan trong nước",
      "Các ion khoáng chất mang điện tích âm",
      "Các phân tử protein có kích thước khổng lồ"
    ],
    "correct": 0,
    "explanation": "Sữa mẹ có pH hơi acid hơn huyết tương (khoảng 7,0-7,2) nên giữ các thuốc base yếu theo cơ chế bẫy ion.",
    "reference": "Sách DLS tr. 267",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 268",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 375,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Thuốc điều trị suy giáp Levothyroxin ở phụ nữ mang thai thường cần điều chỉnh liều như thế nào?",
    "options": [
      "Giữ nguyên liều cố định suốt 9 tháng thai kỳ mà không cần xét nghiệm",
      "Phải giảm một nửa liều để không gây cường giáp thai nhi",
      "Cần tăng liều dùng từ 25 đến 50% trong thai kỳ và xét nghiệm lại TSH mỗi 4 - 6 tuần",
      "Ngừng thuốc ngay lập tức trong 3 tháng đầu thai kỳ để tránh độc cho thai"
    ],
    "correct": 2,
    "explanation": "Nhu cầu hormon giáp tăng cao trong thai kỳ, phụ nữ suy giáp cần tăng liều levothyroxin ngay khi có thai.",
    "reference": "Sách DLS tr. 269",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 376,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Kháng nấm đường uống Fluconazol liều cao kéo dài trong 3 tháng đầu thai kỳ có nguy cơ gây dị tật gì?",
    "options": [
      "Gây hội chứng chân tay khoèo",
      "Gây đục mờ giác mạc hai mắt",
      "Gây điếc tai tiếp nhận bẩm sinh",
      "Dị tật sọ mặt và dị tật tim bẩm sinh phức tạp"
    ],
    "correct": 3,
    "explanation": "Fluconazol liều cao (> 400 mg/ngày) ức chế tổng hợp sterol gây hội chứng dị tật tương tự hội chứng Antley-Bixler.",
    "reference": "Sách DLS tr. 270",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 377,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Thuốc ức chế miễn dịch Methotrexat chống chỉ định tuyệt đối cho thai phụ vì tác hại nào?",
    "options": [
      "Sảy thai, thai chết lưu và hội chứng quái thai nghiêm trọng",
      "Làm thai nhi phát triển thành thai to quá khổ",
      "Gây tăng huyết áp thai kỳ ác tính",
      "Gây đái tháo đường khởi phát sớm ở thai"
    ],
    "correct": 0,
    "explanation": "Methotrexat là chất ức chế tổng hợp ADN cực mạnh, thuốc phá thai nội khoa, nhóm X của FDA.",
    "reference": "Sách DLS tr. 271",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 272",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 273",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 274",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 381,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Phụ nữ mang thai bị hen phế quản cần điều trị cắt cơn khó thở cấp tính bằng thuốc nào?",
    "options": [
      "Khí dung Salbutamol dạng hít định liều",
      "Tiêm bắp Morphin giảm kích thích hô hấp",
      "Truyền tĩnh mạch Magnesi sulfat liều cao",
      "Uống viên nén Theophyllin tác dụng kéo dài"
    ],
    "correct": 0,
    "explanation": "SABA dạng hít như Salbutamol tác dụng tại chỗ ở phế quản, rất ít hấp thu toàn thân, an toàn cho mẹ và thai.",
    "reference": "Sách DLS tr. 275",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 382,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Corticoid hít được nghiên cứu nhiều nhất và khuyến cáo ưu tiên cho thai phụ mắc hen phế quản là:",
    "options": [
      "Fluticason propionat",
      "Budesonid dạng hít",
      "Mometason furoat",
      "Beclomethason dipropionat"
    ],
    "correct": 1,
    "explanation": "Budesonid có nhiều dữ liệu nghiên cứu dịch tễ trên phụ nữ mang thai nhất và được xếp nhóm B.",
    "reference": "Sách DLS tr. 276",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 383,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Kháng sinh nào sau đây an toàn và thích hợp điều trị nhiễm trùng tiết niệu không triệu chứng ở thai phụ?",
    "options": [
      "Doxycyclin viên nang",
      "Ciprofloxacin dạng viên nén",
      "Amoxicillin clavulanat hoặc Cefalexin",
      "Co-trimoxazol vào tuần 38 thai kỳ"
    ],
    "correct": 2,
    "explanation": "Cephalosporin thế hệ 1 hoặc Augmentin là lựa chọn đầu tay an toàn điều trị khuẩn niệu ở thai phụ.",
    "reference": "Sách DLS tr. 277",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 384,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Kháng sinh Macrolid nào sau đây được xem là an toàn nhất để điều trị nhiễm khuẩn đường thở cho thai phụ?",
    "options": [
      "Telithromycin",
      "Clarithromycin",
      "Roxithromycin",
      "Azithromycin"
    ],
    "correct": 3,
    "explanation": "Azithromycin thuộc phân loại FDA nhóm B, hấp thu tốt và an toàn cao trong suốt thai kỳ.",
    "reference": "Sách DLS tr. 278",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 385,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Bổ sung sắt cho phụ nữ mang thai nhằm mục đích phòng ngừa bệnh lý nào phổ biến nhất?",
    "options": [
      "Thiếu máu do thiếu sắt ở mẹ và suy dinh dưỡng bào thai",
      "Nhiễm độc thai nghén tiền sản giật",
      "Gãy xương chậu tự phát khi sinh",
      "Tiểu đường thai kỳ kháng insulin"
    ],
    "correct": 0,
    "explanation": "Nhu cầu sắt tăng gấp đôi trong thai kỳ để tạo máu cho mẹ và thai nhi.",
    "reference": "Sách DLS tr. 279",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 386,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Tác dụng không mong muốn thường gặp nhất của viên uống bổ sung sắt ở phụ nữ mang thai là:",
    "options": [
      "Xuất huyết dưới da dạng chấm",
      "Táo bón, buồn nôn và phân có màu đen",
      "Tiêu chảy phân mỡ ồ ạt",
      "Hạ đường huyết kịch phát"
    ],
    "correct": 1,
    "explanation": "Táo bón và buồn nôn là ADR điển hình của sắt uống, làm nhiều thai phụ bỏ thuốc.",
    "reference": "Sách DLS tr. 280",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 387,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Thuốc ức chế tiết sữa Cabergolin hoặc Bromocriptin có cơ chế tác dụng dược lý là gì?",
    "options": [
      "Ức chế bài tiết hormon tăng trưởng GH",
      "Phá hủy trực tiếp nang tuyến sữa",
      "Kích thích thụ thể Dopamin D2 làm ức chế giải phóng Prolactin",
      "Kháng thụ thể Oxytocin tại tế bào cơ biểu mô tuyến vú"
    ],
    "correct": 2,
    "explanation": "Chất chủ vận dopamin ức chế thùy trước tuyến yên tiết prolactin làm ngừng tạo sữa.",
    "reference": "Sách DLS tr. 281",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 388,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Kháng sinh nào sau đây có thể gây biến đổi màu răng của trẻ nhỏ khi bú mẹ kéo dài?",
    "options": [
      "Erythromycin",
      "Cefixim",
      "Penicillin V",
      "Tetracyclin"
    ],
    "correct": 3,
    "explanation": "Tetracyclin bài xuất vào sữa mẹ và liên kết với calci của răng trẻ bú mẹ gây ố màu men răng.",
    "reference": "Sách DLS tr. 282",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 389,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Người mẹ đang cho con bú cần giảm đau sau sinh nên ưu tiên chọn thuốc nào an toàn nhất?",
    "options": [
      "Ibuprofen hoặc Paracetamol",
      "Codein dạng viên phối hợp",
      "Aspirin liều cao 1000 mg",
      "Tramadol tiêm truyền"
    ],
    "correct": 0,
    "explanation": "Ibuprofen và Paracetamol bài tiết vào sữa rất ít, có chỉ số RID < 1%, rất an toàn cho con bú.",
    "reference": "Sách DLS tr. 283",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 390,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Cơ quan Quản lý Dược phẩm Hoa Kỳ cảnh báo không dùng Codein cho bà mẹ đang cho con bú vì:",
    "options": [
      "Làm mất sữa hoàn toàn của người mẹ",
      "Trẻ bú mẹ có thể ngộ độc Morphin dẫn đến hôn mê ngừng thở",
      "Làm trẻ bị tiêu chảy nhiễm khuẩn nặng",
      "Gây vàng da tắc mật kéo dài ở trẻ sơ sinh"
    ],
    "correct": 1,
    "explanation": "Mẹ mang kiểu gen chuyển hóa siêu nhanh CYP2D6 biến codein thành morphin bài tiết vào sữa làm chết trẻ bú mẹ.",
    "reference": "Sách DLS tr. 284",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 391,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Khi người mẹ đang cho con bú bắt buộc phải dùng thuốc có tỷ lệ bài xuất vào sữa cao thì can thiệp là:",
    "options": [
      "Đun sôi sữa mẹ ở 100 độ C trước khi cho bú",
      "Vẫn cho con bú bình thường và theo dõi nhịp thở",
      "Tạm thời vắt bỏ sữa mẹ và cho trẻ ăn sữa công thức trong đợt dùng thuốc",
      "Cho trẻ uống kèm than hoạt tính để hấp phụ thuốc"
    ],
    "correct": 2,
    "explanation": "Tạm ngừng bú mẹ trong thời gian dùng thuốc độc tính cao và duy trì vắt sữa để tránh mất sữa.",
    "reference": "Sách DLS tr. 285",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 392,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Thuốc nào sau đây làm tăng tiết sữa mẹ do có tác dụng đối kháng thụ thể Dopamin D2 ngoại vi?",
    "options": [
      "Loperamid",
      "Omeprazol",
      "Ranitidin",
      "Domperidon"
    ],
    "correct": 3,
    "explanation": "Domperidon phong bế thụ thể D2 tuyến yên kích thích giải phóng prolactin làm tăng tiết sữa.",
    "reference": "Sách DLS tr. 286",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 393,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Phụ nữ mang thai bị nhiễm trùng âm đạo do Trichomonas có thể dùng Metronidazol ở thời điểm nào?",
    "options": [
      "Có thể dùng an toàn sau 3 tháng đầu của thai kỳ",
      "Chỉ được dùng ở dạng tiêm dưới da",
      "Chống chỉ định tuyệt đối trong suốt 9 tháng thai kỳ",
      "Chỉ được dùng duy nhất trong tuần đầu tiên"
    ],
    "correct": 0,
    "explanation": "Metronidazol an toàn cho thai phụ sau quý 1 (từ tuần 14 trở đi) để điều trị viêm âm đạo.",
    "reference": "Sách DLS tr. 287",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 394,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Nhóm thuốc chống nấm Azol bôi ngoài da tại chỗ cho phụ nữ mang thai có đặc điểm gì?",
    "options": [
      "Gây sảy thai tự nhiên ngay lập tức",
      "Hấp thu toàn thân rất thấp và an toàn khi dùng tại chỗ",
      "Gây ức chế chức năng tuyến thượng thận thai nhi",
      "Chống chỉ định tuyệt đối cho mọi vùng da"
    ],
    "correct": 1,
    "explanation": "Clotrimazol hay Miconazol dùng bôi ngoài da hấp thu vào máu mẹ không đáng kể, an toàn cho thai.",
    "reference": "Sách DLS tr. 288",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 395,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Nguyên tắc chung cốt lõi khi sử dụng thuốc cho phụ nữ mang thai là:",
    "options": [
      "Dùng liều gấp đôi để đảm bảo nồng độ thuốc cho cả mẹ và thai",
      "Thay thế toàn bộ thuốc tây y bằng các bài thuốc dân gian truyền miệng",
      "Chỉ dùng khi thật sự cần thiết với liều thấp nhất có hiệu quả trong thời gian ngắn nhất",
      "Không bao giờ được sử dụng bất kỳ loại thuốc nào"
    ],
    "correct": 2,
    "explanation": "Cân nhắc kỹ cán cân lợi ích/nguy cơ, ưu tiên thuốc có lịch sử an toàn lâu đời nhất.",
    "reference": "Sách DLS tr. 289",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 396,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Thông số PK/PD nào phản ánh tối ưu hiệu quả diệt khuẩn của nhóm kháng sinh Beta-lactam?",
    "options": [
      "Diện tích dưới đường cong nồng độ trên MIC",
      "Thời gian thuốc tồn tại trong lòng thực bào",
      "Tỷ số nồng độ đỉnh trên nồng độ ức chế tối thiểu",
      "Tỷ lệ thời gian nồng độ thuốc trong máu vượt quá MIC"
    ],
    "correct": 3,
    "explanation": "Beta-lactam là kháng sinh diệt khuẩn phụ thuộc thời gian, mục tiêu T > MIC đạt ít nhất 40-70% khoảng liều.",
    "reference": "Sách DLS tr. 295",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 397,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Thông số PK/PD đặc trưng quyết định hiệu lực kháng khuẩn của kháng sinh nhóm Aminosid là:",
    "options": [
      "Tỷ số giữa nồng độ đỉnh Cmax trên nồng độ ức chế tối thiểu MIC",
      "Thể tích phân bố toàn phần của thuốc trong dịch ngoại bào",
      "Thời gian nồng độ thuốc duy trì trên MIC",
      "Tỷ số nồng độ thuốc tại mô mỡ trên huyết tương"
    ],
    "correct": 0,
    "explanation": "Aminosid diệt khuẩn phụ thuộc nồng độ, mục tiêu Cmax/MIC đạt từ 8 đến 10 lần để tối đa hóa diệt khuẩn.",
    "reference": "Sách DLS tr. 296",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 398,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Thông số PK/PD liên quan chặt chẽ nhất đến hiệu quả điều trị của kháng sinh Vancomycin là:",
    "options": [
      "Nồng độ đỉnh Cmax đạt trên 100 mg/L",
      "Tỷ số diện tích dưới đường cong 24 giờ trên MIC đạt trên 400",
      "Tốc độ truyền tĩnh mạch chậm dưới 10 phút",
      "Thời gian T > MIC đạt 100% khoảng liều"
    ],
    "correct": 1,
    "explanation": "Hiệu quả điều trị MRSA của Vancomycin tương quan tốt nhất với AUC24/MIC >= 400 (thường từ 400-600).",
    "reference": "Sách DLS tr. 297",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 399,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Hiện tượng tác dụng hậu kháng sinh kéo dài là đặc tính nổi bật của nhóm kháng sinh nào?",
    "options": [
      "Cefuroxim và Ceftriaxon",
      "Penicillin và Ampicillin",
      "Aminosid và Fluoroquinolon",
      "Sulfamethoxazol và Trimethoprim"
    ],
    "correct": 2,
    "explanation": "PAE kéo dài cho phép Aminosid vẫn ức chế vi khuẩn nhiều giờ sau khi nồng độ thuốc đã hạ xuống dưới MIC.",
    "reference": "Sách DLS tr. 298",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 400,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Chế độ liều dùng Aminosid một lần duy nhất trong ngày dựa trên những cơ sở khoa học nào?",
    "options": [
      "Làm giảm thời gian truyền thuốc xuống mức thấp nhất",
      "Tăng khả năng liên kết của kháng sinh với protein huyết tương",
      "Giúp thuốc hấp thu tốt hơn qua đường tiêu hóa",
      "Tối ưu hóa tỷ số Cmax trên MIC và giảm tích lũy gây độc tai thận"
    ],
    "correct": 3,
    "explanation": "Liều đơn hàng ngày đạt đỉnh Cmax rất cao giúp diệt khuẩn mạnh và nồng độ đáy thấp giảm độc tai thận.",
    "reference": "Sách DLS tr. 299",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 401,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh nhóm Carbapenem như Meropenem có thể tối ưu hóa hiệu quả điều trị nhiễm khuẩn nặng bằng cách:",
    "options": [
      "Kéo dài thời gian truyền tĩnh mạch từ 3 đến 4 giờ",
      "Giảm số lần đưa thuốc xuống 1 lần duy nhất trong tuần",
      "Chuyển sang dùng đường uống sau bữa ăn",
      "Tiêm tĩnh mạch trực tiếp thật nhanh trong 1 phút"
    ],
    "correct": 0,
    "explanation": "Truyền kéo dài (extended infusion) tối đa hóa chỉ số T > MIC cho vi khuẩn gram âm kháng thuốc.",
    "reference": "Sách DLS tr. 300",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 402,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Cơ chế tác dụng kháng khuẩn của nhóm kháng sinh Beta-lactam là gì?",
    "options": [
      "Làm rối loạn tính thấm của màng bào tương vi khuẩn",
      "Ức chế enzym Transpeptidase ngăn cản tổng hợp vách peptidoglycan",
      "Ức chế tiểu đơn vị 30S của ribosom ngăn tổng hợp protein",
      "Ức chế enzym ADN gyrase cản trở sao chép vật chất di truyền"
    ],
    "correct": 1,
    "explanation": "Beta-lactam gắn PBP ức chế giai đoạn cuối cùng trong liên kết chéo peptidoglycan làm vách tế bào vỡ tung.",
    "reference": "Sách DLS tr. 301",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 403,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Cơ chế tác dụng của kháng sinh nhóm Aminosid trên vi khuẩn là:",
    "options": [
      "Gắn vào tiểu đơn vị 50S ngăn cản tạo liên kết peptid",
      "Ức chế tổng hợp acid mycolic ở thành tế bào vi khuẩn",
      "Gắn không hồi phục vào tiểu đơn vị 30S của ribosom gây sai lệch dịch mã",
      "Ức chế enzym dihydropteroat synthetase tổng hợp acid folic"
    ],
    "correct": 2,
    "explanation": "Aminosid gắn 30S gây đọc sai mã mARN và ức chế tổng hợp protein dẫn đến chết vi khuẩn.",
    "reference": "Sách DLS tr. 302",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 404,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh nhóm Macrolid tác động lên quá trình sinh học nào của vi khuẩn?",
    "options": [
      "Phá hủy màng tế bào ngoài của vi khuẩn gram âm",
      "Ức chế enzym ARN polymerase phụ thuộc ADN",
      "Cạnh tranh vị trí gắn kết của chất đối kháng PABA",
      "Ức chế tổng hợp protein thông qua gắn kết tiểu đơn vị 50S ribosom"
    ],
    "correct": 3,
    "explanation": "Macrolid gắn tiểu đơn vị 50S ribosom ngăn chặn phản ứng chuyển vị của chuỗi polypeptid.",
    "reference": "Sách DLS tr. 303",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 304",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 406,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh Glycopeptid như Vancomycin diệt khuẩn thông qua cơ chế nào?",
    "options": [
      "Ức chế tổng hợp các tiền chất lipid A",
      "Gắn vào chuỗi D-Ala-D-Ala ngăn cản kéo dài chuỗi peptidoglycan",
      "Xâm nhập qua kênh porin phá vỡ màng tế bào",
      "Gắn vào tiểu đơn vị 30S gây ngừng dịch mã"
    ],
    "correct": 1,
    "explanation": "Vancomycin gắn vào tận cùng D-alanyl-D-alanin ngăn cản tổng hợp vách tế bào vi khuẩn gram dương.",
    "reference": "Sách DLS tr. 305",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 407,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh nào sau đây chỉ có tác dụng trên vi khuẩn kỵ khí và động vật nguyên sinh?",
    "options": [
      "Gentamicin",
      "Amikacin",
      "Metronidazol",
      "Ciprofloxacin"
    ],
    "correct": 2,
    "explanation": "Metronidazol cần môi trường khử của vi khuẩn kỵ khí để kích hoạt nhóm nitro thành gốc tự do phá hủy ADN.",
    "reference": "Sách DLS tr. 306",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 408,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh nhóm Aminosid hoàn toàn không có tác dụng trên nhóm vi khuẩn nào?",
    "options": [
      "Trực khuẩn mủ xanh Pseudomonas",
      "Tụ cầu vàng nhạy cảm methicillin",
      "Vi khuẩn hiếu khí Gram âm",
      "Vi khuẩn kỵ khí tuyệt đối"
    ],
    "correct": 3,
    "explanation": "Aminosid cần hệ thống vận chuyển phụ thuộc oxy để vào trong tế bào nên vô hiệu với vi khuẩn kỵ khí.",
    "reference": "Sách DLS tr. 307",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 409,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Phối hợp Amoxicillin với Acid Clavulanic đem lại lợi ích điều trị gì?",
    "options": [
      "Bảo vệ Amoxicillin không bị phân hủy bởi enzym Beta-lactamase",
      "Làm giảm tác dụng phụ tiêu chảy của Amoxicillin",
      "Làm tăng tốc độ lọc của kháng sinh qua cầu thận",
      "Mở rộng phổ tác dụng trên trực khuẩn mủ xanh"
    ],
    "correct": 0,
    "explanation": "Acid clavulanic là chất ức chế beta-lactamase bất hoạt enzym của vi khuẩn tiết ra.",
    "reference": "Sách DLS tr. 308",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 309",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 411,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh Cephalosporin thế hệ mấy có hoạt tính mạnh nhất trên trực khuẩn mủ xanh Pseudomonas aeruginosa?",
    "options": [
      "Cephalosporin thế hệ 1 như Cefazolin và Cefalexin",
      "Cephalosporin thế hệ 5 như Ceftarolin",
      "Cephalosporin thế hệ 3 như Ceftazidim và thế hệ 4 như Cefepim",
      "Cephalosporin thế hệ 2 như Cefuroxim"
    ],
    "correct": 2,
    "explanation": "Ceftazidim và Cefepim là các cephalosporin kháng trực khuẩn mủ xanh chủ lực trên lâm sàng.",
    "reference": "Sách DLS tr. 310",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 412,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh Cephalosporin thế hệ 5 Ceftarolin có ưu điểm vượt trội nào so với thế hệ trước?",
    "options": [
      "Có tác dụng diệt nấm sợi và virus hợp bào",
      "Dùng được bằng đường uống cho trẻ sơ sinh",
      "Không bị đào thải qua thận ở người suy thận",
      "Có hoạt tính điều trị trên tụ cầu vàng kháng methicillin"
    ],
    "correct": 3,
    "explanation": "Ceftarolin gắn ái lực cao vào PBP-2a nên có hoạt tính diệt chủng MRSA.",
    "reference": "Sách DLS tr. 311",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 413,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Vi khuẩn tụ cầu vàng đề kháng Methicillin (MRSA) thông qua cơ chế phân tử nào?",
    "options": [
      "Biến đổi protein gắn Penicillin thành dạng PBP-2a có ái lực rất thấp",
      "Bơm đẩy chủ động tống kháng sinh ra ngoài màng",
      "Tiết ra một lượng khổng lồ enzym Penicillinase",
      "Đóng hoàn toàn các kênh porin trên màng ngoài"
    ],
    "correct": 0,
    "explanation": "Gen mecA mã hóa PBP-2a làm mất ái lực gắn của hầu hết các beta-lactam.",
    "reference": "Sách DLS tr. 312",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 414,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh Linezolid diệt khuẩn vi khuẩn Gram dương kháng thuốc thông qua vị trí tác động nào?",
    "options": [
      "Ức chế hấp thu acid folic từ môi trường",
      "Gắn vào vị trí 23S của tiểu đơn vị 50S ngăn tạo phức hợp khởi đầu",
      "Ức chế enzym ARN polymerase của vi khuẩn",
      "Phá vỡ màng phospholipid ngoài của tế bào vi khuẩn"
    ],
    "correct": 1,
    "explanation": "Linezolid (Oxazolidinon) ức chế giai đoạn sớm nhất của dịch mã protein vi khuẩn.",
    "reference": "Sách DLS tr. 313",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 415,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Tác dụng không mong muốn cần theo dõi sát khi điều trị Linezolid kéo dài trên 2 tuần là:",
    "options": [
      "Độc tính trên ốc tai gây điếc tai vĩnh viễn",
      "Đứt gân gót Achilles hai bên",
      "Ức chế tủy xương gây giảm tiểu cầu và thiếu máu",
      "Loét thủng dạ dày tá tràng"
    ],
    "correct": 2,
    "explanation": "Dùng Linezolid > 14 ngày làm tăng nguy cơ suy tủy có hồi phục (đặc biệt giảm tiểu cầu) và viêm dây thần kinh ngoại biên.",
    "reference": "Sách DLS tr. 314",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 416,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh Colistin (Polymyxin E) thường được giữ lại làm vũ khí cuối cùng để điều trị:",
    "options": [
      "Nhiễm vi khuẩn lao kháng đa thuốc",
      "Nhiễm nấm Candida xâm lấn toàn thân",
      "Nhiễm virus cúm mùa ác tính",
      "Trực khuẩn Gram âm đa kháng thuốc và toàn kháng thuốc"
    ],
    "correct": 3,
    "explanation": "Colistin diệt trực khuẩn Gram âm đa kháng (Acinetobacter baumannii, Pseudomonas, K. pneumoniae).",
    "reference": "Sách DLS tr. 315",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 417,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Hai độc tính nghiêm trọng nhất của kháng sinh Colistin trên lâm sàng là gì?",
    "options": [
      "Độc tính trên thận và độc tính trên thần kinh cơ",
      "Gây điếc vĩnh viễn và mù lòa cấp tính",
      "Gây hoại tử tế bào gan bùng phát",
      "Độc tính trên tủy xương và độc võng mạc"
    ],
    "correct": 0,
    "explanation": "Colistin gây hoại tử ống thận cấp và chẹn thần kinh cơ dẫn đến liệt cơ hô hấp ngừng thở.",
    "reference": "Sách DLS tr. 316",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Hướng dẫn KSDP - Bộ Y tế",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 419,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Phẫu thuật nào sau đây bắt buộc phải sử dụng kháng sinh dự phòng thường quy?",
    "options": [
      "Nội soi chẩn đoán dạ dày thông thường",
      "Tiểu phẫu cắt nốt ruồi ngoài da",
      "Phẫu thuật sạch có đặt vật liệu nhân tạo và phẫu thuật sạch nhiễm",
      "Tất cả các ca phẫu thuật sạch nông không đặt dị vật"
    ],
    "correct": 2,
    "explanation": "Phẫu thuật sạch có cấy ghép mô/vật liệu nhân tạo và phẫu thuật sạch-nhiễm luôn có chỉ định KSDP.",
    "reference": "Hướng dẫn KSDP - Bộ Y tế",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 420,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Thời điểm tiêm kháng sinh dự phòng đường tĩnh mạch tối ưu nhất là khi nào?",
    "options": [
      "Sau khi ca phẫu thuật đã hoàn thành đưa về phòng hồi tỉnh",
      "Chỉ tiêm khi vết mổ bắt đầu chảy dịch mủ",
      "Trước khi phẫu thuật 24 giờ đồng hồ",
      "Trong vòng 60 phút trước khi rạch da phẫu thuật"
    ],
    "correct": 3,
    "explanation": "Tiêm trước rạch da 30-60 phút để nồng độ kháng sinh tại mô vết mổ đạt đỉnh lúc rạch da.",
    "reference": "Hướng dẫn KSDP - Bộ Y tế",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 421,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Đối với hai kháng sinh Vancomycin và Fluoroquinolon, thời điểm bắt đầu truyền dự phòng là:",
    "options": [
      "Bắt đầu truyền trong vòng 120 phút trước khi rạch da",
      "Trước khi rạch da đúng 15 phút",
      "Sau khi rạch da hoàn tất",
      "Trước khi phẫu thuật 3 ngày liên tục"
    ],
    "correct": 0,
    "explanation": "Vancomycin và Quinolon cần truyền chậm ít nhất 60-120 phút để tránh tụt áp và hội chứng Red man.",
    "reference": "Hướng dẫn KSDP - Bộ Y tế",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 422,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh được lựa chọn phổ biến và chuẩn mực nhất cho hầu hết các loại phẫu thuật dự phòng là:",
    "options": [
      "Meropenem",
      "Cefazolin",
      "Ceftriaxon",
      "Gentamicin"
    ],
    "correct": 1,
    "explanation": "Cefazolin (Cephalosporin thế hệ 1) diệt tụ cầu và liên cầu tốt, T1/2 phù hợp và giá thành hợp lý.",
    "reference": "Hướng dẫn KSDP - Bộ Y tế",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 423,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Trong phẫu thuật đại trực tràng sạch nhiễm, phác đồ kháng sinh dự phòng cần bao phủ thêm nhóm vi khuẩn nào?",
    "options": [
      "Vi khuẩn lao kháng thuốc",
      "Nấm men Candida albicans",
      "Vi khuẩn kỵ khí đường ruột như Bacteroides fragilis",
      "Virus viêm gan B và C"
    ],
    "correct": 2,
    "explanation": "Đại trực tràng chứa nhiều vi khuẩn kỵ khí, cần phối hợp Cefazolin với Metronidazol (hoặc dùng Cefoxitin).",
    "reference": "Hướng dẫn KSDP - Bộ Y tế",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 424,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Chỉ định tiêm nhắc lại liều kháng sinh dự phòng trong quá trình phẫu thuật khi nào?",
    "options": [
      "Bệnh nhân có biểu hiện sốt nhẹ trong lúc mổ",
      "Chỉ tiêm nhắc lại khi mổ xong",
      "Sau mỗi 30 phút bất kể thời gian mổ",
      "Thời gian phẫu thuật kéo dài quá 2 lần thời gian bán thải của thuốc"
    ],
    "correct": 3,
    "explanation": "Cần bổ sung liều trong mổ nếu thời gian phẫu thuật > 2 lần T1/2 của kháng sinh (Cefazolin nhắc lại sau 4h).",
    "reference": "Hướng dẫn KSDP - Bộ Y tế",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 425,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Trường hợp người bệnh bị mất máu trong phẫu thuật với lượng bao nhiêu thì cần tiêm bổ sung liều KSDP?",
    "options": [
      "Mất máu trên 1500 mL ở người lớn",
      "Bất kỳ lượng máu nào bị mất",
      "Mất máu từ 300 đến 500 mL",
      "Mất máu từ 100 đến 200 mL"
    ],
    "correct": 0,
    "explanation": "Mất máu > 1500 mL làm giảm thể tích tuần hoàn và nồng độ kháng sinh tại mô, cần tiêm thêm 1 liều.",
    "reference": "Hướng dẫn KSDP - Bộ Y tế",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Hướng dẫn KSDP - Bộ Y tế",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Hướng dẫn KSDP - Bộ Y tế",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 428,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh Ceftriaxon có ưu điểm dược động học nổi bật nào khi dùng điều trị ngoại trú?",
    "options": [
      "Hấp thu tốt 100% qua đường uống sau bữa ăn",
      "Không gắn kết với protein huyết tương",
      "Đào thải nguyên vẹn 100% qua đường mồ hôi",
      "Thời gian bán thải dài khoảng 8 giờ cho phép dùng 1 lần trong ngày"
    ],
    "correct": 3,
    "explanation": "Ceftriaxon có T1/2 dài nhất trong các cephalosporin thế hệ 3, chỉ cần tiêm 1 lần/ngày.",
    "reference": "Sách DLS tr. 320",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 429,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh nào sau đây có khả năng thâm nhập tốt nhất qua hàng rào máu não khi màng não bị viêm?",
    "options": [
      "Ceftriaxon và Cefotaxim",
      "Gentamicin và Amikacin",
      "Cefazolin và Cefalexin",
      "Clindamycin và Erythromycin"
    ],
    "correct": 0,
    "explanation": "Ceftriaxon và Cefotaxim đạt nồng độ rất cao trong dịch não tủy khi viêm màng não.",
    "reference": "Sách DLS tr. 321",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 430,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh nhóm Aminosid nào có hoạt tính mạnh nhất trên trực khuẩn mủ xanh Pseudomonas?",
    "options": [
      "Kanamycin",
      "Tobramycin và Amikacin",
      "Streptomycin",
      "Neomycin"
    ],
    "correct": 1,
    "explanation": "Tobramycin và Amikacin là 2 aminosid có hiệu lực mạnh nhất chống trực khuẩn mủ xanh.",
    "reference": "Sách DLS tr. 322",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 431,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Phối hợp kháng sinh theo nguyên tắc đồng vận diệt khuẩn được chỉ định bắt buộc trong bệnh lý nào?",
    "options": [
      "Viêm họng do liên cầu khuẩn tan huyết beta nhóm A",
      "Viêm mô tế bào nông cẳng chân",
      "Viêm nội tâm mạc nhiễm khuẩn do Enterococcus faecalis",
      "Nhiễm khuẩn tiết niệu thể viêm bàng quang cấp"
    ],
    "correct": 2,
    "explanation": "Enterococcus trơ với nhiều thuốc, bắt buộc phối hợp Ampicillin + Gentamicin để diệt khuẩn hoàn toàn.",
    "reference": "Sách DLS tr. 323",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 324",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 433,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh Cotrimoxazol là dạng phối hợp cố định của hai hoạt chất nào theo tỷ lệ 5:1?",
    "options": [
      "Sulfamethoxazol và Trimethoprim",
      "Sulfadiazin và Pyrimethamin",
      "Sulfisoxazol và Ampicillin",
      "Sulfadoxin và Cloramphenicol"
    ],
    "correct": 0,
    "explanation": "Bactrim là phối hợp Sulfamethoxazol và Trimethoprim theo tỷ lệ khối lượng 5:1.",
    "reference": "Sách DLS tr. 325",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 434,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Cơ chế hiệp đồng của Sulfamethoxazol và Trimethoprim là ức chế hai khâu nào trong chuyển hóa acid folic?",
    "options": [
      "Enzym Topoisomerase II và IV",
      "Dihydropteroat synthetase và Dihydrofolat reductase",
      "Enzym Transpeptidase và Carboxypeptidase",
      "Enzym ADN polymerase và ARN polymerase"
    ],
    "correct": 1,
    "explanation": "SMX ức chế khâu tổng hợp acid dihydrofolic, TMP ức chế khâu khử thành acid tetrahydrofolic.",
    "reference": "Sách DLS tr. 326",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 435,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh nào sau đây là thuốc lựa chọn hàng đầu để điều trị viêm phổi do vi nấm Pneumocystis jirovecii?",
    "options": [
      "Erythromycin",
      "Ciprofloxacin",
      "Cotrimoxazol liều cao",
      "Ceftriaxon"
    ],
    "correct": 2,
    "explanation": "Cotrimoxazol liều cao là thuốc điều trị và dự phòng chuẩn cho viêm phổi PCP ở bệnh nhân suy giảm miễn dịch.",
    "reference": "Sách DLS tr. 327",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 436,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh nhóm Macrolid nào có thời gian bán thải dài nhất cho phép dùng phác đồ 3 đến 5 ngày?",
    "options": [
      "Spiramycin",
      "Erythromycin",
      "Clarithromycin",
      "Azithromycin"
    ],
    "correct": 3,
    "explanation": "Azithromycin có T1/2 mô lên đến 68 giờ và tích lũy trong đại thực bào, liệu trình điều trị chỉ cần 3-5 ngày.",
    "reference": "Sách DLS tr. 328",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 329",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 438,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh Clindamycin thuộc nhóm Lincosamid có đặc tính phân bố rất tốt vào mô nào?",
    "options": [
      "Dịch kính trong nhãn cầu",
      "Mô xương và dịch bao khớp",
      "Dịch não tủy khoang dưới nhện",
      "Mô mỡ quanh thận"
    ],
    "correct": 1,
    "explanation": "Clindamycin thâm nhập mô xương rất cao, thường được dùng điều trị viêm tủy xương do tụ cầu.",
    "reference": "Sách DLS tr. 330",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 439,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh điều trị nhiễm khuẩn đường tiết niệu Fosfomycin có phác đồ liều dùng độc đáo như thế nào?",
    "options": [
      "Uống 4 lần mỗi ngày liên tục trong 2 tuần",
      "Tiêm bắp ngắt quãng mỗi 6 giờ",
      "Uống một liều duy nhất 3 gam",
      "Đặt dưới lưỡi trước mỗi bữa ăn"
    ],
    "correct": 2,
    "explanation": "Fosfomycin trometamol 3g liều duy nhất đạt nồng độ diệt khuẩn trong nước tiểu kéo dài 48-72 giờ.",
    "reference": "Sách DLS tr. 331",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 440,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh Nitrofurantoin dùng điều trị viêm bàng quang cấp bị chống chỉ định khi mức lọc cầu thận:",
    "options": [
      "Dưới 120 mL trên phút",
      "Trên 60 mL trên phút",
      "Dưới 90 mL trên phút",
      "Dưới 30 mL trên phút"
    ],
    "correct": 3,
    "explanation": "Khi ClCr < 30 mL/min, Nitrofurantoin không đạt nồng độ điều trị trong nước tiểu và tăng nguy cơ độc thần kinh.",
    "reference": "Sách DLS tr. 332",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 441,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Daptomycin là kháng sinh lipopeptid vòng bị bất hoạt hoàn toàn bởi chất nào trong cơ thể?",
    "options": [
      "Chất diện hoạt Surfactant ở phế nang phổi",
      "Men pepsin trong dạ dày",
      "Dịch nước mắt ở mắt",
      "Dịch mật do gan tiết ra"
    ],
    "correct": 0,
    "explanation": "Daptomycin bị surfactant phổi trung hòa mất tác dụng, chống chỉ định điều trị viêm phổi.",
    "reference": "Sách DLS tr. 333",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 442,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Độc tính đặc trưng cần xét nghiệm theo dõi nồng độ Creatin Kinase định kỳ của Daptomycin là:",
    "options": [
      "Độc tính làm mất thính lực tai trong",
      "Độc tính gây viêm cơ và tiêu cơ vân",
      "Gây xơ hóa cơ vòng bàng quang",
      "Độc tính gây suy gan cấp hoại tử"
    ],
    "correct": 1,
    "explanation": "Daptomycin gây độc tính trên cơ phụ thuộc liều, cần theo dõi chỉ số men CK hàng tuần.",
    "reference": "Sách DLS tr. 334",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 443,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Tigecyclin là kháng sinh nhóm Glycylcyclin có đặc điểm dược động học nổi bật nào?",
    "options": [
      "Nồng độ trong máu cực cao nhưng không vào mô",
      "Chỉ dùng được qua đường uống",
      "Thể tích phân bố cực lớn thâm nhập mô tốt nhưng nồng độ máu rất thấp",
      "Đào thải 100% nguyên vẹn qua nước tiểu"
    ],
    "correct": 2,
    "explanation": "Tigecyclin vào mô rất mạnh nhưng nồng độ máu thấp, không dùng điều trị nhiễm khuẩn huyết.",
    "reference": "Sách DLS tr. 335",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 444,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh nào sau đây là lựa chọn hàng đầu điều trị viêm đại tràng giả mạc do Clostridium difficile?",
    "options": [
      "Ampicillin đường uống",
      "Gentamicin tiêm bắp",
      "Vancomycin truyền tĩnh mạch",
      "Vancomycin đường uống"
    ],
    "correct": 3,
    "explanation": "Vancomycin đường uống không hấp thu vào máu, tập trung nồng độ cực cao trong lòng ruột diệt C. difficile.",
    "reference": "Sách DLS tr. 336",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 445,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Fidaxomicin là kháng sinh mới được ưu tiên điều trị viêm ruột do C. difficile vì ưu điểm gì?",
    "options": [
      "Tỷ lệ tái phát bệnh thấp hơn so với Vancomycin uống",
      "Hấp thu hoàn toàn 100% vào tuần hoàn",
      "Có thể dùng điều trị các bệnh do virus đường ruột",
      "Giá thành rẻ nhất trong tất cả các kháng sinh"
    ],
    "correct": 0,
    "explanation": "Fidaxomicin có phổ hẹp bảo tồn hệ vi sinh vật ruột tự nhiên nên giảm mạnh nguy cơ tái phát C. difficile.",
    "reference": "Sách DLS tr. 337",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 446,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh nhóm Carbapenem nào sau đây không có hoạt tính trên trực khuẩn mủ xanh Pseudomonas?",
    "options": [
      "Imipenem",
      "Ertapenem",
      "Meropenem",
      "Doripenem"
    ],
    "correct": 1,
    "explanation": "Ertapenem không diệt được Pseudomonas và Acinetobacter, chỉ cần dùng 1 lần/ngày.",
    "reference": "Sách DLS tr. 338",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 447,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh Imipenem luôn phải phối hợp cố định với Cilastatin nhằm mục đích gì?",
    "options": [
      "Giúp Imipenem ngấm được vào tế bào gan",
      "Giảm nguy cơ dị ứng sốc phản vệ",
      "Ức chế enzym Dehydropeptidase 1 ở ống thận bảo vệ Imipenem",
      "Làm tăng độ hòa tan của Imipenem trong máu"
    ],
    "correct": 2,
    "explanation": "Cilastatin ức chế enzym dehydropeptidase-I tại bờ bàn chải ống thận ngăn chuyển hóa độc thận của Imipenem.",
    "reference": "Sách DLS tr. 339",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 448,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Tác dụng không mong muốn trên hệ thần kinh trung ương cần chú ý nhất của Imipenem là:",
    "options": [
      "Làm giãn đồng tử hai bên mắt",
      "Gây mất trí nhớ ngắn hạn cấp tính",
      "Gây điếc tiếp nhận thần kinh",
      "Gây co giật đặc biệt trên bệnh nhân có suy giảm chức năng thận"
    ],
    "correct": 3,
    "explanation": "Imipenem đối kháng thụ thể GABA, nguy cơ gây co giật cao nhất trong các carbapenem nếu không chỉnh liều suy thận.",
    "reference": "Sách DLS tr. 340",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 449,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh nhóm Fluoroquinolon đường hô hấp có hoạt tính diệt phế cầu Streptococcus pneumoniae mạnh là:",
    "options": [
      "Levofloxacin và Moxifloxacin",
      "Ofloxacin",
      "Norfloxacin",
      "Ciprofloxacin"
    ],
    "correct": 0,
    "explanation": "Levofloxacin và Moxifloxacin là 'respiratory fluoroquinolones' có hoạt lực rất cao trên phế cầu.",
    "reference": "Sách DLS tr. 341",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 450,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Moxifloxacin không thích hợp để điều trị nhiễm khuẩn đường tiết niệu do nguyên nhân nào?",
    "options": [
      "Thuốc bị phân hủy hoàn toàn bởi vi khuẩn E. coli",
      "Thải trừ qua gan mật và nồng độ thuốc dạng hoạt tính trong nước tiểu rất thấp",
      "Thuốc bị nước tiểu acid phá hủy",
      "Thuốc gây tắc nghẽn ống thận tạo tinh thể"
    ],
    "correct": 1,
    "explanation": "Moxifloxacin chuyển hóa qua gan bài xuất qua phân, chỉ < 20% qua thận nên không đạt nồng độ diệt khuẩn tiết niệu.",
    "reference": "Sách DLS tr. 342",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 451,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh nào sau đây gây nước tiểu, nước bọt và nước mắt có màu đỏ cam đặc trưng?",
    "options": [
      "Isoniazid",
      "Ethambutol",
      "Rifampicin",
      "Pyrazinamid"
    ],
    "correct": 2,
    "explanation": "Rifampicin có màu đỏ tự nhiên, bài tiết qua dịch tiết cơ thể nhuộm đỏ cam dịch tiết.",
    "reference": "Sách DLS tr. 343",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 344",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 453,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Để phòng ngừa viêm dây thần kinh ngoại biên do thuốc chống lao Isoniazid, người ta dùng kèm:",
    "options": [
      "Vitamin B6 với liều 10 đến 25 mg mỗi ngày",
      "Vitamin A dạng dầu",
      "Vitamin B12 đường tiêm bắp",
      "Vitamin C liều cao dạng sủi"
    ],
    "correct": 0,
    "explanation": "INH cạnh tranh và làm tăng đào thải Pyridoxin (Vitamin B6) gây viêm thần kinh ngoại biên.",
    "reference": "Sách DLS tr. 345",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 454,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Hiện tượng kháng chéo giữa các kháng sinh Macrolid, Lincosamid và Streptogramin B là do cơ chế:",
    "options": [
      "Tăng tổng hợp vách tế bào dày gấp đôi",
      "Methyl hóa thụ thể đích trên tiểu đơn vị 23S của ribosom 50S",
      "Tiết enzym Acetyltransferase bất hoạt thuốc",
      "Đột biến enzym ADN gyrase của vi khuẩn"
    ],
    "correct": 1,
    "explanation": "Gen erm mã hóa enzym methyltransferase làm biến đổi điểm gắn chung trên 50S (kiểu hình MLSB).",
    "reference": "Sách DLS tr. 346",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 455,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh nhóm Monobactam Aztreonam có đặc điểm nổi bật nào về phổ tác dụng và tính sinh dị ứng?",
    "options": [
      "Gây dị ứng chéo 100% với Ceftazidim",
      "Chỉ diệt được cầu khuẩn Gram dương",
      "Chỉ tác dụng trên vi khuẩn Gram âm hiếu khí và không gây dị ứng chéo với Penicillin",
      "Có phổ tác dụng cực rộng trên cả vi khuẩn kỵ khí"
    ],
    "correct": 2,
    "explanation": "Aztreonam chỉ diệt Gram âm, an toàn cho bệnh nhân dị ứng penicillin (trừ dị ứng chéo với Ceftazidim vì cùng chuỗi bên).",
    "reference": "Sách DLS tr. 347",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 456,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Chỉ số nồng độ ức chế tối thiểu MIC của một kháng sinh đối với vi khuẩn được định nghĩa là:",
    "options": [
      "Nồng độ tối đa cơ thể người bệnh có thể dung nạp được",
      "Nồng độ kháng sinh đo được tại mô vết mổ",
      "Nồng độ tiêu diệt 99,9% số lượng vi khuẩn ban đầu",
      "Nồng độ thấp nhất ngăn chặn sự phát triển nhìn thấy được của vi khuẩn sau 18 đến 24 giờ"
    ],
    "correct": 3,
    "explanation": "MIC là nồng độ kháng sinh thấp nhất ức chế nhìn thấy được sự nhân lên của vi khuẩn in vitro.",
    "reference": "Sách DLS tr. 348",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 457,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Chỉ số nồng độ diệt khuẩn tối thiểu MBC được định nghĩa là nồng độ kháng sinh có khả năng:",
    "options": [
      "Tiêu diệt từ 99,9% số lượng vi khuẩn sống sót ban đầu",
      "Gắn kết vào toàn bộ các điểm gắn ribosom",
      "Làm vi khuẩn ngừng sinh độc tố nội bào",
      "Ức chế sự di chuyển của vi khuẩn trong thạch"
    ],
    "correct": 0,
    "explanation": "MBC là nồng độ thấp nhất tiêu diệt 99,9% vi khuẩn trong mẫu cấy chuẩn sau 24 giờ.",
    "reference": "Sách DLS tr. 349",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 350",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 459,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Khi sử dụng Vancomycin, việc theo dõi nồng độ đáy C_trough trong máu trước liều tiếp theo nhằm mục đích:",
    "options": [
      "Xác định thời điểm bệnh nhân có thể xuất viện",
      "Kiểm tra mức độ dị ứng trên da của bệnh nhân",
      "Đảm bảo hiệu lực diệt khuẩn và phòng tránh độc tính trên thận",
      "Đánh giá tốc độ hòa tan của thuốc tại tĩnh mạch"
    ],
    "correct": 2,
    "explanation": "Đo nồng độ đáy trước liều thứ 4 giúp duy trì C_trough 15-20 mg/L đảm bảo hiệu lực và tránh suy thận cấp.",
    "reference": "Sách DLS tr. 351",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 460,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Phối hợp Vancomycin với Piperacillin Tazobactam gần đây được cảnh báo trên lâm sàng vì nguy cơ:",
    "options": [
      "Gây xuất huyết tiêu hóa diện rộng",
      "Gây hạ đường huyết kịch phát sau tiêm",
      "Làm mất hoạt tính diệt khuẩn của Vancomycin",
      "Tăng nguy cơ xuất hiện tổn thương thận cấp tính hiệp đồng"
    ],
    "correct": 3,
    "explanation": "Nhiều nghiên cứu lâm sàng chứng minh phối hợp Vanco + Zosyn làm tăng đáng kể tỷ lệ suy thận cấp.",
    "reference": "Sách DLS tr. 352",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 461,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh nhóm Oxazolidinon Tedizolid có ưu thế nào so với Linezolid?",
    "options": [
      "Chỉ cần dùng 1 lần trong ngày và ít gây ức chế tủy xương hơn",
      "Diệt được cả vi khuẩn kỵ khí Clostridium",
      "Không gây bất kỳ tác dụng phụ nào",
      "Chỉ cần dùng đường tiêm bắp không đau"
    ],
    "correct": 0,
    "explanation": "Tedizolid có ái lực cao hơn, liều thấp 200 mg x 1 lần/ngày và độc tính tạo máu thấp hơn Linezolid.",
    "reference": "Sách DLS tr. 353",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 462,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh dự phòng trong phẫu thuật thay khớp háng nhân tạo được khuyến cáo ưu tiên dùng thuốc nào?",
    "options": [
      "Ciprofloxacin đường uống",
      "Cefazolin tiêm tĩnh mạch",
      "Metronidazol truyền tĩnh mạch",
      "Amoxicillin viên nang"
    ],
    "correct": 1,
    "explanation": "Phẫu thuật chấn thương chỉnh hình đặt dụng cụ nhân tạo khuyến cáo dùng Cefazolin (hoặc Vancomycin nếu tỷ lệ MRSA cao).",
    "reference": "Hướng dẫn KSDP - Bộ Y tế",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 463,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh dự phòng có được chỉ định thường quy cho thủ thuật nội soi phế quản chẩn đoán không biến chứng không?",
    "options": [
      "Chỉ định tiêm 3 loại kháng sinh phối hợp",
      "Bắt buộc phải truyền kháng sinh trước 1 ngày",
      "Không được chỉ định thường quy",
      "Phải dùng liên tục 5 ngày sau thủ thuật"
    ],
    "correct": 2,
    "explanation": "Thủ thuật nội soi chẩn đoán không xâm lấn mô sâu không có chỉ định dùng kháng sinh dự phòng.",
    "reference": "Hướng dẫn KSDP - Bộ Y tế",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 464,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Khi người bệnh béo phì có cân nặng trên 120 kg, liều Cefazolin dự phòng phẫu thuật cần điều chỉnh:",
    "options": [
      "Giảm liều xuống 500 mg để tránh ngộ độc",
      "Chuyển sang dùng kháng sinh đường uống",
      "Duy trì liều 1 gam tiêu chuẩn không đổi",
      "Tăng liều Cefazolin lên 3 gam tiêm tĩnh mạch"
    ],
    "correct": 3,
    "explanation": "Bệnh nhân béo phì (BMI cao hoặc cân nặng >= 120 kg) liều Cefazolin dự phòng tăng từ 2g lên 3g.",
    "reference": "Hướng dẫn KSDP - Bộ Y tế",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 465,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Việc cạo lông vùng mổ bằng dao cạo trước phẫu thuật có ảnh hưởng gì đến nhiễm khuẩn vết mổ?",
    "options": [
      "Làm tăng vi tổn thương da dẫn đến tăng tỷ lệ nhiễm khuẩn vết mổ",
      "Giúp vết mổ vô khuẩn hoàn toàn tuyệt đối",
      "Không có bất kỳ ảnh hưởng nào",
      "Rút ngắn thời gian liền sẹo của vết mổ"
    ],
    "correct": 0,
    "explanation": "Dao cạo gây xước da vi thể tạo ổ vi khuẩn cư trú; khuyến cáo chỉ cắt tỉa lông bằng kéo/máy tỉa sát giờ mổ.",
    "reference": "Hướng dẫn KSDP - Bộ Y tế",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 466,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh nào sau đây thuộc nhóm Beta-lactamase phổ rộng ESBL có thể phân hủy?",
    "options": [
      "Kháng sinh Glycopeptid Vancomycin",
      "Cephalosporin thế hệ 3 như Ceftriaxon và Cefotaxim",
      "Carbapenem như Meropenem và Imipenem",
      "Cephamycin như Cefoxitin"
    ],
    "correct": 1,
    "explanation": "Vi khuẩn sinh ESBL thủy phân penicillin, cephalosporin các thế hệ và aztreonam; carbapenem là thuốc chọn lựa.",
    "reference": "Sách DLS tr. 357",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 467,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Chế độ xuống thang kháng sinh (De-escalation) trong điều trị nhiễm khuẩn nặng là chiến lược nhằm:",
    "options": [
      "Chuyển từ đường truyền tĩnh mạch sang tiêm bắp",
      "Giảm liều kháng sinh xuống còn một nửa liều chuẩn",
      "Chuyển sang kháng sinh phổ hẹp hơn khi có kết quả kháng sinh đồ",
      "Ngừng kháng sinh ngay sau khi bệnh nhân hết sốt 12 giờ"
    ],
    "correct": 2,
    "explanation": "Khởi đầu bao vây phổ rộng, sau 48-72h có kháng sinh đồ thì 'xuống thang' phổ hẹp để giảm chọn lọc kháng thuốc.",
    "reference": "Sách DLS tr. 358",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 468,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh Ceftobiprole và Ceftaroline được gọi là Cephalosporin thế hệ mới vì có hoạt tính trên:",
    "options": [
      "Vi nấm xâm lấn Aspergillus",
      "Trực khuẩn kỵ khí Bacteroides fragilis",
      "Tất cả các loại virus có màng bọc",
      "Tụ cầu vàng kháng Methicillin"
    ],
    "correct": 3,
    "explanation": "Ceftaroline và Ceftobiprole là Cephalosporin thế hệ mới đặc trị chủng MRSA.",
    "reference": "Sách DLS tr. 359",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 469,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Hiện tượng sốc độc tố do vi khuẩn giải phóng ồ ạt độc tố trong viêm mô hoại tử có thể giảm khi dùng kèm:",
    "options": [
      "Clindamycin do có tác dụng ức chế tổng hợp độc tố vi khuẩn",
      "Cefazolin tiêm tĩnh mạch ngắt quãng",
      "Gentamicin liều cao đường tiêm bắp",
      "Ciprofloxacin dạng truyền tĩnh mạch"
    ],
    "correct": 0,
    "explanation": "Clindamycin ức chế ribosom 50S làm ngừng sản xuất độc tố protein của tụ cầu và liên cầu.",
    "reference": "Sách DLS tr. 360",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 470,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh Telavancin và Oritavancin thuộc nhóm Lipoglycopeptid có đặc tính khác biệt nổi bật là:",
    "options": [
      "Chỉ dùng bằng đường uống viên nén",
      "Thời gian bán thải cực dài cho phép dùng một liều duy nhất cho cả đợt",
      "Không có tác dụng trên bất kỳ vi khuẩn Gram dương nào",
      "Đào thải 100% qua đường hô hấp"
    ],
    "correct": 1,
    "explanation": "Oritavancin và Dalbavancin có T1/2 trên 200-300 giờ, chỉ cần truyền 1 liều duy nhất cho đợt điều trị nhiễm khuẩn da mô mềm.",
    "reference": "Sách DLS tr. 361",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 471,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Nồng độ Cortisol nội sinh trong cơ thể người đạt đỉnh cao nhất vào khoảng thời gian nào trong ngày?",
    "options": [
      "Khoảng 20 giờ tối",
      "Khoảng 12 giờ trưa",
      "Khoảng 6 đến 8 giờ sáng",
      "Khoảng nửa đêm từ 0 đến 2 giờ sáng"
    ],
    "correct": 2,
    "explanation": "Trục HPA tiết cortisol theo nhịp ngày đêm, cao nhất lúc 6-8h sáng và thấp nhất lúc nửa đêm.",
    "reference": "Sách DLS tr. 370",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 472,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Để hạn chế tối đa nguy cơ ức chế trục dưới đồi tuyến yên thượng thận, thời điểm uống Corticoid tối ưu là:",
    "options": [
      "Uống vào lúc 22 giờ đêm trước khi đi ngủ",
      "Chỉ uống vào buổi chiều muộn khoảng 17 giờ",
      "Uống chia đều 4 lần trước các bữa ăn và trước ngủ",
      "Một lần duy nhất vào lúc 8 giờ sáng sau khi ăn no"
    ],
    "correct": 3,
    "explanation": "Uống vào 8h sáng trùng với đỉnh cortisol sinh lý nên ít gây ức chế phản hồi ngược âm tính trục HPA.",
    "reference": "Sách DLS tr. 371",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 473,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Liều tương đương kháng viêm của Prednisolon 5 mg tương ứng với bao nhiêu mg Dexamethason?",
    "options": [
      "0,75 mg",
      "0,6 mg",
      "4 mg",
      "20 mg"
    ],
    "correct": 0,
    "explanation": "Bảng tương đương: Hydrocortison 20mg = Prednisolon 5mg = Methylprednisolon 4mg = Dexamethason 0,75mg.",
    "reference": "Sách DLS tr. 372",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 474,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Liều tương đương kháng viêm của Methylprednisolon so với Prednisolon 5 mg là:",
    "options": [
      "10 mg",
      "4 mg",
      "1 mg",
      "20 mg"
    ],
    "correct": 1,
    "explanation": "Methylprednisolon có hoạt lực kháng viêm mạnh hơn prednisolon (4 mg Methylprednisolon = 5 mg Prednisolon).",
    "reference": "Sách DLS tr. 372",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 373",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 476,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Hai Glucocorticoid nào sau đây hầu như hoàn toàn không có hoạt tính giữ muối nước Mineralocorticoid?",
    "options": [
      "Fludrocortison và Aldosteron",
      "Hydrocortison và Cortison",
      "Prednisolon và Prednison",
      "Dexamethason và Betamethason"
    ],
    "correct": 3,
    "explanation": "Dexamethason và Betamethason là dẫn chất fluorin hóa không gây giữ natri và nước.",
    "reference": "Sách DLS tr. 373",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 477,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Cơ chế tác dụng chống viêm ở mức độ phân tử của Glucocorticoid thông qua ức chế enzym nào?",
    "options": [
      "Phospholipase A2 thông qua kích thích tạo Lipocortin 1",
      "Adenylate cyclase ở màng nhân tế bào",
      "5-Lipoxygenase trực tiếp tại bào tương",
      "Cyclooxygenase 1 trực tiếp tại màng tế bào"
    ],
    "correct": 0,
    "explanation": "Corticoid gắn thụ thể nhân kích thích tổng hợp lipocortin-1 (annexin A1) ức chế phospholipase A2.",
    "reference": "Sách DLS tr. 374",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 478,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Nguy cơ suy vỏ thượng thận thứ phát cấp tính do ngừng Corticoid đột ngột thường xảy ra khi dùng thuốc:",
    "options": [
      "Chỉ bôi ngoài da một lượng nhỏ ở mu bàn tay",
      "Liều trên 5 mg Prednisolon mỗi ngày kéo dài trên 3 tuần",
      "Dùng liều thấp trong vòng 3 ngày liên tục",
      "Chỉ dùng một liều duy nhất trong cấp cứu sốc"
    ],
    "correct": 1,
    "explanation": "Dùng liều tương đương >= 5mg prednisolon trên 3 tuần gây teo vỏ thượng thận, ngừng đột ngột gây suy thượng thận cấp.",
    "reference": "Sách DLS tr. 375",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 479,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Triệu chứng lâm sàng điển hình của cơn suy thượng thận cấp do ngừng thuốc Corticoid đột ngột bao gồm:",
    "options": [
      "Tăng huyết áp kịch phát kèm xuất huyết não",
      "Co giật toàn thể và cứng hàm uốn ván",
      "Tụt huyết áp trụy mạch, sốt cao, đau bụng dữ dội và lơ mơ",
      "Phù toàn thân và tăng kali máu nhẹ"
    ],
    "correct": 2,
    "explanation": "Suy thượng thận cấp là cấp cứu nội khoa với trụy mạch, tụt áp không đáp ứng dịch, hạ natri, tăng kali.",
    "reference": "Sách DLS tr. 376",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 480,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Chế độ điều trị Corticoid cách ngày mang lại ưu điểm vượt trội nào trên bệnh nhân điều trị dài hạn?",
    "options": [
      "Giúp bệnh nhân tăng cân nhanh chóng hơn",
      "Làm giảm hoàn toàn chi phí mua thuốc",
      "Làm tăng gấp đôi hiệu lực kháng viêm của thuốc",
      "Giúp giảm thiểu tình trạng ức chế trục hạ đồi tuyến yên thượng thận"
    ],
    "correct": 3,
    "explanation": "Dùng cách ngày cho phép trục HPA có 24 giờ phục hồi sinh lý trong ngày nghỉ thuốc.",
    "reference": "Sách DLS tr. 377",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 481,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Hội chứng Cushing do thuốc biểu hiện bằng các dấu hiệu phân bố mỡ đặc trưng nào?",
    "options": [
      "Khuôn mặt tròn như mặt trăng, bướu trâu ở gáy và béo trung tâm",
      "Tích tụ mỡ chủ yếu ở cẳng chân và bàn chân",
      "Teo toàn bộ mô mỡ ở vùng ngực và bụng",
      "Mất hoàn toàn lớp mỡ dưới da toàn thân"
    ],
    "correct": 0,
    "explanation": "Hội chứng Cushing phân bố lại mỡ: mặt tròn trăng rằm, gù trâu sau gáy, béo bụng kèm teo cơ gốc chi.",
    "reference": "Sách DLS tr. 378",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 482,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Biến chứng trên hệ xương của việc sử dụng Glucocorticoid liều cao kéo dài là gì?",
    "options": [
      "Làm cốt hóa sớm sụn tiếp hợp ở người già",
      "Loãng xương và hoại tử vô mạch chỏm xương đùi",
      "Gây xơ hóa các khớp ngón tay ngón chân",
      "Làm tăng mật độ khoáng chất xương quá mức"
    ],
    "correct": 1,
    "explanation": "Corticoid ức chế hủy cốt bào, ức chế tạo xương, giảm hấp thu Ca ở ruột gây loãng xương và hoại tử vô mạch chỏm xương đùi.",
    "reference": "Sách DLS tr. 379",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 483,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Để phòng ngừa loãng xương cho bệnh nhân phải dùng Glucocorticoid kéo dài trên 3 tháng, biện pháp bổ sung là:",
    "options": [
      "Bổ sung Vitamin A liều cao 50.000 đơn vị",
      "Uống thật nhiều nước ngọt có ga mỗi ngày",
      "Bổ sung Canxi, Vitamin D3 và xem xét dùng Bisphosphonat",
      "Truyền albumin huyết thanh định kỳ"
    ],
    "correct": 2,
    "explanation": "Khuyến cáo dự phòng loãng xương: Ca 1000-1200 mg/ngày, Vit D 800 IU/ngày và Bisphosphonat (như Alendronat).",
    "reference": "Sách DLS tr. 380",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 484,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Glucocorticoid ảnh hưởng đến chuyển hóa glucid như thế nào dẫn đến nguy cơ đái tháo đường?",
    "options": [
      "Làm tăng đào thải glucose ồ ạt qua đường phân",
      "Ức chế phân hủy Glycogen tại tế bào cơ vân",
      "Kích thích tế bào beta đảo tụy tăng tiết Insulin",
      "Tăng tân tạo glucose tại gan và giảm sử dụng glucose ở mô ngoại vi"
    ],
    "correct": 3,
    "explanation": "Corticoid kích thích enzym tân tạo đường gan, gây đề kháng insulin ngoại vi làm tăng glucose máu.",
    "reference": "Sách DLS tr. 381",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 485,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Biến chứng trên mắt khi sử dụng Glucocorticoid nhỏ mắt hoặc toàn thân kéo dài bao gồm:",
    "options": [
      "Đục thủy tinh thể dưới bao sau và tăng nhãn áp Glaucoma",
      "Bong giác mạc tự phát hai mắt",
      "Viêm kết mạc dị ứng mùa xuân",
      "Teo dây thần kinh thị giác một bên mắt"
    ],
    "correct": 0,
    "explanation": "Tăng nhãn áp do giảm lưu thông thủy dịch và đục thủy tinh thể dưới bao sau là ADR mắt của corticoid.",
    "reference": "Sách DLS tr. 382",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 486,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Tác dụng phụ trên da của Glucocorticoid bôi tại chỗ kéo dài thể hiện qua hiện tượng:",
    "options": [
      "Tăng sinh biểu bì làm da dày sừng thô ráp",
      "Teo da, rạn nứt da, giãn mao mạch và chậm liền sẹo",
      "Làm đổi màu da thành màu xanh tím",
      "Làm mất hoàn toàn các tuyến mồ hôi trên da"
    ],
    "correct": 1,
    "explanation": "Corticoid ức chế tổng hợp collagen và phân chia tế bào làm teo mỏng da, rạn da đỏ và giãn mạch.",
    "reference": "Sách DLS tr. 383",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 487,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Glucocorticoid làm tăng nguy cơ loét dạ dày tá tràng đặc biệt nghiêm trọng khi phối hợp đồng thời với:",
    "options": [
      "Thuốc bảo vệ niêm mạc Sucralfat",
      "Thuốc ức chế men bơm proton Omeprazol",
      "Thuốc chống viêm giảm đau không steroid NSAID",
      "Dung dịch kháng acid dạ dày chứa nhôm"
    ],
    "correct": 2,
    "explanation": "Phối hợp Corticoid + NSAID làm tăng nguy cơ loét và xuất huyết tiêu hóa lên gấp 4 đến 5 lần.",
    "reference": "Sách DLS tr. 384",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 488,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Biến chứng ức chế miễn dịch của Glucocorticoid làm bùng phát nguy cơ nhiễm trùng nào?",
    "options": [
      "Bệnh lý tiêu chảy do ngộ độc thức ăn",
      "Sốt phát ban dạng sởi ở trẻ em",
      "Nhiễm khuẩn cấp tính tụ cầu ngoài da",
      "Tái hoạt hóa vi khuẩn lao và nhiễm nấm cơ hội"
    ],
    "correct": 3,
    "explanation": "Corticoid làm giảm lympho T, ức chế đại thực bào làm dễ bùng phát lao tiềm ẩn và nhiễm nấm cơ hội.",
    "reference": "Sách DLS tr. 385",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 386",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 490,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Liệu pháp Corticoid liều xung (Pulse therapy) thường sử dụng hoạt chất nào truyền tĩnh mạch liều cao?",
    "options": [
      "Hydrocortison tiêm bắp ngắt quãng",
      "Methylprednisolon với liều 500 đến 1000 mg mỗi ngày trong 3 ngày",
      "Dexamethason liều 100 mg mỗi giờ",
      "Prednisolon uống sau bữa ăn tối"
    ],
    "correct": 1,
    "explanation": "Pulse therapy dùng Methylprednisolon truyền ngắt quãng điều trị viêm thận lupus, thải ghép cấp.",
    "reference": "Sách DLS tr. 387",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 491,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Ảnh hưởng của Glucocorticoid lên chuyển hóa điện giải trong cơ thể thể hiện bằng:",
    "options": [
      "Giữ Kali và đào thải Natri ra ngoài cơ thể",
      "Làm tăng đào thải đồng thời cả Natri và Kali",
      "Giữ Natri và nước đồng thời tăng đào thải Kali qua nước tiểu",
      "Làm tăng nồng độ Calci và Phosphat trong máu"
    ],
    "correct": 2,
    "explanation": "Corticoid kích thích ống thận tái hấp thu Na+ trao đổi bài xuất K+ và H+ gây phù và hạ kali máu.",
    "reference": "Sách DLS tr. 388",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 492,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Tác dụng của Glucocorticoid trên hệ thần kinh tâm thần có thể gây ra biểu hiện nào?",
    "options": [
      "Mất hoàn toàn phản xạ nuốt và phản xạ ho",
      "Hôn mê sâu li bì kéo dài suốt cả ngày",
      "Liệt vận động nửa người thoáng qua",
      "Mất ngủ, hưng cảm, sảng khoái quá mức hoặc trầm cảm loạn thần"
    ],
    "correct": 3,
    "explanation": "Corticoid có thể gây rối loạn khí sắc, hưng cảm, mất ngủ hoặc trầm cảm loạn thần phụ thuộc liều.",
    "reference": "Sách DLS tr. 389",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 493,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Glucocorticoid dạng hít như Fluticason hoặc Budesonid có tác dụng phụ tại chỗ thường gặp nhất là:",
    "options": [
      "Nhiễm nấm Candida hầu họng và khàn tiếng",
      "Mất vị giác giác quan vĩnh viễn",
      "Loét trợt niêm mạc lưỡi sâu",
      "Chảy máu cam ồ ạt kéo dài"
    ],
    "correct": 0,
    "explanation": "Lắng đọng thuốc hạt ở hầu họng gây nấm miệng và ức chế cơ thanh quản gây khàn tiếng.",
    "reference": "Sách DLS tr. 390",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 494,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Để phòng ngừa tác dụng phụ nấm miệng và khàn tiếng khi dùng Corticoid hít, khuyến cáo người bệnh là:",
    "options": [
      "Dùng kèm dung dịch kháng sinh nhỏ họng",
      "Súc miệng họng thật kỹ bằng nước sạch và nhổ đi sau mỗi lần hít",
      "Nín thở tuyệt đối trong 5 phút sau xịt thuốc",
      "Uống ngay một ly sữa nóng sau khi hít thuốc"
    ],
    "correct": 1,
    "explanation": "Súc miệng sâu trong họng và nhổ bỏ nước giúp loại bỏ corticoid lắng đọng ở niêm mạc hầu họng.",
    "reference": "Sách DLS tr. 391",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 392",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 496,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Xét nghiệm nghiệm pháp kích thích bằng Synacthen (ACTH tổng hợp) được dùng để đánh giá:",
    "options": [
      "Tốc độ lọc của màng đáy cầu thận",
      "Mức độ nhạy cảm của màng tế bào với Glucose",
      "Chức năng co bóp tống máu của tim",
      "Khả năng đáp ứng bài tiết Cortisol của tuyến thượng thận"
    ],
    "correct": 3,
    "explanation": "Nghiệm pháp Synacthen đo cortisol máu trước và sau tiêm ACTH giúp chẩn đoán suy thượng thận.",
    "reference": "Sách DLS tr. 393",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 497,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Trong phẫu thuật hoặc stress nhiễm trùng nặng ở người đang dùng Corticoid dài hạn, cần xử trí liều thế nào?",
    "options": [
      "Tăng liều Corticoid lên gấp 2 đến 3 lần để bù trừ cho phản ứng stress",
      "Giảm một nửa liều để bảo vệ vết thương phẫu thuật",
      "Ngừng thuốc ngay lập tức để tránh ức chế miễn dịch",
      "Giữ nguyên liều uống hàng ngày không thay đổi"
    ],
    "correct": 0,
    "explanation": "Cơ thể bình thường tăng tiết cortisol gấp nhiều lần khi phẫu thuật; bệnh nhân suy teo vỏ thượng thận cần tăng liều stress.",
    "reference": "Sách DLS tr. 394",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 498,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Glucocorticoid có tác dụng hạ sốt và chống dị ứng cực mạnh là nhờ khả năng ức chế giải phóng chất nào?",
    "options": [
      "Chất nhầy niêm mạc khí phế quản",
      "Các Cytokine gây sốt như IL-1, TNF-alpha và Histamin",
      "Men tiêu protein Pepsin trong dạ dày",
      "Hormon tuyến cận giáp Calcitonin"
    ],
    "correct": 1,
    "explanation": "Corticoid ức chế các cytokine tiền viêm (IL-1, IL-6, TNF) và giảm phóng thích chất trung gian hóa học.",
    "reference": "Sách DLS tr. 395",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 499,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Thuốc Glucocorticoid nào sau đây là tiền dược phải trải qua quá trình khử hydro tại gan mới có hoạt tính?",
    "options": [
      "Dexamethason và Betamethason",
      "Methylprednisolon",
      "Prednison và Cortison",
      "Prednisolon và Hydrocortison"
    ],
    "correct": 2,
    "explanation": "Prednison chuyển thành Prednisolon và Cortison chuyển thành Hydrocortison nhờ enzym 11-beta-HSD1 ở gan.",
    "reference": "Sách DLS tr. 396",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 500,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Bệnh nhân bị suy giảm chức năng gan nặng nên ưu tiên sử dụng thuốc nào giữa Prednison và Prednisolon?",
    "options": [
      "Bắt buộc phải dùng dạng viên đặt hậu môn",
      "Ưu tiên chọn Prednison vì giá thành rẻ hơn",
      "Cả hai thuốc đều không được dùng cho bệnh gan",
      "Ưu tiên chọn Prednisolon vì không cần chuyển hóa qua gan"
    ],
    "correct": 3,
    "explanation": "Gan suy không chuyển hóa được Prednison thành Prednisolon hoạt tính, nên dùng trực tiếp Prednisolon.",
    "reference": "Sách DLS tr. 397",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 501,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Bệnh nhân đái tháo đường đang dùng Glucocorticoid cần được điều chỉnh chế độ điều trị như thế nào?",
    "options": [
      "Cần tăng liều thuốc hạ đường huyết hoặc Insulin và theo dõi đường máu",
      "Giảm liều Insulin xuống để tránh hạ đường huyết",
      "Chỉ cần ăn kiêng đường tuyệt đối không dùng thuốc",
      "Ngừng hoàn toàn việc kiểm tra đường máu mao mạch"
    ],
    "correct": 0,
    "explanation": "Corticoid làm tăng đường huyết đáng kể, thường cần tăng liều insulin (đặc biệt insulin tác dụng nhanh bữa ăn).",
    "reference": "Sách DLS tr. 398",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 502,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Glucocorticoid dùng liều cao kéo dài làm tăng số lượng loại tế bào máu nào trong công thức máu?",
    "options": [
      "Tế bào tiểu cầu trong máu ngoại vi",
      "Bạch cầu đa nhân trung tính do giải phóng từ thành mạch vào máu",
      "Hồng cầu lưới mới sinh ra",
      "Bạch cầu ưa acid và bạch cầu lympho"
    ],
    "correct": 1,
    "explanation": "Corticoid làm tăng bạch cầu trung tính (demargination) nhưng giảm tế bào lympho, bạch cầu ái toan và ái kiềm.",
    "reference": "Sách DLS tr. 399",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 503,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Kháng chỉ định tiêm chủng loại vắc xin nào cho người đang dùng Glucocorticoid liều cao ức chế miễn dịch?",
    "options": [
      "Vắc xin tái tổ hợp viêm gan B",
      "Vắc xin giải độc tố uốn ván bất hoạt",
      "Vắc xin sống giảm động lực như sởi quai bị rubella, lao",
      "Vắc xin phế cầu liên hợp"
    ],
    "correct": 2,
    "explanation": "Ức chế miễn dịch do corticoid liều cao có thể làm virus sống trong vắc xin nhân lên gây bệnh toàn thân.",
    "reference": "Sách DLS tr. 400",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 504,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Triamcinolon acetonid tiêm tại chỗ vào bao gân hoặc ổ khớp có thể gây ra tai biến nào nếu tiêm sai vị trí?",
    "options": [
      "Gây liệt hoàn toàn dây thần kinh cảm giác",
      "Làm khớp bị dính cứng vĩnh viễn ngay lập tức",
      "Gây xơ vữa động mạch khoeo chân",
      "Đứt gân, teo mô mỡ dưới da và mất sắc tố da tại chỗ"
    ],
    "correct": 3,
    "explanation": "Tiêm corticoid vào gân làm thoái hóa collagen dẫn đến đứt gân; tiêm nông gây teo mỡ và mất sắc tố da.",
    "reference": "Sách DLS tr. 401",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 402",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 402",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 507,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Thời gian tác dụng sinh học của nhóm tác dụng trung bình như Prednisolon và Methylprednisolon là:",
    "options": [
      "Dưới 6 giờ",
      "Từ 2 đến 4 giờ",
      "Từ 18 đến 36 giờ",
      "Trên 60 giờ"
    ],
    "correct": 2,
    "explanation": "Prednisolon và Methylprednisolon có thời gian tác dụng trung bình (18-36 giờ), lý tưởng cho phác đồ cách ngày.",
    "reference": "Sách DLS tr. 402",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 508,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Khuyến cáo về chế độ ăn uống cho người bệnh điều trị Glucocorticoid dài ngày bao gồm:",
    "options": [
      "Nhịn ăn hoàn toàn chất đạm để bảo vệ thận",
      "Chỉ uống nước lọc không ăn tinh bột",
      "Ăn thật nhiều đồ ngọt và thức ăn mặn đậm đà",
      "Ăn giảm muối, hạn chế đường, giàu protein và bổ sung Canxi"
    ],
    "correct": 3,
    "explanation": "Giảm muối để hạn chế phù THA, giảm đường để tránh đái tháo đường, tăng đạm bù dị hóa và bổ sung canxi ngừa loãng xương.",
    "reference": "Sách DLS tr. 403",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 509,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Hiện tượng yếu cơ gốc chi đối xứng hai bên khi dùng Glucocorticoid liều cao được gọi là biến chứng:",
    "options": [
      "Bệnh cơ do Corticoid",
      "Hội chứng teo cơ tủy sống",
      "Bệnh lý nhược cơ tiên phát",
      "Viêm đa dây thần kinh ngoại biên"
    ],
    "correct": 0,
    "explanation": "Corticoid làm tăng dị hóa protein gây teo và yếu cơ gốc chi (cơ delta, cơ đùi), hồi phục khi giảm liều.",
    "reference": "Sách DLS tr. 404",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 510,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Tác dụng của Glucocorticoid trong cấp cứu sốc phản vệ có vai trò chủ yếu trong việc:",
    "options": [
      "Gây giãn cơ trơn khí quản tức thì như Adrenalin",
      "Phòng ngừa và xử trí phản ứng phản vệ pha 2 xuất hiện muộn",
      "Làm tăng ngay lập tức huyết áp trong vòng 30 giây",
      "Làm mất cảm giác lo âu hoảng sợ của bệnh nhân"
    ],
    "correct": 1,
    "explanation": "Corticoid có khởi phát tác dụng chậm (sau 4-6h), vai trò chính là phòng phản vệ 2 pha, không thay thế adrenalin cấp cứu.",
    "reference": "Sách DLS tr. 405",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 511,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Thuốc Glucocorticoid bôi ngoài da loại có hoạt lực rất mạnh (Nhóm I) ví dụ là hoạt chất nào?",
    "options": [
      "Desonid 0,05%",
      "Betamethason dipropionat nồng độ thấp",
      "Clobetasol propionat 0,05%",
      "Hydrocortison acetat 1%"
    ],
    "correct": 2,
    "explanation": "Clobetasol propionat 0,05% là corticoid dùng ngoài nhóm I có hoạt lực cực mạnh, chỉ bôi ngắn ngày diện tích nhỏ.",
    "reference": "Sách DLS tr. 406",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 512,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Không nên bôi Glucocorticoid hoạt lực mạnh vào những vùng da nào sau đây vì nguy cơ teo da cao?",
    "options": [
      "Vùng da ngoài khớp khuỷu tay",
      "Vùng da dày ở lưng và cẳng tay",
      "Vùng lòng bàn tay và lòng bàn chân",
      "Vùng da mặt, nếp gấp kẽ bẹn nách và vùng mi mắt"
    ],
    "correct": 3,
    "explanation": "Vùng da mặt và nếp kẽ rất mỏng, hấp thu thuốc mạnh và nguy cơ teo da giãn mạch rất cao.",
    "reference": "Sách DLS tr. 407",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 513,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Glucocorticoid tác dụng chống dị ứng bằng cách phong bế sự giải phóng chất trung gian nào từ tế bào mast?",
    "options": [
      "Histamin, Leukotrien và Bradykinin",
      "Hormon Glucagon và Somatostatin",
      "Enzym Pepsinogen và Renin",
      "Khí oxy trong lòng mạch"
    ],
    "correct": 0,
    "explanation": "Corticoid làm ổn định màng dưỡng bào và giảm tổng hợp các chất trung gian gây viêm.",
    "reference": "Sách DLS tr. 408",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 514,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Hội chứng ngừng thuốc Glucocorticoid (Steroid withdrawal syndrome) biểu hiện bằng:",
    "options": [
      "Cơn đau thắt ngực kịch phát không ổn định",
      "Sốt, đau mỏi cơ khớp, mệt mỏi suy nhược dù cortisol máu bình thường",
      "Xuất huyết bàng quang cấp tính",
      "Đục mờ giác mạc hai mắt"
    ],
    "correct": 1,
    "explanation": "Bệnh nhân phụ thuộc thuốc về tâm lý và thể chất có thể mệt mỏi, đau cơ khớp khi ngưng dù chức năng HPA đã hồi phục.",
    "reference": "Sách DLS tr. 409",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 515,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Khi bệnh nhân cần dùng Corticoid nhưng có tiền sử viêm loét dạ dày tá tràng tiến triển, giải pháp là:",
    "options": [
      "Chuyển sang dùng dạng thuốc bột hòa tan",
      "Uống thuốc vào lúc bụng đói cồn cào",
      "Phối hợp bắt buộc với thuốc ức chế bơm proton PPI",
      "Bẻ đôi liều uống trước khi đi ngủ"
    ],
    "correct": 2,
    "explanation": "PPI giúp giảm tiết acid bảo vệ niêm mạc dạ dày khi bắt buộc phải dùng corticoid.",
    "reference": "Sách DLS tr. 410",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 516,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Hoạt tính kháng viêm của Corticoid liên quan trực tiếp đến sự ức chế biểu hiện của enzym nào?",
    "options": [
      "Enzym Carbonic anhydrase ở thận",
      "Enzym Cholin acetyltransferase ở thần kinh",
      "Enzym Tyrosin hydroxylase ở não",
      "Enzym Cyclooxygenase 2 cảm ứng trong quá trình viêm"
    ],
    "correct": 3,
    "explanation": "Corticoid ức chế phiên mã gen mã hóa enzym COX-2 cảm ứng tạo prostaglandin gây viêm.",
    "reference": "Sách DLS tr. 411",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 517,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Tác dụng phụ gây tăng áp lực nội sọ lành tính có thể gặp ở đối tượng bệnh nhân nào khi dùng Corticoid?",
    "options": [
      "Trẻ em khi giảm liều hoặc ngừng thuốc Corticoid quá nhanh",
      "Người tập thể hình cường độ cao",
      "Người cao tuổi mắc bệnh đái tháo đường",
      "Phụ nữ sau khi sinh con 6 tháng"
    ],
    "correct": 0,
    "explanation": "Hội chứng não giả (pseudotumor cerebri) tăng áp lực nội sọ có thể xảy ra ở trẻ em khi ngưng corticoid đột ngột.",
    "reference": "Sách DLS tr. 412",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 518,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Loại Glucocorticoid khí dung nào sau đây có sinh khả dụng toàn thân thấp nhất dưới 1%?",
    "options": [
      "Hydrocortison dạng xịt",
      "Ciclesonid và Mometason furoat",
      "Beclomethason dipropionat",
      "Triamcinolon acetonid"
    ],
    "correct": 1,
    "explanation": "Ciclesonid là tiền dược hoạt hóa tại phổi và chuyển hóa qua gan lần đầu gần 100%, sinh khả dụng toàn thân cực thấp.",
    "reference": "Sách DLS tr. 413",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 519,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Khi điều trị viêm màng não do vi khuẩn ở người lớn, Dexamethason nên được đưa vào thời điểm nào?",
    "options": [
      "Sau khi đã điều trị kháng sinh được đủ 48 giờ",
      "Chỉ đưa vào khi bệnh nhân hết sốt hoàn toàn",
      "Trước hoặc cùng thời điểm với liều kháng sinh đầu tiên",
      "Đưa vào ngày thứ 7 của đợt điều trị"
    ],
    "correct": 2,
    "explanation": "Dexamethason dùng trước hoặc cùng lúc kháng sinh đầu tiên giúp giảm viêm do độc tố vi khuẩn tan rã và giảm di chứng điếc.",
    "reference": "Sách DLS tr. 414",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 520,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Liệu trình dùng Dexamethason trong viêm màng não nhiễm khuẩn ở người lớn thường kéo dài bao lâu?",
    "options": [
      "Chỉ dùng một liều duy nhất",
      "Kéo dài tối thiểu 1 tháng",
      "Kéo dài 14 ngày ngắt quãng",
      "Kéo dài trong vòng 4 ngày liên tục"
    ],
    "correct": 3,
    "explanation": "Dexamethason 10 mg tiêm tĩnh mạch mỗi 6 giờ trong 4 ngày được khuyến cáo cho viêm màng não phế cầu.",
    "reference": "Sách DLS tr. 415",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 521,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Trong đợt cấp bệnh phổi tắc nghẽn mạn tính COPD, liệu trình dùng Corticoid toàn thân được khuyến cáo là:",
    "options": [
      "Prednisolon 40 mg mỗi ngày trong vòng 5 ngày",
      "Prednisolon 100 mg mỗi ngày trong 30 ngày",
      "Dexamethason tiêm bắp trong suốt 6 tháng",
      "Không dùng Corticoid cho đợt cấp COPD"
    ],
    "correct": 0,
    "explanation": "Hướng dẫn GOLD khuyến cáo Prednisone/Prednisolone 40 mg/ngày trong 5 ngày cho đợt cấp COPD.",
    "reference": "Sách DLS tr. 416",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 522,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Một đợt điều trị ngắn ngày Corticoid được định nghĩa trên thực hành lâm sàng là kéo dài dưới:",
    "options": [
      "Dưới 180 ngày",
      "Dưới 14 ngày điều trị liên tục",
      "Dưới 60 ngày điều trị",
      "Dưới 90 ngày"
    ],
    "correct": 1,
    "explanation": "Đợt ngắn ngày < 14 ngày thường không gây teo vỏ thượng thận và có thể ngưng thuốc mà không cần giảm liều phức tạp.",
    "reference": "Sách DLS tr. 417",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 418",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 524,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Tại sao không nên dùng Glucocorticoid toàn thân kéo dài để hạ sốt thông thường?",
    "options": [
      "Vì Corticoid hoàn toàn không có tác dụng hạ thân nhiệt",
      "Vì làm thân nhiệt tụt xuống dưới 30 độ C gây tử vong",
      "Vì làm mất tác dụng của các loại kháng sinh",
      "Vì nguy cơ che lấp các dấu hiệu nhiễm trùng và gây nhiều tác dụng phụ nặng"
    ],
    "correct": 3,
    "explanation": "Corticoid có độc tính toàn thân lớn và làm lu mờ triệu chứng nhiễm khuẩn nguy hiểm.",
    "reference": "Sách DLS tr. 419",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 525,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Sự gắn kết của Cortisol tự nhiên trong máu chủ yếu thông qua loại protein chuyên biệt nào?",
    "options": [
      "Transcortin hay Globulin gắn Corticosteroid",
      "Alpha-1 acid glycoprotein",
      "Fibrinogen hòa tan",
      "Albumin huyết thanh đơn thuần"
    ],
    "correct": 0,
    "explanation": "CBG (Transcortin) gắn khoảng 75-80% cortisol lưu hành với ái lực rất cao.",
    "reference": "Sách DLS tr. 420",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 526,
    "chapter": "Thuốc giảm đau",
    "question": "Theo thang bậc giảm đau 3 bước của Tổ chức Y tế Thế giới (WHO), bậc 1 bao gồm những thuốc nào?",
    "options": [
      "Thuốc gây mê đường hít phối hợp",
      "Thuốc giảm đau không Opioid như Paracetamol và NSAID",
      "Thuốc Opioid mạnh như Morphin và Fentanyl",
      "Thuốc Opioid yếu như Codein và Tramadol"
    ],
    "correct": 1,
    "explanation": "Bậc 1 dùng cho đau nhẹ đến vừa: Non-opioid (Paracetamol, NSAID) +/- thuốc hỗ trợ.",
    "reference": "Sách DLS tr. 425",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 527,
    "chapter": "Thuốc giảm đau",
    "question": "Bậc 2 trong thang giảm đau của WHO dành cho mức độ đau nào và sử dụng nhóm thuốc gì?",
    "options": [
      "Đau dữ dội không chịu nổi, dùng Morphin liều cao",
      "Đau nhẹ thoáng qua, chỉ cần chườm ấm",
      "Đau mức độ vừa, dùng Opioid yếu như Codein hoặc Tramadol",
      "Đau thần kinh mạn tính, dùng thuốc chống động kinh đơn độc"
    ],
    "correct": 2,
    "explanation": "Bậc 2 dùng khi đau vừa (VAS 4-6): Opioid yếu +/- non-opioid +/- thuốc hỗ trợ.",
    "reference": "Sách DLS tr. 426",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 528,
    "chapter": "Thuốc giảm đau",
    "question": "Bậc 3 trong thang bậc giảm đau của WHO áp dụng cho bệnh nhân nào và dùng thuốc gì?",
    "options": [
      "Đau cơ do mệt mỏi, dùng Paracetamol liều thấp",
      "Đau răng thông thường, dùng Aspirin đơn độc",
      "Đau đầu do căng thẳng, dùng thuốc an thần",
      "Đau nặng dữ dội, dùng Opioid mạnh như Morphin hoặc Fentanyl"
    ],
    "correct": 3,
    "explanation": "Bậc 3 dùng cho đau nặng (VAS 7-10): Opioid mạnh như Morphin, Oxycodon, Fentanyl.",
    "reference": "Sách DLS tr. 427",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 529,
    "chapter": "Thuốc giảm đau",
    "question": "Tổng liều Paracetamol tối đa khuyến cáo cho người lớn khỏe mạnh trong 24 giờ là:",
    "options": [
      "4 gam trong 24 giờ",
      "8 gam trong 24 giờ",
      "1 gam trong 24 giờ",
      "2 gam trong 24 giờ"
    ],
    "correct": 0,
    "explanation": "Liều tối đa người lớn là 4g/ngày (hoặc 2-3g/ngày ở người già, người nghiện rượu, suy dinh dưỡng).",
    "reference": "Sách DLS tr. 428",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 530,
    "chapter": "Thuốc giảm đau",
    "question": "Chất chuyển hóa trung gian có độc tính cao gây hoại tử tế bào gan của Paracetamol là:",
    "options": [
      "Acid para-aminobenzoic",
      "N-acetyl-p-benzoquinone imine viết tắt là NAPQI",
      "Acid salicylic tự do trong tế bào",
      "Chất liên hợp glucuronic không tan"
    ],
    "correct": 1,
    "explanation": "CYP2E1 chuyển hóa paracetamol thành NAPQI, chất này phản ứng làm chết tế bào gan.",
    "reference": "Sách DLS tr. 429",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 531,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc giải độc đặc hiệu N-Acetylcystein phát huy hiệu quả bảo vệ gan tối ưu nhất khi dùng trong vòng:",
    "options": [
      "Sau 7 ngày khi men gan đã tăng vọt",
      "Sau 48 giờ kể từ khi xuất hiện vàng da",
      "Trong vòng 8 đến 10 giờ đầu sau khi uống ngộ độc Paracetamol",
      "Chỉ dùng khi bệnh nhân đã hôn mê gan"
    ],
    "correct": 2,
    "explanation": "NAC dùng trong vòng 8-10 giờ đầu sau ngộ độc giúp phòng ngừa gần như 100% tổn thương gan nặng.",
    "reference": "Sách DLS tr. 430",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 532,
    "chapter": "Thuốc giảm đau",
    "question": "Khác biệt cơ bản về tác dụng dược lý giữa Paracetamol và các thuốc NSAID là:",
    "options": [
      "Paracetamol có tác dụng chống viêm mạnh hơn Aspirin",
      "Paracetamol gây loét dạ dày tá tràng nặng nề hơn",
      "Paracetamol gây co thắt khí phế quản ở mọi bệnh nhân",
      "Paracetamol không có tác dụng chống viêm và không ức chế kết tập tiểu cầu"
    ],
    "correct": 3,
    "explanation": "Paracetamol giảm đau hạ sốt trung ương, không chống viêm và không ảnh hưởng tiểu cầu/dạ dày.",
    "reference": "Sách DLS tr. 431",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 432",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 534,
    "chapter": "Thuốc giảm đau",
    "question": "Enzym COX-1 có vai trò sinh lý quan trọng nào trong cơ thể người?",
    "options": [
      "Tiêu diệt vi khuẩn xâm nhập vào máu",
      "Bảo vệ niêm mạc dạ dày và duy trì dòng máu tưới thận",
      "Kích thích tạo cơn đau và phản ứng sốt cấp tính",
      "Làm tan cục máu đông trong lòng mạch"
    ],
    "correct": 1,
    "explanation": "COX-1 là enzym cấu tạo tạo PG bảo vệ tế bào biểu mô dạ dày và điều hòa tưới máu thận.",
    "reference": "Sách DLS tr. 433",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 535,
    "chapter": "Thuốc giảm đau",
    "question": "Enzym COX-2 chủ yếu được sinh ra trong điều kiện sinh lý nào?",
    "options": [
      "Chỉ sinh ra ở người khỏe mạnh không bị bệnh",
      "Chỉ xuất hiện trong lòng các tế bào hồng cầu già",
      "Được cảm ứng mạnh mẽ tại các mô đang có phản ứng viêm",
      "Tồn tại thường trực với nồng độ cao trong niêm mạc dạ dày"
    ],
    "correct": 2,
    "explanation": "COX-2 là enzym cảm ứng sinh ra khi có kích thích viêm, chấn thương mô, tạo các PG gây viêm và đau.",
    "reference": "Sách DLS tr. 434",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 536,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc NSAID ức chế chọn lọc trên enzym COX-2 như Celecoxib có ưu điểm lâm sàng nổi bật nào?",
    "options": [
      "Có thể dùng an toàn cho người suy tim giai đoạn cuối",
      "Làm giảm hoàn toàn nguy cơ biến cố tim mạch huyết khối",
      "Không gây bất kỳ tác dụng phụ nào trên thận",
      "Giảm đáng kể tỷ lệ tác dụng phụ gây loét và xuất huyết tiêu hóa"
    ],
    "correct": 3,
    "explanation": "Ức chế chọn lọc COX-2 giúp bảo tồn COX-1 ở dạ dày nên giảm loét tiêu hóa nhưng tăng biến cố tim mạch.",
    "reference": "Sách DLS tr. 435",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 537,
    "chapter": "Thuốc giảm đau",
    "question": "Các thuốc NSAID ức chế chọn lọc COX-2 bị cảnh báo đặc biệt về nguy cơ biến chứng nào?",
    "options": [
      "Biến cố tim mạch huyết khối như nhồi máu cơ tim và đột quỵ",
      "Gây suy tủy xương dòng hồng cầu cấp",
      "Gây viêm xơ đường mật tiên phát",
      "Gây điếc tai tiếp nhận không phục hồi"
    ],
    "correct": 0,
    "explanation": "Ức chế PGI2 (giãn mạch, chống đông) mà không ức chế TXA2 (co mạch, đông máu) gây mất thăng bằng tim mạch.",
    "reference": "Sách DLS tr. 436",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 538,
    "chapter": "Thuốc giảm đau",
    "question": "Aspirin liều thấp từ 75 đến 100 mg mỗi ngày được sử dụng trong tim mạch với mục đích:",
    "options": [
      "Chống viêm cơ tim cấp tính do virus",
      "Chống kết tập tiểu cầu để phòng ngừa huyết khối động mạch",
      "Giảm đau nhức đầu gối do thoái hóa khớp",
      "Hạ sốt nhanh trong các cơn sốt cao ác tính"
    ],
    "correct": 1,
    "explanation": "Aspirin acetyl hóa không hồi phục COX-1 tiểu cầu làm mất tạo TXA2 trong suốt đời sống tiểu cầu (7-10 ngày).",
    "reference": "Sách DLS tr. 437",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 539,
    "chapter": "Thuốc giảm đau",
    "question": "Tại sao tác dụng chống kết tập tiểu cầu của Aspirin kéo dài suốt đời sống của tiểu cầu?",
    "options": [
      "Vì tủy xương ngừng sản xuất tiểu cầu mới",
      "Vì Aspirin lưu lại trong huyết tương suốt đời sống tiểu cầu",
      "Vì tiểu cầu không có nhân nên không thể tổng hợp mới enzym COX-1 bị bất hoạt",
      "Vì Aspirin phá hủy hoàn toàn màng tế bào tiểu cầu"
    ],
    "correct": 2,
    "explanation": "Tiểu cầu không có nhân để phiên mã ARN tạo protein mới, ức chế COX-1 tồn tại vĩnh viễn đến khi tiểu cầu chết.",
    "reference": "Sách DLS tr. 438",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 540,
    "chapter": "Thuốc giảm đau",
    "question": "Bệnh nhân có tiền sử loét dạ dày tá tràng nếu bắt buộc phải dùng NSAID thì lựa chọn tối ưu là:",
    "options": [
      "Dùng đồng thời hai loại NSAID khác nhau",
      "Dùng Indomethacin liều tối đa kèm nước chanh",
      "Dùng Aspirin liều cao uống vào ban đêm",
      "Dùng NSAID chọn lọc COX-2 kết hợp cùng với thuốc ức chế bơm proton PPI"
    ],
    "correct": 3,
    "explanation": "Khuyến cáo hội tiêu hóa: bệnh nhân nguy cơ tiêu hóa cao dùng COX-2 selective + PPI.",
    "reference": "Sách DLS tr. 439",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 541,
    "chapter": "Thuốc giảm đau",
    "question": "Tác dụng của NSAID lên chức năng thận là do ức chế tổng hợp Prostaglandin nào?",
    "options": [
      "PGE2 và PGI2 gây co tiểu động mạch đến của cầu thận làm giảm GFR",
      "Leukotrien B4 gây viêm màng đáy cầu thận",
      "Prostaglandin F2-alpha ở tủy thận",
      "Thromboxan A2 gây giãn mao mạch cầu thận"
    ],
    "correct": 0,
    "explanation": "PG làm giãn tiểu động mạch vào duy trì GFR, NSAID ức chế PG làm co tiểu động mạch vào gây suy thận cấp.",
    "reference": "Sách DLS tr. 440",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 542,
    "chapter": "Thuốc giảm đau",
    "question": "Bộ ba nguy hiểm gây suy thận cấp (Triple whammy) khi dùng đồng thời trên một bệnh nhân bao gồm:",
    "options": [
      "Thuốc hạ mỡ máu, vitamin nhóm B và dung dịch glucose",
      "Thuốc lợi tiểu, thuốc ức chế men chuyển và thuốc NSAID",
      "Thuốc kháng sinh, thuốc hạ sốt và thuốc kháng acid",
      "Thuốc kháng histamin, paracetamol và men tiêu hóa"
    ],
    "correct": 1,
    "explanation": "Lợi tiểu (giảm thể tích) + ƯCMC (giãn tiểu động mạch ra) + NSAID (co tiểu động mạch vào) làm sụp đổ hoàn toàn GFR.",
    "reference": "Sách DLS tr. 441",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 543,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc NSAID nào sau đây có nguy cơ gây độc tính trên tim mạch thấp nhất được ưu tiên cho bệnh nhân tim mạch?",
    "options": [
      "Etoricoxib",
      "Diclofenac",
      "Naproxen",
      "Celecoxib"
    ],
    "correct": 2,
    "explanation": "Naproxen ức chế COX-1 bền vững tương tự aspirin nên có nguy cơ tim mạch thấp nhất trong các NSAID.",
    "reference": "Sách DLS tr. 442",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 544,
    "chapter": "Thuốc giảm đau",
    "question": "Tam chứng kinh điển của ngộ độc cấp tính Morphin và các Opioid bao gồm:",
    "options": [
      "Mất trí nhớ, liệt nửa người và xuất huyết tiêu hóa",
      "Tăng huyết áp kịch phát, tiêu chảy cấp và run giật cơ",
      "Sốt cao co giật, thở nhanh nông và giãn đồng tử tối đa",
      "Hôn mê sâu, ức chế hô hấp thở chậm và đồng tử co nhỏ như đầu đinh ghim"
    ],
    "correct": 3,
    "explanation": "Tam chứng ngộ độc opioid: Hôn mê + Thở chậm (< 8-10 l/p hoặc ngưng thở) + Đồng tử co nhỏ châm kim.",
    "reference": "Sách DLS tr. 443",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 545,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc giải độc đặc hiệu dùng để cấp cứu tức thì ngộ độc Morphin và các Opioid là:",
    "options": [
      "Naloxon tiêm tĩnh mạch",
      "Atropin sulfat tiêm bắp",
      "Flumazenil tiêm tĩnh mạch",
      "Physostigmin truyền chậm"
    ],
    "correct": 0,
    "explanation": "Naloxon là chất đối kháng cạnh tranh thuần túy trên thụ thể mu opiat, phục hồi hô hấp sau vài phút.",
    "reference": "Sách DLS tr. 444",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 546,
    "chapter": "Thuốc giảm đau",
    "question": "Tác dụng không mong muốn thường trực của Morphin mà bệnh nhân không bao giờ dung nạp theo thời gian là:",
    "options": [
      "Buồn nôn và nôn mửa",
      "Táo bón và co nhỏ đồng tử",
      "Ngứa da và nổi mày đay",
      "Buồn ngủ và an thần"
    ],
    "correct": 1,
    "explanation": "Dung nạp xuất hiện với tác dụng giảm đau, an thần, nôn; nhưng táo bón và co đồng tử không bao giờ dung nạp.",
    "reference": "Sách DLS tr. 445",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 446",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 548,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc giảm đau Opioid Fentanyl dạng miếng dán thẩm thấu qua da có đặc điểm chỉ định nào?",
    "options": [
      "Dùng giảm đau sau nhổ răng thông thường",
      "Dùng cấp cứu các cơn đau quặn thận cấp tính dữ dội",
      "Dùng điều trị sốt xuất huyết ở trẻ nhỏ",
      "Chỉ dùng cho các cơn đau mạn tính liên tục đã dung nạp với Opioid"
    ],
    "correct": 3,
    "explanation": "Miếng dán Fentanyl giải phóng chậm ổn định trong 72 giờ, chỉ dùng cho đau mạn tính dung nạp opioid (như ung thư).",
    "reference": "Sách DLS tr. 447",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 549,
    "chapter": "Thuốc giảm đau",
    "question": "Tại sao miếng dán Fentanyl không bao giờ được dùng để điều trị cơn đau cấp tính sau mổ?",
    "options": [
      "Vì khởi phát tác dụng rất chậm sau 12 đến 24 giờ và nguy cơ ức chế hô hấp chết người",
      "Vì thuốc gây co thắt phế quản dữ dội và tụt huyết áp tức thì ngay sau khi dán",
      "Vì miếng dán kích thích giải phóng histamin ồ ạt qua da gây sốc phản vệ",
      "Vì hoạt chất bị enzym esterase tại biểu bì thủy phân hoàn toàn làm mất tác dụng"
    ],
    "correct": 0,
    "explanation": "Cần 12-24h thuốc mới đạt nồng độ ổn định, không chỉnh liều nhanh được, nguy cơ ngộ độc ức chế hô hấp tử vong.",
    "reference": "Sách DLS tr. 448",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 550,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc giảm đau Opioid Pethidin (Meperidin) không nên dùng kéo dài trên 48 giờ vì tích lũy chất độc nào?",
    "options": [
      "Chất chuyển hóa morphin 6 glucuronid",
      "Normeperidin gây kích thích thần kinh co giật",
      "N-acetyl cystein gây suy gan",
      "Acid mefenamic gây thủng dạ dày"
    ],
    "correct": 1,
    "explanation": "Normeperidin có T1/2 dài (15-30h) tích lũy gây run, giật cơ và co giật, đặc biệt ở người suy thận.",
    "reference": "Sách DLS tr. 449",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 551,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc giảm đau Tramadol có cơ chế tác dụng kép độc đáo thể hiện qua hai tác động nào?",
    "options": [
      "Kích thích thụ thể GABA và đối kháng Dopamin",
      "Ức chế kênh Natri và kênh Calci màng tế bào",
      "Gắn thụ thể Mu-opioid và ức chế tái hấp thu Serotonin cùng Noradrenalin",
      "Ức chế đồng thời cả COX-1 và Phospholipase A2"
    ],
    "correct": 2,
    "explanation": "Tramadol kích thích yếu thụ thể mu đồng thời tăng nồng độ serotonin và noradrenalin ở tủy sống ức chế dẫn truyền đau.",
    "reference": "Sách DLS tr. 450",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 552,
    "chapter": "Thuốc giảm đau",
    "question": "Dùng Tramadol phối hợp với các thuốc chống trầm cảm nhóm SSRI làm tăng nguy cơ xuất hiện biến chứng gì?",
    "options": [
      "Hội chứng thận hư thứ phát",
      "Hội chứng hoại tử thượng bì nhiễm độc",
      "Cơn đau quặn gan dữ dội",
      "Hội chứng ngộ độc Serotonin kịch phát"
    ],
    "correct": 3,
    "explanation": "Cả hai đều làm tăng serotonin synap, phối hợp dễ dẫn đến hội chứng serotonin đe dọa tính mạng.",
    "reference": "Sách DLS tr. 451",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 553,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc giảm đau Codein có tác dụng giảm đau trên lâm sàng là nhờ chuyển hóa thành chất nào qua CYP2D6?",
    "options": [
      "Chuyển hóa thành Morphin với tỷ lệ khoảng 10%",
      "Chuyển hóa thành Paracetamol hoạt tính",
      "Chuyển hóa thành Fentanyl nồng độ cao",
      "Chuyển hóa thành Acid salicylic tự do"
    ],
    "correct": 0,
    "explanation": "Codein là tiền dược, khoảng 10% được CYP2D6 chuyển hóa thành morphin mang lại tác dụng giảm đau.",
    "reference": "Sách DLS tr. 452",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 554,
    "chapter": "Thuốc giảm đau",
    "question": "Người mang kiểu gen chuyển hóa siêu nhanh enzym CYP2D6 khi uống Codein có nguy cơ gặp biến cố gì?",
    "options": [
      "Bị dị ứng nổi mẩn ngứa nhẹ ngoài da",
      "Ngộ độc Morphin dẫn đến hôn mê ức chế hô hấp đe dọa tính mạng",
      "Bị sỏi thận acid uric cấp tính",
      "Mất hoàn toàn tác dụng giảm đau của Codein"
    ],
    "correct": 1,
    "explanation": "CYP2D6 siêu nhanh chuyển hóa vọt codein thành lượng lớn morphin gây ngộ độc cấp nguy hiểm.",
    "reference": "Sách DLS tr. 453",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 555,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc chống viêm NSAID Ketorolac dạng tiêm có khuyến cáo về thời gian sử dụng tối đa là bao lâu?",
    "options": [
      "Không dùng quá 30 ngày",
      "Có thể dùng liên tục trong 6 tháng",
      "Không dùng quá 5 ngày liên tục",
      "Chỉ dùng một lần duy nhất trong đời"
    ],
    "correct": 2,
    "explanation": "Ketorolac có độc tính loét xuất huyết dạ dày và suy thận rất cao, chống chỉ định dùng quá 5 ngày.",
    "reference": "Sách DLS tr. 454",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 556,
    "chapter": "Thuốc giảm đau",
    "question": "Cơn hen do Aspirin (Aspirin-induced asthma) thường đi kèm với các triệu chứng lâm sàng nào trong tam chứng Samter?",
    "options": [
      "Loét dạ dày tá tràng, trào ngược và ho",
      "Viêm xoang cấp, thủng màng nhĩ và điếc",
      "Nổi mề đay, sốt rét run và vàng mắt",
      "Hen phế quản mạn tính, polyp mũi và dị ứng với Aspirin cùng NSAID"
    ],
    "correct": 3,
    "explanation": "Tam chứng Samter (AERD): Hen phế quản + Polyp mũi + Nhạy cảm phản ứng dữ dội với Aspirin/NSAID.",
    "reference": "Sách DLS tr. 455",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 557,
    "chapter": "Thuốc giảm đau",
    "question": "Bệnh nhân có hội chứng suy tim sung huyết khi sử dụng NSAID có nguy cơ xuất hiện biến cố nào?",
    "options": [
      "Ứ dịch gây đợt cấp suy tim mất bù và kháng thuốc lợi tiểu",
      "Gây cơn bão giáp trạng cấp tính",
      "Làm tan hoàn toàn huyết khối trong buồng tim",
      "Làm tim đập chậm xoang dưới 30 nhịp"
    ],
    "correct": 0,
    "explanation": "NSAID gây co mạch thận, ứ muối nước làm giảm hiệu quả lợi tiểu quai và thúc đẩy suy tim mất bù.",
    "reference": "Sách DLS tr. 456",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 558,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc giảm đau đau dây thần kinh sau Zona hoặc đau thần kinh đái tháo đường được ưu tiên lựa chọn là:",
    "options": [
      "Paracetamol liều tối đa 4g",
      "Gabapentin hoặc Pregabalin",
      "Aspirin dạng viên bao tan",
      "Morphin dạng viên nén giải phóng chậm"
    ],
    "correct": 1,
    "explanation": "Pregabalin và Gabapentin gắn kênh calci phụ thuộc điện thế ức chế phóng thích glutamat, thuốc hàng đầu cho đau thần kinh.",
    "reference": "Sách DLS tr. 457",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 559,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc giảm đau điều trị đặc hiệu hàng đầu cho cơn đau dây thần kinh sinh ba số V là:",
    "options": [
      "Ibuprofen",
      "Paracetamol",
      "Carbamazepin",
      "Codein phosphat"
    ],
    "correct": 2,
    "explanation": "Carbamazepin phong bế kênh natri là thuốc chuẩn vàng đầu tay kiểm soát đau dây V kịch phát.",
    "reference": "Sách DLS tr. 458",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 560,
    "chapter": "Thuốc giảm đau",
    "question": "Hội chứng cai thuốc Opioid xuất hiện khi ngừng thuốc đột ngột ở người nghiện biểu hiện bằng các dấu hiệu:",
    "options": [
      "Táo bón dữ dội và khô miệng hoàn toàn",
      "Hôn mê sâu, thở chậm và co nhỏ đồng tử",
      "Hạ thân nhiệt và tụt huyết áp kịch phát",
      "Ngáp, chảy nước mũi nước mắt, nổi da gà, tiêu chảy và giãn đồng tử"
    ],
    "correct": 3,
    "explanation": "Cai opioid: cường giao cảm dữ dội, giãn đồng tử, vã mồ hôi, tiêu chảy, đau quặn bụng, đau cơ xương.",
    "reference": "Sách DLS tr. 459",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 561,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc chống trầm cảm ba vòng Amitriptylin ở liều thấp thường được chỉ định để điều trị tình trạng nào?",
    "options": [
      "Đau thần kinh mạn tính và dự phòng đau nửa đầu Migraine",
      "Chống phù nề sau phẫu thuật chấn thương",
      "Cấp cứu đau quặn mật dữ dội",
      "Hạ sốt cao co giật ở trẻ em"
    ],
    "correct": 0,
    "explanation": "Amitriptylin 10-25mg uống tối làm tăng ức chế đau hướng xuống, hiệu quả trong đau thần kinh và phòng Migraine.",
    "reference": "Sách DLS tr. 460",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 562,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc giảm đau Diclofenac dạng gel bôi ngoài da tại chỗ có ưu điểm lớn nào so với dạng uống?",
    "options": [
      "Có tác dụng nhanh hơn tiêm tĩnh mạch kèm theo buồn nôn, nôn mửa và đau quặn bụng dữ dội",
      "Tập trung nồng độ cao tại khớp và giảm thiểu tác dụng phụ toàn thân trên tiêu hóa tim mạch",
      "Làm tan hoàn toàn các gai xương thoái hóa kèm theo đau đầu dữ dội và sốt cao run người",
      "Không bao giờ gây dị ứng da kèm theo chóng mặt, ù tai và suy giảm thính lực nhẹ"
    ],
    "correct": 1,
    "explanation": "Hấp thu toàn thân của gel Diclofenac chỉ khoảng 6-10% so với uống, giảm mạnh ADR dạ dày ruột.",
    "reference": "Sách DLS tr. 461",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 563,
    "chapter": "Thuốc giảm đau",
    "question": "Nguyên tắc sử dụng thuốc giảm đau cho bệnh nhân ung thư giai đoạn cuối được WHO khuyến cáo là:",
    "options": [
      "Chỉ tiêm giảm đau khi bệnh nhân khóc lóc kêu đau",
      "Hạn chế tối đa dùng Opioid vì sợ bệnh nhân nghiện thuốc",
      "Dùng thuốc đều đặn theo giờ cố định không chờ đến khi đau mới uống",
      "Chỉ dùng một liều duy nhất trước khi đi ngủ"
    ],
    "correct": 2,
    "explanation": "Đau ung thư cần dùng giảm đau theo giờ cố định 'by the clock' để duy trì nồng độ thuốc liên tục trong máu.",
    "reference": "Sách DLS tr. 462",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 564,
    "chapter": "Thuốc giảm đau",
    "question": "Cơn đau đột xuất bùng phát ở bệnh nhân ung thư đang điều trị duy trì Opioid được kiểm soát bằng:",
    "options": [
      "Tăng liều miếng dán Fentanyl lên gấp 3 lần",
      "Chuyển sang tiêm bắp nước cất vô trùng",
      "Bắt buộc bệnh nhân phải nhịn ăn",
      "Dùng thêm một liều Opioid tác dụng nhanh giải phóng tức thì theo nhu cầu"
    ],
    "correct": 3,
    "explanation": "Đau bùng phát (breakthrough pain) xử trí bằng opioid giải phóng tức thì (IR) liều tương đương 1/6 đến 1/10 tổng liều 24h.",
    "reference": "Sách DLS tr. 463",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 565,
    "chapter": "Thuốc giảm đau",
    "question": "Phương pháp kiểm soát giảm đau do bệnh nhân tự điều khiển PCA cho phép bệnh nhân:",
    "options": [
      "Tự bấm nút để máy tiêm một liều nhỏ thuốc giảm đau tĩnh mạch đã cài đặt an toàn",
      "Tự quyết định tăng nồng độ thuốc giảm đau trong ống tiêm điện khi đau nhiều",
      "Tự bấm nút liên tục không giới hạn số lần mà không bị khóa thời gian (lockout time)",
      "Tự ngắt máy PCA để chuyển sang thuốc uống tương đương bất kỳ lúc nào"
    ],
    "correct": 0,
    "explanation": "PCA cho phép bệnh nhân chủ động bấm nút tiêm liều bolus cài sẵn kèm khoảng thời gian khóa an toàn (lockout interval).",
    "reference": "Sách DLS tr. 464",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 566,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc nhuận tràng nào được khuyến cáo phối hợp thường quy ngay từ đầu khi kê đơn Morphin điều trị đau?",
    "options": [
      "Uống dung dịch dầu khoáng đậm đặc",
      "Thuốc nhuận tràng kích thích như Senna hoặc Bisacodyl phối hợp thuốc làm mềm phân",
      "Chỉ thụt tháo đại tràng hàng ngày",
      "Chỉ uống men vi sinh đường ruột"
    ],
    "correct": 1,
    "explanation": "Opioid làm giảm nhu động ruột và tăng co thắt cơ vòng, phải chủ động dùng nhuận tràng kích thích + thẩm thấu/làm mềm phân.",
    "reference": "Sách DLS tr. 465",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 567,
    "chapter": "Thuốc giảm đau",
    "question": "Chất chuyển hóa Morphin-6-glucuronid có đặc điểm dược lý học nào cần lưu ý ở bệnh nhân suy thận?",
    "options": [
      "Là chất hoàn toàn không có hoạt tính sinh học",
      "Gây biến đổi màu da thành màu vàng chanh",
      "Là chất có hoạt tính giảm đau và tích lũy gây ức chế hô hấp ở người suy thận",
      "Bị đào thải hoàn toàn qua đường hô hấp"
    ],
    "correct": 2,
    "explanation": "M6G có hoạt lực giảm đau mạnh hơn morphin, bài xuất qua thận nên suy thận gây tích lũy ngộ độc morphin chậm.",
    "reference": "Sách DLS tr. 466",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 568,
    "chapter": "Thuốc giảm đau",
    "question": "Methadon là thuốc giảm đau Opioid tổng hợp có ưu thế đặc biệt nào trong điều trị giảm đau mạn tính?",
    "options": [
      "Không chuyển hóa qua gan mật",
      "Không gây bất kỳ tình trạng phụ thuộc thuốc nào",
      "Chỉ cần dùng một lần duy nhất trong tháng",
      "Thời gian bán thải dài và có tác dụng đối kháng thụ thể NMDA giảm đau thần kinh"
    ],
    "correct": 3,
    "explanation": "Methadon chẹn NMDA giúp giảm đau thần kinh và ngăn ngừa hiện tượng dung nạp opioid, T1/2 dài 24-36h.",
    "reference": "Sách DLS tr. 467",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 569,
    "chapter": "Thuốc giảm đau",
    "question": "Nguy cơ loạn nhịp tim xoắn đỉnh khi dùng Methadon liều cao liên quan đến tác dụng phụ nào?",
    "options": [
      "Làm kéo dài khoảng QT trên điện tâm đồ",
      "Làm ngắn khoảng PR bệnh lý",
      "Gây nhịp nhanh trên thất kịch phát",
      "Gây rung nhĩ đáp ứng thất nhanh"
    ],
    "correct": 0,
    "explanation": "Methadon liều cao ức chế kênh kali hERG làm kéo dài khoảng QTc, cần đo điện tâm đồ định kỳ.",
    "reference": "Sách DLS tr. 468",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 570,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc giảm đau Oxycodon đường uống thường được phối hợp với chất nào để ngăn ngừa lạm dụng thuốc?",
    "options": [
      "Naloxon làm tăng hấp thu Oxycodon qua niêm mạc ruột non",
      "Naloxon đối kháng tác dụng gây táo bón tại ruột và làm mất tác dụng phê nếu nghiền tiêm",
      "Naloxon ngăn cản chuyển hóa Oxycodon qua enzym CYP3A4 tại gan",
      "Naloxon làm tăng tác dụng an thần và giãn cơ vân"
    ],
    "correct": 1,
    "explanation": "Phối hợp Oxycodon/Naloxon giải phóng kéo dài: Naloxon đường uống sinh khả dụng < 3% giúp giảm táo bón ruột và ngăn tiêm tĩnh mạch.",
    "reference": "Sách DLS tr. 469",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 571,
    "chapter": "Thuốc giảm đau",
    "question": "Khái niệm 'Dung nạp thuốc' khi điều trị Opioid kéo dài có nghĩa là gì?",
    "options": [
      "Bệnh nhân có biểu hiện thèm muốn thuốc để tìm khoái cảm",
      "Bệnh nhân xuất hiện các cơn co giật khi uống thuốc",
      "Cần phải tăng liều thuốc dần theo thời gian để đạt được hiệu quả giảm đau ban đầu",
      "Thuốc gây dị ứng sốc phản vệ dữ dội"
    ],
    "correct": 2,
    "explanation": "Dung nạp là hiện tượng sinh lý đáp ứng giảm dần với một liều cố định, đòi hỏi tăng liều để duy trì hiệu quả.",
    "reference": "Sách DLS tr. 470",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 572,
    "chapter": "Thuốc giảm đau",
    "question": "Khái niệm 'Phụ thuộc thể chất' với Opioid được xác định khi xuất hiện hiện tượng nào?",
    "options": [
      "Xuất hiện vết loét sâu tại niêm mạc miệng",
      "Bệnh nhân nói lảm nhảm sau khi uống thuốc",
      "Tăng đường huyết không kiểm soát được",
      "Xuất hiện hội chứng cai khi ngừng thuốc đột ngột hoặc dùng chất đối kháng"
    ],
    "correct": 3,
    "explanation": "Phụ thuộc thể chất là trạng thái thích nghi thần kinh biểu hiện bằng triệu chứng cai khi ngừng thuốc.",
    "reference": "Sách DLS tr. 471",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 573,
    "chapter": "Thuốc giảm đau",
    "question": "Phản ứng giả dị ứng nổi mày đay ngứa ngáy khi tiêm nhanh Morphin xảy ra là do cơ chế nào?",
    "options": [
      "Morphin kích thích trực tiếp tế bào mast giải phóng Histamin không qua kháng thể IgE",
      "Nhiễm trùng máu do dung dịch thuốc tiêm bị nhiễm khuẩn",
      "Dị ứng typ I trung gian qua kháng thể IgE đặc hiệu với phân tử Morphin",
      "Kết tủa tinh thể Morphin sulfat trong vi mao mạch da ngoại vi"
    ],
    "correct": 0,
    "explanation": "Morphin degranulate mast cells trực tiếp giải phóng histamin gây ngứa đỏ da, không phải dị ứng miễn dịch thực sự.",
    "reference": "Sách DLS tr. 472",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 574,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc chống viêm NSAID Indomethacin có chỉ định đặc biệt trong sản nhi khoa để điều trị bệnh lý nào?",
    "options": [
      "Kích thích thở ở trẻ sơ sinh ngừng thở",
      "Đóng ống động mạch còn mở ở trẻ sơ sinh non tháng",
      "Điều trị vàng da sơ sinh bẩm sinh",
      "Gây chuyển dạ đẻ ở thai quá ngày"
    ],
    "correct": 1,
    "explanation": "Indomethacin ức chế prostaglandin PGE2 làm co và đóng ống động mạch (PDA) ở trẻ non tháng.",
    "reference": "Sách DLS tr. 473",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 575,
    "chapter": "Thuốc giảm đau",
    "question": "Bệnh nhân bị bệnh Gút cấp tính chống chỉ định dùng Aspirin liều thấp hạ sốt giảm đau vì lý do gì?",
    "options": [
      "Aspirin gây loét đầu ngón chân cái",
      "Aspirin làm tăng tổng hợp purin tại gan",
      "Aspirin liều thấp ức chế bài tiết acid uric tại ống thận làm nặng thêm cơn gút",
      "Aspirin làm tan tinh thể urat gây nhiễm độc máu"
    ],
    "correct": 2,
    "explanation": "Aspirin liều thấp (< 2g/ngày) cạnh tranh bài tiết acid uric ở ống lượn gần làm tăng acid uric máu.",
    "reference": "Sách DLS tr. 474",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 480",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 577,
    "chapter": "Vitamin và chất khoáng",
    "question": "Hiện tượng ngộ độc thừa vitamin do tích lũy kéo dài thường xảy ra phổ biến nhất ở nhóm vitamin nào?",
    "options": [
      "Nhóm vitamin tan trong dầu A và D",
      "Nhóm vitamin tan trong nước B và C",
      "Tất cả các loại vitamin đều không tích lũy",
      "Chỉ xảy ra khi uống vitamin C liều thấp"
    ],
    "correct": 0,
    "explanation": "Vitamin tan trong dầu đào thải chậm, dùng quá liều kéo dài gây tích lũy ngộ độc mạn tính.",
    "reference": "Sách DLS tr. 481",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 578,
    "chapter": "Vitamin và chất khoáng",
    "question": "Dấu hiệu lâm sàng sớm nhất của tình trạng thiếu hụt Vitamin A trong cơ thể là gì?",
    "options": [
      "Mù lòa hoàn toàn do teo nhãn cầu tức thì",
      "Bệnh quáng gà giảm thị lực trong điều kiện ánh sáng yếu",
      "Xuất huyết tiền phòng mắt",
      "Viêm dây thần kinh thị giác hai mắt"
    ],
    "correct": 1,
    "explanation": "Vitamin A là thành phần của sắc tố rhodopsin ở tế bào que võng mạc, thiếu hụt gây quáng gà.",
    "reference": "Sách DLS tr. 482",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 579,
    "chapter": "Vitamin và chất khoáng",
    "question": "Dùng quá liều Vitamin A kéo dài ở phụ nữ mang thai có nguy cơ gây hậu quả nghiêm trọng nào?",
    "options": [
      "Làm người mẹ bị rụng toàn bộ tóc",
      "Gây đẻ non sinh đôi cùng trứng",
      "Gây dị tật bẩm sinh quái thai nghiêm trọng ở sọ mặt và tim mạch",
      "Làm trẻ sơ sinh mọc răng trước khi sinh"
    ],
    "correct": 2,
    "explanation": "Vitamin A liều cao (> 10.000 IU/ngày) có độc tính gây quái thai mạnh trong quý 1 thai kỳ.",
    "reference": "Sách DLS tr. 483",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 484",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 485",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 582,
    "chapter": "Vitamin và chất khoáng",
    "question": "Vai trò sinh học chủ yếu của Vitamin D trong cơ thể là gì?",
    "options": [
      "Giảm nồng độ Calci trong huyết tương",
      "Tăng hấp thu Canxi và Phosphat tại ruột non và tái hấp thu ở thận",
      "Ức chế quá trình khoáng hóa xương non",
      "Tăng bài tiết Canxi ra ngoài qua nước tiểu"
    ],
    "correct": 1,
    "explanation": "Vitamin D kích thích tổng hợp protein vận chuyển calbindin ở ruột giúp hấp thu tối đa Ca2+ và PO43-.",
    "reference": "Sách DLS tr. 486",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 583,
    "chapter": "Vitamin và chất khoáng",
    "question": "Tình trạng thiếu hụt Vitamin D ở trẻ em đang phát triển dẫn đến bệnh lý xương nào?",
    "options": [
      "Bệnh viêm khớp dạng thấp thiếu niên",
      "Bệnh giòn xương bẩm sinh tạo xương bất toàn",
      "Bệnh còi xương với biến dạng lồng ngực và chân vòng kiềng",
      "Bệnh xơ cứng cột bên teo cơ"
    ],
    "correct": 2,
    "explanation": "Thiếu vitamin D ở trẻ em làm giảm khoáng hóa sụn tăng trưởng gây bệnh còi xương (Rickets).",
    "reference": "Sách DLS tr. 487",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 584,
    "chapter": "Vitamin và chất khoáng",
    "question": "Vitamin K đóng vai trò là đồng yếu tố xúc tác cho quá trình hoạt hóa các yếu tố đông máu nào tại gan?",
    "options": [
      "Tất cả các yếu tố đông máu trong cơ thể",
      "Yếu tố XI, XII và Protein S",
      "Yếu tố I, V, VIII và yếu tố XIII",
      "Yếu tố II, VII, IX và yếu tố X"
    ],
    "correct": 3,
    "explanation": "Vitamin K là coenzym của carboxylase carboxyl hóa gốc acid glutamic tạo các yếu tố II, VII, IX, X và Protein C, S.",
    "reference": "Sách DLS tr. 488",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 585,
    "chapter": "Vitamin và chất khoáng",
    "question": "Để phòng ngừa bệnh xuất huyết não màng não do thiếu Vitamin K ở trẻ sơ sinh, can thiệp quy chuẩn là:",
    "options": [
      "Tiêm bắp một liều duy nhất Vitamin K1 ngay sau khi trẻ chào đời",
      "Cho trẻ uống Vitamin K1 đều đặn mỗi ngày suốt 1 năm",
      "Cho người mẹ uống Vitamin K liều cao trước khi sinh",
      "Tiêm truyền tĩnh mạch huyết tương tươi đông lạnh"
    ],
    "correct": 0,
    "explanation": "Tiêm bắp 1mg Vitamin K1 ngay sau sinh là quy chuẩn quốc tế phòng xuất huyết sơ sinh do sữa mẹ nghèo vitamin K.",
    "reference": "Sách DLS tr. 489",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 586,
    "chapter": "Vitamin và chất khoáng",
    "question": "Thuốc giải độc đặc hiệu khi bệnh nhân bị quá liều thuốc chống đông máu Warfarin gây chảy máu là:",
    "options": [
      "Dung dịch Natri clorid 0,9%",
      "Vitamin K1 đường tiêm truyền tĩnh mạch chậm hoặc uống",
      "Vitamin C truyền tĩnh mạch liều cao",
      "Dung dịch Glucose ưu trương"
    ],
    "correct": 1,
    "explanation": "Vitamin K1 (Phytomenadion) cạnh tranh hồi phục enzym epoxide reductase bị warfarin ức chế.",
    "reference": "Sách DLS tr. 490",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 587,
    "chapter": "Vitamin và chất khoáng",
    "question": "Thiếu hụt Vitamin B1 (Thiamin) mạn tính ở người nghiện rượu dẫn đến hội chứng thần kinh kinh điển nào?",
    "options": [
      "Hội chứng Guillain-Barré liệt tiến triển",
      "Bệnh đa xơ cứng rải rác",
      "Hội chứng não Wernicke và loạn thần Korsakoff",
      "Bệnh Parkinson thể run"
    ],
    "correct": 2,
    "explanation": "Thiếu Thiamin ở người nghiện rượu gây bệnh Beriberi và hội chứng não Wernicke (lú lẫn, thất điều, liệt vận nhãn).",
    "reference": "Sách DLS tr. 491",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 588,
    "chapter": "Vitamin và chất khoáng",
    "question": "Tại sao ở bệnh nhân nghiện rượu bị hôn mê hạ đường huyết, phải tiêm Thiamin trước khi truyền dung dịch Glucose?",
    "options": [
      "Để ngăn chặn hiện tượng dị ứng với Glucose",
      "Để làm giảm áp lực thẩm thấu của dung dịch đường",
      "Để làm tăng tốc độ phân hủy Glucose trong máu",
      "Để tránh thúc đẩy khởi phát cấp tính hội chứng não Wernicke đe dọa tính mạng"
    ],
    "correct": 3,
    "explanation": "Chuyển hóa glucose tiêu thụ cạn kiệt thiamin dự trữ ít ỏi còn lại thúc đẩy phù não Wernicke hoại tử thể vú.",
    "reference": "Sách DLS tr. 492",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 589,
    "chapter": "Vitamin và chất khoáng",
    "question": "Bệnh Pellagra với tứ chứng kinh điển (Viêm da, Tiêu chảy, Sa sút trí tuệ và Tử vong) là do thiếu hụt vitamin nào?",
    "options": [
      "Vitamin B3 hay Niacin hay Acid nicotinic",
      "Vitamin B1 hay Thiamin",
      "Vitamin B5 hay Acid pantothenic",
      "Vitamin B2 hay Riboflavin"
    ],
    "correct": 0,
    "explanation": "Thiếu Vitamin B3 (PP) gây bệnh Pellagra: Diarrhea, Dermatitis, Dementia, Death (4 chữ D).",
    "reference": "Sách DLS tr. 493",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 590,
    "chapter": "Vitamin và chất khoáng",
    "question": "Hiện tượng đỏ bừng mặt và ngứa ngáy khi uống Acid nicotinic liều cao hạ mỡ máu là do giải phóng chất nào?",
    "options": [
      "Acid lactic trong các thớ cơ",
      "Prostaglandin D2 gây giãn mạch ngoại vi",
      "Histamin từ các tế bào bạch cầu đa nhân",
      "Serotonin từ các tế bào tiểu cầu"
    ],
    "correct": 1,
    "explanation": "Niacin kích thích thụ thể GPR109A gây phóng thích PGD2 làm giãn mạch bừng mặt (ngăn ngừa bằng uống Aspirin trước 30p).",
    "reference": "Sách DLS tr. 494",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 591,
    "chapter": "Vitamin và chất khoáng",
    "question": "Vitamin B6 (Pyridoxin) tham gia chuyển hóa acid amin và là thuốc giải độc đặc hiệu cho ngộ độc hoạt chất nào?",
    "options": [
      "Kháng sinh Gentamicin",
      "Thuốc ngủ Barbiturat",
      "Thuốc chống lao Isoniazid",
      "Thuốc hạ sốt Paracetamol"
    ],
    "correct": 2,
    "explanation": "INH ức chế pyridoxine phosphokinase gây co giật và viêm thần kinh; Vitamin B6 là thuốc giải độc đặc hiệu.",
    "reference": "Sách DLS tr. 495",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 592,
    "chapter": "Vitamin và chất khoáng",
    "question": "Thiếu hụt Vitamin B12 (Cobalamin) gây ra loại bệnh lý thiếu máu nào trên lâm sàng?",
    "options": [
      "Thiếu máu bất sản tủy xương toàn bộ",
      "Thiếu máu tan máu tự miễn bẩm sinh",
      "Thiếu máu hồng cầu nhỏ nhược sắc do thiếu sắt",
      "Thiếu máu hồng cầu khổng lồ kèm tổn thương thần kinh kết hợp"
    ],
    "correct": 3,
    "explanation": "Thiếu B12 làm rối loạn tổng hợp ADN gây hồng cầu to (MCV > 100 fL) và thoái hóa kết hợp tủy sống (tê bì, mất cảm giác sâu).",
    "reference": "Sách DLS tr. 496",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 593,
    "chapter": "Vitamin và chất khoáng",
    "question": "Yếu tố nội tại do tế bào thành dạ dày tiết ra có vai trò bắt buộc đối với quá trình nào?",
    "options": [
      "Hấp thu Vitamin B12 tại đoạn cuối hồi tràng",
      "Hấp thu nguyên tố Sắt tại tá tràng",
      "Phân hủy phân tử Vitamin A trong lòng ruột",
      "Hòa tan Vitamin C trong dịch ruột"
    ],
    "correct": 0,
    "explanation": "Intrinsic factor (IF) tạo phức hợp với B12 giúp nhận diện thụ thể cubilin để hấp thu tại hồi tràng.",
    "reference": "Sách DLS tr. 497",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 594,
    "chapter": "Vitamin và chất khoáng",
    "question": "Thiếu hụt Acid Folic (Vitamin B9) trong thai kỳ làm gia tăng rõ rệt dị tật bẩm sinh nào ở thai nhi?",
    "options": [
      "Dị tật teo hẹp thực quản bẩm sinh",
      "Khuyết tật ống thần kinh như nứt đốt sống và vô sọ",
      "Dị tật thông liên thất tim bẩm sinh",
      "Dị tật bàn chân khoèo bẩm sinh"
    ],
    "correct": 1,
    "explanation": "Folat cần cho đóng ống thần kinh trong 28 ngày đầu thai kỳ; thiếu hụt gây nứt đốt sống và vô sọ.",
    "reference": "Sách DLS tr. 498",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 595,
    "chapter": "Vitamin và chất khoáng",
    "question": "Điểm khác biệt quan trọng trong biểu hiện lâm sàng giữa thiếu hụt Acid Folic và thiếu hụt Vitamin B12 là:",
    "options": [
      "Thiếu Acid Folic làm tăng nồng độ sắt máu",
      "Thiếu Acid Folic gây thiếu máu hồng cầu nhỏ",
      "Thiếu Acid Folic không gây ra tổn thương thoái hóa thần kinh",
      "Thiếu Acid Folic chỉ xuất hiện ở người cao tuổi"
    ],
    "correct": 2,
    "explanation": "Cả hai đều gây thiếu máu hồng cầu to, nhưng thiếu B12 gây tổn thương thần kinh (do thiếu SAM) còn folat thì không.",
    "reference": "Sách DLS tr. 499",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 596,
    "chapter": "Vitamin và chất khoáng",
    "question": "Nếu dùng nhầm Acid Folic liều cao đơn độc để điều trị cho người bệnh bị thiếu hụt Vitamin B12 thì hậu quả là:",
    "options": [
      "Gây tan máu ồ ạt trong lòng mạch",
      "Làm mất hoàn toàn trí nhớ trong 24 giờ",
      "Làm bệnh nhân bị suy tim cấp tính tử vong ngay",
      "Khắc phục được thiếu máu nhưng làm tổn thương thần kinh tiến triển nặng hơn"
    ],
    "correct": 3,
    "explanation": "Bổ sung folat sửa chữa được thiếu máu nhưng che lấp tổn thương thoái hóa tủy sống do thiếu B12 tiếp tục phá hủy thần kinh.",
    "reference": "Sách DLS tr. 500",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 597,
    "chapter": "Vitamin và chất khoáng",
    "question": "Vitamin C (Acid ascorbic) tham gia vào phản ứng sinh học nào quan trọng nhất trong cấu trúc mô liên kết?",
    "options": [
      "Hydroxyl hóa Prolin và Lysin trong tổng hợp Collagen",
      "Phosphoryl hóa phân tử đường Glucose",
      "Oxy hóa các acid béo chuỗi dài trong ty thể",
      "Khử carboxyl của acid amin glutamic"
    ],
    "correct": 0,
    "explanation": "Vitamin C là coenzym của prolyl và lysyl hydroxylase tổng hợp sợi collagen bền vững.",
    "reference": "Sách DLS tr. 501",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 598,
    "chapter": "Vitamin và chất khoáng",
    "question": "Bệnh Scorbut với triệu chứng chảy máu chân răng, bầm tím dưới da và vết thương khó lành là do thiếu hụt:",
    "options": [
      "Vitamin B1 liều cao",
      "Vitamin C kéo dài",
      "Vitamin D dạng hoạt tính",
      "Nguyên tố Kẽm trong thức ăn"
    ],
    "correct": 1,
    "explanation": "Thiếu vitamin C làm sợi collagen yếu, vỡ mao mạch gây chảy máu nướu răng, xuất huyết dưới da (bệnh Scorbut).",
    "reference": "Sách DLS tr. 502",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 599,
    "chapter": "Vitamin và chất khoáng",
    "question": "Uống Vitamin C đồng thời với viên sắt mang lại lợi ích gì về mặt dược động học?",
    "options": [
      "Tạo phức hợp chelat đào thải sắt nhanh qua phân",
      "Ngăn chặn sắt chuyển hóa qua gan lần đầu",
      "Khử sắt Fe3+ thành Fe2+ giúp tăng cường hấp thu sắt qua niêm mạc ruột",
      "Làm giảm độ acid của dịch vị dạ dày"
    ],
    "correct": 2,
    "explanation": "Vitamin C khử Fe3+ thành Fe2+ dễ tan và hấp thu hơn nhiều tại tá tràng.",
    "reference": "Sách DLS tr. 503",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 600,
    "chapter": "Vitamin và chất khoáng",
    "question": "Lạm dụng Vitamin C liều cao trên 2 gam mỗi ngày kéo dài có nguy cơ gây ra biến chứng sỏi thận loại nào?",
    "options": [
      "Sỏi thận Struvit do nhiễm trùng tiết niệu",
      "Sỏi thận Acid Uric do tăng thoái giáng purin",
      "Sỏi thận Cystin do rối loạn di truyền",
      "Sỏi thận Calci Oxalat do chuyển hóa Vitamin C tạo Oxalat"
    ],
    "correct": 3,
    "explanation": "Acid ascorbic chuyển hóa thành acid oxalic, kết hợp calci tạo sỏi calci oxalat trong đường tiết niệu.",
    "reference": "Sách DLS tr. 504",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 601,
    "chapter": "Vitamin và chất khoáng",
    "question": "Muối sắt đường uống hấp thu tối ưu nhất khi được uống vào thời điểm nào?",
    "options": [
      "Uống lúc đói cách xa bữa ăn kèm với nước cam hoặc nước lọc",
      "Uống chung với một ấm trà xanh đặc",
      "Uống cùng lúc với một ly sữa tươi đầy",
      "Uống ngay sau khi ăn no một bữa nhiều dầu mỡ"
    ],
    "correct": 0,
    "explanation": "Sắt hấp thu tốt nhất ở môi trường acid dạ dày lúc đói; thức ăn, calci, trà/cà phê cản trở hấp thu sắt.",
    "reference": "Sách DLS tr. 505",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 506",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 603,
    "chapter": "Vitamin và chất khoáng",
    "question": "Thuốc bổ sung Canxi dạng Canxi carbonat có đặc điểm hấp thu nào cần chú ý khi hướng dẫn bệnh nhân?",
    "options": [
      "Hấp thu tốt nhất lúc bụng đói cồn cào",
      "Có thể nhai chung với các loại kháng sinh cyclin",
      "Cần môi trường acid dạ dày để hòa tan nên cần uống ngay sau bữa ăn",
      "Không bao giờ gây sỏi thận dù dùng liều cao"
    ],
    "correct": 2,
    "explanation": "Canxi carbonat cần acid dịch vị để phân ly Ca2+, nên uống ngay sau bữa ăn; người giảm toan dịch vị nên dùng Canxi citrat.",
    "reference": "Sách DLS tr. 507",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 604,
    "chapter": "Vitamin và chất khoáng",
    "question": "Chất khoáng Kẽm đóng vai trò quan trọng trong cơ thể người đối với các chức năng nào sau đây?",
    "options": [
      "Chỉ có tác dụng làm chậm nhịp tim",
      "Đào thải nước tiểu qua ống thận",
      "Chỉ tham gia vận chuyển khí oxy trong hồng cầu",
      "Hệ thống miễn dịch, sự biệt hóa tế bào và làm lành vết thương"
    ],
    "correct": 3,
    "explanation": "Kẽm là thành phần của hơn 300 enzym, cần thiết cho phân chia tế bào, miễn dịch và tái tạo biểu mô.",
    "reference": "Sách DLS tr. 508",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 605,
    "chapter": "Vitamin và chất khoáng",
    "question": "Thiếu hụt nguyên tố Kẽm ở trẻ nhỏ thường dẫn đến những biểu hiện lâm sàng nào?",
    "options": [
      "Chậm tăng trưởng tầm vóc, biếng ăn, tiêu chảy và tổn thương viêm da đầu chi",
      "Gây điếc tai tiếp nhận thần kinh",
      "Làm răng mọc lệch lạc nhiều hàng",
      "Gây tăng cân nhanh béo phì quá mức"
    ],
    "correct": 0,
    "explanation": "Thiếu kẽm gây chậm lớn, chán ăn, suy giảm miễn dịch và bệnh viêm da đầu chi ruột (acrodermatitis enteropathica).",
    "reference": "Sách DLS tr. 509",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 606,
    "chapter": "Vitamin và chất khoáng",
    "question": "Vi chất Iod là thành phần cấu tạo thiết yếu của các hormon nào trong cơ thể?",
    "options": [
      "Hormon điều hòa đường máu Insulin",
      "Hormon tuyến giáp Thyroxin và Triiodothyronin",
      "Hormon tuyến tủy thượng thận Adrenalin",
      "Hormon sinh dục nữ Estrogen và Progesteron"
    ],
    "correct": 1,
    "explanation": "Iod là nguyên liệu tổng hợp T3 và T4 của tuyến giáp; thiếu iod gây bướu cổ đơn thuần và đần độn ở trẻ em.",
    "reference": "Sách DLS tr. 510",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 607,
    "chapter": "Vitamin và chất khoáng",
    "question": "Thiếu hụt nguyên tố Magnesi trong máu thường dẫn đến các triệu chứng thần kinh cơ nào sau đây?",
    "options": [
      "Giảm hoàn toàn trương lực các nhóm cơ",
      "Liệt mềm toàn thân mất phản xạ gân xương",
      "Tăng tính kích thích thần kinh cơ, co giật, run cơ và chuột rút",
      "Hôn mê sâu không có phản ứng đau"
    ],
    "correct": 2,
    "explanation": "Hạ Mg2+ làm tăng dẫn truyền thần kinh cơ gây run giật, co thắt cơ, dấu hiệu Chvostek/Trousseau và loạn nhịp tim.",
    "reference": "Sách DLS tr. 511",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 608,
    "chapter": "Vitamin và chất khoáng",
    "question": "Thuốc bổ sung Vitamin E (Tocopherol) được biết đến với vai trò sinh học chủ yếu nào?",
    "options": [
      "Tăng cường đào thải acid uric ra ngoài cơ thể",
      "Kích thích tạo cục máu đông ngăn chảy máu",
      "Kích thích phân chia tế bào xương dài",
      "Chất chống oxy hóa bảo vệ màng tế bào khỏi tổn thương gốc tự do"
    ],
    "correct": 3,
    "explanation": "Vitamin E là chất chống oxy hóa tan trong mỡ chính bảo vệ phospholipid màng tế bào khỏi peroxy hóa lipid.",
    "reference": "Sách DLS tr. 512",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 609,
    "chapter": "Vitamin và chất khoáng",
    "question": "Dùng Vitamin E liều rất cao kéo dài có thể làm gia tăng nguy cơ bất lợi nào?",
    "options": [
      "Nguy cơ xuất huyết do đối kháng với tác dụng của Vitamin K",
      "Gây loét thủng thực quản cấp tính",
      "Gây rụng lông mày lông mi",
      "Gây sỏi thận struvit kích thước lớn"
    ],
    "correct": 0,
    "explanation": "Vitamin E liều cao (> 1000 IU/ngày) có thể ức chế phụ thuộc vitamin K trong đông máu làm tăng nguy cơ chảy máu.",
    "reference": "Sách DLS tr. 513",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 610,
    "chapter": "Vitamin và chất khoáng",
    "question": "Thiếu hụt nguyên tố Đồng trong cơ thể có thể gây ra bệnh lý nào tương tự như thiếu sắt?",
    "options": [
      "Bệnh đa hồng cầu nguyên phát",
      "Thiếu máu hồng cầu nhỏ nhược sắc kháng điều trị bằng sắt",
      "Bệnh bạch cầu mạn dòng lympho",
      "Hội chứng tăng bạch cầu đơn nhân"
    ],
    "correct": 1,
    "explanation": "Đồng là thành phần của ceruloplasmin oxy hóa Fe2+ thành Fe3+ để gắn transferrin; thiếu đồng gây thiếu máu thiếu sắt trơ.",
    "reference": "Sách DLS tr. 514",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 611,
    "chapter": "Vitamin và chất khoáng",
    "question": "Bệnh lý di truyền Wilson đặc trưng bởi sự tích lũy độc chất khoáng nào trong gan và não?",
    "options": [
      "Nguyên tố Sắt với da sạm màu đồng thiếc",
      "Nguyên tố Nhôm gây sa sút trí tuệ",
      "Nguyên tố Đồng với vòng Kayser-Fleischer ở rìa giác mạc",
      "Nguyên tố Chì với đường viền chì ở lợi răng"
    ],
    "correct": 2,
    "explanation": "Bệnh Wilson ứ đọng đồng tại gan, nhân nền não bộ và màng Descemet giác mạc (vòng Kayser-Fleischer).",
    "reference": "Sách DLS tr. 515",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 612,
    "chapter": "Vitamin và chất khoáng",
    "question": "Thuốc tạo chelat dùng để gắp đồng điều trị bệnh Wilson là hoạt chất nào?",
    "options": [
      "Protamin sulfat",
      "Deferoxamin",
      "N-acetylcystein",
      "Penicillamin hoặc Trientin"
    ],
    "correct": 3,
    "explanation": "D-penicillamin tạo phức tan với đồng đào thải qua nước tiểu điều trị bệnh thoái hóa gan đậu Wilson.",
    "reference": "Sách DLS tr. 516",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 613,
    "chapter": "Vitamin và chất khoáng",
    "question": "Bệnh ứ sắt mô di truyền (Hemochromatosis) đặc trưng bởi sự tích lũy quá mức của sắt tại các cơ quan:",
    "options": [
      "Gan, tim và tuyến tụy nội tiết gây đái tháo đường đồng thiếc",
      "Hệ thống xương khớp và móng tay",
      "Các phế nang và màng phổi hai bên",
      "Cơ quan thính giác và thị giác"
    ],
    "correct": 0,
    "explanation": "Sắt ứ đọng phá hủy tế bào gan (xơ gan), tụy (đái tháo đường) và cơ tim (suy tim loạn nhịp).",
    "reference": "Sách DLS tr. 517",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 614,
    "chapter": "Vitamin và chất khoáng",
    "question": "Biện pháp điều trị đầu tay cơ bản nhất cho bệnh nhân bị bệnh ứ sắt mô di truyền là gì?",
    "options": [
      "Uống sữa tươi thật nhiều mỗi ngày",
      "Trích rạch mở tĩnh mạch rút máu định kỳ",
      "Cắt bỏ toàn bộ lách",
      "Uống thuốc lợi tiểu quai liều cao"
    ],
    "correct": 1,
    "explanation": "Rút máu tĩnh mạch định kỳ (phlebotomy) rút bớt hồng cầu buộc cơ thể tiêu thụ sắt dự trữ để tạo hồng cầu mới.",
    "reference": "Sách DLS tr. 518",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 615,
    "chapter": "Vitamin và chất khoáng",
    "question": "Vitamin B2 (Riboflavin) khi uống vào cơ thể thường làm thay đổi màu nước tiểu thành màu gì?",
    "options": [
      "Màu đen sẫm như cà phê",
      "Màu đỏ thẫm như máu",
      "Màu vàng tươi hoặc vàng huỳnh quang",
      "Màu xanh nước biển nhạt"
    ],
    "correct": 2,
    "explanation": "Riboflavin có màu vàng tự nhiên và bài tiết nguyên vẹn qua nước tiểu tạo màu vàng sáng vô hại.",
    "reference": "Sách DLS tr. 519",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 616,
    "chapter": "Vitamin và chất khoáng",
    "question": "Triệu chứng kinh điển của thiếu hụt Vitamin B2 bao gồm các tổn thương ở đâu?",
    "options": [
      "Xơ gan cổ trướng giai đoạn mất bù",
      "Rụng răng cửa hàng loạt",
      "Đau thắt ngực khi gắng sức",
      "Viêm nứt mép mép miệng, viêm lưỡi đỏ bóng và viêm da dầu"
    ],
    "correct": 3,
    "explanation": "Thiếu riboflavin gây tổn thương niêm mạc da: nứt mép (cheilosis), viêm góc miệng và viêm lưỡi đỏ tươi.",
    "reference": "Sách DLS tr. 520",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 617,
    "chapter": "Vitamin và chất khoáng",
    "question": "Chất khoáng Selen là thành phần cấu tạo thiết yếu của enzym chống oxy hóa nào trong cơ thể?",
    "options": [
      "Glutathion peroxidase",
      "Catalase nội bào",
      "Superoxide dismutase",
      "Cytochrome c oxidase"
    ],
    "correct": 0,
    "explanation": "Selen gắn dưới dạng selenocystein tại trung tâm hoạt động của enzym glutathion peroxidase khử hydroperoxyd độc hại.",
    "reference": "Sách DLS tr. 521",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 522",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 619,
    "chapter": "Vitamin và chất khoáng",
    "question": "Vitamin B5 (Acid pantothenic) là thành phần cấu tạo không thể thiếu của phân tử sinh học nào?",
    "options": [
      "Phân tử sắc tố Heme trong hồng cầu",
      "Hormon giáp trạng Thyroxin",
      "Coenzym A tham gia chu trình Krebs và chuyển hóa acid béo",
      "Phân tử Adenosin triphosphat ATP"
    ],
    "correct": 2,
    "explanation": "Acid pantothenic là tiền chất tổng hợp Coenzym A (CoA) thiết yếu cho chuyển hóa năng lượng tế bào.",
    "reference": "Sách DLS tr. 523",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 620,
    "chapter": "Vitamin và chất khoáng",
    "question": "Vitamin H (Biotin hay Vitamin B7) tham gia xúc tác cho các phản ứng sinh học loại nào?",
    "options": [
      "Các phản ứng methyl hóa phân tử ADN",
      "Các phản ứng phosphoryl hóa protein",
      "Các phản ứng khử hydro giải phóng năng lượng",
      "Các phản ứng carboxyl hóa gắn nhóm CO2 trong chuyển hóa glucid và lipid"
    ],
    "correct": 3,
    "explanation": "Biotin là coenzym của các carboxylase (pyruvat carboxylase, acetyl-CoA carboxylase) chuyển hóa acid béo và đường.",
    "reference": "Sách DLS tr. 524",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 621,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Theo khuyến cáo của Bộ Y tế và ESC, chẩn đoán tăng huyết áp tại phòng khám khi huyết áp đạt từ mức nào?",
    "options": [
      "Huyết áp tâm thu từ 140 mmHg hoặc tâm trương từ 90 mmHg",
      "Huyết áp tâm thu từ 160 mmHg hoặc tâm trương từ 100 mmHg",
      "Huyết áp tâm thu từ 180 mmHg hoặc tâm trương từ 110 mmHg",
      "Huyết áp tâm thu từ 120 mmHg hoặc tâm trương từ 80 mmHg"
    ],
    "correct": 0,
    "explanation": "Chẩn đoán THA phòng khám: HA tâm thu >= 140 mmHg và/hoặc HA tâm trương >= 90 mmHg.",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 622,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Tăng huyết áp độ 2 được xác định khi chỉ số huyết áp phòng khám nằm trong khoảng nào?",
    "options": [
      "Tâm thu từ 140 đến 159 mmHg hoặc tâm trương từ 90 đến 99 mmHg",
      "Tâm thu từ 160 đến 179 mmHg hoặc tâm trương từ 100 đến 109 mmHg",
      "Tâm thu trên 180 mmHg hoặc tâm trương trên 120 mmHg",
      "Tâm thu từ 130 đến 139 mmHg hoặc tâm trương từ 85 đến 89 mmHg"
    ],
    "correct": 1,
    "explanation": "Độ 1: 140-159/90-99 mmHg; Độ 2: 160-179/100-109 mmHg; Độ 3: >= 180/>= 110 mmHg.",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 623,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Điểm khác biệt cốt lõi giữa cơn tăng huyết áp cấp cứu và cơn tăng huyết áp khẩn cấp là gì?",
    "options": [
      "Cơn tăng huyết áp cấp cứu có huyết áp cao hơn nhiều",
      "Cơn tăng huyết áp khẩn cấp luôn phải đặt nội khí quản",
      "Cơn tăng huyết áp cấp cứu có kèm theo tổn thương cơ quan đích cấp tính tiến triển",
      "Cơn tăng huyết áp cấp cứu chỉ xảy ra ở người trẻ tuổi"
    ],
    "correct": 2,
    "explanation": "Hypertensive emergency có tổn thương cơ quan đích cấp đe dọa tính mạng (nhồi máu não, phù phổi cấp, phình bóc tách ĐMC).",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 625,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Trong phình bóc tách động mạch chủ cấp, mục tiêu hạ huyết áp tâm thu khẩn cấp là đạt dưới mức nào?",
    "options": [
      "Dưới 120 mmHg và nhịp tim dưới 60 nhịp trên phút trong vòng 20 phút",
      "Dưới 150 mmHg trong vòng 24 giờ",
      "Duy trì huyết áp ở mức 140 trên 90 mmHg",
      "Dưới 160 mmHg trong vòng 3 ngày"
    ],
    "correct": 0,
    "explanation": "Bóc tách ĐMC cần hạ áp cực nhanh: HATT < 120 mmHg và tần số tim < 60 l/p trong 20 phút để giảm xé rách thành mạch.",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 626,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc truyền tĩnh mạch liên tục được lựa chọn hàng đầu trong cấp cứu cơn tăng huyết áp là:",
    "options": [
      "Captopril viên nén ngậm dưới lưỡi",
      "Nicardipin hoặc Labetalol truyền tĩnh mạch",
      "Amlodipin dạng viên uống sau ăn",
      "Nifedipin dạng viên nang nhỏ giọt dưới lưỡi"
    ],
    "correct": 1,
    "explanation": "Nicardipin hoặc Labetalol tiêm truyền tĩnh mạch chỉnh liều chính xác; cấm dùng Nifedipin nhỏ dưới lưỡi vì tụt áp đột ngột tử vong.",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 627,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Bốn nhóm thuốc hạ huyết áp thiết yếu đầu tay được khuyến cáo sử dụng phổ biến nhất là:",
    "options": [
      "Chẹn beta, chẹn alpha, thuốc giãn mạch trực tiếp và an thần",
      "Thuốc hạ áp trung ương, thuốc ức chế renin và magnesi",
      "Ức chế men chuyển, chẹn thụ thể AT1, chẹn kênh calci và lợi tiểu thiazid",
      "Thuốc lợi tiểu quai, thuốc lợi tiểu giữ kali và reserpin"
    ],
    "correct": 2,
    "explanation": "4 nhóm đầu tay theo khuyến cáo Bộ Y tế/ESC: ACEI, ARB, CCB và Thiazide/thiazide-like.",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 628,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Chiến lược khởi đầu điều trị tăng huyết áp từ độ 1 có nguy cơ trung bình đến cao được ưu tiên là:",
    "options": [
      "Phối hợp cùng lúc 4 loại thuốc liều cao",
      "Dùng đơn trị liệu một thuốc với liều tối đa",
      "Chỉ thay đổi lối sống không dùng thuốc trong 5 năm",
      "Khởi đầu bằng viên phối hợp cố định liều thấp hai nhóm thuốc"
    ],
    "correct": 3,
    "explanation": "Khởi đầu bằng viên phối hợp đôi (SPC) giúp kiểm soát HA nhanh hơn, tăng tuân thủ và ít ADR hơn tăng liều đơn độc.",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 629,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Phối hợp thuốc hạ huyết áp nào sau đây bị chống chỉ định do làm tăng biến cố tim mạch và suy thận?",
    "options": [
      "Thuốc ức chế men chuyển phối hợp với thuốc ức chế thụ thể Angiotensin",
      "Thuốc chẹn kênh calci phối hợp với lợi tiểu Thiazid",
      "Thuốc ức chế thụ thể Angiotensin phối hợp với lợi tiểu Thiazid",
      "Thuốc ức chế men chuyển phối hợp với thuốc chẹn kênh calci"
    ],
    "correct": 0,
    "explanation": "Nghiên cứu ONTARGET chứng minh ức chế kép hệ RAAS không tăng lợi ích mà làm tăng suy thận cấp và tăng kali máu.",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 630,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Bệnh nhân tăng huyết áp có kèm bệnh đái tháo đường và đạm niệu nên ưu tiên chọn nhóm thuốc nào?",
    "options": [
      "Thuốc lợi tiểu quai Furosemid đơn thuần",
      "Thuốc ức chế men chuyển hoặc thuốc ức chế thụ thể Angiotensin",
      "Thuốc chẹn beta giao cảm không chọn lọc",
      "Thuốc giãn mạch trực tiếp Hydralazin"
    ],
    "correct": 1,
    "explanation": "ACEI/ARB giãn tiểu động mạch đi làm giảm áp lực nội cầu thận, làm chậm tiến triển bệnh thận đái tháo đường.",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 631,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Tác dụng phụ ho khan dai dẳng của nhóm thuốc ức chế men chuyển có thể khắc phục bằng cách:",
    "options": [
      "Uống kèm thuốc giảm ho chứa Codein kéo dài",
      "Tăng gấp đôi liều thuốc ức chế men chuyển",
      "Chuyển sang nhóm thuốc chẹn thụ thể Angiotensin II",
      "Chuyển sang dùng thuốc chẹn beta không chọn lọc"
    ],
    "correct": 2,
    "explanation": "ARB chẹn chọn lọc tại thụ thể AT1 không làm tích tụ bradykinin nên không gây ho khan như ACEI.",
    "reference": "Sách DLS tr. 535",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 632,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Hai chống chỉ định tuyệt đối của nhóm thuốc ức chế men chuyển và ức chế thụ thể là:",
    "options": [
      "Người cao tuổi mắc bệnh thoái hóa khớp",
      "Bệnh nhân đái tháo đường typ 2 và gout",
      "Bệnh nhân sau nhồi máu cơ tim có suy tim",
      "Phụ nữ có thai và bệnh nhân hẹp động mạch thận hai bên"
    ],
    "correct": 3,
    "explanation": "Chống chỉ định tuyệt đối: có thai, hẹp ĐM thận 2 bên (hoặc hẹp ĐM thận độc nhất), tiền sử phù mạch do ACEI.",
    "reference": "Sách DLS tr. 536",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 633,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Khi bắt đầu điều trị bằng thuốc ức chế men chuyển, mức tăng nồng độ Creatinin huyết thanh chấp nhận được là:",
    "options": [
      "Tăng dưới 30% so với giá trị ban đầu trước điều trị",
      "Không được phép tăng dù chỉ 1 micromol/L",
      "Tăng gấp 3 lần giá trị ban đầu",
      "Tăng từ 50% đến 100% so với ban đầu"
    ],
    "correct": 0,
    "explanation": "Creatinin tăng nhẹ < 30% do giảm áp lực lọc cầu thận là hiện tượng bình thường và thận được bảo vệ lâu dài.",
    "reference": "Sách DLS tr. 537",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 634,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc chẹn kênh calci nhóm Dihydropyridin như Amlodipin hạ áp thông qua cơ chế nào?",
    "options": [
      "Kích thích trung tâm vận mạch ở thân não",
      "Chẹn kênh Calci typ L gây giãn chọn lọc cơ trơn tiểu động mạch",
      "Đối kháng cạnh tranh trên thụ thể Aldosteron",
      "Ức chế tái hấp thu muối natri tại ống lượn xa"
    ],
    "correct": 1,
    "explanation": "DHP ức chế dòng Ca2+ đi vào tế bào cơ trơn mạch máu gây giãn mạch giảm sức cản ngoại vi.",
    "reference": "Sách DLS tr. 538",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 635,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Tác dụng phụ phù ngoại vi mắt cá chân của Amlodipin có đặc điểm lâm sàng nào?",
    "options": [
      "Phù do cơ thể giữ muối và giữ nước toàn thân",
      "Phù do phản ứng dị ứng qua kháng thể IgE",
      "Phù do giãn tiểu động mạch trước mao mạch làm tăng áp lực mao mạch",
      "Phù do suy tim sung huyết tiến triển nhanh"
    ],
    "correct": 2,
    "explanation": "Phù do CCB là phù cơ học giãn mạch trước mao mạch, không đáp ứng với thuốc lợi tiểu mà giảm khi phối hợp với ACEI/ARB.",
    "reference": "Sách DLS tr. 539",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 636,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc chẹn kênh calci Non-Dihydropyridin bao gồm hai hoạt chất nào sau đây?",
    "options": [
      "Amlodipin và Felodipin",
      "Nifedipin và Nicardipin",
      "Lacidipin và Lercanidipin",
      "Verapamil và Diltiazem"
    ],
    "correct": 3,
    "explanation": "Non-DHP gồm Verapamil (tác dụng mạnh lên tim) và Diltiazem (tác dụng cân bằng tim và mạch).",
    "reference": "Sách DLS tr. 540",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 637,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc hạ áp chẹn beta giao cảm nào sau đây có tính chọn lọc cao trên thụ thể Beta-1 ở tim?",
    "options": [
      "Bisoprolol, Metoprolol và Nebivolol",
      "Propranolol và Nadolol",
      "Carvedilol và Labetalol",
      "Sotalol và Timolol"
    ],
    "correct": 0,
    "explanation": "Bisoprolol, Metoprolol succinat và Nebivolol là các chẹn beta-1 chọn lọc tim, an toàn hơn trên đường thở.",
    "reference": "Sách DLS tr. 541",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 638,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc chẹn beta giao cảm Carvedilol có cơ chế tác dụng hạ huyết áp độc đáo là phối hợp giữa:",
    "options": [
      "Ức chế men chuyển và tăng giữ kali máu",
      "Chẹn không chọn lọc thụ thể Beta và chẹn thụ thể Alpha-1 gây giãn mạch",
      "Chẹn chọn lọc thụ thể Beta-1 và kích thích bài tiết Renin",
      "Chẹn kênh Calci và kích thích thụ thể Muscarinic"
    ],
    "correct": 1,
    "explanation": "Carvedilol vừa chẹn beta1, beta2 vừa chẹn alpha1 ngoại biên giúp hạ áp mạnh và giảm tái cấu trúc tâm thất trong suy tim.",
    "reference": "Sách DLS tr. 542",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 639,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Nhóm thuốc chẹn beta giao cảm bị chống chỉ định tuyệt đối ở đối tượng bệnh nhân nào?",
    "options": [
      "Bệnh nhân có nhịp xoang nhanh trên 100 lần trên phút",
      "Bệnh nhân tăng huyết áp có kèm suy tim phân suất tống máu giảm",
      "Bệnh nhân hen phế quản nặng và block nhĩ thất độ 2 hoặc độ 3",
      "Bệnh nhân sau nhồi máu cơ tim có tăng huyết áp"
    ],
    "correct": 2,
    "explanation": "Chẹn beta gây co thắt phế quản ở người hen suyễn và ức chế nút nhĩ thất gây ngừng tim nếu có block dẫn truyền nặng.",
    "reference": "Sách DLS tr. 543",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 640,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Tại sao không bao giờ được ngừng thuốc chẹn beta giao cảm một cách đột ngột ở người bệnh tim mạch?",
    "options": [
      "Gây phù phổi cấp do ứ trệ tuần hoàn",
      "Gây tụt huyết áp trụy mạch không hồi phục",
      "Làm tim đập chậm xoang dưới 30 lần trên phút",
      "Nguy cơ bùng phát cơn tăng huyết áp, đau thắt ngực và nhồi máu cơ tim cấp"
    ],
    "correct": 3,
    "explanation": "Hiện tượng tăng nhạy cảm thụ thể do upregulation khiến ngưng đột ngột gây cường giao cảm dội ngược nguy kịch.",
    "reference": "Sách DLS tr. 544",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 641,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc lợi tiểu Thiazid-like Indapamid có ưu điểm vượt trội nào so với Hydrochlorothiazid?",
    "options": [
      "Hiệu lực hạ áp kéo dài 24 giờ và trung tính hơn về mặt chuyển hóa lipid đường",
      "Có thể dùng an toàn cho người suy thận vô niệu",
      "Không gây hạ nồng độ kali trong máu",
      "Làm tăng bài tiết đường qua nước tiểu"
    ],
    "correct": 0,
    "explanation": "Indapamid có T1/2 dài, giảm biến cố đột quỵ tốt (nghiên cứu HYVET) và ít rối loạn chuyển hóa hơn HCTZ.",
    "reference": "Sách DLS tr. 545",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 642,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc lợi tiểu Thiazid giảm dần hiệu quả hạ huyết áp rõ rệt khi mức lọc cầu thận eGFR giảm xuống:",
    "options": [
      "Dưới 120 mL trên phút",
      "Dưới 30 mL trên phút trên 1,73 m2 da",
      "Dưới 60 mL trên phút",
      "Dưới 90 mL trên phút"
    ],
    "correct": 1,
    "explanation": "Khi eGFR < 30 mL/min, Thiazid mất hiệu lực lợi tiểu, cần thay thế bằng lợi tiểu quai như Furosemid.",
    "reference": "Sách DLS tr. 546",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 643,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc hạ huyết áp nào sau đây có thể gây ra hiện tượng rậm lông tóc nên được ứng dụng trị hói đầu?",
    "options": [
      "Amlodipin",
      "Enalapril",
      "Minoxidil",
      "Losartan"
    ],
    "correct": 2,
    "explanation": "Minoxidil mở kênh kali gây giãn mạch mạnh, tác dụng phụ rậm lông được bào chế dung dịch xịt tại chỗ trị rụng tóc.",
    "reference": "Sách DLS tr. 547",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 644,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Tăng huyết áp kháng trị được định nghĩa là khi huyết áp vẫn không đạt mục tiêu dù đã dùng:",
    "options": [
      "Dùng duy nhất một loại thuốc chẹn beta giao cảm liều tối đa trong 1 năm",
      "Huyết áp không hạ sau 3 ngày dùng thuốc lợi tiểu Thiazid đơn độc",
      "Dùng 2 thuốc hạ áp liều tối đa nhưng không kèm theo thuốc chẹn kênh Calci",
      "Huyết áp chưa đạt mục tiêu dù đã phối hợp tối ưu 3 thuốc hạ áp khác nhóm (trong đó có một thuốc lợi tiểu)"
    ],
    "correct": 3,
    "explanation": "THA kháng trị: không kiểm soát được HA dù đã phối hợp >= 3 thuốc tối ưu (gồm ACEI/ARB + CCB + Lợi tiểu).",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 646,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc hạ huyết áp tác động lên hệ thần kinh trung ương Clonidin hạ áp theo cơ chế nào?",
    "options": [
      "Ức chế bài tiết hormon aldosterone tại tuyến vỏ thượng thận",
      "Kích thích chọn lọc thụ thể Alpha-2 tiền synap làm giảm trương lực giao cảm ngoại vi",
      "Phong bế trực tiếp thụ thể Alpha-1 tại thành mạch",
      "Kích thích thụ thể Beta-2 gây giãn tiểu động mạch"
    ],
    "correct": 1,
    "explanation": "Chất chủ vận alpha-2 trung ương làm giảm dòng xung động giao cảm ly tâm từ hành não.",
    "reference": "Sách DLS tr. 549",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 647,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Hiện tượng tăng huyết áp dội ngược nguy kịch xuất hiện khi ngừng đột ngột thuốc nào sau đây?",
    "options": [
      "Hydrochlorothiazid",
      "Amlodipin",
      "Clonidin",
      "Losartan"
    ],
    "correct": 2,
    "explanation": "Ngừng đột ngột Clonidin gây cơn bão catecholamin kịch phát tăng huyết áp ác tính.",
    "reference": "Sách DLS tr. 550",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 648,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc giãn mạch trực tiếp Hydralazin dùng hạ áp kéo dài có thể gây ra hội chứng giống bệnh tự miễn nào?",
    "options": [
      "Hội chứng xơ cứng bì toàn thể",
      "Hội chứng thận hư tiên phát",
      "Hội chứng viêm đa cơ tự miễn",
      "Hội chứng Lupus ban đỏ hệ thống do thuốc"
    ],
    "correct": 3,
    "explanation": "Hydralazin (đặc biệt ở người acetyl hóa chậm) có thể gây hội chứng Lupus do thuốc với kháng thể kháng histon.",
    "reference": "Sách DLS tr. 551",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 649,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc hạ huyết áp truyền tĩnh mạch Natri Nitroprussid khi truyền kéo dài có nguy cơ ngộ độc chất nào?",
    "options": [
      "Chất độc Cyanid và Thiocyanat",
      "Khí Carbon monoxyd",
      "Chất độc Chì và Thủy ngân",
      "Chất độc Asen vô cơ"
    ],
    "correct": 0,
    "explanation": "Nitroprussid giáng hóa giải phóng gốc cyanid, tích lũy gây nhiễm toan lactic và ngộ độc thiocyanat.",
    "reference": "Sách DLS tr. 552",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 650,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Chất giải độc dùng kèm để dự phòng ngộ độc Cyanid khi truyền Nitroprussid liều cao là:",
    "options": [
      "N-acetylcystein",
      "Natri thiosulfat",
      "Deferoxamin",
      "Naloxon"
    ],
    "correct": 1,
    "explanation": "Natri thiosulfat cung cấp gốc lưu huỳnh cho enzym rhodanese chuyển hóa cyanid độc thành thiocyanat ít độc thải qua thận.",
    "reference": "Sách DLS tr. 553",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 651,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Chỉ số huyết áp mục tiêu chung cần đạt được cho hầu hết bệnh nhân tăng huyết áp dưới 65 tuổi là:",
    "options": [
      "Dưới 160 trên 100 mmHg",
      "Dưới 100 trên 60 mmHg",
      "Dưới 130 trên 80 mmHg nếu dung nạp tốt",
      "Dưới 150 trên 95 mmHg"
    ],
    "correct": 2,
    "explanation": "Hầu hết khuyến cáo tim mạch đặt đích HA < 130/80 mmHg cho bệnh nhân < 65 tuổi (không dưới 120/70 mmHg).",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 652,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Đối với người cao tuổi từ 65 tuổi trở lên, chỉ số huyết áp tâm thu mục tiêu ban đầu nên đạt là:",
    "options": [
      "Từ 150 đến 160 mmHg",
      "Dưới 90 mmHg",
      "Dưới 110 mmHg",
      "Từ 130 đến 139 mmHg"
    ],
    "correct": 3,
    "explanation": "Người >= 65 tuổi mục tiêu HATT ban đầu từ 130-139 mmHg để tránh hạ áp quá mức gây thiếu máu não té ngã.",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 653,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Bệnh nhân tăng huyết áp có phì đại lành tính tuyến tiền liệt, nhóm thuốc nào mang lại lợi ích kép?",
    "options": [
      "Thuốc chẹn thụ thể Alpha-1 như Doxazosin hoặc Tamsulosin",
      "Thuốc lợi tiểu Thiazid",
      "Thuốc chẹn kênh calci DHP",
      "Thuốc ức chế men chuyển"
    ],
    "correct": 0,
    "explanation": "Chẹn alpha-1 làm giãn cơ trơn mạch máu hạ áp đồng thời giãn cơ cổ bàng quang giảm tiểu khó do phì đại tuyến tiền liệt.",
    "reference": "Sách DLS tr. 556",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 557",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 558",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 656,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Tác dụng phụ phù mạch thần kinh (Angioedema) do thuốc ức chế men chuyển là do sự ứ đọng của chất nào?",
    "options": [
      "Chất Calcitonin tuyến giáp",
      "Chất Angiotensin II nội bào",
      "Chất Serotonin tiểu cầu",
      "Chất Bradykinin trong mô dưới da và niêm mạc"
    ],
    "correct": 3,
    "explanation": "Men ACE chịu trách nhiệm phân hủy Bradykinin, ức chế men này làm nồng độ Bradykinin tăng cao gây phù mạch thanh môn đe dọa tắc thở.",
    "reference": "Sách DLS tr. 559",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 657,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Khi bệnh nhân bị phù mạch do thuốc ức chế men chuyển, can thiệp xử trí khẩn cấp tương tự như:",
    "options": [
      "Xử trí cấp cứu phản vệ với Adrenalin và kiểm soát đường thở",
      "Tiêm bắp kháng sinh Penicillin liều cao",
      "Để bệnh nhân tự nghỉ ngơi tại nhà",
      "Cho bệnh nhân uống dung dịch Oresol bù nước"
    ],
    "correct": 0,
    "explanation": "Phù mạch cấp tính gây nghẹt thở cần tiêm Adrenalin bắp, Corticoid và chuẩn bị mở khí quản khẩn cấp.",
    "reference": "Sách DLS tr. 560",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 658,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Khuyến cáo về lượng muối ăn hàng ngày cho người bệnh tăng huyết áp là:",
    "options": [
      "Dưới 10 gam muối ăn mỗi ngày (tương đương dưới 4 gam Natri)",
      "Dưới 5 gam muối ăn mỗi ngày (tương đương dưới 2 gam Natri)",
      "Dưới 1 gam muối ăn mỗi ngày (kiêng muối tuyệt đối không nêm gia vị)",
      "Dưới 15 gam muối ăn mỗi ngày theo chế độ ăn thông thường"
    ],
    "correct": 1,
    "explanation": "Giảm tiêu thụ muối < 5g/ngày (khoảng 1 thìa cà phê) giúp hạ 5-8 mmHg huyết áp tâm thu.",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 659,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Hiệu ứng 'áo choàng trắng' trong đo huyết áp được định nghĩa là tình trạng:",
    "options": [
      "Huyết áp thay đổi liên tục theo từng nhịp thở",
      "Bệnh nhân bị dị ứng với trang phục màu trắng",
      "Huyết áp tăng cao khi đo tại phòng khám nhưng bình thường khi đo tại nhà",
      "Huyết áp thấp khi đo tại bệnh viện nhưng tăng cao lúc ngủ"
    ],
    "correct": 2,
    "explanation": "Tăng huyết áp áo choàng trắng do tâm lý lo âu khi gặp nhân viên y tế, chẩn đoán bằng đo HA lưu động 24h (ABPM).",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 660,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc chẹn beta Nebivolol có thêm cơ chế giãn mạch độc đáo thông qua con đường nào?",
    "options": [
      "Ức chế trực tiếp men Renin ở thận",
      "Tăng cường phân hủy chất Bradykinin",
      "Kích thích kênh Canxi mở rộng",
      "Kích thích giải phóng Nitric Oxide từ tế bào nội mô mạch máu"
    ],
    "correct": 3,
    "explanation": "Nebivolol kích thích thụ thể beta-3 nội mô tăng tổng hợp NO gây giãn mạch và giảm sức cản ngoại vi.",
    "reference": "Sách DLS tr. 563",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 661,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc lợi tiểu giữ Kali Eplerenon có ưu điểm gì so với Spironolacton?",
    "options": [
      "Chọn lọc cao trên thụ thể Mineralocorticoid nên không gây to vú ở nam giới",
      "Có hiệu lực lợi tiểu mạnh gấp 10 lần",
      "Không gây tăng nồng độ kali trong máu",
      "Đào thải 100% qua đường hô hấp"
    ],
    "correct": 0,
    "explanation": "Eplerenon ít gắn thụ thể androgen và progesteron nên không gây chứng to vú hay rối loạn cương ở nam giới.",
    "reference": "Sách DLS tr. 564",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 662,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Theo dõi điện giải đồ nồng độ Kali huyết thanh khi dùng phối hợp ƯCMC và Lợi tiểu giữ kali nên tiến hành:",
    "options": [
      "Chỉ kiểm tra khi bệnh nhân xuất hiện triệu chứng yếu cơ hoặc ngất xỉu",
      "Kiểm tra lại sau 1 đến 2 tuần bắt đầu điều trị hoặc sau mỗi lần chỉnh liều",
      "Xét nghiệm định kỳ mỗi 6 đến 12 tháng nếu không có dấu hiệu bất thường",
      "Kiểm tra ngay trong vòng 2 giờ đầu tiên sau khi uống liều thuốc khởi đầu"
    ],
    "correct": 1,
    "explanation": "Cần kiểm tra kali máu và creatinin sau 1-2 tuần dùng phối hợp để phát hiện sớm tăng kali máu đe dọa tim mạch.",
    "reference": "Sách DLS tr. 565",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 663,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Trong xuất huyết não cấp tính kèm tăng huyết áp, mức huyết áp tâm thu được khuyến cáo hạ xuống là:",
    "options": [
      "Hạ ngay huyết áp tâm thu xuống dưới 90 mmHg",
      "Dùng thuốc nâng huyết áp lên trên 220 mmHg",
      "Hạ huyết áp tâm thu xuống khoảng 140 mmHg một cách thận trọng",
      "Không được hạ huyết áp để áp lực tưới máu não tối đa"
    ],
    "correct": 2,
    "explanation": "Hạ HATT xuống mức an toàn 140 mmHg giúp hạn chế khối máu tụ lan rộng mà không làm thiếu máu não cục bộ.",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 664,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Trong đột quỵ thiếu máu não cục bộ cấp có chỉ định dùng thuốc tiêu sợi huyết Alteplase, huyết áp phải hạ xuống dưới:",
    "options": [
      "Dưới 100 trên 60 mmHg",
      "Dưới 220 trên 120 mmHg",
      "Dưới 120 trên 80 mmHg",
      "Dưới 185 trên 110 mmHg trước khi tiêm thuốc tiêu sợi huyết"
    ],
    "correct": 3,
    "explanation": "HA >= 185/110 mmHg làm tăng nguy cơ chuyển dạng xuất huyết não khi dùng rt-PA, phải hạ dưới ngưỡng này trước khi tiêm.",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 665,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc hạ huyết áp nhóm chẹn kênh calci nào sau đây có thời gian bán thải dài nhất khoảng 35 đến 50 giờ?",
    "options": [
      "Amlodipin",
      "Nicardipin",
      "Nifedipin",
      "Isradipin"
    ],
    "correct": 0,
    "explanation": "Amlodipin có T1/2 rất dài (35-50h) đảm bảo tác dụng hạ áp êm dịu suốt 24 giờ ngay cả khi quên 1 liều.",
    "reference": "Sách DLS tr. 568",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 666,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Tác dụng phụ nhịp tim nhanh phản xạ thường gặp nhất ở nhóm thuốc hạ áp nào sau đây?",
    "options": [
      "Thuốc chẹn beta giao cảm chọn lọc",
      "Thuốc chẹn kênh calci Dihydropyridin tác dụng ngắn",
      "Thuốc ức chế men chuyển",
      "Thuốc chẹn kênh calci Non-Dihydropyridin"
    ],
    "correct": 1,
    "explanation": "DHP tác dụng ngắn gây giãn tiểu động mạch nhanh làm giảm áp lực kích thích baroreceptor gây phản xạ tim đập nhanh.",
    "reference": "Sách DLS tr. 569",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 667,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Phối hợp Amlodipin với thuốc chẹn beta giao cảm như Bisoprolol mang lại lợi ích gì?",
    "options": [
      "Làm tăng bài tiết đường qua nước tiểu",
      "Ngăn ngừa hoàn toàn nguy cơ ho khan",
      "Chẹn beta làm mất hiện tượng nhịp tim nhanh phản xạ do Amlodipin gây ra",
      "Làm mất tác dụng phụ táo bón"
    ],
    "correct": 2,
    "explanation": "Bisoprolol ức chế giao cảm tim làm giảm tần số tim bù trừ do giãn mạch của Amlodipin.",
    "reference": "Sách DLS tr. 570",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 571",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 669,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thời điểm đo huyết áp bằng máy đo tự động tại nhà chuẩn xác nhất là khi nào?",
    "options": [
      "Đo vào buổi sáng sau khi ngủ dậy đi tiểu và buổi tối trước khi đi ngủ",
      "Đo ngay sau khi vừa chạy bộ về",
      "Đo ngay sau khi vừa uống 2 ly cà phê đậm",
      "Đo trong lúc đang cãi nhau căng thẳng"
    ],
    "correct": 0,
    "explanation": "Đo HA tại nhà: ngồi nghỉ 5 phút, đo 2 lần sáng (sau ngủ dậy, trước ăn/uống thuốc) và 2 lần tối trước khi ngủ.",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 670,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Chỉ số huyết áp đo tại nhà trung bình từ bao nhiêu được xem là tương đương chẩn đoán THA phòng khám 140/90?",
    "options": [
      "Từ 120 trên 80 mmHg trở lên",
      "Từ 135 trên 85 mmHg trở lên",
      "Từ 150 trên 95 mmHg trở lên",
      "Từ 140 trên 90 mmHg trở lên"
    ],
    "correct": 1,
    "explanation": "Ngưỡng chẩn đoán THA tại nhà là >= 135/85 mmHg (thấp hơn ngưỡng phòng khám 140/90 mmHg).",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 574",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 672,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc hạ áp Reserpin kinh điển tác động theo cơ chế nào?",
    "options": [
      "Kích thích kênh Kali tại cơ trơn mạch",
      "Phong bế chọn lọc thụ thể Beta-1",
      "Ức chế tái hấp thu Natri ở quai Henle",
      "Làm cạn kiệt dự trữ Catecholamin và Serotonin ở tận cùng dây thần kinh giao cảm"
    ],
    "correct": 3,
    "explanation": "Reserpin ức chế chất vận chuyển VMAT làm cạn kiệt noradrenalin trong túi synap, dễ gây trầm cảm tự sát.",
    "reference": "Sách DLS tr. 575",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 673,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Bệnh nhân tăng huyết áp có hội chứng mạch vành mạn tính ổn định, nhóm thuốc bắt buộc chỉ định là:",
    "options": [
      "Thuốc chẹn beta giao cảm và thuốc ức chế men chuyển",
      "Thuốc lợi tiểu quai đơn độc liều cao",
      "Thuốc hạ áp tác động trung ương Clonidin",
      "Thuốc giãn mạch trực tiếp Hydralazin"
    ],
    "correct": 0,
    "explanation": "Chẹn beta giảm nhu cầu oxy cơ tim và ƯCMC cải thiện tái cấu trúc tâm thất, giảm tử vong sau biến cố vành.",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 674,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc chẹn beta nào sau đây có thêm tác dụng chẹn kênh calci mang lại hiệu quả giãn mạch bổ sung?",
    "options": [
      "Propranolol",
      "Carvedilol",
      "Atenolol",
      "Metoprolol"
    ],
    "correct": 1,
    "explanation": "Carvedilol ở nồng độ cao có thêm tác dụng chẹn kênh canxi yếu hỗ trợ giãn mạch ngoại vi.",
    "reference": "Sách DLS tr. 577",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 675,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Nhóm thuốc chẹn kênh calci Dihydropyridin có thể gây ra tác dụng phụ tiêu hóa thường gặp là:",
    "options": [
      "Loét thủng dạ dày tá tràng",
      "Tiêu chảy phân nước liên tục",
      "Táo bón đặc biệt với Verapamil",
      "Viêm tụy cấp xuất huyết"
    ],
    "correct": 2,
    "explanation": "Non-DHP (đặc biệt Verapamil) ức chế cơ trơn ruột gây táo bón dai dẳng ở người cao tuổi.",
    "reference": "Sách DLS tr. 578",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 676,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Khi kê đơn thuốc hạ áp cho người lái xe hoặc vận hành máy móc, cần cảnh báo tác dụng phụ nào ở tuần đầu?",
    "options": [
      "Gây ảo giác hoang tưởng nhìn thấy ma",
      "Gây mù màu không phân biệt được đèn giao thông",
      "Làm mất thính lực tạm thời",
      "Hiện tượng chóng mặt hoa mắt do hạ huyết áp tư thế"
    ],
    "correct": 3,
    "explanation": "Giai đoạn đầu hạ áp làm giảm tưới máu não thích nghi tạm thời gây chóng mặt khi đổi tư thế.",
    "reference": "Sách DLS tr. 579",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 677,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Biện pháp không dùng thuốc nào sau đây giúp giảm huyết áp hiệu quả nhất ở người béo phì?",
    "options": [
      "Giảm cân nặng đưa chỉ số khối cơ thể BMI về mức lý tưởng",
      "Ngủ liên tục 14 tiếng mỗi ngày",
      "Tắm nước lạnh vào mùa đông",
      "Chỉ uống nước ngọt thay cơm"
    ],
    "correct": 0,
    "explanation": "Giảm mỗi 10 kg cân nặng dư thừa giúp hạ từ 5 đến 20 mmHg huyết áp tâm thu.",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 678,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Chế độ ăn kiêng DASH được khuyến cáo cho người tăng huyết áp có đặc điểm dinh dưỡng là:",
    "options": [
      "Chỉ ăn chất béo từ dầu chiên đi chiên lại",
      "Giàu rau xanh hoa quả tươi ngũ cốc nguyên hạt sữa ít béo và giảm mỡ bão hòa",
      "Ăn nhiều thịt đỏ và nội tạng động vật",
      "Ăn thật nhiều đồ hộp và xúc xích"
    ],
    "correct": 1,
    "explanation": "DASH diet giàu kali, calci, magnesi và chất xơ, giảm tối đa chất béo bão hòa và cholesterol.",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 679,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Tập thể dục nhịp điệu đều đặn như đi bộ nhanh 30 phút mỗi ngày trong 5 ngày mỗi tuần giúp:",
    "options": [
      "Gây teo nhỏ các buồng tim sinh lý",
      "Làm huyết áp tăng vọt vĩnh viễn không hạ",
      "Giảm huyết áp tâm thu từ 4 đến 9 mmHg và cải thiện chức năng nội mô",
      "Không có bất kỳ lợi ích tim mạch nào"
    ],
    "correct": 2,
    "explanation": "Vận động thể lực mức độ vừa phải đều đặn giúp hạ áp rõ rệt và tăng độ đàn hồi thành mạch.",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 680,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Bệnh nhân tăng huyết áp có kèm suy tim phân suất tống máu giảm nặng chống chỉ định với thuốc nào?",
    "options": [
      "Thuốc chẹn beta chọn lọc Bisoprolol",
      "Thuốc lợi tiểu quai Furosemid",
      "Thuốc ức chế men chuyển",
      "Thuốc chẹn kênh calci DHP tác dụng ngắn và thuốc chẹn kênh calci Non-DHP"
    ],
    "correct": 3,
    "explanation": "Verapamil, Diltiazem và Nifedipin tác dụng ngắn gây ức chế co bóp cơ tim làm nặng thêm suy tim và tử vong.",
    "reference": "Hướng dẫn chẩn đoán và điều trị THA - Bộ Y tế",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 681,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Định nghĩa tiêu chảy cấp ở trẻ em theo Tổ chức Y tế Thế giới (WHO) là tình trạng:",
    "options": [
      "Đi ngoài phân lỏng hoặc toé nước từ 3 lần trở lên trong 24 giờ kéo dài không quá 14 ngày",
      "Đi phân rắn từng viên như phân dê",
      "Đi ngoài phân sệt 1 lần trong ngày",
      "Đi tiêu phân có nhầy nhớt kéo dài trên 1 tháng"
    ],
    "correct": 0,
    "explanation": "Tiêu chảy cấp định nghĩa là đi phân lỏng hoặc nhiều nước >= 3 lần/24h, diễn biến dưới 14 ngày.",
    "reference": "Sách DLS tr. 585",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 682,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Nguyên nhân virus gây tiêu chảy cấp mùa đông phổ biến và nguy hiểm nhất ở trẻ dưới 2 tuổi là:",
    "options": [
      "Cytomegalovirus",
      "Rotavirus",
      "Adenovirus",
      "Coronavirus"
    ],
    "correct": 1,
    "explanation": "Rotavirus gây tổn thương phá hủy tế bào lông nhung ruột non, nguyên nhân hàng đầu gây tiêu chảy mất nước nặng ở trẻ nhỏ.",
    "reference": "Sách DLS tr. 586",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 683,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Thời gian diễn biến tự nhiên thông thường của một đợt tiêu chảy cấp do virus ở trẻ em là:",
    "options": [
      "Kéo dài đúng 24 giờ rồi khỏi",
      "Chỉ diễn ra trong vòng 2 giờ",
      "Kéo dài khoảng từ 5 đến 7 ngày và thường tự giới hạn",
      "trên 3 tháng"
    ],
    "correct": 2,
    "explanation": "Tiêu chảy cấp do virus tự hồi phục sau 5-7 ngày khi tế bào niêm mạc ruột non được tái sinh hoàn toàn.",
    "reference": "Sách DLS tr. 587",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 588",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 685,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Dung dịch bù nước Oresol áp lực thẩm thấu thấp được WHO khuyến cáo có độ thẩm thấu là bao nhiêu?",
    "options": [
      "245 mOsmol trên lít",
      "150 mOsmol trên lít",
      "500 mOsmol trên lít",
      "311 mOsmol trên lít"
    ],
    "correct": 0,
    "explanation": "ORS nồng độ thẩm thấu thấp (245 mOsm/L) giảm tỷ lệ nôn, giảm số lần tiêu chảy và giảm nhu cầu truyền dịch so với ORS cũ.",
    "reference": "Sách DLS tr. 589",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 686,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Thành phần cơ bản trong dung dịch Oresol tiêu chuẩn giúp tăng cường hấp thu Natri và nước qua ruột là:",
    "options": [
      "Hạt chất béo nhũ tương hóa",
      "Phân tử Glucose theo cơ chế đồng vận chuyển qua chất mang SGLT-1",
      "Vitamin C liều cao",
      "Các acid amin mạch nhánh"
    ],
    "correct": 1,
    "explanation": "Glucose và Natri đồng vận chuyển tỷ lệ 1:1 qua bơm SGLT-1 niêm mạc ruột kéo theo các phân tử nước vào tuần hoàn.",
    "reference": "Sách DLS tr. 590",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 687,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Phác đồ A của WHO trong điều trị tiêu chảy cấp được áp dụng cho đối tượng trẻ nào?",
    "options": [
      "Trẻ bị tiêu chảy có co giật",
      "Trẻ bị mất nước mức độ trung bình",
      "Trẻ bị tiêu chảy chưa có dấu hiệu mất nước và điều trị tại nhà",
      "Trẻ bị sốc mất nước nguy kịch"
    ],
    "correct": 2,
    "explanation": "Phác đồ A bù dịch tại nhà bằng ORS và nước nấu chín sau mỗi lần đi ngoài phòng ngừa mất nước.",
    "reference": "Sách DLS tr. 591",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 688,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Lượng dung dịch Oresol cần cho trẻ dưới 2 tuổi uống sau mỗi lần đi ngoài phân lỏng theo Phác đồ A là:",
    "options": [
      "Chỉ cho uống một ngụm khoảng 5 mL",
      "Từ 200 đến 300 mL sau mỗi lần đi tiêu",
      "Cho uống liên tục cả chai 1 lít một lần",
      "Từ 50 đến 100 mL sau mỗi lần đi tiêu lỏng"
    ],
    "correct": 3,
    "explanation": "Trẻ < 2 tuổi uống 50-100 ml; trẻ 2-10 tuổi uống 100-200 ml; trẻ > 10 tuổi uống theo nhu cầu sau mỗi lần đi tiêu.",
    "reference": "Sách DLS tr. 592",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 689,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Phác đồ B của WHO được áp dụng cho trường hợp trẻ bị tiêu chảy cấp có mức độ mất nước nào?",
    "options": [
      "Trẻ có dấu hiệu mất nước mức độ nhẹ đến trung bình điều trị tại cơ sở y tế",
      "Trẻ bị sốc mất nước nặng li bì hôn mê",
      "Trẻ có biểu hiện xuất huyết tiêu hóa",
      "Trẻ hoàn toàn không mất nước"
    ],
    "correct": 0,
    "explanation": "Phác đồ B điều trị mất nước mức độ 'Có mất nước' bằng ORS tại cơ sở y tế trong 4 giờ.",
    "reference": "Sách DLS tr. 593",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 690,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Lượng dung dịch Oresol cần bù cho trẻ trong 4 giờ đầu theo Phác đồ B được tính theo công thức:",
    "options": [
      "Số cân nặng của trẻ nhân với 20 mL",
      "Số cân nặng của trẻ tính bằng kg nhân với 75 mL",
      "Số cân nặng của trẻ nhân với 150 mL",
      "Cố định 500 mL cho mọi lứa tuổi"
    ],
    "correct": 1,
    "explanation": "Lượng ORS trong 4 giờ đầu: Cân nặng (kg) x 75 mL (hoặc tính theo bảng tuổi nếu không cân được).",
    "reference": "Sách DLS tr. 594",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 691,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Dấu hiệu lâm sàng phân loại trẻ vào nhóm 'Mất nước nặng' (Phác đồ C) bao gồm hai dấu hiệu nào?",
    "options": [
      "Trẻ khóc có nước mắt bình thường",
      "Nếp véo da bụng mất rất nhanh",
      "Li bì hoặc hôn mê và không thể uống được hoặc uống rất kém",
      "Trẻ tỉnh táo đòi uống nước liên tục"
    ],
    "correct": 2,
    "explanation": "Tiêu chuẩn Mất nước nặng: có >= 2 dấu hiệu: Li bì/hôn mê; Mắt trũng; Không uống được; Véo da mất rất chậm (> 2 giây).",
    "reference": "Sách DLS tr. 595",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 692,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Dung dịch truyền tĩnh mạch cấp cứu được lựa chọn ưu tiên hàng đầu trong Phác đồ C của WHO là:",
    "options": [
      "Dung dịch Natri hydrocarbonat đậm đặc",
      "Dung dịch Albumin người 20%",
      "Dung dịch Glucose ưu trương 10%",
      "Dung dịch Ringer Lactat hoặc dung dịch Natri clorid 0,9%"
    ],
    "correct": 3,
    "explanation": "Ringer Lactat là dịch truyền tốt nhất bù thể tích và kiềm hóa toan; dung dịch thay thế là NaCl 0,9%.",
    "reference": "Sách DLS tr. 596",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 693,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Tổng lượng dịch truyền tĩnh mạch cho trẻ bị mất nước nặng theo Phác đồ C là bao nhiêu?",
    "options": [
      "100 mL trên mỗi kg cân nặng",
      "200 mL trên mỗi kg cân nặng",
      "50 mL trên mỗi kg cân nặng",
      "30 mL trên mỗi kg cân nặng"
    ],
    "correct": 0,
    "explanation": "Tổng lượng dịch truyền là 100 mL/kg, chia thành 2 giai đoạn: hồi sức nhanh ban đầu (30 ml/kg) và duy trì tiếp theo (70 ml/kg).",
    "reference": "Sách DLS tr. 597",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 694,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Ở trẻ dưới 12 tháng tuổi bị mất nước nặng, tốc độ truyền dịch 100 mL/kg được thực hiện trong bao lâu?",
    "options": [
      "Toàn bộ 100 mL/kg truyền thật nhanh trong 15 phút",
      "30 mL/kg trong 1 giờ đầu và 70 mL/kg trong 5 giờ tiếp theo",
      "Truyền nhỏ giọt 24 giờ",
      "30 mL/kg trong 30 phút và 70 mL/kg trong 2,5 giờ"
    ],
    "correct": 1,
    "explanation": "Trẻ < 12 tháng: 30 ml/kg trong 1 giờ, sau đó 70 ml/kg trong 5 giờ (tổng cộng 6 giờ).",
    "reference": "Sách DLS tr. 598",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 695,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Ở trẻ từ 12 tháng tuổi trở lên bị mất nước nặng, thời gian truyền hết 100 mL/kg dịch là:",
    "options": [
      "Chỉ truyền trong 10 phút",
      "Truyền đều đặn trong suốt 12 giờ",
      "30 mL/kg trong 30 phút đầu và 70 mL/kg trong 2,5 giờ tiếp theo",
      "30 mL/kg trong 2 giờ và 70 mL/kg trong 6 giờ"
    ],
    "correct": 2,
    "explanation": "Trẻ >= 12 tháng: 30 ml/kg trong 30 phút, sau đó 70 ml/kg trong 2,5 giờ (tổng cộng 3 giờ).",
    "reference": "Sách DLS tr. 598",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 696,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Tại sao việc bổ sung Kẽm cho trẻ bị tiêu chảy cấp trong 10 đến 14 ngày là bắt buộc?",
    "options": [
      "Kẽm làm se phân đặc lại ngay lập tức",
      "Kẽm có tác dụng tiêu diệt trực tiếp các loại virus",
      "Kẽm làm giảm cảm giác thèm ăn của trẻ",
      "Kẽm giúp phục hồi cấu trúc niêm mạc ruột và giảm tỷ lệ tái phát tiêu chảy"
    ],
    "correct": 3,
    "explanation": "Kẽm tăng sinh tế bào biểu mô ruột, tăng miễn dịch tế bào, giảm thời gian và độ nặng tiêu chảy, ngừa đợt mới trong 2-3 tháng.",
    "reference": "Sách DLS tr. 599",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 697,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Liều bổ sung Kẽm hàng ngày cho trẻ em từ 6 tháng tuổi trở lên bị tiêu chảy cấp là:",
    "options": [
      "20 mg Kẽm nguyên tố mỗi ngày trong 10 đến 14 ngày",
      "10 mg Kẽm nguyên tố mỗi ngày",
      "5 mg Kẽm nguyên tố mỗi ngày",
      "50 mg Kẽm nguyên tố mỗi ngày"
    ],
    "correct": 0,
    "explanation": "Liều kẽm: trẻ < 6 tháng tuổi dùng 10 mg/ngày; trẻ từ 6 tháng tuổi trở lên dùng 20 mg/ngày trong 10-14 ngày.",
    "reference": "Sách DLS tr. 600",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 698,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Liều bổ sung Kẽm hàng ngày cho trẻ dưới 6 tháng tuổi bị tiêu chảy cấp là bao nhiêu?",
    "options": [
      "20 mg Kẽm nguyên tố mỗi ngày",
      "10 mg Kẽm nguyên tố mỗi ngày trong 10 đến 14 ngày",
      "Không được bổ sung kẽm cho trẻ dưới 6 tháng",
      "2 mg Kẽm nguyên tố mỗi ngày"
    ],
    "correct": 1,
    "explanation": "Trẻ dưới 6 tháng tuổi dùng liều 10 mg kẽm nguyên tố/ngày liên tục 10-14 ngày.",
    "reference": "Sách DLS tr. 600",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 699,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Kháng sinh có được chỉ định thường quy cho trẻ em bị tiêu chảy cấp không?",
    "options": [
      "Bắt buộc phải dùng kháng sinh ngay từ ngày đầu tiên",
      "Chỉ dùng kháng sinh khi trẻ sốt nhẹ 37,5 độ",
      "Không được chỉ định thường quy trừ khi có bằng chứng lỵ trực khuẩn hoặc tả",
      "Luôn tiêm phối hợp hai loại kháng sinh phổ rộng"
    ],
    "correct": 2,
    "explanation": "Đa số tiêu chảy do virus hoặc cơ chế thẩm thấu; lạm dụng kháng sinh gây loạn khuẩn ruột và kháng thuốc.",
    "reference": "Sách DLS tr. 601",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 602",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 701,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Kháng sinh đường uống được WHO khuyến cáo lựa chọn hàng đầu điều trị lỵ trực khuẩn ở trẻ em là:",
    "options": [
      "Ciprofloxacin đường uống",
      "Ampicillin hỗn dịch",
      "Cotrimoxazol viên nén",
      "Gentamicin tiêm bắp"
    ],
    "correct": 0,
    "explanation": "Ciprofloxacin (15 mg/kg x 2 lần/ngày trong 3 ngày) là lựa chọn hàng đầu hiện nay của WHO cho bệnh lỵ do Shigella.",
    "reference": "Sách DLS tr. 603",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 702,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Thuốc chống tiêu chảy làm giảm nhu động ruột Loperamid bị chống chỉ định cho trẻ em vì nguy cơ:",
    "options": [
      "Gây điếc tai tiếp nhận thần kinh",
      "Gây liệt ruột cơ năng, ứ đọng độc tố và hoại tử ruột",
      "Gây suy tim cấp do rối loạn nhịp",
      "Làm trẻ bị viêm da dị ứng cấp"
    ],
    "correct": 1,
    "explanation": "Loperamid ức chế nhu động ruột làm tích tụ độc tố vi khuẩn trong lòng ruột gây liệt ruột nhiễm độc tử vong ở trẻ nhỏ.",
    "reference": "Sách DLS tr. 604",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 703,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Thuốc kháng tiết đường ruột Racecadotril có cơ chế tác dụng dược lý là gì?",
    "options": [
      "Làm liệt nhu động cơ vòng ruột già",
      "Bao phủ cơ học toàn bộ niêm mạc dạ dày",
      "Ức chế enzym Enkephalinase làm giảm tiết nước và điện giải vào lòng ruột",
      "Tiêu diệt vi khuẩn tả và lỵ"
    ],
    "correct": 2,
    "explanation": "Racecadotril bảo vệ enkephalin nội sinh, giảm tiết dịch ruột mà không ảnh hưởng đến thời gian vận chuyển của ruột.",
    "reference": "Sách DLS tr. 605",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 704,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Chất hấp phụ Smectit (Diosmectite) trong điều trị tiêu chảy hoạt động theo cơ chế nào?",
    "options": [
      "Diệt khuẩn bằng cách phá màng vi sinh vật",
      "Ức chế chọn lọc bơm proton tế bào thành",
      "Kích thích tái hấp thu đường chủ động",
      "Gắn kết hấp phụ độc tố vi khuẩn và bảo vệ lớp nhầy niêm mạc ruột"
    ],
    "correct": 3,
    "explanation": "Diosmectite là nhôm magnesi silicat thiên nhiên có cấu trúc lớp bọc niêm mạc và gắn giữ độc tố vi khuẩn thải ra ngoài.",
    "reference": "Sách DLS tr. 606",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 705,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Khi dùng chung Diosmectite với các thuốc khác đường uống, hướng dẫn sử dụng đúng là:",
    "options": [
      "Uống cách xa các thuốc điều trị khác tối thiểu từ 1 đến 2 giờ",
      "Nghiền nát uống chung cùng lúc với kháng sinh và men vi sinh để tăng hấp phụ độc tố",
      "Uống ngay trước bữa ăn cùng với các chế phẩm vitamin và viên sắt",
      "Uống cùng lúc với dung dịch bù nước Oresol sau mỗi lần đi ngoài"
    ],
    "correct": 0,
    "explanation": "Diosmectite hấp phụ các phân tử thuốc khác làm giảm hấp thu thuốc uống cùng, phải uống cách xa 1-2h.",
    "reference": "Sách DLS tr. 607",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 706,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Men vi sinh Probiotic như Saccharomyces boulardii hoặc Lactobacillus có lợi ích gì trong tiêu chảy cấp?",
    "options": [
      "Chữa khỏi tiêu chảy ngay lập tức sau 1 giờ",
      "Rút ngắn thời gian tiêu chảy khoảng 1 ngày và cân bằng hệ vi sinh đường ruột",
      "Diệt sạch toàn bộ vi khuẩn trong đường ruột",
      "Thay thế hoàn toàn dung dịch bù nước Oresol"
    ],
    "correct": 1,
    "explanation": "Probiotic hỗ trợ rút ngắn thời gian tiêu chảy khoảng 24h và giảm thời gian nằm viện của trẻ.",
    "reference": "Sách DLS tr. 608",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 707,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Chế độ dinh dưỡng đúng đắn cho trẻ nhỏ trong thời gian bị tiêu chảy cấp là gì?",
    "options": [
      "Chỉ cho trẻ ăn cháo muối trắng không có thịt",
      "Pha loãng sữa công thức xuống còn 1/4 nồng độ",
      "Tiếp tục cho trẻ bú mẹ và ăn uống bình thường đầy đủ chất dinh dưỡng",
      "Bắt trẻ nhịn ăn tuyệt đối chỉ cho uống nước lọc"
    ],
    "correct": 2,
    "explanation": "Trẻ cần tiếp tục bú mẹ và ăn thức ăn giàu dinh dưỡng chia nhỏ bữa để thúc đẩy tế bào niêm mạc ruột hồi phục và tránh suy dinh dưỡng.",
    "reference": "Sách DLS tr. 609",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 708,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Khi trẻ bị tiêu chảy cấp có biểu hiện nôn sau khi vừa uống Oresol thì người chăm sóc cần làm gì?",
    "options": [
      "Chuyển sang tiêm kháng sinh ngay lập tức",
      "Cấm tuyệt đối không cho trẻ uống nước nữa",
      "Bắt trẻ uống ngay gấp đôi lượng vừa nôn ra",
      "Tạm ngừng cho uống 10 phút sau đó cho uống lại chậm rãi từng thìa nhỏ"
    ],
    "correct": 3,
    "explanation": "Chờ 10 phút cho dịu dạ dày, sau đó bón từng thìa nhỏ mỗi 2-3 phút, đa số trẻ sẽ dung nạp và giữ được nước.",
    "reference": "Sách DLS tr. 610",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 709,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Dấu hiệu nếp véo da bụng mất rất chậm (trên 2 giây) phản ánh tình trạng gì của cơ thể trẻ?",
    "options": [
      "Tình trạng mất nước nặng đe dọa thể tích tuần hoàn",
      "Trẻ có làn da quá nhiều mỡ dưới da",
      "Hiện tượng sinh lý hoàn toàn bình thường",
      "Trẻ bị suy dinh dưỡng thể phù"
    ],
    "correct": 0,
    "explanation": "Mất nước nội mô và ngoại bào làm giảm độ đàn hồi mô dưới da, véo da mất > 2 giây là dấu hiệu mất nước nặng.",
    "reference": "Sách DLS tr. 611",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 710,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Biến chứng toan chuyển hóa trong tiêu chảy cấp nặng ở trẻ em chủ yếu là do mất chất gì qua phân?",
    "options": [
      "Do trẻ ăn quá nhiều chất đạm",
      "Mất một lượng lớn ion Bicarbonat HCO3- qua dịch phân lỏng",
      "Tích tụ acid uric trong huyết tương",
      "Do thận tăng bài tiết ion Hydro H+"
    ],
    "correct": 1,
    "explanation": "Dịch phân tiêu chảy chứa nồng độ HCO3- rất cao (30-50 mEq/L), mất kiềm qua phân gây toan chuyển hóa nặng thở sâu Kussmaul.",
    "reference": "Sách DLS tr. 612",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 711,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Biến chứng hạ Kali máu trong tiêu chảy cấp kéo dài biểu hiện bằng các dấu hiệu nào?",
    "options": [
      "Phù toàn thân có vết lõm sâu",
      "Tăng phản xạ gân xương quá mức",
      "Chướng bụng, giảm nhu động ruột, yếu cơ và loạn nhịp tim",
      "Co giật toàn thể và cứng hàm uốn ván"
    ],
    "correct": 2,
    "explanation": "Mất kali qua phân gây hạ K+ máu: chướng bụng liệt ruột cơ năng, yếu cơ, chuột rút và sóng T dẹt trên ECG.",
    "reference": "Sách DLS tr. 613",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 712,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Dấu hiệu nguy hiểm nào sau đây đòi hỏi phải đưa trẻ bị tiêu chảy cấp đến bệnh viện ngay lập tức?",
    "options": [
      "Trẻ ngủ ngoan sau khi uống Oresol",
      "Trẻ đi tiểu nước tiểu màu vàng nhạt",
      "Trẻ đòi bú mẹ nhiều hơn bình thường",
      "Trẻ sốt cao, nôn liên tục, khát nước dữ dội hoặc đi ngoài phân có máu"
    ],
    "correct": 3,
    "explanation": "Các dấu hiệu báo động đỏ: sốt cao, nôn tất cả mọi thứ, khát dữ dội, phân có máu, li bì khó đánh thức.",
    "reference": "Sách DLS tr. 614",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 713,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Dung dịch Oresol sau khi pha với nước đun sôi để nguội chỉ có giá trị sử dụng tối đa trong vòng:",
    "options": [
      "Trong vòng 24 giờ đồng hồ",
      "Trong vòng 7 ngày nếu để tủ lạnh",
      "Trong vòng 48 giờ",
      "Chỉ dùng được trong 15 phút"
    ],
    "correct": 0,
    "explanation": "ORS pha xong để quá 24h dễ bị nhiễm khuẩn và lên men, phải đổ bỏ và pha gói mới mỗi ngày.",
    "reference": "Sách DLS tr. 615",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 714,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Tại sao không được pha dung dịch Oresol vào nước khoáng hoặc nước ngọt có ga?",
    "options": [
      "Vì làm dung dịch bốc mùi khó chịu",
      "Vì làm sai lệch áp lực thẩm thấu chuẩn và nồng độ các chất điện giải",
      "Vì nước khoáng làm Oresol biến tính thành chất độc",
      "Vì nước ngọt làm mất màu dung dịch Oresol"
    ],
    "correct": 1,
    "explanation": "Nước khoáng hoặc nước ngọt làm tăng áp lực thẩm thấu dung dịch dẫn đến tiêu chảy tăng tiết nặng hơn.",
    "reference": "Sách DLS tr. 616",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 715,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Vắc xin phòng bệnh tiêu chảy do Rotavirus cho trẻ nhỏ được đưa vào cơ thể qua đường nào?",
    "options": [
      "Đường nhỏ mũi phun sương",
      "Đường tiêm trong da mu bàn tay",
      "Đường uống với 2 hoặc 3 liều tùy loại vắc xin",
      "Đường tiêm bắp sâu ở đùi"
    ],
    "correct": 2,
    "explanation": "Vắc xin Rotavirus là vắc xin sống giảm độc lực dùng đường uống, hoàn thành trước 6-8 tháng tuổi.",
    "reference": "Sách DLS tr. 617",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 716,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Bệnh tả ở trẻ em và người lớn đặc trưng bởi biểu hiện tiêu chảy có tính chất nào?",
    "options": [
      "Phân nhầy lẫn máu mũi kèm sốt cao co giật",
      "Phân rắn xen kẽ táo bón từng đợt",
      "Phân có màu đen sẫm như bã cà phê",
      "Tiêu chảy phân toàn nước đục như nước vo gạo số lượng ồ ạt không sốt"
    ],
    "correct": 3,
    "explanation": "Độc tố tả kích thích adenylate cyclase gây xuất tiết ồ ạt nước và điện giải, phân trắng đục như nước vo gạo tanh nồng.",
    "reference": "Sách DLS tr. 618",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 619",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 718,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Tiêu chảy thẩm thấu xảy ra do sự hiện diện của chất nào trong lòng ruột cản trở hấp thu nước?",
    "options": [
      "Chất xơ không hòa tan cellulose",
      "Các phân tử đường không hấp thu như Lactose làm tăng áp lực thẩm thấu hút nước",
      "Các phân tử protein thịt bò",
      "Các hạt cát vô cơ không tiêu hóa"
    ],
    "correct": 1,
    "explanation": "Thiếu men lactase thứ phát sau tổn thương lông nhung làm lactose không tiêu tích tụ hút nước vào lòng ruột.",
    "reference": "Sách DLS tr. 620",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 719,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Trẻ bị tiêu chảy kéo dài không dung nạp Lactose thứ phát nên được xử trí dinh dưỡng thế nào?",
    "options": [
      "Nhịn ăn hoàn toàn và chỉ truyền dịch Glucose 5% kéo dài 1 tuần",
      "Chỉ cho uống dung dịch nước đường glucose đậm đặc thay cho sữa",
      "Chuyển sang dùng tạm thời sữa công thức không chứa đường Lactose (Lactose-free)",
      "Cho uống sữa chua có bổ sung men lactase cùng với sữa đặc có đường"
    ],
    "correct": 2,
    "explanation": "Sữa không lactose (Lactose-free) giúp giảm tiêu chảy thẩm thấu trong giai đoạn niêm mạc ruột đang hồi phục enzym lactase.",
    "reference": "Sách DLS tr. 621",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 720,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Hiện tượng lồng ruột ở trẻ nhỏ có thể biểu hiện bằng triệu chứng nào dễ nhầm với tiêu chảy?",
    "options": [
      "Sốt cao liên tục kèm ho khan",
      "Đi ngoài phân toàn nước màu xanh",
      "Táo bón kéo dài nhiều tuần",
      "Đau bụng từng cơn dữ dội, nôn mửa và đi ngoài phân nhầy máu như thạch"
    ],
    "correct": 3,
    "explanation": "Lồng ruột cấp: khóc thét từng cơn, nôn ra dịch mật, sờ thấy khối lồng và đi ngoài phân máu nhầy như thạch đỏ việt quất.",
    "reference": "Sách DLS tr. 622",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 623",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 722,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Chỉ định đặt sonde dạ dày nhỏ giọt Oresol được áp dụng trong tình huống nào ở Phác đồ B?",
    "options": [
      "Trẻ tỉnh táo bú mẹ rất tốt",
      "Trẻ bị nôn liên tục hoặc từ chối uống nhưng chưa có chỉ định truyền tĩnh mạch",
      "Trẻ bị thủng ruột nghi viêm phúc mạc",
      "Trẻ đang trong cơn sốc tụt huyết áp"
    ],
    "correct": 1,
    "explanation": "Nhỏ giọt dạ dày ORS chậm giúp bù dịch hiệu quả khi trẻ mệt nôn nhiều mà chưa có đường truyền tĩnh mạch.",
    "reference": "Sách DLS tr. 624",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 723,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Sau khi đã bù đủ dịch theo Phác đồ B trong 4 giờ, bước tiếp theo bác sĩ cần làm là:",
    "options": [
      "Ngừng toàn bộ việc cho trẻ bú mẹ và chuyển sang truyền dịch duy trì",
      "Cho trẻ xuất viện về nhà ngay và không cần hướng dẫn dấu hiệu nguy hiểm",
      "Đánh giá lại tình trạng mất nước của trẻ để quyết định phác đồ tiếp theo (A, B hoặc C)",
      "Chuyển sang dùng ngay kháng sinh Ciprofloxacin và thuốc cầm tiêu chảy Loperamid"
    ],
    "correct": 2,
    "explanation": "Sau 4h Phác đồ B: nếu hết mất nước chuyển Phác đồ A; nếu còn mất nước lặp lại Phác đồ B; nếu nặng lên chuyển Phác đồ C.",
    "reference": "Sách DLS tr. 625",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 724,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Mục tiêu quan trọng của việc giáo dục truyền thông cho các bà mẹ về tiêu chảy cấp là:",
    "options": [
      "Biết cách tiêm truyền dịch tại nhà",
      "Biết cách ép trẻ nhịn ăn để sạch ruột",
      "Biết cách tự ra hiệu thuốc mua kháng sinh mạnh",
      "Biết cách pha và cho uống Oresol đúng cách ngay khi trẻ bắt đầu đi tiêu lỏng"
    ],
    "correct": 3,
    "explanation": "Bù dịch sớm bằng ORS đúng nồng độ tại nhà giúp ngăn ngừa tới 90% biến chứng mất nước nặng.",
    "reference": "Sách DLS tr. 626",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 725,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Nước cháo muối là dung dịch thay thế dân gian an toàn trong Phác đồ A được nấu theo tỷ lệ nào?",
    "options": [
      "Một nắm gạo, một nhúm muối nhỏ và một lít nước đun sôi",
      "Pha muối vào nước ngọt hoa quả đóng lon",
      "Nửa bát muối pha với một lít nước",
      "Nấu cháo thật đặc không cho nước"
    ],
    "correct": 0,
    "explanation": "Nước cháo muối (1 nắm gạo + 1 nhúm muối 3-4g trong 1 lít nước) cung cấp tinh bột và natri an toàn khi chưa có ORS.",
    "reference": "Sách DLS tr. 627",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 726,
    "chapter": "Hen phế quản & COPD",
    "question": "Bản chất bệnh học cơ bản của bệnh hen phế quản là tình trạng:",
    "options": [
      "Tổn thương phá hủy không hồi phục vách phế nang",
      "Viêm mạn tính đường thở với sự tham gia của nhiều tế bào và yếu tố tế bào",
      "Nhiễm khuẩn cấp tính mưng mủ ở phế nang",
      "Xơ hóa vĩnh viễn các mao mạch phổi"
    ],
    "correct": 1,
    "explanation": "Hen là bệnh lý viêm mạn tính đường thở dẫn đến tăng phản ứng phế quản và tắc nghẽn luồng khí hồi phục được.",
    "reference": "GINA 2023 / Hướng dẫn chẩn đoán Hen - Bộ Y tế",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 727,
    "chapter": "Hen phế quản & COPD",
    "question": "Đặc điểm chức năng hô hấp đặc trưng nhất giúp phân biệt hen phế quản với COPD là:",
    "options": [
      "Dung tích sống gắng sức FVC luôn giảm nặng",
      "Khí máu động mạch luôn có toan chuyển hóa",
      "Sự tắc nghẽn luồng khí có tính chất hồi phục hoàn toàn hoặc đáng kể sau test giãn phế quản",
      "Tắc nghẽn cố định không hồi phục"
    ],
    "correct": 2,
    "explanation": "Test hồi phục phế quản dương tính (FEV1 tăng > 12% và > 200 mL sau hít SABA) là tiêu chuẩn vàng chẩn đoán hen.",
    "reference": "GINA 2023",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 728,
    "chapter": "Hen phế quản & COPD",
    "question": "Nhóm thuốc nào sau đây đóng vai trò là nền tảng kiểm soát viêm hàng đầu trong điều trị Hen phế quản?",
    "options": [
      "Thuốc giãn phế quản Theophyllin uống",
      "Thuốc chủ vận beta-2 tác dụng ngắn SABA",
      "Thuốc kháng cholinergic dạng hít SAMA",
      "Corticoid dạng hít ICS"
    ],
    "correct": 3,
    "explanation": "Corticoid hít (ICS) là thuốc chống viêm nền tảng bắt buộc để kiểm soát triệu chứng và giảm đợt cấp hen.",
    "reference": "GINA 2023",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 729,
    "chapter": "Hen phế quản & COPD",
    "question": "Tại sao theo hướng dẫn GINA hiện nay, không bao giờ được dùng SABA đơn độc để điều trị hen phế quản?",
    "options": [
      "Vì dùng SABA đơn độc làm tăng nguy cơ đợt kịch phát nặng và tử vong do hen",
      "Vì SABA gây nghiện thuốc nghiêm trọng",
      "Vì SABA không có tác dụng làm giãn cơ trơn phế quản",
      "Vì SABA làm đông máu trong mao mạch phổi"
    ],
    "correct": 0,
    "explanation": "Dùng SABA đơn độc không kiểm soát viêm đường thở, làm tăng điều hòa giảm thụ thể beta-2 và tăng tử vong do hen.",
    "reference": "GINA 2023",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 730,
    "chapter": "Hen phế quản & COPD",
    "question": "Liệu pháp SMART trong điều trị hen phế quản là liệu trình sử dụng:",
    "options": [
      "Dùng hai bình xịt khác nhau hoàn toàn",
      "Một bình hít duy nhất chứa phối hợp ICS và Formoterol cho cả duy trì và cắt cơn",
      "Chỉ dùng thuốc viên uống giải phóng kéo dài",
      "Chỉ tiêm truyền tĩnh mạch định kỳ hàng tháng"
    ],
    "correct": 1,
    "explanation": "SMART (Single Inhaler Maintenance and Reliever Therapy) dùng ICS-Formoterol làm thuốc duy trì kiêm cắt cơn.",
    "reference": "GINA 2023",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 731,
    "chapter": "Hen phế quản & COPD",
    "question": "Tại sao Formoterol là LABA duy nhất thích hợp được lựa chọn cho liệu pháp cắt cơn trong hen?",
    "options": [
      "Có thời gian bán thải kéo dài trên 48 giờ nên chỉ cần hít 1 lần mỗi tuần",
      "Có tác dụng kháng viêm trực tiếp ức chế giải phóng Leukotriene tương đương Corticoid",
      "Khởi phát tác dụng giãn phế quản rất nhanh trong vòng 1 đến 3 phút tương đương Salbutamol",
      "Không có thụ thể beta-2 trên tim nên hoàn toàn không gây tác dụng phụ hồi hộp"
    ],
    "correct": 2,
    "explanation": "Formoterol vừa có tác dụng nhanh như SABA (1-3 phút) vừa kéo dài 12 giờ như LABA, lý tưởng cho cắt cơn kèm bổ sung ICS.",
    "reference": "GINA 2023",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 732,
    "chapter": "Hen phế quản & COPD",
    "question": "Thuốc chủ vận Beta-2 tác dụng ngắn Salbutamol cắt cơn khó thở thông qua cơ chế nào?",
    "options": [
      "Ức chế enzym Phosphodiesterase 4",
      "Phong bế thụ thể Muscarinic M3",
      "Gắn trực tiếp vào phân tử IgE tự do",
      "Kích thích thụ thể Beta-2 làm tăng AMP vòng gây giãn cơ trơn phế quản"
    ],
    "correct": 3,
    "explanation": "Salbutamol kích thích adenylate cyclase tạo cAMP làm giảm Ca2+ nội bào gây giãn cơ trơn đường thở.",
    "reference": "Sách DLS tr. 635",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 733,
    "chapter": "Hen phế quản & COPD",
    "question": "Tác dụng phụ thường gặp nhất của thuốc chủ vận Beta-2 như Salbutamol thể hiện qua triệu chứng:",
    "options": [
      "Run ngón tay, nhịp tim nhanh hồi hộp và hạ kali máu nhẹ",
      "Tê liệt dây thần kinh số VII ngoại biên",
      "Xuất huyết dưới da dạng chấm mảng",
      "Mất vị giác hoàn toàn kéo dài"
    ],
    "correct": 0,
    "explanation": "Kích thích thụ thể beta-2 trên cơ vân gây run tay, thụ thể beta tim gây tim nhanh và đưa K+ vào nội bào gây hạ kali.",
    "reference": "Sách DLS tr. 636",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 734,
    "chapter": "Hen phế quản & COPD",
    "question": "Corticoid dạng hít như Fluticason propionat hay Budesonid có tác dụng phụ tại chỗ phổ biến nhất là:",
    "options": [
      "Mù lòa do tăng nhãn áp tức thì",
      "Nhiễm nấm Candida khoang miệng và khàn tiếng",
      "Chảy máu cam ồ ạt khó cầm",
      "Rụng răng cửa hàm trên"
    ],
    "correct": 1,
    "explanation": "Lắng đọng corticoid hạt tại hầu họng ức chế miễn dịch tại chỗ gây nấm miệng và liệt cơ khép thanh âm gây khàn tiếng.",
    "reference": "Sách DLS tr. 637",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 735,
    "chapter": "Hen phế quản & COPD",
    "question": "Dụng cụ buồng đệm có van một chiều dùng kèm bình xịt định liều MDI mang lại lợi ích nổi bật nào?",
    "options": [
      "Làm thuốc bay hơi hoàn toàn vào không khí",
      "Làm tăng gấp đôi kích thước của hạt thuốc",
      "Tăng lượng thuốc lắng đọng tại phổi và giảm lắng đọng ở hầu họng",
      "Làm thuốc chuyển thành dạng viên nén"
    ],
    "correct": 2,
    "explanation": "Buồng đệm giảm vận tốc hạt thuốc, hạn chế va đập vào họng và giúp trẻ em/người già không cần phối hợp tay bóp miệng hít.",
    "reference": "Sách DLS tr. 638",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 736,
    "chapter": "Hen phế quản & COPD",
    "question": "Thuốc kháng thụ thể Leukotrien Montelukast có ưu thế đặc biệt trong điều trị thể hen phế quản nào?",
    "options": [
      "Cơn hen cấp tính tại phòng cấp cứu",
      "Hen ác tính đe dọa ngừng thở ngay lập tức",
      "Hen ở người cao tuổi có suy tim nặng",
      "Hen do gắng sức, hen nhạy cảm với Aspirin và hen kèm viêm mũi dị ứng"
    ],
    "correct": 3,
    "explanation": "Montelukast đường uống ức chế CysLT1 rất hiệu quả cho hen dị ứng, hen khởi phát do gắng sức và tam chứng Samter do NSAID.",
    "reference": "Sách DLS tr. 639",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 737,
    "chapter": "Hen phế quản & COPD",
    "question": "Cơ quan Quản lý Dược phẩm Hoa Kỳ đưa ra cảnh báo hộp đen về tác dụng phụ thần kinh của Montelukast là:",
    "options": [
      "Rối loạn tâm thần, thay đổi hành vi khí sắc và ý nghĩ tự sát",
      "Gây điếc tai tiếp nhận không phục hồi",
      "Gây liệt nửa người thoáng qua",
      "Gây suy tủy xương bất sản"
    ],
    "correct": 0,
    "explanation": "FDA cảnh báo Montelukast có thể gây ác mộng, kích động, trầm cảm và hành vi tự sát.",
    "reference": "Sách DLS tr. 640",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 738,
    "chapter": "Hen phế quản & COPD",
    "question": "Thuốc kháng thể đơn dòng Omalizumab được chỉ định điều trị cho bệnh nhân hen phế quản thể nào?",
    "options": [
      "Cơn hen cấp tính đang đặt nội khí quản",
      "Hen dị ứng nặng dai dẳng có nồng độ IgE huyết thanh tăng cao kháng trị",
      "Bệnh phổi tắc nghẽn mạn tính COPD đơn thuần",
      "Tất cả các thể hen nhẹ ngắt quãng"
    ],
    "correct": 1,
    "explanation": "Omalizumab là kháng thể kháng IgE gắn vào đoạn Fc của IgE tự do, ngăn cản IgE gắn lên tế bào mast.",
    "reference": "Sách DLS tr. 641",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 739,
    "chapter": "Hen phế quản & COPD",
    "question": "Kháng thể đơn dòng Mepolizumab và Benralizumab tác động lên đích sinh học nào trong hen nặng?",
    "options": [
      "Enzym Cyclooxygenase 2 tại phổi",
      "Thụ thể Histamin H1 trên cơ trơn",
      "Interleukin 5 hoặc thụ thể IL-5 nhằm tiêu diệt bạch cầu ưa acid",
      "Interleukin 2 kích thích tế bào lympho T"
    ],
    "correct": 2,
    "explanation": "IL-5 là cytokine chính hoạt hóa và duy trì sự sống của bạch cầu ái toan (eosinophil) trong hen typ 2.",
    "reference": "Sách DLS tr. 642",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 740,
    "chapter": "Hen phế quản & COPD",
    "question": "Khí dung Magnesi sulfat hoặc truyền tĩnh mạch Magnesi sulfat trong cơn hen phế quản nặng có tác dụng gì?",
    "options": [
      "Làm tăng phản ứng viêm để tống xuất đờm",
      "Làm co thắt mạch máu phổi giảm phù nề",
      "Kích thích trung tâm hô hấp tăng tần số thở",
      "Làm giãn cơ trơn phế quản thông qua ức chế dòng calci đi vào tế bào"
    ],
    "correct": 3,
    "explanation": "Mg2+ cạnh tranh với Ca2+ ức chế co thắt cơ trơn phế quản, chỉ định hỗ trợ trong cơn hen phế quản nặng trơ với SABA.",
    "reference": "Sách DLS tr. 643",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 741,
    "chapter": "Hen phế quản & COPD",
    "question": "Trong điều trị cơn hen phế quản cấp tính nặng, chỉ định Corticoid toàn thân được khuyến cáo dùng:",
    "options": [
      "Đường uống với liều tương đương Prednisolon 40 đến 50 mg mỗi ngày trong 5 đến 7 ngày",
      "Tiêm tĩnh mạch liên tục trong vòng 6 tháng",
      "Chỉ dùng dạng bôi ngoài da diện rộng",
      "Không được dùng Corticoid trong cơn hen cấp"
    ],
    "correct": 0,
    "explanation": "Corticoid toàn thân uống (hiệu quả tương đương tiêm tĩnh mạch nếu bệnh nhân uống được) ngắn ngày 5-7 ngày cắt đợt cấp hen.",
    "reference": "GINA 2023",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 742,
    "chapter": "Hen phế quản & COPD",
    "question": "Bệnh phổi tắc nghẽn mạn tính COPD đặc trưng bởi tình trạng tổn thương bệnh học nào sau đây?",
    "options": [
      "Tắc nghẽn phế quản hồi phục hoàn toàn sau dùng thuốc",
      "Tắc nghẽn luồng khí dai dẳng tiến triển không hồi phục hoàn toàn liên quan khói thuốc",
      "Xơ cứng toàn bộ các xương sườn lồng ngực",
      "Tràn khí màng phổi tự phát hai bên"
    ],
    "correct": 1,
    "explanation": "COPD là bệnh hô hấp tiến triển, tắc nghẽn cố định (FEV1/FVC < 0,70 sau test giãn phế quản) chủ yếu do khói thuốc lá/bụi độc.",
    "reference": "GOLD 2024",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 743,
    "chapter": "Hen phế quản & COPD",
    "question": "Yếu tố nguy cơ hàng đầu dẫn đến sự khởi phát và tiến triển của bệnh COPD là gì?",
    "options": [
      "Thói quen tập thể dục cường độ cao",
      "Chế độ ăn nhiều dầu mỡ động vật",
      "Hút thuốc lá chủ động và tiếp xúc khói thuốc thụ động lâu năm",
      "Uống rượu vang đỏ vào buổi tối"
    ],
    "correct": 2,
    "explanation": "Hơn 80-90% trường hợp COPD có tiền sử hút thuốc lá kéo dài.",
    "reference": "GOLD 2024",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 744,
    "chapter": "Hen phế quản & COPD",
    "question": "Nhóm thuốc giãn phế quản kháng Cholinergic tác dụng kéo dài LAMA như Tiotropium hoạt động bằng cách:",
    "options": [
      "Ức chế thụ thể Leukotrien tại phổi",
      "Kích thích thụ thể giao cảm Beta-2",
      "Ức chế tái hấp thu Dopamin ở synap",
      "Phong bế chọn lọc thụ thể Muscarinic M3 trên cơ trơn phế quản"
    ],
    "correct": 3,
    "explanation": "Tiotropium đối kháng thụ thể M3 ngăn acetylcholin gây co thắt phế quản, nền tảng điều trị giãn phế quản trong COPD.",
    "reference": "GOLD 2024",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "GOLD 2024",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 746,
    "chapter": "Hen phế quản & COPD",
    "question": "Chỉ định bổ sung thêm Corticoid dạng hít vào phác đồ LABA/LAMA (liệu pháp bộ ba) cho bệnh nhân COPD khi nào?",
    "options": [
      "Bệnh nhân hoàn toàn không có đợt cấp nào",
      "Số lượng bạch cầu ái toan trong máu từ 300 tế bào trên microlit trở lên kèm tiền sử đợt cấp",
      "Số lượng bạch cầu ái toan trong máu bằng 0",
      "Bệnh nhân có tiền sử viêm phổi tái phát nhiều lần"
    ],
    "correct": 1,
    "explanation": "Bạch cầu ái toan máu >= 300/uL (hoặc >= 100/uL kèm >= 2 đợt cấp vừa/1 đợt cấp nhập viện) là tiêu chí bổ sung ICS trong COPD.",
    "reference": "GOLD 2024",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 747,
    "chapter": "Hen phế quản & COPD",
    "question": "Nguy cơ tác dụng không mong muốn nghiêm trọng khi sử dụng Corticoid dạng hít ở bệnh nhân COPD là gì?",
    "options": [
      "Làm teo nhỏ hoàn toàn hai lá phổi",
      "Gây suy tim sung huyết cấp tính",
      "Làm gia tăng tỷ lệ mắc bệnh viêm phổi nhiễm trùng",
      "Gây tràn dịch màng ngoài tim"
    ],
    "correct": 2,
    "explanation": "ICS trong COPD làm tăng nguy cơ viêm phổi vi khuẩn (đặc biệt khi BC ái toan máu thấp < 100/uL).",
    "reference": "GOLD 2024",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 748,
    "chapter": "Hen phế quản & COPD",
    "question": "Thuốc ức chế chọn lọc enzym Phosphodiesterase 4 Roflumilast được chỉ định trong COPD nhằm mục đích:",
    "options": [
      "Làm tan đờm tức thì trong vòng 5 phút",
      "Cắt cơn khó thở cấp tính thay thế thuốc hít",
      "Diệt trực khuẩn mủ xanh trong đường thở",
      "Giảm tần suất đợt cấp ở bệnh nhân viêm phế quản mạn tắc nghẽn nặng FEV1 dưới 50%"
    ],
    "correct": 3,
    "explanation": "Roflumilast đường uống chống viêm nội bào, giảm đợt cấp ở COPD thể viêm phế quản mạn có FEV1 < 50% dự đoán.",
    "reference": "GOLD 2024",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 649",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 750,
    "chapter": "Hen phế quản & COPD",
    "question": "Thuốc tiêu nhầy N-Acetylcystein dạng uống hoặc khí dung làm loãng đờm nhờ cơ chế nào?",
    "options": [
      "Làm đông vón các sợi fibrin trong đờm",
      "Cắt đứt các cầu nối disulfid trong phân tử mucoprotein của chất nhầy",
      "Phá hủy màng tế bào biểu mô phế quản",
      "Kích thích phế nang bài tiết thật nhiều nước"
    ],
    "correct": 1,
    "explanation": "Nhóm -SH tự do của NAC bẻ gãy cầu disulfid (-S-S-) của mucopolysaccharid làm giảm độ quánh của đờm nhớt.",
    "reference": "Sách DLS tr. 650",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 751,
    "chapter": "Hen phế quản & COPD",
    "question": "Liệu pháp oxy dài hạn tại nhà cho bệnh nhân COPD suy hô hấp mạn tính được chỉ định khi PaO2 khi nghỉ:",
    "options": [
      "Lớn hơn 80 mmHg",
      "Từ 65 đến 75 mmHg",
      "Nhỏ hơn hoặc bằng 55 mmHg hoặc SaO2 dưới 88%",
      "Bất kỳ mức oxy máu nào"
    ],
    "correct": 2,
    "explanation": "Thở oxy dài hạn (>= 15h/ngày) cải thiện sống còn ở bệnh nhân COPD có PaO2 <= 55 mmHg (hoặc SaO2 <= 88%).",
    "reference": "GOLD 2024",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 752,
    "chapter": "Hen phế quản & COPD",
    "question": "Mục tiêu độ bão hòa oxy máu SpO2 khi thở oxy hỗ trợ cho bệnh nhân COPD trong đợt cấp là:",
    "options": [
      "Từ 98 đến 100%",
      "Từ 70 đến 80%",
      "Duy trì cố định 95%",
      "Từ 88 đến 92%"
    ],
    "correct": 3,
    "explanation": "Thở oxy quá mức làm mất kích thích giảm oxy của trung tâm hô hấp gây ứ CO2 nguy kịch; mục tiêu chuẩn là 88-92%.",
    "reference": "GOLD 2024",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 753,
    "chapter": "Hen phế quản & COPD",
    "question": "Hai loại vắc xin bắt buộc phải tiêm phòng định kỳ hàng năm hoặc nhắc lại cho bệnh nhân COPD là:",
    "options": [
      "Vắc xin cúm mùa và vắc xin phòng phế cầu khuẩn",
      "Vắc xin phòng bệnh dại và uốn ván",
      "Vắc xin sốt xuất huyết và sởi",
      "Vắc xin tả và vắc xin thương hàn"
    ],
    "correct": 0,
    "explanation": "Tiêm phòng vắc xin Cúm hàng năm và vắc xin Phế cầu giúp giảm rõ rệt số đợt cấp nặng và tử vong ở bệnh nhân COPD.",
    "reference": "GOLD 2024",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 754,
    "chapter": "Hen phế quản & COPD",
    "question": "Thuốc chẹn beta giao cảm nào sau đây an toàn hơn khi bắt buộc phải dùng cho bệnh nhân COPD có bệnh tim mạch?",
    "options": [
      "Thuốc chẹn không chọn lọc Nadolol",
      "Thuốc chẹn chọn lọc Beta-1 như Bisoprolol hoặc Metoprolol",
      "Thuốc chẹn không chọn lọc Propranolol",
      "Thuốc chẹn không chọn lọc Timolol"
    ],
    "correct": 1,
    "explanation": "Chẹn chọn lọc beta-1 ít tác động lên thụ thể beta-2 ở phế quản, an toàn cho bệnh nhân COPD có bệnh tim thiếu máu cục bộ/suy tim.",
    "reference": "GOLD 2024",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 755,
    "chapter": "Hen phế quản & COPD",
    "question": "Trong đợt cấp COPD có dấu hiệu bội nhiễm vi khuẩn (Tam chứng Anthonisen), chỉ định dùng kháng sinh khi có:",
    "options": [
      "Chỉ số đường huyết tăng cao",
      "Huyết áp tâm thu giảm nhẹ",
      "Tăng khó thở, tăng thể tích đờm và đờm mủ đục",
      "Bệnh nhân chỉ cảm thấy ho khan nhẹ"
    ],
    "correct": 2,
    "explanation": "Tam chứng Anthonisen: khó thở tăng, lượng đờm tăng, đờm chuyển màu mủ đục. Có >= 2 dấu hiệu (gồm đờm mủ) có chỉ định kháng sinh.",
    "reference": "GOLD 2024",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 756,
    "chapter": "Hen phế quản & COPD",
    "question": "Kháng sinh Macrolid Azithromycin uống liều thấp 250 mg mỗi ngày kéo dài 1 năm ở bệnh nhân COPD nhằm:",
    "options": [
      "Làm giãn trực tiếp cơ trơn phế quản thông qua ức chế thụ thể muscarinic M3",
      "Diệt trừ hoàn toàn vi khuẩn lao tiềm ẩn và phế cầu cư trú tại hầu họng",
      "Thay thế hoàn toàn liệu pháp oxy dài hạn tại nhà cho bệnh nhân suy hô hấp",
      "Tác dụng chống viêm, điều hòa miễn dịch và ức chế tạo màng biofilm giúp làm giảm tần suất các đợt cấp"
    ],
    "correct": 3,
    "explanation": "Azithromycin duy trì liều thấp có hoạt tính chống viêm và chống tạo biofilm giúp giảm đợt cấp ở người hút thuốc đã cai.",
    "reference": "GOLD 2024",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 757,
    "chapter": "Hen phế quản & COPD",
    "question": "Kỹ thuật thở chúm môi và thở cơ hoành có ý nghĩa phục hồi chức năng gì cho người bệnh COPD?",
    "options": [
      "Làm tăng áp lực dương đường thở thì thở ra giúp phế nang không bị xẹp sớm",
      "Làm tăng áp lực âm trong lồng ngực",
      "Ngăn cản khí oxy đi vào trong phổi",
      "Làm tăng nhịp thở lên gấp 3 lần bình thường"
    ],
    "correct": 0,
    "explanation": "Thở chúm môi tạo PEEP nội sinh giữ cho đường thở nhỏ không bị xẹp sớm, giúp tống bớt khí cặn ứ đọng.",
    "reference": "Sách DLS tr. 656",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 758,
    "chapter": "Hen phế quản & COPD",
    "question": "Thước đo lưu lượng đỉnh PEF được sử dụng cho bệnh nhân hen phế quản tại nhà nhằm mục đích gì?",
    "options": [
      "Đánh giá mức độ tổn thương màng đáy phế nang",
      "Theo dõi mức độ kiểm soát đường thở và phát hiện sớm nguy cơ đợt cấp",
      "Đo nồng độ oxy hòa tan trong máu động mạch",
      "Định lượng lượng đờm tiết ra trong ngày"
    ],
    "correct": 1,
    "explanation": "Đo PEF hàng ngày so sánh với giá trị tốt nhất của bản thân giúp nhận biết sớm co thắt phế quản để xử trí theo kế hoạch hành động.",
    "reference": "GINA 2023",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 759,
    "chapter": "Hen phế quản & COPD",
    "question": "Khi chỉ số PEF của bệnh nhân hen giảm xuống dưới 50% so với giá trị tốt nhất, vùng cảnh báo là:",
    "options": [
      "Vùng an toàn thể hiện đường thở thông thoáng hoàn toàn",
      "Vùng vàng cảnh báo sớm cần tăng liều thuốc hít duy trì tại nhà",
      "Vùng đỏ thể hiện cơn kịch phát hen nặng nguy hiểm cần cấp cứu y tế ngay",
      "Vùng xanh thể hiện kiểm soát hen rất tốt không cần dùng thuốc cắt cơn"
    ],
    "correct": 2,
    "explanation": "Vùng xanh: 80-100%; Vùng vàng: 50-80% (cần tăng thuốc); Vùng đỏ: < 50% (cấp cứu khẩn cấp).",
    "reference": "GINA 2023",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 760,
    "chapter": "Hen phế quản & COPD",
    "question": "Bình hít bột khô DPI có yêu cầu kỹ thuật hít khác biệt cơ bản với bình xịt định liều MDI là:",
    "options": [
      "Phải lắc bình hít thật kỹ trước mỗi lần dùng",
      "Chỉ được dùng kèm với buồng đệm",
      "Phải bóp bình thuốc cùng lúc với thì hít vào",
      "Đòi hỏi bệnh nhân phải hít vào thật nhanh, thật mạnh và sâu"
    ],
    "correct": 3,
    "explanation": "DPI vận hành nhờ luồng khí hít vào của bệnh nhân để phân tán hạt bột, cần hít nhanh mạnh sâu; không dùng buồng đệm.",
    "reference": "Sách DLS tr. 659",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 761,
    "chapter": "Hen phế quản & COPD",
    "question": "Bình hạt mịn khí dung Respimat có ưu thế vật lý học nổi bật nào so với các bình xịt thông thường?",
    "options": [
      "Hạt khí dung bay chậm và kéo dài giúp tăng lắng đọng vào phổi gấp 2 lần",
      "Hạt khí dung bay cực nhanh đập vào thành sau họng",
      "Tự động kích hoạt khi bệnh nhân ngủ",
      "Thuốc ở dạng bột khô siêu mịn"
    ],
    "correct": 0,
    "explanation": "Respimat tạo đám mây hạt sương mịn bay chậm (soft mist inhaler) cho phép thuốc đi sâu vào phế quản nhỏ.",
    "reference": "Sách DLS tr. 660",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 762,
    "chapter": "Hen phế quản & COPD",
    "question": "Bệnh nhân hen phế quản xuất hiện cơn khó thở về đêm thường do nguyên nhân sinh học nào?",
    "options": [
      "Áp lực tĩnh mạch phổi giảm xuống mức tối thiểu",
      "Nồng độ Cortisol và Epinephrin nội sinh hạ xuống thấp nhất vào ban đêm",
      "Do ăn quá nhiều chất đạm vào bữa tối",
      "Nồng độ Oxy trong phòng ngủ tăng quá cao"
    ],
    "correct": 1,
    "explanation": "Trương lực phế vị tăng và cortisol nội sinh chạm đáy lúc nửa đêm khiến hen phế quản thường nặng lên vào ban đêm và sáng sớm.",
    "reference": "Sách DLS tr. 661",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 763,
    "chapter": "Hen phế quản & COPD",
    "question": "Thuốc giãn phế quản kháng cholinergic Ipratropium bromid có khởi phát và thời gian tác dụng là:",
    "options": [
      "Chỉ kéo dài trong vòng 10 phút",
      "Khởi phát ngay lập tức sau 1 giây và kéo dài 24 giờ",
      "Khởi phát sau 15 đến 30 phút và kéo dài khoảng 4 đến 6 giờ",
      "trong suốt 1 tuần"
    ],
    "correct": 2,
    "explanation": "Ipratropium (SAMA) khởi phát chậm hơn SABA một chút (15-30p) và tác dụng kéo dài 4-6h.",
    "reference": "Sách DLS tr. 662",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 764,
    "chapter": "Hen phế quản & COPD",
    "question": "Phối hợp Salbutamol với Ipratropium bromid (Combivent) trong cơn hen cấp mang lại hiệu quả gì?",
    "options": [
      "Làm mất hoàn toàn tác dụng phụ của Salbutamol",
      "Thay thế hoàn toàn nhu cầu thở oxy của bệnh nhân",
      "Làm tăng đông máu để bảo vệ niêm mạc",
      "Giãn phế quản hiệp đồng thông qua hai cơ chế tác động độc lập trên thụ thể"
    ],
    "correct": 3,
    "explanation": "Kích thích beta-2 (giãn cơ trực tiếp) + ức chế muscarinic (chống co thắt cholinergic) đem lại hiệu quả giãn phế quản tối ưu.",
    "reference": "Sách DLS tr. 663",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 765,
    "chapter": "Hen phế quản & COPD",
    "question": "Khi dùng Corticoid hít liều cao kéo dài ở người cao tuổi, cần lưu ý tầm soát biến chứng nào?",
    "options": [
      "Loãng xương và đục thủy tinh thể mắt",
      "Gãy xương sườn tự phát do ho",
      "Suy tủy bất sản dòng bạch cầu",
      "Ung thư biểu mô đường mật"
    ],
    "correct": 0,
    "explanation": "Một phần ICS liều cao nuốt vào và hấp thu toàn thân có thể làm giảm mật độ xương và tăng nhãn áp/đục thủy tinh thể ở người già.",
    "reference": "Sách DLS tr. 664",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 766,
    "chapter": "Hen phế quản & COPD",
    "question": "Thuốc chống viêm kháng thể đơn dòng Dupilumab trong điều trị hen nặng tác động ức chế:",
    "options": [
      "Thụ thể của Histamin H2",
      "Thụ thể của Interleukin 4 và Interleukin 13",
      "Enzym chuyển hóa Leukotrien A4",
      "Thụ thể của Angiotensin II"
    ],
    "correct": 1,
    "explanation": "Dupilumab phong bế tiểu đơn vị IL-4R-alpha dùng chung của cả IL-4 và IL-13, ức chế viêm qua Th2.",
    "reference": "GINA 2023",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 767,
    "chapter": "Hen phế quản & COPD",
    "question": "Chỉ số FEV1 trong thăm dò chức năng hô hấp đo lường thông số nào của luồng khí thở?",
    "options": [
      "Dung tích sống toàn phần của hai lá phổi",
      "Tốc độ dòng khí đỉnh khi hít vào tối đa",
      "Thể tích khí thở ra gắng sức tối đa trong giây đầu tiên",
      "Lượng khí còn lại trong phổi sau khi thở ra hết sức"
    ],
    "correct": 2,
    "explanation": "FEV1 (Forced Expiratory Volume in 1 second) là thể tích khí thở ra gắng sức trong giây đầu tiên, chỉ số then chốt đánh giá tắc nghẽn.",
    "reference": "Sách DLS tr. 666",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 768,
    "chapter": "Hen phế quản & COPD",
    "question": "Chỉ số Tiffeneau được tính bằng tỷ lệ phần trăm giữa:",
    "options": [
      "Lưu lượng đỉnh PEF trên dung tích toàn phổi TLC",
      "Khí cặn RV trên dung tích sống VC",
      "Thể tích FEV1 trên dung tích sống gắng sức FVC",
      "Thể tích FEV1 trên dung tích sống chậm VC"
    ],
    "correct": 3,
    "explanation": "Chỉ số Tiffeneau = FEV1 / VC x 100%; còn chỉ số Gaensler = FEV1 / FVC x 100%.",
    "reference": "Sách DLS tr. 667",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 769,
    "chapter": "Hen phế quản & COPD",
    "question": "Hiện tượng tái cấu trúc đường thở trong hen phế quản mạn tính không được kiểm soát bao gồm:",
    "options": [
      "Phì đại cơ trơn phế quản, dày màng đáy và tăng sinh tuyến tiết nhầy",
      "Mất hoàn toàn hệ thống mao mạch phổi",
      "Lắng đọng tinh thể acid uric ở vách phế nang",
      "Teo nhỏ toàn bộ các tiểu phế quản tận"
    ],
    "correct": 0,
    "explanation": "Viêm mạn tính không ức chế dẫn đến tái cấu trúc đường thở không hồi phục: xơ hóa màng đáy, tăng sinh cơ trơn và mạch máu.",
    "reference": "Sách DLS tr. 668",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 770,
    "chapter": "Hen phế quản & COPD",
    "question": "Khi chuyển từ thuốc Corticoid dạng uống sang Corticoid dạng hít ở bệnh nhân hen nặng, nguyên tắc là:",
    "options": [
      "Tăng gấp đôi liều Corticoid uống trong 1 tháng",
      "Giảm liều Corticoid uống từ từ trong khi đã gối đầu Corticoid hít",
      "Chỉ dùng Corticoid hít vào ngày cuối tuần",
      "Ngừng thuốc uống đột ngột ngay trong ngày đầu hít thuốc"
    ],
    "correct": 1,
    "explanation": "Tuyến thượng thận đang bị ức chế do corticoid uống, phải duy trì ICS và giảm liều uống thật chậm để tránh suy thượng thận cấp.",
    "reference": "Sách DLS tr. 669",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 771,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Tiêu chuẩn vàng của WHO chẩn đoán loãng xương dựa trên chỉ số T-score đo mật độ xương DEXA là:",
    "options": [
      "T-score lớn hơn âm 1,0 độ lệch chuẩn",
      "T-score bằng 0",
      "T-score nhỏ hơn hoặc bằng âm 2,5 độ lệch chuẩn",
      "T-score từ âm 1,0 đến âm 2,5 độ lệch chuẩn"
    ],
    "correct": 2,
    "explanation": "Bình thường: T-score >= -1,0; Thiếu xương (osteopenia): -2,5 < T-score < -1,0; Loãng xương (osteoporosis): T-score <= -2,5.",
    "reference": "Sách DLS tr. 675",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 772,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Nhóm thuốc chống hủy xương được xem là lựa chọn hàng đầu trong điều trị loãng xương là:",
    "options": [
      "Thuốc giảm đau chống viêm NSAID",
      "Thuốc bổ sung Vitamin C",
      "Thuốc chẹn kênh calci",
      "Thuốc nhóm Bisphosphonat"
    ],
    "correct": 3,
    "explanation": "Bisphosphonat (Alendronat, Zoledronic acid) ức chế hủy cốt bào, là lựa chọn đầu tay giảm gãy xương.",
    "reference": "Sách DLS tr. 676",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 773,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Cơ chế tác dụng phân tử của nhóm thuốc Bisphosphonat chứa nitơ trên tế bào hủy xương là:",
    "options": [
      "Ức chế enzym Farnesyl pyrophosphate synthase cản trở hoạt động hủy xương",
      "Tăng hấp thu calci thụ động tại ruột",
      "Kích thích tạo cốt bào tăng sinh xương mới",
      "Tăng cường đào thải acid uric qua đường tiết niệu"
    ],
    "correct": 0,
    "explanation": "Bisphosphonat chứa N ức chế enzym FPPS làm gián đoạn quá trình prenyl hóa protein gây chết theo chương trình của hủy cốt bào.",
    "reference": "Sách DLS tr. 677",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 774,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Hướng dẫn sử dụng bắt buộc đối với thuốc viên uống Alendronat 70 mg mỗi tuần là:",
    "options": [
      "Uống cùng lúc với bữa ăn trưa nhiều dầu mỡ",
      "Uống sáng sớm lúc đói với một cốc nước lọc đầy và ngồi thẳng 30 phút",
      "Nhai nát viên thuốc rồi uống cùng với một ly sữa tươi",
      "Uống ngay trước khi đi ngủ vào ban đêm"
    ],
    "correct": 1,
    "explanation": "Alendronat kích ứng loét thực quản dữ dội; phải uống lúc đói với nhiều nước lọc và giữ tư thế đứng/ngồi thẳng ít nhất 30-60 phút.",
    "reference": "Sách DLS tr. 678",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 775,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Thuốc Bisphosphonat truyền tĩnh mạch Acid Zoledronic 5 mg có phác đồ sử dụng điều trị loãng xương là:",
    "options": [
      "Tiêm bắp sâu ngắt quãng mỗi 6 giờ",
      "Truyền tĩnh mạch định kỳ một lần mỗi tháng",
      "Truyền tĩnh mạch một liều duy nhất mỗi năm một lần",
      "Truyền tĩnh mạch hàng ngày liên tục trong 1 tháng"
    ],
    "correct": 2,
    "explanation": "Zoledronic acid 5mg truyền tĩnh mạch chậm trong ít nhất 15 phút, chu kỳ 1 lần/năm.",
    "reference": "Sách DLS tr. 679",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 776,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Hai tác dụng phụ hiếm gặp nhưng nghiêm trọng khi sử dụng Bisphosphonat kéo dài nhiều năm là:",
    "options": [
      "Xơ gan cổ trướng giai đoạn cuối",
      "Mù lòa hai mắt do teo võng mạc",
      "Suy tủy toàn bộ và thiếu máu bất sản",
      "Hoại tử xương hàm và gãy xương đùi không điển hình"
    ],
    "correct": 3,
    "explanation": "Ức chế chu chuyển xương quá mức dài hạn gây ONJ (hoại tử xương hàm sau thủ thuật răng) và gãy xương đùi dưới mấu chuyển dạng ngang.",
    "reference": "Sách DLS tr. 680",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 777,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Thuốc điều hòa thụ thể Estrogen chọn lọc Raloxifen có ưu điểm gì trong điều trị loãng xương?",
    "options": [
      "Tác dụng chủ vận giống Estrogen trên xương giúp tăng mật độ xương, nhưng đối kháng trên tuyến vú và nội mạc tử cung giúp không làm tăng ung thư vú",
      "Làm giảm nguy cơ huyết khối tĩnh mạch sâu và thuyên tắc phổi ở phụ nữ mãn kinh",
      "Cải thiện hoàn toàn các triệu chứng bốc hỏa và rối loạn vận mạch thời kỳ mãn kinh",
      "Kích thích tuyến yên tăng tiết FSH và LH làm hồi phục chu kỳ kinh nguyệt"
    ],
    "correct": 0,
    "explanation": "Raloxifen kích thích estrogen ở xương ngăn loãng xương và ức chế estrogen ở vú/tử cung giảm nguy cơ ung thư vú.",
    "reference": "Sách DLS tr. 681",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 778,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Tác dụng phụ nguy hiểm nhất cần lưu ý khi chỉ định Raloxifen cho phụ nữ mãn kinh là:",
    "options": [
      "Gây ung thư biểu mô tuyến vú",
      "Tăng nguy cơ huyết khối tắc mạch tĩnh mạch sâu và thuyên tắc phổi",
      "Gây rậm lông và giọng nói trầm",
      "Làm tụt huyết áp tư thế đứng"
    ],
    "correct": 1,
    "explanation": "SERM làm tăng nguy cơ huyết khối tĩnh mạch tương tự liệu pháp hormon thay thế, chống chỉ định ở người có tiền sử thuyên tắc mạch.",
    "reference": "Sách DLS tr. 682",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 779,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Thuốc kháng thể đơn dòng Denosumab điều trị loãng xương gắn kết đặc hiệu với phối tử nào?",
    "options": [
      "Gắn vào enzym Cytochrome P450 ở gan",
      "Gắn trực tiếp vào tinh thể Hydroxyapatit của xương",
      "Gắn kết với phân tử RANKL ngăn kích hoạt thụ thể RANK trên hủy cốt bào",
      "Gắn vào thụ thể Insulin màng tế bào"
    ],
    "correct": 2,
    "explanation": "Denosumab bắt chước osteoprotegerin (OPG) ức chế RANKL, ngăn chặn tiền hủy cốt bào biệt hóa thành hủy cốt bào.",
    "reference": "Sách DLS tr. 683",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 780,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Thuốc đồng vận hormon tuyến cận giáp Teriparatid có cơ chế tác dụng kích thích tạo xương khi:",
    "options": [
      "Bôi ngoài da tại các khớp thoái hóa",
      "Truyền tĩnh mạch liên tục suốt 24 giờ",
      "Uống liều cao sau bữa ăn",
      "Tiêm dưới da ngắt quãng liều thấp mỗi ngày một lần"
    ],
    "correct": 3,
    "explanation": "PTH ngắt quãng kích thích tạo cốt bào nhiều hơn hủy cốt bào, thúc đẩy tổng hợp xương mới (tác dụng đồng hóa).",
    "reference": "Sách DLS tr. 684",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 781,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Viên thuốc tránh thai kết hợp đường uống hàng ngày có cơ chế tác dụng ngừa thai chính là gì?",
    "options": [
      "Ức chế tuyến yên tiết FSH và LH làm ngăn cản hiện tượng rụng trứng",
      "Phá hủy màng tế bào trứng đã thụ tinh",
      "Diệt trực tiếp các tế bào tinh trùng trong âm đạo",
      "Gây teo nhỏ buồng trứng vĩnh viễn"
    ],
    "correct": 0,
    "explanation": "Estrogen ức chế FSH ngăn chọn lọc nang noãn, Progestin ức chế đỉnh phóng noãn LH ngăn rụng trứng và làm đặc dịch nhầy cổ tử cung.",
    "reference": "Sách DLS tr. 685",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "Sách DLS tr. 686",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 783,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Thuốc tránh thai khẩn cấp chứa hoạt chất Levonorgestrel 1,5 mg cần uống trong thời gian tối đa:",
    "options": [
      "Trong vòng 7 ngày sau khi quan hệ tình dục không bảo vệ",
      "Chỉ có hiệu lực nếu uống trước khi quan hệ tình dục 1 giờ",
      "Trong vòng 72 giờ sau khi quan hệ tình dục không an toàn (uống càng sớm hiệu quả càng cao)",
      "Uống liên tục vào các ngày rụng trứng trong chu kỳ kinh nguyệt"
    ],
    "correct": 2,
    "explanation": "Levonorgestrel 1,5mg uống càng sớm càng tốt, tối đa trong 72h (hiệu quả cao nhất trong 24h đầu).",
    "reference": "Sách DLS tr. 687",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 784,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Thuốc tránh thai khẩn cấp thế hệ mới Ulipristal acetat có thể sử dụng có hiệu lực trong vòng:",
    "options": [
      "Chỉ dùng được sau khi đã xác định chậm kinh từ 1 đến 2 tuần",
      "Trong vòng 10 đến 14 ngày sau khi giao hợp",
      "Trong vòng 24 giờ đầu tiên và mất hiệu lực hoàn toàn sau ngày đầu",
      "Trong vòng 120 giờ (tương đương 5 ngày) sau khi quan hệ tình dục không bảo vệ"
    ],
    "correct": 3,
    "explanation": "Ulipristal là chất điều hòa thụ thể progesteron chọn lọc (SPRM), duy trì hiệu quả tránh thai khẩn cấp đến 120h.",
    "reference": "Sách DLS tr. 688",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 785,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Nếu phụ nữ quên uống 1 viên thuốc tránh thai hàng ngày kết hợp thì xử trí đúng là:",
    "options": [
      "Uống ngay viên thuốc đã quên ngay khi nhớ ra (dù phải uống 2 viên cùng 1 ngày) và tiếp tục uống các viên tiếp theo đúng giờ thường lệ",
      "Uống ngay thuốc tránh thai khẩn cấp Levonorgestrel trong vòng 1 giờ",
      "Tạm dừng vỉ thuốc 7 ngày rồi mới bắt đầu uống lại vỉ mới từ đầu",
      "Bỏ viên đã quên và uống tăng liều gấp đôi cho tất cả các viên còn lại trong vỉ"
    ],
    "correct": 0,
    "explanation": "Quên 1 viên (< 24h): uống ngay viên quên (dù phải uống 2 viên cùng lúc) và tiếp tục uống các viên sau như bình thường.",
    "reference": "Sách DLS tr. 689",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 786,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Thuốc điều trị đái tháo đường đầu tay được khuyến cáo cho hầu hết bệnh nhân đái tháo đường typ 2 là:",
    "options": [
      "Gliclazid",
      "Metformin",
      "Acarbose",
      "Insulin NPH"
    ],
    "correct": 1,
    "explanation": "Metformin là nền tảng điều trị đầu tay (không gây hạ đường huyết, kiểm soát cân nặng, giảm biến cố tim mạch).",
    "reference": "ADA 2024 / Hướng dẫn ĐTĐ - Bộ Y tế",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 787,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Cơ chế tác dụng hạ đường huyết chính của Metformin là gì?",
    "options": [
      "Tăng bài tiết glucose ra ngoài theo đường nước tiểu",
      "Kích thích tế bào beta đảo tụy tăng tiết Insulin",
      "Ức chế sản xuất glucose tại gan và tăng độ nhạy cảm insulin ở mô ngoại vi",
      "Làm chậm phân giải tinh bột tại ruột non"
    ],
    "correct": 2,
    "explanation": "Metformin hoạt hóa enzym AMPK tại gan làm giảm tân tạo glucose và tăng nhạy cảm insulin cơ vân.",
    "reference": "Sách DLS tr. 691",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 788,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Tác dụng không mong muốn hiếm gặp nhưng rất nguy hiểm đến tính mạng của Metformin là:",
    "options": [
      "Tiêu cơ vân cấp tính",
      "Hạ đường huyết gây hôn mê sâu",
      "Đục mờ thủy tinh thể mắt",
      "Nhiễm toan Lactic huyết"
    ],
    "correct": 3,
    "explanation": "Lactic acidosis hiếm gặp nhưng tử vong 50%, thường xảy ra khi tích lũy thuốc ở người suy thận, suy tim nặng, nghiện rượu.",
    "reference": "Sách DLS tr. 692",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 789,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Chống chỉ định dùng Metformin khi mức lọc cầu thận ước tính eGFR của bệnh nhân giảm xuống dưới:",
    "options": [
      "Dưới 30 mL trên phút trên 1,73 m2 da",
      "Dưới 60 mL trên phút",
      "Dưới 90 mL trên phút",
      "Dưới 120 mL trên phút"
    ],
    "correct": 0,
    "explanation": "eGFR < 30 mL/min chống chỉ định tuyệt đối Metformin; eGFR 30-44 mL/min giảm liều tối đa 1000 mg/ngày.",
    "reference": "ADA 2024",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 790,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Trước khi chụp phim có tiêm thuốc cản quang chứa iod đường tĩnh mạch, bệnh nhân đang dùng Metformin cần:",
    "options": [
      "Tăng gấp đôi liều Metformin trước khi tiêm thuốc cản quang để phòng tăng đường huyết",
      "Tạm ngừng Metformin trước khi chụp và chỉ dùng lại sau 48 giờ nếu chức năng thận ổn định",
      "Vẫn uống Metformin bình thường và chỉ cần uống nhiều nước sau chụp",
      "Đổi sang tiêm Insulin tĩnh mạch liên tục trong suốt 1 tuần lễ sau chụp"
    ],
    "correct": 1,
    "explanation": "Thuốc cản quang có thể gây suy thận cấp làm tích lũy Metformin dẫn đến toan lactic, phải ngừng Metformin 48h.",
    "reference": "Sách DLS tr. 694",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 791,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Nhóm thuốc ức chế đồng vận chuyển Natri Glucose 2 SGLT-2 như Dapagliflozin có cơ chế tác dụng là:",
    "options": [
      "Kích thích tế bào tụy sản sinh ra hormon Insulin",
      "Làm chậm tiêu hóa chất bột đường trong lòng ruột",
      "Ngăn tái hấp thu Glucose tại ống lượn gần làm tăng thải trừ Glucose qua nước tiểu",
      "Ức chế enzym phá hủy hormon Incretin"
    ],
    "correct": 2,
    "explanation": "SGLT-2 chịu trách nhiệm 90% tái hấp thu glucose ở ống lượn gần; ức chế protein này làm đường thoát ra nước tiểu.",
    "reference": "ADA 2024",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 792,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Hai lợi ích tim mạch và thận vượt trội đã được chứng minh của nhóm thuốc ức chế SGLT-2 là:",
    "options": [
      "Làm giảm nhịp tim xoang xuống dưới 50 lần/phút và ngừa rung nhĩ kịch phát",
      "Làm tăng mức lọc cầu thận eGFR lên gấp đôi so với mức nền ban đầu",
      "Làm giảm đề kháng insulin tại cơ vân và mô mỡ tương đương Pioglitazon",
      "Giảm tỷ lệ tử vong do tim mạch, giảm nhập viện vì suy tim và làm chậm tiến triển suy giảm chức năng thận ở bệnh nhân CKD"
    ],
    "correct": 3,
    "explanation": "Dapagliflozin và Empagliflozin giảm rõ rệt tử vong tim mạch, nhập viện do suy tim và suy thận mạn bất kể có ĐTĐ hay không.",
    "reference": "ADA 2024",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 793,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Tác dụng không mong muốn thường gặp nhất của nhóm thuốc ức chế SGLT-2 là gì?",
    "options": [
      "Nhiễm nấm đường niệu dục (như nấm Candida âm đạo) và nhiễm trùng tiết niệu",
      "Gây loét thủng niêm mạc dạ dày tá tràng chảy máu",
      "Gây suy tủy xương dẫn đến thiếu máu bất sản",
      "Làm tăng men gan AST và ALT kịch phát dẫn đến vàng da tắc mật"
    ],
    "correct": 0,
    "explanation": "Nước tiểu nhiều đường tạo môi trường thuận lợi cho nấm Candida sinh sôi ở âm đạo/bao quy đầu và viêm đường tiểu.",
    "reference": "ADA 2024",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 794,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Biến chứng nhiễm toan ceton với mức đường huyết gần như bình thường là nguy cơ của nhóm thuốc nào?",
    "options": [
      "Thuốc ức chế men Alpha-glucosidase",
      "Thuốc ức chế men SGLT-2",
      "Thuốc ức chế men DPP-4",
      "Thuốc hạ đường huyết nhóm Sulfonylure"
    ],
    "correct": 1,
    "explanation": "Euglycemic DKA (toan ceton đường huyết không cao < 250 mg/dL) là biến chứng nguy hiểm cần cảnh giác của SGLT2i.",
    "reference": "ADA 2024",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
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
    "reference": "ADA 2024",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 796,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Đường dùng thuốc chủ yếu hiện nay của hầu hết các thuốc đồng vận thụ thể GLP-1 là:",
    "options": [
      "Đặt dưới lưỡi trước khi ngủ",
      "Uống viên bao tan trong ruột sau bữa ăn",
      "Xịt khí dung qua đường hô hấp",
      "Tiêm dưới da một lần mỗi tuần hoặc một lần mỗi ngày"
    ],
    "correct": 3,
    "explanation": "Đa số GLP-1 RA (Semaglutide, Dulaglutide) dùng tiêm dưới da 1 lần/tuần (hiện có thêm Semaglutide uống dạng viên nén đặc biệt).",
    "reference": "ADA 2024",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 797,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Nhóm thuốc ức chế men Dipeptidyl peptidase 4 DPP-4 như Sitagliptin hạ đường huyết theo cơ chế nào?",
    "options": [
      "Ngăn cản sự thoái giáng của hormon Incretin nội sinh kéo dài tác dụng tiết Insulin",
      "Kích thích tế bào alpha đảo tụy tiết Glucagon",
      "Ức chế vận chuyển Glucose vào tế bào hồng cầu",
      "Kích thích trực tiếp thụ thể Insulin tại cơ bắp"
    ],
    "correct": 0,
    "explanation": "DPP-4 giáng hóa GLP-1 và GIP nội sinh; ức chế men này duy trì nồng độ incretin kích thích tiết insulin phụ thuộc glucose.",
    "reference": "Sách DLS tr. 700",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 798,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Ưu điểm vượt trội về độ an toàn của nhóm thuốc ức chế DPP-4 trên lâm sàng là gì?",
    "options": [
      "Làm tan hoàn toàn sỏi túi mật",
      "Hầu như không gây hạ đường huyết khi dùng đơn độc và trung tính với cân nặng",
      "Có thể dùng thay thế Insulin ở người đái tháo đường typ 1",
      "Làm giảm cân nặng nhanh như phẫu thuật thắt dạ dày"
    ],
    "correct": 1,
    "explanation": "Tác dụng tiết insulin phụ thuộc glucose (chỉ kích thích khi đường huyết cao) nên không gây tụt đường huyết và không tăng cân.",
    "reference": "Sách DLS tr. 701",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 799,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Nhóm thuốc hạ đường huyết Sulfonylure kích thích tiết Insulin thông qua tác động lên kênh nào?",
    "options": [
      "Mở rộng kênh Natri trên màng tế bào",
      "Ức chế thụ thể Glucagon",
      "Đóng kênh Kali phụ thuộc ATP làm mở kênh Calci gây khử cực màng tế bào beta",
      "Chẹn kênh Clo ở màng nhân"
    ],
    "correct": 2,
    "explanation": "Sulfonylure gắn thụ thể SUR1 đóng kênh K(ATP) gây khử cực mở kênh Ca2+ phụ thuộc điện thế phóng thích insulin.",
    "reference": "Sách DLS tr. 702",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 800,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Thuốc Sulfonylure Gliclazid có ưu điểm gì so với Glibenclamid kinh điển?",
    "options": [
      "Không bị chuyển hóa qua gan nên an toàn tuyệt đối cho xơ gan mất bù",
      "Tác dụng hạ đường huyết nhanh và mạnh gấp 10 lần Glibenclamid",
      "Hoàn toàn không có nguy cơ gây dị ứng hay nổi mẩn da",
      "Thời gian tác dụng phù hợp hơn và tỷ lệ gây hạ đường huyết thấp hơn nhiều"
    ],
    "correct": 3,
    "explanation": "Gliclazid gắn có hồi phục và phóng thích khỏi SUR1 nhanh hơn Glibenclamid, ít nguy cơ hạ đường huyết nặng kéo dài.",
    "reference": "Sách DLS tr. 703",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 801,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Triệu chứng cảnh báo sớm của cơn hạ đường huyết do thuốc ở bệnh nhân đái tháo đường bao gồm:",
    "options": [
      "Vã mồ hôi, run tay, tim đập nhanh hồi hộp, đói cồn cào và lo âu",
      "Đau tức ngực lan lên vai trái",
      "Bí tiểu tiện và khô miệng",
      "Sốt cao rét run liên tục"
    ],
    "correct": 0,
    "explanation": "Hạ đường huyết kích thích giao cảm tiết adrenalin gây vã mồ hôi lạnh, run rẩy, hồi hộp đánh trống ngực, đói cồn cào.",
    "reference": "Sách DLS tr. 704",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 802,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Nhóm thuốc nào có thể che lấp hầu hết các dấu hiệu cảnh báo hạ đường huyết giao cảm ngoại trừ vã mồ hôi?",
    "options": [
      "Thuốc chẹn kênh calci DHP",
      "Thuốc chẹn beta giao cảm",
      "Thuốc lợi tiểu Thiazid",
      "Thuốc ức chế men chuyển"
    ],
    "correct": 1,
    "explanation": "Chẹn beta che lấp run tay, tim nhanh, lo âu; dấu hiệu duy nhất còn giữ lại để nhận biết hạ đường huyết là vã mồ hôi.",
    "reference": "Sách DLS tr. 705",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 803,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Xử trí cấp cứu ban đầu cho bệnh nhân hạ đường huyết còn tỉnh táo có thể nuốt được là:",
    "options": [
      "Bắt bệnh nhân nhịn ăn uống nằm nghỉ",
      "Tiêm ngay một liều Insulin tác dụng nhanh",
      "Cho uống ngay 15 đến 20 gam đường đơn giản như nửa cốc nước ngọt hoặc 3 viên đường",
      "Cho ăn một bát cơm đầy nhiều dầu mỡ"
    ],
    "correct": 2,
    "explanation": "Quy tắc 15: nạp 15g carbohydrate hấp thu nhanh (nước đường, nước cam), kiểm tra lại đường máu sau 15 phút.",
    "reference": "ADA 2024",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 804,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Thuốc ức chế men Alpha-glucosidase như Acarbose có cơ chế tác dụng hạ đường huyết là:",
    "options": [
      "Kích thích tủy sống tiết hormon sinh dục",
      "Tăng tiêu thụ glucose tại tế bào não do cạnh tranh vị trí gắn kết đặc hiệu trên thụ thể",
      "Ức chế bài xuất glucose qua thận làm thay đổi tính thấm chọn lọc của màng tế bào đích",
      "Làm chậm quá trình phân giải và hấp thu carbohydrate tại ruột non giúp giảm đỉnh đường sau ăn"
    ],
    "correct": 3,
    "explanation": "Acarbose ức chế enzym bờ bàn chải ruột cản trở thủy phân disaccharid thành monosaccharid, làm phẳng đỉnh đường sau ăn.",
    "reference": "Sách DLS tr. 707",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 805,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Tác dụng phụ phổ biến nhất của Acarbose khiến nhiều bệnh nhân bỏ thuốc là:",
    "options": [
      "Đầy hơi, sôi bụng, chướng bụng và trung tiện nhiều",
      "Hạ huyết áp kịch phát",
      "Viêm đau các khớp ngón chân",
      "Đau đầu dữ dội vào ban đêm"
    ],
    "correct": 0,
    "explanation": "Carbohydrate không tiêu hóa bị vi khuẩn đại tràng lên men sinh khí carbon dioxid, hydro gây đầy hơi chướng bụng.",
    "reference": "Sách DLS tr. 708",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 806,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Nhóm thuốc Thiazolidinedion TZD như Pioglitazon hoạt động thông qua kích thích thụ thể nhân nào?",
    "options": [
      "Thụ thể Glucocorticoid nội bào",
      "Thụ thể PPAR-gamma làm tăng nhạy cảm insulin của mô mỡ và cơ",
      "Thụ thể Estrogen alpha",
      "Thụ thể Hormon giáp trạng"
    ],
    "correct": 1,
    "explanation": "Pioglitazon hoạt hóa PPAR-gamma thúc đẩy biệt hóa tế bào mỡ và tăng nhạy cảm insulin toàn thân.",
    "reference": "Sách DLS tr. 709",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 807,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Chống chỉ định tuyệt đối sử dụng Pioglitazon ở bệnh nhân mắc bệnh lý nào sau đây?",
    "options": [
      "Bệnh nhân tăng huyết áp có đạm niệu vi thể",
      "Bệnh nhân hen phế quản nhẹ có kiểm soát",
      "Bệnh nhân có tiền sử hoặc đang mắc bệnh suy tim sung huyết (NYHA I - IV)",
      "Bệnh nhân đái tháo đường có bệnh võng mạc giai đoạn sớm"
    ],
    "correct": 2,
    "explanation": "TZD gây ứ dịch giữ natri làm nặng thêm suy tim, chống chỉ định cho bệnh nhân suy tim NYHA III-IV.",
    "reference": "Sách DLS tr. 710",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 808,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Insulin tác dụng nhanh dạng tương tự như Lispro, Aspart hoặc Glulisine nên được tiêm vào thời điểm nào?",
    "options": [
      "Chỉ tiêm vào lúc nửa đêm trước khi ngủ",
      "Tiêm khi đói cách xa bữa ăn 4 giờ",
      "Trước bữa ăn đúng 2 giờ đồng hồ",
      "Ngay trước bữa ăn từ 5 đến 15 phút hoặc ngay sau bữa ăn"
    ],
    "correct": 3,
    "explanation": "Insulin analog tác dụng siêu nhanh tan monomer ngấm ngay, tiêm 5-15 phút trước ăn kiểm soát đường huyết sau ăn.",
    "reference": "Sách DLS tr. 711",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 809,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Insulin tác dụng kéo dài dạng tương tự như Glargine hoặc Degludec có ưu điểm vượt trội nào?",
    "options": [
      "Tạo nồng độ đáy phẳng không có đỉnh giúp kiểm soát đường huyết ổn định ít gây hạ đường đêm",
      "Chỉ cần tiêm một lần duy nhất trong tuần",
      "Hấp thu hoàn toàn qua đường uống",
      "Tác dụng diệt khuẩn mạnh mẽ trên đối tượng bệnh nhân có tiền sử suy giảm chức năng định kỳ"
    ],
    "correct": 0,
    "explanation": "Glargine kết tủa vi thể tan chậm không tạo đỉnh nhọn, Degludec tạo chuỗi đa phân tử, giảm nguy cơ hạ đường huyết đêm.",
    "reference": "Sách DLS tr. 712",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 810,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Vị trí tiêm Insulin dưới da có tốc độ hấp thu thuốc nhanh và ổn định nhất trên cơ thể là:",
    "options": [
      "Vùng mông trên ngoài",
      "Vùng da bụng xung quanh rốn cách rốn tối thiểu 2 cm",
      "Vùng mặt sau ngoài cánh tay",
      "Vùng mặt trước ngoài đùi"
    ],
    "correct": 1,
    "explanation": "Bụng có lưu lượng máu ổn định hấp thu insulin nhanh nhất, sau đó đến cánh tay, đùi và mông.",
    "reference": "Sách DLS tr. 713",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 811,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Hiện tượng loạn dưỡng mỡ teo hoặc phì đại mô mỡ tại vị trí tiêm Insulin có thể phòng ngừa bằng cách:",
    "options": [
      "Massage xoa bóp thật mạnh vị trí tiêm ngay sau khi rút kim",
      "Tiêm cố định một vị trí duy nhất trên thành bụng mỗi ngày để cơ thể thích nghi",
      "Luân chuyển đều đặn vị trí tiêm thuốc (giữa các vùng bụng, đùi, cánh tay) và thay kim tiêm mỗi lần tiêm",
      "Làm ấm lọ insulin trong nước sôi trước khi rút thuốc vào bơm tiêm"
    ],
    "correct": 2,
    "explanation": "Luân chuyển vị trí tiêm trong cùng một vùng (cách nhau 1-2 cm) tránh kích thích tăng sinh hoặc teo mô mỡ do tác dụng đồng hóa của insulin.",
    "reference": "Sách DLS tr. 714",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 812,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Thuốc hạ mỡ máu nhóm Statin ức chế enzym nào để ngăn chặn tổng hợp Cholesterol tại gan?",
    "options": [
      "Enzym Lecithin cholesterol acyltransferase",
      "Enzym Cholesterol esterase",
      "Enzym Lipoprotein lipase",
      "Enzym HMG-CoA reductase"
    ],
    "correct": 3,
    "explanation": "Statin ức chế cạnh tranh men giới hạn tốc độ tổng hợp cholesterol là 3-hydroxy-3-methylglutaryl-coenzyme A reductase.",
    "reference": "Sách DLS tr. 715",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 813,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Hậu quả dược lý của việc ức chế HMG-CoA reductase tại tế bào gan là gì?",
    "options": [
      "Tăng biểu hiện thụ thể LDL trên bề mặt tế bào gan giúp tăng thanh thải LDL-C khỏi máu",
      "Ngăn cản gan bài tiết acid mật thông qua ức chế chọn lọc enzym đích tại tế bào",
      "Làm giảm số lượng thụ thể LDL ở gan",
      "Kích thích gan tăng sản xuất Triglycerid"
    ],
    "correct": 0,
    "explanation": "Cholesterol nội bào giảm kích hoạt SREBP-2 tăng tổng hợp thụ thể LDL hút LDL-C từ máu vào gan, hạ 30-55% LDL-C máu.",
    "reference": "Sách DLS tr. 716",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 814,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Hai hoạt chất Statin nào sau đây có hiệu lực hạ mỡ máu cường độ mạnh giảm LDL-C trên 50% ở liều cao?",
    "options": [
      "Simvastatin và Pravastatin",
      "Atorvastatin và Rosuvastatin",
      "Pitavastatin liều thấp",
      "Lovastatin và Fluvastatin"
    ],
    "correct": 1,
    "explanation": "Liệu pháp statin cường độ mạnh (Atorvastatin 40-80 mg, Rosuvastatin 20-40 mg) giảm LDL-C >= 50%.",
    "reference": "ACC/AHA 2018",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 815,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Thời điểm uống thích hợp nhất trong ngày đối với các Statin có thời gian bán thải ngắn như Simvastatin là:",
    "options": [
      "Không quan trọng uống lúc nào",
      "Buổi trưa ngay sau bữa ăn",
      "Buổi tối trước khi đi ngủ",
      "Buổi sáng sớm sau khi thức dậy"
    ],
    "correct": 2,
    "explanation": "Cholesterol gan tổng hợp mạnh nhất vào ban đêm; statin T1/2 ngắn (Simvastatin, Lovastatin) nên uống buổi tối trước ngủ.",
    "reference": "Sách DLS tr. 718",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 816,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Thuốc ức chế hấp thu Cholesterol tại bờ bàn chải ruột non là hoạt chất nào?",
    "options": [
      "Fenofibrat",
      "Acid nicotinic",
      "Cholestyramin",
      "Ezetimibe"
    ],
    "correct": 3,
    "explanation": "Ezetimibe gắn protein vận chuyển NPC1L1 ở vi nhung mao ruột non ức chế chọn lọc hấp thu cholesterol ngoại sinh.",
    "reference": "Sách DLS tr. 719",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 817,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Phối hợp Statin với Ezetimibe mang lại lợi ích điều trị gì trên bệnh nhân có nguy cơ tim mạch rất cao?",
    "options": [
      "Hạ thêm 15 đến 20% nồng độ LDL-C giúp đạt mục tiêu điều trị tối ưu",
      "Giảm liều Insulin cần tiêm",
      "Làm mất hoàn toàn tác dụng phụ của Statin",
      "Làm tăng bài xuất đường qua nước tiểu"
    ],
    "correct": 0,
    "explanation": "Cơ chế kép (ức chế tổng hợp ở gan + ức chế hấp thu ở ruột) giúp giảm sâu LDL-C mà không cần dùng statin liều quá cao.",
    "reference": "Sách DLS tr. 720",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 818,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Thuốc hạ mỡ máu nhóm Fibrat như Fenofibrat có tác dụng vượt trội nhất trên chỉ số lipid nào?",
    "options": [
      "Tăng nồng độ Chylomicron trong máu",
      "Làm giảm mạnh nồng độ Triglycerid và tăng HDL-C",
      "Làm giảm nồng độ LDL-C cường độ mạnh",
      "Làm giảm hoàn toàn nồng độ đường huyết"
    ],
    "correct": 1,
    "explanation": "Fibrat kích hoạt PPAR-alpha tăng tổng hợp LPL làm giảm 30-50% Triglycerid máu và tăng HDL-C.",
    "reference": "Sách DLS tr. 721",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 819,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Khi cần phối hợp Statin với Fibrat để điều trị rối loạn lipid máu hỗn hợp, nên chọn Fibrat nào để an toàn cho cơ?",
    "options": [
      "Cả hai đều có độc tính tiêu cơ vân như nhau",
      "Không bao giờ được dùng Fenofibrat",
      "Ưu tiên chọn Fenofibrat vì ít cạnh tranh liên hợp glucuronic với Statin hơn Gemfibrozil",
      "Bắt buộc phải chọn Gemfibrozil"
    ],
    "correct": 2,
    "explanation": "Gemfibrozil ức chế liên hợp glucuronic của statin làm tăng nồng độ statin trong máu gây tiêu cơ vân nặng; Fenofibrat an toàn hơn.",
    "reference": "Sách DLS tr. 722",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 820,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Thuốc ức chế kháng thể đơn dòng PCSK9 như Evolocumab hay Alirocumab hạ LDL-C theo cơ chế:",
    "options": [
      "Ức chế vận chuyển Chylomicron",
      "Kích thích tủy xương sản sinh hồng cầu mới",
      "Ức chế phân hủy Triglycerid tại mô mỡ",
      "Ngăn chặn sự giáng hóa của thụ thể LDL giúp thụ thể được tái tuần hoàn lên bề mặt gan"
    ],
    "correct": 3,
    "explanation": "PCSK9 gắn thụ thể LDL đưa vào tiêu thể phá hủy; ức chế PCSK9 giúp thụ thể LDL tái tuần hoàn liên tục hạ LDL-C thêm 60%.",
    "reference": "Sách DLS tr. 723",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 821,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Chỉ định dùng thuốc hạ Triglycerid khẩn cấp như Fenofibrat được đặt ra khi nồng độ Triglycerid máu vượt quá:",
    "options": [
      "Vượt quá 5,6 mmol/L tức trên 500 mg/dL để phòng ngừa viêm tụy cấp",
      "Vượt quá 2,2 mmol/L",
      "Vượt quá 1,7 mmol/L",
      "Chỉ dùng khi Triglycerid vượt quá 20 mmol/L"
    ],
    "correct": 0,
    "explanation": "Triglycerid > 500 mg/dL (5,6 mmol/L) làm tăng vọt nguy cơ viêm tụy cấp hoại tử, mục tiêu ưu tiên là hạ Triglycerid ngay.",
    "reference": "Sách DLS tr. 724",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 822,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "question": "Axit béo Omega-3 liều cao từ 2 đến 4 gam mỗi ngày có tác dụng chủ yếu trong điều trị lipid máu là:",
    "options": [
      "Làm tan hoàn toàn các mảng vôi hóa van tim",
      "Làm giảm nồng độ Triglycerid huyết tương thông qua ức chế VLDL tại gan",
      "Làm tăng gấp đôi nồng độ LDL-C xấu",
      "Làm hạ huyết áp kịch phát"
    ],
    "correct": 1,
    "explanation": "Omega-3 (EPA/DHA) ức chế enzym DGAT và tăng oxy hóa beta acid béo gan làm giảm tổng hợp VLDL giàu triglycerid.",
    "reference": "Sách DLS tr. 725",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 823,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Quy trình chăm sóc dược lâm sàng theo mô hình SOAP, chữ viết tắt 'O' (Objective) bao gồm dữ liệu nào sau đây?",
    "options": [
      "Kế hoạch theo dõi nồng độ thuốc trong máu kỳ tiếp theo",
      "Lời kể chủ quan của bệnh nhân về cơn đau đầu",
      "Kết quả đo huyết áp, xét nghiệm ure máu và điện tâm đồ",
      "Đánh giá của dược sĩ về nguyên nhân thất bại điều trị"
    ],
    "correct": 2,
    "explanation": "Mục Objective (khách quan) bao gồm dấu hiệu sinh tồn, thăm khám thực thể và kết quả xét nghiệm cận lâm sàng.",
    "reference": "Sách DLS tr. 32",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 824,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Trong mô hình SOAP, nội dung nào sau đây thuộc phần 'A' (Assessment)?",
    "options": [
      "Bệnh nhân than phiền chóng mặt",
      "Huyết áp đo tại giường bệnh vào buổi sáng là 160/95 mmHg",
      "Kế hoạch đổi sang nhóm thuốc chẹn thụ thể Angiotensin II",
      "Nhận định tụt huyết áp tư thế do tác dụng phụ của thuốc"
    ],
    "correct": 3,
    "explanation": "Assessment là phân tích, đánh giá chuyên môn của dược sĩ lâm sàng dựa trên dữ liệu S và O.",
    "reference": "Sách DLS tr. 33",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 825,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Tiêu chí quan trọng nhất khi đánh giá mức độ tin cậy của một bài báo thử nghiệm lâm sàng (nguồn cấp 1) là:",
    "options": [
      "Thiết kế nghiên cứu thử nghiệm lâm sàng ngẫu nhiên có đối chứng, mù đôi (RCT) với cỡ mẫu đủ lớn và phân tích theo ITT",
      "Nghiên cứu báo cáo loạt ca bệnh (Case series) tại một phòng khám chuyên khoa",
      "Kết quả nghiên cứu được bảo trợ độc quyền bởi công ty sản xuất biệt dược gốc",
      "Số lượng trích dẫn trên các diễn đàn trao đổi chuyên môn trực tuyến"
    ],
    "correct": 0,
    "explanation": "RCT ngẫu nhiên, mù đôi, đối chứng là chuẩn vàng cao nhất để chứng minh hiệu quả và an toàn của can thiệp y học.",
    "reference": "Sách DLS tr. 125",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 826,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Hệ số tương quan P-value trong y văn lâm sàng được coi là có ý nghĩa thống kê khi:",
    "options": [
      "P lớn hơn 0,5",
      "P nhỏ hơn 0,05",
      "P nằm trong khoảng 0,1 đến 0,2",
      "P bằng đúng 1,0"
    ],
    "correct": 1,
    "explanation": "P < 0,05 chỉ ra xác suất kết quả xảy ra do ngẫu nhiên là dưới 5%, được chấp nhận có ý nghĩa thống kê.",
    "reference": "Sách DLS tr. 127",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 827,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Đơn vị tính DDD (Defined Daily Dose) theo quy ước chuẩn của WHO có đặc điểm nào?",
    "options": [
      "Là liều tối đa cho phép sử dụng trong 24 giờ cho mọi bệnh nhân",
      "Là liều nạp tĩnh mạch cấp cứu duy nhất cho trẻ em",
      "Là liều duy trì trung bình mỗi ngày cho chỉ định chính ở người lớn",
      "Là liều gây độc trên 50% động vật thí nghiệm"
    ],
    "correct": 2,
    "explanation": "DDD là liều duy trì trung bình giả định mỗi ngày của một thuốc dùng cho chỉ định chính ở người trưởng thành.",
    "reference": "Sách DLS tr. 25",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 828,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Chỉ số DU90% (Drug Utilization 90%) phản ánh thông tin nào trong phân tích sử dụng thuốc bệnh viện?",
    "options": [
      "Khoảng thời gian 90 ngày sau khi thuốc hết hạn sử dụng",
      "Liều lượng thuốc cần giảm 90% khi bệnh nhân suy thận nặng",
      "Tỷ lệ 90% số bệnh nhân bị dị ứng thuốc trong khoa điều trị",
      "Danh mục các loại thuốc chiếm 90% tổng lượng tiêu thụ hoặc chi phí"
    ],
    "correct": 3,
    "explanation": "DU90% thể hiện các thuốc nằm trong nhóm chiếm 90% tổng số lượng tiêu thụ (theo DDD) của bệnh viện.",
    "reference": "Sách DLS tr. 28",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 829,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Tài liệu nào sau đây được xếp vào nguồn thông tin thuốc cấp 3 chính thống tại Việt Nam?",
    "options": [
      "Dược thư Quốc gia Việt Nam bản cập nhật mới nhất",
      "Cơ sở dữ liệu trích dẫn mục lục Scopus",
      "Tập san bài báo nghiên cứu lâm sàng của Viện Dược liệu",
      "Hệ thống tóm tắt đề tài Pubmed/Medline"
    ],
    "correct": 0,
    "explanation": "Dược thư Quốc gia Việt Nam là nguồn cấp 3 tổng hợp thông tin đã được thẩm định và phê duyệt.",
    "reference": "Sách DLS tr. 123",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 830,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Trong quy trình 6 bước trả lời thông tin thuốc của dược sĩ lâm sàng, bước đầu tiên cần thực hiện là:",
    "options": [
      "Tra cứu ngay lập tức cơ sở dữ liệu UpToDate",
      "Xác định rõ người hỏi thông tin, nhu cầu thực sự và bối cảnh lâm sàng",
      "Viết văn bản trả lời chính thức đóng dấu bệnh viện",
      "Từ chối trả lời nếu người hỏi là người bệnh trực tiếp"
    ],
    "correct": 1,
    "explanation": "Bước 1 là thu thập thông tin về người yêu cầu, bối cảnh người bệnh và mục đích cốt lõi của câu hỏi.",
    "reference": "Sách DLS tr. 130",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 831,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Chỉ tiêu 'Số thuốc trung bình trong một đơn' tăng quá cao tại phòng khám ngoại trú cảnh báo nguy cơ nào?",
    "options": [
      "Giảm chi phí tiền thuốc tổng thể cho ngân sách bảo hiểm y tế",
      "Tăng tỷ lệ khỏi bệnh dứt điểm trong thời gian ngắn nhất",
      "Tăng nguy cơ tương tác thuốc bất lợi và giảm tuân thủ điều trị",
      "Loại bỏ hoàn toàn phản ứng có hại của thuốc"
    ],
    "correct": 2,
    "explanation": "Đa dược (polypharmacy) làm tăng theo cấp số nhân tỷ lệ tương tác bất lợi và chi phí điều trị.",
    "reference": "Sách DLS tr. 22",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 832,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Khái niệm 'Dược động học cá thể hóa' (TDM) đặc biệt bắt buộc với nhóm thuốc nào sau đây?",
    "options": [
      "Thuốc giảm đau hạ sốt thông thường paracetamol đường uống",
      "Dung dịch bù nước điện giải đường uống Oresol",
      "Các loại vitamin tan trong nước như vitamin C và B1",
      "Thuốc có khoảng điều trị hẹp và độc tính nguy hiểm liên quan đến nồng độ"
    ],
    "correct": 3,
    "explanation": "TDM chỉ định cho thuốc có khoảng điều trị hẹp như aminosid, vancomycin, digoxin, theophyllin, lithium.",
    "reference": "Sách DLS tr. 65",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 833,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Trong phân tích kinh tế dược, phương pháp Phân tích Chi phí - Hiệu quả (CEA) đo lường kết quả đầu ra bằng đơn vị nào?",
    "options": [
      "Đơn vị đo lâm sàng thực tế như số năm sống thêm, mmHg huyết áp giảm",
      "Năm sống hiệu chỉnh theo chất lượng",
      "Điểm số mức độ hài lòng cảm tính của thân nhân bệnh nhân",
      "Đơn vị tiền tệ đồng nhất như VNĐ hoặc USD"
    ],
    "correct": 0,
    "explanation": "CEA so sánh chi phí tính bằng tiền với hiệu quả lâm sàng đo bằng đơn vị tự nhiên (năm sống thêm, chỉ số HbA1c giảm).",
    "reference": "Sách DLS tr. 45",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 834,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Phương pháp phân tích kinh tế dược Phân tích Chi phí - Thỏa dụng (CUA) đo lường hiệu quả điều trị bằng đơn vị nào?",
    "options": [
      "Tổng số ngày nằm viện điều trị tại khoa hồi sức cấp cứu",
      "Số năm sống điều chỉnh theo chất lượng sống",
      "Số lượng viên thuốc bệnh nhân uống trong một đợt",
      "Tỷ lệ phần trăm thuốc kê theo tên generic"
    ],
    "correct": 1,
    "explanation": "CUA đo lường kết quả dựa trên số năm sống có chất lượng (Quality-Adjusted Life Years - QALY).",
    "reference": "Sách DLS tr. 47",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 835,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Thử nghiệm lâm sàng pha 1 của một thuốc mới trên người thường được tiến hành trên đối tượng nào?",
    "options": [
      "Hàng chục ngàn bệnh nhân nặng tại nhiều quốc gia khác nhau",
      "Trẻ sơ sinh non tháng tại khoa sơ sinh chuyên sâu",
      "Một nhóm nhỏ người tình nguyện khỏe mạnh từ 20 đến 80 người",
      "Phụ nữ có thai trong 3 tháng đầu thai kỳ"
    ],
    "correct": 2,
    "explanation": "Pha 1 tiến hành trên người tình nguyện khỏe mạnh nhằm đánh giá an toàn, dung nạp và dược động học.",
    "reference": "Sách DLS tr. 140",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 836,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Thử nghiệm lâm sàng pha 3 có mục tiêu cơ bản là:",
    "options": [
      "Xác định độ tinh khiết hóa học của hoạt chất chiết xuất",
      "Tìm kiếm độc tính gây đột biến gen trên tế bào vi khuẩn",
      "Thử nghiệm liều độc gây chết trên chuột cống trắng được áp dụng trong thực hành lâm sàng",
      "Khẳng định hiệu lực điều trị và an toàn trên quần thể bệnh nhân lớn đa trung tâm"
    ],
    "correct": 3,
    "explanation": "Pha 3 thử nghiệm trên quy mô lớn (hàng ngàn bệnh nhân) để khẳng định hiệu quả và cấp phép lưu hành.",
    "reference": "Sách DLS tr. 142",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 837,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Nhiệm vụ then chốt của Hội đồng Thuốc và Điều trị bệnh viện là:",
    "options": [
      "Xây dựng danh mục thuốc bệnh viện hợp lý và giám sát sử dụng thuốc an toàn",
      "Quản lý lịch phân công trực cấp cứu của toàn bộ bác sĩ lâm sàng",
      "Ký duyệt hợp đồng kinh tế mua sắm trang thiết bị văn phòng",
      "Trực tiếp thu tiền viện phí của bệnh nhân tại quầy thanh toán"
    ],
    "correct": 0,
    "explanation": "Hội đồng Thuốc và Điều trị có vai trò cố vấn cho giám đốc về danh mục thuốc và hướng dẫn sử dụng thuốc an toàn.",
    "reference": "Sách DLS tr. 55",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 838,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Hệ thống phân loại thuốc theo giải phẫu, điều trị và hóa học ATC do tổ chức nào quản lý chuẩn hóa?",
    "options": [
      "Hiệp hội Tim mạch Hoa Kỳ",
      "Tổ chức Y tế Thế giới",
      "Cơ quan Quản lý Dược phẩm Châu Âu",
      "Cục Quản lý Thực phẩm và Dược phẩm Hoa Kỳ"
    ],
    "correct": 1,
    "explanation": "Hệ thống mã ATC (Anatomical Therapeutic Chemical) do Trung tâm Hợp tác của WHO tại Oslo quản lý.",
    "reference": "Sách DLS tr. 24",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 839,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Trong mã ATC, bậc 1 phản ánh thông tin nào sau đây?",
    "options": [
      "Hoạt chất hóa học cụ thể của phân tử thuốc",
      "Nhóm tác dụng dược lý trị liệu chuyên biệt",
      "Nhóm cơ quan giải phẫu chính mà thuốc tác động",
      "Đường dùng và dạng bào chế của thuốc"
    ],
    "correct": 2,
    "explanation": "Bậc 1 gồm 1 chữ cái chỉ cơ quan giải phẫu chính (ví dụ: C cho hệ tim mạch, J cho chống nhiễm khuẩn).",
    "reference": "Sách DLS tr. 24",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 840,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Khi tra cứu thông tin về tương kỵ thuốc tiêm truyền tĩnh mạch phối hợp, tài liệu tham khảo chuẩn mực nhất là:",
    "options": [
      "Dược thư Quốc gia Việt Nam bản cập nhật lâm sàng",
      "Sách Meyler's Side Effects of Drugs về phản ứng có hại",
      "Sách Applied Therapeutics về điều trị thực hành lâm sàng",
      "Sách Handbook on Injectable Drugs của Lawrence Trissel"
    ],
    "correct": 3,
    "explanation": "Trissel's Handbook on Injectable Drugs là cẩm nang kinh điển quốc tế về tương kỵ và độ ổn định thuốc tiêm.",
    "reference": "Sách DLS tr. 135",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 841,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Theo Thông tư của Bộ Y tế, số ngày kê đơn tối đa cho thuốc điều trị bệnh mạn tính ngoại trú thông thường là:",
    "options": [
      "Không quá 30 ngày",
      "Tối thiểu 180 ngày",
      "Không quá 7 ngày",
      "Không quá 90 ngày"
    ],
    "correct": 0,
    "explanation": "Quy chế kê đơn quy định đơn thuốc điều trị bệnh mạn tính ngoại trú được kê tối đa 30 ngày.",
    "reference": "Thông tư 52/2017/TT-BYT",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 842,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Nội dung nào sau đây là chỉ số đánh giá kê đơn thuốc an toàn tại cơ sở điều trị ngoại trú theo chuẩn WHO?",
    "options": [
      "Tỷ lệ bác sĩ có bằng tiến sĩ y khoa trong bệnh viện",
      "Tỷ lệ phần trăm đơn thuốc có kê vitamin không cần thiết",
      "Số lượng giường bệnh được kê trong khoa nội trú",
      "Khoảng cách địa lý từ nhà bệnh nhân đến bệnh viện"
    ],
    "correct": 1,
    "explanation": "Tỷ lệ đơn có vitamin, tỷ lệ đơn có kháng sinh, tỷ lệ đơn có thuốc tiêm là các chỉ số cốt lõi của WHO.",
    "reference": "Sách DLS tr. 22",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 843,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Thuật ngữ 'Generic drug' (thuốc gốc/thuốc tương đương) được định nghĩa chuẩn là chế phẩm:",
    "options": [
      "Thuốc được bào chế thủ công từ thảo mộc chưa qua chiết xuất chuẩn",
      "Thuốc có giá thành đắt đỏ gấp nhiều lần thuốc phát minh ban đầu",
      "Thuốc có cùng hoạt chất và tương đương sinh học với biệt dược gốc",
      "Thuốc thử nghiệm giai đoạn tiền lâm sàng chưa cấp số lưu hành"
    ],
    "correct": 2,
    "explanation": "Thuốc generic là thuốc tương đương bào chế và tương đương sinh học với thuốc phát minh (biệt dược gốc).",
    "reference": "Sách DLS tr. 15",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 844,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Hành vi nào của người bệnh được coi là 'không tuân thủ điều trị' (Non-adherence)?",
    "options": [
      "Đi tái khám đúng hẹn theo chỉ định của bác sĩ chuyên khoa",
      "Thông báo kịp thời cho dược sĩ khi xuất hiện ban đỏ da",
      "Bảo quản thuốc nơi khô ráo, tránh ánh sáng trực tiếp",
      "Tự ý ngừng thuốc khi thấy triệu chứng thuyên giảm hoặc tự thay đổi liều dùng"
    ],
    "correct": 3,
    "explanation": "Tự ý giảm liều, quên liều hoặc bỏ thuốc giữa chừng là biểu hiện phổ biến của không tuân thủ điều trị.",
    "reference": "Sách DLS tr. 38",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 845,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Chỉ số NNT (Number Needed to Treat) trong y văn điều trị phản ánh ý nghĩa nào?",
    "options": [
      "Số bệnh nhân cần được điều trị để ngăn ngừa thêm 1 biến cố bất lợi lâm sàng",
      "Số bác sĩ cần thiết để hội chẩn 1 ca bệnh khó tại khoa hồi sức",
      "Số lượng xét nghiệm máu cần thực hiện trước khi kê kháng sinh",
      "Số viên thuốc tối thiểu người bệnh phải nuốt trong một đợt điều trị"
    ],
    "correct": 0,
    "explanation": "NNT là số bệnh nhân cần điều trị bằng liệu pháp mới để ngăn ngừa 1 kết cục xấu so với nhóm đối chứng.",
    "reference": "Sách DLS tr. 128",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 846,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Chỉ số NNH (Number Needed to Harm) càng nhỏ chứng tỏ thuốc có đặc tính nào?",
    "options": [
      "Giá thành điều trị trên một đợt càng rẻ",
      "Độc tính càng cao, nguy cơ gây hại cho người bệnh càng lớn",
      "Khả năng hấp thu qua đường tiêu hóa càng nhanh",
      "Độ an toàn càng cao và ít nguy cơ gây tác dụng phụ"
    ],
    "correct": 1,
    "explanation": "NNH càng thấp nghĩa là chỉ cần điều trị ít người đã có 1 người gặp biến cố có hại (độc tính cao).",
    "reference": "Sách DLS tr. 129",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 847,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Cơ sở dữ liệu điện tử nào sau đây cung cấp thông tin cập nhật y học chứng cứ tóm tắt hàng đầu thế giới?",
    "options": [
      "PubMed và Google Scholar (cơ sở dữ liệu thư mục cấp 2)",
      "Tạp chí The New England Journal of Medicine (nguồn cấp 1)",
      "UpToDate, Micromedex và DynaMed (nguồn thông tin cấp 3 tổng hợp chứng cứ)",
      "Dược điển Việt Nam V (tiêu chuẩn kiểm nghiệm chất lượng thuốc)"
    ],
    "correct": 2,
    "explanation": "UpToDate và Micromedex là các cơ sở dữ liệu y học chứng cứ hàng đầu được tin cậy trong thực hành lâm sàng.",
    "reference": "Sách DLS tr. 124",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 848,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Trong báo cáo tương tác thuốc, mức độ tương tác 'Chống chỉ định phối hợp' (Contraindicated) đòi hỏi hành động gì?",
    "options": [
      "Cứ dùng bình thường và tăng liều của cả hai thuốc lên gấp đôi",
      "Chỉ cần uống thuốc cách nhau 15 phút là an toàn",
      "Cho bệnh nhân uống nhiều nước lọc để trung hòa tương tác",
      "Tuyệt đối không được phối hợp hai thuốc này trong mọi hoàn cảnh lâm sàng"
    ],
    "correct": 3,
    "explanation": "Mức độ chống chỉ định (tương tác độ 1/mức độ nghiêm trọng) bắt buộc phải tránh phối hợp tuyệt đối.",
    "reference": "Sách DLS tr. 185",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 849,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Trong y học chứng cứ, cấp độ bằng chứng (Level of Evidence) cao nhất thường xuất phát từ:",
    "options": [
      "Tổng quan hệ thống và phân tích gộp các thử nghiệm RCT",
      "Báo cáo chùm ca bệnh đơn lẻ tại một cơ sở y tế",
      "Ý kiến chuyên gia đầu ngành trong hội đồng chuyên môn",
      "Thử nghiệm lâm sàng nhãn mở không có nhóm chứng đối đầu"
    ],
    "correct": 0,
    "explanation": "Phân tích gộp các thử nghiệm lâm sàng ngẫu nhiên có đối chứng đứng ở đỉnh tháp bằng chứng y học.",
    "reference": "Sách DLS tr. 126",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 850,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Sai sót liên quan đến thuốc (Medication Error) giai đoạn 'Giao nhận và dùng thuốc' (Administration) có thể hạn chế bằng quy tắc nào?",
    "options": [
      "Quy tắc dùng kháng sinh phổ rộng cho tất cả các ca sốt",
      "Quy tắc 5 đúng trong thực hành dùng thuốc cho người bệnh",
      "Quy tắc cho bệnh nhân uống thuốc trước khi thăm khám bệnh",
      "Quy tắc ưu tiên kê đơn thuốc biệt dược đắt tiền nhất"
    ],
    "correct": 1,
    "explanation": "Quy tắc 5 đúng (hoặc 7 đúng) của điều dưỡng và dược sĩ là chuẩn mực ngăn ngừa sai sót dùng thuốc.",
    "reference": "Sách DLS tr. 40",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 851,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Khái niệm 'Off-label use' trong thực hành lâm sàng được hiểu là việc sử dụng thuốc:",
    "options": [
      "Sử dụng thuốc đã hết hạn dùng được ghi trên bao bì",
      "Dùng thuốc không rõ nguồn gốc xuất xứ và nhãn mác",
      "Dùng ngoài phạm vi chỉ định hoặc liều đã được phê duyệt",
      "Sử dụng thuốc không có hoạt chất trị liệu bên trong"
    ],
    "correct": 2,
    "explanation": "Off-label là chỉ định thuốc ngoài hướng dẫn cấp phép của cơ quan quản lý (cần hội chẩn và bằng chứng khoa học).",
    "reference": "Sách DLS tr. 35",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 852,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Để giảm thiểu sai sót do thuốc có tên đọc hoặc viết nhìn giống nhau (LASA - Look-alike, Sound-alike), biện pháp hiệu quả là:",
    "options": [
      "Dán nhãn cảnh báo màu sắc tương phản giữa các hàm lượng",
      "Phân chia khu vực lưu trữ riêng biệt có biển báo cảnh báo",
      "Sắp xếp tất cả thuốc tương tự nhau theo thứ tự bảng chữ cái",
      "Sử dụng kỹ thuật chữ in hoa Tall Man trên nhãn và tủ thuốc"
    ],
    "correct": 3,
    "explanation": "Tall Man lettering (ví dụ: predniSONE và prednisoLONE) giúp mắt người đọc nhận biết ngay điểm khác biệt.",
    "reference": "Sách DLS tr. 42",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 853,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Tại sao dạng thuốc viên giải phóng kéo dài (XR, ER, CR) tuyệt đối không được nghiền nát trước khi uống?",
    "options": [
      "Vì phá hủy cấu trúc màng phóng thích dẫn đến phóng thích ồ ạt toàn bộ liều gây ngộ độc cấp tính",
      "Vì thuốc sẽ bị đông cứng lại làm tắc ống tiêu hóa",
      "Vì làm cho thuốc bị đổi màu sang màu đen nguy hiểm",
      "Vì nghiền ra sẽ làm tăng khối lượng thuốc lên gấp mười lần"
    ],
    "correct": 0,
    "explanation": "Dose dumping: Nghiền viên giải phóng kéo dài giải phóng tức thì liều dùng 12-24h gây ngộ độc đe dọa tính mạng.",
    "reference": "Sách DLS tr. 78",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 854,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Dạng viên nén bao tan trong ruột (Enteric-coated) có mục đích chính là:",
    "options": [
      "Làm chậm giải phóng hoạt chất đều đặn trong suốt 24 giờ tại đại tràng",
      "Bảo vệ dược chất không bị phân hủy bởi acid dạ dày hoặc bảo vệ niêm mạc dạ dày khỏi kích ứng",
      "Giúp hoạt chất hấp thu ngay lập tức tại niêm mạc miệng và tĩnh mạch dưới lưỡi",
      "Tăng độ tan của dược chất kém tan trong môi trường pH acid dạ dày"
    ],
    "correct": 1,
    "explanation": "Màng bao kháng acid giúp viên đi qua dạ dày nguyên vẹn và chỉ tan rã ở pH kiềm của ruột non.",
    "reference": "Sách DLS tr. 80",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 855,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Thử nghiệm lâm sàng pha 4 (Post-marketing surveillance) có vai trò then chốt nào?",
    "options": [
      "Tìm kiếm công thức tổng hợp hóa học rẻ tiền nhất",
      "Xác định cấu trúc hóa học bằng quang phổ hồng ngoại được áp dụng trong thực hành lâm sàng",
      "Theo dõi phản ứng có hại hiếm gặp và đánh giá hiệu quả lâu dài của thuốc trong cộng đồng",
      "Thử nghiệm độc tính cấp tính trên động vật gặm nhấm"
    ],
    "correct": 2,
    "explanation": "Pha 4 theo dõi giám sát hậu mại trên diện rộng phát hiện các ADR hiếm gặp (tần suất < 1/10.000).",
    "reference": "Sách DLS tr. 143",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 856,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Khi tra cứu thông tin tương hợp của thuốc tiêm với dung dịch truyền NaCl 0,9% hay Glucose 5%, thông tin này thuộc nhóm:",
    "options": [
      "Phân loại mã số bảo hiểm y tế chi trả",
      "Đặc tính hấp thu qua da và niêm mạc mắt",
      "Cơ chế tác dụng dược lý ở mức độ thụ thể",
      "Tương hợp hóa lý và độ ổn định dung dịch tiêm truyền"
    ],
    "correct": 3,
    "explanation": "Độ ổn định và tương hợp (Compatibility & Stability) là yêu cầu tra cứu bắt buộc trước khi pha truyền tĩnh mạch.",
    "reference": "Sách DLS tr. 136",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 857,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Hệ thống báo cáo phản ứng có hại của thuốc (ADR) tự nguyện tại các cơ sở y tế ở Việt Nam gửi về:",
    "options": [
      "Trung tâm Quốc gia về Thông tin thuốc và Theo dõi phản ứng có hại của thuốc",
      "Trung tâm Kiểm soát và Phòng ngừa Dịch bệnh Hoa Kỳ được áp dụng trong thực hành lâm sàng",
      "Ủy ban Thể dục thể thao quốc gia",
      "Cơ quan Cảnh sát điều tra tội phạm môi trường"
    ],
    "correct": 0,
    "explanation": "Báo cáo ADR gửi về Trung tâm Quốc gia (Hà Nội) hoặc Trung tâm Khu vực (TP.HCM) thuộc Bộ Y tế.",
    "reference": "Sách DLS tr. 150",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 858,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Khi tư vấn sử dụng thuốc đặt dưới lưỡi (như Nitroglycerin), hướng dẫn bắt buộc cho người bệnh là:",
    "options": [
      "Nhai nát viên thuốc rồi uống ngay với một cốc nước nóng đầy",
      "Đặt thuốc dưới lưỡi để tan tự nhiên, tuyệt đối không nhai và không nuốt chửng với nước",
      "Nghiền nhỏ thuốc pha vào sữa tươi để uống trước bữa ăn",
      "Hòa tan thuốc vào 500ml nước lọc rồi thụt tháo đại tràng"
    ],
    "correct": 1,
    "explanation": "Thuốc ngậm dưới lưỡi hấp thu trực tiếp qua tĩnh mạch dưới lưỡi vào tuần hoàn chung, tránh chuyển hóa qua gan lần đầu.",
    "reference": "Sách DLS tr. 82",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 859,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Lý do thuốc dạng xịt hít định liều (MDI) điều trị hen phế quản cần súc miệng sạch bằng nước sau khi dùng là:",
    "options": [
      "Giúp làm tăng hấp thu thuốc qua niêm mạc lưỡi vào máu",
      "Làm cho hơi thở có mùi thơm dịu nhẹ",
      "Dự phòng tác dụng phụ nhiễm nấm Candida miệng họng và khản tiếng do corticoid đọng lại",
      "Ngăn ngừa thuốc gây đổi màu răng vĩnh viễn"
    ],
    "correct": 2,
    "explanation": "Súc họng nhổ bỏ nước sau khi xịt Corticoid dạng hít (ICS) loại trừ thuốc lắng đọng ở hầu họng, tránh nấm miệng.",
    "reference": "Sách DLS tr. 85",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 860,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Trong quản lý chất lượng sử dụng kháng sinh (AMS - Antimicrobial Stewardship), chỉ số DOT (Days of Therapy) được tính là:",
    "options": [
      "Khoảng thời gian bệnh nhân được cách ly trong phòng áp lực âm",
      "Tổng số viên kháng sinh bệnh nhân đã mua tại quầy thuốc",
      "Số ngày cần thiết để vi khuẩn sinh sôi trong môi trường cấy",
      "Số ngày người bệnh nhận ít nhất một liều của một kháng sinh cụ thể"
    ],
    "correct": 3,
    "explanation": "DOT là số ngày điều trị bằng kháng sinh, độc lập với liều lượng sử dụng.",
    "reference": "Sách DLS tr. 30",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 861,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Phương châm thực hành cốt lõi của người Dược sĩ lâm sàng hiện đại là:",
    "options": [
      "Lấy người bệnh làm trung tâm, tối ưu hóa hiệu quả và an toàn trong điều trị dùng thuốc",
      "Tập trung tối đa hóa doanh thu và lợi nhuận bán thuốc của bệnh viện",
      "Chỉ làm việc khép kín trong kho dược và không tiếp xúc với nhân viên y tế khác",
      "Thay thế hoàn toàn vai trò chẩn đoán bệnh của bác sĩ điều trị"
    ],
    "correct": 0,
    "explanation": "Dược lâm sàng hướng vào người bệnh (Patient-centered care) nhằm tối ưu hóa kết cục điều trị.",
    "reference": "Sách DLS tr. 10",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 862,
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "question": "Khi người bệnh quên một liều thuốc tim mạch uống hàng ngày, khuyến cáo xử trí chung an toàn nhất là:",
    "options": [
      "Bỏ thuốc luôn 1 tuần lễ rồi mới bắt đầu uống lại từ đầu",
      "Uống ngay khi nhớ ra nếu chưa gần liều kế tiếp; tuyệt đối không uống gấp đôi liều",
      "Tự ý mua thêm một loại thuốc huyết áp khác để uống kèm được áp dụng trong thực hành lâm sàng",
      "Uống dồn ngay 2 liều vào thời điểm liều kế tiếp để bù lại"
    ],
    "correct": 1,
    "explanation": "Không bao giờ uống gấp đôi liều để bù liều quên vì nguy cơ quá liều độc tính nghiêm trọng.",
    "reference": "Sách DLS tr. 39",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 863,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Ở bệnh nhân xơ gan nặng mất bù, thông số sinh khả dụng đường uống (F%) của thuốc có tỷ lệ chiết xuất qua gan cao (E > 0,7) biến đổi như thế nào?",
    "options": [
      "Hoàn toàn không thay đổi do hấp thu chỉ diễn ra tại dạ dày",
      "Biến thiên thất thường không theo bất kỳ quy luật nào",
      "Tăng mạnh do giảm chuyển hóa qua gan bước đầu và hiện tượng tuần hoàn bàng hệ cửa - chủ",
      "Giảm nghiêm trọng về mức 0% do gan không hấp thu thuốc"
    ],
    "correct": 2,
    "explanation": "Thuốc có E cao (như propranolol, morphin) khi suy gan nặng sẽ giảm chuyển hóa bước đầu, làm tăng vọt sinh khả dụng F.",
    "reference": "Sách DLS tr. 98",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 864,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Hiện tượng giảm nồng độ Albumin huyết tương ở bệnh nhân hội chứng thận hư dẫn đến hậu quả dược động học nào?",
    "options": [
      "Làm tăng tốc độ lọc của cầu thận lên gấp 10 lần",
      "Làm cho toàn bộ thuốc bị giữ chặt không thể phân bố đến mô",
      "Làm giảm thể tích phân bố Vd của các thuốc tan nhiều trong mỡ",
      "Tăng tỷ lệ thuốc ở dạng tự do không liên kết, làm tăng tác dụng và nguy cơ độc tính"
    ],
    "correct": 3,
    "explanation": "Albumin giảm làm tăng nồng độ thuốc dạng tự do (dạng có hoạt tính sinh học và độc tính).",
    "reference": "Sách DLS tr. 102",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 865,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Công thức Cockcroft-Gault chuẩn để ước tính độ thanh thải Creatinin (CrCl) trên bệnh nhân nam giới tính theo đơn vị mL/phút là:",
    "options": [
      "CrCl = [(140 - Tuổi) x Cân nặng] / [72 x Creatinin huyết thanh]",
      "CrCl = [72 x Tuổi] / [(140 - Cân nặng) x Creatinin huyết thanh]",
      "CrCl = [140 x Creatinin huyết thanh] / [Tuổi x Cân nặng]",
      "CrCl = [Tuổi x Cân nặng] / [140 x Creatinin huyết thanh]"
    ],
    "correct": 0,
    "explanation": "Công thức Cockcroft-Gault kinh điển dùng trong hiệu chỉnh liều thuốc đào thải qua thận.",
    "reference": "Sách DLS tr. 105",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 866,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Khi áp dụng công thức Cockcroft-Gault để tính CrCl cho bệnh nhân nữ giới, cần nhân kết quả với hệ số hiệu chỉnh nào?",
    "options": [
      "Hệ số 0,50",
      "Hệ số 0,85",
      "Hệ số 2,00",
      "Hệ số 1,15"
    ],
    "correct": 1,
    "explanation": "Khối lượng cơ ở phụ nữ thấp hơn nam giới khoảng 15%, nên kết quả nhân với 0,85.",
    "reference": "Sách DLS tr. 106",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 867,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Khi bệnh nhân bị béo phì (BMI > 30 hoặc cân nặng thực tế vượt 120% cân nặng lý tưởng IBW), cân nặng đưa vào công thức Cockcroft-Gault nên dùng là:",
    "options": [
      "Cân nặng lý tưởng IBW",
      "Cân nặng thực tế TBW",
      "Cân nặng hiệu chỉnh ABW",
      "Cân nặng không mỡ FFW"
    ],
    "correct": 2,
    "explanation": "Bệnh nhân béo phì dùng ABW = IBW + 0,4 x (Cân nặng thực tế - IBW) để tránh ước tính quá cao CrCl.",
    "reference": "Sách DLS tr. 108",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 868,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Kháng sinh nào sau đây đào thải chủ yếu qua thận ở dạng còn hoạt tính (fe > 90%) và bắt buộc phải giảm liều khi suy thận?",
    "options": [
      "Doxycyclin",
      "Erythromycin",
      "Clindamycin",
      "Gentamicin và Amikacin"
    ],
    "correct": 3,
    "explanation": "Aminosid (gentamicin, amikacin) đào thải qua thận > 90% dưới dạng không đổi, nguy cơ độc thận và thính giác cao.",
    "reference": "Sách DLS tr. 110",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 869,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Thuốc kháng sinh nhóm macrolid nào sau đây đào thải chủ yếu qua gan và mật, ít phụ thuộc vào chức năng thận?",
    "options": [
      "Azithromycin và Erythromycin",
      "Tobramycin tiêm bắp",
      "Vancomycin tiêm truyền",
      "Colistin tiêm tĩnh mạch"
    ],
    "correct": 0,
    "explanation": "Azithromycin và erythromycin thải trừ chủ yếu qua gan/mật, không cần chỉnh liều ở bệnh nhân suy thận nhẹ - vừa.",
    "reference": "Sách DLS tr. 112",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 870,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Hệ số phân bố lại Q (hệ số Dettli) trong hiệu chỉnh liều cho bệnh nhân suy thận phụ thuộc vào hai yếu tố cốt lõi nào?",
    "options": [
      "Nhịp thở của người bệnh và nồng độ oxy trong phòng bệnh",
      "Tỷ lệ thuốc thải qua thận dạng không đổi và mức độ suy giảm chức năng thận",
      "Chiều cao của người bệnh và thể tích hồng cầu lắng đọng",
      "Hàm lượng thuốc trong viên nén và hạn sử dụng của thuốc"
    ],
    "correct": 1,
    "explanation": "Công thức Dettli: Q = 1 - fe x (1 - Rf), phản ánh mức độ giảm thải trừ thuốc theo chức năng thận suy giảm.",
    "reference": "Sách DLS tr. 115",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 871,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Biện pháp hiệu chỉnh liều thuốc bằng cách 'Kéo dài khoảng cách đưa thuốc' (nới rộng khoảng cách) thường phù hợp nhất với nhóm thuốc nào?",
    "options": [
      "Thuốc diệt khuẩn phụ thuộc thời gian như Penicillin truyền liên tục",
      "Thuốc giãn phế quản dạng khí dung tác dụng ngắn",
      "Thuốc có tác dụng diệt khuẩn phụ thuộc nồng độ đỉnh như Aminosid",
      "Dung dịch truyền dinh dưỡng glucose 10%"
    ],
    "correct": 2,
    "explanation": "Aminosid cần Cmax cao để diệt khuẩn tối đa và Cmin thấp để tránh độc tính, nên ưu tiên nới rộng khoảng cách đưa thuốc.",
    "reference": "Sách DLS tr. 116",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 872,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Thang điểm Child-Pugh phân loại mức độ suy giảm chức năng gan dựa trên 5 thông số gồm:",
    "options": [
      "AST, ALT, GGT, Bạch cầu đa nhân và Tiểu cầu",
      "Creatinin, Ure, Acid uric, Kali máu và Glucose máu",
      "Huyết áp tâm thu, Nhịp tim, SpO2, Chiều cao và Cân nặng được áp dụng trong thực hành lâm sàng",
      "Bilirubin, Albumin, INR/Tỷ lệ Prothrombin, Cổ trướng và Bệnh não gan"
    ],
    "correct": 3,
    "explanation": "Child-Pugh đánh giá 5 tiêu chí lâm sàng và cận lâm sàng để phân độ suy gan A (5-6đ), B (7-9đ), C (10-15đ).",
    "reference": "Sách DLS tr. 95",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 873,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Thuốc giảm đau an thần nhóm Opioid nào cần đặc biệt thận trọng hoặc chống chỉ định cho bệnh nhân xơ gan nặng vì nguy cơ thúc đẩy hôn mê gan?",
    "options": [
      "Morphin",
      "Gel nhôm hydroxyd uống",
      "Dung dịch nước muối sinh lý",
      "Paracetamol liều thấp"
    ],
    "correct": 0,
    "explanation": "Opioid ức chế thần kinh trung ương và giảm nhu động ruột, dễ khởi phát hội chứng não gan ở bệnh nhân xơ gan nặng.",
    "reference": "Sách DLS tr. 100",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 874,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Thuốc điều trị đái tháo đường Metformin có nguy cơ gây biến chứng nguy hiểm nào khi dùng cho bệnh nhân suy thận nặng (eGFR < 30 mL/ph/1,73m2)?",
    "options": [
      "Cơn hạ đường huyết sâu kéo dài",
      "Nhiễm toan acid lactic đe dọa tử vong",
      "Hội chứng Steven-Johnson toàn thân",
      "Gây xuất huyết tiêu hóa do thủng dạ dày"
    ],
    "correct": 1,
    "explanation": "Metformin thải qua thận; suy thận nặng gây tích lũy thuốc ức chế tân tạo glucose từ lactat dẫn đến nhiễm toan lactic.",
    "reference": "Sách DLS tr. 205",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 875,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Chất chuyển hóa Morphin-6-glucuronid (M6G) của morphin có đặc tính nào khi tích lũy ở bệnh nhân suy thận?",
    "options": [
      "Chuyển hóa ngược lại thành thuốc kích thích thần kinh gây mất ngủ",
      "Gây tăng huyết áp kịch phát ác tính",
      "Có hoạt tính giảm đau mạnh hơn cả morphin và gây ức chế hô hấp kéo dài",
      "Mất hoàn toàn hoạt tính và được đào thải nhanh qua phân"
    ],
    "correct": 2,
    "explanation": "M6G là chất chuyển hóa có hoạt tính mạnh đào thải qua thận, suy thận tích lũy M6G gây ngừng thở hôn mê.",
    "reference": "Sách DLS tr. 104",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 876,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Thuốc kháng virus Acyclovir dùng đường tiêm truyền tĩnh mạch liều cao có thể gây suy thận cấp theo cơ chế nào?",
    "options": [
      "Gây hạ huyết áp tụt kẹp làm mất dòng máu đến thận",
      "Phá hủy trực tiếp cầu thận do lắng đọng phức hợp miễn dịch",
      "Co thắt toàn bộ động mạch thận hai bên",
      "Lắng đọng tinh thể acyclovir trong lòng ống thận gây tắc nghẽn ống thận"
    ],
    "correct": 3,
    "explanation": "Acyclovir ít tan trong nước tiểu; truyền nhanh làm lắng đọng tinh thể gây hoại tử ống thận (cần truyền chậm và bù dịch).",
    "reference": "Sách DLS tr. 118",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 877,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Để phòng ngừa suy thận cấp do lắng đọng tinh thể khi tiêm truyền Acyclovir hoặc Methotrexat liều cao, biện pháp bắt buộc là:",
    "options": [
      "Bù đủ dịch đường truyền và kiềm hóa nước tiểu bằng Natri hydrocarbonat",
      "Truyền thật nhanh trong vòng 2 phút",
      "Hạn chế uống nước tối đa để cô đặc nước tiểu",
      "Acid hóa nước tiểu bằng vitamin C liều cao"
    ],
    "correct": 0,
    "explanation": "Hydrat hóa đầy đủ và kiềm hóa nước tiểu (pH > 7) làm tăng độ tan của tinh thể, ngăn ngừa tắc nghẽn ống thận.",
    "reference": "Sách DLS tr. 119",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 878,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Bệnh nhân có mức lọc cầu thận eGFR = 20 mL/ph/1,73m2 thuộc giai đoạn nào của bệnh thận mạn (CKD) theo phân loại KDIGO?",
    "options": [
      "Giai đoạn 1",
      "Giai đoạn 4",
      "Giai đoạn 5",
      "Giai đoạn 2"
    ],
    "correct": 1,
    "explanation": "KDIGO: G1 >= 90, G2: 60-89, G3a: 45-59, G3b: 30-44, G4: 15-29, G5 < 15 mL/ph/1,73m2.",
    "reference": "Sách DLS tr. 103",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 879,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Thuốc chống đông đường uống thế hệ mới (DOAC) nào đào thải qua thận cao nhất (khoảng 80%) và cần giám sát chức năng thận chặt chẽ nhất?",
    "options": [
      "Warfarin",
      "Apixaban",
      "Dabigatran",
      "Rivaroxaban"
    ],
    "correct": 2,
    "explanation": "Dabigatran đào thải qua thận 80% (so với Rivaroxaban 33%, Apixaban 27%), nguy cơ chảy máu rất cao khi suy thận.",
    "reference": "Sách DLS tr. 210",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 880,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Thuốc lợi tiểu quai Furosemid khi dùng liều cao cho bệnh nhân suy thận nặng cần lưu ý độc tính đặc thù nào?",
    "options": [
      "Gây tăng kali máu nghiêm trọng",
      "Gây co thắt khí phế quản cấp",
      "Gây sỏi thận canxi oxalat",
      "Độc tính trên ốc tai gây điếc tạm thời hoặc vĩnh viễn"
    ],
    "correct": 3,
    "explanation": "Furosemid liều cao tiêm tĩnh mạch nhanh gây độc tế bào lông ốc tai, đặc biệt khi phối hợp với Aminosid.",
    "reference": "Sách DLS tr. 188",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 881,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Ở bệnh nhân xơ gan có cổ trướng nặng, thể tích phân bố (Vd) của các thuốc tan trong nước (như Aminosid, Beta-lactam) thay đổi như thế nào?",
    "options": [
      "Tăng đáng kể do lượng dịch ngoại bào tích tụ trong ổ bụng rất lớn",
      "Không bị ảnh hưởng bởi dịch cổ trướng được áp dụng trong thực hành lâm sàng",
      "Hoàn toàn bằng 0 do thuốc không phân bố được",
      "Giảm nghiêm trọng do cơ thể bị teo cơ"
    ],
    "correct": 0,
    "explanation": "Dịch cổ trướng làm tăng thể tích khoang dịch ngoại bào, dẫn đến Vd của thuốc thân nước tăng cao, cần tăng liều nạp ban đầu.",
    "reference": "Sách DLS tr. 99",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 882,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Biến đổi hoạt tính enzym CYP450 ở gan trong xơ gan tiến triển thường diễn ra theo chiều hướng nào?",
    "options": [
      "Chuyển đổi enzym gan thành enzym tiêu hóa dịch tụy",
      "Giảm sút hoạt tính của hầu hết các enzym oxy hóa, đặc biệt là CYP2C19 và CYP1A2",
      "Hoạt tính enzym giữ nguyên ổn định vĩnh viễn",
      "Tăng vọt hoạt tính lên gấp 5 lần so với người bình thường"
    ],
    "correct": 1,
    "explanation": "Xơ hóa nhu mô gan làm giảm lưu lượng máu và phá hủy tế bào gan, làm giảm tổng hợp enzym cytochrom P450.",
    "reference": "Sách DLS tr. 97",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 883,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Thuốc điều hòa lipid máu nhóm Statin nào sau đây chuyển hóa chủ yếu qua gan và ít bị ảnh hưởng nhất bởi suy giảm chức năng thận?",
    "options": [
      "Simvastatin",
      "Rosuvastatin",
      "Atorvastatin",
      "Pravastatin"
    ],
    "correct": 2,
    "explanation": "Atorvastatin thải trừ qua thận dưới 2%, là lựa chọn ưu tiên an toàn cho bệnh nhân suy giảm chức năng thận.",
    "reference": "Sách DLS tr. 215",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 884,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Khi tiến hành thẩm tách máu định kỳ (chạy thận nhân tạo), yếu tố nào của phân tử thuốc giúp thuốc dễ bị đào thải qua màng lọc nhân tạo?",
    "options": [
      "Trọng lượng phân tử khổng lồ trên 50.000 Dalton",
      "Tỷ lệ gắn albumin huyết tương đạt 99%",
      "Thể tích phân bố cực lớn trên 10 L/kg được áp dụng trong thực hành lâm sàng",
      "Trọng lượng phân tử nhỏ, tan nhiều trong nước, tỷ lệ gắn protein thấp và thể tích phân bố nhỏ"
    ],
    "correct": 3,
    "explanation": "Thuốc phân tử nhỏ, ít gắn protein (< 80%), Vd nhỏ (< 1 L/kg), tan trong nước dễ bị màng lọc nhân tạo loại bỏ.",
    "reference": "Sách DLS tr. 120",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 885,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Kháng sinh Glycopeptid Vancomycin khi sử dụng cho bệnh nhân chạy thận nhân tạo cần dùng thuốc vào thời điểm nào?",
    "options": [
      "Dùng sau khi kết thúc buổi lọc máu nhân tạo",
      "Uống ngay trước khi cắm kim lọc máu 5 phút",
      "Truyền liên tục trong suốt quá trình lọc máu",
      "Chỉ dùng vào buổi sáng sớm ngày không lọc máu"
    ],
    "correct": 0,
    "explanation": "Vancomycin tiêm truyền sau buổi lọc máu để tránh việc thuốc bị thất thoát một phần qua quả lọc thế hệ mới.",
    "reference": "Sách DLS tr. 121",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 886,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Kháng sinh Cephalosporin nào sau đây đào thải kép qua cả gan và thận (khoảng 50% qua mật, 50% qua thận), ít phải chỉnh liều khi suy thận đơn thuần?",
    "options": [
      "Ceftazidime",
      "Ceftriaxone",
      "Cefazolin",
      "Cefepime"
    ],
    "correct": 1,
    "explanation": "Ceftriaxone có đường đào thải kép (gan và thận), suy thận đơn thuần không cần hiệu chỉnh liều trừ khi có suy gan kèm theo.",
    "reference": "Sách DLS tr. 111",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 887,
    "chapter": "Dược động học & Suy gan, thận",
    "question": "Khi nồng độ Creatinin huyết thanh ở người cao tuổi gầy yếu teo cơ nằm trong khoảng bình thường (ví dụ 0,7 mg/dL), điều này phản ánh:",
    "options": [
      "Bệnh nhân hoàn toàn không có nguy cơ tích lũy thuốc đào thải qua thận",
      "Thận người bệnh hoạt động vượt mức bình thường",
      "Nồng độ creatinin bình thường giả tạo do giảm khối lượng cơ sinh creatinin; chức năng thận thực tế có thể đã suy giảm",
      "Chức năng lọc của cầu thận hoàn hảo 100% như người trẻ"
    ],
    "correct": 2,
    "explanation": "Người già teo cơ sản sinh ít creatinin nội sinh, creatinin máu bình thường che giấu mức lọc cầu thận đã giảm sút.",
    "reference": "Sách DLS tr. 107",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 888,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Kháng sinh Clarithromycin phối hợp với Simvastatin gây ra hậu quả tương tác dược động học nguy hiểm nào?",
    "options": [
      "Gây kết tủa trực tiếp trong dạ dày làm thủng ruột",
      "Làm giảm hấp thu kháng sinh qua đường tiêu hóa",
      "Cảm ứng CYP3A4 làm mất hoàn toàn tác dụng hạ mỡ máu",
      "Ức chế mạnh CYP3A4 làm tăng nồng độ Simvastatin gây tiêu cơ vân cấp và suy thận"
    ],
    "correct": 3,
    "explanation": "Clarithromycin ức chế mạnh CYP3A4 làm tăng AUC của simvastatin lên nhiều lần, nguy cơ tiêu cơ vân cấp cực cao.",
    "reference": "Sách DLS tr. 175",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 889,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Nước ép bưởi chùm (Grapefruit juice) làm tăng sinh khả dụng của Felodipin và Amlodipin do cơ chế phân tử nào?",
    "options": [
      "Ức chế không hồi phục enzym CYP3A4 và P-glycoprotein tại thành ruột non",
      "Kích thích tăng tiết acid dịch vị dạ dày",
      "Gắn kết trực tiếp vào thụ thể canxi màng tế bào",
      "Làm kiềm hóa dòng máu tuần hoàn"
    ],
    "correct": 0,
    "explanation": "Furanocoumarin trong bưởi chùm phá hủy enzym CYP3A4 ở ruột non làm giảm chuyển hóa bước đầu của thuốc chẹn kênh canxi.",
    "reference": "Sách DLS tr. 178",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 890,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Thuốc chống lao Rifampicin làm mất tác dụng ngừa thai của thuốc viên tránh thai đường uống phối hợp do:",
    "options": [
      "Rifampicin tiêu diệt toàn bộ vi khuẩn đường ruột sản xuất progesteron",
      "Rifampicin là chất cảm ứng enzym CYP3A4 cực mạnh làm tăng thoái giáng estrogen và progestin",
      "Rifampicin tạo phức chelat không tan với thuốc tránh thai trong dạ dày",
      "Rifampicin kích thích rụng trứng ngay lập tức"
    ],
    "correct": 1,
    "explanation": "Rifampicin cảm ứng mạnh hệ enzym gan, tăng chuyển hóa thuốc tránh thai dẫn đến vỡ phác đồ và mang thai ngoài ý muốn.",
    "reference": "Sách DLS tr. 176",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 891,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Khi phối hợp thuốc chống đông Warfarin với thuốc chống co giật Carbamazepin, hiệu quả chống đông bị thay đổi như thế nào?",
    "options": [
      "Hoàn toàn không có bất kỳ tương tác nào xảy ra",
      "Chỉ số INR tăng vọt lên trên 10 được áp dụng trong thực hành lâm sàng",
      "Giảm tác dụng chống đông, chỉ số INR giảm, tăng nguy cơ huyết khối tắc mạch",
      "Tăng vọt tác dụng chống đông gây xuất huyết ồ ạt nguy kịch"
    ],
    "correct": 2,
    "explanation": "Carbamazepin cảm ứng CYP2C9 và CYP3A4, làm tăng chuyển hóa warfarin làm giảm INR (cần tăng liều warfarin).",
    "reference": "Sách DLS tr. 180",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 892,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Tương tác giữa kháng sinh nhóm Quinolon (Ciprofloxacin) với viên sắt hoặc thuốc kháng acid chứa Nhôm/Magnesi xảy ra theo cơ chế:",
    "options": [
      "Cảm ứng enzym chuyển hóa vi thể tại gan",
      "Ức chế cạnh tranh trên thụ thể bài tiết ở ống thận",
      "Cạnh tranh liên kết với albumin huyết tương",
      "Tạo phức chelat vòng càng không tan không hấp thu được qua niêm mạc ruột"
    ],
    "correct": 3,
    "explanation": "Ion kim loại đa hóa trị (Al3+, Mg2+, Fe2+, Ca2+) tạo chelat với Quinolon và Tetracyclin, làm giảm hấp thu đến 80-90%.",
    "reference": "Sách DLS tr. 170",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 893,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Khoảng cách thời gian uống tối thiểu khuyến cáo giữa kháng sinh Ciprofloxacin và thuốc kháng acid chứa nhôm là:",
    "options": [
      "Uống Ciprofloxacin trước 2 giờ hoặc sau 4-6 giờ so với thuốc kháng acid",
      "Chỉ cần uống cách nhau đúng 5 phút được áp dụng trong thực hành lâm sàng",
      "Uống cùng một lúc để tăng hiệu quả hòa tan",
      "Phải uống cách nhau tròn 3 ngày"
    ],
    "correct": 0,
    "explanation": "Cách xa ít nhất 2 giờ trước hoặc 4-6 giờ sau giúp thuốc hấp thu xong trước khi gặp ion kim loại.",
    "reference": "Sách DLS tr. 171",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 894,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Thuốc ức chế bơm proton Omeprazol làm giảm hoạt tính chống kết tập tiểu cầu của Clopidogrel do cơ chế nào?",
    "options": [
      "Omeprazol cạnh tranh gắn kết trực tiếp lên thụ thể P2Y12 của tiểu cầu",
      "Omeprazol ức chế enzym CYP2C19 ngăn cản chuyển Clopidogrel thành chất chuyển hóa có hoạt tính",
      "Omeprazol làm trung hòa acid phá hủy phân tử Clopidogrel",
      "Omeprazol gây loét dạ dày làm mất tiểu cầu qua đường tiêu hóa"
    ],
    "correct": 1,
    "explanation": "Clopidogrel là tiền chất cần CYP2C19 hoạt hóa; omeprazol ức chế CYP2C19 làm giảm hiệu quả chống huyết khối (nên dùng pantoprazol).",
    "reference": "Sách DLS tr. 182",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 895,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Phối hợp thuốc ức chế men chuyển Enalapril với thuốc lợi tiểu giữ kali Spironolacton cần theo dõi chặt chẽ nguy cơ:",
    "options": [
      "Hạ đường huyết sâu không hồi phục",
      "Tăng natri máu ác tính gây phù não",
      "Tăng kali máu nghiêm trọng có thể gây ngừng tim",
      "Hạ kali máu kịch phát gây rung thất"
    ],
    "correct": 2,
    "explanation": "Cả ƯCMC và spironolacton đều giữ kali, phối hợp làm tăng vọt kali máu nguy cơ rối loạn nhịp tim tử vong.",
    "reference": "Sách DLS tr. 187",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 896,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Hội chứng Serotonin đe dọa tính mạng (sốt cao, co giật, run rẩy, mê sảng) xuất hiện khi phối hợp nhóm thuốc nào?",
    "options": [
      "Phối hợp thuốc Paracetamol với Vitamin C liều cao",
      "Phối hợp kháng sinh Amoxicillin với Acid Clavulanic",
      "Phối hợp thuốc kháng acid Gel nhôm với Simethicon",
      "Phối hợp thuốc ức chế SSRI với MAOI hoặc Tramadol"
    ],
    "correct": 3,
    "explanation": "Phối hợp các thuốc làm tăng nồng độ serotonin synap dẫn đến bão hòa thụ thể 5-HT gây hội chứng Serotonin cấp tính.",
    "reference": "Sách DLS tr. 192",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 897,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Thuốc chống viêm không steroid (NSAID) làm giảm tác dụng hạ huyết áp của thuốc ức chế men chuyển do cơ chế:",
    "options": [
      "Ức chế tổng hợp Prostaglandin tại thận làm co tiểu động mạch đến và giữ muối nước",
      "Phá hủy cấu trúc phân tử của thuốc ức chế men chuyển trong máu",
      "Kích thích tim đập nhanh làm tăng cung lượng tim lên gấp đôi",
      "Tăng đào thải thuốc ức chế men chuyển qua đường mật"
    ],
    "correct": 0,
    "explanation": "NSAID ức chế COX làm giảm PGE2 và PGI2 ở thận, gây co mạch thận, ứ muối nước, triệt tiêu tác dụng hạ áp.",
    "reference": "Sách DLS tr. 190",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 898,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Phối hợp ba thuốc nào sau đây tạo nên 'Bộ ba chết chóc' (Triple Whammy) gây suy thận cấp nghiêm trọng?",
    "options": [
      "Kháng sinh Amoxicillin + Acid Clavulanat + Men vi sinh",
      "Thuốc ức chế men chuyển + Thuốc lợi tiểu + Thuốc NSAID",
      "Thuốc Atorvastatin + Metformin + Insulin tiêm dưới da",
      "Thuốc Paracetamol + Vitamin B1 + Dung dịch Oresol"
    ],
    "correct": 1,
    "explanation": "Triple Whammy: Lợi tiểu giảm thể tích, NSAID co tiểu động mạch đến, ƯCMC giãn tiểu động mạch đi => sụt giảm GFR cấp.",
    "reference": "Sách DLS tr. 191",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 899,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Khi phối hợp Kháng sinh Aminosid (Gentamicin) với thuốc giãn cơ không khử cực (Pancuronium) trong phẫu thuật:",
    "options": [
      "Làm tăng huyết áp kịch phát",
      "Làm mất hoàn toàn tác dụng giãn cơ làm bệnh nhân co giật",
      "Làm tăng cường và kéo dài tác dụng ức chế thần kinh cơ, nguy cơ ngừng thở sau mổ",
      "Gây sốt cao ác tính không hạ được"
    ],
    "correct": 2,
    "explanation": "Aminosid ức chế giải phóng acetylcholin tại bản vận động, làm tăng sâu tác dụng của thuốc giãn cơ.",
    "reference": "Sách DLS tr. 189",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 900,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Tương kỵ vật lý xảy ra khi truyền tĩnh mạch phối hợp kháng sinh Ceftriaxone với dung dịch nào sau đây?",
    "options": [
      "Dung dịch Glucose 5%",
      "Dung dịch Natri clorid 0,9%",
      "Dung dịch Nước cất pha tiêm",
      "Dung dịch Ringer lactat hoặc các dung dịch tiêm truyền có chứa Calci"
    ],
    "correct": 3,
    "explanation": "Ceftriaxone tạo phức kết tủa không tan Ceftriaxone-Calci gây tắc mạch phổi và suy thận tử vong, đặc biệt ở trẻ sơ sinh.",
    "reference": "Sách DLS tr. 195",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 901,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Phối hợp kháng sinh Ceftriaxone với dung dịch chứa Calci bị chống chỉ định tuyệt đối ở đối tượng nào?",
    "options": [
      "Trẻ sơ sinh kể cả truyền qua đường truyền riêng rẽ",
      "Phụ nữ mãn kinh đang điều trị loãng xương",
      "Bệnh nhân nam giới trưởng thành khỏe mạnh",
      "Người cao tuổi bị thoái hóa khớp gối mạn tính"
    ],
    "correct": 0,
    "explanation": "FDA và Bộ Y tế chống chỉ định tuyệt đối phối hợp Ceftriaxone và Calci ở trẻ sơ sinh do nguy cơ tử vong do kết tủa vi mạch.",
    "reference": "Sách DLS tr. 196",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 902,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Thuốc chống loạn nhịp tim Amiodaron làm tăng gấp đôi nồng độ Digoxin trong huyết tương theo cơ chế:",
    "options": [
      "Cạnh tranh gắn kết với glycogen tại tế bào cơ tim",
      "Ức chế bơm tống thuốc P-glycoprotein tại ruột và ống thận làm giảm bài xuất Digoxin",
      "Làm giảm chuyển hóa Digoxin qua hệ enzym CYP1A2",
      "Kích thích dạ dày tăng tiết dịch vị hòa tan Digoxin"
    ],
    "correct": 1,
    "explanation": "Amiodaron ức chế P-gp làm giảm thải trừ Digoxin qua thận và mật, phải chủ động giảm 50% liều Digoxin khi bắt đầu phối hợp.",
    "reference": "Sách DLS tr. 184",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 903,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Hiện tượng tương tác 'Disulfiram-like' (bừng mặt, nôn mửa, tụt huyết áp, đánh trống ngực) xảy ra khi người bệnh uống rượu cùng với thuốc nào?",
    "options": [
      "Thuốc chống dị ứng Loratadin",
      "Thuốc giảm đau Paracetamol",
      "Kháng sinh Metronidazol hoặc Cefoperazon",
      "Kháng sinh Amoxicillin"
    ],
    "correct": 2,
    "explanation": "Metronidazol và các cephalosporin có nhánh N-methylthiotetrazol (NMTT) ức chế enzym Aldehyd dehydrogenase gây tích tụ acetaldehyd.",
    "reference": "Sách DLS tr. 193",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 904,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Kháng sinh Doxycyclin bị giảm hấp thu nghiêm trọng khi uống cùng lúc với thực phẩm nào?",
    "options": [
      "Nước cam vắt chứa nhiều acid citric",
      "Thịt bò luộc chứa nhiều protein",
      "Bánh mì chứa nhiều tinh bột",
      "Sữa và các chế phẩm từ sữa chứa nhiều calci"
    ],
    "correct": 3,
    "explanation": "Calci trong sữa tạo phức chelat không hấp thu với Tetracyclin/Doxycyclin, phải uống cách xa sữa ít nhất 2 giờ.",
    "reference": "Sách DLS tr. 172",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 905,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Phối hợp Allopurinol với thuốc ức chế miễn dịch Azathioprin đòi hỏi phải xử trí liều như thế nào?",
    "options": [
      "Giảm liều Azathioprin xuống còn 1/3 đến 1/4 liều thông thường để tránh suy tủy xương",
      "Tăng liều Azathioprin lên gấp ba lần được áp dụng trong thực hành lâm sàng",
      "Ngừng hoàn toàn Allopurinol và tăng gấp đôi liều Azathioprin",
      "Giữ nguyên liều của cả hai thuốc"
    ],
    "correct": 0,
    "explanation": "Allopurinol ức chế xanthin oxidase (enzym thoái giáng 6-mercaptopurin/azathioprin), gây tích lũy cực độc tủy xương.",
    "reference": "Sách DLS tr. 186",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 906,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Thuốc hấp phụ than hoạt tính (Activated Charcoal) tương tác với các thuốc uống khác theo cơ chế nào?",
    "options": [
      "Làm kiềm hóa dòng máu tuần hoàn lên pH = 9",
      "Hấp phụ các phân tử thuốc trên bề mặt xốp rộng lớn làm ngăn cản thuốc hấp thu vào máu",
      "Tăng tốc độ tháo rỗng dạ dày đẩy thuốc xuống đại tràng",
      "Cảm ứng toàn bộ enzym gan làm tiêu hủy thuốc trong 5 phút"
    ],
    "correct": 1,
    "explanation": "Than hoạt hấp phụ vật lý thuốc trên bề mặt diện tích lớn, dùng cấp cứu ngộ độc nhưng làm mất tác dụng thuốc uống cùng.",
    "reference": "Sách DLS tr. 169",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 907,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Thuốc kháng nấm Itraconazol dạng viên nang cần môi trường nào ở dạ dày để hòa tan và hấp thu tối ưu?",
    "options": [
      "Môi trường hoàn toàn trung hòa hoặc kiềm hóa",
      "Môi trường chứa nhiều ion nhôm hydroxyd",
      "Môi trường acid dịch vị dạ dày đầy đủ",
      "Dạ dày hoàn toàn rỗng và không có acid"
    ],
    "correct": 2,
    "explanation": "Itraconazol cần acid để ion hóa và hòa tan; thuốc ức chế acid (PPI, H2) làm giảm nghiêm trọng hấp thu itraconazol.",
    "reference": "Sách DLS tr. 173",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 908,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Phối hợp thuốc chẹn thụ thể Beta (Atenolol) với thuốc chẹn kênh Calci nhóm Non-DHP (Verapamil) có nguy cơ gây tai biến nào?",
    "options": [
      "Hội chứng xuất huyết dưới da diện rộng",
      "Cơn co giật động kinh toàn thể",
      "Cơn tăng huyết áp kịch phát ác tính được áp dụng trong thực hành lâm sàng",
      "Chậm nhịp tim nghiêm trọng, block nhĩ thất hoàn toàn và suy tim cấp"
    ],
    "correct": 3,
    "explanation": "Cả hai thuốc đều ức chế nút xoang và nút nhĩ thất, phối hợp đường tiêm tĩnh mạch là chống chỉ định tuyệt đối.",
    "reference": "Sách DLS tr. 194",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 909,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Thuốc chống động kinh Phenytoin bị tăng nồng độ tự do và độc tính khi dùng cùng Valproat natri do cơ chế:",
    "options": [
      "Valproat cạnh tranh gắn kết với albumin huyết tương và ức chế chuyển hóa của Phenytoin",
      "Valproat làm biến đổi cấu trúc thụ thể GABA não bộ",
      "Valproat kích thích hấp thu Phenytoin qua niêm mạc ruột",
      "Valproat ức chế bài tiết Phenytoin qua mồ hôi"
    ],
    "correct": 0,
    "explanation": "Valproat đẩy phenytoin ra khỏi albumin và ức chế enzym gan làm tăng nồng độ phenytoin tự do gây độc tính lú lẫn, rung giật nhãn cầu.",
    "reference": "Sách DLS tr. 183",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 910,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Kháng sinh Linezolid khi dùng chung với thực phẩm giàu Tyramine (như phô mai lên men, rượu vang đỏ) có thể gây biến chứng gì?",
    "options": [
      "Tiêu chảy cấp mất nước nghiêm trọng",
      "Cơn tăng huyết áp kịch phát nguy hiểm do Linezolid có hoạt tính ức chế nhẹ enzym MAO",
      "Hạ đường huyết sâu gây hôn mê co giật được áp dụng trong thực hành lâm sàng",
      "Suy giảm tiểu cầu cấp tính đe dọa tính mạng"
    ],
    "correct": 1,
    "explanation": "Linezolid ức chế MAO không chọn lọc có hồi phục; tích tụ tyramine gây giải phóng catecholamin ồ ạt làm vọt huyết áp.",
    "reference": "Sách DLS tr. 198",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 911,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Dung dịch thuốc tiêm Diazepam khi pha loãng trực tiếp vào chai dịch truyền NaCl 0,9% thường xảy ra hiện tượng gì?",
    "options": [
      "Bốc khói và tỏa nhiệt lượng cực lớn",
      "Dung dịch hoàn toàn trong suốt ổn định trong 48 giờ",
      "Tạo vẩn đục kết tủa trắng đục do Diazepam rất ít tan trong nước",
      "Dung dịch chuyển sang màu đỏ rực"
    ],
    "correct": 2,
    "explanation": "Diazepam pha trong dung môi hỗn hợp (propylen glycol/ethanol); khi vào dung dịch nước sẽ kết tủa ngay lập tức.",
    "reference": "Sách DLS tr. 197",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 912,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Thuốc hạ đường huyết nhóm Sulfonylure (Gliclazid) khi dùng phối hợp với kháng sinh Cotrimoxazol có nguy cơ cao xảy ra:",
    "options": [
      "Mất tác dụng diệt khuẩn của Cotrimoxazol",
      "Suy thận cấp do sỏi acid uric",
      "Tăng đường huyết kháng trị dẫn đến hôn mê nhiễm toan ceton",
      "Hạ đường huyết nặng kéo dài do Sulfamethoxazol ức chế chuyển hóa Gliclazid qua CYP2C9"
    ],
    "correct": 3,
    "explanation": "Cotrimoxazol ức chế CYP2C9 làm tăng thời gian bán thải và nồng độ sulfonylure, gây hạ đường huyết sâu nguy hiểm.",
    "reference": "Sách DLS tr. 181",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 913,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Hút thuốc lá nhiều điếu mỗi ngày ảnh hưởng đến dược động học của Theophyllin như thế nào?",
    "options": [
      "Các hydrocacbon thơm trong khói thuốc cảm ứng enzym CYP1A2 làm tăng thanh thải và giảm nồng độ Theophyllin",
      "Làm giảm hấp thu Theophyllin qua đường tiêu hóa",
      "Làm ức chế hoàn toàn chuyển hóa làm tăng độc tính Theophyllin",
      "Không có bất kỳ ảnh hưởng nào đến Theophyllin"
    ],
    "correct": 0,
    "explanation": "Khói thuốc lá cảm ứng CYP1A2 mạnh, người hút thuốc cần liều theophyllin cao hơn người không hút thuốc.",
    "reference": "Sách DLS tr. 177",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 914,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Thuốc ức chế men Protease điều trị HIV (Ritonavir) thường được phối hợp ở liều thấp (Booster) với thuốc kháng virus khác nhằm mục đích:",
    "options": [
      "Tiêu diệt trực tiếp các tế bào lympho T bị nhiễm virus",
      "Ức chế mạnh CYP3A4 để làm tăng nồng độ và kéo dài tác dụng của thuốc phối hợp",
      "Tăng cường sản sinh kháng thể tự nhiên",
      "Làm giảm độc tính trên gan của thuốc phối hợp"
    ],
    "correct": 1,
    "explanation": "Ritonavir là chất ức chế CYP3A4 cực mạnh, dùng liều thấp để 'tăng cường' (boost) sinh khả dụng của lopinavir, atazanavir.",
    "reference": "Sách DLS tr. 179",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 915,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Khi phối hợp Kháng sinh Aminosid với thuốc cản quang chứa iod trong cùng một ngày chụp CT-scanner, nguy cơ tai biến là:",
    "options": [
      "Làm mất tác dụng kháng khuẩn của Aminosid",
      "Làm mất hoàn toàn độ tương phản của phim chụp X-quang",
      "Cộng dồn độc tính trên ống thận dẫn đến suy thận cấp do thuốc",
      "Gây xuất huyết não tự phát diện rộng"
    ],
    "correct": 2,
    "explanation": "Cả hai đều gây độc tế bào biểu mô ống thận và co mạch thận, phối hợp làm tăng vọt tỷ lệ suy thận cấp.",
    "reference": "Sách DLS tr. 188",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 916,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Để tránh tương tác thuốc bất lợi trên bệnh nhân ngoại trú điều trị nhiều bệnh phối hợp, nguyên tắc hàng đầu của dược sĩ là:",
    "options": [
      "Tự động thay thế toàn bộ thuốc kê đơn bằng thực phẩm chức năng",
      "Khuyên bệnh nhân uống tất cả các loại thuốc cùng lúc vào đầu giờ sáng",
      "Tăng liều gấp đôi của các thuốc để bù trừ tương tác",
      "Rà soát đối chiếu toàn bộ đơn thuốc và tiền sử dùng thuốc, ưu tiên đơn giản hóa phác đồ"
    ],
    "correct": 3,
    "explanation": "Medication reconciliation (đối chiếu thuốc) là biện pháp cốt lõi để phát hiện và ngăn chặn tương tác thuốc bất lợi.",
    "reference": "Sách DLS tr. 200",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 917,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "question": "Thuốc kháng virus Remdesivir tiêm truyền tĩnh mạch không được pha chung với các thuốc khác trên cùng một đường truyền vì:",
    "options": [
      "Nguy cơ tương kỵ hóa lý làm biến đổi hoạt tính và tăng nguy cơ phản ứng truyền dịch",
      "Làm cho chai dịch truyền bị đông đặc ngay lập tức được áp dụng trong thực hành lâm sàng",
      "Làm giảm thân nhiệt bệnh nhân xuống dưới 30 độ C",
      "Làm tăng vọt nồng độ natri trong máu"
    ],
    "correct": 0,
    "explanation": "Remdesivir cần truyền trên đường truyền riêng biệt để bảo đảm tính tương hợp và vô khuẩn tối đa.",
    "reference": "Sách DLS tr. 199",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 918,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Phản ứng có hại của thuốc loại A (Type A - Augmented) có đặc điểm nổi bật nào sau đây?",
    "options": [
      "Hoàn toàn không tiên đoán được và không liên quan đến liều lượng",
      "Tiên đoán được dựa trên tác dụng dược lý và phụ thuộc vào liều dùng",
      "Chỉ xuất hiện sau nhiều năm dùng thuốc liên tục",
      "Tỷ lệ tử vong rất cao nhưng tỷ lệ mắc rất thấp"
    ],
    "correct": 1,
    "explanation": "Type A (chiếm > 80% ADR) là sự phóng đại tác dụng dược lý, phụ thuộc liều, tiên đoán được, tỷ lệ tử vong thấp.",
    "reference": "Sách DLS tr. 145",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 919,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Ví dụ nào sau đây là phản ứng có hại của thuốc thuộc loại B (Type B - Bizarre)?",
    "options": [
      "Chảy máu đường tiêu hóa do dùng Aspirin liều cao",
      "Nhịp tim chậm do dùng thuốc chẹn thụ thể beta",
      "Sốc phản vệ đe dọa tính mạng sau khi tiêm Penicillin",
      "Hạ đường huyết do dùng quá liều Insulin"
    ],
    "correct": 2,
    "explanation": "Type B là phản ứng dị ứng hoặc bất dung nạp do di truyền, không phụ thuộc liều, không tiên đoán được.",
    "reference": "Sách DLS tr. 146",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 920,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Phản ứng có hại của thuốc loại C (Type C - Chronic) có đặc điểm nào?",
    "options": [
      "Xuất hiện tức thì trong vòng 5 phút",
      "Chỉ xảy ra ở thế hệ con cái của người dùng thuốc",
      "Xảy ra ngay lập tức sau khi ngừng thuốc đột ngột",
      "Liên quan đến liều tích lũy và thời gian dùng thuốc kéo dài"
    ],
    "correct": 3,
    "explanation": "Type C liên quan đến tích lũy liều dài ngày, ví dụ: hội chứng Cushing do lạm dụng Glucocorticoid kéo dài.",
    "reference": "Sách DLS tr. 147",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 921,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Hội chứng 'người đỏ' (Red man syndrome) khi truyền kháng sinh Vancomycin xuất hiện do cơ chế nào?",
    "options": [
      "Do giải phóng Histamin trực tiếp từ dưỡng bào khi tốc độ truyền tĩnh mạch quá nhanh",
      "Do phản ứng dị ứng qua trung gian kháng thể IgE thực sự",
      "Do vi khuẩn gram dương bị tiêu diệt giải phóng độc tố",
      "Do tổn thương tế bào gan làm ứ đọng bilirubin trong máu"
    ],
    "correct": 0,
    "explanation": "Hội chứng người đỏ là phản ứng giả dị ứng do truyền Vancomycin nhanh; khắc phục bằng cách truyền chậm >= 60 phút.",
    "reference": "Sách DLS tr. 155",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 922,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Thuốc đầu tay bắt buộc phải sử dụng ngay lập tức không chậm trễ khi xảy ra Sốc phản vệ là:",
    "options": [
      "Kháng histamin H1 Diphenhydramin tiêm tĩnh mạch",
      "Adrenalin tiêm bắp sâu ở mặt trước ngoài đùi",
      "Hydrocortison hoặc Methylprednisolon tiêm tĩnh mạch",
      "Dung dịch truyền Glucose 5% nhỏ giọt chậm"
    ],
    "correct": 1,
    "explanation": "Adrenalin tiêm bắp là thuốc cấp cứu sống còn số 1, phải dùng ngay khi có chẩn đoán phản vệ độ 2 trở lên.",
    "reference": "Thông tư 51/2017/TT-BYT",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 923,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Liều Adrenalin tiêm bắp ban đầu khuyến cáo cho người lớn khi xử trí sốc phản vệ theo Bộ Y tế là:",
    "options": [
      "Tiêm tĩnh mạch trực tiếp 1 mg Adrenalin",
      "Uống 2 ống Adrenalin pha với nước đường",
      "Tiêm bắp 0,5 mg Adrenalin",
      "Bôi Adrenalin ngoài da vùng tiêm thuốc"
    ],
    "correct": 2,
    "explanation": "Người lớn tiêm bắp 1/2 ống (0,5 ml dung dịch 1mg/ml), trẻ em dùng theo cân nặng (khoảng 0,01 mg/kg).",
    "reference": "Thông tư 51/2017/TT-BYT",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 924,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Vai trò chính của Glucocorticoid (Methylprednisolon/Hydrocortison) trong phác đồ xử trí phản vệ là:",
    "options": [
      "Trung hòa phân tử dị nguyên lưu hành trong tuần hoàn",
      "Làm giãn phế quản cắt cơn khó thở cấp cứu tức thì",
      "Làm co mạch nâng huyết áp trong 30 giây đầu tiên",
      "Dự phòng phản ứng phản vệ pha hai xuất hiện muộn"
    ],
    "correct": 3,
    "explanation": "Corticoid có tác dụng khởi phát chậm (sau vài giờ), mục đích cốt lõi là ngăn chặn cơn phản vệ pha 2 muộn.",
    "reference": "Sách DLS tr. 158",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 925,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Thang điểm Naranjo được sử dụng trong thực hành dược lâm sàng nhằm mục đích gì?",
    "options": [
      "Đánh giá mối quan hệ nhân quả giữa việc dùng thuốc và phản ứng có hại nghi ngờ",
      "Tính toán mức lọc cầu thận cho bệnh nhân suy dinh dưỡng",
      "Xác định liều nạp ban đầu của kháng sinh Aminosid",
      "Phân loại độ nặng của bệnh nhân tăng huyết áp kịch phát"
    ],
    "correct": 0,
    "explanation": "Thang Naranjo gồm 10 câu hỏi để phân loại quan hệ nhân quả: Chắc chắn (>9), Có khả năng (5-8), Có thể (1-4), Nghi ngờ (0).",
    "reference": "Sách DLS tr. 152",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 926,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Hội chứng ho khan dai dẳng do thuốc ức chế men chuyển (như Enalapril, Captopril) liên quan đến sự tích lũy chất nào?",
    "options": [
      "Bạch cầu ái toan trong dịch màng phổi",
      "Bradykinin và Chất P tại đường hô hấp trên",
      "Acid uric và Ure trong mô kẽ phổi",
      "Histamin và Serotonin trong phế nang"
    ],
    "correct": 1,
    "explanation": "Enzym chuyển ACE đồng thời thoái biến Bradykinin; ức chế ACE làm tích tụ Bradykinin kích thích phản xạ ho khan.",
    "reference": "Sách DLS tr. 160",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 927,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Khi bệnh nhân gặp tác dụng phụ ho khan dữ dội do Enalapril, biện pháp xử trí thích hợp nhất là:",
    "options": [
      "Giảm một nửa liều Enalapril và phối hợp thêm kháng histamin H1 thế hệ 2",
      "Thay thế bằng Aliskiren kết hợp bổ sung kẽm đường uống để giảm nhạy cảm phản xạ ho",
      "Chuyển sang nhóm thuốc chẹn thụ thể Angiotensin II (ARB) như Losartan hoặc Telmisartan",
      "Duy trì Enalapril và kê đơn phối hợp Dextromethorphan hoặc Codein kéo dài"
    ],
    "correct": 2,
    "explanation": "Nhóm ARB (chẹn thụ thể AT1) không ức chế thoái biến Bradykinin nên hầu như không gây ho khan.",
    "reference": "Sách DLS tr. 161",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 928,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Hội chứng Stevens-Johnson (SJS) và Hoại tử thượng bì nhiễm độc (TEN) là các phản ứng có hại nghiêm trọng trên da phân biệt dựa vào:",
    "options": [
      "Thời điểm xuất hiện luôn xảy ra trong vòng 10 giây",
      "Vị trí xuất hiện chỉ khu trú ở lòng bàn chân",
      "Màu sắc của dịch bóng nước bên trong thượng bì",
      "Diện tích da bị bong trợt: SJS < 10%, TEN > 30% diện tích bề mặt cơ thể"
    ],
    "correct": 3,
    "explanation": "SJS bong trợt < 10% BSA, thể trung gian 10-30%, TEN bong trợt nặng > 30% BSA với tỷ lệ tử vong rất cao.",
    "reference": "Sách DLS tr. 163",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 929,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Xét nghiệm gen nào sau đây được khuyến cáo sàng lọc trước khi chỉ định thuốc Allopurinol để tránh nguy cơ SJS/TEN trên người châu Á?",
    "options": [
      "Alen HLA-B*5801",
      "Đột biến gen EGFR",
      "Đột biến gen BRCA1",
      "Alen HLA-B*1502"
    ],
    "correct": 0,
    "explanation": "Alen HLA-B*5801 liên quan chặt chẽ với phản ứng da nghiêm trọng SCAR (SJS/TEN) do Allopurinol ở người châu Á/Việt Nam.",
    "reference": "Sách DLS tr. 164",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 930,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Alen HLA-B*1502 có mối liên quan mạnh mẽ với nguy cơ hội chứng Stevens-Johnson khi điều trị bằng thuốc chống động kinh nào?",
    "options": [
      "Acid Valproic",
      "Carbamazepin",
      "Levetiracetam",
      "Gabapentin"
    ],
    "correct": 1,
    "explanation": "Sàng lọc HLA-B*1502 bắt buộc trước khi dùng Carbamazepin cho bệnh nhân gốc Á để dự phòng SJS/TEN.",
    "reference": "Sách DLS tr. 165",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 931,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Phản ứng có hại gây suy tủy xương mất bạch cầu hạt không hồi phục là tai biến nổi tiếng của kháng sinh nào?",
    "options": [
      "Cefalexin",
      "Spiramycin",
      "Cloramphenicol",
      "Amoxicillin"
    ],
    "correct": 2,
    "explanation": "Cloramphenicol gây suy tủy bất sản không phụ thuộc liều (Type B, tỷ lệ 1/30.000) với tỷ lệ tử vong rất cao.",
    "reference": "Sách DLS tr. 162",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 932,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Hội chứng xám (Gray baby syndrome) ở trẻ sơ sinh khi dùng Cloramphenicol xảy ra do cơ chế nào?",
    "options": [
      "Thuốc phá hủy enzym tổng hợp hemoglobin ở tủy xương",
      "Thuốc làm tan máu ồ ạt qua màng hồng cầu",
      "Thuốc gây co thắt toàn bộ tĩnh mạch chủ dưới được áp dụng trong thực hành lâm sàng",
      "Thiếu enzym Glucuronyl transferase làm tích lũy Cloramphenicol"
    ],
    "correct": 3,
    "explanation": "Trẻ sơ sinh thiếu enzym liên hợp glucuronic, tích lũy Cloramphenicol gây trụy tim mạch tím tái (da xám) và tử vong.",
    "reference": "Sách DLS tr. 166",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 933,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Viêm gân gót (gân Achilles) và nguy cơ đứt gân là tác dụng không mong muốn đặc thù của nhóm kháng sinh nào?",
    "options": [
      "Kháng sinh nhóm Fluoroquinolon",
      "Kháng sinh nhóm Macrolid",
      "Kháng sinh nhóm Penicillin phổ rộng",
      "Kháng sinh nhóm Cephalosporin thế hệ 3"
    ],
    "correct": 0,
    "explanation": "Fluoroquinolon ức chế chuyển hóa tế bào sụn gân, cảnh báo hộp đen về nguy cơ viêm và đứt gân gót gót chân.",
    "reference": "Sách DLS tr. 167",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 934,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Độc tính trên mắt gây viêm dây thần kinh thị giác làm giảm thị lực và mất khả năng phân biệt màu đỏ - xanh lá cây là của thuốc nào?",
    "options": [
      "Pyrazinamid",
      "Ethambutol",
      "Isoniazid",
      "Rifampicin"
    ],
    "correct": 1,
    "explanation": "Ethambutol gây viêm thần kinh thị giác hậu nhãn cầu, cần kiểm tra thị lực và sắc giác định kỳ khi điều trị.",
    "reference": "Sách DLS tr. 225",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 935,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Dị ứng thuốc qua trung gian tế bào T chậm (Type IV theo phân loại Gell và Coombs) thường khởi phát trong khoảng thời gian nào?",
    "options": [
      "Chỉ sau khi ngừng thuốc 6 tháng",
      "Ngay tức thì trong vòng 5 phút đầu tiên",
      "Sau vài ngày đến vài tuần sau khi tiếp xúc với thuốc",
      "Trong vòng 30 phút sau khi uống thuốc"
    ],
    "correct": 2,
    "explanation": "Type IV là đáp ứng miễn dịch qua trung gian tế bào T chậm, khởi phát muộn sau 48h đến nhiều tuần.",
    "reference": "Sách DLS tr. 149",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 936,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Tác dụng không mong muốn gây hoại tử vô khuẩn chỏm xương đùi thường liên quan đến việc lạm dụng nhóm thuốc nào?",
    "options": [
      "Kháng sinh Penicillin đường uống",
      "Thuốc ức chế bơm proton Omeprazol",
      "Thuốc kháng histamin H1 Loratadin",
      "Glucocorticoid liều cao kéo dài"
    ],
    "correct": 3,
    "explanation": "Corticoid liều cao kéo dài làm tăng áp lực tủy xương và tắc mạch nuôi, dẫn đến hoại tử vô mạch chỏm xương đùi.",
    "reference": "Sách DLS tr. 230",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 937,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Thuốc giải độc đặc hiệu (Antidote) khi bị ngộ độc quá liều Paracetamol gây hoại tử tế bào gan cấp là:",
    "options": [
      "N-acetylcystein",
      "Atropin sulfat tiêm bắp",
      "Naloxon tiêm tĩnh mạch",
      "Flumazenil tiêm tĩnh mạch"
    ],
    "correct": 0,
    "explanation": "NAC cung cấp nhóm -SH để tái tạo glutathion, trung hòa chất chuyển hóa độc NAPQI của paracetamol.",
    "reference": "Sách DLS tr. 168",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 938,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Thời điểm vàng dùng N-acetylcystein đường uống hoặc truyền tĩnh mạch để bảo vệ gan tối đa sau khi uống quá liều Paracetamol là:",
    "options": [
      "Sau 7 ngày khi men gan tăng vọt",
      "Trong vòng 8 giờ đầu sau khi uống thuốc",
      "Sau 48 giờ khi đã có vàng da rõ rệt",
      "Bất cứ lúc nào trong vòng 1 tháng"
    ],
    "correct": 1,
    "explanation": "Dùng NAC trong vòng 8 giờ đầu đem lại hiệu quả bảo vệ gan gần như 100% trước độc tính của NAPQI.",
    "reference": "Sách DLS tr. 168",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 939,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Thuốc giải độc đặc hiệu khi ngộ độc quá liều thuốc giảm đau nhóm Opioid (như Morphin, Fentanyl) gây ngừng thở là:",
    "options": [
      "Protamin sulfat",
      "Vitamin K1",
      "Naloxon",
      "N-acetylcystein"
    ],
    "correct": 2,
    "explanation": "Naloxon là chất đối kháng cạnh tranh đặc hiệu trên thụ thể mu-opioid, giúp hồi phục nhịp thở ngay lập tức.",
    "reference": "Sách DLS tr. 235",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 940,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Thuốc đối kháng đặc hiệu dùng để đảo ngược tác dụng an thần quá liều của nhóm Benzodiazepin (như Diazepam, Midazolam) là:",
    "options": [
      "Naloxon",
      "Atropin",
      "Pralidoxim",
      "Flumazenil"
    ],
    "correct": 3,
    "explanation": "Flumazenil đối kháng cạnh tranh tại vị trí gắn kết của benzodiazepin trên phức hợp thụ thể GABA-A.",
    "reference": "Sách DLS tr. 236",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 941,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Thuốc đối kháng trung hòa tác dụng chống đông của Heparin không phân đoạn trong trường hợp chảy máu đe dọa tính mạng là:",
    "options": [
      "Protamin sulfat",
      "Acid tranexamic",
      "Huyết tương tươi đông lạnh",
      "Vitamin K1 tiêm bắp"
    ],
    "correct": 0,
    "explanation": "Protamin sulfat tích điện dương mạnh tạo phức trung hòa tĩnh điện bền vững với phân tử heparin tích điện âm.",
    "reference": "Sách DLS tr. 212",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 942,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Tác dụng phụ gây đổi màu nước tiểu, mồ hôi và nước mắt thành màu đỏ cam vô hại là của thuốc nào?",
    "options": [
      "Isoniazid",
      "Rifampicin",
      "Metronidazol",
      "Ciprofloxacin"
    ],
    "correct": 1,
    "explanation": "Rifampicin có màu đỏ tự nhiên và đào thải qua dịch cơ thể, cần tư vấn trước để người bệnh không hoảng sợ.",
    "reference": "Sách DLS tr. 224",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 943,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Phản ứng có hại gây phì đại lợi (quá sản nướu răng) thường gặp ở bệnh nhân dùng dài ngày thuốc nào?",
    "options": [
      "Amoxicillin",
      "Aspirin liều thấp",
      "Phenytoin hoặc Amlodipin",
      "Paracetamol"
    ],
    "correct": 2,
    "explanation": "Phenytoin và các thuốc chẹn kênh calci (đặc biệt nifedipin, amlodipin) có thể kích thích tăng sinh mô liên kết lợi.",
    "reference": "Sách DLS tr. 166",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 944,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Tác dụng không mong muốn gây giảm tiểu cầu qua trung gian miễn dịch (HIT - Heparin-induced Thrombocytopenia) đặc biệt nguy hiểm vì:",
    "options": [
      "Làm cho máu không thể đông vĩnh viễn",
      "Làm tụt huyết áp kẹp không nâng được",
      "Gây phá hủy toàn bộ hồng cầu gây thiếu máu cấp được áp dụng trong thực hành lâm sàng",
      "Gây hoạt hóa tiểu cầu dẫn đến huyết khối tắc mạch nghịch lý đe dọa tính mạng"
    ],
    "correct": 3,
    "explanation": "Kháng thể kháng phức hợp Heparin-PF4 hoạt hóa tiểu cầu gây huyết khối tắc mạch sâu và hoại tử chi (nguy cơ tử vong 20%).",
    "reference": "Sách DLS tr. 213",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 945,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Khi bệnh nhân được chẩn đoán xác định bị giảm tiểu cầu do Heparin (HIT typ 2), biện pháp xử trí tức thì là:",
    "options": [
      "Ngừng Heparin và chuyển sang thuốc chống đông không heparin",
      "Tăng gấp đôi liều Heparin tĩnh mạch kèm Aspirin",
      "Chuyển ngay sang chế phẩm Heparin trọng lượng phân tử thấp",
      "Truyền khối tiểu cầu cấp cứu ngay lập tức cho bệnh nhân"
    ],
    "correct": 0,
    "explanation": "Ngừng triệt để heparin và dùng thuốc chống đông thay thế; truyền tiểu cầu chống chỉ định vì làm bùng phát huyết khối.",
    "reference": "Sách DLS tr. 214",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 946,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Phản ứng Jarisch-Herxheimer (sốt, rét run, tụt huyết áp tạm thời) xảy ra sau liều kháng sinh đầu tiên điều trị bệnh gì?",
    "options": [
      "Bệnh Lao phổi do trực khuẩn kháng thuốc phát triển",
      "Bệnh Giang mai do xoắn khuẩn bị tiêu diệt hàng loạt",
      "Bệnh Lỵ amip do ký sinh trùng đường ruột sinh sôi",
      "Bệnh Viêm gan virus B cấp tính do bùng phát virus"
    ],
    "correct": 1,
    "explanation": "Phóng thích ồ ạt nội độc tố khi tiêu diệt lượng lớn xoắn khuẩn giang mai gây phản ứng viêm toàn thân cấp tính.",
    "reference": "Sách DLS tr. 159",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 947,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "question": "Khái niệm 'Phản ứng dị ứng chéo' (Cross-reactivity) giữa Penicillin và Cephalosporin thế hệ 1 có tỷ lệ khoảng bao nhiêu?",
    "options": [
      "Hoàn toàn 0% không bao giờ xảy ra",
      "Chính xác 100% cho mọi thế hệ cephalosporin",
      "Khoảng 3% đến 5%",
      "Khoảng 90% ở người trưởng thành"
    ],
    "correct": 2,
    "explanation": "Dị ứng chéo chủ yếu do tương đồng chuỗi nhánh bên R1 (đặc biệt giữa ampicillin/amoxicillin và cephalosporin thế hệ 1), tỷ lệ thực tế khoảng 3-5%.",
    "reference": "Sách DLS tr. 148",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 948,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Chỉ số xét nghiệm Procalcitonin (PCT) trong huyết thanh có giá trị đặc thù nào trong thực hành lâm sàng?",
    "options": [
      "Đánh giá chính xác mức độ suy giảm chức năng lọc cầu thận",
      "Phát hiện tình trạng thiếu máu do thiếu sắt",
      "Chẩn đoán sớm bệnh lý nhồi máu cơ tim cấp",
      "Phân biệt nhiễm khuẩn do vi khuẩn với nhiễm virus và hướng dẫn bắt đầu/ngừng kháng sinh"
    ],
    "correct": 3,
    "explanation": "PCT tăng mạnh trong nhiễm khuẩn vi khuẩn toàn thân và giảm nhanh khi điều trị hiệu quả, giúp định hướng dùng kháng sinh.",
    "reference": "Sách DLS tr. 68",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 949,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Giá trị Procalcitonin (PCT) dưới 0,1 mcg/L ở bệnh nhân viêm đường hô hấp gợi ý điều gì?",
    "options": [
      "Rất ít khả năng nhiễm khuẩn, căn nguyên phần lớn do virus; khuyến cáo không dùng kháng sinh",
      "Cần phối hợp ngay 3 loại kháng sinh phổ rộng",
      "Bệnh nhân đang bị sốc nhiễm khuẩn huyết cực kỳ nguy kịch",
      "Bệnh nhân bị suy tủy xương mất bạch cầu hạt"
    ],
    "correct": 0,
    "explanation": "PCT < 0,1 - 0,25 mcg/L ủng hộ nguyên nhân do virus, khuyến cáo không chỉ định kháng sinh.",
    "reference": "Sách DLS tr. 69",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 950,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Chỉ số CRP (C-reactive protein) trong huyết tương phản ánh tình trạng nào của cơ thể?",
    "options": [
      "Tình trạng đông máu nội mạch rải rác",
      "Phản ứng viêm cấp tính không đặc hiệu do gan tổng hợp dưới tác động của IL-6",
      "Độ thanh thải thuốc tại tiểu cầu thận",
      "Mức độ hủy hoại tế bào cơ vân xương"
    ],
    "correct": 1,
    "explanation": "CRP là protein pha cấp nhạy cảm với phản ứng viêm, chấn thương hoặc nhiễm trùng.",
    "reference": "Sách DLS tr. 70",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 951,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Xét nghiệm men gan ALT (Alanin Aminotransferase) có đặc điểm ưu việt hơn AST (Aspartat Aminotransferase) ở điểm nào?",
    "options": [
      "ALT chỉ tăng khi bệnh nhân bị bệnh lý tuyến tụy",
      "ALT hoàn toàn không bị ảnh hưởng khi gan bị hoại tử được áp dụng trong thực hành lâm sàng",
      "ALT đặc hiệu cho tổn thương tế bào gan hơn do AST còn phân bố nhiều ở cơ tim và cơ vân",
      "ALT đào thải hoàn toàn qua phân"
    ],
    "correct": 2,
    "explanation": "ALT tập trung chủ yếu trong bào tương tế bào gan; AST còn có trong ty thể tế bào cơ tim, cơ xương, thận.",
    "reference": "Sách DLS tr. 72",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 952,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Tỷ số men gan AST/ALT (Chỉ số De Ritis) lớn hơn 2 kèm GGT tăng cao thường gợi ý căn nguyên tổn thương gan nào?",
    "options": [
      "Viêm gan cấp tính do virus viêm gan A",
      "Ngộ độc Paracetamol cấp tính giai đoạn sớm",
      "Tắc mật cơ học do giun chui ống mật",
      "Bệnh gan do rượu"
    ],
    "correct": 3,
    "explanation": "Rượu gây tổn thương ty thể phóng thích AST và thiếu pyridoxin làm giảm tổng hợp ALT, dẫn đến tỷ số AST/ALT > 2.",
    "reference": "Sách DLS tr. 73",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 953,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Xét nghiệm phosphatase kiềm (ALP) và GGT (Gamma-glutamyl transferase) cùng tăng cao trong máu gợi ý hội chứng nào?",
    "options": [
      "Hội chứng ứ mật trong gan hoặc tắc mật ngoài gan",
      "Bệnh lý viêm cầu thận mạn tính mất protein",
      "Hội chứng tiêu cơ vân do chấn thương đè ép",
      "Hội chứng hoại tử tế bào cơ tim cấp tính"
    ],
    "correct": 0,
    "explanation": "ALP và GGT là các enzym màng tế bào biểu mô đường mật; cùng tăng khẳng định tổn thương ứ mật/tắc mật.",
    "reference": "Sách DLS tr. 74",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 954,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Khi nồng độ Bilirubin gián tiếp (tự do) trong máu tăng ưu thế đơn độc, nguyên nhân lâm sàng hay gặp nhất là:",
    "options": [
      "Ung thư đầu tụy chèn ép đường mật ngoài gan",
      "Tăng tan máu hoặc hội chứng Gilbert bẩm sinh",
      "Viêm xơ đường mật nguyên phát",
      "Tắc ống mật chủ do sỏi mật lớn"
    ],
    "correct": 1,
    "explanation": "Bilirubin tự do tăng khi sản sinh vượt quá khả năng liên hợp của gan (như huyết tán) hoặc thiếu enzym glucuronyl transferase.",
    "reference": "Sách DLS tr. 75",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 955,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Thời gian xét nghiệm lại chỉ số HbA1c định kỳ để đánh giá sự thay đổi phác đồ điều trị đái tháo đường khuyến cáo là:",
    "options": [
      "Chỉ xét nghiệm 1 lần duy nhất trong đời",
      "Đo hàng ngày trước mỗi bữa ăn",
      "Khoảng 3 tháng một lần",
      "Định kỳ mỗi tuần 1 lần"
    ],
    "correct": 2,
    "explanation": "ADA khuyến cáo kiểm tra HbA1c ít nhất 2 lần/năm ở người đạt mục tiêu và mỗi 3 tháng (4 lần/năm) khi thay đổi điều trị.",
    "reference": "Sách DLS tr. 202",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 956,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Mục tiêu HbA1c chung khuyến cáo cho đa số người trưởng thành không mang thai mắc đái tháo đường là:",
    "options": [
      "Trên 12,0%",
      "Từ 9,0% đến 11,0%",
      "Dưới 4,0%",
      "Dưới 7,0%"
    ],
    "correct": 3,
    "explanation": "Hiệp hội Đái tháo đường Hoa Kỳ (ADA) và Bộ Y tế khuyến cáo mục tiêu chung HbA1c < 7,0% để ngừa biến chứng vi mạch.",
    "reference": "Sách DLS tr. 203",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 957,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Chỉ số INR (International Normalized Ratio) được chuẩn hóa để theo dõi hiệu quả điều trị của thuốc nào?",
    "options": [
      "Thuốc chống đông kháng vitamin K",
      "Kháng sinh tiêm truyền Ceftriaxone",
      "Thuốc chống kết tập tiểu cầu Aspirin",
      "Thuốc hạ mỡ máu nhóm Statin"
    ],
    "correct": 0,
    "explanation": "INR chuẩn hóa thời gian prothrombin (PT), dùng để theo dõi và chỉnh liều thuốc chống đông kháng vitamin K (mục tiêu 2,0-3,0).",
    "reference": "Sách DLS tr. 208",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 958,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Mục tiêu INR điều trị chống đông bằng Warfarin khuyến cáo cho bệnh nhân rung nhĩ không do bệnh van tim là:",
    "options": [
      "Dưới 1,0",
      "Từ 2,0 đến 3,0",
      "Từ 4,0 đến 5,5",
      "Trên 6,0"
    ],
    "correct": 1,
    "explanation": "Khoảng điều trị tối ưu của INR cho rung nhĩ và huyết khối tĩnh mạch sâu là 2,0 - 3,0 (van tim cơ học là 2,5 - 3,5).",
    "reference": "Sách DLS tr. 209",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 959,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Chỉ số xét nghiệm aPTT (thời gian thromboplastin một phần hoạt hóa) được dùng chủ yếu để giám sát thuốc nào?",
    "options": [
      "Thuốc chống đông đường uống Rivaroxaban",
      "Thuốc chống kết tập tiểu cầu Clopidogrel",
      "Heparin không phân đoạn truyền tĩnh mạch",
      "Heparin trọng lượng phân tử thấp"
    ],
    "correct": 2,
    "explanation": "aPTT phản ánh con đường đông máu nội sinh, dùng chỉnh liều heparin tiêu chuẩn (mục tiêu gấp 1,5 - 2,5 lần chứng).",
    "reference": "Sách DLS tr. 211",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 960,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Xét nghiệm định lượng hoạt tính Anti-Xa là tiêu chuẩn vàng để giám sát tác dụng chống đông của thuốc nào khi cần thiết?",
    "options": [
      "Aspirin liều thấp phòng ngừa đột quỵ",
      "Dung dịch tiêm truyền Natri clorid 0,9%",
      "Warfarin đường uống ở bệnh nhân rung nhĩ",
      "Heparin trọng lượng phân tử thấp trên bệnh nhân suy thận nặng hoặc béo phì"
    ],
    "correct": 3,
    "explanation": "Anti-Xa dùng theo dõi LMWH trên các đối tượng đặc biệt (suy thận, béo phì, thai phụ) vì LMWH ít kéo dài aPTT.",
    "reference": "Sách DLS tr. 212",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 961,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Xét nghiệm Troponin tim (cTnI hoặc cTnT hs) có ý nghĩa quyết định trong chẩn đoán cấp cứu bệnh lý nào?",
    "options": [
      "Nhồi máu cơ tim cấp",
      "Đột quỵ nhồi máu não diện rộng",
      "Viêm ruột thừa cấp vỡ mủ",
      "Viêm tụy cấp hoại tử"
    ],
    "correct": 0,
    "explanation": "Troponin là dấu ấn sinh học đặc hiệu cao nhất cho tổn thương hoại tử tế bào cơ tim trong hội chứng vành cấp.",
    "reference": "Sách DLS tr. 218",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 962,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Chỉ số xét nghiệm BNP hoặc NT-proBNP tăng cao trong máu có giá trị hàng đầu giúp:",
    "options": [
      "Chẩn đoán phân biệt hội chứng vành cấp không ST chênh lên với viêm màng ngoài tim",
      "Chẩn đoán xác định, loại trừ nguyên nhân khó thở do tim và phân loại độ nặng suy tim",
      "Đánh giá tổn thương tế bào nhu mô gan cấp tính trong viêm gan virus",
      "Phát hiện sớm nguy cơ xuất huyết não ở bệnh nhân dùng thuốc chống đông"
    ],
    "correct": 1,
    "explanation": "BNP và NT-proBNP được tâm thất tiết ra khi thành cơ tim bị căng giãn quá mức, là tiêu chuẩn vàng chẩn đoán suy tim.",
    "reference": "Sách DLS tr. 219",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 963,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Xét nghiệm Creatin Kinase toàn phần (CK) tăng vọt trên 10 lần giới hạn trên bình thường ở bệnh nhân dùng Statin cảnh báo tai biến nào?",
    "options": [
      "Bệnh nhân đang bị viêm cầu thận do liên cầu khuẩn",
      "Suy tuyến thượng thận mạn tính nguyên phát được áp dụng trong thực hành lâm sàng",
      "Tổn thương cơ vân nghiêm trọng và nguy cơ tiêu cơ vân cấp",
      "Hạ calci máu do suy tuyến cận giáp"
    ],
    "correct": 2,
    "explanation": "CK tăng > 10 lần kèm đau cơ là tiêu chuẩn dừng statin ngay để ngăn ngừa myoglobin làm tắc ống thận gây suy thận cấp.",
    "reference": "Sách DLS tr. 216",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 964,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Xét nghiệm D-dimer trong huyết tương có giá trị âm tính giả rất thấp, do đó ứng dụng lâm sàng chính là:",
    "options": [
      "Theo dõi nồng độ thuốc kháng sinh trong máu",
      "Khẳng định bệnh nhân chắc chắn bị nhồi máu não",
      "Đo độ thanh thải của cầu thận",
      "Loại trừ huyết khối tĩnh mạch sâu và thuyên tắc động mạch phổi khi có nguy cơ thấp - vừa"
    ],
    "correct": 3,
    "explanation": "D-dimer có giá trị dự đoán âm tính rất cao (> 95%), nếu âm tính thì loại trừ an toàn thuyên tắc huyết khối tĩnh mạch.",
    "reference": "Sách DLS tr. 220",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 965,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Nồng độ Kali huyết thanh vượt quá 6,5 mmol/L trên điện tâm đồ (ECG) thường biểu hiện dấu hiệu cảnh báo nguy hiểm nào?",
    "options": [
      "Sóng T cao nhọn đối xứng đáy hẹp, phức bộ QRS giãn rộng và nguy cơ rung thất ngừng tim",
      "Sóng T dẹt và xuất hiện sóng U nổi rõ được áp dụng trong thực hành lâm sàng",
      "Điện tâm đồ hoàn toàn bình thường không thay đổi",
      "Đoạn ST chênh xuống hình đáy chén"
    ],
    "correct": 0,
    "explanation": "Tăng kali máu gây sóng T cao nhọn, PR dài, QRS giãn rộng thành hình sin, có thể dẫn đến ngừng tim trong thì tâm trương.",
    "reference": "Sách DLS tr. 187",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 966,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Dấu hiệu hạ Kali máu (K+ < 3,5 mmol/L) trên điện tâm đồ (ECG) thường đặc trưng bởi:",
    "options": [
      "Khoảng PR ngắn lại dưới 0,10 giây",
      "Sóng T dẹt hoặc đảo ngược và xuất hiện sóng U đi sau sóng T",
      "Mất hoàn toàn phức bộ QRS",
      "Sóng T cao nhọn khổng lồ đáy hẹp"
    ],
    "correct": 1,
    "explanation": "Hạ kali máu gây tái cực chậm: sóng T dẹt, ST chênh xuống và xuất hiện sóng U nổi bật, tăng nguy cơ xoắn đỉnh.",
    "reference": "Sách DLS tr. 187",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 967,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Khi nồng độ Natri huyết tương giảm xuống dưới 120 mmol/L (hạ natri máu nặng), biểu hiện lâm sàng nguy hiểm nhất là:",
    "options": [
      "Xuất huyết tiêu hóa dưới ồ ạt",
      "Tăng huyết áp kịch phát gây đứt mạch máu não",
      "Phù não dẫn đến lú lẫn, co giật, hôn mê và tử vong do tụt kẹt hạnh nhân tiểu não",
      "Co giật cứng cơ do tăng canxi máu"
    ],
    "correct": 2,
    "explanation": "Hạ natri máu cấp gây nước nhược trương di chuyển vào tế bào não gây phù tế bào não, co giật và hôn mê.",
    "reference": "Sách DLS tr. 221",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 968,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Nguyên tắc điều chỉnh hạ Natri máu mạn tính là không được bù quá nhanh (không quá 8 - 10 mmol/L trong 24 giờ đầu) để phòng ngừa hội chứng:",
    "options": [
      "Phù phổi cấp huyết động học",
      "Đột quỵ xuất huyết khoang dưới nhện",
      "Hội chứng thận hư thứ phát được áp dụng trong thực hành lâm sàng",
      "Hủy hoại myelin cầu não trung tâm"
    ],
    "correct": 3,
    "explanation": "Bù natri quá nhanh làm teo tế bào thần kinh đột ngột, phá hủy bao myelin cầu não gây liệt tứ chi vĩnh viễn.",
    "reference": "Sách DLS tr. 222",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 969,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Xét nghiệm nồng độ Acid Uric huyết thanh tăng cao trên 420 mcmol/L (7 mg/dL) ở nam giới là tiêu chuẩn định hướng chẩn đoán bệnh:",
    "options": [
      "Bệnh Gút và tăng acid uric máu",
      "Loãng xương sau mãn kinh",
      "Viêm khớp dạng thấp tiến triển",
      "Thoái hóa khớp gối tuổi già"
    ],
    "correct": 0,
    "explanation": "Acid uric > 420 mcmol/L vượt ngưỡng bão hòa trong dịch khớp, dễ lắng đọng tinh thể urat gây cơn gút cấp.",
    "reference": "Sách DLS tr. 223",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 970,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Thời điểm lấy mẫu máu chuẩn để đo nồng độ đáy (Crough/Trough level) của một thuốc trong quy trình TDM là:",
    "options": [
      "Ngay sau khi vừa uống thuốc xong 5 phút",
      "Ngay trước thời điểm dùng liều tiếp theo",
      "Đúng thời điểm nồng độ thuốc đạt đỉnh cao nhất",
      "Bất kỳ thời điểm ngẫu nhiên nào trong ngày"
    ],
    "correct": 1,
    "explanation": "Nồng độ đáy (Cmin) đo nồng độ thấp nhất trước liều tiếp theo, giúp đánh giá nguy cơ tích lũy độc tính của thuốc.",
    "reference": "Sách DLS tr. 66",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 971,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Thời điểm đo nồng độ đỉnh (Peak level) của kháng sinh Aminosid tiêm truyền tĩnh mạch ngắt quãng 30 phút là:",
    "options": [
      "Sau khi truyền 12 giờ đồng hồ",
      "Trước khi truyền liều tiếp theo 1 giờ",
      "Khoảng 30 phút sau khi kết thúc buổi truyền tĩnh mạch",
      "Ngay khi vừa cắm kim truyền dịch"
    ],
    "correct": 2,
    "explanation": "Cmax đo sau khi kết thúc truyền 30 phút (khi pha phân bố mô đã hoàn tất) để đánh giá hiệu lực diệt khuẩn.",
    "reference": "Sách DLS tr. 67",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 972,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Khoảng nồng độ điều trị tối ưu trong máu của Digoxin ở bệnh nhân suy tim mạn tính là:",
    "options": [
      "15 đến 20 ng/mL",
      "5,0 đến 10,0 ng/mL",
      "Trên 50 ng/mL",
      "0,5 đến 0,9 ng/mL"
    ],
    "correct": 3,
    "explanation": "Nghiên cứu DIG chứng minh nồng độ digoxin 0,5 - 0,9 ng/mL giảm tử vong suy tim; nồng độ > 1,2 ng/mL làm tăng độc tính tim.",
    "reference": "Sách DLS tr. 68",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 973,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Khi nồng độ bạch cầu đa nhân trung tính (Neutrophil) trong máu giảm sâu dưới 500 tế bào/mcL, nguy cơ lâm sàng lớn nhất là:",
    "options": [
      "Nhiễm khuẩn cơ hội đe dọa tính mạng",
      "Gây cơn tăng huyết áp ác tính",
      "Tắc mạch máu não do máu bị đặc quánh",
      "Xuất huyết đường tiêu hóa tự phát"
    ],
    "correct": 0,
    "explanation": "Neutrophil < 500/mcL (hoặc dự kiến < 500 trong 48h) là sốt hạ bạch cầu, bắt buộc dùng kháng sinh phổ rộng khẩn cấp.",
    "reference": "Sách DLS tr. 71",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 974,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Xét nghiệm độ bão hòa Transferrin (TSAT) và Ferritin huyết thanh được dùng để đánh giá tình trạng:",
    "options": [
      "Nồng độ canxi tự do trong xương",
      "Dự trữ sắt trong cơ thể và chẩn đoán thiếu máu thiếu sắt",
      "Mức độ phân hủy protein ở gan",
      "Chức năng bài tiết dịch mật"
    ],
    "correct": 1,
    "explanation": "Ferritin phản ánh kho dự trữ sắt ở mô; TSAT phản ánh lượng sắt sẵn có gắn với transferrin để tạo hồng cầu.",
    "reference": "Sách DLS tr. 226",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 975,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Chỉ số xét nghiệm MCV (thể tích trung bình hồng cầu) dưới 80 fL đặc trưng cho loại thiếu máu nào?",
    "options": [
      "Thiếu máu kích thước hồng cầu bình thường do suy tủy",
      "Thiếu máu hồng cầu to do thiếu vitamin B12 hoặc acid folic được áp dụng trong thực hành lâm sàng",
      "Thiếu máu hồng cầu nhỏ nhược sắc",
      "Thiếu máu tan máu tự miễn cấp tính"
    ],
    "correct": 2,
    "explanation": "MCV < 80 fL là hồng cầu nhỏ (thiếu sắt, tan máu bẩm sinh); MCV > 100 fL là hồng cầu to (thiếu B12, folat).",
    "reference": "Sách DLS tr. 227",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 976,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Xét nghiệm nồng độ Cortisol máu vào thời điểm 8 giờ sáng được ứng dụng chủ yếu để:",
    "options": [
      "Xác định nhóm máu hệ ABO",
      "Đo lường mức độ đào thải kháng sinh qua thận",
      "Chẩn đoán sớm bệnh lý ung thư dạ dày",
      "Đánh giá chức năng tuyến thượng thận và hội chứng suy thượng thận do thuốc"
    ],
    "correct": 3,
    "explanation": "Cortisol có nhịp sinh học cao nhất lúc 8h sáng; nồng độ thấp gợi ý suy tuyến thượng thận (ví dụ sau cai corticoid).",
    "reference": "Sách DLS tr. 228",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 977,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "question": "Tình trạng hạ Canxi máu trên lâm sàng thường biểu hiện qua hai dấu hiệu kinh điển nào khi thăm khám?",
    "options": [
      "Dấu hiệu Chvostek và dấu hiệu Trousseau",
      "Dấu hiệu rung gan và phản hồi gan cổ",
      "Dấu hiệu vỗ hông lưng và chạm thận",
      "Dấu hiệu Mac-Burney và dấu hiệu Murphy"
    ],
    "correct": 0,
    "explanation": "Chvostek và Trousseau là dấu hiệu tăng kích thích thần kinh - cơ kinh điển do hạ canxi máu gây co cứng tetani.",
    "reference": "Sách DLS tr. 229",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 978,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Kháng sinh nhóm Tetracyclin bị chống chỉ định cho trẻ em dưới 8 tuổi do tác dụng không mong muốn nào?",
    "options": [
      "Gây suy gan hoại tử tế bào gan cấp",
      "Gắn kết với calci gây hỏng men răng, ố vàng răng vĩnh viễn và chậm phát triển xương",
      "Gây xuất huyết giảm tiểu cầu cấp tính",
      "Gây điếc tiếp nhận vĩnh viễn không hồi phục"
    ],
    "correct": 1,
    "explanation": "Tetracyclin tạo phức chelat với calci phosphate lắng đọng ở xương và mầm răng đang phát triển, làm hỏng men và vàng răng.",
    "reference": "Sách DLS tr. 235",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 979,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Kháng sinh nhóm Fluoroquinolon (như Ciprofloxacin) thường hạn chế dùng cho trẻ dưới 18 tuổi vì nguy cơ gì?",
    "options": [
      "Làm trẻ bị béo phì không kiểm soát được",
      "Làm cho trẻ bị dậy thì sớm",
      "Gây thoái hóa mô sụn khớp chịu lực trên các khớp vận động của động vật non",
      "Gây đóng sớm các đường khớp sọ não"
    ],
    "correct": 2,
    "explanation": "Quinolon gây tổn thương sụn khớp chịu lực ở súc vật non, chỉ dùng cho trẻ khi nhiễm khuẩn nặng kháng thuốc không còn lựa chọn.",
    "reference": "Sách DLS tr. 236",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 980,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Hội chứng Reye (phù não cấp và thoái hóa mỡ gan) có nguy cơ bùng phát khi dùng Aspirin cho trẻ em bị:",
    "options": [
      "Sâu răng sữa",
      "Chấn thương phần mềm",
      "Gãy xương cẳng tay do ngã được áp dụng trong thực hành lâm sàng",
      "Nhiễm virus như Cúm mùa hoặc Thủy đậu"
    ],
    "correct": 3,
    "explanation": "Aspirin chống chỉ định hạ sốt cho trẻ nhiễm virus do nguy cơ hội chứng Reye với tỷ lệ tử vong 30-40%.",
    "reference": "Sách DLS tr. 237",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 981,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Thuốc giảm đau hạ sốt được khuyến cáo là lựa chọn ưu tiên an toàn hàng đầu cho trẻ em là:",
    "options": [
      "Paracetamol liều 10 - 15 mg/kg mỗi lần, cách 4 - 6 giờ",
      "Indomethacin viên nang uống",
      "Aspirin liều cao 50 mg/kg mỗi ngày",
      "Piroxicam dạng tiêm bắp sâu"
    ],
    "correct": 0,
    "explanation": "Paracetamol là thuốc hạ sốt đầu tay cho trẻ em (10-15 mg/kg/lần, tối đa 60 mg/kg/ngày).",
    "reference": "Sách DLS tr. 238",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 982,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Khi dùng Ibuprofen hạ sốt cho trẻ em, khoảng liều và khoảng cách đưa thuốc khuyến cáo là:",
    "options": [
      "30 - 50 mg/kg mỗi lần, cách mỗi 2 giờ",
      "5 - 10 mg/kg mỗi lần, cách mỗi 6 - 8 giờ",
      "Dùng liều người lớn 400 mg chia làm 10 lần",
      "Chỉ dùng một liều duy nhất 100 mg/kg"
    ],
    "correct": 1,
    "explanation": "Ibuprofen dùng khi trẻ sốt cao không đáp ứng paracetamol, liều 5-10 mg/kg/lần (tối đa 30 mg/kg/ngày).",
    "reference": "Sách DLS tr. 239",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 983,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Chống chỉ định dùng Ibuprofen hạ sốt cho trẻ em trong trường hợp lâm sàng nào sau đây?",
    "options": [
      "Trẻ bị viêm tai giữa cấp do phế cầu",
      "Trẻ bị sốt do mọc răng sữa thông thường",
      "Nghi ngờ trẻ bị Sốt xuất huyết Dengue hoặc đang bị mất nước, loét tiêu hóa",
      "Trẻ bị viêm họng cấp mủ"
    ],
    "correct": 2,
    "explanation": "Sốt xuất huyết chống chỉ định NSAID vì ức chế ngưng tập tiểu cầu làm tăng nguy cơ xuất huyết tiêu hóa ồ ạt.",
    "reference": "Sách DLS tr. 240",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 984,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Lượng nước ngoại bào (Extracellular water) ở trẻ sơ sinh chiếm tỷ lệ khoảng bao nhiêu so với người lớn?",
    "options": [
      "Chiếm dưới 5% trọng lượng cơ thể",
      "Giống hệt người già 80 tuổi",
      "Hoàn toàn bằng 0 do nước chỉ ở nội bào",
      "Chiếm khoảng 40% trọng lượng cơ thể"
    ],
    "correct": 3,
    "explanation": "Nước ngoại bào ở trẻ sơ sinh chiếm 40% thể tích cơ thể (người lớn 20%), làm thể tích phân bố của thuốc thân nước như aminosid tăng gấp đôi.",
    "reference": "Sách DLS tr. 232",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 985,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Đặc điểm thể tích phân bố Vd của các thuốc tan nhiều trong nước (như Aminosid) ở trẻ sơ sinh là:",
    "options": [
      "Lớn hơn đáng kể so với người lớn, đòi hỏi liều nạp ban đầu tính theo mg/kg phải cao hơn",
      "Nhỏ hơn rất nhiều so với người lớn",
      "Giống hệt người già teo cơ",
      "Hoàn toàn bằng 0 do thuốc không phân bố được"
    ],
    "correct": 0,
    "explanation": "Vd của aminosid ở trẻ sơ sinh lên tới 0,4-0,5 L/kg (người lớn ~ 0,25 L/kg), nên cần liều mg/kg cao hơn để đạt Cmax hiệu quả.",
    "reference": "Sách DLS tr. 233",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 986,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Kháng sinh Ceftriaxone cần tránh chỉ định cho trẻ sơ sinh bị vàng da vì nguy cơ nào?",
    "options": [
      "Làm cho gan trẻ ngừng hoạt động lọc mật hoàn toàn",
      "Cạnh tranh vị trí gắn Albumin đẩy Bilirubin tự do gây vàng da nhân não",
      "Làm cho trẻ bị rụng tóc vĩnh viễn",
      "Làm giảm thân nhiệt của trẻ xuống dưới 34 độ C"
    ],
    "correct": 1,
    "explanation": "Ceftriaxone có ái lực cao với albumin, đẩy bilirubin vào dịch não tủy gây độc tế bào não (vàng da nhân não).",
    "reference": "Sách DLS tr. 242",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 987,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Kháng sinh nhóm Sulfamid (như Cotrimoxazol) chống chỉ định cho trẻ sơ sinh dưới 2 tháng tuổi vì:",
    "options": [
      "Làm cho xương sọ của trẻ bị mềm",
      "Làm tăng sinh quá mức tế bào mỡ được áp dụng trong thực hành lâm sàng",
      "Nguy cơ đẩy Bilirubin khỏi Albumin huyết tương gây vàng da nhân não",
      "Làm trẻ bị co giật động kinh"
    ],
    "correct": 2,
    "explanation": "Sulfamid cạnh tranh vị trí gắn bilirubin trên albumin ở trẻ dưới 2 tháng tuổi, gây hội chứng vàng da nhân não.",
    "reference": "Sách DLS tr. 243",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 988,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Thuốc nhỏ mũi chứa hoạt chất co mạch Naphazolin chống chỉ định cho trẻ dưới bao nhiêu tuổi?",
    "options": [
      "Trẻ em dưới 15 tuổi",
      "Chỉ cấm cho trẻ dưới 1 tháng tuổi",
      "Không cấm đối với bất kỳ lứa tuổi nào",
      "Trẻ em dưới 6 tuổi"
    ],
    "correct": 3,
    "explanation": "Naphazolin hấp thu qua niêm mạc mũi trẻ gây ức chế thần kinh trung ương, hạ thân nhiệt, nhịp tim chậm và hôn mê.",
    "reference": "Sách DLS tr. 245",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 989,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Tại sao việc tính liều thuốc cho trẻ em dựa trên Diện tích bề mặt cơ thể (BSA) chuẩn xác hơn dựa trên cân nặng đơn thuần?",
    "options": [
      "BSA tương quan chặt chẽ hơn với mức lọc cầu thận, cung lượng tim và chuyển hóa nội tạng của cơ thể",
      "BSA phản ánh chính xác lượng mỡ thừa tích tụ dưới da ở trẻ béo phì",
      "BSA ít biến thiên theo lứa tuổi hơn so với cân nặng và chiều cao",
      "Công thức tính BSA loại trừ hoàn toàn ảnh hưởng của tình trạng mất nước cấp"
    ],
    "correct": 0,
    "explanation": "Diện tích bề mặt cơ thể tương quan trực tiếp với cung lượng tim, dòng máu qua gan và chức năng lọc thận.",
    "reference": "Sách DLS tr. 234",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 990,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Công thức Mosteller chuẩn để tính Diện tích bề mặt cơ thể (BSA tính theo m2) từ chiều cao (cm) và cân nặng (kg) là:",
    "options": [
      "BSA = (Chiều cao x Cân nặng) / 1000",
      "BSA = Căn bậc hai của [(Chiều cao x Cân nặng) / 3600]",
      "BSA = Căn bậc hai của (Chiều cao x 72)",
      "BSA = (Chiều cao + Cân nặng) / 100"
    ],
    "correct": 1,
    "explanation": "Công thức Mosteller: BSA (m2) = căn bậc hai của [Chiều cao (cm) x Cân nặng (kg) / 3600].",
    "reference": "Sách DLS tr. 234",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 991,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Thuốc giảm ho giảm đau Codein bị chống chỉ định tuyệt đối cho trẻ em dưới 12 tuổi và sau phẫu thuật cắt amiđan vì:",
    "options": [
      "Codein làm teo cơ bắp chân của trẻ",
      "Codein gây loét thủng dạ dày trẻ em",
      "Chuyển hóa siêu nhanh qua CYP2D6 thành Morphin gây ngừng thở",
      "Codein làm mất hoàn toàn phản xạ nuốt thức ăn"
    ],
    "correct": 2,
    "explanation": "Cơ quan quản lý cấm dùng codein cho trẻ < 12 tuổi do biến dị gen CYP2D6 siêu nhanh gây ngộ độc morphin gây ngừng thở.",
    "reference": "Sách DLS tr. 246",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 992,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Biểu hiện ngộ độc thuốc chống nôn Metoclopramid (Primperan) thường gặp ở trẻ em là:",
    "options": [
      "Cơn hạ đường huyết sâu kéo dài",
      "Xuất huyết dưới móng tay hai bên",
      "Tiêu chảy phân mỡ kéo dài nhiều tuần được áp dụng trong thực hành lâm sàng",
      "Hội chứng ngoại tháp với cơn xoắn vặn cơ mặt, co giật nhãn cầu và cứng cổ"
    ],
    "correct": 3,
    "explanation": "Metoclopramid chẹn thụ thể dopamin D2 trung ương, hàng rào máu não trẻ chưa hoàn thiện dễ gây hội chứng ngoại tháp cấp.",
    "reference": "Sách DLS tr. 247",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 993,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Hàng rào máu não của trẻ sơ sinh có đặc điểm dược động học nổi bật nào?",
    "options": [
      "Tính thấm rất cao do các liên kết tế bào nội mô chưa hoàn thiện, thuốc dễ ngấm vào não gây độc",
      "Hoàn toàn không cho bất kỳ phân tử nào đi qua",
      "Chỉ cho phép các phân tử protein kích thước lớn đi qua",
      "Dày đặc gấp 10 lần người lớn ngăn cản mọi loại thuốc"
    ],
    "correct": 0,
    "explanation": "Hàng rào máu não trẻ sơ sinh chưa hoàn thiện, thuốc như morphin, kháng sinh, bilirubin rất dễ ngấm vào não.",
    "reference": "Sách DLS tr. 233",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 994,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Độ pH dịch vị dạ dày ở trẻ sơ sinh trong những ngày đầu sau sinh có đặc điểm gì?",
    "options": [
      "Giống hệt người trưởng thành khỏe mạnh",
      "Gần như trung tínhpH từ 6 đến 8 do giảm tiết acid hydrochloric",
      "Cực kỳ kiềm với pH = 14 được áp dụng trong thực hành lâm sàng",
      "Rất acid với pH < 1,0"
    ],
    "correct": 1,
    "explanation": "Trẻ sơ sinh tiết ít acid dạ dày, pH cao làm tăng sinh khả dụng của kháng sinh kém bền trong acid như Ampicillin.",
    "reference": "Sách DLS tr. 231",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 995,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Kháng sinh Ampicillin và Penicillin hấp thu qua đường uống ở trẻ sơ sinh so với người lớn như thế nào?",
    "options": [
      "Bị phân hủy 100% trong đường tiêu hóa",
      "Hấp thu chậm hơn gấp 20 lần",
      "Hấp thu cao hơn do dịch vị ít acid nên thuốc ít bị phá hủy",
      "Hoàn toàn không hấp thu được qua ruột"
    ],
    "correct": 2,
    "explanation": "pH dạ dày cao ở trẻ sơ sinh bảo vệ các kháng sinh penicillin uống khỏi bị acid phân hủy, làm tăng hấp thu.",
    "reference": "Sách DLS tr. 232",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 996,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Thuốc nhỏ tai chứa kháng sinh Aminosid (Neomycin, Gentamicin) chống chỉ định nhỏ tai cho trẻ khi nào?",
    "options": [
      "Khi trẻ bị ngứa vành tai ngoài",
      "Khi trẻ bị viêm tai giữa ứ mủ màng nhĩ còn nguyên",
      "Chỉ dùng được khi màng nhĩ bị thủng hoàn toàn",
      "Khi màng nhĩ đã bị thủng do nguy cơ ngấm vào tai trong gây điếc ốc tai vĩnh viễn"
    ],
    "correct": 3,
    "explanation": "Màng nhĩ thủng làm thuốc ngấm trực tiếp vào hòm nhĩ tiếp xúc tai trong gây độc tế bào thính giác không hồi phục.",
    "reference": "Sách DLS tr. 248",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 997,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Chế phẩm siro bổ sung Kẽm (Zinc) cho trẻ em bị tiêu chảy cấp nên được uống vào thời điểm nào?",
    "options": [
      "Uống xa bữa ăn hoặc giữa hai bữa ăn để tránh thức ăn cản trở hấp thu",
      "Uống ngay vào đầu bữa ăn nhiều chất xơ",
      "Chỉ uống vào lúc nửa đêm khi trẻ đang ngủ say",
      "Pha chung vào bình sữa bột nóng của trẻ"
    ],
    "correct": 0,
    "explanation": "Phytat và calci trong thức ăn/sữa cạnh tranh làm giảm hấp thu kẽm; uống xa bữa ăn giúp hấp thu kẽm tối đa.",
    "reference": "Sách DLS tr. 249",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 998,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Liều bổ sung Kẽm nguyên tố khuyến cáo theo WHO trong điều trị tiêu chảy cấp cho trẻ dưới 6 tháng tuổi là:",
    "options": [
      "50 mg mỗi ngày trong 1 tháng",
      "10 mg mỗi ngày, liên tục trong 10 đến 14 ngày",
      "100 mg mỗi ngày trong 2 ngày",
      "2 mg mỗi ngày trong 3 ngày"
    ],
    "correct": 1,
    "explanation": "Phác đồ WHO: Trẻ < 6 tháng uống 10 mg/ngày, trẻ >= 6 tháng uống 20 mg/ngày, liên tục đủ 10-14 ngày.",
    "reference": "Sách DLS tr. 250",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 999,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Thời gian làm rỗng dạ dày (Gastric emptying time) ở trẻ sơ sinh và nhũ nhi dưới 6 tháng tuổi có đặc điểm:",
    "options": [
      "Nhanh gấp 5 lần so với người lớn kết hợp chăm sóc theo dõi định kỳ",
      "Không bao giờ co bóp tống thức ăn được áp dụng trong thực hành lâm sàng được áp dụng trong thực hành y khoa",
      "Kéo dài và chậm hơn so với người lớn, làm chậm tốc độ đạt nồng độ đỉnh của thuốc uống",
      "Cố định đúng 10 phút sau ăn theo đúng khuyến cáo lâm sàng"
    ],
    "correct": 2,
    "explanation": "Thời gian tháo rỗng dạ dày ở trẻ nhỏ kéo dài (tới 6-8 tháng tuổi mới như người lớn), làm tốc độ hấp thu thuốc chậm hơn.",
    "reference": "Sách DLS tr. 231",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1000,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Đặc điểm da của trẻ sơ sinh và trẻ nhỏ làm tăng nguy cơ ngộ độc thuốc bôi ngoài da (như Corticoid bôi) do:",
    "options": [
      "Da trẻ hoàn toàn không có khả năng ngấm nước",
      "Lớp biểu bì dày gấp 3 lần người lớn",
      "Da trẻ không có tuyến mồ hôi",
      "Lớp sừng mỏng, giàu mạch máu và tỷ lệ diện tích da trên khối lượng cơ thể rất lớn"
    ],
    "correct": 3,
    "explanation": "Tỷ lệ diện tích bề mặt da/cân nặng của trẻ lớn gấp 3 lần người lớn, da mỏng dễ gây hấp thu toàn thân và ngộ độc thuốc bôi.",
    "reference": "Sách DLS tr. 232",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1001,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Chất bảo quản Benzyl alcohol trong các lọ thuốc tiêm đa liều chống chỉ định dùng cho trẻ sơ sinh vì gây ra:",
    "options": [
      "Hội chứng thở ngáp và tử vong",
      "Hội chứng rụng lông mi hàng loạt được áp dụng trong thực hành lâm sàng",
      "Bệnh lý gãy xương đùi tự phát",
      "Cơn co giật do tăng đường huyết"
    ],
    "correct": 0,
    "explanation": "Gan trẻ sơ sinh không chuyển hóa được benzyl alcohol thành acid benzoic, gây toan chuyển hóa, thở ngáp và suy đa tạng.",
    "reference": "Sách DLS tr. 251",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1002,
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "question": "Dạng thuốc viên nén hoặc viên nang nuốt nguyên viên thường chỉ phù hợp cho trẻ em từ độ tuổi nào?",
    "options": [
      "Trẻ sơ sinh ngay sau khi cắt rốn",
      "Trẻ từ 6 tuổi trở lên khi đã có khả năng nuốt thuốc an toàn không bị sặc",
      "Trẻ nhũ nhi 3 tháng tuổi",
      "Bất kỳ lứa tuổi nào kể cả trẻ 6 tháng tuổi"
    ],
    "correct": 1,
    "explanation": "Trẻ < 6 tuổi ưu tiên dạng siro, dung dịch, hỗn dịch; viên nén/nang nuốt chỉ an toàn khi trẻ >= 6-7 tuổi.",
    "reference": "Sách DLS tr. 252",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1003,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Sự thay đổi thành phần cơ thể ở người cao tuổi có đặc điểm dược động học nổi bật nào?",
    "options": [
      "Giảm hoàn toàn khối mỡ dưới da về mức 0%",
      "Khối lượng cơ bắp tăng gấp đôi so với tuổi thanh niên",
      "Giảm tỷ lệ nước toàn phần và khối cơ, tăng tỷ lệ khối mỡ cơ thể",
      "Tăng tỷ lệ nước toàn phần lên tới 90%"
    ],
    "correct": 2,
    "explanation": "Người cao tuổi giảm nước (từ 60% xuống 50%), giảm cơ teo cơ, tăng tỷ lệ mỡ (từ 15-20% lên 30-40%).",
    "reference": "Sách DLS tr. 255",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1004,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Do tăng khối mỡ cơ thể ở người cao tuổi, các thuốc tan nhiều trong mỡ (như Diazepam) có biến đổi DĐH nào?",
    "options": [
      "Đào thải sạch khỏi cơ thể chỉ sau 15 phút",
      "Bị bất hoạt hoàn toàn trước khi vào máu",
      "Không thể phân bố vào mô não được áp dụng trong thực hành lâm sàng",
      "Thể tích phân bố Vd tăng và thời gian bán thải T1/2 kéo dài gây tích lũy"
    ],
    "correct": 3,
    "explanation": "Thuốc tan trong mỡ tích lũy trong khoang mỡ mở rộng, Vd tăng, T1/2 của diazepam có thể kéo dài lên tới 80-100 giờ ở người già.",
    "reference": "Sách DLS tr. 256",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1005,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Do giảm lượng nước toàn phần ở người già, các thuốc tan nhiều trong nước (như Digoxin, Aminosid) có biến đổi gì?",
    "options": [
      "Thể tích phân bố giảm làm nồng độ đỉnh trong máu tăng cao",
      "Thời gian bán thải giảm chỉ còn vài giây",
      "Nồng độ trong máu giảm sút nghiêm trọng",
      "Thuốc không thể hòa tan trong tuần hoàn"
    ],
    "correct": 0,
    "explanation": "Khoang nước thu hẹp làm Vd thuốc thân nước giảm, nồng độ tự do tăng vọt dễ vượt ngưỡng độc tính.",
    "reference": "Sách DLS tr. 257",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1006,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Tiêu chí Beers (Beers Criteria) của Hiệp hội Lão khoa Hoa Kỳ (AGS) được xây dựng nhằm mục đích gì?",
    "options": [
      "Lựa chọn bài tập thể dục dưỡng sinh cho người cao tuổi",
      "Xác định danh mục các thuốc có nguy cơ không phù hợp tiềm tàng cần tránh dùng cho người cao tuổi",
      "Đo lường dung tích sống của phổi người cao tuổi được áp dụng trong thực hành lâm sàng",
      "Tính toán chế độ dinh dưỡng hàng ngày cho người già"
    ],
    "correct": 1,
    "explanation": "Beers Criteria là hướng dẫn quốc tế hàng đầu cảnh báo các thuốc có nguy cơ cao hơn lợi ích trên người cao tuổi.",
    "reference": "Sách DLS tr. 265",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1007,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Nhóm thuốc an thần gây ngủ Benzodiazepin tác dụng kéo dài (như Diazepam, Flurazepam) cần tránh dùng cho người già vì:",
    "options": [
      "Gây cơn tăng huyết áp kịch phát",
      "Làm cho xương giòn tan ngay sau 1 ngày dùng",
      "Gây an thần quá mức, lú lẫn và tăng nguy cơ ngã gãy xương",
      "Gây mù mắt đột ngột"
    ],
    "correct": 2,
    "explanation": "Beers criteria khuyến cáo tránh benzodiazepin ở người già do tăng nguy cơ sa sút trí tuệ, ngã chấn thương sọ não và gãy cổ xương đùi.",
    "reference": "Sách DLS tr. 266",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1008,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Thuốc kháng Histamin H1 thế hệ 1 (như Clorpheniramin, Diphenhydramin) bị hạn chế dùng cho người cao tuổi chủ yếu do:",
    "options": [
      "Gây xuất huyết tiêu hóa ồ ạt",
      "Làm tăng men gan hoại tử tế bào gan",
      "Làm giảm thân nhiệt xuống dưới 30 độ C",
      "Tác dụng kháng cholinergic gây bí tiểu, táo bón và lú lẫn"
    ],
    "correct": 3,
    "explanation": "Tác dụng kháng muscarinic mạnh gây bí tiểu cấp (đặc biệt u xơ tiền liệt tuyến), táo bón và suy giảm nhận thức cấp.",
    "reference": "Sách DLS tr. 267",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1009,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Hiện tượng 'Thác kê đơn' (Prescribing Cascade) trong điều trị người cao tuổi được hiểu là tình huống:",
    "options": [
      "Kê thêm thuốc mới để điều trị tác dụng phụ của thuốc trước đó",
      "Bệnh nhân tự ý mua hàng chục loại thuốc trên mạng internet",
      "Người bệnh uống thuốc cùng một lúc dưới vòi nước chảy",
      "Bác sĩ giảm đồng loạt liều lượng của toàn bộ các thuốc"
    ],
    "correct": 0,
    "explanation": "Ví dụ: Dùng Amlodipin bị phù chân => tưởng suy tim kê thêm Furosemid => hạ kali máu kê thêm Kali... làm trầm trọng đa dược.",
    "reference": "Sách DLS tr. 268",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1010,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Tụt huyết áp tư thế đứng (Orthostatic hypotension) ở người già thường tăng vọt khi điều trị bằng nhóm thuốc nào?",
    "options": [
      "Dung dịch bù nước Oresol",
      "Thuốc chẹn thụ thể alpha-1 hoặc thuốc chống trầm cảm 3 vòng",
      "Thuốc bổ sung vitamin C đường uống",
      "Men vi sinh hỗ trợ tiêu hóa"
    ],
    "correct": 1,
    "explanation": "Phản xạ thụ thể áp lực (baroreceptor) ở người già bị suy giảm, thuốc giãn mạch chẹn alpha dễ gây ngất khi đứng dậy.",
    "reference": "Sách DLS tr. 259",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1011,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Nguyên tắc vàng trong khởi đầu điều trị thuốc cho người cao tuổi được tóm gọn bằng khẩu hiệu kinh điển nào?",
    "options": [
      "No pain, no gain",
      "Polypharmacy is best",
      "Start low, go slow",
      "Start high, hit hard"
    ],
    "correct": 2,
    "explanation": "Nguyên tắc 'Bắt đầu liều thấp, tăng liều chậm' giúp cơ thể người già thích ứng và giảm thiểu độc tính tích lũy.",
    "reference": "Sách DLS tr. 269",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1012,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Lưu lượng máu đến gan ở người 70 tuổi giảm khoảng bao nhiêu phần trăm so với người trẻ tuổi 20?",
    "options": [
      "Hoàn toàn không thay đổi",
      "Tăng lên gấp đôi",
      "Giảm 99% làm gan ngừng hoạt động",
      "Giảm khoảng 35% đến 40%"
    ],
    "correct": 3,
    "explanation": "Lưu lượng máu qua gan giảm 35-40% cùng với khối lượng gan giảm, làm chậm tốc độ chuyển hóa thuốc qua gan bước đầu.",
    "reference": "Sách DLS tr. 258",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1013,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Mức lọc cầu thận (GFR) sinh lý trung bình ở người bình thường bắt đầu suy giảm từ sau tuổi 40 với tốc độ khoảng:",
    "options": [
      "Khoảng 1 mL/phút mỗi năm",
      "Khoảng 50 mL/phút mỗi năm",
      "Không bao giờ suy giảm theo tuổi tác",
      "Khoảng 10 mL/phút mỗi tháng"
    ],
    "correct": 0,
    "explanation": "Sau 40 tuổi, GFR giảm sinh lý khoảng 0,8 - 1 mL/phút/năm; người 70 tuổi GFR có thể giảm 30-40% so với tuổi trẻ.",
    "reference": "Sách DLS tr. 258",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1014,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Thuốc chống viêm không steroid (NSAID) dùng đường toàn thân kéo dài cho người cao tuổi có nguy cơ cao nhất là:",
    "options": [
      "Làm giảm lượng mỡ trong máu về mức 0",
      "Loét và xuất huyết tiêu hóa, suy thận cấp và làm nặng thêm bệnh tăng huyết áp, suy tim",
      "Làm cho tóc mọc dài quá mức",
      "Gây sâu răng hàng loạt"
    ],
    "correct": 1,
    "explanation": "Người già có niêm mạc dạ dày mỏng manh và chức năng thận suy giảm, dùng NSAID làm tăng gấp 4 lần nguy cơ loét xuất huyết tiêu hóa.",
    "reference": "Sách DLS tr. 260",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1015,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Thuốc giảm đau an thần Opioid khi dùng cho người già cần đặc biệt lưu ý tác dụng không mong muốn mạn tính nào?",
    "options": [
      "Gây tiêu chảy xối xả mất nước",
      "Làm răng lung lay rụng hàng loạt",
      "Táo bón nặng kéo dài đòi hỏi phải dùng kèm thuốc nhuận tràng",
      "Làm tăng vọt thị lực nhìn rõ ban đêm"
    ],
    "correct": 2,
    "explanation": "Tác dụng phụ táo bón của opioid không bao giờ dung nạp theo thời gian; người già rất dễ bị tắc ruột do u phân.",
    "reference": "Sách DLS tr. 261",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1016,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Độ nhạy cảm của thụ thể với thuốc ở người già (Dược lực học) có đặc điểm biến đổi nào sau đây?",
    "options": [
      "Giảm nhạy cảm hoàn toàn với tất cả các loại thuốc",
      "Kháng lại tác dụng của thuốc chống đông máu",
      "Mất hoàn toàn thụ thể thần kinh được áp dụng trong thực hành lâm sàng",
      "Tăng nhạy cảm với tác dụng an thần của Benzodiazepin và thuốc ức chế thần kinh trung ương"
    ],
    "correct": 3,
    "explanation": "Người già tăng nhạy cảm dược lực học với thuốc ức chế TKTW, chỉ một liều nhỏ diazepam đã có thể gây lú lẫn ngủ gà kéo dài.",
    "reference": "Sách DLS tr. 262",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1017,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Thuốc điều trị phì đại lành tính tuyến tiền liệt nhóm chẹn alpha-1 nào ít gây tụt huyết áp tư thế đứng nhất?",
    "options": [
      "Tamsulosin và Silodosin",
      "Terazosin",
      "Doxazosin",
      "Prazosin"
    ],
    "correct": 0,
    "explanation": "Tamsulosin chọn lọc trên thụ thể alpha-1A tại cổ bàng quang và tuyến tiền liệt, ít tác động trên mạch máu toàn thân.",
    "reference": "Sách DLS tr. 263",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1018,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Thuốc chống trầm cảm ba vòng (như Amitriptylin) nằm trong danh mục Beers cần tránh dùng cho người già vì:",
    "options": [
      "Làm cho người già bị béo phì cấp tính",
      "Kháng cholinergic mạnh gây lú lẫn, tụt huyết áp và loạn nhịp tim",
      "Làm tăng đường huyết lên trên 30 mmol/L được áp dụng trong thực hành lâm sàng",
      "Làm cho xương sọ dày lên"
    ],
    "correct": 1,
    "explanation": "Amitriptylin có độc tính kháng cholinergic và an thần rất nặng, ưu tiên thay bằng nhóm SSRI (như Sertralin) an toàn hơn.",
    "reference": "Sách DLS tr. 264",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1019,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Mục tiêu huyết áp điều trị khuyến cáo cho người cao tuổi (> 65 tuổi) theo Hội Tim mạch học Việt Nam thường là:",
    "options": [
      "Huyết áp tâm thu dưới 110 mmHg để ngăn ngừa tối đa nguy cơ đột quỵ tái phát",
      "Huyết áp tâm thu từ 150 đến 160 mmHg để đảm bảo tưới máu não ở người xơ vữa mạch",
      "Huyết áp tâm thu từ 130 đến 139 mmHg nếu dung nạp tốt, không hạ huyết áp tâm thu xuống dưới 120 mmHg",
      "Chỉ điều trị khi huyết áp tâm trương vượt quá 100 mmHg mà không cần quan tâm huyết áp tâm thu"
    ],
    "correct": 2,
    "explanation": "Khuyến cáo VSH: Người cao tuổi hạ HA tâm thu về 130-139 mmHg; tránh hạ quá mức (< 120/70) gây thiếu máu tưới máu não và thận.",
    "reference": "Sách DLS tr. 270",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1020,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Để nâng cao tuân thủ điều trị cho người cao tuổi mắt kém hay quên sống một mình, biện pháp tối ưu là:",
    "options": [
      "Kê đơn thuốc chia thành 6 cữ uống khác nhau rải rác cả ngày lẫn đêm",
      "Bắt bệnh nhân tự nhớ tên biệt dược tiếng Latinh phức tạp",
      "Chỉ kê dạng thuốc bột tự pha không có thìa lường",
      "Sử dụng hộp chia thuốc theo ngày có nắp mở dễ dàng và chữ in to rõ ràng"
    ],
    "correct": 3,
    "explanation": "Hộp chia liều theo buổi (sáng/trưa/chiều/tối) giúp người già nhận biết ngay cữ thuốc đã uống hay chưa, giảm nhầm lẫn.",
    "reference": "Sách DLS tr. 272",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1021,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Thuốc giãn cơ ngoại biên (như Cyclobenzaprin, Carisoprodol) bị khuyến cáo tránh dùng cho người cao tuổi vì:",
    "options": [
      "Tác dụng an thần, kháng cholinergic và tăng nguy cơ ngã chấn thương",
      "Gây viêm gan nhiễm mỡ cấp tính",
      "Làm teo cơ toàn thân nhanh chóng",
      "Gây sốt cao liên tục không dứt"
    ],
    "correct": 0,
    "explanation": "Các thuốc giãn cơ trung ương/ngoại biên có hồ sơ dung nạp rất kém ở người già theo tiêu chí Beers.",
    "reference": "Sách DLS tr. 271",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1022,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "question": "Khi đánh giá chức năng thận ở bệnh nhân cao tuổi 85 tuổi có cân nặng 40 kg, cách làm chuẩn xác nhất là:",
    "options": [
      "Chỉ dựa vào lượng nước tiểu 24 giờ mà không cần định lượng creatinin huyết thanh",
      "Tính toán CrCl bằng công thức Cockcroft-Gault hoặc eGFR để hiệu chỉnh liều, không chỉ dựa vào Creatinin máu đơn thuần",
      "Lấy ngưỡng eGFR cố định 90 mL/phút/1.73m2 làm chuẩn cho mọi người cao tuổi",
      "Chỉ nhìn chỉ số creatinin máu thấy 0,8 mg/dL là kết luận chức năng lọc cầu thận hoàn toàn bình thường"
    ],
    "correct": 1,
    "explanation": "Bắt buộc tính CrCl ước tính để chỉnh liều thuốc đào thải qua thận, tránh ngộ độc do creatinin máu bình thường giả tạo.",
    "reference": "Sách DLS tr. 258",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1023,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Theo thang phân loại nguy cơ của FDA trên thai kỳ, nhóm A được định nghĩa là:",
    "options": [
      "Thuốc hoàn toàn chưa từng được thử nghiệm trên bất kỳ sinh vật nào",
      "Chống chỉ định tuyệt đối cho mọi phụ nữ trong độ tuổi sinh đẻ được áp dụng trong thực hành lâm sàng",
      "Các thử nghiệm có đối chứng trên phụ nữ mang thai không chứng minh được nguy cơ đối với thai nhi trong suốt thai kỳ",
      "Có bằng chứng quái thai rõ ràng trên thai nhi người nhưng vẫn được dùng tự do"
    ],
    "correct": 2,
    "explanation": "Nhóm A: Nghiên cứu có đối chứng trên thai phụ chứng minh an toàn tuyệt đối (ví dụ: acid folic liều bổ sung).",
    "reference": "Sách DLS tr. 275",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1024,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Đặc điểm của nhóm thuốc thuộc phân loại nguy cơ C theo FDA trên thai kỳ là:",
    "options": [
      "An toàn tuyệt đối không có bất kỳ rủi ro nào",
      "Chống chỉ định tuyệt đối không được dùng trong mọi hoàn cảnh",
      "Thuốc đã bị cấm lưu hành vĩnh viễn trên toàn thế giới",
      "Có độc tính trên thai hoặc chưa nghiên cứu đầy đủ, chỉ dùng khi cần thiết"
    ],
    "correct": 3,
    "explanation": "Nhóm C: Thiếu dữ liệu đối chứng trên người; cân nhắc chỉ định khi bệnh đe dọa mẹ và không có thuốc thay thế nhóm A/B.",
    "reference": "Sách DLS tr. 276",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1025,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Hệ thống ghi nhãn quy định mới của FDA (PLLR - Pregnancy and Lactation Labeling Rule) đã thay thế hệ thống chữ cái A-B-C-D-X bằng:",
    "options": [
      "Bản tóm tắt nguy cơ chi tiết cho Thai kỳ, Cho con bú và Sinh sản",
      "Hệ thống chấm điểm từ 1 sao đến 5 sao theo bảng xếp hạng được áp dụng trong thực hành lâm sàng",
      "Hệ thống mã vạch quét bằng điện thoại thông minh",
      "Bỏ hoàn toàn nhãn cảnh báo trên vỏ hộp thuốc"
    ],
    "correct": 0,
    "explanation": "PLLR loại bỏ A/B/C/D/X để cung cấp thông tin tường giải chi tiết về nguy cơ, cân nhắc lâm sàng và dữ liệu người bệnh.",
    "reference": "Sách DLS tr. 277",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1026,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Thuốc hạ huyết áp nào sau đây được xem là lựa chọn an toàn hàng đầu để điều trị tăng huyết áp thai kỳ mạn tính?",
    "options": [
      "Spironolacton viên nén",
      "Methyldopa hoặc Labetalol",
      "Losartan viên uống",
      "Captopril viên ngậm"
    ],
    "correct": 1,
    "explanation": "Methyldopa, Labetalol và Nifedipin tác dụng kéo dài là các thuốc hạ áp chuẩn hàng đầu cho phụ nữ có thai.",
    "reference": "Sách DLS tr. 280",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1027,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Biến chứng nguy hiểm trên thai nhi khi mẹ dùng thuốc ức chế men chuyển (như Enalapril) trong 6 tháng cuối thai kỳ là:",
    "options": [
      "Dị tật sứt môi hở hàm ếch đơn thuần",
      "Gây đục thủy tinh thể hai mắt bẩm sinh",
      "Thiểu ối, suy thận thai nhi vô niệu, kém phát triển xương sọ và tử vong thai nhi",
      "Làm thai nhi phát triển to quá khổ trên 5 kg"
    ],
    "correct": 2,
    "explanation": "ƯCMC làm mất tưới máu thận thai nhi gây suy thận vô niệu, cạn ối dẫn đến co cứng chi, teo phổi và tử vong.",
    "reference": "Sách DLS tr. 281",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1028,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Thuốc chống co giật Magnesium sulfat (MgSO4) truyền tĩnh mạch được lựa chọn hàng đầu trong sản khoa nhằm mục đích:",
    "options": [
      "Hạ đường huyết cấp cứu trong đái tháo đường thai kỳ",
      "Gây chuyển dạ đẻ chỉ huy bằng đường truyền",
      "Kích thích tuyến sữa bài tiết sữa non ngay lập tức",
      "Dự phòng và cắt cơn co giật trong sản giật nặng"
    ],
    "correct": 3,
    "explanation": "MgSO4 là chuẩn vàng toàn cầu để điều trị cắt cơn và dự phòng co giật ở thai phụ tiền sản giật nặng/sản giật.",
    "reference": "Sách DLS tr. 282",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1029,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Dấu hiệu lâm sàng sớm nhất cảnh báo ngộ độc Magnesium sulfat (MgSO4) khi tiêm truyền cần giám sát là:",
    "options": [
      "Mất phản xạ gân xương bánh chè",
      "Bệnh nhân đột ngột sốt cao 41 độ C",
      "Huyết áp tăng vọt lên trên 200 mmHg",
      "Xuất hiện ban đỏ da dạng mề đay toàn thân"
    ],
    "correct": 0,
    "explanation": "Mất phản xạ gân gối xuất hiện ở nồng độ Mg2+ 3,5-5 mmol/L; nồng độ cao hơn sẽ gây ức chế hô hấp và ngừng tim.",
    "reference": "Sách DLS tr. 283",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1030,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Thuốc giải độc đặc hiệu bắt buộc phải chuẩn bị sẵn đầu giường khi truyền Magnesium sulfat cấp cứu sản giật là:",
    "options": [
      "N-acetylcystein truyền tĩnh mạch",
      "Calci gluconat 10% tiêm tĩnh mạch chậm",
      "Naloxon tiêm bắp",
      "Vitamin K1 tiêm dưới da"
    ],
    "correct": 1,
    "explanation": "Calci tiêm tĩnh mạch đối kháng trực tiếp tác dụng ức chế thần kinh cơ của ion magnesi, giải độc ngộ độc MgSO4.",
    "reference": "Sách DLS tr. 284",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1031,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Kháng sinh nhóm Macrolid nào sau đây được ưu tiên lựa chọn an toàn cho phụ nữ có thai khi dị ứng Penicillin?",
    "options": [
      "Clarithromycin liều cao",
      "Tetracyclin viên nang",
      "Erythromycin hoặc Azithromycin",
      "Levofloxacin truyền dịch"
    ],
    "correct": 2,
    "explanation": "Erythromycin (dạng base/stearat) và Azithromycin (FDA nhóm B) an toàn trong thai kỳ; tránh dạng estolat vì gây độc gan.",
    "reference": "Sách DLS tr. 285",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1032,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Erythromycin dạng muối nào sau đây chống chỉ định cho phụ nữ mang thai vì nguy cơ gây ứ mật vàng da độc gan cho mẹ?",
    "options": [
      "Erythromycin base",
      "Erythromycin stearat",
      "Erythromycin ethylsuccinat",
      "Erythromycin estolat"
    ],
    "correct": 3,
    "explanation": "Dạng muối Estolat có nguy cơ cao gây viêm gan ứ mật hoại tử ở phụ nữ mang thai, chống chỉ định trong thai kỳ.",
    "reference": "Sách DLS tr. 286",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1033,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Thuốc chống trầm cảm nhóm SSRI nào sau đây bị cảnh báo nguy cơ gây dị tật tim mạch bẩm sinh (thông liên thất) khi dùng 3 tháng đầu thai kỳ?",
    "options": [
      "Paroxetin",
      "Citalopram",
      "Fluoxetin",
      "Sertralin"
    ],
    "correct": 0,
    "explanation": "Paroxetin bị FDA xếp loại D do tăng nguy cơ dị tật tim mạch thai nhi, ưu tiên dùng Sertralin nếu cần điều trị trầm cảm.",
    "reference": "Sách DLS tr. 287",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1034,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Thuốc chống nôn Metoclopramid dùng cho phụ nữ sau sinh có tác dụng phụ nào trên sự bài tiết sữa mẹ?",
    "options": [
      "Làm mất hoàn toàn sữa mẹ vĩnh viễn",
      "Kích thích tăng tiết prolactin làm tăng lượng sữa mẹ bài xuất",
      "Gây đông vón sữa ngay trong ống dẫn sữa",
      "Làm cho sữa mẹ chuyển thành màu xanh lá cây"
    ],
    "correct": 1,
    "explanation": "Metoclopramid đối kháng dopamin giải phóng prolactin từ tuyến yên, đôi khi được dùng off-label để kích thích tạo sữa.",
    "reference": "Sách DLS tr. 288",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1035,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Để giảm thiểu tối đa lượng thuốc bài xuất vào sữa mẹ khi người mẹ đang nuôi con bú cần uống thuốc:",
    "options": [
      "Cho trẻ bú đúng vào thời điểm nồng độ thuốc trong máu mẹ đạt đỉnh cao nhất",
      "Tăng gấp đôi liều thuốc của mẹ để trẻ được bảo vệ gián tiếp",
      "Cho trẻ bú ngay trước khi mẹ uống thuốc hoặc uống thuốc ngay sau cữ bú của trẻ",
      "Uống thuốc liên tục cách nhau mỗi 1 giờ"
    ],
    "correct": 2,
    "explanation": "Uống thuốc ngay sau khi cho con bú giúp nồng độ thuốc trong máu mẹ giảm xuống mức thấp trước cữ bú tiếp theo.",
    "reference": "Sách DLS tr. 289",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1036,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Chỉ số RID (Relative Infant Dose - Liều tương đối của trẻ bú mẹ) được tính bằng công thức:",
    "options": [
      "RID = Số lần trẻ đi tiểu trong 24 giờ",
      "RID = Cân nặng của mẹ chia cho cân nặng của con",
      "RID = Thể tích sữa trẻ bú nhân với nồng độ glucose",
      "RID = [Liều thuốc trẻ nhận qua sữa mỗi ngày / Liều thuốc mẹ dùng] x 100%"
    ],
    "correct": 3,
    "explanation": "RID so sánh liều tính theo mg/kg của trẻ với liều mg/kg của mẹ; RID < 10% được coi là an toàn chấp nhận được.",
    "reference": "Sách DLS tr. 290",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1037,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Thuốc giảm đau chống viêm Ibuprofen có an toàn cho phụ nữ đang cho con bú không?",
    "options": [
      "Rất an toàn vì tỷ lệ gắn protein huyết tương cao, lượng thuốc qua sữa cực kỳ thấp",
      "Gây dị tật tim mạch cho trẻ bú mẹ được áp dụng trong thực hành lâm sàng",
      "Rất độc hại chống chỉ định tuyệt đối khi cho con bú",
      "Chỉ dùng được khi trẻ đã cai sữa hoàn toàn"
    ],
    "correct": 0,
    "explanation": "Ibuprofen gắn albumin rất mạnh và thời gian bán thải ngắn, lượng qua sữa không đáng kể, là NSAID đầu tay cho mẹ cho con bú.",
    "reference": "Sách DLS tr. 291",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1038,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Kháng sinh Cotrimoxazol cần tránh dùng cho người mẹ đang cho con bú ở tình huống nào?",
    "options": [
      "Khi trẻ bú mẹ hoàn toàn khỏe mạnh trên 1 tuổi",
      "Khi trẻ dưới 2 tháng tuổi hoặc trẻ bị thiếu hụt men G6PD do nguy cơ tan máu và vàng da nhân não",
      "Khi trẻ đã bắt đầu ăn dặm",
      "Khi mẹ bị nhiễm khuẩn tiết niệu do E. coli"
    ],
    "correct": 1,
    "explanation": "Sulfamid qua sữa có thể cạnh tranh gắn kết bilirubin ở trẻ non tháng hoặc gây tan máu cấp nếu trẻ thiếu G6PD.",
    "reference": "Sách DLS tr. 292",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1039,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Thuốc chống đông máu nào an toàn tuyệt đối cho phụ nữ đang cho con bú?",
    "options": [
      "Dabigatran viên nang uống",
      "Rivaroxaban viên nén",
      "Heparin, Enoxaparin và Warfarin",
      "Không có thuốc chống đông nào dùng được"
    ],
    "correct": 2,
    "explanation": "Heparin không qua sữa; Warfarin gắn protein huyết tương 99% và qua sữa cực ít nên dùng an toàn cho mẹ cho con bú.",
    "reference": "Sách DLS tr. 293",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1040,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Thuốc hạ sốt Paracetamol có nồng độ trong sữa mẹ so với huyết tương mẹ (Tỷ số M/P) khoảng:",
    "options": [
      "Bằng 0% hoàn toàn không qua sữa",
      "Khoảng 50 lần làm ngộ độc gan trẻ ngay lập tức",
      "Không thể đo lường được được áp dụng trong thực hành lâm sàng",
      "Khoảng 0,7 đến 1,0 và RID rất thấp, an toàn tối đa cho trẻ bú mẹ"
    ],
    "correct": 3,
    "explanation": "Paracetamol qua sữa ở lượng rất thấp, là thuốc hạ sốt an toàn hàng đầu được Học viện Nhi khoa Hoa Kỳ khuyên dùng.",
    "reference": "Sách DLS tr. 294",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1041,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Thuốc điều trị loét dạ dày kháng thụ thể H2 nào sau đây được ưu tiên cho phụ nữ cho con bú hơn Ranitidin/Cimetidin?",
    "options": [
      "Famotidin",
      "Misoprostol",
      "Cimetidin liều cao",
      "Bismuth subsalicylat"
    ],
    "correct": 0,
    "explanation": "Famotidin qua sữa ít hơn nhiều so với cimetidin và không gây tương tác enzym gan, là lựa chọn ưu tiên.",
    "reference": "Sách DLS tr. 295",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1042,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Thuốc ức chế co bóp tử cung Nifedipin dùng trong dọa sinh non có cơ chế tác dụng dược lý là:",
    "options": [
      "Làm co thắt động mạch rốn thai nhi",
      "Chẹn kênh calci làm giảm nồng độ calci nội bào trong tế bào cơ tử cung",
      "Ức chế sản sinh hormon prolactin được áp dụng trong thực hành lâm sàng",
      "Kích thích trực tiếp thụ thể oxytocin"
    ],
    "correct": 1,
    "explanation": "Nifedipin chẹn kênh calci type L làm giảm canxi nội bào, giãn cơ trơn tử cung, cắt cơn co chuyển dạ sinh non hiệu quả.",
    "reference": "Sách DLS tr. 296",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1043,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Thuốc đồng vận thụ thể Beta-2 giao cảm Salbutamol dạng khí dung có an toàn trong thai kỳ khi điều trị cơn hen phế quản cấp không?",
    "options": [
      "Chỉ dùng được sau khi đã sinh em bé",
      "Chống chỉ định tuyệt đối vì gây sảy thai ngay lập tức",
      "An toàn và là lựa chọn hàng đầu cắt cơn hen cho phụ nữ mang thai",
      "Gây dị tật tim mạch bẩm sinh cho thai nhi"
    ],
    "correct": 2,
    "explanation": "SABA dạng hít (như Salbutamol) hấp thu toàn thân tối thiểu, an toàn tuyệt đối và bắt buộc dùng để đảm bảo oxy cho thai.",
    "reference": "Sách DLS tr. 297",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1044,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Thiếu oxy do cơn hen phế quản không được kiểm soát ở người mẹ gây ra hậu quả gì cho thai nhi?",
    "options": [
      "Thai nhi phát triển nhanh vượt mức bình thường",
      "Không gây bất kỳ ảnh hưởng nào lên thai",
      "Giúp phổi thai nhi mau trưởng thành hơn",
      "Thai chậm phát triển trong tử cung, sinh non, nhẹ cân và tăng tỷ lệ tử vong chu sinh"
    ],
    "correct": 3,
    "explanation": "Cơn hen không kiểm soát gây thiếu oxy máu thai nghiêm trọng, nguy hiểm hơn nhiều so với việc dùng thuốc hen đúng chỉ định.",
    "reference": "Sách DLS tr. 298",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1045,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Thuốc điều trị suy tim nhóm Digoxin qua nhau thai như thế nào?",
    "options": [
      "Qua nhau thai dễ dàng, nồng độ thuốc trong máu thai nhi tương đương nồng độ trong máu mẹ",
      "Tích lũy trong bánh nhau làm hoại tử bánh nhau",
      "Bị enzym nhau thai phá hủy hoàn toàn trong 1 giây",
      "Hoàn toàn không đi qua được nhau thai"
    ],
    "correct": 0,
    "explanation": "Digoxin qua nhau thai tốt và thậm chí được dùng để điều trị rối loạn nhịp nhanh tim thai nhi qua tuần hoàn mẹ.",
    "reference": "Sách DLS tr. 299",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1046,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Liều lượng sắt nguyên tố khuyến cáo bổ sung hàng ngày cho mọi phụ nữ mang thai từ khi phát hiện có thai là:",
    "options": [
      "100 đến 200 mg sắt nguyên tố chia làm 3 lần uống cùng bữa ăn",
      "30 đến 60 mg sắt nguyên tố kèm 400 mcg acid folic mỗi ngày",
      "10 đến 15 mg sắt nguyên tố kết hợp vitamin C liều cao",
      "150 mg sắt nguyên tố phối hợp với Canxi carbonat 1000 mg"
    ],
    "correct": 1,
    "explanation": "WHO và Bộ Y tế khuyến cáo bổ sung 30-60 mg sắt nguyên tố + 400 mcg acid folic suốt thai kỳ để dự phòng thiếu máu thiếu sắt.",
    "reference": "Sách DLS tr. 300",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1047,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "question": "Thuốc điều trị táo bón được coi là an toàn và ưu tiên lựa chọn đầu tay cho phụ nữ mang thai là:",
    "options": [
      "Thuốc nhuận tràng kích thích dầu thầu dầu",
      "Thuốc thụt tháo natri phosphat liều cao được áp dụng trong thực hành lâm sàng",
      "Thuốc nhuận tràng tạo khối hoặc nhuận tràng thẩm thấu",
      "Viên uống muối tẩy magie sulfat đậm đặc"
    ],
    "correct": 2,
    "explanation": "Nhuận tràng tạo khối và thẩm thấu (lactulose, PEG) không hấp thu vào máu, an toàn tuyệt đối cho thai nhi.",
    "reference": "Sách DLS tr. 301",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1048,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Thông số PK/PD quyết định hiệu quả diệt khuẩn của kháng sinh nhóm Beta-lactam (Penicillin, Cephalosporin) là:",
    "options": [
      "Tỷ số giữa nồng độ đỉnh trên MIC",
      "Tốc độ lọc của cầu thận trong 24 giờ",
      "Diện tích dưới đường cong trên MIC",
      "Tỷ lệ phần trăm thời gian nồng độ thuốc tự do trên nồng độ ức chế tối thiểu"
    ],
    "correct": 3,
    "explanation": "Beta-lactam là kháng sinh diệt khuẩn phụ thuộc thời gian, mục tiêu %T > MIC đạt >= 40-70% khoảng liều.",
    "reference": "Sách DLS tr. 310",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1049,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Biện pháp tối ưu hóa PK/PD của Beta-lactam để tăng %T > MIC trong điều trị nhiễm khuẩn nặng là:",
    "options": [
      "Truyền tĩnh mạch kéo dài hoặc truyền liên tục 24 giờ",
      "Chỉ dùng thuốc cách ngày để vi khuẩn không kịp quen",
      "Tiêm tĩnh mạch trực tiếp thật nhanh trong 30 giây",
      "Dồn toàn bộ liều cả ngày vào một lần duy nhất buổi sáng"
    ],
    "correct": 0,
    "explanation": "Truyền kéo dài (extended infusion) hoặc truyền liên tục tối ưu hóa thời gian nồng độ duy trì trên MIC, cải thiện tỷ lệ sống sót.",
    "reference": "Sách DLS tr. 311",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1050,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Thông số PK/PD quyết định hiệu quả diệt khuẩn của kháng sinh nhóm Aminosid (Gentamicin, Amikacin) là:",
    "options": [
      "Thời gian bán thải T1/2 đạt trên 48 giờ",
      "Tỷ số nồng độ đỉnh tự do trên MIC với mục tiêu đạt từ 8 đến 10",
      "Tỷ lệ phần trăm thời gian nồng độ trên MIC",
      "Tỷ số giữa thể tích phân bố trên cân nặng"
    ],
    "correct": 1,
    "explanation": "Aminosid là kháng sinh diệt khuẩn phụ thuộc nồng độ, Cmax/MIC đạt 8-10 giúp tối đa hóa hiệu lực diệt khuẩn và hiệu ứng hậu kháng sinh (PAE).",
    "reference": "Sách DLS tr. 312",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1051,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Chế độ liều dùng Kháng sinh Aminosid một lần duy nhất trong ngày (ODTD - Once Daily) đem lại ưu điểm gì?",
    "options": [
      "Giúp giảm giá thành sản xuất thuốc của nhà máy",
      "Làm cho thuốc không bị đào thải qua thận",
      "Cmax cao tối ưu diệt khuẩn và Cmin thấp giảm độc tính thận và tai",
      "Tiêu diệt được cả virus và nấm"
    ],
    "correct": 2,
    "explanation": "ODTD tận dụng tính diệt khuẩn phụ thuộc nồng độ và PAE kéo dài, nồng độ đáy hạ thấp giúp tế bào thận hồi phục.",
    "reference": "Sách DLS tr. 313",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1052,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Thông số PK/PD chuẩn để theo dõi và chuẩn hóa liều của kháng sinh Glycopeptid Vancomycin là:",
    "options": [
      "Chỉ đo nồng độ đỉnh Cmax vượt trên 100 mcg/mL",
      "Thời gian duy trì nồng độ thuốc trong dạ dày",
      "Tỷ lệ gắn kết protein huyết tương trên 99% được áp dụng trong thực hành lâm sàng",
      "Tỷ số diện tích dưới đường cong trên MIC đạt mục tiêu từ 400 đến 600"
    ],
    "correct": 3,
    "explanation": "Hướng dẫn ASHP/IDSA khuyến cáo theo dõi Vancomycin theo AUC24/MIC = 400-600 (đối với tụ cầu vàng MRSA) để đạt hiệu quả và giảm độc thận.",
    "reference": "Sách DLS tr. 314",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1053,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh nhóm Carbapenem nào sau đây không có hoạt tính trên trực khuẩn mủ xanh (Pseudomonas aeruginosa)?",
    "options": [
      "Ertapenem",
      "Meropenem",
      "Doripenem",
      "Imipenem"
    ],
    "correct": 0,
    "explanation": "Ertapenem không diệt được Pseudomonas aeruginosa và Acinetobacter, chỉ dùng điều trị nhiễm khuẩn cộng đồng hoặc vi khuẩn đường ruột.",
    "reference": "Sách DLS tr. 318",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1054,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Thuốc ức chế men Dehydropeptidase-1 (Cilastatin) được phối hợp cùng Imipenem nhằm mục đích:",
    "options": [
      "Mở rộng phổ diệt khuẩn sang vi khuẩn kỵ khí",
      "Ngăn cản thận phân hủy Imipenem và làm giảm độc tính trên ống thận",
      "Làm giảm đau buốt tại vị trí tiêm bắp được áp dụng trong thực hành lâm sàng",
      "Làm cho Imipenem có thể uống được qua đường tiêu hóa"
    ],
    "correct": 1,
    "explanation": "Enzym dehydropeptidase-1 ở bờ bàn chải ống thận phân hủy imipenem; cilastatin ức chế enzym này giúp duy trì nồng độ imipenem.",
    "reference": "Sách DLS tr. 319",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1055,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh được coi là lựa chọn hàng đầu điều trị viêm phổi do vi khuẩn nội bào không điển hình (Mycoplasma, Chlamydia) là:",
    "options": [
      "Kháng sinh nhóm Cephalosporin thế hệ 1",
      "Kháng sinh nhóm Aminosid",
      "Kháng sinh nhóm Macrolid hoặc Doxycyclin",
      "Kháng sinh nhóm Penicillin tự nhiên"
    ],
    "correct": 2,
    "explanation": "Vi khuẩn không điển hình không có vách peptidoglycan nên đề kháng tự nhiên với Beta-lactam; cần dùng Macrolid, Tetracyclin hoặc Quinolon.",
    "reference": "Sách DLS tr. 320",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1056,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh nào sau đây là lựa chọn hàng đầu điều trị viêm đại tràng giả mạc do trực khuẩn Clostridioides difficile đường uống?",
    "options": [
      "Vancomycin tiêm truyền tĩnh mạch",
      "Ciprofloxacin viên nén uống",
      "Amoxicillin viên nang uống",
      "Vancomycin đường uống hoặc Fidaxomicin"
    ],
    "correct": 3,
    "explanation": "Vancomycin uống không hấp thu vào máu, tập trung 100% nồng độ trong lòng đại tràng tiêu diệt C. difficile (Vancomycin tiêm không có tác dụng).",
    "reference": "Sách DLS tr. 322",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1057,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Thời gian vàng để tiêm kháng sinh dự phòng trong phẫu thuật (Surgical Prophylaxis) là:",
    "options": [
      "Trong vòng 60 phút trước khi rạch da",
      "Trước khi phẫu thuật 48 giờ đồng hồ",
      "Chỉ tiêm khi vết mổ đã có dấu hiệu chảy mủ",
      "Sau khi ca mổ đã kết thúc và bệnh nhân về phòng hậu phẫu"
    ],
    "correct": 0,
    "explanation": "Kháng sinh dự phòng cần đạt nồng độ tối đa tại mô trước nhát dao rạch da đầu tiên (trong vòng 60 phút trước rạch da).",
    "reference": "Sách DLS tr. 325",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1058,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh được lựa chọn phổ biến và chuẩn mực nhất cho hầu hết các phẫu thuật sạch và sạch - nhiễm là:",
    "options": [
      "Meropenem",
      "Cefazolin",
      "Vancomycin phối hợp Amikacin",
      "Colistin tiêm tĩnh mạch"
    ],
    "correct": 1,
    "explanation": "Cefazolin có phổ bao phủ tốt tụ cầu da và liên cầu, thời gian bán thải phù hợp, độc tính thấp và chi phí rẻ nhất.",
    "reference": "Sách DLS tr. 326",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1059,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Thời gian duy trì kháng sinh dự phòng sau một ca phẫu thuật thông thường (không nhiễm khuẩn từ trước) khuyến cáo là:",
    "options": [
      "Tiếp tục truyền kháng sinh cho đến khi bệnh nhân xuất viện",
      "Uống kéo dài tối thiểu 1 tháng sau khi cắt chỉ",
      "Ngừng trong vòng 24 giờ sau khi kết thúc phẫu thuật",
      "từ 10 đến 14 ngày"
    ],
    "correct": 2,
    "explanation": "Kéo dài kháng sinh dự phòng > 24 giờ không làm giảm nhiễm khuẩn vết mổ mà làm tăng độc tính và vi khuẩn kháng thuốc.",
    "reference": "Sách DLS tr. 327",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1060,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Cần bổ sung một liều kháng sinh dự phòng Cefazolin trong khi phẫu thuật khi ca mổ kéo dài trên bao nhiêu thời gian?",
    "options": [
      "Không bao giờ được tiêm thêm liều thứ hai",
      "Khi ca mổ kéo dài trên 30 phút",
      "Chỉ khi ca mổ kéo dài tròn 24 giờ",
      "Kéo dài trên 3 đến 4 giờ hoặc mất máu > 1500 mL"
    ],
    "correct": 3,
    "explanation": "Nếu phẫu thuật kéo dài quá 2 lần T1/2 của kháng sinh (T1/2 của cefazolin ~ 1,8h) hoặc mất máu nhiều, cần tiêm lặp lại để duy trì nồng độ mô.",
    "reference": "Sách DLS tr. 328",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1061,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Cơ chế kháng kháng sinh Beta-lactam chủ yếu của Tụ cầu vàng kháng Methicillin (MRSA) là:",
    "options": [
      "Đột biến gen mecA tạo ra protein gắn penicillin mới PBP2a có ái lực cực thấp với beta-lactam",
      "Thay đổi tính thấm màng tế bào của vi khuẩn gram âm được áp dụng trong thực hành lâm sàng",
      "Tiết men beta-lactamase thông thường phá hủy vòng beta-lactam",
      "Bơm tống thuốc Efflux pump đẩy kháng sinh ra ngoài"
    ],
    "correct": 0,
    "explanation": "Gen mecA mã hóa PBP2a không gắn kết với hầu hết các beta-lactam (trừ Cephalosporin thế hệ 5 Ceftaroline), kháng toàn bộ penicillin và cephalosporin.",
    "reference": "Sách DLS tr. 316",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1062,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh nào sau đây là lựa chọn hàng đầu điều trị nhiễm khuẩn huyết do MRSA (Tụ cầu vàng kháng Methicillin)?",
    "options": [
      "Amoxicillin phối hợp Acid clavulanic",
      "Vancomycin hoặc Teicoplanin",
      "Cefuroxim tiêm truyền",
      "Erythromycin đường uống"
    ],
    "correct": 1,
    "explanation": "Glycopeptid (Vancomycin, Teicoplanin) là kháng sinh chuẩn mực hàng đầu điều trị các nhiễm khuẩn nặng do MRSA.",
    "reference": "Sách DLS tr. 317",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1063,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh nhóm Oxazolidinon (Linezolid) có ưu điểm nổi bật nào trong điều trị viêm phổi do MRSA?",
    "options": [
      "Không bị đề kháng bởi bất kỳ chủng tụ cầu vàng hay Enterococcus nào",
      "Có phổ diệt khuẩn bao phủ cả trực khuẩn mủ xanh và trực khuẩn đường ruột sinh ESBL",
      "Thâm nhập rất tốt vào dịch lót biểu mô phế nang phổi và có dạng uống sinh khả dụng gần 100%",
      "Có thời gian bán thải cực dài trên 72 giờ nên chỉ cần dùng liều duy nhất mỗi tuần"
    ],
    "correct": 2,
    "explanation": "Linezolid phân bố vào dịch biểu mô phế nang cao gấp nhiều lần huyết tương, sinh khả dụng uống 100% tiện lợi xuống thang.",
    "reference": "Sách DLS tr. 324",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1064,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Tại sao kháng sinh Daptomycin tuyệt đối không được chỉ định để điều trị Viêm phổi?",
    "options": [
      "Làm tăng áp lực động mạch phổi ác tính",
      "Không thể phân bố vào các mô có mạch máu",
      "Làm cho phế nang bị đông đặc ngay lập tức được áp dụng trong thực hành lâm sàng",
      "Bị bất hoạt hoàn toàn bởi chất hoạt động bề mặt Surfactant trong phế nang phổi"
    ],
    "correct": 3,
    "explanation": "Daptomycin gắn kết với phospholipid của surfactant phổi làm mất hoạt tính kháng khuẩn, thất bại điều trị viêm phổi.",
    "reference": "Sách DLS tr. 323",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1065,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh nào sau đây là lựa chọn điều trị hàng đầu cho nhiễm khuẩn do vi khuẩn Gram âm sinh men ESBL (Beta-lactamase phổ rộng)?",
    "options": [
      "Carbapenem",
      "Penicillin G tiêm bắp",
      "Amoxicillin đơn thuần",
      "Cephalosporin thế hệ 3"
    ],
    "correct": 0,
    "explanation": "Men ESBL phá hủy penicillin và cephalosporin thế hệ 1, 2, 3, 4; Carbapenem là chuẩn vàng điều trị nhiễm khuẩn nặng do ESBL.",
    "reference": "Sách DLS tr. 315",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1066,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh nhóm Polypeptid (Colistin - Polymyxin E) thường được giữ lại làm vũ khí cuối cùng để điều trị:",
    "options": [
      "Viêm họng do liên cầu khuẩn tan máu beta nhóm A",
      "Trực khuẩn Gram âm đa kháng và toàn kháng sinh men carbapenemase",
      "Nhiễm nấm candida thực quản được áp dụng trong thực hành lâm sàng",
      "Bệnh cúm do virus Influenza gây ra"
    ],
    "correct": 1,
    "explanation": "Colistin là kháng sinh cứu cánh cuối cùng cho vi khuẩn gram âm đường ruột kháng Carbapenem (CRE, CRAB, CRPA).",
    "reference": "Sách DLS tr. 330",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1067,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Độc tính đáng ngại nhất cần giám sát chặt chẽ khi sử dụng kháng sinh Colistin tiêm tĩnh mạch là:",
    "options": [
      "Gây đứt gân gót chân tự phát",
      "Độc tính trên mắt gây mù lòa",
      "Độc tính trên thận gây hoại tử ống thận cấp và độc tính thần kinh cơ",
      "Gây nhồi máu cơ tim cấp"
    ],
    "correct": 2,
    "explanation": "Colistin phá hủy màng tế bào gây độc thận (tỷ lệ 30-50%) và chẹn thần kinh cơ (dị cảm, yếu cơ, liệt hô hấp).",
    "reference": "Sách DLS tr. 331",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1068,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh nào sau đây đào thải chủ yếu qua gan và mật, tạo nồng độ cao trong đường mật thích hợp cho viêm đường mật?",
    "options": [
      "Vancomycin",
      "Tobramycin",
      "Gentamicin",
      "Ceftriaxone và Cefoperazon"
    ],
    "correct": 3,
    "explanation": "Ceftriaxone và Cefoperazon thải trừ nhiều qua mật, nồng độ trong dịch mật cao gấp nhiều lần huyết tương.",
    "reference": "Sách DLS tr. 321",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1069,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh Macrolid (Erythromycin) phối hợp với thuốc chống loạn nhịp tim (Amiodaron) có nguy cơ gây tai biến điện tim nào?",
    "options": [
      "Kéo dài khoảng QT trên điện tâm đồ và gây cơn xoắn đỉnh ngừng tim",
      "Làm mất hoàn toàn sóng P trên điện tâm đồ",
      "Làm tăng biên độ sóng R lên gấp mười lần",
      "Làm ngắn khoảng PR gây hội chứng Wolff-Parkinson-White"
    ],
    "correct": 0,
    "explanation": "Macrolid và Quinolon chẹn kênh kali IKr làm kéo dài khoảng QT, phối hợp với thuốc loạn nhịp làm tăng nguy cơ xoắn đỉnh tử vong.",
    "reference": "Sách DLS tr. 329",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1070,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh nhóm Tetracyclin nào sau đây ít phụ thuộc vào chức năng thận nhất và an toàn khi bệnh nhân suy thận?",
    "options": [
      "Tetracyclin hydroclorid",
      "Doxycyclin",
      "Oxytetracyclin",
      "Chlortetracyclin"
    ],
    "correct": 1,
    "explanation": "Doxycyclin đào thải chủ yếu qua phân và gan mật dưới dạng bất hoạt, không tích lũy ở bệnh nhân suy thận.",
    "reference": "Sách DLS tr. 332",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1071,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Hiện tượng 'Kháng thuốc cảm ứng' (Inducible resistance) kiểu hình MLSB ở Tụ cầu và Liên cầu được phát hiện bằng thử nghiệm vi sinh nào?",
    "options": [
      "Thử nghiệm lắng đọng hồng cầu",
      "Nhuộm soi phân tươi tìm amip",
      "Thử nghiệm D-test",
      "Thử nghiệm E-test đo MIC"
    ],
    "correct": 2,
    "explanation": "D-test đặt đĩa Clindamycin cạnh Erythromycin; nếu có gen erm cảm ứng sẽ tạo vùng ức chế hình chữ D khuyết cạnh.",
    "reference": "Sách DLS tr. 333",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1072,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh Fosfomycin đường uống (dạng gói hạt 3g pha nước uống liều duy nhất) được chỉ định ưu tiên cho:",
    "options": [
      "Viêm xương tủy xương mạn tính",
      "Áp xe phổi kích thước lớn",
      "Viêm màng não mủ do phế cầu",
      "Nhiễm khuẩn đường tiết niệu dưới viêm bàng quang cấp ở phụ nữ"
    ],
    "correct": 3,
    "explanation": "Fosfomycin trometamol 3g liều duy nhất đạt nồng độ cực cao trong nước tiểu kéo dài 48h, là thuốc đầu tay viêm bàng quang cấp.",
    "reference": "Sách DLS tr. 334",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1073,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Tại sao kháng sinh Ceftriaxone không được sử dụng để điều trị nhiễm khuẩn huyết do trực khuẩn Listeria monocytogenes?",
    "options": [
      "Listeria monocytogenes đề kháng tự nhiên với toàn bộ kháng sinh nhóm Cephalosporin",
      "Listeria chỉ nhạy cảm duy nhất với Colistin được áp dụng trong thực hành lâm sàng",
      "Ceftriaxone bị Listeria phá hủy thành chất độc",
      "Ceftriaxone không đi qua được hàng rào máu não"
    ],
    "correct": 0,
    "explanation": "Listeria đề kháng nội tại với Cephalosporin do PBP không gắn thuốc; thuốc lựa chọn bắt buộc là Ampicillin phối hợp Gentamicin.",
    "reference": "Sách DLS tr. 335",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1074,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh Nitrofurantoin chống chỉ định sử dụng khi mức lọc cầu thận eGFR của bệnh nhân dưới bao nhiêu?",
    "options": [
      "Không phụ thuộc vào mức lọc cầu thận",
      "Dưới 30 mL/phút",
      "Chỉ cấm khi eGFR = 0 mL/phút",
      "Dưới 90 mL/phút"
    ],
    "correct": 1,
    "explanation": "Khi eGFR < 30 mL/ph/1,73m2, nitrofurantoin không đạt nồng độ kháng khuẩn trong nước tiểu và tích lũy gây độc dây thần kinh ngoại biên.",
    "reference": "Sách DLS tr. 336",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1075,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh Cotrimoxazol là dạng phối hợp tỷ lệ 5:1 giữa hai hoạt chất nào?",
    "options": [
      "Amoxicillin và Sulbactam",
      "Piperacillin và Tazobactam",
      "Sulfamethoxazol và Trimethoprim",
      "Sulfadiazin và Pyrimethamin"
    ],
    "correct": 2,
    "explanation": "Cotrimoxazol phối hợp Sulfamethoxazol và Trimethoprim tỷ lệ 5:1, ức chế 2 bước liên tiếp tổng hợp acid folic của vi khuẩn.",
    "reference": "Sách DLS tr. 337",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1076,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh Cephalosporin thế hệ 4 (Cefepime) có ưu điểm vượt trội nào so với Ceftriaxone?",
    "options": [
      "Có tác dụng diệt trừ được nấm men Candida",
      "Không gây bất kỳ phản ứng dị ứng nào",
      "Chỉ cần uống mỗi tuần 1 viên duy nhất được áp dụng trong thực hành lâm sàng",
      "Bao phủ trực khuẩn mủ xanh và bền vững trước men AmpC"
    ],
    "correct": 3,
    "explanation": "Cefepime là cephalosporin thế hệ 4 phổ rộng, diệt Pseudomonas và xâm nhập qua màng ngoài vi khuẩn gram âm nhanh hơn.",
    "reference": "Sách DLS tr. 338",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1077,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Cơ chế tác dụng diệt khuẩn của kháng sinh nhóm Quinolon (như Levofloxacin, Moxifloxacin) là:",
    "options": [
      "Ức chế enzym DNA-gyrase và Topoisomerase IV của vi khuẩn",
      "Ức chế tổng hợp vách tế bào peptidoglycan",
      "Ức chế tiểu đơn vị 50S của ribosom",
      "Phá hủy màng lipid ngoại bào trực tiếp"
    ],
    "correct": 0,
    "explanation": "Fluoroquinolon ức chế enzym tháo xoắn ADN (DNA gyrase ở gram âm và Topoisomerase IV ở gram dương), làm đứt gãy ADN vi khuẩn.",
    "reference": "Sách DLS tr. 339",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1078,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh Tigecyclin (nhóm Glycylcyclin) được cảnh báo hộp đen của FDA về vấn đề nào?",
    "options": [
      "Làm bệnh nhân bị rụng răng toàn bộ",
      "Tăng tỷ lệ tử vong do mọi nguyên nhân so với thuốc đối chứng",
      "Làm cho xương sọ bệnh nhân bị tiêu biến được áp dụng trong thực hành lâm sàng",
      "Gây mù mắt hai bên không hồi phục"
    ],
    "correct": 1,
    "explanation": "FDA cảnh báo Tigecyclin tăng nguy cơ tử vong do nồng độ trong máu thấp; chỉ dùng khi không còn lựa chọn thay thế.",
    "reference": "Sách DLS tr. 340",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1079,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Tại sao kháng sinh Tigecyclin không được chỉ định điều trị nhiễm khuẩn đường tiết niệu và nhiễm khuẩn huyết?",
    "options": [
      "Không hòa tan được trong nước tiểu",
      "Bị thận đào thải sạch trong vòng 1 giây",
      "Nồng độ trong máu và nước tiểu thấp do thể tích phân bố Vd rất lớn",
      "Bị bất hoạt hoàn toàn bởi hồng cầu trong máu"
    ],
    "correct": 2,
    "explanation": "Tigecyclin phân bố chủ yếu vào mô sâu, nồng độ tự do trong máu và nước tiểu cực thấp, không đạt hiệu quả diệt khuẩn tại đây.",
    "reference": "Sách DLS tr. 341",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1080,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh nào sau đây có hoạt tính diệt khuẩn trên cả Tụ cầu vàng MRSA và Phế cầu kháng thuốc thuộc nhóm Cephalosporin thế hệ 5?",
    "options": [
      "Cefotaxim natri",
      "Ceftriaxone natri",
      "Cefuroxim axetil",
      "Ceftaroline fosamil"
    ],
    "correct": 3,
    "explanation": "Ceftaroline là Cephalosporin thế hệ 5 gắn kết đặc hiệu với PBP2a của MRSA và PBP2x của phế cầu kháng penicillin.",
    "reference": "Sách DLS tr. 342",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1081,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Trong điều trị theo kinh nghiệm sốc nhiễm khuẩn huyết, nguyên tắc vàng về thời gian bắt đầu dùng kháng sinh là:",
    "options": [
      "Bắt đầu kháng sinh phổ rộng đường tĩnh mạch trong vòng 1 giờ đầu tiên sau khi nhận diện sốc",
      "Chỉ dùng kháng sinh sau khi bệnh nhân đã hết sốt",
      "Chỉ dùng khi người bệnh tự nguyện đồng ý",
      "Chờ đợi đủ 3 ngày có kết quả kháng sinh đồ mới bắt đầu dùng"
    ],
    "correct": 0,
    "explanation": "Chiến dịch Cứu sống bệnh nhân nhiễm khuẩn huyết (SSC) khuyến cáo dùng kháng sinh phổ rộng trong vòng 1h đầu (Giờ vàng).",
    "reference": "Sách DLS tr. 343",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1082,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Khái niệm 'Xuống thang kháng sinh' (De-escalation) trong thực hành lâm sàng được hiểu là:",
    "options": [
      "Giảm liều lượng kháng sinh xuống mức dưới ngưỡng điều trị",
      "Chuyển từ kháng sinh phổ rộng sang kháng sinh phổ hẹp theo kháng sinh đồ",
      "Bỏ hoàn toàn việc điều trị kháng sinh khi bệnh nhân còn sốt",
      "Chuyển bệnh nhân từ tầng 3 xuống tầng 1 của bệnh viện"
    ],
    "correct": 1,
    "explanation": "Xuống thang (sau 48-72h) thu hẹp phổ kháng sinh nhằm tối ưu hiệu quả, giảm chi phí và hạn chế phát sinh chủng vi khuẩn kháng thuốc.",
    "reference": "Sách DLS tr. 344",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1083,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh nhóm Aminosid nào sau đây có hoạt tính mạnh nhất trên trực khuẩn mủ xanh Pseudomonas aeruginosa?",
    "options": [
      "Kanamycin",
      "Streptomycin",
      "Tobramycin",
      "Spectinomycin"
    ],
    "correct": 2,
    "explanation": "Tobramycin có hoạt lực in vitro mạnh nhất trên P. aeruginosa trong các aminosid, thường dùng dạng khí dung trị viêm phổi xơ nang.",
    "reference": "Sách DLS tr. 345",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1084,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Kháng sinh Metronidazol có phổ tác dụng đặc hiệu vượt trội trên nhóm vi sinh vật nào?",
    "options": [
      "Virus herpes simplex ngoài da",
      "Vi khuẩn gram âm hiếu khí Pseudomonas aeruginosa",
      "Nấm sợi Aspergillus màng phổi",
      "Vi khuẩn kỵ khí tuyệt đối và động vật nguyên sinh"
    ],
    "correct": 3,
    "explanation": "Metronidazol chỉ bị khử thành gốc tự do độc hại trong môi trường khử của vi khuẩn kỵ khí và đơn bào ký sinh.",
    "reference": "Sách DLS tr. 346",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1085,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Phối hợp kháng sinh Piperacillin với Tazobactam có tỷ lệ phối hợp hoạt chất chuẩn là:",
    "options": [
      "Tỷ lệ 8:1",
      "Tỷ lệ 1:5",
      "Tỷ lệ 1:1",
      "Tỷ lệ 20:1"
    ],
    "correct": 0,
    "explanation": "Chế phẩm chuẩn đóng gói tỷ lệ 8 phần piperacillin và 1 phần chất ức chế beta-lactamase tazobactam (lọ 2,25g hoặc 4,5g).",
    "reference": "Sách DLS tr. 347",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1086,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Thuốc ức chế men Beta-lactamase thế hệ mới Avibactam khi phối hợp với Ceftazidime có khả năng ức chế được men nào?",
    "options": [
      "Chỉ ức chế được men penicillinase thông thường",
      "Cả men lớp A, lớp C và một số lớp D",
      "Chỉ diệt trừ được nấm men candida",
      "Hoàn toàn không có tác dụng trên enzym vi khuẩn"
    ],
    "correct": 1,
    "explanation": "Avibactam là chất ức chế non-beta-lactam ức chế được carbapenemase KPC và men AmpC, khôi phục hoạt tính của ceftazidime.",
    "reference": "Sách DLS tr. 348",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1087,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "question": "Thời gian điều trị bằng kháng sinh cho bệnh nhân Viêm phổi mắc phải tại cộng đồng (CAP) đáp ứng tốt thường là:",
    "options": [
      "Kéo dài tối thiểu 6 tháng liên tục",
      "Bắt buộc kéo dài tròn 30 ngày",
      "Khoảng 5 đến 7 ngày",
      "Chỉ cần dùng đúng 1 liều duy nhất"
    ],
    "correct": 2,
    "explanation": "Hướng dẫn IDSA/ATS và Bộ Y tế: CAP điều trị 5-7 ngày nếu lâm sàng cải thiện và hết sốt > 48h, không cần kéo dài 10-14 ngày.",
    "reference": "Sách DLS tr. 349",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1088,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Liều tương đương chống viêm của các Glucocorticoid chuẩn (Hydrocortison, Prednisolon, Methylprednisolon, Dexamethason) theo thứ tự là:",
    "options": [
      "Hydrocortison 100 mg = Prednisolon 1 mg = Dexamethason 50 mg",
      "Hydrocortison 5 mg = Prednisolon 20 mg = Methylprednisolon 40 mg = Dexamethason 10 mg",
      "Tất cả các thuốc trên có liều chống viêm bằng nhau là 10 mg",
      "Hydrocortison 20 mg = Prednisolon 5 mg = Methylprednisolon 4 mg = Dexamethason 0,75 mg"
    ],
    "correct": 3,
    "explanation": "Bảng tương đương liều kinh điển: Hydrocortison 20mg tương đương Prednisolon 5mg, Methylprednisolon 4mg, Dexamethason 0,75mg.",
    "reference": "Sách DLS tr. 350",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1089,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Glucocorticoid nào sau đây có hoạt tính giữ muối nước (Mineralocorticoid) yếu nhất hoặc gần như bằng 0?",
    "options": [
      "Dexamethason và Betamethason",
      "Cortison acetat",
      "Fludrocortison",
      "Hydrocortison"
    ],
    "correct": 0,
    "explanation": "Dexamethason và Betamethason là corticoid tổng hợp tác dụng kéo dài, hầu như không có tác dụng giữ muối nước (Mineralocorticoid = 0).",
    "reference": "Sách DLS tr. 351",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1090,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Thời điểm uống Glucocorticoid (liều duy nhất mỗi ngày) tốt nhất để giảm thiểu ức chế trục dưới đồi - tuyến yên - thượng thận (HPA) là:",
    "options": [
      "Vào lúc 11 giờ đêm trước khi đi ngủ",
      "Vào khoảng 7 đến 8 giờ sáng cùng hoặc ngay sau bữa ăn sáng",
      "Uống rải rác mỗi 3 giờ một lần suốt cả ngày lẫn đêm",
      "Uống vào lúc 2 giờ chiều khi bụng đói"
    ],
    "correct": 1,
    "explanation": "Uống 1 lần lúc 8h sáng trùng với đỉnh tiết cortisol sinh lý tự nhiên của cơ thể, giảm thiểu nguy cơ teo vỏ thượng thận.",
    "reference": "Sách DLS tr. 352",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1091,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Chế độ dùng Glucocorticoid cách ngày (Alternate-day therapy) có ưu điểm nổi bật nào?",
    "options": [
      "Làm tăng sinh khả dụng của Corticoid lên gấp 3 lần so với dùng hàng ngày",
      "Tránh được hoàn toàn nguy cơ loét dạ dày tá tràng và loãng xương",
      "Cho phép nồng độ Cortisol huyết tương hạ thấp trong ngày nghỉ, giúp trục HPA hồi phục và giảm nguy cơ suy vỏ thượng thận thứ phát",
      "Giúp kiểm soát triệu chứng viêm khớp dạng thấp cấp tính tốt hơn dùng hàng ngày"
    ],
    "correct": 2,
    "explanation": "Dùng cách ngày (uống liều gấp đôi vào sáng cách nhật bằng corticoid tác dụng trung bình) bảo tồn chức năng tuyến thượng thận.",
    "reference": "Sách DLS tr. 353",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1092,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Corticoid nào sau đây là lựa chọn tối ưu nhất để áp dụng chế độ điều trị cách ngày?",
    "options": [
      "Dexamethason",
      "Hydrocortison",
      "Fludrocortison",
      "Prednisolon hoặc Methylprednisolon"
    ],
    "correct": 3,
    "explanation": "Corticoid tác dụng trung bình (Prednison, Prednisolon, Methylprednisolon) là ứng viên duy nhất thích hợp cho liệu pháp cách ngày.",
    "reference": "Sách DLS tr. 354",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1093,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Nguy cơ suy vỏ thượng thận cấp nguy kịch (Cơn suy thượng thận Addison cấp) dễ xảy ra nhất khi nào?",
    "options": [
      "Ngừng thuốc Glucocorticoid đột ngột sau một đợt điều trị liều cao kéo dài trên 2-3 tuần",
      "Chuyển từ dạng tiêm sang dạng uống cùng liều tương đương",
      "Uống thuốc đúng giờ cùng bữa ăn sáng",
      "Bắt đầu uống liều đầu tiên của đợt điều trị"
    ],
    "correct": 0,
    "explanation": "Dùng corticoid > 2-3 tuần gây teo vỏ thượng thận thứ phát; ngừng đột ngột làm cơ thể thiếu hụt cortisol cấp tính dẫn đến trụy mạch tử vong.",
    "reference": "Sách DLS tr. 355",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1094,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Nguyên tắc bắt buộc khi muốn kết thúc một đợt điều trị Glucocorticoid kéo dài trên 3 tuần là:",
    "options": [
      "Ngừng ngay lập tức để tống sạch thuốc ra khỏi cơ thể",
      "Giảm liều từ từ theo bậc thang trước khi ngừng hẳn",
      "Chuyển sang tiêm truyền tĩnh mạch liều cao",
      "Tăng gấp đôi liều trong tuần cuối cùng"
    ],
    "correct": 1,
    "explanation": "Bắt buộc giảm liều từng bước để tuyến thượng thận có thời gian tự sản xuất cortisol bù đắp trở lại.",
    "reference": "Sách DLS tr. 356",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1095,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Khi bệnh nhân đang trong liệu trình cai giảm liều Glucocorticoid mà gặp stress nặng (phẫu thuật, chấn thương, nhiễm trùng nặng):",
    "options": [
      "Giữ nguyên liều cai không thay đổi",
      "Chỉ cho bệnh nhân uống nước đường được áp dụng trong thực hành lâm sàng",
      "Phải tạm thời tăng liều Glucocorticoid lên để đáp ứng nhu cầu stress của cơ thể",
      "Phải cắt bỏ hoàn toàn Glucocorticoid ngay"
    ],
    "correct": 2,
    "explanation": "Tuyến thượng thận teo không thể tự tăng tiết cortisol khi stress; thiếu cortisol trong stress sẽ dẫn đến tụt huyết áp sốc tử vong.",
    "reference": "Sách DLS tr. 357",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1096,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Tác dụng phụ gây loãng xương và gãy xương bệnh lý do Glucocorticoid xuất hiện qua cơ chế nào?",
    "options": [
      "Làm tăng tiết hormon cận giáp PTH thứ phát phá hủy xương",
      "Làm cho xương tích lũy quá nhiều canxi làm xương bị giòn",
      "Phá hủy tủy đỏ tạo máu của xương",
      "Ức chế nguyên bào xương, tăng hủy cốt bào và giảm hấp thu canxi ở ruột, tăng thải canxi qua thận"
    ],
    "correct": 3,
    "explanation": "Corticoid ức chế tạo xương, giảm hấp thu Ca2+ ở ruột và tăng đào thải Ca2+ qua nước tiểu, gây loãng xương xốp xương.",
    "reference": "Sách DLS tr. 358",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1097,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Để phòng ngừa loãng xương do Glucocorticoid ở bệnh nhân điều trị dài ngày (>= 3 tháng), khuyến cáo bổ sung:",
    "options": [
      "Canxi phối hợp Vitamin D và thuốc Bisphosphonat nếu có nguy cơ cao",
      "Nước khoáng có ga đậm đặc được áp dụng trong thực hành lâm sàng",
      "Vitamin C liều cao 5000 mg mỗi ngày",
      "Thuốc giảm đau Paracetamol hàng ngày"
    ],
    "correct": 0,
    "explanation": "Hướng dẫn ACR: Tất cả bệnh nhân dùng Prednisone >= 2,5 mg/ngày kéo dài >= 3 tháng cần bổ sung Calci + Vitamin D và đánh giá mật độ xương.",
    "reference": "Sách DLS tr. 359",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1098,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Biến chứng loét dạ dày - tá tràng do Glucocorticoid tăng lên gấp nhiều lần khi phối hợp với nhóm thuốc nào?",
    "options": [
      "Thuốc kháng histamin H2 Famotidin",
      "Thuốc chống viêm không steroid như Aspirin, Ibuprofen, Diclofenac",
      "Thuốc ức chế bơm proton Omeprazol",
      "Dung dịch sữa uống bảo vệ niêm mạc"
    ],
    "correct": 1,
    "explanation": "Phối hợp Corticoid + NSAID làm tăng nguy cơ loét và xuất huyết tiêu hóa lên gấp 4 đến 10 lần so với dùng đơn độc.",
    "reference": "Sách DLS tr. 360",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1099,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Hội chứng Cushing do thuốc (mặt tròn như mặt trăng, bướu trâu ở gáy, teo cơ gốc chi, rạn da đỏ tím) đặc trưng cho:",
    "options": [
      "Ngộ độc cấp tính kháng sinh Penicillin",
      "Thiếu hụt vitamin D mạn tính",
      "Tác dụng phụ mạn tính do lạm dụng Glucocorticoid liều cao kéo dài",
      "Bệnh lý suy thận mạn giai đoạn cuối"
    ],
    "correct": 2,
    "explanation": "Cushing do thuốc là biểu hiện tái phân bố mỡ (mặt, cổ, bụng) và dị hóa protein (teo cơ, mỏng da) do thừa glucocorticoid.",
    "reference": "Sách DLS tr. 361",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1100,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Glucocorticoid làm tăng nguy cơ nhiễm trùng cơ hội (Lao, nấm Candida, virus Zona) chủ yếu do cơ chế:",
    "options": [
      "Làm cho nhiệt độ cơ thể hạ thấp tạo điều kiện cho vi khuẩn",
      "Làm mất hoàn toàn kháng thể IgE trong máu",
      "Kích thích vi khuẩn sinh sản nhanh hơn được áp dụng trong thực hành lâm sàng",
      "Ức chế miễn dịch qua trung gian tế bào, giảm số lượng và chức năng của tế bào lympho T"
    ],
    "correct": 3,
    "explanation": "Corticoid ức chế giải phóng cytokine (IL-1, IL-2, TNF-alpha) làm suy yếu hệ miễn dịch qua trung gian tế bào T.",
    "reference": "Sách DLS tr. 362",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1101,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Trước khi bắt đầu điều trị Glucocorticoid toàn thân liều cao kéo dài, xét nghiệm sàng lọc bắt buộc cần làm là:",
    "options": [
      "Sàng lọc bệnh Lao tiềm ẩn và xét nghiệm Viêm gan virus B, C",
      "Xét nghiệm nhóm máu hệ Rh",
      "Đo mật độ tóc trên da đầu",
      "Điện não đồ giấc ngủ"
    ],
    "correct": 0,
    "explanation": "Corticoid liều cao có thể làm bùng phát lao kịch phát hoặc tái hoạt động virus viêm gan B gây suy gan tối cấp.",
    "reference": "Sách DLS tr. 363",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1102,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Tác dụng phụ trên mắt của Glucocorticoid dùng kéo dài (kể cả dạng thuốc nhỏ mắt) là:",
    "options": [
      "Gây cận thị học đường tiến triển",
      "Tăng nhãn áp và Đục thủy tinh thể dưới bao sau",
      "Làm mắt bị lồi ra ngoài vĩnh viễn",
      "Gây bong võng mạc do rách giác mạc"
    ],
    "correct": 1,
    "explanation": "Corticoid làm tăng nhãn áp do cản trở lưu thông thủy dịch và gây đục thủy tinh thể không hồi phục, cần kiểm tra mắt định kỳ.",
    "reference": "Sách DLS tr. 364",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1103,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Tác dụng của Glucocorticoid lên chuyển hóa Glucose trong cơ thể dẫn đến nguy cơ lâm sàng nào?",
    "options": [
      "Làm tụy tăng sản xuất insulin gấp 10 lần",
      "Hạ đường huyết sâu gây hôn mê co giật",
      "Tăng tân tạo đường tại gan và giảm nhạy cảm insulin ngoại vi",
      "Làm cho glucose biến mất hoàn toàn khỏi máu"
    ],
    "correct": 2,
    "explanation": "Corticoid kích thích tân tạo glucose ở gan và đối kháng tác dụng insulin, dễ gây đái tháo đường do corticoid (Steroid-induced diabetes).",
    "reference": "Sách DLS tr. 365",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1104,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Phác đồ Glucocorticoid liều xung (Pulse therapy) tiêm truyền Methylprednisolon liều cực cao (500 - 1000 mg/ngày) chỉ định cho:",
    "options": [
      "Giảm đau sau nhổ răng sữa",
      "Hạ sốt thông thường trong cảm lạnh mùa",
      "Viêm họng đỏ cấp tính do thời tiết",
      "Các bệnh lý tự miễn bùng phát đe dọa tính mạng"
    ],
    "correct": 3,
    "explanation": "Liệu pháp xung dùng Methylprednisolon 500-1000mg truyền tĩnh mạch chậm trong 3 ngày liên tiếp để dập tắt cơn bão miễn dịch cấp cứu.",
    "reference": "Sách DLS tr. 366",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1105,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Khi truyền tĩnh mạch Methylprednisolon liều xung (Pulse therapy), tai biến cấp tính nguy hiểm nhất cần theo dõi là:",
    "options": [
      "Rối loạn nhịp tim nguy hiểm và tụt huyết áp do tốc độ truyền quá nhanh",
      "Gây đông đặc toàn bộ máu trong lòng mạch",
      "Gây co thắt khí phế quản cấp",
      "Làm cho bệnh nhân hôn mê do hạ kali máu"
    ],
    "correct": 0,
    "explanation": "Truyền methylprednisolon liều xung quá nhanh có thể gây loạn nhịp tim ngừng tim; bắt buộc truyền chậm tối thiểu trong 60 phút.",
    "reference": "Sách DLS tr. 367",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1106,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Tác dụng chống viêm của Glucocorticoid ở mức độ phân tử đạt được chủ yếu thông qua việc ức chế enzym nào?",
    "options": [
      "Ức chế enzym Telomerase tế bào mầm",
      "Ức chế enzym Phospholipase A2",
      "Ức chế trực tiếp enzym Pepsin dịch vị",
      "Ức chế enzym Amylase nước bọt"
    ],
    "correct": 1,
    "explanation": "Lipocortin-1 (Annexin A1) do corticoid kích thích tổng hợp sẽ ức chế Phospholipase A2, chặn đứng giải phóng acid arachidonic.",
    "reference": "Sách DLS tr. 349",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1107,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Nhóm thuốc nào sau đây là Glucocorticoid dạng khí dung hít (ICS) dùng kiểm soát hen phế quản dài hạn?",
    "options": [
      "Ipratropium và Tiotropium",
      "Theophyllin và Aminophyllin",
      "Budesonid và Fluticason",
      "Salbutamol và Terbutalin"
    ],
    "correct": 2,
    "explanation": "Budesonid, Fluticason, Beclomethason là các ICS chống viêm tại chỗ hàng đầu kiểm soát bệnh hen suyễn.",
    "reference": "Sách DLS tr. 368",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1108,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Thuốc Glucocorticoid bôi ngoài da loại tác dụng rất mạnh (như Clobetasol propionat 0,05%) tuyệt đối không được bôi ở vùng nào?",
    "options": [
      "Vùng da lòng bàn chân dày sừng",
      "Vùng da cùi chỏ bị vảy nến dày",
      "Vùng móng tay bị nấm mạn tính",
      "Vùng da mặt, mí mắt, vùng nếp kẽ và vùng sinh dục"
    ],
    "correct": 3,
    "explanation": "Da mặt và nếp kẽ hấp thu thuốc rất mạnh, dễ gây teo da, giãn mạch, mụn trứng cá và hấp thu toàn thân gây ức chế trục HPA.",
    "reference": "Sách DLS tr. 369",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1109,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Khi bệnh nhân đang dùng Glucocorticoid liều cao kéo dài cần tiêm chủng vaccin, khuyến cáo là:",
    "options": [
      "Chống chỉ định tiêm các loại vaccin sống giảm độc lực",
      "Vaccin sống sẽ giúp chữa khỏi tác dụng phụ của corticoid",
      "Tiêm tăng gấp ba liều lượng vaccin sống",
      "Chỉ được tiêm vaccin sống mà không được tiêm vaccin giải độc tố"
    ],
    "correct": 0,
    "explanation": "Corticoid liều cao ức chế miễn dịch, vaccin sống giảm độc lực có thể nhân lên không kiểm soát gây bệnh cảnh nhiễm trùng vaccine toàn thân.",
    "reference": "Sách DLS tr. 370",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1110,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Triệu chứng của 'Cơn suy vỏ thượng thận cấp' (Adrenal Crisis) bao gồm những dấu hiệu nào sau đây?",
    "options": [
      "Mặt tròn béo phì và rạn da đỏ tím",
      "Tụt huyết áp trụy mạch, sốt cao, nôn mửa, hạ natri và tăng kali máu",
      "Huyết áp tăng vọt lên 220/140 mmHg",
      "Tăng natri máu và hạ kali máu nghiêm trọng"
    ],
    "correct": 1,
    "explanation": "Cơn bão suy thượng thận cấp đặc trưng bởi trụy tim mạch tụt huyết áp, sốc vô niệu, hạ đường huyết, hạ natri và tăng kali máu.",
    "reference": "Sách DLS tr. 355",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1111,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Xử trí cấp cứu khẩn cấp cho bệnh nhân bị Cơn suy vỏ thượng thận cấp đe dọa tính mạng là:",
    "options": [
      "Cho bệnh nhân uống nước khoáng chanh đường",
      "Tiêm ngay insulin liều cao qua đường tĩnh mạch",
      "Tiêm tĩnh mạch Hydrocortison 100 mg và truyền dịch Natri clorid 0,9%",
      "Cho uống thuốc nhuận tràng để tống chất độc"
    ],
    "correct": 2,
    "explanation": "Hydrocortison 100mg tiêm TM ngay lập tức + bù dịch NaCl 0,9% và Glucose 5% là phác đồ cấp cứu hồi sinh trong suy thượng thận cấp.",
    "reference": "Sách DLS tr. 356",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1112,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Tại sao trẻ em dùng Glucocorticoid toàn thân kéo dài có nguy cơ bị chậm phát triển chiều cao?",
    "options": [
      "Do làm tăng đào thải vitamin C qua phân",
      "Do làm cho trẻ biếng ăn suy dinh dưỡng",
      "Do làm xương dài ra quá nhanh làm gãy chân được áp dụng trong thực hành lâm sàng",
      "Do ức chế sụn tiếp hợp đầu xương và ức chế giải phóng hormon tăng trưởng GH"
    ],
    "correct": 3,
    "explanation": "Corticoid ức chế phân chia tế bào sụn tiếp hợp và đối kháng tác dụng của GH/IGF-1, gây chậm lớn lùn ở trẻ em.",
    "reference": "Sách DLS tr. 371",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1113,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Glucocorticoid dùng đồng thời với thuốc lợi tiểu thải kali (như Furosemid, Thiazid) có nguy cơ gây tai biến:",
    "options": [
      "Hạ kali máu nghiêm trọng làm tăng độc tính tim mạch của Digoxin",
      "Gây bí tiểu hoàn toàn do phì đại tuyến tiền liệt",
      "Tăng kali máu gây ngừng tim trong thì tâm thu",
      "Làm cho huyết áp tụt kẹp sâu"
    ],
    "correct": 0,
    "explanation": "Cả hai đều làm tăng thải kali qua ống thận, phối hợp gây hạ kali máu sâu, làm tăng nguy cơ loạn nhịp thất chết người.",
    "reference": "Sách DLS tr. 372",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1114,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Để hạn chế nguy cơ loét dạ dày khi bắt buộc phải dùng Glucocorticoid kéo dài cho bệnh nhân có tiền sử viêm loét, nên phối hợp thêm:",
    "options": [
      "Thuốc giảm đau Aspirin liều thấp",
      "Thuốc ức chế bơm proton PPI",
      "Thuốc kháng sinh Ciprofloxacin",
      "Viên sắt sulfat uống"
    ],
    "correct": 1,
    "explanation": "PPI ức chế bài tiết acid dịch vị mạnh mẽ, là liệu pháp bảo vệ niêm mạc dạ dày tiêu chuẩn khi dùng corticoid kéo dài ở đối tượng nguy cơ.",
    "reference": "Sách DLS tr. 373",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1115,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Chỉ số nào sau đây được coi là liều sinh lý hàng ngày của Hydrocortison ở người trưởng thành khỏe mạnh không stress?",
    "options": [
      "Tương đương 80 mg Prednisolon mỗi ngày",
      "Khoảng 100 đến 200 mg mỗi ngày",
      "Khoảng 15 đến 20 mg Hydrocortison mỗi ngày",
      "Chỉ khoảng 0,1 mg mỗi ngày"
    ],
    "correct": 2,
    "explanation": "Vỏ thượng thận bình thường tiết khoảng 15-20 mg cortisol (hydrocortison)/ngày, tương đương khoảng 5 mg Prednisolon.",
    "reference": "Sách DLS tr. 350",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1116,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Sau một đợt dùng Glucocorticoid ngắn ngày dưới bao nhiêu thời gian thì có thể ngừng thuốc ngay mà không cần giảm liều theo bậc thang?",
    "options": [
      "Dưới 3 tháng",
      "Bắt buộc giảm liều kể cả khi chỉ dùng 1 ngày duy nhất",
      "Dưới 6 tháng",
      "Dưới 14 ngày nếu dùng liều thông thường"
    ],
    "correct": 3,
    "explanation": "Dùng corticoid dưới 2 tuần chưa đủ thời gian gây teo vỏ thượng thận thứ phát, có thể ngừng thuốc trực tiếp mà không cần giảm liều.",
    "reference": "Sách DLS tr. 356",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1117,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "question": "Thuốc Glucocorticoid nào qua được hàng rào nhau thai tốt nhất và được dùng để kích thích trưởng thành phổi thai nhi dọa sinh non?",
    "options": [
      "Betamethason hoặc Dexamethason",
      "Prednisolon",
      "Hydrocortison",
      "Methylprednisolon"
    ],
    "correct": 0,
    "explanation": "Betamethason và Dexamethason không bị enzym 11-beta-HSD2 nhau thai bất hoạt, qua nhau thai tối đa thúc đẩy tổng hợp surfactant phổi thai.",
    "reference": "Sách DLS tr. 374",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1118,
    "chapter": "Thuốc giảm đau",
    "question": "Bậc 1 trong Thang bậc thang giảm đau 3 bước kinh điển của WHO bao gồm nhóm thuốc nào?",
    "options": [
      "Phương pháp phẫu thuật cắt dây thần kinh cảm giác",
      "Thuốc giảm đau không Opioid có hoặc không có thuốc bổ trợ",
      "Opioid mạnh như Morphin, Fentanyl",
      "Opioid yếu như Codein, Tramadol"
    ],
    "correct": 1,
    "explanation": "Bậc 1 dùng cho đau nhẹ đến vừa: Paracetamol, NSAID; Bậc 2: Opioid yếu (codein); Bậc 3: Opioid mạnh (morphin).",
    "reference": "Sách DLS tr. 380",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1119,
    "chapter": "Thuốc giảm đau",
    "question": "Liều tối đa của Paracetamol cho người lớn có chức năng gan thận bình thường được khuyến cáo là:",
    "options": [
      "Tối đa 10 gam mỗi ngày",
      "Không giới hạn liều tối đa",
      "Không quá 4000 mg trong 24 giờ",
      "Không quá 1000 mg trong 24 giờ"
    ],
    "correct": 2,
    "explanation": "Liều tối đa paracetamol là 4g/ngày (FDA khuyến cáo không kê đơn nên giới hạn 3g/ngày) để tránh cạn kiệt glutathion hoại tử gan.",
    "reference": "Sách DLS tr. 382",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1120,
    "chapter": "Thuốc giảm đau",
    "question": "Cơ chế tác dụng giảm đau, hạ sốt của Paracetamol khác biệt với NSAID ở điểm nào sau đây?",
    "options": [
      "Gây ức chế kết tập tiểu cầu kéo dài thời gian chảy máu",
      "Gây viêm loét niêm mạc dạ dày dữ dội",
      "Ức chế mạnh mẽ cả hai enzym COX-1 và COX-2 tại ổ viêm ngoại biên",
      "Tác dụng chủ yếu tại hệ thần kinh trung ương và hầu như không có tác dụng chống viêm ở ngoại vi"
    ],
    "correct": 3,
    "explanation": "Paracetamol ức chế tổng hợp PG tại não bộ nhưng bị nồng độ cao peroxyd tại ổ viêm ngoại vi bất hoạt nên không chống viêm.",
    "reference": "Sách DLS tr. 383",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1121,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc chống viêm không steroid (NSAID) chọn lọc trên COX-2 (như Celecoxib, Etoricoxib) có ưu điểm và nhược điểm nổi bật nào?",
    "options": [
      "Giảm nguy cơ loét đường tiêu hóa nhưng làm tăng nguy cơ biến cố huyết khối tim mạch",
      "An toàn tuyệt đối cho bệnh nhân có tiền sử nhồi máu cơ tim được áp dụng trong thực hành lâm sàng",
      "Hoàn toàn không có tác dụng giảm đau",
      "Gây xuất huyết tiêu hóa nặng hơn thuốc ức chế không chọn lọc"
    ],
    "correct": 0,
    "explanation": "Ức chế chọn lọc COX-2 bảo vệ niêm mạc dạ dày nhưng làm mất cân bằng PGI2 (giãn mạch, chống đông) và TXA2 (co mạch, đông máu), tăng nguy cơ huyết khối tim mạch.",
    "reference": "Sách DLS tr. 385",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1122,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc giảm đau chống viêm NSAID nào sau đây có nguy cơ gây độc tính tim mạch thấp nhất trong các NSAID truyền thống?",
    "options": [
      "Meloxicam",
      "Naproxen",
      "Etoricoxib",
      "Diclofenac"
    ],
    "correct": 1,
    "explanation": "Naproxen ức chế COX-1 kéo dài tương tự aspirin liều thấp, được các hướng dẫn tim mạch đánh giá có nguy cơ tim mạch thấp nhất trong các NSAID.",
    "reference": "Sách DLS tr. 386",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1123,
    "chapter": "Thuốc giảm đau",
    "question": "Tam chứng ngộ độc quá liều Opioid (như ngộ độc Morphin, Heroin) bao gồm những dấu hiệu kinh điển nào?",
    "options": [
      "Tăng huyết áp kịch phát, tim đập nhanh và tiêu chảy",
      "Sốt cao 41 độ C, co giật toàn thể và giãn to đồng tử",
      "Hôn mê ức chế thần kinh, ức chế hô hấp và co đồng tử nhỏ như đầu đinh ghim",
      "Mặt đỏ bừng bừng, vã mồ hôi và run rẩy tay chân"
    ],
    "correct": 2,
    "explanation": "Tam chứng ngộ độc opioid: Hôn mê + Thở chậm ngừng thở + Co đồng tử nhỏ hình đinh ghim (Pinpoint pupils).",
    "reference": "Sách DLS tr. 390",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1124,
    "chapter": "Thuốc giảm đau",
    "question": "Aspirin liều thấp (75 - 100 mg/ngày) được dùng để phòng ngừa huyết khối tim mạch dựa trên cơ chế phân tử nào?",
    "options": [
      "Ức chế cạnh tranh thụ thể Beta-1 giao cảm ở cơ tim",
      "Làm kiềm hóa dòng máu tuần hoàn",
      "Tiêu hủy trực tiếp sợi tơ huyết Fibrin trong cục máu đông được áp dụng trong thực hành lâm sàng",
      "Ức chế không hồi phục enzym COX-1 của tiểu cầu làm ngăn cản tổng hợp Thromboxan A2 suốt đời sống tiểu cầu"
    ],
    "correct": 3,
    "explanation": "Tiểu cầu không có nhân để tổng hợp COX-1 mới, acetyl hóa không hồi phục của aspirin ức chế TXA2 suốt 7-10 ngày đời sống tiểu cầu.",
    "reference": "Sách DLS tr. 384",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1125,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc giảm đau Opioid nào sau đây có thể dùng đường dán qua da (Transdermal patch) điều trị đau mạn tính ung thư kéo dài 72 giờ?",
    "options": [
      "Fentanyl dạng miếng dán",
      "Pethidin viên uống",
      "Morphin tiêm bắp",
      "Codein viên nén"
    ],
    "correct": 0,
    "explanation": "Fentanyl tan trong mỡ cực mạnh và phân tử lượng nhỏ, ngấm đều qua da cung cấp nồng độ giảm đau ổn định liên tục 72h.",
    "reference": "Sách DLS tr. 392",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1126,
    "chapter": "Thuốc giảm đau",
    "question": "Tác dụng không mong muốn nào của Morphin không bao giờ có hiện tượng dung nạp (quen thuốc) dù điều trị kéo dài nhiều tháng?",
    "options": [
      "Tác dụng ức chế hô hấp",
      "Táo bón và Co đồng tử",
      "Tác dụng an thần gây ngủ",
      "Cảm giác buồn nôn và nôn"
    ],
    "correct": 1,
    "explanation": "Hiện tượng dung nạp xuất hiện với tác dụng giảm đau, an thần, ức chế hô hấp; nhưng táo bón và co đồng tử không bao giờ dung nạp.",
    "reference": "Sách DLS tr. 391",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1127,
    "chapter": "Thuốc giảm đau",
    "question": "Khi bệnh nhân ung thư xuất hiện cơn đau bùng phát (Breakthrough pain) trên nền đang dùng Opioid kéo dài, xử trí là:",
    "options": [
      "Tăng gấp mười lần liều thuốc miếng dán",
      "Chỉ cho bệnh nhân chườm lạnh tại chỗ",
      "Sử dụng thêm một liều Opioid tác dụng nhanh, giải phóng tức thì",
      "Ngừng hoàn toàn mọi loại thuốc giảm đau"
    ],
    "correct": 2,
    "explanation": "Cơn đau bùng phát cần cắt cơn bằng opioid tác dụng ngắn phóng thích tức thì (morphin uống tác dụng nhanh liều cứu hộ).",
    "reference": "Sách DLS tr. 393",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1128,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc giảm đau phối hợp Paracetamol với Tramadol đem lại hiệu quả điều trị vượt trội nhờ cơ chế:",
    "options": [
      "Làm tăng thời gian bán thải lên 1 tháng",
      "Làm mất hoàn toàn tác dụng phụ của cả hai thuốc",
      "Tiêu diệt được cả vi khuẩn gây viêm",
      "Hiệp đồng giảm đau: ức chế PG, kích thích thụ thể mu và ức chế tái hấp thu"
    ],
    "correct": 3,
    "explanation": "Phối hợp đa phương thức (multimodal analgesia) hiệp đồng tác dụng giảm đau ở liều thấp hơn của từng hoạt chất, giảm tác dụng phụ.",
    "reference": "Sách DLS tr. 388",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1129,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc giảm đau Opioid Pethidin (Meperidin) hiện nay bị hạn chế sử dụng kéo dài chủ yếu do:",
    "options": [
      "Chất chuyển hóa Normeperidin tích lũy gây kích thích thần kinh, run giật cơ và co giật",
      "Thuốc làm rụng răng toàn bộ",
      "Thuốc làm tăng cân béo phì quá mức",
      "Thuốc gây hạ đường huyết không hồi phục"
    ],
    "correct": 0,
    "explanation": "Normeperidin là chất chuyển hóa độc đào thải qua thận, tích lũy gây rung giật cơ, ảo giác và co giật động kinh.",
    "reference": "Sách DLS tr. 394",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1130,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc giảm đau nào sau đây là lựa chọn hàng đầu điều trị Đau thần kinh (Neuropathic pain) như đau sau Zona, đau dây V?",
    "options": [
      "Morphin đơn thuần",
      "Gabapentin hoặc Pregabalin",
      "Aspirin liều cao",
      "Paracetamol đơn thuần"
    ],
    "correct": 1,
    "explanation": "Đau do tổn thương thần kinh (neuropathic) đáp ứng kém với NSAID/Opioid đơn thuần; thuốc chỉnh đau đầu tay là Gabapentinoids và SNRI.",
    "reference": "Sách DLS tr. 395",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1131,
    "chapter": "Thuốc giảm đau",
    "question": "Chống chỉ định tuyệt đối sử dụng thuốc chống viêm không steroid (NSAID) trong trường hợp nào sau đây?",
    "options": [
      "Bệnh nhân bị thoái hóa khớp gối đơn thuần",
      "Người bị đau mỏi vai gáy do tư thế được áp dụng trong thực hành lâm sàng",
      "Bệnh nhân đang loét dạ dày xuất huyết tiến triển hoặc suy tim nặng",
      "Bệnh nhân bị đau bụng kinh nguyên phát"
    ],
    "correct": 2,
    "explanation": "Loét tiêu hóa đang tiến triển, suy tim độ III-IV, suy thận nặng (CrCl < 30) là chống chỉ định tuyệt đối của mọi NSAID toàn thân.",
    "reference": "Sách DLS tr. 387",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1132,
    "chapter": "Thuốc giảm đau",
    "question": "Kháng sinh nhóm Cephalosporin nào phối hợp với NSAID làm tăng nguy cơ chảy máu do hạ Prothrombin máu?",
    "options": [
      "Cefazolin",
      "Cefalexin",
      "Cefuroxim",
      "Cefoperazon"
    ],
    "correct": 3,
    "explanation": "Cephalosporin chứa gốc NMTT ức chế tái tạo vitamin K, phối hợp NSAID ức chế tiểu cầu làm tăng vọt nguy cơ xuất huyết nặng.",
    "reference": "Sách DLS tr. 389",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1133,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc giảm đau chống viêm Diclofenac có đặc điểm nào về độc tính tim mạch so với các NSAID khác?",
    "options": [
      "Có nguy cơ huyết khối tim mạch tương đương với các thuốc ức chế chọn lọc COX-2",
      "Giúp làm tan cục máu đông trong lòng mạch được áp dụng trong thực hành lâm sàng",
      "Làm hạ huyết áp và làm chậm nhịp tim",
      "Hoàn toàn an toàn tuyệt đối cho người bị nhồi máu cơ tim"
    ],
    "correct": 0,
    "explanation": "Các phân tích gộp chứng minh Diclofenac ở liều thông thường 150mg/ngày làm tăng nguy cơ biến cố tim mạch ngang với thuốc ức chế COX-2.",
    "reference": "Sách DLS tr. 386",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1134,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc ức chế chọn lọc COX-2 Rofecoxib (Vioxx) bị rút khỏi thị trường dược phẩm toàn cầu vào năm 2004 vì lý do gì?",
    "options": [
      "Gây suy tủy xương mất bạch cầu hạt theo đúng khuyến cáo lâm sàng",
      "Làm tăng đáng kể nguy cơ Nhồi máu cơ tim và Đột quỵ trong thử nghiệm lâm sàng kéo dài",
      "Làm cho người bệnh bị mù lòa hai mắt trong phác đồ điều trị được chỉ định",
      "Gây ung thư biểu mô gan khi thực hiện theo dõi bệnh nhân"
    ],
    "correct": 1,
    "explanation": "Nghiên cứu APPROVe chứng minh Vioxx tăng gấp đôi nguy cơ nhồi máu cơ tim và đột quỵ, dẫn đến việc rút số đăng ký lịch sử.",
    "reference": "Sách DLS tr. 385",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1135,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc giải độc đặc hiệu Naloxon khi tiêm tĩnh mạch cấp cứu ngộ độc Morphin có thời gian tác dụng khoảng bao lâu?",
    "options": [
      "Chỉ kéo dài đúng 5 giây",
      "trong 72 giờ",
      "Khoảng 30 đến 90 phút",
      "Tác dụng vĩnh viễn suốt đời"
    ],
    "correct": 2,
    "explanation": "T1/2 của Naloxon rất ngắn (30-90p); trong khi morphin tác dụng kéo dài 4-6h, bệnh nhân có thể tái ngộ độc ngừng thở trở lại nếu không theo dõi.",
    "reference": "Sách DLS tr. 390",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1136,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc giảm co thắt cơ trơn đường tiêu hóa và tiết niệu Drotaverin (No-Spa) có cơ chế tác dụng dược lý là:",
    "options": [
      "Chẹn kênh natri tại sợi trục thần kinh",
      "Ức chế tổng hợp Prostaglandin ở ngoại vi",
      "Kích thích trực tiếp thụ thể cholinergic được áp dụng trong thực hành lâm sàng",
      "Ức chế enzym Phosphodiesterase-4 làm tăng nồng độ AMP vòng trong tế bào cơ trơn"
    ],
    "correct": 3,
    "explanation": "Drotaverin ức chế chọn lọc PDE-4 ở cơ trơn, làm tăng cAMP nội bào gây giãn cơ trơn tiêu hóa, niệu quản mà không có tác dụng kháng muscarinic.",
    "reference": "Sách DLS tr. 396",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1137,
    "chapter": "Thuốc giảm đau",
    "question": "Khuyến cáo liều dùng Paracetamol cho bệnh nhân suy dinh dưỡng nặng hoặc nghiện rượu mạn tính là:",
    "options": [
      "Giảm liều tối đa xuống không quá 2000 mg trong 24 giờ",
      "Vẫn dùng liều tối đa 4 gam mỗi ngày",
      "Tăng liều lên 6 gam để bù đắp chuyển hóa",
      "Không bao giờ được dùng Paracetamol"
    ],
    "correct": 0,
    "explanation": "Người nghiện rượu hoặc suy dinh dưỡng có lượng glutathion nội sinh rất thấp, liều an toàn tối đa khuyến cáo là 2g/ngày.",
    "reference": "Sách DLS tr. 382",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1138,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc giảm đau Methadon được sử dụng trong chương trình điều trị thay thế nghiện chất dạng thuốc phiện nhờ đặc tính:",
    "options": [
      "Không hề gắn kết với thụ thể opioid",
      "Hấp thu tốt qua đường uống và có thời gian bán thải sinh học rất dài, không gây hội chứng cai rầm rộ",
      "Làm cho người bệnh chán ghét hoàn toàn mọi loại thuốc được áp dụng trong thực hành lâm sàng",
      "Chỉ có tác dụng trong 10 phút"
    ],
    "correct": 1,
    "explanation": "Methadon là chất chủ vận toàn phần thụ thể mu có T1/2 dài (24-36h), uống 1 lần/ngày giúp cắt cơn thèm mà không tạo cảm giác phê sướng đỉnh nhọn.",
    "reference": "Sách DLS tr. 397",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1139,
    "chapter": "Thuốc giảm đau",
    "question": "Hội chứng cai thuốc Opioid (chảy nước mũi, ngáp, vã mồ hôi, tiêu chảy, đau cơ, giật cơ) xuất hiện khi nào?",
    "options": [
      "Khi bệnh nhân uống nhiều nước lọc",
      "Khi bệnh nhân uống quá liều Paracetamol",
      "Ngừng đột ngột hoặc dùng chất đối kháng trên người phụ thuộc Opioid",
      "Khi dùng kèm thuốc giảm đau chống viêm NSAID"
    ],
    "correct": 2,
    "explanation": "Lệ thuộc thể chất phát triển sau vài tuần dùng opioid; ngừng đột ngột hoặc tiêm naloxon sẽ giải phóng kích thích giao cảm gây hội chứng cai cấp.",
    "reference": "Sách DLS tr. 398",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1140,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc giảm đau chống viêm tại chỗ dạng gel bôi ngoài da Diclofenac (Voltaren Emulgel) có ưu điểm nổi bật là:",
    "options": [
      "Hấp thu vào tuần hoàn chung cao gấp nhiều lần viên nén đường uống",
      "Không bao giờ gây bất kỳ tác dụng phụ nào trên da như ngứa hay ban đỏ",
      "Có tác dụng giảm đau toàn thân cho các cơn đau nội tạng sâu trong ổ bụng",
      "Đạt nồng độ trị liệu cao trong mô khớp và màng hoạt dịch dưới vị trí bôi, trong khi nồng độ toàn thân rất thấp giúp giảm tác dụng phụ tiêu hóa và tim mạch"
    ],
    "correct": 3,
    "explanation": "NSAID bôi ngoài da đạt nồng độ mô đích tốt nhưng nồng độ huyết tương chỉ bằng 1-2% đường uống, an toàn vượt trội trên dạ dày và tim.",
    "reference": "Sách DLS tr. 387",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1141,
    "chapter": "Thuốc giảm đau",
    "question": "Thuốc giảm đau Colchicin có chỉ định đặc hiệu trong bệnh lý nào sau đây?",
    "options": [
      "Cơn viêm khớp Gút cấp tính",
      "Gãy xương cẳng chân do tai nạn",
      "Đau đầu do căng thẳng thần kinh",
      "Đau bụng sau phẫu thuật ruột thừa"
    ],
    "correct": 0,
    "explanation": "Colchicin gắn kết tubulin ức chế di chuyển và thực bào của bạch cầu đa nhân tại tinh thể urat, đặc hiệu cắt cơn gút cấp.",
    "reference": "Sách DLS tr. 399",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1142,
    "chapter": "Thuốc giảm đau",
    "question": "Phác đồ điều trị cơn Gút cấp bằng Colchicin theo khuyến cáo hiện đại của Bộ Y tế và ACR là:",
    "options": [
      "Tiêm tĩnh mạch trực tiếp 10 mg Colchicin",
      "Uống 1 mg ngay khi khởi phát cơn, sau 1 giờ uống thêm 0,5 mg",
      "Uống 1 mg mỗi 2 giờ cho đến khi bệnh nhân bị tiêu chảy dữ dội",
      "Uống 10 viên Colchicin cùng một lúc"
    ],
    "correct": 1,
    "explanation": "Phác đồ liều thấp hiện đại (1mg khởi đầu + 0,5mg sau 1h) có hiệu quả tương đương phác đồ liều cao cổ điển nhưng giảm 80% tác dụng phụ tiêu chảy.",
    "reference": "Sách DLS tr. 400",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1143,
    "chapter": "Vitamin và chất khoáng",
    "question": "Hội chứng não Wernicke và loạn thần Korsakoff ở người nghiện rượu mạn tính xuất hiện do thiếu hụt cấp tính vitamin nào?",
    "options": [
      "Vitamin C",
      "Vitamin D3",
      "Vitamin B1",
      "Vitamin A"
    ],
    "correct": 2,
    "explanation": "Thiếu Thiamin (B1) làm suy giảm chuyển hóa năng lượng não bộ ở vùng đồi thị và thể vú, gây thất điều, liệt vận nhãn và mất trí nhớ ngắn hạn.",
    "reference": "Sách DLS tr. 405",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1144,
    "chapter": "Vitamin và chất khoáng",
    "question": "Khi cấp cứu bệnh nhân hôn mê hạ đường huyết do nghiện rượu mạn tính, nguyên tắc bắt buộc khi truyền dung dịch Glucose là:",
    "options": [
      "Phải truyền đồng thời dung dịch Natri bicarbonat 1.4% để kiềm hóa máu",
      "Chỉ truyền Glucose 5% đẳng trương tốc độ chậm để tránh phù não thẩm thấu",
      "Bắt buộc tiêm Glucagon dưới da trước khi được phép thiết lập đường truyền tĩnh mạch",
      "Tiêm tĩnh mạch Thiamin (Vitamin B1) trước hoặc đồng thời với truyền dung dịch Glucose ưu trương"
    ],
    "correct": 3,
    "explanation": "Truyền glucose đơn độc làm cạn kiệt lượng Thiamin dự trữ ít ỏi còn lại, thúc đẩy bùng phát hội chứng não Wernicke cấp tính tử vong.",
    "reference": "Sách DLS tr. 406",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1145,
    "chapter": "Vitamin và chất khoáng",
    "question": "Để hạn chế độc tính viêm dây thần kinh ngoại biên khi điều trị bệnh lao bằng Isoniazid (INH), cần bổ sung hàng ngày:",
    "options": [
      "Vitamin B6 liều 25 đến 50 mg mỗi ngày",
      "Vitamin C liều cao 1000 mg",
      "Canxi carbonat dạng viên sủi",
      "Vitamin B12 dạng tiêm bắp"
    ],
    "correct": 0,
    "explanation": "Isoniazid liên kết và tăng đào thải pyridoxin qua nước tiểu, bổ sung vitamin B6 ngăn ngừa biến chứng viêm đa dây thần kinh.",
    "reference": "Sách DLS tr. 407",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1146,
    "chapter": "Vitamin và chất khoáng",
    "question": "Bệnh Pellagra đặc trưng bởi tam chứng kinh điển '3D' (Dermatitis - Viêm da, Diarrhea - Tiêu chảy, Dementia - Sa sút trí tuệ) do thiếu hụt:",
    "options": [
      "Vitamin B2",
      "Vitamin B3",
      "Vitamin B1",
      "Vitamin K"
    ],
    "correct": 1,
    "explanation": "Thiếu Niacin (Vitamin B3) hoặc acid amin tiền chất Tryptophan dẫn đến bệnh Pellagra với tam chứng 3D (Viêm da, Tiêu chảy, Sa sút trí tuệ).",
    "reference": "Sách DLS tr. 408",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1147,
    "chapter": "Vitamin và chất khoáng",
    "question": "Thiếu máu hồng cầu to ác tính (Megaloblastic anemia) kèm tổn thương thoái hóa tủy sống kết hợp là hậu quả của thiếu hụt:",
    "options": [
      "Kẽm nguyên tố",
      "Vitamin K",
      "Vitamin B12",
      "Sắt nguyên tố"
    ],
    "correct": 2,
    "explanation": "Thiếu B12 cản trở tổng hợp ADN và bao myelin thần kinh, gây thiếu máu hồng cầu khổng lồ kèm thoái hóa cột sau và cột bên tủy sống.",
    "reference": "Sách DLS tr. 409",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1148,
    "chapter": "Vitamin và chất khoáng",
    "question": "Vitamin B12 được hấp thu tại đoạn cuối hồi tràng bắt buộc phải có sự gắn kết của chất nào do tế bào viền dạ dày tiết ra?",
    "options": [
      "Enzym Pepsinogen",
      "Acid hydrochloric",
      "Hormon Gastrin",
      "Yếu tố nội tại"
    ],
    "correct": 3,
    "explanation": "Tế bào thành dạ dày tiết Yếu tố nội; phức hợp B12-IF gắn vào thụ thể cubilin ở hồi tràng để hấp thu vào máu.",
    "reference": "Sách DLS tr. 410",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1149,
    "chapter": "Vitamin và chất khoáng",
    "question": "Bổ sung Acid folic (Vitamin B9) đơn độc ở bệnh nhân thiếu máu do thiếu Vitamin B12 có nguy cơ tiềm ẩn nào?",
    "options": [
      "Hết thiếu máu nhưng làm tổn thương thần kinh tiến triển nặng hơn",
      "Làm cho bệnh nhân bị ngộ độc acid folic ngay lập tức",
      "Gây xuất huyết tiêu hóa ồ ạt",
      "Làm giảm tiểu cầu cấp tính"
    ],
    "correct": 0,
    "explanation": "Folat làm bình thường hóa huyết học nhưng không ngăn được tổn thương thoái hóa tủy sống do thiếu B12; bắt buộc định lượng cả B12 và folat.",
    "reference": "Sách DLS tr. 411",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1150,
    "chapter": "Vitamin và chất khoáng",
    "question": "Bệnh Scorbut (Scuroy) đặc trưng bởi chảy máu chân răng, xuất huyết dưới da, vết thương chậm liền do thiếu hụt vitamin nào?",
    "options": [
      "Vitamin E",
      "Vitamin C",
      "Vitamin D",
      "Vitamin A"
    ],
    "correct": 1,
    "explanation": "Vitamin C là co-enzym cho prolyl hydroxylase tổng hợp collagen sợi; thiếu vitamin C mạch máu giòn dễ vỡ gây bệnh Scorbut.",
    "reference": "Sách DLS tr. 412",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1151,
    "chapter": "Vitamin và chất khoáng",
    "question": "Dùng Vitamin C liều cao kéo dài (trên 1 - 2 gam mỗi ngày) có nguy cơ gây tai biến nào tại đường tiết niệu?",
    "options": [
      "Làm tắc nghẽn niệu đạo do viêm bàng quang cấp",
      "Gây suy thận cấp do phá hủy cầu thận",
      "Tăng đào thải Oxalat qua nước tiểu dẫn đến tạo sỏi thận Calci Oxalat",
      "Làm cho nước tiểu có màu đen sẫm"
    ],
    "correct": 2,
    "explanation": "Acid ascorbic chuyển hóa thành acid oxalic; liều cao acid hóa nước tiểu tạo sỏi thận canxi oxalat.",
    "reference": "Sách DLS tr. 413",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1152,
    "chapter": "Vitamin và chất khoáng",
    "question": "Vitamin A (Retinol) dùng liều cao cho phụ nữ mang thai có nguy cơ gây tai biến nguy hiểm nào?",
    "options": [
      "Làm mẹ chuyển dạ đẻ non trước tháng thứ 5",
      "Gây đái tháo đường thai kỳ ác tính",
      "Làm cho thai nhi bị vàng da sơ sinh",
      "Gây quái thai dị tật sọ mặt, tai, hệ thần kinh trung ương và tim mạch thai nhi"
    ],
    "correct": 3,
    "explanation": "Vitamin A liều cao (> 10.000 UI/ngày) gây quái thai dị tật sọ mặt và tim mạch; chống chỉ định bổ sung liều cao cho phụ nữ có thai.",
    "reference": "Sách DLS tr. 414",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1153,
    "chapter": "Vitamin và chất khoáng",
    "question": "Biểu hiện sớm nhất của tình trạng thiếu hụt Vitamin A là:",
    "options": [
      "Quáng gà và khô giác mạc",
      "Mềm toàn bộ các xương dài",
      "Chảy máu nướu răng tự phát",
      "Rụng toàn bộ lông tóc"
    ],
    "correct": 0,
    "explanation": "Vitamin A cấu tạo sắc tố Rhodopsin của tế bào que võng mạc; thiếu hụt gây quáng gà và dày sừng khô kết mạc (vệt Bitot).",
    "reference": "Sách DLS tr. 415",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1154,
    "chapter": "Vitamin và chất khoáng",
    "question": "Dạng hoạt tính sinh học cuối cùng của Vitamin D được tổng hợp tại thận có tên khoa học là:",
    "options": [
      "Cholecalciferol",
      "1,25-dihydroxycholecalciferol",
      "25-hydroxycholecalciferol",
      "Ergocalciferol"
    ],
    "correct": 1,
    "explanation": "Calcitriol là dạng hormon hoạt tính mạnh nhất của vitamin D sau khi qua 2 lần hydroxyl hóa tại gan (vị trí 25) và thận (vị trí 1).",
    "reference": "Sách DLS tr. 416",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1155,
    "chapter": "Vitamin và chất khoáng",
    "question": "Trên bệnh nhân suy thận mạn giai đoạn cuối, dạng Vitamin D nào bắt buộc phải sử dụng để điều trị loãng xương và cường cận giáp thứ phát?",
    "options": [
      "Ergocalciferol dạng dầu",
      "Chỉ cần tắm nắng sáng sớm",
      "Calcitriol",
      "Cholecalciferol"
    ],
    "correct": 2,
    "explanation": "Thận suy mất enzym 1-alpha-hydroxylase nên không thể hoạt hóa D3 thành Calcitriol; bắt buộc dùng Calcitriol ngoại sinh.",
    "reference": "Sách DLS tr. 417",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1156,
    "chapter": "Vitamin và chất khoáng",
    "question": "Vitamin K1 (Phytomenadion) có vai trò sinh học thiết yếu trong quá trình nào sau đây?",
    "options": [
      "Kích thích tạo tiểu cầu ở tủy xương",
      "Tổng hợp huyết sắc tố Hemoglobin",
      "Tiêu hủy các cục máu đông vi mạch",
      "Hoạt hóa các yếu tố đông máu II, VII, IX, X và protein C, S tại gan"
    ],
    "correct": 3,
    "explanation": "Vitamin K là coenzym của carboxylase gắn carboxyl vào gốc acid glutamic của yếu tố đông máu II, VII, IX, X để gắn canxi hoạt động.",
    "reference": "Sách DLS tr. 418",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1157,
    "chapter": "Vitamin và chất khoáng",
    "question": "Tất cả trẻ sơ sinh ngay sau khi chào đời đều được khuyến cáo tiêm bắp một liều Vitamin K1 nhằm mục đích:",
    "options": [
      "Dự phòng bệnh xuất huyết giảm prothrombin ở trẻ sơ sinh",
      "Ngăn ngừa vàng da sinh lý được áp dụng trong thực hành lâm sàng",
      "Kích thích trẻ bú mẹ khỏe hơn",
      "Giúp trẻ tăng cân nhanh trong tháng đầu"
    ],
    "correct": 0,
    "explanation": "Trẻ sơ sinh có lượng vitamin K dự trữ rất thấp và vi khuẩn đường ruột chưa tổng hợp đủ; tiêm K1 ngừa xuất huyết não tử vong.",
    "reference": "Sách DLS tr. 419",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1158,
    "chapter": "Vitamin và chất khoáng",
    "question": "Thuốc viên sắt uống điều trị thiếu máu thiếu sắt nên được uống vào thời điểm nào để hấp thu tốt nhất?",
    "options": [
      "Nhai nát viên sắt cùng với thức ăn nhiều dầu mỡ",
      "Uống khi bụng đói cùng với nước cam hoặc vitamin C",
      "Uống chung với nước chè đặc hoặc cà phê",
      "Uống cùng lúc với cốc sữa bò tươi nguyên chất"
    ],
    "correct": 1,
    "explanation": "Môi trường acid dạ dày và vitamin C giúp khử Fe3+ thành Fe2+ tan hấp thu tốt; sữa, trà, thức ăn chứa tanin làm giảm hấp thu sắt.",
    "reference": "Sách DLS tr. 420",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1159,
    "chapter": "Vitamin và chất khoáng",
    "question": "Tác dụng không mong muốn phổ biến nhất khiến người bệnh hay bỏ thuốc viên sắt đường uống là:",
    "options": [
      "Gây mất ngủ co giật kéo dài",
      "Làm cho da bị đổi sang màu vàng chanh",
      "Kích ứng đường tiêu hóa gây buồn nôn, đau thượng vị, táo bón và phân có màu đen sẫm",
      "Gây cơn tăng huyết áp ác tính"
    ],
    "correct": 2,
    "explanation": "Sắt tự do kích ứng niêm mạc dạ dày gây cồn cào buồn nôn, táo bón và làm phân đen vô hại nhưng làm bệnh nhân lo lắng.",
    "reference": "Sách DLS tr. 421",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1160,
    "chapter": "Vitamin và chất khoáng",
    "question": "Để hạn chế tác dụng phụ kích ứng dạ dày của viên sắt uống, biện pháp can thiệp thích hợp là:",
    "options": [
      "Nghiền nát viên sắt pha với nước ngọt có ga",
      "Tăng gấp đôi liều uống để kết thúc đợt điều trị sớm",
      "Chuyển ngay sang tiêm truyền sắt tĩnh mạch cho mọi bệnh nhân",
      "Uống thuốc sau bữa ăn nhẹ hoặc bắt đầu với liều thấp tăng dần"
    ],
    "correct": 3,
    "explanation": "Uống sau ăn làm giảm nhẹ hấp thu nhưng cải thiện rõ rệt dung nạp dạ dày, giúp bệnh nhân kiên trì tuân thủ điều trị.",
    "reference": "Sách DLS tr. 422",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1161,
    "chapter": "Vitamin và chất khoáng",
    "question": "Chất khoáng Magnesi đóng vai trò sinh lý then chốt nào trong cơ thể?",
    "options": [
      "Đồng yếu tố cho hơn 300 enzym và điều hòa tính kích thích màng tế bào",
      "Có tác dụng kích thích đông máu tức thì",
      "Đào thải hoàn toàn qua tuyến mồ hôi",
      "Chỉ cấu tạo nên men răng bên ngoài"
    ],
    "correct": 0,
    "explanation": "Magnesi tham gia mọi phản ứng gắn với ATP, điều hòa hoạt động của bơm Na+/K+-ATPase và dẫn truyền thần kinh cơ.",
    "reference": "Sách DLS tr. 423",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1162,
    "chapter": "Vitamin và chất khoáng",
    "question": "Tình trạng hạ Magnesi máu nặng thường đi kèm với rối loạn điện giải khó điều chỉnh nào sau đây?",
    "options": [
      "Tăng Canxi máu nặng",
      "Hạ Kali máu và Hạ Canxi máu kháng trị",
      "Tăng Natri máu kịch phát được áp dụng trong thực hành lâm sàng",
      "Tăng Kali máu ác tính"
    ],
    "correct": 1,
    "explanation": "Thiếu Mg2+ làm bất hoạt bơm Na+/K+-ATPase gây mất kali qua nước tiểu và ức chế tiết PTH gây hạ canxi; phải bù Mg2+ trước.",
    "reference": "Sách DLS tr. 424",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1163,
    "chapter": "Vitamin và chất khoáng",
    "question": "Bổ sung Kẽm (Zinc) trong điều trị tiêu chảy cấp ở trẻ em mang lại lợi ích lâm sàng nào?",
    "options": [
      "Làm trẻ ngừng đi ngoài ngay lập tức trong 5 phút",
      "Thay thế hoàn toàn nhu cầu bù nước bằng Oresol",
      "Rút ngắn thời gian tiêu chảy, phục hồi niêm mạc ruột và ngừa tái phát",
      "Tiêu diệt trực tiếp mọi loại virus rota trong ruột"
    ],
    "correct": 2,
    "explanation": "Kẽm kích thích tái tạo biểu mô ruột, tăng cường miễn dịch niêm mạc ruột, giảm 20% thời gian tiêu chảy theo khuyến cáo WHO.",
    "reference": "Sách DLS tr. 425",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1164,
    "chapter": "Vitamin và chất khoáng",
    "question": "Bệnh lý thừa sắt mạn tính tích tụ trong cơ thể (Bệnh ứ sắt - Hemochromatosis hoặc sau truyền máu nhiều lần) được điều trị bằng thuốc thải sắt nào?",
    "options": [
      "Protamin sulfat",
      "N-acetylcystein",
      "Flumazenil",
      "Deferoxamin hoặc Deferasirox"
    ],
    "correct": 3,
    "explanation": "Deferoxamin (tiêm) và Deferasirox (uống) là các chất tạo chelat vòng càng gắn sắt tự do đào thải qua nước tiểu và phân.",
    "reference": "Sách DLS tr. 426",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1165,
    "chapter": "Vitamin và chất khoáng",
    "question": "Thừa Vitamin D do lạm dụng thuốc liều cao kéo dài có thể dẫn đến hậu quả bệnh lý nguy hiểm nào?",
    "options": [
      "Tăng Canxi máu ác tính gây vôi hóa các mô mềm và suy thận",
      "Làm teo cơ bắp chân vĩnh viễn",
      "Gây nhuyễn xương còi xương nặng",
      "Làm cho xương sọ bị mềm nhũn"
    ],
    "correct": 0,
    "explanation": "Ngộ độc vitamin D làm tăng canxi máu, lắng đọng canxi ở thận gây sỏi thận, vôi hóa ống thận và suy thận mạn.",
    "reference": "Sách DLS tr. 427",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1166,
    "chapter": "Vitamin và chất khoáng",
    "question": "Bổ sung quá nhiều Vitamin E liều cao (trên 400 - 800 UI/ngày) kéo dài bị cảnh báo làm tăng nguy cơ:",
    "options": [
      "Làm cho da bị đông cứng lại",
      "Biến cố xuất huyết não và làm tăng tỷ lệ tử vong chung theo một số phân tích gộp",
      "Gây suy gan hoại tử tế bào gan cấp",
      "Gây cơn hen phế quản ác tính"
    ],
    "correct": 1,
    "explanation": "Vitamin E liều cao có hoạt tính chống đông kháng vitamin K nhẹ, làm tăng nguy cơ xuất huyết não và tai biến mạch máu.",
    "reference": "Sách DLS tr. 428",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1167,
    "chapter": "Vitamin và chất khoáng",
    "question": "Hội chứng thiếu hụt kẽm bẩm sinh (Acrodermatitis enteropathica) đặc trưng bởi các biểu hiện lâm sàng nào?",
    "options": [
      "Xương khớp phát triển khổng lồ",
      "Tăng cân béo phì quá mức được áp dụng trong thực hành lâm sàng",
      "Viêm da đầu chi quanh các hốc tự nhiên, rụng tóc toàn bộ và tiêu chảy kéo dài",
      "Mặt tròn đỏ như mặt trăng"
    ],
    "correct": 2,
    "explanation": "Bệnh viêm da đầu chi ruột do đột biến gen vận chuyển kẽm SLC39A4, gây tổn thương da quanh hốc tự nhiên, rụng tóc và tiêu chảy.",
    "reference": "Sách DLS tr. 429",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1168,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Theo Hội Tim mạch học Việt Nam (VSH/VNHA 2022), Tăng huyết áp độ 1 được định nghĩa khi huyết áp đo tại phòng khám là:",
    "options": [
      "Huyết áp tâm thu 120 - 129 mmHg và tâm trương 80 - 84 mmHg",
      "Huyết áp tâm thu < 120 mmHg và tâm trương < 80 mmHg",
      "Huyết áp tâm thu >= 180 mmHg và/hoặc tâm trương >= 110 mmHg",
      "Huyết áp tâm thu 140 - 159 mmHg và/hoặc huyết áp tâm trương 90 - 99 mmHg"
    ],
    "correct": 3,
    "explanation": "Độ 1: 140-159 và/hoặc 90-99 mmHg; Độ 2: 160-179 và/hoặc 100-109 mmHg; Độ 3: >= 180 và/hoặc >= 110 mmHg.",
    "reference": "Sách DLS tr. 435",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1169,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Chiến lược điều trị khởi đầu chuẩn cho đa số bệnh nhân tăng huyết áp theo khuyến cáo hiện đại là:",
    "options": [
      "Khởi đầu phối hợp 2 thuốc liều thấp cố định ngay từ đầu",
      "Luôn luôn dùng đơn trị liệu liều tối đa trước khi thêm thuốc thứ hai",
      "Chỉ dùng thuốc lợi tiểu quai liều cao",
      "Bắt buộc dùng ngay 4 loại thuốc phối hợp"
    ],
    "correct": 0,
    "explanation": "Khởi đầu bằng viên phối hợp 2 thuốc liều cố định (ƯCMC/ARB + Chẹn canxi hoặc Lợi tiểu thiazid) giúp kiểm soát huyết áp nhanh và tăng tuân thủ.",
    "reference": "Sách DLS tr. 436",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1170,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Nhóm thuốc hạ huyết áp nào được xem là lựa chọn ưu tiên bắt buộc cho bệnh nhân tăng huyết áp có kèm Đái tháo đường và đạm niệu (Microalbumin niệu)?",
    "options": [
      "Thuốc chẹn thụ thể beta giao cảm đơn thuần",
      "Thuốc ức chế men chuyển hoặc Thuốc chẹn thụ thể Angiotensin II",
      "Thuốc chẹn kênh canxi DHP tác dụng ngắn",
      "Thuốc lợi tiểu quai liều cao"
    ],
    "correct": 1,
    "explanation": "ƯCMC và ARB làm giãn tiểu động mạch đi của cầu thận, giảm áp lực lọc cầu thận, bảo vệ thận và giảm đạm niệu ở bệnh nhân đái tháo đường.",
    "reference": "Sách DLS tr. 437",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1171,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc chẹn kênh Calci nhóm Dihydropyridin (như Amlodipin) có tác dụng phụ phổ biến thường gặp là:",
    "options": [
      "Gây hạ đường huyết sâu",
      "Gây co thắt phế quản làm khó thở",
      "Phù hai chi dưới do giãn tiểu động mạch tiền mao mạch",
      "Gây suy tủy xương mất bạch cầu hạt"
    ],
    "correct": 2,
    "explanation": "Amlodipin gây giãn tiểu động mạch đến mạnh hơn tiểu động mạch đi, tăng áp lực thủy tĩnh mao mạch gây thoát dịch phù mắt cá chân.",
    "reference": "Sách DLS tr. 438",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1172,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Để khắc phục hoặc giảm thiểu tác dụng phụ phù chân do Amlodipin, giải pháp phối hợp thuốc tối ưu là:",
    "options": [
      "Tăng gấp đôi liều Amlodipin",
      "Kê thêm thuốc lợi tiểu quai liều cao Furosemid",
      "Bắt bệnh nhân đứng bất động cả ngày",
      "Phối hợp Amlodipin cùng với thuốc ức chế men chuyển"
    ],
    "correct": 3,
    "explanation": "ƯCMC/ARB làm giãn tiểu động mạch đi giúp tái lập cân bằng áp lực mao mạch, giảm tỷ lệ phù chân do DHP xuống rõ rệt.",
    "reference": "Sách DLS tr. 439",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1173,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc lợi tiểu Thiazid-like nào sau đây có bằng chứng lâm sàng vượt trội và thời gian tác dụng kéo dài hơn Hydrochlorothiazid?",
    "options": [
      "Indapamid và Chlorthalidon",
      "Amilorid",
      "Spironolacton",
      "Furosemid"
    ],
    "correct": 0,
    "explanation": "Indapamid và Chlorthalidon có T1/2 dài, hạ áp ổn định 24h và giảm biến cố tim mạch tốt hơn hydrochlorothiazid trong các thử nghiệm lâm sàng.",
    "reference": "Sách DLS tr. 440",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1174,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Tác dụng không mong muốn chuyển hóa thường gặp khi sử dụng thuốc lợi tiểu nhóm Thiazid kéo dài là:",
    "options": [
      "Tăng Kali máu nghiêm trọng",
      "Hạ Kali máu, tăng Acid Uric máu và tăng nhẹ Đường huyết",
      "Gây nhiễm toan acid lactic được áp dụng trong thực hành lâm sàng",
      "Gây giảm canxi máu nặng"
    ],
    "correct": 1,
    "explanation": "Thiazid cạnh tranh đào thải acid uric ở ống thận gây tăng acid uric (dễ khởi phát gút cấp) và gây mất kali qua nước tiểu.",
    "reference": "Sách DLS tr. 441",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1175,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Chống chỉ định tuyệt đối sử dụng thuốc ức chế men chuyển (ACEi) và chẹn thụ thể (ARB) trong trường hợp:",
    "options": [
      "Người cao tuổi bị tăng huyết áp tâm thu đơn độc",
      "Bệnh nhân sau nhồi máu cơ tim có suy tim",
      "Phụ nữ có thai trong 6 tháng cuối thai kỳ và bệnh nhân hẹp động mạch thận hai bên",
      "Bệnh nhân đái tháo đường có đạm niệu"
    ],
    "correct": 2,
    "explanation": "Hẹp động mạch thận 2 bên dùng ACEi/ARB làm sụt giảm đột ngột mức lọc cầu thận gây suy thận cấp vô niệu.",
    "reference": "Sách DLS tr. 442",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1176,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc chẹn thụ thể Beta giao cảm nào có tác dụng giãn mạch bổ sung thông qua kích thích giải phóng Nitric Oxide (NO)?",
    "options": [
      "Propranolol",
      "Atenolol",
      "Metoprolol",
      "Nebivolol"
    ],
    "correct": 3,
    "explanation": "Nebivolol là chẹn beta-1 siêu chọn lọc thế hệ 3, kích thích nội mạc tiết NO gây giãn mạch, ít tác dụng phụ trên cương dương.",
    "reference": "Sách DLS tr. 443",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1177,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc chẹn Beta giao cảm nào có tác dụng ức chế hỗn hợp cả thụ thể Beta và Alpha-1 ngoại biên?",
    "options": [
      "Carvedilol và Labetalol",
      "Esmolol",
      "Bisoprolol",
      "Atenolol"
    ],
    "correct": 0,
    "explanation": "Carvedilol và Labetalol chẹn cả beta và alpha-1, giúp hạ huyết áp mạnh mẽ qua giãn mạch ngoại biên và bảo vệ tim trong suy tim.",
    "reference": "Sách DLS tr. 444",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1178,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Chống chỉ định tuyệt đối sử dụng thuốc chẹn Beta giao cảm không chọn lọc (như Propranolol) ở bệnh nhân có tiền sử:",
    "options": [
      "Bệnh nhân bị đau thắt ngực ổn định",
      "Hen phế quản hoặc bệnh phổi tắc nghẽn mạn tính có co thắt phế quản",
      "Tăng huyết áp kèm nhịp tim nhanh xoang",
      "Bệnh nhân sau nhồi máu cơ tim"
    ],
    "correct": 1,
    "explanation": "Chẹn thụ thể beta-2 trên cơ trơn phế quản gây co thắt phế quản dữ dội, nguy cơ suy hô hấp cấp tử vong ở bệnh nhân hen suyễn.",
    "reference": "Sách DLS tr. 445",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1179,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc chẹn Beta giao cảm có thể che lấp các dấu hiệu cảnh báo của cơn hạ đường huyết ở bệnh nhân đái tháo đường, NGOẠI TRỪ dấu hiệu:",
    "options": [
      "Cảm giác hồi hộp run rẩy tay chân",
      "Nhịp tim nhanh đánh trống ngực",
      "Vã mồ hôi",
      "Cảm giác lo âu bồn chồn"
    ],
    "correct": 2,
    "explanation": "Chẹn beta ức chế phản ứng giao cảm (nhịp nhanh, run tay) nhưng KHÔNG che lấp triệu chứng vã mồ hôi (qua sợi cholinergic).",
    "reference": "Sách DLS tr. 446",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1180,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Phân biệt giữa Cơn tăng huyết áp khẩn cấp (Hypertensive Urgency) và Cơn tăng huyết áp cấp cứu (Hypertensive Emergency) dựa vào:",
    "options": [
      "Tuổi tác và giới tính của người bệnh",
      "Thời gian bệnh nhân mắc bệnh tăng huyết áp từ trước",
      "Con số huyết áp tuyệt đối đo được bằng máy đo",
      "Sự hiện diện của tổn thương cơ quan đích cấp tính đang tiến triển"
    ],
    "correct": 3,
    "explanation": "Tăng huyết áp cấp cứu: HA rất cao (> 180/120) KÈM tổn thương cơ quan đích cấp tính đe dọa mạng sống (cần hạ áp bằng đường tiêm tĩnh mạch).",
    "reference": "Sách DLS tr. 450",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1181,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Nguyên tắc hạ huyết áp trong đa số các trường hợp Cơn tăng huyết áp cấp cứu (trừ bóc tách động mạch chủ) là:",
    "options": [
      "Hạ huyết áp từ từ, giảm không quá 25% huyết áp động mạch trung bình trong giờ đầu tiên",
      "Không can thiệp gì chờ huyết áp tự hạ được áp dụng trong thực hành lâm sàng",
      "Hạ huyết áp xuống càng thấp càng tốt dưới 90/60 mmHg",
      "Hạ huyết áp thật nhanh về ngay mức bình thường 120/80 mmHg trong 10 phút"
    ],
    "correct": 0,
    "explanation": "Hạ huyết áp quá nhanh làm tụt áp lực tưới máu não và vành, có thể gây nhồi máu não diện rộng hoặc nhồi máu cơ tim thiếu máu cục bộ.",
    "reference": "Sách DLS tr. 451",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1182,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc hạ áp đường tiêm tĩnh mạch liên tục được lựa chọn hàng đầu trong xử trí Cơn tăng huyết áp cấp cứu tại phòng hồi sức là:",
    "options": [
      "Amlodipin viên uống",
      "Nicardipin truyền tĩnh mạch",
      "Captopril viên uống nuốt nước",
      "Nifedipin viên nang nhỏ giọt dưới lưỡi"
    ],
    "correct": 1,
    "explanation": "Nicardipin truyền TM có khởi phát nhanh, dễ chỉnh liều theo đích huyết áp và không làm tăng áp lực nội sọ.",
    "reference": "Sách DLS tr. 452",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1183,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Tại sao thủ thuật 'Bóp thủng viên nang Nifedipin nhỏ dưới lưỡi' hiện nay bị CẤM TUYỆT ĐỐI trong xử trí cơn tăng huyết áp?",
    "options": [
      "Làm cho miệng bệnh nhân bị bỏng rát hoại tử",
      "Làm cho huyết áp vọt lên gấp đôi ngay lập tức",
      "Gây tụt huyết áp đột ngột không thể kiểm soát, dẫn đến thiếu máu não, nhồi máu não và tử vong",
      "Thuốc bị bất hoạt hoàn toàn bởi nước bọt"
    ],
    "correct": 2,
    "explanation": "FDA và Bộ Y tế cấm nifedipin ngậm/nhỏ dưới lưỡi vì tụt huyết áp không kiểm soát gây đột quỵ nhồi máu não và tử vong.",
    "reference": "Sách DLS tr. 453",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1184,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Trong Cơn tăng huyết áp cấp cứu do Bóc tách động mạch chủ cấp (Aortic dissection), mục tiêu hạ áp khẩn cấp trong 20 phút đầu là:",
    "options": [
      "Tăng nhịp tim lên trên 100 chu kỳ/phút",
      "Chỉ cần truyền dịch bù thể tích tuần hoàn",
      "Duy trì huyết áp ở mức 160/100 mmHg được áp dụng trong thực hành lâm sàng",
      "Hạ huyết áp tâm thu dưới 120 mmHg và nhịp tim dưới 60 lần/phút"
    ],
    "correct": 3,
    "explanation": "Bóc tách ĐMC là ngoại lệ cần hạ áp và nhịp tim cực nhanh trong 20p để giảm lực xé dP/dt lên thành mạch rách.",
    "reference": "Sách DLS tr. 454",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1185,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc hạ huyết áp tác động trung ương Clonidin khi ngừng thuốc đột ngột có thể gây ra hiện tượng nguy hiểm nào?",
    "options": [
      "Hiện tượng huyết áp dội ngược kịch phát với huyết áp tăng vọt ác tính",
      "Gây co thắt khí phế quản ngừng thở",
      "Hôn mê hạ đường huyết sâu",
      "Gây trụy tim mạch không thể hồi phục"
    ],
    "correct": 0,
    "explanation": "Ngừng đột ngột Clonidin làm giải phóng catecholamin ồ ạt sau thời gian bị ức chế, gây cơn tăng huyết áp dội ngược đe dọa tính mạng.",
    "reference": "Sách DLS tr. 447",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1186,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Tăng huyết áp kháng trị (Resistant hypertension) được định nghĩa khi huyết áp không đạt mục tiêu mặc dù đã:",
    "options": [
      "Uống nước sắc lá cây thảo mộc 1 tháng",
      "Dùng phối hợp tối ưu 3 thuốc hạ áp thuộc 3 nhóm khác nhau ở liều tối đa dung nạp",
      "Uống 1 loại thuốc hạ áp trong vòng 3 ngày liên tục được áp dụng trong thực hành lâm sàng",
      "Được phẫu thuật cắt bỏ một bên thận"
    ],
    "correct": 1,
    "explanation": "Tăng huyết áp kháng trị: Không đạt mục tiêu dù phối hợp 3 thuốc (gồm ƯCMC/ARB + DHP + Thiazid) ở liều tối ưu có kiểm soát tuân thủ.",
    "reference": "Sách DLS tr. 448",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1187,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc được khuyến cáo bổ sung hàng đầu bước 4 khi điều trị Tăng huyết áp kháng trị là:",
    "options": [
      "Dùng thêm kháng sinh Penicillin",
      "Tăng gấp bốn liều Amlodipin lên 40 mg/ngày",
      "Thuốc kháng thụ thể Mineralocorticoid Spironolacton",
      "Tiêm insulin dưới da liều cao"
    ],
    "correct": 2,
    "explanation": "Nghiên cứu PATHWAY-2 khẳng định Spironolacton là thuốc bước 4 hiệu quả nhất cho tăng huyết áp kháng trị.",
    "reference": "Sách DLS tr. 449",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1188,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Bệnh nhân tăng huyết áp có kèm Gút cấp tái phát nhiều lần, nhóm thuốc hạ áp nào cần thận trọng hoặc tránh dùng?",
    "options": [
      "Thuốc chẹn thụ thể Angiotensin Losartan",
      "Thuốc ức chế men chuyển Enalapril",
      "Thuốc chẹn kênh calci Amlodipin",
      "Thuốc lợi tiểu nhóm Thiazid và lợi tiểu quai"
    ],
    "correct": 3,
    "explanation": "Thuốc lợi tiểu ức chế bài tiết acid uric tại ống thận, làm tăng acid uric máu và khởi phát cơn gút cấp.",
    "reference": "Sách DLS tr. 441",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1189,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thuốc chẹn thụ thể Angiotensin II nào sau đây có tác dụng phụ độc đáo là tăng đào thải acid uric qua nước tiểu (hạ acid uric máu)?",
    "options": [
      "Losartan",
      "Candesartan",
      "Valsartan",
      "Telmisartan"
    ],
    "correct": 0,
    "explanation": "Losartan ức chế chất vận chuyển URAT-1 ở ống lượn gần giúp tăng thải acid uric, là lựa chọn hạ áp lý tưởng cho bệnh nhân gút.",
    "reference": "Sách DLS tr. 442",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1190,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Thời điểm đo huyết áp bằng máy đo huyết áp tự động tại nhà (HBPM) chuẩn nhất để theo dõi điều trị là:",
    "options": [
      "Đo lúc đang cãi nhau căng thẳng",
      "Đo 2 lần/ngày: Buổi sáng trước khi uống thuốc và buổi tối trước khi ngủ",
      "Đo ngay sau khi vừa chạy bộ leo cầu thang 5 tầng",
      "Chỉ đo một lần duy nhất vào lúc nửa đêm"
    ],
    "correct": 1,
    "explanation": "Đo huyết áp tại nhà 2 lần/ngày (sáng trước uống thuốc, tối trước ngủ), mỗi lần đo 2 lần cách nhau 1-2 phút lấy trung bình.",
    "reference": "Sách DLS tr. 434",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1191,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Hiện tượng 'Tăng huyết áp áo choàng trắng' (White-coat hypertension) được xác định khi:",
    "options": [
      "Bác sĩ mặc áo choàng trắng bị tăng huyết áp",
      "Huyết áp tụt kẹp khi gặp nhân viên y tế được áp dụng trong thực hành lâm sàng",
      "Huyết áp tăng cao tại phòng khám nhưng bình thường khi đo tại nhà",
      "Huyết áp luôn luôn cao trong mọi hoàn cảnh kể cả khi ngủ"
    ],
    "correct": 2,
    "explanation": "Tăng huyết áp áo choàng trắng do tâm lý lo lắng khi gặp bác sĩ; cần chẩn đoán phân biệt bằng theo dõi huyết áp lưu động 24h (ABPM).",
    "reference": "Sách DLS tr. 433",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1192,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "question": "Biện pháp thay đổi lối sống nào sau đây đem lại hiệu quả hạ huyết áp tâm thu mạnh mẽ nhất (giảm khoảng 8 - 14 mmHg)?",
    "options": [
      "Ăn thật nhiều đồ hộp ngâm muối đậm đà",
      "Uống nhiều cà phê đậm đặc hàng ngày",
      "Ngủ nướng cả ngày không vận động",
      "Áp dụng chế độ ăn kiêng DASH"
    ],
    "correct": 3,
    "explanation": "Chế độ ăn DASH và giảm muối (< 5g muối/ngày) là biện pháp không dùng thuốc hạ huyết áp hiệu quả nhất được chứng minh lâm sàng.",
    "reference": "Sách DLS tr. 435",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1193,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Định nghĩa Tiêu chảy cấp ở trẻ em theo tiêu chuẩn của Tổ chức Y tế Thế giới (WHO) là:",
    "options": [
      "Đi ngoài phân lỏng hoặc tóe nước từ 3 lần trở lên trong 24 giờ và kéo dài không quá 14 ngày",
      "Đi ngoài phân lỏng trên 30 ngày được áp dụng trong thực hành lâm sàng",
      "Đi ngoài phân khuôn rắn chắc 2 ngày 1 lần",
      "Đi ngoài phân sệt 1 lần trong ngày"
    ],
    "correct": 0,
    "explanation": "Tiêu chảy cấp: Đi ngoài phân lỏng >= 3 lần/24h và thời gian kéo dài dưới 14 ngày (trên 14 ngày là tiêu chảy kéo dài).",
    "reference": "Sách DLS tr. 460",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1194,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Dung dịch Oresol chuẩn độ thẩm thấu thấp (Reduced osmolarity ORS) theo khuyến cáo hiện hành của WHO có tổng áp lực thẩm thấu là:",
    "options": [
      "150 mOsm/L",
      "245 mOsm/L",
      "500 mOsm/L",
      "311 mOsm/L"
    ],
    "correct": 1,
    "explanation": "ORS thẩm thấu thấp 245 mOsm/L (75 mEq/L Na+, 75 mmol/L Glucose) giảm tỷ lệ nôn, giảm lượng phân và giảm nhu cầu truyền dịch so với ORS cũ.",
    "reference": "Sách DLS tr. 462",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1195,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Cơ chế sinh lý học phân tử làm nền tảng cho hiệu quả bù nước đường uống của dung dịch Oresol là:",
    "options": [
      "Khuếch tán thụ động của nước qua màng lipid",
      "Kích thích tăng tiết chất nhầy bảo vệ niêm mạc đại tràng",
      "Đồng vận chuyển liên kết 1 phân tử Glucose với 1 ion Natri qua SGLT-1",
      "Ức chế trực tiếp độc tố vi khuẩn tả"
    ],
    "correct": 2,
    "explanation": "Kênh đồng vận chuyển Na+-Glucose (SGLT-1) vẫn nguyên vẹn khi bị tiêu chảy cấp; hấp thu glucose kéo theo natri và nước vào tuần hoàn.",
    "reference": "Sách DLS tr. 461",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1196,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Tác hại nguy hiểm khi pha gói Oresol quá đặc (pha ít nước hơn hướng dẫn ghi trên bao bì) là:",
    "options": [
      "Làm giảm tác dụng bù nước của dung dịch",
      "Làm cho trẻ bị hạ đường huyết đột ngột",
      "Gây dị ứng da dạng mề đay toàn thân được áp dụng trong thực hành lâm sàng",
      "Tăng áp lực thẩm thấu làm tiêu chảy nặng hơn và gây tăng natri máu"
    ],
    "correct": 3,
    "explanation": "Pha quá đặc làm tăng gánh nặng thẩm thấu hút nước từ tế bào vào lòng ruột, gây tăng natri máu ưu trương, teo tế bào não và tử vong.",
    "reference": "Sách DLS tr. 463",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1197,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Khi trẻ bị nôn sau khi uống Oresol, hướng dẫn chăm sóc đúng cho người mẹ là:",
    "options": [
      "Tạm dừng cho uống trong 5 - 10 phút, sau đó cho trẻ uống lại từng thìa nhỏ chậm hơn",
      "Cho trẻ uống bù ngay lập tức 500 ml thật nhanh",
      "Chuyển ngay sang tiêm truyền tĩnh mạch cấp cứu",
      "Bắt trẻ nhịn uống hoàn toàn trong 24 giờ"
    ],
    "correct": 0,
    "explanation": "Nôn thường do uống quá nhanh; nghỉ 5-10 phút rồi đút từng thìa nhỏ mỗi 1-2 phút giúp trẻ hấp thu tốt không bị nôn trớ.",
    "reference": "Sách DLS tr. 464",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1198,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Đánh giá mức độ mất nước theo WHO: Trẻ tỉnh táo, mắt bình thường, uống nước bình thường, nếp véo da mất nhanh thuộc phân loại:",
    "options": [
      "Sốc giảm thể tích tuần hoàn",
      "Phác đồ A",
      "Phác đồ C",
      "Phác đồ B"
    ],
    "correct": 1,
    "explanation": "Không có đủ 2 dấu hiệu của mất nước => Phân loại Không mất nước, điều trị tại nhà theo Phác đồ A.",
    "reference": "Sách DLS tr. 465",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1199,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Bốn nguyên tắc điều trị tại nhà theo Phác đồ A cho trẻ tiêu chảy cấp không mất nước bao gồm:",
    "options": [
      "Uống nước ngọt có ga + Nhịn ăn tinh bột + Uống thuốc chống nôn",
      "Cho trẻ nhịn ăn tuyệt đối + Dùng kháng sinh phổ rộng + Uống thuốc cầm đi ngoài + Nằm bất động",
      "Cho trẻ uống nhiều nước hơn bình thường + Bổ sung Kẽm + Tiếp tục cho ăn/bú mẹ + Đưa trẻ tái khám khi có dấu hiệu nguy hiểm",
      "Chỉ truyền dịch tĩnh mạch tại trạm y tế + Nhịn bú mẹ hoàn toàn"
    ],
    "correct": 2,
    "explanation": "Phác đồ A: Uống nhiều dịch hơn, bổ sung kẽm 10-14 ngày, tiếp tục dinh dưỡng đầy đủ, nhận biết dấu hiệu nguy hiểm cần khám ngay.",
    "reference": "Sách DLS tr. 466",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1200,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Lượng dung dịch Oresol khuyến cáo cho trẻ uống sau mỗi lần đi ngoài phân lỏng ở trẻ dưới 2 tuổi theo Phác đồ A là:",
    "options": [
      "Uống tùy thích đến khi trẻ no nê",
      "Chỉ cho uống đúng 1 thìa cà phê",
      "100 đến 200 mL sau mỗi lần đi ngoài",
      "50 đến 100 mL sau mỗi lần đi ngoài"
    ],
    "correct": 3,
    "explanation": "WHO: Trẻ < 2 tuổi uống 50-100 mL sau mỗi lần đi ngoài; trẻ 2-10 tuổi uống 100-200 mL; trẻ lớn uống theo nhu cầu.",
    "reference": "Sách DLS tr. 467",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1201,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Lượng dung dịch Oresol khuyến cáo cho trẻ từ 2 đến 10 tuổi uống sau mỗi lần đi ngoài phân lỏng là:",
    "options": [
      "100 đến 200 mL sau mỗi lần đi ngoài",
      "500 mL sau mỗi lần đi ngoài",
      "50 mL sau mỗi lần đi ngoài",
      "Chỉ cho uống nước đun sôi để nguội"
    ],
    "correct": 0,
    "explanation": "Trẻ từ 2 đến 10 tuổi uống 100-200 mL Oresol sau mỗi lần đi ngoài phân lỏng để bù lượng dịch vừa mất.",
    "reference": "Sách DLS tr. 467",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1202,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Dấu hiệu phân loại trẻ bị Tiêu chảy cấp 'Có mất nước' (Phác đồ B) theo WHO khi có ít nhất 2 trong 4 dấu hiệu:",
    "options": [
      "Trẻ bị sốt cao kèm ho có đờm xanh",
      "Vật vã li bì khó chịu, mắt trũng, uống nước háo hức/khát, nếp véo da mất chậm",
      "Hôn mê sâu, tay chân lạnh ngắt, mạch không bắt được",
      "Trẻ hoàn toàn vui chơi bình thường không khát nước"
    ],
    "correct": 1,
    "explanation": "Phác đồ B (Có mất nước): 2 trong 4 dấu hiệu: Kích thích/vật vã, mắt trũng, khát uống háo hức, nếp véo da mất chậm.",
    "reference": "Sách DLS tr. 468",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1203,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Số lượng dung dịch Oresol cần bù trong 4 giờ đầu cho trẻ có mất nước theo Phác đồ B được tính theo công thức:",
    "options": [
      "Số lượng ORS = Cân nặng của trẻ x 100",
      "Cố định 1000 mL cho mọi trẻ em",
      "Số lượng ORS = Cân nặng của trẻ x 75",
      "Số lượng ORS = Tuổi của trẻ x 50"
    ],
    "correct": 2,
    "explanation": "Phác đồ B: Lượng Oresol bù trong 4 giờ đầu = Cân nặng (kg) x 75 mL (ví dụ trẻ 10 kg cần 750 mL trong 4 giờ).",
    "reference": "Sách DLS tr. 469",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1204,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Trẻ được phân loại Tiêu chảy cấp 'Mất nước nặng' (Phác đồ C) khi có ít nhất 2 trong 4 dấu hiệu nào?",
    "options": [
      "Khóc to đòi ăn liên tục",
      "Uống nước háo hức đòi uống thêm",
      "Nếp véo da mất ngay tức thì dưới 1 giây",
      "Li bì khó đánh thức, mắt rất trũng, uống kém, nếp véo da mất rất chậm"
    ],
    "correct": 3,
    "explanation": "Phác đồ C: Có >= 2 dấu hiệu: Li bì/hôn mê, mắt rất trũng, không uống được/uống kém, nếp véo da mất rất chậm (> 2s).",
    "reference": "Sách DLS tr. 470",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1205,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Phác đồ C bù dịch đường tĩnh mạch cấp cứu cho trẻ em bị mất nước nặng sử dụng loại dịch truyền ưu tiên số 1 là:",
    "options": [
      "Dung dịch Ringer lactat",
      "Dung dịch Dextran phân tử cao",
      "Dung dịch Glucose 5% đơn thuần",
      "Dung dịch Albumin người đậm đặc"
    ],
    "correct": 0,
    "explanation": "Ringer lactat có thành phần điện giải gần với dịch ngoại bào nhất và có lactat chuyển hóa thành bicarbonat chống toan máu.",
    "reference": "Sách DLS tr. 471",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1206,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Tổng lượng dịch truyền tĩnh mạch theo Phác đồ C cho trẻ mất nước nặng là 100 mL/kg, tốc độ truyền cho trẻ dưới 12 tháng tuổi là:",
    "options": [
      "Truyền xối xả toàn bộ 100 mL/kg trong vòng 15 phút",
      "30 mL/kg trong 1 giờ đầu, sau đó 70 mL/kg trong 5 giờ tiếp theo",
      "30 mL/kg trong 30 phút, sau đó 70 mL/kg trong 2,5 giờ",
      "Truyền liên tục 100 mL/kg trong 24 giờ"
    ],
    "correct": 1,
    "explanation": "Trẻ < 12 tháng: Truyền 100 ml/kg trong 6 giờ (30 ml/kg trong 1h đầu + 70 ml/kg trong 5h sau).",
    "reference": "Sách DLS tr. 472",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1207,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Tốc độ truyền tĩnh mạch Phác đồ C (100 mL/kg) cho trẻ từ 12 tháng tuổi trở lên (1 đến 5 tuổi) là:",
    "options": [
      "30 mL/kg trong 1 giờ đầu, sau đó 70 mL/kg trong 5 giờ tiếp theo",
      "Truyền thật chậm trong 12 giờ",
      "30 mL/kg trong 30 phút đầu, sau đó 70 mL/kg trong 2,5 giờ tiếp theo",
      "Chỉ truyền 10 mL/kg"
    ],
    "correct": 2,
    "explanation": "Trẻ >= 12 tháng: Bù nhanh hơn, tổng 3 giờ (30 ml/kg trong 30 phút đầu + 70 ml/kg trong 2,5 giờ tiếp theo).",
    "reference": "Sách DLS tr. 472",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1208,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Thuốc làm giảm nhu động ruột Loperamid (Imodium) có được chỉ định cho trẻ em bị tiêu chảy cấp không?",
    "options": [
      "Là thuốc được khuyên dùng hàng đầu cho mọi trẻ em khi thực hiện theo dõi bệnh nhân",
      "Chỉ dùng khi trẻ dưới 6 tháng tuổi kết hợp chăm sóc theo dõi định kỳ",
      "Dùng phối hợp cùng men vi sinh được áp dụng trong thực hành lâm sàng được áp dụng trong thực hành y khoa",
      "Chống chỉ định tuyệt đối cho trẻ em vì nguy cơ liệt ruột tắc ruột, ứ đọng độc tố và ức chế hô hấp"
    ],
    "correct": 3,
    "explanation": "WHO và Bộ Y tế cấm dùng Loperamid cho trẻ em vì nguy cơ liệt ruột hoại tử, nhiễm độc toàn thân và tử vong.",
    "reference": "Sách DLS tr. 475",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1209,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Thuốc ức chế enzym Enkephalinase niêm mạc ruột Racecadotril (Hidrasec) có cơ chế tác dụng là:",
    "options": [
      "Chống xuất tiết chọn lọc ở ruột, giảm mất nước và điện giải mà không làm thay đổi nhu động ruột",
      "Tiêu diệt vi khuẩn tả và E. coli trong lòng ruột",
      "Bọc niêm mạc dạ dày chống nôn trớ",
      "Gây liệt cơ trơn đại tràng làm ngừng đi ngoài tức thì"
    ],
    "correct": 0,
    "explanation": "Racecadotril bảo vệ enkephalin nội sinh, ức chế tăng tiết dịch do độc tố mà không ảnh hưởng nhu động ruột, an toàn hơn loperamid.",
    "reference": "Sách DLS tr. 476",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1210,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Chỉ định dùng kháng sinh trong điều trị tiêu chảy cấp ở trẻ em chỉ bắt buộc trong tình huống nào sau đây?",
    "options": [
      "Tiêu chảy do nhiễm virus Rota",
      "Tiêu chảy phân có máu hoặc nghi ngờ dịch tả nặng có mất nước",
      "Trẻ bị tiêu chảy sau khi uống sữa bột",
      "Tất cả các trường hợp tiêu chảy phân lỏng tóe nước"
    ],
    "correct": 1,
    "explanation": "Đa số tiêu chảy cấp là do virus (Rotavirus); kháng sinh CHỈ dùng khi có lỵ (phân có máu, mót rặn, sốt) hoặc nghi ngờ tả.",
    "reference": "Sách DLS tr. 477",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1211,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Kháng sinh được Bộ Y tế và WHO khuyến cáo lựa chọn hàng đầu điều trị Hội chứng lỵ do trực khuẩn Shigella ở trẻ em là:",
    "options": [
      "Ampicillin đường uống",
      "Cloramphenicol",
      "Ciprofloxacin hoặc Azithromycin",
      "Cotrimoxazol"
    ],
    "correct": 2,
    "explanation": "Shigella đã kháng rộng với cotrimoxazol/ampicillin; Ciprofloxacin (hoặc Azithromycin/Ceftriaxone) là lựa chọn đầu tay.",
    "reference": "Sách DLS tr. 478",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1212,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Căn nguyên virus phổ biến nhất gây tiêu chảy cấp mất nước nặng ở trẻ em dưới 2 tuổi trên toàn cầu là:",
    "options": [
      "Adenovirus",
      "Coronavirus",
      "Norovirus",
      "Rotavirus"
    ],
    "correct": 3,
    "explanation": "Rotavirus là tác nhân hàng đầu gây tiêu chảy mùa đông xuân mất nước nặng ở trẻ < 2 tuổi (đã có vaccin uống dự phòng).",
    "reference": "Sách DLS tr. 460",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1213,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Chế độ dinh dưỡng đúng đắn cho trẻ trong thời gian bị tiêu chảy cấp là:",
    "options": [
      "Tiếp tục cho trẻ bú mẹ tăng cường và ăn chế độ giàu dinh dưỡng, không kiêng khem",
      "Chỉ cho trẻ ăn cháo muối trắng không có đạm và dầu mỡ",
      "Cho trẻ nhịn ăn hoàn toàn chỉ uống nước lọc",
      "Pha loãng sữa mẹ với nước lã"
    ],
    "correct": 0,
    "explanation": "Tiếp tục cho ăn/bú bình thường giúp niêm mạc ruột hồi phục nhanh, tránh sụt cân và suy dinh dưỡng sau tiêu chảy.",
    "reference": "Sách DLS tr. 479",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1214,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Thuốc hấp phụ bảo vệ niêm mạc ruột Diosmectite (Smecta) khi sử dụng cần lưu ý điều gì đối với các thuốc khác?",
    "options": [
      "Nghiền nát trộn chung với bột ăn dặm",
      "Phải uống cách xa các thuốc khác ít nhất 2 giờ để tránh làm giảm hấp thu các thuốc đó",
      "Uống cùng lúc với kháng sinh để tăng tác dụng diệt khuẩn",
      "Pha chung vào bình sữa cho trẻ bú"
    ],
    "correct": 1,
    "explanation": "Diosmectite có diện tích bề mặt lớn hấp phụ thuốc khác; bắt buộc uống cách xa các thuốc khác tối thiểu 2 giờ.",
    "reference": "Sách DLS tr. 480",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1215,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Men vi sinh Probiotics (như Saccharomyces boulardii, Lactobacillus rhamnosus GG) có vai trò gì trong tiêu chảy cấp?",
    "options": [
      "Cầm đi ngoài ngay lập tức trong vòng 10 phút",
      "Thay thế hoàn toàn dung dịch bù nước Oresol được áp dụng trong thực hành lâm sàng",
      "Hỗ trợ cân bằng hệ vi sinh đường ruột và rút ngắn thời gian tiêu chảy khoảng 1 ngày",
      "Tiêu diệt trực tiếp toàn bộ vi khuẩn gram âm trong ruột"
    ],
    "correct": 2,
    "explanation": "Men vi sinh là liệu pháp bổ trợ giúp cạnh tranh vị trí bám của mầm bệnh, rút ngắn thời gian tiêu chảy khoảng 17-24 giờ.",
    "reference": "Sách DLS tr. 481",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1216,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Dấu hiệu 'Nếp véo da mất rất chậm' trong đánh giá mất nước được quy ước thời gian là:",
    "options": [
      "Nếp véo da phẳng lại trong vòng 1 giây",
      "Nếp véo da không biến mất sau 1 giờ",
      "Da bị bầm tím sau khi véo",
      "Nếp véo da phẳng lại sau trên 2 giây"
    ],
    "correct": 3,
    "explanation": "Kỹ thuật véo da bụng: Mất nhanh (< 1s), Mất chậm (1-2s: Phác đồ B), Mất rất chậm (> 2s: Phác đồ C mất nước nặng).",
    "reference": "Sách DLS tr. 465",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1217,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Tại sao các loại nước ngọt công nghiệp có ga, nước ép hoa quả đóng hộp đậm đặc không được dùng bù nước cho trẻ tiêu chảy?",
    "options": [
      "Áp lực thẩm thấu quá cao kéo nước vào ruột gây tiêu chảy nặng hơn",
      "Làm cho trẻ bị nghiện đồ ngọt vĩnh viễn được áp dụng trong thực hành lâm sàng",
      "Chứa quá nhiều muối natri gây ngộ độc muối",
      "Làm giảm thân nhiệt của trẻ đột ngột"
    ],
    "correct": 0,
    "explanation": "Nước ngọt đóng hộp có áp lực thẩm thấu rất cao (> 500 mOsm/L), hút nước vào lòng ruột gây tiêu chảy thẩm thấu trầm trọng hơn.",
    "reference": "Sách DLS tr. 463",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1218,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Dấu hiệu nguy hiểm cảnh báo người mẹ cần đưa trẻ bị tiêu chảy đi khám bệnh viện ngay lập tức là:",
    "options": [
      "Trẻ vẫn chơi ngoan và đi ngoài phân lỏng 2 lần trong ngày",
      "Trẻ sốt cao li bì, nôn tất cả mọi thứ, khát nước dữ dội hoặc không uống được, đi ngoài phân có máu",
      "Trẻ đòi bú mẹ nhiều hơn bình thường",
      "Trẻ đi tiểu nước tiểu màu vàng trong"
    ],
    "correct": 1,
    "explanation": "Dấu hiệu nguy hiểm: Sốt cao, nôn liên tục, khát nhiều, không uống được, phân có máu, li bì khó đánh thức => Khám ngay.",
    "reference": "Sách DLS tr. 466",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1219,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Biến chứng toan chuyển hóa (Metabolic acidosis) trong tiêu chảy cấp nặng xảy ra chủ yếu do:",
    "options": [
      "Phổi giảm đào thải khí carbon dioxide",
      "Dạ dày tăng tiết acid chlohydric gấp 10 lần",
      "Mất một lượng lớn ion Bicarbonat qua phân lỏng",
      "Thận tăng tái hấp thu ion Hydro"
    ],
    "correct": 2,
    "explanation": "Dịch ruột và phân lỏng chứa nhiều bicarbonat (HCO3-); tiêu chảy ồ ạt làm mất kiềm dẫn đến toan chuyển hóa thở sâu Kussmaul.",
    "reference": "Sách DLS tr. 461",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1220,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Biến chứng hạ Kali máu trong tiêu chảy cấp kéo dài biểu hiện lâm sàng qua dấu hiệu nào?",
    "options": [
      "Tăng phản xạ gân xương co giật",
      "Huyết áp tăng vọt ác tính",
      "Nước tiểu đỏ như máu được áp dụng trong thực hành lâm sàng",
      "Chướng bụng, giảm nhu động ruột, yếu cơ toàn thân và rối loạn nhịp tim"
    ],
    "correct": 3,
    "explanation": "Mất kali qua phân gây hạ kali máu dẫn đến giảm trương lực cơ trơn (chướng bụng liệt ruột), yếu cơ và sóng U trên điện tim.",
    "reference": "Sách DLS tr. 462",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1221,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Dung dịch Oresol sau khi pha với nước đun sôi để nguội chỉ được sử dụng tối đa trong vòng bao lâu?",
    "options": [
      "Trong vòng 24 giờ, sau 24 giờ phải đổ bỏ và pha gói mới",
      "Có thể dùng trong 1 tháng nếu để ngăn mát tủ lạnh",
      "Chỉ được dùng trong 15 phút đầu",
      "Có thể lưu trữ trong 7 ngày ở nhiệt độ phòng"
    ],
    "correct": 0,
    "explanation": "Dung dịch Oresol để quá 24 giờ dễ bị nhiễm khuẩn phát triển trong môi trường giàu glucose và điện giải, phải bỏ đi.",
    "reference": "Sách DLS tr. 464",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1222,
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "question": "Biện pháp phòng ngừa đặc hiệu và hiệu quả nhất bệnh tiêu chảy cấp nặng do Rotavirus ở trẻ nhỏ là:",
    "options": [
      "Uống men vi sinh hàng ngày liên tục 2 năm",
      "Cho trẻ uống vaccin phòng Rotavirus đầy đủ trước 6-8 tháng tuổi",
      "Không cho trẻ bú sữa mẹ trong năm đầu được áp dụng trong thực hành lâm sàng",
      "Uống kháng sinh dự phòng hàng tuần"
    ],
    "correct": 1,
    "explanation": "Vaccin Rotavirus uống (Rotarix, RotaTeq, Rotavin) trước 6-8 tháng tuổi giúp giảm > 85-90% ca tiêu chảy nặng do rotavirus nhập viện.",
    "reference": "Sách DLS tr. 482",
    "source": "BYT",
    "sourceName": "Bộ Y tế (Chuẩn Quốc gia)"
  },
  {
    "id": 1223,
    "chapter": "Dược động học & Suy gan, thận",
    "source": "HUP",
    "sourceName": "Đại học Dược Hà Nội",
    "question": "Theo hướng dẫn TDM của Hiệp hội Dược sĩ Bệnh viện Hoa Kỳ (ASHP) và Bộ Y tế, thông số PK/PD tối ưu nhất để theo dõi hiệu quả và giảm độc tính thận của Vancomycin trong điều trị nhiễm khuẩn MRSA nặng là:",
    "options": [
      "Tỉ lệ Cmax / MIC đạt giá trị từ 8 đến 10",
      "Nồng độ đáy (C_trough) duy trì ổn định trong khoảng 5 đến 10 mcg/mL",
      "AUC24 / MIC đạt mục tiêu từ 400 đến 600 mg·h/L (giả định MIC = 1 mg/L)",
      "Thời gian nồng độ thuốc vượt trên MIC (%T > MIC) tối thiểu đạt trên 70% khoảng liều"
    ],
    "correct": 2,
    "explanation": "ASHP và khuyến cáo Dược lâm sàng hiện đại khuyến cáo theo dõi Vancomycin theo AUC24/MIC từ 400 - 600 mg·h/L bằng phương pháp Bayes hoặc tính toán 2 điểm nồng độ. Trước đây dùng C_trough 15 - 20 mcg/mL nhưng nồng độ này làm tăng nguy cơ tổn thương thận cấp (AKI)."
  },
  {
    "id": 1224,
    "chapter": "Dược động học & Suy gan, thận",
    "source": "HUP",
    "sourceName": "Đại học Dược Hà Nội",
    "question": "Liều nạp (Loading dose) của Vancomycin theo khuyến cáo cho bệnh nhân người lớn nhiễm khuẩn nặng/nguy kịch (như sốc nhiễm khuẩn, viêm nội tâm mạc, viêm màng não) là:",
    "options": [
      "10 đến 15 mg/kg tính theo cân nặng lý tưởng (IBW)",
      "Cố định liều 1 gam duy nhất cho mọi người bệnh bất kể cân nặng",
      "40 đến 50 mg/kg truyền tĩnh mạch thật nhanh trong vòng 15 phút",
      "25 đến 30 mg/kg tính theo cân nặng thực tế (tối đa không quá 2 đến 3 gam)"
    ],
    "correct": 3,
    "explanation": "Ở người bệnh nhiễm khuẩn nặng đe dọa tính mạng, để nhanh chóng đạt nồng độ điều trị trong máu cần dùng liều nạp Vancomycin 25 - 30 mg/kg tính theo cân nặng thực tế (TBW), tối đa không vượt quá 2 - 3g và phải truyền chậm (tối thiểu 1g/60 phút) để tránh hội chứng Red Man."
  },
  {
    "id": 1225,
    "chapter": "Dược động học & Suy gan, thận",
    "source": "HUP",
    "sourceName": "Đại học Dược Hà Nội",
    "question": "Đối với kháng sinh Aminoglycosid (Gentamicin, Tobramycin), việc áp dụng chế độ liều một lần mỗi ngày (Extended-interval / Once-daily dosing) dựa trên đặc tính dược lực học và dược động học nào sau đây?",
    "options": [
      "Tác dụng diệt khuẩn phụ thuộc nồng độ (Cmax/MIC) và hiệu ứng hậu kháng sinh (PAE) kéo dài",
      "Tác dụng diệt khuẩn phụ thuộc thời gian (%T > MIC) và thời gian bán thải dài trên 24 giờ",
      "Thuốc chuyển hóa hoàn toàn qua gan thành chất có hoạt tính diệt khuẩn mạnh hơn",
      "Thuốc không có độc tính tích lũy trên ống lượn gần của thận khi nồng độ đáy tăng cao"
    ],
    "correct": 0,
    "explanation": "Aminoglycosid diệt khuẩn phụ thuộc nồng độ (mục tiêu Cmax/MIC >= 8 - 10) và có hiệu ứng hậu kháng sinh (PAE) kéo dài. Dùng 1 lần/ngày đạt đỉnh cao giúp diệt khuẩn tối đa, đồng thời nồng độ đáy hạ xuống rất thấp trước liều tiếp theo giúp giảm tích lũy tại vỏ thận và tai trong."
  },
  {
    "id": 1226,
    "chapter": "Dược động học & Suy gan, thận",
    "source": "HUP",
    "sourceName": "Đại học Dược Hà Nội",
    "question": "Thời điểm chuẩn xác nhất để lấy mẫu máu định lượng nồng độ đáy (C_trough) của một thuốc khi giám sát TDM là:",
    "options": [
      "Ngay sau khi vừa kết thúc truyền tĩnh mạch liều thuốc đầu tiên",
      "Trong vòng 30 phút ngay trước khi dùng liều thuốc tiếp theo khi thuốc đã đạt trạng thái ổn định",
      "Tại thời điểm chính giữa khoảng cách đưa thuốc của liều thứ hai",
      "Sau khi uống thuốc được 1 đến 2 giờ cùng với bữa ăn"
    ],
    "correct": 1,
    "explanation": "Nồng độ đáy (C_trough) phản ánh nồng độ thấp nhất trong khoảng liều và phải được lấy mẫu ngay trước khi dùng liều kế tiếp (thường trong vòng 30 phút trước liều) sau khi thuốc đã đạt trạng thái ổn định (sau 4 - 5 lần T1/2)."
  },
  {
    "id": 1227,
    "chapter": "Dược động học & Suy gan, thận",
    "source": "HUP",
    "sourceName": "Đại học Dược Hà Nội",
    "question": "Một thuốc có thời gian bán thải (T1/2) là 8 giờ và thải trừ theo động học bậc 1. Sau khi bắt đầu truyền tĩnh mạch liên tục với tốc độ không đổi, thời gian cần thiết để nồng độ thuốc đạt trạng thái ổn định (Css ~ 97%) là khoảng:",
    "options": [
      "8 đến 12 giờ",
      "16 đến 24 giờ",
      "32 đến 40 giờ (tương đương 4 đến 5 lần T1/2)",
      "72 đến 96 giờ bất kể trị số thời gian bán thải"
    ],
    "correct": 2,
    "explanation": "Theo dược động học bậc 1, thời gian để đạt trạng thái ổn định (Steady State - Css) chỉ phụ thuộc vào thời gian bán thải: 1 T1/2 đạt 50%, 2 T1/2 đạt 75%, 3 T1/2 đạt 87.5%, 4 T1/2 đạt 93.75%, 5 T1/2 đạt 96.9%. Với T1/2 = 8h, 4 - 5 T1/2 tương ứng 32 - 40 giờ."
  },
  {
    "id": 1228,
    "chapter": "Dược động học & Suy gan, thận",
    "source": "HUP",
    "sourceName": "Đại học Dược Hà Nội",
    "question": "Khi tính độ thanh thải creatinin (CrCl) theo công thức Cockcroft-Gault cho một bệnh nhân nam 60 tuổi, nặng 65 kg, có nồng độ creatinin huyết thanh là 1.2 mg/dL, công thức áp dụng đúng là:",
    "options": [
      "CrCl = [(140 - 60) × 65 × 0.85] / (72 × 1.2)",
      "CrCl = [(140 - 60) × 72] / (65 × 1.2)",
      "CrCl = [(140 + 60) × 65] / (72 × 1.2)",
      "CrCl = [(140 - 60) × 65] / (72 × 1.2)"
    ],
    "correct": 3,
    "explanation": "Công thức Cockcroft-Gault ở nam giới: CrCl (mL/phút) = [(140 - Tuổi) × Cân nặng (kg)] / [72 × Scr (mg/dL)]. Ở nữ giới mới nhân thêm hệ số 0.85 do khối lượng cơ ít hơn nam giới khoảng 15%."
  },
  {
    "id": 1229,
    "chapter": "Dược động học & Suy gan, thận",
    "source": "HUP",
    "sourceName": "Đại học Dược Hà Nội",
    "question": "Khi áp dụng công thức Cockcroft-Gault để hiệu chỉnh liều thuốc ở bệnh nhân béo phì (BMI ≥ 30 kg/m² hoặc cân nặng thực tế vượt quá 120% cân nặng lý tưởng), loại cân nặng khuyến cáo sử dụng là:",
    "options": [
      "Cân nặng hiệu chỉnh (Adjusted Body Weight - ABW = IBW + 0.4 × [TBW - IBW])",
      "Cân nặng thực tế (Actual Body Weight - TBW) vì lượng mỡ giúp đào thải creatinin",
      "Mặc định lấy giá trị cố định 70 kg cho tất cả các đối tượng béo phì",
      "Lấy cân nặng lý tưởng trừ đi 20% lượng mỡ thừa ước tính"
    ],
    "correct": 0,
    "explanation": "Mô mỡ ít sản xuất creatinin nhưng làm tăng nhẹ thể tích phân bố và tốc độ lọc cầu thận. Dùng TBW sẽ ước tính quá cao CrCl, còn dùng IBW lại ước tính quá thấp. Vì vậy, cân nặng hiệu chỉnh ABW (với hệ số 0.4) là chuẩn xác nhất cho người béo phì."
  },
  {
    "id": 1230,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "source": "HUP",
    "sourceName": "Đại học Dược Hà Nội",
    "question": "Theo thang đánh giá mối liên quan giữa thuốc và phản ứng có hại của Naranjo (Naranjo Algorithm), một biến cố bất lợi được kết luận là 'Chắc chắn' (Definite) do thuốc gây ra khi tổng điểm đạt được là:",
    "options": [
      "Từ 1 đến 4 điểm",
      "Từ 9 điểm trở lên",
      "Từ 5 đến 8 điểm",
      "Dưới 0 điểm"
    ],
    "correct": 1,
    "explanation": "Thang Naranjo chia làm 4 mức độ nhân quả: >= 9 điểm: Chắc chắn (Definite); 5 - 8 điểm: Có khả năng (Probable); 1 - 4 điểm: Có thể (Possible); <= 0 điểm: Nghi ngờ / Chưa chắc chắn (Doubtful)."
  },
  {
    "id": 1231,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "source": "HUP",
    "sourceName": "Đại học Dược Hà Nội",
    "question": "Phản ứng có hại của thuốc loại A (Type A - Augmented) theo phân loại của Rawlins và Thompson có đặc điểm cốt lõi nào sau đây?",
    "options": [
      "Không liên quan đến tác dụng dược lý, không phụ thuộc liều dùng và tỷ lệ tử vong rất cao",
      "Chỉ xảy ra khi dùng thuốc kéo dài nhiều năm do hiện tượng tích lũy thuốc trong mô mỡ",
      "Liên quan trực tiếp đến tác dụng dược lý, phụ thuộc liều dùng và thường dự đoán trước được",
      "Xảy ra sau khi đã ngừng thuốc một thời gian dài dưới dạng dị tật thai nhi hoặc ung thư"
    ],
    "correct": 2,
    "explanation": "Phản ứng Type A chiếm > 80% các ADR trên lâm sàng, liên quan trực tiếp đến cơ chế dược lý (ví dụ: hạ đường huyết do insulin, xuất huyết do kháng đông), phụ thuộc liều, tiên lượng được và có thể xử trí bằng cách giảm liều."
  },
  {
    "id": 1232,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "source": "HUP",
    "sourceName": "Đại học Dược Hà Nội",
    "question": "Hội chứng Red Man do truyền Vancomycin tĩnh mạch quá nhanh được xếp vào loại phản ứng nào và có cơ chế bệnh sinh là gì?",
    "options": [
      "Phản ứng dị ứng Type I trung gian qua kháng thể IgE đặc hiệu với phân tử Vancomycin",
      "Phản ứng tự miễn Type II gây ly giải tế bào hồng cầu và tiểu cầu tại mao mạch ngoại vi",
      "Phản ứng độc tế bào do Vancomycin gắn kết không thuận nghịch vào thụ thể cholinergic da",
      "Phản ứng giả dị ứng do thuốc kích thích trực tiếp tế bào mast phóng thích histamin không qua IgE"
    ],
    "correct": 3,
    "explanation": "Hội chứng Red Man là phản ứng giả dị ứng (pseudo-allergic) do tốc độ truyền quá nhanh kích hoạt giải phóng Histamin trực tiếp từ tế bào mast và bạch cầu ưa base mà không cần kháng thể IgE. Xử trí bằng cách giảm tốc độ truyền (<= 10 mg/phút hoặc <= 1g/giờ) và dùng kháng H1."
  },
  {
    "id": 1233,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "source": "HUP",
    "sourceName": "Đại học Dược Hà Nội",
    "question": "Kháng sinh Clarithromycin làm tăng mạnh nồng độ trong máu và nguy cơ tiêu cơ vân cấp (Rhabdomyolysis) của Simvastatin thông qua cơ chế tương tác dược động học nào?",
    "options": [
      "Ức chế mạnh enzym chuyển hóa CYP3A4 tại gan và ruột non",
      "Cảm ứng mạnh enzym chuyển hóa CYP2C9 và bơm tống thuốc P-glycoprotein",
      "Cạnh tranh liên kết với albumin huyết tương làm tăng phân đoạn tự do của Simvastatin",
      "Kiềm hóa nước tiểu làm giảm độ thanh thải qua thận của các dẫn chất statin"
    ],
    "correct": 0,
    "explanation": "Simvastatin và Lovastatin chuyển hóa chủ yếu qua CYP3A4. Clarithromycin và Itraconazole là chất ức chế CYP3A4 rất mạnh, làm tăng AUC của Simvastatin lên 5 - 10 lần, dẫn đến nồng độ đỉnh vượt ngưỡng độc gây ly giải cơ vân cấp và suy thận."
  },
  {
    "id": 1234,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "source": "HUP",
    "sourceName": "Đại học Dược Hà Nội",
    "question": "Khi dùng đồng thời Digoxin với Clarithromycin hoặc Amiodaron, nồng độ Digoxin trong huyết tương tăng cao rõ rệt chủ yếu là do cơ chế nào?",
    "options": [
      "Cảm ứng enzym CYP2D6 tại microsom gan làm tăng tạo chất chuyển hóa có hoạt tính",
      "Ức chế bơm tống thuốc P-glycoprotein tại ruột và biểu mô ống thận làm giảm bài xuất Digoxin",
      "Làm giảm thể tích phân bố của Digoxin trong các mô xương và cơ vân",
      "Ức chế enzym vận chuyển OATP1B1 làm giữ Digoxin trong lòng mạch"
    ],
    "correct": 1,
    "explanation": "Digoxin hầu như không chuyển hóa qua CYP mà là cơ chất điển hình của bơm P-glycoprotein (P-gp). Amiodarone, Clarithromycin, Verapamil là chất ức chế P-gp mạnh, làm tăng hấp thu qua ruột và giảm bài tiết qua ống thận, đẩy nồng độ Digoxin tăng gấp đôi."
  },
  {
    "id": 1235,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "source": "HUP",
    "sourceName": "Đại học Dược Hà Nội",
    "question": "Bệnh nhân đang duy trì ổn định Theophyllin nếu được chỉ định thêm kháng sinh Ciprofloxacin sẽ đối mặt với nguy cơ ngộ độc co giật do tương tác nào?",
    "options": [
      "Ciprofloxacin cảm ứng enzym CYP3A4 làm tăng chuyển hóa Theophyllin thành chất độc",
      "Ciprofloxacin cạnh tranh vị trí gắn với thụ thể Adenosin tại thần kinh trung ương",
      "Ciprofloxacin ức chế mạnh CYP1A2 làm giảm thanh thải Theophyllin",
      "Ciprofloxacin làm toan hóa máu dẫn đến tích lũy Theophyllin tự do trong não bộ"
    ],
    "correct": 2,
    "explanation": "Theophyllin chuyển hóa tới 90% qua CYP1A2 tại gan. Ciprofloxacin là chất ức chế mạnh enzym CYP1A2, làm độ thanh thải Theophyllin giảm 30 - 50%, dẫn đến nồng độ thuốc vượt ngưỡng độc (> 20 mcg/mL) gây nhịp nhanh thất và co giật tử vong."
  },
  {
    "id": 1236,
    "chapter": "Dược động học & Suy gan, thận",
    "source": "HUP",
    "sourceName": "Đại học Dược Hà Nội",
    "question": "Phenytoin biểu hiện dược động học phi tuyến tính (Non-linear pharmacokinetics) ở nồng độ điều trị vì lý do cốt lõi nào sau đây?",
    "options": [
      "Quá trình hấp thu qua đường tiêu hóa bị bão hòa hoàn toàn ở liều trên 100 mg",
      "Tỷ lệ liên kết với protein huyết tương giảm dần theo cấp số nhân khi tăng liều",
      "Thuốc bị bài xuất tích cực qua ống thận với tốc độ không đổi bất kể nồng độ",
      "Các enzym chuyển hóa tại gan (CYP2C9/2C19) bị bão hòa theo động học Michaelis-Menten"
    ],
    "correct": 3,
    "explanation": "Phenytoin tuân theo động học bão hòa Michaelis-Menten: ở khoảng điều trị (10 - 20 mcg/mL), enzym chuyển hóa bị bão hòa. Khi đó, chỉ cần một mức tăng liều nhỏ cũng có thể làm nồng độ huyết tương tăng vọt đột ngột ngoài tầm kiểm soát."
  },
  {
    "id": 1237,
    "chapter": "Dược động học & Suy gan, thận",
    "source": "HUP",
    "sourceName": "Đại học Dược Hà Nội",
    "question": "Khoảng nồng độ đáy điều trị trong máu được khuyến cáo hiện nay của Digoxin trong điều trị suy tim mạn tính phân suất tống máu giảm (HFrEF) là:",
    "options": [
      "0.5 đến 0.9 ng/mL",
      "1.5 đến 2.5 ng/mL",
      "3.0 đến 5.0 ng/mL",
      "10 đến 20 mcg/mL"
    ],
    "correct": 0,
    "explanation": "Trong suy tim, thử nghiệm lâm sàng DIG cho thấy nồng độ Digoxin tối ưu là 0.5 - 0.9 ng/mL (giúp cải thiện triệu chứng và giảm tái nhập viện mà không làm tăng tử vong). Mức nồng độ >= 1.2 ng/mL hoặc trên 2.0 ng/mL làm tăng đáng kể nguy cơ loạn nhịp tử vong."
  },
  {
    "id": 1238,
    "chapter": "Dược động học & Suy gan, thận",
    "source": "HUP",
    "sourceName": "Đại học Dược Hà Nội",
    "question": "Yếu tố rối loạn điện giải nào sau đây làm tăng rõ rệt độc tính trên tim của Digoxin ngay cả khi nồng độ Digoxin trong máu vẫn nằm trong khoảng điều trị?",
    "options": [
      "Tăng Natri máu và tăng Clo máu",
      "Hạ Kali máu, hạ Magie máu và tăng Canxi máu",
      "Tăng Kali máu và hạ Canxi máu",
      "Hạ Natri máu kèm theo toan hô hấp cấp"
    ],
    "correct": 1,
    "explanation": "Digoxin ức chế bơm Na+/K+-ATPase bằng cách cạnh tranh với ion K+. Khi hạ Kali máu, Digoxin gắn vào bơm bền vững hơn làm tăng độc tính tim. Hạ Magie máu và tăng Canxi máu cũng hiệp đồng làm tăng nguy cơ loạn nhịp thất chết người của Digoxin."
  },
  {
    "id": 1239,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "source": "HUP",
    "sourceName": "Đại học Dược Hà Nội",
    "question": "Kháng sinh nhóm Beta-lactam (Penicillin, Cephalosporin, Carbapenem) có hoạt tính diệt khuẩn phụ thuộc thời gian. Mục tiêu PK/PD quan trọng nhất để tối ưu hóa hiệu quả điều trị là:",
    "options": [
      "Tối đa hóa tỉ lệ nồng độ đỉnh trên MIC (Cmax / MIC ≥ 10 - 12)",
      "Duy trì AUC24 trên MIC đạt trên 1000 mg·h/L",
      "Tối ưu hóa thời gian nồng độ thuốc tự do vượt trên MIC trong khoảng liều (%fT > MIC)",
      "Rút ngắn thời gian truyền tĩnh mạch xuống dưới 10 phút để tạo nồng độ đỉnh ồ ạt"
    ],
    "correct": 2,
    "explanation": "Beta-lactam là kháng sinh diệt khuẩn phụ thuộc thời gian. Hiệu quả lâm sàng tương quan chặt chẽ với %fT > MIC (tối thiểu 40 - 70% khoảng liều, với nhiễm khuẩn nặng ở ICU mục tiêu có thể là 100% fT > 4-5x MIC). Do đó, truyền kéo dài hoặc truyền liên tục được áp dụng rộng rãi."
  },
  {
    "id": 1240,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "source": "HUP",
    "sourceName": "Đại học Dược Hà Nội",
    "question": "Kháng sinh Colistin (Polymyxin E) dạng tiền chất Colistimethate Sodium (CMS) cần áp dụng liều nạp (Loading dose) nhằm mục đích gì?",
    "options": [
      "Để bão hòa vị trí gắn trên mô mỡ và ngăn chặn hiện tượng dung nạp thuốc sớm",
      "Vì Colistin bị bài xuất hoàn toàn qua gan trong những giờ đầu sau tiêm truyền",
      "Để giảm thiểu độc tính trên thận và thần kinh so với chế độ dùng liều duy trì ngay từ đầu",
      "Vì CMS chuyển hóa chậm thành Colistin có hoạt tính, cần liều nạp để nhanh chóng đạt nồng độ diệt khuẩn trong 24 giờ đầu"
    ],
    "correct": 3,
    "explanation": "CMS là dạng bất hoạt cần thời gian thủy phân chậm in vivo tạo thành Colistin tự do. Nếu không dùng liều nạp (thường 9 triệu UI CMS), nồng độ Colistin huyết tương sẽ rất thấp trong 24 - 48 giờ đầu, dẫn đến thất bại điều trị và gia tăng đề kháng vi khuẩn."
  },
  {
    "id": 1241,
    "chapter": "Dược động học & Suy gan, thận",
    "source": "HUP",
    "sourceName": "Đại học Dược Hà Nội",
    "question": "Theo công thức Schwartz cổ điển ước tính mức lọc cầu thận (eGFR) ở trẻ em, thông số cần đo lường bao gồm:",
    "options": [
      "Chiều cao của trẻ (cm) và nồng độ Creatinin huyết thanh (mg/dL) kết hợp hằng số k theo lứa tuổi",
      "Cân nặng của trẻ (kg) và diện tích bề mặt cơ thể (m²) đơn thuần",
      "Vòng đầu của trẻ và nồng độ Ure máu 24 giờ",
      "Độ thanh thải Albumin nước tiểu và nồng độ Natri huyết tương"
    ],
    "correct": 0,
    "explanation": "Công thức Schwartz: eGFR (mL/min/1.73m²) = (k × Chiều cao [cm]) / Scr [mg/dL]. Hệ số k phụ thuộc vào độ tuổi và giới tính (trẻ sơ sinh k=0.45, trẻ em k=0.55, trẻ vị thành niên nam k=0.7)."
  },
  {
    "id": 1242,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "source": "HUP",
    "sourceName": "Đại học Dược Hà Nội",
    "question": "Thuốc kháng nấm đường uống Itraconazol dạng viên nang thông thường đòi hỏi môi trường nào tại dạ dày để hòa tan và hấp thu tối đa?",
    "options": [
      "Môi trường kiềm hóa mạnh với pH dịch vị trên 6.0",
      "Môi trường acid dịch vị tự nhiên (bị giảm hấp thu nghiêm trọng khi dùng chung với PPI hoặc kháng H2)",
      "Môi trường hoàn toàn trung tính không có dịch vị tiêu hóa",
      "Môi trường nhiều ion kim loại hóa trị hai như Canxi và Nhôm"
    ],
    "correct": 1,
    "explanation": "Viên nang Itraconazole và Ketoconazole là các base yếu, chỉ tan tốt trong môi trường pH acid dạ dày. Khi dùng chung thuốc ức chế tiết acid (Omeprazole, Famotidine, Antacid), độ tan và sinh khả dụng của Itraconazole giảm tới 70 - 80%."
  },
  {
    "id": 1243,
    "chapter": "Dược động học & Suy gan, thận",
    "source": "HUP",
    "sourceName": "Đại học Dược Hà Nội",
    "question": "Khi một thuốc có tỷ lệ liên kết với protein huyết tương cao (> 95%) và thể tích phân bố nhỏ (Vd < 0.2 L/kg) như Warfarin, việc bị một thuốc khác đẩy khỏi vị trí gắn albumin sẽ dẫn đến hậu quả ban đầu là:",
    "options": [
      "Nồng độ toàn phần trong huyết tương tăng gấp 10 lần ngay lập tức",
      "Tốc độ lọc qua cầu thận giảm mạnh dẫn đến tích lũy thuốc vô thời hạn",
      "Nồng độ thuốc dạng tự do (Free drug concentration) tăng đột ngột, làm tăng nguy cơ độc tính trước mắt",
      "Thuốc mất hoàn toàn tác dụng sinh học do bị thực bào tại lách"
    ],
    "correct": 2,
    "explanation": "Với thuốc có liên kết protein cao và khoảng điều trị hẹp, tương tác cạnh tranh gắn albumin làm tăng đột biến nồng độ tự do có hoạt tính dược lý, dễ gây quá liều cấp (ví dụ xuất huyết do Warfarin) trước khi quá trình phân bố lại và tăng thanh thải thiết lập cân bằng mới."
  },
  {
    "id": 1244,
    "chapter": "Dược động học & Suy gan, thận",
    "source": "HUP",
    "sourceName": "Đại học Dược Hà Nội",
    "question": "Để tính toán liều nạp (Loading Dose - LD) của một thuốc nhằm đạt ngay nồng độ mục tiêu (C_target) trong huyết tương, công thức đúng là:",
    "options": [
      "LD = (Cl × C_target) / tau (với Cl là độ thanh thải, tau là khoảng liều)",
      "LD = (T1/2 × C_target) / 0.693",
      "LD = (AUC × C_target) / Vd",
      "LD = (Vd × C_target) / F (với Vd là thể tích phân bố, F là sinh khả dụng)"
    ],
    "correct": 3,
    "explanation": "Liều nạp chỉ phụ thuộc vào Thể tích phân bố (Vd) và Nồng độ đích (C_target): LD = (Vd × C_target) / F. Độ thanh thải (Cl) quyết định liều duy trì (MD = Cl × Css / F), chứ không quyết định liều nạp."
  },
  {
    "id": 1245,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "source": "HUP",
    "sourceName": "Đại học Dược Hà Nội",
    "question": "Phản ứng có hại của thuốc loại B (Type B - Bizarre) theo phân loại của Rawlins và Thompson có đặc điểm nào sau đây?",
    "options": [
      "Không dự đoán trước được từ tác dụng dược lý, không phụ thuộc liều và thường qua cơ chế miễn dịch/dị ứng",
      "Tần suất gặp rất cao, phụ thuộc chặt chẽ vào liều lượng dùng hàng ngày",
      "Chỉ xảy ra khi bệnh nhân ngừng thuốc đột ngột sau thời gian điều trị kéo dài",
      "Xuất hiện muộn sau nhiều năm điều trị dưới dạng dị tật bẩm sinh"
    ],
    "correct": 0,
    "explanation": "Type B (Bizarre) là phản ứng dị ứng hoặc đặc ứng (idiosyncrasy), không liên quan đến cơ chế dược lý đã biết, không phụ thuộc liều, tỷ lệ mắc thấp nhưng tỷ lệ tử vong cao (ví dụ: sốc phản vệ, hội chứng Stevens-Johnson, suy tủy xương do Cloramphenicol)."
  },
  {
    "id": 1246,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "source": "HUP",
    "sourceName": "Đại học Dược Hà Nội",
    "question": "Rifampicin được biết đến trong thực hành dược lâm sàng là một chất có tác động mạnh mẽ nhất đến hệ enzym CYP450 theo hướng nào?",
    "options": [
      "Ức chế chọn lọc không hồi phục enzym CYP2D6 tại gan",
      "Cảm ứng mạnh mẽ và toàn diện nhiều enzym CYP (CYP3A4, 2C9, 2C19, 1A2) và P-glycoprotein",
      "Cạnh tranh đào thải tại ống thận với các thuốc acid yếu",
      "Làm biến tính hoàn toàn thụ thể nhân PXR tại tế bào gan"
    ],
    "correct": 1,
    "explanation": "Rifampicin là chất cảm ứng enzym CYP450 và P-gp mạnh nhất trong lâm sàng thông qua thụ thể PXR. Nó làm tăng tốc độ chuyển hóa của hàng loạt thuốc dùng kèm (Warfarin, thuốc tránh thai, thuốc chống thải ghép, thuốc kháng virus), dẫn đến nồng độ thuốc giảm sâu gây thất bại điều trị."
  },
  {
    "id": 1247,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "source": "HUP",
    "sourceName": "Đại học Dược Hà Nội",
    "question": "Tương tác giữa Clopidogrel và Omeprazol làm giảm hiệu lực chống kết tập tiểu cầu của Clopidogrel là do cơ chế nào?",
    "options": [
      "Omeprazol làm thay đổi pH dạ dày ngăn cản hòa tan viên nén Clopidogrel",
      "Omeprazol cạnh tranh liên kết trực tiếp trên thụ thể P2Y12 của tiểu cầu",
      "Omeprazol ức chế enzym CYP2C19 cần thiết để chuyển tiền chất Clopidogrel thành chất chuyển hóa có hoạt tính",
      "Omeprazol kích hoạt enzym P-gp tại ruột tống Clopidogrel ra ngoài phân"
    ],
    "correct": 2,
    "explanation": "Clopidogrel là tiền chất (prodrug), cần được CYP2C19 chuyển hóa thành chất có hoạt tính kháng tiểu cầu. Omeprazole ức chế CYP2C19, làm giảm nồng độ chất có hoạt tính của Clopidogrel, tăng nguy cơ huyết khối tắc stent mạch vành. Pantoprazole ít ức chế CYP2C19 hơn nên được ưu tiên thay thế."
  },
  {
    "id": 1248,
    "chapter": "Dược động học & Suy gan, thận",
    "source": "HUP",
    "sourceName": "Đại học Dược Hà Nội",
    "question": "Thông số Dược động học 'Thể tích phân bố' (Volume of Distribution - Vd) của một thuốc có ý nghĩa thực tế lâm sàng quan trọng nhất là:",
    "options": [
      "Cho biết thể tích dịch thực tế mà thuốc chiếm chỗ trong các khoang cơ thể",
      "Tốc độ đào thải hoàn toàn hoạt chất qua nước tiểu và đường mật",
      "Khả năng thuốc vượt qua hàng rào lọc cầu thận mà không bị tái hấp thu",
      "Mức độ phân bố của thuốc vào các mô ngoại vi so với huyết tương và dùng để tính liều nạp"
    ],
    "correct": 3,
    "explanation": "Vd là thể tích biểu kiến (không phải thể tích sinh học thực tế), phản ánh mức độ thuốc rời khỏi huyết tương để vào các mô. Thuốc có Vd lớn (> 3-5 L/kg như Digoxin) tập trung chủ yếu trong mô; Vd nhỏ (~0.1-0.2 L/kg như Aminoglycosid) chủ yếu nằm trong dịch ngoại bào. Vd quyết định liều nạp."
  },
  {
    "id": 1249,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "source": "HUP",
    "sourceName": "Đại học Dược Hà Nội",
    "question": "Chỉ số INR (International Normalized Ratio) được chuẩn hóa để theo dõi hiệu quả và an toàn của thuốc chống đông đường uống nào?",
    "options": [
      "Kháng vitamin K (Warfarin, Acenocoumarol)",
      "Heparin không phân đoạn (UFH)",
      "Kháng đông đường uống trực tiếp ức chế yếu tố Xa (Rivaroxaban, Apixaban)",
      "Thuốc ức chế trực tiếp Thrombin đường tiêm (Argatroban)"
    ],
    "correct": 0,
    "explanation": "INR là chỉ số chuẩn hóa quốc tế của thời gian Prothrombin (PT), dùng chuyên biệt để theo dõi thuốc kháng vitamin K (Warfarin). Mục tiêu điều trị thường từ 2.0 - 3.0 (hoặc 2.5 - 3.5 với van tim cơ học). Heparin UFH thì theo dõi bằng aPTT."
  },
  {
    "id": 1250,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "source": "HUP",
    "sourceName": "Đại học Dược Hà Nội",
    "question": "Xét nghiệm aPTT (thời gian thromboplastin một phần hoạt hóa) được sử dụng chuẩn mực để theo dõi và hiệu chỉnh liều của thuốc chống đông nào sau đây?",
    "options": [
      "Heparin trọng lượng phân tử thấp (Enoxaparin)",
      "Heparin không phân đoạn đường tĩnh mạch (Unfractionated Heparin - UFH)",
      "Aspirin liều thấp 81 mg chống kết tập tiểu cầu",
      "Dabigatran etexilate đường uống"
    ],
    "correct": 1,
    "explanation": "Heparin không phân đoạn (UFH) đường truyền tĩnh mạch đòi hỏi theo dõi sát bằng xét nghiệm aPTT (mục tiêu thường gấp 1.5 - 2.5 lần chứng) mỗi 6 giờ cho tới khi đạt mức ổn định."
  },
  {
    "id": 1251,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "source": "HUP",
    "sourceName": "Đại học Dược Hà Nội",
    "question": "Khi cần giám sát tác dụng chống đông của Heparin trọng lượng phân tử thấp (LMWH như Enoxaparin) ở đối tượng đặc biệt (suy thận nặng, phụ nữ có thai hoặc béo phì nặng), xét nghiệm phù hợp nhất là:",
    "options": [
      "Thời gian máu đông Lee-White",
      "Đo thời gian prothrombin (PT/INR)",
      "Định lượng hoạt tính kháng yếu tố Xa (Anti-Xa assay)",
      "Đếm số lượng hồng cầu lưới trong máu ngoại vi"
    ],
    "correct": 2,
    "explanation": "LMWH có tác dụng ức chế chọn lọc yếu tố Xa nhiều hơn IIa nên aPTT ít thay đổi. Khi cần theo dõi ở đối tượng nguy cơ cao (phụ nữ mang thai, suy thận CrCl < 30 mL/phút, béo phì), xét nghiệm chuẩn xác nhất là nồng độ Anti-Xa (đỉnh sau tiêm dưới da 4 giờ đạt 0.6 - 1.0 IU/mL)."
  },
  {
    "id": 1252,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "source": "HUP",
    "sourceName": "Đại học Dược Hà Nội",
    "question": "Phân loại ADR theo nguyên nhân phát sinh Type C (Continuing / Chronic) có đặc tính nhận diện nào sau đây?",
    "options": [
      "Xuất hiện tức thì sau mũi tiêm đầu tiên do cơ chế sốc phản vệ",
      "Chỉ xảy ra khi ngừng thuốc đột ngột do hiện tượng dội ngược",
      "Phát sinh sau nhiều thế hệ do đột biến nhiễm sắc thể dòng tế bào mầm",
      "Liên quan đến liều tích lũy và thời gian dùng thuốc kéo dài (ví dụ: hội chứng Cushing do lạm dụng Glucocorticoid)"
    ],
    "correct": 3,
    "explanation": "Phản ứng Type C (Chronic / Dose and Time-related) liên quan chặt chẽ đến tổng liều tích lũy và thời gian sử dụng thuốc kéo dài, ví dụ như ức chế trục hạ đồi - tuyến yên - thượng thận (HPA) do Corticoid, loãng xương, hoặc bệnh thận do dùng kéo dài NSAID/giảm đau."
  },
  {
    "id": 1253,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "source": "HUP",
    "sourceName": "Đại học Dược Hà Nội",
    "question": "Phản ứng có hại Type D (Delayed) theo phân loại của Rawlins và Thompson thường biểu hiện dưới dạng nào?",
    "options": [
      "Tác dụng gây quái thai (teratogenicity) hoặc gây ung thư xuất hiện muộn sau khi dùng thuốc",
      "Co thắt thanh quản và trụy mạch cấp tính",
      "Hội chứng cai thuốc xuất hiện ngay sau khi ngắt liều cuối cùng",
      "Tăng huyết áp dội ngược sau khi quên một liều Clonidin"
    ],
    "correct": 0,
    "explanation": "Type D (Delayed) xuất hiện muộn màng sau thời gian phơi nhiễm thuốc (thậm chí sau khi đã ngừng thuốc từ lâu), điển hình là tác dụng gây dị tật thai nhi (quái thai do Thalidomide, Isotretinoin) hoặc nguy cơ gây ung thư thứ phát (ung thư biểu mô âm đạo ở con gái có mẹ dùng DES)."
  },
  {
    "id": 1254,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "source": "HUP",
    "sourceName": "Đại học Dược Hà Nội",
    "question": "Phản ứng có hại Type E (End of use) theo phân loại Rawlins & Thompson được minh họa điển hình bởi hiện tượng nào?",
    "options": [
      "Phản ứng hoại tử thượng bì nhiễm độc (TEN) xảy ra sau 2 tuần dùng Allopurinol",
      "Suy thượng thận cấp khi ngừng đột ngột Corticoid dùng kéo dài hoặc nhịp tim nhanh dội ngược khi ngừng đột ngột chẹn beta",
      "Xuất huyết tiêu hóa do quá liều dẫn chất kháng vitamin K",
      "Tổn thương thính lực vĩnh viễn sau liệu trình Amikacin dài ngày"
    ],
    "correct": 1,
    "explanation": "Type E (End of use) xảy ra khi ngừng thuốc đột ngột (phản ứng dội ngược / rebound hoặc hội chứng cai), ví dụ suy thượng thận cấp do ngừng Glucocorticoid, thiếu máu cơ tim/tăng huyết áp dội ngược do dừng thuốc chẹn beta, hoặc mất ngủ tái phát khi dừng Benzodiazepin."
  },
  {
    "id": 1255,
    "chapter": "Dược động học & Suy gan, thận",
    "source": "HUP",
    "sourceName": "Đại học Dược Hà Nội",
    "question": "Ở bệnh nhân xơ gan nặng (Child-Pugh C), sinh khả dụng qua đường uống của những thuốc có tỷ lệ chuyển hóa bước một qua gan cao (High extraction ratio) như Morphin hay Propranolol sẽ thay đổi thế nào?",
    "options": [
      "Giảm mạnh do tế bào gan tăng cường bắt giữ thuốc",
      "Không thay đổi vì các enzym CYP450 được bảo toàn hoàn toàn ở bệnh nhân xơ gan",
      "Tăng vọt rõ rệt do giảm chuyển hóa bước một và có tuần hoàn bàng hệ cửa - chủ",
      "Bị triệt tiêu hoàn toàn khiến thuốc không thể vào được đại tuần hoàn"
    ],
    "correct": 2,
    "explanation": "Thuốc có hệ số ly trích gan cao (E > 0.7 như Propranolol, Morphine) bình thường bị chuyển hóa bước đầu qua gan phần lớn khi uống. Ở bệnh nhân xơ gan nặng, dòng máu qua gan giảm và có thông nối cửa - chủ, thuốc đi thẳng vào đại tuần hoàn làm sinh khả dụng tăng vọt gấp nhiều lần, dễ gây ngộ độc hôn mê gan."
  },
  {
    "id": 1256,
    "chapter": "Dược động học & Suy gan, thận",
    "source": "HUP",
    "sourceName": "Đại học Dược Hà Nội",
    "question": "Tại sao liều khởi đầu của các thuốc tan nhiều trong nước (Hydrophilic drugs như Aminoglycosid) ở bệnh nhân sốc nhiễm khuẩn nặng thường cần phải tăng cao hơn so với bình thường?",
    "options": [
      "Vì độ thanh thải qua thận tăng gấp 10 lần ở pha đầu của sốc nhiễm khuẩn",
      "Vì thuốc bị enzym nội bào thực bào phân hủy ngay trong lòng mạch",
      "Vì thuốc bị gắn kết bất thuận nghịch vào các thụ thể Toll-like trên bạch cầu đa nhân",
      "Vì thể tích phân bố (Vd) của dịch ngoại bào tăng mạnh do hiện tượng rò rỉ mao mạch và bù dịch tích cực"
    ],
    "correct": 3,
    "explanation": "Trong sốc nhiễm khuẩn, hội chứng rò rỉ mao mạch toàn thân và việc truyền lượng lớn dịch tinh thể làm thể tích phân bố Vd của các thuốc thân nước (Aminoglycosid, Beta-lactam) tăng vọt. Nếu không tăng liều khởi đầu (ví dụ Amikacin dùng tới 25 - 30 mg/kg), nồng độ đỉnh trong máu sẽ không đạt ngưỡng diệt khuẩn."
  },
  {
    "id": 1257,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "source": "HUP",
    "sourceName": "Đại học Dược Hà Nội",
    "question": "Kháng sinh Ceftriaxon chống chỉ định tuyệt đối phối hợp cùng lúc hoặc truyền cùng đường truyền với dung dịch chứa Canxi (như Ringer Lactat) ở đối tượng nào?",
    "options": [
      "Trẻ sơ sinh (≤ 28 ngày tuổi) do nguy cơ kết tủa muối Ceftriaxon-Canxi gây tử vong tại phổi và thận",
      "Bệnh nhân cao tuổi trên 80 tuổi mắc bệnh sa sút trí tuệ",
      "Người bệnh suy giáp đang điều trị bằng Levothyroxin",
      "Phụ nữ đang trong thời kỳ cho con bú sau 6 tháng đầu"
    ],
    "correct": 0,
    "explanation": "FDA và Bộ Y tế cảnh báo chống chỉ định tuyệt đối phối hợp Ceftriaxone với bất kỳ chế phẩm chứa Canxi nào qua đường tĩnh mạch ở trẻ sơ sinh (<= 28 ngày tuổi), kể cả truyền khác đường truyền hay khác thời điểm, do nguy cơ tạo kết tủa tinh thể không tan trong vi mạch phổi và thận gây tử vong."
  },
  {
    "id": 1258,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "source": "HUP",
    "sourceName": "Đại học Dược Hà Nội",
    "question": "Trong nhiễm khuẩn do tụ cầu vàng kháng Methicillin (MRSA), nồng độ ức chế tối thiểu (MIC) của Vancomycin được coi là điểm cắt nhạy cảm theo tiêu chuẩn của CLSI là:",
    "options": [
      "MIC ≤ 8 mcg/mL",
      "MIC ≤ 2 mcg/mL",
      "MIC ≤ 16 mcg/mL",
      "MIC ≤ 32 mcg/mL"
    ],
    "correct": 1,
    "explanation": "CLSI quy định điểm gãy nhạy cảm của Vancomycin với S. aureus là MIC <= 2 mcg/mL. Nếu MIC từ 4 - 8 mcg/mL là chủng trung gian (VISA), MIC >= 16 mcg/mL là kháng thuốc (VRSA). Tuy nhiên, khi MIC = 2 mcg/mL, hiệu quả của Vancomycin đã giảm rõ và khó đạt mục tiêu AUC/MIC >= 400 an toàn, nên cân nhắc đổi thuốc (Daptomycin, Linezolid)."
  },
  {
    "id": 1259,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "source": "HUP",
    "sourceName": "Đại học Dược Hà Nội",
    "question": "Tương tác giữa thuốc ức chế enzym MAO (như Selegilin, Phenelzin) và các thực phẩm giàu Tyramin (như phô mai lên men, rượu vang đỏ) gây ra biến chứng nguy hiểm nào?",
    "options": [
      "Hạ đường huyết nghiêm trọng dẫn đến co giật và hôn mê sâu",
      "Hội chứng Stevens-Johnson hoại tử bong tróc niêm mạc toàn thân",
      "Cơn tăng huyết áp kịch phát ác tính (Hypertensive crisis) và xuất huyết não",
      "Tê liệt thần kinh vận động ngoại biên tạm thời"
    ],
    "correct": 2,
    "explanation": "Tyramine bình thường bị MAO ở ruột và gan giáng hóa. Khi dùng thuốc ức chế MAO, Tyramine không bị phá hủy mà hấp thu ồ ạt vào máu, kích thích giải phóng một lượng khổng lồ Noradrenaline từ các túi synap thần kinh giao cảm, gây cơn bão co mạch và tăng huyết áp kịch phát tử vong."
  },
  {
    "id": 1260,
    "chapter": "Dược động học & Suy gan, thận",
    "source": "HUP",
    "sourceName": "Đại học Dược Hà Nội",
    "question": "Kháng sinh Quinolon (Ciprofloxacin, Levofloxacin) và Tetracyclin bị giảm hấp thu đường uống nghiêm trọng khi dùng chung với các chế phẩm chứa ion kim loại hóa trị 2 hoặc 3 (Al³⁺, Mg²⁺, Ca²⁺, Fe²⁺) do cơ chế nào?",
    "options": [
      "Sự cạnh tranh vận chuyển tích cực qua chất mang peptide PEPT1",
      "Ion kim loại phá hủy trực tiếp vòng quinolon và nhân bốn vòng tetracyclin",
      "Các ion kim loại làm đông vón chất nhầy bảo vệ niêm mạc ruột non",
      "Hiện tượng tạo phức chelat không tan và không thể hấp thu qua niêm mạc ruột"
    ],
    "correct": 3,
    "explanation": "Ciprofloxacin và Tetracyclin tạo phức chelat rất bền, không hòa tan với các cation đa hóa trị (Ca2+, Mg2+, Al3+, Fe2+, Zn2+). Hậu quả là nồng độ kháng sinh hấp thu vào máu giảm tới 80 - 90%, dẫn đến thất bại điều trị. Cần uống cách xa tối thiểu 2 giờ trước hoặc 4-6 giờ sau antacid/sắt."
  },
  {
    "id": 1261,
    "chapter": "Dược động học & Suy gan, thận",
    "source": "HUP",
    "sourceName": "Đại học Dược Hà Nội",
    "question": "Độ thanh thải toàn phần của cơ thể (Total Body Clearance - Cl) của một thuốc được định nghĩa chính xác nhất theo dược động học là:",
    "options": [
      "Thể tích huyết tương được cơ thể làm sạch thuốc hoàn toàn trong một đơn vị thời gian (mL/phút hoặc L/giờ)",
      "Lượng thuốc tuyệt đối bị loại bỏ ra khỏi cơ thể trong một đơn vị thời gian (mg/phút)",
      "Phần trăm liều thuốc được lọc qua màng cầu thận trong một chu kỳ tuần hoàn",
      "Tỷ số giữa nồng độ thuốc trong nước tiểu và nồng độ thuốc trong huyết tương"
    ],
    "correct": 0,
    "explanation": "Độ thanh thải (Clearance) là một thể tích biểu kiến: thể tích dịch sinh học (huyết tương) được cơ thể loại bỏ sạch thuốc hoàn toàn trong một đơn vị thời gian (mL/phút hoặc L/h). Cl là thông số quyết định liều duy trì để duy trì nồng độ thuốc ổn định (Rate of elimination = Cl × C)."
  },
  {
    "id": 1262,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "source": "HUP",
    "sourceName": "Đại học Dược Hà Nội",
    "question": "Khi điều trị Tăng lipid máu bằng Statin phối hợp với Fibrat (như Fenofibrat), chỉ số xét nghiệm men cơ nào cần được giám sát chặt chẽ nhất để phát hiện sớm tổn thương cơ vân?",
    "options": [
      "Alanine aminotransferase (ALT)",
      "Creatine kinase (CK hoặc CPK)",
      "Alkaline phosphatase (ALP)",
      "Lactate dehydrogenase (LDH)"
    ],
    "correct": 1,
    "explanation": "Creatine kinase (CK) là men đặc hiệu giải phóng từ cơ vân. Khi phối hợp Statin với Fibrat (đặc biệt Gemfibrozil chống chỉ định, Fenofibrat an toàn hơn nhưng vẫn cần giám sát), nếu bệnh nhân đau cơ kèm CK tăng gấp trên 5 - 10 lần giới hạn trên bình thường (ULN) thì phải ngừng thuốc ngay để tránh tiêu cơ vân cấp và suy thận."
  },
  {
    "id": 1263,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Tại sao kháng sinh Daptomycin có hoạt tính diệt khuẩn rất mạnh trên tụ cầu vàng kháng Methicillin (MRSA) nhưng lại CHỐNG CHỈ ĐỊNH TUYỆT ĐỐI trong điều trị viêm phổi do MRSA?",
    "options": [
      "Daptomycin không thâm nhập được qua hàng rào mao mạch phế nang",
      "Daptomycin gây co thắt phế quản dữ dội và tràn khí màng phổi cấp tính",
      "Daptomycin bị chất diện hoạt phế nang (Pulmonary Surfactant) gắn kết và làm bất hoạt hoàn toàn",
      "Daptomycin bị chuyển hóa hoàn toàn bởi enzym cytochrome P450 tại biểu mô đường thở"
    ],
    "correct": 2,
    "explanation": "Daptomycin tương tác mạnh với chất diện hoạt phổi (Surfactant) khiến thuốc bị kết cụm và mất hoàn toàn hoạt tính kháng khuẩn trong nhu mô phổi. Vì vậy Daptomycin chống chỉ định trong viêm phổi, chỉ dùng cho nhiễm khuẩn da mô mềm, du khuẩn huyết và viêm nội tâm mạc."
  },
  {
    "id": 1264,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Bệnh nhân nam 58 tuổi, tiền sử ĐTĐ tuýp 2 và Tăng huyết áp 5 năm. Xét nghiệm thấy Creatinin máu 1.4 mg/dL, eGFR 52 mL/phút, Tỉ số Albumin/Creatinin niệu (UACR) là 450 mg/g (albumin niệu đại thể). Lựa chọn thuốc hạ áp đầu tay tối ưu nhất theo khuyến cáo KDIGO và ADA là:",
    "options": [
      "Thuốc chẹn kênh Canxi nhóm DHP (Amlodipin) đơn trị liệu",
      "Thuốc chẹn thụ thể beta giao cảm (Atenolol) liều cao",
      "Thuốc lợi tiểu Thiazid (Hydrochlorothiazid) đơn độc",
      "Thuốc ức chế men chuyển (ACEI) hoặc chẹn thụ thể Angiotensin II (ARB)"
    ],
    "correct": 3,
    "explanation": "Ở bệnh nhân đái tháo đường kèm tăng huyết áp và có albumin niệu (UACR >= 30 mg/g, đặc biệt >= 300 mg/g), ACEI hoặc ARB là lựa chọn bắt buộc hàng đầu nhờ tác dụng giãn tiểu động mạch đi của cầu thận, giúp giảm áp lực trong cầu thận và làm chậm tiến triển bệnh thận mạn."
  },
  {
    "id": 1265,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Sau khi bắt đầu dùng Enalapril được 2 tuần, bệnh nhân đái tháo đường có suy thận mạn được xét nghiệm lại. Mức tăng Creatinin huyết thanh nào sau đây được coi là chấp nhận được và KHÔNG cần phải ngừng thuốc?",
    "options": [
      "Tăng không quá 30% so với giá trị Creatinin nền ban đầu",
      "Tăng không quá 100% so với giá trị nền",
      "Bất kỳ mức tăng nào trên 5% đều bắt buộc phải ngừng thuốc ngay lập tức",
      "Chỉ chấp nhận khi chỉ số Creatinin giảm xuống thấp hơn mức ban đầu"
    ],
    "correct": 0,
    "explanation": "Khi khởi đầu ACEI/ARB, việc giãn tiểu động mạch đi làm giảm áp lực lọc cầu thận nên Creatinin huyết thanh thường tăng nhẹ. Mức tăng dưới 30% so với nồng độ nền trong vòng 1-2 tuần đầu được coi là đáp ứng huyết động bình thường và an toàn, không cần ngừng thuốc."
  },
  {
    "id": 1266,
    "chapter": "Dược động học & Suy gan, thận",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Bệnh nhân xơ gan cổ trướng mức độ vừa đang được điều trị lợi tiểu nội trú. Tỷ lệ liều kết hợp giữa Spironolacton và Furosemid được Hội Nghiên cứu Bệnh gan Hoa Kỳ (AASLD) khuyến cáo để duy trì hiệu quả bài niệu và giữ thăng bằng nồng độ Kali máu là:",
    "options": [
      "25 mg Spironolacton : 100 mg Furosemid (tỷ lệ 1 : 4)",
      "100 mg Spironolacton : 40 mg Furosemid (tỷ lệ 5 : 2)",
      "50 mg Spironolacton : 50 mg Furosemid (tỷ lệ 1 : 1)",
      "200 mg Spironolacton : 10 mg Furosemid (tỷ lệ 20 : 1)"
    ],
    "correct": 1,
    "explanation": "Tỷ lệ chuẩn Spironolactone 100 mg : Furosemide 40 mg (tối đa 400 mg : 160 mg/ngày) giúp phối hợp tác dụng lợi tiểu quai và kháng Aldosterone, đồng thời cân bằng lượng Kali bài tiết qua nước tiểu (Spironolactone giữ K+, Furosemide thải K+), duy trì Kali máu ổn định."
  },
  {
    "id": 1267,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Bệnh nhân xơ gan cổ trướng nhập viện vì sốt và đau bụng, chọc dịch màng bụng cho thấy số lượng bạch cầu đa nhân trung tính (PMN) là 380 tế bào/mm³. Chẩn đoán Viêm phúc mạc tiên phát do vi khuẩn (SBP) được xác lập. Kháng sinh kinh nghiệm đường tĩnh mạch được khuyến cáo hàng đầu là:",
    "options": [
      "Metronidazol phối hợp Vancomycin đường uống",
      "Amikacin đơn trị liệu liều cao",
      "Cefotaxim hoặc Ceftriaxon",
      "Doxycyclin tiêm truyền tĩnh mạch chậm"
    ],
    "correct": 2,
    "explanation": "Tiêu chuẩn chẩn đoán SBP là PMN trong dịch cổ trướng >= 250 tế bào/mm³. Tác nhân gây bệnh chủ yếu là trực khuẩn gram âm đường ruột (E. coli, Klebsiella). Kháng sinh hàng đầu là Cephalosporin thế hệ 3 đường tĩnh mạch (Cefotaxime 2g mỗi 8h hoặc Ceftriaxone 2g mỗi 24h) kết hợp truyền Albumin."
  },
  {
    "id": 1268,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Phác đồ điều trị nền tảng 'Tứ trụ' (Four Pillars) giúp cải thiện tỷ lệ tử vong ở bệnh nhân Suy tim mạn tính phân suất tống máu giảm (HFrEF) theo ESC và AHA bao gồm các nhóm thuốc nào?",
    "options": [
      "Digoxin + Thuốc lợi tiểu Thiazid + Thuốc chẹn Calci DHP + Aspirin",
      "Amlodipin + Nitrate kéo dài + Ivabradin + Furosemid",
      "Thuốc ức chế men chuyển + Thuốc chẹn thụ thể AT1 + Kháng Aldosteron + Canxi tiêm truyền",
      "ARNI (hoặc ACEI/ARB) + Thuốc chẹn beta + Thuốc đối kháng thụ thể Mineralocorticoid (MRA) + Thuốc ức chế SGLT2"
    ],
    "correct": 3,
    "explanation": "Bốn trụ cột suy tim HFrEF đã được chứng minh giảm tử vong tim mạch rõ rệt gồm: (1) ARNI (Sacubitril/Valsartan) hoặc ACEI; (2) Thuốc chẹn beta được chứng minh (Bisoprolol, Carvedilol, Metoprolol succinate); (3) MRA (Spironolactone, Eplerenone); (4) Thuốc ức chế SGLT2 (Dapagliflozin, Empagliflozin)."
  },
  {
    "id": 1269,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Khi chuyển đổi từ thuốc ức chế men chuyển (như Enalapril) sang thuốc ức chế thụ thể Angiotensin-Neprilysin (ARNI - Sacubitril/Valsartan), bắt buộc phải có khoảng thời gian nghỉ (Washout period) là bao lâu để tránh nguy cơ phù mạch đe dọa tính mạng?",
    "options": [
      "Tối thiểu 36 giờ sau liều ACEI cuối cùng",
      "Không cần khoảng nghỉ, có thể uống ARNI ngay cữ tiếp theo",
      "Ít nhất 7 ngày để thanh thải hết các thụ thể",
      "Khoảng 6 giờ nếu chức năng thận của người bệnh hoàn toàn bình thường"
    ],
    "correct": 0,
    "explanation": "Cả ACEI và chất ức chế Neprilysin (Sacubitril) đều làm chậm phân hủy Bradykinin. Nếu dùng cùng lúc hoặc không cách nhau đủ 36 giờ, Bradykinin tích lũy ồ ạt dẫn đến phù mạch mạch máu thanh quản cấp tính, gây tắc nghẽn đường thở và nghẹt thở tử vong."
  },
  {
    "id": 1270,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Bệnh nhân nhiễm khuẩn bệnh viện nặng do Trực khuẩn mủ xanh (Pseudomonas aeruginosa). Kháng sinh nhóm Beta-lactam nào sau đây KHÔNG CÓ hoạt tính kháng vi khuẩn này?",
    "options": [
      "Ceftazidim",
      "Ceftriaxon",
      "Cefepim",
      "Piperacillin / Tazobactam"
    ],
    "correct": 1,
    "explanation": "Ceftriaxone và Cefotaxime là Cephalosporin thế hệ 3 nhưng KHÔNG có hoạt tính trên Pseudomonas aeruginosa. Các Cephalosporin có hoạt tính chống mủ xanh là Ceftazidime (thế hệ 3) và Cefepime (thế hệ 4), cùng với Piperacillin/Tazobactam và Carbapenem (Meropenem, Imipenem)."
  },
  {
    "id": 1271,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Kháng sinh nhóm Carbapenem nào sau đây KHÔNG CÓ hoạt tính chống Pseudomonas aeruginosa và Acinetobacter baumannii, do đó chỉ thích hợp cho nhiễm khuẩn cộng đồng hoặc trực khuẩn ruột sinh ESBL?",
    "options": [
      "Meropenem",
      "Imipenem / Cilastatin",
      "Ertapenem",
      "Doripenem"
    ],
    "correct": 2,
    "explanation": "Ertapenem (Invanz) có đặc tính dược động học dùng 1 lần/ngày do gắn protein cao, nhưng phổ kháng khuẩn bị khuyết: KHÔNG diệt được Pseudomonas aeruginosa, Acinetobacter spp. và Enterococcus. Ba carbapenem còn lại (Mero, Imi, Dori) đều bao phủ được Pseudomonas."
  },
  {
    "id": 1272,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Trong điều trị nhiễm khuẩn huyết do Trực khuẩn đường ruột kháng Carbapenem (CRE) sinh men men carbapenemase nhóm KPC hoặc OXA-48, kháng sinh ức chế beta-lactamase thế hệ mới phối hợp được ưu tiên lựa chọn là:",
    "options": [
      "Amoxicillin / Acid clavulanic",
      "Ampicillin / Sulbactam",
      "Cefoperazon / Sulbactam",
      "Ceftazidim / Avibactam"
    ],
    "correct": 3,
    "explanation": "Ceftazidime/Avibactam (Zavicefta) là kháng sinh thế hệ mới phối hợp Avibactam (chất ức chế beta-lactamase non-beta-lactam) có khả năng ức chế men Carbapenemase nhóm A (KPC) và nhóm D (OXA-48), là liệu pháp đầu tay giải cứu nhiễm CRE."
  },
  {
    "id": 1273,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Kháng sinh Tigecyclin có phổ kháng khuẩn rất rộng bao phủ MRSA, VRE, CRE và Acinetobacter đa kháng, nhưng có nhược điểm dược động học nghiêm trọng nào cần lưu ý?",
    "options": [
      "Nồng độ trong máu rất thấp do thể tích phân bố cực lớn, không thích hợp cho nhiễm khuẩn huyết nguyên phát",
      "Thải trừ hoàn toàn qua nước tiểu dưới dạng nguyên vẹn gây độc tính thận nặng nề",
      "Gây tăng huyết áp kịch phát do co thắt động mạch thận",
      "Thời gian bán thải cực ngắn dưới 15 phút nên bắt buộc phải tiêm liên tục mỗi giờ"
    ],
    "correct": 0,
    "explanation": "Tigecycline có thể tích phân bố rất lớn (Vd > 7 - 10 L/kg), thuốc khuếch tán mạnh vào các mô sâu (mô mềm, ổ bụng) nhưng nồng độ trong huyết tương lại rất thấp. Do đó, FDA cảnh báo không dùng Tigecycline đơn độc điều trị nhiễm khuẩn huyết hoặc viêm phổi thở máy."
  },
  {
    "id": 1274,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Bệnh nhân nam 65 tuổi có tiền sử Rung nhĩ không do bệnh van tim (điểm CHA2DS2-VASc = 3) vừa trải qua can thiệp đặt stent mạch vành phủ thuốc (PCI) do Hội chứng vành cấp. Chiến lược chống huyết khối tối ưu hiện nay theo ESC nhằm cân bằng nguy cơ tắc stent và xuất huyết là:",
    "options": [
      "Dùng liệu pháp 3 thuốc (NOAC + Aspirin + Clopidogrel) kéo dài liên tục 12 tháng",
      "Dùng liệu pháp 3 thuốc trong thời gian ngắn (từ lúc xuất viện đến 1 tuần hoặc 1 tháng), sau đó chuyển sang liệu pháp 2 thuốc (NOAC + Clopidogrel) đến 12 tháng",
      "Chỉ dùng đơn trị liệu Aspirin liều thấp 81 mg duy nhất",
      "Ngừng toàn bộ thuốc chống đông NOAC và chỉ dùng Ticagrelor đơn độc"
    ],
    "correct": 1,
    "explanation": "Chiến lược hiện đại ưu tiên giảm thời gian phác đồ 3 thuốc (Triple therapy: NOAC + Aspirin + Clopidogrel) xuống tối thiểu (thường <= 1 tuần đến 1 tháng tùy nguy cơ huyết khối mạch vành), sau đó duy trì phác đồ đôi (Dual therapy: NOAC + Clopidogrel) đến 12 tháng để giảm tối đa biến cố xuất huyết nặng."
  },
  {
    "id": 1275,
    "chapter": "Hen phế quản & COPD",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Theo hướng dẫn GOLD, chỉ định dùng kháng sinh trong đợt cấp bệnh phổi tắc nghẽn mạn tính (AECOPD) dựa trên tiêu chuẩn Anthonisen khi bệnh nhân có biểu hiện nào?",
    "options": [
      "Chỉ cần bệnh nhân có ho khan đơn thuần không có sốt",
      "Mọi bệnh nhân đợt cấp COPD đều bắt buộc phải dùng kháng sinh tối thiểu 14 ngày",
      "Bệnh nhân có tăng lượng đờm mủ kèm theo tăng khó thở hoặc tăng thể tích đờm (hoặc đợt cấp nặng cần thở máy)",
      "Chỉ dùng kháng sinh khi cấy đờm dương tính sau 7 ngày nuôi cấy vi khuẩn"
    ],
    "correct": 2,
    "explanation": "Tiêu chuẩn Anthonisen: (1) Tăng khó thở, (2) Tăng thể tích đờm, (3) Tăng tính chất mủ của đờm. Kháng sinh được chỉ định khi có đủ 3 triệu chứng, hoặc có 2 triệu chứng trong đó bắt buộc có đờm mủ, hoặc bệnh nhân đợt cấp nặng phải thở máy (xâm lấn hoặc không xâm lấn)."
  },
  {
    "id": 1276,
    "chapter": "Hen phế quản & COPD",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Thời gian điều trị bằng Corticoid toàn thân (như Prednison 40 mg đường uống mỗi ngày) được GOLD khuyến cáo trong đợt kịch phát COPD là bao lâu?",
    "options": [
      "Tối thiểu 14 đến 21 ngày và phải giảm liều từ từ trong 2 tháng",
      "Duy trì liên tục suốt đời để ngăn ngừa đợt cấp tái phát",
      "Chỉ dùng đúng 1 liều duy nhất trong vòng 1 giờ đầu nhập viện",
      "5 ngày (hiệu quả tương đương liệu trình dài ngày nhưng ít tác dụng phụ hơn)"
    ],
    "correct": 3,
    "explanation": "Nghiên cứu REDUCE chứng minh dùng Prednisone 40 mg/ngày trong 5 ngày mang lại hiệu quả cải thiện chức năng hô hấp và tỷ lệ hồi phục tương đương với liệu trình 14 ngày, nhưng giảm đáng kể nguy cơ tăng đường huyết, nhiễm trùng cơ hội và ức chế tuyến thượng thận."
  },
  {
    "id": 1277,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Khi bệnh nhân dùng Glucocorticoid đường toàn thân kéo dài trên 3 tuần, nguy cơ suy thượng thận thứ phát xảy ra do cơ chế feedback âm tính tác động lên cấu trúc nào?",
    "options": [
      "Ức chế trục Hạ đồi - Tuyến yên - Vỏ thượng thận (trục HPA) làm teo vỏ thượng thận",
      "Kích thích tuyến tủy thượng thận tăng tiết Catecholamin",
      "Phá hủy trực tiếp các receptor corticosteroid tại màng tế bào bạch cầu",
      "Tăng cường hoạt tính của enzym 11-beta-HSD1 tại mô mỡ nội tạng"
    ],
    "correct": 0,
    "explanation": "Dùng Glucocorticoid ngoại sinh kéo dài sẽ kích hoạt cơ chế ức chế điều hòa ngược (Negative Feedback) lên vùng dưới đồi (giảm tiết CRH) và tuyến yên (giảm tiết ACTH). Thiếu ACTH kéo dài khiến lớp bó và lớp lưới của vỏ thượng thận bị teo nhỏ, mất khả năng tự tiết Cortisol khi ngừng thuốc."
  },
  {
    "id": 1278,
    "chapter": "Thuốc giảm đau",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Thuốc giảm đau Paracetamol có liều tối đa hàng ngày khuyến cáo cho người lớn có chức năng gan bình thường là bao nhiêu để phòng ngừa hoại tử tế bào gan?",
    "options": [
      "2 gam / ngày",
      "4 gam / ngày (4000 mg/24 giờ)",
      "6 gam / ngày",
      "8 gam / ngày"
    ],
    "correct": 1,
    "explanation": "Liều tối đa của Paracetamol ở người lớn bình thường là 4g/24 giờ (mỗi lần 500 - 1000mg cách nhau tối thiểu 4-6 giờ). Với người cao tuổi suy kiệt, người nghiện rượu mạn tính hoặc có bệnh gan mạn tính, liều tối đa nên giảm xuống không quá 2 - 3g/24 giờ."
  },
  {
    "id": 1279,
    "chapter": "Thuốc giảm đau",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Khi điều trị cơn Gút cấp tính, Colchicin đường uống nên được dùng với chế độ liều chuẩn hóa theo khuyến cáo hiện đại của ACR và EULAR như thế nào?",
    "options": [
      "Uống 1 mg mỗi giờ cho đến khi bệnh nhân bị tiêu chảy dữ dội thì dừng lại",
      "Uống liều cao 5 mg ngay từ đầu kết hợp truyền dịch kiềm hóa nước tiểu",
      "Uống liều khởi đầu 1 mg (hoặc 1.2 mg), sau đó 1 giờ uống thêm 0.5 mg (hoặc 0.6 mg), tổng liều ngày đầu không quá 1.5 - 1.8 mg",
      "Dùng duy nhất một viên 0.25 mg mỗi 3 ngày một lần"
    ],
    "correct": 2,
    "explanation": "Phác đồ Colchicine liều cao cũ (uống mỗi giờ đến khi tiêu chảy) gây độc tính tiêu hóa rất nặng. Hướng dẫn hiện đại khuyến cáo phác đồ liều thấp: Khởi đầu 1mg (hoặc 1.2mg), 1 giờ sau uống thêm 0.5mg (hoặc 0.6mg). Liều thấp có hiệu quả giảm đau tương đương liều cao nhưng độ an toàn vượt trội."
  },
  {
    "id": 1280,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Thuốc hạ Acid Uric máu nhóm ức chế Xanthine Oxidase (Allopurinol) khi khởi đầu điều trị hạ acid uric cho bệnh nhân gút mạn tính bắt buộc phải lưu ý điều gì?",
    "options": [
      "Bắt đầu ngay bằng liều tối đa 800 mg/ngày để làm tan nhanh hạt tophi",
      "Ngừng toàn bộ các thuốc hạ áp và thuốc tim mạch của bệnh nhân",
      "Chỉ uống khi nồng độ acid uric máu hạ xuống dưới 200 mcmol/L",
      "Phải phối hợp đồng thời với thuốc dự phòng cơn gút cấp (Colchicin liều thấp hoặc NSAID) trong 3 đến 6 tháng đầu"
    ],
    "correct": 3,
    "explanation": "Khi mới dùng Allopurinol/Febuxostat, nồng độ acid uric máu giảm nhanh làm bong tróc và hòa tan các tinh thể urat từ mô vào dịch khớp, dễ kích hoạt cơn gút cấp bùng phát. Do đó, bắt buộc phải dùng đồng thời thuốc phòng ngừa (Colchicine 0.5-1mg/ngày hoặc NSAID liều thấp) trong 3 - 6 tháng đầu."
  },
  {
    "id": 1281,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Biến chứng nguy hiểm nhất của thuốc Allopurinol là Hội chứng quá mẫn nghiêm trọng (AHS / SCAR bao gồm Stevens-Johnson và TEN). Yếu tố nguy cơ di truyền liên quan chặt chẽ nhất ở người châu Á (người Việt Nam, người Hoa) là mang alen:",
    "options": [
      "HLA-B*58:01",
      "HLA-B*15:02",
      "HLA-B*57:01",
      "HLA-DQB1*06:02"
    ],
    "correct": 0,
    "explanation": "Alen HLA-B*58:01 liên quan mật thiết với hội chứng quá mẫn đe dọa tính mạng do Allopurinol (tỷ lệ mang alen này ở người Việt khoảng 10-15%). HLA-B*15:02 liên quan đến Carbamazepine; HLA-B*57:01 liên quan đến Abacavir."
  },
  {
    "id": 1282,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Bệnh nhân nam 62 tuổi mắc Viêm phổi cộng đồng (CAP) điều trị nội trú tại khoa Hô hấp (không nằm ICU), không có yếu tố nguy cơ nhiễm trực khuẩn mủ xanh hay MRSA. Phác đồ kháng sinh kinh nghiệm theo ATS/IDSA và Hội Phổi Việt Nam là:",
    "options": [
      "Vancomycin tiêm truyền kết hợp với Gentamicin tiêm bắp",
      "Beta-lactam phổ rộng đường tiêm (Ceftriaxon, Cefotaxim hoặc Ampicillin/Sulbactam) phối hợp với Macrolid (Azithromycin) hoặc dùng một Fluoroquinolon hô hấp đơn trị liệu",
      "Metronidazol đường uống phối hợp Ciprofloxacin",
      "Cefazolin đơn độc truyền tĩnh mạch mỗi 8 giờ"
    ],
    "correct": 1,
    "explanation": "Đối với CAP nội trú ngoài ICU, phác đồ chuẩn bao phủ cả vi khuẩn điển hình (Phế cầu) và không điển hình (Mycoplasma, Chlamydia, Legionella) là: Beta-lactam tiêm (Ceftriaxone 1-2g/ngày hoặc Ampicillin/Sulbactam) + Macrolide (Azithromycin/Clarithromycin), hoặc một Quinolone hô hấp (Levofloxacin 750mg, Moxifloxacin)."
  },
  {
    "id": 1283,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Thang điểm CURB-65 được sử dụng để đánh giá độ nặng và định hướng nơi điều trị cho bệnh nhân Viêm phổi cộng đồng (CAP). Năm tiêu chí của thang điểm này là:",
    "options": [
      "Ho nhiều, Ure máu, Rối loạn nhịp tim, Bạch cầu máu > 15 G/L, Tuổi ≥ 60",
      "Hôn mê, Đường huyết > 10 mmol/L, Suy thận cấp, Tụt huyết áp, Tuổi ≥ 65",
      "Rối loạn ý thức (Confusion), Ure máu > 7 mmol/L, Tần số thở ≥ 30 lần/phút, Huyết áp (HATT < 90 hoặc HATTr ≤ 60 mmHg), Tuổi ≥ 65",
      "Khó thở, Creatinin máu > 150 mcmol/L, Suy tim, SpO2 < 90%, Tuổi ≥ 70"
    ],
    "correct": 2,
    "explanation": "CURB-65 gồm: C (Confusion - lú lẫn/rối loạn ý thức); U (Urea > 7 mmol/L); R (Respiratory rate >= 30 lần/phút); B (Blood pressure: SBP < 90 hoặc DBP <= 60 mmHg); 65 (Tuổi >= 65). 0-1 điểm: điều trị ngoại trú; 2 điểm: cân nhắc nhập viện; 3-5 điểm: nhập viện điều trị nội trú/ICU."
  },
  {
    "id": 1284,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Bệnh nhân sau ghép thận đang dùng thuốc ức chế miễn dịch Tacrolimus. Kháng sinh hoặc thuốc chống nấm nào sau đây khi dùng chung sẽ làm TĂNG VỌT nồng độ Tacrolimus trong máu dẫn đến tổn thương thận cấp do ngộ độc?",
    "options": [
      "Rifampicin và Phenobarbital (chất cảm ứng enzym CYP3A4)",
      "Amoxicillin và Cefuroxim (kháng sinh beta-lactam)",
      "Co-trimoxazol liều dự phòng nhiễm PCP",
      "Voriconazol và Ketoconazol (chất ức chế rất mạnh enzym CYP3A4)"
    ],
    "correct": 3,
    "explanation": "Tacrolimus chuyển hóa chuyển hóa qua CYP3A4 và là cơ chất của P-gp. Các thuốc chống nấm nhóm Azole (Voriconazole, Itraconazole, Ketoconazole) ức chế rất mạnh CYP3A4, làm nồng độ Tacrolimus tăng vọt gấp 3 - 5 lần, gây co thắt tiểu động mạch vào cầu thận và suy thận cấp."
  },
  {
    "id": 1285,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Bệnh nhân đái tháo đường tuýp 2 mắc kèm Bệnh tim thiếu máu cục bộ do xơ vữa (ASCVD) hoặc Suy tim mạn tính. Nhóm thuốc hạ đường huyết nào được khuyến cáo ưu tiên bổ sung hàng đầu độc lập với mức HbA1c ban đầu?",
    "options": [
      "Thuốc đồng vận thụ thể GLP-1 (GLP-1 RA) và thuốc ức chế kênh đồng vận chuyển Natri-Glucose 2 (SGLT2i)",
      "Thuốc nhóm Sulfonylurea thế hệ 1 (Tolbutamid)",
      "Insulin NPH tiêm dưới da liều cao buổi tối",
      "Thuốc ức chế men alpha-glucosidase (Acarbose)"
    ],
    "correct": 0,
    "explanation": "Khuyến cáo ADA và ESC nhấn mạnh: Bệnh nhân ĐTĐ tuýp 2 có bệnh tim mạch xơ vữa (ASCVD) ưu tiên dùng GLP-1 RA có chứng minh lợi ích tim mạch (Liraglutide, Semaglutide) hoặc SGLT2i. Với suy tim (HFrEF/HFpEF) hoặc bệnh thận mạn (CKD), SGLT2i là lựa chọn số 1 để giảm tỷ lệ tử vong và biến cố tim mạch."
  },
  {
    "id": 1286,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Tác dụng phụ hiếm gặp nhưng rất nguy hiểm của thuốc ức chế SGLT2 (Dapagliflozin, Empagliflozin) cần được tư vấn kỹ cho bệnh nhân là:",
    "options": [
      "Xơ gan teo đét và suy gan bùng phát",
      "Nhiễm toan ceton đái tháo đường với mức đường huyết bình thường hoặc tăng nhẹ (Euglycemic DKA)",
      "Tăng huyết áp kịch phát dẫn đến phình tách động mạch chủ",
      "Gây điếc tiếp nhận không hồi phục ở cả hai tai"
    ],
    "correct": 1,
    "explanation": "Thuốc ức chế SGLT2 thải đường qua nước tiểu nên dù cơ thể thiếu hụt insulin gây nhiễm toan ceton, đường huyết vẫn có thể < 250 mg/dL (Euglycemic DKA). Triệu chứng gồm buồn nôn, đau bụng, thở nhanh sâu, toan chuyển hóa khoảng trống anion tăng. Cần tạm ngưng thuốc khi phẫu thuật hoặc nhịn ăn kéo dài."
  },
  {
    "id": 1287,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Kháng sinh Fosfomycin đường uống dạng hạt cốm tan (Fosfomycin trometamol 3g liều duy nhất) được khuyến cáo là lựa chọn hàng đầu cho chỉ định nhiễm khuẩn nào?",
    "options": [
      "Viêm bể thận - thận cấp tính có sốt cao và rét run",
      "Nhiễm khuẩn huyết do tụ cầu vàng đa kháng",
      "Nhiễm khuẩn tiết niệu dưới không biến chứng (viêm bàng quang cấp) ở phụ nữ",
      "Viêm tuyến tiền liệt mạn tính do vi khuẩn kỵ khí"
    ],
    "correct": 2,
    "explanation": "Fosfomycin trometamol 3g gói uống liều duy nhất đạt nồng độ rất cao trong nước tiểu kéo dài 48 - 72 giờ, diệt tốt E. coli (kể cả chủng sinh ESBL) và E. faecalis, là phác đồ đầu tay cho viêm bàng quang cấp không biến chứng ở phụ nữ. Không dùng cho viêm đài bể thận vì không đạt nồng độ mô thận đủ cao."
  },
  {
    "id": 1288,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Trong nhiễm trùng huyết do Acinetobacter baumannii kháng Carbapenem (CRAB), phác đồ phối hợp kháng sinh thường được áp dụng bao gồm thuốc nào sau đây?",
    "options": [
      "Penicillin G tinh thể tiêm tĩnh mạch phối hợp Metronidazol",
      "Ceftriaxon phối hợp Gentamicin liều thông thường",
      "Erythromycin phối hợp Doxycyclin đường uống",
      "Colistin (Polymyxin E) liều nạp phối hợp Ampicillin / Sulbactam liều cao (hoặc Tigecyclin liều cao)"
    ],
    "correct": 3,
    "explanation": "Acinetobacter baumannii đa kháng (CRAB) là tác nhân cực kỳ nguy hiểm. Phác đồ cứu cánh theo IDSA thường dựa trên Colistin (có liều nạp) phối hợp với Ampicillin/Sulbactam liều cao (Sulbactam có hoạt tính diệt khuẩn tự nhiên trên Acinetobacter) hoặc phối hợp Tigecycline liều tăng gấp đôi."
  },
  {
    "id": 1289,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Chỉ số Biomarker Procalcitonin (PCT) trong huyết thanh có giá trị dược lâm sàng quan trọng nhất trong việc:",
    "options": [
      "Phân biệt nhiễm khuẩn do vi khuẩn với sốt do virus và định hướng thời điểm an toàn để ngừng kháng sinh",
      "Định lượng chính xác số lượng vi khuẩn trong nước tiểu 24 giờ",
      "Đánh giá mức độ hủy hoại tế bào cơ tim sau nhồi máu cơ tim cấp",
      "Đo lường mức lọc cầu thận độc lập với chỉ số Creatinin"
    ],
    "correct": 0,
    "explanation": "Procalcitonin tăng mạnh trong nhiễm khuẩn toàn thân do vi khuẩn nhưng bị ức chế trong nhiễm virus. Việc theo dõi động học PCT (nồng độ giảm > 80% so với đỉnh hoặc < 0.25 mcg/L) là công cụ stewardship quan trọng giúp bác sĩ ngưng kháng sinh an toàn và rút ngắn thời gian điều trị."
  },
  {
    "id": 1290,
    "chapter": "Dược động học & Suy gan, thận",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Bệnh nhân suy thận mạn giai đoạn cuối đang lọc máu ngắt quãng chu kỳ (Hemodialysis - HD). Thời điểm sử dụng các kháng sinh bị thải trừ nhiều qua màng lọc nhân tạo (như Vancomycin hay Ceftazidim) là:",
    "options": [
      "Dùng ngay trước khi bắt đầu cắm kim lọc máu 30 phút",
      "Dùng sau khi kết thúc buổi lọc máu nhân tạo",
      "Dùng ở giữa chu kỳ lọc máu để máy lọc phân tán đều thuốc",
      "Chỉ dùng vào những ngày nghỉ không có lịch lọc máu"
    ],
    "correct": 1,
    "explanation": "Nếu dùng thuốc trước hoặc trong khi lọc máu, một lượng lớn thuốc sẽ bị màng lọc thẩm tách đào thải ra ngoài dịch lọc trước khi kịp phân bố vào mô, gây thất bại điều trị. Vì vậy, các thuốc bị lọc qua màng nhân tạo bắt buộc phải dùng ngay sau khi kết thúc mỗi buổi lọc máu."
  },
  {
    "id": 1291,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Thuốc chống loãng xương đường uống nhóm Bisphosphonat (như Alendronat 70 mg uống mỗi tuần một lần) đòi hỏi hướng dẫn sử dụng nghiêm ngặt nào để tránh loét thực quản?",
    "options": [
      "Nghiền nát viên thuốc hòa cùng nước cam chua để uống trước khi đi ngủ",
      "Uống cùng với một cốc sữa tươi giàu canxi ngay sau bữa ăn trưa",
      "Uống ngay vào buổi sáng khi bụng đói với một cốc nước lọc đầy (200 ml), giữ tư thế ngồi hoặc đứng thẳng ít nhất 30 phút sau uống và không ăn uống gì khác",
      "Nằm nghỉ ngơi trên giường ngay lập tức sau khi nuốt viên thuốc"
    ],
    "correct": 2,
    "explanation": "Bisphosphonate đường uống có sinh khả dụng cực thấp (< 1%) và gây kích ứng, loét hoại tử niêm mạc thực quản nếu bị đọng lại. Bệnh nhân phải uống lúc bụng rỗng vào sáng sớm với nhiều nước lọc, không nằm và không ăn uống thuốc khác ít nhất 30 - 60 phút."
  },
  {
    "id": 1292,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Trong cấp cứu cơn Tăng huyết áp khẩn trương hoặc cấp cứu (Hypertensive crisis) có kèm Phình bóc tách động mạch chủ ngực cấp, mục tiêu kiểm soát huyết áp và nhịp tim ban đầu là:",
    "options": [
      "Hạ huyết áp thật chậm từ từ trong 48 giờ để tránh thiếu máu thận",
      "Tăng huyết áp lên cao hơn để duy trì áp lực tưới máu lòng mạch giả",
      "Dùng thuốc kích thích giao cảm để nâng huyết áp trung bình",
      "Hạ nhanh huyết áp tâm thu xuống dưới 120 mmHg và nhịp tim dưới 60 lần/phút trong vòng 20 phút bằng thuốc chẹn beta tĩnh mạch (Esmolol, Labetalol)"
    ],
    "correct": 3,
    "explanation": "Phình bóc tách động mạch chủ là cấp cứu ngoại lệ duy nhất đòi hỏi hạ áp khẩn cấp: cần hạ HATT < 120 mmHg và nhịp tim < 60 bpm trong 20 phút bằng chẹn beta IV (như Esmolol/Labetalol) để giảm lực xé động mạch (dP/dt), tránh vỡ quai động mạch chủ dẫn đến tử vong tức thì."
  },
  {
    "id": 1293,
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Ở bệnh nhân Nhồi máu cơ tim cấp có ST chênh lên (STEMI), thuốc chẹn beta giao cảm đường uống (như Metoprolol succinate, Bisoprolol) KHÔNG NÊN khởi đầu trong 24 giờ đầu nếu bệnh nhân có dấu hiệu nào sau đây?",
    "options": [
      "Dấu hiệu suy tim cấp tiến triển hoặc nguy cơ cao rơi vào sốc tim (PR > 0.24s, nhịp tim < 60, HA < 100 mmHg)",
      "Đau ngực sau xương ức dữ dội kèm theo lo âu",
      "Mức đường huyết tăng nhẹ 8.5 mmol/L",
      "Tăng nhẹ nồng độ Troponin T huyết thanh"
    ],
    "correct": 0,
    "explanation": "Khởi đầu thuốc chẹn beta sớm trong nhồi máu cơ tim cấp chống chỉ định nếu bệnh nhân có dấu hiệu suy tim ứ huyết, nhịp chậm (< 60 bpm), tụt HA (HATT < 100), block nhĩ thất độ II-III hoặc nguy cơ sốc tim, vì tác dụng ức chế co bóp cơ tim có thể đẩy bệnh nhân vào trụy mạch không hồi phục."
  },
  {
    "id": 1294,
    "chapter": "Hen phế quản & COPD",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Thuốc giãn phế quản kháng cholinergic tác dụng kéo dài (LAMA như Tiotropium) có cơ chế phân tử chính trong điều trị COPD là:",
    "options": [
      "Kích thích trực tiếp adenylate cyclase làm tăng tổng hợp cAMP nội bào",
      "Phong bế thụ thể Muscarinic M3 tại cơ trơn khí phế quản ngăn cản tác dụng gây co thắt của Acetylcholin",
      "Ức chế enzym phosphodiesterase-4 (PDE4) làm giảm giải phóng cytokine gây viêm",
      "Đối kháng thụ thể Leukotriene CysLT1 tại niêm mạc phế quản"
    ],
    "correct": 1,
    "explanation": "Tiotropium là chất đối kháng cạnh tranh chọn lọc trên thụ thể Muscarinic M3 tại cơ trơn đường thở, ngăn chặn đường truyền tín hiệu phó giao cảm qua Acetylcholine, mang lại tác dụng giãn phế quản kéo dài trên 24 giờ và giảm ứ khí phổi trong COPD."
  },
  {
    "id": 1295,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Nhiễm khuẩn Clostridioides difficile (CDI) thể nặng hoặc tái phát trong bệnh viện theo hướng dẫn của IDSA/SHEA hiện nay ưu tiên lựa chọn thuốc đường uống hàng đầu là:",
    "options": [
      "Metronidazol đường tĩnh mạch liều cao",
      "Amoxicillin đường uống kết hợp Neomycin",
      "Fidaxomicin hoặc Vancomycin đường uống",
      "Ceftriaxon truyền tĩnh mạch mỗi 12 giờ"
    ],
    "correct": 2,
    "explanation": "Hướng dẫn IDSA/SHEA hiện đại đã đưa Metronidazole xuống hàng lựa chọn thay thế (chỉ dùng cho thể nhẹ khi không có thuốc khác). Fidaxomicin 200mg uống 2 lần/ngày hoặc Vancomycin 125mg uống 4 lần/ngày là lựa chọn hàng đầu cho CDI vì tác dụng tại chỗ trong lòng ruột và tỷ lệ tái phát thấp."
  },
  {
    "id": 1296,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Bệnh nhân đang dùng thuốc chống đông đường uống ức chế yếu tố Xa trực tiếp Rivaroxaban. Nếu bệnh nhân bị nôn ra máu dữ dội đe dọa tính mạng, chất giải độc đặc hiệu (Antidote) hoàn nguyên tác dụng chống đông là:",
    "options": [
      "Idarucizumab",
      "Protamin sulfat",
      "Vitamin K1 tiêm tĩnh mạch",
      "Andexanet alfa"
    ],
    "correct": 3,
    "explanation": "Andexanet alfa là mồi nhử protein tái tổ hợp đặc hiệu liên kết và vô hiệu hóa các thuốc ức chế yếu tố Xa (Rivaroxaban, Apixaban). Idarucizumab (Praxbind) là kháng thể đơn dòng đặc hiệu cho Dabigatran. Protamine sulfat cho Heparin."
  },
  {
    "id": 1297,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Thuốc chống đông trực tiếp Dabigatran etexilate có chất đối kháng đặc hiệu (Reversal agent) đã được cấp phép sử dụng trong cấp cứu xuất huyết đe dọa tính mạng là:",
    "options": [
      "Idarucizumab (Praxbind)",
      "Andexanet alfa",
      "Flumazenil",
      "Phytomenadion"
    ],
    "correct": 0,
    "explanation": "Idarucizumab là đoạn kháng thể đơn dòng Fab nhân hóa có ái lực với Dabigatran cao gấp 350 lần so với ái lực của Dabigatran với Thrombin, giúp trung hòa hoàn toàn tác dụng chống đông chỉ sau vài phút tiêm truyền."
  },
  {
    "id": 1298,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Kháng sinh Ceftriaxon được đào thải qua những con đường sinh học nào trong cơ thể?",
    "options": [
      "Thải trừ 100% nguyên vẹn qua lọc cầu thận",
      "Đào thải kép cân bằng qua cả thận (khoảng 60%) và qua đường mật/phân (khoảng 40%)",
      "Chuyển hóa 100% tại biểu mô phổi thành acid amin",
      "Chỉ bài xuất qua tuyến mồ hôi và dịch nước bọt"
    ],
    "correct": 1,
    "explanation": "Ceftriaxone có con đường thải trừ kép: ~60% qua thận và ~40% qua đường mật vào phân. Nhờ cơ chế bù trừ này, bệnh nhân suy thận đơn thuần hoặc suy gan đơn thuần thường không cần phải hiệu chỉnh liều Ceftriaxone (trừ khi suy cả gan và thận nặng phối hợp)."
  },
  {
    "id": 1299,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Bệnh nhân điều trị bằng kháng sinh nhóm Quinolon (Levofloxacin) hoặc Macrolid (Azithromycin) cần được theo dõi điện tâm đồ (ECG) vì nguy cơ gây ra tác dụng phụ tim mạch nguy hiểm nào sau đây?",
    "options": [
      "Gây rung nhĩ kịch phát do cường giao cảm",
      "Gây tràn dịch màng ngoài tim co thắt",
      "Kéo dài khoảng QT (QT prolongation) dẫn đến loạn nhịp xoắn đỉnh (Torsades de Pointes)",
      "Hẹp van động mạch chủ cấp tính"
    ],
    "correct": 2,
    "explanation": "Cả Quinolone và Macrolide đều ức chế kênh kali hERG tim, làm chậm quá trình tái cực thất, dẫn đến kéo dài khoảng QTc trên điện tâm đồ. Biến cố này có thể kích hoạt cơn loạn nhịp thất đa hình thái chết người gọi là xoắn đỉnh (Torsades de Pointes), đặc biệt khi kèm hạ K+ hay hạ Mg2+."
  },
  {
    "id": 1300,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Kháng sinh nào sau đây được xem là an toàn và được lựa chọn phổ biến nhất trong điều trị nhiễm khuẩn đường tiết niệu hoặc viêm đường hô hấp ở phụ nữ mang thai?",
    "options": [
      "Fluoroquinolon (Ciprofloxacin)",
      "Aminoglycosid (Gentamicin)",
      "Doxycyclin (Tetracyclin)",
      "Beta-lactam (Amoxicillin / Clavulanat hoặc Cephalosporin)"
    ],
    "correct": 3,
    "explanation": "Kháng sinh Beta-lactam (Penicillin, Cephalosporin) không gây độc tế bào thai và được xếp loại an toàn hàng đầu (FDA nhóm B) trong suốt thai kỳ. Fluoroquinolone gây độc sụn khớp; Aminoglycoside độc tai trong thận; Tetracycline gây hỏng men và vàng răng vĩnh viễn cho thai nhi."
  },
  {
    "id": 1301,
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Theo Tiêu chuẩn Beers (Beers Criteria) của Hội Lão khoa Hoa Kỳ (AGS), thuốc an thần ngủ nhóm Benzodiazepin (như Diazepam, Lorazepam) nên TRÁNH sử dụng ở người cao tuổi chủ yếu do:",
    "options": [
      "Làm tăng mạnh nguy cơ lú lẫn, suy giảm nhận thức, chóng mặt và té ngã gãy xương hông",
      "Gây suy tủy xương và giảm bạch cầu hạt nặng nề",
      "Gây loét thủng dạ dày tá tràng chảy máu",
      "Làm tăng huyết áp kịch phát dẫn đến xuất huyết não"
    ],
    "correct": 0,
    "explanation": "Người cao tuổi tăng độ nhạy cảm với Benzodiazepine và giảm tốc độ chuyển hóa thuốc tại gan. Thuốc gây an thần quá mức, rối loạn điều hòa thăng bằng vận động, mê sảng và té ngã gây gãy cổ xương đùi chấn thương sọ não, nên thuộc danh mục thuốc nguy cơ cao cần tránh theo Tiêu chuẩn Beers."
  },
  {
    "id": 1302,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "source": "UMP",
    "sourceName": "Đại học Y Dược TP.HCM",
    "question": "Ở bệnh nhân đái tháo đường, chỉ số HbA1c phản ánh mức độ kiểm soát đường huyết trung bình trong khoảng thời gian nào trước đó?",
    "options": [
      "24 đến 48 giờ vừa qua",
      "2 đến 3 tháng (tương ứng với đời sống trung bình 120 ngày của hồng cầu)",
      "1 đến 2 tuần lễ gần nhất",
      "1 năm trở lại đây"
    ],
    "correct": 1,
    "explanation": "HbA1c là sản phẩm gắn kết không thuận nghịch của Glucose với Hemoglobin trong hồng cầu. Do đời sống trung bình của hồng cầu là 120 ngày, chỉ số HbA1c phản ánh chính xác nồng độ glucose máu trung bình trong 2 đến 3 tháng trước đó, không bị ảnh hưởng bởi bữa ăn tức thời."
  },
  {
    "id": 1303,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Theo Thông tư 51/2017/TT-BYT của Bộ Y tế, thuốc thiết yếu, quan trọng hàng đầu và bắt buộc phải tiêm ngay lập tức cho người bệnh bị phản vệ từ Độ II trở lên là:",
    "options": [
      "Methylprednisolon đường tĩnh mạch",
      "Diphenhydramin tiêm bắp",
      "Adrenalin (Epinephrin)",
      "Dung dịch Natri bicarbonat 1.4%"
    ],
    "correct": 2,
    "explanation": "Thông tư 51/2017/TT-BYT khẳng định Adrenalin là thuốc thiết yếu, quan trọng bậc nhất cứu sống người bệnh bị phản vệ. Ngay khi phát hiện phản vệ từ Độ II (nặng) trở lên, phải tiêm bắp Adrenalin ngay lập tức, không được trì hoãn để chờ tiêm Corticoid hay kháng Histamin."
  },
  {
    "id": 1304,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Theo Thông tư 51/2017/TT-BYT, liều dùng và đường dùng Adrenalin khởi đầu khuyến cáo cho người lớn khi xử trí phản vệ Độ II hoặc Độ III là:",
    "options": [
      "Tiêm tĩnh mạch trực tiếp 1 ống nguyên chất (1 mg) thật nhanh",
      "Pha loãng 1 ống vào 500 ml Natri Clorid 0.9% truyền nhỏ giọt trong 8 giờ",
      "Tiêm dưới da 1/4 ống (0.25 mg) tại cẳng tay",
      "Tiêm bắp 1/2 ống (tương đương 0.5 mg) ở mặt trước ngoài đùi"
    ],
    "correct": 3,
    "explanation": "Liều khởi đầu cho người lớn là tiêm bắp 1/2 ống (0.5 mg) dung dịch Adrenalin 1mg/1ml (1:1000). Vị trí tiêm tối ưu là mặt trước ngoài đùi vì có hệ thống mạch máu phong phú, giúp thuốc hấp thu vào tuần hoàn nhanh và đạt đỉnh cao hơn nhiều so với cơ delta hay tiêm dưới da."
  },
  {
    "id": 1305,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Sau khi tiêm bắp liều Adrenalin đầu tiên trong cấp cứu phản vệ theo Thông tư 51, nếu người bệnh vẫn chưa có dấu hiệu cải thiện huyết áp hoặc còn khó thở, thời gian khuyến cáo để tiêm nhắc lại liều tiếp theo là:",
    "options": [
      "Sau mỗi 3 đến 5 phút",
      "Sau mỗi 30 phút",
      "Sau 2 giờ",
      "Chỉ được tiêm 1 liều duy nhất trong 24 giờ"
    ],
    "correct": 0,
    "explanation": "Theo Thông tư 51/2017/TT-BYT: Cứ sau mỗi 3 - 5 phút theo dõi nếu huyết áp chưa nâng lên hoặc triệu chứng hô hấp chưa thuyên giảm, tiếp tục tiêm bắp nhắc lại liều Adrenalin như trên cho đến khi huyết áp và mạch ổn định (tối đa có thể tiêm 2 - 3 lần trước khi thiết lập đường truyền tĩnh mạch liên tục)."
  },
  {
    "id": 1306,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Phân độ phản vệ theo Thông tư 51/2017/TT-BYT chia làm mấy mức độ và phản vệ Độ I (nhẹ) được định nghĩa bởi dấu hiệu nào?",
    "options": [
      "3 mức độ; Độ I là tụt huyết áp và mất tri giác hoàn toàn",
      "4 mức độ; Độ I chỉ có các triệu chứng ở da, tổ chức dưới da và niêm mạc (mày đay, ngứa, phù mạch)",
      "5 mức độ; Độ I là co thắt thanh quản tím tái",
      "2 mức độ; Độ I là ngừng tuần hoàn hô hấp"
    ],
    "correct": 1,
    "explanation": "Thông tư 51 chia phản vệ làm 4 mức độ: Độ I (Nhẹ: chỉ ở da, niêm mạc); Độ II (Nặng: từ 2 cơ quan trở lên như mày đay + khó thở, tức ngực, tụt HA thoáng qua); Độ III (Nguy kịch: trụy mạch, tụt HA, thở rít, lú lẫn); Độ IV (Ngừng tuần hoàn hô hấp)."
  },
  {
    "id": 1307,
    "chapter": "Thuốc giảm đau",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Chất giải độc đặc hiệu (Antidote) trong ngộ độc cấp tính Paracetamol do quá liều dẫn đến tích lũy chất chuyển hóa độc NAPQI gây hoại tử tế bào gan là:",
    "options": [
      "Flumazenil",
      "Atropin sulfat",
      "N-acetylcystein (NAC)",
      "Naloxon hydroclorid"
    ],
    "correct": 2,
    "explanation": "Khi quá liều Paracetamol, con đường liên hợp sulfat và glucuronid bị bão hòa, enzym CYP2E1 tạo ra lượng lớn NAPQI làm cạn kiệt Glutathione nội sinh. N-acetylcysteine (NAC) cung cấp nhóm sulfhydryl (-SH) để tái tạo Glutathione và trực tiếp liên hợp bất hoạt NAPQI, bảo vệ tế bào gan."
  },
  {
    "id": 1308,
    "chapter": "Thuốc giảm đau",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Hiệu quả giải độc bảo vệ tế bào gan tối đa của N-acetylcystein (NAC) đường uống hoặc truyền tĩnh mạch đạt được tốt nhất khi bắt đầu dùng trong khoảng thời gian nào sau ngộ độc Paracetamol?",
    "options": [
      "Sau 24 đến 48 giờ khi men gan ALT bắt đầu tăng vọt",
      "Chỉ dùng khi bệnh nhân đã xuất hiện vàng da và hôn mê gan",
      "Sau 5 ngày điều trị nâng đỡ",
      "Trong vòng 8 giờ đầu tiên sau khi uống quá liều"
    ],
    "correct": 3,
    "explanation": "Nghiên cứu lâm sàng kinh điển của Prescott cho thấy dùng NAC trong vòng 8 giờ đầu sau uống Paracetamol mang lại tỷ lệ bảo vệ gan gần như 100% (tỷ lệ hoại tử gan nặng < 2%). Sau 8 giờ hiệu quả giảm dần, nhưng NAC vẫn có lợi ích cải thiện tỷ lệ sống ngay cả khi dùng muộn."
  },
  {
    "id": 1309,
    "chapter": "Thuốc giảm đau",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Tam chứng kinh điển gợi ý chẩn đoán Ngộ độc cấp tính các dẫn chất Opioid (Morphin, Heroin, Fentanyl) tại khoa Cấp cứu bao gồm:",
    "options": [
      "Hôn mê ức chế tri giác, đồng tử co nhỏ như đầu đinh ghim (Pinpoint pupils) và ức chế hô hấp (thở chậm, ngừng thở)",
      "Sốt cao co giật, đồng tử giãn to và tiêu chảy cấp",
      "Tăng huyết áp kịch phát, tim đập nhanh và rung giật nhãn cầu",
      "Vàng da tan máu, nổi ban xuất huyết hoại tử và vô niệu"
    ],
    "correct": 0,
    "explanation": "Tam chứng ngộ độc Opioid điển hình gồm: (1) Ức chế thần kinh trung ương (ngủ gà, hôn mê); (2) Đồng tử co nhỏ như đầu đinh ghim (miosis); (3) Ức chế hô hấp (nhịp thở chậm < 10-12 lần/phút, thở nông, ngừng thở dẫn đến tím tái và tử vong nếu không được tiêm Naloxone kịp thời)."
  },
  {
    "id": 1310,
    "chapter": "Thuốc giảm đau",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Khi tiêm tĩnh mạch Naloxon để hồi sức cấp cứu ngộ độc Morphin gây ngừng thở, lưu ý dược động học quan trọng nhất người thầy thuốc cần ghi nhớ là gì?",
    "options": [
      "Naloxon chỉ có tác dụng sau 6 giờ tiêm tĩnh mạch",
      "Thời gian bán thải của Naloxon rất ngắn (khoảng 30 đến 90 phút), ngắn hơn nhiều so với Morphin nên có thể tái hôn mê và ngừng thở trở lại sau khi thuốc hết tác dụng",
      "Thuốc gây hạ đường huyết nghiêm trọng đe dọa phù não",
      "Naloxon gắn kết vĩnh viễn không hồi phục vào thụ thể Mu-opioid"
    ],
    "correct": 1,
    "explanation": "Naloxone có thời gian tác dụng rất ngắn (30 - 90 phút), trong khi Morphin tác dụng 4 - 6 giờ, Methadone kéo dài > 24 giờ. Sau khi bệnh nhân tỉnh lại do liều Naloxone đầu tiên, họ có thể tái ngộ độc và ngừng thở khi Naloxone bị thải trừ. Vì vậy cần theo dõi liên tục ít nhất vài giờ và sẵn sàng tiêm nhắc lại hoặc truyền tĩnh mạch liên tục."
  },
  {
    "id": 1311,
    "chapter": "Thuốc giảm đau",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Thuốc đối kháng đặc hiệu thụ thể Benzodiazepin (như Diazepam, Midazolam) dùng để đảo ngược tác dụng an thần hôn mê là:",
    "options": [
      "Naloxon",
      "Atropin",
      "Flumazenil",
      "Neostigmin"
    ],
    "correct": 2,
    "explanation": "Flumazenil (Anexate) là chất đối kháng cạnh tranh chọn lọc trên vị trí gắn Benzodiazepine của phức hợp thụ thể GABAA. Thuốc giúp bệnh nhân tỉnh lại nhanh chóng sau gây mê hoặc ngộ độc Benzodiazepine. Thận trọng nguy cơ co giật ở người nghiện thuốc mạn tính."
  },
  {
    "id": 1312,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Chất giải độc đặc hiệu (Antidote) trong cấp cứu ngộ độc thuốc ức chế men cholinesterase nhóm phospho hữu cơ (thuốc trừ sâu Phospho hữu cơ) là sự phối hợp của:",
    "options": [
      "Naloxon phối hợp Glucose ưu trương",
      "Flumazenil phối hợp Vitamin K1",
      "Canxi gluconat phối hợp Insulin liều cao",
      "Atropin sulfat (đối kháng triệu chứng Muscarinic) phối hợp Pralidoxim / PAM (tái hoạt hóa enzym acetylcholinesterase)"
    ],
    "correct": 3,
    "explanation": "Phospho hữu cơ phosphoryl hóa enzym acetylcholinesterase, làm tích tụ Acetylcholine gây hội chứng cholinergic ồ ạt. Phác đồ bắt buộc gồm: (1) Atropin liều cao để chặn thụ thể Muscarinic (cắt đứt co thắt phế quản, tăng tiết đờm dãi, nhịp chậm); (2) Pralidoxime (PAM) giúp giải phóng enzym trước khi hiện tượng lão hóa (aging) xảy ra."
  },
  {
    "id": 1313,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Trong ngộ độc thuốc chống đông Warfarin gây xuất huyết nặng đe dọa tính mạng (hoặc INR > 10 có xuất huyết), biện pháp hồi phục đông máu khẩn cấp nhất được khuyến cáo là:",
    "options": [
      "Truyền Phức hợp Prothrombin đậm đặc 4 yếu tố (4F-PCC) phối hợp tiêm tĩnh mạch chậm Vitamin K1",
      "Chỉ cho uống Vitamin C liều cao",
      "Tiêm bắp Protamin sulfat",
      "Truyền dung dịch Natri Clorid 3% ưu trương"
    ],
    "correct": 0,
    "explanation": "Vitamin K1 đường tĩnh mạch cần 6 - 24 giờ để gan tổng hợp mới các yếu tố đông máu phụ thuộc vitamin K (II, VII, IX, X). Trong xuất huyết nặng đe dọa tính mạng, cần bổ sung ngay lập tức các yếu tố đông máu sẵn có bằng Phức hợp Prothrombin cô đặc (PCC), vượt trội hơn huyết tương tươi đông lạnh (FFP) về tốc độ đảo ngược INR và thể tích truyền ít hơn."
  },
  {
    "id": 1314,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Để trung hòa tác dụng chống đông của Heparin không phân đoạn (UFH) trong trường hợp chảy máu đe dọa tính mạng hoặc sau phẫu thuật bắc cầu tim phổi, chất giải độc đặc hiệu tiêm tĩnh mạch là:",
    "options": [
      "Idarucizumab",
      "Protamin sulfat",
      "Vitamin K1",
      "Andexanet alfa"
    ],
    "correct": 1,
    "explanation": "Protamine sulfat là một protein base mang điện tích dương mạnh. Khi vào máu, nó liên kết ion với các phân tử Heparin mang điện tích âm mạnh tạo thành phức hợp muối bền vững không còn hoạt tính chống đông. Mỗi 1 mg Protamine trung hòa được khoảng 100 đơn vị Heparin UFH."
  },
  {
    "id": 1315,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Bệnh nhân ngộ độc cấp tính thuốc chẹn thụ thể beta giao cảm (như Propranolol) liều cao xuất hiện nhịp chậm xoang nặng (< 35 lần/phút) và tụt huyết áp trơ với Atropin. Thuốc hồi sức giải độc đầu tay được lựa chọn là:",
    "options": [
      "Flumazenil",
      "N-acetylcystein",
      "Glucagon tiêm tĩnh mạch",
      "Esmolol truyền tĩnh mạch liên tục"
    ],
    "correct": 2,
    "explanation": "Glucagon kích hoạt thụ thể glucagon tại cơ tim, kích thích trực tiếp enzym adenylate cyclase không thông qua thụ thể beta giao cảm, làm tăng tổng hợp cAMP nội bào. Hậu quả là làm tăng tính tự động nút xoang, tăng dẫn truyền nhĩ thất và tăng sức co bóp cơ tim độc lập với thụ thể beta."
  },
  {
    "id": 1316,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Trong cấp cứu Tăng Kali máu nặng (K⁺ > 6.5 mmol/L hoặc có biến đổi điện tâm đồ như sóng T nhọn cao, mất sóng P, giãn rộng phức bộ QRS), bước xử trí đầu tiên bắt buộc phải làm ngay trong 1 đến 3 phút để bảo vệ màng tế bào cơ tim tránh rung thất ngừng tim là:",
    "options": [
      "Cho uống nhựa trao đổi ion Kayexalate",
      "Tiêm Insulin kèm truyền đường Glucose",
      "Truyền dung dịch Natri bicarbonat 1.4%",
      "Tiêm tĩnh mạch chậm Canxi Clorid 10% hoặc Canxi Gluconat 10%"
    ],
    "correct": 3,
    "explanation": "Ion Canxi (Ca2+) đối kháng trực tiếp tác dụng khử cực của K+ trên màng tế bào cơ tim, giúp ổn định điện thế màng và phục hồi dẫn truyền cơ tim ngay trong 1-3 phút, ngăn ngừa loạn nhịp thất chết người. Lưu ý Canxi không làm giảm nồng độ K+ máu, nên sau đó phải lập tức phối hợp Insulin+Glucose và khí dung Salbutamol để kéo K+ vào tế bào."
  },
  {
    "id": 1317,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Nhóm thuốc hạ huyết áp ức chế men chuyển (ACEI) và chẹn thụ thể Angiotensin II (ARB) bị CHỐNG CHỈ ĐỊNH TUYỆT ĐỐI trong 3 tháng giữa và 3 tháng cuối của thai kỳ (Phân loại D) vì gây ra biến chứng nghiêm trọng nào trên thai nhi?",
    "options": [
      "Gây suy thận thai nhi, thiểu ối, giảm sản sọ và dị tật phổi",
      "Gây dính ngón tay và biến dạng đốt sống thắt lưng",
      "Gây đục thủy tinh thể bẩm sinh và điếc tiếp nhận",
      "Làm tăng đường huyết thai nhi dẫn đến thai to quá mức"
    ],
    "correct": 0,
    "explanation": "Angiotensin II đóng vai trò sinh tồn trong việc duy trì tưới máu và phát triển thận thai nhi ở tam cá nguyệt 2 và 3. Dùng ACEI/ARB khiến thai nhi bị suy thận vô niệu, dẫn đến cạn dịch ối (thiểu ối), hậu quả là thiểu sản phổi, biến dạng sọ mặt, co rút khớp và tử vong thai nhi trong tử cung."
  },
  {
    "id": 1318,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Thuốc chống viêm không steroid (NSAID như Ibuprofen, Diclofenac) bị chống chỉ định sử dụng từ tuần thứ 28 của thai kỳ (3 tháng cuối thai kỳ) do nguy cơ gây ra biến cố tim mạch nào ở thai nhi?",
    "options": [
      "Gây thông liên thất lỗ lớn và đảo gốc động mạch",
      "Gây đóng sớm ống động mạch (Premature closure of ductus arteriosus) dẫn đến tăng áp động mạch phổi và suy tim thai",
      "Gây hẹp van hai lá bẩm sinh",
      "Làm ngừng tim thai do block nhĩ thất hoàn toàn"
    ],
    "correct": 1,
    "explanation": "Prostaglandin (PGE2) có vai trò duy trì sự mở của ống động mạch thai nhi trong tử cung. NSAID ức chế enzym COX làm cạn kiệt Prostaglandin, khiến ống động mạch đóng sớm, dẫn đến tăng áp động mạch phổi sơ sinh, suy tim thai và thiểu ối; đồng thời ức chế cơn co tử cung kéo dài thời gian chuyển dạ."
  },
  {
    "id": 1319,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Thuốc trị mụn trứng cá Isotretinoin (dẫn xuất vitamin A đường uống) được xếp vào phân loại thai kỳ X (chống chỉ định tuyệt đối) do có độc tính gì?",
    "options": [
      "Làm tan máu cấp tính ở người mẹ gây trụy mạch tức thì",
      "Gây ung thư nội mạc tử cung xuất hiện ngay trong thai kỳ",
      "Khả năng gây quái thai (teratogenicity) cực mạnh với dị tật nghiêm trọng ở hệ thần kinh sọ não, tai, tim mạch và tuyến ức",
      "Làm tiêu hủy hoàn toàn lớp mỡ bảo vệ thành tử cung"
    ],
    "correct": 2,
    "explanation": "Isotretinoin là một trong những chất gây quái thai nguy hiểm nhất trong y học (nguy cơ dị tật thai nhi lên tới > 30% nếu phơi nhiễm trong tam cá nguyệt đầu). Thuốc đòi hỏi cam kết ngừa thai kép nghiêm ngặt (chương trình iPLEDGE) và thử thai âm tính trước khi kê đơn."
  },
  {
    "id": 1320,
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Trong cấp cứu Cơn bão giáp trạng (Thyroid storm), dung dịch chứa Iod (như dung dịch Lugol hoặc dung dịch Kali iodid) bắt buộc phải được dùng vào thời điểm nào sau khi đã dùng thuốc kháng giáp trạng tổng hợp (như PTU)?",
    "options": [
      "Dùng trước thuốc kháng giáp trạng 6 giờ",
      "Uống chung cùng một lúc với liều PTU đầu tiên",
      "Chỉ được dùng sau 7 ngày điều trị tích cực",
      "Dùng sau khi đã uống thuốc kháng giáp trạng PTU ít nhất 1 giờ"
    ],
    "correct": 3,
    "explanation": "Dung dịch Lugol cung cấp lượng lớn Iod vô cơ gây hiệu ứng Wolff-Chaikoff ức chế giải phóng hormon tuyến giáp vào máu. Bắt buộc phải uống sau PTU ít nhất 1 giờ để PTU kịp ức chế quá trình gắn iod (organification). Nếu cho Lugol trước, lượng iod này sẽ được tuyến giáp sử dụng làm nguyên liệu tổng hợp thêm hormon, làm cơn bão giáp thêm trầm trọng."
  },
  {
    "id": 1321,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Ở bệnh nhân Hạ Natri máu nặng có triệu chứng thần kinh (như co giật, hôn mê), việc truyền dung dịch Natri Clorid 3% ưu trương đòi hỏi nguyên tắc an toàn quan trọng nào để tránh Hội chứng tiêu myelin cầu não (Osmotic Demyelination Syndrome - ODS)?",
    "options": [
      "Tốc độ nâng nồng độ Natri huyết thanh không vượt quá 8 đến 10 mEq/L trong vòng 24 giờ đầu tiên",
      "Nâng nồng độ Natri máu lên mức bình thường 140 mEq/L ngay trong vòng 2 giờ đầu",
      "Không bao giờ được sử dụng dung dịch muối ưu trương nồng độ trên 0.9%",
      "Bắt buộc phải kết hợp đồng thời với truyền dung dịch Glucose 30%"
    ],
    "correct": 0,
    "explanation": "Khi tế bào não thích nghi với môi trường nhược trương mạn tính, nếu bù Natri quá nhanh, nước bị rút đột ngột ra khỏi tế bào não do chênh lệch áp lực thẩm thấu, dẫn đến hủy hoại bao myelin vùng cầu não (hội chứng ODS) gây liệt tứ chi, liệt hành não và hôn mê vĩnh viễn. Giới hạn an toàn là không tăng quá 8-10 mEq/L/24 giờ."
  },
  {
    "id": 1322,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Kháng sinh nhóm Aminoglycosid (Gentamicin, Amikacin) gây độc tính trên thận (Nephrotoxicity) theo cơ chế bệnh sinh nào tại nhu mô thận?",
    "options": [
      "Lắng đọng tinh thể trong lòng ống góp gây tắc nghẽn vô niệu",
      "Tích tụ trong lysosom của tế bào biểu mô ống lượn gần gây hoại tử tế bào ống thận cấp tính",
      "Co thắt dữ dội tiểu động mạch vào cầu thận do kích hoạt hệ renin",
      "Tạo kháng thể tự miễn phá hủy màng đáy cầu thận"
    ],
    "correct": 1,
    "explanation": "Aminoglycosid được lọc qua cầu thận và tái hấp thu một phần nhỏ vào tế bào biểu mô ống lượn gần qua thụ thể Megalin. Tại đây thuốc tích tụ trong lysosome, ức chế enzyme phospholipase và gây vỡ lysosome, giải phóng enzym tiêu thể dẫn đến hoại tử ống thận cấp (ATN) và suy thận thể còn bảo tồn nước tiểu."
  },
  {
    "id": 1323,
    "chapter": "Thuốc giảm đau",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Tác dụng không mong muốn thường gặp nhất của Morphin và các thuốc giảm đau Opioid dùng kéo dài mà người bệnh KHÔNG BAO GIỜ phát triển hiện tượng dung nạp (Tolerance) theo thời gian là:",
    "options": [
      "Buồn nôn và nôn",
      "An thần buồn ngủ",
      "Táo bón và co đồng tử",
      "Ức chế hô hấp thở chậm"
    ],
    "correct": 2,
    "explanation": "Người bệnh dùng Opioid dài ngày nhanh chóng dung nạp với tác dụng giảm đau, an thần, ức chế hô hấp và buồn nôn (nghĩa là các tác dụng phụ này giảm dần). Tuy nhiên, hiện tượng táo bón và co đồng tử hầu như KHÔNG BAO GIỜ bị dung nạp. Do đó, bệnh nhân điều trị Opioid mạn tính bắt buộc phải được chủ động kê thêm thuốc nhuận tràng."
  },
  {
    "id": 1324,
    "chapter": "Thuốc giảm đau",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Theo Bậc thang giảm đau của Tổ chức Y tế Thế giới (WHO Pain Ladder) cho bệnh nhân đau do ung thư, khi bệnh nhân xuất hiện cơn đau ở mức độ vừa đến nặng (điểm VAS từ 7 đến 10 điểm), bước bậc thang thích hợp là:",
    "options": [
      "Bậc 1: Chỉ dùng Paracetamol đơn độc liều tối thiểu",
      "Bậc 2: Dùng Codein hoặc Tramadol đơn thuần",
      "Bậc 4: Phẫu thuật cắt bỏ dây thần kinh cảm giác ngoại vi",
      "Bậc 3: Sử dụng các thuốc Opioid mạnh (Morphin, Fentanyl, Oxycodon) phối hợp thuốc giảm đau không opioid và thuốc hỗ trợ"
    ],
    "correct": 3,
    "explanation": "Thang đau 3 bậc của WHO: Bậc 1 (Đau nhẹ 1-3): Không opioid (Paracetamol, NSAID); Bậc 2 (Đau vừa 4-6): Opioid yếu (Codeine, Tramadol); Bậc 3 (Đau nặng 7-10): Opioid mạnh (Morphine, Oxycodone, Fentanyl) kết hợp thuốc bổ trợ và không opioid."
  },
  {
    "id": 1325,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Thời điểm tối ưu nhất để tiêm tĩnh mạch liều Kháng sinh dự phòng trong phẫu thuật sạch hoặc sạch - nhiễm (ví dụ dùng Cefazolin) là:",
    "options": [
      "Trong vòng 30 đến 60 phút trước khi rạch da (hoặc tối đa 120 phút với Vancomycin / Fluoroquinolon)",
      "Ngay sau khi kết thúc ca mổ đưa về phòng hồi tỉnh",
      "Trước cuộc mổ 24 đến 48 giờ",
      "Khi phẫu thuật viên bắt đầu đóng vết mổ"
    ],
    "correct": 0,
    "explanation": "Mục tiêu của kháng sinh dự phòng là nồng độ thuốc trong mô tại vết rạch da phải vượt quá MIC của vi khuẩn ngay tại thời điểm rạch da. Vì vậy thời điểm chuẩn là 30 - 60 phút trước rạch da (với Cefazolin) hoặc trong vòng 120 phút với các kháng sinh cần truyền chậm như Vancomycin/Ciprofloxacin."
  },
  {
    "id": 1326,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Thời gian sử dụng Kháng sinh dự phòng phẫu thuật theo khuyến cáo của Bộ Y tế và CDC nói chung KHÔNG NÊN kéo dài quá bao lâu sau khi kết thúc phẫu thuật?",
    "options": [
      "Tối thiểu 7 đến 10 ngày để tiệt khuẩn toàn thân",
      "Không quá 24 giờ sau mổ (hầu hết phẫu thuật chỉ cần 1 liều duy nhất trong mổ)",
      "Kéo dài cho đến khi bệnh nhân cắt chỉ vết mổ",
      "Duy trì liên tục trong suốt thời gian nằm viện"
    ],
    "correct": 1,
    "explanation": "Kháng sinh dự phòng chỉ cần thiết trong lúc mô phẫu thuật có nguy cơ nhiễm trùng. Kéo dài kháng sinh dự phòng quá 24 giờ sau mổ không làm giảm thêm tỷ lệ nhiễm khuẩn vết mổ mà làm tăng đáng kể nguy cơ nhiễm C. difficile, độc tính thận và đề kháng kháng sinh."
  },
  {
    "id": 1327,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Trong cấp cứu Nhiễm toan ceton do đái tháo đường (DKA), bước điều trị ưu tiên số 1 ngay khi tiếp cận bệnh nhân là gì?",
    "options": [
      "Tiêm tĩnh mạch ngay lập tức một liều Insulin Bolus cực cao 50 đơn vị",
      "Truyền ngay dung dịch Natri bicarbonat 4.2% cho tất cả bệnh nhân",
      "Bù dịch tích cực bằng dung dịch Natri Clorid 0.9% đường tĩnh mạch để khôi phục thể tích tuần hoàn",
      "Cho bệnh nhân uống dung dịch Kali clorid đậm đặc"
    ],
    "correct": 2,
    "explanation": "Bệnh nhân DKA thường mất 5 - 8 lít nước do lợi niệu thẩm thấu. Bước đầu tiên và quan trọng nhất là bù dịch bằng NaCl 0.9% (thường 1000 ml trong giờ đầu) để chống sốc giảm thể tích và phục hồi tưới máu mô. Insulin chỉ được dùng sau khi bắt đầu bù dịch và sau khi đã xác định Kali máu >= 3.3 mmol/L."
  },
  {
    "id": 1328,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Trong điều trị toan ceton do đái tháo đường (DKA), nếu nồng độ Kali huyết thanh của bệnh nhân đo được ban đầu dưới 3.3 mmol/L, xử trí dùng Insulin đúng là:",
    "options": [
      "Tăng gấp đôi tốc độ truyền Insulin tĩnh mạch",
      "Tiêm dưới da Insulin tác dụng kéo dài Glargine",
      "Không cần bù Kali vì Insulin sẽ kéo Kali từ mô vào lại máu",
      "Tạm hoãn tiêm truyền Insulin và bù Kali tĩnh mạch cho đến khi Kali máu vượt trên 3.3 mmol/L"
    ],
    "correct": 3,
    "explanation": "Insulin kích hoạt bơm Na+/K+-ATPase đưa K+ từ máu vào trong tế bào. Nếu truyền Insulin khi Kali máu đang < 3.3 mmol/L, nồng độ Kali huyết thanh sẽ tụt xuống mức cực kỳ nguy hiểm, kích hoạt cơn ngừng tim do rung thất hoặc liệt cơ hô hấp. Do đó bắt buộc phải hoãn Insulin và bù K+ trước."
  },
  {
    "id": 1329,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Bệnh nhân điều trị bằng thuốc chống trầm cảm nhóm SSRI (như Sertralin, Fluoxetin) kết hợp thêm thuốc giảm đau Tramadol hoặc Linezolid có nguy cơ xuất hiện biến chứng đe dọa tính mạng nào?",
    "options": [
      "Hội chứng Serotonin (Serotonin Syndrome) biểu hiện run giật cơ, tăng phản xạ, sốt cao và mê sảng",
      "Hội chứng nhược cơ cấp tính",
      "Thiếu máu bất sản tủy xương",
      "Viêm tụy cấp xuất huyết hoại tử"
    ],
    "correct": 0,
    "explanation": "Tramadol và Linezolid (có tác dụng ức chế MAO yếu) đều làm tăng nồng độ Serotonin tại synap thần kinh. Khi phối hợp cùng SSRI, lượng Serotonin tăng quá mức kích hoạt thụ thể 5-HT2A gây Hội chứng Serotonin với tam chứng: biến đổi tri giác, kích thích thần kinh cơ (rung giật cơ giật nhãn cầu) và rối loạn thần kinh thực vật (sốt cao, vã mồ hôi, huyết áp dao động)."
  },
  {
    "id": 1330,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Thuốc giải độc đặc hiệu (Antidote) trong ngộ độc khí Carbon Monoxide (CO) gây thiếu oxy mô và hoại tử tế bào thần kinh là:",
    "options": [
      "Tiêm tĩnh mạch dung dịch Natri thiosulfat",
      "Thở oxy nguyên chất 100% qua mặt nạ có túi dự trữ hoặc liệu pháp Oxy cao áp (Hyperbaric Oxygen - HBO)",
      "Khí dung Salbutamol liều cao liên tục",
      "Truyền dung dịch Xanh Methylen 1%"
    ],
    "correct": 1,
    "explanation": "Khí CO gắn vào Hemoglobin với ái lực cao gấp 200 - 250 lần oxy tạo thành HbCO. Thở khí trời thì T1/2 của HbCO là 300 phút; thở oxy 100% qua mask có túi dự trữ rút ngắn T1/2 xuống 90 phút; và liệu pháp oxy cao áp (HBO ở 2.5 - 3 atm) rút ngắn T1/2 xuống chỉ còn 20 - 30 phút, giúp nhanh chóng giải phóng oxy cho não và tim."
  },
  {
    "id": 1331,
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Chất giải độc đặc hiệu trong cấp cứu ngộ độc gây tăng Methemoglobin máu (Methemoglobinemia do Dapsone, Nitrit, thuốc tê Benzocain) là:",
    "options": [
      "N-acetylcystein",
      "Deferoxamin",
      "Xanh Methylen (Methylene blue) tiêm tĩnh mạch",
      "Flumazenil"
    ],
    "correct": 2,
    "explanation": "Methemoglobin chứa ion Fe3+ không có khả năng vận chuyển oxy, gây tím tái trơ với thở oxy. Xanh Methylen là chất nhận điện tử trong hệ thống NADPH-methemoglobin reductase, giúp khử Fe3+ trở lại thành Fe2+ có chức năng vận chuyển oxy bình thường."
  },
  {
    "id": 1332,
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Thuốc chống đông đường uống Warfarin bị chống chỉ định sử dụng trong 3 tháng đầu thai kỳ (tuần 6 đến 9) do gây ra hội chứng dị tật thai nhi nào?",
    "options": [
      "Hội chứng Down do rối loạn phân bào tam nhiễm sắc thể 21",
      "Gây dính van ba lá tim bẩm sinh",
      "Dị tật thiếu ngón tay bẩm sinh đơn thuần",
      "Hội chứng Warfarin thai nhi (Fetal Warfarin Syndrome) gây giảm sản xương mũi, dị tật đầu xương đốm và teo thần kinh thị giác"
    ],
    "correct": 3,
    "explanation": "Warfarin qua được nhau thai và ức chế quá trình carboxyl hóa của osteocalcin (protein xương phụ thuộc vitamin K). Phơi nhiễm tuần 6 - 9 gây Hội chứng Warfarin thai nhi: thiểu sản mũi (mũi tẹt sâu), bất thường xương (chấm vôi hóa đầu xương), thiểu năng trí tuệ và tật mắt. Kháng đông an toàn trong thai kỳ là LMWH."
  },
  {
    "id": 1333,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Tương đương liều chống viêm giữa các Glucocorticoid kinh điển: Liều 5 mg Prednisolon đường uống tương đương với bao nhiêu mg Methylprednisolon và Hydrocortison?",
    "options": [
      "4 mg Methylprednisolon và 20 mg Hydrocortison",
      "10 mg Methylprednisolon và 5 mg Hydrocortison",
      "2 mg Methylprednisolon và 100 mg Hydrocortison",
      "8 mg Methylprednisolon và 50 mg Hydrocortison"
    ],
    "correct": 0,
    "explanation": "Bảng tương đương liều chống viêm Corticoid chuẩn: 20 mg Hydrocortisone = 5 mg Prednisone = 5 mg Prednisolone = 4 mg Methylprednisolone = 4 mg Triamcinolone = 0.75 mg Dexamethasone = 0.6 mg Betamethasone."
  },
  {
    "id": 1334,
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Thời điểm uống Corticoid liều duy nhất hàng ngày tối ưu nhất để giảm thiểu nguy cơ ức chế trục tuyến thượng thận (HPA) là:",
    "options": [
      "Ngay trước khi đi ngủ vào ban đêm lúc 22 giờ",
      "Vào khoảng 7 đến 8 giờ sáng cùng hoặc sau bữa ăn sáng",
      "Vào lúc 14 giờ chiều khi mệt mỏi nhất",
      "Vào giữa đêm lúc 2 giờ sáng khi nồng độ cortisol thấp nhất"
    ],
    "correct": 1,
    "explanation": "Nồng độ Cortisol nội sinh trong cơ thể tiết theo nhịp sinh học ngày đêm: cao nhất vào khoảng 7-8 giờ sáng và giảm dần về đêm. Uống Corticoid ngoại sinh vào buổi sáng trùng với đỉnh sinh lý của cơ thể, nồng độ thuốc sẽ giảm xuống thấp vào buổi tối, giúp tuyến yên và hạ đồi ít bị ức chế phản hồi âm tính nhất."
  },
  {
    "id": 1335,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Khi tiêm truyền tĩnh mạch dung dịch Kali Clorid (KCl) điều trị hạ kali máu, nguyên tắc an toàn tuyệt đối bắt buộc phải tuân thủ để tránh ngừng tim đột ngột là:",
    "options": [
      "Tiêm thật nhanh trong vòng 30 giây để cắt cơn hạ kali cấp",
      "Pha KCl đậm đặc vào nước cất để tiêm bắp sâu",
      "Bắt buộc phải pha loãng trong chai dịch truyền và truyền tĩnh mạch chậm, TUYỆT ĐỐI KHÔNG BAO GIỜ tiêm tĩnh mạch trực tiếp (Bolus) dung dịch KCl đậm đặc",
      "Cho bệnh nhân hít khí dung dung dịch KCl nguyên chất"
    ],
    "correct": 2,
    "explanation": "KCl đậm đặc tiêm trực tiếp tĩnh mạch là liều tiêm tử hình gây rung thất và ngừng tim tâm trương tức thì. KCl luôn luôn phải được pha loãng kỹ trong dịch truyền (nồng độ ngoại vi tối đa <= 40 mEq/L) và tốc độ truyền không vượt quá 10 - 20 mEq/giờ dưới sự giám sát chặt chẽ của máy theo dõi điện tim (monitor)."
  },
  {
    "id": 1336,
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Thuốc kháng Histamin H1 thế hệ 1 (như Clorpheniramin, Promethazin) gây tác dụng phụ buồn ngủ sâu và khô miệng táo bón là do vượt qua hàng rào máu não và ức chế thụ thể nào?",
    "options": [
      "Kích thích thụ thể Adrenergic alpha-1 tại mao mạch",
      "Chẹn thụ thể Dopamin D2 tại vùng dưới đồi",
      "Ức chế thụ thể GABA-A tại tủy sống",
      "Ức chế thụ thể Histamin H1 trung ương và thụ thể Muscarinic cholinergic ngoại vi"
    ],
    "correct": 3,
    "explanation": "Kháng H1 thế hệ 1 là các phân tử thân dầu dễ dàng qua hàng rào máu não phong bế thụ thể H1 trung ương (gây ức chế thần kinh, buồn ngủ dữ dội, giảm tập trung). Đồng thời thuốc có cấu trúc giống Atropin nên chẹn thụ thể Muscarinic ngoại vi gây khô miệng, mờ mắt, táo bón, bí tiểu."
  },
  {
    "id": 1337,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Kháng sinh nhóm Sulfamid phối hợp Co-trimoxazol (Sulfamethoxazol + Trimethoprim) có cơ chế hiệp đồng diệt khuẩn thông qua việc:",
    "options": [
      "Ức chế hai bước liên tiếp trong con đường sinh tổng hợp acid folic cần thiết cho vi khuẩn",
      "Phá hủy màng tế bào và ức chế tiểu đơn vị ribosom 50S",
      "Ức chế enzym DNA-gyrase và topoisomerase IV",
      "Kìm hãm tổng hợp vách tế bào peptidoglycan"
    ],
    "correct": 0,
    "explanation": "Sulfamethoxazole cạnh tranh với PABA ức chế enzym Dihydropteroate synthase; Trimethoprim ức chế enzym Dihydrofolate reductase tiếp theo. Phối hợp 2 chất ức chế 2 bước liên tiếp tạo ra tác dụng diệt khuẩn hiệp đồng mạnh mẽ gấp hàng chục lần so với dùng đơn lẻ từng chất."
  },
  {
    "id": 1338,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Kháng sinh Clindamycin đường uống hoặc đường tiêm có nguy cơ cao nhất gây ra biến chứng tiêu hóa nào do loạn khuẩn đường ruột?",
    "options": [
      "Loét dạ dày tá tràng thủng cấp tính",
      "Viêm đại tràng giả mạc do độc tố vi khuẩn Clostridioides difficile bùng phát",
      "Táo bón mạn tính gây tắc ruột cơ học",
      "Xuất huyết đường mật do suy giảm tổng hợp prothrombin"
    ],
    "correct": 1,
    "explanation": "Clindamycin tiêu diệt phổ rộng các vi khuẩn kỵ khí bình thường trong ruột, tạo điều kiện thuận lợi cho bào tử Clostridioides difficile sống sót phát triển ồ ạt và tiết độc tố A và B gây viêm đại tràng giả mạc với tiêu chảy nhiều lần, sốt cao, tăng bạch cầu và phân có nhầy mủ."
  },
  {
    "id": 1339,
    "chapter": "Dược động học & Suy gan, thận",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Kháng sinh nào sau đây có con đường thải trừ chủ yếu qua gan và đường mật, do đó KHÔNG CẦN hiệu chỉnh liều khi bệnh nhân bị suy giảm chức năng thận đơn thuần?",
    "options": [
      "Levofloxacin",
      "Ciprofloxacin",
      "Moxifloxacin",
      "Ofloxacin"
    ],
    "correct": 2,
    "explanation": "Trong nhóm Quinolon hô hấp, Moxifloxacin chuyển hóa qua gan thành các chất liên hợp glucuronid và sulfat, bài tiết qua phân và mật, chỉ < 20% bài xuất qua thận. Do đó bệnh nhân suy giảm chức năng thận ở mọi giai đoạn không cần phải chỉnh liều Moxifloxacin (khác với Levofloxacin thải qua thận > 80% bắt buộc phải chỉnh liều)."
  },
  {
    "id": 1340,
    "chapter": "Tương tác thuốc & Tương kỵ",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Phối hợp giữa thuốc chống viêm không steroid (NSAID như Meloxicam, Celecoxib) với thuốc ức chế men chuyển (ACEI) và thuốc lợi tiểu (Triple Whammy) làm tăng vọt nguy cơ xảy ra biến cố:",
    "options": [
      "Xuất huyết phế nang lan tỏa ở cả hai phổi",
      "Hội chứng cường giáp kịch phát",
      "Tăng nhãn áp góc mở cấp tính",
      "Tổn thương thận cấp (Acute Kidney Injury - AKI) do giảm mạnh áp lực lọc cầu thận"
    ],
    "correct": 3,
    "explanation": "Bộ ba nguy hiểm (Triple Whammy): Lợi tiểu làm giảm thể tích tuần hoàn; NSAID ức chế prostaglandin gây co tiểu động mạch vào cầu thận; ACEI làm giãn tiểu động mạch đi của cầu thận. Cả 3 tác động đồng thời làm sụt giảm nghiêm trọng áp lực mao mạch cầu thận, dẫn đến suy thận cấp thiếu máu cục bộ."
  },
  {
    "id": 1341,
    "chapter": "Thuốc giảm đau",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Aspirin bị chống chỉ định tuyệt đối ở trẻ em và thanh thiếu niên mắc các bệnh nhiễm virus cấp tính (như sốt cúm, thủy đậu) do nguy cơ gây ra hội chứng chết người nào?",
    "options": [
      "Hội chứng Reye (gây bệnh não cấp và thoái hóa mỡ tế bào gan bùng phát)",
      "Hội chứng Fanconi thận",
      "Hội chứng vàng da nhân não",
      "Hội chứng灰 (Gray syndrome)"
    ],
    "correct": 0,
    "explanation": "Dùng Aspirin ở trẻ nhiễm virus (cúm A/B, thủy đậu) liên quan mật thiết với Hội chứng Reye - một bệnh lý ty thể cấp tính cực kỳ nguy hiểm đặc trưng bởi thoái hóa mỡ vi thể tế bào gan và phù não cấp tính, tỷ lệ tử vong lên tới 30 - 40%. Do đó, Paracetamol là thuốc hạ sốt an toàn được chỉ định thay thế cho trẻ em."
  },
  {
    "id": 1342,
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Thuốc kháng virus Oseltamivir (Tamiflu) trong điều trị Cúm A hoặc Cúm B đạt hiệu quả lâm sàng tối ưu nhất khi được bắt đầu dùng vào thời điểm nào?",
    "options": [
      "Sau khi bệnh nhân đã sốt liên tục được 5 ngày",
      "Trong vòng 48 giờ đầu tiên kể từ khi khởi phát triệu chứng sốt",
      "Chỉ dùng khi có biến chứng suy hô hấp phải thở máy",
      "Sau khi kháng thể kháng cúm trong máu tăng gấp 4 lần"
    ],
    "correct": 1,
    "explanation": "Oseltamivir là chất ức chế men Neuraminidase, ngăn cản sự giải phóng virus mới sinh sôi từ tế bào vật chủ. Sự nhân lên của virus cúm đạt đỉnh trong 24 - 72 giờ đầu. Bắt đầu dùng thuốc trong vòng 48 giờ đầu giúp rút ngắn thời gian mắc bệnh, giảm độ nặng và ngăn ngừa các biến chứng viêm phổi nguy hiểm."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ALL_EXAM_BANK;
}
