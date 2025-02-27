---
title: Ejection Scenarios
slug: /nodes/ejection-scenarios
---

# Ejection Scenarios

:::info
This document outlines various scenarios that may cause a validator to be ejected from the Puffer protocol and the Ethereum network. Understanding these scenarios is crucial for maintaining validator status and avoiding unwanted exits.
:::

## Overview

Validator ejection is the process where a validator is forced to exit from active validation duties. This can occur through protocol rules, performance issues, or detected malicious behavior.

## Common Ejection Scenarios

### 1. Balance-Related Ejection

:::danger
If a Node Operator does not top-up their VT within 5 mins of the balance dropping below 5 VT per validator, all their active validators will be ejected from the active validator set.
:::

This is a core Puffer protocol rule designed to ensure validators maintain sufficient stake for network security.

### 2. Voluntary Exit

:::tip
Node operators can initiate a controlled exit through their validator client when they wish to stop validating.
:::

The process involves:
- Generating exit message
- Signing with validator keys
- Broadcasting to the network
- Waiting in exit queue

### 3. Protocol Violations

:::caution
Serious protocol violations result in immediate ejection and possible slashing penalties.
:::

Common violations include:
- Double signing blocks
- Proposing multiple blocks for the same slot
- Attesting to conflicting blocks
- Sustained poor performance or downtime

### 4. Guardian-Initiated Ejection

Puffer Guardians may trigger ejection under these circumstances:
- Consistent failure to meet performance metrics
- Detection of malicious behavior
- Violation of protocol rules or terms of service
- Non-compliance with protocol updates

## Handling Ejection Scenarios

### For Voluntary Exits

<details>
<summary>Steps for Voluntary Exit</summary>

1. Claim all pending rewards
2. Follow validator client's exit procedure
3. Monitor exit queue status
4. Secure remaining funds post-exit

</details>

### For Involuntary Ejections

<details>
<summary>Recovery Steps</summary>

1. Check Puffer Dashboard for ejection cause
2. Address technical issues if applicable
3. Contact support for disputed ejections
4. Secure remaining stake and rewards
5. Review re-entry requirements if desired

</details>

## Prevention Best Practices

:::tip Best Practices
1. Regular system maintenance and updates
2. Continuous monitoring of validator performance
3. Proper security measures implementation
4. Maintaining stable network connectivity
5. Following all protocol guidelines
:::

## Additional Resources

<details>
<summary>Helpful Links</summary>

- [Puffer Dashboard](https://launchpad.puffer.fi/Dashboard)
- [Technical Requirements](/nodes/requirements)

</details>

:::note
While ejection from the protocol doesn't always mean loss of staked ETH, certain scenarios (particularly slashing) can result in significant penalties. Always follow best practices to protect your stake.
:::
