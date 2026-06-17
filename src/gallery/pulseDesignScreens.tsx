import { PULSE } from "./tokens";
import { PulseButton, PulseCard, ProgressRing, TabBar } from "./PulsePhoneFrame";

export function ScreenAuthLogin() {
  return (
    <div className="flex h-full flex-col px-5 pt-8">
      <div className="mb-auto">
        <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: PULSE.accent }}>
          Preview build
        </p>
        <h1 className="mt-6 text-[22px] font-bold leading-tight" style={{ color: PULSE.text }}>
          Pulse
        </h1>
        <p className="mt-2 text-[12px] leading-relaxed" style={{ color: PULSE.textMuted }}>
          Your health-aware meal coach. Personalized plans from Apple Health — in development.
        </p>
      </div>
      <div className="mb-8 space-y-3">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-[14px] bg-black py-3 text-[11px] font-semibold text-white"
        >
          <span className="text-sm">􀣺</span> Sign in with Apple
        </button>
        <p className="text-center text-[9px]" style={{ color: PULSE.textMuted }}>
          By continuing you agree to Terms & Privacy
        </p>
      </div>
    </div>
  );
}

export function ScreenOnbGoals() {
  const goals = ["Lose weight", "Build muscle", "Eat healthier", "More energy", "Better sleep"];
  return (
    <div className="flex h-full flex-col px-4 pt-2">
      <p className="text-[9px]" style={{ color: PULSE.textMuted }}>
        Step 1 of 12
      </p>
      <h2 className="mt-2 text-[17px] font-bold" style={{ color: PULSE.text }}>
        What are your goals?
      </h2>
      <p className="mt-1 text-[10px]" style={{ color: PULSE.textMuted }}>
        Select all that apply
      </p>
      <div className="mt-4 flex-1 space-y-2 overflow-hidden">
        {goals.map((g, i) => (
          <div
            key={g}
            className="rounded-2xl border-2 px-3 py-2.5 text-[11px] font-medium"
            style={{
              background: i === 0 || i === 2 ? `${PULSE.accent}12` : PULSE.card,
              borderColor: i === 0 || i === 2 ? PULSE.accent : "transparent",
              color: PULSE.text,
            }}
          >
            {g}
          </div>
        ))}
      </div>
      <div className="pb-4">
        <PulseButton>Continue</PulseButton>
      </div>
    </div>
  );
}

export function ScreenOnbHealthkit() {
  return (
    <div className="flex h-full flex-col px-4 pt-2 text-center">
      <p className="text-left text-[9px]" style={{ color: PULSE.textMuted }}>
        Step 2 of 12
      </p>
      <div
        className="mx-auto mt-8 flex h-20 w-20 items-center justify-center rounded-3xl text-3xl"
        style={{ background: `${PULSE.accent}18` }}
      >
        ♥
      </div>
      <h2 className="mt-6 text-[17px] font-bold" style={{ color: PULSE.text }}>
        Connect Apple Health
      </h2>
      <p className="mt-2 px-2 text-[10px] leading-relaxed" style={{ color: PULSE.textMuted }}>
        Steps, sleep, heart rate & HRV personalize your meal plan. Data stays on your device.
      </p>
      <div className="mt-auto space-y-2 pb-4">
        <PulseButton>Connect Apple Health</PulseButton>
        <button type="button" className="w-full py-2 text-[10px] font-medium" style={{ color: PULSE.accent }}>
          Skip for now
        </button>
      </div>
    </div>
  );
}

