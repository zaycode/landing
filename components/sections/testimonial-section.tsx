"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import SectionParticles from "@/components/section-particles"
import { Star } from "lucide-react"

export default function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "The Nine-Tailed Fox has shown me the way through the blockchain wilderness. Gerhana is not just a DApp, it's a spiritual guide.",
      author: "Enlightened User #042",
      rating: 5,
    },
    {
      quote:
        "I've tried many Web3 platforms, but none have the mystical elegance of Gerhana. The interface is intuitive and the features are powerful.",
      author: "Crypto Shaman #137",
      rating: 5,
    },
    {
      quote:
        "The cross-chain capabilities are like magic. I can move between blockchains with the grace of the Nine-Tailed Fox.",
      author: "Digital Nomad #089",
      rating: 4,
    },
  ]

  return (
    <section className="relative bg-linear-to-b from-background to-muted/20 py-20 mystical-section">
      <SectionParticles />

      <div className="container relative z-10 mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-primary/20 text-primary transition-colors hover:bg-primary/30">
            WHISPERS FROM THE VOID
          </Badge>
          <h2 className="mb-6 font-bold text-3xl md:text-4xl">Words of the Enlightened</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="mystical-card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.rating ? "fill-primary text-primary" : "text-muted-foreground"}`}
                  />
                ))}
              </div>
              <p className="mb-6 text-lg italic">"{testimonial.quote}"</p>
              <p className="font-bold">— {testimonial.author}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-8 text-center text-lg text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Join thousands who have embraced the mystical power of Gerhana.
          <br />
          The nine-tailed fox awaits your presence.
        </motion.p>
      </div>
    </section>
  )
}
