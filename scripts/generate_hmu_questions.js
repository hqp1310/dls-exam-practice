// 40 High-Yield Clinical Pharmacy Questions - Đại học Y Hà Nội (HMU)
// Chuyên đề: Cấp cứu chống độc, Thông tư 51/2017/TT-BYT Sốc phản vệ, Antidote, Thai kỳ, Cấp cứu nội khoa

const HMU_QUESTIONS = [
  {
    chapter: "ADR, Dị ứng & Sốc phản vệ",
    source: "HMU",
    sourceName: "Đại học Y Hà Nội",
    question: "Theo Thông tư 51/2017/TT-BYT của Bộ Y tế, thuốc thiết yếu, quan trọng hàng đầu và bắt buộc phải tiêm ngay lập tức cho người bệnh bị phản vệ từ Độ II trở lên là:",
    options: [
      "Adrenalin (Epinephrin)",
      "Methylprednisolon đường tĩnh mạch",
      "Diphenhydramin tiêm bắp",
      "Dung dịch Natri bicarbonat 1.4%"
    ],
    correct: 0,
    explanation: "Thông tư 51/2017/TT-BYT khẳng định Adrenalin là thuốc thiết yếu, quan trọng bậc nhất cứu sống người bệnh bị phản vệ. Ngay khi phát hiện phản vệ từ Độ II (nặng) trở lên, phải tiêm bắp Adrenalin ngay lập tức, không được trì hoãn để chờ tiêm Corticoid hay kháng Histamin."
  },
  {
    chapter: "ADR, Dị ứng & Sốc phản vệ",
    source: "HMU",
    sourceName: "Đại học Y Hà Nội",
    question: "Theo Thông tư 51/2017/TT-BYT, liều dùng và đường dùng Adrenalin khởi đầu khuyến cáo cho người lớn khi xử trí phản vệ Độ II hoặc Độ III là:",
    options: [
      "Tiêm bắp 1/2 ống (tương đương 0.5 mg) ở mặt trước ngoài đùi",
      "Tiêm tĩnh mạch trực tiếp 1 ống nguyên chất (1 mg) thật nhanh",
      "Pha loãng 1 ống vào 500 ml Natri Clorid 0.9% truyền nhỏ giọt trong 8 giờ",
      "Tiêm dưới da 1/4 ống (0.25 mg) tại cẳng tay"
    ],
    correct: 0,
    explanation: "Liều khởi đầu cho người lớn là tiêm bắp 1/2 ống (0.5 mg) dung dịch Adrenalin 1mg/1ml (1:1000). Vị trí tiêm tối ưu là mặt trước ngoài đùi vì có hệ thống mạch máu phong phú, giúp thuốc hấp thu vào tuần hoàn nhanh và đạt đỉnh cao hơn nhiều so với cơ delta hay tiêm dưới da."
  },
  {
    chapter: "ADR, Dị ứng & Sốc phản vệ",
    source: "HMU",
    sourceName: "Đại học Y Hà Nội",
    question: "Sau khi tiêm bắp liều Adrenalin đầu tiên trong cấp cứu phản vệ theo Thông tư 51, nếu người bệnh vẫn chưa có dấu hiệu cải thiện huyết áp hoặc còn khó thở, thời gian khuyến cáo để tiêm nhắc lại liều tiếp theo là:",
    options: [
      "Sau mỗi 3 đến 5 phút",
      "Sau mỗi 30 phút",
      "Sau 2 giờ",
      "Chỉ được tiêm 1 liều duy nhất trong 24 giờ"
    ],
    correct: 0,
    explanation: "Theo Thông tư 51/2017/TT-BYT: Cứ sau mỗi 3 - 5 phút theo dõi nếu huyết áp chưa nâng lên hoặc triệu chứng hô hấp chưa thuyên giảm, tiếp tục tiêm bắp nhắc lại liều Adrenalin như trên cho đến khi huyết áp và mạch ổn định (tối đa có thể tiêm 2 - 3 lần trước khi thiết lập đường truyền tĩnh mạch liên tục)."
  },
  {
    chapter: "ADR, Dị ứng & Sốc phản vệ",
    source: "HMU",
    sourceName: "Đại học Y Hà Nội",
    question: "Phân độ phản vệ theo Thông tư 51/2017/TT-BYT chia làm mấy mức độ và phản vệ Độ I (nhẹ) được định nghĩa bởi dấu hiệu nào?",
    options: [
      "4 mức độ; Độ I chỉ có các triệu chứng ở da, tổ chức dưới da và niêm mạc (mày đay, ngứa, phù mạch)",
      "3 mức độ; Độ I là tụt huyết áp và mất tri giác hoàn toàn",
      "5 mức độ; Độ I là co thắt thanh quản tím tái",
      "2 mức độ; Độ I là ngừng tuần hoàn hô hấp"
    ],
    correct: 0,
    explanation: "Thông tư 51 chia phản vệ làm 4 mức độ: Độ I (Nhẹ: chỉ ở da, niêm mạc); Độ II (Nặng: từ 2 cơ quan trở lên như mày đay + khó thở, tức ngực, tụt HA thoáng qua); Độ III (Nguy kịch: trụy mạch, tụt HA, thở rít, lú lẫn); Độ IV (Ngừng tuần hoàn hô hấp)."
  },
  {
    chapter: "Thuốc giảm đau",
    source: "HMU",
    sourceName: "Đại học Y Hà Nội",
    question: "Chất giải độc đặc hiệu (Antidote) trong ngộ độc cấp tính Paracetamol do quá liều dẫn đến tích lũy chất chuyển hóa độc NAPQI gây hoại tử tế bào gan là:",
    options: [
      "N-acetylcystein (NAC)",
      "Flumazenil",
      "Atropin sulfat",
      "Naloxon hydroclorid"
    ],
    correct: 0,
    explanation: "Khi quá liều Paracetamol, con đường liên hợp sulfat và glucuronid bị bão hòa, enzym CYP2E1 tạo ra lượng lớn NAPQI làm cạn kiệt Glutathione nội sinh. N-acetylcysteine (NAC) cung cấp nhóm sulfhydryl (-SH) để tái tạo Glutathione và trực tiếp liên hợp bất hoạt NAPQI, bảo vệ tế bào gan."
  },
  {
    chapter: "Thuốc giảm đau",
    source: "HMU",
    sourceName: "Đại học Y Hà Nội",
    question: "Hiệu quả giải độc bảo vệ tế bào gan tối đa của N-acetylcystein (NAC) đường uống hoặc truyền tĩnh mạch đạt được tốt nhất khi bắt đầu dùng trong khoảng thời gian nào sau ngộ độc Paracetamol?",
    options: [
      "Trong vòng 8 giờ đầu tiên sau khi uống quá liều",
      "Sau 24 đến 48 giờ khi men gan ALT bắt đầu tăng vọt",
      "Chỉ dùng khi bệnh nhân đã xuất hiện vàng da và hôn mê gan",
      "Sau 5 ngày điều trị nâng đỡ"
    ],
    correct: 0,
    explanation: "Nghiên cứu lâm sàng kinh điển của Prescott cho thấy dùng NAC trong vòng 8 giờ đầu sau uống Paracetamol mang lại tỷ lệ bảo vệ gan gần như 100% (tỷ lệ hoại tử gan nặng < 2%). Sau 8 giờ hiệu quả giảm dần, nhưng NAC vẫn có lợi ích cải thiện tỷ lệ sống ngay cả khi dùng muộn."
  },
  {
    chapter: "Thuốc giảm đau",
    source: "HMU",
    sourceName: "Đại học Y Hà Nội",
    question: "Tam chứng kinh điển gợi ý chẩn đoán Ngộ độc cấp tính các dẫn chất Opioid (Morphin, Heroin, Fentanyl) tại khoa Cấp cứu bao gồm:",
    options: [
      "Hôn mê ức chế tri giác, đồng tử co nhỏ như đầu đinh ghim (Pinpoint pupils) và ức chế hô hấp (thở chậm, ngừng thở)",
      "Sốt cao co giật, đồng tử giãn to và tiêu chảy cấp",
      "Tăng huyết áp kịch phát, tim đập nhanh và rung giật nhãn cầu",
      "Vàng da tan máu, nổi ban xuất huyết hoại tử và vô niệu"
    ],
    correct: 0,
    explanation: "Tam chứng ngộ độc Opioid điển hình gồm: (1) Ức chế thần kinh trung ương (ngủ gà, hôn mê); (2) Đồng tử co nhỏ như đầu đinh ghim (miosis); (3) Ức chế hô hấp (nhịp thở chậm < 10-12 lần/phút, thở nông, ngừng thở dẫn đến tím tái và tử vong nếu không được tiêm Naloxone kịp thời)."
  },
  {
    chapter: "Thuốc giảm đau",
    source: "HMU",
    sourceName: "Đại học Y Hà Nội",
    question: "Khi tiêm tĩnh mạch Naloxon để hồi sức cấp cứu ngộ độc Morphin gây ngừng thở, lưu ý dược động học quan trọng nhất người thầy thuốc cần ghi nhớ là gì?",
    options: [
      "Thời gian bán thải của Naloxon rất ngắn (khoảng 30 đến 90 phút), ngắn hơn nhiều so với Morphin nên có thể tái hôn mê và ngừng thở trở lại sau khi thuốc hết tác dụng",
      "Naloxon chỉ có tác dụng sau 6 giờ tiêm tĩnh mạch",
      "Thuốc gây hạ đường huyết nghiêm trọng đe dọa phù não",
      "Naloxon gắn kết vĩnh viễn không hồi phục vào thụ thể Mu-opioid"
    ],
    correct: 0,
    explanation: "Naloxone có thời gian tác dụng rất ngắn (30 - 90 phút), trong khi Morphin tác dụng 4 - 6 giờ, Methadone kéo dài > 24 giờ. Sau khi bệnh nhân tỉnh lại do liều Naloxone đầu tiên, họ có thể tái ngộ độc và ngừng thở khi Naloxone bị thải trừ. Vì vậy cần theo dõi liên tục ít nhất vài giờ và sẵn sàng tiêm nhắc lại hoặc truyền tĩnh mạch liên tục."
  },
  {
    chapter: "Thuốc giảm đau",
    source: "HMU",
    sourceName: "Đại học Y Hà Nội",
    question: "Thuốc đối kháng đặc hiệu thụ thể Benzodiazepin (như Diazepam, Midazolam) dùng để đảo ngược tác dụng an thần hôn mê là:",
    options: [
      "Flumazenil",
      "Naloxon",
      "Atropin",
      "Neostigmin"
    ],
    correct: 0,
    explanation: "Flumazenil (Anexate) là chất đối kháng cạnh tranh chọn lọc trên vị trí gắn Benzodiazepine của phức hợp thụ thể GABAA. Thuốc giúp bệnh nhân tỉnh lại nhanh chóng sau gây mê hoặc ngộ độc Benzodiazepine. Thận trọng nguy cơ co giật ở người nghiện thuốc mạn tính."
  },
  {
    chapter: "Tương tác thuốc & Tương kỵ",
    source: "HMU",
    sourceName: "Đại học Y Hà Nội",
    question: "Chất giải độc đặc hiệu (Antidote) trong cấp cứu ngộ độc thuốc ức chế men cholinesterase nhóm phospho hữu cơ (thuốc trừ sâu Phospho hữu cơ) là sự phối hợp của:",
    options: [
      "Atropin sulfat (đối kháng triệu chứng Muscarinic) phối hợp Pralidoxim / PAM (tái hoạt hóa enzym acetylcholinesterase)",
      "Naloxon phối hợp Glucose ưu trương",
      "Flumazenil phối hợp Vitamin K1",
      "Canxi gluconat phối hợp Insulin liều cao"
    ],
    correct: 0,
    explanation: "Phospho hữu cơ phosphoryl hóa enzym acetylcholinesterase, làm tích tụ Acetylcholine gây hội chứng cholinergic ồ ạt. Phác đồ bắt buộc gồm: (1) Atropin liều cao để chặn thụ thể Muscarinic (cắt đứt co thắt phế quản, tăng tiết đờm dãi, nhịp chậm); (2) Pralidoxime (PAM) giúp giải phóng enzym trước khi hiện tượng lão hóa (aging) xảy ra."
  },
  {
    chapter: "Tương tác thuốc & Tương kỵ",
    source: "HMU",
    sourceName: "Đại học Y Hà Nội",
    question: "Trong ngộ độc thuốc chống đông Warfarin gây xuất huyết nặng đe dọa tính mạng (hoặc INR > 10 có xuất huyết), biện pháp hồi phục đông máu khẩn cấp nhất được khuyến cáo là:",
    options: [
      "Truyền Phức hợp Prothrombin đậm đặc 4 yếu tố (4F-PCC) phối hợp tiêm tĩnh mạch chậm Vitamin K1",
      "Chỉ cho uống Vitamin C liều cao",
      "Tiêm bắp Protamin sulfat",
      "Truyền dung dịch Natri Clorid 3% ưu trương"
    ],
    correct: 0,
    explanation: "Vitamin K1 đường tĩnh mạch cần 6 - 24 giờ để gan tổng hợp mới các yếu tố đông máu phụ thuộc vitamin K (II, VII, IX, X). Trong xuất huyết nặng đe dọa tính mạng, cần bổ sung ngay lập tức các yếu tố đông máu sẵn có bằng Phức hợp Prothrombin cô đặc (PCC), vượt trội hơn huyết tương tươi đông lạnh (FFP) về tốc độ đảo ngược INR và thể tích truyền ít hơn."
  },
  {
    chapter: "Tương tác thuốc & Tương kỵ",
    source: "HMU",
    sourceName: "Đại học Y Hà Nội",
    question: "Để trung hòa tác dụng chống đông của Heparin không phân đoạn (UFH) trong trường hợp chảy máu đe dọa tính mạng hoặc sau phẫu thuật bắc cầu tim phổi, chất giải độc đặc hiệu tiêm tĩnh mạch là:",
    options: [
      "Protamin sulfat",
      "Idarucizumab",
      "Vitamin K1",
      "Andexanet alfa"
    ],
    correct: 0,
    explanation: "Protamine sulfat là một protein base mang điện tích dương mạnh. Khi vào máu, nó liên kết ion với các phân tử Heparin mang điện tích âm mạnh tạo thành phức hợp muối bền vững không còn hoạt tính chống đông. Mỗi 1 mg Protamine trung hòa được khoảng 100 đơn vị Heparin UFH."
  },
  {
    chapter: "Xét nghiệm lâm sàng & Nhận định KQ",
    source: "HMU",
    sourceName: "Đại học Y Hà Nội",
    question: "Bệnh nhân ngộ độc cấp tính thuốc chẹn thụ thể beta giao cảm (như Propranolol) liều cao xuất hiện nhịp chậm xoang nặng (< 35 lần/phút) và tụt huyết áp trơ với Atropin. Thuốc hồi sức giải độc đầu tay được lựa chọn là:",
    options: [
      "Glucagon tiêm tĩnh mạch",
      "Flumazenil",
      "N-acetylcystein",
      "Esmolol truyền tĩnh mạch liên tục"
    ],
    correct: 0,
    explanation: "Glucagon kích hoạt thụ thể glucagon tại cơ tim, kích thích trực tiếp enzym adenylate cyclase không thông qua thụ thể beta giao cảm, làm tăng tổng hợp cAMP nội bào. Hậu quả là làm tăng tính tự động nút xoang, tăng dẫn truyền nhĩ thất và tăng sức co bóp cơ tim độc lập với thụ thể beta."
  },
  {
    chapter: "Xét nghiệm lâm sàng & Nhận định KQ",
    source: "HMU",
    sourceName: "Đại học Y Hà Nội",
    question: "Trong cấp cứu Tăng Kali máu nặng (K⁺ > 6.5 mmol/L hoặc có biến đổi điện tâm đồ như sóng T nhọn cao, mất sóng P, giãn rộng phức bộ QRS), bước xử trí đầu tiên bắt buộc phải làm ngay trong 1 đến 3 phút để bảo vệ màng tế bào cơ tim tránh rung thất ngừng tim là:",
    options: [
      "Tiêm tĩnh mạch chậm Canxi Clorid 10% hoặc Canxi Gluconat 10%",
      "Cho uống nhựa trao đổi ion Kayexalate",
      "Tiêm Insulin kèm truyền đường Glucose",
      "Truyền dung dịch Natri bicarbonat 1.4%"
    ],
    correct: 0,
    explanation: "Ion Canxi (Ca2+) đối kháng trực tiếp tác dụng khử cực của K+ trên màng tế bào cơ tim, giúp ổn định điện thế màng và phục hồi dẫn truyền cơ tim ngay trong 1-3 phút, ngăn ngừa loạn nhịp thất chết người. Lưu ý Canxi không làm giảm nồng độ K+ máu, nên sau đó phải lập tức phối hợp Insulin+Glucose và khí dung Salbutamol để kéo K+ vào tế bào."
  },
  {
    chapter: "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    source: "HMU",
    sourceName: "Đại học Y Hà Nội",
    question: "Nhóm thuốc hạ huyết áp ức chế men chuyển (ACEI) và chẹn thụ thể Angiotensin II (ARB) bị CHỐNG CHỈ ĐỊNH TUYỆT ĐỐI trong 3 tháng giữa và 3 tháng cuối của thai kỳ (Phân loại D) vì gây ra biến chứng nghiêm trọng nào trên thai nhi?",
    options: [
      "Gây suy thận thai nhi, thiểu ối, giảm sản sọ và dị tật phổi",
      "Gây dính ngón tay và biến dạng đốt sống thắt lưng",
      "Gây đục thủy tinh thể bẩm sinh và điếc tiếp nhận",
      "Làm tăng đường huyết thai nhi dẫn đến thai to quá mức"
    ],
    correct: 0,
    explanation: "Angiotensin II đóng vai trò sinh tồn trong việc duy trì tưới máu và phát triển thận thai nhi ở tam cá nguyệt 2 và 3. Dùng ACEI/ARB khiến thai nhi bị suy thận vô niệu, dẫn đến cạn dịch ối (thiểu ối), hậu quả là thiểu sản phổi, biến dạng sọ mặt, co rút khớp và tử vong thai nhi trong tử cung."
  },
  {
    chapter: "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    source: "HMU",
    sourceName: "Đại học Y Hà Nội",
    question: "Thuốc chống viêm không steroid (NSAID như Ibuprofen, Diclofenac) bị chống chỉ định sử dụng từ tuần thứ 28 của thai kỳ (3 tháng cuối thai kỳ) do nguy cơ gây ra biến cố tim mạch nào ở thai nhi?",
    options: [
      "Gây đóng sớm ống động mạch (Premature closure of ductus arteriosus) dẫn đến tăng áp động mạch phổi và suy tim thai",
      "Gây thông liên thất lỗ lớn và đảo gốc động mạch",
      "Gây hẹp van hai lá bẩm sinh",
      "Làm ngừng tim thai do block nhĩ thất hoàn toàn"
    ],
    correct: 0,
    explanation: "Prostaglandin (PGE2) có vai trò duy trì sự mở của ống động mạch thai nhi trong tử cung. NSAID ức chế enzym COX làm cạn kiệt Prostaglandin, khiến ống động mạch đóng sớm, dẫn đến tăng áp động mạch phổi sơ sinh, suy tim thai và thiểu ối; đồng thời ức chế cơn co tử cung kéo dài thời gian chuyển dạ."
  },
  {
    chapter: "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    source: "HMU",
    sourceName: "Đại học Y Hà Nội",
    question: "Thuốc trị mụn trứng cá Isotretinoin (dẫn xuất vitamin A đường uống) được xếp vào phân loại thai kỳ X (chống chỉ định tuyệt đối) do có độc tính gì?",
    options: [
      "Khả năng gây quái thai (teratogenicity) cực mạnh với dị tật nghiêm trọng ở hệ thần kinh sọ não, tai, tim mạch và tuyến ức",
      "Làm tan máu cấp tính ở người mẹ gây trụy mạch tức thì",
      "Gây ung thư nội mạc tử cung xuất hiện ngay trong thai kỳ",
      "Làm tiêu hủy hoàn toàn lớp mỡ bảo vệ thành tử cung"
    ],
    correct: 0,
    explanation: "Isotretinoin là một trong những chất gây quái thai nguy hiểm nhất trong y học (nguy cơ dị tật thai nhi lên tới > 30% nếu phơi nhiễm trong tam cá nguyệt đầu). Thuốc đòi hỏi cam kết ngừa thai kép nghiêm ngặt (chương trình iPLEDGE) và thử thai âm tính trước khi kê đơn."
  },
  {
    chapter: "Loãng xương, Tránh thai & Chuyển hóa",
    source: "HMU",
    sourceName: "Đại học Y Hà Nội",
    question: "Trong cấp cứu Cơn bão giáp trạng (Thyroid storm), dung dịch chứa Iod (như dung dịch Lugol hoặc dung dịch Kali iodid) bắt buộc phải được dùng vào thời điểm nào sau khi đã dùng thuốc kháng giáp trạng tổng hợp (như PTU)?",
    options: [
      "Dùng sau khi đã uống thuốc kháng giáp trạng PTU ít nhất 1 giờ",
      "Dùng trước thuốc kháng giáp trạng 6 giờ",
      "Uống chung cùng một lúc với liều PTU đầu tiên",
      "Chỉ được dùng sau 7 ngày điều trị tích cực"
    ],
    correct: 0,
    explanation: "Dung dịch Lugol cung cấp lượng lớn Iod vô cơ gây hiệu ứng Wolff-Chaikoff ức chế giải phóng hormon tuyến giáp vào máu. Bắt buộc phải uống sau PTU ít nhất 1 giờ để PTU kịp ức chế quá trình gắn iod (organification). Nếu cho Lugol trước, lượng iod này sẽ được tuyến giáp sử dụng làm nguyên liệu tổng hợp thêm hormon, làm cơn bão giáp thêm trầm trọng."
  },
  {
    chapter: "Xét nghiệm lâm sàng & Nhận định KQ",
    source: "HMU",
    sourceName: "Đại học Y Hà Nội",
    question: "Ở bệnh nhân Hạ Natri máu nặng có triệu chứng thần kinh (như co giật, hôn mê), việc truyền dung dịch Natri Clorid 3% ưu trương đòi hỏi nguyên tắc an toàn quan trọng nào để tránh Hội chứng tiêu myelin cầu não (Osmotic Demyelination Syndrome - ODS)?",
    options: [
      "Tốc độ nâng nồng độ Natri huyết thanh không vượt quá 8 đến 10 mEq/L trong vòng 24 giờ đầu tiên",
      "Nâng nồng độ Natri máu lên mức bình thường 140 mEq/L ngay trong vòng 2 giờ đầu",
      "Không bao giờ được sử dụng dung dịch muối ưu trương nồng độ trên 0.9%",
      "Bắt buộc phải kết hợp đồng thời với truyền dung dịch Glucose 30%"
    ],
    correct: 0,
    explanation: "Khi tế bào não thích nghi với môi trường nhược trương mạn tính, nếu bù Natri quá nhanh, nước bị rút đột ngột ra khỏi tế bào não do chênh lệch áp lực thẩm thấu, dẫn đến hủy hoại bao myelin vùng cầu não (hội chứng ODS) gây liệt tứ chi, liệt hành não và hôn mê vĩnh viễn. Giới hạn an toàn là không tăng quá 8-10 mEq/L/24 giờ."
  },
  {
    chapter: "Kháng sinh & Kháng sinh dự phòng",
    source: "HMU",
    sourceName: "Đại học Y Hà Nội",
    question: "Kháng sinh nhóm Aminoglycosid (Gentamicin, Amikacin) gây độc tính trên thận (Nephrotoxicity) theo cơ chế bệnh sinh nào tại nhu mô thận?",
    options: [
      "Tích tụ trong lysosom của tế bào biểu mô ống lượn gần gây hoại tử tế bào ống thận cấp tính",
      "Lắng đọng tinh thể trong lòng ống góp gây tắc nghẽn vô niệu",
      "Co thắt dữ dội tiểu động mạch vào cầu thận do kích hoạt hệ renin",
      "Tạo kháng thể tự miễn phá hủy màng đáy cầu thận"
    ],
    correct: 0,
    explanation: "Aminoglycosid được lọc qua cầu thận và tái hấp thu một phần nhỏ vào tế bào biểu mô ống lượn gần qua thụ thể Megalin. Tại đây thuốc tích tụ trong lysosome, ức chế enzyme phospholipase và gây vỡ lysosome, giải phóng enzym tiêu thể dẫn đến hoại tử ống thận cấp (ATN) và suy thận thể còn bảo tồn nước tiểu."
  },
  {
    chapter: "Thuốc giảm đau",
    source: "HMU",
    sourceName: "Đại học Y Hà Nội",
    question: "Tác dụng không mong muốn thường gặp nhất của Morphin và các thuốc giảm đau Opioid dùng kéo dài mà người bệnh KHÔNG BAO GIỜ phát triển hiện tượng dung nạp (Tolerance) theo thời gian là:",
    options: [
      "Táo bón và co đồng tử",
      "Buồn nôn và nôn",
      "An thần buồn ngủ",
      "Ức chế hô hấp thở chậm"
    ],
    correct: 0,
    explanation: "Người bệnh dùng Opioid dài ngày nhanh chóng dung nạp với tác dụng giảm đau, an thần, ức chế hô hấp và buồn nôn (nghĩa là các tác dụng phụ này giảm dần). Tuy nhiên, hiện tượng táo bón và co đồng tử hầu như KHÔNG BAO GIỜ bị dung nạp. Do đó, bệnh nhân điều trị Opioid mạn tính bắt buộc phải được chủ động kê thêm thuốc nhuận tràng."
  },
  {
    chapter: "Thuốc giảm đau",
    source: "HMU",
    sourceName: "Đại học Y Hà Nội",
    question: "Theo Bậc thang giảm đau của Tổ chức Y tế Thế giới (WHO Pain Ladder) cho bệnh nhân đau do ung thư, khi bệnh nhân xuất hiện cơn đau ở mức độ vừa đến nặng (điểm VAS từ 7 đến 10 điểm), bước bậc thang thích hợp là:",
    options: [
      "Bậc 3: Sử dụng các thuốc Opioid mạnh (Morphin, Fentanyl, Oxycodon) phối hợp thuốc giảm đau không opioid và thuốc hỗ trợ",
      "Bậc 1: Chỉ dùng Paracetamol đơn độc liều tối thiểu",
      "Bậc 2: Dùng Codein hoặc Tramadol đơn thuần",
      "Bậc 4: Phẫu thuật cắt bỏ dây thần kinh cảm giác ngoại vi"
    ],
    correct: 0,
    explanation: "Thang đau 3 bậc của WHO: Bậc 1 (Đau nhẹ 1-3): Không opioid (Paracetamol, NSAID); Bậc 2 (Đau vừa 4-6): Opioid yếu (Codeine, Tramadol); Bậc 3 (Đau nặng 7-10): Opioid mạnh (Morphine, Oxycodone, Fentanyl) kết hợp thuốc bổ trợ và không opioid."
  },
  {
    chapter: "Kháng sinh & Kháng sinh dự phòng",
    source: "HMU",
    sourceName: "Đại học Y Hà Nội",
    question: "Thời điểm tối ưu nhất để tiêm tĩnh mạch liều Kháng sinh dự phòng trong phẫu thuật sạch hoặc sạch - nhiễm (ví dụ dùng Cefazolin) là:",
    options: [
      "Trong vòng 30 đến 60 phút trước khi rạch da (hoặc tối đa 120 phút với Vancomycin / Fluoroquinolon)",
      "Ngay sau khi kết thúc ca mổ đưa về phòng hồi tỉnh",
      "Trước cuộc mổ 24 đến 48 giờ",
      "Khi phẫu thuật viên bắt đầu đóng vết mổ"
    ],
    correct: 0,
    explanation: "Mục tiêu của kháng sinh dự phòng là nồng độ thuốc trong mô tại vết rạch da phải vượt quá MIC của vi khuẩn ngay tại thời điểm rạch da. Vì vậy thời điểm chuẩn là 30 - 60 phút trước rạch da (với Cefazolin) hoặc trong vòng 120 phút với các kháng sinh cần truyền chậm như Vancomycin/Ciprofloxacin."
  },
  {
    chapter: "Kháng sinh & Kháng sinh dự phòng",
    source: "HMU",
    sourceName: "Đại học Y Hà Nội",
    question: "Thời gian sử dụng Kháng sinh dự phòng phẫu thuật theo khuyến cáo của Bộ Y tế và CDC nói chung KHÔNG NÊN kéo dài quá bao lâu sau khi kết thúc phẫu thuật?",
    options: [
      "Không quá 24 giờ sau mổ (hầu hết phẫu thuật chỉ cần 1 liều duy nhất trong mổ)",
      "Tối thiểu 7 đến 10 ngày để tiệt khuẩn toàn thân",
      "Kéo dài cho đến khi bệnh nhân cắt chỉ vết mổ",
      "Duy trì liên tục trong suốt thời gian nằm viện"
    ],
    correct: 0,
    explanation: "Kháng sinh dự phòng chỉ cần thiết trong lúc mô phẫu thuật có nguy cơ nhiễm trùng. Kéo dài kháng sinh dự phòng quá 24 giờ sau mổ không làm giảm thêm tỷ lệ nhiễm khuẩn vết mổ mà làm tăng đáng kể nguy cơ nhiễm C. difficile, độc tính thận và đề kháng kháng sinh."
  },
  {
    chapter: "Xét nghiệm lâm sàng & Nhận định KQ",
    source: "HMU",
    sourceName: "Đại học Y Hà Nội",
    question: "Trong cấp cứu Nhiễm toan ceton do đái tháo đường (DKA), bước điều trị ưu tiên số 1 ngay khi tiếp cận bệnh nhân là gì?",
    options: [
      "Bù dịch tích cực bằng dung dịch Natri Clorid 0.9% đường tĩnh mạch để khôi phục thể tích tuần hoàn",
      "Tiêm tĩnh mạch ngay lập tức một liều Insulin Bolus cực cao 50 đơn vị",
      "Truyền ngay dung dịch Natri bicarbonat 4.2% cho tất cả bệnh nhân",
      "Cho bệnh nhân uống dung dịch Kali clorid đậm đặc"
    ],
    correct: 0,
    explanation: "Bệnh nhân DKA thường mất 5 - 8 lít nước do lợi niệu thẩm thấu. Bước đầu tiên và quan trọng nhất là bù dịch bằng NaCl 0.9% (thường 1000 ml trong giờ đầu) để chống sốc giảm thể tích và phục hồi tưới máu mô. Insulin chỉ được dùng sau khi bắt đầu bù dịch và sau khi đã xác định Kali máu >= 3.3 mmol/L."
  },
  {
    chapter: "Xét nghiệm lâm sàng & Nhận định KQ",
    source: "HMU",
    sourceName: "Đại học Y Hà Nội",
    question: "Trong điều trị toan ceton do đái tháo đường (DKA), nếu nồng độ Kali huyết thanh của bệnh nhân đo được ban đầu dưới 3.3 mmol/L, xử trí dùng Insulin đúng là:",
    options: [
      "Tạm hoãn tiêm truyền Insulin và bù Kali tĩnh mạch cho đến khi Kali máu vượt trên 3.3 mmol/L",
      "Tăng gấp đôi tốc độ truyền Insulin tĩnh mạch",
      "Tiêm dưới da Insulin tác dụng kéo dài Glargine",
      "Không cần bù Kali vì Insulin sẽ kéo Kali từ mô vào lại máu"
    ],
    correct: 0,
    explanation: "Insulin kích hoạt bơm Na+/K+-ATPase đưa K+ từ máu vào trong tế bào. Nếu truyền Insulin khi Kali máu đang < 3.3 mmol/L, nồng độ Kali huyết thanh sẽ tụt xuống mức cực kỳ nguy hiểm, kích hoạt cơn ngừng tim do rung thất hoặc liệt cơ hô hấp. Do đó bắt buộc phải hoãn Insulin và bù K+ trước."
  },
  {
    chapter: "Tương tác thuốc & Tương kỵ",
    source: "HMU",
    sourceName: "Đại học Y Hà Nội",
    question: "Bệnh nhân điều trị bằng thuốc chống trầm cảm nhóm SSRI (như Sertralin, Fluoxetin) kết hợp thêm thuốc giảm đau Tramadol hoặc Linezolid có nguy cơ xuất hiện biến chứng đe dọa tính mạng nào?",
    options: [
      "Hội chứng Serotonin (Serotonin Syndrome) biểu hiện run giật cơ, tăng phản xạ, sốt cao và mê sảng",
      "Hội chứng nhược cơ cấp tính",
      "Thiếu máu bất sản tủy xương",
      "Viêm tụy cấp xuất huyết hoại tử"
    ],
    correct: 0,
    explanation: "Tramadol và Linezolid (có tác dụng ức chế MAO yếu) đều làm tăng nồng độ Serotonin tại synap thần kinh. Khi phối hợp cùng SSRI, lượng Serotonin tăng quá mức kích hoạt thụ thể 5-HT2A gây Hội chứng Serotonin với tam chứng: biến đổi tri giác, kích thích thần kinh cơ (rung giật cơ giật nhãn cầu) và rối loạn thần kinh thực vật (sốt cao, vã mồ hôi, huyết áp dao động)."
  },
  {
    chapter: "Xét nghiệm lâm sàng & Nhận định KQ",
    source: "HMU",
    sourceName: "Đại học Y Hà Nội",
    question: "Thuốc giải độc đặc hiệu (Antidote) trong ngộ độc khí Carbon Monoxide (CO) gây thiếu oxy mô và hoại tử tế bào thần kinh là:",
    options: [
      "Thở oxy nguyên chất 100% qua mặt nạ có túi dự trữ hoặc liệu pháp Oxy cao áp (Hyperbaric Oxygen - HBO)",
      "Tiêm tĩnh mạch dung dịch Natri thiosulfat",
      "Khí dung Salbutamol liều cao liên tục",
      "Truyền dung dịch Xanh Methylen 1%"
    ],
    correct: 0,
    explanation: "Khí CO gắn vào Hemoglobin với ái lực cao gấp 200 - 250 lần oxy tạo thành HbCO. Thở khí trời thì T1/2 của HbCO là 300 phút; thở oxy 100% qua mask có túi dự trữ rút ngắn T1/2 xuống 90 phút; và liệu pháp oxy cao áp (HBO ở 2.5 - 3 atm) rút ngắn T1/2 xuống chỉ còn 20 - 30 phút, giúp nhanh chóng giải phóng oxy cho não và tim."
  },
  {
    chapter: "Xét nghiệm lâm sàng & Nhận định KQ",
    source: "HMU",
    sourceName: "Đại học Y Hà Nội",
    question: "Chất giải độc đặc hiệu trong cấp cứu ngộ độc gây tăng Methemoglobin máu (Methemoglobinemia do Dapsone, Nitrit, thuốc tê Benzocain) là:",
    options: [
      "Xanh Methylen (Methylene blue) tiêm tĩnh mạch",
      "N-acetylcystein",
      "Deferoxamin",
      "Flumazenil"
    ],
    correct: 0,
    explanation: "Methemoglobin chứa ion Fe3+ không có khả năng vận chuyển oxy, gây tím tái trơ với thở oxy. Xanh Methylen là chất nhận điện tử trong hệ thống NADPH-methemoglobin reductase, giúp khử Fe3+ trở lại thành Fe2+ có chức năng vận chuyển oxy bình thường."
  },
  {
    chapter: "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    source: "HMU",
    sourceName: "Đại học Y Hà Nội",
    question: "Thuốc chống đông đường uống Warfarin bị chống chỉ định sử dụng trong 3 tháng đầu thai kỳ (tuần 6 đến 9) do gây ra hội chứng dị tật thai nhi nào?",
    options: [
      "Hội chứng Warfarin thai nhi (Fetal Warfarin Syndrome) gây giảm sản xương mũi, dị tật đầu xương đốm và teo thần kinh thị giác",
      "Hội chứng Down do rối loạn phân bào tam nhiễm sắc thể 21",
      "Gây dính van ba lá tim bẩm sinh",
      "Dị tật thiếu ngón tay bẩm sinh đơn thuần"
    ],
    correct: 0,
    explanation: "Warfarin qua được nhau thai và ức chế quá trình carboxyl hóa của osteocalcin (protein xương phụ thuộc vitamin K). Phơi nhiễm tuần 6 - 9 gây Hội chứng Warfarin thai nhi: thiểu sản mũi (mũi tẹt sâu), bất thường xương (chấm vôi hóa đầu xương), thiểu năng trí tuệ và tật mắt. Kháng đông an toàn trong thai kỳ là LMWH."
  },
  {
    chapter: "Glucocorticoid & Phác đồ điều trị",
    source: "HMU",
    sourceName: "Đại học Y Hà Nội",
    question: "Tương đương liều chống viêm giữa các Glucocorticoid kinh điển: Liều 5 mg Prednisolon đường uống tương đương với bao nhiêu mg Methylprednisolon và Hydrocortison?",
    options: [
      "4 mg Methylprednisolon và 20 mg Hydrocortison",
      "10 mg Methylprednisolon và 5 mg Hydrocortison",
      "2 mg Methylprednisolon và 100 mg Hydrocortison",
      "8 mg Methylprednisolon và 50 mg Hydrocortison"
    ],
    correct: 0,
    explanation: "Bảng tương đương liều chống viêm Corticoid chuẩn: 20 mg Hydrocortisone = 5 mg Prednisone = 5 mg Prednisolone = 4 mg Methylprednisolone = 4 mg Triamcinolone = 0.75 mg Dexamethasone = 0.6 mg Betamethasone."
  },
  {
    chapter: "Glucocorticoid & Phác đồ điều trị",
    source: "HMU",
    sourceName: "Đại học Y Hà Nội",
    question: "Thời điểm uống Corticoid liều duy nhất hàng ngày tối ưu nhất để giảm thiểu nguy cơ ức chế trục tuyến thượng thận (HPA) là:",
    options: [
      "Vào khoảng 7 đến 8 giờ sáng cùng hoặc sau bữa ăn sáng",
      "Ngay trước khi đi ngủ vào ban đêm lúc 22 giờ",
      "Vào lúc 14 giờ chiều khi mệt mỏi nhất",
      "Vào giữa đêm lúc 2 giờ sáng khi nồng độ cortisol thấp nhất"
    ],
    correct: 0,
    explanation: "Nồng độ Cortisol nội sinh trong cơ thể tiết theo nhịp sinh học ngày đêm: cao nhất vào khoảng 7-8 giờ sáng và giảm dần về đêm. Uống Corticoid ngoại sinh vào buổi sáng trùng với đỉnh sinh lý của cơ thể, nồng độ thuốc sẽ giảm xuống thấp vào buổi tối, giúp tuyến yên và hạ đồi ít bị ức chế phản hồi âm tính nhất."
  },
  {
    chapter: "Tương tác thuốc & Tương kỵ",
    source: "HMU",
    sourceName: "Đại học Y Hà Nội",
    question: "Khi tiêm truyền tĩnh mạch dung dịch Kali Clorid (KCl) điều trị hạ kali máu, nguyên tắc an toàn tuyệt đối bắt buộc phải tuân thủ để tránh ngừng tim đột ngột là:",
    options: [
      "Bắt buộc phải pha loãng trong chai dịch truyền và truyền tĩnh mạch chậm, TUYỆT ĐỐI KHÔNG BAO GIỜ tiêm tĩnh mạch trực tiếp (Bolus) dung dịch KCl đậm đặc",
      "Tiêm thật nhanh trong vòng 30 giây để cắt cơn hạ kali cấp",
      "Pha KCl đậm đặc vào nước cất để tiêm bắp sâu",
      "Cho bệnh nhân hít khí dung dung dịch KCl nguyên chất"
    ],
    correct: 0,
    explanation: "KCl đậm đặc tiêm trực tiếp tĩnh mạch là liều tiêm tử hình gây rung thất và ngừng tim tâm trương tức thì. KCl luôn luôn phải được pha loãng kỹ trong dịch truyền (nồng độ ngoại vi tối đa <= 40 mEq/L) và tốc độ truyền không vượt quá 10 - 20 mEq/giờ dưới sự giám sát chặt chẽ của máy theo dõi điện tim (monitor)."
  },
  {
    chapter: "ADR, Dị ứng & Sốc phản vệ",
    source: "HMU",
    sourceName: "Đại học Y Hà Nội",
    question: "Thuốc kháng Histamin H1 thế hệ 1 (như Clorpheniramin, Promethazin) gây tác dụng phụ buồn ngủ sâu và khô miệng táo bón là do vượt qua hàng rào máu não và ức chế thụ thể nào?",
    options: [
      "Ức chế thụ thể Histamin H1 trung ương và thụ thể Muscarinic cholinergic ngoại vi",
      "Kích thích thụ thể Adrenergic alpha-1 tại mao mạch",
      "Chẹn thụ thể Dopamin D2 tại vùng dưới đồi",
      "Ức chế thụ thể GABA-A tại tủy sống"
    ],
    correct: 0,
    explanation: "Kháng H1 thế hệ 1 là các phân tử thân dầu dễ dàng qua hàng rào máu não phong bế thụ thể H1 trung ương (gây ức chế thần kinh, buồn ngủ dữ dội, giảm tập trung). Đồng thời thuốc có cấu trúc giống Atropin nên chẹn thụ thể Muscarinic ngoại vi gây khô miệng, mờ mắt, táo bón, bí tiểu."
  },
  {
    chapter: "Kháng sinh & Kháng sinh dự phòng",
    source: "HMU",
    sourceName: "Đại học Y Hà Nội",
    question: "Kháng sinh nhóm Sulfamid phối hợp Co-trimoxazol (Sulfamethoxazol + Trimethoprim) có cơ chế hiệp đồng diệt khuẩn thông qua việc:",
    options: [
      "Ức chế hai bước liên tiếp trong con đường sinh tổng hợp acid folic cần thiết cho vi khuẩn",
      "Phá hủy màng tế bào và ức chế tiểu đơn vị ribosom 50S",
      "Ức chế enzym DNA-gyrase và topoisomerase IV",
      "Kìm hãm tổng hợp vách tế bào peptidoglycan"
    ],
    correct: 0,
    explanation: "Sulfamethoxazole cạnh tranh với PABA ức chế enzym Dihydropteroate synthase; Trimethoprim ức chế enzym Dihydrofolate reductase tiếp theo. Phối hợp 2 chất ức chế 2 bước liên tiếp tạo ra tác dụng diệt khuẩn hiệp đồng mạnh mẽ gấp hàng chục lần so với dùng đơn lẻ từng chất."
  },
  {
    chapter: "Kháng sinh & Kháng sinh dự phòng",
    source: "HMU",
    sourceName: "Đại học Y Hà Nội",
    question: "Kháng sinh Clindamycin đường uống hoặc đường tiêm có nguy cơ cao nhất gây ra biến chứng tiêu hóa nào do loạn khuẩn đường ruột?",
    options: [
      "Viêm đại tràng giả mạc do độc tố vi khuẩn Clostridioides difficile bùng phát",
      "Loét dạ dày tá tràng thủng cấp tính",
      "Táo bón mạn tính gây tắc ruột cơ học",
      "Xuất huyết đường mật do suy giảm tổng hợp prothrombin"
    ],
    correct: 0,
    explanation: "Clindamycin tiêu diệt phổ rộng các vi khuẩn kỵ khí bình thường trong ruột, tạo điều kiện thuận lợi cho bào tử Clostridioides difficile sống sót phát triển ồ ạt và tiết độc tố A và B gây viêm đại tràng giả mạc với tiêu chảy nhiều lần, sốt cao, tăng bạch cầu và phân có nhầy mủ."
  },
  {
    chapter: "Dược động học & Suy gan, thận",
    source: "HMU",
    sourceName: "Đại học Y Hà Nội",
    question: "Kháng sinh nào sau đây có con đường thải trừ chủ yếu qua gan và đường mật, do đó KHÔNG CẦN hiệu chỉnh liều khi bệnh nhân bị suy giảm chức năng thận đơn thuần?",
    options: [
      "Moxifloxacin",
      "Levofloxacin",
      "Ciprofloxacin",
      "Ofloxacin"
    ],
    correct: 0,
    explanation: "Trong nhóm Quinolon hô hấp, Moxifloxacin chuyển hóa qua gan thành các chất liên hợp glucuronid và sulfat, bài tiết qua phân và mật, chỉ < 20% bài xuất qua thận. Do đó bệnh nhân suy giảm chức năng thận ở mọi giai đoạn không cần phải chỉnh liều Moxifloxacin (khác với Levofloxacin thải qua thận > 80% bắt buộc phải chỉnh liều)."
  },
  {
    chapter: "Tương tác thuốc & Tương kỵ",
    source: "HMU",
    sourceName: "Đại học Y Hà Nội",
    question: "Phối hợp giữa thuốc chống viêm không steroid (NSAID như Meloxicam, Celecoxib) với thuốc ức chế men chuyển (ACEI) và thuốc lợi tiểu (Triple Whammy) làm tăng vọt nguy cơ xảy ra biến cố:",
    options: [
      "Tổn thương thận cấp (Acute Kidney Injury - AKI) do giảm mạnh áp lực lọc cầu thận",
      "Xuất huyết phế nang lan tỏa ở cả hai phổi",
      "Hội chứng cường giáp kịch phát",
      "Tăng nhãn áp góc mở cấp tính"
    ],
    correct: 0,
    explanation: "Bộ ba nguy hiểm (Triple Whammy): Lợi tiểu làm giảm thể tích tuần hoàn; NSAID ức chế prostaglandin gây co tiểu động mạch vào cầu thận; ACEI làm giãn tiểu động mạch đi của cầu thận. Cả 3 tác động đồng thời làm sụt giảm nghiêm trọng áp lực mao mạch cầu thận, dẫn đến suy thận cấp thiếu máu cục bộ."
  },
  {
    chapter: "Thuốc giảm đau",
    source: "HMU",
    sourceName: "Đại học Y Hà Nội",
    question: "Aspirin bị chống chỉ định tuyệt đối ở trẻ em và thanh thiếu niên mắc các bệnh nhiễm virus cấp tính (như sốt cúm, thủy đậu) do nguy cơ gây ra hội chứng chết người nào?",
    options: [
      "Hội chứng Reye (gây bệnh não cấp và thoái hóa mỡ tế bào gan bùng phát)",
      "Hội chứng Fanconi thận",
      "Hội chứng vàng da nhân não",
      "Hội chứng灰 (Gray syndrome)"
    ],
    correct: 0,
    explanation: "Dùng Aspirin ở trẻ nhiễm virus (cúm A/B, thủy đậu) liên quan mật thiết với Hội chứng Reye - một bệnh lý ty thể cấp tính cực kỳ nguy hiểm đặc trưng bởi thoái hóa mỡ vi thể tế bào gan và phù não cấp tính, tỷ lệ tử vong lên tới 30 - 40%. Do đó, Paracetamol là thuốc hạ sốt an toàn được chỉ định thay thế cho trẻ em."
  },
  {
    chapter: "Kháng sinh & Kháng sinh dự phòng",
    source: "HMU",
    sourceName: "Đại học Y Hà Nội",
    question: "Thuốc kháng virus Oseltamivir (Tamiflu) trong điều trị Cúm A hoặc Cúm B đạt hiệu quả lâm sàng tối ưu nhất khi được bắt đầu dùng vào thời điểm nào?",
    options: [
      "Trong vòng 48 giờ đầu tiên kể từ khi khởi phát triệu chứng sốt",
      "Sau khi bệnh nhân đã sốt liên tục được 5 ngày",
      "Chỉ dùng khi có biến chứng suy hô hấp phải thở máy",
      "Sau khi kháng thể kháng cúm trong máu tăng gấp 4 lần"
    ],
    correct: 0,
    explanation: "Oseltamivir là chất ức chế men Neuraminidase, ngăn cản sự giải phóng virus mới sinh sôi từ tế bào vật chủ. Sự nhân lên của virus cúm đạt đỉnh trong 24 - 72 giờ đầu. Bắt đầu dùng thuốc trong vòng 48 giờ đầu giúp rút ngắn thời gian mắc bệnh, giảm độ nặng và ngăn ngừa các biến chứng viêm phổi nguy hiểm."
  }
];

module.exports = HMU_QUESTIONS;
