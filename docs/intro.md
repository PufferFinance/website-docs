---
sidebar_position: 1
slug: /
---

# Puffer Introduction

Puffer is an anti-slashing and permissionless liquid staking protocol that facilitates at-home staking via a low bond
requirement of 2 ETH. The Puffer team presents [Secure-Signer](tech/securesigner.md), a remote-signing tool compatible
with all consensus clients that prevents slashable offenses through trusted hardware. Requiring
the use of Secure-Signer within the Puffer Pool eliminates the risk of slashing, either by accident
or due to bugs in the consensus client.

## Why reduce the bond requirement?

Ever since Ethereum switched to proof of stake (PoS), anyone with 32 ETH can participate as a validator, but the high capital requirement favors institutions. As a result, the validator set tends towards centralization.
Liquid staking derivatives (LSDs) have recently accelerated this, resulting in a validator set composed of just a few entities with unprecedented control over Ethereum blockspace ([more on risks of LSDs](https://notes.ethereum.org/@djrtwo/risks-of-lsd)).

Puffer reduces the node operators (NoOps) bond by a factor of sixteen to just 2 ETH. This reduces the barrier of entry, allowing for more non-instututional NoOp participation, therefore further decentralizing the Ethereum. Additionally, the high capital efficiency offers NoOps sixteen times the opportunities for high-revenue execution rewards, further increasing the viability of at-home staking.

## What are the risks?

> ### Slashing Risk
>
> NoOp operating risk typically increases as the NoOp bond requirement decreases for two reasons:

> First, the penalty for a slashable offense ranges from 1 to 32 ETH. If the bond requirement is 2 ETH, a NoOp risks losing at least 50% of their collateral if they are slashed with the minimum penalty (compared to ~3% if they had the standard 32 ETH bond).

> Second, NoOps that leverage the high capital efficiency to operate multiple parallel validators take on increased risk. For example, a NoOp can run 16 validators with 32 ETH, but must be careful about key management. They have effectively increased their risk sixteen times with the additional added complexity of key management (many past slashable offenses were due to NoOps accidentally double-signing messages).

> ### Inactivity Risk
>
> The PoS validator set will only eject inactive validators after their effective balance falls below 16 ETH. In a stake pool, an inactive NoOp could lose $16 - B$ ETH of Staker capital at the cost of only $B$ ETH to themself. Without a means to perform automatic ejections, bonds have been set to $B=16$ ETH to protect Stakers from losing capital.

> Currently, the only way to withdraw a validator is by signing a VoluntaryExit message (VEM) with the validator key. In a permissioned pool where NoOps are trusted, the problem of getting them to sign a VEM is easy; however, the NoOp may go offline or refuse to sign the VEM in a permissionless pool.

> This has been the key hurdle in reducing the bond requirement. Modifications to the PoS specs to [allow for smart-contract-triggered-ejections](https://github.com/ethereum/EIPs/pull/7002) have been drafted but are not ready to be added a hard fork. This valuable time could allow centralized staking operations to take market share from permissionless pools by outcompeting in terms of capital efficiency.

## How does Puffer address this?

[Secure-Signer](tech/securesigner.md) eliminates the risk of accidental slashing and consensus client bugs, allowing Puffer to safely reduce the NoOp bond requirement without increasing NoOp risk. Puffer's architecture addresses the issue of inactivity penalties prior to [EIP-7002](https://github.com/ethereum/EIPs/pull/7002) through the use of the Puffer Guardians and Puffer's SLA. These components ensure excellent pool performance while unlocking features like MEV-Smoothing to allow nodes to earn more than they would on their own.  