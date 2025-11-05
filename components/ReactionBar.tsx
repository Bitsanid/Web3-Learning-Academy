'use client';

export function ReactionBar({ reactions }: { reactions: any }) {
  return (
    <div className="mt-4 flex items-center space-x-4 text-gray-400">
      <button className="flex items-center space-x-1 hover:text-purple-400">
        <span>👍</span>
        <span>{reactions.likes}</span>
      </button>
      <button className="flex items-center space-x-1 hover:text-purple-400">
        <span>💬</span>
        <span>{reactions.comments}</span>
      </button>
      <button className="hover:text-purple-400">
        <span>🔁</span>
      </button>
    </div>
  );
}
