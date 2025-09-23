import {Frontend_skill, Backend_skill,  Other_skill, Full_stack, } from '@/constants'
import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider'
import SkillText from '../sub/SkillText'

const Skills = () => {
  return (
    <section
     id='skills'
     className='flex flex-col items-center justify-center w-full relative py-16 gap-6'
     style={{transform:"scale(0.98)"}}
     >
      <SkillText />
   
        <h3 className='text-sm uppercase tracking-widest text-gray-300/80 mt-2'>Frontend</h3>
        <div className='flex flex-row justify-center flex-wrap mt-3 gap-6 md:gap-8 items-center'>
          {Frontend_skill.map((image, index) =>(
            <SkillDataProvider 
            key={image.Image}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            />
          ))}
        </div>
        <h3 className='text-sm uppercase tracking-widest text-gray-300/80 mt-6'>Backend</h3>
        <div className='flex flex-row justify-center flex-wrap mt-3 gap-6 md:gap-8 items-center'>
          {Backend_skill.map((image, index) =>(
            <SkillDataProvider 
            key={image.Image}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            />
          ))}
        </div>
        
        <h3 className='text-sm uppercase tracking-widest text-gray-300/80 mt-6'>Full stack</h3>
        <div className='flex flex-row justify-center flex-wrap mt-3 gap-6 md:gap-8 items-center'>
          {Full_stack.map((image, index) =>(
            <SkillDataProvider 
            key={image.Image}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            />
          ))}
        </div>
        <h3 className='text-sm uppercase tracking-widest text-gray-300/80 mt-6'>Other</h3>
        <div className='flex flex-row justify-center flex-wrap mt-3 gap-6 md:gap-8 items-center'>
          {Other_skill.map((image, index) =>(
            <SkillDataProvider 
            key={image.Image}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            />
          ))}
        </div>
      
        
        <div className='w-full h-full absolute'>
          <div className='w-full h-full z-[-10] opacity-30 absolute inset-0 flex items-center justify-center bg-cover'>
            <video
            className='w-full max-w-[1200px] h-auto mx-auto'
            preload='false'
            playsInline
            loop
            muted
            autoPlay
            src='cards-video.webm'
            />

           

          </div>

        </div>
        


    </section>
  )
}

export default Skills
