---
title: How to use UniFi Bridge
slug: /unifi-based-rollup-bridge-ui
---

# Using the UniFi Bridge

In order to use the UniFi Rollup Bridge, you need to have a compatible wallet and some funds on the L1 network. This guide will help you bridge your funds from the L1 network to the UniFi Rollup network.

## How to bridge (deposit) ETH to UniFi

1. Open the UniFi Rollup Bridge UI(TODO: link).
2. Connect your preffered wallet.
   ![Connecting the wallet](/img/rollup/connect-wallet.png)
3. Switch your connected network to L1 (Holesky).

   - This can be done manually from the top right corner of the page by clicking on your wallet address.

4. Select the token and the amount you want to bridge and press continue.
   ![Token selection](/img/rollup/select-token.png)
5. Review the transaction details and press confirm.
   ![Transaction confirmation](/img/rollup/confirm-transaction.png)
   :::info
   When bridging ERC20 tokens, you will have an additional transaction to approve the bridge contract to spend your tokens.
   :::
6. Accept the transaction in your wallet.
7. Track the transaction in the Transactions tab.
   ![Transaction tab](/img/rollup/transaction-tab.png)
8. After a few minutes, the transaction will be confirmed and the status will change to Claimed.
   ![Claimed transaction](/img/rollup/claimed-transaction.png)
9. Once the transaction is confirmed, you can switch to the L2 network (Taiko) and see your bridged funds in your wallet.

### Claiming Manually (Optional)

If you want to claim your bridged funds manually, you can do so by following these steps:

1. Press the Claim button on the transaction.
   ![Claim button](/img/rollup/claim-button.png)
2. Review the transaction details and press confirm.
   ![Claim transaction](/img/rollup/claim-transaction.png)
3. After transaction confirmation, you will see your bridged funds in your wallet.

## How to bridge (withdraw) ETH from UniFi

1. Make sure that you've selected UniFi Testnet as your source chain
   ![Token Selection L2](/img/rollup/select-token-l2.png)

2. The other steps are the same as when depositing ETH.
