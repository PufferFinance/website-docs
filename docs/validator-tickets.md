---
title: Validator Tickets
slug: /protocol/validator-tickets
---

:::info 
Validator Tickets are Puffer's novel addition to the validator lifecycle in LSTs.
:::

**Validator Tickets** are the evolution to Puffer's initial "[Smoothing Commitment](https://ethresear.ch/t/validator-smoothing-commitments/17356)" research collaboration with [Justin Drake](https://twitter.com/drakefjustin), and are closely related to the recent "[Execution Tickets](https://ethresear.ch/t/execution-tickets/17944)" proposal that was [added to Ethereum's roadmap](https://x.com/VitalikButerin/status/1741190491578810445?s=20).

### Overview

<div style={{textAlign: 'center'}}>

![Minting VTs](/img/mint-vt.png)
</div>

The idea is simple but powerful:
> 
- **pufETH**: People stake their ETH and receive pufETH, a token representing their staked ETH within the Puffer protocol, which is used to fund Ethereum validators.
- **Validator Tickets (VTs)**: VTs are ERC20 tokens that grant the holder the right to run a staker-funded Ethereum validator for a day. VTs are minted by ETH deposits. This ETH goes towards compensating pufETH holders for financing validators.
- **Running Validators**: To run a validator, a node operator must lock VTs and lock in 1 ETH of pufETH as collateral.
- **Pricing VTs**: The price of a VT is set based on the expected daily earnings from running a validator, with a discount to incentivize purchases. This price directly influences the expected pufETH APR.
- **Benefits**: VTs create new trading opportunities, address “rug-pooling”, and incentivize good performance. pufETH holders earn rewards immediately when VTs are purchased. Consuming VTs allows the node operator to keep 100% of the validator’s earnings.

:::tip
Before EigenLayer restaking is live, selling VTs is pufETH's source of rewards. 
:::




### The status quo
Typically, Liquid Staking Protocols (LSPs) use two methods for validators:

- **Unbonded Model**: Validators don't need to lock up collateral. This is good for growth but risky because penalties affect the staking pool, and it often requires specially approved validators (permissioned / KYC).

- **Bonded Model**: Validators lock collateral for their operation period. This method is more secure and allows for *any* validator to join, but slows LSP growth as it requires a large amount of ETH upfront per validator.

Puffer uses the *bonded model* as it is more ethos-aligned, but adds VTs to address some of its shortcomings. 

### How are VTs used?
<div style={{textAlign: 'center'}}>

![Using VTs](/img/using-vt.png)
</div>

**Validator Tickets** supplement validator bonds. When registering a validator, the NoOp locks 1 ETH worth of pufETH as a bond and deposits at least 28 VTs.  

In exchange, they are allocated 32 ETH to run a validator, and are entitled to 100% of the Proof of Stake (PoS) rewards they produce over as many days as VTs they've deposited. In other words, NoOps pay pufETH holders ETH upfront to run a validator.

:::tip
For stakers, this means the value of pufETH increases every time a VT is minted. 
:::

Each VT represents one validator-day of expected Proof of Stake (PoS) rewards. The payments to mint VTs directly pay pufETH holders, creating strong growth dynamics. This mechanism is favorable for stakers, capital efficient, and incentivizes for optimal NoOp performance. Upon exiting a validator, the number of locked VT tokens, corresponding to the number of days the validator was active, will be burned and the remaining locked VTs are released back to the NoOp as a refund.



### Why? ~ NoOp Incentives
The success of an LSP largely depends upon the performance of its NoOps. Traditionally, having NoOps deposit collateral has been a method to ensure alignment with the protocol's objectives. The logic is simple: with a financial stake in play, NoOps have a deterrent against going offline, suffering slashing penalties, or engaging in nefarious activities like MEV theft ("*rug-pooling*"). If they were to engage in such activities, they'd stand to lose their collateral.

While this collateral approach discourages penalties, it does not strongly incentivize performance. For instance, a "lazy" NoOp could alternate between being online and offline, ensuring their validator balance stays at 32 ETH. This strategy results in no reward generation for the LSP, but also no collateral loss for the NoOp.

Puffer changes this incentive landscape through the use of VTs. Since NoOps have already purchased VTs, they stand to gain nothing from underperforming since they cannot recoup this initial payment, even if they maintain their validator balance. Thus, for a NoOp to turn a profit, they must perform at least on par with the average validator. Those who excel can earn even more.

While VTs provide strong disincentives for slashing, to further protect the staker's ETH, Puffer requires a [1 or 2 ETH](/reference/faq#%EF%B8%8F-how-many-eth-do-i-need-to-run-a-puffer-node) bond and for NoOps to use [anti-slashing technology](/technology/secure-signer) for defense-in-depth.

This new approach neatly tackles two traditional problems:
- *Rug-pooling*: With NoOps entitled to all the MEV they generate, there's no longer a need to police or penalize them for rug-pooling.
- *Lazy NoOps*: Since stakers get a proxy for PoS rewards upfront via minting VTs, they aren't adversely affected if a NoOp underperforms.

### Requirements
For PoS stability and NoOp incentive alignment, [1 or 2 ETH](/reference/faq#%EF%B8%8F-how-many-eth-do-i-need-to-run-a-puffer-node) worth of pufETH and a minimum of 28 VTs are required to be deposited at registration time. Their duration begins at the moment their validator is activated on the beacon chain, and each VT represents 1 day or 255 epochs.

Assuming they deposited 28 VTs, after 28 days of validating, the NoOp's validator will be automatically ejected, its 32 ETH returned to the protocol, and bond returned. If they wish to extend their duration, NoOps can deposit additional VTs at any time. Validators with unconsumed VTs (e.g deposited 100 VTs) that exit after the 28 days will be refunded (e.g., 72 VTs).


### Pricing Validator Tickets
During Puffer's Phase 1, VT prices will be posted by the [Guardians](/protocol/guardians#). The prices are calculated with the following formula, where $R_{expected}$ is the expected daily validator revenue based on historical consensus and execution rewards, and $D$ is a discount rate:

<div style={{textAlign: 'center'}}>

$P_{VT} = R_{expected} * (1 - D)$
</div>

**Example**
- Assuming the expected [consensus](/reference/glossary#consensus-rewards) and [execution](/reference/glossary#execution-rewards) rewards from running a validator for a year is $5\% * 32 = 1.6$ ETH. 
- A simplified $R_{expected}$ can be calculated as $1.6 / 365 = 0.00438$ ETH.
- Given a discount $D = 10\%$, the VT price is $P_{VT} = 0.00438 * 90\% = 0.00394$ ETH.
- A NoOp that pays $P_{VT}$ is expected to earn on average $R_{expected} = 0.00438$ ETH by consuming the VT to run a validator for a day.
- The result is $0.00438 * 10\% = 0.000438$ ETH profit. Note, the $R_{expected}$ depends on factors like the NoOp's performance, validator set size, and MEV conditions.


### Pros and Cons
**Pros**:
- **Capital Efficiency**: By requiring just $1$ ETH collateral and VTs, NoOps can get started with less than 2 ETH, which is significantly less than traditional LSPs. This capital-efficient approach means that barriers to entry are reduced, enabling a broader range of participants to contribute to securing the network without having to commit a full 32 ETH.
 
- **Fuels Growth**: The VT model is a game-changer for LSPs. It ensures that the LSP continues to earn rewards *even when the validator queue is long*. In traditional setups, lengthy validator queues could stifle an LSP's ability to grow, but with VTs, this obstacle is greatly diminished.
 
- **No More Rug-Pooling Oversight**: The previous need to constantly watch over and penalize rug-pooling activities added overhead and complexity that may only be solvable with in-protocol solutions like [MEV-Burn](https://ethresear.ch/t/burning-mev-through-block-proposer-auctions/14029). With NoOps entitled to 100% of the execution rewards they generate, this oversight becomes unnecessary, simplifying operations.
 
- **Addresses Lazy NoOps**: Traditional bonded models do not fully disincentivize NoOps from denying the pool rewards by going offline frequently. With VTs, NoOps are naturally incentivized to perform their best since their upfront payment cannot be recouped through subpar performance.
 
- **Slash Resistant**: 
With a combination of just 1 ETH collateral, favorable NoOp incentives, and Puffer's [anti-slashing technology](/technology/secure-signer), the risk of staker ETH getting penalized from an irresponsible NoOp is considerably reduced.
 
- **MEV Lottery**: NoOps can participate in the MEV lottery, an attractive proposition for many, without having to lock up 32 ETH. This opens the door for more NoOps to benefit from potential MEV gains, further incentivizing participation.

**Cons**
- **Novelty**: VTs introduce a new paradigm in the staking industry. While innovation can be beneficial, it also comes with the challenge of gaining trust amidst established practices.

- **Increased Capital**: VTs requires more upfront ETH compared to just having a bond. Yet, this concern is substantially offset as Puffer offers the lowest bond ($1$ ETH) among all permissionless LSPs, making the added ETH requirement relatively small in the overall context.

- **Pricing VTs**: Although PoS rewards maintain stability, they are influenced by market dynamics (execution rewards) and fluctuations in the validator set size (consensus rewards). However, since VTs are equal to a validator-day and are repriced daily, volatility is mitigated. Additionally, VTs are liquid and can be traded on the secondary market.