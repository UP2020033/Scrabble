
import * as gameBoard from './gameBoard.mjs';
import * as dragAndDrop from './dragAndDrop.mjs';
import * as addNav from './addNav.mjs';
import * as game from './game.mjs';

// Invoking the addNavBar function from addNav.mjs to add the navigation bar.
addNav.addNavBar();

// Invoking the addBoard function to add the initial board for the game.
gameBoard.addBoard();

// Invoking the addGridTiles function to add the main special and non-special tiles to drop onto.
gameBoard.addGridTiles();

// Invoking the addDragBoard function to add the draggable tiles area below the main board.
gameBoard.addDragBoard();

// Invoking the addNewTiles function to add the initial 7 draggable tiles.
game.addNewTiles();

// Invoking the addButton function twice, to place the skip and play turn buttons.
gameBoard.addButton('Play', 'tilePlay');
gameBoard.addButton('Skip', 'tileSkip');

// Adding the event listeners for the functionality to skip a turn.
const skipButton = document.querySelector('#tileSkip');
skipButton.addEventListener('click', game.skipTurn);

// Adding the event listeners for the functionality to play a turn.
const playButton = document.querySelector('#tilePlay');
playButton.addEventListener('click', game.playTurn);

// Invoking function to add all of the event listeners for drag and drop
dragAndDrop.addEventListeners();
