"use strict";
import { howWritedYear } from "./how-writed-year.js";
import { isFatherTwofoldOlder } from "./is-father-twofold-older.js";

/**
* Logs to the console a message indicating when the father will be twice as old as his son. 
*
* @param {number} ageSon - The son's current age (must be >= 0). 
* @param {number} ageFather - The father's current age (must be >= 15). 
* @returns {void} Function does not return a value; it logs the result directly to the console. 
*
* @see isFatherTwofoldOlder - Used to calculate the difference in years. 
* @see howWritedYear - Used to determine the correct grammatical form of the word "year" (год/года/лет). 
*/
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





