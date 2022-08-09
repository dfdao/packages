# @dfdao/network

This package contains functions and classes useful for communicating with the blockchain.

## Installation

You can install this package using [`npm`](https://www.npmjs.com) or
[`yarn`](https://classic.yarnpkg.com/lang/en/) by running:

```bash
npm install --save @dfdao/network
```

```bash
yarn add @dfdao/network
```

When using this in a plugin, you might want to load it with [skypack](https://www.skypack.dev)

```js
import * as network from 'http://cdn.skypack.dev/@dfdao/network';
```

## Table of contents

### Classes

- [ContractCaller](undefined)
- [EthConnection](undefined)
- [ThrottledConcurrentQueue](undefined)
- [TxCollection](undefined)
- [TxExecutor](undefined)

### Interfaces

- [ConcurrentQueueConfiguration](undefined)
- [Queue](undefined)

### Type aliases

- [AfterTransaction](undefined)
- [BeforeQueued](undefined)
- [BeforeTransaction](undefined)
- [ContractLoader](undefined)
- [GasPriceSettingProvider](undefined)
- [RetryErrorHandler](undefined)

### Functions

- [aggregateBulkGetter](undefined)
- [assertProperlySigned](undefined)
- [callWithRetry](undefined)
- [createContract](undefined)
- [createEthConnection](undefined)
- [ethToWei](undefined)
- [getAutoGasPrices](undefined)
- [getGasSettingGwei](undefined)
- [gweiToWei](undefined)
- [isPurchase](undefined)
- [makeProvider](undefined)
- [neverResolves](undefined)
- [verifySignature](undefined)
- [waitForTransaction](undefined)
- [weiToEth](undefined)
- [weiToGwei](undefined)

## Classes

### ContractCaller

• **ContractCaller**: Class ContractCaller

Instead of allowing the game to call `view` functions on the blockchain directly, all contract
calls should go through this class. Its purpose is to throttle the calls to a reasonable rate,
and to gracefully handle errors and retries

---

### EthConnection

• **EthConnection**: Class EthConnection

Responsible for

1. loading the contracts
2. connecting to the network

---

### ThrottledConcurrentQueue

• **ThrottledConcurrentQueue**: Class ThrottledConcurrentQueue<U\>

A queue that executes promises with a max throughput, and optionally max
concurrency.

#### Type parameters

| Name | Type    |
| :--- | :------ |
| `U`  | unknown |

---

### TxCollection

• **TxCollection**: Class TxCollection

Default implementation of a transaction collection - provides a simple api for adding, removing,
and querying by type of transaction.

---

### TxExecutor

• **TxExecutor**: Class TxExecutor

## Interfaces

### ConcurrentQueueConfiguration

• **ConcurrentQueueConfiguration**: Interface ConcurrentQueueConfiguration

---

### Queue

• **Queue**: Interface Queue

Let's keep things flexible by keeping this type small.

## Type aliases

### AfterTransaction

Ƭ **AfterTransaction**: Function

#### Type declaration

▸ (`transactionRequest`, `performanceMetrics`): Promise<void\>

{@link TxExecutor} calls this after executing a transaction.

##### Parameters

| Name                 | Type        |
| :------------------- | :---------- |
| `transactionRequest` | Transaction |
| `performanceMetrics` | unknown     |

##### Returns

Promise<void\>

---

### BeforeQueued

Ƭ **BeforeQueued**: Function

#### Type declaration

▸ (`id`, `intent`, `overrides?`): Promise<void\>

{@link TxExecutor} calls this before queueing a function to determine whether or not that
function should be queued. If this function rejects, a transaction is not queued.

##### Parameters

| Name         | Type                         |
| :----------- | :--------------------------- |
| `id`         | TransactionId                |
| `intent`     | TxIntent                     |
| `overrides?` | providers.TransactionRequest |

##### Returns

Promise<void\>

---

### BeforeTransaction

Ƭ **BeforeTransaction**: Function

#### Type declaration

▸ (`transactionRequest`): Promise<void\>

{@link TxExecutor} calls this before executing a function to determine whether or not that
function should execute. If this function rejects, the transaction is cancelled.

##### Parameters

| Name                 | Type        |
| :------------------- | :---------- |
| `transactionRequest` | Transaction |

##### Returns

Promise<void\>

---

### ContractLoader

Ƭ **ContractLoader**: Function

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends Contract |

#### Type declaration

▸ (`address`, `provider`, `signer?`): Promise<T\>

##### Parameters

| Name       | Type                      |
| :--------- | :------------------------ |
| `address`  | string                    |
| `provider` | providers.JsonRpcProvider |
| `signer?`  | Wallet                    |

##### Returns

Promise<T\>

---

### GasPriceSettingProvider

Ƭ **GasPriceSettingProvider**: Function

#### Type declaration

▸ (`transactionRequest`): AutoGasSetting \| string

Returns either a string that represents the gas price we should use by default for transactions,
or a string that represents the fact that we should be using one of the automatic gas prices.

##### Parameters

| Name                 | Type        |
| :------------------- | :---------- |
| `transactionRequest` | Transaction |

##### Returns

AutoGasSetting \| string

---

### RetryErrorHandler

Ƭ **RetryErrorHandler**: Function

#### Type declaration

▸ (`i`, `e`): void

##### Parameters

| Name | Type   |
| :--- | :----- |
| `i`  | number |
| `e`  | Error  |

##### Returns

void

## Functions

### aggregateBulkGetter

▸ `Const` **aggregateBulkGetter**<`T`\>(`total`, `querySize`, `getterFn`, `onProgress?`, `offset?`): Promise<T[]\>

A useful utility function that breaks up the proverbial number line (defined by {@code total} and
{@code querySize}), and calls {@code getterFn} for each of the sections on the number line.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name          | Type     | Default value | Description                                                                                                             |
| :------------ | :------- | :------------ | :---------------------------------------------------------------------------------------------------------------------- |
| `total`       | number   | `undefined`   | the total amount of of items to get                                                                                     |
| `querySize`   | number   | `undefined`   | the chunk size                                                                                                          |
| `getterFn`    | Function | `undefined`   | a function that fetches something, given a start index and end index                                                    |
| `onProgress?` | Function | `undefined`   | whenever a chunk is loaded, this function is called with the fraction of individual items that have been loaded so far. |
| `offset`      | number   | `0`           | the index to start fetching, can be used to skip previously fetched elements.                                           |

#### Returns

Promise<T[]\>

a list of each of the individual items that were loaded.

---

### assertProperlySigned

▸ **assertProperlySigned**(`message`): void

Ensures that the given message was properly signed.

#### Parameters

| Name      | Type                    |
| :-------- | :---------------------- |
| `message` | SignedMessage<unknown\> |

#### Returns

void

---

### callWithRetry

▸ `Const` **callWithRetry**<`T`\>(`fn`, `args?`, `onError?`, `maxRetries?`, `retryInterval?`): Promise<T\>

Calls the given function, retrying it if there is an error.

**`todo`** Get rid of this, and make use of {@link ContractCaller}.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name            | Type              | Default value              |
| :-------------- | :---------------- | :------------------------- |
| `fn`            | Function          | `undefined`                |
| `args`          | any[]             | `[]`                       |
| `onError?`      | RetryErrorHandler | `undefined`                |
| `maxRetries`    | 12                | `DEFAULT_MAX_CALL_RETRIES` |
| `retryInterval` | number            | `1000`                     |

#### Returns

Promise<T\>

---

### createContract

▸ **createContract**<`C`\>(`contractAddress`, `contractABI`, `provider`, `signer?`): C

#### Type parameters

| Name | Type                 |
| :--- | :------------------- |
| `C`  | extends Contract<C\> |

#### Parameters

| Name              | Type              | Description                                        |
| :---------------- | :---------------- | :------------------------------------------------- |
| `contractAddress` | string            | the address of the contract you want to connect to |
| `contractABI`     | ContractInterface | a javacript object representing the ABI            |
| `provider`        | JsonRpcProvider   | -                                                  |
| `signer?`         | Wallet            | -                                                  |

#### Returns

C

---

### createEthConnection

▸ **createEthConnection**(`rpcUrl`): Promise<EthConnection\>

#### Parameters

| Name     | Type   |
| :------- | :----- |
| `rpcUrl` | string |

#### Returns

Promise<EthConnection\>

---

### ethToWei

▸ **ethToWei**(`eth`): BigNumber

Returns the given amount of eth in wei as a big integer.

#### Parameters

| Name  | Type   |
| :---- | :----- |
| `eth` | number |

#### Returns

BigNumber

---

### getAutoGasPrices

▸ **getAutoGasPrices**(): Promise<GasPrices\>

Gets the current gas prices from xDai's price oracle. If the oracle is broken, return some sane
defaults.

#### Returns

Promise<GasPrices\>

---

### getGasSettingGwei

▸ **getGasSettingGwei**(`setting`, `gasPrices`): number \| undefined

Given the user's auto gas setting, and the current set of gas prices on the network, returns the
preferred gas price. If an invalid {@link AutoGasSetting} is provided, then returns undefined.

#### Parameters

| Name        | Type           |
| :---------- | :------------- |
| `setting`   | AutoGasSetting |
| `gasPrices` | GasPrices      |

#### Returns

number \| undefined

---

### gweiToWei

▸ **gweiToWei**(`gwei`): BigNumber

Returns the given amount of gwei in wei as a big integer.

#### Parameters

| Name   | Type   |
| :----- | :----- |
| `gwei` | number |

#### Returns

BigNumber

---

### isPurchase

▸ **isPurchase**(`tx?`): boolean

Whether or not some value is being transferred in this transaction.

#### Parameters

| Name  | Type               |
| :---- | :----------------- |
| `tx?` | TransactionRequest |

#### Returns

boolean

---

### makeProvider

▸ **makeProvider**(`rpcUrl`): providers.JsonRpcProvider

Creates a new {@link JsonRpcProvider}, and makes sure that it's connected to xDai if we're in
production.

#### Parameters

| Name     | Type   |
| :------- | :----- |
| `rpcUrl` | string |

#### Returns

providers.JsonRpcProvider

---

### neverResolves

▸ **neverResolves**(): Promise<void\>

A function that just never resolves.s

#### Returns

Promise<void\>

---

### verifySignature

▸ **verifySignature**(`message`, `signature`, `addr`): boolean

Returns whether or not the given message was signed by the given address.

#### Parameters

| Name        | Type                    |
| :---------- | :---------------------- |
| `message`   | string                  |
| `signature` | string                  |
| `addr`      | undefined \| EthAddress |

#### Returns

boolean

---

### waitForTransaction

▸ **waitForTransaction**(`provider`, `txHash`): Promise<providers.TransactionReceipt\>

Given a transaction hash and a JsonRpcProvider, waits for the given transaction to complete.

#### Parameters

| Name       | Type            |
| :--------- | :-------------- |
| `provider` | JsonRpcProvider |
| `txHash`   | string          |

#### Returns

Promise<providers.TransactionReceipt\>

---

### weiToEth

▸ **weiToEth**(`wei`): number

Returns the given amount of wei in gwei as a number.

#### Parameters

| Name  | Type      |
| :---- | :-------- |
| `wei` | BigNumber |

#### Returns

number

---

### weiToGwei

▸ **weiToGwei**(`wei`): number

Returns the given amount of wei in gwei as a number.

#### Parameters

| Name  | Type      |
| :---- | :-------- |
| `wei` | BigNumber |

#### Returns

number
