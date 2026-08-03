import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "Taxi Service in Lucknow | Airport Cabs & Outstation Travel",

  description:
    "Book trusted taxi services in Lucknow with The Yatra Company — airport transfers, local cabs, outstation trips, corporate rides & 24×7 professional drivers",

  keywords: [
    "Taxi Service in Lucknow",
    "Airport Taxi Lucknow",
    "Cab Booking Lucknow",
    "Outstation Taxi",
    "Corporate Taxi",
    "Local Taxi",
    "The Yatra Company",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Taxi Service in Lucknow | The Yatra Company",
    description:
      "Airport transfers, local taxis, outstation trips and corporate travel in Lucknow.",
    url: "https://theyatracompany.com",
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
    title: "Taxi Service in Lucknow | The Yatra Company",
    description:
      "Airport transfers, local taxis and outstation cab services.",
    images: ["/Images/logo1.jpeg"],
  },
};

export default function Home(){
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  )
}