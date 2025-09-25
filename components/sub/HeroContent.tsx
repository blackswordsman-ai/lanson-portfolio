"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromTop,
  slideInFromRight,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const   HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-6 md:px-20 mt-28 md:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-6 justify-center m-auto text-start max-w-[1100px] relative">
        <motion.div
          variants={slideInFromTop}
          className="welcome-box py-[8px] px-[10px] border-[#7042f88b] opacity-[0.95]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 text-5xl md:text-6xl font-extrabold leading-tight text-white max-w-[800px] w-auto h-auto"
        >
            <span>
              Providing
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                the best{" "}
              </span>
              project experience
            </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-300/90 my-4 max-w-[720px]"
        >
          I&apos;m a fullstack developer with a passion for creating dynamic and
          responsive web applications. With expertise in both frontend and
          backend technologies, I strive to deliver seamless user experiences
          and robust functionality.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex items-center gap-3"
        >
          <a
            href="#project"
            className="py-2 button-primary text-white cursor-pointer rounded-lg px-5"
            aria-label="Learn more about my projects"
          >
            Learn More
          </a>
          <a
            href="#footer"
            className="py-2 px-5 rounded-lg border border-purple-500/60 text-purple-300 hover:bg-purple-500/10 transition-colors"
            aria-label="Get in touch"
          >
            Get in touch
          </a>
        </motion.div>

        <motion.div
          variants={slideInFromRight(0.8)}
          className="pointer-events-none select-none absolute -z-10 left-12 md:left-80 top-12 md:top-0"
        >
          <Image
            src="/mainIconsdark.svg"
            alt="work icons"
            height={520}
            width={520}
            className="opacity-90 scale-[0.88] md:scale-[0.95]"
            priority
          />
        </motion.div>

        {/* Soft glow accent */}
        <div className="absolute -z-10 inset-0 flex items-center justify-center">
          <div className="h-64 w-64 md:h-96 md:w-96 bg-purple-500/20 blur-3xl rounded-full" />
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: [0, 1, 0.6, 1], y: [0, -4, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="hidden md:flex items-center gap-2 text-gray-300/70 mt-8"
          aria-hidden
        >
          <ChevronDownIcon className="h-5 w-5" />
          <span className="text-sm tracking-wide">Scroll</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
