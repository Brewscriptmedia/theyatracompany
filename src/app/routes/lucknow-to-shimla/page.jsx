import { FaMapMarkerAlt, FaClock, FaRupeeSign, FaPhone, FaWhatsapp } from 'react-icons/fa';
import styles from './page.module.css';
export default function LucknowToShimla() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Lucknow to Shimla Cab</h1>
        <p className={styles.tagline}>Hill Station Gateway | Fixed Fares</p>
        <div className={styles.heroStats}>
          <div className={styles.stat}><FaMapMarkerAlt /> 850 km</div>
          <div className={styles.stat}><FaClock /> 13-14 hrs</div>
          <div className={styles.stat}><FaRupeeSign /> 9,300</div>
        </div>
        <button className={styles.ctaButton}>Book Now</button>
      </section>
      <section className={styles.section}>
        <h2>Route Info</h2>
        <div className={styles.grid2}>
          <div className={styles.card}>
            <h3>Distance & Time</h3>
            <p><strong>850 km</strong> | <strong>13-14 hours</strong> via Chandigarh highway.</p>
          </div>
          <div className={styles.card}>
            <h3>Pricing</h3>
            <p><strong>9,300</strong> base + toll <strong>700-800</strong>. Total <strong>10,150-10,250</strong>.</p>
          </div>
        </div>
      </section>
      <section className={styles.ctaSection}>
        <h2>Book Your Hill Trip</h2>
        <div className={styles.contactButtons}>
          <a href="tel:+919198893198" className={styles.contactBtn}><FaPhone /> Call</a>
          <a href="https://wa.me/919198893198" className={styles.contactBtn} style={{background:'#25D366'}}><FaWhatsapp /> WhatsApp</a>
        </div>
      </section>
    </div>
  );
}
