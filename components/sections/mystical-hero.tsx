"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import MysticalFoxAnimation from "@/components/animations/mystical-fox-animation"
import { useEffect, useState } from "react"

export default function MysticalHero() {
  const [scrollIndicator, setScrollIndicator] = useState(true)

  // Hide scroll indicator when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollIndicator(false)
      } else {
        setScrollIndicator(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden mystical-section">
      <div className="container relative z-10 mx-auto">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <motion.div
            className="text-center lg:w-1/2 lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-primary/20 text-primary transition-colors hover:bg-primary/30">
              Embrace the Eclipse
            </Badge>
            <h1 className="mb-6 font-bold text-4xl leading-tight md:text-5xl lg:text-6xl">
              The <span className="mystical-text-gradient">Nine-Tailed Fox</span> of Web3
            </h1>
            <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground lg:mx-0">
              Harness the mystical power of Gerhana, the all-in-one Super DApp that brings the magic of Web3 to your
              fingertips.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link href="/features">
                <Button size="lg" className="mystical-button mystical-glow rounded-full">
                  Discover Magic
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#magical-abilities">
                <Button size="lg" variant="outline" className="rounded-full border-primary/20 hover:bg-primary/10">
                  Explore Powers
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="relative lg:w-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative h-[400px] w-full md:h-[500px]">
              <MysticalFoxAnimation />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px]">
                  <Image src="/hero.png" alt="Nine-Tailed Fox" fill className="fox-tail object-contain" priority />
                </div>
              </div>
              <div className="absolute top-10 right-10 h-[100px] w-[100px] md:h-[150px] md:w-[150px]">
                <Image
                  src="/planet-jup.svg"
                  alt="Celestial Body"
                  fill
                  className="float-element object-contain"
                  style={{ animationDelay: "1s" }}
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        {scrollIndicator && (
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <p className="mb-2 text-sm text-muted-foreground">Scroll to explore</p>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
              <ChevronDown className="h-6 w-6 text-primary" />
            </motion.div>
          </motion.div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 h-32 w-full bg-linear-to-t from-background to-transparent" />
    </section>
  )
}
