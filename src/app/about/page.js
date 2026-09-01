import CompanyStory from "@/components/about/CompanyStory";
import HeroAbout from "@/components/about/HeroAbout";
import MissionVision from "@/components/about/MissionVision";
import Stats from "@/components/about/Stats";
import WhyUs from "@/components/about/WhyUs";
import CTA from "@/components/sections/CTA";
import { keyframes } from "framer-motion";

export const metadata = {
  title: "About Us | Trusted Cab Service in Lucknow",

  description:
    "Learn about Raahify, a trusted taxi service in Lucknow offering airport transfers, local cabs, outstation travel and corporate transportation.",

  keywords: [
    "About Raahify",
    "Taxi Company Lucknow",
    "Cab Booking",
    "Airport Taxi",
    "Outstation Taxi",
    "Corporate Taxi",
  ],

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: "About Raahify",
    description:
      "Reliable taxi service in Lucknow with experienced drivers and 24×7 support.",
    url: "https://raahify.com/about",
    siteName: "Raahify",
    images: [
      {
        url: "/Images/logo1.jpeg",
        width: 1336,
        height: 518,
        alt: "Raahify",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Raahify",
    description:
      "Trusted taxi service in Lucknow for airport, local and outstation travel.",
    images: ["/Images/logo1.jpeg"],
  },
};


export default function AboutPage(){
    return (
        <>
            <HeroAbout/>
            <CompanyStory/>
            <MissionVision/>
            <Stats/>
            <WhyUs/>
            <CTA/>
        </>
    )
}