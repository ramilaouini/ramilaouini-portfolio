"use client";

import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** Terminal-style path shown above the heading, e.g. "about-me" */
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * Recurring structural device for the whole site: every section opens
 * with a small monospace "~/path" eyebrow (a nod to a developer's
 * terminal prompt) followed by a display headline. Keeping this one
 * pattern consistent across sections is the site's signature rhythm.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <Reveal>
        <span className="inline-flex items-center gap-2 font-mono text-sm text-accent-teal">
          <span className="text-accent-violet">~/</span>
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.14}>
          <p
            className={cn(
              "mt-4 max-w-2xl text-base text-ink-muted sm:text-lg",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
