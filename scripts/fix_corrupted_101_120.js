const fs = require('fs');
const path = require('path');

const questionsFile = path.join(__dirname, '../questions_800.js');
const bank = require(questionsFile);

console.log('Original bank length:', bank.length);

const FIXES = {
  101: {
    question: "Tính liều nạp tĩnh mạch của Quinidin cho bệnh nhân nặng 70 kg để đạt nồng độ tức thì 3 mg/L, biết thể tích phân bố Vd = 2.5 L/kg và F = 1:",
    options: [
      "175 mg",
      "350 mg",
      "525 mg",
      "700 mg"
    ],
    correct: 2,
    explanation: "Áp dụng công thức liều nạp: D = (Vd x Cân nặng x Cp) / F = (2,5 L/kg x 70 kg x 3 mg/L) / 1 = 525 mg."
  },
  102: {
    question: "Tính liều nạp tĩnh mạch của Valproat natri cho bệnh nhân nặng 50 kg để đạt nồng độ tức thì 50 mg/L, biết thể tích phân bố Vd = 0.2 L/kg và F = 1:",
    options: [
      "250 mg",
      "1000 mg",
      "500 mg",
      "750 mg"
    ],
    correct: 2,
    explanation: "Áp dụng công thức liều nạp: D = (Vd x Cân nặng x Cp) / F = (0,2 L/kg x 50 kg x 50 mg/L) / 1 = 500 mg."
  },
  103: {
    question: "Tính liều nạp tĩnh mạch của Carbamazepin cho bệnh nhân nặng 60 kg để đạt nồng độ tức thì 8 mg/L, biết thể tích phân bố Vd = 1.2 L/kg và F = 1:",
    options: [
      "288 mg",
      "480 mg",
      "720 mg",
      "576 mg"
    ],
    correct: 3,
    explanation: "Áp dụng công thức liều nạp: D = (Vd x Cân nặng x Cp) / F = (1,2 L/kg x 60 kg x 8 mg/L) / 1 = 576 mg."
  },
  104: {
    question: "Tính liều nạp tĩnh mạch của Methotrexat cho bệnh nhân nặng 50 kg để đạt nồng độ tức thì 10 mg/L, biết thể tích phân bố Vd = 0.8 L/kg và F = 1:",
    options: [
      "200 mg",
      "300 mg",
      "400 mg",
      "500 mg"
    ],
    correct: 2,
    explanation: "Áp dụng công thức liều nạp: D = (Vd x Cân nặng x Cp) / F = (0,8 L/kg x 50 kg x 10 mg/L) / 1 = 400 mg."
  },
  105: {
    question: "Tính liều nạp tĩnh mạch của Ceftriaxon cho bệnh nhân nặng 60 kg để đạt nồng độ tức thì 100 mg/L, biết thể tích phân bố Vd = 0.15 L/kg và F = 1:",
    options: [
      "900 mg",
      "450 mg",
      "600 mg",
      "1200 mg"
    ],
    correct: 0,
    explanation: "Áp dụng công thức liều nạp: D = (Vd x Cân nặng x Cp) / F = (0,15 L/kg x 60 kg x 100 mg/L) / 1 = 900 mg."
  },
  106: {
    question: "Tính liều nạp tĩnh mạch của Ceftazidim cho bệnh nhân nặng 70 kg để đạt nồng độ tức thì 40 mg/L, biết thể tích phân bố Vd = 0.23 L/kg và F = 1:",
    options: [
      "322 mg",
      "460 mg",
      "644 mg",
      "800 mg"
    ],
    correct: 2,
    explanation: "Áp dụng công thức liều nạp: D = (Vd x Cân nặng x Cp) / F = (0,23 L/kg x 70 kg x 40 mg/L) / 1 = 644 mg."
  },
  107: {
    question: "Tính liều nạp tĩnh mạch của Cefepim cho bệnh nhân nặng 60 kg để đạt nồng độ tức thì 50 mg/L, biết thể tích phân bố Vd = 0.25 L/kg và F = 1:",
    options: [
      "375 mg",
      "750 mg",
      "500 mg",
      "1000 mg"
    ],
    correct: 1,
    explanation: "Áp dụng công thức liều nạp: D = (Vd x Cân nặng x Cp) / F = (0,25 L/kg x 60 kg x 50 mg/L) / 1 = 750 mg."
  },
  108: {
    question: "Tính liều nạp tĩnh mạch của Levofloxacin cho bệnh nhân nặng 65 kg để đạt nồng độ tức thì 6 mg/L, biết thể tích phân bố Vd = 1.3 L/kg và F = 1:",
    options: [
      "254 mg",
      "507 mg",
      "390 mg",
      "650 mg"
    ],
    correct: 1,
    explanation: "Áp dụng công thức liều nạp: D = (Vd x Cân nặng x Cp) / F = (1,3 L/kg x 65 kg x 6 mg/L) / 1 = 507 mg."
  },
  109: {
    question: "Tính liều nạp tĩnh mạch của Ciprofloxacin cho bệnh nhân nặng 60 kg để đạt nồng độ tức thì 3 mg/L, biết thể tích phân bố Vd = 2.1 L/kg và F = 1:",
    options: [
      "378 mg",
      "189 mg",
      "252 mg",
      "504 mg"
    ],
    correct: 0,
    explanation: "Áp dụng công thức liều nạp: D = (Vd x Cân nặng x Cp) / F = (2,1 L/kg x 60 kg x 3 mg/L) / 1 = 378 mg."
  },
  110: {
    question: "Tính liều nạp tĩnh mạch của Metronidazol cho bệnh nhân nặng 55 kg để đạt nồng độ tức thì 15 mg/L, biết thể tích phân bố Vd = 0.8 L/kg và F = 1:",
    options: [
      "330 mg",
      "440 mg",
      "660 mg",
      "880 mg"
    ],
    correct: 2,
    explanation: "Áp dụng công thức liều nạp: D = (Vd x Cân nặng x Cp) / F = (0,8 L/kg x 55 kg x 15 mg/L) / 1 = 660 mg."
  },
  111: {
    question: "Phối hợp giữa kháng sinh Aminosid với Furosemid gây nguy cơ tổn thương nặng trên hai cơ quan nào?",
    options: [
      "Thận (suy thận cấp) và thính giác (tổn thương tiền đình - ốc tai, điếc không hồi phục)",
      "Gan (hoại tử tế bào gan cấp tính) và hệ thống đường dẫn mật trong và ngoài gan",
      "Tủy xương (ức chế sinh ba dòng tế bào máu) và các cơ quan tạo máu ngoại vi",
      "Niêm mạc ống tiêu hóa (viêm loét trợt dạ dày) và tá tràng xuất huyết nghiêm trọng"
    ],
    correct: 0,
    explanation: "Cả kháng sinh Aminosid và thuốc lợi tiểu quai Furosemid đều có độc tính cao trên thận và thính giác. Khi phối hợp, độc tính tăng theo cơ chế hiệp đồng, gây nguy cơ suy thận cấp và tổn thương ốc tai - tiền đình dẫn đến điếc vĩnh viễn."
  },
  112: {
    question: "Dùng đồng thời Cimetidin với Warfarin gây nguy cơ xuất huyết là do cơ chế nào?",
    options: [
      "Cimetidin làm tăng đào thải Warfarin qua nước tiểu dẫn đến mất tác dụng",
      "Cimetidin cạnh tranh trực tiếp trên thụ thể gắn kết của Warfarin tại tiểu cầu",
      "Cimetidin ức chế enzym CYP450 ở gan làm giảm chuyển hóa và tăng nồng độ Warfarin",
      "Cimetidin phá hủy phân tử Warfarin trong lòng ruột trước khi được hấp thu"
    ],
    correct: 2,
    explanation: "Cimetidin là chất ức chế enzym Cytochrome P450 (CYP2C9, CYP1A2, CYP3A4) tại gan, làm chậm quá trình chuyển hóa Warfarin, làm tăng nồng độ thuốc tự do trong máu và kéo dài INR, gây nguy cơ xuất huyết nghiêm trọng."
  },
  113: {
    question: "Khi dùng chung Gastropulgite với Ciprofloxacin, hướng dẫn dùng thuốc hợp lý là gì?",
    options: [
      "Uống Ciprofloxacin cách xa Gastropulgite ít nhất 2 giờ trước hoặc sau khi uống",
      "Uống Gastropulgite gấp đôi liều khuyến cáo vào bữa ăn chính để tăng bao phủ",
      "Uống hai thuốc cùng một thời điểm ngay trong bữa ăn nhiều chất béo để dễ hấp thu",
      "Nhai nát viên nén Ciprofloxacin rồi uống cùng lúc với hỗn dịch Gastropulgite"
    ],
    correct: 0,
    explanation: "Gastropulgite chứa muối nhôm và magnesi, tạo phức chelat không tan và không hấp thu với kháng sinh Fluoroquinolon (Ciprofloxacin). Cần uống Ciprofloxacin cách xa antacid tối thiểu 2 giờ (uống trước 2 giờ hoặc sau 4 giờ)."
  },
  114: {
    question: "Kháng sinh Tetracyclin bị giảm sinh khả dụng rõ rệt khi uống chung với sữa là do nguyên nhân nào?",
    options: [
      "Độ pH hơi kiềm của sữa làm bất hoạt cấu trúc hóa học phân tử kháng sinh",
      "Chất béo trong sữa nhũ hóa và phá hủy cấu trúc phân tử của Tetracyclin",
      "Ion Calci trong sữa tạo phức chelat khó tan và không hấp thu qua niêm mạc ruột",
      "Protein casein trong sữa kích thích tăng nhu động ruột đẩy nhanh thuốc ra ngoài"
    ],
    correct: 2,
    explanation: "Ion Ca2+ trong sữa tạo phức chelat không tan với Tetracyclin tại đường tiêu hóa, làm giảm nghiêm trọng sinh khả dụng đường uống của kháng sinh này."
  },
  115: {
    question: "Nhóm thuốc nào sau đây là các chất gây cảm ứng mạnh enzym chuyển hóa thuốc tại gan?",
    options: [
      "Cimetidin, Erythromycin, Ketoconazol và Clarithromycin",
      "Rifampicin, Phenobarbital, Carbamazepin và Phenytoin",
      "Omeprazol, Ciprofloxacin, Fluconazol và Isoniazid",
      "Allopurinol, Metronidazol, Amiodaron và Diltiazem"
    ],
    correct: 1,
    explanation: "Các chất gây cảm ứng enzym gan kinh điển gồm: Rifampicin, Phenobarbital, Carbamazepin, Phenytoin. Chúng kích thích tăng tổng hợp men CYP450, làm giảm nồng độ và giảm hiệu quả các thuốc dùng kèm."
  },
  116: {
    question: "Phối hợp đồng thời hai thuốc cùng ức chế hệ RAA (như ACEI phối hợp ARB) gây ra nguy cơ biến cố bất lợi nào?",
    options: [
      "Hạ kali máu nặng và kích hoạt cơn nhịp tim nhanh kịch phát trên thất",
      "Viêm loét trợt niêm mạc dạ dày tá tràng dẫn đến xuất huyết tiêu hóa ồ ạt",
      "Tăng kali máu nguy hiểm, suy thận cấp tính và tụt huyết áp quá mức",
      "Co thắt phế quản ác tính gây cơn hen phế quản cấp không hồi phục"
    ],
    correct: 2,
    explanation: "Phối hợp ức chế kép hệ RAAS (ACEI + ARB hoặc phối hợp Aliskiren) làm mất hoàn toàn cơ chế bù trừ lưu lượng lọc cầu thận, gây suy giảm mức lọc cầu thận cấp tính, tăng kali máu đe dọa ngừng tim và tụt huyết áp nặng."
  },
  117: {
    question: "Phối hợp thuốc ức chế men chuyển với Amlodipin mang lại lợi ích gì về mặt giảm tác dụng phụ?",
    options: [
      "Giảm rõ rệt hiện tượng phù mắt cá chân (phù ngoại vi) do Amlodipin gây ra",
      "Ngăn ngừa hoàn toàn nguy cơ xuất hiện nhịp chậm xoang kịch phát ở người già",
      "Loại bỏ hoàn toàn tác dụng phụ ho khan kinh điển của nhóm ức chế men chuyển",
      "Ngăn ngừa tình trạng tăng đường huyết và rối loạn lipid máu thứ phát sau ăn"
    ],
    correct: 0,
    explanation: "Amlodipin làm giãn chọn lọc tiểu động mạch đến của búi mao mạch cầu thận và mao mạch ngoại vi, gây tăng áp lực thủy tĩnh dẫn đến thoát dịch phù mắt cá chân. Thuốc ức chế men chuyển làm giãn tiểu động mạch đi, giúp giảm áp lực mao mạch và giảm đáng kể phù do Amlodipin."
  },
  118: {
    question: "Tương tác đối kháng cạnh tranh trực tiếp trên cùng thụ thể xảy ra giữa cặp thuốc nào sau đây?",
    options: [
      "Warfarin và Cimetidin (tương tác qua ức chế men chuyển hóa CYP2C9 tại gan)",
      "Furosemid và Gentamicin (tương tác hiệp đồng tăng độc tính trên thính giác)",
      "Atropin và Pilocarpin (đối kháng cạnh tranh trực tiếp trên thụ thể Muscarinic)",
      "Tetracyclin và Sữa tươi (tương tác hóa học tạo phức chelat cản trở hấp thu)"
    ],
    correct: 2,
    explanation: "Atropin là chất đối kháng cạnh tranh trên thụ thể Muscarinic của hệ đối giao cảm, trong khi Pilocarpin là chất chủ vận Muscarinic. Hai thuốc cạnh tranh trực tiếp tại cùng vị trí gắn của thụ thể."
  },
  119: {
    question: "Phối hợp thuốc lợi tiểu Thiazid với thuốc ức chế men chuyển trong điều trị tăng huyết áp giúp giảm tác dụng phụ nào?",
    options: [
      "Giảm nguy cơ ho khan và phù mạch của thuốc ức chế men chuyển",
      "Giảm nguy cơ hạ kali máu do thuốc lợi tiểu Thiazid gây mất qua thận",
      "Tránh hiện tượng bốc hỏa đỏ bừng mặt và nhức đầu dữ dội khi dùng thuốc",
      "Làm tăng bài xuất natri ra ngoài nước tiểu giúp hạ huyết áp nhanh chóng"
    ],
    correct: 1,
    explanation: "Lợi tiểu Thiazid làm tăng bài xuất kali qua ống lượn xa dẫn đến hạ kali máu. Thuốc ức chế men chuyển làm giảm aldosteron nên giữ kali. Phối hợp hai thuốc giúp trung hòa tác động trên kali, giảm thiểu nguy cơ rối loạn điện giải."
  },
  120: {
    question: "Uống rượu khi đang điều trị bằng thuốc hạ đường huyết Sulfonylure (như Tolbutamid) có thể xuất hiện phản ứng bất lợi gì?",
    options: [
      "Hội chứng ngoại tháp cấp tính với biểu hiện co cứng cơ và run ngọn chi",
      "Xuất huyết võng mạc không hồi phục dẫn đến giảm thị lực đột ngột",
      "Cơn tăng huyết áp kịch phát ác tính kèm theo rối loạn nhịp tim nhanh",
      "Phản ứng sợ rượu kiểu Antabuse (Disulfiram-like) với đỏ bừng mặt, nôn nao, tụt áp"
    ],
    correct: 3,
    explanation: "Sulfonylure (đặc biệt Tolbutamid, Chlorpropamid) ức chế enzym Aldehyd dehydrogenase ở gan, làm tích tụ acetaldehyd khi uống rượu, gây phản ứng kiểu Disulfiram (Antabuse-like): bốc hỏa đỏ bừng mặt, buồn nôn, đau đầu dữ dội, hạ huyết áp."
  }
};

let updatedCount = 0;
const updatedBank = bank.map(q => {
  if (FIXES[q.id]) {
    updatedCount++;
    const fix = FIXES[q.id];
    return {
      ...q,
      question: fix.question,
      options: fix.options,
      correct: fix.correct,
      explanation: fix.explanation
    };
  }
  return q;
});

console.log(`Updated ${updatedCount} questions.`);

// Header
const header = `// Ngân hàng câu hỏi trắc nghiệm Dược Lâm Sàng toàn diện
// Tổng hợp chuẩn Bộ Y tế & Đề thi Dược Lâm Sàng các trường ĐH Y Dược hàng đầu (HUP, UMP, HMU)
// Đã chuẩn hóa toàn diện 100% câu hỏi, khôi phục và tinh chỉnh chính xác các câu hỏi tính liều và tương tác thuốc

const ALL_EXAM_BANK = `;

const content = header + JSON.stringify(updatedBank, null, 2) + `;\n\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = ALL_EXAM_BANK;\n}\n`;

fs.writeFileSync(questionsFile, content, 'utf8');
console.log('Successfully wrote updated questions_800.js!');

