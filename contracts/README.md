# @dfdao/contracts

This package contains deployed contract addresses, ABIs, and Typechain types
for the Dark Forest game.

## Installation

You can install this package using [`npm`](https://www.npmjs.com) or
[`yarn`](https://classic.yarnpkg.com/lang/en/) by running:

```bash
npm install --save @darkforest_eth/contracts
```

```bash
yarn add @darkforest_eth/contracts
```

When using this in a plugin, you might want to load it with [skypack](https://www.skypack.dev)

```js
import * as contracts from 'http://cdn.skypack.dev/@darkforest_eth/contracts';
```

## Typechain

The Typechain types can be found in the `typechain` directory.

## ABIs

The contract ABIs can be found in the `abis` directory.

## Table of contents

### Variables

- [CONTRACT_ADDRESS](undefined)
- [FAUCET_ADDRESS](undefined)
- [INIT_ADDRESS](undefined)
- [LIB_ARTIFACT_UTILS_ADDRESS](undefined)
- [LIB_GAME_UTILS_ADDRESS](undefined)
- [LIB_PLANET_ADDRESS](undefined)
- [NETWORK](undefined)
- [NETWORK_ID](undefined)
- [START_BLOCK](undefined)
- [VERIFIER_ADDRESS](undefined)

## Variables

### CONTRACT_ADDRESS

• **CONTRACT_ADDRESS**: "0xf4597e9dCF55dC0fb7c3C36a7D56c39568582aC2" = `'0xf4597e9dCF55dC0fb7c3C36a7D56c39568582aC2'`

The address for the DarkForest contract.

---

### FAUCET_ADDRESS

• **FAUCET_ADDRESS**: "0xEb1E97445A9E8042a5120ECE339aB70b07307edf" = `'0xEb1E97445A9E8042a5120ECE339aB70b07307edf'`

---

### INIT_ADDRESS

• **INIT_ADDRESS**: "0x523419D12bF3Ed7460B7cdE708c9C8953b95547D" = `'0x523419D12bF3Ed7460B7cdE708c9C8953b95547D'`

The address for the initalizer contract. Useful for lobbies.

---

### LIB_ARTIFACT_UTILS_ADDRESS

• **LIB_ARTIFACT_UTILS_ADDRESS**: "0x99123645dF64D7CD1a38FC7b9cD5092Ad32DB974" = `'0x99123645dF64D7CD1a38FC7b9cD5092Ad32DB974'`

The address for the LibArtifacts library. Useful for lobbies.

---

### LIB_GAME_UTILS_ADDRESS

• **LIB_GAME_UTILS_ADDRESS**: "0x3A63Ff08bA39C4e940e0B5043bcE279E4d248890" = `'0x3A63Ff08bA39C4e940e0B5043bcE279E4d248890'`

The address for the LibGameUtils library. Useful for lobbies.

---

### LIB_PLANET_ADDRESS

• **LIB_PLANET_ADDRESS**: "0x4170639cD9Ab0494c4f4835b4B5d05320C8dc120" = `'0x4170639cD9Ab0494c4f4835b4B5d05320C8dc120'`

The address for the LibPlanet library. Useful for lobbies.

---

### NETWORK

• **NETWORK**: "gnosis_optimism" = `'gnosis_optimism'`

The name of the network where these contracts are deployed.

---

### NETWORK_ID

• **NETWORK_ID**: 300 = `300`

The id of the network where these contracts are deployed.

---

### START_BLOCK

• **START_BLOCK**: 1309111 = `1309111`

The block in which the DarkForest contract was initialized.

---

### VERIFIER_ADDRESS

• **VERIFIER_ADDRESS**: "0x885E92C27b15883498e7DbB7d6230fd562214fBF" = `'0x885E92C27b15883498e7DbB7d6230fd562214fBF'`

The address for the Verifier library. Useful for lobbies.
