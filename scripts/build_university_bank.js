const fs = require('fs');
const path = require('path');

// 1. Read questions_800.js (original backup or current)
const code = fs.readFileSync('questions_800.js', 'utf8');
const bankMatch = code.match(/const ALL_EXAM_BANK = (\[[\s\S]*\]);/)[1];
let bank = eval(bankMatch);
console.log(`Loaded ${bank.length} current questions.`);

// Keep only the first 1222 original questions before re-adding university questions if already appended
if (bank.length > 1222) {
  bank = bank.filter(q => q.source === "BYT" || (!q.source && q.id <= 1222));
  console.log(`Filtered back to original ${bank.length} BYT questions.`);
}

// 2. Load University questions
const HUP_QUESTIONS = require('./generate_hup_questions.js');
const UMP_QUESTIONS = require('./generate_ump_questions.js');
const HMU_QUESTIONS = require('./generate_hmu_questions.js');

console.log(`Loaded ${HUP_QUESTIONS.length} HUP questions.`);
console.log(`Loaded ${UMP_QUESTIONS.length} UMP questions.`);
console.log(`Loaded ${HMU_QUESTIONS.length} HMU questions.`);

// 3. Define ALL filler patterns to strip
const fillerPatterns = [
  /\s*kèm theo sốt nhẹ định kỳ theo đúng hướng dẫn của Bộ Y tế/gi,
  /\s*kèm theo sốt nhẹ theo đúng hướng dẫn của Bộ Y tế/gi,
  /\s*định kỳ theo đúng hướng dẫn của Bộ Y tế/gi,
  /\s*theo đúng hướng dẫn của Bộ Y tế$/gi,
  /\s*kèm theo sốt nhẹ định kỳ/gi,
  /\s*kèm theo sốt nhẹ/gi,
  /\s*trong phác đồ chuẩn/gi,
  /\s*dựa trên kết quả thăm khám lâm sàng/gi,
  /\s*kết hợp theo dõi định kỳ/gi,
  /\s*trong quá trình chăm sóc bệnh nhân/gi,
  /\s*kết hợp theo dõi chức năng cơ quan/gi,
  /\s*theo phác đồ điều trị được khuyến cáo/gi,
  /\s*khi có chỉ định theo dõi của bác sĩ/gi,
  /\s*ở người bệnh ở bệnh nhân có nguy cơ biến chứng cao/gi,
  /\s*ở bệnh nhân có nguy cơ biến chứng cao/gi,
  /\s*ở mức độ vừa và nặng làm tăng tỷ lệ tử vong trên người bệnh/gi,
  /\s*ở mức độ vừa và nặng làm tăng tỷ lệ tử vong/gi,
  /\s*kéo dài liên tục kèm theo sốt cao và suy nhược cơ thể/gi,
  /\s*sau khi dùng thuốc kết hợp theo dõi định kỳ chức năng thận/gi,
  /\s*sau khi dùng thuốc định kỳ kết hợp theo dõi định kỳ chức năng thận/gi,
  /\s*trên lâm sàng định kỳ kèm theo rối loạn chức năng cơ quan/gi,
  /\s*trên lâm sàng kèm theo rối loạn chức năng cơ quan/gi,
  /\s*theo khuyến cáo định kỳ ở mức độ vừa đến mức độ nặng/gi,
  /\s*theo khuyến cáo ở mức độ vừa đến mức độ nặng/gi,
  /\s*ở mức độ vừa đến mức độ nặng/gi,
  /\s*ở mức độ vừa và nặng định kỳ/gi,
  /\s*ở mức độ vừa và nặng/gi,
  /\s*sau khi dùng thuốc định kỳ/gi,
  /\s*theo khuyến cáo định kỳ/gi,
  /\s*trên lâm sàng định kỳ/gi,
  /\s*kéo dài liên tục trên lâm sàng/gi,
  /\s*kéo dài liên tục định kỳ/gi,
  /\s*kéo dài liên tục/gi
];

const endPatterns = [
  /\s*sau khi dùng thuốc$/i,
  /\s*trên lâm sàng$/i,
  /\s*theo khuyến cáo$/i,
  /\s*ở người bệnh$/i,
  /\s*theo đúng hướng dẫn của Bộ Y tế$/i
];

let totalStripped = 0;
bank.forEach(q => {
  q.source = "BYT";
  q.sourceName = "Bộ Y tế (Chuẩn Quốc gia)";
  
  q.options = q.options.map(opt => {
    let s = opt;
    for (const p of fillerPatterns) {
      if (p.test(s)) {
        s = s.replace(p, '');
        totalStripped++;
      }
    }
    for (const p of endPatterns) {
      if (p.test(s)) {
        s = s.replace(p, '');
        totalStripped++;
      }
    }
    s = s.replace(/[\s,-]+$/, '').trim();
    return s;
  });
});
console.log(`Stripped ${totalStripped} filler instances from original questions.`);

