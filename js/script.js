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
  return {
    ...fighter,
    weapon: chosenWeapon,
  };
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
// console.table(armedFighters);

armedFighters.filter((fighter) => fighter.power >= 2000);
// console.table(armedFighters);

// if the fighter numbers is odd
if (armedFighters.length % 2 != 0)
  // add a new fighter called Robot to even the number
  armedFighters.push({
    name: "Robot",
    power: 4000,
  });
// console.table(armedFighters);

// copy the armedFighters in a new array that will contain winners only
const winners = [...armedFighters];

// cicle all the fighters for combats
for (let i = 0; i < winners.length; i++) {
  // set the fighter and the opponent
  const fighter = winners[i];
  const opponent = winners[i + 1];
  // if there is no opponent (aka we are at the end of the array) break the cycle
  if (!opponent) break;
  console.log(fighter, opponent);

  // the combat is won by the fighter with bigger total power
  const loser =
    totalPower(opponent) <= totalPower(fighter) ? opponent : fighter;
  console.log(loser);
  // remove the loser from the array
  winners.splice(winners.indexOf(loser), 1);
  console.table(winners);
}
