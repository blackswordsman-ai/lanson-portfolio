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
          className="welcome-box py-[10px] px-[16px] border border-purple-500/30 opacity-[0.95] rounded-full flex items-center gap-3 backdrop-blur-md bg-gradient-to-r from-purple-900/20 to-purple-800/20 shadow-[0_4px_20px_rgba(168,85,247,0.25)]"
        >
          <SparklesIcon className="text-purple-400/90 h-4 w-4 drop-shadow-[0_0_6px_rgba(168,85,247,0.4)]" />
          <h1 className="Welcome-text text-[14px] font-medium">
           Crafting with cutting-edge technology
          </h1>
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-extrabold leading-tight mt-[12px] text-center mb-[8px] tracking-tight relative inline-block'
        >
          {/* Base text (gray) */}
          <span className='text-gray-400/70'>
            Building the future with innovative solutions
          </span>
          {/* Animated gradient overlay reveal */}
          <motion.span
            ref={titleRef}
            className='absolute inset-0 text-transparent bg-clip-text drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]'
            style={{
              backgroundImage: 'linear-gradient(90deg, rgba(168,85,247,1) 0%, rgba(236,72,153,1) 35%, rgba(34,211,238,1) 70%, rgba(16,185,129,1) 100%)',
              backgroundPosition: 'left',
              backgroundSize: bgSize as unknown as string,
              opacity: baseOpacity as unknown as number,
            }}
            aria-hidden
          >
            Building the future with innovative solutions
          </motion.span>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.98 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
          }}
          className='h-[3px] w-[80px] sm:w-[100px] md:w-[120px] rounded-full bg-gradient-to-r from-purple-500/80 via-pink-500/60 to-cyan-400/80 mb-4 shadow-[0_0_10px_rgba(168,85,247,0.3)]'
        />
        <motion.div
        variants={slideInFromRight(0.5)}
        className='text-[15px] sm:text-[17px] md:text-[19px] lg:text-[21px] mb-8 mt-[6px] text-center font-light tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]'
        >
            <motion.span
              initial={{ color: 'rgba(156,163,175,0.7)' }}
              whileInView={{ color: 'rgba(229,231,235,0.95)' }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent"
            >
              Transforming ideas into exceptional digital experiences
            </motion.span>

        </motion.div>

    </motion.div>
  )
}

export default SkillText