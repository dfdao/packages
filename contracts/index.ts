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
export const NETWORK = 'gnosis_optimism';
/**
 * The id of the network where these contracts are deployed.
 */
export const NETWORK_ID = 300;
/**
 * The block in which the DarkForest contract was initialized.
 */
export const START_BLOCK = 1506005;
/**
 * The address for the DarkForest contract.
 */
export const CONTRACT_ADDRESS = '0xE830daa0A695b2f1bFd8F85814f9eD0c67377aB0';
/**
 * The address for the initalizer contract. Useful for lobbies.
 */
export const INIT_ADDRESS = '0x77D89b9e8aa2fCaae5e852B4F7822110e66EbC06';
/**
 * The address for the Verifier library. Useful for lobbies.
 */
export const VERIFIER_ADDRESS = '0x37780b15aDe05366b84f4e1Ec96472cB510D7dc0';
/**
 * The address for the LibGameUtils library. Useful for lobbies.
 */
export const LIB_GAME_UTILS_ADDRESS = '0x35F779499756049AB78eDBc927c92B7D5955aC21';
/**
 * The address for the LibPlanet library. Useful for lobbies.
 */
export const LIB_PLANET_ADDRESS = '0x4daB11Ab6b1C38ea1Fa589126C4c323784138b2C';
/**
 * The address for the LibArtifacts library. Useful for lobbies.
 */
export const LIB_ARTIFACT_UTILS_ADDRESS = '0xdCfd22CE0C462670d733fda3290d9883cc313639';