// 4. Clinical Distractor Upgrades for flagged questions (flagged weak + joke distractors)
const distractorUpgrades = {
  4: {
    options: [
      "Hấp thu tốt, Phân bố rộng, Chuyển hóa nhanh, Thải trừ hoàn toàn",
      "Hàm lượng cao, Ái lực mạnh, Tương thích rộng, Ít kháng thuốc",
      "Hiệu quả cao, An toàn, Tiện dụng, Chi phí kinh tế hợp lý",
      "Hoạt lực mạnh, Sinh khả dụng tuyệt đối, Độc tính thấp, Kháng sinh đồ nhạy"
    ],
    correct: 2
  },
  21: {
    options: [
      "Dùng chữ viết tắt chuyên khoa để tóm tắt các cảnh báo tương tác",
      "Cung cấp bản sao chi tiết chuyên khảo dược thư và cơ chế tác dụng phân tử",
      "Trình bày ngắn gọn, dễ hiểu, rõ liều lượng và tránh thuật ngữ chuyên môn phức tạp",
      "Sử dụng tên danh pháp quốc tế INN và biệt dược tiếng Anh chuyên sâu"
    ],
    correct: 2
  },
  22: {
    options: [
      "Hướng dẫn bệnh nhân chỉ uống thuốc khi xuất hiện triệu chứng rầm rộ",
      "Cho phép bệnh nhân tự tăng liều gấp đôi nếu quên uống cữ thuốc trước",
      "Phải giám sát nồng độ thuốc trong máu (TDM) và nhận biết dấu hiệu ngộ độc sớm",
      "Chỉ định phối hợp thêm một thuốc đối kháng liều thấp để giảm độc tính"
    ],
    correct: 2
  },
  29: {
    options: [
      "Truyền thật nhanh trong 5 phút để nhanh chóng đạt nồng độ điều trị",
      "Pha chung nhiều loại thuốc vào một chai dịch truyền để tiết kiệm đường truyền",
      "Tuân thủ đúng dung môi pha, tốc độ truyền và theo dõi sát dấu hiệu sinh tồn",
      "Chỉ cần kiểm tra nhiệt độ cơ thể sau khi kết thúc truyền dịch 24 giờ"
    ],
    correct: 2
  },
  31: {
    options: [
      "Nguồn thông tin cấp 1 (Primary sources)",
      "Nguồn thông tin cấp 3 (Tertiary sources)",
      "Nguồn thông tin cấp 2 (Secondary sources)",
      "Tạp chí chuyên ngành đăng bài báo nghiên cứu gốc thử nghiệm lâm sàng"
    ],
    correct: 1
  },
  35: {
    options: [
      "Căn cứ vào mô hình bệnh tật thực tế và hướng dẫn điều trị chuẩn dựa trên bằng chứng",
      "Ưu tiên chọn thuốc có giá thành rẻ nhất bất kể sinh khả dụng và độ tinh khiết",
      "Ưu tiên tối đa các biệt dược gốc đắt tiền có mặt lâu năm trên thị trường",
      "Lựa chọn theo sở thích kê đơn cá nhân của các bác sĩ trưởng khoa"
    ],
    correct: 0
  },
  46: {
    options: [
      "Thay thế hoàn toàn đơn thuốc của bác sĩ điều trị",
      "Cung cấp các thông số phân tích hóa lý và kiểm nghiệm lô sản xuất",
      "Nhắc nhở người bệnh về đường dùng, thời điểm uống thuốc và các cảnh báo an toàn đặc biệt",
      "Tóm tắt toàn bộ nghiên cứu dược động học trên động vật thí nghiệm"
    ],
    correct: 2
  },
  50: {
    options: [
      "Trực tiếp cấp chứng chỉ hành nghề khám chữa bệnh cho bác sĩ nội trú",
      "Cung cấp thông tin cập nhật về an toàn thuốc, tương tác và cảnh giác dược",
      "Cung ứng toàn bộ danh mục thuốc thiết yếu cho các bệnh viện tuyến tỉnh",
      "Giám sát hoạt động tài chính và thanh quyết toán bảo hiểm y tế"
    ],
    correct: 1
  },
  59: {
    options: [
      "Chuyển hoàn toàn sang đường uống để giảm hấp thu vào thận",
      "Giữ nguyên khoảng cách đưa thuốc (mỗi 8 giờ) và giảm liều dùng một lần",
      "Giữ nguyên liều một lần và nới rộng khoảng cách đưa thuốc (ví dụ từ 24h lên 36 - 48h)",
      "Phối hợp thêm Furosemid liều cao để tăng đào thải kháng sinh qua nước tiểu"
    ],
    correct: 2
  },
  65: {
    options: [
      "Độ thanh thải qua thận cộng độ thanh thải qua gan và các cơ quan khác",
      "Tích số giữa độ thanh thải qua thận và độ thanh thải qua gan chia cho thể tích phân bố",
      "Độ thanh thải qua thận trừ đi lượng thuốc bị tái hấp thu tại ống thận",
      "Tỷ số giữa tốc độ lọc cầu thận và lưu lượng máu qua tĩnh mạch cửa gan"
    ],
    correct: 0
  },
  66: {
    options: [
      "Đánh giá mức độ độc tính trên các dòng tế bào tủy xương",
      "Quyết định khoảng cách thời gian giữa các lần đưa thuốc và thời gian đạt trạng thái ổn định",
      "Ước tính mức độ gắn kết của thuốc với thụ thể nội bào",
      "Xác định thể tích dịch ngoại bào cần thiết để hòa tan hoàn toàn liều nạp"
    ],
    correct: 1
  },
  340: {
    options: [
      "Tăng gấp đôi liều dùng của tất cả các thuốc để bù trừ chuyển hóa kém",
      "Cho bệnh nhân tự mua thêm các thuốc chống oxy hóa không kê đơn để hỗ trợ",
      "Thường xuyên rà soát đơn thuốc (Medication reconciliation) và loại bỏ các thuốc không còn chỉ định",
      "Kê thêm thuốc an thần để giảm các triệu chứng khó chịu toàn thân"
    ],
    correct: 2
  },
  345: {
    options: [
      "Duy trì chất lượng cuộc sống, giảm gánh nặng đa thuốc và phòng tránh biến cố té ngã do thuốc",
      "Hạ huyết áp tâm thu xuống dưới 110 mmHg và HbA1c dưới 6.0% bằng mọi giá",
      "Đạt tất cả các chỉ số xét nghiệm sinh hóa lý tưởng giống như người trẻ tuổi",
      "Phối hợp tối đa các thuốc đặc trị để đảo ngược hoàn toàn quá trình thoái hóa cơ quan"
    ],
    correct: 0
  },
  375: {
    options: [
      "Cần tăng liều dùng từ 25 đến 50% trong thai kỳ và xét nghiệm lại TSH mỗi 4 - 6 tuần",
      "Giữ nguyên liều cố định suốt 9 tháng thai kỳ mà không cần xét nghiệm",
      "Phải giảm một nửa liều để không gây cường giáp thai nhi",
      "Ngừng thuốc ngay lập tức trong 3 tháng đầu thai kỳ để tránh độc cho thai"
    ],
    correct: 0
  },
  549: {
    options: [
      "Vì khởi phát tác dụng rất chậm sau 12 đến 24 giờ và nguy cơ ức chế hô hấp chết người",
      "Vì thuốc gây co thắt phế quản dữ dội và tụt huyết áp tức thì ngay sau khi dán",
      "Vì miếng dán kích thích giải phóng histamin ồ ạt qua da gây sốc phản vệ",
      "Vì hoạt chất bị enzym esterase tại biểu bì thủy phân hoàn toàn làm mất tác dụng"
    ],
    correct: 0
  },
  565: {
    options: [
      "Tự quyết định tăng nồng độ thuốc giảm đau trong ống tiêm điện khi đau nhiều",
      "Tự bấm nút để máy tiêm một liều nhỏ thuốc giảm đau tĩnh mạch đã cài đặt an toàn",
      "Tự bấm nút liên tục không giới hạn số lần mà không bị khóa thời gian (lockout time)",
      "Tự ngắt máy PCA để chuyển sang thuốc uống tương đương bất kỳ lúc nào"
    ],
    correct: 1
  },
  570: {
    options: [
      "Naloxon đối kháng tác dụng gây táo bón tại ruột và làm mất tác dụng phê nếu nghiền tiêm",
      "Naloxon làm tăng hấp thu Oxycodon qua niêm mạc ruột non",
      "Naloxon ngăn cản chuyển hóa Oxycodon qua enzym CYP3A4 tại gan",
      "Naloxon làm tăng tác dụng an thần và giãn cơ vân"
    ],
    correct: 0
  },
  573: {
    options: [
      "Nhiễm trùng máu do dung dịch thuốc tiêm bị nhiễm khuẩn",
      "Dị ứng typ I trung gian qua kháng thể IgE đặc hiệu với phân tử Morphin",
      "Morphin kích thích trực tiếp tế bào mast giải phóng Histamin không qua kháng thể IgE",
      "Kết tủa tinh thể Morphin sulfat trong vi mao mạch da ngoại vi"
    ],
    correct: 2
  },
  644: {
    options: [
      "Dùng duy nhất một loại thuốc chẹn beta giao cảm liều tối đa trong 1 năm",
      "Huyết áp không hạ sau 3 ngày dùng thuốc lợi tiểu Thiazid đơn độc",
      "Dùng 2 thuốc hạ áp liều tối đa nhưng không kèm theo thuốc chẹn kênh Calci",
      "Huyết áp chưa đạt mục tiêu dù đã phối hợp tối ưu 3 thuốc hạ áp khác nhóm (trong đó có một thuốc lợi tiểu)"
    ],
    correct: 3
  },
  658: {
    options: [
      "Dưới 5 gam muối ăn mỗi ngày (tương đương dưới 2 gam Natri)",
      "Dưới 10 gam muối ăn mỗi ngày (tương đương dưới 4 gam Natri)",
      "Dưới 1 gam muối ăn mỗi ngày (kiêng muối tuyệt đối không nêm gia vị)",
      "Dưới 15 gam muối ăn mỗi ngày theo chế độ ăn thông thường"
    ],
    correct: 0
  },
  662: {
    options: [
      "Chỉ kiểm tra khi bệnh nhân xuất hiện triệu chứng yếu cơ hoặc ngất xỉu",
      "Xét nghiệm định kỳ mỗi 6 đến 12 tháng nếu không có dấu hiệu bất thường",
      "Kiểm tra lại sau 1 đến 2 tuần bắt đầu điều trị hoặc sau mỗi lần chỉnh liều",
      "Kiểm tra ngay trong vòng 2 giờ đầu tiên sau khi uống liều thuốc khởi đầu"
    ],
    correct: 2
  },
  705: {
    options: [
      "Nghiền nát uống chung cùng lúc với kháng sinh và men vi sinh để tăng hấp phụ độc tố",
      "Uống cách xa các thuốc điều trị khác tối thiểu từ 1 đến 2 giờ",
      "Uống ngay trước bữa ăn cùng với các chế phẩm vitamin và viên sắt",
      "Uống cùng lúc với dung dịch bù nước Oresol sau mỗi lần đi ngoài"
    ],
    correct: 1
  },
  719: {
    options: [
      "Nhịn ăn hoàn toàn và chỉ truyền dịch Glucose 5% kéo dài 1 tuần",
      "Chỉ cho uống dung dịch nước đường glucose đậm đặc thay cho sữa",
      "Chuyển sang dùng tạm thời sữa công thức không chứa đường Lactose (Lactose-free)",
      "Cho uống sữa chua có bổ sung men lactase cùng với sữa đặc có đường"
    ],
    correct: 2
  },
  723: {
    options: [
      "Ngừng toàn bộ việc cho trẻ bú mẹ và chuyển sang truyền dịch duy trì",
      "Cho trẻ xuất viện về nhà ngay và không cần hướng dẫn dấu hiệu nguy hiểm",
      "Đánh giá lại tình trạng mất nước của trẻ để quyết định phác đồ tiếp theo (A, B hoặc C)",
      "Chuyển sang dùng ngay kháng sinh Ciprofloxacin và thuốc cầm tiêu chảy Loperamid"
    ],
    correct: 2
  },
  731: {
    options: [
      "Khởi phát tác dụng giãn phế quản rất nhanh trong vòng 1 đến 3 phút tương đương Salbutamol",
      "Có thời gian bán thải kéo dài trên 48 giờ nên chỉ cần hít 1 lần mỗi tuần",
      "Có tác dụng kháng viêm trực tiếp ức chế giải phóng Leukotriene tương đương Corticoid",
      "Không có thụ thể beta-2 trên tim nên hoàn toàn không gây tác dụng phụ hồi hộp"
    ],
    correct: 0
  },
  756: {
    options: [
      "Làm giãn trực tiếp cơ trơn phế quản thông qua ức chế thụ thể muscarinic M3",
      "Diệt trừ hoàn toàn vi khuẩn lao tiềm ẩn và phế cầu cư trú tại hầu họng",
      "Thay thế hoàn toàn liệu pháp oxy dài hạn tại nhà cho bệnh nhân suy hô hấp",
      "Tác dụng chống viêm, điều hòa miễn dịch và ức chế tạo màng biofilm giúp làm giảm tần suất các đợt cấp"
    ],
    correct: 3
  },
  759: {
    options: [
      "Vùng an toàn thể hiện đường thở thông thoáng hoàn toàn",
      "Vùng đỏ thể hiện cơn kịch phát hen nặng nguy hiểm cần cấp cứu y tế ngay",
      "Vùng vàng cảnh báo sớm cần tăng liều thuốc hít duy trì tại nhà",
      "Vùng xanh thể hiện kiểm soát hen rất tốt không cần dùng thuốc cắt cơn"
    ],
    correct: 1
  },
  775: {
    options: [
      "Tiêm bắp sâu ngắt quãng mỗi 6 giờ",
      "Truyền tĩnh mạch định kỳ một lần mỗi tháng",
      "Truyền tĩnh mạch một liều duy nhất mỗi năm một lần",
      "Truyền tĩnh mạch hàng ngày liên tục trong 1 tháng"
    ],
    correct: 2
  },
  777: {
    options: [
      "Tác dụng chủ vận giống Estrogen trên xương giúp tăng mật độ xương, nhưng đối kháng trên tuyến vú và nội mạc tử cung giúp không làm tăng ung thư vú",
      "Làm giảm nguy cơ huyết khối tĩnh mạch sâu và thuyên tắc phổi ở phụ nữ mãn kinh",
      "Cải thiện hoàn toàn các triệu chứng bốc hỏa và rối loạn vận mạch thời kỳ mãn kinh",
      "Kích thích tuyến yên tăng tiết FSH và LH làm hồi phục chu kỳ kinh nguyệt"
    ],
    correct: 0
  },
  783: {
    options: [
      "Trong vòng 7 ngày sau khi quan hệ tình dục không bảo vệ",
      "Chỉ có hiệu lực nếu uống trước khi quan hệ tình dục 1 giờ",
      "Trong vòng 72 giờ sau khi quan hệ tình dục không an toàn (uống càng sớm hiệu quả càng cao)",
      "Uống liên tục vào các ngày rụng trứng trong chu kỳ kinh nguyệt"
    ],
    correct: 2
  },
  784: {
    options: [
      "Chỉ dùng được sau khi đã xác định chậm kinh từ 1 đến 2 tuần",
      "Trong vòng 10 đến 14 ngày sau khi giao hợp",
      "Trong vòng 24 giờ đầu tiên và mất hiệu lực hoàn toàn sau ngày đầu",
      "Trong vòng 120 giờ (tương đương 5 ngày) sau khi quan hệ tình dục không bảo vệ"
    ],
    correct: 3
  },
  785: {
    options: [
      "Uống ngay viên thuốc đã quên ngay khi nhớ ra (dù phải uống 2 viên cùng 1 ngày) và tiếp tục uống các viên tiếp theo đúng giờ thường lệ",
      "Uống ngay thuốc tránh thai khẩn cấp Levonorgestrel trong vòng 1 giờ",
      "Tạm dừng vỉ thuốc 7 ngày rồi mới bắt đầu uống lại vỉ mới từ đầu",
      "Bỏ viên đã quên và uống tăng liều gấp đôi cho tất cả các viên còn lại trong vỉ"
    ],
    correct: 0
  },
  790: {
    options: [
      "Tạm ngừng Metformin trước khi chụp và chỉ dùng lại sau 48 giờ nếu chức năng thận ổn định",
      "Tăng gấp đôi liều Metformin trước khi tiêm thuốc cản quang để phòng tăng đường huyết",
      "Vẫn uống Metformin bình thường và chỉ cần uống nhiều nước sau chụp",
      "Đổi sang tiêm Insulin tĩnh mạch liên tục trong suốt 1 tuần lễ sau chụp"
    ],
    correct: 0
  },
  792: {
    options: [
      "Làm giảm nhịp tim xoang xuống dưới 50 lần/phút và ngừa rung nhĩ kịch phát",
      "Làm tăng mức lọc cầu thận eGFR lên gấp đôi so với mức nền ban đầu",
      "Làm giảm đề kháng insulin tại cơ vân và mô mỡ tương đương Pioglitazon",
      "Giảm tỷ lệ tử vong do tim mạch, giảm nhập viện vì suy tim và làm chậm tiến triển suy giảm chức năng thận ở bệnh nhân CKD"
    ],
    correct: 3
  },
  793: {
    options: [
      "Nhiễm nấm đường niệu dục (như nấm Candida âm đạo) và nhiễm trùng tiết niệu",
      "Gây loét thủng niêm mạc dạ dày tá tràng chảy máu",
      "Gây suy tủy xương dẫn đến thiếu máu bất sản",
      "Làm tăng men gan AST và ALT kịch phát dẫn đến vàng da tắc mật"
    ],
    correct: 0
  },
  800: {
    options: [
      "Không bị chuyển hóa qua gan nên an toàn tuyệt đối cho xơ gan mất bù",
      "Tác dụng hạ đường huyết nhanh và mạnh gấp 10 lần Glibenclamid",
      "Hoàn toàn không có nguy cơ gây dị ứng hay nổi mẩn da",
      "Thời gian tác dụng phù hợp hơn và tỷ lệ gây hạ đường huyết thấp hơn nhiều"
    ],
    correct: 3
  },
  807: {
    options: [
      "Bệnh nhân tăng huyết áp có đạm niệu vi thể",
      "Bệnh nhân có tiền sử hoặc đang mắc bệnh suy tim sung huyết (NYHA I - IV)",
      "Bệnh nhân hen phế quản nhẹ có kiểm soát",
      "Bệnh nhân đái tháo đường có bệnh võng mạc giai đoạn sớm"
    ],
    correct: 1
  },
  811: {
    options: [
      "Massage xoa bóp thật mạnh vị trí tiêm ngay sau khi rút kim",
      "Tiêm cố định một vị trí duy nhất trên thành bụng mỗi ngày để cơ thể thích nghi",
      "Luân chuyển đều đặn vị trí tiêm thuốc (giữa các vùng bụng, đùi, cánh tay) và thay kim tiêm mỗi lần tiêm",
      "Làm ấm lọ insulin trong nước sôi trước khi rút thuốc vào bơm tiêm"
    ],
    correct: 2
  },
  825: {
    options: [
      "Thiết kế nghiên cứu thử nghiệm lâm sàng ngẫu nhiên có đối chứng, mù đôi (RCT) với cỡ mẫu đủ lớn và phân tích theo ITT",
      "Nghiên cứu báo cáo loạt ca bệnh (Case series) tại một phòng khám chuyên khoa",
      "Kết quả nghiên cứu được bảo trợ độc quyền bởi công ty sản xuất biệt dược gốc",
      "Số lượng trích dẫn trên các diễn đàn trao đổi chuyên môn trực tuyến"
    ],
    correct: 0
  },
  847: {
    options: [
      "PubMed và Google Scholar (cơ sở dữ liệu thư mục cấp 2)",
      "Tạp chí The New England Journal of Medicine (nguồn cấp 1)",
      "UpToDate, Micromedex và DynaMed (nguồn thông tin cấp 3 tổng hợp chứng cứ)",
      "Dược điển Việt Nam V (tiêu chuẩn kiểm nghiệm chất lượng thuốc)"
    ],
    correct: 2
  },
  854: {
    options: [
      "Làm chậm giải phóng hoạt chất đều đặn trong suốt 24 giờ tại đại tràng",
      "Giúp hoạt chất hấp thu ngay lập tức tại niêm mạc miệng và tĩnh mạch dưới lưỡi",
      "Tăng độ tan của dược chất kém tan trong môi trường pH acid dạ dày",
      "Bảo vệ dược chất không bị phân hủy bởi acid dạ dày hoặc bảo vệ niêm mạc dạ dày khỏi kích ứng"
    ],
    correct: 3
  },
  927: {
    options: [
      "Chuyển sang nhóm thuốc chẹn thụ thể Angiotensin II (ARB) như Losartan hoặc Telmisartan",
      "Giảm một nửa liều Enalapril và phối hợp thêm kháng histamin H1 thế hệ 2",
      "Thay thế bằng Aliskiren kết hợp bổ sung kẽm đường uống để giảm nhạy cảm phản xạ ho",
      "Duy trì Enalapril và kê đơn phối hợp Dextromethorphan hoặc Codein kéo dài"
    ],
    correct: 0
  },
  962: {
    options: [
      "Chẩn đoán phân biệt hội chứng vành cấp không ST chênh lên với viêm màng ngoài tim",
      "Chẩn đoán xác định, loại trừ nguyên nhân khó thở do tim và phân loại độ nặng suy tim",
      "Đánh giá tổn thương tế bào nhu mô gan cấp tính trong viêm gan virus",
      "Phát hiện sớm nguy cơ xuất huyết não ở bệnh nhân dùng thuốc chống đông"
    ],
    correct: 1
  },
  989: {
    options: [
      "BSA phản ánh chính xác lượng mỡ thừa tích tụ dưới da ở trẻ béo phì",
      "BSA ít biến thiên theo lứa tuổi hơn so với cân nặng và chiều cao",
      "BSA tương quan chặt chẽ hơn với mức lọc cầu thận, cung lượng tim và chuyển hóa nội tạng của cơ thể",
      "Công thức tính BSA loại trừ hoàn toàn ảnh hưởng của tình trạng mất nước cấp"
    ],
    correct: 2
  },
  1019: {
    options: [
      "Huyết áp tâm thu từ 130 đến 139 mmHg nếu dung nạp tốt, không hạ huyết áp tâm thu xuống dưới 120 mmHg",
      "Huyết áp tâm thu dưới 110 mmHg để ngăn ngừa tối đa nguy cơ đột quỵ tái phát",
      "Huyết áp tâm thu từ 150 đến 160 mmHg để đảm bảo tưới máu não ở người xơ vữa mạch",
      "Chỉ điều trị khi huyết áp tâm trương vượt quá 100 mmHg mà không cần quan tâm huyết áp tâm thu"
    ],
    correct: 0
  },
  1022: {
    options: [
      "Chỉ dựa vào lượng nước tiểu 24 giờ mà không cần định lượng creatinin huyết thanh",
      "Lấy ngưỡng eGFR cố định 90 mL/phút/1.73m2 làm chuẩn cho mọi người cao tuổi",
      "Chỉ nhìn chỉ số creatinin máu thấy 0,8 mg/dL là kết luận chức năng lọc cầu thận hoàn toàn bình thường",
      "Tính toán CrCl bằng công thức Cockcroft-Gault hoặc eGFR để hiệu chỉnh liều, không chỉ dựa vào Creatinin máu đơn thuần"
    ],
    correct: 3
  },
  1046: {
    options: [
      "100 đến 200 mg sắt nguyên tố chia làm 3 lần uống cùng bữa ăn",
      "10 đến 15 mg sắt nguyên tố kết hợp vitamin C liều cao",
      "150 mg sắt nguyên tố phối hợp với Canxi carbonat 1000 mg",
      "30 đến 60 mg sắt nguyên tố kèm 400 mcg acid folic mỗi ngày"
    ],
    correct: 3
  },
  1063: {
    options: [
      "Thâm nhập rất tốt vào dịch lót biểu mô phế nang phổi và có dạng uống sinh khả dụng gần 100%",
      "Không bị đề kháng bởi bất kỳ chủng tụ cầu vàng hay Enterococcus nào",
      "Có phổ diệt khuẩn bao phủ cả trực khuẩn mủ xanh và trực khuẩn đường ruột sinh ESBL",
      "Có thời gian bán thải cực dài trên 72 giờ nên chỉ cần dùng liều duy nhất mỗi tuần"
    ],
    correct: 0
  },
  1091: {
    options: [
      "Làm tăng sinh khả dụng của Corticoid lên gấp 3 lần so với dùng hàng ngày",
      "Tránh được hoàn toàn nguy cơ loét dạ dày tá tràng và loãng xương",
      "Cho phép nồng độ Cortisol huyết tương hạ thấp trong ngày nghỉ, giúp trục HPA hồi phục và giảm nguy cơ suy vỏ thượng thận thứ phát",
      "Giúp kiểm soát triệu chứng viêm khớp dạng thấp cấp tính tốt hơn dùng hàng ngày"
    ],
    correct: 2
  },
  1140: {
    options: [
      "Hấp thu vào tuần hoàn chung cao gấp nhiều lần viên nén đường uống",
      "Không bao giờ gây bất kỳ tác dụng phụ nào trên da như ngứa hay ban đỏ",
      "Có tác dụng giảm đau toàn thân cho các cơn đau nội tạng sâu trong ổ bụng",
      "Đạt nồng độ trị liệu cao trong mô khớp và màng hoạt dịch dưới vị trí bôi, trong khi nồng độ toàn thân rất thấp giúp giảm tác dụng phụ tiêu hóa và tim mạch"
    ],
    correct: 3
  },
  1144: {
    options: [
      "Phải truyền đồng thời dung dịch Natri bicarbonat 1.4% để kiềm hóa máu",
      "Tiêm tĩnh mạch Thiamin (Vitamin B1) trước hoặc đồng thời với truyền dung dịch Glucose ưu trương",
      "Chỉ truyền Glucose 5% đẳng trương tốc độ chậm để tránh phù não thẩm thấu",
      "Bắt buộc tiêm Glucagon dưới da trước khi được phép thiết lập đường truyền tĩnh mạch"
    ],
    correct: 1
  }
};

