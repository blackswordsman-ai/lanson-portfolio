"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromTop } from '@/utils/motion'
import Image from 'next/image'

const Encryption = () => {
  return (
        <div className='relative w-full min-h-[400px] sm:min-h-[500px]'>
      {/* Background video with content overlay */}
      <div className='relative w-full h-full overflow-hidden'>
        <video
          loop
          muted
          autoPlay
          playsInline
          preload='auto'
          className='w-full h-full object-cover opacity-50'
          src='/PORTAL~2.webm'
        />
        
        {/* Pink/Purple overlay with decreased intensity */}
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-black/40 pointer-events-none' />
        
        {/* Content overlay inside video */}
        <div className='absolute inset-0 z-10 flex flex-col items-center justify-center pt-20 sm:pt-32 md:pt-40'>
        {/* Lock icon positioned correctly */}
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          animate="visible"
          className='mb-8 group cursor-pointer relative'
        >
          {/* Lock top positioned like in image */}
          <div className='relative z-20'>
            <Image 
              src="/LockTop.png"
              alt='Lock Top'
              width={50}
              height={50}
              className='absolute -top-8 left-1/2 transform -translate-x-1/2 transition-all duration-200 group-hover:-translate-y-2'
            />
          </div>
          
          {/* Lock main body */}
          <div className='relative z-10'>
            <Image 
              src="/LockMain.png"
              alt='Lock Main'
              width={70}
              height={70}
              className='transition-all duration-200'
            />
          </div>

        </motion.div>


            {/* Performance & Security Text */}
            <motion.div
              variants={slideInFromTop}
              initial="hidden"
              animate="visible"
              className='text-2xl sm:text-3xl md:text-[40px] lg:text-[50px] font-medium text-center text-white mb-4 px-4'
            >
          <span>
            Performance
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 ml-2 mr-2">
              &
            </span>
            Security
          </span>
        </motion.div>

            {/* Subtitle */}
            <motion.div
              variants={slideInFromTop}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className='text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 text-center mb-6 max-w-2xl px-4'
            >
          Building robust applications with cutting-edge technologies
        </motion.div>

         {/* Call to Action */}
         <motion.div
           variants={slideInFromTop}
           initial="hidden"
           animate="visible"
           transition={{ delay: 0.4 }}
           className='mt-8'
         >
           {/* <button className='bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25'>
             Explore My Work
           </button> */}
         </motion.div>

        </div>
      </div>
    </div>
  )
}

export default Encryption