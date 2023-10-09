---
title: Smoothing Commitments
slug: /protocol/smoothing-commitments
---

:::info 
Smoothing Commitments are Puffer's novel reframing of how validator collateral works.
:::


### The status quo
Liquid Staking Protocols (LSPs) often adopt one of two paradigms for their NoOps:

- **Unbonded**: In this approach, LSPs don't require NoOps to lock collateral. This model boosts capital efficiency and promotes growth for the LSP. However, there's a downside: validator penalties directly affect the LST, making it vulnerable. Also to mitigate risk this model requires permissioned NoOps, which presents challenges for Ethereum's decentralized ethos.

- **Bonded**: Here, NoOps lock collateral throughout their validator operation duration. Upon validator exit, they receive their bond back, adjusted for any penalties. This model allows for ethos-aligned, permissionless LSPs since NoOps can be untrusted as validator penalties are deducted from their collateral. However, this safety comes with a cost – it impacts the LSP's capital efficiency and growth potential. For instance, a 16 ETH bond requirement provides robust protection against slashing but also limits participation to those with at least 16 ETH

### What is it?
**Smoothing Commitments** completely *eliminate locking a bond*. Instead, when registering a validator, the NoOp pays a non-refundable ETH amount called a smoothing commitment. In exchange, they are allocated 32 ETH to run a validator and they are entitled to 100% of the validator rewards they over the next year. The smoothing commitments, representing a year of expected Proof of Stake rewards, are paid to the protocol to increase the value of pufETH, creating strong growth incentives. This mechanism is favorable for stakers, capital efficient, and incentivizes for optimal NoOp performance.

:::tip
For stakers, this means the value of pufETH increases every time a new NoOp deploys a validator on Puffer. 
:::


### NoOp Incentives 
The success of an LSP largely depends upon the performance of its NoOps. Traditionally, having NoOps deposit collateral has been a method to ensure alignment with the protocol's objectives. The logic is simple: with a financial stake in play, NoOps have a deterrent against going offline, suffering slashing penalties, or engaging in nefarious activities like MEV theft ("rug-pooling"). If they were to engage in such activities, they'd stand to lose their collateral.

However, while this collateral approach serves as a disincentive against penalties, it does not necessarily promote exceptional performance. For instance, a 'lazy' NoOp could alternate between being online and offline, ensuring their validator balance stays at 32 ETH. This strategy results in no reward generation for the LSP, but also no collateral loss for the NoOp.

Puffer's changes this incentive landscape by having NoOps pay an upfront, non-refundable smoothing commitment, eliminating the need for locked collateral. They stand to gain nothing from underperforming since they cannot recoup this initial payment, even if they maintain their validator balance. Thus, for a NoOp to turn a profit, they must perform at least on par with the average validator. Those who excel can earn even more.

This new approach neatly tackles two traditional problems:
- Rug-pooling: With NoOps entitled to all the execution rewards they generate, there's no longer a need to police or penalize them for rug-pooling.
- Lazy NoOps: Since the LSP gets the staking rewards from NoOps upfront via the smoothing commitment, the protocol isn't adversely affected if a NoOp underperforms.


### Calculating smoothing commitments
The following calculates a smoothing commitment $S$:

<div style={{textAlign: 'center'}}>

$S = V_{expected} * (1 - R_{NoOp})$
</div>

The expected value $V_{expected}$ of running a validator for a year is the average yearly consensus and execution rewards (e.g., 5% of 32 ETH). $R_{NoOp}$ is a NoOp’s commission rate. For example, if $R_{NoOp} = 0.1 = 10\%$, the NoOp’s smoothing commitment will be 90% of the expected validator rewards, paid upfront. Then as they operate the validator, they are entitled to receive 100% of the consensus and execution rewards.


### Example
<div style={{textAlign: 'center'}}>

![PufferFlywheel](/img/smoothing-commitment.png)
</div>

- The graph assumes $V_{expected} = 32 * 5\% = 1.60$ ETH, meaning a validator will make $1.60$ ETH per year on average if their consensus and execution rewards totaled $5\%$ yield. 

- If the protocol offered a NoOp commission rate of $R_{NoOp} = 0.1 = 10\%$, NoOps would pay $S = 1.60 * (1 - 0.1) = 1.44$ ETH as smoothing commitments. 

- This entitles the NoOp to $100\%$ of their validators expected rewards: $V_{expected} = 1.60$ ETH. 

- An honest NoOp will earn on average $1.60 - 1.44 = 0.16$ ETH after a year of service for an APR of $0.16/1.44=11.11\%$

- From the protocol's POV, they earn an immediate $1.44/32=4.5\%$ yield on the 32 ETH provisioned to the NoOp.



### Pros and Cons
**Pros**:
- **Capital Efficiency**: By requiring just a smoothing commitment which is significantly less than traditional models, NoOps can get started with less than 2 ETH. This capital-efficient approach means that barriers to entry are reduced, enabling a broader range of participants to contribute to securing the network without having to commit a full 32 ETH.
 
- **Fuels Growth**: The smoothing commitment model is a game-changer for LSPs. It ensures that the LSP continues to earn rewards even when the validator queue is long. In traditional setups, lengthy validator queues could stifle an LSP's ability to grow, but with smoothing commitments, this obstacle is greatly diminished.
 
- **No More Rug-Pooling Oversight**: The previous need to constantly watch over and penalize rug-pooling activities added overhead and complexity. With NoOps entitled to 100% of the execution rewards they generate, this oversight becomes unnecessary, simplifying operations.
 
- **Addresses Lazy NoOps**: Traditional collateral-based models faced the challenge of NoOps who would strategically stay offline to avoid penalties but also not generate rewards. With smoothing commitments, NoOps are naturally incentivized to perform their best since their upfront payment cannot be recouped through subpar performance.
 
- **Simplicity**: Reduced complexity often translates to reduced potential points of failure. By simplifying the incentive mechanism and removing the need for locked collateral, the protocol can potentially reduce smart contract risk. This simplicity is not only good for operational efficiency but also for security.
 
- **Incentivizes Long-Term Honest NoOp Behavior**: The non-refundable nature of the smoothing commitment ensures that NoOps are motivated to act honestly and optimally over the long term. To turn a profit, they must consistently perform well, helping to secure staker ETH.
 
- **MEV Lottery**: NoOps can participate in the MEV lottery, an attractive proposition for many, without having to lock up 32 ETH. This opens the door for more NoOps to benefit from potential MEV gains, further incentivizing participation.

**Cons**
- **Novelty**: Smoothing commitments introduce a new paradigm in the staking industry. While innovation can be beneficial, it also comes with the challenge of gaining trust amidst established practices.

- **Non-Refundable**: NoOps must be aware of the long-term nature of their commitment. The smoothing commitment is non-refundable, meaning that if a NoOp needs to exit prematurely for any reason, they lose their upfront payment. This can be discouraging, especially if unexpected issues arise.

- **Too-Fast Growth**: While growth is generally positive, uncontrolled or rapid growth can introduce new challenges. With smoothing commitments representing a full year's worth of rewards, there's a risk that the pool could grow too quickly, which is why Puffer introduces the concept of [Growth Spurts](/protocol/growth-spurts).