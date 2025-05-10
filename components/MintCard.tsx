"use client"

import { useState } from "react"
import { useAccount, useWriteContract, useReadContract } from "wagmi"
import { parseEther } from "viem"
import { toast } from "react-hot-toast"
import { Plus, Minus, Sparkles } from "lucide-react"
import { CONTRACT_ADDRESS, MAX_MINT_COUNT, MINT_PRICE } from "../../mint/src/lib/constants"
import { NFT_ABI } from "../../mint/src/lib/abi"
import { ConnectButton } from "../../mint/src/components/ConnectButton"

export function MintCard() {
  const [mintCount, setMintCount] = useState(1)
  const [isMinting, setIsMinting] = useState(false)
  const { isConnected } = useAccount()

  // Contract read operations
  const { data: totalSupply, isLoading: isLoadingTotalSupply } = useReadContract({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: NFT_ABI,
    functionName: "totalSupply",
  })

  const { data: maxSupply, isLoading: isLoadingMaxSupply } = useReadContract({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: NFT_ABI,
    functionName: "maxSupply",
  })

  // Contract write operations
  const { writeContractAsync, status } = useWriteContract()

  // Handle mint count changes
  const decrementMintCount = () => {
    if (mintCount > 1) {
      setMintCount(mintCount - 1)
    }
  }

  const incrementMintCount = () => {
    if (mintCount < MAX_MINT_COUNT) {
      setMintCount(mintCount + 1)
    }
  }

  // Handle mint action
  const handleMint = async () => {
    if (!isConnected) {
      toast.error("Please connect your wallet first")
      return
    }

    try {
      setIsMinting(true)

      const tx = await writeContractAsync({
        address: CONTRACT_ADDRESS as `0x${string}`,
        abi: NFT_ABI,
        functionName: "mint",
        args: [BigInt(mintCount)],
        value: parseEther((MINT_PRICE * mintCount).toString()),
      })

      toast.success("Transaction submitted!")

      // Reset mint count after successful transaction
      setMintCount(1)
    } catch (error) {
      console.error("Mint error:", error)
      toast.error("Failed to mint. Please try again.")
    } finally {
      setIsMinting(false)
    }
  }

  // Calculate mint progress
  const progress = totalSupply && maxSupply ? (Number(totalSupply) / Number(maxSupply)) * 100 : 0

  return (
    <div className="w-full max-w-md mx-auto overflow-hidden backdrop-blur-lg bg-white/10 dark:bg-slate-900/50 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800">
      <div className="relative p-6 sm:p-8">
        {/* Mint card header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">Mint Your NFT</h2>
          <p className="text-gray-600 dark:text-gray-300">Join the collection on Monad Testnet</p>
        </div>

        {/* Mint progress */}
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600 dark:text-gray-400">Progress</span>
            <span className="font-medium text-gray-900 dark:text-white">
              {isLoadingTotalSupply || isLoadingMaxSupply
                ? "Loading..."
                : `${totalSupply?.toString() || 0}/${maxSupply?.toString() || 0}`}
            </span>
          </div>
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Mint quantity selector */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-gray-700 dark:text-gray-300 font-medium">Quantity</span>
          <div className="flex items-center">
            <button
              onClick={decrementMintCount}
              disabled={mintCount <= 1 || isMinting}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors disabled:opacity-50"
            >
              <Minus size={16} />
            </button>
            <span className="mx-4 font-bold text-lg text-gray-900 dark:text-white">{mintCount}</span>
            <button
              onClick={incrementMintCount}
              disabled={mintCount >= MAX_MINT_COUNT || isMinting}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors disabled:opacity-50"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>

        {/* Price information */}
        <div className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg mb-6">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Price per NFT</p>
            <p className="font-medium text-gray-900 dark:text-white">{MINT_PRICE} MONAD</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600 dark:text-gray-400">Total price</p>
            <p className="font-bold text-gray-900 dark:text-white">{(MINT_PRICE * mintCount).toFixed(3)} MONAD</p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="space-y-3">
          {isConnected ? (
            <button
              onClick={handleMint}
              disabled={isMinting || status === "pending"}
              className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold text-white ${
                isMinting || status === "pending"
                  ? "bg-gray-400 dark:bg-gray-700 cursor-not-allowed"
                  : "bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 transform hover:scale-[1.02] transition-all"
              }`}
            >
              {isMinting || status === "pending" ? (
                <>
                  <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Sparkles size={18} />
                  <span>Mint Now</span>
                </>
              )}
            </button>
          ) : (
            <div className="flex justify-center">
              <ConnectButton />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
