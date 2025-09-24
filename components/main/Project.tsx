"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromTop } from '@/utils/motion'
import ProjectCard from '../sub/ProjectCard'
import Image from 'next/image'

const projects = [
  {
    src: '/emr.png', //add image
    title: 'EMR (Dubai)',
    description: 'Electronic Medical Records system tailored for Dubai clinics: patient profiles, appointments, e-prescriptions, and role-based access.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'MYSQL','Tanstack ',]
  },
  {
    src: '/Findnx.png', //add image
    title: 'FindNX Car Sales (Kerala)',
    description: 'OLX-style marketplace focused on Kerala car sales: listing management, chat, filters, and secure user verification.',
    technologies: ['Next.js', 'MongoDB', 'Socket.io', 'Tailwind CSS']
  },
  {
    src: '/lms.png', //add image
    title: 'Learning Management System',
    description: 'LMS platform with courses, lessons, quizzes, progress tracking, and instructor dashboards.',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe']
  }
]

const Project = () => {
  return (
    <section id='project' className='relative flex flex-col items-center justify-center py-16 px-6 md:px-20 overflow-hidden'>
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
          <h1 className='text-[40px] md:text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4'>
            My Projects
          </h1>
          <p className='text-lg text-gray-300 max-w-2xl mx-auto'>
            Here are some of my recent projects that showcase my skills in modern web development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className='w-full'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
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
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className='mt-16 text-center'
        >
          <p className='text-gray-300 mb-6'>
            Want to see more of my work?
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='https://github.com'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25'
            >
              View on GitHub
            </a>
            <a
              href='#contact'
              className='border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300'
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Project