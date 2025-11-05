import { http, createConfig } from 'wagmi';
import { base } from 'wagmi/chains';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  injectedWallet,
  metaMaskWallet,
  rainbowWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';

const appName = 'Web3 Learning Platform';
const appDescription = 'A platform to learn about Web3 and earn NFT badges.';
const appUrl = 'https://web3-learning-platform.com'; // TODO: Replace with your app's URL
const appIcon = 'https://web3-learning-platform.com/icon.png'; // TODO: Replace with your app's icon

const connectors = connectorsForWallets(
  [
    {
      groupName: 'Suggested',
      wallets: [injectedWallet, rainbowWallet, metaMaskWallet],
    },
  ],
  {
    appName,
    projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
  }
);

export const config = createConfig({
  chains: [base],
  connectors,
  ssr: true,
  transports: {
    [base.id]: http(),
  },
});
