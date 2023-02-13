---
sidebar_position: 3
title: MEV Smooothing
---

In-protocol MEV smoothing has been proposed with the goal of reducing the variance of [MEV distribution](https://ethresear.ch/t/committee-driven-mev-smoothing/10408)
to as close to uniform as possible but remains in the research phase. Secure-Signer can
be extended to enforce that NoOps use MEV-Boost and a portion of the execution rewards are distributed
back to the pool. We refer to the lever that controls the socialization of execution rewards as
the Smoothing Factor (S, where 0 ≤ S ≤ 1.). A smoothing factor of S = 1.0 will socialize all execution
rewards to the stake pool, while a smoothing factor of S = 0.0 will return all execution rewards to the
NoOp that proposed the block.

We believe that implementing MEV smoothing is crucial for solo validators to have a fair opportunity
to compete in the Puffer Pool, especially in the presence of wealthy institutional Stakers that have
control over many validator keys. Additionally, MEV smoothing contributes to censorship resistance
as solo validators can participate with non-dominant MEV strategies while still earning competitive
revenue.
