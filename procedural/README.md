# @dfdao/procedural

## Table of contents

### Type aliases

- [PixelCoords](undefined)
- [QuoteData](undefined)

### Variables

- [grayColors](undefined)
- [mockCommon](undefined)
- [mockEpic](undefined)
- [mockLegendary](undefined)
- [mockRare](undefined)

### Functions

- [artifactName](undefined)
- [artifactRandom](undefined)
- [artifactRandomInt](undefined)
- [configRandom](undefined)
- [getBiomeRgbStr](undefined)
- [getConfigName](undefined)
- [getHatSizeName](undefined)
- [getPlanetBlurb](undefined)
- [getPlanetBlurb2](undefined)
- [getPlanetClass](undefined)
- [getPlanetCosmetic](undefined)
- [getPlanetName](undefined)
- [getPlanetNameHash](undefined)
- [getPlanetTagline](undefined)
- [getPlanetTitle](undefined)
- [getPlayerColor](undefined)
- [getPlayerColorVec](undefined)
- [getRuinsInfo](undefined)
- [hashToHue](undefined)
- [hatTypeFromHash](undefined)
- [hslStr](undefined)
- [hslToRgb](undefined)
- [mockArtifact](undefined)
- [mockArtifactWithRarity](undefined)
- [planetPerlin](undefined)
- [planetRandom](undefined)
- [planetRandomInt](undefined)
- [rgbStr](undefined)
- [titleCase](undefined)

## Type aliases

### PixelCoords

Ƭ **PixelCoords**: `Object`

#### Type declaration

| Name | Type   |
| :--- | :----- |
| `x`  | number |
| `y`  | number |

---

### QuoteData

Ƭ **QuoteData**: `Object`

#### Type declaration

| Name     | Type   |
| :------- | :----- |
| `author` | string |
| `quote`  | string |

## Variables

### grayColors

• **grayColors**: PlanetCosmeticInfo

---

### mockCommon

• **mockCommon**: Artifact

---

### mockEpic

• **mockEpic**: Artifact

---

### mockLegendary

• **mockLegendary**: Artifact

---

### mockRare

• **mockRare**: Artifact

## Functions

### artifactName

▸ `Const` **artifactName**(`artifact`): string

#### Parameters

| Name       | Type                  |
| :--------- | :-------------------- |
| `artifact` | undefined \| Artifact |

#### Returns

string

---

### artifactRandom

▸ **artifactRandom**(`loc`): Function

#### Parameters

| Name  | Type       |
| :---- | :--------- |
| `loc` | ArtifactId |

#### Returns

Function

▸ (): number

##### Returns

number

---

### artifactRandomInt

▸ **artifactRandomInt**(`loc`): Function

#### Parameters

| Name  | Type       |
| :---- | :--------- |
| `loc` | ArtifactId |

#### Returns

Function

▸ (): number

##### Returns

number

---

### configRandom

▸ **configRandom**(`config`): Function

#### Parameters

| Name     | Type   |
| :------- | :----- |
| `config` | string |

#### Returns

Function

▸ (): number

##### Returns

number

---

### getBiomeRgbStr

▸ **getBiomeRgbStr**(`biome`): string

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `biome` | Biome |

#### Returns

string

---

### getConfigName

▸ **getConfigName**(`config`): string

#### Parameters

| Name     | Type   |
| :------- | :----- |
| `config` | string |

#### Returns

string

---

### getHatSizeName

▸ **getHatSizeName**(`planet`): string

#### Parameters

| Name     | Type   |
| :------- | :----- |
| `planet` | Planet |

#### Returns

string

---

### getPlanetBlurb

▸ **getPlanetBlurb**(`planet`): string

#### Parameters

| Name     | Type                |
| :------- | :------------------ |
| `planet` | undefined \| Planet |

#### Returns

string

---

### getPlanetBlurb2

▸ **getPlanetBlurb2**(`planet`): string

#### Parameters

| Name     | Type                |
| :------- | :------------------ |
| `planet` | undefined \| Planet |

#### Returns

string

---

### getPlanetClass

▸ **getPlanetClass**(`planet`): UpgradeBranchName

#### Parameters

| Name     | Type   |
| :------- | :----- |
| `planet` | Planet |

#### Returns

UpgradeBranchName

---

### getPlanetCosmetic

▸ **getPlanetCosmetic**(`planet`): PlanetCosmeticInfo

#### Parameters

| Name     | Type                |
| :------- | :------------------ |
| `planet` | undefined \| Planet |

#### Returns

PlanetCosmeticInfo

---

### getPlanetName

▸ **getPlanetName**(`planet`): string

#### Parameters

