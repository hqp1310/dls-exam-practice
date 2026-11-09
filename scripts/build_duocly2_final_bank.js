const fs = require('fs');
const path = require('path');

const files = [
  'part1_cardio.js', 'part2_renal_gi_resp_histamine.js', 'part3_lipid_parasites_malaria.js',
  'part4_endocrine_blood.js', 'part5_virus_cancer_poison_vitamin.js',
  'expansion_part1.js', 'expansion_part2.js', 'expansion_part3.js',
  'expansion_part4.js', 'expansion_part5.js',
  'more_cardio_renal.js', 'more_parasite_endocrine.js', 'more_virus_cancer_poison.js',
  'clinical_vignettes.js',
  'deep_pool_a.js', 'deep_pool_b.js', 'deep_pool_c.js', 'deep_pool_d.js', 'deep_pool_e.js', 'deep_pool_f.js'
];

function cleanOptionText(text) {
  if (!text || typeof text !== 'string') return text;
  let cleaned = text;

  // 1. Remove parenthetical examples or abbreviations like (như Amlodipin, Nifedipin) or (Prazosin, Doxazosin) or (ACEI)
  cleaned = cleaned.replace(/\s*\((?:như|ví dụ|tỷ lệ|khoảng|đặc biệt|kể cả|gồm)[^)]*\)/gi, '');
  
  // 2. Remove parenthetical drug lists like (Prazosin, Doxazosin) or (Propranolol) or (Amlodipin)
  cleaned = cleaned.replace(/\s*\([A-ZÀ-Ỹa-zà-ỹ0-9\s,–\-\/\+]+(?:dipin|sartan|olol|pril|statin|xacin|mycin|cillin|prazole|tidine|terol|mab)[^)]*\)/gi, '');
  
  // 3. Clean scientific parentheses where they can just be bare: (Na+) -> Na+, (Ca2+) -> Ca2+
  cleaned = cleaned.replace(/\((Na\+|K\+|Ca2\+|Cl\-|Mg2\+|Fe2\+|Fe3\+|NO|cGMP|cAMP|GABA|ICS|SABA|LABA|LAMA|SAMA|ACEI|ARB|CCB|NSAID|EPO|PTU|DEC|BAL|PAM|ACT|TSH|ACTH|FSH|LH|GH|ADH|PTH|dAMP|dTMP|dUMP|dCMP|ATP|ADP|AMP|PP|B1|B2|B3|B5|B6|B9|B12|C|D|E|K|A)\)/g, '$1');
  
  // 4. Remove generic parentheses with abbreviations like (PDE-3) -> PDE-3
  cleaned = cleaned.replace(/\(([A-Z0-9\-\+]{2,8})\)/g, '$1');
  
  // 5. Clean (dây X) -> dây X, (dưới 20%) -> dưới 20%
  cleaned = cleaned.replace(/\((dưới|trên|khoảng|dây X|gấp)[^)]*\)/gi, '');

  // 6. Clean any remaining parentheses if it's just extra hints:
  cleaned = cleaned.replace(/\s*\([^\)]*\)/g, '');

  // Clean double spaces
  cleaned = cleaned.replace(/\s{2,}/g, ' ').trim();

  return cleaned;
}

// Pseudo-random deterministic shuffle with seed
function shuffleOptions(options, correctIdx, seed) {
  const originalCorrect = options[correctIdx];
  const items = options.map((opt, i) => ({ opt, isCorrect: i === correctIdx }));

  // Deterministic permutation based on question seed
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(((seed * 9301 + 49297) % 233280) / 233280 * (i + 1));
    seed = (seed * 9301 + 49297) % 233280;
    const temp = items[i];
    items[i] = items[j];
    items[j] = temp;
  }

  const newOptions = items.map(x => x.opt);
  const newCorrectIdx = items.findIndex(x => x.isCorrect);

  return { options: newOptions, correct: newCorrectIdx };
}

let rawList = [];
files.forEach(f => {
  const filePath = path.join(__dirname, 'duocly2_data', f);
  if (fs.existsSync(filePath)) {
    const data = require(filePath);
    rawList = rawList.concat(data);
  }
});

console.log(`Loaded ${rawList.length} raw questions.`);

// Chapter mapping normalization to strictly match syllabus 20 lessons
const CHAPTER_CANONICAL = {
  'Thuốc trợ tim': 'Thuốc trợ tim',
  'Thuốc điều trị THA': 'Thuốc điều trị THA',
  'Thuốc chữa CĐTN': 'Thuốc chữa CĐTN',
  'Thuốc chống loạn nhịp': 'Thuốc chống loạn nhịp',
  'Thuốc lợi niệu': 'Thuốc lợi niệu',
  'Thuốc điều trị DDTT': 'Thuốc điều trị DDTT',
  'Thuốc chống giun sán, amibe': 'Thuốc chống giun sán, amibe',
  'Thuốc ĐC RLHH': 'Thuốc ĐC RLHH',
  'Thuốc kháng H1': 'Thuốc kháng H1',
  'Thuốc hạ lipid máu': 'Thuốc hạ lipid máu',
  'Thuốc chống sốt rét': 'Thuốc chống sốt rét',
  'KTGHP': 'KTGHP',
  'Hormon': 'Hormon',
  'Thuốc hạ glucose máu': 'Thuốc hạ glucose máu',
  'Thuốc/QT đông cầm máu': 'Thuốc/QT đông cầm máu',
  'Vitamin': 'Vitamin',
  'Thuốc chữa thiếu máu': 'Thuốc chữa thiếu máu',
  'Thuốc kháng virus': 'Thuốc kháng virus',
  'Thuốc chống ung thư': 'Thuốc chống ung thư',
  'Thuốc/trong điều trị ngộ độc': 'Thuốc/trong điều trị ngộ độc'
};

