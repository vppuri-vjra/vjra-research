---
name: VP Substitution Agent — LLM Evals Project
description: Completed eval — 19-step methodology, V4 checker + LLM-as-judge + A/B prompt testing, TNR 100%, judge agreement 100%, A/B both 100%
type: project
originSessionId: e3ced945-c37a-4b7e-a2b5-12f36c4d4f21
---
**Project:** VP Substitution Agent — LLM Evals course homework (2nd eval, after Recipe Agent)

**GitHub repo:** https://github.com/vppuri-vjra/vp-substitution-agent
**Local path:** /Users/vipin/Downloads/vp-substitution-agent/
**Google Drive folder:** https://drive.google.com/drive/folders/1n4VCneky6eklk8a3sNb6tHJPNEsBydh1

## What's on GitHub (main branch, all merged)
- `prompts/system_prompt.txt` — 4-section prompt + worked example (butter → coconut oil)
- `prompts/judge_prompt.txt` — LLM-as-judge evaluation prompt (4 criteria)
- `data/substitution_queries.csv` — 20 queries, 4 dimensions
- `data/ground_truth.csv` — V4 labels (20 TN, 0 FP — all checker bugs fixed)
- `scripts/bulk_test.py` — runs queries through Claude API
- `scripts/error_analysis.py` — V4 checker (TNR=100%, 0 false positives)
- `scripts/llm_judge.py` — LLM-as-judge evaluator (agreement rate 100%)
- `scripts/generate_viewer.py` — HTML viewer with dimension badges + dietary filter
- `results/results_20260419_150510.json` — bulk test output (20 responses)
- `results/judge_results_20260422_090125.json` — LLM-judge scores (20 responses)
- `results/judge_vs_human.csv` — judge vs human comparison
- `results/analysis_summary.md` — human-readable metrics, confusion matrix, iteration history
- `failure_taxonomy.md` — FM-01..FM-06 (model) + CB-01..CB-03 (checker bugs)
- `EVAL_METHODOLOGY.md` — full 15-step methodology reference table

## Docs created (Downloads → Google Drive)
- `SubEval_Trace_and_Error_Analysis.docx`
- `SubEval_Big_Picture.docx`
- `SubEval_Grounded_Theory_Coding.docx` — filled with actual findings (open/axial/selective coding)

## All 19 Steps — COMPLETE

| Step | Part | What | Status |
|------|------|------|--------|
| 1 | Part 1 | System prompt — 4 sections + worked example | ✅ |
| 2 | Part 2 | 20 test queries across 4 dimensions | ✅ |
| 3 | Part 2 | 3 SubEval docs (Trace, Big Picture, Grounded Theory) | ✅ |
| 4 | Part 3 | Bulk test run → JSON results | ✅ |
| 5 | Part 3 | HTML viewer (dimension badges, dietary filter) | ✅ |
| 6 | Part 3 | Automated checker (V4, error_analysis.py) | ✅ |
| 7 | Part 3 | Human review → ground_truth.csv | ✅ |
| 8 | Part 3 | Metrics (analysis_summary.md) | ✅ |
| 9 | Part 3 | Failure taxonomy (FM-01..FM-06, CB-01..CB-03) | ✅ |
| 10 | Part 3 | Grounded Theory coding doc (filled) | ✅ |
| 11 | Part 3 | Checker iteration V1→V4, TNR 35%→100% | ✅ |
| 12 | Part 3 | Wrap-up doc — EVAL_METHODOLOGY.md | ✅ |
| 13 | LLM-as-Judge | Judge prompt — 4 criteria + output format | ✅ |
| 14 | LLM-as-Judge | Run llm_judge.py — score all 20 responses | ✅ |
| 15 | LLM-as-Judge | Judge agreement rate — 100% (20/20) | ✅ |
| 16 | A/B Testing | system_prompt_v2.txt — remove worked example | ✅ |
| 17 | A/B Testing | bulk_test_ab.py — 20 queries × 2 versions = 40 calls | ✅ |
| 18 | A/B Testing | llm_judge.py on V1 and V2 outputs | ✅ |
| 19 | A/B Testing | V1 vs V2 — both 100%, worked example redundant | ✅ |

## Checker Iteration History
- V1: 15 flags, TNR=35% (baseline)
- V2: 11 flags, TNR=45% (full-word ratio units)
- V3: 8 flags, TNR=60% (ratio denominator stripping + safe compounds)
- V4: 0 flags, TNR=100% (dynamic original ingredient masking + SAFE__ prefix)

## Key Findings
- Model made ZERO failures across all 20 queries
- All flags were checker bugs (CB-01: original ingredient false flag)
- Root cause fixed in V4: `extract_original_ingredient()` from heading + `SAFE__` placeholder masking
- Bottleneck was the checker, not the model
- LLM-as-judge achieved 100% agreement with human labels on first attempt — no iteration needed
- Two-layer pattern: rule-based (scale) + LLM-judge (edge cases) is the industry standard

## Two-Layer Eval Pattern (key concept learned)
- Layer 1 — Rule-based: fast, free, catches obvious failures
- Layer 2 — LLM-judge: meaning-based, catches what rules miss
- Switch from rules to judge after 2-3 iterations if still seeing edge cases

## A/B Prompt Testing (key concept learned)
- Hypothesis: does the worked example affect response quality?
- Variable: worked example removed in V2, everything else identical
- Result: both V1 and V2 scored 100% — example is redundant
- Golden rule: change one variable at a time
- Implication: shorter prompt = fewer tokens = lower cost, no quality loss
