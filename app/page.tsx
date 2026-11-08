import Image from "next/image";
import Link from "next/link";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import PostCard from "./components/PostCard";
import WhatsAppFloat from "./components/WhatsAppFloat";
import {
  BuildingIcon,
  CheckIcon,
  ClockIcon,
  HelmetIcon,
  HomeIcon,
  KeyIcon,
  LeafIcon,
  PhoneIcon,
  PlaneIcon,
  ShieldIcon,
  WhatsAppIcon,
} from "./components/Icons";
import { airportName, business, whatsappLink } from "./business";
import { faqs, gallery, photos, services, showSamples, steps, testimonials, visibleGallery } from "./content";
import { getPosts } from "./blog/posts";

const eyebrow = "text-sm font-semibold uppercase tracking-[0.2em] text-[#2e9e4f]";
const sectionTitle = "mt-3 text-3xl font-extrabold tracking-tight text-[#0f2a6b] md:text-4xl";
const serviceIcons = [HomeIcon, BuildingIcon, KeyIcon, HelmetIcon];

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-2xl bg-lime-400 px-6 py-4 text-base font-bold text-[#0f2a6b] shadow-lg shadow-lime-500/20 transition hover:bg-lime-300";
const btnGhost =
  "inline-flex items-center justify-center gap-2 rounded-2xl border border-white/40 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10";

export default function Page() {
  const { phones } = business;
  const phoneHref = `tel:${phones[0].tel}`;
  const whatsappHref = whatsappLink();

  const visibleTestimonials = testimonials.filter((t) => showSamples || !t.sample);
  const latestPosts = getPosts().slice(0, 3);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <main id="top">
        {/* Hero: airport glass-wall photo as the main image */}
        <section className="relative overflow-hidden bg-[#0f2a6b] text-white">
          {/* Photo: full-width banner on mobile, right-hand bleed on large screens */}
          <div className="relative aspect-[4/3] w-full sm:aspect-[16/9] lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-[60%]">
            <Image
              src={photos.airport.src}
              alt={photos.airport.alt}
              fill
              preload
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover object-[75%_center]"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#0f2a6b] via-[#0f2a6b]/10 to-transparent lg:bg-gradient-to-r lg:from-[#0f2a6b] lg:via-[#0f2a6b]/30 lg:to-transparent"
              aria-hidden="true"
            />
            <div className="absolute bottom-8 right-28 hidden items-center gap-3 rounded-2xl bg-white/95 p-4 text-slate-900 shadow-xl backdrop-blur lg:flex">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime-100 text-[#2e9e4f]">
                <PlaneIcon className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm font-bold text-[#0f2a6b]">Our team on duty</p>
                <p className="text-xs text-slate-500">Local wing, {airportName}</p>
              </div>
            </div>
          </div>
          <div
            className="pointer-events-none absolute inset-0 hidden lg:block"
            style={{
              background:
                "radial-gradient(50rem 30rem at -10% 110%, rgba(46,158,79,0.35), transparent 60%)",
            }}
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-2 lg:py-28">
            <div className="lg:max-w-[46%]">
              <a
                href="#airport"
                className="inline-flex items-center gap-2 rounded-full border border-lime-300/40 bg-white/10 px-4 py-2 text-sm font-medium text-lime-200 backdrop-blur transition hover:bg-white/15"
              >
                <PlaneIcon className="h-4 w-4 shrink-0" />
                <span>Trusted at the local wing of {airportName}</span>
              </a>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl xl:text-6xl">
                The cleaners Abuja’s <span className="text-lime-300">airport</span> trusts, now at your door.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
                Professional, eco-friendly cleaning for homes, offices, Airbnb short-lets, and post-construction
                sites across Abuja, delivered by the same trained, uniformed team that keeps the local wing of{" "}
                {airportName} spotless.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={whatsappHref} className={btnPrimary}>
                  <WhatsAppIcon /> Free Quote on WhatsApp
                </a>
                <a href={phoneHref} className={btnGhost}>
                  <PhoneIcon /> Call Now
                </a>
              </div>
              <ul className="mt-10 grid max-w-xl grid-cols-1 gap-3 text-sm text-blue-100 sm:grid-cols-3">
                {[
                  { icon: ClockIcon, text: "Same-day service" },
                  { icon: LeafIcon, text: "Eco-friendly products" },
                  { icon: ShieldIcon, text: `RC ${business.rcNumber}` },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-2">
                    <Icon className="h-5 w-5 shrink-0 text-lime-300" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <section aria-label="Why clients trust us" className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4">
            {[
              { title: "Airport-trusted", text: "Regular cleaning at the local wing" },
              { title: "Same-day", text: "Fast turnaround when you need it" },
              { title: "Eco-friendly", text: "Safer products for people and spaces" },
              { title: "All of Abuja", text: "Homes, offices, and short-lets" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2e9e4f] text-white">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <div>
                  <p className="font-bold text-[#0f2a6b]">{item.title}</p>
                  <p className="text-sm text-slate-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Photo strip: the rest of the staff photos, right under the hero */}
        <section aria-label="Our team at work" className="bg-white py-10">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
              {gallery
                .filter((item) => item.src && item.src !== photos.airport.src)
                .map((item, index) => (
                  <a
                    key={item.title}
                    href="#gallery"
                    className={`group relative block overflow-hidden rounded-2xl bg-slate-100 ${
                      index === 0 ? "col-span-2 md:col-span-1" : ""
                    }`}
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={item.src!}
                        alt={`${item.title}: ${item.caption}`}
                        fill
                        sizes="(min-width: 768px) 20vw, 50vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 pb-2 pt-8 text-xs font-semibold text-white">
                      {item.title}
                    </span>
                  </a>
                ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-20 bg-slate-50 py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl">
              <p className={eyebrow}>Our Services</p>
              <h2 className={sectionTitle}>Cleaning solutions for every kind of space</h2>
              <p className="mt-4 text-lg text-slate-600">
                Whether you need routine cleaning, a same-day turnaround, or a detailed post-project cleanup,
                we’re ready to help.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service, index) => {
                const Icon = serviceIcons[index % serviceIcons.length];
                return (
                  <div
                    key={service.title}
                    className="group rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1d3f9a]/10 text-[#1d3f9a] transition group-hover:bg-[#1d3f9a] group-hover:text-white">
                      <Icon />
                    </span>
                    <h3 className="mt-5 text-xl font-bold text-[#0f2a6b]">{service.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Airport */}
        <section id="airport" className="scroll-mt-20 py-20 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] shadow-xl">
                <Image
                  src={photos.team.src}
                  alt={photos.team.alt}
                  width={1260}
                  height={827}
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="h-auto w-full"
                />
              </div>
              <div className="absolute -right-3 -top-4 rounded-2xl bg-[#0f2a6b] px-5 py-3 text-white shadow-lg">
                <p className="text-xs uppercase tracking-widest text-lime-300">The team behind</p>
                <p className="text-sm font-bold">Abuja Airport · Local Wing</p>
              </div>
            </div>
            <div>
              <p className={eyebrow}>Airport-Trusted</p>
              <h2 className={sectionTitle}>
                We clean the local wing of {airportName}
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Few places demand higher standards than an international airport. Our team carries out regular
                cleaning at the local wing, where floors, glass, and public areas must stay spotless for thousands
                of travellers every day.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                That same discipline, punctuality, and attention to detail comes with every home, office, and
                short-let we clean.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "High-traffic floor care",
                  "Glass and frontage cleaning",
                  "Corridors, offices, and lounges",
                  "Safe, consistent routines",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 text-slate-800">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime-400 text-[#0f2a6b]">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="scroll-mt-20 bg-[#0f2a6b] py-20 text-white md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-300">How It Works</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                Booking a clean takes three simple steps
              </h2>
            </div>
            <ol className="mt-12 grid gap-6 md:grid-cols-3">
              {steps.map((step, index) => (
                <li key={step.title} className="rounded-[1.75rem] border border-white/15 bg-white/5 p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-400 text-lg font-extrabold text-[#0f2a6b]">
                    {index + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-bold">{step.title}</h3>
                  <p className="mt-3 leading-7 text-blue-100">{step.description}</p>
                </li>
              ))}
            </ol>
            <a href={whatsappHref} className={`${btnPrimary} mt-10`}>
              <WhatsAppIcon /> Start on WhatsApp
            </a>
          </div>
        </section>

        {/* Gallery */}
        {visibleGallery.length > 0 && (
          <section id="gallery" className="scroll-mt-20 py-20 md:py-24">
            <div className="mx-auto max-w-7xl px-6">
              <div className="max-w-2xl">
                <p className={eyebrow}>Our Team at Work</p>
                <h2 className={sectionTitle}>Real staff. Real jobs. Real results.</h2>
              </div>
              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {visibleGallery.map((item, index) => (
                  <figure
                    key={item.title}
                    className={`group relative overflow-hidden rounded-[1.75rem] bg-slate-100 ${
                      index === 0 ? "sm:col-span-2 lg:row-span-2" : ""
                    }`}
                  >
                    <div className={`relative ${index === 0 ? "aspect-[4/3] lg:aspect-auto lg:h-full" : "aspect-[4/3]"}`}>
                      {item.src ? (
                        <Image
                          src={item.src}
                          alt={`${item.title}: ${item.caption}`}
                          fill
                          sizes={index === 0 ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-xs font-medium uppercase tracking-wider text-slate-400">
                          Photo coming soon
                        </div>
                      )}
                    </div>
                    <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5 pt-14 text-white">
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-white/80">{item.caption}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* About */}
        <section id="about" className="scroll-mt-20 bg-slate-50 py-20 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
            <div>
              <p className={eyebrow}>About Us</p>
              <h2 className={sectionTitle}>A dependable cleaning team Abuja clients can trust</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                {business.name} serves homeowners, offices, Airbnb hosts, and post-construction projects with a
                simple promise: a cleaner, healthier, and more welcoming space every time. Our work is built on
                professionalism, prompt service, eco-friendly methods, and trusted staff.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Our experience cleaning the local wing of {airportName} means disciplined standards and
                attention to detail on every job, big or small.
              </p>
            </div>
            <div className="rounded-[2rem] bg-white p-8 shadow-xl ring-1 ring-slate-200">
              <h3 className="text-2xl font-bold text-[#0f2a6b]">Why we stand out</h3>
              <ul className="mt-6 space-y-4 text-slate-700">
                {[
                  "Trusted cleaners at the local wing of an international airport",
                  "Same-day service when available",
                  "Eco-friendly cleaning approach",
                  "Quick communication through WhatsApp and phone",
                  "Flexible service for homes, offices, and short-let properties",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2e9e4f] text-white">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Testimonials (samples show only in local development) */}
        {visibleTestimonials.length > 0 && (
          <section id="testimonials" className="scroll-mt-20 py-20 md:py-24">
            <div className="mx-auto max-w-7xl px-6">
              <div className="max-w-2xl">
                <p className={eyebrow}>Testimonials</p>
                <h2 className={sectionTitle}>What our clients say</h2>
              </div>
              <div className="mt-12 grid gap-6 md:grid-cols-3">
                {visibleTestimonials.map((t, index) => (
                  <figure key={index} className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
                    <p className="text-amber-500" aria-hidden="true">★★★★★</p>
                    <blockquote className="mt-4 leading-7 text-slate-700">“{t.quote}”</blockquote>
                    <figcaption className="mt-5 text-sm">
                      <span className="font-semibold text-slate-900">{t.name}</span>
                      <span className="block text-slate-500">{t.detail}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section id="faq" className={`scroll-mt-20 py-20 md:py-24 ${visibleTestimonials.length > 0 ? "bg-slate-50" : ""}`}>
          <div className="mx-auto max-w-3xl px-6">
            <p className={eyebrow}>FAQ</p>
            <h2 className={sectionTitle}>Frequently asked questions</h2>
            <div className="mt-10 divide-y divide-slate-200 rounded-[1.75rem] border border-slate-200 bg-white">
              {faqs.map((faq) => (
                <details key={faq.question} className="group px-6 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <span className="text-2xl leading-none text-[#2e9e4f] transition group-open:rotate-45" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Latest blog posts */}
        {latestPosts.length > 0 && (
          <section id="blog" className="scroll-mt-20 py-20 md:py-24">
            <div className="mx-auto max-w-7xl px-6">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div className="max-w-2xl">
                  <p className={eyebrow}>From Our Blog</p>
                  <h2 className={sectionTitle}>Cleaning tips from the experts</h2>
                </div>
                <Link href="/blog" className="text-sm font-semibold text-[#1d3f9a] hover:underline">
                  View all articles →
                </Link>
              </div>
              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {latestPosts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contact CTA */}
        <section id="contact" className="scroll-mt-20 px-6 pb-20 md:pb-24">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#0f2a6b] px-8 py-14 text-white shadow-2xl md:px-14">
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: "radial-gradient(40rem 20rem at 100% 0%, rgba(163,230,53,0.25), transparent 60%)" }}
              aria-hidden="true"
            />
            <div className="relative grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-300">Book Today</p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
                  Get airport-grade cleaning for your space.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
                  Free quotes, fast replies on WhatsApp and by phone, and same-day service when available.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a href={whatsappHref} className={btnPrimary}>
                  <WhatsAppIcon /> Chat on WhatsApp
                </a>
                {phones.map((phone) => (
                  <a key={phone.tel} href={`tel:${phone.tel}`} className={btnGhost}>
                    <PhoneIcon /> {phone.display}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <WhatsAppFloat href={whatsappHref} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(business.jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </div>
  );
}
