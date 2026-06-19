import type { ProjectStatus } from "@/types";
import { cn } from "@/lib/utils";

const STYLES: Record<ProjectStatus, { label: string; className: string }> = {
  live: {
    label: "Live",
    className: "bg-accent-teal/15 text-accent-teal border-accent-teal/30",
  },
  "in-progress": {
    label: "In Progress",
    className: "bg-accent-violet/15 text-accent-violet border-accent-violet/30",
  },
  concept: {
    label: "Coming Soon",
    className: "bg-white/[0.06] text-ink-muted border-glass-border",
  },
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  const style = STYLES[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs",
        style.className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {style.label}
    </span>
  );
}
