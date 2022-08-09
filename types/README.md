# @dfdao/types

This package contains commonly-used data types in the Dark Forest webclient,
also accessible in node.js server environments.

## Installation

You can install this package using [`npm`](https://www.npmjs.com) or
[`yarn`](https://classic.yarnpkg.com/lang/en/) by running:

```bash
npm install --save @dfdao/types
```

```bash
yarn add @dfdao/types
```

When using this in a plugin, you might want to load it with [skypack](https://www.skypack.dev)

```js
import * as types from 'http://cdn.skypack.dev/@dfdao/types';
```

## Table of contents

### Classes

- [DFAnimation](undefined)
- [DFStatefulAnimation](undefined)

### Interfaces

- [ArenaLeaderboard](undefined)
- [ArenaLeaderboardEntry](undefined)
- [ArrivalWithTimer](undefined)
- [AsteroidRendererType](undefined)
- [BackgroundRendererType](undefined)
- [BaseRenderer](undefined)
- [BeltRendererType](undefined)
- [BlackDomainRendererType](undefined)
- [CanvasCoords](undefined)
- [CaptureZoneRendererType](undefined)
- [Chunk](undefined)
- [CircleRendererType](undefined)
- [DeleteMessagesRequest](undefined)
- [DiagnosticUpdater](undefined)
- [Diagnostics](undefined)
- [EmojiFlagBody](undefined)
- [ExtendedMatchEntry](undefined)
- [GameViewport](undefined)
- [GasPrices](undefined)
- [GraphArena](undefined)
- [GraphConfig](undefined)
- [GraphPlanet](undefined)
- [IRendererConfig](undefined)
- [Leaderboard](undefined)
- [LeaderboardEntry](undefined)
- [LineRendererType](undefined)
- [LiveMatch](undefined)
- [LiveMatchEntry](undefined)
- [MineBodyRendererType](undefined)
- [MineRendererType](undefined)
- [ModalPosition](undefined)
- [NetworkEvent](undefined)
- [PerlinConfig](undefined)
- [PerlinRendererType](undefined)
- [PersistedTransaction](undefined)
- [PlanetCosmeticInfo](undefined)
- [PlanetDefaults](undefined)
- [PlanetMessage](undefined)
- [PlanetMessageRequest](undefined)
- [PlanetMessageResponse](undefined)
- [PlanetRenderInfo](undefined)
- [PlanetRenderManagerType](undefined)
- [PlanetRendererType](undefined)
- [PostMessageRequest](undefined)
- [QuasarBodyRendererType](undefined)
- [QuasarRayRendererType](undefined)
- [QuasarRendererType](undefined)
- [QueuedArrival](undefined)
- [Radii](undefined)
- [RawAccount](undefined)
- [RectRendererType](undefined)
- [Rectangle](undefined)
- [RenderedArtifact](undefined)
- [RingRendererType](undefined)
- [RuinsRendererType](undefined)
- [SignedMessage](undefined)
- [SpaceRendererType](undefined)
- [SpacetimeRipRendererType](undefined)
- [SpriteRendererType](undefined)
- [TextRendererType](undefined)
- [Transaction](undefined)
- [TransactionCollection](undefined)
- [UIRendererType](undefined)
- [UnminedRendererType](undefined)
- [VoyageRendererType](undefined)
- [WormholeRendererType](undefined)

### Type aliases

- [Abstract](undefined)
- [AdminPlanet](undefined)
- [ArrivalType](undefined)
- [Artifact](undefined)
- [ArtifactId](undefined)
- [ArtifactPointValues](undefined)
- [ArtifactRarity](undefined)
- [ArtifactType](undefined)
- [AttribProps](undefined)
- [AttribType](undefined)
- [AutoGasSetting](undefined)
- [Biome](undefined)
- [BlocklistMap](undefined)
- [CaptureZone](undefined)
- [ClaimedCoords](undefined)
- [ClaimedLocation](undefined)
- [CursorState](undefined)
- [DrawMode](undefined)
- [EthAddress](undefined)
- [EthTxStatus](undefined)
- [ExactArray10](undefined)
- [ExactArray4](undefined)
- [ExactArray5](undefined)
- [ExactArray8](undefined)
- [HSLVec](undefined)
- [HatType](undefined)
- [LocatablePlanet](undefined)
- [LocationId](undefined)
- [ModalId](undefined)
- [ModalManagerEvent](undefined)
- [ModalName](undefined)
- [ModalPositions](undefined)
- [ModifierType](undefined)
- [NFTMetadata](undefined)
- [NetworkHealthSummary](undefined)
- [Planet](undefined)
- [PlanetBonus](undefined)
- [PlanetLevel](undefined)
- [PlanetMessageBody](undefined)
- [PlanetMessageType](undefined)
- [PlanetType](undefined)
- [Player](undefined)
- [PluginId](undefined)
- [RGBAVec](undefined)
- [RGBVec](undefined)
- [RegisterResponse](undefined)
- [RenderZIndex](undefined)
- [RendererProgram](undefined)
- [RendererType](undefined)
- [RevealedCoords](undefined)
- [RevealedLocation](undefined)
- [RuinsInfo](undefined)
- [Scaling](undefined)
- [Setting](undefined)
- [SpaceColorConfiguration](undefined)
- [SpaceType](undefined)
- [SpaceshipType](undefined)
- [TextAlign](undefined)
- [TextAnchor](undefined)
- [TooltipName](undefined)
- [TransactionId](undefined)
- [Translation](undefined)
- [Tuple6](undefined)
- [UniformJSType](undefined)
- [UniformProps](undefined)
- [UniformType](undefined)
- [Upgrade](undefined)
- [UpgradeBranchName](undefined)
- [UpgradeBranches](undefined)
- [UpgradeLevels](undefined)
- [UpgradeState](undefined)
- [Vec3](undefined)
- [VoyageId](undefined)
- [WhitelistStatusResponse](undefined)
- [WorldCoords](undefined)
- [WorldLocation](undefined)
- [Wormhole](undefined)

### Variables

- [ArrivalType](undefined)
- [ArtifactRarity](undefined)
- [ArtifactRarityNames](undefined)
- [ArtifactType](undefined)
- [ArtifactTypeNames](undefined)
- [AttribType](undefined)
- [AutoGasSetting](undefined)
- [Biome](undefined)
- [BiomeNames](undefined)
- [CursorState](undefined)
- [DrawMode](undefined)
- [HatType](undefined)
- [ModalManagerEvent](undefined)
- [ModalName](undefined)
- [ModifierType](undefined)
- [ModifierTypeNames](undefined)
- [PlanetLevel](undefined)
- [PlanetLevelNames](undefined)
- [PlanetMessageType](undefined)
- [PlanetType](undefined)
- [PlanetTypeNames](undefined)
- [RenderZIndex](undefined)
- [RendererType](undefined)
- [Setting](undefined)
- [SpaceType](undefined)
- [SpaceTypeNames](undefined)
- [SpaceshipType](undefined)
- [SpaceshipTypeDesc](undefined)
- [SpaceshipTypeNames](undefined)
- [TextAlign](undefined)
- [TextAnchor](undefined)
- [TooltipName](undefined)
- [UniformType](undefined)
- [UpgradeBranchName](undefined)

### Functions

- [array6](undefined)
- [artifactNameFromArtifact](undefined)
- [between](undefined)
- [exactArray10](undefined)
- [exactArray4](undefined)
- [exactArray5](undefined)
- [exactArray8](undefined)
- [withDefault](undefined)

## Classes

### DFAnimation

• **DFAnimation**: Class DFAnimation

---

### DFStatefulAnimation

• **DFStatefulAnimation**: Class DFStatefulAnimation<T\>

#### Type parameters

| Name |
| :--- |
| `T`  |

## Interfaces

### ArenaLeaderboard

• **ArenaLeaderboard**: Interface ArenaLeaderboard

---

### ArenaLeaderboardEntry

• **ArenaLeaderboardEntry**: Interface ArenaLeaderboardEntry

---

### ArrivalWithTimer

• **ArrivalWithTimer**: Interface ArrivalWithTimer

Convenience type for storing a voyage and a reference to a timeout that is triggered on voyage
arrival (in case the timeout needs to be cancelled).

---

### AsteroidRendererType

• **AsteroidRendererType**: Interface AsteroidRendererType

---

### BackgroundRendererType

• **BackgroundRendererType**: Interface BackgroundRendererType

---

### BaseRenderer

• **BaseRenderer**: Interface BaseRenderer

The purpose of this interface is for type checking
It make sures that the variable is a type of renderer

---

### BeltRendererType

• **BeltRendererType**: Interface BeltRendererType

---

### BlackDomainRendererType

• **BlackDomainRendererType**: Interface BlackDomainRendererType

---

### CanvasCoords

• **CanvasCoords**: Interface CanvasCoords

---

### CaptureZoneRendererType

• **CaptureZoneRendererType**: Interface CaptureZoneRendererType

---

### Chunk

• **Chunk**: Interface Chunk

Represents a fully mined aligned square.

---

### CircleRendererType

• **CircleRendererType**: Interface CircleRendererType

---

### DeleteMessagesRequest

• **DeleteMessagesRequest**: Interface DeleteMessagesRequest

Asks the webserver to delete some messages.

---

### DiagnosticUpdater

• **DiagnosticUpdater**: Interface DiagnosticUpdater

Various parts of our codebase need to be able to self-report diagnostics. To enable them to do
so, you must provide them with an object that conforms to this interface. Currently, the only
implementation of this function is `GameManager`. However, in the future, we might want to stream
a sample of these diagnostic updates to our backend, so that we can analyze performance, catch
bugs, etc.

---

### Diagnostics

• **Diagnostics**: Interface Diagnostics

---

### EmojiFlagBody

• **EmojiFlagBody**: Interface EmojiFlagBody

Owners of planets can post emojis on the planet.

---

### ExtendedMatchEntry

• **ExtendedMatchEntry**: Interface ExtendedMatchEntry

---

### GameViewport

• **GameViewport**: Interface GameViewport

---

### GasPrices

• **GasPrices**: Interface GasPrices

These are measured in gwei.

---

### GraphArena

• **GraphArena**: Interface GraphArena

---

### GraphConfig

• **GraphConfig**: Interface GraphConfig

---

### GraphPlanet

• **GraphPlanet**: Interface GraphPlanet

---

### IRendererConfig

• **IRendererConfig**: Interface IRendererConfig

---

### Leaderboard

• **Leaderboard**: Interface Leaderboard

---

### LeaderboardEntry

• **LeaderboardEntry**: Interface LeaderboardEntry

---

### LineRendererType

• **LineRendererType**: Interface LineRendererType

---

### LiveMatch

• **LiveMatch**: Interface LiveMatch

---

### LiveMatchEntry

• **LiveMatchEntry**: Interface LiveMatchEntry

---

### MineBodyRendererType

• **MineBodyRendererType**: Interface MineBodyRendererType

---

### MineRendererType

• **MineRendererType**: Interface MineRendererType

---

### ModalPosition

• **ModalPosition**: Interface ModalPosition

Contains metadata on modals in the game. Meant to store coordinates and state. Is
uniquely identified by a ModalId, which typically either the modalId of a given modal pane, or
plugin id.

---

### NetworkEvent

• **NetworkEvent**: Interface NetworkEvent

Each time a transaction either reverts or confirms we send an event to the webserver with this
diagnostic info about the transaction, so that we can analyze the performance of the network in
aggregate across our player-base.

---

### PerlinConfig

• **PerlinConfig**: Interface PerlinConfig

Various configuration used for calculating perlin.
Always make sure these values match the contracts you are working with
or else your transactions **will** be reverted.

---

### PerlinRendererType

• **PerlinRendererType**: Interface PerlinRendererType

Perlin Renderer is only used when disable fancy space effects is true

---

### PersistedTransaction

• **PersistedTransaction**: Interface PersistedTransaction<T\>

#### Type parameters

| Name | Type                                |
| :--- | :---------------------------------- |
| `T`  | extends TxIntent \| unknownTxIntent |

---

### PlanetCosmeticInfo

• **PlanetCosmeticInfo**: Interface PlanetCosmeticInfo

---

### PlanetDefaults

• **PlanetDefaults**: Interface PlanetDefaults

A structure with default stats of planets in nebula at corresponding levels. For
example, silverCap[4] refers to the default silver capacity of a level 4
planet in nebula with no modifiers.

---

### PlanetMessage

• **PlanetMessage**: Interface PlanetMessage<T\>

We can save these to and retrieve these from the database.

#### Type parameters

| Name | Type                      |
| :--- | :------------------------ |
| `T`  | extends PlanetMessageBody |

---

### PlanetMessageRequest

• **PlanetMessageRequest**: Interface PlanetMessageRequest

Asks the webserver to get all the the messages posted to some set of planets.

---

### PlanetMessageResponse

• **PlanetMessageResponse**: Interface PlanetMessageResponse

Contains the answer to the above question.

---

### PlanetRenderInfo

• **PlanetRenderInfo**: Interface PlanetRenderInfo

---

### PlanetRenderManagerType

• **PlanetRenderManagerType**: Interface PlanetRenderManagerType

---

### PlanetRendererType

• **PlanetRendererType**: Interface PlanetRendererType

---

### PostMessageRequest

• **PostMessageRequest**: Interface PostMessageRequest<T\>

Asks the webserver to post an emoji to a particular planet.

#### Type parameters

| Name | Type                      |
| :--- | :------------------------ |
| `T`  | extends PlanetMessageBody |

---

### QuasarBodyRendererType

• **QuasarBodyRendererType**: Interface QuasarBodyRendererType

---

### QuasarRayRendererType

• **QuasarRayRendererType**: Interface QuasarRayRendererType

---

### QuasarRendererType

• **QuasarRendererType**: Interface QuasarRendererType

---

### QueuedArrival

• **QueuedArrival**: Interface QueuedArrival

Represents a voyage.

---

### Radii

• **Radii**: Interface Radii

---

### RawAccount

• **RawAccount**: Interface RawAccount

---

### RectRendererType

• **RectRendererType**: Interface RectRendererType

---

### Rectangle

• **Rectangle**: Interface Rectangle

Ok, this is gonna sound weird, but all rectangles are squares. Also, we only permit side lengths
that are powers of two, and ALSO!! The side lengths must be between {@link MIN_CHUNK_SIZE} and
{@link MAX_CHUNK_SIZE}.

---

### RenderedArtifact

• **RenderedArtifact**: Interface RenderedArtifact

---

### RingRendererType

• **RingRendererType**: Interface RingRendererType

---

### RuinsRendererType

• **RuinsRendererType**: Interface RuinsRendererType

---

### SignedMessage

• **SignedMessage**: Interface SignedMessage<T\>

A signed message contains some sort of message, as well as its signature and the address that
claims to have signed this message.

#### Type parameters

| Name |
| :--- |
| `T`  |

---

### SpaceRendererType

• **SpaceRendererType**: Interface SpaceRendererType

---

### SpacetimeRipRendererType

• **SpacetimeRipRendererType**: Interface SpacetimeRipRendererType

---

### SpriteRendererType

• **SpriteRendererType**: Interface SpriteRendererType

---

### TextRendererType

• **TextRendererType**: Interface TextRendererType

---

### Transaction

• **Transaction**: Interface Transaction<T\>

Represents a transaction that the game would like to submit to the blockchain.

#### Type parameters

| Name | Type                     |
| :--- | :----------------------- |
| `T`  | extends TxIntentTxIntent |

---

### TransactionCollection

• **TransactionCollection**: Interface TransactionCollection

---

### UIRendererType

• **UIRendererType**: Interface UIRendererType

---

### UnminedRendererType

• **UnminedRendererType**: Interface UnminedRendererType

---

### VoyageRendererType

• **VoyageRendererType**: Interface VoyageRendererType

---

### WormholeRendererType

• **WormholeRendererType**: Interface WormholeRendererType

## Type aliases

### Abstract

Ƭ **Abstract**: Type & Tagged<Token\>

An abstract type used to differentiate between common types, like `number` or `string`.
The `Token` type parameter is the key to vary upon and should be unique unless being used to subtype.

#### Type parameters

| Name    | Type    |
| :------ | :------ |
| `Type`  | `Type`  |
| `Token` | unknown |

---

### AdminPlanet

Ƭ **AdminPlanet**: `Object`

#### Type declaration

| Name                     | Type    |
| :----------------------- | :------ |
| `isSpawnPlanet`          | boolean |
| `isTargetPlanet`         | boolean |
| `level`                  | number  |
| `planetType`             | number  |
| `requireValidLocationId` | boolean |
| `revealLocation`         | boolean |
| `x`                      | number  |
| `y`                      | number  |

---

### ArrivalType

Ƭ **ArrivalType**: Abstract<number, "ArrivalType"\>

Abstract type representing an arrival type.

---

### Artifact

Ƭ **Artifact**: `Object`

Represents data associated with a Dark Forest artifact NFT. Note
that some `Artifact` fields store client-specific data that the blockchain is
not aware of, such as `unconfirmedDepositArtifact` (tracks pending
depositArtifact transaction that involves this artifact). If you're using a
client that can't send transactions, these fields should be ignored.

#### Type declaration

| Name                 | Type                  |
| :------------------- | :-------------------- |
| `activations`        | number                |
| `artifactType`       | ArtifactType          |
| `controller`         | EthAddress            |
| `currentOwner`       | EthAddress            |
| `discoverer`         | EthAddress            |
| `id`                 | ArtifactId            |
| `isInititalized`     | boolean               |
| `lastActivated`      | number                |
| `lastDeactivated`    | number                |
| `mintedAtTimestamp`  | number                |
| `onPlanetId?`        | LocationId            |
| `onVoyageId?`        | VoyageId              |
| `planetBiome`        | Biome                 |
| `planetDiscoveredOn` | LocationId            |
| `rarity`             | ArtifactRarity        |
| `timeDelayedUpgrade` | Upgrade               |
| `transactions?`      | TransactionCollection |
| `upgrade`            | Upgrade               |
| `wormholeTo?`        | LocationId            |

---

### ArtifactId

Ƭ **ArtifactId**: Abstract<string, "ArtifactId"\>

A unique identifier for a Dark Forest NFT artifact. This is a 64-character
lowercase hex string not prefixed with 0x. ArtifactIDs should only be
instantiated through ArtifactIDs should only be instantiated through
`artifactIdFromHexStr`, `artifactIdFromDecStr`, and `artifactIdFromEthersBN`
in `serde`.

---

### ArtifactPointValues

Ƭ **ArtifactPointValues**: Object

mapping from ArtifactRarity to points earned for finding this artifact.

#### Index signature

▪ [ArtifactRarity: number]: number

---

### ArtifactRarity

Ƭ **ArtifactRarity**: Abstract<number, "ArtifactRarity"\>

Abstract type representing an artifact rarity level.

---

### ArtifactType

Ƭ **ArtifactType**: Abstract<number, "ArtifactType"\>

Abstract type representing an artifact type.

---

### AttribProps

Ƭ **AttribProps**: `Object`

#### Type declaration

| Name        | Type       |
| :---------- | :--------- |
| `dim`       | number     |
| `name`      | string     |
| `normalize` | boolean    |
| `type`      | AttribType |

---

### AttribType

Ƭ **AttribType**: Abstract<number, "AttribType"\>

---

### AutoGasSetting

Ƭ **AutoGasSetting**: Abstract<string, "AutoGasSetting"\>

The user can choose to have the client automatically choose a gas price for their transactions,
depending on how much they are willing to pay and how fast they want their transactions to confirm.

---

### Biome

Ƭ **Biome**: Abstract<number, "Biome"\>

Abstract type representing a biome.

---

### BlocklistMap

Ƭ **BlocklistMap**: Map<LocationId, Map<LocationId, boolean\>\>

Blocks move from one planet to another

---

### CaptureZone

Ƭ **CaptureZone**: `Object`

#### Type declaration

| Name     | Type        |
| :------- | :---------- |
| `coords` | WorldCoords |
| `radius` | number      |

---

### ClaimedCoords

Ƭ **ClaimedCoords**: WorldCoords & Object

Represents a planet location that has been broadcast on-chain

---

### ClaimedLocation

Ƭ **ClaimedLocation**: WorldLocation & Object

---

### CursorState

Ƭ **CursorState**: Abstract<string, "CursorState"\>

---

### DrawMode

Ƭ **DrawMode**: Abstract<number, "DrawMode"\>

---

### EthAddress

Ƭ **EthAddress**: Abstract<string, "EthAddress"\>

This is expected to be a 40-character, lowercase hex string, prefixed with 0x
(so 42 characters in total). EthAddress should only ever be instantiated
through the `address` function in `serde`.

---

### EthTxStatus

Ƭ **EthTxStatus**: "Init" \| "Processing" \| "Prioritized" \| "Submit" \| "Confirm" \| "Fail" \| "Cancel"

---

### ExactArray10

Ƭ **ExactArray10**: [A, A, A, A, A, A, A, A, A, A]

#### Type parameters

| Name |
| :--- |
| `A`  |

---

### ExactArray4

Ƭ **ExactArray4**: [A, A, A, A]

#### Type parameters

| Name |
| :--- |
| `A`  |

---

### ExactArray5

Ƭ **ExactArray5**: [A, A, A, A, A]

#### Type parameters

| Name |
| :--- |
| `A`  |

---

### ExactArray8

Ƭ **ExactArray8**: [A, A, A, A, A, A, A, A]

#### Type parameters

| Name |
| :--- |
| `A`  |

---

### HSLVec

Ƭ **HSLVec**: readonly [number, number, number]

---

### HatType

Ƭ **HatType**: Abstract<string, "HatType"\>

---

### LocatablePlanet

Ƭ **LocatablePlanet**: Planet & Object

A planet whose coordinates are known to the client.

---

### LocationId

Ƭ **LocationId**: Abstract<string, "LocationId"\>

a unique identifier for a location in the universe (corresponding to some
underlying coordinates (x, y)). This is a 64-character lowercase hex string
not prefixed with 0x. LocationIDs should only be instantiated through
`locationIdFromHexStr`, `locationIdFromDecStr`, `locationIdFromBigInt`, and
`locationIdFromEthersBN` in `serde`.

---

### ModalId

Ƭ **ModalId**: ModalName \| PluginId

Modals can either be built into the game, or spawned by a plugin.

---

### ModalManagerEvent

Ƭ **ModalManagerEvent**: Abstract<string, "ModalManagerEvent"\>

---

### ModalName

Ƭ **ModalName**: Abstract<string, "ModalName"\>

Modals built into the game have a human-readable name.

---

### ModalPositions

Ƭ **ModalPositions**: Map<ModalId, ModalPosition\>

---

### ModifierType

Ƭ **ModifierType**: Abstract<number, "ModifierType"\>

---

### NFTMetadata

Ƭ **NFTMetadata**: `Object`

#### Type declaration

| Name          | Type           |
| :------------ | :------------- |
| `attributes`  | NFTAttribute[] |
| `description` | string         |
| `image`       | string         |
| `name`        | string         |

---

### NetworkHealthSummary

Ƭ **NetworkHealthSummary**: [AutoGasSetting, number][]

On the server we keep track of how fast each auto gas setting confirms in practice.

---

### Planet

Ƭ **Planet**: `Object`

Represents a Dark Forest planet object (planets, asteroid fields, quasars,
spacetime rips, and foundries). Note that some `Planet` fields (1) store
client-specific data that the blockchain is not aware of, such as
`unconfirmedDepartures` (tracks pending moves originating at this planet that
have been submitted to the blockchain from a client), or (2) store derived
data that is calculated separately client-side, such as `silverSpent` and
`bonus`. So this object does not cleanly map to any single object in the
DarkForest contract (or even any collection of objects).

#### Type declaration

| Name                      | Type                         |
| :------------------------ | :--------------------------- |
| `blockedPlanetIds`        | LocationId[]                 |
| `bonus`                   | PlanetBonus                  |
| `capturer?`               | EthAddress                   |
| `claimer?`                | EthAddress                   |
| `coordsRevealed`          | boolean                      |
| `defense`                 | number                       |
| `destroyed`               | boolean                      |
| `emojiBobAnimation?`      | DFAnimation                  |
| `emojiZoopAnimation?`     | DFAnimation                  |
| `emojiZoopOutAnimation?`  | DFStatefulAnimation<string\> |
| `energy`                  | number                       |
| `energyCap`               | number                       |
| `energyGrowth`            | number                       |
| `hasTriedFindingArtifact` | boolean                      |
| `hatLevel`                | number                       |
| `heldArtifactIds`         | ArtifactId[]                 |
| `invadeStartBlock?`       | number                       |
| `invader?`                | EthAddress                   |
| `isHomePlanet`            | boolean                      |
| `isInContract`            | boolean                      |
| `isSpawnPlanet`           | boolean                      |
| `isTargetPlanet`          | boolean                      |
| `lastLoadedServerState?`  | number                       |
| `lastUpdated`             | number                       |
| `loadingServerState`      | boolean                      |
| `localPhotoidUpgrade?`    | Upgrade                      |
| `locationId`              | LocationId                   |
| `messages?`               | PlanetMessage<unknown\>[]    |
| `needsServerRefresh`      | boolean                      |
| `owner`                   | EthAddress                   |
| `pausers`                 | number                       |
| `perlin`                  | number                       |
| `planetLevel`             | PlanetLevel                  |
| `planetType`              | PlanetType                   |
| `prospectedBlockNumber?`  | number                       |
| `range`                   | number                       |
| `revealer?`               | EthAddress                   |
| `silver`                  | number                       |
| `silverCap`               | number                       |
| `silverGrowth`            | number                       |
| `silverSpent`             | number                       |
| `spaceJunk`               | number                       |
| `spaceType`               | SpaceType                    |
| `speed`                   | number                       |
| `syncedWithContract`      | boolean                      |
| `transactions?`           | TransactionCollection        |
| `unconfirmedAddEmoji`     | boolean                      |
| `unconfirmedClearEmoji`   | boolean                      |
| `upgradeState`            | UpgradeState                 |

---

### PlanetBonus

Ƭ **PlanetBonus**: [boolean, boolean, boolean, boolean, boolean, boolean]

A list of five flags, indicating whether the planet has an attached comet
doubling each of five stats: (in order) [energyCap, energyGrowth, range,
speed, defense]

---

### PlanetLevel

Ƭ **PlanetLevel**: Abstract<number, "PlanetLevel"\>

Abstract type representing a planet level.

---

### PlanetMessageBody

Ƭ **PlanetMessageBody**: EmojiFlagBody \| unknown

Thinking about future message types.

---

### PlanetMessageType

Ƭ **PlanetMessageType**: Abstract<string, "PlanetMessageType"\>

Abstract type representing a type of planet message.

---

### PlanetType

Ƭ **PlanetType**: Abstract<number, "PlanetType"\>

Abstract type representing a planet type.

---

### Player

Ƭ **Player**: `Object`

Represents a player; corresponds fairly closely with the analogous contract
struct

#### Type declaration

| Name                  | Type       | Description          |
| :-------------------- | :--------- | :------------------- |
| `address`             | EthAddress | -                    |
| `claimedShips`        | boolean    | -                    |
| `homePlanetId`        | LocationId | -                    |
| `initTimestamp`       | number     | seconds (not millis) |
| `lastClaimTimestamp`  | number     | -                    |
| `lastRevealTimestamp` | number     | seconds (not millis) |
| `moves`               | number     | -                    |
| `ready`               | boolean    | -                    |
| `score`               | number     | -                    |
| `spaceJunk`           | number     | -                    |
| `spaceJunkLimit`      | number     | -                    |
| `team`                | number     | -                    |
| `twitter?`            | string     | -                    |

---

### PluginId

Ƭ **PluginId**: Abstract<string, "PluginId"\>

---

### RGBAVec

Ƭ **RGBAVec**: [number, number, number, number]

---

### RGBVec

Ƭ **RGBVec**: [number, number, number]

---

### RegisterResponse

Ƭ **RegisterResponse**: `Object`

#### Type declaration

| Name         | Type    |
| :----------- | :------ |
| `error?`     | string  |
| `inProgress` | boolean |
| `success?`   | boolean |

---

### RenderZIndex

Ƭ **RenderZIndex**: Abstract<number, "RenderZIndex"\>

---

### RendererProgram

Ƭ **RendererProgram**: `Object`

#### Type declaration

| Name             | Type   |
| :--------------- | :----- |
| `attribs`        | Object |
| `fragmentShader` | string |
| `uniforms`       | Object |
| `vertexShader`   | string |

---

### RendererType

Ƭ **RendererType**: Abstract<number, "RendererType"\>

Enum for determining the type of renderer
Each renderer should contain a variable called 'rendererType'
'rendererType' should be a enum that corresponds with the type of renderer it is

---

### RevealedCoords

Ƭ **RevealedCoords**: WorldCoords & Object

Represents a planet location that has been broadcast on-chain

---

### RevealedLocation

Ƭ **RevealedLocation**: WorldLocation & Object

---

### RuinsInfo

Ƭ **RuinsInfo**: Object

#### Index signature

▪ [PlanetLevel: number]: Object

---

### Scaling

Ƭ **Scaling**: `Object`

#### Type declaration

| Name | Type   |
| :--- | :----- |
| `x`  | number |
| `y`  | number |

---

### Setting

Ƭ **Setting**: Abstract<string, "Setting"\>

---

### SpaceColorConfiguration

Ƭ **SpaceColorConfiguration**: `Object`

#### Type declaration

| Name                | Type   |
| :------------------ | :----- |
| `deadSpaceColor?`   | string |
| `deepSpaceColor?`   | string |
| `innerNebulaColor?` | string |
| `nebulaColor?`      | string |
| `spaceColor?`       | string |

---

### SpaceType

Ƭ **SpaceType**: Abstract<number, "SpaceType"\>

Abstract type representing a type of space.

---

### SpaceshipType

Ƭ **SpaceshipType**: Abstract<number, "SpaceshipType"\>

---

### TextAlign

Ƭ **TextAlign**: Abstract<number, "TextAlign"\>

---

### TextAnchor

Ƭ **TextAnchor**: Abstract<number, "TextAnchor"\>

---

### TooltipName

Ƭ **TooltipName**: Abstract<string, "TooltipName"\>

---

### TransactionId

Ƭ **TransactionId**: number

A unique incrementing number that identifies a transaction.

---

### Translation

Ƭ **Translation**: `Object`

#### Type declaration

| Name | Type   |
| :--- | :----- |
| `x`  | number |
| `y`  | number |

---

### Tuple6

Ƭ **Tuple6**: [A, A, A, A, A, A]

#### Type parameters

| Name |
| :--- |
| `A`  |

---

### UniformJSType

Ƭ **UniformJSType**: mat4 \| mat3 \| number \| Vec3

---

### UniformProps

Ƭ **UniformProps**: `Object`

#### Type declaration

| Name   | Type        |
| :----- | :---------- |
| `name` | string      |
| `type` | UniformType |

---

### UniformType

Ƭ **UniformType**: Abstract<number, "UniformType"\>

---

### Upgrade

Ƭ **Upgrade**: `Object`

The effects of an upgrade on the stats of a planet. Both upgrades purchased
for silver as well as artifacts of certain types can modify stats of a
planet.

#### Type declaration

| Name                  | Type   |
| :-------------------- | :----- |
| `defMultiplier`       | number |
| `energyCapMultiplier` | number |
| `energyGroMultiplier` | number |
| `rangeMultiplier`     | number |
| `speedMultiplier`     | number |

---

### UpgradeBranchName

Ƭ **UpgradeBranchName**: Abstract<number, "UpgradeBranchName"\>

Abstract type representing an upgrade branch.

---

### UpgradeBranches

Ƭ **UpgradeBranches**: [UpgradeLevels, UpgradeLevels, UpgradeLevels]

Stores the stat effects of upgrades of all three branches: defense, range,
speed.

---

### UpgradeLevels

Ƭ **UpgradeLevels**: [Upgrade, Upgrade, Upgrade, Upgrade]

On a single upgrade branch, the stat effects of the four upgrades.

---

### UpgradeState

Ƭ **UpgradeState**: [number, number, number]

How many times a planet has been upgraded along each of the three branches:
defense, range, and speed

---

### Vec3

Ƭ **Vec3**: [number, number, number]

---

### VoyageId

Ƭ **VoyageId**: Abstract<string, "VoyageId"\>

a voyage UID. these start at 1 and auto-increment in the contract. this is
immutable and the only place a VoyageId should ever be created is on
initial deserialization of a QueuedArrival from contract data (see `serde`)

---

### WhitelistStatusResponse

Ƭ **WhitelistStatusResponse**: `Object`

#### Type declaration

| Name          | Type    | Description                                                        |
| :------------ | :------ | :----------------------------------------------------------------- |
| `failedAt?`   | string  | Failure timestamp.                                                 |
| `position?`   | string  | The address' position in the queue.                                |
| `txHash?`     | string  | If successful, the hash of the whitelist registration transaction. |
| `whitelisted` | boolean | -                                                                  |

---

### WorldCoords

Ƭ **WorldCoords**: `Object`

Represents the coordinates of a location in the world.

#### Type declaration

| Name | Type   |
| :--- | :----- |
| `x`  | number |
| `y`  | number |

---

### WorldLocation

Ƭ **WorldLocation**: `Object`

A location in the world with relevant properties: the location's ID
(deterministically generated from its coords), the spacetype perlin value at
these coordinates, and the biomebase perlin value at these coordinates
(combined with spacetype to derive the biome here)

#### Type declaration

| Name        | Type        |
| :---------- | :---------- |
| `biomebase` | number      |
| `coords`    | WorldCoords |
| `hash`      | LocationId  |
| `perlin`    | number      |

---

### Wormhole

Ƭ **Wormhole**: `Object`

#### Type declaration

| Name   | Type       |
| :----- | :--------- |
| `from` | LocationId |
| `to`   | LocationId |

## Variables

### ArrivalType

• **ArrivalType**: `Object`

Enumeration of arrival types.

#### Type declaration

| Name       | Type        |
| :--------- | :---------- |
| `Normal`   | ArrivalType |
| `Photoid`  | ArrivalType |
| `Unknown`  | ArrivalType |
| `Wormhole` | ArrivalType |

---

### ArtifactRarity

• **ArtifactRarity**: `Object`

Enumeration of artifact rarity levels. Common = 1, Mythic = 5

#### Type declaration

| Name        | Type           |
| :---------- | :------------- |
| `Common`    | ArtifactRarity |
| `Epic`      | ArtifactRarity |
| `Legendary` | ArtifactRarity |
| `Mythic`    | ArtifactRarity |
| `Rare`      | ArtifactRarity |
| `Unknown`   | ArtifactRarity |

---

### ArtifactRarityNames

• `Const` **ArtifactRarityNames**: Object

Mapping from ArtifactRarity to pretty-printed names.

---

### ArtifactType

• **ArtifactType**: `Object`

Enumeration of artifact types.

#### Type declaration

| Name              | Type         |
| :---------------- | :----------- |
| `BlackDomain`     | ArtifactType |
| `BloomFilter`     | ArtifactType |
| `Colossus`        | ArtifactType |
| `Monolith`        | ArtifactType |
| `PhotoidCannon`   | ArtifactType |
| `PlanetaryShield` | ArtifactType |
| `Pyramid`         | ArtifactType |
| `ShipCrescent`    | ArtifactType |
| `ShipGear`        | ArtifactType |
| `ShipMothership`  | ArtifactType |
| `ShipTitan`       | ArtifactType |
| `ShipWhale`       | ArtifactType |
| `Spaceship`       | ArtifactType |
| `Unknown`         | ArtifactType |
| `Wormhole`        | ArtifactType |

---

### ArtifactTypeNames

• `Const` **ArtifactTypeNames**: Object

Mapping from ArtifactType to pretty-printed names.

---

### AttribType

• **AttribType**: `Object`

#### Type declaration

| Name    | Type       |
| :------ | :--------- |
| `Float` | AttribType |
| `UByte` | AttribType |

---

### AutoGasSetting

• **AutoGasSetting**: `Object`

#### Type declaration

| Name      | Type           |
| :-------- | :------------- |
| `Average` | AutoGasSetting |
| `Fast`    | AutoGasSetting |
| `Slow`    | AutoGasSetting |

---

### Biome

• **Biome**: `Object`

Enumeration of the biomes in the game. OCEAN = 1, CORRUPTED = 10

#### Type declaration

| Name        | Type  |
| :---------- | :---- |
| `CORRUPTED` | Biome |
| `DESERT`    | Biome |
| `FOREST`    | Biome |
| `GRASSLAND` | Biome |
| `ICE`       | Biome |
| `LAVA`      | Biome |
| `OCEAN`     | Biome |
| `SWAMP`     | Biome |
| `TUNDRA`    | Biome |
| `UNKNOWN`   | Biome |
| `WASTELAND` | Biome |

---

### BiomeNames

• `Const` **BiomeNames**: Object

Mapping from Biome to pretty-printed names.

---

### CursorState

• **CursorState**: `Object`

#### Type declaration

| Name                | Type        |
| :------------------ | :---------- |
| `Normal`            | CursorState |
| `TargetingExplorer` | CursorState |
| `TargetingForces`   | CursorState |

---

### DrawMode

• **DrawMode**: `Object`

#### Type declaration

| Name        | Type     |
| :---------- | :------- |
| `Lines`     | DrawMode |
| `Points`    | DrawMode |
| `Triangles` | DrawMode |

---

### HatType

• **HatType**: `Object`

#### Type declaration

| Name            | Type    |
| :-------------- | :------ |
| `ChefHat`       | HatType |
| `CowboyHat`     | HatType |
| `Fez`           | HatType |
| `Fish`          | HatType |
| `GraduationCap` | HatType |
| `PartyHat`      | HatType |
| `PopeHat`       | HatType |
| `SantaHat`      | HatType |
| `Squid`         | HatType |
| `TopHat`        | HatType |

---

### ModalManagerEvent

• **ModalManagerEvent**: `Object`

#### Type declaration

| Name                 | Type   |
| :------------------- | :----- |
| `MiningCoordsUpdate` | string |
| `StateChanged`       | string |

---

### ModalName

• **ModalName**: `Object`

#### Type declaration

| Name                   | Type      |
| :--------------------- | :-------- |
| `ArtifactConversation` | ModalName |
| `ArtifactDetails`      | ModalName |
| `Broadcast`            | ModalName |
| `Diagnostics`          | ModalName |
| `Hats`                 | ModalName |
| `Help`                 | ModalName |
| `Leaderboard`          | ModalName |
| `ManageAccount`        | ModalName |
| `ManageArtifacts`      | ModalName |
| `MapShare`             | ModalName |
| `Onboarding`           | ModalName |
| `PlanetContextPane`    | ModalName |
| `PlanetDetails`        | ModalName |
| `PlanetDex`            | ModalName |
| `PluginEditor`         | ModalName |
| `PluginWarning`        | ModalName |
| `Plugins`              | ModalName |
| `Private`              | ModalName |
| `Settings`             | ModalName |
| `Survey`               | ModalName |
| `TransactionLog`       | ModalName |
| `TwitterVerify`        | ModalName |
| `UpgradeDetails`       | ModalName |
| `WaitingRoom`          | ModalName |
| `WithdrawSilver`       | ModalName |
| `YourArtifacts`        | ModalName |

---

### ModifierType

• **ModifierType**: `Object`

Enumeration of artifact rarity levels. Common = 1, Mythic = 5

# popCap, popGrowth, silverCap, silverGrowth, range, speed, defense

#### Type declaration

| Name               | Type         |
| :----------------- | :----------- |
| `Defense`          | ModifierType |
| `Pirates`          | ModifierType |
| `PopulationCap`    | ModifierType |
| `PopulationGrowth` | ModifierType |
| `Range`            | ModifierType |
| `SilverCap`        | ModifierType |
| `SilverGrowth`     | ModifierType |
| `Speed`            | ModifierType |

---

### ModifierTypeNames

• `Const` **ModifierTypeNames**: Object

Mapping from ArtifactRarity to pretty-printed names.

---

### PlanetLevel

• **PlanetLevel**: `Object`

Enumeration of the possible planet levels.

#### Type declaration

| Name    | Type        |
| :------ | :---------- |
| `EIGHT` | PlanetLevel |
| `FIVE`  | PlanetLevel |
| `FOUR`  | PlanetLevel |
| `NINE`  | PlanetLevel |
| `ONE`   | PlanetLevel |
| `SEVEN` | PlanetLevel |
| `SIX`   | PlanetLevel |
| `THREE` | PlanetLevel |
| `TWO`   | PlanetLevel |
| `ZERO`  | PlanetLevel |

---

### PlanetLevelNames

• `Const` **PlanetLevelNames**: Object

Mapping from PlanetLevel to pretty-printed names.

---

### PlanetMessageType

• **PlanetMessageType**: `Object`

Each message type has a corresponding entry here.

#### Type declaration

| Name        | Type              |
| :---------- | :---------------- |
| `EmojiFlag` | PlanetMessageType |

---

### PlanetType

• **PlanetType**: `Object`

Enumeration of the planet types. (PLANET = 0, SILVER_BANK = 4)

#### Type declaration

| Name           | Type       |
| :------------- | :--------- |
| `PLANET`       | PlanetType |
| `RUINS`        | PlanetType |
| `SILVER_BANK`  | PlanetType |
| `SILVER_MINE`  | PlanetType |
| `TRADING_POST` | PlanetType |

---

### PlanetTypeNames

• `Const` **PlanetTypeNames**: Object

Mapping from PlanetType to pretty-printed names.

---

### RenderZIndex

• **RenderZIndex**: `Object`

#### Type declaration

| Name         | Type         |
| :----------- | :----------- |
| `Background` | RenderZIndex |
| `DEFAULT`    | RenderZIndex |
| `MAX`        | RenderZIndex |
| `Planets`    | RenderZIndex |
| `Text`       | RenderZIndex |
| `UI`         | RenderZIndex |
| `Voyages`    | RenderZIndex |

---

### RendererType

• **RendererType**: `Object`

#### Type declaration

| Name            | Type         |
| :-------------- | :----------- |
| `Asteroid`      | RendererType |
| `Background`    | RendererType |
| `Belt`          | RendererType |
| `BlackDomain`   | RendererType |
| `CaptureZone`   | RendererType |
| `Circle`        | RendererType |
| `Line`          | RendererType |
| `Mine`          | RendererType |
| `MineBody`      | RendererType |
| `Perlin`        | RendererType |
| `Planet`        | RendererType |
| `PlanetManager` | RendererType |
| `Quasar`        | RendererType |
| `QuasarBody`    | RendererType |
| `QuasarRay`     | RendererType |
| `Rect`          | RendererType |
| `Ring`          | RendererType |
| `Ruins`         | RendererType |
| `Space`         | RendererType |
| `SpacetimeRip`  | RendererType |
| `Sprite`        | RendererType |
| `Text`          | RendererType |
| `UI`            | RendererType |
| `Unmined`       | RendererType |
| `Voyager`       | RendererType |
| `Wormhole`      | RendererType |

---

### Setting

• **Setting**: `Object`

Each setting has a unique identifier. Each account gets to store its own local storage setting,
per instance of the dark forest contract that it's connected to.

#### Type declaration

| Name                                         | Type    |
| :------------------------------------------- | :------ |
| `AutoApproveNonPurchaseTransactions`         | Setting |
| `AutoClearConfirmedTransactionsAfterSeconds` | Setting |
| `AutoClearRejectedTransactionsAfterSeconds`  | Setting |
| `DisableDefaultShortcuts`                    | Setting |
| `DisableEmojiRendering`                      | Setting |
| `DisableFancySpaceEffect`                    | Setting |
| `DisableHatRendering`                        | Setting |
| `DrawChunkBorders`                           | Setting |
| `ExperimentalFeatures`                       | Setting |
| `ForceReloadEmbeddedPlugins`                 | Setting |
| `FoundArtifact`                              | Setting |
| `FoundComet`                                 | Setting |
| `FoundDeepSpace`                             | Setting |
| `FoundPirates`                               | Setting |
| `FoundSilver`                                | Setting |
| `FoundSilverBank`                            | Setting |
| `FoundSpace`                                 | Setting |
| `FoundTradingPost`                           | Setting |
| `GasFeeGwei`                                 | Setting |
| `HasAcceptedPluginRisk`                      | Setting |
| `HighPerformanceRendering`                   | Setting |
| `IsMining`                                   | Setting |
| `MiningCores`                                | Setting |
| `MoveNotifications`                          | Setting |
| `NewPlayer`                                  | Setting |
| `OptOutMetrics`                              | Setting |
| `RendererColorDeadSpace`                     | Setting |
| `RendererColorDeepSpace`                     | Setting |
| `RendererColorInnerNebula`                   | Setting |
| `RendererColorNebula`                        | Setting |
| `RendererColorSpace`                         | Setting |
| `TerminalVisible`                            | Setting |
| `TutorialCompleted`                          | Setting |
| `TutorialOpen`                               | Setting |

---

### SpaceType

• **SpaceType**: `Object`

Enumeration of the types of space in the game. NEBULA = 0, DEAD_SPACE = 3

#### Type declaration

| Name         | Type      |
| :----------- | :-------- |
| `DEAD_SPACE` | SpaceType |
| `DEEP_SPACE` | SpaceType |
| `NEBULA`     | SpaceType |
| `SPACE`      | SpaceType |

---

### SpaceTypeNames

• `Const` **SpaceTypeNames**: Object

Mapping from SpaceType to pretty-printed names.

---

### SpaceshipType

• **SpaceshipType**: `Object`

Enumeration of spaceships

#### Type declaration

| Name         | Type          |
| :----------- | :------------ |
| `Crescent`   | SpaceshipType |
| `Gear`       | SpaceshipType |
| `Mothership` | SpaceshipType |
| `Titan`      | SpaceshipType |
| `Whale`      | SpaceshipType |

---

### SpaceshipTypeDesc

• `Const` **SpaceshipTypeDesc**: Object

Mapping from Spaceships to pretty-printed descriptions.

---

### SpaceshipTypeNames

• `Const` **SpaceshipTypeNames**: Object

Mapping from Spaceships to pretty-printed names.

---

### TextAlign

• **TextAlign**: `Object`

#### Type declaration

| Name     | Type      |
| :------- | :-------- |
| `Center` | TextAlign |
| `Left`   | TextAlign |
| `Right`  | TextAlign |

---

### TextAnchor

• **TextAnchor**: `Object`

#### Type declaration

| Name     | Type       |
| :------- | :--------- |
| `Bottom` | TextAnchor |
| `Middle` | TextAnchor |
| `Top`    | TextAnchor |

---

### TooltipName

• **TooltipName**: `Object`

#### Type declaration

| Name                          | Type        | Description                                                                                                                                       |
| :---------------------------- | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Abandon`                     | TooltipName | -                                                                                                                                                 |
| `ActivateArtifact`            | TooltipName | -                                                                                                                                                 |
| `ArtifactBuff`                | TooltipName | -                                                                                                                                                 |
| `ArtifactStored`              | TooltipName | -                                                                                                                                                 |
| `Blocked`                     | TooltipName | -                                                                                                                                                 |
| `Bonus`                       | TooltipName | -                                                                                                                                                 |
| `BonusDefense`                | TooltipName | -                                                                                                                                                 |
| `BonusEnergyCap`              | TooltipName | -                                                                                                                                                 |
| `BonusEnergyGro`              | TooltipName | -                                                                                                                                                 |
| `BonusRange`                  | TooltipName | -                                                                                                                                                 |
| `BonusSpaceJunk`              | TooltipName | -                                                                                                                                                 |
| `BonusSpeed`                  | TooltipName | -                                                                                                                                                 |
| `CancelTransaction`           | TooltipName | -                                                                                                                                                 |
| `Capturable`                  | TooltipName | -                                                                                                                                                 |
| `Clowntown`                   | TooltipName | -                                                                                                                                                 |
| `CurrentMining`               | TooltipName | -                                                                                                                                                 |
| `DeactivateArtifact`          | TooltipName | -                                                                                                                                                 |
| `Defense`                     | TooltipName | -                                                                                                                                                 |
| `DefenseMultiplier`           | TooltipName | -                                                                                                                                                 |
| `DepositArtifact`             | TooltipName | -                                                                                                                                                 |
| `Empty`                       | TooltipName | So that you can render a tooltip without anything, and control its contents entirely via the {@link TooltipTriggerProps#extraContent} prop field. |
| `Energy`                      | TooltipName | -                                                                                                                                                 |
| `EnergyCapMultiplier`         | TooltipName | -                                                                                                                                                 |
| `EnergyGrowth`                | TooltipName | -                                                                                                                                                 |
| `EnergyGrowthMultiplier`      | TooltipName | -                                                                                                                                                 |
| `FindArtifact`                | TooltipName | -                                                                                                                                                 |
| `HashesPerSec`                | TooltipName | -                                                                                                                                                 |
| `HoverPlanet`                 | TooltipName | -                                                                                                                                                 |
| `Invadable`                   | TooltipName | -                                                                                                                                                 |
| `MaxLevel`                    | TooltipName | -                                                                                                                                                 |
| `MinEnergy`                   | TooltipName | -                                                                                                                                                 |
| `MiningPause`                 | TooltipName | -                                                                                                                                                 |
| `MiningTarget`                | TooltipName | -                                                                                                                                                 |
| `ModalFindArtifact`           | TooltipName | -                                                                                                                                                 |
| `ModalHats`                   | TooltipName | -                                                                                                                                                 |
| `ModalHelp`                   | TooltipName | -                                                                                                                                                 |
| `ModalLeaderboard`            | TooltipName | -                                                                                                                                                 |
| `ModalPlanetDetails`          | TooltipName | -                                                                                                                                                 |
| `ModalPlanetDex`              | TooltipName | -                                                                                                                                                 |
| `ModalPlugins`                | TooltipName | -                                                                                                                                                 |
| `ModalSettings`               | TooltipName | -                                                                                                                                                 |
| `ModalTwitterBroadcast`       | TooltipName | -                                                                                                                                                 |
| `ModalTwitterVerification`    | TooltipName | -                                                                                                                                                 |
| `ModalUpgradeDetails`         | TooltipName | -                                                                                                                                                 |
| `ModalWithdrawSilver`         | TooltipName | -                                                                                                                                                 |
| `ModalYourArtifacts`          | TooltipName | -                                                                                                                                                 |
| `NetworkHealth`               | TooltipName | -                                                                                                                                                 |
| `Pirates`                     | TooltipName | -                                                                                                                                                 |
| `PlanetRank`                  | TooltipName | -                                                                                                                                                 |
| `PrioritizeTransaction`       | TooltipName | -                                                                                                                                                 |
| `Range`                       | TooltipName | -                                                                                                                                                 |
| `RangeMultiplier`             | TooltipName | -                                                                                                                                                 |
| `Rank`                        | TooltipName | -                                                                                                                                                 |
| `RetryTransaction`            | TooltipName | -                                                                                                                                                 |
| `Score`                       | TooltipName | -                                                                                                                                                 |
| `SelectedSilver`              | TooltipName | -                                                                                                                                                 |
| `Silver`                      | TooltipName | -                                                                                                                                                 |
| `SilverCap`                   | TooltipName | -                                                                                                                                                 |
| `SilverGrowth`                | TooltipName | -                                                                                                                                                 |
| `SilverProd`                  | TooltipName | -                                                                                                                                                 |
| `SpaceJunk`                   | TooltipName | -                                                                                                                                                 |
| `SpawnPlanet`                 | TooltipName | -                                                                                                                                                 |
| `Speed`                       | TooltipName | -                                                                                                                                                 |
| `SpeedMultiplier`             | TooltipName | -                                                                                                                                                 |
| `TargetPlanet`                | TooltipName | -                                                                                                                                                 |
| `Time50`                      | TooltipName | -                                                                                                                                                 |
| `Time90`                      | TooltipName | -                                                                                                                                                 |
| `TimeUntilActivationPossible` | TooltipName | -                                                                                                                                                 |
| `TwitterHandle`               | TooltipName | -                                                                                                                                                 |
| `Upgrades`                    | TooltipName | -                                                                                                                                                 |
| `WithdrawArtifact`            | TooltipName | -                                                                                                                                                 |
| `WithdrawSilverButton`        | TooltipName | -                                                                                                                                                 |

---

### UniformType

• **UniformType**: `Object`

#### Type declaration

| Name      | Type        |
| :-------- | :---------- |
| `Float`   | UniformType |
| `Mat3`    | UniformType |
| `Mat4`    | UniformType |
| `Texture` | UniformType |
| `UByte`   | UniformType |
| `Vec3`    | UniformType |

---

### UpgradeBranchName

• **UpgradeBranchName**: `Object`

Enumeration of the three upgrade branches.

#### Type declaration

| Name      | Type              |
| :-------- | :---------------- |
| `Defense` | UpgradeBranchName |
| `Range`   | UpgradeBranchName |
| `Speed`   | UpgradeBranchName |

## Functions

### array6

▸ **array6**<`A`\>(`decoder`): Decoder<Tuple6<A\>, unknown\>

#### Type parameters

| Name |
| :--- |
| `A`  |

#### Parameters

| Name      | Type                 |
| :-------- | :------------------- |
| `decoder` | Decoder<A, unknown\> |

#### Returns

Decoder<Tuple6<A\>, unknown\>

---

### artifactNameFromArtifact

▸ **artifactNameFromArtifact**(`artifact`): string

Deterministically generates the name of the artifact from its ID.

#### Parameters

| Name       | Type     | Description                         |
| :--------- | :------- | :---------------------------------- |
| `artifact` | Artifact | The artifact to generate a name for |

#### Returns

string

---

### between

▸ **between**(`decoder`, `min`, `max`): Decoder<number, unknown\>

#### Parameters

| Name      | Type                      |
| :-------- | :------------------------ |
| `decoder` | Decoder<number, unknown\> |
| `min`     | number                    |
| `max`     | number                    |

#### Returns

Decoder<number, unknown\>

---

### exactArray10

▸ **exactArray10**<`A`\>(`decoder`): Decoder<ExactArray10<A\>, unknown\>

#### Type parameters

| Name |
| :--- |
| `A`  |

#### Parameters

| Name      | Type                 |
| :-------- | :------------------- |
| `decoder` | Decoder<A, unknown\> |

#### Returns

Decoder<ExactArray10<A\>, unknown\>

---

### exactArray4

▸ **exactArray4**<`A`\>(`decoder`): Decoder<ExactArray4<A\>, unknown\>

#### Type parameters

| Name |
| :--- |
| `A`  |

#### Parameters

| Name      | Type                 |
| :-------- | :------------------- |
| `decoder` | Decoder<A, unknown\> |

#### Returns

Decoder<ExactArray4<A\>, unknown\>

---

### exactArray5

▸ **exactArray5**<`A`\>(`decoder`): Decoder<ExactArray5<A\>, unknown\>

#### Type parameters

| Name |
| :--- |
| `A`  |

#### Parameters

| Name      | Type                 |
| :-------- | :------------------- |
| `decoder` | Decoder<A, unknown\> |

#### Returns

Decoder<ExactArray5<A\>, unknown\>

---

### exactArray8

▸ **exactArray8**<`A`\>(`decoder`): Decoder<ExactArray8<A\>, unknown\>

#### Type parameters

| Name |
| :--- |
| `A`  |

#### Parameters

| Name      | Type                 |
| :-------- | :------------------- |
| `decoder` | Decoder<A, unknown\> |

#### Returns

Decoder<ExactArray8<A\>, unknown\>

---

### withDefault

▸ **withDefault**<`A`\>(`decoder`, `def`): Decoder<A, unknown\>

#### Type parameters

| Name |
| :--- |
| `A`  |

#### Parameters

| Name      | Type                 |
| :-------- | :------------------- |
| `decoder` | Decoder<A, unknown\> |
| `def`     | A                    |

#### Returns

Decoder<A, unknown\>
