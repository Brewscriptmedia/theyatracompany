import BookingForm from "@/components/contact/BookingForm";
import ContactInfo from "@/components/contact/ContactInfo";
import HeroContact from "@/components/contact/HeroContact";
import Map from "@/components/contact/Map";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "Book a Taxi in Lucknow | Contact ",

  description:
    "Contact Rahify in Lucknow to book airport transfers, local taxis, outstation cabs or corporate travel. Call or WhatsApp us for instant booking.",

  keywords: [
    "Contact Rahify",
    "Taxi Booking Lucknow",
    "Airport Taxi",
    "Cab Booking",
    "Contact Taxi Service",
  ],

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contact Rahify",
    description:
      "Book airport, local and outstation taxi services in Lucknow.",
    url: "https://rahify.com/contact",
    siteName: "Rahify",
    images: [
      {
        url: "https://rahify.com/Images/logo1.jpeg",
        width: 1336,
        height: 518,
        alt: "Rahify",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Rahify",
    description:
      "Call or WhatsApp us for reliable taxi services in Lucknow.",
    images: ["https://rahify.com/Images/logo1.jpeg"],
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