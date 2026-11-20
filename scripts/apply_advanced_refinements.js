const fs = require('fs');
const path = require('path');

const bankPath = path.join(__dirname, '..', 'questions_duocly2.js');
const { DUOCLY2_EXAM_BANK, DUOCLY2_MATRIX_32H } = require(bankPath);

const refinements = {
  2: {
    options: [
      "Chuỗi oligosaccharid liên kết glycosid ở vị trí C3",
      "Khung steroid mang vòng lacton không no tại vị trí C17",
      "Nhóm thế hydroxyl gắn trực tiếp trên nhân steroid ở C3",
      "Các gốc đường digitoxose liên kết nối tiếp ở mạch nhánh"
    ]
  },
  5: {
    options: [
      "Chẹn thụ thể beta-1 adrenergic ở màng tế bào cơ tim",
      "Tăng giải phóng catecholamin tận cùng sợi giao cảm tim",
      "Ức chế kênh calci typ T ở các tế bào dẫn nhịp tâm nhĩ",
      "Tăng trương lực phế vị kéo dài thời kỳ trơ nút nhĩ thất"
    ]
  },
  10: {
    question: "Hai hoạt chất glycosid trợ tim cùng chiết xuất từ chi Digitalis nhưng có số lượng nhóm hydroxyl khác nhau trên khung steroid dẫn đến sự phân cực đối lập. Sự khác biệt căn bản về số phận sinh học trong cơ thể giữa phân tử phân cực (mang 3 nhóm OH) và phân tử thân dầu (mang 2 nhóm OH) là gì?",
    options: [
      "Phân tử phân cực gắn mạnh protein; phân tử thân dầu ở dạng tự do",
      "Phân tử thân dầu bài xuất qua thận; phân tử phân cực chuyển hóa gan",
      "Phân tử phân cực thải trừ qua thận; phân tử thân dầu chuyển hóa qua gan",
      "Phân tử phân cực có t1/2 5-7 ngày; phân tử thân dầu có t1/2 1 ngày"
    ]
  },
  33: {
    options: [
      "Thuốc lợi tiểu quai ức chế Na+/K+/2Cl-",
      "Thuốc lợi tiểu giữ kali kháng aldosteron",
      "Thuốc lợi tiểu thẩm thấu đường tĩnh mạch",
      "Thuốc lợi tiểu thiazid và giống thiazid"
    ]
  },
  55: {
    question: "Hai phân nhóm thuốc lợi tiểu hạ áp phổ biến tác động tại quai Henle và ống lượn xa có ảnh hưởng hoàn toàn trái ngược lên cân bằng ion Calci tại thận. Quy luật tác động lên sự đào thải calci qua nước tiểu của hai nhóm này là gì?",
    options: [
      "Thuốc tại quai Henle và ống lượn xa đều làm tăng đào thải Calci",
      "Thuốc tại ống lượn xa tăng đào thải; thuốc tại quai Henle tăng giữ",
      "Thuốc tại quai Henle tăng đào thải; thuốc tại ống lượn xa tăng giữ",
      "Thuốc tại quai Henle và ống lượn xa đều làm tăng giữ lại Calci"
    ]
  },
  58: {
    options: [
      "Uống liều thấp duy trì kết hợp ăn giảm muối",
      "Dùng phối hợp thuốc ức chế men chuyển tim mạch",
      "Tiêm tĩnh mạch liều cao nhanh hoặc phối hợp Aminoglycosid",
      "Dùng kéo dài kết hợp bổ sung kali qua đường uống"
    ]
  },
  74: {
    options: [
      "Chống chỉ định dùng cho người cao tuổi suy tim",
      "Bắt buộc ngừng thuốc trước khi tiêm vacxin 4 tuần",
      "Không dùng đơn trị liệu mà phải phối hợp ICS",
      "Chỉ dùng đường tiêm dưới da trong cơn hen kịch phát"
    ]
  },
  80: {
    options: [
      "Bị phân hủy hoàn toàn bởi hệ enzym tại niêm mạc ruột",
      "Cấu trúc phân cực, tích điện và bị bơm P-gp tống khỏi não",
      "Đối kháng chọn lọc trên thụ thể H2 ở niêm mạc dạ dày",
      "Kích thích thụ thể giao cảm alpha-1 tại hệ thần kinh"
    ]
  },
  85: {
    options: [
      "Gây tê niêm mạc dạ dày và ức chế chọn lọc thụ thể serotonin",
      "Kích thích thụ thể dopamin D2 tại vùng kích hoạt hóa nôn",
      "Ức chế thụ thể H1 và Muscarinic trung ương tại tiền đình",
      "Tăng trương lực cơ thắt thực quản dưới và làm rỗng dạ dày"
    ]
  },
  94: {
    options: [
      "Tiếp tục dùng metronidazol duy trì kéo dài trong ba tháng",
      "Tiêm bắp phối hợp dung dịch emetin định kỳ sau mỗi đợt",
      "Dùng tiếp một đợt thuốc diệt amip lòng ruột (Paromomycin)",
      "Cho uống kháng sinh aminoglycosid kết hợp thụt tháo ruột"
    ]
  },
  114: {
    question: "Bệnh nhân suy tim đang dùng một glycosid tim trợ tim được chỉ định thêm một thuốc bài niệu tác động tại đoạn dày nhánh lên quai Henle liều cao nhưng không được kiểm tra điện giải đồ hay bù ion kèm theo. Hậu quả tương tác dược lực học nghiêm trọng nhất có nguy cơ xuất hiện là gì?",
    options: [
      "Hạ natri máu làm tăng gắn glycosid vào thụ thể gây block nhĩ thất",
      "Hạ kali máu làm tăng gắn glycosid vào Na+/K+-ATPase gây loạn nhịp thất",
      "Tăng kali máu cạnh tranh gắn thụ thể làm mất hoàn toàn hiệu lực trợ tim",
      "Hạ calci máu ức chế sức co bóp cơ tim dẫn đến suy tim mất bù cấp tính"
    ]
  },
  126: {
    options: [
      "Uống cùng bữa ăn trưa nhiều dầu mỡ để tăng hấp thu qua mật",
      "Uống ngay sau khi ăn no bữa tối trước thời điểm đi ngủ",
      "Uống buổi sáng khi đói trước ăn 30-60 phút với nước lọc",
      "Uống chung với sữa tươi hoặc chế phẩm bổ sung canxi và sắt"
    ]
  },
  138: {
    options: [
      "Hạ tiểu cầu nặng gây xuất huyết nhưng đông máu bình thường",
      "Suy tủy xương ức chế dòng hồng cầu gây thiếu máu nghiêm trọng",
      "Kích hoạt bổ thể gây tan máu nội mạch cấp và vàng da tắc mật",
      "Giảm số lượng tiểu cầu nhưng gây biến chứng huyết khối tắc mạch"
    ]
  },
  144: {
    options: [
      "Niêm mạc vùng thân và đáy dạ dày",
      "Đoạn tá tràng và đầu hỗng tràng",
      "Đoạn cuối hồi tràng sát manh tràng",
      "Toàn bộ khung đại tràng lên và ngang"
    ]
  },
  162: {
    options: [
      "Chất chuyển hóa có hoạt tính phosphoramid mustard",
      "Dẫn xuất trung gian chuyển hóa 4-hydroxycyclophosphamid",
      "Dẫn xuất bất hoạt carboxyphosphamid đào thải qua thận",
      "Chất chuyển hóa acrolein tích tụ gây tổn thương bàng quang"
    ]
  },
  180: {
    options: [
      "Bệnh cơ tim phì đại tắc nghẽn đường ra thất trái",
      "Suy tim giảm phân suất tống máu kèm rung nhĩ nhanh",
      "Suy tim tâm trương bảo tồn phân suất tống máu thất",
      "Viêm cơ tim cấp do virus kèm tụt huyết áp tuần hoàn"
    ]
  },
  183: {
    options: [
      "Phù mắt cá chân kéo dài kèm tăng men gan ứ mật",
      "Mất vị giác, phát ban ngoài da và giảm bạch cầu",
      "Bão giao cảm bùng phát cơn đau ngực khi ngừng thuốc",
      "Tăng áp lực nội sọ đột ngột gây xuất huyết não màng"
    ]
  },
  198: {
    options: [
      "Co thắt tiểu phế quản tận cùng gây suy hô hấp cấp",
      "Kéo nước vào lòng mạch làm tăng thể tích tuần hoàn",
      "Làm giảm tưới máu qua động mạch vành gây hoại tử tim",
      "Ức chế bài xuất nước tiểu gây ứ đọng trong bàng quang"
    ]
  },
  204: {
    options: [
      "Phụ nữ đái tháo đường thai kỳ đang điều trị insulin",
      "Phụ nữ trong giai đoạn cho con bú trong năm đầu tiên",
      "Bệnh nhân có sẹo phẫu thuật lấy thai cũ trên hai năm",
      "Phụ nữ có thai do nguy cơ co bóp tử cung gây sảy thai"
    ]
  },
  213: {
    question: "Một bệnh nhân xơ gan mất bù có biểu hiện tiền hôn mê gan do tăng amoniac máu, đồng thời xét nghiệm phân phát hiện thể bào nang Entamoeba histolytica. Kháng sinh aminoglycosid dùng đường uống không hấp thu vào máu được chỉ định để giải quyết đồng thời cả hai tình trạng này là:",
    options: [
      "Neomycin sulfat",
      "Tobramycin sulfat",
      "Kanamycin sulfat",
      "Paromomycin sulfat"
    ]
  },
  227: {
    question: "Một hoạt chất chống ung thư thuộc nhóm điều hòa thụ thể nội tiết chọn lọc (SERM) được dùng đường uống trong điều trị ung thư biểu mô tuyến vú phụ thuộc hormon. Đặc tính dược lý phân hóa trên các mô đích của phân tử này là gì?",
    options: [
      "Đối kháng thụ thể estrogen ở tử cung, nhưng chủ vận ở vú và xương",
      "Đối kháng thụ thể estrogen ở vú, nhưng chủ vận ở tử cung và xương",
      "Đối kháng thụ thể estrogen ở xương, nhưng chủ vận ở vú và tử cung",
      "Chủ vận hoàn toàn trên tuyến vú và đối kháng hoàn toàn trên xương"
    ]
  },
  244: {
    options: [
      "Nevirapin viên nén",
      "Efavirenz viên nén",
      "Rilpivirin viên nén",
      "Etravirin viên nén"
    ]
  },
  253: {
    options: [
      "Ngay sau khi uống ba mươi phút tại thời điểm đỉnh",
      "Tại thời điểm hai giờ sau bữa ăn no chứa nhiều mỡ",
      "Sau khi uống ít nhất 6-8 giờ hoặc trước liều kế tiếp",
      "Vào thời điểm nửa đêm khi cortisol sinh lý thấp nhất"
    ]
  },
  266: {
    question: "Trong điều trị cơn đau thắt ngực ổn định gắng sức, việc phối hợp giữa một thuốc làm chậm nhịp tim chẹn beta và một thuốc làm giãn hệ tĩnh mạch dung tích lớn mang lại hiệu quả hiệp đồng lý tưởng dựa trên cơ chế nào?",
    options: [
      "Thuốc chẹn beta giảm nhịp tim phản xạ, thuốc giãn tĩnh mạch giảm tiền gánh",
      "Thuốc giãn tĩnh mạch làm tăng nhịp phản xạ triệt tiêu co thắt tiểu phế quản",
      "Thuốc chẹn beta thúc đẩy gan tăng chuyển hóa thuốc giãn tĩnh mạch thành NO",
      "Cả hai thuốc cùng ức chế enzym tổng hợp thromboxan A2 phòng ngừa huyết khối"
    ]
  },
  293: {
    options: [
      "Uống viên phóng thích kéo dài hàng ngày",
      "Tiêm bắp sâu định kỳ duy trì suốt đời",
      "Ngậm dưới lưỡi dạng viên phân tán nhanh",
      "Đặt hậu môn dạng viên đạn tan trong dịch"
    ]
  },
  319: {
    question: "Trong phác đồ kháng khuẩn đường uống kinh điển kết hợp giữa một aminopenicillin và một dẫn chất có nguồn gốc từ Streptomyces clavuligerus, vai trò dược lý cốt lõi của dẫn chất phối hợp là gì?",
    options: [
      "Mở rộng phổ tác dụng bằng cách ức chế tổng hợp thành tế bào vi khuẩn",
      "Kích hoạt trực tiếp enzym autolysin làm đẩy nhanh quá trình ly giải màng",
      "Ức chế enzym beta-lactamase kiểu tự sát bảo vệ phân tử kháng sinh",
      "Phong bế bơm đẩy kháng sinh qua màng giúp tăng tích lũy thuốc nội bào"
    ]
  },
  340: {
    options: [
      "Làm giảm nhu động ruột gây tình trạng táo bón kéo dài",
      "Nhiễm kiềm chuyển hóa, giữ muối nước và acid dội ngược",
      "Tạo phức chelate không tan làm bất hoạt enzym tiêu hóa",
      "Lắng đọng tinh thể urat tại cầu thận gây suy giảm chức năng"
    ]
  },
  341: {
    question: "Bệnh nhân trào ngược dạ dày thực quản nặng được phối hợp thêm một thuốc điều hòa vận động (prokinetic) nhằm tăng trương lực cơ thắt thực quản dưới và gia tăng tháo rỗng dạ dày. Thuốc đối kháng thụ thể Dopamin D2 ngoại vi được ưu tiên lựa chọn là:",
    options: [
      "Metoclopramid hydroclorid",
      "Hyoscin butylbromid",
      "Loperamid hydroclorid",
      "Domperidon maleat"
    ]
  },
  369: {
    options: [
      "Đối kháng dược lý làm triệt tiêu tác dụng chống dị ứng",
      "Làm chậm rỗng dạ dày dẫn đến giảm hấp thu các chất",
      "Tạo chất chuyển hóa độc gây hoại tử tế bào gan diện rộng",
      "Hiệp đồng ức chế thần kinh trung ương và ức chế hô hấp"
    ]
  },
  378: {
    question: "Một nhóm thuốc chống kết tập tiểu cầu đường tĩnh mạch có hiệu lực ức chế mạnh nhất nhờ khả năng phong bế trực tiếp đích liên kết cuối cùng của fibrinogen trên bề mặt tiểu cầu. Nhóm thuốc đó tác động lên thụ thể nào?",
    options: [
      "Thụ thể ADP P2Y12 trên màng tiểu cầu",
      "Thụ thể collagen dưới lớp nội mô mạch",
      "Thụ thể glycoprotein IIb/IIIa bề mặt",
      "Thụ thể thromboxan A2 tại tế bào máu"
    ]
  },
  379: {
    question: "Trong cấp cứu nhồi máu cơ tim cấp hoặc đột quỵ thiếu máu não cấp, hoạt chất tái tổ hợp mô (rtPA) giúp tái thông dòng máu bị tắc nghẽn thông qua xúc tác phản ứng sinh hóa nào?",
    options: [
      "Hoạt hóa prothrombin thành thrombin hòa tan",
      "Chuyển tiền enzym plasminogen thành plasmin",
      "Bất hoạt trực tiếp yếu tố XIII ổn định fibrin",
      "Kích hoạt antithrombin III bất hoạt thrombin"
    ]
  },
  384: {
    question: "Một liệu pháp nhắm trúng đích phân tử đường uống đã tạo nên cuộc cách mạng trong điều trị bệnh bạch cầu mạn dòng tủy mang nhiễm sắc thể Philadelphia t(9;22). Thuốc phát huy hiệu lực thông qua ức chế chọn lọc hoạt tính tyrosine kinase của sản phẩm gen nào?",
    options: [
      "Protein dung hợp PML-RARA",
      "Protein dung hợp BCR-ABL",
      "Thụ thể tyrosine kinase FLT3",
      "Protein đột biến JAK2 V617F"
    ]
  },
  401: {
    question: "Một bệnh nhân trở về từ vùng hồ nước ngọt nhiệt đới xuất hiện tiểu máu vi thể và chẩn đoán xác định nhiễm sán máng (Schistosoma). Thuốc điều trị đặc hiệu làm tăng tính thấm ion calci gây liệt cứng và bộc lộ kháng nguyên bề mặt của sán là:",
    options: [
      "Oxamniquin",
      "Niclosamid",
      "Praziquantel",
      "Ivermectin"
    ]
  },
  402: {
    question: "Một bệnh nhân tim mạch có nồng độ LDL-C tăng rất cao được chỉ định phác đồ phối hợp hai thuốc hạ lipid theo cơ chế 'khóa hai đầu' chuyển hóa cholesterol. Nguyên lý dược lý học của sự kết hợp này là gì?",
    options: [
      "Giảm tổng hợp acid mật ở gan kết hợp tăng bài xuất qua ruột",
      "Giảm tổng hợp cholesterol ở gan kết hợp giảm hấp thu ở ruột",
      "Tăng thoái giáng LDL trong máu kết hợp ức chế lipase tại tụy",
      "Kích hoạt enzym LCAT huyết tương kết hợp ức chế thụ thể PCSK9"
    ]
  },
  403: {
    question: "Một liệu pháp sinh học tiên tiến ứng dụng công nghệ can thiệp RNA (siRNA) tổng hợp tiêm dưới da định kỳ mỗi 6 tháng nhằm ức chế dịch mã tổng hợp protein PCSK9 tại tế bào gan là:",
    options: [
      "Alirocumab",
      "Evolocumab",
      "Inclisiran",
      "Bococizumab"
    ]
  },
  417: {
    options: [
      "Nồng độ hemoglobin toàn phần",
      "Số lượng hồng cầu lưới ngoại vi",
      "Độ bão hòa transferrin huyết thanh",
      "Nồng độ ferritin huyết thanh"
    ]
  },
  418: {
    question: "Một bệnh nhân viêm gan B mạn tính có tải lượng HBV-DNA cao cần điều trị bằng thuốc kháng virus đường uống thế hệ mới có hàng rào kháng thuốc cao và ức chế chọn lọc enzym DNA polymerase. Thuốc đầu tay được khuyến cáo là:",
    options: [
      "Lamivudin viên nén",
      "Telbivudin viên nén",
      "Entecavir viên nén",
      "Adefovir viên nén"
    ]
  },
  424: {
    options: [
      "Tiêm bolus 80 mg rồi truyền liên tục 8 mg/giờ trong 72 giờ",
      "Tiêm ngắt quãng 20 mg mỗi 12 giờ kết hợp truyền muối",
      "Uống viên bao tan trong ruột 40 mg mỗi sáng khi đói",
      "Tiêm bắp sâu liều cao duy nhất một lần trong đợt cấp"
    ]
  },
  429: {
    options: [
      "Tăng tiết dịch lỏng và kích thích tổng hợp surfactant",
      "Ức chế chọn lọc trung tâm phản xạ ho tại hành não",
      "Cắt trực tiếp cầu nối disulfid chuỗi mucopolysaccharid",
      "Tăng đào thải ion calci vào lòng đường dẫn khí phế quản"
    ]
  },
  440: {
    question: "Biến chứng teo mô mỡ (Lipoatrophy) hoặc phì đại mô mỡ (Lipohypertrophy) tại vị trí tiêm một loại hormon peptide điều hòa đường huyết dưới da thường xảy ra do nguyên nhân nào và làm ảnh hưởng ra sao đến điều trị?",
    options: [
      "Tiêm lặp lại một vị trí làm hấp thu hormon bị biến động thất thường",
      "Phản ứng dị ứng qua kháng thể IgE làm xơ hóa tổ chức liên kết dưới da",
      "Vi khuẩn kỵ khí xâm nhập vào mô mỡ gây phản ứng viêm mủ cục bộ mạn tính",
      "Kích thích tăng sinh quá mức tế bào thượng bì tạo các khối u xơ biểu mô"
    ]
  },
  445: {
    options: [
      "Phản ứng chuyển amin gắn vào cetoglutarat",
      "Phản ứng carboxyl hóa cố định carbon dioxid",
      "Phản ứng khử hydro oxy hóa của acid béo",
      "Phản ứng methyl hóa bảo vệ cấu trúc DNA"
    ]
  },
  446: {
    question: "Một bệnh nhân ung thư sau đợt hóa trị liệu xuất hiện sốt giảm bạch cầu hạt trung tính nặng. Chế phẩm sinh học tái tổ hợp dòng yếu tố kích thích cụm (G-CSF) được chỉ định cấp cứu để phục hồi số lượng bạch cầu là:",
    options: [
      "Epoetin alfa",
      "Romiplostim",
      "Filgrastim",
      "Oprelvekin"
    ]
  },
  470: {
    question: "Bệnh nhân đang dùng thuốc giảm đau dạng tiền chất (Codein) nhưng không thấy thuyên giảm đau sau khi được kê thêm một thuốc điều trị trầm cảm. Hoạt chất gây ức chế mạnh isoenzym CYP2D6 làm giảm tạo morphin có hoạt tính là:",
    options: [
      "Fluoxetin",
      "Sertralin",
      "Citalopram",
      "Venlafaxin"
    ]
  },
  476: {
    options: [
      "Argatroban hoặc Bivalirudin",
      "Enoxaparin hoặc Dalteparin",
      "Danaparoid phối hợp Fondaparinux",
      "Heparin tiêu chuẩn phối hợp Protamin"
    ]
  },
  483: {
    question: "Một bệnh nhân HIV kháng đa thuốc cần bổ sung hoạt chất đường tiêm dưới da có cơ chế gắn chọn lọc vào glycoprotein gp41 nhằm ngăn cản sự hòa màng lipid giữa vỏ virus và màng tế bào lympho T-CD4. Phân tử đó là:",
    options: [
      "Maraviroc",
      "Ibalizumab",
      "Fostemsavir",
      "Enfuvirtid"
    ]
  },
  490: {
    question: "Trong phác đồ kháng khuẩn hiệp đồng tác động vào hai chặng liên tiếp tổng hợp acid folic (viên Co-trimoxazol), để đạt được tỷ lệ hiệp đồng 1:5 trong máu thì tỷ lệ phối hợp nồng độ sulfamethoxazol và trimethoprim trong huyết tương phải duy trì ở mức bao nhiêu?",
    options: [
      "Tỷ lệ năm sulfamethoxazol trên một trimethoprim",
      "Tỷ lệ mười sulfamethoxazol trên một trimethoprim",
      "Tỷ lệ hai mươi sulfamethoxazol trên một trimethoprim",
      "Tỷ lệ bốn mươi sulfamethoxazol trên một trimethoprim"
    ]
  },
  500: {
    options: [
      "Rhodopsin",
      "Iodopsin",
      "Porphyropsin",
      "Cyanopsin"
    ]
  }
};

