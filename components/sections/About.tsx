"use client";

import { CheckCircle2 } from "lucide-react";
import { PERSONAL, ABOUT_POINTS, STATS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-8xl px-6 sm:px-8">
        <SectionHeading eyebrow="about-me" title="About Me" />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Bio + points */}
          <div>
            <Reveal>
              <p className="text-lg leading-relaxed text-ink-muted sm:text-xl">
                {PERSONAL.bio}
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <GlassCard className="mt-8 px-6 py-5">
                <p className="font-mono text-xs text-accent-teal">{"// mission"}</p>
                <p className="mt-2 text-base text-ink sm:text-lg">{PERSONAL.mission}</p>
              </GlassCard>
            </Reveal>

            <ul className="mt-8 space-y-3">
              {ABOUT_POINTS.map((point, i) => (
                <Reveal key={point} delay={0.04 * i}>
                  <li className="flex items-start gap-3 text-ink-muted">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 flex-shrink-0 text-accent-violet"
                    />
                    <span>{point}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={0.06 * i}>
                <GlassCard interactive className="flex h-full flex-col justify-between p-6">
                  <p className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 font-mono text-xs text-ink-muted sm:text-sm">
                    {stat.label}
                  </p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
