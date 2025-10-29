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
      className="cursor-pointer relative w-full mx-auto flex flex-col rounded-2xl bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-black/60 backdrop-blur-lg border border-white/10 overflow-hidden shadow-2xl shadow-black/40 group transition-all duration-500 h-[520px] sm:h-[560px] md:h-[600px] lg:h-[640px] group-hover:border-purple-400/30 group-hover:shadow-purple-500/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -12, scale: 1.03, boxShadow: "0 25px 50px rgba(0,0,0,0.6), 0 0 30px rgba(168,85,247,0.3)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      onClick={() => {
        if (link) {
          window.open(link, '_blank', 'noopener,noreferrer')
        } else if (onClick) {
          onClick()
        }
      }}
    >
      {/* Image Section - fills card; content overlays on hover */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <Image
          src={src || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover w-full h-full transition-all duration-700 group-hover:scale-105 group-hover:rotate-1"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Content Section - partially visible; slides up on hover */}
      <div className="absolute left-0 right-0 bottom-0 p-6 sm:p-7 md:p-8 bg-gradient-to-br from-black/90 via-black/85 to-black/80 backdrop-blur-sm z-10 transition-all duration-600 ease-out translate-y-1/2 group-hover:translate-y-0 group-hover:bg-gradient-to-br group-hover:from-black/95 group-hover:via-gray-900/90 group-hover:to-black/85">
        
        {/* Title - Always Visible */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white drop-shadow-lg mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-blue-300 group-hover:to-cyan-400 transition-all duration-500 text-center break-words leading-tight">
          {title}
        </h3>

        {/* Description - shows when box slides up */}
        <div className="h-24 sm:h-28 md:h-32 lg:h-36 flex items-start mb-6">
          <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed drop-shadow-md text-center break-words group-hover:text-white transition-colors duration-500">
            {description}
          </p>
        </div>

        {/* Call to Action - Always Visible */}
        <div className="mt-auto mb-4">
          <div className="flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <span className="text-purple-400 font-semibold text-sm sm:text-base md:text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-blue-300 group-hover:to-cyan-400 transition-all duration-500 drop-shadow-md">
              View Case Study →
            </span>
          </div>
        </div>

        {/* Technologies - Hidden by default, shows on hover */}
        {technologies && (
          <div className="flex flex-wrap gap-2 sm:gap-2.5 justify-center pt-4 border-t border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out max-h-0 group-hover:max-h-32 overflow-hidden">
            {technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium bg-gradient-to-r from-gray-600/40 to-gray-700/40 text-gray-100 rounded-full border border-gray-500/50 backdrop-blur-sm drop-shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-purple-600/30 group-hover:to-cyan-600/30 group-hover:border-purple-400/50 group-hover:text-white break-words"
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
