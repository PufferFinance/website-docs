---
title: Requirements
slug: /nodes/requirements
---

Anyone can become a Puffer NoOp because our protocol is permissionless! 

Becoming a Puffer NoOp requires running a validator. NoOps must lock a refundable pufETH bond, and lock validator tickets which are burned each day of operating a validator, in order to be 32 ETH provisioned to run a validator. 

#### Bond and Validator Tickets
The bond is required as slashing and inactivity insurance. The locked validator tickets act as an incentive alignment. The amount of validator tickets locked determines the length of time the NoOp is entitled to run the validator. Read more about validator tickets [here](./validator-tickets.md). Since operating a TEE with [Secure-Signer](./secure-signer.md) reduces the risk of getting slashed, NoOps running these architectures need only lock a 1 ETH bond instead of a 2 ETH bond, as otherwise required. The ETH bond will eventually be converted into pufETH, so NoOps can alternatively deposit their bond as pufETH. In either case, if the validator exits the beacon chain with at least 32 ETH, and was not slashed, the NoOp will receive the entirety of their bond back. If the validator was not slashed, but its balance is less than 32 ETH, the difference will come out of the NoOps bond. 

:::warning 
If a validator is slashed, the NoOp will forfeit their entire bond.
:::

### NoOp Requirements Summary
* 2 ETH Bond (1 ETH if using SGX)
* At least 28 Validator Tickets
* Restaking Module choice
* Validator
    * (Optional): TEE, such as SGX

### Validator Requirements

* CPU: Quad-core (or dual-core hyperthreaded) CPU
* Memory: >= 16GB RAM
* Storage: 2 TB SSD (NVMe SSD recommended) for full node
    * To run a full archive node, over 13.5 TB is needed
    * Note: As the Ethereum blockchain grows, about 14GB additional storage is needed per week
* Bandwidth: >= 25 Mbps download speed
* (Optional) TEE like SGX

For more information, please see [Geth hardware requirements](https://geth.ethereum.org/docs/getting-started/hardware-requirements)

### TEE Info
:::caution
The current version of Secure-Signer requires Ubuntu 20.04!
:::

For instructions on how to set up an Azure instance with SGX, refer [here](https://pufferfinance.github.io/secure-signer/getting-started/). For information on compatible machines and instructions on how to set up Secure-Signer, please refer to this [documentation](https://pufferfinance.github.io/secure-signer/installation/).

### Disclaimers
:::caution EigenLayer Partial Withdrawals Proofs are being improved 🚧  
Currently it is [cost-prohibitive](https://docs.eigenlayer.xyz/eigenlayer/restaking-guides/restaking-user-guide/native-restaking/withdraw-from-eigenlayer/partial-withdrawals) to withdraw consensus rewards from EigenPods but the EigenLayer team is working to decrease these costs. Until then, withdrawing consensus rewards is temporarily disabled.
:::

:::caution TEE Registrations are not yet supported on mainnet 🚧  
As part of our ongoing commitment to security and operational excellence, we are taking a phased approach to implementing enclave-based registrations. Due to recent changes in Intel’s support for certain enclave hardware, access to the necessary hardware has become more challenging. To ensure the highest standards of security, enclave-registrations will not be available during the initial phase of our mainnet launch.
:::