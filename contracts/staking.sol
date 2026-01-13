pragma solidity ^0.8.20;
contract Staking {
 mapping(address=>uint) public stake;
 function deposit() external payable {
  stake[msg.sender]+=msg.value;
 }
 function withdraw() external {
  payable(msg.sender).transfer(stake[msg.sender]);
  stake[msg.sender]=0;
 }
}
