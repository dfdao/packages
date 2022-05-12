'use strict';
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
Object.defineProperty(exports, '__esModule', { value: true });
exports.LIB_ARTIFACT_UTILS_ADDRESS =
  exports.LIB_PLANET_ADDRESS =
  exports.LIB_GAME_UTILS_ADDRESS =
  exports.VERIFIER_ADDRESS =
  exports.INIT_ADDRESS =
  exports.CONTRACT_ADDRESS =
  exports.START_BLOCK =
  exports.NETWORK_ID =
  exports.NETWORK =
    void 0;
/**
 * The name of the network where these contracts are deployed.
 */
exports.NETWORK = 'hardhat';
/**
 * The id of the network where these contracts are deployed.
 */
exports.NETWORK_ID = 31337;
/**
 * The block in which the DarkForest contract was initialized.
 */
exports.START_BLOCK = 0;
/**
 * The address for the DarkForest contract.
 */
exports.CONTRACT_ADDRESS = '0x0184E55E6be5c73081E2BdA05d662014E77eA29F';
/**
 * The address for the initalizer contract. Useful for lobbies.
 */
exports.INIT_ADDRESS = '0x6610d3Db863c2e7c161ECA424e750254409190F2';
/**
 * The address for the Verifier library. Useful for lobbies.
 */
exports.VERIFIER_ADDRESS = '0x96E8073F17aD38E2979bbfd0d083aDD08bc2ce2c';
/**
 * The address for the LibGameUtils library. Useful for lobbies.
 */
exports.LIB_GAME_UTILS_ADDRESS = '0xEb7081de74B805c45A0D93eec5cF143fbd176b40';
/**
 * The address for the LibPlanet library. Useful for lobbies.
 */
exports.LIB_PLANET_ADDRESS = '0xE16337E67a40988CBC71DD9CF07863437eB39c31';
/**
 * The address for the LibArtifacts library. Useful for lobbies.
 */
exports.LIB_ARTIFACT_UTILS_ADDRESS = '0x2dD98D00ee7652b057c87cBbf85BF6cAAbc73AA8';
//# sourceMappingURL=index.js.map
