"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/data/projects";
import styles from "./HorizontalPortfolio.module.css";

type CarouselProject = Project & { context: string };

export function ProjectCarousel({ region, projects, active, reverse = false }: {
  region: string;
  projects: CarouselProject[];
  active: boolean;
  reverse?: boolean;
}) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const setRef = useRef<HTMLDivElement>(null);
  const loopWidth = useRef(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    const viewport = viewportRef.current;
    const set = setRef.current;
    if (!viewport || !set) return;
    const resize = () => {
      const previous = loopWidth.current;
      const offset = previous ? ((viewport.scrollLeft % previous) + previous) % previous : 0;
      loopWidth.current = set.getBoundingClientRect().width;
      viewport.scrollLeft = loopWidth.current + (previous ? offset / previous * loopWidth.current : 0);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(set);
    resize();
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || !active || paused || hovered || focused) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let last = 0;
    let position = viewport.scrollLeft;
    const tick = (time: number) => {
      if (last) position += Math.min(time - last, 64) * .032 * (reverse ? -1 : 1);
      last = time;
      const width = loopWidth.current;
      if (width) {
        if (position < width * .5) position += width;
        if (position > width * 2.5) position -= width;
        viewport.scrollLeft = position;
      }
      frame = requestAnimationFrame(tick);
    };
    const update = () => {
      cancelAnimationFrame(frame);
      last = 0;
      position = viewport.scrollLeft;
      if (!reduced.matches && !document.hidden) frame = requestAnimationFrame(tick);
    };
    reduced.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    update();
    return () => {
      cancelAnimationFrame(frame);
      reduced.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
    };
  }, [active, paused, hovered, focused, reverse]);

  function step(direction: number) {
    const viewport = viewportRef.current;
    const card = setRef.current?.firstElementChild;
    if (!viewport || !card) return;
    setPaused(true);
    const gap = parseFloat(getComputedStyle(setRef.current!).columnGap) || 0;
    viewport.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }

  return (
    <section className={styles.projectCarousel} aria-label={`${region} projects`} aria-roledescription="carousel"
      data-project-carousel onPointerEnter={(event) => { if (event.pointerType === "mouse") setHovered(true); }}
      onPointerLeave={() => setHovered(false)} onFocus={() => setFocused(true)}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}
      onKeyDown={(event) => {
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
        event.preventDefault();
        event.stopPropagation();
        step(event.key === "ArrowRight" ? 1 : -1);
      }}>
      <div className={styles.carouselHeading}>
        <h3>{region}<span>{projects.length} websites</span></h3>
        <div className={styles.carouselControls}>
          <button type="button" className={styles.carouselPause} onClick={() => setPaused(!paused)}
            aria-label={`${paused ? "Play" : "Pause"} ${region} carousel`}>
            <span aria-hidden="true">{paused ? "▷" : "Ⅱ"}</span>{paused ? "Play" : "Pause"}
          </button>
          <button type="button" onClick={() => step(-1)} aria-label={`Previous ${region} project`}>←</button>
          <button type="button" onClick={() => step(1)} aria-label={`Next ${region} project`}>→</button>
        </div>
      </div>
      <div ref={viewportRef} className={styles.carouselViewport} tabIndex={0} aria-label={`Browse ${region} website previews`}
        onPointerDown={(event) => { if (event.pointerType !== "mouse") setPaused(true); }}
        onScroll={() => {
          const viewport = viewportRef.current;
          const width = loopWidth.current;
          if (!viewport || !width) return;
          if (viewport.scrollLeft < width * .5) viewport.scrollLeft += width;
          else if (viewport.scrollLeft > width * 2.5) viewport.scrollLeft -= width;
        }}>
        {[0, 1, 2].map((copy) => (
          <div key={copy} ref={copy === 0 ? setRef : undefined} className={styles.carouselSet} aria-hidden={copy !== 1 ? true : undefined}>
            {projects.map((project) => (
              <a key={project.id} className={styles.carouselCard} href={project.href} target="_blank" rel="noopener noreferrer"
                tabIndex={copy === 1 ? 0 : -1} aria-label={`Visit ${project.name} website (opens in a new tab)`}>
                <div className={styles.carouselImage}>
                  {project.image ? <Image src={project.image} alt={project.imageAlt} sizes="(max-width: 700px) 230px, 360px" />
                    : <div className={styles.carouselFallback}><strong>{project.monogram}</strong><span>Website preview unavailable</span></div>}
                  <span className={styles.carouselOpen} aria-hidden="true">↗</span>
                </div>
                <div className={styles.carouselCaption}><h4>{project.name}</h4><p>{project.role}</p></div>
              </a>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
