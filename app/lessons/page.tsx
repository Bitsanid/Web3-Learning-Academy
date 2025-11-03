"use client";

import Link from "next/link";
import { lessons } from "@/lib/lessons";

export default function LessonsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <Link
            href="/"
            className="text-white hover:text-white/80 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-8">
          📚 Learning Path
        </h1>

        <div className="space-y-6">
          {lessons.map((lesson, index) => (
            <div
              key={lesson.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-4xl">{lesson.badge.image}</span>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">
                        Lesson {index + 1}: {lesson.title}
                      </h2>
                      <div className="flex gap-2 mt-1">
                        <span className={`text-xs px-2 py-1 rounded ${
                          lesson.difficulty === "beginner"
                            ? "bg-green-100 text-green-700"
                            : lesson.difficulty === "intermediate"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}>
                          {lesson.difficulty}
                        </span>
                        <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700">
                          ⏱️ {lesson.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{lesson.description}</p>
                  <div className="mb-3 p-3 bg-purple-50 border border-purple-200 rounded-lg">
                    <p className="text-sm text-purple-800">
                      🏆 Reward: <strong>{lesson.badge.name}</strong> NFT Badge
                    </p>
                  </div>
                  <Link
                    href={`/lessons/${lesson.id}`}
                    className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Start Lesson →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
