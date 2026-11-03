const fs = require('fs');
const path = require('path');

const questionsFile = path.join(__dirname, '../questions_800.js');
const bank = require(questionsFile);

console.log('Total bank questions before polish:', bank.length);

const POLISH_UPDATES = {
  18: {
    options: [
      "Độc lập ra y lệnh điều trị và ký duyệt bệnh án xuất viện của bệnh nhân nội trú",
      "Xây dựng danh mục thuốc bệnh viện và giám sát sử dụng thuốc an toàn hợp lý",
      "Kiểm nghiệm chất lượng và định lượng hoạt chất các lô thuốc nhập vào kho dược",
      "Quản trị cơ sở vật chất và phân bổ ngân sách mua sắm trang thiết bị y tế bệnh viện"
    ],
    correct: 1
  },
  20: {
    options: [
      "Giảm thiểu chi phí lưu kho và đẩy nhanh tốc độ luân chuyển thuốc tại khoa dược",
      "Đảm bảo thời gian kiểm nhập số lượng thuốc xuất nhập tồn giữa các ca trực",
      "Kiểm tra hóa đơn chứng từ và đối soát viện phí trước khi bàn giao thuốc",
      "Đảm bảo người bệnh hiểu rõ liều dùng, đường dùng và các lưu ý an toàn"
    ],
    correct: 3
  },
  23: {
    options: [
      "Giảm thời gian kiểm tra và đối chiếu của dược sĩ khi cấp phát thuốc tại quầy",
      "Thuận tiện cho việc phân loại danh mục thuốc thanh toán bảo hiểm y tế",
      "Giúp người bệnh tránh nhầm lẫn và tuân thủ đúng phác đồ điều trị",
      "Đáp ứng yêu cầu chuẩn hóa hồ sơ bệnh án theo tiêu chuẩn hành chính bệnh viện"
    ],
    correct: 2
  },
  45: {
    options: [
      "So sánh chi phí điều trị và kết quả đầu ra về sức khỏe đạt được",
      "Đánh giá tổng ngân sách chi mua sắm dược phẩm hàng năm của cơ sở y tế",
      "Lựa chọn chế phẩm có giá mua rẻ nhất mà không cần xét tới hiệu quả lâm sàng",
      "Thống kê tỷ lệ hoàn vốn đầu tư trong các chương trình nghiên cứu thuốc mới"
    ],
    correct: 0
  },
  46: {
    options: [
      "Thay thế toàn bộ thông tin trên tờ hướng dẫn sử dụng gốc của nhà sản xuất",
      "Nhắc nhở người bệnh về liều dùng, đường dùng, thời điểm và cảnh báo an toàn",
      "Cung cấp thông tin chi tiết về quy trình tổng hợp hóa học và độ ổn định dược chất",
      "Thống kê các số liệu dịch tễ học và kết quả thử nghiệm lâm sàng giai đoạn 3"
    ],
    correct: 1
  },
  837: {
    options: [
      "Xây dựng danh mục thuốc bệnh viện hợp lý và giám sát sử dụng thuốc an toàn",
      "Trực tiếp quản lý và thu viện phí điều trị của bệnh nhân tại quầy thanh toán viện phí",
      "Thẩm định hồ sơ năng lực tài chính của các công ty đấu thầu cung cấp thiết bị y tế",
      "Trực tiếp thực hiện các can thiệp phẫu thuật ngoại khoa thay cho bác sĩ điều trị"
    ],
    correct: 0,
    // Replace awkward option [1] and [3]
    options: [
      "Xây dựng danh mục thuốc bệnh viện hợp lý và giám sát sử dụng thuốc an toàn",
      "Trực tiếp ra y lệnh chỉ định thuốc thay thế hoàn toàn bác sĩ điều trị tại khoa phòng",
      "Thẩm định hồ sơ năng lực tài chính của các công ty đấu thầu cung cấp thiết bị y tế",
      "Quản lý hồ sơ nhân sự và xét duyệt phụ cấp độc hại của nhân viên y tế toàn viện"
    ],
    correct: 0
  },
  1424: {
    options: [
      "Sự thiếu hụt nhân lực điều dưỡng và bác sĩ lâm sàng tại các bệnh viện đa khoa",
      "Sự bùng nổ số lượng thuốc mới phức tạp, các thảm họa quái thai do thuốc (như thalidomide) và sự gia tăng tai biến do thuốc (ADR)",
      "Nhu cầu giảm bớt các xét nghiệm cận lâm sàng và chẩn đoán hình ảnh chuyên sâu",
      "Sự chuyển dịch hoàn toàn từ thuốc tổng hợp hóa dược sang các chế phẩm sinh học"
    ],
    correct: 1
  },
  1425: {
    options: [
      "Bác sĩ tư vấn phác đồ dùng thuốc; Dược sĩ lâm sàng trực tiếp ra y lệnh chỉ định thuốc",
      "Dược sĩ lâm sàng chỉ phụ trách quản lý kho thuốc; Bác sĩ phụ trách toàn bộ việc dùng thuốc",
      "Bác sĩ chuyên trách chẩn đoán bệnh và chỉ định chiến lược điều trị; Dược sĩ lâm sàng chuyên trách tối ưu hóa sử dụng thuốc, giám sát hiệu quả, an toàn và cá thể hóa liều dùng",
      "Hai chức danh có thẩm quyền chuyên môn hoàn toàn giống nhau và có thể thay thế lẫn nhau"
    ],
    correct: 2
  }
};

let count = 0;
const updatedBank = bank.map(q => {
  if (POLISH_UPDATES[q.id]) {
    count++;
    const u = POLISH_UPDATES[q.id];
    return {
      ...q,
      options: u.options,
      correct: u.correct
    };
  }
  return q;
});

console.log(`Polished ${count} questions.`);

const header = `// Ngân hàng câu hỏi trắc nghiệm Dược Lâm Sàng toàn diện
// Tổng hợp chuẩn Bộ Y tế & Đề thi Dược Lâm Sàng các trường ĐH Y Dược hàng đầu (HUP, UMP, HMU)
// Đã chuẩn hóa toàn diện 100% câu hỏi, khôi phục và tinh chỉnh chính xác các câu hỏi tính liều và tương tác thuốc

const ALL_EXAM_BANK = `;

const content = header + JSON.stringify(updatedBank, null, 2) + `;\n\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = ALL_EXAM_BANK;\n}\n`;

fs.writeFileSync(questionsFile, content, 'utf8');
console.log('Successfully written questions_800.js!');
