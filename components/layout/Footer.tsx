"use client";

import { ArrowUp } from "lucide-react";
import { PERSONAL, SOCIAL_LINKS } from "@/lib/data";
import { scrollToSection } from "@/lib/utils";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-glass-border bg-base-soft">
      <div className="mx-auto max-w-8xl px-6 py-12 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="font-mono text-sm text-accent-teal">&ldquo;{PERSONAL.quote}&rdquo;</p>
            <p className="mt-2 text-sm text-ink-faint">
              © {year} {PERSONAL.fullName}. Built with Next.js &amp; Tailwind CSS.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-glass-border bg-glass text-ink-muted transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:text-ink"
              >
                <social.icon size={16} />
              </a>
            ))}

            <button
              aria-label="Back to top"
              onClick={() => scrollToSection("home")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-glass-border bg-glass text-ink-muted transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:text-ink"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
