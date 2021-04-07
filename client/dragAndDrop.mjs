
export function dragStartHandler(e) {
  const data = e.target.id;
  e.dataTransfer.setData('text/plain', data);
  if (e.target.parentElement.classList.contains('occupied')) {
    e.target.parentElement.classList.remove('occupied');
  } else {
    console.log('no removal required');
  }
}

export function dragOverHandler(e) {
  e.preventDefault();
  console.log(e.relatedTarget);
}

export function dragToDragged(elem) {
  elem.classList.remove('dragElem');
  elem.classList.add('draggedElem');
}

export function draggedToDrag(elem) {
  elem.classList.remove('draggedElem');
  elem.classList.add('dragElem');
}

export function dropHandler(e) {
  if ((e.target.classList.contains('dragElem') !== true) && (e.target.classList.contains('occupied') !== true && e.target.parentElement.classList.contains('occupied') !== true)) {
    const data = e.dataTransfer.getData('text/plain');
    const draggedElem = document.getElementById(data);
    e.target.append(draggedElem);
    e.target.classList.add('occupied');
    if (draggedElem.parentElement.classList.contains('colourTile')) {
      dragToDragged(draggedElem);
    } else if (draggedElem.parentElement.classList.contains('gridElem')) {
      draggedToDrag(draggedElem);
    } else if (draggedElem.parentElement.classList.contains('dragGrid')) {
      draggedToDrag(draggedElem);
    } else console.log('no-drop');
  }
}

/*
export function dropHandler(e) {
  if ((e.target.classList.contains('dragElem') !== true) && (e.target.classList.contains('occupied') !== true)) {
  // ((e.target.parentNode.classList.contains('dragElem') !== true) || (e.target.classList.contains('occupied'))) {
    const data = e.dataTransfer.getData('text/plain');
    const draggedElem = document.getElementById(data);
    e.target.append(draggedElem);
    e.target.classList.add('occupied');
    if (draggedElem.parentElement.classList.contains('colourTile')) {
      dragToDragged(draggedElem);
    } else if (draggedElem.parentElement.classList.contains('gridElem')) {
      draggedToDrag(draggedElem);
    } else if (draggedElem.parentElement.classList.contains('dragGrid')) {
      draggedToDrag(draggedElem);
    } else {
      console.log('no-drop');
    }
  } else console.log('no-drop');
}
*/


/*
export function dropHandler(e) {
  if ((e.target.classList.contains('dragElem') !== true) || (e.target.classList.contains('occupied'))) {
    const data = e.dataTransfer.getData('text/plain');
    const draggedElem = document.getElementById(data);
    e.target.insertAdjacentElement('afterbegin', draggedElem);
    e.target.classList.add('occupied');
  } else {
    console.log('no-drop');
  }
}
*/
export function addDragDropListeners(tile) {
  const dropZones = document.querySelectorAll(tile);
  for (const dropZone of dropZones) {
    dropZone.addEventListener('dragover', dragOverHandler);
    dropZone.addEventListener('drop', dropHandler);
  }
}

export function addDragStartListener() {
  const divs = document.querySelectorAll('div');
  for (const div of divs) {
    div.addEventListener('dragstart', dragStartHandler);
  }
}

// Boakes, R. (2021). portsoc/ws_drag.
// Retrieved 5 April 2021, from https://github.com/portsoc/ws_drag/blob/master/examples/drag-drop-move/script.js

export function addEventListeners() {
  addDragStartListener();
  addDragDropListeners('.dropZoneTest');
  addDragDropListeners('.dragGrid');
}
/*
export function removeEventListeners(element) {
  if (element.classList.)
}
*/
