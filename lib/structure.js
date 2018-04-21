/* Make a structure from a definition in JSON format.

:arg object structure: The newly created structure.
:arg object definition: Definition in JSON format.
*/
function _makeStructure(structure, definition) {
  var element, key, attr;

  if (typeof(definition) === 'object') {
    if (!Array.isArray(definition)) {
      for (key in definition) {
        if (key !== 'attrs') {
          element = document.createElement(key);
          _makeStructure(element, definition[key]);
          structure.appendChild(element);
          console.log('Created element ' + key);
        }
        else {
          for (attr in definition[key]) {
            structure.setAttribute(attr, definition[key][attr]);
            console.log('Added attribute ' + key);
          }
        }
      }
    }
    else {
      for (key in definition) {
        _makeStructure(structure, definition[key]);
      }
    }
  }
  else {
    element = document.createTextNode(definition);
    structure.appendChild(element);
    console.log('Created text');
  }
}

/* Make a structure from a definition in JSON format.

:arg object definition: Definition in JSON format.

:returns object: The newly created structure.
*/
function makeStructure(definition) {
  var key = Object.keys(definition)[0];
  var element = document.createElement(key);

  _makeStructure(element, definition[key]);

  return element;
}
