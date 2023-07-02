const { ethers } = require("hardhat");

async function main(){
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const Token = await ethers.getContractFactory("Token");
    const token = await Token.deploy();
}
main()
.then(()=>process.exit(0))
.catch((error)=>{
    console.log(error)
    process.exit(1)
})