const fs = require('fs');
const path = require('path');

const questionsFile = path.join(__dirname, '..', 'questions_800.js');
let currentBank = require(questionsFile);

console.log('Current bank size before Part 2:', currentBank.length);

// Fix IDs of any existing questions that lack an ID
let maxId = 0;
currentBank.forEach(q => {
  if (q.id && typeof q.id === 'number' && q.id > maxId) {
    maxId = q.id;
  }
});

console.log('Highest existing numeric ID:', maxId);

currentBank.forEach((q, idx) => {
  if (!q.id) {
    maxId++;
    q.id = maxId;
  }
});

console.log('Assigned IDs up to:', maxId);

// 35 Additional Authentic Clinical Case Questions mirroring Dls.pdf & Sách Dược Lâm Sàng Bộ Y tế
const part2Questions = [
  // ==========================================
  // DƯỢC ĐỘNG HỌC LÂM SÀNG & TÍNH TOÁN HIỆU CHỈNH LIỀU
  // ==========================================
  {
    chapter: "Dược động học lâm sàng & Hiệu chỉnh liều",
    level: "Vận dụng cao",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Một bệnh nhân nữ 72 tuổi, cân nặng 50 kg, cao 155 cm, nhập viện do viêm phổi mắc phải tại cộng đồng mức độ vừa. Xét nghiệm huyết thanh có Creatinin là 132 µmol/L (tương đương 1,5 mg/dL). Độ thanh thải creatinin (ClCr) tính theo công thức Cockcroft-Gault của bệnh nhân này gần với giá trị nào sau đây nhất?",
    options: [
      "Khoảng 27 - 28 mL/phút",
      "Khoảng 42 - 44 mL/phút",
      "Khoảng 55 - 58 mL/phút",
      "Khoảng 18 - 20 mL/phút"
    ],
    correct: 0,
    explanation: "Áp dụng công thức Cockcroft-Gault cho nữ: ClCr = {[(140 - Tuổi) x Cân nặng] / (0,814 x Creatinin µmol/L)} x 0,85 = {[(140 - 72) x 50] / (0,814 x 132)} x 0,85 = [3400 / 107,45] x 0,85 = 31,64 x 0,85 ≈ 26,9 - 27 mL/phút (hoặc tính theo mg/dL: [(140-72)x50]/(72x1,5) x 0,85 = 31,48 x 0,85 ≈ 26,8 mL/phút). Bệnh nhân suy thận mức độ vừa.",
    reference: "Dls.pdf Trang 2 (Câu tính ClCr Cockcroft-Gault) & SGK DLS tr. 42"
  },
  {
    chapter: "Dược động học lâm sàng & Hiệu chỉnh liều",
    level: "Vận dụng cao",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Bệnh nhân nam 65 tuổi, cân nặng 60 kg, nhiễm khuẩn nặng trực khuẩn mủ xanh Pseudomonas aeruginosa được chỉ định kháng sinh Ceftazidim. Bệnh nhân có suy giảm chức năng thận với ClCr đo được là 25 mL/phút. Căn cứ theo bảng hiệu chỉnh liều Ceftazidim theo chức năng thận trong Giáo trình Dược lâm sàng (Bảng 2.6 tr. 44), chế độ liều Ceftazidim tiêm tĩnh mạch phù hợp nhất cho bệnh nhân là:",
    options: [
      "1 g mỗi 24 giờ (hoặc 500 mg mỗi 12 giờ)",
      "2 g mỗi 8 giờ tiêm tĩnh mạch",
      "1 g mỗi 8 giờ tiêm tĩnh mạch",
      "500 mg mỗi 48 giờ tiêm tĩnh mạch"
    ],
    correct: 0,
    explanation: "Theo Bảng 2.6 Giáo trình Dược lâm sàng (trang 44): Liều chuẩn Ceftazidim cho người bình thường là 1 - 2g mỗi 8 giờ. Khi ClCr ở mức 16 - 30 mL/phút, liều khuyến cáo hiệu chỉnh là 1 g mỗi 24 giờ (hoặc 500 mg mỗi 12 giờ). Khi ClCr từ 31 - 50 mL/phút dùng 1 g mỗi 12 giờ. Khi ClCr < 15 mL/phút dùng 500 mg mỗi 24-48 giờ.",
    reference: "Dls.pdf Trang 2 & SGK Dược Lâm Sàng Bảng 2.6 tr. 44"
  },
  {
    chapter: "Dược động học lâm sàng & Hiệu chỉnh liều",
    level: "Vận dụng cao",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Một thuốc kháng sinh có thời gian bán thải t1/2 = 6 giờ được truyền tĩnh mạch liên tục với tốc độ không đổi R. Dược sĩ lâm sàng tư vấn cho bác sĩ biết: Sau khoảng thời gian truyền là bao lâu thì nồng độ thuốc trong huyết tương bệnh nhân đạt tới trạng thái cân bằng (Css > 95% nồng độ ổn định)?",
    options: [
      "Sau khoảng 24 đến 30 giờ (tương đương 4 đến 5 lần t1/2)",
      "Sau khoảng 6 giờ (tương đương 1 lần t1/2)",
      "Sau khoảng 12 giờ (tương đương 2 lần t1/2)",
      "Sau khoảng 48 đến 60 giờ (tương đương 8 đến 10 lần t1/2)"
    ],
    correct: 0,
    explanation: "Theo nguyên lý dược động học cơ bản (Giáo trình Dược lâm sàng tr. 25-27): Khi dùng thuốc liên tục hoặc dùng liều lặp lại theo khoảng cách cố định, nồng độ thuốc trong máu đạt trạng thái ổn định (cân bằng) sau 4 - 5 lần thời gian bán thải (t1/2). Với t1/2 = 6 giờ, thời gian cần thiết là 6 x 4 = 24 giờ đến 6 x 5 = 30 giờ.",
    reference: "Dls.pdf Trang 2 & SGK Dược Lâm Sàng tr. 26"
  },
  {
    chapter: "Dược động học lâm sàng & Hiệu chỉnh liều",
    level: "Vận dụng",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Thông số dược động học Thể tích phân bố (Vd) của một thuốc có ý nghĩa lâm sàng quan trọng nhất trong việc:",
    options: [
      "Tính toán liều nạp ban đầu (Loading Dose - D_L) để nhanh chóng đạt nồng độ điều trị mong muốn trong huyết tương",
      "Xác định thời gian đào thải hoàn toàn thuốc ra khỏi cơ thể bệnh nhân",
      "Xác định sinh khả dụng tuyệt đối đường uống của dạng bào chế",
      "Đánh giá mức độ độc tính trực tiếp của thuốc lên tế bào gan"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng: Thể tích phân bố Vd phản ánh mức độ phân bố của thuốc vào các mô trong cơ thể so với huyết tương. Vd được sử dụng trực tiếp để tính liều nạp: D_L = Vd x C_target / F. Thông số t1/2 dùng để tính khoảng cách đưa liều, còn Cl dùng để tính liều duy trì.",
    reference: "Dls.pdf Trang 2 & SGK Dược Lâm Sàng tr. 24"
  },

  // ==========================================
  // XÉT NGHIỆM LÂM SÀNG & NHẬN ĐỊNH KẾT QUẢ
  // ==========================================
  {
    chapter: "Xét nghiệm lâm sàng & Nhận định KQ",
    level: "Vận dụng",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Bệnh nhân nam 45 tuổi đến viện khám định kỳ, xét nghiệm máu cho thấy: Hoạt độ men gan ALT (SGPT) tăng gấp 10 lần giới hạn bình thường, trong khi AST (SGOT) chỉ tăng nhẹ gấp 2 lần. Tỷ số De Ritis (AST/ALT) < 0,5. Kết quả xét nghiệm này gợi ý định hướng tổn thương nào nhiều nhất?",
    options: [
      "Tổn thương viêm tế bào gan cấp tính (như viêm gan virus cấp hoặc viêm gan do ngộ độc thuốc Paracetamol)",
      "Bệnh gan mạn tính do nghiện rượu tiến triển hoặc xơ gan do rượu",
      "Nhồi máu cơ tim cấp tiến triển trong vòng 24 - 48 giờ",
      "Tiêu cơ vân cấp tính kèm chấn thương đụng dập phần mềm diện rộng"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 50-51): ALT đặc hiệu cho tế bào gan hơn AST vì phân bố chủ yếu ở bào tương tế bào gan. Trong tổn thương gan cấp tính (viêm gan virus, hoại tử tế bào gan do thuốc), ALT tăng vọt rất cao và tỷ số AST/ALT < 1. Ngược lại, trong tổn thương do rượu hoặc xơ gan, AST tăng ưu thế (tỷ số De Ritis > 2).",
    reference: "Dls.pdf Trang 14 & SGK Dược Lâm Sàng tr. 50-51"
  },
  {
    chapter: "Xét nghiệm lâm sàng & Nhận định KQ",
    level: "Vận dụng",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Xét nghiệm công thức máu toàn phần (CBC) của một bệnh nhân sốt cao, ho có đờm đục cho thấy số lượng bạch cầu (WBC) là 16.000 /µL (bình thường 4.000 - 10.000 /µL) với tỷ lệ bạch cầu đa nhân trung tính (Neutrophil) chiếm 86%, có xuất hiện bạch cầu đũa non (chuyển trái). Dấu hiệu xét nghiệm này hướng tới chẩn đoán:",
    options: [
      "Tình trạng nhiễm khuẩn cấp tính do vi khuẩn gây ra",
      "Tình trạng nhiễm trùng mạn tính do nhiễm ký sinh trùng đường ruột",
      "Dị ứng thuốc dạng phát ban mẩn ngứa toàn thân",
      "Nhiễm virus cấp tính thể điển hình (như Sốt xuất huyết Dengue)"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 55-57): Bạch cầu trung tính (Neutrophil) là hàng rào phòng thủ đầu tiên chống lại vi khuẩn. Tăng bạch cầu toàn phần kết hợp với tăng tỷ lệ Neutrophil và chuyển trái (tăng bạch cầu đũa dạng chưa trưởng thành) là dấu hiệu kinh điển của nhiễm trùng cấp do vi khuẩn.",
    reference: "Dls.pdf Trang 14 & SGK Dược Lâm Sàng tr. 56"
  },
  {
    chapter: "Xét nghiệm lâm sàng & Nhận định KQ",
    level: "Vận dụng",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Bệnh nhân nữ 35 tuổi phàn nàn thường xuyên mệt mỏi, hoa mắt chóng mặt. Kết quả xét nghiệm huyết học: Hemoglobin (Hb) = 85 g/L (giảm), Thể tích khối hồng cầu trung bình MCV = 68 fL (giảm < 80 fL), Nồng độ hemoglobin hồng cầu trung bình MCH = 23 pg (giảm < 27 pg), Ferritin huyết thanh giảm nặng. Dược sĩ lâm sàng nhận định đây là loại thiếu máu nào:",
    options: [
      "Thiếu máu hồng cầu nhỏ, nhược sắc do thiếu sắt",
      "Thiếu máu hồng cầu to do thiếu hụt Vitamin B12 hoặc Acid folic",
      "Thiếu máu huyết tán tự miễn do bất đồng nhóm máu",
      "Thiếu máu bất sản tủy xương do nhiễm độc hóa chất"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 54-55): MCV < 80 fL là hồng cầu nhỏ, MCH < 27 pg là nhược sắc. Sự kết hợp giữa hồng cầu nhỏ nhược sắc và nồng độ Ferritin huyết thanh giảm là đặc trưng tuyệt đối của thiếu máu thiếu sắt. Bệnh nhân cần được bổ sung muối sắt (Fe2+) kèm vitamin C để tăng hấp thu.",
    reference: "Dls.pdf Trang 14 & SGK Dược Lâm Sàng tr. 55"
  },
  {
    chapter: "Xét nghiệm lâm sàng & Nhận định KQ",
    level: "Vận dụng cao",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Bệnh nhân nam 68 tuổi đang điều trị suy tim và tăng huyết áp với Enalapril 10 mg/ngày và Spironolacton 25 mg/ngày. Tại lần khám định kỳ, xét nghiệm điện giải đồ cho thấy nồng độ Kali huyết thanh [K+] = 6,2 mmol/L (bình thường 3,5 - 5,0 mmol/L), điện tâm đồ ghi nhận sóng T cao nhọn đối xứng. Xử trí dược lâm sàng cấp bách đối với đơn thuốc của bệnh nhân là:",
    options: [
      "Ngừng ngay lập tức cả Enalapril và Spironolacton, đồng thời báo bác sĩ xử trí cấp cứu hạ kali máu để tránh nguy cơ ngừng tim",
      "Tiếp tục đơn thuốc nhưng tăng gấp đôi liều Spironolacton lên 50 mg/ngày",
      "Chỉ ngừng Enalapril và tiếp tục duy trì Spironolacton liều thông thường",
      "Bổ sung viên uống Kali clorid 600 mg để cân bằng lại nội môi tế bào"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 52) và an toàn sử dụng thuốc: Phối hợp ACEi (Enalapril) với lợi tiểu giữ kali (Spironolacton) làm tăng nguy cơ tăng kali máu trầm trọng. Khi K+ > 6,0 mmol/L kèm biến đổi ECG (sóng T nhọn) là cấp cứu y khoa đe dọa ngừng tim, bắt buộc ngừng ngay lập tức 2 thuốc này và tiêm Calci gluconat để ổn định màng tim, tiêm Glucose + Insulin hoặc khí dung Salbutamol để kéo kali vào nội bào.",
    reference: "Dls.pdf Trang 14 & SGK Dược Lâm Sàng tr. 52"
  },

  // ==========================================
  // TƯƠNG TÁC THUỐC & ỨC CHẾ / CẢM ỨNG ENZYME CYP450
  // ==========================================
  {
    chapter: "Tương tác thuốc & Tương kỵ",
    level: "Vận dụng cao",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Bệnh nhân nam 55 tuổi có tiền sử rối loạn lipid máu đang uống Simvastatin 20 mg/ngày ổn định. Gần đây bệnh nhân bị viêm họng hạt và được phòng khám tư kê thêm kháng sinh Clarithromycin 500 mg x 2 lần/ngày trong 7 ngày. Sau 5 ngày dùng chung, bệnh nhân đau nhức cơ bắp dữ dội và nước tiểu có màu sẫm như xá xị. Cơ chế của tương tác thuốc này là gì?",
    options: [
      "Clarithromycin ức chế mạnh enzym CYP3A4 ở gan, làm giảm chuyển hóa Simvastatin dẫn đến tăng vọt nồng độ statin trong máu gây tiêu cơ vân cấp",
      "Clarithromycin cảm ứng mạnh enzym CYP3A4, làm giảm tác dụng điều trị mỡ máu của Simvastatin",
      "Simvastatin ức chế cạnh tranh gắn protein huyết tương của Clarithromycin gây ngộ độc kháng sinh",
      "Clarithromycin làm giảm hấp thu Simvastatin tại tá tràng do tạo phức chelat không tan"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (Bảng 4.1 tr. 71): Các Macrolid (ngoại trừ Azithromycin) như Clarithromycin, Erythromycin là chất ức chế enzym cytochrom P450 3A4 rất mạnh. Simvastatin chuyển hóa chủ yếu qua CYP3A4. Khi dùng chung, nồng độ Simvastatin tăng lên gấp nhiều lần, gây độc tính hoại tử tế bào cơ vân (tiêu cơ vân - rhabdomyolysis) giải phóng myoglobin làm tắc ống thận và nước tiểu sẫm màu.",
    reference: "Dls.pdf Trang 2 & SGK Dược Lâm Sàng Bảng 4.1 tr. 71"
  },
  {
    chapter: "Tương tác thuốc & Tương kỵ",
    level: "Vận dụng cao",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Một phụ nữ 24 tuổi đang dùng thuốc tránh thai đường uống kết hợp (Ethinylestradiol + Levonorgestrel). Sau đó bệnh nhân được chẩn đoán mắc bệnh lao phổi và bắt đầu điều trị bằng phác đồ có Rifampicin 600 mg/ngày. Dược sĩ lâm sàng cần cảnh báo nguy cơ nào và đưa ra khuyến cáo gì?",
    options: [
      "Rifampicin là chất cảm ứng enzym gan CYP3A4 mạnh, làm tăng tốc độ chuyển hóa thuốc tránh thai gây mất hiệu lực ngừa thai; cần tư vấn dùng biện pháp tránh thai cơ học bổ sung (như bao cao su)",
      "Rifampicin ức chế enzym gan làm tăng nồng độ estrogen gây nguy cơ huyết khối tĩnh mạch sâu; cần giảm nửa liều thuốc tránh thai",
      "Thuốc tránh thai làm mất tác dụng diệt khuẩn của Rifampicin dẫn đến thất bại phác đồ lao phổi; phải ngừng thuốc lao",
      "Hai thuốc gây tương tác tạo phức kết tủa tại ruột; chỉ cần uống cách nhau 2 giờ là an toàn"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (Bảng 4.1 tr. 71): Rifampicin là chất gây cảm ứng enzym cytochrom P450 mạnh bậc nhất. Nó làm tăng hoạt tính CYP3A4 và men liên hợp glucuronid, đẩy nhanh chuyển hóa estrogen và progestin khiến nồng độ hormon trong máu giảm xuống dưới ngưỡng tác dụng ngừa thai, dẫn đến có thai ngoài ý muốn.",
    reference: "Dls.pdf Trang 2 & SGK Dược Lâm Sàng tr. 71-73"
  },
  {
    chapter: "Tương tác thuốc & Tương kỵ",
    level: "Vận dụng",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Khi phối hợp kháng sinh nhóm Beta-lactam (diệt khuẩn giai đoạn vi khuẩn đang nhân lên) với kháng sinh nhóm Tetracyclin (kìm khuẩn ức chế tổng hợp protein) trong điều trị nhiễm khuẩn, hiện tượng tương tác thuốc nào xảy ra?",
    options: [
      "Tương tác đối kháng dược lực học: Tetracyclin ức chế sự nhân lên của vi khuẩn làm giảm tác dụng diệt khuẩn của Beta-lactam",
      "Tương tác hiệp đồng tăng cường tác dụng diệt khuẩn qua hai cơ chế khác nhau",
      "Tương tác làm tăng độc tính chọn lọc lên thính giác và thận của bệnh nhân",
      "Tương tác dược động học làm giảm sinh khả dụng của Tetracyclin đường uống"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (Chương 4 & Chương 12): Beta-lactam chỉ có tác dụng diệt khuẩn khi vi khuẩn đang phân chia và phát triển mạnh để tổng hợp thành tế bào peptidoglycan. Khi dùng cùng kháng sinh kìm khuẩn như Tetracyclin, Chloramphenicol hoặc Macrolid, vi khuẩn bị ngừng phát triển nên Beta-lactam mất mục tiêu tác dụng, dẫn đến giảm hoặc mất hiệu lực diệt khuẩn.",
    reference: "Dls.pdf Trang 2 & SGK Dược Lâm Sàng tr. 68-70"
  },
  {
    chapter: "Tương tác thuốc & Tương kỵ",
    level: "Vận dụng cao",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Bệnh nhân suy tim mạn tính đang điều trị bằng viên nén Digoxin 0,25 mg/ngày. Bác sĩ kê thêm Furosemid 40 mg/ngày đường uống để giảm phù do ứ trệ tuần hoàn mà không bổ sung Kali. Nguy cơ tương tác thuốc nguy hiểm nhất có thể xảy ra ở bệnh nhân này là gì?",
    options: [
      "Furosemid gây hạ kali máu, làm tăng mạnh độ nhạy cảm của cơ tim với Digoxin dẫn đến ngộ độc Digoxin và loạn nhịp thất chết người",
      "Furosemid làm tăng thải trừ Digoxin qua thận dẫn đến mất hoàn toàn hiệu quả trợ tim",
      "Digoxin làm bất hoạt kênh Na+/K+/2Cl- ở quai Henle làm mất tác dụng lợi tiểu của Furosemid",
      "Hai thuốc cạnh tranh đào thải tại ống thận gây tăng acid uric máu dẫn đến cơn gout cấp"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 75 & tr. 120): Digoxin và ion K+ cạnh tranh gắn vào enzym Na+/K+-ATPase ở màng tế bào cơ tim. Thuốc lợi tiểu quai (Furosemid) làm mất kali qua nước tiểu. Khi nồng độ K+ ngoại bào giảm (hạ kali máu), Digoxin gắn mạnh hơn vào thụ thể, làm tăng độc tính cơ tim đột ngột, gây ngoại tâm thu thất, nhịp nhanh thất hoặc rung thất đe dọa tính mạng.",
    reference: "Dls.pdf Trang 2 & SGK Dược Lâm Sàng tr. 75"
  },

  // ==========================================
  // ADR, CẢNH GIÁC DƯỢC & CẤP CỨU SỐC PHẢN VỆ
  // ==========================================
  {
    chapter: "Tác dụng không mong muốn (ADR) & Dị ứng",
    level: "Vận dụng cao",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Ngay sau khi tiêm bắp mũi đầu tiên kháng sinh Cefotaxim tại trạm y tế, bệnh nhân xuất hiện hồi hộp, thở rít thanh quản, nổi mày đay ngứa toàn thân, mạch nhanh nhỏ 120 lần/phút, huyết áp tụt xuống 70/40 mmHg (Sốc phản vệ độ III). Thuốc cấp cứu thiết yếu số 1 cần được dùng ngay lập tức theo phác đồ của Bộ Y tế là:",
    options: [
      "Adrenalin 1 mg/1 mL tiêm bắp ngay lập tức 1/2 ống (0,5 mg) vào mặt trước ngoài đùi",
      "Methylprednisolon 40 mg tiêm tĩnh mạch chậm",
      "Diphenhydramin 10 mg tiêm bắp sâu",
      "Truyền tĩnh mạch thật nhanh dung dịch Natri clorid 0,9% 500 mL"
    ],
    correct: 0,
    explanation: "Theo Thông tư 51/2017/TT-BYT và Giáo trình Dược lâm sàng: Adrenalin (Epinephrine) là thuốc thiết yếu, quan trọng hàng đầu để cấp cứu sốc phản vệ, phải tiêm bắp ngay lập tức ở mặt trước ngoài đùi (người lớn 1/2 ống = 0,5 mg, trẻ em 0,01 mg/kg). Corticoid và kháng histamin chỉ là thuốc hỗ trợ bước 2, tác dụng xuất hiện chậm (sau vài giờ) và không thể đảo ngược nhanh tình trạng trụy mạch, co thắt khí phế quản.",
    reference: "Dls.pdf Trang 3 (Câu cấp cứu sốc phản vệ Adrenalin) & TT 51/2017/TT-BYT"
  },
  {
    chapter: "Tác dụng không mong muốn (ADR) & Dị ứng",
    level: "Nhận biết",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Theo phân loại tác dụng không mong muốn của thuốc theo Rawlins và Thompson, phản ứng dị ứng thuốc (như sốc phản vệ với penicillin hoặc hội chứng Stevens-Johnson với allopurinol) thuộc nhóm nào?",
    options: [
      "ADR nhóm B (Bizarre - phản ứng kỳ lạ, dị ứng, không phụ thuộc liều dùng, tỷ lệ mắc thấp nhưng tỷ lệ tử vong cao)",
      "ADR nhóm A (Augmented - tăng tác dụng dược lý, phụ thuộc liều dùng, tiên lượng được, thường gặp)",
      "ADR nhóm C (Chronic - tác dụng xuất hiện khi dùng thuốc kéo dài liên tục)",
      "ADR nhóm D (Delayed - tác dụng xuất hiện muộn như gây quái thai hoặc sinh ung thư)"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (Chương 5 tr. 80-82): Phân loại Rawlins - Thompson chia ADR làm 2 nhóm chính: Type A (thường gặp, dự đoán trước được, liên quan đến liều và tác dụng dược lý) và Type B (không liên quan đến liều, không dự đoán trước được, liên quan đến cơ địa dị ứng di truyền hoặc miễn dịch học như sốc phản vệ, Stevens-Johnson).",
    reference: "Dls.pdf Trang 3 & SGK Dược Lâm Sàng tr. 81"
  },

  // ==========================================
  // THUỐC CHO PHỤ NỮ CÓ THAI & PHỤ NỮ CHO CON BÚ
  // ==========================================
  {
    chapter: "Thuốc cho PN mang thai & Cho con bú",
    level: "Vận dụng",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Một phụ nữ mang thai ở tuần thứ 28 được phát hiện tăng huyết áp thai kỳ với huyết áp dao động 150/95 mmHg. Nhóm thuốc hạ áp nào sau đây TUYỆT ĐỐI CHỐNG CHỈ ĐỊNH trong thai kỳ do nguy cơ gây suy thận vô niệu thai nhi, thiểu ối, dị tật sọ mặt và tử vong chu sinh?",
    options: [
      "Thuốc ức chế men chuyển (ACEi) và Thuốc chẹn thụ thể Angiotensin II (ARB)",
      "Thuốc chẹn kênh calci DHP phóng thích chậm (như Nifedipin retard)",
      "Thuốc tác động lên hệ thần kinh trung ương (như Methyldopa)",
      "Thuốc chẹn thụ thể beta và alpha kết hợp (như Labetalol)"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (Chương 6 tr. 94-96): Thuốc ức chế men chuyển (Enalapril, Captopril, Lisinopril...) và chẹn thụ thể ARB (Losartan, Valsartan...) thuộc phân loại D (hoặc X trong 3 tháng giữa và cuối thai kỳ). Chúng làm giảm tưới máu thận thai nhi, gây suy thận vô niệu, thiểu ối dẫn đến co cứng chi, dị tật phát triển xương sọ và phổi của thai nhi.",
    reference: "Dls.pdf Trang 6 (Câu PNCT cấm dùng thuốc hạ áp nào) & SGK tr. 95"
  },
  {
    chapter: "Thuốc cho PN mang thai & Cho con bú",
    level: "Nhận biết",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Theo phân loại mức độ an toàn của thuốc trên phụ nữ mang thai của Cục Quản lý Thực phẩm và Dược phẩm Hoa Kỳ (US-FDA), thuốc thuộc 'Nhóm X' có đặc điểm nào sau đây?",
    options: [
      "Các nghiên cứu trên động vật hoặc trên người đã chứng minh rõ ràng thuốc gây bất thường cho thai nhi; nguy cơ dùng thuốc vượt trội hoàn toàn mọi lợi ích điều trị, chống chỉ định tuyệt đối",
      "Các nghiên cứu có đối chứng trên phụ nữ mang thai không cho thấy nguy cơ đối với thai nhi trong suốt thai kỳ (như Acid folic liều khuyến nghị)",
      "Các nghiên cứu trên động vật cho thấy có độc tính trên thai nhưng chưa có nghiên cứu đầy đủ trên người, chỉ dùng khi lợi ích lớn hơn nguy cơ",
      "Có bằng chứng rõ ràng về nguy cơ trên thai nhi người nhưng trong trường hợp đe dọa tính mạng người mẹ vẫn có thể chấp nhận sử dụng"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 92-93): Phân loại thai kỳ FDA gồm A, B, C, D, X. Nhóm X là nhóm có nguy cơ quái thai tuyệt đối đã được xác lập chắc chắn và chống chỉ định tuyệt đối ở phụ nữ có thai hoặc nghi ngờ có thai (ví dụ: Isotretinoin, Thalidomid, Methotrexat, Statin, Warfarin).",
    reference: "Dls.pdf Trang 6 & SGK Dược Lâm Sàng tr. 92"
  },
  {
    chapter: "Thuốc cho PN mang thai & Cho con bú",
    level: "Vận dụng",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Phụ nữ mang thai mắc hội chứng tiền sản giật nặng có nguy cơ xuất hiện cơn co giật sản giật đe dọa tính mạng cả mẹ và thai nhi. Thuốc được ưu tiên lựa chọn hàng đầu theo hướng dẫn của Bộ Y tế để dự phòng và điều trị cơn co giật sản giật là:",
    options: [
      "Magnesi sulfat (MgSO4) truyền tĩnh mạch theo dõi sát phản xạ gân xương bánh chè",
      "Diazepam tiêm tĩnh mạch nhanh liều cao 10 - 20 mg",
      "Phenobarbital tiêm bắp sâu",
      "Phenytoin truyền tĩnh mạch"
    ],
    correct: 0,
    explanation: "Theo hướng dẫn Sản khoa Bộ Y tế và Giáo trình Dược lâm sàng: Magnesi sulfat (MgSO4) là thuốc số 1 để dự phòng và cắt cơn giật do sản giật nhờ tác dụng ức chế dẫn truyền thần kinh cơ và giãn mạch não mà không gây suy hô hấp cho thai nhi như nhóm Benzodiazepin. Khi dùng phải theo dõi: phản xạ gân xương bánh chè, nhịp thở (>= 16 lần/phút) và lượng nước tiểu (>= 30 mL/giờ).",
    reference: "Dls.pdf Trang 6 & SGK Dược Lâm Sàng tr. 98"
  },

  // ==========================================
  // THUỐC DÙNG CHO TRẺ EM & ĐỘC TÍNH ĐẶC BIỆT
  // ==========================================
  {
    chapter: "Sử dụng thuốc cho Trẻ em",
    level: "Nhận biết",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Kháng sinh nhóm Tetracyclin (như Doxycyclin, Tetracyclin) chống chỉ định dùng cho trẻ em dưới 8 tuổi chủ yếu vì lý do gì?",
    options: [
      "Thuốc tạo phức chelat không thuận nghịch với ion Calci của men răng và xương đang phát triển, làm hỏng men răng vĩnh viễn, ố vàng răng và chậm phát triển xương dài",
      "Thuốc gây hoại tử sụn khớp thoái hóa ở các khớp chịu lực",
      "Thuốc ức chế tủy xương gây hội chứng thiếu máu không tái tạo",
      "Thuốc làm chậm quá trình đóng thóp và gây hội chứng đầu to ở trẻ nhỏ"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (Chương 8 tr. 116-118): Tetracyclin tạo phức bền vững với calci phosphat ở xương và răng đang phát triển, dẫn đến đổi màu răng vĩnh viễn (ố vàng, nâu xỉn), giảm sản men răng và làm chậm phát triển chiều dài xương ở trẻ em dưới 8 tuổi.",
    reference: "Dls.pdf Trang 7 & SGK Dược Lâm Sàng tr. 117"
  },
  {
    chapter: "Sử dụng thuốc cho Trẻ em",
    level: "Vận dụng",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Một trẻ em 5 tuổi bị sốt cao do nhiễm virus cúm mùa hoặc thủy đậu. Cán bộ y tế TUYỆT ĐỐI KHÔNG ĐƯỢC sử dụng Aspirin (Acid acetylsalicylic) để hạ sốt cho trẻ vì nguy cơ xuất hiện biến chứng nguy hiểm nào?",
    options: [
      "Hội chứng Reye (suy gan cấp tiến triển kết hợp phù não cấp tính dẫn đến hôn mê và tỷ lệ tử vong rất cao)",
      "Hội chứng xám (Gray baby syndrome) kèm trụy mạch tím tái",
      "Hội chứng da bong vảy do nhiễm độc tụ cầu (SSSS)",
      "Suy tủy dòng hồng cầu gây thiếu máu nặng cấp tính"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 119): Dùng Aspirin cho trẻ em và thanh thiếu niên đang mắc các bệnh nhiễm virus cấp tính (cúm, thủy đậu) có mối liên quan nhân quả chặt chẽ với Hội chứng Reye. Hội chứng này đặc trưng bởi thoái hóa mỡ vi thể ở gan kèm phù não cấp tính, hôn mê và tử vong lên tới 30-50%. Thuốc hạ sốt được lựa chọn hàng đầu cho trẻ là Paracetamol 10-15 mg/kg mỗi 4-6 giờ.",
    reference: "Dls.pdf Trang 7 & SGK Dược Lâm Sàng tr. 119"
  },
  {
    chapter: "Sử dụng thuốc cho Trẻ em",
    level: "Nhận biết",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Kháng sinh Chloramphenicol có thể gây ra 'Hội chứng xám' (Gray baby syndrome) đe dọa tính mạng ở trẻ sơ sinh và trẻ đẻ non do nguyên nhân sinh lý nào sau đây?",
    options: [
      "Hệ enzym liên hợp Glucuronyl transferase ở gan trẻ sơ sinh chưa hoàn thiện và chức năng lọc của cầu thận còn kém làm thuốc tích lũy nồng độ độc trong máu",
      "Lượng albumin huyết tương ở trẻ sơ sinh gắn kết thuốc quá mạnh làm tăng thể tích phân bố",
      "Độ acid dịch vị dạ dày quá cao làm thủy phân Chloramphenicol thành chất độc",
      "Lượng mỡ cơ thể trẻ sơ sinh quá cao giữ thuốc lâu trong các tổ chức mỡ"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 115): Ở trẻ sơ sinh (đặc biệt trẻ đẻ non), gan thiếu hụt enzyme UDP-glucuronyl transferase cần thiết để liên hợp và giải độc Chloramphenicol, đồng thời thận bài tiết kém. Thuốc tích tụ trong máu gây ức chế hô hấp tế bào ở cơ tim, biểu hiện trụy tim mạch, hạ thân nhiệt, da xanh xám tro (Hội chứng xám) dẫn đến tử vong nhanh chóng.",
    reference: "Dls.pdf Trang 7 & SGK Dược Lâm Sàng tr. 115"
  },

  // ==========================================
  // SỬ DỤNG THUỐC CHO NGƯỜI CAO TUỔI
  // ==========================================
  {
    chapter: "Sử dụng thuốc cho Người cao tuổi",
    level: "Vận dụng",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Ở người cao tuổi (trên 65 tuổi), sự biến đổi sinh lý nào về mặt thành phần cơ thể có ảnh hưởng sâu sắc nhất đến thể tích phân bố (Vd) của các thuốc tan nhiều trong lipid (như thuốc an thần nhóm Benzodiazepin - Diazepam)?",
    options: [
      "Khối lượng cơ nạc và tổng lượng nước cơ thể giảm, tỷ lệ mỡ cơ thể tăng lên làm tăng Vd và kéo dài thời gian bán thải của thuốc tan trong mỡ",
      "Lượng mỡ giảm đi làm thuốc tan trong mỡ không còn nơi tích lũy, bị đào thải rất nhanh",
      "Lượng nước cơ thể tăng vọt làm nồng độ thuốc trong huyết tương bị pha loãng hoàn toàn",
      "Nồng độ Albumin huyết tương tăng cao làm giảm hoàn toàn phân đoạn thuốc tự do có hoạt tính"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (Chương 7 tr. 102-105): Ở người cao tuổi, tỷ lệ mỡ cơ thể tăng từ 15-20% lên tới 30-40%, trong khi lượng nước cơ thể giảm 10-15%. Các thuốc tan nhiều trong mỡ như Diazepam, Clordiazepoxid có Vd tăng vọt, thời gian bán thải t1/2 có thể kéo dài gấp 2 đến 3 lần (Diazepam t1/2 lên tới 80 - 100 giờ ở người già), gây tích lũy dẫn đến an thần quá mức, lú lẫn, nguy cơ ngã và gãy xương đùi.",
    reference: "Dls.pdf Trang 7 & SGK Dược Lâm Sàng tr. 104"
  },
  {
    chapter: "Sử dụng thuốc cho Người cao tuổi",
    level: "Vận dụng",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Tại sao ở bệnh nhân cao tuổi bị teo cơ, suy dinh dưỡng, nồng độ Creatinin huyết thanh đo được vẫn có thể nằm trong khoảng 'bình thường' (khoảng 70 - 90 µmol/L) dù chức năng lọc cầu thận thực tế đã suy giảm nặng nề?",
    options: [
      "Do khối lượng cơ bắp của người cao tuổi bị giảm sút nghiêm trọng dẫn đến lượng Creatinin nội sinh do cơ bắp sinh ra bị giảm tương ứng",
      "Do ống thận người cao tuổi tăng cường bài tiết chủ động Creatinin qua nước tiểu để bù trừ",
      "Do chế độ ăn kiêng đạm làm gan không còn tổng hợp được Creatin",
      "Do Creatinin bị phá hủy bởi hệ vi khuẩn đường ruột trước khi vào tuần hoàn máu"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 41 & 106): Nồng độ Creatinin huyết thanh phụ thuộc trực tiếp vào khối lượng cơ bắp. Người già bị teo cơ (sarcopenia) sinh ra ít creatinin hơn. Vì vậy, nồng độ creatinin máu 'bình thường giả tạo' che giấu sự suy giảm độ thanh thải cầu thận. Khi kê đơn các thuốc thải trừ qua thận (Digoxin, Aminoglycosid, Enoxaparin...), bắt buộc phải tính ClCr theo công thức Cockcroft-Gault chứ không thể chỉ nhìn nồng độ creatinin máu đơn thuần.",
    reference: "Dls.pdf Trang 7 & SGK Dược Lâm Sàng tr. 41"
  },

  // ==========================================
  // THUỐC GLUCOCORTICOID & ĐỘC TÍNH NGUY HIỂM
  // ==========================================
  {
    chapter: "Sử dụng Glucocorticoid hợp lý",
    level: "Vận dụng",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Nguyên tắc sử dụng Glucocorticoid theo 'Liệu pháp dùng cách ngày' (Alternate-day therapy) trong điều trị các bệnh tự miễn mạn tính nhằm mục đích chính là gì?",
    options: [
      "Uống liều gấp đôi vào lúc 8 giờ sáng mỗi 48 giờ để giảm thiểu tối đa hiện tượng ức chế trục Dưới đồi - Tuyến yên - Vỏ thượng thận (HPA) và phòng ngừa suy thượng thận cấp khi ngừng thuốc",
      "Uống thuốc vào buổi tối trước khi đi ngủ để hạn chế tối đa nguy cơ viêm loét dạ dày tá tràng",
      "Chia nhỏ liều làm 4 lần trong ngày để duy trì nồng độ thuốc ổn định liên tục trong huyết tương",
      "Dùng thuốc 5 ngày liên tục rồi nghỉ 2 ngày cuối tuần để cơ thể tái tạo mô xương"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (Chương 14 tr. 214-215): Sinh lý tiết Cortisol của vỏ thượng thận cao nhất vào 6-8 giờ sáng và thấp nhất vào nửa đêm. Liệu pháp dùng cách ngày (cho liều thuốc tác dụng trung bình như Prednisolon vào 8 giờ sáng cách ngày) cho phép trục HPA có thời gian hồi phục vào ngày không dùng thuốc, giảm thiểu tình trạng teo vỏ thượng thận và suy thượng thận cấp khi ngừng thuốc.",
    reference: "Dls.pdf Trang 10 & SGK Dược Lâm Sàng tr. 215"
  },
  {
    chapter: "Sử dụng Glucocorticoid hợp lý",
    level: "Nhận biết",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "So sánh hoạt lực chống viêm và hoạt lực giữ muối nước của Methylprednisolon với Hydrocortison (chất chuẩn có hoạt lực = 1) theo Giáo trình Dược lâm sàng (Bảng 14.1 tr. 209):",
    options: [
      "Methylprednisolon có hoạt lực chống viêm mạnh gấp 5 lần Hydrocortison và hoạt lực giữ muối nước thấp hơn (khoảng 0,5)",
      "Methylprednisolon có hoạt lực chống viêm bằng Hydrocortison nhưng giữ muối nước gấp 5 lần",
      "Methylprednisolon có hoạt lực chống viêm mạnh gấp 25-30 lần Hydrocortison và không giữ muối nước",
      "Methylprednisolon chỉ có tác dụng tại chỗ ngoài da, không có tác dụng toàn thân"
    ],
    correct: 0,
    explanation: "Theo Bảng 14.1 Giáo trình Dược lâm sàng (trang 209): Hydrocortison (tương đương 20 mg, chống viêm 1, giữ muối 1); Prednisolon (5 mg, chống viêm 4, giữ muối 0,8); Methylprednisolon (4 mg, chống viêm 5, giữ muối 0,5); Dexamethason (0,75 mg, chống viêm 25-30, giữ muối 0).",
    reference: "Dls.pdf Trang 10 & SGK Dược Lâm Sàng Bảng 14.1 tr. 209"
  },
  {
    chapter: "Sử dụng Glucocorticoid hợp lý",
    level: "Vận dụng",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Một bệnh nhân nữ 50 tuổi viêm khớp dạng thấp đang dùng Prednisolon 15 mg/ngày liên tục suốt 6 tháng qua. Do thấy hết đau khớp, bệnh nhân tự ý ngừng thuốc đột ngột. Sau 2 ngày bệnh nhân nhập viện trong tình trạng mệt lả, nôn nhiều, tụt huyết áp nặng (70/50 mmHg), hạ natri máu, tăng kali máu. Nguyên nhân của biến chứng cấp tính này là do:",
    options: [
      "Suy vỏ thượng thận cấp do ngừng Glucocorticoid đột ngột sau thời gian dài bị ức chế trục Dưới đồi - Tuyến yên - Thượng thận (HPA)",
      "Cơn bão giáp trạng cấp tính do phản ứng dội ngược hormon tuyến giáp",
      "Ngộ độc Prednisolon tích tụ trong mô liên kết",
      "Thủng ổ loét dạ dày tá tràng gây mất máu cấp tính"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 211-213): Dùng corticoid liều tương đương >= 5mg prednisolon/ngày kéo dài trên 3 tuần làm teo vỏ thượng thận thứ phát do ức chế bài tiết CRH và ACTH. Khi ngừng thuốc đột ngột, tuyến thượng thận bị teo không thể sản xuất đủ cortisol để đáp ứng stress, dẫn đến cơn suy thượng thận cấp tính (trụy tim mạch, sốc, rối loạn điện giải đe dọa tử vong). Bắt buộc phải giảm liều từ từ trước khi ngừng hẳn.",
    reference: "Dls.pdf Trang 10 & SGK Dược Lâm Sàng tr. 213"
  },

  // ==========================================
  // ĐIỀU TRỊ ĐAU DO UNG THƯ THEO BẬC THANG WHO
  // ==========================================
  {
    chapter: "Điều trị đau do Ung thư (WHO)",
    level: "Vận dụng",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Theo phác đồ bậc thang giảm đau 3 bước của Tổ chức Y tế Thế giới (WHO), nguyên tắc lựa chọn thuốc giảm đau cho bệnh nhân ung thư giai đoạn muộn có mức độ đau dữ dội (thang điểm đau VAS từ 7 đến 10 điểm) là:",
    options: [
      "Bắt đầu ngay bằng Opioid mạnh (như Morphin hoặc Fentanyl) phối hợp hoặc không phối hợp với thuốc giảm đau non-opioid và thuốc bổ trợ",
      "Bắt đầu bằng Paracetamol liều tối đa 4 g/ngày, sau 1 tuần không đỡ mới chuyển sang Opioid yếu",
      "Dùng Codein hoặc Tramadol liều cao tối đa trước khi cân nhắc dùng Opioid mạnh",
      "Chỉ dùng NSAIDs đường tiêm để tránh gây nghiện thuốc cho bệnh nhân"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (Chương 15 tr. 220-223): Thang điều trị đau ung thư của WHO quy định: Bậc 1 (đau nhẹ 1-3 điểm) dùng Paracetamol/NSAIDs; Bậc 2 (đau vừa 4-6 điểm) dùng Opioid yếu như Codein, Tramadol; Bậc 3 (đau nặng 7-10 điểm) bắt buộc phải dùng Opioid mạnh như Morphin, Oxycodon, Fentanyl. Dùng 'bước nhảy' trực tiếp lên bậc 3 khi bệnh nhân đau dữ dội.",
    reference: "Dls.pdf Trang 11 & SGK Dược Lâm Sàng tr. 221"
  },
  {
    chapter: "Điều trị đau do Ung thư (WHO)",
    level: "Vận dụng cao",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Một bệnh nhân ung thư di căn xương đang được kiểm soát đau ổn định bằng Morphin uống tác dụng kéo dài với tổng liều 120 mg/ngày (chia 2 lần). Đôi khi bệnh nhân có các cơn đau đột xuất (breakthrough pain). Liều Morphin tác dụng nhanh dạng dung dịch uống khuyến cáo cho mỗi cơn đau đột xuất là bao nhiêu?",
    options: [
      "10 mg đến 20 mg (khoảng 10% đến 15% tổng liều morphin hàng ngày)",
      "60 mg (tương đương 50% tổng liều morphin hàng ngày)",
      "40 mg (tương đương 1/3 tổng liều morphin hàng ngày)",
      "2 mg đến 5 mg (khoảng 2% tổng liều morphin hàng ngày)"
    ],
    correct: 0,
    explanation: "Theo khuyến cáo của Bộ Y tế và Giáo trình Dược lâm sàng (trang 224-225): Để xử trí cơn đau đột xuất (đau bùng phát), cho bệnh nhân uống 1 liều Morphin tác dụng nhanh (giải phóng nhanh) bằng 1/10 đến 1/6 (khoảng 10% - 15%) tổng liều morphin trong 24 giờ. Với tổng liều 120 mg/ngày, liều cấp cứu là 12 mg đến 20 mg mỗi lần cần thiết (cách nhau tối thiểu 2-4 giờ).",
    reference: "Dls.pdf Trang 11 & SGK Dược Lâm Sàng tr. 225"
  },
  {
    chapter: "Điều trị đau do Ung thư (WHO)",
    level: "Vận dụng",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Miếng dán thẩm thấu qua da Fentanyl (Durogesic) là dạng thuốc giảm đau opioid mạnh tiện dụng cho bệnh nhân ung thư. Tuy nhiên, miếng dán này CHỐNG CHỈ ĐỊNH trong trường hợp nào sau đây?",
    options: [
      "Bệnh nhân chưa từng sử dụng opioid bao giờ (chưa dung nạp opioid) hoặc dùng để điều trị các cơn đau cấp tính sau mổ",
      "Bệnh nhân ung thư có tổn thương di căn xương gây đau mạn tính liên tục",
      "Bệnh nhân bị ung thư vòm họng gặp khó khăn nặng khi nuốt viên thuốc",
      "Bệnh nhân đã dung nạp morphin đường uống liều tương đương ít nhất 60 mg/ngày"
    ],
    correct: 0,
    explanation: "Theo khuyến cáo an toàn Dược lâm sàng: Fentanyl qua da giải phóng hoạt chất liên tục và có độ thanh thải chậm (nồng độ duy trì kéo dài trong mô mỡ). Do đó chỉ được dùng cho bệnh nhân đau mạn tính đã dung nạp opioid (ít nhất 60mg morphin uống/ngày trong 1 tuần). Chống chỉ định tuyệt đối cho bệnh nhân chưa dung nạp opioid hoặc đau cấp tính vì nguy cơ ức chế hô hấp dẫn đến ngừng thở tử vong.",
    reference: "Dls.pdf Trang 11 & SGK Dược Lâm Sàng tr. 226"
  },

  // ==========================================
  // NGUYÊN TẮC SỬ DỤNG KHÁNG SINH & KHÁNG SINH DỰ PHÒNG
  // ==========================================
  {
    chapter: "Nguyên tắc sử dụng Kháng sinh",
    level: "Vận dụng cao",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Một bệnh nhân chuẩn bị thực hiện phẫu thuật thay khớp háng nhân tạo kéo dài dự kiến 3 giờ. Kháng sinh dự phòng được lựa chọn là Cefazolin tiêm tĩnh mạch. Thời điểm tối ưu nhất để tiêm liều Cefazolin dự phòng đầu tiên là khi nào?",
    options: [
      "Trong vòng 30 đến 60 phút trước khi phẫu thuật viên rạch da",
      "Ngay sau khi kết thúc ca phẫu thuật và chuyển bệnh nhân về phòng hồi tỉnh",
      "Trước phẫu thuật 24 giờ và uống liên tục 3 ngày trước mổ",
      "Tiêm ngay khi bệnh nhân vừa bước chân vào phòng mổ mà chưa gây mê"
    ],
    correct: 0,
    explanation: "Theo Hướng dẫn sử dụng kháng sinh của Bộ Y tế và Giáo trình Dược lâm sàng (Bảng 12.11 tr. 187): Mục tiêu của kháng sinh dự phòng là đạt nồng độ diệt khuẩn trong máu và tại mô mổ cao hơn MIC của vi khuẩn ngay thời điểm rạch da. Vì vậy, Cefazolin tiêm tĩnh mạch phải được hoàn thành trong vòng 30 - 60 phút trước nhát rạch da đầu tiên. Đối với Vancomycin và Fluoroquinolon cần truyền chậm trong 60 - 120 phút trước rạch da.",
    reference: "Dls.pdf Trang 8 & SGK Dược Lâm Sàng tr. 187"
  },
  {
    chapter: "Nguyên tắc sử dụng Kháng sinh",
    level: "Vận dụng cao",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Trong một ca phẫu thuật tim hở kéo dài hơn 5 giờ, kháng sinh dự phòng ban đầu là Cefazolin 2g tiêm tĩnh mạch trước mổ 45 phút. Khi nào phẫu thuật viên cần chỉ định tiêm bổ sung liều Cefazolin thứ hai trong lúc mổ?",
    options: [
      "Sau 4 giờ phẫu thuật (tương đương 2 lần thời gian bán thải t1/2 của Cefazolin) hoặc khi bệnh nhân mất máu trên 1500 mL",
      "Sau 1 giờ phẫu thuật bất kể lượng máu mất",
      "Sau 8 giờ phẫu thuật theo chu kỳ dùng thuốc thông thường",
      "Không bao giờ được tiêm thêm liều thứ hai trong lúc mổ vì nguy cơ sốc phản vệ"
    ],
    correct: 0,
    explanation: "Theo hướng dẫn sử dụng kháng sinh phẫu thuật Bộ Y tế (SGK tr. 188): Liều bổ sung trong mổ được chỉ định khi thời gian phẫu thuật kéo dài quá 2 lần thời gian bán hủy (t1/2) của kháng sinh (t1/2 của Cefazolin là 1,5 - 2 giờ, nên cần tiêm lặp lại sau 3 - 4 giờ) hoặc khi bệnh nhân mất máu ồ ạt > 1500 mL dẫn đến suy giảm nồng độ kháng sinh trong máu.",
    reference: "Dls.pdf Trang 8 & SGK Dược Lâm Sàng tr. 188"
  },
  {
    chapter: "Nguyên tắc sử dụng Kháng sinh",
    level: "Nhận biết",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Theo dược động học/dược lực học (PK/PD), nhóm kháng sinh Aminoglycosid (Gentamicin, Amikacin) có đặc tính diệt khuẩn nào sau đây?",
    options: [
      "Diệt khuẩn phụ thuộc nồng độ đỉnh (thông số tối ưu là Cmax/MIC >= 8 - 10) và có tác dụng hậu kháng sinh (PAE) kéo dài, do đó tối ưu hóa bằng chế độ liều 1 lần duy nhất trong ngày (ODD)",
      "Diệt khuẩn phụ thuộc thời gian (thông số tối ưu là %T > MIC), cần chia nhỏ liều tiêm truyền nhiều lần trong ngày",
      "Kìm khuẩn phụ thuộc thời gian tiếp xúc của kháng sinh với vi khuẩn",
      "Chỉ có tác dụng diệt khuẩn khi nồng độ đáy Cmin duy trì trên mức độc tính"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (Chương 12 tr. 172-175): Aminoglycosid là kháng sinh diệt khuẩn phụ thuộc nồng độ (nồng độ đỉnh Cmax càng cao thì tốc độ và mức độ diệt khuẩn càng mạnh). Hiệu ứng PAE kéo dài cho phép vi khuẩn tiếp tục bị ức chế ngay cả khi nồng độ thuốc trong máu đã tụt xuống dưới MIC. Chế độ liều 1 lần/ngày giúp đạt đỉnh cao (tăng hiệu lực) và có thời gian nồng độ đáy thấp (giảm độc tính trên thận và tai).",
    reference: "Dls.pdf Trang 8 & SGK Dược Lâm Sàng tr. 174"
  },

  // ==========================================
  // TIÊU CHẢY CẤP Ở TRẺ EM & BÙ NƯỚC ĐIỆN GIẢI
  // ==========================================
  {
    chapter: "Tiêu chảy cấp ở trẻ em",
    level: "Vận dụng",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Một trẻ 10 tháng tuổi bị tiêu chảy cấp phân tóe nước 8 lần/ngày kèm sốt nhẹ. Khám thấy trẻ khát nước, mắt trũng nhẹ, véo da mất sau 1 giây (được chẩn đoán Tiêu chảy cấp Có mất nước - Phác đồ B). Biện pháp điều trị bù dịch nào sau đây là ĐÚNG theo hướng dẫn của WHO và Bộ Y tế?",
    options: [
      "Cho uống dung dịch Oresol (ORS) áp lực thẩm thấu thấp với lượng 75 mL/kg trong 4 giờ đầu, sau đó đánh giá lại tình trạng mất nước",
      "Truyền tĩnh mạch ngay lập tức dung dịch Glucose 5% với tốc độ 100 mL/kg trong 3 giờ",
      "Nhịn ăn nhịn uống hoàn toàn trong 24 giờ đầu để ruột được nghỉ ngơi",
      "Pha Oresol đặc gấp đôi so với hướng dẫn trên gói để bù natri nhanh hơn"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng và hướng dẫn IMCI/WHO: Phác đồ B (Có mất nước) chỉ định bù dịch bằng Oresol áp lực thẩm thấu thấp (245 mOsm/L) đường uống với lượng: Cân nặng (kg) x 75 mL trong 4 giờ đầu. Chỉ định truyền tĩnh mạch (Phác đồ C) khi trẻ mất nước nặng, li bì, sốc hoặc nôn liên tục không uống được.",
    reference: "Dls.pdf Trang 12 & SGK Dược Lâm Sàng tr. 200"
  },
  {
    chapter: "Tiêu chảy cấp ở trẻ em",
    level: "Vận dụng",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Tại sao trong điều trị tiêu chảy cấp ở trẻ em dưới 2 tuổi (hoặc trẻ dưới 6 tuổi), Bộ Y tế và Tổ chức Y tế Thế giới (WHO) khuyến cáo TUYỆT ĐỐI KHÔNG SỬ DỤNG thuốc cầm tiêu chảy nhóm ức chế nhu động ruột như Loperamid?",
    options: [
      "Nguy cơ gây liệt ruột ngộ độc, chướng bụng tắc ruột, làm vi khuẩn và độc tố ứ trệ trong lòng ruột và ức chế thần kinh trung ương gây ngừng thở ở trẻ nhỏ",
      "Loperamid gây tăng tiết dịch ruột dữ dội làm mất nước nhanh hơn",
      "Loperamid phá hủy hoàn toàn men răng đang phát triển của trẻ",
      "Loperamid gây suy thận cấp thể vô niệu do lắng đọng tinh thể"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (trang 203): Loperamid là chất chủ vận thụ thể opioid ngoại vi làm giảm nhu động ruột. Ở trẻ nhỏ, thuốc có thể ngấm qua hàng rào máu não gây ức chế hô hấp, li bì, hôn mê. Mặt khác, làm liệt nhu động ruột ngăn cản tống xuất vi khuẩn và độc tố ra ngoài, dẫn đến ứ đọng dịch trong lòng quai ruột, chướng bụng, hoại tử ruột và nhiễm khuẩn huyết đe dọa tính mạng.",
    reference: "Dls.pdf Trang 12 & SGK Dược Lâm Sàng tr. 203"
  },
  {
    chapter: "Tiêu chảy cấp ở trẻ em",
    level: "Nhận biết",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Liều lượng và thời gian bổ sung Kẽm (Zinc) đường uống được WHO và Bộ Y tế khuyến cáo cho trẻ từ 6 tháng tuổi trở lên bị tiêu chảy cấp là:",
    options: [
      "20 mg nguyên tố kẽm mỗi ngày trong vòng 10 đến 14 ngày liên tục",
      "10 mg nguyên tố kẽm mỗi ngày chỉ uống trong 3 ngày đầu khi còn tiêu chảy",
      "50 mg nguyên tố kẽm mỗi ngày trong vòng 1 tháng",
      "5 mg nguyên tố kẽm uống 1 liều duy nhất"
    ],
    correct: 0,
    explanation: "Theo Hướng dẫn xử trí tiêu chảy của Bộ Y tế và WHO: Bổ sung kẽm giúp tái tạo biểu mô niêm mạc ruột, tăng cường miễn dịch và giảm tái phát tiêu chảy trong các tháng tiếp theo. Liều lượng: Trẻ < 6 tháng dùng 10 mg/ngày; Trẻ >= 6 tháng dùng 20 mg/ngày. Uống liên tục trong 10 đến 14 ngày kể cả khi trẻ đã cầm tiêu chảy.",
    reference: "Dls.pdf Trang 12 (Câu kẽm 10-14 ngày) & SGK Dược Lâm Sàng tr. 202"
  },

  // ==========================================
  // ĐẠI CƯƠNG DƯỢC LÂM SÀNG & QUY ĐỊNH PHÁP LUẬT
  // ==========================================
  {
    chapter: "Đại cương Dược Lâm Sàng & Tổ chức",
    level: "Nhận biết",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Theo Nghị định 131/2020/NĐ-CP của Chính phủ quy định về tổ chức, hoạt động dược lâm sàng của cơ sở khám bệnh, chữa bệnh, vị trí làm việc của Dược sĩ lâm sàng bao gồm:",
    options: [
      "Hoạt động dược lâm sàng tại khoa Dược và hoạt động dược lâm sàng tại các khoa lâm sàng của bệnh viện",
      "Chỉ làm việc tại kho thuốc chẵn và phòng bào chế của bệnh viện",
      "Chỉ trực tiếp bán thuốc tại quầy thuốc dịch vụ của bệnh viện",
      "Chỉ tham gia công tác kiểm nghiệm và thanh tra dược phẩm của Sở Y tế"
    ],
    correct: 0,
    explanation: "Theo Nghị định 131/2020/NĐ-CP (Điều 6 & 7): Hoạt động dược lâm sàng được triển khai tại 2 bộ phận chính: (1) Hoạt động dược lâm sàng tại khoa Dược (xây dựng danh mục, quy trình, thông tin thuốc, giám sát ADR); (2) Hoạt động dược lâm sàng tại các khoa lâm sàng (tham gia đi buồng bệnh, bình ca bệnh, tư vấn lựa chọn thuốc và phác đồ điều trị cho bác sĩ và người bệnh).",
    reference: "Dls.pdf Trang 1 & Nghị định 131/2020/NĐ-CP"
  },
  {
    chapter: "Đại cương Dược Lâm Sàng & Tổ chức",
    level: "Nhận biết",
    source: "DLS_PDF",
    sourceName: "Đề thi Dược Lâm Sàng (Chuẩn Format Dls.pdf)",
    question: "Nhiệm vụ trọng tâm và cốt lõi nhất của Dược sĩ lâm sàng trong nhóm chăm sóc sức khỏe đa ngành (bác sĩ - dược sĩ - điều dưỡng) là gì?",
    options: [
      "Tối ưu hóa phác đồ điều trị bằng thuốc nhằm đạt hiệu quả điều trị cao nhất, đảm bảo an toàn, hợp lý và giảm thiểu chi phí cho người bệnh",
      "Thay thế hoàn toàn vai trò chẩn đoán bệnh của bác sĩ lâm sàng tại giường bệnh",
      "Trực tiếp thực hiện các kỹ thuật tiêm truyền và thay băng vết thương thay cho điều dưỡng",
      "Chỉ chịu trách nhiệm ghi chép và lưu trữ sổ sách nhập xuất thuốc tại kho"
    ],
    correct: 0,
    explanation: "Theo Giáo trình Dược lâm sàng (Chương 1) và định nghĩa của Hội Dược lâm sàng Hoa Kỳ (ACCP): Dược lâm sàng là một chuyên ngành khoa học sức khỏe trong đó Dược sĩ cung cấp dịch vụ chăm sóc người bệnh nhằm tối ưu hóa việc sử dụng thuốc, nâng cao sức khỏe, phòng ngừa bệnh tật và đảm bảo sử dụng thuốc An toàn - Hợp lý - Hiệu quả - Kinh tế.",
    reference: "Dls.pdf Trang 1 & SGK Dược Lâm Sàng tr. 7-12"
  }
];

// Append Part 2 questions with IDs
part2Questions.forEach(q => {
  maxId++;
  q.id = maxId;
  currentBank.push(q);
});

console.log('Appended', part2Questions.length, 'questions from Part 2.');
console.log('New total questions in bank:', currentBank.length);

const dlsCount = currentBank.filter(q => q.source === 'DLS_PDF').length;
console.log('Total DLS_PDF questions in bank now:', dlsCount);

const header = 'const ALL_EXAM_BANK = ';
const footer = ';\n\nif (typeof module !== "undefined" && module.exports) {\n  module.exports = ALL_EXAM_BANK;\n}\n';

fs.writeFileSync(questionsFile, header + JSON.stringify(currentBank, null, 2) + footer, 'utf8');
console.log('Successfully written updated bank to questions_800.js');
