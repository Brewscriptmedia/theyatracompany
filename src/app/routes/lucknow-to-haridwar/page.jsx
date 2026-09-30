'use client';

import { FaMapMarkerAlt, FaClock, FaRupeeSign, FaPhone, FaWhatsapp } from 'react-icons/fa';
import styles from './page.module.css';

export default function LucknowToHaridwar() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Lucknow to Haridwar Cab</h1>
        <p className={styles.tagline}>Pilgrimage to Holy Ganga • Fixed ₹7,000</p>
        <div className={styles.heroStats}>
          <div className={styles.stat}><FaMapMarkerAlt /> 650 km</div>
          <div className={styles.stat}><FaClock /> 10-11 hours</div>
          <div className={styles.stat}><FaRupeeSign /> ₹7,000</div>
        </div>
        <button className={styles.ctaButton}>Book Now</button>
      </section>

      <section className={styles.section}>
        <h2>Chardham Journey Begins</h2>
        <div className={styles.grid2}>
          <div className={styles.card}>
            <h3>Route Info</h3>
            <p><strong>650 km</strong> via NH19 + NH24. <strong>10-11 hours</strong> non-stop or with lunch break.</p>
          </div>
          <div className={styles.card}>
            <h3>Booking Tip</h3>
            <p>Night depart 5 PM, reach Haridwar 4-5 AM. Fresh for morning Ghat rituals.</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Fixed Pricing</h2>
        <div className={styles.pricingCard}>
          <div className={styles.priceRow}><span>Base:</span><strong className={styles.highlight}>₹7,000</strong></div>
          <div className={styles.priceRow}><span>Toll:</span><strong>₹500-600</strong></div>
          <div className={styles.priceRow} style={{borderTop:'1px solid #ddd',paddingTop:'12px',marginTop:'12px'}}>
            <span><strong>Total:</strong></span><strong>₹7,800-7,950</strong>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2>Divine Journey Awaits</h2>
        <div className={styles.contactButtons}>
          <a href="tel:+919198893198" className={styles.contactBtn}><FaPhone /> Call</a>
          <a href="https://wa.me/919198893198" className={styles.contactBtn} style={{background:'#25D366'}}><FaWhatsapp /> WhatsApp</a>
        </div>
      </section>
    </div>
  );
}
