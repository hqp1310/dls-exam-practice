const fs = require('fs');

function sanitizeText(str) {
  return str
    // Arrows & symbols
    .replace(/\$\\+to\$/g, '→')
    .replace(/\\+to\b/g, '→')
    .replace(/\$\\+ge\$/g, '≥')
    .replace(/\$\\+le\$/g, '≤')
    .replace(/\$BP\s*\\+ge\s*180\/120\$/g, 'HA ≥ 180/120')
    .replace(/\$BP\s*>=\s*180\/120\$/g, 'HA ≥ 180/120')

    // Pumps, co-transporters & complex ions
    .replace(/\$Na\^\+\/K\^\+\/2Cl\^-\$/g, 'Na⁺/K⁺/2Cl⁻')
    .replace(/\$Na\^\+\/K\^\+\$/g, 'Na⁺/K⁺')
    .replace(/\$Na\^\+\/Ca\^\{2\+\}\$/g, 'Na⁺/Ca²⁺')
    .replace(/\$Na\^\+\/Cl\^-\$/g, 'Na⁺/Cl⁻')
    .replace(/\$H\^\+\/K\^\+\$/g, 'H⁺/K⁺')
    .replace(/\$Ca\^\{2\+\}\s*\\+to\$/g, 'Ca²⁺ →')
    .replace(/\$Ca\^\{2\+\}\$/g, 'Ca²⁺')
    .replace(/\$Mg\^\{2\+\}\$/g, 'Mg²⁺')
    .replace(/\$Fe\^\{3\+\}\$/g, 'Fe³⁺')
    .replace(/\$Fe\^\{2\+\}\$/g, 'Fe²⁺')
    .replace(/\$K\^\+\$/g, 'K⁺')
    .replace(/\$Na\^\+\$/g, 'Na⁺')
    .replace(/\$Cl\^-\$/g, 'Cl⁻')
    .replace(/\$2Cl\^-\$/g, '2Cl⁻')
    .replace(/\$CN\^-\$/g, 'CN⁻')
    .replace(/\$O_2\$/g, 'O₂')

    // Chemical compounds
    .replace(/\$NaHCO_3\$/g, 'NaHCO₃')
    .replace(/\$MgSO_4\$/g, 'MgSO₄')
    .replace(/\$Al\(OH\)_3\$/g, 'Al(OH)₃')
    .replace(/\$Mg\(OH\)_2\$/g, 'Mg(OH)₂')
    .replace(/\$CaNa_2\$/g, 'CaNa₂')
    .replace(/\$PGE_1\$/g, 'PGE₁')

    // Greek letters
    .replace(/\$\\+alpha_1,\s*\\+beta_1,\s*\\+beta_2\$/g, 'α₁, β₁, β₂')
    .replace(/\$\\+alpha_1\$/g, 'α₁')
    .replace(/\$\\+alpha_2\$/g, 'α₂')
    .replace(/\$\\+alpha\$/g, 'α')
    .replace(/\$\\+beta_1\$/g, 'β₁')
    .replace(/\$\\+beta_2\$/g, 'β₂')
    .replace(/\$\\+beta-tubulin\$/g, 'β-tubulin')
    .replace(/\$\\+beta\$/g, 'β')
    .replace(/\$\\+gamma\$/g, 'γ')
    .replace(/\$\\+mu,\s*\\+kappa,\s*\\+delta\$/g, 'μ, κ, δ')
    .replace(/PPAR-\$\\+alpha\$/g, 'PPAR-α')

    // Receptors & channels & factors
    .replace(/\$AT_1\$/g, 'AT₁')
    .replace(/\$CysLT_1\$/g, 'CysLT₁')
    .replace(/\$H_1\$/g, 'H₁')
    .replace(/\$H_2\$/g, 'H₂')
    .replace(/\$A_1\$/g, 'A₁')
    .replace(/\$A_2\$/g, 'A₂')
    .replace(/\$I_f\$/g, 'I<sub>f</sub>')
    .replace(/\$K_\{ATP\}\$/g, 'K<sub>ATP</sub>')
    .replace(/\$P2Y_\{12\}\$/g, 'P2Y₁₂')
    .replace(/\$GABA_A\$/g, 'GABA<sub>A</sub>')
    .replace(/\$t_\{1\/2\}\$/g, 't<sub>1/2</sub>')

    // Hormones & Vitamins
    .replace(/\$T_3,\s*T_4\$/g, 'T₃, T₄')
    .replace(/\$T_3\$/g, 'T₃')
    .replace(/\$T_4\$/g, 'T₄')
    .replace(/\$D_3\$/g, 'D₃')
    .replace(/\$K_1,\s*K_2\$/g, 'K₁, K₂')
    .replace(/\$K_1\$/g, 'K₁')
    .replace(/\$B_1\$/g, 'B₁')
    .replace(/\$B_3\$/g, 'B₃')
    .replace(/\$B_6\$/g, 'B₆')
    .replace(/\$B_9\$/g, 'B₉')
    .replace(/\$B_\{12\}\$/g, 'B₁₂')

    // Numerical / Lab comparisons
    .replace(/\$>\s*([0-9.]+)\$/g, '> $1')
    .replace(/\$<\s*([0-9.]+)\$/g, '< $1')
    .replace(/\$eGFR\s*<\s*30\$/g, 'eGFR < 30')
    .replace(/\$GFR\s*<\s*30\$/g, 'GFR < 30')
    .replace(/\$\s*1\s*\+\s*1\s*=\s*2\s*\$/g, '1 + 1 = 2')
    .replace(/\$\s*1\s*\+\s*1\s*>\s*2\s*\$/g, '1 + 1 > 2')
    .replace(/\$Ca\^\{2\+\}\s*[→\\]+\s*to\$/g, 'Ca²⁺ →')
    .replace(/\$Ca\^\{2\+\}\s*→\$/g, 'Ca²⁺ →');
}

let content = fs.readFileSync('cheatsheet_duocly2.js', 'utf8');
content = sanitizeText(content);

// Check if any unexpected bare $ remains
const remaining = [];
const lines = content.split('\n');
lines.forEach((line, idx) => {
  const clean = line.replace(/\$\{[^}]+\}/g, '');
  if (clean.includes('$')) {
    remaining.push({ line: idx + 1, text: clean.trim() });
  }
});

console.log('Remaining lines with $ in cheatsheet_duocly2.js:', remaining.length);
if (remaining.length > 0) {
  console.log(remaining);
} else {
  console.log('SUCCESS: ZERO bare $ left!');
  fs.writeFileSync('cheatsheet_duocly2.js', content, 'utf8');
  console.log('Successfully written clean version to cheatsheet_duocly2.js!');
}
