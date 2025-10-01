"use client"
import Image from "next/image"
import { motion, useReducedMotion, Variants } from "framer-motion"

interface Props {
  src: string
  title: string
  description: string
  technologies?: string[]
  demoUrl?: string
  codeUrl?: string
}

const ProjectCard = ({ src, title, description, technologies, demoUrl, codeUrl }: Props) => {
  const shouldReduceMotion = useReducedMotion()
  const floatVariants: Variants = {
    still: { y: 0 },
    float: {
      y: [0, -12, 0],
      transition: {
        duration: 6.5,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "mirror",
      },
    },
  }

  return (
    <motion.div
      className="relative overflow-hidden rounded-xl shadow-lg shadow-black/50 border border-white/5 bg-black/40 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 group will-change-transform"
      whileHover={{ y: -18, scale: 1.01 }}
      variants={floatVariants}
      animate={shouldReduceMotion ? "still" : "float"}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <Image
          src={src || "/placeholder.svg"}
          alt={title}
          width={400}
          height={250}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-100 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
          {title}
        </h3>
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">{description}</p>

        {/* Technologies */}
        {technologies && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium bg-purple-500/10 text-purple-300/80 rounded-full border border-purple-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <a
            className="flex-1 bg-gradient-to-r from-purple-600/80 to-cyan-600/80 hover:from-purple-700/90 hover:to-cyan-700/90 text-white text-xs sm:text-sm font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-md shadow-black/30 text-center"
            href={demoUrl ?? "#"}
            target={demoUrl ? "_blank" : undefined}
            rel={demoUrl ? "noopener noreferrer" : undefined}
            aria-disabled={!demoUrl}
          >
            Live Demo
          </a>
          <a
            className="flex-1 border border-purple-500/40 text-purple-400/90 hover:bg-purple-500/20 hover:text-purple-300 hover:border-purple-500/60 text-xs sm:text-sm font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-center"
            href={codeUrl ?? "#"}
            target={codeUrl ? "_blank" : undefined}
            rel={codeUrl ? "noopener noreferrer" : undefined}
            aria-disabled={!codeUrl}
          >
            Code
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
