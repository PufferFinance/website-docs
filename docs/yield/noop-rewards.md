---
title: Node Operator Rewards
slug: /nodes/rewards
---

## Withdrawing Consensus Layer Rewards

Node Operators receive rewards in the same way as any other validator on Ethereum. However, while Execution Layer rewards are earned normally and sent to the fee recipient address configured in the Beacon Node client, Consensus Layer rewards flow through the EigenLayer contracts and normally incur a delay.

To make the rewards withdrawal process fast and gas-efficient, Puffer has created a way for withdrawing rewards on Base L2. It requires a minimal amount of gas to withdraw rewards, and it allows validators to receive their rewards as quickly as possible and as often as they need. Node Operator Consensus Layer rewards are automatically bridged to [Base L2](https://www.base.org/) using [Everclear](https://bridge.connext.network/), which validators can withdraw in the form of pufETH.

To withdraw rewards, Node Operators need to sign a transaction on Base by following these steps on the [Puffer Dashboard](https://launchpad.puffer.fi/Dashboard):

1. Click the "Claim" button

![Claim Rewards Card](/img/noop-rewards-1.png)

2. Switch your wallet's network to Base. This step is necessary as the claiming process occurs on Base, and you'll need to sign a transaction there. Ensure you have sufficient ETH for gas.

![Switch to Base](/img/noop-rewards-2.png)

3. Click the "Claim" button again

![Claim Rewards](/img/noop-rewards-3.png)

4. Review the transaction details carefully, then sign it using your wallet.

![Sign Transaction](/img/noop-rewards-4.png)

5. Wait for the transaction confirmation. Once confirmed, you'll receive your rewards on Base.

![Transaction Confirmed](/img/noop-rewards-5.png)

After claiming the rewards, Node Operators can either bridge them back to Ethereum L1 or utilize them on Base L2.

# How Rewards Are Calculated

Rewards are distributed weekly, with the exception of the first distribution, which includes all rewards accumulated since Puffer's mainnet launch.

For each weekly interval, Puffer's Guardians perform the following steps:

1. Compute individual rewards for each Node Operator (sum of all of their associated validators)
2. Calculate the total rewards for the previous intervals
3. Create and publish a Merkle tree of rewards, storing it on AWS S3
4. Mint pufETH tokens and transfer them to the Base Layer 2 network
5. Enforce a mandatory waiting period to revert in case of a security vulnerability
6. Once the waiting period ends, Node Operators can claim their rewards through the L2RewardManager contract on Base using the [Puffer Dashboard](https://launchpad.puffer.fi/Dashboard)

![Rewards Claiming on Base](/img/fwr.png)

### Rewards Epochs and accounting

**Current Rewards Epoch** — this is the epoch up to which rewards have been calculated and posted to Base.

**Next Rewards Epoch** — this is the epoch up to which rewards will be calculated in the upcoming accounting event.

We execute accounting automatically once a week on Monday, but this period of time can be changed in the future.

:::note
We only mint and send to Base the rewards that have been successfully withdrawn from your validator on the Beacon Chain.
:::

### How to check if the rewards calculation is correct

1. Take the Current Rewards Epoch from the dashboard.
2. Go to [beaconcha.in](https://beaconcha.in/) (or any other similar website) and find all withdrawals that occurred with your validators BEFORE this epoch, STARTING from your last Puffer rewards claim.
3. Sum up these withdrawals.
4. This total represents your expected rewards in ETH, which will need to be converted using the exchange rate at the epoch from Step 1.

## Changing Your Rewards Recipient Address

:::caution
Node Operators who used a smart contract (such as a multisig wallet) to register their validators on Ethereum Mainnet **MUST** set a specific rewards claimer address on Base. This step is crucial; without it, they may be unable to claim their rewards on Base.

The reason for this requirement is that addresses on Ethereum Mainnet do not automatically correspond to the same addresses on Base. Therefore, to ensure you can access your rewards, you need to explicitly specify which address on Base should be authorized to claim them.
:::

To change your rewards claimer address on Base, a Node Operator should follow these steps:

1.  Navigate to your [SAFE](https://app.safe.global) account

2.  Select `New transaction`

3.  Select `Transaction Builder`

    ![alt text](/img/change-address-23.png)

4.  Enter the L1RewardManager contract proxy address: [0x157788cc028Ac6405bD406f2D1e0A8A22b3cf17b](https://etherscan.io/address/0x157788cc028Ac6405bD406f2D1e0A8A22b3cf17b)

    ![alt text](/img/change-address-4.png)

5.  Select `Use Implementation ABI`

    ![alt text](/img/change-address-5.png)

6.  Set the `ETH value` amount to a small number, e.g., `0.000042`, this is the relayer fee to pay the bridge who will broadcast the transaction to Base.

7.  Set the `Contract Method Selector` to `setL2RewardClaimer`

8.  Set the `bridge (address)` to Everclear's bridge address [0x8898B472C54c31894e3B9bb83cEA802a5d0e63C6](https://etherscan.io/address/0x8898b472c54c31894e3b9bb83cea802a5d0e63c6)

9.  Enter your new rewards claimer address that you control on Base

10. Click `Add transaction` and then sign the generated SAFE transaction

    ![alt text](/img/change-address-678910.png)

    :::note
    If the `To Address` field doesn't auto-populate, it should be set to the L1RewardManager proxy contract address: [0x157788cc028Ac6405bD406f2D1e0A8A22b3cf17b](https://etherscan.io/address/0x157788cc028Ac6405bD406f2D1e0A8A22b3cf17b).
    :::

11. Wait for the transaction to be bridged from Ethereum Mainnet to Base Layer 2. This process typically takes between 3 to 6 hours, but may take longer if the relayer fee is insufficient.

12. After the transaction is confirmed on Base, the Node Operator can now claim rewards using the specified rewards claimer address on Base.

:::note
Externally Owned Accounts (EOAs) do not need to perform this step. For EOAs, rewards will automatically be sent to the same Node Operators address that registered the validators on Ethereum Mainnet.
:::
