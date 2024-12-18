---
title: Registration
slug: /nodes/registration
---



# Puffer Dashboard
The Puffer Dashboard provides an interface for users to:
- Prepare Coral-CLI command to generate their validator registration payload
- Mint pufETH and Validator Tickets
- Register their validator
- View their validators 

:::caution
The [Puffer Dashboard](https://launchpad.puffer.fi/Setup) UI is subject to change as more features are added
:::


# Registering a Validator
The [Puffer Dashboard](https://launchpad.puffer.fi/Setup) supports launching both testnet and mainnet validators depending on the RPC that your wallet is connected to. 

### Step 1: Setup Wallet
![alt text](/img/holesky-config.png)
Follow [the instructions](https://holesky.dev/) to add the Holesky network to your wallet. If you're using mainnet, the default mainnet wallet config can be used or an RPC can be added [here](https://chainlist.org/chain/1).

### Step 2: Get Coral-CLI Command
Navigate to https://launchpad.puffer.fi/Setup to copy the Coral-CLI command. 

Run the command where you [installed the Coral-CLI](/nodes/setup#setup-coral-cli).

#### Without Enclave
> ![alt text](/img/no-enclave-cli-cmd.png)
1. Copy the displayed command
2. Edit `<PATH_TO_A_KEYSTORE_PASSWORD_FILE>` and `<PATH_TO_REGISTRATION_JSON>` 

The following **example** command will create a local validator keystore file in the `./etc/keys/bls_keys` directory. The keystore is encrypted using the password contained in `password.txt`. The command will create a registration payload called `registration.json`.
 ```
cargo run --bin coral-cli validator keygen --guardian-threshold 1 --module-name 0x5055464645525f4d4f44554c455f300000000000000000000000000000000000 --withdrawal-credentials 0x0100000000000000000000005ee9246f01e95c08ee767029c1d18765bb1779d0 --guardian-pubkeys 0x049cc1fbaa3cffd3e4c1f935c47720d013938ccb822a9cbd20c5f09ab65ae8300e7986b6ce75e916d3b59599ece72134adf2972d06a76a8ba5f3747d356117c342 --fork-version 0x01017000 --password-file password.txt --output-file registration.json
 ```

#### With Enclave (currently only supported on testnet)
> ![alt text](/img/enclave-cli-cmd.png)
1. Copy the displayed command
2. Edit `<OPTIONAL_ENCLAVE_URL>` and `<PATH_TO_REGISTRATION_JSON>` 

The following **example** command will create a validator key using the enclave running at `http://localhost:9001` and create a registration payload called `registration.json`. See ([here](/nodes/setup#setup-validator-enclave-optional)) to setup your enclave.
```
cargo run --bin coral-cli validator keygen --guardian-threshold 1 --module-name 0x5055464645525f4d4f44554c455f300000000000000000000000000000000000 --withdrawal-credentials 0x0100000000000000000000005ee9246f01e95c08ee767029c1d18765bb1779d0 --guardian-pubkeys 0x049cc1fbaa3cffd3e4c1f935c47720d013938ccb822a9cbd20c5f09ab65ae8300e7986b6ce75e916d3b59599ece72134adf2972d06a76a8ba5f3747d356117c342 --fork-version 0x01017000 --enclave-url http://localhost:9001 --output-file registration.json
```

---
#### Fetching the registration payload
If you ran the Coral-CLI on a remote server you can fetch the registration payload by substituting your information in the following command:
```
scp your-server@XX.XXX.XXX.XX:/path/to/coral/registration.json ~/my/local/computer/registration.json
```

### Step 3: Mint pufETH or VTs
![alt text](/img/mint-pufeth-vt.png)
- Enclave users must deposit 1 ETH worth of pufETH to register
- Non-enclave users must deposit 2 ETH worth of pufETH to register
- A minimum of 28 Validator Tickets (VTs) are required to be deposited when registering a validator. The Guardians will exit validators if their VTs expire after 28 days without being refilled.

### Step 4: Register Validator
![alt text](/img/register-validator.png)
- Drag and drop your registration payload. 
- Sign a `Permit` message to deposit your VTs to the PufferProtocol contract
- Sign a `Permit` message to deposit your pufETH bond to the PufferProtocol contract
- Sign the final transaction to register your validator

### Step 5: Await Provisioning
The Guardians will provision pending validators when there is 32 ETH of liquidity in the PufferVault. 

Invalid registrations will be skipped by the Guardians. The NoOp's bond will be returned but 10 VTs will be penalized to prevent griefing.  

### Step 6: Prepare your Validator
Import your validator keys to your beacon/validator client. 

**Without Secure-Signer**:

You can find your generated keystore files in the `coral/etc/keys/bls_keys/` directory where each keystore file name is your BLS public key. The contents are encrypted using your supplied password file adhering to [ERC-2335](https://github.com/ethereum/ercs/blob/master/ERCS/erc-2335.md).
- [Import your validator keys to Nimbus ↗](https://nimbus.guide/run-a-validator.html#2-import-your-validator-keys) 
- [Import your validator keys to Teku ↗](https://docs.teku.consensys.io/how-to/load-validators-without-restarting) 
- [Import your validator keys to Lodestar ↗](https://chainsafe.github.io/lodestar/validator-management/vc-configuration/#import-a-validator-keystore-to-lodestar) 
- [Import your validator keys to Lighthouse ↗](https://lighthouse-book.sigmaprime.io/mainnet-validator.html#step-3-import-validator-keys-to-lighthouse) 
- [Import your validator keys to Prysm ↗](https://docs.prylabs.network/docs/wallet/nondeterministic#import-validator-accounts) 

**Using Secure-Signer**

Secure-Signer follows the same API as [Web3Signer](https://consensys.github.io/web3signer/web3signer-eth2.html) so the same instructions apply. Since your BLS private keys are encrypted at all times, you cannot directly view your keystore files. However, you can list all of your enclave's public keys by calling this API (assuming the enclave is running at `localhost:9001`):

```bash
curl -X GET localhost:9001/api/v1/eth2/publicKeys
```

This is the same API that many consensus/validator clients use to interface with a remote signer:
- [Connect Secure-Signer to Nimbus ↗](https://nimbus.guide/run-a-validator.html#2-import-your-validator-keys) 
- [Connect Secure-Signer to Teku ↗](https://docs.teku.consensys.io/how-to/use-external-signer/use-web3signer) 
- [Connect Secure-Signer to Lighthouse ↗](https://lighthouse-book.sigmaprime.io/validator-web3signer.html?highlight=web3signer#usage) 
- [Connect Secure-Signer to Prysm ↗](https://docs.prylabs.network/docs/wallet/web3signer) 

:::tip 
Make sure to set your `fee_recipient` value to your own wallet. Remember, Puffer takes no execution reward fees because of [Validator Tickets](https://docs.puffer.fi/protocol/validator-tickets#how-are-vts-used)!
:::


### Step 7: View your validators
Proceed to the [Dashboard](https://launchpad.puffer.fi/Dashboard) to view the validators registered to your wallet.


## Batch Registering Validators
For operators interested in running many Puffer validators a convenience script has been provided to register create keys and register multiple validators in one batch. 

1. Clone the PufferPool repo:
> ```
> git clone https://github.com/PufferFinance/PufferPool.git
> cd PufferPool
> ```

2. Install [Foundry](https://book.getfoundry.sh/getting-started/installation)
> ```
> curl -L https://foundry.paradigm.xyz | bash
> ```

3. Install Coral-CLI 
> ```
> cargo install -f --git https://github.com/PufferFinance/coral.git
> ```

4. The batch registration script requires a local Eth keystore file to run. You can create a keystore file by importing an existing private key as follows:
> ```
> cast wallet import -i puffer-test
> Enter private key:
> Enter password:
> `puffer-test` keystore was saved successfully. Address: 0x4D42ABfB6D4bEDaf64dF8BE054676149BDfa224d
> ```

This command created a keystore file named `puffer-test` in the `ls ~/.foundry/keystores` directory. More instructions on working with Foundry keystores can be found [in their docs](https://book.getfoundry.sh/reference/cast/cast-wallet-import#directory-options).

5. Fund the wallet with sufficient VTs, pufETH, and ETH to cover gas. These can be purchased as [described above](./registration.md#step-3-mint-pufeth-or-vts).

6. Inside the PufferPool repo, install the batch registration script dependencies:
> ```
> forge install
> ```

7. Edit the `validator-keystore-password.txt` file. This will be the password used to encrypt your validator BLS keystore files.

8. Create the `registration-data` directory for your output registration JSONs
> ```
> mkdir -p registration-data
> ```

9. Simulate the batch registration script: 
> - Replace with your RPC URL (either for mainnet or holesky)
> - Set the keystore `--account` to the name of your keystore located in `~/.foundry/keystores` (from step 4)
> - Set `--sender` to the keystore wallet address with your pufETH, VTs, and gas money (from step 4)
> - Set `--password` to your keystore password (from step 4)

- Example Holesky command:
> ```
> forge script script/GenerateBLSKeysAndRegisterValidators.s.sol:GenerateBLSKeysAndRegisterValidators --rpc-url=https://ethereum-holesky.publicnode.com --account puffer-test -vvv --sender=0x4D42ABfB6D4bEDaf64dF8BE054676149BDfa224d --ffi
> ```
 
- Example Mainnet command:
> ```
> forge script script/GenerateBLSKeysAndRegisterValidators.s.sol:GenerateBLSKeysAndRegisterValidators --rpc-url=https://eth.llamarpc.com --account puffer-test -vvv --sender=0x4D42ABfB6D4bEDaf64dF8BE054676149BDfa224d --ffi
> ```

10. Rerun the command with the `--slow` and `--broadcast` flags to send the transaction on chain. Note that the command may take several minutes to run.

- Example Holesky command:
> ```
> forge script script/GenerateBLSKeysAndRegisterValidators.s.sol:GenerateBLSKeysAndRegisterValidators --rpc-url=https://ethereum-holesky.publicnode.com --account puffer-test -vvv --sender=0x4D42ABfB6D4bEDaf64dF8BE054676149BDfa224d --ffi --slow --broadcast
> ```
 
- Example Mainnet command:
> ```
> forge script script/GenerateBLSKeysAndRegisterValidators.s.sol:GenerateBLSKeysAndRegisterValidators --rpc-url=https://eth.llamarpc.com --account puffer-test -vvv --sender=0x4D42ABfB6D4bEDaf64dF8BE054676149BDfa224d --ffi --slow --broadcast
> ```

11. Your validator keys will be generated locally in the folder: `PufferPool/etc/keys/bls_keys/` and can be added to your validator client as described [here](./registration#step-6-prepare-your-validator).


## Batch Registering Validators Using Gnosis SAFE
A similar flow exists for operators that use [SAFE](https://app.safe.global). The process involves running a convenience script to generate the inputs, then executing a single SAFE transaction to batch register validator keys.

**Prereq**: Make sure the SAFE multisig wallet is funded with sufficient VTs and pufETH.

1. Clone the puffer-contracts repo:
> ```
> git clone https://github.com/PufferFinance/puffer-contracts.git
> cd puffer-contracts
> ```

2. Install Contract Dependencies
> ```
> yarn install
> ```

3. Install [Foundry](https://book.getfoundry.sh/getting-started/installation)
> ```
> curl -L https://foundry.paradigm.xyz | bash
> ```

4. Install Coral-CLI 
> ```
> cargo install -f --git https://github.com/PufferFinance/coral.git
> ```

5. Enter the utility-scripts directory
> ```
> cd utility-scripts
> ```

6. Edit the `validator-keystore-password.txt` file. This will be the password used to encrypt your validator BLS keystore files.

7. Run the script:
> ```
> forge script script/GenerateBLSKeysAndRegisterValidatorsCalldata.s.sol:GenerateBLSKeysAndRegisterValidatorsCalldata --rpc-url=$RPC_URL -vvv --ffi
> ```
![alt text](/img/batch_registration_output.png)
> Two things will happen:
> - A new file `safe-registration-file.json` is created
> - Your validator keys are created in the `utility-scripts/etc/keys/bls_keys` directory
> 
> :::caution
> Re-running the script will overwrite this `safe-registration-file.json`
> :::
> :::caution
> To avoid hitting the gas limit, limit registrations to batches of 50 validators.
> :::

8. Sign the transaction using the SAFE UI
> Craft a transaction using the SAFE Transaction Builder
> ![alt text](/img/safe_transaction_builder.png)
> 
> Upload `safe-registration-file.json`
> ![alt text](/img/safe_upload.png)
> 
> Create a batch
>
> ![alt text](/img/safe_create_batch.png)
>
> Send the batch and sign the transaction
![alt text](/img/safe_send_batch.png)
> 
> Upon success, your pending validators will be viewable on the [Dashboard](https://launchpad.puffer.fi/Dashboard).

9. Your validator keys will be generated locally in the folder: `utility-scripts/etc/keys/bls_keys/` and can be added to your validator client as described [here](./registration#step-6-prepare-your-validator).
