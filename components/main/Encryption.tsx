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
        {/* Lock icon with subtle entrance */}
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
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
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
              className='text-center mb-3 px-4'
            >
              <h2 className='text-3xl sm:text-4xl md:text-[44px] lg:text-[52px] font-extrabold tracking-tight leading-tight'>
                <motion.span
                  className='text-transparent bg-clip-text'
                  initial={{ backgroundPosition: '0% 50%', opacity: 0.9 }}
                  whileInView={{ backgroundPosition: '100% 50%', opacity: 1 }}
                  viewport={{ once: false, amount: 0.45 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    backgroundImage: 'linear-gradient(90deg, rgba(168,85,247,1) 0%, rgba(190,186,255,1) 50%, rgba(34,211,238,1) 100%)',
                    backgroundSize: '200% 100%'
                  }}
                >
                  Performance & Security
                </motion.span>
              </h2>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.45 }}
              transition={{ duration: 0.5 }}
              className='h-[2px] w-[56px] sm:w-[72px] md:w-[84px] rounded-full bg-gradient-to-r from-purple-500/60 via-purple-300/60 to-cyan-400/60 mb-3'
            />

            {/* Subtitle */}
            <motion.div
              variants={slideInFromTop}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: 0.2 }}
              className='text-sm sm:text-base md:text-lg lg:text-xl text-center mb-6 max-w-2xl px-4'
            >
              <motion.span
                initial={{ color: 'rgba(203,213,225,0.65)' }}
                whileInView={{ color: 'rgba(243,244,246,0.95)' }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                Building robust applications with cutting-edge technologies
              </motion.span>
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