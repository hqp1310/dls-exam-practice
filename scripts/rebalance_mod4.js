const fs = require('fs');
const path = require('path');

// Rebalancing Module 4 (Chapters 13 - 16: 177 questions)
// Covers:
// - Điều trị Tăng huyết áp & Cấp cứu THA
// - Tiêu chảy cấp ở trẻ em
// - Hen phế quản & COPD
// - Loãng xương, Tránh thai & Chuyển hóa

const updates = {
  623: { // ID 623, c: 2
    options: [
      "Cơn tăng huyết áp cấp cứu luôn có chỉ số huyết áp tâm thu vượt ngưỡng 240 mmHg",
      "Cơn tăng huyết áp khẩn cấp bắt buộc phải đặt ống nội khí quản và thở máy ngay",
      "Cơn tăng huyết áp cấp cứu có kèm theo tổn thương cơ quan đích cấp tính tiến triển",
      "Cơn tăng huyết áp cấp cứu chỉ xuất hiện trên các bệnh nhân trẻ tuổi dưới 30 tuổi"
    ],
    correct: 2
  },
  625: { // ID 625, c: 0
    options: [
      "Huyết áp tâm thu dưới 120 mmHg và tần số tim dưới 60 nhịp/phút trong 20 phút",
      "Huyết áp tâm thu hạ xuống dưới 150 mmHg từ từ trong suốt 24 giờ điều trị đầu tiên",
      "Duy trì huyết áp ổn định ở mức 140/90 mmHg kết hợp truyền dịch bù thể tích tuần hoàn",
      "Hạ huyết áp tâm thu xuống dưới 160 mmHg trong vòng 3 ngày để bảo vệ tưới máu tạng"
    ],
    correct: 0
  },
  627: { // ID 627, c: 2
    options: [
      "Thuốc chẹn beta, chẹn alpha-1, thuốc giãn mạch trực tiếp và thuốc an thần gây ngủ",
      "Thuốc hạ áp tác động trung ương, thuốc ức chế renin trực tiếp và muối magnesi sulfat",
      "Ức chế men chuyển (ACEI), chẹn thụ thể (ARB), chẹn kênh calci (CCB) và lợi tiểu thiazid",
      "Thuốc lợi tiểu quai Furosemid, thuốc lợi tiểu giữ kali và dẫn xuất alcaloid reserpin"
    ],
    correct: 2
  },
  628: { // ID 628, c: 3
    options: [
      "Phối hợp đồng thời ngay 4 nhóm thuốc hạ áp khác nhau ở mức liều lượng tối đa",
      "Đơn trị liệu bằng một thuốc duy nhất nhưng tăng nhanh liều lên mức kịch trần",
      "Chỉ áp dụng biện pháp thay đổi lối sống không dùng thuốc trong suốt 5 năm đầu",
      "Khởi đầu bằng viên phối hợp cố định liều thấp của hai nhóm thuốc hạ áp đầu tay"
    ],
    correct: 3
  },
  629: { // ID 629, c: 0
    options: [
      "Thuốc ức chế men chuyển phối hợp với thuốc chẹn thụ thể Angiotensin II (ACEI + ARB)",
      "Thuốc chẹn kênh calci nhóm Dihydropyridin phối hợp với thuốc lợi tiểu nhóm Thiazid",
      "Thuốc chẹn thụ thể Angiotensin II phối hợp với thuốc lợi tiểu nhóm Thiazid liều thấp",
      "Thuốc ức chế men chuyển phối hợp với thuốc chẹn kênh calci Dihydropyridin kéo dài"
    ],
    correct: 0
  },
  630: { // ID 630, c: 1
    options: [
      "Thuốc lợi tiểu quai Furosemid đơn thuần dùng ngắt quãng theo dõi lượng nước tiểu",
      "Thuốc ức chế men chuyển (ACEI) hoặc thuốc chẹn thụ thể Angiotensin II (ARB) bảo vệ thận",
      "Thuốc chẹn beta giao cảm không chọn lọc như Propranolol dùng liều tăng dần từng bước",
      "Thuốc giãn mạch trực tiếp Hydralazin phối hợp với thuốc an thần giải lo âu kéo dài"
    ],
    correct: 1
  },
  632: { // ID 632, c: 3
    options: [
      "Bệnh nhân cao tuổi mắc bệnh thoái hóa khớp gối có chỉ định dùng thuốc giảm đau",
      "Bệnh nhân đái tháo đường typ 2 có tiền sử cơn gút cấp đang điều trị bằng allopurinol",
      "Bệnh nhân sau nhồi máu cơ tim có phân suất tống máu thất trái suy giảm nặng nề",
      "Phụ nữ mang thai (quý 2, quý 3) và bệnh nhân hẹp động mạch thận hai bên (hoặc thận độc nhất)"
    ],
    correct: 3
  },
  633: { // ID 633, c: 0
    options: [
      "Tăng dưới 30% so với giá trị nồng độ creatinin máu ban đầu trước khi điều trị",
      "Không được phép tăng dù chỉ 1 micromol/L so với chỉ số xét nghiệm lúc ban đầu",
      "Cho phép creatinin tăng vọt gấp 3 lần giá trị nền nếu mức lọc cầu thận còn bù",
      "Chấp nhận mức tăng dao động từ 50% đến 100% so với giá trị xét nghiệm ban đầu"
    ],
    correct: 0
  },
  634: { // ID 634, c: 1
    options: [
      "Kích thích chọn lọc trung tâm vận mạch ở hành não làm giảm trương lực giao cảm ngoại vi",
      "Chẹn kênh Calci typ L gây giãn chọn lọc cơ trơn các tiểu động mạch làm giảm sức cản ngoại vi",
      "Đối kháng cạnh tranh không hồi phục trên các thụ thể Mineralocorticoid tại vỏ thượng thận",
      "Ức chế vận chuyển đồng thời muối natri và clo tại đoạn đầu ống lượn xa của tiểu cầu thận"
    ],
    correct: 1
  },
  635: { // ID 635, c: 2
    options: [
      "Phù do cơ thể giữ muối natri và giữ nước toàn thân làm tăng thể tích tuần hoàn ngoại vi",
      "Phù do phản ứng dị ứng qua trung gian kháng thể IgE làm tăng tính thấm thành mạch toàn thân",
      "Phù do giãn chọn lọc tiểu động mạch trước mao mạch làm tăng áp lực thủy tĩnh trong mao mạch",
      "Phù do chức năng co bóp của tim suy giảm nặng nề dẫn đến suy tim sung huyết tiến triển nhanh"
    ],
    correct: 2
  },
  637: { // ID 637, c: 0
    options: [
      "Bisoprolol, Metoprolol và Nebivolol (thuộc nhóm chẹn chọn lọc Beta-1 ở tim)",
      "Propranolol và Nadolol (chẹn beta không chọn lọc trên cả thụ thể Beta-1 và Beta-2)",
      "Carvedilol và Labetalol (chẹn hỗn hợp cả thụ thể Beta và thụ thể Alpha-1 ngoại vi)",
      "Sotalol và Timolol (chẹn beta không chọn lọc có kèm tác dụng chống loạn nhịp tim)"
    ],
    correct: 0
  },
  638: { // ID 638, c: 1
    options: [
      "Ức chế men chuyển tại phổi kết hợp tăng tái hấp thu ion kali tại ống thận",
      "Chẹn không chọn lọc thụ thể Beta (Beta-1, Beta-2) kết hợp chẹn thụ thể Alpha-1 gây giãn mạch",
      "Chẹn chọn lọc thụ thể Beta-1 ở cơ tim kết hợp kích thích tế bào cạnh cầu thận tiết Renin",
      "Chẹn kênh Calci typ L trên màng cơ trơn kết hợp kích thích thụ thể Muscarinic phó giao cảm"
    ],
    correct: 1
  },
  640: { // ID 640, c: 3
    options: [
      "Khởi phát cơn phù phổi cấp huyết động do hiện tượng ứ trệ tuần hoàn tại mao mạch phổi",
      "Gây tụt huyết áp kịch phát ác tính dẫn đến trụy mạch tuần hoàn ngoại vi không hồi phục",
      "Làm nhịp tim chậm xoang nghiêm trọng dưới 30 lần/phút dẫn đến ngất và hội chứng Adams-Stokes",
      "Nguy cơ bùng phát hiện tượng dội ngược: cơn tăng huyết áp, đau thắt ngực và nhồi máu cơ tim"
    ],
    correct: 3
  },
  641: { // ID 641, c: 0
    options: [
      "Hiệu lực hạ áp kéo dài 24 giờ và trung tính hơn về chuyển hóa lipid và glucose máu",
      "Có thể sử dụng an toàn tuyệt đối cho các bệnh nhân suy thận giai đoạn cuối có vô niệu",
      "Hoàn toàn không gây tác dụng phụ hạ nồng độ kali trong máu ngay cả khi dùng liều cao",
      "Kích thích ống thận tăng bài tiết đường glucose qua nước tiểu tương tự nhóm thuốc SGLT-2"
    ],
    correct: 0
  },
  642: { // ID 642, c: 1
    options: [
      "Mức lọc cầu thận eGFR giảm xuống dưới 120 mL/phút/1,73m2 diện tích da cơ thể",
      "Mức lọc cầu thận eGFR giảm xuống dưới 30 mL/phút/1,73m2 (khi đó nên đổi sang lợi tiểu quai)",
      "Mức lọc cầu thận eGFR giảm xuống dưới 60 mL/phút/1,73m2 ở người cao tuổi có xơ vữa",
      "Mức lọc cầu thận eGFR giảm xuống dưới 90 mL/phút/1,73m2 kèm theo đạm niệu vi thể"
    ],
    correct: 1
  },
  646: { // ID 646, c: 1
    options: [
      "Ức chế trực tiếp quá trình bài tiết hormon aldosterone tại tế bào vùng cung vỏ thượng thận",
      "Kích thích thụ thể Alpha-2 tiền synap tại thân não, làm giảm dòng xung động giao cảm ngoại vi",
      "Phong bế cạnh tranh trực tiếp trên các thụ thể Alpha-1 adrenergic tại cơ trơn thành mạch máu",
      "Kích thích chọn lọc các thụ thể Beta-2 giao cảm gây giãn rộng toàn bộ hệ thống tiểu động mạch"
    ],
    correct: 1
  },
  648: { // ID 648, c: 3
    options: [
      "Hội chứng xơ cứng bì toàn thể tiến triển gây xơ hóa toàn bộ các cơ quan nội tạng",
      "Hội chứng thận hư nguyên phát kèm theo tình trạng phù toàn thân và tràn dịch đa màng",
      "Hội chứng viêm đa cơ tự miễn dẫn đến yếu cơ gốc chi và tăng men creatin kinase máu",
      "Hội chứng Lupus ban đỏ do thuốc (Drug-induced lupus) kèm xuất hiện kháng thể kháng nhân ANA"
    ],
    correct: 3
  },
  651: { // ID 651, c: 2
    options: [
      "Huyết áp tâm thu dưới 160 mmHg và huyết áp tâm trương dưới 100 mmHg",
      "Huyết áp tâm thu dưới 100 mmHg và huyết áp tâm trương dưới 60 mmHg",
      "Huyết áp tâm thu dưới 130 mmHg và tâm trương dưới 80 mmHg nếu dung nạp tốt",
      "Huyết áp tâm thu dưới 150 mmHg và huyết áp tâm trương dưới 95 mmHg"
    ],
    correct: 2
  },
  653: { // ID 653, c: 0
    options: [
      "Thuốc chẹn thụ thể Alpha-1 (Doxazosin, Terazosin) vừa hạ áp vừa giảm triệu chứng đường tiểu",
      "Thuốc lợi tiểu Thiazid giúp tăng bài xuất nước tiểu làm sạch đường tiết niệu",
      "Thuốc chẹn kênh calci DHP tác dụng kéo dài giúp giãn cơ vòng bàng quang",
      "Thuốc ức chế men chuyển ngăn ngừa biến chứng xơ hóa mô tuyến tiền liệt"
    ],
    correct: 0
  },
  656: { // ID 656, c: 3
    options: [
      "Sự tích tụ hormon Calcitonin do tuyến giáp bài tiết kích thích giãn mạch nông",
      "Sự ứ đọng nồng độ phân tử Angiotensin II nội bào tại thụ thể thành mao mạch",
      "Sự giải phóng ồ ạt chất trung gian Serotonin từ các kho dự trữ trong tế bào tiểu cầu",
      "Sự ứ đọng Bradykinin và chất P do enzym chuyển bị ức chế không giáng hóa được"
    ],
    correct: 3
  },
  657: { // ID 657, c: 0
    options: [
      "Xử trí khẩn cấp đường thở, tiêm bắp Adrenalin ngay nếu có phù thanh môn đe dọa tắc thở",
      "Tiêm bắp kháng sinh nhóm Penicillin liều cao để phòng ngừa nhiễm trùng huyết thứ phát",
      "Hướng dẫn bệnh nhân tự nghỉ ngơi tại nhà và tiếp tục theo dõi các biểu hiện sưng nề mặt",
      "Cho người bệnh uống dung dịch Oresol bù nước điện giải để làm giảm nồng độ thuốc trong máu"
    ],
    correct: 0
  },
  659: { // ID 659, c: 2
    options: [
      "Chỉ số huyết áp dao động biến thiên liên tục theo từng chu kỳ của nhịp thở lồng ngực",
      "Người bệnh có cơ địa dị ứng đặc thù đối với các loại trang phục y tế có màu trắng",
      "Huyết áp tăng cao khi đo tại phòng khám nhưng hoàn toàn bình thường khi đo tại nhà (HBPM/ABPM)",
      "Huyết áp đo tại bệnh viện luôn ở mức rất thấp nhưng lại tăng vọt ác tính trong lúc ngủ đêm"
    ],
    correct: 2
  },
  660: { // ID 660, c: 3
    options: [
      "Ức chế trực tiếp quá trình bài tiết enzym Renin tại phức hợp cạnh cầu thận ở mô thận",
      "Tăng cường hoạt tính giáng hóa và phân hủy phân tử peptid giãn mạch Bradykinin trong máu",
      "Kích thích làm mở rộng các kênh ion Canxi loại L trên màng tế bào cơ trơn tiểu động mạch",
      "Kích thích thụ thể Beta-3 giải phóng Nitric Oxide (NO) từ tế bào nội mô gây giãn mạch máu"
    ],
    correct: 3
  },
  661: { // ID 661, c: 0
    options: [
      "Chọn lọc cao trên thụ thể Mineralocorticoid nên không gây to vú ở nam và rối loạn kinh nguyệt",
      "Có hoạt tính lợi tiểu thẩm thấu cực mạnh gấp 10 lần so với các dẫn xuất spironolacton cổ điển",
      "Hoàn toàn không có nguy cơ làm tăng nồng độ ion kali trong huyết tương ở người suy giảm chức năng thận",
      "Đào thải nguyên vẹn 100% qua đường hô hấp theo khí thở ra nên không ảnh hưởng đến chức năng lọc cầu thận"
    ],
    correct: 0
  },
  663: { // ID 663, c: 2
    options: [
      "Hạ ngay lập tức số đo huyết áp tâm thu xuống dưới 90 mmHg để ngăn chặn chảy máu tái phát",
      "Sử dụng các thuốc co mạch nâng số đo huyết áp tâm thu lên trên 220 mmHg để duy trì dòng máu não",
      "Hạ huyết áp tâm thu xuống khoảng 140 mmHg một cách thận trọng (trong khoảng 130 - 140 mmHg)",
      "Chống chỉ định hạ huyết áp nhằm duy trì tối đa áp lực tưới máu não xung quanh ổ xuất huyết"
    ],
    correct: 2
  },
  664: { // ID 664, c: 3
    options: [
      "Huyết áp tâm thu dưới 100 mmHg và huyết áp tâm trương dưới 60 mmHg",
      "Huyết áp tâm thu dưới 220 mmHg và huyết áp tâm trương dưới 120 mmHg",
      "Huyết áp tâm thu dưới 120 mmHg và huyết áp tâm trương dưới 80 mmHg",
      "Huyết áp tâm thu dưới 185 mmHg và tâm trương dưới 110 mmHg trước khi tiêm thuốc tiêu sợi huyết"
    ],
    correct: 3
  },
  666: { // ID 666, c: 1
    options: [
      "Thuốc chẹn chọn lọc trên thụ thể beta-1 adrenergic ở tim như Bisoprolol",
      "Thuốc chẹn kênh calci DHP tác dụng ngắn (như Nifedipin phóng thích nhanh)",
      "Thuốc ức chế men chuyển ức chế chuyển hóa Angiotensin I thành Angiotensin II",
      "Thuốc chẹn kênh calci nhóm Non-DHP (như Verapamil hoặc Diltiazem ức chế nút xoang)"
    ],
    correct: 1
  },
  667: { // ID 667, c: 2
    options: [
      "Thúc đẩy tế bào ống thận tăng cường bài tiết đường glucose ra ngoài theo nước tiểu",
      "Triệt tiêu hoàn toàn 100% tác dụng phụ gây ho khan dai dẳng của các thuốc tim mạch",
      "Chẹn beta làm mất nhịp nhanh phản xạ do Amlodipin, hiệp đồng hạ áp và giảm nguy cơ thiếu máu cơ tim",
      "Làm mất hoàn toàn tác dụng không mong muốn gây táo bón mạn tính của thuốc chẹn calci"
    ],
    correct: 2
  },
  669: { // ID 669, c: 0
    options: [
      "Đo 2 lần/ngày: Buổi sáng sau ngủ dậy đi tiểu và buổi tối trước khi đi ngủ, đo 2 lần cách nhau 1-2 phút",
      "Đo ngay lập tức sau khi vừa hoàn tất buổi tập chạy bộ hoặc hoạt động thể lực gắng sức trở về",
      "Đo ngay sau khi vừa uống liên tục 2 ly cà phê đậm đặc hoặc hút xong một điếu thuốc lá",
      "Đo huyết áp trong lúc đang có xung đột tâm lý, căng thẳng cảm xúc hoặc đang tranh cãi to tiếng"
    ],
    correct: 0
  },
  672: { // ID 672, c: 3
    options: [
      "Kích thích các kênh ion Kali phụ thuộc điện thế tại màng tế bào cơ trơn mạch máu ngoại vi",
      "Phong bế cạnh tranh chọn lọc trên các thụ thể Beta-1 giao cảm tại bề mặt tế bào cơ tim",
      "Ức chế quá trình tái hấp thu ion Natri và Clo tại nhánh lên phần dày của quai Henle ở thận",
      "Làm cạn kiệt kho dự trữ Noradrenalin và Serotonin tại tận cùng sợi thần kinh giao cảm (VMAT)"
    ],
    correct: 3
  },
  673: { // ID 673, c: 0
    options: [
      "Thuốc chẹn beta giao cảm (giảm nhu cầu oxy cơ tim) và ức chế men chuyển (bảo vệ cấu trúc tim)",
      "Thuốc lợi tiểu quai Furosemid liều cao đơn độc dùng liên tục kéo dài suốt đời người bệnh",
      "Thuốc hạ áp tác động lên hệ thần kinh trung ương Clonidin dùng liều khởi đầu cao ngắt quãng",
      "Thuốc giãn mạch trực tiếp tiểu động mạch Hydralazin phối hợp với chế độ ăn kiêng muối nghiêm ngặt"
    ],
    correct: 0
  },
  676: { // ID 676, c: 3
    options: [
      "Gây ảo giác hoang tưởng nhìn thấy hình ảnh kỳ lạ và hoảng sợ mất định hướng không gian",
      "Gây rối loạn sắc giác cấp tính khiến mắt người bệnh không thể phân biệt được tín hiệu đèn giao thông",
      "Làm tổn thương không hồi phục tế bào lông ốc tai dẫn đến mất thính lực tạm thời trong tuần đầu",
      "Chóng mặt, choáng váng do hạ huyết áp tư thế đứng trong giai đoạn đầu bắt đầu dùng thuốc"
    ],
    correct: 3
  },
  677: { // ID 677, c: 0
    options: [
      "Giảm cân nặng đưa chỉ số khối cơ thể (BMI) về mức lý tưởng (giảm 1 kg giảm ~1 mmHg huyết áp)",
      "Áp dụng chế độ ngủ nghỉ liên tục trên 14 tiếng mỗi ngày để giảm thiểu tiêu hao năng lượng cơ thể",
      "Tắm nước đá lạnh vào mùa đông để kích hoạt các thụ thể nhiệt ngoại vi làm tăng trương lực mao mạch",
      "Thay thế hoàn toàn các bữa ăn chính trong ngày bằng các loại nước giải khát đóng chai có đường"
    ],
    correct: 0
  },
  678: { // ID 678, c: 1
    options: [
      "Chế độ ăn ưu tiên sử dụng các loại mỡ động vật chiên đi chiên lại nhiều lần ở nhiệt độ cao",
      "Giàu rau xanh, quả chín, ngũ cốc nguyên hạt, sữa ít béo, giảm mỡ bão hòa và hạn chế muối (< 5g muối/ngày)",
      "Tập trung dung nạp nhiều loại thịt đỏ, xúc xích và các món ăn chế biến từ nội tạng động vật",
      "Chế độ ăn nhiều thực phẩm đóng hộp, đồ muối chua lên men chứa hàm lượng muối natri đậm đặc"
    ],
    correct: 1
  },
  679: { // ID 679, c: 2
    options: [
      "Gây teo nhỏ các buồng tâm thất và làm suy giảm vĩnh viễn phân suất tống máu của cơ tim",
      "Làm cho huyết áp tâm thu và tâm trương tăng vọt vĩnh viễn không thể hạ xuống mức bình thường",
      "Giúp hạ huyết áp tâm thu khoảng 4 - 9 mmHg, cải thiện chức năng nội mô và sức khỏe tim mạch",
      "Hoàn toàn không mang lại bất kỳ lợi ích huyết động hay tim mạch nào cho người bệnh tăng huyết áp"
    ],
    correct: 2
  },
  680: { // ID 680, c: 3
    options: [
      "Thuốc chẹn chọn lọc thụ thể Beta-1 giao cảm như Bisoprolol bắt đầu với liều rất thấp",
      "Thuốc lợi tiểu quai Furosemid dùng để kiểm soát tình trạng ứ dịch tuần hoàn và phù chi dưới",
      "Thuốc ức chế men chuyển Enalapril để ngăn ngừa và làm chậm quá trình tái cấu trúc cơ tim",
      "Thuốc chẹn kênh calci Non-DHP (Verapamil, Diltiazem) và thuốc chẹn kênh calci DHP tác dụng ngắn"
    ],
    correct: 3
  },
  681: { // ID 681, c: 0
    options: [
      "Đi ngoài phân lỏng hoặc tóe nước từ 3 lần trở lên trong 24 giờ và kéo dài không quá 14 ngày",
      "Đi tiêu phân khuôn rắn chắc từng viên nhỏ kèm theo cảm giác mót rặn đau rát hậu môn",
      "Đi ngoài phân sệt mềm có khuôn 1 lần duy nhất trong ngày ở trẻ nhỏ đang bú mẹ hoàn toàn",
      "Đi tiêu phân có nhầy nhớt kéo dài liên tục trên 30 ngày kèm theo sụt cân suy dinh dưỡng nặng"
    ],
    correct: 0
  },
  683: { // ID 683, c: 2
    options: [
      "Thời gian đợt bệnh diễn biến kéo dài đúng 24 giờ đồng hồ rồi tự động khỏi dứt điểm",
      "Bệnh cảnh chỉ diễn ra cấp tính trong vòng 2 đến 3 giờ đầu tiên rồi thuyên giảm hoàn toàn",
      "Thường kéo dài từ 5 đến 7 ngày (hiếm khi quá 14 ngày) và có tính chất tự giới hạn",
      "Diễn biến mạn tính kéo dài liên tục trên 3 tháng đòi hỏi phải can thiệp nuôi dưỡng tĩnh mạch"
    ],
    correct: 2
  },
  686: { // ID 686, c: 1
    options: [
      "Các giọt chất béo nhũ tương hóa giúp làm chậm tốc độ di chuyển của dịch phân trong lòng ruột",
      "Glucose thúc đẩy đồng vận chuyển 1 phân tử Glucose với 1 ion Natri qua kênh SGLT-1 kéo nước theo",
      "Bổ sung hàm lượng Vitamin C liều cao để tăng cường sức bền của các mao mạch thành ruột non",
      "Các acid amin chuỗi nhánh leucine và isoleucine cung cấp năng lượng trực tiếp cho tế bào nhung mao"
    ],
    correct: 1
  },
  687: { // ID 687, c: 2
    options: [
      "Trẻ bị tiêu chảy cấp có biểu hiện co giật toàn thân hoặc sốt cao co giật khó hạ thân nhiệt",
      "Trẻ có dấu hiệu mất nước mức độ trung bình (vật vã, mắt trũng, khát nước đòi uống háo hức)",
      "Trẻ tiêu chảy chưa có dấu hiệu mất nước (điều trị ngoại trú tại nhà, tăng lượng dịch uống và kẽm)",
      "Trẻ rơi vào tình trạng sốc giảm thể tích tuần hoàn nguy kịch với mạch nhanh nhỏ khó bắt"
    ],
    correct: 2
  },
  689: { // ID 689, c: 0
    options: [
      "Trẻ có dấu hiệu 'Có mất nước' (mất nước nhẹ đến trung bình), bù Oresol 75 mL/kg trong 4 giờ tại y tế",
      "Trẻ bị sốc mất nước nặng li bì hôn mê cần đặt đường truyền tĩnh mạch hồi sức cấp cứu",
      "Trẻ có biểu hiện xuất huyết đường tiêu hóa trên nôn ra máu hoặc đi ngoài phân đen sẫm",
      "Trẻ hoàn toàn không có bất kỳ dấu hiệu mất nước nào và có thể cho về tự chăm sóc tại gia đình"
    ],
    correct: 0
  },
  690: { // ID 690, c: 1
    options: [
      "Lấy cân nặng của trẻ tính bằng kg nhân với 20 mL dung dịch Oresol uống trong 4 giờ",
      "Lượng Oresol (mL) trong 4 giờ đầu = Cân nặng (kg) x 75 mL (hoặc tính theo bảng lứa tuổi của WHO)",
      "Lấy cân nặng của trẻ tính bằng kg nhân với 150 mL dung dịch Oresol uống chia đều trong ngày",
      "Cố định một lượng dung dịch 500 mL cho tất cả mọi trẻ em ở mọi lứa tuổi và cân nặng khác nhau"
    ],
    correct: 1
  },
  691: { // ID 691, c: 2
    options: [
      "Trẻ khóc to có nhiều nước mắt và niêm mạc khoang miệng hoàn toàn ẩm ướt bình thường",
      "Nếp véo da vùng bụng của trẻ trở lại trạng thái đàn hồi phẳng bình thường ngay dưới 1 giây",
      "Có ít nhất 2 trong 4 dấu hiệu: Li bì/khó đánh thức, Mắt rất trũng, Không uống được/uống kém, Véo da mất rất chậm",
      "Trẻ hoàn toàn tỉnh táo, chơi ngoan và đòi uống nước liên tục nhưng không nôn sau khi uống"
    ],
    correct: 2
  },
  692: { // ID 692, c: 3
    options: [
      "Dung dịch Natri hydrocarbonat đậm đặc tiêm truyền tĩnh mạch cấp cứu cân bằng kiềm toan",
      "Dung dịch Albumin người nồng độ 20% truyền tĩnh mạch để nâng áp lực keo huyết tương",
      "Dung dịch Glucose ưu trương 10% tiêm truyền tĩnh mạch cung cấp năng lượng tức thì",
      "Ringer Lactat (dung dịch được ưu tiên lựa chọn) hoặc dung dịch Natri clorid 0,9% sinh lý"
    ],
    correct: 3
  },
  694: { // ID 694, c: 1
    options: [
      "Toàn bộ 100 mL/kg dung dịch truyền xối xả thật nhanh trong vòng 15 phút tại phòng cấp cứu",
      "Tổng 100 mL/kg trong 6 giờ: 30 mL/kg trong 1 giờ đầu, sau đó 70 mL/kg trong 5 giờ tiếp theo",
      "Truyền nhỏ giọt tĩnh mạch chậm rãi kéo dài liên tục suốt 24 giờ đồng hồ tại khoa phòng",
      "Tổng 100 mL/kg trong 3 giờ: 30 mL/kg trong 30 phút đầu và 70 mL/kg trong 2,5 giờ tiếp theo"
    ],
    correct: 1
  },
  695: { // ID 695, c: 2
    options: [
      "Toàn bộ 100 mL/kg dịch chỉ truyền trong vòng 10 phút tại phòng hồi sức cấp cứu",
      "Truyền tĩnh mạch nhỏ giọt đều đặn kéo dài trong suốt 12 giờ đồng hồ theo dõi nội trú",
      "Tổng 100 mL/kg trong 3 giờ: 30 mL/kg trong 30 phút đầu, sau đó 70 mL/kg trong 2,5 giờ tiếp theo",
      "Tổng 100 mL/kg trong 8 giờ: 30 mL/kg trong 2 giờ đầu và 70 mL/kg trong 6 giờ tiếp theo"
    ],
    correct: 2
  },
  696: { // ID 696, c: 3
    options: [
      "Kẽm có tác dụng làm se niêm mạc làm phân đông đặc lại ngay lập tức trong vòng vài giờ",
      "Kẽm có hoạt tính kháng sinh tiêu diệt trực tiếp các loại virus gây tiêu chảy trong ruột",
      "Kẽm làm giảm cảm giác thèm ăn giúp hệ tiêu hóa của trẻ được nghỉ ngơi không phải làm việc",
      "Phục hồi cấu trúc tế bào biểu mô vi nhung mao ruột, rút ngắn thời gian và ngừa tiêu chảy tái phát"
    ],
    correct: 3
  },
  697: { // ID 697, c: 0
    options: [
      "20 mg Kẽm nguyên tố mỗi ngày, liên tục trong 10 đến 14 ngày",
      "10 mg Kẽm nguyên tố mỗi ngày dùng trong 5 ngày rồi ngừng thuốc",
      "5 mg Kẽm nguyên tố mỗi ngày chia làm hai cữ uống sáng và tối",
      "50 mg Kẽm nguyên tố mỗi ngày dùng liên tục trong 1 tháng"
    ],
    correct: 0
  },
  698: { // ID 698, c: 1
    options: [
      "20 mg Kẽm nguyên tố mỗi ngày uống vào buổi sáng sau khi ăn no",
      "10 mg Kẽm nguyên tố mỗi ngày, liên tục trong 10 đến 14 ngày",
      "Chống chỉ định bổ sung kẽm cho trẻ em dưới 6 tháng tuổi vì độc tính gan",
      "2 mg Kẽm nguyên tố mỗi ngày dùng trong 3 ngày đầu của đợt bệnh"
    ],
    correct: 1
  },
  699: { // ID 699, c: 2
    options: [
      "Bắt buộc phải chỉ định kháng sinh phổ rộng ngay từ ngày đầu tiên cho mọi trường hợp",
      "Chỉ dùng kháng sinh khi người bệnh xuất hiện triệu chứng sốt nhẹ từ 37,5°C trở lên",
      "Không chỉ định thường quy; chỉ dùng khi có bằng chứng Lỵ trực khuẩn (phân máu) hoặc Tả nặng",
      "Luôn luôn tiêm phối hợp đồng thời hai loại kháng sinh phổ rộng đường tĩnh mạch cho trẻ"
    ],
    correct: 2
  },
  700: { // ID 700, c: 3
    options: [
      "Rối loạn tiêu hóa cơ năng thoáng qua do thức ăn dặm không dung nạp ở đường ruột",
      "Bệnh cảnh tiêu chảy dị ứng do không dung nạp protein sữa bò ở trẻ sơ sinh nhũ nhi",
      "Tiêu chảy do nhiễm virus Rotavirus thông thường không có biến chứng xâm lấn niêm mạc",
      "Hội chứng lỵ (do Shigella hoặc Campylobacter) cần được chỉ định kháng sinh thích hợp"
    ],
    correct: 3
  },
  702: { // ID 702, c: 1
    options: [
      "Gây tổn thương tế bào lông ốc tai dẫn đến điếc tiếp nhận thần kinh vĩnh viễn",
      "Gây liệt ruột cơ năng, ứ đọng phân độc tố, trướng bụng và tăng nguy cơ thủng/hoại tử ruột",
      "Gây suy tim cấp tính tiến triển do rối loạn nhịp tim ác tính không hồi phục",
      "Gây tổn thương viêm da dị ứng cấp tính dạng hồng ban đa dạng toàn bộ cơ thể"
    ],
    correct: 1
  },
  703: { // ID 703, c: 2
    options: [
      "Làm tê liệt hoàn toàn nhu động của hệ thống cơ trơn cơ vòng thành đại tràng",
      "Bao phủ cơ học toàn bộ bề mặt niêm mạc dạ dày ngăn cản acid clohydric tiếp xúc",
      "Ức chế enzym Enkephalinase ngoại biên, giảm bài tiết nước và điện giải mà không giảm nhu động",
      "Tiêu diệt trực tiếp các chủng phẩy khuẩn tả và trực khuẩn lỵ trong lòng ống tiêu hóa"
    ],
    correct: 2
  },
  704: { // ID 704, c: 3
    options: [
      "Diệt khuẩn bằng cách phá hủy màng phospholipid kép của các vi sinh vật gây bệnh",
      "Ức chế chọn lọc bơm proton H+/K+-ATPase trên bề mặt tế bào thành niêm mạc dạ dày",
      "Kích thích quá trình tái hấp thu đường glucose chủ động qua trung gian phân tử mang",
      "Bao phủ niêm mạc ruột và hấp phụ độc tố vi khuẩn, virus, khí độc trong lòng ống tiêu hóa"
    ],
    correct: 3
  },
  706: { // ID 706, c: 1
    options: [
      "Chữa khỏi hoàn toàn bệnh tiêu chảy ngay lập tức sau 1 giờ uống men vi sinh",
      "Hỗ trợ cân bằng hệ vi sinh đường ruột và rút ngắn thời gian tiêu chảy khoảng 1 ngày",
      "Tiêu diệt sạch sẽ toàn bộ vi khuẩn thường trú và gây bệnh trong lòng đường ruột",
      "Thay thế hoàn toàn nhu cầu bù nước và điện giải thiết yếu của dung dịch Oresol"
    ],
    correct: 1
  },
  707: { // ID 707, c: 2
    options: [
      "Chỉ cho trẻ ăn cháo muối trắng loãng không có thịt và chất béo trong suốt đợt bệnh",
      "Pha loãng sữa công thức xuống còn 1/4 nồng độ chuẩn để giảm bớt gánh nặng tiêu hóa",
      "Tiếp tục cho trẻ bú mẹ tăng cường và ăn uống bình thường đủ chất, không kiêng khem",
      "Bắt trẻ nhịn ăn tuyệt đối và chỉ cho uống nước lọc tinh khiết trong 3 ngày đầu"
    ],
    correct: 2
  },
  708: { // ID 708, c: 3
    options: [
      "Chuyển ngay sang tiêm kháng sinh phổ rộng qua đường tiêm bắp sâu tại trạm y tế",
      "Cấm tuyệt đối không cho trẻ uống thêm bất kỳ ngụm nước nào nữa trong suốt ngày",
      "Ép trẻ uống ngay lập tức gấp đôi lượng dung dịch Oresol mà trẻ vừa nôn ra ngoài",
      "Tạm dừng cho uống 5 - 10 phút, sau đó cho uống lại chậm rãi từng thìa nhỏ một"
    ],
    correct: 3
  },
  709: { // ID 709, c: 0
    options: [
      "Tình trạng mất nước nặng (mất > 10% thể trọng) đe dọa thể tích tuần hoàn",
      "Trẻ có lớp mỡ dưới da phát triển quá dày làm giảm tính đàn hồi của thành bụng",
      "Đây là một hiện tượng sinh lý hoàn toàn bình thường ở tất cả trẻ em khỏe mạnh",
      "Dấu hiệu đặc trưng của bệnh lý suy dinh dưỡng thể phù do thiếu hụt chất đạm"
    ],
    correct: 0
  },
  710: { // ID 710, c: 1
    options: [
      "Do khẩu phần ăn của trẻ dung nạp quá nhiều chất đạm làm tăng ure máu",
      "Mất một lượng lớn ion Bicarbonat (HCO3-) theo dịch phân lỏng bài xuất ra ngoài",
      "Do sự tích tụ quá mức của acid uric hòa tan trong huyết tương người bệnh",
      "Do tế bào ống thận tăng cường bài tiết ion hydro H+ vào trong nước tiểu"
    ],
    correct: 1
  },
  711: { // ID 711, c: 2
    options: [
      "Phù toàn thân có vết lõm sâu khi ấn ngón tay vào mặt trước xương chày hai bên",
      "Tăng phản xạ gân xương sâu quá mức kèm theo các cơn co giật cục bộ toàn thân",
      "Trướng bụng, giảm nhu động ruột (nguy cơ liệt ruột), yếu cơ toàn thân và loạn nhịp tim",
      "Khởi phát cơn co cứng cơ toàn thân tetani và cứng hàm kiểu uốn ván ngoại khoa"
    ],
    correct: 2
  },
  712: { // ID 712, c: 3
    options: [
      "Trẻ ngủ ngoan và thở đều đặn sau khi uống đủ lượng dung dịch Oresol quy định",
      "Trẻ đi tiểu tiện nước tiểu có màu vàng nhạt và số lượng nước tiểu bình thường",
      "Trẻ có biểu hiện thèm ăn và đòi bú mẹ nhiều hơn bình thường giữa các cữ bú",
      "Sốt cao, nôn tất cả mọi thứ, khát nước dữ dội, không uống được hoặc phân có máu"
    ],
    correct: 3
  },
  714: { // ID 714, c: 1
    options: [
      "Vì các khoáng chất trong nước khoáng làm dung dịch Oresol bốc mùi hôi khó chịu",
      "Làm sai lệch áp lực thẩm thấu (thành ưu trương gây kéo nước vào ruột) và sai tỷ lệ ion",
      "Vì nước khoáng có chứa các chất oxy hóa làm Oresol biến tính thành chất độc hại",
      "Vì chất tạo màu trong nước ngọt làm biến đổi màu sắc nhận diện của dung dịch Oresol"
    ],
    correct: 1
  },
  715: { // ID 715, c: 2
    options: [
      "Đường phun sương nhỏ mũi định liều qua niêm mạc mũi họng của trẻ nhỏ",
      "Đường tiêm trong da ở vùng mặt trước cẳng tay tương tự kỹ thuật tiêm BCG",
      "Đường uống với 2 hoặc 3 liều tùy loại vắc xin (bắt đầu từ 6 tuần tuổi)",
      "Đường tiêm bắp sâu ở vùng mặt trước ngoài đùi trẻ sơ sinh và trẻ nhỏ"
    ],
    correct: 2
  },
  716: { // ID 716, c: 3
    options: [
      "Đi ngoài phân có nhiều chất nhầy lẫn máu mũi kèm theo sốt cao và co giật",
      "Phân thành khuôn rắn chắc xen kẽ với các đợt táo bón kéo dài từng đợt",
      "Phân có màu đen sẫm như bã cà phê kèm theo mùi thối khẳm đặc trưng",
      "Tiêu chảy phân toàn nước đục như nước vo gạo, số lượng ồ ạt, tanh nồng, không sốt"
    ],
    correct: 3
  },
  718: { // ID 718, c: 1
    options: [
      "Chất xơ không hòa tan cellulose có trong các loại rau củ quả thô người bệnh ăn vào",
      "Các chất không hấp thu được (như đường Lactose khi thiếu men) giữ nước trong lòng ruột",
      "Các phân tử protein thịt đỏ chưa được dịch tụy thủy phân hoàn toàn trong dạ dày",
      "Các hạt khoáng chất vô cơ không tiêu hóa bám dính vào bề mặt lớp nhầy ruột non"
    ],
    correct: 1
  },
  720: { // ID 720, c: 3
    options: [
      "Sốt cao liên tục dao động kèm theo các cơn ho khan kích ứng đường hô hấp",
      "Đi ngoài phân toàn nước có màu xanh lá cây đậm kèm theo bọt khí sủi tăm",
      "Táo bón kéo dài nhiều tuần lễ kèm theo khối phân cứng tắc nghẽn ở trực tràng",
      "Đau bụng từng cơn dữ dội, khóc thét co chân, nôn mửa và đi ngoài phân nhầy máu đỏ nâu"
    ],
    correct: 3
  },
  721: { // ID 721, c: 0
    options: [
      "Trẻ nôn nhiều cản trở việc bù dịch bằng Oresol (cân nhắc 1 liều duy nhất theo cân nặng)",
      "Sử dụng với mục đích cầm tiêu chảy cấp tính ngay lập tức trong vòng 10 đến 15 phút",
      "Chỉ được phép sử dụng khi trẻ xuất hiện các cơn co giật toàn thân do sốt cao",
      "Tất cả mọi đối tượng trẻ em bị tiêu chảy cấp đều bắt buộc phải dùng thuốc thường quy"
    ],
    correct: 0
  },
  722: { // ID 722, c: 1
    options: [
      "Trẻ hoàn toàn tỉnh táo và có khả năng bú mẹ hoặc uống nước từ cốc rất tốt",
      "Trẻ nôn liên tục hoặc từ chối uống nước mà chưa thể đặt đường truyền tĩnh mạch",
      "Trẻ có dấu hiệu thủng tạng rỗng nghi ngờ viêm phúc mạc toàn thể trong ổ bụng",
      "Trẻ đang trong cơn sốc tụt huyết áp trụy mạch tuần hoàn cần hồi sức dịch khẩn"
    ],
    correct: 1
  },
  724: { // ID 724, c: 3
    options: [
      "Tự ý mua dịch truyền và kim truyền để tự tiêm truyền tĩnh mạch cho trẻ tại nhà",
      "Bắt ép trẻ phải nhịn ăn uống tuyệt đối trong suốt 24 giờ đầu để làm sạch lòng ruột",
      "Tự ý ra các quầy thuốc mua các loại kháng sinh phổ rộng liều cao cho trẻ uống sớm",
      "Nhận biết dấu hiệu mất nước, cho uống Oresol đúng cách và biết dấu hiệu nguy hiểm cần khám"
    ],
    correct: 3
  },
  725: { // ID 725, c: 0
    options: [
      "Một nắm gạo tẻ, một nhúm muối nhỏ (khoảng 3,5g) và một lít nước đun sôi kỹ",
      "Hòa tan muối ăn vào các loại nước ngọt hoa quả đóng lon có sẵn trên thị trường",
      "Nửa bát muối ăn nguyên chất hòa tan với một lít nước sôi để nguội cho trẻ uống",
      "Nấu cháo thật đặc sánh không cho thêm nước để giữ nguyên hàm lượng tinh bột ruột"
    ],
    correct: 0
  },
  726: { // ID 726, c: 1
    options: [
      "Tổn thương phá hủy không thể hồi phục cấu trúc vách các túi phế nang của phổi",
      "Viêm mạn tính đường thở với sự tham gia của nhiều tế bào (dưỡng bào, ái toan, lympho T)",
      "Nhiễm khuẩn cấp tính mưng mủ tạo ổ áp xe bên trong các phế nang đường hô hấp dưới",
      "Hiện tượng xơ hóa không hồi phục toàn bộ hệ thống mao mạch tuần hoàn phế nang phổi"
    ],
    correct: 1
  },
  727: { // ID 727, c: 2
    options: [
      "Chỉ số dung tích sống gắng sức FVC luôn luôn suy giảm nặng nề dưới 50% mức dự đoán",
      "Kết quả xét nghiệm khí máu động mạch luôn ghi nhận tình trạng toan chuyển hóa nặng",
      "Tắc nghẽn luồng khí có tính hồi phục đáng kể sau test giãn phế quản (FEV1 tăng > 12% và 200mL)",
      "Tắc nghẽn đường thở cố định không có bất kỳ sự hồi phục nào sau khi hít thuốc giãn phế quản"
    ],
    correct: 2
  },
  729: { // ID 729, c: 0
    options: [
      "Dùng SABA đơn độc làm tăng nguy cơ đợt kịch phát nặng và tăng tỷ lệ tử vong do hen",
      "Vì các hoạt chất SABA có nguy cơ cao gây nghiện thuốc và hội chứng cai thuốc nghiêm trọng",
      "Vì SABA hoàn toàn không có bất kỳ tác dụng nào trong việc làm giãn cơ trơn phế quản",
      "Vì SABA kích hoạt phản ứng đông máu hình thành huyết khối vi mạch trong mao mạch phổi"
    ],
    correct: 0
  },
  730: { // ID 730, c: 1
    options: [
      "Sử dụng đồng thời hai bình xịt định liều chứa hai hoạt chất hoàn toàn độc lập với nhau",
      "Một bình hít chứa phối hợp ICS/Formoterol dùng cho cả điều trị duy trì và cắt cơn khó thở",
      "Chỉ sử dụng đơn thuần các dạng thuốc viên uống giải phóng kéo dài một lần trong ngày",
      "Chỉ định tiêm truyền tĩnh mạch định kỳ kháng thể đơn dòng hàng tháng tại bệnh viện"
    ],
    correct: 1
  },
  731: { // ID 731, c: 2
    options: [
      "Thời gian bán thải kéo dài trên 48 giờ nên chỉ cần hít thuốc một lần mỗi tuần một lần",
      "Có tác dụng kháng viêm trực tiếp ức chế giải phóng các hóa ứng động tương đương corticoid",
      "Khởi phát tác dụng giãn cơ trơn phế quản rất nhanh (1 - 3 phút) tương tự như Salbutamol",
      "Hoàn toàn không có thụ thể beta-2 trên cơ tim nên không gây ra tác dụng phụ hồi hộp trống ngực"
    ],
    correct: 2
  },
  732: { // ID 732, c: 3
    options: [
      "Ức chế chọn lọc enzym Phosphodiesterase-4 làm giảm thoái biến các chất truyền tin",
      "Phong bế cạnh tranh trên các thụ thể Muscarinic M3 trên bề mặt tế bào cơ trơn đường thở",
      "Gắn kết trực tiếp và trung hòa toàn bộ các phân tử kháng thể IgE tự do trong tuần hoàn",
      "Chủ vận thụ thể Beta-2 làm tăng cAMP nội bào, gây giãn cơ trơn khí phế quản nhanh chóng"
    ],
    correct: 3
  },
  733: { // ID 733, c: 0
    options: [
      "Run đầu chi (đặc biệt ngón tay), tim đập nhanh hồi hộp đánh trống ngực và hạ Kali máu",
      "Liệt dây thần kinh số VII ngoại biên gây méo miệng và mất nếp nhăn trán một bên",
      "Xuất huyết dưới da dạng chấm nốt rải rác ở hai cẳng chân do suy giảm số lượng tiểu cầu",
      "Mất hoàn toàn cảm giác vị giác trên bề mặt lưỡi kéo dài nhiều tháng sau khi dùng thuốc"
    ],
    correct: 0
  },
  734: { // ID 734, c: 1
    options: [
      "Mù lòa hai mắt đột ngột do biến chứng tăng nhãn áp cấp tính góc đóng của mắt",
      "Nhiễm nấm Candida khoang miệng hầu họng và khàn tiếng do lắng đọng thuốc tại chỗ",
      "Chảy máu cam ồ ạt từ các mao mạch cuốn mũi dưới không thể cầm được bằng ép cơ học",
      "Làm lung lay và rụng hàng loạt các răng cửa hàm trên do tiêu xương ổ răng tiến triển"
    ],
    correct: 1
  },
  735: { // ID 735, c: 2
    options: [
      "Làm cho toàn bộ lượng thuốc xịt bay hơi hoàn toàn vào không khí trước khi hít vào",
      "Làm gia tăng kích thước hạt thuốc lên gấp đôi để thuốc lắng đọng tại khí quản lớn",
      "Tăng lượng hạt thuốc lắng đọng vào phổi, giảm đọng ở hầu họng và khắc phục nhược điểm phối hợp tay - thở",
      "Làm cho các hạt khí dung đông vón lại thành dạng viên nén dễ nuốt vào đường tiêu hóa"
    ],
    correct: 2
  },
  736: { // ID 736, c: 3
    options: [
      "Cắt cơn hen cấp tính dữ dội đang đe dọa ngừng thở tại khoa hồi sức cấp cứu",
      "Điều trị hen ác tính kháng trị không đáp ứng với các thuốc giãn phế quản dạng khí dung",
      "Chỉ định đầu tay duy nhất cho người cao tuổi có kèm theo bệnh lý suy tim sung huyết nặng",
      "Hen do gắng sức, hen nhạy cảm với Aspirin/NSAID và hen phế quản đi kèm viêm mũi dị ứng"
    ],
    correct: 3
  },
  737: { // ID 737, c: 0
    options: [
      "Rối loạn tâm thần kinh: thay đổi hành vi, lo âu, ác mộng, trầm cảm và ý nghĩ tự sát",
      "Tổn thương tế bào thần kinh ốc tai dẫn đến điếc tiếp nhận thần kinh không thể phục hồi",
      "Gây liệt vận động nửa người thoáng qua do co thắt mạch máu não ở bệnh nhân cao tuổi",
      "Ức chế tủy xương toàn bộ gây thiếu máu bất sản và suy giảm các dòng bạch cầu hạt"
    ],
    correct: 0
  },
  738: { // ID 738, c: 1
    options: [
      "Cắt cơn co thắt phế quản cấp tính nặng đang phải đặt ống nội khí quản thở máy",
      "Hen dị ứng nặng dai dẳng, không kiểm soát được bằng ICS liều cao + LABA và có IgE tăng",
      "Bệnh phổi tắc nghẽn mạn tính COPD đơn thuần không có kiểu hình hen phế quản phối hợp",
      "Tất cả các thể hen phế quản mức độ nhẹ ngắt quãng ở trẻ em và người trưởng thành"
    ],
    correct: 1
  },
  739: { // ID 739, c: 2
    options: [
      "Ức chế enzym Cyclooxygenase-2 cảm ứng tại các ổ viêm đường thở của phế quản",
      "Phong bế thụ thể Histamin H1 trên màng tế bào cơ trơn khí phế quản người bệnh",
      "Kháng trực tiếp Interleukin-5 (IL-5) hoặc thụ thể IL-5R giúp giảm bạch cầu ái toan trong máu",
      "Kháng trực tiếp Interleukin-2 ngăn cản sự biệt hóa của các dòng tế bào lympho T"
    ],
    correct: 2
  },
  740: { // ID 740, c: 3
    options: [
      "Kích thích phản ứng viêm xuất tiết đường thở để làm loãng và tống xuất đờm nhầy ra ngoài",
      "Làm co thắt hệ thống mao mạch phổi giúp làm giảm bớt tình trạng phù nề niêm mạc phế quản",
      "Kích thích trung tâm hô hấp ở hành não làm gia tăng tần số và biên độ của các nhịp thở",
      "Giãn cơ trơn phế quản thông qua ức chế dòng calci đi vào tế bào cơ trơn đường thở"
    ],
    correct: 3
  },
  741: { // ID 741, c: 0
    options: [
      "Prednisolon đường uống 40 - 50 mg/ngày trong 5 - 7 ngày (hiệu quả tương đương đường tiêm)",
      "Tiêm tĩnh mạch Dexamethason liều cao kéo dài liên tục trong vòng 6 tháng điều trị",
      "Chỉ sử dụng dạng thuốc mỡ bôi ngoài da diện rộng để hoạt chất ngấm từ từ vào máu",
      "Chống chỉ định tuyệt đối việc sử dụng Corticoid trong tất cả các cơn hen phế quản cấp"
    ],
    correct: 0
  },
  742: { // ID 742, c: 1
    options: [
      "Tắc nghẽn đường dẫn khí có khả năng hồi phục hoàn toàn sau khi hít thuốc giãn phế quản",
      "Tắc nghẽn luồng khí dai dẳng, tiến triển mạn tính không hồi phục hoàn toàn, liên quan khói độc",
      "Xơ cứng toàn bộ hệ thống các khớp xương sườn lồng ngực làm lồng ngực mất khả năng giãn nở",
      "Biến chứng tràn khí màng phổi tự phát hai bên phổi gây suy hô hấp cấp tính đe dọa tính mạng"
    ],
    correct: 1
  },
  743: { // ID 743, c: 2
    options: [
      "Thói quen tập luyện thể dục thể thao với cường độ thể lực cao trong môi trường không khí lạnh",
      "Chế độ ăn uống dung nạp nhiều loại dầu mỡ động vật và thực phẩm chế biến sẵn giàu năng lượng",
      "Hút thuốc lá, thuốc lào chủ động và tiếp xúc lâu năm với khói thuốc thụ động hoặc bụi ô nhiễm",
      "Thói quen uống một ly rượu vang đỏ vào buổi tối trước khi đi ngủ ở người trưởng thành"
    ],
    correct: 2
  },
  744: { // ID 744, c: 3
    options: [
      "Ức chế cạnh tranh trên các thụ thể Leukotrien tại màng tế bào đường thở phế quản",
      "Kích thích chọn lọc trên các thụ thể giao cảm Beta-2 làm tăng nồng độ AMP vòng nội bào",
      "Ức chế quá trình tái hấp thu chất dẫn truyền thần kinh Dopamin ở các synap thần kinh",
      "Đối kháng cạnh tranh trên thụ thể Muscarinic M3, ức chế co thắt phế quản và giảm tiết nhầy"
    ],
    correct: 3
  },
  746: { // ID 746, c: 1
    options: [
      "Bệnh nhân hoàn toàn không có bất kỳ đợt kịch phát nào trong suốt năm điều trị vừa qua",
      "Bệnh nhân có tiền sử đợt cấp (≥ 2 đợt/năm hoặc ≥ 1 đợt nhập viện) và bạch cầu ái toan máu ≥ 300/mcL",
      "Số lượng tế bào bạch cầu ái toan đo được trong công thức máu ngoại vi hoàn toàn bằng 0",
      "Bệnh nhân có tiền sử viêm phổi tái phát nhiều lần trong các tháng mùa đông vừa qua"
    ],
    correct: 1
  },
  747: { // ID 747, c: 2
    options: [
      "Làm teo nhỏ hoàn toàn thể tích của cả hai lá phổi dẫn đến suy hô hấp mất bù nhanh chóng",
      "Gây suy tim sung huyết cấp tính do hiện tượng ứ trệ dịch tuần hoàn tại các buồng tim",
      "Làm gia tăng đáng kể nguy cơ mắc bệnh Viêm phổi nhiễm trùng ở bệnh nhân COPD",
      "Gây tràn dịch khoang màng ngoài tim làm chèn ép tim cấp đe dọa trực tiếp tính mạng"
    ],
    correct: 2
  },
  748: { // ID 748, c: 3
    options: [
      "Làm tan các cục đờm đặc quánh tức thì trong vòng 5 phút sau khi uống thuốc vào dạ dày",
      "Cắt các cơn khó thở cấp tính ngay lập tức thay thế hoàn toàn cho các loại thuốc xịt hít",
      "Tiêu diệt trực tiếp các chủng trực khuẩn mủ xanh thường trú sâu bên trong các tiểu phế quản",
      "Giảm tần suất đợt kịch phát ở bệnh nhân COPD nặng (FEV1 < 50%), viêm phế quản mạn và hay có đợt cấp"
    ],
    correct: 3
  },
  750: { // ID 750, c: 1
    options: [
      "Làm đông vón các sợi tơ huyết fibrin có trong chất nhầy dịch tiết của đường hô hấp",
      "Cắt đứt các cầu nối disulfid (-S-S-) của mucoprotein, làm giảm độ nhớt và loãng đờm",
      "Phá hủy cấu trúc màng lipid của các tế bào biểu mô phế quản để tống xuất chất nhầy",
      "Kích thích các phế nang bài tiết thật nhiều nước dịch để pha loãng cơ học các cục đờm"
    ],
    correct: 1
  },
  751: { // ID 751, c: 2
    options: [
      "Phân áp oxy động mạch PaO2 đo được khi nghỉ ngơi lớn hơn ngưỡng 80 mmHg",
      "Phân áp oxy động mạch PaO2 dao động trong khoảng từ 65 đến 75 mmHg khi nghỉ",
      "PaO2 ≤ 55 mmHg (hoặc SaO2 ≤ 88%) khi nghỉ, hoặc PaO2 56 - 59 mmHg kèm tâm phế mạn/đa hồng cầu",
      "Chỉ định rộng rãi cho tất cả mọi mức oxy máu bất kể có suy hô hấp hay không"
    ],
    correct: 2
  },
  753: { // ID 753, c: 0
    options: [
      "Vắc xin cúm mùa hàng năm và Vắc xin phòng phế cầu khuẩn (PCV13, PPSV23)",
      "Vắc xin phòng bệnh dại tiêm bắp và vắc xin giải độc tố uốn ván hấp phụ định kỳ",
      "Vắc xin phòng bệnh sốt xuất huyết Dengue và vắc xin sống phòng bệnh sởi quai bị",
      "Vắc xin phòng bệnh tả đường uống và vắc xin phòng bệnh thương hàn dạng tiêm"
    ],
    correct: 0
  },
  754: { // ID 754, c: 1
    options: [
      "Thuốc chẹn không chọn lọc Nadolol có thời gian bán thải sinh học kéo dài trong máu",
      "Thuốc chẹn chọn lọc Beta-1 tim mạch (như Bisoprolol, Metoprolol succinat) ở mức liều thấp",
      "Thuốc chẹn không chọn lọc Propranolol dùng theo đường uống chia nhiều lần trong ngày",
      "Thuốc chẹn không chọn lọc Timolol dạng dung dịch nhỏ mắt hoặc dạng viên nén uống"
    ],
    correct: 1
  },
  755: { // ID 755, c: 2
    options: [
      "Chỉ số nồng độ glucose máu tĩnh mạch tăng cao vượt quá ngưỡng sinh lý bình thường",
      "Chỉ số huyết áp tâm thu của người bệnh có xu hướng giảm nhẹ thoáng qua khi nghỉ ngơi",
      "Có ít nhất 2 trong 3 triệu chứng: Tăng khó thở, Tăng thể tích đờm, Đờm chuyển thành mủ đục",
      "Người bệnh chỉ xuất hiện cảm giác ho khan ngứa họng nhẹ thoáng qua không kèm khạc đờm"
    ],
    correct: 2
  },
  756: { // ID 756, c: 3
    options: [
      "Làm giãn trực tiếp các bó cơ trơn phế quản thông qua ức chế thụ thể muscarinic M3",
      "Tiêu diệt hoàn toàn các chủng vi khuẩn lao tiềm ẩn và phế cầu khuẩn cư trú tại vùng hầu họng",
      "Thay thế hoàn toàn cho liệu pháp thở oxy dài hạn tại nhà ở các bệnh nhân có suy hô hấp mạn",
      "Tác dụng chống viêm, điều hòa miễn dịch và ức chế biofilm, giảm tần suất đợt cấp ở người hay tái phát"
    ],
    correct: 3
  },
  757: { // ID 757, c: 0
    options: [
      "Tạo áp lực dương đường thở thì thở ra, chống xẹp phế quản sớm và tăng thải trừ khí cặn",
      "Làm gia tăng áp lực âm bên trong khoang màng phổi giúp hút thêm nhiều máu về buồng tim",
      "Ngăn cản các phân tử khí oxy khuếch tán qua màng phế nang mao mạch vào trong dòng máu",
      "Làm tăng tần số hô hấp lên gấp 3 lần bình thường để nhanh chóng thanh thải khí cacbonic"
    ],
    correct: 0
  },
  758: { // ID 758, c: 1
    options: [
      "Đánh giá chính xác mức độ tổn thương thực thể của màng đáy mao mạch các phế nang",
      "Theo dõi lưu lượng thở ra đỉnh, phát hiện sớm tắc nghẽn luồng khí để xử trí cơn hen kịp thời",
      "Đo lường nồng độ khí oxy và khí cacbonic hòa tan trong mẫu máu động mạch của người bệnh",
      "Định lượng chính xác thể tích và trọng lượng của lượng đờm nhầy bài xuất trong suốt 24 giờ"
    ],
    correct: 1
  },
  760: { // ID 760, c: 3
    options: [
      "Bắt buộc người bệnh phải lắc đều bình hít thật kỹ trước mỗi lần thực hiện thao tác hít thuốc",
      "Chỉ được phép sử dụng khi có lắp kèm buồng đệm có van một chiều hỗ trợ quá trình hít thở",
      "Đòi hỏi người bệnh phải thực hiện thao tác bóp bình thuốc cùng lúc đồng thì với thì hít vào",
      "Cần hít vào thật nhanh, mạnh và sâu để tạo lực phân tán bột thuốc thành các hạt siêu mịn vào phổi"
    ],
    correct: 3
  },
  761: { // ID 761, c: 0
    options: [
      "Đám mây hạt sương mịn bay chậm và kéo dài, giúp tăng tỷ lệ thuốc lắng đọng tại phổi",
      "Tốc độ phun sương cực nhanh đập mạnh vào thành sau họng giúp thuốc hấp thu nhanh qua niêm mạc",
      "Hệ thống cảm biến thông minh tự động kích hoạt phun thuốc khi phát hiện người bệnh đang ngủ say",
      "Chứa các hạt hoạt chất ở dạng bột khô siêu mịn đòi hỏi người bệnh phải tạo lực hít thật mạnh mẽ"
    ],
    correct: 0
  },
  762: { // ID 762, c: 1
    options: [
      "Áp lực tĩnh mạch mao mạch phổi giảm xuống mức thấp nhất làm giảm lượng máu tưới qua phổi",
      "Nồng độ Cortisol và Adrenalin nội sinh hạ thấp nhất ban đêm, trương lực phó giao cảm tăng cao",
      "Do người bệnh dung nạp quá nhiều thức ăn chứa nhiều chất đạm động vật vào bữa ăn tối muộn",
      "Nồng độ khí Oxy hòa tan trong không khí phòng ngủ vào ban đêm gia tăng quá cao gây kích ứng"
    ],
    correct: 1
  },
  763: { // ID 763, c: 2
    options: [
      "Thời gian duy trì tác dụng giãn phế quản chỉ kéo dài ngắn ngủi trong vòng 10 đến 15 phút",
      "Khởi phát tác dụng tức thì ngay sau 1 giây và duy trì hiệu lực kéo dài liên tục suốt 24 giờ",
      "Khởi phát sau 15 đến 30 phút (chậm hơn SABA) và thời gian tác dụng kéo dài khoảng 4 đến 6 giờ",
      "Duy trì nồng độ thuốc ổn định và hiệu lực giãn phế quản liên tục trong suốt 1 tuần lễ sau hít"
    ],
    correct: 2
  },
  764: { // ID 764, c: 3
    options: [
      "Triệt tiêu hoàn toàn 100% các tác dụng không mong muốn hồi hộp đánh trống ngực của Salbutamol",
      "Thay thế hoàn toàn nhu cầu sử dụng liệu pháp oxy thở qua gọng kính của người bệnh cấp cứu",
      "Kích hoạt hệ thống đông máu làm tăng đông máu vi mạch để bảo vệ niêm mạc đường thở tổn thương",
      "Hiệp đồng giãn phế quản: kích thích Beta-2 (SABA) kết hợp phong bế Muscarinic M3 (SAMA)"
    ],
    correct: 3
  },
  766: { // ID 766, c: 1
    options: [
      "Phong bế cạnh tranh trên các thụ thể của Histamin H2 tại niêm mạc đường tiêu hóa",
      "Ức chế thụ thể IL-4R alpha, chẹn con đường dẫn truyền tín hiệu của cả Interleukin-4 và IL-13",
      "Ức chế hoạt tính xúc tác của enzym chuyển hóa Leukotrien A4 hydrolase tại màng tế bào",
      "Phong bế chọn lọc trên các thụ thể của Angiotensin II typ 1 trên cơ trơn mạch máu phổi"
    ],
    correct: 1
  },
  767: { // ID 767, c: 2
    options: [
      "Dung tích sống toàn phần của cả hai lá phổi đo được bằng kỹ thuật đo thể tích thân ký",
      "Tốc độ dòng khí đỉnh tối đa đo được khi người bệnh thực hiện thao tác hít vào gắng sức",
      "Thể tích khí thở ra gắng sức tối đa trong giây đầu tiên của nghiệm pháp đo chức năng hô hấp",
      "Lượng thể tích khí còn tồn đọng lại bên trong hai lá phổi sau khi người bệnh đã thở ra hết sức"
    ],
    correct: 2
  },
  769: { // ID 769, c: 0
    options: [
      "Phì đại phì dưỡng cơ trơn, dày màng đáy, tăng sinh mạch máu và tăng sinh tế bào biểu mô tiết nhầy",
      "Mất hoàn toàn mạng lưới mao mạch nuôi dưỡng quanh các túi phế nang gây hoại tử nhu mô phổi",
      "Hiện tượng lắng đọng các tinh thể acid uric dạng vi thể tại vách các phế nang đường hô hấp dưới",
      "Teo nhỏ và xơ cứng hoàn toàn toàn bộ hệ thống các tiểu phế quản tận ở cả hai bên trường phổi"
    ],
    correct: 0
  },
  770: { // ID 770, c: 1
    options: [
      "Chủ động tăng gấp đôi mức liều Corticoid đường uống kéo dài liên tục trong suốt 1 tháng tiếp theo",
      "Dùng gối đầu ICS liều cao rồi giảm liều Corticoid uống từ từ để tránh suy thượng thận cấp",
      "Chỉ được phép sử dụng Corticoid dạng hít vào những ngày cuối tuần còn các ngày khác uống thuốc",
      "Cắt bỏ hoàn toàn thuốc corticoid đường uống ngay lập tức ngay trong ngày đầu tiên bắt đầu hít thuốc"
    ],
    correct: 1
  },
  771: { // ID 771, c: 2
    options: [
      "Chỉ số T-score đo được tại vị trí cổ xương đùi lớn hơn ngưỡng âm 1,0 độ lệch chuẩn",
      "Chỉ số T-score đo được tại cột sống thắt lưng có giá trị chính xác bằng 0 độ lệch chuẩn",
      "Chỉ số T-score tại cột sống thắt lưng hoặc cổ xương đùi ≤ -2,5 SD (độ lệch chuẩn)",
      "Chỉ số T-score đo được dao động trong khoảng từ âm 1,0 đến âm 2,5 độ lệch chuẩn (thiếu xương)"
    ],
    correct: 2
  },
  773: { // ID 773, c: 0
    options: [
      "Ức chế enzym Farnesyl pyrophosphate (FPP) synthase, gây chết theo chương trình của hủy cốt bào",
      "Kích thích quá trình hấp thu calci thụ động qua các khe gian bào của niêm mạc ruột non",
      "Kích thích trực tiếp các tế bào tạo cốt bào tăng sinh và tổng hợp chất nền xương mới nhanh chóng",
      "Tăng cường hoạt tính bài tiết của các tế bào ống thận giúp đào thải nhanh acid uric qua nước tiểu"
    ],
    correct: 0
  },
  774: { // ID 774, c: 1
    options: [
      "Uống cùng lúc với bữa ăn trưa nhiều dầu mỡ động vật để hòa tan và hấp thu hoạt chất thuốc",
      "Uống lúc đói vào sáng sớm với một cốc nước lọc đầy (200mL), giữ tư thế ngồi/đứng thẳng ít nhất 30 phút",
      "Nhai nát viên nén rồi nuốt cùng với một ly sữa tươi nguyên kem ấm để giảm kích ứng dạ dày",
      "Uống ngay trước khi chuẩn bị đi ngủ vào ban đêm để thuốc phát huy tác dụng suốt cả đêm"
    ],
    correct: 1
  },
  776: { // ID 776, c: 3
    options: [
      "Bệnh cảnh xơ gan cổ trướng giai đoạn mất bù kèm theo biến chứng xuất huyết tiêu hóa do giãn vỡ",
      "Mù lòa vĩnh viễn ở cả hai mắt do biến chứng teo gai thị giác và thoái hóa võng mạc nhiễm sắc tố",
      "Ức chế tủy xương toàn bộ dẫn đến thiếu máu bất sản và suy giảm nghiêm trọng các dòng bạch cầu",
      "Hoại tử xương hàm (ONJ) và Gãy xương đùi không điển hình (AFF) khi dùng thuốc kéo dài"
    ],
    correct: 3
  },
  777: { // ID 777, c: 0
    options: [
      "Chủ vận estrogen trên xương (tăng mật độ xương) nhưng đối kháng trên tuyến vú và tử cung",
      "Làm giảm đáng kể nguy cơ hình thành cục máu đông trong lòng tĩnh mạch sâu ở phụ nữ mãn kinh",
      "Giải quyết triệt để và dập tắt hoàn toàn các triệu chứng bốc hỏa vã mồ hôi thời kỳ tiền mãn kinh",
      "Kích thích thùy trước tuyến yên tăng tiết gonadotropin làm hồi phục lại chu kỳ kinh nguyệt tự nhiên"
    ],
    correct: 0
  },
  778: { // ID 778, c: 1
    options: [
      "Làm gia tăng đột biến tỷ lệ mắc bệnh ung thư biểu mô tuyến vú xâm lấn ở phụ nữ mãn kinh",
      "Tăng nguy cơ thuyên tắc huyết khối tĩnh mạch (huyết khối tĩnh mạch sâu và thuyên tắc phổi)",
      "Kích thích mọc rậm lông cơ thể và làm biến đổi âm sắc khiến giọng nói trở nên trầm đục hơn",
      "Gây hiện tượng tụt huyết áp tư thế đứng nghiêm trọng ngay từ những liều điều trị đầu tiên"
    ],
    correct: 1
  },
  779: { // ID 779, c: 2
    options: [
      "Gắn kết cạnh tranh trên các enzym chuyển hóa thuốc cytochrom P450 tại tế bào nhu mô gan",
      "Gắn kết trực tiếp và làm biến đổi cấu trúc tinh thể khoáng chất Hydroxyapatit của mô xương",
      "Kháng thể đơn dòng gắn đặc hiệu với phối tử RANKL, ngăn gắn vào thụ thể RANK trên hủy cốt bào",
      "Gắn chọn lọc vào các thụ thể tiếp nhận hormon Insulin trên màng tế bào cơ vân và mô mỡ"
    ],
    correct: 2
  },
  780: { // ID 780, c: 3
    options: [
      "Bôi ngoài da tại các vùng khớp thoái hóa chịu lực như khớp gối và khớp háng hai bên",
      "Tiêm truyền tĩnh mạch nhỏ giọt liên tục với tốc độ ổn định kéo dài suốt 24 giờ mỗi ngày",
      "Uống thuốc dạng viên nén với mức liều lượng cao ngay sau các bữa ăn chính giàu chất béo",
      "Tiêm dưới da ngắt quãng liều thấp mỗi ngày một lần (kích thích tạo cốt bào ưu thế hơn hủy cốt bào)"
    ],
    correct: 3
  },
  781: { // ID 781, c: 0
    options: [
      "Ức chế tuyến yên tiết FSH và LH làm ngăn cản sự phát triển nang noãn và hiện tượng rụng trứng",
      "Phá hủy cấu trúc màng tế bào của hợp tử trứng đã được thụ tinh ngăn cản phôi làm tổ",
      "Tiêu diệt trực tiếp và nhanh chóng các tế bào tinh trùng ngay khi vừa xâm nhập vào âm đạo",
      "Làm teo nhỏ hoàn toàn thể tích hai bên buồng trứng dẫn đến mất khả năng sinh sản vĩnh viễn"
    ],
    correct: 0
  },
  782: { // ID 782, c: 1
    options: [
      "Khởi phát quá trình mất xương tiến triển nhanh dẫn đến loãng xương sớm trước tuổi mãn kinh",
      "Biến cố thuyên tắc huyết khối động mạch và tĩnh mạch (nhồi máu cơ tim, đột quỵ, thuyên tắc phổi)",
      "Phá hủy tế bào biểu mô cầu thận cấp tính dẫn đến hội chứng suy thận mạn giai đoạn cuối",
      "Làm suy giảm chức năng tổng hợp hormon tuyến giáp trạng dẫn đến hội chứng suy giáp cấp tính"
    ],
    correct: 1
  },
  785: { // ID 785, c: 0
    options: [
      "Uống ngay viên đã quên ngay khi nhớ ra (dù uống 2 viên cùng ngày) và uống các viên sau như thường",
      "Uống ngay một liều thuốc tránh thai khẩn cấp chứa Levonorgestrel trong vòng 1 giờ đầu tiên",
      "Chủ động tạm dừng vỉ thuốc đang dùng trong 7 ngày rồi mới bắt đầu uống lại vỉ thuốc mới từ đầu",
      "Bỏ qua viên đã quên và tự ý tăng liều gấp đôi cho tất cả các viên nén thuốc còn lại trong vỉ"
    ],
    correct: 0
  },
  787: { // ID 787, c: 2
    options: [
      "Kích thích tế bào biểu mô ống thận tăng bài tiết đường glucose ra ngoài theo đường nước tiểu",
      "Kích thích các tế bào beta của tiểu đảo tụy tăng cường tổng hợp và giải phóng hormon Insulin",
      "Kích hoạt AMPK làm giảm tân tạo glucose tại gan và tăng tính nhạy cảm với insulin ở mô ngoại vi",
      "Làm chậm quá trình phân giải và hấp thu các phân tử tinh bột carbohydrate tại lòng ruột non"
    ],
    correct: 2
  },
  789: { // ID 789, c: 0
    options: [
      "Mức lọc cầu thận eGFR < 30 mL/phút/1,73m2 (nguy cơ toan acid lactic đe dọa tính mạng)",
      "Mức lọc cầu thận ước tính eGFR giảm xuống dưới ngưỡng 60 mL/phút/1,73m2 diện tích da",
      "Mức lọc cầu thận ước tính eGFR giảm xuống dưới ngưỡng 90 mL/phút/1,73m2 ở người cao tuổi",
      "Mức lọc cầu thận ước tính eGFR giảm xuống dưới ngưỡng 120 mL/phút/1,73m2 có đạm niệu"
    ],
    correct: 0
  },
  790: { // ID 790, c: 1
    options: [
      "Tăng liều Metformin lên gấp đôi trước khi chụp để chủ động phòng ngừa biến chứng tăng đường máu",
      "Tạm ngừng Metformin tại thời điểm chụp, đánh giá lại eGFR sau 48h và chỉ dùng lại khi thận ổn định",
      "Vẫn tiếp tục uống Metformin như bình thường và chỉ cần hướng dẫn người bệnh uống thêm nhiều nước",
      "Đổi sang tiêm tĩnh mạch liên tục Insulin tác dụng nhanh trong suốt một tuần lễ sau khi chụp phim"
    ],
    correct: 1
  },
  791: { // ID 791, c: 2
    options: [
      "Kích thích các tế bào beta của tuyến tụy nội tiết gia tăng sản sinh và bài tiết hormon Insulin",
      "Làm chậm quá trình tiêu hóa và hấp thu các chất bột đường carbohydrate bên trong lòng ruột non",
      "Ức chế kênh SGLT-2 tại ống lượn gần, ngăn tái hấp thu glucose và natri, tăng thải qua nước tiểu",
      "Ức chế enzym dipeptidyl peptidase-4 ngăn cản sự thoái biến sinh học của hormon incretin nội sinh"
    ],
    correct: 2
  },
  792: { // ID 792, c: 3
    options: [
      "Làm giảm tần số nhịp tim xoang xuống dưới 50 lần/phút và ngăn ngừa rung nhĩ kịch phát tái diễn",
      "Làm gia tăng mức lọc cầu thận eGFR lên gấp đôi so với các giá trị xét nghiệm ban đầu lúc khởi trị",
      "Làm giảm tình trạng đề kháng insulin tại mô cơ vân và mô mỡ tương đương nhóm thuốc pioglitazon",
      "Giảm tỷ lệ tử vong tim mạch, giảm nhập viện do suy tim và làm chậm tiến triển bệnh thận mạn"
    ],
    correct: 3
  },
  795: { // ID 795, c: 2
    options: [
      "Làm giảm rõ rệt nồng độ các men tụy amylase và lipase lưu hành trong dòng máu tuần hoàn",
      "Kích thích cảm giác thèm ăn gây tăng cân nhanh chóng và an toàn cho người bệnh suy dinh dưỡng",
      "Giảm cân nặng rõ rệt (chậm tháo rỗng dạ dày, tăng no) và giảm biến cố tim mạch xơ vữa (MACE)",
      "Chữa khỏi hoàn toàn bệnh lý đục thủy tinh thể hai mắt ở bệnh nhân đái tháo đường lâu năm"
    ],
    correct: 2
  },
  796: { // ID 796, c: 3
    options: [
      "Đặt dưới lưỡi trước khi đi ngủ để thuốc khuếch tán vào tĩnh mạch dưới lưỡi",
      "Uống viên nén bao tan trong ruột sau các bữa ăn chính giàu chất béo động vật",
      "Xịt khí dung phân tán hạt mịn qua đường hô hấp bằng dụng cụ xịt định liều",
      "Tiêm dưới da (1 lần/tuần như Semaglutid, Dulaglutid hoặc 1 lần/ngày như Liraglutid)"
    ],
    correct: 3
  },
  797: { // ID 797, c: 0
    options: [
      "Ức chế enzym DPP-4, kéo dài thời gian bán thải của GLP-1 và GIP nội sinh kích thích tiết insulin",
      "Kích thích trực tiếp các tế bào alpha của tiểu đảo tụy tăng cường tổng hợp và bài tiết hormon Glucagon",
      "Ức chế các kênh vận chuyển glucose trên màng tế bào hồng cầu làm giảm lượng đường cung cấp cho mô",
      "Kích thích trực tiếp trên các thụ thể tiếp nhận hormon Insulin tại bề mặt màng tế bào cơ bắp"
    ],
    correct: 0
  },
  798: { // ID 798, c: 1
    options: [
      "Làm hòa tan hoàn toàn các viên sỏi cholesterol bám trong lòng túi mật của người bệnh",
      "Nguy cơ hạ đường huyết rất thấp khi đơn trị liệu (do phụ thuộc glucose) và trung tính với cân nặng",
      "Có thể sử dụng an toàn tuyệt đối để thay thế hormon Insulin ở người bệnh đái tháo đường typ 1",
      "Thúc đẩy sụt giảm cân nặng nhanh chóng tương đương các phẫu thuật ngoại khoa thu nhỏ dạ dày"
    ],
    correct: 1
  },
  799: { // ID 799, c: 2
    options: [
      "Làm mở rộng các kênh ion Natri phụ thuộc điện thế trên bề mặt màng tế bào beta đảo tụy",
      "Đối kháng cạnh tranh không hồi phục trên các thụ thể tiếp nhận hormon Glucagon tại gan",
      "Đóng kênh Kali nhạy cảm ATP (K-ATP) gây khử cực màng, mở kênh Calci làm giải phóng Insulin",
      "Phong bế các kênh vận chuyển ion Clo trên màng nhân tế bào ngăn cản biểu hiện gen đích"
    ],
    correct: 2
  },
  800: { // ID 800, c: 3
    options: [
      "Không bị chuyển hóa qua gan nên an toàn tuyệt đối cho người xơ gan mất bù",
      "Hoạt tính hạ đường huyết nhanh và mạnh gấp 10 lần so với hoạt chất Glibenclamid",
      "Tuyệt đối không bao giờ gây ra bất kỳ phản ứng dị ứng hay nổi mày đay nào ngoài da",
      "Thời gian bán thải ngắn hơn và chọn lọc hơn, ít nguy cơ hạ đường huyết kéo dài hơn Glibenclamid"
    ],
    correct: 3
  },
  801: { // ID 801, c: 0
    options: [
      "Vã mồ hôi, run tay, tim đập nhanh hồi hộp, cảm giác đói cồn cào, lo âu và bồn chồn",
      "Cơn đau thắt ngực kịch phát lan lên vai trái và mặt trong cánh tay trái khi gắng sức",
      "Bí tiểu tiện hoàn toàn kèm theo cảm giác khô đắng miệng và mờ mắt do giãn đồng tử",
      "Sốt cao rét run từng cơn liên tục kèm theo đau nhức dữ dội các khớp xương chi dưới"
    ],
    correct: 0
  },
  803: { // ID 803, c: 2
    options: [
      "Bắt buộc người bệnh phải nhịn ăn uống tuyệt đối và nằm yên bất động tại chỗ chờ hỗ trợ",
      "Tiêm bắp ngay một liều Insulin tác dụng nhanh để ổn định nồng độ hormon trong tuần hoàn",
      "Quy tắc 15: Uống ngay 15g carbonhydrat tác dụng nhanh (nửa cốc nước ngọt/3-4 viên đường), đo lại sau 15p",
      "Cho người bệnh ăn ngay một bữa ăn thịnh soạn gồm một bát cơm đầy chứa nhiều dầu mỡ"
    ],
    correct: 2
  },
  804: { // ID 804, c: 3
    options: [
      "Kích thích tủy sống tăng cường giải phóng các hormon sinh dục vào dòng máu tuần hoàn",
      "Tăng cường thu nạp và sử dụng phân tử đường glucose tại các tế bào nhu mô thần kinh não bộ",
      "Ức chế quá trình bài xuất glucose qua màng lọc cầu thận vào trong dịch nước tiểu ban đầu",
      "Ức chế enzym Alpha-glucosidase ở bờ bàn chải ruột non, làm chậm hấp thu đường, giảm đỉnh đường sau ăn"
    ],
    correct: 3
  },
  805: { // ID 805, c: 0
    options: [
      "Đầy hơi, sôi bụng, chướng bụng, đau quặn bụng và trung tiện nhiều lần do lên men đường",
      "Khởi phát các cơn hạ huyết áp kịch phát dẫn đến ngất xỉu mất ý thức tạm thời khi đứng dậy",
      "Viêm sưng nóng đỏ đau dữ dội tại các khớp bàn ngón chân cái tương tự cơn gút cấp tính",
      "Cơn đau đầu nhức nhối dữ dội xuất hiện chủ yếu vào ban đêm kèm theo buồn nôn nôn mửa"
    ],
    correct: 0
  },
  806: { // ID 806, c: 1
    options: [
      "Thụ thể Glucocorticoid nội bào tham gia vào quá trình điều hòa đáp ứng viêm cơ thể",
      "Kích hoạt thụ thể nhân PPAR-gamma, làm tăng biểu hiện gen nhạy cảm insulin ở mô cơ và mỡ",
      "Thụ thể Estrogen alpha tại các tế bào biểu mô tuyến vú và nội mạc tử cung người phụ nữ",
      "Thụ thể của hormon tuyến giáp trạng tại nhân tế bào điều hòa chuyển hóa cơ bản cơ thể"
    ],
    correct: 1
  },
  807: { // ID 807, c: 2
    options: [
      "Bệnh nhân tăng huyết áp có kèm theo tổn thương đạm niệu vi thể trên mẫu nước tiểu 24 giờ",
      "Bệnh nhân có tiền sử mắc bệnh hen phế quản nhẹ dị ứng đã được kiểm soát tốt bằng thuốc hít",
      "Bệnh nhân có tiền sử hoặc đang mắc bệnh suy tim sung huyết (NYHA I - IV) do nguy cơ giữ nước",
      "Bệnh nhân đái tháo đường typ 2 có tổn thương vi mạch võng mạc không tăng sinh giai đoạn sớm"
    ],
    correct: 2
  },
  808: { // ID 808, c: 3
    options: [
      "Chỉ được phép tiêm vào lúc nửa đêm ngay trước khi người bệnh chuẩn bị đi ngủ",
      "Tiêm vào thời điểm bụng đói cách xa các bữa ăn chính tối thiểu 4 giờ đồng hồ",
      "Bắt buộc phải tiêm trước các bữa ăn chính đúng 2 giờ đồng hồ để chờ thuốc ngấm",
      "Ngay trước bữa ăn (trong vòng 5 - 15 phút) hoặc ngay sau khi vừa ăn xong"
    ],
    correct: 3
  },
  809: { // ID 809, c: 0
    options: [
      "Tạo nồng độ nền phẳng, kéo dài 24 - 36h không có đỉnh nhọn, giảm nguy cơ hạ đường huyết đêm",
      "Thời gian duy trì tác dụng cực dài cho phép chỉ cần tiêm một lần duy nhất mỗi tuần một lần",
      "Hấp thu hoàn hảo qua đường tiêu hóa với sinh khả dụng đường uống đạt xấp xỉ 100% liều dùng",
      "Có hoạt tính diệt khuẩn mạnh mẽ trên các chủng tụ cầu vàng kháng methicillin tại vết thương"
    ],
    correct: 0
  },
  810: { // ID 810, c: 1
    options: [
      "Vùng da ở một phần tư trên ngoài của vùng mông hai bên",
      "Vùng da bụng (quanh rốn cách rốn tối thiểu 2 - 3 cm) có tốc độ hấp thu nhanh và ổn định nhất",
      "Vùng da ở mặt sau ngoài của hai cánh tay người bệnh",
      "Vùng da ở mặt trước ngoài của hai bên đùi người bệnh"
    ],
    correct: 1
  },
  813: { // ID 813, c: 0
    options: [
      "Tăng biểu hiện thụ thể LDL trên bề mặt tế bào gan, tăng thanh thải LDL-C khỏi dòng tuần hoàn",
      "Ngăn cản gan bài tiết các acid mật vào đường ruột thông qua ức chế chọn lọc enzym đích",
      "Làm giảm số lượng và mật độ của các thụ thể tiếp nhận LDL-C trên màng tế bào nhu mô gan",
      "Kích thích tế bào gan gia tăng tổng hợp và giải phóng các phân tử Triglycerid vào trong máu"
    ],
    correct: 0
  },
  817: { // ID 817, c: 0
    options: [
      "Ức chế kép: Statin giảm tổng hợp tại gan + Ezetimibe giảm hấp thu ở ruột, giảm thêm 15 - 20% LDL-C",
      "Giúp giảm bớt nhu cầu liều lượng Insulin cần phải tiêm hàng ngày ở bệnh nhân đái tháo đường",
      "Triệt tiêu hoàn toàn 100% mọi tác dụng không mong muốn trên cơ vân và enzym gan của Statin",
      "Kích thích thận tăng cường bài xuất các phân tử đường glucose dư thừa ra ngoài qua nước tiểu"
    ],
    correct: 0
  },
  818: { // ID 818, c: 1
    options: [
      "Làm gia tăng nồng độ các hạt vi thể Chylomicron mang chất béo ngoại sinh trong máu",
      "Hoạt hóa PPAR-alpha, giảm mạnh Triglycerid (30 - 50%) và tăng nồng độ HDL-C có lợi",
      "Làm giảm nồng độ phân tử LDL-C xấu với cường độ mạnh mẽ vượt trội hơn các thuốc statin",
      "Làm suy giảm hoàn toàn nồng độ glucose tự do hòa tan trong huyết tương sau các bữa ăn"
    ],
    correct: 1
  },
  819: { // ID 819, c: 2
    options: [
      "Cả hai loại thuốc trên đều có độc tính tiêu cơ vân và hoại tử cơ hoàn toàn tương đương nhau",
      "Chống chỉ định tuyệt đối không bao giờ được phép sử dụng Fenofibrat cho bệnh nhân tim mạch",
      "Ưu tiên chọn Fenofibrat (ít ức chế chuyển hóa qua glucuronid hóa statin hơn nhiều so với Gemfibrozil)",
      "Bắt buộc phải ưu tiên lựa chọn Gemfibrozil vì thuốc có hiệu lực hạ lipid máu mạnh mẽ hơn"
    ],
    correct: 2
  },
  820: { // ID 820, c: 3
    options: [
      "Ức chế quá trình vận chuyển và hấp thu các hạt Chylomicron qua biểu mô niêm mạc ruột non",
      "Kích thích tủy xương tăng cường sản sinh các dòng tế bào hồng cầu non mới vào vòng tuần hoàn",
      "Ức chế quá trình phân giải và ly giải các hạt Triglycerid dự trữ bên trong các mô mỡ cơ thể",
      "Ngăn thoái giáng thụ thể LDL qua enzym PCSK9, giúp thụ thể tái tuần hoàn tăng bắt giữ LDL-C"
    ],
    correct: 3
  },
  821: { // ID 821, c: 0
    options: [
      "Triglycerid > 5,6 mmol/L (500 mg/dL) nhằm mục tiêu hàng đầu là phòng ngừa Viêm tụy cấp",
      "Khi nồng độ Triglycerid huyết tương vừa vượt quá ngưỡng sinh lý bình thường 2,2 mmol/L",
      "Khi nồng độ Triglycerid huyết tương bắt đầu vượt quá ngưỡng giới hạn trên 1,7 mmol/L",
      "Chỉ được phép chỉ định điều trị khi nồng độ Triglycerid máu tăng vọt vượt quá 20 mmol/L"
    ],
    correct: 0
  },
  822: { // ID 822, c: 1
    options: [
      "Làm hòa tan hoàn toàn các mảng xơ vữa và các nốt vôi hóa thoái hóa trên bề mặt van tim",
      "Giảm Triglycerid máu (giảm tổng hợp VLDL tại gan) và bổ sung acid béo EPA/DHA thiết yếu",
      "Làm gia tăng gấp đôi nồng độ cholesterol xấu LDL-C lưu hành trong lòng mạch tuần hoàn",
      "Khởi phát các cơn hạ huyết áp kịch phát dẫn đến tình trạng trụy mạch tuần hoàn ngoại vi"
    ],
    correct: 1
  },
  1168: { // ID 1168, c: 3
    options: [
      "Huyết áp tâm thu dao động 120 - 129 mmHg và huyết áp tâm trương dao động 80 - 84 mmHg",
      "Huyết áp tâm thu dưới 120 mmHg và đồng thời huyết áp tâm trương dưới 80 mmHg khi đo",
      "Huyết áp tâm thu ≥ 180 mmHg và/hoặc huyết áp tâm trương ≥ 110 mmHg đo tại phòng khám",
      "Huyết áp tâm thu 140 - 159 mmHg và/hoặc huyết áp tâm trương 90 - 99 mmHg đo tại phòng khám"
    ],
    correct: 3
  },
  1170: { // ID 1170, c: 1
    options: [
      "Thuốc chẹn chọn lọc trên các thụ thể beta-1 adrenergic ở tim dùng theo đường uống hàng ngày",
      "Thuốc ức chế men chuyển (ACEI) hoặc Thuốc chẹn thụ thể Angiotensin II (ARB) để bảo vệ thận",
      "Thuốc chẹn kênh canxi nhóm Dihydropyridin tác dụng ngắn chia làm nhiều cữ uống trong ngày",
      "Thuốc lợi tiểu quai Furosemid liều cao dùng theo đường tiêm bắp ngắt quãng theo dõi định kỳ"
    ],
    correct: 1
  },
  1171: { // ID 1171, c: 2
    options: [
      "Khởi phát cơn hạ đường huyết sâu sắc dẫn đến tình trạng bủn rủn tay chân và vã mồ hôi",
      "Gây co thắt các bó cơ trơn phế quản cấp tính dẫn đến cơn khó thở kiểu hen cấp tính",
      "Phù ngoại vi hai chi dưới (vùng mắt cá chân) do giãn tiểu động mạch tiền mao mạch",
      "Gây ức chế chọn lọc tủy xương làm mất hoàn toàn dòng bạch cầu hạt trong máu ngoại vi"
    ],
    correct: 2
  },
  1172: { // ID 1172, c: 3
    options: [
      "Chủ động tăng gấp đôi liều dùng của Amlodipin lên mức tối đa để thúc đẩy tuần hoàn máu",
      "Kê đơn phối hợp thêm thuốc lợi tiểu quai liều cao Furosemid dùng đều đặn hàng ngày",
      "Yêu cầu người bệnh duy trì tư thế đứng thẳng bất động trong suốt cả ngày làm việc",
      "Phối hợp với thuốc ức chế men chuyển (ACEi) hoặc chẹn thụ thể (ARB) gây giãn tĩnh mạch sau mao mạch"
    ],
    correct: 3
  },
  1173: { // ID 1173, c: 0
    options: [
      "Indapamid và Chlorthalidon (thuộc nhóm Thiazid-like có T1/2 dài và hiệu quả tim mạch vượt trội)",
      "Amilorid thuộc nhóm lợi tiểu giữ kali tác động tại ống lượn xa",
      "Spironolacton đối kháng thụ thể mineralocorticoid tại ống thu thập",
      "Furosemid thuộc nhóm lợi tiểu quai tác động tại nhánh lên quai Henle"
    ],
    correct: 0
  },
  1175: { // ID 1175, c: 2
    options: [
      "Người cao tuổi bị tình trạng tăng huyết áp tâm thu đơn độc có kèm theo xơ vữa mạch máu",
      "Bệnh nhân sau giai đoạn nhồi máu cơ tim cấp có kèm theo biến chứng suy tim ứ huyết",
      "Phụ nữ có thai (đặc biệt quý 2, 3 gây suy thận thai, thiểu ối) và hẹp động mạch thận hai bên",
      "Bệnh nhân đái tháo đường typ 2 có kèm theo tổn thương đạm niệu vi thể trên xét nghiệm"
    ],
    correct: 2
  },
  1177: { // ID 1177, c: 0
    options: [
      "Carvedilol và Labetalol (chẹn hỗn hợp thụ thể Beta không chọn lọc và thụ thể Alpha-1 ngoại biên)",
      "Esmolol tác dụng cực ngắn chỉ dùng qua đường truyền tĩnh mạch cấp cứu",
      "Bisoprolol chẹn chọn lọc cao trên thụ thể beta-1 adrenergic ở tim",
      "Atenolol chẹn chọn lọc thụ thể beta-1 tan nhiều trong nước đào thải qua thận"
    ],
    correct: 0
  },
  1178: { // ID 1178, c: 1
    options: [
      "Bệnh nhân có tiền sử đau thắt ngực ổn định mạn tính khi thực hiện các nghiệm pháp gắng sức",
      "Bệnh nhân có tiền sử Hen phế quản hoặc COPD có co thắt đường thở (do chẹn thụ thể Beta-2)",
      "Bệnh nhân tăng huyết áp vô căn có kèm theo biểu hiện nhịp tim nhanh xoang trên 100 lần/phút",
      "Bệnh nhân sau biến cố nhồi máu cơ tim có phân suất tống máu thất trái còn bảo tồn tốt"
    ],
    correct: 1
  },
  1179: { // ID 1179, c: 3
    options: [
      "Tuổi tác sinh học và giới tính nam hay nữ của người bệnh đang được thăm khám",
      "Khoảng thời gian bệnh nhân được chẩn đoán mắc bệnh lý tăng huyết áp từ trước tới nay",
      "Con số huyết áp tuyệt đối đo được bằng các máy đo huyết áp tự động tại phòng khám",
      "Sự hiện diện của tổn thương cơ quan đích cấp tính đang tiến triển (tim, não, thận, đáy mắt)"
    ],
    correct: 3
  },
  1181: { // ID 1181, c: 0
    options: [
      "Hạ từ từ: giảm không quá 25% huyết áp động mạch trung bình (MAP) trong giờ đầu, sau đó thận trọng",
      "Không can thiệp bất kỳ biện pháp dùng thuốc nào mà chờ đợi huyết áp tự hạ xuống mức sinh lý",
      "Hạ huyết áp xuống càng thấp càng tốt đưa số đo huyết áp về dưới ngưỡng an toàn 90/60 mmHg",
      "Hạ huyết áp thật nhanh về ngay mức bình thường lý tưởng 120/80 mmHg trong vòng 10 phút đầu"
    ],
    correct: 0
  },
  1183: { // ID 1183, c: 2
    options: [
      "Gây bỏng rát và hoại tử hóa học nghiêm trọng tại lớp niêm mạc dưới lưỡi của người bệnh",
      "Làm cho chỉ số huyết áp của người bệnh tăng vọt lên gấp đôi ngay lập tức sau khi nhỏ",
      "Tụt huyết áp nhanh không kiểm soát gây thiếu máu não, nhồi máu cơ tim và tăng tỷ lệ tử vong",
      "Thuốc bị các enzym trong dịch nước bọt phá hủy và bất hoạt hoàn toàn trước khi kịp hấp thu"
    ],
    correct: 2
  },
  1185: { // ID 1185, c: 0
    options: [
      "Hiện tượng huyết áp dội ngược kịch phát (Rebound hypertension) với huyết áp tăng vọt ác tính",
      "Khởi phát các cơn co thắt phế quản cấp tính dữ dội dẫn đến ngừng thở không thể hồi phục",
      "Hôn mê sâu do hạ nồng độ đường máu đột ngột đe dọa trực tiếp tính mạng người bệnh sử dụng",
      "Gây trụy mạch tuần hoàn ngoại vi không thể hồi phục kèm theo sốc giảm thể tích tuần hoàn"
    ],
    correct: 0
  },
  1187: { // ID 1187, c: 2
    options: [
      "Bổ sung thêm kháng sinh nhóm Penicillin phổ rộng đường uống kéo dài liên tục hàng tháng",
      "Chủ động tăng gấp bốn lần mức liều lượng của Amlodipin lên ngưỡng kịch trần 40 mg mỗi ngày",
      "Thuốc kháng thụ thể Mineralocorticoid Spironolactone liều thấp (25 - 50 mg/ngày) hoặc Eplerenone",
      "Tiêm thuốc hạ đường huyết Insulin dưới da liều cao để tăng cường chuyển hóa năng lượng mô"
    ],
    correct: 2
  },
  1190: { // ID 1190, c: 1
    options: [
      "Đo huyết áp trong lúc đang có xung đột tâm lý, căng thẳng cảm xúc hoặc đang tranh cãi to tiếng",
      "Đo 2 lần/ngày: Buổi sáng trước khi uống thuốc và buổi tối trước khi ngủ (đo 2 lần cách nhau 1-2p)",
      "Đo ngay lập tức sau khi vừa thực hiện xong bài tập chạy bộ leo cầu thang 5 tầng liên tục",
      "Chỉ tiến hành đo huyết áp một lần duy nhất vào lúc nửa đêm khi người bệnh bất chợt tỉnh giấc"
    ],
    correct: 1
  },
  1193: { // ID 1193, c: 0
    options: [
      "Đi ngoài phân lỏng hoặc tóe nước từ 3 lần trở lên trong 24 giờ và kéo dài không quá 14 ngày",
      "Tình trạng đi tiêu phân lỏng nhiều nước kéo dài liên tục trên 30 ngày kèm suy dinh dưỡng",
      "Đi ngoài phân khuôn rắn chắc và khô cứng với tần suất đi tiêu 2 ngày một lần ở trẻ nhỏ",
      "Hiện tượng đi ngoài phân sệt mềm có khuôn 1 lần duy nhất trong ngày ở trẻ bú mẹ hoàn toàn"
    ],
    correct: 0
  },
  1195: { // ID 1195, c: 2
    options: [
      "Quá trình khuếch tán thụ động của các phân tử nước tự do qua lớp màng lipid kép tế bào",
      "Kích thích tuyến nhầy đường ruột tăng tiết chất nhầy đặc bảo vệ niêm mạc đại tràng tổn thương",
      "Đồng vận chuyển liên kết 1 phân tử Glucose với 1 ion Natri qua protein mang SGLT-1 kéo nước theo",
      "Hoạt tính ức chế trực tiếp và trung hòa hoàn toàn độc tố ruột của phẩy khuẩn tả và vi khuẩn E. coli"
    ],
    correct: 2
  },
  1197: { // ID 1197, c: 0
    options: [
      "Tạm dừng cho uống 5 - 10 phút, sau đó tiếp tục cho trẻ uống lại từng thìa nhỏ chậm hơn",
      "Ép trẻ uống bù ngay lập tức một lượng dung dịch 500 mL thật nhanh để bù lượng vừa nôn",
      "Chuyển ngay lập tức sang phương pháp tiêm truyền tĩnh mạch cấp cứu tại phòng hồi sức",
      "Bắt trẻ phải nhịn uống hoàn toàn tất cả các loại chất lỏng trong vòng 24 giờ tiếp theo"
    ],
    correct: 0
  },
  1199: { // ID 1199, c: 2
    options: [
      "Cho trẻ uống nước giải khát có ga kết hợp nhịn ăn tinh bột và uống thuốc chống nôn thường quy",
      "Bắt trẻ nhịn ăn tuyệt đối, dùng kháng sinh phổ rộng liều cao và uống thuốc cầm đi ngoài",
      "Cho trẻ uống nhiều nước hơn bình thường + Bổ sung Kẽm + Tiếp tục cho ăn/bú mẹ + Đưa đi khám khi có dấu hiệu nguy hiểm",
      "Chỉ định truyền dịch tĩnh mạch tại trạm y tế kết hợp ngừng hoàn toàn việc cho trẻ bú sữa mẹ"
    ],
    correct: 2
  },
  1202: { // ID 1202, c: 1
    options: [
      "Trẻ xuất hiện triệu chứng sốt cao liên tục kèm theo các cơn ho có đờm xanh đục đường thở",
      "Có ít nhất 2 trong 4 dấu hiệu: Vật vã/kích thích, Mắt trũng, Uống nước háo hức/khát, Nếp véo da mất chậm",
      "Trẻ rơi vào trạng thái hôn mê sâu, các đầu chi lạnh ngắt và mạch ngoại vi không thể bắt được",
      "Trẻ hoàn toàn tỉnh táo, chơi ngoan ngoãn và không hề có bất kỳ biểu hiện khát nước nào"
    ],
    correct: 1
  },
  1204: { // ID 1204, c: 3
    options: [
      "Trẻ khóc to đòi ăn liên tục và không hề có bất kỳ biểu hiện quấy khóc hay nôn trớ nào",
      "Trẻ uống nước háo hức và liên tục với tay đòi người chăm sóc cho uống thêm nhiều nước",
      "Nếp véo da ở vùng thành bụng trở lại trạng thái đàn hồi phẳng bình thường ngay dưới 1 giây",
      "Có ít nhất 2 trong 4 dấu hiệu: Li bì/khó đánh thức, Mắt rất trũng, Không uống được/uống kém, Véo da mất rất chậm"
    ],
    correct: 3
  },
  1206: { // ID 1206, c: 1
    options: [
      "Truyền xối xả toàn bộ lượng dịch 100 mL/kg thật nhanh trong vòng 15 phút tại phòng cấp cứu",
      "Tổng 100 mL/kg trong 6 giờ: 30 mL/kg trong 1 giờ đầu, sau đó 70 mL/kg trong 5 giờ tiếp theo",
      "Tổng 100 mL/kg trong 3 giờ: 30 mL/kg trong 30 phút đầu, sau đó 70 mL/kg trong 2,5 giờ tiếp theo",
      "Truyền nhỏ giọt tĩnh mạch chậm rãi kéo dài liên tục 100 mL/kg trong suốt 24 giờ theo dõi"
    ],
    correct: 1
  },
  1207: { // ID 1207, c: 2
    options: [
      "Tổng 100 mL/kg trong 6 giờ: 30 mL/kg trong 1 giờ đầu, sau đó 70 mL/kg trong 5 giờ tiếp theo",
      "Truyền nhỏ giọt tĩnh mạch thật chậm rãi kéo dài liên tục trong suốt 12 giờ đồng hồ nội trú",
      "Tổng 100 mL/kg trong 3 giờ: 30 mL/kg trong 30 phút đầu, sau đó 70 mL/kg trong 2,5 giờ tiếp theo",
      "Chỉ cần truyền một lượng nhỏ 10 mL/kg trong 1 giờ rồi ngừng lại để chuyển sang đường uống"
    ],
    correct: 2
  },
  1209: { // ID 1209, c: 0
    options: [
      "Ức chế Enkephalinase, giảm tiết nước và điện giải chọn lọc mà không ảnh hưởng nhu động ruột",
      "Tiêu diệt trực tiếp các chủng vi khuẩn tả và trực khuẩn E. coli đang nhân lên trong lòng ruột",
      "Bao phủ cơ học toàn bộ niêm mạc dạ dày giúp ngăn chặn phản xạ nôn trớ thức ăn ở trẻ nhỏ",
      "Làm tê liệt hoàn toàn các bó cơ trơn thành đại tràng làm ngừng đi ngoài tức thì sau khi uống"
    ],
    correct: 0
  },
  1210: { // ID 1210, c: 1
    options: [
      "Tiêu chảy cấp tính do nhiễm các chủng virus đường ruột phổ biến như Rotavirus hoặc Norovirus",
      "Tiêu chảy phân có máu đại thể (Lỵ trực khuẩn) hoặc nghi ngờ dịch tả nặng có mất nước",
      "Trẻ xuất hiện triệu chứng tiêu chảy phân lỏng ngay sau khi vừa uống sữa công thức bò",
      "Tất cả mọi trường hợp trẻ bị tiêu chảy cấp có phân lỏng tóe nước bất kể nguyên nhân bệnh sinh"
    ],
    correct: 1
  },
  1211: { // ID 1211, c: 2
    options: [
      "Ampicillin đường uống dạng viên nén quy ước hoặc dạng hỗn dịch uống cho trẻ nhỏ",
      "Cloramphenicol dạng viên nang uống điều trị ngắt quãng theo dõi công thức máu",
      "Ciprofloxacin đường uống (hoặc Azithromycin, Ceftriaxone) theo phác đồ hướng dẫn của WHO",
      "Cotrimoxazol dạng viên nén phối hợp sulfamethoxazol và trimethoprim đường uống"
    ],
    correct: 2
  },
  1213: { // ID 1213, c: 0
    options: [
      "Tiếp tục cho trẻ bú mẹ tăng cường và ăn chế độ giàu dinh dưỡng bình thường, không kiêng khem",
      "Chỉ cho trẻ ăn cháo muối trắng loãng không có chất đạm và không bổ sung dầu mỡ thực vật",
      "Bắt trẻ nhịn ăn tuyệt đối và chỉ cho uống nước lọc tinh khiết trong suốt thời gian tiêu chảy",
      "Pha loãng sữa mẹ hoặc sữa công thức với nước lã theo tỷ lệ một nửa để giảm bớt nồng độ"
    ],
    correct: 0
  },
  1214: { // ID 1214, c: 1
    options: [
      "Nghiền nát gói thuốc bột rồi trộn chung trực tiếp vào bát cháo hoặc bột ăn dặm của trẻ",
      "Uống cách xa các thuốc khác ít nhất 2 giờ vì tính hấp phụ cao có thể làm giảm hấp thu thuốc khác",
      "Uống đồng thời cùng một lúc với các loại thuốc kháng sinh để tăng cường hiệu lực diệt khuẩn",
      "Hòa tan thuốc bột chung vào bình sữa công thức ấm để trẻ bú cùng lúc trong các cữ bú"
    ],
    correct: 1
  },
  1215: { // ID 1215, c: 2
    options: [
      "Cầm đi ngoài phân lỏng ngay lập tức trong vòng 10 đến 15 phút sau khi uống men vi sinh",
      "Thay thế hoàn toàn nhu cầu bù nước và điện giải thiết yếu của dung dịch Oresol tiêu chuẩn",
      "Hỗ trợ cân bằng hệ vi sinh đường ruột và rút ngắn thời gian tiêu chảy khoảng 1 ngày",
      "Tiêu diệt trực tiếp và triệt để toàn bộ hệ thống vi khuẩn Gram âm có trong đường tiêu hóa"
    ],
    correct: 2
  },
  1218: { // ID 1218, c: 1
    options: [
      "Trẻ vẫn chơi ngoan ngoãn và chỉ đi ngoài phân lỏng 2 lần trong ngày mà không có sốt",
      "Sốt cao, nôn tất cả mọi thứ, khát nước dữ dội hoặc không uống được, đi ngoài phân có máu",
      "Trẻ có biểu hiện thèm ăn và đòi bú mẹ nhiều hơn bình thường giữa các cữ bú hàng ngày",
      "Trẻ đi tiểu tiện bình thường với nước tiểu trong không có bọt khí hay cặn lắng bất thường"
    ],
    correct: 1
  },
  1220: { // ID 1220, c: 3
    options: [
      "Tăng phản xạ gân xương sâu quá mức kèm theo các cơn co giật cục bộ toàn thân liên tục",
      "Chỉ số huyết áp tâm thu và tâm trương tăng vọt ác tính dẫn đến nguy cơ xuất huyết não",
      "Nước tiểu bài xuất chuyển sang màu đỏ sẫm như máu kèm theo hiện tượng đái buốt đái rắt",
      "Trướng bụng, giảm nhu động ruột (nguy cơ liệt ruột), yếu cơ toàn thân và rối loạn nhịp tim"
    ],
    correct: 3
  },
  1221: { // ID 1221, c: 0
    options: [
      "Trong vòng 24 giờ sau khi pha (bảo quản đậy nắp kín, quá 24h phải đổ bỏ và pha gói mới)",
      "Có thể lưu trữ và sử dụng an toàn trong suốt 1 tháng nếu được bảo quản trong ngăn mát tủ lạnh",
      "Chỉ được phép sử dụng trong vòng 15 phút đầu tiên sau khi pha rồi phải đổ bỏ phần còn lại",
      "Có thể lưu trữ sử dụng kéo dài trong vòng 7 ngày ở điều kiện nhiệt độ phòng thoáng mát"
    ],
    correct: 0
  }
};

module.exports = updates;
