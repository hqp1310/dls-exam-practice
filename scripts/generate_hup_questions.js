// 40 High-Yield Clinical Pharmacy Questions - Đại học Dược Hà Nội (HUP)
// Chuyên đề: Dược động học lâm sàng, TDM, Tương tác thuốc, Thang Naranjo, Hiệu chỉnh liều suy thận Cockcroft-Gault

const HUP_QUESTIONS = [
  {
    chapter: "Dược động học & Suy gan, thận",
    source: "HUP",
    sourceName: "Đại học Dược Hà Nội",
    question: "Theo hướng dẫn TDM của Hiệp hội Dược sĩ Bệnh viện Hoa Kỳ (ASHP) và Bộ Y tế, thông số PK/PD tối ưu nhất để theo dõi hiệu quả và giảm độc tính thận của Vancomycin trong điều trị nhiễm khuẩn MRSA nặng là:",
    options: [
      "Tỉ lệ Cmax / MIC đạt giá trị từ 8 đến 10",
      "AUC24 / MIC đạt mục tiêu từ 400 đến 600 mg·h/L (giả định MIC = 1 mg/L)",
      "Nồng độ đáy (C_trough) duy trì ổn định trong khoảng 5 đến 10 mcg/mL",
      "Thời gian nồng độ thuốc vượt trên MIC (%T > MIC) tối thiểu đạt trên 70% khoảng liều"
    ],
    correct: 1,
    explanation: "ASHP và khuyến cáo Dược lâm sàng hiện đại khuyến cáo theo dõi Vancomycin theo AUC24/MIC từ 400 - 600 mg·h/L bằng phương pháp Bayes hoặc tính toán 2 điểm nồng độ. Trước đây dùng C_trough 15 - 20 mcg/mL nhưng nồng độ này làm tăng nguy cơ tổn thương thận cấp (AKI)."
  },
  {
    chapter: "Dược động học & Suy gan, thận",
    source: "HUP",
    sourceName: "Đại học Dược Hà Nội",
    question: "Liều nạp (Loading dose) của Vancomycin theo khuyến cáo cho bệnh nhân người lớn nhiễm khuẩn nặng/nguy kịch (như sốc nhiễm khuẩn, viêm nội tâm mạc, viêm màng não) là:",
    options: [
      "10 đến 15 mg/kg tính theo cân nặng lý tưởng (IBW)",
      "25 đến 30 mg/kg tính theo cân nặng thực tế (tối đa không quá 2 đến 3 gam)",
      "Cố định liều 1 gam duy nhất cho mọi người bệnh bất kể cân nặng",
      "40 đến 50 mg/kg truyền tĩnh mạch thật nhanh trong vòng 15 phút"
    ],
    correct: 1,
    explanation: "Ở người bệnh nhiễm khuẩn nặng đe dọa tính mạng, để nhanh chóng đạt nồng độ điều trị trong máu cần dùng liều nạp Vancomycin 25 - 30 mg/kg tính theo cân nặng thực tế (TBW), tối đa không vượt quá 2 - 3g và phải truyền chậm (tối thiểu 1g/60 phút) để tránh hội chứng Red Man."
  },
  {
    chapter: "Dược động học & Suy gan, thận",
    source: "HUP",
    sourceName: "Đại học Dược Hà Nội",
    question: "Đối với kháng sinh Aminoglycosid (Gentamicin, Tobramycin), việc áp dụng chế độ liều một lần mỗi ngày (Extended-interval / Once-daily dosing) dựa trên đặc tính dược lực học và dược động học nào sau đây?",
    options: [
      "Tác dụng diệt khuẩn phụ thuộc thời gian (%T > MIC) và thời gian bán thải dài trên 24 giờ",
      "Tác dụng diệt khuẩn phụ thuộc nồng độ (Cmax/MIC) và hiệu ứng hậu kháng sinh (PAE) kéo dài",
      "Thuốc chuyển hóa hoàn toàn qua gan thành chất có hoạt tính diệt khuẩn mạnh hơn",
      "Thuốc không có độc tính tích lũy trên ống lượn gần của thận khi nồng độ đáy tăng cao"
    ],
    correct: 1,
    explanation: "Aminoglycosid diệt khuẩn phụ thuộc nồng độ (mục tiêu Cmax/MIC >= 8 - 10) và có hiệu ứng hậu kháng sinh (PAE) kéo dài. Dùng 1 lần/ngày đạt đỉnh cao giúp diệt khuẩn tối đa, đồng thời nồng độ đáy hạ xuống rất thấp trước liều tiếp theo giúp giảm tích lũy tại vỏ thận và tai trong."
  },
  {
    chapter: "Dược động học & Suy gan, thận",
    source: "HUP",
    sourceName: "Đại học Dược Hà Nội",
    question: "Thời điểm chuẩn xác nhất để lấy mẫu máu định lượng nồng độ đáy (C_trough) của một thuốc khi giám sát TDM là:",
    options: [
      "Ngay sau khi vừa kết thúc truyền tĩnh mạch liều thuốc đầu tiên",
      "Tại thời điểm chính giữa khoảng cách đưa thuốc của liều thứ hai",
      "Trong vòng 30 phút ngay trước khi dùng liều thuốc tiếp theo khi thuốc đã đạt trạng thái ổn định",
      "Sau khi uống thuốc được 1 đến 2 giờ cùng với bữa ăn"
    ],
    correct: 2,
    explanation: "Nồng độ đáy (C_trough) phản ánh nồng độ thấp nhất trong khoảng liều và phải được lấy mẫu ngay trước khi dùng liều kế tiếp (thường trong vòng 30 phút trước liều) sau khi thuốc đã đạt trạng thái ổn định (sau 4 - 5 lần T1/2)."
  },
  {
    chapter: "Dược động học & Suy gan, thận",
    source: "HUP",
    sourceName: "Đại học Dược Hà Nội",
    question: "Một thuốc có thời gian bán thải (T1/2) là 8 giờ và thải trừ theo động học bậc 1. Sau khi bắt đầu truyền tĩnh mạch liên tục với tốc độ không đổi, thời gian cần thiết để nồng độ thuốc đạt trạng thái ổn định (Css ~ 97%) là khoảng:",
    options: [
      "8 đến 12 giờ",
      "16 đến 24 giờ",
      "32 đến 40 giờ (tương đương 4 đến 5 lần T1/2)",
      "72 đến 96 giờ bất kể trị số thời gian bán thải"
    ],
    correct: 2,
    explanation: "Theo dược động học bậc 1, thời gian để đạt trạng thái ổn định (Steady State - Css) chỉ phụ thuộc vào thời gian bán thải: 1 T1/2 đạt 50%, 2 T1/2 đạt 75%, 3 T1/2 đạt 87.5%, 4 T1/2 đạt 93.75%, 5 T1/2 đạt 96.9%. Với T1/2 = 8h, 4 - 5 T1/2 tương ứng 32 - 40 giờ."
  },
  {
    chapter: "Dược động học & Suy gan, thận",
    source: "HUP",
    sourceName: "Đại học Dược Hà Nội",
    question: "Khi tính độ thanh thải creatinin (CrCl) theo công thức Cockcroft-Gault cho một bệnh nhân nam 60 tuổi, nặng 65 kg, có nồng độ creatinin huyết thanh là 1.2 mg/dL, công thức áp dụng đúng là:",
    options: [
      "CrCl = [(140 - 60) × 65] / (72 × 1.2)",
      "CrCl = [(140 - 60) × 65 × 0.85] / (72 × 1.2)",
      "CrCl = [(140 - 60) × 72] / (65 × 1.2)",
      "CrCl = [(140 + 60) × 65] / (72 × 1.2)"
    ],
    correct: 0,
    explanation: "Công thức Cockcroft-Gault ở nam giới: CrCl (mL/phút) = [(140 - Tuổi) × Cân nặng (kg)] / [72 × Scr (mg/dL)]. Ở nữ giới mới nhân thêm hệ số 0.85 do khối lượng cơ ít hơn nam giới khoảng 15%."
  },
  {
    chapter: "Dược động học & Suy gan, thận",
    source: "HUP",
    sourceName: "Đại học Dược Hà Nội",
    question: "Khi áp dụng công thức Cockcroft-Gault để hiệu chỉnh liều thuốc ở bệnh nhân béo phì (BMI ≥ 30 kg/m² hoặc cân nặng thực tế vượt quá 120% cân nặng lý tưởng), loại cân nặng khuyến cáo sử dụng là:",
    options: [
      "Cân nặng thực tế (Actual Body Weight - TBW) vì lượng mỡ giúp đào thải creatinin",
      "Cân nặng hiệu chỉnh (Adjusted Body Weight - ABW = IBW + 0.4 × [TBW - IBW])",
      "Mặc định lấy giá trị cố định 70 kg cho tất cả các đối tượng béo phì",
      "Lấy cân nặng lý tưởng trừ đi 20% lượng mỡ thừa ước tính"
    ],
    correct: 1,
    explanation: "Mô mỡ ít sản xuất creatinin nhưng làm tăng nhẹ thể tích phân bố và tốc độ lọc cầu thận. Dùng TBW sẽ ước tính quá cao CrCl, còn dùng IBW lại ước tính quá thấp. Vì vậy, cân nặng hiệu chỉnh ABW (với hệ số 0.4) là chuẩn xác nhất cho người béo phì."
  },
  {
    chapter: "ADR, Dị ứng & Sốc phản vệ",
    source: "HUP",
    sourceName: "Đại học Dược Hà Nội",
    question: "Theo thang đánh giá mối liên quan giữa thuốc và phản ứng có hại của Naranjo (Naranjo Algorithm), một biến cố bất lợi được kết luận là 'Chắc chắn' (Definite) do thuốc gây ra khi tổng điểm đạt được là:",
    options: [
      "Từ 1 đến 4 điểm",
      "Từ 5 đến 8 điểm",
      "Từ 9 điểm trở lên",
      "Dưới 0 điểm"
    ],
    correct: 2,
    explanation: "Thang Naranjo chia làm 4 mức độ nhân quả: >= 9 điểm: Chắc chắn (Definite); 5 - 8 điểm: Có khả năng (Probable); 1 - 4 điểm: Có thể (Possible); <= 0 điểm: Nghi ngờ / Chưa chắc chắn (Doubtful)."
  },
  {
    chapter: "ADR, Dị ứng & Sốc phản vệ",
    source: "HUP",
    sourceName: "Đại học Dược Hà Nội",
    question: "Phản ứng có hại của thuốc loại A (Type A - Augmented) theo phân loại của Rawlins và Thompson có đặc điểm cốt lõi nào sau đây?",
    options: [
      "Không liên quan đến tác dụng dược lý, không phụ thuộc liều dùng và tỷ lệ tử vong rất cao",
      "Liên quan trực tiếp đến tác dụng dược lý, phụ thuộc liều dùng và thường dự đoán trước được",
      "Chỉ xảy ra khi dùng thuốc kéo dài nhiều năm do hiện tượng tích lũy thuốc trong mô mỡ",
      "Xảy ra sau khi đã ngừng thuốc một thời gian dài dưới dạng dị tật thai nhi hoặc ung thư"
    ],
    correct: 1,
    explanation: "Phản ứng Type A chiếm > 80% các ADR trên lâm sàng, liên quan trực tiếp đến cơ chế dược lý (ví dụ: hạ đường huyết do insulin, xuất huyết do kháng đông), phụ thuộc liều, tiên lượng được và có thể xử trí bằng cách giảm liều."
  },
  {
    chapter: "ADR, Dị ứng & Sốc phản vệ",
    source: "HUP",
    sourceName: "Đại học Dược Hà Nội",
    question: "Hội chứng Red Man do truyền Vancomycin tĩnh mạch quá nhanh được xếp vào loại phản ứng nào và có cơ chế bệnh sinh là gì?",
    options: [
      "Phản ứng dị ứng Type I trung gian qua kháng thể IgE đặc hiệu với phân tử Vancomycin",
      "Phản ứng giả dị ứng do thuốc kích thích trực tiếp tế bào mast phóng thích histamin không qua IgE",
      "Phản ứng tự miễn Type II gây ly giải tế bào hồng cầu và tiểu cầu tại mao mạch ngoại vi",
      "Phản ứng độc tế bào do Vancomycin gắn kết không thuận nghịch vào thụ thể cholinergic da"
    ],
    correct: 1,
    explanation: "Hội chứng Red Man là phản ứng giả dị ứng (pseudo-allergic) do tốc độ truyền quá nhanh kích hoạt giải phóng Histamin trực tiếp từ tế bào mast và bạch cầu ưa base mà không cần kháng thể IgE. Xử trí bằng cách giảm tốc độ truyền (<= 10 mg/phút hoặc <= 1g/giờ) và dùng kháng H1."
  },
  {
    chapter: "Tương tác thuốc & Tương kỵ",
    source: "HUP",
    sourceName: "Đại học Dược Hà Nội",
    question: "Kháng sinh Clarithromycin làm tăng mạnh nồng độ trong máu và nguy cơ tiêu cơ vân cấp (Rhabdomyolysis) của Simvastatin thông qua cơ chế tương tác dược động học nào?",
    options: [
      "Ức chế mạnh enzym chuyển hóa CYP3A4 tại gan và ruột non",
      "Cảm ứng mạnh enzym chuyển hóa CYP2C9 và bơm tống thuốc P-glycoprotein",
      "Cạnh tranh liên kết với albumin huyết tương làm tăng phân đoạn tự do của Simvastatin",
      "Kiềm hóa nước tiểu làm giảm độ thanh thải qua thận của các dẫn chất statin"
    ],
    correct: 0,
    explanation: "Simvastatin và Lovastatin chuyển hóa chủ yếu qua CYP3A4. Clarithromycin và Itraconazole là chất ức chế CYP3A4 rất mạnh, làm tăng AUC của Simvastatin lên 5 - 10 lần, dẫn đến nồng độ đỉnh vượt ngưỡng độc gây ly giải cơ vân cấp và suy thận."
  },
  {
    chapter: "Tương tác thuốc & Tương kỵ",
    source: "HUP",
    sourceName: "Đại học Dược Hà Nội",
    question: "Khi dùng đồng thời Digoxin với Clarithromycin hoặc Amiodaron, nồng độ Digoxin trong huyết tương tăng cao rõ rệt chủ yếu là do cơ chế nào?",
    options: [
      "Cảm ứng enzym CYP2D6 tại microsom gan làm tăng tạo chất chuyển hóa có hoạt tính",
      "Ức chế bơm tống thuốc P-glycoprotein tại ruột và biểu mô ống thận làm giảm bài xuất Digoxin",
      "Làm giảm thể tích phân bố của Digoxin trong các mô xương và cơ vân",
      "Ức chế enzym vận chuyển OATP1B1 làm giữ Digoxin trong lòng mạch"
    ],
    correct: 1,
    explanation: "Digoxin hầu như không chuyển hóa qua CYP mà là cơ chất điển hình của bơm P-glycoprotein (P-gp). Amiodarone, Clarithromycin, Verapamil là chất ức chế P-gp mạnh, làm tăng hấp thu qua ruột và giảm bài tiết qua ống thận, đẩy nồng độ Digoxin tăng gấp đôi."
  },
  {
    chapter: "Tương tác thuốc & Tương kỵ",
    source: "HUP",
    sourceName: "Đại học Dược Hà Nội",
    question: "Bệnh nhân đang duy trì ổn định Theophyllin nếu được chỉ định thêm kháng sinh Ciprofloxacin sẽ đối mặt với nguy cơ ngộ độc co giật do tương tác nào?",
    options: [
      "Ciprofloxacin ức chế mạnh CYP1A2 làm giảm thanh thải Theophyllin",
      "Ciprofloxacin cảm ứng enzym CYP3A4 làm tăng chuyển hóa Theophyllin thành chất độc",
      "Ciprofloxacin cạnh tranh vị trí gắn với thụ thể Adenosin tại thần kinh trung ương",
      "Ciprofloxacin làm toan hóa máu dẫn đến tích lũy Theophyllin tự do trong não bộ"
    ],
    correct: 0,
    explanation: "Theophyllin chuyển hóa tới 90% qua CYP1A2 tại gan. Ciprofloxacin là chất ức chế mạnh enzym CYP1A2, làm độ thanh thải Theophyllin giảm 30 - 50%, dẫn đến nồng độ thuốc vượt ngưỡng độc (> 20 mcg/mL) gây nhịp nhanh thất và co giật tử vong."
  },
  {
    chapter: "Dược động học & Suy gan, thận",
    source: "HUP",
    sourceName: "Đại học Dược Hà Nội",
    question: "Phenytoin biểu hiện dược động học phi tuyến tính (Non-linear pharmacokinetics) ở nồng độ điều trị vì lý do cốt lõi nào sau đây?",
    options: [
      "Quá trình hấp thu qua đường tiêu hóa bị bão hòa hoàn toàn ở liều trên 100 mg",
      "Các enzym chuyển hóa tại gan (CYP2C9/2C19) bị bão hòa theo động học Michaelis-Menten",
      "Tỷ lệ liên kết với protein huyết tương giảm dần theo cấp số nhân khi tăng liều",
      "Thuốc bị bài xuất tích cực qua ống thận với tốc độ không đổi bất kể nồng độ"
    ],
    correct: 1,
    explanation: "Phenytoin tuân theo động học bão hòa Michaelis-Menten: ở khoảng điều trị (10 - 20 mcg/mL), enzym chuyển hóa bị bão hòa. Khi đó, chỉ cần một mức tăng liều nhỏ cũng có thể làm nồng độ huyết tương tăng vọt đột ngột ngoài tầm kiểm soát."
  },
  {
    chapter: "Dược động học & Suy gan, thận",
    source: "HUP",
    sourceName: "Đại học Dược Hà Nội",
    question: "Khoảng nồng độ đáy điều trị trong máu được khuyến cáo hiện nay của Digoxin trong điều trị suy tim mạn tính phân suất tống máu giảm (HFrEF) là:",
    options: [
      "0.5 đến 0.9 ng/mL",
      "1.5 đến 2.5 ng/mL",
      "3.0 đến 5.0 ng/mL",
      "10 đến 20 mcg/mL"
    ],
    correct: 0,
    explanation: "Trong suy tim, thử nghiệm lâm sàng DIG cho thấy nồng độ Digoxin tối ưu là 0.5 - 0.9 ng/mL (giúp cải thiện triệu chứng và giảm tái nhập viện mà không làm tăng tử vong). Mức nồng độ >= 1.2 ng/mL hoặc trên 2.0 ng/mL làm tăng đáng kể nguy cơ loạn nhịp tử vong."
  },
  {
    chapter: "Dược động học & Suy gan, thận",
    source: "HUP",
    sourceName: "Đại học Dược Hà Nội",
    question: "Yếu tố rối loạn điện giải nào sau đây làm tăng rõ rệt độc tính trên tim của Digoxin ngay cả khi nồng độ Digoxin trong máu vẫn nằm trong khoảng điều trị?",
    options: [
      "Tăng Natri máu và tăng Clo máu",
      "Hạ Kali máu, hạ Magie máu và tăng Canxi máu",
      "Tăng Kali máu và hạ Canxi máu",
      "Hạ Natri máu kèm theo toan hô hấp cấp"
    ],
    correct: 1,
    explanation: "Digoxin ức chế bơm Na+/K+-ATPase bằng cách cạnh tranh với ion K+. Khi hạ Kali máu, Digoxin gắn vào bơm bền vững hơn làm tăng độc tính tim. Hạ Magie máu và tăng Canxi máu cũng hiệp đồng làm tăng nguy cơ loạn nhịp thất chết người của Digoxin."
  },
  {
    chapter: "Kháng sinh & Kháng sinh dự phòng",
    source: "HUP",
    sourceName: "Đại học Dược Hà Nội",
    question: "Kháng sinh nhóm Beta-lactam (Penicillin, Cephalosporin, Carbapenem) có hoạt tính diệt khuẩn phụ thuộc thời gian. Mục tiêu PK/PD quan trọng nhất để tối ưu hóa hiệu quả điều trị là:",
    options: [
      "Tối đa hóa tỉ lệ nồng độ đỉnh trên MIC (Cmax / MIC ≥ 10 - 12)",
      "Tối ưu hóa thời gian nồng độ thuốc tự do vượt trên MIC trong khoảng liều (%fT > MIC)",
      "Duy trì AUC24 trên MIC đạt trên 1000 mg·h/L",
      "Rút ngắn thời gian truyền tĩnh mạch xuống dưới 10 phút để tạo nồng độ đỉnh ồ ạt"
    ],
    correct: 1,
    explanation: "Beta-lactam là kháng sinh diệt khuẩn phụ thuộc thời gian. Hiệu quả lâm sàng tương quan chặt chẽ với %fT > MIC (tối thiểu 40 - 70% khoảng liều, với nhiễm khuẩn nặng ở ICU mục tiêu có thể là 100% fT > 4-5x MIC). Do đó, truyền kéo dài hoặc truyền liên tục được áp dụng rộng rãi."
  },
  {
    chapter: "Kháng sinh & Kháng sinh dự phòng",
    source: "HUP",
    sourceName: "Đại học Dược Hà Nội",
    question: "Kháng sinh Colistin (Polymyxin E) dạng tiền chất Colistimethate Sodium (CMS) cần áp dụng liều nạp (Loading dose) nhằm mục đích gì?",
    options: [
      "Vì CMS chuyển hóa chậm thành Colistin có hoạt tính, cần liều nạp để nhanh chóng đạt nồng độ diệt khuẩn trong 24 giờ đầu",
      "Để bão hòa vị trí gắn trên mô mỡ và ngăn chặn hiện tượng dung nạp thuốc sớm",
      "Vì Colistin bị bài xuất hoàn toàn qua gan trong những giờ đầu sau tiêm truyền",
      "Để giảm thiểu độc tính trên thận và thần kinh so với chế độ dùng liều duy trì ngay từ đầu"
    ],
    correct: 0,
    explanation: "CMS là dạng bất hoạt cần thời gian thủy phân chậm in vivo tạo thành Colistin tự do. Nếu không dùng liều nạp (thường 9 triệu UI CMS), nồng độ Colistin huyết tương sẽ rất thấp trong 24 - 48 giờ đầu, dẫn đến thất bại điều trị và gia tăng đề kháng vi khuẩn."
  },
  {
    chapter: "Dược động học & Suy gan, thận",
    source: "HUP",
    sourceName: "Đại học Dược Hà Nội",
    question: "Theo công thức Schwartz cổ điển ước tính mức lọc cầu thận (eGFR) ở trẻ em, thông số cần đo lường bao gồm:",
    options: [
      "Chiều cao của trẻ (cm) và nồng độ Creatinin huyết thanh (mg/dL) kết hợp hằng số k theo lứa tuổi",
      "Cân nặng của trẻ (kg) và diện tích bề mặt cơ thể (m²) đơn thuần",
      "Vòng đầu của trẻ và nồng độ Ure máu 24 giờ",
      "Độ thanh thải Albumin nước tiểu và nồng độ Natri huyết tương"
    ],
    correct: 0,
    explanation: "Công thức Schwartz: eGFR (mL/min/1.73m²) = (k × Chiều cao [cm]) / Scr [mg/dL]. Hệ số k phụ thuộc vào độ tuổi và giới tính (trẻ sơ sinh k=0.45, trẻ em k=0.55, trẻ vị thành niên nam k=0.7)."
  },
  {
    chapter: "Tương tác thuốc & Tương kỵ",
    source: "HUP",
    sourceName: "Đại học Dược Hà Nội",
    question: "Thuốc kháng nấm đường uống Itraconazol dạng viên nang thông thường đòi hỏi môi trường nào tại dạ dày để hòa tan và hấp thu tối đa?",
    options: [
      "Môi trường kiềm hóa mạnh với pH dịch vị trên 6.0",
      "Môi trường acid dịch vị tự nhiên (bị giảm hấp thu nghiêm trọng khi dùng chung với PPI hoặc kháng H2)",
      "Môi trường hoàn toàn trung tính không có dịch vị tiêu hóa",
      "Môi trường nhiều ion kim loại hóa trị hai như Canxi và Nhôm"
    ],
    correct: 1,
    explanation: "Viên nang Itraconazole và Ketoconazole là các base yếu, chỉ tan tốt trong môi trường pH acid dạ dày. Khi dùng chung thuốc ức chế tiết acid (Omeprazole, Famotidine, Antacid), độ tan và sinh khả dụng của Itraconazole giảm tới 70 - 80%."
  },
  {
    chapter: "Dược động học & Suy gan, thận",
    source: "HUP",
    sourceName: "Đại học Dược Hà Nội",
    question: "Khi một thuốc có tỷ lệ liên kết với protein huyết tương cao (> 95%) và thể tích phân bố nhỏ (Vd < 0.2 L/kg) như Warfarin, việc bị một thuốc khác đẩy khỏi vị trí gắn albumin sẽ dẫn đến hậu quả ban đầu là:",
    options: [
      "Nồng độ thuốc dạng tự do (Free drug concentration) tăng đột ngột, làm tăng nguy cơ độc tính trước mắt",
      "Nồng độ toàn phần trong huyết tương tăng gấp 10 lần ngay lập tức",
      "Tốc độ lọc qua cầu thận giảm mạnh dẫn đến tích lũy thuốc vô thời hạn",
      "Thuốc mất hoàn toàn tác dụng sinh học do bị thực bào tại lách"
    ],
    correct: 0,
    explanation: "Với thuốc có liên kết protein cao và khoảng điều trị hẹp, tương tác cạnh tranh gắn albumin làm tăng đột biến nồng độ tự do có hoạt tính dược lý, dễ gây quá liều cấp (ví dụ xuất huyết do Warfarin) trước khi quá trình phân bố lại và tăng thanh thải thiết lập cân bằng mới."
  },
  {
    chapter: "Dược động học & Suy gan, thận",
    source: "HUP",
    sourceName: "Đại học Dược Hà Nội",
    question: "Để tính toán liều nạp (Loading Dose - LD) của một thuốc nhằm đạt ngay nồng độ mục tiêu (C_target) trong huyết tương, công thức đúng là:",
    options: [
      "LD = (Vd × C_target) / F (với Vd là thể tích phân bố, F là sinh khả dụng)",
      "LD = (Cl × C_target) / tau (với Cl là độ thanh thải, tau là khoảng liều)",
      "LD = (T1/2 × C_target) / 0.693",
      "LD = (AUC × C_target) / Vd"
    ],
    correct: 0,
    explanation: "Liều nạp chỉ phụ thuộc vào Thể tích phân bố (Vd) và Nồng độ đích (C_target): LD = (Vd × C_target) / F. Độ thanh thải (Cl) quyết định liều duy trì (MD = Cl × Css / F), chứ không quyết định liều nạp."
  },
  {
    chapter: "ADR, Dị ứng & Sốc phản vệ",
    source: "HUP",
    sourceName: "Đại học Dược Hà Nội",
    question: "Phản ứng có hại của thuốc loại B (Type B - Bizarre) theo phân loại của Rawlins và Thompson có đặc điểm nào sau đây?",
    options: [
      "Tần suất gặp rất cao, phụ thuộc chặt chẽ vào liều lượng dùng hàng ngày",
      "Không dự đoán trước được từ tác dụng dược lý, không phụ thuộc liều và thường qua cơ chế miễn dịch/dị ứng",
      "Chỉ xảy ra khi bệnh nhân ngừng thuốc đột ngột sau thời gian điều trị kéo dài",
      "Xuất hiện muộn sau nhiều năm điều trị dưới dạng dị tật bẩm sinh"
    ],
    correct: 1,
    explanation: "Type B (Bizarre) là phản ứng dị ứng hoặc đặc ứng (idiosyncrasy), không liên quan đến cơ chế dược lý đã biết, không phụ thuộc liều, tỷ lệ mắc thấp nhưng tỷ lệ tử vong cao (ví dụ: sốc phản vệ, hội chứng Stevens-Johnson, suy tủy xương do Cloramphenicol)."
  },
  {
    chapter: "Tương tác thuốc & Tương kỵ",
    source: "HUP",
    sourceName: "Đại học Dược Hà Nội",
    question: "Rifampicin được biết đến trong thực hành dược lâm sàng là một chất có tác động mạnh mẽ nhất đến hệ enzym CYP450 theo hướng nào?",
    options: [
      "Ức chế chọn lọc không hồi phục enzym CYP2D6 tại gan",
      "Cảm ứng mạnh mẽ và toàn diện nhiều enzym CYP (CYP3A4, 2C9, 2C19, 1A2) và P-glycoprotein",
      "Cạnh tranh đào thải tại ống thận với các thuốc acid yếu",
      "Làm biến tính hoàn toàn thụ thể nhân PXR tại tế bào gan"
    ],
    correct: 1,
    explanation: "Rifampicin là chất cảm ứng enzym CYP450 và P-gp mạnh nhất trong lâm sàng thông qua thụ thể PXR. Nó làm tăng tốc độ chuyển hóa của hàng loạt thuốc dùng kèm (Warfarin, thuốc tránh thai, thuốc chống thải ghép, thuốc kháng virus), dẫn đến nồng độ thuốc giảm sâu gây thất bại điều trị."
  },
  {
    chapter: "Tương tác thuốc & Tương kỵ",
    source: "HUP",
    sourceName: "Đại học Dược Hà Nội",
    question: "Tương tác giữa Clopidogrel và Omeprazol làm giảm hiệu lực chống kết tập tiểu cầu của Clopidogrel là do cơ chế nào?",
    options: [
      "Omeprazol làm thay đổi pH dạ dày ngăn cản hòa tan viên nén Clopidogrel",
      "Omeprazol ức chế enzym CYP2C19 cần thiết để chuyển tiền chất Clopidogrel thành chất chuyển hóa có hoạt tính",
      "Omeprazol cạnh tranh liên kết trực tiếp trên thụ thể P2Y12 của tiểu cầu",
      "Omeprazol kích hoạt enzym P-gp tại ruột tống Clopidogrel ra ngoài phân"
    ],
    correct: 1,
    explanation: "Clopidogrel là tiền chất (prodrug), cần được CYP2C19 chuyển hóa thành chất có hoạt tính kháng tiểu cầu. Omeprazole ức chế CYP2C19, làm giảm nồng độ chất có hoạt tính của Clopidogrel, tăng nguy cơ huyết khối tắc stent mạch vành. Pantoprazole ít ức chế CYP2C19 hơn nên được ưu tiên thay thế."
  },
  {
    chapter: "Dược động học & Suy gan, thận",
    source: "HUP",
    sourceName: "Đại học Dược Hà Nội",
    question: "Thông số Dược động học 'Thể tích phân bố' (Volume of Distribution - Vd) của một thuốc có ý nghĩa thực tế lâm sàng quan trọng nhất là:",
    options: [
      "Cho biết thể tích dịch thực tế mà thuốc chiếm chỗ trong các khoang cơ thể",
      "Mức độ phân bố của thuốc vào các mô ngoại vi so với huyết tương và dùng để tính liều nạp",
      "Tốc độ đào thải hoàn toàn hoạt chất qua nước tiểu và đường mật",
      "Khả năng thuốc vượt qua hàng rào lọc cầu thận mà không bị tái hấp thu"
    ],
    correct: 1,
    explanation: "Vd là thể tích biểu kiến (không phải thể tích sinh học thực tế), phản ánh mức độ thuốc rời khỏi huyết tương để vào các mô. Thuốc có Vd lớn (> 3-5 L/kg như Digoxin) tập trung chủ yếu trong mô; Vd nhỏ (~0.1-0.2 L/kg như Aminoglycosid) chủ yếu nằm trong dịch ngoại bào. Vd quyết định liều nạp."
  },
  {
    chapter: "Xét nghiệm lâm sàng & Nhận định KQ",
    source: "HUP",
    sourceName: "Đại học Dược Hà Nội",
    question: "Chỉ số INR (International Normalized Ratio) được chuẩn hóa để theo dõi hiệu quả và an toàn của thuốc chống đông đường uống nào?",
    options: [
      "Heparin không phân đoạn (UFH)",
      "Kháng vitamin K (Warfarin, Acenocoumarol)",
      "Kháng đông đường uống trực tiếp ức chế yếu tố Xa (Rivaroxaban, Apixaban)",
      "Thuốc ức chế trực tiếp Thrombin đường tiêm (Argatroban)"
    ],
    correct: 1,
    explanation: "INR là chỉ số chuẩn hóa quốc tế của thời gian Prothrombin (PT), dùng chuyên biệt để theo dõi thuốc kháng vitamin K (Warfarin). Mục tiêu điều trị thường từ 2.0 - 3.0 (hoặc 2.5 - 3.5 với van tim cơ học). Heparin UFH thì theo dõi bằng aPTT."
  },
  {
    chapter: "Xét nghiệm lâm sàng & Nhận định KQ",
    source: "HUP",
    sourceName: "Đại học Dược Hà Nội",
    question: "Xét nghiệm aPTT (thời gian thromboplastin một phần hoạt hóa) được sử dụng chuẩn mực để theo dõi và hiệu chỉnh liều của thuốc chống đông nào sau đây?",
    options: [
      "Heparin trọng lượng phân tử thấp (Enoxaparin)",
      "Heparin không phân đoạn đường tĩnh mạch (Unfractionated Heparin - UFH)",
      "Aspirin liều thấp 81 mg chống kết tập tiểu cầu",
      "Dabigatran etexilate đường uống"
    ],
    correct: 1,
    explanation: "Heparin không phân đoạn (UFH) đường truyền tĩnh mạch đòi hỏi theo dõi sát bằng xét nghiệm aPTT (mục tiêu thường gấp 1.5 - 2.5 lần chứng) mỗi 6 giờ cho tới khi đạt mức ổn định."
  },
  {
    chapter: "Xét nghiệm lâm sàng & Nhận định KQ",
    source: "HUP",
    sourceName: "Đại học Dược Hà Nội",
    question: "Khi cần giám sát tác dụng chống đông của Heparin trọng lượng phân tử thấp (LMWH như Enoxaparin) ở đối tượng đặc biệt (suy thận nặng, phụ nữ có thai hoặc béo phì nặng), xét nghiệm phù hợp nhất là:",
    options: [
      "Định lượng hoạt tính kháng yếu tố Xa (Anti-Xa assay)",
      "Thời gian máu đông Lee-White",
      "Đo thời gian prothrombin (PT/INR)",
      "Đếm số lượng hồng cầu lưới trong máu ngoại vi"
    ],
    correct: 0,
    explanation: "LMWH có tác dụng ức chế chọn lọc yếu tố Xa nhiều hơn IIa nên aPTT ít thay đổi. Khi cần theo dõi ở đối tượng nguy cơ cao (phụ nữ mang thai, suy thận CrCl < 30 mL/phút, béo phì), xét nghiệm chuẩn xác nhất là nồng độ Anti-Xa (đỉnh sau tiêm dưới da 4 giờ đạt 0.6 - 1.0 IU/mL)."
  },
  {
    chapter: "ADR, Dị ứng & Sốc phản vệ",
    source: "HUP",
    sourceName: "Đại học Dược Hà Nội",
    question: "Phân loại ADR theo nguyên nhân phát sinh Type C (Continuing / Chronic) có đặc tính nhận diện nào sau đây?",
    options: [
      "Xuất hiện tức thì sau mũi tiêm đầu tiên do cơ chế sốc phản vệ",
      "Liên quan đến liều tích lũy và thời gian dùng thuốc kéo dài (ví dụ: hội chứng Cushing do lạm dụng Glucocorticoid)",
      "Chỉ xảy ra khi ngừng thuốc đột ngột do hiện tượng dội ngược",
      "Phát sinh sau nhiều thế hệ do đột biến nhiễm sắc thể dòng tế bào mầm"
    ],
    correct: 1,
    explanation: "Phản ứng Type C (Chronic / Dose and Time-related) liên quan chặt chẽ đến tổng liều tích lũy và thời gian sử dụng thuốc kéo dài, ví dụ như ức chế trục hạ đồi - tuyến yên - thượng thận (HPA) do Corticoid, loãng xương, hoặc bệnh thận do dùng kéo dài NSAID/giảm đau."
  },
  {
    chapter: "ADR, Dị ứng & Sốc phản vệ",
    source: "HUP",
    sourceName: "Đại học Dược Hà Nội",
    question: "Phản ứng có hại Type D (Delayed) theo phân loại của Rawlins và Thompson thường biểu hiện dưới dạng nào?",
    options: [
      "Co thắt thanh quản và trụy mạch cấp tính",
      "Tác dụng gây quái thai (teratogenicity) hoặc gây ung thư xuất hiện muộn sau khi dùng thuốc",
      "Hội chứng cai thuốc xuất hiện ngay sau khi ngắt liều cuối cùng",
      "Tăng huyết áp dội ngược sau khi quên một liều Clonidin"
    ],
    correct: 1,
    explanation: "Type D (Delayed) xuất hiện muộn màng sau thời gian phơi nhiễm thuốc (thậm chí sau khi đã ngừng thuốc từ lâu), điển hình là tác dụng gây dị tật thai nhi (quái thai do Thalidomide, Isotretinoin) hoặc nguy cơ gây ung thư thứ phát (ung thư biểu mô âm đạo ở con gái có mẹ dùng DES)."
  },
  {
    chapter: "ADR, Dị ứng & Sốc phản vệ",
    source: "HUP",
    sourceName: "Đại học Dược Hà Nội",
    question: "Phản ứng có hại Type E (End of use) theo phân loại Rawlins & Thompson được minh họa điển hình bởi hiện tượng nào?",
    options: [
      "Suy thượng thận cấp khi ngừng đột ngột Corticoid dùng kéo dài hoặc nhịp tim nhanh dội ngược khi ngừng đột ngột chẹn beta",
      "Phản ứng hoại tử thượng bì nhiễm độc (TEN) xảy ra sau 2 tuần dùng Allopurinol",
      "Xuất huyết tiêu hóa do quá liều dẫn chất kháng vitamin K",
      "Tổn thương thính lực vĩnh viễn sau liệu trình Amikacin dài ngày"
    ],
    correct: 0,
    explanation: "Type E (End of use) xảy ra khi ngừng thuốc đột ngột (phản ứng dội ngược / rebound hoặc hội chứng cai), ví dụ suy thượng thận cấp do ngừng Glucocorticoid, thiếu máu cơ tim/tăng huyết áp dội ngược do dừng thuốc chẹn beta, hoặc mất ngủ tái phát khi dừng Benzodiazepin."
  },
  {
    chapter: "Dược động học & Suy gan, thận",
    source: "HUP",
    sourceName: "Đại học Dược Hà Nội",
    question: "Ở bệnh nhân xơ gan nặng (Child-Pugh C), sinh khả dụng qua đường uống của những thuốc có tỷ lệ chuyển hóa bước một qua gan cao (High extraction ratio) như Morphin hay Propranolol sẽ thay đổi thế nào?",
    options: [
      "Giảm mạnh do tế bào gan tăng cường bắt giữ thuốc",
      "Tăng vọt rõ rệt do giảm chuyển hóa bước một và có tuần hoàn bàng hệ cửa - chủ",
      "Không thay đổi vì các enzym CYP450 được bảo toàn hoàn toàn ở bệnh nhân xơ gan",
      "Bị triệt tiêu hoàn toàn khiến thuốc không thể vào được đại tuần hoàn"
    ],
    correct: 1,
    explanation: "Thuốc có hệ số ly trích gan cao (E > 0.7 như Propranolol, Morphine) bình thường bị chuyển hóa bước đầu qua gan phần lớn khi uống. Ở bệnh nhân xơ gan nặng, dòng máu qua gan giảm và có thông nối cửa - chủ, thuốc đi thẳng vào đại tuần hoàn làm sinh khả dụng tăng vọt gấp nhiều lần, dễ gây ngộ độc hôn mê gan."
  },
  {
    chapter: "Dược động học & Suy gan, thận",
    source: "HUP",
    sourceName: "Đại học Dược Hà Nội",
    question: "Tại sao liều khởi đầu của các thuốc tan nhiều trong nước (Hydrophilic drugs như Aminoglycosid) ở bệnh nhân sốc nhiễm khuẩn nặng thường cần phải tăng cao hơn so với bình thường?",
    options: [
      "Vì thể tích phân bố (Vd) của dịch ngoại bào tăng mạnh do hiện tượng rò rỉ mao mạch và bù dịch tích cực",
      "Vì độ thanh thải qua thận tăng gấp 10 lần ở pha đầu của sốc nhiễm khuẩn",
      "Vì thuốc bị enzym nội bào thực bào phân hủy ngay trong lòng mạch",
      "Vì thuốc bị gắn kết bất thuận nghịch vào các thụ thể Toll-like trên bạch cầu đa nhân"
    ],
    correct: 0,
    explanation: "Trong sốc nhiễm khuẩn, hội chứng rò rỉ mao mạch toàn thân và việc truyền lượng lớn dịch tinh thể làm thể tích phân bố Vd của các thuốc thân nước (Aminoglycosid, Beta-lactam) tăng vọt. Nếu không tăng liều khởi đầu (ví dụ Amikacin dùng tới 25 - 30 mg/kg), nồng độ đỉnh trong máu sẽ không đạt ngưỡng diệt khuẩn."
  },
  {
    chapter: "Tương tác thuốc & Tương kỵ",
    source: "HUP",
    sourceName: "Đại học Dược Hà Nội",
    question: "Kháng sinh Ceftriaxon chống chỉ định tuyệt đối phối hợp cùng lúc hoặc truyền cùng đường truyền với dung dịch chứa Canxi (như Ringer Lactat) ở đối tượng nào?",
    options: [
      "Trẻ sơ sinh (≤ 28 ngày tuổi) do nguy cơ kết tủa muối Ceftriaxon-Canxi gây tử vong tại phổi và thận",
      "Bệnh nhân cao tuổi trên 80 tuổi mắc bệnh sa sút trí tuệ",
      "Người bệnh suy giáp đang điều trị bằng Levothyroxin",
      "Phụ nữ đang trong thời kỳ cho con bú sau 6 tháng đầu"
    ],
    correct: 0,
    explanation: "FDA và Bộ Y tế cảnh báo chống chỉ định tuyệt đối phối hợp Ceftriaxone với bất kỳ chế phẩm chứa Canxi nào qua đường tĩnh mạch ở trẻ sơ sinh (<= 28 ngày tuổi), kể cả truyền khác đường truyền hay khác thời điểm, do nguy cơ tạo kết tủa tinh thể không tan trong vi mạch phổi và thận gây tử vong."
  },
  {
    chapter: "Kháng sinh & Kháng sinh dự phòng",
    source: "HUP",
    sourceName: "Đại học Dược Hà Nội",
    question: "Trong nhiễm khuẩn do tụ cầu vàng kháng Methicillin (MRSA), nồng độ ức chế tối thiểu (MIC) của Vancomycin được coi là điểm cắt nhạy cảm theo tiêu chuẩn của CLSI là:",
    options: [
      "MIC ≤ 2 mcg/mL",
      "MIC ≤ 8 mcg/mL",
      "MIC ≤ 16 mcg/mL",
      "MIC ≤ 32 mcg/mL"
    ],
    correct: 0,
    explanation: "CLSI quy định điểm gãy nhạy cảm của Vancomycin với S. aureus là MIC <= 2 mcg/mL. Nếu MIC từ 4 - 8 mcg/mL là chủng trung gian (VISA), MIC >= 16 mcg/mL là kháng thuốc (VRSA). Tuy nhiên, khi MIC = 2 mcg/mL, hiệu quả của Vancomycin đã giảm rõ và khó đạt mục tiêu AUC/MIC >= 400 an toàn, nên cân nhắc đổi thuốc (Daptomycin, Linezolid)."
  },
  {
    chapter: "Tương tác thuốc & Tương kỵ",
    source: "HUP",
    sourceName: "Đại học Dược Hà Nội",
    question: "Tương tác giữa thuốc ức chế enzym MAO (như Selegilin, Phenelzin) và các thực phẩm giàu Tyramin (như phô mai lên men, rượu vang đỏ) gây ra biến chứng nguy hiểm nào?",
    options: [
      "Hạ đường huyết nghiêm trọng dẫn đến co giật và hôn mê sâu",
      "Cơn tăng huyết áp kịch phát ác tính (Hypertensive crisis) và xuất huyết não",
      "Hội chứng Stevens-Johnson hoại tử bong tróc niêm mạc toàn thân",
      "Tê liệt thần kinh vận động ngoại biên tạm thời"
    ],
    correct: 1,
    explanation: "Tyramine bình thường bị MAO ở ruột và gan giáng hóa. Khi dùng thuốc ức chế MAO, Tyramine không bị phá hủy mà hấp thu ồ ạt vào máu, kích thích giải phóng một lượng khổng lồ Noradrenaline từ các túi synap thần kinh giao cảm, gây cơn bão co mạch và tăng huyết áp kịch phát tử vong."
  },
  {
    chapter: "Dược động học & Suy gan, thận",
    source: "HUP",
    sourceName: "Đại học Dược Hà Nội",
    question: "Kháng sinh Quinolon (Ciprofloxacin, Levofloxacin) và Tetracyclin bị giảm hấp thu đường uống nghiêm trọng khi dùng chung với các chế phẩm chứa ion kim loại hóa trị 2 hoặc 3 (Al³⁺, Mg²⁺, Ca²⁺, Fe²⁺) do cơ chế nào?",
    options: [
      "Hiện tượng tạo phức chelat không tan và không thể hấp thu qua niêm mạc ruột",
      "Sự cạnh tranh vận chuyển tích cực qua chất mang peptide PEPT1",
      "Ion kim loại phá hủy trực tiếp vòng quinolon và nhân bốn vòng tetracyclin",
      "Các ion kim loại làm đông vón chất nhầy bảo vệ niêm mạc ruột non"
    ],
    correct: 0,
    explanation: "Ciprofloxacin và Tetracyclin tạo phức chelat rất bền, không hòa tan với các cation đa hóa trị (Ca2+, Mg2+, Al3+, Fe2+, Zn2+). Hậu quả là nồng độ kháng sinh hấp thu vào máu giảm tới 80 - 90%, dẫn đến thất bại điều trị. Cần uống cách xa tối thiểu 2 giờ trước hoặc 4-6 giờ sau antacid/sắt."
  },
  {
    chapter: "Dược động học & Suy gan, thận",
    source: "HUP",
    sourceName: "Đại học Dược Hà Nội",
    question: "Độ thanh thải toàn phần của cơ thể (Total Body Clearance - Cl) của một thuốc được định nghĩa chính xác nhất theo dược động học là:",
    options: [
      "Lượng thuốc tuyệt đối bị loại bỏ ra khỏi cơ thể trong một đơn vị thời gian (mg/phút)",
      "Thể tích huyết tương được cơ thể làm sạch thuốc hoàn toàn trong một đơn vị thời gian (mL/phút hoặc L/giờ)",
      "Phần trăm liều thuốc được lọc qua màng cầu thận trong một chu kỳ tuần hoàn",
      "Tỷ số giữa nồng độ thuốc trong nước tiểu và nồng độ thuốc trong huyết tương"
    ],
    correct: 1,
    explanation: "Độ thanh thải (Clearance) là một thể tích biểu kiến: thể tích dịch sinh học (huyết tương) được cơ thể loại bỏ sạch thuốc hoàn toàn trong một đơn vị thời gian (mL/phút hoặc L/h). Cl là thông số quyết định liều duy trì để duy trì nồng độ thuốc ổn định (Rate of elimination = Cl × C)."
  },
  {
    chapter: "Xét nghiệm lâm sàng & Nhận định KQ",
    source: "HUP",
    sourceName: "Đại học Dược Hà Nội",
    question: "Khi điều trị Tăng lipid máu bằng Statin phối hợp với Fibrat (như Fenofibrat), chỉ số xét nghiệm men cơ nào cần được giám sát chặt chẽ nhất để phát hiện sớm tổn thương cơ vân?",
    options: [
      "Alanine aminotransferase (ALT)",
      "Creatine kinase (CK hoặc CPK)",
      "Alkaline phosphatase (ALP)",
      "Lactate dehydrogenase (LDH)"
    ],
    correct: 1,
    explanation: "Creatine kinase (CK) là men đặc hiệu giải phóng từ cơ vân. Khi phối hợp Statin với Fibrat (đặc biệt Gemfibrozil chống chỉ định, Fenofibrat an toàn hơn nhưng vẫn cần giám sát), nếu bệnh nhân đau cơ kèm CK tăng gấp trên 5 - 10 lần giới hạn trên bình thường (ULN) thì phải ngừng thuốc ngay để tránh tiêu cơ vân cấp và suy thận."
  }
];

module.exports = HUP_QUESTIONS;
