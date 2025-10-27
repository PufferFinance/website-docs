---
title: Roadmap
slug: /puffer-preconf-roadmap
---

# Puffer Preconf Roadmap

Puffer Preconf is rolling out in three phases, each introducing new capabilities and security features. This phased approach allows us to iterate quickly, gather feedback, and ensure robust production deployment.

## Overview

| Phase | Status | Key Features | Timeline |
|-------|--------|--------------|----------|
| **Phase 1** | 🟢 Current | Gateway delegation, reward forfeiture, Gattaca live | Live soon |
| **Phase 2** | 🟡 Coming Soon | Multiple gateways, enhanced lookahead, Google gateway | TBA |
| **Phase 3** | ⚪ Future | Full slashing, additional, advanced features | TBA |

---

## Phase 1: Gateway Delegation & Initial Launch 🚀

**Status**: **Live Soon**

Phase 1 establishes the foundational infrastructure for Puffer Preconf with a focus on proving the technology and gathering real-world usage data.

### Key Features

**Gateway Model**:
- Validators delegate sequencing rights to [Gattaca](https://gattaca-com.github.io/based-op/) serves as the first production gateway
- Gateways provide ~100ms execution preconfs for L2 transactions

**Economic Model**:
- No slashing for validators in Phase 1
- **Reward forfeiture** for missed block proposals
- Revenue sharing between L2 operators, validators, and gateway
- ETH-denominated rewards

**User Protection**:
- Economic incentives for honest behavior (reward forfeiture)

**Supported Rollups**:
- OP Stack rollups via Gattaca gateway
- Focus on based rollups seeking fast confirmations

### What's Available Now

✅ **For L2s**:
- Integration with Gattaca gateway
- ~100ms execution preconfirmations
- Revenue sharing from preconf fees
- Production-ready for OP-based rollups

✅ **For Validators**:
- Opt-in to Puffer Preconf AVS on EigenLayer
- Use existing restaked ETH as collateral
- Earn additional rewards from preconf services

### Limitations in Phase 1

- ❌ No slashing (only reward forfeiture)
- ❌ Single gateway provider (Gattaca)
- ❌ Limited to OP-based rollups
- ❌ Basic lookahead mechanism

### Who Should Participate in Phase 1?

**Ideal L2 Candidates**:
- ✅ OP-based rollups seeking decentralization
- ✅ Based rollups needing faster confirmations
- ✅ Teams comfortable with early-stage production technology
- ✅ L2s with technical teams that can integrate rapidly

**Ideal Validators**:
- ✅ Already running validators on EigenLayer
- ✅ Comfortable with Commit-Boost software
- ✅ Seeking additional yield opportunities
- ✅ Willing to delegate to Gattaca gateway

---

## Phase 2: Multiple Gateways & Enhanced Features 🌐

**Status**: **Coming Soon**

Phase 2 expands the gateway ecosystem and introduces enhanced coordination mechanisms.

### Planned Features

**Multiple Gateway Providers**:
- 🎯 **Google Gateway** joins as second major provider
- Additional gateway providers onboarded
- Redundancy and competition improve service quality

**Enhanced Lookahead**:
- Support EIP-7917 Deterministic Lookahead
- Improved state sync between gateways
- Predictable handoffs minimize gaps

### Expected Benefits for L2s

**Redundancy**:
- Multiple gateways eliminate single point of failure
- Automatic failover if gateway goes down
- Choose gateway based on performance or geographic location

**Competition**:
- Multiple providers drive better service quality
- Competitive pricing for preconf services
- Innovation in gateway technology

<!-- 
### Migration Path from Phase 1

**For Existing L2 Integrations**:
- No breaking changes to existing integrations
- Opt-in to additional gateways
- Gradual migration to multi-gateway setup
- Backward compatible with Phase 1

**For Validators**:
- Can continue delegating to Gattaca
- Option to delegate to Google or other gateways
- Support for multi-gateway delegation (future) -->

### Timeline

🗓️ **Expected Launch**: TBA

We'll announce specific dates as Phase 2 approaches production readiness. [Subscribe](https://x.com/puffer_finance) to updates or join our [community](https://discord.gg/puffer) for the latest information.

---

## Phase 3: Full Slashing & Advanced Features ⚖️

**Status**: **Future**

Phase 3 introduces the complete security model with full slashing.

### Planned Features

**Full Slashing Implementation**:

Based on current research recommendations:

1. **Liveness Failures**:
   - **Slash Amount**: 1 ETH
   - **Trigger**: Preconf promised but transaction not included, or batch not settled
   - **Recipient**: Next gateway that had to cover + affected users

2. **Malicious MEV Extraction**:
   - **Slash Amount**: 1000 ETH
   - **Trigger**: MEV extraction performed by the gateway
   - **Recipient**: Affected users

**Slashing Infrastructure**:
- Challenge period for disputed slashings
- Fault proof submission mechanism
- EigenLayer slashing integration
- Redistribution to affected parties (not burning)

<!-- **Enhanced Features**:
- L1 inclusion preconfs
- Advanced MEV protection mechanisms
- Improved capital efficiency -->

<!-- ### Migration from Phase 2

**For L2s**:
- Automatic upgrade to slashing-protected service
- Higher security guarantees
- No integration changes required
- Opt-in to advanced features

**For Validators**:
- Collateral requirements may increase
- Full slashing conditions apply
- Higher rewards due to higher risk
- Insurance/protection options available

**For Users**:
- Stronger guarantees from slashing
- Direct compensation if preconfs violated
- Access to advanced preconf types
- Better MEV protection -->

<!-- ### Dependencies

Phase 3 depends on:
- ✅ EigenLayer slashing design finalization
- ✅ Production data from Phase 1 & 2
- ✅ Community feedback and iteration
- ✅ Economic modeling validation

:::caution
Phase 3 timeline and exact features depend on EigenLayer's slashing infrastructure, which is still under development. We'll update this roadmap as more information becomes available.
::: -->

### Timeline

🗓️ **Expected Launch**: TBA

Phase 3 will launch after we've gathered sufficient data from Phase 1 and 2.

---

## Feature Comparison Across Phases

| Feature | Phase 1 | Phase 2 | Phase 3 |
|---------|---------|---------|---------|
| **Execution Preconfs** | ✅ ~100ms | ✅ ~100ms | ✅ ~100ms |
| **Gateway Providers** | Gattaca | Gattaca + Google + Others | Multiple |
| **Slashing** | ❌ (Reward forfeiture) | ❌ (Reward forfeiture) | ✅ Full slashing |
| **Rollup Support** | OP Stack | OP Stack + Others | Broad support |
| **User Refunds** | ❌ | ❌ | ✅ Yes |
| **L2 Revenue Share** | ✅ Yes | ✅ Yes | ✅ Yes |
| **Lookahead** | ✅ Basic | ✅ Advanced | ✅ Advanced |
| **Slash Amount (Liveness)** | N/A | N/A | 1 ETH |
| **Slash Amount (Malicious MEV Extraction)** | N/A | N/A | 1000 ETH |

---

<!-- ## Integration Timing Recommendations

### Should You Integrate Now (Phase 1)?

**Integrate Now If**:
- ✅ You're an OP-based rollup seeking decentralization
- ✅ You're a based rollup needing faster confirmations
- ✅ You're comfortable with reward forfeiture (vs. slashing) security model
- ✅ You want to help shape the protocol through early feedback
- ✅ You're working with Gattaca or can integrate quickly

**Wait for Phase 2 If**:
- ⏳ You want multiple gateway options
- ⏳ You're not using OP Stack (yet)
- ⏳ You prefer more mature production deployments
- ⏳ You want Google gateway specifically

**Wait for Phase 3 If**:
- ⏳ You require full slashing for security model
- ⏳ You need advanced features (L1 preconfs, cross-L2 atomicity)
- ⏳ You're risk-averse and want battle-tested infrastructure

:::tip
Even if you wait for later phases, we recommend staying engaged with the community and monitoring progress. Integration is easier when you're familiar with the protocol evolution.
:::

--- -->

## How to Stay Updated

**Community Channels**:
- [Discord](https://discord.gg/puffer) - Technical discussions and support
- [Twitter](https://x.com/puffer_finance) - Major milestones and news
- [Blog](https://puffer.fi/blog) - Deep dives and technical posts

<!-- **For L2s**:
- Join the L2 Integrators channel on Discord
- Subscribe to the integration newsletter
- Attend monthly community calls

**For Validators**:
- Join the Validators channel on Discord
- Subscribe to operator updates
- Monitor GitHub for software releases -->

<!-- ---

## Research & Future Directions

Beyond Phase 3, we're exploring:

**Advanced Commitment Types**:
- State preconfs (guarantee specific state transitions)
- Bundle preconfs (atomic multi-transaction guarantees)
- Conditional preconfs (execute if X, else Y)

**Cross-L2 Composability**:
- Atomic transactions across multiple L2s
- Unified liquidity pools
- Synchronous composability primitives

**Performance Enhancements**:
- Sub-100ms latency goals
- Horizontal scaling through gateway networks
- Optimized state sync mechanisms

**Economic Innovations**:
- Dynamic fee markets for preconfs
- Advanced MEV-smoothing algorithms
- Insurance mechanisms for validators

**Standards Alignment**:
- Continued Commit-Boost integration
- Fabric Constraint API compatibility
- Collaboration with Ethereum research community

--- -->

<!-- ## Feedback & Contributions

We're building Puffer Preconf for the entire Ethereum ecosystem. Your feedback shapes the roadmap:

**How to Contribute**:
- Share integration experiences
- Report bugs or issues
- Suggest feature requests
- Contribute to open-source components
- Participate in governance discussions

**Contact**:
- GitHub: [PufferFinance/UniFi](https://github.com/PufferFinance/UniFi)
- Discord: [Join here](#)
- Email: [preconf@puffer.fi](#)

:::info
This roadmap is subject to change based on technical developments, community feedback, and ecosystem needs. We'll update this document regularly as plans evolve.
:::

--- -->

## Next Steps

- **Validators**: [Validator Guide](/puffer-preconf/puffer-preconf-validators)
- **Learn More**: [Protocol Details](/puffer-preconf/puffer-preconf-protocol)
- **Understand Benefits**: [Benefits for L2s](/puffer-preconf/puffer-preconf-benefits)
