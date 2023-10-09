---
title: Smoothing Commitments
slug: /protocol/smoothing-commitments
---

:::info 
Smoothing Commitments are Puffer's novel reframing of how validator collateral works.
:::


### The status quo
Current liquid staking protocols (LSPs) follow two NoOp paradigms: 
- **unbonded**: LSPs with unbonded NoOps place a high degree of trust in the NoOps since they are not required to lock any collateral. The LSP enjoys greater capital efficiency and growth but the tradeoff is that validator penalties will directly hurt the LST. This approach favors permissioned validators and is proving problematic for Ethereum.
- **bonded**: Bonded NoOps can be untrusted since they lock collateral for the entire duration that they operate a validator. After exiting the valiator, their bond minus any accrued penalties is returned. This is undoubtedly better for Ethereum since it allows for permissionless LSPs. Additionally, staked ETH is better protected as validator penalties are deducted from the NoOps' collateral before hurting the LST. The tradeoff is that requiring collateral hurts the LST's capital efficiency and thus the growth of the LSP. For example, while requiring a 16 ETH bond provides excellent slash protection, it limits NoOp participation to those with multiples of 16 ETH.

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
todo

- fast execution rewards
- no rug pooling policing
- avoid validator queue
- mitigates lazy noops (lock 2 eth then dont do anything for years -> essentially holds the eth hostage with no penalty to themself except missed opportunity cost)
- 