import Image from "next/image";
import Link from "next/link";

import logo from "../../public/images/SW-Logo.png";
import { Icon, type IconName } from "@/components/ui/icons";
import { navLinks, site, socialLinks } from "@/data/site";

const footerNav = navLinks.filter((link) => link.label !== "Testimonials");

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-3" aria-label="Sebastian Works — home">
              <Image src={logo} alt="" className="h-9 w-auto" />
              <span className="text-sm font-semibold tracking-[0.22em] text-ink-900 uppercase">
                Sebastian Works
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-ink-500">
              The freelance brand of {site.person} — WordPress development,
              measurable marketing, and AI automation for businesses that want
              to scale.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-3">
              {footerNav.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-600 transition-colors hover:text-accent-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex items-center gap-3" aria-label="Social links">
            {socialLinks.map((social) => {
              const isExternal = social.href.startsWith("http");

              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong bg-white text-ink-500 transition-all hover:border-accent-500/40 hover:bg-accent-500/10 hover:text-accent-600"
                  >
                    <Icon name={social.icon as IconName} className="h-4.5 w-4.5" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-7 sm:flex-row">
          <p className="text-xs text-ink-500">
            © 2026 Sebastian Works. All rights reserved.
          </p>
          <p className="font-mono text-[11px] tracking-[0.3em] text-ink-400 uppercase">
            Build · Grow · Scale
          </p>
          <p className="text-xs text-ink-500">{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
