---
name: Learning Roadmap — AI / LLM Eval Knowledge Progression
description: Master roadmap of all learning steps across evals, RAG patterns, frameworks, and career — updated April 2026
type: roadmap
originSessionId: e3ced945-c37a-4b7e-a2b5-12f36c4d4f21
---
# AI / LLM Learning Roadmap — Vipin Puri

**Goal:** Build breadth and depth in AI evals + RAG engineering to be a credible AI TPM in job search.
**Context:** Understanding Evals course + self-directed projects + Aishwarya Srinivasan YouTube (RAG Explained in 12 Minutes)

---

## Full Knowledge Progression Table

| Step | Project / Topic | What You Learn | Status |
|------|----------------|----------------|--------|
| 1 | VP Recipe Agent | System prompt design, bulk testing, TPR/TNR, confusion matrix, failure taxonomy, 3 Gulfs | ✅ Done |
| 2 | VP Substitution Agent | Rule-based checker, checker iteration V1→V4, human review, ground truth labeling | ✅ Done |
| 3 | VP Substitution Agent — LLM Judge | LLM-as-judge pattern, 4-criteria scoring, judge vs human agreement rate | ✅ Done |
| 4 | VP Substitution Agent — A/B Testing | A/B prompt testing, one variable at a time, data-driven prompt decisions | ✅ Done |
| 5 | VP RAG Eval | Chunking, ChromaDB, vector embeddings (all-MiniLM-L6-v2), retrieval accuracy, faithfulness, grounding constraint | ✅ Done |
| 6a | Swap Embedding Model | Replace all-MiniLM-L6-v2 with BGE-large — 85% → 95% retrieval accuracy (+10%) | ✅ Done |
| 6b | RAG Pattern — HyDE | Generate hypothetical answer first, use as query — fixed Q9, 95% → 100% | ✅ Done |
| 6c | RAG Pattern — Re-ranking | 90% (-5% vs BGE baseline) — re-ranker out-of-domain, wrong tool for small corpus | ✅ Done |
| 6d | RAG Pattern — Branched RAG | Vector + BM25 in parallel, RRF merge — 95% (stable, no regression) | ✅ Done |
| 6e | RAG Pattern — Agentic RAG | Agent decides when and what to retrieve | ✅ Done |
| 6f | RAG Pattern — Graph RAG | Knowledge graph instead of vector DB — bigger architectural jump | ✅ Done |
| 7 | LangChain | Rebuild RAG pipeline with framework abstractions — chains, retrievers, memory, prompt templates | ✅ Done |
| 8 | LlamaIndex | Advanced chunking, multi-modal RAG, data ingestion pipelines, KnowledgeGraphIndex | ✅ Done |
| 9 | MCP (Model Context Protocol) | Expose RAG pipeline as MCP server — any Claude agent can call it without rewriting integration. Productionised version of Step 6e tool_use | — |
| 10 | Agentic Eval | Multi-step agents, tool use, trace-level evaluation, non-deterministic chains | — |
| 11 | Fine-tuning Eval | Before/after fine-tune comparison, eval sets, regression testing | — |
| 12 | DeepLearning.AI Prompt Engineering Course | Chain-of-thought, few-shot, prompt chaining, structured techniques | — |
| 13 | Production Eval Patterns | Evals in CI/CD, regression suites, eval dashboards, human-in-the-loop at scale | — |
| 14 | Portfolio — Tell Phase | Write about what you built, LinkedIn posts, interview narratives, speak confidently | — |

---

## Three Parallel Tracks

| Track | Steps | Focus |
|---|---|---|
| **RAG depth** | 6a → 6f | Fix failures, try patterns, measure each against 85% baseline |
| **Framework fluency** | 7 → 8 → 9 → 13 | LangChain → LlamaIndex → MCP → production patterns |
| **Career** | 12 → 14 | Course + portfolio → job search tell phase |

---

## Tools Gap Analysis (from Aishwarya Srinivasan — RAG Explained in 12 Minutes)

| Category | She mentions | We used | Gap |
|---|---|---|---|
| Vector DB | Pinecone, Weaviate, Qdrant, Milvus, ChromaDB | ChromaDB | ✅ No gap — we know ChromaDB deeply |
| Embedding models | text-embedding-3-large, Voyage 3, BGE-large, E5-Mistral | all-MiniLM-L6-v2 | ⚠️ Swap to BGE-large is 1 line — Step 6a |
| Frameworks | LangChain, LlamaIndex | None yet | ❌ Step 7-8 |

## Embedding Model Comparison

| Model | Dims | Cost | Quality | When to use |
|---|---|---|---|---|
| `all-MiniLM-L6-v2` | 384 | Free, local | Prototype | ✅ We used this |
| `BGE-large` | 1024 | Free, local | Better open source | Step 6a — easy swap |
| `E5-Mistral` | 4096 | Free, local | Best open source | After BGE-large |
| `text-embedding-3-large` | 3072 | OpenAI API cost | Production-grade | When going to prod |
| `Voyage 3` | — | API cost | Anthropic recommended | Production-grade |

---

## Key Reference

**Aishwarya Srinivasan YouTube:** https://www.youtube.com/@AishwaryaSrinivasan
- RAG Explained in 12 Minutes: https://youtu.be/v0ynfDPpe4E
- Vector Databases Explained: https://www.youtube.com/watch?v= (64K views, 4 days ago)
- Mastering Agentic AI bootcamp (Maven, May 30): covers Steps 6-9 in our table

**What we have built (GitHub repos):**
- VP Recipe Agent: https://github.com/vppuri-vjra/vp-recipe-agent
- VP Substitution Agent: https://github.com/vppuri-vjra/vp-substitution-agent
- VP RAG Eval: https://github.com/vppuri-vjra/vp-rag-eval

---

## Current Position
**Step 6d done.** All 4 RAG patterns complete. Results: Standard MiniLM 85% → BGE 95% → Re-ranking 90% → Branched RAG 95% → HyDE 100%. Key finding: two types of retrieval failure — representation (fix: better model) and vocabulary mismatch (fix: HyDE). Full comparison table documented in EVAL_METHODOLOGY.md and pushed to GitHub.

**Step 7 (LangChain) done.** 95% — framework parity with manual pipeline. Key: LCEL pipe operator.

**Step 6e (Agentic RAG) done.** Claude gets a retrieve tool via tool_use API. Agent rephrased Q9 to "deglazing fond" and fixed it. 100% (20/20), avg 1.6 calls/question. Key insight: agent fixes vocabulary mismatch by choosing its own query — same root fix as HyDE but agent-driven.

**Step 6f (Graph RAG) done.** 75% (-20%). Entry node failure cascades — wrong vector start → wrong graph expansion. Key lesson: more context ≠ better when starting point is wrong. Works best with large corpora and reliable entry retrieval.

**Step 8 (LlamaIndex) done.** 100% (20/20). SentenceSplitter(512, overlap=50) fixed Q9 — chunking strategy matters as much as the model. Overlapping chunks capture cross-section context that rigid section splits miss.

**Step 9 (MCP) done.** Built MCP server exposing search_cooking_knowledge + ask_cooking_question tools. Wired into Claude Code settings.json. Retrieval confirmed working — same BGE-large pipeline, now callable by any Claude instance. Key lesson: MCP is the productionised version of Step 6e tool_use — build once, use everywhere.

**Next: Step 10 — Portfolio Tell Phase.** Document and articulate everything built for job search.
