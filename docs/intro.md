---
title: Hello Puffer 🐡 
slug: /
---
> ### 
:::info About Puffer
Puffer is the first native liquid restaking protocol built on Eigenlayer 🐡🤝🟣
:::

It makes [native restaking](/protocol/strategies/#native-restaking-) on [Eigenlayer](https://www.eigenlayer.xyz/) more accessible, allowing anyone to run an Ethereum Proof of Stake (PoS) validator while supercharging their rewards.

The protocol is driven by **Stakers** and **Node Operators** (NoOps):
- **NoOps** can join *any* Puffer [strategy](/protocol/strategies) by locking 1 ETH as collateral and paying stakers an upfront [smoothing commitment](protocol/smoothing-commitment). In exchange, they get to operate a 32 ETH validator and keep 100% of its PoS rewards until their commitment expires or is renewed. NoOps can optionally boost their rewards by joining [restaking](reference/glossary#Restaking) strategies and delegating the validator's ETH to an [AVS](/reference/glossary/#AVS) operator in exchange for restaking rewards commission.


- **Stakers** can deposit any amount of ETH to help fund the protocol's 32 ETH NoOp-controlled validators. In exchange, they receive the pufETH [Liquid Staking Token](protocol/liquid-staking-token) (LST) which grows in value as the protocol receives smoothing commitments and restaking rewards.

### Why be a NoOp? 🤖
Anyone with less than 2 ETH can run their own validator to earn sustainable PoS rewards while helping to decentralize Ethereum. NoOps can get restaking exposure for additional rewards without requiring the 32 ETH to become a native restaker, allowing them to earn several times more than they could as a solo validator.

:::tip
Puffer has the best capital efficiency for a permissionless liquid staking protocol and this extends to restaking.
:::

NoOps are entitled to 100% of their validators' [execution rewards](/reference/glossary#execution-rewards). This means they get to decide their MEV strategy which helps strengthen Ethereum's censorship-resistance and [can be very lucrative in some cases](https://etherscan.io/block/17806773#mevinfo).

NoOps also receive 100% of their validators' [consensus rewards](/reference/glossary#consensus-rewards), meaning their validator's profitability depends solely on themselves, incentivizing for excellent long-term NoOp performance.

A NoOp's 1 ETH collateral is converted to pufETH during registration, allowing them to earn additional passive rewards throughout their commitment. This also means that the earlier NoOps will benefit from the later NoOps that join the protocol since pufETH will grow from their smoothing commitments and restaking rewards.

### Why stake? 🥩
Compared to traditional liquid staking protocols, stakers on Puffer no longer have to trust validators to have good performance for pufETH to earn competitive rewards, rather smoothing commitments provide stakers with guaranteed rewards regardless of the validators' performance.   

:::tip
pufETH accrues months of PoS rewards immediately instead of relying on NoOp performance.
:::

Instead of waiting for PoS rewards to slowly accrue, pufETH holders receive month[s] worth of PoS rewards each time a NoOp joins the protocol and pays their smoothing commitment. This dynamic favors early stakers as pufETH can quickly appreciate from all future smoothing commitments even if the beacon chain's validator queue is extremely congested.

Traditional LSTs only accrue PoS rewards. pufETH is the first LST to accrue both PoS and restaking rewards, allowing a staker to earn more without requiring complicated DeFi strategies. However, pufETH is a liquid token and therefore is 100% compatible with DeFi for those that want.

Puffer prioritizes the safety of stakers' ETH. To ensure staked ETH is safe, the protocol requires NoOps to lock 1 ETH of collateral, run [Puffer’s anti-slashing technology](technology/secure-signer) for defense-in-depth, will eject validators whose balance falls too low, and has restaking guardrails.

### The Puffer Flywheel 🎡
<div style={{textAlign: 'center'}}>

![PufferFlywheel](/img/PufferFlywheel.svg)
</div>

Together, stakers and NoOps create a flywheel effect that allows Puffer to outpace the growth of traditional liquid staking protocols. However, to ensure that Puffer never becomes a threat to Ethereum's credible neutrality, the [burst threshold](protocol/burst-threshold) caps the Puffer at 22% of the validator set. 

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

- 🧈 Smoothing Commitments: aligns NoOp incentives and smooths MEV.

- 💧 Liquid Rewards: NoOps' execution rewards are immediately liquid.

