"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, FileText, Shield, User } from "lucide-react"
import Link from "next/link"
import SectionParticles from "@/components/section-particles"

export default function OtherPage() {
  const legalDocuments = [
    {
      title: "Terms of Service",
      description: "The rules and guidelines for using the Gerhana platform and services.",
      icon: <FileText className="h-6 w-6 text-primary" />,
      link: "/other/terms",
    },
    {
      title: "Privacy Policy",
      description: "How we collect, use, and protect your personal information.",
      icon: <Shield className="h-6 w-6 text-primary" />,
      link: "/other/privacy",
    },
    {
      title: "Cookie Policy",
      description: "Information about how we use cookies and similar technologies.",
      icon: <FileText className="h-6 w-6 text-primary" />,
      link: "/other/cookies",
    },
    {
      title: "User Agreement",
      description: "The agreement between Gerhana and its users regarding platform usage.",
      icon: <User className="h-6 w-6 text-primary" />,
      link: "/other/agreement",
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
          <Badge className="mb-4 bg-primary/20 text-primary transition-colors hover:bg-primary/30">LEGAL SCROLLS</Badge>
          <h1 className="mb-6 font-bold text-3xl md:text-4xl">Mystical Agreements</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            The Nine-Tailed Fox operates with transparency and integrity.
            <br />
            Review our legal documents to understand the terms of our mystical alliance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {legalDocuments.map((document, index) => (
            <motion.div
              key={index}
              className="mystical-card overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  {document.icon}
                </div>
                <h3 className="mb-3 font-bold text-2xl">{document.title}</h3>
                <p className="mb-6 text-muted-foreground">{document.description}</p>
                <Link href={document.link}>
                  <Button variant="outline" className="rounded-full border-primary/20 hover:bg-primary/10">
                    Read Document
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
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
          <h2 className="mb-4 font-bold text-2xl">Need Assistance?</h2>
          <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
            If you have any questions about our legal documents or need further clarification,
            <br />
            our mystical support team is here to help.
          </p>
          <Link href="/help">
            <Button className="mystical-button mystical-glow rounded-full">Contact Support</Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
