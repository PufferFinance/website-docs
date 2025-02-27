---
title: Purchasing Validator Tickets using Safe multisig
slug: /protocol/purchase-vt-through-using-safe
---

:::info 
This page is to help you understand how to purchase Validator Tickets using Safe multisig.
:::

## Purchasing Validator Tickets (VTs) through Puffer.fi

To purchase Validator Tickets (VTs) through the Puffer Protocol, you can use wallet connect to connect your Safe multisig to our dashboard. If you are purchasing VT with pufETH, you can expect to see two transactions on your Safe interface. After you sign the first transaction, a second will appear.
With Safe, you can sign multiple transactions, after signing them you can batch execute them together in one transaction, or you can execute them individually.

### Step-by-Step Guide purchase VT with ETH

1. **Connect Your Wallet:**
   - Ensure your wallet is connected to your Safe on the Launchpad Puffer.fi platform.

2. **The second transaction is the purchase of the VT with ETH:**
   - After approval, purchase the VTs using the following transaction:
     ```solidity
     validatorTickets.purchaseValidatorTicket(recipient);
     ```
   - **Important:** Do not use the Puffer Protocol as the recipient if you are executing this transaction manually. Specify the correct recipient address (it is recommended to use your own multisig address)

4. **Deposit VTs to Puffer Protocol:**
   - Once the VTs are purchased, deposit them into the PufferProtocol contract.

### Notes
- Ensure you have sufficient ETH balance in your wallet before initiating these transactions.
- Monitor the transaction status on the Ethereum network to confirm successful execution.

### Step-by-Step Guide purchase VT with pufETH

1. **Connect Your Wallet:**
   - Ensure your wallet is connected to your Safe on the Launchpad Puffer.fi platform.

2. **The first transaction is approval for pufETH to be spent by the VT contract:**
   - Execute the following transaction to allow the VT contract to spend your pufETH:
     ```solidity
     pufETH.approve(validatorTicketsAddress, pufETHAmount);
     ```
   - This transaction approves the specified amount of pufETH to be spent by the Validator Tickets contract.

3. **The second transaction is the purchase of the VT with pufETH:**
   - After approval, purchase the VTs using the following transaction:
     ```solidity
     validatorTickets.purchaseValidatorTicketWithPufETH(recipient, vtAmount);
     ```
   - **Important:** Do not use the Puffer Protocol as the recipient if you are executing this transaction manually. Specify the correct recipient address. (it is recommended to use your own multisig address)

4. **Deposit VTs to Puffer Protocol:**
   - Once the VTs are purchased, deposit them into the PufferProtocol contract.
   

### Example Transactions

For a detailed view of what needs to happen on-chain, you can refer to the mainnet-fork and example transactions available on Tenderly:
- [Tenderly Dashboard - Example Transactions](https://dashboard.tenderly.co/explorer/vnet/ad20a314-c817-46ee-a7f1-1f5c8c315e4a/transactions)

### Notes
- Ensure you have sufficient pufETH balance in your wallet before initiating these transactions.
- Monitor the transaction status on the Ethereum network to confirm successful execution.

By following these steps, you can efficiently purchase and deposit Validator Tickets through the Puffer Protocol, enabling you to participate in the network as a node operator.
