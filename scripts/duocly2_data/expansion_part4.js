// NGÂN HÀNG DƯỢC LÝ 2 - MỞ RỘNG PHẦN 4: NỘI TIẾT, TIỂU ĐƯỜNG, ĐÔNG MÁU & THIẾU MÁU (Bài 13, 14, 15, 17)
// Tiêu chuẩn: Chuẩn giáo trình Dược lý 2 Bộ Y tế, không mở ngoặc đơn gợi ý ở đáp án.

module.exports = [
  // =========================================================================
  // BÀI 13: HORMON VÀ THUỐC ĐIỀU CHỈNH NỘI TIẾT (BỔ SUNG)
  // =========================================================================
  {
    chapter: "Hormon",
    level: "Nhận biết",
    question: "Các hormon có bản chất là steroid (như cortisol, aldosteron, estrogen, testosteron) có đặc điểm thụ thể và cơ chế hoạt động phân tử là gì?",
    options: [
      "Khuếch tán qua màng tế bào gắn vào thụ thể nội bào (trong bào tương hoặc nhân) và điều hòa quá trình phiên mã gen",
      "Gắn vào thụ thể bắt cặp protein G trên màng tế bào làm tăng tổng hợp AMP vòng",
      "Mở trực tiếp kênh ion calci trên màng sinh chất trong vòng vài phần nghìn giây",
      "Kích hoạt chuỗi phản ứng enzym ly giải màng tế bào đích"
    ],
    correct: 0,
    explanation: "Do có bản chất lipid tan tốt trong mỡ, các hormon steroid dễ dàng khuếch tán qua màng lipid kép vào bên trong tế bào, gắn vào thụ thể đặc hiệu trong bào tương hoặc trong nhân tạo phức hợp hormon - thụ thể, phức hợp này gắn vào trình tự HRE trên ADN điều hòa phiên mã tạo mARN.",
    reference: "Sách Dược lý 2 tr. 283"
  },
  {
    chapter: "Hormon",
    level: "Nhận biết",
    question: "Cơ chế tránh thai cơ bản của thuốc tránh thai phối hợp dạng uống (chứa Estrogen và Progestin) là gì?",
    options: [
      "Ức chế bài tiết hormon giải phóng GnRH và ức chế tiết FSH, LH của tuyến yên qua cơ chế điều hòa ngược âm tính làm ngăn cản sự rụng trứng",
      "Tiêu diệt trực tiếp tinh trùng ngay trong lòng âm đạo",
      "Làm tan rã lớp niêm mạc tử cung gây chảy máu liên tục",
      "Gây tắc nghẽn cơ học vĩnh viễn vòi trứng"
    ],
    correct: 0,
    explanation: "Estrogen và progestin ngoại sinh nồng độ ổn định tạo phản hồi ức chế âm tính (negative feedback) lên vùng dưới đồi và tuyến yên, làm triệt tiêu đỉnh phóng thích LH giữa chu kỳ kinh nguyệt, do đó ngăn chặn hoàn toàn hiện tượng rụng trứng.",
    reference: "Sách Dược lý 2 tr. 315-316"
  },
  {
    chapter: "Hormon",
    level: "Vận dụng",
    question: "Dung dịch Lugol (chứa Iod và Kali iodid) được chỉ định dùng trước phẫu thuật cắt tuyến giáp điều trị bệnh Basedow khoảng 10 - 14 ngày nhằm mục đích gì?",
    options: [
      "Làm giảm tưới máu, giảm thể tích mạch máu và làm săn chắc tuyến giáp để hạn chế chảy máu trong mổ",
      "Tiêu diệt hoàn toàn các tế bào ung thư giáp tiềm ẩn",
      "Tăng cường tiết thyroxin để tránh suy giáp trong khi gây mê",
      "Kích thích tuyến cận giáp tăng tiết parathormon"
    ],
    correct: 0,
    explanation: "Liều cao iodid gây hiệu ứng Wolff-Chaikoff ức chế tạm thời sự giải phóng hormon giáp và ức chế sinh mạch, làm co các mạch máu trong nhu mô giáp, làm tuyến giáp thu nhỏ và săn chắc lại, giúp phẫu thuật viên cắt tuyến giáp dễ dàng và tránh mất máu ồ ạt.",
    reference: "Sách Dược lý 2 tr. 308"
  },
  {
    chapter: "Hormon",
    level: "Nhận biết",
    question: "Levothyroxin (L-T4) là thuốc điều trị thay thế suốt đời trong bệnh suy giáp mạn tính, bệnh nhân cần được hướng dẫn thời điểm uống thuốc như thế nào?",
    options: [
      "Uống vào buổi sáng sớm lúc bụng đói cách bữa ăn sáng ít nhất 30 đến 60 phút",
      "Uống ngay sau khi ăn no bữa ăn trưa",
      "Uống chung cùng viên bổ sung Canxi và Sắt",
      "Uống vào lúc nửa đêm cùng một ly sữa đặc giàu đạm"
    ],
    correct: 0,
    explanation: "Levothyroxin hấp thu tốt nhất ở dạ dày khi môi trường có tính acid lúc đói. Thức ăn, sữa và các ion đa hóa trị như Calci, Sắt gắn kết tạo phức không tan làm giảm mạnh hấp thu T4. Do đó bắt buộc phải uống lúc sáng sớm trước khi ăn sáng ít nhất 30-60 phút.",
    reference: "Sách Dược lý 2 tr. 302-303"
  },

  // =========================================================================
  // BÀI 14: THUỐC HẠ GLUCOSE MÁU (BỔ SUNG)
  // =========================================================================
  {
    chapter: "Thuốc hạ glucose máu",
    level: "Nhận biết",
    question: "Đặc điểm nhận dạng cảm quan quan trọng của Insulin NPH (Isophane) và các loại insulin premix trộn sẵn khác với insulin Regular là gì?",
    options: [
      "Là dung dịch hỗn dịch có màu đục như nước vo gạo, bắt buộc phải lắc hoặc lăn nhẹ ống thuốc trước khi tiêm",
      "Là dung dịch hoàn toàn trong suốt như nước cất không bao giờ được lắc",
      "Có màu vàng huỳnh quang phát sáng trong bóng tối",
      "Có dạng gel đông đặc cần đun nóng trước khi tiêm"
    ],
    correct: 0,
    explanation: "Insulin Regular và các analog hòa tan là dung dịch trong suốt. Insulin NPH là hỗn dịch chứa protamin tạo tinh thể làm chậm hấp thu nên có màu đục đồng nhất. Trước khi tiêm, người bệnh bắt buộc phải lăn nhẹ bút tiêm giữa hai lòng bàn tay để phân tán đều hạt thuốc.",
    reference: "Sách Dược lý 2 tr. 295"
  },
  {
    chapter: "Thuốc hạ glucose máu",
    level: "Vận dụng",
    question: "Khi bệnh nhân đái tháo đường bị hạ glucose máu nặng dẫn đến lơ mơ hoặc hôn mê, biện pháp xử trí cấp cứu khẩn cấp nào là CHỐNG CHỈ ĐỊNH?",
    options: [
      "Cố ép bệnh nhân uống nước đường hoặc cho ngậm kẹo qua đường miệng",
      "Tiêm tĩnh mạch dung dịch Glucose ưu trương 20% hoặc 30%",
      "Tiêm bắp hoặc tiêm dưới da 1mg Glucagon",
      "Đặt bệnh nhân nằm nghiêng an toàn để tránh hít sặc"
    ],
    correct: 0,
    explanation: "Khi bệnh nhân đã rối loạn tri giác hoặc hôn mê, phản xạ nuốt và đóng thanh môn bị ức chế. Việc cố đổ nước đường vào miệng bệnh nhân sẽ làm nước đường tràn vào khí phế quản gây sặc nghẹt thở, viêm phổi hít tử vong. Bắt buộc phải cấp cứu bằng tiêm truyền tĩnh mạch glucose hoặc tiêm glucagon.",
    reference: "Sách Dược lý 2 tr. 296"
  },
  {
    chapter: "Thuốc hạ glucose máu",
    level: "Nhận biết",
    question: "Thuốc hạ đường huyết nhóm Sulfonylurea nào sau đây có thời gian tác dụng trung bình, được chuyển hóa và thải trừ cân bằng qua cả gan và thận, ít gây nguy cơ hạ đường huyết nặng nhất?",
    options: [
      "Gliclazid",
      "Chlorpropamid",
      "Glibenclamid",
      "Tolbutamid"
    ],
    correct: 0,
    explanation: "Gliclazid (biệt dược Diamicron MR) kích thích tiết insulin phụ thuộc nồng độ glucose tốt hơn và phục hồi đỉnh tiết sớm của insulin, đào thải cân bằng nên có nguy cơ gây biến chứng hạ đường huyết thấp hơn rõ rệt so với Glibenclamid và Chlorpropamid.",
    reference: "Sách Dược lý 2 tr. 297"
  },

  // =========================================================================
  // BÀI 15: THUỐC TÁC DỤNG TRÊN QUÁ TRÌNH ĐÔNG MÁU VÀ TIÊU FIBRIN (BỔ SUNG)
  // =========================================================================
  {
    chapter: "Thuốc/QT đông cầm máu",
    level: "Vận dụng cao",
    question: "Hội chứng giảm tiểu cầu do Heparin (HIT - Heparin-Induced Thrombocytopenia) typ II là một biến chứng miễn dịch nguy hiểm. Nghịch lý lâm sàng của hội chứng này là gì?",
    options: [
      "Số lượng tiểu cầu giảm sâu nhưng bệnh nhân lại đối mặt với nguy cơ huyết khối tắc mạch lan tỏa đe dọa tử vong",
      "Máu chảy đầm đìa khắp các niêm mạc nhưng thời gian đông máu lại rút ngắn",
      "Bệnh nhân bị tan máu cấp tính nhưng hồng cầu lưới lại giảm về 0",
      "Tiểu cầu giảm nhưng nồng độ fibrinogen trong huyết tương tăng gấp 10 lần"
    ],
    correct: 0,
    explanation: "HIT typ II xảy ra do hình thành kháng thể IgG kháng phức hợp Heparin-PF4. Kháng thể này kích hoạt mạnh mẽ các tiểu cầu còn lại giải phóng vi hạt procoagulant, dẫn tới nghịch lý: tiểu cầu bị tiêu thụ làm số lượng giảm nhưng lại bùng phát huyết khối tắc mạch động tĩnh mạch ồ ạt.",
    reference: "Sách Dược lý 2 tr. 116-117"
  },
  {
    chapter: "Thuốc/QT đông cầm máu",
    level: "Nhận biết",
    question: "Chất đối kháng đặc hiệu (antidote) được chỉ định để trung hòa khẩn cấp tác dụng chống đông của thuốc ức chế trực tiếp thrombin đường uống Dabigatran là gì?",
    options: [
      "Idarucizumab",
      "Andexanet alfa",
      "Protamin sulfat",
      "Vitamin K1"
    ],
    correct: 0,
    explanation: "Idarucizumab (Praxbind) là một kháng thể đơn dòng nhân hóa dạng phân đoạn Fab, có ái lực gắn với Dabigatran mạnh gấp 350 lần so với thrombin, giúp trung hòa hoàn toàn tác dụng chống đông của dabigatran trong vòng vài phút.",
    reference: "Sách Dược lý 2 tr. 121"
  },
  {
    chapter: "Thuốc/QT đông cầm máu",
    level: "Nhận biết",
    question: "Acid Tranexamic là thuốc cầm máu có cơ chế tác dụng chống tiêu fibrin như thế nào?",
    options: [
      "Cạnh tranh chiếm giữ vị trí gắn lysin trên phân tử plasminogen, ngăn cản hoạt hóa plasminogen thành plasmin",
      "Gắn trực tiếp vào yếu tố VIII làm tăng tốc độ đông máu nội sinh",
      "Kích thích tủy xương tăng sản xuất tiểu cầu trong vòng 30 phút",
      "Làm co thắt cơ học toàn bộ các động mạch lớn đang chảy máu"
    ],
    correct: 0,
    explanation: "Acid Tranexamic gắn cạnh tranh vào vị trí gắn lysin của plasminogen và plasmin, ngăn cản plasmin liên kết với sợi huyết fibrin, làm chậm hoặc ức chế sự tiêu sợi huyết, bảo vệ cục máu đông fibrin không bị tan rã giúp cầm máu hiệu quả.",
    reference: "Sách Dược lý 2 tr. 126"
  },

  // =========================================================================
  // BÀI 17: THUỐC CHỮA THIẾU MÁU (BỔ SUNG)
  // =========================================================================
  {
    chapter: "Thuốc chữa thiếu máu",
    level: "Vận dụng",
    question: "Bệnh nhân sau phẫu thuật cắt toàn bộ dạ dày do ung thư dạ dày bắt buộc phải được bổ sung định kỳ suốt đời Vitamin B12 theo đường nào sau đây?",
    options: [
      "Tiêm bắp sâu",
      "Uống viên nén thông thường",
      "Uống dạng siro hòa tan",
      "Ngậm dưới lưỡi dạng kẹo"
    ],
    correct: 0,
    explanation: "Dạ dày bị cắt toàn bộ đồng nghĩa với việc mất hoàn toàn tế bào viền tiết yếu tố nội tại Castle. Không có yếu tố nội, vitamin B12 uống vào sẽ không thể kết hợp để hấp thu tại hồi tràng. Do đó bắt buộc phải tiêm bắp định kỳ (1-3 tháng/lần) suốt đời.",
    reference: "Sách Dược lý 2 tr. 128"
  },
  {
    chapter: "Thuốc chữa thiếu máu",
    level: "Vận dụng",
    question: "Khi điều trị thiếu máu do thiếu sắt bằng các chế phẩm sắt đường uống, dấu hiệu cảm quan bình thường nào phân cần được giải thích trước cho bệnh nhân để tránh lo lắng?",
    options: [
      "Phân có màu đen sẫm hoặc xám đen nhưng không kèm nhầy máu",
      "Phân có màu trắng bệch như phân cò",
      "Phân có màu đỏ tươi như máu mới chảy",
      "Phân có mùi hôi tanh nồng nặc và có bọt khí"
    ],
    correct: 0,
    explanation: "Một lượng lớn ion sắt không hấp thu hết trong lòng ruột sẽ phản ứng với khí hydro sulfid (H2S) do vi khuẩn tạo ra sinh ra sắt sulfid (FeS) có màu đen, làm phân có màu đen sẫm. Hiện tượng này hoàn toàn lành tính nhưng cần phân biệt với xuất huyết tiêu hóa.",
    reference: "Sách Dược lý 2 tr. 127"
  }
];

