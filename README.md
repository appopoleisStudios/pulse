# Pulse

**Genki v2** — iOS health app redesign under Appopoleis. Codename **Pulse** (App Store name TBD).

This repo is the **single home** for Pulse work — design gallery, PM docs, and (Phase 1+) the Expo app. **Not** in `ai-app-solutions` or `ai-router`.

## Quick start (design review)

```bash
git clone https://github.com/appopoleisStudios/pulse.git
cd pulse
npm install
npm run dev
# http://localhost:5173
```

## Structure

| Path | Purpose |
|------|---------|
| `src/` | Design gallery (Vite + React) |
| `public/screens/` | 32 hi-fi screen PNGs |
| `docs/` | PRD, DESIGN-BRIEF, APPLE-CHECKLIST, access handoff |
| `app/` | *(Phase 1)* Expo `pulse-ios` shell |

## Gates

1. **Phase 0** — Arsalan approves all screens on local gallery
2. **Phase 1+** — Expo scaffold in this repo (`app/`) — blocked until sign-off

## Plane

Tasks on **PLSE** board (Pulse project in Plane) — assigned to Aamir. See `docs/AAMIR-ACCESS.md`.

## Genki Supabase (backend reference)

- Project: `hvgpxneqzborogonjyqj`
- URL: https://hvgpxneqzborogonjyqj.supabase.co
- Logic reference: https://github.com/Mathia5/genkihealth

## Genki v1

Legacy client app — read-only reference for porting logic, not for UI copy-paste.
