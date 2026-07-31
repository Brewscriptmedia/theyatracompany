import styles from "./GuideGrid.module.css";
import GuideCard from "./GuideCard";
import { guides } from "@/data/travelGuides";

export default function GuideGrid() {
    return (
        <section className={styles.guides} id="guides">
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h2>Latest Travel Guides</h2>

                    <p>
                        Explore destination guides, airport transfer tips, travel advice, 
                        and taxi booking information curated by The Yatra Company.
                    </p>
                </div>

                <div className={styles.grid}>
                    {guides.map((guide) => (
                        <GuideCard key= {guide.slug} guide= {guide}/>
                    ))}
                </div>
            </div>
        </section>
    )
}