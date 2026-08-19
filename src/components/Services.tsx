import Link from "next/link";

import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const accentStyles = {
  blue: "bg-accent-500/12 text-accent-400",
  emerald: "bg-emeraldx/12 text-emeraldx",
  violet: "bg-violetx/12 text-violetx",
  amber: "bg-amberx/12 text-amberx",
} as const;

export function Services() {
  return (
    <section id="services" aria-label="Services" className="relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="What I do"
            title={
              <>
                Everything your business needs{" "}
                <span className="text-accent-400">to grow online</span>
              </>
            }
            description="Four disciplines, one partner — so your website, traffic, tracking and automation actually work together."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.08} className="h-full">
              <article className="glass card-hover group flex h-full flex-col rounded-3xl p-7">
                <div className="flex items-start justify-between">
                  <span
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-2xl",
                      accentStyles[service.accent],
                    )}
                  >
                    <Icon name={service.icon} className="h-6 w-6" />
                  </span>
                  <span className="font-mono text-xs text-slate-600">
                    {service.number}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                  {service.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {service.capabilities.map((capability) => (
                    <li
                      key={capability}
                      className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2 py-1 text-[11px] text-slate-400"
                    >
                      {capability}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/#contact"
                  className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium text-accent-400 transition-colors group-hover:text-accent-300"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                  <Icon
                    name="arrowRight"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
