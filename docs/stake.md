---
title: Stake
slug: /stakers/stake
---

This section will guide you through the process of staking to the Puffer Protocol. Review the [native Liquid Restaking Tokens](/protocol/nlrt) section to understand the benefits of staking to the Puffer Protocol.

Basically, when you stake your funds to the Puffer Protocol, you will receive a native Liquid Restaking Token (pufETH) in return. This pufETH will be minted to your wallet and will represent your staked ETH. The pufETH is expected to increase its value overtime.

## Connect Wallet

In order to stake to the Puffer Protocol you need to go to the [Stake page](https://app.puffer.fi/stake) and connect your wallet.

![Connect Wallet](/img/stake/connect_wallet.png)

## Select asset

The Puffer Protocol app currently supports the following assets:

- **ETH**: The native token of the Ethereum blockchain.
- **stETH**: A liquid staking token for Ethereum that represents the staked version of ETH in the Lido protocol. It is pegged 1:1 with ETH.
- **wstETH**: A wrapped version of stETH. It is not 1:1 with stETH.

![Select Asset](/img/stake/select_asset.png)

:::info
The Puffer Protocol actually supports WETH as well. However the frontend app does not currently support it. In order to stake WETH, you can interact directly with the smart contract or unwrap your WETH into ETH and stake it through the frontend app.
:::

## Select amount

You can select the amount of ETH, stETH, or wstETH you want to stake. The app will automatically calculate the amount of pufETH you will receive in return. The exchange rate will be the same for ETH and stETH since they are pegged 1:1. For wstETH, the exchange rate will be different.

![Select Amount](/img/stake/select_amount.png)

To understand the exchange rate, check out the [docs](/protocol/nlrt#calculating-the-conversion-rate).

## Stake

Once you have selected the amount you want to stake, you can click on the "Stake" button.

In the case of stETH and wstETH, you will need to first sign a Permit in order to allow the Puffer Protocol to spend your stETH/wstETH. Please note that the Permit is a signature and not a transaction, so you will not be charged any gas fees for it.

In the case of ETH, no Permit is needed since ETH is a native token on the Ethereum blockchain.

In any case, you will need to sign a transaction to stake your funds and receive your pufETH.
