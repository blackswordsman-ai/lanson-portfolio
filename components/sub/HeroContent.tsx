"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromTop,
  slideInFromRight,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const HeroContent = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Welcome to my digital space";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-4 sm:px-6 md:px-20 mt-20 sm:mt-28 md:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-6 justify-center m-auto text-start max-w-[1100px] relative">
        {/* Welcome Badge */}
        <motion.div
          variants={slideInFromTop}
          className="welcome-box py-[8px] px-[10px] border-[#7042f88b] opacity-[0.95]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            {displayedText}
            <span className="animate-pulse">|</span>
          </h1>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 sm:gap-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white max-w-[800px] w-auto h-auto"
        >
          <span>
            Crafting
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500">
              {" "}
              digital experiences{" "}
            </span>
            that matter
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm sm:text-base md:text-lg text-gray-300/90 my-3 sm:my-4 max-w-[720px]"
        >
          I&apos;m Lanson Johnson, a passionate full-stack developer crafting innovative 
          solutions that bridge creativity with technology. Specializing in modern 
          web technologies, I transform ideas into exceptional digital experiences 
          that drive business growth and user engagement.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-4"
        >
          <button
            onClick={() => handleScrollTo('project')}
            className="group relative py-3 px-6 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white cursor-pointer rounded-xl w-full sm:w-auto text-sm sm:text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-purple-900/50 hover:shadow-purple-900/70"
            aria-label="Explore my projects"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span>Explore Projects</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
          <button
            onClick={() => handleScrollTo('contact')}
            className="group py-3 px-6 rounded-xl border-2 border-purple-500/60 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400/80 transition-all duration-300 w-full sm:w-auto text-sm sm:text-base hover:scale-[1.02] active:scale-[0.98] backdrop-blur-sm"
            aria-label="Start a conversation"
          >
            <span className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>Lets Connect</span>
            </span>
          </button>
        </motion.div>

        {/* Decorative Icons */}
        <motion.div
          variants={slideInFromRight(0.8)}
          className="pointer-events-none select-none absolute -z-10 left-4 sm:left-12 md:left-80 top-8 sm:top-12 md:top-0"
        >
          <Image
            src="/mainIconsdark.svg"
            alt="work icons"
            height={520}
            width={520}
            className="opacity-90 scale-[0.7] sm:scale-[0.8] md:scale-[0.88] lg:scale-[0.95]"
            priority
          />
        </motion.div>

        {/* Ambient Glow Effect */}
        <div className="absolute -z-10 inset-0 flex items-center justify-center">
          <div className="h-64 w-64 md:h-96 md:w-96 bg-purple-500/20 blur-3xl rounded-full" />
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: [0, 1, 0.6, 1], y: [0, -4, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="hidden md:flex items-center gap-2 text-gray-300/70 mt-8 cursor-pointer"
          onClick={() => window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' })}
          role="button"
          tabIndex={0}
          aria-label="Scroll down to next section"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
            }
          }}
        >
          <ChevronDownIcon className="h-5 w-5" />
          <span className="text-sm tracking-wide">Scroll</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroContent;