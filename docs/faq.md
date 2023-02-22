---
sidebar_position: 6
title: FAQ
---

### Who runs Secure-Signer?

> Node Operators (NoOps) run Secure-Signer alongside their consensus client. NoOps could be anyone with compatible hardware and multiples of 2 ETH.

### Can I get slashed if I go offline?

> No, inactivity is not considered a slashable offense. Refer to [Slashing on Ethereum PoS](background/slash.md).

### Is Puffer a non-custodial?

> Yes, Puffer is a non-custodial. The Puffer Pool contract manages all ETH, and pufETH is held by users.

### How much are the fees on Puffer?

> Puffer charges a 2.5% fee on consensus rewards managed by the Puffer DAO to fuel protocol development.

### When Testnet?

> Q2 2023

### When Mainnet?

> Q3 2023

### How many validators have been slashed? Should we even care about slashable offenses?

> Since PoS went live, there have been [220 slashing events](https://www.galaxy.com/research/insights/100-days-after-the-merge/). While this number may seem low, slashing poses an existential threat to all Ethereum validators and LSD holders.

> For example, assume there is a bug in one of the five consensus clients that causes a slashing rule to be broken (for simplicity, assume each consensus client is used by 20% of the validators). The anti-correlation penalty causes the slashing amount to increase as the number of offenders increases, in this case to $1 + 3*20\%*32 = 20.2$ ETH. Unfortunately, 20% of the validators using this consensus client would face a 20.2 ETH slashing penalty. This would wipe out years of staking revenue for the NoOps and LSD holders.

> Fortunately, if this were to happen, the NoOps on Puffer would be protected!

### How are validator keys being managed in your system?

> The NoOp generates and stores all validator keys in the [Secure-Signer SGX enclave](tech/securesigner#where-is-it-run).

### How are withdrawal keys being managed in your system?

> Following the Shanghai/Capella upgrades, BLS withdrawal keys will be removed. Instead, the withdrawal credentials will point to a Puffer Pool contract which is another step towards trustless staking.

### Wasn't SGX hacked a billion times? Why would you use it?

> Since breaking SGX is of great interest in academia, there is a back-and-forth between white hat hackers finding exploits and Intel patches.

> It is essential that Puffer relies on SGX as a **strict security enhancement**. Honest NoOps are completely protected against all slashable offenses. However, should a nefarious NoOp manage to break SGX, all that they would learn is knowledge of their validator private key. Knowledge of one's validator private key is the status quo for _all_ existing staking operations and does not provide the NoOp with any way to steal from the pool.

<!-- ### How hard is it to get access to SGX? -->

### Why don't other permissionless pools reduce their bond requirement to 2 ETH?

> Reducing the bond requirement increases NoOp risk. Puffer mitigates this risk through [Secure-Signer](tech/securesigner#what-is-it) and our [ejection rule](arch/ejection).

### There's this super cool technology called Distributed Validator Technology (DVT). Do we even need Secure-Signer when we have that?

> DVT is an exciting new validator technology but is still in its infancy. Essentially, by adding redundancy, DVT provides better guarantees about NoOp uptime and reduces (but does not eliminate) slashing risk.

> Currently, DVT will be most effective for permissioned staking operations where they want to reduce the risk of going offline for better NoOp performance. DVT still has many open research questions in a permissionless setting, like dealing with the free-rider problem, collusion, and coordinated withdrawals.

> From an efficiency point of view, consensus and execution rewards would be divided amongst DVT clusters. NoOps would have to operate in multiple DVT clusters to remain profitable. Unfortunately, this is not scalable beyond a certain point due to network constraints and would require more hardware (increasing NoOp operating costs).

> Puffer is dedicated to building a permissionless stake pool from day one. For this reason, we will not adopt DVT during the first phase of the Puffer Pool. However, in terms of technology, [Secure-Signer](tech/securesigner#what-is-it) and our [ejection rule](arch/ejection) provide scalable slash protection and NoOp uptime without the unsolved issues in a permissionless setting.

### How hard is it to get access to SGX?
> Running Secure-Signer doesn't require anything expensive or technical like purchasing and running an ASIC. Instead, Secure-Signer is software that runs on compatible Intel CPUs that support SGX. Many cloud providers (e.g., Microsoft Azure) readily supply SGX-enabled servers for cheap that are compatible with Secure-Signer. Additionally, Intel SGX-enabled XEON servers with the specs to run a validator can be purchased to be run at home.

### Is Puffer hiring?

> Yes! We are looking for value-aligned and motivated candidates to join our team at Puffer and help keep Ethereum decentralized.
