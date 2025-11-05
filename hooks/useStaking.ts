'use client';

import { useWriteContract, useReadContract, useAccount } from 'wagmi';
import { stakingABI } from '@/lib/abis/Staking';
import { nftBadgeABI } from '@/lib/abis/NFTBadge';
import { useGetNFTs } from '@coinbase/onchainkit';
import { useEffect, useState } from 'react';

export function useStaking() {
  const { address: accountAddress, isConnected } = useAccount();
  const { writeContract, isPending: isWritePending } = useWriteContract();

  const { data: stakedTokenIds, refetch: refetchStakedTokenIds } = useReadContract({
    abi: stakingABI,
    address: process.env.NEXT_PUBLIC_STAKING_CONTRACT_ADDRESS as `0x${string}`,
    functionName: 'getStakedTokenIds',
  });

  const { data: allNfts, isLoading: isNftsLoading } = useGetNFTs({
    address: accountAddress!,
    tokenAddresses: [process.env.NEXT_PUBLIC_NFT_BADGE_CONTRACT_ADDRESS as `0x${string}`],
  });

  const [stakedNfts, setStakedNfts] = useState<any[]>([]);
  const [unstakedNfts, setUnstakedNfts] = useState<any[]>([]);
  const [totalPoints, setTotalPoints] = useState(0);

  useEffect(() => {
    if (allNfts && stakedTokenIds) {
      const stakedSet = new Set((stakedTokenIds as any[]).map(id => id.toString()));
      setStakedNfts(allNfts.filter(nft => stakedSet.has(nft.tokenId)));
      setUnstakedNfts(allNfts.filter(nft => !stakedSet.has(nft.tokenId)));
    }
  }, [allNfts, stakedTokenIds]);

  const stakeNft = async (tokenId: string) => {
    writeContract({
      abi: stakingABI,
      address: process.env.NEXT_PUBLIC_STAKING_CONTRACT_ADDRESS as `0x${string}`,
      functionName: 'stake',
      args: [tokenId],
    });
  };

  const unstakeNft = async (tokenId: string) => {
    writeContract({
      abi: stakingABI,
      address: process.env.NEXT_PUBLIC_STAKING_CONTRACT_ADDRESS as `0x${string}`,
      functionName: 'unstake',
      args: [tokenId],
    });
  };

  // TODO: Implement logic to calculate and fetch total points
  // This will likely require reading events from the Staking contract

  return {
    stakedNfts,
    unstakedNfts,
    totalPoints,
    stakeNft,
    unstakeNft,
    isLoading: isWritePending || isNftsLoading,
    refetch: refetchStakedTokenIds,
  };
}
