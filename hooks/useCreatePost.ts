'use client';

import { useState } from 'react';

export function useCreatePost() {
  const [isLoading, setIsLoading] = useState(false);

  const createPost = async (content: string) => {
    setIsLoading(true);
    try {
      // In a real application, you would send this to your backend
      console.log('Creating post:', content);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      console.log('Post created successfully');
    } catch (error) {
      console.error('Error creating post:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    createPost,
    isLoading,
  };
}
