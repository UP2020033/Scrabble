
export function addNavDiv() {
  const navBar = document.createElement('div');
  navBar.id = 'navBar';
  return navBar;
}

export function addNavDivContainer() {
  const navBarContainer = document.createElement('div');
  navBarContainer.className = 'navContainer';
  return navBarContainer;
}

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
