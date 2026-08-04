import { guides } from "@/data/travelGuides";
import { changefreq, priority } from "../../next-sitemap.config";

export default function sitemap(){
    const baseUrl = "https://theyatracompany.com";

    const staticPages = [
        "",
        "/about",
        "/services",
        "/travel-guides",
        "/contact",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: route === "" ? 1 : 0.8,
    }));

    const guidePages = guides.map((guide) => ({
        url: `${baseUrl}/travel-guides/${guide.slug}`,
        lastModified: guide.schema.lastUpdated,
        changeFrequency: "monthly",
        priority: 0.9,
    }));

    return [...staticPages, ...guidePages];
}