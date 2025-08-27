---
title: Ethereum Proof of Stake
slug: /reference/ethereum-hard-forks
---

## The Merge

In September 2022, Ethereum officially merged its Beacon Chain with its proof-of-work chain, upgrading
its consensus layer to proof-of-stake (PoS). Validators replaced miners as the actors participating in
the consensus protocol. This transition shifted the limiting resource from electricity and computational
power to pure capital (32 ETH), significantly reducing Ethereum's energy footprint.

The core principle of PoS is that validators with 32 ETH staked (worth approximately $60,000 USD at the time of writing) are incentivized to perform their consensus duties honestly or risk forfeiting their collateral or bond. The high capital requirement should make it infeasible for a centralized entity to acquire more than two-thirds of the validator set (a critical consensus threshold).

Validators are incentivized to participate through consensus and execution rewards. Consensus rewards are earned by performing duties like attesting to the validity of proposed blocks and vary depending on factors like the validator's performance. Execution rewards are earned when the validator is randomly selected to propose a new block.

To ensure that validators perform honestly and diligently, Ethereum PoS enforces penalties. In the event of minor offenses (e.g., going offline), validators are penalized amounts equal to the rewards they would have received if they operated correctly.

In more serious cases, validators may be slashed, which removes them from the validator network and burns some or all of their bond. Slashing happens in response to [three specific offenses](slash.md), all of which cause validators to equivocate or send conflicting messages that cause disagreements and disarray in the consensus protocol.

## The Shapella Update

The Merge succeeded in consolidating the main chain and Beacon Chain, but this was just a milestone in the larger plan to transition to PoS safely. Additional functionality will be added in future forks.

With the [Shanghai/Capella](https://notes.ethereum.org/@launchpad/withdrawals-faq) update, validators can now withdraw their ETH entirely. Additionally, validators enjoy more liquidity as consensus rewards in excess of 32 ETH will be partially withdrawn to an execution layer address approximately weekly.
