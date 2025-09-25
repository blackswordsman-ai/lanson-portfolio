'use client'
import React from 'react'
import {motion}  from 'framer-motion'
import {useInView } from 'react-intersection-observer'
import { Icon } from '@iconify/react'

interface Props{
    icon:string;
    size?:number;
    index:number;
}

const SkillDataProvider = ({icon, size = 60, index}: Props) => {
    // Responsive size based on screen
    const responsiveSize = size > 50 ? Math.max(size * 0.7, 40) : size;
    const {ref, inView} =useInView({
        triggerOnce:true,
        
    })
    const iconVariants = {
      hidden:{opacity:0, y:10, filter:'blur(2px)'},
      visible:{opacity:1, y:0, filter:'blur(0px)'}
    }

    const animationDelay =  0.3; // Delay based on index
  return (
    <motion.div
    ref={ref}
    initial="hidden"
    variants={iconVariants} 
    animate={inView ? "visible" : "hidden"}
    custom={index}
    transition={{ delay:index * animationDelay, duration:0.4, ease:'easeOut'}}
    className='flex items-center justify-center group'
    >
      <div className='relative'>
        {/* Subtle darker glow effect */}
        <div className='absolute inset-0 bg-gradient-to-r from-purple-500/15 to-cyan-500/15 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-80 transition-opacity duration-300' />
        <Icon
          icon={icon}
          width={responsiveSize}
          height={responsiveSize}
          className='relative z-10 opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110 drop-shadow-[0_0_6px_rgba(168,85,247,0.2)] hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.35)]'
        />
      </div>
    </motion.div> 
  )
}

export default SkillDataProvider