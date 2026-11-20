// PATCH BATCH 1: Cardio (Thuốc trợ tim, THA, CĐTN, Chống loạn nhịp)
// All options balanced, concise (< 55-65 chars), zero giveaway words, exact correct index preserved.

const patchBatch1 = {
  // THUỐC TRỢ TIM
  1: [
    "Strophanthus kombe",
    "Digitalis purpurea",
    "Digitalis lanata",
    "Rauwolfia serpentina"
  ],
  2: [
    "Chuỗi oligosaccharid ở vị trí C3",
    "Nhân steroid có vòng lacton không no ở C17 và OH ở C14",
    "Nhóm thế hydroxyl tự do ở vị trí C3",
    "Các gốc đường digitoxose liên kết nối tiếp"
  ],
  3: [
    "Enzym Na+/K+-ATPase ở màng tế bào",
    "Kênh đồng vận chuyển 3Na+/1Ca2+",
    "Thụ thể ryanodine trên màng lưới nội chất",
    "Enzym phosphodiesterase-3 trong tế bào cơ tim"
  ],
  4: [
    "Tăng co bóp, giảm nhịp xoang, giảm dẫn truyền nhĩ thất",
    "Giảm co bóp, tăng nhịp xoang, tăng dẫn truyền nhĩ thất",
    "Tăng co bóp, tăng nhịp xoang, tăng tốc độ dẫn truyền",
    "Giảm co bóp, giảm nhịp tim, tăng kích thích nút nhĩ thất"
  ],
  5: [
    "Chẹn thụ thể beta-1 adrenergic ở màng cơ tim",
    "Tăng giải phóng catecholamin tận cùng giao cảm",
    "Ức chế kênh calci typ T ở tế bào dẫn nhịp",
    "Tăng trương lực phế vị và kéo dài thời kỳ trơ nút nhĩ thất"
  ],
  6: [
    "Đoạn ST chênh lên dạng vòm nhọn",
    "Khoảng QT kéo dài kèm sóng U biên độ lớn",
    "Đoạn ST chênh lõm hình lòng thuyền",
    "Đoạn PR rút ngắn kèm QRS giãn rộng"
  ],
  7: [
    "Thuốc ức chế Na+/K+-ATPase (Glycosid tim)",
    "Thuốc chẹn kênh calci nhóm dihydropyridin",
    "Thuốc ức chế carbonic anhydrase",
    "Thuốc chẹn thụ thể beta-adrenergic"
  ],
  8: [
    "Ion Natri (Na+)",
    "Ion Kali (K+)",
    "Ion Clorid (Cl-)",
    "Ion Bicarbonat (HCO3-)"
  ],
  10: [
    "Digoxin gắn mạnh protein huyết tương; Digitoxin ở dạng tự do",
    "Digitoxin bài xuất qua thận; Digoxin chuyển hóa qua gan",
    "Digoxin thải trừ qua thận; Digitoxin chuyển hóa gan",
    "Digoxin có t1/2 dài 5-7 ngày; Digitoxin có t1/2 ngắn 1 ngày"
  ],
  11: [
    "Truyền tĩnh mạch calci gluconat",
    "Dùng kháng thể kháng Digoxin đặc hiệu (Fab)",
    "Sốc điện chuyển nhịp phá rung thất khẩn cấp",
    "Lọc máu thẩm tách ngoài thận"
  ],
  12: [
    "Làm tăng đào thải glycosid qua thận gây suy tim cấp",
    "Tạo tủa chelate gây tắc nghẽn hệ vi tuần hoàn phổi",
    "Làm tăng calci nội bào gây rung thất hoặc ngừng tim tâm thu",
    "Cạnh tranh thụ thể phế vị ở hành não gây hạ huyết áp"
  ],
  15: [
    "Kích thích guanylyl cyclase làm tăng cGMP",
    "Kích thích adenylate cyclase làm tăng noradrenalin",
    "Ức chế phosphodiesterase-3 làm tăng cAMP nội bào",
    "Chẹn thụ thể beta-1 giao cảm làm giảm cAMP"
  ],
  18: [
    "Tăng liều dùng hàng ngày bù trừ giảm độ lọc thận",
    "Giảm liều dùng hoặc giãn khoảng cách đưa thuốc",
    "Giữ nguyên liều nạp và phối hợp thêm lợi tiểu quai",
    "Chuyển sang tiêm tĩnh mạch tránh chuyển hóa gan"
  ],
  176: [
    "Mất hầu như hoàn toàn tác dụng trợ tim",
    "Tăng mạnh lực co bóp và kéo dài thời gian bán thải",
    "Chuyển thành chất đối kháng thụ thể adrenergic",
    "Tăng mạnh độ tan trong lipid và qua hàng rào máu não"
  ],
  177: [
    "Giảm khả năng hấp thu glycosid tại niêm mạc ruột",
    "Tăng nhạy cảm của cơ tim với độc tính loạn nhịp digitalis",
    "Thúc đẩy thoái giáng enzym vận chuyển ion qua màng",
    "Mất hoàn toàn ái lực gắn kết với thụ thể bề mặt tim"
  ],
  178: [
    "Rối loạn thị giác nhìn mờ hoặc nhìn màu vàng xanh",
    "Rối loạn tiêu hóa chán ăn, buồn nôn và nôn",
    "Xuất hiện cơn co giật toàn thể kèm ảo giác",
    "Block nhánh trái hoàn toàn kèm tràn dịch màng ngoài tim"
  ],
  179: [
    "Nhịp chậm xoang đơn thuần không kèm rối loạn dẫn truyền",
    "Ngoại tâm thu thất đa ổ hoặc nhịp đôi, nhịp ba",
    "Nhịp nhanh kịch phát trên thất do vòng vào lại",
    "Cuồng động nhĩ với tỷ lệ block dẫn truyền 2:1"
  ],
  180: [
    "Bệnh cơ tim phì đại tắc nghẽn đường ra thất trái",
    "Suy tim giảm phân suất tống máu kèm rung nhĩ đáp ứng thất nhanh",
    "Suy tim tâm trương bảo tồn phân suất tống máu",
    "Viêm cơ tim cấp do virus kèm tụt huyết áp sâu"
  ],
  181: [
    "Bệnh cơ tim phì đại tắc nghẽn hoặc hẹp van động mạch chủ",
    "Bệnh cơ tim giãn vô căn kèm giảm phân suất tống máu",
    "Suy tim mạn tính sau nhồi máu cơ tim có giảm co bóp",
    "Bệnh tim thiếu máu cục bộ kèm tăng huyết áp nguyên phát"
  ],
  182: [
    "Kích hoạt enzym gan thúc đẩy đào thải nhanh digoxin",
    "Tăng dẫn truyền nhĩ thất triệt tiêu tác dụng làm chậm tim",
    "Cạnh tranh trực tiếp với digoxin trên mô cơ vân",
    "Giữ kali máu làm giảm nguy cơ loạn nhịp do digoxin"
  ],
  253: [
    "Ngay sau khi uống ba mươi phút",
    "Tại thời điểm hai giờ sau bữa ăn no",
    "Sau khi uống ít nhất 6-8 giờ hoặc trước liều kế tiếp",
    "Vào thời điểm nửa đêm khi nồng độ cortisol thấp nhất"
  ],
  254: [
    "Atropin sulfat tiêm tĩnh mạch",
    "Propranolol tiêm tĩnh mạch",
    "Amiodaron truyền tĩnh mạch",
    "Verapamil tiêm tĩnh mạch chậm"
  ],
  256: [
    "Tăng giải phóng calci từ mạng nội chất qua thụ thể IP3",
    "Gắn vào Troponin C tăng lực co cơ mà không tăng calci tự do",
    "Ức chế hoạt động bơm trao đổi natri - calci màng tế bào",
    "Hoạt hóa trực tiếp kênh calci typ L gây tăng dòng calci vào"
  ],
  257: [
    "Diệt khuẩn ruột giảm thoái biến và ức chế P-glycoprotein",
    "Tăng gắn protein huyết tương làm tăng nồng độ tự do",
    "Kích thích enzym vận chuyển ở niêm mạc bờ bàn chải ruột",
    "Cạnh tranh bài tiết ở ống thận làm giảm thải trừ qua nước tiểu"
  ],
  258: [
    "Giảm mức lọc cầu thận và giảm thể tích phân bố của thuốc",
    "Tăng số lượng thụ thể Na+/K+-ATPase tại màng tim",
    "Tăng tỷ lệ hấp thu thuốc qua niêm mạc ống tiêu hóa",
    "Kích thích vỏ thượng thận tăng tiết aldosteron gây hạ kali"
  ],
  306: [
    "Rút ngắn thời gian trơ nút nhĩ thất, kéo dài trơ cơ thất",
    "Kéo dài thời gian trơ đồng đều trên toàn bộ các buồng tim",
    "Rút ngắn thời gian trơ đồng đều trên toàn bộ hệ dẫn truyền",
    "Kéo dài thời gian trơ nút nhĩ thất, rút ngắn trơ cơ thất"
  ],
  351: [
    "Ức chế cạnh tranh enzym aromatase ở mô mỡ",
    "Cấu trúc aglycon gắn chéo và kích hoạt thụ thể estrogen",
    "Kích thích tuyến yên tăng cường bài tiết prolactin",
    "Ức chế tổng hợp testosterone tại tế bào kẽ tinh hoàn"
  ],

  // THUỐC ĐIỀU TRỊ THA
  19: [
    "Ức chế men chuyển, chẹn beta, lợi tiểu quai, chẹn alpha",
    "Ức chế men chuyển, chẹn thụ thể ARB, chẹn calci, lợi tiểu thiazid",
    "Chẹn kênh calci, chẹn beta, lợi tiểu quai, đồng vận alpha trung ương",
    "Chẹn beta chọn lọc, kháng aldosteron, giãn trực tiếp mạch, nitrat"
  ],
  20: [
    "Thụ thể AT1 của angiotensin II trên cơ trơn mạch",
    "Enzym aminopeptidase A chuyển hóa angiotensin II",
    "Enzym chuyển angiotensin (ACE / kininase II)",
    "Enzym neutral endopeptidase (neprilysin)"
  ],
  27: [
    "Kích thích phản xạ giao cảm gây tăng nhịp tim và co bóp",
    "Giãn chọn lọc tĩnh mạch lớn mà không hạ huyết áp động mạch",
    "Ức chế lực co bóp tim và làm chậm dẫn truyền nút nhĩ thất",
    "Tăng cường tính tự động nút xoang và tăng tốc dẫn truyền"
  ],
  28: [
    "Chẹn kênh calci DHP phối hợp thuốc chẹn beta",
    "Chẹn kênh calci Non-DHP phối hợp thuốc chẹn beta",
    "Thuốc ức chế men chuyển phối hợp thuốc chẹn thụ thể ARB",
    "Thuốc lợi tiểu thiazid phối hợp thuốc chẹn alpha-1"
  ],
  29: [
    "Chẹn thụ thể alpha-1 hậu synap tại các tiểu động mạch",
    "Kích thích tế bào nội mô giải phóng nitric oxid giãn mạch",
    "Kích thích trung tâm phó giao cảm làm giãn cơ trơn mạch",
    "Giảm trương lực giao cảm ly tâm đến tim và mạch máu"
  ],
  31: [
    "Tiêm truyền tĩnh mạch liên tục thuốc hạ áp tác dụng nhanh",
    "Uống viên phóng thích kéo dài với liều lượng tăng gấp đôi",
    "Ngậm dưới lưỡi viên nang nifedipin chọc thủng",
    "Tiêm bắp sâu thuốc lợi tiểu thiazid kết hợp digoxin"
  ],
  33: [
    "Thuốc lợi tiểu quai tác dụng mạnh",
    "Thuốc lợi tiểu giữ kali kháng aldosteron",
    "Thuốc lợi tiểu thẩm thấu đường tĩnh mạch",
    "Thuốc lợi tiểu thiazid và các dẫn chất tương tự thiazid"
  ],
  34: [
    "Thuốc chẹn kênh calci phân nhóm dihydropyridin",
    "Thuốc chẹn chọn lọc thụ thể beta-1 adrenergic",
    "Thuốc chẹn chọn lọc thụ thể alpha-1 adrenergic",
    "Thuốc chẹn thụ thể angiotensin II (nhóm ARB)"
  ],
  183: [
    "Phù mắt cá chân kéo dài kèm tăng men gan ứ mật",
    "Rối loạn vị giác, phát ban da và giảm bạch cầu hạt",
    "Bão giao cảm dội ngược bùng phát đau thắt ngực khi ngừng thuốc",
    "Tăng áp lực nội sọ đột ngột gây xuất huyết dưới nhện"
  ],
  185: [
    "Ức chế tức thời nút xoang gây ngừng tim đột ngột",
    "Co thắt phế quản cấp tính gây suy hô hấp nặng",
    "Kích hoạt bài tiết renin tái bùng phát cơn tăng huyết áp",
    "Gây tụt áp nhanh kích hoạt phản xạ giao cảm loạn nhịp tim"
  ],
  187: [
    "Ức chế phosphodiesterase-5 làm tăng cGMP nội bào",
    "Kích hoạt adenylate cyclase làm tăng cAMP nội bào",
    "Mở kênh kali nhạy cảm ATP gây ưu phân cực màng cơ trơn",
    "Phong bế cạnh tranh thụ thể endothelin ETA ở nội mô"
  ],
  188: [
    "Điều trị hội chứng rậm lông ở phụ nữ mãn kinh",
    "Bào chế dung dịch bôi ngoài điều trị rụng tóc hói đầu",
    "Kích thích mọc lông mày cho người suy giáp trạng",
    "Bào chế kem triệt lông vĩnh viễn nồng độ đậm đặc"
  ],
  189: [
    "Thuốc kích thích alpha-2 trung ương hoặc chẹn beta liều cao",
    "Thuốc lợi tiểu thiazid hạ áp qua đào thải natri ở thận",
    "Thuốc ức chế men chuyển ngăn tạo angiotensin II",
    "Thuốc chẹn thụ thể angiotensin II đối kháng tại mạch máu"
  ],
  190: [
    "Phối hợp thuốc ức chế men chuyển cùng thuốc chẹn thụ thể ARB",
    "Phối hợp thuốc ức chế men chuyển cùng thuốc chẹn calci DHP",
    "Phối hợp thuốc chẹn thụ thể ARB cùng thuốc lợi tiểu thiazid",
    "Phối hợp thuốc chẹn calci DHP cùng thuốc chẹn beta-1"
  ],
  260: [
    "Kích thích alpha-2 tại thân não và chẹn beta-1 ở cơ tim",
    "Chẹn alpha-2 tiền synap và kích thích beta-2 ở mạch máu",
    "Chẹn thụ thể alpha-1 và chẹn không chọn lọc thụ thể beta",
    "Chẹn thụ thể dopamin D2 và ức chế enzym MAO ngoại biên"
  ],
  264: [
    "Một thuốc chẹn calci DHP cùng một thuốc mở kênh kali",
    "Một thuốc chẹn beta cùng một thuốc lợi tiểu quai hoặc thiazid",
    "Một thuốc chủ vận beta-2 cùng một thuốc kháng histamin H1",
    "Một thuốc trợ tim digoxin cùng một thuốc chống đông đường uống"
  ],
  307: [
    "Thuốc chẹn kênh calci Non-DHP (Verapamil, Diltiazem)",
    "Thuốc chẹn chọn lọc thụ thể beta-1 adrenergic",
    "Thuốc lợi tiểu nhóm thiazid ức chế tái hấp thu muối",
    "Thuốc chẹn chọn lọc thụ thể alpha-1 adrenergic ngoại vi"
  ],
  309: [
    "Thuốc kích thích thụ thể alpha-2 trung ương (Methyldopa)",
    "Thuốc ức chế men chuyển hoặc thuốc chẹn thụ thể ARB",
    "Thuốc chẹn phối hợp thụ thể alpha-1 và beta (Labetalol)",
    "Thuốc chẹn kênh calci DHP dạng phóng thích kéo dài"
  ],

  // THUỐC CHỮA CĐTN
  36: [
    "Aspirin viên bao tan trong ruột uống ngay lập tức",
    "Amlodipin viên nang uống tác dụng kéo dài",
    "Nitroglycerin viên ngậm dưới lưỡi hoặc xịt niêm mạc",
    "Isosorbid-5-mononitrat viên phóng thích kéo dài"
  ],
  37: [
    "Kích thích prostacyclin hoạt hóa adenylcyclase tăng cAMP",
    "Giải phóng nitric oxid kích hoạt guanylyl cyclase tăng cGMP",
    "Ức chế chọn lọc thụ thể endothelin-1 ngăn dòng calci vào",
    "Mở trực tiếp kênh kali nhạy cảm ATP gây giãn cơ trơn"
  ],
  38: [
    "Giãn ưu thế hệ tĩnh mạch làm giảm tiền gánh và sức căng thất",
    "Giãn chọn lọc các nhánh tiểu động mạch vành bị xơ vữa",
    "Co hệ mạch ngoại vi toàn thân dồn tuần hoàn về tim",
    "Ức chế chọn lọc trung khu cảm giác đau tại đồi thị và vỏ não"
  ],
  39: [
    "Hình thành kháng thể IgG cạnh tranh vị trí gắn nitrat",
    "Cảm ứng enzym chuyển hóa tại gan làm tăng đào thải thuốc",
    "Cạn kiệt nhóm sulfhydryl nội bào và bất hoạt enzym ALDH-2",
    "Tăng sinh thụ thể beta adrenergic trên màng tế bào cơ tim"
  ],
  40: [
    "Ho khan dai dẳng kèm cảm giác ngứa rát họng về đêm",
    "Táo bón kéo dài kèm trướng bụng do giảm nhu động ruột",
    "Đau đầu kiểu mạch đập, đỏ bừng mặt và hạ huyết áp tư thế",
    "Tê bì dị cảm đầu chi đối xứng hai bên do co mạch vi tuần hoàn"
  ],
  41: [
    "Tạo phức kết tủa gây tắc mạch phổi cấp tính đe dọa tử vong",
    "Ức chế dẫn truyền thần kinh cơ gây suy hô hấp và liệt cơ",
    "Tăng tính thấm hàng rào máu não gây phù não cấp tính",
    "Tích lũy cGMP gây giãn mạch quá mức và tụt huyết áp trầm trọng"
  ],
  42: [
    "Uống thuốc kèm dung dịch kiềm nhẹ tăng hấp thu",
    "Bố trí khoảng thời gian trống không có nitrat từ 8 đến 12 giờ",
    "Chủ động tăng liều gấp đôi sau mỗi ba ngày điều trị",
    "Phối hợp ngay từ đầu với một thuốc chống đông kháng vitamin K"
  ],
  191: [
    "Chẹn kênh calci typ T làm chậm khử cực tâm trương cơ tim",
    "Ức chế chọn lọc kênh If tại nút xoang làm chậm nhịp tim",
    "Chẹn thụ thể beta-1 giao cảm ở màng tế bào nút xoang",
    "Kích hoạt dòng kali phụ thuộc acetylcholin kéo dài trơ tim"
  ],
  192: [
    "Hiện tượng chói sáng mắt khi thay đổi đột ngột ánh sáng",
    "Mất hoàn toàn vị giác kèm theo rối loạn cảm giác mùi vị",
    "Ảo giác thị giác nhìn mọi vật đổi thành sắc vàng hoặc xanh",
    "Giảm thính lực một bên kèm theo ù tai dạng tiếng ve kêu"
  ],
  193: [
    "Kích thích enzym ty thể phân giải glycogen thành acid lactic",
    "Ức chế thụ thể ryanodine ngăn giải phóng ion calci vào bào tương",
    "Ức chế vận chuyển acid béo và gia tăng dự trữ glycogen",
    "Ức chế 3-ketoacyl-CoA thiolase, ưu tiên oxy hóa glucose"
  ],
  266: [
    "Nitrat làm tăng nhịp phản xạ triệt tiêu co thắt phế quản",
    "Chẹn beta giảm nhịp tim phản xạ, Nitrat giảm sức căng thành thất",
    "Chẹn beta kích thích gan chuyển hóa Nitrat tăng giãn mạch",
    "Cả hai thuốc cùng ức chế enzym tổng hợp thromboxan A2"
  ],
  267: [
    "Nhiễm Methemoglobin máu làm giảm vận chuyển oxy của hồng cầu",
    "Giảm bạch cầu hạt trung tính đe dọa nhiễm trùng cơ hội",
    "Thiếu máu tan máu tự miễn với nghiệm pháp Coombs dương tính",
    "Đa hồng cầu thứ phát do tăng sản xuất erythropoietin ở thận"
  ],
  310: [
    "Kích hoạt dòng calci đi vào ở pha 2 tăng co bóp cơ tim",
    "Ức chế dòng kali đi ra chậm kéo dài điện thế hoạt động",
    "Kích thích dòng natri nhanh ở pha 0 tăng tốc độ khử cực",
    "Ức chế chọn lọc dòng Natri muộn, ngừa quá tải calci nội bào"
  ],
  327: [
    "Dán liên tục cả ngày và đêm, thay miếng dán mới mỗi hai ngày",
    "Dán đồng thời hai miếng vào buổi sáng và gỡ bỏ vào đầu chiều",
    "Dán 12 đến 14 giờ ban ngày, tháo ban đêm tạo khoảng trống thuốc",
    "Chỉ dán ngay khi bắt đầu xuất hiện cơn đau ngực cấp tính"
  ],
  328: [
    "Chẹn dòng calci typ L kết hợp kích thích beta-2 tại phế quản",
    "Tác dụng giống nitrat kết hợp mở kênh kali nhạy cảm ATP",
    "Ức chế enzym PDE-5 kết hợp đối kháng thụ thể AT1 mạch máu",
    "Ức chế enzym men chuyển kết hợp chẹn thụ thể alpha-1"
  ],
  331: [
    "Bệnh nhân hen phế quản nặng hoặc bệnh phổi tắc nghẽn mạn tính",
    "Bệnh nhân có suy giảm chức năng thận mức độ nhẹ",
    "Bệnh nhân mắc bệnh Parkinson và các rối loạn ngoại tháp",
    "Bệnh nhân có tiền sử viêm loét dạ dày tá tràng mạn tính"
  ],
  356: [
    "Làm co thắt tiểu phế quản gây suy hô hấp cấp tính",
    "Gây tụt áp nhanh kích hoạt phản xạ giao cảm làm tim nhanh",
    "Làm bùng phát kết tập tiểu cầu gây đông vón tắc mạch vành",
    "Làm co thắt tiểu động mạch thận dẫn tới suy thận cấp vô niệu"
  ],
  387: [
    "Bị phá hủy bởi acid dịch vị dạ dày có độ pH rất thấp",
    "Bị chuyển hóa bước đầu qua gan rất mạnh bởi enzym reductase",
    "Tạo phức chelate không tan với ion khoáng hóa trị hai ở ruột",
    "Bị hệ thống bơm P-glycoprotein tại niêm mạc ruột bài xuất ngược"
  ],
  388: [
    "Ức chế trực tiếp dòng calci vào tế bào cơ tim tâm thất",
    "Chẹn thụ thể alpha-1 adrenergic tại các động mạch lớn ngoại vi",
    "Ở liều cao gây giãn thêm các tiểu động mạch kháng lực ngoại vi",
    "Kích thích trung tâm ức chế vận mạch tại hành não gây giãn mạch"
  ],

  // THUỐC CHỐNG LOẠN NHỊP
  45: [
    "Chẹn kênh calci typ L phụ thuộc điện thế ở nút nhĩ thất",
    "Chẹn dòng Natri nhanh phụ thuộc điện thế ở màng cơ tim",
    "Chẹn thụ thể beta-adrenergic giao cảm ở màng tế bào nút xoang",
    "Chẹn kênh Kali chậm phụ thuộc điện thế kéo dài tái cực"
  ],
  46: [
    "Giảm rất mạnh pha 0, không đổi thời gian điện thế hoạt động",
    "Rút ngắn điện thế hoạt động, ức chế chọn lọc cơ tâm thất",
    "Giảm dòng calci pha 2 gây giảm co bóp mà không đổi thời kỳ trơ",
    "Giảm vừa pha 0, kéo dài điện thế hoạt động và thời kỳ trơ"
  ],
  49: [
    "Chẹn kênh calci typ T làm thay đổi khử cực chậm tâm trương",
    "Phong bế thụ thể muscarinic M2 tại cơ nhĩ tăng dẫn truyền phế vị",
    "Chẹn kênh Kali, kéo dài pha tái cực 3 và thời kỳ trơ hữu hiệu",
    "Kích thích kênh Natri mở sớm làm tăng tốc độ dẫn truyền tim"
  ],
  52: [
    "Chứa lượng lớn Iod gây hiệu ứng Wolff-Chaikoff hoặc Jod-Basedow",
    "Kích hoạt thụ thể giải phóng hormon tuyến yên tăng thoái giáng",
    "Ức chế cạnh tranh enzym khử iod và phá vỡ hấp thu iod nang giáp",
    "Kích hoạt bổ thể phá hủy tế bào biểu mô nang tuyến giáp"
  ],
  194: [
    "Ức chế phosphodiesterase-3 tăng AMP vòng tăng dẫn truyền nhĩ thất",
    "Gắn thụ thể A1, kích hoạt dòng Kali và ức chế dòng Calci nút AV",
    "Chẹn kênh Natri nhanh ở mạng Purkinje kéo dài dẫn truyền thất",
    "Đối kháng thụ thể beta-1 giao cảm làm giảm co bóp cơ tim tức thì"
  ],
  195: [
    "Gắn kết protein huyết tương trên chín mươi chín phần trăm",
    "Chuyển hóa qua gan chậm với thời gian bán thải trên ba ngày",
    "Độ tan trong nước kém bắt buộc phải hòa tan trong nhũ dịch",
    "Thời gian bán thải dưới mười giây đòi hỏi tiêm bolus nhanh"
  ],
  196: [
    "Kéo dài thời gian tái cực và kéo dài khoảng QT trên điện tim",
    "Rút ngắn thời gian điện thế hoạt động tại mô cơ tâm thất",
    "Làm chậm dẫn truyền qua nút nhĩ thất và tăng thời kỳ trơ",
    "Chẹn thụ thể beta giao cảm làm chậm tần số phát nhịp nút xoang"
  ],
  197: [
    "Rút ngắn thời gian dẫn truyền và giảm điện thế hoạt động",
    "Chẹn chọn lọc kênh calci mà không gây biến đổi phức bộ QRS",
    "Ức chế mạnh pha 0 giãn rộng QRS mà ít đổi điện thế hoạt động",
    "Kéo dài thời gian tái cực mà không thay đổi dẫn truyền nhĩ"
  ],
  268: [
    "Tăng nguy cơ gây xơ hóa mô kẽ phổi tiến triển",
    "Hội chứng tiêu cơ vân cấp gây tổn thương thận",
    "Gây suy tủy xương bất sản nặng không hồi phục",
    "Tăng tỷ lệ tử vong do loạn nhịp thất ác tính"
  ],
  311: [
    "Chẹn kênh Natri nhanh ở sợi dẫn truyền cơ tâm thất",
    "Ức chế thụ thể beta-2 giao cảm tại phế quản và mạch máu",
    "Chẹn kênh Calci typ L tại nút xoang và nút nhĩ thất",
    "Kích thích nội mô vành giải phóng nitric oxid giãn mạch"
  ],
  334: [
    "Tính thân dầu cao, thể tích phân bố lớn, t1/2 kéo dài 25-110 ngày",
    "Đào thải nguyên vẹn qua nước tiểu mà không qua gan",
    "Gắn kết cộng hóa trị không thuận nghịch với albumin",
    "Tích lũy hoàn toàn trong màng tế bào hồng cầu tuần hoàn"
  ],
  335: [
    "Nhóm I chẹn kênh Natri và Nhóm IV chẹn kênh Calci",
    "Nhóm IB rút ngắn tái cực và Nhóm IC làm chậm pha khử cực",
    "Nhóm II chẹn beta không chọn lọc và Nhóm III chẹn kênh Kali",
    "Nhóm II chẹn chọn lọc beta-1 và Nhóm I chẹn nhanh dòng Natri"
  ],
  389: [
    "Độc tính thần kinh trung ương (dị cảm, chóng mặt, co giật)",
    "Độc tính đường hô hấp gây co thắt phế quản và khó thở cấp",
    "Suy thận cấp thể hoại tử ống thận kèm xuất hiện protein niệu",
    "Hoại tử tế bào gan cấp tính kèm vàng da và ứ mật nặng"
  ],
  390: [
    "Chẹn kênh calci typ T ở màng tế bào tâm thất kéo dài trơ thất",
    "Chẹn dòng Kali chọn lọc ở nhĩ và chẹn kênh Natri khi nhịp nhanh",
    "Ức chế thụ thể adenosin A2A tại tiểu động mạch vành giảm tiêu thụ O2",
    "Kích hoạt bơm Na+/K+-ATPase làm tăng phân cực màng nhĩ thất"
  ],
  391: [
    "Đo lưu lượng đỉnh hô hấp và định lượng acid uric huyết thanh",
    "Chụp cộng hưởng từ sọ não và định lượng calci trong máu",
    "Ghi điện tâm đồ, xét nghiệm chức năng gan và tuyến giáp",
    "Nội soi dạ dày tá tràng và định lượng enzym amylase máu"
  ]
};

module.exports = { patchBatch1 };
