---
title: Overview
slug: /protocol/overview
---

:::info 
Puffer is a native liquid restaking protocol (nLRP) designed to harness the power of restaking.
:::


## Puffer Walkthrough 👩‍🏫

<div style={{textAlign: 'center'}}>

![PufferFlywheel](/img/PufferProtocol.png)
</div>

### 0️⃣ Creating Restaking Modules
The protocol starts with a default [module](/protocol/restaking-modules#puffer-modules-) that only allows for PoS validating and cannot engage in restaking, which is considered the "risk-free" module for NoOps. Over time, new restaking modules will be added.

Puffer governance plays a crucial role in overseeing modules, including adding new modules and managing their AVS commitments.

For example, adding a new module to the PufferProtocol contract requires governance to:
1. Vet and select the [restaking operator](/protocol/restaking-modules#restricting-reops) to run the module.
2. Vet and [select the Eigenlayer AVSs](/protocol/restaking-modules#restricting-avss) that the module should service.

---
### 1️⃣ Staking ETH  
Stakers can deposit ETH and mint the [pufETH nLRT](/protocol/nlrt#pufeth) via the PufferPool contract, which serves as a redeemable receipt for their restaked ETH. If sufficient exit liquidity is available, stakers can reclaim their ETH from the PufferVault. Over time, the redeemable amount is expected to increase from [validator tickets](/protocol/validator-tickets) and restaking rewards.

In [contrast with conventional liquid staking tokens (LSTs)](/protocol/nlrt#what-is-an-lst), pufETH can provide strictly more rewards for its holders. Not only does pufETH encompass PoS rewards **and** restaking rewards, but its value can accelerate quickly due to validator ticket sales. Furthermore, the PoS rewards for stakers are decoupled from the protocol validators' performance.

---
### 2️⃣ Registering a NoOp Validator
To register a new validator, NoOps deposit [validator tickets](/protocol/validator-tickets) and [1 or 2 ETH](/reference/faq#%EF%B8%8F-how-many-eth-do-i-need-to-run-a-puffer-node) as collateral to the PufferProtocol contract. In return, the protocol mints pufETH, which remains locked until it's confirmed that their validator has successfully exited. Locking pufETH serves to:
- Align NoOp incentives
- Safeguard staker ETH
- Increase NoOp profit margins

To ensure the safety of stakers, NoOps must distribute their encrypted validator keyshares to the Guardians' [enclaves](/reference/glossary#enclave), allowing them to eject the NoOps if their validator balance falls too low or they run out of validator tickets. This requirement is to protect stakers and it will be [upgraded to a trustless solution](/protocol/guardians#roadmap-to-decentralization) once Ethereum's protocol allows it via [EIP-7002](https://eips.ethereum.org/EIPS/eip-7002). 

---
### 3️⃣ Provisioning ETH
Each RestakingModule contract will contain a queue of pending NoOp registrations. As the PufferPool accrues 32 ETH chunks from deposits and rewards, the Guardians will provision the chunks to the NoOps' pending validators, following a round-robin schedule to ensure all of the protocol's modules are serviced.

The provisioning step will create a new validator within the EigenPod whose ETH can be natively restaked on Eigenlayer to serve as collateral for its registered AVS. For this reason, the NoOp's validator's [withdrawal credential](/reference/glossary#withdrawal-credentials) is required to the module's EigenPod contract. After provisioning, the NoOp's validator will have deposited 32 ETH to the [BeaconDepositContract](https://etherscan.io/address/0x00000000219ab540356cBB839Cbe05303d7705Fa) and will await activation.

---
### 4️⃣ PoS Rewards 
Once their validator activates, the NoOp is eligible to validate for as many days as validator tickets they have deposited. Throughout this duration, the NoOp keeps 100% of the generated PoS rewards. Their [execution rewards](/reference/glossary#execution-rewards) are immediately deposited to their wallets, while their [consensus rewards](/reference/glossary#consensus-rewards) accrue in the module's EigenPod and can be withdrawn following the NoOp withdrawal process.

Since NoOps receive 100% of the PoS rewards they generate, they are [incentivized](/protocol/validator-tickets#why--noop-incentives) to maximize their validator performance, helping protect staker ETH. 

---

### 5️⃣ Restaking Rewards 
Restaking operators execute the AVSs on the module's behalf and receive a commission for their services. The accumulated fees from these AVSs enhance the value of pufETH. This mechanism allows stakers to achieve higher returns compared to conventional LSTs.

By participating in a restaking module, NoOps bear additional risks to their collateral. To compensate, they are granted a portion of the restaking rewards. This arrangement allows them to earn more rewards than through PoS alone, without the need for additional hardware or computational resources. They can access these rewards periodically, using the same NoOp withdrawal process as for consensus rewards.

---
### ️6️⃣ Exiting Validators
When a NoOp wishes to exit the protocol, they must first ensure their associated validator has exited the beacon chain. Once they present verifiable proof of their validator's exit, the contract tallies any penalties related to inactivity or slashing that the validator might have incurred. The corresponding pufETH amount, equivalent to the ETH penalties, is burned from the NoOp's locked collateral and the remainder is returned to the NoOp. This process ensures that stakers are appropriately compensated for any potential ETH losses that might have occurred during the validator lifecycle. Additionally, any unused validator tickets will be returned to the NoOp.