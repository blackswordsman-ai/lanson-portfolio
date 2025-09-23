import React from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    <div className='relative flex flex-col h-screen w-full overflow-hidden'>
      {/* Background Video */}
      <div className='absolute inset-0 z-0'>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload='auto'
          className='w-full h-full object-cover opacity-70'
        >
          <source src='/earth.webm' type='video/webm' />
        </video>
        {/* Dark overlay for better text readability */}
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/30 to-black/60' />
      </div>

      {/* Content */}
      <div className='relative z-10'>
        <HeroContent />
      </div>
    </div>
  )
}

export default Hero