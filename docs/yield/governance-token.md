---
title: PUFFER Token and vlPUFFER
slug: /governance/token
---

# The PUFFER Token

The PUFFER token is the native governance token of the Puffer Protocol and UniFi ecosystem.

## The Role of [PUFFER](https://etherscan.io/address/0x4d1C297d39C5c1277964D0E3f8Aa901493664530)

<img src="/img/governance-puffer-dao-overview.webp" height="350" alt="Puffer DAO overview"></img>

### Puffer LRT

- Govern key protocol parameters (fees, limits, bond requirements)
- Select guardians and restaking operators
- Curate supported AVSs
- Future feature: Help allocate ETH to different operators and AVSs (more details coming soon)

### UniFi AVS

- Manage fee structures
- Whitelist new rollups for AVS support
- Oversee AVS security parameters
- Guide the integration of new preconfirmation and proposer commitment services

### UniFi Rollup

- Set fee parameters for rollup transactions
- Direct ecosystem rewards to promote adoption
- Manage treasury funds for long-term sustainability
- Steer rollup upgrade decisions and feature prioritization

## vlPUFFER

**vlPUFFER** is Puffer Finance's governance and locking system.
By locking your **$PUFFER** tokens, you gain **voting power (vlPUFFER)**, participate in **governance**, and become eligible for **exclusive rewards**.

### What is vlPUFFER?

When you lock your $PUFFER tokens, you receive **vlPUFFER** in return, a non-transferable token representing your **voting power** within the Puffer ecosystem.
The longer you lock, the higher your multiplier and the more vlPUFFER you receive.

Your vlPUFFER balance determines your influence in governance votes and reward distributions.

### How it Works

1. **Lock your PUFFER tokens** for a chosen duration (from 30 days up to 2 years).
2. The system grants you **vlPUFFER** based on a **multiplier** determined by the lock duration.
3. **Use your vlPUFFER** to vote in governance, influence emissions, and access certain protocol rewards.
4. After the lock period ends, **you can withdraw your original PUFFER tokens**.

> vlPUFFER is non-transferable. It cannot be traded or moved between wallets. It only represents voting power.

### Lock Duration and Multipliers

| Lock Duration | Multiplier |
| ------------- | ---------- |
| 30 days       | 1x         |
| 3 months      | 3x         |
| 6 months      | 6x         |
| 9 months      | 9x         |
| 12 months     | 12x        |
| 18 months     | 18x        |
| 24 months     | 24x        |

**Example:** Locking 100 PUFFER for 12 months gives you **1,200 vlPUFFER** (12x multiplier).

### Locking your PUFFER

This is the interface that allows you to stake your PUFFER [here](https://app.puffer.fi/puffer?tab=Stake).

![stake](/img/vlPuffer/stake.png)

Minimum lock amount: **10 PUFFER**

Once you have staked, you will see the information of your lock, where you can:

- **Add more PUFFER** to increase your total locked amount and thus you vlPUFFER.
- **Extend your lock duration** to earn a higher multiplier, increasing your vlPUFFER as well.
- **Do both** to maximize your voting power.

![stake2](/img/vlPuffer/stake2.png)

### Managing Your Lock

In the ["Manage"](https://app.puffer.fi/puffer?tab=Manage) tab you can see the detail of your vlPUFFER

![manage](/img/vlPuffer/manage.png)

If you click the "Manage Lock" button, you will be able to renew the lock, by adding more PUFFER, extending the lock duration or doing both, just as shown before:

![renew](/img/vlPuffer/renew.png)

You could also click "Delegate" to [delegate your voting power](#vote-delegation) or click "Withdraw" to [Unlock your tokens](#unlocking-your-tokens).

### Vote Delegation

You can **delegate** your vlPUFFER voting power to another wallet. You can change or revoke the delegation without any time limitation.

![delegate](/img/vlPuffer/delegate.png)

Using different wallets, you can manage multiple locks. If you delegate all of them to your main account, you will keep your voting power centralized.

#### Example Strategy

- Lock 3 months, 12 months, and 24 months in different wallets.
- Delegate all voting power to your main wallet.
- Maintain flexibility in unlocking while concentrating governance influence.

### Unlocking Your Tokens

When your lock expires:

1. You can **withdraw your PUFFER tokens** at any time after the end date.
2. If you don't withdraw within **7 days**, anyone can **"kick"** your expired lock:
   - The kicker receives **1%** of your locked PUFFER as a fee.
   - The remaining **99%** is automatically returned to you.

### Governance Power and Utility

Your vlPUFFER determines:

- The weight of your votes in governance proposals.
- Your influence over emissions and reward allocations.
- Eligibility for potential incentives (such as yield boosts or airdrops).

### Security

vlPUFFER has been **audited by [BlockSec](/files/vlPUFFER_Blocksec.pdf)** to ensure secure locking, delegation, and withdrawal mechanisms.

### Key Rules

- Each wallet can have **one active lock**.
- You can only **withdraw after expiry**.
- You can **delegate** your voting power to a different account.
- **vlPUFFER is non-transferable**.
- **Re-locking** cannot reduce your current voting power.
- After expiry, **withdraw within 7 days** to avoid the kicker fee.

### Additional Resources

- [vlPUFFER repo](https://github.com/PufferFinance/puffer-locker)
- [vlPUFFER contract on Etherscan](https://etherscan.io/address/0x1e168460ea0cf3f126ddd3183dc2e376515a5e91)
- [BlockSec Audit Report](/files/vlPUFFER_Blocksec.pdf)
