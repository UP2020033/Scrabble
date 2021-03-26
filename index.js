function addNavDiv() {
  const navBar = document.createElement('div');
  navBar.id = 'navBar';
  return navBar;
}

function addNavDivContainer() {
  const navBarContainer = document.createElement('div');
  navBarContainer.className = 'navContainer';
  return navBarContainer;
}

function addNavButton(navID) {
  const navButton = document.createElement('div');
  navButton.id = navID;
  return navButton;
}

// Add innerText adapted from: https://www.techiedelight.com/dynamically-generate-anchor-tag-javascript/

function addNavAnchor(text, link) {
  const navAnchor = document.createElement('a');
  navAnchor.setAttribute('href', link);
  navAnchor.innerText = text;
  navAnchor.className = 'anchorClass';
  return navAnchor;
}

document.querySelector('.mainSection').appendChild(addNavDiv());
document.querySelector('#navBar').appendChild(addNavDivContainer());

document.querySelector('.navContainer').appendChild(addNavButton('navRules'));
document.querySelector('#navRules').appendChild(addNavAnchor('Rules', 'test.com'));

function addHeader(title) {
  const newHeader = document.createElement('h1');
  newHeader.textContent = title;
  return newHeader;
}

document.querySelector('.mainHeader').appendChild(addHeader('ScrabbleGame'));

function addMainContainer() {
  const mainContainer = document.createElement('div');
  mainContainer.className = 'mainContainer';
  return mainContainer;
}

document.querySelector('.mainSection').appendChild(addMainContainer());

function addOuterFlexBox() {
  const newFlexbox = document.createElement('div');
  newFlexbox.className = 'outerFbox';
  return newFlexbox;
}

function addGrid(grid) {
  const addNewGrid = document.createElement('div');
  addNewGrid.className = grid;
  return addNewGrid;
}

document.querySelector('.mainContainer').appendChild(addOuterFlexBox());
document.querySelector('.outerFbox').appendChild(addGrid('gridContainer'));

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

document.querySelector('.outerFbox').appendChild(addGrid('dragGrid'));

function addDraggableTiles() {
  const dragTiles = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
  'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  return dragTiles[]
  }
}

/*
function addDragTiles() {
  const draggableTiles = [
    {
      Letter: 'A',
      Score: 1,
    },
    {
      Letter: 'B',
      Score: 3,
    },
    {
      Letter: 'C',
      Score: 3,
    },
    {
      Letter: 'D',
      Score: 2,
    },
    {
      Letter: 'E',
      Score: 1,
    },
    {
      Letter: 'F',
      Score: 4,
    },
    {
      Letter: 'G',
      Score: 2,
    },
    {
      Letter: 'H',
      Score: 4,
    },
    {
      Letter: 'I',
      Score: 1,
    },
    {
      Letter: 'J',
      Score: 8,
    },
    {
      Letter: 'K',
      Score: 5,
    },
    {
      Letter: 'L',
      Score: 1,
    },
    {
      Letter: 'M',
      Score: 3,
    },
    {
      Letter: 'N',
      Score: 1,
    },
    {
      Letter: 'O',
      Score: 1,
    },
    {
      Letter: 'P',
      Score: 3,
    },
    {
      Letter: 'Q',
      Score: 10,
    },
    {
      Letter: 'R',
      Score: 1,
    },
    {
      Letter: 'S',
      Score: 1,
    },
    {
      Letter: 'T',
      Score: 1,
    },
    {
      Letter: 'U',
      Score: 1,
    },
    {
      Letter: 'V',
      Score: 4,
    },
    {
      Letter: 'W',
      Score: 4,
    },
    {
      Letter: 'X',
      Score: 8,
    },
    {
      Letter: 'Y',
      Score: 4,
    },
    {
      Letter: 'Z',
      Score: 10,
    },
  ];
  for (let i = 0; i < draggableTiles.length; i++) {
    const newDragElem = document.createElement('div');
    newDragElem
  }
}
*/

/*
const dragElem1 = document.createElement('div');
dragElem1.className = 'dragElem';
document.querySelector('.dragGrid').appendChild(dragElem1);

const dragElem2 = document.createElement('div');
dragElem2.className = 'dragElem';
document.querySelector('.dragGrid').appendChild(dragElem2);

const dragElem3 = document.createElement('div');
dragElem3.className = 'dragElem';
document.querySelector('.dragGrid').appendChild(dragElem3);

const dragElem4 = document.createElement('div');
dragElem4.className = 'dragElem';
document.querySelector('.dragGrid').appendChild(dragElem4);

const dragElem5 = document.createElement('div');
dragElem5.className = 'dragElem';
document.querySelector('.dragGrid').appendChild(dragElem5);

const dragElem6 = document.createElement('div');
dragElem6.className = 'dragElem';
document.querySelector('.dragGrid').appendChild(dragElem6);

const dragElem7 = document.createElement('div');
dragElem7.className = 'dragElem';
document.querySelector('.dragGrid').appendChild(dragElem7);
*/
