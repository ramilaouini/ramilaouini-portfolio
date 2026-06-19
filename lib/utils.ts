import { clsx, type ClassValue } from "clsx";

/**
 * Merge class names conditionally. Thin wrapper around `clsx` so the rest
 * of the codebase has a single, consistent import for combining Tailwind
 * classes.
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Smooth-scrolls to a section by id, accounting for the sticky navbar
 * height so headings aren't hidden underneath it.
 */
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const navHeight = 80;
  const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
  window.scrollTo({ top, behavior: "smooth" });
}
