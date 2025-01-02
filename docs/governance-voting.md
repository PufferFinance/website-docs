---
title: Voting
slug: /governance/voting
---

Voting will occur on the [Puffer DAO Hub](https://vote.puffer.fi) and requires you to have staked vePUFFER. In this document, we will guide you through how you can stake PUFFER to receive vePUFFER, which is required to participate in Puffer's governance.

If you are looking for the current vePUFFER parameters, refer to the [vePUFFER](governance-token.md#what-is-vepuffer) section for more information.

## Staking PUFFER for vePUFFER

In order for you to stake your PUFFER, you must first have at least 70 PUFFER tokens in your crypto wallet, which is the minimum required for staking as defined in the [vePUFFER parameters](governance-token.md#vepuffer-parameters).

You can get PUFFER tokens from:

- The official [claims page](https://claims.puffer.fi) if you are eligible for any of the campaigns.
- A decentralized exchange, such as [Uniswap](https://app.uniswap.org/explore/tokens/ethereum/0x4d1c297d39c5c1277964d0e3f8aa901493664530).
- A centralized exchange, such as [Bybit](https://www.bybit.com/en/trade/spot/PUFFER/USDT), [Bitget](https://www.bitget.com/spot/PUFFERUSDT), [Kraken](https://pro.kraken.com/app/trade/puffer-usd) and [many more](https://coinmarketcap.com/currencies/puffer/#Markets), and then transfer them to your own crypto wallet.

<img src="/img/governance-stake.png" height="400" alt="Puffer Governance Hub's staking page"></img>

When you have your tokens, you will need to go to the [staking page](https://vote.puffer.fi/plugins/stake/) on our Puffer Governance Hub to stake your PUFFER tokens to receive voting power.

If this is your first time staking your PUFFER tokens, you may be asked to approve the [vePUFFER voting escrow](https://etherscan.io/address/0xA55eD5808aeCDF23AE3782C1443185f5D2363ce7) to spend your [PUFFER tokens](https://etherscan.io/address/0x4d1C297d39C5c1277964D0E3f8Aa901493664530).

<img src="/img/governance-approve-puffer.png" height="500" alt="Approve PUFFER for use on vePUFFER contract"></img>

This is a required step before you can actually stake your PUFFER tokens. You can only stake your PUFFER tokens after the approval is given to the voting escrow contract.

<img src="/img/governance-approve-puffer-approved.png" height="150" alt="Puffer"></img>

Once your PUFFER approval transaction has been confirmed, you can then proceed to stake your PUFFER tokens. We use the voting escrow (ve) model where your PUFFER tokens are locked up in an ERC-721 NFT that represents a receipt of your PUFFER tokens locked up for governance purposes - this is what we refer to as [vePUFFER](https://etherscan.io/token/0x1b6ec227ceBeC25118270efbb4b67642fc29965E).

<img src="/img/governance-stake-puffer.png" height="500" alt="Stake PUFFER via create lock contract call"></img>

Once you have the vePUFFER token in your wallet, your voting power will start to accrue over time, according to the current [vePUFFER parameters](governance-token.md#vepuffer-parameters):

- Initially at a 1x multiplier, i.e. your vePUFFER voting power will be proportional to the amount of PUFFER you stake.
- Up to a maximum of 2x multiplier at the end of two years.

Once you see the notification informing you that you've staked successfully, your vePUFFER will be in the warmup stage.

:::note
There is a three day warmup period after minting your vePUFFER tokens before you can start voting - see the [vePUFFER](governance-token.md#vepuffer-parameters) section for more details.
:::


<img src="/img/governance-stake-puffer-successful.png" height="150" alt="Successfully staked PUFFER for vePUFFER"></img>

Congratulations! You now have vePUFFER and can soon participate in Puffer's governance activities once your vePUFFER has become active.

## How to Vote

In order to vote, you must have access to a crypto wallet that contains vePUFFER in active stage.

There must also be an active voting epoch with proposals and incentive gauges. Proposals of all forms are first created and discussed on the [Puffer Governance Forum](https://governance.puffer.fi), and these proposals will be votable on the [Puffer DAO Hub](https://vote.puffer.fi) after a review has been conducted, according to our existing governance workflows.

In an active voting epoch, you must first connect your wallet to the [Puffer DAO Hub](https://vote.puffer.fi).

While you require an active vePUFFER stake, you will not need native ETH as currently, votes will be cast using Snapshot voting, which is done off-chain.

### Voting on Proposals

You can view all proposals in the **Latest proposals** section on the [Puffer DAO Hub](https://vote.puffer.fi), or via the [Proposals](https://vote.puffer.fi/plugins/community/) tab. If a voting epoch is currently active, and there are votable proposals, you will see the here. 

<img src="/img/governance-vote-latest.png" height="300" alt="Proposals tab"></img>

You can choose to view details of a specific proposal, where you will be able to read what the proposal is, where the actual discussion flow is, and where the Snapshot voting results will be stored.

<img src="/img/governance-vote-proposal.png" height="500" alt="Proposal detailed information"></img>

The proposal passes unless rejections outnumber approvals after the voting period has ended. Specifically, a proposal is approved if:

- Approvals exceed or equal rejections
- No votes are cast (effectively treated as equal approvals and vetoes)

### Voting on Incentive Gauges

An incentive gauge is a type of proposal where it is used to direct incentives, such as to various DeFi protocols. These DeFi protocols compete for a share of incentives, which is allocated based on the percentage of votes earned.

To direct incentives, simply go to the [Gauges](https://vote.puffer.fi/plugins/gauges/) tab.

Like proposals, you can only vote on incentive gauges when there is an active voting epoch. You can see whether there is an active voting epoch in the Gauges tab, and a timer will be shown on the deadline to vote.

A list of gauges will be shown to you, and you can click on a gauge to view more information of the gauge that can be voted for. These will generally be specific pools on other DeFi protocols, where you can perform certain actions (e.g. staking pufETH or PUFFER, providing liquidity, holding a token, etc.) and your vote will determine how much incentives will be directed to each pool.


<img src="/img/governance-gauges.png" height="500" alt="Gauges tab"></img>

In an active voting epoch, you will be able to select the gauges, similar to how it looks like below. You have to vote on at least one gauge, however you can choose any or all of the gauges available for a particular voting epoch, and press **Vote now**.

<img src="/img/governance-gauges-select.png" height="500" alt="Gauges vote selection"></img>

You will then be presented with your selected choices, and to determine how much of your vePUFFER voting power you wish to direct incentives to.

<img src="/img/governance-gauges-vote-distribution.png" height="300" alt="Gauges vote distribution"></img>

:::note

You can change your vote at any point in time before the voting epoch ends.

:::

Once you are satisifed with your choices, click on **Submit votes** to submit your vote by way of signing a gasless transaction. This will not cost you any ETH at this point. You will then be shown the following notification if your vote has been registered.

<img src="/img/governance-gauges-vote-successful.png" height="150" alt="Gauges vote successful"></img>

Voting results will be tallied after the conclusion of every voting epoch. The rewards will be distributed through [Puffer DeFi](https://defi.puffer.fi), and only if you are a participant of the eligible pools.
