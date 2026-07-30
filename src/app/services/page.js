import CTA from "@/components/sections/CTA";
import BookingProcess from "@/components/services/BookingProcess";
import FAQ from "@/components/services/FAQ";
import HeroServices from "@/components/services/HeroServices";
import ServicesGrid from "@/components/services/ServicesGrid";

export const metadata = {
    title: "Our Services | The Yatra Company",

    description: "Explore The YAtra Company's taxi services including airport transfers, outstation cab booking, one-way trips, and local sightseeing across India.",

    keywords: [
        "Taxi Services",
        "Aiport Transfers",
        "Outstation Cab",
        "One Way Taxi",
        "Round Trip Taxi",
        "Local Cab Booking",
        "Cab Rental India"
    ]
}

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