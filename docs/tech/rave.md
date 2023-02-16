---
sidebar_position: 2
title: RAVe
---
RAVe is part of Puffer's Ethereum Foundation grant deliverable and stands for `Remote Attestation VErification`. This essential set of smart contracts allows the Puffer Pool to be permissionless. Beyond this, RAVe enables entirely [new use cases](https://ethresear.ch/t/2fa-zk-rollups-using-sgx/14462) that weren't previously possible that we are excited to explore at Puffer.

## Remote Attestation
Remote Attestation (RA) is necessary for an SGX-enabled CPU to establish trust with third parties. This is essential for anyone to prove that they are running a specific program. In Puffer, RA is how a NoOp proves that they are running Secure-Signer and RAVe smart contracts verify RA evidence to allow entrance into the pool. 

RAVe v1 uses [EPID-based](https://api.portal.trustedservices.intel.com/EPID-attestation) RA, which involves an interactive process with Intel's Attestation service (IAS). At a high level, the enclave can commit 64 bytes of user data to include in its RA report. Also included is security-related information about the device and the `MRENCLAVE` and `MRSIGNER` fields. MRENCLAVE is the enclave's identity, uniquely identifying the program to be run, and MRSIGNER identifies the entity that built the enclave. 

The IAS will return RA evidence to the attesting SGX device upon successful RA. Included in the RA evidence is a RA report, the IAS-signed RA report, the IAS [root CA certificate](https://certificates.trustedservices.intel.com/Intel_SGX_Attestation_RootCA.pem), and the x.509 signing certificate used to sign the report.

## What does RAVe do?
RAVe is a generic set of smart contracts for verifying RA evidence. The following section will describe how it is used in the context of the Puffer Pool.

RAVe is a collection of libraries for performing the necessary signature verification and string parsing operations to verify RA evidence. The following documents the typical verification flow:

> - Verify the `signing_cert` is rooted in the `ias_root_cert`.
> - Verify the `signed_rpt` is the RSA signature of `sha256(rpt)`, signed with the `signing_cert`.
> - JSON decode `rpt` to `rpt_json`
> - base64 decode `rpt_json['isvEnclaveQuoteBody']` to `quote_body`
> - extract `MRENCLAVE` from `quote_body`
> - extract `MRSIGNER` from `quote_body`
> - extract `USERDATA` from `quote_body`

If the signature is valid and the MRENCLAVE and MRSIGNER values match what is expected for the enclave, then the USERDATA can be processed.

## RAVe in the Puffer Pool
RAVe is used for onboarding to require that NoOps in the Puffer Pool use Secure-Signer. When generating a validator key, the Secure-Signer enclave commits to its BLS public key inside the RA report in the USERDATA field. RAVe verifies the NoOps RA evidence, then their BLS key is extracted on-chain. This allows the NoOp to prove to the pool that they were running Secure-Signer on SGX and generated a new validator key within it. By viewing the source code, anyone can verify that Secure-Signer never leaks the key.
