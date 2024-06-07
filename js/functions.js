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
