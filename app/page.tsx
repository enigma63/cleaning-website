import Logo from "./components/Logo";
import { business } from "./business";

export default function Page() {
  const { phones, emails } = business;
  const phoneNumber = phones[0].display;
  const phoneLink = phones[0].tel;
  const whatsappNumber = business.whatsapp;
  const whatsappMessage = encodeURIComponent(
    "Hello, I’d like to request a cleaning quote."
  );

  const services = [
    {
      title: "Home Cleaning",
      description:
        "Reliable cleaning for apartments, houses, and family homes with careful attention to kitchens, bathrooms, floors, and living spaces.",
    },
    {
      title: "Office Cleaning",
      description:
        "Professional cleaning for offices and commercial spaces that keeps your workplace fresh, presentable, and ready for business.",
    },
    {
      title: "Airbnb Cleaning",
      description:
        "Fast turnover cleaning for short-let and Airbnb properties so every guest arrives to a spotless, welcoming space.",
    },
    {
      title: "Post-Construction Cleaning",
      description:
        "Detailed cleaning that removes dust, debris, and buildup after building or renovation work, leaving the property move-in ready.",
    },
  ];

  const benefits = [
    "Same-day service available",
    "Eco-friendly cleaning approach",
    "Trusted, trained, and professional staff",
    "Fast response by WhatsApp or phone",
    "Residential and commercial experience",
    "Attention to detail and consistent results",
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-3">
            <Logo className="h-10 w-11 shrink-0" />
            <div>
              <p className="text-lg font-extrabold uppercase leading-tight tracking-tight text-blue-900">
                {business.name}
              </p>
              <p className="text-sm text-slate-600">Professional Cleaning Services in Abuja</p>
            </div>
          </div>
          <div className="hidden gap-3 sm:flex">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.02]"
            >
              WhatsApp Us
            </a>
            <a
              href={`tel:${phoneLink}`}
              className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Call Now
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                Same-Day • Eco-Friendly • Trusted Staff
              </div>
              <h1 className="max-w-xl text-4xl font-extrabold tracking-tight text-slate-950 md:text-6xl">
                Trusted Cleaning Services in Abuja for Homes, Offices, Airbnb, and Post-Construction Spaces
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                We provide dependable, eco-friendly cleaning with trained staff trusted for regular cleaning
                operations at the local wing of Abuja Airport. From homes to offices and short-let properties,
                we deliver spotless results with fast response and same-day service.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  className="rounded-2xl bg-slate-900 px-6 py-4 text-center text-base font-semibold text-white shadow-md transition hover:scale-[1.02]"
                >
                  Message Us on WhatsApp
                </a>
                <a
                  href={`tel:${phoneLink}`}
                  className="rounded-2xl border border-slate-300 px-6 py-4 text-center text-base font-semibold text-slate-900 transition hover:bg-slate-50"
                >
                  Call for a Free Quote
                </a>
              </div>
              <div className="mt-8 grid max-w-lg grid-cols-2 gap-4 text-sm text-slate-600 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="font-semibold text-slate-900">Fast Booking</p>
                  <p className="mt-1">Easy quote requests by call or WhatsApp.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="font-semibold text-slate-900">Trusted Team</p>
                  <p className="mt-1">Professional staff with consistent standards.</p>
                </div>
                <div className="col-span-2 rounded-2xl border border-slate-200 p-4 sm:col-span-1">
                  <p className="font-semibold text-slate-900">Abuja Coverage</p>
                  <p className="mt-1">Serving homes and businesses across Abuja.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-xl">
                <div className="rounded-[1.5rem] bg-white p-8 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Why customers choose us
                  </p>
                  <div className="mt-6 space-y-5">
                    {benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-3">
                        <div className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                        <p className="text-base text-slate-700">{benefit}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <p className="text-sm font-semibold text-amber-800">Proven credibility</p>
                    <p className="mt-2 text-sm leading-7 text-amber-900">
                      Our team is trusted for regular cleaning work at the local wing of Abuja Airport, giving
                      clients added confidence in our professionalism, reliability, and standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Our Services
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Cleaning solutions for every kind of space
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Whether you need routine cleaning, a same-day turnaround, or a detailed post-project cleanup,
                we’re ready to help.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1"
                >
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                About Us
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                A dependable cleaning team Abuja clients can trust
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                We serve homeowners, offices, Airbnb hosts, and post-construction projects with a simple
                promise: deliver a cleaner, healthier, and more welcoming space every time. Our work is built
                on professionalism, prompt service, eco-friendly methods, and trusted staff.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                With experience supporting cleaning operations at the local wing of Abuja Airport, we bring
                disciplined standards and attention to detail to every job, big or small.
              </p>
            </div>
            <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold">Why we stand out</h3>
              <div className="mt-6 space-y-4 text-slate-200">
                <p>• Same-day service when available</p>
                <p>• Eco-friendly cleaning approach</p>
                <p>• Trusted professionals with routine airport cleaning experience</p>
                <p>• Quick communication through WhatsApp and phone</p>
                <p>• Flexible service for homes, offices, and short-let properties</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <div className="rounded-[2rem] bg-emerald-600 px-8 py-12 text-white shadow-xl md:px-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100">
                Book Today
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
                Need trusted cleaning in Abuja?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-emerald-50">
                Contact us today for a free quote. We respond quickly on WhatsApp and by phone, and same-day
                service may be available.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  className="rounded-2xl bg-white px-6 py-4 text-center text-base font-semibold text-emerald-700 shadow-sm transition hover:scale-[1.02]"
                >
                  Chat on WhatsApp
                </a>
                <a
                  href={`tel:${phoneLink}`}
                  className="rounded-2xl border border-white/70 px-6 py-4 text-center text-base font-semibold text-white transition hover:bg-white/10"
                >
                  Call {phoneNumber}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <Logo className="h-9 w-10 shrink-0" />
              <p className="text-lg font-extrabold uppercase leading-tight text-blue-900">{business.name}</p>
            </div>
            <p className="mt-3 text-slate-600">
              Professional cleaning services for homes, offices, Airbnb, and post-construction spaces in Abuja.
            </p>
            <p className="mt-2 text-sm text-slate-500">RC: {business.rcNumber}</p>
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
        <div className="border-t border-slate-200 py-5 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {business.name}. All rights reserved.
        </div>
      </footer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(business.jsonLd) }}
      />
    </div>
  );
}