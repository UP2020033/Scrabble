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

const mainFlexBox = document.querySelector('.mainContainer').appendChild(addOuterFlexBox());
const mainGrid = document.querySelector('.outerFbox').appendChild(addGrid());
