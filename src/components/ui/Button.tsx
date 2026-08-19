import Link from "next/link";
import type { ReactNode } from "react";

import { Icon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  withArrow?: boolean;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  withArrow = false,
  className,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400",
        variant === "primary" &&
          "bg-accent-500 text-white shadow-[0_0_28px_-6px_rgba(47,125,255,0.55)] hover:bg-accent-400 hover:shadow-[0_0_36px_-4px_rgba(47,125,255,0.7)] active:scale-[0.98]",
        variant === "secondary" &&
          "border border-white/15 bg-white/[0.04] text-slate-100 hover:border-white/30 hover:bg-white/[0.08] active:scale-[0.98]",
        className,
      )}
    >
      {children}
      {withArrow && (
        <Icon
          name="arrowRight"
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </Link>
  );
}
