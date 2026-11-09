// NGÂN HÀNG DƯỢC LÝ 2 - MỞ RỘNG PHẦN 1: TIM MẠCH (Bài 1, 2, 3, 4)
// Tiêu chuẩn: Chuẩn giáo trình Dược lý 2 Bộ Y tế, không mở ngoặc đơn gợi ý ở đáp án.

module.exports = [
  // =========================================================================
  // BÀI 1: THUỐC TRỢ TIM (BỔ SUNG)
  // =========================================================================
  {
    chapter: "Thuốc trợ tim",
    level: "Nhận biết",
    question: "Phần không đường (aglycon) của các glycosid tim có cấu trúc hóa học cơ bản gồm:",
    options: [
      "Nhân cyclopentanoperhydrophenanthren gắn với vòng lacton không no ở vị trí C17",
      "Vòng dị vòng quinolin gắn với nhân benzen",
      "Cấu trúc indol gắn với chuỗi nhánh piperazin",
      "Khung steroid gắn với chuỗi polypeptid 51 acid amin"
    ],
    correct: 0,
    explanation: "Aglycon của glycosid tim gồm nhân steroid (cyclopentanoperhydrophenanthren) và một vòng lacton 5 cạnh (cardenolid) hoặc 6 cạnh (bufadienolid) gắn ở vị trí C17 hướng beta.",
    reference: "Sách Dược lý 2 tr. 10"
  },
  {
    chapter: "Thuốc trợ tim",
    level: "Nhận biết",
    question: "Glycosid tim nhóm Bufadienolid có đặc điểm cấu trúc vòng lacton là gì?",
    options: [
      "Vòng lacton 6 cạnh chứa 2 nối đôi",
      "Vòng lacton 5 cạnh chứa 1 nối đôi",
      "Vòng lacton 4 cạnh không có nối đôi",
      "Vòng dị vòng furan 5 cạnh no"
    ],
    correct: 0,
    explanation: "Nhóm Bufadienolid có vòng lacton 6 cạnh với 2 liên kết đôi (tìm thấy trong nhựa cóc Bufo hoặc củ hành biển Scilla), trong khi Cardenolid có vòng lacton 5 cạnh với 1 liên kết đôi (Digitalis, Strophantus).",
    reference: "Sách Dược lý 2 tr. 10"
  },
  {
    chapter: "Thuốc trợ tim",
    level: "Vận dụng",
    question: "Vì sao Digoxin có thể dùng được cả đường uống và đường tiêm tĩnh mạch, trong khi Ouabain chỉ dùng đường tiêm tĩnh mạch?",
    options: [
      "Digoxin tan vừa trong lipid nên hấp thu tốt qua ruột, còn Ouabain có nhiều nhóm -OH rất tan trong nước nên hầu như không qua được màng ruột",
      "Ouabain bị acid dạ dày phá hủy hoàn toàn trong khi digoxin bền vững tuyệt đối",
      "Digoxin không gắn vào protein huyết tương còn Ouabain gắn 100%",
      "Ouabain kích thích thụ thể vị giác gây co thắt thanh quản"
    ],
    correct: 0,
    explanation: "Digoxin có 3 nhóm phân cực (-OH) nên độ tan trong lipid vừa phải, hấp thu tốt qua đường tiêu hóa (60-80%). Ouabain có tới 5 nhóm -OH tự do nên cực kỳ thân nước, không thể khuếch tán qua lớp kép phospholipid của niêm mạc ruột (hấp thu < 2%).",
    reference: "Sách Dược lý 2 tr. 11, 14, 18"
  },
  {
    chapter: "Thuốc trợ tim",
    level: "Vận dụng",
    question: "Bệnh nhân suy thận mạn tính có độ thanh thải creatinin giảm nặng cần phải điều chỉnh liều như thế nào khi sử dụng Digoxin?",
    options: [
      "Bắt buộc phải giảm liều hoặc kéo dài khoảng cách giữa các lần dùng thuốc và định lượng nồng độ digoxin máu",
      "Tăng liều gấp đôi để bù đắp sự giảm lọc của cầu thận",
      "Chuyển hoàn toàn sang đường tiêm bắp sâu mà không cần chỉnh liều",
      "Không cần chỉnh liều vì digoxin chuyển hóa hoàn toàn qua gan"
    ],
    correct: 0,
    explanation: "Digoxin thải trừ chủ yếu qua thận dưới dạng không biến đổi (khoảng 80%). Khi suy thận, độ thanh thải digoxin giảm tương ứng với độ thanh thải creatinin, thuốc bị tích lũy dễ gây ngộ độc chết người. Do đó bắt buộc phải giảm liều và theo dõi TDM.",
    reference: "Sách Dược lý 2 tr. 15"
  },
  {
    chapter: "Thuốc trợ tim",
    level: "Nhận biết",
    question: "Ở liều điều trị, Dopamin truyền tĩnh mạch ở tốc độ thấp (1 - 2 mcg/kg/phút) tác động ưu tiên trên thụ thể nào và gây tác dụng gì?",
    options: [
      "Kích thích thụ thể Dopamin D1 tại mạch thận gây giãn mạch thận và tăng lưu lượng nước tiểu",
      "Kích thích mạnh thụ thể alpha-1 adrenergic gây co mạch tăng huyết áp",
      "Kích thích thụ thể beta-1 adrenergic gây tăng nhịp tim nhanh trên 150 lần/phút",
      "Kích thích thụ thể histamin H2 gây loét dạ dày tá tràng"
    ],
    correct: 0,
    explanation: "Ở liều thận (1-2 mcg/kg/phút), Dopamin kích thích chọn lọc thụ thể D1 ở mạch thận, mạch mạc treo và mạch vành, gây giãn mạch, tăng dòng máu tới thận, tăng mức lọc cầu thận và tăng bài niệu natri.",
    reference: "Sách Dược lý 2 tr. 19"
  },
  {
    chapter: "Thuốc trợ tim",
    level: "Nhận biết",
    question: "Tác dụng không mong muốn trên hệ tạo máu đặc trưng của thuốc trợ tim Amrinon (Inamrinon) khi dùng kéo dài là gì?",
    options: [
      "Giảm số lượng tiểu cầu",
      "Gây tăng bạch cầu đa nhân trung tính",
      "Gây suy tủy bất sản toàn bộ dòng hồng cầu",
      "Gây bệnh đa hồng cầu thứ phát"
    ],
    correct: 0,
    explanation: "Amrinon gây tác dụng phụ giảm tiểu cầu (tỷ lệ khoảng 10%), có thể hồi phục khi ngừng thuốc. Thuốc thế hệ sau là Milrinon ít gây giảm tiểu cầu hơn nên được ưu tiên sử dụng trên lâm sàng.",
    reference: "Sách Dược lý 2 tr. 20-21"
  },
  {
    chapter: "Thuốc trợ tim",
    level: "Vận dụng cao",
    question: "Chống chỉ định dùng thuốc Glycosid tim (Digoxin) trong trường hợp bệnh tim mạch nào sau đây?",
    options: [
      "Hẹp phì đại dưới van động mạch chủ và blốc nhĩ thất độ III",
      "Suy tim ứ huyết do bệnh cơ tim giãn",
      "Rung nhĩ nhanh kèm huyết động ổn định",
      "Cuồng nhĩ có đáp ứng thất nhanh"
    ],
    correct: 0,
    explanation: "Trong hẹp phì đại dưới van động mạch chủ (bệnh cơ tim phì đại tắc nghẽn), digitalis làm tăng sức co bóp cơ tim vùng vách liên thất sẽ làm đường tống máu thất trái càng bị bít tắc nặng nề hơn. Blốc nhĩ thất độ II-III chống chỉ định vì thuốc ức chế dẫn truyền nhĩ thất gây ngừng tim.",
    reference: "Sách Dược lý 2 tr. 15"
  },

  // =========================================================================
  // BÀI 2: THUỐC ĐIỀU TRỊ TĂNG HUYẾT ÁP (BỔ SUNG)
  // =========================================================================
  {
    chapter: "Thuốc điều trị THA",
    level: "Nhận biết",
    question: "Captopril khác biệt với các thuốc ức chế men chuyển khác (như Enalapril, Lisinopril) ở đặc điểm hóa học nào?",
    options: [
      "Chứa nhóm sulfhydryl (-SH) trong phân tử liên quan đến tác dụng phụ mất vị giác và phát ban",
      "Chứa vòng benzen gắn hai nguyên tử clo",
      "Chứa nhóm este etylic cần gan hoạt hóa",
      "Có cấu trúc steroid tổng hợp từ cholesterol"
    ],
    correct: 0,
    explanation: "Captopril là thuốc ACEI đầu tiên có nhóm chức sulfhydryl (-SH). Nhóm -SH này chịu trách nhiệm cho các tác dụng không mong muốn đặc thù như rối loạn vị giác (kim loại), phát ban da ngứa và giảm bạch cầu trung tính.",
    reference: "Sách Dược lý 2 tr. 67-68"
  },
  {
    chapter: "Thuốc điều trị THA",
    level: "Nhận biết",
    question: "Thuốc ức chế men chuyển nào sau đây là thuốc có hoạt tính trực tiếp, không phải tiền chất và thải trừ qua thận dạng không đổi?",
    options: [
      "Lisinopril",
      "Enalapril",
      "Ramipril",
      "Perindopril"
    ],
    correct: 0,
    explanation: "Đa số các thuốc ACEI (Enalapril, Ramipril, Perindopril...) là tiền chất dạng este (prodrug) cần enzym esterase ở gan thủy phân thành dạng acid có hoạt tính. Riêng Captopril và Lisinopril là dạng có hoạt tính trực tiếp; Lisinopril thải trừ nguyên vẹn qua thận.",
    reference: "Sách Dược lý 2 tr. 67"
  },
  {
    chapter: "Thuốc điều trị THA",
    level: "Vận dụng",
    question: "Vì sao việc dùng viên Nifedipin nang mềm tác dụng nhanh chọc thủng nhỏ dưới lưỡi để hạ áp cấp cứu hiện nay bị NGHIÊM CẤM?",
    options: [
      "Gây tụt huyết áp quá nhanh và kích hoạt phản xạ giao cảm gây nhịp nhanh, thiếu máu cơ tim và đột quỵ não",
      "Gây phù phổi cấp tức thì do ức chế cơ tim",
      "Gây xuất huyết bàng quang ồ ạt do co thắt mạch",
      "Làm tắc nghẽn đường thở do phù thanh môn dị ứng"
    ],
    correct: 0,
    explanation: "Nifedipin tác dụng ngắn hấp thu qua niêm mạc miệng gây tụt huyết áp đột ngột không kiểm soát được, kích hoạt phản xạ giao cảm dữ dội gây nhịp tim nhanh vọt, thiếu máu cơ tim cục bộ, nhồi máu cơ tim và đột quỵ não do giảm tưới máu mạch vành và mạch não.",
    reference: "Sách Dược lý 2 tr. 63-64"
  },
  {
    chapter: "Thuốc điều trị THA",
    level: "Nhận biết",
    question: "Thuốc chẹn kênh calci DHP Nicardipin có đặc điểm dược lý nổi bật nào được ứng dụng trong cấp cứu?",
    options: [
      "Tác dụng chọn lọc cao trên mạch máu não và mạch vành, dùng dạng truyền tĩnh mạch để kiểm soát huyết áp trong đột quỵ xuất huyết não",
      "Chỉ tác dụng trên tĩnh mạch chi dưới điều trị suy giãn tĩnh mạch",
      "Ức chế chọn lọc nút xoang tương đương adenosin",
      "Gây tăng tiết aldosteron mạnh ở vỏ thượng thận"
    ],
    correct: 0,
    explanation: "Nicardipin có tính chọn lọc cao trên mạch máu não và mạch vành, dạng tiêm truyền tĩnh mạch khởi phát tác dụng nhanh và dễ điều chỉnh tốc độ, là thuốc hạ áp được khuyến cáo hàng đầu trong cấp cứu cơn tăng huyết áp kèm đột quỵ não.",
    reference: "Sách Dược lý 2 tr. 63, 74"
  },
  {
    chapter: "Thuốc điều trị THA",
    level: "Nhận biết",
    question: "Minoxidil là thuốc hạ áp giãn mạch trực tiếp mạnh, cơ chế tác dụng phân tử của thuốc là gì?",
    options: [
      "Mở kênh Kali phụ thuộc ATP (K-ATP) làm ưu cực hóa màng tế bào cơ trơn tiểu động mạch",
      "Ức chế thụ thể endothelin ET-A",
      "Chẹn kênh natri phụ thuộc điện thế trên tế bào cơ tim",
      "Kích thích enzym adenylcyclase ở cơ trơn tĩnh mạch"
    ],
    correct: 0,
    explanation: "Minoxidil sulfat làm mở kênh K+ nhạy cảm ATP trên màng tế bào cơ trơn thành mạch, làm ion K+ thoát ra ngoài gây ưu cực hóa màng, ngăn cản mở kênh Ca2+, dẫn đến giãn mạnh tiểu động mạch.",
    reference: "Sách Dược lý 2 tr. 73"
  },
  {
    chapter: "Thuốc điều trị THA",
    level: "Vận dụng",
    question: "Tác dụng phụ gây rậm lông (hypertrichosis) của Minoxidil đã được ứng dụng trong y học để làm gì?",
    options: [
      "Bào chế dung dịch hoặc bọt dùng ngoài da điều trị rụng tóc và hói đầu",
      "Điều trị bệnh nhược cơ mạn tính",
      "Kích thích sản xuất collagen ở người lão hóa da",
      "Chống nấm móng tay chân mạn tính"
    ],
    correct: 0,
    explanation: "Minoxidil làm giãn mạch da đầu, tăng dòng máu nuôi dưỡng các nang tóc và kéo dài giai đoạn anagen của sợi tóc. Dung dịch bôi ngoài da 2% và 5% hiện được dùng phổ biến để điều trị rụng tóc kiểu hói (androgenetic alopecia).",
    reference: "Sách Dược lý 2 tr. 73"
  },
  {
    chapter: "Thuốc điều trị THA",
    level: "Nhận biết",
    question: "Hiện tượng huyết áp dội ngược tăng vọt nguy hiểm (rebound hypertension) xảy ra khi bệnh nhân đột ngột ngừng sử dụng thuốc hạ áp nào?",
    options: [
      "Clonidin",
      "Hydrochlorothiazid",
      "Amlodipin",
      "Enalapril"
    ],
    correct: 0,
    explanation: "Clonidin kích thích thụ thể alpha-2 trung ương làm giảm trương lực giao cảm ngoại biên. Nếu ngừng thuốc đột ngột, lượng catecholamin dự trữ được phóng thích ồ ạt gây cơn tăng huyết áp ác tính đe dọa xuất huyết não và nhồi máu cơ tim.",
    reference: "Sách Dược lý 2 tr. 72"
  },
  {
    chapter: "Thuốc điều trị THA",
    level: "Vận dụng cao",
    question: "Phối hợp thuốc hạ huyết áp nào sau đây được coi là kinh điển, hợp lý và tối ưu nhất cho người cao tuổi bị tăng huyết áp tâm thu đơn độc?",
    options: [
      "Thuốc chẹn kênh calci DHP phối hợp với thuốc lợi tiểu Thiazid",
      "Thuốc chẹn beta giao cảm phối hợp với thuốc chẹn kênh calci Non-DHP",
      "Thuốc ức chế men chuyển phối hợp với thuốc chẹn thụ thể ARB",
      "Thuốc chẹn alpha-1 phối hợp với thuốc giãn mạch trực tiếp hydralazin"
    ],
    correct: 0,
    explanation: "Ở người cao tuổi tăng HA tâm thu đơn độc cơ chế chủ yếu do xơ cứng động mạch lớn và giảm bài tiết natri. Phối hợp CCB DHP (Amlodipin) với Thiazid (Hydrochlorothiazid hoặc Indapamid) tác động hiệp đồng vừa giãn động mạch vừa thải muối nước, mang lại hiệu quả hạ áp tối ưu.",
    reference: "Sách Dược lý 2 tr. 75-76"
  },

  // =========================================================================
  // BÀI 3: THUỐC CHỮA CƠN ĐAU THẮT NGỰC (BỔ SUNG)
  // =========================================================================
  {
    chapter: "Thuốc chữa CĐTN",
    level: "Nhận biết",
    question: "Isosorbid-5-mononitrat (ISMN) có ưu điểm nổi bật nào so với Isosorbid dinitrat (ISDN)?",
    options: [
      "Sinh khả dụng đường uống đạt xấp xỉ 100% do không bị chuyển hóa bước đầu qua gan",
      "Có tác dụng cắt cơn đau thắt ngực cấp chỉ sau 5 giây ngậm",
      "Không bao giờ gây hiện tượng quen thuốc dung nạp",
      "Có thể tiêm tủy sống điều trị đau do thiếu máu cơ tim"
    ],
    correct: 0,
    explanation: "ISDN bị chuyển hóa bước đầu qua gan rất mạnh nên sinh khả dụng thấp và dao động (20%). ISMN chính là chất chuyển hóa có hoạt tính của ISDN, không bị khử nitrat qua gan lần đầu nên sinh khả dụng đường uống đạt 100%, tác dụng ổn định kéo dài.",
    reference: "Sách Dược lý 2 tr. 44"
  },
  {
    chapter: "Thuốc chữa CĐTN",
    level: "Nhận biết",
    question: "Ivabradin là thuốc điều trị đau thắt ngực ổn định tác động theo cơ chế mới nào?",
    options: [
      "Ức chế chọn lọc kênh If tại nút xoang làm giảm nhịp tim đơn thuần mà không ảnh hưởng sức co bóp cơ tim",
      "Gắn vào thụ thể ryanodin ngăn giải phóng calci từ lưới nội bào",
      "Chẹn kênh natri phụ thuộc điện thế ở sợi Purkinje",
      "Kích thích thụ thể muscarinic M2 tại tâm nhĩ"
    ],
    correct: 0,
    explanation: "Ivabradin ức chế chọn lọc dòng tạo nhịp If ở nút xoang, làm chậm tần số tim một cách chuyên biệt cả khi nghỉ ngơi và khi gắng sức mà hoàn toàn không làm giảm sức co bóp cơ tim hay tụt huyết áp, rất thích hợp khi bệnh nhân có chống chỉ định chẹn beta.",
    reference: "Sách Dược lý 2 tr. 52"
  },
  {
    chapter: "Thuốc chữa CĐTN",
    level: "Vận dụng",
    question: "Khi bệnh nhân đang lên cơn đau thắt ngực cấp tính, hướng dẫn cách sử dụng viên Nitroglycerin ngậm dưới lưỡi đúng chuẩn là gì?",
    options: [
      "Ngồi nghỉ ngơi hoặc nằm đầu cao, đặt 1 viên dưới lưỡi để tan tự nhiên không nhai không nuốt; nếu sau 5 phút không đỡ đau có thể dùng viên thứ 2 (tối đa 3 viên trong 15 phút)",
      "Uống ngay viên thuốc với một cốc nước sôi thật lớn",
      "Nhai nát viên thuốc rồi nuốt ngay lập tức",
      "Đặt dưới lưỡi liên tục 5 viên cùng một lúc"
    ],
    correct: 0,
    explanation: "Bệnh nhân phải ở tư thế ngồi (tránh tụt huyết áp tư thế ngất xỉu), đặt 1 viên ngậm dưới lưỡi để niêm mạc hấp thu thẳng vào tĩnh mạch. Không nhai, không nuốt. Nếu sau 5 phút không giảm, dùng viên thứ 2, tối đa 3 viên. Nếu sau 15 phút vẫn đau dữ dội phải gọi cấp cứu 115 vì nguy cơ nhồi máu cơ tim cấp.",
    reference: "Sách Dược lý 2 tr. 43"
  },

  // =========================================================================
  // BÀI 4: THUỐC CHỐNG LOẠN NHỊP TIM (BỔ SUNG)
  // =========================================================================
  {
    chapter: "Thuốc chống loạn nhịp",
    level: "Nhận biết",
    question: "Thuốc chống loạn nhịp nào sau đây thuộc nhóm chẹn beta có thời gian bán thải siêu ngắn (khoảng 9 phút), dùng đường tiêm truyền tĩnh mạch cấp cứu?",
    options: [
      "Esmolol",
      "Propranolol",
      "Atenolol",
      "Bisoprolol"
    ],
    correct: 0,
    explanation: "Esmolol là thuốc chẹn chọn lọc beta-1 có chứa liên kết este trong phân tử, bị enzym esterase của hồng cầu thủy phân cực nhanh, có thời gian bán thải chỉ 9 phút, dùng truyền tĩnh mạch cấp cứu để kiểm soát nhanh nhịp thất trong rung nhĩ hoặc sau mổ tim.",
    reference: "Sách Dược lý 2 tr. 34"
  },
  {
    chapter: "Thuốc chống loạn nhịp",
    level: "Nhận biết",
    question: "Thuốc chống loạn nhịp Flecainid và Propafenon thuộc Nhóm IC theo phân loại Vaughan Williams bị CHỐNG CHỈ ĐỊNH ở đối tượng nào?",
    options: [
      "Bệnh nhân có bệnh tim thực tổn, suy tim hoặc tiền sử nhồi máu cơ tim",
      "Người trẻ tuổi bị hội chứng Wolff-Parkinson-White có dẫn truyền nhĩ thất phụ",
      "Bệnh nhân rung nhĩ kịch phát có cấu trúc tim hoàn toàn bình thường",
      "Bệnh nhân tăng huyết áp giai đoạn 1 chưa biến chứng"
    ],
    correct: 0,
    explanation: "Thử nghiệm CAST (Cardiac Arrhythmia Suppression Trial) đã chứng minh thuốc nhóm IC (Flecainid) làm tăng tỷ lệ tử vong và ngừng tim đột ngột ở bệnh nhân có tổn thương cơ tim thực tổn hoặc sau nhồi máu cơ tim. Do đó nhóm IC chỉ được dùng cho người có tim bình thường về mặt cấu trúc.",
    reference: "Sách Dược lý 2 tr. 33"
  },
  {
    chapter: "Thuốc chống loạn nhịp",
    level: "Vận dụng",
    question: "Trong cấp cứu cơn loạn nhịp thất xoắn đỉnh (Torsades de pointes) do thuốc kéo dài khoảng QT, thuốc điều trị cấp cứu lựa chọn hàng đầu qua đường tiêm tĩnh mạch là gì?",
    options: [
      "Magnesi sulfat (MgSO4)",
      "Calci clorid (CaCl2)",
      "Digoxin tiêm tĩnh mạch",
      "Propranolol tiêm tĩnh mạch"
    ],
    correct: 0,
    explanation: "Magnesi sulfat tiêm tĩnh mạch là thuốc điều trị đặc hiệu hàng đầu được lựa chọn để cắt cơn xoắn đỉnh (Torsades de pointes) bất kể nồng độ magnesi trong máu bình thường hay hạ, nhờ tác dụng ức chế dòng calci đi vào pha 2 và triệt tiêu các hậu khử cực sớm (EAD).",
    reference: "Sách Dược lý 2 tr. 39"
  },
  {
    chapter: "Thuốc chống loạn nhịp",
    level: "Nhận biết",
    question: "Procainamid khi sử dụng điều trị loạn nhịp tim kéo dài có nguy cơ gây hội chứng tự miễn giống bệnh lý nào?",
    options: [
      "Hội chứng giống Lupus ban đỏ hệ thống (kháng thể kháng nhân ANA và kháng histon dương tính)",
      "Bệnh nhược cơ tự miễn qua trung gian kháng thể kháng AChR",
      "Bệnh viêm cột sống dính khớp liên kết HLA-B27",
      "Hội chứng Sjogren gây khô mắt khô miệng"
    ],
    correct: 0,
    explanation: "Dùng Procainamid kéo dài trên 6 tháng gây hội chứng giả Lupus do thuốc ở 25-30% bệnh nhân (đau khớp, viêm khớp, viêm màng phổi, sốt) kèm xét nghiệm kháng thể kháng nhân (ANA) và kháng histon dương tính. Các triệu chứng thường hồi phục sau khi ngừng thuốc.",
    reference: "Sách Dược lý 2 tr. 31"
  }
];

