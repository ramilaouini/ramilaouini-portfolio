import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  /** Adds a lift + glow on hover — use for interactive cards. */
  interactive?: boolean;
  className?: string;
}

/**
 * Translucent, blurred "glass" surface. This is the base building block
 * for every card on the site (stats, skills, projects, timeline, etc.)
 * so the glassmorphism language stays consistent.
 */
export function GlassCard({
  children,
  interactive = false,
  className,
  ...rest
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-glass-border bg-glass backdrop-blur-xl shadow-glass",
        interactive &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-glass-hover hover:shadow-glow-sm",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
