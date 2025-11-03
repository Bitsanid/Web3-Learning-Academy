# Web3 Learning Academy

A blockchain and Web3 learning platform built with Next.js, integrated with Farcaster Mini Apps, and featuring NFT badge rewards.

## Project Overview

### Purpose
An interactive educational platform where users learn about blockchain, cryptocurrencies, smart contracts, DeFi, and NFTs while earning collectible NFT badges for completing lessons.

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Outstatic (for content management)
- **Integration**: Farcaster Mini App SDK
- **NFT System**: Mock implementation (ready for on-chain integration)

## Features

### Core Features
1. **Interactive Lessons**: 5 comprehensive lessons covering blockchain fundamentals through NFTs
2. **Progress Tracking**: Dashboard showing completion status and overall progress
3. **NFT Badge Rewards**: Users mint NFT badges upon lesson completion
4. **Farcaster Integration**: 
   - Sign-In with Farcaster authentication
   - Share badges on Farcaster
   - Mini App Embed support
5. **Responsive Design**: Optimized for both mobile and web (424x695px for Mini App view)

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
- **SDK Integration**: Farcaster Mini App SDK initialized on app load
- **Local Storage**: Progress and badges stored client-side (MVP)
- **Badge System**: Mock NFT minting with metadata structure

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
- **2025-11-03**: Initial project setup with Next.js 15, Farcaster SDK integration, lesson system, badge minting, and responsive UI

## User Preferences
- Clean, modern design with gradient backgrounds
- Mobile-first responsive approach
- Simple, intuitive navigation
- Visual feedback for all interactions

## Next Steps (Future Enhancements)
1. On-chain NFT minting on Base or Ethereum
2. Smart contract integration for badge management
3. Wallet connection (MetaMask, Rainbow, etc.)
4. Outstatic CMS integration for dynamic content
5. Lesson quizzes and assessments
6. Multi-language support
7. Social features and leaderboards
8. Advanced learning paths with prerequisites
