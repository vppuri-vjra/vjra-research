---
name: Spiritual Science Website
description: Two-site static HTML project — Source Nature (Life Blosssoms) + Vjra Soul Seva healing practice. GitHub: vppuri-vjra/vjra-soul-seva
type: project
originSessionId: 7efc5a60-e3f1-45ee-ab0b-a1079ed89159
---
# Spiritual Science Website

**Location:** `/Users/vipin/Downloads/Claude Sample Code/spiritual-science/`
**GitHub:** https://github.com/vppuri-vjra/vjra-soul-seva (public repo, pushed 2026-04-30)
**Dev server:** `python3 -m http.server 7788 --directory spiritual-science` → http://localhost:7788

**Why:** Two connected sites sharing the same cream/Cormorant aesthetic:
1. **Source Nature** (`index-light.html`) — Life Blosssoms, 10 Greatest Qualities
2. **Vjra Soul Seva** (`vjra-soul-seva.html`) — Tina & Vipin Puri healing practice, converted from Wix site

## Key files
- `index-light.html` — Source Nature home (Life Blosssoms aesthetic, Vibrational Field dropdown in nav)
- `vibrational-field-v2.html` — Waves & Vibrational Field science page (SVG oval diagram, human figures, quantum entanglement)
- `vjra-soul-seva.html` — Vjra Soul Seva full site (6 sections, contact form, photos of Tina & Vipin)
- `js/qualities-data.js` — all 10 quality data objects
- `css/shared.css` — shared nav, badges, footer styles
- `js/nav.js` — `buildNav()` shared navigation
- `img/` — vf-* images for vibrational field page

## Vjra Soul Seva page sections
1. Hero — cream bg, rose petals, "Go Beyond Symptoms / Heal the Source"
2. 01 · Healing — How This Work Creates Real Change (full text from Wix, no compression)
3. 02 · Pathways — 4 pathways with Wix CDN images (Physical, Relationships, Mental, Career)
4. 03 · Approach — How Our Approach Works + What You May Experience (15 bullets across 3 categories)
5. 04 · Stories — 4 full testimonials (J., N., S., S.) — restored verbatim from Wix
6. Science link — "The Science of Vibrational Fields →" between Stories and About
7. 05 · About — Tina & Vipin photos (Wix CDN), credentials, bios, What We Offer Today
8. 06 · Connect — contact form (Formspree, needs YOUR_FORM_ID replaced), email/phone/WhatsApp

## Cross-site navigation
- `vjra-soul-seva.html` nav: Healing · Pathways · Stories · Science · About · Connect With Us
- Science link → `vibrational-field-v2.html`
- `vibrational-field-v2.html` nav: Source Nature ↩ · Vjra Soul Seva ↩
- `index-light.html` nav: Vibrational Field dropdown → 4 section anchors on vibrational-field-v2.html

## Formspree setup needed
- In `vjra-soul-seva.html` contact form, replace `YOUR_FORM_ID` with actual ID from formspree.io
- Form sends to vjrasoulseva@gmail.com

## Design system
- **Fonts:** Cormorant Garamond (editorial/serif) + Inter (body) from Google Fonts
- **Background:** warm cream (`--cream: #fdf8f2`)
- **Layout:** 3-column editorial grid `260px 1fr 220px`
- **Petals:** CSS ellipse `border-radius: 50% 50% 50% 50% / 65% 65% 35% 35%` with radial-gradient
- **Hero title:** "Source" (italic light 300) / "Nature" (upright medium 500) / "10 Greatest Qualities" (italic light sub)
- **Wavy SVG dividers** between sections

## Petal color system
- **Rose red:** `radial-gradient(ellipse at 40% 35%,#e8405a,#9b1030,#6b000e)` + `box-shadow:inset -3px -4px 8px rgba(0,0,0,.3),inset 1px 1px 4px rgba(255,100,120,.15)`
- **Pink variants:** `#f5a0a8,#c41e3a` / `#e87080,#b01830` / `#f08090,#c41e3a`

## Hero petal placement (`.hero-petals`)
- Left side: top:35% and top:55% are rose red; top:68% is pink
- Right side: top:42%;right:5% is rose red; others pink

## Cluster petal rule (current)
- 4 decorative clusters in editorial sections (intro, qualities list, circle-img, practices)
- Each cluster: **smallest outer petal** is rose red; all larger petals are pink variants
- Rejected approaches: SVG heart petals (reverted), center hero petal, large petal as rose red, inner petal as rose red

## How to apply
- Keep rose red only on the smallest outer/accent petal in each cluster
- Hero side petals: middle-ish positions on left and one on right are rose red
- Never apply rose red to the dominant/largest petal in a cluster