| Name     | Type                |
| :------- | :------------------ |
| `planet` | undefined \| Planet |

#### Returns

string

---

### getPlanetNameHash

▸ **getPlanetNameHash**(`locId`): string

#### Parameters

| Name    | Type       |
| :------ | :--------- |
| `locId` | LocationId |

#### Returns

string

---

### getPlanetTagline

▸ **getPlanetTagline**(`planet`): string

#### Parameters

| Name     | Type                |
| :------- | :------------------ |
| `planet` | undefined \| Planet |

#### Returns

string

---

### getPlanetTitle

▸ **getPlanetTitle**(`planet`): string

#### Parameters

| Name     | Type                |
| :------- | :------------------ |
| `planet` | undefined \| Planet |

#### Returns

string

---

### getPlayerColor

▸ **getPlayerColor**(`player`, `teamsEnabled`): string

#### Parameters

| Name           | Type                |
| :------------- | :------------------ |
| `player`       | undefined \| Player |
| `teamsEnabled` | boolean             |

#### Returns

string

---

### getPlayerColorVec

▸ **getPlayerColorVec**(`player`, `teamsEnabled`): RGBAVec

#### Parameters

| Name           | Type                |
| :------------- | :------------------ |
| `player`       | undefined \| Player |
| `teamsEnabled` | boolean             |

#### Returns

RGBAVec

---

### getRuinsInfo

▸ **getRuinsInfo**(`loc`): RuinsInfo

#### Parameters

| Name  | Type       |
| :---- | :--------- |
| `loc` | LocationId |

#### Returns

RuinsInfo

---

### hashToHue

▸ **hashToHue**(`hash`): number

#### Parameters

| Name   | Type   |
| :----- | :----- |
| `hash` | string |

#### Returns

number

---

### hatTypeFromHash

▸ **hatTypeFromHash**(`hash`): HatType

#### Parameters

| Name   | Type       |
| :----- | :--------- |
| `hash` | LocationId |

#### Returns

HatType

---

### hslStr

▸ **hslStr**(`h`, `s`, `l`): string

#### Parameters

| Name | Type   |
| :--- | :----- |
| `h`  | number |
| `s`  | number |
| `l`  | number |

#### Returns

string

---

### hslToRgb

▸ **hslToRgb**(`__namedParameters`): RGBVec

#### Parameters

| Name                | Type   |
| :------------------ | :----- |
| `__namedParameters` | HSLVec |

#### Returns

RGBVec

---

### mockArtifact

▸ `Const` **mockArtifact**(`rarity`, `artifactType?`, `planetBiome?`): Artifact

#### Parameters

| Name           | Type           | Default value            |
| :------------- | :------------- | :----------------------- |
| `rarity`       | ArtifactRarity | `undefined`              |
| `artifactType` | ArtifactType   | `ArtifactType.Spaceship` |
| `planetBiome`  | Biome          | `Biome.WASTELAND`        |

#### Returns

Artifact

---

### mockArtifactWithRarity

▸ `Const` **mockArtifactWithRarity**(`rarity`, `artifactType?`, `planetBiome?`): Artifact

#### Parameters

| Name           | Type           | Default value            |
| :------------- | :------------- | :----------------------- |
| `rarity`       | ArtifactRarity | `undefined`              |
| `artifactType` | ArtifactType   | `ArtifactType.Spaceship` |
| `planetBiome`  | Biome          | `Biome.WASTELAND`        |

#### Returns

Artifact

---

### planetPerlin

▸ **planetPerlin**(`loc`): Function

#### Parameters

| Name  | Type       |
| :---- | :--------- |
| `loc` | LocationId |

#### Returns

Function

▸ (`coords`): number

##### Parameters

| Name     | Type        |
| :------- | :---------- |
| `coords` | PixelCoords |

##### Returns

number

---

### planetRandom

▸ **planetRandom**(`loc`): Function

#### Parameters

| Name  | Type       |
| :---- | :--------- |
| `loc` | LocationId |

#### Returns

Function

▸ (): number

##### Returns

number

---

### planetRandomInt

▸ **planetRandomInt**(`loc`): Function

#### Parameters

| Name  | Type       |
| :---- | :--------- |
| `loc` | LocationId |

#### Returns

Function

▸ (): number

##### Returns

number

---

### rgbStr

▸ **rgbStr**(`rgb`): string

#### Parameters

| Name  | Type   |
| :---- | :----- |
| `rgb` | RGBVec |

#### Returns

string

---

### titleCase

▸ `Const` **titleCase**(`title`): string

#### Parameters

| Name    | Type   |
| :------ | :----- |
| `title` | string |

#### Returns

string
