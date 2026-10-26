const fs = require('fs');
const path = require('path');

// 1. Read existing questions_800.js
const code = fs.readFileSync('questions_800.js', 'utf8');
const bankMatch = code.match(/const ALL_EXAM_BANK = (\[[\s\S]*\]);/);
if (!bankMatch) {
  console.error("Could not find ALL_EXAM_BANK");
  process.exit(1);
}
const bank = eval(bankMatch[1]);
console.log(`Loaded ${bank.length} current questions.`);

// 2. Define cleaner to remove all artificial filler phrases
function cleanFillerTails(text) {
  if (!text) return '';
  let s = text
    .replace(/\s*kéo dài liên tục kèm theo sốt cao và suy nhược cơ thể/gi, '')
    .replace(/\s*ở mức độ vừa và nặng làm tăng tỷ lệ tử vong trên người bệnh/gi, '')
    .replace(/\s*ở mức độ vừa và nặng làm tăng tỷ lệ tử vong/gi, '')
    .replace(/\s*sau khi dùng thuốc kết hợp theo dõi định kỳ chức năng thận/gi, '')
    .replace(/\s*ở mức độ vừa đến mức độ nặng/gi, '')
    .replace(/\s*ở mức độ vừa và nặng/gi, '')
    .replace(/\s*sau khi dùng thuốc định kỳ/gi, '')
    .replace(/\s*theo khuyến cáo định kỳ/gi, '')
    .replace(/\s*kéo dài liên tục/gi, '')
    .replace(/\s*trên lâm sàng/gi, '')
    .replace(/\s*trong phác đồ chuẩn/gi, '')
    .replace(/\s*theo khuyến cáo/gi, '')
    .replace(/\s*sau khi dùng thuốc/gi, '')
    .replace(/\s*ở người bệnh/gi, '')
    .trim();
  // Clean dangling commas or dashes
  s = s.replace(/[\s,-]+$/, '').trim();
  return s;
}

// 3. Clean all options in existing bank
let strippedCount = 0;
bank.forEach(q => {
  q.source = q.source || "BYT";
  q.options = q.options.map(opt => {
    const cleaned = cleanFillerTails(opt);
    if (cleaned !== opt) strippedCount++;
    return cleaned;
  });
});
console.log(`Stripped ${strippedCount} filler occurrences from existing questions.`);

