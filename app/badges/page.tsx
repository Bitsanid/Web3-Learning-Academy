"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { sdk } from "@farcaster/miniapp-sdk";

export default function BadgesPage() {
  const [badges, setBadges] = useState<any[]>([]);

  useEffect(() => {
    const userBadges = JSON.parse(localStorage.getItem("badges") || "[]");
    setBadges(userBadges);
  }, []);

  const handleShareBadge = async (badge: any) => {
    try {
      await sdk.actions.composeCast({
        text: `🎓 I just earned the "${badge.badgeName}" badge by completing "${badge.lessonTitle}" on Web3 Learning Academy! 🏆\n\nJoin me in learning blockchain and Web3 technologies!`,
      });
    } catch (error) {
      console.error("Failed to share badge:", error);
      alert("Sharing is available when running as a Farcaster Mini App");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <Link
            href="/"
            className="text-white hover:text-white/80 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-8">
          🏆 My NFT Badge Collection
        </h1>

        {badges.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <div className="text-6xl mb-4">🎖️</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              No badges yet!
            </h2>
            <p className="text-gray-600 mb-6">
              Complete lessons to earn your first NFT badge
            </p>
            <Link
              href="/lessons"
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Start Learning →
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <div className="text-center mb-4">
                  <div className="text-8xl mb-4">{badge.badgeImage}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {badge.badgeName}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">
                    Earned for completing:
                  </p>
                  <p className="text-sm font-semibold text-purple-600">
                    {badge.lessonTitle}
                  </p>
                </div>

                <div className="border-t pt-4">
                  <div className="text-xs text-gray-500 mb-4">
                    Minted: {new Date(badge.mintedAt).toLocaleDateString()}
                  </div>
                  
                  <button
                    onClick={() => handleShareBadge(badge)}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all text-sm"
                  >
                    📢 Share on Farcaster
                  </button>
                </div>

                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="text-xs text-green-800">
                    <strong>Token ID:</strong> #{badge.lessonId}
                    <br />
                    <strong>Status:</strong> Minted ✓
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
          <h2 className="text-xl font-bold mb-3">About NFT Badges</h2>
          <p className="text-white/90 mb-2">
            Each badge is a unique NFT (Non-Fungible Token) that proves your completion
            of a Web3 learning module. These badges are:
          </p>
          <ul className="list-disc list-inside space-y-1 text-white/80">
            <li>Unique digital certificates of achievement</li>
            <li>Stored on the blockchain (currently simulated)</li>
            <li>Shareable on Farcaster and other social platforms</li>
            <li>Permanent proof of your Web3 knowledge</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
