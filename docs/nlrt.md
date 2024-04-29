---
title: native Liquid Restaking Tokens (nLRTs)
slug: /protocol/nlrt
---

:::info
Think of nLRTs as version 2.0 of LSTs 🤯
:::

### What is an LST?

Liquid Staking Tokens (LSTs) represent staked ETH in a tokenized format, providing liquidity to stakers while their ETH remains locked on the beacon chain. Through LSTs, stakers passively earn PoS rewards without needing to operate a validator. These tokens offer multiple benefits:

- **Liquidity**: By staking ETH, users receive a tradable token that can be used in various DeFi activities.
- **Ease of Use**: Rewards accrue to LSTs automatically without requiring actions by the staker.
- **Flexibility**: With LSTs, users can participate in a wide range of DeFi protocols, multiplying potential yield avenues.

### Introducing native Liquid Restaking Tokens (nLRTs)

Ethereum's constantly evolving staking landscape has given rise to a new token model: the **native Liquid Restaking Token (nLRT)**. This modern take on liquid staking provides a unique advantage over its predecessor, the LST. 

:::tip
Fundamentally, an nLRT is an LST that delivers traditional PoS rewards and boosts these with additional restaking rewards.
:::

### How do nLRTs Differ from LRTs?

nLRTs generate their restaking rewards through [native restaking](https://docs.eigenlayer.xyz/restaking-guides/restaking-user-guide/#liquid-vs-native-restaking) on Eigenlayer, where Ethereum PoS validator ETH is the staked asset. This sets them apart from Liquid Restaking Tokens (LRTs). An LRT tokenizes restaked LSTs within a Liquid Restaking Protocol (LRP). While the LRP yields rewards from restaking services, these are distinct from PoS rewards.

Although the core concept aligns with LSTs, LRTs focus solely on rewards from restaking services. At Puffer, we've observed that LRTs might intensify the [decentralization challenges](https://twitter.com/dannyryan/status/1688644951230267392?s=46&t=bsdBaPIHlTHEWDDdVUJW4g) associated with LSTs in Ethereum. In constrast, nLRTs actively promote decentralization, integrating new validators into PoS while also enhancing their profitability. Importantly, this is why Puffer has been dedicated to launching with a permissionless validator set from day one.

### pufETH

pufETH is implemented as a reward-bearing ERC20 token, following in the footsteps of [Compound's cToken](https://docs.compound.finance/v2/ctokens/#ctokens) design for optimal DeFi compatibility. It represents a novel approach in the liquid staking domain, introducing several features that enhance stakers' rewards and interaction with DeFi protocols.

#### **Enhanced Reward Potential**
nLRTs, including pufETH, provide a diversified stream of rewards. They encompass both traditional Ethereum PoS rewards, but have another dimension by allowing holders to earn rewards from restaking services. This dual-source reward system positions nLRT holders to potentially outearn their LST counterparts.

#### **Value Acceleration with Validator Tickets**
pufETH uniquely leverages [validator tickets](/protocol/validator-tickets#overview) to fast-track its value growth. By frontloading Ethereum PoS rewards, it not only increases the immediate claim of the pufETH token, but also creates compelling incentives for both short-term and long-term participation.

#### **Decoupling from Validator Performance**
Unlike LSTs, where rewards are closely tied to the performance of associated validators, pufETH provides a layer of insulation. It ensures that stakers receive PoS rewards independent of the validators' performance, leading to more stable and predictable returns and mitigating the impact of any potential underperformance.

#### **Seamless DeFi Integration with Enhanced Simplicity**
Within the burgeoning LSDeFi ecosystem, the adaptability of staking mechanisms to mesh seamlessly with a wide array of protocols is of utmost importance. While LSTs have set a standard in offering DeFi compatibility, pufETH elevates this experience. 

Unlike the two-step process of holding an LST and then restaking it into an LRP to earn restaking rewards, with pufETH, users achieve this with a single step. By merely holding onto pufETH, they inherently tap into restaking rewards. This streamlining ensures that stakers can maximize the utility and rewards of their staked assets without compromising on the flexibility and opportunities traditional LSTs offer in DeFi.

### How pufETH Works
Stakers deposit ETH to the PufferVault contract to mint the pufETH nLRT. At the protocol's inception, pufETH's conversion rate is one-to-one, but is expected to increase over time. Assuming the protocol performs well, i.e., accrues more rewards than penalties, the amount of ETH reedamable for pufETH will increase. 

#### Calculating the Conversion Rate
The conversion rate can be calculated simply as:

<div style={{textAlign: 'center'}}>

`conversion rate = (deposits + rewards - penalties) / pufETH supply`
</div>

- `deposits` and `pufETH supply` increase proportionally as stakers deposit ETH to mint pufETH, leaving the `conversion rate` unaffected.

- `rewards` increase as [restaking operators](/protocol/puffer-modules#restaking-operators) run AVSs and whenever validator tickets are minted.

- `penalties` accrue if validators are slashed on PoS for *more than their $1$ ETH* collateral, which is [disincentivized behavior](/protocol/validator-tickets#why--noop-incentives) and mitigated through [anti-slashing technology](/technology/secure-signer). Penalties can also accrue if the restaking operator is slashed running AVSs, which is why Puffer is [restricting restaking operator participation](/protocol/puffer-modules#restricting-reops) during its nascent stages.

#### Example
At the protocol’s inception, Bob stakes $10$ ETH and receives $10$ pufETH. Then, after some time, the protocol earns $2$ ETH of rewards by minting validator tickets and restaking. Now Bob’s $10$ pufETH is backed by $12$ ETH, making the conversion rate $\frac{10+2-0}{10}=1.2$ ETH per pufETH. 

Assuming Charlie decides to stake $1$ ETH, he would mint $\frac{1}{1.2} = 0.83$ pufETH due to the increased conversion rate. Since Charlie deposited instead of adding rewards, the conversion rate remains unchanged at $\frac{11 + 2 - 0}{10.83} = 1.2$ ETH per pufETH. 

Bob can redeem his $10$ pufETH for $10*1.2=12$ ETH, given there is enough liquidity in the PufferVault and the daily withdrawal limit has not been reached.