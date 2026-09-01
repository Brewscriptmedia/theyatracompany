import BookingForm from "@/components/contact/BookingForm";
import ContactInfo from "@/components/contact/ContactInfo";
import HeroContact from "@/components/contact/HeroContact";
import Map from "@/components/contact/Map";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "Book a Taxi in Lucknow | Contact ",

  description:
    "Contact Raahify in Lucknow to book airport transfers, local taxis, outstation cabs or corporate travel. Call or WhatsApp us for instant booking.",

  keywords: [
    "Contact Raahify",
    "Taxi Booking Lucknow",
    "Airport Taxi",
    "Cab Booking",
    "Contact Taxi Service",
  ],

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contact Raahify",
    description:
      "Book airport, local and outstation taxi services in Lucknow.",
    url: "https://raahify.com/contact",
    siteName: "Raahify",
    images: [
      {
        url: "https://raahify.com/Images/logo1.jpeg",
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
    title: "Contact Raahify",
    description:
      "Call or WhatsApp us for reliable taxi services in Lucknow.",
    images: ["https://raahify.com/Images/logo1.jpeg"],
  },
};

export default function ContactPage(){
    return(
        <>
        <HeroContact/>
        <ContactInfo/>
        <BookingForm/>
        <Map/>
        <CTA/>
        </>
    )
}