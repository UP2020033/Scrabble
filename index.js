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
  const tripleLetter = [20, 24, 76, 80, 84, 88, 136, 140, 144, 148, 201, 205];
  const doubleWord = [16, 28, 32, 42, 48, 56, 64, 70, 112, 156, 161, 169, 177, 183, 193, 197, 209];
  const doubleLetter = [3, 11, 36, 38, 45, 52, 59, 92, 96, 98, 102, 108, 116, 122, 126, 128, 132, 166, 173, 180, 187, 189, 214, 222];
  for (let i = 0; i < 224; i++) {
    if (tripleWord.includes(i)) {
      const newElem = document.createElement('div');
      document.querySelector('.gridContainer').appendChild(newElem);
      newElem.className = 'gridElemTripleWord';
    } else if (tripleLetter.includes(i)) {
      const newElem = document.createElement('div');
      document.querySelector('.gridContainer').appendChild(newElem);
      newElem.className = 'gridElemTripleLetter';
    } else if (doubleWord.includes(i)) {
      const newElem = document.createElement('div');
      document.querySelector('.gridContainer').appendChild(newElem);
      newElem.className = 'gridElemDoubleWord';
    } else if (doubleLetter.includes(i)) {
      const newElem = document.createElement('div');
      document.querySelector('.gridContainer').appendChild(newElem);
      newElem.className = 'gridElemDoubleLetter';
    } else const newElem = document.createElement('div');

  }
}

addGridTiles();
