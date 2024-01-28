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

Guardians have two main responsibilities within the Puffer Protocol:

1. **Proof of Reserves**: This involves reporting the amount of ETH backing pufETH to update the conversion rate. This ETH is comprised of active NoOp validators, full withdrawal ETH from any exited NoOps, restaking rewards owed to stakers, and the balance of the PufferVault. With the introduction of [**EIP-4788**](https://eips.ethereum.org/EIPS/eip-4788), this task will become automated and trustless via a Zero-Knowledge Proof (ZKP).

2. **Ejecting validators**: Until [**EIP-7002**](https://eips.ethereum.org/EIPS/eip-7002) is realized, the protocol relies on the Guardians to eject validators under certain conditions. They use encrypted validator keyshares, stored in specialized enclaves designed solely to sign exit messages. A validator will be ejected if:
   - Its beacon chain balance falls below below the DAO threshold.
   - Its [module](/protocol/restaking-modules#restaking-modules-) was slashed due to an AVS violation.
   - It consumes all of its validator tickets without renewal.

A majority agreement among the Guardians (e.g., 7 out of 8) is required before any significant action is taken.

## Roadmap to Decentralization

Achieving full protocol-level decentralization is the end goal for Puffer. This would mean the protocol operates without any dependence on the core team, third parties, or external entities. Two Ethereum Improvement Proposals, **EIP-7002** and **EIP-4788**, are critical to this mission:

- **EIP-7002**: Once implemented, it will render the Guardian's role in overseeing validator ejections obsolete as they can be triggered from a smart contract.
- **EIP-4788**: Allows for trustless trustless proof of reserves, removing the dependency on any trusted entity to report how much ETH is backing the pufETH Liquid Staking Token (LST).

Until these EIPs are fully adopted, the Guardians serve as an interim measure. They allow the Puffer Protocol to grow and decentralize Ethereum safely, ensuring pooled stakers remain shielded from risks and uncertainties in the interim. The Guardians' role, although crucial now, is a temporary measure designed to safeguard staker assets and ensure protocol growth in Ethereum's constantly evolving landscape.