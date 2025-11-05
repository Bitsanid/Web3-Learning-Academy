'use client';

const dummyPosts = [
  {
    id: '1',
    author: {
      name: 'John Doe',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
      address: '0x1234...5678',
    },
    content: 'Just completed the "Intro to DeFi" course! Highly recommend it. #web3 #defi',
    reactions: {
      likes: 12,
      comments: 3,
    },
    timestamp: '2h ago',
  },
  {
    id: '2',
    author: {
      name: 'Jane Smith',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
      address: '0xabcd...efgh',
    },
    content: 'Excited to start my journey into the world of smart contracts. Any tips for a beginner?',
    reactions: {
      likes: 25,
      comments: 8,
    },
    timestamp: '5h ago',
  },
];

export function useFeed() {
  // In a real application, you would fetch this data from an API
  return {
    posts: dummyPosts,
    isLoading: false,
  };
}
