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
  // Your WhatsApp number (include country code without + or spaces)
  const WHATSAPP_NUMBER = "919947365155"; // Replace with your number
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

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
              {/* Your actual WhatsApp QR Code */}
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

            {/* Instructions */}
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-3 text-green-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span className="text-lg font-semibold">Connect via WhatsApp</span>
              </div>
              
              <div className="space-y-3 text-gray-300">
                <p className="text-base">📱 <strong>Step 1:</strong> Open WhatsApp on your phone</p>
                <p className="text-base">📷 <strong>Step 2:</strong> Tap the three dots menu → Linked Devices</p>
                <p className="text-base">🔍 <strong>Step 3:</strong> Scan this QR code</p>
                <p className="text-base">💬 <strong>Step 4:</strong> Start chatting with me!</p>
              </div>
            </div>

            {/* Alternative Contact Methods */}
            <div className="w-full border-t border-gray-700 pt-6">
              <p className="text-center text-gray-400 mb-4">Or contact me directly:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>Open WhatsApp</span>
                </a>
                
                <a
                  href={`tel:${WHATSAPP_NUMBER}`}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <span>Call Me</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;