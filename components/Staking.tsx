'use client';

import { useStaking } from '@/hooks/useStaking';

export default function Staking() {
  const {
    stakedNfts,
    unstakedNfts,
    totalPoints,
    stakeNft,
    unstakeNft,
    isLoading,
  } = useStaking();

  return (
    <div className="p-6 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg backdrop-blur-md">
      <h1 className="text-2xl font-bold mb-4">NFT Staking</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Your Staked NFTs</h2>
          <div className="space-y-4">
            {stakedNfts.map((nft) => (
              <div key={nft.id} className="flex items-center justify-between bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center space-x-4">
                  <img src={nft.imageUrl} alt={nft.name} className="w-16 h-16 rounded-md" />
                  <div>
                    <h3 className="font-semibold">{nft.name}</h3>
                    <p className="text-sm text-purple-400">Points: {nft.points}</p>
                  </div>
                </div>
                <button
                  onClick={() => unstakeNft(nft.id)}
                  className="px-4 py-2 bg-red-600 rounded-md hover:bg-red-700 disabled:bg-gray-500"
                  disabled={isLoading}
                >
                  {isLoading ? 'Unstaking...' : 'Unstake'}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Your Unstaked NFTs</h2>
          <div className="space-y-4">
            {unstakedNfts.map((nft) => (
              <div key={nft.id} className="flex items-center justify-between bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center space-x-4">
                  <img src={nft.imageUrl} alt={nft.name} className="w-16 h-16 rounded-md" />
                  <div>
                    <h3 className="font-semibold">{nft.name}</h3>
                  </div>
                </div>
                <button
                  onClick={() => stakeNft(nft.id)}
                  className="px-4 py-2 bg-green-600 rounded-md hover:bg-green-700 disabled:bg-gray-500"
                  disabled={isLoading}
                >
                  {isLoading ? 'Staking...' : 'Stake'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-gray-700 rounded-lg">
        <h2 className="text-xl font-semibold">Staking Summary</h2>
        <div className="mt-2 flex justify-between">
          <p>Total NFTs Staked:</p>
          <p className="font-bold">{stakedNfts.length}</p>
        </div>
        <div className="mt-1 flex justify-between">
          <p>Total Points Earned:</p>
          <p className="font-bold text-purple-400">{totalPoints}</p>
        </div>
      </div>
    </div>
  );
}
