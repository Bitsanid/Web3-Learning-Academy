'use client';

import { useMarketplace } from '@/hooks/useMarketplace';

export default function Marketplace() {
  const { nfts, isLoading } = useMarketplace();

  if (isLoading) {
    return <div className="text-center p-8">Loading marketplace...</div>;
  }

  return (
    <div className="p-6 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg backdrop-blur-md">
      <h1 className="text-2xl font-bold mb-4">NFT Marketplace</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {nfts.map((nft) => (
          <div key={nft.id} className="bg-gray-700 rounded-lg p-4">
            <img
              src={nft.imageUrl}
              alt={nft.name}
              className="w-full h-auto rounded-md"
            />
            <h3 className="mt-2 text-lg font-semibold">{nft.name}</h3>
            <p className="mt-1 text-purple-400">{nft.price}</p>
            <button className="mt-4 w-full px-4 py-2 bg-purple-600 rounded-md hover:bg-purple-700">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
