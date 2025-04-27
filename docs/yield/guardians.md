---
title: Guardians
slug: /protocol/guardians
---

# Guardians

:::info
The Puffer Protocol's Guardians are a group of trusted and permissioned nodes tasked with ensuring the stable operation of the protocol. While their presence serves a critical function, the intention is to render them obsolete as Ethereum's ecosystem evolves and specific EIPs are introduced.
:::

## Who are the Guardians?

The Guardians are a collective of respected community members who are deeply aligned with Ethereum's principles and values. These individuals, who function as a decentralized autonomous organization (DAO), have a vested interest in the protocol's success and the wider benefit of the Ethereum ecosystem. Their reputation within the community acts as a safeguard, ensuring they operate with the utmost integrity.

## What are their duties?

Guardians have three main responsibilities within the Puffer Protocol:

1. **Ejecting validators**: Until [**EIP-7002**](https://eips.ethereum.org/EIPS/eip-7002) is realized, the protocol relies on the Guardians to eject validators under certain conditions. They use encrypted validator keyshares, stored in specialized enclaves designed solely to sign exit messages. A validator will be ejected if:

   - Its beacon chain balance falls below the DAO threshold.
   - Its [module](/protocol/puffer-modules#puffer-modules-) was slashed due to an AVS violation.
   - It consumes all of its validator tickets without renewal.
   - The protocol requires ETH liquidity to satisfy pufETH withdrawal requests (validators will be selected randomly).

2. **Provisioning or skipping validators**: When a NoOp registers a validator, the Guardians are responsible for vetting the registration before provisioning them 32 ETH. If the registration is invalid (e.g., uses the wrong withdrawal credentials, is signed with the wrong fork version, or the validator already exists) or they failed to properly encrypt keys for the Guardians, they will be skipped. If a NoOp's registration is skipped, their full bond will be returned but a portion of their validator tickets will be penalized to prevent NoOps from griefing the protocol.

3. **Returning validator bonds on exit**: When validators fully exit the beacon chain and EigenLayer, the Guardians will return their bonds, burn any consumed validator tickets, and update the number of active validators in Puffer's on-chain accounting. This step allows Puffer to do "[lazy proof of reserves](https://github.com/PufferFinance/PufferPool/blob/master/docs/PufferOracleV2.md)" which enables a more real time conversion rate for pufETH. See the [technical docs](https://github.com/PufferFinance/PufferPool/blob/master/docs/PufferProtocol.md#after-exiting) for more details.

A majority agreement among the Guardians (e.g., 7 out of 8) is required before any significant action is taken.

## Roadmap to Decentralization

Achieving full protocol-level decentralization is the end goal for Puffer. This would mean the protocol operates without any dependence on the core team, third parties, or external entities. Several Ethereum Improvement Proposals are critical to this mission:

- **[EIP-7002](https://eips.ethereum.org/EIPS/eip-7002)**: Once implemented, it will render the Guardian's role in overseeing validator ejections obsolete as they can be triggered from a smart contract.
- **[EIP-4788](https://eips.ethereum.org/EIPS/eip-4788)**: Allows many Guardian operations to be replaced via a ZKP.
- **[EIP-2537](https://eips.ethereum.org/EIPS/eip-2537)**: BLS precompiles allow validator registration messages to be validated on-chain, reducing trust in the Guardians.

Until these EIPs are fully adopted, the Guardians serve as an interim measure. They allow the Puffer Protocol to grow and decentralize Ethereum safely, ensuring stakers remain shielded from risks and uncertainties in the interim. The Guardians' role, although crucial now, is a temporary measure designed to safeguard staker assets and ensure protocol growth in Ethereum's constantly evolving landscape.
