'use client';

import { useProfile } from '@/hooks/useProfile';
import { Avatar } from '@/components/Avatar';
import { Address } from '@/components/Address';

export default function Profile() {
  const {
    address,
    isConnected,
    balance,
    isBalanceLoading,
    nfts,
    isNftsLoading,
    name,
    isNameLoading,
  } = useProfile();

  if (!isConnected) {
    return <div className="text-center p-8">Please connect your wallet to view your profile.</div>;
  }

  return (
    <div className="p-6 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg backdrop-blur-md">
      <div className="flex items-center space-x-4">
        <Avatar address={address!} />
        <div>
          <h1 className="text-2xl font-bold">{isNameLoading ? 'Loading...' : name}</h1>
          <Address address={address!} />
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Balance</h2>
        <p>{isBalanceLoading ? 'Loading...' : `${balance?.formatted} ${balance?.symbol}`}</p>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">NFT Badges</h2>
        {isNftsLoading ? (
          <p>Loading NFTs...</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {nfts?.map((nft) => (
              <div key={nft.tokenId} className="bg-gray-700 rounded-lg p-2">
                <img
                  src={nft.imageUrl}
                  alt={nft.name}
                  className="w-full h-auto rounded-md"
                />
                <p className="mt-2 text-sm text-center">{nft.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
