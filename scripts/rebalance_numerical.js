const fs = require('fs');
const path = require('path');

const bankPath = path.join(__dirname, '..', 'questions_800.js');
const code = fs.readFileSync(bankPath, 'utf8');
eval(code.replace('const ALL_EXAM_BANK', 'global.ALL_EXAM_BANK'));
const bank = global.ALL_EXAM_BANK;

console.log('Total bank questions:', bank.length);

// Select middle-biased numerical questions and rebalance their distractors
// so the correct answer lands at MIN or MAX
const NUMERICAL_FIXES = {
  // ID 52: t1/2 Css = 5
  52: {
    options: ['Khoảng 1 lần', 'Khoảng 2 lần', 'Khoảng 3 lần', 'Khoảng 5 lần'],
    correct: 3 // Max
  },
  // ID 53: 99% thải trừ = 7 t1/2
  53: {
    options: ['Khoảng 2 lần', 'Khoảng 3 lần', 'Khoảng 5 lần', 'Khoảng 7 lần'],
    correct: 3 // Max
  },
  // ID 61: Css = 20 / 4 = 5 mg/L
  61: {
    options: ['5 mg/L', '10 mg/L', '20 mg/L', '80 mg/L'],
    correct: 0 // Min
  },
  // ID 71: CrCl = 45.7 mL/min
  71: {
    options: ['45,7 mL/phút', '53,8 mL/phút', '68,2 mL/phút', '85,6 mL/phút'],
    correct: 0 // Min
  },
  // ID 7: WHO số thuốc TB = 1.5 - 2.0
  7: {
    options: ['Khoảng 1,5 thuốc', 'Khoảng 3,0 thuốc', 'Khoảng 4,5 thuốc', 'Khoảng 6,0 thuốc'],
    correct: 0 // Min
  },
  // ID 8: WHO kháng sinh = 20-30%
  8: {
    options: ['Khoảng 5% đến 10%', 'Khoảng 10% đến 15%', 'Khoảng 15% đến 20%', 'Khoảng 20% đến 30%'],
    correct: 3 // Max
  },
  // ID 9: WHO thuốc tiêm = 20% (dưới 20%)
  9: {
    options: ['Khoảng 20%', 'Khoảng 35%', 'Khoảng 50%', 'Khoảng 65%'],
    correct: 0 // Min
  },
  // ID 100: Liều nạp Procainamid = 720 mg
  100: {
    options: ['720 mg', '960 mg', '1200 mg', '1500 mg'],
    correct: 0 // Min
  },
  // ID 101: T1/2 = 4h
  101: {
    options: ['1 giờ', '2 giờ', '3 giờ', '4 giờ'],
    correct: 3 // Max
  },
  // ID 102: Vd = 35 L
  102: {
    options: ['35 L', '50 L', '70 L', '100 L'],
    correct: 0 // Min
  },
  // ID 103: Cl = 5 L/h
  103: {
    options: ['1,2 L/h', '2,5 L/h', '3,8 L/h', '5,0 L/h'],
    correct: 3 // Max
  },
  // ID 104: AUC = 120
  104: {
    options: ['120 mg.h/L', '180 mg.h/L', '240 mg.h/L', '300 mg.h/L'],
    correct: 0 // Min
  },
  // ID 105: F = 80%
  105: {
    options: ['30%', '45%', '60%', '80%'],
    correct: 3 // Max
  },
  // ID 106: T1/2 suy thận = 24h
  106: {
    options: ['24 giờ', '36 giờ', '48 giờ', '72 giờ'],
    correct: 0 // Min
  },
  // ID 107: Liều duy trì = 250 mg
  107: {
    options: ['50 mg', '100 mg', '150 mg', '250 mg'],
    correct: 3 // Max
  },
  // ID 108: Khoảng cách liều = 12h
  108: {
    options: ['12 giờ', '18 giờ', '24 giờ', '36 giờ'],
    correct: 0 // Min
  },
  // ID 109: Nồng độ đáy Cmin = 1.0 mcg/mL
  109: {
    options: ['0,2 mcg/mL', '0,5 mcg/mL', '0,8 mcg/mL', '1,0 mcg/mL'],
    correct: 3 // Max
  },
  // ID 110: Nồng độ đỉnh Cmax = 25 mcg/mL
  110: {
    options: ['25 mcg/mL', '35 mcg/mL', '45 mcg/mL', '60 mcg/mL'],
    correct: 0 // Min
  },
  // ID 111: T1/2 thải trừ = 8h
  111: {
    options: ['2 giờ', '4 giờ', '6 giờ', '8 giờ'],
    correct: 3 // Max
  },
  // ID 112: Tỷ lệ liên kết protein = 90%
  112: {
    options: ['90%', '95%', '98%', '99%'],
    correct: 0 // Min
  },
  // ID 113: Tỷ lệ đào thải qua thận = 75%
  113: {
    options: ['25%', '40%', '55%', '75%'],
    correct: 3 // Max
  },
  // ID 114: Độ thanh thải thận = 60 mL/phút
  114: {
    options: ['60 mL/phút', '80 mL/phút', '100 mL/phút', '120 mL/phút'],
    correct: 0 // Min
  },
  // ID 115: Thể tích phân bố = 0.6 L/kg
  115: {
    options: ['0,1 L/kg', '0,2 L/kg', '0,4 L/kg', '0,6 L/kg'],
    correct: 3 // Max
  },
  // ID 116: Hệ số chiết tách gan = 0.2
  116: {
    options: ['0,2', '0,4', '0,6', '0,8'],
    correct: 0 // Min
  },
  // ID 117: Sinh khả dụng tuyệt đối = 70%
  117: {
    options: ['25%', '40%', '55%', '70%'],
    correct: 3 // Max
  },
  // ID 118: Nồng độ ổn định Css = 15 mg/L
  118: {
    options: ['15 mg/L', '25 mg/L', '35 mg/L', '50 mg/L'],
    correct: 0 // Min
  },
  // ID 119: Tốc độ thải trừ = 0.1 h^-1
  119: {
    options: ['0,02 h^-1', '0,05 h^-1', '0,08 h^-1', '0,10 h^-1'],
    correct: 3 // Max
  },
  // ID 120: Tỷ lệ giảm liều ở suy thận = 50%
  120: {
    options: ['50%', '65%', '75%', '85%'],
    correct: 0 // Min
  }
};

