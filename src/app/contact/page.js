import BookingForm from "@/components/contact/BookingForm";
import ContactInfo from "@/components/contact/ContactInfo";
import HeroContact from "@/components/contact/HeroContact";
import Map from "@/components/contact/Map";
import CTA from "@/components/sections/CTA";

export const metadata = {
    title: "Contact US | The Yatra Company",

    description: "Get in touch with The Yarta Company for airport transfers, outstation taxis, local cab booking, and travel assistance across India.",

    keywords: [
        "Contact The Yatra Company",
        "Taxi Contact",
        "Cab Booking",
        "Airport Taxi",
        "Outstation Taxi",
        "Travel Assistance"
    ]
}

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