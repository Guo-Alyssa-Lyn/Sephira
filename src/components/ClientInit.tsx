'use client';

import { useEffect } from 'react';

export default function ClientInit() {
  useEffect(() => {
    // Remove any browser extension attributes that might cause hydration issues
    const html = document.documentElement;
    const attributesToRemove = Array.from(html.attributes)
      .filter(attr => attr.name.startsWith('pwa-') || attr.name.includes('extension'));
    
    attributesToRemove.forEach(attr => {
      html.removeAttribute(attr.name);
    });

    // Add smooth scrolling class after hydration
    html.classList.add('scroll-smooth');
  }, []);

  return null;
} 