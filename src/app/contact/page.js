import BookingForm from "@/components/contact/BookingForm";
import ContactInfo from "@/components/contact/ContactInfo";
import HeroContact from "@/components/contact/HeroContact";
import Map from "@/components/contact/Map";
import CTA from "@/components/sections/CTA";

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