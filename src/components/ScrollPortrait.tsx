"use client";

import Image from "next/image";
import type { MotionValue } from "motion/react";
import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useTransform,
} from "motion/react";
import type { ReactNode } from "react";

import { Icon } from "@/components/ui/icons";
import { portraitStages } from "@/data/portraits";
import {
  automationChecklist,
  marketingChips,
  stackChips,
} from "@/data/technologies";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { cn } from "@/lib/utils";

const STAGE_COUNT = portraitStages.length;
const SEGMENT = 1 / STAGE_COUNT;
const FADE = SEGMENT * 0.3;

/**
 * Scroll keyframes for stage `index`. Every array spans the full [0, 1]
 * progress range with explicit endpoints — partial ranges get implicit
 * base-value keyframes when the browser drives the mapping natively,
 * which corrupts the crossfade.
 */
export function stageFrames(index: number): number[] {
  const start = index * SEGMENT;
  const end = (index + 1) * SEGMENT;
  if (index === 0) return [0, end - FADE, end + FADE, 1];
  if (index === STAGE_COUNT - 1) return [0, start - FADE, start + FADE, 1];
  return [0, start - FADE, start + FADE, end - FADE, end + FADE, 1];
}

/** Output values matching `stageFrames` for the same `index`. */
export function stageOutputs<T>(
  index: number,
  enter: T,
  active: T,
  exit: T,
): T[] {
  if (index === 0) return [active, active, exit, exit];
  if (index === STAGE_COUNT - 1) return [enter, enter, active, active];
  return [enter, enter, active, active, exit, exit];
}

type StageMotionProps = {
  progress: MotionValue<number>;
  index: number;
  /** When true, only opacity animates (reduced motion / small screens). */
  simple: boolean;
};

/* ------------------------------------------------------------------ */
/*  Portrait layers                                                    */
/* ------------------------------------------------------------------ */

function StageLayer({
  progress,
  index,
  simple,
}: StageMotionProps) {
  const stage = portraitStages[index];
  const frames = stageFrames(index);

  const opacity = useTransform(progress, frames, stageOutputs(index, 0, 1, 0));
  const y = useTransform(progress, frames, stageOutputs(index, 44, 0, -36));
  const x = useTransform(progress, frames, stageOutputs(index, 30, 0, -22));
  const scale = useTransform(progress, frames, stageOutputs(index, 0.93, 1, 1.04));
  const blur = useTransform(progress, frames, stageOutputs(index, 7, 0, 7));
  const filter = useMotionTemplate`blur(${blur}px)`;

  return (
    <motion.div
      className="absolute inset-x-0 -top-10 bottom-0 overflow-hidden rounded-b-[2rem] sm:-top-14"
      style={simple ? { opacity } : { opacity, y, x, scale, filter }}
    >
      <Image
        src={stage.src}
        alt={stage.alt}
        fill
        priority={index === 0}
        loading="eager"
        quality={82}
        sizes="(min-width: 1024px) 540px, 88vw"
        placeholder="blur"
        className="object-contain object-bottom"
      />
    </motion.div>
  );
}

