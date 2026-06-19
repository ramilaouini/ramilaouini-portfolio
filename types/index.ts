import type { ComponentType } from "react";

/**
 * Loose icon type that's compatible with both `lucide-react` icons and
 * `react-icons` icons (e.g. the `react-icons/si` technology logos), since
 * both export components whose props are a superset of this shape.
 */
export type IconComponent = ComponentType<{
  className?: string;
  size?: number | string;
}>;

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconComponent;
  /** Shown as the visible handle/value, e.g. "@aouini_rami" */
  handle: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

export interface Skill {
  name: string;
  icon: IconComponent;
}

export interface SkillCategory {
  title: string;
  icon: IconComponent;
  skills: Skill[];
}

export type ProjectStatus = "live" | "in-progress" | "concept";

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  status: ProjectStatus;
  /** Visual accent used for the abstract project thumbnail gradient */
  accent: "indigo" | "violet" | "teal" | "mixed";
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface JourneyItem {
  period: string;
  title: string;
  description: string;
  isFuture?: boolean;
}
