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
  demoUrl?: string;
  codeUrl?: string;
}

const projects: ProjectItem[] = [
  {
    src: '/emr.png', //add image
    title: 'EMR (Dubai)',
    description: 'Electronic Medical Records system tailored for Dubai clinics: patient profiles, appointments, e-prescriptions, and role-based access.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'MYSQL','Tanstack '],
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    src: '/Findnx.png', //add image
    title: 'FindNX Car Sales (Kerala)',
    description: 'OLX-style marketplace focused on Kerala car sales: listing management, chat, filters, and secure user verification.',
    technologies: ['Next.js', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    src: '/lms.png', //add image
    title: 'Learning Management System',
    description: 'LMS platform with courses, lessons, quizzes, progress tracking, and instructor dashboards.',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe'],
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    src: '/MoneyManagemnt.png', //add image
    title: 'Personal Finance Manager',
    description: 'Comprehensive money management app with expense tracking, budget planning, investment monitoring, and financial analytics dashboard.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'Express'],
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    src: '/sealpost.png', //add image
    title: 'Email Communication Platform',
    description: 'Advanced email management system with templates, automation, analytics, and team collaboration features for business communications.',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Nodemailer', 'Socket.io'],
    demoUrl: '#',
    codeUrl: '#'
  }
]

const Project = () => {
  return (
    <section id='project' className='relative flex flex-col items-center justify-center py-12 sm:py-16 px-4 sm:px-6 md:px-20 overflow-hidden'>
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
        <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60' />
      </div>
      <div className='relative z-10 w-full max-w-7xl mx-auto'>
        {/* Header */}
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          animate="visible"
          className='text-center mb-16'
        >
          <h1 className='text-3xl sm:text-4xl md:text-[40px] lg:text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4'>
            My Projects
          </h1>
          <p className='text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4 sm:px-0'>
            Here are some of my recent projects that showcase my skills in modern web development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className='w-full'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={slideInFromTop}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.2 }}
              >
                <ProjectCard
                  src={project.src}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  demoUrl={project.demoUrl}
                  codeUrl={project.codeUrl}
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