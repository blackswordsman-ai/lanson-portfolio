"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromTop } from '@/utils/motion'
import ProjectCard from '../sub/ProjectCard'
import Image from 'next/image'

type ProjectItem = {
  src: string;
  title: string;
  description: string;
  technologies: string[];
}

const projects: ProjectItem[] = [
  {
    src: '/emr.png',
    title: 'EMR (Dubai)',
    description: 'Electronic Medical Records system tailored for Dubai clinics: patient profiles, appointments, e-prescriptions, and role-based access.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'MYSQL', 'Tanstack'],
  },
  {
    src: '/Findnx.png',
    title: 'FindNX Car Sales (Kerala)',
    description: 'OLX-style marketplace focused on Kerala car sales: listing management, chat, filters, and secure user verification.',
    technologies: ['Next.js', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
  },
  {
    src: '/lms.png',
    title: 'Learning Management System',
    description: 'LMS platform with courses, lessons, quizzes, progress tracking, and instructor dashboards.',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe'],
  },
  {
    src: '/MoneyManagemnt.png',
    title: 'Personal Finance Manager',
    description: 'Comprehensive money management app with expense tracking, budget planning, investment monitoring, and financial analytics dashboard.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'Express'],
  },
  {
    src: '/sealpost.png',
    title: 'Email Communication Platform',
    description: 'Advanced email management system with templates, automation, analytics, and team collaboration features for business communications.',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Nodemailer', 'Socket.io'],
  }
]


const Project = () => {
  return (
    <section id='project' className='relative flex flex-col items-center justify-center pt-2 pb-6 sm:pt-3 sm:pb-8 md:pt-4 md:pb-12 lg:pt-6 lg:pb-16 px-4 sm:px-6 md:px-20 overflow-hidden min-h-[400px] sm:min-h-[500px] -mt-4 sm:-mt-6'>
      {/* Background image with subtle motion */}
      <div className='absolute inset-0 w-full h-full z-0 pointer-events-none'>
        <motion.div
          aria-hidden
          initial={{ scale: 1, y: 0 }}
          animate={{ scale: [1, 1.03, 1], y: [0, -8, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className='absolute inset-0 flex items-center justify-center'
        >
          <Image
            src='/Taures.png'
            alt='Taures background'
            fill
            className='object-contain opacity-25 md:opacity-20'
            priority
          />
        </motion.div>
        {/* Vignette/gradient overlay for readability */}
        <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/70' />
      </div>
      <div className='relative z-20 w-full max-w-7xl mx-auto'>
        {/* Header */}
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className='text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-4 sm:px-6'
        >
          <h2 className='text-3xl sm:text-4xl md:text-[44px] lg:text-[52px] font-extrabold tracking-tight mb-1 sm:mb-2'>
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
              My Projects
            </motion.span>
          </h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className='h-[2px] w-[56px] sm:w-[72px] md:w-[84px] rounded-full bg-gradient-to-r from-purple-500/60 via-purple-300/60 to-cyan-400/60 mx-auto mb-1 sm:mb-2'
          />
          <motion.p
            initial={{ color: 'rgba(203,213,225,0.65)' }}
            whileInView={{ color: 'rgba(243,244,246,0.95)' }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className='text-sm sm:text-base md:text-lg text-center max-w-2xl mx-auto px-4 sm:px-0'
          >
            Here are some of my recent projects that showcase my skills in modern web development
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className='w-full relative z-30'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8'>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard
                  src={project.src}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Project