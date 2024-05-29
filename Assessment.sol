//SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

contract SelectInstrument {
    enum InstrumentType { Unknown, Ukulele, Guitar, Bass }

    function getInstrumentType(string memory size, uint256 stringCount) public pure returns (string memory) {
        if (stringCount == 4) {
            return "The instrument is a ukulele.";
        } else if (keccak256(abi.encodePacked(size)) == keccak256(abi.encodePacked("big")) && stringCount == 6) {
            return "The instrument is a guitar.";
        } else if (keccak256(abi.encodePacked(size)) == keccak256(abi.encodePacked("big")) && stringCount == 4) {
            return "The instrument is a bass.";
        } else {
            return "Unknown instrument.";
        }
    }
}
