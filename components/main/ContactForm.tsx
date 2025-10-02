"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("error");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        console.error('Form submission error:', result.error);
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 3000);
      }
    } catch (error) {
      console.error('Network error:', error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="relative w-full min-h-[50vh] sm:min-h-[60vh] overflow-hidden bg-black -mt-8 sm:-mt-12">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-black/40 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-[50vh] sm:min-h-[60vh] px-4 py-6 sm:py-8">
        <div className="w-full max-w-xl bg-gray-950/30 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl shadow-purple-900/40 border border-gray-800/40">
          {/* Header */}
          <motion.div
            variants={slideInFromTop}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            className="text-center mb-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
              Get in <span className="text-purple-500">Touch</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg">
              Lets collaborate on your next project
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={slideInFromTop}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
          >
            <div className="space-y-5 sm:space-y-6">
              {/* Name */}
         {/* Name */}
<div className="relative group">
  <input
    type="text"
    id="name"
    name="name"
    value={formData.name}
    onChange={handleChange}
    className="peer w-full px-4 sm:px-5 pt-4 sm:pt-5 pb-2 sm:pb-3 bg-gray-900/70 border border-white/80 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 shadow-lg shadow-black/50 text-sm sm:text-base"
    placeholder="Your Name"
  />
  <label
    htmlFor="name"
    className="absolute left-4 sm:left-5 top-2 sm:top-3 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:top-4 sm:peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2 sm:peer-focus:top-3 peer-focus:text-purple-500 peer-focus:text-sm"
  >
    Name
  </label>
</div>

{/* Email */}
<div className="relative group">
  <input
    type="email"
    id="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    className="peer w-full px-4 sm:px-5 pt-4 sm:pt-5 pb-2 sm:pb-3 bg-gray-900/70 border border-white/80 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 shadow-lg shadow-black/50 text-sm sm:text-base"
    placeholder="Your Email"
  />
  <label
    htmlFor="email"
    className="absolute left-4 sm:left-5 top-2 sm:top-3 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:top-4 sm:peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2 sm:peer-focus:top-3 peer-focus:text-purple-500 peer-focus:text-sm"
  >
    Email
  </label>
</div>

{/* Message */}
<div className="relative group">
  <textarea
    id="message"
    name="message"
    value={formData.message}
    onChange={handleChange}
    rows={4}
    className="peer w-full px-4 sm:px-5 pt-4 sm:pt-5 pb-2 sm:pb-3 bg-gray-900/70 border border-white/80 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 resize-none shadow-lg shadow-black/50 text-sm sm:text-base"
    placeholder="Your Message"
  />
  <label
    htmlFor="message"
    className="absolute left-4 sm:left-5 top-2 sm:top-3 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:top-4 sm:peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2 sm:peer-focus:top-3 peer-focus:text-purple-500 peer-focus:text-sm"
  >
    Message
  </label>
</div>


              {/* Button */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex items-center justify-center gap-2 mx-auto  max-w-xs px-5 py-8 sm:py-3 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 disabled:bg-gray-700 cursor-pointer text-white font-bold text-sm sm:text-base rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-950 shadow-lg shadow-purple-900/30"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && (
                  <span className="text-white font-bold text-sm sm:text-base">
                    &rarr;
                  </span>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="mt-4 p-3 sm:p-4 bg-green-500/10 border border-green-500/50 rounded-xl text-green-400 text-center text-sm sm:text-base">
                  <div className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Message sent successfully! I&apos;ll get back to you soon.
                  </div>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mt-4 p-3 sm:p-4 bg-red-500/10 border border-red-500/50 rounded-xl text-red-400 text-center text-sm sm:text-base">
                  <div className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    Failed to send message. Please check your details and try again.
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
