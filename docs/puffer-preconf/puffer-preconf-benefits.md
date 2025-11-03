---
title: Benefits for L2s
slug: /puffer-preconf-benefits
---

# Benefits of Puffer Preconf for Layer 2s

Puffer Preconf offers unique advantages for different types of Layer 2 rollups. This guide explores the specific benefits for based rollups, traditional rollups, and the economic model that benefits all L2 operators.

## For Based Rollups 🔄

Based rollups inherit Ethereum's security and liveness by having L1 validators sequence their transactions. However, they face a critical challenge: **speed**.

### The Challenge

- **Slow Confirmations**: Limited by Ethereum's 12-second block time
- **Economic Trade-offs**: All transaction fees typically go to L1 validators
- **User Experience**: 12-second waits are too slow for many applications
- **Competitive Disadvantage**: Slower than centralized sequencer solutions

### How Puffer Preconf Solves This

- **⚡ Speed**: ~100ms execution preconfirmations eliminate the 12-second wait
- **💰 Revenue Sharing**: L2 operators retain a portion of fees instead of ceding everything to L1
- **🔒 Maintained Security**: Keep all the security benefits of being based on L1
- **🌐 Liveness Guarantee**: Inherit Ethereum's robust liveness guarantees

:::tip
Based rollups using Puffer Preconf get the best of both worlds: the speed of centralized sequencers with the security and composability of Ethereum L1.
:::

<!-- PLACEHOLDER: Based Rollup Comparison Chart
Description: Side-by-side comparison showing Based Rollup without Preconf (12s, no revenue share) vs. Based Rollup with Puffer Preconf (~100ms, revenue share) vs. Centralized Sequencer (fast, centralized, fragmented) -->

## For OP Stack and Other L2s 🏗️

Traditional rollups using centralized sequencers offer fast confirmations but face centralization risks.

### The Challenge

- **Single Point of Failure**: Centralized sequencer controls transaction ordering
- **Trust Requirements**: Users must trust the sequencer won't misbehave
- **Censorship Risk**: Centralized sequencer can censor transactions

### Puffer Preconf as a Decentralization Path

Puffer Preconf enables OP Stack and other L2s to transition from centralized sequencers to decentralized preconf services:

- **🔧 Drop-in Integration**: Compatible with existing OP Stack architecture
- **⚡ Maintained Speed**: Keep ~100ms confirmations, no UX degradation
- **🌐 Decentralization**: Distributed across multiple validators and gateways
- **🔒 Economic Security**: 3M ETH backing instead of single operator trust
- **🔓 Censorship Resistance**: Multiple gateways prevent single-point censorship

### Featured: Gattaca Gateway for OP-Based Rollups

[Gattaca](https://gattaca-com.github.io/based-op/) provides production-ready preconf services specifically designed for OP-based rollups:

**Architecture Highlights**:
- **Frags**: Sub-block units enabling sub-100ms confirmations
- **Lookahead Scheduling**: Predictable sequencing rights assignment

**Integration**: OP Stack rollups can integrate with Gattaca gateway to receive immediate benefits

![Gateway Architecture](/img/puffer-preconf-gateway-architecture.png)

## Economic Model: Aligned Incentives 💰

Unlike L2s where none of the fees flow to L1 validators or traditional based rollup models where all fees flow to L1 validators, Puffer Preconf introduces a **revenue sharing model** that creates sustainable economics for both L2 operators and Ethereum validators.

### Revenue Flow (Phase 1)

![Rewards Flow Phase 1](/img/puffer-preconf-rewards-phase1.png)

1. **User pays preconf fee** for guaranteed execution
2. **Fees collected** by L2 fee contract
3. **Distribution**:
   - Portion to rollup/appchain owner
   - Portion to Puffer Preconf rewards manager contract
4. **Rewards distribution** based on validator and gateway performance

:::tip
Priority fees and congestion fees can be directed entirely to the rollup owner, giving L2 operators flexibility in their economic models.
:::

## Comparison: Puffer Preconf vs. Alternatives

| Feature | Puffer Preconf | Centralized Sequencer | Pure Based Rollup |
|---------|----------------|----------------------|-------------------|
| **Confirmation Speed** | ~100ms | ~100ms | 12 seconds |
| **Decentralization** | ✅ High | ❌ Single operator | ✅ Ethereum L1 |
| **L2 Revenue Share** | ✅ Yes | ✅ Yes (100%) | ❌ No (all to L1) |
| **Censorship Resistance** | ✅ Multi-gateway | ❌ Single point | ✅ Ethereum L1 |
| **Trust Model** | Cryptographic + Economic | Trust operator | Ethereum L1 |
| **User Protection** | Slashing + Refunds | Terms of service | Ethereum L1 |

## Learn More 🚀

Want to understand Puffer Preconf better?

1. **Understand the Protocol**: [Deep dive into architecture](/puffer-preconf/puffer-preconf-protocol)
2. **Review the Roadmap**: [Current status and future phases](/puffer-preconf/puffer-preconf-roadmap)
