# Web3 Learning Academy

A blockchain and Web3 learning platform built with Next.js, integrated with Farcaster Mini Apps, and featuring NFT badge rewards.

## Project Overview

### Purpose
An interactive educational platform where users learn about blockchain, cryptocurrencies, smart contracts, DeFi, and NFTs while earning **real NFT badges** minted on **Base blockchain** for completing lessons.

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Outstatic (for content management)
- **Farcaster**: @farcaster/miniapp-sdk
- **Blockchain**: wagmi, viem, @rainbow-me/rainbowkit, @coinbase/onchainkit
- **Network**: Base (Coinbase Layer 2)
- **Smart Contract**: ERC-721 NFT on Base
- **NFT System**: On-chain minting with smart contract integration

## Features

### Core Features
1. **Interactive Lessons**: 5 comprehensive lessons covering blockchain fundamentals through NFTs
2. **Progress Tracking**: Dashboard showing completion status and overall progress
3. **Real NFT Badge Rewards**: Users mint ERC-721 NFTs on Base blockchain upon lesson completion
4. **Wallet Connection**: RainbowKit integration supporting MetaMask, Coinbase Wallet, WalletConnect, and more
5. **On-Chain Verification**: All badges verifiable on Base blockchain explorer
6. **Farcaster Integration**: 
   - Sign-In with Farcaster authentication
   - Share badges on Farcaster
   - Mini App Embed support
7. **Responsive Design**: Optimized for both mobile and web (424x695px for Mini App view)
8. **Dual Mode**: Works with or without wallet connection (localStorage fallback)

### Lesson Topics
1. Introduction to Blockchain
2. Understanding Cryptocurrencies
3. Smart Contracts 101
4. Decentralized Finance (DeFi)
5. NFTs and Digital Ownership

## Architecture

### File Structure
```
app/
├── layout.tsx              # Root layout with metadata
├── page.tsx                # Home page with Farcaster SDK initialization
├── globals.css             # Global styles
├── lessons/
│   ├── page.tsx            # Lessons list
│   └── [id]/page.tsx       # Individual lesson viewer
├── dashboard/page.tsx      # User progress dashboard
├── badges/page.tsx         # NFT badge collection
└── api/
    └── miniapp/
        └── manifest/route.ts # Mini App manifest API

lib/
└── lessons.ts              # Lesson content and data

public/
└── .well-known/
    └── farcaster.json      # Farcaster Mini App manifest
```

### Key Components
- **Blockchain Integration**: Full Web3 stack with wagmi/viem
- **Wallet Connection**: RainbowKit for seamless wallet connection
- **Smart Contract**: Custom ERC-721 NFT contract for badges
- **SDK Integration**: Farcaster Mini App SDK initialized on app load
- **Dual Storage**: On-chain for connected wallets, localStorage for offline mode
- **Badge System**: Real NFT minting on Base blockchain

## Configuration

### Environment
- Port: 5000 (required for Farcaster Mini App)
- Node.js: 22.17.0
- Package Manager: npm

### Farcaster Mini App
- Manifest located at: `/.well-known/farcaster.json`
- Splash screen configured with purple gradient
- Embed metadata included for social sharing

## Development

### Running Locally
```bash
npm run dev
```
Runs on http://localhost:5000

### Building for Production
```bash
npm run build
npm start
```

## Recent Changes

### 2025-11-03 (Latest)
- **Blockchain Integration**: Added wagmi, viem, RainbowKit, and OnchainKit
- **Smart Contract**: Created ERC-721 NFT contract (`Web3BadgeNFT.sol`) with OpenZeppelin
- **Wallet Connection**: Implemented RainbowKit for multi-wallet support
- **Real NFT Minting**: Integrated on-chain minting on Base network
- **Contract Hooks**: Created `useMintBadge` and `useUserBadges` hooks
- **UI Updates**: Added wallet connection button, transaction status, and Base integration
- **Documentation**: Added DEPLOYMENT.md with contract deployment guide

### 2025-11-03 (Initial)
- Initial project setup with Next.js 15
- Farcaster SDK integration
- Lesson system with 5 comprehensive topics
- Mock badge minting with localStorage
- Responsive UI with gradient design

## User Preferences
- Clean, modern design with gradient backgrounds
- Mobile-first responsive approach
- Simple, intuitive navigation
- Visual feedback for all interactions
- Real blockchain integration over mocks
- On-chain verification for achievements

## Smart Contract Details

### Contract Name
**Web3BadgeNFT** - ERC-721 NFT contract

### Features
- Mints unique NFT badge for each completed lesson (1-5)
- Prevents duplicate badges per user per lesson
- Stores lesson metadata URIs (IPFS-ready)
- Verifies lesson completion on-chain
- Owner can update badge URIs

### Deployment Requirements
1. Deploy to Base Sepolia (testnet) or Base (mainnet)
2. Update contract address in `/lib/contract.ts`
3. Get WalletConnect Project ID for RainbowKit
4. Test minting functionality

See `DEPLOYMENT.md` for complete deployment instructions.

## Configuration Requirements

### Required Before Full Functionality
1. **WalletConnect Project ID**: Update in `/lib/wagmi.ts`
2. **Contract Deployment**: Deploy smart contract and update address
3. **Environment Variables**: Create `.env.local` with NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID

### Optional Enhancements
1. Outstatic CMS integration for dynamic content management
2. Lesson quizzes and assessments before badge eligibility
3. Multi-language support
4. Social features and leaderboards
5. Advanced learning paths with prerequisites
6. Integration with other Base protocols (DeFi lessons, etc.)

## Next Steps (Future Enhancements)
1. Deploy smart contract to Base mainnet for production use
2. Integrate Outstatic CMS for easy content management
3. Add lesson quizzes/assessments before minting
4. Implement social features (leaderboards, sharing)
5. Multi-language support
6. Advanced learning paths with prerequisite system
7. Integration with Base ecosystem projects
8. Mobile app version (React Native)
