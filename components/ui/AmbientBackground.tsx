interface AmbientBackgroundProps {
  className?: string;
}

/**
 * Slow-drifting blurred gradient blobs used as ambient atmosphere behind
 * the hero (and sparingly elsewhere). Pure CSS animation (see the `blob`
 * keyframes in tailwind.config.ts) so it costs nothing on the main
 * thread and keeps running smoothly during scroll.
 */
export function AmbientBackground({ className }: AmbientBackgroundProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
    >
      <div className="absolute left-1/4 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-accent-indigo/30 blur-[110px] animate-blob" />
      <div className="absolute right-0 top-1/3 h-[24rem] w-[24rem] rounded-full bg-accent-violet/25 blur-[110px] animate-blob-slow" />
      <div className="absolute bottom-0 left-1/3 h-[22rem] w-[22rem] rounded-full bg-accent-teal/20 blur-[110px] animate-blob" />
      <div className="absolute inset-0 bg-radial-fade" />
    </div>
  );
}
