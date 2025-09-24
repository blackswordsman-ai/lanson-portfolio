"use client"
import React, { useRef, useEffect, useState } from 'react'

const NeonLogo = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const [time, setTime] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Animation loop
    const animate = () => {
      setTime(prev => prev + 0.05)
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const size = 64
    canvas.width = size
    canvas.height = size

    // Clear canvas
    ctx.clearRect(0, 0, size, size)

    // Create animated neon glow effect
    const createNeonEffect = (x: number, y: number, width: number, height: number, gradient: CanvasGradient) => {
      // Pulsing glow intensity
      const pulseIntensity = 1 + Math.sin(time * 2) * 0.3

      // Outer glow (larger, more transparent)
      ctx.save()
      ctx.shadowColor = '#00ffff'
      ctx.shadowBlur = 20 * pulseIntensity
      ctx.shadowOffsetX = 0
      ctx.shadowOffsetY = 0
      ctx.fillStyle = gradient
      ctx.fillRect(x, y, width, height)
      ctx.restore()

      // Middle glow
      ctx.save()
      ctx.shadowColor = '#ff00ff'
      ctx.shadowBlur = 15 * pulseIntensity
      ctx.shadowOffsetX = 0
      ctx.shadowOffsetY = 0
      ctx.fillStyle = gradient
      ctx.fillRect(x, y, width, height)
      ctx.restore()

      // Inner glow (main letter)
      ctx.save()
      ctx.shadowColor = '#ffffff'
      ctx.shadowBlur = 10 * pulseIntensity
      ctx.shadowOffsetX = 0
      ctx.shadowOffsetY = 0
      ctx.fillStyle = gradient
      ctx.fillRect(x, y, width, height)
      ctx.restore()
    }

    // Create animated gradient for the L
    const gradient = ctx.createLinearGradient(0, 0, size, size)
    const hueShift = Math.sin(time * 0.5) * 30 // Subtle color shifting
    
    gradient.addColorStop(0, `hsl(${180 + hueShift}, 100%, 50%)`) // Animated Cyan
    gradient.addColorStop(0.3, `hsl(${300 + hueShift}, 100%, 50%)`) // Animated Magenta
    gradient.addColorStop(0.6, `hsl(${320 + hueShift}, 100%, 50%)`) // Animated Pink
    gradient.addColorStop(1, `hsl(${320 + hueShift}, 100%, 50%)`) // Animated Pink

    // Draw the letter L
    const strokeWidth = 8
    const padding = 12

    // Vertical stroke
    createNeonEffect(
      padding, 
      padding, 
      strokeWidth, 
      size - padding * 2 - strokeWidth * 2, 
      gradient
    )

    // Horizontal stroke
    createNeonEffect(
      padding, 
      size - padding - strokeWidth, 
      size - padding * 2 - strokeWidth, 
      strokeWidth, 
      gradient
    )

    // Add animated sparkle effects
    const addSparkle = (x: number, y: number, delay: number) => {
      const sparkleTime = time + delay
      const sparkleOpacity = Math.sin(sparkleTime * 4) * 0.5 + 0.5
      const sparkleSize = Math.sin(sparkleTime * 6) * 1 + 2
      
      ctx.save()
      ctx.globalAlpha = sparkleOpacity
      ctx.fillStyle = '#ffffff'
      ctx.shadowColor = '#00ffff'
      ctx.shadowBlur = 8 * sparkleOpacity
      ctx.beginPath()
      ctx.arc(x, y, sparkleSize, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    }

    // Add animated sparkles around the L
    addSparkle(20, 25, 0)
    addSparkle(45, 35, 1)
    addSparkle(35, 50, 2)
    addSparkle(25, 40, 1.5)

    // Add floating particles
    for (let i = 0; i < 3; i++) {
      const particleX = (Math.sin(time * 0.8 + i * 2) * 15) + 32
      const particleY = (Math.cos(time * 0.6 + i * 1.5) * 10) + 32
      const particleOpacity = Math.sin(time * 2 + i) * 0.3 + 0.4
      
      ctx.save()
      ctx.globalAlpha = particleOpacity
      ctx.fillStyle = '#00ffff'
      ctx.shadowColor = '#00ffff'
      ctx.shadowBlur = 5
      ctx.beginPath()
      ctx.arc(particleX, particleY, 1, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    }

  }, [time])

  return (
    <canvas
      ref={canvasRef}
      className="cursor-pointer transition-transform duration-300 hover:scale-110 hover:rotate-12"
      style={{ width: '64px', height: '64px' }}
    />
  )
}

export default NeonLogo
