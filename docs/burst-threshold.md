---
title: Burst Threshold
slug: /protocol/burst-threshold
---

:::info
The Burst Threshold is Puffer's commitment to Ethereum's Ethos.
:::


### Burst Threshold

Puffer is [committed to self-capping](https://twitter.com/puffer_finance/status/1697817894900711700?s=20) its validator marketshare to 22% of Ethereum’s validator set, which we refer to as the protocol's *Burst Threshold*. Instead of abruptly pausing staking and NoOp registration once the burst threshold is reached, Puffer introduces a mechanism to organically reduce staker demand as the protocol reaches the threshold.

As the protocol reaches 22%, the amount of smoothing commitment ETH that is routed to the treasury will increase up to 100%. This reshuffling will reduce staker demand as new stakers will no longer receive from smoothing commitment rewards. With no demand to mint pufETH, the protocol will run out of new ETH to provision to NoOps, causing the protocol to stop growing. 

Existing stakers will continue to earn restaking rewards as the existing NoOps operate AVSs. Additionally, existing NoOps can continue running their validators until their smoothing commitments expire.

This pledge is critical to ensure that the Puffer Pool never breaches the [dangerous consensus threshold of 33%](https://twitter.com/dannyryan/status/1688644951230267392?s=46&t=bsdBaPIHlTHEWDDdVUJW4g), which threatens the stability of Ethereum. We firmly believe that the burst threshold must be included from day one rather than after the protocol is profitable.