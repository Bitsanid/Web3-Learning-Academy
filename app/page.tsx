"use client";

import { useEffect, useState } from "react";
import { sdk } from "@farcaster/miniapp-sdk";
import Link from "next/link";
import { useAccount } from "wagmi";

export default function Home() {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);
  const [context, setContext] = useState<any>(null);
  const { address, isConnected } = useAccount();

  useEffect(() => {
    const initSDK = async () => {
      try {
        await sdk.actions.ready();
        setIsSDKLoaded(true);
        
        const userContext = sdk.context;
        setContext(userContext);
      } catch (error) {
        console.error("Failed to initialize Farcaster SDK:", error);
        setIsSDKLoaded(true);
      }
    };

    initSDK();
  }, []);

  if (!isSDKLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-4">
            🎓 Web3 Learning Academy
          </h1>
          <p className="text-xl text-white/90 mb-6">
            Master blockchain technology. Earn NFT badges.
          </p>
          <div className="flex justify-center">

          </div>
        </header>

        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Welcome to the Future of Learning
          </h2>
          <p className="text-gray-600 mb-6">
            Learn about blockchain, smart contracts, DeFi, NFTs, and more. 
            Each completed lesson earns you a unique NFT badge minted on Base that proves your knowledge.
          </p>
          
          {isConnected && address && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800">
                ✅ Wallet Connected: {address.slice(0, 6)}...{address.slice(-4)}
              </p>
            </div>
          )}
          
          {context?.user && (
            <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-800">
                🔗 Farcaster: FID {context.user.fid}
              </p>
            </div>
          )}

          <div className="space-y-4">
            <Link
              href="/lessons"
              className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-4 px-6 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105"
            >
              🚀 Start Learning
            </Link>
            
            <Link
              href="/dashboard"
              className="block w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center py-4 px-6 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105"
            >
              📊 My Dashboard
            </Link>
            
            <Link
              href="/badges"
              className="block w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-center py-4 px-6 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105"
            >
              🏆 My NFT Badges
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
            <div className="text-4xl mb-2">📚</div>
            <h3 className="font-bold mb-2">10+ Lessons</h3>
            <p className="text-sm text-white/80">From basics to advanced topics</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
            <div className="text-4xl mb-2">🎖️</div>
            <h3 className="font-bold mb-2">NFT Rewards</h3>
            <p className="text-sm text-white/80">Collect badges for achievements</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
            <div className="text-4xl mb-2">⚡</div>
            <h3 className="font-bold mb-2">Web3 Native</h3>
            <p className="text-sm text-white/80">Built on Farcaster</p>
          </div>
        </div>
      </div>
    </div>
  );
}
