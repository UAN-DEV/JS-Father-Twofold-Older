"use strict";
import { howWritedYear } from "./how-writed-year.js";
import { isFatherTwofoldOlder } from "./is-father-twofold-older.js";

function showIsFatherTwofoldOlder(ageSon, ageFather){
  console.log(
    ((inHowYears) => {
      return Number.isNaN(inHowYears)
        ? "Вы ввели некорректное значения возраста."
        : `Отец ${howWritedYear(inHowYears)[0]} вдвое старше сына${howWritedYear(inHowYears)[1]}.`
    })(isFatherTwofoldOlder(ageSon, ageFather)),
  );
} 

showIsFatherTwofoldOlder(35,80)
showIsFatherTwofoldOlder(40,80)
showIsFatherTwofoldOlder(48,80)
showIsFatherTwofoldOlder("40",80)
showIsFatherTwofoldOlder("40,80")
showIsFatherTwofoldOlder(40,"80")
showIsFatherTwofoldOlder(40,"80")





