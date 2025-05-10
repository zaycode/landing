"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  company: string
  rating: number
  delay?: number
}

export default function TestimonialCard({ quote, author, company, rating, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      className="rounded-xl border border-muted bg-card/50 p-6 backdrop-blur-xs"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="mb-4 flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${i < rating ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground"}`}
          />
        ))}
      </div>

      <p className="mb-6 italic">"{quote}"</p>

      <div>
        <p className="font-bold">{author}</p>
        <p className="text-muted-foreground text-sm">{company}</p>
      </div>
    </motion.div>
  )
}
