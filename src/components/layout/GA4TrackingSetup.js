'use client';

import { useEffect } from 'react';

export default function GA4TrackingSetup() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Track tel: link clicks as "call_button_click" event
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="tel:"]');
      if (link && window.gtag) {
        const phoneNumber = link.href.replace('tel:', '');
        window.gtag('event', 'call_button_click', {
          phone_number: phoneNumber,
          page_path: window.location.pathname,
          source: link.id || 'unknown',
        });
      }
    });

    // Track wa.me link clicks as "whatsapp_button_click" event
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href*="wa.me"]');
      if (link && window.gtag) {
        window.gtag('event', 'whatsapp_button_click', {
          page_path: window.location.pathname,
          source: link.id || 'unknown',
        });
      }
    });

    // Alternative: track via form submissions or inquiries
    // This ensures we capture all touchpoints across the site
  }, []);

  return null;
}
