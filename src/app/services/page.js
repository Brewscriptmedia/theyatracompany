import CTA from "@/components/sections/CTA";
import BookingProcess from "@/components/services/BookingProcess";
import FAQ from "@/components/services/FAQ";
import HeroServices from "@/components/services/HeroServices";
import ServicesGrid from "@/components/services/ServicesGrid";

export const metadata = {
  title:
    "Taxi Services – Airport, Local, Outstation & Corporate",

  description:
    "Explore airport pickup & drop, local taxi, outstation travel, corporate transportation and custom cab services in Lucknow with The Yatra Company.",

  keywords: [
    "Airport Taxi",
    "Local Taxi",
    "Outstation Taxi",
    "Corporate Taxi",
    "Taxi Services Lucknow",
    "Cab Booking",
  ],

  alternates: {
    canonical: "/services",
  },

  openGraph: {
    title: "Taxi Services | The Yatra Company",
    description:
      "Airport, local, corporate and outstation taxi services in Lucknow.",
    url: "https://theyatracompany.com/services",
    siteName: "The Yatra Company",
    images: [
      {
        url: "/Images/logo1.jpeg",
        width: 1336,
        height: 518,
        alt: "The Yatra Company",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Taxi Services | The Yatra Company",
    description:
      "Professional taxi services in Lucknow for airport, local and outstation travel.",
    images: ["/Images/logo1.jpeg"],
  },
};

export default function ServicesPage(){
    return(
        <>
        <HeroServices/>
        <ServicesGrid/>
        <BookingProcess/>
        <FAQ/>
        <CTA/>
        </>
    )
}