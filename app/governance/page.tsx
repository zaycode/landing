"use client"

import { Badge } from "@repo/ui/components/ui/badge"
import { Button } from "@repo/ui/components/ui/button"
import { Card, CardContent } from "@repo/ui/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@repo/ui/components/ui/tabs"
import { motion } from "framer-motion"
import { ArrowRight, BarChart3, Clock, FileText, Users } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import SectionParticles from "../../../../packages/ui/components/section-particles"

export default function GovernancePage() {
  const [activeTab, setActiveTab] = useState("active")

  const proposals = [
    {
      id: 1,
      title: "GIP-001: Implement Multi-Chain Support for Gerhana Swap",
      description:
        "This proposal aims to expand Gerhana Swap functionality to support cross-chain transactions across Ethereum, Binance Smart Chain, Solana, and Avalanche networks.",
      status: "active",
      proposer: "0x1a2b...3c4d",
      createdAt: "April 2, 2025",
      endsAt: "April 9, 2025",
      votes: {
        for: 65,
        against: 20,
        abstain: 15,
      },
      totalVotes: 1245000,
      quorum: 1000000,
      category: "Protocol",
    },
    {
      id: 2,
      title: "GIP-002: Reduce Platform Fees for NFT Rentals",
      description:
        "Proposal to reduce the platform fee for NFT rentals from 2.5% to 1.5% to encourage more activity in the rental marketplace.",
      status: "active",
      proposer: "0x5e6f...7g8h",
      createdAt: "April 1, 2025",
      endsAt: "April 8, 2025",
      votes: {
        for: 78,
        against: 12,
        abstain: 10,
      },
      totalVotes: 980000,
      quorum: 1000000,
      category: "Fee Structure",
    },
    {
      id: 3,
      title: "GIP-003: Add New Game Types to Plays Platform",
      description:
        "Proposal to add three new game types to the Plays platform: Dice, Crash, and Blackjack to expand the gaming ecosystem.",
      status: "active",
      proposer: "0x9i0j...1k2l",
      createdAt: "March 30, 2025",
      endsAt: "April 6, 2025",
      votes: {
        for: 82,
        against: 8,
        abstain: 10,
      },
      totalVotes: 1120000,
      quorum: 1000000,
      category: "Feature",
    },
    {
      id: 4,
      title: "GIP-004: Implement Token Staking Rewards",
      description:
        "Proposal to implement a staking mechanism for GRH tokens with tiered rewards based on staking duration.",
      status: "passed",
      proposer: "0x3m4n...5o6p",
      createdAt: "March 20, 2025",
      endsAt: "March 27, 2025",
      votes: {
        for: 92,
        against: 5,
        abstain: 3,
      },
      totalVotes: 1560000,
      quorum: 1000000,
      category: "Tokenomics",
    },
    {
      id: 5,
      title: "GIP-005: Integrate with Layer 2 Solutions",
      description:
        "Proposal to integrate Gerhana with Optimism and Arbitrum to reduce gas fees and improve transaction speeds.",
      status: "rejected",
      proposer: "0x7q8r...9s0t",
      createdAt: "March 15, 2025",
      endsAt: "March 22, 2025",
      votes: {
        for: 45,
        against: 48,
        abstain: 7,
      },
      totalVotes: 980000,
      quorum: 1000000,
      category: "Protocol",
    },
  ]

  const filteredProposals = proposals.filter((proposal) => {
    if (activeTab === "active") return proposal.status === "active"
    if (activeTab === "passed") return proposal.status === "passed"
    if (activeTab === "rejected") return proposal.status === "rejected"
    return true
  })

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
          <Badge className="mb-4 bg-primary/20 text-primary transition-colors hover:bg-primary/30">GOVERNANCE</Badge>
          <h1 className="mb-6 font-bold text-3xl md:text-4xl">Gerhana Improvement Proposals</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Participate in shaping the future of Gerhana by voting on community proposals. GRH token holders can vote on
            protocol changes, fee structures, and new features.
          </p>
        </motion.div>

        <div className="mb-8 flex items-center justify-between">
          <Tabs defaultValue="active" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="mx-auto grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="active" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                Active
              </TabsTrigger>
              <TabsTrigger value="passed" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                Passed
              </TabsTrigger>
              <TabsTrigger value="rejected" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                Rejected
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <Button className="rounded-full">
            <FileText className="mr-2 h-4 w-4" />
            Create Proposal
          </Button>
        </div>

        <div className="space-y-6">
          {filteredProposals.map((proposal) => (
            <motion.div
              key={proposal.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: proposal.id * 0.1 }}
            >
              <Card className="overflow-hidden border border-primary/20 bg-card/50 backdrop-blur-xs">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <Badge
                        className={`mb-2 ${
                          proposal.status === "active"
                            ? "bg-blue-500/20 text-blue-500"
                            : proposal.status === "passed"
                              ? "bg-green-500/20 text-green-500"
                              : "bg-red-500/20 text-red-500"
                        }`}
                      >
                        {proposal.status.toUpperCase()}
                      </Badge>
                      <h3 className="mb-2 font-bold text-xl">{proposal.title}</h3>
                      <p className="mb-4 text-muted-foreground">{proposal.description}</p>
                    </div>
                    <Badge className="bg-primary/20 text-primary">{proposal.category}</Badge>
                  </div>

                  <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="rounded-lg bg-muted/30 p-3">
                      <div className="mb-1 text-muted-foreground text-sm">Proposer</div>
                      <div className="font-medium">{proposal.proposer}</div>
                    </div>
                    <div className="rounded-lg bg-muted/30 p-3">
                      <div className="mb-1 text-muted-foreground text-sm">Created</div>
                      <div className="font-medium">{proposal.createdAt}</div>
                    </div>
                    <div className="rounded-lg bg-muted/30 p-3">
                      <div className="mb-1 text-muted-foreground text-sm">Voting Ends</div>
                      <div className="flex items-center font-medium">
                        <Clock className="mr-1 h-4 w-4 text-primary" />
                        {proposal.endsAt}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="mb-1 flex justify-between text-sm">
                      <span className="text-muted-foreground">Votes</span>
                      <span>
                        {proposal.totalVotes.toLocaleString()} / {proposal.quorum.toLocaleString()} required
                      </span>
                    </div>
                    {/*<Progress*/}
                    {/*  value={*/}
                    {/*    proposal.quorum*/}
                    {/*      ? (proposal.totalVotes / proposal.quorum) * 100*/}
                    {/*      : 0*/}
                    {/*  }*/}
                    {/*  className="h-2"*/}
                    {/*  indicatorClassName={*/}
                    {/*    proposal.status === 'active'*/}
                    {/*      ? 'bg-blue-500'*/}
                    {/*      : proposal.status === 'passed'*/}
                    {/*        ? 'bg-green-500'*/}
                    {/*        : 'bg-red-500'*/}
                    {/*  }*/}
                    {/*/>*/}
                  </div>

                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <div className="rounded-lg bg-green-500/10 p-3 text-center">
                      <div className="mb-1 text-muted-foreground text-sm">For</div>
                      <div className="font-bold text-green-500">{proposal.votes.for}%</div>
                    </div>
                    <div className="rounded-lg bg-red-500/10 p-3 text-center">
                      <div className="mb-1 text-muted-foreground text-sm">Against</div>
                      <div className="font-bold text-red-500">{proposal.votes.against}%</div>
                    </div>
                    <div className="rounded-lg bg-muted/30 p-3 text-center">
                      <div className="mb-1 text-muted-foreground text-sm">Abstain</div>
                      <div className="font-bold text-muted-foreground">{proposal.votes.abstain}%</div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Users className="mr-1 h-4 w-4" />
                      <span>{Math.floor(Math.random() * 500) + 100} participants</span>
                    </div>
                    <Link href={`/governance/${proposal.id}`}>
                      <Button variant="outline" className="rounded-full border-primary/20 hover:bg-primary/10">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-primary/20 bg-card/50 p-8 text-center backdrop-blur-xs">
          <BarChart3 className="mx-auto mb-4 h-12 w-12 text-primary" />
          <h2 className="mb-4 font-bold text-2xl">Governance Statistics</h2>
          <div className="mx-auto mb-8 grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-muted/30 p-4">
              <div className="mb-1 font-bold text-3xl">24</div>
              <div className="text-muted-foreground">Total Proposals</div>
            </div>
            <div className="rounded-lg bg-muted/30 p-4">
              <div className="mb-1 font-bold text-3xl">18</div>
              <div className="text-muted-foreground">Proposals Passed</div>
            </div>
            <div className="rounded-lg bg-muted/30 p-4">
              <div className="mb-1 font-bold text-3xl">76%</div>
              <div className="text-muted-foreground">Approval Rate</div>
            </div>
          </div>
          <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
            Gerhana governance is powered by GRH tokens. Hold GRH to participate in voting and shape the future of the
            platform.
          </p>
          <Button className="rounded-full">Learn About Governance</Button>
        </div>
      </div>
    </div>
  )
}
