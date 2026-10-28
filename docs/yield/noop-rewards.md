---
title: Node Operator Rewards
slug: /nodes/rewards
---

## Withdrawing Consensus Layer Rewards

Node Operators receive rewards in the same way as any other validator on Ethereum. However, while Execution Layer rewards are earned normally and sent to the fee recipient address configured in the Beacon Node client, Consensus Layer rewards flow through the EigenLayer contracts and normally incur a delay.

To make the rewards withdrawal process fast and gas-efficient, Node Operator Consensus Layer rewards are not withdrawn from the EigenPods for each validator. Instead, Puffer mints them as pufETH on Ethereum through the `L1RewardManager` contract, and Node Operators claim their pufETH with a single transaction on Ethereum.

:::note
Until October 2026, rewards were bridged to [Base](https://www.base.org/) and claimed there. Rewards minted before that change can still be claimed on Base. The [Puffer Dashboard](https://launchpad.puffer.fi/Dashboard) shows on which network your rewards are claimed.
:::

To withdraw rewards, Node Operators need to sign a transaction by following these steps on the [Puffer Dashboard](https://launchpad.puffer.fi/Dashboard):

1. Click the "Claim" button

![Claim Rewards Card](/img/noop-rewards-1.png)

2. If your wallet is not on the network where the rewards are claimed (Ethereum, or Base for older rewards), you will be asked to switch it. Ensure you have sufficient ETH for gas on that network.

![Switch to Ethereum](/img/noop-rewards-2.png)

3. Click the "Claim" button again

![Claim Rewards](/img/noop-rewards-3.png)

4. Review the transaction details carefully, then sign it using your wallet.

![Sign Transaction](/img/noop-rewards-4.png)

5. Wait for the transaction confirmation. Once confirmed, you'll receive your rewards as pufETH in your wallet.

![Transaction Confirmed](/img/noop-rewards-5.png)

# How Rewards Are Calculated

Rewards are distributed about every 2 weeks.

For each interval, Puffer's Guardians perform the following steps:

1. Compute individual rewards for each Node Operator (sum of all of their associated validators)
2. Calculate the total rewards for the interval
3. Create and publish a Merkle tree of rewards, storing it on IPFS. Its URL is recorded on-chain with each mint
4. Mint the rewards as pufETH on Ethereum, in the `L1RewardManager` contract
5. Enforce a mandatory waiting period of 24 hours, during which a wrong interval can be frozen and reverted in case of a security vulnerability
6. Once the waiting period ends, Node Operators can claim their rewards from the `L1RewardManager` contract on Ethereum using the [Puffer Dashboard](https://launchpad.puffer.fi/Dashboard)

### Rewards Epochs and accounting

**Current Rewards Epoch** — this is the epoch up to which rewards have been calculated and minted.

**Next Rewards Epoch** — this is the epoch up to which rewards will be calculated in the upcoming accounting event.

We execute accounting about every 2 weeks, but this period of time can be changed in the future.

:::note
We only mint the rewards that have been successfully withdrawn from your validator on the Beacon Chain.
:::

### How to check if the rewards calculation is correct

1. Take the Current Rewards Epoch from the dashboard.
2. Go to [beaconcha.in](https://beaconcha.in/) (or any other similar website) and find all withdrawals that occurred with your validators BEFORE this epoch, STARTING from your last Puffer rewards claim.
3. Sum up these withdrawals.
4. This total represents your expected rewards in ETH, which will need to be converted using the exchange rate at the epoch from Step 1.

## Smart Contract Wallets

Rewards claimed on Ethereum are always sent to the address that registered the validators on Ethereum, including smart contract wallets such as a multisig. No additional setup is required to claim them.
