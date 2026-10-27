const fs = require('fs');
const path = require('path');

// Rebalancing Module 1 (Chapters 1 - 4: 98 questions)
// Objectives:
// 1. Eliminate length bias: Distractors are often longer or equal to correct answer.
// 2. High clinical realism: Replace absurd/joke options with realistic pharmacology distractors.
// 3. Parallel syntactic structures.

const updates = {
  18: { // ID 18, c: 1
    options: [
      "Trực tiếp chỉ định can thiệp phẫu thuật và ký duyệt bệnh án xuất viện",
      "Xây dựng danh mục thuốc và giám sát sử dụng thuốc an toàn hợp lý",
      "Chịu trách nhiệm bảo dưỡng hệ thống máy xạ trị và trang thiết bị y tế",
      "Độc lập kê đơn thay thế bác sĩ điều trị tại các khoa lâm sàng nội trú"
    ],
    correct: 1
  },
  20: { // ID 20, c: 3
    options: [
      "Tối đa hóa doanh thu bán lẻ thuốc và giảm số lượng nhân sự tại quầy",
      "Rút ngắn tối đa thời gian lưu bệnh án nhằm tăng lượt khám bệnh trong ngày",
      "Hạn chế tối đa thời gian trao đổi chuyên môn trực tiếp với người bệnh",
      "Đảm bảo người bệnh hiểu rõ liều dùng, đường dùng và các lưu ý an toàn"
    ],
    correct: 3
  },
  21: { // ID 21, c: 0
    options: [
      "Trình bày ngắn gọn, dễ hiểu và tránh thuật ngữ y khoa phức tạp",
      "Sử dụng đầy đủ danh pháp quốc tế INN và cấu trúc hóa học phân tử",
      "Trích dẫn nguyên văn toàn bộ chuyên khảo Dược thư quốc gia mới nhất",
      "Sử dụng các ký hiệu viết tắt chuyên sâu để tối ưu hóa thời gian tư vấn"
    ],
    correct: 0
  },
  23: { // ID 23, c: 2
    options: [
      "Giúp nhân viên y tế thuận tiện trong việc thống kê chi phí viện phí",
      "Tăng số lượng thuốc phối hợp để nâng cao doanh số bán thuốc bệnh viện",
      "Giúp người bệnh tránh nhầm lẫn và tuân thủ đúng phác đồ điều trị",
      "Rút ngắn thời gian hội chẩn lâm sàng giữa các bác sĩ điều trị chuyên khoa"
    ],
    correct: 2
  },
  24: { // ID 24, c: 3
    options: [
      "Kê đơn độc lập và thay thế hoàn toàn bác sĩ điều trị tại khoa phòng",
      "Chịu trách nhiệm pháp lý cao nhất về kết quả chẩn đoán bệnh lâm sàng",
      "Thực hiện các thủ thuật can thiệp ngoại khoa cấp cứu cho người bệnh",
      "Cầu nối tư vấn tối ưu hóa điều trị dùng thuốc giữa bác sĩ và người bệnh"
    ],
    correct: 3
  },
  25: { // ID 25, c: 0
    options: [
      "Khả năng khỏi bệnh cao và nguy cơ tác dụng phụ ở mức thấp nhất",
      "Thời hạn bảo quản và độ ổn định hóa học kéo dài trên 5 năm ở kho",
      "Giá thành sản phẩm rẻ nhất trên thị trường không cần tính sinh khả dụng",
      "Công nghệ bào chế nano phức tạp nhất bất kể kết quả thử nghiệm lâm sàng"
    ],
    correct: 0
  },
  28: { // ID 28, c: 3
    options: [
      "Bệnh nhân có phản xạ nuốt bình thường nhưng khó nuốt viên nén kích thước lớn",
      "Trẻ em trên 6 tuổi đã biết hợp tác uống thuốc dạng dung dịch pha loãng",
      "Người bệnh sốt cao cần hạ thân nhiệt nhanh bằng dung dịch paracetamol",
      "Bệnh nhân tăng huyết áp hoặc suy tim nặng cần tuân thủ chế độ ăn kiêng muối"
    ],
    correct: 3
  },
  34: { // ID 34, c: 1
    options: [
      "Lắng nghe tích cực các than phiền về tác dụng không mong muốn của thuốc",
      "Đặt câu hỏi đóng mang tính áp đặt hoặc mớm ý cho người bệnh trả lời",
      "Khai thác kỹ lưỡng tiền sử dị ứng thuốc và thực phẩm của bệnh nhân",
      "Kiểm tra lại toàn bộ vỉ thuốc và thực phẩm chức năng người bệnh mang theo"
    ],
    correct: 1
  },
  35: { // ID 35, c: 2
    options: [
      "Lựa chọn hoàn toàn theo thói quen và sở thích kê đơn của bác sĩ trưởng khoa",
      "Ưu tiên tối đa biệt dược gốc nhập khẩu đắt tiền không xét đến chi phí",
      "Căn cứ mô hình bệnh tật thực tế và hướng dẫn điều trị chuẩn có bằng chứng",
      "Chọn chế phẩm có giá thầu rẻ nhất bất kể sinh khả dụng và độ tinh khiết"
    ],
    correct: 2
  },
  36: { // ID 36, c: 3
    options: [
      "Thuốc mới được cấp số đăng ký lưu hành dưới 1 năm tại thị trường Việt Nam",
      "Thuốc có nguy cơ cao gây phụ thuộc thể chất và hội chứng cai nghiện",
      "Thuốc chỉ được sử dụng qua đường tiêm truyền tĩnh mạch tại bệnh viện",
      "Độc tính thấp, khoảng điều trị rộng và dùng điều trị triệu chứng thông thường"
    ],
    correct: 3
  },
  37: { // ID 37, c: 0
    options: [
      "Giám sát nồng độ thuốc trong huyết tương để tối ưu hóa liều điều trị",
      "Định lượng giới hạn tạp chất lạ trong nguyên liệu sản xuất thuốc viên",
      "Kiểm kê đối soát số lượng thuốc tồn kho định kỳ vào cuối mỗi tháng",
      "Theo dõi nhiệt độ và độ ẩm của hệ thống kho bảo quản đạt chuẩn GSP"
    ],
    correct: 0
  },
  38: { // ID 38, c: 1
    options: [
      "Tự ý mua thêm một loại kháng sinh phổ rộng khác uống kèm để phòng ngừa",
      "Uống ngay khi nhớ ra nhưng không uống gấp đôi nếu gần cữ thuốc kế tiếp",
      "Ngừng vĩnh viễn phác đồ đang dùng và chuyển sang thuốc điều trị khác",
      "Uống gộp gấp đôi liều lượng ngay lập tức để bù trừ nồng độ thuốc đã mất"
    ],
    correct: 1
  },
  42: { // ID 42, c: 1
    options: [
      "Tỷ lệ thể tích phân bố của hoạt chất trong mô mỡ so với trong huyết tương",
      "Tỷ lệ giữa diện tích dưới đường cong AUC của hai chế phẩm nghiên cứu",
      "Thời hạn bảo quản và độ ổn định hóa học ghi trên nhãn bao bì của thuốc",
      "Tốc độ lắng máu và độ thanh thải creatinin ước tính của người tình nguyện"
    ],
    correct: 1
  },
  43: { // ID 43, c: 2
    options: [
      "Bổ sung vitamin B12 cho người bệnh sau phẫu thuật cắt toàn phần dạ dày",
      "Chỉ định vitamin B6 phòng ngừa độc tính thần kinh cho người điều trị Lao",
      "Lạm dụng kê vitamin khi khẩu phần ăn hàng ngày đã cân đối và đầy đủ",
      "Bổ sung dự phòng vitamin D và sắt cho trẻ sinh non nhẹ cân dưới 32 tuần"
    ],
    correct: 2
  },
  44: { // ID 44, c: 3
    options: [
      "Năm học chuyên sâu về quản trị kinh doanh và tiếp thị dược phẩm thương mại",
      "Năm thực tập toàn thời gian về tổng hợp hóa dược tại các viện nghiên cứu",
      "Năm học lý thuyết thuần túy nâng cao tại giảng đường đại học y dược",
      "Năm viện - trường thực hành lâm sàng trực tiếp tại các khoa phòng bệnh viện"
    ],
    correct: 3
  },
  45: { // ID 45, c: 0
    options: [
      "So sánh chi phí điều trị và kết quả đầu ra về sức khỏe đạt được",
      "Đánh giá tỷ lệ hoa hồng chiết khấu cho các nhà phân phối dược phẩm",
      "Lựa chọn chế phẩm có giá mua rẻ nhất mà không cần xét tới hiệu quả lâm sàng",
      "Thống kê tổng doanh thu hàng năm từ việc bán thuốc cho các cơ sở y tế"
    ],
    correct: 0
  },
  46: { // ID 46, c: 1
    options: [
      "Thay thế toàn bộ thông tin trên tờ hướng dẫn sử dụng gốc của nhà sản xuất",
      "Nhắc nhở người bệnh về liều dùng, đường dùng, thời điểm và cảnh báo an toàn",
      "Cung cấp đầy đủ các chỉ số kiểm nghiệm hóa lý và tiêu chuẩn kỹ thuật của lô",
      "Mô tả chi tiết các thử nghiệm tiền lâm sàng trên động vật gặm nhấm thực nghiệm"
    ],
    correct: 1
  },
  47: { // ID 47, c: 2
    options: [
      "Dung dịch Oresol bù nước điện giải hoặc viên kẽm gluconat đường uống",
      "Viên ngậm khử khuẩn họng tyrothricin phối hợp kẹo ngậm giảm ho thảo dược",
      "Metronidazol, Cefoperazon và Paracetamol do tương tác gây độc tính",
      "Men vi sinh nấm men Saccharomyces boulardii hoặc bào tử Bacillus clausii"
    ],
    correct: 2
  },
  49: { // ID 49, c: 0
    options: [
      "Ngừng ngay thuốc nghi ngờ và báo cáo cho nhân viên y tế theo dõi",
      "Tự ý tăng gấp đôi liều dùng hiện tại để dập tắt nhanh triệu chứng bệnh",
      "Uống ngay một cốc nước chè đặc nóng hoặc nước chanh đường đậm đặc",
      "Tiếp tục uống thuốc đủ liệu trình một tháng rồi mới tới bệnh viện tái khám"
    ],
    correct: 0
  },
  66: { // ID 66, c: 1
    options: [
      "Đánh giá mức độ độc tính trực tiếp của thuốc trên các tế bào dòng tủy xương",
      "Xác định khoảng cách đưa thuốc và thời gian đạt trạng thái nồng độ ổn định",
      "Ước tính mức độ gắn kết của phân tử thuốc với thụ thể nội bào đích",
      "Xác định thể tích dịch ngoại bào tối thiểu cần thiết để hòa tan hết liều nạp"
    ],
    correct: 1
  },
  68: { // ID 68, c: 3
    options: [
      "Tăng liều dùng mỗi lần lên gấp ba lần và dùng một liều duy nhất mỗi tuần",
      "Ngừng vĩnh viễn việc dùng thuốc kháng sinh này và thay bằng aminoglycosid",
      "Tăng khoảng cách giữa các lần dùng thuốc và giữ nguyên liều từng lần tiêm",
      "Giữ nguyên khoảng cách đưa thuốc và giảm liều dùng trong mỗi lần tiêm"
    ],
    correct: 3
  },
  69: { // ID 69, c: 0
    options: [
      "Thuốc gắn kết rất mạnh vào các mô và tế bào sâu trong cơ thể",
      "Thuốc được lọc qua cầu thận và bài xuất theo nước tiểu với tốc độ cực nhanh",
      "Thuốc hòa tan hoàn toàn trong lòng mạch và không qua được màng mao mạch",
      "Thuốc không có khả năng liên kết với albumin và protein huyết tương"
    ],
    correct: 0
  },
  70: { // ID 70, c: 1
    options: [
      "Làm mất hoàn toàn tác dụng điều trị dược lý của thuốc trên cơ quan đích",
      "Tăng nồng độ thuốc ở dạng tự do có hoạt tính dẫn đến nguy cơ ngộ độc",
      "Làm giảm thời gian lưu giữ và thúc đẩy thoái hóa thuốc nhanh tại gan",
      "Tăng tốc độ gắn kết không thuận nghịch của phân tử thuốc vào hồng cầu"
    ],
    correct: 1
  },
  124: { // ID 124, c: 3
    options: [
      "Hạ đường huyết nghiêm trọng dẫn đến hôn mê do tăng tiết insulin tụy",
      "Loãng xương tiến triển nhanh và tăng nguy cơ gãy xương đùi tự phát",
      "Xuất huyết đường tiêu hóa trên ồ ạt do viêm loét trợt niêm mạc dạ dày",
      "Co mạch ngoại vi quá mức dẫn đến thiếu máu cục bộ và hoại tử đầu chi"
    ],
    correct: 3
  },
  127: { // ID 127, c: 2
    options: [
      "Tăng tác dụng kích ứng niêm mạc ống tiêu hóa gây đau thượng vị dữ dội",
      "Gây lắng đọng sắc tố làm biến đổi vĩnh viễn màu men răng của bệnh nhân",
      "Tanin trong chè tạo phức chelat kết tủa với sắt làm giảm mạnh hấp thu",
      "Làm tăng tốc độ hòa tan và gia tăng đột ngột sinh khả dụng của sắt"
    ],
    correct: 2
  },
  128: { // ID 128, c: 3
    options: [
      "Làm mất hoàn toàn tác dụng điều trị nấm toàn thân của Fluconazol",
      "Rút ngắn thời gian đông máu và kích hoạt hình thành huyết khối cấp",
      "Gây tăng huyết áp kịch phát ác tính dẫn đến xuất huyết não nguy kịch",
      "Kéo dài thời gian đông máu và gia tăng nguy cơ xuất huyết nghiêm trọng"
    ],
    correct: 3
  },
  131: { // ID 131, c: 2
    options: [
      "Aspirin ức chế quá trình bài tiết acid uric tại ống lượn gần của thận",
      "Aspirin kích thích trực tiếp tủy xương làm tăng nhạy cảm tế bào ung thư",
      "Aspirin đẩy Methotrexat khỏi protein huyết tương và giảm thải trừ tại thận",
      "Aspirin làm tăng tính thấm của hàng rào máu não đối với thuốc ức chế miễn dịch"
    ],
    correct: 2
  },
  136: { // ID 136, c: 3
    options: [
      "Gây viêm gan cấp tính do ứ trệ dòng chảy dịch mật tại các tiểu quản mật",
      "Kích hoạt quá trình hình thành huyết khối tĩnh mạch sâu chi dưới diện rộng",
      "Xuất huyết tử cung cơ năng nặng nề đe dọa trực tiếp tính mạng bệnh nhân",
      "Cảm ứng enzym gan làm giảm hiệu lực ngừa thai, tăng nguy cơ mang thai ngoài ý muốn"
    ],
    correct: 3
  },
  140: { // ID 140, c: 3
    options: [
      "Gây suy tủy xương dòng bạch cầu hạt cấp tính kèm theo sốt cao nhiễm trùng",
      "Làm mất tác dụng điều trị chống động kinh dẫn đến cơn co giật liên tục",
      "Gây tiêu chảy nhiễm trùng nặng nề do vi khuẩn Clostridium difficile phát triển",
      "Ức chế chuyển hóa Carbamazepin gây ngộ độc với chóng mặt, nhìn đôi và thất điều"
    ],
    correct: 3
  },
  142: { // ID 142, c: 1
    options: [
      "Thúc đẩy quá trình viêm xơ và đứt gân gót nhanh chóng hơn bình thường",
      "Ức chế chuyển hóa Theophyllin gây tăng nồng độ máu dẫn đến co giật và loạn nhịp",
      "Tăng cường bài xuất Theophyllin qua đường tiết niệu làm mất hiệu lực giãn phế quản",
      "Làm giảm mạnh nồng độ Ciprofloxacin dẫn đến thất bại điều trị kháng sinh"
    ],
    correct: 1
  },
  147: { // ID 147, c: 2
    options: [
      "Mở rộng phổ tác dụng kháng khuẩn của Ampicillin trên trực khuẩn kỵ khí",
      "Trung hòa phản ứng dị ứng và ngăn ngừa biến cố sốc phản vệ của Penicillin",
      "Ức chế bài tiết Ampicillin qua ống thận giúp duy trì nồng độ thuốc trong máu",
      "Làm tăng tốc độ hòa tan và gia tăng sinh khả dụng của Ampicillin tại ruột non"
    ],
    correct: 2
  },
  148: { // ID 148, c: 3
    options: [
      "Gây cơn tăng nhãn áp góc đóng cấp tính dẫn đến suy giảm thị lực vĩnh viễn",
      "Kích hoạt phản ứng hạ thân nhiệt đột ngột gây trụy tim mạch nguy kịch",
      "Khởi phát các cơn co giật động kinh toàn thể trên người bệnh tim mạch",
      "Cạnh tranh thụ thể COX-1 làm giảm tác dụng chống kết tập tiểu cầu của Aspirin"
    ],
    correct: 3
  },
  150: { // ID 150, c: 1
    options: [
      "Làm mất hoàn toàn tác dụng an thần gây ngủ ngay cả khi dùng liều tối đa",
      "Cảm ứng enzym gan mạn tính làm tăng nhu cầu liều thuốc mê và thuốc ngủ",
      "Làm chậm đáng kể thời gian khởi phát tác dụng gây mê trên bàn phẫu thuật",
      "Làm giảm nhu cầu liều do chức năng liên hợp glucuronid của gan bị suy giảm"
    ],
    correct: 1
  },
  154: { // ID 154, c: 1
    options: [
      "Gây tổn thương tế bào lông ốc tai dẫn đến điếc tiếp nhận không hồi phục",
      "Tăng ức chế chuyển hóa acid folic gây suy tủy nặng và giảm các dòng tế bào máu",
      "Khởi phát cơn tăng đường huyết cấp tính dẫn đến hôn mê nhiễm toan ceton",
      "Gây nhịp chậm xoang nặng nề tiến triển thành block nhĩ thất độ 3 nguy kịch"
    ],
    correct: 1
  },
  168: { // ID 168, c: 3
    options: [
      "Vùng da tiếp xúc chỉ xuất hiện dát đỏ thoáng qua nhưng không có sẩn phù",
      "Người bệnh có cảm giác ngứa nhẹ tại vị trí thử nhưng không có nốt sẩn",
      "Đường kính dát đỏ lan rộng trên 10 mm nhưng không có phù nề mô dưới da",
      "Đường kính nốt sẩn phù lớn hơn hoặc bằng 3 mm so với đối chứng âm"
    ],
    correct: 3
  },
  174: { // ID 174, c: 1
    options: [
      "Aspirin gây liệt cơ trơn và ức chế hoàn toàn phản xạ co thắt phế quản",
      "Ức chế COX làm chuyển hóa acid arachidonic theo con đường LOX tạo Leukotrien",
      "Aspirin kích thích trực tiếp tương bào giải phóng ồ ạt Histamin tự do",
      "Aspirin ức chế trung tâm hô hấp ở hành não gây suy giảm thông khí phế nang"
    ],
    correct: 1
  },
  194: { // ID 194, c: 1
    options: [
      "Omeprazol đường uống hoặc tiêm tĩnh mạch trong phác đồ loét dạ dày tá tràng",
      "Chloroquin và Hydroxychloroquin trong điều trị sốt rét và bệnh tự miễn",
      "Salbutamol dạng khí dung định liều trong cắt cơn co thắt phế quản cấp",
      "Paracetamol dạng viên nén hoặc viên sủi giảm đau hạ sốt thông thường"
    ],
    correct: 1
  },
  196: { // ID 196, c: 3
    options: [
      "Định lượng nồng độ Canxi toàn phần và Canxi ion hóa trong máu tĩnh mạch",
      "Xét nghiệm nồng độ Bilirubin toàn phần và Bilirubin trực tiếp huyết thanh",
      "Xét nghiệm soi cặn lắng nước tiểu tìm hồng cầu và trụ niệu vi thể",
      "Định lượng nồng độ Creatin Kinase (CK) huyết thanh để tầm soát tiêu cơ vân"
    ],
    correct: 3
  },
  198: { // ID 198, c: 1
    options: [
      "Làm biến đổi âm sắc khiến giọng nói của nam giới trở nên trầm và đục hơn",
      "Chứng to vú ở nam giới, rối loạn cương dương và giảm ham muốn tình dục",
      "Gây teo cơ vân nhanh chóng và thoái hóa xương xốp dẫn đến gãy xương",
      "Kích thích rậm lông cơ thể và tăng tiết bã nhờn gây viêm da trứng cá"
    ],
    correct: 1
  },
  200: { // ID 200, c: 3
    options: [
      "Cho bệnh nhân uống dung dịch Hydrocortison liều cao kết hợp thở oxy túi",
      "Đặt bệnh nhân nằm sấp dẫn lưu tư thế và tiến hành vỗ rung lồng ngực khẩn cấp",
      "Đặt sonde dạ dày rửa sạch dịch chứa dị nguyên còn đọng lại trong đường tiêu hóa",
      "Tiêm bắp Adrenalin ngay lập tức, cho thở oxy và chuẩn bị kiểm soát đường thở"
    ],
    correct: 3
  },
  208: { // ID 208, c: 3
    options: [
      "Kích thích tuyến nhầy đường niệu tiết quá mức gây tắc nghẽn bể thận cấp tính",
      "Tăng cường bài xuất canxi và phosphat vào trong nước tiểu gây vôi hóa ống thận",
      "Phá hủy cấu trúc màng đáy cầu thận gây hoại tử biểu mô đài bể thận tiến triển",
      "Thuốc và chất chuyển hóa acetyl kết tinh tạo sỏi trong nước tiểu có pH acid"
    ],
    correct: 3
  },
  825: { // ID 825, c: 0
    options: [
      "Thử nghiệm lâm sàng ngẫu nhiên có đối chứng, làm mù đôi và phân tích theo ITT",
      "Báo cáo loạt ca bệnh lâm sàng hồi cứu thực hiện tại một trung tâm y tế duy nhất",
      "Nghiên cứu quan sát thuần tập tiến cứu do công ty sản xuất biệt dược tài trợ kinh phí",
      "Tổng quan tài liệu chuyên gia đăng tải trên các trang web thông tin y dược trực tuyến"
    ],
    correct: 0
  },
  827: { // ID 827, c: 2
    options: [
      "Liều lượng tối đa cho phép sử dụng trong 24 giờ nhằm đảm bảo an toàn tuyệt đối",
      "Liều nạp tĩnh mạch cấp cứu duy nhất áp dụng cho tất cả bệnh nhân người lớn",
      "Liều duy trì trung bình mỗi ngày cho chỉ định chính ở người trưởng thành",
      "Liều gây chết trên 50% số lượng súc vật thí nghiệm trong thử nghiệm độc tính"
    ],
    correct: 2
  },
  830: { // ID 830, c: 1
    options: [
      "Tra cứu ngay lập tức các cơ sở dữ liệu y dược chuyên sâu như UpToDate hay Micromedex",
      "Xác định rõ danh tính người hỏi, nhu cầu thực sự và bối cảnh lâm sàng của câu hỏi",
      "Soạn thảo văn bản trả lời chính thức có chữ ký xác nhận của lãnh đạo khoa dược",
      "Từ chối cung cấp câu trả lời nếu người đặt câu hỏi là bệnh nhân hoặc người nhà"
    ],
    correct: 1
  },
  832: { // ID 832, c: 3
    options: [
      "Thuốc giảm đau hạ sốt phổ biến Paracetamol sử dụng qua đường uống hoặc đường đặt",
      "Dung dịch bù nước và điện giải đường uống Oresol theo tiêu chuẩn thẩm thấu thấp của WHO",
      "Các vitamin tan trong nước như vitamin C, vitamin B1 và vitamin B6 bổ sung dự phòng",
      "Thuốc có khoảng điều trị hẹp và độc tính nguy hiểm liên quan chặt chẽ tới nồng độ máu"
    ],
    correct: 3
  },
  833: { // ID 833, c: 0
    options: [
      "Đơn vị đo lường lâm sàng thực tế như số năm sống thêm hoặc số mmHg huyết áp giảm",
      "Chỉ số năm sống được điều chỉnh theo chất lượng cuộc sống (QALY) của người bệnh",
      "Điểm số thang điểm đánh giá mức độ hài lòng chủ quan của thân nhân người bệnh",
      "Quy đổi đồng nhất toàn bộ kết quả điều trị thành giá trị tiền tệ như VNĐ hoặc USD"
    ],
    correct: 0
  },
  837: { // ID 837, c: 0
    options: [
      "Xây dựng danh mục thuốc bệnh viện hợp lý và giám sát sử dụng thuốc an toàn",
      "Phân công lịch trực cấp cứu và điều động nhân sự bác sĩ giữa các khoa phòng lâm sàng",
      "Ký duyệt hợp đồng kinh tế mua sắm trang thiết bị văn phòng và máy tính bệnh viện",
      "Trực tiếp quản lý và thu viện phí điều trị của bệnh nhân tại quầy thanh toán viện phí"
    ],
    correct: 0
  },
  844: { // ID 844, c: 3
    options: [
      "Tái khám đúng lịch hẹn đã ghi trên sổ y bạ theo hướng dẫn của bác sĩ điều trị",
      "Thông báo kịp thời cho nhân viên y tế ngay khi phát hiện nốt ban đỏ bất thường trên da",
      "Bảo quản thuốc tại nơi khô ráo thoáng mát, tránh nhiệt độ cao và ánh sáng mặt trời",
      "Tự ý ngừng thuốc khi thấy triệu chứng thuyên giảm hoặc tự ý thay đổi liều dùng"
    ],
    correct: 3
  },
  845: { // ID 845, c: 0
    options: [
      "Số bệnh nhân cần điều trị để ngăn ngừa thêm một biến cố bất lợi lâm sàng",
      "Số bác sĩ chuyên khoa cần tham gia hội chẩn một ca bệnh nặng tại khoa hồi sức tích cực",
      "Số lần xét nghiệm cận lâm sàng bắt buộc phải thực hiện trước khi quyết định kê kháng sinh",
      "Số lượng viên thuốc tối thiểu người bệnh cần phải uống để đạt được nồng độ điều trị tối ưu"
    ],
    correct: 0
  },
  846: { // ID 846, c: 1
    options: [
      "Chi phí tài chính cho một liệu trình điều trị trên bệnh nhân càng thấp và tiết kiệm",
      "Độc tính của thuốc càng cao, nguy cơ gây tổn hại cho người bệnh càng lớn",
      "Tốc độ hấp thu và sinh khả dụng đường uống của hoạt chất diễn ra càng nhanh chóng",
      "Độ an toàn của thuốc càng vượt trội và rất hiếm khi gây ra tác dụng không mong muốn"
    ],
    correct: 1
  },
  848: { // ID 848, c: 3
    options: [
      "Có thể phối hợp bình thường nhưng cần tăng liều gấp đôi của cả hai loại thuốc",
      "Chỉ cần uống hai thuốc cách nhau tối thiểu 15 phút để tránh tiếp xúc trong dạ dày",
      "Cho bệnh nhân uống kèm lượng nước thật lớn để trung hòa tương tác hóa học giữa hai thuốc",
      "Tuyệt đối không được phối hợp hai thuốc này trong mọi hoàn cảnh lâm sàng"
    ],
    correct: 3
  },
  853: { // ID 853, c: 0
    options: [
      "Phá hủy cấu trúc kiểm soát giải phóng, phóng thích ồ ạt liều gây ngộ độc cấp",
      "Bột thuốc sau khi nghiền sẽ đông vón thành khối rắn gây tắc nghẽn cơ học ống tiêu hóa",
      "Hoạt chất bị oxy hóa trong không khí chuyển sang màu đen sẫm có độc tính cao",
      "Nghiền nhỏ viên thuốc làm khối lượng hoạt chất gia tăng đột ngột lên gấp nhiều lần"
    ],
    correct: 0
  },
  854: { // ID 854, c: 1
    options: [
      "Giải phóng hoạt chất kéo dài liên tục và đồng đều trong suốt 24 giờ tại đại tràng",
      "Bảo vệ dược chất khỏi acid dịch vị hoặc bảo vệ niêm mạc dạ dày khỏi kích ứng",
      "Tạo điều kiện để thuốc hấp thu nhanh qua niêm mạc miệng và tĩnh mạch dưới lưỡi",
      "Tăng độ tan của dược chất kém tan khi tiếp xúc với môi trường acid dịch vị"
    ],
    correct: 1
  },
  856: { // ID 856, c: 3
    options: [
      "Danh mục phân loại thuốc theo nhóm chi trả của cơ quan Bảo hiểm xã hội",
      "Đặc tính hấp thu và tính thấm của dược chất qua lớp sừng biểu bì da người",
      "Cơ chế tác động dược lý của phân tử thuốc trên các phân typ thụ thể màng tế bào",
      "Độ tương hợp hóa lý và tính ổn định của dung dịch thuốc khi tiêm truyền"
    ],
    correct: 3
  },
  858: { // ID 858, c: 1
    options: [
      "Nhai nát viên thuốc rồi nuốt ngay cùng với một cốc nước lọc ấm đầy trước bữa ăn",
      "Đặt dưới lưỡi để thuốc tự tan, không được nhai nát và không nuốt với nước",
      "Nghiền mịn viên thuốc rồi hòa vào cốc sữa tươi ấm uống vào buổi sáng sau ăn",
      "Hòa tan thuốc vào 100ml nước cất vô khuẩn để thụt tháo làm sạch khung đại tràng"
    ],
    correct: 1
  },
  859: { // ID 859, c: 2
    options: [
      "Làm tăng tốc độ hòa tan và hấp thu của thuốc qua niêm mạc lưỡi vào vòng tuần hoàn",
      "Giúp khử sạch mùi vị đắng khó chịu của thuốc và tạo hơi thở thơm tho dễ chịu",
      "Ngừa nguy cơ nhiễm nấm Candida hầu họng và khàn giọng do corticoid đọng lại",
      "Bảo vệ men răng khỏi hiện tượng lắng đọng sắc tố gây biến đổi màu răng vĩnh viễn"
    ],
    correct: 2
  },
  861: { // ID 861, c: 0
    options: [
      "Lấy người bệnh làm trung tâm, tối ưu hóa hiệu quả và an toàn điều trị thuốc",
      "Tập trung tối đa hóa doanh thu và gia tăng lợi nhuận bán thuốc của chuỗi nhà thuốc",
      "Thực hiện công tác kiểm nghiệm độc lập trong kho dược và không can thiệp điều trị",
      "Thay thế hoàn toàn vai trò thăm khám chẩn đoán bệnh của bác sĩ điều trị lâm sàng"
    ],
    correct: 0
  },
  863: { // ID 863, c: 2
    options: [
      "Không bị biến đổi do quá trình hấp thu của thuốc chỉ diễn ra đơn thuần tại dạ dày",
      "Dao động thất thường và mất kiểm soát hoàn toàn không theo bất kỳ quy luật nào",
      "Tăng rõ rệt do giảm chuyển hóa bước đầu qua gan và có tuần hoàn bàng hệ cửa - chủ",
      "Giảm mạnh về mức gần 0% do tế bào nhu mô gan bị xơ hóa không tiếp nhận thuốc"
    ],
    correct: 2
  },
  864: { // ID 864, c: 3
    options: [
      "Làm gia tăng tốc độ lọc của các cầu thận lên gấp nhiều lần so với người khỏe mạnh",
      "Làm cho toàn bộ lượng thuốc trong máu bị giữ chặt không thể phân bố tới mô đích",
      "Làm giảm mạnh thể tích phân bố của các phân tử thuốc có tính chất thân lipid cao",
      "Tăng tỷ lệ thuốc ở dạng tự do không liên kết, tăng tác dụng và nguy cơ độc tính"
    ],
    correct: 3
  },
  868: { // ID 868, c: 3
    options: [
      "Doxycyclin thải trừ chủ yếu qua đường phân và mật dạng không đổi",
      "Erythromycin chuyển hóa mạnh qua gan và bài tiết qua dịch mật",
      "Clindamycin chuyển hóa chủ yếu qua gan thành chất không hoạt tính",
      "Gentamicin và Amikacin đào thải qua thận ở dạng còn hoạt tính"
    ],
    correct: 3
  },
  870: { // ID 870, c: 1
    options: [
      "Tần số hô hấp của người bệnh và nồng độ oxy hòa tan trong phòng cấp cứu hồi sức",
      "Tỷ lệ thuốc thải qua thận dạng không đổi và mức độ suy giảm chức năng thận",
      "Chiều cao đứng của người bệnh và thể tích khối hồng cầu lắng đọng toàn phần",
      "Hàm lượng hoạt chất trong mỗi đơn vị viên nén và thời hạn sử dụng của thuốc"
    ],
    correct: 1
  },
  875: { // ID 875, c: 2
    options: [
      "Tự động chuyển hóa ngược thành chất kích thích thần kinh trung ương gây mất ngủ",
      "Gây cơn tăng huyết áp kịch phát ác tính dẫn đến nguy cơ xuất huyết não đe dọa tính mạng",
      "Hoạt tính giảm đau mạnh hơn morphin và nguy cơ gây ức chế hô hấp kéo dài",
      "Mất hoàn toàn hoạt tính sinh học và nhanh chóng bị đào thải theo phân ra ngoài"
    ],
    correct: 2
  },
  876: { // ID 876, c: 3
    options: [
      "Gây hạ huyết áp tụt kẹp đột ngột làm suy giảm nghiêm trọng tưới máu động mạch thận",
      "Gây viêm cầu thận hoại tử cấp tính do sự lắng đọng các phức hợp miễn dịch lưu hành",
      "Kích hoạt co thắt dữ dội toàn bộ hệ thống mao mạch tiểu cầu thận ở cả hai bên",
      "Lắng đọng tinh thể acyclovir trong lòng ống thận dẫn đến tắc nghẽn cơ học ống thận"
    ],
    correct: 3
  },
  877: { // ID 877, c: 0
    options: [
      "Bù đủ dịch đường truyền và kiềm hóa nước tiểu bằng Natri hydrocarbonat",
      "Tiêm truyền tĩnh mạch thuốc thật nhanh trong vòng dưới 2 phút để tránh tích lũy",
      "Hạn chế truyền dịch tối đa để cô đặc nước tiểu làm giảm khối lượng tuần hoàn thận",
      "Acid hóa nước tiểu bằng cách truyền đồng thời acid ascorbic liều cao liên tục"
    ],
    correct: 0
  },
  880: { // ID 880, c: 3
    options: [
      "Gây tăng kali máu nghiêm trọng dẫn đến rung thất ngừng tim cấp tính",
      "Gây co thắt phế quản cấp tính khởi phát cơn hen phế quản ác tính",
      "Kích thích lắng đọng sỏi canxi oxalat tại đài bể thận hai bên",
      "Độc tính trực tiếp trên ốc tai gây ù tai, điếc tạm thời hoặc vĩnh viễn"
    ],
    correct: 3
  },
  882: { // ID 882, c: 1
    options: [
      "Chuyển đổi cấu trúc enzym gan thành các enzym tiêu đạm đặc thù của dịch tụy",
      "Giảm hoạt tính của nhiều enzym oxy hóa, đặc biệt là CYP2C19 và CYP1A2",
      "Hoạt tính xúc tác của toàn bộ hệ thống enzym CYP450 luôn duy trì ổn định",
      "Gia tăng mạnh mẽ hoạt tính của hệ cytochrom gan lên gấp nhiều lần bình thường"
    ],
    correct: 1
  },
  884: { // ID 884, c: 3
    options: [
      "Khối lượng phân tử rất lớn trên 50.000 Dalton khó đi qua màng sinh học mao mạch",
      "Tỷ lệ liên kết với albumin huyết tương rất cao đạt trên 99% ở trạng thái cân bằng",
      "Thể tích phân bố Vd rất lớn trên 10 L/kg phân bố chủ yếu trong các mô mỡ sâu",
      "Khối lượng phân tử nhỏ, tan trong nước, tỷ lệ gắn protein thấp và Vd nhỏ"
    ],
    correct: 3
  },
  887: { // ID 887, c: 2
    options: [
      "Người bệnh hoàn toàn không có nguy cơ tích lũy độc tính của các thuốc bài xuất qua thận",
      "Mức lọc cầu thận thực tế của người cao tuổi đang hoạt động vượt trội hơn người trẻ",
      "Creatinin bình thường giả tạo do giảm khối cơ; chức năng thận thực tế có thể đã suy giảm",
      "Độ thanh thải creatinin nội sinh đạt giá trị tối ưu 100% tương đương người khỏe mạnh"
    ],
    correct: 2
  },
  888: { // ID 888, c: 3
    options: [
      "Gây tương kỵ tạo kết tủa cứng trong lòng ruột non dẫn đến thủng thành ống tiêu hóa",
      "Làm giảm mạnh hấp thu kháng sinh qua biểu mô ruột làm mất hiệu quả diệt khuẩn",
      "Cảm ứng enzym CYP3A4 làm tăng thanh thải và giảm nồng độ statin trong huyết tương",
      "Ức chế mạnh CYP3A4 làm tăng nồng độ Simvastatin gây tiêu cơ vân cấp và suy thận"
    ],
    correct: 3
  },
  889: { // ID 889, c: 0
    options: [
      "Ức chế không hồi phục CYP3A4 và P-glycoprotein tại niêm mạc ruột non",
      "Kích thích dạ dày tăng cường bài tiết acid chlohydric thúc đẩy hòa tan viên thuốc",
      "Gắn kết cạnh tranh trực tiếp vào kênh calci loại L trên màng tế bào cơ trơn mạch máu",
      "Kiềm hóa dòng máu tuần hoàn làm tăng mức độ ion hóa của các thuốc hạ huyết áp"
    ],
    correct: 0
  },
  890: { // ID 890, c: 1
    options: [
      "Rifampicin tiêu diệt hệ vi sinh vật đường ruột có nhiệm vụ tổng hợp nội tiết tố nữ",
      "Cảm ứng mạnh CYP3A4 làm tăng thoái giáng thành phần estrogen và progestin",
      "Tạo phức chelat không tan với viên tránh thai ngay trong môi trường dịch vị dạ dày",
      "Kích thích nang trứng phát triển và gây rụng trứng đột ngột ngay sau khi uống thuốc"
    ],
    correct: 1
  },
  891: { // ID 891, c: 2
    options: [
      "Hoàn toàn không xuất hiện bất kỳ tương tác dược lực học hay dược động học nào",
      "Chỉ số INR gia tăng đột biến lên trên 10 dẫn đến xuất huyết nội tạng nghiêm trọng",
      "Cảm ứng CYP làm giảm nồng độ Warfarin, giảm INR và tăng nguy cơ huyết khối tắc mạch",
      "Làm tăng vọt tác dụng chống đông gây đái máu đại thể và chảy máu dưới da lan tỏa"
    ],
    correct: 2
  },
  892: { // ID 892, c: 3
    options: [
      "Cảm ứng mạnh mẽ các isoenzym cytochrom P450 chuyển hóa vi thể tại tế bào gan",
      "Ức chế cạnh tranh trên các chất vận chuyển bài tiết thuốc chủ động tại ống thận gần",
      "Cạnh tranh vị trí liên kết với protein albumin trong huyết tương đẩy dạng tự do tăng cao",
      "Tạo phức chelat vòng càng không tan không thể hấp thu qua niêm mạc ống tiêu hóa"
    ],
    correct: 3
  },
  894: { // ID 894, c: 1
    options: [
      "Omeprazol cạnh tranh gắn kết trực tiếp lên vị trí thụ thể P2Y12 trên bề mặt tiểu cầu",
      "Ức chế CYP2C19 ngăn cản chuyển Clopidogrel thành chất chuyển hóa có hoạt tính",
      "Tăng pH dịch vị dạ dày dẫn đến thủy phân phá hủy hoàn toàn phân tử Clopidogrel",
      "Gây tổn thương viêm trợt niêm mạc dạ dày làm mất tế bào tiểu cầu qua đường tiêu hóa"
    ],
    correct: 1
  },
  895: { // ID 895, c: 2
    options: [
      "Hạ glucose huyết tương nghiêm trọng không hồi phục dẫn đến co giật hôn mê sâu",
      "Tăng natri máu ác tính dẫn đến phù não cấp và tăng áp lực nội sọ nguy kịch",
      "Cộng dồn tác dụng giữ kali dẫn đến tăng kali máu nguy hiểm có thể ngừng tim",
      "Hạ nồng độ kali máu kịch phát khởi phát các cơn rung thất đe dọa tính mạng"
    ],
    correct: 2
  },
  897: { // ID 897, c: 0
    options: [
      "Ức chế tổng hợp PG tại thận làm co tiểu động mạch đến và tăng giữ muối nước",
      "Phá hủy cấu trúc hóa học của phân tử thuốc ức chế men chuyển trong máu tuần hoàn",
      "Kích thích phản xạ tim đập nhanh làm gia tăng gấp đôi cung lượng tim người bệnh",
      "Thúc đẩy tốc độ đào thải của thuốc ức chế men chuyển qua hệ thống đường bài xuất mật"
    ],
    correct: 0
  },
  899: { // ID 899, c: 2
    options: [
      "Gây cơn tăng huyết áp kịch phát do co thắt toàn bộ các mạch máu ngoại vi",
      "Làm mất hoàn toàn tác dụng giãn cơ khiến bệnh nhân xuất hiện co cứng cơ toàn thân",
      "Hiệp đồng kéo dài ức chế thần kinh cơ, làm tăng nguy cơ suy hô hấp ngừng thở sau mổ",
      "Khởi phát hội chứng sốt cao ác tính không đáp ứng với các thuốc hạ nhiệt thông thường"
    ],
    correct: 2
  },
  900: { // ID 900, c: 3
    options: [
      "Dung dịch tiêm truyền tĩnh mạch Glucose 5% đẳng trương tiêu chuẩn",
      "Dung dịch tiêm truyền tĩnh mạch Natri clorid 0,9% vô khuẩn đạt chuẩn",
      "Nước cất pha tiêm vô khuẩn đóng trong ống thủy tinh trung tính",
      "Dung dịch Ringer lactat hoặc các dịch truyền có chứa ion Canxi"
    ],
    correct: 3
  },
  902: { // ID 902, c: 1
    options: [
      "Cạnh tranh liên kết với phân tử glycogen dự trữ bên trong tế bào cơ tim",
      "Ức chế bơm tống P-gp tại ruột và thận làm giảm bài xuất gây tích lũy Digoxin",
      "Làm giảm hoạt tính chuyển hóa khử cực của Digoxin qua hệ enzym CYP1A2 tại gan",
      "Kích thích tế bào thành dạ dày tăng tiết dịch toan giúp tăng hòa tan phân tử Digoxin"
    ],
    correct: 1
  },
  903: { // ID 903, c: 2
    options: [
      "Thuốc kháng histamin H1 thế hệ 2 không gây buồn ngủ Loratadin hoặc Cetirizin",
      "Thuốc hạ sốt giảm đau thông thường Paracetamol dùng đúng khoảng liều khuyến cáo",
      "Kháng sinh Metronidazol, Tinidazol hoặc Cephalosporin có nhóm N-MTT như Cefoperazon",
      "Kháng sinh phổ rộng nhóm aminopenicillin như Amoxicillin hoặc Ampicillin"
    ],
    correct: 2
  },
  904: { // ID 904, c: 3
    options: [
      "Nước cam tươi hoặc nước chanh vắt chứa hàm lượng acid citric và vitamin C cao",
      "Thịt bò luộc hoặc các loại thịt nạc đỏ giàu hàm lượng protein và acid amin",
      "Bánh mì trắng hoặc cơm gạo tẻ chứa hàm lượng tinh bột carbonhydrat dồi dào",
      "Sữa tươi và các sản phẩm chế biến từ bơ sữa chứa hàm lượng ion Canxi cao"
    ],
    correct: 3
  },
  905: { // ID 905, c: 0
    options: [
      "Giảm liều Azathioprin xuống còn 1/4 đến 1/3 liều thông thường để tránh suy tủy",
      "Tăng liều dùng Azathioprin lên gấp ba lần liều khuyến cáo để duy trì hiệu lực",
      "Ngừng vĩnh viễn thuốc Allopurinol và đồng thời tăng gấp đôi liều dùng Azathioprin",
      "Giữ nguyên liều điều trị của cả hai thuốc mà không cần bất kỳ sự hiệu chỉnh nào"
    ],
    correct: 0
  },
  906: { // ID 906, c: 1
    options: [
      "Kiềm hóa dòng máu tuần hoàn đưa nồng độ pH huyết tương lên mức kiềm tính 9,0",
      "Hấp phụ phân tử thuốc lên bề mặt xốp rộng lớn làm ngăn cản quá trình hấp thu vào máu",
      "Tăng mạnh tốc độ tháo rỗng của dạ dày đẩy nhanh thuốc xuống đại tràng trước khi tan",
      "Cảm ứng toàn bộ hệ thống cytochrom gan làm phân hủy hoàn toàn thuốc trong vài phút"
    ],
    correct: 1
  },
  909: { // ID 909, c: 0
    options: [
      "Valproat cạnh tranh gắn albumin và ức chế chuyển hóa làm tăng Phenytoin tự do",
      "Valproat làm biến đổi vĩnh viễn cấu trúc không gian của thụ thể GABA tại vỏ não",
      "Valproat kích thích biểu mô niêm mạc ruột làm tăng hấp thu chủ động của Phenytoin",
      "Valproat ức chế hoàn toàn con đường bài tiết phân tử Phenytoin qua tuyến mồ hôi"
    ],
    correct: 0
  },
  910: { // ID 910, c: 1
    options: [
      "Khởi phát cơn tiêu chảy cấp mất nước nghiêm trọng tương tự bệnh lý tả xuất tiết",
      "Cơn tăng huyết áp kịch phát nguy hiểm do Linezolid có hoạt tính ức chế enzym MAO",
      "Hạ glucose huyết tương sâu dẫn đến co giật cục bộ và hôn mê hạ đường huyết cấp",
      "Gây suy giảm số lượng tiểu cầu cấp tính đe dọa trực tiếp tính mạng bệnh nhân"
    ],
    correct: 1
  },
  911: { // ID 911, c: 2
    options: [
      "Phản ứng tỏa nhiệt lượng rất lớn làm sôi và biến tính hoàn toàn dung dịch truyền",
      "Dung dịch duy trì độ trong suốt hoàn hảo và tính ổn định vật lý trong suốt 48 giờ",
      "Tạo vẩn đục hoặc kết tủa tinh thể trắng đục do Diazepam rất kém tan trong nước",
      "Dung dịch tiêm truyền lập tức đổi sang màu đỏ sẫm do hiện tượng oxy hóa hoạt chất"
    ],
    correct: 2
  },
  912: { // ID 912, c: 3
    options: [
      "Làm mất hoàn toàn tác dụng kháng khuẩn của Cotrimoxazol trên các chủng vi khuẩn",
      "Gây suy thận cấp tiến triển nhanh do kết tinh sỏi tinh thể acid uric tại đài bể thận",
      "Tăng đường huyết kháng trị dẫn đến biến chứng hôn mê do nhiễm toan ceton đái tháo đường",
      "Hạ đường huyết nặng do Sulfamethoxazol ức chế chuyển hóa Gliclazid qua CYP2C9"
    ],
    correct: 3
  },
  913: { // ID 913, c: 0
    options: [
      "Khói thuốc cảm ứng CYP1A2 làm tăng thanh thải và giảm nồng độ Theophyllin máu",
      "Làm giảm mạnh tốc độ và mức độ hấp thu Theophyllin qua biểu mô niêm mạc ruột non",
      "Ức chế mạnh mẽ chuyển hóa oxy hóa làm gia tăng tích lũy và độc tính Theophyllin",
      "Hoàn toàn không gây ra bất kỳ ảnh hưởng nào đến các thông số dược động học của thuốc"
    ],
    correct: 0
  },
  914: { // ID 914, c: 1
    options: [
      "Tác động tiêu diệt trực tiếp các dòng tế bào lympho T CD4 đã bị nhiễm virus HIV",
      "Ức chế mạnh CYP3A4 giúp tăng nồng độ và kéo dài thời gian tác dụng của thuốc đi kèm",
      "Kích thích tủy xương tăng cường sản sinh kháng thể trung hòa tự nhiên chống virus",
      "Làm giảm thiểu tối đa các phản ứng độc tính trên tế bào gan của thuốc kháng virus"
    ],
    correct: 1
  },
  915: { // ID 915, c: 2
    options: [
      "Làm mất tác dụng diệt khuẩn của kháng sinh Aminosid trên trực khuẩn Gram âm",
      "Làm mất hoàn toàn độ tương phản quang học của chất cản quang trên phim chụp cắt lớp",
      "Cộng dồn độc tính trên tế bào ống thận làm tăng nguy cơ suy thận cấp do thuốc",
      "Kích hoạt vỡ phình mạch não gây biến cố xuất huyết nội sọ tự phát đe dọa tính mạng"
    ],
    correct: 2
  },
  916: { // ID 916, c: 3
    options: [
      "Tự động thay thế toàn bộ danh mục thuốc kê đơn bằng các loại thực phẩm bảo vệ sức khỏe",
      "Khuyên người bệnh dồn toàn bộ các loại thuốc khác nhau uống cùng một lúc vào buổi sáng",
      "Tăng gấp đôi liều dùng của tất cả các thuốc để chủ động bù trừ cho các tương tác cản trở",
      "Rà soát đối chiếu toàn diện đơn thuốc và tối ưu hóa giản lược số lượng thuốc cần dùng"
    ],
    correct: 3
  },
  918: { // ID 918, c: 1
    options: [
      "Hoàn toàn không thể dự đoán trước được và không phụ thuộc vào liều dùng của thuốc",
      "Dự đoán được từ tác dụng dược lý của thuốc và phụ thuộc chặt chẽ vào liều lượng dùng",
      "Chỉ xuất hiện sau một khoảng thời gian dùng thuốc điều trị liên tục kéo dài nhiều năm",
      "Có tỷ lệ tử vong rất cao trên người bệnh nhưng tần suất xuất hiện trong cộng đồng rất thấp"
    ],
    correct: 1
  },
  920: { // ID 920, c: 3
    options: [
      "Xuất hiện bùng phát tức thì trong vòng 5 phút ngay sau khi tiếp xúc với liều đầu tiên",
      "Chỉ xuất hiện trên thế hệ con cái của những người bệnh đã từng sử dụng thuốc trước đó",
      "Xuất hiện lập tức sau khi người bệnh ngừng thuốc đột ngột do hiện tượng dội ngược",
      "Liên quan chặt chẽ đến liều tích lũy và thời gian sử dụng thuốc kéo dài liên tục"
    ],
    correct: 3
  },
  921: { // ID 921, c: 0
    options: [
      "Giải phóng trực tiếp Histamin từ tế bào mast khi tốc độ truyền tĩnh mạch quá nhanh",
      "Phản ứng dị ứng miễn dịch thực sự qua trung gian kháng thể IgE với kháng nguyên thuốc",
      "Do độc tố nội bào giải phóng ồ ạt khi một lượng lớn vi khuẩn Gram dương bị ly giải",
      "Do tế bào gan bị hoại tử giải phóng bilirubin vào máu gây đổi màu da toàn thân"
    ],
    correct: 0
  },
  925: { // ID 925, c: 0
    options: [
      "Đánh giá mối quan hệ nhân quả giữa biến cố bất lợi lâm sàng và thuốc nghi ngờ",
      "Ước tính mức lọc cầu thận cho các bệnh nhân cao tuổi có tình trạng teo cơ nặng nề",
      "Tính toán liều nạp ban đầu dựa trên thể tích phân bố của kháng sinh aminoglycosid",
      "Phân tầng mức độ nguy cơ tim mạch ở bệnh nhân tăng huyết áp giai đoạn cấp cứu"
    ],
    correct: 0
  },
  928: { // ID 928, c: 3
    options: [
      "Thời gian bùng phát phản ứng: SJS xảy ra tức thì còn TEN xuất hiện sau vài tháng dùng thuốc",
      "Vị trí tổn thương: SJS chỉ xuất hiện ở lòng bàn tay còn TEN chỉ khu trú ở niêm mạc miệng",
      "Đặc tính dịch phỏng nước: SJS chứa dịch trong suốt còn dịch bóng nước của TEN có máu",
      "Diện tích da bong trợt: SJS dưới 10%, thể chồng lấp 10-30%, TEN trên 30% diện tích cơ thể"
    ],
    correct: 3
  },
  935: { // ID 935, c: 2
    options: [
      "Chỉ xuất hiện muộn màng sau khi người bệnh đã kết thúc đợt điều trị thuốc được 6 tháng",
      "Xuất hiện bùng phát tức thì trong vòng 5 đến 10 phút đầu tiên sau khi dùng liều khởi đầu",
      "Khởi phát sau 48 đến 72 giờ hoặc vài tuần sau khi tiếp xúc lặp lại với thuốc",
      "Luôn luôn biểu hiện cấp tính trong vòng 30 phút sau khi uống thuốc trên đường tiêu hóa"
    ],
    correct: 2
  },
  943: { // ID 943, c: 2
    options: [
      "Kháng sinh phổ rộng Amoxicillin hoặc Ampicillin điều trị nhiễm trùng hô hấp",
      "Aspirin liều thấp 81 mg đến 100 mg dùng dự phòng biến cố tim mạch thứ phát",
      "Thuốc chống động kinh Phenytoin hoặc thuốc chẹn kênh calci DHP như Amlodipin",
      "Thuốc giảm đau hạ sốt Paracetamol dùng theo nhu cầu điều trị ngắn ngày"
    ],
    correct: 2
  }
};

module.exports = updates;
