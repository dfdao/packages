import {
  ExactArray10,
  ExactArray5,
  ExactArray8,
  Tuple6,
} from '@darkforest_eth/settings/dist/decoder-helpers';

import { BigNumber } from 'ethers';

export interface GraphConfig {
  // # CLAIM_PLANET_COOLDOWN,
  ABANDON_RANGE_CHANGE_PERCENT: BigNumber;
  ABANDON_SPEED_CHANGE_PERCENT: BigNumber;
  ADMIN_CAN_ADD_PLANETS: boolean;
  ARTIFACT_POINT_VALUES: Tuple6<BigNumber>;
  BIOME_THRESHOLD_1: BigNumber;
  BIOME_THRESHOLD_2: BigNumber;
  BIOMEBASE_KEY: BigNumber;
  BLOCK_CAPTURE: boolean;
  BLOCK_MOVES: boolean;
  CAPTURE_ZONE_CHANGE_BLOCK_INTERVAL: BigNumber;
  CAPTURE_ZONE_COUNT: BigNumber;
  CAPTURE_ZONE_HOLD_BLOCKS_REQUIRED: BigNumber;
  CAPTURE_ZONE_PLANET_LEVEL_SCORE: ExactArray10<BigNumber>;
  CAPTURE_ZONE_RADIUS: BigNumber;
  CAPTURE_ZONES_ENABLED: boolean;
  CAPTURE_ZONES_PER_5000_WORLD_RADIUS: BigNumber;
  CLAIM_VICTORY_ENERGY_PERCENT: BigNumber;
  CONFIRM_START: boolean;
  DISABLE_ZK_CHECKS: boolean;
  INIT_PERLIN_MAX: BigNumber;
  INIT_PERLIN_MIN: BigNumber;
  LOCATION_REVEAL_COOLDOWN: BigNumber;
  MANUAL_SPAWN: boolean;
  MAX_NATURAL_PLANET_LEVEL: BigNumber;
  MODIFIERS: ExactArray8<BigNumber>;
  NO_ADMIN: boolean;
  NUM_TEAMS: BigNumber;
  PERLIN_LENGTH_SCALE: BigNumber;
  PERLIN_MIRROR_X: boolean;
  PERLIN_MIRROR_Y: boolean;
  PERLIN_THRESHOLD_1: BigNumber;
  PERLIN_THRESHOLD_2: BigNumber;
  PERLIN_THRESHOLD_3: BigNumber;
  PHOTOID_ACTIVATION_DELAY: BigNumber;
  PLANET_LEVEL_JUNK: ExactArray10<BigNumber>;
  PLANET_LEVEL_THRESHOLDS: ExactArray10<BigNumber>;
  PLANET_RARITY: BigNumber;
  PLANET_TRANSFER_ENABLED: boolean;
  PLANET_TYPE_WEIGHTS: number[];
  PLANETHASH_KEY: BigNumber;
  RANDOM_ARTIFACTS: boolean;
  RANKED: boolean;
  SILVER_SCORE_VALUE: BigNumber;
  SPACE_JUNK_ENABLED: boolean;
  SPACE_JUNK_LIMIT: BigNumber;
  SPACESHIPS: ExactArray5<boolean>;
  SPACETYPE_KEY: BigNumber;
  SPAWN_RIM_AREA: BigNumber;
  START_PAUSED: boolean;
  TARGET_PLANETS: boolean;
  TARGETS_REQUIRED_FOR_VICTORY: BigNumber;
  TEAMS_ENABLED: boolean;
  TIME_FACTOR_HUNDREDTHS: BigNumber;
  TOKEN_MINT_END_TIMESTAMP: BigNumber;
  WHITELIST_ENABLED: boolean;
  WORLD_RADIUS_LOCKED: boolean;
  WORLD_RADIUS_MIN: BigNumber;
}

export interface GraphPlanet {
  x: number;
  y: number;
  level: BigNumber;
  planetType: 'PLANET' | 'ASTEROID' | 'FOUNDRY' | 'SPACETIME_RIP' | 'QUASAR';
  locationDec: string;
  perlin: BigNumber;
  targetPlanet: boolean;
  spawnPlanet: boolean;
}

export interface RawAccount {
  wins: number;
  matches: number;
  arenaPlayers: {
    arena: GraphArena;
  }[];
}

export interface GraphArena {
  lobbyAddress: string;
  configHash: string;
  gameOver: boolean;
  startTime: number;
  config: GraphConfig;
  planets: GraphPlanet[];
}
