'use strict'

/* Make a structure from a definition in JSON format.

:arg object structure: The newly created structure.
:arg object definition: Definition in JSON format.
*/
function _makeStructure(structure, definition) {
  var element, key, attr;

  if (!Array.isArray(definition)) {
    for (key in definition) {
      if (key === 'attrs') {
        for (attr in definition[key]) {
          structure.setAttribute(attr, definition[key][attr]);
        }
      }
      else if (key === 'text') {
        element = document.createTextNode(definition.text);
        structure.appendChild(element);
      }
      else if (key === 'event') {
        structure.addEventListener(
          definition[key].type, definition[key].listener);
      }
      else {
        element = document.createElement(key);
        _makeStructure(element, definition[key]);
        structure.appendChild(element);
      }
    }
  }
  else {
    for (key in definition) {
      _makeStructure(structure, definition[key]);
    }
  }
}

/* Make a structure from a definition in JSON format.

:arg object definition: Definition in JSON format.

:returns object: The newly created structure.
*/
function makeStructure(definition) {
  var key = Object.keys(definition)[0],
      element = document.createElement(key);

  _makeStructure(element, definition[key]);

  return element;
}