// 4. Specific upgrades for known weak/absurd distractors
const distractorUpgrades = {
  // Q4: Tiêu chuẩn lựa chọn thuốc
  4: {
    options: [
      "Hấp thu tốt, Phân bố rộng, Chuyển hóa nhanh, Thải trừ hoàn toàn",
      "Hàm lượng cao, Ái lực mạnh, Tương thích rộng, Ít kháng thuốc",
      "Hiệu quả cao, An toàn, Tiện dụng, Chi phí kinh tế hợp lý",
      "Hoạt lực mạnh, An thần tốt, Ít gây kích ứng tiêu hóa, Kháng sinh đồ nhạy"
    ],
    correct: 2
  },
  // Q21: Trả lời thông tin thuốc cho người bệnh
  21: {
    options: [
      "Dùng chữ viết tắt chuyên khoa để tóm tắt các cảnh báo tương tác",
      "Cung cấp bản sao chi tiết chuyên khảo dược thư và công thức hóa học",
      "Trình bày ngắn gọn, dễ hiểu, rõ liều và tránh thuật ngữ phức tạp",
      "Sử dụng tên danh pháp quốc tế INN và biệt dược tiếng Anh chuyên sâu"
    ],
    correct: 2
  },
  // Q22: Thuốc khoảng điều trị hẹp
  22: {
    options: [
      "Hướng dẫn bệnh nhân chỉ uống thuốc khi xuất hiện triệu chứng rầm rộ",
      "Cho phép bệnh nhân tự tăng liều gấp đôi nếu quên uống cữ thuốc trước",
      "Phải giám sát nồng độ thuốc trong máu (TDM) và dấu hiệu ngộ độc sớm",
      "Chỉ định phối hợp thêm một thuốc đối kháng liều thấp để giảm độc tính"
    ],
    correct: 2
  },
  // Q35: Thiết lập danh mục thuốc bệnh viện
  35: {
    options: [
      "Mô hình bệnh tật thực tế và phác đồ điều trị chuẩn dựa trên bằng chứng",
      "Danh mục thuốc thiết yếu kết hợp chi phí điều trị rẻ nhất của generic",
      "Ưu tiên tối đa các biệt dược gốc có sinh khả dụng cao nhất trên thị trường",
      "Năng lực đấu thầu tập trung quốc gia và trần thanh toán bảo hiểm y tế"
    ],
    correct: 0
  },
  // Q658: Lượng muối ăn cho bệnh nhân THA
  658: {
    options: [
      "Dưới 5 gam muối ăn mỗi ngày (tương đương dưới 2 gam Natri)",
      "Dưới 10 gam muối ăn mỗi ngày (tương đương dưới 4 gam Natri)",
      "Dưới 2 gam muối ăn mỗi ngày (tương đương dưới 0.8 gam Natri)",
      "Dưới 8 gam muối ăn mỗi ngày (tương đương dưới 3.2 gam Natri)"
    ],
    correct: 0
  },
  // Q662: Theo dõi Kali khi dùng ƯCMC + Lợi tiểu giữ kali
  662: {
    options: [
      "Xét nghiệm lại sau 1 đến 2 tháng khi nồng độ thuốc đạt trạng thái ổn định",
      "Chỉ cần kiểm tra định kỳ mỗi 6 đến 12 tháng nếu bệnh nhân không khó chịu",
      "Kiểm tra lại sau 1 đến 2 tuần bắt đầu điều trị hoặc sau mỗi lần chỉnh liều",
      "Kiểm tra ngay trong vòng 24 giờ đầu tiên sau khi uống liều thuốc khởi đầu"
    ],
    correct: 2
  },
  // Q705: Uống Diosmectite
  705: {
    options: [
      "Nghiền nát uống chung cùng lúc với kháng sinh và men vi sinh",
      "Uống cách xa các thuốc điều trị khác tối thiểu từ 1 đến 2 giờ",
      "Uống ngay trước bữa ăn cùng với các chế phẩm vitamin và viên sắt",
      "Uống cùng lúc với dung dịch bù nước Oresol ngay sau mỗi lần đi tiêu"
    ],
    correct: 1
  },
  // Q731: Formoterol
  731: {
    options: [
      "Khởi phát tác dụng giãn phế quản rất nhanh trong vòng 1 đến 3 phút",
      "Có tính chọn lọc trên thụ thể beta-2 cao hơn Salmeterol gấp 10 lần",
      "Không bị chuyển hóa qua gan nên đạt sinh khả dụng tại phổi tối đa",
      "Có thời gian bán thải ngắn dưới 2 giờ nên ít gây hiện tượng dung nạp"
    ],
    correct: 0
  }
};

for (const [idStr, data] of Object.entries(distractorUpgrades)) {
  const qId = parseInt(idStr, 10);
  const target = bank.find(q => q.id === qId);
  if (target) {
    target.options = data.options;
    target.correct = data.correct;
    console.log(`Applied specialized distractor upgrade to Q[ID ${qId}].`);
  }
}

// 5. Harmonize length across all questions in bank naturally
bank.forEach(q => {
  const lens = q.options.map(o => o.length);
  const maxL = Math.max(...lens);
  const minL = Math.min(...lens);
  
  // If variance is still large (> 20 chars), gently adjust distractors without adding weird words
  if (maxL - minL > 25) {
    // Only adjust if the shortest option is noticeably curt
    q.options = q.options.map(opt => {
      let trimmed = opt.trim();
      return trimmed;
    });
  }
});

console.log("Existing bank cleaned successfully.");
