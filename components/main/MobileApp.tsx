/**
 * MobileApp.tsx
 *
 * Showcases the flagship mobile application using the same visual language as the project section.
 * The layout pairs a rich feature/stack overview with the existing ProjectCard for visual consistency.
 */
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { slideInFromTop } from '@/utils/motion'
import ProjectCard from '../sub/ProjectCard'

type HighlightStat = {
  label: string
  value: string
}

type MobileFeature = string

type MobileAppDetails = {
  src: string
  title: string
  description: string
  technologies: string[]
  platforms: string[]
  features: MobileFeature[]
  stats: HighlightStat[]
}

const highlightedMobileApp: MobileAppDetails = {
  src: '/book.jpg',
  title: 'BookSpace Social Reader',
  description:
    'Developed a full-stack social reading platform where readers sign up on mobile, follow friends, and browse a personalized feed of reviews with rich imagery, ratings, and reading stats.',
  technologies: ['React Native (Expo)', 'TypeScript', 'Express', 'Node.js', 'MongoDB', 'Cloudinary'],
  platforms: ['iOS', 'Android'],
  features: [
    'JWT-secured authentication flow with email verification, social login hooks, and device-aware sessions',
    'Infinite, paginated home feed that surfaces reviews, quotes, and cover art from followed readers',
    'Profile tabs with reading lists, progress tracking, media uploads to Cloudinary, and rating analytics',
    'Offline-friendly caching layers using React Query, plus background sync for new reviews and likes'
  ],
  stats: [
    { label: 'Role', value: 'Lead React Native Engineer · Backend Architect' },
    { label: 'Backend', value: 'Express APIs · MongoDB Atlas · Cloudinary media pipeline' },
    { label: 'Focus', value: 'Social discovery · Content moderation · Performance' },
    { label: 'Release', value: 'Private beta → TestFlight soft launch' }
  ]
}

const MobileApp = () => {
  return (
    <section
      id='mobile-apps'
      className='relative flex flex-col items-center justify-center pt-12 pb-10 sm:pt-16 sm:pb-14 md:pt-20 md:pb-16 lg:pt-24 lg:pb-20 px-4 sm:px-6 md:px-16 overflow-hidden'
    >
      {/* Atmospheric background */}
      <div className='absolute inset-0 z-0'>
        <motion.div
          aria-hidden
          initial={{ opacity: 0.65, scale: 1 }}
          animate={{ opacity: [0.5, 0.7, 0.55], scale: [1, 1.04, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className='absolute inset-0 flex items-center justify-center'
        >
          <Image
            src='/window.svg'
            alt=''
            fill
            className='object-cover opacity-25 md:opacity-20 mix-blend-lighten pointer-events-none'
            priority={false}
          />
        </motion.div>
        <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80' />
        <div className='absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-600/10 blur-3xl' />
      </div>

      <div className='relative z-20 w-full max-w-7xl mx-auto'>
        {/* Header */}
        <motion.div
          variants={slideInFromTop}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: false, amount: 0.35 }}
          className='text-center mb-10 sm:mb-12 md:mb-14 px-2 sm:px-6'
        >
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight mb-3 text-white drop-shadow-xl'>
            <motion.span
              className='inline-block text-white bg-clip-text drop-shadow-md'
              initial={{ backgroundPosition: '0% 50%', opacity: 0.9 }}
              whileInView={{ backgroundPosition: '100% 50%', opacity: 1 }}
              viewport={{ once: false, amount: 0.45 }}
              transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
              style={{
                backgroundImage:
                  'linear-gradient(90deg, rgba(168,85,247,1) 0%, rgba(190,186,255,1) 50%, rgba(34,211,238,1) 100%)',
                backgroundSize: '200% 100%',
                textShadow: '2px 2px 6px rgba(0,0,0,0.65)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Mobile App Development
            </motion.span>
          </h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.55 }}
            className='h-[2px] w-[56px] sm:w-[72px] md:w-[84px] lg:w-[96px] mx-auto bg-gradient-to-r from-purple-500/60 via-purple-300/60 to-cyan-400/60 rounded-full mb-3'
          />
          <motion.p
            initial={{ opacity: 0.6, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.45 }}
            transition={{ duration: 0.6 }}
            className='text-sm sm:text-base md:text-lg text-gray-200/90 max-w-2xl mx-auto leading-relaxed drop-shadow'
          >
            A closer look at the flagship React Native build—crafted with the same attention to UX motion,
            performance budgets, and collaborative workflows that power the web projects.
          </motion.p>
        </motion.div>

        {/* Content */}
        <div className='relative z-20 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start'>
          {/* Feature / stack overview */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className='relative rounded-3xl border border-white/10 bg-black/45 backdrop-blur-xl shadow-2xl shadow-purple-900/20 overflow-hidden'
          >
            <div className='absolute -top-24 -left-24 h-56 w-56 rounded-full bg-purple-500/10 blur-3xl' />
            <div className='absolute -bottom-32 -right-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl' />

            <div className='relative p-6 sm:p-8 md:p-10'>
              <div className='flex flex-wrap items-center gap-3 mb-6'>
                {highlightedMobileApp.platforms.map((platform, index) => (
                  <motion.span
                    key={platform}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className='px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-widest text-purple-200 bg-purple-500/15 border border-purple-400/30 rounded-full backdrop-blur'
                  >
                    {platform}
                  </motion.span>
                ))}
              </div>

              <div className='space-y-4'>
                {highlightedMobileApp.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.45 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className='flex items-start gap-4 rounded-2xl border border-white/5 bg-white/5 bg-gradient-to-br from-white/5 via-white/0 to-white/0 p-4 sm:p-5'
                  >
                    <span className='mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/70 to-cyan-400/70 text-xs font-semibold text-white shadow-lg shadow-purple-500/30'>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className='text-sm sm:text-base text-gray-100 leading-relaxed'>{feature}</p>
                  </motion.div>
                ))}
              </div>

              <div className='mt-8 grid gap-4 sm:grid-cols-2'>
                {highlightedMobileApp.stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className='rounded-2xl border border-white/10 bg-gradient-to-br from-black/50 via-black/40 to-black/30 px-4 py-5 shadow-lg shadow-black/20 hover:border-purple-400/40 hover:shadow-purple-500/20 transition-all duration-300'
                  >
                    <p className='text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2'>
                      {stat.label}
                    </p>
                    <p className='text-sm sm:text-base text-white/95 leading-snug'>{stat.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Project card adapts the existing project design */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className='flex flex-col gap-6'
          >
            <ProjectCard
              src={highlightedMobileApp.src}
              title={highlightedMobileApp.title}
              description={highlightedMobileApp.description}
              technologies={highlightedMobileApp.technologies}
            />

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.45 }}
              transition={{ duration: 0.45 }}
              className='rounded-2xl border border-white/10 bg-black/40 backdrop-blur-lg px-6 py-5 shadow-xl shadow-purple-900/15'
            >
              <h3 className='text-sm font-semibold uppercase tracking-widest text-gray-300 mb-3'>
                Delivery Highlights
              </h3>
              <ul className='space-y-2 text-sm text-gray-200'>
                <li className='flex items-center gap-2'>
                  <span className='h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400' />
                  Unified the mobile design system with the portfolio visual language for brand cohesion.
                </li>
                <li className='flex items-center gap-2'>
                  <span className='h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400' />
                  Delivered Expo EAS CI/CD pipelines with automated beta builds and over-the-air updates.
                </li>
                <li className='flex items-center gap-2'>
                  <span className='h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400' />
                  Instrumented analytics events capturing engagement, retention, and review interactions.
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MobileApp

