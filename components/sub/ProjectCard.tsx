"use client"
import Image from "next/image"
import { motion } from "framer-motion"

interface Props {
  src: string
  title: string
  description: string
  technologies?: string[]
  onClick?: () => void
}

const ModernProjectCard = ({ src, title, description, technologies, onClick }: Props) => {
  return (
    <motion.div
      className="cursor-pointer max-w-sm mx-auto flex flex-col rounded-2xl bg-black/40 backdrop-blur-lg border border-white/10 overflow-hidden shadow-lg shadow-black/30 group transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -20, scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 120, damping: 12 }}
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative w-full h-52 sm:h-60 lg:h-64 overflow-hidden flex-shrink-0">
        <Image
          src={src || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 flex flex-col flex-1 justify-between min-h-[220px]">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-100 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300 text-center break-words">
            {title}
          </h3>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300 text-center break-words">
            {description}
          </p>
        </div>

        {/* Technologies */}
        {technologies && (
          <div className="flex flex-wrap gap-2 justify-center mt-3">
            {technologies.map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs font-medium bg-purple-500/10 text-purple-300/80 rounded-full border border-purple-500/20 transition-transform duration-300 group-hover:scale-110 break-words"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default ModernProjectCard
