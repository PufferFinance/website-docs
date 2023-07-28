---
sidebar_position: 1
title: Overview
---
Restaking is a paradigm shift that will forever change web3's infrastructure and unlock unprecedented value for Ethereum validators and the AVSs they operate. However, as with earlier developments like MEV and liquid staking, there is potential to centralize Ethereum. Now that Pandora's Box is opened, it is essential to build protocols to that preserve decentralization. In pursuit of this goal, Puffer has built the first native liquid staking protocol on [Eigenlayer](https://www.eigenlayer.xyz/) with Ethereum's ethos in mind. To counteract the risk of centralization, Puffer is preemptively self-capping its pool size and implementing guardrails to mitigate the negative externalities that restaking may have on the Ethereum ecosystem.

At its core, the Puffer Protocol is a liquid staking protocol where node operators are permissionlessly allocated ETH to launch an Ethereum PoS validator. Anyone can stake ETH for the pufETH LST, which is expected to increase in value over time as the Puffer Protocol accrues validator and restaking rewards. PUFI token is used to govern the protocol via voting in the Puffer DAO. Some important duties include approving which AVSs Puffer nodes can use, and which ones to allocate protocol treasury ETH to in the form of Economic Security as a Service (ESaaS). 

At a high level, the Puffer Protocol can be conceptualized as a platform to increase participation in Ethereum validating and, more broadly, web3 infrastructure through two means:
1. decreasing the barrier to entry to becoming a node
2. increasing rewards opportunities via restaking and MEV-Smoothing

By providing higher profit margins and lowering ETH requirements, at-home nodes can better compete with centralized staking operations, helping to cement a pocket of decentralization within Ethereum's validator set.

# Puffer Protocol
<!-- ![pufferarch](img/arch.png) -->

### Puffer AVS
Eigenlayer defines [actively validated services](https://github.com/Layr-Labs/eigenlayer-contracts/blob/master/docs/AVS-Guide.md) (AVSs) to be services or middlewares that a restaker can opt in to, where provably incorrect behavior can be programatically slashed. For example, a validator's 32 ETH deposit can be programatically slashed if fraud is proven while restaking to operate an optimistic rollup. Since the Puffer Protocol is built on top of Eigenlayer, its rules can be recursively defined as an AVS. If a Puffer AVS violation occurs, the offending validator's ETH will be programmably slashed and the amount distributed back to the pool.

1. To actively protect staker ETH from [inactivity penalties](../intro.md#inactivity-risk), each validator's [current balance](https://kb.beaconcha.in/glossary#current-balance-and-effective-balance) is required to remain above a threshold set by the Puffer DAO. This threshold should be low enough to allow reasonable downtime but high enough to incentivize good performance. 
2. MEV-Smoothing is vital to curb centralization within the Puffer Protocol. It allows at-home nodes to earn more than they would on their own and reduces advantages for large-scale operations. Validators proposing blocks are required to distribute the execution rewards with the pool. If theft is proven on-chain, the offending validator is penalized. 

### Node operators
The Puffer Protocol prioritizes protecting stakers' assets, recognizing their significant ETH contributions to the protocol. To accommodate different risk preferences, nodes can choose from three modes of operation, ranging from high to low capital efficiency, with corresponding requirements. Nodes using [Secure-Signer](../tech/securesigner.md) enjoy increased capital efficiency and access to enclave-specific AVSs. For bonds less than 16 ETH, Guardian support is currently needed to avoid inactivity penalties, until [EIP-7002](https://github.com/ethereum/EIPs/pull/7002) removes this requirement. Prior to this, nodes with a 16 ETH bond can join without requiring Guardian support.

Risk Preference | Bond (ETH) | Guardian Support | TEE Requirement
--- | --- | --- | ---
Low | 2 ETH | Yes | SGX
Mid | 4 ETH | Yes | None
High | 16 ETH | No | None


### Rewards
- upon exiting the Puffer Protocol, their pufETH is redeemed for bond + rewards - penalties.

### Withdrawals

### Restaking

### Governance


### Burst Threshold
As part of Puffer's commitment to Ethereum's decentralization, we are self-limiting the size of the Puffer Pool. We refer to this as the *Burst Threshold* with a maximum capacity of 22%. This means that if the Puffer Pool reaches 22% of the validator set, pufETH minting and node onboarding will freeze. 

This commitment is critical to ensure that the Puffer Pool never breaches the dangerous consensus threshold of 33%, which threatens the stability of Ethereum. We firmly believe that the Burst Threshold must be included from day one rather than after the protocol is profitable.