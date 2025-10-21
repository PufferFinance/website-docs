---
title: Purchasing VTs using Safe Multisig Wallet
slug: /protocol/purchase-vt-through-using-safe
---

:::info
This guide will help you purchase Validator Tickets using your Safe multisig wallet.
:::

## Introduction

Validator Tickets (VTs) allow you to participate in the Puffer Protocol as a node operator. This guide will walk you through the process of connecting your Safe multisig wallet to our dashboard and purchasing VTs using either ETH or pufETH.

## Connecting Your Safe Multisig to Puffer LaunchPad

1. Navigate to the [Puffer Launchpad](https://launchpad.puffer.fi).

2. On the Puffer LaunchPad, You will be prompted to connect your wallet. Select WalletConnect from the list of options.

   ![Wallet Connect](/img/purchase-vt-safe-1.png)

3. Click on `OPEN` to get the official WalletConnect modal.

   ![WalletConnect](/img/purchase-vt-safe-2.png)

4. Copy the WalletConnect link by clicking on the `Copy` button.

   ![Safe Multisig](/img/purchase-vt-safe-3.png)

5. In your Safe interface, click on the WalletConnect icon in the top right in the bar.

   ![Safe Multisig](/img/purchase-vt-safe-4.png)

6. Paste the WalletConnect link from Puffer LaunchPad into the popup window and confirm the connection.

   ![Safe Multisig](/img/purchase-vt-safe-5.png)

7. Return to the Puffer LaunchPad. You should now see your Safe wallet connected and ready to purchase VTs. Click on `Continue` to move to the next step.

   ![Safe Multisig](/img/purchase-vt-1-step.png)

## Purchasing VTs with ETH

1. Navigate to the Top Up section on the LaunchPad. Select `Validator Ticket` option.

   ![Safe Multisig](/img/purchase-vt-safe-6.png)

2. Select `ETH` as the payment currency, enter the amount of VT you want to purchase and `Submit Transaction`.

   ![Safe Multisig](/img/purchase-vt-safe-7.png)

3. You'll be redirected to your Safe interface where you can review the transaction details. Verify the amount of ETH being spent and the number of VTs you're purchasing. You can also simulate the transaction. Click on `Sign` to approve the transaction.

   ![Safe Multisig](/img/purchase-vt-safe-8.png)

4. Other owners of the Safe will need to sign the transaction as well, according to your Safe's signature requirements. Once executed, you can view the transaction on the Puffer LaunchPad. And your VT will be added to your account.

   ![Safe Multisig](/img/purchase-vt-3-transaction-submitted.png)

## Purchasing VTs with pufETH

When using pufETH, you'll need to complete two separate transactions:

1. Navigate to the Validator Ticket purchase section on the LaunchPad. Select `Validator Ticket` option, select `pufETH` as the payment currency, enter the amount of VT you want to purchase and `Submit Transaction`.

![Safe Multisig](/img/purchase-vt-safe-9.png)

2. The first transaction will ask for approval to spend your pufETH:

   - Review the approval amount and address of the spender contract which should be ValidatorTicket contract address : [0x7D26AD6F6BA9D6bA1de0218Ae5e20CD3a273a55A](https://etherscan.io/address/0x7D26AD6F6BA9D6bA1de0218Ae5e20CD3a273a55A)
   - Click "Add to Batch" to add the transaction to the batch.

   ![Safe Multisig](/img/purchase-vt-safe-10.png) ![Safe Multisig](/img/purchase-vt-safe-11.png)

3. After the approval transaction is added to the batch, a second transaction will appear:

   - This transaction is for the actual VT purchase
   - Verify the number of VTs you're purchasing
   - Click "Add to Batch" to add the transaction to the batch.
   - Wait for other Safe owners to sign

4. Once batch is signed, get it signed by other owners of the Safe and execute the batch.

5. After successful execution, you'll see the transaction on the Puffer LaunchPad. And your VT will be added to your account.

   ![Safe Multisig](/img/purchase-vt-3-transaction-submitted.png)

## Transaction Batching (Optional)

With Safe, you have the option to:

- Execute transactions individually as they are signed
- Or batch multiple signed transactions together and execute them in a single transaction to save on gas fees
- In this guide, we've shown how to batch the transactions together.

## Important Notes

- Ensure you have sufficient ETH or pufETH balance in your Safe wallet before initiating these transactions.
- The minimum purchase is 1 VT.
- You can track all your transactions in the "Activity" section of your Safe.
- If you encounter any issues, please contact Puffer team.
