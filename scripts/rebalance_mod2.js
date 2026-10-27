const fs = require('fs');
const path = require('path');

// Rebalancing Module 2 (Chapters 5 - 8: 133 questions)
// Covers:
// - Xét nghiệm lâm sàng & Nhận định KQ
// - Sử dụng thuốc ở Trẻ em
// - Sử dụng thuốc ở Người cao tuổi
// - Sử dụng thuốc ở Phụ nữ có thai & Cho con bú

const updates = {
  230: { // ID 230, c: 1
    options: [
      "Co giật toàn thể tiến triển thành phù não cấp và tăng áp lực nội sọ",
      "Rối loạn nhịp tim ác tính và nguy cơ ngừng tim thì tâm trương",
      "Suy thận cấp thể vô niệu do hoại tử biểu mô ống thận cấp tính",
      "Viêm loét thủng niêm mạc ống tiêu hóa gây xuất huyết ồ ạt trong ổ bụng"
    ],
    correct: 1
  },
  241: { // ID 241, c: 0
    options: [
      "Phát hiện sớm tổn thương cầu thận do bệnh đái tháo đường",
      "Đánh giá mức độ sỏi thận tái phát và nguy cơ ứ nước đài bể thận",
      "Chẩn đoán phân biệt viêm bàng quang cấp với viêm niệu đạo vi khuẩn",
      "Tầm soát ung thư biểu mô tuyến tiền liệt giai đoạn di căn hạch"
    ],
    correct: 0
  },
  260: { // ID 260, c: 3
    options: [
      "Tăng nồng độ canxi toàn phần và tăng phosphat máu trên 1,5 mmol/L",
      "Tăng kali máu kịch phát kết hợp tăng natri máu do cô đặc tuần hoàn",
      "Hạ natri máu mức độ nặng kèm theo tăng clo máu bù trừ ở thận",
      "Hạ kali máu và hạ canxi máu kháng trị khó hồi phục khi chưa bù magnesi"
    ],
    correct: 3
  },
  267: { // ID 267, c: 2
    options: [
      "Hoạt tính oxy hóa mạnh mẽ gấp 3 lần so với người trưởng thành khỏe mạnh",
      "Chỉ tham gia chuyển hóa khử carboxyl đối với các acid amin thiết yếu",
      "Chưa hoàn thiện sinh lý, hoạt tính enzym chỉ bằng một phần người lớn",
      "Đạt mức hoạt tính tối đa ngay trong 24 giờ đầu sau khi cất tiếng khóc chào đời"
    ],
    correct: 2
  },
  271: { // ID 271, c: 2
    options: [
      "Gây lắng đọng sắc tố làm đục thủy tinh thể bẩm sinh tiến triển nhanh",
      "Làm teo biểu mô phế nang phổi gây suy giảm dung tích sống vĩnh viễn",
      "Tổn thương sụn tiếp hợp ở khớp và ức chế phát triển xương dài",
      "Phá hủy cầu thận tiến triển nhanh dẫn đến suy thận mạn giai đoạn cuối"
    ],
    correct: 2
  },
  272: { // ID 272, c: 3
    options: [
      "Xuất huyết võng mạc vi mạch hai bên mắt gây suy giảm thị lực vĩnh viễn",
      "Gây hội chứng Fanconi mắc phải do độc tính tế bào ống lượn gần của thận",
      "Gây tổn thương tế bào lông ốc tai dẫn đến điếc tiếp nhận không phục hồi",
      "Gắn kết với calci gây hỏng men răng, ố vàng răng vĩnh viễn và chậm lớn"
    ],
    correct: 3
  },
  273: { // ID 273, c: 0
    options: [
      "Hội chứng Reye gây thoái hóa mỡ gan cấp tính và phù não đe dọa tính mạng",
      "Hội chứng Guillain-Barré liệt cơ hô hấp tiến triển đòi hỏi thở máy xâm lấn",
      "Cơn tan máu cấp tính do phá hủy màng hồng cầu ở bệnh nhân thiếu men G6PD",
      "Viêm loét thủng tá tràng cấp tính gây viêm phúc mạc toàn thể nhiễm trùng"
    ],
    correct: 0
  },
  274: { // ID 274, c: 1
    options: [
      "Indomethacin dạng viên đặt hậu môn liều cao để hạ sốt dập triệu chứng",
      "Paracetamol đường uống liều 10 - 15 mg/kg mỗi lần, tối đa 4 - 6 lần/ngày",
      "Ketorolac tiêm bắp ngắt quãng theo dõi tại cơ sở y tế chuyên khoa sâu",
      "Aspirin đường uống liều cao 50 mg/kg mỗi ngày chia làm nhiều cữ uống"
    ],
    correct: 1
  },
  277: { // ID 277, c: 0
    options: [
      "Ước tính diện tích bề mặt cơ thể (BSA) từ chiều cao và cân nặng của trẻ",
      "Đánh giá chính xác phân loại mức độ mất nước trong tiêu chảy nhiễm khuẩn",
      "Đánh giá thang điểm phát triển tâm thần vận động theo lứa tuổi nhi khoa",
      "Tính toán tốc độ tiêm truyền tĩnh mạch dung dịch điện giải hồi sức cấp cứu"
    ],
    correct: 0
  },
  280: { // ID 280, c: 3
    options: [
      "Lớp sừng rất dày ngăn cản hoàn toàn mọi phân tử thuốc đi qua biểu bì da",
      "Hấp thu rất kém do da trẻ chứa nhiều lipid kỵ nước cản trở khuếch tán",
      "Tốc độ và mức độ hấp thu thuốc qua da hoàn toàn giống người trưởng thành",
      "Hấp thu tăng mạnh do lớp sừng mỏng, giàu mạch máu và diện tích da lớn"
    ],
    correct: 3
  },
  281: { // ID 281, c: 0
    options: [
      "Ức chế trục dưới đồi - tuyến yên - thượng thận và chậm phát triển chiều cao",
      "Kích thích tuyến yên tăng tiết gonadotropin gây dậy thì sớm thứ phát ở trẻ",
      "Lắng đọng mỡ cơ tim làm phì đại buồng tâm thất trái dẫn đến suy tim sung huyết",
      "Thúc đẩy tăng trưởng vượt bậc khiến chiều cao phát triển quá mức bình thường"
    ],
    correct: 0
  },
  283: { // ID 283, c: 2
    options: [
      "Dung dịch Natri clorid 0,9% pha tiêm truyền tĩnh mạch đạt chuẩn vô trùng",
      "Dung dịch Glucose 5% hoặc Glucose 10% đẳng trương không chứa khoáng chất",
      "Dung dịch tiêm truyền chứa Calci như Ringer Lactat do nguy cơ tạo kết tủa",
      "Nước cất pha tiêm vô khuẩn đóng trong ống nhựa định lượng dùng một lần"
    ],
    correct: 2
  },
  285: { // ID 285, c: 0
    options: [
      "Kéo dài và biến thiên khó dự đoán trong suốt 6 đến 8 tháng đầu đời",
      "Làm rỗng dạ dày diễn ra cực kỳ ổn định và đồng nhất như người trưởng thành",
      "Tốc độ tháo rỗng dạ dày diễn ra rất nhanh chỉ trong vòng 10 đến 15 phút",
      "Chỉ làm rỗng dạ dày vào ban ngày còn ban đêm nhu động dạ dày ngừng hẳn"
    ],
    correct: 0
  },
  286: { // ID 286, c: 1
    options: [
      "Tương đương hoàn toàn với hàm lượng mô mỡ của trẻ đủ tháng 5 tuổi",
      "Rất thấp, chỉ chiếm khoảng 1% đến 3% tổng trọng lượng cơ thể của trẻ",
      "Cao vượt trội hơn người lớn rất nhiều do có lớp mỡ nâu bảo vệ thân nhiệt",
      "Chiếm trên 50% tổng trọng lượng cơ thể tạo điều kiện tích tụ thuốc tan trong mỡ"
    ],
    correct: 1
  },
  291: { // ID 291, c: 2
    options: [
      "Gây hoại tử tế bào nhu mô gan cấp tính tiến triển thành suy gan bùng phát",
      "Gây độc trên tế bào thính giác dẫn đến điếc tiếp nhận thần kinh vĩnh viễn",
      "Nguy cơ ức chế hô hấp sâu dẫn đến ngừng thở trong lúc ngủ ở trẻ nhỏ",
      "Phá hủy cấu trúc mầm răng sữa dẫn đến khiếm khuyết men răng vĩnh viễn"
    ],
    correct: 2
  },
  293: { // ID 293, c: 0
    options: [
      "Lau người bằng nước ấm có nhiệt độ thấp hơn nhiệt độ cơ thể trẻ khoảng 2°C",
      "Ủ ấm thật kỹ bằng nhiều lớp chăn dày để kích thích cơ thể toát nhiều mồ hôi",
      "Xoa cồn y tế nồng độ cao lên toàn bộ vùng ngực và lưng trẻ để hạ nhiệt nhanh",
      "Chườm đá lạnh hoặc túi gel đông đá trực tiếp lên vùng trán và ngực của trẻ"
    ],
    correct: 0
  },
  296: { // ID 296, c: 3
    options: [
      "Viêm họng đỏ cấp tính do nhiễm các chủng virus đường hô hấp thông thường",
      "Nhiễm khuẩn đường tiết niệu dưới thể viêm bàng quang cấp chưa biến chứng",
      "Viêm tai giữa cấp ứ mủ tái phát nhiều lần đã kháng các kháng sinh nhóm beta-lactam",
      "Nhiễm vi khuẩn Rickettsia gây bệnh sốt mò đe dọa trực tiếp tính mạng trẻ"
    ],
    correct: 3
  },
  297: { // ID 297, c: 0
    options: [
      "Kém ổn định do mạng lưới mao mạch dưới da của trẻ chưa phát triển hoàn thiện",
      "Hoàn toàn không thể hấp thu vào vòng tuần hoàn chung do thiếu enzyme vận chuyển",
      "Tốc độ khuếch tán vào tĩnh mạch nhanh gấp 3 lần so với người trưởng thành",
      "Chỉ được áp dụng cho các thuốc kháng sinh hòa tan trong dung môi thân nước"
    ],
    correct: 0
  },
  298: { // ID 298, c: 1
    options: [
      "Mức độ và tỷ lệ liên kết của phân tử thuốc với protein albumin huyết tương",
      "Quá trình nhũ hóa hòa tan và hấp thu các thuốc có độ tan cao trong lipid",
      "Tốc độ lọc qua cầu thận và bài xuất theo nước tiểu của các kháng sinh tan trong nước",
      "Hoạt tính của các enzyme cytochrom P450 chuyển hóa thuốc tại vi thể gan"
    ],
    correct: 1
  },
  299: { // ID 299, c: 2
    options: [
      "Gây hoại tử biểu mô ống lượn gần dẫn đến suy thận cấp thể vô niệu không hồi phục",
      "Kích thích trung tâm thèm ăn ở vùng dưới đồi làm trẻ ăn quá mức gây béo phì",
      "Nguy cơ cao khởi phát phản ứng ngoại tháp gây co thắt và loạn trương lực cơ",
      "Làm tăng tiết acid dịch vị dạ dày quá mức dẫn đến biến chứng thủng tá tràng"
    ],
    correct: 2
  },
  300: { // ID 300, c: 3
    options: [
      "Khởi phát phản ứng sốt cao ác tính không đáp ứng với các thuốc hạ nhiệt thông thường",
      "Kích hoạt quá trình tiêu sợi huyết gây chảy máu ồ ạt tại vị trí phẫu thuật cắt amidan",
      "Gây liệt thần kinh vận động vùng hầu họng làm mất hoàn toàn phản xạ nuốt thức ăn",
      "Nguy cơ chuyển hóa siêu nhanh qua CYP2D6 thành Morphin gây ngừng thở tử vong"
    ],
    correct: 3
  },
  301: { // ID 301, c: 0
    options: [
      "Tốc độ chuyển hóa thuốc qua gan tính theo cân nặng nhanh hơn người trưởng thành",
      "Tốc độ chuyển hóa thuốc qua gan chậm nhất so với mọi nhóm lứa tuổi khác",
      "Khả năng thanh thải thuốc qua gan chỉ bằng một nửa so với người trưởng thành",
      "Hệ enzyme gan ngừng hoạt động hoàn toàn và phụ thuộc vào con đường bài xuất qua thận"
    ],
    correct: 0
  },
  303: { // ID 303, c: 2
    options: [
      "Hòa tan chung với các loại nước giải khát có ga hoặc sữa công thức để dễ uống",
      "Pha gói thuốc với một lượng nước thật ít để tăng nồng độ điện giải bù nhanh",
      "Pha chính xác với thể tích nước sôi để nguội ghi rõ trên bao bì hướng dẫn",
      "Pha thật loãng với lượng nước gấp đôi hoặc gấp ba lần thể tích được khuyến cáo"
    ],
    correct: 2
  },
  305: { // ID 305, c: 0
    options: [
      "Li bì hoặc hôn mê khó đánh thức, mắt trũng sâu, nếp véo da mất rất chậm",
      "Trẻ hoàn toàn tỉnh táo, mắt không trũng, nước tiểu màu vàng trong và đi tiểu đều",
      "Nếp véo da vùng bụng trở lại trạng thái đàn hồi phẳng bình thường ngay lập tức",
      "Trẻ khát nước dữ dội và đòi uống nước liên tục nhưng không nôn sau khi uống"
    ],
    correct: 0
  },
  307: { // ID 307, c: 2
    options: [
      "Khối lượng mỡ cơ thể giảm xuống mức tối thiểu trong khi khối cơ bắp gia tăng",
      "Tổng lượng nước trong cơ thể tăng vọt lên chiếm tới 80% trọng lượng toàn thân",
      "Khối cơ teo giảm, tỷ lệ mỡ tăng lên, tổng lượng nước cơ thể suy giảm",
      "Khối lượng cơ bắp phát triển săn chắc hơn nhờ hiện tượng xơ hóa tổ chức liên kết"
    ],
    correct: 2
  },
  308: { // ID 308, c: 3
    options: [
      "Các hoạt chất tan nhiều trong lipid có thể tích phân bố lớn như nhóm Benzodiazepin",
      "Các phân tử sinh học có trọng lượng phân tử khổng lồ không qua được màng lọc",
      "Mọi loại thuốc tan trong mỡ đều đồng loạt giảm mạnh nồng độ đỉnh trong máu",
      "Các thuốc tan nhiều trong nước như Aminosid, Digoxin do thể tích phân bố giảm"
    ],
    correct: 3
  },
  309: { // ID 309, c: 0
    options: [
      "Kéo dài hơn đáng kể so với người trẻ tuổi do thể tích phân bố Vd tăng lên",
      "Bị rút ngắn lại chỉ còn vài giờ do enzym oxy hóa ở gan hoạt động quá mức",
      "Hoàn toàn không có bất kỳ sự thay đổi nào về thời gian lưu giữ trong cơ thể",
      "Bị phân hủy tức thì trong tuần hoàn dẫn đến mất hoàn toàn hiệu lực an thần"
    ],
    correct: 0
  },
  312: { // ID 312, c: 3
    options: [
      "Mức lọc cầu thận có xu hướng tăng dần đều đặn theo từng năm của tuổi thọ",
      "Mức lọc cầu thận đột ngột rơi thẳng đứng về mức 0 ngay khi bước qua tuổi 65",
      "Chức năng lọc của cầu thận duy trì hoàn hảo không hề suy giảm theo thời gian",
      "Mức lọc cầu thận giảm dần trung bình khoảng 1 mL/phút mỗi năm sau tuổi 40"
    ],
    correct: 3
  },
  313: { // ID 313, c: 0
    options: [
      "Khối cơ bắp bị teo giảm sinh lý làm giảm lượng creatinin nội sinh tạo thành",
      "Toàn bộ lượng creatinin tạo ra đều bị các enzyme tại gan giáng hóa triệt để",
      "Ống tiêu hóa của người già tăng cường bài tiết bù creatinin qua đường phân",
      "Chế độ ăn kiêng muối nghiêm ngặt làm ức chế quá trình tổng hợp creatinin máu"
    ],
    correct: 0
  },
  314: { // ID 314, c: 1
    options: [
      "Theo dõi và đếm tổng số lần bệnh nhân đi tiểu tiện trong suốt 24 giờ",
      "Ước tính độ thanh thải qua công thức Cockcroft-Gault hoặc eGFR tương ứng",
      "Dựa vào chỉ số xét nghiệm glucose máu tĩnh mạch lúc đói buổi sáng",
      "Chỉ căn cứ vào nồng độ creatinin huyết thanh đơn thuần nằm trong giới hạn"
    ],
    correct: 1
  },
  315: { // ID 315, c: 2
    options: [
      "Tính toán tốc độ tiêm truyền tĩnh mạch tối đa cho phép ở bệnh nhân hồi sức",
      "Đánh giá chính xác mức độ suy dinh dưỡng tuổi già và teo cơ tiến triển",
      "Nhận diện các thuốc có nguy cơ không phù hợp tiềm tàng ở người cao tuổi",
      "Phân tầng giai đoạn ung thư nguyên phát và mức độ xâm lấn mô xung quanh"
    ],
    correct: 2
  },
  316: { // ID 316, c: 3
    options: [
      "Tụt huyết áp tư thế đứng kèm theo sốt cao ác tính không đáp ứng với paracetamol",
      "Khởi phát các cơn hạ đường huyết kịch phát dẫn đến co giật cục bộ toàn thân",
      "Gây tiêu chảy nhiễm trùng ồ ạt kèm theo hội chứng kém hấp thu phân mỡ kéo dài",
      "Gây lú lẫn, sa sút trí nhớ, táo bón, khô miệng và nguy cơ bí tiểu cấp tính"
    ],
    correct: 3
  },
  317: { // ID 317, c: 0
    options: [
      "An thần kéo dài, lú lẫn, mất thăng bằng và tăng vọt nguy cơ ngã gãy xương",
      "Kích động hưng cảm dữ dội và rối loạn hành vi tác phong ở người cao tuổi",
      "Xuất huyết võng mạc không hồi phục dẫn đến mất thị lực đột ngột hai mắt",
      "Viêm loét trợt sâu niêm mạc tá tràng gây thủng tạng rỗng cấp tính trong bụng"
    ],
    correct: 0
  },
  318: { // ID 318, c: 1
    options: [
      "Nhu mô tuyến tụy nội tiết và các thụ thể hormon tại cơ quan sinh sản",
      "Niêm mạc đường tiêu hóa gây loét xuất huyết và chức năng lọc của cầu thận",
      "Nhu mô phế nang phổi và các tế bào biểu mô lông của cơ quan thính giác",
      "Cấu trúc mô liên kết sợi collagen và bề mặt sụn khớp chịu lực toàn thân"
    ],
    correct: 1
  },
  319: { // ID 319, c: 2
    options: [
      "Suy giảm trương lực co thắt cơ vân của các thành phần cơ trơn thành bụng",
      "Rối loạn phản xạ đóng mở nắp thanh quản trong quá trình nuốt thức ăn",
      "Suy giảm tính nhạy cảm của thụ thể áp lực xoang cảnh và quai động mạch chủ",
      "Rối loạn chức năng bài tiết và chuyển hóa hormon của tuyến giáp trạng"
    ],
    correct: 2
  },
  320: { // ID 320, c: 3
    options: [
      "Gây viêm loét và đục mờ giác mạc cấp tính dẫn đến mù lòa vĩnh viễn",
      "Khởi phát hội chứng thận hư thứ phát kèm theo tràn dịch đa màng toàn thân",
      "Gây viêm cơ tim tự miễn tiến triển thành bệnh lý cơ tim giãn vô căn",
      "Hội chứng ngoại tháp với run giật cơ, cứng đờ và loạn vận động muộn"
    ],
    correct: 3
  },
  326: { // ID 326, c: 1
    options: [
      "Tốc độ thoái biến và giáng hóa sinh học của phân tử thuốc tại tế bào gan",
      "Mức độ tuân thủ phác đồ điều trị, uống đúng liều và đúng giờ của người bệnh",
      "Tốc độ vận chuyển chủ động của thuốc qua biểu mô vi nhung mao ruột non",
      "Tỷ lệ gắn kết của thuốc với các vị trí liên kết trên phân tử albumin máu"
    ],
    correct: 1
  },
  327: { // ID 327, c: 2
    options: [
      "Giao cho người bệnh nguyên cả lọ thuốc lớn chứa hàng trăm viên để tự lấy uống",
      "Chia nhỏ liều thuốc thành 6 đến 8 cữ uống khác nhau rải rác suốt cả ngày đêm",
      "Hộp chia thuốc theo các buổi sáng trưa chiều tối của từng ngày trong tuần",
      "Kê đơn thuốc bằng chữ viết tay chuyên khoa với nhiều từ viết tắt tiếng Anh"
    ],
    correct: 2
  },
  328: { // ID 328, c: 3
    options: [
      "Tổn thương tế bào thần kinh ốc tai dẫn đến điếc tiếp nhận vĩnh viễn hai bên",
      "Viêm loét thủng niêm mạc tá tràng gây biến chứng xuất huyết tiêu hóa ồ ạt",
      "Phù não cấp tính do tăng áp lực nội sọ đột ngột đe dọa trực tiếp tính mạng",
      "Tác dụng kháng cholinergic mạnh, nguy cơ an thần quá mức gây té ngã chấn thương"
    ],
    correct: 3
  },
  329: { // ID 329, c: 0
    options: [
      "Thuốc chẹn kênh calci Non-DHP như Verapamil hoặc Diltiazem do ức chế co bóp cơ tim",
      "Thuốc lợi tiểu quai Furosemid dùng để kiểm soát tình trạng ứ trệ dịch tuần hoàn",
      "Thuốc chẹn beta giao cảm chọn lọc như Bisoprolol bắt đầu với liều rất thấp",
      "Thuốc ức chế thụ thể Angiotensin II để ngăn ngừa quá trình tái cấu trúc cơ tim"
    ],
    correct: 0
  },
  332: { // ID 332, c: 3
    options: [
      "Ức chế tuyến mồ hôi làm tăng thân nhiệt ác tính không đáp ứng với thuốc hạ sốt",
      "Làm giảm mạnh nồng độ men gan ALT và AST trong máu xuống dưới mức sinh lý",
      "Kích thích tăng sinh bất thường các tế bào thần kinh đệm trong vỏ não người già",
      "Tác dụng kháng cholinergic làm nặng thêm tình trạng suy giảm nhận thức và lú lẫn"
    ],
    correct: 3
  },
  333: { // ID 333, c: 0
    options: [
      "Thuốc ức chế tái hấp thu chọn lọc Serotonin (SSRI) như Sertralin hoặc Escitalopram",
      "Thuốc ức chế không hồi phục enzym MAO phối hợp với chế độ ăn giàu acid amin",
      "Thuốc chống trầm cảm ba vòng thế hệ cổ điển Amitriptylin dùng liều cao kéo dài",
      "Các dẫn xuất Barbiturat tác dụng kéo dài như Phenobarbital dùng đường uống"
    ],
    correct: 0
  },
  334: { // ID 334, c: 1
    options: [
      "Tăng áp lực nội sọ đột ngột dẫn đến phù gai thị và nguy cơ tụt kẹt não",
      "Tụt huyết áp tư thế đứng nghiêm trọng ngay từ liều đầu tiên dễ gây té ngã",
      "Gây bí tiểu tiện hoàn toàn do co thắt dữ dội cơ thắt cổ bàng quang",
      "Khởi phát cơn co thắt phế quản cấp tính trên bệnh nhân có tiền sử hen suyễn"
    ],
    correct: 1
  },
  335: { // ID 335, c: 2
    options: [
      "Thời gian ngủ trung bình mỗi đêm và mức độ hoạt động thể lực ban ngày",
      "Chỉ số nồng độ bilirubin toàn phần và men gan phosphatase kiềm trong máu",
      "Tuổi tác (≥ 80 tuổi), cân nặng (≤ 60 kg) và chỉ số Creatinin huyết thanh",
      "Chiều cao đứng và nồng độ sắc tố melanin dưới lớp biểu bì da người già"
    ],
    correct: 2
  },
  336: { // ID 336, c: 3
    options: [
      "Chế phẩm bổ sung Canxi carbonat phối hợp với vitamin D3 liều sinh lý",
      "Men tiêu hóa enzym tụy bổ sung điều trị hội chứng kém hấp thu tuổi già",
      "Dung dịch nước muối sinh lý đẳng trương nhỏ mắt vệ sinh hàng ngày",
      "Thuốc chủ vận beta-2 khí dung như Salbutamol hoặc dẫn xuất Theophyllin"
    ],
    correct: 3
  },
  337: { // ID 337, c: 0
    options: [
      "Thân đốt sống thắt lưng và cổ xương đùi do suy giảm mật độ xương xốp",
      "Xương bánh chè và các xương khối cổ chân do chịu lực tỳ đè khi đi lại",
      "Các xương đốt ngón tay và đốt ngón chân do giảm lắng đọng hydroxyapatit",
      "Xương đòn và gai xương bả vai do suy giảm các sợi cơ bắp đai vai"
    ],
    correct: 0
  },
  338: { // ID 338, c: 1
    options: [
      "Xuất huyết niêm mạc bàng quang cấp tính gây đái máu đại thể toàn bãi",
      "Tăng nguy cơ gãy xương do giảm hấp thu canxi và viêm đại tràng do C. difficile",
      "Cường chức năng vỏ thượng thận gây hội chứng Cushing ngoại sinh tiến triển",
      "Khởi phát bệnh bạch cầu cấp dòng tủy do ức chế tế bào gốc tạo máu tủy xương"
    ],
    correct: 1
  },
  339: { // ID 339, c: 2
    options: [
      "Thuốc kháng acid dạ dày chứa nhôm hydroxyd hoặc magnesi hydroxyd dạng gel",
      "Thuốc điều hòa lipid máu nhóm Statin như Atorvastatin hoặc Rosuvastatin",
      "Thuốc lợi tiểu nhóm Thiazid và thuốc chống trầm cảm nhóm ức chế SSRI",
      "Thuốc giãn phế quản kháng cholinergic dùng tại chỗ như Ipratropium xịt hít"
    ],
    correct: 2
  },
  341: { // ID 341, c: 0
    options: [
      "Giảm cảm giác thèm ăn và có xu hướng nêm nếm thức ăn mặn nhiều muối hơn",
      "Hoàn toàn không gây ra bất kỳ tác động nào đến hành vi ăn uống của người già",
      "Kích thích cảm giác thèm đồ ngọt dữ dội làm mất kiểm soát đường huyết",
      "Khiến người già chỉ thích dung nạp các loại thức ăn cay nóng đậm đà"
    ],
    correct: 0
  },
  343: { // ID 343, c: 2
    options: [
      "Làm mất hoàn toàn tác dụng hạ áp ngay cả khi dùng liều lượng tối đa cho phép",
      "Làm tăng tính nhạy cảm của cơ tim lên gấp nhiều lần so với người trẻ tuổi",
      "Giảm độ nhạy cảm của các thụ thể beta-adrenergic trên hệ tim mạch với thuốc",
      "Chỉ gây ra phản xạ nhịp tim nhanh kịch phát dẫn đến rung thất ngừng tim"
    ],
    correct: 2
  },
  345: { // ID 345, c: 0
    options: [
      "Duy trì chức năng sinh hoạt, giảm số lượng thuốc và phòng ngừa té ngã",
      "Bắt buộc hạ huyết áp tâm thu xuống dưới 110 mmHg và HbA1c dưới 6,0% bằng mọi giá",
      "Đạt được tất cả các chỉ số xét nghiệm sinh hóa lý tưởng như người trẻ tuổi",
      "Phối hợp tối đa các nhóm thuốc đặc trị nhằm đảo ngược hoàn toàn tổn thương xơ vữa"
    ],
    correct: 0
  },
  346: { // ID 346, c: 1
    options: [
      "Giai đoạn tiền phôi trong 2 tuần lễ đầu tiên ngay sau khi thụ tinh thành công",
      "Giai đoạn tạo cơ quan từ tuần thứ 3 đến tuần thứ 8 sau khi thụ thai",
      "Giai đoạn ba tháng cuối của thai kỳ khi thai nhi tăng trưởng nhanh về cân nặng",
      "Giai đoạn chu sinh trong những ngày cuối cùng ngay trước cuộc chuyển dạ đẻ"
    ],
    correct: 1
  },
  349: { // ID 349, c: 0
    options: [
      "Chống chỉ định tuyệt đối cho phụ nữ mang thai hoặc có kế hoạch mang thai",
      "Được chứng minh an toàn tuyệt đối qua các thử nghiệm lâm sàng có đối chứng tốt",
      "Chưa có đầy đủ dữ liệu nghiên cứu tin cậy trên thai phụ và động vật mang thai",
      "Được phép kê đơn rộng rãi và sử dụng tự do trong suốt các giai đoạn thai kỳ"
    ],
    correct: 0
  },
  350: { // ID 350, c: 1
    options: [
      "Trọng lượng phân tử rất lớn vượt quá 1000 Dalton khó đi qua lỗ màng lọc",
      "Trọng lượng phân tử nhỏ dưới 500 Dalton và có độ tan trong lipid cao",
      "Khả năng gắn kết rất chặt chẽ với albumin huyết tương của người mẹ mang thai",
      "Mức độ phân ly ion hóa gần như hoàn toàn ở giá trị pH sinh lý của máu"
    ],
    correct: 1
  },
  352: { // ID 352, c: 3
    options: [
      "Hội chứng phì đại tuyến giáp trạng bẩm sinh dẫn đến bướu cổ đè nghẹt thở",
      "Hội chứng teo cơ tủy sống tiến triển gây liệt cơ hô hấp ngay sau khi sinh",
      "Dị tật nứt đốt sống hở kèm theo thoát vị tủy màng tủy vùng thắt lưng cùng",
      "Hội chứng Warfarin bào thai với mũi tẹt lõm, kém phát triển xương và sụn"
    ],
    correct: 3
  },
  354: { // ID 354, c: 1
    options: [
      "Thuốc hạ huyết áp tác động lên hệ thần kinh trung ương như Methyldopa",
      "Thuốc ức chế men chuyển (ACEI) và thuốc chẹn thụ thể Angiotensin II (ARB)",
      "Thuốc chẹn chọn lọc thụ thể beta và alpha giao cảm như Labetalol",
      "Thuốc giãn mạch trực tiếp trên tiểu động mạch ngoại vi như Hydralazin"
    ],
    correct: 1
  },
  358: { // ID 358, c: 1
    options: [
      "Dị tật dính ngón tay chân bẩm sinh và khiếm khuyết xương cẳng tay hai bên",
      "Dị tật ống thần kinh như tật nứt đốt sống và thoát vị màng não tủy",
      "Dị tật teo hẹp tá tràng bẩm sinh với hình ảnh bóng đôi trên phim X-quang",
      "Bệnh lý nhãn cầu khổng lồ kèm theo đục giác mạc và tăng nhãn áp bẩm sinh"
    ],
    correct: 1
  },
  359: { // ID 359, c: 2
    options: [
      "Vitamin D3 liều cao đường tiêm bắp sâu để kích thích phát triển khung xương",
      "Bổ sung muối khoáng iod nguyên chất với hàm lượng cao vượt nhu cầu hàng ngày",
      "Acid folic tối thiểu 400 mcg mỗi ngày trước thụ thai và trong quý đầu thai kỳ",
      "Vitamin A liều cao trên 50.000 đơn vị quốc tế để phòng ngừa suy dinh dưỡng"
    ],
    correct: 2
  },
  364: { // ID 364, c: 3
    options: [
      "Kích thích thai nhi tăng trưởng quá mức dẫn đến biến chứng thai to đa ối",
      "Làm mất hoàn toàn đáp ứng co hồi tử cung của hormon nội sinh oxytocin",
      "Gây viêm gan ứ mật cấp tính nặng nề đe dọa trực tiếp tính mạng người mẹ",
      "Dữ liệu an toàn hạn chế và có tín hiệu tăng nguy cơ dị tật tim mạch thai nhi"
    ],
    correct: 3
  },
  366: { // ID 366, c: 1
    options: [
      "Giảm sút một nửa do thận bị tử cung chèn ép cản trở dòng máu đến thận",
      "Tăng khoảng 50% làm tăng đáng kể tốc độ thanh thải các thuốc đào thải qua thận",
      "Duy trì ổn định không có bất kỳ sự thay đổi sinh lý nào trong suốt thai kỳ",
      "Ngừng lọc hoàn toàn trong 3 tháng giữa và phục hồi lại sau khi sinh con"
    ],
    correct: 1
  },
  367: { // ID 367, c: 2
    options: [
      "Tế bào gan của người mẹ ngừng hoàn toàn việc tổng hợp phân tử albumin",
      "Thai nhi trong bụng mẹ hấp thu toàn bộ lượng albumin máu qua dây rốn",
      "Hiện tượng pha loãng máu sinh lý do thể tích huyết tương của mẹ tăng mạnh",
      "Albumin bị đào thải ồ ạt qua màng lọc cầu thận vào nước tiểu của thai phụ"
    ],
    correct: 2
  },
  370: { // ID 370, c: 1
    options: [
      "Kích thích gây chuyển dạ đẻ chỉ huy ở các trường hợp thai quá ngày sinh",
      "Dự phòng và cắt cơn co giật trong tiền sản giật nặng và sản giật",
      "Kích thích bài tiết hormon oxytocin giúp tăng tiết sữa non sau khi sinh",
      "Hạ huyết áp cấp cứu tức thì bằng cách gây giãn nhanh hệ thống mao mạch ngoại vi"
    ],
    correct: 1
  },
  373: { // ID 373, c: 0
    options: [
      "Các thuốc có tính base yếu và độ tan trong lipid cao do pH sữa hơi toan",
      "Các thuốc có tính acid mạnh tan nhiều trong nước và không liên kết protein",
      "Các ion khoáng chất vô cơ mang điện tích âm liên kết chặt với màng tế bào",
      "Các phân tử protein có kích thước cồng kềnh khó khuếch tán qua biểu mô tuyến"
    ],
    correct: 0
  },
  374: { // ID 374, c: 1
    options: [
      "Tăng liều dùng của mẹ lên gấp đôi để sữa mẹ có đủ lượng kháng thể bảo vệ trẻ",
      "Cho trẻ bú ngay trước khi mẹ uống thuốc hoặc ngay sau khi vừa uống thuốc",
      "Cho trẻ bú vào đúng thời điểm thuốc đạt nồng độ đỉnh cao nhất trong huyết tương mẹ",
      "Vắt sữa mẹ ra bình rồi đem đun sôi khử khuẩn để làm bay hơi hoạt chất thuốc"
    ],
    correct: 1
  },
  375: { // ID 375, c: 2
    options: [
      "Duy trì cố định liều dùng như trước khi có thai mà không cần theo dõi định kỳ",
      "Chủ động giảm một nửa liều để phòng ngừa nguy cơ cường giáp cho thai nhi",
      "Thường cần tăng liều từ 25% đến 50% và xét nghiệm TSH mỗi 4 - 6 tuần",
      "Ngừng thuốc hoàn toàn trong quý 1 của thai kỳ để tránh nguy cơ quái thai"
    ],
    correct: 2
  },
  376: { // ID 376, c: 3
    options: [
      "Hội chứng dính ngón tay chân bẩm sinh và khuyết tật xương cẳng tay hai bên",
      "Đục mờ giác mạc hai mắt bẩm sinh dẫn đến mất thị lực hoàn toàn sau sinh",
      "Tổn thương tế bào thần kinh thính giác dẫn đến điếc tiếp nhận không phục hồi",
      "Dị tật sọ mặt, hở vòm họng và các dị tật tim mạch bẩm sinh phức tạp"
    ],
    correct: 3
  },
  377: { // ID 377, c: 0
    options: [
      "Gây sảy thai, thai chết lưu và hội chứng quái thai nghiêm trọng trên phôi",
      "Kích thích thai nhi tăng trưởng quá mức dẫn đến biến chứng thai to đa ối",
      "Gây tăng huyết áp thai kỳ ác tính dẫn đến biến chứng tiền sản giật bùng phát",
      "Gây đái tháo đường khởi phát sớm ở thai nhi và suy giảm chức năng tụy bẩm sinh"
    ],
    correct: 0
  },
  383: { // ID 383, c: 2
    options: [
      "Doxycyclin viên nang uống kéo dài trong 14 ngày liên tục",
      "Ciprofloxacin dạng viên nén giải phóng kéo dài dùng theo đường uống",
      "Amoxicillin-clavulanat, Cefalexin hoặc Fosfomycin đường uống",
      "Co-trimoxazol dạng viên nén dùng ở tuần thứ 38 chuẩn bị chuyển dạ"
    ],
    correct: 2
  },
  385: { // ID 385, c: 0
    options: [
      "Thiếu máu thiếu sắt ở người mẹ và giảm nguy cơ trẻ sinh non nhẹ cân",
      "Biến chứng nhiễm độc thai nghén tiến triển thành tiền sản giật ác tính",
      "Gãy xương chậu tự phát do suy giảm mật độ khoáng chất trong lúc sinh đẻ",
      "Bệnh lý đái tháo đường thai kỳ kháng insulin do rối loạn chuyển hóa đường"
    ],
    correct: 0
  },
  386: { // ID 386, c: 1
    options: [
      "Xuất huyết dưới da dạng chấm nốt rải rác ở hai cẳng chân người mẹ",
      "Táo bón, buồn nôn, đau tức thượng vị và đi ngoài phân có màu đen",
      "Tiêu chảy nhiễm trùng phân mỡ ồ ạt kèm theo sốt cao mất nước cấp",
      "Hạ đường huyết kịch phát dẫn đến bủn rủn tay chân và chóng mặt vã mồ hôi"
    ],
    correct: 1
  },
  387: { // ID 387, c: 2
    options: [
      "Ức chế trực tiếp quá trình bài tiết hormon tăng trưởng GH của thùy trước tuyến yên",
      "Phá hủy cấu trúc mô học của các nang tuyến sản xuất sữa mẹ trong bầu vú",
      "Chủ vận thụ thể Dopamin D2 làm ức chế tuyến yên bài tiết Prolactin",
      "Kháng đặc hiệu trên thụ thể Oxytocin tại tế bào cơ biểu mô của tuyến vú"
    ],
    correct: 2
  },
  390: { // ID 390, c: 1
    options: [
      "Làm teo nang tuyến sữa dẫn đến mất sữa hoàn toàn không thể hồi phục ở người mẹ",
      "Nguy cơ trẻ bú mẹ ngộ độc Morphin dẫn đến ức chế hô hấp và tử vong",
      "Kích thích vi khuẩn đường ruột phát triển gây tiêu chảy mất nước nặng ở trẻ",
      "Làm tắc nghẽn đường dẫn mật trong gan gây vàng da ứ mật sơ sinh kéo dài"
    ],
    correct: 1
  },
  391: { // ID 391, c: 2
    options: [
      "Vắt sữa mẹ ra bình rồi đem đun sôi ở nhiệt độ 100°C trước khi cho trẻ bú",
      "Tiếp tục cho con bú bình thường và theo dõi nhịp thở cùng màu da của trẻ",
      "Tạm thời vắt bỏ sữa mẹ và cho trẻ bú sữa công thức trong thời gian dùng thuốc",
      "Cho trẻ uống kèm hỗn dịch than hoạt tính để hấp phụ thuốc bài xuất qua sữa"
    ],
    correct: 2
  },
  394: { // ID 394, c: 1
    options: [
      "Gây co bóp cơ tử cung dữ dội dẫn đến sảy thai tự nhiên ngay lập tức",
      "Hấp thu vào vòng tuần hoàn rất thấp nên được coi là an toàn cho thai phụ",
      "Gây ức chế sâu sắc chức năng bài tiết hormon của tuyến thượng thận thai nhi",
      "Bị chống chỉ định tuyệt đối cho mọi vùng da và niêm mạc của phụ nữ mang thai"
    ],
    correct: 1
  },
  395: { // ID 395, c: 2
    options: [
      "Tăng gấp đôi liều dùng để đảm bảo duy trì nồng độ thuốc tối ưu cho cả mẹ và thai",
      "Thay thế toàn bộ thuốc điều trị chuẩn bằng các bài thuốc đông y không rõ thành phần",
      "Chỉ dùng khi thật cần thiết, chọn thuốc an toàn nhất, liều thấp nhất và ngắn ngày nhất",
      "Tuyệt đối không bao giờ được sử dụng bất kỳ loại thuốc tân dược nào trong thai kỳ"
    ],
    correct: 2
  },
  948: { // ID 948, c: 3
    options: [
      "Đánh giá chính xác mức độ suy giảm chức năng lọc của cầu thận ở bệnh nhân suy thận",
      "Phát hiện tình trạng thiếu máu thiếu sắt và theo dõi đáp ứng điều trị bổ sung sắt",
      "Chẩn đoán sớm biến cố nhồi máu cơ tim cấp trong vòng 3 giờ đầu sau khởi phát đau ngực",
      "Phân biệt nhiễm khuẩn vi khuẩn với nhiễm virus, định hướng dùng/ngừng kháng sinh"
    ],
    correct: 3
  },
  949: { // ID 949, c: 0
    options: [
      "Khả năng nhiễm khuẩn rất thấp, phần lớn do virus; khuyến cáo không dùng kháng sinh",
      "Cần phối hợp ngay 3 loại kháng sinh phổ rộng theo kinh nghiệm tại khoa hồi sức tích cực",
      "Bệnh nhân đang trong tình trạng sốc nhiễm khuẩn huyết cực kỳ nguy kịch cần truyền dịch",
      "Tủy xương bị ức chế nặng nề dẫn đến mất hoàn toàn dòng bạch cầu hạt trong máu"
    ],
    correct: 0
  },
  950: { // ID 950, c: 1
    options: [
      "Tình trạng đông máu nội mạch rải rác (DIC) với nguy cơ hình thành vi huyết khối",
      "Phản ứng viêm cấp tính không đặc hiệu do gan tổng hợp dưới tác động của IL-6",
      "Độ thanh thải thuốc tại tiểu cầu thận và tình trạng hoại tử biểu mô ống thận",
      "Mức độ hủy hoại tế bào cơ vân xương trong hội chứng tiêu cơ vân cấp tính"
    ],
    correct: 1
  },
  960: { // ID 960, c: 3
    options: [
      "Aspirin liều thấp dùng trong phòng ngừa biến cố tim mạch thứ phát ở bệnh nhân vành",
      "Dung dịch tiêm truyền Natri clorid 0,9% pha kháng sinh điều trị nhiễm khuẩn nặng",
      "Thuốc chống đông đường uống Warfarin ở bệnh nhân rung nhĩ có chỉ định kháng vitamin K",
      "Heparin trọng lượng phân tử thấp (LMWH) ở bệnh nhân suy thận nặng hoặc béo phì"
    ],
    correct: 3
  },
  962: { // ID 962, c: 1
    options: [
      "Chẩn đoán phân biệt hội chứng vành cấp không ST chênh lên với viêm màng ngoài tim",
      "Chẩn đoán xác định hoặc loại trừ khó thở do suy tim và phân tầng độ nặng suy tim",
      "Đánh giá tổn thương tế bào nhu mô gan cấp tính trong viêm gan virus bùng phát",
      "Phát hiện sớm nguy cơ xuất huyết nội sọ ở bệnh nhân đang dùng thuốc chống đông máu"
    ],
    correct: 1
  },
  964: { // ID 964, c: 3
    options: [
      "Theo dõi và hiệu chỉnh nồng độ đáy của kháng sinh Aminosid trong huyết tương",
      "Khẳng định chắc chắn bệnh nhân bị tắc mạch máu não cấp tính trong 4,5 giờ đầu",
      "Đo lường chính xác độ thanh thải creatinin nội sinh tại các đơn vị tiểu cầu thận",
      "Loại trừ huyết khối tĩnh mạch sâu và thuyên tắc phổi khi nguy cơ lâm sàng thấp - vừa"
    ],
    correct: 3
  },
  965: { // ID 965, c: 0
    options: [
      "Sóng T cao nhọn đối xứng đáy hẹp, QRS giãn rộng và nguy cơ rung thất ngừng tim",
      "Sóng T trở nên dẹt và xuất hiện sóng U nổi rõ ngay sau sóng T trên các chuyển đạo",
      "Đoạn ST chênh xuống hình đáy chén đặc trưng cho tình trạng ngộ độc hoạt chất Digoxin",
      "Hình ảnh điện tâm đồ hoàn toàn bình thường không ghi nhận bất kỳ rối loạn nhịp nào"
    ],
    correct: 0
  },
  966: { // ID 966, c: 1
    options: [
      "Khoảng PR bị rút ngắn lại rõ rệt dưới 0,10 giây kèm theo hội chứng kích thích sớm",
      "Sóng T dẹt hoặc đảo ngược và xuất hiện sóng U nổi rõ đi ngay sau sóng T",
      "Mất hoàn toàn phức bộ QRS và thay thế bằng các dao động sóng dạng hình sin liên tục",
      "Sóng T cao nhọn đối xứng đáy hẹp với biên độ sóng vượt quá tiêu chuẩn sinh lý"
    ],
    correct: 1
  },
  967: { // ID 967, c: 2
    options: [
      "Xuất huyết đường tiêu hóa dưới ồ ạt kèm theo tụt huyết áp trụy mạch không hồi phục",
      "Cơn tăng huyết áp kịch phát ác tính dẫn đến vỡ phình mạch máu não đe dọa tính mạng",
      "Phù não dẫn đến lú lẫn, co giật, hôn mê và nguy cơ tử vong do tụt kẹt não",
      "Cơn co cứng cơ toàn thân tetani do suy giảm nồng độ canxi ion hóa tự do trong máu"
    ],
    correct: 2
  },
  971: { // ID 971, c: 2
    options: [
      "Sau khi truyền tĩnh mạch xong đúng 12 giờ đồng hồ để đánh giá nồng độ đáy",
      "Trước khi bắt đầu truyền liều tiếp theo khoảng 1 giờ để kiểm tra tích lũy thuốc",
      "Khoảng 30 phút sau khi kết thúc buổi truyền tĩnh mạch ngắt quãng của thuốc",
      "Ngay tại thời điểm vừa bắt đầu cắm kim truyền dịch vào lòng tĩnh mạch người bệnh"
    ],
    correct: 2
  },
  974: { // ID 974, c: 1
    options: [
      "Nồng độ canxi ion hóa tự do trong máu và nguy cơ loãng xương gãy xương tự phát",
      "Tình trạng dự trữ sắt của cơ thể và chẩn đoán phân biệt thiếu máu do thiếu sắt",
      "Tốc độ giáng hóa protein huyết tương và chức năng khử độc amoniac của tế bào gan",
      "Khả năng cô đặc và bài xuất dịch mật của hệ thống đường dẫn mật trong và ngoài gan"
    ],
    correct: 1
  },
  976: { // ID 976, c: 3
    options: [
      "Xác định nhóm máu hệ ABO và nhóm Rh trong quy trình an toàn truyền máu cấp cứu",
      "Đo lường mức độ thanh thải và tốc độ bài xuất của kháng sinh aminosid qua thận",
      "Chẩn đoán sớm các biến chứng loét thủng dạ dày tá tràng do vi khuẩn H. pylori",
      "Đánh giá chức năng vỏ thượng thận và chẩn đoán suy thượng thận do dùng corticoid"
    ],
    correct: 3
  },
  978: { // ID 978, c: 1
    options: [
      "Hoại tử tế bào nhu mô gan cấp tính dẫn đến suy gan bùng phát đe dọa tính mạng",
      "Gắn với calci gây ố vàng răng vĩnh viễn, hỏng men răng và chậm phát triển xương",
      "Ức chế tủy xương gây xuất huyết giảm tiểu cầu cấp tính và thiếu máu bất sản",
      "Tổn thương không hồi phục tế bào lông ốc tai dẫn đến điếc tiếp nhận thần kinh"
    ],
    correct: 1
  },
  979: { // ID 979, c: 2
    options: [
      "Kích thích trung tâm thèm ăn gây rối loạn chuyển hóa mỡ và béo phì không kiểm soát",
      "Tác động lên trục hạ đồi - tuyến yên kích thích bài tiết hormone gây dậy thì sớm",
      "Nguy cơ thoái hóa và tổn thương mô sụn tiếp hợp ở các khớp chịu lực của cơ thể",
      "Gây đóng sớm các đường khớp sọ ở trẻ nhũ nhi dẫn đến tật hẹp sọ bẩm sinh"
    ],
    correct: 2
  },
  981: { // ID 981, c: 0
    options: [
      "Paracetamol liều 10 - 15 mg/kg mỗi lần, khoảng cách 4 - 6 giờ khi cần thiết",
      "Indomethacin dạng viên nang cứng uống điều trị ngắn ngày dưới sự giám sát y tế",
      "Aspirin liều cao 50 mg/kg mỗi ngày chia làm nhiều cữ uống để dập cơn sốt",
      "Piroxicam dạng dung dịch tiêm bắp sâu tại các cơ sở y tế chuyên khoa hồi sức"
    ],
    correct: 0
  },
  983: { // ID 983, c: 2
    options: [
      "Trẻ bị viêm tai giữa cấp do phế cầu khuẩn có chỉ định dùng kháng sinh phối hợp",
      "Trẻ bị sốt do mọc răng sữa thông thường nhưng vẫn ăn uống và sinh hoạt tốt",
      "Nghi ngờ Sốt xuất huyết Dengue, thủy đậu, loét dạ dày hoặc đang mất nước nặng",
      "Trẻ bị viêm họng cấp mủ do liên cầu khuẩn tan máu beta nhóm A gây ra"
    ],
    correct: 2
  },
  985: { // ID 985, c: 0
    options: [
      "Vd tính theo L/kg lớn hơn người lớn do tỷ lệ nước cơ thể cao, cần liều nạp cao hơn",
      "Vd nhỏ hơn người lớn rất nhiều do tỷ lệ liên kết với protein huyết tương rất cao",
      "Vd hoàn toàn tương đương với người già teo cơ do cùng có sự suy giảm khối cơ bắp",
      "Vd bằng 0 do thuốc tan trong nước không có khả năng phân bố ra ngoài lòng mạch"
    ],
    correct: 0
  },
  986: { // ID 986, c: 1
    options: [
      "Làm cho tế bào nhu mô gan của trẻ ngừng hoạt động bài tiết mật hoàn toàn",
      "Cạnh tranh gắn kết với Albumin đẩy Bilirubin tự do gây vàng da nhân não",
      "Gây phá hủy nang tóc vĩnh viễn khiến trẻ không thể mọc tóc khi trưởng thành",
      "Làm rối loạn trung tâm điều nhiệt gây hạ thân nhiệt sâu dưới 34°C kéo dài"
    ],
    correct: 1
  },
  989: { // ID 989, c: 0
    options: [
      "BSA tương quan tốt hơn với mức lọc cầu thận, cung lượng tim và chuyển hóa gan",
      "BSA phản ánh chính xác lượng mô mỡ thừa tích tụ dưới da ở các trẻ béo phì",
      "BSA ít biến thiên theo lứa tuổi hơn rất nhiều so với cân nặng và chiều cao đứng",
      "Công thức tính BSA loại trừ hoàn toàn ảnh hưởng của tình trạng mất nước cấp tính"
    ],
    correct: 0
  },
  990: { // ID 990, c: 1
    options: [
      "BSA = [Chiều cao (cm) x Cân nặng (kg)] / 1000",
      "BSA = Căn bậc hai của [(Chiều cao x Cân nặng) / 3600]",
      "BSA = Căn bậc hai của [Chiều cao (cm) x 72 / Cân nặng (kg)]",
      "BSA = [Chiều cao (cm) + Cân nặng (kg)] / 100"
    ],
    correct: 1
  },
  991: { // ID 991, c: 2
    options: [
      "Codein làm teo thoái hóa các bó cơ bắp chân dẫn đến trẻ bị giảm khả năng vận động",
      "Codein gây viêm trợt và loét thủng dạ dày cấp tính đe dọa trực tiếp tính mạng",
      "Nguy cơ chuyển hóa siêu nhanh qua CYP2D6 thành Morphin gây ngừng thở tử vong",
      "Codein ức chế thần kinh cơ hầu họng làm mất hoàn toàn phản xạ nuốt thức ăn của trẻ"
    ],
    correct: 2
  },
  993: { // ID 993, c: 0
    options: [
      "Tính thấm cao do liên kết tế bào nội mô chưa hoàn thiện, thuốc dễ ngấm vào não",
      "Hàng rào máu não khép kín hoàn toàn ngăn cản tuyệt đối mọi loại phân tử thuốc",
      "Chỉ cho phép các phân tử protein có kích thước cồng kềnh khuếch tán vào dịch não tủy",
      "Dày đặc gấp 10 lần so với người lớn làm thuốc khó đạt được nồng độ điều trị ở não"
    ],
    correct: 0
  },
  994: { // ID 994, c: 1
    options: [
      "Độ toan dịch vị dạ dày tương đương hoàn toàn với người trưởng thành khỏe mạnh",
      "Gần như trung tính (pH từ 6 đến 8) do tế bào thành dạ dày giảm tiết acid",
      "Mang tính kiềm cực mạnh với nồng độ pH đạt xấp xỉ 12 đến 14 trong những ngày đầu",
      "Rất toan với nồng độ pH dưới 1,0 làm phân hủy hầu hết các hoạt chất thuốc uống"
    ],
    correct: 1
  },
  995: { // ID 995, c: 2
    options: [
      "Bị phân hủy hoàn toàn 100% trong lòng đường tiêu hóa trước khi được hấp thu",
      "Tốc độ và mức độ hấp thu qua ruột non chậm hơn gấp 20 lần so với người trưởng thành",
      "Hấp thu cao hơn người lớn do dịch vị ít acid nên thuốc ít bị phá hủy trong dạ dày",
      "Hoàn toàn không có khả năng khuếch tán qua lớp biểu mô niêm mạc ruột của trẻ"
    ],
    correct: 2
  },
  996: { // ID 996, c: 3
    options: [
      "Khi trẻ có biểu hiện ngứa rát và sung huyết nhẹ ở vùng vành tai ngoài",
      "Khi trẻ bị viêm tai giữa cấp ứ mủ nhưng màng nhĩ vẫn còn nguyên vẹn",
      "Chỉ được phép chỉ định nhỏ tai khi màng nhĩ đã bị thủng rộng hoàn toàn",
      "Khi màng nhĩ đã bị thủng do nguy cơ ngấm vào tai trong gây điếc ốc tai vĩnh viễn"
    ],
    correct: 3
  },
  997: { // ID 997, c: 0
    options: [
      "Uống xa bữa ăn khoảng 1 đến 2 giờ để tránh thức ăn làm cản trở hấp thu",
      "Uống ngay vào đầu bữa ăn chính chứa nhiều chất xơ thô và ngũ cốc nguyên hạt",
      "Chỉ uống vào lúc nửa đêm khi trẻ đã ngủ say để tránh cảm giác nôn nao dạ dày",
      "Pha chung trực tiếp vào bình sữa công thức nóng của trẻ để uống cùng lúc"
    ],
    correct: 0
  },
  998: { // ID 998, c: 1
    options: [
      "Bổ sung 50 mg kẽm nguyên tố mỗi ngày kéo dài liên tục trong suốt 1 tháng",
      "Bổ sung 10 mg kẽm nguyên tố mỗi ngày liên tục trong 10 đến 14 ngày",
      "Bổ sung liều sốc 100 mg kẽm nguyên tố mỗi ngày chỉ trong 2 ngày đầu tiên",
      "Bổ sung 2 mg kẽm nguyên tố mỗi ngày kéo dài trong 3 ngày rồi ngừng lại"
    ],
    correct: 1
  },
  1000: { // ID 1000, c: 3
    options: [
      "Da trẻ hoàn toàn không có khả năng ngấm nước nên thuốc đọng lại trên bề mặt",
      "Lớp biểu bì sừng hóa dày gấp nhiều lần người lớn làm tích tụ nồng độ thuốc cao",
      "Hệ thống tuyến mồ hôi và tuyến bã nhờn chưa hoạt động làm giảm thải trừ qua da",
      "Lớp sừng mỏng, giàu mạch máu và tỷ lệ diện tích da trên thể trọng rất lớn"
    ],
    correct: 3
  },
  1002: { // ID 1002, c: 1
    options: [
      "Trẻ sơ sinh ngay sau khi cắt dây rốn tại phòng sinh của cơ sở y tế",
      "Trẻ từ 6 tuổi trở lên khi đã có khả năng nuốt an toàn tránh nguy cơ sặc",
      "Trẻ nhũ nhi 3 tháng tuổi khi bắt đầu có phản xạ mút bú bình hoàn thiện",
      "Bất kỳ lứa tuổi nào kể cả trẻ 6 tháng tuổi nếu được tán nhỏ viên thuốc"
    ],
    correct: 1
  },
  1003: { // ID 1003, c: 2
    options: [
      "Khối lượng mỡ dưới da suy giảm hoàn toàn về mức 0% do hiện tượng lão hóa",
      "Khối lượng cơ bắp gia tăng gấp đôi nhờ quá trình xơ hóa tổ chức liên kết",
      "Giảm lượng nước toàn phần và khối cơ, đồng thời tăng tỷ lệ mỡ cơ thể",
      "Tăng tỷ lệ nước toàn phần lên tới 85% - 90% trọng lượng cơ thể người cao tuổi"
    ],
    correct: 2
  },
  1004: { // ID 1004, c: 3
    options: [
      "Đào thải sạch khỏi cơ thể chỉ sau 15 đến 30 phút do tăng chuyển hóa ở gan",
      "Bị bất hoạt hoàn toàn trước khi kịp hấp thu vào vòng tuần hoàn chung của cơ thể",
      "Không thể phân bố qua hàng rào máu não để gắn kết vào các thụ thể GABA trung ương",
      "Thể tích phân bố Vd tăng và thời gian bán thải T1/2 kéo dài gây tích lũy thuốc"
    ],
    correct: 3
  },
  1005: { // ID 1005, c: 0
    options: [
      "Thể tích phân bố giảm làm nồng độ đỉnh trong máu tăng cao dễ gây độc",
      "Thời gian bán thải giảm sút nghiêm trọng chỉ còn vài giây trong tuần hoàn",
      "Nồng độ thuốc tự do trong huyết tương bị pha loãng giảm xuống mức tối thiểu",
      "Thuốc không thể hòa tan trong tuần hoàn dẫn đến kết tinh tạo sỏi mạch máu"
    ],
    correct: 0
  },
  1006: { // ID 1006, c: 1
    options: [
      "Lựa chọn các bài tập thể dục dưỡng sinh phù hợp cho từng thể trạng người cao tuổi",
      "Xác định danh mục thuốc có nguy cơ không phù hợp tiềm tàng ở người cao tuổi",
      "Đo lường dung tích sống gắng sức của phổi trong chẩn đoán các bệnh lý hô hấp mạn",
      "Tính toán khẩu phần dinh dưỡng và nhu cầu năng lượng hàng ngày cho người già teo cơ"
    ],
    correct: 1
  },
  1007: { // ID 1007, c: 2
    options: [
      "Gây cơn tăng huyết áp kịch phát ác tính dẫn đến xuất huyết não nguy kịch",
      "Làm cho khung xương giòn tan và gãy tự phát ngay sau ngày đầu tiên sử dụng",
      "Gây an thần quá mức, lú lẫn, mất phối hợp động tác và tăng nguy cơ ngã gãy xương",
      "Gây teo gai thị cấp tính dẫn đến mất hoàn toàn thị lực không thể phục hồi"
    ],
    correct: 2
  },
  1008: { // ID 1008, c: 3
    options: [
      "Viêm loét thủng niêm mạc tá tràng gây xuất huyết tiêu hóa ồ ạt nguy kịch",
      "Hoại tử tế bào nhu mô gan cấp tính làm tăng vọt các chỉ số men gan AST và ALT",
      "Rối loạn trung tâm điều nhiệt làm hạ thân nhiệt sâu xuống dưới 30°C kéo dài",
      "Tác dụng kháng cholinergic gây bí tiểu cấp, táo bón nặng, khô miệng và lú lẫn"
    ],
    correct: 3
  },
  1010: { // ID 1010, c: 1
    options: [
      "Dung dịch bù nước và điện giải đường uống Oresol pha theo đúng tỷ lệ thể tích",
      "Thuốc chẹn thụ thể alpha-1 hoặc thuốc chống trầm cảm ba vòng (TCA)",
      "Chế phẩm bổ sung vitamin C hoặc multivitamin tổng hợp đường uống hàng ngày",
      "Các chế phẩm men vi sinh hỗ trợ cân bằng hệ vi khuẩn đường ruột người già"
    ],
    correct: 1
  },
  1014: { // ID 1014, c: 1
    options: [
      "Làm giảm hoàn toàn nồng độ lipid trong máu xuống mức 0 gây suy kiệt tế bào",
      "Loét và xuất huyết tiêu hóa, suy thận cấp, làm nặng thêm tăng huyết áp và suy tim",
      "Kích thích nang lông phát triển quá mức khiến tóc và lông cơ thể mọc rậm rạp",
      "Phá hủy men răng hàng loạt gây sâu răng và rụng răng sớm ở người cao tuổi"
    ],
    correct: 1
  },
  1015: { // ID 1015, c: 2
    options: [
      "Gây tiêu chảy nhiễm trùng phân lỏng xối xả dẫn đến rối loạn điện giải nghiêm trọng",
      "Làm viêm quanh chân răng khiến toàn bộ hàm răng lung lay và rụng tự phát",
      "Táo bón nặng kéo dài đòi hỏi phải chủ động phối hợp thuốc nhuận tràng",
      "Kích thích thụ thể thị giác làm gia tăng đột biến khả năng nhìn rõ trong đêm tối"
    ],
    correct: 2
  },
  1016: { // ID 1016, c: 3
    options: [
      "Giảm độ nhạy cảm đồng loạt đối với tất cả các nhóm thuốc điều trị lâm sàng",
      "Kháng hoàn toàn tác dụng dược lý của các thuốc chống đông máu và chống kết tập tiểu cầu",
      "Mất hoàn toàn hệ thống thụ thể thần kinh tại vỏ não và các nhân xám trung ương",
      "Tăng nhạy cảm với tác dụng an thần của Benzodiazepin và thuốc ức chế thần kinh"
    ],
    correct: 3
  },
  1017: { // ID 1017, c: 0
    options: [
      "Tamsulosin và Silodosin do chọn lọc cao trên thụ thể alpha-1A tại tuyến tiền liệt",
      "Terazosin dùng liều khởi đầu 1 mg vào buổi tối trước khi đi ngủ",
      "Doxazosin dạng viên nén giải phóng thông thường đường uống",
      "Prazosin tác dụng ngắn chia làm nhiều cữ uống trong ngày"
    ],
    correct: 0
  },
  1019: { // ID 1019, c: 2
    options: [
      "Huyết áp tâm thu dưới 110 mmHg để ngăn ngừa tối đa nguy cơ đột quỵ tái phát",
      "Huyết áp tâm thu từ 150 đến 160 mmHg để đảm bảo tưới máu não ở người xơ vữa mạch",
      "Huyết áp tâm thu từ 130 đến 139 mmHg nếu dung nạp tốt, không hạ dưới 120 mmHg",
      "Chỉ điều trị khi huyết áp tâm trương vượt quá 100 mmHg bất kể huyết áp tâm thu"
    ],
    correct: 2
  },
  1020: { // ID 1020, c: 3
    options: [
      "Kê đơn thuốc chia thành 6 cữ uống khác nhau rải rác cả ngày lẫn đêm",
      "Yêu cầu bệnh nhân tự ghi nhớ danh pháp quốc tế INN phức tạp của các hoạt chất",
      "Chỉ kê đơn dạng thuốc bột tự pha loãng không kèm theo dụng cụ đong đếm liều",
      "Sử dụng hộp chia thuốc theo ngày có nắp mở dễ dàng và chữ in to rõ ràng"
    ],
    correct: 3
  },
  1021: { // ID 1021, c: 0
    options: [
      "Tác dụng an thần, kháng cholinergic và tăng nguy cơ ngã chấn thương",
      "Gây viêm gan nhiễm mỡ cấp tính tiến triển thành xơ gan mất bù trong thời gian ngắn",
      "Làm teo cơ vân toàn thân nhanh chóng dẫn đến mất hoàn toàn khả năng tự đi lại",
      "Khởi phát hội chứng sốt cao liên tục không đáp ứng với các thuốc hạ nhiệt thông thường"
    ],
    correct: 0
  },
  1022: { // ID 1022, c: 1
    options: [
      "Chỉ dựa vào lượng nước tiểu 24 giờ mà không cần định lượng creatinin huyết thanh",
      "Tính toán CrCl bằng công thức Cockcroft-Gault hoặc eGFR để hiệu chỉnh liều",
      "Lấy ngưỡng eGFR cố định 90 mL/phút/1.73m2 làm chuẩn cho mọi người cao tuổi",
      "Chỉ nhìn creatinin máu thấy 0,8 mg/dL là kết luận chức năng lọc cầu thận bình thường"
    ],
    correct: 1
  },
  1023: { // ID 1023, c: 2
    options: [
      "Thuốc hoàn toàn chưa từng được thử nghiệm trên bất kỳ sinh vật nào",
      "Chống chỉ định tuyệt đối cho mọi phụ nữ trong độ tuổi sinh đẻ có khả năng mang thai",
      "Thử nghiệm lâm sàng có đối chứng trên thai phụ không chứng minh nguy cơ cho thai",
      "Có bằng chứng quái thai rõ ràng trên thai nhi người nhưng vẫn được dùng tự do"
    ],
    correct: 2
  },
  1024: { // ID 1024, c: 3
    options: [
      "Được chứng minh an toàn tuyệt đối không có bất kỳ rủi ro nào cho cả mẹ và thai nhi",
      "Bị chống chỉ định tuyệt đối không được phép sử dụng trong mọi hoàn cảnh lâm sàng",
      "Thuốc đã bị cơ quan quản lý dược phẩm thu hồi và cấm lưu hành vĩnh viễn trên thế giới",
      "Có độc tính trên thai hoặc chưa nghiên cứu đầy đủ, chỉ dùng khi thật sự cần thiết"
    ],
    correct: 3
  },
  1027: { // ID 1027, c: 2
    options: [
      "Dị tật sứt môi hở hàm ếch đơn thuần kèm theo khiếm khuyết xương hàm trên",
      "Gây đục thủy tinh thể hai mắt bẩm sinh dẫn đến mù lòa vĩnh viễn sau sinh",
      "Thiểu ối, suy thận thai nhi vô niệu, kém phát triển xương sọ và tử vong thai",
      "Kích thích thai nhi phát triển to quá khổ trên 5 kg gây đẻ khó do vai"
    ],
    correct: 2
  },
  1030: { // ID 1030, c: 1
    options: [
      "N-acetylcystein truyền tĩnh mạch theo phác đồ giải độc ngộ độc paracetamol",
      "Calci gluconat 10% tiêm tĩnh mạch chậm trong 3 đến 5 phút",
      "Naloxon tiêm bắp hoặc tiêm tĩnh mạch để đối kháng ức chế hô hấp do opioid",
      "Vitamin K1 tiêm tĩnh mạch chậm để hồi phục phức hệ prothrombin huyết tương"
    ],
    correct: 1
  },
  1034: { // ID 1034, c: 1
    options: [
      "Phá hủy hoàn toàn biểu mô tuyến vú dẫn đến mất sữa vĩnh viễn không thể hồi phục",
      "Kích thích tăng tiết prolactin làm tăng lượng sữa mẹ bài xuất",
      "Gây đông vón protein sữa ngay bên trong các ống dẫn sữa dẫn đến áp xe vú",
      "Làm cho sữa mẹ bị đổi màu sang màu xanh lục sẫm có mùi hôi khó chịu"
    ],
    correct: 1
  },
  1035: { // ID 1035, c: 2
    options: [
      "Cho trẻ bú đúng vào thời điểm nồng độ thuốc trong máu mẹ đạt đỉnh cao nhất",
      "Tăng gấp đôi liều thuốc của mẹ để trẻ được bảo vệ gián tiếp qua sữa",
      "Cho trẻ bú ngay trước khi mẹ uống thuốc hoặc uống thuốc ngay sau cữ bú của trẻ",
      "Uống thuốc liên tục cách nhau mỗi 1 giờ để duy trì nồng độ thuốc ổn định"
    ],
    correct: 2
  },
  1036: { // ID 1036, c: 3
    options: [
      "RID = [Tổng lượng nước tiểu trẻ đi trong 24 giờ / Thể tích sữa bú] x 100%",
      "RID = [Cân nặng của người mẹ / Cân nặng thực tế của trẻ sơ sinh] x 100%",
      "RID = [Thể tích sữa trẻ bú mỗi bữa x Nồng độ glucose trong sữa] x 100%",
      "RID = [Liều thuốc trẻ nhận qua sữa mỗi ngày / Liều thuốc mẹ dùng] x 100%"
    ],
    correct: 3
  },
  1037: { // ID 1037, c: 0
    options: [
      "Rất an toàn vì tỷ lệ gắn protein cao, lượng thuốc bài xuất vào sữa cực kỳ thấp",
      "Gây dị tật tim mạch bẩm sinh cho trẻ bú mẹ nếu người mẹ dùng thuốc quá 3 ngày",
      "Rất độc hại đối với hệ tiêu hóa của trẻ và chống chỉ định tuyệt đối khi cho con bú",
      "Chỉ được phép sử dụng khi trẻ đã cai sữa mẹ hoàn toàn và chuyển sang ăn dặm"
    ],
    correct: 0
  },
  1038: { // ID 1038, c: 1
    options: [
      "Khi trẻ bú mẹ hoàn toàn khỏe mạnh và đã phát triển trên 12 tháng tuổi",
      "Khi trẻ dưới 2 tháng tuổi hoặc thiếu men G6PD do nguy cơ tan máu và vàng da nhân não",
      "Khi trẻ đã bắt đầu bước vào giai đoạn ăn dặm bổ sung cháo và bột ngũ cốc",
      "Khi người mẹ bị nhiễm khuẩn tiết niệu dưới đơn thuần do trực khuẩn E. coli"
    ],
    correct: 1
  },
  1040: { // ID 1040, c: 3
    options: [
      "Bằng 0% do phân tử Paracetamol hoàn toàn không thể đi qua hàng rào biểu mô tuyến vú",
      "Khoảng 50 lần làm nồng độ trong sữa tăng vọt dẫn đến ngộ độc gan cấp tính ở trẻ",
      "Biến thiên thất thường và không thể định lượng được trong thực hành lâm sàng",
      "Khoảng 0,7 đến 1,0 và RID rất thấp, an toàn tối đa cho trẻ bú mẹ"
    ],
    correct: 3
  },
  1042: { // ID 1042, c: 1
    options: [
      "Làm co thắt động mạch rốn thai nhi gây suy thai cấp tính trong tử cung",
      "Chẹn kênh calci làm giảm nồng độ calci nội bào trong tế bào cơ tử cung",
      "Ức chế tuyến yên sản sinh prolactin làm giảm các cơn co thắt chuyển dạ sinh non",
      "Kích thích trực tiếp các thụ thể oxytocin trên màng tế bào cơ trơn tử cung"
    ],
    correct: 1
  },
  1043: { // ID 1043, c: 2
    options: [
      "Chỉ được phép sử dụng sau khi cuộc chuyển dạ đẻ đã hoàn tất an toàn",
      "Chống chỉ định tuyệt đối vì gây cơn co cứng tử cung dẫn đến sảy thai ngay lập tức",
      "An toàn và là lựa chọn hàng đầu cắt cơn co thắt phế quản cấp cho phụ nữ mang thai",
      "Gây dị tật tim mạch bẩm sinh và khuyết tật ống thần kinh nặng nề cho thai nhi"
    ],
    correct: 2
  },
  1044: { // ID 1044, c: 3
    options: [
      "Kích thích thai nhi phát triển nhanh vượt mức bình thường dẫn đến thai khổng lồ",
      "Hoàn toàn không gây ra bất kỳ tác động tiêu cực nào đến sự phát triển của thai",
      "Giúp phế nang phổi của thai nhi mau chóng trưởng thành hơn so với tuổi thai",
      "Thai chậm tăng trưởng trong tử cung, sinh non, nhẹ cân và tăng tử vong chu sinh"
    ],
    correct: 3
  },
  1045: { // ID 1045, c: 0
    options: [
      "Qua nhau thai dễ dàng, nồng độ máu thai nhi tương đương nồng độ máu mẹ",
      "Tích lũy tập trung trong bánh nhau gây hoại tử tế bào nuôi bánh nhau cấp tính",
      "Bị các enzyme tại nhau thai phân hủy hoàn toàn trong vòng vài giây sau khi đến",
      "Hoàn toàn không thể khuếch tán qua hàng rào nhau thai trong suốt thai kỳ"
    ],
    correct: 0
  }
};

module.exports = updates;
