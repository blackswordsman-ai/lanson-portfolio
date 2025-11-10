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
        <div className='relative z-20 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center'>
          {/* Narrative + feature grid */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className='space-y-10'
          >
            <div className='relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-black/70 via-black/60 to-black/70 backdrop-blur-xl shadow-2xl shadow-purple-900/20'>
              <div className='absolute -top-24 -left-24 h-56 w-56 rounded-full bg-purple-500/15 blur-3xl opacity-80' />
              <div className='absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl opacity-70' />

              <div className='relative p-8 sm:p-10 space-y-8'>
                <div className='flex flex-wrap items-center gap-3'>
                  <span className='px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.32em] text-purple-200/80 bg-purple-500/10 border border-purple-400/30 rounded-full'>
                    Case Study
                  </span>
                  {highlightedMobileApp.platforms.map((platform, index) => (
                    <motion.span
                      key={platform}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.45 }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                      className='px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-widest text-cyan-100 bg-cyan-500/10 border border-cyan-400/30 rounded-full'
                    >
                      {platform}
                    </motion.span>
                  ))}
                </div>

                <div className='space-y-4'>
                  <h3 className='text-2xl sm:text-3xl font-semibold text-white drop-shadow-xl'>
                    {highlightedMobileApp.title}
                  </h3>
                  <p className='text-sm sm:text-base md:text-lg leading-relaxed text-gray-100/90'>
                    {highlightedMobileApp.description}
                  </p>
                </div>

                <div>
                  <h4 className='text-xs font-semibold uppercase tracking-[0.35em] text-gray-400 mb-3'>
                    Tech Stack
                  </h4>
                  <div className='flex flex-wrap gap-2.5'>
                    {highlightedMobileApp.technologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.4 }}
                        transition={{ duration: 0.4, delay: index * 0.06 }}
                        className='rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs sm:text-sm text-gray-50 shadow-sm shadow-black/30 hover:border-purple-400/40 hover:bg-purple-500/20 transition-all duration-300'
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className='grid gap-4 sm:grid-cols-2'>
                  {highlightedMobileApp.stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.45 }}
                      transition={{ duration: 0.45, delay: index * 0.08 }}
                      className='rounded-2xl border border-white/12 bg-gradient-to-br from-white/8 via-black/20 to-black/10 px-5 py-5 shadow-lg shadow-black/25 hover:border-purple-400/40 hover:shadow-purple-600/25 transition-all duration-300'
                    >
                      <p className='text-[10px] sm:text-xs font-semibold uppercase tracking-[0.32em] text-gray-400 mb-2'>
                        {stat.label}
                      </p>
                      <p className='text-sm sm:text-base text-white/90 leading-snug'>
                        {stat.value}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className='flex flex-wrap items-center gap-3 pt-2'>
                  <a
                    href='#contact'
                    className='inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-700/30 transition-transform duration-300 hover:scale-[1.03] hover:shadow-purple-500/40'
                  >
                    Let’s collaborate
                  </a>
                  <span className='text-xs sm:text-sm text-gray-300/80'>
                    Discuss refinements, new feature ideas, or upcoming releases.
                  </span>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className='grid gap-4 sm:grid-cols-2'
            >
              {highlightedMobileApp.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  className='group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/6 via-white/2 to-white/0 backdrop-blur-xl p-5 shadow-lg shadow-black/30'
                >
                  <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-purple-600/15 via-transparent to-cyan-500/15' />
                  <div className='relative flex items-start gap-4'>
                    <span className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 text-white font-semibold shadow-lg shadow-purple-700/40'>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className='text-sm sm:text-base text-gray-100 leading-relaxed'>
                      {feature}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.45 }}
              transition={{ duration: 0.45 }}
              className='relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/45 backdrop-blur-xl px-8 py-6 shadow-xl shadow-purple-900/20'
            >
              <div className='absolute -right-12 top-0 h-40 w-40 rounded-full bg-purple-600/15 blur-3xl opacity-70' />
              <h4 className='text-xs font-semibold uppercase tracking-[0.32em] text-gray-400 mb-4'>
                Delivery Highlights
              </h4>
              <ul className='space-y-3 text-sm text-gray-200'>
                <li className='flex items-start gap-3'>
                  <span className='mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 shadow-sm shadow-purple-500/70' />
                  Unified the mobile design system with the broader portfolio for brand cohesion and delight.
                </li>
                <li className='flex items-start gap-3'>
                  <span className='mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 shadow-sm shadow-purple-500/70' />
                  Built Expo EAS pipelines delivering automated beta builds, OTA updates, and release analytics.
                </li>
                <li className='flex items-start gap-3'>
                  <span className='mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 shadow-sm shadow-purple-500/70' />
                  Instrumented product analytics tracking engagement, retention, and in-app social interactions.
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Immersive device mock */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className='relative flex items-center justify-center pt-6'
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}
              className='relative flex items-center justify-center'
            >
              <div className='absolute -inset-20 rounded-full bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-400/20 blur-3xl' />

              <div className='relative w-[230px] sm:w-[260px] md:w-[300px] aspect-[9/19]'>
                <div className='absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/25 via-white/10 to-transparent opacity-40 blur-xl' />
                <div className='relative h-full w-full rounded-[3rem] border border-white/20 bg-gradient-to-br from-black/70 via-black/80 to-black/60 shadow-[0_35px_80px_rgba(15,16,35,0.55)] p-3'>
                  <div className='absolute top-4 left-1/2 -translate-x-1/2 h-6 w-32 rounded-full bg-black/60' />
                  <div className='absolute top-4 left-1/2 -translate-x-1/2 h-1.5 w-20 rounded-full bg-white/20' />
                  <div className='relative h-full w-full rounded-[2.4rem] overflow-hidden bg-black/90'>
                    <Image
                      src={highlightedMobileApp.src}
                      alt={`${highlightedMobileApp.title} preview`}
                      fill
                      className='object-cover'
                      priority={false}
                    />
                  </div>
                </div>
              </div>

              {highlightedMobileApp.stats[0] && (
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                  className='hidden lg:flex absolute -left-24 top-1/3 flex-col rounded-2xl border border-white/15 bg-black/70 px-4 py-3 backdrop-blur-lg shadow-xl shadow-purple-900/30'
                >
                  <p className='text-[10px] uppercase tracking-[0.32em] text-gray-400'>
                    {highlightedMobileApp.stats[0].label}
                  </p>
                  <p className='text-sm text-white/90 mt-1'>
                    {highlightedMobileApp.stats[0].value}
                  </p>
                </motion.div>
              )}

              {highlightedMobileApp.stats[2] && (
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                  className='hidden lg:flex absolute -right-24 bottom-1/4 flex-col rounded-2xl border border-white/15 bg-gradient-to-br from-purple-600/25 to-cyan-500/25 px-4 py-3 backdrop-blur-lg shadow-xl shadow-purple-900/30'
                >
                  <p className='text-[10px] uppercase tracking-[0.32em] text-gray-100/80'>
                    {highlightedMobileApp.stats[2].label}
                  </p>
                  <p className='text-sm text-white/95 mt-1'>
                    {highlightedMobileApp.stats[2].value}
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MobileApp

