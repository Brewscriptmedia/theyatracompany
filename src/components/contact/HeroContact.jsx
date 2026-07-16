/* eslint-disable react/no-unescaped-entities */
import styles from "./HeroContact.module.css";

export default function HeroContact() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <span className={styles.tag}>
          Get In Touch
        </span>

        <h1>
          Book Your Taxi
        </h1>

        <p>
          Have questions or want to book a ride? We're available 24/7 to
          provide safe, comfortable, and reliable taxi services.
        </p>
      </div>
    </section>
  );
}