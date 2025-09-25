"use client"
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from '@/utils/motion';
import { Icon } from '@iconify/react';
import Image from 'next/image';

const Footer = () => {

  return (
    <footer id="footer" className="relative w-full bg-black/40">
      {/* Profile Section */}
      <div className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={slideInFromTop}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center space-y-8"
          >
            {/* Circular Profile Picture */}
            <div className="relative">
              {/* Moving light on existing border */}
              <div className="absolute inset-0 w-40 h-40 rounded-full animate-spin pointer-events-none" 
                   style={{ animationDuration: '3s' }}>
                <div className="absolute top-0 left-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2 -translate-y-1 shadow-lg shadow-white/80"></div>
              </div>
              
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-xl shadow-purple-500/20 relative z-10">
                <Image
                  src="/178938044.jpeg"
                  alt="Lanson Johnson Profile"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
                {/* Inner glow effect with darker overlay */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 pointer-events-none" />
                <div className="absolute inset-0 rounded-full bg-black/20 pointer-events-none" />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md">
              {/* LinkedIn Button */}
              <motion.a
                href="https://www.linkedin.com/in/lanson-johnson-b57b42279/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-3 flex-1 py-3 px-4 sm:px-6 bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-lg shadow-lg hover:shadow-purple-500/15 hover:bg-black/30 transition-all duration-300 group cursor-pointer"
              >
                <Icon 
                  icon="mdi:linkedin" 
                  className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" 
                />
                <span className="text-white font-medium group-hover:text-purple-300 transition-colors duration-300">LinkedIn</span>
              </motion.a>

              {/* GitHub Button */}
              <motion.a
                href="https://github.com/blackswordsman-ai"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-3 flex-1 py-3 px-4 sm:px-6 bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-lg shadow-lg hover:shadow-cyan-500/15 hover:bg-black/30 transition-all duration-300 group cursor-pointer"
              >
                <Icon 
                  icon="mdi:github" 
                  className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" 
                />
                <span className="text-white font-medium group-hover:text-cyan-300 transition-colors duration-300">GitHub</span>
              </motion.a>
            </div>

            {/* Name/Title */}
            <motion.div
              variants={slideInFromTop}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Lanson Johnson</h2>
              <p className="text-gray-300 text-base sm:text-lg">Full Stack Developer</p>
              <div className="mt-4 flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                <span className="text-sm text-gray-400">Available for work</span>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              variants={slideInFromTop}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="text-center space-y-2 px-4"
            >
              <div className="flex items-center justify-center space-x-3">
                <Icon 
                  icon="mdi:email" 
                  className="w-5 h-5 text-purple-400" 
                />
                <a
                  href="mailto:lansonthandappilly20@gmail.com"
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm sm:text-base md:text-lg"
                >
                  lansonthandappilly20@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Icon 
                  icon="mdi:phone" 
                  className="w-5 h-5 text-cyan-400" 
                />
                <a
                  href="tel:+1234567890"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm sm:text-base md:text-lg"
                >
                  +919947365155
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-white/5 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          {/* Copyright */}
          <motion.div
            variants={slideInFromTop}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <p className="text-gray-400 text-sm">
              &copy; 2025 Lanson Thandappilly. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
