'use client'
import React from 'react'
import {motion}  from 'framer-motion'
import {useInView } from 'react-intersection-observer'
import Image from 'next/image'

interface Props{
    src:string;
    width:number;
    height:number;
    index:number;
}

const SkillDataProvider = ({src, width, height, index}: Props) => {
    const {ref, inView} =useInView({
        triggerOnce:true,
        
    })
    const imageVariants = {
      hidden:{opacity:0, y:10, filter:'blur(2px)'},
      visible:{opacity:1, y:0, filter:'blur(0px)'}
    }

    const animationDelay =  0.3; // Delay based on index
  return (
    <motion.div
    ref={ref}
    initial="hidden"
    variants={imageVariants} 
    animate={inView ? "visible" : "hidden"}
    custom={index}
    transition={{ delay:index * animationDelay, duration:0.4, ease:'easeOut'}}
    >
      <Image
      src={src}
      width={width}
      height={height}
      alt='skill image'
      className='opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105'
      />

    </motion.div> 
  )
}

export default SkillDataProvider