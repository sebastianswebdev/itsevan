export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
  /**
   * PLACEHOLDER FLAG — every entry below is sample copy, clearly labelled
   * in the UI. Replace the quotes with real client feedback and set this
   * to false (or remove the field) to drop the "sample" badge.
   */
  isPlaceholder: boolean;
};

export const testimonials: Testimonial[] = [
  {
    id: "placeholder-1",
    quote:
      "This is placeholder copy — a short quote about the project outcome and what it was like to work together will go here.",
    name: "Client Name",
    role: "Business type / industry",
    initials: "CN",
    isPlaceholder: true,
  },
  {
    id: "placeholder-2",
    quote:
      "This is placeholder copy — a sentence about communication, reliability and results will go here once a real testimonial is supplied.",
    name: "Client Name",
    role: "Business type / industry",
    initials: "CN",
    isPlaceholder: true,
  },
  {
    id: "placeholder-3",
    quote:
      "This is placeholder copy — a line about the value delivered (traffic, leads, time saved) will go here once verified.",
    name: "Client Name",
    role: "Business type / industry",
    initials: "CN",
    isPlaceholder: true,
  },
];
