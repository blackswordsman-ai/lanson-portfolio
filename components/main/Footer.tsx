"use client";

import React from 'react';
import { motion } from 'framer-motion';

const GithubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.51 2.87 8.34 6.84 9.7.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.03 1-2.75-.1-.26-.44-1.3.09-2.7 0 0 .83-.27 2.73 1.04a9.13 9.13 0 0 1 2.49-.34c.85 0 1.71.11 2.5.34 1.89-1.31 2.72-1.04 2.72-1.04.54 1.4.2 2.44.1 2.7.62.72 1 1.63 1 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.89 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <line x1="8" y1="11" x2="8" y2="16"/>
    <line x1="8" y1="8" x2="8" y2="8"/>
    <line x1="12" y1="11" x2="12" y2="16"/>
    <path d="M16 11v2a2 2 0 0 1-4 0v-2"/>
  </svg>
);

const ArrowUpIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m5 12 7-7 7 7"></path>
    <path d="M12 19V5"></path>
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    // Try multiple methods to ensure scrolling works
    try {
      // Method 1: Check if Lenis is available and use it
      if (typeof window !== 'undefined') {
        // Try to access Lenis instance if it exists
        const lenisInstance = (window as { lenis?: { scrollTo: (target: number | Element, options?: { duration?: number; offset?: number }) => void } }).lenis;
        if (lenisInstance && typeof lenisInstance.scrollTo === 'function') {
          lenisInstance.scrollTo(0, { duration: 1 });
          return;
        }
      }
      
      // Method 2: Standard smooth scroll
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Method 3: Fallback for immediate scroll
      setTimeout(() => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }, 100);
      
    } catch (error) {
      console.log('Scroll to top error:', error);
      // Fallback: direct scroll
      window.scrollTo(0, 0);
    }
  };

  const scrollToSection = (sectionId: string) => {
    console.log(`Scrolling to section: ${sectionId}`);
    
    const element = document.getElementById(sectionId);
    if (element) {
      console.log(`Found element: ${sectionId}`);
      
      // Simple scrollIntoView approach first
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
      
      // Also try Lenis if available
      try {
        if (typeof window !== 'undefined') {
          const lenisInstance = (window as { lenis?: { scrollTo: (target: number | Element, options?: { duration?: number; offset?: number }) => void } }).lenis;
          if (lenisInstance && typeof lenisInstance.scrollTo === 'function') {
            console.log('Using Lenis for smooth scroll');
            lenisInstance.scrollTo(element, { duration: 1.5, offset: -80 });
          }
        }
      } catch (error) {
        console.log('Lenis scroll failed, using native scroll:', error);
      }
    } else {
      console.log(`Element with id="${sectionId}" not found!`);
    }
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:lansonthandappilly20@gmail.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+919947365155';
  };

  return (
    <footer className="bg-gradient-to-br from-[#3B1F5C] via-[#4B267A] to-[#2D1743] text-white relative overflow-hidden shadow-lg">
      <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-[#7C3AED]/80 via-[#A78BFA]/60 to-[#3B1F5C]/40" />

      <div className="max-w-7xl mx-auto px-8 py-16">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="flex items-center gap-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg uppercase">LJ</h1>
            <span className="text-lg font-medium text-[#A78BFA]">Portfolio</span>
          </motion.div>
          <motion.div 
            className="text-right"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-sm uppercase tracking-wider mb-2 text-[#A78BFA]">Have a project in mind?</p>
            <h2 className="text-4xl md:text-6xl font-light">Let&apos;s collaborate</h2>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="space-y-4">
              <motion.button 
                onClick={(e) => {
                  e.preventDefault();
                  console.log('Projects button clicked');
                  scrollToSection('project');
                }}
                className="block text-lg hover:text-[#7C3AED] transition-colors font-semibold text-left cursor-pointer bg-transparent border-none p-0"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                type="button"
              >
                Projects
              </motion.button>
              <motion.button 
                onClick={(e) => {
                  e.preventDefault();
                  console.log('About Me button clicked');
                  scrollToSection('about');
                }}
                className="block text-lg hover:text-[#7C3AED] transition-colors font-semibold text-left cursor-pointer bg-transparent border-none p-0"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                type="button"
              >
                About Me
              </motion.button>
              <motion.button 
                onClick={(e) => {
                  e.preventDefault();
                  console.log('Contact button clicked');
                  scrollToSection('contact');
                }}
                className="block text-lg hover:text-[#7C3AED] transition-colors font-semibold text-left cursor-pointer bg-transparent border-none p-0"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                type="button"
              >
                Contact
              </motion.button>
              {/* Contact Info */}
              <div className="mt-6 space-y-2">
                <motion.button 
                  onClick={handleEmailClick}
                  className="block text-base text-[#C4B5FD] hover:text-[#7C3AED] transition-colors font-medium text-left"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  lansonthandappilly20@gmail.com
                </motion.button>
                <motion.button 
                  onClick={handlePhoneClick}
                  className="block text-base text-[#C4B5FD] hover:text-[#7C3AED] transition-colors font-medium text-left"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  +919947365155
                </motion.button>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center gap-4">
            <motion.a 
              href="https://github.com/lansonjohnson" 
              className="p-3 rounded-full bg-white/10 hover:bg-[#7C3AED]/30 transition-all duration-300 border border-white/20 hover:border-[#7C3AED]/50" 
              aria-label="GitHub" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <GithubIcon />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/lansonjohnson" 
              className="p-3 rounded-full bg-white/10 hover:bg-[#7C3AED]/30 transition-all duration-300 border border-white/20 hover:border-[#7C3AED]/50" 
              aria-label="LinkedIn" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <LinkedinIcon />
            </motion.a>
          </div>
        </motion.div>

        <div className="border-t border-dotted border-white/30 mb-12" />

        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-wrap gap-6 text-sm">
            <motion.a 
              href="#cookies" 
              className="hover:text-[#7C3AED] transition-colors"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Cookies Policy
            </motion.a>
            <motion.a 
              href="#terms" 
              className="hover:text-[#7C3AED] transition-colors"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Legal Terms
            </motion.a>
            <motion.a 
              href="#privacy" 
              className="hover:text-[#7C3AED] transition-colors"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Privacy Policy
            </motion.a>
          </div>
          <motion.button 
            onClick={(e) => {
              e.preventDefault();
              console.log('Scroll to top button clicked');
              console.log('Looking for element with id="hero"');
              const heroElement = document.getElementById('hero');
              console.log('Hero element found:', heroElement);
              scrollToSection('hero');
            }}
            className="bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-[#7C3AED]/30 transition-all border border-[#7C3AED]/40 hover:border-[#7C3AED]/60 cursor-pointer"
            aria-label="Scroll to top"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            type="button"
          >
            <ArrowUpIcon />
          </motion.button>
        </motion.div>

        <motion.div 
          className="mt-12 text-center text-xs text-[#A78BFA]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          &copy; {new Date().getFullYear()} LJ Portfolio. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}