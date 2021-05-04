
// Adding a new flexbox div

export function addFlexBox(className) {
  const newFlexbox = document.createElement('div');
  newFlexbox.className = className;
  return newFlexbox;
}

// Adding the main grid

export function addGrid(grid) {
  const addNewGrid = document.createElement('div');
  addNewGrid.className = grid;
  addNewGrid.id = 'gridTest';
  return addNewGrid;
}

/*
Adding the tiles within the main grid. This is probably a sub-optimal solution, I counted the indexes on a 15 x 15 scrabble board, and identified which numbers needed which tiles.
*/

export function addGridTiles() {
  const startWord = [112];
  const tripleWord = [0, 7, 14, 105, 119, 210, 217, 224];
  const tripleLetter = [20, 24, 76, 80, 84, 88, 136, 140, 144, 148, 200, 204];
  const doubleWord = [16, 28, 32, 42, 48, 56, 64, 70, 154, 160, 168, 176, 182, 192, 196, 208];
  const doubleLetter = [3, 11, 36, 38, 45, 52, 59, 92, 96, 98, 102, 108, 116, 122, 126, 128, 132, 165, 172, 179, 186, 188, 214, 220];

  for (let i = 0; i < 225; i++) {
    // Adding 225 divs inside the grid
    const newElem = document.createElement('div');
    /*
    The if statements are in place to differenciate between the classes required to separate the special tiles.
    Ids are assigned on lines based on the loop iteration value.
    */
    if (startWord.includes(i)) {
      newElem.classList.add('gridElemStartWord');
      newElem.classList.add('colourTile');
      newElem.innerText = '★';
      newElem.id = `Tile${i}`;
    }
    if (tripleWord.includes(i)) {
      newElem.classList.add('gridElemTripleWord');
      newElem.classList.add('colourTile');
      newElem.innerText = 'TW';
      newElem.id = `Tile${i}`;
    } else if (tripleLetter.includes(i)) {
      newElem.classList.add('gridElemTripleLetter');
      newElem.classList.add('colourTile');
      newElem.innerText = 'TL';
      newElem.id = `Tile${i}`;
    } else if (doubleWord.includes(i)) {
      newElem.classList.add('gridElemDoubleWord');
      newElem.classList.add('colourTile');
      newElem.innerText = 'DW';
      newElem.id = `Tile${i}`;
    } else if (doubleLetter.includes(i)) {
      newElem.classList.add('gridElemDoubleLetter');
      newElem.classList.add('colourTile');
      newElem.innerText = 'DL';
      newElem.id = `Tile${i}`;
    } else {
      newElem.classList.add('gridElem');
      newElem.id = `Tile${i}`;
    }
    // dropZoneTest class is added to make the tiles dropzones
    // The appending of the created div is done at loop iteration level rather than within the if statements
    newElem.classList.add('dropZoneTest');
    document.querySelector('.gridContainer').appendChild(newElem);
  }
  /*
  Code below is to create a box which covers up the issue previously mentioned (on lines 74-80 inside the game.mjs file), whereby the textContent displays below the actual div.
  */
  const elem = document.createElement('div');
  elem.className = 'belowBox';
  elem.id = 'belowBox';
  document.querySelector('.gridContainer').appendChild(elem);
}

// Function to add the skip and play buttons, added parameters so the function can be used for other purposes if required.

export function addButton(buttonName, id) {
  const tileButton = document.createElement('button');
  tileButton.innerText = buttonName;
  tileButton.className = 'gameButton';
  tileButton.id = id;
  document.querySelector('.belowBox').appendChild(tileButton);
}
