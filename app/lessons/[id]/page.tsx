"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { lessons } from "@/lib/lessons";
import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { useMintBadge } from "@/hooks/useMintBadge";
import { useHasCompletedLesson } from "@/hooks/useUserBadges";
import { ConnectWallet } from "@/components/ConnectWallet";

export default function LessonPage() {
  const params = useParams();
  const { isConnected } = useAccount();
  const lesson = lessons.find((l) => l.id === params.id);
  const lessonId = lesson ? parseInt(lesson.id) : 0;
  
  const { hasCompleted } = useHasCompletedLesson(lessonId);
  const { mintBadge, isPending, isConfirming, isConfirmed, hash, error } = useMintBadge();
  
  const [localCompleted, setLocalCompleted] = useState(false);

  useEffect(() => {
    if (lesson && !isConnected) {
      const completedLessons = JSON.parse(
        localStorage.getItem("completedLessons") || "[]"
      );
      if (completedLessons.includes(lesson.id)) {
        setLocalCompleted(true);
      }
    }
  }, [lesson, isConnected]);

  useEffect(() => {
    if (isConfirmed) {
      setLocalCompleted(true);
    }
  }, [isConfirmed]);

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500">
        <div className="bg-white rounded-xl p-8 shadow-2xl text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Lesson not found
          </h1>
          <Link
            href="/lessons"
            className="text-blue-600 hover:underline"
          >
            ← Back to lessons
          </Link>
        </div>
      </div>
    );
  }

  const handleCompleteLesson = async () => {
    if (!isConnected) {
      const completedLessons = JSON.parse(
        localStorage.getItem("completedLessons") || "[]"
      );
      
      if (!completedLessons.includes(lesson.id)) {
        completedLessons.push(lesson.id);
        localStorage.setItem(
          "completedLessons",
          JSON.stringify(completedLessons)
        );
        
        const badges = JSON.parse(localStorage.getItem("badges") || "[]");
        badges.push({
          lessonId: lesson.id,
          lessonTitle: lesson.title,
          badgeName: lesson.badge.name,
          badgeImage: lesson.badge.image,
          mintedAt: new Date().toISOString(),
        });
        localStorage.setItem("badges", JSON.stringify(badges));
      }
      
      setLocalCompleted(true);
    } else {
      try {
        await mintBadge(lessonId);
      } catch (err) {
        console.error("Failed to mint badge:", err);
      }
    }
  };

  const completed = isConnected ? (hasCompleted || isConfirmed) : localCompleted;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <Link
            href="/lessons"
            className="text-white hover:text-white/80 transition-colors"
          >
            ← Back to Lessons
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-2xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl">{lesson.badge.image}</span>
            <div>
              <h1 className="text-4xl font-bold text-gray-800">
                {lesson.title}
              </h1>
              <div className="flex gap-2 mt-2">
                <span className={`text-sm px-3 py-1 rounded ${
                  lesson.difficulty === "beginner"
                    ? "bg-green-100 text-green-700"
                    : lesson.difficulty === "intermediate"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700"
                }`}>
                  {lesson.difficulty}
                </span>
                <span className="text-sm px-3 py-1 rounded bg-blue-100 text-blue-700">
                  ⏱️ {lesson.duration}
                </span>
              </div>
            </div>
          </div>

          <div className="prose max-w-none mb-8">
            <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
              {lesson.content}
            </div>
          </div>

          <div className="border-t pt-6">
            {!isConnected && (
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
                <p className="text-blue-800 mb-3">
                  🔗 Connect your wallet to mint NFT badges on Base blockchain
                </p>
                <ConnectWallet />
              </div>
            )}
            
            {completed ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="text-6xl mb-4">🎉</div>
                <h2 className="text-2xl font-bold text-green-800 mb-2">
                  Congratulations!
                </h2>
                <p className="text-green-700 mb-4">
                  You've completed this lesson and earned the{" "}
                  <strong>{lesson.badge.name}</strong> NFT badge!
                  {isConnected && hash && (
                    <span className="block mt-2 text-sm">
                      Transaction: <a href={`https://basescan.org/tx/${hash}`} target="_blank" rel="noopener noreferrer" className="underline">{hash.slice(0, 10)}...</a>
                    </span>
                  )}
                </p>
                <div className="flex gap-4 justify-center">
                  <Link
                    href="/badges"
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    🏆 View My Badges
                  </Link>
                  <Link
                    href="/lessons"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    📚 Continue Learning
                  </Link>
                </div>
              </div>
            ) : (
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-800 mb-2">
                  🏆 Complete this lesson to earn your NFT badge
                </h3>
                <p className="text-purple-700 mb-4">
                  Badge Reward: <strong>{lesson.badge.name}</strong> {lesson.badge.image}
                  {isConnected && <span className="block mt-1 text-sm">✨ This badge will be minted as an NFT on Base!</span>}
                </p>
                {error && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
                    Error: {error.message}
                  </div>
                )}
                <button
                  onClick={handleCompleteLesson}
                  disabled={isPending || isConfirming}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isPending
                    ? "Waiting for approval..."
                    : isConfirming
                    ? "Minting NFT Badge..."
                    : isConnected
                    ? "Complete Lesson & Mint NFT Badge"
                    : "Complete Lesson & Save Progress"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
