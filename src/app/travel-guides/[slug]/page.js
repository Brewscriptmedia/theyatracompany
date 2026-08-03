import { notFound } from "next/navigation";
import Image from "next/image";
import siteConfig from "@/config/siteConfig";

import { guides } from "@/data/travelGuides";

import styles from "./GuidePage.module.css";

export async function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);

  if (!guide) {
    return {
      title: "Guide Not Found",
    };
  }

  return {
    title: guide.seo.metaTitle,
    description: guide.seo.metaDescription,
    keywords: guide.seo.keywords,

    alternates: {
      canonical: guide.seo.canonical,
    },

    openGraph: {
      title: guide.seo.ogTitle,
      description: guide.seo.ogDescription,
      url: guide.seo.canonical,
      images: [guide.seo.ogImage],
    },

    twitter: {
      card: "summary_large_image",
      title: guide.seo.ogTitle,
      description: guide.seo.ogDescription,
      images: [guide.seo.ogImage],
    },
  };
}

export default async function GuidePage({ params }) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);

  if (!guide) notFound();

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: guide.hero.title,
      description: guide.seo.metaDescription,
      url: guide.seo.canonical,
      datePublished: guide.schema.publishedDate,
      dateModified: guide.schema.lastUpdated,
      inLanguage: "en-IN",
      isPartOf: {
        "@type": "WebSite",
        name: "The Yatra Company",
        url: "https://theyatracompany.com",
      },
    },

    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: guide.hero.title,
      description: guide.taxi.service,
      provider: {
        "@type": "LocalBusiness",
        name: "The Yatra Company",
        url: "https://theyatracompany.com",
        telephone: siteConfig.phone,
      },
      areaServed: guide.geo.serviceArea,
      serviceType: "Taxi Service",
    },

    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "The Yatra Company",
      image: `https://theyatracompany.com${guide.hero.heroImage}`,
      url: "https://theyatracompany.com",
      telephone: siteConfig.phone,
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "T9-1103, Sun Breeze 1, Faizabad Road",
        addressLocality: "Lucknow",
        addressRegion: "Uttar Pradesh",
        postalCode: "226028",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: guide.geo.latitude,
        longitude: guide.geo.longitude,
      },
      areaServed: guide.geo.serviceArea,
    },

    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: guide.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },

    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://theyatracompany.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Travel Guides",
          item: "https://theyatracompany.com/travel-guides",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: guide.hero.title,
          item: guide.seo.canonical,
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <main className={styles.page}>
        <div className={styles.container}>
          {/* HERO */}

          <section className={styles.hero}>
            <span>{guide.hero.badge}</span>

            <h1>{guide.hero.title}</h1>

            <p>{guide.hero.description}</p>

            <Image
              src={guide.hero.heroImage}
              alt={guide.hero.heroImageAlt}
              width={1200}
              height={700}
              className={styles.heroImage}
            />
          </section>

          {/* QUICK INFO */}

          <section className={styles.quickInfo}>
            <h2>Quick Information</h2>

            <div className={styles.grid}>
              <div>
                <h3>From</h3>
                <p>{guide.quickInfo.from}</p>
              </div>

              <div>
                <h3>To</h3>
                <p>{guide.quickInfo.to}</p>
              </div>

              <div>
                <h3>Distance</h3>
                <p>{guide.quickInfo.distance}</p>
              </div>

              <div>
                <h3>Travel Time</h3>
                <p>{guide.quickInfo.duration}</p>
              </div>

              <div>
                <h3>Estimated Fare</h3>
                <p>{guide.quickInfo.estimatedFare}</p>
              </div>

              <div>
                <h3>Route</h3>
                <p>{guide.quickInfo.route}</p>
              </div>
            </div>
          </section>

          {/* ABOUT */}

          <section>
            <h2>About Destination</h2>

            <p>{guide.destination.about}</p>

            <h3>History</h3>

            <p>{guide.destination.history}</p>

            <h3>Why Visit</h3>

            <p>{guide.destination.whyVisit}</p>

            <h3>Climate</h3>

            <p>{guide.destination.climate}</p>
          </section>

          {/* TAXI */}

          <section>
            <h2>Taxi Service</h2>

            <p>{guide.taxi.service}</p>

            <h3>Pickup Points</h3>

            <ul>
              {guide.taxi.pickupPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3>Drop Points</h3>

            <ul>
              {guide.taxi.dropPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3>Available Cars</h3>

            <ul>
              {guide.taxi.availableCars.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          {/* ROUTE */}

          <section>
            <h2>Taxi Route</h2>

            <div className={styles.mapContainer}>
              <iframe
                src={guide.route.mapLink}
                title={`${guide.hero.title} Route Map`}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className={styles.map}
              />
            </div>

            <p>{guide.route.highway}</p>

            <p>{guide.route.roadCondition}</p>

            <h3>Travel Tips</h3>

            <ul>
              {guide.route.travelTips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </section>

          {/* THINGS TO DO */}

          <section>
            <h2>Things To Do</h2>

            <ul>
              {guide.thingsToDo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          {/* PRICING */}

          <section>
            <h2>Taxi Pricing</h2>

            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Car</th>

                  <th>One Way</th>

                  <th>Round Trip</th>

                  <th>Capacity</th>
                </tr>
              </thead>

              <tbody>
                {guide.pricing.map((car) => (
                  <tr key={car.car}>
                    <td>{car.car}</td>

                    <td>{car.oneWay}</td>

                    <td>{car.roundTrip}</td>

                    <td>{car.capacity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* WHY BOOK */}

          <section>
            <h2>Why Book With The Yatra Company?</h2>

            <ul>
              {guide.whyBook.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          {/* TESTIMONIALS */}

          <section>
            <h2>Customer Reviews</h2>

            {guide.testimonials.map((review) => (
              <div key={review.name} className={styles.review}>
                <p>{review.text}</p>

                <strong>{review.name}</strong>

                <span>{review.location}</span>
              </div>
            ))}
          </section>

          {/* FAQ */}

          <section>
            <h2>Frequently Asked Questions</h2>

            {guide.faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>

                <p>{faq.answer}</p>
              </details>
            ))}
          </section>

          {/* CTA */}

          <section className={styles.cta}>
            <h2>{guide.cta.heading}</h2>

            <p>{guide.cta.description}</p>

            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              {guide.cta.button}
            </a>
          </section>
        </div>
      </main>
    </>
  );
}
