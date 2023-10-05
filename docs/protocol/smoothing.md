---
title: Smoothing Commitments
slug: /protocol/smoothing-commitments
---

> `Smoothing Commitment`: the required eth that the NoOp must pay the pool upfront to receive 100% of staking rewards for the predefined duration
> 

Puffer introduces a novel cryptoeconomic mechanism for NoOp bonds, known as a smoothing commitment. For stakers, this means the value of pufETH increases every time a new NoOp deploys a validator on Puffer. When registering a validator, the NoOp pays a non-refundable smoothing commitment for a predefined staking duration. In exchange, they are allocated 32 eth to run a validator and they are entitled to 100% of the validator rewards they generate over the duration. The smoothing commitments, representing months of expected validator rewards, are paid to the pool to increase the value of pufETH, creating strong growth incentives. This mechanism is favorable for stakers, capital efficient, and incentivizes for optimal NoOp performance.

Smoothing completely *eliminates locking a bond*. Instead, a NoOp will pay the pool a non-refundable “smoothing commitment” $`S`$ to get the rights to operate a 32 eth, pool-funded validator and keep 100% of the rewards they generate. The expected value $`V_{expected}`$ of running a validator for a year is the average yearly consensus and execution rewards (e.g., 5% of 32 eth). We calculate $`S = V_{expected} * (1 - R_{NoOp})`$, where $`R_{NoOp}`$ is a NoOp’s commission rate. For example, if $`R_{NoOp} = 0.1 = 10\%`$, the NoOp’s smoothing commitment will be 90% of the expected validator rewards, paid upfront. Then as they operate the validator, they are entitled to receive 100% of the generated rewards.

There is no longer a need for a bond because the NoOp has already paid the pool eth upfront. Earning revenue requires the NoOp to earn back more than their smoothing commitment. This incentivizes them to maximize for good performance. If they go offline or get slashed, they will not be able to earn back their smoothing commitment and will end the year net-negative. As long as the NoOp’s bond is greater than 1 eth and there’s a way to eject validators, the pool will be protected from loss.