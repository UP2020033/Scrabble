
// Function which returns random letter based on the Arr index.

export function addRandomLetter() {
  const dragTiles = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
    'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  return dragTiles[Math.floor(Math.random() * dragTiles.length)];
}

// Get a random item from a JavaScript array. Stack Overflow.
// (2021). Retrieved 5 April 2021, from https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array/5915122#5915122.

// Array of ids to be assigned to the draggable tiles - Should probably make it an automated process.

const dragIdArr = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'A11', 'A12', 'A13', 'A14', 'A15',
  'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10', 'B11', 'B12', 'B13', 'B14', 'B15',
  'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12', 'C13', 'C14', 'C15',
  'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'D11', 'D12', 'D13', 'D14', 'D15',
  'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10', 'E11', 'E12', 'E13', 'E14', 'E15',
  'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'F13', 'F14', 'F15',
  'G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G10', 'G11', 'G12', 'G13', 'G14', 'G15',
  'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10', 'H11', 'H12', 'H13', 'H14', 'H15',
  'I1', 'I2', 'I3', 'I4', 'I5', 'O6', 'I7', 'I8', 'I9', 'I10', 'I11', 'I12', 'I13', 'I14', 'I15',
  'J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'J10', 'J11', 'J12', 'J13', 'J14', 'J15',
  'K1', 'K2', 'K3', 'K4', 'K5', 'K6', 'K7', 'K8', 'K9', 'K10', 'J11', 'K12', 'K13', 'K14', 'K15'];

// Function to add new draggable tile, this will be called upon by other functions when the user presses buttons to either play or reset a turn.

export function addNewTile() {
  const newTile = document.createElement('div');
  newTile.classList.add('dragElem');
  newTile.textContent = addRandomLetter();
  // Assiging the tile an id consisting of the first property in the array.
  newTile.id = `dragTile${dragIdArr[0]}`;
  newTile.draggable = true;
  // Removing the first property in the array each time the function is called.
  dragIdArr.shift(dragIdArr[0]);
  document.querySelector('.dragGrid').appendChild(newTile);
}

// Function calling the previous addNewTile function to create the first 7 draggable tiles.

export function addStarterTiles() {
  for (let i = 0; i < 7; i++) {
    addNewTile(i);
  }
}

// Function calling the addNewTile function to add new tiles when the user skips a turn.

export function addNewTiles() {
  const dragGrid = document.querySelector('.dragGrid');
  for (let i = 0; i < 7; i++) {
    if (dragGrid.children.length < 7) {
      addNewTile();
    } else {
      console.log('No tile required');
    }
  }
}

// Function to remove the tiles from the non-special tiles (white tiles with no letters) when the user skips a turn.

export function removeNonSpecialTiles() {
  const dragTiles = document.querySelector('.dragGrid');
  while (dragTiles.firstChild) {
    dragTiles.removeChild(dragTiles.firstChild);
  }
}

// https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild

/*
I had issues with drag and drop with CSS, whereby when I dropped onto special squares, the dropped tile would display below the square it needed to be in.
The dropped tile was in fact displaying below the textContent within the special square.
I came up with the solution of separating the tiles into numerous classes (the special tiles having more than one class, which is probably not optimal)..

The removeSpecialPlacedTiles function loops through the board and finds the special squares that have been occupied by a dropped tile, and removes the tile.
*/

export function removeSpecialPlacedTiles() {
  const mainBoard = document.querySelector('.gridContainer');
  const onBoardTiles = mainBoard.children;
  for (let i = 0; i < onBoardTiles.length; i++) {
    // Checks for a childNode and checks to see if the classList of the grid tile does not contain the colourTile or belowBox tile.
    if (onBoardTiles[i].hasChildNodes() && !onBoardTiles[i].classList.contains('colourTile') && !onBoardTiles[i].classList.contains('belowBox')) {
      onBoardTiles[i].removeChild(onBoardTiles[i].firstChild);
    // Checks to see if the tile has numerous children, which would imply the tile is occupied by a draggable tile.
    } else if (onBoardTiles[i].children.length > 0 && onBoardTiles[i].classList.contains('colourTile')) {
      // Removes the last tile, which would be the dragged tile.
      onBoardTiles[i].removeChild(onBoardTiles[i].lastChild);
    }
  }
}

// https://stackoverflow.com/questions/2161634/how-to-check-if-element-has-any-children-in-javascript

/*
Function to remove the occupied classList, which was added in cohesion with the problem I mentioned in the comment spanning lines 74-80
The occupied class is added when a drop occurs, this is to prevent any further dropping on that tile. This means that when the user skips the turn,
the occupied must be removed when the user skips, otherwise the tile will never be able to be dropped on again.
*/

export function removeOccupiedStatus() {
  const gameBoard = document.querySelector('.gridContainer');
  for (let i = 0; i < gameBoard.children.length; i++) {
    gameBoard.children[i].classList.remove('occupied');
  }
}

/*
The skipTurn function invokes the functions created previously to perform essentially perform a skip turn, by removing all the tiles on the board,
adding new tiles to the draggable tile area and removing the occupied status.
When playTurn works, I will need to make sure I no longer remove all tiles, but only the tiles in the current turn.
*/

export function skipTurn() {
  removeNonSpecialTiles();
  addNewTiles();
  removeSpecialPlacedTiles();
  removeOccupiedStatus();
}

/*
The playTurn function is the function that will perform the word recognition and potentially scoring.
Currently I have an array of arrays that returns the boards current status of letters on the grid, including drag and dropped tiles.
I am struggling to envision how to recognise the words however, it seems like I need to search by columns and rows and compare between.
*/

export function playTurn() {
  const allTileArr = [];
  const allTiles = document.querySelector('.gridContainer');
  let col = [];
  const complete2DArr = [];


  for (let j = 0; j < allTiles.childNodes.length; j++) {
  // row.push(allTiles.childNodes[j].childNodes);
    if (allTiles.hasChildNodes === true) {
      allTileArr.push(allTiles.childNodes[j].childNodes[0].textContent);
    } else {
      allTileArr.push(allTiles.childNodes[j].textContent);
    }
  }
  let count = 0;

  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 15; j++) {
      if (count < allTileArr.length) {
        col.push(allTileArr[count]);
        count += 1;
      } else {
        continue;
      }
    }
    complete2DArr.push(col);
    col = [];
  }
  /*
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 15; j++) {
      columnCheck = { column: complete2DArr.coord.split('')[j], row: complete2DArr.split[i] };
      rowCheck = { row: complete2DArr.coord.split('')[i], row: complete2DArr.split[j] };
      console.log(complete2DArr[j][i]);
    }
    addNewTiles();
  }
  */
  console.log(complete2DArr);
}


/*
export function getLettersByColumn() {
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 15; j++) {
      if (j === i) {
      }
    }
  }
}
*/
