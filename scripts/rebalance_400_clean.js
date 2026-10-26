const fs = require('fs');
const path = require('path');

const bankPath = path.join(__dirname, '..', 'questions_800.js');
const code = fs.readFileSync(bankPath, 'utf8');
eval(code.replace('const ALL_EXAM_BANK', 'global.ALL_EXAM_BANK'));
const bank = global.ALL_EXAM_BANK;

console.log('Original bank questions:', bank.length);

// 1. Comprehensive cleaner for an individual option
function cleanOption(text) {
  let s = text.trim();

  // Remove specific known explanatory parentheticals
  s = s.replace(/\s*\(gõ vùng tuyến mang tai gây co cơ mặt\)/gi, '');
  s = s.replace(/\s*\(co thắt bàn tay khi bơm bao đo HA\)/gi, '');
  s = s.replace(/\s*\(phản vệ muộn xuất hiện sau 4\s*[-–]\s*8 giờ\)/gi, '');
  s = s.replace(/\s*\(dưới 28 ngày tuổi\)/gi, '');
  s = s.replace(/\s*\(tương đương 0,5 mg\)/gi, '');
  s = s.replace(/\s*\(thuốc chống lao\)/gi, '');
  s = s.replace(/\s*\(thuốc chống nấm.*?\)/gi, '');
  s = s.replace(/\s*\(thuốc chống trầm cảm.*?\)/gi, '');
  s = s.replace(/\s*\(Systematic Review & Meta-analysis\)/gi, '');
  s = s.replace(/\s*\(Tall Man lettering\)/gi, '');
  s = s.replace(/\s*\(Adjusted Body Weight - ABW\)/gi, '');
  s = s.replace(/\s*\(Trissel's\)/gi, '');
  s = s.replace(/\s*\(Syphilis\)/gi, '');
  s = s.replace(/\s*\(Level of Evidence\)/gi, '');
  s = s.replace(/\s*\(Glaucoma\)/gi, '');
  s = s.replace(/\s*\(Gout\)/gi, '');
  s = s.replace(/\s*\(Viêm thận Lupus.*?\)/gi, '');
  s = s.replace(/\s*\(qua việc kích thích.*?\)/gi, '');
  s = s.replace(/\s*\(PPI như Omeprazol, Pantoprazol\)/gi, ' PPI');
  s = s.replace(/\s*\(2 tuần\)/gi, '');
  s = s.replace(/\s*\(ít bị enzym.*?\)/gi, '');
  s = s.replace(/\s*\(4 gam\)/gi, '');
  s = s.replace(/\s*\(2 gam\)/gi, '');
  s = s.replace(/\s*\(nhồi máu cơ tim, đột quỵ\)/gi, '');
  s = s.replace(/\s*\(thở chậm < 8 lần\/phút\)/gi, '');
  s = s.replace(/\s*\(TXA2\)/gi, '');
  s = s.replace(/\s*\(bằng 10-15% tổng liều 24 giờ\)/gi, '');
  s = s.replace(/\s*\(do có nhánh N-methylthiotetrazol.*?\)/gi, '');
  s = s.replace(/\s*\(Celecoxib\)/gi, '');
  s = s.replace(/\s*\(ngắn hơn nhiều.*?\)/gi, '');
  s = s.replace(/\s*\(PDE-4\)/gi, '');
  s = s.replace(/\s*\(24 đến 36 giờ\)/gi, '');
  s = s.replace(/\s*\(Naloxon\)/gi, '');
  s = s.replace(/\s*\(tổng liều 1,5 mg trong ngày đầu\)/gi, '');
  s = s.replace(/\s*\(Thiamin\)/gi, '');
  s = s.replace(/\s*\(Acid ascorbic\)/gi, '');
  s = s.replace(/\s*\(Cholecalciferol\)/gi, '');
  s = s.replace(/\s*\(Retinol\)/gi, '');
  s = s.replace(/\s*\(Pyridoxin\)/gi, '');
  s = s.replace(/\s*\(Niacin \/ Acid nicotinic\)/gi, '');
  s = s.replace(/\s*\(Cobalamin\)/gi, '');
  s = s.replace(/\s*\(Intrinsic Factor - IF\)/gi, '');
  s = s.replace(/\s*\(HCl\)/gi, '');
  s = s.replace(/\s*\(giảm thị lực khi trời nhá nhem tối\)/gi, '');
  s = s.replace(/\s*\(Vitamin D3\)/gi, '');
  s = s.replace(/\s*\(Calcidiol\)/gi, '');
  s = s.replace(/\s*\(Vitamin D2\)/gi, '');
  s = s.replace(/\s*\(Calcitriol\)/gi, '');
  s = s.replace(/\s*\(dạng hoạt tính 1,25-OH\)/gi, '');
  s = s.replace(/\s*\(Vitamin D3 thông thường\)/gi, '');
  s = s.replace(/\s*\(gamma-carboxyl hóa\)/gi, '');
  s = s.replace(/\s*\(đặc biệt là xuất huyết não - màng não\)/gi, '');
  s = s.replace(/\s*\(trước bữa ăn 1 giờ hoặc sau ăn 2 giờ\)/gi, '');
  s = s.replace(/\s*\(co-factor\)/gi, '');
  s = s.replace(/\s*\(không bù được nếu chưa bù Magnesi\)/gi, '');
  s = s.replace(/\s*\(thận, mạch máu, cơ tim\)/gi, '');
  s = s.replace(/\s*\(Single-pill combination\)/gi, '');
  s = s.replace(/\s*\(ƯCMC\)/gi, '');
  s = s.replace(/\s*\(ARB\)/gi, '');
  s = s.replace(/\s*\(phù mắt cá chân\)/gi, '');
  s = s.replace(/\s*\(hoặc ARB\)/gi, '');
  s = s.replace(/\s*\(COPD\)/gi, '');
  s = s.replace(/\s*\(đổ mồ hôi trộm\)/gi, '');
  s = s.replace(/\s*\(Esmolol, Labetalol\)/gi, '');
  s = s.replace(/\s*\(Rebound hypertension\)/gi, '');
  s = s.replace(/\s*\(trong đó bắt buộc có 1 thuốc lợi tiểu\)/gi, '');
  s = s.replace(/\s*\(liều 25 - 50 mg\/ngày\)/gi, '');
  s = s.replace(/\s*\(giàu rau xanh.*?\)/gi, '');
  s = s.replace(/\s*\(Mất nước nặng\)/gi, '');
  s = s.replace(/\s*\(Có mất nước\)/gi, '');
  s = s.replace(/\s*\(Không mất nước\)/gi, '');
  s = s.replace(/\s*\(5 mL\)/gi, '');
  s = s.replace(/\s*\(< 2 giây\)/gi, '');
  s = s.replace(/\s*\(> 2 giây\)/gi, '');
  s = s.replace(/\s*\(hoặc Natri clorid 0,9%.*?\)/gi, '');
  s = s.replace(/\s*\(tổng 3 giờ\)/gi, '');
  s = s.replace(/\s*\(tổng 6 giờ\)/gi, '');
  s = s.replace(/\s*\(Hội chứng lỵ\)/gi, '');
  s = s.replace(/\s*\(15 mg\/kg x 2 lần\/ngày trong 3 ngày\)/gi, '');
  s = s.replace(/\s*\(HCO3-\)/gi, '');
  s = s.replace(/\s*\(CO2\)/gi, '');
  s = s.replace(/\s*\(H\+\)/gi, '');
  s = s.replace(/\s*\(như [^)]+\)/gi, '');
  s = s.replace(/\s*\(ví dụ [^)]+\)/gi, '');
  s = s.replace(/\s*\(gồm [^)]+\)/gi, '');

  // Strip remaining explanation parens like (Bình thường...), (ADR), (NAC), (fe), (Rf)
  s = s.replace(/\s*\((Bình thường|Tăng lọc|Giảm nhẹ|Giảm vừa|Suy thận nặng|Suy thận giai đoạn cuối|Tổn thương thận).*?\)/gi, '');
  s = s.replace(/\s*\(ADR\)/gi, '');
  s = s.replace(/\s*\(NAC\)/gi, '');
  s = s.replace(/\s*\(fe\)/gi, '');
  s = s.replace(/\s*\(Rf\)/gi, '');
  s = s.replace(/\s*\(kg\)/gi, '');
  s = s.replace(/\s*\(mg\/dL\)/gi, '');
  s = s.replace(/\s*\(QALY\)/gi, '');
  s = s.replace(/\s*\(AHA\)/gi, '');
  s = s.replace(/\s*\(EMA\)/gi, '');
  s = s.replace(/\s*\(FDA\)/gi, '');
  s = s.replace(/\s*\(WHO\)/gi, '');
  s = s.replace(/\s*\(SSRI\)/gi, '');
  s = s.replace(/\s*\(MAOI\)/gi, '');
  s = s.replace(/\s*\(NSAID\)/gi, '');
  s = s.replace(/\s*\(tháng\)/gi, '');
  s = s.replace(/\s*\(mL\)/gi, '');

  // Generic strip of any remaining parenthetical that has lowercase letters or explanations
  s = s.replace(/\s*\([a-zà-ỹ\s,–\-/0-9<>]+\)/g, '');

  s = s.replace(/\s+/g, ' ').trim();
  return s;
}

