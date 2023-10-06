---
title: Penalties in Ethereum PoS
slug: /reference/slashing-in-PoS
---

## Validator Stack
Each validator is responsible for safeguarding a `validator key` to perform their consensus duties. This key will be used to sign off on blocks and attestations to receive execution and consensus rewards. How does the validator actually perform these duties?

A validator must run the necessary tech stack before they can sign anything. This includes an `execution client`, which executes the transactions they receive to update their perceived state of the Ethereum chain. The most popular execution clients are [Geth](https://github.com/ethereum/go-ethereum), [Besu](https://github.com/hyperledger/besu), [Nethermind](https://github.com/NethermindEth/nethermind), and [Erigon](https://github.com/ledgerwatch/erigon). They will also run a `consensus client,` which facilitates the communication between validator peers to agree on a shared state. The consensus client ultimately uses the validator key to sign PoS-related messages. The main consensus clients include [Teku](https://github.com/ConsenSys/teku), [Nimbus](https://github.com/status-im/nimbus-eth2/), [Lodestar](https://github.com/ChainSafe/lodestar), [Prysm](https://github.com/prysmaticlabs/prysm/), and [Lighthouse](https://github.com/sigp/lighthouse).


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

## Inactivity Penalties
The rule of thumb is that offline validators will lose approximately as much as they would have made by being online and doing their duties. There are some caveats. This applies to consensus rewards and does not take into account the money that could have been made if they missed a block proposal. Additionally, this does not consider [inactivity leaks](https://github.com/ethereum/annotated-spec/blob/master/phase0/beacon-chain.md#rewards-and-penalties).

In the case of an inactivity leak, a validator will lose increasingly more ETH as a penalty until the chain can reach finality. If the protocol had taken months to years to eject an inactive validator, the inactivity leak mechanism would expedite this to days to weeks. This poses a risk in permissionless pools and motivates Puffer's architecture.


## Liquid Staking Protocol Considerations

> ### Slashing Risk
>
> Node operating risk typically increases as the node's bond requirement decreases for two reasons:

> First, the penalty for a slashable offense ranges from 1 to 32 ETH. If the bond requirement is 2 ETH, a node risks losing at least 50% of their collateral if they are slashed with the minimum penalty (compared to ~3% if they had the standard 32 ETH bond).

> Second, nodes that leverage the high capital efficiency to operate multiple parallel validators take on increased risk. For example, a node can run 16 validators with 32 ETH, but must be careful about key management. They have effectively increased their risk sixteen times with the additional added complexity of key management (many past slashable offenses were due to nodes accidentally double-signing messages).

> ### Inactivity Risk
>
> The PoS validator set will only eject inactive validators after their effective balance falls below 16 ETH. In a stake pool, an inactive node could lose $16 - B$ ETH of Staker capital at the cost of only $B$ ETH to themself. Without a means to perform automatic ejections, protocols have set their bonds to $B=16$ ETH to protect Stakers from losing capital.

> Currently, the only way to withdraw a validator is by signing a VoluntaryExit message (VEM) with the validator key. In a permissioned pool where nodes are trusted, the problem of getting them to sign a VEM is easy; however, the node may go offline or refuse to sign the VEM in a permissionless pool.

> This has been the key hurdle in reducing the bond requirement. Modifications to the PoS specs to [allow for smart-contract-triggered-ejections](https://github.com/ethereum/EIPs/pull/7002) have been drafted but are not ready to be added a hard fork. This valuable time could allow centralized staking operations to take market share from permissionless pools by outcompeting in terms of capital efficiency.