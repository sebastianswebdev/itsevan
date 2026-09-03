"use client";

import { useCallback, useRef } from "react";
import type { RefObject } from "react";
import { motion, useReducedMotion, useScroll } from "motion/react";

import { ScrollPortrait, StageDots } from "@/components/ScrollPortrait";
import { ButtonLink } from "@/components/ui/Button";
import { portraitStages } from "@/data/portraits";
import { site } from "@/data/site";

const entrance = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const entranceItem = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.65, 0.28, 0.99] as const },
  },
};

function useStageScroll(containerRef: RefObject<HTMLDivElement | null>) {
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scrollToStage = useCallback(
    (index: number) => {
      const container = containerRef.current;
      if (!container) return;
      const top = container.getBoundingClientRect().top + window.scrollY;
      const scrollable = container.offsetHeight - window.innerHeight;
      const target = top + ((index + 0.5) / portraitStages.length) * scrollable;
      window.scrollTo({ top: target, behavior: reduceMotion ? "auto" : "smooth" });
    },
    [containerRef, reduceMotion],
  );

  return { scrollYProgress, scrollToStage };
}

function AmbientBackground() {
  const reduceMotion = useReducedMotion();
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
      <div className="grid-pattern absolute inset-0 opacity-60 [mask-image:radial-gradient(80%_60%_at_50%_10%,black,transparent)]" />
      <motion.div
        className="absolute -top-32 left-[8%] h-96 w-96 rounded-full bg-accent-400/25 blur-[140px]"
        animate={reduceMotion ? undefined : { x: [0, 28, 0], y: [0, 18, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-[4%] h-80 w-80 rounded-full bg-violetx/10 blur-[130px]"
        animate={reduceMotion ? undefined : { x: [0, -24, 0], y: [0, -16, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function HeroCopy({ compact = false }: { compact?: boolean }) {
  return (
    <motion.div
      variants={entrance}
      initial="hidden"
      animate="visible"
      className="relative z-10"
    >
      <motion.p
        variants={entranceItem}
        className="inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-white px-4 py-2 text-[11px] font-semibold tracking-[0.18em] text-ink-600 uppercase shadow-[0_1px_2px_rgba(15,23,42,0.05)]"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-60 motion-reduce:animate-none" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
        </span>
        I don&apos;t just build — I grow businesses
      </motion.p>

      <motion.h1
        variants={entranceItem}
        className={
          compact
            ? "mt-5 text-[2.6rem] leading-[1.05] font-bold tracking-tight text-ink-900 sm:text-6xl"
            : "mt-6 text-6xl leading-[1.04] font-bold tracking-tight text-ink-900 lg:text-[3.4rem] xl:text-[4rem] 2xl:text-[4.5rem]"
        }
      >
        Strategy.
        <br />
        Systems.
        <br />
        <span className="text-glow-blue bg-gradient-to-r from-accent-600 via-accent-500 to-cyanx bg-clip-text text-transparent">
          Scalable
        </span>{" "}
        Results.
      </motion.h1>

      <motion.p
        variants={entranceItem}
        className="mt-6 max-w-md text-base leading-relaxed text-ink-500 sm:text-lg"
      >
        I help businesses build powerful websites, drive high-converting
        traffic, and automate systems that scale.
      </motion.p>

      <motion.div
        variants={entranceItem}
        className="mt-8 flex flex-wrap items-center gap-4"
      >
        <ButtonLink href={site.bookingHref} withArrow>
          Book a Strategy Call
        </ButtonLink>
        <ButtonLink href="/#work" variant="secondary">
          View My Work
        </ButtonLink>
      </motion.div>
    </motion.div>
  );
}

/** Mobile / tablet: the intro copy flows normally, then only the portrait
 *  sequence pins while the four roles transition. */
function HeroMobile() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress, scrollToStage } = useStageScroll(containerRef);

  return (
    <div className="relative">
      <AmbientBackground />
      <div className="mx-auto max-w-7xl px-5 pt-28 pb-6 sm:px-8">
        <HeroCopy compact />
      </div>

      <div ref={containerRef} className="relative h-[260vh]">
        <div className="sticky top-0 flex h-svh flex-col items-center justify-center gap-7 overflow-hidden px-5 pt-16">
          <ScrollPortrait progress={scrollYProgress} />
          <StageDots progress={scrollYProgress} onSelect={scrollToStage} />
        </div>
      </div>
    </div>
  );
}

/** Desktop: the whole hero pins — copy on the left, portrait system on
 *  the right — while scroll drives the four-stage sequence. */
function HeroDesktop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress, scrollToStage } = useStageScroll(containerRef);

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 flex min-h-svh items-center overflow-hidden">
        <AmbientBackground />
        <div className="mx-auto grid w-full max-w-7xl grid-cols-[1.02fr_1fr] items-center gap-8 px-8 pt-24 pb-10">
          <div>
            <HeroCopy />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-12"
            >
              <p className="mb-4 font-mono text-[10px] tracking-[0.3em] text-ink-500 uppercase">
                Scroll to explore
              </p>
              <StageDots progress={scrollYProgress} onSelect={scrollToStage} />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.21, 0.65, 0.28, 0.99] }}
          >
            <ScrollPortrait progress={scrollYProgress} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" aria-label="Introduction">
      <div className="lg:hidden">
        <HeroMobile />
      </div>
      <div className="hidden lg:block">
        <HeroDesktop />
      </div>
    </section>
  );
}
