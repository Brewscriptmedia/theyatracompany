import Image from "next/image";
import Link from "next/link";
import styles from "./GuideCard.module.css";

export default function GuideCard({guide}){
    return(
        <article className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={guide.image}
                    alt={guide.title}
                    fill
                    className={styles.image}
                />
            </div>

            <div className={styles.content}>
                <div className={styles.meta}>
                    <span>{guide.category}</span>
                    <span>•</span>
                    <span>{guide.readTime}</span>
                </div>

                <h3>{guide.title}</h3>

                <p>{guide.description}</p>

                <Link href={`/travel-guides/${guide.slug}`} className={styles.button}>
                    Read Guide →
                </Link>
            </div>
        </article>
    )
}