const fs = require('fs');
const path = require('path');

const hup = require('./generate_hup_questions.js');

const updates = {
  0: {
    options: [
      "Tỉ lệ Cmax trên MIC đạt giá trị mục tiêu từ 8 đến 10",
      "AUC24 trên MIC đạt mục tiêu tối ưu từ 400 đến 600 mg·h/L",
      "Nồng độ đáy duy trì ổn định trong khoảng 15 đến 20 mcg/mL",
      "Thời gian nồng độ thuốc vượt trên MIC đạt trên 70% khoảng liều"
    ],
    correct: 1
  },
  1: {
    options: [
      "10 đến 15 mg/kg tính theo cân nặng lý tưởng của người bệnh",
      "25 đến 30 mg/kg tính theo cân nặng thực tế của người bệnh",
      "Cố định liều 1 gam duy nhất cho tất cả bệnh nhân nặng",
      "40 đến 50 mg/kg truyền tĩnh mạch thật nhanh trong 15 phút"
    ],
    correct: 1
  },
  3: {
    options: [
      "Ngay sau khi vừa kết thúc truyền tĩnh mạch liều đầu tiên",
      "Tại thời điểm chính giữa khoảng cách đưa thuốc của liều thứ hai",
      "Trong vòng 30 phút ngay trước khi dùng liều thuốc tiếp theo",
      "Sau khi người bệnh uống thuốc được 1 đến 2 giờ cùng bữa ăn"
    ],
    correct: 2
  },
  6: {
    options: [
      "Cân nặng thực tế của người bệnh",
      "Cân nặng hiệu chỉnh của người bệnh",
      "Cân nặng lý tưởng theo chiều cao",
      "Cân nặng cố định 70 kg chuẩn hóa"
    ],
    correct: 1
  },
  10: {
    options: [
      "Ức chế mạnh hệ enzym CYP3A4 tại gan và biểu mô ruột non",
      "Cảm ứng enzym CYP2C9 và bơm tống P-glycoprotein tại ruột",
      "Cạnh tranh liên kết albumin làm tăng nồng độ tự do statin",
      "Kiềm hóa nước tiểu làm giảm độ thanh thải statin qua thận"
    ],
    correct: 0
  },
  12: {
    options: [
      "Ciprofloxacin ức chế mạnh CYP1A2 làm giảm thanh thải Theophyllin",
      "Ciprofloxacin cảm ứng CYP3A4 làm tăng tạo chất chuyển hóa độc",
      "Ciprofloxacin cạnh tranh vị trí gắn với thụ thể Adenosin tại não",
      "Ciprofloxacin làm toan hóa máu gây tích lũy Theophyllin ở mô thần kinh"
    ],
    correct: 0
  },
  19: {
    options: [
      "Môi trường kiềm hóa mạnh với pH dịch vị trên 6.0",
      "Môi trường acid dịch vị tự nhiên của dạ dày",
      "Môi trường hoàn toàn trung tính không có acid",
      "Môi trường chứa nhiều ion kim loại đa hóa trị"
    ],
    correct: 1
  },
  26: {
    options: [
      "Heparin không phân đoạn đường tiêm",
      "Thuốc kháng vitamin K đường uống",
      "Thuốc ức chế trực tiếp yếu tố Xa",
      "Thuốc ức chế trực tiếp Thrombin"
    ],
    correct: 1
  },
  7: {
    options: [
      "Tổng điểm từ 1 đến 4 điểm",
      "Tổng điểm từ 5 đến 8 điểm",
      "Tổng điểm từ 9 điểm trở lên",
      "Tổng điểm từ 0 điểm trở xuống"
    ],
    correct: 2
  },
  9: {
    options: [
      "Phản ứng dị ứng Type I trung gian qua kháng thể IgE gắn trên bề mặt tế bào mast",
      "Phản ứng giả dị ứng kích thích trực tiếp tế bào mast phóng thích histamin",
      "Phản ứng tự miễn Type II gây ly giải tế bào hồng cầu và tiểu cầu tại mao mạch",
      "Phản ứng quá mẫn Type III lắng đọng phức hợp miễn dịch tại thành mạch dưới da"
    ],
    correct: 1
  },
  11: {
    options: [
      "Cảm ứng mạnh mẽ hệ enzym CYP3A4 tại gan làm tăng tạo chất chuyển hóa có độc tính",
      "Ức chế bơm tống thuốc P-glycoprotein tại ruột và thận làm giảm bài xuất Digoxin",
      "Làm giảm mạnh mẽ thể tích phân bố của Digoxin tại các mô cơ vân và cơ tim người bệnh",
      "Ức chế cạnh tranh chất vận chuyển OATP1B1 tại màng tế bào gan giữ thuốc trong máu"
    ],
    correct: 1
  },
  15: {
    options: [
      "Tăng Natri máu, tăng Clo máu và toan chuyển hóa",
      "Hạ Kali máu, hạ Magie máu và tăng Canxi máu",
      "Tăng Kali máu, tăng Magie máu và hạ Canxi máu",
      "Hạ Natri máu, tăng Clo máu và kiềm hô hấp cấp"
    ],
    correct: 1
  },
  16: {
    options: [
      "Tối đa hóa tỉ lệ nồng độ đỉnh tự do trong máu trên nồng độ ức chế tối thiểu",
      "Tối ưu hóa thời gian nồng độ thuốc tự do vượt trên MIC trong khoảng liều",
      "Tối đa hóa diện tích dưới đường cong nồng độ thuốc trên nồng độ ức chế tối thiểu",
      "Rút ngắn thời gian truyền tĩnh mạch để tạo ra nồng độ đỉnh thuốc trong máu ồ ạt"
    ],
    correct: 1
  },
  17: {
    options: [
      "Vì CMS chuyển hóa chậm thành Colistin, cần liều nạp để nhanh đạt nồng độ diệt khuẩn",
      "Để bão hòa vị trí gắn trên mô mỡ và ngăn chặn hiện tượng dung nạp kháng sinh sớm",
      "Vì Colistin bị chuyển hóa bước một rất mạnh tại gan trong những giờ đầu sau truyền",
      "Để giảm thiểu độc tính hủy hoại tế bào ống thận so với dùng liều duy trì ngay từ đầu"
    ],
    correct: 0
  },
  18: {
    options: [
      "Chiều cao của trẻ và nồng độ Creatinin huyết thanh kết hợp hằng số k theo tuổi",
      "Cân nặng lý tưởng của trẻ kết hợp với diện tích bề mặt cơ thể và nồng độ Ure máu",
      "Vòng đầu của trẻ kết hợp nồng độ Creatinin và thể tích nước tiểu thu thập 24 giờ",
      "Tốc độ thanh thải Albumin qua nước tiểu và nồng độ Natri máu đo lúc đói buổi sáng"
    ],
    correct: 0
  },
  20: {
    options: [
      "Nồng độ thuốc tự do tăng vọt đột ngột, làm tăng rõ rệt nguy cơ quá liều và độc tính",
      "Nồng độ toàn phần trong máu tăng gấp 10 lần làm bão hòa hoàn toàn enzym chuyển hóa",
      "Tốc độ lọc qua cầu thận giảm mạnh dẫn đến thuốc bị giữ lại kéo dài trong cơ thể",
      "Thuốc bị mất hoàn toàn hoạt tính sinh học do bị bắt giữ và thực bào tại nhu mô lách"
    ],
    correct: 0
  },
  22: {
    options: [
      "Tần suất gặp rất cao, dự đoán trước từ dược lý và phụ thuộc chặt chẽ vào liều dùng",
      "Không dự đoán trước từ tác dụng dược lý, không phụ thuộc liều và qua cơ chế miễn dịch",
      "Xảy ra khi ngừng thuốc đột ngột sau thời gian điều trị dài do thụ thể tăng nhạy cảm",
      "Xuất hiện rất muộn sau nhiều năm điều trị dưới dạng dị tật bẩm sinh hoặc gây ung thư"
    ],
    correct: 1
  },
  23: {
    options: [
      "Ức chế chọn lọc không hồi phục enzym CYP2D6 tại microsom tế bào gan",
      "Cảm ứng mạnh mẽ và toàn diện nhiều enzym CYP và bơm tống P-glycoprotein",
      "Cạnh tranh đào thải tại ống thận với các hoạt chất có tính acid hữu cơ yếu",
      "Làm biến tính không thuận nghịch thụ thể nhân PXR nội bào tại tế bào gan"
    ],
    correct: 1
  },
  24: {
    options: [
      "Omeprazol làm tăng mạnh pH dạ dày làm giảm độ tan và khả năng hấp thu Clopidogrel",
      "Omeprazol ức chế enzym CYP2C19 chuyển tiền chất Clopidogrel thành chất có hoạt tính",
      "Omeprazol cạnh tranh liên kết trực tiếp trên vị trí gắn thụ thể P2Y12 của tiểu cầu",
      "Omeprazol cảm ứng bơm P-glycoprotein tại ruột tống Clopidogrel ra ngoài phân sớm"
    ],
    correct: 1
  },
  25: {
    options: [
      "Thể hiện thể tích dịch thực tế mà phân tử thuốc chiếm chỗ trong các khoang cơ thể",
      "Phản ánh mức độ phân bố của thuốc vào các mô ngoại vi và dùng để tính toán liều nạp",
      "Đo lường tốc độ đào thải hoàn toàn hoạt chất qua nước tiểu và dùng tính liều duy trì",
      "Đánh giá khả năng thuốc vượt qua màng lọc cầu thận mà không bị tái hấp thu ống thận"
    ],
    correct: 1
  },
  30: {
    options: [
      "Tình trạng co thắt thanh quản và trụy mạch xảy ra ngay sau khi tiêm thuốc",
      "Tác dụng gây quái thai hoặc gây ung thư xuất hiện muộn sau khi dùng thuốc",
      "Phản ứng dung nạp thuốc xuất hiện nhanh chóng sau vài liều dùng liên tiếp",
      "Hội chứng suy tuyến thượng thận cấp bùng phát sau khi ngừng thuốc đột ngột"
    ],
    correct: 1
  },
  31: {
    options: [
      "Hoại tử thượng bì nhiễm độc xảy ra sau 2 tuần dùng Allopurinol",
      "Suy thượng thận cấp khi ngừng đột ngột Corticoid dùng kéo dài",
      "Xuất huyết tiêu hóa ồ ạt do quá liều thuốc kháng vitamin K",
      "Độc tính thính giác gây điếc vĩnh viễn sau dùng Amikacin kéo dài"
    ],
    correct: 1
  },
  32: {
    options: [
      "Tăng lên rõ rệt do giảm enzym gan và hiện tượng thông nối cửa - chủ",
      "Giảm mạnh do giảm tiết dịch mật làm giảm hòa tan và hấp thu thuốc ở ruột",
      "Không thay đổi vì ruột non vẫn hấp thu và chuyển hóa thuốc một cách bình thường",
      "Giảm xuống gần bằng 0 do tế bào biểu mô ruột bị hoại tử bởi độc chất amoniac"
    ],
    correct: 0
  },
  33: {
    options: [
      "Vì thể tích phân bố dịch ngoại bào tăng mạnh do rò rỉ mao mạch và hồi sức bù dịch",
      "Vì độ thanh thải qua thận tăng vọt gấp 5 lần do tăng tưới máu thận trong sốc sớm",
      "Vì thuốc bị các enzym thực bào phá hủy nhanh chóng ngay trong lòng tuần hoàn chung",
      "Vì thuốc bị bắt giữ không hồi phục vào các thụ thể miễn dịch trên bề mặt bạch cầu"
    ],
    correct: 0
  },
  34: {
    options: [
      "Trẻ sơ sinh từ 28 ngày tuổi trở xuống do nguy cơ tạo tủa canxi tại phổi và thận",
      "Bệnh nhân cao tuổi trên 80 tuổi có tiền sử suy giảm trí nhớ và xơ vữa mạch máu",
      "Người bệnh suy giáp trạng đang điều trị thay thế bằng hormon Levothyroxin đường uống",
      "Phụ nữ đang cho con bú trong 6 tháng đầu do nguy cơ bài tiết qua sữa mẹ gây độc"
    ],
    correct: 0
  },
  37: {
    options: [
      "Thuốc ức chế bơm proton PPI như Omeprazol, Esomeprazol và Pantoprazol đường uống",
      "Thuốc kháng acid chứa ion kim loại đa hóa trị như Nhôm, Magie, Canxi và viên Sắt",
      "Thuốc đối kháng thụ thể H2 như Famotidin, Cimetidin và Ranitidin trước bữa ăn",
      "Dung dịch bổ sung men vi sinh tiêu hóa chứa bào tử Bacillus clausii hoặc nấm men"
    ],
    correct: 1
  },
  38: {
    options: [
      "Khối lượng hoạt chất tuyệt đối bị đào thải ra ngoài cơ thể trong khoảng thời gian một giờ",
      "Thể tích huyết tương được cơ thể loại bỏ sạch thuốc hoàn toàn trong một đơn vị thời gian",
      "Tỉ lệ phần trăm lượng thuốc đưa vào cơ thể được đào thải nguyên vẹn qua dịch lọc cầu thận",
      "Khoảng thời gian cần thiết để nồng độ thuốc trong huyết tương giảm đi một nửa so với đỉnh"
    ],
    correct: 1
  },
  40: {
    options: [
      "Tra cứu ngay vào các cơ sở dữ liệu y khoa cấp 1 gồm thử nghiệm lâm sàng",
      "Xác định thông tin người hỏi và bối cảnh lâm sàng thực tế của người bệnh",
      "Tham khảo ý kiến đồng nghiệp cùng khoa phòng hoặc dược sĩ trưởng bệnh viện",
      "Viết dự thảo câu trả lời và thông báo thời hạn trả lời chính thức bằng văn bản"
    ],
    correct: 1
  },
  41: {
    options: [
      "Lựa chọn loại thuốc nào có giá trúng thầu rẻ nhất trên Cổng thông tin đấu thầu quốc gia",
      "Đánh giá tổng hợp giữa hiệu quả lâm sàng, tính an toàn, chi phí y tế và gánh nặng bệnh tật",
      "Ưu tiên dựa theo ý kiến đề xuất và sở thích kê đơn của các bác sĩ trưởng khoa điều trị",
      "Lựa chọn các thuốc biệt dược gốc có thời gian độc quyền sáng chế dài nhất trên thị trường"
    ],
    correct: 1
  },
  42: {
    options: [
      "Rà soát đơn thuốc, tư vấn sử dụng thuốc và theo dõi, báo cáo phản ứng có hại của thuốc",
      "Trực tiếp thăm khám người bệnh, ra chỉ định cận lâm sàng và kê đơn thuốc cho bệnh nhân",
      "Thực hiện kỹ thuật tiêm truyền tĩnh mạch và thay băng vết thương hàng ngày tại giường",
      "Quản lý sổ sách kho dược chẵn, cấp phát thuốc nội trú và kiểm kê thuốc định kỳ hàng tháng"
    ],
    correct: 0
  },
  43: {
    options: [
      "Ưu điểm là cung cấp nghiên cứu gốc mới nhất; nhược điểm là chưa được phản biện đồng cấp",
      "Ưu điểm là thông tin đã được tổng hợp dễ tiếp cận; nhược điểm là thông tin có độ trễ",
      "Ưu điểm là hoàn toàn miễn phí và không có sai số; nhược điểm là không có thông tin liều",
      "Ưu điểm là chứa đựng tóm tắt toàn bộ nghiên cứu; nhược điểm là không tra cứu trực tuyến"
    ],
    correct: 1
  },
  45: {
    options: [
      "Tiêu diệt trực tiếp vi khuẩn gây bệnh đường ruột và chỉ cần uống trong 2 đến 3 ngày",
      "Phục hồi niêm mạc ruột, giảm thời gian đợt tiêu chảy và uống trong 10 đến 14 ngày",
      "Chống nôn ói và chống co thắt cơ trơn ruột, ngừng uống ngay khi trẻ đi phân sệt lại",
      "Tăng cường hấp thu canxi phát triển xương khớp và cần uống duy trì liên tục 6 tháng"
    ],
    correct: 1
  },
  46: {
    options: [
      "Kích thích thụ thể Mu-opioid làm giảm nhu động cơ trơn ruột tương tự Loperamid",
      "Ức chế men Enkephalinase ở ruột, giảm tiết dịch mà không ảnh hưởng nhu động ruột",
      "Gắn kết độc tố vi khuẩn và tạo màng bao phủ bảo vệ niêm mạc như Diosmectite",
      "Phá hủy thành tế bào vi khuẩn gram âm đường ruột tương tự kháng sinh Colistin"
    ],
    correct: 1
  },
  47: {
    options: [
      "Tiêu chảy phân toàn nước đục như nước vo gạo không sốt ở trẻ nhỏ",
      "Tiêu chảy phân có máu mũi nhầy kèm sốt cao nghi ngờ lỵ trực khuẩn",
      "Trẻ nôn ói nhiều lần liên tục sau khi uống dung dịch bù nước Oresol",
      "Tiêu chảy xuất hiện trong vòng 3 ngày sau khi uống vaccine Rotavirus"
    ],
    correct: 1
  },
  48: {
    options: [
      "Suy tủy xương thứ phát gây thiếu máu bất sản toàn dòng và nhiễm trùng huyết",
      "Liệt ruột cơ năng, trướng bụng nặng, tắc ruột và phình đại tràng nhiễm độc",
      "Viêm tụy cấp xuất huyết hoại tử diện rộng kèm tràn dịch màng phổi hai bên",
      "Hoại tử tế bào ống thận cấp dẫn đến suy thận cấp vô niệu và tăng kali máu"
    ],
    correct: 1
  },
  49: {
    options: [
      "Thuốc kích hoạt bổ thể gây tan máu nội mạch ồ ạt và phá hủy trực tiếp màng hồng cầu",
      "Gan thiếu enzym Glucuronyl transferase và thận chưa hoàn thiện gây tích lũy thuốc",
      "Thuốc ức chế tủy xương không hồi phục dẫn đến giảm tiểu cầu nặng gây xuất huyết tạng",
      "Thuốc lắng đọng tạo phức tinh thể không tan gây tắc nghẽn toàn bộ hệ thống ống thận"
    ],
    correct: 1
  },
  50: {
    options: [
      "Ức chế enzym UDP-glucuronyltransferase tại gan làm tăng Bilirubin trực tiếp",
      "Cạnh tranh gắn kết Albumin, đẩy Bilirubin tự do ngấm qua hàng rào máu não",
      "Phá hủy tế bào gan và tắc mật vi quản dẫn đến hoại tử gan bùng phát cấp tính",
      "Phá hủy trực tiếp các tế bào neuron vận động tại tủy sống của trẻ sơ sinh"
    ],
    correct: 1
  },
  51: {
    options: [
      "Võng mạc và dây thần kinh thị giác gây giảm thị lực và mù lòa không hồi phục",
      "Sụn khớp và các khớp chịu lực của hệ xương đang trong giai đoạn phát triển",
      "Men răng và mầm răng vĩnh viễn gây biến đổi màu răng nâu đen không tẩy được",
      "Nhu mô tuyến giáp gây rối loạn tổng hợp hormon và suy giáp bẩm sinh thứ phát"
    ],
    correct: 1
  },
  53: {
    options: [
      "Uống ngay cùng bữa ăn giàu canxi và uống kèm một cốc sữa tươi để giảm kích ứng dạ dày",
      "Uống lúc bụng đói với nước cam để tăng hấp thu; tránh uống cùng sữa, trà, antacid",
      "Nhai nát viên thuốc trước khi nuốt cùng nước chè đặc nhằm tăng tốc độ hòa tan ở ruột",
      "Uống chung cùng viên Canxi cacbonat 1000mg để sắt và canxi cùng hấp thu hiệp đồng tốt"
    ],
    correct: 1
  },
  54: {
    options: [
      "Viêm loét đại trực tràng chảy máu toàn bộ và thủng ruột thứ phát đe dọa viêm phúc mạc",
      "Dị tật thai nhi sọ mặt nghiêm trọng và tăng áp lực nội sọ giả u não ở người lớn",
      "Đột quỵ thiếu máu não cục bộ diện rộng do hình thành huyết khối cấp tính trong lòng mạch",
      "Thiếu máu tan máu nội mạch cấp tính kèm tiểu huyết sắc tố ồ ạt dẫn đến suy thận cấp tính"
    ],
    correct: 1
  },
  56: {
    options: [
      "Tránh hiện tượng tăng đường huyết phản ứng và giúp ổn định nồng độ glucose máu",
      "Giúp trục hạ đồi - tuyến yên - thượng thận hồi phục bài tiết cortisol nội sinh",
      "Phòng ngừa rối loạn điện giải và tránh hiện tượng tăng calci huyết tái phát đột ngột",
      "Kích thích tủy xương tăng sinh dòng bạch cầu để hồi phục hoàn toàn hệ miễn dịch"
    ],
    correct: 1
  },
  57: {
    options: [
      "Viêm phổi kẽ tiến triển nhanh dẫn đến suy hô hấp cấp tính và xơ hóa phổi không hồi phục",
      "Xuất huyết tiêu hóa, tổn thương thận cấp và làm nặng thêm bệnh tăng huyết áp, suy tim",
      "Rụng tóc toàn thể, viêm da tróc vảy và thoái hóa võng mạc hoàng điểm làm giảm thị lực",
      "Tăng sinh lành tính tuyến tiền liệt, co thắt cổ bàng quang dẫn đến bí tiểu cấp hoàn toàn"
    ],
    correct: 1
  },
  59: {
    options: [
      "Nhịp tim chậm xoang dưới 40 lần/phút kèm khó thở; uống cùng cốc nước muối sinh lý đậm đặc",
      "Tụt huyết áp tư thế đứng kèm chóng mặt ngất; uống liều thấp nhất vào buổi tối trước khi ngủ",
      "Cơn co giật toàn thể kèm sốt cao kịch phát; uống phối hợp cùng thuốc an thần diazepam liều thấp",
      "Tăng đường huyết đột ngột kèm toan chuyển hóa; tiêm sẵn insulin nhanh trước bữa ăn 30 phút"
    ],
    correct: 1
  }
};

for (const [idxStr, data] of Object.entries(updates)) {
  const idx = parseInt(idxStr, 10);
  hup[idx].options = data.options;
  hup[idx].correct = data.correct;
}

const newCode = `// 60 High-Yield Clinical Pharmacy Questions - Đại học Dược Hà Nội (HUP)
// Chuyên đề: Dược động học lâm sàng, TDM, Tương tác thuốc, Thang Naranjo, Thông tin thuốc, Nhi khoa, Lão khoa, Corticoid, Cấp cứu
// Đã chuẩn hóa độ dài phương án, loại bỏ hoàn toàn thiên kiến độ dài

const HUP_QUESTIONS = ${JSON.stringify(hup, null, 2)};

module.exports = HUP_QUESTIONS;
`;

fs.writeFileSync(path.join(__dirname, 'generate_hup_questions.js'), newCode, 'utf8');
console.log('Successfully rebalanced HUP questions!');
