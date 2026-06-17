# Pulse — Product requirements (feature parity with Genki v1)

**In development · not on App Store.** All marketing must reflect that until launch.

## Core capabilities (must ship)

1. **Auth** — Sign in with Apple → Supabase session
2. **Onboarding** — Goals, biometrics, diet, sleep, equipment, exercise prefs → plan generation trigger
3. **HealthKit** — Read steps, sleep, HR, HRV; permission flow
4. **Home dashboard** — Daily plan, progress rings, weekly calendar, check-in
5. **Meal plan** — Weekly plan view, activities by time of day, completion
6. **Meal logging** — Camera AI scan + text description + quick log from plan
7. **AI coach** — Chat modal with HealthKit + nutrition context
8. **Insights** — Period metrics, charts, AI-generated insights
9. **Subscriptions** — StoreKit paywall (monthly/annual), restore, family planned
10. **Notifications** — Reminders, settings
11. **Settings** — Week start day, subscription management, sign out

## Explicitly out of v1 scope (do not design/market until built)

- Grocery list by aisle (was marketed on showcase; **not in v1 code**)
- Fixed "Sunday only" delivery (v1 uses **user week-start day**)

## Screen inventory (design Phase 0)

### Auth
| ID | Screen |
|----|--------|
| `auth-login` | Login — Sign in with Apple |
| `auth-welcome` | Post-auth welcome |

### Onboarding (12)
| ID | Screen |
|----|--------|
| `onb-goals` | Health goals multi-select |
| `onb-healthkit` | Connect Apple Health |
| `onb-stats` | Height / weight |
| `onb-demographics` | Sex + age |
| `onb-struggles` | Struggles selection |
| `onb-weight-goal` | Weight target |
| `onb-equipment` | Equipment available |
| `onb-exercise` | Exercise preferences |
| `onb-diet` | Dietary preferences |
| `onb-sleep-depth` | Sleep depth |
| `onb-sleep-duration` | Sleep duration |
| `onb-preparing` | Generating your plan |

### Main app
| ID | Screen |
|----|--------|
| `home-dashboard` | Home — rings, calendar, activities, tab bar |
| `home-checkin` | Daily check-in modal |
| `home-empty` | No plan yet |
| `home-loading` | Plan generating |
| `insights` | Insights dashboard |
| `settings` | Settings root |
| `settings-week-start` | Week start day picker |
| `settings-notifications` | Notification settings |
| `settings-reminder-form` | Add/edit reminder |

### Health & logging
| ID | Screen |
|----|--------|
| `health-permission` | HealthKit permission |
| `health-dashboard` | Health metrics overview |
| `log-modal` | Meal logging entry chooser |
| `log-camera` | Camera scan |
| `log-text` | Text meal description |
| `log-quick` | Quick log from meal card |

### Coach & monetization
| ID | Screen |
|----|--------|
| `coach-chat` | AI coach conversation |
| `paywall` | Subscription paywall |
| `paywall-success` | Subscribed confirmation |

**Total: 32 screens** (+ empty/error variants as Stitch states)

## Design principles (Apple-native)

- SF Pro / system typography, Dynamic Type friendly
- iOS tab bar or native navigation patterns (not emoji nav)
- Materials: subtle blur, grouped lists, large titles where appropriate
- Single accent color (teal family — see DESIGN-BRIEF)
- Light mode primary; dark mode second pass after light approved
- Haptics on primary actions (implementation phase)
- **Truthful copy** — in development until App Store launch
