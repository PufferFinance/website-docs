---
sidebar_position: 2
title: pufETH LSD
---

## Liquid Staking Derivatives (LSDs)
There are many pooled staking protocols that commonly will provide a Liquid Staking Derivative (LSD), or liquid tokens representing staked ETH. Currently, the opportunity cost of staking your ETH can exceed the revenue you would gain from only validating. LSDs provide a solution, where a staker can earn Ethereum staking rewards in the form of LSDs and then trade or use these liquid tokens in other DeFi protocols for additional yield.

LSDs are a convenient way for ETH holders to earn staking rewards without requiring any technical knowledge or the infrastructure to run an Ethereum validator. Simply by holding the LSD, a `Staker` will earn rewards over time and contribute to the overall security of Ethereum.

## pufETH
Puffer's pool offers a LSD called `pufETH` that is an ERC20, rebasing token based off of [Aave's aToken](https://docs.aave.com/developers/tokens/atoken).

### Minting
Stakers mint() pufETH by sending ETH to the pool contract. Their pufETH will immediately begin earning staking rewards. 

### Burning
- Stakers can burn() pufETH to receive their initial ETH capital plus accrued rewards from the pool contract.