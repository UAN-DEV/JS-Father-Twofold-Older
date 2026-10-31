"use strict";

/**
 * Calculates when the father is twice as old as the son.
 *
 * @param {number} ageSon - son age (must be >= 0).
 * @param {number} ageFather - father age (must be >= 15).
 * @returns {number} In how many years the father will be (or was) twice as old the son.
 */
function isFatherTwofoldOlder(ageSon, ageFather) {
  return !Number.isFinite(ageSon) ||
    !Number.isFinite(ageFather) ||
    ageSon < 0 ||
    ageFather - ageSon < 15
    ? NaN
    : 2 * ageSon - ageFather;
}

function howWritedYear(inHowYears) {
  const ABS_YEARS = Math.abs(inHowYears);
  const LAST_TWO_DIGITS = ABS_YEARS % 100;
  const LAST_DIGIT = ABS_YEARS % 10;
  const BEFORE = inHowYears < 0 ? " назад" : "";
  const AFTER = inHowYears > 0 ? " через " : "";
  const RESPONSE = [];
  RESPONSE.push(inHowYears === 0 ? "сейчас" : inHowYears > 0 ? "будет" : "был");
  RESPONSE.push(
    inHowYears === 0
      ? ""
      : LAST_TWO_DIGITS >= 11 && LAST_TWO_DIGITS <= 14 // 11, 12, 13, 14 -> исключения
        ? ` ${AFTER}${ABS_YEARS} лет${BEFORE}`
        : LAST_DIGIT === 1 // 1 -> исключениe
          ? ` ${AFTER}${ABS_YEARS} год${BEFORE}`
          : LAST_DIGIT >= 2 && LAST_DIGIT <= 4 // оканчиваются на 2, 3, 4
            ? ` ${AFTER}${ABS_YEARS} годa${BEFORE}`
            : ` ${AFTER}${ABS_YEARS} лет${BEFORE}`, // оканчиваются на 5, 6, 7, 8, 9, 0
  );
  return RESPONSE;
}

console.log(
  ((inHowYears) => {
    return Number.isNaN(inHowYears)
      ? "Вы ввели некорректное значения возраста."
      : `Отец ${howWritedYear(inHowYears)[0]} вдвое старше сына${howWritedYear(inHowYears)[1]}.`
  })(isFatherTwofoldOlder(40, 80)),
);
