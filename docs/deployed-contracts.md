---
title: Contract Addresses
slug: /deployments/deployed-contracts
---


# Contract Addresses and Docs
## Puffer Protocol Contracts
Puffer's smart contracts are located in two repos:
### [PufferFinance/pufETH](https://github.com/PufferFinance/pufETH)
> This repo contains the `PufferVault` contract which is where the protocol's assets (ETH, wETH, stETH) are held and the `pufETH` LRT is minted.

> Visit the [technical documentation](https://github.com/PufferFinance/pufETH/tree/main/docs) for more information.

### [PufferFinance/PufferPool](https://github.com/PufferFinance/PufferPool)
> This repo contains the core contracts for Puffer's protocol. The core fuctionality is to:
- allow for users to permissionlessly run Ethereum validators
- interface with EigenLayer's contracts to enable native restaking and delegation

> Visit the [technical documentation](https://github.com/PufferFinance/PufferPool/tree/master/docs) for more information.

## Deployment Addresses
The following are the address of our contracts on Ethereum mainnet and Holesky testnet. See [here](https://github.com/PufferFinance/Deployments-and-ACL/tree/main/docs/deployments) for the definitive addresses which are transcribed below:
### Mainnet
**pufETH**
- `PufferVault (pufETH token)`: `0xD9A442856C234a39a81a089C06451EBAa4306a72`
- `PufferDepositor`: `0x4aA799C5dfc01ee7d790e3bf1a7C2257CE1DcefF`
- `AccessManager`: `0x8c1686069474410E6243425f4a10177a94EBEE11`
- `Timelock`: `0x3C28B7c7Ba1A1f55c9Ce66b263B33B204f2126eA`

**PufferPool**
- `PufferProtocol`: `0xf7b6B32492c2e13799D921E84202450131bd238B`
- `ValidatorTicket`: `0x7D26AD6F6BA9D6bA1de0218Ae5e20CD3a273a55A`
- `GuardianModule`: `0x628b183F248a142A598AA2dcCCD6f7E480a7CcF2`
- `EnclaveVerifier`: `0x1d03e4bCC928795B1EEac1205fa9dDC4a3241D95`
- `PufferModuleManager`: `0x9E1E4fCb49931df5743e659ad910d331735C3860`
- `PufferOracle`: `0x8eFd1Dc43AD073232F3e2924e22F173879119489`

### Holeksy Testnet
**pufETH**
- `PufferVault (pufETH token)`: `0x98408eadD0C7cC9AebbFB2AD2787c7473Db7A1fa`
- `PufferDepositor`: `0x9BEF4B8E025ecc91FE5Ee865f4880b106F106e5a`
- `AccessManager`: `0xA6c916f85DAfeb6f726E03a1Ce8d08cf835138fF`
- `Timelock`: `0x3C28B7c7Ba1A1f55c9Ce66b263B33B204f2126eA`

**PufferPool**
- `PufferProtocol`: `0x705E27D6A6A0c77081D32C07DbDE5A1E139D3F14`
- `ValidatorTicket`: `0xA143c6bFAff0B25B485454a9a8DB94dC469F8c3b`
- `GuardianModule`: `0xD349FdCD0e4451381bfE7cba3ac28773E176b326`
- `EnclaveVerifier`: `0x79200dE6299F27b7354Ca95A09a9C3978DBEDf24`
- `PufferModuleManager`: `0xe4695ab93163F91665Ce5b96527408336f070a71`
- `PufferOracle`: `0xEf93AA29F627465A7f58A1F25980c90116f27b74`