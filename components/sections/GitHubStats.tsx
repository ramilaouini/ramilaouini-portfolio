"use client";

import { Github, ArrowUpRight } from "lucide-react";
import { PERSONAL } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { LinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

/**
 * These cards are live, auto-generated images from github-readme-stats /
 * streak-stats — they update on their own as the GitHub profile changes,
 * no manual upkeep needed. Colors are tuned to match the site's accent
 * palette via their query params.
 */
const STATS_URL = `https://github-readme-stats.vercel.app/api?username=${PERSONAL.github}&show_icons=true&theme=dark&hide_border=true&bg_color=00000000&title_color=9D5CF0&icon_color=36D6D6&text_color=9499AB`;
const STREAK_URL = `https://streak-stats.demolab.com/?user=${PERSONAL.github}&theme=dark&hide_border=true&background=00000000&ring=9D5CF0&fire=36D6D6&currStreakLabel=9D5CF0`;
const LANGS_URL = `https://github-readme-stats.vercel.app/api/top-langs/?username=${PERSONAL.github}&layout=compact&theme=dark&hide_border=true&bg_color=00000000&title_color=9D5CF0&text_color=9499AB`;

export function GitHubStats() {
  return (
    <section id="github" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-8xl px-6 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="github"
            title="Open Source Activity"
            description={`Live stats pulled straight from @${PERSONAL.github}'s GitHub profile.`}
          />
          <Reveal delay={0.1}>
            <LinkButton
              href={`https://github.com/${PERSONAL.github}`}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
            >
              <Github size={16} /> View Profile <ArrowUpRight size={14} />
            </LinkButton>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <GlassCard className="overflow-hidden p-4 sm:p-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={STATS_URL}
                alt={`${PERSONAL.github} GitHub stats`}
                loading="lazy"
                className="w-full"
              />
            </GlassCard>
          </Reveal>
          <Reveal delay={0.08}>
            <GlassCard className="overflow-hidden p-4 sm:p-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={STREAK_URL}
                alt={`${PERSONAL.github} GitHub streak`}
                loading="lazy"
                className="w-full"
              />
            </GlassCard>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <GlassCard className="mt-6 overflow-hidden p-4 sm:p-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={LANGS_URL}
              alt={`${PERSONAL.github} top languages`}
              loading="lazy"
              className="mx-auto w-full max-w-md"
            />
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
