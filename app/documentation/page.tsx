"use client"

import { Badge } from "@repo/ui/components/ui/badge"
import { Button } from "@repo/ui/components/ui/button"
import { Card, CardContent } from "@repo/ui/components/ui/card"
import { Input } from "@repo/ui/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/ui/components/ui/tabs"
import { motion } from "framer-motion"
import {
  ArrowRight,
  BookOpen,
  Check,
  Code,
  Copy,
  ExternalLink,
  FileText,
  Gamepad2,
  Home,
  Repeat,
  Search,
  Wallet,
} from "lucide-react"
import { useState } from "react"
import SectionParticles from "../../../../packages/ui/components/section-particles"

export default function DocumentationPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [_activeTab, setActiveTab] = useState("guides")
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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
          <Badge className="mb-4 bg-primary/20 text-primary transition-colors hover:bg-primary/30">DOCUMENTATION</Badge>
          <h1 className="mb-6 font-bold text-3xl md:text-4xl">Gerhana Developer Hub</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Comprehensive guides, API references, and examples to help you build on the Gerhana platform.
          </p>

          <div className="mx-auto mt-8 max-w-2xl">
            <div className="relative">
              <Search className="-translate-y-1/2 absolute top-1/2 left-3 h-5 w-5 transform text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search documentation..."
                className="border-primary/20 py-6 pl-10 text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </motion.div>

        <Tabs defaultValue="guides" className="mb-12" onValueChange={setActiveTab}>
          <TabsList className="mx-auto grid w-full max-w-2xl grid-cols-3">
            <TabsTrigger value="guides" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              <BookOpen className="mr-2 h-4 w-4" />
              Guides
            </TabsTrigger>
            <TabsTrigger value="api" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              <Code className="mr-2 h-4 w-4" />
              API Reference
            </TabsTrigger>
            <TabsTrigger value="sdk" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              <FileText className="mr-2 h-4 w-4" />
              SDK
            </TabsTrigger>
          </TabsList>

          <TabsContent value="guides" className="mt-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Getting Started with Gerhana",
                  description: "Learn the basics of Gerhana platform and how to set up your account.",
                  icon: <BookOpen className="h-6 w-6" />,
                  category: "Basics",
                  timeToRead: "5 min read",
                },
                {
                  title: "Swap Integration Guide",
                  description: "Integrate Gerhana Swap functionality into your dApp with our SDK.",
                  icon: <Repeat className="h-6 w-6" />,
                  category: "Swap",
                  timeToRead: "10 min read",
                },
                {
                  title: "NFT Rental Implementation",
                  description: "Learn how to implement NFT rentals in your application using Gerhana.",
                  icon: <Home className="h-6 w-6" />,
                  category: "Rent",
                  timeToRead: "15 min read",
                },
                {
                  title: "Gaming Platform Integration",
                  description: "Add Gerhana gaming features to your platform with our Plays API.",
                  icon: <Gamepad2 className="h-6 w-6" />,
                  category: "Plays",
                  timeToRead: "12 min read",
                },
                {
                  title: "Wallet Connection Guide",
                  description: "Learn how to connect various wallets to your Gerhana-powered application.",
                  icon: <Wallet className="h-6 w-6" />,
                  category: "Wallet",
                  timeToRead: "8 min read",
                },
                {
                  title: "Multi-Chain Support",
                  description: "Implement cross-chain functionality in your dApp with Gerhana.",
                  icon: <Code className="h-6 w-6" />,
                  category: "Advanced",
                  timeToRead: "20 min read",
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
          </TabsContent>

          <TabsContent value="api" className="mt-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <Card className="sticky top-24 border border-primary/20 bg-card/50 backdrop-blur-xs">
                  <CardContent className="p-6">
                    <h3 className="mb-4 font-bold text-lg">API Endpoints</h3>
                    <div className="space-y-2">
                      {[
                        "Authentication",
                        "Swap",
                        "Rent",
                        "Plays",
                        "Portfolio",
                        "User",
                        "Wallet",
                        "Transactions",
                        "Governance",
                        "Webhooks",
                      ].map((endpoint, index) => (
                        <Button
                          key={index}
                          variant="ghost"
                          className="w-full justify-start text-left hover:bg-primary/10 hover:text-primary"
                        >
                          {endpoint}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-2">
                <Card className="mb-6 border border-primary/20 bg-card/50 backdrop-blur-xs">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="font-bold text-xl">Authentication</h3>
                      <Badge className="bg-green-500/20 text-green-500">GET</Badge>
                    </div>

                    <p className="mb-6 text-muted-foreground">
                      Authenticate with the Gerhana API using JWT tokens. All API requests must include an
                      authentication token in the header.
                    </p>

                    <div className="mb-6 rounded-lg bg-muted/30 p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <h4 className="font-medium">Base URL</h4>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                          onClick={() => copyToClipboard("https://api.gerhana.io/v1")}
                        >
                          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                      <code className="text-sm">https://api.gerhana.io/v1</code>
                    </div>

                    <h4 className="mb-2 font-bold">Request Headers</h4>
                    <div className="mb-6 overflow-x-auto rounded-lg bg-muted/30 p-4">
                      <pre className="text-sm">
                        {`{
  "Authorization": "Bearer YOUR_API_KEY",
  "Content-Type": "application/json"
}`}
                      </pre>
                    </div>

                    <h4 className="mb-2 font-bold">Example Request</h4>
                    <div className="mb-6 overflow-x-auto rounded-lg bg-muted/30 p-4">
                      <pre className="text-sm">
                        {`curl -X POST https://api.gerhana.io/v1/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "password": "your_password"
  }'`}
                      </pre>
                    </div>

                    <h4 className="mb-2 font-bold">Example Response</h4>
                    <div className="overflow-x-auto rounded-lg bg-muted/30 p-4">
                      <pre className="text-sm">
                        {`{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expires_in": 3600
  }
}`}
                      </pre>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex items-center justify-between">
                  <Button variant="outline" className="rounded-full border-primary/20">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Full API Documentation
                  </Button>
                  <Button className="rounded-full">Get API Key</Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="sdk" className="mt-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <Card className="sticky top-24 border border-primary/20 bg-card/50 backdrop-blur-xs">
                  <CardContent className="p-6">
                    <h3 className="mb-4 font-bold text-lg">SDK Packages</h3>
                    <div className="space-y-2">
                      {[
                        "Getting Started",
                        "Core SDK",
                        "Swap SDK",
                        "Rent SDK",
                        "Plays SDK",
                        "Wallet SDK",
                        "React Hooks",
                        "Vue Components",
                        "Angular Components",
                      ].map((pkg, index) => (
                        <Button
                          key={index}
                          variant="ghost"
                          className="w-full justify-start text-left hover:bg-primary/10 hover:text-primary"
                        >
                          {pkg}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-2">
                <Card className="mb-6 border border-primary/20 bg-card/50 backdrop-blur-xs">
                  <CardContent className="p-6">
                    <h3 className="mb-4 font-bold text-xl">Getting Started with Gerhana SDK</h3>

                    <p className="mb-6 text-muted-foreground">
                      The Gerhana SDK provides a simple way to integrate Gerhana's features into your application.
                      Follow these steps to get started with the SDK.
                    </p>

                    <h4 className="mb-2 font-bold">Installation</h4>
                    <div className="mb-6 overflow-x-auto rounded-lg bg-muted/30 p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-muted-foreground text-sm">npm</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                          onClick={() => copyToClipboard("npm install @gerhana/sdk")}
                        >
                          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                      <pre className="text-sm">npm install @gerhana/sdk</pre>
                    </div>

                    <h4 className="mb-2 font-bold">Basic Usage</h4>
                    <div className="mb-6 overflow-x-auto rounded-lg bg-muted/30 p-4">
                      <pre className="text-sm">
                        {`import { Gerhana } from '@gerhana/sdk';

// Initialize the SDK
const gerhana = new Gerhana({
  apiKey: 'YOUR_API_KEY',
  environment: 'production', // or 'testnet'
});

// Connect wallet
const connectWallet = async () => {
  try {
    const wallet = await gerhana.wallet.connect();
    console.log('Connected wallet:', wallet.address);
  } catch (error) {
    console.error('Failed to connect wallet:', error);
  }
};

// Perform a swap
const swap = async () => {
  try {
    const result = await gerhana.swap.execute({
      fromToken: 'MON',
      toToken: 'USDT',
      amount: '1.0',
      slippage: 0.5,
    });
    console.log('Swap result:', result);
  } catch (error) {
    console.error('Swap failed:', error);
  }
};`}
                      </pre>
                    </div>

                    <h4 className="mb-2 font-bold">React Integration</h4>
                    <div className="overflow-x-auto rounded-lg bg-muted/30 p-4">
                      <pre className="text-sm">
                        {`import { GerhanaProvider, useGerhana, useWallet } from '@gerhana/react';

function App() {
  return (
    <GerhanaProvider apiKey="YOUR_API_KEY">
      <YourApp />
    </GerhanaProvider>
  );
}

function YourApp() {
  const { isInitialized } = useGerhana();
  const { connect, address, isConnected } = useWallet();
  
  if (!isInitialized) return <div>Loading...</div>;
  
  return (
    <div>
      {isConnected ? (
        <p>Connected: {address}</p>
      ) : (
        <button onClick={connect}>Connect Wallet</button>
      )}
    </div>
  );
}`}
                      </pre>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex items-center justify-between">
                  <Button variant="outline" className="rounded-full border-primary/20">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Full SDK Documentation
                  </Button>
                  <Button className="rounded-full">Download Examples</Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 rounded-xl border border-primary/20 bg-card/50 p-8 text-center backdrop-blur-xs">
          <h2 className="mb-4 font-bold text-2xl">Need Help with Integration?</h2>
          <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
            Our developer support team is ready to help you with any questions or issues you may encounter.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button variant="outline" className="rounded-full border-primary/20">
              Join Discord Community
            </Button>
            <Button className="rounded-full">Contact Developer Support</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
