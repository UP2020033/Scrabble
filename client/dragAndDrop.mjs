/*
DragStart handler, adapted from Rich's code (referenced on line 58)
Adjusted event to event target
Added an if statement to remove the classList of 'occupied' on dragStart if it is existent,
this is to remove occupied class when the dragStart occurs on a tile that has already been dropped on the grid
*/
export function dragStartHandler(e) {
  const data = e.target.id;
  e.dataTransfer.setData('text/plain', data);
  if (e.target.parentElement.classList.contains('occupied')) {
    e.target.parentElement.classList.remove('occupied');
  } else {
    console.log('no removal required');
  }
}

// Preventing the default behaviour of the browser
export function dragOverHandler(e) {
  e.preventDefault();
}

/*
Removing the class 'dragElem' and switching to 'draggedElem' which have different CSS properties. 'draggedElem' has position relative set to it displays over the correct tile,
instead of displaying below special tiles due to the special tiles having textContent.
*/

export function dragToDragged(elem) {
  elem.classList.remove('dragElem');
  elem.classList.add('draggedElem');
}

/*
Opposite of the dragToDragged function, it returns the 'dragElem' class if the tile is dropped back into the draggable tile pool.
*/

export function draggedToDrag(elem) {
  elem.classList.remove('draggedElem');
  elem.classList.add('dragElem');
}

export function dropHandler(e) {
  /*
  Checking if the event target's classes for the dragElem and occupied to make sure we do not drop on either occupied tiles or tiles in the tile pool.
  Also checking the event target's parent element classlist, this is because when the tile is occupied, the dropped tile that is occupying it becomes the target,
  so I needed to add a check for that too.
  */
  if ((e.target.classList.contains('dragElem') !== true) && (e.target.classList.contains('occupied') !== true && e.target.parentElement.classList.contains('occupied') !== true)) {
    const data = e.dataTransfer.getData('text/plain');
    const draggedElem = document.getElementById(data);
    e.target.append(draggedElem);
    e.target.classList.add('occupied');
    /*
    Another if statement to check the parentElement for 'colourTile' which is a special tile,
    if it does then invoke the dragToDragged function to change dropped tile's className to 'draggedElem'.
    */
    if (draggedElem.parentElement.classList.contains('colourTile')) {
      dragToDragged(draggedElem);
    // The code below checks the draggedElement's parent element on the drop and if it contains 'gridElem', it will invoke the draggedToDrag function to change the class to 'dragElem'.
    } else if (draggedElem.parentElement.classList.contains('gridElem')) {
      draggedToDrag(draggedElem);
    // The code below checks the draggedElement's parent element on the drop and if it contains 'dragGrid', which is the grid pool area for the draggable tiles
    } else if (draggedElem.parentElement.classList.contains('dragGrid')) {
      draggedToDrag(draggedElem);
    /*
    Essentially, the two else if statements are there to remove the 'draggedElem' class so that the relative CSS positioning is removed and they display where they should.
    The relative CSS positioning is only supposed to be there to remove the complication of
    the textContent in the special tiles making the drag and dropped tile display below the tile it is in
    */
    } else console.log('no-drop');
  }
}

// Looping over the dropZones and adding the dragOver and Drop event listeners
export function addDragDropListeners(tile) {
  const dropZones = document.querySelectorAll(tile);
  // for of loop looping over the dropzones and adding the eventlisteners for dragover and drop handlers
  for (const dropZone of dropZones) {
    dropZone.addEventListener('dragover', dragOverHandler);
    dropZone.addEventListener('drop', dropHandler);
  }
}

// Adding the dragStart event listeners, again.. for of loop looping over the divs this time
export function addDragStartListener() {
  const divs = document.querySelectorAll('div');
  for (const div of divs) {
    div.addEventListener('dragstart', dragStartHandler);
  }
}

// Boakes, R. (2021). portsoc/ws_drag.
// Retrieved 5 April 2021, from https://github.com/portsoc/ws_drag/blob/master/examples/drag-drop-move/script.js

// Function to add all of the event listeners, with the dropZoneTest and dragGrid classes selected to loop over for drag over and drop event listeners
export function addEventListeners() {
  addDragStartListener();
  addDragDropListeners('.dropZoneTest');
  addDragDropListeners('.dragGrid');
}
