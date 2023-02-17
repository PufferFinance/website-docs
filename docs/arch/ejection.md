---
sidebar_position: 4
title: Ejections
---

The yield of the Puffer Pool relies on the performance of the Node Operators (NoOps). If a NoOp goes offline, they will lose approximately as much ETH as they would have made if they were online and performing their duties. All penalized ETH comes from the NoOp’s collateral, protecting Stakers ETH. However, by going offline, the NoOp is denying the pool rewards, reducing the pool's potential yield.

The purpose of the `ejection rule` is to include a mechanism to incentivize good NoOp performance.


To further incentivize good performance, the pool has a mechanism to penalize NoOps who go offline. Anyone can trigger an ejection if a Pod’s balance drops below 31.99 ETH (after ≈ 4.5 days of inactivity). The ejector is rewarded 0.1 ETH from the NoOp’s collateral, and the Pod is withdrawn from the validator set. Ejections will distribute the NoOp’s accrued LSD token rewards to the pool to further motivate performance.

