'use client';

import { Avatar as OnchainKitAvatar } from '@coinbase/onchainkit';

export function Avatar({ address }: { address: string }) {
  return <OnchainKitAvatar address={address as `0x${string}`} />;
}
