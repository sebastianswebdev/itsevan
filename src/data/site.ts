export const site = {
  name: "Sebastian Works",
  tagline: "Web Development · Performance Marketing · AI Automation",
  description:
    "Sebastian Works builds high-performance websites, growth systems, and AI automation for businesses.",
  url: "https://sebastianworks.dev",
  founder: "Evan Martinez",
  // TODO: point these at your real booking link / inbox before launch.
  email: "hello@sebastianworks.dev",
  bookingHref:
    "mailto:hello@sebastianworks.dev?subject=Strategy%20call%20with%20Sebastian%20Works",
  contactHref: "mailto:hello@sebastianworks.dev",
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

// TODO: replace the "#" placeholders with real profile URLs.
export const socialLinks = [
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "GitHub", href: "#", icon: "github" },
  { label: "Upwork", href: "#", icon: "briefcase" },
  { label: "Email", href: "mailto:hello@sebastianworks.dev", icon: "mail" },
] as const;
