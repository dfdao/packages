# @dfdao/gamelogic

## Table of contents

### Type aliases

- [ArtifactFileColor](undefined)

### Variables

- [ArtifactFileColor](undefined)
- [RelicsList](undefined)

### Functions

- [artifactAvailableTimestamp](undefined)
- [artifactBiomeName](undefined)
- [artifactFileName](undefined)
- [artifactRoll](undefined)
- [biomeName](undefined)
- [canActivateArtifact](undefined)
- [canDepositArtifact](undefined)
- [canWithdrawArtifact](undefined)
- [dateMintedAt](undefined)
- [durationUntilArtifactAvailable](undefined)
- [formatNumber](undefined)
- [getActivatedArtifact](undefined)
- [getActiveBlackDomain](undefined)
- [getArtifactDebugName](undefined)
- [getPlanetRank](undefined)
- [getPlayerControlledSpaceships](undefined)
- [getRange](undefined)
- [hasOwner](undefined)
- [hasStatBoost](undefined)
- [isActivated](undefined)
- [isAncient](undefined)
- [isBasic](undefined)
- [isEmojiFlagMessage](undefined)
- [isLocatable](undefined)
- [isRelic](undefined)
- [isSpaceShip](undefined)
- [isSpawnPlanet](undefined)
- [isTargetPlanet](undefined)
- [levelFromRarity](undefined)
- [rarityName](undefined)
- [rarityNameFromArtifact](undefined)
- [setForceAncient](undefined)
- [timeUntilNextBroadcastAvailable](undefined)

## Type aliases

### ArtifactFileColor

Ƭ **ArtifactFileColor**: Abstract<number, "ArtifactFileColor"\>

## Variables

### ArtifactFileColor

• **ArtifactFileColor**: `Object`

#### Type declaration

| Name             | Type              |
| :--------------- | :---------------- |
| `APP_BACKGROUND` | ArtifactFileColor |
| `BLUE`           | ArtifactFileColor |

---

### RelicsList

• **RelicsList**: ArtifactType[]

## Functions

### artifactAvailableTimestamp

▸ **artifactAvailableTimestamp**(`artifact`): number

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `artifact` | Artifact |

#### Returns

number

---

### artifactBiomeName

▸ **artifactBiomeName**(`artifact`): string

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `artifact` | Artifact |

#### Returns

string

---

### artifactFileName

▸ **artifactFileName**(`videoMode`, `thumb`, `artifact`, `color`, `debugProps?`): string

#### Parameters

| Name         | Type                | Default value |
| :----------- | :------------------ | :------------ |
| `videoMode`  | boolean             | `undefined`   |
| `thumb`      | boolean             | `undefined`   |
| `artifact`   | RenderedArtifact    | `undefined`   |
| `color`      | ArtifactFileColor   | `undefined`   |
| `debugProps` | undefined \| Object | `undefined`   |

#### Returns

string

---

### artifactRoll

▸ **artifactRoll**(`id`): number

#### Parameters

| Name | Type       |
| :--- | :--------- |
| `id` | ArtifactId |

#### Returns

number

---

### biomeName

▸ `Const` **biomeName**(`biome`): string

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `biome` | Biome |

#### Returns

string

---

### canActivateArtifact

▸ **canActivateArtifact**(`artifact`, `planet`, `artifactsOnPlanet`): undefined \| boolean

#### Parameters

| Name                | Type                |
| :------------------ | :------------------ |
| `artifact`          | Artifact            |
| `planet`            | undefined \| Planet |
| `artifactsOnPlanet` | Artifact[]          |

#### Returns

undefined \| boolean

---

### canDepositArtifact

▸ **canDepositArtifact**(`account`, `artifact`, `planet?`): undefined \| boolean

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `account`  | EthAddress |
| `artifact` | Artifact   |
| `planet?`  | Planet     |

#### Returns

undefined \| boolean

---

### canWithdrawArtifact

▸ **canWithdrawArtifact**(`account`, `artifact`, `planet?`): undefined \| boolean

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `account`  | EthAddress |
| `artifact` | Artifact   |
| `planet?`  | Planet     |

#### Returns

undefined \| boolean

---

### dateMintedAt

▸ `Const` **dateMintedAt**(`artifact`): string

#### Parameters

| Name       | Type                  |
| :--------- | :-------------------- |
| `artifact` | undefined \| Artifact |

#### Returns

string

---

### durationUntilArtifactAvailable

▸ **durationUntilArtifactAvailable**(`artifact`): number

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `artifact` | Artifact |

#### Returns

number

---

### formatNumber

▸ `Const` **formatNumber**(`num`, `smallDec?`): string

#### Parameters

| Name       | Type   | Default value |
| :--------- | :----- | :------------ |
| `num`      | number | `undefined`   |
| `smallDec` | number | `0`           |

#### Returns

string

---

### getActivatedArtifact

▸ **getActivatedArtifact**(`artifacts`): Artifact \| undefined

#### Parameters

| Name        | Type       |
| :---------- | :--------- |
| `artifacts` | Artifact[] |

#### Returns

Artifact \| undefined

---

### getActiveBlackDomain

▸ **getActiveBlackDomain**(`artifacts`): Artifact \| undefined

#### Parameters

| Name        | Type       |
| :---------- | :--------- |
| `artifacts` | Artifact[] |

#### Returns

