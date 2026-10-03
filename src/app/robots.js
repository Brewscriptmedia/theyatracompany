
import siteConfig from "@/config/siteConfig";

export default function robots(){
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
        sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
    };
}