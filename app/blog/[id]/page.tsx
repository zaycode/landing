"use client"

import SectionParticles from "@/components/section-particles"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowLeft, Bookmark, Calendar, Share2, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

const blogPosts = [
  {
    id: "1",
    title: "The Future of Cross-Chain Swaps",
    content: `
      <p>The blockchain ecosystem has evolved significantly since the early days of Bitcoin. Today, we have numerous blockchain networks, each with its own unique features, strengths, and weaknesses. This diversity has led to a fragmented ecosystem where assets are siloed within their respective chains.</p>
      
      <p>Cross-chain swaps aim to solve this problem by enabling seamless asset transfers between different blockchain networks. This technology is revolutionizing the DeFi landscape in several ways:</p>
      
      <h3>Improved Liquidity</h3>
      <p>By connecting liquidity pools across different chains, cross-chain swaps increase the overall liquidity available to users. This leads to better pricing and reduced slippage for traders.</p>
      
      <h3>Enhanced User Experience</h3>
      <p>Users no longer need to use multiple bridges or exchanges to move their assets between chains. Cross-chain swaps provide a one-stop solution for all their trading needs.</p>
      
      <h3>New Opportunities for Arbitrage</h3>
      <p>Price differences between the same assets on different chains create arbitrage opportunities for traders. Cross-chain swaps make it easier to exploit these opportunities.</p>
      
      <h3>Challenges and Solutions</h3>
      <p>Despite their potential, cross-chain swaps face several challenges, including security risks, high gas fees, and technical complexity. Various solutions are being developed to address these issues:</p>
      
      <ul>
        <li>Layer 2 scaling solutions to reduce gas fees</li>
        <li>Advanced security protocols to prevent hacks and exploits</li>
        <li>Simplified user interfaces to hide the underlying complexity</li>
      </ul>
      
      <h3>The Future</h3>
      <p>As blockchain technology continues to evolve, we can expect cross-chain swaps to become even more efficient and user-friendly. The ultimate goal is to create a seamless, interconnected blockchain ecosystem where assets can flow freely between different networks.</p>
      
      <p>Gerhana is at the forefront of this revolution, offering state-of-the-art cross-chain swap functionality that connects multiple blockchain networks. Our platform provides users with the best rates, lowest fees, and a smooth trading experience.</p>
    `,
    image: "/placeholder.svg?height=500&width=1000",
    date: "April 2, 2025",
    author: "Alex Crypto",
    category: "DeFi",
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "NFT Renting: A New Revenue Stream",
    content: `
      <p>Non-Fungible Tokens (NFTs) have taken the digital world by storm, representing ownership of unique digital assets like art, collectibles, and in-game items. However, the high price of many popular NFTs has made them inaccessible to the average user.</p>
      
      <p>NFT renting offers a solution to this problem by allowing NFT owners to temporarily lend their assets to others for a fee. This creates a win-win situation: owners can generate passive income from their NFTs, while renters can access and use these assets without having to buy them outright.</p>
      
      <h3>Use Cases for NFT Renting</h3>
      
      <h4>Gaming</h4>
      <p>In blockchain games, NFTs often represent powerful items or characters that provide advantages to players. Renting these NFTs allows casual players to experience premium gameplay without a significant upfront investment.</p>
      
      <h4>Virtual Events</h4>
      <p>Exclusive virtual events may require specific NFT tickets or badges for entry. Renting these NFTs provides temporary access to such events.</p>
      
      <h4>Digital Art Exhibitions</h4>
      <p>Curators can rent digital art NFTs for temporary exhibitions, similar to how physical art is loaned to museums.</p>
      
      <h3>How NFT Renting Works</h3>
      <p>The renting process typically involves smart contracts that temporarily transfer usage rights (but not ownership) of the NFT to the renter. The contract specifies the rental period and fee, and automatically returns the NFT to the owner when the period ends.</p>
      
      <h3>Benefits for NFT Owners</h3>
      <ul>
        <li>Generate passive income from idle assets</li>
        <li>Maintain ownership while monetizing NFTs</li>
        <li>Increase exposure and value of their NFTs</li>
      </ul>
      
      <h3>Benefits for Renters</h3>
      <ul>
        <li>Access premium NFTs at a fraction of the purchase cost</li>
        <li>Try before buying</li>
        <li>Temporary use for specific purposes</li>
      </ul>
      
      <p>Gerhana's NFT rental marketplace provides a secure and user-friendly platform for both NFT owners and renters. Our smart contract-based system ensures that all transactions are transparent, fair, and automatically enforced.</p>
    `,
    image: "/placeholder.svg?height=500&width=1000",
    date: "March 28, 2025",
    author: "Maya Blockchain",
    category: "NFTs",
    readTime: "6 min read",
  },
]

export default function BlogPostPage() {
  const params = useParams()
  const postId = params.id as string

  const post = blogPosts.find((p) => p.id === postId) || blogPosts[0]

  return (
    <div className="relative min-h-screen pt-32 pb-20">
      <SectionParticles />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link href="/blog">
              <Button variant="ghost" className="mb-6 pl-0 hover:bg-transparent hover:text-primary">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>

            <Badge className="mb-4 bg-primary/20 text-primary transition-colors hover:bg-primary/30">
              {post.category}
            </Badge>
            <h1 className="mb-6 font-bold text-3xl md:text-4xl">{post.title}</h1>

            <div className="mb-8 flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
              <div className="flex items-center">
                <User className="mr-1 h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div>
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative mb-8 h-[300px] w-full overflow-hidden rounded-xl md:h-[400px]">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>

            <div className="mb-8 flex justify-end gap-2">
              <Button variant="outline" size="sm" className="rounded-full border-primary/20">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="rounded-full border-primary/20">
                <Bookmark className="mr-2 h-4 w-4" />
                Save
              </Button>
            </div>

            <div
              className="prose prose-lg dark:prose-invert mb-12 max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-8 border-border border-t pt-8">
              <h3 className="mb-4 font-bold text-xl">Related Articles</h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {blogPosts
                  .filter((p) => p.id !== postId)
                  .slice(0, 2)
                  .map((relatedPost) => (
                    <Link href={`/blog/${relatedPost.id}`} key={relatedPost.id}>
                      <div className="group">
                        <h4 className="font-bold transition-colors group-hover:text-primary">{relatedPost.title}</h4>
                        <p className="text-muted-foreground text-sm">{relatedPost.date}</p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
