import CompanyStory from "@/components/about/CompanyStory";
import HeroAbout from "@/components/about/HeroAbout";
import MissionVision from "@/components/about/MissionVision";
import Stats from "@/components/about/Stats";
import WhyUs from "@/components/about/WhyUs";
import { keyframes } from "framer-motion";

export const metadata = {
    title: "About Us | The Yatra Company",
    
    description: "Learn about The Yatra Company, India's trusted taxi and travel service offering airport transfers, outstation cabs, and reliable transportation.",

    keywords: [
        "About The Yatra Company",
        "Taxi Company India",
        "Cab Booking",
        "Airport Taxi",
        "Outstation Taxi",
        "Travel Company"
    ]
}


export default function AboutPage(){
    return (
        <>
            <HeroAbout/>
            <CompanyStory/>
            <MissionVision/>
            <Stats/>
            <WhyUs/>
        </>
    )
}