let numFixed = 0;
bank.forEach(q => {
  if (NUMERICAL_FIXES[q.id]) {
    q.options = NUMERICAL_FIXES[q.id].options;
    q.correct = NUMERICAL_FIXES[q.id].correct;
    numFixed++;
  }
});

console.log('Numerical questions rebalanced:', numFixed);

// Re-check numerical distribution
const numQ = [];
bank.forEach(q => {
  const nums = q.options.map(o => {
    const m = o.match(/[-+]?[0-9]*\.?[0-9]+/);
    return m ? parseFloat(m[0]) : null;
  });
  if (nums.every(n => n !== null)) {
    numQ.push({ id: q.id, options: q.options, correct: q.correct, nums });
  }
});

let isMin = 0, isMax = 0, isMiddle = 0;
numQ.forEach(q => {
  const sorted = [...q.nums].sort((a, b) => a - b);
  const correctVal = q.nums[q.correct];
  if (correctVal === sorted[0]) isMin++;
  else if (correctVal === sorted[sorted.length - 1]) isMax++;
  else isMiddle++;
});

console.log('\n--- NEW NUMERICAL DISTRIBUTION (Total ' + numQ.length + ' questions) ---');
console.log('Correct is MIN value:', isMin, '(' + Math.round(isMin / numQ.length * 100) + '%, was 17%)');
console.log('Correct is MAX value:', isMax, '(' + Math.round(isMax / numQ.length * 100) + '%, was 11%)');
console.log('Correct is MIDDLE value:', isMiddle, '(' + Math.round(isMiddle / numQ.length * 100) + '%, was 73%)');

// Save back to questions_800.js
const header = '// Ngân hàng 1,222 Câu hỏi Trắc nghiệm Dược Lâm Sàng Chuẩn Hóa 100% Không Trùng Lặp\n// Phân bổ chuẩn theo khung 14 bài giảng 44h Bộ Y tế, 4 phương án cân đối, triệt tiêu thiên kiến vị trí & độ dài\nconst ALL_EXAM_BANK = ';
const outputCode = header + JSON.stringify(bank, null, 2) + ';\n';
fs.writeFileSync(bankPath, outputCode, 'utf8');
console.log('Successfully written updated questions to questions_800.js!');
