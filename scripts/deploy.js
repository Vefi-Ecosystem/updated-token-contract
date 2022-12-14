const { ethers } = require("hardhat");

(async () => {
  try {
    const TokenFactory = await ethers.getContractFactory("VefiEcosystemToken");
    console.log("Deploying...");
    let token = await TokenFactory.deploy(
      "The Vefi Token",
      "VEF",
      ethers.utils.parseUnits("900000000", 18),
      "0x8754e02Aab325BA8350257F48b9F91d7CeF80bA3",
      8
    );
    token = await token.deployed();
    console.log(token.address);
  } catch (error) {
    console.log(error);
  }
})();
