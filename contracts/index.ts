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
export const START_BLOCK = 1509087;
/**
 * The address for the DarkForest contract.
 */
export const CONTRACT_ADDRESS = '0xdC2e31677084108C58875EA60F717cfd995F2EDB';
/**
 * The address for the initalizer contract. Useful for lobbies.
 */
export const INIT_ADDRESS = '0x6b21bb9F99e2Da8A098A5156bAaCC9b65913da5F';
/**
 * The address for the Verifier library. Useful for lobbies.
 */
export const VERIFIER_ADDRESS = '0x0e70022b4Ab726A864dF3f97A38F8dAd195C6969';
/**
 * The address for the LibGameUtils library. Useful for lobbies.
 */
export const LIB_GAME_UTILS_ADDRESS = '0xaA67cAa9b650E526ade69E92536Cd5e6AeD17229';
/**
 * The address for the LibPlanet library. Useful for lobbies.
 */
export const LIB_PLANET_ADDRESS = '0x54A07D6BD5A97c31B41F73Dfad4c9dd4E8BfE9BF';
/**
 * The address for the LibArtifacts library. Useful for lobbies.
 */
export const LIB_ARTIFACT_UTILS_ADDRESS = '0xDD2fc4Cbfc0a26638cDFe1c1D0fe9461c870741D';

export const FAUCET_ADDRESS = '0xEb1E97445A9E8042a5120ECE339aB70b07307edf';