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
  region: "Australia" | "Philippines";
  badge: string;
  title: string;
  description: string;
  company?: { name: string; href: string };
  tone: "accent" | "violet";
  projects: Project[];
};

const FREELANCE_ROLE = "Freelance · Design & Development";
const AGENCY_ROLE = "Agency · Web Development";
const COMPANY_ROLE = "Company · Web Development";

const philippineProjects = [
  { id: "zed-builders", name: "Zed Builders Inc.", monogram: "ZB", href: "https://zedbuildersinc.com/" },
  { id: "zenhael-builders", name: "Zenhael Builders", monogram: "ZB", href: "https://www.zenhaelbuilders.com/" },
  { id: "tktq-travels", name: "TKTQ Travels", monogram: "TQ", href: "https://tktqtravels.com/" },
  { id: "jolly-group", name: "Jolly Group", monogram: "JG", href: "https://www.jolly.ph/" },
  { id: "dn-group", name: "DN Group", monogram: "DN", href: "https://dngroup.com.ph/" },
  { id: "mashaa-beauty", name: "Mashaa Beauty", monogram: "MB", href: "https://mashaabeauty.com/" },
  { id: "northgate", name: "Northgate Technologies", monogram: "NT", href: "https://www.northgate.com.ph/" },
  { id: "elzhan-luxe", name: "Elzhan Luxe Residences", monogram: "EL", href: "https://elzhanluxeresidences.com/" },
  { id: "ag-international", name: "AG International", monogram: "AG", href: "https://aginternationalcoph.com/" },
  { id: "southside-carwash", name: "Southside Carwash", monogram: "SC", href: "https://southsidecarwash.com.ph/" },
  { id: "gtg-talent", name: "GTG Talent Consultancy", monogram: "GT", href: "https://gtgtalentconsultancy.com/" },
] as const;

export const projectGroups: ProjectGroup[] = [
  {
    id: "freelance",
    region: "Australia",
    badge: "Freelance work",
    title: "Australian Freelance Work",
    description:
      "I designed and built the website, and handled hosting management, SEO, ads, and marketing.",
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
    region: "Australia",
    badge: "Agency experience",
    title: "Australian Agency Experience",
    description:
      "I developed the website from designs supplied in Figma or Adobe XD while working with an Australian agency.",
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
  {
    id: "itworks-global",
    region: "Philippines",
    badge: "Company work",
    title: "Philippine Projects at ITWorks Global",
    description:
      "I built the website from scratch, working from company-provided Figma or Adobe XD designs.",
    company: { name: "ITWorks Global", href: "https://itworkserv.com/" },
    tone: "violet",
    projects: philippineProjects.map((project) => ({
      ...project,
      role: COMPANY_ROLE,
      summary: "Website built from scratch while working at ITWorks Global in the Philippines, based on supplied Figma or Adobe XD designs.",
      accent: "violet" as const,
      imageAlt: `Homepage of the ${project.name} website`,
    })),
  },
];
