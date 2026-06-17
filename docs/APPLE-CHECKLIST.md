# Pulse — Apple launch checklist

**Org:** Appopoleis (`appopoleisStudios`)  
**PM sign-off:** Arsalan (no client gate — Mathias legacy only)  
**Gate:** Complete **before** TestFlight upload

## Phase 0 — Design (current)

- [ ] All 32 screens reviewed on https://appopoleis.com/design/pulse
- [ ] Stitch PNGs exported for each screen (or approved CSS mockups for v1)
- [ ] Single accent color + typography locked in DESIGN-BRIEF
- [ ] Marketing copy truthful: **In development** until App Store live
- [ ] Explicit decision: logging model (passive HealthKit vs active meal log UI)

## Apple Developer account

- [ ] New Apple ID for Appopoleis Studios (separate from personal/client IDs)
- [ ] Enroll in Apple Developer Program ($99/yr)
- [ ] Create App ID / bundle: `com.appopoleis.pulse` (or final name)
- [ ] Enable capabilities: **HealthKit**, **Sign in with Apple**, **In-App Purchase**
- [ ] Provisioning profiles: Development + App Store distribution

## Expo / EAS (Phase 1+)

- [ ] New repo `appopoleisStudios/pulse-ios` (Expo SDK 55+)
- [ ] `eas.json` profiles: `development`, `preview`, `production`
- [ ] EAS credentials linked to new Apple team
- [ ] `app.json`: bundle ID, display name, privacy manifest URLs
- [ ] HealthKit usage strings in `Info.plist` (accurate, App Review–safe)

## StoreKit

- [ ] Products in App Store Connect: monthly + annual subscription
- [ ] Subscription group + pricing tiers
- [ ] Restore purchases flow tested
- [ ] Paywall matches approved `paywall` design screen

## HealthKit

- [ ] Read types: steps, sleep, heart rate, HRV (match v1 parity)
- [ ] Permission screen matches approved `onb-healthkit` / `health-permission`
- [ ] No health claims that violate App Review guidelines

## App Store listing

- [ ] New listing (not update to old Genki bundle)
- [ ] Screenshots from **approved** designs (6.7" + 6.1" minimum)
- [ ] App Preview video optional
- [ ] Privacy nutrition labels accurate
- [ ] Support URL + privacy policy on appopoleis.com

## TestFlight

- [ ] Internal testing group (Arsalan + team)
- [ ] Maestro E2E smoke on critical paths
- [ ] No fake metrics, ratings, or download counts in build

## Post-launch

- [ ] Update genky.html / showcase to new product name when live
- [ ] Archive or redirect old Genki TestFlight if any
