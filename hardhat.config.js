/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");

const INFURA_API_KEY = "9ad5fcd436204d2c914b5194caf8a197";
const SEPOLIA_KEY = "343cd8d869cb4f001c623edbd16b6d7223f5780afdc2c9bdf571fa98c8f63abb"
module.exports = {
  solidity: "0.8.18",
  networks : {
    sepolia : {
      url:`https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts :[SEPOLIA_KEY]
    }
  }
};
