# Deployment Guide - Web3 Learning Academy

## Smart Contract Deployment

### Prerequisites
- MetaMask or another Web3 wallet
- Some ETH on Base Sepolia testnet (for testing) or Base mainnet
- Foundry or Hardhat (for deployment)

### Option 1: Deploy with Remix (Recommended for Beginners)

1. **Get Test ETH**
   - Visit [Base Sepolia Faucet](https://faucet.quicknode.com/base/sepolia)
   - Get free test ETH for deployment

2. **Prepare the Contract**
   - Open [Remix IDE](https://remix.ethereum.org/)
   - Create a new file: `Web3BadgeNFT.sol`
   - Copy the contract code from `/contracts/Web3BadgeNFT.sol`

3. **Install OpenZeppelin**
   - In Remix, go to File Explorer
   - Install OpenZeppelin contracts:
     - Click on the "Solidity Compiler" tab
     - In the top right, click "Plugin Manager"
     - Enable "OpenZeppelin Contracts"

4. **Compile**
   - Select Solidity Compiler (version 0.8.20+)
   - Click "Compile Web3BadgeNFT.sol"

5. **Deploy**
   - Go to "Deploy & Run Transactions" tab
   - Set Environment to "Injected Provider - MetaMask"
   - Connect your wallet (make sure you're on Base Sepolia testnet)
   - Click "Deploy"
   - Confirm the transaction in MetaMask

6. **Copy Contract Address**
   - After deployment, copy the contract address
   - Update `/lib/contract.ts`:
     ```typescript
     export const NFT_CONTRACT_ADDRESS = '0xYourContractAddressHere' as `0x${string}`;
     ```

### Option 2: Deploy with Foundry

1. **Install Foundry**
   ```bash
   curl -L https://foundry.paradigm.xyz | bash
   foundryup
   ```

2. **Initialize Foundry Project**
   ```bash
   forge init contract-deploy
   cd contract-deploy
   ```

3. **Install Dependencies**
   ```bash
   forge install OpenZeppelin/openzeppelin-contracts
   ```

4. **Copy Contract**
   - Copy `contracts/Web3BadgeNFT.sol` to `src/Web3BadgeNFT.sol`

5. **Deploy to Base Sepolia**
   ```bash
   forge create src/Web3BadgeNFT.sol:Web3BadgeNFT \
     --rpc-url https://sepolia.base.org \
     --private-key YOUR_PRIVATE_KEY
   ```

6. **Verify Contract** (Optional)
   ```bash
   forge verify-contract \
     CONTRACT_ADDRESS \
     src/Web3BadgeNFT.sol:Web3BadgeNFT \
     --chain-id 84532 \
     --watch
   ```

### Option 3: Deploy with Hardhat

1. **Install Hardhat**
   ```bash
   npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox
   npx hardhat init
   ```

2. **Configure Hardhat**
   Create `hardhat.config.js`:
   ```javascript
   require("@nomicfoundation/hardhat-toolbox");

   module.exports = {
     solidity: "0.8.20",
     networks: {
       baseSepolia: {
         url: "https://sepolia.base.org",
         accounts: [process.env.PRIVATE_KEY]
       }
     }
   };
   ```

3. **Create Deployment Script**
   Create `scripts/deploy.js`:
   ```javascript
   async function main() {
     const Web3BadgeNFT = await ethers.getContractFactory("Web3BadgeNFT");
     const nft = await Web3BadgeNFT.deploy();
     await nft.waitForDeployment();
     console.log("Web3BadgeNFT deployed to:", await nft.getAddress());
   }

   main().catch((error) => {
     console.error(error);
     process.exitCode = 1;
   });
   ```

4. **Deploy**
   ```bash
   npx hardhat run scripts/deploy.js --network baseSepolia
   ```

## Update Application Configuration

After deploying the contract, update these files:

### 1. Update Contract Address
File: `/lib/contract.ts`
```typescript
export const NFT_CONTRACT_ADDRESS = '0xYourDeployedContractAddress' as `0x${string}`;
```

### 2. Set WalletConnect Project ID
File: `/lib/wagmi.ts`
```typescript
projectId: 'your_walletconnect_project_id_here',
```

Get your Project ID from [WalletConnect Cloud](https://cloud.walletconnect.com/)

### 3. Environment Variables
Create `.env.local`:
```bash
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_project_id_here
```

## Testing

1. **Restart the Development Server**
   ```bash
   npm run dev
   ```

2. **Connect Wallet**
   - Click "Connect Wallet" button
   - Select your wallet (MetaMask, Coinbase Wallet, etc.)
   - Approve the connection

3. **Mint a Badge**
   - Complete a lesson
   - Click "Complete Lesson & Mint NFT Badge"
   - Approve the transaction in your wallet
   - Wait for confirmation

4. **View on Block Explorer**
   - Base Sepolia: https://sepolia.basescan.org/address/YOUR_CONTRACT_ADDRESS
   - Base Mainnet: https://basescan.org/address/YOUR_CONTRACT_ADDRESS

## Network Configuration

### Base Sepolia Testnet
- Chain ID: 84532
- RPC URL: https://sepolia.base.org
- Block Explorer: https://sepolia.basescan.org

### Base Mainnet
- Chain ID: 8453
- RPC URL: https://mainnet.base.org
- Block Explorer: https://basescan.org

## Troubleshooting

### Contract Not Deployed Error
**Solution**: Make sure you've deployed the contract and updated `NFT_CONTRACT_ADDRESS` in `/lib/contract.ts`

### Wrong Network Error
**Solution**: Switch your wallet to Base Sepolia testnet

### Transaction Failed
**Possible Causes**:
- Insufficient gas
- Already minted badge for this lesson
- Contract not approved

### Wallet Not Connecting
**Solution**:
- Check that WalletConnect Project ID is set
- Try refreshing the page
- Clear browser cache

## Production Deployment

### For Base Mainnet:

1. Deploy contract to Base mainnet (Chain ID: 8453)
2. Update contract address in `/lib/contract.ts`
3. Update chain configuration in `/lib/wagmi.ts` to use `base` instead of `baseSepolia`
4. Test thoroughly on testnet first
5. Ensure you have sufficient ETH for gas fees

### Security Considerations:
- Never commit private keys to version control
- Use environment variables for sensitive data
- Test all functionality on testnet before mainnet
- Consider using a multisig wallet as contract owner
- Audit your contract before mainnet deployment
