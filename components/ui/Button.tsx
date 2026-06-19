import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet focus-visible:ring-offset-2 focus-visible:ring-offset-base disabled:opacity-40 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent-gradient text-white shadow-glow-sm hover:shadow-glow hover:scale-[1.03] active:scale-[0.98]",
  secondary:
    "border border-glass-border bg-glass text-ink backdrop-blur-xl hover:border-white/25 hover:bg-glass-hover hover:-translate-y-0.5",
  ghost: "text-ink-muted hover:text-ink",
};

interface CommonProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkButtonProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button({
  variant = "primary",
  children,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}

/** Same visual styles as `Button`, but renders an `<a>` for navigation/external links. */
export function LinkButton({
  variant = "primary",
  children,
  className,
  href,
  ...rest
}: LinkButtonProps) {
  return (
    <a href={href} className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </a>
  );
}
