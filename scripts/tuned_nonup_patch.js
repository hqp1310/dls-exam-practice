// scripts/tuned_nonup_patch.js
// Clinically authentic tuning for 20 questions in the non-updated group where cL was longest
// Expands distractors with precise clinical terminology so cL becomes shortest or middle

module.exports = {
  1371: {
    options: [
      'N-acetylcystein truyền tĩnh mạch',
      'Deferoxamin tiêm bắp ngắt quãng',
      'Xanh Methylen tiêm tĩnh mạch',
      'Flumazenil tiêm tĩnh mạch chậm'
    ],
    correct: 2
  },
  1303: {
    options: [
      'Rối loạn tri giác, Sốt cao > 39°C, Tần số tim > 120 l/p, Tụt huyết áp, Tuổi ≥ 65',
      'Hôn mê sâu, Đường huyết > 11 mmol/L, Suy thận cấp, Huyết áp tụt, Tuổi ≥ 65',
      'Rối loạn ý thức, Ure máu > 7 mmol/L, Tần số thở ≥ 30 lần/phút, Huyết áp, Tuổi ≥ 65',
      'Khó thở nhiều, Creatinin máu > 150 mcmol/L, Suy tim sung huyết, SpO2 < 90%, Tuổi ≥ 65'
    ],
    correct: 2
  },
  255: {
    options: [
      'Hiện tượng cô đặc máu và giảm thể tích tuần hoàn cấp tính',
      'Tình trạng tăng sinh hồng cầu thứ phát',
      'Tình trạng viêm nhiễm hoặc tăng protein pha cấp',
      'Tình trạng thiếu máu do suy tủy xương'
    ],
    correct: 2
  },
  288: {
    options: [
      'Viên nén giải phóng biến đổi bao tan trong ruột',
      'Viên ngậm dưới lưỡi có vị đắng',
      'Viên nang cứng kích thước lớn',
      'Dạng dung dịch siro hoặc hỗn dịch uống'
    ],
    correct: 3
  },
  321: {
    options: [
      'Dùng đồng thời từ 5 loại thuốc trở lên mỗi ngày',
      'Dùng nhiều hơn 1 loại thuốc kê đơn trong một ngày',
      'Kê đơn duy nhất một loại thuốc liên tục nhiều năm',
      'Dùng từ 2 loại vitamin khoáng chất trở lên mỗi ngày'
    ],
    correct: 0
  },
  435: {
    options: [
      'Erythromycin đường uống',
      'Ciprofloxacin tiêm truyền tĩnh mạch',
      'Cotrimoxazol liều cao',
      'Ceftriaxon tiêm bắp sâu'
    ],
    correct: 2
  },
  487: {
    options: [
      'Thuốc bảo vệ niêm mạc dạ dày Sucralfat dạng hỗn dịch',
      'Thuốc ức chế bơm proton Omeprazol đường uống hàng ngày',
      'Thuốc chống viêm giảm đau không steroid NSAID',
      'Dung dịch kháng acid dạ dày chứa nhôm hydroxide'
    ],
    correct: 2
  },
  520: {
    options: [
      'Chỉ dùng một liều duy nhất trước khi chọc dò dịch não tủy',
      'Kéo dài tối thiểu 1 tháng điều trị duy trì',
      'Kéo dài 14 ngày ngắt quãng theo dõi đáp ứng',
      'Kéo dài trong vòng 4 ngày liên tục'
    ],
    correct: 3
  },
  828: {
    options: [
      'Khoảng thời gian 90 ngày sau khi thuốc hết hạn sử dụng theo lô sản xuất',
      'Liều lượng thuốc cần giảm 90% khi bệnh nhân suy giảm chức năng thận',
      'Tỷ lệ 90% số bệnh nhân bị phản ứng có hại của thuốc trong bệnh viện',
      'Danh mục các loại thuốc chiếm 90% tổng lượng tiêu thụ hoặc chi phí'
    ],
    correct: 3
  },
  12: {
    options: [
      'Hệ thống cơ sở dữ liệu thư mục tóm tắt y văn',
      'Sách giáo khoa dược lý lâm sàng kinh điển',
      'Dược thư Quốc gia Việt Nam bản cập nhật',
      'Bài báo công trình nghiên cứu gốc'
    ],
    correct: 3
  },
  15: {
    options: [
      'Đánh giá chất lượng và độ tin cậy của tài liệu',
      'Tìm kiếm thông tin trên các cơ sở dữ liệu y học',
      'Xác định đặc điểm của người yêu cầu',
      'Trả lời trực tiếp câu hỏi cho người bệnh'
    ],
    correct: 2
  },
  201: {
    options: [
      'Da và niêm mạc với mày đay, mẩn ngứa, đỏ da',
      'Đau quặn bụng dữ dội kèm theo nôn ói và tiêu chảy ra máu',
      'Hôn mê sâu ngừng thở và trụy tim mạch ngừng tuần hoàn',
      'Gãy xương sườn tự phát do các cơn co giật toàn thân'
    ],
    correct: 0
  },
  215: {
    options: [
      'Phân bố chủ yếu với nồng độ cao ở cơ tim và cơ vân',
      'Chỉ xuất hiện khi có tình trạng tắc mật ngoài gan cấp',
      'Đặc hiệu cho tổn thương tế bào gan hơn men AST',
      'Đặc hiệu cho hệ thống biểu mô lót đường dẫn mật'
    ],
    correct: 2
  },
  244: {
    options: [
      'Nhiễm khuẩn cấp tính do trực khuẩn mủ xanh gây ra',
      'Nhồi máu não giai đoạn cấp có tổn thương nhu mô',
      'Viêm ruột thừa cấp tính có biến chứng hoại tử mủ',
      'Nhiễm ký sinh trùng hoặc bệnh lý dị ứng'
    ],
    correct: 3
  },
  553: {
    options: [
      'Chuyển hóa thành Morphin với tỷ lệ khoảng 10%',
      'Chuyển hóa hoàn toàn thành phân tử Paracetamol có hoạt tính',
      'Chuyển hóa trực tiếp thành dẫn xuất Fentanyl ở nồng độ cao',
      'Chuyển hóa thành Acid salicylic tự do gây kích ứng dạ dày'
    ],
    correct: 0
  },
  765: {
    options: [
      'Loãng xương và đục thủy tinh thể mắt',
      'Gãy xương sườn tự phát do các cơn ho kéo dài',
      'Suy tủy xương bất sản nặng dòng tế bào bạch cầu',
      'Ung thư biểu mô đường mật trong và ngoài gan'
    ],
    correct: 0
  },
  1318: {
    options: [
      'Thải trừ 100% nguyên vẹn không đổi qua quá trình lọc cầu thận',
      'Đào thải kép cân bằng qua cả thận và qua đường mật/phân',
      'Chuyển hóa 100% tại biểu mô phổi thành các acid amin tự do',
      'Chỉ bài xuất duy nhất qua tuyến mồ hôi và dịch nước bọt'
    ],
    correct: 1
  },
  126: {
    options: [
      'Gây tăng nồng độ ion kali trong huyết tương dẫn đến ngừng tim',
      'Tăng nguy cơ ngộ độc Digoxin gây loạn nhịp tim',
      'Làm giảm tác dụng trợ tim của Digoxin trên cơ tim suy giảm',
      'Làm tăng bài xuất Digoxin qua lọc cầu thận ra ngoài nước tiểu'
    ],
    correct: 1
  },
  210: {
    options: [
      'Nhiễm khuẩn bệnh viện cơ hội xuất hiện trong đợt điều trị',
      'Vi khuẩn xoắn khuẩn tan rã ồ ạt giải phóng độc tố',
      'Dị ứng qua trung gian kháng thể IgE với phân tử Penicillin',
      'Quá liều Penicillin gây co giật và ức chế vỏ não người bệnh'
    ],
    correct: 1
  },
  266: {
    options: [
      'Sulfamid gây tắc hoàn toàn ống dẫn mật chủ và túi mật',
      'Sulfamid đẩy Bilirubin tự do ra khỏi Albumin huyết tương',
      'Sulfamid kích thích tăng sinh tổng hợp Bilirubin tại lách',
      'Sulfamid phá hủy trực tiếp màng tế bào hồng cầu sơ sinh'
    ],
    correct: 1
  }
};
