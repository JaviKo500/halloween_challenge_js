const dream = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];


function findSafestPath(dream = []) {
  // Code here

  const totalRows = {};
  const totalColumns = {};
  for (let index = 0; index < dream.length; index++) {
    const currentDream = dream[index];
    totalRows[index] = currentDream.reduce( (a,b) => a + b ); 
    for (let j = 0; j < currentDream.length; j++) {
      const dreamValue = currentDream[j];
      totalColumns[j] = ( totalColumns[j] ?? 0 ) + dreamValue;
    }
  }

  const minKeyRow = getValueAndKey(totalRows);
  const minKeyColumn = getValueAndKey(totalColumns);

  let total = 0;
  for (let index = 0; index < dream.length; index++) {
    const currentDream = dream[index];
    if ( minKeyRow === index.toString() ) {
      total += currentDream.reduce( (a,b) => a + b ); 
    }
    for (let j = 0; j < currentDream.length; j++) {
      const dreamValue = currentDream[j];
      if ( minKeyColumn === j.toString() ) {
        total += dreamValue;
      }
    }
  }
  
  total -= dream[minKeyRow][minKeyColumn];

  console.log('<--------------- JK Challenge_02 --------------->');
  console.log({
    totalRows, totalColumns, minKeyRow, minKeyColumn
  });
  return total;
  function getValueAndKey(object) {
    let minKey = null;
    let minValue = Infinity;
  
    for (const [key, value] of Object.entries(object)) {
      if (value < minValue) {
        minValue = value;
        minKey = key;
      }
    }
    return minKey
  }
}

// const bestPath = findSafestPath(dream);
// const bestPath =  findSafestPath([[5, 9], [4, 2]]);
// const bestPath =  findSafestPath([[1, 1, 1], [1, 1, 1], [1, 1, 1]]);
const bestPath =  findSafestPath([
  [1, 2, 3], 
  [3, 2, 1], 
  [4, 4, 4]
]);

console.log('<--------------- JK Challenge_02 --------------->');
console.log(bestPath);