import fs from 'node:fs';
import path from 'node:path';

const siteRoot = path.resolve(import.meta.dirname, '..');
const repoRoot = '/Users/vipin/Documents/Codex/2026-08-06/prd-genie/work/repo';
const tempRoot = '/private/tmp/prd-genie-s2-evaluation-hardening';
const cases = [
  ['HA-R01 / T1', tempRoot, 'evaluation/ground-truth/human-approval/ha-r01-approved/t01'],
  ['HA-R01 / T7', repoRoot, 'evaluation/ground-truth/human-approval/ha-r01-approved/t07'],
  ['HA-R01 / T8', repoRoot, 'evaluation/ground-truth/human-approval/ha-r01-approved/t08'],
  ['HA-R02 / T4', repoRoot, 'evaluation/ground-truth/human-approval/ha-r02-changes-requested'],
  ['HA-R03 / T8', repoRoot, 'evaluation/ground-truth/human-approval/ha-r03-clarification-required/t08'],
  ['HA-R04 / T8', repoRoot, 'evaluation/ground-truth/human-approval/ha-r04-rejected/t08'],
  ['HA-R05 / T10', repoRoot, 'evaluation/ground-truth/human-approval/ha-r05-approved-with-conditions/t10'],
  ['HA-R06 / T8', repoRoot, 'evaluation/ground-truth/human-approval/ha-r06-validation-failure/t08'],
];

const traceIds = [
  'cbfc19ce1d80839db5639a93c1a5dd29',
  'a665dddc7910bd45447e44598dd44b85',
  'b39ae579fa8301292812f3a26fe67c28',
  'cea289f2b7aca013bbc77c9bbe6d4866',
  '0cdf02da06d087502983d18960709b42',
  '49a9c41ddaa32a15ab9cc2350ff27c13',
  'ab8a53ebdf9afe0558e63524cb6d7aff',
  null,
];

const readJson = (root, rel, name) => JSON.parse(fs.readFileSync(path.join(root, rel, name), 'utf8'));
const data = cases.map(([caseLabel, root, rel], index) => ({
  case_label: caseLabel,
  canonical_input_path: `${rel}/input-packet.json`,
  canonical_output_path: `${rel}/expected-output.json`,
  input: readJson(root, rel, 'input-packet.json'),
  expected: readJson(root, rel, 'expected-output.json'),
  evaluation: {
    execution_id: '10483',
    result: 'pass',
    n8n_deterministic: 'pass',
    langfuse_trace_id: traceIds[index],
    code_evaluator_pass: index === 7 ? null : true,
    llm_faithfulness: index === 7 ? null : 1,
    llm_hallucination: index === 7 ? null : 0,
    negative_control: index === 7,
  },
}));

fs.writeFileSync(path.join(siteRoot, 'prd-genie-human-approval-ground-truth-data.js'), `window.PRD_GENIE_HUMAN_APPROVAL_GROUND_TRUTH=${JSON.stringify(data)};\n`);