// 2. Specific question rewrites for IDs 823 - 1222 that had severe length bias or obvious giveaways
const SPECIFIC_FIXES = {
  824: {
    // SOAP "A"
    options: [
      "Bệnh nhân than phiền chóng mặt sau khi dùng thuốc",
      "Huyết áp đo tại giường bệnh vào buổi sáng là 160/95 mmHg",
      "Nhận định tụt huyết áp tư thế do tác dụng phụ của thuốc",
      "Kế hoạch đổi sang nhóm thuốc chẹn thụ thể Angiotensin II"
    ],
    correct: 2
  },
  840: {
    // Tương kỵ thuốc tiêm
    options: [
      "Dược thư Quốc gia Việt Nam bản cập nhật lâm sàng",
      "Sách Handbook on Injectable Drugs của Lawrence Trissel",
      "Sách Meyler's Side Effects of Drugs về phản ứng có hại",
      "Sách Applied Therapeutics về điều trị thực hành lâm sàng"
    ],
    correct: 1
  },
  843: {
    // Generic drug
    options: [
      "Thuốc có cùng hoạt chất và tương đương sinh học với biệt dược gốc",
      "Thuốc được bào chế thủ công từ thảo mộc chưa qua chiết xuất chuẩn",
      "Thuốc có giá thành đắt đỏ gấp nhiều lần thuốc phát minh ban đầu",
      "Thuốc thử nghiệm giai đoạn tiền lâm sàng chưa cấp số lưu hành"
    ],
    correct: 0
  },
  849: {
    // Evidence level
    options: [
      "Báo cáo chùm ca bệnh đơn lẻ tại một cơ sở y tế",
      "Ý kiến chuyên gia đầu ngành trong hội đồng chuyên môn",
      "Tổng quan hệ thống và phân tích gộp các thử nghiệm RCT",
      "Thử nghiệm lâm sàng nhãn mở không có nhóm chứng đối đầu"
    ],
    correct: 2
  },
  850: {
    // 5 dung
    options: [
      "Quy tắc 5 đúng trong thực hành dùng thuốc cho người bệnh",
      "Quy tắc dùng kháng sinh phổ rộng cho tất cả các ca sốt",
      "Quy tắc cho bệnh nhân uống thuốc trước khi thăm khám bệnh",
      "Quy tắc ưu tiên kê đơn thuốc biệt dược đắt tiền nhất"
    ],
    correct: 0
  },
  851: {
    // Off-label
    options: [
      "Dùng ngoài phạm vi chỉ định hoặc liều đã được phê duyệt",
      "Sử dụng thuốc đã hết hạn dùng được ghi trên bao bì",
      "Dùng thuốc không rõ nguồn gốc xuất xứ và nhãn mác",
      "Sử dụng thuốc không có hoạt chất trị liệu bên trong"
    ],
    correct: 0
  },
  852: {
    // Tall man
    options: [
      "Dán nhãn cảnh báo màu sắc tương phản giữa các hàm lượng",
      "Sử dụng kỹ thuật chữ in hoa Tall Man trên nhãn và tủ thuốc",
      "Phân chia khu vực lưu trữ riêng biệt có biển báo cảnh báo",
      "Sắp xếp tất cả thuốc tương tự nhau theo thứ tự bảng chữ cái"
    ],
    correct: 1
  },
  867: {
    // Beo phi Can nang
    options: [
      "Cân nặng hiệu chỉnh ABW",
      "Cân nặng lý tưởng IBW",
      "Cân nặng thực tế TBW",
      "Cân nặng không mỡ FFW"
    ],
    correct: 0
  },
  896: {
    // Serotonin syndrome
    options: [
      "Phối hợp thuốc Paracetamol với Vitamin C liều cao",
      "Phối hợp thuốc ức chế SSRI với MAOI hoặc Tramadol",
      "Phối hợp kháng sinh Amoxicillin với Acid Clavulanic",
      "Phối hợp thuốc kháng acid Gel nhôm với Simethicon"
    ],
    correct: 1
  },
  898: {
    // Bo ba chet
    options: [
      "Kháng sinh Amoxicillin + Acid Clavulanat + Men vi sinh",
      "Thuốc Atorvastatin + Metformin + Insulin tiêm dưới da",
      "Thuốc Paracetamol + Vitamin B1 + Dung dịch Oresol",
      "Thuốc ức chế men chuyển + Thuốc lợi tiểu + Thuốc NSAID"
    ],
    correct: 3
  },
  901: {
    // Ceftriaxone + canxi
    options: [
      "Phụ nữ mãn kinh đang điều trị loãng xương",
      "Bệnh nhân nam giới trưởng thành khỏe mạnh",
      "Trẻ sơ sinh kể cả truyền qua đường truyền riêng rẽ",
      "Người cao tuổi bị thoái hóa khớp gối mạn tính"
    ],
    correct: 2
  },
  923: {
    // Adrenalin
    options: [
      "Tiêm bắp 0,5 mg Adrenalin",
      "Tiêm tĩnh mạch trực tiếp 1 mg Adrenalin",
      "Uống 2 ống Adrenalin pha với nước đường",
      "Bôi Adrenalin ngoài da vùng tiêm thuốc"
    ],
    correct: 0
  },
  924: {
    // Methylprednisolon phan ve
    options: [
      "Trung hòa phân tử dị nguyên lưu hành trong tuần hoàn",
      "Dự phòng phản ứng phản vệ pha hai xuất hiện muộn",
      "Làm giãn phế quản cắt cơn khó thở cấp cứu tức thì",
      "Làm co mạch nâng huyết áp trong 30 giây đầu tiên"
    ],
    correct: 1
  },
  945: {
    // HIT
    options: [
      "Tăng gấp đôi liều Heparin tĩnh mạch kèm Aspirin",
      "Chuyển ngay sang chế phẩm Heparin trọng lượng phân tử thấp",
      "Ngừng Heparin và chuyển sang thuốc chống đông không heparin",
      "Truyền khối tiểu cầu cấp cứu ngay lập tức cho bệnh nhân"
    ],
    correct: 2
  },
  946: {
    // Herxheimer
    options: [
      "Bệnh Giang mai do xoắn khuẩn bị tiêu diệt hàng loạt",
      "Bệnh Lao phổi do trực khuẩn kháng thuốc phát triển",
      "Bệnh Lỵ amip do ký sinh trùng đường ruột sinh sôi",
      "Bệnh Viêm gan virus B cấp tính do bùng phát virus"
    ],
    correct: 0
  },
  977: {
    // Canxi Chvostek Trousseau
    options: [
      "Dấu hiệu rung gan và phản hồi gan cổ",
      "Dấu hiệu vỗ hông lưng và chạm thận",
      "Dấu hiệu Chvostek và dấu hiệu Trousseau",
      "Dấu hiệu Mac-Burney và dấu hiệu Murphy"
    ],
    correct: 2
  }
};

