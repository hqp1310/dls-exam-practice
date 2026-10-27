const fs = require('fs');
const path = require('path');

const ump = require('./generate_ump_questions.js');

const updates = {
  1: {
    options: [
      "Thuốc chẹn kênh Canxi nhóm DHP tác dụng kéo dài đơn độc",
      "Thuốc ức chế men chuyển hoặc chẹn thụ thể Angiotensin II",
      "Thuốc chẹn thụ thể beta giao cảm chọn lọc tim liều cao",
      "Thuốc lợi tiểu Thiazid phối hợp thuốc giãn mạch trực tiếp"
    ],
    correct: 1
  },
  5: {
    options: [
      "ARNI + Chẹn beta + Kháng thụ thể Mineralocorticoid + Ức chế SGLT2",
      "Digoxin + Lợi tiểu Thiazid + Chẹn kênh Calci DHP + Aspirin liều thấp",
      "Amlodipin + Nitrate kéo dài + Ivabradin + Furosemid tiêm tĩnh mạch",
      "Ức chế men chuyển + Chẹn thụ thể AT1 + Kháng Aldosteron + Canxi uống"
    ],
    correct: 0
  },
  10: {
    options: [
      "Nồng độ trong máu thấp do Vd lớn, không thích hợp cho nhiễm khuẩn huyết",
      "Thải trừ hoàn toàn qua thận dạng nguyên vẹn gây độc tính thận nặng nề",
      "Gây tăng huyết áp kịch phát ác tính do co thắt động mạch thận hai bên",
      "Thời gian bán thải cực ngắn dưới 15 phút nên phải tiêm truyền liên tục"
    ],
    correct: 0
  },
  11: {
    options: [
      "Liệu pháp 3 thuốc kéo dài liên tục 12 tháng bất kể nguy cơ xuất huyết cao",
      "Chỉ dùng đơn trị liệu Aspirin liều thấp 81 mg duy nhất ngay sau can thiệp",
      "Liệu pháp 3 thuốc ngắn hạn, sau đó chuyển sang liệu pháp 2 thuốc đến 12 tháng",
      "Ngừng toàn bộ thuốc chống đông đường uống và chỉ dùng Ticagrelor đơn độc"
    ],
    correct: 2
  },
  13: {
    options: [
      "Dùng trong 5 ngày",
      "Dùng từ 14 đến 21 ngày",
      "Dùng từ 1 đến 2 tháng",
      "Dùng liên tục suốt đời"
    ],
    correct: 0
  },
  16: {
    options: [
      "Uống 1 mg mỗi giờ cho đến khi xuất hiện tiêu chảy dữ dội thì dừng lại",
      "Khởi đầu 1 mg, sau 1 giờ thêm 0.5 mg, tổng ngày đầu không quá 1.5 - 1.8 mg",
      "Uống liều cao 5 mg ngay từ đầu kết hợp truyền dịch kiềm hóa nước tiểu",
      "Dùng duy nhất một viên 0.25 mg mỗi 3 ngày một lần sau khi ăn no xong"
    ],
    correct: 1
  },
  17: {
    options: [
      "Kiểm tra kiểu gen HLA-B*5801 để phòng ngừa hội chứng dị ứng nặng Stevens-Johnson",
      "Định lượng nồng độ enzym G6PD trong hồng cầu để phòng ngừa nguy cơ tan máu cấp",
      "Xét nghiệm kiểu hình đa hình enzym CYP2C9 để xác định tốc độ chuyển hóa thuốc",
      "Đo hoạt tính enzym Thiopurine methyltransferase để tránh nguy cơ suy tủy xương"
    ],
    correct: 0
  },
  19: {
    options: [
      "Vancomycin tiêm truyền kết hợp với Gentamicin tiêm bắp duy trì liên tục trong 14 ngày",
      "Phối hợp Beta-lactam đường tiêm với Macrolid hoặc một Fluoroquinolon hô hấp đơn trị liệu",
      "Metronidazol đường uống phối hợp Ciprofloxacin truyền tĩnh mạch điều trị nội trú",
      "Cefazolin đơn độc truyền tĩnh mạch mỗi 8 giờ kết hợp thuốc giảm ho Codein đường uống"
    ],
    correct: 1
  },
  22: {
    options: [
      "Thuốc đồng vận thụ thể GLP-1 hoặc thuốc ức chế kênh SGLT2",
      "Thuốc nhóm Sulfonylurea thế hệ 1 liều cao trước bữa ăn",
      "Thuốc nhóm Thiazolidinedion kết hợp thuốc ức chế DPP-4",
      "Insulin NPH tiêm dưới da liều cao duy trì trước khi ngủ"
    ],
    correct: 0
  },
  23: {
    options: [
      "Xơ gan teo đét tiến triển nhanh dẫn đến suy gan cấp bùng phát và hôn mê gan",
      "Nhiễm toan ceton đái tháo đường với mức đường huyết bình thường hoặc chỉ tăng nhẹ",
      "Tăng huyết áp kịch phát dẫn đến phình tách động mạch chủ ngực và xuất huyết não",
      "Gây tổn thương thần kinh thính giác dẫn đến điếc tiếp nhận không thể hồi phục"
    ],
    correct: 1
  },
  26: {
    options: [
      "Định lượng chính xác số lượng vi khuẩn sống có mặt trong mẫu nước tiểu 24 giờ của bệnh nhân",
      "Phân biệt nhiễm khuẩn do vi khuẩn với sốt do virus và định hướng an toàn ngừng kháng sinh",
      "Đánh giá mức độ hủy hoại tế bào cơ tim sau hội chứng vành cấp và nhồi máu cơ tim cấp tính",
      "Đo lường chính xác mức lọc cầu thận độc lập với chỉ số Creatinin và khối lượng cơ bắp"
    ],
    correct: 1
  },
  28: {
    options: [
      "Nghiền nát viên thuốc hòa cùng nước cam chua để uống ngay trước lúc lên giường đi ngủ",
      "Uống cùng một cốc sữa tươi giàu canxi ngay sau bữa ăn trưa để giảm kích ứng đường ruột",
      "Uống sáng sớm lúc đói với cốc nước đầy, giữ tư thế thẳng đứng ít nhất 30 phút sau uống",
      "Nằm nghỉ ngơi thư giãn trên giường ngay lập tức sau khi nuốt viên thuốc với một ngụm nước"
    ],
    correct: 2
  },
  29: {
    options: [
      "Thuốc giãn mạch trực tiếp đường tĩnh mạch như Hydralazin hoặc Natri nitroprussid đơn độc",
      "Thuốc chẹn beta giao cảm tác dụng cực ngắn đường tĩnh mạch như Esmolol hoặc Labetalol",
      "Thuốc chẹn kênh Canxi dihydropyridin tác dụng nhanh nhỏ dưới lưỡi như Nifedipin nang mềm",
      "Thuốc lợi tiểu quai Furosemid tiêm tĩnh mạch liều cao phối hợp truyền dịch đẳng trương"
    ],
    correct: 1
  },
  30: {
    options: [
      "Chỉ sử dụng đơn trị liệu Aspirin liều thấp 81 mg mỗi ngày một lần duy nhất",
      "Phối hợp Aspirin với thuốc ức chế P2Y12 như Ticagrelor hoặc Clopidogrel",
      "Dùng phối hợp 3 thuốc gồm Aspirin, Clopidogrel và thuốc chống đông đường uống",
      "Chỉ dùng thuốc chống đông đường uống Warfarin hoặc NOAC mà không dùng thuốc nào"
    ],
    correct: 1
  },
  31: {
    options: [
      "Kích thích trực tiếp thụ thể beta-2 adrenergic làm tăng tổng hợp AMP vòng gây giãn phế quản",
      "Ức chế thụ thể muscarinic M3 trên cơ trơn phế quản, làm giảm trương lực phế vị và giãn phế quản",
      "Ức chế enzym phosphodiesterase-4 nội bào giúp ngăn chặn giải phóng các chất trung gian viêm",
      "Đối kháng thụ thể leukotriene CysLT1 làm giảm phù nề niêm mạc và giảm tiết dịch nhầy đường thở"
    ],
    correct: 1
  },
  38: {
    options: [
      "Nguy cơ gây suy tủy xương thứ phát dẫn đến thiếu máu bất sản và giảm bạch cầu hạt nặng",
      "Nguy cơ an thần quá mức, lú lẫn, té ngã và tác dụng kháng cholinergic gây bí tiểu, táo bón",
      "Nguy cơ gây loét thủng dạ dày tá tràng xuất huyết và thủng tạng rỗng đe dọa tính mạng",
      "Nguy cơ làm tăng huyết áp kịch phát dẫn đến phình tách động mạch chủ và xuất huyết não"
    ],
    correct: 1
  },
  40: {
    options: [
      "Cơ chế tác dụng dược lực học ở mức độ thụ thể tế bào và cấu trúc phân tử thuốc tim mạch",
      "Tính tương thích vật lý, độ ổn định hóa học và tương kỵ của các thuốc tiêm truyền tĩnh mạch",
      "Liều lượng, đường dùng và phác đồ hóa trị liệu điều trị ung thư cho bệnh nhân nhi khoa",
      "Bảng giá thanh toán bảo hiểm y tế và danh mục thuốc đấu thầu tập trung cấp quốc gia"
    ],
    correct: 1
  },
  42: {
    options: [
      "Tự động dịch toàn văn bài báo tiếng nước ngoài sang tiếng Việt theo chuẩn y khoa quốc tế",
      "Giúp tìm kiếm bao quát và chuẩn xác dù các tác giả sử dụng các từ đồng nghĩa khác nhau",
      "Cho phép tải về toàn văn miễn phí tất cả các bài báo nghiên cứu có tính phí bản quyền cao",
      "Chỉ hiển thị các bài báo nghiên cứu thử nghiệm lâm sàng được thực hiện tại các nước Châu Á"
    ],
    correct: 1
  },
  44: {
    options: [
      "Tiếp tục cấp phát hết số thuốc tồn kho hiện tại cho bệnh nhân nhẹ rồi mới ngừng nhập mới",
      "Ngừng ngay việc cấp phát, thông báo thu hồi tại các khoa phòng và niêm phong trong 24 giờ",
      "Chuyển toàn bộ số thuốc bị cảnh báo sang phân phát điều trị cho bệnh nhân khám ngoại trú",
      "Tự tổ chức kiểm nghiệm lại hoạt chất tại bệnh viện trước khi ra quyết định thu hồi chính thức"
    ],
    correct: 1
  },
  46: {
    options: [
      "Kháng sinh Metronidazol đơn độc kết hợp thuốc cầm tiêu chảy ruột",
      "Kháng sinh Azithromycin hoặc Ciprofloxacin liều chuẩn ngắn ngày",
      "Kháng sinh Vancomycin đường uống phối hợp truyền dịch điện giải",
      "Kháng sinh Amikacin tiêm bắp sâu duy trì liên tục trong 14 ngày"
    ],
    correct: 1
  },
  48: {
    options: [
      "Nhịn ăn hoàn toàn chỉ truyền dịch tĩnh mạch và dùng dung dịch acid amin nuôi dưỡng trong 7 ngày",
      "Tiếp tục bú mẹ; nếu dùng sữa công thức thì tạm chuyển loại không lactose cho đến khi hồi phục",
      "Cho trẻ uống nước đường glucose đậm đặc 20% thay cho toàn bộ các bữa sữa cho đến khi cầm tiêu chảy",
      "Ngừng bú mẹ hoàn toàn và dùng phối hợp kháng sinh Metronidazol cùng Clindamycin đường uống ngay"
    ],
    correct: 1
  },
  50: {
    options: [
      "Thể tích phân bố giảm xuống mạnh, đòi hỏi liều nạp ban đầu theo mg/kg phải giảm đi một nửa",
      "Thể tích phân bố tính theo kg tăng lên, đòi hỏi liều nạp ban đầu theo mg/kg phải cao hơn",
      "Thuốc tích lũy hoàn toàn vào mô mỡ dưới da làm kéo dài thời gian bán thải lên gấp 5 lần",
      "Tốc độ lọc cầu thận và độ thanh thải qua thận tăng gấp 10 lần ngay sau khi sinh ra đời"
    ],
    correct: 1
  },
  51: {
    options: [
      "Làm tăng nguy cơ co giật động kinh toàn thể do thuốc qua hàng rào máu não chưa hoàn thiện",
      "Nguy cơ tạo tủa Calci - Ceftriaxon không tan lắng đọng tại phổi và thận dẫn đến tử vong",
      "Gây hủy hoại tủy sống và liệt mềm hai chi dưới do ngộ độc trực tiếp nồng độ ion Calci tự do",
      "Làm biến đổi dung dịch Calci thành chất độc gây hạ đường huyết và toan chuyển hóa sơ sinh"
    ],
    correct: 1
  },
  53: {
    options: [
      "Vitamin K làm tăng độc tính xuất huyết não của Warfarin lên gấp 10 lần do hiệp đồng tác dụng",
      "Vitamin K đối kháng tác dụng chống đông của Warfarin, làm giảm INR và tăng nguy cơ tắc mạch",
      "Vitamin K làm bất hoạt và phá hủy trực tiếp phân tử thuốc Warfarin ngay trong lòng mạch máu",
      "Rau xanh làm kiềm hóa nước tiểu dẫn đến tăng đào thải hoàn toàn Warfarin qua đường bài niệu"
    ],
    correct: 1
  },
  54: {
    options: [
      "Sỏi Acid Uric do tăng thoái hóa nhân purin và tăng acid uric niệu ở ống thận",
      "Sỏi Canxi Oxalat do acid ascorbic chuyển hóa nội sinh thành oxalat trong nước tiểu",
      "Sỏi Struvit do vi khuẩn Proteus phân giải ure tạo phức hợp magie amoni phosphat",
      "Sỏi Cystin do đột biến di truyền tái hấp thu acid amin kiềm tại ống lượn gần"
    ],
    correct: 1
  },
  55: {
    options: [
      "Chỉ định ngay liệu pháp hormon Estrogen liều cao tiêm bắp hàng tuần để dự phòng mất xương",
      "Bổ sung Canxi, Vitamin D và phối hợp Bisphosphonat dựa trên phân tầng nguy cơ gãy xương",
      "Yêu cầu bệnh nhân bất động tuyệt đối tại giường trong suốt thời gian điều trị Corticoid",
      "Chỉ cần dùng Paracetamol liều tối đa hàng ngày kết hợp thuốc an thần để giảm đau mỏi xương"
    ],
    correct: 1
  },
  56: {
    options: [
      "Luôn kèm theo tụt huyết áp kịch phát, hạ natri máu nặng và trụy tim mạch không hồi phục",
      "Nồng độ Cortisol máu bình thường nhưng bệnh nhân vẫn mệt mỏi, đau nhức cơ khớp và chán ăn",
      "Xuất hiện ngay trong ngày đầu tiên giảm liều và tự khỏi sau 24 giờ không cần can thiệp",
      "Chỉ xảy ra khi dùng Glucocorticoid bôi ngoài da diện hẹp và không gặp khi dùng đường uống"
    ],
    correct: 1
  },
  58: {
    options: [
      "Hạ huyết áp thật nhanh về mức huyết áp tối ưu 120/80 mmHg ngay trong vòng 15 phút đầu",
      "Dùng thuốc hạ áp truyền tĩnh mạch, hạ huyết áp tâm thu không quá 20 - 25% trong giờ đầu",
      "Dùng ngay Nifedipin viên nang nhỏ giọt dưới lưỡi để hạ huyết áp tức thì trong 5 phút",
      "Không dùng thuốc hạ áp tĩnh mạch mà chỉ truyền Natri Clorid 0.9% tốc độ nhanh hồi sức"
    ],
    correct: 1
  },
  59: {
    options: [
      "Lựa chọn ưu tiên là Enalapril, Captopril; Chống chỉ định thuốc chẹn beta và chẹn Calci",
      "Lựa chọn ưu tiên là Methyldopa, Labetalol; Chống chỉ định thuốc ức chế men chuyển và ARB",
      "Lựa chọn ưu tiên là Losartan, Telmisartan; Chống chỉ định Methyldopa và Hydralazin tiêm",
      "Lựa chọn ưu tiên là Thiazid liều cao; Chống chỉ định tuyệt đối Magie sulfat và Nifedipin"
    ],
    correct: 1
  }
};

for (const [idxStr, data] of Object.entries(updates)) {
  const idx = parseInt(idxStr, 10);
  ump[idx].options = data.options;
  ump[idx].correct = data.correct;
}

const newCode = `// 60 High-Yield Clinical Pharmacy Questions - Đại học Y Dược TP.HCM (UMP)
// Chuyên đề: Tim mạch, Cấp cứu THA, Kháng sinh hô hấp, Tiêu hóa trẻ em, Trissel's, Beers, STOPP/START
// Đã chuẩn hóa độ dài phương án, loại bỏ hoàn toàn thiên kiến độ dài

const UMP_QUESTIONS = ${JSON.stringify(ump, null, 2)};

module.exports = UMP_QUESTIONS;
`;

fs.writeFileSync(path.join(__dirname, 'generate_ump_questions.js'), newCode, 'utf8');
console.log('Successfully rebalanced UMP questions!');
