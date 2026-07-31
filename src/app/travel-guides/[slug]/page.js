import guides from "@/data/travelGuides";
import { notFound } from "next/navigation";
import Image from "next/image";
import styles from "./GuidePage.module.css";

export async function generateMetadata({ params }){
    const { slug } = await params;
    const guide = guides.find((g) => g.slug === slug);

    if (!guide){
        return{
            title: "Guide Not Found",
        };
    }

    return {
        title: `${guide.title} | The Yatra Company`,
        description: guide.description,

        alternates: {
            canonical: `https://theyatracompany.com/travel-guides/${guide.slug}`,
        },

        openGraph: {
            title: guide.title,
            description: guide.description,
            url: `https://theyatracompany.com/travel-guides/${guide.slug}`,
            image: [
                {
                    url: guide.image,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: guide.title,
            description: guide.description,
            image: [guide.image],
        },
    };
}

export default async function GuidePage({params}){
    const { slug } = await params
    const guide = guides.find((g) => g.slug === slug);

    if(!guide){
        notFound();
    }

    return (
        <main className={styles.page}>
            <div className={styles.container}>
                <span className={styles.category}>{guide.category}</span>

                <h1>{guide.title}</h1>

                <p className={styles.description}>{guide.description}</p>

                <div className={styles.imageWrapper}>
                    <Image
                        src={guide.image}
                        alt={guide.title}
                        width={1200}
                        height={700}
                        className={styles.image}
                    />
                </div>

                <div className={styles.infoBox}>
                    <div className={styles.card}>
                        <span>📍</span>
                        <small>Distance</small>
                        <strong>{guide.distance}</strong>
                    </div>

                    <div className={styles.card}>
                        <span>🕒</span>
                        <small>Travel Time</small>
                        <strong>{guide.duration}</strong>
                    </div>

                    <div className={styles.card}>
                        <span>🚖</span>
                        <small>Service</small>
                        <strong>Private Taxi</strong>
                    </div>
                </div>

                <article className={styles.content}>
                    <p>{guide.content}</p>
                </article>
            </div>
        </main>
    )
}