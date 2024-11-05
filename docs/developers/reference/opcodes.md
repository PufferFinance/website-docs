# Opcodes

Since UniFi is based on Taiko, it inherits the same opcode behaviour as Taiko. Unless listed below, all opcodes are supported in UniFi and are EVM equivalent. The execution of some Opcodes is not verified by the circuits and its not part of the validity proofs.

# Unsupported Opcodes

:::warning
If an unsupported opcode is encountered during execution that is not supported in UniFi, the transaction will revert.
:::
The following opcodes are not supported in UniFi:
| Opcode | Name | Solidity Equivalent |
|--------|-------------|---------------------|
| 49 | BLOBHASH | blobhash(index) |
| 4A | BLOBBASEFEE | block.blobasefee |
| 5C | TLOAD | tload(key) |
| 5D | TSTORE | tstore(key, value) |
| 5E | MCOPY | mcopy() |

# Modified Opcodes

| Opcode | Name      | Solidity Equivalent | Rollup Behaviour                             | Ethereum L1 Behaviour                |
|--------|-----------|---------------------|----------------------------------------------|--------------------------------------|
| 41     | COINBASE  | block.coinbase      | Returns the address of the L2 block proposer | Gets the block’s beneficiary address |
| 42     | TIMESTAMP | block.timestamp     | Timestamp of the L2 block                    | Timestamp of the L1 block            |
| 43     | NUMBER    | block.number        | L2 block number                              | Gets the L1 block number             |
| 48     | BASEFEE   | block.basefee       | Returns the L2 base fee                      | Returns the base fee                 |
