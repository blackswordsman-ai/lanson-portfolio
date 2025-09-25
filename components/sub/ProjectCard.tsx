"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface Props{
    src:string;
    title:string;
    description:string;
    technologies?: string[];
}

const ProjectCard = ({src, title, description, technologies}:Props) => {
  return (
    <motion.div 
      className='relative overflow-hidden rounded-xl shadow-lg shadow-black/50 border border-white/5 bg-black/40 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 group'
      whileHover={{ y: -8 }}
    >
      {/* Image Container */}
      <div className='relative overflow-hidden'>
        <Image
          src={src}
          alt={title}
          width={400}
          height={250}
          className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
      </div>

      {/* Content */}
      <div className='p-4 sm:p-6'>
        <h3 className='text-lg sm:text-xl font-semibold text-gray-100 mb-3 group-hover:text-purple-400 transition-colors duration-300'>
          {title}
        </h3>
        <p className='text-gray-400 text-xs sm:text-sm leading-relaxed mb-4'>
          {description}
        </p>

        {/* Technologies */}
        {technologies && (
          <div className='flex flex-wrap gap-2'>
            {technologies.map((tech, index) => (
              <span
                key={index}
                className='px-3 py-1 text-xs font-medium bg-purple-500/10 text-purple-300/80 rounded-full border border-purple-500/20'
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className='flex flex-col sm:flex-row gap-3 mt-6'>
          <button className='flex-1 bg-gradient-to-r from-purple-600/80 to-cyan-600/80 hover:from-purple-700/90 hover:to-cyan-700/90 text-white text-xs sm:text-sm font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-md shadow-black/30'>
            Live Demo
          </button>
          <button className='flex-1 border border-purple-500/40 text-purple-400/90 hover:bg-purple-500/20 hover:text-purple-300 hover:border-purple-500/60 text-xs sm:text-sm font-semibold py-2 px-4 rounded-lg transition-all duration-300'>
            Code
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard