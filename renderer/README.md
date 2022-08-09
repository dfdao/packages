# @dfdao/renderer

## Table of contents

### Classes

- [AttribArray](undefined)
- [AttribManager](undefined)
- [EngineUtils](undefined)
- [GameGLManager](undefined)
- [GenericRenderer](undefined)
- [ProgramUtils](undefined)
- [Renderer](undefined)
- [ShaderMixins](undefined)
- [SpriteRenderer](undefined)
- [UIRenderer](undefined)
- [WebGLManager](undefined)

### Interfaces

- [Attributes](undefined)
- [EngineProgramDefinition](undefined)
- [RendererGameContext](undefined)
- [Uniforms](undefined)

### Type aliases

- [AttribData](undefined)
- [AttribManagers](undefined)
- [AttributeSetters](undefined)
- [GLArray](undefined)
- [ProgramInfo](undefined)
- [UniformData](undefined)
- [UniformLocs](undefined)
- [UniformSetter](undefined)
- [UniformSetters](undefined)

### Variables

- [engineConsts](undefined)

### Functions

- [getUniformSetter](undefined)
- [glsl](undefined)

## Classes

### AttribArray

• **AttribArray**: Class AttribArray

Helper class - essentially an implementation of ArrayList from Java, but using
typed JS Arrays so that we can efficiently write our WebGL data without converting.

---

### AttribManager

• **AttribManager**: Class AttribManager

Responsible for queuing data about a webgl attribute and then writing to it.
Does this by maintaining a persistent AttribArray and WebGLBuffer reference,
and then calling bufferData on n vertices at a time. Allows us to upload
whole arrays of objects at once, providing speed boost.

---

### EngineUtils

• **EngineUtils**: Class EngineUtils

---

### GameGLManager

• **GameGLManager**: Class GameGLManager

---

### GenericRenderer

• **GenericRenderer**: Class GenericRenderer<T, U\>

Takes in a gl context, program sources (frag and vert shader),
and data about attribs / uniforms and provides:

- attrib managers
- uniform setters
- skeleton code for rendering in our engine via `flush()`

#### Type parameters

| Name | Type                             |
| :--- | :------------------------------- |
| `T`  | extends EngineProgramDefinition  |
| `U`  | extends WebGLManagerWebGLManager |

---

### ProgramUtils

• **ProgramUtils**: Class ProgramUtils

---

### Renderer

• **Renderer**: Class Renderer

---

### ShaderMixins

• **ShaderMixins**: Class ShaderMixins

these are 'includes' that you can add into shader template strings as in `${include}`

---

### SpriteRenderer

• **SpriteRenderer**: Class SpriteRenderer

---

### UIRenderer

• **UIRenderer**: Class UIRenderer

---

### WebGLManager

• **WebGLManager**: Class WebGLManager

## Interfaces

### Attributes

• **Attributes**: Interface Attributes

---

### EngineProgramDefinition

• **EngineProgramDefinition**: Interface EngineProgramDefinition

An object that describes all of the necessary data to create and manage
this program within the renderer.

---

### RendererGameContext

• **RendererGameContext**: Interface RendererGameContext

---

### Uniforms

• **Uniforms**: Interface Uniforms

## Type aliases

### AttribData

Ƭ **AttribData**: Object

#### Index signature

▪ [key: string]: AttribProps

---

### AttribManagers

Ƭ **AttribManagers**: { [k in keyof T["attribs"]]: AttribManager }

#### Type parameters

| Name | Type                            |
| :--- | :------------------------------ |
| `T`  | extends EngineProgramDefinition |

---

### AttributeSetters

Ƭ **AttributeSetters**: { [key in keyof U]: Function }

#### Type parameters

| Name | Type               |
| :--- | :----------------- |
| `U`  | extends Attributes |

---

### GLArray

Ƭ **GLArray**: Float32Array \| Uint8Array

---

### ProgramInfo

Ƭ **ProgramInfo**: `Object`

#### Type declaration

| Name           | Type     |
| :------------- | :------- |
| `fragShader`   | string   |
| `uniforms`     | Uniforms |
| `vertexShader` | string   |

---

### UniformData

