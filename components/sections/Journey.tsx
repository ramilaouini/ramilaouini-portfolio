"use client";

import { Rocket } from "lucide-react";
import { JOURNEY } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function Journey() {
  return (
    <section id="journey" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="journey"
          title="The Road So Far"
          align="center"
          description="A timeline of where it started, where it's heading next."
        />

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-accent-indigo via-accent-violet to-accent-teal sm:left-1/2 sm:-translate-x-1/2"
          />

          <div className="space-y-10">
            {JOURNEY.map((item, i) => (
              <Reveal key={item.period} delay={0.05 * i}>
                <div
                  className={cn(
                    "relative flex",
                    i % 2 === 0 ? "sm:justify-start" : "sm:justify-end",
                  )}
                >
                  <span
                    className={cn(
                      "absolute left-4 top-7 z-10 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-base sm:left-1/2",
                      item.isFuture ? "bg-accent-teal" : "bg-accent-violet",
                    )}
                  />

                  <div className="ml-10 w-full sm:ml-0 sm:w-[calc(50%-2rem)]">
                    <GlassCard
                      interactive
                      className={cn(
                        "p-6",
                        item.isFuture && "border-dashed border-accent-teal/40",
                      )}
                    >
                      <span className="inline-flex items-center gap-2 font-mono text-sm text-accent-teal">
                        {item.isFuture && <Rocket size={14} />}
                        {item.period}
                      </span>
                      <h3 className="mt-1.5 font-display text-lg font-semibold text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                        {item.description}
                      </p>
                    </GlassCard>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
