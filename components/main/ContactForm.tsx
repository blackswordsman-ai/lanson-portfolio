"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const slideInFromTop = {
  hidden: { y: -50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const ContactForm = () => {
  return (
    <div id="contact" className="relative w-full min-h-screen overflow-hidden bg-black py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-black/40 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
        <div className="w-full max-w-2xl bg-gray-950/50 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl shadow-purple-900/40 border border-gray-800/40">
          {/* Header */}
          <motion.div
            variants={slideInFromTop}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
              Get in <span className="text-purple-500">Touch</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-6">
              Scan the QR code to connect with Lanson Johnson on WhatsApp
            </p>
          </motion.div>

          {/* QR Code Section */}
          <motion.div
            variants={slideInFromTop}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            className="flex flex-col items-center space-y-8"
          >
            {/* QR Code Container */}
            <div className="relative">
              <div className="w-64 h-64 bg-white rounded-2xl p-4 shadow-2xl shadow-purple-900/30 border-4 border-purple-500/20">
                <Image 
                  src="/Screenshot_2025-10-18-18-09-30-866_com.whatsapp.jpg" 
                  alt="Lanson Johnson WhatsApp QR Code" 
                  width={256}
                  height={256}
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
              
              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-purple-500/30 animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;