function addOuterFlexBox() {
  const newFlexbox = document.createElement('div');
  newFlexbox.className = 'outerFbox';
  return newFlexbox;
}

function addGrid() {
  const addNewGrid = document.createElement('div');
  addNewGrid.className = 'gridContainer';
  return addNewGrid;
}

document.querySelector('.mainContainer').appendChild(addOuterFlexBox());
document.querySelector('.outerFbox').appendChild(addGrid());

function addGridTiles() {
  const tripleWord = [0, 7, 14, 105, 119, 210, 217, 224];
  const tripleLetter = [20, 24, 76, 80, 84, 88, 136, 140, 144, 148, 200, 204];
  const doubleWord = [16, 28, 32, 42, 48, 56, 64, 70, 112, 154, 160, 168, 176, 182, 192, 196, 208];
  const doubleLetter = [3, 11, 36, 38, 45, 52, 59, 92, 96, 98, 102, 108, 116, 122, 126, 128, 132, 165, 172, 179, 186, 188, 214, 220];

  for (let i = 0; i < 225; i++) {
    const newElem = document.createElement('div');

    if (tripleWord.includes(i)) {
      newElem.className = 'gridElemTripleWord';
      newElem.textContent = 'TW';
    } else if (tripleLetter.includes(i)) {
      newElem.className = 'gridElemTripleLetter';
      newElem.textContent = 'TL';
    } else if (doubleWord.includes(i)) {
      newElem.className = 'gridElemDoubleWord';
      newElem.textContent = 'DW';
    } else if (doubleLetter.includes(i)) {
      newElem.className = 'gridElemDoubleLetter';
      newElem.textContent = 'DL';
    } else {
      newElem.className = 'gridElem';
    }
    document.querySelector('.gridContainer').appendChild(newElem);
  }
}

addGridTiles();
