"use client"
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from '@/utils/motion';
import { Icon } from '@iconify/react';
import Image from 'next/image';

const Footer = () => {

  return (
    <footer id="footer" className="relative w-full">
      {/* Profile Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-6">
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
              
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-purple-500/50 shadow-2xl shadow-purple-500/40 relative z-10">
                <Image
                  src="/178938044.jpeg"
                  alt="Lanson Johnson Profile"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
                {/* Inner glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/30 to-cyan-500/30 pointer-events-none" />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              {/* LinkedIn Button */}
              <motion.a
                href="https://www.linkedin.com/in/lanson-johnson-b57b42279/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-3 flex-1 py-3 px-6 bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-lg shadow-lg hover:shadow-purple-500/25 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
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
                className="flex items-center justify-center space-x-3 flex-1 py-3 px-6 bg-white/5 backdrop-blur-sm border border-cyan-500/30 rounded-lg shadow-lg hover:shadow-cyan-500/25 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
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
              <h2 className="text-3xl font-bold text-white mb-2">Lanson Johnson</h2>
              <p className="text-gray-300 text-lg">Full Stack Developer</p>
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
              className="text-center space-y-2"
            >
              <div className="flex items-center justify-center space-x-3">
                <Icon 
                  icon="mdi:email" 
                  className="w-5 h-5 text-purple-400" 
                />
                <a
                  href="mailto:lansonthandappilly20@gmail.com"
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-lg"
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
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-lg"
                >
                  +919947365155
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8">
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
