---
title: Background
slug: /background
---

## The Ethereum Scalability Challenge 🏗️

Ethereum faced scalability issues due to its limited transaction throughput and high gas fees. This led to the development of a rollup-centric roadmap focused on scaling Ethereum using Layer 2s.

### The Role of Rollups

Rollups aim to increase Ethereum's transaction capacity by processing transactions off-chain and then submitting batched results to the Ethereum mainnet. However, traditional rollups face challenges:

- 🐢 Slow Finality: It takes at least 12s for Ethereum block confirmations and 12 minutes for finality.
- 🔒 Security Trade-offs: Some solutions compromise on security for speed.
- 🌐 Fragmented Liquidity: Different rollups have isolated liquidity pools and users.
- 🎯 Centralization: Centralized sequencers can be point of failure for rollups.

## Based Rollups: A Step Forward ⚡

[Based rollups](https://ethresear.ch/t/based-rollups-superpowers-from-l1-sequencing/15016) offer a promising solution to many of these challenges.

### Key Features of Based Rollups

Based rollups are a type of rollup that:

- 🔄 Have transactions sequenced by Ethereum validators
- 🔗 Inherit Ethereum's security directly
- 🤝 Unlock synchronous composability between different based rollups
- 💰 Align economic incentives with Ethereum L1

### The Speed Challenge for Based Rollups

Despite their advantages, based rollups still face a critical issue:

- ⏳ Slow Confirmation Times: Based rollups are limited by Ethereum's block time (12 seconds), leading to slower transaction confirmations than desired for many applications.

## Preconfirmations: The Latency Solution 🚀

To address the speed limitations of based rollups, the concept of [preconfirmations](https://ethresear.ch/t/based-preconfirmations/17353) was introduced.

### What are Preconfirmations?

Preconfirmations provide near-instant transaction assurances by leveraging a network of Ethereum validators. Here's how they work:

- ⚡ Offer ~100ms transaction confirmations, drastically reducing wait times
  - Validators quickly process and sign off on incoming transactions
  - These signatures serve as immediate assurances before the block is published to the L1
- 🛡️ Backed by economic security from Ethereum validators
  - Validators stake ETH as collateral, ensuring honest behavior
  - Breaking preconf promises can result in slashing of staked assets
{/* MDX-BLOCK-START */}
{/* MDX-BLOCK-START */}
{/* MDX-BLOCK-START */}
{/* MDX-BLOCK-START */}
- 🌐 Maintain neutrality and decentralization
  - Multiple validators participate, preventing single points of failure
  - Open participation ensures no central authority controls the process
- 🔄 Bridge the gap between transaction submission and block confirmation
  - Users receive rapid feedback on transaction validity
  - Rollups can process transactions with confidence before L1 finality

### Requirements for a Preconfirmation Protocol 🛠️

To build an effective preconfirmation protocol for based rollups, several key requirements must be met:

1. **Validator Network**: 🌐

   - A network of Ethereum validators willing to participate in preconfirmations
   - Open system allowing any eligible validator to join

2. **Economic Incentives**: 💰

   - A system to reward validators for honest participation
   - Penalties (e.g., slashing) for malicious behavior (safety faults) or non-performance (liveness faults)

3. **Security Guarantees**: 🔒

   - Cryptographic proofs of validator commitments
   - Mechanisms to ensure the integrity of preconfirmations

4. **Standardization**: 🔧

   - On-chain registry of participating validators
   - Common interfaces for validator software

5. **Capital Efficiency**: 💼
   - Mechanisms to allow validators to participate without locking up additional capital
   - Potential integration with restaking protocols

By addressing these requirements, a preconfirmation protocol can provide the necessary infrastructure to enable near-instant, secure transaction confirmations for based rollups, significantly enhancing the user experience and efficiency of the Ethereum ecosystem.

## UniFi AVS: Pioneering Preconfirmations 🦄

UniFi AVS steps in as the first instantiation of a preconfirmation protocol for based rollups.

By combining EigenLayer's restaking capabilities with Commit-Boost's standardization, UniFi AVS creates a robust, efficient, and secure preconfirmation system for based rollups.

This unique combination allows UniFi AVS to offer:

1. 🟢 Permissionless validator participation
2. 📊 On-chain registry for transparency
3. ⚖️ Slashing mechanisms for accountability
4. 🔗 Seamless integration with based rollups
5. ⚡ Near-instant, secure transaction confirmations

Learn how in the following sections 👉
