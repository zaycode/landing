"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Image from "next/image"
import SectionParticles from "@/components/section-particles"

export default function PartnersSection() {
  const partners = [
    {
      name: "Ethereum Foundation",
      logo: "/partners/ethereum.png",
      description: "Blockchain platform for decentralized applications",
    },
    {
      name: "Binance",
      logo: "/partners/binance.png",
      description: "Leading cryptocurrency exchange",
    },
    {
      name: "Polygon",
      logo: "/partners/polygon.png",
      description: "Layer 2 scaling solution for Ethereum",
    },
    {
      name: "Solana",
      logo: "/partners/solana.png",
      description: "High-performance blockchain platform",
    },
    {
      name: "Avalanche",
      logo: "/partners/avalanche.png",
      description: "Platform for decentralized applications",
    },
    {
      name: "Chainlink",
      logo: "/partners/chainlink.png",
      description: "Decentralized oracle network",
    },
  ]

  return (
    <section className="relative py-20 mystical-section">
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
            MYSTICAL ALLIANCES
          </Badge>
          <h2 className="mb-6 font-bold text-3xl md:text-4xl">Our Trusted Partners</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            The Nine-Tailed Fox has formed powerful alliances across the blockchain realm.
            <br />
            Together, we're building the future of Web3.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="relative mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-card/50 p-4 backdrop-blur-xs border border-primary/20 mystical-glow">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="mb-1 text-center font-bold">{partner.name}</h3>
              <p className="text-center text-muted-foreground text-xs">{partner.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground">
            Join the growing network of partners harnessing the power of the Nine-Tailed Fox.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
