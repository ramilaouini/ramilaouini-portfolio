"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * One-pixel-tall gradient progress bar pinned at the very top of the
 * page. Updates on requestAnimationFrame for silky tracking without
 * causing layout thrash (reads scrollY, never writes to the DOM layout).
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    let raf: number;
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      raf = requestAnimationFrame(update);
    };

    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <div
      aria-hidden
      className="fixed left-0 top-0 z-[60] h-0.5 bg-accent-gradient transition-none"
      style={{ width: `${progress}%` }}
    />
  );
}
