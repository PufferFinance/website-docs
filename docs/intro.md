---
title: Hello Puffer 🐡 
slug: /
---
> ### 
:::info About Puffer
Puffer is a decentralized native liquid restaking protocol (nLRP) built on Eigenlayer 🐡🤝🟣

It makes [native restaking](/protocol/puffer-modules/#native-restaking-) on [Eigenlayer](https://www.eigenlayer.xyz/) more accessible, allowing anyone to run an Ethereum Proof of Stake (PoS) validator while supercharging their rewards.
:::


## What does Puffer bring? 🍽️ 

### **Protocol**

- 🟢 Permissionless: anyone can run a validator on Puffer.

- 🥩 Native Restaking: the first native liquid restaking protocol on Eigenlayer.

- 🧢 Ethos Alignment: the protocol is self-capped to protect Ethereum.

- 🐡 Explosive Growth: pufETH can grow in value even if validator queues are long.

### **NoOps**

- 💯 Capital Efficiency: less than 2 ETH to run a validator.

- 🐢 Slash Protection: first-of-its-kind anti-slashing hardware support.

- 🎲 MEV Autonomy: NoOps choose their MEV strategy.


### **Rewards**

- 💦 Liquid Staking: anyone can stake any ETH amount.

- 🚀 Restaking Rewards: Eigenlayer integration supercharges rewards.

- 🎟️ Validator Tickets: aligns NoOp incentives, smooths MEV, and creates new markets.

- 💧 Liquid Rewards: NoOps' execution rewards are immediately liquid.

- 😎 Buy and Hodl: Earn PoS and restaking rewards without running a validator.

----- 

### The Puffer Flywheel 🎡
<div style={{textAlign: 'center'}}>

![PufferFlywheel](/img/PufferFlywheel.png)
</div>

Together, stakers and NoOps create a flywheel effect that allows Puffer to outpace the growth of traditional liquid staking protocols. However, **to ensure that Puffer never becomes a threat to Ethereum's credible neutrality, the [burst threshold](protocol/burst-threshold) caps the Puffer at 22% of the validator set**. 


The protocol is driven by **Stakers** and **Node Operators** (NoOps):
- **NoOps** can join *any* Puffer [module](/protocol/puffer-modules) by locking [Validator Tickets](/protocol/validator-tickets) and 1 ETH as collateral. In exchange, they get to operate a 32 ETH validator and keep 100% of its PoS rewards until they run out of VTs. NoOps can boost their rewards by joining [restaking](/reference/glossary#Restaking) modules and delegating the validator's ETH to a [restaking operator](/protocol/puffer-modules#restaking-operators) in exchange for restaking rewards commission.


- **Stakers** can deposit any amount of ETH to help fund the protocol's 32 ETH NoOp-controlled validators. In exchange, they receive the pufETH [native Liquid Restaking Token](/protocol/nlrt#what-is-an-lst) (nLRT) which grows in value as the protocol mints validator tickets and receives restaking rewards.

### Why be a NoOp? 🤖
Anyone with less than 2 ETH can run their own validator to earn sustainable PoS rewards while helping to decentralize Ethereum. NoOps can get restaking exposure for additional rewards without requiring the 32 ETH to become a native restaker, allowing them to earn several times more than they could as a solo validator.

:::tip
Puffer has the best capital efficiency for a permissionless liquid staking protocol and this extends to restaking.
:::

NoOps are entitled to **100% of their validators' [execution rewards](/reference/glossary#execution-rewards)**. This means they get to decide their MEV strategy which helps strengthen Ethereum's censorship-resistance and [can be very lucrative in some cases](https://etherscan.io/block/17806773#mevinfo).

NoOps also receive **100% of their validators' [consensus rewards](/reference/glossary#consensus-rewards)**, meaning their validator's profitability depends solely on themselves, incentivizing for excellent long-term NoOp performance.

:::caution EigenLayer Partial Withdrawals Proofs are being improved 🚧  
Currently it is [cost-prohibitive](https://docs.eigenlayer.xyz/eigenlayer/restaking-guides/restaking-user-guide/native-restaking/withdraw-from-eigenlayer/partial-withdrawals) to withdraw consensus rewards from EigenPods but the EigenLayer team is working to decrease these costs. Until then, withdrawing consensus rewards is temporarily disabled.
:::

NoOp collateral is converted to pufETH during registration, allowing them to earn additional passive rewards throughout their commitment.

### Why stake with Puffer? 🥩
Compared to most liquid staking protocols, stakers on Puffer no longer have to trust validators to have good performance for pufETH to earn competitive rewards. Rather validator tickets provide stakers with guaranteed rewards regardless of the validators' long-term performance.   

:::tip
pufETH accrues PoS rewards immediately instead of relying on NoOp's long-term performance.
:::

Instead of waiting for PoS rewards to slowly accrue, pufETH holders receive rewards each time validator tickets are minted. This dynamic favors early stakers as pufETH can quickly appreciate from all future minted validator tickets, even if the beacon chain's validator queue is extremely congested.

Traditional liquid staking tokens (LSTs) only accrue PoS rewards. As a nLRT, pufETH accrues both PoS and restaking rewards, allowing a staker to earn more without requiring complicated DeFi strategies. However, pufETH is a liquid token and therefore is 100% compatible with DeFi for those that value composability.

Puffer prioritizes the safety of stakers' ETH. To ensure staked ETH is safe, the protocol requires:
- NoOps to lock 1 ETH of collateral and run [Puffer’s anti-slashing technology](/technology/secure-signer) for defense-in-depth or lock 2 ETH of collateral without the anti-slasher
- [Ejecting validators](/protocol/guardians#what-are-their-duties) whose balance falls too low
- Guardrails around [which AVSs are allowed](/protocol/puffer-modules#restricting-avss)
- Guardrails around who can become a [restaking operator](/protocol/puffer-modules#restricting-reops)
