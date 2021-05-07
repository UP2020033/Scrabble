
// Function which returns random letter based on the Arr index.

export function addRandomLetter() {
  const dragTiles = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
    'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  return dragTiles[Math.floor(Math.random() * dragTiles.length)];
}

// Get a random item from a JavaScript array. Stack Overflow.
// (2021). Retrieved 5 April 2021, from https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array/5915122#5915122.

// Array of ids to be assigned to the draggable tiles - Should probably make it an automated process.

// Array to add the unique ids for draggable tiles, possibly need to add more than 225 unique ids, but it is unlikely the user will skip turn in order to get over 500 unique tile ids.
const dragIdArr = [];
for (let i = 0; i < 500; i++) {
  dragIdArr.push(i);
}

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
  const wordExists = [];

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

  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 15; j++) {
      if (complete2DArr[i][j] === 'TW' || complete2DArr[i][j] === 'DL' || complete2DArr[i][j] === 'TL' || complete2DArr[i][j] === 'DW' || complete2DArr[i][j] === '★' || complete2DArr[i][j] === '') {
        console.log('No letter identified');
      } else {
        validWord(findHorizontalWords(i, j));
        validWord(findVerticalWords(i, j));
      }
    }
  }
  console.log(complete2DArr);

  function findHorizontalWords(row, column) {
    // Horizontal word
    let horizontalWord = [];
    for (let i = column; i >= 0; i--) {
      const tileText = complete2DArr[row][i];
      if ((tileText.length !== 2 || tileText.split('')[0] === '★') && tileText.length !== 0) {
        // Tile has a letter, add it to the array
        horizontalWord.push(tileText.slice(-1));
        // console.log(horizontalWord.join(''));
      } else {
        break;
      }
    }

    horizontalWord.reverse(); // Reverse array because words were added in back-to-front order up until this point

    for (let i = column + 1; i < complete2DArr[row].length; i++) {
      const tileText = complete2DArr[row][i];
      if ((tileText.length !== 2 || tileText.split('')[0] === '★') && tileText.length !== 0) {
        // Tile has a letter
        horizontalWord.push(tileText.slice(-1));
        console.log(horizontalWord.join(''));
      } else {
        break;
      }
    }
    horizontalWord = horizontalWord.join('');
    return horizontalWord;
  }

  function findVerticalWords(row, column) {
    // Vertical word
    let verticalWord = [];
    for (let i = row; i >= 0; i--) {
      const tileText = complete2DArr[i][column];
      if ((tileText.length !== 2 || tileText.split('')[0] === '★') && tileText.length !== 0) {
        // Tile has a letter, add it to the array
        verticalWord.push(tileText.slice(-1));
        // console.log(verticalWord.join(''));
      } else {
        break;
      }
    }

    verticalWord.reverse(); // Reverse array because words were added in back-to-front order up until this point

    for (let i = row + 1; i < complete2DArr.length; i++) {
      const tileText = complete2DArr[i][column];
      if ((tileText.length !== 2 || tileText.split('')[0] === '★') && tileText.length !== 0) {
        // Tile has a letter
        verticalWord.push(tileText.slice(-1));
        console.log(verticalWord.join(''));
      } else {
        break;
      }
    }
    verticalWord = verticalWord.join('');
    return verticalWord;
  }

  async function validWord(word) {
    const checkURL = 'https://dictionary-dot-sse-2020.nw.r.appspot.com/' + word;
    const response = await fetch(checkURL);

    if (wordExists.includes(word)) {
      console.log(`${word} has already been used`);
    } else if (response.status === 200 && !wordExists.includes(word)) {
      console.log(`${word} is a valid word!`);
      wordExists.push(word);
    } else if (response.status === 400) {
      console.log('This is not a valid word');
    } else if (response.status === 404) {
      console.log('This is not a valid word');
    }
  }
}
