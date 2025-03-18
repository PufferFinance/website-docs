---
title: Multisig Governance
slug: /deployments/multisig
---

# Multisig Governance

The Puffer contracts implement a timelock such that full contract upgrades and certain function calls cannot be executed without first waiting a one week to pass through the timelock. See [BlockSec's article](https://blocksec.com/blog/demystify-the-access-control-mechanism-in-puffer-protocol) on Puffer's access control mechanism for more details and see [here](https://github.com/PufferFinance/Deployments-and-ACL/tree/main/docs/access-control) for the specific access control roles. There are three multisig accounts to be aware of:

### The Pauser Multisig

Puffer's Pauser Multisig is a 1-of-9 multisig designed to pause the Puffer contracts in case of emergencies. The pauser will include active monitoring systems to promptly pause the contracts should an invariant be broken (or is about to be).

### Operations Multisig

Puffer's Operations Multisig is a 3-of-5 multisig operated by the team. The timelock enforces that important function calls and upgrades must go through a 7-day delay before being executed. Actions initiated by the operations multisig can be vetoed by the community multisig during this window.

### Community Multisig

Puffer's Community Multisig is a 3-of-7 multisig composed of reputable and aligned Ethereum community members and auditing firms. The community multisig can bypass the timelock delay and has veto rights over actions initiated by the operations mulitsig. The multisig members are responsible for checking the actions of the operations multisig to ensure the protocol safely evolves over time.

Members include:

- Justin Drake: Ethereum Foundation
- Anthony Sassano: Daily Gwei
- David Hoffman: Bankless
- Domothy: Ethereum Foundation
- Ladislaus: EthStaker Community
- BlockSec: Auditing Firm
- Creed DAO: Auditing Firm
