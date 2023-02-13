---
sidebar_position: 2
title: Secure-Signer
---

Puffer’s Secure-Signer prevents these vulnerabilities through the use of Enclaves. To prevent possible
slashes through double-signing, the Secure-Signer generates and safeguards the BLS validator key
inside its encrypted and tamper-proof memory. This key can only be accessed during runtime and
remains encrypted at rest, making it inaccessible to the NoOp unless used to sign block proposals or
attestations. Since each key is bound to a Secure-Signer instance, it is not at risk of being used across
multiple validator clients. This protects a validator’s locked ETH in the event that the NoOp is hacked
and their validator key is leaked and used in an intentional slashing event, a possibility on all existing
staking platforms.
Beyond safeguarding the validator key, Secure-Signer prevents slashing by maintaining an integrityprotected
and prunable database of previously signed material adhering to [EIP-3076](https://eips.ethereum.org/EIPS/eip-3076). Whenever
the consensus client passes Secure-Signer blocks or attestations, validator key signatures are contingent
on the following assertions holding:

- proposal check: slot > previous slot
- attestation check: source epoch ≥ previous source epoch
- attestation check: target epoch > previous target epoch

These assertions are enforced through the enclave and hold even if the NoOp’s operating system
is compromised, significantly reducing NoOp risk and allowing the Puffer Pool to lower the bond
requirement safely.
