/* eslint-disable react/no-unescaped-entities */
import styles from "./ContactInfo.module.css";

export default function ContactInfo() {
  return (
    <section className={styles.info}>

      <div className={styles.card}>
        <div className={styles.icon}>📞</div>

        <h3>Call Us</h3>

        <p>+91-91988 93198</p>

        <span>Available 24×7</span>
      </div>

      <div className={styles.card}>
        <div className={styles.icon}>💬</div>

        <h3>WhatsApp</h3>

        <p>+91-91988 93198</p>

        <span>Quick Booking Support</span>
      </div>

      <div className={styles.card}>
        <div className={styles.icon}>📧</div>

        <h3>Email</h3>

        <p>theyatracompanyofficial@gmail.com</p>

        <span>We'll reply within 24 hours</span>
      </div>

      <div className={styles.card}>
        <div className={styles.icon}>📍</div>

        <h3>Location</h3>

        <p>Lucknow, Uttar Pradesh</p>

        <span>Serving Across India</span>
      </div>

    </section>
  );
}