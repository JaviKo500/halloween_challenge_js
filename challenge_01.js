/*En una lucha épica entre muertos vivientes 🧟 y humanos 👮‍♂️, ambos bandos tienen una lista de combatientes con poderes de ataque específicos.

La batalla se desarrolla en rondas, y cada ronda enfrenta a cada combatiente de su bando.

El bando con mayor poder de ataque gana la ronda, y su poder se suma al siguiente combatiente de su equipo.

En caso de empate, ambos combatientes caen y no afectan a la próxima ronda.

Dadas dos cadenas de texto zombies y humans, donde cada dígito (del 1 al 9) representa el poder de ataque de un combatiente, determina quién queda al final y con cuánto poder de ataque.

Importante: Las dos cadenas siempre tendrán la misma longitud.

La salida es una cadena de texto que representa el resultado final de la batalla.

Si queda un zombie, devuelve su poder seguido de "z", por ejemplo "3z".
Si queda un humano, devuelve su poder seguido de "h", por ejemplo "2h".
Si hay un empate y ninguno queda con poder al final, devuelve "x".*/

function battleHorde(zombies, humans) {
  if (zombies.length !== humans.length) {
    throw new Error('Params are equals')
  }
  let pointsZombies = 0;
  let pointsHumans = 0;
  for (let i = 0; i < zombies.length; i++) {
    let hordeZombies = parseInt(zombies[i]) + pointsZombies;
    let hordeHumans = parseInt(humans[i]) + pointsHumans;
    const winner = hordeZombies - hordeHumans;

    if (winner > 0) {
      pointsZombies = winner;
      pointsHumans = 0;
    } else if (winner < 0) {
      pointsHumans = -winner;
      pointsZombies = 0;
    } else {
      pointsHumans = pointsZombies = 0;
    }
  }
  if (pointsHumans > pointsZombies) return `${pointsHumans}h`;
  if (pointsZombies > pointsHumans) return `${pointsZombies}z`;
  return 'x';
}