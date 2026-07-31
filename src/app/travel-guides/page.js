import CTA from "@/components/sections/CTA";
import GuideGrid from "@/components/travel-guides/GuideGrid";
import HeroGuides from "@/components/travel-guides/HeroGuides";

export const metadata = {
    title: "Travel Guides | Taxi Routes, Airport Transfers & Travel Tips",
    description: "Explore travel guides, airport transfer information, destination tips and taxi booking advice from The Yatra Company.",

    alternates: {
        canonical: "/travel-guides",
    },

    openGraph: {
        title: "Travel Guides | The Yatra Company",
        description: "Travel guides, airport taxi tips and destination information.",
        url: "https://theyatracompany.com/travel-guides",
        image: ["/Image/logo1.jpeg"],
    },

    twitter: {
        card: "summary_large_image",
        title: "Travel Guides | The Yatra Company",
        description: "Destination guides and taxi booking advice.",
        image: ["/Images/logo1.jpeg"],
    },
};

export default function TravelGuidePage() {
    return (
        <>
            <HeroGuides/>
            <GuideGrid/>
            <CTA/>
        </>
    )
}