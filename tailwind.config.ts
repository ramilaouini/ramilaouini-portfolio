import type { Config } from "tailwindcss";

/**
 * Design tokens for Rami's portfolio.
 *
 * Palette is intentionally a cool, near-black base with a three-stop
 * indigo -> violet -> teal accent gradient, paired with a glass
 * (translucent) surface system. See README.md for the full rationale.
 */
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#07070C",
          soft: "#0B0B14",
          raised: "#11111B",
        },
        ink: {
          DEFAULT: "#F3F4F7",
          muted: "#9499AB",
          faint: "#5C6175",
        },
        accent: {
          indigo: "#5B5FEF",
          violet: "#9D5CF0",
          teal: "#36D6D6",
        },
        glass: {
          DEFAULT: "rgba(255,255,255,0.05)",
          border: "rgba(255,255,255,0.09)",
          hover: "rgba(255,255,255,0.08)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "accent-gradient":
          "linear-gradient(115deg, #5B5FEF 0%, #9D5CF0 50%, #36D6D6 100%)",
        "accent-gradient-soft":
          "linear-gradient(115deg, rgba(91,95,239,0.18) 0%, rgba(157,92,240,0.18) 50%, rgba(54,214,214,0.18) 100%)",
        "radial-fade":
          "radial-gradient(circle at 50% 0%, rgba(91,95,239,0.16), transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(157,92,240,0.45)",
        "glow-sm": "0 0 24px -6px rgba(91,95,239,0.4)",
        glass: "0 8px 32px 0 rgba(0,0,0,0.45)",
      },
      animation: {
        blob: "blob 18s infinite ease-in-out",
        "blob-slow": "blob 26s infinite ease-in-out",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out infinite 1.5s",
        "spin-slow": "spin 14s linear infinite",
        "fade-up": "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(40px, -30px) scale(1.08)" },
          "66%": { transform: "translate(-30px, 25px) scale(0.95)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(4deg)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};

export default config;
