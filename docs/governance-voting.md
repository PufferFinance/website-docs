---
title: Voting
slug: /governance/voting
---

This guide contains everything you need to get started with voting in Puffer Governance. Voting will occur on the [Puffer Voting Platform](https://vote.puffer.fi) and requires you to have staked vePUFFER. See the [vePUFFER](governance-token.md#what-is-vepuffer) section for more information.

To participate in Puffer Governance, you will need:

- A crypto wallet that supports Ethereum mainnet
- [PUFFER](https://etherscan.io/address/0x4d1c297d39c5c1277964d0e3f8aa901493664530) tokens to mint vePUFFER, which will be explained below
- ETH to cover for transaction costs

## Minting vePUFFER
:::note
Instructions are subject to change.
:::

To mint vePUFFER, you must have PUFFER tokens which you can get from:

- Puffer's official [claims page](https://claims.puffer.fi) if you have been allocated some in Season 1
- [Uniswap](https://app.uniswap.org/explore/tokens/ethereum/0x4d1c297d39c5c1277964d0e3f8aa901493664530) to purchase some from existing Uniswap liquidity pools


![Puffer's official claims page](/img/token-claim.png)

Once you have claimed your tokens, you will need to approve the [vePUFFER contract](https://etherscan.io/address/0xA55eD5808aeCDF23AE3782C1443185f5D2363ce7) to spend your [PUFFER tokens](https://etherscan.io/address/0x4d1C297d39C5c1277964D0E3f8Aa901493664530). Your vePUFFER voting power will start proportional to the amount of PUFFER you stake and increase the longer you hold the NFT.

:::note
The minimum stake amount is 70 PUFFER as outlined in the [vePUFFER parameters](governance-token.md#vepuffer-parameters).
:::
![alt text](/img/token-approve.png)

Once you have approved the vePUFFER contract, you can stake your PUFFER tokens. The vePUFFER NFT will be sent to your wallet.
![alt text](/img/token-stake.png)

Congratulations! You now have vePUFFER and can participate in governance.
:::note
There is a three day warmup period after minting your vePUFFER tokens before you can start voting - see the [vePUFFER](governance-token.md#vepuffer-parameters) section for more details.
:::
![alt text](/img/token-complete.png)

## How to Vote

Proposals are first created and discussed on the [Governance Forum](https://governance.puffer.fi) and then posted to the [Puffer DAO Hub](https://vote.puffer.fi) for voting.

1. Navigate to [vote.puffer.fi](https://vote.puffer.fi)
2. Connect your wallet
3. View proposals on the `Latest proposals` window or via the `Community` tab
![alt text](/img/vote-latest.png)
4. Select the proposal to read more about it
![alt text](/img/vote-proposal.png)
5. Vote on proposals by clicking the `Vote` button

The proposal passes unless rejections outnumber approvals after the voting period has ended. Specifically, a proposal is approved if:
   - Approvals exceed or equal rejections
   - No votes are cast (effectively treated as equal approvals and vetoes)

:::note
Initially the votes will be cast using Snapshot voting. In our next phase we will transition to fully on-chain voting. 
:::
