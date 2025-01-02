---
title: Voting
slug: /governance/voting
---

Voting will occur on the [Puffer Governance Hub](https://vote.puffer.fi) and requires you to have staked vePUFFER. See the [vePUFFER](governance-token.md#what-is-vepuffer) section for more information.

## Staking PUFFER for vePUFFER

In order for you to stake your PUFFER, you must first have at least 70 PUFFER tokens as outlined in the [vePUFFER parameters](governance-token.md#vepuffer-parameters). You can get PUFFER tokens from:

- The official [claims page](https://claims.puffer.fi) if you are eligible for any of the campaigns.
- A decentralized exchange, such as [Uniswap](https://app.uniswap.org/explore/tokens/ethereum/0x4d1c297d39c5c1277964d0e3f8aa901493664530).
- A centralized exchange, such as [Bybit](https://www.bybit.com/en/trade/spot/PUFFER/USDT), [Bitget](https://www.bitget.com/spot/PUFFERUSDT), [Kraken](https://pro.kraken.com/app/trade/puffer-usd) and [many more](https://coinmarketcap.com/currencies/puffer/#Markets).

![Puffer Governance Hub's staking page](/img/governance-stake.png)

When you have your tokens, you will need to go to the [staking page](https://vote.puffer.fi/plugins/stake/) on our Puffer Governance Hub to stake your PUFFER tokens to receive voting power.

If this is your first time staking your PUFFER tokens, you may be asked to approve the [vePUFFER contract](https://etherscan.io/address/0xA55eD5808aeCDF23AE3782C1443185f5D2363ce7) to spend your [PUFFER tokens](https://etherscan.io/address/0x4d1C297d39C5c1277964D0E3f8Aa901493664530). This is a required step before you can actually stake your PUFFER tokens. You can only stake your PUFFER tokens after the approval is given.

We use the voting escrow (ve) model where your PUFFER tokens are locked up in an ERC-721 NFT that represents a receipt of your PUFFER tokens locked up for governance purposes - this is what we refer to as vePUFFER. Once you have the vePUFFER token in your wallet, your voting power will start to accrue over time, according to the current [vePUFFER parameters](governance-token.md#vepuffer-parameters):

- Initially at a 1x multiplier, i.e. your vePUFFER voting power will be proportional to the amount of PUFFER you stake.
- Up to a maximum of 2x multiplier at the end of two years.


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
