---
title: Getting Started
slug: /unifi-avs-getting-started
---

# Getting Started with UniFi AVS

This guide provides simple steps for operators to register with UniFi AVS.

## Prerequisites

Before you begin, ensure you have the following:

- An Operator registered in EigenLayer's contracts ([see guide](https://docs.eigenlayer.xyz/eigenlayer/operator-guides/operator-installation#goerli-smart-contract-addresses))
- Access to an [Ethereum mainnet RPC](https://chainlist.org/)
- [Git](https://git-scm.com/downloads) installed
- [Node.js and npm](https://nodejs.org/) installed
- [Yarn](https://yarnpkg.com/getting-started/install) installed
- [Foundry](https://book.getfoundry.sh/getting-started/installation) installed

## Setup

1. Install Foundry (if not already installed):

   ```text
   curl -L https://foundry.paradigm.xyz | bash
   foundryup
   ```text
2. Clone the UniFi repository:

   ```text
   git clone https://github.com/PufferFinance/UniFi.git
   ```text
3. Navigate to the cloned directory:

   ```text
   cd UniFi
   ```text
4. Install dependencies:

   ```text
   yarn install
   ```text
5. Navigate to the l1-contracts directory:

   ```text
   cd l1-contracts
   ```text
6. Install Foundry dependencies:
   ```text
   forge build
   ```text
## Phase 1 - Register to UniFi AVS

During phase 1 of UniFi AVS mainnet, Operators can register as follows.

1. **Register as an Operator**
   Run the following Solidity script:
   ```text
   forge script script/UniFiAVSScripts.sol:UniFiAVSScripts --sig "registerOperatorToUniFiAVS(uint256 signerPk)" 'YOUR_OPERATOR_PRIVATE_KEY' --private-key 'YOUR_OPERATOR_PRIVATE_KEY' --rpc-url 'YOUR_MAINNET_RPC_URL' --broadcast
   ```text
   Replace `YOUR_OPERATOR_PRIVATE_KEY` and `YOUR_MAINNET_RPC_URL` with your actual values.

:::tip
Phase 2 of UniFi AVS will be coming soon as EigenLayer introduces new features around rewards and slashing.
:::
