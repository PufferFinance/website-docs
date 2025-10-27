---
title: Integration Guide for L2s
slug: /puffer-preconf-integration
---

# Integrating Puffer Preconf into Your L2

This guide provides L2 teams with the technical information needed to integrate Puffer Preconf into their rollup.

## Integration Overview 🎯

Integrating Puffer Preconf into your L2 involves:

1. **Choosing a gateway provider** (or running your own)
2. **Configuring your rollup** to route transactions through preconf RPC
3. **Setting up settlement** on L1
4. **Implementing preconf response handling** in your frontend/clients
5. **Configuring economic parameters** (fee sharing, etc.)

<!-- PLACEHOLDER: Integration Architecture Diagram
Description: Show L2 infrastructure components (Frontend → Preconf RPC → Gateway → Validator → L1), highlighting integration touchpoints for L2 teams -->

## Prerequisites ✅

Before integrating, ensure you have:

- **Rollup Infrastructure**: Functioning L2 rollup (OP Stack or compatible)
- **L1 Contracts**: Inbox contract for batch settlement
- **RPC Infrastructure**: Ability to route user transactions
- **Technical Team**: Developers familiar with your rollup stack

## Step 1: Choose Your Gateway Provider 🌐

Puffer Preconf supports multiple gateway providers, giving you flexibility in integration approach.

### Option A: Use Existing Gateway (Recommended for Phase 1)

