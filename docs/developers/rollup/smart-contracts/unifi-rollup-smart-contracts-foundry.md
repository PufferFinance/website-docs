---
title: Deploy a Smart Contract on UniFi using Foundry
slug: /developers/rollup/smart-contracts/foundry
---

## Prerequisite

Before you begin, ensure you've:

1. [Set up your wallet and have bridged UniFi tokens successfully](../../../unifi-rollup-move-funds.md).
2. Downloaded and installed Foundry:

   ```bash
   curl -L https://foundry.paradigm.xyz | bash
   ```

   Then, open a new terminal, and call `foundryup` to install the latest release.
   :::info
   Running `foundryup` will automatically install the latest (nightly) versions of the precompiled binaries: forge, cast, anvil, and chisel. For additional options, such as installing a specific version or commit, run `foundryup --help`
   :::

## Create a Foundry project

To create a Foundry project, run:

```bash
forge init unifi-smart-contract-tutorial
```

Running `forge init` sets up a sample contract, test, and script for `Counter.sol`.

Now change into the directory:

```bash
cd unifi-smart-contract-tutorial
```

## Deploy a smart contract

:::warning
Directly pasting your private key into the command line poses security risks. The examples below are instructional and don't adhere to good security practices. To avoid exposing sensitive information such as wallet private keys, use `.env` files to store private data. Create a `.env` file, then add the file to the `.gitignore` file to prevent committing it. Populate the `.env` file with the private information.
:::

Deploy your contract using the following syntax:

```bash
forge create --rpc-url <rpc_https_endpoint> src/Counter.sol:Counter --private-key <your_private_key>
```

In the command:

- `rpc_https_endpoint` is a RPC Endpoint for the UniFi network. You can find the endpoints in the [RPC Endpoints Reference](../../reference/rpc-endpoints.md).
- `your_private_key` is your wallet's private key.

Your output should look similar to:

```bash
Deployer: YOUR_WALLET_ADDRESS
Deployed to: 0xFCc25885bDcF17A0BF1C0E529100B6420e237Cbe
Transaction hash: 0x734c59643232b61b560da2c750d7ad808267fbc28331ee59102e431ec9559097
```

For more deployment options, see the [forge-create documentation](https://book.getfoundry.sh/reference/forge/forge-create).

## Verify your smart contract

Optionally, you can verify your contract on the network. This makes the source code publicly available.

### Deploy and verify a contract in one go

To deploy and verify a contract in a single command, run:

```bash
forge create --rpc-url <rpc_https_endpoint> --private-key <your_private_key> src/Counter.sol:Counter --verify --verifier blockscout --verifier-url <blockscout_homepage_explorer_url>/api
```

In the command:

- `rpc_https_endpoint` is a RPC Endpoint for the UniFi network. You can find the endpoints in the [RPC Endpoints Reference](../../reference/rpc-endpoints.md).
- `your_private_key` is your wallet's private key.
- `blockscout_homepage_explorer_url` is the URL of the block explorer explorer you're using. You can find the endpoints in the [RPC Endpoints Reference](../../reference/rpc-endpoints.md).

For more contract verification options, see the [verify-contract documentation](https://book.getfoundry.sh/reference/forge/forge-verify-contract).
