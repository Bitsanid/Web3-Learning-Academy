export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  duration: string;
  badge: {
    name: string;
    image: string;
  };
}

export const lessons: Lesson[] = [
  {
    id: "1",
    title: "Introduction to Blockchain",
    description: "Learn the fundamentals of blockchain technology and how it works.",
    content: `
# Introduction to Blockchain

## What is Blockchain?

Blockchain is a distributed ledger technology that maintains a continuously growing list of records, called blocks, which are linked and secured using cryptography.

## Key Concepts

### 1. Decentralization
Unlike traditional databases, blockchain operates on a peer-to-peer network where no single entity has control.

### 2. Immutability
Once data is recorded on the blockchain, it becomes extremely difficult to change or tamper with.

### 3. Transparency
All transactions are visible to participants in the network, ensuring accountability.

## How Blockchain Works

1. **Transaction Initiation**: A user initiates a transaction
2. **Broadcasting**: The transaction is broadcast to all nodes in the network
3. **Validation**: Nodes validate the transaction using consensus mechanisms
4. **Block Creation**: Validated transactions are combined into a block
5. **Chain Addition**: The new block is added to the existing blockchain

## Real-World Applications

- Cryptocurrencies (Bitcoin, Ethereum)
- Supply chain management
- Digital identity verification
- Smart contracts
- Healthcare records

## Quiz Time!

What makes blockchain secure?
- Cryptography
- Decentralization
- Immutability
- All of the above ✓
    `,
    difficulty: "beginner",
    duration: "10 min",
    badge: {
      name: "Blockchain Basics",
      image: "🔗",
    },
  },
  {
    id: "2",
    title: "Understanding Cryptocurrencies",
    description: "Dive into the world of digital currencies and how they function.",
    content: `
# Understanding Cryptocurrencies

## What are Cryptocurrencies?

Cryptocurrencies are digital or virtual currencies that use cryptography for security and operate on blockchain technology.

## Bitcoin: The First Cryptocurrency

Bitcoin, created in 2009 by Satoshi Nakamoto, was the first decentralized cryptocurrency.

### Key Features of Bitcoin:
- Limited supply (21 million coins)
- Peer-to-peer transactions
- No central authority
- Transparent transaction history

## Other Major Cryptocurrencies

### Ethereum (ETH)
- Smart contract platform
- Enables decentralized applications (dApps)
- Second-largest cryptocurrency by market cap

### Stablecoins
- Cryptocurrencies pegged to stable assets like USD
- Examples: USDC, USDT, DAI

## How to Store Cryptocurrencies

### Wallets
- **Hot Wallets**: Connected to the internet (convenient but less secure)
- **Cold Wallets**: Offline storage (more secure)

### Types of Wallets:
1. Hardware wallets (Ledger, Trezor)
2. Software wallets (MetaMask, Trust Wallet)
3. Paper wallets
4. Exchange wallets

## Buying and Selling

Cryptocurrencies can be purchased on exchanges like:
- Coinbase
- Binance
- Kraken
- Uniswap (decentralized)

## Important Considerations

⚠️ **Risks**:
- Volatility
- Security threats
- Regulatory uncertainty
- Irreversible transactions

✅ **Best Practices**:
- Never share your private keys
- Use two-factor authentication
- Start with small amounts
- Do your own research (DYOR)
    `,
    difficulty: "beginner",
    duration: "15 min",
    badge: {
      name: "Crypto Explorer",
      image: "₿",
    },
  },
  {
    id: "3",
    title: "Smart Contracts 101",
    description: "Learn about self-executing contracts and their applications.",
    content: `
# Smart Contracts 101

## What are Smart Contracts?

Smart contracts are self-executing programs stored on a blockchain that automatically execute when predetermined conditions are met.

## How Smart Contracts Work

\`\`\`solidity
// Simple smart contract example
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 private value;
    
    function setValue(uint256 _value) public {
        value = _value;
    }
    
    function getValue() public view returns (uint256) {
        return value;
    }
}
\`\`\`

## Key Characteristics

1. **Autonomous**: Execute automatically without intermediaries
2. **Trustless**: Don't require trust between parties
3. **Immutable**: Cannot be changed once deployed
4. **Transparent**: Code is visible to everyone

## Popular Smart Contract Platforms

### Ethereum
- First platform to support smart contracts
- Uses Solidity programming language
- Largest ecosystem of dApps

### Other Platforms:
- **Binance Smart Chain**: Lower fees, faster transactions
- **Solana**: High throughput
- **Cardano**: Research-driven approach
- **Polkadot**: Cross-chain compatibility

## Use Cases

### DeFi (Decentralized Finance)
- Lending and borrowing
- Decentralized exchanges
- Yield farming
- Liquidity pools

### NFTs (Non-Fungible Tokens)
- Digital art
- Gaming items
- Collectibles
- Real estate

### DAOs (Decentralized Autonomous Organizations)
- Community governance
- Treasury management
- Voting mechanisms

## Advantages

✅ Speed and efficiency
✅ Cost savings
✅ Accuracy and transparency
✅ Security
✅ No intermediaries

## Limitations

⚠️ Code vulnerabilities
⚠️ Immutability can be a double-edged sword
⚠️ Scalability challenges
⚠️ Legal and regulatory uncertainty

## The Future

Smart contracts are revolutionizing:
- Financial services
- Supply chain
- Real estate
- Healthcare
- Gaming
- Identity management
    `,
    difficulty: "intermediate",
    duration: "20 min",
    badge: {
      name: "Smart Contract Developer",
      image: "📜",
    },
  },
  {
    id: "4",
    title: "Decentralized Finance (DeFi)",
    description: "Explore the world of decentralized financial services.",
    content: `
# Decentralized Finance (DeFi)

## What is DeFi?

DeFi refers to financial services built on blockchain technology that operate without traditional intermediaries like banks.

## Core DeFi Concepts

### 1. Lending and Borrowing
Platforms like Aave and Compound allow users to lend their crypto and earn interest or borrow against their holdings.

### 2. Decentralized Exchanges (DEXs)
- **Uniswap**: Automated market maker (AMM)
- **SushiSwap**: Community-driven DEX
- **Curve**: Optimized for stablecoin trading

### 3. Yield Farming
Earning rewards by providing liquidity to DeFi protocols.

### 4. Staking
Locking up tokens to support network operations and earn rewards.

## Popular DeFi Protocols

### Uniswap
- Largest decentralized exchange
- Automated liquidity pools
- No order books needed

### MakerDAO
- Creates the DAI stablecoin
- Collateralized debt positions
- Decentralized governance

### Aave
- Lending and borrowing protocol
- Flash loans
- Multiple collateral types

## Benefits of DeFi

✅ **Accessibility**: Anyone with internet can participate
✅ **Transparency**: All transactions on blockchain
✅ **Permissionless**: No KYC or approval needed
✅ **Composability**: Protocols can interact with each other
✅ **24/7 Operations**: Never closes

## Risks in DeFi

⚠️ **Smart Contract Risks**: Bugs and vulnerabilities
⚠️ **Impermanent Loss**: Losses from providing liquidity
⚠️ **Regulatory Uncertainty**: Evolving regulations
⚠️ **Scams and Rug Pulls**: Fraudulent projects
⚠️ **High Volatility**: Crypto price fluctuations

## How to Get Started with DeFi

1. **Get a Web3 Wallet**: MetaMask, Rainbow, etc.
2. **Buy Crypto**: Purchase ETH or other tokens
3. **Research Protocols**: Understand risks and rewards
4. **Start Small**: Don't invest more than you can afford to lose
5. **Diversify**: Spread risk across multiple protocols

## DeFi Metrics to Know

- **TVL** (Total Value Locked): Amount of funds in a protocol
- **APY** (Annual Percentage Yield): Potential returns
- **Liquidity**: How easily assets can be bought/sold
- **Gas Fees**: Transaction costs

## The Future of Finance

DeFi is transforming traditional finance by:
- Reducing costs
- Increasing access
- Improving transparency
- Enabling innovation
- Empowering users
    `,
    difficulty: "intermediate",
    duration: "25 min",
    badge: {
      name: "DeFi Master",
      image: "💰",
    },
  },
  {
    id: "5",
    title: "NFTs and Digital Ownership",
    description: "Understanding non-fungible tokens and their impact.",
    content: `
# NFTs and Digital Ownership

## What are NFTs?

NFTs (Non-Fungible Tokens) are unique digital assets verified on the blockchain. Unlike cryptocurrencies, each NFT is one-of-a-kind and cannot be exchanged one-for-one.

## How NFTs Work

NFTs are based on token standards:
- **ERC-721**: Ethereum standard for unique tokens
- **ERC-1155**: Multi-token standard
- **SPL**: Solana token standard

## NFT Use Cases

### Digital Art
- Artists sell work directly to collectors
- Royalties automatically paid on resales
- Proof of authenticity

### Gaming
- In-game items and characters
- Play-to-earn models
- Interoperable assets

### Collectibles
- Digital trading cards
- Virtual pets
- Limited edition items

### Real-World Assets
- Real estate deeds
- Event tickets
- Certificates and credentials

## Creating NFTs (Minting)

Steps to mint an NFT:
1. Create your digital asset
2. Choose a blockchain
3. Set up a wallet
4. Select an NFT marketplace
5. Upload and mint
6. List for sale (optional)

## Popular NFT Marketplaces

- **OpenSea**: Largest NFT marketplace
- **Rarible**: Community-owned platform
- **Foundation**: Curated art platform
- **SuperRare**: High-end digital art
- **Magic Eden**: Solana NFTs

## NFT Metadata

\`\`\`json
{
  "name": "Web3 Learning Badge #1",
  "description": "Awarded for completing Blockchain 101",
  "image": "ipfs://QmX...",
  "attributes": [
    {
      "trait_type": "Course",
      "value": "Blockchain Fundamentals"
    },
    {
      "trait_type": "Level",
      "value": "Beginner"
    }
  ]
}
\`\`\`

## Benefits of NFTs

✅ Proof of ownership
✅ Creator royalties
✅ Programmable scarcity
✅ Interoperability
✅ New revenue models

## Challenges

⚠️ Environmental concerns (high energy use)
⚠️ Copyright issues
⚠️ Market volatility
⚠️ Accessibility barriers
⚠️ Storage and preservation

## The Future of NFTs

Beyond art and collectibles:
- Digital identity
- Academic credentials
- Medical records
- Supply chain tracking
- Membership and access tokens
- Virtual real estate in the metaverse

## Important Considerations

- **Do your research** before buying
- **Verify authenticity** of creators
- **Understand gas fees** on different chains
- **Secure your wallet** properly
- **Be aware of scams** and frauds
    `,
    difficulty: "intermediate",
    duration: "20 min",
    badge: {
      name: "NFT Collector",
      image: "🎨",
    },
  },
];
