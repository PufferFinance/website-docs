---
sidebar_position: 3
title: MEV-Smoothing
---
## Maximal Extractable Value (MEV)

[MEV](https://ethereum.org/en/developers/docs/mev/) provides for an unfair user experience, can introduce consensus instability via block re-organizations, and serves a cartelizing force as MEV extraction benefits from economies of scale. MEV exhibits a tragedy of the commons, where despite its negative externalities, partaking in MEV provides a competitive advantage over abstaining. Thus to remain competitive, validators will extract MEV, but ultimately larger staking operations will perform the best.

For example, a pool with 10 times more validators will have 10 times the opportunities to extract MEV and optimize this [process](https://ethresear.ch/t/proposer-block-builder-separation-friendly-fee-market-designs/9725/6). Additionally, some MEV strategies require proposing consecutive blocks, which is statistically unlikely unless you control many validators ($\frac{k}{N}^i$ , where $k$ is the validators controlled out of $N$ and $i$ the number of consecutive blocks).

## MEV-Boost
To mitigate the effects of economies of scale, [Proposer-Builder Separation (PBS)](https://ethresear.ch/t/proposer-block-builder-separation-friendly-fee-market-designs/9725/6) was proposed and implementations like [MEV-Boost](https://github.com/flashbots/mev-boost) were built to help democratize access to MEV opportunities to all validators. MEV-Boost is a middleware software that interacts with consensus clients, exposing validators to a marketplace of MEV-optimized blocks. Builders bid to have their blocks proposed by validators in exchange for the block rewards. By decoupling block building from proposing, validators are no longer required to specialize in MEV extraction to remain competitive, lowering the barrier of entry and promoting decentralization. For example, efficient MEV extraction requires compute requirements beyond what is expected for validators, barring entry for many solo validators.

Block builders benefit from economies of scale and are prone to cartelization, but do not pose the same threat to Ethereum since validators ultimately control the blockspace.

## MEV-Smoothing
In-protocol MEV-smoothing has been [proposed](https://ethresear.ch/t/committee-driven-mev-smoothing/10408) with the goal of reducing the variance of MEV distribution to as close to uniform as possible but remains in the research phase. Puffer's pDVT groups socialize the execution rewards earned from using MEV-Boost back to the rest of the pool, allowing for MEV-smoothing within the Puffer Pool.

We refer to the lever that controls the socialization of execution rewards as the Smoothing Factor ($S$, where $0 \le S \le 1$). A smoothing factor of $S = 1.0$ will socialize all execution rewards to the Puffer Pool, while a smoothing factor of $S = 0.0$ will return all execution rewards to the pDVT group that proposed the block.

We believe that implementing MEV-smoothing is crucial for solo validators to have a fair opportunity to compete in the Puffer Pool, especially in the presence of wealthy institutional Stakers that have control over many validator keys. Additionally, MEV-smoothing contributes to censorship resistance as solo validators can participate with non-dominant MEV strategies while still earning competitive revenue.