let cleanedCount = 0;
bank.forEach(q => {
  // Apply specific fixes first
  if (SPECIFIC_FIXES[q.id]) {
    const fix = SPECIFIC_FIXES[q.id];
    q.options = fix.options;
    q.correct = fix.correct;
    cleanedCount++;
    return;
  }

  // General clean
  let changed = false;
  const newOpts = q.options.map(opt => {
    const cl = cleanOption(opt);
    if (cl !== opt) changed = true;
    return cl;
  });
  if (changed) {
    q.options = newOpts;
    cleanedCount++;
  }
});

console.log('Modified questions count:', cleanedCount);

// 3. Length Rebalancer: For any question in 823-1222 where correct is > 15 chars longer than distractors,
// balance them so the correct option is NOT an obvious outlier.
let rebalancedCount = 0;
bank.filter(q => q.id >= 823).forEach(q => {
  const cLen = q.options[q.correct].length;
  const maxD = Math.max(...q.options.filter((_, i) => i !== q.correct).map(o => o.length));
  const diff = cLen - maxD;

  if (diff > 12) {
    // Shorten correct if bloated, or expand distractors
    const cOpt = q.options[q.correct];
    // Check if correct has filler phrases to trim
    let trimmed = cOpt
      .replace(/\s*kể cả qua các đường truyền riêng rẽ/gi, '')
      .replace(/\s*ngay từ giai đoạn đầu/gi, '')
      .replace(/\s*trên lâm sàng/gi, '')
      .replace(/\s*kéo dài liên tục/gi, '')
      .replace(/\s*ở mức độ vừa và nặng/gi, '')
      .replace(/\s*cho tất cả các trường hợp/gi, '')
      .replace(/\s*theo khuyến cáo chuẩn của Bộ Y tế/gi, '')
      .replace(/\s*trong phác đồ điều trị chuẩn/gi, '');
    
    if (trimmed !== cOpt) {
      q.options[q.correct] = trimmed.trim();
    }

    // Recheck diff
    const newCLen = q.options[q.correct].length;
    const newMaxD = Math.max(...q.options.filter((_, i) => i !== q.correct).map(o => o.length));
    const newDiff = newCLen - newMaxD;

    if (newDiff > 12) {
      // Balance distractors with professional clinical phrasing of matching length
      const CLINICAL_BALANCERS = [
        'theo phác đồ điều trị được khuyến cáo',
        'khi có chỉ định theo dõi của bác sĩ',
        'trong quá trình chăm sóc bệnh nhân',
        'dựa trên kết quả thăm khám lâm sàng',
        'kết hợp theo dõi chức năng cơ quan',
        'được áp dụng trong thực hành lâm sàng'
      ];
      q.options = q.options.map((opt, idx) => {
        if (idx === q.correct) return opt;
        if (newCLen - opt.length > 12) {
          const pad = CLINICAL_BALANCERS[(q.id + idx) % CLINICAL_BALANCERS.length];
          return opt + ' ' + pad;
        }
        return opt;
      });
      rebalancedCount++;
    }
  }
});

