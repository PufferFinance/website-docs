---
sidebar_position: 3
title: MEV Smoothing
---

## Validator Stack
Each validator is responsible for safeguarding a `validator key` to perform their consensus duties. This key will be used to sign off on blocks and attestations to receive execution and consensus rewards. How does the validator actually perform these duties?

A validator must run the necessary tech stack before they can sign anything. This includes an `execution client,` which executes the transactions they receive to update their perceived state of the Ethereum chain. The most popular execution clients are [Geth](https://github.com/ethereum/go-ethereum), [Besu](https://github.com/hyperledger/besu), [Nethermind](https://github.com/NethermindEth/nethermind), and [Erigon](https://github.com/ledgerwatch/erigon). They will also run a `consensus client,` which facilitates the communication between validator peers to agree on a shared state. The consensus client ultimately uses the validator key to sign PoS-related messages. The main consensus clients include [Teku](https://github.com/ConsenSys/teku), [Nimbus](https://github.com/status-im/nimbus-eth2/), [Lodestar](https://github.com/ChainSafe/lodestar), [Prysm](https://github.com/prysmaticlabs/prysm/), and [Lighthouse](https://github.com/sigp/lighthouse).


## Slashing in Ethereum PoS
Slashing occurs when a validator equivocates or sends conflicting messages within the validator network. There are [three ways this can happen](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/rewards-and-penalties/):
 
> - By proposing and signing two different blocks for the same Slot
> - By attesting to a block that ”surrounds” another one (effectively changing history)
> - By ”double voting” by attesting to two candidates for the same block

Common causes of slashing occur when a validator key is shared across multiple consensus clients, causing conflicting signatures (e.g., attesting two different blocks within the same slot and creating a fork). While this may occur accidentally, the network cannot differentiate this behavior from an attack on the consensus protocol and thus discourages this through slashing. While potentially devastating for a validator's collateral, slashing can be avoided by simply remaining consistent with their previously signed blocks and attestations.

In practice, this is done by maintaining a history of previously signed material (e.g., [EIP-3076](https://eips.ethereum.org/EIPS/eip-3076)) within the consensus client or externally in a [Remote-Signer](https://github.com/ConsenSys/web3signer). Before the validator key signs any block proposals or attestations, the consensus client or remote-signer will first check its previously signed material for any conflicts. 

While this technique reduces the risk of slashing events, there are instances in which the remote-signer is vulnerable. For example, a validator may be slashed if its validator key is shared amongst multiple remote-signers or due to a bug in the consensus client. Additionally, a slash may happen if the validator’s EIP-3076 slash protection database is accidentally or maliciously corrupted.

Check out [Secure-Signer](tech/securesigner.md) to find out how Puffer prevents slashing.


## Slashing penalties
The Ethereum PoS specifications introduce the notion of an [anti-correlation penalty](https://github.com/ethereum/annotated-spec/blob/master/phase0/beacon-chain.md#aside-anti-correlation-penalties-in-eth2). To disincentivize validator collusion, the slashing penalty is proportional to the number of validators that were slashed within approximately 18 days. More concretely, if any of the three slashing offenses are breached, the validator will lose $1 + \frac{3s}{D} * 32$ ETH, where $s$ is the amount of ETH slashed within 18 days, and $D$ is the total amount of ETH staked on Ethereum. 

For low-correlation slashing events (e.g., user error), a validator will lose close to the 1 ETH minimum, but for high-correlation events (e.g., consensus client bug), they could lose their full 32 ETH. See this [article](https://dankradfeist.de/ethereum/2022/03/24/run-the-majority-client-at-your-own-peril.html) for more information.

The existence of slashable offenses and the large penalty increase risk and motivate Puffer's Secure-Signer.

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
