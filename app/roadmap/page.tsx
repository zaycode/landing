"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, Clock, Sparkles, Star } from "lucide-react"
import Link from "next/link"
import SectionParticles from "@/components/section-particles"
import { useEffect, useState } from "react"

export default function RoadmapPage() {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  // Set the date for the next eclipse (example date)
  const eclipseDate = new Date("2025-04-08T12:00:00")

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const difference = eclipseDate.getTime() - now.getTime()

      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const s = Math.floor((difference % (1000 * 60)) / 1000)

      setDays(d)
      setHours(h)
      setMinutes(m)
      setSeconds(s)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-screen pt-32 pb-20">
      <SectionParticles />

      <div className="container relative z-10 mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge className="mb-4 bg-primary/20 text-primary transition-colors hover:bg-primary/30">
            MYSTICAL JOURNEY
          </Badge>
          <h1 className="mb-6 font-bold text-3xl md:text-4xl">The Path of the Nine-Tailed Fox</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Our roadmap is guided by the celestial movements of the eclipse.
            <br />
            The next phase of our journey will be revealed when the moon meets the sun.
          </p>
        </motion.div>

        <motion.div
          className="relative mb-20 overflow-hidden rounded-3xl border border-primary/30 bg-card/30 p-8 text-center backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative z-10">
            <h2 className="mb-6 font-bold text-2xl md:text-3xl">Next Eclipse Countdown</h2>
            <p className="mb-8 text-muted-foreground">
              The next phase of our roadmap will be revealed during the celestial eclipse.
              <br />
              Mark your calendar and prepare for the mystical unveiling.
            </p>

            <div className="mb-8 grid grid-cols-4 gap-4">
              <div className="rounded-xl bg-primary/10 p-6">
                <h3 className="mb-2 font-bold text-4xl">{days}</h3>
                <p className="text-muted-foreground">Days</p>
              </div>
              <div className="rounded-xl bg-primary/10 p-6">
                <h3 className="mb-2 font-bold text-4xl">{hours}</h3>
                <p className="text-muted-foreground">Hours</p>
              </div>
              <div className="rounded-xl bg-primary/10 p-6">
                <h3 className="mb-2 font-bold text-4xl">{minutes}</h3>
                <p className="text-muted-foreground">Minutes</p>
              </div>
              <div className="rounded-xl bg-primary/10 p-6">
                <h3 className="mb-2 font-bold text-4xl">{seconds}</h3>
                <p className="text-muted-foreground">Seconds</p>
              </div>
            </div>

            <div className="flex justify-center">
              <Button className="mystical-button mystical-glow rounded-full">
                <Calendar className="mr-2 h-4 w-4" />
                Add to Calendar
              </Button>
            </div>
          </div>

          <div className="absolute top-0 left-0 h-full w-full opacity-30">
            <div className="absolute top-10 left-10 h-20 w-20 rounded-full bg-primary/30 star-twinkle" />
            <div
              className="absolute right-10 bottom-10 h-32 w-32 rounded-full bg-secondary/30 star-twinkle"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute top-1/2 right-1/4 h-16 w-16 rounded-full bg-primary/20 star-twinkle"
              style={{ animationDelay: "1.5s" }}
            />
          </div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-primary/20" />

          <div className="space-y-16">
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="absolute left-1/2 top-0 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary/20">
                <Star className="h-6 w-6 text-primary" />
              </div>

              <div className="ml-auto mr-8 w-full md:w-5/12">
                <div className="mystical-card overflow-hidden">
                  <div className="p-6">
                    <Badge className="mb-2 bg-green-500/20 text-green-500">COMPLETED</Badge>
                    <h3 className="mb-2 font-bold text-xl">Phase 1: The Awakening</h3>
                    <p className="mb-4 text-muted-foreground">
                      The Nine-Tailed Fox has awakened from its slumber, bringing the vision of Gerhana to life. Our
                      initial website and brand identity have been established.
                    </p>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Clock className="mr-1 h-4 w-4" />
                      <span>Completed: January 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="absolute left-1/2 top-0 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary/20">
                <Star className="h-6 w-6 text-primary" />
              </div>

              <div className="ml-8 mr-auto w-full md:w-5/12">
                <div className="mystical-card overflow-hidden">
                  <div className="p-6">
                    <Badge className="mb-2 bg-blue-500/20 text-blue-500">IN PROGRESS</Badge>
                    <h3 className="mb-2 font-bold text-xl">Phase 2: The First Tail</h3>
                    <p className="mb-4 text-muted-foreground">
                      The first tail of the fox represents our core swap functionality. We are currently developing the
                      cross-chain swap mechanism that will power Gerhana.
                    </p>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Clock className="mr-1 h-4 w-4" />
                      <span>Target: April 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="absolute left-1/2 top-0 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary/20">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>

              <div className="ml-auto mr-8 w-full md:w-5/12">
                <div className="mystical-card overflow-hidden">
                  <div className="p-6">
                    <Badge className="mb-2 bg-purple-500/20 text-purple-500">COMING SOON</Badge>
                    <h3 className="mb-2 font-bold text-xl">Phase 3: The Eclipse</h3>
                    <p className="mb-4 text-muted-foreground">
                      During the next celestial eclipse, we will reveal the next phases of our roadmap. The mystical
                      alignment will guide our path forward.
                    </p>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Clock className="mr-1 h-4 w-4" />
                      <span>Revealing: April 8, 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="mb-6 font-bold text-2xl">Stay Updated on Our Journey</h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Join our community to receive updates as we progress along our mystical path.
            <br />
            Be the first to know when new phases of our roadmap are revealed.
          </p>
          <Link href="/blog">
            <Button className="mystical-button mystical-glow rounded-full">
              Follow Our Blog
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
