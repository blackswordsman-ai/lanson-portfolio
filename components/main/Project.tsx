"use client"
import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { slideInFromTop } from '@/utils/motion'
import ProjectCard from '../sub/ProjectCard'
import Image from 'next/image'

type ProjectItem = {
  src: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
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
  },
  {
    src: '/livera.png',
    title: 'Livera v-Cart App',
    description: 'Collaborative e-commerce platform with real-time cart sharing, group purchasing, and social shopping features for enhanced user engagement.',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io', 'Stripe'],
  },
  {
    src: '/taskify.png',
    title: 'Taskify Task Manager',
    description: 'Comprehensive task management platform with project organization, team collaboration, deadline tracking, and productivity analytics dashboard.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
  },
  {
    src: '/vote-app.png',
    title: 'Decentralized Voting System',
    description: 'Blockchain-based voting platform ensuring transparency, immutability, and security for democratic processes with smart contract integration.',
    technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'MetaMask'],
    link: 'https://dapp-voting-app.netlify.app/',
  }
]


const Project = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [currentScroll, setCurrentScroll] = useState(0)
  const [maxScroll, setMaxScroll] = useState(0)
  const [isAtEnd, setIsAtEnd] = useState(false)

  // Pause auto-scroll helper
  const pauseTimeoutRef = useRef<number | null>(null)
  const pauseAutoScroll = (ms = 3000) => {
    setIsHovered(true)
    if (pauseTimeoutRef.current) window.clearTimeout(pauseTimeoutRef.current)
    pauseTimeoutRef.current = window.setTimeout(() => setIsHovered(false), ms)
  }

  // Manual scroll forward/backward - scroll by 2 cards
  const scrollBy = (direction: 'forward' | 'backward') => {
    const el = scrollContainerRef.current
    if (!el) return
    
    // Calculate width of 2 cards including gap
    const cardWidth = 520 // Base card width
    const gap = 24 // Gap between cards (gap-6 = 24px)
    const twoCardsWidth = (cardWidth * 2) + gap
    
    const delta = direction === 'forward' ? twoCardsWidth : -twoCardsWidth
    const target = el.scrollLeft + delta
    el.scrollTo({ left: target, behavior: 'smooth' })
    setCurrentScroll(target)
    pauseAutoScroll()
  }

  // Check if at end of scroll
  useEffect(() => {
    if (maxScroll <= 0) return
    
    const halfScroll = maxScroll / 2
    const atEnd = currentScroll >= halfScroll
    setIsAtEnd(atEnd)
  }, [currentScroll, maxScroll])

  // Check if project section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.3 }
    )

    const projectSection = document.getElementById('project')
    if (projectSection) {
      observer.observe(projectSection)
    }

    return () => {
      if (projectSection) {
        observer.unobserve(projectSection)
      }
    }
  }, [])

  // Auto-scroll functionality
  useEffect(() => {
    if (!isInView || isHovered) return

    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    const scrollWidth = scrollContainer.scrollWidth
    const clientWidth = scrollContainer.clientWidth
    const maxScrollValue = scrollWidth - clientWidth
    
    if (maxScrollValue <= 0) return

    setMaxScroll(maxScrollValue)

    const scrollStep = 1.2 // pixels per frame - faster speed
    const scrollInterval = 12 // ~83fps - higher frequency
    const halfScrollValue = maxScrollValue / 2 // Reset at halfway point for seamless loop

    const autoScroll = () => {
      if (!isInView || isHovered) return

      setCurrentScroll(prev => {
        const newScroll = prev + scrollStep
        // Reset to beginning when we reach halfway (seamless infinite scroll)
        if (newScroll >= halfScrollValue) {
          return 0
        }
        return newScroll
      })
    }

    const interval = setInterval(autoScroll, scrollInterval)
    return () => clearInterval(interval)
  }, [isInView, isHovered])

  // Apply scroll position
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.scrollLeft = currentScroll
    }
  }, [currentScroll])

  // Cleanup pause timeout on unmount
  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) window.clearTimeout(pauseTimeoutRef.current)
    }
  }, [])

  return (
    <section id='project' className='relative flex flex-col items-center justify-center pt-8 pb-6 sm:pt-12 sm:pb-8 md:pt-16 md:pb-12 lg:pt-20 lg:pb-16 px-4 sm:px-6 md:px-20 overflow-hidden min-h-[500px] sm:min-h-[600px] md:min-h-[700px]'>
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
        <div className='absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/40' />
      </div>
      <div className='relative z-20 w-full max-w-7xl mx-auto'>
        {/* Header */}
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className='text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-4 sm:px-6 relative z-30'
        >
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight mb-2 sm:mb-3 md:mb-4 text-white drop-shadow-lg'>
            <motion.span
              className='text-white bg-clip-text drop-shadow-md'
              initial={{ backgroundPosition: '0% 50%', opacity: 0.9 }}
              whileInView={{ backgroundPosition: '100% 50%', opacity: 1 }}
              viewport={{ once: false, amount: 0.45 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              style={{
                backgroundImage: 'linear-gradient(90deg, rgba(168,85,247,1) 0%, rgba(190,186,255,1) 50%, rgba(34,211,238,1) 100%)',
                backgroundSize: '200% 100%',
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
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
            className='h-[2px] w-[56px] sm:w-[72px] md:w-[84px] lg:w-[96px] rounded-full bg-gradient-to-r from-purple-500/60 via-purple-300/60 to-cyan-400/60 mx-auto mb-2 sm:mb-3 md:mb-4'
          />
          <motion.p
            initial={{ color: 'rgba(203,213,225,0.8)' }}
            whileInView={{ color: 'rgba(243,244,246,1)' }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className='text-sm sm:text-base md:text-lg text-center max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed text-gray-200 drop-shadow-sm'
          >
            Here are some of my recent projects that showcase my skills in modern web development
          </motion.p>
        </motion.div>

        {/* Projects Horizontal Flex */}
        <div className='w-full relative z-30'>
          {/* Scroll indicators */}
          <div className='flex justify-between items-center mb-4 px-2'>
            <div className='flex items-center space-x-2'>
              <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${isInView ? 'bg-purple-400' : 'bg-gray-500'}`} />
              
            </div>
            {/* Progress bar */}
            <div className='flex items-center space-x-2'>
              <div className='w-16 h-1 bg-gray-700 rounded-full overflow-hidden'>
                <div 
                  className='h-full bg-gradient-to-r from-purple-400 via-blue-300 to-cyan-400 rounded-full transition-all duration-100'
                  style={{ 
                    width: `${maxScroll > 0 ? (currentScroll / (maxScroll / 2)) * 100 : 0}%` 
                  }}
                />
              </div>
              <div className='flex items-center space-x-1'>
                <div className='w-1 h-1 rounded-full bg-gray-600' />
                <div className='w-1 h-1 rounded-full bg-gray-600' />
                <div className='w-1 h-1 rounded-full bg-gray-600' />
              </div>
            </div>
          </div>

          {/* Arrow - fixed position, transparent icon, toggles direction only */}
          <button
            type='button'
            aria-label={isAtEnd ? 'Scroll backward' : 'Scroll forward'}
            onClick={() => scrollBy(isAtEnd ? 'backward' : 'forward')}
            className='hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-40 items-center justify-center w-16 h-16 rounded-full bg-transparent text-white/60 hover:text-white transition-transform duration-300 hover:scale-110'
          >
            <svg 
              xmlns='http://www.w3.org/2000/svg' 
              viewBox='0 0 24 24' 
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className={`w-10 h-10 transition-transform duration-500 ${isAtEnd ? 'rotate-180' : ''}`}
            >
              <polyline points='9 6 15 12 9 18' />
            </svg>
          </button>

          <div 
            ref={scrollContainerRef}
            className='flex flex-row gap-4 sm:gap-6 lg:gap-8 overflow-x-auto pb-4 scrollbar-hidden transition-all duration-300'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onScroll={(e) => setCurrentScroll((e.target as HTMLDivElement).scrollLeft)}
            style={{ scrollBehavior: 'smooth' }}
          >
            {/* First set of cards */}
            {projects.map((project, index) => (
              <motion.div
                key={`first-${index}`}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="flex-shrink-0 w-[520px] sm:w-[560px] md:w-[620px] lg:w-[680px]"
              >
                <ProjectCard
                  src={project.src}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  link={project.link}
                />
              </motion.div>
            ))}
            {/* Duplicate set for seamless infinite scroll */}
            {projects.map((project, index) => (
              <motion.div
                key={`second-${index}`}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.55, delay: (index + projects.length) * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="flex-shrink-0 w-[520px] sm:w-[560px] md:w-[620px] lg:w-[680px]"
              >
                <ProjectCard
                  src={project.src}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  link={project.link}
                />
              </motion.div>
            ))}
          </div>

          {/* Manual scroll hint */}
          <div className='flex justify-center mt-4'>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              className='flex items-center space-x-2 text-xs text-gray-400'
            >
              <span>Hover to pause auto-scroll</span>
              <div className='w-1 h-1 bg-gray-400 rounded-full animate-pulse' />
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Project