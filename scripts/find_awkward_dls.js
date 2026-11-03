const bank = require('../questions_800.js');
const dls = bank.filter(q => q.source === 'DLS_PDF');

console.log('Inspecting DLS_PDF questions for long or awkward options...');
const awkward = [];

dls.forEach(q => {
  q.options.forEach((opt, idx) => {
    // Check if option contains joke words or excessively long text
    if (/phẫu thuật ngoại khoa thay|bảo dưỡng|thanh toán viện phí|dập viên nén|đông dược cổ truyền/i.test(opt)) {
      awkward.push({ id: q.id, optIdx: idx, opt, q: q.question });
    }
  });
});

console.log('Found awkward options in DLS_PDF:', awkward.length);
awkward.forEach(a => {
  console.log(`\nID ${a.id}: Option [${a.optIdx}]: ${a.opt}`);
  console.log(`  Q: ${a.q}`);
});
