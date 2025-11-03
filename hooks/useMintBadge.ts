import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { NFT_CONTRACT_ABI, NFT_CONTRACT_ADDRESS } from '@/lib/contract';

export function useMintBadge() {
  const { data: hash, writeContract, isPending, error } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  const mintBadge = async (lessonId: number) => {
    if (NFT_CONTRACT_ADDRESS === '0x0000000000000000000000000000000000000000') {
      throw new Error('Contract not deployed yet. Please deploy the contract first.');
    }

    writeContract({
      address: NFT_CONTRACT_ADDRESS,
      abi: NFT_CONTRACT_ABI,
      functionName: 'mintBadge',
      args: [BigInt(lessonId)],
    });
  };

  return {
    mintBadge,
    hash,
    isPending,
    isConfirming,
    isConfirmed,
    error,
  };
}
