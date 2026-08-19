import Image from "next/image";

import aboutPortrait from "../../public/images/me-crossedarms-cut.png";
import { CoreFocus } from "@/components/CoreFocus";
import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";

const principles = [
  {
    title: "Results-Driven Approach",
    description: "Everything is focused on measurable business outcomes.",
  },
  {
    title: "Full-Funnel Expertise",
    description:
      "From website to traffic, tracking, conversion, and optimization.",
  },
  {
    title: "Automation-First Mindset",
    description:
      "Use technology to save time, reduce manual work, and scale operations.",
  },
];

export function About() {
  return (
    <section id="about" aria-label="About" className="relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
          {/* Copy */}
          <Reveal>
            <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-accent-400 uppercase">
              About me
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              I&apos;m Evan, Founder of{" "}
              <span className="bg-gradient-to-r from-accent-400 to-cyanx bg-clip-text text-transparent">
                Sebastian Works
              </span>
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-slate-400">
              I combine web development, digital advertising, analytics and AI
              automation to help businesses attract customers, improve their
              digital experiences, automate repetitive processes and build
              systems that scale. Everything I do is focused on one thing —
              delivering measurable results.
            </p>

            <ul className="mt-9 space-y-6">
              {principles.map((principle) => (
                <li key={principle.title} className="flex gap-4">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent-500/30 bg-accent-500/10 text-accent-400">
                    <Icon name="check" className="h-4 w-4" strokeWidth={2.2} />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {principle.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">
                      {principle.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <p className="font-script text-4xl text-accent-300/90">
                Sebastian Works
              </p>
              <p className="mt-1 text-xs tracking-[0.2em] text-slate-500 uppercase">
                {site.founder} · Founder
              </p>
            </div>
          </Reveal>

          {/* Portrait + floating core-focus panel */}
          <Reveal delay={0.12}>
            <div className="relative mx-auto w-full max-w-md lg:mr-0">
              <div className="ring-fade relative overflow-hidden rounded-[2rem] bg-ink-900/70">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[radial-gradient(85%_65%_at_50%_20%,rgba(47,125,255,0.22),transparent_65%)]"
                />
                <div className="grid-pattern absolute inset-0 opacity-70 [mask-image:radial-gradient(100%_90%_at_50%_0%,black,transparent_80%)]" />
                <Image
                  src={aboutPortrait}
                  alt="Evan Martinez, founder of Sebastian Works, standing with arms crossed"
                  sizes="(min-width: 1024px) 440px, 88vw"
                  quality={82}
                  placeholder="blur"
                  className="relative w-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink-950/85 to-transparent"
                />
              </div>

              <CoreFocus className="mt-6 lg:absolute lg:right-4 lg:bottom-10 lg:mt-0 lg:w-64 xl:-right-6 2xl:-right-16" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
