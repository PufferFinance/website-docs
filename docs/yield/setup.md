---
title: Setup
slug: /setup
---

## Setup Beacon Node and Execution Node

In order to run a [validator](https://ethereum.org/en/developers/docs/nodes-and-clients/run-a-node/), you will need to run an Execution Layer client, a Consensus Layer client, and the validator software.

:::note
Puffer is live on Mainnet! If you wish to setup a testnet validator, we're using the 🦁 [Holesky testnet](https://holesky.dev/), so make sure to set the network to `holesky`, otherwise use `mainnet`
:::

### Easy Mode

There are some great open-source [projects](https://ethereum.org/en/staking/solo/#node-and-client-tools) that make it easy to run an Ethereum full node and a validator. Here are some of the popular ones:

- [Eth Docker](https://github.com/eth-educators/eth-docker): Docker automation for Ethereum nodes.
- [🍄 Stereum](https://github.com/stereum-dev/ethereum-node): Ethereum Node Setup & Manager
- [Dappnode](https://docs.dappnode.io/docs/user/getting-started/choose-your-path/): Operating System for running Ethereum nodes and more.

### Manual Installation

You may want to run the clients separately, in which case you can follow the installation instructions for each client below.

#### Execution Clients

- [Nethermind installation documentation ↗](https://downloads.nethermind.io/)
- [Geth installation documentation ↗](https://geth.ethereum.org/docs/install-and-build/installing-geth)
- [Besu installation documentation ↗](https://besu.hyperledger.org/public-networks/get-started/install)
- [Erigon installation documentation ↗️](https://github.com/ledgerwatch/erigon#beacon-chain)

#### Consensus Clients

- [Nimbus installation documentation ↗](https://nimbus.guide/quick-start.html)
- [Teku installation documentation ↗](https://docs.teku.consensys.io/get-started/install)
- [Lodestar installation documentation ↗️](https://chainsafe.github.io/lodestar/getting-started/quick-start/)
- [Lighthouse installation documentation ↗](https://lighthouse-book.sigmaprime.io/installation.html)
- [Prysm installation documentation ↗](https://docs.prylabs.network/docs/install/install-with-script)

## Setup Coral-CLI

The Coral-CLI is used to generate validator keys, prepare registration payloads, and sign voluntary exit messages.

### Pre-built binary

[Download the Coral-CLI binary](https://github.com/PufferFinance/coral/releases)

### Docker

[Run using Docker](https://github.com/PufferFinance/coral/tree/main/docker)
{/* MDX-BLOCK-START */}
{/* MDX-BLOCK-START */}
{/* MDX-BLOCK-START */}
{/* MDX-BLOCK-START */}

### Build from source

- Dependencies: [Rust](https://www.rust-lang.org/learn/get-started)

```
git clone https://github.com/PufferFinance/coral
cd coral
cargo build --release
```
