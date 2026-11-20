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

console.log(`Total questions patched: ${Object.keys(allPatches).length}`);

const bankFile = path.join(__dirname, '..', 'questions_duocly2.js');
const { DUOCLY2_EXAM_BANK, DUOCLY2_MATRIX_32H } = require(bankFile);

console.log(`DUOCLY2_EXAM_BANK total: ${DUOCLY2_EXAM_BANK.length}`);

let errorCount = 0;

// Verify each patch
for (const [idStr, newOpts] of Object.entries(allPatches)) {
  const id = parseInt(idStr, 10);
  const q = DUOCLY2_EXAM_BANK.find(item => item.id === id);
  if (!q) {
    console.error(`ERROR: Question ID #${id} not found in DUOCLY2_EXAM_BANK!`);
    errorCount++;
    continue;
  }
  if (!Array.isArray(newOpts) || newOpts.length !== 4) {
    console.error(`ERROR: ID #${id} has invalid options length: ${newOpts.length}`);
    errorCount++;
  }
  newOpts.forEach((opt, idx) => {
    if (typeof opt !== 'string' || !opt.trim()) {
      console.error(`ERROR: ID #${id} option ${idx} is empty or not string!`);
      errorCount++;
    }
  });
}

if (errorCount > 0) {
  console.error(`Verification FAILED with ${errorCount} errors!`);
  process.exit(1);
}

console.log(`All ${Object.keys(allPatches).length} patches verified successfully!`);

// Check before applying: lengths and triggers
let preLong = 0;
let preTriggers = 0;
const TRIGGERS = [/nhằm\s+/i, /giúp\s+/i, /qua đó\s+/i, /bằng cách\s+/i, /dẫn đến\s+/i, /do đó\s+/i, /để\s+/i, /theo dõi chặt chẽ/i];

DUOCLY2_EXAM_BANK.forEach(q => {
  q.options.forEach(opt => {
    if (opt.length > 70) preLong++;
    if (TRIGGERS.some(t => t.test(opt))) preTriggers++;
  });
});

console.log(`PRE-PATCH: Options > 70 chars: ${preLong}, Options with trigger words: ${preTriggers}`);

// Apply patches to DUOCLY2_EXAM_BANK
let appliedCount = 0;
DUOCLY2_EXAM_BANK.forEach(q => {
  if (allPatches[q.id]) {
    q.options = allPatches[q.id];
    appliedCount++;
  }
});

console.log(`Applied patches to ${appliedCount} questions.`);

// Check post-patch stats
let postLong = 0;
let postTriggers = 0;
const remainingLongQs = [];

DUOCLY2_EXAM_BANK.forEach(q => {
  q.options.forEach((opt, idx) => {
    if (opt.length > 70) {
      postLong++;
      remainingLongQs.push({ id: q.id, chapter: q.chapter, idx, len: opt.length, opt });
    }
    if (TRIGGERS.some(t => t.test(opt))) postTriggers++;
  });
});

console.log(`POST-PATCH: Options > 70 chars: ${postLong}, Options with trigger words: ${postTriggers}`);
console.log(`Remaining options > 70 chars: ${remainingLongQs.length} (in ${new Set(remainingLongQs.map(o => o.id)).size} questions)`);

if (remainingLongQs.length > 0) {
  console.log('\n--- Sample remaining options > 70 chars ---');
  remainingLongQs.slice(0, 10).forEach(r => {
    console.log(`[ID #${r.id}] [${r.chapter}] [${r.len}] ${r.opt}`);
  });
}
