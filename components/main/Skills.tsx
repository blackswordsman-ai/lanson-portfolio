import {Frontend_skill, Backend_skill,  Other_skill, Full_stack, Deployment_skill, Skill} from '@/constants'
import React, { useEffect, useRef } from 'react'
import SkillDataProvider from '../sub/SkillDataProvider'
import SkillText from '../sub/SkillText'

const Skills = () => {
  const sentinelRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return

    let hasScrolled = false
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasScrolled) {
            hasScrolled = true
            // Scroll to the next section smoothly
            const next = document.querySelector('#encryption') || document.querySelector('#project')
            if (next) {
              (next as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
            // allow re-trigger after slight delay if user scrolls back up quickly
            setTimeout(() => {
              hasScrolled = false
            }, 1200)
          }
        })
      },
      { threshold: 0.75 }
    )

    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])
  return (
    <div className='relative flex flex-col w-full overflow-hidden'>
      {/* Background Video */}
      <div className='absolute inset-0 z-0' aria-hidden>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload='auto'
          className='w-full h-full object-cover opacity-80'
        >
          <source src='/cards-video.webm' type='video/webm' />
        </video>
        {/* Lighter overlay for better video visibility while maintaining text readability */}
        <div className='absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40' />
      </div>

      {/* Content */}
      <section
       id='skills'
       className='relative z-10 flex flex-col items-center justify-center w-full pt-6 pb-8 sm:pb-12 gap-4'
       >
        <div className='w-full max-w-6xl mx-auto text-center'>
        <SkillText />
   
        <h3 className='text-xs sm:text-sm uppercase tracking-widest text-gray-300/80 mt-1'>FRONTEND</h3>
        <div className='flex flex-row justify-center flex-wrap mt-2 gap-3 sm:gap-4 md:gap-6 items-center'>
          {Frontend_skill.map((skill: Skill, index: number) =>(
            <SkillDataProvider 
            key={skill.icon}
            icon={skill.icon}
            size={skill.size}
            index={index}
            animation={skill.animation}
            delay={skill.delay}
            duration={skill.duration}
            hoverEffect={skill.hoverEffect}
            />
          ))}
        </div>
        <h3 className='text-xs sm:text-sm uppercase tracking-widest text-gray-300/80 mt-4'>BACKEND</h3>
        <div className='flex flex-row justify-center flex-wrap mt-2 gap-3 sm:gap-4 md:gap-6 items-center'>
          {Backend_skill.map((skill: Skill, index: number) =>(
            <SkillDataProvider 
            key={skill.icon}
            icon={skill.icon}
            size={skill.size}
            index={index}
            animation={skill.animation}
            delay={skill.delay}
            duration={skill.duration}
            hoverEffect={skill.hoverEffect}
            />
          ))}
        </div>
        
       
        <h3 className='text-xs sm:text-sm uppercase tracking-widest text-gray-300/80 mt-4'>DEPLOYMENT</h3>
        <div className='flex flex-row justify-center flex-wrap mt-2 gap-3 sm:gap-4 md:gap-6 items-center'>
          {Deployment_skill.map((skill: Skill, index: number) =>(
            <SkillDataProvider 
            key={skill.icon}
            icon={skill.icon}
            size={skill.size}
            index={index}
            animation={skill.animation}
            delay={skill.delay}
            duration={skill.duration}
            hoverEffect={skill.hoverEffect}
            />
          ))}
        </div>
        <h3 className='text-xs sm:text-sm uppercase tracking-widest text-gray-300/80 mt-4'>OTHER</h3>
        <div className='flex flex-row justify-center flex-wrap mt-2 gap-3 sm:gap-4 md:gap-6 items-center'>
          {Other_skill.map((skill: Skill, index: number) =>(
            <SkillDataProvider 
            key={skill.icon}
            icon={skill.icon}
            size={skill.size}
            index={index}
            animation={skill.animation}
            delay={skill.delay}
            duration={skill.duration}
            hoverEffect={skill.hoverEffect}
            />
          ))}
        </div>
        <h3 className='text-xs sm:text-sm uppercase tracking-widest text-gray-300/80 mt-4'>FULL STACK</h3>
        <div className='flex flex-row justify-center flex-wrap mt-2 gap-3 sm:gap-4 md:gap-6 items-center'>
          {Full_stack.map((skill: Skill, index: number) =>(
            <SkillDataProvider 
            key={skill.icon}
            icon={skill.icon}
            size={skill.size}
            index={index}
            animation={skill.animation}
            delay={skill.delay}
            duration={skill.duration}
            hoverEffect={skill.hoverEffect}
            />
          ))}
        </div>
        {/* Sentinel to auto-scroll to next section once icon grid bottom enters view */}
        <div ref={sentinelRef} className='h-1 w-full' />
        </div>
      </section>
    </div>
  )
}

export default Skills
