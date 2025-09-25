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
          className="welcome-box py-[8px] px-[12px] border border-purple-500/20 opacity-[0.9] rounded-full flex items-center gap-2 backdrop-blur-md bg-black/30 shadow-[0_2px_10px_rgba(168,85,247,0.15)]"
        >
          <SparklesIcon className="text-purple-400/90 mr-[10px] h-5 w-5 drop-shadow-[0_0_4px_rgba(168,85,247,0.3)]" />
          <h1 className="Welcome-text text-[13px]">
           Think better with Next js 13 
          </h1>
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] md:text-[44px] font-semibold mt-[14px] text-center mb-[10px] text-transparent bg-clip-text bg-gradient-to-r from-purple-400/90 via-gray-200 to-cyan-400/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]'
        >
            Making apps with modern technologies

        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[18px] md:text-[20px] text-gray-400/70 mb-10 mt-[6px] text-center italic tracking-wide drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]'
        >
            Never miss a task, deadline or idea

        </motion.div>

    </div>
  )
}

export default SkillText