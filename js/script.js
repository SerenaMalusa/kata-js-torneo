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

console.log("Tutti gli aspiranti partecipanti hanno scelto un' arma!");
console.table(armedFighters);

// afeter 1 minutes: every fighter trains to try to improve his power
setTimeout(trainFighters, 1000 * 60 * 1, armedFighters);

let approvedFighters = [];
// after 2 minutes
setTimeout(() => {
  // remove the fighters whose strenght is less than 2000
  approvedFighters = armedFighters.filter((fighter) => fighter.power >= 2000);
  //   console.table(approvedFighters);
  console.log("Ecco i partecipanti che hanno passato le selezioni:");

  // if the fighter numbers is odd
  if (approvedFighters.length % 2 != 0) {
    // add a new fighter called Robot to even the number
    approvedFighters.push({
      name: "Robot",
      power: 4000,
    });
    console.log(
      "(e' stato aggiunto un combattente robot per rendere pari il numero dei partecipanti.)"
    );
  }

  console.table(approvedFighters);
}, 1000 * 60 * 2);

// set a new array that will contain winners onlys
let winners = [];

// // afert 3 minutes
// setTimeout(function () {
//   // copy the armedFighters in the winners array
//   winners = [...approvedFighters];

//   // cycle all the fighters for combats
//   for (let i = 0; i < winners.length; i++) {
//     console.log(`Comabttimento n${i + 1}:`);

//     // set the fighter and the opponent
//     const fighter = winners[i];
//     const opponent = winners[i + 1];
//     // if there is no opponent (aka we are at the end of the array) break the cycle
//     if (!opponent) break;
//     //   console.log(fighter, opponent);

//     // the combat is won by the fighter with bigger total power (if they are equal then the fighter wins)
//     const loser =
//       totalPower(opponent) <= totalPower(fighter) ? opponent : fighter;
//     //   console.log(loser);
//     // remove the loser from the array
//     winners.splice(winners.indexOf(loser), 1);
//     //   console.table(winners);

//     const winner = loser == opponent ? fighter : opponent;
//     console.log(
//       `${fighter.name}(forza totale: ${totalPower(fighter)}) vs ${
//         opponent.name
//       }(forza totale: ${totalPower(opponent)})`
//     );
//     console.log(`Il vincitore è ${winner.name}!`);
//   }
// }, 1000 * 60 * 3);

// // create a new array that will contain the best 3 winners
// const podium = [];

// // after 4 minutes
// setTimeout(() => {
//   // cycle until podium has 3 elements
//   while (podium.length < 3) {
//     // start with the first element of the winner array
//     let medal = winners[0];
//     // confront each winner strenght and find the biggest one (if they are equal then the medal wins)
//     winners.forEach((winner) => {
//       if (totalPower(winner) > totalPower(medal)) {
//         medal = winner;
//       }
//     });
//     // console.log(medal);

//     // put the medalist on the podium and remove it from the list so it can't be counted later
//     podium.push(medal);
//     winners.splice(winners.indexOf(medal), 1);
//   }

//   console.log("Ecco il podio con i 3 migliori combattenti:");
//   console.table(podium);
// }, 1000 * 60 * 4);

// afert 3 minutes
setTimeout(function () {
  console.log("VIA AI COMBATTIMENTI!!!!");
  // copy the armedFighters in the winners array
  winners = [...approvedFighters];

  let a = 1;
  while (winners.length > 1) {
    console.log(
      `------------------------------------------------------- Girone n${a} ------------------------------------------------------- `
    );

    // cycle all the fighters for combats
    for (let i = 0; i < winners.length; i++) {
      console.log(`------ Comabttimento n${i + 1} ------`);

      // set the fighter and the opponent
      const fighter = winners[i];
      const opponent = winners[i + 1];
      // if there is no opponent (aka we are at the end of the array) break the cycle
      if (!opponent) break;

      // the combat is won by the fighter with bigger total power (if they are equal then the fighter wins)
      const loser =
        totalPower(opponent) <= totalPower(fighter) ? opponent : fighter;
      // remove the loser from the array
      winners.splice(winners.indexOf(loser), 1);
      //   console.table(winners);

      const winner = loser == opponent ? fighter : opponent;
      console.log(
        `${fighter.name}(forza totale: ${totalPower(fighter)}) vs ${
          opponent.name
        }(forza totale: ${totalPower(opponent)})`
      );
      console.log(`Il vincitore è ${winner.name}!`);
    }

    a++;
  }
  console.log(
    "--------------------------------------------------------------------------------------------------------"
  );
  console.log(`Il vincitore assoluto è ${winners[0].name}!`);
  //   console.table(winners);
}, 1000 * 60 * 3);
