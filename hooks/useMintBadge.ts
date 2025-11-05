'use client';

import { useWriteContract, useAccount } from 'wagmi';
import { nftBadgeABI } from '@/lib/abis/NFTBadge';

export function useMintBadge() {
  const { writeContract, isPending } = useWriteContract();
  const { address: accountAddress, isConnected } = useAccount();

  const mintBadge = async (moduleId: string) => {
    if (!isConnected) {
      console.error('User is not connected');
      return;
    }
    // In a real application, you would have a mapping of module IDs to token URIs
    const tokenURI = `https://web3-learning-platform.com/api/nft-metadata/${moduleId}`;

    writeContract({
      abi: nftBadgeABI,
      address: process.env.NEXT_PUBLIC_NFT_BADGE_CONTRACT_ADDRESS as `0x${string}`,
      functionName: 'safeMint',
      args: [accountAddress, tokenURI],
    });
  };

  return {
    mintBadge,
    isLoading: isPending,
  };
}
