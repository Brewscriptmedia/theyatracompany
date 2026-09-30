'use client';

import { FaMapMarkerAlt, FaClock, FaRupeeSign, FaPhone, FaWhatsapp } from 'react-icons/fa';
import styles from './page.module.css';

export default function LucknowToVaranasi() {
  const faq = [
    { q: 'How long to Varanasi?', a: '4-5 hours. Highway: NH19 + NH31. Smooth road.' },
    { q: 'Best time to visit Varanasi?', a: 'Oct-Mar. Early morning Ghat visits. Depart Lucknow 4 AM, reach by 9 AM.' },
    { q: 'Can I arrange a guide in Varanasi?', a: 'We provide driver only. Arrange guide separately in Varanasi.' },
    { q: 'Is the price fixed?', a: 'Yes. ₹2,500 fixed. Toll & tax extra.' },
    { q: 'Return trip same price?', a: 'Yes. Varanasi to Lucknow also ₹2,500.' },
    { q: 'Larger vehicle available?', a: 'Yes. Innova SUV ₹3,200. Tempo available for groups.' },
  ];

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Lucknow to Varanasi Cab</h1>
          <p className={styles.tagline}>Pilgrimage Route • Fixed Fares • 24×7 Booking</p>
          <div className={styles.heroStats}>
            <div className={styles.stat}><FaMapMarkerAlt /> 250 km</div>
            <div className={styles.stat}><FaClock /> 4-5 hours</div>
            <div className={styles.stat}><FaRupeeSign /> ₹2,500</div>
          </div>
          <button className={styles.ctaButton}>Book Now</button>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Varanasi Sacred Journey</h2>
        <div className={styles.grid2}>
          <div className={styles.card}>
            <h3>Distance & Time</h3>
            <p><strong>250 km</strong> | <strong>4-5 hours</strong></p>
            <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '8px' }}>Highway through Uttar Pradesh. Road well-maintained.</p>
          </div>
          <div className={styles.card}>
            <h3>Best Travel Window</h3>
            <p><strong>Early morning (4-5 AM)</strong></p>
            <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '8px' }}>Reach Varanasi 9-10 AM for sunrise Ghat visits.</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Pricing</h2>
        <div className={styles.pricingCard}>
          <div className={styles.priceRow}><span>Base Fare:</span><strong className={styles.highlight}>₹2,500</strong></div>
          <div className={styles.priceRow}><span>Toll:</span><strong>₹180 (extra)</strong></div>
          <div className={styles.priceRow}><span>Tax:</span><strong>5% (extra)</strong></div>
          <div className={styles.priceRow} style={{ borderTop: '1px solid #ddd', paddingTop: '12px', marginTop: '12px' }}>
            <span><strong>Total:</strong></span><strong>₹2,815-2,890</strong>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>FAQ</h2>
        <div className={styles.faqContainer}>
          {faq.map((item, idx) => (
            <div key={idx} className={styles.faqItem}>
              <h4>{item.q}</h4><p>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2>Book Your Pilgrimage Cab</h2>
        <div className={styles.contactButtons}>
          <a href="tel:+919198893198" className={styles.contactBtn}>
            <FaPhone /> Call
          </a>
          <a href="https://wa.me/919198893198" className={styles.contactBtn} style={{ background: '#25D366' }}>
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
