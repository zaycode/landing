"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, Search, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import SectionParticles from "@/components/section-particles"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Cross-Chain Swaps",
    excerpt: "Explore how cross-chain swaps are revolutionizing the DeFi landscape and what it means for users.",
    image: "/placeholder.svg?height=300&width=600",
    date: "April 2, 2025",
    author: "Alex Crypto",
    category: "DeFi",
  },
  {
    id: 2,
    title: "NFT Renting: A New Revenue Stream",
    excerpt: "Learn how NFT renting is creating new opportunities for collectors and gamers alike.",
    image: "/placeholder.svg?height=300&width=600",
    date: "March 28, 2025",
    author: "Maya Blockchain",
    category: "NFTs",
  },
  {
    id: 3,
    title: "Play-to-Earn: The Next Gaming Revolution",
    excerpt: "Discover how blockchain games are transforming the gaming industry with real economic incentives.",
    image: "/placeholder.svg?height=300&width=600",
    date: "March 15, 2025",
    author: "Sam Gamer",
    category: "Gaming",
  },
  {
    id: 4,
    title: "Monad Blockchain: Technical Deep Dive",
    excerpt: "A technical exploration of Monad blockchain's architecture and performance advantages.",
    image: "/placeholder.svg?height=300&width=600",
    date: "March 10, 2025",
    author: "Tech Blockchain",
    category: "Technology",
  },
  {
    id: 5,
    title: "Securing Your Crypto: Best Practices",
    excerpt: "Essential security tips every crypto holder should know to protect their digital assets.",
    image: "/placeholder.svg?height=300&width=600",
    date: "March 5, 2025",
    author: "Security Expert",
    category: "Security",
  },
  {
    id: 6,
    title: "The Rise of Super DApps",
    excerpt: "How all-in-one blockchain applications are simplifying the user experience in Web3.",
    image: "/placeholder.svg?height=300&width=600",
    date: "February 28, 2025",
    author: "Web3 Analyst",
    category: "Trends",
  },
]

export default function BlogPage() {
  return (
    <div>
      <SectionParticles />

      <div className="container">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge className="mb-4 bg-primary/20 text-primary transition-colors hover:bg-primary/30">BLOG</Badge>
          <h1 className="mb-6 font-bold text-3xl md:text-4xl">Latest from Gerhana</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Insights, updates, and guides from the world of Web3 and crypto.
          </p>
        </motion.div>

        <div className="mb-12 flex items-center justify-between">
          <div className="relative w-full max-w-md">
            <Search className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4 transform text-muted-foreground" />
            <Input type="text" placeholder="Search articles..." className="border-primary/20 pl-10" />
          </div>
          <div className="hidden space-x-2 md:flex">
            {["All", "DeFi", "NFTs", "Gaming", "Technology", "Security", "Trends"].map((category) => (
              <Badge
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" ? "" : "border-primary/20 hover:bg-primary/10"}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: post.id * 0.1 }}
            >
              <Card className="overflow-hidden border border-primary/20 bg-card/50 backdrop-blur-xs">
                <div className="flex flex-col">
                  <div className="relative h-48 w-full">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <div className="flex flex-col p-6">
                    <div className="grow">
                      <Badge variant="outline" className="mb-3 border-primary/20 text-primary">
                        {post.category}
                      </Badge>
                      <h3 className="mb-3 font-bold text-xl">{post.title}</h3>
                      <p className="mb-4 text-muted-foreground">{post.excerpt}</p>
                      <div className="mb-4 flex items-center justify-between text-muted-foreground text-sm">
                        <div className="flex items-center">
                          <User className="mr-1 h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Link href={`/blog/${post.id}`}>
                        <Button variant="outline" className="rounded-full border-primary/20 hover:bg-primary/10">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="rounded-full border-primary/20 hover:bg-primary/10">
            Load More Articles
          </Button>
        </div>
      </div>
    </div>
  )
}
