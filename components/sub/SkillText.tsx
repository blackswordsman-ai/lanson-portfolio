"use client"
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion' 
import React from 'react'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
         <motion.div
          variants={slideInFromTop}
          className="welcome-box py-[8px] px-[12px] border-[#7042f88b] opacity-[0.95] rounded-full flex items-center gap-2 backdrop-blur-md bg-white/5 shadow-[0_2px_20px_rgba(112,66,248,0.15)]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
           Think better with Next js 13 
          </h1>
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] md:text-[44px] font-semibold mt-[14px] text-center mb-[10px] text-transparent bg-clip-text bg-gradient-to-r from-[#b49bff] via-white to-[#7dd3fc] drop-shadow-[0_4px_16px_rgba(180,155,255,0.25)]'
        >
            Making apps with modern technologies

        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[18px] md:text-[20px] text-gray-200/90 mb-10 mt-[6px] text-center italic tracking-wide'
        >
            Never miss a task, deadline or idea

        </motion.div>

    </div>
  )
}

export default SkillText