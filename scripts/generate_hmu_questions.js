// 60 High-Yield Clinical Pharmacy Questions - Đại học Y Hà Nội (HMU)
// Chuyên đề: Sốc phản vệ, Cấp cứu ngộ độc, Tăng/Hạ Natri/Kali, Kháng sinh hồi sức, Độc tính thai kỳ
// Đã chuẩn hóa độ dài phương án, loại bỏ hoàn toàn thiên kiến độ dài

const HMU_QUESTIONS = [
  {
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Theo Thông tư 51/2017/TT-BYT của Bộ Y tế, thuốc thiết yếu, quan trọng hàng đầu và bắt buộc phải tiêm ngay lập tức cho người bệnh bị phản vệ từ Độ II trở lên là:",
    "options": [
      "Thuốc Methylprednisolon tiêm tĩnh mạch",
      "Thuốc Adrenalin tiêm bắp ngay lập tức",
      "Thuốc Diphenhydramin tiêm bắp sâu chậm",
      "Dung dịch Natri bicarbonat truyền tĩnh mạch"
    ],
    "correct": 1,
    "explanation": "Thông tư 51/2017/TT-BYT khẳng định Adrenalin là thuốc thiết yếu, quan trọng bậc nhất cứu sống người bệnh bị phản vệ. Ngay khi phát hiện phản vệ từ Độ II (nặng) trở lên, phải tiêm bắp Adrenalin ngay lập tức, không được trì hoãn để chờ tiêm Corticoid hay kháng Histamin."
  },
  {
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Theo Thông tư 51/2017/TT-BYT, liều dùng và đường dùng Adrenalin khởi đầu khuyến cáo cho người lớn khi xử trí phản vệ Độ II hoặc Độ III là:",
    "options": [
      "Tiêm tĩnh mạch trực tiếp 1 ống nguyên chất trong 10 giây",
      "Tiêm bắp 1/2 ống ở mặt trước ngoài đùi ngay khi phát hiện",
      "Tiêm dưới da 1/4 ống tại vùng cơ delta cánh tay của bệnh nhân",
      "Pha loãng 1 ống vào 500 ml Natri Clorid 0.9% truyền trong 8 giờ"
    ],
    "correct": 1,
    "explanation": "Liều khởi đầu cho người lớn là tiêm bắp 1/2 ống (0.5 mg) dung dịch Adrenalin 1mg/1ml (1:1000). Vị trí tiêm tối ưu là mặt trước ngoài đùi vì có hệ thống mạch máu phong phú, giúp thuốc hấp thu vào tuần hoàn nhanh và đạt đỉnh cao hơn nhiều so với cơ delta hay tiêm dưới da."
  },
  {
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Sau khi tiêm bắp liều Adrenalin đầu tiên trong cấp cứu phản vệ theo Thông tư 51, nếu người bệnh vẫn chưa có dấu hiệu cải thiện huyết áp hoặc còn khó thở, thời gian khuyến cáo để tiêm nhắc lại liều tiếp theo là:",
    "options": [
      "Sau mỗi 3 đến 5 phút",
      "Sau mỗi 30 phút",
      "Sau 2 giờ",
      "Chỉ được tiêm 1 liều duy nhất trong 24 giờ"
    ],
    "correct": 0,
    "explanation": "Theo Thông tư 51/2017/TT-BYT: Cứ sau mỗi 3 - 5 phút theo dõi nếu huyết áp chưa nâng lên hoặc triệu chứng hô hấp chưa thuyên giảm, tiếp tục tiêm bắp nhắc lại liều Adrenalin như trên cho đến khi huyết áp và mạch ổn định (tối đa có thể tiêm 2 - 3 lần trước khi thiết lập đường truyền tĩnh mạch liên tục)."
  },
  {
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Phân độ phản vệ theo Thông tư 51/2017/TT-BYT chia làm mấy mức độ và phản vệ Độ I (nhẹ) được định nghĩa bởi dấu hiệu nào?",
    "options": [
      "3 mức độ; Độ I là tụt huyết áp kịch phát và mất tri giác hoàn toàn",
      "4 mức độ; Độ I chỉ có triệu chứng ở da, tổ chức dưới da và niêm mạc",
      "5 mức độ; Độ I là co thắt thanh quản tím tái và ngừng thở đột ngột",
      "2 mức độ; Độ I là trụy mạch và ngừng tuần hoàn hô hấp không hồi phục"
    ],
    "correct": 1,
    "explanation": "Thông tư 51 chia phản vệ làm 4 mức độ: Độ I (Nhẹ: chỉ ở da, niêm mạc); Độ II (Nặng: từ 2 cơ quan trở lên như mày đay + khó thở, tức ngực, tụt HA thoáng qua); Độ III (Nguy kịch: trụy mạch, tụt HA, thở rít, lú lẫn); Độ IV (Ngừng tuần hoàn hô hấp)."
  },
  {
    "chapter": "Thuốc giảm đau",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Chất giải độc đặc hiệu (Antidote) trong ngộ độc cấp tính Paracetamol do quá liều dẫn đến tích lũy chất chuyển hóa độc NAPQI gây hoại tử tế bào gan là:",
    "options": [
      "N-acetylcystein",
      "Flumazenil",
      "Atropin sulfat",
      "Naloxon hydroclorid"
    ],
    "correct": 0,
    "explanation": "Khi quá liều Paracetamol, con đường liên hợp sulfat và glucuronid bị bão hòa, enzym CYP2E1 tạo ra lượng lớn NAPQI làm cạn kiệt Glutathione nội sinh. N-acetylcysteine (NAC) cung cấp nhóm sulfhydryl (-SH) để tái tạo Glutathione và trực tiếp liên hợp bất hoạt NAPQI, bảo vệ tế bào gan."
  },
  {
    "chapter": "Thuốc giảm đau",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Hiệu quả giải độc bảo vệ tế bào gan tối đa của N-acetylcystein (NAC) đường uống hoặc truyền tĩnh mạch đạt được tốt nhất khi bắt đầu dùng trong khoảng thời gian nào sau ngộ độc Paracetamol?",
    "options": [
      "Trong vòng 8 giờ đầu tiên sau khi uống quá liều",
      "Sau 24 đến 48 giờ khi men gan ALT bắt đầu tăng vọt",
      "Chỉ dùng khi bệnh nhân đã xuất hiện vàng da và hôn mê gan",
      "Sau 5 ngày điều trị nâng đỡ"
    ],
    "correct": 0,
    "explanation": "Nghiên cứu lâm sàng kinh điển của Prescott cho thấy dùng NAC trong vòng 8 giờ đầu sau uống Paracetamol mang lại tỷ lệ bảo vệ gan gần như 100% (tỷ lệ hoại tử gan nặng < 2%). Sau 8 giờ hiệu quả giảm dần, nhưng NAC vẫn có lợi ích cải thiện tỷ lệ sống ngay cả khi dùng muộn."
  },
  {
    "chapter": "Thuốc giảm đau",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Tam chứng kinh điển gợi ý chẩn đoán Ngộ độc cấp tính các dẫn chất Opioid (Morphin, Heroin, Fentanyl) tại khoa Cấp cứu bao gồm:",
    "options": [
      "Sốt cao co giật, đồng tử giãn to hai bên kèm tiêu chảy cấp và mất nước nặng",
      "Hôn mê ức chế tri giác, đồng tử co nhỏ như đầu đinh ghim và ức chế hô hấp",
      "Tăng huyết áp kịch phát, tim đập nhanh và rung giật nhãn cầu ngang liên tục",
      "Vàng da tan máu, nổi ban xuất huyết hoại tử trên da và suy thận cấp vô niệu"
    ],
    "correct": 1,
    "explanation": "Tam chứng ngộ độc Opioid điển hình gồm: (1) Ức chế thần kinh trung ương (ngủ gà, hôn mê); (2) Đồng tử co nhỏ như đầu đinh ghim (miosis); (3) Ức chế hô hấp (nhịp thở chậm < 10-12 lần/phút, thở nông, ngừng thở dẫn đến tím tái và tử vong nếu không được tiêm Naloxone kịp thời)."
  },
  {
    "chapter": "Thuốc giảm đau",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Khi tiêm tĩnh mạch Naloxon để hồi sức cấp cứu ngộ độc Morphin gây ngừng thở, lưu ý dược động học quan trọng nhất người thầy thuốc cần ghi nhớ là gì?",
    "options": [
      "Naloxon chỉ bắt đầu phát huy tác dụng lâm sàng sau 6 giờ tiêm truyền tĩnh mạch",
      "Thời gian bán thải Naloxon rất ngắn nên có thể tái hôn mê khi thuốc hết tác dụng",
      "Thuốc có nguy cơ gây hạ đường huyết nghiêm trọng đe dọa co giật và phù não cấp",
      "Naloxon gắn kết vĩnh viễn không hồi phục vào các thụ thể Mu-opioid tại thần kinh"
    ],
    "correct": 1,
    "explanation": "Naloxone có thời gian tác dụng rất ngắn (30 - 90 phút), trong khi Morphin tác dụng 4 - 6 giờ, Methadone kéo dài > 24 giờ. Sau khi bệnh nhân tỉnh lại do liều Naloxone đầu tiên, họ có thể tái ngộ độc và ngừng thở khi Naloxone bị thải trừ. Vì vậy cần theo dõi liên tục ít nhất vài giờ và sẵn sàng tiêm nhắc lại hoặc truyền tĩnh mạch liên tục."
  },
  {
    "chapter": "Thuốc giảm đau",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Thuốc đối kháng đặc hiệu thụ thể Benzodiazepin (như Diazepam, Midazolam) dùng để đảo ngược tác dụng an thần hôn mê là:",
    "options": [
      "Flumazenil",
      "Naloxon",
      "Atropin",
      "Neostigmin"
    ],
    "correct": 0,
    "explanation": "Flumazenil (Anexate) là chất đối kháng cạnh tranh chọn lọc trên vị trí gắn Benzodiazepine của phức hợp thụ thể GABAA. Thuốc giúp bệnh nhân tỉnh lại nhanh chóng sau gây mê hoặc ngộ độc Benzodiazepine. Thận trọng nguy cơ co giật ở người nghiện thuốc mạn tính."
  },
  {
    "chapter": "Tương tác thuốc & Tương kỵ",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Chất giải độc đặc hiệu (Antidote) trong cấp cứu ngộ độc thuốc ức chế men cholinesterase nhóm phospho hữu cơ (thuốc trừ sâu Phospho hữu cơ) là sự phối hợp của:",
    "options": [
      "Atropin sulfat phối hợp Pralidoxim / PAM",
      "Naloxon phối hợp Glucose ưu trương",
      "Flumazenil phối hợp Vitamin K1",
      "Canxi gluconat phối hợp Insulin liều cao"
    ],
    "correct": 0,
    "explanation": "Phospho hữu cơ phosphoryl hóa enzym acetylcholinesterase, làm tích tụ Acetylcholine gây hội chứng cholinergic ồ ạt. Phác đồ bắt buộc gồm: (1) Atropin liều cao để chặn thụ thể Muscarinic (cắt đứt co thắt phế quản, tăng tiết đờm dãi, nhịp chậm); (2) Pralidoxime (PAM) giúp giải phóng enzym trước khi hiện tượng lão hóa (aging) xảy ra."
  },
  {
    "chapter": "Tương tác thuốc & Tương kỵ",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Trong ngộ độc thuốc chống đông Warfarin gây xuất huyết nặng đe dọa tính mạng (hoặc INR > 10 có xuất huyết), biện pháp hồi phục đông máu khẩn cấp nhất được khuyến cáo là:",
    "options": [
      "Cho bệnh nhân uống Vitamin C liều cao kết hợp truyền dung dịch Glucose ngọt",
      "Phức hợp Prothrombin đậm đặc 4 yếu tố phối hợp tiêm tĩnh mạch Vitamin K1",
      "Tiêm bắp sâu Protamin sulfat kết hợp truyền tiểu cầu đậm đặc liều cao cấp",
      "Truyền dung dịch Natri Clorid 3% ưu trương kết hợp thuốc cầm máu Tranexamic"
    ],
    "correct": 1,
    "explanation": "Vitamin K1 đường tĩnh mạch cần 6 - 24 giờ để gan tổng hợp mới các yếu tố đông máu phụ thuộc vitamin K (II, VII, IX, X). Trong xuất huyết nặng đe dọa tính mạng, cần bổ sung ngay lập tức các yếu tố đông máu sẵn có bằng Phức hợp Prothrombin cô đặc (PCC), vượt trội hơn huyết tương tươi đông lạnh (FFP) về tốc độ đảo ngược INR và thể tích truyền ít hơn."
  },
  {
    "chapter": "Tương tác thuốc & Tương kỵ",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Để trung hòa tác dụng chống đông của Heparin không phân đoạn (UFH) trong trường hợp chảy máu đe dọa tính mạng hoặc sau phẫu thuật bắc cầu tim phổi, chất giải độc đặc hiệu tiêm tĩnh mạch là:",
    "options": [
      "Protamin sulfat",
      "Idarucizumab",
      "Vitamin K1",
      "Andexanet alfa"
    ],
    "correct": 0,
    "explanation": "Protamine sulfat là một protein base mang điện tích dương mạnh. Khi vào máu, nó liên kết ion với các phân tử Heparin mang điện tích âm mạnh tạo thành phức hợp muối bền vững không còn hoạt tính chống đông. Mỗi 1 mg Protamine trung hòa được khoảng 100 đơn vị Heparin UFH."
  },
  {
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Bệnh nhân ngộ độc cấp tính thuốc chẹn thụ thể beta giao cảm (như Propranolol) liều cao xuất hiện nhịp chậm xoang nặng (< 35 lần/phút) và tụt huyết áp trơ với Atropin. Thuốc hồi sức giải độc đầu tay được lựa chọn là:",
    "options": [
      "Glucagon tiêm tĩnh mạch",
      "Flumazenil",
      "N-acetylcystein",
      "Esmolol truyền tĩnh mạch liên tục"
    ],
    "correct": 0,
    "explanation": "Glucagon kích hoạt thụ thể glucagon tại cơ tim, kích thích trực tiếp enzym adenylate cyclase không thông qua thụ thể beta giao cảm, làm tăng tổng hợp cAMP nội bào. Hậu quả là làm tăng tính tự động nút xoang, tăng dẫn truyền nhĩ thất và tăng sức co bóp cơ tim độc lập với thụ thể beta."
  },
  {
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Trong cấp cứu Tăng Kali máu nặng (K⁺ > 6.5 mmol/L hoặc có biến đổi điện tâm đồ như sóng T nhọn cao, mất sóng P, giãn rộng phức bộ QRS), bước xử trí đầu tiên bắt buộc phải làm ngay trong 1 đến 3 phút để bảo vệ màng tế bào cơ tim tránh rung thất ngừng tim là:",
    "options": [
      "Cho người bệnh uống ngay nhựa trao đổi ion Kayexalate kết hợp sorbitol nhuận tràng",
      "Tiêm tĩnh mạch chậm Canxi Clorid 10% hoặc Canxi Gluconat 10% để ổn định màng tim",
      "Tiêm tĩnh mạch Insulin tác dụng nhanh kèm truyền Glucose ưu trương để hạ kali máu",
      "Truyền dung dịch Natri bicarbonat 1.4% tốc độ nhanh nhằm mục đích kiềm hóa máu sớm"
    ],
    "correct": 1,
    "explanation": "Ion Canxi (Ca2+) đối kháng trực tiếp tác dụng khử cực của K+ trên màng tế bào cơ tim, giúp ổn định điện thế màng và phục hồi dẫn truyền cơ tim ngay trong 1-3 phút, ngăn ngừa loạn nhịp thất chết người. Lưu ý Canxi không làm giảm nồng độ K+ máu, nên sau đó phải lập tức phối hợp Insulin+Glucose và khí dung Salbutamol để kéo K+ vào tế bào."
  },
  {
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Nhóm thuốc hạ huyết áp ức chế men chuyển (ACEI) và chẹn thụ thể Angiotensin II (ARB) bị CHỐNG CHỈ ĐỊNH TUYỆT ĐỐI trong 3 tháng giữa và 3 tháng cuối của thai kỳ (Phân loại D) vì gây ra biến chứng nghiêm trọng nào trên thai nhi?",
    "options": [
      "Gây suy thận thai nhi, thiểu ối, giảm sản sọ và dị tật phổi",
      "Gây dính ngón tay và biến dạng đốt sống thắt lưng",
      "Gây đục thủy tinh thể bẩm sinh và điếc tiếp nhận",
      "Làm tăng đường huyết thai nhi dẫn đến thai to quá mức"
    ],
    "correct": 0,
    "explanation": "Angiotensin II đóng vai trò sinh tồn trong việc duy trì tưới máu và phát triển thận thai nhi ở tam cá nguyệt 2 và 3. Dùng ACEI/ARB khiến thai nhi bị suy thận vô niệu, dẫn đến cạn dịch ối (thiểu ối), hậu quả là thiểu sản phổi, biến dạng sọ mặt, co rút khớp và tử vong thai nhi trong tử cung."
  },
  {
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Thuốc chống viêm không steroid (NSAID như Ibuprofen, Diclofenac) bị chống chỉ định sử dụng từ tuần thứ 28 của thai kỳ (3 tháng cuối thai kỳ) do nguy cơ gây ra biến cố tim mạch nào ở thai nhi?",
    "options": [
      "Thông liên thất lỗ lớn và đảo gốc động mạch đe dọa tử vong sau sinh",
      "Đóng sớm ống động mạch dẫn đến tăng áp động mạch phổi và suy tim thai",
      "Hẹp van hai lá bẩm sinh và thiểu sản buồng thất trái của tim thai nhi",
      "Ngừng tim thai do block nhĩ thất hoàn toàn và rung thất thứ phát cấp"
    ],
    "correct": 1,
    "explanation": "Prostaglandin (PGE2) có vai trò duy trì sự mở của ống động mạch thai nhi trong tử cung. NSAID ức chế enzym COX làm cạn kiệt Prostaglandin, khiến ống động mạch đóng sớm, dẫn đến tăng áp động mạch phổi sơ sinh, suy tim thai và thiểu ối; đồng thời ức chế cơn co tử cung kéo dài thời gian chuyển dạ."
  },
  {
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Thuốc trị mụn trứng cá Isotretinoin (dẫn xuất vitamin A đường uống) được xếp vào phân loại thai kỳ X (chống chỉ định tuyệt đối) do có độc tính gì?",
    "options": [
      "Làm tan máu cấp tính ở người mẹ dẫn đến trụy mạch và sốc mất máu tức thì",
      "Khả năng gây quái thai cực mạnh với dị tật sọ não, tai, tim mạch và tuyến ức",
      "Gây ung thư biểu mô nội mạc tử cung xuất hiện ngay trong quá trình mang thai",
      "Gây suy tủy xương toàn dòng làm giảm tiểu cầu nặng dẫn đến sảy thai tự nhiên"
    ],
    "correct": 1,
    "explanation": "Isotretinoin là một trong những chất gây quái thai nguy hiểm nhất trong y học (nguy cơ dị tật thai nhi lên tới > 30% nếu phơi nhiễm trong tam cá nguyệt đầu). Thuốc đòi hỏi cam kết ngừa thai kép nghiêm ngặt (chương trình iPLEDGE) và thử thai âm tính trước khi kê đơn."
  },
  {
    "chapter": "Loãng xương, Tránh thai & Chuyển hóa",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Trong cấp cứu Cơn bão giáp trạng (Thyroid storm), dung dịch chứa Iod (như dung dịch Lugol hoặc dung dịch Kali iodid) bắt buộc phải được dùng vào thời điểm nào sau khi đã dùng thuốc kháng giáp trạng tổng hợp (như PTU)?",
    "options": [
      "Kháng sinh phổ rộng, Thuốc lợi tiểu quai, Canxi gluconat và Vitamin C tiêm",
      "Thuốc kháng giáp trạng tổng hợp, Iod vô cơ, Chẹn beta và Glucocorticoid",
      "Insulin nhanh, Natri bicarbonat, Thuốc ức chế men chuyển và Dopamin truyền",
      "Morphin sulfat, Kháng Histamin H1, Kháng đông Heparin và Dịch truyền đẳng trương"
    ],
    "correct": 1,
    "explanation": "Dung dịch Lugol cung cấp lượng lớn Iod vô cơ gây hiệu ứng Wolff-Chaikoff ức chế giải phóng hormon tuyến giáp vào máu. Bắt buộc phải uống sau PTU ít nhất 1 giờ để PTU kịp ức chế quá trình gắn iod (organification). Nếu cho Lugol trước, lượng iod này sẽ được tuyến giáp sử dụng làm nguyên liệu tổng hợp thêm hormon, làm cơn bão giáp thêm trầm trọng."
  },
  {
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Ở bệnh nhân Hạ Natri máu nặng có triệu chứng thần kinh (như co giật, hôn mê), việc truyền dung dịch Natri Clorid 3% ưu trương đòi hỏi nguyên tắc an toàn quan trọng nào để tránh Hội chứng tiêu myelin cầu não (Osmotic Demyelination Syndrome - ODS)?",
    "options": [
      "Truyền thật nhanh Natri Clorid 3% để đưa natri máu về bình thường 140 mmol/L trong 6 giờ",
      "Truyền dung dịch Natri Clorid 3% ưu trương, nâng natri không quá 8 - 10 mmol/L trong 24h",
      "Chỉ cần cho bệnh nhân hạn chế uống nước kết hợp dùng thuốc lợi tiểu quai Furosemid",
      "Truyền dung dịch Glucose 5% đẳng trương tốc độ nhanh để đào thải lượng nước tự do dư thừa"
    ],
    "correct": 1,
    "explanation": "Khi tế bào não thích nghi với môi trường nhược trương mạn tính, nếu bù Natri quá nhanh, nước bị rút đột ngột ra khỏi tế bào não do chênh lệch áp lực thẩm thấu, dẫn đến hủy hoại bao myelin vùng cầu não (hội chứng ODS) gây liệt tứ chi, liệt hành não và hôn mê vĩnh viễn. Giới hạn an toàn là không tăng quá 8-10 mEq/L/24 giờ."
  },
  {
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Kháng sinh nhóm Aminoglycosid (Gentamicin, Amikacin) gây độc tính trên thận (Nephrotoxicity) theo cơ chế bệnh sinh nào tại nhu mô thận?",
    "options": [
      "Lắng đọng tinh thể trong lòng ống góp gây tắc nghẽn vô niệu và tăng urê máu cấp",
      "Tích tụ trong tế bào biểu mô ống lượn gần gây hoại tử tế bào ống thận cấp tính",
      "Co thắt dữ dội tiểu động mạch vào cầu thận do kích hoạt hệ renin-angiotensin",
      "Tạo kháng thể tự miễn phá hủy màng đáy cầu thận gây hội chứng thận hư tái phát"
    ],
    "correct": 1,
    "explanation": "Aminoglycosid được lọc qua cầu thận và tái hấp thu một phần nhỏ vào tế bào biểu mô ống lượn gần qua thụ thể Megalin. Tại đây thuốc tích tụ trong lysosome, ức chế enzyme phospholipase và gây vỡ lysosome, giải phóng enzym tiêu thể dẫn đến hoại tử ống thận cấp (ATN) và suy thận thể còn bảo tồn nước tiểu."
  },
  {
    "chapter": "Thuốc giảm đau",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Tác dụng không mong muốn thường gặp nhất của Morphin và các thuốc giảm đau Opioid dùng kéo dài mà người bệnh KHÔNG BAO GIỜ phát triển hiện tượng dung nạp (Tolerance) theo thời gian là:",
    "options": [
      "Táo bón và co đồng tử",
      "Buồn nôn và nôn",
      "An thần buồn ngủ",
      "Ức chế hô hấp thở chậm"
    ],
    "correct": 0,
    "explanation": "Người bệnh dùng Opioid dài ngày nhanh chóng dung nạp với tác dụng giảm đau, an thần, ức chế hô hấp và buồn nôn (nghĩa là các tác dụng phụ này giảm dần). Tuy nhiên, hiện tượng táo bón và co đồng tử hầu như KHÔNG BAO GIỜ bị dung nạp. Do đó, bệnh nhân điều trị Opioid mạn tính bắt buộc phải được chủ động kê thêm thuốc nhuận tràng."
  },
  {
    "chapter": "Thuốc giảm đau",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Theo Bậc thang giảm đau của Tổ chức Y tế Thế giới (WHO Pain Ladder) cho bệnh nhân đau do ung thư, khi bệnh nhân xuất hiện cơn đau ở mức độ vừa đến nặng (điểm VAS từ 7 đến 10 điểm), bước bậc thang thích hợp là:",
    "options": [
      "Bậc 1: Sử dụng các thuốc Opioid yếu đơn trị liệu không cần dùng thêm thuốc giảm đau",
      "Bậc 3: Sử dụng các thuốc Opioid mạnh phối hợp thuốc giảm đau không opioid và hỗ trợ",
      "Bậc 2: Phối hợp hai loại thuốc Opioid mạnh với nhau mà không dùng thuốc bổ trợ nào",
      "Bậc 4: Phẫu thuật cắt bỏ dây thần kinh cảm giác kết hợp gây mê toàn thân liên tục"
    ],
    "correct": 1,
    "explanation": "Thang đau 3 bậc của WHO: Bậc 1 (Đau nhẹ 1-3): Không opioid (Paracetamol, NSAID); Bậc 2 (Đau vừa 4-6): Opioid yếu (Codeine, Tramadol); Bậc 3 (Đau nặng 7-10): Opioid mạnh (Morphine, Oxycodone, Fentanyl) kết hợp thuốc bổ trợ và không opioid."
  },
  {
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Thời điểm tối ưu nhất để tiêm tĩnh mạch liều Kháng sinh dự phòng trong phẫu thuật sạch hoặc sạch - nhiễm (ví dụ dùng Cefazolin) là:",
    "options": [
      "Trong vòng 30 đến 60 phút trước khi rạch da",
      "Ngay sau khi kết thúc ca mổ đưa về phòng hồi tỉnh",
      "Trước cuộc mổ 24 đến 48 giờ",
      "Khi phẫu thuật viên bắt đầu đóng vết mổ"
    ],
    "correct": 0,
    "explanation": "Mục tiêu của kháng sinh dự phòng là nồng độ thuốc trong mô tại vết rạch da phải vượt quá MIC của vi khuẩn ngay tại thời điểm rạch da. Vì vậy thời điểm chuẩn là 30 - 60 phút trước rạch da (với Cefazolin) hoặc trong vòng 120 phút với các kháng sinh cần truyền chậm như Vancomycin/Ciprofloxacin."
  },
  {
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Thời gian sử dụng Kháng sinh dự phòng phẫu thuật theo khuyến cáo của Bộ Y tế và CDC nói chung KHÔNG NÊN kéo dài quá bao lâu sau khi kết thúc phẫu thuật?",
    "options": [
      "Không quá 24 giờ sau mổ",
      "Tối thiểu 7 đến 10 ngày để tiệt khuẩn toàn thân",
      "Kéo dài cho đến khi bệnh nhân cắt chỉ vết mổ",
      "Duy trì liên tục trong suốt thời gian nằm viện"
    ],
    "correct": 0,
    "explanation": "Kháng sinh dự phòng chỉ cần thiết trong lúc mô phẫu thuật có nguy cơ nhiễm trùng. Kéo dài kháng sinh dự phòng quá 24 giờ sau mổ không làm giảm thêm tỷ lệ nhiễm khuẩn vết mổ mà làm tăng đáng kể nguy cơ nhiễm C. difficile, độc tính thận và đề kháng kháng sinh."
  },
  {
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Trong cấp cứu Nhiễm toan ceton do đái tháo đường (DKA), bước điều trị ưu tiên số 1 ngay khi tiếp cận bệnh nhân là gì?",
    "options": [
      "Cho uống ngay viên Metformin 1000 mg kết hợp truyền dung dịch Glucose ưu trương",
      "Bù dịch bằng Natri Clorid 0.9% và truyền tĩnh mạch Insulin tác dụng nhanh",
      "Tiêm dưới da Insulin tác dụng kéo dài Glargine liều cao ngay tại thời điểm nhập viện",
      "Truyền tĩnh mạch chậm Albumin người 20% kết hợp thuốc lợi tiểu Thiazid đường uống"
    ],
    "correct": 1,
    "explanation": "Bệnh nhân DKA thường mất 5 - 8 lít nước do lợi niệu thẩm thấu. Bước đầu tiên và quan trọng nhất là bù dịch bằng NaCl 0.9% (thường 1000 ml trong giờ đầu) để chống sốc giảm thể tích và phục hồi tưới máu mô. Insulin chỉ được dùng sau khi bắt đầu bù dịch và sau khi đã xác định Kali máu >= 3.3 mmol/L."
  },
  {
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Trong điều trị toan ceton do đái tháo đường (DKA), nếu nồng độ Kali huyết thanh của bệnh nhân đo được ban đầu dưới 3.3 mmol/L, xử trí dùng Insulin đúng là:",
    "options": [
      "Truyền ngay dung dịch Natri bicarbonat 1.4% liều cao để kiềm hóa máu nhanh",
      "Theo dõi sát và bù Kali trước hoặc đồng thời khi truyền Insulin tĩnh mạch",
      "Cho bệnh nhân uống thuốc lợi tiểu quai Furosemid để tăng thải acid qua nước tiểu",
      "Tiêm ngay Glucagon tĩnh mạch liều cao để kích thích giải phóng glucose dự trữ"
    ],
    "correct": 1,
    "explanation": "Insulin kích hoạt bơm Na+/K+-ATPase đưa K+ từ máu vào trong tế bào. Nếu truyền Insulin khi Kali máu đang < 3.3 mmol/L, nồng độ Kali huyết thanh sẽ tụt xuống mức cực kỳ nguy hiểm, kích hoạt cơn ngừng tim do rung thất hoặc liệt cơ hô hấp. Do đó bắt buộc phải hoãn Insulin và bù K+ trước."
  },
  {
    "chapter": "Tương tác thuốc & Tương kỵ",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Bệnh nhân điều trị bằng thuốc chống trầm cảm nhóm SSRI (như Sertralin, Fluoxetin) kết hợp thêm thuốc giảm đau Tramadol hoặc Linezolid có nguy cơ xuất hiện biến chứng đe dọa tính mạng nào?",
    "options": [
      "Hội chứng an thần kinh ác tính gây co cứng cơ dạng ống chì và hạ thân nhiệt",
      "Hội chứng Serotonin biểu hiện run giật cơ, tăng phản xạ, sốt cao và mê sảng",
      "Cơn tăng huyết áp kịch phát ác tính dẫn đến xuất huyết não diện rộng tử vong",
      "Hội chứng suy tim sung huyết cấp tính do ức chế trực tiếp sức co bóp cơ tim"
    ],
    "correct": 1,
    "explanation": "Tramadol và Linezolid (có tác dụng ức chế MAO yếu) đều làm tăng nồng độ Serotonin tại synap thần kinh. Khi phối hợp cùng SSRI, lượng Serotonin tăng quá mức kích hoạt thụ thể 5-HT2A gây Hội chứng Serotonin với tam chứng: biến đổi tri giác, kích thích thần kinh cơ (rung giật cơ giật nhãn cầu) và rối loạn thần kinh thực vật (sốt cao, vã mồ hôi, huyết áp dao động)."
  },
  {
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Thuốc giải độc đặc hiệu (Antidote) trong ngộ độc khí Carbon Monoxide (CO) gây thiếu oxy mô và hoại tử tế bào thần kinh là:",
    "options": [
      "Tiêm tĩnh mạch chậm dung dịch Xanh Methylen kết hợp truyền dịch kiềm",
      "Thở oxy 100% qua mặt nạ có túi dự trữ hoặc liệu pháp Oxy cao áp",
      "Cho thở hỗn hợp khí Carbogen chứa 95% Oxy kết hợp dùng thuốc lợi tiểu",
      "Tiêm bắp Atropin sulfat liều cao kết hợp Pralidoxim giải độc cơ quan"
    ],
    "correct": 1,
    "explanation": "Khí CO gắn vào Hemoglobin với ái lực cao gấp 200 - 250 lần oxy tạo thành HbCO. Thở khí trời thì T1/2 của HbCO là 300 phút; thở oxy 100% qua mask có túi dự trữ rút ngắn T1/2 xuống 90 phút; và liệu pháp oxy cao áp (HBO ở 2.5 - 3 atm) rút ngắn T1/2 xuống chỉ còn 20 - 30 phút, giúp nhanh chóng giải phóng oxy cho não và tim."
  },
  {
    "chapter": "Xét nghiệm lâm sàng & Nhận định KQ",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Chất giải độc đặc hiệu trong cấp cứu ngộ độc gây tăng Methemoglobin máu (Methemoglobinemia do Dapsone, Nitrit, thuốc tê Benzocain) là:",
    "options": [
      "Xanh Methylen tiêm tĩnh mạch",
      "N-acetylcystein",
      "Deferoxamin",
      "Flumazenil"
    ],
    "correct": 0,
    "explanation": "Methemoglobin chứa ion Fe3+ không có khả năng vận chuyển oxy, gây tím tái trơ với thở oxy. Xanh Methylen là chất nhận điện tử trong hệ thống NADPH-methemoglobin reductase, giúp khử Fe3+ trở lại thành Fe2+ có chức năng vận chuyển oxy bình thường."
  },
  {
    "chapter": "Sử dụng thuốc ở Phụ nữ có thai & CCB",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Thuốc chống đông đường uống Warfarin bị chống chỉ định sử dụng trong 3 tháng đầu thai kỳ (tuần 6 đến 9) do gây ra hội chứng dị tật thai nhi nào?",
    "options": [
      "Gây khép sớm ống động mạch dẫn đến tăng áp lực động mạch phổi và suy tim phải thai nhi",
      "Hội chứng Warfarin thai nhi gây giảm sản xương mũi, dị tật đầu xương đốm và teo thị giác",
      "Gây dị tật dính ngón tay chân và teo cơ bẩm sinh do độc tính trực tiếp lên tế bào sụn",
      "Gây suy giáp bẩm sinh nặng nề kèm thiểu năng trí tuệ vĩnh viễn không thể hồi phục"
    ],
    "correct": 1,
    "explanation": "Warfarin qua được nhau thai và ức chế quá trình carboxyl hóa của osteocalcin (protein xương phụ thuộc vitamin K). Phơi nhiễm tuần 6 - 9 gây Hội chứng Warfarin thai nhi: thiểu sản mũi (mũi tẹt sâu), bất thường xương (chấm vôi hóa đầu xương), thiểu năng trí tuệ và tật mắt. Kháng đông an toàn trong thai kỳ là LMWH."
  },
  {
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Tương đương liều chống viêm giữa các Glucocorticoid kinh điển: Liều 5 mg Prednisolon đường uống tương đương với bao nhiêu mg Methylprednisolon và Hydrocortison?",
    "options": [
      "4 mg Methylprednisolon và 20 mg Hydrocortison",
      "10 mg Methylprednisolon và 5 mg Hydrocortison",
      "2 mg Methylprednisolon và 100 mg Hydrocortison",
      "8 mg Methylprednisolon và 50 mg Hydrocortison"
    ],
    "correct": 0,
    "explanation": "Bảng tương đương liều chống viêm Corticoid chuẩn: 20 mg Hydrocortisone = 5 mg Prednisone = 5 mg Prednisolone = 4 mg Methylprednisolone = 4 mg Triamcinolone = 0.75 mg Dexamethasone = 0.6 mg Betamethasone."
  },
  {
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Thời điểm uống Corticoid liều duy nhất hàng ngày tối ưu nhất để giảm thiểu nguy cơ ức chế trục tuyến thượng thận (HPA) là:",
    "options": [
      "Vào khoảng 7 đến 8 giờ sáng cùng hoặc sau bữa ăn sáng",
      "Ngay trước khi đi ngủ vào ban đêm lúc 22 giờ",
      "Vào lúc 14 giờ chiều khi mệt mỏi nhất",
      "Vào giữa đêm lúc 2 giờ sáng khi nồng độ cortisol thấp nhất"
    ],
    "correct": 0,
    "explanation": "Nồng độ Cortisol nội sinh trong cơ thể tiết theo nhịp sinh học ngày đêm: cao nhất vào khoảng 7-8 giờ sáng và giảm dần về đêm. Uống Corticoid ngoại sinh vào buổi sáng trùng với đỉnh sinh lý của cơ thể, nồng độ thuốc sẽ giảm xuống thấp vào buổi tối, giúp tuyến yên và hạ đồi ít bị ức chế phản hồi âm tính nhất."
  },
  {
    "chapter": "Tương tác thuốc & Tương kỵ",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Khi tiêm truyền tĩnh mạch dung dịch Kali Clorid (KCl) điều trị hạ kali máu, nguyên tắc an toàn tuyệt đối bắt buộc phải tuân thủ để tránh ngừng tim đột ngột là:",
    "options": [
      "Có thể tiêm tĩnh mạch trực tiếp thật nhanh trong vòng 1 phút nếu bệnh nhân hạ kali nặng",
      "Bắt buộc pha loãng trong chai dịch truyền và truyền chậm, TUYỆT ĐỐI KHÔNG tiêm trực tiếp",
      "Pha loãng trong dung dịch Glucose ưu trương 20% và tiêm bolus tĩnh mạch liều nạp ban đầu",
      "Chỉ được tiêm bắp sâu ở cơ delta cánh tay và tuyệt đối không bao giờ được truyền tĩnh mạch"
    ],
    "correct": 1,
    "explanation": "KCl đậm đặc tiêm trực tiếp tĩnh mạch là liều tiêm tử hình gây rung thất và ngừng tim tâm trương tức thì. KCl luôn luôn phải được pha loãng kỹ trong dịch truyền (nồng độ ngoại vi tối đa <= 40 mEq/L) và tốc độ truyền không vượt quá 10 - 20 mEq/giờ dưới sự giám sát chặt chẽ của máy theo dõi điện tim (monitor)."
  },
  {
    "chapter": "ADR, Dị ứng & Sốc phản vệ",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Thuốc kháng Histamin H1 thế hệ 1 (như Clorpheniramin, Promethazin) gây tác dụng phụ buồn ngủ sâu và khô miệng táo bón là do vượt qua hàng rào máu não và ức chế thụ thể nào?",
    "options": [
      "Tác dụng kích thích thụ thể adrenergic gây tăng huyết áp kịch phát và vỡ phình mạch",
      "Tác dụng kháng cholinergic gây khô miệng, mờ mắt, bí tiểu và an thần buồn ngủ",
      "Tác dụng ức chế tủy xương gây giảm tế bào máu toàn dòng và nhiễm trùng cơ hội",
      "Tác dụng gây độc tế bào gan dẫn đến tăng men gan kịch phát và suy gan cấp tính"
    ],
    "correct": 1,
    "explanation": "Kháng H1 thế hệ 1 là các phân tử thân dầu dễ dàng qua hàng rào máu não phong bế thụ thể H1 trung ương (gây ức chế thần kinh, buồn ngủ dữ dội, giảm tập trung). Đồng thời thuốc có cấu trúc giống Atropin nên chẹn thụ thể Muscarinic ngoại vi gây khô miệng, mờ mắt, táo bón, bí tiểu."
  },
  {
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Kháng sinh nhóm Sulfamid phối hợp Co-trimoxazol (Sulfamethoxazol + Trimethoprim) có cơ chế hiệp đồng diệt khuẩn thông qua việc:",
    "options": [
      "Hội chứng suy tuyến thượng thận cấp và tụt huyết áp kịch phát",
      "Hội chứng Stevens-Johnson và Hoại tử thượng bì nhiễm độc",
      "Viêm tụy cấp xuất huyết hoại tử lan tỏa hai bên khoang sau phúc mạc",
      "Hội chứng ngoại tháp gây cơn co cứng cơ và loạn trương lực cơ vân"
    ],
    "correct": 1,
    "explanation": "Sulfamethoxazole cạnh tranh với PABA ức chế enzym Dihydropteroate synthase; Trimethoprim ức chế enzym Dihydrofolate reductase tiếp theo. Phối hợp 2 chất ức chế 2 bước liên tiếp tạo ra tác dụng diệt khuẩn hiệp đồng mạnh mẽ gấp hàng chục lần so với dùng đơn lẻ từng chất."
  },
  {
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Kháng sinh Clindamycin đường uống hoặc đường tiêm có nguy cơ cao nhất gây ra biến chứng tiêu hóa nào do loạn khuẩn đường ruột?",
    "options": [
      "Hội chứng tăng áp lực nội sọ giả u não do tăng tiết dịch não tủy",
      "Viêm đại tràng giả mạc do nhiễm khuẩn Clostridioides difficile",
      "Suy tủy xương không hồi phục dẫn đến thiếu máu bất sản toàn dòng",
      "Viêm gan tắc mật cấp tính kèm hoại tử nhu mô gan dạng bùng phát"
    ],
    "correct": 1,
    "explanation": "Clindamycin tiêu diệt phổ rộng các vi khuẩn kỵ khí bình thường trong ruột, tạo điều kiện thuận lợi cho bào tử Clostridioides difficile sống sót phát triển ồ ạt và tiết độc tố A và B gây viêm đại tràng giả mạc với tiêu chảy nhiều lần, sốt cao, tăng bạch cầu và phân có nhầy mủ."
  },
  {
    "chapter": "Dược động học & Suy gan, thận",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Kháng sinh nào sau đây có con đường thải trừ chủ yếu qua gan và đường mật, do đó KHÔNG CẦN hiệu chỉnh liều khi bệnh nhân bị suy giảm chức năng thận đơn thuần?",
    "options": [
      "Moxifloxacin",
      "Levofloxacin",
      "Ciprofloxacin",
      "Ofloxacin"
    ],
    "correct": 0,
    "explanation": "Trong nhóm Quinolon hô hấp, Moxifloxacin chuyển hóa qua gan thành các chất liên hợp glucuronid và sulfat, bài tiết qua phân và mật, chỉ < 20% bài xuất qua thận. Do đó bệnh nhân suy giảm chức năng thận ở mọi giai đoạn không cần phải chỉnh liều Moxifloxacin (khác với Levofloxacin thải qua thận > 80% bắt buộc phải chỉnh liều)."
  },
  {
    "chapter": "Tương tác thuốc & Tương kỵ",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Phối hợp giữa thuốc chống viêm không steroid (NSAID như Meloxicam, Celecoxib) với thuốc ức chế men chuyển (ACEI) và thuốc lợi tiểu (Triple Whammy) làm tăng vọt nguy cơ xảy ra biến cố:",
    "options": [
      "Xuất huyết tiêu hóa do phá hủy hàng rào bảo vệ dạ dày",
      "Tổn thương thận cấp do giảm mạnh áp lực lọc cầu thận",
      "Hạ huyết áp tư thế đứng nghiêm trọng do giãn mạch ngoại vi",
      "Hội chứng cai thuốc cấp tính do ức chế thụ thể giao cảm"
    ],
    "correct": 1,
    "explanation": "Bộ ba nguy hiểm (Triple Whammy): Lợi tiểu làm giảm thể tích tuần hoàn; NSAID ức chế prostaglandin gây co tiểu động mạch vào cầu thận; ACEI làm giãn tiểu động mạch đi của cầu thận. Cả 3 tác động đồng thời làm sụt giảm nghiêm trọng áp lực mao mạch cầu thận, dẫn đến suy thận cấp thiếu máu cục bộ."
  },
  {
    "chapter": "Thuốc giảm đau",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Aspirin bị chống chỉ định tuyệt đối ở trẻ em và thanh thiếu niên mắc các bệnh nhiễm virus cấp tính (như sốt cúm, thủy đậu) do nguy cơ gây ra hội chứng chết người nào?",
    "options": [
      "Hội chứng Reye",
      "Hội chứng Fanconi thận",
      "Hội chứng vàng da nhân não",
      "Hội chứng xám"
    ],
    "correct": 0,
    "explanation": "Dùng Aspirin ở trẻ nhiễm virus (cúm A/B, thủy đậu) liên quan mật thiết với Hội chứng Reye - một bệnh lý ty thể cấp tính cực kỳ nguy hiểm đặc trưng bởi thoái hóa mỡ vi thể tế bào gan và phù não cấp tính, tỷ lệ tử vong lên tới 30 - 40%. Do đó, Paracetamol là thuốc hạ sốt an toàn được chỉ định thay thế cho trẻ em."
  },
  {
    "chapter": "Kháng sinh & Kháng sinh dự phòng",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Thuốc kháng virus Oseltamivir (Tamiflu) trong điều trị Cúm A hoặc Cúm B đạt hiệu quả lâm sàng tối ưu nhất khi được bắt đầu dùng vào thời điểm nào?",
    "options": [
      "Sau khi bệnh nhân đã sốt liên tục kéo dài được hơn 5 ngày liền",
      "Trong vòng 48 giờ đầu tiên kể từ khi khởi phát triệu chứng sốt",
      "Chỉ định khi bệnh nhân đã xuất hiện biến chứng suy hô hấp cấp",
      "Sau khi hiệu giá kháng thể kháng virus trong máu tăng gấp 4 lần"
    ],
    "correct": 1,
    "explanation": "Oseltamivir là chất ức chế men Neuraminidase, ngăn cản sự giải phóng virus mới sinh sôi từ tế bào vật chủ. Sự nhân lên của virus cúm đạt đỉnh trong 24 - 72 giờ đầu. Bắt đầu dùng thuốc trong vòng 48 giờ đầu giúp rút ngắn thời gian mắc bệnh, giảm độ nặng và ngăn ngừa các biến chứng viêm phổi nguy hiểm."
  },
  {
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Trong quy trình nghiên cứu phát triển thuốc mới, thử nghiệm lâm sàng Pha I (Phase I Clinical Trial) có mục tiêu trọng tâm nhất là:",
    "options": [
      "Xác định hiệu quả điều trị tối ưu và tác dụng phụ trên hàng nghìn bệnh nhân mắc bệnh đích",
      "Đánh giá tính an toàn, khả năng dung nạp, khoảng liều và dược động học ở người tình nguyện",
      "Giám sát an toàn và các phản ứng có hại hiếm gặp sau khi thuốc đã được cấp phép lưu hành",
      "Đánh giá độc tính trường diễn, khả năng gây đột biến gen và quái thai trên động vật thí nghiệm"
    ],
    "correct": 1,
    "explanation": "Pha I thử nghiệm trên 20 - 80 người tình nguyện khỏe mạnh (trừ thuốc ung thư thử trên bệnh nhân) nhằm xác định tính an toàn, khả năng dung nạp, tìm liều tối đa dung nạp (MTD) và sơ bộ dược động học (ADME). Pha II đánh giá hiệu lực trên bệnh nhân. Pha III khẳng định hiệu quả trên mẫu lớn. Pha IV là giám sát hậu mãi sau lưu hành."
  },
  {
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Trong hệ thống phân cấp bằng chứng y học (Hierarchy of Evidence), thiết kế nghiên cứu nào sau đây được xếp ở mức độ bằng chứng cao nhất (Level 1A) để làm cơ sở xây dựng các hướng dẫn điều trị lâm sàng?",
    "options": [
      "Báo cáo loạt ca bệnh lâm sàng tại một bệnh viện tuyến trung ương có đối chứng hồi cứu",
      "Tổng quan hệ thống và phân tích gộp từ các thử nghiệm lâm sàng ngẫu nhiên có đối chứng",
      "Nghiên cứu bệnh - chứng đa trung tâm kết hợp phân tích đa biến hồi quy logistic chuẩn",
      "Ý kiến đồng thuận của các chuyên gia đầu ngành trong hội đồng chuyên môn quốc gia"
    ],
    "correct": 1,
    "explanation": "Đỉnh tháp bằng chứng y học thực chứng (Evidence-Based Medicine - EBM) là Phân tích gộp và Tổng quan hệ thống (Systematic review & Meta-analysis) từ các thử nghiệm ngẫu nhiên có đối chứng đồng nhất, giúp tổng hợp cỡ mẫu lớn, hạn chế tối đa sai số ngẫu nhiên và sai số hệ thống (bias)."
  },
  {
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Theo quy định của Bộ Y tế và Trung tâm Quốc gia về Thông tin thuốc và Theo dõi phản ứng có hại của thuốc (DI & ADR Quốc gia), thời hạn gửi báo cáo đối với một phản ứng có hại của thuốc (ADR) nghiêm trọng gây tử vong hoặc đe dọa tính mạng là:",
    "options": [
      "Trong vòng 07 ngày làm việc kể từ thời điểm phát hiện biến cố",
      "Chờ đến kỳ họp giao ban tổng kết cuối năm của bệnh viện",
      "Sau 30 ngày để điều tra đầy đủ tiền sử gia đình",
      "Không cần gửi báo cáo nếu bác sĩ đã ghi nhận trong bệnh án"
    ],
    "correct": 0,
    "explanation": "Theo Hướng dẫn Quốc gia về Cảnh giác Dược: Đối với các phản ứng có hại nghiêm trọng (gây tử vong, đe dọa tính mạng, tàn tật vĩnh viễn hoặc yêu cầu nhập viện kéo dài), cơ sở y tế phải gửi báo cáo nhanh về Trung tâm DI & ADR Quốc gia hoặc khu vực trong vòng 7 ngày làm việc (báo cáo bổ sung hoàn tất trong 15 ngày)."
  },
  {
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Khái niệm 'Sai sót dùng thuốc' (Medication Error - ME) theo định nghĩa của Viện An toàn Thuốc Hoa Kỳ (ISMP) và Bộ Y tế khác với 'Biến cố bất lợi của thuốc' (Adverse Drug Event - ADE) ở đặc điểm mấu chốt nào?",
    "options": [
      "Biến cố bất lợi chỉ xuất phát từ sai sót kỹ thuật tiêm truyền sai giờ của điều dưỡng viên",
      "Biến cố có thể phòng tránh được, xảy ra trong bất kỳ khâu nào của quá trình dùng thuốc",
      "Biến cố bắt buộc phải để lại hậu quả tử vong hoặc tàn tật vĩnh viễn cho người bệnh nội trú",
      "Biến cố ngộ độc thuốc do cơ địa dị ứng bẩm sinh không thể nào dự phòng trước được trên lâm sàng"
    ],
    "correct": 1,
    "explanation": "Sai sót dùng thuốc (ME) là bất kỳ biến cố nào có thể phòng ngừa được phát sinh trong quá trình điều trị (kê sai liều, phát nhầm thuốc LASA, sai đường dùng). Nhiều ME được phát hiện và ngăn chặn kịp thời trước khi đến người bệnh (Near-miss). Trong khi đó ADE là mọi tổn hại xảy ra trong quá trình dùng thuốc (bao gồm cả ADR không thể phòng tránh)."
  },
  {
    "chapter": "Đại cương DLS & Thông tin thuốc",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Trong kinh tế y tế ứng dụng tại bệnh viện, phương pháp Phân tích Chi phí - Hiệu quả (Cost-Effectiveness Analysis - CEA) đo lường kết quả đầu ra lâm sàng của thuốc dưới dạng đơn vị nào?",
    "options": [
      "Đơn vị tự nhiên của hiệu quả y tế",
      "Đơn vị tiền tệ của toàn bộ các lợi ích thu được",
      "Số ngày phép nghỉ ốm của nhân viên y tế",
      "Số lượng ấn phẩm nghiên cứu được xuất bản trên tạp chí quốc tế"
    ],
    "correct": 0,
    "explanation": "CEA so sánh chi phí tính bằng tiền tệ với hiệu quả đo bằng đơn vị tự nhiên lâm sàng (ví dụ: chi phí trên một năm sống kéo dài - Life Years Gained, chi phí trên 1 mmol/L cholesterol giảm). Nếu hiệu quả đo bằng số năm sống có điều chỉnh chất lượng (QALY) thì đó là Phân tích Chi phí - Tiện dụng (Cost-Utility Analysis - CUA)."
  },
  {
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Theo hướng dẫn của Bộ Y tế và WHO, trẻ bị tiêu chảy cấp mất nước nặng (Phác đồ C) dưới 1 tuổi được bù dịch tĩnh mạch bằng dung dịch Ringer Lactat với tổng lượng 100 mL/kg theo phân kỳ thời gian nào?",
    "options": [
      "Truyền 30 mL/kg trong 1 giờ đầu, sau đó truyền 70 mL/kg trong 5 giờ tiếp theo",
      "Truyền 30 mL/kg trong 30 phút đầu, sau đó 70 mL/kg trong 2,5 giờ tiếp theo",
      "Truyền toàn bộ 100 mL/kg nhỏ giọt thật chậm trong 24 giờ liên tục",
      "Truyền 50 mL/kg dung dịch Glucose 10% tiêm tĩnh mạch trực tiếp trong 10 phút"
    ],
    "correct": 0,
    "explanation": "Phác đồ C truyền Ringer Lactat 100 ml/kg: Với trẻ < 12 tháng tuổi: 30 ml/kg trong 1 giờ đầu + 70 ml/kg trong 5 giờ tiếp theo (tổng cộng 6 giờ). Với trẻ >= 1 tuổi: 30 ml/kg trong 30 phút đầu + 70 ml/kg trong 2,5 giờ tiếp theo (tổng cộng 3 giờ). Đánh giá lại mạch, tưới máu sau mỗi 15-30 phút."
  },
  {
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Khi pha dung dịch Oresol tiêu chuẩn (gói pha 1 lít nước hoặc gói pha 200 mL), sai lầm nghiêm trọng nhất dẫn đến nguy cơ ngộ độc muối (tăng natri máu cấp gây co giật, phù não tử vong) là:",
    "options": [
      "Pha Oresol bằng nước đun sôi để nguội và cho trẻ uống trong vòng 24 giờ sau pha",
      "Pha gói Oresol với lượng nước quá ít quy định hoặc chia nhỏ gói thuốc để pha",
      "Cho trẻ uống từng thìa nhỏ ngắt quãng hoặc uống từng ngụm nhỏ theo nhu cầu của trẻ",
      "Đổ bỏ phần dung dịch Oresol đã pha sau 24 giờ nếu trẻ không uống hết dung dịch"
    ],
    "correct": 1,
    "explanation": "Dung dịch Oresol thẩm thấu thấp (chuẩn WHO) có nồng độ Natri 75 mEq/L cân bằng hoàn hảo. Nếu pha quá đặc (ví dụ gói 1 lít chỉ pha vào 200-300 ml nước) hoặc chia nhỏ gói thuốc làm sai lệch tỷ lệ muối - đường, dịch trở thành ưu trương dữ dội, làm nồng độ natri máu trẻ tăng vọt, gây mất nước nội bào tế bào não, co giật, xuất huyết não và tử vong."
  },
  {
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Dấu hiệu nguy hiểm toàn thân nào sau đây ở trẻ nhỏ bị tiêu chảy cấp đòi hỏi phải đưa trẻ đến cơ sở y tế cấp cứu ngay lập tức?",
    "options": [
      "Trẻ quấy khóc đòi bú liên tục và khóc to khi mẹ rút vú do cảm giác thèm bú sữa",
      "Trẻ nôn tất cả mọi thứ, co giật, li bì khó đánh thức hoặc sốt rất cao không hạ",
      "Trẻ đi ngoài phân có mùi chua nhẹ kèm bọt hơi sau khi chuyển sang chế độ ăn dặm",
      "Trẻ đi tiểu 5 đến 6 lần trong ngày với lượng nước tiểu bình thường và màu trong"
    ],
    "correct": 1,
    "explanation": "Các dấu hiệu nguy hiểm theo IMCI: Trẻ nôn tất cả mọi thứ ăn/uống vào; Co giật; Li bì hoặc hôn mê khó đánh thức; Bỏ bú hoặc không thể uống được; Thở co rút lồng ngực. Khi có bất kỳ dấu hiệu nào trong số này, trẻ đang trong tình trạng đe dọa tính mạng cần cấp cứu hồi sức ngay."
  },
  {
    "chapter": "Tiêu chảy cấp ở trẻ em",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Vai trò Dược lâm sàng của men vi sinh (Probiotics như Saccharomyces boulardii hoặc Lactobacillus rhamnosus GG) trong phác đồ hỗ trợ điều trị tiêu chảy cấp ở trẻ em là:",
    "options": [
      "Tiêu diệt hoàn toàn toàn bộ các virus và vi khuẩn gây bệnh đường ruột trong vòng 6 giờ đầu",
      "Hỗ trợ cân bằng hệ vi sinh ruột, cạnh tranh vi khuẩn bệnh và rút ngắn thời gian tiêu chảy",
      "Thay thế hoàn toàn cho dung dịch bù nước Oresol và cung cấp đủ toàn bộ năng lượng cho trẻ",
      "Làm liệt cơ trơn thành ruột và cơ vòng hậu môn để ngăn chặn triệt để phân lỏng trào ra ngoài"
    ],
    "correct": 1,
    "explanation": "Các chủng vi sinh vật sống đặc hiệu (như S. boulardii, L. rhamnosus GG) đã được chứng minh trong nhiều phân tích gộp là giúp giảm độc lực vi khuẩn, tăng tiết IgA niêm mạc, rút ngắn thời gian tiêu chảy trung bình khoảng 24 giờ. Tuy nhiên, men vi sinh chỉ là biện pháp hỗ trợ, bù nước điện giải và kẽm vẫn là nền tảng sống còn."
  },
  {
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Liều dùng Paracetamol đường uống hoặc đặt hậu môn để hạ sốt, giảm đau thông thường cho trẻ em theo khuyến cáo chuẩn của Bộ Y tế là:",
    "options": [
      "10 đến 15 mg/kg mỗi lần, cách nhau 4 đến 6 giờ",
      "25 đến 30 mg/kg mỗi lần, cách nhau 2 giờ",
      "Cố định 500 mg cho mỗi lần sốt bất kể cân nặng của trẻ",
      "5 mg/kg mỗi ngày uống một lần duy nhất vào buổi sáng"
    ],
    "correct": 0,
    "explanation": "Liều an toàn và hiệu quả của Paracetamol ở trẻ em là 10 - 15 mg/kg/lần, khoảng cách giữa 2 liều tối thiểu 4 - 6 giờ, tổng liều không quá 60 mg/kg/24 giờ (ở trẻ sơ sinh không quá 40 mg/kg/24 giờ). Dùng quá liều hoặc dùng khoảng cách quá dày (< 4h) dẫn đến tích lũy chất chuyển hóa độc NAPQI gây hoại tử tế bào gan cấp tính."
  },
  {
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Cơ quan Quản lý Dược phẩm Châu Âu (EMA) và Cục Quản lý Dược (Bộ Y tế) đưa ra cảnh báo chống chỉ định dùng thuốc giảm ho giảm đau Codein cho trẻ em dưới 12 tuổi và trẻ dưới 18 tuổi sau phẫu thuật cắt amidan/nạo VA do nguy cơ:",
    "options": [
      "Thuốc gây co thắt khí phế quản cấp tính qua trung gian IgE dẫn đến suy hô hấp dữ dội",
      "Trẻ chuyển hóa siêu nhanh qua CYP2D6 tạo Morphine ồ ạt dẫn đến suy hô hấp tử vong",
      "Thuốc phá hủy trực tiếp tế bào gan do thiếu hụt enzym khử độc dẫn đến hoại tử gan cấp",
      "Gây xuất huyết tiêu hóa ồ ạt và thủng dạ dày tá tràng do ức chế tổng hợp prostaglandin"
    ],
    "correct": 1,
    "explanation": "Codein là tiền chất chuyển hóa qua enzym CYP2D6 thành Morphine để có tác dụng giảm đau. Ở những trẻ có kiểu gen chuyển hóa siêu nhanh (Ultra-rapid metabolizer), nồng độ Morphine trong máu tăng vọt bất thường dù dùng liều Codein thông thường, gây ức chế trung tâm hô hấp sâu, ngưng thở và tử vong trong khi ngủ, đặc biệt nguy hiểm sau mổ amidan."
  },
  {
    "chapter": "Sử dụng thuốc ở Trẻ em",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Kháng sinh Aminoglycosid (Gentamicin, Amikacin) khi chỉ định cho trẻ sơ sinh và trẻ đẻ non đòi hỏi phải giám sát chặt chẽ và giãn khoảng cách đưa liều (mỗi 24 - 36 - 48 giờ) chủ yếu nhằm phòng ngừa độc tính tích lũy trên:",
    "options": [
      "Tế bào sắc tố biểu mô võng mạc mắt và thể mi thể thủy tinh gây mù lòa",
      "Tế bào biểu mô ống lượn gần của thận và tế bào lông của ốc tai - tiền đình",
      "Tế bào gốc tạo máu tại tủy xương gây suy tủy giảm ba dòng tế bào máu ngoại vi",
      "Tế bào cơ tim và hệ thống dẫn truyền nhĩ thất gây viêm cơ tim cấp giãn buồng tim"
    ],
    "correct": 1,
    "explanation": "Aminoglycoside thải trừ qua lọc cầu thận. Trẻ sơ sinh, đặc biệt trẻ đẻ non có độ lọc cầu thận rất thấp, thuốc bị thải trừ chậm. Nồng độ đáy (C_trough) tăng cao làm tích lũy thuốc ở tế bào biểu mô ống lượn gần gây hoại tử ống thận cấp và tích lũy ở dịch tai trong làm tổn thương không hồi phục tế bào lông thính giác gây điếc vĩnh viễn."
  },
  {
    "chapter": "Vitamin và chất khoáng",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Phụ nữ trong độ tuổi sinh đẻ có kế hoạch mang thai được khuyến cáo bổ sung Axit Folic (Vitamin B9) trước khi thụ thai tối thiểu 1 tháng và trong suốt 3 tháng đầu thai kỳ nhằm mục đích chính là:",
    "options": [
      "Dự phòng dị tật ống thần kinh ở thai nhi",
      "Tăng cường sản xuất sữa mẹ sau khi sinh",
      "Ngăn ngừa nguy cơ đái tháo đường thai kỳ cho người mẹ",
      "Giúp xương của thai nhi dài nhanh hơn để chống còi xương"
    ],
    "correct": 0,
    "explanation": "Ống thần kinh của phôi thai khép lại rất sớm (trong vòng ngày thứ 28 sau thụ thai, khi người mẹ thường chưa biết mình có thai). Thiếu Axit Folic làm rối loạn quá trình tổng hợp DNA phân chia tế bào thần kinh, dẫn đến dị tật ống thần kinh (nứt đốt sống - spina bifida, thai vô sọ). Liều khuyến cáo: 400 mcg/ngày (hoặc 4-5 mg/ngày ở người có tiền sử sinh con dị tật)."
  },
  {
    "chapter": "Vitamin và chất khoáng",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Bệnh nhân nghiện rượu mạn tính nhập viện trong tình trạng lơ mơ, thất điều vận động, rung giật nhãn cầu (hội chứng não Wernicke do thiếu Vitamin B1). Nguyên tắc Dược lâm sàng bắt buộc khi hồi sức cấp cứu là:",
    "options": [
      "Truyền ngay dung dịch Glucose 10% tốc độ nhanh rồi mới bổ sung Vitamin B1 sau 24 giờ",
      "Tiêm bắp hoặc truyền tĩnh mạch Thiamin liều cao trước khi truyền dung dịch Glucose",
      "Cho bệnh nhân uống dung dịch bù nước Oresol kết hợp viên sủi Vitamin C liều cao hàng ngày",
      "Chỉ định ngay kháng sinh Ceftriaxon liều cao tiêm tĩnh mạch dự phòng viêm phổi hít sặc"
    ],
    "correct": 1,
    "explanation": "Thiamin (Vitamin B1) là coenzym của men pyruvate dehydrogenase trong chu trình chuyển hóa đường glucose. Nếu truyền Glucose trước khi bổ sung Thiamin, lượng glucose đưa vào sẽ tiêu thụ cạn kiệt số ít Thiamin còn sót lại, làm khởi phát tổn thương hoại tử nhân xám quanh não thất cấp tính (Wernicke's encephalopathy) không thể hồi phục và tử vong."
  },
  {
    "chapter": "Vitamin và chất khoáng",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Bệnh nhân tự ý uống Vitamin D liều cực cao kéo dài (trên 50.000 - 100.000 IU/ngày) có thể gặp phải hội chứng ngộ độc cấp tính đặc trưng bởi rối loạn điện giải và tổn thương cơ quan nào?",
    "options": [
      "Hạ kali máu kịch phát dẫn đến liệt cơ chu kỳ và ngừng thở do yếu liệt cơ hô hấp cấp",
      "Tăng calci máu nặng dẫn đến vôi hóa mô mềm, sỏi thận, rối loạn nhịp tim và suy thận",
      "Hạ natri máu nặng dẫn đến phù não cấp tính, co giật toàn thể và hôn mê sâu đe dọa tử vong",
      "Hạ phosphat máu nặng dẫn đến tiêu cơ vân cấp, toan chuyển hóa và suy đa cơ quan nội tạng"
    ],
    "correct": 1,
    "explanation": "Quá liều Vitamin D làm tăng hấp thu Calci quá mức tại ruột non và tăng tiêu xương, dẫn đến tăng Calci huyết nặng (> 3 mmol/L). Biểu hiện: chán ăn, nôn ói, đa niệu, mất nước, rối loạn nhịp tim (rút ngắn đoạn QT), lắng đọng canxi tại nhu mô thận (nephrocalcinosis) gây suy thận cấp tiến triển thành suy thận mạn."
  },
  {
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Để giảm thiểu tối đa sự ức chế trục hạ đồi - tuyến yên - thượng thận (HPA axis), thời điểm uống thuốc Glucocorticoid (như Prednisolon, Methylprednisolon) sinh lý và tối ưu nhất trong ngày đối với chế độ liều một lần mỗi ngày là:",
    "options": [
      "Vào khoảng 7 đến 8 giờ sáng, sau khi ăn sáng no",
      "Vào lúc 22 giờ đêm ngay trước khi đi ngủ",
      "Vào lúc 14 giờ chiều sau khi ngủ trưa dậy",
      "Chia đều uống vào các thời điểm lúc đói cách nhau 6 giờ"
    ],
    "correct": 0,
    "explanation": "Nồng độ Cortisol nội sinh của cơ thể tiết theo nhịp ngày đêm (Circadian rhythm), đạt đỉnh cao nhất vào khoảng 7 - 8 giờ sáng và thấp nhất vào nửa đêm. Uống Glucocorticoid vào 8h sáng trùng với đỉnh tiết sinh lý của cơ thể, nồng độ thuốc sẽ giảm dần về chiều tối, cho phép trục HPA hồi phục bài tiết ACTH ban đêm, giảm thiểu teo vỏ thượng thận."
  },
  {
    "chapter": "Glucocorticoid & Phác đồ điều trị",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Liệu pháp Glucocorticoid liều xung (Pulse therapy, ví dụ Methylprednisolon 500 - 1000 mg truyền tĩnh mạch mỗi ngày trong 3 ngày liên tiếp) thường được chỉ định trong tình huống lâm sàng nào?",
    "options": [
      "Cảm cúm thông thường có sốt nhẹ kèm theo ho đờm và đau rát họng kéo dài ở người lớn",
      "Đợt bùng phát cấp tính đe dọa tính mạng hoặc tổn thương cơ quan đích của bệnh tự miễn",
      "Đau đầu do căng thẳng tâm lý, mất ngủ kéo dài và suy nhược thần kinh sau làm việc",
      "Viêm mũi dị ứng thời tiết theo mùa kèm hắt hơi chảy nước mũi ở trẻ em và thiếu niên"
    ],
    "correct": 1,
    "explanation": "Pulse therapy Methylprednisolon (liều cực cao 10-30 mg/kg hoặc 500-1000 mg/ngày trong 3 ngày) phát huy cả tác dụng bộ gen (genomic) và tác dụng phi bộ gen (non-genomic) tức thì, dập tắt cơn bão miễn dịch cấp tính trong viêm thận lupus, viêm mạch hệ thống, đợt cấp xơ cứng rải rác đe dọa tính mạng. Cần theo dõi điện tim và huyết áp sát sao khi truyền."
  },
  {
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Ở người cao tuổi, sự suy giảm lưu lượng tuần hoàn qua gan (giảm 20 - 40%) và giảm hoạt tính enzym chuyển hóa gan dẫn đến hiện tượng gì đối với các thuốc có hệ số chiết xuất qua gan cao (High hepatic extraction ratio như Propranolol, Morphine, Nitroglycerin)?",
    "options": [
      "Tăng cường chuyển hóa qua gan lần đầu làm cho phân tử thuốc bị mất hoàn toàn hoạt tính",
      "Giảm chuyển hóa qua gan lần đầu, làm tăng sinh khả dụng và tăng nguy cơ ngộ độc thuốc",
      "Tốc độ lọc cầu thận và độ thanh thải của các hoạt chất qua nước tiểu tăng vọt gấp 5 lần",
      "Thuốc bị giữ lại trong lòng mạch và hoàn toàn không thể phân bố vào các tổ chức mô bào"
    ],
    "correct": 1,
    "explanation": "Các thuốc có tỷ lệ thanh thải qua gan cao bình thường bị chuyển hóa phần lớn ngay ở lần đầu qua gan (first-pass effect). Ở người cao tuổi, lưu lượng máu qua gan giảm sút làm giảm tỷ lệ bị giáng hóa bước đầu, dẫn đến lượng thuốc nguyên vẹn vào đại tuần hoàn tăng lên gấp nhiều lần, làm sinh khả dụng tăng vọt, nguy cơ tụt huyết áp sâu (Nitroglycerin) hay suy hô hấp (Morphine)."
  },
  {
    "chapter": "Sử dụng thuốc ở Người cao tuổi",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Thuốc điều trị đái tháo đường nhóm Sulfonylurea nào sau đây bị CHỐNG CHỈ ĐỊNH hoặc khuyến cáo TRÁNH DÙNG ở người cao tuổi do thời gian bán thải kéo dài và chất chuyển hóa có hoạt tính tích lũy gây hạ đường huyết nặng nề kéo dài?",
    "options": [
      "Glibenclamid",
      "Gliclazid giải phóng biến đổi",
      "Metformin liều thấp",
      "Vildagliptin"
    ],
    "correct": 0,
    "explanation": "Theo Tiêu chuẩn Beers và hướng dẫn đái tháo đường ADA/BYT: Glibenclamid có thời gian tác dụng rất dài và chất chuyển hóa vẫn giữ hoạt tính hạ đường huyết thải qua thận. Ở người cao tuổi chức năng thận suy giảm, Glibenclamid gây hạ đường huyết sâu, kéo dài nhiều ngày, dễ dẫn đến hôn mê, tổn thương não không hồi phục hoặc tử vong. Nên thay bằng Gliclazid MR hoặc nhóm ức chế DPP-4."
  },
  {
    "chapter": "Điều trị Tăng huyết áp & Cấp cứu THA",
    "source": "HMU",
    "sourceName": "Đại học Y Hà Nội",
    "question": "Trong xử trí cấp cứu sốc phản vệ theo Thông tư 51/2017/TT-BYT, trường hợp bệnh nhân tăng huyết áp đang dùng thuốc chẹn thụ thể beta-adrenergic (Beta-blocker như Propranolol, Bisoprolol) bị sốc phản vệ nhưng kém đáp ứng với Adrenaline thì thuốc cấp cứu phối hợp được chỉ định là:",
    "options": [
      "Glucagon tiêm tĩnh mạch",
      "Truyền thêm dung dịch Canxi Clorid 10% tốc độ cao",
      "Tiêm bắp thêm Morphin sulfat 10 mg",
      "Dùng thuốc ức chế men chuyển Enalaprilat tiêm tĩnh mạch"
    ],
    "correct": 0,
    "explanation": "Thuốc chẹn beta gắn chặt thụ thể beta-adrenergic trên tim và mạch máu, làm mất tác dụng kích thích thụ thể beta của Adrenaline. Glucagon kích thích trực tiếp adenylate cyclase nội bào cơ tim thông qua con đường không phụ thuộc thụ thể beta-adrenergic, làm tăng cAMP, phục hồi sức co bóp cơ tim và nhịp tim, đảo ngược tình trạng tụt huyết áp kháng trị."
  }
];

module.exports = HMU_QUESTIONS;
