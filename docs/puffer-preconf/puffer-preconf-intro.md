---
title: Introduction to Puffer Preconf
slug: /puffer-preconf-intro
---

:::info About Puffer Preconf
Puffer Preconf is an EigenLayer-based preconfirmation service that brings ~100ms transaction confirmations to Layer 2 rollups, backed by 3M ETH of restaked security. Built on EigenLayer and integrating [Commit-Boost](https://commit-boost.github.io/commit-boost-client/architecture/overview), Puffer Preconf provides fast, secure, and neutral preconfirmations for any L2, enhancing Ethereum's scalability while maintaining decentralization and security.
:::

## Why Puffer Preconf for Your L2? 🚀

### **For L2 Teams and Operators**

Puffer Preconf offers a unique value proposition for Layer 2 rollups seeking to enhance user experience without sacrificing decentralization or economic alignment:

- **⚡ Enhanced User Experience**: Provide ~100ms transaction confirmations to your users, comparable to L2s with centralized sequencers
- **💰 Economic Alignment**: Revenue sharing model that benefits both your rollup and Ethereum validators—you don't cede all fees to L1
- **🔒 Cryptographic Guarantees**: Strong execution guarantees backed by 3M ETH of economic security
- **🌐 Permissionless & Neutral**: No governance tokens required, open to all L2s regardless of affiliation
- **🤝 No Vendor Lock-in**: Open protocol with multiple gateway providers (Gattaca, more to come)
- **📊 Transparent**: On-chain registry with verifiable commitments

### **The L2 Sequencing Trade-offs**

Today's L2s face difficult trade-offs when choosing a sequencing solution:

**(Total Anarchy) Based Rollups**:
- ✅ Decentralization
- ✅ Inherit Ethereum's security and liveness
- ❌ Slow confirmations (12-second L1 blocks)
- ❌ All fees go to L1 validators

**Traditional Rollups with Centralized Sequencers**:
- ✅ Fast confirmations
- ❌ Single point of failure
- ❌ Trust assumptions

**Puffer Preconf: Best of Both Worlds**:
- ✅ Fast confirmations (~100ms execution preconfs)
- ✅ Decentralized (backed by Ethereum validators)
- ✅ Economic alignment (revenue sharing)
- ✅ Permissionless and neutral

## How It Works 🔧

Puffer Preconf uses a **gateway-based architecture** where specialized entities called gateways provide preconfirmation services on behalf of Ethereum validators:

1. **Validators** opt into Puffer Preconf by delegating to gateways
2. **Gateways** (like Gattaca) provide fast execution preconfirmations to L2 users
3. **Lookahead mechanism** schedules which gateway has sequencing rights for upcoming L1 slots
4. **Economic security** from 3M ETH in restaked assets ensures honest behavior
5. **Slashing conditions** protect users and rollups from misbehavior

<!-- PLACEHOLDER: L2 Integration Flow Diagram
Description: Show the flow from L2 user → Gateway → Validator → L1 settlement, highlighting the ~100ms preconf path vs. the L1 settlement path -->

### Featured Gateways

**[Gattaca](https://gattaca-com.github.io/based-op/)** - Production gateway offering:
- Sub-100ms confirmations using innovative "frags" architecture
- OP-based rollup support
- Live and ready for integration

## Permissionless & Neutral by Design 🌐

Puffer Preconf is built to serve the entire Ethereum ecosystem, not just Puffer's own rollup (UniFi):

### Why Trust Matters for L2 Integration

We understand that integrating with a preconf service requires trust that the provider won't favor their own rollup or extract unfair value. Puffer Preconf is designed with strict neutrality guarantees:

- **🔓 No Token Gating**: No Puffer governance token required to participate as validator, gateway, or L2
- **📖 Open Protocol**: Fully open-source with transparent on-chain registry
- **⚖️ Equal Treatment**: All L2s receive the same service level and economic terms
- **🔐 Cryptographic Commitments**: Trust the math, not the operator—preconfs are cryptographically signed and slashable
- **🌍 Multi-Gateway**: Multiple independent gateways (Gattaca, more to come) prevent centralization
- **🎯 Aligned Incentives**: Validators earn from all L2s, not just UniFi—more L2s = better validator economics

### UniFi: Leading by Example

UniFi, Puffer's own based rollup, uses Puffer Preconf to prove the technology works. But our success depends on ecosystem adoption—we're stronger when all L2s benefit from fast, secure preconfirmations.

## What You Get 💪

### Execution Preconfirmations

Unlike simple inclusion preconfs, Puffer Preconf provides **execution preconfirmations**:

**Inclusion Preconf** (Weak Guarantee):
- Transaction will be included in a block
- Final state may differ from expected (e.g., price slippage)

**Execution Preconf** (Strong Guarantee):
- Transaction will execute with exact state as promised
- No surprises—users get exactly what they signed

**Example**: A user swaps ETH for 2,400 USDC:
- Inclusion preconf: Transaction included, but final price might be 2,350 or 2,450 USDC
- Execution preconf: **Guaranteed** to execute at exactly 2,400 USDC

### Economic Benefits for L2 Operators

Traditional based rollup models force you to cede all transaction fees to L1 validators. Puffer Preconf introduces a **revenue sharing model**:

- L2 operators retain a portion of preconf fees
- Validators earn from providing preconf services
- Infrastructure costs are shared equitably
- In case of slashing, affected parties are compensated

This makes based rollup economics viable for appchains and general-purpose L2s.

### User Protection

- **Refund mechanism**: Users who paid for failed preconfs can claim refunds
- **Slashing protection**: Misbehaving validators lose stake, which is redistributed to affected users

## Current Status & Roadmap 🗓️

**Phase 1** (Current):
- Gateway delegation model
- Gattaca gateway live
- Reward forfeit for missed proposals
- OP-based rollup support

**Phase 2** (Coming Soon):
- Additional gateways
- Enhanced lookahead mechanism
- Expanded rollup architecture support

**Phase 3** (Future):
- Full slashing implementation
- Advanced features

[See detailed roadmap](/puffer-preconf/puffer-preconf-roadmap)

## Who Should Integrate? 🎯

Puffer Preconf is ideal for:

- **Based rollups** wanting to overcome 12-second L1 latency while maintaining composability
- **L2s** concerned about centralization risks of single-sequencer models
- **Teams** building the next generation of rollups with unified liquidity and fast confirmations

:::tip Learn More
Interested in Puffer Preconf? Explore the [Benefits](/puffer-preconf/puffer-preconf-benefits) in detail and check out our [Roadmap](/puffer-preconf/puffer-preconf-roadmap) to see the current status and future plans.
:::

---

## For Validators 🤖

Ethereum validators can participate in Puffer Preconf to earn additional rewards. If you're a validator interested in providing preconf services, see our [Validator Guide](/puffer-preconf/puffer-preconf-validators).

Key benefits for validators:
- 💰 Additional rewards from preconf fees
- 🔒 Use restaked ETH as collateral (no additional deposits required)
- 🌐 Contribute to Ethereum ecosystem health
- 🚀 Participate in cutting-edge protocol innovation

:::info
Puffer Preconf allows validators to participate without additional collateral beyond their restaked ETH. If you're already running validators on EigenLayer, you're well-positioned to join!
:::

---

## Security & Trust

Puffer Preconf prioritizes security and neutrality:

- ✅ Validators must own EigenPods and run Commit-Boost software
- ✅ Slashing mechanisms enforce accountability (implementation phases detailed in [roadmap](/puffer-preconf/puffer-preconf-roadmap))
- ✅ No governance token requirements ensure permissionless participation
- ✅ 3M ETH in restaked security backing all commitments
- ✅ Forward-compatible with Commit-Boost standardization and [Fabric Constraint API](https://eth-fabric.github.io/website/)
