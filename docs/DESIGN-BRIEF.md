# Pulse — Stitch design brief

Use this document when prompting **Google Stitch** (web or MCP). Mobile frame: **iPhone 15 Pro, 393×852**.

## Design system name: **Pulse Clarity**

| Token | Value |
|-------|--------|
| Background | `#F2F2F7` (iOS grouped bg) |
| Card / grouped | `#FFFFFF` |
| Primary accent | `#0A7EA4` (teal — health, calm, Apple-adjacent) |
| Primary pressed | `#065F7A` |
| Success | `#34C759` |
| Warning | `#FF9500` |
| Text primary | `#000000` |
| Text secondary | `#8E8E93` |
| Font | SF Pro / system-ui |
| Radius cards | 16px |
| Radius buttons | 14px |

**Mood:** Calm, premium, clinical-trust without sterility. Think Apple Health meets structured coaching — not gamified candy, not enterprise grey SaaS.

## Global Stitch instructions (prepend to every prompt)

```
iOS native mobile app UI mockup, iPhone 15 Pro frame, light mode.
Design system Pulse Clarity: background #F2F2F7, cards white, primary teal #0A7EA4,
SF Pro typography, iOS large titles and grouped table style, 16px card radius.
No fake App Store ratings, download counts, or user numbers.
App is IN DEVELOPMENT — use "Preview build" or "Coming soon" if needed.
High fidelity, production-quality, not wireframe.
```

## Per-screen prompts (copy into Stitch)

### `home-dashboard`
```
[Global instructions]
Home dashboard for AI health app "Pulse". Large title "Today". 
Four circular progress rings in a row: Protein, Calories, Steps, Sleep (teal/green/orange/blue).
Horizontal week calendar strip below rings with today highlighted.
Section "Morning" with meal activity cards (image thumbnail, title, macros, check button).
Bottom tab bar: Insights (left), center FAB + for log meal, Plan (right) — use SF Symbols not emoji.
Status: preview build badge subtle top.
```

### `paywall`
```
[Global instructions]
Subscription paywall after onboarding. Headline personalized to health goal.
Two plan cards: Annual (featured, best value) and Monthly. 
Bullets: AI weekly meal plans, HealthKit insights, AI coach, unlimited logging.
Primary CTA "Start free trial" — subtext "In development preview".
Restore purchases link. Terms + Privacy footnotes.
```

### `onb-healthkit`
```
[Global instructions]
Onboarding step: Connect Apple Health. Hero illustration of HealthKit icon style (abstract, not Apple trademark).
Explain: steps, sleep, heart rate, HRV — used to personalize meal plan.
Primary button "Connect Apple Health". Skip link secondary.
Progress indicator step 2 of 12.
```

### `coach-chat`
```
[Global instructions]
AI coach chat screen. iMessage-style bubbles, coach on left (teal accent bubble), user on right (gray).
Top bar: "Coach" with subtitle "Preview · HealthKit-aware".
Sample message about today's protein target. Input bar with send button.
```

### `insights`
```
[Global instructions]
Insights tab. Segmented control: Week / Month.
Metric cards in 2-column grid: avg steps, sleep, protein adherence.
Simple line chart for weekly protein. 
AI insight card at bottom with sparkle icon — one sentence actionable tip.
```

## After Stitch export

1. Save PNGs to `stitch/screens/{id}.png`
2. Update `screens-manifest.json` → `"status": "review"`
3. Gallery at https://appopoleis.com/design/pulse auto-picks them up
4. You review → set `"status": "approved"` or `rejected` with note
