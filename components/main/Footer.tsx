"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Icon } from "@iconify/react";






export default function Footer() {
  const scrollToTop = () => {
    // Try Lenis first if available
    if (typeof window !== "undefined" && window.lenis && typeof window.lenis.scrollTo === "function") {
      window.lenis.scrollTo(0, { duration: 2 });
      return;
    }
    
    // Scroll to hero section as main method
    const heroElement = document.getElementById("hero");
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    
    // Fallback to window scroll
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Try Lenis first if available
      if (typeof window !== "undefined" && window.lenis && typeof window.lenis.scrollTo === "function") {
        window.lenis.scrollTo(element, { duration: 1.5, offset: -80 });
        return;
      }
      
      // Fallback to native scroll
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:lansonthandappilly20@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+919947365155";
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
            <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg uppercase">
              LJ
            </h1>
            <span className="text-lg font-medium text-[#A78BFA]">
              Portfolio
            </span>
          </motion.div>
          <motion.div
            className="text-right"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-sm uppercase tracking-wider mb-2 text-[#A78BFA]">
              Have a project in mind?
            </p>
            <h2 className="text-4xl md:text-6xl font-light">
              Let&apos;s collaborate
            </h2>
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
                  scrollToSection("project");
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
                  scrollToSection("about");
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
                  scrollToSection("contact");
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
              href="https://github.com/blackswordsman-ai"
              className="p-3 rounded-full bg-white/10 hover:bg-[#7C3AED]/30 transition-all duration-300 border border-white/20 hover:border-[#7C3AED]/50 cursor-pointer hover:shadow-lg hover:shadow-[#7C3AED]/20"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              style={{ cursor: 'pointer' }}
              onClick={(e) => {
                e.preventDefault();
                window.open("https://github.com/blackswordsman-ai", "_blank", "noopener,noreferrer");
              }}
            >
              <FaGithub size={24} color="#7C3AED" className="transition-colors duration-300 hover:text-white" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/lanson-johnson-b57b42279/"
              className="p-3 rounded-full bg-white/10 hover:bg-[#7C3AED]/30 transition-all duration-300 border border-white/20 hover:border-[#7C3AED]/50 cursor-pointer hover:shadow-lg hover:shadow-[#7C3AED]/20"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              style={{ cursor: 'pointer' }}
              onClick={(e) => {
                e.preventDefault();
                window.open("https://www.linkedin.com/in/lanson-johnson-b57b42279/", "_blank", "noopener,noreferrer");
              }}
            >
              <FaLinkedin size={24} color="#7C3AED" className="transition-colors duration-300 hover:text-white" />
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
            onClick={scrollToTop}
            className="bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-[#7C3AED]/30 transition-all border border-[#7C3AED]/40 hover:border-[#7C3AED]/60 cursor-pointer"
            style={{ cursor: 'pointer' }}
            aria-label="Scroll to top"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            type="button"
          >
            <Icon icon="heroicons:arrow-up-20-solid" width="24" height="24" color="#7C3AED" />
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
