'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';

// Declare global type for Lenis
declare global {
  interface Window {
    lenis?: Lenis;
  }
}

const LenisProvider: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // Store Lenis instance globally
    if (typeof window !== 'undefined') {
      window.lenis = lenis;
    }

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    const id = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(id);
      if (typeof window !== 'undefined') {
        window.lenis = undefined;
      }
      if (typeof lenis.destroy === 'function') {
        lenis.destroy();
      }
    };
  }, []);

  return null;
};

export default LenisProvider;


