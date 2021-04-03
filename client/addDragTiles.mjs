
// https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array


export function addRandomLetter() {
  const dragTiles = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
    'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  return dragTiles[Math.floor(Math.random() * dragTiles.length)];
}

export function addStarterTiles() {
  for (let i = 0; i < 7; i++) {
    const newTile = document.createElement('div');
    newTile.className = 'dragElem';
    newTile.textContent = addRandomLetter();
    newTile.draggable = true;
    document.querySelector('.dragGrid').appendChild(newTile);
  }
}