function StageChip({ progress, index, simple }: StageMotionProps) {
  const stage = portraitStages[index];
  const frames = stageFrames(index);
  const opacity = useTransform(progress, frames, stageOutputs(index, 0, 1, 0));
  const y = useTransform(progress, frames, stageOutputs(index, 14, 0, -10));

  return (
    <motion.div
      className="glass-strong absolute bottom-4 left-4 z-20 rounded-2xl px-4 py-3 sm:bottom-5 sm:left-5"
      style={simple ? { opacity } : { opacity, y }}
    >
      <p className="font-mono text-[10px] tracking-[0.25em] text-accent-400 uppercase">
        {stage.label} / 0{STAGE_COUNT}
      </p>
      <p className="mt-1 text-sm font-semibold text-white">{stage.role}</p>
      <p className="mt-0.5 text-xs text-slate-400">{stage.words.join("  ·  ")}</p>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Floating interface cards                                           */
/* ------------------------------------------------------------------ */

type FloatCardProps = {
  progress: MotionValue<number>;
  /** Stage during which this card is emphasized. */
  stage: number;
  className?: string;
  children: ReactNode;
};

function FloatCard({ progress, stage, className, children }: FloatCardProps) {
  const frames = stageFrames(stage);
  const opacity = useTransform(progress, frames, stageOutputs(stage, 0.3, 1, 0.3));
  const scale = useTransform(progress, frames, stageOutputs(stage, 0.97, 1, 0.97));

  return (
    <motion.div
      aria-hidden="true"
      className={cn("glass-strong absolute z-30 rounded-2xl", className)}
      style={{ opacity, scale }}
    >
      {children}
    </motion.div>
  );
}

function Sparkline() {
  return (
    <svg viewBox="0 0 120 40" className="h-10 w-full" aria-hidden="true">
      <defs>
        <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2f7dff" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#2f7dff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M2 34 14 30 26 31 38 25 50 27 62 20 74 22 86 14 98 15 118 4 L118 40 2 40 Z"
        fill="url(#spark-fill)"
      />
      <path
        d="M2 34 14 30 26 31 38 25 50 27 62 20 74 22 86 14 98 15 118 4"
        fill="none"
        stroke="#4d8dff"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MiniBars() {
  const heights = [10, 16, 12, 20, 17, 24, 28];
  return (
    <div className="flex h-8 items-end gap-1.5" aria-hidden="true">
      {heights.map((h, i) => (
        <span
          key={i}
          className={cn(
            "w-2 rounded-sm",
            i === heights.length - 1 ? "bg-accent-400" : "bg-accent-500/35",
          )}
          style={{ height: `${h * 3.5}%`, minHeight: h }}
        />
      ))}
    </div>
  );
}

function ChartCard({ progress }: { progress: MotionValue<number> }) {
  return (
    <FloatCard
      progress={progress}
      stage={0}
      className="-top-6 -right-4 hidden w-52 p-4 xl:-right-10 xl:block xl:w-56"
    >
      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent-500/15 text-accent-400">
          <Icon name="trend" className="h-4 w-4" />
        </span>
        <div>
          <p className="text-xs font-semibold text-white">Growth trajectory</p>
          <p className="text-[10px] text-slate-500">strategy → results</p>
        </div>
      </div>
      <div className="mt-3">
        <Sparkline />
      </div>
    </FloatCard>
  );
}

function CodeCard({ progress }: { progress: MotionValue<number> }) {
  return (
    <FloatCard
      progress={progress}
      stage={1}
      className="-top-10 -left-4 w-60 -rotate-2 p-0 xl:-left-14 xl:w-64"
    >
      <div className="flex items-center gap-1.5 border-b border-white/[0.07] px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-rose-400/80" />
        <span className="h-2 w-2 rounded-full bg-amber-300/80" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
        <span className="ml-2 font-mono text-[10px] text-slate-500">Hero.tsx</span>
      </div>
      <pre className="overflow-hidden px-4 py-3 font-mono text-[10px] leading-relaxed text-slate-400">
        <code>
          <span className="text-violetx">export function</span>{" "}
          <span className="text-cyanx">Hero</span>
          {"() {\n  "}
          <span className="text-violetx">return</span>
          {" (\n    "}
          <span className="text-slate-500">&lt;</span>
          <span className="text-emeraldx">section</span>
          <span className="text-slate-500">&gt;</span>
          {"\n      "}
          <span className="text-slate-200">Fast. Modern. Scalable.</span>
          {"\n    "}
          <span className="text-slate-500">&lt;/</span>
          <span className="text-emeraldx">section</span>
          <span className="text-slate-500">&gt;</span>
          {"\n  )\n}"}
        </code>
      </pre>
    </FloatCard>
  );
}

function StackCard({ progress }: { progress: MotionValue<number> }) {
  return (
    <FloatCard
      progress={progress}
      stage={1}
      className="bottom-32 -left-3 p-3 xl:-left-12"
    >
      <ul className="space-y-2">
        {stackChips.map((tech) => (
          <li
            key={tech}
            className="flex items-center gap-2 rounded-lg bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-200"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
            {tech}
          </li>
        ))}
      </ul>
    </FloatCard>
  );
}

function AdsCard({ progress }: { progress: MotionValue<number> }) {
  return (
    <FloatCard
      progress={progress}
      stage={2}
      className="top-[34%] -right-4 w-52 p-4 xl:-right-12 xl:w-56"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emeraldx/15 text-emeraldx">
            <Icon name="megaphone" className="h-4 w-4" />
          </span>
          <p className="text-xs font-semibold text-white">Google Ads</p>
        </div>
        <span className="flex items-center gap-1 rounded-full bg-emeraldx/10 px-2 py-0.5 text-[10px] font-medium text-emeraldx">
          <span className="h-1 w-1 rounded-full bg-emeraldx" />
          Live
        </span>
      </div>
      <div className="mt-3">
        <MiniBars />
      </div>
      <div className="mt-3 flex gap-1.5">
        {marketingChips.slice(1).map((chip) => (
          <span
            key={chip}
            className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2 py-1 font-mono text-[10px] text-slate-300"
          >
            {chip}
          </span>
        ))}
        <span className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2 py-1 font-mono text-[10px] text-slate-300">
          Conversions
        </span>
      </div>
    </FloatCard>
  );
}

function AutomationCard({ progress }: { progress: MotionValue<number> }) {
  return (
    <FloatCard
      progress={progress}
      stage={3}
      className="right-0 bottom-6 w-52 p-4 xl:-right-8 xl:w-56"
    >
      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-violetx/15 text-violetx">
          <Icon name="cpu" className="h-4 w-4" />
        </span>
        <p className="text-xs font-semibold text-white">Automation active</p>
      </div>
      <ul className="mt-3 space-y-2">
        {automationChecklist.map((item) => (
          <li key={item} className="flex items-center gap-2 text-xs text-slate-300">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emeraldx/15 text-emeraldx">
              <Icon name="check" className="h-2.5 w-2.5" strokeWidth={2.5} />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </FloatCard>
  );
}

/* ------------------------------------------------------------------ */
/*  Stage indicator dots (rendered in the hero's left column)          */
/* ------------------------------------------------------------------ */

function StageDot({
  progress,
  index,
  onSelect,
}: {
  progress: MotionValue<number>;
  index: number;
  onSelect?: (index: number) => void;
}) {
  const stage = portraitStages[index];
  const frames = stageFrames(index);
  const opacity = useTransform(progress, frames, stageOutputs(index, 0.35, 1, 0.35));
  const barScale = useTransform(progress, frames, stageOutputs(index, 0, 1, 0));

  return (
    <motion.button
      type="button"
      onClick={() => onSelect?.(index)}
      style={{ opacity }}
      className="group flex flex-col items-start gap-1.5 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-400"
      aria-label={`Jump to ${stage.role}`}
    >
      <span className="relative h-0.5 w-12 overflow-hidden rounded-full bg-white/15">
        <motion.span
          className="absolute inset-0 origin-left rounded-full bg-accent-400"
          style={{ scaleX: barScale }}
        />
      </span>
      <span className="text-[10px] font-medium tracking-wider text-slate-400 uppercase transition-colors group-hover:text-slate-200">
        {stage.role}
      </span>
    </motion.button>
  );
}

export function StageDots({
  progress,
  onSelect,
}: {
  progress: MotionValue<number>;
  onSelect?: (index: number) => void;
}) {
  return (
    <div className="flex flex-wrap items-start gap-x-6 gap-y-3">
      {portraitStages.map((stage, index) => (
        <StageDot
          key={stage.id}
          progress={progress}
          index={index}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main composition                                                   */
/* ------------------------------------------------------------------ */

export function ScrollPortrait({ progress }: { progress: MotionValue<number> }) {
  const reduceMotion = useReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const simple = Boolean(reduceMotion) || !isDesktop;

  return (
    <div className="relative mx-auto w-full max-w-[min(24rem,54svh)] lg:max-w-[min(540px,56svh)]">
      <div className="relative aspect-[4/5] w-full">
        {/* Backing frame */}
        <div className="ring-fade absolute inset-x-0 top-8 bottom-0 overflow-hidden rounded-[2rem] bg-ink-900/60 sm:top-12">
          <div className="grid-pattern absolute inset-0 [mask-image:radial-gradient(120%_100%_at_50%_0%,black,transparent_75%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_50%_18%,rgba(47,125,255,0.18),transparent_65%)]" />
          <div className="absolute -inset-x-8 bottom-0 h-28 bg-gradient-to-t from-ink-950 to-transparent" />
        </div>

        {/* Glow behind the subject */}
        <div
          aria-hidden="true"
          className="absolute top-1/4 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent-500/25 blur-[110px]"
        />

        {/* Portrait stages — all mounted up-front so every image preloads */}
        {portraitStages.map((stage, index) => (
          <StageLayer
            key={stage.id}
            progress={progress}
            index={index}
            simple={simple}
          />
        ))}

        {/* Fade the portrait bases (desk edges, torso cuts) into the frame */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 z-10 h-24 rounded-b-[2rem] bg-gradient-to-t from-ink-950/90 via-ink-950/35 to-transparent"
        />

        {/* Stage meta chip */}
        {portraitStages.map((stage, index) => (
          <StageChip
            key={stage.id}
            progress={progress}
            index={index}
            simple={simple}
          />
        ))}

        {/* Floating interface cards — desktop only */}
        <div className="hidden lg:contents">
          <ChartCard progress={progress} />
          <CodeCard progress={progress} />
          <StackCard progress={progress} />
          <AdsCard progress={progress} />
          <AutomationCard progress={progress} />
        </div>
      </div>
    </div>
  );
}
