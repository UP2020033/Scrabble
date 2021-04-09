
export function addRandomLetter() {
  const dragTiles = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
    'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  return dragTiles[Math.floor(Math.random() * dragTiles.length)];
}

// Get a random item from a JavaScript array. Stack Overflow.
// (2021). Retrieved 5 April 2021, from https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array/5915122#5915122.

export function addNewTile(id) {
  const newTile = document.createElement('div');
  newTile.classList.add('dragElem');
  newTile.textContent = addRandomLetter();
  newTile.id = `dragTile${id}`;
  newTile.draggable = true;
  document.querySelector('.dragGrid').appendChild(newTile);
}

export function addStarterTiles() {
  for (let i = 0; i < 7; i++) {
    addNewTile(i);
  }
}

export function addNewTiles() {
  const dragTiles = document.querySelectorAll('.dragGrid');
  for (let i = 0; i < dragTiles.length; i++) {
    if (!dragTiles.hasChildNodes()) {
      addNewTile();
    } else {
      console.log('No tile required');
    }
  }
}

export function skipTurn() {
  const dragTiles = document.querySelector('.dragGrid');
  while (dragTiles.firstChild) {
    dragTiles.removeChild(dragTiles.firstChild);
  }
  addStarterTiles();
  const mainBoard = document.querySelector('.gridContainer');
  const onBoardTiles = mainBoard.children;
  for (let i = 0; i < onBoardTiles.length; i++) {
    if (onBoardTiles[i].hasChildNodes() && !onBoardTiles[i].classList.contains('colourTile') && !onBoardTiles[i].classList.contains('belowBox')) {
      onBoardTiles[i].removeChild(onBoardTiles[i].firstChild);
    } else if (onBoardTiles[i].children.length > 0 && onBoardTiles[i].classList.contains('colourTile')) {
      onBoardTiles[i].removeChild(onBoardTiles[i].lastChild);
    }
  }
}
// https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild