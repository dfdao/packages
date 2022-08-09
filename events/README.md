# @dfdao/events

This package contains a typed, single pub/sub pattern used in the Dark Forest game.
Inspired by https://www.npmjs.com/package/monomitter

## Installation

You can install this package using [`npm`](https://www.npmjs.com) or
[`yarn`](https://classic.yarnpkg.com/lang/en/) by running:

```bash
npm install --save @dfdao/events
```

```bash
yarn add @dfdao/events
```

When using this in a plugin, you might want to load it with [skypack](https://www.skypack.dev)

```js
import * as events from 'http://cdn.skypack.dev/@dfdao/events';
```

## Table of contents

### Type aliases

- [Callback](undefined)
- [Monomitter](undefined)
- [Subscription](undefined)

### Functions

- [monomitter](undefined)

## Type aliases

### Callback

Ƭ **Callback**: Function

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Type declaration

▸ (`data`): void

##### Parameters

| Name   | Type |
| :----- | :--- |
| `data` | T    |

##### Returns

void

---

### Monomitter

Ƭ **Monomitter**: `Object`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Type declaration

| Name        | Type             |
| :---------- | :--------------- |
| `clear`     | Method clear     |
| `publish`   | Method publish   |
| `subscribe` | Method subscribe |

---

### Subscription

Ƭ **Subscription**: `Object`

#### Type declaration

| Name          | Type               |
| :------------ | :----------------- |
| `unsubscribe` | Method unsubscribe |

## Functions

### monomitter

▸ **monomitter**<`T`\>(`emitLatestOnSubscribe?`): Monomitter<T\>

Constructs a new event emitter, whose purpose is to emit values of the given type.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name                    | Type    | Default value | Description                                                                                      |
| :---------------------- | :------ | :------------ | :----------------------------------------------------------------------------------------------- |
| `emitLatestOnSubscribe` | boolean | `false`       | if this is true, upon subscription immediately emit the most recently set value, if there is one |

#### Returns

Monomitter<T\>
