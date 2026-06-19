import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassWindowProps {
  /** Monospace label shown in the title bar, e.g. "rami@dev ~ portrait" */
  label: string;
  children: ReactNode;
  className?: string;
  glow?: boolean;
}

/**
 * The site's signature visual motif: a glass "app window" frame with a
 * traffic-light title bar (recolored to the accent palette instead of
 * literal red/yellow/green). It's used for the hero portrait and the
 * featured-project mockup so the whole site reads as if it were itself
 * a piece of software — fitting for a developer/founder portfolio.
 */
export function GlassWindow({ label, children, className, glow = true }: GlassWindowProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-glass-border bg-base-raised/80 backdrop-blur-xl shadow-glass",
        glow && "shadow-glow",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-glass-border bg-white/[0.03] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-accent-indigo" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent-violet" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent-teal" />
        <span className="ml-2 truncate font-mono text-xs text-ink-faint">{label}</span>
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
