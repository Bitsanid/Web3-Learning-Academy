// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title Web3BadgeNFT
 * @dev NFT contract for Web3 Learning Academy badges
 * Each badge represents completion of a specific lesson
 */
contract Web3BadgeNFT is ERC721, ERC721URIStorage, Ownable {
    uint256 private _tokenIdCounter;
    
    // Mapping from lesson ID to badge metadata
    mapping(uint256 => string) public lessonBadgeURIs;
    
    // Mapping from user address to lesson ID to token ID
    mapping(address => mapping(uint256 => uint256)) public userLessonBadges;
    
    // Track if user has completed a lesson
    mapping(address => mapping(uint256 => bool)) public hasCompletedLesson;
    
    event BadgeMinted(address indexed user, uint256 indexed lessonId, uint256 tokenId);
    
    constructor() ERC721("Web3 Learning Badge", "W3BADGE") Ownable(msg.sender) {
        _tokenIdCounter = 0;
        
        // Initialize badge URIs for each lesson
        lessonBadgeURIs[1] = "ipfs://QmBlockchainBasics";
        lessonBadgeURIs[2] = "ipfs://QmCryptoExplorer";
        lessonBadgeURIs[3] = "ipfs://QmSmartContractDev";
        lessonBadgeURIs[4] = "ipfs://QmDeFiMaster";
        lessonBadgeURIs[5] = "ipfs://QmNFTCollector";
    }
    
    /**
     * @dev Mint a badge for completing a lesson
     * @param lessonId The ID of the completed lesson (1-5)
     */
    function mintBadge(uint256 lessonId) public returns (uint256) {
        require(lessonId >= 1 && lessonId <= 5, "Invalid lesson ID");
        require(!hasCompletedLesson[msg.sender][lessonId], "Badge already minted for this lesson");
        
        uint256 tokenId = _tokenIdCounter;
        _tokenIdCounter++;
        
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, lessonBadgeURIs[lessonId]);
        
        userLessonBadges[msg.sender][lessonId] = tokenId;
        hasCompletedLesson[msg.sender][lessonId] = true;
        
        emit BadgeMinted(msg.sender, lessonId, tokenId);
        
        return tokenId;
    }
    
    /**
     * @dev Update badge URI for a lesson (owner only)
     * @param lessonId The lesson ID
     * @param uri The new metadata URI
     */
    function updateLessonBadgeURI(uint256 lessonId, string memory uri) public onlyOwner {
        require(lessonId >= 1 && lessonId <= 5, "Invalid lesson ID");
        lessonBadgeURIs[lessonId] = uri;
    }
    
    /**
     * @dev Check if user has completed a specific lesson
     * @param user The user address
     * @param lessonId The lesson ID
     * @return bool True if user has completed the lesson
     */
    function hasUserCompletedLesson(address user, uint256 lessonId) public view returns (bool) {
        return hasCompletedLesson[user][lessonId];
    }
    
    /**
     * @dev Get token ID for a user's lesson badge
     * @param user The user address
     * @param lessonId The lesson ID
     * @return uint256 The token ID (returns 0 if not minted)
     */
    function getUserLessonBadge(address user, uint256 lessonId) public view returns (uint256) {
        return userLessonBadges[user][lessonId];
    }
    
    /**
     * @dev Get all badges owned by a user
     * @param user The user address
     * @return uint256[] Array of lesson IDs for which user has badges
     */
    function getUserBadges(address user) public view returns (uint256[] memory) {
        uint256 badgeCount = 0;
        
        // Count badges
        for (uint256 i = 1; i <= 5; i++) {
            if (hasCompletedLesson[user][i]) {
                badgeCount++;
            }
        }
        
        // Create array and populate
        uint256[] memory badges = new uint256[](badgeCount);
        uint256 index = 0;
        
        for (uint256 i = 1; i <= 5; i++) {
            if (hasCompletedLesson[user][i]) {
                badges[index] = i;
                index++;
            }
        }
        
        return badges;
    }
    
    // The following functions are overrides required by Solidity
    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
