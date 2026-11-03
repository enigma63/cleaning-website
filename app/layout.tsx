import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { business } from "./business";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Atlanta Cleaners Nigeria Ltd | Cleaning Services in Abuja";

export const metadata: Metadata = {
  title,
  description: business.description,
  keywords: [
    "cleaning services Abuja",
    "cleaning company Abuja",
    "office cleaning Abuja",
    "home cleaning Abuja",
    "Airbnb cleaning Abuja",
    "post-construction cleaning Abuja",
    "Wuse 2 cleaners",
  ],
  openGraph: {
    title,
    description: business.description,
    siteName: business.name,
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: business.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
