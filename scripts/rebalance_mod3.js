const fs = require('fs');
const path = require('path');

// Rebalancing Module 3 (Chapters 9 - 12: 206 questions)
// Covers:
// - Kháng sinh & Kháng sinh dự phòng
// - Glucocorticoid & Phác đồ điều trị
// - Thuốc giảm đau
// - Vitamin và chất khoáng

const updates = {
  397: { // ID 397, c: 0
    options: [
      "Tỷ số giữa nồng độ đỉnh Cmax trên nồng độ ức chế tối thiểu MIC",
      "Thể tích phân bố toàn phần của hoạt chất trong khoang dịch ngoại bào",
      "Tỷ lệ phần trăm thời gian nồng độ thuốc tự do duy trì trên mức MIC",
      "Tỷ số giữa nồng độ thuốc đo được tại mô mỡ so với trong huyết tương"
    ],
    correct: 0
  },
  398: { // ID 398, c: 1
    options: [
      "Nồng độ đỉnh tự do Cmax trong huyết tương đạt giá trị trên 100 mg/L",
      "Tỷ số diện tích dưới đường cong 24 giờ trên MIC (AUC24/MIC) đạt trên 400",
      "Tốc độ truyền tĩnh mạch thật nhanh trong thời gian dưới 10 phút truyền",
      "Thời gian nồng độ thuốc vượt trên MIC duy trì tối thiểu 100% khoảng liều"
    ],
    correct: 1
  },
  400: { // ID 400, c: 3
    options: [
      "Rút ngắn thời gian tiêm truyền tĩnh mạch thuốc xuống mức tối thiểu 5 phút",
      "Gia tăng tỷ lệ liên kết của kháng sinh với protein albumin trong huyết tương",
      "Giúp hoạt chất hấp thu nhanh chóng và trọn vẹn hơn qua đường tiêu hóa",
      "Tối ưu hóa tỷ số Cmax trên MIC và giảm tích lũy gây độc tính trên tai và thận"
    ],
    correct: 3
  },
  403: { // ID 403, c: 2
    options: [
      "Gắn đặc hiệu vào tiểu đơn vị 50S của ribosom ngăn cản tạo liên kết peptid",
      "Ức chế enzym tổng hợp acid mycolic làm suy yếu cấu trúc vách tế bào vi khuẩn",
      "Gắn không hồi phục vào tiểu đơn vị 30S của ribosom gây đọc sai mã di truyền",
      "Ức chế cạnh tranh enzym dihydropteroat synthetase ngăn cản tổng hợp acid folic"
    ],
    correct: 2
  },
  404: { // ID 404, c: 3
    options: [
      "Phá hủy màng tế bào ngoài và tăng tính thấm chọn lọc của vi khuẩn gram âm",
      "Ức chế enzym ARN polymerase phụ thuộc ADN ngăn cản quá trình phiên mã ARN",
      "Cạnh tranh vị trí gắn kết của chất đối kháng chuyển hóa acid para-aminobenzoic",
      "Ức chế tổng hợp protein thông qua gắn kết tiểu đơn vị 50S ribosom vi khuẩn"
    ],
    correct: 3
  },
  406: { // ID 406, c: 1
    options: [
      "Ức chế quá trình sinh tổng hợp các tiền chất lipid A trên thành tế bào vi khuẩn",
      "Gắn vào chuỗi D-Ala-D-Ala ngăn cản kéo dài chuỗi peptidoglycan của vách tế bào",
      "Khuếch tán qua kênh porin màng ngoài làm tăng tính thấm và ly giải màng tế bào",
      "Gắn chọn lọc vào tiểu đơn vị 30S gây ức chế kéo dài chuỗi polypeptid dịch mã"
    ],
    correct: 1
  },
  409: { // ID 409, c: 0
    options: [
      "Bảo vệ Amoxicillin không bị phân hủy bởi enzym Beta-lactamase của vi khuẩn",
      "Làm giảm tỷ lệ tác dụng không mong muốn gây tiêu chảy phân lỏng của kháng sinh",
      "Gia tăng đáng kể tốc độ lọc và bài xuất của hoạt chất qua màng lọc cầu thận",
      "Mở rộng phổ tác dụng diệt khuẩn trên trực khuẩn mủ xanh Pseudomonas aeruginosa"
    ],
    correct: 0
  },
  411: { // ID 411, c: 2
    options: [
      "Cephalosporin thế hệ 1 như Cefazolin tiêm tĩnh mạch hoặc Cefalexin đường uống",
      "Cephalosporin thế hệ 5 như Ceftarolin có hoạt tính chuyên biệt trên vi khuẩn MRSA",
      "Cephalosporin thế hệ 3 như Ceftazidim hoặc thế hệ 4 như Cefepim phổ kháng Pseudomonas",
      "Cephalosporin thế hệ 2 như Cefuroxim đường tiêm hoặc Cefaclor đường uống thông thường"
    ],
    correct: 2
  },
  412: { // ID 412, c: 3
    options: [
      "Có hoạt tính diệt trừ các chủng nấm men sợi Candida và virus hợp bào hô hấp",
      "Hấp thu hoàn hảo qua đường uống và an toàn tuyệt đối cho trẻ sinh non nhẹ cân",
      "Thải trừ hoàn toàn qua gan mật nên không cần hiệu chỉnh liều khi suy thận nặng",
      "Gắn kết ái lực cao với PBP2a, diệt tụ cầu vàng kháng methicillin (MRSA)"
    ],
    correct: 3
  },
  413: { // ID 413, c: 0
    options: [
      "Đột biến tạo PBP2a có ái lực rất thấp với hầu hết kháng sinh nhóm beta-lactam",
      "Kích hoạt hệ thống bơm tống chủ động nhiều thuốc tống kháng sinh ra ngoài màng",
      "Tiết ra một lượng rất lớn enzym penicillinase thông thường phá hủy vòng kháng sinh",
      "Đột biến làm đóng hoàn toàn các kênh porin trên màng ngoài của tế bào vi khuẩn"
    ],
    correct: 0
  },
  414: { // ID 414, c: 1
    options: [
      "Ức chế cạnh tranh quá trình hấp thu acid folic ngoại sinh từ môi trường nuôi cấy",
      "Gắn vào vị trí 23S của tiểu đơn vị 50S ngăn tạo phức hợp khởi đầu 70S ribosom",
      "Ức chế enzym ARN polymerase phụ thuộc ADN ngăn cản quá trình phiên mã ARN vi khuẩn",
      "Phá hủy cấu trúc màng phospholipid kép làm rò rỉ các thành phần nội bào vi khuẩn"
    ],
    correct: 1
  },
  415: { // ID 415, c: 2
    options: [
      "Tổn thương tế bào lông ốc tai dẫn đến suy giảm thính lực và điếc tai vĩnh viễn",
      "Gây thoái hóa viêm hoại tử và đứt gân gót Achilles tự phát ở cả hai bên chân",
      "Ức chế tủy xương phụ thuộc thời gian gây giảm tiểu cầu, thiếu máu và giảm bạch cầu",
      "Viêm trợt loét sâu niêm mạc tá tràng dẫn đến thủng tạng rỗng cấp tính trong bụng"
    ],
    correct: 2
  },
  416: { // ID 416, c: 3
    options: [
      "Nhiễm khuẩn các chủng vi khuẩn lao kháng đa thuốc phối hợp phác đồ chuyên khoa",
      "Nhiễm nấm Candida xâm lấn hoặc nấm Aspergillus phổi kháng thuốc kháng nấm azol",
      "Nhiễm virus cúm mùa biến chứng suy hô hấp cấp tính tiến triển thành ARDS nặng",
      "Nhiễm trực khuẩn Gram âm đa kháng và toàn kháng sinh men carbapenemase (CRE, CRAB)"
    ],
    correct: 3
  },
  417: { // ID 417, c: 0
    options: [
      "Độc tính trên thận gây hoại tử ống thận và độc tính ức chế dẫn truyền thần kinh cơ",
      "Tổn thương tế bào thính giác gây điếc vĩnh viễn và mù lòa cấp tính do teo gai thị",
      "Hoại tử tế bào nhu mô gan diện rộng dẫn đến hội chứng suy tế bào gan bùng phát",
      "Ức chế tủy xương toàn bộ gây mất bạch cầu hạt và thoái hóa võng mạc nhiễm sắc tố"
    ],
    correct: 0
  },
  419: { // ID 419, c: 2
    options: [
      "Nội soi dạ dày tá tràng chẩn đoán thông thường ở bệnh nhân không có can thiệp mô",
      "Thủ thuật sinh thiết tổn thương da bề mặt nông không kèm theo đặt vật liệu nhân tạo",
      "Phẫu thuật sạch có cấy ghép vật liệu nhân tạo hoặc phẫu thuật sạch - nhiễm",
      "Mọi ca tiểu phẫu nông ngoài da cắt chỉ thông thường ở người khỏe mạnh ngoại trú"
    ],
    correct: 2
  },
  421: { // ID 421, c: 0
    options: [
      "Bắt đầu truyền tĩnh mạch trong vòng 120 phút trước khi rạch da do thời gian truyền dài",
      "Bắt đầu truyền tĩnh mạch thật nhanh trước khi rạch da đúng 15 phút tại phòng mổ",
      "Chỉ bắt đầu tiêm truyền sau khi phẫu thuật viên đã thực hiện xong mũi khâu đóng da",
      "Dùng đường uống liên tục 3 ngày trước khi đưa bệnh nhân vào phòng mổ phẫu thuật"
    ],
    correct: 0
  },
  423: { // ID 423, c: 2
    options: [
      "Vi khuẩn lao kháng đa thuốc Mycobacterium tuberculosis xâm lấn đường ruột",
      "Các chủng nấm men sợi cơ hội như Candida albicans hoặc Cryptococcus neoformans",
      "Trực khuẩn kỵ khí đường ruột như Bacteroides fragilis và trực khuẩn Gram âm Enterobacteriaceae",
      "Các virus hướng gan gây viêm gan virus B và C bùng phát sau can thiệp mổ"
    ],
    correct: 2
  },
  424: { // ID 424, c: 3
    options: [
      "Bệnh nhân xuất hiện sốt nhẹ thoáng qua trên bàn mổ trong khi phẫu thuật viên thao tác",
      "Chỉ tiêm nhắc lại duy nhất sau khi ca mổ đã kết thúc và bệnh nhân chuyển về hồi tỉnh",
      "Tiêm nhắc lại đều đặn mỗi 30 phút một lần bất kể thời gian mổ và lượng máu mất",
      "Thời gian phẫu thuật kéo dài quá 2 lần thời gian bán thải của thuốc hoặc mất máu > 1500 mL"
    ],
    correct: 3
  },
  428: { // ID 428, c: 3
    options: [
      "Sinh khả dụng đường uống đạt xấp xỉ 100% giúp người bệnh thuận tiện tự điều trị",
      "Tỷ lệ liên kết với protein huyết tương rất thấp dưới 5% giúp khuếch tán nhanh vào mô",
      "Đào thải nguyên vẹn 100% qua tuyến mồ hôi giúp kiểm soát nhiễm khuẩn ngoài da",
      "Thời gian bán thải dài khoảng 8 giờ cho phép dùng 1 lần trong ngày ở bệnh nhân ngoại trú"
    ],
    correct: 3
  },
  430: { // ID 430, c: 1
    options: [
      "Kanamycin tiêm bắp ngắt quãng theo dõi tại các phòng khám chuyên khoa",
      "Tobramycin và Amikacin có hoạt tính diệt trực khuẩn mủ xanh mạnh nhất",
      "Streptomycin phối hợp trong phác đồ điều trị lao theo hướng dẫn quốc gia",
      "Neomycin dùng ngoài da hoặc phối hợp uống để làm sạch khuẩn đường tiêu hóa"
    ],
    correct: 1
  },
  431: { // ID 431, c: 2
    options: [
      "Viêm họng đỏ cấp tính do liên cầu khuẩn tan huyết beta nhóm A ở trẻ em lứa tuổi học đường",
      "Viêm mô tế bào nông cẳng chân chưa có biến chứng hoại tử ở người bệnh không suy giảm miễn dịch",
      "Viêm nội tâm mạc nhiễm khuẩn do Enterococcus faecalis (Beta-lactam phối hợp Aminosid)",
      "Nhiễm khuẩn đường tiết niệu dưới thể viêm bàng quang cấp không biến chứng ở phụ nữ trẻ tuổi"
    ],
    correct: 2
  },
  434: { // ID 434, c: 1
    options: [
      "Ức chế đồng thời hai enzym Topoisomerase II và Topoisomerase IV của sợi ADN vi khuẩn",
      "Ức chế tuần tự Dihydropteroat synthetase và Dihydrofolat reductase trong tổng hợp folat",
      "Ức chế cạnh tranh hai enzym Transpeptidase và Carboxypeptidase trong tổng hợp vách tế bào",
      "Ức chế chọn lọc enzym ADN polymerase và ARN polymerase phụ thuộc ADN của tế bào vi khuẩn"
    ],
    correct: 1
  },
  441: { // ID 441, c: 0
    options: [
      "Chất diện hoạt Surfactant tại bề mặt phế nang phổi làm mất hoạt tính của Daptomycin",
      "Enzym tiêu đạm Pepsin trong môi trường acid dịch vị dạ dày phân cắt chuỗi peptid",
      "Enzym lysozym tự nhiên trong dịch nước mắt và dịch tiết đường niêm mạc mắt",
      "Các acid mật và muối mật do tế bào gan bài tiết vào trong lòng tá tràng ruột non"
    ],
    correct: 0
  },
  443: { // ID 443, c: 2
    options: [
      "Nồng độ trong máu duy trì rất cao trong khi mức độ thâm nhập vào mô đích cực kỳ hạn chế",
      "Hấp thu hoàn hảo qua đường uống với sinh khả dụng cao tương đương đường truyền tĩnh mạch",
      "Thể tích phân bố Vd rất lớn, thâm nhập mô sâu tốt nhưng nồng độ trong máu và nước tiểu thấp",
      "Đào thải hoàn toàn 100% dưới dạng còn hoạt tính qua nước tiểu tạo nồng độ cao tại bể thận"
    ],
    correct: 2
  },
  447: { // ID 447, c: 2
    options: [
      "Thúc đẩy phân tử Imipenem thâm nhập nhanh chóng và chọn lọc vào tế bào nhu mô gan",
      "Trung hòa độc tính dị ứng và phòng ngừa phản ứng sốc phản vệ cấp tính của Imipenem",
      "Ức chế enzym Dehydropeptidase-1 ở ống thận, bảo vệ Imipenem không bị chuyển hóa mất hoạt tính",
      "Gia tăng mức độ hòa tan và độ ổn định hóa lý của dung dịch Imipenem trong máu tuần hoàn"
    ],
    correct: 2
  },
  448: { // ID 448, c: 3
    options: [
      "Làm giãn đồng tử hai bên mắt kèm theo mất phản xạ điều tiết quang học cấp tính",
      "Gây rối loạn định hướng không gian và mất trí nhớ ngắn hạn thoáng qua ở người già",
      "Độc tính trực tiếp trên dây thần kinh ốc tai dẫn đến điếc tiếp nhận thần kinh hai bên",
      "Nguy cơ khởi phát cơn co giật, đặc biệt ở bệnh nhân suy thận không được chỉnh liều hoặc có tổn thương TKTW"
    ],
    correct: 3
  },
  449: { // ID 449, c: 0
    options: [
      "Levofloxacin và Moxifloxacin (thuộc nhóm Quinolon hô hấp) có hoạt tính phế cầu vượt trội",
      "Ofloxacin dạng viên nén quy ước dùng trong điều trị nhiễm khuẩn đường tiết niệu",
      "Norfloxacin đường uống có sinh khả dụng thấp chủ yếu tập trung tại đường ruột",
      "Ciprofloxacin có hoạt tính mạnh nhất trên trực khuẩn mủ xanh nhưng yếu trên phế cầu"
    ],
    correct: 0
  },
  450: { // ID 450, c: 1
    options: [
      "Thuốc bị phân hủy hoàn toàn bởi enzym kháng thuốc của vi khuẩn Gram âm trong bàng quang",
      "Chuyển hóa qua gan mật là chính, tỷ lệ thuốc dạng hoạt tính bài xuất vào nước tiểu rất thấp",
      "Môi trường nước tiểu toan tính phá hủy hoàn toàn cấu trúc phân tử của kháng sinh quinolon",
      "Thuốc kết tinh tạo sỏi dạng tinh thể gây tắc nghẽn hoàn toàn đài bể thận và niệu quản hai bên"
    ],
    correct: 1
  },
  453: { // ID 453, c: 0
    options: [
      "Vitamin B6 (Pyridoxin) liều 10 - 25 mg/ngày để bù trừ lượng pyridoxin bị tăng đào thải",
      "Vitamin A dạng dung dịch dầu uống liều cao để tăng cường miễn dịch niêm mạc đường hô hấp",
      "Vitamin B12 đường tiêm bắp sâu định kỳ hàng tháng để phòng ngừa biến chứng thiếu máu ác tính",
      "Vitamin C dạng viên sủi liều cao 1000 mg mỗi ngày để kiềm hóa môi trường nội bào cơ thể"
    ],
    correct: 0
  },
  454: { // ID 454, c: 1
    options: [
      "Tăng cường tổng hợp các lớp peptidoglycan làm vách tế bào vi khuẩn dày lên gấp nhiều lần",
      "Methyl hóa vị trí gắn kết trên phân tử ARN 23S của tiểu đơn vị ribosom 50S qua trung gian gen erm",
      "Tiết ra enzym Acetyltransferase làm acetyl hóa và bất hoạt hoàn toàn cấu trúc phân tử thuốc",
      "Đột biến điểm làm thay đổi cấu trúc không gian của enzym ADN-gyrase và Topoisomerase IV"
    ],
    correct: 1
  },
  455: { // ID 455, c: 2
    options: [
      "Gây ra phản ứng dị ứng chéo tỷ lệ 100% với Ceftazidim do có cấu trúc chuỗi bên giống nhau",
      "Chỉ có phổ tác dụng diệt khuẩn chọn lọc trên các chủng cầu khuẩn Gram dương hiếu khí",
      "Phổ chọn lọc trên vi khuẩn Gram âm hiếu khí và không gây dị ứng chéo với Penicillin (trừ Ceftazidim)",
      "Có phổ tác dụng cực rộng bao phủ toàn bộ vi khuẩn Gram dương, Gram âm và vi khuẩn kỵ khí sâu"
    ],
    correct: 2
  },
  456: { // ID 456, c: 3
    options: [
      "Nồng độ tối đa của thuốc trong huyết tương mà cơ thể người bệnh có thể dung nạp an toàn",
      "Nồng độ kháng sinh tự do đo được tại mô vết thương phẫu thuật sau khi tiêm liều nạp ban đầu",
      "Nồng độ kháng sinh tối thiểu tiêu diệt được từ 99,9% số lượng vi khuẩn sống sót ban đầu",
      "Nồng độ thấp nhất của kháng sinh ức chế sự phát triển nhìn thấy được của vi khuẩn sau 18 - 24 giờ nuôi cấy"
    ],
    correct: 3
  },
  457: { // ID 457, c: 0
    options: [
      "Tiêu diệt từ 99,9% số lượng vi khuẩn sống sót ban đầu sau thời gian ủ canh khuẩn",
      "Gắn kết bão hòa vào toàn bộ các thụ thể tiếp nhận trên bề mặt tiểu đơn vị ribosom vi khuẩn",
      "Làm vi khuẩn ngừng hoàn toàn quá trình bài tiết ngoại độc tố và nội độc tố vào môi trường",
      "Ức chế sự di chuyển của vi khuẩn trên bề mặt môi trường thạch dinh dưỡng chuyên biệt"
    ],
    correct: 0
  },
  459: { // ID 459, c: 2
    options: [
      "Xác định thời điểm tối ưu mà bệnh nhân hồi phục hoàn toàn để làm thủ tục xuất viện",
      "Kiểm tra mức độ dị ứng trên da và phản ứng giải phóng histamin ngoài da của bệnh nhân",
      "Đảm bảo nồng độ đủ để đạt hiệu lực diệt khuẩn (AUC/MIC) và tránh tích lũy gây độc thận",
      "Đánh giá tốc độ hòa tan và độ tương hợp hóa lý của dung dịch thuốc tiêm truyền tĩnh mạch"
    ],
    correct: 2
  },
  460: { // ID 460, c: 3
    options: [
      "Gây viêm loét và xuất huyết tiêu hóa ồ ạt do tác dụng kích ứng niêm mạc dạ dày tá tràng",
      "Khởi phát các cơn hạ đường huyết kịch phát dẫn đến co giật cục bộ ngay sau khi tiêm truyền",
      "Làm mất hoàn toàn hoạt tính kháng khuẩn in vivo của Vancomycin trên các chủng tụ cầu vàng",
      "Gia tăng đáng kể nguy cơ xuất hiện tổn thương thận cấp (AKI) do tương tác cộng dồn độc tính thận"
    ],
    correct: 3
  },
  461: { // ID 461, c: 0
    options: [
      "Dùng liều 1 lần/ngày, thời gian bán thải dài hơn và nguy cơ ức chế tủy xương thấp hơn",
      "Bao phủ hiệu quả các chủng vi khuẩn kỵ khí sinh nha bào nguy hiểm như Clostridium difficile",
      "Hoàn toàn không ghi nhận bất kỳ tác dụng phụ nào trên lâm sàng ngay cả khi dùng liều cao dài ngày",
      "Chỉ cần sử dụng theo đường tiêm bắp sâu không gây đau buốt mà không cần tiêm truyền tĩnh mạch"
    ],
    correct: 0
  },
  465: { // ID 465, c: 0
    options: [
      "Tạo các vi tổn thương trên da tạo điều kiện cho vi khuẩn xâm nhập làm tăng nhiễm khuẩn vết mổ",
      "Làm sạch triệt để các nang lông giúp trường mổ đạt trạng thái vô khuẩn tuyệt đối trước phẫu thuật",
      "Hoàn toàn không có bất kỳ ảnh hưởng nào đến nguy cơ nhiễm khuẩn vết mổ và tốc độ liền sẹo",
      "Rút ngắn thời gian liền sẹo và ngăn chặn hiện tượng tạo sẹo lồi co kéo sau phẫu thuật ngoại khoa"
    ],
    correct: 0
  },
  466: { // ID 466, c: 1
    options: [
      "Kháng sinh nhóm Glycopeptid như Vancomycin hoặc Teicoplanin dùng điều trị nhiễm khuẩn Gram dương",
      "Cephalosporin thế hệ 3 như Ceftriaxon, Cefotaxim và Ceftazidim (men ESBL thủy phân được)",
      "Kháng sinh nhóm Carbapenem như Meropenem hoặc Imipenem (vẫn bền vững trước enzym ESBL)",
      "Kháng sinh nhóm Cephamycin như Cefoxitin hoặc Cefotetan có tính bền vững trước enzym ESBL"
    ],
    correct: 1
  },
  467: { // ID 467, c: 2
    options: [
      "Chuyển từ đường truyền tĩnh mạch sang tiêm bắp ngắt quãng để tiết kiệm chi phí điều trị",
      "Giảm liều dùng kháng sinh xuống còn một nửa liều khuyến cáo để hạn chế tối đa độc tính thận",
      "Chuyển sang kháng sinh phổ hẹp hơn hoặc giảm bớt số lượng thuốc khi có kết quả vi sinh",
      "Ngừng sử dụng toàn bộ kháng sinh ngay sau khi bệnh nhân cắt cơn sốt được liên tục 12 giờ"
    ],
    correct: 2
  },
  469: { // ID 469, c: 0
    options: [
      "Clindamycin do có tác dụng ức chế ribosom làm giảm sản sinh độc tố của vi khuẩn",
      "Cefazolin tiêm tĩnh mạch ngắt quãng theo dõi định kỳ chức năng lọc cầu thận của bệnh nhân",
      "Gentamicin liều cao đường tiêm bắp sâu nhằm tối ưu hóa nồng độ đỉnh diệt khuẩn trong máu",
      "Ciprofloxacin dạng dung dịch tiêm truyền tĩnh mạch chậm theo phác đồ hướng dẫn chuẩn"
    ],
    correct: 0
  },
  470: { // ID 470, c: 1
    options: [
      "Chỉ dùng theo đường uống dạng viên nén bao phim điều trị nhiễm khuẩn đường tiêu hóa nhẹ",
      "Thời gian bán thải rất dài (trên 200 giờ) cho phép dùng phác đồ 1 liều duy nhất cho cả đợt",
      "Hoàn toàn không có tác dụng kháng khuẩn trên các chủng cầu khuẩn Gram dương kháng methicillin",
      "Đào thải nguyên vẹn 100% qua đường hô hấp và không tạo nồng độ trong các khoang dịch mô cơ thể"
    ],
    correct: 1
  },
  477: { // ID 477, c: 0
    options: [
      "Phospholipase A2 thông qua kích thích tế bào tổng hợp protein Lipocortin-1 (Annexin-1)",
      "Enzym Adenylate cyclase ở màng nhân tế bào làm suy giảm nồng độ cAMP bên trong tế bào",
      "Enzym 5-Lipoxygenase trực tiếp tại bào tương ngăn cản chuyển hóa tạo các Leukotrien viêm",
      "Enzym Cyclooxygenase-1 cấu tạo màng tế bào làm giảm bài tiết prostaglandin bảo vệ niêm mạc"
    ],
    correct: 0
  },
  478: { // ID 478, c: 1
    options: [
      "Chỉ bôi ngoài da một lượng nhỏ thuốc mỡ ở vùng mu bàn tay trong thời gian vài ngày ngắn ngủi",
      "Dùng liều tương đương > 5 mg Prednisolon/ngày kéo dài trên 3 tuần hoặc liều cao dài ngày",
      "Dùng liều thấp trong vòng dưới 3 ngày liên tục để hạ sốt trong các đợt cảm lạnh thông thường",
      "Chỉ sử dụng một liều tiêm tĩnh mạch duy nhất trong quy trình cấp cứu sốc phản vệ tại bệnh viện"
    ],
    correct: 1
  },
  479: { // ID 479, c: 2
    options: [
      "Tăng huyết áp kịch phát ác tính kèm theo phù gai thị và biến chứng xuất huyết não đe dọa tính mạng",
      "Co cứng toàn thân và xuất hiện các cơn giật cứng cơ kiểu uốn ván do giảm nồng độ canxi ion hóa",
      "Tụt huyết áp trụy mạch, sốt cao, đau bụng dữ dội, hạ natri máu, tăng kali máu và lơ mơ",
      "Phù toàn thân ứ trệ tuần hoàn kết hợp với tình trạng tăng nồng độ kali máu mức độ nhẹ thoáng qua"
    ],
    correct: 2
  },
  480: { // ID 480, c: 3
    options: [
      "Kích thích trung tâm thèm ăn giúp người bệnh ăn uống ngon miệng và tăng cân nhanh chóng hơn",
      "Giảm thiểu tối đa chi phí mua thuốc điều trị hàng tháng cho người bệnh điều trị ngoại trú dài hạn",
      "Làm gia tăng gấp đôi hoạt tính kháng viêm và ức chế miễn dịch trên mô tổn thương của thuốc",
      "Cho phép trục HPA hồi phục sinh lý vào ngày nghỉ, giảm nguy cơ suy vỏ thượng thận thứ phát"
    ],
    correct: 3
  },
  481: { // ID 481, c: 0
    options: [
      "Mặt tròn như mặt trăng, bướu mỡ vùng gáy (bướu trâu) và béo phì vùng thân mình",
      "Tích tụ mô mỡ bất thường khu trú chủ yếu ở hai cẳng chân và vùng mu bàn chân của người bệnh",
      "Teo toàn bộ mô mỡ dưới da ở vùng lồng ngực và vùng bụng làm lộ rõ các xương sườn hai bên",
      "Mất hoàn toàn lớp mỡ đệm dưới da trên toàn bộ cơ thể dẫn đến tình trạng gầy còm suy kiệt nặng"
    ],
    correct: 0
  },
  483: { // ID 483, c: 2
    options: [
      "Bổ sung Vitamin A liều cao 50.000 đơn vị quốc tế mỗi tháng để kích thích phát triển sụn tiếp hợp",
      "Uống nhiều nước giải khát có ga giàu phosphat để hỗ trợ quá trình khoáng hóa chất nền xương",
      "Bổ sung Canxi (1000-1200 mg/ngày), Vitamin D3 (800-1000 UI/ngày) và cân nhắc dùng Bisphosphonat",
      "Tiêm truyền tĩnh mạch dung dịch albumin người 20% định kỳ hàng tuần để tăng cường giữ calci"
    ],
    correct: 2
  },
  484: { // ID 484, c: 3
    options: [
      "Tăng cường bài xuất glucose qua niêm mạc ống tiêu hóa vào trong phân làm mất năng lượng cơ thể",
      "Ức chế quá trình ly giải glycogen dự trữ tại các tế bào cơ vân và tế bào nhu mô gan người bệnh",
      "Kích thích các tế bào beta của tiểu đảo tụy tăng cường tổng hợp và giải phóng ồ ạt hormon Insulin",
      "Tăng tân tạo glucose tại gan và giảm tính nhạy cảm, giảm thu nạp glucose ở mô cơ ngoại vi"
    ],
    correct: 3
  },
  485: { // ID 485, c: 0
    options: [
      "Tăng nhãn áp (Glaucoma) và Đục thủy tinh thể dưới bao sau của mắt",
      "Bong giác mạc tự phát ở cả hai mắt dẫn đến suy giảm thị lực đột ngột không hồi phục",
      "Khởi phát các đợt viêm kết mạc dị ứng mùa xuân mạn tính có nhú gai trên kết mạc mi",
      "Teo chọn lọc dây thần kinh thị giác một bên mắt kèm theo hiện tượng khuyết góc thị trường"
    ],
    correct: 0
  },
  486: { // ID 486, c: 1
    options: [
      "Kích thích tăng sinh mạnh mẽ lớp biểu bì làm cho bề mặt da trở nên dày sừng thô ráp",
      "Teo da, rạn da đỏ tím, giãn mao mạch nông dưới da, xuất huyết dưới da và chậm liền sẹo",
      "Biến đổi vĩnh viễn sắc tố da tại vị trí bôi thuốc chuyển sang màu xanh tím sẫm do lắng đọng",
      "Làm thoái hóa và triệt tiêu hoàn toàn hệ thống các tuyến mồ hôi và tuyến bã nhờn của biểu bì"
    ],
    correct: 1
  },
  488: { // ID 488, c: 3
    options: [
      "Bệnh lý viêm đại tràng xuất tiết do ngộ độc độc tố tụ cầu sau khi ăn thực phẩm ôi thiu",
      "Khởi phát các cơn sốt phát ban dạng sởi hoặc bệnh tay chân miệng ở trẻ em lứa tuổi mầm non",
      "Nhiễm khuẩn cấp tính bề mặt ngoài da do các chủng tụ cầu vàng nhạy cảm với methicillin",
      "Tái hoạt động bệnh Lao tiềm ẩn, nhiễm nấm cơ hội (Candida, Aspergillus) và virus Zona"
    ],
    correct: 3
  },
  490: { // ID 490, c: 1
    options: [
      "Hydrocortison tiêm bắp ngắt quãng theo dõi tại cơ sở y tế chuyên khoa sâu",
      "Methylprednisolon truyền tĩnh mạch liều 500 - 1000 mg/ngày trong 3 ngày liên tục",
      "Dexamethason dùng theo đường uống liều cao liên tục mỗi giờ một lần trong 24 giờ",
      "Prednisolon đường uống chia nhỏ liều uống nhiều lần rải rác sau các bữa ăn chính"
    ],
    correct: 1
  },
  491: { // ID 491, c: 2
    options: [
      "Tăng cường tái hấp thu ion Kali đồng thời thúc đẩy đào thải ion Natri ra ngoài cơ thể",
      "Kích thích ống thận đào thải đồng thời và ồ ạt cả ion Natri và ion Kali vào trong nước tiểu",
      "Tăng giữ Natri và nước dẫn đến phù, tăng huyết áp đồng thời tăng đào thải Kali qua thận",
      "Làm gia tăng nồng độ ion Calci và ion Phosphat hòa tan trong huyết tương dẫn đến vôi hóa mô"
    ],
    correct: 2
  },
  492: { // ID 492, c: 3
    options: [
      "Làm mất hoàn toàn các phản xạ bảo vệ đường thở tự nhiên như phản xạ ho và phản xạ nuốt thức ăn",
      "Gây ức chế sâu sắc hệ thần kinh trung ương dẫn đến tình trạng hôn mê li bì kéo dài suốt cả ngày",
      "Gây liệt vận động nửa người thoáng qua do co thắt tạm thời các nhánh động mạch não giữa hai bên",
      "Mất ngủ, hưng cảm, sảng khoái quá mức hoặc trầm cảm nặng nề kèm theo cơn loạn thần cấp"
    ],
    correct: 3
  },
  493: { // ID 493, c: 0
    options: [
      "Nhiễm nấm Candida hầu họng và khàn tiếng do lắng đọng thuốc tại chỗ",
      "Mất hoàn toàn cảm giác vị giác trên bề mặt các gai lưỡi không thể phục hồi",
      "Loét trợt sâu niêm mạc lưỡi và vòm miệng gây đau đớn dữ dội khi ăn uống",
      "Khởi phát các đợt chảy máu cam ồ ạt từ điểm mạch Kiesselbach tại hốc mũi"
    ],
    correct: 0
  },
  494: { // ID 494, c: 1
    options: [
      "Sử dụng kèm dung dịch kháng sinh phổ rộng nhỏ họng sau mỗi lần dùng thuốc hít",
      "Súc miệng họng thật kỹ bằng nước sạch và nhổ bỏ ngay sau mỗi lần dùng thuốc hít",
      "Nín thở tuyệt đối trong vòng tối thiểu 5 phút sau khi vừa xịt thuốc vào khoang miệng",
      "Uống ngay một ly sữa tươi nóng nguyên kem ngay sau khi vừa hoàn tất thao tác hít thuốc"
    ],
    correct: 1
  },
  495: { // ID 495, c: 2
    options: [
      "Hoàn toàn không gây ra bất kỳ tác động tiêu cực nào đến tầm vóc phát triển của trẻ nhỏ",
      "Kích thích sụn tiếp hợp phát triển mạnh mẽ khiến trẻ gia tăng chiều cao vượt trội",
      "Ức chế sụn tiếp hợp của xương dài làm chậm phát triển chiều cao và gây lùn ở trẻ",
      "Gây phì đại bất thường các đầu xương và khớp ngón tay tương tự bệnh to đầu chi"
    ],
    correct: 2
  },
  496: { // ID 496, c: 3
    options: [
      "Đo lường chính xác tốc độ lọc qua màng đáy mao mạch của các tiểu cầu thận ở hai bên",
      "Đánh giá mức độ nhạy cảm của các thụ thể insulin màng tế bào với nồng độ glucose máu",
      "Khảo sát chức năng co bóp tống máu và phân suất tống máu thất trái của cơ tim trên siêu âm",
      "Đánh giá khả năng dự trữ và đáp ứng bài tiết hormon Cortisol của vỏ tuyến thượng thận"
    ],
    correct: 3
  },
  497: { // ID 497, c: 0
    options: [
      "Tăng liều Corticoid lên gấp 2 - 3 lần để bù đắp nhu cầu hormon trong phản ứng stress",
      "Giảm bớt một nửa liều dùng hiện tại để bảo vệ miệng vết mổ phẫu thuật nhanh chóng liền sẹo",
      "Ngừng dùng thuốc ngay lập tức để phục hồi lại đáp ứng miễn dịch tự nhiên chống nhiễm trùng",
      "Giữ nguyên mức liều uống hàng ngày thông thường mà không cần bất kỳ sự hiệu chỉnh nào"
    ],
    correct: 0
  },
  498: { // ID 498, c: 1
    options: [
      "Ức chế quá trình tăng tiết chất nhầy đặc quánh của các tuyến phế quản đường hô hấp",
      "Ức chế các Cytokine gây viêm (IL-1, IL-6, TNF-alpha) và giảm tính thấm thành mạch",
      "Bất hoạt enzym tiêu protein Pepsin trong môi trường acid dịch vị của niêm mạc dạ dày",
      "Ức chế bài tiết hormon calcitonin của tuyến giáp trạng làm thay đổi nồng độ canxi máu"
    ],
    correct: 1
  },
  500: { // ID 500, c: 3
    options: [
      "Bắt buộc phải chuyển sang sử dụng dạng thuốc viên đặt trực tràng để tránh chuyển hóa qua gan",
      "Ưu tiên lựa chọn Prednison đường uống do thuốc có giá thành kinh tế phù hợp với người bệnh",
      "Cả hai thuốc trên đều bị chống chỉ định tuyệt đối không được phép sử dụng cho bệnh nhân bệnh gan",
      "Ưu tiên dùng Prednisolon vì là dạng có hoạt tính, không cần qua bước chuyển hóa tại gan"
    ],
    correct: 3
  },
  501: { // ID 501, c: 0
    options: [
      "Tăng liều thuốc hạ đường huyết hoặc Insulin và theo dõi đường máu chặt chẽ",
      "Chủ động giảm liều Insulin tiêm hàng ngày để phòng ngừa nguy cơ hạ đường huyết kịch phát",
      "Chỉ cần áp dụng chế độ ăn kiêng chất ngọt tuyệt đối mà không cần dùng thêm thuốc kiểm soát",
      "Ngừng hoàn toàn việc kiểm tra nồng độ đường máu mao mạch vì các kết quả đều không chuẩn xác"
    ],
    correct: 0
  },
  502: { // ID 502, c: 1
    options: [
      "Làm gia tăng mạnh mẽ số lượng các tế bào tiểu cầu trưởng thành trong máu ngoại vi",
      "Bạch cầu đa nhân trung tính tăng do huy động từ thành mạch máu vào dòng tuần hoàn",
      "Gia tăng tỷ lệ tế bào hồng cầu lưới non mới được tủy xương giải phóng vào hệ mạch",
      "Kích thích tăng sinh nhanh chóng các dòng tế bào bạch cầu ưa acid và bạch cầu lympho"
    ],
    correct: 1
  },
  503: { // ID 503, c: 2
    options: [
      "Vắc xin tái tổ hợp bất hoạt phòng ngừa viêm gan virus B dùng theo phác đồ 3 mũi cơ bản",
      "Vắc xin giải độc tố uốn ván hấp phụ tiêm bắp sâu phòng ngừa nhiễm trùng uốn ván ngoại khoa",
      "Vắc xin sống giảm độc lực (sởi, quai bị, rubella, thủy đậu, BCG) do nguy cơ bùng phát bệnh",
      "Vắc xin phế cầu khuẩn cộng hợp đa giá tiêm bắp phòng viêm phổi cho người có nguy cơ cao"
    ],
    correct: 2
  },
  504: { // ID 504, c: 3
    options: [
      "Gây liệt hoàn toàn nhánh dây thần kinh cảm giác chi phối vùng da xung quanh vị trí tiêm",
      "Làm cho ổ khớp bị dính cứng vĩnh viễn không thể thực hiện các động tác co duỗi vận động",
      "Gây xơ hóa và tắc nghẽn hoàn toàn lòng động mạch khoeo chân dẫn đến hoại tử khô bàn chân",
      "Đứt gân, teo mô mỡ dưới da tại chỗ tiêm và hiện tượng mất sắc tố da không hồi phục"
    ],
    correct: 3
  },
  508: { // ID 508, c: 3
    options: [
      "Nhịn ăn hoàn toàn các loại thực phẩm giàu chất đạm để giảm bớt gánh nặng lọc của cầu thận",
      "Chỉ uống nước lọc tinh khiết và kiêng khem tuyệt đối toàn bộ các nhóm thức ăn chứa tinh bột",
      "Ăn nhiều đồ ngọt giàu năng lượng và chế biến các món ăn mặn đậm đà để kích thích vị giác",
      "Chế độ ăn giảm muối, hạn chế đường, giàu protein chất lượng cao và bổ sung Canxi, Vitamin D"
    ],
    correct: 3
  },
  510: { // ID 510, c: 1
    options: [
      "Gây giãn nhanh chóng cơ trơn khí phế quản tức thì như hoạt chất Adrenalin tiêm bắp",
      "Phòng ngừa và xử trí phản ứng phản vệ pha 2 (pha muộn xuất hiện sau 4 - 8 giờ)",
      "Làm tăng vọt ngay lập tức chỉ số huyết áp tâm thu của người bệnh trong vòng 30 giây",
      "Làm dịu hệ thần kinh trung ương và giải tỏa hoàn toàn cảm giác lo âu hoảng sợ của bệnh nhân"
    ],
    correct: 1
  },
  512: { // ID 512, c: 3
    options: [
      "Vùng da dày ở mặt ngoài khớp khuỷu tay và khớp gối có tổn thương mảng sừng dày",
      "Vùng da lưng dày và mặt ngoài cẳng tay cẳng chân ở người trưởng thành khỏe mạnh",
      "Vùng da dày sừng ở lòng bàn tay và lòng bàn chân chịu lực tỳ đè khi lao động",
      "Vùng da mặt, vùng mí mắt, vùng nếp gấp kẽ bẹn nách và vùng niêm mạc sinh dục"
    ],
    correct: 3
  },
  514: { // ID 514, c: 1
    options: [
      "Khởi phát cơn đau thắt ngực kịch phát không ổn định kèm theo biến đổi đoạn ST chênh lên",
      "Sốt nhẹ, đau mỏi cơ khớp, mệt mỏi suy nhược dù cortisol máu đã hồi phục bình thường",
      "Xuất huyết niêm mạc bàng quang cấp tính gây ra triệu chứng đái buốt đái rắt và đái máu",
      "Đục mờ giác mạc hai mắt tiến triển nhanh dẫn đến mất thị lực đột ngột sau khi ngừng thuốc"
    ],
    correct: 1
  },
  515: { // ID 515, c: 2
    options: [
      "Chuyển sang sử dụng dạng thuốc bột sủi bọt hòa tan hoàn toàn trong nước trước khi uống",
      "Uống viên thuốc vào sáng sớm lúc bụng hoàn toàn trống rỗng để tối ưu hóa sinh khả dụng",
      "Uống cùng hoặc ngay sau bữa ăn và phối hợp bắt buộc với thuốc ức chế bơm proton (PPI)",
      "Bẻ đôi viên nén uống một nửa vào buổi sáng và một nửa còn lại uống ngay trước khi đi ngủ"
    ],
    correct: 2
  },
  516: { // ID 516, c: 3
    options: [
      "Ức chế hoạt tính xúc tác của enzym Carbonic anhydrase tại ống lượn gần của tiểu cầu thận",
      "Ức chế enzym Cholin acetyltransferase tại các synap thần kinh giao cảm và phó giao cảm",
      "Ức chế enzym Tyrosin hydroxylase ở thân não ngăn chặn quá trình sinh tổng hợp dopamin",
      "Ức chế biểu hiện gen tổng hợp enzym Cyclooxygenase-2 (COX-2) cảm ứng tại ổ viêm"
    ],
    correct: 3
  },
  517: { // ID 517, c: 0
    options: [
      "Trẻ em khi giảm liều hoặc ngừng thuốc Glucocorticoid quá nhanh và đột ngột",
      "Vận động viên thể hình chuyên nghiệp tập luyện với cường độ thể lực cao ngắt quãng",
      "Người cao tuổi mắc bệnh lý đái tháo đường typ 2 có biến chứng xơ vữa mạch máu ngoại vi",
      "Phụ nữ sau khi sinh con được 6 tháng và đang trong giai đoạn cho con bú hoàn toàn"
    ],
    correct: 0
  },
  519: { // ID 519, c: 2
    options: [
      "Chỉ đưa vào phác đồ điều trị sau khi bệnh nhân đã được truyền kháng sinh đủ 48 giờ",
      "Chỉ bắt đầu sử dụng khi bệnh nhân đã hoàn toàn cắt cơn sốt và tỉnh táo tiếp xúc tốt",
      "Dùng trước 10 - 20 phút hoặc dùng đồng thời cùng lúc với liều kháng sinh đầu tiên",
      "Đưa vào phác đồ vào ngày thứ 7 của đợt điều trị khi có kết quả cấy dịch não tủy"
    ],
    correct: 2
  },
  522: { // ID 522, c: 1
    options: [
      "Thời gian điều trị bằng thuốc corticoid đường toàn thân kéo dài dưới 180 ngày",
      "Thời gian điều trị liên tục dưới 14 ngày (thường ít gây ức chế trục HPA kéo dài)",
      "Thời gian dùng thuốc ngắt quãng từng đợt kéo dài dưới 60 ngày điều trị tích cực",
      "Thời gian điều trị duy trì liều giảm dần kéo dài dưới 90 ngày theo dõi ngoại trú"
    ],
    correct: 1
  },
  524: { // ID 524, c: 3
    options: [
      "Vì Glucocorticoid hoàn toàn không có bất kỳ tác dụng nào trên trung tâm điều nhiệt hành não",
      "Vì thuốc làm thân nhiệt của người bệnh tụt kẹp xuống dưới 30°C dẫn đến ngừng tim nguy kịch",
      "Vì hoạt chất corticoid làm phá hủy và mất hoàn toàn hoạt tính diệt khuẩn của các loại kháng sinh",
      "Che lấp triệu chứng nhiễm trùng, suy giảm miễn dịch và gây nhiều tác dụng phụ nguy hiểm"
    ],
    correct: 3
  },
  525: { // ID 525, c: 0
    options: [
      "Transcortin hay Globulin gắn Corticosteroid (CBG) có ái lực rất cao với Cortisol",
      "Alpha-1 acid glycoprotein trong huyết tương chủ yếu gắn các thuốc mang tính kiềm yếu",
      "Fibrinogen hòa tan trong tuần hoàn tham gia vào quá trình hình thành cục máu đông",
      "Albumin huyết thanh đơn thuần chỉ gắn kết với Cortisol khi nồng độ thuốc vượt ngưỡng CBG"
    ],
    correct: 0
  },
  526: { // ID 526, c: 1
    options: [
      "Thuốc gây mê đường hít phối hợp với thuốc giãn cơ không khử cực trong phòng phẫu thuật",
      "Thuốc giảm đau không Opioid như Paracetamol hoặc thuốc NSAID có/không kèm thuốc bổ trợ",
      "Các dẫn chất Opioid mạnh đường tiêm truyền như Morphin sulfat hoặc Fentanyl liều cao",
      "Các dẫn chất Opioid yếu dùng đường uống như Codein phosphat hoặc Tramadol hydroclorid"
    ],
    correct: 1
  },
  528: { // ID 528, c: 3
    options: [
      "Đau cơ do mệt mỏi sau lao động nặng, ưu tiên sử dụng Paracetamol đường uống liều thấp",
      "Đau răng thông thường do sâu răng nhẹ, chỉ định dùng Aspirin đơn độc trong vài ngày",
      "Đau đầu do căng thẳng tâm lý, ưu tiên sử dụng các thuốc an thần giải lo âu nhóm benzodiazepin",
      "Đau mức độ nặng và dữ dội, sử dụng các thuốc Opioid mạnh như Morphin, Fentanyl, Oxycodon"
    ],
    correct: 3
  },
  530: { // ID 530, c: 1
    options: [
      "Acid para-aminobenzoic sinh ra từ quá trình thoái hóa phân tử thuốc trong ruột non",
      "N-acetyl-p-benzoquinone imine (NAPQI) gây cạn kiệt Glutathion dẫn đến hoại tử tế bào gan",
      "Acid salicylic tự do khuếch tán vào dịch nội bào phá vỡ màng ty thể của tế bào gan",
      "Chất liên hợp glucuronic không tan tích tụ tại các vi quản mật gây viêm ứ mật cấp"
    ],
    correct: 1
  },
  531: { // ID 531, c: 2
    options: [
      "Sau 7 ngày kể từ khi uống thuốc khi các chỉ số men gan đã tăng vọt lên hàng nghìn đơn vị",
      "Sau 48 giờ kể từ khi xuất hiện triệu chứng vàng da vàng mắt và rối loạn đông máu bùng phát",
      "Trong vòng 8 đến 10 giờ đầu sau khi uống quá liều Paracetamol (trước khi NAPQI phá hủy gan)",
      "Chỉ bắt đầu sử dụng khi người bệnh đã rơi vào trạng thái tiền hôn mê hoặc hôn mê gan sâu"
    ],
    correct: 2
  },
  532: { // ID 532, c: 3
    options: [
      "Paracetamol có hoạt tính chống viêm mạnh mẽ vượt trội hơn nhiều so với Aspirin liều cao",
      "Paracetamol có nguy cơ gây loét và xuất huyết dạ dày tá tràng nặng nề hơn các thuốc NSAID",
      "Paracetamol gây co thắt khí phế quản cấp tính trên tất cả mọi đối tượng bệnh nhân sử dụng",
      "Paracetamol hầu như không có tác dụng chống viêm và không ức chế kết tập tiểu cầu"
    ],
    correct: 3
  },
  534: { // ID 534, c: 1
    options: [
      "Tham gia tiêu diệt trực tiếp các vi khuẩn gây bệnh xâm nhập vào dòng máu tuần hoàn",
      "Bảo vệ niêm mạc dạ dày (PGE2, PGI2), duy trì tưới máu thận và điều hòa chức năng tiểu cầu",
      "Kích thích trung tâm điều nhiệt gây sốt cao và khởi phát cảm giác đau cấp tính tại mô",
      "Xúc tác phản ứng tiêu hủy các cục máu đông hình thành bất thường trong lòng mạch máu"
    ],
    correct: 1
  },
  536: { // ID 536, c: 3
    options: [
      "Có thể sử dụng an toàn tuyệt đối cho người bệnh suy tim phân suất tống máu giảm nặng",
      "Làm giảm hoàn toàn nguy cơ xuất hiện các biến cố huyết khối tim mạch như nhồi máu cơ tim",
      "Hoàn toàn không gây ra bất kỳ tác dụng phụ nào trên chức năng lọc cầu thận và huyết áp",
      "Giảm đáng kể nguy cơ viêm loét và biến chứng xuất huyết đường tiêu hóa so với NSAID cổ điển"
    ],
    correct: 3
  },
  537: { // ID 537, c: 0
    options: [
      "Biến cố tim mạch do huyết khối như nhồi máu cơ tim và đột quỵ thiếu máu cục bộ",
      "Suy tủy xương cấp tính làm mất hoàn toàn dòng hồng cầu dẫn đến thiếu máu bất sản",
      "Viêm xơ đường mật tiên phát dẫn đến tắc nghẽn hoàn toàn đường bài xuất dịch mật",
      "Tổn thương tế bào thính giác gây điếc tiếp nhận thần kinh không thể phục hồi hai bên"
    ],
    correct: 0
  },
  538: { // ID 538, c: 1
    options: [
      "Chống viêm tế bào cơ tim cấp tính do các chủng enterovirus gây tổn thương buồng tim",
      "Chống kết tập tiểu cầu không hồi phục để dự phòng tiên phát và thứ phát biến cố tim mạch",
      "Giảm đau nhức và chống sưng nề màng hoạt dịch khớp gối do bệnh lý thoái hóa khớp già",
      "Hạ nhiệt nhanh chóng và dập tắt triệu chứng trong các cơn sốt cao ác tính ở trẻ nhỏ"
    ],
    correct: 1
  },
  539: { // ID 539, c: 2
    options: [
      "Vì tủy xương bị ức chế tạm thời ngừng hoàn toàn quá trình sinh sản các tế bào tiểu cầu mới",
      "Vì nồng độ Aspirin tự do duy trì ổn định trong huyết tương suốt toàn bộ đời sống tiểu cầu",
      "Tiểu cầu không có nhân để tổng hợp mới COX-1, bị bất hoạt vĩnh viễn suốt đời sống 7 - 10 ngày",
      "Vì phân tử Aspirin gắn kết phá hủy hoàn toàn cấu trúc màng lipid kép của tế bào tiểu cầu"
    ],
    correct: 2
  },
  540: { // ID 540, c: 3
    options: [
      "Dùng đồng thời hai loại thuốc NSAID khác nhau cùng lúc để giảm bớt liều dùng từng loại",
      "Dùng Indomethacin liều tối đa kết hợp uống kèm nước chanh đậm đặc để tăng hấp thu",
      "Dùng Aspirin liều cao chống viêm và chuyển thời điểm uống thuốc vào ban đêm trước ngủ",
      "Chọn NSAID ức chế chọn lọc COX-2 phối hợp bắt buộc với thuốc ức chế bơm proton (PPI)"
    ],
    correct: 3
  },
  541: { // ID 541, c: 0
    options: [
      "PGE2 và PGI2 gây co tiểu động mạch đến của cầu thận làm giảm mức lọc cầu thận GFR",
      "Leukotrien B4 làm tăng tính thấm thành mạch và kích hoạt viêm màng đáy cầu thận cấp",
      "Prostaglandin F2-alpha gây co thắt hệ thống ống thu thập tại tủy thận làm giảm bài niệu",
      "Thromboxan A2 gây giãn rộng các mao mạch cầu thận làm tăng áp lực lọc cầu thận đột ngột"
    ],
    correct: 0
  },
  544: { // ID 544, c: 3
    options: [
      "Mất trí nhớ toàn bộ thoáng qua, liệt nửa người và xuất huyết đường tiêu hóa trên ồ ạt",
      "Tăng huyết áp kịch phát ác tính, tiêu chảy phân nước xối xả và run giật cơ toàn thân",
      "Sốt cao co giật toàn thể, thở nhanh nông và giãn to đồng tử hai bên mất phản xạ ánh sáng",
      "Hôn mê ức chế thần kinh trung ương, ức chế hô hấp (thở chậm) và co đồng tử như đầu đinh ghim"
    ],
    correct: 3
  },
  548: { // ID 548, c: 3
    options: [
      "Chỉ định giảm đau tức thì sau các thủ thuật ngoại khoa nhổ răng thông thường tại phòng khám",
      "Dùng cấp cứu cắt các cơn đau quặn thận hoặc đau quặn gan cấp tính dữ dội tại khoa cấp cứu",
      "Dùng hạ sốt và giảm đau trong các bệnh lý nhiễm virus cấp tính như sốt xuất huyết Dengue",
      "Chỉ dùng cho đau mạn tính liên tục (như đau ung thư) ở bệnh nhân đã dung nạp với Opioid"
    ],
    correct: 3
  },
  550: { // ID 550, c: 1
    options: [
      "Chất chuyển hóa Morphin-6-glucuronid tích lũy gây ức chế hô hấp sâu sắc ở người bệnh",
      "Chất chuyển hóa Normeperidin tích lũy gây kích thích thần kinh trung ương, run cơ và co giật",
      "Chất N-acetylcystein tích lũy quá mức làm hủy hoại tế bào nhu mô gan dẫn đến suy gan",
      "Chất chuyển hóa acid mefenamic gây viêm trợt và thủng tạng rỗng đường tiêu hóa cấp"
    ],
    correct: 1
  },
  551: { // ID 551, c: 2
    options: [
      "Kích thích chọn lọc thụ thể GABA-A và đối kháng cạnh tranh trên thụ thể Dopamin D2 não",
      "Chẹn kênh Natri phụ thuộc điện thế và ngăn cản dòng Canxi đi vào tế bào thần kinh tủy sống",
      "Chủ vận yếu trên thụ thể Mu-opioid và ức chế tái hấp thu Noradrenalin cùng Serotonin",
      "Ức chế đồng thời cả hai enzym Cyclooxygenase-1 và Phospholipase A2 tại vị trí tổn thương"
    ],
    correct: 2
  },
  554: { // ID 554, c: 1
    options: [
      "Chỉ xuất hiện phản ứng dị ứng nổi mẩn ngứa mày đay nhẹ thoáng qua ngoài bề mặt da",
      "Chuyển hóa nhanh thành Morphin gây ngộ độc với hôn mê, ức chế hô hấp đe dọa tính mạng",
      "Kết tinh tạo sỏi tinh thể acid uric cấp tính tại đài bể thận gây cơn đau quặn thận dữ dội",
      "Làm mất hoàn toàn tác dụng giảm đau của Codein khiến bệnh nhân vẫn đau đớn không giảm"
    ],
    correct: 1
  },
  556: { // ID 556, c: 3
    options: [
      "Viêm loét dạ dày tá tràng tiến triển, trào ngược dạ dày thực quản và ho khan kéo dài",
      "Viêm xoang sàng hàm cấp tính mủ, thủng màng nhĩ hai bên và điếc tiếp nhận thần kinh",
      "Nổi mày đay dị ứng mạn tính, sốt rét run từng cơn và hội chứng vàng da ứ mật tại gan",
      "Hen phế quản mạn tính, polyp mũi xoang tái phát và nhạy cảm dị ứng với Aspirin cùng NSAID"
    ],
    correct: 3
  },
  557: { // ID 557, c: 0
    options: [
      "Ứ trệ muối nước dẫn đến đợt cấp suy tim mất bù và giảm đáp ứng với thuốc lợi tiểu",
      "Khởi phát cơn bão giáp trạng cấp tính làm tăng chuyển hóa cơ bản đe dọa trực tiếp tính mạng",
      "Làm tan hoàn toàn các cục huyết khối bám thành trong buồng tâm nhĩ gây tắc mạch hệ thống",
      "Ức chế nút xoang làm nhịp tim chậm xoang nghiêm trọng dưới 30 lần/phút gây tụt huyết áp"
    ],
    correct: 0
  },
  560: { // ID 560, c: 3
    options: [
      "Táo bón dữ dội kéo dài kèm theo cảm giác khô miệng và bí tiểu tiện hoàn toàn cấp tính",
      "Hôn mê sâu ức chế thần kinh, nhịp thở chậm sâu ngắt quãng và co nhỏ đồng tử tối đa",
      "Hạ thân nhiệt sâu dưới 34°C và tụt huyết áp kịch phát dẫn đến sốc trụy mạch tuần hoàn",
      "Ngáp, chảy nước mắt mũi, nổi da gà, giãn đồng tử, vã mồ hôi, tiêu chảy và đau mỏi cơ bắp"
    ],
    correct: 3
  },
  561: { // ID 561, c: 0
    options: [
      "Đau thần kinh mạn tính (đau sau zona, đau do đái tháo đường) và dự phòng đau Migraine",
      "Chống phù nề mô mềm sau các phẫu thuật can thiệp chấn thương chỉnh hình chi dưới",
      "Cấp cứu cắt cơn đau quặn mật dữ dội do sỏi kẹt cổ túi mật tại khoa hồi sức cấp cứu",
      "Hạ nhiệt nhanh và cắt cơn co giật do sốt cao ở trẻ nhỏ lứa tuổi nhà trẻ mẫu giáo"
    ],
    correct: 0
  },
  563: { // ID 563, c: 2
    options: [
      "Chỉ tiêm thuốc giảm đau khi bệnh nhân đau đớn dữ dội khóc lóc kêu la tại giường bệnh",
      "Hạn chế tối đa việc sử dụng Opioid vì lo ngại bệnh nhân bị nghiện thuốc và lệ thuộc thuốc",
      "Dùng thuốc đều đặn theo giờ cố định để đón đầu cơn đau, không chờ đến khi đau mới uống",
      "Chỉ sử dụng một liều duy nhất vào buổi tối trước khi đi ngủ bất kể mức độ đau ban ngày"
    ],
    correct: 2
  },
  564: { // ID 564, c: 3
    options: [
      "Chủ động tăng liều miếng dán giảm đau thẩm thấu qua da Fentanyl lên gấp 3 lần liều cũ",
      "Chuyển sang tiêm bắp dung dịch nước cất vô trùng để tạo phản ứng tâm lý trấn an người bệnh",
      "Bắt buộc người bệnh phải nhịn ăn uống tuyệt đối trong suốt thời gian diễn ra cơn đau",
      "Dùng thêm liều Opioid tác dụng nhanh, giải phóng tức thì (thường bằng 10-1/6 tổng liều 24h)"
    ],
    correct: 3
  },
  566: { // ID 566, c: 1
    options: [
      "Cho bệnh nhân uống dung dịch dầu khoáng đậm đặc trước các bữa ăn chính trong ngày",
      "Thuốc nhuận tràng kích thích (như Senna, Bisacodyl) phối hợp thuốc làm mềm phân",
      "Chỉ định thụt tháo đại tràng định kỳ hàng ngày bằng dung dịch nước muối sinh lý ấm",
      "Chỉ cần bổ sung các chế phẩm men vi sinh sống hỗ trợ cân bằng hệ vi khuẩn đường ruột"
    ],
    correct: 1
  },
  567: { // ID 567, c: 2
    options: [
      "Là chất chuyển hóa hoàn toàn mất hoạt tính sinh học và nhanh chóng bài xuất qua phân",
      "Lắng đọng dưới biểu bì da gây biến đổi màu sắc da chuyển sang màu vàng chanh sẫm",
      "Có hoạt tính giảm đau mạnh và tích lũy ở bệnh nhân suy thận gây ức chế hô hấp sâu sắc",
      "Bị đào thải hoàn toàn qua đường hô hấp theo khí thở ra mà không phụ thuộc chức năng thận"
    ],
    correct: 2
  },
  568: { // ID 568, c: 3
    options: [
      "Không hề bị chuyển hóa qua gan mật mà bài xuất nguyên vẹn 100% theo dịch nước tiểu",
      "Hoàn toàn không gây ra bất kỳ tình trạng phụ thuộc thuốc hay hội chứng cai nào khi ngừng",
      "Thời gian bán thải cực dài cho phép chỉ cần sử dụng một liều duy nhất mỗi tháng một lần",
      "T1/2 dài, có tác dụng đối kháng thụ thể NMDA và ức chế tái hấp thu monoamin giảm đau thần kinh"
    ],
    correct: 3
  },
  570: { // ID 570, c: 1
    options: [
      "Naloxon làm gia tăng tốc độ và mức độ hấp thu của Oxycodon qua biểu mô ruột non",
      "Naloxon đối kháng tác dụng gây táo bón tại ruột và làm mất tác dụng nếu nghiền để tiêm",
      "Naloxon ức chế enzym CYP3A4 tại gan làm kéo dài thời gian bán thải của phân tử Oxycodon",
      "Naloxon hiệp đồng làm tăng tác dụng an thần gây ngủ và giãn cơ vân của thuốc giảm đau"
    ],
    correct: 1
  },
  571: { // ID 571, c: 2
    options: [
      "Bệnh nhân có biểu hiện thèm muốn mãnh liệt và tìm kiếm thuốc để thỏa mãn khoái cảm",
      "Bệnh nhân xuất hiện các cơn co giật cục bộ hoặc toàn thể mỗi khi uống thuốc giảm đau",
      "Hiện tượng cần phải tăng liều thuốc dần theo thời gian để đạt được hiệu quả giảm đau tương đương",
      "Thuốc kích hoạt phản ứng giải phóng histamin gây sốc phản vệ dữ dội đe dọa tính mạng"
    ],
    correct: 2
  },
  572: { // ID 572, c: 3
    options: [
      "Xuất hiện các vết loét trợt sâu và chảy máu tại niêm mạc khoang miệng sau khi dùng thuốc",
      "Bệnh nhân có biểu hiện nói lảm nhảm hoang tưởng và mất kiểm soát hành vi sau khi uống thuốc",
      "Nồng độ đường máu gia tăng đột biến không kiểm soát được dẫn đến hôn mê nhiễm toan ceton",
      "Xuất hiện hội chứng cai đặc trưng khi ngừng thuốc đột ngột hoặc dùng chất đối kháng thụ thể"
    ],
    correct: 3
  },
  573: { // ID 573, c: 0
    options: [
      "Morphin kích thích trực tiếp tế bào mast giải phóng Histamin không qua kháng thể IgE",
      "Nhiễm khuẩn huyết cấp tính do dung dịch thuốc tiêm truyền bị tạp nhiễm vi sinh vật lạ",
      "Phản ứng quá mẫn typ I thực sự qua trung gian kháng thể IgE đặc hiệu chống phân tử Morphin",
      "Kết tinh sỏi tinh thể Morphin sulfat bên trong các vi mao mạch ngoại vi tại lớp biểu bì da"
    ],
    correct: 0
  },
  574: { // ID 574, c: 1
    options: [
      "Kích thích trung tâm hô hấp ở trẻ sơ sinh bị các cơn ngừng thở sinh lý kéo dài",
      "Đóng ống động mạch còn mở (PDA) ở trẻ sinh non thiếu tháng có rối loạn huyết động",
      "Điều trị hội chứng vàng da sơ sinh bẩm sinh do tăng bilirubin gián tiếp tự do trong máu",
      "Kích thích co hồi cơ tử cung gây chuyển dạ đẻ ở các trường hợp thai quá ngày sinh"
    ],
    correct: 1
  },
  575: { // ID 575, c: 2
    options: [
      "Aspirin gây tổn thương viêm hoại tử loét sâu ở đầu ngón chân cái của người bệnh gút",
      "Aspirin kích thích tế bào gan gia tăng tổng hợp các hợp chất purin nội sinh trong cơ thể",
      "Aspirin liều thấp cạnh tranh ức chế bài tiết acid uric tại ống thận làm tăng acid uric máu",
      "Aspirin làm hòa tan ồ ạt các tinh thể urat tại ổ khớp gây nhiễm độc toàn thân nguy kịch"
    ],
    correct: 2
  },
  578: { // ID 578, c: 1
    options: [
      "Mù lòa hoàn toàn hai mắt do teo gai thị giác cấp tính ngay trong giai đoạn khởi phát",
      "Bệnh quáng gà biểu hiện bằng suy giảm thị lực rõ rệt trong điều kiện ánh sáng yếu",
      "Xuất huyết tiền phòng mắt và tăng nhãn áp kịch phát dẫn đến mất thị lực vĩnh viễn",
      "Viêm phù nề dây thần kinh thị giác hai bên mắt kèm theo đau nhức hốc mắt dữ dội"
    ],
    correct: 1
  },
  579: { // ID 579, c: 2
    options: [
      "Làm cho người mẹ mang thai bị rụng toàn bộ lông tóc trên cơ thể không thể hồi phục",
      "Kích thích buồng trứng rụng nhiều noãn dẫn đến hiện tượng đẻ non sinh đôi cùng trứng",
      "Gây quái thai dị tật bẩm sinh nghiêm trọng ở sọ mặt, hệ thần kinh và tim mạch thai nhi",
      "Kích thích mầm răng phát triển bất thường khiến trẻ sơ sinh mọc đủ răng trước khi chào đời"
    ],
    correct: 2
  },
  580: { // ID 580, c: 3
    options: [
      "Cholecalciferol (Vitamin D3) được tổng hợp dưới da dưới tác động của tia cực tím",
      "25-hydroxycholecalciferol (Calcidiol) được tổng hợp chủ yếu qua enzym tại tế bào gan",
      "Ergocalciferol (Vitamin D2) có nguồn gốc tự nhiên từ các loài nấm và thực vật",
      "1,25-dihydroxycholecalciferol (Calcitriol) là dạng hoạt tính sinh học trực tiếp tại thận"
    ],
    correct: 3
  },
  582: { // ID 582, c: 1
    options: [
      "Làm giảm mạnh nồng độ ion Calci và ion Phosphat tự do trong lòng mạch huyết tương",
      "Tăng hấp thu Canxi và Phosphat tại ruột non, tăng tái hấp thu ở thận và khoáng hóa xương",
      "Ức chế hoạt động của nguyên bào xương làm ngừng quá trình khoáng hóa chất nền xương non",
      "Thúc đẩy tế bào biểu mô ống thận tăng bài tiết Canxi qua nước tiểu để thanh lọc máu"
    ],
    correct: 1
  },
  583: { // ID 583, c: 2
    options: [
      "Bệnh lý viêm khớp dạng thấp thiếu niên tự miễn phá hủy sụn khớp ở các khớp vận động",
      "Bệnh xương thủy tinh bẩm sinh tạo xương bất toàn do đột biến gen tổng hợp collagen typ 1",
      "Bệnh còi xương ở trẻ em với biến dạng xương sọ, chuỗi hạt sườn và chân vòng kiềng chữ X, O",
      "Bệnh xơ cứng cột bên teo cơ dẫn đến thoái hóa nơron vận động và teo cơ tiến triển nhanh"
    ],
    correct: 2
  },
  585: { // ID 585, c: 0
    options: [
      "Tiêm bắp một liều duy nhất Vitamin K1 ngay sau sinh để phòng xuất huyết não màng não",
      "Cho trẻ uống dung dịch Vitamin K1 đều đặn hàng ngày liên tục trong suốt năm đầu đời",
      "Cho người mẹ mang thai uống Vitamin K liều cao trước cuộc chuyển dạ đẻ khoảng 1 tháng",
      "Tiêm truyền tĩnh mạch dự phòng huyết tương tươi đông lạnh cho tất cả trẻ sơ sinh đủ tháng"
    ],
    correct: 0
  },
  586: { // ID 586, c: 1
    options: [
      "Dung dịch tiêm truyền Natri clorid 0,9% đẳng trương truyền tĩnh mạch tốc độ nhanh",
      "Vitamin K1 (Phytomenadion) đường tiêm tĩnh mạch chậm hoặc đường uống tùy mức độ INR",
      "Vitamin C dạng dung dịch tiêm truyền tĩnh mạch liều cao để tăng cường sức bền thành mạch",
      "Dung dịch Glucose ưu trương 20% tiêm truyền tĩnh mạch để phục hồi năng lượng tế bào gan"
    ],
    correct: 1
  },
  587: { // ID 587, c: 2
    options: [
      "Hội chứng Guillain-Barré liệt vận động đối xứng hai bên tiến triển từ ngọn chi lên",
      "Bệnh lý thoái hóa myelin đa xơ cứng rải rác trong hệ thống thần kinh trung ương",
      "Hội chứng não Wernicke (lú lẫn, thất điều, liệt vận nhãn) và loạn thần Korsakoff",
      "Bệnh lý thoái hóa thoái triển Parkinson thể run vô căn ở người cao tuổi nghiện rượu"
    ],
    correct: 2
  },
  588: { // ID 588, c: 3
    options: [
      "Để phòng ngừa hiện tượng dị ứng sốc phản vệ cấp tính đối với dung dịch đường Glucose",
      "Để làm giảm bớt áp lực thẩm thấu nội mạch của dung dịch Glucose ưu trương tiêm truyền",
      "Để kích hoạt các enzym tiêu hóa làm gia tăng tốc độ thoái biến phân tử Glucose trong máu",
      "Tránh cạn kiệt Thiamin do chuyển hóa glucose, ngăn khởi phát cấp hội chứng não Wernicke"
    ],
    correct: 3
  },
  589: { // ID 589, c: 0
    options: [
      "Vitamin B3 (Niacin, Acid nicotinic) tham gia cấu tạo nên các coenzym NAD+ và NADP+",
      "Vitamin B1 (Thiamin) tham gia phản ứng khử carboxyl oxy hóa của các acid alpha-ceto",
      "Vitamin B5 (Acid pantothenic) là thành phần cấu tạo thiết yếu của coenzym A vận chuyển acyl",
      "Vitamin B2 (Riboflavin) là tiền chất tổng hợp nên các coenzym FAD và FMN hô hấp tế bào"
    ],
    correct: 0
  },
  592: { // ID 592, c: 3
    options: [
      "Bệnh lý thiếu máu bất sản tủy xương toàn bộ làm suy giảm đồng thời cả ba dòng tế bào máu",
      "Thiếu máu tan máu tự miễn do kháng thể kháng hồng cầu phá hủy màng hồng cầu trong lách",
      "Thiếu máu hồng cầu nhỏ nhược sắc do cạn kiệt nguồn sắt dự trữ ferritin trong cơ thể",
      "Thiếu máu hồng cầu to khổng lồ (Megaloblastic anemia) kèm thoái hóa kết hợp tủy sống"
    ],
    correct: 3
  },
  594: { // ID 594, c: 1
    options: [
      "Dị tật teo hẹp thực quản bẩm sinh kèm theo rò khí thực quản phát hiện ngay sau khi sinh",
      "Dị tật khuyết tật ống thần kinh thai nhi như tật nứt đốt sống (Spina bifida) và vô sọ",
      "Dị tật thông liên thất tim bẩm sinh đơn thuần có luồng thông trái - phải qua vách liên thất",
      "Dị tật bàn chân khoèo bẩm sinh do tư thế chèn ép của thai trong buồng ối người mẹ"
    ],
    correct: 1
  },
  595: { // ID 595, c: 2
    options: [
      "Thiếu hụt Acid Folic làm tăng nồng độ sắt tự do hòa tan trong huyết tương người bệnh",
      "Thiếu hụt Acid Folic biểu hiện bằng bệnh cảnh thiếu máu hồng cầu nhỏ nhược sắc điển hình",
      "Thiếu Acid Folic không gây tổn thương thoái hóa thần kinh như trong thiếu hụt Vitamin B12",
      "Thiếu hụt Acid Folic chỉ xuất hiện ở đối tượng người cao tuổi có tình trạng teo cơ nặng"
    ],
    correct: 2
  },
  596: { // ID 596, c: 3
    options: [
      "Khởi phát phản ứng tan máu ồ ạt trong lòng mạch dẫn đến đái ra huyết sắc tố đen sẫm",
      "Làm mất hoàn toàn trí nhớ ngắn hạn và trí nhớ dài hạn trong vòng 24 giờ sau khi uống",
      "Gây cơn suy tim cấp tính ứ trệ tuần hoàn dẫn đến phù phổi cấp đe dọa tính mạng người bệnh",
      "Khắc phục được tình trạng thiếu máu nhưng làm tổn thương thoái hóa thần kinh nặng thêm"
    ],
    correct: 3
  },
  597: { // ID 597, c: 0
    options: [
      "Hydroxyl hóa gốc Prolin và Lysin trong quá trình sinh tổng hợp sợi Collagen",
      "Phosphoryl hóa phân tử đường Glucose để tạo thành glucose-6-phosphat đi vào đường phân",
      "Oxy hóa các acid béo chuỗi dài bên trong ty thể tế bào để giải phóng năng lượng ATP",
      "Khử nhóm carboxyl của phân tử acid glutamic để tổng hợp chất dẫn truyền thần kinh GABA"
    ],
    correct: 0
  },
  599: { // ID 599, c: 2
    options: [
      "Tạo phức hợp chelat không tan giúp đào thải nhanh chóng lượng sắt dư thừa ra ngoài theo phân",
      "Ức chế hoàn toàn enzym chuyển hóa tại gan giúp phân tử sắt không bị biến đổi khi hấp thu",
      "Khử sắt Fe3+ thành Fe2+ dễ hòa tan hơn giúp tăng cường hấp thu sắt qua niêm mạc ruột non",
      "Làm kiềm hóa môi trường dịch vị dạ dày giúp viên sắt không bị phân hủy bởi acid clohydric"
    ],
    correct: 2
  },
  600: { // ID 600, c: 3
    options: [
      "Sỏi thận Struvit (Magnesi amoni phosphat) hình thành do nhiễm khuẩn tiết niệu sinh urease",
      "Sỏi thận Acid Uric hình thành do tình trạng tăng thoái giáng acid nucleic và purin kéo dài",
      "Sỏi thận Cystin hình thành do rối loạn di truyền trong quá trình tái hấp thu acid amin tại thận",
      "Sỏi thận Calci Oxalat do Vitamin C chuyển hóa thành acid oxalic kết hợp với canxi niệu"
    ],
    correct: 3
  },
  601: { // ID 601, c: 0
    options: [
      "Uống lúc đói (trước ăn 1 giờ hoặc sau ăn 2 giờ) kèm nước cam giàu vitamin C hoặc nước lọc",
      "Uống cùng lúc với một ấm trà xanh đặc đậm đặc để giảm cảm giác kích ứng buồn nôn dạ dày",
      "Uống chung với một ly sữa tươi đầy giàu canxi để bổ sung đồng thời cả sắt và canxi cho cơ thể",
      "Uống ngay sau khi vừa ăn no một bữa ăn thịnh soạn chứa nhiều dầu mỡ và chất béo động vật"
    ],
    correct: 0
  },
  603: { // ID 603, c: 2
    options: [
      "Hấp thu tối ưu nhất vào lúc sáng sớm khi dạ dày hoàn toàn trống rỗng không có thức ăn",
      "Nên nhai nát viên thuốc cùng lúc với các loại kháng sinh nhóm tetracyclin hoặc quinolon",
      "Cần acid dạ dày để hòa tan nên uống cùng hoặc ngay sau ăn (người dùng PPI nên chọn Canxi citrat)",
      "Tuyệt đối không bao giờ có nguy cơ gây lắng đọng sỏi thận dù sử dụng với hàm lượng liều cao"
    ],
    correct: 2
  },
  604: { // ID 604, c: 3
    options: [
      "Chỉ đóng vai trò duy nhất trong việc điều hòa làm chậm nhịp tim đập của hệ thống dẫn truyền",
      "Chỉ tham gia vào cơ chế bài tiết nước tiểu và điều hòa tái hấp thu natri tại quai Henle của thận",
      "Chỉ tham gia vào cấu trúc gắn kết của phân tử huyết sắc tố vận chuyển oxy trong hồng cầu",
      "Hơn 300 enzym, tổng hợp protein, phân chia tế bào, miễn dịch và làm lành vết thương"
    ],
    correct: 3
  },
  605: { // ID 605, c: 0
    options: [
      "Chậm lớn, biếng ăn, giảm miễn dịch, tiêu chảy kéo dài và viêm da đầu chi hốc tự nhiên",
      "Tổn thương tế bào lông ốc tai dẫn đến suy giảm thính lực và điếc tiếp nhận thần kinh bẩm sinh",
      "Răng phát triển bất thường mọc lộn xộn thành nhiều hàng và biến dạng cấu trúc hàm dưới",
      "Kích thích trung tâm thèm ăn gây tăng cân đột biến dẫn đến béo phì bệnh lý mức độ nặng"
    ],
    correct: 0
  },
  607: { // ID 607, c: 2
    options: [
      "Làm giảm hoàn toàn trương lực của tất cả các nhóm cơ vân dẫn đến liệt mềm ngoại biên",
      "Mất hoàn toàn các phản xạ gân xương sâu và liệt cơ hô hấp đòi hỏi phải thở máy hỗ trợ",
      "Tăng tính kích thích thần kinh cơ, run cơ, chuột rút, cơn co cứng tetani và loạn nhịp tim",
      "Hôn mê sâu li bì mất hoàn toàn phản xạ bảo vệ và không có bất kỳ đáp ứng nào với kích thích đau"
    ],
    correct: 2
  },
  608: { // ID 608, c: 3
    options: [
      "Tăng cường hoạt tính bài tiết của ống thận giúp đào thải nhanh acid uric ra ngoài cơ thể",
      "Kích thích tủy xương tăng sinh tế bào tiểu cầu và hoạt hóa quá trình đông máu ngăn xuất huyết",
      "Kích thích sự phân chia và kéo dài của các tế bào sụn tiếp hợp ở các đầu xương dài của chi",
      "Chất chống oxy hóa tan trong dầu, bảo vệ màng tế bào khỏi tổn thương do các gốc tự do"
    ],
    correct: 3
  },
  609: { // ID 609, c: 0
    options: [
      "Tăng nguy cơ xuất huyết do liều cao Vitamin E đối kháng với tác dụng của Vitamin K",
      "Gây viêm loét và thủng thực quản cấp tính do viên nang thuốc bị dính vào niêm mạc thực quản",
      "Gây teo nang lông dẫn đến rụng toàn bộ lông mày và lông mi của người bệnh sử dụng thuốc",
      "Kích thích lắng đọng sỏi thận struvit có kích thước khổng lồ hình san hô trong đài bể thận"
    ],
    correct: 0
  },
  610: { // ID 610, c: 1
    options: [
      "Bệnh lý đa hồng cầu nguyên phát do tủy xương tăng sinh tế bào dòng hồng cầu mất kiểm soát",
      "Thiếu máu hồng cầu nhỏ nhược sắc kháng trị với bổ sung sắt (do thiếu Ceruloplasmin vận chuyển)",
      "Bệnh bạch cầu mạn tính dòng lympho kèm theo hạch to lan tỏa rải rác ở nhiều vị trí cơ thể",
      "Hội chứng tăng bạch cầu đơn nhân nhiễm trùng với sốt cao nổi hạch cổ và viêm họng giả mạc"
    ],
    correct: 1
  },
  611: { // ID 611, c: 2
    options: [
      "Ứ đọng nguyên tố Sắt quá mức gây biến đổi màu da sạm đồng thiếc và xơ gan đái tháo đường",
      "Tích lũy độc chất Nhôm trong nhu mô não gây hội chứng sa sút trí tuệ và rối loạn vận động",
      "Ứ đọng nguyên tố Đồng trong gan, não và xuất hiện vòng Kayser-Fleischer ở rìa giác mạc mắt",
      "Ngộ độc mạn tính Chì với biểu hiện thiếu máu, đau quặn bụng và đường viền chì ở lợi răng"
    ],
    correct: 2
  },
  612: { // ID 612, c: 3
    options: [
      "Protamin sulfat dùng trung hòa tác dụng chống đông của Heparin không phân đoạn",
      "Deferoxamin dùng để tạo phức chelat đào thải lượng sắt ứ đọng trong cơ thể",
      "N-acetylcystein dùng phục hồi nguồn glutathion giải độc ngộ độc Paracetamol",
      "Penicillamin hoặc Trientin tạo phức chelat với đồng đào thải qua nước tiểu"
    ],
    correct: 3
  },
  613: { // ID 613, c: 0
    options: [
      "Gan (xơ gan), tim (suy tim, loạn nhịp) và tuyến tụy (đái tháo đường da màu đồng thiếc)",
      "Toàn bộ hệ thống sụn khớp và các móng tay móng chân gây biến dạng móng hình mặt kính đồng hồ",
      "Cấu trúc biểu mô phế nang và màng phổi hai bên gây hội chứng tràn dịch màng phổi dịch tiết",
      "Cơ quan thính giác và thị giác làm teo gai thị giác và điếc thần kinh giác quan không hồi phục"
    ],
    correct: 0
  },
  614: { // ID 614, c: 1
    options: [
      "Uống nhiều sữa tươi nguyên kem mỗi ngày để bổ sung canxi cạnh tranh hấp thu với kim loại",
      "Trích máu tĩnh mạch định kỳ (Phlebotomy) để loại bỏ lượng sắt dư thừa tích tụ trong cơ thể",
      "Phẫu thuật cắt bỏ toàn bộ lách để giảm bớt sự phá hủy tế bào hồng cầu chứa sắt trong mô lách",
      "Uống thuốc lợi tiểu quai Furosemid liều cao kéo dài để thúc đẩy đào thải kim loại qua nước tiểu"
    ],
    correct: 1
  },
  615: { // ID 615, c: 2
    options: [
      "Nước tiểu chuyển sang màu đen sẫm tương tự như màu nước cà phê cháy",
      "Nước tiểu chuyển sang màu đỏ thẫm tương tự như nước rửa thịt có lẫn máu",
      "Nước tiểu chuyển sang màu vàng tươi hoặc vàng huỳnh quang hoàn toàn vô hại",
      "Nước tiểu chuyển sang màu xanh nước biển nhạt do hiện tượng oxy hóa quang học"
    ],
    correct: 2
  },
  616: { // ID 616, c: 3
    options: [
      "Bệnh cảnh xơ gan cổ trướng giai đoạn mất bù kèm theo hội chứng tăng áp lực tĩnh mạch cửa",
      "Hiện tượng lung lay và rụng hàng loạt các răng cửa hàm trên và hàm dưới tự phát ở người trẻ",
      "Khởi phát các cơn đau thắt ngực điển hình khi gắng sức do co thắt hệ thống động mạch vành tim",
      "Viêm nứt mép miệng (lở mép), viêm lưỡi đỏ bóng đau rát, viêm môi và viêm da tiết bã nhờn"
    ],
    correct: 3
  },
  619: { // ID 619, c: 2
    options: [
      "Cấu tạo phân tử sắc tố Heme bên trong phân tử huyết sắc tố Hemoglobin của tế bào hồng cầu",
      "Hormon tuyến giáp trạng Thyroxin (T4) tham gia điều hòa quá trình chuyển hóa cơ bản cơ thể",
      "Coenzym A (CoA) tham gia vào chu trình acid citric Krebs và quá trình oxy hóa các acid béo",
      "Phân tử mang năng lượng Adenosin triphosphat (ATP) cung cấp năng lượng cho mọi hoạt động sống"
    ],
    correct: 2
  },
  620: { // ID 620, c: 3
    options: [
      "Xúc tác các phản ứng methyl hóa gắn nhóm methyl vào phân tử ADN để điều hòa biểu hiện gen",
      "Xúc tác các phản ứng phosphoryl hóa gắn nhóm phosphat vào protein enzym để hoạt hóa chức năng",
      "Xúc tác các phản ứng khử hydro oxy hóa khử trong chuỗi hô hấp tế bào để tạo ra các phân tử ATP",
      "Các phản ứng carboxyl hóa gắn CO2 trong tân tạo đường, tổng hợp acid béo và thoái hóa leucin"
    ],
    correct: 3
  },
  1048: { // ID 1048, c: 3
    options: [
      "Tỷ số giữa nồng độ đỉnh trong huyết tương trên nồng độ ức chế tối thiểu (Cmax/MIC)",
      "Tốc độ thanh thải creatinin ước tính của các đơn vị tiểu cầu thận trong suốt 24 giờ",
      "Diện tích dưới đường cong nồng độ - thời gian trong 24 giờ trên MIC (AUC24/MIC)",
      "Tỷ lệ phần trăm thời gian nồng độ thuốc tự do duy trì trên mức MIC (%T > MIC)"
    ],
    correct: 3
  },
  1050: { // ID 1050, c: 1
    options: [
      "Thời gian bán thải sinh học của thuốc trong cơ thể kéo dài vượt quá ngưỡng 48 giờ",
      "Tỷ số Cmax/MIC với mục tiêu nồng độ đỉnh đạt từ 8 đến 10 lần giá trị MIC của vi khuẩn",
      "Tỷ lệ phần trăm thời gian nồng độ thuốc tự do duy trì trên nồng độ ức chế tối thiểu (%T > MIC)",
      "Tỷ số giữa thể tích phân bố của hoạt chất trên tổng trọng lượng cơ thể người bệnh (Vd/kg)"
    ],
    correct: 1
  },
  1051: { // ID 1051, c: 2
    options: [
      "Giúp hạ giá thành sản xuất công nghiệp và chi phí đóng gói thuốc tại các nhà máy dược phẩm",
      "Làm cho toàn bộ lượng hoạt chất kháng sinh không bị đào thải qua hệ thống đường tiết niệu",
      "Tối ưu Cmax/MIC tăng hiệu lực diệt khuẩn, đồng thời Cmin thấp giảm độc tính trên tai và thận",
      "Mở rộng phổ kháng khuẩn bao phủ thêm cả các chủng virus hô hấp và nấm sợi xâm lấn toàn thân"
    ],
    correct: 2
  },
  1060: { // ID 1060, c: 3
    options: [
      "Chống chỉ định tuyệt đối tiêm thêm bất kỳ liều kháng sinh nào trong suốt quá trình phẫu thuật",
      "Bắt buộc tiêm nhắc lại ngay khi thời gian phẫu thuật vừa vượt quá mốc 30 phút đầu tiên",
      "Chỉ được phép bổ sung liều thứ hai khi cuộc phẫu thuật kéo dài tròn 24 giờ đồng hồ liên tục",
      "Khi ca mổ kéo dài trên 3 - 4 giờ (quá 2 lần T1/2 của Cefazolin) hoặc lượng máu mất > 1500 mL"
    ],
    correct: 3
  },
  1061: { // ID 1061, c: 0
    options: [
      "Gen mecA mã hóa PBP2a ái lực rất thấp với hầu hết các kháng sinh nhóm Beta-lactam",
      "Đột biến làm thay đổi tính thấm chọn lọc của màng ngoài vi khuẩn ngăn cản kháng sinh khuếch tán",
      "Tăng cường tiết enzym penicillinase thông thường phá hủy liên kết vòng beta-lactam trong máu",
      "Kích hoạt hệ thống bơm tống thuốc chủ động (Efflux pump) đẩy kháng sinh ra ngoài màng tế bào"
    ],
    correct: 0
  },
  1063: { // ID 1063, c: 2
    options: [
      "Hoàn toàn không bao giờ bị đề kháng bởi bất kỳ chủng tụ cầu vàng hay Enterococcus kháng thuốc nào",
      "Có phổ diệt khuẩn siêu rộng bao phủ cả trực khuẩn mủ xanh và trực khuẩn đường ruột sinh men ESBL",
      "Thâm nhập tốt vào dịch lót biểu mô phế nang phổi và sinh khả dụng đường uống đạt xấp xỉ 100%",
      "Thời gian bán thải cực dài trên 72 giờ cho phép chỉ cần sử dụng một liều tiêm duy nhất mỗi tuần"
    ],
    correct: 2
  },
  1067: { // ID 1067, c: 2
    options: [
      "Nguy cơ gây viêm gân và đứt gân gót Achilles tự phát ở cả hai bên chân khi vận động thể lực",
      "Độc tính trực tiếp trên võng mạc mắt gây lắng đọng sắc tố và mù lòa vĩnh viễn không hồi phục",
      "Độc tính trên thận gây hoại tử ống thận cấp và độc tính thần kinh cơ gây yếu cơ, ngừng thở",
      "Khởi phát cơn đau thắt ngực kịch phát tiến triển thành nhồi máu cơ tim cấp có ST chênh lên"
    ],
    correct: 2
  },
  1068: { // ID 1068, c: 3
    options: [
      "Vancomycin đường tiêm truyền tĩnh mạch theo dõi nồng độ đáy trong máu",
      "Tobramycin dạng dung dịch tiêm truyền tĩnh mạch ngắt quãng trong ngày",
      "Gentamicin tiêm bắp sâu hoặc tiêm truyền tĩnh mạch ngắt quãng hàng ngày",
      "Ceftriaxone và Cefoperazon thải trừ qua mật, thích hợp cho nhiễm khuẩn đường mật"
    ],
    correct: 3
  },
  1069: { // ID 1069, c: 0
    options: [
      "Kéo dài khoảng QT trên điện tâm đồ và tăng nguy cơ khởi phát cơn xoắn đỉnh ngừng tim",
      "Làm biến mất hoàn toàn sóng P trên tất cả các chuyển đạo điện tâm đồ tiêu chuẩn",
      "Làm gia tăng biên độ sóng R lên gấp mười lần so với giá trị sinh lý bình thường",
      "Làm rút ngắn khoảng PR dẫn đến hội chứng kích thích sớm Wolff-Parkinson-White"
    ],
    correct: 0
  },
  1072: { // ID 1072, c: 3
    options: [
      "Viêm xương tủy xương mạn tính tái phát nhiều lần có ổ mủ hoại tử xương",
      "Áp xe phổi kích thước lớn do vi khuẩn kỵ khí phối hợp vi khuẩn Gram âm",
      "Viêm màng não mủ do phế cầu khuẩn kháng penicillin ở người trưởng thành",
      "Nhiễm khuẩn đường tiết niệu dưới (viêm bàng quang cấp không biến chứng ở phụ nữ)"
    ],
    correct: 3
  },
  1073: { // ID 1073, c: 0
    options: [
      "Listeria monocytogenes đề kháng tự nhiên với toàn bộ kháng sinh nhóm Cephalosporin",
      "Listeria monocytogenes chỉ nhạy cảm duy nhất với kháng sinh độc tính cao Colistin",
      "Ceftriaxone bị vi khuẩn Listeria monocytogenes phá hủy hoàn toàn thành chất chuyển hóa độc",
      "Ceftriaxone hoàn toàn không có khả năng khuếch tán qua hàng rào máu não vào màng não"
    ],
    correct: 0
  },
  1077: { // ID 1077, c: 0
    options: [
      "Ức chế enzym DNA-gyrase (Topoisomerase II) và Topoisomerase IV của vi khuẩn",
      "Ức chế enzym transpeptidase ngăn cản quá trình tổng hợp vách tế bào peptidoglycan",
      "Gắn chọn lọc vào tiểu đơn vị 50S của ribosom ngăn cản quá trình tạo liên kết peptid",
      "Tác động như chất diện hoạt cation làm phá vỡ màng lipid kép của tế bào vi khuẩn"
    ],
    correct: 0
  },
  1079: { // ID 1079, c: 2
    options: [
      "Thuốc hoàn toàn không có khả năng hòa tan trong dung môi nước tiểu của người bệnh",
      "Thuốc bị tế bào biểu mô ống thận bài xuất đào thải sạch sẽ khỏi cơ thể chỉ trong vài giây",
      "Nồng độ trong máu và nước tiểu thấp do thể tích phân bố Vd rất lớn (thâm nhập mô sâu)",
      "Thuốc bị gắn kết chặt chẽ và bất hoạt hoàn toàn bởi các tế bào hồng cầu trong tuần hoàn"
    ],
    correct: 2
  },
  1081: { // ID 1081, c: 0
    options: [
      "Bắt đầu kháng sinh phổ rộng đường tĩnh mạch trong vòng 1 giờ đầu tiên sau khi nhận diện sốc",
      "Chỉ bắt đầu sử dụng kháng sinh sau khi người bệnh đã được hạ sốt và hết rét run hoàn toàn",
      "Chỉ dùng thuốc sau khi đã hoàn tất đầy đủ các thủ tục hành chính và người bệnh ký cam kết",
      "Trì hoãn kháng sinh chờ đủ 48 - 72 giờ để có kết quả cấy máu và kháng sinh đồ chính thức"
    ],
    correct: 0
  },
  1082: { // ID 1082, c: 1
    options: [
      "Chủ động giảm liều lượng kháng sinh xuống mức dưới ngưỡng nồng độ điều trị tối thiểu",
      "Chuyển từ kháng sinh phổ rộng sang kháng sinh phổ hẹp hơn khi có kết quả kháng sinh đồ",
      "Ngừng vĩnh viễn việc điều trị kháng sinh ngay cả khi bệnh nhân vẫn còn sốt cao liên tục",
      "Chuyển bệnh nhân từ khoa hồi sức tích cực xuống khoa khám bệnh ngoại trú để theo dõi"
    ],
    correct: 1
  },
  1084: { // ID 1084, c: 3
    options: [
      "Các chủng virus Herpes simplex gây tổn thương viêm loét mụn nước ngoài da",
      "Trực khuẩn Gram âm hiếu khí không lên men đường như Pseudomonas aeruginosa",
      "Các chủng nấm sợi xâm lấn đường hô hấp nguy hiểm như Aspergillus fumigatus",
      "Vi khuẩn kỵ khí tuyệt đối (B. fragilis, C. difficile) và động vật nguyên sinh (Trichomonas, Amip)"
    ],
    correct: 3
  },
  1088: { // ID 1088, c: 3
    options: [
      "Hydrocortison 100 mg = Prednisolon 1 mg = Methylprednisolon 0,5 mg = Dexamethason 50 mg",
      "Hydrocortison 5 mg = Prednisolon 20 mg = Methylprednisolon 40 mg = Dexamethason 10 mg",
      "Tất cả các loại thuốc corticoid nêu trên đều có liều chống viêm tương đương bằng nhau là 10 mg",
      "Hydrocortison 20 mg = Prednisolon 5 mg = Methylprednisolon 4 mg = Dexamethason 0,75 mg"
    ],
    correct: 3
  },
  1089: { // ID 1089, c: 0
    options: [
      "Dexamethason và Betamethason (hoạt tính mineralocorticoid gần như bằng 0)",
      "Cortison acetat chuyển hóa tại gan thành hydrocortison giữ muối nước mạnh",
      "Fludrocortison tổng hợp có hoạt tính giữ muối nước cực mạnh dùng trong suy thượng thận",
      "Hydrocortison tự nhiên có hoạt tính giữ muối nước tương đương cortisol sinh lý"
    ],
    correct: 0
  },
  1090: { // ID 1090, c: 1
    options: [
      "Uống vào lúc 11 giờ đêm trước khi đi ngủ để thuốc phát huy tác dụng suốt đêm",
      "Khoảng 7 đến 8 giờ sáng cùng hoặc ngay sau ăn sáng (trùng đỉnh bài tiết cortisol tự nhiên)",
      "Chia nhỏ liều uống rải rác mỗi 3 giờ một lần đều đặn suốt cả ngày lẫn ban đêm",
      "Uống vào lúc 2 giờ chiều khi dạ dày trống rỗng để tăng tốc độ hấp thu vào máu"
    ],
    correct: 1
  },
  1091: { // ID 1091, c: 2
    options: [
      "Gia tăng sinh khả dụng của corticoid lên gấp 3 lần so với chế độ dùng thuốc hàng ngày",
      "Loại trừ hoàn toàn 100% nguy cơ viêm loét dạ dày tá tràng và nguy cơ loãng xương mạn",
      "Cortisol hạ thấp ngày nghỉ giúp trục HPA hồi phục sinh lý, giảm nguy cơ suy thượng thận",
      "Kiểm soát các đợt bùng phát viêm khớp dạng thấp cấp tính hiệu quả hơn dùng hàng ngày"
    ],
    correct: 2
  },
  1092: { // ID 1092, c: 3
    options: [
      "Dexamethason có thời gian bán thải sinh học rất dài trên 36 - 54 giờ ức chế liên tục",
      "Hydrocortison có thời gian bán thải quá ngắn dưới 12 giờ không đủ kiểm soát viêm",
      "Fludrocortison có tác dụng giữ muối nước quá mạnh dẫn đến phù và tăng huyết áp",
      "Prednisolon hoặc Methylprednisolon (tác dụng trung bình 12 - 36 giờ, trục HPA kịp phục hồi)"
    ],
    correct: 3
  },
  1093: { // ID 1093, c: 0
    options: [
      "Ngừng Glucocorticoid đột ngột sau đợt điều trị liều cao kéo dài trên 2 - 3 tuần",
      "Chuyển đổi đường dùng từ dạng tiêm tĩnh mạch sang dạng uống với mức liều tương đương",
      "Uống thuốc đúng giờ cùng với bữa ăn sáng có đầy đủ các thành phần dinh dưỡng chuẩn",
      "Bắt đầu sử dụng liều khởi đầu đầu tiên của phác đồ điều trị theo đúng chỉ định y khoa"
    ],
    correct: 0
  },
  1095: { // ID 1095, c: 2
    options: [
      "Giữ nguyên phác đồ giảm liều đang áp dụng mà không cần thay đổi bất kỳ thông số nào",
      "Chỉ cho người bệnh uống dung dịch đường glucose ưu trương kết hợp theo dõi mạch huyết áp",
      "Phải tạm thời tăng liều Glucocorticoid lên để bù trừ cho nhu cầu phản ứng stress của cơ thể",
      "Phải ngừng thuốc hoàn toàn ngay lập tức để phòng ngừa nguy cơ nhiễm trùng vết thương mổ"
    ],
    correct: 2
  },
  1096: { // ID 1096, c: 3
    options: [
      "Kích thích tăng tiết hormon tuyến cận giáp PTH thứ phát gây hủy hoại cấu trúc xương xốp",
      "Kích thích quá trình lắng đọng canxi quá mức làm cho khung xương bị giòn và dễ gãy",
      "Phá hủy trực tiếp các tế bào tủy đỏ tạo máu làm giảm cung cấp dưỡng chất cho mô xương",
      "Ức chế tạo xương, tăng hủy xương, giảm hấp thu calci ở ruột và tăng đào thải calci qua thận"
    ],
    correct: 3
  },
  1097: { // ID 1097, c: 0
    options: [
      "Canxi, Vitamin D3 và xem xét chỉ định Bisphosphonat nếu có nguy cơ gãy xương cao",
      "Bổ sung nước khoáng có ga đậm đặc kết hợp chế độ tập luyện thể dục thể thao cường độ cao",
      "Bổ sung Vitamin C liều cao 5000 mg mỗi ngày để kích thích tổng hợp mạng lưới sợi collagen",
      "Sử dụng thuốc giảm đau Paracetamol đều đặn hàng ngày để giảm bớt cảm giác nhức mỏi xương"
    ],
    correct: 0
  },
  1098: { // ID 1098, c: 1
    options: [
      "Thuốc kháng thụ thể histamin H2 thế hệ 2 như Famotidin dùng theo đường uống buổi tối",
      "Thuốc chống viêm không steroid (NSAID) như Aspirin, Ibuprofen, Diclofenac hoặc Naproxen",
      "Thuốc ức chế bơm proton PPI như Omeprazol hoặc Esomeprazol uống trước bữa ăn sáng",
      "Dung dịch sữa uống bảo vệ niêm mạc và các chế phẩm bổ sung men vi sinh đường ruột"
    ],
    correct: 1
  },
  1099: { // ID 1099, c: 2
    options: [
      "Biến chứng ngộ độc cấp tính kháng sinh nhóm Penicillin ở bệnh nhân có cơ địa dị ứng",
      "Hội chứng thiếu hụt vitamin D mạn tính dẫn đến còi xương và nhuyễn xương người lớn",
      "Hội chứng Cushing do thuốc do sử dụng Glucocorticoid liều cao kéo dài không kiểm soát",
      "Bệnh cảnh suy thận mạn giai đoạn cuối có chỉ định lọc máu thẩm tách chu kỳ định kỳ"
    ],
    correct: 2
  },
  1100: { // ID 1100, c: 3
    options: [
      "Làm cho nhiệt độ cơ thể người bệnh hạ thấp tạo môi trường thuận lợi cho vi sinh vật",
      "Làm suy giảm hoàn toàn nồng độ kháng thể dịch thể IgE trong huyết tương người bệnh",
      "Kích thích trực tiếp các tế bào vi khuẩn và vi nấm tăng tốc độ sinh sản nhân đôi",
      "Ức chế miễn dịch qua trung gian tế bào, giảm số lượng và ức chế chức năng của lympho T"
    ],
    correct: 3
  },
  1101: { // ID 1101, c: 0
    options: [
      "Sàng lọc bệnh Lao tiềm ẩn (X-quang phổi, Mantoux/IGRA) và xét nghiệm Viêm gan virus B, C",
      "Xác định nhóm máu hệ Rh và định nhóm máu hệ ABO trong quy trình an toàn truyền máu",
      "Đo mật độ nang tóc trên da đầu và kiểm tra chức năng bài tiết của các tuyến mồ hôi da",
      "Ghi điện não đồ giấc ngủ đêm và làm các bài kiểm tra đánh giá trạng thái tâm lý thần kinh"
    ],
    correct: 0
  },
  1102: { // ID 1102, c: 1
    options: [
      "Làm gia tăng độ cận thị học đường tiến triển nhanh ở đối tượng thanh thiếu niên trẻ tuổi",
      "Tăng nhãn áp (nguy cơ Glaucoma góc mở) và Đục thủy tinh thể dưới bao sau của mắt",
      "Làm biến dạng nhãn cầu khiến hai mắt bị lồi hẳn ra ngoài vĩnh viễn không thể hồi phục",
      "Gây rách giác mạc tự phát dẫn đến biến chứng bong võng mạc gây mất thị lực tức thì"
    ],
    correct: 1
  },
  1103: { // ID 1103, c: 2
    options: [
      "Kích thích các tế bào beta của tiểu đảo tụy tăng cường sản xuất insulin gấp 10 lần bình thường",
      "Gây hạ đường huyết sâu sắc dẫn đến biến chứng hôn mê co giật hạ đường huyết cấp tính",
      "Tăng tân tạo glucose tại gan, giảm thu nạp đường ở ngoại vi dẫn đến tăng đường huyết",
      "Làm cho các phân tử glucose hoàn toàn biến mất khỏi dòng máu do bị chuyển hóa hết thành mỡ"
    ],
    correct: 2
  },
  1104: { // ID 1104, c: 3
    options: [
      "Giảm đau và chống viêm sau các thủ thuật nhổ răng sữa thông thường ở trẻ em lứa tuổi học đường",
      "Hạ nhiệt nhanh và kiểm soát triệu chứng trong các đợt sốt cảm lạnh thông thường do nhiễm virus",
      "Viêm họng đỏ cấp tính do thời tiết lạnh ở người trưởng thành khỏe mạnh không có bệnh nền",
      "Cơn bùng phát đe dọa tính mạng của bệnh tự miễn (Lupus ban đỏ đợt cấp, viêm cầu thận tiến triển)"
    ],
    correct: 3
  },
  1105: { // ID 1105, c: 0
    options: [
      "Rối loạn nhịp tim nguy hiểm và tụt huyết áp do tốc độ truyền tĩnh mạch quá nhanh",
      "Gây đông đặc toàn bộ dòng máu trong lòng mạch dẫn đến tắc nghẽn hoàn toàn hệ thống tuần hoàn",
      "Khởi phát các cơn co thắt khí phế quản cấp tính dữ dội gây suy hô hấp cấp không hồi phục",
      "Làm cho người bệnh rơi vào trạng thái hôn mê sâu do nồng độ kali máu hạ thấp đột ngột"
    ],
    correct: 0
  },
  1108: { // ID 1108, c: 3
    options: [
      "Vùng da dày sừng ở lòng bàn chân bị chai sần nứt nẻ do đi lại và lao động nhiều",
      "Vùng da cùi chỏ và đầu gối có các mảng vảy nến dày mạn tính dai dẳng khó bong tróc",
      "Vùng móng tay móng chân bị tổn thương nấm móng mạn tính có biến dạng phiến móng",
      "Vùng da mặt, mí mắt, vùng da mỏng có nếp gấp (bẹn, nách) và vùng sinh dục"
    ],
    correct: 3
  },
  1110: { // ID 1110, c: 1
    options: [
      "Mặt tròn béo phì, lắng đọng mỡ vùng gáy và xuất hiện các vết rạn da màu đỏ tím ở bụng",
      "Tụt huyết áp trụy mạch, sốt cao, đau bụng nôn mửa, rối loạn điện giải (hạ Natri, tăng Kali)",
      "Cơn tăng huyết áp kịch phát ác tính với số đo huyết áp tâm thu vượt quá ngưỡng 220 mmHg",
      "Nồng độ natri máu tăng vọt kết hợp với tình trạng hạ kali máu nghiêm trọng gây rung thất"
    ],
    correct: 1
  },
  1111: { // ID 1111, c: 2
    options: [
      "Cho bệnh nhân uống nhiều nước khoáng chanh đường ấm để bổ sung nhanh lượng điện giải mất",
      "Tiêm tĩnh mạch ngay lập tức insulin tác dụng nhanh liều cao để hạ nhanh nồng độ đường máu",
      "Tiêm tĩnh mạch ngay Hydrocortison 100 mg mỗi 6 - 8 giờ và truyền dịch NaCl 0,9% bù thể tích",
      "Cho uống hỗn dịch thuốc nhuận tràng thẩm thấu để nhanh chóng đào thải các chất độc đường ruột"
    ],
    correct: 2
  },
  1113: { // ID 1113, c: 0
    options: [
      "Hạ Kali máu nghiêm trọng, làm tăng độc tính tim mạch và nguy cơ ngộ độc của Digoxin",
      "Gây bí tiểu tiện hoàn toàn do kích thích phì đại và co thắt cấp tính cơ thắt cổ bàng quang",
      "Tăng nồng độ Kali máu kịch phát dẫn đến biến cố ngừng tim đột ngột trong thì tâm thu",
      "Làm cho huyết áp tụt kẹp sâu sắc dẫn đến sốc tuần hoàn giảm thể tích không thể hồi phục"
    ],
    correct: 0
  },
  1115: { // ID 1115, c: 2
    options: [
      "Tương đương với khoảng 80 mg Prednisolon đường uống mỗi ngày trong điều kiện bình thường",
      "Khoảng 100 đến 200 mg Hydrocortison tiêm truyền tĩnh mạch mỗi ngày cho người trưởng thành",
      "Khoảng 15 đến 20 mg Hydrocortison (tương đương 5 mg Prednisolon) mỗi ngày ở trạng thái sinh lý",
      "Chỉ khoảng 0,1 mg Hydrocortison mỗi ngày do nhu cầu hormon nội sinh của cơ thể rất thấp"
    ],
    correct: 2
  },
  1117: { // ID 1117, c: 0
    options: [
      "Betamethason hoặc Dexamethason (ít bị enzym 11-beta-HSD2 tại bánh nhau chuyển hóa)",
      "Prednisolon đường uống chuyển hóa nhanh qua enzym nhau thai nên ít đến được thai nhi",
      "Hydrocortison tự nhiên bị bất hoạt gần như hoàn toàn bởi các enzym bảo vệ tại bánh nhau",
      "Methylprednisolon dạng tiêm tĩnh mạch chuyển hóa mạnh tại gan mẹ và nhau thai người mẹ"
    ],
    correct: 0
  },
  1118: { // ID 1118, c: 1
    options: [
      "Phương pháp phẫu thuật can thiệp cắt bỏ các nhánh dây thần kinh cảm giác dẫn truyền đau",
      "Thuốc giảm đau không Opioid (Paracetamol, NSAID) có thể kết hợp với thuốc bổ trợ giảm đau",
      "Các hoạt chất Opioid mạnh đường tiêm truyền như Morphin sulfat hoặc Fentanyl tĩnh mạch",
      "Các thuốc Opioid yếu dùng theo đường uống như Codein phosphat hoặc Tramadol hydroclorid"
    ],
    correct: 1
  },
  1120: { // ID 1120, c: 3
    options: [
      "Ức chế mạnh mẽ kết tập tiểu cầu làm kéo dài đáng kể thời gian chảy máu của người bệnh",
      "Gây tổn thương viêm trợt và loét thủng niêm mạc dạ dày tá tràng nặng nề hơn các thuốc NSAID",
      "Ức chế mạnh mẽ và đồng thời cả hai enzym COX-1 và COX-2 trực tiếp ngay tại các ổ viêm ngoại biên",
      "Tác dụng chủ yếu tại hệ TKTW (hạ sốt, giảm đau) và hầu như không có tác dụng chống viêm ngoại vi"
    ],
    correct: 3
  },
  1123: { // ID 1123, c: 2
    options: [
      "Cơn tăng huyết áp kịch phát ác tính, tim đập nhanh hồi hộp và tiêu chảy phân lỏng xối xả",
      "Sốt cao ác tính trên 41°C, co giật toàn thể liên tục và giãn to tối đa đồng tử hai bên mắt",
      "Hôn mê ức chế thần kinh trung ương, ức chế hô hấp (thở chậm) và co nhỏ đồng tử như đầu đinh ghim",
      "Mặt đỏ bừng bừng sung huyết, vã mồ hôi đầm đìa và run rẩy co cứng toàn bộ các cơ bắp chi"
    ],
    correct: 2
  },
  1124: { // ID 1124, c: 3
    options: [
      "Ức chế cạnh tranh chọn lọc trên các thụ thể Beta-1 adrenergic tại màng tế bào cơ tim",
      "Kiềm hóa dòng máu tuần hoàn đưa nồng độ pH huyết tương lên mức kiềm tính sinh lý",
      "Kích hoạt enzym plasminogen tiêu hủy trực tiếp mạng lưới sợi tơ huyết Fibrin trong lòng mạch",
      "Acetyl hóa không hồi phục COX-1 tiểu cầu, ức chế tổng hợp TXA2 suốt đời sống tiểu cầu (7 - 10 ngày)"
    ],
    correct: 3
  },
  1127: { // ID 1127, c: 2
    options: [
      "Tăng gấp mười lần mức liều thuốc của miếng dán giảm đau thẩm thấu qua da đang sử dụng",
      "Chỉ định cho bệnh nhân áp dụng phương pháp chườm lạnh hoặc chườm nóng tại vị trí đau",
      "Bổ sung một liều Opioid tác dụng nhanh, giải phóng tức thì (bằng 1/10 đến 1/6 liều 24 giờ)",
      "Ngừng sử dụng hoàn toàn toàn bộ các nhóm thuốc giảm đau để đánh giá lại ngưỡng chịu đau"
    ],
    correct: 2
  },
  1128: { // ID 1128, c: 3
    options: [
      "Kéo dài thời gian bán thải sinh học của cả hai hoạt chất trong cơ thể lên trên 1 tháng",
      "Triệt tiêu hoàn toàn 100% mọi tác dụng không mong muốn trên đường tiêu hóa của cả hai thuốc",
      "Tăng cường hoạt tính diệt khuẩn trên các chủng vi sinh vật gây viêm nhiễm trùng tại chỗ",
      "Hiệp đồng giảm đau: ức chế PG trung ương, chủ vận thụ thể Mu và ức chế tái hấp thu monoamin"
    ],
    correct: 3
  },
  1129: { // ID 1129, c: 0
    options: [
      "Chất chuyển hóa Normeperidin tích lũy gây kích thích thần kinh, run cơ và co giật",
      "Thuốc làm phá hủy men răng dẫn đến hiện tượng lung lay và rụng toàn bộ hàm răng tự phát",
      "Kích thích trung tâm thèm ăn gây tăng cân đột biến dẫn đến béo phì bệnh lý không kiểm soát",
      "Thuốc gây hạ glucose huyết tương sâu sắc không hồi phục đe dọa trực tiếp tính mạng người bệnh"
    ],
    correct: 0
  },
  1134: { // ID 1134, c: 1
    options: [
      "Gây suy tủy xương mất bạch cầu hạt cấp tính kèm theo sốt cao nhiễm trùng đe dọa tính mạng",
      "Gia tăng đáng kể nguy cơ huyết khối tim mạch (Nhồi máu cơ tim, Đột quỵ) trong thử nghiệm APPROVe",
      "Làm tổn thương thần kinh thị giác dẫn đến mù lòa vĩnh viễn ở cả hai mắt người bệnh sử dụng",
      "Gây ung thư biểu mô tế bào gan nguyên phát tiến triển nhanh trên các bệnh nhân viêm gan mạn"
    ],
    correct: 1
  },
  1136: { // ID 1136, c: 3
    options: [
      "Chẹn kênh natri phụ thuộc điện thế tại sợi trục thần kinh ngăn cản dẫn truyền xung động đau",
      "Ức chế cạnh tranh quá trình sinh tổng hợp các Prostaglandin viêm ở các mô cơ quan ngoại vi",
      "Kích thích trực tiếp các thụ thể cholinergic tại màng tế bào cơ trơn làm tăng nhu động ruột",
      "Ức chế chọn lọc enzym Phosphodiesterase-4 (PDE-4) làm tăng cAMP nội bào, gây giãn cơ trơn"
    ],
    correct: 3
  },
  1137: { // ID 1137, c: 0
    options: [
      "Giảm liều tối đa xuống không quá 2000 mg/24 giờ (hoặc 2 - 3g/ngày) do cạn kiệt Glutathion",
      "Vẫn duy trì mức liều tối đa 4000 mg mỗi ngày như người bình thường khỏe mạnh không suy kiệt",
      "Tăng liều dùng lên 6000 mg mỗi ngày để bù trừ cho tốc độ chuyển hóa thuốc bị chậm lại ở gan",
      "Tuyệt đối không bao giờ được phép sử dụng Paracetamol trong bất kỳ tình huống lâm sàng nào"
    ],
    correct: 0
  },
  1138: { // ID 1138, c: 1
    options: [
      "Hoàn toàn không có khả năng liên kết hay gắn kết với các thụ thể opioid trong não bộ",
      "Hấp thu tốt qua đường uống, thời gian bán thải dài (24 - 36h) giúp tránh hội chứng cai rầm rộ",
      "Tác động làm cho người bệnh nảy sinh tâm lý chán ghét hoàn toàn mọi loại chất gây nghiện",
      "Thời gian duy trì tác dụng giảm đau cực kỳ ngắn ngủi chỉ kéo dài trong vòng 10 đến 15 phút"
    ],
    correct: 1
  },
  1139: { // ID 1139, c: 2
    options: [
      "Khi người bệnh uống một lượng nước lọc tinh khiết quá nhiều trong một khoảng thời gian ngắn",
      "Khi người bệnh vô tình uống quá liều thuốc giảm đau Paracetamol vượt ngưỡng điều trị cho phép",
      "Khi ngừng đột ngột hoặc dùng chất đối kháng (Naloxon) trên người bệnh đã lệ thuộc Opioid",
      "Khi sử dụng phối hợp đồng thời với các thuốc giảm đau chống viêm không steroid nhóm NSAID"
    ],
    correct: 2
  },
  1140: { // ID 1140, c: 3
    options: [
      "Mức độ hấp thu vào vòng tuần hoàn chung cao gấp nhiều lần so với các chế phẩm viên nén uống",
      "Tuyệt đối không bao giờ gây ra bất kỳ tác dụng không mong muốn nào tại chỗ như ngứa hay ban đỏ",
      "Có tác dụng giảm đau toàn thân hiệu quả cho các cơn đau nội tạng sâu bên trong khoang ổ bụng",
      "Nồng độ cao tại mô khớp và màng hoạt dịch viêm tại chỗ, nồng độ toàn thân rất thấp giảm ADR"
    ],
    correct: 3
  },
  1145: { // ID 1145, c: 0
    options: [
      "Vitamin B6 (Pyridoxin) liều 25 - 50 mg/ngày để bù trừ lượng pyridoxin bị tăng bài xuất",
      "Vitamin C dạng viên sủi liều cao 1000 mg mỗi ngày để tăng cường sức đề kháng cơ thể",
      "Canxi carbonat dạng viên sủi uống hàng ngày để kích thích quá trình khoáng hóa xương",
      "Vitamin B12 dạng dung dịch tiêm bắp sâu định kỳ hàng tuần để bảo vệ bao myelin thần kinh"
    ],
    correct: 0
  },
  1149: { // ID 1149, c: 0
    options: [
      "Khắc phục được tình trạng thiếu máu nhưng làm tổn thương thoái hóa thần kinh nặng thêm",
      "Gây ra tình trạng ngộ độc acid folic cấp tính dẫn đến co giật cục bộ toàn thân nguy kịch",
      "Gây viêm loét trợt niêm mạc đường tiêu hóa dẫn đến xuất huyết dạ dày tá tràng ồ ạt",
      "Gây ức chế chọn lọc tủy xương làm suy giảm nghiêm trọng số lượng tiểu cầu trong máu"
    ],
    correct: 0
  },
  1151: { // ID 1151, c: 2
    options: [
      "Gây tắc nghẽn lòng niệu đạo cấp tính do biến chứng viêm phù nề niêm mạc cổ bàng quang",
      "Gây hoại tử tế bào biểu mô cầu thận cấp tính dẫn đến hội chứng suy thận cấp thể vô niệu",
      "Tăng đào thải Oxalat qua nước tiểu dẫn đến nguy cơ hình thành sỏi thận Calci Oxalat",
      "Làm biến đổi màu sắc nước tiểu chuyển sang màu đen sẫm tương tự như màu nước vối đặc"
    ],
    correct: 2
  },
  1152: { // ID 1152, c: 3
    options: [
      "Kích thích các cơn co bóp tử cung gây chuyển dạ đẻ non trước tháng thứ 5 của thai kỳ",
      "Khởi phát bệnh lý đái tháo đường thai kỳ kháng insulin dẫn đến biến chứng đa ối cấp",
      "Làm cho trẻ sơ sinh bị vàng da tan máu sơ sinh bùng phát ngay sau khi cất tiếng khóc chào đời",
      "Gây quái thai dị tật sọ mặt, tai, hệ thần kinh trung ương và hệ tim mạch của thai nhi"
    ],
    correct: 3
  },
  1154: { // ID 1154, c: 1
    options: [
      "Cholecalciferol (Vitamin D3) được tổng hợp tự nhiên ở lớp biểu bì da nhờ ánh nắng mặt trời",
      "1,25-dihydroxycholecalciferol (Calcitriol) được hydroxyl hóa lần hai tại mô thận",
      "25-hydroxycholecalciferol (Calcidiol) được tổng hợp qua bước hydroxyl hóa thứ nhất tại gan",
      "Ergocalciferol (Vitamin D2) có nguồn gốc từ nguồn thực phẩm nấm men và thực vật ăn vào"
    ],
    correct: 1
  },
  1156: { // ID 1156, c: 3
    options: [
      "Kích thích tủy xương tăng cường sản sinh các tế bào mẫu tiểu cầu trưởng thành vào máu",
      "Tham gia trực tiếp vào quá trình tổng hợp chuỗi globin của phân tử huyết sắc tố Hemoglobin",
      "Kích hoạt hệ thống tiêu sợi huyết làm tan các cục máu đông vi mạch hình thành bất thường",
      "Cần thiết cho enzym gamma-glutamyl carboxylase hoạt hóa yếu tố II, VII, IX, X và protein C, S"
    ],
    correct: 3
  },
  1159: { // ID 1159, c: 2
    options: [
      "Gây rối loạn giấc ngủ nghiêm trọng kèm theo các cơn run cơ và co giật cục bộ kéo dài",
      "Làm cho sắc tố biểu bì da bị biến đổi chuyển sang màu vàng chanh sẫm không hồi phục",
      "Kích ứng đường tiêu hóa gây buồn nôn, đau thượng vị, táo bón và phân có màu đen",
      "Khởi phát các cơn tăng huyết áp kịch phát ác tính dẫn đến biến chứng xuất huyết não"
    ],
    correct: 2
  },
  1161: { // ID 1161, c: 0
    options: [
      "Đồng yếu tố cho hơn 300 enzym và điều hòa tính kích thích màng tế bào thần kinh cơ",
      "Có tác dụng kích hoạt trực tiếp các yếu tố đông máu làm đông vón máu ngay lập tức",
      "Chỉ tham gia bài tiết ra ngoài cơ thể theo dịch mồ hôi mà không có vai trò nội bào",
      "Chỉ đóng vai trò đơn thuần trong việc cấu tạo nên lớp men cứng bên ngoài thân răng"
    ],
    correct: 0
  },
  1163: { // ID 1163, c: 2
    options: [
      "Làm cho trẻ ngừng đi ngoài phân lỏng ngay lập tức trong vòng 5 phút sau khi uống thuốc",
      "Thay thế hoàn toàn nhu cầu bù nước và điện giải thiết yếu bằng dung dịch Oresol đường uống",
      "Rút ngắn thời gian tiêu chảy, phục hồi niêm mạc ruột và ngừa tái phát tiêu chảy",
      "Tiêu diệt trực tiếp và nhanh chóng mọi chủng virus rota đang nhân lên trong lòng biểu mô ruột"
    ],
    correct: 2
  },
  1164: { // ID 1164, c: 3
    options: [
      "Protamin sulfat dùng trung hòa tác dụng chống đông của heparin khi bị quá liều cấp",
      "N-acetylcystein dùng giải độc phục hồi glutathion khi bị ngộ độc cấp tính paracetamol",
      "Flumazenil dùng đối kháng thụ thể benzodiazepin trong ngộ độc thuốc an thần gây ngủ",
      "Thuốc tạo phức chelat gắp sắt như Deferoxamin tiêm truyền hoặc Deferasirox đường uống"
    ],
    correct: 3
  },
  1165: { // ID 1165, c: 0
    options: [
      "Tăng Canxi máu kéo dài gây vôi hóa các mô mềm (thận, mạch máu) và suy giảm chức năng thận",
      "Làm teo thoái hóa các bó cơ bắp chân vĩnh viễn dẫn đến trẻ bị giảm sút khả năng vận động",
      "Gây nhuyễn xương và còi xương nặng nề do ức chế hoàn toàn quá trình khoáng hóa chất nền",
      "Làm cho xương vòm sọ bị mềm nhũn và biến dạng vĩnh viễn không thể hồi phục lại bình thường"
    ],
    correct: 0
  },
  1166: { // ID 1166, c: 1
    options: [
      "Làm cho tổ chức liên kết dưới da bị đông cứng lại làm mất hoàn toàn tính đàn hồi sinh lý",
      "Tăng nguy cơ xuất huyết (đặc biệt xuất huyết não) và tăng tỷ lệ tử vong do mọi nguyên nhân",
      "Gây hoại tử tế bào nhu mô gan cấp tính dẫn đến hội chứng suy gan bùng phát đe dọa tính mạng",
      "Khởi phát các cơn co thắt phế quản ác tính gây suy hô hấp cấp không đáp ứng với thuốc giãn phế quản"
    ],
    correct: 1
  },
  1167: { // ID 1167, c: 2
    options: [
      "Khung xương khớp phát triển khổng lồ vượt quá mức phát triển sinh lý bình thường của lứa tuổi",
      "Kích thích trung tâm thèm ăn gây tăng cân béo phì bệnh lý đột ngột không thể kiểm soát được",
      "Viêm da đầu chi và quanh các hốc tự nhiên, rụng tóc lông toàn bộ và tiêu chảy kéo dài",
      "Khuôn mặt tròn đỏ như mặt trăng kết hợp với tình trạng lắng đọng mỡ bất thường ở vùng gáy cổ"
    ],
    correct: 2
  }
};

module.exports = updates;
