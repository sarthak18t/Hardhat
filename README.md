# Hardhat

Hardhat a develop environment to compile, test, deploy smart contracts.

Hardhat Instalation
npx install --save-dev hardhat

For compiling the contract use
npx hardhat compile
will genterate artifacts folder which contains abo and bytecode

For test the contract
npx hardhat test test/test.js(file name)

for testing hardhat uses ethers ,chai and mocha framework
describe and it are global mocha functions.

For deploying the contracts
1]npx hardhat node 

Here's what npx hardhat node does:

Local Blockchain: It sets up a local Ethereum network with a single node running on your machine. 
This node acts as a simulated blockchain that you can interact with during development.

Genesis Block: The local blockchain starts with a genesis block, which is the initial block of the blockchain.
Hardhat creates a fresh blockchain state for testing purposes, allowing you to have a clean environment each time you run the node.

Accounts and Balances: The local blockchain generates a set of predefined accounts with test Ether (fake ETH) balances.
These accounts can be used for deploying and interacting with contracts during development.
You can use these accounts for testing different scenarios like sending transactions, interacting with contracts, or testing token transfers.

Mining: Unlike a real Ethereum network where mining involves solving complex mathematical puzzles,
the local blockchain in Hardhat automatically mines new blocks whenever there are pending transactions. 
This ensures that your transactions are processed and included in new blocks quickly, simulating the behavior of the Ethereum network.

2] npx hardhat run --network <network-name> scripts/deploy.js