Ƭ **UniformData**: Object

#### Index signature

▪ [key: string]: UniformProps

---

### UniformLocs

Ƭ **UniformLocs**: { [k in keyof T["uniforms"]]: WebGLUniformLocation }

#### Type parameters

| Name | Type                            |
| :--- | :------------------------------ |
| `T`  | extends EngineProgramDefinition |

---

### UniformSetter

Ƭ **UniformSetter**: Function

#### Type declaration

▸ (`el`): void

##### Parameters

| Name | Type |
| :--- | :--- |
| `el` | any  |

##### Returns

void

---

### UniformSetters

Ƭ **UniformSetters**: { [k in keyof T["uniforms"]]: UniformSetter }

#### Type parameters

| Name | Type                            |
| :--- | :------------------------------ |
| `T`  | extends EngineProgramDefinition |

## Variables

### engineConsts

• **engineConsts**: `Object`

#### Type declaration

| Name                     | Type    |
| :----------------------- | :------ |
| `colors`                 | Object  |
| `colors.artifacts`       | Object  |
| `colors.artifacts.shine` | RGBVec  |
| `colors.artifacts.trim`  | RGBVec  |
| `colors.barbs`           | RGBVec  |
| `colors.barbsA`          | RGBAVec |
| `colors.belt`            | Object  |
| `colors.belt.defense`    | RGBVec  |
| `colors.belt.range`      | RGBVec  |
| `colors.belt.silver`     | RGBVec  |
| `colors.belt.speed`      | RGBVec  |
| `colors.bonus`           | Object  |
| `colors.bonus.defense`   | RGBVec  |
| `colors.bonus.energyCap` | RGBVec  |
| `colors.bonus.energyGro` | RGBVec  |
| `colors.bonus.range`     | RGBVec  |
| `colors.bonus.spaceJunk` | RGBVec  |
| `colors.bonus.speed`     | RGBVec  |
| `colors.gold`            | RGBVec  |
| `colors.orange`          | RGBVec  |
| `colors.orangeA`         | RGBAVec |
| `colors.purple`          | RGBVec  |
| `colors.purpleA`         | RGBAVec |
| `colors.range`           | Object  |
| `colors.range.dash`      | RGBVec  |
| `colors.range.energy`    | RGBVec  |
| `colors.red`             | RGBVec  |
| `colors.redA`            | RGBAVec |
| `colors.voyage`          | Object  |
| `colors.voyage.enemy`    | RGBVec  |
| `colors.voyage.enemyA`   | RGBAVec |
| `colors.voyage.help`     | RGBVec  |
| `colors.voyage.helpA`    | RGBAVec |
| `colors.voyage.mine`     | RGBVec  |
| `colors.voyage.mineA`    | RGBAVec |
| `colors.voyage.shipA`    | RGBAVec |
| `colors.white`           | RGBVec  |
| `colors.whiteA`          | RGBAVec |
| `dashLength`             | number  |
| `fontStyle`              | string  |
| `glyphs`                 | Object  |
| `glyphs.canvasDim`       | number  |
| `glyphs.glyphH`          | number  |
| `glyphs.glyphW`          | number  |
| `glyphs.rowL`            | number  |
| `glyphs.scale`           | number  |
| `planet`                 | Object  |
| `planet.maxRadius`       | number  |

## Functions

### getUniformSetter

▸ **getUniformSetter**(`gl`, `loc`, `props`): UniformSetter

Create a setter which writes the given uniform specified by `props` to `loc`.
Note that this function does not call gl.useProgram().

#### Parameters

| Name    | Type                   | Description                                     |
| :------ | :--------------------- | :---------------------------------------------- |
| `gl`    | WebGL2RenderingContext | The WebGL rendering context this uniform is in. |
| `loc`   | WebGLUniformLocation   | The uniform location to write to.               |
| `props` | UniformProps           | UniformProps for this uniform.                  |

#### Returns

UniformSetter

---

### glsl

▸ `Const` **glsl**(`arr`, ...`args`): string

#### Parameters

| Name      | Type                 |
| :-------- | :------------------- |
| `arr`     | TemplateStringsArray |
| `...args` | any[]                |

#### Returns

string
