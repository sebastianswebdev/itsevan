import type { StaticImageData } from "next/image";

import automationPortrait from "../../public/images/automation-me.png";
import devPortrait from "../../public/images/dev-me.png";
import marketingPortrait from "../../public/images/Marketing-me.png";
import executivePortrait from "../../public/images/smile-me.png";

export type PortraitStage = {
  id: string;
  /** Stage number rendered as 01–04 */
  label: string;
  role: string;
  /** Three context words shown while this stage is active */
  words: [string, string, string];
  src: StaticImageData;
  alt: string;
};

/**
 * The scroll-driven hero sequence. Order matters: the page scrolls
 * through these stages top-to-bottom. Add, remove or reorder freely —
 * every component reading this config adapts automatically.
 */
export const portraitStages: PortraitStage[] = [
  {
    id: "executive",
    label: "01",
    role: "Strategy & Growth",
    words: ["Strategy", "Growth", "Results"],
    src: executivePortrait,
    alt: "Evan Martinez in a navy suit — freelance WordPress developer and marketing strategist",
  },
  {
    id: "development",
    label: "02",
    role: "Web Development",
    words: ["Build", "Design", "Optimize"],
    src: devPortrait,
    alt: "Evan Martinez working on a laptop — building fast, modern websites",
  },
  {
    id: "marketing",
    label: "03",
    role: "Performance Marketing",
    words: ["Ads", "Analytics", "Conversions"],
    src: marketingPortrait,
    alt: "Evan Martinez reviewing campaign performance — Google Ads and analytics",
  },
  {
    id: "automation",
    label: "04",
    role: "AI Automation",
    words: ["Automate", "Scale", "Innovate"],
    src: automationPortrait,
    alt: "Evan Martinez presenting an AI workflow on a tablet — automation systems",
  },
];
