// Company details from the Atlanta Cleaners letterhead. Edit here to update the whole site.
const phones = [
  { display: "+234 816 448 3402", tel: "+2348164483402" },
  { display: "+234 810 252 6124", tel: "+2348102526124" },
  { display: "+234 818 362 3451", tel: "+2348183623451" },
];

const emails = [
  "atlantacleanersnigerialimited@gmail.com",
  "atlantacleanersnigltd@gmail.com",
];

const address = {
  lines: [
    "Standard Plaza, Plot 1248, No 2 Kusti Close,",
    "Off Aminu Kano Crescent, Last Floor,",
    "Wuse 2, Abuja",
  ],
  street: "Standard Plaza, Plot 1248, No 2 Kusti Close, Off Aminu Kano Crescent, Last Floor",
  locality: "Wuse 2, Abuja",
};

export const airportName = "Nnamdi Azikiwe International Airport";

const name = "Atlanta Cleaners Nigeria Ltd";
const description =
  "Professional home, office, Airbnb and post-construction cleaning in Abuja. Trusted to clean the local wing of Nnamdi Azikiwe International Airport. Call or WhatsApp for a free quote.";

export const business = {
  name,
  rcNumber: "1095934",
  description,
  phones,
  emails,
  address,
  // Number used for the WhatsApp buttons (digits only, with country code).
  whatsapp: "2348164483402",
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "HouseCleaningService",
    name,
    description,
    telephone: phones.map((phone) => phone.tel),
    email: emails,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.locality,
      addressRegion: "FCT",
      addressCountry: "NG",
    },
    areaServed: { "@type": "City", name: "Abuja" },
  },
};

// WhatsApp chat link with a pre-filled message.
export function whatsappLink(message = "Hello, I’d like to request a cleaning quote.") {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}
