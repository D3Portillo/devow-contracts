import { ethers } from "hardhat"

async function main() {
  const Registry = await ethers.getContractFactory("Registry")
  let deployedContract = await Registry.deploy()
  await deployedContract.deployed()
  console.log(`Registry::\n${deployedContract.address}`)

  const StakingPool = await ethers.getContractFactory("StakingPool")
  deployedContract = await StakingPool.deploy()
  await deployedContract.deployed()
  console.log(`StakingPool::\n${deployedContract.address}`)

  const DevowToken = await ethers.getContractFactory("DevowToken")
  deployedContract = await DevowToken.deploy()
  await deployedContract.deployed()
  console.log(`DevowToken::\n${deployedContract.address}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
