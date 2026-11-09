// NGÂN HÀNG DƯỢC LÝ 2 - PHẦN 3: KÝ SINH TRÙNG, SỐT RÉT, HẠ LIPID MÁU & KTGHP
// Bài 7: Thuốc chống giun sán, amibe (Chương 10 & 11, tr. 207-221)
// Bài 10: Thuốc hạ lipid máu (Chương 3, tr. 91-102)
// Bài 11: Thuốc chống sốt rét (Chương 9, tr. 193-207)
// Bài 12: KTGHP (Kiểm tra giữa học phần - Ôn tập trọng tâm Bài 1-11)
// Tiêu chuẩn: Chuẩn giáo trình Dược lý 2 Bộ Y tế, không mở ngoặc đơn gợi ý ở đáp án.

module.exports = [
  // =========================================================================
  // BÀI 7: THUỐC CHỐNG GIUN SÁN, AMIBE (trang 207 - 221)
  // =========================================================================
  {
    chapter: "Thuốc chống giun sán, amibe",
    level: "Nhận biết",
    question: "Metronidazol có phổ tác dụng và cơ chế kháng vi sinh vật nào sau đây?",
    options: [
      "Khử nhóm nitro bởi protein vận chuyển electron tạo gốc tự do phá hủy chuỗi ADN của amip và vi khuẩn kỵ khí",
      "Ức chế tổng hợp vách tế bào peptidoglycan của vi khuẩn ái khí",
      "Gắn vào tiểu phần 30S ribosom gây đọc sai mã mARN",
      "Ức chế không hồi phục enzym ADN gyrase"
    ],
    correct: 0,
    explanation: "Nhóm 5-nitroimidazol (Metronidazol, Tinidazol) xâm nhập vào tế bào amip hoặc vi khuẩn kỵ khí, nhóm nitro bị enzym khử tạo các gốc tự do có độc tính cao làm đứt gãy sợi ADN và tiêu diệt tế bào ký sinh trùng.",
    reference: "Sách Dược lý 2 tr. 207-208"
  },
  {
    chapter: "Thuốc chống giun sán, amibe",
    level: "Vận dụng",
    question: "Bệnh nhân đang điều trị bằng Metronidazol bắt buộc phải kiêng tuyệt đối đồ uống có cồn (rượu, bia) vì lý do gì?",
    options: [
      "Gây phản ứng tích tụ acetaldehyd kiểu Disulfiram với triệu chứng đỏ bừng mặt, nôn nao, tụt huyết áp",
      "Làm mất hoàn toàn tác dụng diệt amip của thuốc trong lòng ruột",
      "Gây xuất huyết tiêu hóa ồ ạt do thủng đại tràng",
      "Gây đông máu nội mạch rải rác dẫn đến tắc mạch phổi"
    ],
    correct: 0,
    explanation: "Metronidazol ức chế enzym aldehyd dehydrogenase ở gan, làm cho cồn (ethanol) không thể chuyển hóa thành acid acetic mà dừng lại ở acetaldehyd. Nồng độ acetaldehyd tăng cao gây phản ứng kiểu disulfiram: bốc hỏa, nhức đầu dữ dội, buồn nôn, hạ huyết áp, đánh trống ngực.",
    reference: "Sách Dược lý 2 tr. 208"
  },
  {
    chapter: "Thuốc chống giun sán, amibe",
    level: "Nhận biết",
    question: "Để diệt triệt để thể kén amip không triệu chứng trong lòng ruột (người lành mang kén làm lây lan mầm bệnh), thuốc nào được ưu tiên lựa chọn?",
    options: [
      "Diloxanid furoat",
      "Metronidazol liều cao",
      "Emetin hydroclorid",
      "Cloroquin phosphat"
    ],
    correct: 0,
    explanation: "Diloxanid furoat là thuốc diệt amip tiếp xúc trong lòng ruột tác dụng rất mạnh trên thể amip không triệu chứng và thể kén ở đại tràng, thường dùng đơn độc cho người lành mang kén hoặc phối hợp sau đợt điều trị amip xâm lấn bằng metronidazol.",
    reference: "Sách Dược lý 2 tr. 209-210"
  },
  {
    chapter: "Thuốc chống giun sán, amibe",
    level: "Nhận biết",
    question: "Các thuốc tẩy giun nhóm Benzimidazol (như Albendazol, Mebendazol) có cơ chế tác dụng chính là gì?",
    options: [
      "Ức chế trùng hợp tubulin thành các vi quản và ức chế thu nhận glucose của giun",
      "Kích thích giải phóng acetylcholin gây co giật toàn thân giun",
      "Phong bế thụ thể GABA làm giun tăng trương lực cơ",
      "Gây hủy hoại trực tiếp lớp vỏ cutin bên ngoài của giun trưởng thành"
    ],
    correct: 0,
    explanation: "Albendazol và Mebendazol gắn đặc hiệu vào protein beta-tubulin của giun, ngăn chặn sự trùng hợp thành các vi quản tế bào (microtubules), dẫn đến ức chế quá trình vận chuyển chất dinh dưỡng và ức chế hấp thu glucose, làm cạn kiệt nguồn glycogen khiến giun bị chết đói.",
    reference: "Sách Dược lý 2 tr. 215-216"
  },
  {
    chapter: "Thuốc chống giun sán, amibe",
    level: "Vận dụng",
    question: "Khi cần điều trị ấu trùng sán dải heo ở não (Cysticercosis) hoặc nang sán dải chó (Echinococcus) ở mô sâu, việc uống Albendazol cùng với bữa ăn nhiều chất béo nhằm mục đích gì?",
    options: [
      "Tăng sinh khả dụng và độ hấp thu của thuốc vào máu lên gấp 4 đến 5 lần",
      "Tránh kích ứng niêm mạc dạ dày gây nôn mửa",
      "Giúp thuốc phân hủy nhanh tại tá tràng để ngấm vào dịch tụy",
      "Ngăn cản thuốc thải trừ qua đường mật để không độc gan"
    ],
    correct: 0,
    explanation: "Khi tẩy giun trong lòng ruột, cần uống lúc đói để thuốc ít hấp thu. Nhưng khi điều trị ấu trùng sán ở mô sâu (não, gan, phổi), uống albendazol cùng bữa ăn giàu lipid sẽ làm tăng độ tan và hấp thu vào máu gấp 4-5 lần để đạt nồng độ điều trị ở mô tổn thương.",
    reference: "Sách Dược lý 2 tr. 216"
  },
  {
    chapter: "Thuốc chống giun sán, amibe",
    level: "Nhận biết",
    question: "Thuốc nào sau đây được coi là thuốc lựa chọn hàng đầu (đầu bảng) để điều trị hầu hết các bệnh sán lá (sán lá gan nhỏ, sán lá phổi, sán lá ruột) và sán máng?",
    options: [
      "Praziquantel",
      "Piperazin",
      "Pyrantel pamoat",
      "Metronidazol"
    ],
    correct: 0,
    explanation: "Praziquantel là thuốc điều trị sán phổ rộng hiệu quả nhất hiện nay, đặc trị sán máng (Schistosoma), các loại sán lá (trừ sán lá gan lớn Fasciola), và các loại sán dây.",
    reference: "Sách Dược lý 2 tr. 219"
  },
  {
    chapter: "Thuốc chống giun sán, amibe",
    level: "Nhận biết",
    question: "Cơ chế phân tử giúp Praziquantel tiêu diệt sán là gì?",
    options: [
      "Làm tăng tính thấm của màng tế bào sán đối với ion Canxi (Ca2+) gây co cứng và tổn thương vỏ sán",
      "Ức chế tổng hợp ARN thông tin ở nhân tế bào sán",
      "Ức chế chuỗi chuyền electron ở ty thể của sán",
      "Phong bế thụ thể histamin làm teo các giác bám của sán"
    ],
    correct: 0,
    explanation: "Praziquantel làm tăng tính thấm màng tế bào ký sinh trùng với ion Ca2+, gây dòng calci ồ ạt tràn vào làm cơ sán co cứng kéo dài và làm phồng rộp, nứt vỡ lớp vỏ bảo vệ, khiến sán bị hệ miễn dịch của vật chủ tấn công tiêu diệt.",
    reference: "Sách Dược lý 2 tr. 219"
  },
  {
    chapter: "Thuốc chống giun sán, amibe",
    level: "Nhận biết",
    question: "Thuốc nào là lựa chọn đặc hiệu hàng đầu được Bộ Y tế khuyến cáo trong điều trị bệnh sán lá gan lớn (Fasciola hepatica / Fasciola gigantica)?",
    options: [
      "Triclabendazol",
      "Metronidazol",
      "Pyrantel pamoat",
      "Diethylcarbamazin"
    ],
    correct: 0,
    explanation: "Sán lá gan lớn (Fasciola) đề kháng tự nhiên với Praziquantel. Thuốc đặc hiệu duy nhất và hiệu quả nhất được Bộ Y tế phê duyệt là Triclabendazol (biệt dược Egaten).",
    reference: "Sách Dược lý 2 tr. 220"
  },
  {
    chapter: "Thuốc chống giun sán, amibe",
    level: "Nhận biết",
    question: "Diethylcarbamazin (DEC) là thuốc điều trị đặc hiệu căn nguyên bệnh ký sinh trùng nào?",
    options: [
      "Bệnh giun chỉ bạch huyết",
      "Bệnh giun tóc gây sa trực tràng",
      "Bệnh lỵ amip cấp tính ngoài ruột",
      "Bệnh sán dây bò trưởng thành"
    ],
    correct: 0,
    explanation: "Diethylcarbamazin (DEC) là thuốc đặc hiệu lựa chọn hàng đầu để tiêu diệt ấu trùng và giun chỉ trưởng thành gây bệnh giun chỉ bạch huyết (Wuchereria bancrofti, Brugia malayi).",
    reference: "Sách Dược lý 2 tr. 217"
  },
  {
    chapter: "Thuốc chống giun sán, amibe",
    level: "Vận dụng",
    question: "Khi điều trị giun chỉ bằng Diethylcarbamazin (DEC), phản ứng dị ứng rầm rộ (phản ứng Mazzotti) gồm sốt cao, nổi mề đay, sưng đau hạch bạch huyết xuất hiện do nguyên nhân nào?",
    options: [
      "Do kháng nguyên giải phóng ồ ạt từ xác ấu trùng giun chỉ bị tiêu diệt",
      "Do bản thân thuốc DEC kích thích trực tiếp giải phóng histamin từ tế bào mast",
      "Do thuốc tích lũy gây suy tạng và ngộ độc tế bào cấp tính",
      "Do vi khuẩn cộng sinh trong lòng giun xâm nhập vào máu gây nhiễm trùng huyết"
    ],
    correct: 0,
    explanation: "Phản ứng Mazzotti xuất hiện vài giờ sau liều DEC đầu tiên là do xác của hàng triệu ấu trùng giun chỉ chết đột ngột giải phóng protein lạ và dị nguyên vào tuần hoàn, kích hoạt đáp ứng miễn dịch - dị ứng mạnh của cơ thể.",
    reference: "Sách Dược lý 2 tr. 217-218"
  },
  {
    chapter: "Thuốc chống giun sán, amibe",
    level: "Nhận biết",
    question: "Ivermectin có cơ chế tác dụng dược lý chủ yếu nào?",
    options: [
      "Kích thích mở kênh ion Cl- qua trung gian thụ thể glutamate-gated và tăng giải phóng GABA",
      "Ức chế không thuận nghịch chuỗi hô hấp tế bào ở ty thể",
      "Kháng acid folic làm ức chế tổng hợp purin của ký sinh trùng",
      "Tác dụng tương tự nicotin gây rung giật cơ liên tục"
    ],
    correct: 0,
    explanation: "Ivermectin gắn chọn lọc với kênh ion Cl- cổng glutamate ở dây thần kinh và cơ của giun, đồng thời làm tăng giải phóng chất dẫn truyền ức chế GABA, gây ưu cực hóa màng tế bào làm giun bị liệt cơ mềm và chết.",
    reference: "Sách Dược lý 2 tr. 218"
  },

  // =========================================================================
  // BÀI 10: THUỐC HẠ LIPID MÁU (trang 91 - 102)
  // =========================================================================
  {
    chapter: "Thuốc hạ lipid máu",
    level: "Nhận biết",
    question: "Nhóm thuốc Statin (như Atorvastatin, Simvastatin, Rosuvastatin) có cơ chế phân tử làm hạ lipid máu là gì?",
    options: [
      "Ức chế cạnh tranh enzym Hydroxymethylglutaryl-CoA (HMG-CoA) reductase",
      "Kích hoạt thụ thể nhân PPAR-alpha ở tế bào gan",
      "Gắn kết acid mật trong ruột làm tăng bài xuất sterol qua phân",
      "Ức chế thụ thể vận chuyển cholesterol NPC1L1 ở biểu mô ruột non"
    ],
    correct: 0,
    explanation: "Statin ức chế enzym HMG-CoA reductase (enzym kiểm soát tốc độ tổng hợp cholesterol ở gan), làm giảm tổng hợp cholesterol nội bào, kích thích tế bào gan tăng tổng hợp thụ thể LDL trên bề mặt, làm tăng dọn dẹp LDL-C khỏi máu.",
    reference: "Sách Dược lý 2 tr. 94-95"
  },
  {
    chapter: "Thuốc hạ lipid máu",
    level: "Nhận biết",
    question: "Nhóm thuốc nào có hiệu quả làm giảm nồng độ LDL-Cholesterol mạnh nhất và chứng minh giảm rõ rệt tỷ lệ biến cố tử vong tim mạch trong thử nghiệm lâm sàng?",
    options: [
      "Nhóm Statin",
      "Nhóm Fibrat",
      "Nhóm Resin gắn acid mật",
      "Nhóm dẫn xuất acid nicotinic"
    ],
    correct: 0,
    explanation: "Statin là nhóm thuốc hạ LDL-C mạnh nhất (giảm từ 20-60% tùy liều và hoạt lực) và là nhóm thuốc duy nhất có bằng chứng lâm sàng vững chắc nhất về giảm tử vong tim mạch và đột quỵ ở bệnh nhân xơ vữa động mạch.",
    reference: "Sách Dược lý 2 tr. 95"
  },
  {
    chapter: "Thuốc hạ lipid máu",
    level: "Vận dụng",
    question: "Vì sao các Statin có thời gian bán thải ngắn (như Simvastatin, Lovastatin, Pravastatin) được khuyến cáo nên uống vào buổi tối trước khi đi ngủ?",
    options: [
      "Quá trình sinh tổng hợp cholesterol nội sinh ở gan diễn ra mạnh nhất vào ban đêm",
      "Để giảm tác dụng phụ gây kích ứng và đau rát dạ dày",
      "Vì thuốc chỉ hấp thu tốt khi cơ thể ở trạng thái nằm ngủ",
      "Để tránh hiện tượng thuốc bị ánh sáng mặt trời quang hóa làm giảm hoạt tính"
    ],
    correct: 0,
    explanation: "Enzym HMG-CoA reductase hoạt động tổng hợp cholesterol nội sinh mạnh nhất vào khoảng từ nửa đêm đến sáng sớm. Do đó các statin tác dụng ngắn cần uống vào buổi tối để nồng độ đỉnh trùng với thời điểm enzym hoạt động tối đa.",
    reference: "Sách Dược lý 2 tr. 95"
  },
  {
    chapter: "Thuốc hạ lipid máu",
    level: "Vận dụng cao",
    question: "Tác dụng không mong muốn nghiêm trọng nhất của Statin trên cơ vân cần theo dõi chỉ số CK (Creatine Kinase) là gì?",
    options: [
      "Viêm cơ hoại tử và tiêu cơ vân cấp giải phóng myoglobin gây suy thận cấp",
      "Tăng trương lực cơ gây co rút uốn ván kiểu ngộ độc strychnin",
      "Liệt mềm tứ chi vĩnh viễn do thoái hóa myelin thần kinh cơ",
      "Mất hoàn toàn trương lực cơ vòng thực quản dưới gây trào ngược"
    ],
    correct: 0,
    explanation: "Độc tính nguy hiểm nhất của statin là tiêu cơ vân (rhabdomyolysis). Cơ bị hủy hoại giải phóng ồ ạt enzym creatin kinase (CK tăng gấp > 10 lần giới hạn trên) và myoglobin vào máu, myoglobin làm tắc ống thận gây suy thận cấp đái ít và nước tiểu màu nâu đỏ xá xị.",
    reference: "Sách Dược lý 2 tr. 96"
  },
  {
    chapter: "Thuốc hạ lipid máu",
    level: "Vận dụng cao",
    question: "Nguy cơ tổn thương cơ vân và tiêu cơ vân tăng vọt lên gấp nhiều lần khi phối hợp thuốc Statin với nhóm thuốc nào sau đây?",
    options: [
      "Fibrat (đặc biệt là Gemfibrozil)",
      "Resin gắn acid mật (Cholestyramin)",
      "Thuốc ức chế men chuyển Enalapril",
      "Thuốc chẹn thụ thể Beta Bisoprolol"
    ],
    correct: 0,
    explanation: "Gemfibrozil ức chế quá trình liên hợp glucuronic của statin và ức chế protein vận chuyển OATP1B1 đưa statin vào gan, làm tăng nồng độ statin tự do trong máu lên nhiều lần, làm bùng phát nguy cơ hủy cơ vân cấp tính.",
    reference: "Sách Dược lý 2 tr. 96"
  },
  {
    chapter: "Thuốc hạ lipid máu",
    level: "Nhận biết",
    question: "Nhóm thuốc Fibrat (như Fenofibrat, Gemfibrozil) có cơ chế phân tử là gì?",
    options: [
      "Chủ vận thụ thể nhân PPAR-alpha kích thích tổng hợp enzym Lipoprotein lipase (LPL)",
      "Ức chế men HMG-CoA reductase ở microsom gan",
      "Phong bế thụ thể PCSK9 trên bề mặt tế bào gan",
      "Ức chế quá trình oxy hóa acid béo ở màng ty thể"
    ],
    correct: 0,
    explanation: "Fibrat gắn vào thụ thể nhân PPAR-alpha, điều hòa biểu hiện gen làm tăng tổng hợp lipoprotein lipase (LPL) và apolipoprotein A-I, A-II, đồng thời giảm tổng hợp Apo C-III, làm thoái giáng mạnh các hạt giàu triglycerid (VLDL).",
    reference: "Sách Dược lý 2 tr. 92-93"
  },
  {
    chapter: "Thuốc hạ lipid máu",
    level: "Vận dụng",
    question: "Chỉ định ưu tiên hàng đầu của nhóm thuốc Fibrat (Fenofibrat) trên lâm sàng là trường hợp nào?",
    options: [
      "Tăng Triglycerid máu nặng (trên 500 mg/dL hay 5,6 mmol/L) để phòng ngừa viêm tụy cấp",
      "Tăng Cholesterol máu đơn thuần có LDL-C tăng cao",
      "Dự phòng nhồi máu cơ tim ở bệnh nhân chỉ tăng nhẹ LDL-C",
      "Hạ huyết áp tư thế kèm đau đầu mạn tính"
    ],
    correct: 0,
    explanation: "Fibrat có tác dụng hạ triglycerid rất mạnh (giảm 30-50%). Khi nồng độ triglycerid vượt ngưỡng 500 mg/dL (5,6 mmol/L), nguy cơ viêm tụy cấp tăng vọt, do đó chỉ định ưu tiên số 1 lúc này là dùng Fibrat để kéo triglycerid xuống nhanh.",
    reference: "Sách Dược lý 2 tr. 93"
  },
  {
    chapter: "Thuốc hạ lipid máu",
    level: "Nhận biết",
    question: "Resin gắn acid mật (Cholestyramin, Colestipol) có cơ chế tác dụng hạ lipid máu như thế nào?",
    options: [
      "Trao đổi ion gắn với acid mật trong ruột tạo phức không tan đào thải qua phân, thúc đẩy gan chuyển hóa cholesterol thành acid mật",
      "Ức chế trực tiếp enzym vận chuyển lipid ở biểu mô ruột non",
      "Gây độc trực tiếp làm hoại tử các tế bào mỡ dưới da",
      "Kích thích tuyến mật tăng bài tiết cholesterol nguyên vẹn ra ngoài"
    ],
    correct: 0,
    explanation: "Cholestyramin là nhựa trao đổi anion không hấp thu qua ruột, gắn chặt với acid mật tạo phức không tan bài xuất theo phân, cắt đứt chu trình gan - ruột. Gan buộc phải tăng tiêu thụ cholesterol nội sinh để tổng hợp acid mật bù lại, làm giảm cholesterol máu.",
    reference: "Sách Dược lý 2 tr. 91-92"
  },
  {
    chapter: "Thuốc hạ lipid máu",
    level: "Vận dụng",
    question: "Tác dụng không mong muốn thường gặp khi dùng Acid Nicotinic (Niacin / Vitamin B3) liều cao là bốc hỏa đỏ bừng mặt và ngứa ngáy dữ dội. Biện pháp hữu hiệu để giảm phản ứng này là gì?",
    options: [
      "Uống một liều Aspirin trước khi dùng Niacin khoảng 30 phút",
      "Uống đồng thời cùng một cốc nước đá thật lạnh",
      "Tiêm thuốc kháng sinh phổ rộng trước mỗi liều thuốc",
      "Uống thuốc vào lúc bụng đói cồn cào lúc sáng sớm"
    ],
    correct: 0,
    explanation: "Hiện tượng đỏ bừng mặt và ngứa do niacin gây ra là do thuốc kích thích tế bào sừng giải phóng prostaglandin D2 và E2 gây giãn mạch dưới da. Uống aspirin (ức chế tổng hợp prostaglandin) trước khi dùng niacin 30 phút sẽ triệt tiêu hiệu quả phản ứng này.",
    reference: "Sách Dược lý 2 tr. 98"
  },
  {
    chapter: "Thuốc hạ lipid máu",
    level: "Nhận biết",
    question: "Ezetimibe làm giảm hấp thu cholesterol từ lòng ruột non nhờ ức chế protein vận chuyển nào?",
    options: [
      "Niemann-Pick C1-Like 1 (NPC1L1)",
      "P-glycoprotein (P-gp)",
      "Sodium-glucose linked transporter 2 (SGLT2)",
      "Dipeptidyl peptidase-4 (DPP-4)"
    ],
    correct: 0,
    explanation: "Ezetimibe định vị tại diềm bàn chải ruột non và ức chế chọn lọc protein vận chuyển sterol NPC1L1, ngăn chặn hấp thu cholesterol ngoại sinh từ thức ăn và cholesterol nội sinh từ dịch mật vào tế bào biểu mô ruột.",
    reference: "Sách Dược lý 2 tr. 99"
  },

  // =========================================================================
  // BÀI 11: THUỐC CHỐNG SỐT RÉT (trang 193 - 207)
  // =========================================================================
  {
    chapter: "Thuốc chống sốt rét",
    level: "Nhận biết",
    question: "Thuốc chống sốt rét nào sau đây diệt được thể ngủ (hypnozoite) trong gan của Plasmodium vivax và Plasmodium ovale để chống sốt rét tái phát xa?",
    options: [
      "Primaquin",
      "Artesunat",
      "Cloroquin",
      "Quinin"
    ],
    correct: 0,
    explanation: "Chỉ duy nhất Primaquin (dẫn xuất 8-aminoquinolin) có tác dụng tiêu diệt thể ngủ (hypnozoite) nằm trong tế bào gan của P. vivax và P. ovale, do đó là thuốc bắt buộc phải dùng để điều trị tiệt căn chống tái phát xa.",
    reference: "Sách Dược lý 2 tr. 200"
  },
  {
    chapter: "Thuốc chống sốt rét",
    level: "Vận dụng",
    question: "Trước khi chỉ định Primaquin để điều trị tiệt căn sốt rét do P. vivax, bắt buộc phải làm xét nghiệm sàng lọc gì cho bệnh nhân?",
    options: [
      "Định lượng hoạt độ enzym Glucose-6-Phosphat Dehydrogenase (G6PD)",
      "Định lượng men gan AST và ALT",
      "Xét nghiệm chức năng đông máu cơ bản",
      "Điện giải đồ máu toàn phần"
    ],
    correct: 0,
    explanation: "Primaquin là chất oxy hóa mạnh. Ở bệnh nhân thiếu men G6PD, hồng cầu không tạo đủ NADPH để khử glutathion, khi dùng primaquin sẽ làm màng hồng cầu bị oxy hóa vỡ ồ ạt gây tan máu cấp tính, đái ra huyết sắc tố, suy thận cấp nguy hiểm.",
    reference: "Sách Dược lý 2 tr. 201"
  },
  {
    chapter: "Thuốc chống sốt rét",
    level: "Nhận biết",
    question: "Thuốc chống sốt rét nào có nguồn gốc chiết xuất từ cây Thanh hao hoa vàng (Artemisia annua) và có tác dụng cắt cơn sốt rét nhanh nhất hiện nay?",
    options: [
      "Dẫn xuất Artemisinin (Artesunat, Artemether)",
      "Quinin hydroclorid",
      "Cloroquin phosphat",
      "Mefloquin"
    ],
    correct: 0,
    explanation: "Dẫn xuất Artemisinin (Artesunat, Artemether, Dihydroartemisinin) chiết xuất từ cây Thanh hao hoa vàng, là nhóm thuốc diệt thể vô tính trong hồng cầu nhanh nhất, làm giảm mật độ ký sinh trùng nhanh hơn bất kỳ nhóm thuốc nào khác.",
    reference: "Sách Dược lý 2 tr. 193-194"
  },
  {
    chapter: "Thuốc chống sốt rét",
    level: "Vận dụng",
    question: "Vì sao Tổ chức Y tế Thế giới (WHO) và Bộ Y tế Việt Nam nghiêm cấm sử dụng đơn trị liệu bằng dẫn xuất Artemisinin đường uống?",
    options: [
      "Để ngăn ngừa nguy cơ ký sinh trùng sốt rét phát triển đột biến kháng thuốc nhanh chóng",
      "Vì uống đơn chất sẽ gây suy tủy xương cấp tính",
      "Vì thuốc đơn chất không có khả năng cắt cơn sốt rét trên lâm sàng",
      "Vì thuốc đơn chất gây quái thai ở tất cả các giai đoạn của thai kỳ"
    ],
    correct: 0,
    explanation: "Artemisinin có thời gian bán thải rất ngắn. Nếu dùng đơn trị liệu, nồng độ thuốc giảm nhanh tạo điều kiện cho ký sinh trùng tồn dư sống sót và đột biến kháng thuốc. Do đó bắt buộc phải dùng dạng phối hợp ACT (Artemisinin-based Combination Therapy).",
    reference: "Sách Dược lý 2 tr. 195"
  },
  {
    chapter: "Thuốc chống sốt rét",
    level: "Nhận biết",
    question: "Trong cấp cứu sốt rét ác tính thể não có rối loạn tri giác, phác đồ điều trị ưu tiên lựa chọn hàng đầu hiện nay là gì?",
    options: [
      "Artesunat tiêm tĩnh mạch",
      "Cloroquin dạng viên uống qua ống thông dạ dày",
      "Primaquin dạng viên đặt hậu môn",
      "Fansidar tiêm bắp sâu"
    ],
    correct: 0,
    explanation: "Theo hướng dẫn của Bộ Y tế, đối với sốt rét ác tính ở người lớn và trẻ em, thuốc lựa chọn hàng đầu là Artesunat tiêm tĩnh mạch (liều giờ 0, 12, 24 và sau đó mỗi ngày một liều cho đến khi bệnh nhân tỉnh táo uống được).",
    reference: "Sách Dược lý 2 tr. 193-195"
  },
  {
    chapter: "Thuốc chống sốt rét",
    level: "Vận dụng",
    question: "Khi truyền tĩnh mạch Quinin điều trị sốt rét nặng, biến chứng chuyển hóa cấp tính nguy hiểm thường gặp cần kiểm tra đường huyết thường xuyên là gì?",
    options: [
      "Hạ đường huyết nghiêm trọng do quinin kích thích tế bào beta tụy tăng tiết insulin",
      "Tăng đường huyết đột ngột gây toan ceton do đái tháo đường",
      "Hạ kali máu nặng kèm kiềm hô hấp cấp",
      "Tăng acid uric máu cấp tính gây cơn gút cấp"
    ],
    correct: 0,
    explanation: "Quinin là chất kích thích mạnh sự giải phóng insulin từ các tế bào beta của đảo tụy, gây biến chứng hạ glucose huyết rất nặng nề, đặc biệt ở phụ nữ có thai và bệnh nhân sốt rét ác tính. Cần truyền dung dịch glucose ưu trương và theo dõi đường huyết liên tục.",
    reference: "Sách Dược lý 2 tr. 197-198"
  },
  {
    chapter: "Thuốc chống sốt rét",
    level: "Nhận biết",
    question: "Tác dụng không mong muốn trên mắt đặc trưng khi sử dụng Cloroquin liều cao hoặc điều trị kéo dài là gì?",
    options: [
      "Lắng đọng sắc tố ở võng mạc gây bệnh võng mạc hình mắt bò (Bull's eye retinopathy)",
      "Gây đục thủy tinh thể do tăng nhãn áp góc mở",
      "Làm teo dây thần kinh thị giác một bên mắt",
      "Gây xuất huyết tiền phòng tự phát"
    ],
    correct: 0,
    explanation: "Cloroquin có ái lực rất cao với các tế bào chứa sắc tố melanin ở màng bồ đào và biểu mô sắc tố võng mạc. Dùng lâu ngày thuốc tích lũy gây tổn thương điểm vàng với hình ảnh đặc trưng 'hình mắt bò' (bull's eye), gây mù lòa không hồi phục.",
    reference: "Sách Dược lý 2 tr. 199"
  },

  // =========================================================================
  // BÀI 12: KIỂM TRA GIỮA HỌC PHẦN (KTGHP) - TỔNG HỢP TRỌNG TÂM BÀI 1 - 11
  // =========================================================================
  {
    chapter: "KTGHP",
    level: "Vận dụng cao",
    question: "Bệnh nhân nam 62 tuổi có tiền sử suy tim mạn tính kèm rung nhĩ nhanh và đang dùng Digoxin. Bác sĩ chỉ định thêm Furosemid liều cao để rút dịch phù. Nguy cơ tương tác thuốc nguy hiểm nhất có thể xảy ra là gì?",
    options: [
      "Furosemid gây hạ kali máu làm tăng vọt độc tính của Digoxin dẫn đến loạn nhịp thất chết người",
      "Furosemid làm tăng nồng độ kali máu gây liệt cơ hô hấp cấp tính",
      "Furosemid làm mất hoàn toàn tác dụng trợ tim của Digoxin trên nút xoang",
      "Digoxin làm tăng đào thải furosemid qua ống thận gây phù phổi cấp tái phát"
    ],
    correct: 0,
    explanation: "Furosemid là thuốc lợi tiểu thải kali mạnh. Khi nồng độ K+ máu hạ xuống, vị trí gắn K+ trên enzym Na+-K+ ATPase bị bỏ trống, làm tăng đột biến sự gắn kết của Digoxin vào enzym này, đẩy bệnh nhân vào tình trạng nhiễm độc digitalis cấp với nguy cơ rung thất tử vong.",
    reference: "Sách Dược lý 2 tr. 16, 83"
  },
  {
    chapter: "KTGHP",
    level: "Vận dụng cao",
    question: "Bệnh nhân nam 55 tuổi bị tăng huyết áp kèm tiền sử hen phế quản nặng và bệnh gút mạn tính. Nhóm thuốc hạ áp nào sau đây CHỐNG CHỈ ĐỊNH sử dụng cho bệnh nhân này?",
    options: [
      "Thuốc chẹn beta không chọn lọc và thuốc lợi tiểu Thiazid",
      "Thuốc ức chế men chuyển ACEI và thuốc kháng H1 thế hệ 2",
      "Thuốc chẹn thụ thể ARB và thuốc đối kháng canxi nhóm DHP",
      "Thuốc giãn mạch trực tiếp và thuốc kháng acid chứa nhôm"
    ],
    correct: 0,
    explanation: "Thuốc chẹn beta không chọn lọc (như Propranolol) chẹn thụ thể beta-2 gây co thắt phế quản bùng phát cơn hen cấp ác tính; Thuốc lợi tiểu Thiazid cạnh tranh đào thải acid uric ở ống thận làm tăng acid uric máu gây khởi phát cơn gút cấp.",
    reference: "Sách Dược lý 2 tr. 47, 57, 76"
  },
  {
    chapter: "KTGHP",
    level: "Vận dụng cao",
    question: "Bệnh nhân nữ 45 tuổi bị loét dạ dày tá tràng có H. pylori (+). Bác sĩ kê phác đồ 3 thuốc: PPI + Clarithromycin + Amoxicillin. Vai trò tiên quyết của thuốc PPI trong phác đồ này là gì?",
    options: [
      "Nâng pH dịch vị lên trên 5 để bảo vệ kháng sinh khỏi bị phân hủy và giúp kháng sinh phát huy tác dụng diệt khuẩn tối đa",
      "PPI trực tiếp tiêu diệt vi khuẩn H. pylori mà không cần đến kháng sinh",
      "PPI bao bọc tạo lớp màng che chắn ngăn không cho vi khuẩn bám vào tế bào biểu mô",
      "PPI kích thích bài tiết gastrin để huy động bạch cầu đa nhân tới ổ loét"
    ],
    correct: 0,
    explanation: "Clarithromycin và Amoxicillin rất kém bền và giảm hoạt lực mạnh trong môi trường acid dịch vị pH thấp. PPI nâng cao pH dạ dày, vừa giúp kháng sinh bền vững đạt nồng độ diệt khuẩn cao, vừa kích thích H. pylori chuyển sang trạng thái phân chia nhạy cảm với kháng sinh.",
    reference: "Sách Dược lý 2 tr. 105, 109"
  },
  {
    chapter: "KTGHP",
    level: "Vận dụng cao",
    question: "Cặp phối hợp thuốc nào sau đây là TƯƠNG TÁC CHỐNG CHỈ ĐỊNH TUYỆT ĐỐI do gây hạ huyết áp sâu kịch phát dẫn đến trụy mạch?",
    options: [
      "Nitroglycerin và Thuốc ức chế PDE-5 (Sildenafil)",
      "Amlodipin và Thuốc ức chế men chuyển Enalapril",
      "Spironolacton và Thuốc lợi tiểu Thiazid",
      "Metronidazol và Thuốc kháng acid Magnesi hydroxyd"
    ],
    correct: 0,
    explanation: "Nitrat hữu cơ cung cấp NO làm tăng sinh cGMP, trong khi Sildenafil ngăn chặn sự thoái giáng của cGMP. Lượng cGMP tích tụ cực lớn làm giãn toàn bộ hệ thống động tĩnh mạch, gây tụt huyết áp nghiêm trọng không đáp ứng hồi sức dẫn đến nhồi máu cơ tim hoặc tử vong.",
    reference: "Sách Dược lý 2 tr. 44"
  }
];
