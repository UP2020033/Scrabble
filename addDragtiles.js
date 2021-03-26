// https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array

function createRandomTiles() {
  const createTiles = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return createTiles[Math.floor(Math.random() * createTiles.length)];
}

function createRandomTilesArr() {
  for (let i = 0; i < 7; i++) {
    const tileArr = [];
    tileArr.push(createRandomTiles());
  }
}
/*
function addRandomTiles() {
    for (let i = 0; )
}
*/

console.log(createRandomTilesArr());
