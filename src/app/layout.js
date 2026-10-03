import "./globals.css";
import { Geist } from "next/font/google";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import siteConfig from "../config/siteConfig";

const geist = Geist({
  subsets: ["latin"],
});

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.siteUrl}/#website`,
      name: siteConfig.companyName,
      url: siteConfig.siteUrl,
      inLanguage: "en-IN",
    },

    {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.siteUrl}/#business`,

      name: siteConfig.companyName,
      url: siteConfig.siteUrl,

      image: `${siteConfig.siteUrl}/Images/logo1.jpeg`,
      logo: `${siteConfig.siteUrl}/Images/logo1.jpeg`,

      telephone: siteConfig.phone,
      email: siteConfig.email,

      priceRange: "₹₹",

      address: {
        "@type": "PostalAddress",
        ...siteConfig.address,
      },

      areaServed: siteConfig.serviceArea,

      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      ],

      sameAs: [
        siteConfig.instagram,
        siteConfig.facebook,
      ].filter(Boolean),
    },
  ],
};

export const metadata = {
  metadataBase: new URL(siteConfig.siteUrl),

  title: {
    default: "Raahify | Trusted Taxi & Cab Service in Lucknow",
    template: "%s | Raahify",
  },

  description:
    "Reliable airport pickup, drop, local, and outstation taxi service in Lucknow. Professional drivers, 24*7 support. Book on WhatsApp or call now.",

  keywords: [
    "Taxi Service in Lucknow",
    "Airport Taxi Lucknow",
    "Airport Pickup",
    "Airport Drop",
    "Outstation Taxi",
    "Cab Booking",
    "Travel Company",
    "Raahify",
  ],

  authors: [
    {
      name: "Raahify",
    },
  ],

  creator: "Raahify",
  publisher: "Raahify",

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Raahify | Trusted Taxi & Cab Service in Lucknow",
    description:
      "Reliable airport pickup, drop, local and outstation taxi service in Lucknow.",
    url: siteConfig.siteUrl,
    siteName: siteConfig.companyName,
    images: [
      {
        url: `${siteConfig.siteUrl}/Images/logo1.jpeg`,
        width: 1336,
        height: 518,
        alt: "Raahify Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Raahify | Trusted Taxi & Cab Service in Lucknow",
    description:
      "Reliable airport pickup, drop, local and outstation taxi service in Lucknow.",
    images: [`${siteConfig.siteUrl}/Images/logo1.jpeg`],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <Navbar />

        <main>{children}</main>

        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      </body>

      <GoogleAnalytics gaId={siteConfig.gaId} />
    </html>
  );
}