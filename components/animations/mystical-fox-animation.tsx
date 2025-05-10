"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

export default function MysticalFoxAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const container = canvas.parentElement
      if (container) {
        canvas.width = container.clientWidth
        canvas.height = container.clientHeight
      }
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Center coordinates
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const maxRadius = Math.min(canvas.width, canvas.height) * 0.35

    // Stars
    const stars = []
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.2,
        opacity: Math.random() * 0.6 + 0.2,
        speed: Math.random() * 0.02 + 0.005,
      })
    }

    // Particles
    const particles = []
    for (let i = 0; i < 50; i++) {
      const angle = Math.random() * Math.PI * 2
      const distance = Math.random() * maxRadius * 0.9
      const colorChoices = [
        "rgba(214, 143, 58, 0.8)",
        "rgba(255, 123, 37, 0.8)",
        "rgba(255, 222, 89, 0.8)",
        "rgba(255, 51, 102, 0.6)",
      ]

      particles.push({
        x: centerX + Math.cos(angle) * distance,
        y: centerY + Math.sin(angle) * distance,
        size: Math.random() * 4 + 1,
        color: colorChoices[Math.floor(Math.random() * colorChoices.length)],
        speed: Math.random() * 0.3 + 0.05,
        angle: Math.random() * Math.PI * 2,
      })
    }

    // Fox tails
    const tails = []
    const tailCount = 9
    for (let i = 0; i < tailCount; i++) {
      const baseAngle = (i / tailCount) * Math.PI * 2
      const tailLength = maxRadius * 0.8
      const segments = 8
      const points = []

      for (let j = 0; j <= segments; j++) {
        const segmentRatio = j / segments
        const segmentAngle = baseAngle + Math.sin(segmentRatio * Math.PI) * 0.2
        const segmentDistance = tailLength * segmentRatio

        points.push({
          x: centerX + Math.cos(segmentAngle) * segmentDistance,
          y: centerY + Math.sin(segmentAngle) * segmentDistance,
          width: (1 - segmentRatio) * 10 + 2,
        })
      }

      tails.push({
        points,
        baseAngle,
        phase: Math.random() * Math.PI * 2,
        speed: 0.02 + Math.random() * 0.01,
      })
    }

    // Animation variables
    let phase = 0
    let glowIntensity = 0.7
    let glowDirection = 1
    let lastTime = 0
    const frameRate = 1000 / 60 // 60fps

    // Animation loop
    function animate(timestamp: number) {
      if (!lastTime) lastTime = timestamp
      const deltaTime = timestamp - lastTime

      if (deltaTime > frameRate && ctx && canvas) {
        lastTime = timestamp - (deltaTime % frameRate)

        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // Draw stars
        stars.forEach((star) => {
          star.y += star.speed
          if (star.y > canvas.height) {
            star.y = 0
            star.x = Math.random() * canvas.width
          }

          ctx.beginPath()
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
          ctx.fill()
        })

        // Update phase
        phase += 0.01

        // Update glow
        glowIntensity += 0.003 * glowDirection
        if (glowIntensity > 0.9) {
          glowIntensity = 0.9
          glowDirection = -1
        } else if (glowIntensity < 0.5) {
          glowIntensity = 0.5
          glowDirection = 1
        }

        // Draw mystical circle
        const circleRadius = maxRadius * 0.6
        ctx.beginPath()
        ctx.arc(centerX, centerY, circleRadius, 0, Math.PI * 2)
        const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, circleRadius)
        gradient.addColorStop(0, `rgba(214, 143, 58, ${0.1 * glowIntensity})`)
        gradient.addColorStop(0.5, `rgba(214, 143, 58, ${0.05 * glowIntensity})`)
        gradient.addColorStop(1, "rgba(214, 143, 58, 0)")
        ctx.fillStyle = gradient
        ctx.fill()

        // Draw fox tails
        tails.forEach((tail) => {
          // Update tail points based on phase
          tail.points.forEach((point, index) => {
            if (index > 0) {
              // Don't move the base point
              const segmentRatio = index / tail.points.length
              const waveAmplitude = 0.2 * segmentRatio
              const waveFrequency = 2
              const tailPhase = phase + tail.phase

              const angleOffset = Math.sin(tailPhase * waveFrequency) * waveAmplitude
              const newAngle = tail.baseAngle + angleOffset * segmentRatio * 2
              const distance = maxRadius * 0.8 * (index / tail.points.length)

              point.x = centerX + Math.cos(newAngle) * distance
              point.y = centerY + Math.sin(newAngle) * distance
            }
          })

          // Draw the tail
          if (tail.points.length >= 2) {
            // Draw the tail path
            ctx.beginPath()
            ctx.moveTo(tail.points[0].x, tail.points[0].y)

            for (let i = 1; i < tail.points.length; i++) {
              ctx.lineTo(tail.points[i].x, tail.points[i].y)
            }

            // Create gradient for the tail
            const tailGradient = ctx.createLinearGradient(
              tail.points[0].x,
              tail.points[0].y,
              tail.points[tail.points.length - 1].x,
              tail.points[tail.points.length - 1].y,
            )
            tailGradient.addColorStop(0, "rgba(214, 143, 58, 0.8)")
            tailGradient.addColorStop(0.5, "rgba(255, 123, 37, 0.6)")
            tailGradient.addColorStop(1, "rgba(255, 123, 37, 0.1)")

            ctx.strokeStyle = tailGradient
            ctx.lineWidth = 3
            ctx.lineCap = "round"
            ctx.stroke()

            // Draw glowing particles along the tail
            for (let i = 1; i < tail.points.length; i += 2) {
              const point = tail.points[i]
              ctx.beginPath()
              ctx.arc(point.x, point.y, point.width / 2, 0, Math.PI * 2)
              ctx.fillStyle = `rgba(255, 123, 37, ${0.3 * glowIntensity})`
              ctx.fill()
            }
          }
        })

        // Draw particles
        particles.forEach((particle) => {
          particle.angle += particle.speed / 80
          const orbitRadius = maxRadius * 0.85 + Math.sin(phase * 0.5) * 15
          particle.x = centerX + Math.cos(particle.angle) * orbitRadius
          particle.y = centerY + Math.sin(particle.angle) * orbitRadius

          // Particle pulsing effect
          const pulse = Math.sin(phase * 2 + particle.angle) * 0.3 + 0.7

          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size * pulse, 0, Math.PI * 2)
          ctx.fillStyle = particle.color.replace(/[\d.]+\)/, `${0.7 * pulse})`)
          ctx.fill()
        })
      }

      requestAnimationFrame(animate)
    }

    animate(0)

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <motion.div
      className="absolute inset-0 z-0 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <canvas
        ref={canvasRef}
        className="h-full w-full"
        style={{
          pointerEvents: "none",
          filter: "drop-shadow(0 0 20px rgba(214, 143, 58, 0.3))",
        }}
      />
    </motion.div>
  )
}
