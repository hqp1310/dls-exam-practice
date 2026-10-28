const FLASHCARD_DATA = [
  {
    "id": 1,
    "topic": "Loãng xương",
    "q": "Cơ chế tác dụng của Bisphosphonat?",
    "a": "Ức chế enzym farnesyl pyrophosphate synthase (FPPS), làm ngừng quá trình prenyl hóa protein và gây chết theo chương trình (apoptosis) của hủy cốt bào."
  },
  {
    "id": 2,
    "topic": "Loãng xương",
    "q": "TDKMM chung của Bisphosphonat?",
    "a": "Rối loạn tiêu hóa, trào ngược thực quản, viêm loét thực quản, triệu chứng giả cúm khi tiêm, suy thận. Dùng >5 năm: hoại tử xương hàm (ONJ), gãy xương đùi không điển hình."
  },
  {
    "id": 3,
    "topic": "Loãng xương",
    "q": "BN điều trị Alendronat 5 năm có nguy cơ gãy xương nên dùng liệu pháp nào thay thế?",
    "a": "Kỳ nghỉ thuốc (drug holiday), hoặc chuyển sang Denosumab / Raloxifen / Teriparatide."
  },
  {
    "id": 4,
    "topic": "Loãng xương",
    "q": "BN nữ có T-score < -2.5, dự phòng/điều trị loãng xương dùng hormon gì?",
    "a": "Estrogen (ở phụ nữ mãn kinh) hoặc SERM (Raloxifen) hoặc Bisphosphonat."
  },
  {
    "id": 5,
    "topic": "Loãng xương",
    "q": "Dạng dùng và liều của Alendronate?",
    "a": "Viên nén, viên nén sủi: 5mg, 10mg, 35mg, 40mg, 70mg; Dung dịch uống 70mg (uống 70mg/tuần hoặc 10mg/ngày)."
  },
  {
    "id": 6,
    "topic": "Loãng xương",
    "q": "Lưu ý quan trọng khi dùng thuốc Alendronat đường uống?",
    "a": "Uống buổi sáng bụng đói với 1 cốc nước đầy (200ml), không nằm trong ít nhất 30-60 phút để tránh loét thực quản."
  },
  {
    "id": 7,
    "topic": "Loãng xương",
    "q": "Thuốc cho người có nguy cơ gãy xương rất cao / loãng xương nặng?",
    "a": "Tương tự PTH (Teriparatide, Abaloparatide) hoặc kháng thể kháng Sclerostin (Romosozumab)."
  },
  {
    "id": 8,
    "topic": "Loãng xương",
    "q": "ADR chung của hầu hết thuốc chống hủy xương?",
    "a": "Hạ calci huyết (phải bổ sung đủ Ca + Vit D trước khi dùng) và hoại tử xương hàm (ONJ)."
  },
  {
    "id": 9,
    "topic": "Loãng xương",
    "q": "Dùng Alendronate đường uống không đáp ứng hoặc kém dung nạp thì chuyển gì?",
    "a": "Chuyển sang Zoledronic acid truyền tĩnh mạch (1 lần/năm) hoặc Denosumab (tiêm dưới da mỗi 6 tháng)."
  },
  {
    "id": 10,
    "topic": "Loãng xương",
    "q": "Thuốc nào vừa có tác dụng tạo xương vừa giảm hủy xương?",
    "a": "Romosozumab, Strontium ranelat."
  },
  {
    "id": 11,
    "topic": "Loãng xương",
    "q": "Thuốc loãng xương có tác dụng giảm đau hiệu quả trong xẹp đốt sống?",
    "a": "Calcitonin (dạng xịt mũi hoặc tiêm)."
  },
  {
    "id": 12,
    "topic": "Loãng xương",
    "q": "Thuốc điều trị loãng xương ở bệnh nhân ung thư di căn xương / tăng calci máu ác tính?",
    "a": "Pamidronat, Zoledronic acid."
  },
  {
    "id": 19,
    "topic": "Tăng huyết áp",
    "q": "Phụ nữ cho con bú có THA nên tránh thuốc nào?",
    "a": "Atenolol, Propranolol (bài tiết nhiều qua sữa mẹ, nguy cơ hạ nhịp tim và hạ HA ở trẻ)."
  },
  {
    "id": 20,
    "topic": "Tăng huyết áp",
    "q": "Lợi ích của viên phối hợp liều cố định (FDC) trong điều trị THA?",
    "a": "Tăng tuân thủ điều trị của bệnh nhân, giảm số lượng viên thuốc, tác dụng hiệp đồng hạ áp và bù trừ giảm ADR."
  },
  {
    "id": 21,
    "topic": "Tăng huyết áp",
    "q": "Dùng đồng thời 2 thuốc cùng ức chế hệ RAA (ƯCMC + ƯCTT)?",
    "a": "Tăng nguy cơ suy thận cấp, tăng kali máu nặng và tụt huyết áp quá mức (chống chỉ định phối hợp kép)."
  },
  {
    "id": 22,
    "topic": "Tăng huyết áp",
    "q": "Tại sao không dùng Methyldopa cho phụ nữ sau sinh?",
    "a": "Nguy cơ làm khởi phát hoặc trầm trọng thêm trầm cảm sau sinh (postpartum depression)."
  },
  {
    "id": 23,
    "topic": "Tăng huyết áp",
    "q": "Thuốc nào phối hợp giúp giảm phù cổ chân do Amlodipin?",
    "a": "Thuốc ức chế men chuyển (ƯCMC) hoặc thuốc chẹn thụ thể (ƯCTT) do làm giãn cả tiểu động mạch đi mao mạch."
  },
  {
    "id": 24,
    "topic": "Tăng huyết áp",
    "q": "Mục tiêu huyết áp điều trị ở người > 65 tuổi?",
    "a": "HATT 130 - 139 mmHg, HATTr 70 - 79 mmHg (nếu dung nạp tốt)."
  },
  {
    "id": 25,
    "topic": "Tăng huyết áp",
    "q": "Thuốc điều trị tăng huyết áp an toàn hàng đầu cho phụ nữ có thai?",
    "a": "Methyldopa (lựa chọn số 1), Labetalol, Nifedipin phóng thích kéo dài. Chống chỉ định: ƯCMC, ƯCTT."
  },
  {
    "id": 26,
    "topic": "Tăng huyết áp",
    "q": "Tăng huyết áp kháng trị sau bộ ba chuẩn thì phối hợp thêm thuốc gì?",
    "a": "Spironolacton (25 - 50 mg/ngày)."
  },
  {
    "id": 27,
    "topic": "Tăng huyết áp",
    "q": "Phối hợp Thiazid + ƯCMC giúp hạn chế ADR nào của lợi tiểu?",
    "a": "Giảm nguy cơ hạ kali máu của Thiazid (vì ƯCMC có xu hướng giữ kali)."
  },
  {
    "id": 28,
    "topic": "Tăng huyết áp",
    "q": "Xử trí cơn tăng huyết áp cấp cứu (190/120 mmHg có tổn thương đích)?",
    "a": "Truyền tĩnh mạch Nicardipin có kiểm soát tốc độ (không nhỏ giọt dưới lưỡi nifedipin)."
  },
  {
    "id": 30,
    "topic": "Hen phế quản",
    "q": "Thuốc cường beta-2 adrenergic tác dụng kéo dài (LABA)?",
    "a": "Formoterol, Salmeterol."
  },
  {
    "id": 31,
    "topic": "Hen phế quản",
    "q": "Các thuốc Glucocorticoid dạng hít (ICS) thường gặp?",
    "a": "Budesonid, Fluticason propionat, Beclometason dipropionat, Mometason."
  },
  {
    "id": 32,
    "topic": "Hen phế quản",
    "q": "Tại sao GINA ưu tiên ICS-formoterol thay vì SABA đơn thuần?",
    "a": "Dập tắt phản ứng viêm đường thở ngay khi có triệu chứng, giảm nguy cơ đợt kịch phát nặng và tử vong."
  },
  {
    "id": 33,
    "topic": "Hen phế quản",
    "q": "Liệu pháp MART (duy trì và cắt cơn cùng 1 bình ICS-formoterol) dùng từ bậc mấy?",
    "a": "Từ Bậc 3 trở lên (bậc 3, 4, 5)."
  },
  {
    "id": 34,
    "topic": "Hen phế quản",
    "q": "Hen phế quản nặng không đáp ứng ở Bậc 5 xử trí gì?",
    "a": "Thêm Azithromycin (liều thấp kéo dài) hoặc LTRA (Montelukast) hoặc thuốc sinh học (Omalizumab), phương án cuối cùng là OCS liều thấp."
  },
  {
    "id": 39,
    "topic": "Tiêu chảy cấp",
    "q": "Dấu hiệu trẻ mất nước mức độ 5 - 10% (có mất nước)?",
    "a": "Kích thích, vật vã, mắt trũng, uống nước háo hức/khát, nếp véo da mất chậm (< 2 giây)."
  },
  {
    "id": 40,
    "topic": "Tiêu chảy cấp",
    "q": "Trẻ mất nước nặng có chỉ định Ringer lactat nhưng không truyền TM được?",
    "a": "Đặt ống thông dạ dày cho uống dung dịch ORS 20 ml/kg/giờ trong 6 giờ (tổng 120 ml/kg)."
  },
  {
    "id": 41,
    "topic": "Tiêu chảy cấp",
    "q": "Tiêu chảy do ký sinh trùng Giardia lamblia dùng thuốc gì?",
    "a": "Metronidazol 5 mg/kg/lần x 3 lần/ngày x 5 ngày (hoặc 15 mg/kg/ngày)."
  },
  {
    "id": 42,
    "topic": "Tiêu chảy cấp",
    "q": "Thuốc giảm tiết dịch ruột, giảm lượng phân bài xuất ở trẻ em?",
    "a": "Racecadotril (ức chế enkephalinase ruột)."
  },
  {
    "id": 43,
    "topic": "Tiêu chảy cấp",
    "q": "Tác dụng phụ của thuốc hấp phụ chống tiêu chảy (kaolin, attapulgit, smectite)?",
    "a": "Cản trở hấp thu các chất dinh dưỡng và thuốc khác dùng cùng (phải uống cách xa 2 giờ)."
  },
  {
    "id": 44,
    "topic": "Tiêu chảy cấp",
    "q": "Bổ sung Kẽm trong tiêu chảy cấp ở trẻ em?",
    "a": "Dưới 6 tháng: 10 mg/ngày; Từ 6 tháng trở lên: 20 mg/ngày; uống liên tục 10 - 14 ngày."
  },
  {
    "id": 45,
    "topic": "Tiêu chảy cấp",
    "q": "Đặc điểm của tiêu chảy cấp (TCC)?",
    "a": "Khởi phát đột ngột, phân lỏng/nước trên 3 lần/ngày, kéo dài dưới 14 ngày (thường 5-7 ngày)."
  },
  {
    "id": 57,
    "topic": "Tránh thai",
    "q": "Thuốc tránh thai 3 pha (triphasic) được hiểu như thế nào?",
    "a": "Tỷ lệ Estrogen và Progestin trong mỗi viên thay đổi 3 giai đoạn (viên 1-7, 8-14, 15-21) mô phỏng sinh lý tự nhiên."
  },
  {
    "id": 58,
    "topic": "Tránh thai",
    "q": "Cơ chế của thuốc tránh thai chỉ chứa Progestin (POP)?",
    "a": "Làm quánh đặc chất nhầy cổ tử cung ngăn tinh trùng xâm nhập, làm teo mỏng niêm mạc nội mạc tử cung ngăn làm tổ."
  },
  {
    "id": 59,
    "topic": "Tránh thai",
    "q": "Hiệu quả tránh thai của thuốc tiêm Depo-Provera (DMPA 150mg)?",
    "a": "Tiêm bắp sâu định kỳ mỗi 3 tháng (12 tuần) 1 lần."
  },
  {
    "id": 60,
    "topic": "Tránh thai",
    "q": "Tại sao WHO khuyến cáo không dùng viên tránh thai khẩn cấp quá 2 lần/tháng?",
    "a": "Hàm lượng nội tiết rất cao gây rối loạn chu kỳ kinh nguyệt, xuất huyết bất thường, buồn nôn và giảm hiệu quả bảo vệ."
  },
  {
    "id": 61,
    "topic": "Tránh thai",
    "q": "Nang cấy tránh thai dưới da thông dụng hiện nay?",
    "a": "Etonogestrel 68mg (Implanon/Nexplanon 1 que - 3 năm) hoặc Levonorgestrel (Jadelle 2 que - 5 năm)."
  },
  {
    "id": 62,
    "topic": "Tránh thai",
    "q": "Phụ nữ 48 tuổi, kinh nguyệt đều nên dùng loại thuốc tránh thai nào?",
    "a": "Thuốc tránh thai chỉ có Progestin đơn thuần (POP) để tránh nguy cơ huyết khối tắc mạch của estrogen ở tuổi tiền mãn kinh."
  },
  {
    "id": 63,
    "topic": "Tránh thai",
    "q": "Phụ nữ đang dùng thuốc chống lao Rifampicin thì tránh thai bằng cách nào?",
    "a": "Rifampicin cảm ứng mạnh CYP3A4 làm mất tác dụng của thuốc tránh thai uống; cần dùng biện pháp màng ngăn (bao cao su) hoặc dụng cụ tử cung."
  },
  {
    "id": 69,
    "topic": "Tim mạch & Chuyển hóa",
    "q": "BN sau biến cố tim mạch, dị ứng Aspirin thì dùng thuốc gì thay thế?",
    "a": "Clopidogrel 75 mg/ngày."
  },
  {
    "id": 70,
    "topic": "Tim mạch & Chuyển hóa",
    "q": "Liều Aspirin dự phòng thứ phát biến cố tim mạch thông thường?",
    "a": "75 - 100 mg/ngày (hoặc 75 - 160 mg/ngày)."
  },
  {
    "id": 71,
    "topic": "Tim mạch & Chuyển hóa",
    "q": "Metformin dùng được trong bệnh mắc kèm nào ở BN đái tháo đường?",
    "a": "Gan nhiễm mỡ không do rượu (NAFLD). Chống chỉ định khi suy gan nặng, suy thận nặng eGFR < 30."
  },
  {
    "id": 72,
    "topic": "Tim mạch & Chuyển hóa",
    "q": "Tại sao Metformin không khuyến cáo cho phụ nữ nuôi con bú?",
    "a": "Thuốc bài tiết một phần qua sữa mẹ có nguy cơ gây hạ đường huyết ở trẻ bú mẹ."
  },
  {
    "id": 73,
    "topic": "Tim mạch & Chuyển hóa",
    "q": "BN tăng cả Triglycerid và Cholesterol máu thì phối hợp gì?",
    "a": "Phối hợp Statin + Fenofibrat (chú ý theo dõi nguy cơ tiêu cơ vân; tránh dùng gemfibrozil với statin)."
  },
  {
    "id": 79,
    "topic": "Vitamin & Khoáng chất",
    "q": "Thuốc điều trị bệnh quáng gà, khô mắt ở trẻ em/thiếu niên?",
    "a": "Vitamin A (hoặc chế phẩm Vitamin A-D)."
  },
  {
    "id": 80,
    "topic": "Vitamin & Khoáng chất",
    "q": "Chất khoáng có nhiều nhất trong cơ thể người?",
    "a": "Calci (Ca) - chiếm 1,5 - 2% trọng lượng cơ thể (99% ở xương và răng)."
  },
  {
    "id": 81,
    "topic": "Vitamin & Khoáng chất",
    "q": "Ranh giới phân loại nguyên tố Đa lượng và Vi lượng?",
    "a": "Đa lượng: nhu cầu > 100 mg/ngày; Vi lượng: nhu cầu < 100 mg/ngày."
  },
  {
    "id": 82,
    "topic": "Vitamin & Khoáng chất",
    "q": "Cách hấp thu Sắt (Fe) tốt nhất?",
    "a": "Sắt (II) hữu cơ uống lúc đói kết hợp với Vitamin C; tránh dùng cùng sữa, trà, cà phê, antacid."
  },
  {
    "id": 83,
    "topic": "Vitamin & Khoáng chất",
    "q": "Tác dụng không mong muốn khi thừa Calci và Vitamin D?",
    "a": "Tăng calci huyết, lắng đọng sỏi thận, vôi hóa mạch máu, táo bón, buồn nôn, chán ăn."
  },
  {
    "id": 84,
    "topic": "Vitamin & Khoáng chất",
    "q": "Vitamin K tương tác thế nào với thuốc chống đông kháng vitamin K (Warfarin)?",
    "a": "Đối kháng trực tiếp tác dụng chống đông, làm tăng nguy cơ hình thành huyết khối ở BN rung nhĩ/van tim."
  },
  {
    "id": 85,
    "topic": "Vitamin & Khoáng chất",
    "q": "Nguyên tắc hàm lượng trong chế phẩm đa sinh tố bổ sung hàng ngày?",
    "a": "Hàm lượng mỗi chất nên ở mức < 1 US-RDA để tránh nguy cơ quá liều tích lũy."
  },
  {
    "id": 90,
    "topic": "Glucocorticoid",
    "q": "Tác dụng phụ nghiêm trọng nhất của Corticoid trên xương?",
    "a": "Loãng xương và gãy xương bệnh lý (đặc biệt lún xẹp đốt sống, gãy cổ xương đùi)."
  },
  {
    "id": 91,
    "topic": "Glucocorticoid",
    "q": "Tại sao không tiêm vaccin sống giảm độc lực khi đang dùng Corticoid liều cao?",
    "a": "Corticoid ức chế miễn dịch làm cơ thể không sinh được kháng thể, có nguy cơ bùng phát bệnh do chính chủng vaccin gây ra."
  },
  {
    "id": 92,
    "topic": "Glucocorticoid",
    "q": "Tại sao ngừng Glucocorticoid đột ngột gây suy thượng thận cấp?",
    "a": "Corticoid ngoại sinh ức chế ngược trục HPA gây teo vỏ thượng thận; ngừng đột ngột làm cơ thể thiếu hụt cortisol trầm trọng."
  },
  {
    "id": 93,
    "topic": "Glucocorticoid",
    "q": "Dùng Corticoid trong bao lâu thì có thể ngừng ngay không cần giảm liều?",
    "a": "Dưới 2 đến 3 tuần (trục HPA chưa bị ức chế vĩnh viễn)."
  },
  {
    "id": 94,
    "topic": "Glucocorticoid",
    "q": "Phối hợp Corticoid hít với thuốc cường beta-2 (Salbutamol/LABA) có tác dụng gì?",
    "a": "Corticoid làm tăng số lượng và độ nhạy của thụ thể beta-2 trên cơ trơn phế quản, chống hiện tượng trơ thụ thể."
  },
  {
    "id": 95,
    "topic": "Glucocorticoid",
    "q": "Tại sao các chế phẩm GC đều ghi cảnh báo gây chậm lớn ở trẻ em?",
    "a": "Giảm mức hormon tăng trưởng (GH), ức chế sự tạo xương ở sụn tiếp hợp, giảm hoạt tính hormon tuyến giáp và hormon sinh dục."
  },
  {
    "id": 96,
    "topic": "Glucocorticoid",
    "q": "Thời điểm uống Glucocorticoid tốt nhất trong ngày?",
    "a": "Uống 1 lần duy nhất vào khoảng 7 - 8 giờ sáng (trùng với đỉnh sinh lý bài tiết Cortisol của cơ thể)."
  },
  {
    "id": 97,
    "topic": "Glucocorticoid",
    "q": "Các thuốc Glucocorticoid có hoạt lực và thời gian tác dụng TRUNG BÌNH?",
    "a": "Prednison, Prednisolon, Methylprednisolon, Triamcinolon (t1/2 sinh học 12 - 36h)."
  },
  {
    "id": 98,
    "topic": "Glucocorticoid",
    "q": "Cần lưu ý gì khi truyền tĩnh mạch Glucocorticoid liều cao?",
    "a": "Truyền tĩnh mạch chậm, theo dõi điện tim và huyết áp để tránh nguy cơ tụt huyết áp, loạn nhịp tim hoặc ngừng tim."
  },
  {
    "id": 99,
    "topic": "Tiêu chảy cấp",
    "q": "Chỉ định và liều dùng Racecadotril trong tiêu chảy cấp ở trẻ em?",
    "a": "1,5 mg/kg mỗi lần, uống 3 lần/ngày (cách nhau 8 giờ), tối đa không quá 7 ngày, phối hợp với bù dịch Oresol. Giảm tiết nước và điện giải niêm mạc ruột mà không làm giảm nhu động ruột."
  },
  {
    "id": 100,
    "topic": "Tiêu chảy cấp",
    "q": "Tại sao không dùng Ondansetron thường quy cho trẻ chỉ tiêu chảy phân nước đơn thuần?",
    "a": "Làm tăng lượng phân và kéo dài thời gian tiêu chảy do giữ độc tố lại trong ruột. Chỉ dùng liều duy nhất khi trẻ nôn nhiều thất bại với bù dịch bằng đường uống."
  },
  {
    "id": 101,
    "topic": "Tiêu chảy cấp",
    "q": "Phân loại mức độ mất nước theo nồng độ Natri huyết thanh?",
    "a": "Đẳng trương: 130 - 150 mmol/L (chiếm 70-80%); Nhược trương: < 130 mmol/L; Ưu trương: > 150 mmol/L."
  },
  {
    "id": 102,
    "topic": "Đại cương DLS",
    "q": "Định mức nhân lực Dược lâm sàng theo Nghị định 131/2020/NĐ-CP?",
    "a": "Nội trú: tối thiểu 01 người cho mỗi 150 giường bệnh. Ngoại trú: tối thiểu 01 người cho mỗi 1.000 đơn thuốc cấp phát trong ngày. Người phụ trách DLS tại BV YHCT phải có bằng Dược sĩ đại học trở lên."
  },
  {
    "id": 103,
    "topic": "Dược động học",
    "q": "Tại sao ưu tiên Oxazepam thay vì Diazepam ở người cao tuổi hoặc suy gan?",
    "a": "Oxazepam chỉ qua liên hợp Glucuronic ở Pha II tạo chất không hoạt tính thải qua thận; Diazepam qua Pha I tạo chất chuyển hóa Nordiazepam có T1/2 > 100h dễ tích lũy gây lú lẫn, an thần kéo dài và té ngã."
  },
  {
    "id": 104,
    "topic": "Dược động học",
    "q": "Thuốc giãn cơ Rocuronium dùng trong mổ lấy thai có đặc điểm dược động học gì?",
    "a": "Là phân tử amin bậc 4 tích điện cao, tan kém trong lipid nên hầu như không qua được hàng rào nhau thai, rất an toàn cho thai nhi trong mổ lấy thai."
  },
  {
    "id": 105,
    "topic": "Glucocorticoid",
    "q": "Nguyên tắc giảm liều (cai thuốc) Glucocorticoid toàn thân?",
    "a": "Bắt buộc giảm liều từ từ khi dùng liều tương đương Prednisolon >= 7,5 mg/ngày trên 3 tuần để phòng suy thượng thận cấp. Dùng < 2 tuần có thể ngừng ngay không cần giảm liều."
  },
  {
    "id": 106,
    "topic": "Glucocorticoid",
    "q": "Tại sao không tiêm vaccine vi sinh vật sống giảm độc lực khi dùng Corticoid liều cao?",
    "a": "Corticoid liều cao ức chế miễn dịch mạnh làm vi sinh vật sống trong vaccine có thể nhân lên gây nhiễm trùng toàn thân đe dọa tính mạng. Cần ngừng thuốc ít nhất 1 tháng trước khi tiêm."
  },
  {
    "id": 107,
    "topic": "Giảm đau",
    "q": "Nguyên tắc dùng thuốc giảm đau cho bệnh nhân ung thư giai đoạn cuối đau nhiều?",
    "a": "Sử dụng Opioid mạnh (Morphin) theo thang bậc 3 WHO, uống cố định theo giờ ('by the clock'), kèm liều cứu nghẹt và BẮT BUỘC phối hợp sẵn thuốc nhuận tràng kích thích phòng táo bón."
  },
  {
    "id": 108,
    "topic": "Kháng sinh",
    "q": "Thời điểm tối ưu sử dụng kháng sinh dự phòng trong phẫu thuật?",
    "a": "Trong vòng 30 - 60 phút TRƯỚC KHI rạch da (thường tiêm cùng lúc khởi mê) để nồng độ kháng sinh tại mô vết mổ đạt đỉnh ngay khi rạch da."
  },
  {
    "id": 109,
    "topic": "Tiêu chảy cấp",
    "q": "Lưu ý quan trọng khi dùng thuốc Smecta (Diosmectite)?",
    "a": "Uống cách xa các thuốc khác ít nhất 2 giờ vì đặc tính hấp phụ vật lý rất mạnh của Smecta sẽ làm giảm hấp thu các thuốc dùng kèm."
  },
  {
    "id": 110,
    "topic": "Vitamin & Khoáng chất",
    "q": "Chỉ định Vitamin A liều cao ở trẻ em mắc bệnh Sởi nhằm mục đích gì?",
    "a": "Bổ sung lượng vitamin A bị tiêu hao cấp tính do virus sởi, phòng ngừa biến chứng loét giác mạc gây mù lòa và giảm tỷ lệ tử vong ở trẻ em."
  }
];

