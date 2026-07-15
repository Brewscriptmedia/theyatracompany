import CompanyStory from "@/components/about/CompanyStory";
import HeroAbout from "@/components/about/HeroAbout";
import MissionVision from "@/components/about/MissionVision";
import Stats from "@/components/about/Stats";
import WhyUs from "@/components/about/WhyUs";

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