for (const [idStr, data] of Object.entries(distractorUpgrades)) {
  const qId = parseInt(idStr, 10);
  const target = bank.find(q => q.id === qId);
  if (target) {
    target.options = data.options;
    target.correct = data.correct;
    console.log(`Applied clinical upgrade to Q[ID ${qId}].`);
  }
}

// 5. Append University Questions with sequential IDs
let currentMaxId = Math.max(...bank.map(q => q.id));
console.log(`Current max question ID: ${currentMaxId}`);

const universitySets = [
  ...HUP_QUESTIONS,
  ...UMP_QUESTIONS,
  ...HMU_QUESTIONS
];

universitySets.forEach((q, idx) => {
  currentMaxId++;
  bank.push({
    id: currentMaxId,
    chapter: q.chapter,
    source: q.source,
    sourceName: q.sourceName,
    question: q.question,
    options: q.options,
    correct: q.correct,
    explanation: q.explanation
  });
});

console.log(`Total questions in combined bank: ${bank.length}`);

// 5.1 Remove all parenthetical hints and giveaways across all options in the entire bank
const mathFormulaIds = new Set([865, 990, 1228, 1244]);
let totalParensStripped = 0;
bank.forEach(q => {
  if (mathFormulaIds.has(q.id)) return;
  if (q.id === 1257) {
    q.options = [
      "Trẻ sơ sinh từ 28 ngày tuổi trở xuống",
      "Bệnh nhân cao tuổi trên 80 tuổi",
      "Người bệnh suy giáp đang điều trị bằng Levothyroxin",
      "Phụ nữ đang trong thời kỳ cho con bú sau 6 tháng đầu"
    ];
    q.correct = 0;
    return;
  }
  if (q.id === 1296) {
    q.options = [
      "5 ngày",
      "Tối thiểu 14 đến 21 ngày",
      "Duy trì liên tục từ 1 đến 2 tháng",
      "Chỉ dùng đúng 1 liều duy nhất trong vòng 1 giờ đầu nhập viện"
    ];
    q.correct = 0;
    return;
  }

  q.options = q.options.map(opt => {
    let s = opt.replace(/Hội chứng灰/g, 'Hội chứng xám');
    if (/\([^\)]+\)/.test(s)) {
      totalParensStripped++;
    }
    s = s.replace(/\s*\([^\)]+\)/g, '');
    s = s.replace(/\s{2,}/g, ' ').replace(/[\s,-]+$/, '').trim();
    return s;
  });
});
console.log(`Stripped parenthetical hints from ${totalParensStripped} option instances.`);

