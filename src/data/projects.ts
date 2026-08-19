export type Project = {
  id: string;
  name: string;
  /** Monogram shown on the generated cover panel */
  monogram: string;
  category: string;
  summary: string;
  capabilities: string[];
  accent: "blue" | "emerald" | "violet";
  /**
   * Case-study destination. Points at the contact section until a
   * dedicated case-study page (or live-site link) exists for the project.
   */
  href: string;
};

export const projects: Project[] = [
  {
    id: "prestige-tractors",
    name: "Prestige Tractors",
    monogram: "PT",
    category: "Web Development",
    summary:
      "A digital experience and product catalogue for an agricultural machinery dealer — built to make a large inventory easy to browse and enquire about.",
    capabilities: ["Web development", "Product catalogue", "Digital experience"],
    accent: "emerald",
    href: "/#contact",
  },
  {
    id: "ballarat-car-repairs",
    name: "Ballarat Car Repairs & Servicing",
    monogram: "BC",
    category: "Performance Marketing",
    summary:
      "Google Ads, conversion tracking and a conversion-focused website for a local automotive workshop — every enquiry measured end-to-end.",
    capabilities: ["Google Ads", "Conversion tracking", "Website", "Optimization"],
    accent: "blue",
    href: "/#contact",
  },
  {
    id: "inner-peace-care",
    name: "Inner Peace In-Home Care",
    monogram: "IP",
    category: "Web Development",
    summary:
      "A warm, accessible WordPress website for an in-home care provider — designed to build trust with families from the first visit.",
    capabilities: ["WordPress", "Website development", "Digital experience"],
    accent: "violet",
    href: "/#contact",
  },
];
