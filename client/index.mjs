import * as gameBoard from './gameBoard.mjs';
import * as addDragTiles from './addDragTiles.mjs';

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

/*
function addHeader(title) {
  const newHeader = document.createElement('h1');
  newHeader.textContent = title;
  return newHeader;
}

document.querySelector('.mainHeader').appendChild(addHeader('ScrabbleGame'));
*/


document.querySelector('.mainSection').appendChild(gameBoard.addFlexBox('mainGridFbox'));
document.querySelector('.mainGridFbox').appendChild(gameBoard.addGrid('gridContainer'));

gameBoard.addGridTiles();

document.querySelector('.mainSection').appendChild(gameBoard.addFlexBox('dragFbox'));
document.querySelector('.dragFbox').appendChild(gameBoard.addGrid('dragGrid'));

addDragTiles.addStarterTiles();


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