// 6. Balance correct answer positions across the entire bank
// Shuffle options deterministically
function shuffleQuestionOptions(q, targetPos) {
  const correctText = q.options[q.correct];
  const distractors = q.options.filter((_, idx) => idx !== q.correct);
  
  const newOptions = [];
  let distractorIdx = 0;
  for (let i = 0; i < 4; i++) {
    if (i === targetPos) {
      newOptions.push(correctText);
    } else {
      newOptions.push(distractors[distractorIdx++]);
    }
  }
  q.options = newOptions;
  q.correct = targetPos;
}

// Rebalance so that every 4 questions cycles through 0, 1, 2, 3
bank.forEach((q, idx) => {
  const targetPos = idx % 4;
  shuffleQuestionOptions(q, targetPos);
});

// 7. Verify distributions
const counts = [0, 0, 0, 0];
const sourceCounts = {};
bank.forEach(q => {
  counts[q.correct]++;
  sourceCounts[q.source] = (sourceCounts[q.source] || 0) + 1;
});
console.log(`Answer distribution: A=${counts[0]} (${(counts[0]/bank.length*100).toFixed(1)}%), B=${counts[1]} (${(counts[1]/bank.length*100).toFixed(1)}%), C=${counts[2]} (${(counts[2]/bank.length*100).toFixed(1)}%), D=${counts[3]} (${(counts[3]/bank.length*100).toFixed(1)}%)`);
console.log(`Source breakdown:`, sourceCounts);

// 8. Output to questions_800.js
const outputCode = `// Ngân hàng câu hỏi trắc nghiệm Dược Lâm Sàng toàn diện
// Tổng hợp chuẩn Bộ Y tế & Đề thi Dược Lâm Sàng các trường ĐH Y Dược hàng đầu (HUP, UMP, HMU)
// Đã qua chuẩn hóa phân bố đáp án, loại bỏ hoàn toàn cụm từ mồi dễ đoán, chuẩn hóa chất lượng đáp án nhiễu

const ALL_EXAM_BANK = ${JSON.stringify(bank, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ALL_EXAM_BANK;
}
`;

fs.writeFileSync('questions_800.js', outputCode, 'utf8');
console.log(`Successfully written ${bank.length} questions to questions_800.js!`);
