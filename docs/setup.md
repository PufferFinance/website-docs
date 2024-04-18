---
title: Setup
slug: /nodes/setup
---

## Setup Beacon Node and Execution Node
In order to run a [validator](https://ethereum.org/en/developers/docs/nodes-and-clients/run-a-node/), you will need to run an Execution Layer client, a Consensus Layer client, and the validator software. 

:::note
Puffer is in testnet and is using the 🦁 [Holesky testnet](https://holesky.dev/), so make sure to set the network to `holesky`
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
### Build from source
- Dependencies: [Rust](https://www.rust-lang.org/learn/get-started)
```
git clone https://github.com/PufferFinance/coral
cd coral
cargo build --release
```

## Setup Validator Enclave (optional)
Follow along to setup your enclave to run a validator with a 1 ETH bond.

:::caution
Secure-Signer requires Ubuntu 20.04!
:::

#### Prepare a Docker Volume
By default, any data created within a Docker container is lost if the container is removed. Secure-Signer maintains our keys and slashing protection databases, so we want this data to persist should anything happen to the container. To do so, we will create a Docker volume called Puffer-Validator-Backup.

```
docker volume create Puffer-Validator-Backup
```

We can verify the volume exists and inspect it with the following:

```
docker volume inspect Puffer-Validator-Backup
```

Output:
```
        $ docker volume inspect Puffer-Validator-Backup
        [
            {
                "CreatedAt": "2023-11-30T20:31:46Z",
                "Driver": "local",
                "Labels": {},
                "Mountpoint": "/var/lib/docker/volumes/Puffer-Validator-Backup/_data",
                "Name": "Puffer-Validator-Backup",
                "Options": {},
                "Scope": "local"
            }
        ]
```

### Install SGX Drivers

#### Via Scripts
:::note
The following commands should be run from `coral` directory, unless otherwise stated.
:::
Run commands:
```
git clone https://github.com/PufferFinance/coral
cd scripts
./install_enclave_dependencies.sh
```

Output:

```
puffer@Puffer-Dev:~/coral/scripts$ ./install_enclave_dependencies.sh
[SUCCESS] CPU supports SGX1/SGX2.
[SUCCESS] CPU supports Flexible Launch Control (FLC).
[SUCCESS] Kernel version (5.15.0) is up-to-date.
[NOTICE] Docker already installed!
[NOTICE] Docker is already running!
[NOTICE] ben-secure-signer is already in the docker group.
[NOTICE] SGX packages are already installed.
[SUCCESS] SGX service is running!
```

Run commands:

```
./install_secure_signer_docker.sh
```

Example Output (assumes Docker image tag `1.0.0`, check for latest Docker image release [here](https://hub.docker.com/r/pufferfi/validator)):

```
puffer@Puffer-Dev:~/coral/scripts$ ./install_secure_signer_docker.sh
[WARNING] Docker volume Puffer-Validator-Backup already exists.
Do you want to create another volume? (yes/no) no
[INFO] User chose not to create another volume.
[INFO] Verifying the existence of Puffer-Validator-Backup volume...
[SUCCESS] Puffer-Validator-Backup volume exists!
[INFO] Inspecting Puffer-Validator-Backup volume...
[INFO] Volume details:
[
    {
        "CreatedAt": "2024-03-26T02:58:40Z",
        "Driver": "local",
        "Labels": {},
        "Mountpoint": "/var/lib/docker/volumes/Puffer-Validator-Backup/_data",
        "Name": "Puffer-Validator-Backup",
        "Options": {},
        "Scope": "local"
    }
]
Enter the version of the Puffer validator image you want to use (default 1.0.0): 1.0.0
1.0.0: Pulling from pufferfi/validator
Digest: sha256:47af33f8634799734b3818a992adaad146b53245dba22ebef2542d36f61e05fd
Status: Image is up to date for pufferfi/validator:1.0.0
docker.io/pufferfinance/validator:1.0.0
[SUCCESS] Docker image validator:1.0.0 pulled successfully!
f3b600f2d50b4c1cc42495f6c4f20bdb0c9a1dd17d5923de83d2723c2d1cab04
[SUCCESS] Container deployed successfully!
[SUCCESS] Container puffer_secure_signer_container is running successfully!
```
#### Start the Container
The following command run a container with the name `puffer_secure_signer_container` built from the pulled `puffer_validator` image. Notice we are mounting our volume `Puffer-Validator-Backup` to the `/Validator` enclave directory so any changes to the `/Validator` enclave directory persist if the container is removed:

:::caution 
Ensure image tag matches latest version described on testnet repository before running the next command! (Here image tag is 1.0.0) 
:::

```
docker run -itd --network host --mount type=volume,source=Puffer-Validator-Backup,destination=/Validator -v /var/run/aesmd:/var/run/aesmd --device /dev/sgx/enclave --device /dev/sgx/provision --name puffer_secure_signer_container pufferfi/validator:1.0.0
```

Output:
```
puffer@Puffer-Dev:~/coral/scripts$ docker run -itd --network host --mount type=volume,source=Puffer-Validator-Backup,destination=/Validator -v /var/run/aesmd:/var/run/aesmd --device /dev/sgx/enclave --device /dev/sgx/provision --name puffer_secure_signer_container pufferfi/validator:1.0.0
d72c2f398f9823b91073b92d608e02bfe3fbebb113fbb3e46b2ebfaa74712d9e
```

Verify that the container is running:

```
docker container ls
```

Output:
```
puffer@Puffer-Dev:~/coral/scripts$ docker container ls
CONTAINER ID   IMAGE                                  COMMAND                  CREATED         STATUS         PORTS     NAMES
d72c2f398f98   pufferfi/validator:1.0.0   "/bin/bash"              2 minutes ago   Up 2 minutes             puffer_secure_signer_container
```

#### Run Secure-Signer

The Puffer Secure-Signer enclave is built using the Occlum LibOS. To start Puffer Secure-Signer we will use the occlum run command and point to the `validator` binary stored within the Occlum enclave image and specify port `9001`.

You can simply run the Puffer Secure-Signer enclave without attaching to the container by running the following. This method is more robust than the subsequent method because even if your terminal crashes or exits the command will still proceed:

```
docker exec puffer_secure_signer_container /bin/bash -c "cd /Validator && occlum run /bin/validator 9001"
```

Output:
```
puffer@Puffer-Dev:~/coral/scripts$ docker exec puffer_secure_signer_container /bin/bash -c "cd /Validator && occlum run /bin/validator 9001"

2024-03-26T03:12:54.806960Z  INFO validator: Starting SGX Validator: localhost:9001, using genesis_fork_version: [0, 0, 0, 0]
```

#### Alternative: Run Secure-Signer via Attaching to the Container

Attach to the container using its name secure_signer_container. Notice the username is now root, indicating we are now inside the container.

```
docker exec -it puffer_secure_signer_container bash
```

Output:

```
puffer@Puffer-Dev:~/coral/scripts$ docker exec -it puffer_secure_signer_container bash
root@Puffer-Dev:/# cd /Validator/
```

Change into directory

```
cd /Validator
```

Run Secure-Signer

```
occlum run /bin/validator 9001
```

Output:
```
root@Puffer-Dev:/Validator# occlum run /bin/validator 9001
2024-03-26T03:18:01.292913Z  INFO validator: Starting SGX Validator: localhost:9001, using genesis_fork_version: [0, 0, 0, 0]
```





