'use client';

import { Address as OnchainKitAddress } from '@coinbase/onchainkit';

export function Address({ address }: { address: string }) {
  return <OnchainKitAddress address={address as `0x${string}`} />;
}
