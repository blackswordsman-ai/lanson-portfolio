import {Frontend_skill, Backend_skill,  Other_skill, Full_stack, Deployment_skill, Skill} from '@/constants'
import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider'
import SkillText from '../sub/SkillText'

const Skills = () => {
  return (
    <section
     id='skills'
     className='flex flex-col items-center justify-center w-full relative pt-6 pb-8 sm:pb-12 gap-4 overflow-hidden bg-black/30'
     style={{transform:"scale(0.98)"}}
     >
      <div className='relative z-10 w-full max-w-6xl mx-auto text-center'>
        <SkillText />
   
        <h3 className='text-xs sm:text-sm uppercase tracking-widest text-gray-300/80 mt-1'>FRONTEND</h3>
        <div className='flex flex-row justify-center flex-wrap mt-2 gap-3 sm:gap-4 md:gap-6 items-center'>
          {Frontend_skill.map((skill: Skill, index: number) =>(
            <SkillDataProvider 
            key={skill.icon}
            icon={skill.icon}
            size={skill.size}
            index={index}
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
            />
          ))}
        </div>
      </div>
      <h3 className='text-xs sm:text-sm uppercase tracking-widest text-gray-300/80 mt-4'>FULL STACK</h3>
        <div className='flex flex-row justify-center flex-wrap mt-2 gap-3 sm:gap-4 md:gap-6 items-center'>
          {Full_stack.map((skill: Skill, index: number) =>(
            <SkillDataProvider 
            key={skill.icon}
            icon={skill.icon}
            size={skill.size}
            index={index}
            />
          ))}
        </div>
        
        <div className='absolute inset-0 w-full h-full'>
          <div className='absolute inset-0 z-[-10] opacity-20 overflow-hidden'>
            <video
            className='absolute inset-0 w-full h-full object-cover'
            preload='false'
            playsInline
            loop
            muted
            autoPlay
            src='cards-video.webm'
            />
            {/* Dark overlay for better contrast */}
            <div className='absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40' />

           

          </div>

        </div>
        


    </section>
  )
}

export default Skills
