import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";

export function CTA() {
  return (
    <section id="contact" aria-label="Contact" className="relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal>
          <div className="ring-fade relative overflow-hidden rounded-[2.5rem] bg-ink-900/80 px-6 py-16 text-center sm:px-12 sm:py-20">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(70%_90%_at_50%_0%,rgba(47,125,255,0.22),transparent_60%)]"
            />
            <div className="grid-pattern absolute inset-0 opacity-50 [mask-image:radial-gradient(80%_80%_at_50%_20%,black,transparent)]" />

            <div className="relative mx-auto max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.28em] text-accent-400 uppercase">
                Ready when you are
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Let&apos;s build your{" "}
                <span className="text-glow-blue bg-gradient-to-r from-accent-400 to-cyanx bg-clip-text text-transparent">
                  growth engine.
                </span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
                Have a project in mind? Let&apos;s build something that works.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <ButtonLink href={site.bookingHref} withArrow>
                  Book a Strategy Call
                </ButtonLink>
                <ButtonLink href={site.contactHref} variant="secondary">
                  Get in Touch
                </ButtonLink>
              </div>

              <p className="mt-8 text-sm text-slate-500">
                Prefer email?{" "}
                <a
                  href={site.contactHref}
                  className="text-slate-300 underline decoration-accent-500/50 underline-offset-4 transition-colors hover:text-white"
                >
                  {site.email}
                </a>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
