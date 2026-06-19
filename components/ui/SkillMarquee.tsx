"use client";

import { SKILL_CATEGORIES } from "@/lib/data";

const ALL_SKILLS = SKILL_CATEGORIES.flatMap((cat) => cat.skills);

/**
 * A looping marquee of every skill in the stack — purely decorative
 * (aria-hidden), placed between the About and Skills sections as a
 * motion accent. The strip is duplicated so the loop is seamless.
 */
export function SkillMarquee() {
  const items = [...ALL_SKILLS, ...ALL_SKILLS]; // duplicate for seamless loop

  return (
    <div
      aria-hidden
      className="relative overflow-hidden border-y border-glass-border py-4 select-none"
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((skill, i) => (
          <span
            key={i}
            className="mx-5 inline-flex items-center gap-2 font-mono text-sm text-ink-faint"
          >
            <skill.icon size={14} className="flex-shrink-0" />
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}
