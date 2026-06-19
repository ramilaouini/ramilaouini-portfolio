export function TechBadge({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-glass-border bg-white/[0.03] px-3 py-1 font-mono text-xs text-ink-muted">
      {label}
    </span>
  );
}
