import type { StaticImageData } from "next/image";

import acuitiShot from "../../public/images/projects/acuiti.jpg";
import animalMedCentreShot from "../../public/images/projects/animal-med-centre.jpg";
import ballaratRepcoShot from "../../public/images/projects/ballarat-repco.jpg";
import coredeskShot from "../../public/images/projects/coredesk.jpg";
import homeFreshCookingShot from "../../public/images/projects/home-fresh-cooking.jpg";
import prestigeTractorsShot from "../../public/images/projects/prestige-tractors.jpg";
import realDealSportToursShot from "../../public/images/projects/real-deal-sports-tours.jpg";
import schoolOfHealthShot from "../../public/images/projects/school-of-health.jpg";
import whereIsTheDeerShot from "../../public/images/projects/where-is-the-deer.jpg";
import zootScootersShot from "../../public/images/projects/zoot-scooters.jpg";

export type Project = {
  id: string;
  name: string;
  /** Monogram for the fallback cover panel, used when `image` is absent. */
  monogram: string;
  /** Role/category badge shown on the card cover. */
  role: string;
  summary: string;
  /** Capability chips. Omitted where the engagement scope isn't documented. */
  capabilities?: string[];
  accent: "blue" | "emerald" | "violet";
  /** Live site. Rendered as an external "View Website" link. */
  href: string;
  /**
   * Hero-fold capture of the live homepage (1200×750, 16:10 to match the
   * card cover). Absent entries fall back to the monogram panel.
   */
  image?: StaticImageData;
  imageAlt: string;
};

export type ProjectGroup = {
  id: string;
  badge: string;
  title: string;
  description: string;
  tone: "accent" | "violet";
  projects: Project[];
};

const FREELANCE_ROLE = "Freelance · WordPress & Marketing";
const AGENCY_ROLE = "Agency · Lead WordPress Dev";

