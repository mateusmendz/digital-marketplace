require("@nomiclabs/hardhat-waffle");

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: "https://polygon-mumbai.infura.io/v3/7261cc553fd445abb4f275293176adba",
    },
    mainnet: {},
  },
  solidity: "0.8.4",
};
