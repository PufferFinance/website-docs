---
title: Validator Tickets Calculation
slug: /protocol/validator-tickets-calculation
---

:::info 
This page is a guide to help you understand how Validator Tickets (VTs) are calculated.
:::

### VT Consumption Calculation Summary

The VT (Validator Tickets) consumption calculation is a critical process for managing node operators within the Puffer Protocol. This process ensures that node operators maintain sufficient VT balances to support their active validators. Here's a breakdown of how VT consumption is calculated:

1. **Node Operator Address Validation**: The process begins by validating the node operator's address to ensure it is in the correct format.

2. **Fetching VT Balance**: The current VT balance of the node operator is retrieved from the Puffer Protocol. This balance represents the total VTs available for consumption by the node operator's validators.

:::note

**Exited but Not Finalized Validators**: These are validators that have started the exit process from the beacon chain. Although they are no longer actively validating, the exit process is not fully complete until the bond is returned to the user. This stage is crucial as it ensures that validators are properly accounted for and that their resources are returned once all exit conditions are met.
:::

3. **Epoch and Validator Data Retrieval**: The latest epoch is fetched from the beacon chain, along with the list of active validators and those that have exited but not yet finalized. Active validators consume VTs daily, while exited validators may still consume VTs until they are fully finalized.

4. **VT Consumption Calculation**:
   - **Active Validators**: The total VT consumption for active validators is calculated based on the number of epochs they have been active.
   - **Exited Validators**: Similarly, the VT consumption for exited but not finalized validators is calculated for the epochs they were active until their exit.

5. **Present VT Balance Calculation**: The present VT balance is determined by subtracting the total VT consumption from the initial balance. This balance indicates the remaining VTs available to the node operator.

:::tip
Basically 1 VT is consumed daily per validator.
:::

6. **Minimum VT Requirement Check**: The system checks if the present VT balance meets the minimum required VTs per validator. If the balance is below this threshold, **ALL** of the node operator's validators will be ejected to prevent further VT consumption.

:::note
The threshold is currently set to 5 days, meaning node operators must maintain a VT balance sufficient for at least 5 before running out of VT or ejection will be triggered.

A warning message will be issued when there are 8 days left before reaching the threshold, allowing node operators to take necessary actions to avoid ejection.
:::

### When Do We Eject?

Ejection of validators is a critical process in the Puffer Protocol to ensure the stability and integrity of the network. Validators are ejected under specific conditions related to their VT (Validator Ticket) balance. Here's a detailed explanation of when ejection occurs:

1. **Low VT Balance Detection**:
   - The system continuously monitors the VT balance of node operators. If the balance falls below a predefined threshold, it triggers a potential ejection process.
   - The threshold is defined as the minimum required VTs per active validator.

2. **Active Validators Check**:
   - The system checks the number of active validators associated with a node operator. If there are no active validators, ejection is not necessary.

3. **Ejection Decision**:
   - If the present VT balance is less than the minimum required VTs for the active validators, the system logs a warning and proceeds to eject the validators.
   - The ejection process submits a request to eject the validators due to low VT balance.

### APIs and Instructions for Checking VT Status

To check your VT consumption and validator status, you can use the Puffer API. Here's how to do it:

#### Endpoint
```
GET https://api.puffer.fi/puffer-withdrawal-service/api/v1/noop/consumption/calculate/{node_address}
```

Replace `{node_address}` with your node operator's Ethereum address.

#### Request
```bash
curl -X 'GET' \
  'https://api.puffer.fi/puffer-withdrawal-service/api/v1/noop/consumption/calculate/{node_address}' \
  -H 'accept: application/json'
```

#### Response
```json
{
  "vtBalance": "string",         // Your current VT balance
  "activeValidators": 0,         // Number of active validators
  "exitedButNotFinalizedValidators": 0,  // Number of validators in exit state
  "shouldEject": true,           // Whether validators should be ejected
  "ticketsConsumed": "string",   // Total VTs consumed
  "showWarning": true           // Whether low VT balance warning should be shown
}
```

This API provides real-time information about your VT status and validator health. Since the VT consumption is calculated per epoch the response is updated every epoch.

:::warning Important Notice for Node Operators
It is the responsibility of node operators to actively monitor their VT balance and ensure timely deposits. Do not wait until the last minute to deposit additional VTs, as this may lead to unwanted results. If your balance falls below the defined threshold, all validators associated with your node operator address will be ejected from the protocol.

Best practices:
- Regularly check your VT balance using the API
- Set up monitoring alerts for low balance warnings
- Plan VT deposits well in advance of depletion
- Maintain a buffer above the minimum required balance
:::

