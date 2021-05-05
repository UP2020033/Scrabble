
// Creating div element for the nav bar

export function addNavDiv() {
  const navBar = document.createElement('div');
  navBar.id = 'navBar';
  return navBar;
}

// Creating div element as a container for the navbar

export function addNavDivContainer() {
  const navBarContainer = document.createElement('div');
  navBarContainer.className = 'navContainer';
  return navBarContainer;
}

// Adding a div element as a nav bar for a button

export function addNavButton(navID) {
  const navButton = document.createElement('div');
  navButton.id = navID;
  return navButton;
}

// Add innerText adapted from:
// How to dynamically generate an anchor tag with JavaScript/jQuery – Techie Delight. (2021). Retrieved 5 April 2021, from https://www.techiedelight.com/dynamically-generate-anchor-tag-javascript/

export function addNavAnchor(text, link) {
  const navAnchor = document.createElement('a');
  navAnchor.setAttribute('href', link);
  navAnchor.innerText = text;
  navAnchor.className = 'anchorClass';
  return navAnchor;
}

export function addNavItem(text, className) {
  const navItem = document.createElement('div');
  navItem.innerText = text;
  navItem.className = className;
  return navItem;
}

// Function to add append the navBar and the items within, looks better than appending them all separately in the index.mjs file.

export function addNavBar() {
  document.querySelector('.mainSection').appendChild(addNavDiv());
  document.querySelector('#navBar').appendChild(addNavDivContainer());
  document.querySelector('.navContainer').appendChild(addNavButton('navRules'));
  document.querySelector('.navContainer').appendChild(addNavItem('Score:', 'navScore'));
  document.querySelector('#navRules').appendChild(addNavAnchor('Scrabble', 'test.com'));
}
