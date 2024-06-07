/**
 * funzione che recupera un numero randomico tra due valori: max e min (inclusi)
 * @param {number} max ; valore massimo incluso
 * @param {number} min default = 0 ; valore minimo incluso
 * @returns
 */
function randomNum(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * funzione che restituisce un elemento random da un array
 * @param {array} array
 */
function randomElement(array) {
  return array[randomNum(array.length)];
}

/**
 * return the total power of the fighter (power + weapon power)
 * @param {object} fighter
 * @returns
 */
function totalPower(fighter) {
  // if the fighter is armed sum his strenght to the strenght of the weapon
  let totalPower = fighter.weapon
    ? fighter.power + fighter.weapon.power
    : fighter.power;
  return totalPower;
}

/**
 * multiply the fighters power for a random number
 * @param {array} fighters
 */
function trainFighters(fighters) {
  fighters.forEach(
    // the fighter power gets multiplied for a random number between 1 and 100
    (fighter) => (fighter.power = fighter.power * randomNum(100, 1))
  );
  console.log("I partecipanti si sono allenati!");
  console.table(fighters);
}