**Gattaca Gateway** - Production-ready for OP-based rollups:
- ✅ Live and tested
- ✅ Sub-100ms confirmations using "frags" architecture
- ✅ Proven reliability
- ✅ Full documentation: [Gattaca Docs](https://gattaca-com.github.io/based-op/)

**Integration Steps**:
1. Contact Gattaca team for onboarding
2. Receive RPC endpoint and API credentials
3. Configure your rollup to route transactions
4. Set up fee sharing parameters

**Google Gateway** - Coming Soon:
- Enterprise-grade infrastructure
- Additional redundancy
- Timeline: TBA

### Option B: Run Your Own Gateway

For L2s wanting maximum control, you can operate your own gateway.

**Requirements**:
- Own EigenPod or relationship with EigenPod operator
- Run Commit-Boost software
- Implement gateway logic (block building, preconf signing, settlement)
- Maintain high availability infrastructure

**Benefits**:
- Full control over preconf service
- No third-party dependency
- Custom economic models

**Resources**:
- [Commit-Boost Documentation](https://commit-boost.github.io/commit-boost-client/architecture/overview)
- [Gateway Architecture Reference](https://gattaca-com.github.io/based-op/architecture/gateway)
- [UniFi AVS Registry](https://github.com/PufferFinance/UniFi) - For operator registration

:::info
Most L2s should start with Gattaca gateway in Phase 1, then consider running their own gateway in later phases as they scale.
:::

## Step 2: Configure Transaction Routing 🔀

Your L2 needs to route user transactions through the preconf RPC endpoint.

### Frontend Integration

Update your wallet/dapp integration to use the preconf RPC:

```javascript
// Example: Configure web3 provider to use preconf RPC
const preconfRpcUrl = "https://preconf-rpc.your-gateway.com";

const provider = new ethers.providers.JsonRpcProvider(preconfRpcUrl);

// Submit transaction through preconf RPC
const tx = await wallet.sendTransaction({
  to: recipientAddress,
  value: ethers.utils.parseEther("1.0"),
  // Preconf-specific fields
  preconfRequested: true,
  maxPreconfFee: ethers.utils.parseUnits("0.001", "gwei")
});

// Receive preconf response
const preconf = await provider.getPreconfirmation(tx.hash);
console.log("Preconf received:", preconf);
// preconf includes:
// - Signed commitment from gateway
// - Expected execution state
// - Timestamp
// - Slot number
```

### Backend Integration

Configure your sequencer/node to work with preconf commitments:

```javascript
// Example: Verify preconf signatures
const verifyPreconf = async (preconf) => {
  // Verify gateway signature
  const gatewayAddress = await getGatewayFromRegistry(preconf.slot);
  const isValid = verifySignature(
    preconf.commitment,
    preconf.signature,
    gatewayAddress
  );

  if (!isValid) {
    throw new Error("Invalid preconf signature");
  }

  return preconf;
};
```

### RPC Methods

Preconf-enabled RPC endpoints support standard Ethereum JSON-RPC methods plus preconf-specific methods:

**Standard Methods**:
- `eth_sendRawTransaction`
- `eth_getTransactionReceipt`
- `eth_call`

**Preconf-Specific Methods**:
- `eth_getPreconfirmation(txHash)` - Get preconf for a transaction
- `eth_requestPreconf(tx, maxFee)` - Request preconf for transaction
- `eth_getGatewayStatus()` - Check current gateway availability

## Step 3: Configure L1 Settlement ⚓

Your rollup's batch settlement on L1 must be compatible with the lookahead mechanism.

### Inbox Contract Integration

Ensure your inbox contract can verify gateway signatures:

```solidity
// Example: Simplified inbox contract interface
interface IPreconfInbox {
    // Post batch with gateway signature
    function postBatch(
        bytes calldata batchData,
        bytes calldata gatewaySignature,
        uint256 slot
    ) external;

    // Verify gateway for slot
    function verifyGateway(address gateway, uint256 slot)
        external view returns (bool);
}
```

### Gateway Lookahead

The lookahead mechanism assigns gateways to specific L1 slots:

<!-- PLACEHOLDER: Lookahead Schedule Diagram
Description: Timeline showing L1 slots mapped to different gateways (Gateway A → slots 1-10, Gateway B → slots 11-20, etc.), with indicators for batch settlement timing -->

**Key Concepts**:
- Each gateway has exclusive write access for assigned slots
- Gateways must settle batches by end of their slot window
- Next gateway in sequence handles settlement if previous fails
- Slashing occurs for failed settlements

### Settlement Flow

1. **Gateway issues preconfs** during its slot window
2. **Gateway builds L2 batch** with preconfed transactions
3. **Gateway posts batch** to L1 inbox contract before slot ends
4. **L1 verifies gateway signature** and updates L2 state root
5. **Rewards distributed** to gateway, validators, and L2 operator

## Step 4: Implement Preconf Response Handling 📡

Your frontend and backend must handle preconf responses appropriately.

### User Experience

**Preconf Received**:
```javascript
// Show immediate confirmation to user
displayNotification({
  type: "success",
  message: "Transaction preconfirmed! Executing in ~100ms",
  txHash: preconf.txHash,
  expectedState: preconf.executionResult
});

// Update UI with expected state
updateBalance(preconf.executionResult.newBalance);
updateTokenBalances(preconf.executionResult.tokenChanges);
```

**L1 Settlement**:
```javascript
// Wait for L1 finality in background
const receipt = await provider.waitForTransaction(tx.hash);
displayNotification({
  type: "info",
  message: "Transaction finalized on L1",
  txHash: tx.hash
});
```

### Error Handling

Handle cases where preconf fails or doesn't match final state:

```javascript
// Monitor for preconf violations
const monitorPreconf = async (preconf) => {
  // Wait for actual L1 settlement
  const receipt = await provider.waitForTransaction(preconf.txHash);

  // Compare actual result with preconf commitment
  if (!matchesPreconf(receipt, preconf.commitment)) {
    // Preconf violated - user eligible for refund
    console.error("Preconf violation detected!");

    // Trigger refund claim process
    await claimPreconfRefund(preconf, receipt);
  }
};
```

## Step 5: Configure Economic Parameters 💰

Set up fee sharing and reward distribution.

### Fee Structure

Configure how preconf fees are charged to users:

```javascript
// Example fee configuration
const preconfFeeConfig = {
  baseFee: "0.001 gwei",        // Base preconf fee
  priorityFeeMultiplier: 1.5,   // Multiplier for priority txs
  congestionMultiplier: 2.0,    // Multiplier during high congestion
  maxFee: "0.01 gwei"           // Maximum preconf fee cap
};
```

### Revenue Sharing

Work with Puffer Preconf team to configure revenue split:

- **L2 Operator Share**: X%
- **Validator Share**: Y%
- **Gateway Share**: Z%

:::tip
Revenue sharing parameters are configurable during onboarding. Contact the Puffer team to discuss optimal fee structures for your rollup.
:::

### Rewards Contract

Link the rewards manager to your sequencer's `block.coinbase`:

```solidity
// Example configuration
contract SequencerConfig {
    address public rewardsManager;
    uint256 public l2OperatorShare; // Basis points (e.g., 3000 = 30%)

    constructor(address _rewardsManager, uint256 _l2Share) {
        rewardsManager = _rewardsManager;
        l2OperatorShare = _l2Share;
    }
}
```

## Step 6: Testing and Deployment 🧪

### Testnet Integration

Before mainnet launch:

1. **Deploy to testnet** with test gateway
2. **Submit test transactions** through preconf RPC
3. **Verify preconf responses** are correctly signed
4. **Test settlement** on L1 testnet
5. **Validate fee distribution** works as expected

### Monitoring and Observability

Set up monitoring for:

- **Preconf success rate**: % of preconfs that settle correctly
- **Latency**: Time from submission to preconf response
- **Gateway uptime**: Availability of gateway service
- **Settlement time**: Time from preconf to L1 finality
- **Fee revenue**: Tracking of preconf fee income

### Gradual Rollout

Recommended deployment approach:

1. **Phase 1**: Enable preconf for internal testing
2. **Phase 2**: Offer preconf as opt-in for power users
3. **Phase 3**: Enable preconf by default for all users
4. **Phase 4**: Fully transition to preconf-based sequencing

## Integration Checklist ✅

Before going live, ensure:

- [ ] Gateway provider selected and configured
- [ ] RPC endpoints integrated into frontend
- [ ] Preconf response handling implemented
- [ ] L1 inbox contract compatible with gateway signatures
- [ ] Revenue sharing parameters configured
- [ ] Monitoring and alerting set up
- [ ] Testnet testing completed successfully
- [ ] User documentation updated
- [ ] Support team trained on preconf troubleshooting
- [ ] Rollback plan prepared

## Rollup-Specific Guides 📚

### OP Stack Rollups

OP Stack rollups have the most mature integration path:

**Additional Resources**:
- [Gattaca OP Stack Integration](https://gattaca-com.github.io/based-op/architecture/gateway)
- [Based OP Documentation](https://gattaca-com.github.io/based-op/)

**Key Considerations**:
- Use Gattaca's frag-based architecture for sub-100ms confirmations
- Ensure batcher is compatible with gateway batch posting
- Configure dispute game parameters for preconf compatibility

### Other Rollup Architectures

Support for additional rollup types coming soon:

- **Arbitrum Orbit**: Planned for Phase 2
- **zkSync Stack**: Under research
- **Polygon CDK**: Under research
- **Custom Rollups**: Contact team for feasibility assessment

## Support and Resources 🆘

### Documentation

- **Protocol Deep Dive**: [Protocol Architecture](/puffer-preconf/puffer-preconf-protocol)
- **Benefits Guide**: [Why Puffer Preconf](/puffer-preconf/puffer-preconf-benefits)
- **Roadmap**: [Current Status and Future Plans](/puffer-preconf/puffer-preconf-roadmap)

### Gateway Documentation

- [Gattaca Gateway Docs](https://gattaca-com.github.io/based-op/)
- [Commit-Boost Documentation](https://commit-boost.github.io/commit-boost-client/architecture/overview)
- [Fabric Constraint API](https://eth-fabric.github.io/website/)

### Code Examples

- [UniFi AVS GitHub](https://github.com/PufferFinance/UniFi) - AVS contracts and registry
- [Example L2 Integration](#) - Reference implementation (coming soon)

### Community

- **Discord**: [Join for technical support](#)
- **Telegram**: [L2 Integrators Channel](#)
- **GitHub Discussions**: [Ask questions and share feedback](#)

:::tip Get Help
Integrating Puffer Preconf? Our team is here to help! Reach out via [Discord](#) or [email](#) for personalized integration support.
:::

## Next Steps 🚀

1. **Review the [Protocol Architecture](/puffer-preconf/puffer-preconf-protocol)** to understand technical details
2. **Contact Gattaca** to start integration process
3. **Join our community** for integration support
4. **Deploy to testnet** and start testing
5. **Share feedback** to help improve the integration experience

---

## FAQ ❓

**Q: Do I need to run my own gateway?**
A: No, you can use existing gateways like Gattaca. Running your own gateway is optional for L2s wanting maximum control.

**Q: What rollup types are supported?**
A: OP Stack rollups are fully supported in Phase 1. Additional architectures coming in future phases.

**Q: How much does integration cost?**
A: No upfront cost. You earn a share of preconf fees collected from users.

**Q: What if the gateway goes down?**
A: Multiple gateways provide redundancy. Your rollup can fall back to standard L1 settlement if all gateways are unavailable.

**Q: Can I customize fee structures?**
A: Yes, fee sharing parameters are configurable during onboarding.

**Q: How long does integration take?**
A: Typical integration takes 2-4 weeks for OP Stack rollups with Gattaca gateway.
