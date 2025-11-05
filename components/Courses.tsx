'use client';

import Link from 'next/link';
import { useCourses } from '@/hooks/useCourses';

export default function Courses() {
  const { courses, isLoading } = useCourses();

  if (isLoading) {
    return <div className="text-center p-8">Loading courses...</div>;
  }

  return (
    <div className="p-6 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg backdrop-blur-md">
      <h1 className="text-2xl font-bold mb-4">Available Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-gray-700 rounded-lg p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-400 mb-4">{course.description}</p>
              <p className="text-sm text-purple-400">{course.modules} Modules</p>
            </div>
            <Link href={`/courses/${course.id}`} className="mt-4 w-full text-center px-4 py-2 bg-purple-600 rounded-md hover:bg-purple-700">
              View Course
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
