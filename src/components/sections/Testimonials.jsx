import styles from "./Testimonials.module.css";
import siteConfig  from "@/config/siteConfig";

const GOOGLE_REVIEWS_URL = siteConfig.googleReview;

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <h2>What Our Customers Say</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.stars} aria-label="4.9 out of 5 stars">
              ★★★★★
            </div>

            <h3>4.9/5 on Google</h3>

            <p>
              See what our customers have to say about their experience
              with The Yatra Company.
            </p>

            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Our Google Reviews →
            </a>
          </div>

          <div className={styles.card}>
            <h3>Real Customer Experiences</h3>

            <p>
              Our Google reviews come directly from customers who have
              travelled with us.
            </p>

            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Reviews on Google →
            </a>
          </div>

          <div className={styles.card}>
            <h3>Travel With Confidence</h3>

            <p>
              Planning a trip? Check our latest Google reviews before
              booking your taxi or cab.
            </p>

            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              See What Customers Say →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}