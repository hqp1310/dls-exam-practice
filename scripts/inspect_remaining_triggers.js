const fs = require('fs');
const path = require('path');

const { patchBatch1 } = require('./patch_batch1.js');
const { patchBatch2 } = require('./patch_batch2.js');
const { patchBatch3 } = require('./patch_batch3.js');
const { patchBatch4 } = require('./patch_batch4.js');

const allPatches = {
  ...patchBatch1,
  ...patchBatch2,
  ...patchBatch3,
  ...patchBatch4
};

const bankFile = path.join(__dirname, '..', 'questions_duocly2.js');
const { DUOCLY2_EXAM_BANK } = require(bankFile);

DUOCLY2_EXAM_BANK.forEach(q => {
  if (allPatches[q.id]) {
    q.options = allPatches[q.id];
  }
});

const TRIGGERS = [/nhằm\s+/i, /giúp\s+/i, /qua đó\s+/i, /bằng cách\s+/i, /dẫn đến\s+/i, /do đó\s+/i, /để\s+/i, /theo dõi chặt chẽ/i];

const matches = [];
DUOCLY2_EXAM_BANK.forEach(q => {
  q.options.forEach((opt, idx) => {
    for (const re of TRIGGERS) {
      if (re.test(opt)) {
        matches.push({ id: q.id, chapter: q.chapter, idx, opt, trigger: re.source });
        break;
      }
    }
  });
});

console.log(`Found ${matches.length} trigger matches:`);
matches.forEach(m => {
  console.log(`[ID #${m.id}] [${m.chapter}] (${m.trigger}): "${m.opt}"`);
});
