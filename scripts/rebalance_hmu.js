const fs = require('fs');
const path = require('path');

const hmu = require('./generate_hmu_questions.js');

const updates = {
  0: {
    options: [
      "Thuốc Methylprednisolon tiêm tĩnh mạch",
      "Thuốc Adrenalin tiêm bắp ngay lập tức",
      "Thuốc Diphenhydramin tiêm bắp sâu chậm",
      "Dung dịch Natri bicarbonat truyền tĩnh mạch"
    ],
    correct: 1
  },
  1: {
    options: [
      "Tiêm tĩnh mạch trực tiếp 1 ống nguyên chất trong 10 giây",
      "Tiêm bắp 1/2 ống ở mặt trước ngoài đùi ngay khi phát hiện",
      "Tiêm dưới da 1/4 ống tại vùng cơ delta cánh tay của bệnh nhân",
      "Pha loãng 1 ống vào 500 ml Natri Clorid 0.9% truyền trong 8 giờ"
    ],
    correct: 1
  },
  3: {
    options: [
      "3 mức độ; Độ I là tụt huyết áp kịch phát và mất tri giác hoàn toàn",
      "4 mức độ; Độ I chỉ có triệu chứng ở da, tổ chức dưới da và niêm mạc",
      "5 mức độ; Độ I là co thắt thanh quản tím tái và ngừng thở đột ngột",
      "2 mức độ; Độ I là trụy mạch và ngừng tuần hoàn hô hấp không hồi phục"
    ],
    correct: 1
  },
  6: {
    options: [
      "Sốt cao co giật, đồng tử giãn to hai bên kèm tiêu chảy cấp và mất nước nặng",
      "Hôn mê ức chế tri giác, đồng tử co nhỏ như đầu đinh ghim và ức chế hô hấp",
      "Tăng huyết áp kịch phát, tim đập nhanh và rung giật nhãn cầu ngang liên tục",
      "Vàng da tan máu, nổi ban xuất huyết hoại tử trên da và suy thận cấp vô niệu"
    ],
    correct: 1
  },
  7: {
    options: [
      "Naloxon chỉ bắt đầu phát huy tác dụng lâm sàng sau 6 giờ tiêm truyền tĩnh mạch",
      "Thời gian bán thải Naloxon rất ngắn nên có thể tái hôn mê khi thuốc hết tác dụng",
      "Thuốc có nguy cơ gây hạ đường huyết nghiêm trọng đe dọa co giật và phù não cấp",
      "Naloxon gắn kết vĩnh viễn không hồi phục vào các thụ thể Mu-opioid tại thần kinh"
    ],
    correct: 1
  },
  10: {
    options: [
      "Cho bệnh nhân uống Vitamin C liều cao kết hợp truyền dung dịch Glucose ngọt",
      "Phức hợp Prothrombin đậm đặc 4 yếu tố phối hợp tiêm tĩnh mạch Vitamin K1",
      "Tiêm bắp sâu Protamin sulfat kết hợp truyền tiểu cầu đậm đặc liều cao cấp",
      "Truyền dung dịch Natri Clorid 3% ưu trương kết hợp thuốc cầm máu Tranexamic"
    ],
    correct: 1
  },
  13: {
    options: [
      "Cho người bệnh uống ngay nhựa trao đổi ion Kayexalate kết hợp sorbitol nhuận tràng",
      "Tiêm tĩnh mạch chậm Canxi Clorid 10% hoặc Canxi Gluconat 10% để ổn định màng tim",
      "Tiêm tĩnh mạch Insulin tác dụng nhanh kèm truyền Glucose ưu trương để hạ kali máu",
      "Truyền dung dịch Natri bicarbonat 1.4% tốc độ nhanh nhằm mục đích kiềm hóa máu sớm"
    ],
    correct: 1
  },
  15: {
    options: [
      "Thông liên thất lỗ lớn và đảo gốc động mạch đe dọa tử vong sau sinh",
      "Đóng sớm ống động mạch dẫn đến tăng áp động mạch phổi và suy tim thai",
      "Hẹp van hai lá bẩm sinh và thiểu sản buồng thất trái của tim thai nhi",
      "Ngừng tim thai do block nhĩ thất hoàn toàn và rung thất thứ phát cấp"
    ],
    correct: 1
  },
  16: {
    options: [
      "Làm tan máu cấp tính ở người mẹ dẫn đến trụy mạch và sốc mất máu tức thì",
      "Khả năng gây quái thai cực mạnh với dị tật sọ não, tai, tim mạch và tuyến ức",
      "Gây ung thư biểu mô nội mạc tử cung xuất hiện ngay trong quá trình mang thai",
      "Gây suy tủy xương toàn dòng làm giảm tiểu cầu nặng dẫn đến sảy thai tự nhiên"
    ],
    correct: 1
  },
  17: {
    options: [
      "Kháng sinh phổ rộng, Thuốc lợi tiểu quai, Canxi gluconat và Vitamin C tiêm",
      "Thuốc kháng giáp trạng tổng hợp, Iod vô cơ, Chẹn beta và Glucocorticoid",
      "Insulin nhanh, Natri bicarbonat, Thuốc ức chế men chuyển và Dopamin truyền",
      "Morphin sulfat, Kháng Histamin H1, Kháng đông Heparin và Dịch truyền đẳng trương"
    ],
    correct: 1
  },
  18: {
    options: [
      "Truyền thật nhanh Natri Clorid 3% để đưa natri máu về bình thường 140 mmol/L trong 6 giờ",
      "Truyền dung dịch Natri Clorid 3% ưu trương, nâng natri không quá 8 - 10 mmol/L trong 24h",
      "Chỉ cần cho bệnh nhân hạn chế uống nước kết hợp dùng thuốc lợi tiểu quai Furosemid",
      "Truyền dung dịch Glucose 5% đẳng trương tốc độ nhanh để đào thải lượng nước tự do dư thừa"
    ],
    correct: 1
  },
  19: {
    options: [
      "Lắng đọng tinh thể trong lòng ống góp gây tắc nghẽn vô niệu và tăng urê máu cấp",
      "Tích tụ trong tế bào biểu mô ống lượn gần gây hoại tử tế bào ống thận cấp tính",
      "Co thắt dữ dội tiểu động mạch vào cầu thận do kích hoạt hệ renin-angiotensin",
      "Tạo kháng thể tự miễn phá hủy màng đáy cầu thận gây hội chứng thận hư tái phát"
    ],
    correct: 1
  },
  21: {
    options: [
      "Bậc 1: Sử dụng các thuốc Opioid yếu đơn trị liệu không cần dùng thêm thuốc giảm đau",
      "Bậc 3: Sử dụng các thuốc Opioid mạnh phối hợp thuốc giảm đau không opioid và hỗ trợ",
      "Bậc 2: Phối hợp hai loại thuốc Opioid mạnh với nhau mà không dùng thuốc bổ trợ nào",
      "Bậc 4: Phẫu thuật cắt bỏ dây thần kinh cảm giác kết hợp gây mê toàn thân liên tục"
    ],
    correct: 1
  },
  24: {
    options: [
      "Cho uống ngay viên Metformin 1000 mg kết hợp truyền dung dịch Glucose ưu trương",
      "Bù dịch bằng Natri Clorid 0.9% và truyền tĩnh mạch Insulin tác dụng nhanh",
      "Tiêm dưới da Insulin tác dụng kéo dài Glargine liều cao ngay tại thời điểm nhập viện",
      "Truyền tĩnh mạch chậm Albumin người 20% kết hợp thuốc lợi tiểu Thiazid đường uống"
    ],
    correct: 1
  },
  25: {
    options: [
      "Truyền ngay dung dịch Natri bicarbonat 1.4% liều cao để kiềm hóa máu nhanh",
      "Theo dõi sát và bù Kali trước hoặc đồng thời khi truyền Insulin tĩnh mạch",
      "Cho bệnh nhân uống thuốc lợi tiểu quai Furosemid để tăng thải acid qua nước tiểu",
      "Tiêm ngay Glucagon tĩnh mạch liều cao để kích thích giải phóng glucose dự trữ"
    ],
    correct: 1
  },
  26: {
    options: [
      "Hội chứng an thần kinh ác tính gây co cứng cơ dạng ống chì và hạ thân nhiệt",
      "Hội chứng Serotonin biểu hiện run giật cơ, tăng phản xạ, sốt cao và mê sảng",
      "Cơn tăng huyết áp kịch phát ác tính dẫn đến xuất huyết não diện rộng tử vong",
      "Hội chứng suy tim sung huyết cấp tính do ức chế trực tiếp sức co bóp cơ tim"
    ],
    correct: 1
  },
  27: {
    options: [
      "Tiêm tĩnh mạch chậm dung dịch Xanh Methylen kết hợp truyền dịch kiềm",
      "Thở oxy 100% qua mặt nạ có túi dự trữ hoặc liệu pháp Oxy cao áp",
      "Cho thở hỗn hợp khí Carbogen chứa 95% Oxy kết hợp dùng thuốc lợi tiểu",
      "Tiêm bắp Atropin sulfat liều cao kết hợp Pralidoxim giải độc cơ quan"
    ],
    correct: 1
  },
  29: {
    options: [
      "Gây khép sớm ống động mạch dẫn đến tăng áp lực động mạch phổi và suy tim phải thai nhi",
      "Hội chứng Warfarin thai nhi gây giảm sản xương mũi, dị tật đầu xương đốm và teo thị giác",
      "Gây dị tật dính ngón tay chân và teo cơ bẩm sinh do độc tính trực tiếp lên tế bào sụn",
      "Gây suy giáp bẩm sinh nặng nề kèm thiểu năng trí tuệ vĩnh viễn không thể hồi phục"
    ],
    correct: 1
  },
  32: {
    options: [
      "Có thể tiêm tĩnh mạch trực tiếp thật nhanh trong vòng 1 phút nếu bệnh nhân hạ kali nặng",
      "Bắt buộc pha loãng trong chai dịch truyền và truyền chậm, TUYỆT ĐỐI KHÔNG tiêm trực tiếp",
      "Pha loãng trong dung dịch Glucose ưu trương 20% và tiêm bolus tĩnh mạch liều nạp ban đầu",
      "Chỉ được tiêm bắp sâu ở cơ delta cánh tay và tuyệt đối không bao giờ được truyền tĩnh mạch"
    ],
    correct: 1
  },
  33: {
    options: [
      "Tác dụng kích thích thụ thể adrenergic gây tăng huyết áp kịch phát và vỡ phình mạch",
      "Tác dụng kháng cholinergic gây khô miệng, mờ mắt, bí tiểu và an thần buồn ngủ",
      "Tác dụng ức chế tủy xương gây giảm tế bào máu toàn dòng và nhiễm trùng cơ hội",
      "Tác dụng gây độc tế bào gan dẫn đến tăng men gan kịch phát và suy gan cấp tính"
    ],
    correct: 1
  },
  34: {
    options: [
      "Hội chứng suy tuyến thượng thận cấp và tụt huyết áp kịch phát",
      "Hội chứng Stevens-Johnson và Hoại tử thượng bì nhiễm độc",
      "Viêm tụy cấp xuất huyết hoại tử lan tỏa hai bên khoang sau phúc mạc",
      "Hội chứng ngoại tháp gây cơn co cứng cơ và loạn trương lực cơ vân"
    ],
    correct: 1
  },
  35: {
    options: [
      "Hội chứng tăng áp lực nội sọ giả u não do tăng tiết dịch não tủy",
      "Viêm đại tràng giả mạc do nhiễm khuẩn Clostridioides difficile",
      "Suy tủy xương không hồi phục dẫn đến thiếu máu bất sản toàn dòng",
      "Viêm gan tắc mật cấp tính kèm hoại tử nhu mô gan dạng bùng phát"
    ],
    correct: 1
  },
  37: {
    options: [
      "Xuất huyết tiêu hóa do phá hủy hàng rào bảo vệ dạ dày",
      "Tổn thương thận cấp do giảm mạnh áp lực lọc cầu thận",
      "Hạ huyết áp tư thế đứng nghiêm trọng do giãn mạch ngoại vi",
      "Hội chứng cai thuốc cấp tính do ức chế thụ thể giao cảm"
    ],
    correct: 1
  },
  39: {
    options: [
      "Sau khi bệnh nhân đã sốt liên tục kéo dài được hơn 5 ngày liền",
      "Trong vòng 48 giờ đầu tiên kể từ khi khởi phát triệu chứng sốt",
      "Chỉ định khi bệnh nhân đã xuất hiện biến chứng suy hô hấp cấp",
      "Sau khi hiệu giá kháng thể kháng virus trong máu tăng gấp 4 lần"
    ],
    correct: 1
  },
  40: {
    options: [
      "Xác định hiệu quả điều trị tối ưu và tác dụng phụ trên hàng nghìn bệnh nhân mắc bệnh đích",
      "Đánh giá tính an toàn, khả năng dung nạp, khoảng liều và dược động học ở người tình nguyện",
      "Giám sát an toàn và các phản ứng có hại hiếm gặp sau khi thuốc đã được cấp phép lưu hành",
      "Đánh giá độc tính trường diễn, khả năng gây đột biến gen và quái thai trên động vật thí nghiệm"
    ],
    correct: 1
  },
  41: {
    options: [
      "Báo cáo loạt ca bệnh lâm sàng tại một bệnh viện tuyến trung ương có đối chứng hồi cứu",
      "Tổng quan hệ thống và phân tích gộp từ các thử nghiệm lâm sàng ngẫu nhiên có đối chứng",
      "Nghiên cứu bệnh - chứng đa trung tâm kết hợp phân tích đa biến hồi quy logistic chuẩn",
      "Ý kiến đồng thuận của các chuyên gia đầu ngành trong hội đồng chuyên môn quốc gia"
    ],
    correct: 1
  },
  43: {
    options: [
      "Biến cố bất lợi chỉ xuất phát từ sai sót kỹ thuật tiêm truyền sai giờ của điều dưỡng viên",
      "Biến cố có thể phòng tránh được, xảy ra trong bất kỳ khâu nào của quá trình dùng thuốc",
      "Biến cố bắt buộc phải để lại hậu quả tử vong hoặc tàn tật vĩnh viễn cho người bệnh nội trú",
      "Biến cố ngộ độc thuốc do cơ địa dị ứng bẩm sinh không thể nào dự phòng trước được trên lâm sàng"
    ],
    correct: 1
  },
  46: {
    options: [
      "Pha Oresol bằng nước đun sôi để nguội và cho trẻ uống trong vòng 24 giờ sau pha",
      "Pha gói Oresol với lượng nước quá ít quy định hoặc chia nhỏ gói thuốc để pha",
      "Cho trẻ uống từng thìa nhỏ ngắt quãng hoặc uống từng ngụm nhỏ theo nhu cầu của trẻ",
      "Đổ bỏ phần dung dịch Oresol đã pha sau 24 giờ nếu trẻ không uống hết dung dịch"
    ],
    correct: 1
  },
  47: {
    options: [
      "Trẻ quấy khóc đòi bú liên tục và khóc to khi mẹ rút vú do cảm giác thèm bú sữa",
      "Trẻ nôn tất cả mọi thứ, co giật, li bì khó đánh thức hoặc sốt rất cao không hạ",
      "Trẻ đi ngoài phân có mùi chua nhẹ kèm bọt hơi sau khi chuyển sang chế độ ăn dặm",
      "Trẻ đi tiểu 5 đến 6 lần trong ngày với lượng nước tiểu bình thường và màu trong"
    ],
    correct: 1
  },
  48: {
    options: [
      "Tiêu diệt hoàn toàn toàn bộ các virus và vi khuẩn gây bệnh đường ruột trong vòng 6 giờ đầu",
      "Hỗ trợ cân bằng hệ vi sinh ruột, cạnh tranh vi khuẩn bệnh và rút ngắn thời gian tiêu chảy",
      "Thay thế hoàn toàn cho dung dịch bù nước Oresol và cung cấp đủ toàn bộ năng lượng cho trẻ",
      "Làm liệt cơ trơn thành ruột và cơ vòng hậu môn để ngăn chặn triệt để phân lỏng trào ra ngoài"
    ],
    correct: 1
  },
  50: {
    options: [
      "Thuốc gây co thắt khí phế quản cấp tính qua trung gian IgE dẫn đến suy hô hấp dữ dội",
      "Trẻ chuyển hóa siêu nhanh qua CYP2D6 tạo Morphine ồ ạt dẫn đến suy hô hấp tử vong",
      "Thuốc phá hủy trực tiếp tế bào gan do thiếu hụt enzym khử độc dẫn đến hoại tử gan cấp",
      "Gây xuất huyết tiêu hóa ồ ạt và thủng dạ dày tá tràng do ức chế tổng hợp prostaglandin"
    ],
    correct: 1
  },
  51: {
    options: [
      "Tế bào sắc tố biểu mô võng mạc mắt và thể mi thể thủy tinh gây mù lòa",
      "Tế bào biểu mô ống lượn gần của thận và tế bào lông của ốc tai - tiền đình",
      "Tế bào gốc tạo máu tại tủy xương gây suy tủy giảm ba dòng tế bào máu ngoại vi",
      "Tế bào cơ tim và hệ thống dẫn truyền nhĩ thất gây viêm cơ tim cấp giãn buồng tim"
    ],
    correct: 1
  },
  53: {
    options: [
      "Truyền ngay dung dịch Glucose 10% tốc độ nhanh rồi mới bổ sung Vitamin B1 sau 24 giờ",
      "Tiêm bắp hoặc truyền tĩnh mạch Thiamin liều cao trước khi truyền dung dịch Glucose",
      "Cho bệnh nhân uống dung dịch bù nước Oresol kết hợp viên sủi Vitamin C liều cao hàng ngày",
      "Chỉ định ngay kháng sinh Ceftriaxon liều cao tiêm tĩnh mạch dự phòng viêm phổi hít sặc"
    ],
    correct: 1
  },
  54: {
    options: [
      "Hạ kali máu kịch phát dẫn đến liệt cơ chu kỳ và ngừng thở do yếu liệt cơ hô hấp cấp",
      "Tăng calci máu nặng dẫn đến vôi hóa mô mềm, sỏi thận, rối loạn nhịp tim và suy thận",
      "Hạ natri máu nặng dẫn đến phù não cấp tính, co giật toàn thể và hôn mê sâu đe dọa tử vong",
      "Hạ phosphat máu nặng dẫn đến tiêu cơ vân cấp, toan chuyển hóa và suy đa cơ quan nội tạng"
    ],
    correct: 1
  },
  56: {
    options: [
      "Cảm cúm thông thường có sốt nhẹ kèm theo ho đờm và đau rát họng kéo dài ở người lớn",
      "Đợt bùng phát cấp tính đe dọa tính mạng hoặc tổn thương cơ quan đích của bệnh tự miễn",
      "Đau đầu do căng thẳng tâm lý, mất ngủ kéo dài và suy nhược thần kinh sau làm việc",
      "Viêm mũi dị ứng thời tiết theo mùa kèm hắt hơi chảy nước mũi ở trẻ em và thiếu niên"
    ],
    correct: 1
  },
  57: {
    options: [
      "Tăng cường chuyển hóa qua gan lần đầu làm cho phân tử thuốc bị mất hoàn toàn hoạt tính",
      "Giảm chuyển hóa qua gan lần đầu, làm tăng sinh khả dụng và tăng nguy cơ ngộ độc thuốc",
      "Tốc độ lọc cầu thận và độ thanh thải của các hoạt chất qua nước tiểu tăng vọt gấp 5 lần",
      "Thuốc bị giữ lại trong lòng mạch và hoàn toàn không thể phân bố vào các tổ chức mô bào"
    ],
    correct: 1
  }
};

for (const [idxStr, data] of Object.entries(updates)) {
  const idx = parseInt(idxStr, 10);
  hmu[idx].options = data.options;
  hmu[idx].correct = data.correct;
}

const newCode = `// 60 High-Yield Clinical Pharmacy Questions - Đại học Y Hà Nội (HMU)
// Chuyên đề: Sốc phản vệ, Cấp cứu ngộ độc, Tăng/Hạ Natri/Kali, Kháng sinh hồi sức, Độc tính thai kỳ
// Đã chuẩn hóa độ dài phương án, loại bỏ hoàn toàn thiên kiến độ dài

const HMU_QUESTIONS = ${JSON.stringify(hmu, null, 2)};

module.exports = HMU_QUESTIONS;
`;

fs.writeFileSync(path.join(__dirname, 'generate_hmu_questions.js'), newCode, 'utf8');
console.log('Successfully rebalanced HMU questions!');
