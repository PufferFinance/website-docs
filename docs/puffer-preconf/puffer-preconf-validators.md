---
title: For Validators
slug: /puffer-preconf-validators
---

# Getting Started as a Validator

This guide is for Ethereum validators who want to participate in Puffer Preconf to earn additional rewards by providing preconfirmation services.

:::info Audience
This page is for validators. If you're an L2 team interested in Puffer Preconf, please explore our [Introduction](/puffer-preconf/puffer-preconf-intro) and [Benefits](/puffer-preconf/puffer-preconf-benefits) pages first, or reach out to us directly.
:::

## Why Participate in Puffer Preconf? 💰

Validators can leverage their existing restaked ETH to participate in Puffer Preconf, offering several benefits:

- **💰 Additional Rewards**: Earn extra rewards by providing preconfirmation services on top of standard validator rewards
- **🔒 Capital Efficiency**: Use restaked ETH as preconf collateral without additional deposits
- **🌐 Network Contribution**: Play a crucial role in enhancing Ethereum's transaction speed and user experience

:::tip No Additional Collateral Required
Puffer Preconf allows validators to participate without additional collateral beyond their restaked ETH. If you're already running validators on EigenLayer, you're well-positioned to join!
:::

## Prerequisites ✅

Before you begin, ensure you have:

