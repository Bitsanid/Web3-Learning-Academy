# 🎓 Web3 Learning Academy

An interactive blockchain and Web3 learning platform built with Next.js and Farcaster Mini Apps. Learn, earn, and collect **real NFT badges** minted on **Base blockchain**!

## ✨ Features

### Learning Platform
- **📚 Comprehensive Lessons**: 5 in-depth lessons covering blockchain fundamentals, cryptocurrencies, smart contracts, DeFi, and NFTs
- **📊 Progress Tracking**: Dashboard showing completion status and overall progress
- **🎓 Interactive Content**: Detailed explanations with examples and real-world applications

### Blockchain Integration
- **🔗 Wallet Connection**: Connect via RainbowKit (MetaMask, Coinbase Wallet, WalletConnect, etc.)
- **⛓️ Base Network**: Built on Base, Coinbase's Layer 2 solution
- **🏆 Real NFT Badges**: Earn ERC-721 NFTs for completing lessons
- **📝 Smart Contract**: Custom NFT contract for verifiable achievements
- **💎 On-Chain Verification**: All badges are verifiable on-chain

### Farcaster Integration
- **🎭 Mini App**: Fully integrated Farcaster Mini App
- **📢 Social Sharing**: Share achievements on Farcaster
- **🔐 Sign-In with Farcaster**: Native authentication support

### User Experience
- **📱 Responsive Design**: Optimized for mobile and desktop
- **🌈 Beautiful UI**: Gradient backgrounds and smooth animations
- **⚡ Real-Time Updates**: Instant feedback on NFT minting
- **🔄 Dual Mode**: Works with or without wallet connection

## 🚀 Quick Start

### Prerequisites
- Node.js 22.11.0 or higher
- npm or yarn
- A Web3 wallet (MetaMask, Coinbase Wallet, etc.)

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

The app will be available at http://localhost:5000

## 🔧 Setup & Configuration

### 1. Get WalletConnect Project ID

1. Visit [WalletConnect Cloud](https://cloud.walletconnect.com/)
2. Create a new project
3. Copy your Project ID
4. Update in `/lib/wagmi.ts`:

```typescript
projectId: 'YOUR_PROJECT_ID_HERE',
```

### 2. Deploy Smart Contract

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions on deploying the NFT smart contract to Base.

**Quick Steps**:
1. Deploy `contracts/Web3BadgeNFT.sol` to Base Sepolia (testnet) or Base (mainnet)
2. Update contract address in `/lib/contract.ts`
3. Test minting functionality

### 3. Environment Variables

Create `.env.local`:
```bash
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_project_id_here
```

## 📖 Lessons

### 1. Introduction to Blockchain
Learn the fundamentals of blockchain technology, decentralization, and immutability.
**Badge**: Blockchain Basics 🔗

### 2. Understanding Cryptocurrencies
Explore digital currencies, Bitcoin, Ethereum, and how crypto wallets work.
**Badge**: Crypto Explorer ₿

### 3. Smart Contracts 101
Dive into self-executing contracts and their revolutionary applications.
**Badge**: Smart Contract Developer 📜

### 4. Decentralized Finance (DeFi)
Discover lending, borrowing, DEXs, yield farming, and the future of finance.
**Badge**: DeFi Master 💰

### 5. NFTs and Digital Ownership
Understanding non-fungible tokens and their impact on digital ownership.
**Badge**: NFT Collector 🎨

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **@farcaster/miniapp-sdk** - Farcaster integration

### Blockchain
- **Wagmi** - React Hooks for Ethereum
- **Viem** - TypeScript interface for Ethereum
- **@rainbow-me/rainbowkit** - Wallet connection UI
- **@coinbase/onchainkit** - Base utilities
- **Solidity** - Smart contract language

### Infrastructure
- **Base** - Layer 2 blockchain (Ethereum)
- **ERC-721** - NFT token standard
- **OpenZeppelin** - Smart contract library

## 📁 Project Structure

```
├── app/                      # Next.js app directory
│   ├── page.tsx             # Home page with wallet connection
│   ├── layout.tsx           # Root layout with providers
│   ├── lessons/             # Lesson pages
│   │   ├── page.tsx         # Lessons list
│   │   └── [id]/page.tsx    # Individual lesson with minting
│   ├── dashboard/page.tsx   # Progress dashboard
│   └── badges/page.tsx      # NFT badge collection
├── components/
│   ├── Providers.tsx        # Wagmi & RainbowKit providers
│   └── ConnectWallet.tsx    # Wallet connection button
├── hooks/
│   ├── useMintBadge.ts      # NFT minting hook
│   └── useUserBadges.ts     # User badges query hooks
├── lib/
│   ├── wagmi.ts             # Wagmi configuration
│   ├── contract.ts          # Contract ABI & address
│   └── lessons.ts           # Lesson content data
├── contracts/
│   └── Web3BadgeNFT.sol     # NFT smart contract
└── public/
    └── .well-known/
        └── farcaster.json   # Farcaster manifest
```

## 🎯 How It Works

### For Users

1. **Connect Wallet** - Link your Web3 wallet via RainbowKit
2. **Browse Lessons** - Explore 5 comprehensive Web3 topics
3. **Learn** - Read detailed content with examples
4. **Mint Badge** - Complete lesson and mint NFT badge on Base
5. **Track Progress** - View your achievements in the dashboard
6. **Share** - Share badges on Farcaster

### Smart Contract Flow

1. User completes a lesson
2. Clicks "Complete Lesson & Mint NFT Badge"
3. Transaction sent to `Web3BadgeNFT` contract on Base
4. Contract mints ERC-721 NFT to user's wallet
5. Badge ownership recorded on-chain
6. User can view badge in collection and on block explorer

## 🔐 Security

- **Non-Custodial**: Users maintain full control of their wallets
- **On-Chain Verification**: All badges are verifiable on Base blockchain
- **No Private Keys**: Application never requests or stores private keys
- **OpenZeppelin**: Using audited, industry-standard contracts

## 🌐 Networks

### Testnet (Base Sepolia)
- Chain ID: 84532
- RPC: https://sepolia.base.org
- Explorer: https://sepolia.basescan.org
- Faucet: [Base Sepolia Faucet](https://faucet.quicknode.com/base/sepolia)

### Mainnet (Base)
- Chain ID: 8453
- RPC: https://mainnet.base.org
- Explorer: https://basescan.org

## 🚢 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete deployment instructions including:
- Smart contract deployment with Remix, Foundry, or Hardhat
- Configuration steps
- Network setup
- Testing procedures

## 📝 License

MIT

## 🤝 Contributing

Contributions are welcome! This is an educational platform designed to help people learn about Web3 technologies.

### Development Guidelines
- Follow existing code style
- Test on Base Sepolia before mainnet
- Update documentation for new features
- Ensure lessons are accurate and educational

## 🔗 Resources

- [Base Documentation](https://docs.base.org/)
- [OnchainKit](https://onchainkit.xyz/)
- [RainbowKit](https://www.rainbowkit.com/)
- [Wagmi](https://wagmi.sh/)
- [Farcaster Mini Apps](https://miniapps.farcaster.xyz/)
- [OpenZeppelin Contracts](https://docs.openzeppelin.com/contracts/)

## 📧 Support

For questions or issues:
- Check [DEPLOYMENT.md](./DEPLOYMENT.md) for setup help
- Review smart contract code in `/contracts`
- Test on Base Sepolia testnet first

---

Built with ❤️ for the Web3 community | Powered by Base 🔵
