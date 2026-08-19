import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on web development, performance marketing and AI automation from Sebastian Works.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <section
          aria-label="Blog"
          className="relative flex min-h-svh items-center overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="grid-pattern absolute inset-0 opacity-50 [mask-image:radial-gradient(70%_60%_at_50%_30%,black,transparent)]"
          />
          <div
            aria-hidden="true"
            className="absolute -top-24 left-1/3 h-80 w-80 rounded-full bg-accent-600/15 blur-[130px]"
          />
          <div className="relative mx-auto max-w-2xl px-5 py-32 text-center sm:px-8">
            <p className="text-xs font-semibold tracking-[0.28em] text-accent-400 uppercase">
              Blog
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Insights are{" "}
              <span className="bg-gradient-to-r from-accent-400 to-cyanx bg-clip-text text-transparent">
                on the way
              </span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
              Practical writing on web development, performance marketing and
              AI automation is coming soon. In the meantime, let&apos;s talk
              about your project.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <ButtonLink href="/#contact" withArrow>
                Get in Touch
              </ButtonLink>
              <ButtonLink href="/" variant="secondary">
                Back to Home
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
