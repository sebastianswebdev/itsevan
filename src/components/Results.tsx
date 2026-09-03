import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { results } from "@/data/results";
import { cn } from "@/lib/utils";

const accentText = {
  blue: "text-accent-600",
  emerald: "text-emeraldx",
  violet: "text-violetx",
  amber: "text-amberx",
} as const;

/**
 * Data-driven results band. Entries in `src/data/results.ts` render as
 * capability statements until a verified `stat` value is supplied —
 * at which point the number takes the headline slot automatically.
 */
export function Results() {
  return (
    <section aria-label="Results" className="relative">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <Reveal>
          <div className="glass ring-fade relative overflow-hidden rounded-[2rem] px-7 py-10 sm:px-10">
            <div
              aria-hidden="true"
              className="absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-accent-400/18 blur-[110px]"
            />
            <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,2fr)] lg:items-center">
              <h2 className="text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
                Real strategies.
                <br />
                <span className="text-accent-600">Real results.</span>
              </h2>

              <dl className="grid gap-x-8 gap-y-8 sm:grid-cols-2 xl:grid-cols-4">
                {results.map((item) => (
                  <div
                    key={item.id}
                    className="border-line sm:border-l sm:pl-6 first:sm:border-l-0 first:sm:pl-0 xl:border-l xl:pl-6 first:xl:border-l first:xl:pl-6"
                  >
                    <dt className="flex items-center gap-2.5">
                      <Icon
                        name={item.icon}
                        className={cn("h-5 w-5", accentText[item.accent])}
                      />
                      <span className="text-sm font-semibold text-ink-900">
                        {item.stat ?? item.title}
                      </span>
                    </dt>
                    <dd className="mt-2 text-[13px] leading-relaxed text-ink-500">
                      {item.stat ? item.title + " — " : ""}
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
