export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "carl-fechner",
    quote:
      "Evan understood what we were trying to build before a single page went up. The discipleship journeys are easy to follow, the shop just works, and people can find their way in without any hand-holding from us.",
    name: "Carl Fechner",
    role: "Director, Growing Deep and Strong",
    initials: "CF",
  },
  {
    id: "danny-graham",
    quote:
      "We carry a lot of machinery and the old site made that a problem rather than a strength. Evan built a catalogue customers can actually browse, and the enquiries coming through now are far better qualified.",
    name: "Danny Graham",
    role: "Director, Prestige Tractors",
    initials: "DG",
  },
  {
    id: "neale",
    quote:
      "Straightforward to deal with and no jargon. Evan told us what would make a difference, did it, and kept us in the loop the whole way through — which is more than we can say for the last two people we used.",
    name: "Neale",
    role: "Director, NGA Ballarat",
    initials: "N",
  },
  {
    id: "annette-k",
    quote:
      "Families are often reaching out at a difficult moment, so the site had to feel calm and trustworthy. Evan got that tone right, and made it simple enough that anyone can find what they need on the first visit.",
    name: "Annette K.",
    role: "Director, Inner Peace In-Home Nursing & Care",
    initials: "AK",
  },
  {
    id: "chris-weddle",
    quote:
      "Evan was the developer we put on the work that had to hold up. Reliable, quick to pick up the brief, and he raised the problems early instead of at handover. That made the whole delivery easier.",
    name: "Chris Weddle",
    role: "Director, Acuiti",
    initials: "CW",
  },
];
