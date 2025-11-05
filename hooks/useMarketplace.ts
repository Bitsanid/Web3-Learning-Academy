'use client';

import { useWriteContract, useReadContract, useAccount } from 'wagmi';
import { marketplaceABI } from '@/lib/abis/Marketplace';
import { useGetNFTs } from '@coinbase/onchainkit';
import { useEffect, useState } from 'react';
import { formatEther } from 'viem';

export function useMarketplace() {
  const { address: accountAddress, isConnected } = useAccount();
  const { writeContract, isPending: isWritePending } = useWriteContract();

  const { data: listedNftsData, refetch: refetchListedNfts } = useReadContract({
    abi: marketplaceABI,
    address: process.env.NEXT_PUBLIC_MARKETPLACE_CONTRACT_ADDRESS as `0x${string}`,
    functionName: 'listings',
    // In a real app, you would need a way to get all listings, not just one
    args: [0],
  });

  const [listedNfts, setListedNfts] = useState<any[]>([]);

  useEffect(() => {
    // This is a placeholder for fetching and formatting listed NFTs
    if (listedNftsData) {
      const formattedNfts = Array.isArray(listedNftsData)
        ? listedNftsData.map(nft => ({
            ...nft,
            price: formatEther(nft.price),
          }))
        : [];
      setListedNfts(formattedNfts);
    }
  }, [listedNftsData]);

  const listItem = async (tokenId: string, price: string) => {
    writeContract({
      abi: marketplaceABI,
      address: process.env.NEXT_PUBLIC_MARKETPLACE_CONTRACT_ADDRESS as `0x${string}`,
      functionName: 'listItem',
      args: [tokenId, price],
    });
  };

  const buyItem = async (tokenId: string) => {
    writeContract({
      abi: marketplaceABI,
      address: process.env.NEXT_PUBLIC_MARKETPLACE_CONTRACT_ADDRESS as `0x${string}`,
      functionName: 'buyItem',
      args: [tokenId],
    });
  };

  const cancelListing = async (tokenId: string) => {
    writeContract({
      abi: marketplaceABI,
      address: process.env.NEXT_PUBLIC_MARKETPLACE_CONTRACT_ADDRESS as `0x${string}`,
      functionName: 'cancelListing',
      args: [tokenId],
    });
  };

  return {
    nfts: listedNfts,
    isLoading: isWritePending,
    listItem,
    buyItem,
    cancelListing,
    refetch: refetchListedNfts,
  };
}
