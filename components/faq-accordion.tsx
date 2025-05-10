"use client"

import { Button } from "@/components/ui/button"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

interface FaqItem {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: "What is Gerhana and the Nine-Tailed Fox?",
    answer:
      "Gerhana is an all-in-one Web3 Super DApp inspired by the mystical Nine-Tailed Fox from various mythologies. Just as the fox possesses nine tails representing different powers, our platform offers multiple integrated services under one magical interface. The eclipse theme represents the bridging of different blockchain worlds, just as an eclipse connects the sun and moon.",
  },
  {
    question: "How does the Nine-Tailed Fox relate to blockchain?",
    answer:
      "The Nine-Tailed Fox is known in mythology for its ability to traverse between worlds and harness different forms of energy. Similarly, Gerhana allows users to seamlessly move between different blockchains, accessing various DeFi protocols and services through a single, unified interface. Each 'tail' represents a different capability within our ecosystem.",
  },
  {
    question: "Is my data safe with the Nine-Tailed Fox?",
    answer:
      "Absolutely. The Nine-Tailed Fox is a guardian spirit in our mythology, and similarly, Gerhana is designed with security as a top priority. We are 100% non-custodial, meaning we never hold your keys or assets. All operations use on-chain logic, are fully permissionless, and transparent. Your assets remain under your control at all times.",
  },
  {
    question: "What blockchains does Gerhana support?",
    answer:
      "Gerhana supports multiple blockchains including Ethereum, Binance Smart Chain, Solana, Polygon, and Avalanche, with more being added regularly. Like the Nine-Tailed Fox that can travel between different realms, our platform allows you to interact with different networks without switching applications.",
  },
  {
    question: "Is the Nine-Tailed Fox suitable for my DApp needs?",
    answer:
      "Yes! The Nine-Tailed Fox theme is perfect for a Web3 DApp because it embodies the mystical, transformative nature of blockchain technology. The fox's ability to cross between worlds mirrors cross-chain functionality, while its nine tails represent the diverse capabilities of a comprehensive DApp. This theme resonates with users seeking both functionality and an engaging, memorable brand identity in the crowded Web3 space.",
  },
]

export default function FaqAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="mystical-card overflow-hidden">
          <Button className="flex w-full items-center justify-between p-6 text-left" onClick={() => toggleItem(index)}>
            <h3 className="font-medium text-lg">{faq.question}</h3>
            <ChevronDown
              className={`h-5 w-5 text-primary transition-transform duration-300 ${activeIndex === index ? "rotate-180 transform" : ""}`}
            />
          </Button>

          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-6 pt-0 text-muted-foreground">{faq.answer}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
