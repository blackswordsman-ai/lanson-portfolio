"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromTop } from '@/utils/motion'
import ProjectCard from '../sub/ProjectCard'

const projects = [
  {
    src: '/NextWebsite.png',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution built with Next.js, featuring modern UI, payment integration, and admin dashboard.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Prisma']
  },
  {
    src: '/CardImage.png',
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, team collaboration, and advanced analytics.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB']
  },
  {
    src: '/SpaceWebsite.png',
    title: 'Portfolio Website',
    description: 'Modern portfolio website with smooth animations, responsive design, and interactive elements.',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript']
  }
]

const Project = () => {
  return (
    <section id='project' className='flex flex-col items-center justify-center py-16 px-4'>
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
      <div className='w-full max-w-7xl mx-auto'>
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
    </section>
  )
}

export default Project