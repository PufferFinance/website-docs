---
sidebar_position: 2
title: RAVe
---
RAVe is the second component of Puffer's Ethereum Foundation grant and stands for `Remote Attestation Verification`. This essential set of smart contracts allows enclaves to interface with blockchains securely and helps let the Puffer Pool be permissionless. RAVe enables entirely [new use cases](https://ethresear.ch/t/2fa-zk-rollups-using-sgx/14462) that weren't previously possible that we are excited to explore at Puffer.

## Remote Attestation
The remote attestation (RA) process allows an untrusted party to prove they are running a specific SGX enclave. Since each enclave only allows the execution of the code it was initialized with, RA effectively allows one to prove to another that they can only run a specific program. In the context of messenger apps using SGX (e.g., [Signal](https://signal.org/blog/building-faster-oram/)), RA allows them to prove to their users' devices that they are running privacy-preserving software. 

The purpose of RAVe is to allow anyone to prove to a smart contract that they are running an enclave. This is an extremely powerful primitive in the context of blockchains for providing high-integrity, off-chain, confidential compute. 

### RAVe v1
RAVe v1 uses [EPID-based](https://api.portal.trustedservices.intel.com/EPID-attestation) RA, which involves an interactive process with Intel's Attestation service (IAS). At a high level, the enclave can commit 64 bytes of user data to include in its RA report. Also included is security-related information about the device and the `MRENCLAVE` and `MRSIGNER` fields. MRENCLAVE is the enclave's measurement, uniquely identifying the program to be run, and MRSIGNER identifies the entity that built the enclave. 

The IAS will return RA evidence to the attesting SGX device upon successful RA. Included in the RA evidence is a RA report, the IAS-signed RA report, the IAS [root CA certificate](https://certificates.trustedservices.intel.com/Intel_SGX_Attestation_RootCA.pem), and the x.509 signing certificate used to sign the report. RAVe smart contracts verify these reports' provenance and validity of various report fields and then extract the 64-byte payload. 

### RAVe in the Puffer Pool
In Puffer, RA is how a node proves that they are running Secure-Signer and RAVe smart contracts verify RA evidence to allow entrance into the pool. When generating a validator key, the Secure-Signer enclave commits to its validator public key inside the RA report in the USERDATA field. RAVe verifies the node's RA evidence, extracts their validator public key, and registers it on-chain. This allows the node to prove to the pool that they were running a Secure-Signer enclave and generated a new validator key within it. Viewing the source code lets anyone verify that the Secure-Signer program never leaks the key.

### RAVe in restaking
ZKPs can be used to prove that a program was executed correctly, but an enclave prevents a user from running anything except the correct execution of the program. This is extremely attractive in the context of middlewares on Eigenlayer, especially when considering the negligent overhead of enclaves compared to ZKPs. Importantly, the issue of "stealth restaking" can be addressed through enclaves and RAVe.