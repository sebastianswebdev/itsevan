"use client";

import { useEffect, useRef, type RefObject } from "react";
import styles from "./HorizontalPortfolio.module.css";

export function PointerLight({ surfaceRef }: { surfaceRef: RefObject<HTMLDivElement | null> }) {
  const lightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const surface = surfaceRef.current;
    const light = lightRef.current;
    if (!surface || !light) return;
    const enabled = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    let frame = 0;
    let x = 0;
    let y = 0;
    let interactive = false;

    const hide = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      light.dataset.visible = "false";
    };
    const move = (event: PointerEvent) => {
      if (!enabled.matches || event.pointerType !== "mouse") { hide(); return; }
      x = event.clientX;
      y = event.clientY;
      interactive = Boolean((event.target as Element).closest("a, button, select, summary, video"));
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const bounds = surface.getBoundingClientRect();
        light.style.transform = `translate3d(${x - bounds.left}px, ${y - bounds.top}px, 0)`;
        light.dataset.interactive = String(interactive);
        light.dataset.visible = "true";
        frame = 0;
      });
    };
    surface.addEventListener("pointermove", move, { passive: true });
    surface.addEventListener("pointerleave", hide);
    window.addEventListener("blur", hide);
    document.addEventListener("visibilitychange", hide);
    enabled.addEventListener("change", hide);
    return () => {
      hide();
      surface.removeEventListener("pointermove", move);
      surface.removeEventListener("pointerleave", hide);
      window.removeEventListener("blur", hide);
      document.removeEventListener("visibilitychange", hide);
      enabled.removeEventListener("change", hide);
    };
  }, [surfaceRef]);

  return <div ref={lightRef} className={styles.pointerLight} data-pointer-light data-visible="false" aria-hidden="true"><span /></div>;
}
