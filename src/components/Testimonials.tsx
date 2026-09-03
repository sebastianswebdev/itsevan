import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials, type Testimonial } from "@/data/testimonials";

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="glass card-hover flex w-[80vw] max-w-[24rem] shrink-0 flex-col rounded-3xl p-7 sm:w-[24rem]">
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-7 w-7 fill-accent-500/25"
      >
        <path d="M10.4 5.5c-3.9 1.7-6 4.6-6 8.8 0 2.6 1.5 4.2 3.5 4.2 1.8 0 3.1-1.3 3.1-3 0-1.6-1.1-2.8-2.7-2.8h-.6c.3-2 1.6-3.6 3.8-4.9l-1.1-2.3Zm9 0c-3.9 1.7-6 4.6-6 8.8 0 2.6 1.5 4.2 3.5 4.2 1.8 0 3.1-1.3 3.1-3 0-1.6-1.1-2.8-2.7-2.8h-.6c.3-2 1.6-3.6 3.8-4.9l-1.1-2.3Z" />
      </svg>
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-600">
        {testimonial.quote}
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-500/10 text-xs font-semibold text-accent-600">
          {testimonial.initials}
        </span>
        <span>
          <span className="block text-sm font-semibold text-ink-900">
            {testimonial.name}
          </span>
          <span className="block text-xs text-ink-500">{testimonial.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="Testimonials"
      className="relative scroll-mt-24"
    >
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="What clients say"
              title={
                <>
                  Trusted by{" "}
                  <span className="text-accent-600">growing businesses</span>
                </>
              }
              description="Feedback from the directors behind the projects — the people who had to live with the result."
            />
          </Reveal>
        </div>

        {/* Full-bleed so the cards fade out against the page edges rather than
            inside the content column. */}
        <Reveal className="mt-14">
          <div className="marquee">
            <div className="marquee-track">
              <div className="marquee-group">
                {testimonials.map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                  />
                ))}
              </div>
              {/* Duplicate set — carries the loop, hidden from assistive tech
                  so the quotes aren't announced twice. */}
              <div className="marquee-group" aria-hidden="true">
                {testimonials.map((testimonial) => (
                  <TestimonialCard
                    key={`${testimonial.id}-loop`}
                    testimonial={testimonial}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
