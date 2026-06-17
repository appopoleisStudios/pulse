import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Circle, ExternalLink, Layers, Sparkles } from "lucide-react";
import { PulsePhoneFrame } from "./gallery/PulsePhoneFrame";
import { renderPulseScreen } from "./gallery/pulseDesignScreens";
import type { PulseManifest, PulseScreen, ScreenStatus } from "./gallery/tokens";
import { PULSE } from "./gallery/tokens";

const FLOWS = ["all", "auth", "onboarding", "main", "health", "coach", "subscription"] as const;

const STATUS_LABEL: Record<ScreenStatus, string> = {
  pending: "Pending",
  mockup: "CSS fallback",
  stitch: "Design PNG",
  review: "In review",
  approved: "Approved",
  rejected: "Needs revision",
};

const STATUS_CLASS: Record<ScreenStatus, string> = {
  pending: "bg-zinc-700 text-zinc-300",
  mockup: "bg-amber-900/50 text-amber-300",
  stitch: "bg-sky-900/50 text-sky-300",
  review: "bg-purple-900/50 text-purple-300",
  approved: "bg-emerald-900/50 text-emerald-300",
  rejected: "bg-red-900/50 text-red-300",
};

function ScreenCard({ screen, onSelect }: { screen: PulseScreen; onSelect: (s: PulseScreen) => void }) {
  const [pngUrl, setPngUrl] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();
    const path = `/screens/${screen.id}.png`;
    img.onload = () => setPngUrl(path);
    img.onerror = () => setPngUrl(null);
    img.src = path;
  }, [screen.id]);

  const displayStatus: ScreenStatus = pngUrl ? "stitch" : screen.status;

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={() => onSelect(screen)}
      className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-4 text-left transition hover:border-teal-600/50 hover:shadow-lg hover:shadow-teal-900/20"
    >
      <div className="mb-3 flex items-start justify-between gap-2">
        <div>
          <p className="text-xs uppercase tracking-wider text-zinc-500">{screen.flow}</p>
          <h3 className="font-semibold text-white">{screen.title}</h3>
        </div>
        <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${STATUS_CLASS[displayStatus]}`}>
          {STATUS_LABEL[displayStatus]}
        </span>
      </div>
      {pngUrl ? (
        <div className="relative mx-auto max-w-[220px] overflow-hidden rounded-[28px] border-4 border-zinc-800 shadow-2xl">
          <img src={pngUrl} alt={screen.title} className="w-full" />
        </div>
      ) : (
        <div className="mx-auto max-w-[200px]">
          <PulsePhoneFrame>{renderPulseScreen(screen.id, screen.title)}</PulsePhoneFrame>
        </div>
      )}
      <p className="mt-2 text-[10px] text-zinc-500 opacity-0 transition group-hover:opacity-100">
        Click to expand · {screen.id}
      </p>
    </motion.button>
  );
}

function Lightbox({ screen, onClose }: { screen: PulseScreen; onClose: () => void }) {
  const [pngUrl, setPngUrl] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    const img = new Image();
    const path = `/screens/${screen.id}.png`;
    img.onload = () => setPngUrl(path);
    img.onerror = () => setPngUrl(null);
    img.src = path;
  }, [screen.id]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="max-h-[95vh] max-w-lg overflow-auto rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="mb-4 flex items-start justify-between">
          <div>
            <p className="text-sm text-zinc-400">{screen.flow}</p>
            <h2 className="text-xl font-bold text-white">{screen.title}</h2>
            <p className="mt-1 text-xs text-zinc-500">ID: {screen.id}</p>
          </div>
          <button type="button" onClick={onClose} className="text-sm text-zinc-400 hover:text-white">
            Close
          </button>
        </div>
        {pngUrl ? (
          <img src={pngUrl} alt={screen.title} className="mx-auto max-h-[70vh] rounded-2xl" />
        ) : (
          <PulsePhoneFrame className="max-w-[320px]">
            {renderPulseScreen(screen.id, screen.title)}
          </PulsePhoneFrame>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [manifest, setManifest] = useState<PulseManifest | null>(null);
  const [flow, setFlow] = useState<(typeof FLOWS)[number]>("all");
  const [selected, setSelected] = useState<PulseScreen | null>(null);

  useEffect(() => {
    fetch("/screens-manifest.json")
      .then((r) => r.json())
      .then(setManifest)
      .catch(() => setManifest(null));
  }, []);

  const screens = useMemo(() => {
    if (!manifest) return [];
    return flow === "all" ? manifest.screens : manifest.screens.filter((s) => s.flow === flow);
  }, [manifest, flow]);

  const stats = useMemo(() => {
    if (!manifest) return { total: 0, approved: 0 };
    return {
      total: manifest.screens.length,
      approved: manifest.screens.filter((s) => s.status === "approved").length,
    };
  }, [manifest]);

  return (
    <div className="min-h-screen">
      <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <span className="text-sm font-medium text-zinc-400">Appopoleis · Pulse</span>
          <a href="https://github.com/appopoleisStudios/pulse" className="text-xs text-zinc-500 hover:text-teal-400">
            GitHub
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-4xl font-bold tracking-tight text-white">Pulse</h1>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-700/50 bg-teal-950/50 px-3 py-1 text-xs font-medium text-teal-400">
              <Sparkles className="h-3.5 w-3.5" />
              Phase 0 — Design review
            </span>
          </div>
          <p className="max-w-2xl text-lg text-zinc-400">
            Genki v2 redesign. <strong className="text-white">No app code until Arsalan approves every screen.</strong>
          </p>
        </motion.div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { done: true, label: "PM docs in /docs", sub: "PRD, DESIGN-BRIEF, checklist" },
            { done: stats.total === 32, label: "32 screen PNGs", sub: "public/screens/" },
            { done: false, label: "Design iteration", sub: "PLSE-3 after review" },
            { done: stats.approved === stats.total && stats.total > 0, label: "Sign-off", sub: "Arsalan approves → Phase 1" },
          ].map(({ done, label, sub }) => (
            <div key={label} className="flex gap-3 rounded-xl border border-zinc-800 bg-zinc-900 p-4">
              {done ? <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" /> : <Circle className="h-5 w-5 shrink-0 text-zinc-600" />}
              <div>
                <p className="text-sm font-medium text-white">{label}</p>
                <p className="text-xs text-zinc-500">{sub}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-zinc-500">
          <span className="inline-flex items-center gap-1.5">
            <Layers className="h-4 w-4" />
            {stats.total} screens
          </span>
          <span style={{ color: PULSE.accent }}>Pulse Clarity</span>
          <a href="https://stitch.withgoogle.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-teal-400 hover:underline">
            Stitch <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {FLOWS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFlow(f)}
              className={`rounded-full px-3 py-1 text-xs font-medium capitalize transition ${
                flow === f ? "bg-teal-600 text-white" : "bg-zinc-800 text-zinc-400 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {screens.map((screen) => (
            <ScreenCard key={screen.id} screen={screen} onSelect={setSelected} />
          ))}
        </div>

        {!manifest && <p className="mt-8 text-center text-zinc-500">Loading manifest…</p>}
      </main>

      {selected && <Lightbox screen={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
