"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { PERSONAL, SOCIAL_LINKS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

/**
 * No backend is wired up here, so the form opens the visitor's email
 * client with the message pre-filled — works anywhere, no API keys
 * required. To collect submissions directly (without opening mail),
 * swap the `handleSubmit` body for a POST to a service like Formspree,
 * Resend, or a Next.js Route Handler — see README.md.
 */
export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${PERSONAL.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="contact"
          title="Let's build something amazing together."
          description="Open to internships, freelance collaborations, and interesting ideas worth building."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <GlassCard className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="font-mono text-xs text-ink-muted">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="mt-2 w-full rounded-xl border border-glass-border bg-white/[0.03] px-4 py-3 text-ink placeholder:text-ink-faint focus:border-accent-violet/50 focus:outline-none focus:ring-2 focus:ring-accent-violet/20"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="font-mono text-xs text-ink-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-glass-border bg-white/[0.03] px-4 py-3 text-ink placeholder:text-ink-faint focus:border-accent-violet/50 focus:outline-none focus:ring-2 focus:ring-accent-violet/20"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="font-mono text-xs text-ink-muted">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me a bit about the project or opportunity..."
                    className="mt-2 w-full resize-none rounded-xl border border-glass-border bg-white/[0.03] px-4 py-3 text-ink placeholder:text-ink-faint focus:border-accent-violet/50 focus:outline-none focus:ring-2 focus:ring-accent-violet/20"
                  />
                </div>

                <Button type="submit" className="w-full sm:w-auto">
                  {sent ? (
                    <>
                      <CheckCircle2 size={16} /> Opening your email app...
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </Button>
              </form>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.1}>
            <GlassCard className="flex h-full flex-col gap-3 p-6 sm:p-8">
              <p className="font-mono text-xs text-ink-muted">{"// elsewhere"}</p>
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center gap-3 rounded-xl border border-transparent px-3 py-3 transition-all duration-300 hover:border-glass-border hover:bg-white/[0.04]"
                >
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white/[0.05] text-ink-muted transition-colors group-hover:text-ink">
                    <social.icon size={16} />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-ink">{social.label}</span>
                    <span className="block text-xs text-ink-faint">{social.handle}</span>
                  </span>
                </a>
              ))}
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
