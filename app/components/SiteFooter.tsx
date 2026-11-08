import Link from "next/link";
import Logo from "./Logo";
import { airportName, business } from "../business";

// Footer shared by the homepage and the blog.
export default function SiteFooter() {
  const { phones, emails } = business;

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Logo className="h-9 w-10 shrink-0" />
            <p className="text-lg font-extrabold uppercase leading-tight text-[#1d3f9a]">{business.name}</p>
          </div>
          <p className="mt-3 text-slate-600">
            Professional cleaning for homes, offices, Airbnb, and post-construction spaces in Abuja. Trusted at the
            local wing of {airportName}.
          </p>
          <p className="mt-2 text-sm text-slate-500">RC: {business.rcNumber}</p>
          <p className="mt-4 text-sm">
            <Link href="/blog" className="font-semibold text-[#1d3f9a] hover:underline">
              Cleaning tips &amp; news on our blog →
            </Link>
          </p>
        </div>
        <div className="text-sm text-slate-600">
          <p className="font-semibold text-slate-900">Call or WhatsApp</p>
          <ul className="mt-2 space-y-1">
            {phones.map((phone) => (
              <li key={phone.tel}>
                <a href={`tel:${phone.tel}`} className="hover:text-slate-900 hover:underline">
                  {phone.display}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 font-semibold text-slate-900">Email</p>
          <ul className="mt-2 space-y-1">
            {emails.map((email) => (
              <li key={email}>
                <a href={`mailto:${email}`} className="break-all hover:text-slate-900 hover:underline">
                  {email}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-sm text-slate-600">
          <p className="font-semibold text-slate-900">Office</p>
          <address className="mt-2 not-italic leading-6">
            {business.address.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <p className="mt-4">Service Area: Abuja, Nigeria</p>
        </div>
      </div>
      <div className="border-t border-slate-200 py-5 pb-24 text-center text-xs text-slate-500 sm:pb-5">
        © {new Date().getFullYear()} {business.name}. All rights reserved.
      </div>
    </footer>
  );
}
