---
sidebar_position: 3
title: MEV
---

[MEV](https://ethereum.org/en/developers/docs/mev/) provides for an unfair user experience, can introduce consensus instability via block re-organizations,
and serves a cartelizing force as MEV extraction benefits from economies of scale. MEV exhibits
a tragedy of the commons, where despite its negative externalities, partaking in MEV provides a
competitive advantage over abstaining. Thus to remain competitive, validators will extract MEV,
but ultimately larger staking operations will perform the best.

For example, a pool with 10 times
more validators will have 10 times the opportunities to extract MEV and optimize this [process](https://ethresear.ch/t/proposer-block-builder-separation-friendly-fee-market-designs/9725/6).
Additionally, some MEV strategies require proposing consecutive blocks, which is statistically unlikely
unless you control many validators ($k/Ni$ , where k is the validators controlled out of N and i the number
of consecutive blocks).
