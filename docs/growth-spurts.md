---
title: Growth Spurts
slug: /protocol/growth-spurts
---

## Motivation

Growth Spurts are a unique mechanism to the Puffer Protocol. They essentially go hand-in-hand with [Smoothing Commitments](./smoothing.md) to ensure the protcol is safe and fair to all participants. Since stakers will realize gains on their pufETH tokens immediately upon NodeOps paying their Smoothing Commitments, this can cause a race to stake ETH before all NoOps have joined. For example, imagine a scenario in which all NoOps join immediately on day one. Then stakers who stake ETH after all NoOps have joined would not see their pufETH appreciate, since there would be no new NoOps paying Smoothing Commitments.

## What is a Growth Spurt?

Growth Spurts address this issue by separating the period where NoOps join into 1 week intervals, which we call "Growth Spurts". We also set a maximum number of NoOps that can join within each Growth Spurt. Finally, we set a maximum number of ETH that can be staked during each Growth Spurt to ensure the rewards from the Smoothing Commitments paid by newly joining NoOps are not heavily diluted among Stakers.

At the end of each Growth Spurt, the Guardians will publish the total amount of ETH backing pufETH (as a result of gaining ETH rewards via protocol operations), setting the newly appreciated pufETH price. Guardians will also publish merkle trees to indicate the rewards earned by network participants. Each participant will be responsible for submitting a merkle proof to obtain their rewards.

## Proof of Reserves

In order to calculate the amount of ETH that is backing pufETH, we perform an offchain calculation. We add up all the eth locked in validators, full withdrawal eth to be returned to the pool, AVS rewards owed to the pool, and the balances of the PufferPool and WithdrawalPool. Initially, this calculation will be performed by the Guardians, but will eventually be replaced with a ZKP after the Deneb upgrade adds EIP-4788. 

## Visualization
<div style={{textAlign: 'center'}}>

![pufferarch](/img/Puffer_Growth_Spurt.png)
</div>