Artifact \| undefined

---

### getArtifactDebugName

▸ **getArtifactDebugName**(`a?`): string

#### Parameters

| Name | Type     |
| :--- | :------- |
| `a?` | Artifact |

#### Returns

string

---

### getPlanetRank

▸ `Const` **getPlanetRank**(`planet`): number

#### Parameters

| Name     | Type                |
| :------- | :------------------ |
| `planet` | undefined \| Planet |

#### Returns

number

---

### getPlayerControlledSpaceships

▸ **getPlayerControlledSpaceships**(`artifacts`, `owner`): (undefined \| Artifact)[]

#### Parameters

| Name        | Type                                   |
| :---------- | :------------------------------------- |
| `artifacts` | undefined \| (undefined \| Artifact)[] |
| `owner`     | undefined \| EthAddress                |

#### Returns

(undefined \| Artifact)[]

---

### getRange

▸ **getRange**(`planet`, `percentEnergySending?`, `rangeBoost?`): number

**`todo`** - planet class

#### Parameters

| Name                   | Type   | Default value | Description                                                                                                                  |
| :--------------------- | :----- | :------------ | :--------------------------------------------------------------------------------------------------------------------------- |
| `planet`               | Planet | `undefined`   | -                                                                                                                            |
| `percentEnergySending` | number | `100`         | -                                                                                                                            |
| `rangeBoost`           | number | `1`           | A multiplier to be applied to the resulting range. Currently used for calculating boost associated with abandoning a planet. |

#### Returns

number

---

### hasOwner

▸ **hasOwner**(`planet`): boolean

#### Parameters

| Name     | Type   |
| :------- | :----- |
| `planet` | Planet |

#### Returns

boolean

---

### hasStatBoost

▸ **hasStatBoost**(`type`): boolean

#### Parameters

| Name   | Type                      |
| :----- | :------------------------ |
| `type` | undefined \| ArtifactType |

#### Returns

boolean

---

### isActivated

▸ **isActivated**(`artifact`): boolean

#### Parameters

| Name       | Type                  |
| :--------- | :-------------------- |
| `artifact` | undefined \| Artifact |

#### Returns

boolean

---

### isAncient

▸ **isAncient**(`artifact`): boolean

#### Parameters

| Name       | Type             |
| :--------- | :--------------- |
| `artifact` | RenderedArtifact |

#### Returns

boolean

---

### isBasic

▸ **isBasic**(`type`): boolean

#### Parameters

| Name   | Type         |
| :----- | :----------- |
| `type` | ArtifactType |

#### Returns

boolean

---

### isEmojiFlagMessage

▸ **isEmojiFlagMessage**(`planetMessage`): planetMessage is PlanetMessage<EmojiFlagBody\>

#### Parameters

| Name            | Type                    |
| :-------------- | :---------------------- |
| `planetMessage` | PlanetMessage<unknown\> |

#### Returns

planetMessage is PlanetMessage<EmojiFlagBody\>

---

### isLocatable

▸ **isLocatable**(`planet?`): planet is LocatablePlanet

#### Parameters

| Name      | Type   |
| :-------- | :----- |
| `planet?` | Planet |

#### Returns

planet is LocatablePlanet

---

### isRelic

▸ **isRelic**(`type`): boolean

#### Parameters

| Name   | Type         |
| :----- | :----------- |
| `type` | ArtifactType |

#### Returns

boolean

---

### isSpaceShip

▸ **isSpaceShip**(`type`): boolean

#### Parameters

| Name   | Type                      |
| :----- | :------------------------ |
| `type` | undefined \| ArtifactType |

#### Returns

boolean

---

### isSpawnPlanet

▸ **isSpawnPlanet**(`planet?`): boolean

#### Parameters

| Name      | Type   |
| :-------- | :----- |
| `planet?` | Planet |

#### Returns

boolean

---

### isTargetPlanet

▸ **isTargetPlanet**(`planet?`): boolean

#### Parameters

| Name      | Type   |
| :-------- | :----- |
| `planet?` | Planet |

#### Returns

boolean

---

### levelFromRarity

▸ `Const` **levelFromRarity**(`rarity`): PlanetLevel

#### Parameters

| Name     | Type           |
| :------- | :------------- |
| `rarity` | ArtifactRarity |

#### Returns

PlanetLevel

---

### rarityName

▸ `Const` **rarityName**(`rarity`): string

#### Parameters

| Name     | Type           |
| :------- | :------------- |
| `rarity` | ArtifactRarity |

#### Returns

string

---

### rarityNameFromArtifact

▸ `Const` **rarityNameFromArtifact**(`a`): string

#### Parameters

| Name | Type     |
| :--- | :------- |
| `a`  | Artifact |

#### Returns

string

---

### setForceAncient

▸ **setForceAncient**(`force`): void

#### Parameters

| Name    | Type    |
| :------ | :------ |
| `force` | boolean |

#### Returns

void

---

### timeUntilNextBroadcastAvailable

▸ **timeUntilNextBroadcastAvailable**(`lastRevealTimestamp`, `locationRevealCooldown`): number

Gets the time (ms) until we can broadcast the coordinates of a planet.

#### Parameters

| Name                     | Type                |
| :----------------------- | :------------------ |
| `lastRevealTimestamp`    | undefined \| number |
| `locationRevealCooldown` | number              |

#### Returns

number
