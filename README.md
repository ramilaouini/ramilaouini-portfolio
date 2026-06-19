# Rami Laouini — Personal Portfolio

A modern, premium, fully responsive personal portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Design language: Apple ✕ Linear ✕ Vercel ✕ Stripe — dark mode, glassmorphism cards, gradient accents, subtle ambient motion.

---

## Quick Start

```bash
# 1. Install dependencies (Node 18+ required)
npm install

# 2. Run the dev server
npm run dev
# → open http://localhost:3000

# 3. Build for production
npm run build
npm start
```

---

## Project Structure

```
rami-portfolio/
├── app/
│   ├── layout.tsx         ← root layout: fonts, metadata/SEO
│   ├── page.tsx           ← home page: composes all sections
│   └── globals.css        ← Tailwind directives + base resets
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx     ← sticky glass nav, mobile menu
│   │   └── Footer.tsx     ← quote, social links, back-to-top
│   │
│   ├── sections/          ← one file per page section
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── FeaturedProject.tsx
│   │   ├── Projects.tsx
│   │   ├── GitHubStats.tsx
│   │   ├── Journey.tsx
│   │   └── Contact.tsx
│   │
│   └── ui/                ← reusable primitives
│       ├── AmbientBackground.tsx
│       ├── AnimatedCounter.tsx
│       ├── Button.tsx
│       ├── GlassCard.tsx
│       ├── GlassWindow.tsx
│       ├── ProjectThumbnail.tsx
│       ├── Reveal.tsx
│       ├── ScrollProgress.tsx
│       ├── SectionHeading.tsx
│       ├── SkillMarquee.tsx
│       ├── StatusBadge.tsx
│       └── TechBadge.tsx
│
├── lib/
│   ├── data.ts            ← ★ single source of truth for all content
│   └── utils.ts           ← cn(), scrollToSection()
│
├── types/
│   └── index.ts           ← shared TypeScript interfaces
│
├── public/
│   └── images/
│       └── profile.jpg    ← your portrait
│
├── tailwind.config.ts     ← design tokens (colors, fonts, animations)
├── next.config.js
└── tsconfig.json
```

---

## Customising Content

**All copy, links, skills, projects and timeline live in one file:**

```
lib/data.ts
```

Edit the `PERSONAL` object for name/bio/email, `SKILL_CATEGORIES` for the tech stack, `PROJECTS` for project cards, and `JOURNEY` for the timeline. No hunting through JSX.

### Adding a real project screenshot

Replace the `<ProjectThumbnail>` inside a project card with a Next.js `<Image>`:

```tsx
// In Projects.tsx, swap:
<ProjectThumbnail accent={project.accent} />

// For:
<div className="relative h-44 w-full overflow-hidden">
  <Image src={project.imageUrl} alt={project.title} fill className="object-cover" />
</div>
```

### Wiring up the contact form

The form currently opens the visitor's email client (no backend needed). To collect submissions server-side, replace the `handleSubmit` body in `components/sections/Contact.tsx` with a POST to [Formspree](https://formspree.io), [Resend](https://resend.com), or a Next.js Route Handler.

---

## Deploying to Vercel

```bash
# Push to GitHub, then:
npx vercel --prod
```

Or connect the repo in the Vercel dashboard — zero-config with Next.js.

Update `siteUrl` in `app/layout.tsx` once you have a real domain.

---

## Design Tokens

The palette, typography and animation keyframes all live in `tailwind.config.ts`. Key values:

| Token | Value | Used for |
|---|---|---|
| `base.DEFAULT` | `#07070C` | page background |
| `accent.indigo` | `#5B5FEF` | gradient start |
| `accent.violet` | `#9D5CF0` | gradient mid / interactive |
| `accent.teal` | `#36D6D6` | gradient end / accents |
| `glass.DEFAULT` | `rgba(255,255,255,0.05)` | card surfaces |
| `glass.border` | `rgba(255,255,255,0.09)` | card borders |

---

## Built With

- [Next.js 14](https://nextjs.org) — App Router
- [TypeScript](https://typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Lucide React](https://lucide.dev) + [React Icons](https://react-icons.github.io/react-icons/) — icons
- [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (display) + [Inter](https://fonts.google.com/specimen/Inter) (body) + [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (mono) — Google Fonts

---

© 2024 Rami Laouini
