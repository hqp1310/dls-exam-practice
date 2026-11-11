const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '..', 'cheatsheet_duocly2.js');
const c = fs.readFileSync(targetPath, 'utf8');

const chapters = [];
for (let i = 1; i <= 20; i++) {
  const startTag = `<div class="chapter-accordion-body" id="dl2-body-dl2_ch${i}">`;
  const pos = c.indexOf(startTag);
  chapters.push({ num: i, startTag, pos });
}

chapters.forEach((ch, idx) => {
  const nextPos = (idx < 19) ? chapters[idx + 1].pos : c.indexOf('<!-- PHẦN 2: BẢNG TRA CỨU HOẠT CHẤT');
  console.log(`Bài ${ch.num}: start at ${ch.pos}, end at ${nextPos}, length = ${nextPos - ch.pos}`);
});
