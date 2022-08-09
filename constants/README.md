# @dfdao/constants

This package contains useful constants for use when interacting with
the Dark Forest smart contracts within JavaScript or TypeScript.

## Installation

You can install this package using [`npm`](https://www.npmjs.com) or
[`yarn`](https://classic.yarnpkg.com/lang/en/) by running:

```bash
npm install --save @dfdao/constants
```

```bash
yarn add @dfdao/constants
```

When using this in a plugin, you might want to load it with [skypack](https://www.skypack.dev)

```js
import * as constants from 'http://cdn.skypack.dev/@dfdao/constants';
```

## Table of contents

### Variables

- [BLOCK_EXPLORER_URL](undefined)
- [CONTRACT_PRECISION](undefined)
- [DEFAULT_GAS_PRICES](undefined)
- [DEFAULT_MAX_CALL_RETRIES](undefined)
- [EMPTY_ADDRESS](undefined)
- [EMPTY_ARTIFACT_ID](undefined)
- [EMPTY_LOCATION_ID](undefined)
- [GAS_PRICES_INTERVAL_MS](undefined)
- [GAS_PRICE_API](undefined)
- [GNOSIS_CHAIN_ID](undefined)
- [GNOSIS_OPTIMISM_CHAIN_ID](undefined)
- [HAT_SIZES](undefined)
- [KOVAN_OPTIMISM_CHAIN_ID](undefined)
- [LOCAL_OPTIMISM_CHAIN_ID](undefined)
- [LOCATION_ID_UB](undefined)
- [MAX_ARTIFACT_RARITY](undefined)
- [MAX_ARTIFACT_TYPE](undefined)
- [MAX_AUTO_GAS_PRICE_GWEI](undefined)
- [MAX_BIOME](undefined)
- [MAX_PLANET_LEVEL](undefined)
- [MAX_SPACESHIP_TYPE](undefined)
- [MIN_ARTIFACT_RARITY](undefined)
- [MIN_ARTIFACT_TYPE](undefined)
- [MIN_BIOME](undefined)
- [MIN_PLANET_LEVEL](undefined)
- [MIN_SPACESHIP_TYPE](undefined)
- [PLANET_CLAIM_MIN_LEVEL](undefined)
- [RECOMMENDED_MODAL_WIDTH](undefined)
- [SpecialKey](undefined)
- [THEGRAPH_API_URL](undefined)

## Variables

### BLOCK_EXPLORER_URL

• **BLOCK_EXPLORER_URL**: "https://blockscout.com/xdai/optimism/tx"

The URL to the block explorer for the chain being used. Prepended to transaction links, etc

---

### CONTRACT_PRECISION

• **CONTRACT_PRECISION**: 1000

The precision of Energy & Silver stored in the Dark Forest smart contracts.

Energy and Silver are not stored as floats in the smart contracts,
so any of those values coming from the contracts need to be divided by `CONTRACT_PRECISION`
and any values being sent to the contract need to be multiplied by `CONTRACT_PRECISION`.

---

### DEFAULT_GAS_PRICES

• **DEFAULT_GAS_PRICES**: GasPrices

In case we cannot load gas prices from xDai, these are the default auto gas prices.

---

### DEFAULT_MAX_CALL_RETRIES

• **DEFAULT_MAX_CALL_RETRIES**: 12

By default, the various {@link ContractCaller} will retry a blockchain read this many times.

---

### EMPTY_ADDRESS

• **EMPTY_ADDRESS**: EthAddress

The 0x0 Ethereum address, which is used for unowned planets, artifacts without an owner, etc.

---

### EMPTY_ARTIFACT_ID

• **EMPTY_ARTIFACT_ID**: ArtifactId

A blank ArtifactID (all zeros).

---

### EMPTY_LOCATION_ID

• **EMPTY_LOCATION_ID**: LocationId

A blank LocationID (all zeros).

---

### GAS_PRICES_INTERVAL_MS

• **GAS_PRICES_INTERVAL_MS**: 60000

The amount of time between gas price refreshes when fetching prices from the oracle.

---

### GAS_PRICE_API

• **GAS_PRICE_API**: "https://blockscout.com/xdai/mainnet/api/v1/gas-price-oracle"

The URL for xDai's API that returns the gas prices for 35th, 60th, and 90th percentiles of gas prices in the
previous 200 blocks. Useful for auto gas price setting.

https://www.xdaichain.com/for-developers/developer-resources/gas-price-oracle

---

### GNOSIS_CHAIN_ID

• **GNOSIS_CHAIN_ID**: 100

---

### GNOSIS_OPTIMISM_CHAIN_ID

• **GNOSIS_OPTIMISM_CHAIN_ID**: 300

---

### HAT_SIZES

• **HAT_SIZES**: string[]

---

### KOVAN_OPTIMISM_CHAIN_ID

• **KOVAN_OPTIMISM_CHAIN_ID**: 69

---

### LOCAL_OPTIMISM_CHAIN_ID

• **LOCAL_OPTIMISM_CHAIN_ID**: 17

---

### LOCATION_ID_UB

• **LOCATION_ID_UB**: BigInteger

The upper-bounds of a LocationID.

Represents the maximum possible value that the MiMC hash function (used for IDing locations in the universe) can output.
A LocationID must be less than `LOCATION_ID_UB / PLANET_RARITY` in order to be considered a valid planet.

---

### MAX_ARTIFACT_RARITY

• **MAX_ARTIFACT_RARITY**: ArtifactRarity = `ArtifactRarity.Mythic`

The value of the maximum, valid artifact rarity

---

### MAX_ARTIFACT_TYPE

• **MAX_ARTIFACT_TYPE**: ArtifactType = `ArtifactType.ShipTitan`

The value of the maximum, valid artifact type

---

### MAX_AUTO_GAS_PRICE_GWEI

• **MAX_AUTO_GAS_PRICE_GWEI**: 15

In case xDai's auto-price is something ridiculous, we don't want our players to insta run out of
money.

---

### MAX_BIOME

• **MAX_BIOME**: Biome = `Biome.CORRUPTED`

The value of the maximum, valid biome

---

### MAX_PLANET_LEVEL

• **MAX_PLANET_LEVEL**: PlanetLevel = `PlanetLevel.NINE`

The value of the maximum, valid planet level

---

### MAX_SPACESHIP_TYPE

• **MAX_SPACESHIP_TYPE**: ArtifactType = `ArtifactType.ShipTitan`

The value of the maximum, valid spaceship type

---

### MIN_ARTIFACT_RARITY

• **MIN_ARTIFACT_RARITY**: ArtifactRarity = `ArtifactRarity.Common`

The value of the minimum, valid artifact rarity

---

### MIN_ARTIFACT_TYPE

• **MIN_ARTIFACT_TYPE**: ArtifactType = `ArtifactType.Monolith`

The value of the minimum, valid artifact type

---

### MIN_BIOME

• **MIN_BIOME**: Biome = `Biome.OCEAN`

The value of the minimum, valid biome

---

### MIN_PLANET_LEVEL

• **MIN_PLANET_LEVEL**: PlanetLevel = `PlanetLevel.ZERO`

The value of the minimum, valid planet level

---

### MIN_SPACESHIP_TYPE

• **MIN_SPACESHIP_TYPE**: ArtifactType = `ArtifactType.ShipMothership`

The value of the minimum, valid spaceship type

---

### PLANET_CLAIM_MIN_LEVEL

• **PLANET_CLAIM_MIN_LEVEL**: 3

The minimum level required for claiming a planet.

---

### RECOMMENDED_MODAL_WIDTH

• **RECOMMENDED_MODAL_WIDTH**: "400px"

{@link PlanetContextPane} is this wide, and all the subpanes of that modal also try to stay this
size as well.

---

### SpecialKey

• **SpecialKey**: `Object`

Keys to handle in a special fashion when dealing with key presses

#### Type declaration

| Name      | Type      |
| :-------- | :-------- |
| `Control` | "Control" |
| `Escape`  | "Escape"  |
| `Shift`   | "Shift"   |
| `Space`   | " "       |
| `Tab`     | "Tab"     |

---

### THEGRAPH_API_URL

• **THEGRAPH_API_URL**: "https://graph-optimism.gnosischain.com/subgraphs/name/arena/test" = `'https://graph-optimism.gnosischain.com/subgraphs/name/arena/test'`

This should be updated every round.
