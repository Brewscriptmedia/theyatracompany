import CTA from "@/components/sections/CTA";
import BookingProcess from "@/components/services/BookingProcess";
import FAQ from "@/components/services/FAQ";
import HeroServices from "@/components/services/HeroServices";
import ServicesGrid from "@/components/services/ServicesGrid";

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