export function ScreenHomeDashboard() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  return (
    <div className="relative flex h-full flex-col">
      <div className="flex-1 overflow-hidden px-4 pb-16 pt-1">
        <div className="flex items-center justify-between">
          <h1 className="text-[20px] font-bold" style={{ color: PULSE.text }}>
            Today
          </h1>
          <span
            className="rounded-full px-2 py-0.5 text-[8px] font-medium"
            style={{ background: `${PULSE.warning}22`, color: PULSE.warning }}
          >
            Preview
          </span>
        </div>
        <div className="mt-3 flex justify-between">
          <ProgressRing label="Protein" value={72} color={PULSE.ringProtein} />
          <ProgressRing label="Calories" value={58} color={PULSE.ringCalories} />
          <ProgressRing label="Steps" value={84} color={PULSE.ringSteps} />
          <ProgressRing label="Sleep" value={65} color={PULSE.ringSleep} />
        </div>
        <div className="mt-4 flex justify-between gap-1">
          {days.map((d, i) => (
            <div
              key={`${d}-${i}`}
              className="flex h-8 w-8 items-center justify-center rounded-full text-[9px] font-semibold"
              style={{
                background: i === 3 ? PULSE.accent : "transparent",
                color: i === 3 ? "#fff" : PULSE.textMuted,
              }}
            >
              {d}
            </div>
          ))}
        </div>
        <p className="mt-4 text-[11px] font-semibold" style={{ color: PULSE.text }}>
          Morning
        </p>
        <PulseCard className="mt-2">
          <div className="flex gap-2">
            <div className="h-12 w-12 shrink-0 rounded-xl bg-gradient-to-br from-amber-100 to-amber-200" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[11px] font-semibold">Greek yogurt bowl</p>
              <p className="text-[9px]" style={{ color: PULSE.textMuted }}>
                24g protein · 320 cal
              </p>
            </div>
            <div
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
              style={{ background: `${PULSE.success}22`, color: PULSE.success }}
            >
              ✓
            </div>
          </div>
        </PulseCard>
        <PulseCard className="mt-2">
          <div className="flex gap-2">
            <div className="h-12 w-12 shrink-0 rounded-xl bg-gradient-to-br from-green-100 to-green-200" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[11px] font-semibold">Overnight oats</p>
              <p className="text-[9px]" style={{ color: PULSE.textMuted }}>
                18g protein · 280 cal
              </p>
            </div>
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2" style={{ borderColor: PULSE.separator }} />
          </div>
        </PulseCard>
      </div>
      <TabBar />
    </div>
  );
}

export function ScreenInsights() {
  return (
    <div className="flex h-full flex-col px-4 pt-2">
      <h1 className="text-[20px] font-bold" style={{ color: PULSE.text }}>
        Insights
      </h1>
      <div className="mt-3 flex rounded-lg p-0.5" style={{ background: "#E5E5EA" }}>
        <div className="flex-1 rounded-md py-1.5 text-center text-[10px] font-semibold" style={{ background: PULSE.card }}>
          Week
        </div>
        <div className="flex-1 py-1.5 text-center text-[10px]" style={{ color: PULSE.textMuted }}>
          Month
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {[
          { l: "Avg steps", v: "8,420" },
          { l: "Sleep", v: "7h 12m" },
          { l: "Protein", v: "89%" },
          { l: "Adherence", v: "76%" },
        ].map(({ l, v }) => (
          <PulseCard key={l}>
            <p className="text-[9px]" style={{ color: PULSE.textMuted }}>
              {l}
            </p>
            <p className="text-[14px] font-bold" style={{ color: PULSE.text }}>
              {v}
            </p>
          </PulseCard>
        ))}
      </div>
      <PulseCard className="mt-3">
        <p className="text-[9px] font-medium" style={{ color: PULSE.accent }}>
          ✦ AI insight
        </p>
        <p className="mt-1 text-[10px] leading-relaxed" style={{ color: PULSE.text }}>
          Your protein intake dips on Wednesdays — try prepping lunch Sunday night.
        </p>
      </PulseCard>
    </div>
  );
}

export function ScreenCoachChat() {
  return (
    <div className="flex h-full flex-col">
      <div className="border-b px-4 py-2" style={{ background: PULSE.card, borderColor: PULSE.separator }}>
        <p className="text-[12px] font-semibold">Coach</p>
        <p className="text-[9px]" style={{ color: PULSE.textMuted }}>
          Preview · HealthKit-aware
        </p>
      </div>
      <div className="flex-1 space-y-2 overflow-hidden p-3">
        <div className="max-w-[85%] rounded-2xl rounded-bl-sm px-3 py-2 text-[10px] leading-relaxed text-white" style={{ background: PULSE.accent }}>
          You're at 72% of today's protein target. Want a high-protein snack suggestion?
        </div>
        <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm px-3 py-2 text-[10px]" style={{ background: "#E5E5EA", color: PULSE.text }}>
          Yes please
        </div>
        <div className="max-w-[85%] rounded-2xl rounded-bl-sm px-3 py-2 text-[10px] leading-relaxed text-white" style={{ background: PULSE.accent }}>
          Try cottage cheese with berries — ~20g protein, fits your plan.
        </div>
      </div>
      <div className="flex gap-2 border-t p-2" style={{ borderColor: PULSE.separator, background: PULSE.card }}>
        <div className="flex-1 rounded-full px-3 py-2 text-[10px]" style={{ background: PULSE.bg, color: PULSE.textMuted }}>
          Message…
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full text-white" style={{ background: PULSE.accent }}>
          ↑
        </div>
      </div>
    </div>
  );
}

