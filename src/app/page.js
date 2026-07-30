import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "The Yatra Company | Reliable Taxi & Can booking Across India",

  description: "Book reliable airport transfers, outstation cabs, local taxis, one-way and round-trip cab rides with The Yatra Company. Safe, affordable and available across India.",

  keywords: [
    "Taxi Service India",
    "Cab Booking",
    "Airport Taxi",
    "Airport Transfer",
    "Outstation Taxi",
    "One Way Cab",
    "Round Trip Cab",
    "Local Taxi",
    "Travel Company",
    "The Yatra COmpany"
  ],
  
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "The Yatra Company | Reliable Taxi & Can booking Across India",
    description: "Book airport transfers, outstation cabs, local taxis and more with The Yatra Company.",
    url: "https://theyatracompany.com",
    siteName: "The Yatra Company",
    locale: "un_IN",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "The Yatra Company",
    description: "Reliable taxi services, airport transfers and outstation cab booking across India."
  }
}

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