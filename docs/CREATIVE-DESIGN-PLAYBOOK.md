# Pulse — Creative design playbook (AI tools + Twitter hook)

**For Aamir · Phase 0 only.** Goal: mockups so good Arsalan approves on first pass *and* screens that could stop a Twitter scroll.

---

## North star

Not “another teal health app.” **Pulse** should feel like Apple shipped a coach in your pocket — calm, photographic, alive. Twitter hook = **one hero frame** (home dashboard) that makes people ask “what app is that?”

**References to study (screenshot, don’t clone):**
- Apple Health (rings, data density, trust)
- Calm / Headspace (atmosphere, illustration)
- Noom / Simple (onboarding clarity)
- Gentler Streak / Bevel (modern health UI on X)

---

## Intel we actually have (use this, not random Twitter noise)

Our bookmark intel is strong on **AI dev tools**, weak on health-app UI. Filter accordingly:

| Signal | Use for Pulse |
|--------|----------------|
| **Google Stitch** | Primary — mobile UI mockups from text (see `DESIGN-BRIEF.md`) |
| **typeui.sh** presets `refined`, `premium`, `clean` | Visual direction when prompting Stitch / Cursor |
| **Cursor + image models** | Hero illustrations, food photography, iterate PNGs fast |
| **Mobbin / App Store screenshots** | Layout patterns only — not colors from v1 Genki |
| **RL / “system design” tweets** | **Ignore** for UI — wrong category |

**Lesson from Appopoleis WebGL epic:** match tool to medium. Pulse = **native iOS mockups**, not Three.js, not agency landing page templates.

---

## AI toolchain (free-first)

### 1. Google Stitch — bulk screens
- https://stitch.withgoogle.com
- Project: **Pulse — Appopoleis Health iOS**
- Paste **global instructions** from `DESIGN-BRIEF.md` on every prompt
- Batch: onboarding 1–12 → main → health → paywall
- Export PNG → `public/screens/{id}.png`
- **Stitch MCP in Cursor** when available (Settings → MCP → user-stitch)

### 2. typeui.sh — taste guardrail
- https://typeui.sh — run `refined` or `premium` on a paragraph of UI copy
- Use output adjectives in Stitch prompts (“elevated whitespace”, “editorial hierarchy”)
- Stops generic “bootstrap health app” slop

### 3. Cursor image generation — hero polish
When Stitch gives 80% there:
- Re-roll **food thumbnails**, **HealthKit hero**, **paywall gradient mesh**
- Prompt pattern: *“iOS app UI, iPhone 15 Pro, Pulse Clarity teal #0A7EA4, photographic food, soft depth, no wireframe”*
- Replace only `public/screens/{id}.png` — gallery picks up automatically

### 4. Consistent food imagery
All meal cards must feel **same photoshoot**:
- Pick one style: overhead bowl, natural light, marble surface
- Generate 6–8 master food shots → reuse across home + logging screens
- Never mix cartoon + photo + flat icons

### 5. Optional mood board (30 min)
- FigJam / Pinterest / Cosmos — 12 refs → export palette + radius + shadow rules
- Lock before regenerating all 32 screens (avoids drift)

---

## Pulse Clarity — elevate beyond default

| Element | Boring | Stun |
|---------|--------|------|
| Background | Flat `#F2F2F7` | Subtle warm gradient top 15% + grouped cards |
| Rings | Basic circles | Slight glow on active ring, label + % inside |
| Meal cards | Grey placeholders | Real food photo, macro pills, completion animation hint |
| Onboarding | List of chips | One hero illustration per step, progress dots |
| Paywall | Two boxes | Mesh gradient hero, annual card elevated shadow |
| Coach | Flat bubbles | Avatar chip, typing indicator, teal gradient coach bubble |

Tokens stay in `DESIGN-BRIEF.md` — **push craft inside the system**, don’t invent new accent colors.

---

## 32-screen workflow

```
Stitch batch (all screens)
    → typeui pass on headlines / microcopy
    → image model pass on heroes + food
    → drop PNGs in public/screens/
    → npm run dev (local QA)
    → deploy hosted gallery (PLSE-2)
    → Arsalan review → PLSE-3 fixes only on rejected IDs
```

Manifest: set `"status": "review"` when hosted URL is ready.

---

## Twitter hook kit (after hosted gallery — optional Phase 0.5)

Arsalan may post; you prepare assets:

1. **Hero still** — `home-dashboard.png` cropped 9:16, high contrast
2. **Before/after** — v1 Genki coral/teal mess vs Pulse home (honest, no fake metrics)
3. **6-frame carousel** — onboarding → healthkit → home → log meal → coach → paywall
4. **15s screen recording** — smooth scroll through hosted gallery or prototype
5. **Copy angle** (draft for Arsalan, don’t post yourself):
   - *“Rebuilding our health app UI with AI design tools — 32 screens before we write React Native.”*
   - *“Health apps don’t have to look like hospital software.”*
   - Always **In development** — no fake downloads/ratings

Tools: Screen Studio / QuickTime + ffmpeg carousel (`showboat_media.py` pattern in ai-router chronicler if needed later).

---

## Do / Don’t

**Do**
- SF Pro / system hierarchy, SF Symbols, iOS tab bar
- Truthful “Preview build” badges
- One visual language across all 32 screens
- Host gallery for Arsalan URL review

**Don’t**
- Copy Genki v1 Ignite coral / split teals
- Market grocery list or “Sunday delivery” (not in v1)
- Fake App Store stars or user counts
- Start Expo / RN until **all** screens `approved`
- Use `ai-app-solutions` or `ai-router` for Pulse files

---

## Skills in this repo

| Skill | When |
|-------|------|
| `.cursor/skills/pulse-redesign/SKILL.md` | Phase 1+ implementation (blocked) |
| This playbook | Phase 0 design now |

---

## PLSE order

**PLSE-2** hosted gallery → **PLSE-3** iteration → Arsalan sign-off → **PLSE-4+**

Comment hosted URL + “ready for review” on PLSE-2 when done.
