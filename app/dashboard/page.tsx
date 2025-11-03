"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { lessons } from "@/lib/lessons";

export default function DashboardPage() {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [badges, setBadges] = useState<any[]>([]);

  useEffect(() => {
    const completed = JSON.parse(
      localStorage.getItem("completedLessons") || "[]"
    );
    setCompletedLessons(completed);

    const userBadges = JSON.parse(localStorage.getItem("badges") || "[]");
    setBadges(userBadges);
  }, []);

  const progress = Math.round((completedLessons.length / lessons.length) * 100);

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
          📊 My Learning Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-4xl mb-2">📚</div>
            <div className="text-3xl font-bold text-gray-800">
              {completedLessons.length}/{lessons.length}
            </div>
            <div className="text-gray-600">Lessons Completed</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-4xl mb-2">🏆</div>
            <div className="text-3xl font-bold text-gray-800">
              {badges.length}
            </div>
            <div className="text-gray-600">NFT Badges Earned</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-4xl mb-2">⚡</div>
            <div className="text-3xl font-bold text-gray-800">{progress}%</div>
            <div className="text-gray-600">Overall Progress</div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Progress Overview
          </h2>
          <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
            <div
              className="bg-gradient-to-r from-purple-600 to-blue-600 h-4 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-gray-600">
            {completedLessons.length === lessons.length
              ? "🎉 Congratulations! You've completed all lessons!"
              : `Keep going! ${lessons.length - completedLessons.length} lesson${
                  lessons.length - completedLessons.length === 1 ? "" : "s"
                } remaining.`}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Lesson Status
          </h2>
          <div className="space-y-4">
            {lessons.map((lesson, index) => {
              const isCompleted = completedLessons.includes(lesson.id);
              return (
                <div
                  key={lesson.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{lesson.badge.image}</span>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Lesson {index + 1}: {lesson.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {lesson.difficulty} • {lesson.duration}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {isCompleted ? (
                      <span className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-semibold">
                        ✓ Completed
                      </span>
                    ) : (
                      <Link
                        href={`/lessons/${lesson.id}`}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all"
                      >
                        Start →
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
