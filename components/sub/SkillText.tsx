"use client"
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import { motion, useScroll, useTransform } from 'framer-motion' 
import React, { useRef } from 'react'

const SkillText = () => {
  const titleRef = useRef<HTMLSpanElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start 85%", "end 25%"],
  })
  const bgSize = useTransform(scrollYProgress, [0, 1], ["0% 100%", "100% 100%"])
  const baseOpacity = useTransform(scrollYProgress, [0, 1], [0.7, 1])

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.35 }}
      className='w-full h-auto flex flex-col items-center justify-center'
      variants={{
        hidden: { opacity: 0, y: 12 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
         <motion.div
          variants={slideInFromTop}
          className="welcome-box py-[8px] px-[12px] border border-purple-500/20 opacity-[0.9] rounded-full flex items-center gap-2 backdrop-blur-md bg-black/30 shadow-[0_2px_10px_rgba(168,85,247,0.15)]"
        >
          {/* <SparklesIcon className="text-purple-400/90 mr-[10px] h-5 w-5 drop-shadow-[0_0_4px_rgba(168,85,247,0.3)]" /> */}
          <h1 className="Welcome-text text-[13px]">
           Think better with Next js 13 
          </h1>
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-extrabold leading-tight mt-[12px] text-center mb-[8px] tracking-tight relative inline-block'
        >
          {/* Base text (gray) */}
          <span className='text-gray-400/70'>
            Making apps with modern technologies
          </span>
          {/* Animated gradient overlay reveal */}
          <motion.span
            ref={titleRef}
            className='absolute inset-0 text-transparent bg-clip-text drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]'
            style={{
              backgroundImage: 'linear-gradient(90deg, rgba(168,85,247,1) 0%, rgba(190,186,255,1) 50%, rgba(34,211,238,1) 100%)',
              backgroundPosition: 'left',
              backgroundSize: bgSize as unknown as string,
              opacity: baseOpacity as unknown as number,
            }}
            aria-hidden
          >
            Making apps with modern technologies
          </motion.span>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.98 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
          }}
          className='h-[2px] w-[56px] sm:w-[72px] md:w-[84px] rounded-full bg-gradient-to-r from-purple-500/60 via-purple-300/60 to-cyan-400/60 mb-3'
        />
        <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] mb-8 mt-[4px] text-center italic tracking-wide drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]'
        >
            <motion.span
              initial={{ color: 'rgba(156,163,175,0.6)' }}
              whileInView={{ color: 'rgba(229,231,235,0.9)' }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              Never miss a task, deadline or idea
            </motion.span>

        </motion.div>

    </motion.div>
  )
}

export default SkillText