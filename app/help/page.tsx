"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@repo/ui/components/ui/accordion"
import { Badge } from "@repo/ui/components/ui/badge"
import { Button } from "@repo/ui/components/ui/button"
import { Card, CardContent } from "@repo/ui/components/ui/card"
import { Input } from "@repo/ui/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/ui/components/ui/tabs"
import { motion } from "framer-motion"
import {
  ArrowRight,
  FileText,
  Gamepad2,
  HelpCircle,
  Home,
  Mail,
  MessageCircle,
  MessageSquare,
  Repeat,
  Search,
  Wallet,
} from "lucide-react"
import { useState } from "react"
import SectionParticles from "../../../../packages/ui/components/section-particles"

export default function HelpPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [_activeTab, setActiveTab] = useState("faq")
  const faqCategories = [
    {
      category: "General",
      icon: <HelpCircle className="h-5 w-5" />,
      questions: [
        {
          question: "What is Gerhana?",
          answer:
            "Gerhana is an all-in-one Web3 Super DApp that allows you to swap assets across chains, rent NFTs, play games, and track your portfolio — all in one seamless experience with multi-chain support.",
        },
        {
          question: "Which blockchains does Gerhana support?",
          answer:
            "Gerhana supports multiple blockchains including Ethereum, Binance Smart Chain, Solana, Polygon, and Avalanche. Our cross-chain functionality allows you to interact with different networks without switching applications.",
        },
        {
          question: "How do I create an account?",
          answer:
            "You don't need to create a traditional account. Simply connect your Web3 wallet (MetaMask, WalletConnect, etc.) to start using Gerhana. Your wallet address serves as your identity on the platform.",
        },
        {
          question: "Is Gerhana secure?",
          answer:
            "Yes, Gerhana is designed with security as a top priority. We are non-custodial, meaning we never hold your keys or assets. All operations use on-chain logic, are fully permissionless, and transparent. Your assets remain under your control at all times.",
        },
      ],
    },
    {
      category: "Wallet",
      icon: <Wallet className="h-5 w-5" />,
      questions: [
        {
          question: "Which wallets are supported?",
          answer:
            "Gerhana supports most popular Web3 wallets including MetaMask, WalletConnect, Coinbase Wallet, Trust Wallet, and more. We're constantly adding support for additional wallets.",
        },
        {
          question: "How do I connect my wallet?",
          answer:
            "Click on the 'Connect Wallet' button in the top right corner of the page, then select your preferred wallet from the options. Follow the prompts in your wallet to complete the connection.",
        },
        {
          question: "Is there a mobile app?",
          answer:
            "Yes, Gerhana is available as a progressive web app (PWA) that works on mobile browsers. We're also developing native mobile apps for iOS and Android that will be released soon.",
        },
      ],
    },
    {
      category: "Swap",
      icon: <Repeat className="h-5 w-5" />,
      questions: [
        {
          question: "How does cross-chain swapping work?",
          answer:
            "Gerhana uses a combination of liquidity pools and cross-chain bridges to enable seamless asset swaps across different blockchains. The process is automated and requires only a single transaction from your end.",
        },
        {
          question: "What are the fees for swapping?",
          answer:
            "Swap fees typically range from 0.1% to 0.3% depending on the tokens and chains involved. You'll also need to pay the standard network gas fees for the blockchain you're using.",
        },
        {
          question: "What is slippage and how do I set it?",
          answer:
            "Slippage is the difference between the expected price of a trade and the price when the trade is executed. You can set your slippage tolerance in the swap interface by clicking on the settings icon.",
        },
      ],
    },
    {
      category: "Rent",
      icon: <Home className="h-5 w-5" />,
      questions: [
        {
          question: "How does NFT renting work?",
          answer:
            "NFT renting allows owners to temporarily lend their NFTs to others for a fee. Renters get to use the NFT for the specified period without having to buy it outright. The process is secured by smart contracts.",
        },
        {
          question: "Can I rent out my NFTs?",
          answer:
            "Yes, you can list your NFTs for rent by connecting your wallet, selecting the NFT, setting a rental price and duration, and creating the listing. You'll earn rental fees when someone rents your NFT.",
        },
        {
          question: "What happens when the rental period ends?",
          answer:
            "When the rental period ends, the NFT is automatically returned to the owner's wallet. This is handled by the smart contract, so neither party needs to take any action.",
        },
      ],
    },
    {
      category: "Plays",
      icon: <Gamepad2 className="h-5 w-5" />,
      questions: [
        {
          question: "What games are available on Gerhana Plays?",
          answer:
            "Gerhana Plays offers various games including Coin Flip, Raffles, Auctions, and more. We're constantly adding new games to the platform.",
        },
        {
          question: "How are winners determined in games?",
          answer:
            "Winners are determined using verifiable random functions (VRFs) that ensure fair and transparent outcomes. The randomness is generated on-chain and can be verified by anyone.",
        },
        {
          question: "Can I create my own games or raffles?",
          answer:
            "Yes, Gerhana allows users to create their own raffles and auctions. In the future, we plan to expand this functionality to allow for custom game creation as well.",
        },
      ],
    },
  ]
  return (
    <div className="relative min-h-screen pt-32 pb-20">
      <SectionParticles />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge className="mb-4 bg-primary/20 text-primary transition-colors hover:bg-primary/30">HELP CENTER</Badge>
          <h1 className="mb-6 font-bold text-3xl md:text-4xl">How Can We Help You?</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Find answers to common questions, browse our knowledge base, or get in touch with our support team.
          </p>

          <div className="mx-auto mt-8 max-w-2xl">
            <div className="relative">
              <Search className="-translate-y-1/2 absolute top-1/2 left-3 h-5 w-5 transform text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for help..."
                className="border-primary/20 py-6 pl-10 text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </motion.div>

        <Tabs defaultValue="faq" className="mb-12" onValueChange={setActiveTab}>
          <TabsList className="mx-auto grid w-full max-w-2xl grid-cols-3">
            <TabsTrigger value="faq" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              <HelpCircle className="mr-2 h-4 w-4" />
              FAQ
            </TabsTrigger>
            <TabsTrigger value="guides" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              <FileText className="mr-2 h-4 w-4" />
              Guides
            </TabsTrigger>
            <TabsTrigger value="contact" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              <MessageSquare className="mr-2 h-4 w-4" />
              Contact Us
            </TabsTrigger>
          </TabsList>

          <TabsContent value="faq" className="mt-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
              <div className="lg:col-span-1">
                <Card className="sticky top-24 border border-primary/20 bg-card/50 backdrop-blur-xs">
                  <CardContent className="p-6">
                    <h3 className="mb-4 font-bold text-lg">Categories</h3>
                    <div className="space-y-2">
                      {faqCategories.map((category, index) => (
                        <Button
                          key={index}
                          variant="ghost"
                          className="w-full justify-start text-left hover:bg-primary/10 hover:text-primary"
                        >
                          <div className="flex items-center">
                            {category.icon}
                            <span className="ml-2">{category.category}</span>
                          </div>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-3">
                <Card className="border border-primary/20 bg-card/50 backdrop-blur-xs">
                  <CardContent className="p-6">
                    <h3 className="mb-6 font-bold text-xl">Frequently Asked Questions</h3>

                    {faqCategories.map((category, categoryIndex) => (
                      <div key={categoryIndex} className="mb-8">
                        <h4 className="mb-4 flex items-center font-bold text-lg">
                          {category.icon}
                          <span className="ml-2">{category.category}</span>
                        </h4>

                        <Accordion type="single" collapsible className="w-full">
                          {category.questions.map((faq, faqIndex) => (
                            <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`}>
                              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                              <AccordionContent>
                                <p className="text-muted-foreground">{faq.answer}</p>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>
                    ))}

                    <div className="mt-8 text-center">
                      <p className="mb-4 text-muted-foreground">Can't find what you're looking for?</p>
                      <Button className="rounded-full">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Contact Support
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="guides" className="mt-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Getting Started with Gerhana",
                  description: "A complete guide to setting up your account and navigating the platform.",
                  icon: <HelpCircle className="h-6 w-6" />,
                  category: "Basics",
                  timeToRead: "5 min read",
                },
                {
                  title: "How to Swap Tokens",
                  description: "Learn how to swap tokens across different blockchains with Gerhana Swap.",
                  icon: <Repeat className="h-6 w-6" />,
                  category: "Swap",
                  timeToRead: "3 min read",
                },
                {
                  title: "Renting NFTs: A Complete Guide",
                  description: "Everything you need to know about renting and lending NFTs on Gerhana.",
                  icon: <Home className="h-6 w-6" />,
                  category: "Rent",
                  timeToRead: "7 min read",
                },
                {
                  title: "Playing Games on Gerhana",
                  description: "A guide to participating in games, raffles, and auctions on Gerhana Plays.",
                  icon: <Gamepad2 className="h-6 w-6" />,
                  category: "Plays",
                  timeToRead: "6 min read",
                },
                {
                  title: "Connecting Your Wallet",
                  description: "Step-by-step instructions for connecting different wallet types to Gerhana.",
                  icon: <Wallet className="h-6 w-6" />,
                  category: "Wallet",
                  timeToRead: "2 min read",
                },
                {
                  title: "Security Best Practices",
                  description: "Tips and recommendations for keeping your assets safe while using Gerhana.",
                  icon: <HelpCircle className="h-6 w-6" />,
                  category: "Security",
                  timeToRead: "4 min read",
                },
              ].map((guide, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border border-primary/20 bg-card/50 backdrop-blur-xs">
                    <CardContent className="p-6">
                      <Badge className="mb-4 bg-primary/10 text-primary">{guide.category}</Badge>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 p-3 text-primary">
                        {guide.icon}
                      </div>
                      <h3 className="mb-2 font-bold text-xl">{guide.title}</h3>
                      <p className="mb-4 text-muted-foreground">{guide.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground text-sm">{guide.timeToRead}</span>
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                          Read Guide
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button className="rounded-full">View All Guides</Button>
            </div>
          </TabsContent>

          <TabsContent value="contact" className="mt-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Card className="h-full border border-primary/20 bg-card/50 backdrop-blur-xs">
                  <CardContent className="p-6">
                    <h3 className="mb-6 font-bold text-xl">Contact Support</h3>

                    <form className="space-y-6">
                      <div>
                        <label className="mb-2 block font-medium text-sm">Your Email</label>
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          className="border-primary/20"
                          required
                        />
                      </div>

                      <div>
                        <label className="mb-2 block font-medium text-sm">Subject</label>
                        <Input
                          type="text"
                          placeholder="What's your question about?"
                          className="border-primary/20"
                          required
                        />
                      </div>

                      <div>
                        <label className="mb-2 block font-medium text-sm">Message</label>
                        <textarea
                          className="min-h-[150px] w-full rounded-md border border-primary/20 bg-transparent px-3 py-2 text-sm"
                          placeholder="Describe your issue in detail"
                          required
                        />
                      </div>

                      <div>
                        <label className="mb-2 block font-medium text-sm">Category</label>
                        <select className="w-full rounded-md border border-primary/20 bg-transparent px-3 py-2 text-sm">
                          <option value="general">General Question</option>
                          <option value="account">Account Issue</option>
                          <option value="swap">Swap Problem</option>
                          <option value="rent">Rent Issue</option>
                          <option value="plays">Plays Question</option>
                          <option value="wallet">Wallet Connection</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <Button type="submit" className="w-full rounded-full">
                        <Mail className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="mb-6 border border-primary/20 bg-card/50 backdrop-blur-xs">
                  <CardContent className="p-6">
                    <h3 className="mb-6 font-bold text-xl">Other Ways to Get Help</h3>

                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="mr-4 rounded-full bg-primary/10 p-3 text-primary">
                          <MessageCircle className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="mb-1 font-bold">Live Chat</h4>
                          <p className="mb-2 text-muted-foreground">
                            Chat with our support team in real-time for immediate assistance.
                          </p>
                          <Button variant="outline" size="sm" className="rounded-full border-primary/20">
                            Start Chat
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="mr-4 rounded-full bg-primary/10 p-3 text-primary">
                          <MessageSquare className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="mb-1 font-bold">Community Forum</h4>
                          <p className="mb-2 text-muted-foreground">
                            Join our community forum to discuss issues and share solutions with other users.
                          </p>
                          <Button variant="outline" size="sm" className="rounded-full border-primary/20">
                            Visit Forum
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="mr-4 rounded-full bg-primary/10 p-3 text-primary">
                          <FileText className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="mb-1 font-bold">Knowledge Base</h4>
                          <p className="mb-2 text-muted-foreground">
                            Browse our extensive knowledge base for detailed articles and tutorials.
                          </p>
                          <Button variant="outline" size="sm" className="rounded-full border-primary/20">
                            Explore Articles
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-primary/20 bg-card/50 backdrop-blur-xs">
                  <CardContent className="p-6">
                    <h3 className="mb-4 font-bold text-xl">Support Hours</h3>
                    <p className="mb-4 text-muted-foreground">
                      Our support team is available to help you during the following hours:
                    </p>

                    <div className="mb-4 space-y-2">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span>9:00 AM - 8:00 PM UTC</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span>10:00 AM - 6:00 PM UTC</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span>12:00 PM - 5:00 PM UTC</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm">
                      For urgent issues outside of these hours, please use our emergency support channel in Discord.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
