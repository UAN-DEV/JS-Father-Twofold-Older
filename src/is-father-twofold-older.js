"use strict";

/**
 * Calculates when the father is twice as old as the son.
 *
 * @param {number} ageSon - son age (must be >= 0).
 * @param {number} ageFather - father age (must be >= 15).
 * @returns {number} In how many years the father will be (or was) twice as old the son.
 */
export function isFatherTwofoldOlder(ageSon, ageFather) {
  return !Number.isFinite(ageSon) ||
    !Number.isFinite(ageFather) ||
    ageSon < 0 ||
    ageFather - ageSon < 15
    ? NaN
    : 2 * ageSon - ageFather;
}
