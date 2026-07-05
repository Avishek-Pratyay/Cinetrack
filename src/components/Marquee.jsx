import { Clapperboard, Library, CheckCircle2 } from "lucide-react";

export default function Marquee({ total, watchedCount }) {
  return (
    <header className="relative overflow-hidden border-b border-cine-surface-2 bg-cine-surface">
      <div
        className="absolute inset-x-0 top-0 h-1"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, var(--color-cine-gold) 0px, var(--color-cine-gold) 10px, transparent 10px, transparent 20px)",
        }}
      />
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-cine-gold/40 bg-cine-bg">
            <Clapperboard className="text-cine-gold" size={24} strokeWidth={1.5} />
          </span>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cine-teal">
              Now Tracking
            </p>
            <h1 className="font-display text-5xl tracking-wide text-cine-gold sm:text-6xl">
              CineTrack
            </h1>
          </div>
        </div>
        <div className="flex gap-6 font-mono text-sm text-cine-cream/70">
          <div className="flex items-center gap-2">
            <Library size={16} className="text-cine-cream/40" />
            <div>
              <span className="block text-2xl font-semibold text-cine-cream">
                {total}
              </span>
              in collection
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-cine-teal/70" />
            <div>
              <span className="block text-2xl font-semibold text-cine-cream">
                {watchedCount}
              </span>
              watched
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
