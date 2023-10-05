---
title: Guardians
slug: /protocol/guardians
---
### TODO:
- who are they 
- what are their duties
    - provisioning eth + ejections + marking growthspurts
- what is the protocol's roadmap to replace them

The Guardians are a permissioned set of nodes whose job is to ensure the smooth functioning of the protocol. They have two responsibilities that will eventually be phased out as EIP-4788 and EIP-7002 are implemented in upcoming hardforks:

reporting the amount of ETH that backs pufETH

To calculate the conversion ratio between ETH and pufETH, the main contract must be aware of the amount of ETH currently backing the protocol. This requires summing the on-chain balances of all active validators with their current balances on the beacon chain. The Guardians are currently responsible for performing this computation, but after EIP-4788, this will be replaced by a trustless ZKP.

exiting nodes who breached the Puffer Protocol AVS

The first rule in the Puffer Protocol AVS is in place to protect offline nodes from harming Puffers. Unfortunately, until EIP-7002 is implemented, exiting validators cannot be done on-chain but instead requires signing exit messages with the validator's key. Since EIP-7002 may take years to implement, to be practical and proactive about preserving decentralization before it is too late, the Puffer Protocol requires its nodes with a < 16 ETH bond to encrypt their validator keyshares to the Guardians' enclaves. These enclaves are implemented such that they can only sign an exit message with the validator keyshare. As soon as EIP-7002 is implemented, the Guardian 'training wheels' will be removed.

To reduce counterparty risk, the Guardians have many guardrails in place. They are composed of public community members with a strong alignment with Ethereum's ethos and reputation at stake. The Guardians must use enclaves to increase the security of their actions and require quorum from a high threshold of Guardians (e.g., 8/9 signatures).

### Validator **ejections**

There is no incentive for a NoOp to ever withdraw their validator once they pay their smoothing commitment. However, there are some cases where the pool needs to eject the validators. The Guardians are responsible to submit VEMs on-chain whenever:

1. a NoOp’s smoothing commitment expired and wasn’t renewed
2. a NoOp’s validator balance has fallen to 1 eth 
3. an EigenPod was slashed from an AVS