let applied = 0;
for (const [idStr, ref] of Object.entries(refinements)) {
  const id = parseInt(idStr, 10);
  const q = DUOCLY2_EXAM_BANK.find(item => item.id === id);
  if (q) {
    if (ref.question) q.question = ref.question;
    if (ref.options) q.options = ref.options;
    applied++;
  }
}

console.log(`Applied advanced clinical refinements to ${applied} questions.`);

const header = `// NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM DƯỢC LÝ 2 CHUẨN BỘ Y TẾ (${DUOCLY2_EXAM_BANK.length} CÂU)
// Đào tạo Dược sĩ Đại học - Bác sĩ Đa khoa (Bộ Y tế - PGS.TS. Mai Tất Tố, TS. Vũ Thị Trâm)
// Chuẩn khung 20 bài (32 tiết) - 100% không mở ngoặc đơn lộ đáp án - Đáp án xáo trộn đều A/B/C/D
const DUOCLY2_EXAM_BANK = ${JSON.stringify(DUOCLY2_EXAM_BANK, null, 2)};

const DUOCLY2_MATRIX_32H = ${JSON.stringify(DUOCLY2_MATRIX_32H, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DUOCLY2_EXAM_BANK, DUOCLY2_MATRIX_32H };
}
`;

fs.writeFileSync(bankPath, header, 'utf8');
console.log(`Saved advanced refinements to ${bankPath}`);
