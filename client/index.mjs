import * as gameBoard from './gameBoard.mjs';
import * as dragAndDrop from './dragAndDrop.mjs';
import * as addNav from './addNav.mjs';
import * as game from './game.mjs';

document.querySelector('.mainSection').appendChild(addNav.addNavDiv());
document.querySelector('#navBar').appendChild(addNav.addNavDivContainer());

document.querySelector('.navContainer').appendChild(addNav.addNavButton('navRules'));
document.querySelector('.navContainer').appendChild(addNav.addNavItem('Score:', 'navScore'));
document.querySelector('#navRules').appendChild(addNav.addNavAnchor('Scrabble', 'test.com'));

document.querySelector('.mainSection').appendChild(gameBoard.addFlexBox('mainGridFbox'));
document.querySelector('.mainGridFbox').appendChild(gameBoard.addGrid('gridContainer'));

gameBoard.addGridTiles();

document.querySelector('.belowBox').appendChild(gameBoard.addGrid('dragGrid'));

game.addNewTiles();

gameBoard.addButton('Play', 'tilePlay');
gameBoard.addButton('Skip', 'tileSkip');

const skipButton = document.querySelector('#tileSkip');
skipButton.addEventListener('click', game.skipTurn);

const playButton = document.querySelector('#tilePlay');
playButton.addEventListener('click', game.playTurn);

dragAndDrop.addEventListeners();
