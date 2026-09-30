import { FaMapMarkerAlt, FaClock, FaRupeeSign, FaPhone, FaWhatsapp } from 'react-icons/fa';
import styles from './page.module.css';

export default function LucknowToDelhi() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Lucknow to Delhi Cab</h1>
        <p className={styles.tagline}>Fixed Fares | No Surge Pricing | 24x7 Booking</p>
        <div className={styles.heroStats}>
          <div className={styles.stat}><FaMapMarkerAlt /> 500 km</div>
          <div className={styles.stat}><FaClock /> 8-9 hours</div>
          <div className={styles.stat}><FaRupeeSign /> 5,500</div>
        </div>
        <button className={styles.ctaButton}>Book Now</button>
      </section>

      <section className={styles.section}>
        <h2>Route Overview</h2>
        <div className={styles.grid2}>
          <div className={styles.card}>
            <h3>Distance & Time</h3>
            <p><strong>500 km</strong> | <strong>8-9 hours</strong> via NH19 + NH44</p>
          </div>
          <div className={styles.card}>
            <h3>Best Travel Time</h3>
            <p><strong>Night travel (4 PM start)</strong> to reach Delhi 1-2 AM.</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Fixed Pricing</h2>
        <div className={styles.pricingCard}>
          <div className={styles.priceRow}><span>Base Fare:</span><strong className={styles.highlight}>5,500</strong></div>
          <div className={styles.priceRow}><span>Toll:</span><strong>400-500 (extra)</strong></div>
          <div className={styles.priceRow} style={{borderTop:'1px solid #ddd',paddingTop:'12px',marginTop:'12px'}}>
            <span><strong>Total:</strong></span><strong>6,050-6,175</strong>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2>Ready to Book?</h2>
        <div className={styles.contactButtons}>
          <a href="tel:+919198893198" className={styles.contactBtn}><FaPhone /> Call</a>
          <a href="https://wa.me/919198893198" className={styles.contactBtn} style={{background:'#25D366'}}><FaWhatsapp /> WhatsApp</a>
        </div>
      </section>
    </div>
  );
}
