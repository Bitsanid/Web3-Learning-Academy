'use client';

import { useFeed } from '@/hooks/useFeed';
import { Post } from './Post';

export default function Feed() {
  const { posts, isLoading } = useFeed();

  if (isLoading) {
    return <div className="text-center p-8">Loading feed...</div>;
  }

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
