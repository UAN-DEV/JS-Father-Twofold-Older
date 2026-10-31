"use strict";

export function howWritedYear(inHowYears) {
  const ABS_YEARS = Math.abs(inHowYears);
  const LAST_TWO_DIGITS = ABS_YEARS % 100;
  const LAST_DIGIT = ABS_YEARS % 10;
  const BEFORE = inHowYears > 0 ? " назад" : "";
  const AFTER = inHowYears < 0 ? "через " : "";
  const RESPONSE = [];
  RESPONSE.push(inHowYears === 0 ? "сейчас" : inHowYears < 0 ? "будет" : "был");
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
