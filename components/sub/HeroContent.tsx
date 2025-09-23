"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromTop,
  slideInFromRight,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-6 md:px-20 mt-28 md:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
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
          className="flex flex-col gap-6 text-5xl md:text-6xl text-bold text-white max-w-[700px] w-auto h-auto"
        >
            <span>
              Providing
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                the best{" "}
              </span>
              project exprience
            </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-300 my-5 max-w-[650px]"
        >
          I&apos;m a fullstack developer with a passion for creating dynamic and
          responsive web applications. With expertise in both frontend and
          backend technologies, I strive to deliver seamless user experiences
          and robust functionality.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>

        <motion.div
          variants={slideInFromRight(0.8)}
          className="pointer-events-none select-none absolute -z-10 left-16 md:left-120 top-36 md:top-20"
        >
          <Image
            src="/mainIconsdark.svg"
            alt="work icons"
            height={520}
            width={520}
            className="opacity-90 scale-[0.9] md:scale-[1.0]"
            priority
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
