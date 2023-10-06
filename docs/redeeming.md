---
title: Redeeming ETH
slug: /stakers/redeeming-eth
---

TODO:
- explain the process visually
- explain liquidity is limited by WithdrawalPool balance
- link to staking frontend

### Redeeming **pufETH for eth**

- The `WithdrawalPool` will replenish with eth from smoothing commitments and full withdrawals. For gas reasons, we want to avoid splitting eth between the PufferPool and WithdrawalPool per pufETH minting. The DAO-governed variable `PoolGrowthFactor` will determine this. For example, if `PoolGrowthFactor = 90%`, then when eth is being transferred to the PufferPool, 10% of it is routed to the WithdrawalPool.
- pufETH holders can burn to redeem eth whenever there is liquidity in the WithdrawalPool