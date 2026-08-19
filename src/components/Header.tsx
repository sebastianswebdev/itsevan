"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import logo from "../../public/images/SW-Logo.png";
import { Icon } from "@/components/ui/icons";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll + wire escape key while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/[0.06] bg-ink-950/80 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          aria-label="Sebastian Works — home"
          onClick={() => setOpen(false)}
        >
          <Image
            src={logo}
            alt=""
            priority
            className="h-9 w-auto brightness-160 saturate-125 drop-shadow-[0_0_12px_rgba(47,125,255,0.45)]"
          />
          <span className="hidden text-sm font-semibold tracking-[0.22em] text-white uppercase sm:block">
            Sebastian Works
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="rounded-full px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-white/[0.06] hover:text-white xl:px-3.5"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="group hidden items-center gap-2 rounded-full bg-accent-500 px-5 py-2.5 text-sm font-medium whitespace-nowrap text-white shadow-[0_0_24px_-8px_rgba(47,125,255,0.8)] transition-all hover:bg-accent-400 sm:inline-flex"
          >
            Let&apos;s Talk
            <Icon
              name="arrowRight"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-200 transition-colors hover:bg-white/[0.1] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <Icon name="menu" className="h-5 w-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
            className="fixed inset-0 z-50 flex h-dvh flex-col bg-ink-950/95 backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.25 }}
          >
            <div className="flex h-18 items-center justify-between px-5">
              <span className="flex items-center gap-3">
                <Image src={logo} alt="" className="h-8 w-auto brightness-160 saturate-125" />
                <span className="text-sm font-semibold tracking-[0.22em] text-white uppercase">
                  Sebastian Works
                </span>
              </span>
              <button
                ref={closeButtonRef}
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-slate-200"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <Icon name="close" className="h-5 w-5" />
              </button>
            </div>

            <nav aria-label="Mobile" className="flex flex-1 items-center px-6">
              <ul className="w-full space-y-1">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.label}
                    initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: reduceMotion ? 0 : 0.05 * index }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-4 py-3.5 text-2xl font-semibold tracking-tight text-slate-100 transition-colors hover:bg-white/[0.06] hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="px-6 pb-10">
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-4 text-base font-medium text-white shadow-[0_0_32px_-8px_rgba(47,125,255,0.8)]"
              >
                Let&apos;s Talk
                <Icon name="arrowRight" className="h-4 w-4" />
              </Link>
              <p className="mt-4 text-center text-xs text-slate-500">
                {site.tagline}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
