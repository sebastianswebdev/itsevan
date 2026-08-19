import type { IconName } from "@/components/ui/icons";

export type ResultItem = {
  id: string;
  icon: IconName;
  accent: "blue" | "emerald" | "violet" | "amber";
  /**
   * Optional headline metric, e.g. "3.8x" or "+120%".
   * ONLY add a stat once it is a real, verified number from client work —
   * the section renders capability statements when `stat` is null.
   */
  stat: string | null;
  title: string;
  description: string;
};

export const results: ResultItem[] = [
  {
    id: "full-funnel",
    icon: "trend",
    accent: "blue",
    stat: null,
    title: "Full-funnel delivery",
    description:
      "Strategy, build, traffic and tracking handled end-to-end — one accountable partner, not four vendors.",
  },
  {
    id: "measurement",
    icon: "gauge",
    accent: "emerald",
    stat: null,
    title: "Measurement on every build",
    description:
      "GA4 and Tag Manager configured from day one, so every decision is backed by real conversion data.",
  },
  {
    id: "automation",
    icon: "workflow",
    accent: "violet",
    stat: null,
    title: "Systems that run 24/7",
    description:
      "Lead capture, CRM updates and follow-ups automated — pipelines keep moving while you sleep.",
  },
  {
    id: "performance",
    icon: "bolt",
    accent: "amber",
    stat: null,
    title: "Built for speed",
    description:
      "Fast, SEO-ready websites engineered against performance budgets — because slow pages lose customers.",
  },
];
