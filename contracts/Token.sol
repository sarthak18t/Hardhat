//SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.6.0 <0.9.0;

contract Token{
    string public name = "HardhatToken";
    string public symbol= "HHT";
    uint public totalSupply = 1000;

    address public owner;
    mapping(address=>uint) public balances;

    constructor(){
        owner = msg.sender;
        balances[msg.sender]=totalSupply;
    }

    function transfer(address to ,uint amount) public {
        require(balances[msg.sender]>=amount);
        balances[msg.sender]-=amount;
        balances[to]+=amount;
    }

    function balanceOf(address account) public view returns(uint){
        return balances[account];
    }
}