- **EigenPod**: Own an EigenPod or have a trusted relationship with an EigenPod owner
- **Active Validators**: Validators delegated to your EigenPod that are active on Ethereum
- **Ethereum Mainnet RPC**: Access to an Ethereum mainnet RPC endpoint
- **Technical Setup**:
  - [Git](https://git-scm.com/downloads) installed
  - [Node.js and npm](https://nodejs.org/) installed
  - [Yarn](https://yarnpkg.com/getting-started/install) installed
  - [Foundry](https://book.getfoundry.sh/getting-started/installation) installed

## How It Works 🔧

### Delegation Model (Phase 1)

In Phase 1, validators participate by **delegating to gateways**:

1. **Delegate** to a gateway ([Gattaca](https://gattaca-com.github.io/based-op/))
2. **Gateway Provides Preconfs** on your behalf when you're scheduled to propose
3. **Earn Rewards** from preconf fees collected by the gateway

```
Validator → Delegates to → Gateway → Provides preconfs → Earns rewards → Shares with validator
```

### Current Gateway: Gattaca

**[Gattaca](https://gattaca-com.github.io/based-op/)** is the primary gateway in Phase 1:
- Production-ready for OP-based rollups
- Handles preconf signing and L2 block building

**Future Gateways** (Phase 2+):
- Additional third-party gateways

## Setup Instructions 🛠️

### Step 1: Install Foundry

If you don't already have Foundry installed:

```bash
curl -L https://foundry.paradigm.xyz | bash
foundryup
```

### Step 2: Clone the UniFi Repository

```bash
git clone https://github.com/PufferFinance/UniFi.git
cd UniFi
```

### Step 3: Install Dependencies

```bash
# Install yarn dependencies
yarn install

# Navigate to l1-contracts
cd l1-contracts

# Install Foundry dependencies
forge build
```

### Step 4: Register to Puffer Preconf AVS (Phase 1)

Run the registration script with your operator private key:

```bash
forge script script/UniFiAVSScripts.sol:UniFiAVSScripts \
  --sig "registerOperatorToUniFiAVS(uint256 signerPk)" \
  'YOUR_OPERATOR_PRIVATE_KEY' \
  --private-key 'YOUR_OPERATOR_PRIVATE_KEY' \
  --rpc-url 'YOUR_MAINNET_RPC_URL' \
  --broadcast
```

Replace:
- `YOUR_OPERATOR_PRIVATE_KEY`: Your EigenLayer operator's private key
- `YOUR_MAINNET_RPC_URL`: Your Ethereum mainnet RPC endpoint

:::caution Security
Never share your private key. Ensure your RPC endpoint is secure and trusted.
:::

### Step 5: Delegate to Gateway

Since there's only one gateway in Phase 1, you don't need to delegate to it. You can skip this step.

<!-- 
### Step 6: Install Commit-Boost (Optional for Phase 1)

If you want to prepare for future phases or run your own gateway, install Commit-Boost:

- [Commit-Boost Documentation](https://commit-boost.github.io/commit-boost-client/architecture/overview)
- [Installation Guide](https://commit-boost.github.io/commit-boost-client/getting_started/installation)

:::tip
In Phase 1, gateway delegation means you don't need to run Commit-Boost yourself. The gateway handles block building. However, installing it now prepares you for future phases.
::: -->

## Rewards Structure 💸

### How You Earn

**Preconf Fees**:
- Users pay fees for execution preconfirmations
- Distributed between you, the gateway, and the L2 operator

**MEV Smoothing**:
- Preconf fees are smoothed across all participating validators
- Provides more stable and predictable income
- Reduces variance in validator earnings

**ETH-Denominated**:
- All rewards paid in ETH
- No token lock-ups or illiquid rewards
- Simple and immediate liquidity

### Reward Distribution

```
User pays preconf fee
    ↓
Collected by L2 Fee contract
    ↓
Split between:
├─ L2 Operator (X%)
└─ Puffer Preconf AVS (Y%)
    ├─ Validators (based on participation)
    └─ Gateway (based on service provision)
```

Exact percentages depend on configuration and will be shared during onboarding.

### Claiming Rewards

**On L2**:
Rewards distributed on the L2 where preconfs were provided. You can claim by:

1. Set a claimer address on the rewards contract
2. Sign an EIP-712 hash with your BLS validator key
3. Claim accumulated rewards (can batch claim all periods)

**On EigenLayer** (if applicable):
Additional incentive rewards may be distributed via EigenLayer AVS:
- Claim directly from EigenLayer interface
- Separate from L2 preconf rewards

:::tip
Unclaimed rewards persist indefinitely. You can claim all accumulated rewards in a single transaction at any time.
:::

<!-- ## Running Your Own Gateway (Advanced)

For validators who want maximum control, you can run your own gateway instead of delegating.

### Requirements

**Technical**:
- High-availability infrastructure
- Block building capabilities
- Preconf signing and verification
- L1 settlement management

**Operational**:
- 24/7 monitoring and alerting
- Incident response procedures
- State synchronization with other gateways
- Compliance with lookahead schedule

**Software**:
- Commit-Boost for validator integration
- Gateway software (reference implementation coming)
- Beacon node for lookahead queries
- Execution client for block building

### Resources

- [Gattaca Gateway Architecture](https://gattaca-com.github.io/based-op/architecture/gateway)
- [Commit-Boost Documentation](https://commit-boost.github.io/commit-boost-client/architecture/overview)
- [Gateway Reference Implementation](#) (coming soon)

:::caution
Running your own gateway is significantly more complex than delegating to an existing gateway. Most validators should start with delegation in Phase 1.
::: -->

<!-- ## Monitoring & Operations 📊

### What to Monitor

**Validator Status**:
- Registration status in Puffer Preconf AVS
- Delegation status to gateway
- Validator active status on beacon chain

**Rewards**:
- Accumulated preconf rewards
- Reward distribution events
- Claiming status

**Gateway Performance**:
- Gateway uptime
- Preconf success rate
- Settlement reliability

### Troubleshooting

**Not Earning Rewards?**

Check:
1. ✅ Operator registered in Puffer Preconf AVS
2. ✅ Delegate key set to gateway
3. ✅ Validators enrolled and active
4. ✅ Gateway is functioning (check gateway status)
5. ✅ L2s are actively using preconf service

**Registration Issues?**

- Ensure your operator is registered on EigenLayer first
- Verify you have the correct RPC URL
- Check that your EigenPod is properly delegated
- Confirm validators are active on beacon chain

**Claiming Issues?**

- Ensure claimer address is set correctly
- Verify BLS signature is valid
- Check that rewards have accumulated for your validator
- Confirm you're claiming from the correct L2/contract -->

## Security Considerations 🔒

### In Phase 1

**No Slashing**:
- Validators are NOT slashed in Phase 1
- Only reward forfeiture for missed proposals
- Lower risk, lower barriers to entry

**Trust Assumptions**:
- Must trust gateway to act honestly
- Gateway reputation is important
- Multiple gateways in Phase 2 reduce this risk

### In Future Phases

**Slashing Risk** (Phase 3):
- Economic penalties for misbehavior
- 1 ETH for liveness failures

**Mitigation**:
- Ensure high-availability setup
- Monitor gateway performance closely

## FAQ ❓

**Q: Do I need additional ETH to participate?**
A: No, you use your existing restaked ETH on EigenLayer. No additional deposits required.

**Q: What happens if the gateway goes down?**
A: Your validator would miss preconf rewards for affected slots, but can still propose normal blocks. No slashing in Phase 1.

**Q: What if I want to stop participating?**
A: You can deregister from Puffer Preconf AVS following the standard EigenLayer AVS opt-out process.

**Q: How often do I need to claim rewards?**
A: Rewards don't expire. Claim whenever convenient—you can batch claim all historical rewards in one transaction.

**Q: What's the difference between Puffer Preconf and PBS?**
A: PBS separates block building from proposing. Puffer Preconf adds preconfirmation services on top, allowing you to earn from providing execution guarantees to L2 users.

**Q: Is this compatible with existing MEV-Boost/PBS?**
A: Yes, Puffer Preconf integrates with Commit-Boost which is compatible with existing MEV-Boost setups.

## Support & Resources 🆘

### Documentation

- **Main Documentation**: [Introduction](/puffer-preconf/puffer-preconf-intro)
- **Benefits for L2s**: [Why L2s Choose Puffer Preconf](/puffer-preconf/puffer-preconf-benefits)
- **Protocol Deep Dive**: [Protocol Details](/puffer-preconf/puffer-preconf-protocol)
- **Roadmap**: [Future Plans](/puffer-preconf/puffer-preconf-roadmap)

### External Resources

- [EigenLayer Operator Docs](https://docs.eigenlayer.xyz/eigenlayer/operator-guides/operator-installation)
- [Commit-Boost Documentation](https://commit-boost.github.io/commit-boost-client/architecture/overview)
- [Gattaca Gateway Docs](https://gattaca-com.github.io/based-op/)

### Community

- **Discord**: [Join for validator support](https://discord.gg/puffer)

## Next Steps 🚀

Ready to get started?

1. ✅ **Ensure Prerequisites**: EigenLayer operator, EigenPod, active validators
2. 📥 **Clone Repository**: Get the UniFi AVS contracts
3. 📝 **Register**: Run the registration script
4. 💰 **Start Earning**: Begin earning preconf rewards!

:::tip Phase 2 is Coming
Even if you're not ready to join Phase 1, stay engaged with the community. Phase 2 will bring more gateway options and enhanced features. Early participation helps shape the protocol!
:::

---

:::info Questions?
Join our [Discord](https://discord.gg/puffer). We're here to help you get started with Puffer Preconf!
:::
