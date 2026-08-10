import { guides } from "@/data/travelGuides";

const baseUrl = "https://theyatracompany.com";

export default function sitemap(){
    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/travel-guides`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ]

    const guidePages = guides.map((guide) => ({
        url: `${baseUrl}/travel-guides/${guide.slug}`,
        lastModified: guide.schema?.lastUpdated
            ? new Date(guide.schema.lastUpdated)
            : new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    }));

    return [...staticPages, ...guidePages];
}