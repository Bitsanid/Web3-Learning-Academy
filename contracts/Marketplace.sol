// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./interfaces/INFTBadge.sol";
import "./interfaces/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Marketplace is Ownable {
    INFTBadge public nftBadge;
    IERC20 public paymentToken;

    struct Listing {
        uint256 tokenId;
        uint256 price;
        address seller;
    }

    mapping(uint256 => Listing) public listings;

    event ItemListed(uint256 tokenId, uint256 price, address seller);
    event ItemSold(uint256 tokenId, address buyer);

    constructor(address _nftBadgeAddress, address _paymentTokenAddress) {
        nftBadge = INFTBadge(_nftBadgeAddress);
        paymentToken = IERC20(_paymentTokenAddress);
    }

    function listItem(uint256 _tokenId, uint256 _price) external {
        require(nftBadge.ownerOf(_tokenId) == msg.sender, "You are not the owner of this NFT");
        require(_price > 0, "Price must be greater than 0");

        nftBadge.safeTransferFrom(msg.sender, address(this), _tokenId);

        listings[_tokenId] = Listing({
            tokenId: _tokenId,
            price: _price,
            seller: msg.sender
        });

        emit ItemListed(_tokenId, _price, msg.sender);
    }

    function buyItem(uint256 _tokenId) external {
        Listing storage listing = listings[_tokenId];
        require(listing.price > 0, "This item is not for sale");

        paymentToken.transferFrom(msg.sender, listing.seller, listing.price);
        nftBadge.safeTransferFrom(address(this), msg.sender, _tokenId);

        delete listings[_tokenId];

        emit ItemSold(_tokenId, msg.sender);
    }

    function cancelListing(uint256 _tokenId) external {
        Listing storage listing = listings[_tokenId];
        require(listing.seller == msg.sender, "You are not the seller of this item");

        nftBadge.safeTransferFrom(address(this), msg.sender, _tokenId);

        delete listings[_tokenId];
    }
}
