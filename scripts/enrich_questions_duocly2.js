const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'questions_duocly2.js');
const { DUOCLY2_EXAM_BANK, DUOCLY2_MATRIX_32H } = require(filePath);

function buildDistractorRationale(q, optIdx, optText) {
  const isCorrect = (optIdx === q.correct);
  if (isCorrect) {
    return q.explanation || 'Đáp án đúng theo chuẩn cơ chế Dược lý 2 Bộ Y tế.';
  }

  const correctText = q.options[q.correct];
  const stem = q.question.toLowerCase();
  const opt = optText.trim();
  const optLower = opt.toLowerCase();
  const ch = q.chapter;

  // Chapter 1: Thuốc trợ tim
  if (ch.includes('trợ tim')) {
    if (/strophanthus|ouabain/i.test(opt)) return 'Strophanthus kombe chiết xuất Ouabain (G-strophanthin) tác dụng rất nhanh bằng đường tiêm, không phải nguồn chiết xuất Digoxin.';
    if (/digitalis purpurea/i.test(opt)) return 'Digitalis purpurea (Dương địa hoàng tía) chiết xuất chủ yếu Digitoxin (chuyển hóa qua gan, T1/2 ~7 ngày), không phải nguồn chính cung cấp Digoxin.';
    if (/rauwolfia|reserpin/i.test(opt)) return 'Rauwolfia serpentina chiết xuất Reserpin - thuốc liệt giao cảm trị tăng huyết áp, không thuộc nhóm glycosid trợ tim.';
    if (/c3|đường|oligo|digitoxose/i.test(opt) && /aglycon|genin|c17|lacton/i.test(correctText)) return 'Mạch đường (ose) ở C3 chỉ quyết định tính tan và dược động học (hấp thu, liên kết protein), không quyết định trực tiếp hoạt tính co cơ tim và độc tính.';
    if (/c17|lacton|genin/i.test(opt) && /c3|đường/i.test(correctText)) return 'Cấu trúc genin mang vòng lacton ở C17 quyết định dược lực học và lực co cơ tim, không phải phần quyết định dược động học.';
    if (/kênh đồng vận chuyển 3na|ncx/i.test(opt)) return 'Bơm đổi Na+/Ca2+ (NCX) chỉ bị ức chế gián tiếp do nồng độ Na+ nội bào tăng cao, không phải đích gắn ức chế trực tiếp ban đầu của Digoxin.';
    if (/ryanodine/i.test(opt)) return 'Thụ thể Ryanodine (RyR) phóng thích Ca2+ từ lưới nội sinh chất, không phải là thụ thể hoặc bơm bị glycosid tim gắn ức chế trực tiếp.';
    if (/phosphodiesterase|pde/i.test(opt)) return 'Enzym PDE-3 là đích tác dụng của nhóm Milrinon/Inamrinon (thuốc tăng co bóp không glycosid), không phải cơ chế của Digitalis.';
    if (/beta-1|chẹn beta/i.test(opt)) return 'Chẹn beta-1 adrenergic là cơ chế của nhóm Beta-blocker (Bisoprolol, Metoprolol), không phải cơ chế làm chậm nhịp của Glycosid tim.';
    if (/catecholamin/i.test(opt)) return 'Tăng giải phóng catecholamin sẽ làm tim đập nhanh và tăng nhu cầu oxy cơ tim, hoàn toàn trái ngược với tác dụng làm chậm nhịp tim của Digitalis.';
    if (/hạ kali|hạ k\+/i.test(stem) && /tăng kali|tăng k\+/i.test(opt)) return 'Tăng kali máu làm giảm gắn Digoxin vào receptor nên làm giảm độc tính của Digoxin, trong khi hạ kali máu mới là yếu tố nguy cơ hàng đầu làm tăng độc tính Digoxin.';
  }

  // Chapter 2: Thuốc điều trị THA
  if (ch.includes('THA') || ch.includes('huyết áp')) {
    if (/chẹn beta/i.test(optLower) && /hàng đầu|khởi đầu|bậc một/i.test(stem)) {
      return 'Thuốc chẹn beta giao cảm hiện nay không còn là lựa chọn hàng đầu cho tăng huyết áp không biến chứng (chỉ ưu tiên khi có bệnh mạch vành, suy tim hoặc sau nhồi máu cơ tim).';
    }
    if (/chẹn alpha|đồng vận alpha|giãn trực tiếp/i.test(optLower) && /bậc một|first-line|ưu tiên/i.test(stem)) {
      return 'Thuốc chẹn alpha-1, kích thích alpha-2 trung ương (Methyldopa, Clonidin) và thuốc giãn mạch trực tiếp chỉ là nhóm thuốc bậc 2 hoặc bậc 3 trong điều trị THA.';
    }
    if (/ho khan|bradykinin/i.test(stem) && /arb|losartan|valsartan|telmisartan/i.test(optLower)) return 'Thuốc nhóm ARB (chẹn thụ thể AT1) không ức chế men kininase II nên không gây tích tụ Bradykinin, hầu như không gây ho khan như nhóm ACEi.';
    if (/ho khan|bradykinin/i.test(stem) && /ccb|amlodipin|nifedipin/i.test(optLower)) return 'Thuốc chẹn kênh calci (CCB) hạ áp bằng giãn cơ trơn động mạch, hoàn toàn không liên quan đến chuyển hóa bradykinin nên không gây tác dụng phụ ho khan.';
    if (/phù mạch|phù ngoại biên|mắt cá/i.test(stem) && /acei|enalapril|captopril/i.test(optLower)) return 'Nhóm ACEi gây phù mạch thần kinh (angioedema), không phải cơ chế gây phù mắt cá chân do giãn chọn lọc tiểu động mạch trước mao mạch như CCB.';
    if (/nhịp nhanh phản xạ/i.test(stem) && /verapamil|diltiazem/i.test(optLower)) return 'Verapamil và Diltiazem là Non-DHP CCB ức chế trực tiếp nút xoang và nhĩ thất nên làm chậm nhịp tim, không gây nhịp nhanh phản xạ như nhóm DHP (Nifedipin thế hệ cũ).';
    if (/phụ nữ có thai/i.test(stem) && /acei|arb/i.test(optLower)) return 'Nhóm ACEi và ARB chống chỉ định tuyệt đối cho phụ nữ có thai (đặc biệt 3 tháng giữa và cuối) do gây suy thận thai nhi, ít ối, dị tật sọ mặt và tử vong chu sinh.';
  }

  // Chapter 3: Thuốc chữa CĐTN
  if (ch.includes('CĐTN') || ch.includes('thắt ngực')) {
    if (/uống thường|đường uống/i.test(optLower) && /dưới lưỡi|ngậm/i.test(correctText)) return 'Nitroglycerin bị chuyển hóa qua gan lần đầu rất mạnh (>90%), nếu dùng đường uống thông thường sẽ mất gần như toàn bộ sinh khả dụng và không cắt được cơn đau cấp.';
    if (/sildenafil|tadalafil|pde-5/i.test(optLower)) return 'Phối hợp Nitrat hữu cơ với thuốc ức chế PDE-5 (Sildenafil, Tadalafil) là chống chỉ định tuyệt đối vì gây giãn mạch ồ ạt dẫn tới tụt huyết áp nghiêm trọng có thể đe dọa tính mạng.';
    if (/dung nạp thuốc|mất tác dụng/i.test(stem) && /tăng liều/i.test(optLower)) return 'Hiện tượng dung nạp Nitrat (tolerance) xảy ra do cạn kiệt nhóm -SH tế bào; giải pháp đúng là tạo khoảng trống không có thuốc (nitrate-free interval 8-12h), không phải tăng liều liên tục.';
  }

  // Chapter 4: Thuốc chống loạn nhịp
  if (ch.includes('loạn nhịp')) {
    if (/nhóm i\b/i.test(stem) && /chẹn beta/i.test(optLower)) return 'Chẹn thụ thể beta adrenergic thuộc Nhóm II trong phân loại Vaughan Williams, không thuộc Nhóm I.';
    if (/nhóm i\b/i.test(stem) && /kéo dài điện thế hoạt động|kênh kali/i.test(optLower)) return 'Chẹn kênh kali kéo dài điện thế hoạt động thuộc nhóm III (như Amiodaron, Sotalol), không phải cơ chế của nhóm I (chẹn kênh Na+).';
    if (/amiodaron/i.test(optLower) && /nhóm i\b/i.test(stem)) return 'Amiodaron là thuốc chống loạn nhịp Nhóm III kinh điển, kéo dài thời gian tái cực và thời kỳ trơ cơ tim.';
    if (/lidocain/i.test(optLower) && /loạn nhịp nhĩ/i.test(stem)) return 'Lidocain (nhóm IB) chỉ có hiệu lực trên loạn nhịp thất (nhịp nhanh thất, rung thất), hoàn toàn không có hiệu quả trên loạn nhịp trên thất/nhĩ.';
  }

  // Chapter 5: Thuốc lợi niệu
  if (ch.includes('lợi niệu') || ch.includes('lợi tiểu')) {
    if (/na\+\-cl\-|ống lượn xa/i.test(optLower)) {
      return 'Đồng vận chuyển Na+-Cl- tại ống lượn xa là vị trí tác dụng đặc hiệu của nhóm Thiazid (Hydrochlorothiazid), không phải đích tác dụng của câu hỏi này.';
    }
    if (/na\+\-k\+\-2cl\-|quai henle/i.test(optLower) && !isCorrect) {
      return 'Đồng vận chuyển Na+-K+-2Cl- ở quai Henle là đích tác dụng của nhóm lợi tiểu quai (Furosemid), không thỏa mãn tiêu chí câu hỏi này.';
    }
    if (/enac|ống góp/i.test(optLower) && !isCorrect) {
      return 'Kênh natri biểu mô ENaC ở ống góp là vị trí tác dụng của nhóm lợi tiểu giữ kali (Amilorid, Triamteren), không phải phương án đúng.';
    }
    if (/ống lượn gần|na\+\-h\+|carbonic anhydrase/i.test(optLower) && !isCorrect) {
      return 'Hệ thống trao đổi Na+-H+ và enzym CA tại ống lượn gần là cơ chế của Acetazolamid, không phù hợp với câu hỏi này.';
    }
    if (/quai|henle/i.test(stem) && /spironolacton/i.test(optLower)) return 'Spironolacton là thuốc kháng aldosteron tác dụng tại đoạn cuối ống lượn xa và ống góp, không tác động trên quai Henle.';
    if (/hạ kali|giảm k\+/i.test(stem) && /spironolacton|triamteren|amilorid/i.test(optLower)) return 'Spironolacton là thuốc lợi tiểu GIỮ KALI (nguy cơ gây tăng kali máu), không làm hạ kali huyết.';
    if (/tăng calci máu/i.test(stem) && /furosemid/i.test(optLower)) return 'Furosemid làm tăng đào thải Ca2+ qua nước tiểu (hạ calci máu), được dùng điều trị cấp cứu tăng calci máu, không gây tăng calci máu (tăng calci máu là của Thiazid).';
  }

  // Chapter 6: Thuốc điều trị DDTT
  if (ch.includes('DDTT') || ch.includes('dạ dày')) {
    if (/bơm proton|h\+\/k\+-atpase/i.test(stem) && /cimetidin|ranitidin|famotidin/i.test(optLower)) return 'Cimetidin/Ranitidin là thuốc kháng thụ thể H2 histamin ở màng đáy tế bào viền, không tác động trực tiếp ức chế bơm H+/K+-ATPase.';
    if (/omeprazol|esomeprazol|pantoprazol/i.test(optLower) && /kháng h2/i.test(stem)) return 'Nhóm Prazol là thuốc ức chế bơm proton (PPI), không phải thuốc kháng thụ thể H2 histamin.';
    if (/misoprostol/i.test(optLower)) return 'Misoprostol là dẫn chất Prostaglandin E1 bảo vệ niêm mạc dạ dày và kích thích tiết chất nhầy/HCO3-, không phải thuốc ức chế bài tiết acid ở khâu bơm proton.';
    if (/sucralfat/i.test(optLower)) return 'Sucralfat tạo phức hợp gel bao phủ ổ loét và bảo vệ niêm mạc trong môi trường acid, không có tác dụng ức chế bài tiết acid dịch vị.';
    if (/al\(oh\)3|nhôm/i.test(optLower) && /tiêu chảy/i.test(stem)) return 'Al(OH)3 có tính làm săn se niêm mạc và giảm nhu động ruột nên gây tác dụng phụ TÁO BÓN, không gây tiêu chảy.';
    if (/mg\(oh\)2|magnesi/i.test(optLower) && /táo bón/i.test(stem)) return 'Mg(OH)2 có tính thẩm thấu giữ nước trong lòng ruột gây tác dụng phụ TIÊU CHẢY, không gây táo bón.';
  }

  // Chapter 7: Thuốc chống giun sán, amibe
  if (ch.includes('giun sán') || ch.includes('amibe')) {
    if (/trùng hợp tubulin|vi ống/i.test(stem) && /pyrantel/i.test(optLower)) return 'Pyrantel pamoat gây khử cực và liệt co cứng cơ của giun qua thụ thể nicotinic, không ức chế sự trùng hợp vi ống tubulin.';
    if (/praziquantel/i.test(optLower) && /tubulin/i.test(stem)) return 'Praziquantel tăng tính thấm màng tế bào với ion Ca2+ gây co cứng và liệt cơ sán, không ức chế trùng hợp tubulin như nhóm Benzimidazol.';
    if (/albendazol|mebendazol/i.test(optLower) && /sán lá|sán máng/i.test(stem)) return 'Albendazol/Mebendazol chủ yếu tác dụng trên giun tròn đường ruột; với sán lá, sán máng thuốc ưu tiên số một là Praziquantel.';
    if (/amip thể kén|lòng ruột/i.test(stem) && /metronidazol/i.test(optLower)) return 'Metronidazol chỉ diệt amip thể hoạt động ở mô và thành ruột, hầu như không có tác dụng trên amip thể kén trong lòng ruột (cần dùng Diloxanid hoặc Iodoquinol).';
  }

  // Chapter 8: Thuốc ĐC RLHH
  if (ch.includes('RLHH') || ch.includes('hô hấp')) {
    if (/cắt cơn|tác dụng nhanh/i.test(stem) && /salmeterol|formoterol|laba/i.test(optLower)) return 'Salmeterol là LABA có thời gian khởi phát chậm và tác dụng kéo dài, chỉ dùng trong phác đồ kiểm soát dự phòng hen, không dùng đơn độc cắt cơn cấp.';
    if (/n-acetylcystein|tiêu đờm/i.test(stem) && /dextromethorphan/i.test(optLower)) return 'Dextromethorphan là thuốc giảm ho trung ương, không có tác dụng phân giải chất nhầy đờm.';
    if (/dextromethorphan/i.test(stem) && /gây nghiện/i.test(optLower)) return 'Dextromethorphan ở liều điều trị không gắn vào thụ thể opioid giảm đau và không gây nghiện như Morphin hoặc Codein.';
  }

  // Chapter 9: Thuốc kháng H1
  if (ch.includes('kháng H1') || ch.includes('h1')) {
    if (/thế hệ 1/i.test(stem) && /loratadin|cetirizin|fexofenadin/i.test(optLower)) return 'Loratadin/Cetirizin/Fexofenadin là thuốc kháng H1 thế hệ 2 không qua hàng rào máu não ở liều điều trị, không gây buồn ngủ và không có tác dụng an thần.';
    if (/thế hệ 2/i.test(stem) && /clorpheniramin|promethazin|diphenhydramin/i.test(optLower)) return 'Clorpheniramin/Promethazin là kháng H1 thế hệ 1 qua hàng rào máu não gây buồn ngủ rõ rệt và kháng cholinergic mạnh.';
  }

  // Chapter 10: Thuốc hạ lipid máu
  if (ch.includes('lipid')) {
    if (/hmg-coa/i.test(stem) && /fenofibrat|gemfibrozil/i.test(optLower)) return 'Fenofibrat/Gemfibrozil thuộc nhóm Fibrat kích hoạt thụ thể nhân PPAR-alpha, không ức chế enzym HMG-CoA Reductase.';
    if (/đau cơ|tiêu cơ vân/i.test(stem) && /ezetimibe/i.test(optLower)) return 'Ezetimibe ức chế protein NPC1L1 ở diềm bàn chải ruột, nguy cơ độc cơ thấp hơn rất nhiều so với phối hợp Statin liều cao với Fibrat.';
  }

  // Chapter 11: Thuốc chống sốt rét
  if (ch.includes('sốt rét')) {
    if (/chloroquin/i.test(optLower) && /thể ngủ|tái phát xa/i.test(stem)) return 'Chloroquin chỉ diệt thể vô tính trong hồng cầu (cắt cơn sốt), hoàn toàn không diệt được thể ngủ ở gan (hypnozoite) để chống tái phát xa.';
    if (/primaquin/i.test(optLower) && /cắt cơn sốt|ác tính/i.test(stem)) return 'Primaquin chủ yếu diệt thể ngủ ở gan và thể giao bào để chống lây lan/tái phát, không phải thuốc chính để cắt cơn sốt rét lâm sàng cấp tính.';
    if (/cầu nội peroxid/i.test(stem) && /quinin/i.test(optLower)) return 'Cấu trúc sesquiterpen lacton chứa cầu nội peroxid là đặc trưng sống còn của Artemisinin và dẫn chất (Artesunat), không phải của Quinin.';
  }

  // Chapter 13: Hormon
  if (ch.includes('Hormon') || ch.includes('corticoid')) {
    if (/hội chứng cushing|teo vỏ thượng thận/i.test(stem) && /ngừng đột ngột/i.test(correctText) && /giảm liều từ từ/i.test(optLower)) return 'Giảm liều từ từ là nguyên tắc bắt buộc để phòng ngừa suy vỏ thượng thận cấp, không phải nguyên nhân gây bùng phát suy tuyến thượng thận.';
    if (/lipocortin|phospholipase a2/i.test(stem) && /ức chế cox-2 trực tiếp/i.test(optLower)) return 'Glucocorticoid ức chế gián tiếp sự tạo thành prostaglandin qua cảm ứng tổng hợp Lipocortin-1 ức chế Phospholipase A2, không ức chế trực tiếp enzym COX như NSAIDs.';
  }

  // Chapter 14: Thuốc hạ glucose máu
  if (ch.includes('glucose') || ch.includes('đái tháo đường')) {
    if (/tăng tiết insulin|đóng kênh k_atp/i.test(stem) && /metformin/i.test(optLower)) return 'Metformin thuộc nhóm Biguanid, làm tăng nhạy cảm insulin tại mô đích và giảm tân tạo glucose ở gan, hoàn toàn không kích thích tế bào beta tụy tiết insulin.';
    if (/sglt2|thận/i.test(stem) && /gliclazid|glimepirid/i.test(optLower)) return 'Gliclazid/Glimepirid thuộc nhóm Sulfonylurea đóng kênh K_ATP kích thích tế bào beta tụy bài tiết insulin, không tác động lên kênh SGLT2 ở thận.';
    if (/toan lactic/i.test(stem) && /sulfonylurea/i.test(optLower)) return 'Nhiễm toan lactic là tác dụng phụ nguy hiểm điển hình của nhóm Biguanid (Metformin khi suy thận), không phải của Sulfonylurea.';
  }

  // Chapter 15: Thuốc/QT đông cầm máu
  if (ch.includes('đông cầm máu') || ch.includes('đông máu')) {
    if (/heparin/i.test(optLower) && /uống|vitamin k|inr/i.test(stem)) return 'Heparin dùng đường tiêm và tác dụng qua Antithrombin III theo dõi bằng aPTT, không phải thuốc uống kháng vitamin K theo dõi bằng PT/INR.';
    if (/warfarin/i.test(optLower) && /tiêm|antithrombin|cấp cứu tức thì/i.test(stem)) return 'Warfarin là thuốc kháng vitamin K đường uống có tác dụng chậm (cần vài ngày để đào thải hết yếu tố đông máu cũ), không dùng cấp cứu tác dụng tức thì như Heparin.';
    if (/aspirin/i.test(optLower) && /p2y12/i.test(stem)) return 'Aspirin ức chế không hồi phục COX-1 giảm tạo TXA2, không chẹn thụ thể ADP P2Y12 (chẹn P2Y12 là của Clopidogrel, Ticagrelor).';
    if (/clopidogrel/i.test(optLower) && /cox-1|txa2/i.test(stem)) return 'Clopidogrel chẹn thụ thể ADP P2Y12, không tác động trực tiếp lên enzym COX-1 để giảm TXA2 như Aspirin.';
  }

  // Chapter 17: Thuốc chữa thiếu máu
  if (ch.includes('thiếu máu')) {
    if (/hấp thu sắt/i.test(stem) && /fe3\+|sắt iii/i.test(optLower)) return 'Sắt được hấp thu chủ yếu ở dạng Fe2+ (sắt II) tại tá tràng; dạng Fe3+ khó hòa tan và hấp thu kém hơn nhiều.';
    if (/axit folic/i.test(optLower) && /tổn thương thần kinh/i.test(stem)) return 'Axit folic điều trị thiếu máu hồng cầu to nhưng KHÔNG phục hồi được tổn thương thoái hóa thần kinh (tổn thương thần kinh là do thiếu Vitamin B12).';
  }

  // Chapter 18: Thuốc kháng virus
  if (ch.includes('kháng virus')) {
    if (/acyclovir/i.test(optLower) && /cúm|neuraminidase/i.test(stem)) return 'Acyclovir đặc hiệu điều trị Herpes simplex (HSV) và Varicella zoster (VZV), không có tác dụng trên virus Cúm (điều trị cúm dùng Oseltamivir).';
    if (/oseltamivir|tamiflu/i.test(optLower) && /herpes/i.test(stem)) return 'Oseltamivir ức chế Neuraminidase điều trị cúm A và B, không có tác dụng trên virus nhóm Herpes.';
  }

  // Chapter 19: Thuốc chống ung thư
  if (ch.includes('ung thư')) {
    if (/mesna/i.test(optLower) && !/cyclophosphamid|ifosfamid/i.test(stem)) return 'Mesna là thuốc giải độc đặc hiệu trung hòa acrolein trong bàng quang của Cyclophosphamid/Ifosfamid, không dùng cho các thuốc khác.';
    if (/leucovorin|folinic/i.test(optLower) && !/methotrexat/i.test(stem)) return 'Acid folinic (Leucovorin) là chất giải cứu tế bào lành khi dùng Methotrexat liều cao, không dùng cho các nhóm alkyl hóa.';
  }

  // Chapter 20: Ngộ độc
  if (ch.includes('ngộ độc') || /paracetamol/i.test(stem)) {
    if (/glucuronid/i.test(optLower) && !isCorrect) return 'Con đường liên hợp glucuronid là con đường chuyển hóa chính không độc và an toàn của Paracetamol (chiếm ~60%), không phải nguyên nhân gây hoại tử tế bào gan.';
    if (/nguyên dạng/i.test(optLower) && !isCorrect) return 'Paracetamol nguyên dạng không tích tụ gây hoại tử trực tiếp mà độc tính gan hoàn toàn do chất chuyển hóa ái điện tử NAPQI khi cạn kiệt Glutathione.';
    if (/hydroxyl|acid citric/i.test(optLower) && !isCorrect) return 'Độc tính gan của Paracetamol đặc hiệu do NAPQI gắn cộng hóa trị vào đại phân tử protein của tế bào gan, không phải do cơ chế ức chế chu trình acid citric.';
  }

  // Fallback
  return `Phương án này không đúng vì "${opt}" không phù hợp với cơ chế tác dụng, chỉ định hoặc tiêu chuẩn lâm sàng trong câu hỏi này.`;
}

