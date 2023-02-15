---
sidebar_position: 1
title: Ethereum Merge and Shanghai Update
---

## The Merge

In September 2022, Ethereum officially merged its Beacon Chain with its proof-of-work chain, upgrading
its consensus layer to proof-of-stake (PoS). Validators replaced miners as the actors participating in
the consensus protocol. This transition shifted the limiting resource from electricity and computational
power to pure capital (32 ETH), significantly reducing Ethereum’s energy footprint.

The core principle of PoS is that validators with thirty-two ETH staked (worth approximately $50,000 USD at the time of writing) are incentivized to perform their consensus duties honestly or risk forfeiting their collateral or bond. The high capital requirement should make it infeasible for a centralized entity to acquire more than two-thirds of the validator set (a critical consensus threshold).

Validators are incentivized to participate through consensus and execution rewards. Consensus rewards are earned by performing duties like attesting to the validity of proposed blocks and vary depending on factors like the validator's performance. Execution rewards are earned when the validator is randomly selected to propose a new block.

To ensure that validators perform honestly and diligently, Ethereum PoS enforces penalties. In the event of minor offenses (e.g., going offline), validators are penalized amounts equal to the rewards they would have received if they operated correctly.

In more serious cases, validators may be slashed, which removes them from the validator network and burns some or all of their bond. Slashing happens in response to [three specific offenses](background/slash.md), all of which cause validators to equivocate or send conflicting messages that cause disagreements and disarray in the consensus protocol. 


## The Shanghai Update

The Merge succeeded in consolidating the main chain and Beacon Chain, but this was just a milestone in the larger plan to transition to PoS safely. Additional functionality will be added in future forks.

In particular, until the [Shanghai/Capella](https://notes.ethereum.org/@launchpad/withdrawals-faq) update, expected in mid-2023, validators cannot withdraw their locked ETH without irreversibly surrendering their duties, with the result that all staked ETH is inaccessible by validators. Additionally, the only liquid revenue available to validators is via execution rewards, with consensus rewards locked until the update. 

Post-Shanghai update, there will likely be a massive reshuffling of ETH as existing validators reclaim their ETH and new validators join without the risk of being unable to withdraw, something that heavily favors large institutions.
