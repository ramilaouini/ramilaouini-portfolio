"use client";

import { Github, Sparkles, LayoutDashboard, Brain, Boxes } from "lucide-react";
import { FEATURED_PROJECT, FEATURED_FEATURES } from "@/lib/data";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlassWindow } from "@/components/ui/GlassWindow";
import { TechBadge } from "@/components/ui/TechBadge";
import { LinkButton, Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const FEATURE_ICONS = [LayoutDashboard, Sparkles, Brain, Boxes];

/**
 * Abstract, code-drawn stand-in for a Nexus Knowledge OS screenshot.
 * Swap the contents of <GlassWindow> for a real <Image> once product
 * screenshots are available.
 */
function NexusMockup() {
  return (
    <GlassWindow label="nexus-knowledge-os — dashboard" className="h-full">
      <div className="relative flex h-full min-h-[320px] gap-3 p-4">
        {/* sidebar */}
        <div className="flex w-12 flex-col items-center gap-3 rounded-xl border border-glass-border bg-white/[0.03] py-4">
          <span className="h-2 w-2 rounded-full bg-accent-gradient" />
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="h-7 w-7 rounded-lg bg-white/[0.06]" />
          ))}
        </div>

        {/* main content */}
        <div className="flex-1 space-y-3">
          <div className="flex items-center justify-between rounded-xl border border-glass-border bg-white/[0.03] px-4 py-3">
            <div className="h-2 w-24 rounded-full bg-white/15" />
            <div className="h-6 w-6 rounded-full bg-accent-gradient" />
          </div>

          <div className="grid grid-cols-3 gap-3">
            {["from-accent-indigo/35", "from-accent-violet/35", "from-accent-teal/35"].map(
              (g, i) => (
                <div
                  key={i}
                  className={`h-16 rounded-xl border border-glass-border bg-gradient-to-br ${g} to-transparent`}
                />
              ),
            )}
          </div>

          <div className="grid grid-cols-5 gap-3">
            <div className="col-span-3 h-28 rounded-xl border border-glass-border bg-white/[0.03] p-3">
              <div className="flex h-full items-end gap-1.5">
                {[40, 65, 35, 80, 55, 90, 60].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className="flex-1 rounded-t-sm bg-gradient-to-t from-accent-indigo/70 via-accent-violet/60 to-accent-teal/50"
                  />
                ))}
              </div>
            </div>
            <div className="col-span-2 h-28 space-y-2 rounded-xl border border-glass-border bg-white/[0.03] p-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-2 w-full rounded-full bg-white/10" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </GlassWindow>
  );
}

export function FeaturedProject() {
  return (
    <Reveal>
      <GlassCard className="overflow-hidden p-6 sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-violet/30 bg-accent-violet/10 px-3 py-1 font-mono text-xs text-accent-violet">
              <Sparkles size={12} /> Featured Project
            </span>

            <h3 className="mt-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              {FEATURED_PROJECT.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-ink-muted sm:text-lg">
              {FEATURED_PROJECT.description}
            </p>

            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {FEATURED_FEATURES.map((feature, i) => {
                const Icon = FEATURE_ICONS[i % FEATURE_ICONS.length];
                return (
                  <li key={feature} className="flex items-center gap-2.5 text-sm text-ink-muted">
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-white/[0.05] text-accent-teal">
                      <Icon size={14} />
                    </span>
                    {feature}
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {FEATURED_PROJECT.technologies.map((tech) => (
                <TechBadge key={tech} label={tech} />
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <LinkButton
                href={FEATURED_PROJECT.githubUrl ?? "#"}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
              >
                <Github size={16} /> View on GitHub
              </LinkButton>
              <Button variant="ghost" disabled>
                Live Demo — Coming Soon
              </Button>
            </div>
          </div>

          <NexusMockup />
        </div>
      </GlassCard>
    </Reveal>
  );
}
