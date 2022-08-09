# @dfdao/whitelist

This package contains utilities for working with DarkForest whitelist keys.

## Installation

You can install this package using [`npm`](https://www.npmjs.com) or
[`yarn`](https://classic.yarnpkg.com/lang/en/) by running:

```bash
npm install --save @dfdao/whitelist
```

```bash
yarn add @dfdao/whitelist
```

When using this in a plugin, you might want to load it with [skypack](https://www.skypack.dev)

```js
import * as whitelist from 'http://cdn.skypack.dev/@dfdao/whitelist';
```

## Table of contents

### Variables

- [keysPerTx](undefined)

### Functions

- [bigIntFromKey](undefined)
- [generateKey](undefined)
- [generateKeys](undefined)
- [keyHash](undefined)

## Variables

### keysPerTx

• `Const` **keysPerTx**: 400 = `400`

## Functions

### bigIntFromKey

▸ **bigIntFromKey**(`key`): BigInteger

#### Parameters

| Name  | Type   |
| :---- | :----- |
| `key` | string |

#### Returns

BigInteger

---

### generateKey

▸ **generateKey**(): string

#### Returns

string

---

### generateKeys

▸ **generateKeys**(`count`): string[]

#### Parameters

| Name    | Type   |
| :------ | :----- |
| `count` | number |

#### Returns

string[]

---

### keyHash

▸ **keyHash**(`key`): string

#### Parameters

| Name  | Type   |
| :---- | :----- |
| `key` | string |

#### Returns

string
