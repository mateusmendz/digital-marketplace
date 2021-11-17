require("@nomiclabs/hardhat-waffle");

const projectId = "7261cc553fd445abb4f275293176adba";

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [],
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
    },
  },
  solidity: "0.8.4",
};
