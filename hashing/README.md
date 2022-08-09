# @dfdao/hashing

This package contains MiMC hashing utilities for use with Dark Forest.
The MiMC algorithm is used for both finding planet hashes and calculating
the perlin in-game. Among other things, these values are often needed for
generating Snarks.

## Installation

You can install this package using [`npm`](https://www.npmjs.com) or
[`yarn`](https://classic.yarnpkg.com/lang/en/) by running:

```bash
npm install --save @dfdao/hashing
```

```bash
yarn add @dfdao/hashing
```

When using this in a plugin, you might want to load it with [skypack](https://www.skypack.dev)

```js
import * as hashing from 'http://cdn.skypack.dev/@dfdao/hashing';
```

## Table of contents

### Interfaces

- [IntegerVector](undefined)

### Variables

- [Fraction](undefined)
- [MAX_PERLIN_VALUE](undefined)

### Functions

- [getRandomGradientAt](undefined)
- [mimcHash](undefined)
- [mimcSponge](undefined)
- [modPBigInt](undefined)
- [modPBigIntNative](undefined)
- [perlin](undefined)
- [rand](undefined)
- [seededRandom](undefined)

## Interfaces

### IntegerVector

• **IntegerVector**: Interface IntegerVector

A object containing a pair of x,y coordinates.

## Variables

### Fraction

• **Fraction**: IFraction

---

### MAX_PERLIN_VALUE

• **MAX_PERLIN_VALUE**: 32 = `32`

## Functions

### getRandomGradientAt

▸ `Const` **getRandomGradientAt**(`point`, `scale`, `randFn`): Vector

#### Parameters

| Name     | Type      |
| :------- | :-------- |
| `point`  | Vector    |
| `scale`  | IFraction |
| `randFn` | HashFn    |

#### Returns

Vector

---

### mimcHash

▸ **mimcHash**(`key`): Function

The primary function used to build any MiMC hashing algorithm for Dark Forest.

#### Parameters

| Name  | Type   | Description                                                                                      |
| :---- | :----- | :----------------------------------------------------------------------------------------------- |
| `key` | number | The key for the MiMC algorithm. Will usually be PLANETHASH_KEY, SPACETYPE_KEY, or BIOMEBASE_KEY. |

#### Returns

Function

▸ (...`inputs`): BigInteger

##### Parameters

| Name        | Type     |
| :---------- | :------- |
| `...inputs` | number[] |

##### Returns

BigInteger

---

### mimcSponge

▸ **mimcSponge**(`inputs`, `nOutputs`, `rounds`, `key`): BigInteger[]

#### Parameters

| Name       | Type         |
| :--------- | :----------- |
| `inputs`   | BigInteger[] |
| `nOutputs` | number       |
| `rounds`   | number       |
| `key`      | number       |

#### Returns

BigInteger[]

---

### modPBigInt

▸ **modPBigInt**(`x`): BigInteger

Modulo a number with the LOCATION_ID_UB constant.
If the result is < 0, the LOCATION_ID_UB will then be added.

#### Parameters

| Name | Type   | Description                                 |
| :--- | :----- | :------------------------------------------ |
| `x`  | number | The number to modulo against LOCATION_ID_UB |

#### Returns

BigInteger

---

### modPBigIntNative

▸ **modPBigIntNative**(`x`): BigInteger

Modulo a BigInt with the LOCATION_ID_UB constant.
If the result is < 0, the LOCATION_ID_UB will then be added.

#### Parameters

| Name | Type       | Description                                 |
| :--- | :--------- | :------------------------------------------ |
| `x`  | BigInteger | The number to modulo against LOCATION_ID_UB |

#### Returns

BigInteger

---

### perlin

▸ **perlin**(`coords`, `options`): number

Calculates the perlin for a location, given the x,y pair and the PerlinConfig for the game.

#### Parameters

| Name      | Type          | Description                                                            |
| :-------- | :------------ | :--------------------------------------------------------------------- |
| `coords`  | IntegerVector | An object of the x,y coordinates for which perlin is being calculated. |
| `options` | PerlinConfig  | An object containing the configuration for the perlin algorithm.       |

#### Returns

number

---

### rand

▸ `Const` **rand**(`key`): Function

#### Parameters

| Name  | Type   |
| :---- | :----- |
| `key` | number |

#### Returns

Function

▸ (...`args`): number

##### Parameters

| Name      | Type     |
| :-------- | :------- |
| `...args` | number[] |

##### Returns

number

---

### seededRandom

▸ **seededRandom**(`seed`): number

Generate a random number based on some seed. Useful for procedural generation.

#### Parameters

| Name   | Type   | Description                    |
| :----- | :----- | :----------------------------- |
| `seed` | number | The seed of the random number. |

#### Returns

number
