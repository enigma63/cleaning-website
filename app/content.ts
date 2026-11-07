// Page copy for the homepage sections. Edit here to update the site.

// Sample entries (sample: true) only show while running locally with `npm run dev`
// and are hidden on the live site, so placeholder reviews and photos never go public.
export const showSamples = process.env.NODE_ENV !== "production";

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#airport", label: "Airport" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export const services = [
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

export const benefits = [
  "Same-day service available",
  "Eco-friendly cleaning approach",
  "Trusted, trained, and professional staff",
  "Fast response by WhatsApp or phone",
  "Residential and commercial experience",
  "Attention to detail and consistent results",
];

export const steps = [
  {
    title: "Tell us what you need",
    description:
      "Send a WhatsApp message or call us with the type of space, its size, and your preferred date.",
  },
  {
    title: "Get a free quote",
    description:
      "We confirm the scope of work and give you a clear price before anything is booked.",
  },
  {
    title: "We clean, you relax",
    description:
      "Our trained team arrives on time with the right equipment and leaves your space spotless.",
  },
];

// Replace the samples with real customer feedback (with their permission), then delete `sample: true`.
export const testimonials = [
  {
    quote: "Sample review: the team was on time, thorough, and left our office spotless.",
    name: "Sample Customer",
    detail: "Office client, Wuse 2",
    sample: true,
  },
  {
    quote: "Sample review: quick turnaround between guests and great attention to detail.",
    name: "Sample Customer",
    detail: "Airbnb host, Maitama",
    sample: true,
  },
  {
    quote: "Sample review: they handled all the dust after our renovation in a single day.",
    name: "Sample Customer",
    detail: "Homeowner, Gwarinpa",
    sample: true,
  },
];

// Staff photos live in public/photos/. Swap `team.jpg` for the photographer's group photo when it arrives
// (keep the same file name and nothing else needs to change).
export const photos = {
  team: { src: "/photos/team.jpg", alt: "Atlanta Cleaners staff in green company uniforms" },
  airport: {
    src: "/photos/airport-windows.jpg",
    alt: "Atlanta Cleaners staff cleaning the glass frontage at the airport local wing, control tower in view",
  },
};

// Entries without a `src` show as placeholders locally and are hidden on the live site.
export const gallery: { title: string; caption: string; src?: string }[] = [
  { title: "Airport glass and frontage", caption: "High-reach window cleaning at the local wing", src: "/photos/airport-windows.jpg" },
  { title: "Corridor mopping", caption: "Floors and walkways kept spotless", src: "/photos/corridor-mopping.jpg" },
  { title: "Office hallway", caption: "Routine cleaning of shared spaces", src: "/photos/hallway-cleaning.jpg" },
  { title: "Reception area", caption: "First impressions, swept and polished", src: "/photos/reception-sweeping.jpg" },
  { title: "Entrances and steps", caption: "Outdoor areas cleared of dust and debris", src: "/photos/entrance-steps.jpg" },
  { title: "Our team", caption: "Trained, uniformed, and ready to work", src: "/photos/team.jpg" },
];

export const faqs = [
  {
    question: "Which areas of Abuja do you cover?",
    answer:
      "We serve homes and businesses across Abuja. Our office is in Wuse 2. Message us your location and we will confirm availability.",
  },
  {
    question: "Do you offer same-day cleaning?",
    answer:
      "Yes, same-day service is often available. Contact us as early as possible on WhatsApp or by phone and we will let you know.",
  },
  {
    question: "How much does a cleaning cost?",
    answer:
      "Pricing depends on the type and size of the space and the work required. Send us the details and we will give you a free, no-obligation quote.",
  },
  {
    question: "Do I need to provide cleaning supplies?",
    answer:
      "No. Our team brings the equipment and cleaning products needed for the job, using an eco-friendly approach.",
  },
  {
    question: "Do you clean offices and commercial spaces?",
    answer:
      "Yes. We clean offices and commercial premises, and our team handles regular cleaning at the local wing of Nnamdi Azikiwe International Airport, Abuja.",
  },
  {
    question: "Do you really clean at the airport?",
    answer:
      "Yes. Our staff carry out regular cleaning at the local wing of Nnamdi Azikiwe International Airport, Abuja, including floors, glass frontage, and high-traffic public areas.",
  },
  {
    question: "How do I book?",
    answer:
      "Tap any WhatsApp button on this page or call one of our numbers. Tell us what you need and we will arrange a time that suits you.",
  },
];
