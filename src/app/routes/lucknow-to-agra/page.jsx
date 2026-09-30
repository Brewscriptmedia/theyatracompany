import { FaMapMarkerAlt, FaClock, FaRupeeSign, FaPhone, FaWhatsapp } from 'react-icons/fa';
import styles from './page.module.css';

export default function LucknowToAgra() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Lucknow to Agra Cab</h1>
        <p className={styles.tagline}>Fixed Fares | No Surge Pricing | GPS-Tracked</p>
        <div className={styles.heroStats}>
          <div className={styles.stat}><FaMapMarkerAlt /> 100 km</div>
          <div className={styles.stat}><FaClock /> 2-3 hours</div>
          <div className={styles.stat}><FaRupeeSign /> 1,200</div>
        </div>
        <button className={styles.ctaButton}>Book Now</button>
      </section>

      <section className={styles.section}>
        <h2>Route Overview</h2>
        <div className={styles.grid2}>
          <div className={styles.card}>
            <h3>Distance & Time</h3>
            <p><strong>100 km</strong> | <strong>2-3 hours</strong> via NH19 expressway.</p>
          </div>
          <div className={styles.card}>
            <h3>Best Time to Travel</h3>
            <p><strong>Early morning (6-8 AM)</strong> or <strong>evening (4-6 PM)</strong></p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Fixed Pricing</h2>
        <div className={styles.pricingCard}>
          <div className={styles.priceRow}><span>Base Fare:</span><strong className={styles.highlight}>1,200</strong></div>
          <div className={styles.priceRow}><span>Toll:</span><strong>150-200 (extra)</strong></div>
          <div className={styles.priceRow} style={{borderTop:'1px solid #ddd',paddingTop:'12px',marginTop:'12px'}}>
            <span><strong>Total:</strong></span><strong>1,350-1,450</strong>
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
