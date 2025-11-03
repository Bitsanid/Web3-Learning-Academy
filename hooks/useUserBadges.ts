import { useReadContract, useAccount } from 'wagmi';
import { NFT_CONTRACT_ABI, NFT_CONTRACT_ADDRESS } from '@/lib/contract';

export function useUserBadges() {
  const { address } = useAccount();

  const { data: badges, isLoading, refetch } = useReadContract({
    address: NFT_CONTRACT_ADDRESS,
    abi: NFT_CONTRACT_ABI,
    functionName: 'getUserBadges',
    args: address ? [address] : undefined,
  });

  return {
    badges: badges as bigint[] | undefined,
    isLoading,
    refetch,
  };
}

export function useHasCompletedLesson(lessonId: number) {
  const { address } = useAccount();

  const { data: hasCompleted, isLoading } = useReadContract({
    address: NFT_CONTRACT_ADDRESS,
    abi: NFT_CONTRACT_ABI,
    functionName: 'hasUserCompletedLesson',
    args: address && lessonId ? [address, BigInt(lessonId)] : undefined,
  });

  return {
    hasCompleted: hasCompleted as boolean | undefined,
    isLoading,
  };
}
