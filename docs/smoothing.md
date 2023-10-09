---
title: Smoothing Commitments
slug: /protocol/smoothing-commitments
---

:::info 
Smoothing Commitments are Puffer's novel reframing of how validator collateral works.
:::


### The status quo
todo

### What is it?
**Smoothing Commitments** completely *eliminate locking a bond*. Instead, when registering a validator, the NoOp pays a non-refundable ETH amount called a smoothing commitment. In exchange, they are allocated 32 ETH to run a validator and they are entitled to 100% of the validator rewards they over the next year. The smoothing commitments, representing a year of expected Proof of Stake rewards, are paid to the protocol to increase the value of pufETH, creating strong growth incentives. This mechanism is favorable for stakers, capital efficient, and incentivizes for optimal NoOp performance.

:::tip
For stakers, this means the value of pufETH increases every time a new NoOp deploys a validator on Puffer. 
:::

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

### NoOp Incentives 
There is no longer a need for a bond because the NoOp has already paid the pool ETH upfront. To make a profit, the NoOp must to earn back more than their original smoothing commitment. This incentivizes them to maximize for long-term good performance. If they go offline or are slashed, they will not be able to earn back their smoothing commitment and will end the year net-negative.

### Pros and Cons
todo