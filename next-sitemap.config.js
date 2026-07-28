/**@type {import('next-sitemap').IConfig} */

const { userAgent } = require('next/server');

module.exports= {
    siteUrl: "https://theyatracompany.com",
    generateRobotsTxt: true,
    changefreq: "weekly",
    priority: 0.7,
    sitemapSize: 5000,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
    },
}