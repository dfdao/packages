import * as decoders from 'decoders';

const decodeAdminPlanet = decoders.exact({
  x: decoders.number,
  y: decoders.number,
  level: decoders.number,
  planetType: decoders.number,
  requireValidLocationId: decoders.boolean,
  revealLocation: decoders.boolean,
});

export type AdminPlanets = ReturnType<typeof decodeAdminPlanets>;

export const decodeAdminPlanets = decoders.guard(decoders.array(decodeAdminPlanet), {
  style: 'simple',
});


// Arena

export const decodeArenaPlanet = decoders.exact({
  location: decoders.string,
  x: decoders.string, /* string bc converting to uint, but input can be negative */
  y: decoders.string,
  perlin: decoders.number,
  level: decoders.number,
  planetType: decoders.number,
  requireValidLocationId: decoders.boolean,
  isTargetPlanet: decoders.boolean,
  isSpawnPlanet: decoders.boolean,
});

export const decodeArenaPlanets = decoders.guard(decoders.array(decodeArenaPlanet), {
  style: 'simple',
});

export type ArenaPlanets = ReturnType<typeof decodeArenaPlanets>;

export const decodeBlockItem = decoders.exact({
  destId: decoders.string, /* string bc converting to uint, but input can be negative */
  srcId: decoders.string,
});

export const decodeInitBlocklist = decoders.guard(decoders.array(decodeBlockItem), {
  style: 'simple',
});

export type InitBlocklist = ReturnType<typeof decodeInitBlocklist>;


