'use client';

const dummyCourse = {
  id: '1',
  title: 'Introduction to Blockchain',
  description: 'Learn the fundamentals of blockchain technology, including its history, core concepts, and potential applications.',
  modules: [
    { id: '1', title: 'What is Blockchain?', completed: true },
    { id: '2', title: 'How Blockchain Works', completed: true },
    { id: '3', title: 'Types of Blockchains', completed: false },
    { id: '4', title: 'Use Cases of Blockchain', completed: false },
    { id: '5', title: 'The Future of Blockchain', completed: false },
  ],
};

export function useCourse(courseId: string) {
  // In a real application, you would fetch this data from an API
  return {
    course: dummyCourse,
    isLoading: false,
  };
}
