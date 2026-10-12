export const site = {
  name: "Sebastian Works",
  tagline: "Web Development · Performance Marketing · AI Automation",
  description:
    "Evan Sebastian Martinez — web development, performance marketing (paid ads), and AI automation. Independent work through Sebastian Works.",
  url: "https://sebastianworks.dev",
  person: "Evan Sebastian Martinez",
  /** Actual working role. Sebastian Works is the freelance brand, not an agency. */
  role: "Web Developer · Performance Marketer · AI Automation",
  email: "evanmartinez@gmail.com",
  bookingHref:
    "mailto:evanmartinez@gmail.com?subject=Project%20enquiry%20for%20Sebastian%20Works",
  contactHref: "mailto:evanmartinez@gmail.com",
} as const;

export const navLinks = [
  { label: "Hello", href: "/#intro" },
  { label: "I can", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Contact", href: "/#contact" },
] as const;

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/evan-sebastian-martinez-a78aa927/",
    icon: "linkedin",
  },
  { label: "Email", href: "mailto:evanmartinez@gmail.com", icon: "mail" },
] as const;
