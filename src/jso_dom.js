"use strict";

/**
 * Make a DOM from a JavaScript Object.
 *
 * @arg {Object} tree - The newly created DOM.
 * @arg {Object} definition - Definition in JSON format.
 */
function _JSOToDOM(tree, definition) {
  var element, key, attr;

  if (!Array.isArray(definition)) {
    for (key in definition) {
      if (key === "attrs") {
        for (attr in definition.attrs) {
          tree.setAttribute(attr, definition.attrs[attr]);
        }
      }
      else if (key === "text") {
        element = document.createTextNode(definition.text);
        tree.appendChild(element);
      }
      else if (key === "event") {
        tree.addEventListener(
          definition.event.type, definition.event.listener);
      }
      else {
        element = document.createElement(key);
        _JSOToDOM(element, definition[key]);
        tree.appendChild(element);
      }
    }
  }
  else {
    for (key in definition) {
      _JSOToDOM(tree, definition[key]);
    }
  }
}

/**
 * Make a DOM from a JavaScript Object.
 *
 * @arg {Object} definition - Definition in JSON format.
 *
 * @return {Object} - The newly created DOM.
 */
function JSOToDOM(definition) {
  var key = Object.keys(definition)[0],
      root = document.createElement(key);

  _JSOToDOM(root, definition[key]);

  return root;
}
