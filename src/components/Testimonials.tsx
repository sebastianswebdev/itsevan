import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="Testimonials"
      className="relative scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="What clients say"
            title={
              <>
                Trusted by{" "}
                <span className="text-accent-400">growing businesses</span>
              </>
            }
            description="Real feedback is on its way — the quotes below are placeholders and will be replaced with verified client testimonials."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={index * 0.08} className="h-full">
              <figure className="glass card-hover relative flex h-full flex-col rounded-3xl p-7">
                {testimonial.isPlaceholder && (
                  <span className="absolute top-5 right-5 rounded-full border border-amberx/25 bg-amberx/10 px-2.5 py-1 text-[10px] font-medium tracking-wide text-amberx uppercase">
                    Sample
                  </span>
                )}
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-7 w-7 fill-accent-500/40"
                >
                  <path d="M10.4 5.5c-3.9 1.7-6 4.6-6 8.8 0 2.6 1.5 4.2 3.5 4.2 1.8 0 3.1-1.3 3.1-3 0-1.6-1.1-2.8-2.7-2.8h-.6c.3-2 1.6-3.6 3.8-4.9l-1.1-2.3Zm9 0c-3.9 1.7-6 4.6-6 8.8 0 2.6 1.5 4.2 3.5 4.2 1.8 0 3.1-1.3 3.1-3 0-1.6-1.1-2.8-2.7-2.8h-.6c.3-2 1.6-3.6 3.8-4.9l-1.1-2.3Z" />
                </svg>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-300">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-500/15 text-xs font-semibold text-accent-300">
                    {testimonial.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-white">
                      {testimonial.name}
                    </span>
                    <span className="block text-xs text-slate-500">
                      {testimonial.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
