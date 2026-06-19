"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Delay in seconds, useful for staggering siblings manually. */
  delay?: number;
  /** Distance (px) the element travels in on reveal. */
  distance?: number;
  className?: string;
  /** Animate every time it scrolls into view instead of just once. */
  repeat?: boolean;
}

/**
 * Consistent fade + slide-up reveal used across every section so motion
 * reads as one deliberate language rather than scattered effects.
 * Automatically renders statically if the user prefers reduced motion.
 */
export function Reveal({
  children,
  delay = 0,
  distance = 24,
  className,
  repeat = false,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: !repeat, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

interface RevealGroupProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
}

/**
 * Wraps a list of children and staggers their entrance. Children should
 * be mapped with `<Reveal>` already, or plain elements — this just adds
 * the stagger context via CSS custom delay isn't needed since Reveal
 * handles its own viewport trigger; use this for grids where you want a
 * shared container with a quick stagger using inline delay props.
 */
export function RevealGroup({ children, className }: RevealGroupProps) {
  return <div className={className}>{children}</div>;
}
