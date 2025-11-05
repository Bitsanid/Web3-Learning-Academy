'use client';

import { useAccount, useBalance } from 'wagmi';
import { useName, useGetNFTs } from '@coinbase/onchainkit';

export function useProfile() {
  const { address, isConnected } = useAccount();
  const { data: balance, isLoading: isBalanceLoading } = useBalance({
    address,
  });
  const { data: nfts, isLoading: isNftsLoading } = useGetNFTs({
    address: address!,
    // TODO: Add your NFT contract addresses here
    // tokenAddresses: ['0x...'],
  });
  const { data: name, isLoading: isNameLoading } = useName({ address });

  return {
    address,
    isConnected,
    balance,
    isBalanceLoading,
    nfts,
    isNftsLoading,
    name,
    isNameLoading,
  };
}
