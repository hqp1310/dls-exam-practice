const fs = require('fs');
const path = require('path');

const duocly2Flashcards = [
  {
    id: 201,
    topic: "Tim mạch & Trợ tim",
    q: "Cơ chế tác dụng phân tử của Glycosid trợ tim (Digoxin) là gì?",
    a: "Ức chế enzym Na+-K+ ATPase ở màng tế bào cơ tim -> tăng Na+ nội bào -> giảm trao đổi Na+/Ca2+ -> tích lũy Ca2+ tự do trong bào tương gắn vào Troponin C -> tăng lực co bóp cơ tim."
  },
  {
    id: 202,
    topic: "Tim mạch & Trợ tim",
    q: "Rối loạn điện giải nào làm tăng nguy cơ ngộ độc Digoxin?",
    a: "Hạ K+ máu (tăng gắn kết digoxin vào Na+-K+ ATPase), hạ Mg2+ máu và tăng Ca2+ máu."
  },
  {
    id: 203,
    topic: "Tim mạch & Trợ tim",
    q: "Thuốc kháng độc đặc hiệu (antidote) trong ngộ độc Digoxin là gì?",
    a: "Kháng thể kháng digoxin dạng phân đoạn Fab (Digibind hoặc DigiFab)."
  },
  {
    id: 204,
    topic: "Tăng huyết áp",
    q: "Vì sao nhóm thuốc ức chế men chuyển (ACEI) gây ho khan kéo dài?",
    a: "Do ức chế men chuyển ACE làm ngăn cản thoái giáng Bradykinin và chất P, gây tích tụ bradykinin ở đường hô hấp trên. Khắc phục: đổi sang nhóm ARB (-sartan)."
  },
  {
    id: 205,
    topic: "Tăng huyết áp",
    q: "Chống chỉ định tuyệt đối của nhóm ACEI và ARB là gì?",
    a: "Phụ nữ có thai (gây quái thai, loạn sản thận thai nhi, vô niệu), hẹp động mạch thận hai bên, tiền sử phù mạch dị ứng do thuốc."
  },
  {
    id: 206,
    topic: "Tăng huyết áp",
    q: "Thuốc hạ huyết áp nào được coi là lựa chọn an toàn hàng đầu cho phụ nữ mang thai?",
    a: "Methyldopa (kích thích thụ thể alpha-2 trung ương). Các lựa chọn thay thế: Labetalol, Hydralazin."
  },
  {
    id: 207,
    topic: "Đau thắt ngực & Loạn nhịp",
    q: "Cơ chế phân tử gây giãn mạch của nhóm Nitrat hữu cơ (Nitroglycerin)?",
    a: "Gốc nitrat kết hợp nhóm -SH giải phóng NO -> kích hoạt Guanylyl cyclase tổng hợp cGMP -> khử phosphoryl chuỗi nhẹ myosin -> giãn cơ trơn tĩnh mạch và động mạch vành."
  },
  {
    id: 208,
    topic: "Đau thắt ngực & Loạn nhịp",
    q: "Vì sao chống chỉ định tuyệt đối phối hợp Nitroglycerin với thuốc ức chế PDE-5 (Sildenafil)?",
    a: "Nitrat làm tăng tổng hợp cGMP, trong khi Sildenafil ức chế thoái giáng cGMP -> cGMP tích lũy ồ ạt gây giãn mạch toàn thân cực độ, tụt huyết áp sâu không hồi phục và tử vong."
  },
  {
    id: 209,
    topic: "Đau thắt ngực & Loạn nhịp",
    q: "Thuốc nào được lựa chọn hàng đầu để cắt cơn nhịp nhanh kịch phát trên thất (PSVT)?",
    a: "Adenosin: tiêm bolus tĩnh mạch cực nhanh trong 1-2 giây rồi bơm đuổi 20ml nước muối sinh lý (do t1/2 < 10 giây)."
  },
  {
    id: 210,
    topic: "Đau thắt ngực & Loạn nhịp",
    q: "Thuốc cấp cứu hàng đầu để cắt cơn loạn nhịp xoắn đỉnh (Torsades de pointes)?",
    a: "Magnesi sulfat (MgSO4) tiêm tĩnh mạch."
  },
  {
    id: 211,
    topic: "Thận & Lợi niệu",
    q: "Vị trí tác dụng và cơ chế của thuốc lợi tiểu quai Furosemid?",
    a: "Nhánh lên phần dày quai Henle; ức chế đồng vận chuyển Na+/K+/2Cl-; hiệu lực mạnh nhất và vẫn có tác dụng khi suy thận GFR < 30 mL/phút."
  },
  {
    id: 212,
    topic: "Thận & Lợi niệu",
    level: "Nhận biết",
    q: "Điểm khác biệt về bài xuất Canxi giữa Furosemid và Hydrochlorothiazid?",
    a: "Furosemid làm tăng thải Ca2+ qua nước tiểu (dùng cấp cứu tăng calci máu); Hydrochlorothiazid làm tăng tái hấp thu và giảm thải Ca2+ (tốt cho loãng xương và sỏi thận calci)."
  },
  {
    id: 213,
    topic: "Thận & Lợi niệu",
    q: "Cơ chế lợi tiểu của Spironolacton và tác dụng phụ nội tiết ở nam giới?",
    a: "Đối kháng cạnh tranh với Aldosteron tại thụ thể ở ống lượn xa và ống góp -> tăng thải Na+, giữ K+. Tác dụng phụ: kháng androgen gây chứng vú to ở nam giới (gynecomastia) và bất lực."
  },
  {
    id: 214,
    topic: "Dạ dày & Tiêu hóa",
    q: "Cơ chế tác dụng của thuốc ức chế bơm proton (PPI như Omeprazol, Esomeprazol)?",
    a: "Ức chế không hồi phục enzym H+/K+ ATPase ở tế bào viền thành dạ dày (bước chung cuối cùng bài tiết HCl). Uống trước ăn sáng 30-60 phút."
  },
  {
    id: 215,
    topic: "Dạ dày & Tiêu hóa",
    q: "Vì sao không nên uống Sucralfat cùng lúc với thuốc Antacid hoặc PPI?",
    a: "Vì Sucralfat bắt buộc cần môi trường acid (pH < 4) để trùng hợp tạo gel bao bọc ổ loét. Uống chung với antacid/PPI làm tăng pH dạ dày làm mất tác dụng tạo gel của sucralfat."
  },
  {
    id: 216,
    topic: "Hô hấp",
    q: "Cơ chế làm tiêu chất nhầy (long đờm) của N-acetylcystein?",
    a: "Cắt đứt các cầu nối disulfid (-S-S-) của chuỗi mucoprotein trong dịch phế quản, làm giảm độ quánh của đờm. (Ngoài ra NAC là thuốc giải độc đặc hiệu quá liều Paracetamol)."
  },
  {
    id: 217,
    topic: "Hô hấp",
    q: "Nguyên tắc bắt buộc khi dùng LABA (Salmeterol, Formoterol) trong hen phế quản?",
    a: "Luôn phải phối hợp với Corticoid dạng hít (ICS), KHÔNG BAO GIỜ dùng đơn độc LABA trong hen vì làm tăng nguy cơ tử vong do hen."
  },
  {
    id: 218,
    topic: "Kháng Histamin H1",
    q: "Vì sao thuốc kháng H1 thế hệ 2 (Loratadin, Fexofenadin, Cetirizin) không gây buồn ngủ?",
    a: "Do tính thân nước hơn, liên kết protein cao nên hầu như KHÔNG qua được hàng rào máu não và có tính chọn lọc cao trên thụ thể H1 ngoại vi."
  },
  {
    id: 219,
    topic: "Hạ lipid máu",
    q: "Cơ chế hạ lipid máu của nhóm Statin (Atorvastatin, Rosuvastatin)?",
    a: "Ức chế enzym HMG-CoA reductase (bước giới hạn tốc độ tổng hợp cholesterol ở gan) -> giảm cholesterol nội bào -> tăng thụ thể LDL ở màng gan -> giảm mạnh nhất LDL-C (20-60%)."
  },
  {
    id: 220,
    topic: "Hạ lipid máu",
    q: "Tác dụng phụ nguy hiểm nhất của Statin cần theo dõi men CK?",
    a: "Tiêu cơ vân cấp (rhabdomyolysis) giải phóng myoglobin gây suy thận cấp. Nguy cơ tăng vọt khi phối hợp cùng Fibrat (đặc biệt Gemfibrozil) hoặc thuốc ức chế CYP3A4."
  },
  {
    id: 221,
    topic: "Ký sinh trùng & Amip",
    q: "Vì sao uống rượu khi đang dùng Metronidazol gây phản ứng kiểu Disulfiram?",
    a: "Metronidazol ức chế enzym aldehyd dehydrogenase ở gan -> tích tụ acetaldehyd trong máu -> gây đỏ bừng mặt, nhức đầu dữ dội, nôn nao, tụt huyết áp và đánh trống ngực."
  },
  {
    id: 222,
    topic: "Ký sinh trùng & Sán",
    q: "Thuốc nào là lựa chọn đặc hiệu đầu bảng điều trị sán lá gan lớn (Fasciola)?",
    a: "Triclabendazol (biệt dược Egaten). (Lưu ý: Praziquantel không hiệu quả với sán lá gan lớn)."
  },
  {
    id: 223,
    topic: "Sốt rét",
    q: "Thuốc sốt rét nào diệt thể ngủ trong gan của P. vivax để chống tái phát xa?",
    a: "Primaquin. Bắt buộc xét nghiệm sàng lọc men G6PD trước khi dùng vì thuốc gây tan máu cấp dữ dội ở người thiếu men G6PD."
  },
  {
    id: 224,
    topic: "Nội tiết & Hormon",
    q: "Vì sao Glucocorticoid điều trị mạn tính nên uống toàn bộ liều lúc 8 giờ sáng?",
    a: "Bắt chước nhịp sinh học tự nhiên bài tiết cortisol của vỏ thượng thận (đỉnh cao nhất 6-8h sáng), giúp giảm thiểu tối đa sự ức chế ngược trục dưới đồi - tuyến yên - thượng thận (HPA)."
  },
  {
    id: 225,
    topic: "Hạ đường huyết",
    q: "Insulin duy nhất được phép tiêm hoặc truyền tĩnh mạch trong cấp cứu?",
    a: "Insulin Regular (Insulin thường / hòa tan). Các loại insulin đục (NPH, Premix) hoặc analog kéo dài (Glargin, Detemir) tuyệt đối không được tiêm tĩnh mạch."
  },
  {
    id: 226,
    topic: "Hạ đường huyết",
    q: "Chống chỉ định quan trọng nhất của Metformin là gì?",
    a: "Suy thận nặng có mức lọc cầu thận eGFR < 30 mL/phút/1.73m2, suy gan, suy tim mất bù, thiếu oxy mô do nguy cơ nhiễm toan acid lactic tử vong cao."
  },
  {
    id: 227,
    topic: "Đông máu",
    q: "Chất giải độc đặc hiệu trung hòa Heparin và giải độc Warfarin?",
    a: "Giải độc Heparin: Protamin sulfat. Giải độc Warfarin/kháng vitamin K: Vitamin K1 (Phytomenadion) và huyết tương tươi đông lạnh."
  },
  {
    topic: "Thiếu máu",
    id: 228,
    q: "Thiếu máu hồng cầu to ác tính (Biermer) do thiếu chất gì và cách điều trị?",
    a: "Thiếu Vitamin B12 (do teo tế bào viền dạ dày mất yếu tố nội Castle). Điều trị: tiêm bắp Vitamin B12 định kỳ suốt đời (uống không có tác dụng do không hấp thu được)."
  },
  {
    topic: "Kháng virus",
    id: 229,
    q: "Cơ chế tác động chọn lọc trên virus Herpes của Acyclovir?",
    a: "Phải được phosphoryl hóa lần đầu bởi enzym Thymidine kinase đặc hiệu của virus Herpes thành dạng monophosphat, sau đó enzym tế bào chủ chuyển thành acyclovir triphosphat ức chế ADN polymerase của virus."
  },
  {
    topic: "Ung thư & Độc chất",
    id: 230,
    q: "Chất giải cứu tế bào lành khi dùng Methotrexat liều cao?",
    a: "Acid folinic (Leucovorin) - cung cấp dạng tetrahydrofolat hoạt hóa sẵn vượt qua khâu ức chế enzym DHFR của Methotrexat."
  },
  {
    topic: "Ung thư & Độc chất",
    id: 231,
    q: "Chất bảo vệ bàng quang chống viêm bàng quang chảy máu của Cyclophosphamid?",
    a: "Mesna (gắn trung hòa chất chuyển hóa độc acrolein trong nước tiểu) kết hợp truyền nhiều dịch."
  },
  {
    topic: "Điều trị ngộ độc",
    id: 232,
    q: "Các cặp Antidote kinh điển trong ngộ độc cấp:",
    a: "Paracetamol -> N-acetylcystein; Opioid -> Naloxon; Benzodiazepin -> Flumazenil; Phospho hữu cơ -> Atropin + PAM; Kim loại nặng -> BAL, CaNa2EDTA; Methanol -> Ethanol, Fomepizol."
  }
];

const flashcardsPath = path.join(__dirname, '..', 'flashcards.js');
let content = fs.readFileSync(flashcardsPath, 'utf8');

// Check if FLASHCARD_DATA_DUOCLY2 already exists
if (!content.includes('FLASHCARD_DATA_DUOCLY2')) {
  content += `\n\n// FLASHCARDS DƯỢC LÝ 2 CHUẨN BỘ Y TẾ (CƠ CHẾ, THỤ THỂ, ADR, CHỐNG CHỈ ĐỊNH, ANTIDOTE)
const FLASHCARD_DATA_DUOCLY2 = ${JSON.stringify(duocly2Flashcards, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { FLASHCARD_DATA, FLASHCARD_DATA_DUOCLY2 };
}
`;
  fs.writeFileSync(flashcardsPath, content, 'utf8');
  console.log(`Successfully appended FLASHCARD_DATA_DUOCLY2 (${duocly2Flashcards.length} cards) to flashcards.js`);
} else {
  console.log('FLASHCARD_DATA_DUOCLY2 already present in flashcards.js');
}

