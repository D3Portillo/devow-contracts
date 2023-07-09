import { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"
import "dotenv/config"

const config: HardhatUserConfig = {
  solidity: "0.8.16",
  etherscan: {
    apiKey: "QV8TQ8DFWMAYQISZHRMUEQP6FMHKPSQ6NM",
  },
  networks: {
    xinfin: {
      url: process.env.XINFIN_NETWORK_URL,
      accounts: [process.env.PRIVATE_KEY!],
    },
    apothem: {
      url: process.env.APOTHEM_NETWORK_URL,
      accounts: [process.env.PRIVATE_KEY!],
    },
    arbitrum: {
      url: "https://arb-mainnet.g.alchemy.com/v2/5muRxgyHCcv-CpLfhkMBL81np16fNeBe",
      accounts: [process.env.MINE_PK!],
    },
  },
}

export default config
