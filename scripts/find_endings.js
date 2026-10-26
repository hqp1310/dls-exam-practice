const fs = require('fs');
const code = fs.readFileSync('questions_800.js', 'utf8');
const bank = eval(code.match(/const ALL_EXAM_BANK = (\[[\s\S]*\]);/)[1]);

const endings = {};

bank.forEach(q => {
  q.options.forEach(opt => {
    // Check phrases at the end of options
    const m = opt.match(/(?:trong quá trình|theo phác đồ|kết hợp theo dõi|kéo dài|ở mức độ|sau khi|theo khuyến cáo|trên lâm sàng|ở người bệnh|khi có chỉ định).*$/i);
    if (m) {
      const phrase = m[0].trim();
      endings[phrase] = (endings[phrase] || 0) + 1;
    }
  });
});

const sorted = Object.entries(endings).sort((a,b) => b[1] - a[1]);
console.log('Top cliché endings:');
sorted.slice(0, 30).forEach(([phrase, count]) => {
  console.log(`[${count}x]: "${phrase}"`);
});
