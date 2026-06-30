---
name: VP Recipe Agent — LLM Evals Project
description: Vipin's LLM evals homework project — recipe chatbot with bulk testing, failure mode taxonomy, and eval metrics
type: project
originSessionId: 8d784ada-1f62-42b8-bc2c-27e54e30a928
---
**Project:** VP Recipe Agent — LLM Evals course homework

**GitHub repo:** https://github.com/vppuri-vjra/vp-recipe-agent
**Local path:** /Users/vipin/Downloads/vp-recipe-agent/
**Google Drive folder:** https://drive.google.com/drive/folders/1Q13ll7Ba1XL_o-1LhXV5fdXBlEJrbHVb (named "recipe chatbot")

## Project structure
- `prompts/system_prompt.txt` — 4-section system prompt (Role, Rules, Agency, Formatting)
- `data/sample_queries.csv` — 20 diverse test queries
- `data/dimension_queries.csv` — queries by dimension combinations
- `data/ground_truth.csv` — manually labeled ground truth for eval
- `scripts/bulk_test.py` — runs all queries through Claude API
- `scripts/error_analysis.py` — automated checker, computes TPR/TNR
- `scripts/generate_viewer.py` — HTML viewer for results
- `scripts/generate_combinations.py` — generates dimension combinations
- `failure_mode_taxonomy.md` — 6 failure modes documented
- `results/` — JSON + HTML output files from bulk test runs

## Completed homework parts
- **Part 1:** System prompt written (Role/Objective, Always/Never, LLM Agency, Formatting)
- **Part 2:** 20 diverse queries in sample_queries.csv
- **Part 3:** Bulk test run, confusion matrix computed (TPR=100%, TNR=53%, Precision=10%)
- **Concepts covered:** Traces, 6 Stages of Error Analysis, 3 Gulfs (Comprehension, Specification, Generalization)

## Key findings
- Model: claude-opus-4-5
- Main failure: FM-02 False Keyword Match (checker too aggressive, flagging "cashew cream" as dairy, "temperature" as advanced term)
- Checker has near-zero false negatives but high false positives (FP=9, FN=0)

## Docs created (in Downloads)
- `LLM_Evals_Trace_and_Error_Analysis.docx` — Trace definition + 6 stages
- `LLM_Evals_Big_Picture.docx` — 3 Gulf definitions + summary table
