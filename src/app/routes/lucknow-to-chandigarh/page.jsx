import { FaMapMarkerAlt, FaClock, FaRupeeSign, FaPhone, FaWhatsapp } from 'react-icons/fa';
import styles from './page.module.css';

export default function LucknowToChandigarh() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Lucknow to Chandigarh Cab</h1>
        <p className={styles.tagline}>Fixed Fares | 24×7 Booking</p>
        <div className={styles.heroStats}>
          <div className={styles.stat}><FaMapMarkerAlt /> 750 km</div>
          <div className={styles.stat}><FaClock /> 11-12 hrs</div>
          <div className={styles.stat}><FaRupeeSign /> 8,200</div>
        </div>
        <button className={styles.ctaButton}>Book Now</button>
      </section>
      <section className={styles.section}>
        <h2>Route Overview</h2>
        <div className={styles.grid2}>
          <div className={styles.card}>
            <h3>Distance & Time</h3>
            <p><strong>750 km</strong> | <strong>11-12 hours</strong> via NH44 expressway.</p>
          </div>
          <div className={styles.card}>
            <h3>Best Travel Time</h3>
            <p>Night depart 5 PM, reach Chandigarh 5-6 AM. Fresh for day activities.</p>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <h2>Fixed Pricing</h2>
        <div className={styles.pricingCard}>
          <div className={styles.priceRow}><span>Base Fare:</span><strong className={styles.highlight}>8,200</strong></div>
          <div className={styles.priceRow}><span>Toll:</span><strong>600-700</strong></div>
          <div className={styles.priceRow} style={{borderTop:'1px solid #ddd',paddingTop:'12px',marginTop:'12px'}}>
            <span><strong>Total:</strong></span><strong>9,050-9,200</strong>
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
