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

const SkillDataProvider = ({
  icon,
  size = 60,
  index,
  animation = "fadeInUp",
  delay = 0,
  duration = 0.6,
  hoverEffect = "scale",
}: Props) => {
  const responsiveSize = size > 50 ? Math.max(size * 0.7, 40) : size;
  const { ref, inView } = useInView({
    threshold: 0.2, // trigger when 20% visible
  });

  // Define per-icon animation variants
  const getAnimationVariants = (animationType: string): Variants => {
    switch (animationType) {
      case "rotate":
        return {
          hidden: { opacity: 0, rotate: -180, scale: 0.5 },
          visible: { opacity: 1, rotate: 0, scale: 1 },
        };
      case "bounce":
        return {
          hidden: { opacity: 0, y: -20, scale: 0.8 },
          visible: { opacity: 1, y: 0, scale: 1 },
        };
      case "fadeInUp":
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        };
      case "slideInLeft":
        return {
          hidden: { opacity: 0, x: -30 },
          visible: { opacity: 1, x: 0 },
        };
      case "slideInRight":
        return {
          hidden: { opacity: 0, x: 30 },
          visible: { opacity: 1, x: 0 },
        };
      case "flip":
        return {
          hidden: { opacity: 0, rotateY: -90 },
          visible: { opacity: 1, rotateY: 0 },
        };
      default:
        return {
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        };
    }
  };

  const iconVariants = getAnimationVariants(animation);

  // Hover effects
  const getHoverEffect = (hoverType: string) => {
    switch (hoverType) {
      case "pulse": return { scale: 1.1 };
      case "scale": return { scale: 1.15 };
      case "glow": return { scale: 1.1, filter: "drop-shadow(0 0 15px rgba(168,85,247,0.6))" };
      case "bounce": return { scale: 1.2 };
      case "rotate": return { rotate: 360, scale: 1.1 };
      default: return { scale: 1.1 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={iconVariants}
      animate={inView ? "visible" : "hidden"} // animate every time in view
      whileHover={getHoverEffect(hoverEffect)}
      transition={{
        delay: (delay || 0) + index * 0.05, // staggered delay
        duration: duration,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      }}
      className="flex items-center justify-center group cursor-pointer"
    >
      <div className="relative">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-xl rounded-full scale-150"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          whileHover={{
            scale: hoverEffect === "pulse" ? 1 : 1.05,
            transition: { duration: 0.2 },
          }}
        >
          <Icon
            icon={icon}
            width={responsiveSize}
            height={responsiveSize}
            className="relative z-10 opacity-90 hover:opacity-100 transition-all duration-300 drop-shadow-[0_0_8px_rgba(168,85,247,0.3)] hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.5)]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};


export default SkillDataProvider