const finalBank = [];
let nextId = 1;
const correctStats = [0, 0, 0, 0];
const chapterCounts = {};

rawList.forEach((q, idx) => {
  const normChapter = CHAPTER_CANONICAL[q.chapter] || q.chapter;
  chapterCounts[normChapter] = (chapterCounts[normChapter] || 0) + 1;

  // Clean options
  const cleanedOpts = q.options.map(opt => cleanOptionText(opt));

  // Shuffle options evenly
  const shuffled = shuffleOptions(cleanedOpts, q.correct, idx * 37 + 13);
  correctStats[shuffled.correct]++;

  finalBank.push({
    id: nextId++,
    subject: "duocly2",
    chapter: normChapter,
    level: q.level || "Vận dụng",
    source: "BYT",
    sourceName: "Giáo trình Dược lý 2 Bộ Y tế",
    question: q.question.trim(),
    options: shuffled.options,
    correct: shuffled.correct,
    explanation: q.explanation.trim(),
    reference: q.reference || "Sách Dược lý 2"
  });
});

console.log(`\n=== FINAL BANK COMPILED ===`);
console.log(`Total questions: ${finalBank.length}`);
console.log(`Options distribution: A: ${correctStats[0]}, B: ${correctStats[1]}, C: ${correctStats[2]}, D: ${correctStats[3]}`);
console.log(`Chapter distribution:`, chapterCounts);

// Export to questions_duocly2.js
const fileContent = `// NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM DƯỢC LÝ 2 CHUẨN BỘ Y TẾ (${finalBank.length} CÂU)
// Đào tạo Dược sĩ Đại học - Bác sĩ Đa khoa (Bộ Y tế - PGS.TS. Mai Tất Tố, TS. Vũ Thị Trâm)
// Chuẩn khung 20 bài (32 tiết) - 100% không mở ngoặc đơn lộ đáp án - Đáp án xáo trộn đều A/B/C/D
const DUOCLY2_EXAM_BANK = ${JSON.stringify(finalBank, null, 2)};

// Cấu trúc phân bổ 60 câu thi chuẩn 60 phút theo khung 32 tiết:
const DUOCLY2_MATRIX_32H = [
  { chapter: "Thuốc trợ tim", lesson: "Bài 1", hours: 2, count: 4 },
  { chapter: "Thuốc điều trị THA", lesson: "Bài 2", hours: 2, count: 4 },
  { chapter: "Thuốc chữa CĐTN", lesson: "Bài 3", hours: 1, count: 2 },
  { chapter: "Thuốc chống loạn nhịp", lesson: "Bài 4", hours: 1, count: 2 },
  { chapter: "Thuốc lợi niệu", lesson: "Bài 5", hours: 2, count: 4 },
  { chapter: "Thuốc điều trị DDTT", lesson: "Bài 6", hours: 2, count: 4 },
  { chapter: "Thuốc chống giun sán, amibe", lesson: "Bài 7", hours: 2, count: 4 },
  { chapter: "Thuốc ĐC RLHH", lesson: "Bài 8", hours: 1, count: 2 },
  { chapter: "Thuốc kháng H1", lesson: "Bài 9", hours: 1, count: 2 },
  { chapter: "Thuốc hạ lipid máu", lesson: "Bài 10", hours: 2, count: 4 },
  { chapter: "Thuốc chống sốt rét", lesson: "Bài 11", hours: 2, count: 4 },
  { chapter: "KTGHP", lesson: "Bài 12", hours: 1, count: 2 },
  { chapter: "Hormon", lesson: "Bài 13", hours: 3, count: 6 },
  { chapter: "Thuốc hạ glucose máu", lesson: "Bài 14", hours: 2, count: 4 },
  { chapter: "Thuốc/QT đông cầm máu", lesson: "Bài 15", hours: 2, count: 4 },
  { chapter: "Vitamin", lesson: "Bài 16", hours: 0, count: 2 },
  { chapter: "Thuốc chữa thiếu máu", lesson: "Bài 17", hours: 2, count: 3 },
  { chapter: "Thuốc kháng virus", lesson: "Bài 18", hours: 2, count: 4 },
  { chapter: "Thuốc chống ung thư", lesson: "Bài 19", hours: 1, count: 2 },
  { chapter: "Thuốc/trong điều trị ngộ độc", lesson: "Bài 20", hours: 1, count: 3 }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DUOCLY2_EXAM_BANK, DUOCLY2_MATRIX_32H };
}

`;

const outputPath = path.join(__dirname, '..', 'questions_duocly2.js');
fs.writeFileSync(outputPath, fileContent, 'utf8');
console.log(`\nSuccessfully written to ${outputPath} (${(fs.statSync(outputPath).size / 1024).toFixed(1)} KB)`);
