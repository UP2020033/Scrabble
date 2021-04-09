import * as gameBoard from './gameBoard.mjs';
import * as dragAndDrop from './dragAndDrop.mjs';
import * as addNav from './addNav.mjs';
import * as game from './game.mjs';

document.querySelector('.mainSection').appendChild(addNav.addNavDiv());
document.querySelector('#navBar').appendChild(addNav.addNavDivContainer());

document.querySelector('.navContainer').appendChild(addNav.addNavButton('navRules'));
document.querySelector('#navRules').appendChild(addNav.addNavAnchor('Rules', 'test.com'));

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

document.querySelector('.belowBox').appendChild(gameBoard.addGrid('dragGrid'));

game.addStarterTiles();

gameBoard.addButton('Play', 'tilePlay');
gameBoard.addButton('Skip', 'tileSkip');
gameBoard.addButton('Restart', 'tileRestart');

const skipButton = document.querySelector('#tileSkip');
skipButton.addEventListener('click', game.skipTurn);

dragAndDrop.addEventListeners();
