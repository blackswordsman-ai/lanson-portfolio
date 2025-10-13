"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromTop } from '@/utils/motion'

interface Experience {
  company: string
  position: string
  duration: string
  location: string
  responsibilities: string[]
  technologies: string[]
  current?: boolean
}

const experiences: Experience[] = [
  {
    company: 'Adam Finastra',
    position: 'Full Stack MERN Developer',
    duration: 'Present',
    location: 'Dubai Client',
    current: true,
    responsibilities: [
      'Developed and maintained full-stack web applications using MERN stack',
      'Collaborated with Dubai-based clients to deliver scalable solutions',
      'Implemented RESTful APIs and integrated third-party services',
      'Optimized application performance and ensured code quality',
      'Worked in agile environment with cross-functional teams'
    ],
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'TypeScript', 'Next.js', 'Tailwind CSS']
  }
]

const WorkExperience = () => {
  return (
    <section 
      id='experience' 
      className='relative flex flex-col items-center justify-center pt-8 pb-6 sm:pt-12 sm:pb-8 md:pt-16 md:pb-12 lg:pt-20 lg:pb-16 px-4 sm:px-6 md:px-20 overflow-hidden min-h-[500px]'
    >
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent pointer-events-none' />
      
      <div className='relative z-20 w-full max-w-6xl mx-auto'>
        {/* Header */}
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className='text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-4 sm:px-6'
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
              Work Experience
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
            My professional journey in software development
          </motion.p>
        </motion.div>

        {/* Experience Cards */}
        <div className='relative'>
          {/* Timeline line */}
          <div className='absolute left-4 sm:left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/40 via-purple-300/40 to-cyan-400/40 transform md:-translate-x-1/2' />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className={`relative mb-8 sm:mb-12 md:mb-16 ${index % 2 === 0 ? 'md:pr-[50%] md:pl-0' : 'md:pl-[50%] md:pr-0'} pl-12 sm:pl-16`}
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                className='absolute left-[7px] sm:left-[23px] md:left-1/2 top-8 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 border-4 border-[#030014] shadow-lg shadow-purple-500/50 z-10'
              >
                {exp.current && (
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className='absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400'
                  />
                )}
              </motion.div>

              {/* Experience Card */}
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`relative bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl shadow-black/20 hover:shadow-purple-500/20 transition-all duration-300 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}
              >
                {/* Current badge */}
                {exp.current && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className='absolute -top-3 right-4 px-4 py-1.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-xs font-semibold text-white shadow-lg'
                  >
                    Currently Working
                  </motion.div>
                )}

                {/* Company & Position */}
                <div className='mb-4'>
                  <h3 className='text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2'>
                    {exp.position}
                  </h3>
                  <div className='flex flex-wrap items-center gap-2 mb-2'>
                    <span className='text-lg sm:text-xl font-semibold text-white'>
                      {exp.company}
                    </span>
                    <span className='text-gray-400'>•</span>
                    <span className='text-sm sm:text-base text-gray-300 flex items-center gap-1'>
                      <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clipRule='evenodd' />
                      </svg>
                      {exp.location}
                    </span>
                  </div>
                  <div className='flex items-center gap-2 text-sm text-purple-300/80'>
                    <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clipRule='evenodd' />
                    </svg>
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Divider */}
                <div className='h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-4' />

                {/* Responsibilities */}
                <div className='mb-4'>
                  <h4 className='text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider'>Key Responsibilities</h4>
                  <ul className='space-y-2'>
                    {exp.responsibilities.map((resp, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: idx * 0.1 }}
                        className='flex items-start gap-2 text-sm sm:text-base text-gray-400'
                      >
                        <span className='text-cyan-400 mt-1 flex-shrink-0'>▹</span>
                        <span>{resp}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className='text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider'>Technologies</h4>
                  <div className='flex flex-wrap gap-2'>
                    {exp.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        viewport={{ once: false }}
                        transition={{ delay: idx * 0.05 }}
                        className='px-3 py-1.5 text-xs sm:text-sm font-medium bg-purple-500/10 text-purple-300/90 rounded-full border border-purple-500/20 hover:bg-purple-500/20 hover:border-purple-400/40 transition-all duration-300 cursor-default'
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkExperience