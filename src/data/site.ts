export const site = {
  name: "Sebastian Works",
  tagline: "Web Development · Performance Marketing · AI Automation",
  description:
    "Sebastian Works builds high-performance websites, growth systems, and AI automation for businesses.",
  url: "https://sebastianworks.dev",
  person: "Evan Martinez",
  /** Actual working role. Sebastian Works is the freelance brand, not an agency. */
  role: "Freelance WordPress Developer & Marketing Strategist",
  email: "evanmartinez@gmail.com",
  bookingHref:
    "mailto:evanmartinez@gmail.com?subject=Strategy%20call%20with%20Sebastian%20Works",
  contactHref: "mailto:evanmartinez@gmail.com",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
] as const;

// TODO: replace the Upwork "#" placeholder with a real profile URL.
export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/evan-sebastian-martinez-a78aa927/",
    icon: "linkedin",
  },
  { label: "Upwork", href: "#", icon: "briefcase" },
  { label: "Email", href: "mailto:evanmartinez@gmail.com", icon: "mail" },
] as const;
