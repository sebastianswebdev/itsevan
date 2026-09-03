import { Icon, type IconName } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const uses: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "monitor",
    title: "Development",
    description:
      "AI helps me scaffold, refactor and debug faster than I could by hand. The architecture, the trade-offs and the final call on what ships are mine.",
  },
  {
    icon: "workflow",
    title: "Automation",
    description:
      "I build AI systems for clients as well — lead follow-up, reporting, content pipelines. Same rule every time: automate the repetitive, keep a human on the judgment.",
  },
  {
    icon: "chart",
    title: "Analysis",
    description:
      "AI reads a data set faster than I can. Knowing which numbers actually matter, and what to change because of them, comes from years of running the campaigns myself.",
  },
];

export function HowIUseAI() {
  return (
    <section
      id="how-i-work"
      aria-label="How I work with AI"
      className="relative scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="How I work"
            title={
              <>
                I use AI — and I learned this craft{" "}
                <span className="text-accent-600">before it existed</span>
              </>
            }
            description="Being straight with you about my process: AI is part of my day-to-day across development, automation and analysis. It makes the work faster. It doesn't do the thinking."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {uses.map((use, index) => (
            <Reveal key={use.title} delay={index * 0.08} className="h-full">
              <div className="glass card-hover flex h-full flex-col rounded-3xl p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-accent-500/25 bg-accent-500/10 text-accent-600">
                  <Icon name={use.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink-900">
                  {use.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {use.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* The point of the section: the skills predate the tooling. */}
        <Reveal delay={0.1} className="mt-5">
          <div className="glass-strong ring-fade rounded-3xl p-8 sm:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-accent-500/25 bg-accent-500/10 text-accent-600">
                <Icon name="cpu" className="h-5 w-5" />
              </span>
              <div className="max-w-3xl">
                <h3 className="text-xl font-semibold text-ink-900 sm:text-2xl">
                  I started manual — and that&apos;s why the AI work holds up
                </h3>
                <p className="mt-4 leading-relaxed text-ink-500">
                  I was building and shipping websites long before any of these
                  tools existed, back when the only way past a problem was to
                  understand it yourself. No autocomplete, no generated
                  boilerplate — you read the docs, you fixed it, you learned it
                  properly.
                </p>
                <p className="mt-4 leading-relaxed text-ink-500">
                  That foundation is the whole reason AI makes my work stronger
                  instead of shakier. I can tell when the output is wrong, and I
                  know what to do when it is. The tools got faster. The standard
                  I hold the work to hasn&apos;t moved.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
