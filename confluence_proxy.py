"""
Local CORS proxy for the Confluence Cloud REST API.

Browsers can't call the Confluence API directly (CORS is blocked), so this
small Flask server sits in between: the confluence.html page on vjra.us
calls this proxy on localhost, and the proxy calls Confluence with server-side
Basic auth (email + API token, both loaded from .env — never hardcoded).

Run:
    pip install -r requirements.txt
    cp .env.example .env   # fill in CONFLUENCE_EMAIL / CONFLUENCE_TOKEN
    python confluence_proxy.py

Endpoints:
    GET /health              -> {"ok": true} if credentials are loaded
    GET /search?q=<text>     -> CQL text search across the whole site
    GET /page/<page_id>      -> page title/space/plain-text body
"""

import os
import re
import html as html_lib

import requests
from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

CONFLUENCE_BASE = "https://gutmoss.atlassian.net/wiki"
EMAIL = os.environ.get("CONFLUENCE_EMAIL")
TOKEN = os.environ.get("CONFLUENCE_TOKEN")

app = Flask(__name__)
CORS(app, origins=[
    "https://vjra.us",
    r"http://localhost:\d+",
    r"http://127\.0\.0\.1:\d+",
    "null",  # file:// pages during local dev
])


def confluence_get(path, params=None):
    resp = requests.get(
        f"{CONFLUENCE_BASE}{path}",
        params=params,
        auth=(EMAIL, TOKEN),
        headers={"Accept": "application/json"},
        timeout=15,
    )
    resp.raise_for_status()
    return resp.json()


def storage_to_text(storage_html):
    text = re.sub(r"<[^>]+>", " ", storage_html or "")
    text = html_lib.unescape(text)
    return re.sub(r"\s+", " ", text).strip()


@app.route("/health")
def health():
    return jsonify({"ok": bool(EMAIL and TOKEN)})


@app.route("/search")
def search():
    query = request.args.get("q", "").strip()
    if not query:
        return jsonify({"error": "missing q param"}), 400

    cql = f'text ~ "{query}" and type=page'
    try:
        data = confluence_get(
            "/rest/api/content/search",
            params={"cql": cql, "limit": 8, "expand": "space"},
        )
    except requests.HTTPError as e:
        return jsonify({"error": str(e)}), 502

    results = [
        {
            "id": r["id"],
            "title": r["title"],
            "space": r.get("space", {}).get("name", ""),
            "url": CONFLUENCE_BASE + r["_links"]["webui"],
        }
        for r in data.get("results", [])
    ]
    return jsonify({"query": query, "results": results})


@app.route("/page/<page_id>")
def page(page_id):
    try:
        data = confluence_get(
            f"/rest/api/content/{page_id}",
            params={"expand": "body.storage,space"},
        )
    except requests.HTTPError as e:
        return jsonify({"error": str(e)}), 502

    body = data.get("body", {}).get("storage", {}).get("value", "")
    return jsonify({
        "id": data["id"],
        "title": data["title"],
        "space": data.get("space", {}).get("name", ""),
        "text": storage_to_text(body)[:8000],
    })


if __name__ == "__main__":
    if not (EMAIL and TOKEN):
        print("WARNING: CONFLUENCE_EMAIL / CONFLUENCE_TOKEN not set — copy .env.example to .env first.")
    app.run(port=5175, debug=True)
