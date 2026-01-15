---
title: Voting
slug: /governance/voting
---

Voting will occur on the Governance section of the [Puffer app](https://app.puffer.fi) and requires you to have vlPUFFER. In order to know how to get vlPUFFER, please refer to the [vlPUFFER documentation](./governance-token.md#vlpuffer).

## How to Vote

In order to vote, you must have access to a crypto wallet that contains vlPUFFER in active stage.

There must also be an active voting epoch with proposals and incentive gauges. Proposals of all forms are first created and discussed on the [Puffer Governance Forum](https://governance.puffer.fi), and these proposals will be votable on the [Proposals Section](https://app.puffer.fi/proposals) after a review has been conducted, according to our existing governance workflows.

In an active voting epoch, you must first connect your wallet to the [Puffer app](https://app.puffer.fi).

While you require an active vlPUFFER stake, you will not need native ETH as currently, votes will be cast using Snapshot voting, which is done off-chain.

### Voting on Proposals

You can view all proposals in the **Latest proposals** section on the [Proposals Section](https://app.puffer.fi/proposals). If a voting epoch is currently active, and there are votable proposals, you will see the here.

<img src="/img/vlPuffer/proposals.png" height="300" alt="Proposals tab"></img>

You can choose to view details of a specific proposal, where you will be able to read what the proposal is, where the actual discussion flow is, and where the Snapshot voting results will be stored.

<img src="/img/vlPuffer/proposals2.png" height="500" alt="Proposal detailed information"></img>

The proposal passes unless rejections outnumber approvals after the voting period has ended. Specifically, a proposal is approved if:

- Approvals exceed or equal rejections
- No votes are cast (effectively treated as equal approvals and vetoes)

### Voting on Incentive Gauges

An incentive gauge is a type of proposal where it is used to direct incentives, such as to various DeFi protocols. These DeFi protocols compete for a share of incentives, which is allocated based on the percentage of votes earned.

To direct incentives, simply go to the [Gauges Section](https://app.puffer.fi/gauges).

Like proposals, you can only vote on incentive gauges when there is an active voting epoch. You can see whether there is an active voting epoch in the Gauges tab, and a timer will be shown on the deadline to vote.

A list of gauges will be shown to you, and you can click on a gauge to view more information of the gauge that can be voted for. These will generally be specific pools on other DeFi protocols, where you can perform certain actions (e.g. staking pufETH or $PUFFER, providing liquidity, holding a token, etc.) and your vote will determine how much incentives will be directed to each pool.

<img src="/img/vlPuffer/gauges.png" height="500" alt="Gauges tab"></img>

In an active voting epoch, you will be able to select the gauges, similar to how it looks like below. You have to vote on at least one gauge, however you can choose any or all of the gauges available for a particular voting epoch, and press **Vote now**.

<img src="/img/vlPuffer/gauges2.png" height="500" alt="Gauges vote selection"></img>

You will then be presented with your selected choices, and to determine how much of your vlPUFFER voting power you wish to direct incentives to.

<img src="/img/vlPuffer/gauges3.png" height="300" alt="Gauges vote distribution"></img>

:::note

You can change your vote at any point in time before the voting epoch ends.

:::

Once you are satisfied with your choices, click on **Submit votes** to submit your vote by way of signing a gasless transaction. This will not cost you any ETH as we use Snapshot voting currently. You will then be shown the following notification if your vote has been registered.

Voting results will be tallied after the conclusion of every voting epoch. The rewards will be distributed through [Puffer DeFi](https://defi.puffer.fi), and only if you are a participant of the eligible gauges.
