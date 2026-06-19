"use client";

import { SKILL_CATEGORIES } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-8xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="skills"
          title="Languages & Technologies"
          description="A growing toolbox spanning programming languages, web technologies, databases, and the tools used to build and ship real projects."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category, i) => (
            <Reveal key={category.title} delay={0.06 * i}>
              <GlassCard interactive className="h-full p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-gradient-soft text-accent-violet">
                    <category.icon size={18} />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {category.title}
                  </h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="group flex items-center gap-2 rounded-full border border-glass-border bg-white/[0.03] px-3 py-1.5 text-sm text-ink-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-violet/40 hover:text-ink hover:shadow-glow-sm"
                    >
                      <skill.icon
                        size={14}
                        className="text-ink-faint transition-colors group-hover:text-accent-teal"
                      />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
