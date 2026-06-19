"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  SiPython,
  SiJavascript,
  SiCplusplus,
  SiGit,
  SiLinux,
  SiMysql,
} from "react-icons/si";
import { PERSONAL } from "@/lib/data";
import { scrollToSection } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/Button";
import { GlassWindow } from "@/components/ui/GlassWindow";
import { AmbientBackground } from "@/components/ui/AmbientBackground";

const FLOATERS = [
  { Icon: SiPython, top: "6%", left: "-8%", delay: 0 },
  { Icon: SiJavascript, top: "70%", left: "-10%", delay: 0.6 },
  { Icon: SiCplusplus, top: "-6%", left: "60%", delay: 1.1 },
  { Icon: SiGit, top: "82%", left: "68%", delay: 0.3 },
  { Icon: SiLinux, top: "18%", left: "104%", delay: 0.9 },
  { Icon: SiMysql, top: "58%", left: "100%", delay: 1.4 },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20 sm:pt-32"
    >
      <AmbientBackground />

      <div className="relative mx-auto grid w-full max-w-8xl grid-cols-1 items-center gap-16 px-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        {/* Text column */}
        <div className="order-2 lg:order-1">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass px-4 py-1.5 font-mono text-xs text-accent-teal">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-teal" />
              ~/whoami
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl">
              Hi 👋, I&apos;m{" "}
              <span className="bg-accent-gradient bg-clip-text text-transparent">
                {PERSONAL.firstName}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-4 text-lg font-medium text-ink-muted sm:text-xl">
              {PERSONAL.role}
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted/90 sm:text-lg">
              {PERSONAL.introShort}
            </p>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <LinkButton
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                }}
              >
                View Projects
              </LinkButton>
              <LinkButton
                href="#contact"
                variant="secondary"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
              >
                Contact Me
              </LinkButton>
            </div>
          </Reveal>
        </div>

        {/* Portrait column */}
        <div className="order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative mx-auto w-full max-w-sm"
          >
            {FLOATERS.map(({ Icon, top, left, delay }, i) => (
              <motion.div
                key={i}
                className="absolute z-10 hidden h-12 w-12 items-center justify-center rounded-xl border border-glass-border bg-glass text-ink-muted shadow-glass backdrop-blur-xl sm:flex"
                style={{ top, left }}
                animate={{ y: [0, -14, 0], rotate: [0, 4, 0] }}
                transition={{
                  duration: 6,
                  delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Icon size={20} />
              </motion.div>
            ))}

            <GlassWindow label="rami@dev ~ portrait.jpg">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/images/profile.jpg"
                  alt="Portrait of Rami"
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 420px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-accent-indigo/10" />
              </div>
            </GlassWindow>
          </motion.div>
        </div>
      </div>

      <motion.button
        aria-label="Scroll to About section"
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-faint transition-colors hover:text-ink"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={22} />
      </motion.button>
    </section>
  );
}
