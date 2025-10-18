"use client"
import Image from "next/image"
import { motion } from "framer-motion"

interface Props {
  src: string
  title: string
  description: string
  technologies?: string[]
  onClick?: () => void
  link?: string
}

const ModernProjectCard = ({ src, title, description, technologies, onClick, link }: Props) => {
  return (
    <motion.div
      className="cursor-pointer w-full max-w-sm mx-auto flex flex-col rounded-2xl bg-black/40 backdrop-blur-lg border border-white/10 overflow-hidden shadow-lg shadow-black/30 group transition-all duration-300 h-[480px] sm:h-[520px] md:h-[540px] lg:h-[560px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 120, damping: 12 }}
      onClick={() => {
        if (link) {
          window.open(link, '_blank', 'noopener,noreferrer')
        } else if (onClick) {
          onClick()
        }
      }}
    >
      {/* Image */}
      <div className="relative w-full h-48 sm:h-52 md:h-56 lg:h-60 overflow-hidden flex-shrink-0">
        <Image
          src={src || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-1">
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-100 mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300 text-center break-words leading-tight">
              {title}
            </h3>
            <div className="min-h-[70px] sm:min-h-[80px] md:min-h-[90px] flex items-start">
              <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300 text-center break-words">
                {description}
              </p>
            </div>
          </div>
        </div>

        {/* Technologies - Fixed at bottom */}
        {technologies && (
          <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-white/5">
            {technologies.map((tech, i) => (
              <span
                key={i}
                className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs font-medium bg-purple-500/10 text-purple-300/80 rounded-full border border-purple-500/20 transition-transform duration-300 group-hover:scale-110 break-words"
              >
                {tech.trim()}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default ModernProjectCard
