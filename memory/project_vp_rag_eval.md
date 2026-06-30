---
name: VP RAG Eval — LLM Evals Project
description: Completed eval — 10-step RAG methodology, 85% retrieval accuracy, 100% answer pass rate, 100% faithfulness, grounding constraint eliminated hallucination
type: project
originSessionId: e3ced945-c37a-4b7e-a2b5-12f36c4d4f21
---
# VP RAG Eval

## Overview
Full RAG evaluation pipeline built as part of the Understanding Evals course.
Knowledge base: 20 cooking technique documents.
All 10 steps complete. Everything on GitHub.

## GitHub Repo
https://github.com/vppuri-vjra/vp-rag-eval

## Local Path
/Users/vipin/Downloads/vp-rag-eval/

## Key Results

| Metric | Score |
|---|---|
| Retrieval Accuracy | 85% (17/20) |
| Answer Pass Rate (LLM Judge) | 100% (20/20) |
| Faithfulness (Grounded) | 100% (20/20) |

## 10 Steps — All Complete

| Step | Part | What | Status |
|---|---|---|---|
| 1 | Setup | 20 cooking technique documents | ✅ Done |
| 2 | Setup | Section-based chunking → 97 chunks | ✅ Done |
| 3 | Setup | ChromaDB vector index | ✅ Done |
| 4 | Setup | 20 test questions with expected doc + difficulty | ✅ Done |
| 5 | Pipeline | RAG pipeline script (retrieve → build → generate → save) | ✅ Done |
| 6 | Eval | Run 20 questions → 85% retrieval accuracy | ✅ Done |
| 7 | Eval | Retrieval eval script → accuracy by difficulty | ✅ Done |
| 8 | Eval | LLM judge → 100% answer pass rate | ✅ Done |
| 9 | Eval | Faithfulness eval → 100% grounded | ✅ Done |
| 10 | Eval | Final analysis report | ✅ Done |

## Key Files

| File | Purpose |
|---|---|
| `data/docs/` | 20 cooking technique documents |
| `data/chunks.json` | 97 section-based chunks |
| `data/questions.csv` | 20 test questions |
| `scripts/chunk_docs.py` | Section-based chunker |
| `scripts/build_index.py` | Builds ChromaDB index |
| `scripts/rag_pipeline.py` | RAG pipeline (retrieve + generate) |
| `scripts/retrieval_eval.py` | Retrieval accuracy by difficulty |
| `scripts/llm_judge.py` | LLM-as-judge for answer quality |
| `scripts/faithfulness_eval.py` | Extracts GROUNDED scores from judge results |
| `scripts/rag_analysis.py` | Final analysis report generator |
| `prompts/judge_prompt.txt` | Judge prompt — 3 criteria: CORRECT, COMPLETE, GROUNDED |
| `results/rag_results_*.json` | RAG pipeline output |
| `results/retrieval_eval.csv` | Per-question retrieval accuracy |
| `results/judge_results_*.json` | Per-question judge scores |
| `results/faithfulness_eval.csv` | Per-question faithfulness + cross-tab |
| `results/rag_analysis.md` | Final analysis report |
| `EVAL_METHODOLOGY.md` | Full methodology documentation |

## Key Findings

### 1. Retrieval is the only weak link
- 3 retrieval failures: Q9 (pan sauce — semantic overlap), Q11 (fond — keyword confusion), Q20 (claw grip — no semantic neighbors)
- Hard questions: 100% retrieval accuracy (specific technical language maps cleanly to one doc)
- Medium questions: 77.8% (general cooking language overlaps across docs)

### 2. Grounding constraint eliminated hallucination
- All 3 retrieval failures still passed the judge
- Q20 "claw grip" — Claude said "I cannot answer this" instead of hallucinating → PASS
- Key prompt: "Answer using ONLY the information provided below. Do not use outside knowledge."

### 3. Cross-tab
| Retrieval | Faithful | Count |
|---|---|---|
| ✅ ✅ | 17 | Right doc, right answer |
| ❌ ✅ | 3 | Wrong doc — stayed grounded |
| ✅ ❌ | 0 | Never happened |
| ❌ ❌ | 0 | Worst case — never happened |

