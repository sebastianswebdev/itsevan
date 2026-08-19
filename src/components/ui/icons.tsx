import type { SVGProps } from "react";

export type IconName =
  | "arrowRight"
  | "bolt"
  | "briefcase"
  | "chart"
  | "check"
  | "close"
  | "compass"
  | "cpu"
  | "gauge"
  | "github"
  | "linkedin"
  | "mail"
  | "megaphone"
  | "menu"
  | "monitor"
  | "sparkles"
  | "target"
  | "trend"
  | "workflow";

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

const icons: Record<IconName, (props: IconProps) => React.JSX.Element> = {
  arrowRight: (p) => (
    <Base {...p}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </Base>
  ),
  bolt: (p) => (
    <Base {...p}>
      <path d="M13 2 4.5 13.5H11L9.5 22 19 10h-6.5L13 2Z" />
    </Base>
  ),
  briefcase: (p) => (
    <Base {...p}>
      <rect x="3" y="7" width="18" height="13" rx="2.5" />
      <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
      <path d="M3 12.5c3 1.4 6 2 9 2s6-.6 9-2" />
    </Base>
  ),
  chart: (p) => (
    <Base {...p}>
      <path d="M4 20V10" />
      <path d="M10 20V4" />
      <path d="M16 20v-8" />
      <path d="M22 20H2" />
    </Base>
  ),
  check: (p) => (
    <Base {...p}>
      <path d="m4.5 12.5 5 5 10-11" />
    </Base>
  ),
  close: (p) => (
    <Base {...p}>
      <path d="M5 5l14 14" />
      <path d="M19 5 5 19" />
    </Base>
  ),
  compass: (p) => (
    <Base {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </Base>
  ),
  cpu: (p) => (
    <Base {...p}>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <rect x="10" y="10" width="4" height="4" rx="1" />
      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
    </Base>
  ),
  gauge: (p) => (
    <Base {...p}>
      <path d="M4.5 19a9 9 0 1 1 15 0" />
      <path d="m12 13 3.5-4.5" />
      <circle cx="12" cy="14" r="1.6" />
    </Base>
  ),
  github: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
      <path d="M12 1.9a10.2 10.2 0 0 0-3.2 19.9c.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.3-.3-4.7-1.1-4.7-5A4 4 0 0 1 6.8 8.8a3.7 3.7 0 0 1 .1-2.7s.9-.3 2.8 1a9.7 9.7 0 0 1 5.1 0c1.9-1.3 2.8-1 2.8-1 .5 1.3.2 2.4.1 2.7a4 4 0 0 1 1.1 2.8c0 4-2.4 4.8-4.7 5 .4.3.7 1 .7 1.9v2.8c0 .3.2.6.7.5A10.2 10.2 0 0 0 12 1.9Z" />
    </svg>
  ),
  linkedin: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
      <path d="M6.4 4.5a1.9 1.9 0 1 1-3.8 0 1.9 1.9 0 0 1 3.8 0ZM6.3 8H2.7v13.4h3.6V8Zm5.8 0H8.6v13.4h3.5v-7c0-3.3 4.3-3.6 4.3 0v7H20v-8.2c0-5.5-6.3-5.3-7.9-2.6V8Z" />
    </svg>
  ),
  mail: (p) => (
    <Base {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7.5 8 5.5 8-5.5" />
    </Base>
  ),
  megaphone: (p) => (
    <Base {...p}>
      <path d="M3 11v3a1.5 1.5 0 0 0 1.5 1.5H6l1 4.5h2.5L8.5 15.5" />
      <path d="M6 11 18.5 5.5a1 1 0 0 1 1.4.9v12.2a1 1 0 0 1-1.4.9L6 15.5V11Z" />
    </Base>
  ),
  menu: (p) => (
    <Base {...p}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </Base>
  ),
  monitor: (p) => (
    <Base {...p}>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M9 21h6M12 17v4" />
      <path d="m8 9 2 2-2 2M12.5 13H16" />
    </Base>
  ),
  sparkles: (p) => (
    <Base {...p}>
      <path d="M12 4c.7 3.6 2.3 5.3 6 6-3.7.7-5.3 2.4-6 6-.7-3.6-2.3-5.3-6-6 3.7-.7 5.3-2.4 6-6Z" />
      <path d="M19 15.5c.3 1.6 1 2.4 2.5 2.7-1.5.3-2.2 1.1-2.5 2.7-.3-1.6-1-2.4-2.5-2.7 1.5-.3 2.2-1.1 2.5-2.7Z" />
      <path d="M5.5 3c.2 1.3.9 2 2.2 2.3-1.3.3-2 1-2.2 2.2-.3-1.2-1-1.9-2.3-2.2C4.5 5 5.2 4.3 5.5 3Z" />
    </Base>
  ),
  target: (p) => (
    <Base {...p}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </Base>
  ),
  trend: (p) => (
    <Base {...p}>
      <path d="m3 17 6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </Base>
  ),
  workflow: (p) => (
    <Base {...p}>
      <rect x="3" y="3" width="7" height="7" rx="1.8" />
      <rect x="14" y="14" width="7" height="7" rx="1.8" />
      <circle cx="17.5" cy="6.5" r="2.8" />
      <path d="M10 6.5h4.7M6.5 10v4a3.5 3.5 0 0 0 3.5 3.5h4" />
    </Base>
  ),
};

export function Icon({
  name,
  ...props
}: { name: IconName } & IconProps) {
  const Component = icons[name];
  return <Component {...props} />;
}
