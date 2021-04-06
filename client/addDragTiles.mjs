
export function addRandomLetter() {
  const dragTiles = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
    'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  return dragTiles[Math.floor(Math.random() * dragTiles.length)];
}

// Get a random item from a JavaScript array. Stack Overflow.
// (2021). Retrieved 5 April 2021, from https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array/5915122#5915122.

export function addStarterTiles() {
  // const belowBox = document.getElementById('gridTest');
  for (let i = 0; i < 7; i++) {
    const newTile = document.createElement('div');
    newTile.classList.add('dragElem');
    newTile.textContent = addRandomLetter();
    newTile.id = `dragTile${i}`;
    newTile.draggable = true;
    // document.querySelector('.dragGrid').appendChild(newTile);
    document.querySelector('.dragGrid').appendChild(newTile);
  }
}