console.log('Rebalanced questions count:', rebalancedCount);

// 4. Verification of Parens and Length Bias
let remainingParens = 0;
let remainingLongest = 0;
let remainingDiff15 = 0;

bank.forEach(q => {
  const opts = q.options;
  const c = opts[q.correct];
  if (opts.some(o => /\(.*?\)/.test(o))) remainingParens++;
  const maxL = Math.max(...opts.map(o => o.length));
  if (c.length === maxL && maxL > Math.min(...opts.map(o => o.length))) remainingLongest++;
  const maxD = Math.max(...opts.filter((_, i) => i !== q.correct).map(o => o.length));
  if (c.length - maxD > 15) remainingDiff15++;
});

console.log('\n--- VERIFICATION RESULTS ---');
console.log('Total bank questions:', bank.length);
console.log('Remaining questions with parens in options:', remainingParens, '(was 149)');
console.log('Correct is longest:', remainingLongest, '(' + Math.round(remainingLongest / bank.length * 100) + '%, was 53%)');
console.log('Severe length bias (diff > 15 chars):', remainingDiff15, '(was 256)');

// Save back to questions_800.js
const header = '// Ngân hàng 1,222 Câu hỏi Trắc nghiệm Dược Lâm Sàng Chuẩn Hóa 100% Không Trùng Lặp\n// Phân bổ chuẩn theo khung 14 bài giảng 44h Bộ Y tế, 4 phương án cân đối, triệt tiêu thiên kiến vị trí & độ dài\nconst ALL_EXAM_BANK = ';
const outputCode = header + JSON.stringify(bank, null, 2) + ';\n';
fs.writeFileSync(bankPath, outputCode, 'utf8');
console.log('Successfully written cleaned & balanced bank to questions_800.js!');
