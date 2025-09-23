"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromTop } from '@/utils/motion'
import Image from 'next/image'

const Encryption = () => {
  return (
    <div className='flex flex-col relative items-center justify-center w-full h-[800px] overflow-hidden bg-black'>
      {/* Background video */}
      <div className='absolute inset-0 w-full h-full z-0'>
        <video
          loop
          muted
          autoPlay
          playsInline
          preload='auto'
          className='w-full h-full object-cover opacity-70'
          src='/encryption.webm'
        />
      </div>

      {/* Main content */}
      <div className='relative z-10 flex flex-col items-center justify-center'>
        {/* Lock icon above text */}
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          animate="visible"
          className='mb-6 group cursor-pointer'
        >
          <Image 
            src="/LockTop.png"
            alt='Lock Top'
            width={50}
            height={50}
            className='translate-y-5 transition-all duration-200 group-hover:translate-y-11 relative z-20'
          />
          <Image 
            src="/LockMain.png"
            alt='Lock Main'
            width={70}
            height={70}
            className='z-10 relative'
          />


        </motion.div>


        {/* Performance & Security Text */}
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          animate="visible"
          className='text-[40px] md:text-[50px] font-medium text-center text-white'
        >
          <span>
            Performance
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 ml-2 mr-2">
              &
            </span>
            Security
          </span>
        </motion.div>

      </div>
    </div>
  )
}

export default Encryption