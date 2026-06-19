import { cn } from "@/lib/utils";

const GRADIENTS: Record<string, string> = {
  indigo: "from-accent-indigo/40 via-accent-indigo/10 to-transparent",
  violet: "from-accent-violet/40 via-accent-violet/10 to-transparent",
  teal: "from-accent-teal/40 via-accent-teal/10 to-transparent",
  mixed: "from-accent-indigo/40 via-accent-violet/25 to-accent-teal/15",
};

/**
 * Stand-in "screenshot": an abstract dashboard pattern rendered purely
 * with CSS, since real product screenshots aren't available yet. Swap
 * this for an actual <Image> once screenshots exist — see README.
 */
export function ProjectThumbnail({ accent }: { accent: keyof typeof GRADIENTS }) {
  return (
    <div
      className={cn(
        "relative h-44 w-full overflow-hidden bg-gradient-to-br",
        GRADIENTS[accent],
      )}
    >
      <div className="absolute inset-0 bg-base-raised/40" />
      {/* abstract sidebar */}
      <div className="absolute left-4 top-4 h-[calc(100%-2rem)] w-10 rounded-lg border border-white/10 bg-white/5" />
      {/* abstract cards */}
      <div className="absolute left-20 top-4 h-16 w-[calc(100%-6rem)] rounded-lg border border-white/10 bg-white/[0.06]" />
      <div className="absolute left-20 top-24 h-[calc(100%-7rem)] w-[45%] rounded-lg border border-white/10 bg-white/[0.04]" />
      <div className="absolute right-4 top-24 h-[calc(100%-7rem)] w-[30%] rounded-lg border border-white/10 bg-white/[0.04]" />
      <div className="absolute inset-0 bg-gradient-to-t from-base-raised to-transparent" />
    </div>
  );
}
