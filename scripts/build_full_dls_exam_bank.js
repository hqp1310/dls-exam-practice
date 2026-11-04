const fs = require('fs');
const path = require('path');

const questionsFile = path.join(__dirname, '..', 'questions_800.js');
const currentBank = require(questionsFile);

console.log('Current bank size before adding full Dls.pdf questions:', currentBank.length);

// Generate 60 authentic, clinical case questions strictly mirroring Dls.pdf & Sách Dược Lâm Sàng Bộ Y tế
const realExamQuestions = [
  // ==========================================
  // CHƯƠNG: ĐIỀU TRỊ TĂNG HUYẾT ÁP & CẤP CỨU THA
  // ==========================================
  {
    chapter: "Điều trị Tăng huyết áp & Cấp cứu THA",
    level: "Vận dụng",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Bệnh nhân nam 58 tuổi, tiền sử đái tháo đường typ 2 điều trị 5 năm, đến khám định kỳ. Kết quả đo huyết áp 2 lần cách nhau 15 phút là 155/95 mmHg, xét nghiệm nước tiểu có vi đạm niệu (microalbumin niệu 180 mg/24h). Theo phác đồ điều trị THA của Bộ Y tế và VNHA, nhóm thuốc hạ huyết áp được ưu tiên lựa chọn khởi đầu hàng đầu cho bệnh nhân này là:",
    options: [
      "Thuốc ức chế men chuyển (như Enalapril 5-10 mg/ngày) hoặc thuốc chẹn thụ thể angiotensin II (như Losartan 50 mg/ngày)",
      "Thuốc chẹn thụ thể beta giao cảm không chọn lọc (như Propranolol 40 mg x 2 lần/ngày)",
      "Thuốc lợi tiểu quai bài xuất natri nhanh và mạnh (như Furosemid 40 mg/ngày)",
      "Thuốc chẹn thụ thể alpha-1 adrenergic ngoại biên gây giãn mạch (như Prazosin 1 mg x 2 lần/ngày)"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng và hướng dẫn của Bộ Y tế/VNHA: Thuốc ACEi hoặc ARB là lựa chọn số 1 cho bệnh nhân THA có đái tháo đường nhờ tác dụng giãn tiểu động mạch đi của cầu thận, làm giảm áp lực nội cầu thận, giảm bài xuất albumin niệu và làm chậm tiến triển suy thận đái tháo đường.",
    reference: "Dls.pdf Trang 1 & Sách Dược Lâm Sàng BYT"
  },
  {
    chapter: "Điều trị Tăng huyết áp & Cấp cứu THA",
    level: "Vận dụng cao",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Bệnh nhân nam 60 tuổi mắc THA kèm ĐTĐ typ 2 đang được điều trị bằng Enalapril 10 mg/ngày phối hợp Metformin 1000 mg/ngày. Sau 1 tháng tái khám, huyết áp đo được vẫn ở mức 148/92 mmHg (chưa đạt huyết áp mục tiêu < 130/80 mmHg). Dược sĩ lâm sàng cần tư vấn cho bác sĩ phối hợp thêm thuốc hạ áp nào phù hợp nhất:",
    options: [
      "Phối hợp thêm Amlodipin 5 mg/ngày (nhóm chẹn kênh calci DHP)",
      "Phối hợp thêm Atenolol 50 mg/ngày (nhóm chẹn thụ thể beta-1)",
      "Phối hợp thêm Hydrochlorothiazid liều cao 50 mg/ngày",
      "Thay thế Enalapril bằng Methyldopa 250 mg x 2 lần/ngày"
    ],
    correct: 0,
    explanation: "Phác đồ chuẩn bậc 2 cho THA kèm ĐTĐ là phối hợp ACEi (hoặc ARB) với DHP-CCB (Amlodipin). Amlodipin giãn tiểu động mạch ngoại vi, hạ áp mạnh mẽ, trung tính với chuyển hóa lipid và glucose máu, không làm nặng thêm đề kháng insulin.",
    reference: "Dls.pdf Trang 1 (Câu 12: THA + ĐTĐ ưu tiên amlodipin)"
  },
  {
    chapter: "Điều trị Tăng huyết áp & Cấp cứu THA",
    level: "Vận dụng cao",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Một bệnh nhân tăng huyết áp vô căn 62 tuổi đã được điều trị phối hợp tối ưu 3 nhóm thuốc hạ áp gồm: Perindopril 10 mg + Amlodipin 10 mg + Indapamid 1,5 mg ở liều dung nạp tối đa nhưng huyết áp tại phòng khám vẫn duy trì 150/95 mmHg (THA kháng trị). Thuốc được khuyến cáo ưu tiên bổ sung tiếp theo (bước 4) là:",
    options: [
      "Spironolacton liều thấp 25 - 50 mg/ngày (thuốc lợi tiểu kháng Aldosteron)",
      "Diltiazem 180 mg/ngày dạng giải phóng kéo dài",
      "Nifedipin dạng viên nang tác dụng nhanh ngậm dưới lưỡi",
      "Clonidin 0,15 mg x 2 lần/ngày đường uống kéo dài"
    ],
    correct: 0,
    explanation: "Theo khuyến cáo điều trị THA kháng trị: Khi đã dùng đủ 3 thuốc (ACEi/ARB + CCB + Lợi tiểu Thiazid/Thiazid-like) mà HA chưa kiểm soát, thuốc bổ sung hàng đầu bước 4 là Spironolacton liều thấp (25 - 50 mg/ngày) nhằm phong bế hiện tượng tăng Aldosteron thứ phát.",
    reference: "Dls.pdf Trang 1 (Câu 11: Phối hợp 3 thuốc ko đáp ứng thêm thuốc nào)"
  },
  {
    chapter: "Điều trị Tăng huyết áp & Cấp cứu THA",
    level: "Nhận biết",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Tác dụng không mong muốn thường gặp nhất của Nitroglycerin và các dẫn chất nitrat hữu cơ ngậm dưới lưỡi trên hệ mạch máu do cơ chế giãn mạch nhanh và mạnh là:",
    options: [
      "Nhức đầu dữ dội do giãn mạch màng não, đỏ bừng mặt và hạ huyết áp tư thế đứng kèm nhịp tim nhanh phản xạ",
      "Tăng huyết áp kịch phát do co thắt mạch ngoại vi dẫn đến hoại tử khô các ngón chi",
      "Nhịp tim chậm nghiêm trọng (< 40 ck/p) kèm block nhĩ thất hoàn toàn độ 3",
      "Co thắt mạch vành nghịch ngôn làm thiếu máu cơ tim cấp trầm trọng"
    ],
    correct: 0,
    explanation: "Nitroglycerin giãn tĩnh mạch và động mạch toàn thân. Giãn mạch màng não gây nhức đầu (gặp ở > 50% người bệnh trong những ngày đầu); giãn mạch ngoại vi gây hạ huyết áp tư thế đứng và nhịp nhanh phản xạ.",
    reference: "Dls.pdf Trang 1 (Câu 2: Tdkmm của nitroglycerin trên mạch)"
  },

  // ==========================================
  // CHƯƠNG: TIÊU CHẢY CẤP Ở TRẺ EM
  // ==========================================
  {
    chapter: "Tiêu chảy cấp ở trẻ em",
    level: "Nhận biết",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Theo định nghĩa của Tổ chức Y tế Thế giới (WHO) và Bộ Y tế, tiêu chảy cấp (TCC) và tiêu chảy kéo dài được phân định dựa trên mốc thời gian nào sau đây?",
    options: [
      "Tiêu chảy cấp có thời gian diễn biến < 14 ngày; tiêu chảy kéo dài là đợt tiêu chảy khởi phát cấp tính nhưng kéo dài từ 14 ngày trở lên",
      "Tiêu chảy cấp có thời gian diễn biến < 7 ngày; tiêu chảy kéo dài là tiêu chảy kéo dài từ 7 ngày trở lên",
      "Tiêu chảy cấp diễn biến < 21 ngày; tiêu chảy kéo dài diễn biến trên 1 tháng",
      "Tiêu chảy cấp diễn biến < 3 ngày; tiêu chảy kéo dài diễn biến từ 3 đến 10 ngày"
    ],
    correct: 0,
    explanation: "WHO và Bộ Y tế quy định: Tiêu chảy cấp tính là tiêu chảy khởi phát đột ngột và kéo dài dưới 14 ngày (thường tự giới hạn trong 5 - 7 ngày). Nếu đợt tiêu chảy bắt đầu cấp tính nhưng kéo dài từ 14 ngày trở lên thì gọi là tiêu chảy kéo dài (Persistent diarrhea).",
    reference: "Dls.pdf Trang 1 (Câu 1: Tiêu chảy kéo dài là gì; Câu 7: TCC là ít nhất bn ngày < 14 ngày)"
  },
  {
    chapter: "Tiêu chảy cấp ở trẻ em",
    level: "Vận dụng",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Một bệnh nhi 3 tuổi bị tiêu chảy cấp, khi vào viện khám thấy trẻ li bì, khó đánh thức, mắt rất trũng, uống nước rất kém hoặc không thể uống được, nếp véo da bụng mất rất chậm (> 2 giây). Tình trạng này tương ứng với lượng dịch cơ thể bị mất là:",
    options: [
      "Mất nước nặng (Mất trên 10% trọng lượng cơ thể)",
      "Mất nước mức độ vừa (Mất từ 5% đến 10% trọng lượng cơ thể)",
      "Mất nước mức độ nhẹ (Mất dưới 5% trọng lượng cơ thể)",
      "Chưa có dấu hiệu mất nước trên lâm sàng (Mất dưới 2% trọng lượng cơ thể)"
    ],
    correct: 0,
    explanation: "Theo thang phân loại của WHO và Bộ Y tế: Trẻ có dấu hiệu li bì, mắt rất trũng, không uống được hoặc uống kém, nếp véo da mất rất chậm (> 2s) được xếp vào 'Mất nước nặng' (Phác đồ C), lượng dịch mất > 10% trọng lượng cơ thể. Cần xử trí cấp cứu truyền tĩnh mạch ngay dung dịch Ringer Lactat.",
    reference: "Dls.pdf Trang 1 (Câu 8: Tiêu chảy li bì... Là mất bn lg dịch: 10%)"
  },
  {
    chapter: "Tiêu chảy cấp ở trẻ em",
    level: "Vận dụng",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Một trẻ 7 tuổi bị tiêu chảy cấp ngày thứ nhất, đi ngoài phân lỏng 4 lần/ngày nhưng chưa có dấu hiệu mất nước (tỉnh táo, mắt không trũng, uống nước bình thường). Theo phác đồ A của Bộ Y tế, lượng dung dịch Oresol cần bù cho trẻ sau mỗi lần đi ngoài phân lỏng là:",
    options: [
      "100 - 200 ml sau mỗi lần đi ngoài phân lỏng",
      "50 - 100 ml sau mỗi lần đi ngoài phân lỏng",
      "300 - 500 ml sau mỗi lần đi ngoài phân lỏng",
      "10 - 20 ml sau mỗi lần đi ngoài phân lỏng"
    ],
    correct: 0,
    explanation: "Phác đồ A (Điều trị tiêu chảy tại nhà khi chưa mất nước): Trẻ dưới 2 tuổi bù 50 - 100 ml sau mỗi lần đi ngoài phân lỏng; Trẻ từ 2 đến 10 tuổi bù 100 - 200 ml sau mỗi lần đi ngoài; Trẻ từ 10 tuổi trở lên uống theo nhu cầu đến khi hết khát.",
    reference: "Dls.pdf Trang 1 (Câu 9: Tiêu chảy chưa mất nước 7 tuổi bù ORS bn: 100-200ml)"
  },
  {
    chapter: "Tiêu chảy cấp ở trẻ em",
    level: "Vận dụng",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Chế độ liều dùng Racecadotril chuẩn trong điều trị hỗ trợ tiêu chảy cấp ở trẻ em nhằm ức chế enzym Enkephalinase ruột mà không làm ảnh hưởng nhu động ruột là:",
    options: [
      "1,5 mg/kg/lần x 3 lần/ngày, uống đều đặn cùng với bù dịch Oresol (tối đa không quá 7 ngày)",
      "10 mg/kg/lần x 1 lần duy nhất trong ngày trước khi đi ngủ",
      "0,2 mg/kg/lần x 4 lần/ngày kết hợp kháng sinh đường ruột",
      "5 mg/kg/lần x 2 lần/ngày uống liên tục trong 14 ngày"
    ],
    correct: 0,
    explanation: "Racecadotril là thuốc kháng tiết ruột chọn lọc thông qua ức chế enkephalinase. Liều dùng chuẩn cho trẻ em: 1,5 mg/kg/lần, ngày uống 3 lần (cách nhau 8 giờ), dùng đến khi phân thành khuôn hoặc tối đa không quá 7 ngày.",
    reference: "Dls.pdf Trang 2 (Câu 3: Liều dùng racecadotril trong dtri tc cap: 1,5 mg/kg/lần x 3 lần/ngày)"
  },
  {
    chapter: "Tiêu chảy cấp ở trẻ em",
    level: "Nhận biết",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Chủng vi sinh vật nào sau đây là men vi sinh (Probiotic) có bằng chứng lâm sàng rõ ràng nhất được WHO và ESPGHAN khuyến cáo sử dụng hỗ trợ điều trị tiêu chảy cấp ở trẻ em?",
    options: [
      "Saccharomyces boulardii hoặc Lactobacillus rhamnosus GG",
      "Escherichia coli phân lập từ đường ruột người khỏe mạnh",
      "Clostridium difficile nồng độ bào tử sống tinh khiết",
      "Streptococcus pneumoniae chủng giảm độc lực dùng đường uống"
    ],
    correct: 0,
    explanation: "Saccharomyces boulardii (nấm men vi sinh) và Lactobacillus rhamnosus GG (vi khuẩn sinh acid lactic) là 2 chủng probiotic có bằng chứng y học thực chứng cao nhất (mức độ 1A), giúp cạnh tranh bám dính, giảm tiết độc tố và rút ngắn thời gian tiêu chảy khoảng 24 giờ.",
    reference: "Dls.pdf Trang 2 (Câu 4: Vsv nào là probiotic đc sd trong tc cấp & Câu 16: mục đích cân bằng)"
  },
  {
    chapter: "Tiêu chảy cấp ở trẻ em",
    level: "Vận dụng cao",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Tại sao thuốc chống nôn Ondansetron (kháng thụ thể 5-HT3) KHÔNG được khuyến cáo sử dụng thường quy cho trẻ bị tiêu chảy cấp chỉ đi ngoài phân toàn nước đơn thuần?",
    options: [
      "Ondansetron làm tăng ứ đọng dịch trong lòng ruột và có thể làm kéo dài thời gian tiêu chảy của trẻ",
      "Ondansetron gây kích thích tăng co bóp cơ trơn phế quản dẫn đến co thắt thanh quản cấp tính",
      "Ondansetron làm giảm mạnh sự hấp thu muối natri và glucose tại vi nhung mao ruột",
      "Ondansetron gây độc tính hoại tử tủy xương và suy gan cấp tính ở trẻ nhỏ"
    ],
    correct: 0,
    explanation: "Ondansetron chỉ được cân nhắc khi trẻ nôn liên tục không thể bù dịch bằng đường uống (uống vào nôn ra ngay). Trong trường hợp trẻ chỉ đi ngoài phân nước mà không nôn nhiều, Ondansetron làm chậm tốc độ tống xuất chất độc, tăng ứ dịch lòng ruột và làm đợt tiêu chảy kéo dài hơn.",
    reference: "Dls.pdf Trang 2 (Câu 18: CĐ ondansetron cho bn nôn... Ko dùng cho bv chỉ tiêu chảy nước vì kéo dài TC)"
  },
  {
    chapter: "Tiêu chảy cấp ở trẻ em",
    level: "Vận dụng",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Kết quả xét nghiệm điện giải đồ của một trẻ bị tiêu chảy cấp ghi nhận nồng độ Natri huyết tương là 140 mmol/L. Dược sĩ lâm sàng nhận định đây là thể mất nước nào?",
    options: [
      "Mất nước đẳng trương (Natri huyết tương nằm trong khoảng bình thường 130 - 150 mmol/L)",
      "Mất nước ưu trương (Natri huyết tương tăng cao trên 150 mmol/L)",
      "Mất nước nhược trương (Natri huyết tương giảm sâu dưới 130 mmol/L)",
      "Mất nước kèm rối loạn toan kiềm nặng chuyển hóa"
    ],
    correct: 0,
    explanation: "Phân loại mất nước theo nồng độ Natri máu: Mất nước đẳng trương khi Natri máu trong khoảng 130 - 150 mmol/L (tỷ lệ mất nước và điện giải tương đương, chiếm > 70% các ca tiêu chảy cấp); Nhược trương khi Na+ < 130 mmol/L; Ưu trương khi Na+ > 150 mmol/L.",
    reference: "Dls.pdf Trang 2 (Câu 20: nồng độ Natri = 140 mmol/L là mất nước đẳng trương)"
  },

  // ==========================================
  // CHƯƠNG: ĐẠI CƯƠNG DLS & THÔNG TIN THUỐC
  // ==========================================
  {
    chapter: "Đại cương DLS & Thông tin thuốc",
    level: "Nhận biết",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Theo Nghị định 131/2020/NĐ-CP quy định về tổ chức và hoạt động Dược lâm sàng, định biên nhân lực Dược sĩ lâm sàng tại bệnh viện có quy mô từ 200 giường bệnh trở lên được quy định như thế nào?",
    options: [
      "Phải có 1 người phụ trách hoạt động DLS; có ít nhất 1 người làm công tác DLS cho 200 giường bệnh nội trú; có ít nhất 1 người làm công tác DLS cho 1.000 đơn thuốc ngoại trú/ngày",
      "Chỉ cần 1 Dược sĩ đại học duy nhất phụ trách toàn bộ hoạt động cấp phát và tư vấn thuốc toàn bệnh viện",
      "Mỗi khoa lâm sàng bắt buộc phải có ít nhất 5 Dược sĩ lâm sàng làm việc trực tiếp tại buồng bệnh",
      "Cứ 50 giường bệnh nội trú phải có 1 Dược sĩ chuyên khoa 2 trực thường trú 24/24 giờ"
    ],
    correct: 0,
    explanation: "Theo Khoản 1 Điều 6 Nghị định 131/2020/NĐ-CP: Bệnh viện từ 200 giường trở lên phải có 1 người phụ trách chung; bố trí ít nhất 1 người làm công tác DLS cho 200 giường bệnh nội trú; và ít nhất 1 người cho 1.000 đơn thuốc bảo hiểm y tế ngoại trú trong 1 ngày.",
    reference: "Dls.pdf Trang 3 & 4 (Câu 4: Số ds ls trong các trường hợp theo NĐ 131/2020)"
  },
  {
    chapter: "Đại cương DLS & Thông tin thuốc",
    level: "Nhận biết",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Điều kiện tiêu chuẩn về văn bằng và thời gian thực hành chuyên môn đối với người phụ trách hoạt động Dược lâm sàng tại cơ sở khám bệnh, chữa bệnh theo Nghị định 131/2020/NĐ-CP là:",
    options: [
      "Có bằng tốt nghiệp Dược sĩ đại học và có ít nhất 2 năm thực hành chuyên môn về Dược lâm sàng tại cơ sở KCB (Thạc sĩ, CK1: từ 12 tháng; Tiến sĩ, CK2: từ 6 tháng)",
      "Có bằng Dược sĩ cao đẳng và có thời gian công tác từ 5 năm trở lên tại khoa Dược",
      "Chỉ cần có chứng chỉ hành nghề dược bán lẻ thuốc tại các nhà thuốc tư nhân",
      "Bắt buộc phải có bằng Bác sĩ đa khoa định hướng chuyên khoa Dược lý học"
    ],
    correct: 0,
    explanation: "Theo Điều 4 Nghị định 131/2020/NĐ-CP: Người phụ trách DLS phải có văn bằng Dược sĩ đại học trở lên; có thời gian thực hành chuyên môn DLS tại cơ sở KCB ít nhất 2 năm (với Thạc sĩ Dược học/CK1: giảm còn 12 tháng; với Tiến sĩ/CK2: giảm còn 6 tháng).",
    reference: "Dls.pdf Trang 4 (Câu 15: Đk làm DLS)"
  },
  {
    chapter: "Đại cương DLS & Thông tin thuốc",
    level: "Nhận biết",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Theo chỉ tiêu khảo sát kê đơn thuốc hợp lý của Tổ chức Y tế Thế giới (WHO) được trích dẫn trong Giáo trình Dược Lâm Sàng Bộ Y tế, tỷ lệ phần trăm đơn thuốc có kê Kháng sinh ngoại trú nên nằm trong khoảng:",
    options: [
      "20% - 30% tổng số đơn thuốc khảo sát",
      "5% - 10% tổng số đơn thuốc khảo sát",
      "50% - 60% tổng số đơn thuốc khảo sát",
      "Phải đạt 100% tất cả các đơn thuốc điều trị"
    ],
    correct: 0,
    explanation: "Theo Bảng chỉ tiêu kê đơn của WHO (SGK trang 21-22): Số thuốc TB/đơn: ~ 1,5; Tỷ lệ thuốc tên gốc: 100%; Tỷ lệ đơn có kháng sinh: 20 - 30%; Tỷ lệ đơn có thuốc tiêm: ~ 20%; Tỷ lệ thuốc trong danh mục thiết yếu: 100%.",
    reference: "Dls.pdf Trang 3 (Câu 3: Tỉ lệ % các thuốc trong đơn) & SGK tr. 22"
  },
  {
    chapter: "Đại cương DLS & Thông tin thuốc",
    level: "Nhận biết",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Mốc lịch sử đánh dấu sự thâm nhập chính thức của chuyên ngành Dược lâm sàng vào hệ thống y tế và đào tạo đại học tại Việt Nam là sự kiện nào?",
    options: [
      "Hội thảo 'Sử dụng thuốc hợp lý và thông tin thuốc' ngày 20 - 23/11/1990 do ĐH Dược Hà Nội phối hợp với ĐH Curtin (Australia) tổ chức",
      "Nghị định 43/2000/NĐ-CP ban hành khung chương trình đào tạo Dược sĩ đại học năm 2000",
      "Đại hội đồng Hội Dược học Việt Nam lần thứ nhất tổ chức tại thủ đô Hà Nội năm 1955",
      "Quyết định thành lập Vụ Dược thuộc Bộ Y tế Việt Nam vào năm 1980"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 11): Mốc đánh dấu sự thâm nhập thực sự của DLS vào Việt Nam bắt đầu từ hội thảo ngày 20 - 23/11/1990 tại ĐH Dược Hà Nội do tổ chức 'Tầm nhìn thế giới - Australia' tài trợ, với sự tham gia của GS. S. Kailis và TS. P. Passmore (ĐH Curtin).",
    reference: "Dls.pdf Trang 4 (Câu 7: Dls bắt đầu vào VN khi nào: 20-23/11/1990) & SGK tr. 11"
  },
  {
    chapter: "Đại cương DLS & Thông tin thuốc",
    level: "Nhận biết",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Trong 4 tiêu chuẩn lựa chọn thuốc hợp lý (Hiệu quả, An toàn, Tiện dụng, Kinh tế) được trình bày trong Giáo trình Dược Lâm Sàng Bộ Y tế, chỉ số 'Hiệu quả / Rủi ro' (Effectiveness / Risk) là thước đo phản ánh tiêu chuẩn nào?",
    options: [
      "Tiêu chuẩn: An toàn cao (Safety - A)",
      "Tiêu chuẩn: Kinh tế điều trị (Cost - K)",
      "Tiêu chuẩn: Tiện dụng dễ dùng (Convenience - T)",
      "Tiêu chuẩn: Sẵn có tại cơ sở y tế (Availability - S)"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng Bộ Y tế (trang 14): Tiêu chuẩn An toàn (ký hiệu A) thường được so sánh và đánh giá theo tỷ lệ Hiệu quả / Rủi ro (không an toàn). Trị số này càng cao thì tính an toàn của thuốc càng tốt.",
    reference: "Dls.pdf Trang 4 (Câu 8: Hiệu quả / rủi ro là chỉ số gì: An toàn) & SGK tr. 14"
  },
  {
    chapter: "Đại cương DLS & Thông tin thuốc",
    level: "Vận dụng",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Nội dung thông tin thuốc cần ưu tiên cung cấp hàng đầu cho NGƯỜI BỆNH tại quầy phát thuốc ngoại trú để đảm bảo tuân thủ điều trị bao gồm:",
    options: [
      "Tên thuốc, mục đích dùng, liều lượng, cách dùng, thời điểm uống thuốc so với bữa ăn, lưu ý bảo quản và các dấu hiệu bất thường cần báo bác sĩ",
      "Cơ chế tác động phân tử, hằng số ái lực thụ thể Kd và cấu trúc không gian của phân tử thuốc",
      "Bảng số liệu dược động học chi tiết về AUC, thể tích phân bố Vd và độ thanh thải nội tại Cli",
      "Quy trình tổng hợp hóa học hoạt chất và công nghệ dập viên nén phóng thích kéo dài"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 123-124): Thông tin thuốc cho người bệnh phải ngắn gọn, dễ hiểu, thực tế, nhấn mạnh tên thuốc, liều dùng, đường dùng, thời điểm uống, cách bảo quản và dặn dò theo dõi tác dụng không mong muốn. Tránh dùng thuật ngữ dược lý chuyên sâu chỉ dành cho cán bộ y tế.",
    reference: "Dls.pdf Trang 9 (Câu 2: Thông tin cung cấp cho người bệnh) & SGK tr. 124"
  },

  // ==========================================
  // CHƯƠNG: DƯỢC ĐỘNG HỌC & SUY GAN, THẬN
  // ==========================================
  {
    chapter: "Dược động học & Suy gan, thận",
    level: "Nhận biết",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Thông số dược động học cơ bản nào phản ánh trực tiếp và có tính chất quyết định nhất đối với việc đánh giá Sinh khả dụng (SKD) và Đương lượng sinh học của một chế phẩm thuốc?",
    options: [
      "Diện tích dưới đường cong nồng độ thuốc trong máu theo thời gian (AUC)",
      "Thời gian bán thải bài xuất của thuốc (t1/2)",
      "Tốc độ lọc cầu thận ước tính qua creatinin (eGFR)",
      "Hệ số phân bố dầu nước (Lipid / Nước) của phân tử thuốc"
    ],
    correct: 0,
    explanation: "AUC (Area Under the Curve) biểu thị lượng hoạt chất nguyên vẹn vào được đại tuần hoàn sau một thời gian t. Đây là thông số trung tâm bắt buộc để tính Sinh khả dụng tuyệt đối (F%), sinh khả dụng tương đối và chứng minh tương đương sinh học (phải nằm trong khoảng 80 - 125%).",
    reference: "Dls.pdf Trang 4 (Câu 1: Cso quyết định skd là gì: AUC) & SGK tr. 26"
  },
  {
    chapter: "Dược động học & Suy gan, thận",
    level: "Vận dụng cao",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Tại sao ở bệnh nhân cao tuổi và bệnh nhân có suy giảm chức năng gan, khi cần chỉ định nhóm an thần Benzodiazepin, Dược sĩ lâm sàng thường khuyến cáo ưu tiên lựa chọn Oxazepam hoặc Lorazepam thay vì Diazepam?",
    options: [
      "Vì Oxazepam và Lorazepam chuyển hóa trực tiếp qua phản ứng liên hợp Glucuronic (pha II) không phụ thuộc enzym oxy hóa CYP450 của gan, ít bị tích lũy thuốc",
      "Vì Diazepam đào thải hoàn toàn qua thận dạng còn hoạt tính gây hoại tử ống thận cấp tính",
      "Vì Oxazepam có thời gian bán thải dài hơn Diazepam gấp 5 lần giúp duy trì giấc ngủ sâu suốt đêm",
      "Vì Diazepam làm tăng men gan AST và ALT nhanh chóng dẫn đến xơ gan ứ mật"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 39, 156): Diazepam chuyển hóa qua enzym oxy hóa ở pha I (CYP450) tạo ra dẫn chất Nordiazepam có hoạt tính sinh học rất dài (t1/2 kéo dài đến 60-120 giờ ở người già/suy gan). Ngược lại, Oxazepam và Lorazepam chuyển hóa trực tiếp qua pha II (liên hợp acid glucuronic) thành chất không hoạt tính và đào thải qua thận, không tích lũy độc tính.",
    reference: "Dls.pdf Trang 5 (Câu 1: Ts dùng oxazepam thay diazepam) & SGK tr. 39"
  },
  {
    chapter: "Dược động học & Suy gan, thận",
    level: "Vận dụng cao",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Bệnh nhân nữ 40 tuổi, cân nặng 58 kg, chiều cao 160 cm, xét nghiệm creatinin huyết thanh là 170 µmol/L. Dược sĩ lâm sàng ước tính độ thanh thải creatinin (ClCr) theo công thức Cockcroft - Gault cho bệnh nhân này là:",
    options: [
      "Khoảng 35,6 ml/phút (đã nhân hệ số hiệu chỉnh 0,85 cho nữ)",
      "Khoảng 41,9 ml/phút (chưa tính hệ số hiệu chỉnh cho nữ)",
      "Khoảng 65,2 ml/phút (chức năng thận nằm trong giới hạn bình thường)",
      "Khoảng 18,4 ml/phút (suy thận nặng giai đoạn 4)"
    ],
    correct: 0,
    explanation: "Công thức Cockcroft-Gault khi Creatinin tính bằng µmol/L: ClCr (nam) = [(140 - tuổi) * Cân nặng (kg)] / [0,814 * Cr_ht (µmol/L)] = [(140 - 40) * 58] / [0,814 * 170] = 5800 / 138,38 = 41,91 ml/phút. Vì bệnh nhân là NỮ nên nhân thêm 0,85: ClCr (nữ) = 41,91 * 0,85 = 35,62 ml/phút.",
    reference: "Dls.pdf Trang 6 (Câu 24: Bn nữ 40 tuổi nặng 58kg cre=170 mcmol/l)"
  },
  {
    chapter: "Dược động học & Suy gan, thận",
    level: "Vận dụng cao",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Bệnh nhân nam 54 tuổi, cân nặng 60 kg, chiều cao 170 cm, xét nghiệm creatinin huyết thanh là 160 µmol/L. Độ thanh thải creatinin (ClCr) ước tính theo Cockcroft - Gault của bệnh nhân này là:",
    options: [
      "Khoảng 39,6 ml/phút (thuộc mức suy thận trung bình)",
      "Khoảng 52,5 ml/phút (suy thận mức độ nhẹ)",
      "Khoảng 33,7 ml/phút (do nhân hệ số 0,85)",
      "Khoảng 75,0 ml/phút (chức năng thận hoàn toàn bình thường)"
    ],
    correct: 0,
    explanation: "Bệnh nhân là NAM: ClCr = [(140 - tuổi) * Cân nặng] / [0,814 * Cr_ht] = [(140 - 54) * 60] / [0,814 * 160] = (86 * 60) / 130,24 = 5160 / 130,24 = 39,62 ml/phút.",
    reference: "Dls.pdf Trang 6 (Câu 24: Bn nam 54 tuổi nặng 60kg cre=160 mcmol/l)"
  },
  {
    chapter: "Dược động học & Suy gan, thận",
    level: "Vận dụng",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Ở bệnh nhân xơ gan nặng hoặc suy kiệt có biến đổi dược động học nào sau đây làm tăng đáng kể nguy cơ quá liều và ngộ độc thuốc?",
    options: [
      "Giảm chuyển hóa qua gan lần đầu (first-pass) và giảm tổng hợp Albumin huyết tương dẫn đến tăng nồng độ thuốc tự do có hoạt tính",
      "Tăng sinh tổng hợp enzym cytochrom P450 làm tăng tốc độ khử hoạt thuốc tại gan",
      "Tăng nồng độ protein Albumin huyết tương làm thuốc bị giữ chặt không giải phóng ra mô",
      "Tăng lưu lượng máu qua tĩnh mạch cửa gan làm tăng thanh thải lọc sạch thuốc"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 37-38): Xơ gan nặng làm giảm lưu lượng máu qua gan và giảm khả năng chuyển hóa của tế bào gan, làm tăng sinh khả dụng của các thuốc có Eh > 0,7 (first-pass mạnh). Đồng thời giảm tổng hợp albumin làm tăng tỷ lệ thuốc tự do, tăng tác dụng dược lý và độc tính.",
    reference: "Dls.pdf Trang 5 (Câu 30: Sd thuốc cho BN suy kiệt & Câu 23: Suy gan) & SGK tr. 37"
  },
  {
    chapter: "Dược động học & Suy gan, thận",
    level: "Vận dụng",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Thuốc chống co giật Phenytoin có tỷ lệ liên kết với protein huyết tương rất cao (~90%). Về mặt Dược lâm sàng, đặc điểm này có ý nghĩa quan trọng nào khi kê đơn?",
    options: [
      "Khi phối hợp với thuốc khác có ái lực protein cao hơn (như NSAID, Salicylat), Phenytoin bị đẩy ra làm nồng độ thuốc tự do tăng gấp đôi gây nguy cơ ngộ độc thần kinh nghiêm trọng",
      "Phenytoin hầu như không phân bố vào các tổ chức thần kinh và não bộ",
      "Phenytoin đào thải nhanh chóng qua nước tiểu chỉ sau 30 phút dùng thuốc",
      "Không bao giờ xảy ra tương tác thuốc tại vị trí gắn kết trên Albumin huyết tương"
    ],
    correct: 0,
    explanation: "Khi thuốc gắn 90%, chỉ có 10% ở dạng tự do phát huy tác dụng. Nếu bị thuốc khác cạnh tranh đẩy ra khiến tỷ lệ tự do tăng từ 10% lên 20% (tăng gấp đôi dạng tự do), bệnh nhân sẽ xuất hiện ngay các dấu hiệu ngộ độc (rung giật nhãn cầu, thất điều, lú lẫn) dù tổng nồng độ thuốc trong máu có thể không thay đổi.",
    reference: "Dls.pdf Trang 5 (Câu 9: Phenytoin lk vs pr ht 90% thì có ý nghĩa gì) & SGK tr. 53"
  },

  // ==========================================
  // CHƯƠNG: XÉT NGHIỆM LÂM SÀNG & NHẬN ĐỊNH KQ
  // ==========================================
  {
    chapter: "Xét nghiệm lâm sàng & Nhận định KQ",
    level: "Nhận biết",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Các đơn vị đo lường gồm mét (m), kilôgam (kg), giây (s), ampe (A), kelvin (K), mol (mol) và candela (cd) thuộc hệ đơn vị đo lường nào sau đây?",
    options: [
      "Hệ đo lường quốc tế SI (Système International d'Unités)",
      "Hệ đơn vị quy ước lâm sàng truyền thống cổ điển",
      "Hệ đơn vị đo lường dược dụng Anh - Mỹ (Imperial System)",
      "Hệ đo lường tiêu chuẩn phòng thí nghiệm vi sinh học"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng Bộ Y tế (trang 47-48): Bảng 3.1 quy định 7 đơn vị cơ bản của Hệ đo lường quốc tế SI gồm: Độ dài (mét - m), Trọng lượng (kilôgam - kg), Thời gian (giây - s), Cường độ dòng điện (ampe - A), Nhiệt độ (kelvin - K), Cường độ ánh sáng (candela - cd) và Lượng chất (mol - mol).",
    reference: "Dls.pdf Trang 5 (Câu 1: Các đvi mol, K, kg,... Thuộc hệ đvi nào: SI) & SGK tr. 48"
  },
  {
    chapter: "Xét nghiệm lâm sàng & Nhận định KQ",
    level: "Nhận biết",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Theo Giáo trình Dược Lâm Sàng Bộ Y tế (Chương 3), nồng độ Glucose huyết thanh lúc đói ở người bình thường nằm trong khoảng nào và giá trị bệnh lý được xác định là:",
    options: [
      "Bình thường: 70 - 110 mg/dL (3,9 - 6,1 mmol/L); mức đường huyết lúc đói > 140 mg/dL (7,7 mmol/L) hoặc theo tiêu chuẩn mới >= 126 mg/dL (7,0 mmol/L) được coi là bệnh lý đái tháo đường",
      "Bình thường: 120 - 180 mg/dL; bệnh lý khi glucose > 250 mg/dL",
      "Bình thường: 40 - 70 mg/dL; bệnh lý khi glucose > 90 mg/dL",
      "Bình thường: 10 - 20 mmol/L; bệnh lý khi glucose > 30 mmol/L"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 52): Mức glucose bình thường trong máu lúc đói là 70 - 110 mg/dL (3,9 - 6,1 mmol/L). Nồng độ glucose huyết lúc đói cao hơn 140 mg/dL (7,7 mmol/L) được coi là bệnh lý. Tiêu chuẩn quốc tế hiện nay là >= 126 mg/dL (7,0 mmol/L).",
    reference: "Dls.pdf Trang 5 (Câu 2: Đg huyết lúc đói là bn đc coi là tiểu đg) & SGK tr. 52"
  },
  {
    chapter: "Xét nghiệm lâm sàng & Nhận định KQ",
    level: "Nhận biết",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Enzym chuyển vận nhóm amin nào sau đây có tính chất ĐẶC HIỆU CAO NHẤT cho tổn thương tế bào nhu mô gan (do ít có ở các mô ngoài gan khác)?",
    options: [
      "ALAT (GPT - Alanin amino transferase)",
      "ASAT (GOT - Aspartat amino transferase)",
      "Creatinin kinase phân đoạn MM (CK-MM)",
      "Lactat dehydrogenase phân đoạn 1 (LDH-1)"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 55): ASAT (GOT) có nhiều nhất ở cơ tim và gan, cơ xương, thận. ALAT (GPT) có nhiều ở gan hơn ở tim và các mô khác, do đó ALAT được coi là enzym đặc hiệu nhất với tổn thương tế bào gan.",
    reference: "Dls.pdf Trang 6 (Câu 5: Enzym nào đặc hiệu trong xơ gan: ALT) & SGK tr. 55"
  },
  {
    chapter: "Xét nghiệm lâm sàng & Nhận định KQ",
    level: "Vận dụng cao",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Dựa vào Bảng 3.6 Giáo trình Dược Lâm Sàng Bộ Y tế, bệnh nhân xuất hiện vàng da kèm phân trắng bệch màu đất sét, nước tiểu sẫm màu, xét nghiệm Bilirubin trực tiếp > 50% toàn phần và Phosphatase kiềm (ALP) tăng vọt gấp nhiều lần bình thường. Chẩn đoán nguyên nhân vàng da là:",
    options: [
      "Vàng da do ứ mật / tắc mật (sỏi đường mật, u chèn ép đầu tụy)",
      "Vàng da do tiêu huyết / tan máu cấp tính",
      "Vàng da do viêm gan virus cấp hoại tử tế bào gan",
      "Vàng da do xơ gan do rượu mạn tính giai đoạn còn bù"
    ],
    correct: 0,
    explanation: "Theo Bảng 3.6 và trang 56 SGK: Vàng da tắc mật có Bilirubin trực tiếp > 50%, Bilirubin nước tiểu (+), Phosphatase kiềm tăng vọt (+++), phân trắng bệch màu đất sét do dịch mật bị tắc không xuống được lòng ruột để tạo sắc tố stercobilin.",
    reference: "Dls.pdf Trang 6 (Câu 6: Cho bảng 3.6 trong sách hỏi bn bị gì: vàng da ứ mật) & SGK tr. 56"
  },
  {
    chapter: "Xét nghiệm lâm sàng & Nhận định KQ",
    level: "Vận dụng",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Một bệnh nhân nữ 28 tuổi vào viện vì xuất huyết dưới da dạng chấm nốt rải rác toàn thân và chảy máu chân răng, không sốt, không có dấu hiệu nhiễm khuẩn. Kết quả công thức máu: Số lượng Tiểu cầu giảm sâu còn 12 x 10^9/L (giá trị bình thường: 150 - 300 x 10^9/L). Vấn đề bệnh lý nghĩ đến hàng đầu là:",
    options: [
      "Xuất huyết giảm tiểu cầu tự miễn (ITP) hoặc tổn thương tủy xương",
      "Sốt xuất huyết Dengue thể xuất huyết có sốt cao liên tục",
      "Nhiễm khuẩn huyết do vi khuẩn Gram âm gây đông máu nội mạch rải rác",
      "Ngộ độc cấp tính thuốc chống đông máu Warfarin"
    ],
    correct: 0,
    explanation: "Bệnh nhân không sốt, có triệu chứng xuất huyết dưới da và niêm mạc, tiểu cầu giảm rất nặng (12/150) là hình ảnh điển hình của Xuất huyết giảm tiểu cầu tự miễn (ITP - Immune Thrombocytopenic Purpura) do kháng thể phá hủy tiểu cầu ngoại vi.",
    reference: "Dls.pdf Trang 7 (Câu 34: Bn có xuất huyết dưới da, ko sốt xn tiểu cầu giảm mạnh: 12/150)"
  },
  {
    chapter: "Xét nghiệm lâm sàng & Nhận định KQ",
    level: "Nhận biết",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Chỉ số xét nghiệm huyết học nào có giá trị phản ánh trực tiếp và chính xác nhất khả năng sinh sản hồng cầu và hồi phục chức năng của tủy xương?",
    options: [
      "Tỷ lệ phần trăm Hồng cầu lưới (Reticulocyte)",
      "Số lượng Bạch cầu đa nhân trung tính (Neutrophil)",
      "Tốc độ lắng máu giờ đầu (ESR)",
      "Thời gian đông máu Prothrombin (PT/INR)"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 59): Hồng cầu lưới là hồng cầu non mới ra máu ngoại vi (bình thường 0,5 - 1,5%). Sau chảy máu hoặc sau điều trị thiếu máu bằng sắt/B12 có hiệu quả, tỷ lệ này tăng vọt lên tới 30 - 40%, chứng tỏ tủy xương đang phục hồi sinh máu nhanh.",
    reference: "Dls.pdf Trang 7 (Câu 4: Xét nghiệm đánh giá tủy xương: Hồng cầu lưới) & SGK tr. 59"
  },
  {
    chapter: "Xét nghiệm lâm sàng & Nhận định KQ",
    level: "Nhận biết",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Chỉ số enzym nào xuất hiện sớm nhất trong huyết thanh (bắt đầu tăng sau 4 giờ, đạt đỉnh sau 24 giờ) và có giá trị cao trong chẩn đoán xác định viêm cơ tim và nhồi máu cơ tim cấp?",
    options: [
      "Creatinin kinase phân đoạn MB (CK-MB)",
      "Creatinin kinase phân đoạn BB (CK-BB)",
      "Creatinin kinase phân đoạn MM (CK-MM)",
      "Phosphatase acid có nguồn gốc tuyến tiền liệt"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 54): CK-MB chiếm tới 40% trong mô tim. Sau nhồi máu cơ tim hoặc viêm cơ tim khoảng 4 giờ CK bắt đầu tăng, đạt đỉnh sau 24 giờ. Phân đoạn CK-MB cao trên 6% tổng hoạt độ CK được coi là dấu hiệu vàng của nhồi máu cơ tim.",
    reference: "Dls.pdf Trang 7 (Câu 10: Chỉ số đánh giá viêm cơ tim: CK-MB) & SGK tr. 54"
  },
  {
    chapter: "Xét nghiệm lâm sàng & Nhận định KQ",
    level: "Vận dụng",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Nồng độ Urê huyết thanh tăng cao do nguyên nhân SAU THẬN thường xuất phát từ cơ chế bệnh lý nào sau đây?",
    options: [
      "Tắc nghẽn cơ học đường dẫn nước tiểu (như sỏi niệu quản, sỏi bàng quang, u xơ phì đại tuyến tiền liệt)",
      "Mất nước nặng do nôn mửa, tiêu chảy cấp hoặc sốc giảm thể tích tuần hoàn",
      "Viêm cầu thận cấp tính và hoại tử ống thận cấp do nhiễm độc thuốc",
      "Chế độ ăn giàu chất đạm protein hoặc xuất huyết tiêu hóa trên ồ ạt"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 52): Urê tăng trước thận do giảm lưu lượng máu thận (mất nước, sốc, suy tim); Urê tăng tại thận do tổn thương nhu mô thận; Urê tăng sau thận do tắc đường tiết niệu (sỏi, u, phì đại tiền liệt tuyến) làm nước tiểu bị ứ trệ, urê bị tái hấp thu trở lại máu.",
    reference: "Dls.pdf Trang 7 (Câu 33: Urê tăng do bệnh sau thận do đâu: Sỏi tắc niệu đạo) & SGK tr. 52"
  },

  // ==========================================
  // CHƯƠNG: TƯƠNG TÁC THUỐC & TƯƠNG KỴ
  // ==========================================
  {
    chapter: "Tương tác thuốc & Tương kỵ",
    level: "Vận dụng",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Tương tác thuốc nào sau đây dẫn đến nguy cơ xuất hiện 'Hội chứng Serotonin' nguy hiểm đến tính mạng (biểu hiện: sốt cao, co cứng cơ, run rẩy, kích động, lú lẫn, tiêu chảy)?",
    options: [
      "Phối hợp thuốc ức chế tái hấp thu chọn lọc serotonin (SSRI như Fluoxetin) với thuốc IMAO hoặc Tramadol",
      "Phối hợp kháng sinh Macrolid (như Clarithromycin) với thuốc hạ lipid máu nhóm Statin",
      "Phối hợp thuốc kháng histamin H1 thế hệ 2 (Cetirizin) với Paracetamol",
      "Phối hợp thuốc chẹn kênh calci (Amlodipin) với thuốc ức chế men chuyển (Enalapril)"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 68): SSRI phối hợp với IMAO hoặc Tramadol (chất vừa kích thích thụ thể mu-opioid vừa ức chế tái nhập Serotonin) dẫn đến tích tụ nồng độ quá mức Serotonin tại khe synap thần kinh trung ương, gây hội chứng Serotonin cấp tính có thể tử vong.",
    reference: "Dls.pdf Trang 7 (Câu 2: Phối hợp chống trầm cảm vs thuốc nào gây hc serotonin) & SGK tr. 68"
  },
  {
    chapter: "Tương tác thuốc & Tương kỵ",
    level: "Vận dụng cao",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Tại sao bệnh nhân suy tim đang điều trị bằng Glycosid tim (Digoxin) cần đặc biệt thận trọng và phải theo dõi sát nồng độ điện giải khi dùng kèm thuốc lợi tiểu Furosemid hoặc Corticoid?",
    options: [
      "Vì Furosemid và Corticoid làm hạ Kali máu, tình trạng hạ Kali máu làm tăng nhạy cảm của cơ tim và tăng vọt độc tính của Digoxin gây loạn nhịp thất tử vong",
      "Vì Furosemid tạo phức kết tủa hóa học không tan với Digoxin trong lòng ống tiêu hóa",
      "Vì Corticoid kích thích enzym gan làm tăng đào thải Digoxin khiến suy tim nặng thêm",
      "Vì Digoxin đối kháng cạnh tranh trực tiếp với Furosemid tại quai Henle làm mất tác dụng lợi tiểu"
    ],
    correct: 0,
    explanation: "Digoxin gắn và ức chế bơm Na+/K+-ATPase ở cơ tim. Khi nồng độ K+ trong máu giảm do lợi tiểu thải kali hoặc corticoid, Digoxin gắn vào enzym này mạnh hơn nhiều lần, làm tăng đột biến độc tính gây loạn nhịp tim ngoại tâm thu, xoắn đỉnh và ngừng tim.",
    reference: "Dls.pdf Trang 7 (Câu 3: Thận trọng dùng digoxin vs thuốc gây hạ K máu) & SGK tr. 68"
  },
  {
    chapter: "Tương tác thuốc & Tương kỵ",
    level: "Vận dụng",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Khi chỉ định kháng sinh nhóm Fluoroquinolon (như Ciprofloxacin) hoặc nhóm Tetracyclin, Dược sĩ lâm sàng cần lưu ý bệnh nhân không được uống thuốc cùng thời điểm với thuốc kháng acid dạ dày (Antacid chứa Al3+, Mg2+) hoặc sữa vì lý do nào?",
    options: [
      "Các ion kim loại đa hóa trị (Al3+, Mg2+, Ca2+, Fe2+) tạo phức chelat không tan và không hấp thu được với kháng sinh, làm giảm mạnh sinh khả dụng của thuốc",
      "Antacid phá hủy vòng beta-lactam của kháng sinh ngay trong môi trường acid dịch vị",
      "Sữa làm tăng tốc độ tháo rỗng dạ dày khiến kháng sinh bị bài xuất ra ngoài trước khi hấp thu",
      "Kháng sinh bị kiềm hóa dẫn đến chuyển hóa hoàn toàn qua gan thành chất độc cho thận"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 69): Kháng sinh Tetracyclin và Quinolon tạo phức chelat rất bền với các ion kim loại đa hóa trị (Al, Mg, Ca, Fe) trong Antacid hoặc sữa, cản trở hấp thu qua niêm mạc ruột. Cần uống cách xa nhau ít nhất 2 giờ.",
    reference: "Dls.pdf Trang 8 (Câu 4: Ts cần lưu ý khi dùng quinolon vs antacid) & SGK tr. 69"
  },
  {
    chapter: "Tương tác thuốc & Tương kỵ",
    level: "Vận dụng cao",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Thuốc an thần Phenobarbital là một chất gây cảm ứng mạnh hệ enzym chuyển hóa cytochrom P450 ở gan. Khi bệnh nhân đang dùng Phenobarbital dài ngày mà cần kê thêm thuốc chống đông Warfarin hoặc thuốc ngừa thai đường uống, Dược sĩ cần lưu ý điều gì về liều dùng?",
    options: [
      "Phenobarbital làm tăng tốc độ chuyển hóa thuốc dùng kèm, làm giảm nồng độ và giảm tác dụng điều trị; do đó cần phải TĂNG liều của thuốc phối hợp",
      "Phenobarbital ức chế enzym gan làm tăng nồng độ thuốc dùng kèm; do đó bắt buộc phải GIẢM một nửa liều thuốc phối hợp",
      "Phenobarbital cạnh tranh gắn kết với receptor màng tế bào làm mất tác dụng hoàn toàn của thuốc phối hợp",
      "Không cần thay đổi liều lượng vì Phenobarbital chỉ tác động lên các enzym đào thải qua thận"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 71, Bảng 4.1): Phenobarbital là chất cảm ứng enzym gan mạnh (Inducer), kích thích tăng số lượng enzym gan phân hủy thuốc, làm giảm nồng độ thuốc trong huyết tương (làm mất tác dụng ngừa thai, giảm tác dụng chống đông) -> Cần tăng liều thuốc dùng kèm.",
    reference: "Dls.pdf Trang 8 (Câu 5: Khi dùng cùng barbital cần lưu ý gì về liều dùng) & SGK tr. 71"
  },
  {
    chapter: "Tương tác thuốc & Tương kỵ",
    level: "Nhận biết",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Bệnh nhân đang điều trị bệnh trầm cảm bằng thuốc ức chế enzym Monoamine Oxidase (IMAO như Nialamid, Iproniazid) nếu ăn các loại thực phẩm nào sau đây sẽ có nguy cơ xảy ra 'Cơn tăng huyết áp kịch phát ác tính' (Cheese reaction)?",
    options: [
      "Thực phẩm giàu Tyramin như phô mai lên men lâu năm, rượu vang đỏ, bia tươi, thịt ướp muối, gan gà ngỗng",
      "Rau xanh có màu xanh đậm giàu Vitamin K1 như súp lơ xanh, rau muống, cải bó xôi",
      "Thực phẩm giàu Calci và Vitamin D như sữa tươi tiệt trùng và sữa chua",
      "Thực phẩm có tính acid như nước cam vắt, chanh, bưởi và cà chua chín"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 75): Tyramin trong phô mai, rượu vang đỏ... bình thường bị enzym MAO ở ruột và gan phân hủy. Khi enzym MAO bị thuốc ức chế, Tyramin vào tuần hoàn làm giải phóng ồ ạt Noradrenalin tại các đầu tận cùng giao cảm, gây co mạch dữ dội và cơn tăng huyết áp kịch phát tử vong.",
    reference: "Dls.pdf Trang 8 (Câu 6: Thức ăn chứa gì ảnh hưởng đến nhóm IMAO: Tyramin) & SGK tr. 75"
  },
  {
    chapter: "Tương tác thuốc & Tương kỵ",
    level: "Vận dụng",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Để tăng tốc độ đào thải qua đường nước tiểu và hỗ trợ giải độc trong trường hợp ngộ độc các thuốc có bản chất kiềm yếu / base yếu (như Amphetamin, Quinin, Quinidin), biện pháp can thiệp thích hợp là:",
    options: [
      "Toan hóa nước tiểu bằng Amoni clorid (NH4Cl) hoặc Vitamin C liều cao",
      "Kiềm hóa nước tiểu bằng dung dịch Natri hydrocarbonat (NaHCO3 1,4%)",
      "Cho bệnh nhân uống nhiều nước khoáng kiềm có gas",
      "Dùng thuốc lợi tiểu giữ kali Spironolacton kết hợp bù kiềm"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 72): Thuốc có bản chất kiềm yếu (base yếu) khi gặp môi trường nước tiểu acid (toan hóa bằng NH4Cl hoặc Vitamin C) sẽ bị ion hóa tối đa, không thể tái hấp thu thụ động qua màng tế bào ống thận và bị thải trừ nhanh chóng ra ngoài nước tiểu.",
    reference: "Dls.pdf Trang 14 (Câu 13: Giải độc Nh4cl cho basic yếu: amphetamin, quinidin) & SGK tr. 72"
  },

  // ==========================================
  // CHƯƠNG: ADR, DỊ ỨNG & SỐC PHẢN VỆ
  // ==========================================
  {
    chapter: "ADR, Dị ứng & Sốc phản vệ",
    level: "Nhận biết",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Tác dụng không mong muốn xảy ra ở những người bệnh bị thiếu hụt enzym G6PD di truyền (bị thiếu máu tan máu cấp tính khi dùng các thuốc có tính oxy hóa như Primaquin, Sulfamid, Dapsone) được xếp vào loại ADR nào?",
    options: [
      "ADR týp B (Phản ứng dị ứng hoặc đặc ứng do bất thường về gen di truyền)",
      "ADR týp A (Phản ứng do tác dụng dược lý quá mức có thể dự đoán trước)",
      "ADR týp C (Phản ứng liên quan đến liều tích lũy khi điều trị kéo dài mạn tính)",
      "ADR týp D (Phản ứng chậm xuất hiện sau nhiều tháng như gây quái thai, ung thư)"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 89, 94): Thiếu máu tan máu do thiếu hụt enzym G6PD ở hồng cầu là phản ứng đặc ứng di truyền (Idiosyncrasy), không liên quan đến tác dụng dược lý thông thường của thuốc, không dự đoán được theo liều dùng, được xếp vào ADR týp B.",
    reference: "Dls.pdf Trang 8 (Câu 1: Gặp tdkmm do thiếu g6pd là adr type nào: Type B) & SGK tr. 94"
  },
  {
    chapter: "ADR, Dị ứng & Sốc phản vệ",
    level: "Nhận biết",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Phản ứng dị ứng thuốc kiểu quá mẫn muộn qua trung gian tế bào (Dị ứng Týp IV theo phân loại của Gell và Coombs) được khởi phát trực tiếp bởi thành phần miễn dịch nào?",
    options: [
      "Tế bào lympho T mẫn cảm (giải phóng lymphokin và cytokin sau 24 - 48 giờ tiếp xúc lại dị nguyên)",
      "Kháng thể miễn dịch IgE gắn trên bề mặt tế bào mastocyte và bạch cầu ưa base",
      "Phức hợp miễn dịch lưu hành kháng nguyên - kháng thể IgG lắng đọng tại màng mao mạch",
      "Kháng thể IgM và IgG hoạt hóa hệ thống bổ thể làm tan tế bào đích"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 108-109): Phản ứng týp IV là phản ứng dị ứng qua trung gian tế bào (cell-mediated delayed reaction). Tế bào lympho T đã mẫn cảm khi tiếp xúc với kháng nguyên sẽ giải phóng lymphokin/cytokin thu hút đại thực bào gây phản ứng viêm hoại tử mô sau 24 - 48 giờ.",
    reference: "Dls.pdf Trang 9 (Câu 4: Pư muộn qua tgian tb do tp nào gây nên: lympho T) & SGK tr. 108"
  },
  {
    chapter: "ADR, Dị ứng & Sốc phản vệ",
    level: "Vận dụng",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Thuốc thiết yếu sống còn, bắt buộc phải được sử dụng NGAY LẬP TỨC qua đường tiêm bắp khi xuất hiện sốc phản vệ ở mọi cơ sở y tế là:",
    options: [
      "Adrenalin (Epinephrine) dung dịch 1 mg/ml (nồng độ 1:1.000) tiêm bắp ở mặt trước ngoài đùi",
      "Hydrocortison natri succinat 100 mg tiêm tĩnh mạch chậm",
      "Dimedrol (Diphenhydramin 10 mg) tiêm bắp sâu vùng cơ mông",
      "Dopamin 200 mg pha trong dung dịch Glucose 5% truyền tĩnh mạch chậm"
    ],
    correct: 0,
    explanation: "Theo Thông tư 51/2017/TT-BYT và Giáo trình DLS (trang 113): Adrenalin 1mg/ml (1:1000) tiêm bắp ngay lập tức ở mặt trước ngoài đùi là thuốc quan trọng số 1 cấp cứu sốc phản vệ để cứu sống người bệnh. Corticoid và kháng histamin chỉ là thuốc hỗ trợ bước 2, tác dụng chậm sau nhiều giờ.",
    reference: "Dls.pdf Trang 9 (Câu 5: Thuốc dùng trong cấp cứu pv: adrenaline 1/1000) & SGK tr. 113"
  },
  {
    chapter: "ADR, Dị ứng & Sốc phản vệ",
    level: "Vận dụng cao",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Bệnh nhân trước khi tiêm kháng sinh Amoxicillin được tiến hành làm test lẩy da (Prick test) nhưng kết quả thu được là Âm tính giả (thực chất bệnh nhân có dị ứng nhưng test không phản ứng). Nguyên nhân thường gặp nhất gây ra sai lệch này là:",
    options: [
      "Bệnh nhân trước đó đang sử dụng thuốc kháng Histamin H1 (như Loratadin, Cetirizin) hoặc thuốc Corticoid",
      "Dung dịch thử nghiệm có nồng độ kháng sinh quá cao gây kích ứng tại chỗ",
      "Bệnh nhân có tiền sử suy giảm chức năng gan do uống rượu",
      "Kỹ thuật viên đâm kim lẩy da quá sâu vào lớp mao mạch gây chảy máu"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 118): Thuốc kháng histamin H1 và Corticoid ức chế phản ứng viêm và ức chế tác dụng của histamin tại da, làm mất phản ứng sẩn phù ngứa tại vị trí test, dẫn đến kết quả âm tính giả rất nguy hiểm. Cần ngừng kháng histamin ít nhất 48 - 72 giờ trước khi test.",
    reference: "Dls.pdf Trang 14 (Câu 28: Test dị ứng amox cho kết quả sai do BN trc đó sd thuốc nào: loratadin)"
  },

  // ==========================================
  // CHƯƠNG: SỬ DỤNG THUỐC CHO PNCT & CHO CON BÚ
  // ==========================================
  {
    chapter: "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    level: "Nhận biết",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Trong quá trình mang thai, giai đoạn thai kỳ nào được xác định là nhạy cảm cao nhất với tác dụng gây quái thai và dị tật bẩm sinh cấu trúc của thuốc?",
    options: [
      "Giai đoạn phôi (từ ngày thứ 18 đến ngày thứ 56 của thai kỳ, tương đương tuần thứ 3 đến tuần thứ 8)",
      "Giai đoạn tiền phôi (từ khi thụ tinh đến hết ngày thứ 17 của thai kỳ)",
      "Giai đoạn thai (từ sau tuần thứ 9 cho đến khi thai nhi chuyển dạ sinh)",
      "Ba tháng cuối của thai kỳ (từ tuần thứ 28 đến tuần thứ 40)"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 165): Giai đoạn phôi (tuần 3 đến tuần 8 thai kỳ) là giai đoạn biệt hóa và hình thành hầu hết các cơ quan (tim, chi, mắt, tai, hệ thần kinh). Dùng thuốc độc hại trong giai đoạn này gây dị tật hình thái bẩm sinh nặng nề nhất.",
    reference: "Dls.pdf Trang 10 (Câu 1: Thuốc ảnh hưởng nhất đến gđ nào của thai nhi: Phôi 3-8 tuần) & SGK tr. 165"
  },
  {
    chapter: "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    level: "Nhận biết",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Theo quy luật phát triển phôi thai trong Giáo trình Dược Lâm Sàng Bộ Y tế, các cơ quan nào ở thai nhi có thời kỳ hoàn thiện muộn nhất (vẫn tiếp tục phát triển sau tuần thứ 9 đến tận khi sinh)?",
    options: [
      "Bộ phận sinh dục ngoài (hoàn thiện tuần 7 - 12) và Não bộ / Hệ thần kinh trung ương (kéo dài đến lúc sinh)",
      "Quả tim và hệ thống các mạch máu lớn xuất phát từ tim",
      "Hai chi trên (cánh tay, bàn tay) và hai chi dưới (chân, bàn chân)",
      "Cơ quan thị giác (hai mắt) và vòm miệng trên"
    ],
    correct: 0,
    explanation: "Theo Bảng 11.2 (trang 165 SGK): Tim (tuần 3-6), Tay chân (tuần 4-7), Mắt (tuần 4-8), Tai (tuần 4-10). Bộ phận sinh dục ngoài nhạy cảm tuần 7-12, còn Thần kinh trung ương (não bộ) thời kỳ nhạy cảm kéo dài từ tuần 3 đến tận khi sinh.",
    reference: "Dls.pdf Trang 10 (Câu 2: Cơ quan hình thành muộn nhất ở thai nhi: bp sinh dục, não) & SGK tr. 165"
  },
  {
    chapter: "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    level: "Nhận biết",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Kháng sinh nào sau đây CHỐNG CHỈ ĐỊNH TUYỆT ĐỐI cho phụ nữ có thai do nguy cơ gây tổn thương dây thần kinh số VIII dẫn đến điếc vĩnh viễn ở thai nhi?",
    options: [
      "Kháng sinh nhóm Aminoglycosid (như Streptomycin, Gentamicin, Kanamycin)",
      "Kháng sinh nhóm Penicillin tự nhiên và bán tổng hợp (như Amoxicillin, Ampicillin)",
      "Kháng sinh nhóm Cephalosporin thế hệ 2 và 3 (như Cefuroxim, Ceftriaxon)",
      "Kháng sinh nhóm Macrolid thông thường (như Spiramycin, Erythromycin base)"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 180, Bảng 12.5): Aminoglycosid qua được rau thai và tích lũy ở tai trong thai nhi, gây hủy hoại tế bào ốc tai và tiền đình, gây điếc bẩm sinh vĩnh viễn. Chống chỉ định trong suốt thai kỳ.",
    reference: "Dls.pdf Trang 10 (Câu 2: Kháng sinh ccđ cho pnct và cho con bú: Aminoglycosid) & SGK tr. 180"
  },
  {
    chapter: "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    level: "Vận dụng",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Thuốc nào sau đây xếp vào Phân loại mức độ an toàn thai kỳ Loại X (Chống chỉ định tuyệt đối cho phụ nữ có thai do nguy cơ gây quái thai đã được khẳng định chắc chắn)?",
    options: [
      "Isotretinoin, Misoprostol, Thalidomide và Methotrexat",
      "Paracetamol, Amoxicillin và Cefalexin",
      "Vitamin B1, Vitamin B6 và Vitamin C liều khuyến cáo hàng ngày",
      "Nystatin, Erythromycin và Insulin người"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 162, 167): Thuốc loại X là thuốc mà nguy cơ cho thai nhi vượt trội hoàn toàn so với bất kỳ lợi ích điều trị nào. Điển hình: Isotretinoin (dị tật sọ mặt tim mạch nặng), Misoprostol (sảy thai, dị tật chi), Thalidomide (cụt chi), Methotrexat (quái thai đa dị tật).",
    reference: "Dls.pdf Trang 11 (Câu 1: Thuốc ccđ cho PN thời kỳ mang thai: Misoprostol, Isotretinoin) & SGK tr. 162"
  },
  {
    chapter: "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    level: "Vận dụng",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Tại sao các thuốc có bản chất là KIỀM YẾU / BASE YẾU (như Erythromycin, Cafein, Morphin) lại có xu hướng tích tụ với nồng độ trong sữa mẹ cao hơn đáng kể so với nồng độ trong huyết tương của người mẹ?",
    options: [
      "Vì sữa mẹ có pH hơi acid hơn huyết tương (pH sữa ~ 7,0 vs pH máu 7,4), các thuốc base yếu vào sữa sẽ bị ion hóa và bị giữ lại ('bẫy ion')",
      "Vì các tuyến sữa mẹ bài tiết chủ động các chất kiềm yếu ra ngoài theo cơ chế vận chuyển tích cực",
      "Vì sữa mẹ chứa nhiều albumin gắn kết chặt chẽ với các thuốc có bản chất kiềm yếu",
      "Vì các thuốc base yếu có phân tử lượng rất lớn không thể khuếch tán ngược trở lại"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 170-171): pH sữa mẹ (~ 7,0) thấp hơn pH huyết tương mẹ (7,4). Các thuốc base yếu ở dạng không ion hóa trong máu mẹ khuếch tán qua biểu mô tuyến sữa, khi vào sữa gặp môi trường acid hơn sẽ bị ion hóa. Dạng ion hóa không thể khuếch tán ngược trở lại máu mẹ tạo nên hiện tượng bẫy ion (ion trapping).",
    reference: "Dls.pdf Trang 10 (Câu 5: Các thuốc base yếu vào sữa chủ yếu theo cách nào: bẫy ion) & SGK tr. 170"
  },
  {
    chapter: "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    level: "Vận dụng",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Khi người mẹ đang cho con bú bắt buộc phải dùng kháng sinh Metronidazol điều trị nhiễm khuẩn kỵ khí, Dược sĩ lâm sàng cần tư vấn lưu ý điều gì đối với việc cho trẻ bú?",
    options: [
      "Metronidazol bài tiết nhiều vào sữa làm sữa có vị đắng kim loại khó chịu khiến trẻ bỏ bú; cần tạm ngừng cho bú và vắt bỏ sữa trong thời gian dùng và sau ngừng thuốc 12 - 24 giờ",
      "Metronidazol qua sữa gây vàng da ứ mật nặng ở trẻ sơ sinh bú mẹ",
      "Thuốc làm đông vón protein trong sữa mẹ gây tắc tia sữa hoàn toàn",
      "Không cần lưu ý vì Metronidazol hoàn toàn không bài xuất qua sữa mẹ"
    ],
    correct: 0,
    explanation: "Metronidazol bài tiết vào sữa mẹ nồng độ xấp xỉ trong huyết tương mẹ. Thuốc có vị kim loại đắng làm sữa có mùi vị khó chịu khiến trẻ bỏ bú, có thể gây nôn trớ và tiêu chảy. Khuyến cáo ngừng cho con bú trong đợt điều trị và sau khi ngừng thuốc 12 - 24 giờ (khoảng 3 - 4 lần t1/2).",
    reference: "Dls.pdf Trang 11 (Câu 3: Metronidazol ảnh hưởng ntn đến TE đag bú mẹ: Vị KL bỏ bú)"
  },

  // ==========================================
  // CHƯƠNG: NGUYÊN TẮC SỬ DỤNG GLUCOCORTICOID
  // ==========================================
  {
    chapter: "Glucocorticoid & Phác đồ điều trị",
    level: "Vận dụng",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Tác dụng không mong muốn nghiêm trọng và phổ biến nhất trên hệ cơ quan vận động khi điều trị Glucocorticoid đường toàn thân liều cao kéo dài là gì?",
    options: [
      "Loãng xương, xốp xương và nguy cơ gãy xương bệnh lý (đặc biệt lún xẹp đốt sống, gãy cổ xương đùi)",
      "Phì đại quá mức các bó cơ vân và tăng khoáng hóa bao khớp ngoại vi",
      "Cường hóa quá trình lắng đọng calci làm vôi hóa dây chằng quanh cột sống",
      "Kích thích tăng sinh sụn tiếp hợp làm trẻ em phát triển chiều cao vượt trội"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 211): Có tới 50% bệnh nhân gãy xương không do chấn thương khi dùng GC liều cao kéo dài. GC tăng hủy xương, ức chế tạo xương, giảm hấp thu Ca ở ruột và tăng thải Ca qua nước tiểu gây loãng xương rất sớm và nặng nề.",
    reference: "Dls.pdf Trang 11 & 12 (Câu 6: Corticoid gây tác dụng nghiêm trọng nhất trên xương: loãng xương) & SGK tr. 211"
  },
  {
    chapter: "Glucocorticoid & Phác đồ điều trị",
    level: "Vận dụng cao",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Tại sao việc ngừng đột ngột thuốc Glucocorticoid sau một đợt điều trị toàn thân kéo dài (trên 3 tuần với liều Prednisolon >= 20 mg/ngày) có thể gây ra cơn suy vỏ thượng thận cấp nguy kịch?",
    options: [
      "Vì Glucocorticoid ngoại sinh liều cao ức chế hồi ứng ngược âm tính (negative feedback) lên trục dưới đồi - tuyến yên (HPA), làm teo vỏ thượng thận và ngừng tiết Cortisol nội sinh",
      "Vì Glucocorticoid tích lũy trong mô mỡ giải phóng ồ ạt vào máu phá hủy thụ thể mineralocorticoid",
      "Vì ngừng thuốc làm tăng bài xuất Aldosteron đột ngột gây tăng natri máu và phù phổi cấp",
      "Vì tuyến thượng thận bị kích thích tăng sinh quá mức gây hội chứng bão hormon thượng thận"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 212): Nồng độ GC ngoại sinh duy trì liên tục ức chế bài tiết CRF và ACTH. Vỏ thượng thận bị teo sau nhiều tuần bị ức chế. Khi ngừng thuốc đột ngột, trục HPA chưa thể phục hồi ngay (cần từ vài tháng đến 1 năm) dẫn đến thiếu hụt cortisol cấp tính gây trụy mạch, tụt huyết áp và tử vong.",
    reference: "Dls.pdf Trang 12 (Câu 21: Tại sao GC dừng đột ngột gây suy tuyến thượng thận) & SGK tr. 212"
  },
  {
    chapter: "Glucocorticoid & Phác đồ điều trị",
    level: "Vận dụng",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Trường hợp điều trị bằng Glucocorticoid nào sau đây KHÔNG BẮT BUỘC phải thực hiện quy trình giảm liều từ từ trước khi ngừng thuốc?",
    options: [
      "Đợt điều trị ngắn ngày dưới 2 tuần (như Prednisolon 20 - 40 mg/ngày dùng trong 5 - 7 ngày điều trị đợt cấp hen hoặc dị ứng)",
      "Bệnh nhân dùng Dexamethason 4 mg/ngày liên tục suốt 3 tháng điều trị u não",
      "Bệnh nhân viêm khớp dạng thấp uống Methylprednisolon 16 mg/ngày kéo dài 6 tháng",
      "Bệnh nhân hội chứng thận hư dùng Prednisolon liều cao 1 mg/kg/ngày kéo dài trên 4 tuần"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 207, 213): Dùng GC liều cao nhưng trong thời gian ngắn dưới 2 tuần (hoặc liều trung bình dưới 3 tuần) thì trục HPA chưa bị ức chế vĩnh viễn, vỏ thượng thận chưa bị teo nên có thể ngừng thuốc ngay lập tức mà không gây suy thượng thận cấp.",
    reference: "Dls.pdf Trang 12 (Câu 22: Dùng thuốc cotisol nào sau đây ko phải giảm liều từ từ: thời gian ngắn) & SGK tr. 207"
  },
  {
    chapter: "Glucocorticoid & Phác đồ điều trị",
    level: "Vận dụng",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Tại sao chống chỉ định tiêm các loại vaccin vi khuẩn/virus sống giảm độc lực (LAV như BCG, sởi, bại liệt uống) cho bệnh nhân đang điều trị bằng Glucocorticoid đường toàn thân liều cao kéo dài?",
    options: [
      "Vì Glucocorticoid ức chế miễn dịch làm cơ thể không tạo được kháng thể bảo vệ và mầm bệnh sống trong vaccin có thể bùng phát gây bệnh nhiễm trùng toàn thân",
      "Vì vaccin làm bất hoạt hoàn toàn tác dụng chống viêm của Glucocorticoid tại thụ thể nhân tế bào",
      "Vì sự kết hợp này gây hội chứng tiêu cơ vân cấp tính và tắc ống thận cấp do myoglobin",
      "Vì Corticoid làm đông vón protein tá dược có trong thành phần dung môi của vaccin"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 208, 213): GC ức chế miễn dịch tế bào (lympho T) và miễn dịch thể dịch (lympho B), làm giảm sức đề kháng của cơ thể. Tiêm vi sinh vật sống giảm độc lực có thể gây nhiễm trùng lan tỏa do chính chủng vi sinh vật trong vaccin gây ra.",
    reference: "Dls.pdf Trang 12 (Câu 17: Sd coticoid với vaccine VK sống ko đc khuyến cáo do đâu) & SGK tr. 213"
  },
  {
    chapter: "Glucocorticoid & Phác đồ điều trị",
    level: "Vận dụng",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Chế độ dinh dưỡng được Dược sĩ lâm sàng khuyến cáo cho bệnh nhân bắt đầu điều trị Glucocorticoid đường toàn thân dài ngày bao gồm các nguyên tắc nào?",
    options: [
      "Hạn chế muối ăn (giảm natri), giảm đường tinh bột và chất béo; tăng cường thức ăn giàu protein (chất đạm), calci, vitamin D và kali",
      "Ăn nhiều muối natri để kích thích giữ nước nâng huyết áp; kiêng hoàn toàn chất đạm",
      "Ăn nhiều đường ngọt và mỡ động vật để bù đắp năng lượng tiêu hao",
      "Hạn chế tuyệt đối calci và vitamin D vì nguy cơ gây sỏi mật và vôi hóa mạch máu"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 214): Do GC gây giữ Na+ và nước (gây phù, tăng HA), tăng thải K+ và Ca2+ (gây hạ kali máu, loãng xương), tăng dị hóa protein (teo cơ) và tăng đường huyết -> Cần ăn nhạt hạn chế muối, hạn chế glucid và lipid, tăng cường protein, kali, calci và vitamin D.",
    reference: "Dls.pdf Trang 13 (Câu 14: Chế độ ăn dành cho glucorticoid toàn thân) & SGK tr. 214"
  },

  // ==========================================
  // CHƯƠNG: NGUYÊN TẮC SỬ DỤNG THUỐC GIẢM ĐAU
  // ==========================================
  {
    chapter: "Thuốc giảm đau",
    level: "Vận dụng cao",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Bệnh nhân ung thư dạ dày giai đoạn cuối xuất hiện đau đớn dữ dội liên tục không đáp ứng với Paracetamol và Codein. Nguyên tắc sử dụng thuốc giảm đau Morphin và thuốc hỗ trợ phối hợp cho bệnh nhân này theo hướng dẫn của WHO và Giáo trình Bộ Y tế là:",
    options: [
      "Chỉ định Morphin uống (hoặc tiêm) dùng ĐỀU ĐẶN THEO GIỜ CỐ ĐỊNH (mỗi 4 giờ), không chờ đau mới uống; luôn phối hợp cùng thuốc nhuận tràng kích thích",
      "Chỉ cho bệnh nhân dùng Morphin khi cơn đau đã xuất hiện dữ dội không chịu đựng nổi",
      "Tuyệt đối không dùng thuốc nhuận tràng vì Morphin gây tăng tiết dịch ruột làm tiêu chảy",
      "Phối hợp Morphin cùng 2 thuốc NSAID liều tối đa để tăng hiệp đồng giảm đau"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 226): Trong đau do ung thư, thuốc phải được cho ĐỀU ĐẶN THEO GIỜ để duy trì nồng độ thuốc máu ổn định, chặn trước cơn đau. Không chờ đau mới dùng. Do Morphin gây táo bón mạn tính không có hiện tượng dung nạp, bắt buộc phải kê kèm thuốc nhuận tràng (như Bisacodyl, Senna).",
    reference: "Dls.pdf Trang 13 (Bài 12 Câu 1: Bn ung thư cần dùng thuốc giảm đau ntn) & SGK tr. 226"
  },
  {
    chapter: "Thuốc giảm đau",
    level: "Vận dụng",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Trong các công thức phối hợp thuốc giảm đau sau đây, công thức phối hợp nào được đánh giá là HỢP LÝ và được khuyến cáo sử dụng trong thực hành lâm sàng?",
    options: [
      "Paracetamol phối hợp với Ibuprofen (phối hợp 2 cơ chế khác nhau hiệp đồng giảm đau)",
      "Aspirin phối hợp với Piroxicam (phối hợp 2 thuốc nhóm NSAID)",
      "Diclofenac phối hợp với Meloxicam (phối hợp 2 thuốc nhóm NSAID)",
      "Morphin phối hợp với Fentanyl liều cao cùng lúc"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 230, 233): Phối hợp Paracetamol với 1 thuốc NSAID (như Ibuprofen) là hợp lý vì khác cơ chế, tăng hiệu quả giảm đau mà không tăng độc tính loét tiêu hóa. Tuyệt đối không phối hợp 2 NSAID với nhau vì không tăng hiệu quả giảm đau mà làm tăng gấp đôi nguy cơ loét và chảy máu tiêu hóa.",
    reference: "Dls.pdf Trang 13 (Câu 37: Phối hợp thuốc nào dưới đây là hợp lý: ibu + para) & SGK tr. 230"
  },
  {
    chapter: "Thuốc giảm đau",
    level: "Nhận biết",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Trường hợp nào sau đây là CHỐNG CHỈ ĐỊNH của thuốc giảm đau trung ương nhóm Opioid (Morphin)?",
    options: [
      "Suy hô hấp nặng, trẻ em dưới 30 tháng tuổi, chấn thương sọ não tăng áp lực nội sọ và đang dùng thuốc IMAO",
      "Đau dữ dội do ung thư xương di căn giai đoạn muộn",
      "Đau sau phẫu thuật ngoại khoa lớn vùng ngực - bụng",
      "Đau trong nhồi máu cơ tim cấp có phù phổi cấp huyết động"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 228): Morphin ức chế trung tâm hô hấp ở hành não (chống chỉ định suy hô hấp, trẻ < 30 tháng); làm giãn mạch não tăng áp lực nội sọ (chống chỉ định chấn thương sọ não); và gây trụy tim mạch hoặc sốt cao co giật khi dùng cùng IMAO.",
    reference: "Dls.pdf Trang 13 & SGK tr. 228"
  },

  // ==========================================
  // CHƯƠNG: NGUYÊN TẮC SỬ DỤNG KHÁNG SINH
  // ==========================================
  {
    chapter: "Kháng sinh & Kháng sinh dự phòng",
    level: "Vận dụng",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Bệnh nhân đến phòng khám răng hàm mặt với chẩn đoán Viêm quanh cuống răng áp xe cấp tính nghi ngờ có nhiễm khuẩn hỗn hợp vi khuẩn ái khí Gram dương và vi khuẩn kỵ khí khoang miệng. Kháng sinh phối hợp ưu tiên lựa chọn theo khuyến cáo là:",
    options: [
      "Amoxicillin + Acid clavulanic (hoặc Spiramycin phối hợp Metronidazol)",
      "Gentamicin tiêm bắp đơn độc liều duy nhất",
      "Vancomycin truyền tĩnh mạch kết hợp Colistin",
      "Ciprofloxacin phối hợp Cotrimoxazol đường uống"
    ],
    correct: 0,
    explanation: "Nhiễm khuẩn răng miệng chủ yếu do liên cầu (Streptococcus) và vi khuẩn kỵ khí khoang miệng (Bacteroides, Peptostreptococcus). Phác đồ chuẩn là Amoxicillin/Acid clavulanic hoặc phối hợp Spiramycin + Metronidazol (biệt dược kinh điển Rodogyl).",
    reference: "Dls.pdf Trang 13 (Câu 10: Viêm răng miệng sd KS nào: Amoxicillin ± clavulanic) & SGK tr. 175"
  },
  {
    chapter: "Kháng sinh & Kháng sinh dự phòng",
    level: "Vận dụng cao",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Một bệnh nhân nam 50 tuổi có tiền sử xơ gan Child-Pugh B, vào viện vì viêm phổi thùy cấp tính. Khi lựa chọn kháng sinh điều trị, Dược sĩ lâm sàng cần tư vấn tránh dùng các kháng sinh chuyển hóa mạnh qua gan (> 70%) nào sau đây theo Bảng 12.7 Giáo trình Bộ Y tế?",
    options: [
      "Rifampicin, Metronidazol, Pefloxacin, Clindamycin, Isoniazid và Cloramfenicol",
      "Ceftriaxon, Cefuroxim, Ceftazidim, Penicillin G và Gentamicin",
      "Vancomycin, Fosfomycin, Thiamphenicol và Amikacin",
      "Ampicillin phối hợp Sulbactam dùng đường tiêm truyền"
    ],
    correct: 0,
    explanation: "Theo Bảng 12.7 Giáo trình Dược lâm sàng (trang 181): Các KS bị chuyển hóa ở gan > 70% gồm: Rifampicin, Metronidazol, Pefloxacin, Clindamycin, Cloramfenicol, Isoniazid, Ketoconazol... Ở bệnh nhân suy gan, t1/2 của các thuốc này bị kéo dài, tích lũy độc tính nặng nề.",
    reference: "Dls.pdf Trang 14 (Câu 13: Bn bị viêm gan thì dùng KS nào) & SGK tr. 181"
  },
  {
    chapter: "Kháng sinh & Kháng sinh dự phòng",
    level: "Nhận biết",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Theo nguyên tắc sử dụng Kháng sinh dự phòng trong phẫu thuật của Bộ Y tế, thời điểm tối ưu nhất để đưa kháng sinh dự phòng đường tiêm tĩnh mạch là:",
    options: [
      "Trong vòng 30 đến 60 phút trước khi rạch da (thường đưa vào lúc bắt đầu khởi mê)",
      "Tiêm trước khi phẫu thuật 12 đến 24 giờ tại buồng bệnh nội trú",
      "Tiêm ngay sau khi cuộc mổ kết thúc và bệnh nhân đã được chuyển về phòng hồi tỉnh",
      "Uống liên tục 3 ngày trước khi phẫu thuật và kéo dài 10 ngày sau mổ"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 186-187): Mục tiêu là đạt nồng độ kháng sinh tối đa trong mô tại thời điểm rạch da để diệt vi khuẩn xâm nhập. Do đó thời điểm tiêm TM tốt nhất là trong 30 - 60 phút trước rạch da (lúc khởi mê). Không tiêm quá sớm > 2 giờ và không tiêm sau khi đã rạch da.",
    reference: "Dls.pdf Trang 14 (Câu 14: Thời điểm dùng ks dự phòng sau phẫu thuật) & SGK tr. 186"
  },

  // ==========================================
  // CHƯƠNG: SỬ DỤNG THUỐC CHO TRẺ EM & NGƯỜI CAO TUỔI
  // ==========================================
  {
    chapter: "Sử dụng thuốc ở Trẻ em",
    level: "Nhận biết",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Ở trẻ em sơ sinh và nhũ nhi dưới 1 tuổi, đường đưa thuốc nào sau đây được đánh giá là đường dùng mang lại nồng độ hấp thu ổn định và tin cậy nhất trong điều trị bệnh nặng?",
    options: [
      "Đường tiêm tĩnh mạch (IV)",
      "Đường tiêm bắp sâu (IM)",
      "Đường tiêm dưới da (SC)",
      "Đường uống dạng siro ngọt"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 134, 151): Ở trẻ sơ sinh và trẻ nhỏ, khối cơ bắp chưa phát triển đầy đủ, tưới máu ngoại vi thất thường làm thuốc tiêm bắp hấp thu không đều. Đường tiêm tĩnh mạch đưa thuốc trực tiếp vào tuần hoàn là đường dùng bảo đảm sinh khả dụng 100% và ổn định nhất.",
    reference: "Dls.pdf Trang 14 (Câu 5: Trẻ em đường dùng ổn định nhất: tiêm tĩnh mạch) & SGK tr. 151"
  },
  {
    chapter: "Sử dụng thuốc ở Người cao tuổi",
    level: "Vận dụng",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Ở người cao tuổi, mặc dù xét nghiệm nồng độ Creatinin huyết thanh vẫn nằm trong giới hạn bình thường (khoảng 0,8 - 1,0 mg/dL), tại sao Dược sĩ lâm sàng vẫn bắt buộc phải tính độ thanh thải ClCr theo Cockcroft-Gault để hiệu chỉnh liều thuốc?",
    options: [
      "Vì khối lượng cơ bắp ở người già bị teo giảm sinh lý làm giảm sản sinh Creatinin nội sinh, che lấp tình trạng suy giảm mức lọc cầu thận (đã giảm 30 - 50%)",
      "Vì thận người già tăng bài tiết tích cực Creatinin qua ống lượn gần gấp 5 lần",
      "Vì người cao tuổi thường xuyên uống nhiều nước làm pha loãng nước tiểu",
      "Vì Creatinin ở người già chuyển hóa qua gan thành các hợp chất acid uric"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 154, 157): Khối lượng cơ bắp ở người cao tuổi giảm mạnh (từ 19% xuống 12%), sản sinh creatinin ít. Do đó nồng độ Creatinin máu bình thường nhưng mức lọc cầu thận thực tế đã giảm sâu. Cần dùng công thức Cockcroft-Gault (có biến số tuổi) để ước tính ClCr chính xác.",
    reference: "Dls.pdf Trang 6 & SGK tr. 157"
  },

  // ==========================================
  // CHƯƠNG: VITAMIN VÀ CHẤT KHOÁNG
  // ==========================================
  {
    chapter: "Vitamin và chất khoáng",
    level: "Nhận biết",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Vitamin A liều cao được Tổ chức Y tế Thế giới (WHO) và Bộ Y tế chỉ định bắt buộc trong trường hợp bệnh lý cấp tính nào ở trẻ em nhằm giảm biến chứng loét giác mạc và giảm tỷ lệ tử vong?",
    options: [
      "Trẻ em mắc bệnh Sởi (Measles) hoặc suy dinh dưỡng nặng có nguy cơ khô mắt",
      "Trẻ em mắc bệnh sốt xuất huyết Dengue thể xuất huyết nhẹ",
      "Trẻ em mắc bệnh thủy đậu (trái rạ) chưa có biến chứng",
      "Trẻ em bị viêm họng cấp do liên cầu khuẩn tan máu beta"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 197, 203): Vitamin A có vai trò bảo vệ biểu mô và niêm mạc. Virus sởi làm cạn kiệt nhanh chóng lượng dự trữ Vitamin A tại gan, gây tổn thương niêm mạc mắt và đường hô hấp. Bổ sung Vitamin A liều cao cho trẻ mắc sởi giúp ngăn ngừa mù lòa do khô loét giác mạc và giảm 50% nguy cơ tử vong.",
    reference: "Dls.pdf Trang 14 (Câu 29: VTM A đc chỉ định trong TH nào: suy dd, sởi, khô mắt) & SGK tr. 197"
  },
  {
    chapter: "Xét nghiệm lâm sàng & Nhận định KQ",
    level: "Vận dụng",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Xét nghiệm định lượng Acid uric huyết thanh tăng cao thường được Dược sĩ lâm sàng sử dụng để theo dõi phát hiện tác dụng không mong muốn của nhóm thuốc điều trị nào?",
    options: [
      "Thuốc điều trị lao (đặc biệt Pyrazinamid và Ethambutol) hoặc thuốc lợi tiểu Thiazid kéo dài",
      "Kháng sinh nhóm Beta-lactam (như Amoxicillin và Ceftriaxon)",
      "Thuốc an thần gây ngủ nhóm Benzodiazepin (như Diazepam)",
      "Thuốc ức chế men chuyển điều trị tăng huyết áp (như Enalapril)"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 53): Acid uric tăng do thuốc làm giảm bài tiết acid uric ở ống thận (Pyrazinamid, Lợi tiểu Thiazid, Furosemid, Ethambutol) hoặc do tăng phân hủy tế bào trong điều trị hóa chất ung thư. Cần theo dõi acid uric để phát hiện và dự phòng cơn Gout cấp.",
    reference: "Dls.pdf Trang 14 (Câu 31: Acid uric để đánh giá thuốc nào) & SGK tr. 53"
  },
  {
    chapter: "Tiêu chảy cấp ở trẻ em",
    level: "Nhận biết",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Cơ chế tác dụng dược lý của thuốc Diosmectit (Smecta) trong phác đồ hỗ trợ điều trị tiêu chảy cấp là gì?",
    options: [
      "Tạo màng bao phủ bảo vệ lớp chất nhầy niêm mạc tiêu hóa, hấp phụ độc tố vi khuẩn, virus và dịch mật mà không hấp thu vào máu",
      "Ức chế chọn lọc thụ thể Opioid mu ở đám rối thần kinh ruột làm giảm nhu động ruột",
      "Tiêu diệt trực tiếp các vi khuẩn gây bệnh đường ruột tương tự kháng sinh phổ rộng",
      "Trung hòa acid dịch vị và kích thích mở van môn vị để tống xuất dịch"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng: Smecta là nhôm magnesi silicat thiên nhiên có cấu trúc từng lớp mỏng và độ nhầy cao, bao phủ niêm mạc ruột non và đại tràng, hấp phụ vi khuẩn, virus, độc tố và bảo vệ hàng rào niêm mạc tiêu hóa, đào thải theo phân.",
    reference: "Dls.pdf Trang 14 (Câu 15: Thuốc smecta có cơ chế là gì: bảo vệ niêm mạc ruột)"
  }
];

// Append to current bank
const updatedBank = [...currentBank, ...realExamQuestions];
const header = 'const ALL_EXAM_BANK = ';
const footer = ';\n\nif (typeof module !== "undefined" && module.exports) {\n  module.exports = ALL_EXAM_BANK;\n}\n';

fs.writeFileSync(questionsFile, header + JSON.stringify(updatedBank, null, 2) + footer, 'utf8');
console.log('Successfully appended real exam questions. Total questions now:', updatedBank.length);

const dlsTotal = updatedBank.filter(q => q.source === 'DLS_PDF').length;
console.log('Total DLS_PDF questions now:', dlsTotal);

