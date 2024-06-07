// creo nuovo array copia di weapon
const updatedWeapons = [...weapons];

// creo nuovo array mappando fighters
let armedFighters = fighters.map((fighter) => {
  // prendo un'arma a caso dall'array updatedWeapons e poi la elimino dallo stesso
  const chosenWeaponIndex = randomNum(updatedWeapons.length - 1);
  const chosenWeapon = updatedWeapons[chosenWeaponIndex];
  updatedWeapons.splice(chosenWeaponIndex, 1);
  //   console.log(
  //     "fighter: ",
  //     fighter.name,
  //     "arma scelta: ",
  //     chosenWeapon,
  //     " indice: ",
  //     chosenWeaponIndex,
  //     " array aggiornato: "
  //   );
  //   console.table(updatedWeapons);

  // resituisco al nuovo array copia dell'oggetto fighter, aggiungendo la chiave weapon
  return { ...fighter, weapon: chosenWeapon };
});

// console.log("fighters");
// console.table(fighters);
// console.log("armedFighters");
// console.table(armedFighters);
// console.log(weapons);
// console.log(updatedWeapons);

// every fighter trains to try to improve his power
armedFighters.forEach(
  // the fighter power gets multiplied for a random number between 1 and 100
  (fighter) => (fighter.power = fighter.power * randomNum(100, 1))
);
console.table(armedFighters);

armedFighters = armedFighters.filter((fighter) => fighter.power >= 2000);
console.table(armedFighters);
