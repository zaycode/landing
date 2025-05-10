"use client"

import { useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

interface CountUpProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  decimals?: number
}

export default function CountUp({ end, duration = 2, prefix = "", suffix = "", decimals = 0 }: CountUpProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const countRef = useRef(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!isInView || hasStarted) return

    setHasStarted(true)
    let startTime: number
    let animationFrame: number

    const startAnimation = (timestamp: number) => {
      startTime = timestamp
      animateCount(timestamp)
    }

    const animateCount = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      const currentCount = progress * end

      countRef.current = currentCount
      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateCount)
      }
    }

    animationFrame = requestAnimationFrame(startAnimation)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [isInView, end, duration, hasStarted])

  return (
    <span ref={ref}>
      {prefix}
      {count.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      {suffix}
    </span>
  )
}
