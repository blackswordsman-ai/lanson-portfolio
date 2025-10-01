'use client'
import React from 'react'
import {motion}  from 'framer-motion'
import type { Variants } from 'framer-motion'
import {useInView } from 'react-intersection-observer'
import { Icon } from '@iconify/react'

interface Props{
    icon:string;
    size?:number;
    index:number;
    animation?: string;
    delay?: number;
    duration?: number;
    hoverEffect?: string;
}

const SkillDataProvider = ({icon, size = 60, animation = "fadeInUp", delay = 0, duration = 0.6, hoverEffect = "scale"}: Props) => {
    // Responsive size based on screen
    const responsiveSize = size > 50 ? Math.max(size * 0.7, 40) : size;
    const {ref, inView} =useInView({
        triggerOnce:true,
        
    })

    // Define animation variants based on animation type
    const getAnimationVariants = (animationType: string): Variants => {
      const variants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      };

      switch (animationType) {
        case "bounce":
          variants.hidden = { opacity: 0, y: -20, scale: 0.8 };
          variants.visible = { opacity: 1, y: 0, scale: 1 };
          break;
        case "fadeInUp":
          variants.hidden = { opacity: 0, y: 30 };
          variants.visible = { opacity: 1, y: 0 };
          break;
        case "slideInLeft":
          variants.hidden = { opacity: 0, x: -30 };
          variants.visible = { opacity: 1, x: 0 };
          break;
        case "rotateIn":
          variants.hidden = { opacity: 0, rotate: -180, scale: 0.5 };
          variants.visible = { opacity: 1, rotate: 0, scale: 1 };
          break;
        case "zoomIn":
          variants.hidden = { opacity: 0, scale: 0.5 };
          variants.visible = { opacity: 1, scale: 1 };
          break;
        case "fadeInDown":
          variants.hidden = { opacity: 0, y: -30 };
          variants.visible = { opacity: 1, y: 0 };
          break;
        case "slideInRight":
          variants.hidden = { opacity: 0, x: 30 };
          variants.visible = { opacity: 1, x: 0 };
          break;
        case "fadeIn":
          variants.hidden = { opacity: 0 };
          variants.visible = { opacity: 1 };
          break;
        case "bounceIn":
          variants.hidden = { opacity: 0, scale: 0.3 };
          variants.visible = { opacity: 1, scale: 1 };
          break;
        case "flipInX":
          variants.hidden = { opacity: 0, rotateX: -90 };
          variants.visible = { opacity: 1, rotateX: 0 };
          break;
        case "slideInUp":
          variants.hidden = { opacity: 0, y: 30 };
          variants.visible = { opacity: 1, y: 0 };
          break;
        case "fadeInLeft":
          variants.hidden = { opacity: 0, x: -30 };
          variants.visible = { opacity: 1, x: 0 };
          break;
        case "flipInY":
          variants.hidden = { opacity: 0, rotateY: -90 };
          variants.visible = { opacity: 1, rotateY: 0 };
          break;
        default:
          variants.hidden = { opacity: 0, y: 10 };
          variants.visible = { opacity: 1, y: 0 };
      }
      return variants;
    };

    const iconVariants = getAnimationVariants(animation);

    // Define hover effects
    const getHoverEffect = (hoverType: string) => {
      switch (hoverType) {
        case "pulse":
          return { scale: 1.1 };
        case "scale":
          return { scale: 1.15 };
        case "glow":
          return { 
            scale: 1.1,
            filter: "drop-shadow(0 0 15px rgba(168,85,247,0.6))"
          };
        case "bounce":
          return { 
            scale: 1.2
          };
        case "rotate":
          return { rotate: 360, scale: 1.1 };
        default:
          return { scale: 1.1 };
      }
    };
  return (
    <motion.div
    ref={ref}
    initial="hidden"
    variants={iconVariants} 
    animate={inView ? "visible" : "hidden"}
    whileHover={getHoverEffect(hoverEffect)}
    transition={{ 
      delay: delay, 
      duration: duration, 
      ease: 'easeOut',
      type: "spring",
      stiffness: 100
    }}
    className='flex items-center justify-center group cursor-pointer'
    >
      <div className='relative'>
        {/* Enhanced glow effect that responds to hover */}
        <motion.div 
          className='absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-xl rounded-full scale-150'
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          whileHover={{ 
            scale: hoverEffect === "pulse" ? 1 : 1.05,
            transition: { duration: 0.2 }
          }}
        >
          <Icon
            icon={icon}
            width={responsiveSize}
            height={responsiveSize}
            className='relative z-10 opacity-90 hover:opacity-100 transition-all duration-300 drop-shadow-[0_0_8px_rgba(168,85,247,0.3)] hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.5)]'
          />
        </motion.div>
      </div>
    </motion.div> 
  )
}

export default SkillDataProvider