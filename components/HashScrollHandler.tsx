'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function HashScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    // Small delay to let the page render
    const timer = setTimeout(() => {
      const hash = window.location.hash;
      if (hash) {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
