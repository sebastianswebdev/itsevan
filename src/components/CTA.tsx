import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";

export function CTA() {
  return (
    <section id="contact" aria-label="Contact" className="relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal>
          <div className="ring-fade relative overflow-hidden rounded-[2.5rem] bg-white px-6 py-16 text-center shadow-[0_30px_70px_-40px_rgba(15,23,42,0.35)] sm:px-12 sm:py-20">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(70%_90%_at_50%_0%,rgba(31,102,240,0.13),transparent_60%)]"
            />
            <div className="grid-pattern absolute inset-0 opacity-50 [mask-image:radial-gradient(80%_80%_at_50%_20%,black,transparent)]" />

            <div className="relative mx-auto max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.28em] text-accent-600 uppercase">
                Ready when you are
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
                Let&apos;s build your{" "}
                <span className="text-glow-blue bg-gradient-to-r from-accent-600 to-cyanx bg-clip-text text-transparent">
                  growth engine.
                </span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-500 sm:text-lg">
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

              <p className="mt-8 text-sm text-ink-500">
                Prefer email?{" "}
                <a
                  href={site.contactHref}
                  className="text-ink-800 underline decoration-accent-500/50 underline-offset-4 transition-colors hover:text-accent-600"
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
