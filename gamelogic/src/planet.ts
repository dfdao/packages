import { EMPTY_ADDRESS } from '@darkforest_eth/constants';
import {
  EmojiFlagBody,
  LocatablePlanet,
  Planet,
  PlanetMessage,
  PlanetMessageType,
} from '@darkforest_eth/types';

export const getPlanetRank = (planet: Planet | undefined): number => {
  if (!planet) return 0;
  return planet.upgradeState.reduce((a, b) => a + b);
};

/**
 * @todo - planet class
 * @param rangeBoost A multiplier to be applied to the resulting range.
 * Currently used for calculating boost associated with abandoning a planet.
 */
export function getRange(
  planet: Planet,
  rangeDoublingTime: number,
  percentEnergySending = 100,
  rangeBoost = 1,
  startTime: number | undefined = undefined
): number {
  if (percentEnergySending === 0) return 0;
  let newRange = planet.range;

  if (startTime !== undefined && startTime !== 0 && rangeDoublingTime > 0) {

    newRange += (planet.range * (Date.now() / 1000 - startTime) / rangeDoublingTime);
  }

  return Math.max(Math.log2(percentEnergySending / 5), 0) * newRange * rangeBoost;
}

export function hasOwner(planet: Planet) {
  return planet.owner !== EMPTY_ADDRESS;
}

export function isEmojiFlagMessage(
  planetMessage: PlanetMessage<unknown>
): planetMessage is PlanetMessage<EmojiFlagBody> {
  return planetMessage.body !== undefined && planetMessage.type === PlanetMessageType.EmojiFlag;
}

export function isLocatable(planet?: Planet): planet is LocatablePlanet {
  return planet !== undefined && (planet as LocatablePlanet).location !== undefined;
}

export function  isSpawnPlanet(planet?: Planet): boolean {
  return planet !== undefined && planet.isSpawnPlanet;
}

export function  isTargetPlanet(planet?: Planet): boolean {
  return planet !== undefined && planet.isTargetPlanet;
}


/**
 * Gets the time (ms) until we can broadcast the coordinates of a planet.
 */
export function timeUntilNextBroadcastAvailable(
  lastRevealTimestamp: number | undefined,
  locationRevealCooldown: number
) {
  if (!lastRevealTimestamp) {
    return 0;
  }

  // both the variables in the next line are denominated in seconds
  return (lastRevealTimestamp + locationRevealCooldown) * 1000 - Date.now();
}
