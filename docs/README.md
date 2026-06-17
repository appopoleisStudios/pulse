# Pulse — Genki v2 redesign (PM charter)

**Codename:** Pulse (App Store name TBD)  
**Org:** Appopoleis (`appopoleisStudios`)  
**Status:** Phase 0 — **Design review** (no implementation until approved)  
**Owner:** Arsalan (PM) · Cursor executes rails  
**Prior app:** `genkihealth` (Mathias Arkayin client — legacy; not blocking v2)

## North star

Enterprise-grade, **modern Apple-native** health app. Same product capabilities as Genki v1, **entirely new visual system** and IA. New Apple Developer identity + new App Store listing.

## Phases (gates)

| Phase | Deliverable | Gate |
|-------|-------------|------|
| **0 — Design** | Stitch mockups + `/design/pulse` review page | **You approve all screens** |
| **1 — Scaffold** | `pulse-ios` Expo repo, design tokens only | Matches approved Stitch |
| **2 — Shell** | Navigation + empty screens matching design | Pixel diff vs mockups |
| **3 — Logic port** | Supabase, HealthKit, StoreKit, AI from v1 | Feature parity checklist |
| **4 — TestFlight** | New bundle ID, EAS staging | Internal QA |
| **5 — App Store** | New listing, screenshots from approved designs | Launch |

**Rule:** No Phase 1 code until Phase 0 sign-off on `/design/pulse`.

## Design toolchain

| Tool | Role |
|------|------|
| **Google Stitch** | Generate + iterate mobile screens (same workflow as immersive showcase) |
| **`/design/pulse`** | Browser review gallery on appopoleis.com |
| **typeui `refined`/`premium` skill** | Visual direction for Cursor during implementation |
| **arc-skill + roninforge-expo** | RN architecture rails (Phase 1+) |

## Stitch project (create in your Google account)

- **Name:** `Pulse — Appopoleis Health iOS`
- **Open:** https://stitch.withgoogle.com
- **Export:** PNG per screen → `ai-router/docs/genki-v2-redesign/stitch/screens/`
- **Manifest:** `screens-manifest.json` (screen id, title, status, stitch prompt)

When Stitch MCP is healthy in Cursor, we can push prompts directly; until then, use Stitch web UI + drop PNGs in `stitch/screens/`.

## Repo plan (Phase 1+)

- **New repo:** `appopoleisStudios/pulse-ios` (Expo 55, greenfield UI)
- **Design assets:** This folder + `ai-app-solutions` gallery route
- **Logic reference:** `/home/moraen/projects/genkihealth` (read-only port source)

## Sign-off

Design approval = all screens in manifest marked `approved` + your explicit OK to start Phase 1.

## Plane (PLSE — Pulse board)

**Board:** Pulse (`PLSE`) — not APPO. All work assigned to **Aamir Behlim**. Arsalan approves/rejects designs only.

**Access handoff:** [`AAMIR-ACCESS.md`](AAMIR-ACCESS.md) — Supabase invite, gallery branch, repos.

| Issue | Scope |
|-------|--------|
| **PLSE-1** | Epic — Pulse Genki v2 redesign |
| PLSE-2 | Phase 0 — Ship `/design/pulse` gallery |
| PLSE-3 | Phase 0 — Design fixes from review |
| PLSE-4 | Phase 1 — Expo scaffold (gated) |
| PLSE-5 | Phase 2a — Auth + onboarding UI |
| PLSE-6 | Phase 2b — Main app UI |
| PLSE-7 | Phase 2c — Health, coach, paywall UI |
| PLSE-8 | Phase 3a — Port auth/HealthKit |
| PLSE-9 | Phase 3b — Port plans/AI/StoreKit |
| PLSE-10 | Phase 4 — TestFlight + Apple checklist |

Project ID: `14a12480-0f03-4230-ae26-d9b766874838` · add `PLANE_PROJECT_PLSE` to `.env` when wiring Academy.

*(APPO-105–114 were cancelled — wrong board.)*
