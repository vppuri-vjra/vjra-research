---
name: project-vjra-portfolio
description: "vjra.us AI portfolio site (6 pages) + AI Governance Framework — GitHub Pages, Claude browser API, multi-agent chat, evaluation dashboards"
metadata: 
  node_type: memory
  type: project
  originSessionId: f8259334-181d-4a8d-b11a-a3a8b6cb2822
---

# vjra.us AI Portfolio + AI Governance Framework

## Where it lives
- **Repo:** `/Users/vipin/Downloads/vjra-research/` → GitHub Pages at vjra.us
- **GitHub repo name:** vjra-research (vppuri-vjra org)
- **All pages:** static HTML, Claude API called directly from browser with `anthropic-dangerous-direct-browser-access: true`
- **API key:** stored in `sessionStorage` per page (user pastes on first visit)

## Design system (all 6 pages)
- Background: `#f8f4ee` (cream)
- Accent: `#b85042` (terracotta red)
- Ink: `#1a1a2e`
- Headers: Cormorant Garamond italic
- Body: Inter
- Agent "balls": gradient circles representing each agent
- Model: `claude-sonnet-4-6` across all pages

## The 6 Pages

### 1. index.html — Home page
- 2×2 grid of 6 project cards
- Each card: agent balls, description, tags, CTA, model, repo name
- Cards: Project Nightingale, NovaCart RAG, Decision Pipeline, GlobalEdge Intelligence, VP Portfolio Health Report, AI Governance Framework

### 2. decision.html — Decision Pipeline
- 3 tabs: Business Problem & Solution / Decision Agent / Decision Memo
- Multi-agent routing: ROUTE: signal pattern → Greeter → specialist agents (Analyst, Critic, Executive, Planner, Publisher)
- Decision Memo tab: Decision Brief card (expanded by default) + 8 collapsible agent steps + Decision Memo Preview
- Key fix: `#tab-memo.active { display: block !important; }` prevents flex overlap
- Routing fix: clear `history = []` on agent switch to prevent identity confusion
- Agent prompts have `IMPORTANT: Answer the user's question DIRECTLY` (prevents re-greeting)

### 3. globaledge.html — GlobalEdge Intelligence
- 3 tabs: Business Problem & Solution / Intelligence Agent / Evaluation Dashboard
- Evaluation Dashboard: 5 clickable test queries (EVAL_DATA array), showEval(idx), regenerateEval() via Claude API
- Metric cards on /10 scale (not /5)
- `#tab-eval.active { display: block !important; }` fix

### 4. launch.html — Product Launch Command Center (Project Nightingale)
- Pinecone: nightingale-launch index, 3 namespaces (technical/gtm/launch)
- Demo frontend: KB data embedded as JS string constants (no live Pinecone from browser)
- Voice: Alex (Web Speech API), no auto-speak on load, auto-send on speech final
- `recognition.onerror = (e) => { if (e.error !== 'no-speech') stopListening(); }`

### 5. portfolio.html — VP Portfolio Health Report
- 2 tabs: Architecture & Pipeline / Sample Outputs
- 3-agent pipeline: jira_monitor.py (daily) → escalation_agent.py → run_biweekly_report.py (now weekly)
- meeting_notes.txt shown as input to escalation agent and weekly report
- Architecture diagram showing the full pipeline

### 6. ai-framework.html — AI Governance Framework
- 5 tabs: Framework Overview / Jira Project Setup / Review Forms / Reporting / Forms (Interactive)
- **4-phase model:** P1 Full Review → P2 Confidence Routing (≥0.85 threshold) → P3 Exception-Based → P4 Monthly Strategic Oversight
- **AI Confidence system prompt block:**
  ```
  After your response, output on the last line EXACTLY:
  CONFIDENCE: 0.XX
  0.90–1.00: fully grounded; 0.80–0.89: mostly grounded; 0.70–0.79: partial; 0.60–0.69: significant inference; <0.60: flag for review
  ```
- **Jira AIGOV project:** 4 issue types, 35 custom fields total, 1 shared workflow
  - P1: ~24/mo, 14 base custom fields
  - P2: +3 fields (ai_confidence_score, confidence_threshold, review_trigger_reason)
  - P3: +6 fields (exception_type, auto_approved_count, ...)
  - P4: 12 standalone fields, ~1/mo (strategic dashboard)
  - `release_name` field on all phases (e.g. v3.1, Sprint 14)
- **Reporting tab:** weekly aggregation flow + 5 sample reports (Requirements, Architecture, Development, Code Review, Testing & QA)
- **Forms tab:** 4 live iframes — actual fillable HTML forms for each phase
- iframe radio/checkbox fix: `input[type=radio],input[type=checkbox]{width:auto;flex-shrink:0;margin:0;}`

## Architecture Decisions
- **No RAG on browser pages** — KB data embedded as JS constants; pages are demo frontends
- **JQL + Claude for Jira summaries** — no RAG needed for structured Jira data (queryable fields)
  - Twice-daily bug summaries: same script, different JQL time windows + different Claude prompt framing
  - Morning run (7 AM): "overnight" window, what changed while team was offline
  - Evening run (6 PM): "today" window, EOD status before tomorrow
- **Pinecone exists** in production scripts but not wired to browser pages
  - GlobalEdge: global-edge index, namespace globaledge-rag, text-embedding-3-large, 1024-dim
  - Nightingale: nightingale-launch index, 3 namespaces, text-embedding-3-small, 1536-dim

## Known Bugs / Fixes Applied
- Tab overflow: all tab panels need `display:block !important` on `.active` (flex causes overlap)
- Radio buttons in iframes: `input[type=radio],input[type=checkbox]{width:auto;flex-shrink:0;margin:0;}` — needed in ALL 4 iframe stylesheets
- CDN cache: hard-refresh with Cmd+Shift+R or append `?v=N` to URL after push
- Agent identity confusion: clear `history = []` on agent switch
- Voice STT: sequential flow — greeter speaks → `utt.onend = () => startListening()`
- Metric scale: evaluation cards use /10 (not /5)
- Publisher step scroll: `scrollIntoView({behavior:'smooth',block:'nearest'})` on expand

## Pending / Next Steps
- Build `weekly_ai_governance_report.py` — JQL → Claude → email/Slack (designed but not built)
- Build `bug_summary.py` parameterized script for twice-daily bug summaries
- Add AI confidence scoring to actual production pipelines (documented, not yet integrated)

**Why:** This is Vipin's AI portfolio showcase at vjra.us — used to demonstrate TPM/AI skills to employers during Bay Area job search. Each page represents a real project with live AI agents embedded directly in the browser.

**How to apply:** When resuming this project, the 6-page structure above is the canonical state. Check git log on vjra-research repo for latest pushed state before making assumptions about current file contents.
