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
      className='relative overflow-hidden rounded-xl shadow-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group'
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
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
      </div>

      {/* Content */}
      <div className='p-6'>
        <h3 className='text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300'>
          {title}
        </h3>
        <p className='text-gray-300 text-sm leading-relaxed mb-4'>
          {description}
        </p>

        {/* Technologies */}
        {technologies && (
          <div className='flex flex-wrap gap-2'>
            {technologies.map((tech, index) => (
              <span
                key={index}
                className='px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30'
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className='flex gap-3 mt-6'>
          <button className='flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105'>
            Live Demo
          </button>
          <button className='flex-1 border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white text-sm font-semibold py-2 px-4 rounded-lg transition-all duration-300'>
            Code
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard