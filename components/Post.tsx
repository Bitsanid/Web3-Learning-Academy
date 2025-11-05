'use client';

import { Avatar } from './Avatar';
import { Address } from './Address';
import { ReactionBar } from './ReactionBar';

export function Post({ post }: { post: any }) {
  return (
    <div className="p-4 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg backdrop-blur-md">
      <div className="flex items-start space-x-4">
        <Avatar address={post.author.address} />
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <span className="font-bold">{post.author.name}</span>
            <Address address={post.author.address} />
            <span className="text-gray-400 text-sm">{post.timestamp}</span>
          </div>
          <p className="mt-2">{post.content}</p>
        </div>
      </div>
      <ReactionBar reactions={post.reactions} />
    </div>
  );
}
