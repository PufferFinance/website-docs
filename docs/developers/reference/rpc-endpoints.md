---
title: RPC Endpoints
slug: /developers/rollup/reference/rpc-endpoints
---

## L1 Endpoints
<p>L1 RPC endpoint: http://rpc.preconf-unifi.xyz/</p>
<p>L1 Block explorer: https://explorer.preconf-unifi.xyz/</p>

## L2 Endpoints
<p>L2 RPC endpoint: http://rpc.preconf-unifi.xyz/</p>
<p>L2 Block explorer: https://explorer.preconf-unifi.xyz/</p>

## UniFi JSON-RPC API
The JSON-RPC supports all Ethereum methods. In addition to that, several custom RPC endpoints have been are available in UniFi Rollup:
| Method                    | Params                                                                 | Rollup Behaviour                                                                                             |
|---------------------------|-----------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| `taiko_headL1Origin`        | None                                                                  | Returns the latest L2 block's corresponding L1 origin                                                       |
| `taiko_l1OriginByID`        | L2 block number                                                       | Returns the L2 block's corresponding L1 origin                                                              |
| `taiko_getSyncMode`         | None                                                                  | Returns the current sync mode of the L2 node. Sync mode can be full, snap or light.                         |
| `taikoAuth_txPoolContent`   | `beneficiary` - coinbase address<br></br>`baseFee`<br></br>`blockMaxGasLimit`<br></br>`maxBytesPerTxList`<br></br>`locals` - a list of prioritised transaction senders from the transaction pool<br></br>`maxTransactionsLists` | Returns multiple transaction lists from the transaction pool, which satisfy all the given limits. Requires JWT authentication. |
