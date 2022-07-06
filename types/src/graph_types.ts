import {
  ExactArray10,
  ExactArray5,
  ExactArray8,
  Tuple6,
} from '@darkforest_eth/settings/dist/decoder-helpers';

export interface GraphConfig {
  // START_PAUSED,
  ADMIN_CAN_ADD_PLANETS: boolean;
  TOKEN_MINT_END_TIMESTAMP: number;
  WORLD_RADIUS_LOCKED: boolean;
  WORLD_RADIUS_MIN: number;
  DISABLE_ZK_CHECKS: boolean;
  PLANETHASH_KEY: number;
  SPACETYPE_KEY: number;
  BIOMEBASE_KEY: number;
  PERLIN_MIRROR_X: boolean;
  PERLIN_MIRROR_Y: boolean;
  PERLIN_LENGTH_SCALE: number;
  MAX_NATURAL_PLANET_LEVEL: number;
  TIME_FACTOR_HUNDREDTHS: number;
  PERLIN_THRESHOLD_1: number;
  PERLIN_THRESHOLD_2: number;
  PERLIN_THRESHOLD_3: number;
  INIT_PERLIN_MAX: number;
  INIT_PERLIN_MIN: number;
  BIOME_THRESHOLD_1: number;
  BIOME_THRESHOLD_2: number;
  PLANET_LEVEL_THRESHOLDS: ExactArray10<number>;
  PLANET_RARITY: number;
  PLANET_TRANSFER_ENABLED: boolean;
  PHOTOID_ACTIVATION_DELAY: number;
  SPAWN_RIM_AREA: number;
  LOCATION_REVEAL_COOLDOWN: number;
  // # CLAIM_PLANET_COOLDOWN,
  // # PLANET_TYPE_WEIGHTS,
  SILVER_SCORE_VALUE: number;
  ARTIFACT_POINT_VALUES: Tuple6<number>;
  SPACE_JUNK_ENABLED: boolean;
  SPACE_JUNK_LIMIT: number;
  PLANET_LEVEL_JUNK: ExactArray10<number>;
  ABANDON_SPEED_CHANGE_PERCENT: number;
  ABANDON_RANGE_CHANGE_PERCENT: number;
  CAPTURE_ZONES_ENABLED: boolean;
  CAPTURE_ZONE_COUNT: number;
  CAPTURE_ZONE_CHANGE_BLOCK_INTERVAL: number;
  CAPTURE_ZONE_RADIUS: number;
  CAPTURE_ZONE_PLANET_LEVEL_SCORE: ExactArray10<number>;
  CAPTURE_ZONE_HOLD_BLOCKS_REQUIRED: number;
  CAPTURE_ZONES_PER_5000_WORLD_RADIUS: number;
  MANUAL_SPAWN: boolean;
  TARGET_PLANETS: boolean;
  CLAIM_VICTORY_ENERGY_PERCENT: number;
  MODIFIERS: ExactArray8<number>;
  SPACESHIPS: ExactArray5<boolean>;
  // # RANDOM_ARTIFACTS,
  NO_ADMIN: boolean;
  // # INIT_PLANETS,
  CONFIRM_START: boolean;
  TARGETS_REQUIRED_FOR_VICTORY: number;
  BLOCK_CAPTURE: boolean;
  BLOCK_MOVES: boolean;
  TEAMS_ENABLED: boolean;
  NUM_TEAMS: number;
  RANKED: boolean;
  WHITELIST_ENABLED: boolean;
  RANDOM_ARTIFACTS: boolean;
  START_PAUSED: boolean;
  PLANET_TYPE_WEIGHTS: number[];
}

export interface GraphPlanet {
  x: number;
  y: number;
  level: number;
  planetType: "PLANET" | "SILVER_MINE" | "RUINS" | "TRADING_POST" | "SILVER_BANK";
  locationDec: string;
  perlin: number;
  targetPlanet: boolean;
  spawnPlanet: boolean;
}

export interface RawAccount {
  wins: number;
  matches: number;
  arenaPlayers: {
    arena: GraphArena
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
