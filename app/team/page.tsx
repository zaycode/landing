"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Image from "next/image"
import SectionParticles from "@/components/section-particles"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Kitsune Nakamoto",
      role: "Founder & CEO",
      bio: "Visionary leader with 10+ years in blockchain technology. Kitsune founded Gerhana with the mission to bring the magic of Web3 to everyone through a unified platform.",
      image: "/team/founder.png",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "mailto:kitsune@gerhana.xyz",
      },
    },
    {
      name: "Luna Eclipse",
      role: "Chief Technology Officer",
      bio: "Blockchain architect and former lead developer at major DeFi protocols. Luna oversees all technical aspects of the Gerhana platform, ensuring seamless cross-chain operations.",
      image: "/team/cto.png",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "mailto:luna@gerhana.xyz",
      },
    },
    {
      name: "Orion Stellar",
      role: "Chief Product Officer",
      bio: "Product visionary with experience at leading Web3 companies. Orion is responsible for the intuitive and magical user experience that defines Gerhana.",
      image: "/team/cpo.png",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "mailto:orion@gerhana.xyz",
      },
    },
    {
      name: "Nova Celestial",
      role: "Head of Security",
      bio: "Cybersecurity expert with a background in cryptography. Nova ensures that the Nine-Tailed Fox's protective powers keep all user assets safe and secure.",
      image: "/team/security.png",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "mailto:nova@gerhana.xyz",
      },
    },
    {
      name: "Aurora Mystic",
      role: "Community Manager",
      bio: "Community building specialist who fosters the growing Gerhana ecosystem. Aurora is the voice of the Nine-Tailed Fox, connecting with users across all realms.",
      image: "/team/community.png",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "mailto:aurora@gerhana.xyz",
      },
    },
    {
      name: "Phoenix Blaze",
      role: "Marketing Director",
      bio: "Creative strategist with a passion for blockchain adoption. Phoenix spreads the mystical story of Gerhana across the digital landscape.",
      image: "/team/marketing.png",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "mailto:phoenix@gerhana.xyz",
      },
    },
  ]

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
          <Badge className="mb-4 bg-primary/20 text-primary transition-colors hover:bg-primary/30">THE GUARDIANS</Badge>
          <h1 className="mb-6 font-bold text-3xl md:text-4xl">Meet the Nine-Tailed Fox Keepers</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Our team of mystical guardians brings together expertise from across the blockchain realm.
            <br />
            United by a vision to transform Web3 through the power of the Nine-Tailed Fox.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="mystical-card overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="mb-1 font-bold text-2xl text-white">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-6 text-muted-foreground">{member.bio}</p>
                <div className="flex space-x-3">
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                    <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                    <a href={member.social.email}>
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 rounded-xl border border-primary/20 bg-card/50 p-8 text-center backdrop-blur-xs"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="mb-4 font-bold text-2xl">Join Our Mystical Team</h2>
          <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
            We're always looking for talented individuals to join our quest to revolutionize Web3.
            <br />
            If you're passionate about blockchain technology and the mystical power of the Nine-Tailed Fox, we want to
            hear from you.
          </p>
          <Button className="mystical-button mystical-glow rounded-full">
            <Mail className="mr-2 h-4 w-4" />
            View Open Positions
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
