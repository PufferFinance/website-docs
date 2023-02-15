---
sidebar_position: 2
title: Ethereum Merge and Shanghai Update
---

## The Merge

In September 2022, Ethereum officially merged its Beacon Chain with its proof-of-work chain, upgrading
its consensus layer to proof-of-stake (PoS). Validators replaced miners as the actors participating in
the consensus protocol. This transition shifted the limiting resource from electricity and computational
power to pure capital (32 ETH), significantly reducing Ethereum’s energy footprint.

The core principle of PoS is that validators with thirty-two ETH staked (worth approximately
$50,000 USD at the time of writing) are incentivized to perform their consensus duties honestly or
risk forfeiting their collateral or bond. In the event of a minor offense, a validator is penalized an
amount equal to the reward they would have received if they had operated correctly.

In more serious cases, validators may be slashed, potentially losing their staked ETH and being removed from the
validator network. Slashing happens in response to three specific offenses, all of which cause validators
to equivocate or send conflicting messages that cause disagreements and disarray in the consensus
protocol. To offset the risks of lost capital, validators are incentivized to participate through rewards.

Validators earn rewards by proposing new blocks and attesting the validity of proposed blocks. The
staking rewards will vary depending on factors like the validator’s performance. Additionally, the high
capital requirement should make it infeasible for a centralized entity to acquire more than two-thirds
of the validator set (a critical consensus threshold).

## The Shanghai Update

The Merge succeeded in consolidating the main chain and Beacon Chain, but this was just a milestone
in the larger plan to transition to PoS safely. Further functionality will be added in future forks.

In particular, until the [Shanghai](<(https://notes.ethereum.org/@launchpad/withdrawals-faq)>) update, expected in mid-2023, validators cannot withdraw their locked
ETH without irreversibly surrendering their duties, with the result that all staked ETH is inaccessible
by validators.

Post-Shanghai update, there will likely be a massive reshuffling of ETH as existing
validators reclaim their ETH and new validators join without the risk of not being able to withdraw.
