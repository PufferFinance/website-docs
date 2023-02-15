---
sidebar_position: 3
title: Slashing in Ethereum PoS
---

# What are slahable offenses in Ethereum Proof of Stake (PoS)

Slashing occurs when a validator equivocates or sends conflicting messages within the validator network.
There are three ways this can happen:

- By proposing and signing two different blocks for the [same Slot](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/rewards-and-penalties/)
- By attesting to a block that ”surrounds” another one [(effectively changing history)](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/rewards-and-penalties/)
- By ”double voting” by attesting to two candidates for the [same block](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/rewards-and-penalties/)

Common causes of slashing occur when a Validator Key is shared across multiple Consensus Clients, causing conflicting signatures. While this may occur accidentally, the network cannot differentiate this
behavior from an attack on the consensus protocol.
Slashing can be avoided by remaining consistent with previously signed blocks and attestations.

In practice, this is done by maintaining a history of previously signed material within the consensus
client or externally in a [Remote-Signer](https://github.com/ConsenSys/web3signer). Whenever the consensus client presents the remote-signer
with new blocks or attestations, the remote-signer first checks its previously signed material for any conflicts before signing. While this technique reduces the risk of slashing events, there are instances in
which the remote-signer is vulnerable. For example, a validator may be slashed if its validator key is
shared amongst multiple remote-signers.

Additionally, a slash may happen if the validator’s previously
signed material is accidentally or maliciously corrupted.
Checkout [Secure-Signer](tech/securesigner.md) to findout how Puffer prevents slashing.
