"use client";

import { Github, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { ProjectThumbnail } from "@/components/ui/ProjectThumbnail";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TechBadge } from "@/components/ui/TechBadge";
import { Button, LinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { FeaturedProject } from "@/components/sections/FeaturedProject";

export function Projects() {
  const otherProjects = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-8xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="projects"
          title="Featured Work"
          description="A flagship project shipped so far, with more ambitious builds underway."
        />

        <div className="mt-14">
          <FeaturedProject />
        </div>

        <Reveal>
          <h3 className="mt-20 font-display text-xl font-semibold text-ink sm:text-2xl">
            More Projects
          </h3>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, i) => (
            <Reveal key={project.id} delay={0.06 * i}>
              <GlassCard interactive className="flex h-full flex-col overflow-hidden">
                <ProjectThumbnail accent={project.accent} />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="font-display text-lg font-semibold text-ink">
                      {project.title}
                    </h4>
                  </div>
                  <div className="mt-2">
                    <StatusBadge status={project.status} />
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <TechBadge key={tech} label={tech} />
                    ))}
                  </div>
                  <div className="mt-6 flex gap-3">
                    {project.githubUrl ? (
                      <LinkButton
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        variant="secondary"
                        className="flex-1 px-4 py-2 text-sm"
                      >
                        <Github size={14} /> Code
                      </LinkButton>
                    ) : (
                      <Button variant="secondary" disabled className="flex-1 px-4 py-2 text-sm">
                        <Github size={14} /> Code
                      </Button>
                    )}
                    {project.liveUrl ? (
                      <LinkButton
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        variant="ghost"
                        className="flex-1 px-4 py-2 text-sm"
                      >
                        <ExternalLink size={14} /> Demo
                      </LinkButton>
                    ) : (
                      <Button variant="ghost" disabled className="flex-1 px-4 py-2 text-sm">
                        <ExternalLink size={14} /> Demo
                      </Button>
                    )}
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
