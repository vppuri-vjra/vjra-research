---
name: VP Report Generator — Jira Pipeline
description: Vipin's daily VP portfolio health report system — Jira → PPTX/Google Slides with escalation emails and GitHub Actions automation
type: project
originSessionId: 8d784ada-1f62-42b8-bc2c-27e54e30a928
---
**Project:** VP Report Generator
**Local path:** /Users/vipin/Downloads/vp_report_generator/
**GitHub:** repo with GitHub Actions workflows

## What it does
Automated daily pipeline that:
1. Injects dummy Jira issues into project KAN (simulates real activity)
2. Monitors Jira for deltas (new issues, status changes, priority escalations, overdue)
3. Sends HTML delta email to vp.puri@gmail.com
4. Generates 5-slide (or 9-slide) PPTX exec report from Jira CSV
5. Optionally exports to Google Slides via Drive API
6. Emails escalation draft to Gmail; VP approves → GitHub Actions sends to VP

## GitHub Actions workflows (all in /vp_report_generator/.github/workflows/)
| Workflow | Cron (UTC) | Pacific | Output |
|----------|-----------|---------|--------|
| daily_jira_injector.yml | 0 12 * * * | 5:00 AM | 3 issues in Jira KAN |
| jira_monitor.yml | 30 12 * * * | 5:30 AM | Delta email → Gmail |
| escalation_agent.yml | 45 12 * * * | 5:45 AM | escalation_draft.json (7-day artifact) |
| daily_report.yml | 0 13 * * * | 6:00 AM daily + Fridays | PPTX (7-day artifact) |
| send_escalation_to_vp.yml | Manual | On-demand | Email to VP after approval |

## Claude scheduled tasks (sidebar)
| Task | Time |
|------|------|
| jira-daily-dummy-injector | 7:00 AM daily |
| daily-portfolio-health-dashboard-report | 8:08 AM daily |
| risk-and-dependency-report | 8:00 AM Mondays |

## Key files
- `run_biweekly_report.py` — main report generator (5 or 9 slides)
- `add_daily_dummy_issues.py` — Jira dummy injector
- `jira_exports/` — CSV source data
- `output/` — generated PPTX files
- `meeting_notes.txt` — input for slides 6-9
- `.env` — Jira creds, Claude API key, Google service account, VP_EMAIL

## Recent changes (as of Apr 14 2026)
- Added Google Slides export (--google-slides flag, Drive API upload)
- escalation_draft.json moved out of repo → 7-day GitHub Actions artifact
- PPTX artifact retention changed from 30 → 7 days
- Atlassian API token "VP Report" was expiring (2026-04-12) — needed renewal

**Why:** Vipin manages a portfolio and uses this to automate exec reporting to VP.
**How to apply:** When continuing this project, check the output/ folder and GitHub Actions run history for latest status.
