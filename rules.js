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
document.querySelector('#navRules').appendChild(addNavAnchor('Rules', 'bbc.co.uk'));

document.querySelector('.navContainer').appendChild(addNavButton('navHome'));
document.querySelector('#navHome').appendChild(addNavAnchor('Home', 'test.com'));

function addHeader(title) {
  const newHeader = document.createElement('h1');
  newHeader.textContent = title;
  return newHeader;
}

document.querySelector('.mainHeader').appendChild(addHeader('Rules'));

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

document.querySelector('.mainContainer').appendChild(addOuterFlexBox());
