import type { ReactNode } from "react";
import { PULSE } from "./tokens";

interface PulsePhoneFrameProps {
  children: ReactNode;
  className?: string;
}

/** iPhone 15 Pro aspect frame for design review */
export function PulsePhoneFrame({ children, className = "" }: PulsePhoneFrameProps) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[280px] rounded-[36px] border-[4px] border-neutral-800 bg-neutral-900 shadow-2xl ${className}`}
      style={{ aspectRatio: "393 / 852" }}
    >
      <div className="absolute top-2 left-1/2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-neutral-900" />
      <div
        className="absolute inset-[3px] overflow-hidden rounded-[32px]"
        style={{ background: PULSE.bg, fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif' }}
      >
        <div className="flex h-6 items-end justify-between px-5 pb-0.5 text-[9px] font-medium" style={{ color: PULSE.text }}>
          <span>9:41</span>
          <div className="flex gap-0.5">
            <div className="h-2 w-3 rounded-sm bg-black" />
            <div className="h-2 w-3 rounded-sm bg-black/40" />
          </div>
        </div>
        <div className="h-[calc(100%-1.5rem)] overflow-hidden">{children}</div>
        <div className="absolute bottom-1 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-black/20" />
      </div>
    </div>
  );
}

export function PulseButton({ children, primary = true }: { children: ReactNode; primary?: boolean }) {
  return (
    <button
      type="button"
      className="w-full rounded-[14px] py-3 text-[11px] font-semibold text-white"
      style={{ background: primary ? PULSE.accent : "transparent", color: primary ? "#fff" : PULSE.accent }}
    >
      {children}
    </button>
  );
}

export function PulseCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl p-3 ${className}`} style={{ background: PULSE.card }}>
      {children}
    </div>
  );
}

export function ProgressRing({ label, value, color, size = 52 }: { label: string; value: number; color: string; size?: number }) {
  const r = (size - 6) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;
  return (
    <div className="flex flex-col items-center gap-1">
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#E5E5EA" strokeWidth={4} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={4}
          strokeDasharray={c}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <span className="text-[8px] font-medium" style={{ color: PULSE.textMuted }}>
        {label}
      </span>
    </div>
  );
}

export function TabBar() {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 flex items-center justify-around border-t px-4 py-2"
      style={{ background: PULSE.card, borderColor: PULSE.separator }}
    >
      <div className="flex flex-col items-center gap-0.5">
        <div className="h-5 w-5 rounded-md" style={{ background: PULSE.accent }} />
        <span className="text-[8px] font-medium" style={{ color: PULSE.accent }}>
          Insights
        </span>
      </div>
      <div
        className="-mt-4 flex h-11 w-11 items-center justify-center rounded-full text-lg font-light text-white shadow-lg"
        style={{ background: PULSE.accent }}
      >
        +
      </div>
      <div className="flex flex-col items-center gap-0.5 opacity-50">
        <div className="h-5 w-5 rounded-md bg-neutral-300" />
        <span className="text-[8px]" style={{ color: PULSE.textMuted }}>
          Plan
        </span>
      </div>
    </div>
  );
}
