'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function HashScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const scroll = () => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return true;
      }
      return false;
    };

    // Try immediately, then retry a few times if element isn't mounted yet
    if (!scroll()) {
      const intervals = [100, 300, 600, 1000];
      const timers = intervals.map(ms => setTimeout(scroll, ms));
      return () => timers.forEach(clearTimeout);
    }
  }, [pathname]);

  return null;
}
