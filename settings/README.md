# @dfdao/settings

This package contains decoders and types for settings required
to prepare and deploy the Dark Forest smart contracts.

## Installation

You can install this package using [`npm`](https://www.npmjs.com) or
[`yarn`](https://classic.yarnpkg.com/lang/en/) by running:

```bash
npm install --save @dfdao/settings
```

```bash
yarn add @dfdao/settings
```

When using this in a plugin, you might want to load it with [skypack](https://www.skypack.dev)

```js
import * as settings from 'http://cdn.skypack.dev/@dfdao/settings';
```

## Table of contents

### Type aliases

- [AdminPlanets](undefined)
- [ArenaPlanets](undefined)
- [Contracts](undefined)
- [Initializers](undefined)

### Functions

- [decodeAdminPlanets](undefined)
- [decodeArenaPlanet](undefined)
- [decodeArenaPlanets](undefined)
- [decodeContracts](undefined)
- [decodeInitializers](undefined)

## Type aliases

### AdminPlanets

Ƭ **AdminPlanets**: ReturnType<typeof decodeAdminPlanets\>

---

### ArenaPlanets

Ƭ **ArenaPlanets**: ReturnType<typeof decodeArenaPlanets\>

---

### Contracts

Ƭ **Contracts**: ReturnType<typeof decodeContracts\>

---

### Initializers

Ƭ **Initializers**: ReturnType<typeof decodeInitializers\>

## Functions

### decodeAdminPlanets

▸ `Const` **decodeAdminPlanets**(`blob`): Object[]

#### Parameters

| Name   | Type    |
| :----- | :------ |
| `blob` | unknown |

#### Returns

Object[]

---

### decodeArenaPlanet

▸ `Const` **decodeArenaPlanet**(`blob`): DecodeResult<Object\>

#### Parameters

| Name   | Type    |
| :----- | :------ |
| `blob` | unknown |

#### Returns

DecodeResult<Object\>

---

### decodeArenaPlanets

▸ `Const` **decodeArenaPlanets**(`blob`): Object[]

#### Parameters

| Name   | Type    |
| :----- | :------ |
| `blob` | unknown |

#### Returns

Object[]

---

### decodeContracts

▸ `Const` **decodeContracts**(`blob`): Object

#### Parameters

| Name   | Type    |
| :----- | :------ |
| `blob` | unknown |

#### Returns

Object

| Name                         | Type                |
| :--------------------------- | :------------------ |
| `CONTRACT_ADDRESS`           | string              |
| `FAUCET_ADDRESS`             | undefined \| string |
| `INIT_ADDRESS`               | string              |
| `LIB_ARTIFACT_UTILS_ADDRESS` | undefined \| string |
| `LIB_GAME_UTILS_ADDRESS`     | undefined \| string |
| `LIB_PLANET_ADDRESS`         | undefined \| string |
| `NETWORK`                    | string              |
| `NETWORK_ID`                 | number              |
| `START_BLOCK`                | number              |
| `VERIFIER_ADDRESS`           | undefined \| string |

---

### decodeInitializers

▸ `Const` **decodeInitializers**(`blob`): Object

#### Parameters

| Name   | Type    |
| :----- | :------ |
| `blob` | unknown |

#### Returns

Object

| Name                                  | Type                                                                                                                                                                                                             |
| :------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ABANDON_RANGE_CHANGE_PERCENT`        | number                                                                                                                                                                                                           |
| `ABANDON_SPEED_CHANGE_PERCENT`        | number                                                                                                                                                                                                           |
| `ADMIN_CAN_ADD_PLANETS`               | boolean                                                                                                                                                                                                          |
| `ARTIFACT_POINT_VALUES`               | Tuple6<number\>                                                                                                                                                                                                  |
| `BIOMEBASE_KEY`                       | number                                                                                                                                                                                                           |
| `BIOME_THRESHOLD_1`                   | number                                                                                                                                                                                                           |
| `BIOME_THRESHOLD_2`                   | number                                                                                                                                                                                                           |
| `BLOCK_CAPTURE`                       | boolean                                                                                                                                                                                                          |
| `BLOCK_MOVES`                         | boolean                                                                                                                                                                                                          |
| `CAPTURE_ZONES_ENABLED`               | boolean                                                                                                                                                                                                          |
| `CAPTURE_ZONES_PER_5000_WORLD_RADIUS` | number                                                                                                                                                                                                           |
| `CAPTURE_ZONE_CHANGE_BLOCK_INTERVAL`  | number                                                                                                                                                                                                           |
| `CAPTURE_ZONE_COUNT`                  | number                                                                                                                                                                                                           |
| `CAPTURE_ZONE_HOLD_BLOCKS_REQUIRED`   | number                                                                                                                                                                                                           |
| `CAPTURE_ZONE_PLANET_LEVEL_SCORE`     | ExactArray10<number\>                                                                                                                                                                                            |
| `CAPTURE_ZONE_RADIUS`                 | number                                                                                                                                                                                                           |
| `CLAIM_VICTORY_ENERGY_PERCENT`        | number                                                                                                                                                                                                           |
| `CONFIRM_START`                       | boolean                                                                                                                                                                                                          |
| `DISABLE_ZK_CHECKS`                   | boolean                                                                                                                                                                                                          |
| `INIT_PERLIN_MAX`                     | number                                                                                                                                                                                                           |
| `INIT_PERLIN_MIN`                     | number                                                                                                                                                                                                           |
| `INIT_PLANETS`                        | ({ location: string; x: string; y: string; perlin: number; level: number; planetType: number; requireValidLocationId: boolean; isTargetPlanet: boolean; isSpawnPlanet: boolean; blockedPlanetIds: string[]; })[] |
| `LOCATION_REVEAL_COOLDOWN`            | number                                                                                                                                                                                                           |
| `MANUAL_SPAWN`                        | boolean                                                                                                                                                                                                          |
| `MAX_NATURAL_PLANET_LEVEL`            | number                                                                                                                                                                                                           |
| `MODIFIERS`                           | ExactArray8<number\>                                                                                                                                                                                             |
| `NO_ADMIN`                            | boolean                                                                                                                                                                                                          |
| `NUM_TEAMS`                           | number                                                                                                                                                                                                           |
| `PERLIN_LENGTH_SCALE`                 | number                                                                                                                                                                                                           |
| `PERLIN_MIRROR_X`                     | boolean                                                                                                                                                                                                          |
| `PERLIN_MIRROR_Y`                     | boolean                                                                                                                                                                                                          |
| `PERLIN_THRESHOLD_1`                  | number                                                                                                                                                                                                           |
| `PERLIN_THRESHOLD_2`                  | number                                                                                                                                                                                                           |
| `PERLIN_THRESHOLD_3`                  | number                                                                                                                                                                                                           |
| `PHOTOID_ACTIVATION_DELAY`            | number                                                                                                                                                                                                           |
| `PLANETHASH_KEY`                      | number                                                                                                                                                                                                           |
| `PLANET_LEVEL_JUNK`                   | ExactArray10<number\>                                                                                                                                                                                            |
| `PLANET_LEVEL_THRESHOLDS`             | ExactArray10<number\>                                                                                                                                                                                            |
| `PLANET_RARITY`                       | number                                                                                                                                                                                                           |
| `PLANET_TRANSFER_ENABLED`             | boolean                                                                                                                                                                                                          |
| `PLANET_TYPE_WEIGHTS`                 | PlanetTypeWeights                                                                                                                                                                                                |
| `RANDOM_ARTIFACTS`                    | boolean                                                                                                                                                                                                          |
| `RANKED`                              | boolean                                                                                                                                                                                                          |
| `SILVER_SCORE_VALUE`                  | number                                                                                                                                                                                                           |
| `SPACESHIPS`                          | ExactArray5<boolean\>                                                                                                                                                                                            |
| `SPACETYPE_KEY`                       | number                                                                                                                                                                                                           |
| `SPACE_JUNK_ENABLED`                  | boolean                                                                                                                                                                                                          |
| `SPACE_JUNK_LIMIT`                    | number                                                                                                                                                                                                           |
| `SPAWN_RIM_AREA`                      | number                                                                                                                                                                                                           |
| `START_PAUSED`                        | boolean                                                                                                                                                                                                          |
| `TARGETS_REQUIRED_FOR_VICTORY`        | number                                                                                                                                                                                                           |
| `TARGET_PLANETS`                      | boolean                                                                                                                                                                                                          |
| `TEAMS_ENABLED`                       | boolean                                                                                                                                                                                                          |
| `TIME_FACTOR_HUNDREDTHS`              | number                                                                                                                                                                                                           |
| `TOKEN_MINT_END_TIMESTAMP`            | number                                                                                                                                                                                                           |
| `WORLD_RADIUS_LOCKED`                 | boolean                                                                                                                                                                                                          |
| `WORLD_RADIUS_MIN`                    | number                                                                                                                                                                                                           |
