"use client"
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from '@/utils/motion';
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: RxGithubLogo, href: "https://github.com", label: "GitHub", color: "hover:text-gray-400" },
    { icon: RxLinkedinLogo, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: RxInstagramLogo, href: "https://instagram.com", label: "Instagram", color: "hover:text-pink-400" },
    { icon: RxTwitterLogo, href: "https://twitter.com", label: "Twitter", color: "hover:text-blue-300" },
    { icon: FaYoutube, href: "https://youtube.com", label: "YouTube", color: "hover:text-red-400" },
    { icon: RxDiscordLogo, href: "https://discord.com", label: "Discord", color: "hover:text-indigo-400" },
  ];

  const quickLinks = [
    { name: "About Me", href: "#about-me" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#project" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative w-full bg-gradient-to-b from-transparent via-purple-900/20 to-black border-t border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            variants={slideInFromTop}
            initial="hidden"
            animate="visible"
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Lanson Johnson
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Building the future with modern web technologies. Creating digital experiences that matter.
            </p>
            <div className="flex space-x-4">
              {socialLinks.slice(0, 4).map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 transition-all duration-300 hover:bg-white/10 hover:border-purple-500/50 ${social.color} hover:scale-110`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={slideInFromTop}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            variants={slideInFromTop}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-purple-400" size={16} />
                <a
                  href="mailto:lansonthandappilly20@gmail.com"
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm"
                >
                  lansonthandappilly20@gmail.com
                </a>
              </div>
              <p className="text-gray-400 text-sm">
                Always open to new opportunities and collaborations
              </p>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            variants={slideInFromTop}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-300 text-sm mb-4">
              Get notified about new projects and updates
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 transition-colors duration-300"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white rounded-r-lg transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2025 Lanson Thandappilly. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
