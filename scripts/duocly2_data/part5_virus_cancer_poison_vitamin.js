// NGÂN HÀNG DƯỢC LÝ 2 - PHẦN 5: VITAMIN, VIRUS, UNG THƯ & ĐIỀU TRỊ NGỘ ĐỘC CẤP
// Bài 16: Vitamin (Chương 17, tr. 322-342)
// Bài 18: Thuốc kháng virus (Chương 13, tr. 230-242)
// Bài 19: Thuốc chống ung thư (Chương 14, tr. 242-264)
// Bài 20: Thuốc/trong điều trị ngộ độc (Chương 19, tr. 354-366)
// Tiêu chuẩn: Chuẩn giáo trình Dược lý 2 Bộ Y tế, không mở ngoặc đơn gợi ý ở đáp án.

module.exports = [
  // =========================================================================
  // BÀI 16: VITAMIN (trang 322 - 342)
  // =========================================================================
  {
    chapter: "Vitamin",
    level: "Nhận biết",
    question: "Triệu chứng ban đầu điển hình của tình trạng thiếu hụt Vitamin A là gì?",
    options: [
      "Bệnh quáng gà (giảm thị lực khi trời nhá nhem tối) và khô giác mạc",
      "Chảy máu chân răng và xuất huyết dưới màng xương",
      "Viêm dây thần kinh ngoại biên kèm tê phù hai chân",
      "Viêm da đối xứng ở các vùng hở tiếp xúc với ánh sáng"
    ],
    correct: 0,
    explanation: "Vitamin A (Retinol) tham gia vào chu trình thị giác tạo thành Rhodopsin ở tế bào que của võng mạc giúp mắt nhìn trong điều kiện ánh sáng yếu. Thiếu vitamin A gây triệu chứng quáng gà sớm nhất, tiếp theo là khô kết mạc, xuất hiện vệt Bitot và nhuyễn biểu mô giác mạc.",
    reference: "Sách Dược lý 2 tr. 322-323"
  },
  {
    chapter: "Vitamin",
    level: "Nhận biết",
    question: "Dạng chuyển hóa có hoạt tính sinh học mạnh nhất của Vitamin D trong cơ thể sau khi được hydroxyl hóa tại gan và thận là dạng nào?",
    options: [
      "1,25-dihydroxycholecalciferol (Calcitriol)",
      "25-hydroxycholecalciferol (Calcidiol)",
      "Ergocalciferol (Vitamin D2)",
      "Cholecalciferol (Vitamin D3)"
    ],
    correct: 0,
    explanation: "Cholecalciferol (D3) được hydroxyl hóa lần 1 ở gan thành 25-(OH)-D3 (calcidiol), sau đó được enzym 1-alpha-hydroxylase ở ống thận hydroxyl hóa lần 2 tạo thành 1,25-(OH)2-D3 (calcitriol). Calcitriol là hormon có hoạt tính mạnh nhất điều hòa hấp thu canxi và phospho.",
    reference: "Sách Dược lý 2 tr. 326"
  },
  {
    chapter: "Vitamin",
    level: "Nhận biết",
    question: "Bệnh Beriberi (tê phù) thể ướt gây suy tim ứ huyết và thể khô gây viêm đa dây thần kinh có nguyên nhân do thiếu hụt vitamin nào?",
    options: [
      "Vitamin B1 (Thiamin)",
      "Vitamin B2 (Riboflavin)",
      "Vitamin B6 (Pyridoxin)",
      "Vitamin B12 (Cobalamin)"
    ],
    correct: 0,
    explanation: "Vitamin B1 là coenzym thiamin pyrophosphat (TPP) tham gia khử carboxyl oxy hóa các acid cetonic. Thiếu B1 gây ứ trệ acid pyruvic và acid lactic trong mô dẫn tới bệnh Beriberi (thể khô: viêm đa dây thần kinh; thể ướt: giãn mạch ngoại biên, suy tim sung huyết) và hội chứng não Wernicke.",
    reference: "Sách Dược lý 2 tr. 329-330"
  },
  {
    chapter: "Vitamin",
    level: "Nhận biết",
    question: "Bệnh Pellagra với tam chứng kinh điển '3D': Viêm da (Dermatitis), Tiêu chảy (Diarrhea) và Sa sút trí tuệ (Dementia) xuất hiện khi cơ thể thiếu hụt vitamin nào?",
    options: [
      "Vitamin B3 (Acid Nicotinic / Vitamin PP)",
      "Vitamin B1 (Thiamin)",
      "Vitamin C (Acid ascorbic)",
      "Vitamin A (Retinol)"
    ],
    correct: 0,
    explanation: "Vitamin PP (Acid nicotinic / Nicotinamid / Vitamin B3) cấu tạo nên hai coenzym quan trọng NAD+ và NADP+. Thiếu hụt vitamin PP gây bệnh Pellagra đặc trưng bởi 3 dấu hiệu kinh điển: Viêm da vùng hở đối xứng, Tiêu chảy kéo dài, và Rối loạn tâm thần/sa sút trí tuệ.",
    reference: "Sách Dược lý 2 tr. 331-332"
  },
  {
    chapter: "Vitamin",
    level: "Vận dụng",
    question: "Khi điều trị bệnh lao bằng kháng sinh Isoniazid (INH), bác sĩ bắt buộc phải kê phối hợp Vitamin B6 (Pyridoxin) nhằm mục đích gì?",
    options: [
      "Phòng ngừa và điều trị viêm dây thần kinh ngoại biên do INH cạnh tranh và làm tăng thải B6",
      "Tăng cường khả năng xâm nhập của INH vào trong hang lao",
      "Bảo vệ tế bào gan khỏi tác dụng phụ gây viêm gan hoại tử của rifampicin",
      "Kích thích tủy xương tăng sinh hồng cầu bù trừ thiếu máu"
    ],
    correct: 0,
    explanation: "Isoniazid (INH) có cấu trúc hóa học tương tự pyridoxin, tạo phức hydrazon với pyridoxal phosphat làm bất hoạt và tăng đào thải pyridoxin qua nước tiểu, dẫn đến viêm dây thần kinh ngoại biên (tê bì đầu ngón tay ngón chân). Bổ sung vitamin B6 hàng ngày giúp triệt tiêu hoàn toàn tác dụng phụ này.",
    reference: "Sách Dược lý 2 tr. 185, 333"
  },
  {
    chapter: "Vitamin",
    level: "Vận dụng",
    question: "Sử dụng Vitamin C (Acid ascorbic) liều cao kéo dài trên 1g mỗi ngày có nguy cơ dẫn tới biến chứng tiết niệu nào?",
    options: [
      "Lắng đọng sỏi Calci Oxalat ở đường tiết niệu",
      "Gây suy thận cấp do tích tụ tinh thể urat",
      "Xơ hóa cầu thận tiến triển nhanh",
      "Đái tháo nhạt do tổn thương thụ thể V2"
    ],
    correct: 0,
    explanation: "Một phần vitamin C trong cơ thể chuyển hóa thành acid oxalic. Dùng vitamin C liều cao kéo dài làm toan hóa nước tiểu và tăng bài tiết oxalat niệu, làm kết tủa với canxi tạo thành sỏi thận calci oxalat.",
    reference: "Sách Dược lý 2 tr. 337-338"
  },

  // =========================================================================
  // BÀI 18: THUỐC KHÁNG VIRUS (trang 230 - 242)
  // =========================================================================
  {
    chapter: "Thuốc kháng virus",
    level: "Nhận biết",
    question: "Acyclovir là thuốc kháng virus nhóm tương tự nucleosid có cơ chế tác dụng chọn lọc cao trên virus Herpes nhờ yếu tố nào?",
    options: [
      "Được phosphoryl hóa lần đầu tiên bởi enzym Thymidine kinase đặc hiệu của virus Herpes",
      "Gắn trực tiếp và làm tan biến lớp vỏ ngoài của hạt virus",
      "Ức chế enzym phiên mã ngược của tế bào người",
      "Kích hoạt tế bào lympho T tiêu diệt tế bào nhiễm virus"
    ],
    correct: 0,
    explanation: "Acyclovir là tiền chất trơ. Để có hoạt tính, thuốc phải được phosphoryl hóa lần đầu thành acyclovir-monophosphat bởi enzym Thymidine kinase của chính virus (ái lực gấp hàng triệu lần tế bào người), sau đó enzym tế bào chủ tiếp tục gắn thêm phosphat để tạo acyclovir triphosphat ức chế ADN polymerase của virus.",
    reference: "Sách Dược lý 2 tr. 231"
  },
  {
    chapter: "Thuốc kháng virus",
    level: "Nhận biết",
    question: "Thuốc nào sau đây là tiền chất (prodrug) dạng ester L-valyl của Acyclovir, có sinh khả dụng đường uống cao hơn Acyclovir gấp 3 đến 5 lần?",
    options: [
      "Valacyclovir",
      "Ganciclovir",
      "Ribavirin",
      "Oseltamivir"
    ],
    correct: 0,
    explanation: "Valacyclovir là ester L-valyl của acyclovir. Sau khi uống, thuốc được vận chuyển tích cực qua ruột và thủy phân nhanh ở gan thành acyclovir, đạt sinh khả dụng đường uống 54% (trong khi acyclovir chỉ đạt 15-20%), giúp giảm số lần uống thuốc trong ngày.",
    reference: "Sách Dược lý 2 tr. 232"
  },
  {
    chapter: "Thuốc kháng virus",
    level: "Nhận biết",
    question: "Oseltamivir (Tamiflu) và Zanamivir có cơ chế tác dụng điều trị và dự phòng bệnh cúm A và cúm B là gì?",
    options: [
      "Ức chế enzym Neuraminidase của virus cúm ngăn chặn sự giải phóng các hạt virus mới sinh",
      "Ức chế kênh ion M2 của virus ngăn cản quá trình cởi vỏ",
      "Phong bế thụ thể hemagglutinin ngăn virus xâm nhập tế bào biểu mô đường hô hấp",
      "Ức chế phân chia tế bào niêm mạc phế quản người"
    ],
    correct: 0,
    explanation: "Oseltamivir và Zanamivir là chất ức chế chọn lọc enzym neuraminidase (NA) trên bề mặt virus cúm A và B, ngăn chặn enzym này cắt cầu nối acid sialic, khiến các hạt virus mới nhân lên bị giữ chặt dính trên bề mặt tế bào chủ và không thể lan sang các tế bào lành khác.",
    reference: "Sách Dược lý 2 tr. 235"
  },
  {
    chapter: "Thuốc kháng virus",
    level: "Vận dụng",
    question: "Để đạt hiệu quả điều trị tối ưu làm giảm thời gian sốt và giảm biến chứng hô hấp của bệnh cúm, Oseltamivir cần được bắt đầu sử dụng trong khoảng thời gian nào?",
    options: [
      "Trong vòng 48 giờ đầu tiên kể từ khi khởi phát triệu chứng cúm",
      "Sau khi bệnh nhân đã sốt liên tục quá 7 ngày",
      "Chỉ dùng khi bệnh nhân đã xuất hiện viêm phổi suy hô hấp nặng",
      "Sau khi các triệu chứng cúm đã hoàn toàn tự biến mất"
    ],
    correct: 0,
    explanation: "Sự nhân lên của virus cúm đạt đỉnh vào khoảng 24-48 giờ sau khi khởi phát sốt và triệu chứng hô hấp. Sử dụng thuốc ức chế neuraminidase (Oseltamivir) trong vòng 48 giờ đầu sẽ chặn đứng đà nhân lên của virus, mang lại hiệu quả lâm sàng cao nhất.",
    reference: "Sách Dược lý 2 tr. 236"
  },
  {
    chapter: "Thuốc kháng virus",
    level: "Nhận biết",
    question: "Zidovudin (AZT) thuộc nhóm thuốc kháng virus sao chép ngược nào trong phác đồ điều trị HIV/AIDS?",
    options: [
      "Ức chế enzym sao chép ngược nhóm nucleosid (NRTI)",
      "Ức chế enzym sao chép ngược không phải nucleosid (NNRTI)",
      "Ức chế enzym protease (PI)",
      "Ức chế enzym gắn kết integrase (INSTI)"
    ],
    correct: 0,
    explanation: "Zidovudin (AZT) là thuốc kháng HIV đầu tiên, thuộc nhóm NRTI (Nucleoside Reverse Transcriptase Inhibitors), đóng vai trò như một nucleosid giả cạnh tranh với cơ chất tự nhiên và gắn chèn vào chuỗi ADN provirus làm đứt gãy chuỗi sớm.",
    reference: "Sách Dược lý 2 tr. 237-238"
  },
  {
    chapter: "Thuốc kháng virus",
    level: "Vận dụng cao",
    question: "Ritonavir thường được phối hợp ở liều thấp cùng với các thuốc ức chế Protease khác (như Lopinavir, Atazanavir) trong phác đồ điều trị HIV vì tác dụng dược động học nào?",
    options: [
      "Ức chế mạnh enzym gan CYP3A4 giúp tăng nồng độ và kéo dài thời gian bán thải của thuốc phối hợp",
      "Giúp trung hòa độc tính gây loét miệng của các thuốc khác",
      "Tăng đào thải thuốc qua nước tiểu để tránh suy thận",
      "Kích thích hệ miễn dịch sản sinh thêm tế bào lympho T CD4+"
    ],
    correct: 0,
    explanation: "Ritonavir là chất ức chế cực mạnh cytochrom P450 isoenzym CYP3A4 ở gan và ruột. Khi dùng liều thấp không nhằm mục đích kháng virus, Ritonavir đóng vai trò là chất 'tăng cường dược động học' (pharmacokinetic booster), ngăn chặn sự giáng hóa của các PI khác, giúp tăng vọt nồng độ thuốc trong máu.",
    reference: "Sách Dược lý 2 tr. 239"
  },

  // =========================================================================
  // BÀI 19: THUỐC CHỐNG UNG THƯ (trang 242 - 264)
  // =========================================================================
  {
    chapter: "Thuốc chống ung thư",
    level: "Nhận biết",
    question: "Methotrexat là thuốc chống ung thư thuộc nhóm chất chống chuyển hóa đặc hiệu pha S có cơ chế phân tử là gì?",
    options: [
      "Ức chế cạnh tranh enzym Dihydrofolat reductase (DHFR) ngăn chặn tạo acid tetrahydrofolic",
      "Ức chế enzym ribonucleotid reductase ở màng nhân",
      "Gắn chéo chuỗi xoắn kép ADN ngăn cản tháo xoắn",
      "Ức chế enzym ADN polymerase phụ thuộc ARN"
    ],
    correct: 0,
    explanation: "Methotrexat có cấu trúc tương tự acid folic, gắn chặt vào enzym Dihydrofolat reductase (DHFR) với ái lực mạnh hơn acid folic tự nhiên 1000 lần, ngăn cản chuyển DHF thành THF (dạng coenzym cần thiết để tổng hợp purin và thymin của ADN).",
    reference: "Sách Dược lý 2 tr. 245"
  },
  {
    chapter: "Thuốc chống ung thư",
    level: "Vận dụng",
    question: "Thuốc giải cứu tế bào lành đặc hiệu (antidote) được dùng để giải độc và phục hồi tủy xương khi sử dụng Methotrexat liều cao trong hóa trị ung thư là gì?",
    options: [
      "Acid folinic (Leucovorin / Citrovorum factor)",
      "Vitamin B12 (Cyanocobalamin)",
      "N-acetylcystein",
      "Mesna dung dịch tiêm truyền"
    ],
    correct: 0,
    explanation: "Leucovorin (Acid folinic) là dạng dạng tetrahydrofolat đã hoạt hóa sẵn mà không cần qua bước khử của enzym DHFR. Do đó, tiêm Leucovorin sẽ giải cứu trực tiếp các tế bào lành của tủy xương và niêm mạc ruột khỏi độc tính chết người của Methotrexat liều cao.",
    reference: "Sách Dược lý 2 tr. 246"
  },
  {
    chapter: "Thuốc chống ung thư",
    level: "Nhận biết",
    question: "Cyclophosphamid thuộc nhóm thuốc chống ung thư alkyl hóa, trong cơ thể chuyển hóa sinh ra chất độc Acrolein gây biến chứng nguy hiểm đặc trưng nào ở đường tiết niệu?",
    options: [
      "Viêm bàng quang chảy máu vô khuẩn cấp tính",
      "Sỏi thận san hô hai bên thận",
      "Hẹp niệu quản đoạn chậu hông",
      "Hoại tử ống thận cấp do kết tủa tinh thể"
    ],
    correct: 0,
    explanation: "Chất chuyển hóa acrolein của cyclophosphamid và ifosfamid bài tiết vào nước tiểu và tích tụ gây kích ứng, loét hoại tử niêm mạc bàng quang, dẫn tới viêm bàng quang xuất huyết vô khuẩn (tiểu buốt, tiểu rắt, tiểu ra máu đỏ tươi đại thể).",
    reference: "Sách Dược lý 2 tr. 247-248"
  },
  {
    chapter: "Thuốc chống ung thư",
    level: "Vận dụng",
    question: "Biện pháp phòng ngừa đặc hiệu biến chứng viêm bàng quang chảy máu do chất độc Acrolein khi truyền Cyclophosphamid hoặc Ifosfamid liều cao là gì?",
    options: [
      "Bù nhiều dịch đường tĩnh mạch và dùng thuốc giải độc Mesna",
      "Uống dung dịch acid ascorbic liều cao để toan hóa nước tiểu",
      "Tiêm thuốc lợi tiểu giữ kali phối hợp kháng sinh quinolon",
      "Đặt ống thông niệu đạo rửa bàng quang liên tục bằng dung dịch cồn"
    ],
    correct: 0,
    explanation: "Mesna (Natri 2-mercaptoethansulfonat) có nhóm sulfhydryl (-SH) tự do, khi bài tiết qua thận sẽ gắn trung hòa trực tiếp acrolein trong bàng quang tạo thành phức hợp bền không độc, kết hợp truyền nhiều dịch để rửa trôi bàng quang.",
    reference: "Sách Dược lý 2 tr. 248"
  },
  {
    chapter: "Thuốc chống ung thư",
    level: "Nhận biết",
    question: "Các thuốc chống ung thư nhóm alkaloid cây Dừa cạn (như Vincristin, Vinblastin) tác động đặc hiệu trên chu kỳ tế bào ở pha nào và theo cơ chế gì?",
    options: [
      "Đặc hiệu pha M, gắn vào tubulin ngăn chặn sự trùng hợp tạo thoi phân bào làm tế bào ngừng phân chia ở kỳ giữa",
      "Đặc hiệu pha G1, ức chế tổng hợp ARN ribosom",
      "Đặc hiệu pha S, ức chế enzym thymin kinase",
      "Không đặc hiệu pha, phá vỡ trực tiếp màng tế bào ung thư"
    ],
    correct: 0,
    explanation: "Vincristin và Vinblastin gắn chọn lọc vào protein tubulin, ức chế sự trùng hợp của các dimer tubulin thành vi quản, ngăn cản tạo thoi vô sắc phân bào, làm các nhiễm sắc thể không thể phân ly về hai cực, khiến tế bào bị bắt giữ và chết ở kỳ giữa pha M.",
    reference: "Sách Dược lý 2 tr. 252-253"
  },
  {
    chapter: "Thuốc chống ung thư",
    level: "Nhận biết",
    question: "Kháng sinh chống ung thư Doxorubicin (Adriamycin) có độc tính đặc thù phụ thuộc liều tích lũy nguy hiểm nhất trên cơ quan nào?",
    options: [
      "Độc tính trên cơ tim gây suy tim sung huyết mạn tính không hồi phục",
      "Xơ hóa phổi kẽ lan tỏa",
      "Hoại tử vỏ thượng thận hai bên",
      "Viêm tụy cấp xuất huyết hoại tử"
    ],
    correct: 0,
    explanation: "Doxorubicin tạo phức hợp với sắt sinh ra các gốc tự do oxy hóa (ROS) gây peroxy hóa lipid màng tế bào cơ tim. Do cơ tim có lượng enzym catalase thấp nên rất dễ bị tổn thương, gây suy tim sung huyết mạn tính phụ thuộc vào tổng liều tích lũy.",
    reference: "Sách Dược lý 2 tr. 257-258"
  },
  {
    chapter: "Thuốc chống ung thư",
    level: "Nhận biết",
    question: "Cisplatin là thuốc chống ung thư nhóm phức hợp platin có hai tác dụng không mong muốn nghiêm trọng nổi bật nhất trên lâm sàng là gì?",
    options: [
      "Độc tính thận nặng nề và buồn nôn/nôn dữ dội bậc cao",
      "Tăng huyết áp kịch phát và xuất huyết tiêu hóa dưới",
      "Hạ canxi máu nặng gây co giật uốn ván",
      "Mất trí nhớ ngắn hạn thoáng qua"
    ],
    correct: 0,
    explanation: "Cisplatin gây độc tế bào ống lượn gần dẫn tới suy thận cấp (cần truyền lượng lớn dịch NaCl 0,9% trước và sau truyền thuốc để tăng lợi niệu bảo vệ thận), đồng thời kích thích mạnh trung tâm nôn ở hành não gây nôn dữ dội cần dùng thuốc chống nôn kháng 5-HT3 Ondansetron liều cao.",
    reference: "Sách Dược lý 2 tr. 249-250"
  },

  // =========================================================================
  // BÀI 20: THUỐC TRONG ĐIỀU TRỊ NGỘ ĐỘC CẤP (trang 354 - 366)
  // =========================================================================
  {
    chapter: "Thuốc/trong điều trị ngộ độc",
    level: "Nhận biết",
    question: "Thuốc kháng độc đặc hiệu (antidote) hàng đầu được sử dụng để điều trị ngộ độc cấp tính Paracetamol (Acetaminophen) là thuốc nào?",
    options: [
      "N-acetylcystein",
      "Naloxon hydroclorid",
      "Flumazenil",
      "Protamin sulfat"
    ],
    correct: 0,
    explanation: "Khi quá liều paracetamol, chất chuyển hóa độc N-acetyl-p-benzoquinon imin (NAPQI) làm cạn kiệt glutathion của gan và gây hoại tử tế bào gan. N-acetylcystein cung cấp nhóm sulfhydryl (-SH) và thúc đẩy tổng hợp glutathion để trung hòa NAPQI, bảo vệ tế bào gan khỏi hoại tử.",
    reference: "Sách Dược lý 2 tr. 358-359"
  },
  {
    chapter: "Thuốc/trong điều trị ngộ độc",
    level: "Nhận biết",
    question: "Thuốc đối kháng đặc hiệu tại thụ thể mu-opioid được dùng để cấp cứu ngộ độc cấp Opioid (như Morphin, Heroin, Fentanyl) có biểu hiện ức chế hô hấp và co đồng tử nhỏ như đầu đinh ghim là gì?",
    options: [
      "Naloxon",
      "Atropin sulfat",
      "Flumazenil",
      "Pralidoxim (PAM)"
    ],
    correct: 0,
    explanation: "Naloxon là chất đối kháng thuần túy cạnh tranh tại tất cả các thụ thể opioid (ưu tiên mu-opioid), có tác dụng đảo ngược nhanh chóng tình trạng ức chế hô hấp, hôn mê và co đồng tử do morphin hoặc các opioid khác gây ra chỉ sau 1-2 phút tiêm tĩnh mạch.",
    reference: "Sách Dược lý 2 tr. 361"
  },
  {
    chapter: "Thuốc/trong điều trị ngộ độc",
    level: "Nhận biết",
    question: "Flumazenil là chất đối kháng đặc hiệu tại thụ thể GABAA được sử dụng để đảo ngược tác dụng an thần và cấp cứu quá liều nhóm thuốc nào?",
    options: [
      "Benzodiazepin (như Diazepam, Midazolam)",
      "Barbiturat (như Phenobarbital)",
      "Thuốc chống trầm cảm 3 vòng",
      "Thuốc tê nhóm este (như Procain)"
    ],
    correct: 0,
    explanation: "Flumazenil cạnh tranh tại vị trí gắn của Benzodiazepin trên phức hợp thụ thể GABAA - kênh Cl-, đảo ngược nhanh tác dụng ức chế thần kinh trung ương và hôn mê do ngộ độc benzodiazepin.",
    reference: "Sách Dược lý 2 tr. 362"
  },
  {
    chapter: "Thuốc/trong điều trị ngộ độc",
    level: "Vận dụng",
    question: "Phác đồ kinh điển cấp cứu ngộ độc cấp thuốc trừ sâu nhóm Phospho hữu cơ bao gồm sự phối hợp của hai thuốc nào?",
    options: [
      "Atropin sulfat và Pralidoxim (PAM)",
      "Naloxon và Vitamin K1",
      "Ethanol và Fomepizol",
      "Dimercaprol và CaNa2EDTA"
    ],
    correct: 0,
    explanation: "Atropin phong bế thụ thể muscarinic để giải quyết hội chứng cường phó giao cảm (co thắt phế quản, tăng tiết đờm dãi, nhịp chậm). Pralidoxim (PAM) là chất tái hoạt hóa enzym acetylcholinesterase bằng cách tách gốc phosphoryl ra khỏi enzym khi enzym chưa bị 'già hóa' (aging).",
    reference: "Sách Dược lý 2 tr. 351, 359"
  },
  {
    chapter: "Thuốc/trong điều trị ngộ độc",
    level: "Nhận biết",
    question: "Trong ngộ độc cấp khí độc Carbon Monoxid (CO) gây ngạt mô tế bào do tạo Carboxyhemoglobin (HbCO), liệu pháp cấp cứu quan trọng nhất là gì?",
    options: [
      "Thở oxy nguyên chất 100% hoặc liệu pháp oxy cao áp (HBO)",
      "Tiêm tĩnh mạch dung dịch xanh methylen",
      "Rửa dạ dày bằng dung dịch than hoạt",
      "Tiêm thuốc kích thích trung tâm hô hấp Nikethamid"
    ],
    correct: 0,
    explanation: "Khí CO gắn vào hemoglobin với ái lực gấp hơn 200 lần oxy tạo HbCO bền vững. Thở oxy 100% hoặc oxy cao áp (2-3 atm) làm tăng mạnh phân áp oxy hòa tan, đẩy nhanh tốc độ phân ly HbCO, rút ngắn thời gian bán hủy của HbCO từ 320 phút xuống còn 20-30 phút.",
    reference: "Sách Dược lý 2 tr. 357"
  },
  {
    chapter: "Thuốc/trong điều trị ngộ độc",
    level: "Vận dụng",
    question: "Trong ngộ độc cấp các thuốc có bản chất acid yếu như Phenobarbital (Barbiturat) hoặc Aspirin (Salicylat), biện pháp tăng đào thải chất độc qua nước tiểu hiệu quả nhất là gì?",
    options: [
      "Kiềm hóa nước tiểu bằng cách truyền tĩnh mạch dung dịch Natri hydrocarbonat (NaHCO3 1,4%)",
      "Toan hóa nước tiểu bằng cách uống nhiều Vitamin C",
      "Hạn chế uống nước và dùng thuốc giữ muối khoáng",
      "Cho bệnh nhân uống dung dịch acid chlohydric loãng"
    ],
    correct: 0,
    explanation: "Khi kiềm hóa nước tiểu nâng pH lên trên 7,5 - 8, các phân tử thuốc acid yếu (Phenobarbital, Salicylat) sẽ bị ion hóa thành dạng phân cực mang điện tích, không thể tái hấp thu thụ động qua biểu mô ống thận và bị thải trừ ồ ạt theo nước tiểu ra ngoài (nguyên lý bẫy ion).",
    reference: "Sách Dược lý 2 tr. 356"
  },
  {
    chapter: "Thuốc/trong điều trị ngộ độc",
    level: "Vận dụng cao",
    question: "Trong cấp cứu ngộ độc cồn công nghiệp Methanol (gây toan chuyển hóa nặng và mù mắt do tích tụ acid formic), vì sao Ethanol tinh khiết hoặc Fomepizol được sử dụng làm thuốc giải độc?",
    options: [
      "Cạnh tranh mạnh mẽ tại enzym Alcohol Dehydrogenase (ADH) làm chậm quá trình chuyển hóa Methanol thành Acid Formic độc hại",
      "Ethanol phá hủy trực tiếp phân tử methanol trong máu",
      "Ethanol gắn kết với acid formic tạo este không tan đào thải qua phân",
      "Ethanol làm tăng sinh tế bào thần kinh thị giác"
    ],
    correct: 0,
    explanation: "Methanol tự thân ít độc, nhưng bị enzym ADH ở gan oxy hóa thành formaldehyd rồi thành acid formic gây toan máu nặng nề và teo dây thần kinh thị giác gây mù mắt. Ethanol có ái lực với ADH mạnh hơn methanol gấp 10-20 lần, chiếm giữ enzym và ngăn cản sự chuyển hóa methanol thành acid formic độc hại.",
    reference: "Sách Dược lý 2 tr. 364"
  },
  {
    chapter: "Thuốc/trong điều trị ngộ độc",
    level: "Nhận biết",
    question: "Chất giải độc đặc hiệu dùng để điều trị tình trạng Methemoglobin máu (MetHb) cấp tính do ngộ độc các chất oxy hóa (như nitrit, dapsone, anilin) là gì?",
    options: [
      "Xanh Methylen (Methylene blue)",
      "Natri thiosulfat",
      "Atropin sulfat",
      "Acid tranexamic"
    ],
    correct: 0,
    explanation: "Xanh methylen là chất nhận electron, dưới tác dụng của enzym NADPH-Methemoglobin reductase trong hồng cầu sẽ khử phân tử sắt ba (Fe3+) trong methemoglobin trở lại thành sắt hai (Fe2+) trong hemoglobin bình thường, phục hồi khả năng vận chuyển oxy của máu.",
    reference: "Sách Dược lý 2 tr. 363"
  }
];