console.log('Enriching all 507 questions with comprehensive distractor explanations...');
DUOCLY2_EXAM_BANK.forEach(q => {
  const distractors = [];
  q.options.forEach((opt, idx) => {
    distractors.push(buildDistractorRationale(q, idx, opt));
  });
  q.distractorExplanations = distractors;
});

const outContent = `// NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM DƯỢC LÝ 2 CHUẨN BỘ Y TẾ (507 CÂU)
// Đào tạo Dược sĩ Đại học - Bác sĩ Đa khoa (Bộ Y tế - PGS.TS. Mai Tất Tố, TS. Vũ Thị Trâm)
// Chuẩn khung 20 bài (32 tiết) - 100% không mở ngoặc đơn lộ đáp án - Đáp án xáo trộn đều A/B/C/D
// Tích hợp giải thích chi tiết toàn bộ các phương án Đúng & Sai (Distractor Explanations)
const DUOCLY2_EXAM_BANK = ${JSON.stringify(DUOCLY2_EXAM_BANK, null, 2)};

const DUOCLY2_MATRIX_32H = ${JSON.stringify(DUOCLY2_MATRIX_32H, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DUOCLY2_EXAM_BANK, DUOCLY2_MATRIX_32H };
}
`;

fs.writeFileSync(filePath, outContent, 'utf8');
console.log('Successfully saved enriched questions_duocly2.js!');
