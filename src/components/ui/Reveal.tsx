"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Vertical travel distance in px (ignored when reduced motion is on). */
  y?: number;
};

/** Fades content in as it enters the viewport. Respects prefers-reduced-motion. */
export function Reveal({ children, className, delay = 0, y = 26 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.65, 0.28, 0.99] }}
    >
      {children}
    </motion.div>
  );
}
