"use client";

import React, { useEffect, useRef } from "react";

const ScrollingHero = () => {
  const topTextRef = useRef<HTMLHeadingElement>(null);
  const bottomTextRef = useRef<HTMLHeadingElement>(null);
  const colorTextRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    let ticking = false;

    const scrollHandler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;
          const scrollSpeed = 0.3;
          const w = window.innerWidth;

          let maxTranslate = 60;
          if (w < 640) {
            maxTranslate = 30;
          } else if (w < 1024) {
            maxTranslate = 45;
          }

          const raw = (scrollPosition * scrollSpeed) % (2 * maxTranslate);
          const topPosition = raw - maxTranslate;
          if (topTextRef.current) {
            topTextRef.current.style.transform = `translateX(${topPosition}%)`;
          }

          const bottomRaw = (scrollPosition * scrollSpeed) % (2 * maxTranslate);
          const bottomPosition = -bottomRaw;
          if (bottomTextRef.current) {
            bottomTextRef.current.style.transform = `translateX(${bottomPosition}%)`;
          }

          // middle color-fill text
          const colorProgress = (scrollPosition * 0.3) % 100;
          if (colorTextRef.current) {
            colorTextRef.current.style.background = `linear-gradient(90deg, #a855f7 ${colorProgress}%, #ffffff ${colorProgress}%)`;
            colorTextRef.current.style.webkitBackgroundClip = "text";
            colorTextRef.current.style.backgroundClip = "text";
            colorTextRef.current.style.webkitTextFillColor = "transparent";
            // Removed 'textFillColor' as it’s not a valid property
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollHandler);
    scrollHandler(); // initial
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <div id="about" className="relative flex flex-col items-center justify-center w-full min-h-[40vh] sm:min-h-[50vh] overflow-hidden bg-gradient-to-b from-black via-purple-900/20 to-black">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-black/40 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center w-full space-y-2 sm:space-y-4 px-4 py-4 sm:py-6">
        <div className="w-full overflow-hidden px-2 sm:px-4">
          <h2
            ref={topTextRef}
            className="text-sm sm:text-xl md:text-3xl lg:text-5xl font-bold text-gray-400 whitespace-nowrap"
            style={{ willChange: "transform" }}
          >
            Problem Solving Software Architecture
          </h2>
        </div>

        <div className="text-center px-2">
          <h1
            ref={colorTextRef}
            className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold whitespace-nowrap"
            style={{ willChange: "background" }}
          >
            Interested in Collaboration?
          </h1>
        </div>

        <div className="w-full overflow-hidden px-2 sm:px-4">
          <h2
            ref={bottomTextRef}
            className="text-sm sm:text-xl md:text-3xl lg:text-5xl font-bold text-gray-400 whitespace-nowrap sm:block"
            style={{ willChange: "transform" }}
          >
            Development React Native Development
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ScrollingHero;