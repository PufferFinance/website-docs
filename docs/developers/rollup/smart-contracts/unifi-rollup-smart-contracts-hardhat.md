---
title: Deploy a Smart Contract using Hardhat
slug: /developers/rollup/smart-contracts/hardhat
---

## Prerequisites

Before you begin, ensure you:

1. [Set up your wallet and have bridged UniFi tokens successfully](../../../unifi-rollup-move-funds.md).
2. [Set up your Hardhat environment](https://hardhat.org/tutorial/setting-up-the-environment#2.-setting-up-the-environment).

## Create a Hardhat project

To create an empty Hardhat project:

1. Create your project directory:

   ```bash
   mkdir unifi-smart-contract-tutorial
   cd unifi-smart-contract-tutorial
   ```

2. Initialize your Node.js project:

   ```bash
   npm init
   ```

3. Install Hardhat:

   ```bash
   npm install --save-dev hardhat
   ```

4. Initialize the Hardhat project:

   ```bash
   npx hardhat init
   ```

   In the menu that appears, select **Create a JavaScript project** and press **Enter**. Accept all
   the default values in the questionnaire.

You should now have a sample HardHat project with a `Lock` contract, that locks funds for a set time, and a few smart contract tests.

:::note

The default script in `ignition/modules/Lock.js` locks 1 GWEI in the contract upon deployment, you can modify this
value in the script.

:::

## Deploy the contract

The sample project already includes the deployment script. To deploy on UniFi, you'll just need to make
a few modifications to the `hardhat.config.js` file:

1. Create a `.env` file in the root folder with your wallet's private key and [RPC Endpoint](../../reference/rpc-endpoints.md).

   ```
   PRIVATE_KEY=<your_private_key>
   RPC_ENDPOINT=<rpc_https_endpoint>
   ```

   :::warning
   Please do not commit your private keys into source control. Double check that `.env` is contained in your `.gitignore`
   :::

2. Download and install `dotenv`

   ```
   npm i -D dotenv
   ```

3. Add UniFi to your `hardhat.config.js` file. The following example shows how to add a RPC endpoint to the configuration file.

   ```javascript
   require("@nomicfoundation/hardhat-toolbox");
   require("dotenv").config();
   const { PRIVATE_KEY, RPC_ENDPOINT } = process.env;

   module.exports = {
     solidity: "0.8.27",
     networks: {
       unifi_testnet: {
         url: RPC_ENDPOINT,
         accounts: [PRIVATE_KEY],
       },
     },
   };
   ```

4. Deploy your contract.

   ```bash
   npx hardhat ignition deploy ./ignition/modules/Lock.js --network <network_name>
   ```

In the command:

- `<network_name>` is the name of the network from `hardhat.config.js` you want to deploy on f.e. `unifi_testnet`.

Your output should look something like this:

```bash
Deployed Addresses

LockModule#Lock - 0xA72022A83654E794B8e9FD7217ADF7378f3e985d
```

## Verify your smart contract

Optionally, you can verify your contract on the network. This makes the source code publicly available.

### Verify an already existing contract contract

To verify a contract, you need to make a few modifications the project.

1. In your project directory, install `hardhat-verify`
   ```bash
   npm install --save-dev @nomicfoundation/hardhat-verify
   ```
2. Add blockscout url and chain id to the .env file
   ```
   BLOCKSCOUT_URL=<blockscout_homepage_explorer_url>
   CHAIN_ID=<chain_id>
   ```
3. Import `hardhat-verify` in your `hardhat.config.js`:

   ```javascript
   require("@nomicfoundation/hardhat-verify");
   require("@nomicfoundation/hardhat-toolbox");
   require("dotenv").config();
   const { PRIVATE_KEY, RPC_ENDPOINT, BLOCKSCOUT_URL, CHAIN_ID } = process.env;

   module.exports = {
     solidity: "0.8.27",
     networks: {
       unifi_testnet: {
         url: RPC_ENDPOINT,
         accounts: [PRIVATE_KEY],
       },
     },
     etherscan: {
       apiKey: {
         unifi_testnet: "empty",
       },
       customChains: [
         {
           network: "unifi_testnet",
           chainId: CHAIN_ID,
           urls: {
             apiURL: `${BLOCKSCOUT_URL}/api`,
             browserURL: BLOCKSCOUT_URL,
           },
         },
       ],
     },
     sourcify: {
       enabled: false,
     },
   };
   ```

4. Execute the `hardhat verify` command:

   ```bash
   npx hardhat verify --network <network_name> <contract_address> "constructor_argument_1" "constructor_argument_2" ...
   ```

   In our example, the full command should look something like this:

   ```bash
   npx hardhat verify --network unifi_testnet 0x545D79cAace91bB8A710Ad2ee4e50B01d87bB6Ff 123456
   ```

In the command:

- `<network_name>` is the name of the network you want to verify on.
- `<contract_address>` is the address where your contract was deployed.
- `constructor_argument_1`, `constructor_argument_2`, etc., are the arguments passed to your contract's constructor (if any).

For more contract verification options, refer to the [Hardhat verification documentation](https://hardhat.org/plugins/nomiclabs-hardhat-etherscan.html).
