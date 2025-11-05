'use client';

import { useState } from 'react';
import { useCreatePost } from '@/hooks/useCreatePost';

export default function CreatePost() {
  const [content, setContent] = useState('');
  const { createPost, isLoading } = useCreatePost();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;
    await createPost(content);
    setContent('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg backdrop-blur-md"
    >
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
        className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
        rows={3}
      ></textarea>
      <div className="mt-2 text-right">
        <button
          type="submit"
          className="px-4 py-2 bg-purple-600 rounded-md hover:bg-purple-700 disabled:bg-gray-500"
          disabled={!content.trim() || isLoading}
        >
          {isLoading ? 'Posting...' : 'Post'}
        </button>
      </div>
    </form>
  );
}
