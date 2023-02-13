---
sidebar_position: 1
slug: /
---

# Puffer introduction

Puffer is a slash-free and permissionless liquid staking protocol that facilitates at-home staking via a low bond
requirement of 2 ETH. The Puffer team presents Secure-Signer, a remote-signing tool compatible
with all consensus clients that prevents slashable offenses through trusted hardware. Requiring
the use of Secure-Signer within the Puffer Pool eliminates the risk of slashing, either by accident
or due to bugs in the consensus client.

## Why reducing the bond matters

Ever since Ethereum switched to proof of stake (PoS), anyone with enough ETH capital can participate as a validator, but the high capital requirement favors institutions. As a result, the validator set tends towards centralization.
Liquid staking derivatives (LSDs) have recently accelerated this, resulting in a validator set composed of just a few entities with unprecedented control over Ethereum blockspace ([more on risks of LSDs](https://notes.ethereum.org/@djrtwo/risks-of-lsd)).
Puffer reduces the bond by 16 times for the node operators (NoOps) to help reduce the barrier of entry for more participants, therefore further decentralizing the Ethereum.

## How can we reduce the bond requirement

As a NoOp's bond decreases, the risk of slashing also increases because NoOp bond gets lower compared to staker's funds. Secure-Signer eliminates the risk of accidental slashing which allows the NoOp's bond to decrease significantly. To know more about what a bond and a slashlable offenses are, check out the [background section](background/slash.md).
