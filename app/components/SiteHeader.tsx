import Link from "next/link";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { PhoneIcon, WhatsAppIcon } from "./Icons";
import { business, whatsappLink } from "../business";
import { siteNavLinks } from "../content";

// Sticky top bar shared by the homepage and the blog.
export default function SiteHeader() {
  const phoneHref = `tel:${business.phones[0].tel}`;
  const whatsappHref = whatsappLink();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Logo className="h-10 w-11 shrink-0" />
          <div className="min-w-0">
            <p className="text-base font-extrabold uppercase leading-tight tracking-tight text-[#1d3f9a] sm:text-lg">
              {business.name}
            </p>
            <p className="hidden text-xs text-slate-500 sm:block">Professional Cleaning Services · Abuja</p>
          </div>
        </Link>
        <nav className="hidden xl:block" aria-label="Main">
          <ul className="flex items-center gap-7 whitespace-nowrap text-sm font-medium text-slate-700">
            {siteNavLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-[#1d3f9a]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden shrink-0 gap-3 xl:flex">
          <a
            href={phoneHref}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
          >
            <PhoneIcon className="h-4 w-4" /> Call
          </a>
          <a
            href={whatsappHref}
            className="inline-flex items-center gap-2 rounded-xl bg-[#1d3f9a] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0f2a6b]"
          >
            <WhatsAppIcon className="h-4 w-4" /> Get a Free Quote
          </a>
        </div>
        <MobileMenu links={siteNavLinks} whatsappHref={whatsappHref} phoneHref={phoneHref} />
      </div>
    </header>
  );
}
