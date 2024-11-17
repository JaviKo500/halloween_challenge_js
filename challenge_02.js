const dream = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

function findSafestPath(dream = []) {
  // Code here
  const movementsRight = dream.at(1).length -1;
  const movementsAbove = dream.length -1 ;
  const totalMovements = movementsAbove + movementsRight;
  const streets = factorial( totalMovements ) / ( factorial(movementsAbove) * factorial( totalMovements - movementsAbove ) );
  
  console.log('<--------------- JK Challenge_02 --------------->');
  console.log({
    movementsAbove,
    movementsRight,
    streets
  });
  const totalStreetsValue = [];
  for (let street = 0; street < streets; street++) {
    let totalStreet = 0;
    console.log(`street: ${street}`);
    for (let index = 0; index < dream.length; index++) {
      const currentDreamValues = dream[index];
      console.log(`currentDreamValues: ${currentDreamValues}`);
      for (let j = 0; j < currentDreamValues.length; j++) {
        const dreamValue = currentDreamValues[j];
        console.log(`dreamValue: ${dreamValue}`);
      }
    }
    totalStreetsValue.push(totalStreet);
  }
  console.log(`Total streets${ totalStreetsValue }`);
  for (let index = 0; index < dream.length; index++) {
    const currentDream = dream[index];
    console.log('<--------------- JK Challenge_02 --------------->');
    console.log(currentDream);
    for (let j = 0; j < currentDream.length; j++) {
      const valueStreet = currentDream[j];
      console.log('<--------------- JK Challenge_02 --------------->');
      console.log(valueStreet);
      totalStreet += valueStreet;
    }
  }
  return 0;
}

const bestPath = findSafestPath(dream);

console.log('<--------------- JK Challenge_02 --------------->');
console.log(bestPath);