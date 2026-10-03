const siteConfig = {
  companyName: process.env.NEXT_PUBLIC_COMPANY_NAME || "Raahify",

  siteUrl: "https://raahify.com",

  phone: process.env.NEXT_PUBLIC_PHONE,
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP,
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM,
  facebook: process.env.NEXT_PUBLIC_FACEBOOK,
  googleMap: process.env.NEXT_PUBLIC_GOOGLE_MAP,
  email: process.env.NEXT_PUBLIC_EMAIL,
  gaId: process.env.NEXT_PUBLIC_GA_ID,
  googleReview: process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL,

  address: {
    streetAddress: "T9-1103, Sun Breeze 1, Faizabad Road, BBD Green City",
    addressLocality: "Lucknow",
    addressRegion: "Uttar Pradesh",
    postalCode: "226028",
    addressCountry: "IN",
  },

  serviceArea: {
    "@type": "City",
    name: "Lucknow",
  },
};

export default siteConfig;