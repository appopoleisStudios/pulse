# Aamir — Pulse access

**GitHub:** `1Aamirrr` · **Email:** `amiribehlim11@gmail.com`  
**Plane:** PLSE board — all tasks assigned to you. Arsalan only approves/rejects designs.

---

## 1. This repo (everything lives here)

```bash
git clone https://github.com/appopoleisStudios/pulse.git
cd pulse
npm install
npm run dev
# http://localhost:5173 — design gallery with 32 screens
```

**Do not use** `ai-app-solutions` or `ai-router` for Pulse work.

| Path | What |
|------|------|
| `docs/PRD.md` | Feature parity |
| `docs/DESIGN-BRIEF.md` | Stitch prompts + tokens |
| `docs/APPLE-CHECKLIST.md` | TestFlight / App Store |
| `public/screens/*.png` | Replace to iterate designs |
| `public/screens-manifest.json` | Set `approved` when Arsalan OKs |

---

## 2. Genki Supabase backend

| | |
|--|--|
| Project ref | `hvgpxneqzborogonjyqj` |
| API URL | `https://hvgpxneqzborogonjyqj.supabase.co` |
| Dashboard | https://supabase.com/dashboard/project/hvgpxneqzborogonjyqj |

**Arsalan must invite** `amiribehlim11@gmail.com` as Developer + send anon key.

Local env for Phase 3 (in future `app/`):

```
SUPABASE_URL=https://hvgpxneqzborogonjyqj.supabase.co
SUPABASE_ANON_KEY=<from Arsalan>
```

Schema/migrations reference: `https://github.com/Mathia5/genkihealth` → `supabase/migrations/`

---

## 3. Plane tasks (PLSE)

| Issue | Action |
|-------|--------|
| PLSE-2 | Gallery verified in this repo; PR if you change gallery |
| PLSE-3 | Design fixes after Arsalan review |
| PLSE-4+ | Blocked until design sign-off |

---

## 4. Arsalan checklist

- [ ] Invite Aamir to Genki Supabase (`amiribehlim11@gmail.com`)
- [ ] Share Supabase anon key (secure channel)
- [ ] Review gallery at `localhost:5173` after Aamir clones this repo
