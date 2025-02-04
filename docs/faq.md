---
title: FAQ
slug: /reference/faq
---

### 🐙 What is Puffer's Mission?

> Puffer's mission is to define a new industry standard for secure validator operations, with the primary objective of preserving the decentralization of Ethereum.

> Through our anti-slashing technology, we are reducing the risk of correlated slashing events across Ethereum while simultaneously promoting decentralization by lowering the barrier to entry for at-home validators and allowing for a more diverse node operator set.

> However, reducing barriers to entry is one thing, but creating a more profitable platform for validators is crucial and is why Puffer has been pioneering in native restaking. 

> Ultimately, through Puffer's protocol, we hope to extend Ethereum's decentralization runway while its roadmap is being implemented.

### 🐡 Explain ETH Liquid staking to me like I'm five?

> Liquid staking is a simple and convenient way to gain exposure to ETH staking without having to meet the technical or financial requirements associated with vanilla staking, such as running your own node setup or having access to large amounts of capital (32 ETH).
>
> Instead, liquid staking protocols (LSPs) take user deposits and stake them on behalf of their users using their own node operator set, taking on the heavy lifting for the user.
>
> In return, users receive tokens from the LSP that represents their deposit. These tokens can be redeemed from the LSP for ETH, traded on the open market, or used throughout DeFi as collateral.

### ✌️ Explain restaking to me like I'm five?

> With 32 ETH you can stake to run a solo validator. Your ETH is used solely for the purpose of PoS. Restaking lets you use this ETH for running other jobs, allowing for more rewards but also more risk since you can get slashed from these new jobs. Puffer likes restaking because it allows validators to earn more with their existing hardware which isn't being fully taken advantage of through PoS alone.

### 🐟 What problems do LSPs currently face?

> Although decentralized liquid staking sounds great in theory, the market will always favor centralized services in practice. This is because centralized staking providers can attract more liquidity by offering stakers higher yields than their decentralized competitors.
>
> This dilemma results from centralized services running a small and permissioned node operator set that allows them to scale much faster and operate more cost-effectively. For example, a node operator with 1024 ETH can operate 32x more validators than a node operator with 32 ETH when solo staking while paying the same hardware costs.

> In the context of liquid staking, centralized protocols with permissioned validators do not require their operators to put down collateral. Rather, they rely on reputation to ensure they behave honestly. In practice, some operators run tens of thousands of validators each. For a decentralized liquid staking protocol, running this many validators requires operators to have tens of thousands of ETH.
>
> Puffer's goal is to break this cycle by empowering decentralized validators with higher rewards while lowering their barrier to entry. 

### 🦈 How does Puffer help address some of these pain points?

> Puffer is taking a unique approach to solving this problem by allowing node operators to earn additional revenue by utilizing their latent compute power. This allows node operators to amortize their infrastructure and operating costs without requiring additional capital to run parallel validators.
>
> This drastically lowers the barrier to entry for node operators, allowing decentralized LSPs to flourish and compete with centralized services that currently dominate the space.
>
> Over the coming months, we will be providing more information on our plans for generating additional yield for Puffer node operators.

### 🦑 How does Puffer protect validators from being slashed?

> Secure-Signer is an open-source public good built by the Puffer team to increase decentralization across Ethereum while protecting validators from being slashed.
>
> As an independent implementation of Consensys' Web3Signer remote-signing tool, Secure-Signer moves key management and signing logic out of the consensus client and into a secure enclave.
>
> Validator keys are generated and stored within SGX's encrypted enclave memory.
>
> If a compromised host or consensus client bug attempts to sign a slashable message, Secure-Signer's isolated SGX environment won't produce a signature, providing a strict security enhancement that prevents the validator from committing a slashable offense.

### 🧜‍♀️ How much ETH do I need to run a Puffer node?

> As preserving decentralization is our top priority, the minimum collateral requirement will start at 2 ETH for Puffer node operators. This lowers the barrier to entry for solo stakers, allowing for a robust and scalable permissionless node operator set. If the validator is using Puffer's anti-slasher, they can reduce this collateral requirement to 1 ETH. 

### 🐢 When will Puffer launch?

> Puffer is coming soon™️! 

### 🦞 Who runs Secure-Signer?

> Nodes run Secure-Signer alongside their consensus client. Nodes could be anyone with compatible hardware and at least 1 ETH.

### 🦐 Can I get slashed if I go offline?

> No, inactivity is not considered a slashable offense. Refer to [Slashing on Ethereum PoS](slash.md).

### 🪼 How many validators have been slashed? Should we even care about slashable offenses?

> At the time of writing, there have been [262 slashing events](https://beaconcha.in/validators/slashings). While this number may seem low, slashing poses an existential threat to all Ethereum validators and LST holders.

> For example, assume there is a bug in one of the five consensus clients that causes a slashing rule to be broken (for simplicity, assume each consensus client is used by 20% of the validators). The anti-correlation penalty causes the slashing amount to increase as the number of offenders increases, in this case to $1 + 3*20\%*32 = 20.2$ ETH. Unfortunately, 20% of the validators using this consensus client would face a 20.2 ETH slashing penalty. This would wipe out years of staking revenue for the nodes and LST holders.

> Fortunately, if this were to happen, the Secure-Signer nodes on Puffer would be protected!

### 🐳 How are validator keys being managed in your system?

> The node generates and stores all validator keys in the [Secure-Signer enclave](secure-signer.md#where-is-it-run).

### 🐠 Wasn't SGX hacked before? Why would you use it?

> Since breaking SGX is of great interest in academia, there is a back-and-forth between white hat hackers finding exploits and Intel patches.

> It is essential that Puffer relies on SGX as a **strict security enhancement**. Honest nodes are completely protected against all slashable offenses. However, should a nefarious node manage to break SGX, all that they would learn is knowledge of their validator private key. Knowledge of one's validator private key is the status quo for _all_ existing staking operations and does not provide the node with any way to steal from the protocol.

### 🐊 Why don't other permissionless pools reduce their bond requirement to 1 ETH?

> Reducing the bond requirement [increases node and staker risk](slash.md#liquid-staking-protocol-considerations) which Puffer mitigates through [Secure-Signer](secure-signer.md#what-is-it) and [Guardian support](./guardians.md). Also as the bond requirement decreases, the threat of "rug-pooling" increases, which Puffer's [Validator Tickets](/protocol/validator-tickets#why--noop-incentives) address.

### 🪸 How hard is it to get access to SGX?

> Running Secure-Signer doesn't require anything expensive or technical, like purchasing and running an ASIC. Instead, Secure-Signer is software that runs on compatible Intel CPUs that support SGX. Many cloud providers (e.g., Microsoft Azure) readily supply SGX-enabled servers for cheap that are compatible with Secure-Signer. Additionally, Intel SGX-enabled XEON servers with the specs to run a validator can be purchased to be run at home. Community members have even had [success running Secure-Signer on Intel NUCs](https://mirror.xyz/ladislaus.eth/joTqwZ1sBLxlJayV4pIYxCkwl4RWheM_xipU_OCp9MM)!
