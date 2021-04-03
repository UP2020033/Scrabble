
export function dragStartHandler(e) {
  const data = e.target.id;
  e.dataTransfer.setData('text/plain', data);
}

export function dragOverHandler(e) {
  e.preventDefault();
}

export function dropHandler(e) {
  const data = e.dataTransfer.getData('text/plain');
  const dragged = document.getElementById(data);
  e.target.append(dragged);
}

export function addDragDropListeners() {
  const dropzones = document.querySelectorAll('.gridElem');
  for (const dropzone of dropzones) {
    dropzone.addEventListener('dragover', dragOverHandler);
    dropzone.addEventListener('drop', dropHandler);
  }
}

export function addDragStartListener() {
  const divs = document.querySelectorAll('div');
  for (const div of divs) {
    div.addEventListener('dragstart', dragStartHandler);
  }
}

export function addEventListeners() {
  addDragStartListener();
  addDragDropListeners();
}
