---
title: Growth Spurts
slug: /protocol/growth-spurts
---

## Motivation

Growth Spurts are a unique mechanism to the Puffer Protocol. They essentially go hand-in-hand with [Smoothing Commitments](./smoothing.md) to ensure the protcol is safe and fair to all participants. Since stakers will realize gains on their pufETH tokens immediately upon NodeOps paying their Smoothing Commitments, this can cause a race to stake ETH before all NoOps have joined. For example, imagine a scenario in which all NoOps join immediately on day one. Then stakers who stake ETH after all NoOps have joined would not see their pufETH appreciate, since there would be no new NoOps paying Smoothing Commitments.

## What is a Growth Spurt?

Adressing the above issue, the protocol is divided into weekly intervals called Growth Spurts that limit the number of NoOps that can join and pufETH that can be minted. Capping the number of NoOps helps to smooth rewards across more Growth Spurts to provide this yield to the most stakers. Limiting the amount of pufETH also helps ensure that smoothing commitments are not heavily diluted among stakers. Ultimately, this mechanism helps the protocol grow and mature at a safer pace.

The end of a Growth Spurt makes a new chapter for the protocol.There are two important actions that take place: 
1. pufETH is repriced
2. Withdrawals are enabled 

The Guardians will publish the total amount of ETH backing pufETH (as a result of gaining ETH rewards via protocol operations), setting the newly appreciated pufETH price. Guardians will also publish merkle trees to indicate the rewards earned by network participants. Each participant will be responsible for submitting a merkle proof to obtain their rewards.

## Proof of Reserves

In order to calculate the amount of ETH that is backing pufETH, we perform an offchain calculation. We add up all the eth locked in validators, full withdrawal eth to be returned to the pool, AVS rewards owed to the pool, and the balances of the PufferPool and WithdrawalPool. Initially, this calculation will be performed by the Guardians, but will eventually be replaced with a ZKP after the Deneb upgrade adds EIP-4788. 

## Visualization
<div style={{textAlign: 'center'}}>

![pufferarch](/img/Puffer_Growth_Spurt.png)
</div>

**Explanation**

1. Assume Stakers stake exactly 320 ETH during Growth Spurt 1, minting 320 pufETH. Thus the initial conversion rate between pufETH and ETH is 1.0 (1 pufETH = 1 ETH)
2. Say 10 NoOps join throughout the week and each pay their Smoothing Commitments of 1.44 ETH each, adding 14.4 ETH total to the protocol. Now there is 334.4 ETH, and 320 pufETH outstanding
3. At the end of the Growth Spurt week, the guardians will update the conversion rate to 1.045 ETH per 1 pufETH (334.4 / 320)
4. NoOps will be eligible to redeem all of their earned consensus rewards and MEV rewards, upon providing proof of such rewards to the protocol
5. Stakers may now redeem 1.045 ETH for each of their original 1 ETH staked at the beginning of Growth Spurt 1
6. Note that this cycle of Growth Spurts will continue, growing the value of pufETH!