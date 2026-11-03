const bank = require('../questions_800.js');

const patterns = [
  /dập viên nén/i,
  /thanh toán viện phí/i,
  /đông dược cổ truyền/i,
  /động vật gặm nhấm/i,
  /máy xạ trị/i,
  /thống kê chi phí viện phí/i,
  /hoa hồng chiết khấu/i,
  /doanh số bán thuốc/i,
  /doanh thu bán lẻ/i,
  /bán thuốc cho các cơ sở/i,
  /lưu bệnh án nhằm tăng lượt khám/i,
  /hạn chế tối đa thời gian trao đổi/i
];

console.log('Scanning bank for awkward/unrealistic distractors...');

const awkward = [];
bank.forEach(q => {
  q.options.forEach((o, i) => {
    if (i !== q.correct) {
      for (const p of patterns) {
        if (p.test(o)) {
          awkward.push({ id: q.id, chapter: q.chapter, idx: i, opt: o, q: q.question, correct: q.options[q.correct] });
          break;
        }
      }
    }
  });
});

console.log('Total awkward distractors found:', awkward.length);
awkward.forEach(a => {
  console.log(`\nID ${a.id} [${a.chapter}]:`);
  console.log(`  Q: ${a.q}`);
  console.log(`  Awkward Opt [${['A','B','C','D'][a.idx]}]: ${a.opt}`);
  console.log(`  Correct Opt: ${a.correct}`);
});
