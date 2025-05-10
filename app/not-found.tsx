"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowLeft, Home } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef } from "react"

export default function NotFoundPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Eclipse parameters
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const maxRadius = Math.min(canvas.width, canvas.height) * 0.15

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

    // Animation variables
    let phase = 0
    let eclipseProgress = 0
    const eclipseSpeed = 0.001
    let glowIntensity = 0.7
    let glowDirection = 1
    let lastTime = 0
    const frameRate = 1000 / 60 // 60fps

    // Animation loop
    function animate(timestamp: number) {
      if (!lastTime) lastTime = timestamp
      const deltaTime = timestamp - lastTime

      if (deltaTime > frameRate) {
        lastTime = timestamp - (deltaTime % frameRate)
        if (!ctx || !canvas) {
          return
        }
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

        // Update eclipse phase
        phase += 0.003
        eclipseProgress += eclipseSpeed
        if (eclipseProgress > 1) eclipseProgress = 0

        // Update glow
        glowIntensity += 0.003 * glowDirection
        if (glowIntensity > 0.9) {
          glowIntensity = 0.9
          glowDirection = -1
        } else if (glowIntensity < 0.5) {
          glowIntensity = 0.5
          glowDirection = 1
        }

        // Draw eclipse
        const sunRadius = maxRadius
        const moonRadius = maxRadius * 0.97

        // Draw sun/corona with circular gradient
        const coronaRadius = sunRadius * 1.8
        ctx.beginPath()
        ctx.arc(centerX, centerY, coronaRadius, 0, Math.PI * 2)
        const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, coronaRadius)
        gradient.addColorStop(0, `rgba(255, 222, 89, ${0.9 * glowIntensity})`)
        gradient.addColorStop(0.3, `rgba(255, 180, 70, ${0.7 * glowIntensity})`)
        gradient.addColorStop(0.6, `rgba(214, 143, 58, ${0.5 * glowIntensity})`)
        gradient.addColorStop(0.8, `rgba(255, 51, 102, ${0.3 * glowIntensity})`)
        gradient.addColorStop(1, "rgba(255, 51, 102, 0)")
        ctx.fillStyle = gradient
        ctx.fill()

        // Draw sun
        ctx.beginPath()
        ctx.arc(centerX, centerY, sunRadius, 0, Math.PI * 2)
        const sunGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, sunRadius)
        sunGradient.addColorStop(0, "#FFDE59")
        sunGradient.addColorStop(0.5, "#F8C537")
        sunGradient.addColorStop(0.8, "#D68F3A")
        sunGradient.addColorStop(1, "#FF3366")
        ctx.fillStyle = sunGradient
        ctx.fill()

        // Calculate moon position for eclipse effect
        const eclipseCurve = Math.sin(eclipseProgress * Math.PI)
        const moonOffset = (1 - eclipseCurve) * sunRadius * 2.2

        // Draw moon
        const moonX = centerX - moonOffset + sunRadius

        // Glow behind moon
        const glowRadius = moonRadius * 1.5
        ctx.beginPath()
        ctx.arc(moonX, centerY, glowRadius, 0, Math.PI * 2)
        const moonGlow = ctx.createRadialGradient(moonX, centerY, 0, moonX, centerY, glowRadius)
        moonGlow.addColorStop(0, "rgba(30, 30, 50, 0.8)")
        moonGlow.addColorStop(0.5, "rgba(20, 20, 40, 0.4)")
        moonGlow.addColorStop(1, "rgba(10, 10, 20, 0)")
        ctx.fillStyle = moonGlow
        ctx.fill()

        // Main moon
        ctx.beginPath()
        ctx.arc(moonX, centerY, moonRadius, 0, Math.PI * 2)
        const moonGradient = ctx.createRadialGradient(moonX, centerY, 0, moonX, centerY, moonRadius)
        moonGradient.addColorStop(0, "rgba(20, 20, 40, 0.95)")
        moonGradient.addColorStop(1, "rgba(5, 5, 15, 0.95)")
        ctx.fillStyle = moonGradient
        ctx.fill()
      }

      requestAnimationFrame(animate)
    }

    animate(0)

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{
          pointerEvents: "none",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="mb-6 font-bold text-8xl md:text-9xl">404</h1>
          <h2 className="mb-8 font-bold text-3xl md:text-4xl">Page Not Found</h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground">
            The Nine-Tailed Fox couldn't find the mystical page you're looking for.
            <br />
            It seems this realm doesn't exist in our universe.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/">
              <Button className="mystical-button mystical-glow rounded-full">
                <Home className="mr-2 h-4 w-4" />
                Return Home
              </Button>
            </Link>
            <Button
              variant="outline"
              className="rounded-full border-primary/20 hover:bg-primary/10"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
