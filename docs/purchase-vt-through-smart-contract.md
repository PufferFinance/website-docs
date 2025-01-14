---
title: Purchasing Validator Tickets Through Smart Contracts
slug: /protocol/purchase-vt-through-smart-contract
---

:::info 
This page is to help you understand how to purchase Validator Tickets through Smart Contracts.
:::

## Purchasing Validator Tickets (VTs) through Puffer.fi

To purchase Validator Tickets (VTs) through the Puffer Protocol, you can connect your wallet to your Safe and follow these steps. This process involves two main transactions on the Ethereum blockchain.

### Step-by-Step Guide

1. **Connect Your Wallet:**
   - Ensure your wallet is connected to your Safe on the Puffer.fi platform.

2. **Approve pufETH for Spending:**
   - Execute the following transaction to allow the VT contract to spend your pufETH:
     ```solidity
     pufETH.approve(validatorTicketsAddress, pufETHAmount);
     ```
   - This transaction approves the specified amount of pufETH to be spent by the Validator Tickets contract.

3. **Purchase Validator Tickets:**
   - After approval, purchase the VTs using the following transaction:
     ```solidity
     validatorTickets.purchaseValidatorTicketWithPufETH(recipient, vtAmount);
     ```
   - **Important:** Do not use the Puffer Protocol as the recipient if you are executing this transaction manually. Specify the correct recipient address.

4. **Deposit VTs to Puffer Protocol:**
   - Once the VTs are purchased, deposit them into the pufferProtocol contract.

### Example Transactions

For a detailed view of what needs to happen on-chain, you can refer to the mainnet-fork and example transactions available on Tenderly:
- [Tenderly Dashboard - Example Transactions](https://dashboard.tenderly.co/explorer/vnet/ad20a314-c817-46ee-a7f1-1f5c8c315e4a/transactions)

### Notes
- Ensure you have sufficient pufETH balance in your wallet before initiating these transactions.
- Monitor the transaction status on the Ethereum network to confirm successful execution.

By following these steps, you can efficiently purchase and deposit Validator Tickets through the Puffer Protocol, enabling you to participate in the network as a node operator.
