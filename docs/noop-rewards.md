---
title: Node Operator Rewards
slug: /nodes/rewards
---

# Rewards Overview

With the Puffer's 'Fast Path Rewards' upgrade, Node Operators will be able to claim their consensus rewards in a gas-efficient way on the [Base Layer 2 blockchain](https://www.base.org/).

The consensus rewards that the Puffer Validators earn are sent to EigenPods owned by the PufferModules. When the Beacon chain ETH hits the EigenPod, our Guardians will calculate the rewards, mint them as pufETH, and bridge them to Base Layer 2 using the [Everclear (Connext) bridge](https://bridge.connext.network/) and the XERC20 standard. So on Base, Node Operators receive xPufETH, which is the same as the pufETH token on Ethereum Mainnet but on Base.

# The Process

The rewards will be distributed in intervals of 1 day (except for the first interval, which will contain all rewards from the launch day).

For each interval, the Puffer's Guardians will:
1. Calculate the rewards for each Node Operator
2. Calculate the sum of all rewards for the previous interval
3. Generate and publish the rewards Merkle tree and upload it to AWS S3
4. Mint pufETH and bridge it to Base Layer 2
5. After the transaction is confirmed on Base, there is a claiming delay period where claiming is locked for that rewards interval
6. After the claiming delay, Node Operators can claim rewards from the L2RewardManager contract on Base using the Puffer Dashboard

![Rewards Claiming on Base](../static/img/fwr.png)

## Setting the Rewards Recipient on Base

:::caution
Node Operators who used a smart contract (e.g., a multisig wallet) to register their validators **MUST** set the rewards claimer on Base; otherwise, they will not be able to claim rewards.

It is not possible to always have the same address on Base as the one used on Ethereum Mainnet when registering validators.
:::

To set the rewards claimer on Base, a Node Operator needs to:

1. Go to the [Puffer Dashboard](https://puffer.fi/dashboard) @todo
2. Execute a `Set Rewards Claimer` transaction (This is an Ethereum Mainnet transaction that will be bridged to Base)
3. The transaction data will be bridged from Ethereum Mainnet to Base Layer 2, which takes ~3-6 hours (it can take longer if the relayer fee is underpaid)
4. Once the transaction is confirmed on Base, the Node Operator can claim rewards to the rewards claimer address on Base.


:::note
For EOA (Externally Owned Accounts), this is not required. By default, rewards will be sent to the address that registered the validators on Ethereum Mainnet.
:::