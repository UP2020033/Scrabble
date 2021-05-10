# AppProg Scrabble

UP2020033

# Startup

To start the game run the below in the terminal to install all required packages and start the server:

npm start

# Key features

The user can drag and drop tiles onto the main board by holding down the click button, dragging and dropping onto any of the tiles on the main board.

Once the tiles are dragged onto the main board, the user must press play in order to get a score for the placed word.

If the word is a valid word, a score will be given.

The score is given based on the number of letters that make up the word.

If the user wants to replace the non-placed tiles, they must drag the tiles back into the bottom tile rack and press the 'Skip' button. Which will generate 7 new tiles and remove the current tiles displayed.

# Design

The design is straightforward, I didn't go for anything fancy with it. It displays a play and skip button, a score at the top and a scrabble title in the corner. I picked the colours based on personal preference of colour mixtures, that being white non-special tiles and different colours for the special tiles. I implemented media queries which allows the game to adjust to different screen resolutions. It does not support mobile devices and very small screen resolutions though. I spent a lot of time attempting to get media queries to work effectively, so as a result the design was a slight compromise. I identified the game functionality and the adaptability to different screens over how nice the game looks.

# Implementation rationale

This coursework has been a challenge for me, given I do not have much prior coding experience. I opted to just go for a single player game and get that working to the best of my ability. I chose to keep my game mostly client side due to it being single player and added the startup server to provide the web host.

The game was initially designed using plain html and css, once the design was finished I then replaced the html with Javascript. The board is generated using a loop and and checking arrays containing specific indexed numbers which need to represent a specific special tile, classes were then given based on the index. This is probably not the most efficient way to do it but was the best I could come up with at the time of coding it.

Drag and drop was then implemented using the drag and drop API. The module file for drag and drop contains some adjusted code from lecture examples and from understanding the lecture on the drag and drop API. It took a long time to implement a working drag and drop, but this was down to CSS and the positioning of the dropped tiles on top of the textContent of special tiles. It started working eventually due to adding classes which changes the CSS positioning when the droppable tiles are dropped onto a special tiles on the main board.

At this point all core requirements are covered, but I wanted to do better and implement something close to a scrabble game. I was able to create a multidimensional array to build a view of the boards current status of tiles dropped, then loop through that array to find tiles with letters, as well as letters adjacent to those letters to find words.

Scoring was then introduced using a simple system of character length, this is a very simple solution to adding scores, which also means the special tiles were obsolete but nevertheless it works. I also spent a long time trying to get word recognition to work by getting words directly from the board, so ran out of time to implement a more complex scoring system.

# Known issues

1. When the user places tiles above and below (or left and right) of the middle tile and presses play, the '★' icon is included as a letter, where it should be disregarded. This is an issue but as the user should start from the middle tile when they place a letter, it would not be an issue (although the user is not forced to start in the middle in the current state of the game).

2. When checking for valid words, numerous letters are sent to the dictionary server before a valid word is picked up, this is due to the way the functions return the letters within another loop, so individual letters are currently being checked against a dictionary server which is inefficient.

3. Currently words can only be used once as they are pushed to an array when they are found to be valid. This could be an issue with valid words that have already been used not being picked up as valid in the future.

# Future/unfinished work

1. Letters are still draggable when the word is valid and essentially 'submitted'. Work will commence to make sure words are stuck in place when they are valid.

2. The skip button only removes/replaces tiles that are in the bottom row of draggable tiles, so if the user drops a tile then presses skip, it stays on the board.

3. The user must start from the middle tile, but this is not implemented as of yet.

4. Score implementation based on letters and special tile multipliers.

5. Users can only place tiles next to already placed tiles.