"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { lessons } from "@/lib/lessons";
import { useState, useEffect } from "react";

export default function LessonPage() {
  const params = useParams();
  const router = useRouter();
  const [isCompleting, setIsCompleting] = useState(false);
  const [completed, setCompleted] = useState(false);
  
  const lesson = lessons.find((l) => l.id === params.id);

  useEffect(() => {
    if (lesson) {
      const completedLessons = JSON.parse(
        localStorage.getItem("completedLessons") || "[]"
      );
      if (completedLessons.includes(lesson.id)) {
        setCompleted(true);
      }
    }
  }, [lesson]);

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
    setIsCompleting(true);
    
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
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsCompleting(false);
    setCompleted(true);
  };

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
            {completed ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="text-6xl mb-4">🎉</div>
                <h2 className="text-2xl font-bold text-green-800 mb-2">
                  Congratulations!
                </h2>
                <p className="text-green-700 mb-4">
                  You've completed this lesson and earned the{" "}
                  <strong>{lesson.badge.name}</strong> NFT badge!
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
                </p>
                <button
                  onClick={handleCompleteLesson}
                  disabled={isCompleting}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isCompleting ? "Minting NFT Badge..." : "Complete Lesson & Mint Badge"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
