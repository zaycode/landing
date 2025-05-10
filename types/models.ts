export type ChainType = "ethereum" | "solana" | "base" | "arbitrum" | "polygon"

export interface Chain {
  name: string
  icon: string
  tokens: string[]
}

export interface TokenData {
  symbol: string
  name: string
  price: string
  change: string
  id: string
  chain: ChainType
}

export interface AuctionItem {
  id: string
  title: string
  description: string
  imageUrl: string
  currentBid: number
  minBidIncrement: number
  endTime: Date
  creator: string
  creatorAvatar: string
  tokenId: string
  chain: ChainType
  category: string
  bids: number
  views: number
  featured?: boolean
}

export interface RaffleItem {
  id: string
  title: string
  description: string
  imageUrl: string
  ticketPrice: number
  ticketsSold: number
  totalTickets: number
  endTime: Date
  creator: string
  creatorAvatar: string
  tokenId: string
  chain: ChainType
  category: string
  participants: number
  views: number
  featured?: boolean
}

export interface Transaction {
  id: string
  type: "Swap" | "Cross-Chain" | "Routine" | "Trigger"
  from: string
  to: string
  fromChain: ChainType
  toChain: ChainType
  amount: number
  value: number
  time: Date
  status: "completed" | "pending" | "failed"
  hash: string
}
