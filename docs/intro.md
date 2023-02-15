---
sidebar_position: 1
slug: /
---

# Puffer Introduction

Puffer is a slash-free and permissionless liquid staking protocol that facilitates at-home staking via a low bond
requirement of 2 ETH. The Puffer team presents Secure-Signer, a remote-signing tool compatible
with all consensus clients that prevents slashable offenses through trusted hardware. Requiring
the use of Secure-Signer within the Puffer Pool eliminates the risk of slashing, either by accident
or due to bugs in the consensus client.

## Why reduce the bond requirement?

Ever since Ethereum switched to proof of stake (PoS), anyone with 32 ETH can participate as a validator, but the high capital requirement favors institutions. As a result, the validator set tends towards centralization.
Liquid staking derivatives (LSDs) have recently accelerated this, resulting in a validator set composed of just a few entities with unprecedented control over Ethereum blockspace ([more on risks of LSDs](https://notes.ethereum.org/@djrtwo/risks-of-lsd)).
Puffer reduces the node operators (NoOps) bond by a factor of sixteen to just 2 ETH. This reduces the barrier of entry, allowing for more non-instututional NoOp participation, therefore further decentralizing the Ethereum. Additionally, the high capital efficiency offers NoOps sixteen times the opportunities for high-revenue execution rewards, further increasing the viability of at-home staking.

## How can we safely reduce it?
NoOp operating risk typically increases as the NoOp bond requirement decreases due to two factors:
-  First, the penalty for a slashable offense ranges from 1 to 32 ETH. If the bond requirement is 2 ETH, a NoOp risks losing at least 50% of their collateral if they are slashed with the minimum penalty (compared to ~3% if they had the standard 32 ETH bond). 
- Second, NoOps that leverage the high capital efficiency to operate multiple parallel validators take on increased risk. For example, a NoOp can run 16 validators with 32 ETH, but must be careful about key management. They have effectively increased their risk sixteen times with the additional added complexity of key management (many past slashable offenses were due to NoOps accidentally double-signing messages).

Secure-Signer completely eliminates the risk of accidental slashing which allows Puffer to safely reduce the NoOp bond requirement without increasing NoOp risk. To learn more about what bonds and slashlable offenses are, check out the [background section](background/slash.md). See [here](tech/securesigner.md) for more information on Secure-Signer.
