import "./globals.css";
import { Geist } from "next/font/google"

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import siteConfig from "@/config/siteConfig";

const geist = Geist({
  subsets: ["latin"]
});

const schema = {
  "@context": "https://schema.org",
  "@type": "TaxiService",

  name: siteConfig.companyName,
  url: "https://theyatracompany.com",
  image: "https://theyatracompany.com/Images/logo1.jpeg",
  logo: "https://theyatracompany.com/Images/logo1.jpeg",

  telephone: siteConfig.phone,
  email: siteConfig.email,

  priceRange: "₹₹",

  address: {
    "@type": "PostalAddress",
    streetAddress: "T9-1103, Sun Breeze 1, Faizabad Road, BBD Green City",
    addressLocality: "Lucknow",
    AddressRegion: "Uttar Pradesh",
    postalCode: "226028",
    addressCountry: "IN"
  },

  areaServed: {
    "@type": "City",
    name: "Lucknow"
  },

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednessday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      open: "00:00",
      close: "23:59"
    },
  ],

  sameAs: [
    siteConfig.instagram,
    siteConfig.facebook,
  ]
}

export const metadata = {
  metadataBase: new URL("https://theyatracompany.com"),

  title: {
    default: "The Yatra Company | Trusted Taxi & Cab Service in Lucknow",
    template: "%s | The Yatra Company",
  },

  description:
    "Reliable tairport pickup, drop, local, and outstation taxi service in Lucknow. Professional drivers, 24*7 support. Book on Whatsapp or Call now.",

  keywords: [
    "Taxi Service in Lucknow",
    "Airport Taxi Lucknow",
    "Airport Pickup",
    "Airport Drop",
    "Outstation Taxi",
    "Cab Booking",
    "Travel Company",
    "The Yatra Company"
  ],

  openGraph: {
    title: "The Yatra Company | Trusted Taxi & Cab Service in Lucknow",
    description: "Reliable airport pickup, drop, local and outstation taxi service in Lucknow.",
    url: "https://theyatracompany.com",
    siteName: "The Yatra Company",
    images: [
      {
        url: "/Images/logo1.jpeg",
        width: 1336,
        height: 518,
        alt: "The Yatra Company Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "The Yatra Company | Trusted Taxi & Cab Service in Lucknow",
    description: "Reliable airport pickup, drop, local and outstation taxi service in Lucknow.",
    images: ["/Images/logo1.jpeg"],
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

      <GoogleAnalytics gaId={siteConfig.gaId}/>
    </html>
  );
}