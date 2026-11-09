const files = [
  'part1_cardio.js', 'part2_renal_gi_resp_histamine.js', 'part3_lipid_parasites_malaria.js',
  'part4_endocrine_blood.js', 'part5_virus_cancer_poison_vitamin.js',
  'expansion_part1.js', 'expansion_part2.js', 'expansion_part3.js',
  'expansion_part4.js', 'expansion_part5.js',
  'more_cardio_renal.js', 'more_parasite_endocrine.js', 'more_virus_cancer_poison.js',
  'clinical_vignettes.js',
  'deep_pool_a.js', 'deep_pool_b.js', 'deep_pool_c.js', 'deep_pool_d.js', 'deep_pool_e.js', 'deep_pool_f.js'
];

let all = [];
files.forEach(f => {
  all = all.concat(require('./duocly2_data/' + f));
});

console.log('Total questions loaded:', all.length);

let parenIssues = [];
all.forEach((q, idx) => {
  if (!q.options || q.options.length !== 4) {
    console.error(`Question ${idx} invalid options length:`, q.options);
  }
  if (q.correct < 0 || q.correct > 3) {
    console.error(`Question ${idx} invalid correct index:`, q.correct);
  }
  q.options.forEach((opt, oIdx) => {
    // Check if option contains parentheses that might be spoilers or explanation hints
    if (/\([^)]+\)/.test(opt)) {
      parenIssues.push({ idx, q: q.question.slice(0, 50), opt, oIdx });
    }
  });
});

console.log(`Found ${parenIssues.length} options with parentheses.`);
parenIssues.slice(0, 15).forEach(issue => {
  console.log(`- Q#${issue.idx} (${issue.q}...): "${issue.opt}"`);
});
