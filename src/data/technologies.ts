/** Tech stack chips shown in the hero's floating dev panel. */
export const stackChips = ["Next.js", "React", "TypeScript", "Tailwind"] as const;

/** Marketing / automation chips floating around the hero portrait. */
export const marketingChips = ["Google Ads", "GA4", "GTM"] as const;

export const automationChips = ["AI", "CRM", "Workflows"] as const;

/** Checklist rendered inside the "Automation Active" hero card. */
export const automationChecklist = [
  "Lead captured",
  "CRM updated",
  "Follow-up sent",
  "Task automated",
] as const;

/** Core focus list used in the About section's floating panel. */
export const coreFocus = [
  { label: "Growth Strategy", icon: "target" },
  { label: "Web Design", icon: "monitor" },
  { label: "Performance Marketing", icon: "megaphone" },
  { label: "AI Automation", icon: "sparkles" },
  { label: "System Optimization", icon: "gauge" },
] as const;
