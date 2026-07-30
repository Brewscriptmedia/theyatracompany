import BookingForm from "@/components/contact/BookingForm";
import ContactInfo from "@/components/contact/ContactInfo";
import HeroContact from "@/components/contact/HeroContact";
import Map from "@/components/contact/Map";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "Contact Us | The Yatra Company",

  description:
    "Contact The Yatra Company to book airport transfers, local taxis, outstation cabs or corporate transportation in Lucknow.",

  keywords: [
    "Contact The Yatra Company",
    "Taxi Booking Lucknow",
    "Airport Taxi",
    "Cab Booking",
    "Contact Taxi Service",
  ],

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contact The Yatra Company",
    description:
      "Book airport, local and outstation taxi services in Lucknow.",
    url: "https://theyatracompany.com/contact",
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
    title: "Contact The Yatra Company",
    description:
      "Call or WhatsApp us for reliable taxi services in Lucknow.",
    images: ["/Images/logo1.jpeg"],
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