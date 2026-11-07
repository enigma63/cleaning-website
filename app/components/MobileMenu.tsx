"use client";

import { useState } from "react";

type Props = {
  links: { href: string; label: string }[];
  whatsappHref: string;
  phoneHref: string;
};

export default function MobileMenu({ links, whatsappHref, phoneHref }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 text-slate-900"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          {open ? (
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {open && (
        <nav
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b border-slate-200 bg-white shadow-lg"
        >
          <ul className="mx-auto max-w-7xl px-6 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-3 text-base font-medium text-slate-800 hover:bg-slate-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mx-auto flex max-w-7xl gap-3 px-6 pb-5">
            <a
              href={whatsappHref}
              className="flex-1 rounded-2xl bg-emerald-600 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              WhatsApp Us
            </a>
            <a
              href={phoneHref}
              className="flex-1 rounded-2xl border border-slate-300 px-4 py-3 text-center text-sm font-semibold text-slate-900"
            >
              Call Now
            </a>
          </div>
        </nav>
      )}
    </div>
  );
}
