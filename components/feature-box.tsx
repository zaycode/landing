"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FeatureBoxProps {
  icon: ReactNode
  title: string
  description: string
  position: string
  delay?: number
}

export default function FeatureBox({ icon, title, description, position, delay = 0 }: FeatureBoxProps) {
  return (
    <motion.div
      className={`absolute ${position} z-20`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay,
        type: "spring",
        stiffness: 100,
      }}
    >
      <Card className="feature-box-animate w-[220px] border border-primary/30 bg-background/80 p-2 backdrop-blur-md">
        <CardContent className="p-0">
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-background/80 p-2">{icon}</div>
            <div>
              <h3 className="font-bold text-primary text-sm">{title}</h3>
              <p className="text-muted-foreground text-xs">{description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
