'use client';

import { FaMapMarkerAlt, FaClock, FaRupeeSign, FaPhone, FaWhatsapp } from 'react-icons/fa';
import styles from './page.module.css';

export default function LucknowToJaipur() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Lucknow to Jaipur Cab</h1>
        <p className={styles.tagline}>Pink City Tour • Fixed ₹6,500</p>
        <div className={styles.heroStats}>
          <div className={styles.stat}><FaMapMarkerAlt /> 600 km</div>
          <div className={styles.stat}><FaClock /> 9-10 hours</div>
          <div className={styles.stat}><FaRupeeSign /> ₹6,500</div>
        </div>
        <button className={styles.ctaButton}>Book Now</button>
      </section>

      <section className={styles.section}>
        <h2>Golden Triangle Itinerary</h2>
        <div className={styles.grid2}>
          <div className={styles.card}>
            <h3>Route: Lucknow to Jaipur</h3>
            <p><strong>600 km</strong> via NH44 (Delhi highway). <strong>9-10 hours</strong>.</p>
          </div>
          <div className={styles.card}>
            <h3>Continuing Routes</h3>
            <p>After Jaipur? Book Jaipur→Agra (₹2,500) or Jaipur→Delhi (₹3,500).</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Pricing</h2>
        <div className={styles.pricingCard}>
          <div className={styles.priceRow}><span>Base:</span><strong className={styles.highlight}>₹6,500</strong></div>
          <div className={styles.priceRow}><span>Toll:</span><strong>₹400-500</strong></div>
          <div className={styles.priceRow} style={{borderTop:'1px solid #ddd',paddingTop:'12px',marginTop:'12px'}}>
            <span><strong>Total:</strong></span><strong>₹7,050-7,200</strong>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2>Explore the Pink City</h2>
        <div className={styles.contactButtons}>
          <a href="tel:+919198893198" className={styles.contactBtn}><FaPhone /> Call</a>
          <a href="https://wa.me/919198893198" className={styles.contactBtn} style={{background:'#25D366'}}><FaWhatsapp /> WhatsApp</a>
        </div>
      </section>
    </div>
  );
}
