// creo nuovo array copia di weapon
const updatedWeapons = [...weapons];

// creo nuovo array mappando fighters
const armedFighters = fighters.map((fighter) => {
  // prendo un'arma a caso dall'array updatedWeapons e poi la elimino dallo stesso
  const chosenWeaponIndex = randomNum(updatedWeapons.length);
  const chosenWeapon = updatedWeapons[chosenWeaponIndex];
  updatedWeapons.splice(chosenWeaponIndex, 1);
  //   console.log('arma scelta: ', chosenWeapon, ' indice: ', chosenWeaponIndex, ' array aggiornato: ', updatedWeapons);

  // resituisco al nuovo array copia dell'oggetto fighter, aggiungendo la chiave weapon
  return { ...fighter, weapon: chosenWeapon };
});

console.log("fighters");
console.table(fighters);
console.log("armedFighters");
console.table(armedFighters);
console.log(weapons);
console.log(updatedWeapons);
