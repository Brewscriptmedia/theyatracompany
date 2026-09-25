'use client';

import { useEffect } from 'react';
import { FiPhone, FiMessageCircle } from 'react-icons/fi';
import siteConfig from '@/config/siteConfig';
import styles from './StickyCallBar.module.css';

export default function StickyCallBar() {
  useEffect(() => {
    const trackCall = (platform) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'click_call_button', {
          platform: platform,
          page_path: window.location.pathname,
        });
      }
    };

    const callButton = document.getElementById('sticky-call-button');
    const whatsappButton = document.getElementById('sticky-whatsapp-button');

    if (callButton) {
      callButton.addEventListener('click', () => trackCall('call'));
    }
    if (whatsappButton) {
      whatsappButton.addEventListener('click', () => trackCall('whatsapp'));
    }

    return () => {
      if (callButton) callButton.removeEventListener('click', () => trackCall('call'));
      if (whatsappButton) whatsappButton.removeEventListener('click', () => trackCall('whatsapp'));
    };
  }, []);

  return (
    <div className={styles.stickyBar}>
      <a
        id="sticky-call-button"
        href={`tel:${siteConfig.phone}`}
        className={styles.button}
        title="Call us"
      >
        <FiPhone size={20} />
        <span>Call</span>
      </a>
      <a
        id="sticky-whatsapp-button"
        href={siteConfig.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
        title="Message on WhatsApp"
      >
        <FiMessageCircle size={20} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
