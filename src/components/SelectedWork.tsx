import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projectGroups, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const coverStyles = {
  blue: "from-accent-500/20 via-surface-100 to-surface-200 text-accent-600",
  emerald: "from-emeraldx/18 via-surface-100 to-surface-200 text-emeraldx",
  violet: "from-violetx/18 via-surface-100 to-surface-200 text-violetx",
} as const;

/** Per-group accents keep the two categories readable at a glance. */
const groupTones = {
  accent: {
    badge: "border-accent-500/25 bg-accent-500/10 text-accent-700",
    rule: "from-accent-500/50",
  },
  violet: {
    badge: "border-violetx/25 bg-violetx/10 text-violetx",
    rule: "from-violetx/50",
  },
} as const;

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass card-hover group flex h-full flex-col overflow-hidden rounded-3xl">
      <div className="relative aspect-[16/10] overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt}
            placeholder="blur"
            sizes="(min-width: 1280px) 30vw, (min-width: 768px) 46vw, 92vw"
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          /* Fallback cover for projects without a captured screenshot. */
          <div
            className={cn(
              "flex h-full items-center justify-center bg-gradient-to-br",
              coverStyles[project.accent],
            )}
          >
            <div className="grid-pattern absolute inset-0 opacity-60" />
            <div
              aria-hidden="true"
              className="absolute -top-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-white/70 blur-[70px]"
            />
            <span className="relative font-mono text-5xl font-bold tracking-tight opacity-90 transition-transform duration-500 group-hover:scale-110">
              {project.monogram}
            </span>
          </div>
        )}
        <span className="absolute top-4 left-4 rounded-full border border-line bg-white/85 px-3 py-1 text-[11px] font-medium text-ink-700 backdrop-blur">
          {project.role}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h4 className="text-lg font-semibold text-ink-900">{project.name}</h4>
        <p className="mt-2 text-sm leading-relaxed text-ink-500">
          {project.summary}
        </p>
        {project.capabilities && (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {project.capabilities.map((capability) => (
              <li
                key={capability}
                className="rounded-md border border-line bg-surface-100 px-2 py-1 text-[11px] text-ink-600"
              >
                {capability}
              </li>
            ))}
          </ul>
        )}
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium text-accent-600 transition-colors group-hover:text-accent-700"
          aria-label={`View the ${project.name} website (opens in a new tab)`}
        >
          View Website
          <Icon
            name="arrowRight"
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>
      </div>
    </article>
  );
}

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
                  <span className="text-accent-600">real business problems</span>
                </>
              }
              description="A snapshot of recent client work across development, marketing and digital experience."
            />
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 text-sm font-medium text-accent-600 transition-colors hover:text-accent-700"
            >
              Start a project
              <Icon
                name="arrowRight"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>

        {projectGroups.map((group, groupIndex) => {
          const tone = groupTones[group.tone];

          return (
            <div
              key={group.id}
              className={cn(
                groupIndex === 0
                  ? "mt-16"
                  : "mt-20 border-t border-line pt-16 sm:mt-24",
              )}
            >
              <Reveal>
                <div className="max-w-3xl">
                  <span
                    className={cn(
                      "inline-flex w-fit items-center rounded-full border px-3 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase",
                      tone.badge,
                    )}
                  >
                    {group.badge}
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-ink-900 sm:text-[1.75rem]">
                    {group.title}
                  </h3>
                  <div
                    aria-hidden="true"
                    className={cn(
                      "mt-4 h-px w-24 bg-gradient-to-r to-transparent",
                      tone.rule,
                    )}
                  />
                  <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">
                    {group.description}
                  </p>
                </div>
              </Reveal>

              <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {group.projects.map((project, index) => (
                  <Reveal key={project.id} delay={index * 0.08} className="h-full">
                    <ProjectCard project={project} />
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
