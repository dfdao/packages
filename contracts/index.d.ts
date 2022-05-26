/**
 * This package contains deployed contract addresses, ABIs, and Typechain types
 * for the Dark Forest game.
 *
 * ## Installation
 *
 * You can install this package using [`npm`](https://www.npmjs.com) or
 * [`yarn`](https://classic.yarnpkg.com/lang/en/) by running:
 *
 * ```bash
 * npm install --save @darkforest_eth/contracts
 * ```
 * ```bash
 * yarn add @darkforest_eth/contracts
 * ```
 *
 * When using this in a plugin, you might want to load it with [skypack](https://www.skypack.dev)
 *
 * ```js
 * import * as contracts from 'http://cdn.skypack.dev/@darkforest_eth/contracts'
 * ```
 *
 * ## Typechain
 *
 * The Typechain types can be found in the `typechain` directory.
 *
 * ## ABIs
 *
 * The contract ABIs can be found in the `abis` directory.
 *
 * @packageDocumentation
 */
/**
 * The name of the network where these contracts are deployed.
 */
export declare const NETWORK = 'gnosis_optimism';
/**
 * The id of the network where these contracts are deployed.
 */
export declare const NETWORK_ID = 300;
/**
 * The block in which the DarkForest contract was initialized.
 */
export declare const START_BLOCK = 116430;
/**
 * The address for the DarkForest contract.
 */
export declare const CONTRACT_ADDRESS = '0x833FD91693fbaaC1863160a53b853B5c39eaD204';
/**
 * The address for the initalizer contract. Useful for lobbies.
 */
export declare const INIT_ADDRESS = '0x05EAB6557FFA47353Aba8c9bc59B25C4c0489092';
/**
 * The address for the Verifier library. Useful for lobbies.
 */
export declare const VERIFIER_ADDRESS = '0x4BcEB998d2519919fab14918D294a3051F2c87F8';
/**
 * The address for the LibGameUtils library. Useful for lobbies.
 */
export declare const LIB_GAME_UTILS_ADDRESS = '0xB0f32D2612FB3692a92E8aFF3BB145d27FC8eC08';
/**
 * The address for the LibPlanet library. Useful for lobbies.
 */
export declare const LIB_PLANET_ADDRESS = '0xBaD307Cc38C96D45eD00395f525E7FBF76539534';
/**
 * The address for the LibArtifacts library. Useful for lobbies.
 */
export declare const LIB_ARTIFACT_UTILS_ADDRESS = '0x58d708cE1DC15A0aD620C3fe410e27a9213a15Cc';
//# sourceMappingURL=index.d.ts.map
/**
 * The address for the Faucet contract. Useful for lobbies.
 */
export declare const FAUCET_ADDRESS = '0xEb1E97445A9E8042a5120ECE339aB70b07307edf';
//# sourceMappingURL=index.d.ts.map
