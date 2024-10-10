---
title: PUFFER Token
slug: /protocol/puffer-token
---

# $PUFFER Token

The [PUFFER token](https://etherscan.io/address/0x4d1C297d39C5c1277964D0E3f8Aa901493664530)  is the native governance token of the Puffer Protocol and UniFi ecosystem.

### The Role of $PUFFER

#### Puffer LRT
- Govern key protocol parameters (fees, limits, bond requirements)
- Select guardians and restaking operators
- Curate supported AVSs
- Future feature: Help allocate ETH to different operators and AVSs (more details coming soon)

#### UniFi AVS
- Manage fee structures
- Whitelist new rollups for AVS support
- Oversee AVS security parameters
- Guide the integration of new preconfirmation and proposer commitment services

#### UniFi Rollup
- Set fee parameters for rollup transactions
- Direct ecosystem rewards to promote adoption
- Manage treasury funds for long-term sustainability
- Steer rollup upgrade decisions and feature prioritization

### vePUFFER

#### What is vePUFFER?
![alt text](/img/vePUFFER.png)

vePUFFER is a novel ve (voting escrow) governance mechanism implemented as an ERC-721 token, developed in collaboration with [Aragon](https://aragon.org/). It's designed to align with Puffer's long-term goal of fostering value-aligned and committed participants in the ecosystem.

Key features of vePUFFER:
- Users stake PUFFER tokens to mint vePUFFER NFTs
- Voting power accrues over time as long as PUFFER remains staked
- No fixed lockup duration is required
- Users can unstake their PUFFER at any time

#### How is vePUFFER different from other ve tokens?

vePUFFER builds on learnings from protocols like Curve and Prisma, but introduces several key innovations:

- **Flexible staking:** Unlike traditional ve tokens, vePUFFER doesn't require users to specify a lockup duration.
- **Dynamic voting power:** Voting power increases over time, rewarding long-term engagement without forcing users into rigid lockups.
- **Reset mechanism:** Unstaking resets the accrued voting power, creating a balance between long-term incentives and flexibility.
- **NFT-based:** Implemented as ERC-721 tokens, providing unique possibilities for governance participation.
- **Incentivizes long-term engagement:** The accruing voting power mechanism rewards users for sustained participation in the protocol.
- **Flexible stake management:** Users can adjust their stake based on personal or market conditions while still participating in governance.

#### How is vePUFFER used?
vePUFFER is used for voting within the ecosystem. To start participating in governance, users will stake PUFFER to mint a vePUFFER NFT which will begin accruing voting power on a weekly cadence. After the warmup period, they will be able to begin voting. This mechanism empowers users to actively shape the future of the Puffer ecosystem through voting rights, kickstarting true decentralization and community-led governance within the Puffer ecosystem.

#### vePUFFER Parameters
The following parameters are the initial vePUFFER parameters. They can be changed by the PUFFER community through future governance proposals.

| Category | Name | Description | Value |
|----------|------|-------------|--------|
| Voting Power Curve | Max Multiplier | Maximum boost on initial deposit that will be reached if a user leaves staked tokens in, indefinitely. | 2x |
| Voting Power Curve | Max Duration | The time it takes to reach the max multiplier following a linear increasing curve .| 2 years |
| Voting Power Curve | Warmup Period | Time after locking in which a user can vote. | 3 days |
| Exit Queue | Cooldown | Cooldown is the period between the user entering the exit queue and being able to withdraw the underlying tokens. They do not have voting power at this time as their NFT is held in the staking contract. | 1 month |
| Exit Queue | Min Lock | Min amount of time a staker must hold before they can begin the exit process. | 1 Month |
| Exit Queue | Exit Fee Percent | Tax paid in the underlying token on exit. | 0% |
| Escrow | Minimum Deposit | Number of PUFFER tokens a user must deposit as a minimum. | 100 PUFFER |

### PUFFER Allocations

Total Supply: 1,000,000,000

Initial Supply: 102,300,000 (10.23%)

| Allocation | Percentage | Description |
|------------|------------|-------------|
| Ecosystem and Community | 40% | Allocated to initiatives that build a dynamic and engaged ecosystem, rewarding community support and ensuring continuous growth. This reserve will fund future airdrop seasons, community incentives, and initial liquidity on exchanges. |
| Airdrop Season 1 | 7.5% | Allocated to the Crunchy Carrot Quest Season One airdrop, available immediately to reward early Puffer supporters from the Crunchy Carrot Campaign. 65% is available on day 1 and for larger depositors, the rest is vested over 6 months for equal opportunity for all of our community. |
| Airdrop Season 2 | 5.5% | Allocated to Crunchy Carrot Quest Season Two participants. Season 2 has already started after the snapshot of Season 1 on Oct 5th. More information on Puffy's quest will be coming in the following days. |
| Investors | 26% | By providing resources and support, investors enabled Puffer to build great products for the community. Investors will receive their allocation over 3 years, with a 1-year cliff and 2 years vesting. |
| Early Contributors & Advisors | 20% | This allocation is for the Puffer core team and advisors, who are fully committed to Puffer's success. This will vest over 3 years, with a 1-year cliff, ensuring long-term dedication to the ecosystem's vision. |
| Protocol Guild | 1% | In alignment with the Protocol Guild Pledge, 1% of the total $PUFFER supply will support Ethereum core development, vested over a 4-year period. This contribution strengthens the security and scalability of Ethereum, benefiting the broader ecosystem. |
