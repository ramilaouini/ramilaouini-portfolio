import { Mail, Image as ImageIcon, PenTool, DatabaseZap } from "lucide-react";
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiPhp,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiMysql,
  SiGit,
  SiLinux,
  SiQt,
  SiArduino,
  SiInstagram,
  SiFacebook,
  SiTopcoder,
} from "react-icons/si";
import { Code2, LayoutTemplate, Server, Database, Terminal, Palette } from "lucide-react";

import type {
  NavLink,
  SocialLink,
  Stat,
  SkillCategory,
  Project,
  JourneyItem,
} from "@/types";

/* ------------------------------------------------------------------ */
/*  Personal info — edit this block to update the hero/about copy.    */
/* ------------------------------------------------------------------ */

export const PERSONAL = {
  firstName: "Rami",
  fullName: "Rami Laouini",
  role: "Engineering Student • Developer • Tech Enthusiast from Tunisia 🇹🇳",
  location: "Tunisia",
  email: "rami.laouini@esprit.tn",
  github: "ramilaouini",
  introShort:
    "Passionate about building software, AI-powered solutions, and ambitious technology projects while pursuing engineering studies.",
  bio: "I am a second-year engineering student passionate about software development, artificial intelligence, entrepreneurship, system design, and innovative technology projects.",
  mission:
    "Building impactful digital solutions that solve real-world problems through technology and innovation.",
  quote: "Code. Create. Innovate.",
};

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

/* ------------------------------------------------------------------ */
/*  Social links — update hrefs if any handle changes.                */
/* ------------------------------------------------------------------ */

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Instagram",
    handle: "@aouini_rami",
    href: "https://instagram.com/aouini_rami",
    icon: SiInstagram,
  },
  {
    label: "Facebook",
    handle: "laouini rami",
    // NOTE: the original handle contains a space — encoded below so the
    // link resolves. Double-check this against the real profile URL.
    href: "https://www.facebook.com/laouini%20rami",
    icon: SiFacebook,
  },
  {
    label: "Email",
    handle: "rami.laouini@esprit.tn",
    href: "mailto:rami.laouini@esprit.tn",
    icon: Mail,
  },
  {
    label: "TopCoder",
    handle: "ramiLaouini",
    href: "https://profiles.topcoder.com/ramiLaouini",
    icon: SiTopcoder,
  },
];

/* ------------------------------------------------------------------ */
/*  About — stat cards. Placeholder values: update with real numbers. */
/* ------------------------------------------------------------------ */

export const STATS: Stat[] = [
  { label: "Years Learning", value: 4, suffix: "+" },
  { label: "Projects Completed", value: 12, suffix: "+" },
  { label: "Technologies Learned", value: 18, suffix: "+" },
  { label: "GitHub Contributions", value: 500, suffix: "+" },
];

export const ABOUT_POINTS: string[] = [
  "Second-year engineering student",
  "Software developer",
  "Technology enthusiast",
  "Passionate about AI and software systems",
  "Interested in entrepreneurship and startup creation",
  "Always learning and building new projects",
];

/* ------------------------------------------------------------------ */
/*  Skills — grouped by category for the Skills section.              */
/* ------------------------------------------------------------------ */

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "C", icon: SiC },
      { name: "C++", icon: SiCplusplus },
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "PHP", icon: SiPhp },
    ],
  },
  {
    title: "Frontend",
    icon: LayoutTemplate,
    skills: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "PHP", icon: SiPhp },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "Oracle", icon: DatabaseZap },
    ],
  },
  {
    title: "Tools",
    icon: Terminal,
    skills: [
      { name: "Git", icon: SiGit },
      { name: "Linux", icon: SiLinux },
      { name: "Qt", icon: SiQt },
      { name: "Arduino", icon: SiArduino },
    ],
  },
  {
    title: "Design",
    icon: Palette,
    skills: [
      { name: "Photoshop", icon: ImageIcon },
      { name: "Illustrator", icon: PenTool },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Featured project — Nexus Knowledge OS                             */
/* ------------------------------------------------------------------ */

export const FEATURED_PROJECT: Project = {
  id: "nexus-knowledge-os",
  title: "Nexus Knowledge OS",
  description:
    "A smart knowledge and productivity platform designed to organize, manage, and connect information efficiently.",
  // Placeholder stack — update to match the real repo's technologies.
  technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
  status: "live",
  accent: "mixed",
  githubUrl: "https://github.com/ramilaouini/nexus-app-",
  featured: true,
};

export const FEATURED_FEATURES: string[] = [
  "Modern dashboard",
  "Productivity tools",
  "Knowledge management",
  "Smart organization system",
];

/* ------------------------------------------------------------------ */
/*  Projects grid — featured project + upcoming/placeholder projects. */
/*  Replace technologies/links on the placeholders as they ship.      */
/* ------------------------------------------------------------------ */

export const PROJECTS: Project[] = [
  FEATURED_PROJECT,
  {
    id: "ai-assistant-platform",
    title: "AI Assistant Platform",
    description:
      "An AI-powered assistant concept exploring conversational interfaces and automated task handling.",
    technologies: ["Python", "JavaScript", "AI/ML"],
    status: "concept",
    accent: "indigo",
  },
  {
    id: "smart-student-management",
    title: "Smart Student Management System",
    description:
      "A platform concept for managing student records, grades, and academic workflows efficiently.",
    technologies: ["PHP", "MySQL", "JavaScript"],
    status: "concept",
    accent: "violet",
  },
  {
    id: "business-automation-dashboard",
    title: "Business Automation Dashboard",
    description:
      "A dashboard concept for automating repetitive business operations and visualizing key metrics.",
    technologies: ["Node.js", "JavaScript", "MySQL"],
    status: "concept",
    accent: "teal",
  },
  {
    id: "mobile-productivity-app",
    title: "Mobile Productivity App",
    description:
      "A mobile-first productivity app concept focused on tasks, habits, and personal organization.",
    technologies: ["JavaScript", "C++"],
    status: "concept",
    accent: "indigo",
  },
];

/* ------------------------------------------------------------------ */
/*  Journey timeline                                                  */
/* ------------------------------------------------------------------ */

export const JOURNEY: JourneyItem[] = [
  {
    period: "2024",
    title: "Started engineering studies",
    description:
      "Began the engineering program, building a foundation in math, physics, and computer science.",
  },
  {
    period: "2025",
    title: "Expanded software development skills",
    description:
      "Deepened knowledge across languages, tools, and databases while building first real projects.",
  },
  {
    period: "2026",
    title: "Building advanced projects and personal brand",
    description:
      "Shipping more ambitious projects like Nexus Knowledge OS and growing an online presence.",
  },
  {
    period: "Future",
    title: "Technology entrepreneur and software engineer",
    description:
      "Working toward founding impactful products and growing as a software engineer.",
    isFuture: true,
  },
];
