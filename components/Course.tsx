'use client';

import { useParams } from 'next/navigation';
import { useCourse } from '@/hooks/useCourse';
import { useMintBadge } from '@/hooks/useMintBadge';

export default function Course() {
  const { id } = useParams();
  const { course, isLoading: isCourseLoading } = useCourse(id as string);
  const { mintBadge, isLoading: isMinting } = useMintBadge();

  if (isCourseLoading) {
    return <div className="text-center p-8">Loading course...</div>;
  }

  if (!course) {
    return <div className="text-center p-8">Course not found.</div>;
  }

  return (
    <div className="p-6 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg backdrop-blur-md">
      <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
      <p className="text-gray-400 mb-6">{course.description}</p>

      <div className="space-y-4">
        {course.modules.map((module) => (
          <div
            key={module.id}
            className={`flex items-center justify-between p-4 rounded-lg ${
              module.completed ? 'bg-green-800 bg-opacity-50' : 'bg-gray-700'
            }`}
          >
            <div className="flex items-center space-x-4">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  module.completed ? 'bg-green-500' : 'bg-gray-600'
                }`}
              >
                {module.completed ? '✔' : '○'}
              </div>
              <h2 className="text-lg font-semibold">{module.title}</h2>
            </div>
            <button
              onClick={() => mintBadge(module.id)}
              className="px-4 py-2 bg-purple-600 rounded-md hover:bg-purple-700 disabled:bg-gray-500"
              disabled={!module.completed || isMinting}
            >
              {isMinting ? 'Minting...' : 'Mint NFT Badge'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
