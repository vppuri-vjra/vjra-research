---
name: VP Support Ticket Analysis — UT Austin Project
description: Completed course project (60/60) — n8n + GPT-4.1 4-stage pipeline for ShopNest Global support tickets, LLM-as-a-Judge scoring
type: project
---
# ShopNest Global Support Ticket Analysis System

UT Austin "AI Agents and Generative AI for Business Applications" course project. Submitted grade: 60/60.

## Where it lives
- GitHub: https://github.com/vppuri-vjra/ai-support-ticket-intelligence (public)
- Page: /support-ticket.html (UT Austin card on index.html, next to GlobalEdge Financial Intelligence)
- Source files: `/Users/vipin/Documents/AI Learning/UT Austin/Project_1_Support Ticket/`

## Business Context
ShopNest Global — e-commerce platform, 30+ countries, 50M+ customers, 2,000+ agents, 200K+ orders/day. Peak volume spikes ~5,000 → ~15,000 tickets/day.

## Pipeline (n8n, GPT-4.1 throughout)
1. Ticket Summarization (temp 0.2) → 2. Summary Evaluation/LLM-Judge (Accuracy/Clarity/Completeness) → 3. Response Generation (temp 0.4, policies embedded in prompt) → 4. Response Evaluation/LLM-Judge (Professionalism/Empathy/Clarity/Policy Compliance/Actionability)

## Real Results (from output_file.csv, 30/30 tickets)
- Summary avg: 9.82/10 (20/30 tickets perfect 10/10/10)
- Response avg: 9.28/10
- Weakest metric: Policy Compliance (min 7/10) — judge flagged responses promising refunds/vouchers without confirming eligibility first

## Build notes (2026-07-07)
Used the digest.html template (batch pipeline, no live chat) rather than globaledge.html (live RAG chat agent), since this project processes a static CSV, not live queries. Added a 4th tab "Evaluation Results" beyond the usual 3 (Overview/Architecture/Workflow) since real per-ticket scores existed to show. Same CSS design system as every other page — see [[vjra-Portfolio-Site]].

Renamed display title from "AI-Powered Support Ticket Analysis System" to "ShopNest Global Support Ticket Analysis System" across page title/h1, index.html card, README.md, JSON toolbar label, and download filename. Deliberately left the original submitted n8n workflow file untouched — both its filename (`workflows/AI-Powered Support Ticket Analysis System.json`) and its internal JSON `"name"` field — since that's the actual graded coursework artifact and renaming it would misrepresent what was submitted.
