---
title: Overview
slug: /protocol/overview
---

:::info 
Puffer is a next-generation liquid staking protocol designed to harness the power of restaking.
:::


## Puffer walkthrough 👩‍🏫

<div style={{textAlign: 'center'}}>

![PufferFlywheel](/img/PufferProtocol.svg)
</div>

### 0️⃣ Creating Strategies 
The protocol will begin with a default strategy that only allows for PoS validating and cannot engage in restaking. This is considered the "risk-free" strategy for NoOps.

Puffer governance plays a crucial role in overseeing strategies, including adding new strategies and managing the flow of ETH from the stakers to different strategies. 

For example, adding a new strategy to the PufferProtocol contract requires a governance proposal that:
1. Vets and selects the AVSs that the strategy can use.
2. Vets and selects the NoOp[s] that will operate the AVSs.

### 1️⃣ Staking ETH  
Stakers deposit ETH to mint pufETH at the PufferPool contract. This acts as a receipt that is redeemable for ETH from the WithdrawalPool contract if there is sufficient exit liquidity. The redeemable amount is expected to increase over time as NoOps pay [smoothing commitments](/protocol/smoothing-commitments) to join the protocol and generate restaking rewards by executing strategies. 

Compared to traditional LSTs, pufETH holders can earn more since pufETH captures restaking rewards in addition to validator rewards. Also, since smoothing commitments account for a year of staking rewards upfront, pufETH value is able to accrue much faster.

### 2️⃣ Registering a NoOp validator
NoOps pay a `1 ≤ S < 2 ETH`, non-refundable smoothing commitment to the PufferProtocol to register a new validator public key. NoOps are required to share their encrypted validator keyshares with the Guardians' enclaves to eject them if their balance falls below 1 ETH. This requirement is to protect Staker ETH and it will be replaced with a trustless solution once Ethereum's specs allow it via EIP-7002. 

### 3️⃣ Provisioning ETH
Each PufferStrategy contract will contain a queue of pending validator registrations. As the PufferPool accrues 32 ETH chunks from deposits and rewards, the Guardians will provision the chunks to pending validators. They are required to follow a weighted round-robin schedule to service all of the PufferStrategy contracts. Governance is used to decide the schedule and it should be chosen to balance the pool's growth and restaking risk. After provisioning, the NoOp's validator has deposited to the BeaconDepositContract and awaits activation.

### 4️⃣ Staking rewards 
Once activated, the NoOp's validator will generate staking rewards that accrue in the strategy's EigenPod. These rewards will be withdrawable at the end of each [Growth Spurt](/protocol/growth-spurts). Since NoOp's receive 100% of the staking rewards they generate, they are incentivized to maximize their validators' performance. 

### 5️⃣ Restaking rewards 
The strategies that engage in restaking will generate additional rewards through AVS fee revenue that supercharges rewards for pufETH holders and NoOps. After each growth spurt, the NoOps running validators within the strategy will be able to withdraw restaking commission to supplement their staking rewards.
