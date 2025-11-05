// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./interfaces/INFTBadge.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Staking is Ownable {
    using SafeMath for uint256;

    INFTBadge public nftBadge;

    struct Stake {
        uint256 tokenId;
        uint256 startTime;
        address owner;
    }

    mapping(uint256 => Stake) public stakes;
    uint256[] public stakedTokenIds;

    uint256 public rewardRate = 1; // 1 point per second

    constructor(address _nftBadgeAddress) {
        nftBadge = INFTBadge(_nftBadgeAddress);
    }

    function stake(uint256 _tokenId) external {
        require(nftBadge.ownerOf(_tokenId) == msg.sender, "You are not the owner of this NFT");
        require(stakes[_tokenId].tokenId == 0, "This NFT is already staked");

        nftBadge.safeTransferFrom(msg.sender, address(this), _tokenId);

        stakes[_tokenId] = Stake({
            tokenId: _tokenId,
            startTime: block.timestamp,
            owner: msg.sender
        });

        stakedTokenIds.push(_tokenId);
    }

    function unstake(uint256 _tokenId) external {
        require(stakes[_tokenId].owner == msg.sender, "You are not the owner of this stake");

        uint256 points = calculatePoints(_tokenId);
        // Here you would typically transfer the points to the user
        // For now, we will just emit an event
        emit PointsCalculated(msg.sender, _tokenId, points);

        nftBadge.safeTransferFrom(address(this), msg.sender, _tokenId);

        // Remove from stakedTokenIds array
        for (uint i = 0; i < stakedTokenIds.length; i++) {
            if (stakedTokenIds[i] == _tokenId) {
                stakedTokenIds[i] = stakedTokenIds[stakedTokenIds.length - 1];
                stakedTokenIds.pop();
                break;
            }
        }

        delete stakes[_tokenId];
    }

    function calculatePoints(uint256 _tokenId) public view returns (uint256) {
        return (block.timestamp.sub(stakes[_tokenId].startTime)).mul(rewardRate);
    }

    function getStakedTokenIds() external view returns (uint256[] memory) {
        return stakedTokenIds;
    }

    event PointsCalculated(address user, uint256 tokenId, uint256 points);
}
