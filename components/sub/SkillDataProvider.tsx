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
    className='flex items-center justify-center'
    >
      <Icon
        icon={icon}
        width={size}
        height={size}
        className='opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105'
      />
    </motion.div> 
  )
}

export default SkillDataProvider