---
sidebar_position: 4
title: Ejection Rule
---

The `ejection rule` is Puffer's mechanism to protect Stakers' ETH from underperforming NoOps. 

## Motivation
The yield of the Puffer Pool relies on the performance of the Node Operators (NoOps). If a NoOp goes offline, it will not generate consensus rewards. Additionally, while offline, a NoOp will lose its Puffer Pod approximately as much ETH as it would have made if they were active. 

While all penalized ETH is deducted from the NoOp's 2 ETH collateral (protecting Staker ETH), the Puffer Pod and the Puffer Pool's overall yield will be impacted as they miss out on the rewards that would have been generated if the NoOp had remained online.

Ethereum PoS will automatically eject validators whose balances fall from 32 ETH to 16 ETH. If a validator goes offline, it could take months to years to reach this point. If this happened in Puffer, by the time the Puffer Pod reached 16 ETH, the NoOp would have lost 2 ETH and the Stakers 14 ETH. This unacceptable risk for Stakers motivates the need for an ejection rule.

## The limitations of Ethereum withdrawals
In the future, it is expected that smart contracts will be able to trigger validator withdrawals. Unfortunately, until this is included in the PoS specs, the only other way for a NoOp to exit is to sign a `VoluntaryExit` message with their validator key. 

## Pre-signed VoluntaryExits
VoluntaryExit messages specify the first epoch number where the validator agrees to exit. Each epoch lasts 6.4 minutes, so it is possible to accurately determine when a VoluntaryExit message will become valid. For example, $\frac{60*24*30*6}{6.4} = 40500$ is the approximate number of epochs that will elapse in six months. 

This is the basis of Puffer's ejection rule. When a NoOp registers, they must publish a signed VoluntaryExit message set $N$ epochs in the future. After $N$ epochs expire, anyone can submit the VoluntaryExit to eject the NoOp. 

## Implications
The number $N$ will ultimately be set by the [Puffer DAO](arch/governance.md), but there are important considerations:
> - $N$ is long enough to minimize switching costs for NoOps.
> - $N$ is short enough to minimize the amount of ETH lost if a NoOp is completely inactive.

The maximum value for $N$ should be chosen so that after $N$ epochs, a NoOp's bond will decrease by $L\leq1$ ETH. After the $N$th epoch, the validator will pay back the pool up to $L$ ETH to account for any missed profit by the NoOp.

Example:
> - NoOp registers at epoch $K$ and signs a VoluntaryExit for epoch $K+N$.
> - NoOp goes offline for $N$ blocks.
> - Puffer Pod's balance drops to 31.5 ETH.
> - Alice submits NoOp VoluntaryExit message.
> - Puffer Pod withdrawals returning 31.5 ETH to the pool.
> - NoOp receives 1.0 pufETH from the original 2.0 locked pufETH.
> - 0.5 pufETH burned, and ETH is returned to the pool.

As a result, the 0.5 ETH lost due to inactivity is removed from the NoOp's bond and an additional 0.5 ETH of the bond is rewarded to the pool to account for the missed profit. 