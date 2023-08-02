---
sidebar_position: 1
title: Overview
---
> ### Puffer is the first liquid staking protocol built on Eigenlayer :blowfish:

Puffer Puffer's goal is to make validating more accessible and profitable for at-home validators, thereby contributing to Ethereum's security and censorship resistance.

Restaking is a paradigm shift that will forever change web3's infrastructure and unlock unprecedented value for Ethereum validators and the [AVSs](#puffer-avs) they operate. However, as with earlier developments like MEV and liquid staking, there is potential to centralize Ethereum. Now that Pandora's Box is opened, it is essential to build protocols to that preserve decentralization. In pursuit of this goal, Puffer has built the first native liquid staking protocol on [Eigenlayer](https://www.eigenlayer.xyz/) with Ethereum's ethos in mind. To counteract the risk of centralization, Puffer is preemptively self-capping its pool size and implementing guardrails to mitigate the negative externalities that restaking may have on the Ethereum ecosystem.

At its core, the Puffer Protocol is a liquid staking protocol where node operators are permissionlessly allocated ETH to launch an Ethereum PoS validator. Puffer nodes have the option to restake to operate AVSs on top of Eigenlayer. Puffers are users who stake ETH for the pufETH LST, which is expected to increase in value over time as the Puffer Protocol accrues validator and restaking rewards. PUFI token is used to govern the protocol via voting in the Puffer DAO. Some important duties include approving which AVSs Puffer nodes can use, and which ones to allocate protocol treasury ETH to in the form of Economic Security as a Service (ESaaS). 

<!-- At a high level, the Puffer Protocol can be conceptualized as a platform to increase participation in Ethereum validating and, more broadly, web3 infrastructure through two means:
1. decreasing the barrier to entry to becoming a node
2. increasing rewards opportunities via restaking and MEV-Smoothing -->

The Puffer Protocol functions as a platform to increase the profitability of at-home nodes operating as Ethereum validators and web3 infrastructure providers. This is achieved through three core guiding principles:
> 1. increasing capital efficiency
> 2. increasing economic opportunities
> 3. increasing hardware efficiency 

### What does Puffer do differently?
By providing higher profit margins, lower ETH requirements, and better hardware utilization, Puffer increases the viability of at-home nodes, helping to cement a pocket of decentralization within Ethereum's validator set. 

Restaking enables the utilization of latent compute power in the hardware, allowing for additional economic opportunities. TEEs like [Secure-Signer](../tech/securesigner.md)  further increase these economic opportunities by unlocking unique restaking services. Considering TEEs have comparable costs, this combination maximizes the node's ROI on their hardware and operating costs. Additionally, the bonus is that using TEEs reduces the node's risk of slashing.

TEE-compatible hardware comes at comparable costs to the hardware typically recommended for Ethereum validation. However, when coupled with the benefits of restaking, which enable the utilization of latent compute power in the hardware for other economic pursuits, it maximizes the efficiency of the hardware.

TEE-compatible hardware has similar costs to the hardware recommended for Ethereum validating. When combined with the oppoRestaking further allows 



<!-- To understand Puffer, it helps to differentiate how vanilla validators and Puffer nodes operate. In both cases, they purchase or rent hardware to  -->

<!-- - A Puffer -->
<!-- - Instead of purchasing 32 ETH -->



Puffer's utilization of TEEs and its unique approach to restaking 
 seeks to make validating more accessible and profitable for individual validators, contributing to Ethereum's decentralization and security.
Puffer fundamentally allows for unique revenue opportunities  


For example, a validator's 32 ETH deposit can be programatically slashed if fraud is proven while restaking to operate an optimistic rollup.
<!-- ![pufferarch](img/arch.png) -->

### Puffer Protocol Rules
> _What are the rules_

Since the Puffer Protocol is built on top of Eigenlayer, its rules can be defined as an [actively validated service](https://github.com/Layr-Labs/eigenlayer-contracts/blob/master/docs/AVS-Guide.md) or AVS. 
An AVS 
Eigenlayer defines AVSs to be services or middlewares that a validator can restake to operate


These are contracts

 Eigenlayer defines AVSs to be services or middlewares that a validator can restake to operate. In exchange for increased rewards, , at  but is liable where provably incorrect behavior can be programatically slashed.

In Eigenlayer, AVSs are services or middlewares that nodes can opt in to operate to earn beyond their Ethereum validator rewards. 

Eigenlayer defines [actively validated services](https://github.com/Layr-Labs/eigenlayer-contracts/blob/master/docs/AVS-Guide.md) (AVSs) to be services or middlewares that a restaker can opt in to, where provably incorrect behavior can be programatically slashed. For example, a validator's 32 ETH deposit can be programatically slashed if fraud is proven while restaking to operate an optimistic rollup. Since the Puffer Protocol is built on top of Eigenlayer, its rules can be recursively defined as an AVS. If the Puffer Protocol's AVS is violated, the offending validator's ETH will be programmably slashed and the amount distributed back to the pool.

1. To actively protect Puffers' ETH from [inactivity penalties](../intro.md#inactivity-risk), each validator's [current balance](https://kb.beaconcha.in/glossary#current-balance-and-effective-balance) is required to remain above a threshold set by the Puffer DAO. This threshold should be low enough to allow reasonable downtime but high enough to incentivize good performance. 
2. MEV-Smoothing is vital to curb centralization within the protocol. It allows at-home nodes to earn more than they would on their own and reduces advantages for large-scale operations. Validators proposing blocks are required to distribute the execution rewards with the pool. If theft is proven on-chain, the offending validator is penalized. 

### Puffers

### Nodes
The Puffer Protocol is buoyed by the ETH staked by Puffers, so protecting them is one of the protocol's main priorities. The protocol requires all nodes to be economically bonded for proper incentivization, and should penalties accrue, they are first deducted from this bond. The employment of enclaves minimizes slashing events, while Guardian support is in place to counteract node inactivity.

To accommodate different risk preferences and ETH requirements, nodes can choose from three modes of operation, ranging from high to low capital efficiency, with corresponding requirements. Nodes using [Secure-Signer](../tech/securesigner.md) enjoy increased capital efficiency and access to enclave-specific AVSs. For bonds less than 16 ETH, Guardian support is currently needed to prevent inactivity penalties from threatening staker eth, until [EIP-7002](https://github.com/ethereum/EIPs/pull/7002) removes this requirement. Prior to this, nodes with a 16 ETH bond can join without requiring Guardian support.

Risk Preference | Bond (ETH) | Guardian Support | TEE Requirement
--- | --- | --- | ---
Low | 2 ETH | Yes | SGX
Mid | 4 ETH | Yes | None
High | 16 ETH | No | None

### Guardians
The Guardians are a permissioned set of nodes whose job is to ensure the smooth functioning of the protocol. They have two responsibilites that will eventually be phased out as [EIP-4788](https://eips.ethereum.org/EIPS/eip-4788) and [EIP-7002](https://github.com/ethereum/EIPs/pull/7002) are implemented in upcoming hardforks.
1. reporting the amount of ETH that backs pufETH
2. exiting nodes who breached the Puffer Protocol AVS

guardians are designed to minimize them as a point of failure


### Rewards
pufETH is a reward-bearing token, akin to [Compound's cToken](https://docs.compound.finance/v2/ctokens/#ctokens), which is optimal in terms of DeFi compatibility and tax implications. As rewards are generated by the protocol, they increase the amount of ETH backing pufETH, which in turn increases the conversion rate between the two. 

**Puffers** 
> Puffers deposit ETH at the PufferPool contract to mint pufETH. At the protocol's inception, the conversion rate would be one to one, but assuming the protocol performs well , i.e. accrues more rewards than penalties, the conversion rate would value pufETH higher than ETH. Thus Puffers holding pufETH can expect its value to increase over time.

**Nodes**
> Upon registering validator keys, Puffer nodes mint their bond's worth of pufETH which is locked until they exit the protocol. This serves to allow for efficient MEV-Smoothing and align incentives. As the node generates consensus, execution, and AVS rewards, they are rewarded liquid ETH dependent on commission rates set by the Puffer DAO, with the remainder sent to the PufferPool and treasury. Upon fully exiting the Puffer Protocol, their locked pufETH is redeemed and they are returned ETH equal to their `original bond + accrued rewards - penalties`.


### Withdrawals

### Restaking

### Governance
One of Puffer's goals is to build an unstoppable decentralized protocol that will continue to operate should the Puffer core team stop. For this reason we strive to minimize the role of governance in the protocol. 
The PUFI token will primarily be used for: 
- in the event of vulnerabilities, pausing and upgrading contracts 
- voting on fees
- managing the Puffer Protocol treasury in the form of grants and ESaaS
- whitelisting AVSs

### DVT in Puffer
- The Puffer Protocol fully supports DVT, which when used in conjunction with Secure-Signer, provides the best slash-protection guarantees in the market. 
- Stay tuned for more information on Puffer's Fractal DVT, which an extension of DVT that is only possible through the use of enclaves. Fractal DVT allows DVT cluster to scale far beyond what is possible using vanilla DVT, allowing for greater decentralization and bond reductions.

### Burst Threshold
As part of Puffer's commitment to Ethereum's decentralization, we are self-limiting the size of the Puffer Pool. We refer to this as the *Burst Threshold* with a maximum capacity of 22%. This means that if the Puffer Pool reaches 22% of the validator set, pufETH minting and node onboarding will freeze. 

This commitment is critical to ensure that the Puffer Pool never breaches the dangerous consensus threshold of 33%, which threatens the stability of Ethereum. We firmly believe that the Burst Threshold must be included from day one rather than after the protocol is profitable.

### Summary