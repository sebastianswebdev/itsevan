import type { IconName } from "@/components/ui/icons";

export type Service = {
  id: string;
  number: string;
  icon: IconName;
  accent: "blue" | "emerald" | "violet" | "amber";
  title: string;
  description: string;
  capabilities: string[];
};

export const services: Service[] = [
  {
    id: "web",
    number: "01",
    icon: "monitor",
    accent: "blue",
    title: "Web Design & Development",
    description:
      "Modern, high-converting websites built for speed, SEO and results — from custom builds to platform work.",
    capabilities: [
      "React / Next.js",
      "WordPress",
      "Landing pages",
      "APIs & integrations",
      "SEO & performance",
    ],
  },
  {
    id: "marketing",
    number: "02",
    icon: "megaphone",
    accent: "emerald",
    title: "Performance Marketing",
    description:
      "Data-driven ad strategies that generate quality leads and sales, measured end-to-end.",
    capabilities: [
      "Google Ads",
      "Conversion tracking",
      "GA4",
      "Google Tag Manager",
      "Campaign optimization",
    ],
  },
  {
    id: "automation",
    number: "03",
    icon: "cpu",
    accent: "violet",
    title: "AI Automation & Systems",
    description:
      "Automate workflows, save time, and scale your operations with AI-powered systems.",
    capabilities: [
      "AI workflows",
      "CRM automation",
      "Lead automation",
      "AI agents",
      "API integrations",
    ],
  },
  {
    id: "strategy",
    number: "04",
    icon: "compass",
    accent: "amber",
    title: "Strategy & Consulting",
    description:
      "Clear strategy, smart systems, and technical guidance that drives sustainable growth.",
    capabilities: [
      "Growth strategy",
      "Funnel strategy",
      "Digital systems",
      "Optimization",
      "Technical consulting",
    ],
  },
];
