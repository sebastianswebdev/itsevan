import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/data/projects";

export function TrustBar() {
  return (
    <section aria-label="Client projects" className="relative">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <Reveal>
          <div className="flex flex-col items-center gap-6 border-y border-white/[0.06] py-8 md:flex-row md:justify-between md:gap-10">
            <p className="shrink-0 text-xs font-medium tracking-[0.24em] text-slate-500 uppercase">
              Trusted on real projects
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {projects.map((project) => (
                <li
                  key={project.id}
                  className="text-sm font-semibold tracking-wide text-slate-400 transition-colors hover:text-slate-200"
                >
                  {project.name}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
