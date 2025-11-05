'use client';

const dummyCourses = [
  {
    id: '1',
    title: 'Introduction to Blockchain',
    description: 'Learn the fundamentals of blockchain technology, including its history, core concepts, and potential applications.',
    modules: 5,
  },
  {
    id: '2',
    title: 'Crypto and DeFi Fundamentals',
    description: 'Explore the world of cryptocurrencies and decentralized finance (DeFi), from Bitcoin to the latest DeFi protocols.',
    modules: 7,
  },
  {
    id: '3',
    title: 'Web3 and Smart Contracts',
    description: 'Dive deep into Web3 development and learn how to build and deploy smart contracts on the Ethereum blockchain.',
    modules: 8,
  },
    {
    id: '4',
    title: 'Advanced DEX Strategies',
    description: 'Master advanced decentralized exchange (DEX) trading strategies and learn how to maximize your returns.',
    modules: 6,
  },
];

export function useCourses() {
  // In a real application, you would fetch this data from an API
  return {
    courses: dummyCourses,
    isLoading: false,
  };
}