## Key Concepts Learned

- **RAG** — Retrieve → Build grounded prompt → Generate → Evaluate
- **Section-based chunking** — split at ALL CAPS headers; 97 chunks from 20 docs
- **Vector embeddings** — all-MiniLM-L6-v2, 384 dimensions, cosine similarity
- **ChromaDB** — local persistent vector DB; rebuilt from chunks.json (not in GitHub)
- **Retrieval accuracy** — % of questions where expected doc appears in top-K
- **Faithfulness** — did Claude stay within retrieved content (no hallucination)
- **Claude as Answerer vs Judge** — same model, different prompt, no memory between calls
- **Grounding constraint** — "Answer using ONLY..." turns retrieval failures into safe refusals
- **Cosine distance** — lower = more similar; >0.6 means retriever is guessing

## Production Fixes Identified
1. Hybrid search (vector + BM25 keyword) — fixes unique term failures
2. Add topic labels to chunk content — fixes semantic overlap
3. Increase Top-K from 3 to 5
4. Human review of judge labels to validate 100% isn't leniency
5. Fine-tune embedding model on cooking domain

## Notes
- .env not in GitHub — API key must be passed via shell variable
- chroma_db/ not in GitHub — rebuild with: python3 scripts/build_index.py
- Completed April 2026

---

## RAG Pattern Experiments (Steps 6a–6f)

| Pattern | Script | Accuracy | Key lesson |
|---|---|---|---|
| BGE-large (1024d) | build_index.py + rag_pipeline.py | 95% | Better dims fix representation failures — Q11, Q20 fixed |
| HyDE | hyde_pipeline.py | 100% | Hypothesis bridges question-document vocabulary gap — Q9 fixed |
| Re-ranking | rerank_pipeline.py | 90% (-5%) | Out-of-domain cross-encoder hurts small corpus |
| Branched RAG | branched_pipeline.py | 95% | BM25 additive, no regression, exact term fix |
| Agentic RAG | agentic_pipeline.py | 100% | Agent rephrases query — avg 1.6 calls/q, Q9 fixed |
| Graph RAG | build_graph.py + graph_pipeline.py | 75% (-20%) | Entry node failure cascades — wrong start, wrong expansion |

## Frameworks (Steps 7–8)

| Framework | Script | Accuracy | Key lesson |
|---|---|---|---|
| LangChain | langchain_pipeline.py | 95% | LCEL pipe: retriever \| prompt \| llm \| parser. Parity proves framework = wrapper |
| LlamaIndex | llamaindex_pipeline.py | 100% | SentenceSplitter(512, overlap=50) fixed Q9 — chunking matters as much as model |

## MCP Server (Step 9)

- File: `mcp_server.py`
- Tools: `search_cooking_knowledge(query, top_k)`, `ask_cooking_question(question)`
- Resource: `cooking://topics`
- Wired into: `~/.claude/settings.json` as `cooking-rag` server
- Key lesson: MCP = productionised tool_use. Build once, any Claude calls it.

## All Scripts Summary

| Script | Purpose |
|---|---|
| chunk_docs.py | Section-based chunking → chunks.json |
| build_index.py | Load chunks into ChromaDB (BGE-large) |
| rag_pipeline.py | Standard RAG pipeline |
| retrieval_eval.py | Measure retrieval accuracy |
| llm_judge.py | Claude as judge — correctness + faithfulness |
| faithfulness_eval.py | Cross-tab retrieval × faithfulness |
| rag_analysis.py | Final analysis → rag_analysis.md |
| hyde_pipeline.py | HyDE pattern |
| rerank_pipeline.py | Re-ranking pattern |
| branched_pipeline.py | Branched RAG (vector + BM25 + RRF) |
| agentic_pipeline.py | Agentic RAG (tool_use loop) |
| build_graph.py | Build knowledge graph from doc concepts |
| graph_pipeline.py | Graph RAG (entry node + traversal) |
| visualize_graph.py | Draw knowledge graph → PNG |
| langchain_pipeline.py | LangChain LCEL pipeline |
| llamaindex_pipeline.py | LlamaIndex VectorStoreIndex pipeline |
| mcp_server.py | MCP server (root of repo, not in scripts/) |
