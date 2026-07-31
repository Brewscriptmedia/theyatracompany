import Link from "next/link";
import Image from "next/image";

import styles from "./GuideCard.module.css";

export default function GuideCard({ guide }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={guide.hero.heroImage}
          alt={guide.hero.heroImageAlt}
          fill
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <span className={styles.badge}>
          {guide.hero.badge}
        </span>

        <h3>{guide.hero.title}</h3>

        <p>{guide.hero.description}</p>

        <Link
          href={`/travel-guides/${guide.slug}`}
          className={styles.button}
        >
          Read Guide →
        </Link>
      </div>
    </article>
  );
}
