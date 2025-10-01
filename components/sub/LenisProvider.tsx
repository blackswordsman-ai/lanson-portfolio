'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';

const LenisProvider: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    const id = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(id);
      if (typeof lenis.destroy === 'function') {
        lenis.destroy();
      }
    };
  }, []);

  return null;
};

export default LenisProvider;


