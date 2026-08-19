import Link from "next/link";

import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const coverStyles = {
  blue: "from-accent-600/35 via-ink-800 to-ink-900 text-accent-300",
  emerald: "from-emeraldx/25 via-ink-800 to-ink-900 text-emeraldx",
  violet: "from-violetx/28 via-ink-800 to-ink-900 text-violetx",
} as const;

export function SelectedWork() {
  return (
    <section id="work" aria-label="Selected work" className="relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Selected work"
              title={
                <>
                  Projects that solve{" "}
                  <span className="text-accent-400">real business problems</span>
                </>
              }
              description="A snapshot of recent client work across development, marketing and digital experience."
            />
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 text-sm font-medium text-accent-400 transition-colors hover:text-accent-300"
            >
              Start a project
              <Icon
                name="arrowRight"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.08} className="h-full">
              <article className="glass card-hover group flex h-full flex-col overflow-hidden rounded-3xl">
                {/* Branded cover panel — swap for a real screenshot by adding
                    an `image` field to the project entry when available. */}
                <div
                  className={cn(
                    "relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br",
                    coverStyles[project.accent],
                  )}
                >
                  <div className="grid-pattern absolute inset-0 opacity-60" />
                  <div
                    aria-hidden="true"
                    className="absolute -top-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-white/10 blur-[70px]"
                  />
                  <span className="relative font-mono text-5xl font-bold tracking-tight opacity-90 transition-transform duration-500 group-hover:scale-110">
                    {project.monogram}
                  </span>
                  <span className="absolute top-4 left-4 rounded-full border border-white/10 bg-ink-950/60 px-3 py-1 text-[11px] font-medium text-slate-300 backdrop-blur">
                    {project.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-white">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {project.summary}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {project.capabilities.map((capability) => (
                      <li
                        key={capability}
                        className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2 py-1 text-[11px] text-slate-400"
                      >
                        {capability}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={project.href}
                    className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium text-accent-400 transition-colors group-hover:text-accent-300"
                    aria-label={`View case study: ${project.name}`}
                  >
                    View Case Study
                    <Icon
                      name="arrowRight"
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
