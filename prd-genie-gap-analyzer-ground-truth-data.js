window.PRD_GENIE_GAP_ANALYZER_GROUND_TRUTH=[
  {
    "test_id": "GA-T1",
    "dataset_version": "0.3.0",
    "approval_status": "approved",
    "reviewer": "Vipin",
    "review_date": "2026-08-10",
    "canonical_input_path": "evaluation/ground-truth/requirement-extraction/t01/expected-output.json",
    "canonical_output_path": "evaluation/ground-truth/gap-analysis/ga-t01/expected-output.json",
    "canonical_input": {
      "schema_version": "1.0.0",
      "run_id": "RUN-T1-GROUND-TRUTH",
      "extraction_status": "complete",
      "summary": "Users require report filtering with a stated performance target, PM owner, and Q3 deadline.",
      "items": [
        {
          "id": "FR-001",
          "type": "functional_requirement",
          "statement": "Users should be able to filter reports by date range, category, and status.",
          "status": "stated",
          "priority": "Unspecified",
          "category": null,
          "target": null,
          "evidence": [
            {
              "quote": "The user should be able to filter reports by date range, category, and status.",
              "source_name": "eval_prdgenie_inputs.txt",
              "location": "T1",
              "speaker": null
            }
          ],
          "confidence": 1,
          "related_item_ids": []
        },
        {
          "id": "NFR-001",
          "type": "non_functional_requirement",
          "statement": "Results must load in under 2 seconds.",
          "status": "stated",
          "priority": "Unspecified",
          "category": "Performance",
          "target": "under 2 seconds",
          "evidence": [
            {
              "quote": "Results must load in under 2 seconds.",
              "source_name": "eval_prdgenie_inputs.txt",
              "location": "T1",
              "speaker": null
            }
          ],
          "confidence": 1,
          "related_item_ids": [
            "FR-001"
          ]
        },
        {
          "id": "STK-001",
          "type": "stakeholder",
          "statement": "Sarah is the PM.",
          "status": "stated",
          "priority": "Unspecified",
          "category": "Owner",
          "target": null,
          "evidence": [
            {
              "quote": "PM: Sarah.",
              "source_name": "eval_prdgenie_inputs.txt",
              "location": "T1",
              "speaker": null
            }
          ],
          "confidence": 1,
          "related_item_ids": []
        },
        {
          "id": "DDL-001",
          "type": "deadline",
          "statement": "The deadline is Q3.",
          "status": "stated",
          "priority": "Unspecified",
          "category": "Delivery",
          "target": "Q3",
          "evidence": [
            {
              "quote": "Deadline: Q3.",
              "source_name": "eval_prdgenie_inputs.txt",
              "location": "T1",
              "speaker": null
            }
          ],
          "confidence": 1,
          "related_item_ids": []
        }
      ],
      "contradictions": [],
      "missing_information": [
        {
          "id": "MISS-001",
          "category": "persona",
          "description": "The source identifies only a generic user and provides no specific persona.",
          "clarification_question": "Which user persona needs report filtering?"
        },
        {
          "id": "MISS-002",
          "category": "deadline",
          "description": "The year and calendar dates represented by Q3 are not specified.",
          "clarification_question": "Which year and calendar dates define the Q3 deadline?"
        }
      ],
      "extractor_notes": [
        "No priority was stated; priority remains Unspecified."
      ]
    },
    "canonical_output": {
      "schema_version": "1.0.0",
      "run_id": "RUN-T1-GROUND-TRUTH",
      "information_sufficiency": "sufficient",
      "generation_allowed": true,
      "recommended_action": "proceed",
      "decision_reason": "The extraction contains grounded functional, performance, stakeholder, and deadline information with no unresolved gaps, contradictions, or risks that prevent PRD generation.",
      "gaps": [],
      "contradictions": [],
      "risks": []
    },
    "coverage": [
      "Positive path",
      "Functional, performance, owner, and deadline inputs",
      "Non-material unknowns do not block generation"
    ],
    "supporting_information": [
      "Generic persona and Q3 calendar precision remain non-material for this case"
    ],
    "comparison_evidence": {
      "execution_id": "10434",
      "result": "pass",
      "langfuse_trace_id": "8793bf01c8e9463faff22384691e76fc"
    }
  },
  {
    "test_id": "GA-T2",
    "dataset_version": "0.3.0",
    "approval_status": "approved",
    "reviewer": "Vipin",
    "review_date": "2026-08-10",
    "canonical_input_path": "evaluation/ground-truth/requirement-extraction/t02/expected-output.json",
    "canonical_output_path": "evaluation/ground-truth/gap-analysis/ga-t02/expected-output.json",
    "canonical_input": {
      "schema_version": "1.0.0",
      "run_id": "RUN-T2-GROUND-TRUTH",
      "extraction_status": "partial",
      "summary": "The source requests better reporting by reference to Competitor X but does not define a testable reporting capability.",
      "items": [
        {
          "id": "FR-001",
          "type": "functional_requirement",
          "statement": "Better reporting similar to Competitor X is desired, but the required reporting capability is ambiguous.",
          "status": "ambiguous",
          "priority": "Unspecified",
          "category": "Reporting",
          "target": null,
          "evidence": [
            {
              "quote": "We need better reporting. Something like what Competitor X has.",
              "source_name": "eval_prdgenie_inputs.txt",
              "location": "T2",
              "speaker": null
            }
          ],
          "confidence": 1,
          "related_item_ids": []
        }
      ],
      "contradictions": [],
      "missing_information": [
        {
          "id": "MISS-001",
          "category": "metrics",
          "description": "Required reporting metrics are not specified.",
          "clarification_question": "Which metrics should the reports contain?"
        },
        {
          "id": "MISS-002",
          "category": "format",
          "description": "The required report format or presentation is not specified.",
          "clarification_question": "What report format or presentation is required?"
        },
        {
          "id": "MISS-003",
          "category": "users",
          "description": "The target users for better reporting are not identified.",
          "clarification_question": "Which users need the improved reporting?"
        },
        {
          "id": "MISS-004",
          "category": "scope",
          "description": "The specific Competitor X reporting capabilities to use as a reference are not identified.",
          "clarification_question": "Which specific Competitor X reporting capabilities should be used as the reference?"
        }
      ],
      "extractor_notes": [
        "Competitor X is preserved as a reference, but no Competitor X capability is treated as fact."
      ]
    },
    "canonical_output": {
      "schema_version": "1.0.0",
      "run_id": "RUN-T2-GROUND-TRUTH",
      "information_sufficiency": "insufficient",
      "generation_allowed": false,
      "recommended_action": "request_clarification",
      "decision_reason": "The reporting need is ambiguous and does not define users, success measures, report output, or the referenced Competitor X capabilities.",
      "gaps": [
        {
          "id": "GAP-001",
          "category": "users",
          "description": "The users who need better reporting are unspecified.",
          "severity": "high",
          "clarification_question": "Which user groups need better reporting?",
          "related_item_ids": [
            "FR-001"
          ],
          "source_missing_information_ids": [
            "MISS-003"
          ]
        },
        {
          "id": "GAP-002",
          "category": "metrics",
          "description": "The measures or outcomes that define better reporting are unspecified.",
          "severity": "high",
          "clarification_question": "Which measures or outcomes define better reporting?",
          "related_item_ids": [
            "FR-001"
          ],
          "source_missing_information_ids": [
            "MISS-001"
          ]
        },
        {
          "id": "GAP-003",
          "category": "output_format",
          "description": "The required report outputs, contents, formats, or delivery methods are unspecified.",
          "severity": "high",
          "clarification_question": "Which reports, contents, formats, and delivery methods are required?",
          "related_item_ids": [
            "FR-001"
          ],
          "source_missing_information_ids": [
            "MISS-002"
          ]
        },
        {
          "id": "GAP-004",
          "category": "reference_scope",
          "description": "The reporting capabilities referenced from Competitor X are unspecified.",
          "severity": "high",
          "clarification_question": "Which specific Competitor X reporting capabilities are relevant?",
          "related_item_ids": [
            "FR-001"
          ],
          "source_missing_information_ids": [
            "MISS-004"
          ]
        }
      ],
      "contradictions": [],
      "risks": []
    },
    "coverage": [
      "Ambiguous capability",
      "Users, success metrics, report output, and reference scope",
      "Four high-severity clarification gaps"
    ],
    "supporting_information": [
      "Every expected gap maps back to approved extractor missing-information records"
    ],
    "comparison_evidence": {
      "execution_id": "10434",
      "result": "pass",
      "langfuse_trace_id": "9cd00a74dd6f8757dcc6e9acf123b539"
    }
  },
  {
    "test_id": "GA-T3",
    "dataset_version": "0.3.0",
    "approval_status": "approved",
    "reviewer": "Vipin",
    "review_date": "2026-08-10",
    "canonical_input_path": "evaluation/ground-truth/requirement-extraction/t03/expected-output.json",
    "canonical_output_path": "evaluation/ground-truth/gap-analysis/ga-t03/expected-output.json",
    "canonical_input": {
      "schema_version": "1.0.0",
      "run_id": "RUN-T3-GROUND-TRUTH",
      "extraction_status": "complete",
      "summary": "The dashboard should auto-refresh every 5 seconds, and performance is critical with API calls minimized.",
      "items": [
        {
          "id": "FR-001",
          "type": "functional_requirement",
          "statement": "The dashboard should auto-refresh every 5 seconds.",
          "status": "stated",
          "priority": "Unspecified",
          "category": "Refresh",
          "target": "every 5 seconds",
          "evidence": [
            {
              "quote": "The dashboard should auto-refresh every 5 seconds.",
              "source_name": "eval_prdgenie_inputs.txt",
              "location": "T3",
              "speaker": null
            }
          ],
          "confidence": 1,
          "related_item_ids": []
        },
        {
          "id": "NFR-001",
          "type": "non_functional_requirement",
          "statement": "Performance is critical, minimize API calls.",
          "status": "stated",
          "priority": "Unspecified",
          "category": "Performance",
          "target": "minimize API calls",
          "evidence": [
            {
              "quote": "Performance is critical, minimize API calls.",
              "source_name": "eval_prdgenie_inputs.txt",
              "location": "T3",
              "speaker": null
            }
          ],
          "confidence": 1,
          "related_item_ids": []
        }
      ],
      "contradictions": [],
      "missing_information": [],
      "extractor_notes": []
    },
    "canonical_output": {
      "schema_version": "1.0.0",
      "run_id": "RUN-T3-GROUND-TRUTH",
      "information_sufficiency": "sufficient",
      "generation_allowed": true,
      "recommended_action": "proceed",
      "decision_reason": "Both stated requirements can be preserved without invention; they are not inherently contradictory and require no material clarification before human review.",
      "gaps": [],
      "contradictions": [],
      "risks": []
    },
    "coverage": [
      "Compatible requirements",
      "Auto-refresh and API-efficiency requirements coexist",
      "No invented contradiction"
    ],
    "supporting_information": [
      "Human adjudication confirmed the two requirements can be satisfied together"
    ],
    "comparison_evidence": {
      "execution_id": "10434",
      "result": "pass",
      "langfuse_trace_id": "a1acda858a4fb8ad6cb47ebdb62f26e8"
    }
  },
  {
    "test_id": "GA-T4",
    "dataset_version": "0.3.0",
    "approval_status": "approved",
    "reviewer": "Vipin",
    "review_date": "2026-08-10",
    "canonical_input_path": "evaluation/ground-truth/requirement-extraction/t04/expected-output.json",
    "canonical_output_path": "evaluation/ground-truth/gap-analysis/ga-t04/expected-output.json",
    "canonical_input": {
      "schema_version": "1.0.0",
      "run_id": "RUN-T4-GROUND-TRUTH",
      "extraction_status": "complete",
      "summary": "Users need PDF and CSV report exports with a company logo in PDF and preserved formulas in CSV.",
      "items": [
        {
          "id": "FR-001",
          "type": "functional_requirement",
          "statement": "Users need to export reports as PDF and CSV.",
          "status": "stated",
          "priority": "Unspecified",
          "category": "Report export",
          "target": null,
          "evidence": [
            {
              "quote": "Users need to export reports as PDF and CSV.",
              "source_name": "eval_prdgenie_inputs.txt",
              "location": "T4",
              "speaker": null
            }
          ],
          "confidence": 1,
          "related_item_ids": [
            "AC-001",
            "AC-002"
          ]
        },
        {
          "id": "AC-001",
          "type": "acceptance_criterion",
          "statement": "PDF must include company logo.",
          "status": "stated",
          "priority": "Unspecified",
          "category": "PDF export",
          "target": "include company logo",
          "evidence": [
            {
              "quote": "PDF must include company logo.",
              "source_name": "eval_prdgenie_inputs.txt",
              "location": "T4",
              "speaker": null
            }
          ],
          "confidence": 1,
          "related_item_ids": [
            "FR-001"
          ]
        },
        {
          "id": "AC-002",
          "type": "acceptance_criterion",
          "statement": "CSV must preserve formulas.",
          "status": "stated",
          "priority": "Unspecified",
          "category": "CSV export",
          "target": "preserve formulas",
          "evidence": [
            {
              "quote": "CSV must preserve formulas.",
              "source_name": "eval_prdgenie_inputs.txt",
              "location": "T4",
              "speaker": null
            }
          ],
          "confidence": 1,
          "related_item_ids": [
            "FR-001"
          ]
        }
      ],
      "contradictions": [],
      "missing_information": [],
      "extractor_notes": [
        "The PDF and CSV conditions are acceptance criteria linked to the report-export functional requirement."
      ]
    },
    "canonical_output": {
      "schema_version": "1.0.0",
      "run_id": "RUN-T4-GROUND-TRUTH",
      "information_sufficiency": "sufficient",
      "generation_allowed": true,
      "recommended_action": "proceed",
      "decision_reason": "The extraction contains a grounded report-export functional requirement and explicit acceptance criteria for PDF and CSV exports, with no unresolved gaps, contradictions, or risks that prevent PRD generation.",
      "gaps": [],
      "contradictions": [],
      "risks": []
    },
    "coverage": [
      "Complete requirement",
      "Report export with explicit acceptance criteria",
      "Proceed without additional gaps"
    ],
    "supporting_information": [
      "PDF and CSV acceptance criteria are explicit in the upstream extraction"
    ],
    "comparison_evidence": {
      "execution_id": "10434",
      "result": "pass",
      "langfuse_trace_id": "cb3a46d7464bd27bb106de69ad9c33d9"
    }
  },
  {
    "test_id": "GA-T5",
    "dataset_version": "0.3.0",
    "approval_status": "approved",
    "reviewer": "Vipin",
    "review_date": "2026-08-10",
    "canonical_input_path": "evaluation/ground-truth/requirement-extraction/t05/expected-output.json",
    "canonical_output_path": "evaluation/ground-truth/gap-analysis/ga-t05/expected-output.json",
    "canonical_input": {
      "schema_version": "1.0.0",
      "run_id": "RUN-T5-GROUND-TRUTH",
      "extraction_status": "partial",
      "summary": "The source contains product-relevant fragments about a dashboard, a real-time concept mentioned by John, and a budget marked TBD, but no sufficiently specific requirement can be extracted.",
      "items": [],
      "contradictions": [],
      "missing_information": [
        {
          "id": "MISS-001",
          "category": "dashboard_scope",
          "description": "The dashboard capability or outcome discussed is not specified.",
          "clarification_question": "What dashboard capability, user need, or outcome was discussed?"
        },
        {
          "id": "MISS-002",
          "category": "real_time_behavior",
          "description": "John's mention of real-time does not identify what should operate or update in real time.",
          "clarification_question": "What did John mean by real-time, and which dashboard behavior or data should be real-time?"
        },
        {
          "id": "MISS-003",
          "category": "budget",
          "description": "The budget is explicitly TBD and no amount, range, currency, owner, or decision date is provided.",
          "clarification_question": "What budget has been approved or proposed, in which currency, and when will it be decided?"
        }
      ],
      "extractor_notes": [
        "Preserved source fragments: John, real-time, and budget TBD.",
        "No dashboard scope, real-time behavior, or budget value is promoted to a requirement."
      ]
    },
    "canonical_output": {
      "schema_version": "1.0.0",
      "run_id": "RUN-T5-GROUND-TRUTH",
      "information_sufficiency": "insufficient",
      "generation_allowed": false,
      "recommended_action": "request_clarification",
      "decision_reason": "The source contains product-relevant fragments, but no reliable requirement item exists and the dashboard scope, real-time behavior, and budget require clarification.",
      "gaps": [
        {
          "id": "GAP-001",
          "category": "dashboard_scope",
          "description": "The dashboard capability, user need, or intended outcome is unspecified.",
          "severity": "blocking",
          "clarification_question": "What dashboard capability, user need, or outcome was discussed?",
          "related_item_ids": [],
          "source_missing_information_ids": [
            "MISS-001"
          ]
        },
        {
          "id": "GAP-002",
          "category": "real_time_behavior",
          "description": "The intended real-time behavior and affected dashboard data or capability are unspecified.",
          "severity": "blocking",
          "clarification_question": "What did John mean by real-time, and which dashboard behavior or data should be real-time?",
          "related_item_ids": [],
          "source_missing_information_ids": [
            "MISS-002"
          ]
        },
        {
          "id": "GAP-003",
          "category": "budget",
          "description": "The budget remains explicitly stated as budget TBD.",
          "severity": "high",
          "clarification_question": "What budget has been approved or proposed, in which currency, and when will it be decided?",
          "related_item_ids": [],
          "source_missing_information_ids": [
            "MISS-003"
          ]
        }
      ],
      "contradictions": [],
      "risks": []
    },
    "coverage": [
      "Fragmentary notes",
      "Dashboard scope and real-time behavior are unresolved",
      "Budget remains a high-severity gap"
    ],
    "supporting_information": [
      "No reliable requirement item exists; clarification is required before generation"
    ],
    "comparison_evidence": {
      "execution_id": "10434",
      "result": "pass",
      "langfuse_trace_id": "2749ba42efb2dcc7936440abcd2e8b27"
    }
  },
  {
    "test_id": "GA-T6",
    "dataset_version": "0.3.0",
    "approval_status": "approved",
    "reviewer": "Vipin",
    "review_date": "2026-08-10",
    "canonical_input_path": "evaluation/ground-truth/requirement-extraction/t06/expected-output.json",
    "canonical_output_path": "evaluation/ground-truth/gap-analysis/ga-t06/expected-output.json",
    "canonical_input": {
      "schema_version": "1.0.0",
      "run_id": "RUN-T6-GROUND-TRUTH",
      "extraction_status": "partial",
      "summary": "Engineering prefers microservices, Design prefers a single-page app, and the PM wants delivery by March; approval status, the precise deadline, and the delivery scope remain unspecified.",
      "items": [
        {
          "id": "CON-001",
          "type": "constraint",
          "statement": "Engineering wants microservices.",
          "status": "suggested",
          "priority": "Unspecified",
          "category": "Architecture preference",
          "target": "microservices",
          "evidence": [
            {
              "quote": "Engineering wants microservices.",
              "source_name": "eval_prdgenie_inputs.txt",
              "location": "T6",
              "speaker": "Engineering"
            }
          ],
          "confidence": 1,
          "related_item_ids": []
        },
        {
          "id": "CON-002",
          "type": "constraint",
          "statement": "Design wants a single-page app.",
          "status": "suggested",
          "priority": "Unspecified",
          "category": "Architecture preference",
          "target": "single-page app",
          "evidence": [
            {
              "quote": "Design wants single-page app.",
              "source_name": "eval_prdgenie_inputs.txt",
              "location": "T6",
              "speaker": "Design"
            }
          ],
          "confidence": 1,
          "related_item_ids": []
        },
        {
          "id": "DDL-001",
          "type": "deadline",
          "statement": "The PM wants it shipped by March.",
          "status": "stated",
          "priority": "Unspecified",
          "category": "Delivery",
          "target": "March",
          "evidence": [
            {
              "quote": "PM wants it shipped by March.",
              "source_name": "eval_prdgenie_inputs.txt",
              "location": "T6",
              "speaker": "PM"
            }
          ],
          "confidence": 1,
          "related_item_ids": []
        }
      ],
      "contradictions": [],
      "missing_information": [
        {
          "id": "MISS-001",
          "category": "decision_status",
          "description": "The source does not state whether either architecture preference is approved.",
          "clarification_question": "What is the approval status of the microservices proposal and, independently, what is the approval status of the single-page app proposal?"
        },
        {
          "id": "MISS-002",
          "category": "deadline",
          "description": "The year and exact date represented by March are not specified.",
          "clarification_question": "Which year and exact date define the March deadline?"
        },
        {
          "id": "MISS-003",
          "category": "scope",
          "description": "The product or deliverable referred to as it is not identified.",
          "clarification_question": "What product or deliverable must be shipped by March?"
        }
      ],
      "extractor_notes": [
        "The viewpoints remain separate and neither architecture preference is selected.",
        "Microservices and a single-page app may concern different system layers and can coexist; the source does not support a contradiction or cross-link between them."
      ]
    },
    "canonical_output": {
      "schema_version": "1.0.0",
      "run_id": "RUN-T6-GROUND-TRUTH",
      "information_sufficiency": "insufficient",
      "generation_allowed": false,
      "recommended_action": "request_clarification",
      "decision_reason": "The product or deliverable is unidentified, neither architecture preference has been approved, and the March deadline lacks a year and exact date.",
      "gaps": [
        {
          "id": "GAP-001",
          "category": "decision_status",
          "description": "The source does not state whether either architecture preference is approved.",
          "severity": "blocking",
          "clarification_question": "Have microservices or the single-page app been approved, or are both still proposals?",
          "related_item_ids": [
            "CON-001",
            "CON-002"
          ],
          "source_missing_information_ids": [
            "MISS-001"
          ]
        },
        {
          "id": "GAP-002",
          "category": "deadline",
          "description": "The year and exact date represented by March are not specified.",
          "severity": "high",
          "clarification_question": "Which year and exact date define the March deadline?",
          "related_item_ids": [
            "DDL-001"
          ],
          "source_missing_information_ids": [
            "MISS-002"
          ]
        },
        {
          "id": "GAP-003",
          "category": "scope",
          "description": "The product or deliverable referred to as it is not identified.",
          "severity": "blocking",
          "clarification_question": "What product or deliverable must be shipped by March?",
          "related_item_ids": [
            "DDL-001"
          ],
          "source_missing_information_ids": [
            "MISS-003"
          ]
        }
      ],
      "contradictions": [],
      "risks": []
    },
    "coverage": [
      "Decision readiness",
      "Architecture approval, deadline precision, and delivery scope",
      "No false microservices-versus-SPA contradiction"
    ],
    "supporting_information": [
      "Human review confirmed that microservices and a single-page app can coexist"
    ],
    "comparison_evidence": {
      "execution_id": "10434",
      "result": "pass",
      "langfuse_trace_id": "58556d70fa102e8d9b584092c14d811c"
    }
  },
  {
    "test_id": "GA-T7",
    "dataset_version": "0.3.0",
    "approval_status": "approved",
    "reviewer": "Vipin",
    "review_date": "2026-08-10",
    "canonical_input_path": "evaluation/ground-truth/requirement-extraction/t07/expected-output.json",
    "canonical_output_path": "evaluation/ground-truth/gap-analysis/ga-t07/expected-output.json",
    "canonical_input": {
      "schema_version": "1.0.0",
      "run_id": "RUN-T7-GROUND-TRUTH",
      "extraction_status": "complete",
      "summary": "The API has exact scalability, p95 response-time, and Salesforce REST API v52 integration requirements.",
      "items": [
        {
          "id": "NFR-001",
          "type": "non_functional_requirement",
          "statement": "API must support 10,000 concurrent users.",
          "status": "stated",
          "priority": "Unspecified",
          "category": "Scalability",
          "target": "10,000 concurrent users",
          "evidence": [
            {
              "quote": "API must support 10,000 concurrent users.",
              "source_name": "eval_prdgenie_inputs.txt",
              "location": "T7",
              "speaker": null
            }
          ],
          "confidence": 1,
          "related_item_ids": []
        },
        {
          "id": "NFR-002",
          "type": "non_functional_requirement",
          "statement": "Response time < 200ms at p95.",
          "status": "stated",
          "priority": "Unspecified",
          "category": "Performance",
          "target": "< 200ms at p95",
          "evidence": [
            {
              "quote": "Response time < 200ms at p95.",
              "source_name": "eval_prdgenie_inputs.txt",
              "location": "T7",
              "speaker": null
            }
          ],
          "confidence": 1,
          "related_item_ids": []
        },
        {
          "id": "NFR-003",
          "type": "non_functional_requirement",
          "statement": "Must integrate with Salesforce REST API v52.",
          "status": "stated",
          "priority": "Unspecified",
          "category": "Integration",
          "target": "Salesforce REST API v52",
          "evidence": [
            {
              "quote": "Must integrate with Salesforce REST API v52.",
              "source_name": "eval_prdgenie_inputs.txt",
              "location": "T7",
              "speaker": null
            }
          ],
          "confidence": 1,
          "related_item_ids": []
        }
      ],
      "contradictions": [],
      "missing_information": [],
      "extractor_notes": [
        "For this evaluation contract, the named external API and exact version are represented once as an integration non-functional requirement."
      ]
    },
    "canonical_output": {
      "schema_version": "1.0.0",
      "run_id": "RUN-T7-GROUND-TRUTH",
      "information_sufficiency": "sufficient",
      "generation_allowed": true,
      "recommended_action": "proceed",
      "decision_reason": "The extraction contains grounded and exact scalability, performance, and Salesforce integration requirements, with no unresolved gaps, contradictions, or risks that prevent PRD generation.",
      "gaps": [],
      "contradictions": [],
      "risks": []
    },
    "coverage": [
      "Exact constraints",
      "Scalability, performance, and Salesforce integration",
      "Proceed with preserved exact values"
    ],
    "supporting_information": [
      "All numeric and integration constraints are explicitly grounded"
    ],
    "comparison_evidence": {
      "execution_id": "10434",
      "result": "pass",
      "langfuse_trace_id": "2f19d82d5b3d12cdd73bc60de4ef9417"
    }
  },
  {
    "test_id": "GA-T8",
    "dataset_version": "0.3.0",
    "approval_status": "approved",
    "reviewer": "Vipin",
    "review_date": "2026-08-10",
    "canonical_input_path": "evaluation/ground-truth/requirement-extraction/t08/expected-output.json",
    "canonical_output_path": "evaluation/ground-truth/gap-analysis/ga-t08/expected-output.json",
    "canonical_input": {
      "schema_version": "1.0.0",
      "run_id": "RUN-T8-GROUND-TRUTH",
      "extraction_status": "complete",
      "summary": "Admins, End users, and Auditors are distinct personas with bulk user management, a simplified view, and read-only access with full history respectively.",
      "items": [
        {
          "id": "PER-001",
          "type": "persona",
          "statement": "Admins are a distinct persona.",
          "status": "stated",
          "priority": "Unspecified",
          "category": "Admin",
          "target": null,
          "evidence": [
            {
              "quote": "Admins need bulk user management.",
              "source_name": "eval_prdgenie_inputs.txt",
              "location": "T8",
              "speaker": null
            }
          ],
          "confidence": 1,
          "related_item_ids": [
            "FR-001"
          ]
        },
        {
          "id": "FR-001",
          "type": "functional_requirement",
          "statement": "Provide bulk user management for Admins.",
          "status": "stated",
          "priority": "Unspecified",
          "category": "User management",
          "target": "bulk user management",
          "evidence": [
            {
              "quote": "Admins need bulk user management.",
              "source_name": "eval_prdgenie_inputs.txt",
              "location": "T8",
              "speaker": null
            }
          ],
          "confidence": 1,
          "related_item_ids": [
            "PER-001"
          ]
        },
        {
          "id": "PER-002",
          "type": "persona",
          "statement": "End users are a distinct persona.",
          "status": "stated",
          "priority": "Unspecified",
          "category": "End user",
          "target": null,
          "evidence": [
            {
              "quote": "End users need a simplified view.",
              "source_name": "eval_prdgenie_inputs.txt",
              "location": "T8",
              "speaker": null
            }
          ],
          "confidence": 1,
          "related_item_ids": [
            "FR-002"
          ]
        },
        {
          "id": "FR-002",
          "type": "functional_requirement",
          "statement": "Provide a simplified view for End users.",
          "status": "stated",
          "priority": "Unspecified",
          "category": "User experience",
          "target": "simplified view",
          "evidence": [
            {
              "quote": "End users need a simplified view.",
              "source_name": "eval_prdgenie_inputs.txt",
              "location": "T8",
              "speaker": null
            }
          ],
          "confidence": 1,
          "related_item_ids": [
            "PER-002"
          ]
        },
        {
          "id": "PER-003",
          "type": "persona",
          "statement": "Auditors are a distinct persona.",
          "status": "stated",
          "priority": "Unspecified",
          "category": "Auditor",
          "target": null,
          "evidence": [
            {
              "quote": "Auditors need read-only access with full history.",
              "source_name": "eval_prdgenie_inputs.txt",
              "location": "T8",
              "speaker": null
            }
          ],
          "confidence": 1,
          "related_item_ids": [
            "FR-003"
          ]
        },
        {
          "id": "FR-003",
          "type": "functional_requirement",
          "statement": "Provide read-only access with full history for Auditors.",
          "status": "stated",
          "priority": "Unspecified",
          "category": "Audit access",
          "target": "read-only access with full history",
          "evidence": [
            {
              "quote": "Auditors need read-only access with full history.",
              "source_name": "eval_prdgenie_inputs.txt",
              "location": "T8",
              "speaker": null
            }
          ],
          "confidence": 1,
          "related_item_ids": [
            "PER-003"
          ]
        }
      ],
      "contradictions": [],
      "missing_information": [],
      "extractor_notes": [
        "Each persona remains separate and is linked only to its stated capability."
      ]
    },
    "canonical_output": {
      "schema_version": "1.0.0",
      "run_id": "RUN-T8-GROUND-TRUTH",
      "information_sufficiency": "sufficient",
      "generation_allowed": true,
      "recommended_action": "proceed",
      "decision_reason": "The extraction contains three grounded personas with three explicitly linked functional capabilities, with no unresolved gaps, contradictions, or risks that prevent PRD generation.",
      "gaps": [],
      "contradictions": [],
      "risks": []
    },
    "coverage": [
      "Persona mapping",
      "Three personas linked to three capabilities",
      "Proceed with relationships preserved"
    ],
    "supporting_information": [
      "Persona-to-capability relationships are explicitly available upstream"
    ],
    "comparison_evidence": {
      "execution_id": "10434",
      "result": "pass",
      "langfuse_trace_id": "b38f0b8cd940421d0b1af2779d0584d2"
    }
  },
  {
    "test_id": "GA-T9",
    "dataset_version": "0.3.0",
    "approval_status": "approved",
    "reviewer": "Vipin",
    "review_date": "2026-08-10",
    "canonical_input_path": "evaluation/ground-truth/requirement-extraction/t09/expected-output.json",
    "canonical_output_path": "evaluation/ground-truth/gap-analysis/ga-t09/expected-output.json",
    "canonical_input": {
      "schema_version": "1.0.0",
      "run_id": "RUN-T9-GROUND-TRUTH",
      "extraction_status": "no_requirements",
      "summary": "No product requirements are extractable from the supplied input.",
      "items": [],
      "contradictions": [],
      "missing_information": [
        {
          "id": "MISS-001",
          "category": "requirements_source",
          "description": "The supplied input contains no substantive meeting notes or product requirements.",
          "clarification_question": "Please provide the meeting transcript, decisions, product brief, stakeholder notes, or another source containing product requirements."
        }
      ],
      "extractor_notes": [
        "PRD generation must not proceed from this input."
      ]
    },
    "canonical_output": {
      "schema_version": "1.0.0",
      "run_id": "RUN-T9-GROUND-TRUTH",
      "information_sufficiency": "insufficient",
      "generation_allowed": false,
      "recommended_action": "block_generation",
      "decision_reason": "No meaningful product requirements are available, so generating a PRD would require unsupported content.",
      "gaps": [
        {
          "id": "GAP-001",
          "category": "requirements",
          "description": "No meaningful product requirements or substantive product notes were provided.",
          "severity": "blocking",
          "clarification_question": "Please provide a transcript, decisions, or product requirements to document.",
          "related_item_ids": [],
          "source_missing_information_ids": [
            "MISS-001"
          ]
        }
      ],
      "contradictions": [],
      "risks": []
    },
    "coverage": [
      "Empty input",
      "No substantive product requirements",
      "Block unsupported PRD generation"
    ],
    "supporting_information": [
      "The empty-input safeguard prevents hallucinated requirements"
    ],
    "comparison_evidence": {
      "execution_id": "10434",
      "result": "pass",
      "langfuse_trace_id": "accca78e90b495abe6255276ab4c2e3a"
    }
  },
  {
    "test_id": "GA-T10",
    "dataset_version": "0.3.0",
    "approval_status": "approved",
    "reviewer": "Vipin",
    "review_date": "2026-08-10",
    "canonical_input_path": "evaluation/ground-truth/requirement-extraction/t10/expected-output.json",
    "canonical_output_path": "evaluation/ground-truth/gap-analysis/ga-t10/expected-output.json",
    "canonical_input": {
      "schema_version": "1.0.0",
      "run_id": "RUN-T10-GROUND-TRUTH",
      "extraction_status": "complete",
      "summary": "SSO login requires a new auth service being built by Team Alpha, and the service ETA is explicitly unknown.",
      "items": [
        {
          "id": "FR-001",
          "type": "functional_requirement",
          "statement": "Provide SSO login.",
          "status": "stated",
          "priority": "Unspecified",
          "category": "Authentication",
          "target": "SSO login",
          "evidence": [
            {
              "quote": "SSO login requires the new auth service which is being built by Team Alpha.",
              "source_name": "eval_prdgenie_inputs.txt",
              "location": "T10",
              "speaker": null
            }
          ],
          "confidence": 1,
          "related_item_ids": [
            "DEP-001"
          ]
        },
        {
          "id": "DEP-001",
          "type": "dependency",
          "statement": "SSO login requires the new auth service which is being built by Team Alpha.",
          "status": "stated",
          "priority": "Unspecified",
          "category": "Authentication service",
          "target": "new auth service",
          "evidence": [
            {
              "quote": "SSO login requires the new auth service which is being built by Team Alpha.",
              "source_name": "eval_prdgenie_inputs.txt",
              "location": "T10",
              "speaker": null
            }
          ],
          "confidence": 1,
          "related_item_ids": [
            "FR-001",
            "RSK-001"
          ]
        },
        {
          "id": "RSK-001",
          "type": "risk",
          "statement": "The unknown ETA for the new auth service may create delivery risk for SSO login.",
          "status": "ambiguous",
          "priority": "Unspecified",
          "category": "Derived delivery risk",
          "target": "ETA unknown",
          "evidence": [
            {
              "quote": "ETA unknown.",
              "source_name": "eval_prdgenie_inputs.txt",
              "location": "T10",
              "speaker": null
            }
          ],
          "confidence": 0.8,
          "related_item_ids": [
            "DEP-001"
          ]
        }
      ],
      "contradictions": [],
      "missing_information": [],
      "extractor_notes": [
        "The unknown ETA is the stated source fact. Delivery impact is a supported inference and must not be represented as explicitly stated by the source."
      ]
    },
    "canonical_output": {
      "schema_version": "1.0.0",
      "run_id": "RUN-T10-GROUND-TRUTH",
      "information_sufficiency": "partially_sufficient",
      "generation_allowed": true,
      "recommended_action": "proceed_with_tbd",
      "decision_reason": "The SSO requirement and authentication-service dependency are grounded and can be documented, while the explicitly unknown ETA must remain TBD.",
      "gaps": [
        {
          "id": "GAP-001",
          "category": "dependency_eta",
          "description": "The ETA for the authentication service is explicitly unknown.",
          "severity": "medium",
          "clarification_question": "What is the ETA for the authentication service being built by Team Alpha?",
          "related_item_ids": [
            "DEP-001",
            "RSK-001"
          ],
          "source_missing_information_ids": []
        }
      ],
      "contradictions": [],
      "risks": [
        {
          "id": "RSK-001",
          "description": "The authentication service required for SSO login has an unknown ETA.",
          "severity": "medium",
          "related_item_ids": [
            "DEP-001"
          ],
          "source_risk_ids": [
            "RSK-001"
          ]
        }
      ]
    },
    "coverage": [
      "Controlled TBD",
      "Grounded SSO dependency with unknown ETA",
      "Proceed while preserving the ETA as TBD"
    ],
    "supporting_information": [
      "The dependency and risk are grounded; only the ETA is unknown"
    ],
    "comparison_evidence": {
      "execution_id": "10434",
      "result": "pass",
      "langfuse_trace_id": "69bf2008a4fee5706238df546db0d3be"
    }
  }
];
