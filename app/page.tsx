"use client"

import FaqAccordion from "@/components/faq-accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Flame, Globe2, Lock, MoonStar, Shield, Sparkles, Star, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import SectionParticles from "@/components/section-particles"
import MysticalHero from "@/components/sections/mystical-hero"
import TestimonialSection from "@/components/sections/testimonial-section"
import PartnersSection from "@/components/sections/partners-section"

export default function HomePage() {
  return (
    <>

      <MysticalHero />
      <section id="magical-abilities" className="relative py-20 mystical-section">
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
              MAGICAL ABILITIES
            </Badge>
            <h2 className="mb-6 font-bold text-3xl md:text-4xl">Harness the Fox's Power</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              The nine-tailed fox bestows these magical abilities upon Gerhana users.
              <br />
              Unlock your potential in the mystical realm of Web3.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Flame className="h-10 w-10 text-orange-500" />,
                title: "Blazing Speed",
                description: "Lightning-fast transactions across multiple blockchains with minimal fees.",
              },
              {
                icon: <Shield className="h-10 w-10 text-purple-500" />,
                title: "Guardian Shield",
                description: "Advanced security protocols that keep your assets safe from harm.",
              },
              {
                icon: <MoonStar className="h-10 w-10 text-indigo-500" />,
                title: "Celestial Vision",
                description: "Comprehensive portfolio tracking with detailed analytics and insights.",
              },
              {
                icon: <Zap className="h-10 w-10 text-yellow-500" />,
                title: "Electric Swaps",
                description: "Seamless token exchanges with optimal rates across all supported chains.",
              },
              {
                icon: <Globe2 className="h-10 w-10 text-blue-500" />,
                title: "Realm Bridge",
                description: "Connect across multiple blockchains with a single unified interface.",
              },
              {
                icon: <Sparkles className="h-10 w-10 text-pink-500" />,
                title: "Enchanted Earnings",
                description: "Discover opportunities to grow your assets through various magical protocols.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-xl border border-primary/20 bg-card/50 backdrop-blur-xs"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="p-8">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 p-4 mystical-glow">
                    {feature.icon}
                  </div>
                  <h3 className="mb-3 font-bold text-2xl">{feature.title}</h3>
                  <p className="text-muted-foreground text-lg">{feature.description}</p>
                </div>

                {/* Decorative fox tail silhouette */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 opacity-5">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10,90 Q30,70 50,80 Q70,90 90,70 Q95,60 90,50 Q85,40 90,30 Q95,20 90,10"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                    />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 mystical-section">
        <SectionParticles />

        <div className="container relative z-10 mx-auto">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Badge className="mb-4 bg-primary/20 text-primary transition-colors hover:bg-primary/30">
                  MYSTICAL MAGIC
                </Badge>
                <h2 className="mb-6 font-bold text-3xl md:text-4xl">Celestial Cross-Chain Power</h2>
                <p className="mb-8 text-lg text-muted-foreground">
                  When the moon eclipses the sun, boundaries between worlds dissolve.
                  <br />
                  Gerhana brings this same magic to blockchain, connecting disparate chains seamlessly.
                </p>
              </motion.div>

              <div className="space-y-4">
                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="rounded-full bg-primary/20 p-2">
                    <Globe2 className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-lg">Traverse multiple blockchain realms</p>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="rounded-full bg-primary/20 p-2">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-lg">Instant magical transfers between chains</p>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="rounded-full bg-primary/20 p-2">
                    <MoonStar className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-lg">Unified celestial dashboard for all assets</p>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="rounded-full bg-primary/20 p-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-lg">Enchanted interface for seamless experience</p>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[400px] w-full"
            >
              <Image src="/section-1.png" alt="Nine-Tailed Fox" fill className="object-contain glow-effect" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative bg-linear-to-b from-muted/20 to-background py-20 mystical-section">
        <SectionParticles />

        <div className="container relative z-10 mx-auto">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative h-[400px] w-full"
            >
              <Image src="/section-2.png" alt="Dark Fox Guardian" fill className="object-contain fox-eye-glow" />
            </motion.div>

            <div className="order-1 space-y-8 lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Badge className="mb-4 bg-primary/20 text-primary transition-colors hover:bg-primary/30">
                  GUARDIAN SPIRIT
                </Badge>
                <h2 className="mb-6 font-bold text-3xl md:text-4xl">Protected by the Dark Fox</h2>
                <p className="mb-8 text-lg text-muted-foreground">
                  The mystical guardian of the eclipse watches over your assets.
                  <br />
                  With Gerhana, your digital treasures remain under your control, always.
                </p>
              </motion.div>

              <div className="space-y-4">
                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="rounded-full bg-primary/20 p-2">
                    <Lock className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-lg">100% non-custodial protection</p>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="rounded-full bg-primary/20 p-2">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-lg">Mystical barriers against threats</p>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="rounded-full bg-primary/20 p-2">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-lg">Celestial audits of all contracts</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <PartnersSection />

      {/* FAQ Section */}
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
              ANCIENT WISDOM
            </Badge>
            <h2 className="mb-6 font-bold text-3xl md:text-4xl">Frequently Asked Questions</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">Seek knowledge from the Nine-Tailed Fox</p>
          </motion.div>

          <div className="mx-auto max-w-3xl">
            <FaqAccordion />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* CTA Section */}
      <section className="relative py-20 mystical-section">
        <SectionParticles />

        <div className="container relative z-10 mx-auto">
          <motion.div
            className="relative overflow-hidden rounded-3xl border border-primary/30 bg-linear-to-r from-primary/20 to-secondary/20 p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10">
              <h2 className="mb-6 font-bold text-3xl md:text-4xl">Begin Your Mystical Journey</h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
                The Nine-Tailed Fox awaits to guide you through the blockchain cosmos.
                <br />
                Experience the eclipse of traditional finance.
              </p>
              <Link href="/about">
                <Button size="lg" className="mystical-button mystical-glow rounded-full">
                  Enter the Portal
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="absolute top-0 left-0 h-full w-full opacity-30">
              <div className="absolute top-10 left-10 h-20 w-20 star-twinkle rounded-full bg-primary/30" />
              <div
                className="absolute right-10 bottom-10 h-32 w-32 star-twinkle rounded-full bg-secondary/30"
                style={{ animationDelay: "1s" }}
              />
              <div
                className="absolute top-1/2 right-1/4 h-16 w-16 star-twinkle rounded-full bg-primary/20"
                style={{ animationDelay: "1.5s" }}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
