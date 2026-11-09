const fs = require('fs');
const path = require('path');

function cleanOptionText(text) {
  if (!text || typeof text !== 'string') return text;

  let cleaned = text;

  // 1. Remove parenthetical examples or abbreviations like (như Amlodipin, Nifedipin) or (Prazosin, Doxazosin) or (ACEI)
  cleaned = cleaned.replace(/\s*\((?:như|ví dụ|tỷ lệ|khoảng|đặc biệt|kể cả|gồm)[^)]*\)/gi, '');
  
  // 2. Remove parenthetical drug lists like (Prazosin, Doxazosin) or (Propranolol) or (Amlodipin)
  // If it's a parenthesis with capitalized drug names:
  cleaned = cleaned.replace(/\s*\([A-ZÀ-Ỹa-zà-ỹ0-9\s,–\-\/\+]+(?:dipin|sartan|olol|pril|statin|xacin|mycin|cillin|prazole|tidine|terol|mab)[^)]*\)/gi, '');
  
  // 3. Clean scientific parentheses where they can just be bare: (Na+) -> Na+, (Ca2+) -> Ca2+, (K+) -> K+, (NO) -> NO
  cleaned = cleaned.replace(/\((Na\+|K\+|Ca2\+|Cl\-|Mg2\+|Fe2\+|Fe3\+|NO|cGMP|cAMP|GABA|ICS|SABA|LABA|LAMA|SAMA|ACEI|ARB|CCB|NSAID|EPO|PTU|DEC|BAL|PAM|ACT|TSH|ACTH|FSH|LH|GH|ADH|PTH|dAMP|dTMP|dUMP|dCMP|ATP|ADP|AMP|PP|B1|B2|B3|B5|B6|B9|B12|C|D|E|K|A)\)/g, '$1');
  
  // 4. Remove generic parentheses with abbreviations like (PDE-3) -> PDE-3, (MAO) -> MAO, (AChE) -> AChE
  cleaned = cleaned.replace(/\(([A-Z0-9\-\+]{2,8})\)/g, '$1');
  
  // 5. Clean (dây X) -> dây X, (dưới 20%) -> dưới 20%
  cleaned = cleaned.replace(/\((dưới|trên|khoảng|dây X|gấp)[^)]*\)/gi, '');

  // 6. Clean any remaining parentheses if it's just extra hints:
  cleaned = cleaned.replace(/\s*\([^\)]*\)/g, '');

  // Clean double spaces
  cleaned = cleaned.replace(/\s{2,}/g, ' ').trim();

  return cleaned;
}

// Test on some examples
const tests = [
  "Thuốc chẹn thụ thể alpha-1 giao cảm (Prazosin, Doxazosin)",
  "Thuốc chẹn beta giao cảm không chọn lọc (Propranolol)",
  "Thuốc ức chế men chuyển (ACEI) hoặc thuốc chẹn thụ thể (ARB)",
  "Chẹn kênh natri (Na+) phụ thuộc điện thế ở màng tế bào cơ tim",
  "Nitric oxid (NO) kích hoạt guanylyl cyclase làm tăng GMP vòng (cGMP)",
  "Kích thích dây thần kinh phế vị (dây X) và giảm tính tự động của nút xoang",
  "Phosphodiesterase typ III (PDE-3)",
  "Bảo vệ niêm mạc (như Sucralfat, Bismuth)"
];

console.log("=== SANITIZER TEST ===");
tests.forEach(t => {
  console.log(`Original: "${t}"`);
  console.log(`Cleaned:  "${cleanOptionText(t)}"\n`);
});
