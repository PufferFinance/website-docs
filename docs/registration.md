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
Follow [the instructions](https://holesky.dev/), to add the Holesky network to your wallet. If you're using mainnet, the default mainnet wallet config can be used or an RPC can be added [here](https://chainlist.org/chain/1).

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
If you ran the Coral-CLI on a remote server you can fetch the registration payload by substituing your information in the following command:
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

Invalid registrations will be skipped by the Guardians. The NoOp's bond will be returned but their VTs are penalized to prevent griefing.  

### Step 6: Prepare your Validator
Import your validator keys to your beacon/validator client. 

**Without Secure-Signer**:

You can find your generated keystore files in the `coral/etc/keys/bls_keys/` directory where each keystore file name is your BLS public key. The contents are encrypted using your supplied password file adhering to [ERC-2335](https://github.com/ethereum/ercs/blob/master/ERCS/erc-2335.md).
- [Import your validator keys to Nimbus ↗](https://nimbus.guide/run-a-validator.html#2-import-your-validator-keys) 
- [Import your validator keys to Teku ↗](https://docs.teku.consensys.io/how-to/load-validators-without-restarting) 
- [Import your validator keys to Lodestar ↗](https://chainsafe.github.io/lodestar/validator-management/vc-configuration/#import-a-validator-keystore-to-lodestar) 
- [Import your validator keys to Lighthouse ↗](https://lighthouse-book.sigmaprime.io/validator-manager-create.html?highlight=import#2-import-the-validators) 
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


# Batch Registering Validators
For operators interested in running many Puffer validators a convenience script has been provided to register multiple validators in one batch. 

1. Clone the PufferPool repo:
```
git clone https://github.com/PufferFinance/PufferPool.git
cd PufferPool
```

2. Install [Foundry](https://book.getfoundry.sh/getting-started/installation)
```
curl -L https://foundry.paradigm.xyz | bash
```

3. Create validator keys and registration JSONs as described [here](./registration.md#step-2-get-coral-cli-command) (NOTE: use the 2 ETH option).

4. Create a folder called `registration-data` in the PufferPool repo and move your registration JSON files there:

```
ls ~/PufferPool/registration-data
```

> ```
> registration-1.json
> registration-2.json
> registration-3.json
> ```

5. The script requires a local Eth keystore file to run. You can create a wallet by running the following and entering a keystore password:

```
mkdir -p ~/.foundry/keystores
cast wallet new ~/.foundry/keystores
```

> Example output:
> ```
> Enter secret:
> Created new encrypted keystore file: ~/.foundry/keystores/1d6cbbea-2b2d-42ac-b2e3-16fff98010de
> Address: 0x4D42ABfB6D4bEDaf64dF8BE054676149BDfa224d
> ```

> ```
> ls ~/.foundry/keystores
> 1d6cbbea-2b2d-42ac-b2e3-16fff98010de
> ```

Alternatively, you can import an existing private key to create a local keystore following [Foundry's docs](https://book.getfoundry.sh/reference/cast/cast-wallet-import#directory-options).

6. Fund the wallet with sufficient VTs, pufETH, and ETH to cover gas. These can be purchased as [described above](./registration.md#step-3-mint-pufeth-or-vts).

7. Install dependencies

> ```
> forge install
> ```

8. Simulate the batch registration script: 
- Replace with your RPC URL (either for mainnet or holesky)
- Set the keystore `--account` to the name of your keystore located in `~/.foundry/keystores`
- Set `--sender` to the keystore wallet address with your pufETH, VTs, and gas money.


Example:
> ```
> export KEYSTORE_PW=my_password
> ```
 
> ```
> forge script script/BatchRegisterValidator.s.sol:BatchRegisterValidator --rpc-url=https://eth.llamarpc.com --account 1d6cbbea-2b2d-42ac-b2e3-16fff98010de --password $KEYSTORE_PW -vvv --sender=0x4D42ABfB6D4bEDaf64dF8BE054676149BDfa224d 
> ```

9. Rerun the command with the `--slow` and `--broadcast` flags to send the transaction on chain

```
forge script script/BatchRegisterValidator.s.sol:BatchRegisterValidator --rpc-url=https://eth.llamarpc.com --account 1d6cbbea-2b2d-42ac-b2e3-16fff98010de --password $KEYSTORE_PW -vvv --sender=0x4D42ABfB6D4bEDaf64dF8BE054676149BDfa224d --slow --broadcast
```
