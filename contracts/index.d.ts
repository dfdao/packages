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
export declare const START_BLOCK = 1244504;
/**
 * The address for the DarkForest contract.
 */
export declare const CONTRACT_ADDRESS = '0x11ed2d0C0505505e2F4d5420821647e137d82F2D';
/**
 * The address for the initalizer contract. Useful for lobbies.
 */
export declare const INIT_ADDRESS = '0x0d8c86Ce5AC4199D5955c6C9FeD42da52391d836';
/**
 * The address for the Verifier library. Useful for lobbies.
 */
export declare const VERIFIER_ADDRESS = '0x4F911B31c7419E0fC90dC24C362Bf40427806064';
/**
 * The address for the LibGameUtils library. Useful for lobbies.
 */
export declare const LIB_GAME_UTILS_ADDRESS = '0xfA2734D197B54D0E09f2bF7Bd12ACAcf02Ece822';
/**
 * The address for the LibPlanet library. Useful for lobbies.
 */
export declare const LIB_PLANET_ADDRESS = '0x0655a00a23844E6779b9d8c824676078eaAcB56A';
/**
 * The address for the LibArtifacts library. Useful for lobbies.
 */
export declare const LIB_ARTIFACT_UTILS_ADDRESS = '0xcE9c3Ad735431E5C37294E37374f0B57A4FeaA60';
//# sourceMappingURL=index.d.ts.map
