---
title: Rewards
slug: /protocol/rewards
---

:::info
The stakers that hold pufETH can earn more than to traditional liquid staking tokens (LSTs) due to the inclusion of restaking rewards.
:::


pufETH is a reward-bearing ERC20 token akin to [Compound's cToken](https://docs.compound.finance/v2/ctokens/#ctokens), which is optimal regarding DeFi compatibility. As the protocol receives smoothing commitments and generates restaking rewards, the amount of ETH backing pufETH increases, increasing the conversion rate between the two and the value of pufETH. Holding liquid pufETH allows one to earn rewards over time while still being able to participate in DeFi. 


### Staker Rewards
Stakers deposit ETH at the PufferPool contract to mint pufETH. At the protocol's inception, the conversion rate is one-to-one, but assuming the protocol performs well, i.e., accrues more rewards than penalties, the conversion rate will value pufETH higher than ETH. Thus stakers can expect their pufETH's value to increase over time.

**Smoothing Commitments**: Smoothing commitments are paid to the protocol as a requirement for NoOps to join. As these are paid, the value of the pufETH LST appreciates proportionally.

**Reward Distribution**: NoOps receive 100% of all rewards that they accrue through Proof of Stake validating ([consensus rewards](/reference/glossary#consensus-rewards) and [execution rewards](/reference/glossary#execution-rewards)). Restaking rewards and smoothing commitments are primarily directed towards backing the value of pufETH. A small portion of these rewards are dedicated to maintaining the protocol. These funds are allocated to: 
1. PufferPool contract to allow new validators to be deployed by NoOps
2. WithdrawalPool contract to allow pufETH holders to exchange for ETH
3. [Guardians](/protocol/guardians) to incentivize honest behavior and cover gas-fees
4. Protocol Treasury for governance token utility and funding ecosystem grants

The ratios for distribution to *1)* and *2)* is determined by governance

**Full Withdrawal ETH Distribution**: When NoOps wish to stop operating validators or their smoothing commitment expires, they can trigger a full withdrawal. In this case, their validator's remaining ETH balance is distributed back to the PufferPool contract and the WithdrawalPool contract according to a ratio determined by governance.

### Examples
**Staker POV**:

At the protocol’s inception, Bob stakes $10$ ETH and receives $10$ pufETH. Then, after some time, the protocol earns $2$ ETH of rewards from smoothing commitments and restaking. Now Bob’s $10$ pufETH is backed by $12$ ETH, making the conversion rate $1.2$ ETH per pufETH. 

Assuming Charlie decides to stake $1$ ETH, he would earn $1 / 1.2 = 0.83$ pufETH due to the increased conversion rate. Since Charlie only minted instead of adding rewards, the conversion rate remains at $13 / 10.83 = 1.2$ ETH per pufETH. 

Bob can redeem his $10$ pufETH for $12$ ETH, given there is enough liquidity in the WithdrawalPool.


**NoOp POV**:

Alice wishes to operate as a NoOp, so she pays a smoothing commitment of $1.44$ ETH, and receives $32$ ETH from the protocol to operate her validator. Over the course of one year, through consensus and execution rewards, she is expected to make $1.6$ ETH total, for a profit of $0.16$ ETH, or $0.16 / 1.44 = 11.11\%$ APR. Additionally, since she is in a [restaking strategy](/protocol/strategies#strategy-participants-), her validator’s ETH is delegated to another NoOp running an AVS that generates $32 * 2\% = 0.64$ ETH additional rewards. 

This ETH will be split among Alice, fellow NoOps in her strategy, the PufferPool, WithdrawalPool, Guardians, and the Protocol Treasury. Assuming Alice receives $0.056$ ETH per year for delegating, her total yearly profit will be $0.16 + 0.056 = 0.216$ ETH, for a total $0.216 / 1.44 = 15\%$ APR. Alice may withdraw her rewards after each weekly [growth spurt](/protocol/growth-spurts), meaning approximately $0.216 / 52 = 0.004$ ETH will be liquid and available for redemption each week. 