export function ScreenPaywall() {
  return (
    <div className="flex h-full flex-col px-4 pt-4">
      <h2 className="text-[18px] font-bold leading-tight" style={{ color: PULSE.text }}>
        Unlock your personalized plan
      </h2>
      <p className="mt-2 text-[10px]" style={{ color: PULSE.textMuted }}>
        Built from your HealthKit data · Preview build
      </p>
      <div className="mt-4 space-y-2">
        <div className="rounded-2xl border-2 p-3" style={{ background: PULSE.card, borderColor: PULSE.accent }}>
          <div className="flex justify-between">
            <span className="text-[11px] font-bold">Annual</span>
            <span className="rounded-full px-2 py-0.5 text-[8px] font-semibold text-white" style={{ background: PULSE.accent }}>
              Best value
            </span>
          </div>
          <p className="mt-1 text-[14px] font-bold">$59.99/yr</p>
        </div>
        <PulseCard>
          <span className="text-[11px] font-bold">Monthly</span>
          <p className="mt-1 text-[14px] font-bold">$9.99/mo</p>
        </PulseCard>
      </div>
      <ul className="mt-4 space-y-1.5 text-[10px]" style={{ color: PULSE.text }}>
        <li>✓ AI weekly meal plans</li>
        <li>✓ HealthKit insights</li>
        <li>✓ Unlimited AI coach</li>
        <li>✓ Meal logging</li>
      </ul>
      <div className="mt-auto space-y-2 pb-4">
        <PulseButton>Start preview trial</PulseButton>
        <p className="text-center text-[8px]" style={{ color: PULSE.textMuted }}>
          Restore purchases · Terms · Privacy
        </p>
      </div>
    </div>
  );
}

export function ScreenSettings() {
  const rows = ["Subscription", "Week starts on", "Notifications", "Apple Health", "Sign out"];
  return (
    <div className="flex h-full flex-col px-4 pt-2">
      <h1 className="text-[20px] font-bold" style={{ color: PULSE.text }}>
        Settings
      </h1>
      <div className="mt-4 overflow-hidden rounded-2xl" style={{ background: PULSE.card }}>
        {rows.map((r, i) => (
          <div
            key={r}
            className="flex items-center justify-between px-3 py-3 text-[11px]"
            style={{ borderBottom: i < rows.length - 1 ? `1px solid ${PULSE.bg}` : undefined, color: r === "Sign out" ? PULSE.accent : PULSE.text }}
          >
            {r}
            {r !== "Sign out" && <span style={{ color: PULSE.textMuted }}>›</span>}
          </div>
        ))}
      </div>
      <p className="mt-4 text-center text-[9px]" style={{ color: PULSE.textMuted }}>
        Pulse · Preview build · Appopoleis
      </p>
    </div>
  );
}

export function ScreenPending({ title }: { title: string }) {
  return (
    <div className="flex h-full flex-col items-center justify-center px-6 text-center">
      <div className="mb-3 h-12 w-12 rounded-2xl" style={{ background: `${PULSE.accent}15` }} />
      <p className="text-[12px] font-semibold" style={{ color: PULSE.text }}>
        {title}
      </p>
      <p className="mt-2 text-[10px] leading-relaxed" style={{ color: PULSE.textMuted }}>
        Pending design PNG. Export → <code>public/screens/&#123;id&#125;.png</code>
      </p>
    </div>
  );
}

const MOCKUP_MAP: Record<string, () => JSX.Element> = {
  "auth-login": ScreenAuthLogin,
  "onb-goals": ScreenOnbGoals,
  "onb-healthkit": ScreenOnbHealthkit,
  "home-dashboard": ScreenHomeDashboard,
  insights: ScreenInsights,
  "coach-chat": ScreenCoachChat,
  paywall: ScreenPaywall,
  settings: ScreenSettings,
};

export function renderPulseScreen(id: string, title: string) {
  const Mock = MOCKUP_MAP[id];
  if (Mock) return <Mock />;
  return <ScreenPending title={title} />;
}
