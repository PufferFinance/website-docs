---
title: Withdraw
slug: /stakers/withdraw
---

Withdrawing from the Puffer Protocol means converting your pufETH into WETH. In order to do this, you need to go to the [Puffer Protocol app](https://app.puffer.fi) as if you were staking, and click on the "reverse button" as shown in the image below.

![Withdraw](/img/withdraw/withdraw.png)

When withdrawing, there are two different modes: 1-step withdrawals and 2-step withdrawals.

## 1-step withdrawals (1sw)

Also known as "instant withdrawals", this option allows you to receive your WETH immediately. With a single transaction, the Puffer Protocol converts your pufETH into WETH and transfers it directly to your wallet.

These instant withdrawals are made possible by Puffer's liquidity vault, but include a 1% fee on the withdrawn amount. This fee  will be sent to the protocol treasury.

![1-step withdrawals](/img/withdraw/1sw.png)

## 2-step withdrawals (2sw)

Also known as "standard withdrawals", this option allows you to convert your pufETH into WETH without paying any fees. This mode ensures the Protocol will have enough liquidity to cover the withdrawal, although it might take around 14 days to complete.

![2-step withdrawals](/img/withdraw/2sw.png)

:::warning
This withdrawal mode has a minimum withdrawal amount of 0.01 pufETH.
:::

When you initiate a 2-step withdrawal, you create a withdrawal request. In order to create this request, you will first need to sign a Permit to allow the Puffer Protocol to spend your pufETH. This Permit is a signature and not a transaction, so you will not be charged any gas fees for it. After signing the Permit, you will need to sign a transaction to create the withdrawal request, transferring your pufETH to the Puffer Protocol.

This request is stored in the Puffer Protocol and will be included into a withdrawal batch. The backend will then process the batches periodically. If there is not enough liquidity in the vault, the protocol will have to remove a validator (or multiple if the withdrawal amount is large) from in order to free up some liquidity (32 ETH per validator). This is a multi step process that includes sending a voluntary exit message to the Beacon Chain and queueing a withdrawal request to the Eigenlayer protocol. These processes have delays that can take up to 14 days to complete.

Once you have requested a withdrawal, it will appear in your portfolio, in the [Withdrawal Claims](https://app.puffer.fi/portfolio) tab.

![Withdrawal Claims](/img/withdraw/withdrawal_claims.png)

:::info
If there is enough liquidity in the vault so no validators need to be removed, this process might take much less time.
:::

Once the withdrawal batch is processed, you will be able to complete the withdrawal in your [Withdrawal Claims](https://app.puffer.fi/portfolio) tab. This process will include sending a transaction to the Puffer Protocol, converting your pufETH into WETH and transferring it to your wallet.