export const projectGroups: ProjectGroup[] = [
  {
    id: "freelance",
    badge: "Freelance work",
    title: "Freelance WordPress Development & Marketing Strategy",
    description:
      "These are websites and digital projects I personally delivered for clients as a freelance WordPress Developer and Marketing Strategist.",
    tone: "accent",
    projects: [
      {
        id: "ballarat-repco",
        name: "Ballarat Repco Service Centre",
        monogram: "BR",
        role: FREELANCE_ROLE,
        summary:
          "Google Ads, conversion tracking and a conversion-focused website for a local automotive workshop — every enquiry measured end-to-end.",
        capabilities: [
          "Google Ads",
          "Conversion tracking",
          "Website",
          "Optimization",
        ],
        accent: "blue",
        href: "https://ballaratrepcoservicecentre.com.au/",
        image: ballaratRepcoShot,
        imageAlt: "Homepage of the Ballarat Repco Service Centre website",
      },
      {
        id: "inner-peace",
        name: "Inner Peace In-Home Nursing & Care",
        monogram: "IP",
        role: FREELANCE_ROLE,
        summary:
          "A warm, accessible WordPress website for an in-home care provider — designed to build trust with families from the first visit.",
        capabilities: ["WordPress", "Website development", "Digital experience"],
        accent: "violet",
        href: "https://innerpeace.vision/",
        // TODO: add public/images/projects/inner-peace.jpg — the site was not
        // reachable from the build machine when the other covers were captured.
        imageAlt: "Homepage of the Inner Peace In-Home Nursing & Care website",
      },
      {
        id: "growing-deep-and-strong",
        name: "Growing Deep and Strong",
        monogram: "GD",
        role: FREELANCE_ROLE,
        summary:
          "A discipleship site for new Christians — structured 20- and 40-week journeys, curriculum, and coaching, with an online shop.",
        capabilities: ["WordPress", "WooCommerce", "Website development"],
        accent: "emerald",
        href: "https://growingdeepandstrong.com/",
        // TODO: add public/images/projects/growing-deep-and-strong.jpg — the
        // site was not reachable from the build machine.
        imageAlt: "Homepage of the Growing Deep and Strong website",
      },
      {
        id: "prestige-tractors",
        name: "Prestige Tractors",
        monogram: "PT",
        role: FREELANCE_ROLE,
        summary:
          "A digital experience and product catalogue for an agricultural machinery dealer — built to make a large inventory easy to browse and enquire about.",
        capabilities: [
          "Web development",
          "Product catalogue",
          "Digital experience",
        ],
        accent: "emerald",
        href: "https://prestigetractors.com.au/",
        image: prestigeTractorsShot,
        imageAlt: "Homepage of the Prestige Tractors website",
      },
    ],
  },
  {
    id: "agency",
    badge: "Agency experience",
    title: "Australian Agency Experience",
    description:
      "These are projects I worked on while working as a Lead WordPress Developer for an Australian agency.",
    tone: "violet",
    projects: [
      {
        id: "acuiti",
        name: "Acuiti",
        monogram: "AC",
        role: AGENCY_ROLE,
        summary:
          "A digital agency site spanning app development, web platforms, growth marketing and SEO.",
        accent: "blue",
        href: "http://www.acuiti.au/",
        image: acuitiShot,
        imageAlt: "Homepage of the Acuiti website",
      },
      {
        id: "zoot-scooters",
        name: "Zoot Scooters",
        monogram: "ZS",
        role: AGENCY_ROLE,
        summary:
          "A scooter retailer site covering 50cc, 125cc and 150cc models, parts and accessories, with showrooms and online ordering.",
        accent: "violet",
        href: "https://zootscooters.com.au/",
        image: zootScootersShot,
        imageAlt: "Homepage of the Zoot Scooters website",
      },
      {
        id: "home-fresh-cooking",
        name: "Home Fresh Cooking",
        monogram: "HF",
        role: AGENCY_ROLE,
        summary:
          "Hands-on cooking classes in Adelaide for kids, adults, families and NDIS participants, including school holiday and corporate programs.",
        accent: "emerald",
        href: "https://homefreshcooking.com.au/",
        image: homeFreshCookingShot,
        imageAlt: "Homepage of the Home Fresh Cooking website",
      },
      {
        id: "school-of-health",
        name: "School of Health",
        monogram: "SH",
        role: AGENCY_ROLE,
        summary:
          "A training provider site for nursing, individual support and community services qualifications, plus first aid and CPR short courses.",
        accent: "blue",
        href: "https://schoolofhealth.edu.au/",
        image: schoolOfHealthShot,
        imageAlt: "Homepage of the School of Health website",
      },
      {
        id: "real-deal-sport-tours",
        name: "Real Deal Sport Tours",
        monogram: "RD",
        role: AGENCY_ROLE,
        summary:
          "A sports travel site presenting premium live-sports tour packages.",
        accent: "emerald",
        href: "https://realdealsportstours.com.au/",
        image: realDealSportToursShot,
        imageAlt: "Homepage of the Real Deal Sport Tours website",
      },
      {
        id: "animal-med-centre",
        name: "Animal Med Centre",
        monogram: "AM",
        role: AGENCY_ROLE,
        summary:
          "A veterinary clinic website for Bayside Animal Medical Centre.",
        accent: "violet",
        href: "https://animalmedcentre.com.au/",
        image: animalMedCentreShot,
        imageAlt: "Homepage of the Animal Med Centre website",
      },
      {
        id: "where-is-the-deer",
        name: "Where Is The Deer",
        monogram: "WD",
        role: AGENCY_ROLE,
        summary:
          "A custom hunting map for deer hunters in Victoria, Australia — weather, overlays and GPS tracks in one place.",
        accent: "emerald",
        href: "https://www.whereisthedeer.com.au/",
        image: whereIsTheDeerShot,
        imageAlt: "Landing page of the Where Is The Deer hunting map website",
      },
      {
        id: "coredesk",
        name: "Coredesk",
        monogram: "CD",
        role: AGENCY_ROLE,
        summary:
          "An operational platform for service businesses and agencies, run from a single system.",
        accent: "blue",
        href: "http://coredesk.co/",
        image: coredeskShot,
        imageAlt: "Homepage of the Coredesk website",
      },
    ],
  },
];
