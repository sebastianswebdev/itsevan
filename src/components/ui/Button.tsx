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
        "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500",
        variant === "primary" &&
          "bg-accent-500 text-white shadow-[0_8px_22px_-8px_rgba(31,102,240,0.6)] hover:bg-accent-600 hover:shadow-[0_12px_28px_-8px_rgba(31,102,240,0.7)] active:scale-[0.98]",
        variant === "secondary" &&
          "border border-line-strong bg-white text-ink-800 shadow-[0_1px_2px_rgba(15,23,42,0.05)] hover:border-accent-500/40 hover:bg-surface-100 active:scale-[0.98]",
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
