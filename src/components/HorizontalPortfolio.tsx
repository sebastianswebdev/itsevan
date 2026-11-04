"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import portrait from "../../public/images/me-crossedarms-cut.png";
import { clientTestimonials } from "@/data/client-testimonial";
import { education } from "@/data/education";
import { projectGroups } from "@/data/projects";
import { site, socialLinks } from "@/data/site";
import styles from "./HorizontalPortfolio.module.css";
import { PointerLight } from "./PointerLight";

const slides = [
  { id: "intro", label: "Hello" },
  { id: "services", label: "I can" },
  { id: "work", label: "Work" },
  { id: "testimonials", label: "Kind words" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

const skills = [
  {
    number: "01",
    title: "Web development",
    verb: "Build it.",
    description: "I can turn your idea into a website that works on every screen.",
    symbol: "</>",
  },
  {
    number: "02",
    title: "Performance marketing",
    verb: "Run the ads.",
    description: "I can set up, run, and improve your paid ad campaigns.",
    symbol: "↗",
  },
  {
    number: "03",
    title: "AI automation",
    verb: "Connect it.",
    description: "I can use AI to automate repetitive work and connect your tools.",
    symbol: "✳",
  },
] as const;

const allProjects = projectGroups.flatMap((group) =>
  group.projects.map((project) => ({ ...project, context: group.badge, region: group.region, scope: group.description, company: group.company })),
);
const projectBackdrops = allProjects.filter((project) => project.image).slice(0, 6);
const projectRegions = ["Australia", "Philippines"] as const;

function Arrow({ back = false }: { back?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={back ? "M20 12H4m7-7-7 7 7 7" : "M4 12h16m-7-7 7 7-7 7"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HorizontalPortfolio() {
  const surfaceRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLElement>(null);
  const panelRefs = useRef<(HTMLElement | null)[]>([]);
  const activeRef = useRef(0);
  const wheelLock = useRef(0);
  const testimonialVideoRef = useRef<HTMLVideoElement>(null);
  const testimonialScrollerRef = useRef<HTMLDivElement>(null);
  const testimonialStoryRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const clientTestimonial = clientTestimonials[testimonialIndex];
  const [projectId, setProjectId] = useState(allProjects[0].id);
  const project = allProjects.find((item) => item.id === projectId)!;
  const visibleProjects = allProjects.filter((item) => item.region === project.region);
  const visibleGroups = projectGroups.filter((group) => group.region === project.region);
  const projectIndex = visibleProjects.findIndex((item) => item.id === projectId);

  const goTo = useCallback((index: number, focus = false, instant = false) => {
    const rail = railRef.current;
    const panel = panelRefs.current[index];
    if (!rail || !panel) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    rail.scrollTo({ left: panel.offsetLeft, behavior: reduced || instant ? "instant" : "smooth" });
    if (focus) panel.focus({ preventScroll: true });
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    // Keep native swiping, focus scrolling, and navigation in sync.
    const onScroll = () => {
      const index = Math.max(0, Math.min(slides.length - 1, Math.round(rail.scrollLeft / rail.clientWidth)));
      if (index === activeRef.current) return;
      activeRef.current = index;
      setActive(index);
      window.history.replaceState(window.history.state, "", `#${slides[index].id}`);
    };
    const onHash = () => {
      const hash = window.location.hash.slice(1);
      const aliases: Record<string, string> = { about: "intro", "how-i-work": "services" };
      const index = slides.findIndex((slide) => slide.id === (aliases[hash] ?? hash));
      if (index >= 0) {
        goTo(index, false, true);
        // Native fragment scrolling may have already positioned the rail.
        // Sync the menu/counter even when scrollTo produces no new event.
        onScroll();
      }
    };
    const onResize = () => rail.scrollTo({ left: activeRef.current * rail.clientWidth, behavior: "instant" });
    const onWheel = (event: WheelEvent) => {
      // Preserve browser zoom and native horizontal trackpad gestures.
      if (event.ctrlKey || Math.abs(event.deltaX) > Math.abs(event.deltaY) || Math.abs(event.deltaY) < 4) return;
      const target = event.target as HTMLElement;
      if (target.closest("select, video")) return;
      const scroller = target.closest<HTMLElement>("[data-panel-scroll]");
      // At small viewports / enlarged text, let readers scroll the slide first.
      if (scroller && scroller.scrollHeight > scroller.clientHeight + 1) {
        const canScroll = event.deltaY > 0
          ? scroller.scrollTop + scroller.clientHeight < scroller.scrollHeight - 2
          : scroller.scrollTop > 2;
        if (canScroll) return;
      }
      event.preventDefault();
      const now = performance.now();
      if (now - wheelLock.current < 800) return;
      const next = Math.max(0, Math.min(slides.length - 1, activeRef.current + Math.sign(event.deltaY)));
      if (next !== activeRef.current) {
        wheelLock.current = now;
        goTo(next);
      }
    };
    rail.addEventListener("scroll", onScroll, { passive: true });
    rail.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("hashchange", onHash);
    window.addEventListener("resize", onResize);
    onHash();
    return () => {
      rail.removeEventListener("scroll", onScroll);
      rail.removeEventListener("wheel", onWheel);
      window.removeEventListener("hashchange", onHash);
      window.removeEventListener("resize", onResize);
    };
  }, [goTo]);

  useEffect(() => {
    if (slides[active].id !== "testimonials") testimonialVideoRef.current?.pause();
  }, [active]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 901px)");
    const closeOnDesktop = () => { if (desktop.matches) setMenuOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  function showTestimonial(index: number) {
    if (index < 0 || index >= clientTestimonials.length) return;
    testimonialVideoRef.current?.pause();
    setTestimonialIndex(index);
    const story = testimonialStoryRef.current;
    if (story && window.matchMedia("(max-width: 900px)").matches) {
      testimonialScrollerRef.current?.scrollTo({
        top: Math.max(0, story.offsetTop - 112),
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
      });
    }
  }

  function changeProject(direction: number) {
    const next = (projectIndex + direction + visibleProjects.length) % visibleProjects.length;
    setProjectId(visibleProjects[next].id);
  }

  return (
    <div ref={surfaceRef} className={styles.portfolio} onClick={(event) => {
      if (menuOpen && !(event.target as HTMLElement).closest("header")) setMenuOpen(false);
    }} onKeyDown={(event) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if ((event.target as HTMLElement).closest("[data-section-menu], [data-client-controls]")) return;
      if ((event.target as HTMLElement).closest("select, input, textarea, video, summary, [contenteditable]")) return;
      if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === "Home" ? 0 : event.key === "End" ? slides.length - 1
        : Math.max(0, Math.min(slides.length - 1, activeRef.current + (event.key === "ArrowRight" ? 1 : -1)));
      goTo(next, true);
    }}>
      <a className={styles.skipLink} href="#intro" onClick={(event) => { event.preventDefault(); goTo(0, true); }}>Skip to content</a>
      <header className={styles.header}>
        <a className={styles.wordmark} href="#intro" aria-label="Sebastian Works — home" onClick={(event) => { event.preventDefault(); goTo(0); }}>
          sebastian<span>works</span>
        </a>
        <button ref={menuButtonRef} type="button" className={styles.menuToggle} aria-expanded={menuOpen}
          aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "Close" : "Menu"}<span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
        </button>
        <nav id="main-navigation" className={styles.nav} aria-label="Main navigation" data-open={menuOpen} data-section-menu>
          {slides.map((slide, index) => (
            <a key={slide.id} href={`#${slide.id}`} aria-current={active === index ? "page" : undefined}
              onClick={(event) => { event.preventDefault(); setMenuOpen(false); goTo(index, true); }}>{slide.label}</a>
          ))}
        </nav>
        <a className={styles.headerContact} href={site.contactHref}>Let&apos;s talk <span aria-hidden="true">↗</span></a>
      </header>
      <main ref={railRef} className={styles.rail} aria-label={`Evan's portfolio — ${slides.length} horizontal slides`} tabIndex={-1}>
        <section id="intro" ref={(element) => { panelRefs.current[0] = element; }} className={`${styles.panel} ${styles.intro}`} tabIndex={-1} aria-labelledby="intro-title">
          <div className={styles.backdrop} aria-hidden="true">
            <div className={styles.backdropGrid}>
              {projectBackdrops.map((item) => <div key={item.id}><Image src={item.image!} alt="" sizes="35vw" /></div>)}
            </div>
          </div>
          <div className={styles.portrait}><Image src={portrait} alt="Evan Sebastian Martinez" preload sizes="(max-width: 700px) 85vw, 48vw" /></div>
          <div className={styles.introContent} data-panel-scroll tabIndex={0} aria-label="Introduction content">
            <div className={styles.introCopy}>
              <p className={styles.eyebrow}><span className={styles.statusDot} /> Hey, I&apos;m Evan Sebastian Martinez</p>
              <h1 id="intro-title">Web development<span>Performance<br className={styles.desktopBreak} /> marketing<span className={styles.adsNote}>(paid ads)</span></span><span>AI automation<span className={styles.star} aria-hidden="true">✳</span></span></h1>
              <div className={styles.introBottom}>
                <p>I build websites.<br />I run ads. I automate the repetitive stuff.</p>
                <button className={`${styles.roundButton} ${styles.exploreButton}`} onClick={() => goTo(1, true)} aria-label="Explore the next page: I can"><span>Explore right</span><Arrow /></button>
              </div>
            </div>
            <span className={styles.portraitLabel}>EVAN / THE PERSON BEHIND THE WORK</span>
          </div>
        </section>
        <section id="services" ref={(element) => { panelRefs.current[1] = element; }} className={`${styles.panel} ${styles.services}`} tabIndex={-1} aria-labelledby="services-title">
          <div className={styles.panelContent} data-panel-scroll tabIndex={0} aria-label="Services content">
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>01 — What I can do</p>
              <h2 id="services-title">Your idea.<br /><span>My hands on it.</span></h2>
              <p>Three skills. Practical ways to help.</p>
            </div>
            <div className={styles.skillList}>
              {skills.map((skill) => (
                <article key={skill.number} className={styles.skill}>
                  <span className={styles.skillNumber}>{skill.number}</span>
                  <div><p className={styles.skillTitle}>{skill.title}</p><h3>{skill.verb}</h3><p className={styles.skillDescription}>{skill.description}</p></div>
                  <span className={styles.skillSymbol} aria-hidden="true">{skill.symbol}</span>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="work" ref={(element) => { panelRefs.current[2] = element; }} className={`${styles.panel} ${styles.work}`} tabIndex={-1} aria-labelledby="work-title">
          <div className={`${styles.panelContent} ${styles.workContent}`} data-panel-scroll tabIndex={0} aria-label="Projects content">
            <div className={styles.workHeading}>
              <div><p className={styles.eyebrow}>02 — Selected work</p><h2 id="work-title">Made to <span>be used.</span></h2></div>
              <div className={styles.projectPicker}>
                <div className={styles.regionSwitch} role="group" aria-label="Project country">
                  {projectRegions.map((region) => (
                    <button key={region} type="button" aria-pressed={project.region === region}
                      onClick={() => setProjectId(allProjects.find((item) => item.region === region)!.id)}>
                      {region} <span>{allProjects.filter((item) => item.region === region).length}</span>
                    </button>
                  ))}
                </div>
                <label htmlFor="project-picker">Explore the projects</label>
                <select id="project-picker" value={projectId} onChange={(event) => setProjectId(event.target.value)}>
                  {visibleGroups.map((group) => <optgroup key={group.id} label={group.company?.name ?? group.badge}>{group.projects.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}</optgroup>)}
                </select>
              </div>
            </div>
            <div className={styles.projectStage}>
              <a className={styles.projectImage} href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name} website (opens in a new tab)`}>
                {project.image ? <Image key={project.id} src={project.image} alt={project.imageAlt} sizes="(max-width: 700px) 90vw, 62vw" />
                  : <div className={styles.projectFallback}><span>{project.monogram}</span><p>{project.name}</p></div>}
                <span className={styles.imageLink} aria-hidden="true">Visit website ↗</span>
              </a>
              <div className={styles.projectInfo}>
                <p className={styles.projectContext}>{project.region} / {project.context}</p><h3>{project.name}</h3><p className={styles.projectRole}>{project.role}</p>
                <p className={styles.projectScope}>{project.scope}</p>
                {project.company && <a className={styles.companyCredit} href={project.company.href} target="_blank" rel="noopener noreferrer">Built at {project.company.name} <span aria-hidden="true">↗</span></a>}
                <a className={styles.textLink} href={project.href} target="_blank" rel="noopener noreferrer">View website <span aria-hidden="true">↗</span></a>
                <div className={styles.projectControls}>
                  <span aria-live="polite">{String(projectIndex + 1).padStart(2, "0")} <span>/ {String(visibleProjects.length).padStart(2, "0")}</span></span>
                  <div><button onClick={() => changeProject(-1)} aria-label="Previous project"><Arrow back /></button><button onClick={() => changeProject(1)} aria-label="Next project"><Arrow /></button></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" ref={(element) => { panelRefs.current[3] = element; }} className={`${styles.panel} ${styles.testimonial}`} tabIndex={-1} aria-labelledby="testimonial-title">
          <div ref={testimonialScrollerRef} className={`${styles.panelContent} ${styles.testimonialContent}`} data-panel-scroll tabIndex={0} aria-label="Client testimonial content">
            <div className={styles.testimonialHeading}>
              <p className={styles.eyebrow}>03 — Client stories</p>
              <h2 id="testimonial-title">In their <span>own words.</span></h2>
              <p>Watch a video below. Choose a client to hear another perspective.</p>
            </div>
            <div className={styles.clientChoiceLabel}><h3>Choose a client</h3><span>{clientTestimonials.length} video testimonials</span></div>
              <div className={styles.testimonialPicker} role="group" aria-label="Choose a client testimonial" data-client-controls>
                {clientTestimonials.map((item, index) => (
                  <button key={item.id} type="button" aria-pressed={index === testimonialIndex} aria-controls="client-story"
                    onClick={() => showTestimonial(index)}>
                    <Image src={item.poster} width={52} height={52} alt="" sizes="52px" />
                    <span><strong>{item.name}</strong><span>{item.work}</span></span>
                    <span className={styles.clientChoiceAction}>{index === testimonialIndex ? "Selected" : "Watch video"}<span aria-hidden="true">{index === testimonialIndex ? "✓" : "→"}</span></span>
                  </button>
                ))}
              </div>
            <div id="client-story" ref={testimonialStoryRef} className={styles.testimonialStory}>
              <div className={styles.clientNavigation} role="group" aria-label="Browse client stories" data-client-controls>
                <button type="button" disabled={testimonialIndex === 0} onClick={() => showTestimonial(testimonialIndex - 1)} aria-label="Previous client"><Arrow back /><span>Previous client</span></button>
                <p role="status">Client {testimonialIndex + 1} of {clientTestimonials.length}<span>{clientTestimonial.name}</span></p>
                <button type="button" onClick={() => showTestimonial((testimonialIndex + 1) % clientTestimonials.length)} aria-label={testimonialIndex < clientTestimonials.length - 1 ? `Next client: ${clientTestimonials[testimonialIndex + 1].name}` : "Back to first client: Danny"}>
                  <span>{testimonialIndex < clientTestimonials.length - 1 ? "Next client" : "Back to first client"}<strong>{clientTestimonials[(testimonialIndex + 1) % clientTestimonials.length].name}</strong></span><Arrow />
                </button>
              </div>
            <div className={styles.testimonialCopy}>
              <figure className={styles.testimonialQuote}>
                <blockquote><p>“{clientTestimonial.quote}”</p></blockquote>
                <figcaption>
                  <span className={styles.clientName}>{clientTestimonial.name}</span>
                  <span className={styles.clientCompanies}>{clientTestimonial.companies}</span>
                  <span className={styles.clientRelationship}>{clientTestimonial.relationship}</span>
                </figcaption>
              </figure>
              <p className={styles.testimonialWork}>{clientTestimonial.work}</p>
              <details key={clientTestimonial.id} className={styles.transcript}>
                <summary>Read the video transcript</summary>
                <div>{clientTestimonial.transcript.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
              </details>
            </div>
            <figure className={`${styles.testimonialFilm} ${clientTestimonial.width > clientTestimonial.height ? styles.landscapeFilm : ""}`}>
              <div className={styles.videoFrame}>
                <video key={clientTestimonial.id} ref={testimonialVideoRef} controls playsInline preload="none" poster={clientTestimonial.poster}
                  width={clientTestimonial.width} height={clientTestimonial.height}
                  aria-label={`${clientTestimonial.name}'s video testimonial for Evan Martinez`}>
                  <source src={clientTestimonial.video} type="video/mp4" />
                  <track src={clientTestimonial.captions} kind="captions" srcLang="en" label="English" default />
                  Your browser cannot play this video. <a href={clientTestimonial.video}>Watch {clientTestimonial.name}&apos;s testimonial.</a>
                </video>
              </div>
              <figcaption><span>Press play to watch</span><span>{clientTestimonial.duration} · Sound on</span></figcaption>
            </figure>
            </div>
          </div>
        </section>
        <section id="education" ref={(element) => { panelRefs.current[4] = element; }} className={`${styles.panel} ${styles.education}`} tabIndex={-1} aria-labelledby="education-title">
          <div className={`${styles.panelContent} ${styles.educationContent}`} data-panel-scroll tabIndex={0} aria-label="Education and awards content">
            <div className={styles.educationHeading}>
              <p className={styles.eyebrow}>04 — Education & recognition</p>
              <h2 id="education-title">Where it <span>started.</span></h2>
            </div>
            <div className={styles.educationGrid}>
              <figure className={styles.graduationPortrait}>
                <Image src={education.graduationPhoto} width={959} height={960}
                  alt="Evan Sebastian Martinez in STI graduation attire" sizes="(max-width: 700px) 80vw, 320px" />
                <figcaption>{education.school} · Class of 2024</figcaption>
              </figure>
              <div className={styles.educationDetails}>
                <p className={styles.educationSchool}>{education.school}</p>
                <h3>{education.degree}</h3>
                <p className={styles.educationDates}>{education.dates} · {education.location}</p>
                <ul className={styles.educationHonors} aria-label="Graduation honors">
                  {education.honors.map((honor) => <li key={honor}>{honor}</li>)}
                </ul>
                <div className={styles.codefestAward}>
                  <p className={styles.eyebrow}>{education.award.event}</p>
                  <h4>{education.award.title}</h4>
                  <p>{education.award.context}</p>
                  <a className={styles.textLink} href={education.award.photo} target="_blank" rel="noopener noreferrer">View award photo <span aria-hidden="true">↗</span></a>
                </div>
                <a className={styles.educationLinkedIn} href={socialLinks[0].href} target="_blank" rel="noopener noreferrer">More on LinkedIn <span aria-hidden="true">↗</span></a>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" ref={(element) => { panelRefs.current[5] = element; }} className={`${styles.panel} ${styles.contact}`} tabIndex={-1} aria-labelledby="contact-title">
          <div className={`${styles.panelContent} ${styles.contactContent}`} data-panel-scroll tabIndex={0} aria-label="Contact content">
            <p className={styles.eyebrow}>05 — Let&apos;s make something</p>
            <h2 id="contact-title">Have an idea?<br /><span>Let&apos;s get it</span><br />moving.<span className={styles.contactStar} aria-hidden="true">✳</span></h2>
            <div className={styles.contactBottom}>
              <a className={styles.emailLink} href={site.contactHref}>{site.email} <span aria-hidden="true">↗</span></a>
              <a className={styles.textLink} href={socialLinks[0].href} target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
              <p>Web development / Paid ads / AI automation</p>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <span className={styles.footerBrand}>Evan Sebastian Martinez<span>Independent / Sebastian Works</span></span>
        <div className={styles.navigationGuide}>
          <p className={styles.directionHint}><Arrow back /><span className={styles.mouseDirection}>Scroll to explore sideways</span><span className={styles.touchDirection}>Swipe left or right</span><Arrow /></p>
        <div className={styles.progress} aria-label="Slide navigation">
          {slides.map((slide, index) => <button key={slide.id} aria-label={`Go to ${slide.label} slide`} aria-current={active === index ? "step" : undefined} onClick={() => goTo(index, true)}><span /></button>)}
        </div>
        </div>
        <div className={styles.slideControls}>
          <button aria-label={active > 0 ? `Previous section: ${slides[active - 1].label}` : "Previous section"} disabled={active === 0} onClick={() => goTo(active - 1, true)}><Arrow back /><span>Back{active > 0 ? `: ${slides[active - 1].label}` : ""}</span></button>
          <span className={styles.slideCount} aria-live="polite">{String(active + 1).padStart(2, "0")} <span>/ {String(slides.length).padStart(2, "0")}</span></span>
          <button aria-label={active < slides.length - 1 ? `Next section: ${slides[active + 1].label}` : "Last section"} disabled={active === slides.length - 1} onClick={() => goTo(active + 1, true)}><span>{active < slides.length - 1 ? `Next: ${slides[active + 1].label}` : "Last section"}</span><Arrow /></button>
        </div>
      </footer>
      <PointerLight surfaceRef={surfaceRef} />
    </div>
  );
}
